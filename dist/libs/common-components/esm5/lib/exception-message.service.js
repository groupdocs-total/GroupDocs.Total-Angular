/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from "rxjs";
var ExceptionMessageService = /** @class */ (function () {
    function ExceptionMessageService() {
        this._observer = new BehaviorSubject('Server is not available');
        this._messageChange = this._observer.asObservable();
        this._observerHttpEvent = new BehaviorSubject(null);
        this._httpEventChange = this._observerHttpEvent.asObservable();
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
    /**
     * @param {?} httpEvent
     * @return {?}
     */
    ExceptionMessageService.prototype.changeHttpEvent = /**
     * @param {?} httpEvent
     * @return {?}
     */
    function (httpEvent) {
        this._observerHttpEvent.next(httpEvent);
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
    ExceptionMessageService.prototype._observerHttpEvent;
    /**
     * @type {?}
     * @private
     */
    ExceptionMessageService.prototype._httpEventChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9leGNlcHRpb24tbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBRWpEO0lBT0U7UUFOUSxjQUFTLEdBQTRCLElBQUksZUFBZSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDcEYsbUJBQWMsR0FBdUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVuRSx1QkFBa0IsR0FBb0MsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEYscUJBQWdCLEdBQStCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUc5RixDQUFDO0lBRUQsc0JBQUksa0RBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvREFBZTs7OztRQUFuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7OztPQUFBOzs7OztJQUVELCtDQUFhOzs7O0lBQWIsVUFBYyxPQUFlO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsaURBQWU7Ozs7SUFBZixVQUFnQixTQUF3QjtRQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7Ozs7Ozs7SUF4QkMsNENBQTRGOzs7OztJQUM1RixpREFBMkU7Ozs7O0lBRTNFLHFEQUF3Rjs7Ozs7SUFDeEYsbURBQThGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEV2ZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9vYnNlcnZlcjogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCdTZXJ2ZXIgaXMgbm90IGF2YWlsYWJsZScpO1xyXG4gIHByaXZhdGUgX21lc3NhZ2VDaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuX29ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBwcml2YXRlIF9vYnNlcnZlckh0dHBFdmVudDogQmVoYXZpb3JTdWJqZWN0PEh0dHBFdmVudDxhbnk+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XHJcbiAgcHJpdmF0ZSBfaHR0cEV2ZW50Q2hhbmdlOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiA9IHRoaXMuX29ic2VydmVySHR0cEV2ZW50LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIGdldCBtZXNzYWdlQ2hhbmdlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZUNoYW5nZTtcclxuICB9XHJcblxyXG4gIGdldCBodHRwRXZlbnRDaGFuZ2UoKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHBFdmVudENoYW5nZTtcclxuICB9XHJcblxyXG4gIGNoYW5nZU1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KG1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlSHR0cEV2ZW50KGh0dHBFdmVudDpIdHRwRXZlbnQ8YW55Pikge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZXJIdHRwRXZlbnQubmV4dChodHRwRXZlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=