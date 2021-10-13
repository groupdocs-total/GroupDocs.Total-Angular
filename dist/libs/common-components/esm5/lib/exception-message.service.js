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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9leGNlcHRpb24tbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBRWpEO0lBT0U7UUFOUSxjQUFTLEdBQTRCLElBQUksZUFBZSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDcEYsbUJBQWMsR0FBdUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVuRSx1QkFBa0IsR0FBb0MsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEYscUJBQWdCLEdBQStCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUc5RixDQUFDO0lBRUQsc0JBQUksa0RBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvREFBZTs7OztRQUFuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7OztPQUFBOzs7OztJQUVELCtDQUFhOzs7O0lBQWIsVUFBYyxPQUFlO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsaURBQWU7Ozs7SUFBZixVQUFnQixTQUF3QjtRQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7Ozs7Ozs7SUF4QkMsNENBQTRGOzs7OztJQUM1RixpREFBMkU7Ozs7O0lBRTNFLHFEQUF3Rjs7Ozs7SUFDeEYsbURBQThGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEV2ZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcblxuZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnU2VydmVyIGlzIG5vdCBhdmFpbGFibGUnKTtcbiAgcHJpdmF0ZSBfbWVzc2FnZUNoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5fb2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJIdHRwRXZlbnQ6IEJlaGF2aW9yU3ViamVjdDxIdHRwRXZlbnQ8YW55Pj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBwcml2YXRlIF9odHRwRXZlbnRDaGFuZ2U6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+ID0gdGhpcy5fb2JzZXJ2ZXJIdHRwRXZlbnQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBnZXQgbWVzc2FnZUNoYW5nZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlQ2hhbmdlO1xuICB9XG5cbiAgZ2V0IGh0dHBFdmVudENoYW5nZSgpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBFdmVudENoYW5nZTtcbiAgfVxuXG4gIGNoYW5nZU1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChtZXNzYWdlKTtcbiAgfVxuXG4gIGNoYW5nZUh0dHBFdmVudChodHRwRXZlbnQ6SHR0cEV2ZW50PGFueT4pIHtcbiAgICB0aGlzLl9vYnNlcnZlckh0dHBFdmVudC5uZXh0KGh0dHBFdmVudCk7XG4gIH1cbn1cbiJdfQ==