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
        const htmlElement = (/** @type {?} */ (pages.item(pageNumber - 1)));
        if (!htmlElement) {
            return;
        }
        /** @type {?} */
        const pageIsInViewport = this._viewportService.isBelowCenterOfTheScreen(htmlElement, this._elementRef.nativeElement);
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
            const htmlElement = (/** @type {?} */ (pages.item(counter)));
            if (!htmlElement) {
                break;
            }
            /** @type {?} */
            const pageIsInViewport = this._viewportService.isBelowCenterOfTheScreen(htmlElement, this._elementRef.nativeElement);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYWJsZS1lZGl0ZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Njcm9sbGFibGUtZWRpdGVkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLckQsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7Ozs7O0lBTXBDLFlBQW9CLFdBQW9DLEVBQ3BDLGdCQUFpQyxFQUNqQyxtQkFBdUMsRUFDdkMsWUFBeUIsRUFDekIsY0FBNkIsRUFDN0IsZ0JBQWlDO1FBTGpDLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFDdkMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQVA3QyxtQkFBYyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFRbkMs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dCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vbmF2aWdhdGUuc2VydmljZVwiO1xuaW1wb3J0IHsgUGFnZVByZWxvYWRTZXJ2aWNlIH0gZnJvbSBcIi4vcGFnZS1wcmVsb2FkLnNlcnZpY2VcIjtcbmltcG9ydCB7IFpvb21TZXJ2aWNlIH0gZnJvbSBcIi4vem9vbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSBcIi4vd2luZG93LnNlcnZpY2VcIjtcbmltcG9ydCB7IFZpZXdwb3J0U2VydmljZSB9IGZyb20gXCIuL3ZpZXdwb3J0LnNlcnZpY2VcIjtcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXksIHRocm90dGxlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkU2Nyb2xsYWJsZUVkaXRlZF0nXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbGFibGVFZGl0ZWREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBpc1ByZXNlbnRhdGlvbjogYm9vbGVhbjtcblxuICBwcml2YXRlIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gIHByaXZhdGUgbG9hZGVkUGFnZXNTZXQgPSBuZXcgU2V0KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9wYWdlUHJlbG9hZFNlcnZpY2U6IFBhZ2VQcmVsb2FkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF92aWV3cG9ydFNlcnZpY2U6IFZpZXdwb3J0U2VydmljZSkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuXG4gICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShcbiAgICAgICAgdGhyb3R0bGVUaW1lKDEwMCwgdW5kZWZpbmVkLCB7IHRyYWlsaW5nOiB0cnVlIH0pXG4gICAgICApLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2goKSk7XG5cbiAgICBmcm9tRXZlbnQodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJylcbiAgICAgIC5waXBlKFxuICAgICAgICB0aHJvdHRsZVRpbWUoMTAwLCB1bmRlZmluZWQsIHsgdHJhaWxpbmc6IHRydWUgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xuXG4gICAgdGhpcy5fem9vbVNlcnZpY2Uuem9vbUNoYW5nZVxuICAgICAgLnBpcGUoZGVsYXkoMzAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xuXG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLm5hdmlnYXRlLnN1YnNjcmliZSgodmFsdWUgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHZhbHVlO1xuICAgICAgdGhpcy5zY3JvbGxUb1BhZ2UodmFsdWUpO1xuICAgIH0pKTtcblxuICB9XG5cbiAgc2Nyb2xsVG9QYWdlKHBhZ2VOdW1iZXI6IG51bWJlcikge1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHBhZ2VzID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gcGFnZXMuaXRlbShwYWdlTnVtYmVyIC0gMSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYoIWh0bWxFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICBcbiAgICBjb25zdCBwYWdlSXNJblZpZXdwb3J0ID0gdGhpcy5fdmlld3BvcnRTZXJ2aWNlLmlzQmVsb3dDZW50ZXJPZlRoZVNjcmVlbihodG1sRWxlbWVudCwgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblxuICAgIGlmIChwYWdlSXNJblZpZXdwb3J0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXNIZWlnaHQgPSB0aGlzLmNhbGN1bGF0ZU9mZnNldChwYWdlTnVtYmVyKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogcGFnZXNIZWlnaHRcbiAgICB9O1xuICAgIGlmIChlbCkge1xuICAgICAgLy8gdXNpbmcgcG9seWZpbGxcbiAgICAgIGVsLnNjcm9sbChvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENoaWxkcmVuKCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA6IG51bGw7XG4gICAgaWYgKGVsKSB7XG4gICAgICAvLyBoZXJlIGFuZCBpbiB0aGUgc2ltaWxhciBsaW5lIGJlbG93IHdlIGdldHRpbmcgdGhlIGRvY3VtZW50IHBhZ2VzXG4gICAgICByZXR1cm4gZWwuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlT2Zmc2V0KHBhZ2VOdW1iZXI6IG51bWJlcikge1xuICAgIGNvbnN0IHBhZ2VzID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuICAgIGlmICghcGFnZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIChwYWdlcy5pdGVtKHBhZ2VOdW1iZXIgLSAxKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0KS55ICsgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCAtIDcwO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCBwYWdlcyA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcbiAgICBsZXQgcGFnZU51bSA9IDA7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gICAgd2hpbGUgKGNvdW50ZXIgPCBwYWdlcy5sZW5ndGgpIHtcbiAgICAgIC8vIGlmIHdlIHNjcm9sbGVkIHRpbGwgdGhlIGVuZCwgdGhlIGN1cnJlbnQgcGFnZSBudW1iZXIgbXVzdCBiZSB0aGUgbGFzdCBwYWdlXG4gICAgICBpZiAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCArIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgKyAzMCA+PSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgIHBhZ2VOdW0gPSBwYWdlcy5sZW5ndGg7XG4gICAgICAgIGNvdW50ZXIgPSBwYWdlTnVtO1xuICAgICAgICAvLyBsb2FkIG5vdCBsb2FkZWQgcGFnZXNcbiAgICAgICAgd2hpbGUgKGNvdW50ZXIgPiAwICYmICF0aGlzLmxvYWRlZFBhZ2VzU2V0Lmhhcyhjb3VudGVyKSkge1xuICAgICAgICAgIHRoaXMuX3BhZ2VQcmVsb2FkU2VydmljZS5jaGFuZ2VMYXN0UGFnZUluVmlldyhjb3VudGVyKTtcbiAgICAgICAgICB0aGlzLmxvYWRlZFBhZ2VzU2V0LmFkZChjb3VudGVyKTtcbiAgICAgICAgICBjb3VudGVyLS07XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb25zdCBodG1sRWxlbWVudCA9IHBhZ2VzLml0ZW0oY291bnRlcikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZighaHRtbEVsZW1lbnQpIHtcbiAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29uc3QgcGFnZUlzSW5WaWV3cG9ydCA9IHRoaXMuX3ZpZXdwb3J0U2VydmljZS5pc0JlbG93Q2VudGVyT2ZUaGVTY3JlZW4oaHRtbEVsZW1lbnQsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgICBpZiAocGFnZUlzSW5WaWV3cG9ydCkge1xuICAgICAgICBwYWdlTnVtID0gY291bnRlciArIDE7IFxuICAgICAgfSBlbHNlIGlmIChwYWdlTnVtKSB7XG4gICAgICAgIGNvdW50ZXIgPSBwYWdlcy5sZW5ndGhcbiAgICAgIH1cbiAgICAgIGNvdW50ZXIrKztcblxuICAgICAgaWYgKCF0aGlzLmxvYWRlZFBhZ2VzU2V0Lmhhcyhjb3VudGVyKSkge1xuICAgICAgICB0aGlzLl9wYWdlUHJlbG9hZFNlcnZpY2UuY2hhbmdlTGFzdFBhZ2VJblZpZXcoY291bnRlcik7XG4gICAgICAgIHRoaXMubG9hZGVkUGFnZXNTZXQuYWRkKGNvdW50ZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFnZUlzSW5WaWV3cG9ydCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAgaWYgKCh0aGlzLmlzUHJlc2VudGF0aW9uICYmIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9PT0gMCkgfHwgIXRoaXMuaXNQcmVzZW50YXRpb24pIHtcbiAgICAgIGlmKHBhZ2VOdW0gPD0gdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmNvdW50UGFnZXMpIHsgXG4gICAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9IHBhZ2VOdW07XG4gICAgICB9XG4gICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxufVxuIl19