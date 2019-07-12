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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3pvb20uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV6QyxNQUFNLE9BQU8sV0FBVztJQXdCdEI7UUF2QlEsY0FBUyxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2xDLGdCQUFXLEdBQXVCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7SUF1QmpGLENBQUM7Ozs7Ozs7SUFuQkQsZ0JBQWdCLENBQUMsR0FBVyxFQUFFLElBQVksRUFBRSxHQUFHLEdBQUcsS0FBSztRQUNyRCxPQUFPLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUMsQ0FBQTtJQUNqRCxDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBYSxFQUFFLE1BQWM7UUFDdkMsT0FBTztZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUMsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUMsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUMsTUFBTSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUMsTUFBTSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUMsTUFBTSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUMsTUFBTSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQztZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQztZQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQztTQUM1QyxDQUFDO0lBQ0osQ0FBQzs7OztJQUtELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQVk7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUdGOzs7Ozs7SUF4Q0MsZ0NBQW1EOzs7OztJQUNuRCxrQ0FBaUY7Ozs7O0lBQ2pGLDRCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcblxuZXhwb3J0IGNsYXNzIFpvb21TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3pvb21DaGFuZ2U6IE9ic2VydmFibGU8bnVtYmVyPiA9IHRoaXMuX29ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIF96b29tOiBudW1iZXI7XG5cblxuICBjcmVhdGVab29tT3B0aW9uKHZhbDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIHNlcCA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIHt2YWx1ZTogdmFsLCBuYW1lOiBuYW1lLCBzZXBhcmF0b3I6IHNlcH1cbiAgfVxuXG4gIHpvb21PcHRpb25zKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHRoaXMuY3JlYXRlWm9vbU9wdGlvbigyNSwnMjUlJyksXG4gICAgICB0aGlzLmNyZWF0ZVpvb21PcHRpb24oNTAsJzUwJScpLFxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKDEwMCwnMTAwJScpLFxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKDE1MCwnMTUwJScpLFxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKDIwMCwnMjAwJScpLFxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKDMwMCwnMzAwJScpLFxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKDAsICcnLCB0cnVlKSxcbiAgICAgIHRoaXMuY3JlYXRlWm9vbU9wdGlvbih3aWR0aCwgJ0ZpdCBXaWR0aCcpLFxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKGhlaWdodCwgJ0ZpdCBIZWlnaHQnKVxuICAgIF07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGdldCB6b29tKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3pvb207XG4gIH1cblxuICBnZXQgem9vbUNoYW5nZSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl96b29tQ2hhbmdlO1xuICB9XG5cbiAgY2hhbmdlWm9vbSh6b29tOiBudW1iZXIpIHtcbiAgICB0aGlzLl96b29tID0gem9vbTtcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KHpvb20pO1xuICB9XG5cbiAgXG59XG4iXX0=