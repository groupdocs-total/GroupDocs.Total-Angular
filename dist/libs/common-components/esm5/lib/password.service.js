/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
var PasswordService = /** @class */ (function () {
    function PasswordService() {
        this._observer = new Subject();
        this._passChange = this._observer.asObservable();
    }
    Object.defineProperty(PasswordService.prototype, "passChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._passChange;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} pass
     * @return {?}
     */
    PasswordService.prototype.setPassword = /**
     * @param {?} pass
     * @return {?}
     */
    function (pass) {
        this._observer.next(pass);
    };
    return PasswordService;
}());
export { PasswordService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PasswordService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    PasswordService.prototype._passChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9wYXNzd29yZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWEsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRXpDO0lBSUU7UUFIUSxjQUFTLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbEMsZ0JBQVcsR0FBdUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUdqRixDQUFDO0lBRUQsc0JBQUksdUNBQVU7Ozs7UUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTs7Ozs7SUFFRCxxQ0FBVzs7OztJQUFYLFVBQVksSUFBWTtRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7Ozs7OztJQWJDLG9DQUFtRDs7Ozs7SUFDbkQsc0NBQWlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3Bhc3NDaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuX29ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgZ2V0IHBhc3NDaGFuZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc0NoYW5nZTtcbiAgfVxuXG4gIHNldFBhc3N3b3JkKHBhc3M6IHN0cmluZykge1xuICAgIHRoaXMuX29ic2VydmVyLm5leHQocGFzcyk7XG4gIH1cbn1cbiJdfQ==