/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from "rxjs";
var ExceptionMessageService = /** @class */ (function () {
    function ExceptionMessageService() {
        this._observer = new BehaviorSubject('Server is not available');
        this._messageChange = this._observer.asObservable();
    }
    Object.defineProperty(ExceptionMessageService.prototype, "messageChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._messageChange;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} message
     * @return {?}
     */
    ExceptionMessageService.prototype.changeMessage = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this._observer.next(message);
    };
    return ExceptionMessageService;
}());
export { ExceptionMessageService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExceptionMessageService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    ExceptionMessageService.prototype._messageChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9leGNlcHRpb24tbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBRWpEO0lBSUU7UUFIUSxjQUFTLEdBQTRCLElBQUksZUFBZSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDcEYsbUJBQWMsR0FBdUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUczRSxDQUFDO0lBRUQsc0JBQUksa0RBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsK0NBQWE7Ozs7SUFBYixVQUFjLE9BQWU7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7Ozs7Ozs7SUFiQyw0Q0FBNEY7Ozs7O0lBQzVGLGlEQUEyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuXG5leHBvcnQgY2xhc3MgRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2Uge1xuICBwcml2YXRlIF9vYnNlcnZlcjogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCdTZXJ2ZXIgaXMgbm90IGF2YWlsYWJsZScpO1xuICBwcml2YXRlIF9tZXNzYWdlQ2hhbmdlOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLl9vYnNlcnZlci5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGdldCBtZXNzYWdlQ2hhbmdlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VDaGFuZ2U7XG4gIH1cblxuICBjaGFuZ2VNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuX29ic2VydmVyLm5leHQobWVzc2FnZSk7XG4gIH1cbn1cbiJdfQ==