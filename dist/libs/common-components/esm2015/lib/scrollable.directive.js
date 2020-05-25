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
        /** @type {?} */
        const count = Math.floor((this.getWidth() - offset) / (pageEl.getBoundingClientRect().width * this.getZoom()));
        return count === 0 ? 1 : count;
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
                        this._navigateService.currentPage = page;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2Nyb2xsYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFLYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O01BQzNCLENBQUMsR0FBRyxNQUFNO0FBS2hCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7OztJQU05QixZQUFvQixXQUFvQyxFQUNwQyxnQkFBaUMsRUFDakMsbUJBQXVDLEVBQ3ZDLFlBQXlCLEVBQ3pCLGNBQTZCLEVBQzdCLGdCQUFpQztRQUxqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQ3ZDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFSN0MsU0FBSSxHQUFHLEdBQUcsQ0FBQztRQUNYLG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQVNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVks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OztJQUNyQywrQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge05hdmlnYXRlU2VydmljZX0gZnJvbSBcIi4vbmF2aWdhdGUuc2VydmljZVwiO1xyXG5pbXBvcnQge1BhZ2VQcmVsb2FkU2VydmljZX0gZnJvbSBcIi4vcGFnZS1wcmVsb2FkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtab29tU2VydmljZX0gZnJvbSBcIi4vem9vbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSBcIi4vd2luZG93LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtWaWV3cG9ydFNlcnZpY2V9IGZyb20gXCIuL3ZpZXdwb3J0LnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcclxuY29uc3QgJCA9IGpxdWVyeTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2dkU2Nyb2xsYWJsZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkluaXQge1xyXG5cclxuICBwcml2YXRlIGN1cnJlbnRQYWdlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB6b29tID0gMTAwO1xyXG4gIHByaXZhdGUgbG9hZGVkUGFnZXNTZXQgPSBuZXcgU2V0KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3BhZ2VQcmVsb2FkU2VydmljZTogUGFnZVByZWxvYWRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3ZpZXdwb3J0U2VydmljZTogVmlld3BvcnRTZXJ2aWNlKSB7XHJcblxyXG4gICAgdGhpcy56b29tID0gX3pvb21TZXJ2aWNlLnpvb20gPyBfem9vbVNlcnZpY2Uuem9vbSA6IHRoaXMuem9vbTtcclxuICAgIF96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgodmFsOiBudW1iZXIpID0+IHtcclxuICAgICAgdGhpcy56b29tID0gdmFsID8gdmFsIDogdGhpcy56b29tO1xyXG4gICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy56b29tID0gdGhpcy5fem9vbVNlcnZpY2Uuem9vbSA/IHRoaXMuX3pvb21TZXJ2aWNlLnpvb20gOiB0aGlzLnpvb207XHJcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmF2aWdhdGUuc3Vic2NyaWJlKCh2YWx1ZSA9PiB7XHJcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5zY3JvbGxUb1BhZ2UodmFsdWUpO1xyXG4gICAgfSkpO1xyXG4gICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdzY3JvbGwnKSBzY3JvbGxpbmcoKSB7XHJcbiAgICB0aGlzLnJlZnJlc2goKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKSByZXNpemluZygpIHtcclxuICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG9QYWdlKHBhZ2VOdW1iZXI6IG51bWJlcikge1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCBwYWdlID0gdGhpcy5nZXRQYWdlKHBhZ2VOdW1iZXIpO1xyXG4gICAgY29uc3QgcHJldiA9IHBhZ2VOdW1iZXIgPiAwID8gdGhpcy5nZXRQYWdlKHBhZ2VOdW1iZXIgLSAxKSA6IG51bGw7XHJcbiAgICBjb25zdCBpc1NhbWVUb3AgPSAocHJldiAmJiAkKHByZXYpLm9mZnNldCgpLnRvcCA9PT0gJChwYWdlKS5vZmZzZXQoKS50b3ApO1xyXG4gICAgaWYgKHRoaXMuX3ZpZXdwb3J0U2VydmljZS5jaGVja0luVmlld3BvcnQocGFnZSwgdGhpcy56b29tKSAmJiBpc1NhbWVUb3ApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGFnZXNIZWlnaHQgPSB0aGlzLmNhbGN1bGF0ZU9mZnNldChwYWdlTnVtYmVyKTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHRvcDogcGFnZXNIZWlnaHRcclxuICAgIH07XHJcbiAgICBpZihlbCl7XHJcbiAgICAgIC8vIHVzaW5nIHBvbHlmaWxsXHJcbiAgICAgIGVsLnNjcm9sbChvcHRpb25zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q2hpbGRyZW4oKSB7XHJcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRSZWYgPyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgIC8vIGhlcmUgYW5kIGluIHRoZSBzaW1pbGFyIGxpbmUgYmVsb3cgd2UgZ2V0dGluZyB0aGUgZG9jdW1lbnQgcGFnZXNcclxuICAgICAgcmV0dXJuIGVsLmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA6IG51bGw7XHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgcmV0dXJuIGVsLmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKHBhZ2VOdW1iZXIgLSAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlT2Zmc2V0KHBhZ2VOdW1iZXI6IG51bWJlcikge1xyXG4gICAgY29uc3QgY291bnQgPSB0aGlzLl93aW5kb3dTZXJ2aWNlLmlzRmlyZWZveCgpID8gMSA6IHRoaXMuY291bnRQYWdlc09uV2lkdGgoKTtcclxuICAgIGNvbnN0IG1hcmdpbiA9IHRoaXMuX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCkgPyA0MCA6IDEwO1xyXG4gICAgbGV0IHBhZ2VzSGVpZ2h0ID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGFnZU51bWJlciAvIGNvdW50OyBpKyspIHtcclxuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0UGFnZShpKTtcclxuICAgICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gaXRlbSA/IGl0ZW0uY2xpZW50SGVpZ2h0IDogMDtcclxuICAgICAgcGFnZXNIZWlnaHQgKz0gY2xpZW50SGVpZ2h0ID4gMCA/IGNsaWVudEhlaWdodCAqIHRoaXMuZ2V0Wm9vbSgpICsgbWFyZ2luIDogMDtcclxuICAgIH1cclxuICAgIHJldHVybiBwYWdlc0hlaWdodDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY291bnRQYWdlc09uV2lkdGgoKSB7XHJcbiAgICBjb25zdCBwYWdlRWwgPSB0aGlzLmdldFBhZ2UoMSk7XHJcbiAgICBjb25zdCBvZmZzZXQgPSAxNTA7XHJcbiAgICBjb25zdCBjb3VudCA9IE1hdGguZmxvb3IoKHRoaXMuZ2V0V2lkdGgoKSAtIG9mZnNldCkgLyAocGFnZUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICogdGhpcy5nZXRab29tKCkpKTtcclxuICAgIHJldHVybiBjb3VudCA9PT0gMCA/IDEgOiBjb3VudDtcclxuICB9XHJcblxyXG4gIHJlZnJlc2goKSB7XHJcbiAgICBsZXQgcGFnZTtcclxuICAgIGxldCBjdXJyZW50UGFnZVNldCA9IGZhbHNlO1xyXG4gICAgY29uc3QgcGFnZUVsZW0gPSB0aGlzLmdldFBhZ2UodGhpcy5jdXJyZW50UGFnZSk7XHJcbiAgICBjb25zdCBjdXJyZW50UGFnZVJlY3QgPSB0aGlzLmN1cnJlbnRQYWdlICYmIHBhZ2VFbGVtID8gcGFnZUVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiBudWxsO1xyXG4gICAgZm9yIChwYWdlID0gMTsgcGFnZSA8IHRoaXMuZ2V0Q2hpbGRyZW4oKS5sZW5ndGggKyAxOyBwYWdlKyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0UGFnZShwYWdlKTtcclxuICAgICAgaWYgKHRoaXMuX3ZpZXdwb3J0U2VydmljZS5jaGVja0luVmlld3BvcnQoZWxlbWVudCwgdGhpcy56b29tKSkge1xyXG4gICAgICAgIGlmICghY3VycmVudFBhZ2VTZXQpIHtcclxuICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50UGFnZSB8fCAhcGFnZUVsZW0gfHwgKHRoaXMuY3VycmVudFBhZ2UgJiYgY3VycmVudFBhZ2VSZWN0ICYmIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICE9PSBjdXJyZW50UGFnZVJlY3QudG9wKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZTtcclxuICAgICAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gcGFnZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGN1cnJlbnRQYWdlU2V0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmxvYWRlZFBhZ2VzU2V0LmhhcyhwYWdlKSkge1xyXG4gICAgICAgICAgdGhpcy5fcGFnZVByZWxvYWRTZXJ2aWNlLmNoYW5nZUxhc3RQYWdlSW5WaWV3KHBhZ2UpO1xyXG4gICAgICAgICAgdGhpcy5sb2FkZWRQYWdlc1NldC5hZGQocGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlZnJlc2goKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy56b29tID0gdGhpcy5fem9vbVNlcnZpY2Uuem9vbSA/IHRoaXMuX3pvb21TZXJ2aWNlLnpvb20gOiB0aGlzLnpvb207XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBnZXRXaWR0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50UmVmID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIDogd2luZG93LmlubmVyV2lkdGg7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFpvb20oKSB7XHJcbiAgICByZXR1cm4gdGhpcy56b29tIC8gMTAwO1xyXG4gIH1cclxufVxyXG4iXX0=