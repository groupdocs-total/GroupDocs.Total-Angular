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
        this.ifEdge = true;
        this.ifFirefox = true;
        this.ifPdf = true;
        this.isMobileFlex = false;
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
        /** @type {?} */
        const zoomInt = zoom === 100 ? 1 : zoom / 100;
        if (this.ifEdge || this.ifPdf) {
            this.zoomInt = zoomInt;
        }
        this.mozTransform = 'scale(' + zoomInt + ', ' + zoomInt + ')';
        this.mozTransformOrigin = 'top';
        if (!this.ifEdge && !this.ifPdf) {
            this.transform = 'scale(' + zoomInt + ')';
            this.transformOrigin = 'top';
        }
        if (this.ifFirefox && this.ifPdf) {
            this.isMobileFlex = true;
        }
        /** @type {?} */
        const transform = this._sanitizer.bypassSecurityTrustStyle('(' + zoomInt + ', ' + zoomInt + ')');
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
    ifEdge: [{ type: Input }],
    ifFirefox: [{ type: Input }],
    ifPdf: [{ type: Input }],
    zoomStr: [{ type: HostBinding, args: ['style.zoom',] }],
    zoomInt: [{ type: HostBinding, args: ['style.zoom',] }],
    mozTransform: [{ type: HostBinding, args: ['style.-moz-transform',] }],
    transform: [{ type: HostBinding, args: ['style.transform',] }],
    mozTransformOrigin: [{ type: HostBinding, args: ['style.-moz-transform-origin',] }],
    transformOrigin: [{ type: HostBinding, args: ['style.transform-origin',] }],
    webkitTransform: [{ type: HostBinding, args: ['style.-webkit-transform',] }],
    msTransform: [{ type: HostBinding, args: ['style.-ms-transform',] }],
    oTransform: [{ type: HostBinding, args: ['style.-o-transform',] }],
    isMobileFlex: [{ type: HostBinding, args: ['class.mobile-flex-direction',] }]
};
if (false) {
    /** @type {?} */
    ZoomDirective.prototype.zoomActive;
    /** @type {?} */
    ZoomDirective.prototype.ifEdge;
    /** @type {?} */
    ZoomDirective.prototype.ifFirefox;
    /** @type {?} */
    ZoomDirective.prototype.ifPdf;
    /** @type {?} */
    ZoomDirective.prototype.zoomStr;
    /** @type {?} */
    ZoomDirective.prototype.zoomInt;
    /** @type {?} */
    ZoomDirective.prototype.mozTransform;
    /** @type {?} */
    ZoomDirective.prototype.transform;
    /** @type {?} */
    ZoomDirective.prototype.mozTransformOrigin;
    /** @type {?} */
    ZoomDirective.prototype.transformOrigin;
    /** @type {?} */
    ZoomDirective.prototype.webkitTransform;
    /** @type {?} */
    ZoomDirective.prototype.msTransform;
    /** @type {?} */
    ZoomDirective.prototype.oTransform;
    /** @type {?} */
    ZoomDirective.prototype.isMobileFlex;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvem9vbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFLbEUsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBa0J4QixZQUFvQixZQUF5QixFQUFVLFVBQXdCO1FBQTNELGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBYztRQWhCdEUsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBV3NCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBR2pFLENBQUM7Ozs7SUFFRCxXQUFXO0lBQ1gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLFNBQVMsQ0FBQyxJQUFJO1FBQ3BCLElBQUksQ0FBRSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7O2NBQ2hDLE9BQU8sR0FBRyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHO1FBRTdDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLEdBQUcsT0FBTyxHQUFHLElBQUksR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQzlELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFFaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7U0FDOUI7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssRUFBQztZQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUMxQjs7Y0FFSyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLEdBQUcsT0FBTyxHQUFHLElBQUksR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OztZQXBFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7YUFDckI7Ozs7WUFMTyxXQUFXO1lBQ1gsWUFBWTs7O3lCQU9qQixLQUFLO3FCQUNMLEtBQUs7d0JBQ0wsS0FBSztvQkFDTCxLQUFLO3NCQUVMLFdBQVcsU0FBQyxZQUFZO3NCQUN4QixXQUFXLFNBQUMsWUFBWTsyQkFDeEIsV0FBVyxTQUFDLHNCQUFzQjt3QkFDbEMsV0FBVyxTQUFDLGlCQUFpQjtpQ0FDN0IsV0FBVyxTQUFDLDZCQUE2Qjs4QkFDekMsV0FBVyxTQUFDLHdCQUF3Qjs4QkFDcEMsV0FBVyxTQUFDLHlCQUF5QjswQkFDckMsV0FBVyxTQUFDLHFCQUFxQjt5QkFDakMsV0FBVyxTQUFDLG9CQUFvQjsyQkFDaEMsV0FBVyxTQUFDLDZCQUE2Qjs7OztJQWQxQyxtQ0FBMkI7O0lBQzNCLCtCQUF1Qjs7SUFDdkIsa0NBQTBCOztJQUMxQiw4QkFBc0I7O0lBRXRCLGdDQUEyQzs7SUFDM0MsZ0NBQTJDOztJQUMzQyxxQ0FBMEQ7O0lBQzFELGtDQUFrRDs7SUFDbEQsMkNBQXVFOztJQUN2RSx3Q0FBK0Q7O0lBQy9ELHdDQUFtRTs7SUFDbkUsb0NBQTJEOztJQUMzRCxtQ0FBeUQ7O0lBQ3pELHFDQUFpRTs7Ozs7SUFFckQscUNBQWlDOzs7OztJQUFFLG1DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtab29tU2VydmljZX0gZnJvbSBcIi4vem9vbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RG9tU2FuaXRpemVyLCBTYWZlU3R5bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tnZFpvb21dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgWm9vbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQElucHV0KCkgem9vbUFjdGl2ZSA9IHRydWU7XHJcbiAgQElucHV0KCkgaWZFZGdlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBpZkZpcmVmb3ggPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGlmUGRmID0gdHJ1ZTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS56b29tJykgem9vbVN0cjogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuem9vbScpIHpvb21JbnQ6IG51bWJlcjtcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLi1tb3otdHJhbnNmb3JtJykgbW96VHJhbnNmb3JtOiBzdHJpbmc7XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS50cmFuc2Zvcm0nKSB0cmFuc2Zvcm06IHN0cmluZztcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLi1tb3otdHJhbnNmb3JtLW9yaWdpbicpIG1velRyYW5zZm9ybU9yaWdpbjogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUudHJhbnNmb3JtLW9yaWdpbicpIHRyYW5zZm9ybU9yaWdpbjogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuLXdlYmtpdC10cmFuc2Zvcm0nKSB3ZWJraXRUcmFuc2Zvcm06IFNhZmVTdHlsZTtcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLi1tcy10cmFuc2Zvcm0nKSBtc1RyYW5zZm9ybTogU2FmZVN0eWxlO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuLW8tdHJhbnNmb3JtJykgb1RyYW5zZm9ybTogU2FmZVN0eWxlO1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MubW9iaWxlLWZsZXgtZGlyZWN0aW9uJykgaXNNb2JpbGVGbGV4ID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSwgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoISB0aGlzLnpvb21BY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdHlsZXModGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XHJcbiAgICB0aGlzLl96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgoem9vbSkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0eWxlcyh6b29tKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdHlsZXMoem9vbSkge1xyXG4gICAgaWYgKCEgdGhpcy56b29tQWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuem9vbVN0ciA9IE1hdGgucm91bmQoem9vbSkgKyAnJSc7XHJcbiAgICBjb25zdCB6b29tSW50ID0gem9vbSA9PT0gMTAwID8gMSA6IHpvb20gLyAxMDA7XHJcbiAgICBcclxuICAgIGlmICh0aGlzLmlmRWRnZSB8fCB0aGlzLmlmUGRmKSB7XHJcbiAgICAgIHRoaXMuem9vbUludCA9IHpvb21JbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tb3pUcmFuc2Zvcm0gPSAnc2NhbGUoJyArIHpvb21JbnQgKyAnLCAnICsgem9vbUludCArICcpJztcclxuICAgIHRoaXMubW96VHJhbnNmb3JtT3JpZ2luID0gJ3RvcCc7XHJcbiAgICBcclxuICAgIGlmICghdGhpcy5pZkVkZ2UgJiYgIXRoaXMuaWZQZGYpIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSAnc2NhbGUoJyArIHpvb21JbnQgKyAnKSc7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtT3JpZ2luID0gJ3RvcCc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaWZGaXJlZm94ICYmIHRoaXMuaWZQZGYpe1xyXG4gICAgICB0aGlzLmlzTW9iaWxlRmxleCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdHJhbnNmb3JtID0gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgnKCcgKyB6b29tSW50ICsgJywgJyArIHpvb21JbnQgKyAnKScpO1xyXG4gICAgdGhpcy53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XHJcbiAgICB0aGlzLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtO1xyXG4gICAgdGhpcy5vVHJhbnNmb3JtID0gdHJhbnNmb3JtO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdHlsZXModGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==