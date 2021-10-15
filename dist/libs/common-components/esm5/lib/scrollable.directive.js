/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NavigateService } from "./navigate.service";
import { PagePreloadService } from "./page-preload.service";
import { ZoomService } from "./zoom.service";
import { WindowService } from "./window.service";
import { ViewportService } from "./viewport.service";
import * as jquery from "jquery";
/** @type {?} */
var $ = jquery;
var ScrollableDirective = /** @class */ (function () {
    function ScrollableDirective(_elementRef, _navigateService, _pagePreloadService, _zoomService, _windowService, _viewportService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._navigateService = _navigateService;
        this._pagePreloadService = _pagePreloadService;
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this._viewportService = _viewportService;
        this.zoom = 100;
        this.loadedPagesSet = new Set();
        this.zoom = _zoomService.zoom ? _zoomService.zoom : this.zoom;
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.zoom = val ? val : _this.zoom;
            _this.refresh();
        }));
    }
    /**
     * @return {?}
     */
    ScrollableDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zoom = this._zoomService.zoom ? this._zoomService.zoom : this.zoom;
        this._navigateService.navigate.subscribe(((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.currentPage = value;
            _this.scrollToPage(value);
        })));
        this.refresh();
    };
    /**
     * @return {?}
     */
    ScrollableDirective.prototype.scrolling = /**
     * @return {?}
     */
    function () {
        this.refresh();
    };
    /**
     * @return {?}
     */
    ScrollableDirective.prototype.resizing = /**
     * @return {?}
     */
    function () {
        this.refresh();
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    ScrollableDirective.prototype.scrollToPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        /** @type {?} */
        var el = this._elementRef.nativeElement;
        /** @type {?} */
        var page = this.getPage(pageNumber);
        /** @type {?} */
        var prev = pageNumber > 0 ? this.getPage(pageNumber - 1) : null;
        /** @type {?} */
        var isSameTop = (prev && $(prev).offset().top === $(page).offset().top);
        if (this._viewportService.checkInViewport(page, this.zoom) && isSameTop) {
            return;
        }
        /** @type {?} */
        var pagesHeight = this.calculateOffset(pageNumber);
        /** @type {?} */
        var options = {
            left: 0,
            top: pagesHeight
        };
        if (el) {
            // using polyfill
            el.scroll(options);
        }
    };
    /**
     * @private
     * @return {?}
     */
    ScrollableDirective.prototype.getChildren = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            // here and in the similar line below we getting the document pages
            return el.children.item(0).children.item(0).children;
        }
    };
    /**
     * @private
     * @param {?} pageNumber
     * @return {?}
     */
    ScrollableDirective.prototype.getPage = /**
     * @private
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        /** @type {?} */
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            return el.children.item(0).children.item(0).children.item(pageNumber - 1);
        }
    };
    /**
     * @private
     * @param {?} pageNumber
     * @return {?}
     */
    ScrollableDirective.prototype.calculateOffset = /**
     * @private
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        /** @type {?} */
        var count = this._windowService.isFirefox() ? 1 : this.countPagesOnWidth();
        /** @type {?} */
        var margin = this._windowService.isDesktop() ? 40 : 10;
        /** @type {?} */
        var pagesHeight = 0;
        for (var i = 1; i < pageNumber / count; i++) {
            /** @type {?} */
            var item = this.getPage(i);
            /** @type {?} */
            var clientHeight = item ? item.clientHeight : 0;
            pagesHeight += clientHeight > 0 ? clientHeight * this.getZoom() + margin : 0;
        }
        return pagesHeight;
    };
    /**
     * @private
     * @return {?}
     */
    ScrollableDirective.prototype.countPagesOnWidth = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pageEl = this.getPage(1);
        /** @type {?} */
        var offset = 150;
        if (pageEl) {
            /** @type {?} */
            var count = Math.floor((this.getWidth() - offset) / (pageEl.getBoundingClientRect().width * this.getZoom()));
            if (count !== 0) {
                return count;
            }
        }
        return 1;
    };
    /**
     * @return {?}
     */
    ScrollableDirective.prototype.refresh = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var page;
        /** @type {?} */
        var currentPageSet = false;
        /** @type {?} */
        var pageElem = this.getPage(this.currentPage);
        /** @type {?} */
        var currentPageRect = this.currentPage && pageElem ? pageElem.getBoundingClientRect() : null;
        for (page = 1; page < this.getChildren().length + 1; page++) {
            /** @type {?} */
            var element = this.getPage(page);
            if (this._viewportService.checkInViewport(element, this.zoom)) {
                if (!currentPageSet) {
                    if (!this.currentPage || !pageElem || (this.currentPage && currentPageRect && element.getBoundingClientRect().top !== currentPageRect.top)) {
                        this.currentPage = page;
                        if ((this.isPresentation && this._navigateService.currentPage === 0) || !this.isPresentation) {
                            this._navigateService.currentPage = page;
                        }
                    }
                    currentPageSet = true;
                }
                if (!this.loadedPagesSet.has(page)) {
                    this._pagePreloadService.changeLastPageInView(page);
                    this.loadedPagesSet.add(page);
                }
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ScrollableDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.refresh();
    };
    /**
     * @return {?}
     */
    ScrollableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.zoom = this._zoomService.zoom ? this._zoomService.zoom : this.zoom;
    };
    /**
     * @private
     * @return {?}
     */
    ScrollableDirective.prototype.getWidth = /**
     * @private
     * @return {?}
     */
    function () {
        return this._elementRef ? this._elementRef.nativeElement.offsetWidth : window.innerWidth;
    };
    /**
     * @private
     * @return {?}
     */
    ScrollableDirective.prototype.getZoom = /**
     * @private
     * @return {?}
     */
    function () {
        return this.zoom / 100;
    };
    ScrollableDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdScrollable]'
                },] }
    ];
    /** @nocollapse */
    ScrollableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NavigateService },
        { type: PagePreloadService },
        { type: ZoomService },
        { type: WindowService },
        { type: ViewportService }
    ]; };
    ScrollableDirective.propDecorators = {
        isPresentation: [{ type: Input }],
        scrolling: [{ type: HostListener, args: ['scroll',] }],
        resizing: [{ type: HostListener, args: ['window:resize',] }]
    };
    return ScrollableDirective;
}());
export { ScrollableDirective };
if (false) {
    /** @type {?} */
    ScrollableDirective.prototype.isPresentation;
    /**
     * @type {?}
     * @private
     */
    ScrollableDirective.prototype.currentPage;
    /**
     * @type {?}
     * @private
     */
    ScrollableDirective.prototype.zoom;
    /**
     * @type {?}
     * @private
     */
    ScrollableDirective.prototype.loadedPagesSet;
    /**
     * @type {?}
     * @private
     */
    ScrollableDirective.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    ScrollableDirective.prototype._navigateService;
    /**
     * @type {?}
     * @private
     */
    ScrollableDirective.prototype._pagePreloadService;
    /**
     * @type {?}
     * @private
     */
    ScrollableDirective.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    ScrollableDirective.prototype._windowService;
    /**
     * @type {?}
     * @private
     */
    ScrollableDirective.prototype._viewportService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2Nyb2xsYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztJQUMzQixDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQVVFLDZCQUFvQixXQUFvQyxFQUNwQyxnQkFBaUMsRUFDakMsbUJBQXVDLEVBQ3ZDLFlBQXlCLEVBQ3pCLGNBQTZCLEVBQzdCLGdCQUFpQztRQUxyRCxpQkFZQztRQVptQixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQ3ZDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFSN0MsU0FBSSxHQUFHLEdBQUcsQ0FBQztRQUNYLG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQVNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FB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QzNCOzs7O2dCQWpCQyxVQUFVO2dCQU9KLGVBQWU7Z0JBQ2Ysa0JBQWtCO2dCQUNsQixXQUFXO2dCQUNYLGFBQWE7Z0JBQ2IsZUFBZTs7O2lDQVFwQixLQUFLOzRCQTZCTCxZQUFZLFNBQUMsUUFBUTsyQkFJckIsWUFBWSxTQUFDLGVBQWU7O0lBdUcvQiwwQkFBQztDQUFBLEFBNUlELElBNElDO1NBeklZLG1CQUFtQjs7O0lBQzlCLDZDQUFpQzs7Ozs7SUFFakMsMENBQTRCOzs7OztJQUM1QixtQ0FBbUI7Ozs7O0lBQ25CLDZDQUFtQzs7Ozs7SUFFdkIsMENBQTRDOzs7OztJQUM1QywrQ0FBeUM7Ozs7O0lBQ3pDLGtEQUErQzs7Ozs7SUFDL0MsMkNBQWlDOzs7OztJQUNqQyw2Q0FBcUM7Ozs7O0lBQ3JDLCtDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05hdmlnYXRlU2VydmljZX0gZnJvbSBcIi4vbmF2aWdhdGUuc2VydmljZVwiO1xuaW1wb3J0IHtQYWdlUHJlbG9hZFNlcnZpY2V9IGZyb20gXCIuL3BhZ2UtcHJlbG9hZC5zZXJ2aWNlXCI7XG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSBcIi4vd2luZG93LnNlcnZpY2VcIjtcbmltcG9ydCB7Vmlld3BvcnRTZXJ2aWNlfSBmcm9tIFwiLi92aWV3cG9ydC5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuY29uc3QgJCA9IGpxdWVyeTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkU2Nyb2xsYWJsZV0nXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbGFibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlzUHJlc2VudGF0aW9uOiBib29sZWFuO1xuXG4gIHByaXZhdGUgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgcHJpdmF0ZSB6b29tID0gMTAwO1xuICBwcml2YXRlIGxvYWRlZFBhZ2VzU2V0ID0gbmV3IFNldCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcGFnZVByZWxvYWRTZXJ2aWNlOiBQYWdlUHJlbG9hZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdmlld3BvcnRTZXJ2aWNlOiBWaWV3cG9ydFNlcnZpY2UpIHtcblxuICAgIHRoaXMuem9vbSA9IF96b29tU2VydmljZS56b29tID8gX3pvb21TZXJ2aWNlLnpvb20gOiB0aGlzLnpvb207XG4gICAgX3pvb21TZXJ2aWNlLnpvb21DaGFuZ2Uuc3Vic2NyaWJlKCh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy56b29tID0gdmFsID8gdmFsIDogdGhpcy56b29tO1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy56b29tID0gdGhpcy5fem9vbVNlcnZpY2Uuem9vbSA/IHRoaXMuX3pvb21TZXJ2aWNlLnpvb20gOiB0aGlzLnpvb207XG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLm5hdmlnYXRlLnN1YnNjcmliZSgodmFsdWUgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHZhbHVlO1xuICAgICAgdGhpcy5zY3JvbGxUb1BhZ2UodmFsdWUpO1xuICAgIH0pKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3Njcm9sbCcpIHNjcm9sbGluZygpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKSByZXNpemluZygpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHNjcm9sbFRvUGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBwYWdlID0gdGhpcy5nZXRQYWdlKHBhZ2VOdW1iZXIpO1xuICAgIGNvbnN0IHByZXYgPSBwYWdlTnVtYmVyID4gMCA/IHRoaXMuZ2V0UGFnZShwYWdlTnVtYmVyIC0gMSkgOiBudWxsO1xuICAgIGNvbnN0IGlzU2FtZVRvcCA9IChwcmV2ICYmICQocHJldikub2Zmc2V0KCkudG9wID09PSAkKHBhZ2UpLm9mZnNldCgpLnRvcCk7XG4gICAgaWYgKHRoaXMuX3ZpZXdwb3J0U2VydmljZS5jaGVja0luVmlld3BvcnQocGFnZSwgdGhpcy56b29tKSAmJiBpc1NhbWVUb3ApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGFnZXNIZWlnaHQgPSB0aGlzLmNhbGN1bGF0ZU9mZnNldChwYWdlTnVtYmVyKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogcGFnZXNIZWlnaHRcbiAgICB9O1xuICAgIGlmKGVsKXtcbiAgICAgIC8vIHVzaW5nIHBvbHlmaWxsXG4gICAgICBlbC5zY3JvbGwob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaGlsZHJlbigpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRSZWYgPyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xuICAgIGlmIChlbCkge1xuICAgICAgLy8gaGVyZSBhbmQgaW4gdGhlIHNpbWlsYXIgbGluZSBiZWxvdyB3ZSBnZXR0aW5nIHRoZSBkb2N1bWVudCBwYWdlc1xuICAgICAgcmV0dXJuIGVsLmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFBhZ2UocGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbGVtZW50UmVmID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IDogbnVsbDtcbiAgICBpZiAoZWwpIHtcbiAgICAgIHJldHVybiBlbC5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbShwYWdlTnVtYmVyIC0gMSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVPZmZzZXQocGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLl93aW5kb3dTZXJ2aWNlLmlzRmlyZWZveCgpID8gMSA6IHRoaXMuY291bnRQYWdlc09uV2lkdGgoKTtcbiAgICBjb25zdCBtYXJnaW4gPSB0aGlzLl93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpID8gNDAgOiAxMDtcbiAgICBsZXQgcGFnZXNIZWlnaHQgPSAwO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGFnZU51bWJlciAvIGNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldFBhZ2UoaSk7XG4gICAgICBjb25zdCBjbGllbnRIZWlnaHQgPSBpdGVtID8gaXRlbS5jbGllbnRIZWlnaHQgOiAwO1xuICAgICAgcGFnZXNIZWlnaHQgKz0gY2xpZW50SGVpZ2h0ID4gMCA/IGNsaWVudEhlaWdodCAqIHRoaXMuZ2V0Wm9vbSgpICsgbWFyZ2luIDogMDtcbiAgICB9XG4gICAgcmV0dXJuIHBhZ2VzSGVpZ2h0O1xuICB9XG5cbiAgcHJpdmF0ZSBjb3VudFBhZ2VzT25XaWR0aCgpIHtcbiAgICBjb25zdCBwYWdlRWwgPSB0aGlzLmdldFBhZ2UoMSk7XG4gICAgY29uc3Qgb2Zmc2V0ID0gMTUwO1xuICAgIGlmIChwYWdlRWwpIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5mbG9vcigodGhpcy5nZXRXaWR0aCgpIC0gb2Zmc2V0KSAvIChwYWdlRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKiB0aGlzLmdldFpvb20oKSkpO1xuICAgICAgaWYgKGNvdW50ICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGxldCBwYWdlO1xuICAgIGxldCBjdXJyZW50UGFnZVNldCA9IGZhbHNlO1xuICAgIGNvbnN0IHBhZ2VFbGVtID0gdGhpcy5nZXRQYWdlKHRoaXMuY3VycmVudFBhZ2UpO1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlUmVjdCA9IHRoaXMuY3VycmVudFBhZ2UgJiYgcGFnZUVsZW0gPyBwYWdlRWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IG51bGw7XG4gICAgZm9yIChwYWdlID0gMTsgcGFnZSA8IHRoaXMuZ2V0Q2hpbGRyZW4oKS5sZW5ndGggKyAxOyBwYWdlKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdldFBhZ2UocGFnZSk7XG4gICAgICBpZiAodGhpcy5fdmlld3BvcnRTZXJ2aWNlLmNoZWNrSW5WaWV3cG9ydChlbGVtZW50LCB0aGlzLnpvb20pKSB7XG4gICAgICAgIGlmICghY3VycmVudFBhZ2VTZXQpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFBhZ2UgfHwgIXBhZ2VFbGVtIHx8ICh0aGlzLmN1cnJlbnRQYWdlICYmIGN1cnJlbnRQYWdlUmVjdCAmJiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAhPT0gY3VycmVudFBhZ2VSZWN0LnRvcCkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgICAgICAgICAgaWYgKCh0aGlzLmlzUHJlc2VudGF0aW9uICYmIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9PT0gMCkgfHwgIXRoaXMuaXNQcmVzZW50YXRpb24pIHtcbiAgICAgICAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gcGFnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudFBhZ2VTZXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5sb2FkZWRQYWdlc1NldC5oYXMocGFnZSkpIHtcbiAgICAgICAgICB0aGlzLl9wYWdlUHJlbG9hZFNlcnZpY2UuY2hhbmdlTGFzdFBhZ2VJblZpZXcocGFnZSk7XG4gICAgICAgICAgdGhpcy5sb2FkZWRQYWdlc1NldC5hZGQocGFnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnpvb20gPSB0aGlzLl96b29tU2VydmljZS56b29tID8gdGhpcy5fem9vbVNlcnZpY2Uuem9vbSA6IHRoaXMuem9vbTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBnZXRXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRab29tKCkge1xuICAgIHJldHVybiB0aGlzLnpvb20gLyAxMDA7XG4gIH1cbn1cbiJdfQ==