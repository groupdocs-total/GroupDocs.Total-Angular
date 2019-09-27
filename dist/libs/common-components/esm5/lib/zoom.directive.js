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
        this.ifEdge = true;
        this.ifFirefox = true;
        this.ifPdf = true;
        this.isMobileFlex = false;
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
        if (!this.zoomActive) {
            return;
        }
        this.zoomStr = Math.round(zoom) + '%';
        /** @type {?} */
        var zoomInt = zoom === 100 ? 1 : zoom / 100;
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
        var transform = this._sanitizer.bypassSecurityTrustStyle('(' + zoomInt + ', ' + zoomInt + ')');
        this.webkitTransform = transform;
        this.msTransform = transform;
        this.oTransform = transform;
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
    return ZoomDirective;
}());
export { ZoomDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvem9vbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFFbEU7SUFxQkUsdUJBQW9CLFlBQXlCLEVBQVUsVUFBd0I7UUFBM0QsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFjO1FBaEJ0RSxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFVBQUssR0FBRyxJQUFJLENBQUM7UUFXc0IsaUJBQVksR0FBRyxLQUFLLENBQUM7SUFHakUsQ0FBQzs7OztJQUVELG1DQUFXOzs7SUFBWDtJQUNBLENBQUM7Ozs7SUFFRCxnQ0FBUTs7O0lBQVI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBRSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxJQUFJO1lBQzFDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxpQ0FBUzs7Ozs7SUFBakIsVUFBa0IsSUFBSTtRQUNwQixJQUFJLENBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDOztZQUNoQyxPQUFPLEdBQUcsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRztRQUU3QyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4QjtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxHQUFHLE9BQU8sR0FBRyxJQUFJLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUM5RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBRWhDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQzFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1NBQzlCO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDMUI7O1lBRUssU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsR0FBRyxHQUFHLE9BQU8sR0FBRyxJQUFJLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNoRyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsdUNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7O2dCQXBFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCOzs7O2dCQUxPLFdBQVc7Z0JBQ1gsWUFBWTs7OzZCQU9qQixLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUVMLFdBQVcsU0FBQyxZQUFZOzBCQUN4QixXQUFXLFNBQUMsWUFBWTsrQkFDeEIsV0FBVyxTQUFDLHNCQUFzQjs0QkFDbEMsV0FBVyxTQUFDLGlCQUFpQjtxQ0FDN0IsV0FBVyxTQUFDLDZCQUE2QjtrQ0FDekMsV0FBVyxTQUFDLHdCQUF3QjtrQ0FDcEMsV0FBVyxTQUFDLHlCQUF5Qjs4QkFDckMsV0FBVyxTQUFDLHFCQUFxQjs2QkFDakMsV0FBVyxTQUFDLG9CQUFvQjsrQkFDaEMsV0FBVyxTQUFDLDZCQUE2Qjs7SUFrRDVDLG9CQUFDO0NBQUEsQUFyRUQsSUFxRUM7U0FsRVksYUFBYTs7O0lBRXhCLG1DQUEyQjs7SUFDM0IsK0JBQXVCOztJQUN2QixrQ0FBMEI7O0lBQzFCLDhCQUFzQjs7SUFFdEIsZ0NBQTJDOztJQUMzQyxnQ0FBMkM7O0lBQzNDLHFDQUEwRDs7SUFDMUQsa0NBQWtEOztJQUNsRCwyQ0FBdUU7O0lBQ3ZFLHdDQUErRDs7SUFDL0Qsd0NBQW1FOztJQUNuRSxvQ0FBMkQ7O0lBQzNELG1DQUF5RDs7SUFDekQscUNBQWlFOzs7OztJQUVyRCxxQ0FBaUM7Ozs7O0lBQUUsbUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2dkWm9vbV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBab29tRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBASW5wdXQoKSB6b29tQWN0aXZlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBpZkVkZ2UgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGlmRmlyZWZveCA9IHRydWU7XHJcbiAgQElucHV0KCkgaWZQZGYgPSB0cnVlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnpvb20nKSB6b29tU3RyOiBzdHJpbmc7XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS56b29tJykgem9vbUludDogbnVtYmVyO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuLW1vei10cmFuc2Zvcm0nKSBtb3pUcmFuc2Zvcm06IHN0cmluZztcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRyYW5zZm9ybScpIHRyYW5zZm9ybTogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuLW1vei10cmFuc2Zvcm0tb3JpZ2luJykgbW96VHJhbnNmb3JtT3JpZ2luOiBzdHJpbmc7XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS50cmFuc2Zvcm0tb3JpZ2luJykgdHJhbnNmb3JtT3JpZ2luOiBzdHJpbmc7XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS4td2Via2l0LXRyYW5zZm9ybScpIHdlYmtpdFRyYW5zZm9ybTogU2FmZVN0eWxlO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuLW1zLXRyYW5zZm9ybScpIG1zVHJhbnNmb3JtOiBTYWZlU3R5bGU7XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS4tby10cmFuc2Zvcm0nKSBvVHJhbnNmb3JtOiBTYWZlU3R5bGU7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tb2JpbGUtZmxleC1kaXJlY3Rpb24nKSBpc01vYmlsZUZsZXggPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLCBwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghIHRoaXMuem9vbUFjdGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0eWxlcyh0aGlzLl96b29tU2VydmljZS56b29tKTtcclxuICAgIHRoaXMuX3pvb21TZXJ2aWNlLnpvb21DaGFuZ2Uuc3Vic2NyaWJlKCh6b29tKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3R5bGVzKHpvb20pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFN0eWxlcyh6b29tKSB7XHJcbiAgICBpZiAoISB0aGlzLnpvb21BY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy56b29tU3RyID0gTWF0aC5yb3VuZCh6b29tKSArICclJztcclxuICAgIGNvbnN0IHpvb21JbnQgPSB6b29tID09PSAxMDAgPyAxIDogem9vbSAvIDEwMDtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuaWZFZGdlIHx8IHRoaXMuaWZQZGYpIHtcclxuICAgICAgdGhpcy56b29tSW50ID0gem9vbUludDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1velRyYW5zZm9ybSA9ICdzY2FsZSgnICsgem9vbUludCArICcsICcgKyB6b29tSW50ICsgJyknO1xyXG4gICAgdGhpcy5tb3pUcmFuc2Zvcm1PcmlnaW4gPSAndG9wJztcclxuICAgIFxyXG4gICAgaWYgKCF0aGlzLmlmRWRnZSAmJiAhdGhpcy5pZlBkZikge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9ICdzY2FsZSgnICsgem9vbUludCArICcpJztcclxuICAgICAgdGhpcy50cmFuc2Zvcm1PcmlnaW4gPSAndG9wJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pZkZpcmVmb3ggJiYgdGhpcy5pZlBkZil7XHJcbiAgICAgIHRoaXMuaXNNb2JpbGVGbGV4ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCcoJyArIHpvb21JbnQgKyAnLCAnICsgem9vbUludCArICcpJyk7XHJcbiAgICB0aGlzLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcclxuICAgIHRoaXMubXNUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XHJcbiAgICB0aGlzLm9UcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0eWxlcyh0aGlzLl96b29tU2VydmljZS56b29tKTtcclxuICB9XHJcbn1cclxuIl19