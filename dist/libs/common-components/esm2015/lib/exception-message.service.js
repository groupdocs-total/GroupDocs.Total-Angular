/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from "rxjs";
export class ExceptionMessageService {
    constructor() {
        this._observer = new BehaviorSubject('Server is not available');
        this._messageChange = this._observer.asObservable();
        this._observerHttpEvent = new BehaviorSubject(null);
        this._httpEventChange = this._observerHttpEvent.asObservable();
    }
    /**
     * @return {?}
     */
    get messageChange() {
        return this._messageChange;
    }
    /**
     * @return {?}
     */
    get httpEventChange() {
        return this._httpEventChange;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    changeMessage(message) {
        this._observer.next(message);
    }
    /**
     * @param {?} httpEvent
     * @return {?}
     */
    changeHttpEvent(httpEvent) {
        this._observerHttpEvent.next(httpEvent);
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
    ExceptionMessageService.prototype._observerHttpEvent;
    /**
     * @type {?}
     * @private
     */
    ExceptionMessageService.prototype._httpEventChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9leGNlcHRpb24tbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBRWpELE1BQU0sT0FBTyx1QkFBdUI7SUFPbEM7UUFOUSxjQUFTLEdBQTRCLElBQUksZUFBZSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDcEYsbUJBQWMsR0FBdUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVuRSx1QkFBa0IsR0FBb0MsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEYscUJBQWdCLEdBQStCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUc5RixDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxTQUF3QjtRQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDRjs7Ozs7O0lBeEJDLDRDQUE0Rjs7Ozs7SUFDNUYsaURBQTJFOzs7OztJQUUzRSxxREFBd0Y7Ozs7O0lBQ3hGLG1EQUE4RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFdmVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCBjbGFzcyBFeGNlcHRpb25NZXNzYWdlU2VydmljZSB7XG4gIHByaXZhdGUgX29ic2VydmVyOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoJ1NlcnZlciBpcyBub3QgYXZhaWxhYmxlJyk7XG4gIHByaXZhdGUgX21lc3NhZ2VDaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuX29ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHByaXZhdGUgX29ic2VydmVySHR0cEV2ZW50OiBCZWhhdmlvclN1YmplY3Q8SHR0cEV2ZW50PGFueT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgcHJpdmF0ZSBfaHR0cEV2ZW50Q2hhbmdlOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiA9IHRoaXMuX29ic2VydmVySHR0cEV2ZW50LmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgZ2V0IG1lc3NhZ2VDaGFuZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZUNoYW5nZTtcbiAgfVxuXG4gIGdldCBodHRwRXZlbnRDaGFuZ2UoKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwRXZlbnRDaGFuZ2U7XG4gIH1cblxuICBjaGFuZ2VNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuX29ic2VydmVyLm5leHQobWVzc2FnZSk7XG4gIH1cblxuICBjaGFuZ2VIdHRwRXZlbnQoaHR0cEV2ZW50Okh0dHBFdmVudDxhbnk+KSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJIdHRwRXZlbnQubmV4dChodHRwRXZlbnQpO1xuICB9XG59XG4iXX0=