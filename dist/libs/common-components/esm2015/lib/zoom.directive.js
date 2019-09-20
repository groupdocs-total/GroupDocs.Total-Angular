/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input } from '@angular/core';
import { ZoomService } from "./zoom.service";
import { DomSanitizer } from "@angular/platform-browser";
export class ZoomDirective {
    /**
     * @param {?} _zoomService
     * @param {?} _sanitizer
     */
    constructor(_zoomService, _sanitizer) {
        this._zoomService = _zoomService;
        this._sanitizer = _sanitizer;
        this.zoomActive = true;
        this.isEdge = true;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
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
        }));
    }
    /**
     * @private
     * @param {?} zoom
     * @return {?}
     */
    setStyles(zoom) {
        /** @type {?} */
        const zoomInt = zoom === 100 ? 1 : zoom / 100;
        if (this.isEdge) {
            this.zoomInt = zoomInt;
        }
        else {
            this.Transform = 'scale(' + zoomInt + ')';
            this.TransformOrigin = 'top';
        }
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
    { type: DomSanitizer }
];
ZoomDirective.propDecorators = {
    zoomActive: [{ type: Input }],
    isEdge: [{ type: Input }],
    zoomInt: [{ type: HostBinding, args: ['style.zoom',] }],
    Transform: [{ type: HostBinding, args: ['style.transform',] }],
    TransformOrigin: [{ type: HostBinding, args: ['style.transform-origin',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvem9vbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFLbEUsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBUXhCLFlBQW9CLFlBQXlCLEVBQVUsVUFBd0I7UUFBM0QsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFjO1FBTnRFLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsV0FBTSxHQUFHLElBQUksQ0FBQztJQU12QixDQUFDOzs7O0lBRUQsV0FBVztJQUNYLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxTQUFTLENBQUMsSUFBSTs7Y0FDZCxPQUFPLEdBQUcsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRztRQUU3QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4QjthQUNJO1lBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNMLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OztZQXpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7YUFDckI7Ozs7WUFMTyxXQUFXO1lBQ1gsWUFBWTs7O3lCQU9qQixLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsV0FBVyxTQUFDLFlBQVk7d0JBQ3hCLFdBQVcsU0FBQyxpQkFBaUI7OEJBQzdCLFdBQVcsU0FBQyx3QkFBd0I7Ozs7SUFKckMsbUNBQTJCOztJQUMzQiwrQkFBdUI7O0lBQ3ZCLGdDQUEyQzs7SUFDM0Msa0NBQXFEOztJQUNyRCx3Q0FBK0Q7Ozs7O0lBRW5ELHFDQUFpQzs7Ozs7SUFBRSxtQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xyXG5pbXBvcnQge0RvbVNhbml0aXplciwgU2FmZVN0eWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZ2Rab29tXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFpvb21EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHpvb21BY3RpdmUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGlzRWRnZSA9IHRydWU7XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS56b29tJykgem9vbUludDogbnVtYmVyO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUudHJhbnNmb3JtJykgVHJhbnNmb3JtOiBTYWZlU3R5bGU7XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS50cmFuc2Zvcm0tb3JpZ2luJykgVHJhbnNmb3JtT3JpZ2luOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSwgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuem9vbUFjdGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0eWxlcyh0aGlzLl96b29tU2VydmljZS56b29tKTtcclxuICAgIHRoaXMuX3pvb21TZXJ2aWNlLnpvb21DaGFuZ2Uuc3Vic2NyaWJlKCh6b29tKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3R5bGVzKHpvb20pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFN0eWxlcyh6b29tKSB7XHJcbiAgICBjb25zdCB6b29tSW50ID0gem9vbSA9PT0gMTAwID8gMSA6IHpvb20gLyAxMDA7XHJcbiAgICBcclxuICAgIGlmICh0aGlzLmlzRWRnZSkge1xyXG4gICAgICB0aGlzLnpvb21JbnQgPSB6b29tSW50O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuVHJhbnNmb3JtID0gJ3NjYWxlKCcgKyB6b29tSW50ICsgJyknO1xyXG4gICAgICB0aGlzLlRyYW5zZm9ybU9yaWdpbiA9ICd0b3AnO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0eWxlcyh0aGlzLl96b29tU2VydmljZS56b29tKTtcclxuICB9XHJcbn1cclxuIl19