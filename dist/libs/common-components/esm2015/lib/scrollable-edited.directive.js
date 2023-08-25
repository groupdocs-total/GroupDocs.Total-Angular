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
export class ScrollableEditedDirective {
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
        this.loadedPagesSet = new Set();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.refresh();
        fromEvent(window, 'resize')
            .pipe(throttleTime(100, undefined, { trailing: true })).subscribe((/**
         * @return {?}
         */
        () => this.refresh()));
        fromEvent(this._elementRef.nativeElement, 'scroll')
            .pipe(throttleTime(100, undefined, { trailing: true }))
            .subscribe((/**
         * @return {?}
         */
        () => this.refresh()));
        this._zoomService.zoomChange
            .pipe(delay(300))
            .subscribe((/**
         * @return {?}
         */
        () => this.refresh()));
        this._navigateService.navigate.subscribe(((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.currentPage = value;
            this.scrollToPage(value);
        })));
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    scrollToPage(pageNumber) {
        /** @type {?} */
        const el = this._elementRef.nativeElement;
        /** @type {?} */
        const pages = this.getChildren();
        /** @type {?} */
        const pageIsInViewport = this._viewportService.isBelowCenterOfTheScreen((/** @type {?} */ (pages.item(pageNumber - 1))), this._elementRef.nativeElement);
        if (pageIsInViewport) {
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
    calculateOffset(pageNumber) {
        /** @type {?} */
        const pages = this.getChildren();
        if (!pages.length) {
            return;
        }
        return ((/** @type {?} */ (pages.item(pageNumber - 1).getBoundingClientRect()))).y + this._elementRef.nativeElement.scrollTop - 70;
    }
    /**
     * @return {?}
     */
    refresh() {
        /** @type {?} */
        const pages = this.getChildren();
        /** @type {?} */
        let pageNum = 0;
        /** @type {?} */
        let counter = 0;
        while (counter < pages.length) {
            // if we scrolled till the end, the current page number must be the last page
            if (this._elementRef.nativeElement.scrollTop + this._elementRef.nativeElement.offsetHeight + 30 >= this._elementRef.nativeElement.scrollHeight) {
                pageNum = pages.length;
                break;
            }
            /** @type {?} */
            const pageIsInViewport = this._viewportService.isBelowCenterOfTheScreen((/** @type {?} */ (pages.item(counter))), this._elementRef.nativeElement);
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
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.refresh();
    }
}
ScrollableEditedDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gdScrollableEdited]'
            },] }
];
/** @nocollapse */
ScrollableEditedDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NavigateService },
    { type: PagePreloadService },
    { type: ZoomService },
    { type: WindowService },
    { type: ViewportService }
];
ScrollableEditedDirective.propDecorators = {
    isPresentation: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYWJsZS1lZGl0ZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Njcm9sbGFibGUtZWRpdGVkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLckQsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7Ozs7O0lBTXBDLFlBQW9CLFdBQW9DLEVBQ3BDLGdCQUFpQyxFQUNqQyxtQkFBdUMsRUFDdkMsWUFBeUIsRUFDekIsY0FBNkIsRUFDN0IsZ0JBQWlDO1FBTGpDLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFDdkMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQVA3QyxtQkFBYyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFRbkMs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QUFFO1lBQzVGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7OztZQXBIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjthQUNqQzs7OztZQWZDLFVBQVU7WUFLSCxlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLFdBQVc7WUFDWCxhQUFhO1lBQ2IsZUFBZTs7OzZCQVFyQixLQUFLOzs7O0lBQU4sbURBQWlDOzs7OztJQUVqQyxnREFBNEI7Ozs7O0lBQzVCLG1EQUFtQzs7Ozs7SUFFdkIsZ0RBQTRDOzs7OztJQUM1QyxxREFBeUM7Ozs7O0lBQ3pDLHdEQUErQzs7Ozs7SUFDL0MsaURBQWlDOzs7OztJQUNqQyxtREFBcUM7Ozs7O0lBQ3JDLHFEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRlU2VydmljZSB9IGZyb20gXCIuL25hdmlnYXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFBhZ2VQcmVsb2FkU2VydmljZSB9IGZyb20gXCIuL3BhZ2UtcHJlbG9hZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBab29tU2VydmljZSB9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gXCIuL3dpbmRvdy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBWaWV3cG9ydFNlcnZpY2UgfSBmcm9tIFwiLi92aWV3cG9ydC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5LCB0aHJvdHRsZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnZFNjcm9sbGFibGVFZGl0ZWRdJ1xufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxhYmxlRWRpdGVkRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgaXNQcmVzZW50YXRpb246IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBjdXJyZW50UGFnZTogbnVtYmVyO1xuICBwcml2YXRlIGxvYWRlZFBhZ2VzU2V0ID0gbmV3IFNldCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcGFnZVByZWxvYWRTZXJ2aWNlOiBQYWdlUHJlbG9hZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdmlld3BvcnRTZXJ2aWNlOiBWaWV3cG9ydFNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRocm90dGxlVGltZSgxMDAsIHVuZGVmaW5lZCwgeyB0cmFpbGluZzogdHJ1ZSB9KVxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xuXG4gICAgZnJvbUV2ZW50KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcpXG4gICAgICAucGlwZShcbiAgICAgICAgdGhyb3R0bGVUaW1lKDEwMCwgdW5kZWZpbmVkLCB7IHRyYWlsaW5nOiB0cnVlIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcblxuICAgIHRoaXMuX3pvb21TZXJ2aWNlLnpvb21DaGFuZ2VcbiAgICAgIC5waXBlKGRlbGF5KDMwMCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcblxuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5uYXZpZ2F0ZS5zdWJzY3JpYmUoKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc2Nyb2xsVG9QYWdlKHZhbHVlKTtcbiAgICB9KSk7XG5cbiAgfVxuXG4gIHNjcm9sbFRvUGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBwYWdlcyA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcbiAgICBjb25zdCBwYWdlSXNJblZpZXdwb3J0ID0gdGhpcy5fdmlld3BvcnRTZXJ2aWNlLmlzQmVsb3dDZW50ZXJPZlRoZVNjcmVlbihwYWdlcy5pdGVtKHBhZ2VOdW1iZXIgLSAxKSBhcyBIVE1MRWxlbWVudCwgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblxuICAgIGlmIChwYWdlSXNJblZpZXdwb3J0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXNIZWlnaHQgPSB0aGlzLmNhbGN1bGF0ZU9mZnNldChwYWdlTnVtYmVyKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogcGFnZXNIZWlnaHRcbiAgICB9O1xuICAgIGlmIChlbCkge1xuICAgICAgLy8gdXNpbmcgcG9seWZpbGxcbiAgICAgIGVsLnNjcm9sbChvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENoaWxkcmVuKCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA6IG51bGw7XG4gICAgaWYgKGVsKSB7XG4gICAgICAvLyBoZXJlIGFuZCBpbiB0aGUgc2ltaWxhciBsaW5lIGJlbG93IHdlIGdldHRpbmcgdGhlIGRvY3VtZW50IHBhZ2VzXG4gICAgICByZXR1cm4gZWwuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlT2Zmc2V0KHBhZ2VOdW1iZXI6IG51bWJlcikge1xuICAgIGNvbnN0IHBhZ2VzID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuICAgIGlmICghcGFnZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIChwYWdlcy5pdGVtKHBhZ2VOdW1iZXIgLSAxKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0KS55ICsgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCAtIDcwO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCBwYWdlcyA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcbiAgICBsZXQgcGFnZU51bSA9IDA7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gICAgd2hpbGUgKGNvdW50ZXIgPCBwYWdlcy5sZW5ndGgpIHtcbiAgICAgIC8vIGlmIHdlIHNjcm9sbGVkIHRpbGwgdGhlIGVuZCwgdGhlIGN1cnJlbnQgcGFnZSBudW1iZXIgbXVzdCBiZSB0aGUgbGFzdCBwYWdlXG4gICAgICBpZiAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCArIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgKyAzMCA+PSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgIHBhZ2VOdW0gPSBwYWdlcy5sZW5ndGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYWdlSXNJblZpZXdwb3J0ID0gdGhpcy5fdmlld3BvcnRTZXJ2aWNlLmlzQmVsb3dDZW50ZXJPZlRoZVNjcmVlbihwYWdlcy5pdGVtKGNvdW50ZXIpIGFzIEhUTUxFbGVtZW50LCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgaWYgKHBhZ2VJc0luVmlld3BvcnQpIHtcbiAgICAgICAgcGFnZU51bSA9IGNvdW50ZXIgKyAxO1xuICAgICAgfSBlbHNlIGlmIChwYWdlTnVtKSB7XG4gICAgICAgIGNvdW50ZXIgPSBwYWdlcy5sZW5ndGhcbiAgICAgIH1cbiAgICAgIGNvdW50ZXIrKztcblxuICAgICAgaWYgKCF0aGlzLmxvYWRlZFBhZ2VzU2V0Lmhhcyhjb3VudGVyKSkge1xuICAgICAgICB0aGlzLl9wYWdlUHJlbG9hZFNlcnZpY2UuY2hhbmdlTGFzdFBhZ2VJblZpZXcoY291bnRlcik7XG4gICAgICAgIHRoaXMubG9hZGVkUGFnZXNTZXQuYWRkKGNvdW50ZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFnZUlzSW5WaWV3cG9ydCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoKHRoaXMuaXNQcmVzZW50YXRpb24gJiYgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID09PSAwKSB8fCAhdGhpcy5pc1ByZXNlbnRhdGlvbikge1xuICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gcGFnZU51bTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cbn1cbiJdfQ==