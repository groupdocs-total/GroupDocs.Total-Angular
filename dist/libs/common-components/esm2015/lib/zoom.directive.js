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
        //const zoomStr = Math.round(zoom) + '%';
        /** @type {?} */
        const zoomInt = zoom === 100 ? 1 : zoom / 100;
        // this.mozTransform = 'scale(' + zoomInt + ', ' + zoomInt + ')';
        // this.mozTransformOrigin = 'top';
        // const transform = this._sanitizer.bypassSecurityTrustStyle('(' + zoomInt + ', ' + zoomInt + ')');
        // this.webkitTransform = transform;
        // this.msTransform = transform;
        // this.oTransform = transform;
        this.Transform = 'scale(' + zoomInt + ')';
        this.TransformOrigin = 'top';
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
    Transform: [{ type: HostBinding, args: ['style.transform',] }],
    TransformOrigin: [{ type: HostBinding, args: ['style.transform-origin',] }]
};
if (false) {
    /** @type {?} */
    ZoomDirective.prototype.zoomActive;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvem9vbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFLbEUsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBY3hCLFlBQW9CLFlBQXlCLEVBQVUsVUFBd0I7UUFBM0QsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFjO1FBWnRFLGVBQVUsR0FBRyxJQUFJLENBQUM7SUFhM0IsQ0FBQzs7OztJQUVELFdBQVc7SUFDWCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sU0FBUyxDQUFDLElBQUk7OztjQUVkLE9BQU8sR0FBRyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHO1FBQzdDLGlFQUFpRTtRQUNqRSxtQ0FBbUM7UUFDbkMsb0dBQW9HO1FBQ3BHLG9DQUFvQztRQUNwQyxnQ0FBZ0M7UUFDaEMsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTthQUNyQjs7OztZQUxPLFdBQVc7WUFDWCxZQUFZOzs7eUJBT2pCLEtBQUs7d0JBU0wsV0FBVyxTQUFDLGlCQUFpQjs4QkFDN0IsV0FBVyxTQUFDLHdCQUF3Qjs7OztJQVZyQyxtQ0FBMkI7O0lBUzNCLGtDQUFxRDs7SUFDckQsd0NBQStEOzs7OztJQUVuRCxxQ0FBaUM7Ozs7O0lBQUUsbUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2dkWm9vbV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBab29tRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBASW5wdXQoKSB6b29tQWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgLy8gQEhvc3RCaW5kaW5nKCdzdHlsZS56b29tJykgem9vbVN0cjogc3RyaW5nO1xyXG4gIC8vIEBIb3N0QmluZGluZygnc3R5bGUuem9vbScpIHpvb21JbnQ6IG51bWJlcjtcclxuICAvLyBASG9zdEJpbmRpbmcoJ3N0eWxlLi1tb3otdHJhbnNmb3JtJykgbW96VHJhbnNmb3JtOiBzdHJpbmc7XHJcbiAgLy8gQEhvc3RCaW5kaW5nKCdzdHlsZS4tbW96LXRyYW5zZm9ybS1vcmlnaW4nKSBtb3pUcmFuc2Zvcm1PcmlnaW46IHN0cmluZztcclxuICAvLyBASG9zdEJpbmRpbmcoJ3N0eWxlLi13ZWJraXQtdHJhbnNmb3JtJykgd2Via2l0VHJhbnNmb3JtOiBTYWZlU3R5bGU7XHJcbiAgLy8gQEhvc3RCaW5kaW5nKCdzdHlsZS4tbXMtdHJhbnNmb3JtJykgbXNUcmFuc2Zvcm06IFNhZmVTdHlsZTtcclxuICAvLyBASG9zdEJpbmRpbmcoJ3N0eWxlLi1vLXRyYW5zZm9ybScpIG9UcmFuc2Zvcm06IFNhZmVTdHlsZTtcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRyYW5zZm9ybScpIFRyYW5zZm9ybTogU2FmZVN0eWxlO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUudHJhbnNmb3JtLW9yaWdpbicpIFRyYW5zZm9ybU9yaWdpbjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsIHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdHlsZXModGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XHJcbiAgICB0aGlzLl96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgoem9vbSkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0eWxlcyh6b29tKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdHlsZXMoem9vbSkge1xyXG4gICAgLy9jb25zdCB6b29tU3RyID0gTWF0aC5yb3VuZCh6b29tKSArICclJztcclxuICAgIGNvbnN0IHpvb21JbnQgPSB6b29tID09PSAxMDAgPyAxIDogem9vbSAvIDEwMDtcclxuICAgIC8vIHRoaXMubW96VHJhbnNmb3JtID0gJ3NjYWxlKCcgKyB6b29tSW50ICsgJywgJyArIHpvb21JbnQgKyAnKSc7XHJcbiAgICAvLyB0aGlzLm1velRyYW5zZm9ybU9yaWdpbiA9ICd0b3AnO1xyXG4gICAgLy8gY29uc3QgdHJhbnNmb3JtID0gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgnKCcgKyB6b29tSW50ICsgJywgJyArIHpvb21JbnQgKyAnKScpO1xyXG4gICAgLy8gdGhpcy53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XHJcbiAgICAvLyB0aGlzLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtO1xyXG4gICAgLy8gdGhpcy5vVHJhbnNmb3JtID0gdHJhbnNmb3JtO1xyXG4gICAgdGhpcy5UcmFuc2Zvcm0gPSAnc2NhbGUoJyArIHpvb21JbnQgKyAnKSc7XHJcbiAgICB0aGlzLlRyYW5zZm9ybU9yaWdpbiA9ICd0b3AnO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdHlsZXModGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==