/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
var ZoomService = /** @class */ (function () {
    function ZoomService() {
        this._observer = new Subject();
        this._zoomChange = this._observer.asObservable();
    }
    /**
     * @param {?} val
     * @param {?} name
     * @param {?=} sep
     * @return {?}
     */
    ZoomService.prototype.createZoomOption = /**
     * @param {?} val
     * @param {?} name
     * @param {?=} sep
     * @return {?}
     */
    function (val, name, sep) {
        if (sep === void 0) { sep = false; }
        return { value: val, name: name, separator: sep };
    };
    /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    ZoomService.prototype.zoomOptions = /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (width, height) {
        return [
            this.createZoomOption(25, '25%'),
            this.createZoomOption(50, '50%'),
            this.createZoomOption(100, '100%'),
            this.createZoomOption(150, '150%'),
            this.createZoomOption(200, '200%'),
            this.createZoomOption(300, '300%'),
            this.createZoomOption(0, '', true),
            this.createZoomOption(width, 'Fit Width'),
            this.createZoomOption(height, 'Fit Height')
        ];
    };
    Object.defineProperty(ZoomService.prototype, "zoom", {
        get: /**
         * @return {?}
         */
        function () {
            return this._zoom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomService.prototype, "zoomChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._zoomChange;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} zoom
     * @return {?}
     */
    ZoomService.prototype.changeZoom = /**
     * @param {?} zoom
     * @return {?}
     */
    function (zoom) {
        this._zoom = zoom;
        this._observer.next(zoom);
    };
    return ZoomService;
}());
export { ZoomService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ZoomService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    ZoomService.prototype._zoomChange;
    /**
     * @type {?}
     * @private
     */
    ZoomService.prototype._zoom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3pvb20uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV6QztJQXdCRTtRQXZCUSxjQUFTLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbEMsZ0JBQVcsR0FBdUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQXVCakYsQ0FBQzs7Ozs7OztJQW5CRCxzQ0FBZ0I7Ozs7OztJQUFoQixVQUFpQixHQUFXLEVBQUUsSUFBWSxFQUFFLEdBQVc7UUFBWCxvQkFBQSxFQUFBLFdBQVc7UUFDckQsT0FBTyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFDLENBQUE7SUFDakQsQ0FBQzs7Ozs7O0lBRUQsaUNBQVc7Ozs7O0lBQVgsVUFBWSxLQUFhLEVBQUUsTUFBYztRQUN2QyxPQUFPO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBQyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBQyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBQyxNQUFNLENBQUM7WUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBQyxNQUFNLENBQUM7WUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBQyxNQUFNLENBQUM7WUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBQyxNQUFNLENBQUM7WUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDO1NBQzVDLENBQUM7SUFDSixDQUFDO0lBS0Qsc0JBQUksNkJBQUk7Ozs7UUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1DQUFVOzs7O1FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsZ0NBQVU7Ozs7SUFBVixVQUFXLElBQVk7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUdILGtCQUFDO0FBQUQsQ0FBQyxBQXpDRCxJQXlDQzs7Ozs7OztJQXhDQyxnQ0FBbUQ7Ozs7O0lBQ25ELGtDQUFpRjs7Ozs7SUFDakYsNEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuXG5leHBvcnQgY2xhc3MgWm9vbVNlcnZpY2Uge1xuICBwcml2YXRlIF9vYnNlcnZlcjogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfem9vbUNoYW5nZTogT2JzZXJ2YWJsZTxudW1iZXI+ID0gdGhpcy5fb2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgX3pvb206IG51bWJlcjtcblxuXG4gIGNyZWF0ZVpvb21PcHRpb24odmFsOiBudW1iZXIsIG5hbWU6IHN0cmluZywgc2VwID0gZmFsc2UpIHtcbiAgICByZXR1cm4ge3ZhbHVlOiB2YWwsIG5hbWU6IG5hbWUsIHNlcGFyYXRvcjogc2VwfVxuICB9XG5cbiAgem9vbU9wdGlvbnMod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICByZXR1cm4gW1xuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKDI1LCcyNSUnKSxcbiAgICAgIHRoaXMuY3JlYXRlWm9vbU9wdGlvbig1MCwnNTAlJyksXG4gICAgICB0aGlzLmNyZWF0ZVpvb21PcHRpb24oMTAwLCcxMDAlJyksXG4gICAgICB0aGlzLmNyZWF0ZVpvb21PcHRpb24oMTUwLCcxNTAlJyksXG4gICAgICB0aGlzLmNyZWF0ZVpvb21PcHRpb24oMjAwLCcyMDAlJyksXG4gICAgICB0aGlzLmNyZWF0ZVpvb21PcHRpb24oMzAwLCczMDAlJyksXG4gICAgICB0aGlzLmNyZWF0ZVpvb21PcHRpb24oMCwgJycsIHRydWUpLFxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKHdpZHRoLCAnRml0IFdpZHRoJyksXG4gICAgICB0aGlzLmNyZWF0ZVpvb21PcHRpb24oaGVpZ2h0LCAnRml0IEhlaWdodCcpXG4gICAgXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgZ2V0IHpvb20oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fem9vbTtcbiAgfVxuXG4gIGdldCB6b29tQ2hhbmdlKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX3pvb21DaGFuZ2U7XG4gIH1cblxuICBjaGFuZ2Vab29tKHpvb206IG51bWJlcikge1xuICAgIHRoaXMuX3pvb20gPSB6b29tO1xuICAgIHRoaXMuX29ic2VydmVyLm5leHQoem9vbSk7XG4gIH1cblxuICBcbn1cbiJdfQ==