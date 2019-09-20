/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input } from '@angular/core';
import { ZoomService } from "./zoom.service";
import { DomSanitizer } from "@angular/platform-browser";
var ZoomDirective = /** @class */ (function () {
    function ZoomDirective(_zoomService, _sanitizer) {
        this._zoomService = _zoomService;
        this._sanitizer = _sanitizer;
        this.zoomActive = true;
        this.isEdge = true;
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
        /** @type {?} */
        var zoomInt = zoom === 100 ? 1 : zoom / 100;
        if (this.isEdge) {
            this.zoomInt = zoomInt;
        }
        else {
            this.Transform = 'scale(' + zoomInt + ')';
            this.TransformOrigin = 'top';
        }
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
        { type: DomSanitizer }
    ]; };
    ZoomDirective.propDecorators = {
        zoomActive: [{ type: Input }],
        isEdge: [{ type: Input }],
        zoomInt: [{ type: HostBinding, args: ['style.zoom',] }],
        Transform: [{ type: HostBinding, args: ['style.transform',] }],
        TransformOrigin: [{ type: HostBinding, args: ['style.transform-origin',] }]
    };
    return ZoomDirective;
}());
export { ZoomDirective };
if (false) {
    /** @type {?} */
    ZoomDirective.prototype.zoomActive;
    /** @type {?} */
    ZoomDirective.prototype.isEdge;
    /** @type {?} */
    ZoomDirective.prototype.zoomInt;
    /** @type {?} */
    ZoomDirective.prototype.Transform;
    /** @type {?} */
    ZoomDirective.prototype.TransformOrigin;
    /**
     * @type {?}
     * @private
     */
    ZoomDirective.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    ZoomDirective.prototype._sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvem9vbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFFbEU7SUFXRSx1QkFBb0IsWUFBeUIsRUFBVSxVQUF3QjtRQUEzRCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQWM7UUFOdEUsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixXQUFNLEdBQUcsSUFBSSxDQUFDO0lBTXZCLENBQUM7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7SUFDQSxDQUFDOzs7O0lBRUQsZ0NBQVE7OztJQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsSUFBSTtZQUMxQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8saUNBQVM7Ozs7O0lBQWpCLFVBQWtCLElBQUk7O1lBQ2QsT0FBTyxHQUFHLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUc7UUFFN0MsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7YUFDSTtZQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7U0FDNUI7SUFDTCxDQUFDOzs7O0lBRUQsdUNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7O2dCQXpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCOzs7O2dCQUxPLFdBQVc7Z0JBQ1gsWUFBWTs7OzZCQU9qQixLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsV0FBVyxTQUFDLFlBQVk7NEJBQ3hCLFdBQVcsU0FBQyxpQkFBaUI7a0NBQzdCLFdBQVcsU0FBQyx3QkFBd0I7O0lBaUN2QyxvQkFBQztDQUFBLEFBMUNELElBMENDO1NBdkNZLGFBQWE7OztJQUV4QixtQ0FBMkI7O0lBQzNCLCtCQUF1Qjs7SUFDdkIsZ0NBQTJDOztJQUMzQyxrQ0FBcUQ7O0lBQ3JELHdDQUErRDs7Ozs7SUFFbkQscUNBQWlDOzs7OztJQUFFLG1DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtab29tU2VydmljZX0gZnJvbSBcIi4vem9vbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RG9tU2FuaXRpemVyLCBTYWZlU3R5bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tnZFpvb21dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgWm9vbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQElucHV0KCkgem9vbUFjdGl2ZSA9IHRydWU7XHJcbiAgQElucHV0KCkgaXNFZGdlID0gdHJ1ZTtcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnpvb20nKSB6b29tSW50OiBudW1iZXI7XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS50cmFuc2Zvcm0nKSBUcmFuc2Zvcm06IFNhZmVTdHlsZTtcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRyYW5zZm9ybS1vcmlnaW4nKSBUcmFuc2Zvcm1PcmlnaW46IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLCBwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy56b29tQWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3R5bGVzKHRoaXMuX3pvb21TZXJ2aWNlLnpvb20pO1xyXG4gICAgdGhpcy5fem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHpvb20pID0+IHtcclxuICAgICAgdGhpcy5zZXRTdHlsZXMoem9vbSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U3R5bGVzKHpvb20pIHtcclxuICAgIGNvbnN0IHpvb21JbnQgPSB6b29tID09PSAxMDAgPyAxIDogem9vbSAvIDEwMDtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuaXNFZGdlKSB7XHJcbiAgICAgIHRoaXMuem9vbUludCA9IHpvb21JbnQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5UcmFuc2Zvcm0gPSAnc2NhbGUoJyArIHpvb21JbnQgKyAnKSc7XHJcbiAgICAgIHRoaXMuVHJhbnNmb3JtT3JpZ2luID0gJ3RvcCc7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3R5bGVzKHRoaXMuX3pvb21TZXJ2aWNlLnpvb20pO1xyXG4gIH1cclxufVxyXG4iXX0=