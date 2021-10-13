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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXNpZ25hdHVyZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3Qtc2lnbmF0dXJlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHekMsTUFBTSxPQUFPLHNCQUFzQjtJQUlqQztRQUhRLGNBQVMsR0FBZ0MsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM5QyxxQkFBZ0IsR0FBbUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUdsRyxDQUFDOzs7O0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQXdCO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjs7Ozs7O0lBYkMsMkNBQStEOzs7OztJQUMvRCxrREFBa0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7RHJhZ2dhYmxlU2lnbmF0dXJlfSBmcm9tIFwiLi9zaWduYXR1cmUtbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0U2lnbmF0dXJlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IFN1YmplY3Q8RHJhZ2dhYmxlU2lnbmF0dXJlPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfc2VsZWN0U2lnbmF0dXJlOiBPYnNlcnZhYmxlPERyYWdnYWJsZVNpZ25hdHVyZT4gPSB0aGlzLl9vYnNlcnZlci5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0U2lnbmF0dXJlKCk6IE9ic2VydmFibGU8RHJhZ2dhYmxlU2lnbmF0dXJlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0U2lnbmF0dXJlO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0KHNpZ246IERyYWdnYWJsZVNpZ25hdHVyZSk6IHZvaWQge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChzaWduKTtcclxuICB9XHJcbn1cclxuIl19