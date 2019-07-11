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
        if (!this.zoomActive) {
            return;
        }
        this.zoomStr = Math.round(zoom) + '%';
        this.zoomInt = zoom === 100 ? 1 : zoom / 100;
        this.mozTransform = 'scale(' + this.zoomInt + ', ' + this.zoomInt + ')';
        this.mozTransformOrigin = 'top';
        /** @type {?} */
        const transform = this._sanitizer.bypassSecurityTrustStyle('(' + this.zoomInt + ', ' + this.zoomInt + ')');
        this.webkitTransform = transform;
        this.msTransform = transform;
        this.oTransform = transform;
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
    zoomStr: [{ type: HostBinding, args: ['style.zoom',] }],
    zoomInt: [{ type: HostBinding, args: ['style.zoom',] }],
    mozTransform: [{ type: HostBinding, args: ['style.-moz-transform',] }],
    mozTransformOrigin: [{ type: HostBinding, args: ['style.-moz-transform-origin',] }],
    webkitTransform: [{ type: HostBinding, args: ['style.-webkit-transform',] }],
    msTransform: [{ type: HostBinding, args: ['style.-ms-transform',] }],
    oTransform: [{ type: HostBinding, args: ['style.-o-transform',] }]
};
if (false) {
    /** @type {?} */
    ZoomDirective.prototype.zoomActive;
    /** @type {?} */
    ZoomDirective.prototype.zoomStr;
    /** @type {?} */
    ZoomDirective.prototype.zoomInt;
    /** @type {?} */
    ZoomDirective.prototype.mozTransform;
    /** @type {?} */
    ZoomDirective.prototype.mozTransformOrigin;
    /** @type {?} */
    ZoomDirective.prototype.webkitTransform;
    /** @type {?} */
    ZoomDirective.prototype.msTransform;
    /** @type {?} */
    ZoomDirective.prototype.oTransform;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvem9vbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFLbEUsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBWXhCLFlBQW9CLFlBQXlCLEVBQVUsVUFBd0I7UUFBM0QsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFjO1FBVnRFLGVBQVUsR0FBRyxJQUFJLENBQUM7SUFXM0IsQ0FBQzs7OztJQUVELFdBQVc7SUFDWCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBRSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sU0FBUyxDQUFDLElBQUk7UUFDcEIsSUFBSSxDQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDckIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUM3QyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUN4RSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDOztjQUMxQixTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDMUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7O1lBL0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTthQUNyQjs7OztZQUxPLFdBQVc7WUFDWCxZQUFZOzs7eUJBT2pCLEtBQUs7c0JBRUwsV0FBVyxTQUFDLFlBQVk7c0JBQ3hCLFdBQVcsU0FBQyxZQUFZOzJCQUN4QixXQUFXLFNBQUMsc0JBQXNCO2lDQUNsQyxXQUFXLFNBQUMsNkJBQTZCOzhCQUN6QyxXQUFXLFNBQUMseUJBQXlCOzBCQUNyQyxXQUFXLFNBQUMscUJBQXFCO3lCQUNqQyxXQUFXLFNBQUMsb0JBQW9COzs7O0lBUmpDLG1DQUEyQjs7SUFFM0IsZ0NBQTJDOztJQUMzQyxnQ0FBMkM7O0lBQzNDLHFDQUEwRDs7SUFDMUQsMkNBQXVFOztJQUN2RSx3Q0FBbUU7O0lBQ25FLG9DQUEyRDs7SUFDM0QsbUNBQXlEOzs7OztJQUU3QyxxQ0FBaUM7Ozs7O0lBQUUsbUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtab29tU2VydmljZX0gZnJvbSBcIi4vem9vbS5zZXJ2aWNlXCI7XG5pbXBvcnQge0RvbVNhbml0aXplciwgU2FmZVN0eWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2Rab29tXSdcbn0pXG5leHBvcnQgY2xhc3MgWm9vbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcblxuICBASW5wdXQoKSB6b29tQWN0aXZlID0gdHJ1ZTtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnpvb20nKSB6b29tU3RyOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuem9vbScpIHpvb21JbnQ6IG51bWJlcjtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS4tbW96LXRyYW5zZm9ybScpIG1velRyYW5zZm9ybTogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLi1tb3otdHJhbnNmb3JtLW9yaWdpbicpIG1velRyYW5zZm9ybU9yaWdpbjogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLi13ZWJraXQtdHJhbnNmb3JtJykgd2Via2l0VHJhbnNmb3JtOiBTYWZlU3R5bGU7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuLW1zLXRyYW5zZm9ybScpIG1zVHJhbnNmb3JtOiBTYWZlU3R5bGU7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuLW8tdHJhbnNmb3JtJykgb1RyYW5zZm9ybTogU2FmZVN0eWxlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSwgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCEgdGhpcy56b29tQWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3R5bGVzKHRoaXMuX3pvb21TZXJ2aWNlLnpvb20pO1xuICAgIHRoaXMuX3pvb21TZXJ2aWNlLnpvb21DaGFuZ2Uuc3Vic2NyaWJlKCh6b29tKSA9PiB7XG4gICAgICB0aGlzLnNldFN0eWxlcyh6b29tKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U3R5bGVzKHpvb20pIHtcbiAgICBpZiAoISB0aGlzLnpvb21BY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy56b29tU3RyID0gTWF0aC5yb3VuZCh6b29tKSArICclJztcbiAgICB0aGlzLnpvb21JbnQgPSB6b29tID09PSAxMDAgPyAxIDogem9vbSAvIDEwMDtcbiAgICB0aGlzLm1velRyYW5zZm9ybSA9ICdzY2FsZSgnICsgdGhpcy56b29tSW50ICsgJywgJyArIHRoaXMuem9vbUludCArICcpJztcbiAgICB0aGlzLm1velRyYW5zZm9ybU9yaWdpbiA9ICd0b3AnO1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoJygnICsgdGhpcy56b29tSW50ICsgJywgJyArIHRoaXMuem9vbUludCArICcpJyk7XG4gICAgdGhpcy53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgdGhpcy5tc1RyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB0aGlzLm9UcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRTdHlsZXModGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XG4gIH1cbn1cbiJdfQ==