/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from "rxjs";
export class ExceptionMessageService {
    constructor() {
        this._observer = new BehaviorSubject('Server is not available');
        this._messageChange = this._observer.asObservable();
        this._httpEventObserver = new BehaviorSubject(null);
        this._httpEventChange = this._httpEventObserver.asObservable();
    }
    /**
     * @return {?}
     */
    get httpEventChange() {
        return this._httpEventChange;
    }
    /**
     * @return {?}
     */
    get messageChange() {
        return this._messageChange;
    }
    /**
     * @param {?} httpEvent
     * @return {?}
     */
    changeHttpEvent(httpEvent) {
        this._httpEventObserver.next(httpEvent);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    changeMessage(message) {
        this._observer.next(message);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9leGNlcHRpb24tbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBRWpELE1BQU0sT0FBTyx1QkFBdUI7SUFNbEM7UUFMUSxjQUFTLEdBQTRCLElBQUksZUFBZSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDcEYsbUJBQWMsR0FBdUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuRSx1QkFBa0IsR0FBb0MsSUFBSSxlQUFlLENBQWlCLElBQUksQ0FBQyxDQUFDO1FBQ2hHLHFCQUFnQixHQUErQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHOUYsQ0FBQzs7OztJQUVELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLFNBQXlCO1FBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0Y7Ozs7OztJQXZCQyw0Q0FBNEY7Ozs7O0lBQzVGLGlEQUEyRTs7Ozs7SUFDM0UscURBQXdHOzs7OztJQUN4RyxtREFBOEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEV2ZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9vYnNlcnZlcjogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCdTZXJ2ZXIgaXMgbm90IGF2YWlsYWJsZScpO1xyXG4gIHByaXZhdGUgX21lc3NhZ2VDaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuX29ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHByaXZhdGUgX2h0dHBFdmVudE9ic2VydmVyOiBCZWhhdmlvclN1YmplY3Q8SHR0cEV2ZW50PGFueT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxIdHRwRXZlbnQ8YW55Pj4obnVsbCk7XHJcbiAgcHJpdmF0ZSBfaHR0cEV2ZW50Q2hhbmdlOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiA9IHRoaXMuX2h0dHBFdmVudE9ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIGdldCBodHRwRXZlbnRDaGFuZ2UoKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHBFdmVudENoYW5nZTtcclxuICB9XHJcblxyXG4gIGdldCBtZXNzYWdlQ2hhbmdlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZUNoYW5nZTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUh0dHBFdmVudChodHRwRXZlbnQ6IEh0dHBFdmVudDxhbnk+KSB7XHJcbiAgICB0aGlzLl9odHRwRXZlbnRPYnNlcnZlci5uZXh0KGh0dHBFdmVudCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChtZXNzYWdlKTtcclxuICB9XHJcbn1cclxuIl19