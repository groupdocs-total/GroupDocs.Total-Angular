/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
export class SelectSignatureService {
    constructor() {
        this._observer = new Subject();
        this._selectSignature = this._observer.asObservable();
    }
    /**
     * @return {?}
     */
    get selectSignature() {
        return this._selectSignature;
    }
    /**
     * @param {?} sign
     * @return {?}
     */
    select(sign) {
        this._observer.next(sign);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXNpZ25hdHVyZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3Qtc2lnbmF0dXJlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHekMsTUFBTSxPQUFPLHNCQUFzQjtJQUlqQztRQUhRLGNBQVMsR0FBZ0MsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM5QyxxQkFBZ0IsR0FBbUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUdsRyxDQUFDOzs7O0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQXdCO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjs7Ozs7O0lBYkMsMkNBQStEOzs7OztJQUMvRCxrREFBa0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0RyYWdnYWJsZVNpZ25hdHVyZX0gZnJvbSBcIi4vc2lnbmF0dXJlLW1vZGVsc1wiO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0U2lnbmF0dXJlU2VydmljZSB7XG4gIHByaXZhdGUgX29ic2VydmVyOiBTdWJqZWN0PERyYWdnYWJsZVNpZ25hdHVyZT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9zZWxlY3RTaWduYXR1cmU6IE9ic2VydmFibGU8RHJhZ2dhYmxlU2lnbmF0dXJlPiA9IHRoaXMuX29ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgZ2V0IHNlbGVjdFNpZ25hdHVyZSgpOiBPYnNlcnZhYmxlPERyYWdnYWJsZVNpZ25hdHVyZT4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RTaWduYXR1cmU7XG4gIH1cblxuICBzZWxlY3Qoc2lnbjogRHJhZ2dhYmxlU2lnbmF0dXJlKTogdm9pZCB7XG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChzaWduKTtcbiAgfVxufVxuIl19