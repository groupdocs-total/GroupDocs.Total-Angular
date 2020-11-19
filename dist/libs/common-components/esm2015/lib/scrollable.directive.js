/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener } from '@angular/core';
import { NavigateService } from "./navigate.service";
import { PagePreloadService } from "./page-preload.service";
import { ZoomService } from "./zoom.service";
import { WindowService } from "./window.service";
import { ViewportService } from "./viewport.service";
import * as jquery from "jquery";
/** @type {?} */
const $ = jquery;
export class ScrollableDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _navigateService
     * @param {?} _pagePreloadService
     * @param {?} _zoomService
     * @param {?} _windowService
     * @param {?} _viewportService
     */
    constructor(_elementRef, _navigateService, _pagePreloadService, _zoomService, _windowService, _viewportService) {
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
        (val) => {
            this.zoom = val ? val : this.zoom;
            this.refresh();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.zoom = this._zoomService.zoom ? this._zoomService.zoom : this.zoom;
        this._navigateService.navigate.subscribe(((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.currentPage = value;
            this.scrollToPage(value);
        })));
        this.refresh();
    }
    /**
     * @return {?}
     */
    scrolling() {
        this.refresh();
    }
    /**
     * @return {?}
     */
    resizing() {
        this.refresh();
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    scrollToPage(pageNumber) {
        /** @type {?} */
        const el = this._elementRef.nativeElement;
        /** @type {?} */
        const page = this.getPage(pageNumber);
        /** @type {?} */
        const prev = pageNumber > 0 ? this.getPage(pageNumber - 1) : null;
        /** @type {?} */
        const isSameTop = (prev && $(prev).offset().top === $(page).offset().top);
        if (this._viewportService.checkInViewport(page, this.zoom) && isSameTop) {
            return;
        }
        /** @type {?} */
        const pagesHeight = this.calculateOffset(pageNumber);
        /** @type {?} */
        const options = {
            left: 0,
            top: pagesHeight
        };
        if (el) {
            // using polyfill
            el.scroll(options);
        }
    }
    /**
     * @private
     * @return {?}
     */
    getChildren() {
        /** @type {?} */
        const el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            // here and in the similar line below we getting the document pages
            return el.children.item(0).children.item(0).children;
        }
    }
    /**
     * @private
     * @param {?} pageNumber
     * @return {?}
     */
    getPage(pageNumber) {
        /** @type {?} */
        const el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            return el.children.item(0).children.item(0).children.item(pageNumber - 1);
        }
    }
    /**
     * @private
     * @param {?} pageNumber
     * @return {?}
     */
    calculateOffset(pageNumber) {
        /** @type {?} */
        const count = this._windowService.isFirefox() ? 1 : this.countPagesOnWidth();
        /** @type {?} */
        const margin = this._windowService.isDesktop() ? 40 : 10;
        /** @type {?} */
        let pagesHeight = 0;
        for (let i = 1; i < pageNumber / count; i++) {
            /** @type {?} */
            const item = this.getPage(i);
            /** @type {?} */
            const clientHeight = item ? item.clientHeight : 0;
            pagesHeight += clientHeight > 0 ? clientHeight * this.getZoom() + margin : 0;
        }
        return pagesHeight;
    }
    /**
     * @private
     * @return {?}
     */
    countPagesOnWidth() {
        /** @type {?} */
        const pageEl = this.getPage(1);
        /** @type {?} */
        const offset = 150;
        if (pageEl) {
            /** @type {?} */
            const count = Math.floor((this.getWidth() - offset) / (pageEl.getBoundingClientRect().width * this.getZoom()));
            if (count !== 0) {
                return count;
            }
        }
        return 1;
    }
    /**
     * @return {?}
     */
    refresh() {
        /** @type {?} */
        let page;
        /** @type {?} */
        let currentPageSet = false;
        /** @type {?} */
        const pageElem = this.getPage(this.currentPage);
        /** @type {?} */
        const currentPageRect = this.currentPage && pageElem ? pageElem.getBoundingClientRect() : null;
        for (page = 1; page < this.getChildren().length + 1; page++) {
            /** @type {?} */
            const element = this.getPage(page);
            if (this._viewportService.checkInViewport(element, this.zoom)) {
                if (!currentPageSet) {
                    if (!this.currentPage || !pageElem || (this.currentPage && currentPageRect && element.getBoundingClientRect().top !== currentPageRect.top)) {
                        this.currentPage = page;
                        if (this._navigateService.currentPage === 0) {
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
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.refresh();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.zoom = this._zoomService.zoom ? this._zoomService.zoom : this.zoom;
    }
    /**
     * @private
     * @return {?}
     */
    getWidth() {
        return this._elementRef ? this._elementRef.nativeElement.offsetWidth : window.innerWidth;
    }
    /**
     * @private
     * @return {?}
     */
    getZoom() {
        return this.zoom / 100;
    }
}
ScrollableDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gdScrollable]'
            },] }
];
/** @nocollapse */
ScrollableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NavigateService },
    { type: PagePreloadService },
    { type: ZoomService },
    { type: WindowService },
    { type: ViewportService }
];
ScrollableDirective.propDecorators = {
    scrolling: [{ type: HostListener, args: ['scroll',] }],
    resizing: [{ type: HostListener, args: ['window:resize',] }]
};
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2Nyb2xsYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFLYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O01BQzNCLENBQUMsR0FBRyxNQUFNO0FBS2hCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7OztJQU05QixZQUFvQixXQUFvQyxFQUNwQyxnQkFBaUMsRUFDakMsbUJBQXVDLEVBQ3ZDLFlBQXlCLEVBQ3pCLGNBQTZCLEVBQzdCLGdCQUFpQztRQUxqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQ3ZDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFSN0MsU0FBSSxHQUFHLEdBQUcsQ0FBQztRQUNYLG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQVNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVks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QUFtQzs7Ozs7SUFFdkIsMENBQTRDOzs7OztJQUM1QywrQ0FBeUM7Ozs7O0lBQ3pDLGtEQUErQzs7Ozs7SUFDL0MsMkNBQWlDOzs7OztJQUNqQyw2Q0FBcUM7Ozs7O0lBQ3JDLCtDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05hdmlnYXRlU2VydmljZX0gZnJvbSBcIi4vbmF2aWdhdGUuc2VydmljZVwiO1xuaW1wb3J0IHtQYWdlUHJlbG9hZFNlcnZpY2V9IGZyb20gXCIuL3BhZ2UtcHJlbG9hZC5zZXJ2aWNlXCI7XG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSBcIi4vd2luZG93LnNlcnZpY2VcIjtcbmltcG9ydCB7Vmlld3BvcnRTZXJ2aWNlfSBmcm9tIFwiLi92aWV3cG9ydC5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuY29uc3QgJCA9IGpxdWVyeTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkU2Nyb2xsYWJsZV0nXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbGFibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBjdXJyZW50UGFnZTogbnVtYmVyO1xuICBwcml2YXRlIHpvb20gPSAxMDA7XG4gIHByaXZhdGUgbG9hZGVkUGFnZXNTZXQgPSBuZXcgU2V0KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9wYWdlUHJlbG9hZFNlcnZpY2U6IFBhZ2VQcmVsb2FkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF92aWV3cG9ydFNlcnZpY2U6IFZpZXdwb3J0U2VydmljZSkge1xuXG4gICAgdGhpcy56b29tID0gX3pvb21TZXJ2aWNlLnpvb20gPyBfem9vbVNlcnZpY2Uuem9vbSA6IHRoaXMuem9vbTtcbiAgICBfem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLnpvb20gPSB2YWwgPyB2YWwgOiB0aGlzLnpvb207XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnpvb20gPSB0aGlzLl96b29tU2VydmljZS56b29tID8gdGhpcy5fem9vbVNlcnZpY2Uuem9vbSA6IHRoaXMuem9vbTtcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmF2aWdhdGUuc3Vic2NyaWJlKCh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdmFsdWU7XG4gICAgICB0aGlzLnNjcm9sbFRvUGFnZSh2YWx1ZSk7XG4gICAgfSkpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJykgc2Nyb2xsaW5nKCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpIHJlc2l6aW5nKCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgc2Nyb2xsVG9QYWdlKHBhZ2VOdW1iZXI6IG51bWJlcikge1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHBhZ2UgPSB0aGlzLmdldFBhZ2UocGFnZU51bWJlcik7XG4gICAgY29uc3QgcHJldiA9IHBhZ2VOdW1iZXIgPiAwID8gdGhpcy5nZXRQYWdlKHBhZ2VOdW1iZXIgLSAxKSA6IG51bGw7XG4gICAgY29uc3QgaXNTYW1lVG9wID0gKHByZXYgJiYgJChwcmV2KS5vZmZzZXQoKS50b3AgPT09ICQocGFnZSkub2Zmc2V0KCkudG9wKTtcbiAgICBpZiAodGhpcy5fdmlld3BvcnRTZXJ2aWNlLmNoZWNrSW5WaWV3cG9ydChwYWdlLCB0aGlzLnpvb20pICYmIGlzU2FtZVRvcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYWdlc0hlaWdodCA9IHRoaXMuY2FsY3VsYXRlT2Zmc2V0KHBhZ2VOdW1iZXIpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiBwYWdlc0hlaWdodFxuICAgIH07XG4gICAgaWYoZWwpe1xuICAgICAgLy8gdXNpbmcgcG9seWZpbGxcbiAgICAgIGVsLnNjcm9sbChvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENoaWxkcmVuKCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA6IG51bGw7XG4gICAgaWYgKGVsKSB7XG4gICAgICAvLyBoZXJlIGFuZCBpbiB0aGUgc2ltaWxhciBsaW5lIGJlbG93IHdlIGdldHRpbmcgdGhlIGRvY3VtZW50IHBhZ2VzXG4gICAgICByZXR1cm4gZWwuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRSZWYgPyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xuICAgIGlmIChlbCkge1xuICAgICAgcmV0dXJuIGVsLmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKHBhZ2VOdW1iZXIgLSAxKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZU9mZnNldChwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuX3dpbmRvd1NlcnZpY2UuaXNGaXJlZm94KCkgPyAxIDogdGhpcy5jb3VudFBhZ2VzT25XaWR0aCgpO1xuICAgIGNvbnN0IG1hcmdpbiA9IHRoaXMuX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCkgPyA0MCA6IDEwO1xuICAgIGxldCBwYWdlc0hlaWdodCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYWdlTnVtYmVyIC8gY291bnQ7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0UGFnZShpKTtcbiAgICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IGl0ZW0gPyBpdGVtLmNsaWVudEhlaWdodCA6IDA7XG4gICAgICBwYWdlc0hlaWdodCArPSBjbGllbnRIZWlnaHQgPiAwID8gY2xpZW50SGVpZ2h0ICogdGhpcy5nZXRab29tKCkgKyBtYXJnaW4gOiAwO1xuICAgIH1cbiAgICByZXR1cm4gcGFnZXNIZWlnaHQ7XG4gIH1cblxuICBwcml2YXRlIGNvdW50UGFnZXNPbldpZHRoKCkge1xuICAgIGNvbnN0IHBhZ2VFbCA9IHRoaXMuZ2V0UGFnZSgxKTtcbiAgICBjb25zdCBvZmZzZXQgPSAxNTA7XG4gICAgaWYgKHBhZ2VFbCkge1xuICAgICAgY29uc3QgY291bnQgPSBNYXRoLmZsb29yKCh0aGlzLmdldFdpZHRoKCkgLSBvZmZzZXQpIC8gKHBhZ2VFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAqIHRoaXMuZ2V0Wm9vbSgpKSk7XG4gICAgICBpZiAoY291bnQgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgbGV0IHBhZ2U7XG4gICAgbGV0IGN1cnJlbnRQYWdlU2V0ID0gZmFsc2U7XG4gICAgY29uc3QgcGFnZUVsZW0gPSB0aGlzLmdldFBhZ2UodGhpcy5jdXJyZW50UGFnZSk7XG4gICAgY29uc3QgY3VycmVudFBhZ2VSZWN0ID0gdGhpcy5jdXJyZW50UGFnZSAmJiBwYWdlRWxlbSA/IHBhZ2VFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogbnVsbDtcbiAgICBmb3IgKHBhZ2UgPSAxOyBwYWdlIDwgdGhpcy5nZXRDaGlsZHJlbigpLmxlbmd0aCArIDE7IHBhZ2UrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0UGFnZShwYWdlKTtcbiAgICAgIGlmICh0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KGVsZW1lbnQsIHRoaXMuem9vbSkpIHtcbiAgICAgICAgaWYgKCFjdXJyZW50UGFnZVNldCkge1xuICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50UGFnZSB8fCAhcGFnZUVsZW0gfHwgKHRoaXMuY3VycmVudFBhZ2UgJiYgY3VycmVudFBhZ2VSZWN0ICYmIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICE9PSBjdXJyZW50UGFnZVJlY3QudG9wKSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICBpZiAodGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID09PSAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnJlbnRQYWdlU2V0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMubG9hZGVkUGFnZXNTZXQuaGFzKHBhZ2UpKSB7XG4gICAgICAgICAgdGhpcy5fcGFnZVByZWxvYWRTZXJ2aWNlLmNoYW5nZUxhc3RQYWdlSW5WaWV3KHBhZ2UpO1xuICAgICAgICAgIHRoaXMubG9hZGVkUGFnZXNTZXQuYWRkKHBhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy56b29tID0gdGhpcy5fem9vbVNlcnZpY2Uuem9vbSA/IHRoaXMuX3pvb21TZXJ2aWNlLnpvb20gOiB0aGlzLnpvb207XG4gIH1cblxuXG4gIHByaXZhdGUgZ2V0V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRSZWYgPyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggOiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tIC8gMTAwO1xuICB9XG59XG4iXX0=