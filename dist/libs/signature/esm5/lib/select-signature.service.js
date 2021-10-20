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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXNpZ25hdHVyZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3Qtc2lnbmF0dXJlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHekM7SUFJRTtRQUhRLGNBQVMsR0FBZ0MsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM5QyxxQkFBZ0IsR0FBbUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUdsRyxDQUFDO0lBRUQsc0JBQUksbURBQWU7Ozs7UUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTs7Ozs7SUFFRCx1Q0FBTTs7OztJQUFOLFVBQU8sSUFBd0I7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7Ozs7Ozs7SUFiQywyQ0FBK0Q7Ozs7O0lBQy9ELGtEQUFrRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7RHJhZ2dhYmxlU2lnbmF0dXJlfSBmcm9tIFwiLi9zaWduYXR1cmUtbW9kZWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RTaWduYXR1cmVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IFN1YmplY3Q8RHJhZ2dhYmxlU2lnbmF0dXJlPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3NlbGVjdFNpZ25hdHVyZTogT2JzZXJ2YWJsZTxEcmFnZ2FibGVTaWduYXR1cmU+ID0gdGhpcy5fb2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBnZXQgc2VsZWN0U2lnbmF0dXJlKCk6IE9ic2VydmFibGU8RHJhZ2dhYmxlU2lnbmF0dXJlPiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdFNpZ25hdHVyZTtcbiAgfVxuXG4gIHNlbGVjdChzaWduOiBEcmFnZ2FibGVTaWduYXR1cmUpOiB2b2lkIHtcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KHNpZ24pO1xuICB9XG59XG4iXX0=