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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvem9vbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFFbEU7SUFXRSx1QkFBb0IsWUFBeUIsRUFBVSxVQUF3QjtRQUEzRCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQWM7UUFOdEUsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixXQUFNLEdBQUcsSUFBSSxDQUFDO0lBTXZCLENBQUM7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7SUFDQSxDQUFDOzs7O0lBRUQsZ0NBQVE7OztJQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsSUFBSTtZQUMxQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8saUNBQVM7Ozs7O0lBQWpCLFVBQWtCLElBQUk7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTztTQUNSOztZQUVLLE9BQU8sR0FBRyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHO1FBRTdDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCO2FBQ0k7WUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQzFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQzs7OztJQUVELHVDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDOztnQkExQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO2lCQUNyQjs7OztnQkFMTyxXQUFXO2dCQUNYLFlBQVk7Ozs2QkFPakIsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLFdBQVcsU0FBQyxZQUFZOzRCQUN4QixXQUFXLFNBQUMsaUJBQWlCO2tDQUM3QixXQUFXLFNBQUMsd0JBQXdCOztJQWtDdkMsb0JBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQXhDWSxhQUFhOzs7SUFFeEIsbUNBQTJCOztJQUMzQiwrQkFBdUI7O0lBQ3ZCLGdDQUEyQzs7SUFDM0Msa0NBQXFEOztJQUNyRCx3Q0FBK0Q7Ozs7O0lBRW5ELHFDQUFpQzs7Ozs7SUFBRSxtQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcbmltcG9ydCB7RG9tU2FuaXRpemVyLCBTYWZlU3R5bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnZFpvb21dJ1xufSlcbmV4cG9ydCBjbGFzcyBab29tRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuXG4gIEBJbnB1dCgpIHpvb21BY3RpdmUgPSB0cnVlO1xuICBASW5wdXQoKSBpc0VkZ2UgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnpvb20nKSB6b29tSW50OiBudW1iZXI7XG4gIEBIb3N0QmluZGluZygnc3R5bGUudHJhbnNmb3JtJykgVHJhbnNmb3JtOiBTYWZlU3R5bGU7XG4gIEBIb3N0QmluZGluZygnc3R5bGUudHJhbnNmb3JtLW9yaWdpbicpIFRyYW5zZm9ybU9yaWdpbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSwgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRTdHlsZXModGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XG4gICAgdGhpcy5fem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHpvb20pID0+IHtcbiAgICAgIHRoaXMuc2V0U3R5bGVzKHpvb20pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdHlsZXMoem9vbSkge1xuICAgIGlmICghdGhpcy56b29tQWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgem9vbUludCA9IHpvb20gPT09IDEwMCA/IDEgOiB6b29tIC8gMTAwO1xuICAgIFxuICAgIGlmICh0aGlzLmlzRWRnZSkge1xuICAgICAgdGhpcy56b29tSW50ID0gem9vbUludDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLlRyYW5zZm9ybSA9ICdzY2FsZSgnICsgem9vbUludCArICcpJztcbiAgICAgIHRoaXMuVHJhbnNmb3JtT3JpZ2luID0gJ3RvcCc7XG4gICAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRTdHlsZXModGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XG4gIH1cbn1cbiJdfQ==