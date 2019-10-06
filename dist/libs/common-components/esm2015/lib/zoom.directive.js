/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input, ElementRef } from '@angular/core';
import { ZoomService } from "./zoom.service";
export class ZoomDirective {
    /**
     * @param {?} _zoomService
     * @param {?} el
     */
    constructor(_zoomService, el) {
        this._zoomService = _zoomService;
        this.zoomActive = true;
        this.ifEdge = window.navigator.userAgent.toLowerCase().indexOf('edge') > -1;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setStyles(this._zoomService.zoom);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.zoomActive) {
            return;
        }
        this.setStyles(this._zoomService.zoom);
        this._zoomService.zoomChange.subscribe((/**
         * @param {?} zoom
         * @return {?}
         */
        (zoom) => {
            this.setStyles(zoom);
            this.resizePages(zoom);
        }));
    }
    /**
     * @private
     * @param {?} zoom
     * @return {?}
     */
    setStyles(zoom) {
        if (!this.zoomActive) {
            return;
        }
        /** @type {?} */
        const zoomInt = zoom === 100 ? 1 : zoom / 100;
        if (this.ifEdge) {
            this.zoomInt = zoomInt;
        }
        else {
            this.zoomInt = null;
        }
        if (!this.ifEdge) {
            this.transform = 'scale(' + zoomInt + ')';
            this.transformOrigin = 'top left';
        }
        else {
            this.transform = "";
            this.transformOrigin = "";
        }
        /** @type {?} */
        let maxWidth = 0;
        this.file.pages.forEach((/**
         * @param {?} page
         * @return {?}
         */
        page => {
            {
                if (page.width > maxWidth) {
                    maxWidth = page.width;
                }
            }
        }));
        this.minWidth = maxWidth + 'pt';
    }
    /**
     * @private
     * @param {?} elm
     * @return {?}
     */
    getScrollWidth(elm) {
        return elm.offsetWidth - elm.clientWidth;
    }
    /**
     * @private
     * @param {?} zoom
     * @return {?}
     */
    resizePages(zoom) {
        /** @type {?} */
        const zoomInt = zoom === 100 ? 1 : zoom / 100;
        /** @type {?} */
        const viewPortWidth = this.el.nativeElement.parentElement.offsetWidth;
        /** @type {?} */
        const scrollWidth = this.getScrollWidth(this.el.nativeElement.parentElement);
        this.width = (viewPortWidth / zoomInt - scrollWidth / zoomInt) + 'px';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setStyles(this._zoomService.zoom);
    }
}
ZoomDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gdZoom]'
            },] }
];
/** @nocollapse */
ZoomDirective.ctorParameters = () => [
    { type: ZoomService },
    { type: ElementRef }
];
ZoomDirective.propDecorators = {
    zoomActive: [{ type: Input }],
    file: [{ type: Input }],
    zoomInt: [{ type: HostBinding, args: ['style.zoom',] }],
    transform: [{ type: HostBinding, args: ['style.transform',] }],
    transformOrigin: [{ type: HostBinding, args: ['style.transform-origin',] }],
    width: [{ type: HostBinding, args: ['style.width',] }],
    minWidth: [{ type: HostBinding, args: ['style.min-width',] }]
};
if (false) {
    /** @type {?} */
    ZoomDirective.prototype.zoomActive;
    /** @type {?} */
    ZoomDirective.prototype.file;
    /** @type {?} */
    ZoomDirective.prototype.ifEdge;
    /** @type {?} */
    ZoomDirective.prototype.zoomInt;
    /** @type {?} */
    ZoomDirective.prototype.transform;
    /** @type {?} */
    ZoomDirective.prototype.transformOrigin;
    /** @type {?} */
    ZoomDirective.prototype.width;
    /** @type {?} */
    ZoomDirective.prototype.minWidth;
    /** @type {?} */
    ZoomDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ZoomDirective.prototype._zoomService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvem9vbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQXFCLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFLM0MsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBY3hCLFlBQW9CLFlBQXlCLEVBQUUsRUFBYztRQUF6QyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQVpwQyxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBRzNCLFdBQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFVckUsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsV0FBVztJQUNYLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDckIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLFNBQVMsQ0FBQyxJQUFJO1FBQ3BCLElBQUksQ0FBRSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JCLE9BQU87U0FDUjs7Y0FFSyxPQUFPLEdBQUcsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRztRQUU3QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4QjthQUNJO1lBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDckI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQzFDLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO1NBQ25DO2FBQ0k7WUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztTQUMzQjs7WUFFRyxRQUFRLEdBQUcsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0I7Z0JBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsRUFBQztvQkFDeEIsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQ3ZCO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsR0FBRztRQUN4QixPQUFPLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFTyxXQUFXLENBQUMsSUFBSTs7Y0FDaEIsT0FBTyxHQUFHLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUc7O2NBRXZDLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsV0FBVzs7Y0FDL0QsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQzVFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxhQUFhLEdBQUMsT0FBTyxHQUFHLFdBQVcsR0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDcEUsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7O1lBeEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTthQUNyQjs7OztZQUpPLFdBQVc7WUFEc0QsVUFBVTs7O3lCQVFoRixLQUFLO21CQUNMLEtBQUs7c0JBSUwsV0FBVyxTQUFDLFlBQVk7d0JBQ3hCLFdBQVcsU0FBQyxpQkFBaUI7OEJBQzdCLFdBQVcsU0FBQyx3QkFBd0I7b0JBQ3BDLFdBQVcsU0FBQyxhQUFhO3VCQUN6QixXQUFXLFNBQUMsaUJBQWlCOzs7O0lBVDlCLG1DQUEyQjs7SUFDM0IsNkJBQWM7O0lBRWQsK0JBQXVFOztJQUV2RSxnQ0FBMkM7O0lBQzNDLGtDQUFrRDs7SUFDbEQsd0NBQStEOztJQUMvRCw4QkFBMEM7O0lBQzFDLGlDQUFpRDs7SUFDakQsMkJBQW9COzs7OztJQUVSLHFDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBFbGVtZW50UmVmLCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2dkWm9vbV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBab29tRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIHpvb21BY3RpdmUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGZpbGU7XHJcblxyXG4gIGlmRWRnZSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZWRnZScpID4gLTE7XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuem9vbScpIHpvb21JbnQ6IG51bWJlcjtcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRyYW5zZm9ybScpIHRyYW5zZm9ybTogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUudHJhbnNmb3JtLW9yaWdpbicpIHRyYW5zZm9ybU9yaWdpbjogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKSB3aWR0aDogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWluLXdpZHRoJykgbWluV2lkdGg6IHN0cmluZztcclxuICBlbDogRWxlbWVudFJlZjxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsIGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmVsID0gZWw7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdHlsZXModGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghIHRoaXMuem9vbUFjdGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdHlsZXModGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XHJcbiAgICB0aGlzLl96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgoem9vbSkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0eWxlcyh6b29tKTtcclxuICAgICAgdGhpcy5yZXNpemVQYWdlcyh6b29tKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdHlsZXMoem9vbSkge1xyXG4gICAgaWYgKCEgdGhpcy56b29tQWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB6b29tSW50ID0gem9vbSA9PT0gMTAwID8gMSA6IHpvb20gLyAxMDA7XHJcbiAgICBcclxuICAgIGlmICh0aGlzLmlmRWRnZSkge1xyXG4gICAgICB0aGlzLnpvb21JbnQgPSB6b29tSW50O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuem9vbUludCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICghdGhpcy5pZkVkZ2UpIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSAnc2NhbGUoJyArIHpvb21JbnQgKyAnKSc7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtT3JpZ2luID0gJ3RvcCBsZWZ0JztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IFwiXCI7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtT3JpZ2luID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbWF4V2lkdGggPSAwO1xyXG4gICAgdGhpcy5maWxlLnBhZ2VzLmZvckVhY2gocGFnZSA9PiB7XHJcbiAgICAgIHtcclxuICAgICAgICBpZiAocGFnZS53aWR0aCA+IG1heFdpZHRoKXtcclxuICAgICAgICAgIG1heFdpZHRoID0gcGFnZS53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5taW5XaWR0aCA9IG1heFdpZHRoICsgJ3B0JztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U2Nyb2xsV2lkdGgoZWxtKXtcclxuICAgIHJldHVybiBlbG0ub2Zmc2V0V2lkdGggLSBlbG0uY2xpZW50V2lkdGg7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2l6ZVBhZ2VzKHpvb20pe1xyXG4gICAgY29uc3Qgem9vbUludCA9IHpvb20gPT09IDEwMCA/IDEgOiB6b29tIC8gMTAwO1xyXG5cclxuICAgIGNvbnN0IHZpZXdQb3J0V2lkdGggPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gdGhpcy5nZXRTY3JvbGxXaWR0aCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCk7XHJcbiAgICB0aGlzLndpZHRoID0gKHZpZXdQb3J0V2lkdGgvem9vbUludCAtIHNjcm9sbFdpZHRoL3pvb21JbnQpICsgJ3B4JztcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3R5bGVzKHRoaXMuX3pvb21TZXJ2aWNlLnpvb20pO1xyXG4gIH1cclxufVxyXG4iXX0=