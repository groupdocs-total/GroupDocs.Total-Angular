/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input, ElementRef } from '@angular/core';
import { ZoomService } from "./zoom.service";
import { FileUtil } from "./file.service";
import { WindowService } from './window.service';
var ZoomDirective = /** @class */ (function () {
    function ZoomDirective(_zoomService, _windowService, el) {
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this.zoomActive = true;
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
        this.resizePages(this._zoomService.zoom);
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
        if (this._windowService.isEdge()) {
            this.zoomInt = zoomInt;
        }
        else {
            this.zoomInt = null;
        }
        if (!this._windowService.isEdge()) {
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
        // Images and Excel-related files receiving dimensions in px from server
        this.minWidth = maxWidth + FileUtil.find(this.file.guid, false).unit;
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
        { type: WindowService },
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
    /**
     * @type {?}
     * @private
     */
    ZoomDirective.prototype._windowService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvem9vbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQXFCLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRDtJQWVFLHVCQUFvQixZQUF5QixFQUFVLGNBQTZCLEVBQUUsRUFBYztRQUFoRixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBVjNFLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFXekIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsbUNBQVc7OztJQUFYO0lBQ0EsQ0FBQzs7OztJQUVELG1DQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELGdDQUFROzs7SUFBUjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDckIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQUk7WUFDMUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8saUNBQVM7Ozs7O0lBQWpCLFVBQWtCLElBQUk7UUFDcEIsSUFBSSxDQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDckIsT0FBTztTQUNSOztZQUVLLE9BQU8sR0FBRyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHO1FBRTdDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4QjthQUNJO1lBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDckI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQzFDLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO1NBQ25DO2FBQ0k7WUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztTQUMzQjs7WUFFRyxRQUFRLEdBQUcsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxJQUFJO1lBQzFCO2dCQUNFLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLEVBQUM7b0JBQ3hCLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUN2QjthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCx3RUFBd0U7UUFDeEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdkUsQ0FBQzs7Ozs7O0lBRU8sc0NBQWM7Ozs7O0lBQXRCLFVBQXVCLEdBQUc7UUFDeEIsT0FBTyxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRU8sbUNBQVc7Ozs7O0lBQW5CLFVBQW9CLElBQUk7O1lBQ2hCLE9BQU8sR0FBRyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHOztZQUV2QyxhQUFhLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVc7O1lBQy9ELFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUM1RSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsYUFBYSxHQUFDLE9BQU8sR0FBRyxXQUFXLEdBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFFRCx1Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Z0JBekZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtpQkFDckI7Ozs7Z0JBTk8sV0FBVztnQkFFVixhQUFhO2dCQUhtRCxVQUFVOzs7NkJBVWhGLEtBQUs7dUJBQ0wsS0FBSzswQkFFTCxXQUFXLFNBQUMsWUFBWTs0QkFDeEIsV0FBVyxTQUFDLGlCQUFpQjtrQ0FDN0IsV0FBVyxTQUFDLHdCQUF3Qjt3QkFDcEMsV0FBVyxTQUFDLGFBQWE7MkJBQ3pCLFdBQVcsU0FBQyxpQkFBaUI7O0lBOEVoQyxvQkFBQztDQUFBLEFBMUZELElBMEZDO1NBdkZZLGFBQWE7OztJQUV4QixtQ0FBMkI7O0lBQzNCLDZCQUFjOztJQUVkLGdDQUEyQzs7SUFDM0Msa0NBQWtEOztJQUNsRCx3Q0FBK0Q7O0lBQy9ELDhCQUEwQzs7SUFDMUMsaUNBQWlEOztJQUNqRCwyQkFBb0I7Ozs7O0lBRVIscUNBQWlDOzs7OztJQUFFLHVDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBFbGVtZW50UmVmLCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtab29tU2VydmljZX0gZnJvbSBcIi4vem9vbS5zZXJ2aWNlXCI7XG5pbXBvcnQge0ZpbGVVdGlsfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tICcuL3dpbmRvdy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkWm9vbV0nXG59KVxuZXhwb3J0IGNsYXNzIFpvb21EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSB6b29tQWN0aXZlID0gdHJ1ZTtcbiAgQElucHV0KCkgZmlsZTtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnpvb20nKSB6b29tSW50OiBudW1iZXI7XG4gIEBIb3N0QmluZGluZygnc3R5bGUudHJhbnNmb3JtJykgdHJhbnNmb3JtOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnc3R5bGUudHJhbnNmb3JtLW9yaWdpbicpIHRyYW5zZm9ybU9yaWdpbjogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoJykgd2lkdGg6IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5taW4td2lkdGgnKSBtaW5XaWR0aDogc3RyaW5nO1xuICBlbDogRWxlbWVudFJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSwgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSwgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0U3R5bGVzKHRoaXMuX3pvb21TZXJ2aWNlLnpvb20pO1xuICAgIHRoaXMucmVzaXplUGFnZXModGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoISB0aGlzLnpvb21BY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0eWxlcyh0aGlzLl96b29tU2VydmljZS56b29tKTtcbiAgICB0aGlzLl96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgoem9vbSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdHlsZXMoem9vbSk7XG4gICAgICB0aGlzLnJlc2l6ZVBhZ2VzKHpvb20pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdHlsZXMoem9vbSkge1xuICAgIGlmICghIHRoaXMuem9vbUFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHpvb21JbnQgPSB6b29tID09PSAxMDAgPyAxIDogem9vbSAvIDEwMDtcbiAgICBcbiAgICBpZiAodGhpcy5fd2luZG93U2VydmljZS5pc0VkZ2UoKSkge1xuICAgICAgdGhpcy56b29tSW50ID0gem9vbUludDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnpvb21JbnQgPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICBpZiAoIXRoaXMuX3dpbmRvd1NlcnZpY2UuaXNFZGdlKCkpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gJ3NjYWxlKCcgKyB6b29tSW50ICsgJyknO1xuICAgICAgdGhpcy50cmFuc2Zvcm1PcmlnaW4gPSAndG9wIGxlZnQnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gXCJcIjtcbiAgICAgIHRoaXMudHJhbnNmb3JtT3JpZ2luID0gXCJcIjtcbiAgICB9XG5cbiAgICBsZXQgbWF4V2lkdGggPSAwO1xuICAgIHRoaXMuZmlsZS5wYWdlcy5mb3JFYWNoKHBhZ2UgPT4ge1xuICAgICAge1xuICAgICAgICBpZiAocGFnZS53aWR0aCA+IG1heFdpZHRoKXtcbiAgICAgICAgICBtYXhXaWR0aCA9IHBhZ2Uud2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEltYWdlcyBhbmQgRXhjZWwtcmVsYXRlZCBmaWxlcyByZWNlaXZpbmcgZGltZW5zaW9ucyBpbiBweCBmcm9tIHNlcnZlclxuICAgIHRoaXMubWluV2lkdGggPSBtYXhXaWR0aCArIEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS51bml0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTY3JvbGxXaWR0aChlbG0pe1xuICAgIHJldHVybiBlbG0ub2Zmc2V0V2lkdGggLSBlbG0uY2xpZW50V2lkdGg7XG4gIH1cblxuICBwcml2YXRlIHJlc2l6ZVBhZ2VzKHpvb20pe1xuICAgIGNvbnN0IHpvb21JbnQgPSB6b29tID09PSAxMDAgPyAxIDogem9vbSAvIDEwMDtcblxuICAgIGNvbnN0IHZpZXdQb3J0V2lkdGggPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBzY3JvbGxXaWR0aCA9IHRoaXMuZ2V0U2Nyb2xsV2lkdGgodGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgIHRoaXMud2lkdGggPSAodmlld1BvcnRXaWR0aC96b29tSW50IC0gc2Nyb2xsV2lkdGgvem9vbUludCkgKyAncHgnO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0U3R5bGVzKHRoaXMuX3pvb21TZXJ2aWNlLnpvb20pO1xuICB9XG59XG4iXX0=