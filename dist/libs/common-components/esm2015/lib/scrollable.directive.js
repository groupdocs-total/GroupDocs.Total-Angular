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
        const isSameTop = (prev && $(prev).offset() && $(page).offset() && $(prev).offset().top === $(page).offset().top);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2Nyb2xsYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFLYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O01BQzNCLENBQUMsR0FBRyxNQUFNO0FBS2hCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7OztJQU05QixZQUFvQixXQUFvQyxFQUNwQyxnQkFBaUMsRUFDakMsbUJBQXVDLEVBQ3ZDLFlBQXlCLEVBQ3pCLGNBQTZCLEVBQzdCLGdCQUFpQztRQUxqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQ3ZDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFSN0MsU0FBSSxHQUFHLEdBQUcsQ0FBQztRQUNYLG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQVNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVks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QUFDLFFBQVE7dUJBSXJCLFlBQVksU0FBQyxlQUFlOzs7Ozs7O0lBL0I3QiwwQ0FBNEI7Ozs7O0lBQzVCLG1DQUFtQjs7Ozs7SUFDbkIsNkNBQW1DOzs7OztJQUV2QiwwQ0FBNEM7Ozs7O0lBQzVDLCtDQUF5Qzs7Ozs7SUFDekMsa0RBQStDOzs7OztJQUMvQywyQ0FBaUM7Ozs7O0lBQ2pDLDZDQUFxQzs7Ozs7SUFDckMsK0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOYXZpZ2F0ZVNlcnZpY2V9IGZyb20gXCIuL25hdmlnYXRlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtQYWdlUHJlbG9hZFNlcnZpY2V9IGZyb20gXCIuL3BhZ2UtcHJlbG9hZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xyXG5pbXBvcnQge1dpbmRvd1NlcnZpY2V9IGZyb20gXCIuL3dpbmRvdy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Vmlld3BvcnRTZXJ2aWNlfSBmcm9tIFwiLi92aWV3cG9ydC5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tIFwianF1ZXJ5XCI7XHJcbmNvbnN0ICQgPSBqcXVlcnk7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tnZFNjcm9sbGFibGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2Nyb2xsYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50UGFnZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgem9vbSA9IDEwMDtcclxuICBwcml2YXRlIGxvYWRlZFBhZ2VzU2V0ID0gbmV3IFNldCgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgICAgICAgICAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9wYWdlUHJlbG9hZFNlcnZpY2U6IFBhZ2VQcmVsb2FkU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF92aWV3cG9ydFNlcnZpY2U6IFZpZXdwb3J0U2VydmljZSkge1xyXG5cclxuICAgIHRoaXMuem9vbSA9IF96b29tU2VydmljZS56b29tID8gX3pvb21TZXJ2aWNlLnpvb20gOiB0aGlzLnpvb207XHJcbiAgICBfem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHZhbDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHRoaXMuem9vbSA9IHZhbCA/IHZhbCA6IHRoaXMuem9vbTtcclxuICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuem9vbSA9IHRoaXMuX3pvb21TZXJ2aWNlLnpvb20gPyB0aGlzLl96b29tU2VydmljZS56b29tIDogdGhpcy56b29tO1xyXG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLm5hdmlnYXRlLnN1YnNjcmliZSgodmFsdWUgPT4ge1xyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9QYWdlKHZhbHVlKTtcclxuICAgIH0pKTtcclxuICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJykgc2Nyb2xsaW5nKCkge1xyXG4gICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJykgcmVzaXppbmcoKSB7XHJcbiAgICB0aGlzLnJlZnJlc2goKTtcclxuICB9XHJcblxyXG4gIHNjcm9sbFRvUGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3QgcGFnZSA9IHRoaXMuZ2V0UGFnZShwYWdlTnVtYmVyKTtcclxuICAgIGNvbnN0IHByZXYgPSBwYWdlTnVtYmVyID4gMCA/IHRoaXMuZ2V0UGFnZShwYWdlTnVtYmVyIC0gMSkgOiBudWxsO1xyXG4gICAgY29uc3QgaXNTYW1lVG9wID0gKHByZXYgJiYgJChwcmV2KS5vZmZzZXQoKSAmJiAkKHBhZ2UpLm9mZnNldCgpICYmICQocHJldikub2Zmc2V0KCkudG9wID09PSAkKHBhZ2UpLm9mZnNldCgpLnRvcCk7XHJcbiAgICBpZiAodGhpcy5fdmlld3BvcnRTZXJ2aWNlLmNoZWNrSW5WaWV3cG9ydChwYWdlLCB0aGlzLnpvb20pICYmIGlzU2FtZVRvcCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYWdlc0hlaWdodCA9IHRoaXMuY2FsY3VsYXRlT2Zmc2V0KHBhZ2VOdW1iZXIpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgdG9wOiBwYWdlc0hlaWdodFxyXG4gICAgfTtcclxuICAgIGlmKGVsKXtcclxuICAgICAgLy8gdXNpbmcgcG9seWZpbGxcclxuICAgICAgZWwuc2Nyb2xsKG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDaGlsZHJlbigpIHtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA6IG51bGw7XHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgLy8gaGVyZSBhbmQgaW4gdGhlIHNpbWlsYXIgbGluZSBiZWxvdyB3ZSBnZXR0aW5nIHRoZSBkb2N1bWVudCBwYWdlc1xyXG4gICAgICByZXR1cm4gZWwuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcikge1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbGVtZW50UmVmID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IDogbnVsbDtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICByZXR1cm4gZWwuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuLml0ZW0ocGFnZU51bWJlciAtIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVPZmZzZXQocGFnZU51bWJlcjogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuX3dpbmRvd1NlcnZpY2UuaXNGaXJlZm94KCkgPyAxIDogdGhpcy5jb3VudFBhZ2VzT25XaWR0aCgpO1xyXG4gICAgY29uc3QgbWFyZ2luID0gdGhpcy5fd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKSA/IDQwIDogMTA7XHJcbiAgICBsZXQgcGFnZXNIZWlnaHQgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYWdlTnVtYmVyIC8gY291bnQ7IGkrKykge1xyXG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRQYWdlKGkpO1xyXG4gICAgICBjb25zdCBjbGllbnRIZWlnaHQgPSBpdGVtID8gaXRlbS5jbGllbnRIZWlnaHQgOiAwO1xyXG4gICAgICBwYWdlc0hlaWdodCArPSBjbGllbnRIZWlnaHQgPiAwID8gY2xpZW50SGVpZ2h0ICogdGhpcy5nZXRab29tKCkgKyBtYXJnaW4gOiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhZ2VzSGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb3VudFBhZ2VzT25XaWR0aCgpIHtcclxuICAgIGNvbnN0IHBhZ2VFbCA9IHRoaXMuZ2V0UGFnZSgxKTtcclxuICAgIGNvbnN0IG9mZnNldCA9IDE1MDtcclxuICAgIGlmIChwYWdlRWwpIHtcclxuICAgICAgY29uc3QgY291bnQgPSBNYXRoLmZsb29yKCh0aGlzLmdldFdpZHRoKCkgLSBvZmZzZXQpIC8gKHBhZ2VFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAqIHRoaXMuZ2V0Wm9vbSgpKSk7XHJcbiAgICAgIGlmIChjb3VudCAhPT0gMCkge1xyXG4gICAgICAgIHJldHVybiBjb3VudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDE7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoKCkge1xyXG4gICAgbGV0IHBhZ2U7XHJcbiAgICBsZXQgY3VycmVudFBhZ2VTZXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IHBhZ2VFbGVtID0gdGhpcy5nZXRQYWdlKHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgY29uc3QgY3VycmVudFBhZ2VSZWN0ID0gdGhpcy5jdXJyZW50UGFnZSAmJiBwYWdlRWxlbSA/IHBhZ2VFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogbnVsbDtcclxuICAgIGZvciAocGFnZSA9IDE7IHBhZ2UgPCB0aGlzLmdldENoaWxkcmVuKCkubGVuZ3RoICsgMTsgcGFnZSsrKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdldFBhZ2UocGFnZSk7XHJcbiAgICAgIGlmICh0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KGVsZW1lbnQsIHRoaXMuem9vbSkpIHtcclxuICAgICAgICBpZiAoIWN1cnJlbnRQYWdlU2V0KSB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFBhZ2UgfHwgIXBhZ2VFbGVtIHx8ICh0aGlzLmN1cnJlbnRQYWdlICYmIGN1cnJlbnRQYWdlUmVjdCAmJiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAhPT0gY3VycmVudFBhZ2VSZWN0LnRvcCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgPT09IDApIHtcclxuICAgICAgICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgPSBwYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjdXJyZW50UGFnZVNldCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5sb2FkZWRQYWdlc1NldC5oYXMocGFnZSkpIHtcclxuICAgICAgICAgIHRoaXMuX3BhZ2VQcmVsb2FkU2VydmljZS5jaGFuZ2VMYXN0UGFnZUluVmlldyhwYWdlKTtcclxuICAgICAgICAgIHRoaXMubG9hZGVkUGFnZXNTZXQuYWRkKHBhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuem9vbSA9IHRoaXMuX3pvb21TZXJ2aWNlLnpvb20gPyB0aGlzLl96b29tU2VydmljZS56b29tIDogdGhpcy56b29tO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgZ2V0V2lkdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRab29tKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuem9vbSAvIDEwMDtcclxuICB9XHJcbn1cclxuIl19