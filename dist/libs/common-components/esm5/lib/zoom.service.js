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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3pvb20uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV6QztJQUtFO1FBSlEsY0FBUyxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2xDLGdCQUFXLEdBQXVCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7SUFJakYsQ0FBQztJQUVELHNCQUFJLDZCQUFJOzs7O1FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBVTs7OztRQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7OztPQUFBOzs7OztJQUVELGdDQUFVOzs7O0lBQVYsVUFBVyxJQUFZO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7Ozs7O0lBRU8sc0NBQWdCOzs7Ozs7O0lBQXhCLFVBQXlCLEdBQVEsRUFBRSxJQUFZLEVBQUUsR0FBb0I7UUFBcEIsb0JBQUEsRUFBQSxXQUFvQjtRQUNuRSxPQUFPLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUMsQ0FBQTtJQUNqRCxDQUFDOzs7Ozs7SUFFRCxpQ0FBVzs7Ozs7SUFBWCxVQUFZLEtBQUssRUFBRSxNQUFNO1FBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztZQUN0QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFDLE1BQU0sQ0FBQztZQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUM7WUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxXQUFXLENBQUM7WUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFwQ0QsSUFvQ0M7Ozs7Ozs7SUFuQ0MsZ0NBQW1EOzs7OztJQUNuRCxrQ0FBaUY7Ozs7O0lBQ2pGLDRCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcblxuZXhwb3J0IGNsYXNzIFpvb21TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3pvb21DaGFuZ2U6IE9ic2VydmFibGU8bnVtYmVyPiA9IHRoaXMuX29ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIF96b29tOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBnZXQgem9vbSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl96b29tO1xuICB9XG5cbiAgZ2V0IHpvb21DaGFuZ2UoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fem9vbUNoYW5nZTtcbiAgfVxuXG4gIGNoYW5nZVpvb20oem9vbTogbnVtYmVyKSB7XG4gICAgdGhpcy5fem9vbSA9IHpvb207XG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dCh6b29tKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlWm9vbU9wdGlvbih2YWw6IGFueSwgbmFtZTogc3RyaW5nLCBzZXA6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIHJldHVybiB7dmFsdWU6IHZhbCwgbmFtZTogbmFtZSwgc2VwYXJhdG9yOiBzZXB9XG4gIH1cblxuICB6b29tT3B0aW9ucyh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgcmV0dXJuIFt0aGlzLmNyZWF0ZVpvb21PcHRpb24oMjUsICcyNSUnKSxcbiAgICAgIHRoaXMuY3JlYXRlWm9vbU9wdGlvbig1MCwgJzUwJScpLFxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKDEwMCwnMTAwJScpLFxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKDE1MCwgJzE1MCUnKSxcbiAgICAgIHRoaXMuY3JlYXRlWm9vbU9wdGlvbigyMDAsICcyMDAlJyksXG4gICAgICB0aGlzLmNyZWF0ZVpvb21PcHRpb24oMzAwLCAnMzAwJScpLFxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKDAsICcnLCB0cnVlKSxcbiAgICAgIHRoaXMuY3JlYXRlWm9vbU9wdGlvbih3aWR0aCwgJ0ZpdCBXaWR0aCcpLFxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKGhlaWdodCwgJ0ZpdCBIZWlnaHQnKV07XG4gIH1cbn1cbiJdfQ==