/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from "rxjs";
var ExceptionMessageService = /** @class */ (function () {
    function ExceptionMessageService() {
        this._observer = new BehaviorSubject('Server is not available');
        this._messageChange = this._observer.asObservable();
        this._httpEventObserver = new BehaviorSubject(null);
        this._httpEventChange = this._httpEventObserver.asObservable();
    }
    Object.defineProperty(ExceptionMessageService.prototype, "httpEventChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._httpEventChange;
        },
        enumerable: true,
        configurable: true
    });
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
     * @param {?} httpEvent
     * @return {?}
     */
    ExceptionMessageService.prototype.changeHttpEvent = /**
     * @param {?} httpEvent
     * @return {?}
     */
    function (httpEvent) {
        this._httpEventObserver.next(httpEvent);
    };
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
    /**
     * @type {?}
     * @private
     */
    ExceptionMessageService.prototype._httpEventObserver;
    /**
     * @type {?}
     * @private
     */
    ExceptionMessageService.prototype._httpEventChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9leGNlcHRpb24tbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBRWpEO0lBTUU7UUFMUSxjQUFTLEdBQTRCLElBQUksZUFBZSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDcEYsbUJBQWMsR0FBdUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuRSx1QkFBa0IsR0FBb0MsSUFBSSxlQUFlLENBQWlCLElBQUksQ0FBQyxDQUFDO1FBQ2hHLHFCQUFnQixHQUErQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHOUYsQ0FBQztJQUVELHNCQUFJLG9EQUFlOzs7O1FBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrREFBYTs7OztRQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTs7Ozs7SUFFRCxpREFBZTs7OztJQUFmLFVBQWdCLFNBQXlCO1FBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCwrQ0FBYTs7OztJQUFiLFVBQWMsT0FBZTtRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDOzs7Ozs7O0lBdkJDLDRDQUE0Rjs7Ozs7SUFDNUYsaURBQTJFOzs7OztJQUMzRSxxREFBd0c7Ozs7O0lBQ3hHLG1EQUE4RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwRXZlbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX29ic2VydmVyOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoJ1NlcnZlciBpcyBub3QgYXZhaWxhYmxlJyk7XHJcbiAgcHJpdmF0ZSBfbWVzc2FnZUNoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5fb2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHJpdmF0ZSBfaHR0cEV2ZW50T2JzZXJ2ZXI6IEJlaGF2aW9yU3ViamVjdDxIdHRwRXZlbnQ8YW55Pj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEh0dHBFdmVudDxhbnk+PihudWxsKTtcclxuICBwcml2YXRlIF9odHRwRXZlbnRDaGFuZ2U6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+ID0gdGhpcy5faHR0cEV2ZW50T2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgZ2V0IGh0dHBFdmVudENoYW5nZSgpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cEV2ZW50Q2hhbmdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1lc3NhZ2VDaGFuZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlQ2hhbmdlO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlSHR0cEV2ZW50KGh0dHBFdmVudDogSHR0cEV2ZW50PGFueT4pIHtcclxuICAgIHRoaXMuX2h0dHBFdmVudE9ic2VydmVyLm5leHQoaHR0cEV2ZW50KTtcclxuICB9XHJcblxyXG4gIGNoYW5nZU1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KG1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG4iXX0=