/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { NavigateService } from "./navigate.service";
import { PagePreloadService } from "./page-preload.service";
import { ZoomService } from "./zoom.service";
import { WindowService } from "./window.service";
import { ViewportService } from "./viewport.service";
import { fromEvent } from 'rxjs';
import { delay, throttleTime } from 'rxjs/operators';
var ScrollableEditedDirective = /** @class */ (function () {
    function ScrollableEditedDirective(_elementRef, _navigateService, _pagePreloadService, _zoomService, _windowService, _viewportService) {
        this._elementRef = _elementRef;
        this._navigateService = _navigateService;
        this._pagePreloadService = _pagePreloadService;
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this._viewportService = _viewportService;
        this.loadedPagesSet = new Set();
    }
    /**
     * @return {?}
     */
    ScrollableEditedDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.refresh();
        fromEvent(window, 'resize')
            .pipe(throttleTime(100, undefined, { trailing: true })).subscribe((/**
         * @return {?}
         */
        function () { return _this.refresh(); }));
        fromEvent(this._elementRef.nativeElement, 'scroll')
            .pipe(throttleTime(100, undefined, { trailing: true }))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.refresh(); }));
        this._zoomService.zoomChange
            .pipe(delay(300))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.refresh(); }));
        this._navigateService.navigate.subscribe(((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.currentPage = value;
            _this.scrollToPage(value);
        })));
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    ScrollableEditedDirective.prototype.scrollToPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        /** @type {?} */
        var el = this._elementRef.nativeElement;
        /** @type {?} */
        var pages = this.getChildren();
        /** @type {?} */
        var htmlElement = (/** @type {?} */ (pages.item(pageNumber - 1)));
        if (!htmlElement) {
            return;
        }
        /** @type {?} */
        var pageIsInViewport = this._viewportService.isBelowCenterOfTheScreen(htmlElement, this._elementRef.nativeElement);
        if (pageIsInViewport) {
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
    ScrollableEditedDirective.prototype.getChildren = /**
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
    ScrollableEditedDirective.prototype.calculateOffset = /**
     * @private
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        /** @type {?} */
        var pages = this.getChildren();
        if (!pages.length) {
            return;
        }
        return ((/** @type {?} */ (pages.item(pageNumber - 1).getBoundingClientRect()))).y + this._elementRef.nativeElement.scrollTop - 70;
    };
    /**
     * @return {?}
     */
    ScrollableEditedDirective.prototype.refresh = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pages = this.getChildren();
        /** @type {?} */
        var pageNum = 0;
        /** @type {?} */
        var counter = 0;
        while (counter < pages.length) {
            // if we scrolled till the end, the current page number must be the last page
            if (this._elementRef.nativeElement.scrollTop + this._elementRef.nativeElement.offsetHeight + 30 >= this._elementRef.nativeElement.scrollHeight) {
                pageNum = pages.length;
                counter = pageNum;
                // load not loaded pages
                while (counter > 0 && !this.loadedPagesSet.has(counter)) {
                    this._pagePreloadService.changeLastPageInView(counter);
                    this.loadedPagesSet.add(counter);
                    counter--;
                }
                break;
            }
            /** @type {?} */
            var htmlElement = (/** @type {?} */ (pages.item(counter)));
            if (!htmlElement) {
                break;
            }
            /** @type {?} */
            var pageIsInViewport = this._viewportService.isBelowCenterOfTheScreen(htmlElement, this._elementRef.nativeElement);
            if (pageIsInViewport) {
                pageNum = counter + 1;
            }
            else if (pageNum) {
                counter = pages.length;
            }
            counter++;
            if (!this.loadedPagesSet.has(counter)) {
                this._pagePreloadService.changeLastPageInView(counter);
                this.loadedPagesSet.add(counter);
            }
            if (pageIsInViewport) {
                break;
            }
        }
        if ((this.isPresentation && this._navigateService.currentPage === 0) || !this.isPresentation) {
            if (pageNum <= this._navigateService.countPages) {
                this._navigateService.currentPage = pageNum;
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ScrollableEditedDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.refresh();
    };
    ScrollableEditedDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdScrollableEdited]'
                },] }
    ];
    /** @nocollapse */
    ScrollableEditedDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NavigateService },
        { type: PagePreloadService },
        { type: ZoomService },
        { type: WindowService },
        { type: ViewportService }
    ]; };
    ScrollableEditedDirective.propDecorators = {
        isPresentation: [{ type: Input }]
    };
    return ScrollableEditedDirective;
}());
export { ScrollableEditedDirective };
if (false) {
    /** @type {?} */
    ScrollableEditedDirective.prototype.isPresentation;
    /**
     * @type {?}
     * @private
     */
    ScrollableEditedDirective.prototype.currentPage;
    /**
     * @type {?}
     * @private
     */
    ScrollableEditedDirective.prototype.loadedPagesSet;
    /**
     * @type {?}
     * @private
     */
    ScrollableEditedDirective.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    ScrollableEditedDirective.prototype._navigateService;
    /**
     * @type {?}
     * @private
     */
    ScrollableEditedDirective.prototype._pagePreloadService;
    /**
     * @type {?}
     * @private
     */
    ScrollableEditedDirective.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    ScrollableEditedDirective.prototype._windowService;
    /**
     * @type {?}
     * @private
     */
    ScrollableEditedDirective.prototype._viewportService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYWJsZS1lZGl0ZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Njcm9sbGFibGUtZWRpdGVkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQ7SUFTRSxtQ0FBb0IsV0FBb0MsRUFDcEMsZ0JBQWlDLEVBQ2pDLG1CQUF1QyxFQUN2QyxZQUF5QixFQUN6QixjQUE2QixFQUM3QixnQkFBaUM7UUFMakMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3BDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUN2QyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBUDdDLG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQVFuQyxDQUFDOzs7O0lBRUQsbURBQWU7OztJQUFm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Qyx3REFBK0M7Ozs7O0lBQy9DLGlEQUFpQzs7Ozs7SUFDakMsbURBQXFDOzs7OztJQUNyQyxxREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0ZVNlcnZpY2UgfSBmcm9tIFwiLi9uYXZpZ2F0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQYWdlUHJlbG9hZFNlcnZpY2UgfSBmcm9tIFwiLi9wYWdlLXByZWxvYWQuc2VydmljZVwiO1xuaW1wb3J0IHsgWm9vbVNlcnZpY2UgfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tIFwiLi93aW5kb3cuc2VydmljZVwiO1xuaW1wb3J0IHsgVmlld3BvcnRTZXJ2aWNlIH0gZnJvbSBcIi4vdmlld3BvcnQuc2VydmljZVwiO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSwgdGhyb3R0bGVUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2RTY3JvbGxhYmxlRWRpdGVkXSdcbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsYWJsZUVkaXRlZERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGlzUHJlc2VudGF0aW9uOiBib29sZWFuO1xuXG4gIHByaXZhdGUgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgcHJpdmF0ZSBsb2FkZWRQYWdlc1NldCA9IG5ldyBTZXQoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3BhZ2VQcmVsb2FkU2VydmljZTogUGFnZVByZWxvYWRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3ZpZXdwb3J0U2VydmljZTogVmlld3BvcnRTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKFxuICAgICAgICB0aHJvdHRsZVRpbWUoMTAwLCB1bmRlZmluZWQsIHsgdHJhaWxpbmc6IHRydWUgfSlcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcblxuICAgIGZyb21FdmVudCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRocm90dGxlVGltZSgxMDAsIHVuZGVmaW5lZCwgeyB0cmFpbGluZzogdHJ1ZSB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2goKSk7XG5cbiAgICB0aGlzLl96b29tU2VydmljZS56b29tQ2hhbmdlXG4gICAgICAucGlwZShkZWxheSgzMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2goKSk7XG5cbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmF2aWdhdGUuc3Vic2NyaWJlKCh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdmFsdWU7XG4gICAgICB0aGlzLnNjcm9sbFRvUGFnZSh2YWx1ZSk7XG4gICAgfSkpO1xuXG4gIH1cblxuICBzY3JvbGxUb1BhZ2UocGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgcGFnZXMgPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgY29uc3QgaHRtbEVsZW1lbnQgPSBwYWdlcy5pdGVtKHBhZ2VOdW1iZXIgLSAxKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZighaHRtbEVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIFxuICAgIGNvbnN0IHBhZ2VJc0luVmlld3BvcnQgPSB0aGlzLl92aWV3cG9ydFNlcnZpY2UuaXNCZWxvd0NlbnRlck9mVGhlU2NyZWVuKGh0bWxFbGVtZW50LCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgaWYgKHBhZ2VJc0luVmlld3BvcnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYWdlc0hlaWdodCA9IHRoaXMuY2FsY3VsYXRlT2Zmc2V0KHBhZ2VOdW1iZXIpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiBwYWdlc0hlaWdodFxuICAgIH07XG4gICAgaWYgKGVsKSB7XG4gICAgICAvLyB1c2luZyBwb2x5ZmlsbFxuICAgICAgZWwuc2Nyb2xsKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbGVtZW50UmVmID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IDogbnVsbDtcbiAgICBpZiAoZWwpIHtcbiAgICAgIC8vIGhlcmUgYW5kIGluIHRoZSBzaW1pbGFyIGxpbmUgYmVsb3cgd2UgZ2V0dGluZyB0aGUgZG9jdW1lbnQgcGFnZXNcbiAgICAgIHJldHVybiBlbC5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW47XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVPZmZzZXQocGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFnZXMgPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgaWYgKCFwYWdlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gKHBhZ2VzLml0ZW0ocGFnZU51bWJlciAtIDEpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3QpLnkgKyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wIC0gNzA7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHBhZ2VzID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuICAgIGxldCBwYWdlTnVtID0gMDtcbiAgICBsZXQgY291bnRlciA9IDA7XG5cbiAgICB3aGlsZSAoY291bnRlciA8IHBhZ2VzLmxlbmd0aCkge1xuICAgICAgLy8gaWYgd2Ugc2Nyb2xsZWQgdGlsbCB0aGUgZW5kLCB0aGUgY3VycmVudCBwYWdlIG51bWJlciBtdXN0IGJlIHRoZSBsYXN0IHBhZ2VcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wICsgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCArIDMwID49IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgcGFnZU51bSA9IHBhZ2VzLmxlbmd0aDtcbiAgICAgICAgY291bnRlciA9IHBhZ2VOdW07XG4gICAgICAgIC8vIGxvYWQgbm90IGxvYWRlZCBwYWdlc1xuICAgICAgICB3aGlsZSAoY291bnRlciA+IDAgJiYgIXRoaXMubG9hZGVkUGFnZXNTZXQuaGFzKGNvdW50ZXIpKSB7XG4gICAgICAgICAgdGhpcy5fcGFnZVByZWxvYWRTZXJ2aWNlLmNoYW5nZUxhc3RQYWdlSW5WaWV3KGNvdW50ZXIpO1xuICAgICAgICAgIHRoaXMubG9hZGVkUGFnZXNTZXQuYWRkKGNvdW50ZXIpO1xuICAgICAgICAgIGNvdW50ZXItLTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gcGFnZXMuaXRlbShjb3VudGVyKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmKCFodG1sRWxlbWVudCkge1xuICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb25zdCBwYWdlSXNJblZpZXdwb3J0ID0gdGhpcy5fdmlld3BvcnRTZXJ2aWNlLmlzQmVsb3dDZW50ZXJPZlRoZVNjcmVlbihodG1sRWxlbWVudCwgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIGlmIChwYWdlSXNJblZpZXdwb3J0KSB7XG4gICAgICAgIHBhZ2VOdW0gPSBjb3VudGVyICsgMTsgXG4gICAgICB9IGVsc2UgaWYgKHBhZ2VOdW0pIHtcbiAgICAgICAgY291bnRlciA9IHBhZ2VzLmxlbmd0aFxuICAgICAgfVxuICAgICAgY291bnRlcisrO1xuXG4gICAgICBpZiAoIXRoaXMubG9hZGVkUGFnZXNTZXQuaGFzKGNvdW50ZXIpKSB7XG4gICAgICAgIHRoaXMuX3BhZ2VQcmVsb2FkU2VydmljZS5jaGFuZ2VMYXN0UGFnZUluVmlldyhjb3VudGVyKTtcbiAgICAgICAgdGhpcy5sb2FkZWRQYWdlc1NldC5hZGQoY291bnRlcik7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYWdlSXNJblZpZXdwb3J0KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgICBpZiAoKHRoaXMuaXNQcmVzZW50YXRpb24gJiYgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID09PSAwKSB8fCAhdGhpcy5pc1ByZXNlbnRhdGlvbikge1xuICAgICAgaWYocGFnZU51bSA8PSB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY291bnRQYWdlcykgeyBcbiAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gcGFnZU51bTtcbiAgICAgIH1cbiAgICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG59XG4iXX0=