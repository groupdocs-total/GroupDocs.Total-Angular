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
    isPresentation: [{ type: Input }],
    scrolling: [{ type: HostListener, args: ['scroll',] }],
    resizing: [{ type: HostListener, args: ['window:resize',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2Nyb2xsYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztNQUMzQixDQUFDLEdBQUcsTUFBTTtBQUtoQixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7Ozs7SUFPOUIsWUFBb0IsV0FBb0MsRUFDcEMsZ0JBQWlDLEVBQ2pDLG1CQUF1QyxFQUN2QyxZQUF5QixFQUN6QixjQUE2QixFQUM3QixnQkFBaUM7UUFMakMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3BDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUN2QyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBUjdDLFNBQUksR0FBRyxHQUFHLENBQUM7UUFDWCxtQkFBYyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFTakMsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzlELFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUzs7OztRQUFDLENBQUMsR0FBVyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNsQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ0osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFdUIsU0FBUztRQUMvQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUU4QixRQUFRO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxVQUFrQjs7Y0FDdkIsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYTs7Y0FDbkMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDOztjQUMvQixJQUFJLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7O2NBQzNELFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDekUsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxFQUFFO1lBQ3ZFLE9BQU87U0FDUjs7Y0FDSyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7O2NBQzlDLE9BQU8sR0FBRztZQUNkLElBQUksRUFBRSxDQUFDO1lBQ1AsR0FBRyxFQUFFLFdBQVc7U0FDakI7UUFDRCxJQUFHLEVBQUUsRUFBQztZQUNKLGlCQUFpQjtZQUNqQixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxXQUFXOztjQUNYLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUNuRSxJQUFJLEVBQUUsRUFBRTtZQUNOLG1FQUFtRTtZQUNuRSxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1NBQ3REO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sT0FBTyxDQUFDLFVBQWtCOztjQUMxQixFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDbkUsSUFBSSxFQUFFLEVBQUU7WUFDTixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0U7SUFDSCxDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsVUFBa0I7O2NBQ2xDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTs7Y0FDdEUsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTs7WUFDcEQsV0FBVyxHQUFHLENBQUM7UUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUNyQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7O2tCQUN0QixZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pELFdBQVcsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlFO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTyxpQkFBaUI7O2NBQ2pCLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7Y0FDeEIsTUFBTSxHQUFHLEdBQUc7UUFDbEIsSUFBSSxNQUFNLEVBQUU7O2tCQUNKLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQzlHLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDZixPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7Ozs7SUFFRCxPQUFPOztZQUNELElBQUk7O1lBQ0osY0FBYyxHQUFHLEtBQUs7O2NBQ3BCLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7O2NBQ3pDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDOUYsS0FBSyxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRTs7a0JBQ3JELE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNsQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLGNBQWMsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLGVBQWUsSUFBSSxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLEtBQUssZUFBZSxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUMxSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7NEJBQzVGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO3lCQUMxQztxQkFDRjtvQkFDRCxjQUFjLEdBQUcsSUFBSSxDQUFDO2lCQUN2QjtnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2xDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQy9CO2FBQ0Y7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzFFLENBQUM7Ozs7O0lBR08sUUFBUTtRQUNkLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQzNGLENBQUM7Ozs7O0lBRU8sT0FBTztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDekIsQ0FBQzs7O1lBM0lGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7O1lBakJDLFVBQVU7WUFPSixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLFdBQVc7WUFDWCxhQUFhO1lBQ2IsZUFBZTs7OzZCQVFwQixLQUFLO3dCQTZCTCxZQUFZLFNBQUMsUUFBUTt1QkFJckIsWUFBWSxTQUFDLGVBQWU7Ozs7SUFqQzdCLDZDQUFpQzs7Ozs7SUFFakMsMENBQTRCOzs7OztJQUM1QixtQ0FBbUI7Ozs7O0lBQ25CLDZDQUFtQzs7Ozs7SUFFdkIsMENBQTRDOzs7OztJQUM1QywrQ0FBeUM7Ozs7O0lBQ3pDLGtEQUErQzs7Ozs7SUFDL0MsMkNBQWlDOzs7OztJQUNqQyw2Q0FBcUM7Ozs7O0lBQ3JDLCtDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05hdmlnYXRlU2VydmljZX0gZnJvbSBcIi4vbmF2aWdhdGUuc2VydmljZVwiO1xuaW1wb3J0IHtQYWdlUHJlbG9hZFNlcnZpY2V9IGZyb20gXCIuL3BhZ2UtcHJlbG9hZC5zZXJ2aWNlXCI7XG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSBcIi4vd2luZG93LnNlcnZpY2VcIjtcbmltcG9ydCB7Vmlld3BvcnRTZXJ2aWNlfSBmcm9tIFwiLi92aWV3cG9ydC5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuY29uc3QgJCA9IGpxdWVyeTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkU2Nyb2xsYWJsZV0nXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbGFibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlzUHJlc2VudGF0aW9uOiBib29sZWFuO1xuXG4gIHByaXZhdGUgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgcHJpdmF0ZSB6b29tID0gMTAwO1xuICBwcml2YXRlIGxvYWRlZFBhZ2VzU2V0ID0gbmV3IFNldCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcGFnZVByZWxvYWRTZXJ2aWNlOiBQYWdlUHJlbG9hZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdmlld3BvcnRTZXJ2aWNlOiBWaWV3cG9ydFNlcnZpY2UpIHtcblxuICAgIHRoaXMuem9vbSA9IF96b29tU2VydmljZS56b29tID8gX3pvb21TZXJ2aWNlLnpvb20gOiB0aGlzLnpvb207XG4gICAgX3pvb21TZXJ2aWNlLnpvb21DaGFuZ2Uuc3Vic2NyaWJlKCh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy56b29tID0gdmFsID8gdmFsIDogdGhpcy56b29tO1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy56b29tID0gdGhpcy5fem9vbVNlcnZpY2Uuem9vbSA/IHRoaXMuX3pvb21TZXJ2aWNlLnpvb20gOiB0aGlzLnpvb207XG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLm5hdmlnYXRlLnN1YnNjcmliZSgodmFsdWUgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHZhbHVlO1xuICAgICAgdGhpcy5zY3JvbGxUb1BhZ2UodmFsdWUpO1xuICAgIH0pKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3Njcm9sbCcpIHNjcm9sbGluZygpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKSByZXNpemluZygpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHNjcm9sbFRvUGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBwYWdlID0gdGhpcy5nZXRQYWdlKHBhZ2VOdW1iZXIpO1xuICAgIGNvbnN0IHByZXYgPSBwYWdlTnVtYmVyID4gMCA/IHRoaXMuZ2V0UGFnZShwYWdlTnVtYmVyIC0gMSkgOiBudWxsO1xuICAgIGNvbnN0IGlzU2FtZVRvcCA9IChwcmV2ICYmICQocHJldikub2Zmc2V0KCkudG9wID09PSAkKHBhZ2UpLm9mZnNldCgpLnRvcCk7XG4gICAgaWYgKHRoaXMuX3ZpZXdwb3J0U2VydmljZS5jaGVja0luVmlld3BvcnQocGFnZSwgdGhpcy56b29tKSAmJiBpc1NhbWVUb3ApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGFnZXNIZWlnaHQgPSB0aGlzLmNhbGN1bGF0ZU9mZnNldChwYWdlTnVtYmVyKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogcGFnZXNIZWlnaHRcbiAgICB9O1xuICAgIGlmKGVsKXtcbiAgICAgIC8vIHVzaW5nIHBvbHlmaWxsXG4gICAgICBlbC5zY3JvbGwob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaGlsZHJlbigpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRSZWYgPyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xuICAgIGlmIChlbCkge1xuICAgICAgLy8gaGVyZSBhbmQgaW4gdGhlIHNpbWlsYXIgbGluZSBiZWxvdyB3ZSBnZXR0aW5nIHRoZSBkb2N1bWVudCBwYWdlc1xuICAgICAgcmV0dXJuIGVsLmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFBhZ2UocGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbGVtZW50UmVmID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IDogbnVsbDtcbiAgICBpZiAoZWwpIHtcbiAgICAgIHJldHVybiBlbC5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbShwYWdlTnVtYmVyIC0gMSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVPZmZzZXQocGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLl93aW5kb3dTZXJ2aWNlLmlzRmlyZWZveCgpID8gMSA6IHRoaXMuY291bnRQYWdlc09uV2lkdGgoKTtcbiAgICBjb25zdCBtYXJnaW4gPSB0aGlzLl93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpID8gNDAgOiAxMDtcbiAgICBsZXQgcGFnZXNIZWlnaHQgPSAwO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGFnZU51bWJlciAvIGNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldFBhZ2UoaSk7XG4gICAgICBjb25zdCBjbGllbnRIZWlnaHQgPSBpdGVtID8gaXRlbS5jbGllbnRIZWlnaHQgOiAwO1xuICAgICAgcGFnZXNIZWlnaHQgKz0gY2xpZW50SGVpZ2h0ID4gMCA/IGNsaWVudEhlaWdodCAqIHRoaXMuZ2V0Wm9vbSgpICsgbWFyZ2luIDogMDtcbiAgICB9XG4gICAgcmV0dXJuIHBhZ2VzSGVpZ2h0O1xuICB9XG5cbiAgcHJpdmF0ZSBjb3VudFBhZ2VzT25XaWR0aCgpIHtcbiAgICBjb25zdCBwYWdlRWwgPSB0aGlzLmdldFBhZ2UoMSk7XG4gICAgY29uc3Qgb2Zmc2V0ID0gMTUwO1xuICAgIGlmIChwYWdlRWwpIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5mbG9vcigodGhpcy5nZXRXaWR0aCgpIC0gb2Zmc2V0KSAvIChwYWdlRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKiB0aGlzLmdldFpvb20oKSkpO1xuICAgICAgaWYgKGNvdW50ICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGxldCBwYWdlO1xuICAgIGxldCBjdXJyZW50UGFnZVNldCA9IGZhbHNlO1xuICAgIGNvbnN0IHBhZ2VFbGVtID0gdGhpcy5nZXRQYWdlKHRoaXMuY3VycmVudFBhZ2UpO1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlUmVjdCA9IHRoaXMuY3VycmVudFBhZ2UgJiYgcGFnZUVsZW0gPyBwYWdlRWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IG51bGw7XG4gICAgZm9yIChwYWdlID0gMTsgcGFnZSA8IHRoaXMuZ2V0Q2hpbGRyZW4oKS5sZW5ndGggKyAxOyBwYWdlKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdldFBhZ2UocGFnZSk7XG4gICAgICBpZiAodGhpcy5fdmlld3BvcnRTZXJ2aWNlLmNoZWNrSW5WaWV3cG9ydChlbGVtZW50LCB0aGlzLnpvb20pKSB7XG4gICAgICAgIGlmICghY3VycmVudFBhZ2VTZXQpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFBhZ2UgfHwgIXBhZ2VFbGVtIHx8ICh0aGlzLmN1cnJlbnRQYWdlICYmIGN1cnJlbnRQYWdlUmVjdCAmJiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAhPT0gY3VycmVudFBhZ2VSZWN0LnRvcCkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgICAgICAgICAgaWYgKCh0aGlzLmlzUHJlc2VudGF0aW9uICYmIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9PT0gMCkgfHwgIXRoaXMuaXNQcmVzZW50YXRpb24pIHtcbiAgICAgICAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gcGFnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudFBhZ2VTZXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5sb2FkZWRQYWdlc1NldC5oYXMocGFnZSkpIHtcbiAgICAgICAgICB0aGlzLl9wYWdlUHJlbG9hZFNlcnZpY2UuY2hhbmdlTGFzdFBhZ2VJblZpZXcocGFnZSk7XG4gICAgICAgICAgdGhpcy5sb2FkZWRQYWdlc1NldC5hZGQocGFnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnpvb20gPSB0aGlzLl96b29tU2VydmljZS56b29tID8gdGhpcy5fem9vbVNlcnZpY2Uuem9vbSA6IHRoaXMuem9vbTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBnZXRXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRab29tKCkge1xuICAgIHJldHVybiB0aGlzLnpvb20gLyAxMDA7XG4gIH1cbn1cbiJdfQ==