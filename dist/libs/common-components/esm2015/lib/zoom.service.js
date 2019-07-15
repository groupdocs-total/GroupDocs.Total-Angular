/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
export class ZoomService {
    constructor() {
        this._observer = new Subject();
        this._zoomChange = this._observer.asObservable();
    }
    /**
     * @return {?}
     */
    get zoom() {
        return this._zoom;
    }
    /**
     * @return {?}
     */
    get zoomChange() {
        return this._zoomChange;
    }
    /**
     * @param {?} zoom
     * @return {?}
     */
    changeZoom(zoom) {
        this._zoom = zoom;
        this._observer.next(zoom);
    }
    /**
     * @private
     * @param {?} val
     * @param {?=} name
     * @param {?=} sep
     * @return {?}
     */
    createZoomOption(val, name = val + '%', sep = false) {
        return { value: val, name: name, separator: sep, prefix: "%" };
    }
    /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    zoomOptions(width, height) {
        return [this.createZoomOption(25),
            this.createZoomOption(50),
            this.createZoomOption(100),
            this.createZoomOption(150),
            this.createZoomOption(200),
            this.createZoomOption(300),
            this.createZoomOption(0, '', true),
            this.createZoomOption(width, 'Fit Width'),
            this.createZoomOption(height, 'Fit Height')];
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3pvb20uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV6QyxNQUFNLE9BQU8sV0FBVztJQUt0QjtRQUpRLGNBQVMsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNsQyxnQkFBVyxHQUF1QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBSWpGLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFZO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7Ozs7O0lBRU8sZ0JBQWdCLENBQUMsR0FBVyxFQUFFLE9BQWUsR0FBRyxHQUFHLEdBQUcsRUFBRSxNQUFlLEtBQUs7UUFDbEYsT0FBTyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQTtJQUM5RCxDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQU07UUFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztZQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQztZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQztZQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUNGOzs7Ozs7SUFuQ0MsZ0NBQW1EOzs7OztJQUNuRCxrQ0FBaUY7Ozs7O0lBQ2pGLDRCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcblxuZXhwb3J0IGNsYXNzIFpvb21TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3pvb21DaGFuZ2U6IE9ic2VydmFibGU8bnVtYmVyPiA9IHRoaXMuX29ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIF96b29tOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBnZXQgem9vbSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl96b29tO1xuICB9XG5cbiAgZ2V0IHpvb21DaGFuZ2UoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fem9vbUNoYW5nZTtcbiAgfVxuXG4gIGNoYW5nZVpvb20oem9vbTogbnVtYmVyKSB7XG4gICAgdGhpcy5fem9vbSA9IHpvb207XG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dCh6b29tKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlWm9vbU9wdGlvbih2YWw6IG51bWJlciwgbmFtZTogc3RyaW5nID0gdmFsICsgJyUnLCBzZXA6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIHJldHVybiB7dmFsdWU6IHZhbCwgbmFtZTogbmFtZSwgc2VwYXJhdG9yOiBzZXAsIHByZWZpeDogXCIlXCJ9XG4gIH1cblxuICB6b29tT3B0aW9ucyh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgcmV0dXJuIFt0aGlzLmNyZWF0ZVpvb21PcHRpb24oMjUpLFxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKDUwKSxcbiAgICAgIHRoaXMuY3JlYXRlWm9vbU9wdGlvbigxMDApLFxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKDE1MCksXG4gICAgICB0aGlzLmNyZWF0ZVpvb21PcHRpb24oMjAwKSxcbiAgICAgIHRoaXMuY3JlYXRlWm9vbU9wdGlvbigzMDApLFxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKDAsICcnLCB0cnVlKSxcbiAgICAgIHRoaXMuY3JlYXRlWm9vbU9wdGlvbih3aWR0aCwgJ0ZpdCBXaWR0aCcpLFxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKGhlaWdodCwgJ0ZpdCBIZWlnaHQnKV07XG4gIH1cbn1cbiJdfQ==