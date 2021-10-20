/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
export class ActiveAnnotationService {
    constructor() {
        this._observer = new Subject();
        this._activeChange = this._observer.asObservable();
    }
    /**
     * @return {?}
     */
    get activeChange() {
        return this._activeChange;
    }
    /**
     * @param {?} annId
     * @return {?}
     */
    changeActive(annId) {
        this._observer.next(annId);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActiveAnnotationService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    ActiveAnnotationService.prototype._activeChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWFubm90YXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9hbm5vdGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2FjdGl2ZS1hbm5vdGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFekMsTUFBTSxPQUFPLHVCQUF1QjtJQUlsQztRQUhRLGNBQVMsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUF1QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBR25GLENBQUM7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7Ozs7OztJQWJDLDRDQUFtRDs7Ozs7SUFDbkQsZ0RBQW1GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuXG5leHBvcnQgY2xhc3MgQWN0aXZlQW5ub3RhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIF9vYnNlcnZlcjogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfYWN0aXZlQ2hhbmdlOiBPYnNlcnZhYmxlPG51bWJlcj4gPSB0aGlzLl9vYnNlcnZlci5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGdldCBhY3RpdmVDaGFuZ2UoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlQ2hhbmdlO1xuICB9XG5cbiAgY2hhbmdlQWN0aXZlKGFubklkOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KGFubklkKTtcbiAgfVxufVxuXG4iXX0=