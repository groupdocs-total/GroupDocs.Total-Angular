/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
var ActiveSignatureService = /** @class */ (function () {
    function ActiveSignatureService() {
        this._observer = new Subject();
        this._activeChange = this._observer.asObservable();
    }
    Object.defineProperty(ActiveSignatureService.prototype, "activeChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._activeChange;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} signId
     * @return {?}
     */
    ActiveSignatureService.prototype.changeActive = /**
     * @param {?} signId
     * @return {?}
     */
    function (signId) {
        this._observer.next(signId);
    };
    return ActiveSignatureService;
}());
export { ActiveSignatureService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActiveSignatureService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    ActiveSignatureService.prototype._activeChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXNpZ25hdHVyZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9hY3RpdmUtc2lnbmF0dXJlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFekM7SUFJRTtRQUhRLGNBQVMsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUF1QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBR25GLENBQUM7SUFFRCxzQkFBSSxnREFBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTs7Ozs7SUFFRCw2Q0FBWTs7OztJQUFaLFVBQWEsTUFBYztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7Ozs7OztJQWJDLDJDQUFtRDs7Ozs7SUFDbkQsK0NBQW1GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuXG5leHBvcnQgY2xhc3MgQWN0aXZlU2lnbmF0dXJlU2VydmljZSB7XG4gIHByaXZhdGUgX29ic2VydmVyOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9hY3RpdmVDaGFuZ2U6IE9ic2VydmFibGU8bnVtYmVyPiA9IHRoaXMuX29ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgZ2V0IGFjdGl2ZUNoYW5nZSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVDaGFuZ2U7XG4gIH1cblxuICBjaGFuZ2VBY3RpdmUoc2lnbklkOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KHNpZ25JZCk7XG4gIH1cbn1cbiJdfQ==