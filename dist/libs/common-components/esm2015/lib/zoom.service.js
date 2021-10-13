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
     * @param {?} name
     * @param {?=} sep
     * @return {?}
     */
    createZoomOption(val, name, sep = false) {
        return { value: val, name: name, separator: sep };
    }
    /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    zoomOptions(width, height) {
        return [this.createZoomOption(25, '25%'),
            this.createZoomOption(50, '50%'),
            this.createZoomOption(100, '100%'),
            this.createZoomOption(150, '150%'),
            this.createZoomOption(200, '200%'),
            this.createZoomOption(300, '300%'),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3pvb20uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV6QyxNQUFNLE9BQU8sV0FBVztJQUt0QjtRQUpRLGNBQVMsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNsQyxnQkFBVyxHQUF1QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBSWpGLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFZO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7Ozs7O0lBRU8sZ0JBQWdCLENBQUMsR0FBUSxFQUFFLElBQVksRUFBRSxNQUFlLEtBQUs7UUFDbkUsT0FBTyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFDLENBQUE7SUFDakQsQ0FBQzs7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQUssRUFBRSxNQUFNO1FBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztZQUN0QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFDLE1BQU0sQ0FBQztZQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUM7WUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxXQUFXLENBQUM7WUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FDRjs7Ozs7O0lBbkNDLGdDQUFtRDs7Ozs7SUFDbkQsa0NBQWlGOzs7OztJQUNqRiw0QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgWm9vbVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX29ic2VydmVyOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3pvb21DaGFuZ2U6IE9ic2VydmFibGU8bnVtYmVyPiA9IHRoaXMuX29ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHByaXZhdGUgX3pvb206IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBnZXQgem9vbSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3pvb207XHJcbiAgfVxyXG5cclxuICBnZXQgem9vbUNoYW5nZSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3pvb21DaGFuZ2U7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2Vab29tKHpvb206IG51bWJlcikge1xyXG4gICAgdGhpcy5fem9vbSA9IHpvb207XHJcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KHpvb20pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVab29tT3B0aW9uKHZhbDogYW55LCBuYW1lOiBzdHJpbmcsIHNlcDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICByZXR1cm4ge3ZhbHVlOiB2YWwsIG5hbWU6IG5hbWUsIHNlcGFyYXRvcjogc2VwfVxyXG4gIH1cclxuXHJcbiAgem9vbU9wdGlvbnMod2lkdGgsIGhlaWdodCkge1xyXG4gICAgcmV0dXJuIFt0aGlzLmNyZWF0ZVpvb21PcHRpb24oMjUsICcyNSUnKSxcclxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKDUwLCAnNTAlJyksXHJcbiAgICAgIHRoaXMuY3JlYXRlWm9vbU9wdGlvbigxMDAsJzEwMCUnKSxcclxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKDE1MCwgJzE1MCUnKSxcclxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKDIwMCwgJzIwMCUnKSxcclxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKDMwMCwgJzMwMCUnKSxcclxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKDAsICcnLCB0cnVlKSxcclxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKHdpZHRoLCAnRml0IFdpZHRoJyksXHJcbiAgICAgIHRoaXMuY3JlYXRlWm9vbU9wdGlvbihoZWlnaHQsICdGaXQgSGVpZ2h0JyldO1xyXG4gIH1cclxufVxyXG4iXX0=