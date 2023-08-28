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
        var pageIsInViewport = this._viewportService.isBelowCenterOfTheScreen((/** @type {?} */ (pages.item(pageNumber - 1))), this._elementRef.nativeElement);
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
                while (!this.loadedPagesSet.has(counter)) {
                    this._pagePreloadService.changeLastPageInView(counter);
                    this.loadedPagesSet.add(counter);
                    counter--;
                }
                break;
            }
            /** @type {?} */
            var pageIsInViewport = this._viewportService.isBelowCenterOfTheScreen((/** @type {?} */ (pages.item(counter))), this._elementRef.nativeElement);
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
            this._navigateService.currentPage = pageNum;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYWJsZS1lZGl0ZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Njcm9sbGFibGUtZWRpdGVkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQ7SUFTRSxtQ0FBb0IsV0FBb0MsRUFDcEMsZ0JBQWlDLEVBQ2pDLG1CQUF1QyxFQUN2QyxZQUF5QixFQUN6QixjQUE2QixFQUM3QixnQkFBaUM7UUFMakMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3BDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUN2QyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBUDdDLG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQVFuQyxDQUFDOzs7O0lBRUQsbURBQWU7OztJQUFm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RyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2xDO1lBRUQsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDcEIsTUFBTTthQUNQO1NBQ0Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUM1RixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7O0lBRUQsK0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOztnQkEzSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7aUJBQ2pDOzs7O2dCQWZDLFVBQVU7Z0JBS0gsZUFBZTtnQkFDZixrQkFBa0I7Z0JBQ2xCLFdBQVc7Z0JBQ1gsYUFBYTtnQkFDYixlQUFlOzs7aUNBUXJCLEtBQUs7O0lBd0hSLGdDQUFDO0NBQUEsQUE1SEQsSUE0SEM7U0F6SFkseUJBQXlCOzs7SUFDcEMsbURBQWlDOzs7OztJQUVqQyxnREFBNEI7Ozs7O0lBQzVCLG1EQUFtQzs7Ozs7SUFFdkIsZ0RBQTRDOzs7OztJQUM1QyxxREFBeUM7Ozs7O0lBQ3pDLHdEQUErQzs7Ozs7SUFDL0MsaURBQWlDOzs7OztJQUNqQyxtREFBcUM7Ozs7O0lBQ3JDLHFEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRlU2VydmljZSB9IGZyb20gXCIuL25hdmlnYXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFBhZ2VQcmVsb2FkU2VydmljZSB9IGZyb20gXCIuL3BhZ2UtcHJlbG9hZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBab29tU2VydmljZSB9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gXCIuL3dpbmRvdy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBWaWV3cG9ydFNlcnZpY2UgfSBmcm9tIFwiLi92aWV3cG9ydC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5LCB0aHJvdHRsZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnZFNjcm9sbGFibGVFZGl0ZWRdJ1xufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxhYmxlRWRpdGVkRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgaXNQcmVzZW50YXRpb246IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBjdXJyZW50UGFnZTogbnVtYmVyO1xuICBwcml2YXRlIGxvYWRlZFBhZ2VzU2V0ID0gbmV3IFNldCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcGFnZVByZWxvYWRTZXJ2aWNlOiBQYWdlUHJlbG9hZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdmlld3BvcnRTZXJ2aWNlOiBWaWV3cG9ydFNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRocm90dGxlVGltZSgxMDAsIHVuZGVmaW5lZCwgeyB0cmFpbGluZzogdHJ1ZSB9KVxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xuXG4gICAgZnJvbUV2ZW50KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcpXG4gICAgICAucGlwZShcbiAgICAgICAgdGhyb3R0bGVUaW1lKDEwMCwgdW5kZWZpbmVkLCB7IHRyYWlsaW5nOiB0cnVlIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcblxuICAgIHRoaXMuX3pvb21TZXJ2aWNlLnpvb21DaGFuZ2VcbiAgICAgIC5waXBlKGRlbGF5KDMwMCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcblxuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5uYXZpZ2F0ZS5zdWJzY3JpYmUoKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc2Nyb2xsVG9QYWdlKHZhbHVlKTtcbiAgICB9KSk7XG5cbiAgfVxuXG4gIHNjcm9sbFRvUGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBwYWdlcyA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcbiAgICBjb25zdCBwYWdlSXNJblZpZXdwb3J0ID0gdGhpcy5fdmlld3BvcnRTZXJ2aWNlLmlzQmVsb3dDZW50ZXJPZlRoZVNjcmVlbihwYWdlcy5pdGVtKHBhZ2VOdW1iZXIgLSAxKSBhcyBIVE1MRWxlbWVudCwgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblxuICAgIGlmIChwYWdlSXNJblZpZXdwb3J0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXNIZWlnaHQgPSB0aGlzLmNhbGN1bGF0ZU9mZnNldChwYWdlTnVtYmVyKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogcGFnZXNIZWlnaHRcbiAgICB9O1xuICAgIGlmIChlbCkge1xuICAgICAgLy8gdXNpbmcgcG9seWZpbGxcbiAgICAgIGVsLnNjcm9sbChvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENoaWxkcmVuKCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA6IG51bGw7XG4gICAgaWYgKGVsKSB7XG4gICAgICAvLyBoZXJlIGFuZCBpbiB0aGUgc2ltaWxhciBsaW5lIGJlbG93IHdlIGdldHRpbmcgdGhlIGRvY3VtZW50IHBhZ2VzXG4gICAgICByZXR1cm4gZWwuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlT2Zmc2V0KHBhZ2VOdW1iZXI6IG51bWJlcikge1xuICAgIGNvbnN0IHBhZ2VzID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuICAgIGlmICghcGFnZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIChwYWdlcy5pdGVtKHBhZ2VOdW1iZXIgLSAxKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0KS55ICsgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCAtIDcwO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCBwYWdlcyA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcbiAgICBsZXQgcGFnZU51bSA9IDA7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gICAgd2hpbGUgKGNvdW50ZXIgPCBwYWdlcy5sZW5ndGgpIHtcbiAgICAgIC8vIGlmIHdlIHNjcm9sbGVkIHRpbGwgdGhlIGVuZCwgdGhlIGN1cnJlbnQgcGFnZSBudW1iZXIgbXVzdCBiZSB0aGUgbGFzdCBwYWdlXG4gICAgICBpZiAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCArIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgKyAzMCA+PSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgIHBhZ2VOdW0gPSBwYWdlcy5sZW5ndGg7XG4gICAgICAgIGNvdW50ZXIgPSBwYWdlTnVtO1xuICAgICAgICAvLyBsb2FkIG5vdCBsb2FkZWQgcGFnZXNcbiAgICAgICAgd2hpbGUgKCF0aGlzLmxvYWRlZFBhZ2VzU2V0Lmhhcyhjb3VudGVyKSkge1xuICAgICAgICAgIHRoaXMuX3BhZ2VQcmVsb2FkU2VydmljZS5jaGFuZ2VMYXN0UGFnZUluVmlldyhjb3VudGVyKTtcbiAgICAgICAgICB0aGlzLmxvYWRlZFBhZ2VzU2V0LmFkZChjb3VudGVyKTtcbiAgICAgICAgICBjb3VudGVyLS07XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhZ2VJc0luVmlld3BvcnQgPSB0aGlzLl92aWV3cG9ydFNlcnZpY2UuaXNCZWxvd0NlbnRlck9mVGhlU2NyZWVuKHBhZ2VzLml0ZW0oY291bnRlcikgYXMgSFRNTEVsZW1lbnQsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgICBpZiAocGFnZUlzSW5WaWV3cG9ydCkge1xuICAgICAgICBwYWdlTnVtID0gY291bnRlciArIDE7XG4gICAgICB9IGVsc2UgaWYgKHBhZ2VOdW0pIHtcbiAgICAgICAgY291bnRlciA9IHBhZ2VzLmxlbmd0aFxuICAgICAgfVxuICAgICAgY291bnRlcisrO1xuXG4gICAgICBpZiAoIXRoaXMubG9hZGVkUGFnZXNTZXQuaGFzKGNvdW50ZXIpKSB7XG4gICAgICAgIHRoaXMuX3BhZ2VQcmVsb2FkU2VydmljZS5jaGFuZ2VMYXN0UGFnZUluVmlldyhjb3VudGVyKTtcbiAgICAgICAgdGhpcy5sb2FkZWRQYWdlc1NldC5hZGQoY291bnRlcik7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYWdlSXNJblZpZXdwb3J0KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgodGhpcy5pc1ByZXNlbnRhdGlvbiAmJiB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgPT09IDApIHx8ICF0aGlzLmlzUHJlc2VudGF0aW9uKSB7XG4gICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgPSBwYWdlTnVtO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxufVxuIl19