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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYWJsZS1lZGl0ZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Njcm9sbGFibGUtZWRpdGVkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLckQsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7Ozs7O0lBTXBDLFlBQW9CLFdBQW9DLEVBQ3BDLGdCQUFpQyxFQUNqQyxtQkFBdUMsRUFDdkMsWUFBeUIsRUFDekIsY0FBNkIsRUFDN0IsZ0JBQWlDO1FBTGpDLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFDdkMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQVA3QyxtQkFBYyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFRbkMsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFZixTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQzthQUN4QixJQUFJLENBQ0gsWUFBWSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDakQsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUMsQ0FBQztRQUVwQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDO2FBQ2hELElBQUksQ0FDSCxZQUFZLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUNqRDthQUNBLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVTthQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hCLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRU4sQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsVUFBa0I7O2NBQ3ZCLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWE7O2NBQ25DLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFOztjQUMxQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsd0JBQXdCLENBQUMsbUJBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUVsSixJQUFJLGdCQUFnQixFQUFFO1lBQ3BCLE9BQU87U0FDUjs7Y0FFSyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7O2NBQzlDLE9BQU8sR0FBRztZQUNkLElBQUksRUFBRSxDQUFDO1lBQ1AsR0FBRyxFQUFFLFdBQVc7U0FDakI7UUFDRCxJQUFJLEVBQUUsRUFBRTtZQUNOLGlCQUFpQjtZQUNqQixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxXQUFXOztjQUNYLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUNuRSxJQUFJLEVBQUUsRUFBRTtZQUNOLG1FQUFtRTtZQUNuRSxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1NBQ3REO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLFVBQWtCOztjQUNsQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNqQixPQUFPO1NBQ1I7UUFFRCxPQUFPLENBQUMsbUJBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMscUJBQXFCLEVBQUUsRUFBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDM0gsQ0FBQzs7OztJQUVELE9BQU87O2NBQ0MsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7O1lBQzVCLE9BQU8sR0FBRyxDQUFDOztZQUNYLE9BQU8sR0FBRyxDQUFDO1FBRWYsT0FBTyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUM3Qiw2RUFBNkU7WUFDN0UsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUU7Z0JBQzlJLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUN2QixPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUNsQix3QkFBd0I7Z0JBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDeEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN2RCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDakMsT0FBTyxFQUFFLENBQUM7aUJBQ1g7Z0JBQ0QsTUFBTTthQUNQOztrQkFFSyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsd0JBQXdCLENBQUMsbUJBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBZSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1lBQzNJLElBQUksZ0JBQWdCLEVBQUU7Z0JBQ3BCLE9BQU8sR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCO2lCQUFNLElBQUksT0FBTyxFQUFFO2dCQUNsQixPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQTthQUN2QjtZQUNELE9BQU8sRUFBRSxDQUFDO1lBRVYsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2xDO1lBRUQsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDcEIsTUFBTTthQUNQO1NBQ0Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUM1RixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7WUEzSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7YUFDakM7Ozs7WUFmQyxVQUFVO1lBS0gsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixXQUFXO1lBQ1gsYUFBYTtZQUNiLGVBQWU7Ozs2QkFRckIsS0FBSzs7OztJQUFOLG1EQUFpQzs7Ozs7SUFFakMsZ0RBQTRCOzs7OztJQUM1QixtREFBbUM7Ozs7O0lBRXZCLGdEQUE0Qzs7Ozs7SUFDNUMscURBQXlDOzs7OztJQUN6Qyx3REFBK0M7Ozs7O0lBQy9DLGlEQUFpQzs7Ozs7SUFDakMsbURBQXFDOzs7OztJQUNyQyxxREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0ZVNlcnZpY2UgfSBmcm9tIFwiLi9uYXZpZ2F0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQYWdlUHJlbG9hZFNlcnZpY2UgfSBmcm9tIFwiLi9wYWdlLXByZWxvYWQuc2VydmljZVwiO1xuaW1wb3J0IHsgWm9vbVNlcnZpY2UgfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tIFwiLi93aW5kb3cuc2VydmljZVwiO1xuaW1wb3J0IHsgVmlld3BvcnRTZXJ2aWNlIH0gZnJvbSBcIi4vdmlld3BvcnQuc2VydmljZVwiO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSwgdGhyb3R0bGVUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2RTY3JvbGxhYmxlRWRpdGVkXSdcbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsYWJsZUVkaXRlZERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGlzUHJlc2VudGF0aW9uOiBib29sZWFuO1xuXG4gIHByaXZhdGUgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgcHJpdmF0ZSBsb2FkZWRQYWdlc1NldCA9IG5ldyBTZXQoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3BhZ2VQcmVsb2FkU2VydmljZTogUGFnZVByZWxvYWRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3ZpZXdwb3J0U2VydmljZTogVmlld3BvcnRTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKFxuICAgICAgICB0aHJvdHRsZVRpbWUoMTAwLCB1bmRlZmluZWQsIHsgdHJhaWxpbmc6IHRydWUgfSlcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcblxuICAgIGZyb21FdmVudCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRocm90dGxlVGltZSgxMDAsIHVuZGVmaW5lZCwgeyB0cmFpbGluZzogdHJ1ZSB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2goKSk7XG5cbiAgICB0aGlzLl96b29tU2VydmljZS56b29tQ2hhbmdlXG4gICAgICAucGlwZShkZWxheSgzMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2goKSk7XG5cbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmF2aWdhdGUuc3Vic2NyaWJlKCh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdmFsdWU7XG4gICAgICB0aGlzLnNjcm9sbFRvUGFnZSh2YWx1ZSk7XG4gICAgfSkpO1xuXG4gIH1cblxuICBzY3JvbGxUb1BhZ2UocGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgcGFnZXMgPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgY29uc3QgcGFnZUlzSW5WaWV3cG9ydCA9IHRoaXMuX3ZpZXdwb3J0U2VydmljZS5pc0JlbG93Q2VudGVyT2ZUaGVTY3JlZW4ocGFnZXMuaXRlbShwYWdlTnVtYmVyIC0gMSkgYXMgSFRNTEVsZW1lbnQsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cbiAgICBpZiAocGFnZUlzSW5WaWV3cG9ydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzSGVpZ2h0ID0gdGhpcy5jYWxjdWxhdGVPZmZzZXQocGFnZU51bWJlcik7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IHBhZ2VzSGVpZ2h0XG4gICAgfTtcbiAgICBpZiAoZWwpIHtcbiAgICAgIC8vIHVzaW5nIHBvbHlmaWxsXG4gICAgICBlbC5zY3JvbGwob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaGlsZHJlbigpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRSZWYgPyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xuICAgIGlmIChlbCkge1xuICAgICAgLy8gaGVyZSBhbmQgaW4gdGhlIHNpbWlsYXIgbGluZSBiZWxvdyB3ZSBnZXR0aW5nIHRoZSBkb2N1bWVudCBwYWdlc1xuICAgICAgcmV0dXJuIGVsLmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZU9mZnNldChwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICBjb25zdCBwYWdlcyA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcbiAgICBpZiAoIXBhZ2VzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiAocGFnZXMuaXRlbShwYWdlTnVtYmVyIC0gMSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdCkueSArIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgLSA3MDtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcGFnZXMgPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgbGV0IHBhZ2VOdW0gPSAwO1xuICAgIGxldCBjb3VudGVyID0gMDtcblxuICAgIHdoaWxlIChjb3VudGVyIDwgcGFnZXMubGVuZ3RoKSB7XG4gICAgICAvLyBpZiB3ZSBzY3JvbGxlZCB0aWxsIHRoZSBlbmQsIHRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyIG11c3QgYmUgdGhlIGxhc3QgcGFnZVxuICAgICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgKyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgMzAgPj0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCkge1xuICAgICAgICBwYWdlTnVtID0gcGFnZXMubGVuZ3RoO1xuICAgICAgICBjb3VudGVyID0gcGFnZU51bTtcbiAgICAgICAgLy8gbG9hZCBub3QgbG9hZGVkIHBhZ2VzXG4gICAgICAgIHdoaWxlICghdGhpcy5sb2FkZWRQYWdlc1NldC5oYXMoY291bnRlcikpIHtcbiAgICAgICAgICB0aGlzLl9wYWdlUHJlbG9hZFNlcnZpY2UuY2hhbmdlTGFzdFBhZ2VJblZpZXcoY291bnRlcik7XG4gICAgICAgICAgdGhpcy5sb2FkZWRQYWdlc1NldC5hZGQoY291bnRlcik7XG4gICAgICAgICAgY291bnRlci0tO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYWdlSXNJblZpZXdwb3J0ID0gdGhpcy5fdmlld3BvcnRTZXJ2aWNlLmlzQmVsb3dDZW50ZXJPZlRoZVNjcmVlbihwYWdlcy5pdGVtKGNvdW50ZXIpIGFzIEhUTUxFbGVtZW50LCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgaWYgKHBhZ2VJc0luVmlld3BvcnQpIHtcbiAgICAgICAgcGFnZU51bSA9IGNvdW50ZXIgKyAxO1xuICAgICAgfSBlbHNlIGlmIChwYWdlTnVtKSB7XG4gICAgICAgIGNvdW50ZXIgPSBwYWdlcy5sZW5ndGhcbiAgICAgIH1cbiAgICAgIGNvdW50ZXIrKztcblxuICAgICAgaWYgKCF0aGlzLmxvYWRlZFBhZ2VzU2V0Lmhhcyhjb3VudGVyKSkge1xuICAgICAgICB0aGlzLl9wYWdlUHJlbG9hZFNlcnZpY2UuY2hhbmdlTGFzdFBhZ2VJblZpZXcoY291bnRlcik7XG4gICAgICAgIHRoaXMubG9hZGVkUGFnZXNTZXQuYWRkKGNvdW50ZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFnZUlzSW5WaWV3cG9ydCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoKHRoaXMuaXNQcmVzZW50YXRpb24gJiYgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID09PSAwKSB8fCAhdGhpcy5pc1ByZXNlbnRhdGlvbikge1xuICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gcGFnZU51bTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cbn1cbiJdfQ==