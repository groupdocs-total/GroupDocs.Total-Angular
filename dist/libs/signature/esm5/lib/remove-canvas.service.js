/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
var RemoveCanvasService = /** @class */ (function () {
    function RemoveCanvasService() {
        this._observer = new Subject();
        this._removeCanvas = this._observer.asObservable();
    }
    Object.defineProperty(RemoveCanvasService.prototype, "removeCanvas", {
        get: /**
         * @return {?}
         */
        function () {
            return this._removeCanvas;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} id
     * @return {?}
     */
    RemoveCanvasService.prototype.remove = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this._observer.next(id);
    };
    return RemoveCanvasService;
}());
export { RemoveCanvasService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RemoveCanvasService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    RemoveCanvasService.prototype._removeCanvas;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWNhbnZhcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9yZW1vdmUtY2FudmFzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFekM7SUFJRTtRQUhRLGNBQVMsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUF1QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBR25GLENBQUM7SUFFRCxzQkFBSSw2Q0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTs7Ozs7SUFFRCxvQ0FBTTs7OztJQUFOLFVBQU8sRUFBVTtRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFkRCxJQWNDOzs7Ozs7O0lBYkMsd0NBQW1EOzs7OztJQUNuRCw0Q0FBbUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVDYW52YXNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3JlbW92ZUNhbnZhczogT2JzZXJ2YWJsZTxudW1iZXI+ID0gdGhpcy5fb2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBnZXQgcmVtb3ZlQ2FudmFzKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbW92ZUNhbnZhcztcbiAgfVxuXG4gIHJlbW92ZShpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChpZCk7XG4gIH1cbn1cbiJdfQ==