/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
var RemoveSignatureService = /** @class */ (function () {
    function RemoveSignatureService() {
        this._observer = new Subject();
        this._removeSignature = this._observer.asObservable();
    }
    Object.defineProperty(RemoveSignatureService.prototype, "removeSignature", {
        get: /**
         * @return {?}
         */
        function () {
            return this._removeSignature;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} id
     * @return {?}
     */
    RemoveSignatureService.prototype.remove = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this._observer.next(id);
    };
    return RemoveSignatureService;
}());
export { RemoveSignatureService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RemoveSignatureService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    RemoveSignatureService.prototype._removeSignature;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLXNpZ25hdHVyZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9yZW1vdmUtc2lnbmF0dXJlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHekM7SUFJRTtRQUhRLGNBQVMsR0FBd0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN0QyxxQkFBZ0IsR0FBMkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUcxRixDQUFDO0lBRUQsc0JBQUksbURBQWU7Ozs7UUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTs7Ozs7SUFFRCx1Q0FBTTs7OztJQUFOLFVBQU8sRUFBYztRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7Ozs7OztJQWJDLDJDQUF1RDs7Ozs7SUFDdkQsa0RBQTBGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtSZW1vdmVTaWdufSBmcm9tIFwiLi9zaWduYXR1cmUtbW9kZWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVTaWduYXR1cmVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IFN1YmplY3Q8UmVtb3ZlU2lnbj4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9yZW1vdmVTaWduYXR1cmU6IE9ic2VydmFibGU8UmVtb3ZlU2lnbj4gPSB0aGlzLl9vYnNlcnZlci5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGdldCByZW1vdmVTaWduYXR1cmUoKTogT2JzZXJ2YWJsZTxSZW1vdmVTaWduPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbW92ZVNpZ25hdHVyZTtcbiAgfVxuXG4gIHJlbW92ZShpZDogUmVtb3ZlU2lnbik6IHZvaWQge1xuICAgIHRoaXMuX29ic2VydmVyLm5leHQoaWQpO1xuICB9XG59XG4iXX0=