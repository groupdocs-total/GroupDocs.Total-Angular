/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
export class RemoveSignatureService {
    constructor() {
        this._observer = new Subject();
        this._removeSignature = this._observer.asObservable();
    }
    /**
     * @return {?}
     */
    get removeSignature() {
        return this._removeSignature;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    remove(id) {
        this._observer.next(id);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLXNpZ25hdHVyZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9yZW1vdmUtc2lnbmF0dXJlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHekMsTUFBTSxPQUFPLHNCQUFzQjtJQUlqQztRQUhRLGNBQVMsR0FBd0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN0QyxxQkFBZ0IsR0FBMkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUcxRixDQUFDOzs7O0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEVBQWM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNGOzs7Ozs7SUFiQywyQ0FBdUQ7Ozs7O0lBQ3ZELGtEQUEwRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtSZW1vdmVTaWdufSBmcm9tIFwiLi9zaWduYXR1cmUtbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVtb3ZlU2lnbmF0dXJlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IFN1YmplY3Q8UmVtb3ZlU2lnbj4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3JlbW92ZVNpZ25hdHVyZTogT2JzZXJ2YWJsZTxSZW1vdmVTaWduPiA9IHRoaXMuX29ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIGdldCByZW1vdmVTaWduYXR1cmUoKTogT2JzZXJ2YWJsZTxSZW1vdmVTaWduPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVtb3ZlU2lnbmF0dXJlO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKGlkOiBSZW1vdmVTaWduKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KGlkKTtcclxuICB9XHJcbn1cclxuIl19