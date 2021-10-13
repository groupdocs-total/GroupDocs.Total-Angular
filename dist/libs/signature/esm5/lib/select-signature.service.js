/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
var SelectSignatureService = /** @class */ (function () {
    function SelectSignatureService() {
        this._observer = new Subject();
        this._selectSignature = this._observer.asObservable();
    }
    Object.defineProperty(SelectSignatureService.prototype, "selectSignature", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectSignature;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} sign
     * @return {?}
     */
    SelectSignatureService.prototype.select = /**
     * @param {?} sign
     * @return {?}
     */
    function (sign) {
        this._observer.next(sign);
    };
    return SelectSignatureService;
}());
export { SelectSignatureService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectSignatureService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    SelectSignatureService.prototype._selectSignature;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXNpZ25hdHVyZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3Qtc2lnbmF0dXJlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHekM7SUFJRTtRQUhRLGNBQVMsR0FBZ0MsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM5QyxxQkFBZ0IsR0FBbUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUdsRyxDQUFDO0lBRUQsc0JBQUksbURBQWU7Ozs7UUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTs7Ozs7SUFFRCx1Q0FBTTs7OztJQUFOLFVBQU8sSUFBd0I7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7Ozs7Ozs7SUFiQywyQ0FBK0Q7Ozs7O0lBQy9ELGtEQUFrRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtEcmFnZ2FibGVTaWduYXR1cmV9IGZyb20gXCIuL3NpZ25hdHVyZS1tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RTaWduYXR1cmVTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9vYnNlcnZlcjogU3ViamVjdDxEcmFnZ2FibGVTaWduYXR1cmU+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9zZWxlY3RTaWduYXR1cmU6IE9ic2VydmFibGU8RHJhZ2dhYmxlU2lnbmF0dXJlPiA9IHRoaXMuX29ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RTaWduYXR1cmUoKTogT2JzZXJ2YWJsZTxEcmFnZ2FibGVTaWduYXR1cmU+IHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RTaWduYXR1cmU7XHJcbiAgfVxyXG5cclxuICBzZWxlY3Qoc2lnbjogRHJhZ2dhYmxlU2lnbmF0dXJlKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KHNpZ24pO1xyXG4gIH1cclxufVxyXG4iXX0=