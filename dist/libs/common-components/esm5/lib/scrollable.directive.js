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
        var isSameTop = (prev && $(prev).offset() && $(page).offset() && $(prev).offset().top === $(page).offset().top);
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
        scrolling: [{ type: HostListener, args: ['scroll',] }],
        resizing: [{ type: HostListener, args: ['window:resize',] }]
    };
    return ScrollableDirective;
}());
export { ScrollableDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2Nyb2xsYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFLYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O0lBQzNCLENBQUMsR0FBRyxNQUFNO0FBRWhCO0lBU0UsNkJBQW9CLFdBQW9DLEVBQ3BDLGdCQUFpQyxFQUNqQyxtQkFBdUMsRUFDdkMsWUFBeUIsRUFDekIsY0FBNkIsRUFDN0IsZ0JBQWlDO1FBTHJELGlCQVlDO1FBWm1CLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFDdkMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQVI3QyxTQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ1gsbUJBQWMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBU2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM5RCxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEdBQVc7WUFDNUMsS0FBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQztZQUNsQyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQzs7OztRQUFDLFVBQUEsS0FBSztZQUM3QyxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDSixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUV1Qix1Q0FBUzs7O0lBQWpDO1FBQ0UsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFOEIsc0NBQVE7OztJQUF2QztRQUNFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7OztJQUVELDBDQUFZOzs7O0lBQVosVUFBYSxVQUFrQjs7WUFDdkIsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYTs7WUFDbkMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDOztZQUMvQixJQUFJLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7O1lBQzNELFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUNqSCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLEVBQUU7WUFDdkUsT0FBTztTQUNSOztZQUNLLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQzs7WUFDOUMsT0FBTyxHQUFHO1lBQ2QsSUFBSSxFQUFFLENBQUM7WUFDUCxHQUFHLEVBQUUsV0FBVztTQUNqQjtRQUNELElBQUcsRUFBRSxFQUFDO1lBQ0osaUJBQWlCO1lBQ2pCLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7OztJQUVPLHlDQUFXOzs7O0lBQW5COztZQUNRLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUNuRSxJQUFJLEVBQUUsRUFBRTtZQUNOLG1FQUFtRTtZQUNuRSxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1NBQ3REO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8scUNBQU87Ozs7O0lBQWYsVUFBZ0IsVUFBa0I7O1lBQzFCLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUNuRSxJQUFJLEVBQUUsRUFBRTtZQUNOLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMzRTtJQUNILENBQUM7Ozs7OztJQUVPLDZDQUFlOzs7OztJQUF2QixVQUF3QixVQUFrQjs7WUFDbEMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFOztZQUN0RSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFOztZQUNwRCxXQUFXLEdBQUcsQ0FBQztRQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBQ3JDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7Z0JBQ3RCLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakQsV0FBVyxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUU7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLCtDQUFpQjs7OztJQUF6Qjs7WUFDUSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7O1lBQ3hCLE1BQU0sR0FBRyxHQUFHO1FBQ2xCLElBQUksTUFBTSxFQUFFOztnQkFDSixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUM5RyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7Z0JBQ2YsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDOzs7O0lBRUQscUNBQU87OztJQUFQOztZQUNNLElBQUk7O1lBQ0osY0FBYyxHQUFHLEtBQUs7O1lBQ3BCLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7O1lBQ3pDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDOUYsS0FBSyxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRTs7Z0JBQ3JELE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNsQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLGNBQWMsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLGVBQWUsSUFBSSxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLEtBQUssZUFBZSxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUMxSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzt3QkFDeEIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxLQUFLLENBQUMsRUFBRTs0QkFDM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7eUJBQzFDO3FCQUNGO29CQUNELGNBQWMsR0FBRyxJQUFJLENBQUM7aUJBQ3ZCO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwRCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDL0I7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx5Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUMxRSxDQUFDOzs7OztJQUdPLHNDQUFROzs7O0lBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDM0YsQ0FBQzs7Ozs7SUFFTyxxQ0FBTzs7OztJQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUN6QixDQUFDOztnQkExSUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzs7O2dCQWpCQyxVQUFVO2dCQU9KLGVBQWU7Z0JBQ2Ysa0JBQWtCO2dCQUNsQixXQUFXO2dCQUNYLGFBQWE7Z0JBQ2IsZUFBZTs7OzRCQW9DcEIsWUFBWSxTQUFDLFFBQVE7MkJBSXJCLFlBQVksU0FBQyxlQUFlOztJQXVHL0IsMEJBQUM7Q0FBQSxBQTNJRCxJQTJJQztTQXhJWSxtQkFBbUI7Ozs7OztJQUU5QiwwQ0FBNEI7Ozs7O0lBQzVCLG1DQUFtQjs7Ozs7SUFDbkIsNkNBQW1DOzs7OztJQUV2QiwwQ0FBNEM7Ozs7O0lBQzVDLCtDQUF5Qzs7Ozs7SUFDekMsa0RBQStDOzs7OztJQUMvQywyQ0FBaUM7Ozs7O0lBQ2pDLDZDQUFxQzs7Ozs7SUFDckMsK0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOYXZpZ2F0ZVNlcnZpY2V9IGZyb20gXCIuL25hdmlnYXRlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtQYWdlUHJlbG9hZFNlcnZpY2V9IGZyb20gXCIuL3BhZ2UtcHJlbG9hZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xyXG5pbXBvcnQge1dpbmRvd1NlcnZpY2V9IGZyb20gXCIuL3dpbmRvdy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Vmlld3BvcnRTZXJ2aWNlfSBmcm9tIFwiLi92aWV3cG9ydC5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tIFwianF1ZXJ5XCI7XHJcbmNvbnN0ICQgPSBqcXVlcnk7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tnZFNjcm9sbGFibGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2Nyb2xsYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50UGFnZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgem9vbSA9IDEwMDtcclxuICBwcml2YXRlIGxvYWRlZFBhZ2VzU2V0ID0gbmV3IFNldCgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgICAgICAgICAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9wYWdlUHJlbG9hZFNlcnZpY2U6IFBhZ2VQcmVsb2FkU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF92aWV3cG9ydFNlcnZpY2U6IFZpZXdwb3J0U2VydmljZSkge1xyXG5cclxuICAgIHRoaXMuem9vbSA9IF96b29tU2VydmljZS56b29tID8gX3pvb21TZXJ2aWNlLnpvb20gOiB0aGlzLnpvb207XHJcbiAgICBfem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHZhbDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHRoaXMuem9vbSA9IHZhbCA/IHZhbCA6IHRoaXMuem9vbTtcclxuICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuem9vbSA9IHRoaXMuX3pvb21TZXJ2aWNlLnpvb20gPyB0aGlzLl96b29tU2VydmljZS56b29tIDogdGhpcy56b29tO1xyXG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLm5hdmlnYXRlLnN1YnNjcmliZSgodmFsdWUgPT4ge1xyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9QYWdlKHZhbHVlKTtcclxuICAgIH0pKTtcclxuICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJykgc2Nyb2xsaW5nKCkge1xyXG4gICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJykgcmVzaXppbmcoKSB7XHJcbiAgICB0aGlzLnJlZnJlc2goKTtcclxuICB9XHJcblxyXG4gIHNjcm9sbFRvUGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3QgcGFnZSA9IHRoaXMuZ2V0UGFnZShwYWdlTnVtYmVyKTtcclxuICAgIGNvbnN0IHByZXYgPSBwYWdlTnVtYmVyID4gMCA/IHRoaXMuZ2V0UGFnZShwYWdlTnVtYmVyIC0gMSkgOiBudWxsO1xyXG4gICAgY29uc3QgaXNTYW1lVG9wID0gKHByZXYgJiYgJChwcmV2KS5vZmZzZXQoKSAmJiAkKHBhZ2UpLm9mZnNldCgpICYmICQocHJldikub2Zmc2V0KCkudG9wID09PSAkKHBhZ2UpLm9mZnNldCgpLnRvcCk7XHJcbiAgICBpZiAodGhpcy5fdmlld3BvcnRTZXJ2aWNlLmNoZWNrSW5WaWV3cG9ydChwYWdlLCB0aGlzLnpvb20pICYmIGlzU2FtZVRvcCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYWdlc0hlaWdodCA9IHRoaXMuY2FsY3VsYXRlT2Zmc2V0KHBhZ2VOdW1iZXIpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgdG9wOiBwYWdlc0hlaWdodFxyXG4gICAgfTtcclxuICAgIGlmKGVsKXtcclxuICAgICAgLy8gdXNpbmcgcG9seWZpbGxcclxuICAgICAgZWwuc2Nyb2xsKG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDaGlsZHJlbigpIHtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA6IG51bGw7XHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgLy8gaGVyZSBhbmQgaW4gdGhlIHNpbWlsYXIgbGluZSBiZWxvdyB3ZSBnZXR0aW5nIHRoZSBkb2N1bWVudCBwYWdlc1xyXG4gICAgICByZXR1cm4gZWwuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcikge1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbGVtZW50UmVmID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IDogbnVsbDtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICByZXR1cm4gZWwuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuLml0ZW0ocGFnZU51bWJlciAtIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVPZmZzZXQocGFnZU51bWJlcjogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuX3dpbmRvd1NlcnZpY2UuaXNGaXJlZm94KCkgPyAxIDogdGhpcy5jb3VudFBhZ2VzT25XaWR0aCgpO1xyXG4gICAgY29uc3QgbWFyZ2luID0gdGhpcy5fd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKSA/IDQwIDogMTA7XHJcbiAgICBsZXQgcGFnZXNIZWlnaHQgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYWdlTnVtYmVyIC8gY291bnQ7IGkrKykge1xyXG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRQYWdlKGkpO1xyXG4gICAgICBjb25zdCBjbGllbnRIZWlnaHQgPSBpdGVtID8gaXRlbS5jbGllbnRIZWlnaHQgOiAwO1xyXG4gICAgICBwYWdlc0hlaWdodCArPSBjbGllbnRIZWlnaHQgPiAwID8gY2xpZW50SGVpZ2h0ICogdGhpcy5nZXRab29tKCkgKyBtYXJnaW4gOiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhZ2VzSGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb3VudFBhZ2VzT25XaWR0aCgpIHtcclxuICAgIGNvbnN0IHBhZ2VFbCA9IHRoaXMuZ2V0UGFnZSgxKTtcclxuICAgIGNvbnN0IG9mZnNldCA9IDE1MDtcclxuICAgIGlmIChwYWdlRWwpIHtcclxuICAgICAgY29uc3QgY291bnQgPSBNYXRoLmZsb29yKCh0aGlzLmdldFdpZHRoKCkgLSBvZmZzZXQpIC8gKHBhZ2VFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAqIHRoaXMuZ2V0Wm9vbSgpKSk7XHJcbiAgICAgIGlmIChjb3VudCAhPT0gMCkge1xyXG4gICAgICAgIHJldHVybiBjb3VudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDE7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoKCkge1xyXG4gICAgbGV0IHBhZ2U7XHJcbiAgICBsZXQgY3VycmVudFBhZ2VTZXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IHBhZ2VFbGVtID0gdGhpcy5nZXRQYWdlKHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgY29uc3QgY3VycmVudFBhZ2VSZWN0ID0gdGhpcy5jdXJyZW50UGFnZSAmJiBwYWdlRWxlbSA/IHBhZ2VFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogbnVsbDtcclxuICAgIGZvciAocGFnZSA9IDE7IHBhZ2UgPCB0aGlzLmdldENoaWxkcmVuKCkubGVuZ3RoICsgMTsgcGFnZSsrKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdldFBhZ2UocGFnZSk7XHJcbiAgICAgIGlmICh0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KGVsZW1lbnQsIHRoaXMuem9vbSkpIHtcclxuICAgICAgICBpZiAoIWN1cnJlbnRQYWdlU2V0KSB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFBhZ2UgfHwgIXBhZ2VFbGVtIHx8ICh0aGlzLmN1cnJlbnRQYWdlICYmIGN1cnJlbnRQYWdlUmVjdCAmJiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAhPT0gY3VycmVudFBhZ2VSZWN0LnRvcCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgPT09IDApIHtcclxuICAgICAgICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgPSBwYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjdXJyZW50UGFnZVNldCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5sb2FkZWRQYWdlc1NldC5oYXMocGFnZSkpIHtcclxuICAgICAgICAgIHRoaXMuX3BhZ2VQcmVsb2FkU2VydmljZS5jaGFuZ2VMYXN0UGFnZUluVmlldyhwYWdlKTtcclxuICAgICAgICAgIHRoaXMubG9hZGVkUGFnZXNTZXQuYWRkKHBhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuem9vbSA9IHRoaXMuX3pvb21TZXJ2aWNlLnpvb20gPyB0aGlzLl96b29tU2VydmljZS56b29tIDogdGhpcy56b29tO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgZ2V0V2lkdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRab29tKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuem9vbSAvIDEwMDtcclxuICB9XHJcbn1cclxuIl19