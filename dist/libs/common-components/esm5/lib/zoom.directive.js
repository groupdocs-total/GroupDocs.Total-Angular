/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input, ElementRef } from '@angular/core';
import { ZoomService } from "./zoom.service";
var ZoomDirective = /** @class */ (function () {
    function ZoomDirective(_zoomService, el) {
        this._zoomService = _zoomService;
        this.zoomActive = true;
        this.ifEdge = window.navigator.userAgent.toLowerCase().indexOf('edge') > -1;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ZoomDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ZoomDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setStyles(this._zoomService.zoom);
    };
    /**
     * @return {?}
     */
    ZoomDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.zoomActive) {
            return;
        }
        this.setStyles(this._zoomService.zoom);
        this._zoomService.zoomChange.subscribe((/**
         * @param {?} zoom
         * @return {?}
         */
        function (zoom) {
            _this.setStyles(zoom);
            _this.resizePages(zoom);
        }));
    };
    /**
     * @private
     * @param {?} zoom
     * @return {?}
     */
    ZoomDirective.prototype.setStyles = /**
     * @private
     * @param {?} zoom
     * @return {?}
     */
    function (zoom) {
        if (!this.zoomActive) {
            return;
        }
        /** @type {?} */
        var zoomInt = zoom === 100 ? 1 : zoom / 100;
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
        var maxWidth = 0;
        this.file.pages.forEach((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            {
                if (page.width > maxWidth) {
                    maxWidth = page.width;
                }
            }
        }));
        this.minWidth = maxWidth + 'pt';
    };
    /**
     * @private
     * @param {?} elm
     * @return {?}
     */
    ZoomDirective.prototype.getScrollWidth = /**
     * @private
     * @param {?} elm
     * @return {?}
     */
    function (elm) {
        return elm.offsetWidth - elm.clientWidth;
    };
    /**
     * @private
     * @param {?} zoom
     * @return {?}
     */
    ZoomDirective.prototype.resizePages = /**
     * @private
     * @param {?} zoom
     * @return {?}
     */
    function (zoom) {
        /** @type {?} */
        var zoomInt = zoom === 100 ? 1 : zoom / 100;
        /** @type {?} */
        var viewPortWidth = this.el.nativeElement.parentElement.offsetWidth;
        /** @type {?} */
        var scrollWidth = this.getScrollWidth(this.el.nativeElement.parentElement);
        this.width = (viewPortWidth / zoomInt - scrollWidth / zoomInt) + 'px';
    };
    /**
     * @return {?}
     */
    ZoomDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.setStyles(this._zoomService.zoom);
    };
    ZoomDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdZoom]'
                },] }
    ];
    /** @nocollapse */
    ZoomDirective.ctorParameters = function () { return [
        { type: ZoomService },
        { type: ElementRef }
    ]; };
    ZoomDirective.propDecorators = {
        zoomActive: [{ type: Input }],
        file: [{ type: Input }],
        zoomInt: [{ type: HostBinding, args: ['style.zoom',] }],
        transform: [{ type: HostBinding, args: ['style.transform',] }],
        transformOrigin: [{ type: HostBinding, args: ['style.transform-origin',] }],
        width: [{ type: HostBinding, args: ['style.width',] }],
        minWidth: [{ type: HostBinding, args: ['style.min-width',] }]
    };
    return ZoomDirective;
}());
export { ZoomDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvem9vbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQXFCLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFpQkUsdUJBQW9CLFlBQXlCLEVBQUUsRUFBYztRQUF6QyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQVpwQyxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBRzNCLFdBQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFVckUsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsbUNBQVc7OztJQUFYO0lBQ0EsQ0FBQzs7OztJQUVELG1DQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsZ0NBQVE7OztJQUFSO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsSUFBSTtZQUMxQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLEtBQUksQ0FB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ZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBFbGVtZW50UmVmLCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2dkWm9vbV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBab29tRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIHpvb21BY3RpdmUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGZpbGU7XHJcblxyXG4gIGlmRWRnZSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZWRnZScpID4gLTE7XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuem9vbScpIHpvb21JbnQ6IG51bWJlcjtcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRyYW5zZm9ybScpIHRyYW5zZm9ybTogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUudHJhbnNmb3JtLW9yaWdpbicpIHRyYW5zZm9ybU9yaWdpbjogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKSB3aWR0aDogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWluLXdpZHRoJykgbWluV2lkdGg6IHN0cmluZztcclxuICBlbDogRWxlbWVudFJlZjxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsIGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmVsID0gZWw7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdHlsZXModGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghIHRoaXMuem9vbUFjdGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdHlsZXModGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XHJcbiAgICB0aGlzLl96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgoem9vbSkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0eWxlcyh6b29tKTtcclxuICAgICAgdGhpcy5yZXNpemVQYWdlcyh6b29tKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdHlsZXMoem9vbSkge1xyXG4gICAgaWYgKCEgdGhpcy56b29tQWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB6b29tSW50ID0gem9vbSA9PT0gMTAwID8gMSA6IHpvb20gLyAxMDA7XHJcbiAgICBcclxuICAgIGlmICh0aGlzLmlmRWRnZSkge1xyXG4gICAgICB0aGlzLnpvb21JbnQgPSB6b29tSW50O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuem9vbUludCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICghdGhpcy5pZkVkZ2UpIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSAnc2NhbGUoJyArIHpvb21JbnQgKyAnKSc7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtT3JpZ2luID0gJ3RvcCBsZWZ0JztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IFwiXCI7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtT3JpZ2luID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbWF4V2lkdGggPSAwO1xyXG4gICAgdGhpcy5maWxlLnBhZ2VzLmZvckVhY2gocGFnZSA9PiB7XHJcbiAgICAgIHtcclxuICAgICAgICBpZiAocGFnZS53aWR0aCA+IG1heFdpZHRoKXtcclxuICAgICAgICAgIG1heFdpZHRoID0gcGFnZS53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5taW5XaWR0aCA9IG1heFdpZHRoICsgJ3B0JztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U2Nyb2xsV2lkdGgoZWxtKXtcclxuICAgIHJldHVybiBlbG0ub2Zmc2V0V2lkdGggLSBlbG0uY2xpZW50V2lkdGg7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2l6ZVBhZ2VzKHpvb20pe1xyXG4gICAgY29uc3Qgem9vbUludCA9IHpvb20gPT09IDEwMCA/IDEgOiB6b29tIC8gMTAwO1xyXG5cclxuICAgIGNvbnN0IHZpZXdQb3J0V2lkdGggPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gdGhpcy5nZXRTY3JvbGxXaWR0aCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCk7XHJcbiAgICB0aGlzLndpZHRoID0gKHZpZXdQb3J0V2lkdGgvem9vbUludCAtIHNjcm9sbFdpZHRoL3pvb21JbnQpICsgJ3B4JztcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3R5bGVzKHRoaXMuX3pvb21TZXJ2aWNlLnpvb20pO1xyXG4gIH1cclxufVxyXG4iXX0=