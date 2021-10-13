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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLXNpZ25hdHVyZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9yZW1vdmUtc2lnbmF0dXJlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHekM7SUFJRTtRQUhRLGNBQVMsR0FBd0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN0QyxxQkFBZ0IsR0FBMkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUcxRixDQUFDO0lBRUQsc0JBQUksbURBQWU7Ozs7UUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTs7Ozs7SUFFRCx1Q0FBTTs7OztJQUFOLFVBQU8sRUFBYztRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7Ozs7OztJQWJDLDJDQUF1RDs7Ozs7SUFDdkQsa0RBQTBGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQge1JlbW92ZVNpZ259IGZyb20gXCIuL3NpZ25hdHVyZS1tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW1vdmVTaWduYXR1cmVTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9vYnNlcnZlcjogU3ViamVjdDxSZW1vdmVTaWduPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfcmVtb3ZlU2lnbmF0dXJlOiBPYnNlcnZhYmxlPFJlbW92ZVNpZ24+ID0gdGhpcy5fb2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlbW92ZVNpZ25hdHVyZSgpOiBPYnNlcnZhYmxlPFJlbW92ZVNpZ24+IHtcclxuICAgIHJldHVybiB0aGlzLl9yZW1vdmVTaWduYXR1cmU7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoaWQ6IFJlbW92ZVNpZ24pOiB2b2lkIHtcclxuICAgIHRoaXMuX29ic2VydmVyLm5leHQoaWQpO1xyXG4gIH1cclxufVxyXG4iXX0=