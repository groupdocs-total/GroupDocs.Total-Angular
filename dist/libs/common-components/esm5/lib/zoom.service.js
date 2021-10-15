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
    /**
     * @private
     * @param {?} val
     * @param {?} name
     * @param {?=} sep
     * @return {?}
     */
    ZoomService.prototype.createZoomOption = /**
     * @private
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
        return [this.createZoomOption(25, '25%'),
            this.createZoomOption(50, '50%'),
            this.createZoomOption(100, '100%'),
            this.createZoomOption(150, '150%'),
            this.createZoomOption(200, '200%'),
            this.createZoomOption(300, '300%'),
            this.createZoomOption(0, '', true),
            this.createZoomOption(width, 'Fit Width'),
            this.createZoomOption(height, 'Fit Height')];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3pvb20uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV6QztJQUtFO1FBSlEsY0FBUyxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2xDLGdCQUFXLEdBQXVCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7SUFJakYsQ0FBQztJQUVELHNCQUFJLDZCQUFJOzs7O1FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBVTs7OztRQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7OztPQUFBOzs7OztJQUVELGdDQUFVOzs7O0lBQVYsVUFBVyxJQUFZO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7Ozs7O0lBRU8sc0NBQWdCOzs7Ozs7O0lBQXhCLFVBQXlCLEdBQVEsRUFBRSxJQUFZLEVBQUUsR0FBb0I7UUFBcEIsb0JBQUEsRUFBQSxXQUFvQjtRQUNuRSxPQUFPLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUMsQ0FBQTtJQUNqRCxDQUFDOzs7Ozs7SUFFRCxpQ0FBVzs7Ozs7SUFBWCxVQUFZLEtBQUssRUFBRSxNQUFNO1FBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztZQUN0QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFDLE1BQU0sQ0FBQztZQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUM7WUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxXQUFXLENBQUM7WUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFwQ0QsSUFvQ0M7Ozs7Ozs7SUFuQ0MsZ0NBQW1EOzs7OztJQUNuRCxrQ0FBaUY7Ozs7O0lBQ2pGLDRCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBab29tU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfem9vbUNoYW5nZTogT2JzZXJ2YWJsZTxudW1iZXI+ID0gdGhpcy5fb2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHJpdmF0ZSBfem9vbTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIGdldCB6b29tKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fem9vbTtcclxuICB9XHJcblxyXG4gIGdldCB6b29tQ2hhbmdlKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fem9vbUNoYW5nZTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVpvb20oem9vbTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl96b29tID0gem9vbTtcclxuICAgIHRoaXMuX29ic2VydmVyLm5leHQoem9vbSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVpvb21PcHRpb24odmFsOiBhbnksIG5hbWU6IHN0cmluZywgc2VwOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIHJldHVybiB7dmFsdWU6IHZhbCwgbmFtZTogbmFtZSwgc2VwYXJhdG9yOiBzZXB9XHJcbiAgfVxyXG5cclxuICB6b29tT3B0aW9ucyh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICByZXR1cm4gW3RoaXMuY3JlYXRlWm9vbU9wdGlvbigyNSwgJzI1JScpLFxyXG4gICAgICB0aGlzLmNyZWF0ZVpvb21PcHRpb24oNTAsICc1MCUnKSxcclxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKDEwMCwnMTAwJScpLFxyXG4gICAgICB0aGlzLmNyZWF0ZVpvb21PcHRpb24oMTUwLCAnMTUwJScpLFxyXG4gICAgICB0aGlzLmNyZWF0ZVpvb21PcHRpb24oMjAwLCAnMjAwJScpLFxyXG4gICAgICB0aGlzLmNyZWF0ZVpvb21PcHRpb24oMzAwLCAnMzAwJScpLFxyXG4gICAgICB0aGlzLmNyZWF0ZVpvb21PcHRpb24oMCwgJycsIHRydWUpLFxyXG4gICAgICB0aGlzLmNyZWF0ZVpvb21PcHRpb24od2lkdGgsICdGaXQgV2lkdGgnKSxcclxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKGhlaWdodCwgJ0ZpdCBIZWlnaHQnKV07XHJcbiAgfVxyXG59XHJcbiJdfQ==