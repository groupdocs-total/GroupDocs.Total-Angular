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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9leGNlcHRpb24tbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBRWpELE1BQU0sT0FBTyx1QkFBdUI7SUFPbEM7UUFOUSxjQUFTLEdBQTRCLElBQUksZUFBZSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDcEYsbUJBQWMsR0FBdUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVuRSx1QkFBa0IsR0FBb0MsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEYscUJBQWdCLEdBQStCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUc5RixDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxTQUF3QjtRQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDRjs7Ozs7O0lBeEJDLDRDQUE0Rjs7Ozs7SUFDNUYsaURBQTJFOzs7OztJQUUzRSxxREFBd0Y7Ozs7O0lBQ3hGLG1EQUE4RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFdmVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFeGNlcHRpb25NZXNzYWdlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnU2VydmVyIGlzIG5vdCBhdmFpbGFibGUnKTtcclxuICBwcml2YXRlIF9tZXNzYWdlQ2hhbmdlOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLl9vYnNlcnZlci5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJIdHRwRXZlbnQ6IEJlaGF2aW9yU3ViamVjdDxIdHRwRXZlbnQ8YW55Pj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG4gIHByaXZhdGUgX2h0dHBFdmVudENoYW5nZTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4gPSB0aGlzLl9vYnNlcnZlckh0dHBFdmVudC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBnZXQgbWVzc2FnZUNoYW5nZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VDaGFuZ2U7XHJcbiAgfVxyXG5cclxuICBnZXQgaHR0cEV2ZW50Q2hhbmdlKCk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwRXZlbnRDaGFuZ2U7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChtZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUh0dHBFdmVudChodHRwRXZlbnQ6SHR0cEV2ZW50PGFueT4pIHtcclxuICAgIHRoaXMuX29ic2VydmVySHR0cEV2ZW50Lm5leHQoaHR0cEV2ZW50KTtcclxuICB9XHJcbn1cclxuIl19