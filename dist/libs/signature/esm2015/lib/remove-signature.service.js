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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLXNpZ25hdHVyZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9yZW1vdmUtc2lnbmF0dXJlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHekMsTUFBTSxPQUFPLHNCQUFzQjtJQUlqQztRQUhRLGNBQVMsR0FBd0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN0QyxxQkFBZ0IsR0FBMkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUcxRixDQUFDOzs7O0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEVBQWM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNGOzs7Ozs7SUFiQywyQ0FBdUQ7Ozs7O0lBQ3ZELGtEQUEwRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7UmVtb3ZlU2lnbn0gZnJvbSBcIi4vc2lnbmF0dXJlLW1vZGVsc1wiO1xuXG5leHBvcnQgY2xhc3MgUmVtb3ZlU2lnbmF0dXJlU2VydmljZSB7XG4gIHByaXZhdGUgX29ic2VydmVyOiBTdWJqZWN0PFJlbW92ZVNpZ24+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfcmVtb3ZlU2lnbmF0dXJlOiBPYnNlcnZhYmxlPFJlbW92ZVNpZ24+ID0gdGhpcy5fb2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBnZXQgcmVtb3ZlU2lnbmF0dXJlKCk6IE9ic2VydmFibGU8UmVtb3ZlU2lnbj4ge1xuICAgIHJldHVybiB0aGlzLl9yZW1vdmVTaWduYXR1cmU7XG4gIH1cblxuICByZW1vdmUoaWQ6IFJlbW92ZVNpZ24pOiB2b2lkIHtcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KGlkKTtcbiAgfVxufVxuIl19