/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
export class RemoveCanvasService {
    constructor() {
        this._observer = new Subject();
        this._removeCanvas = this._observer.asObservable();
    }
    /**
     * @return {?}
     */
    get removeCanvas() {
        return this._removeCanvas;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    remove(id) {
        this._observer.next(id);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    RemoveCanvasService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    RemoveCanvasService.prototype._removeCanvas;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWNhbnZhcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9yZW1vdmUtY2FudmFzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFekMsTUFBTSxPQUFPLG1CQUFtQjtJQUk5QjtRQUhRLGNBQVMsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUF1QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBR25GLENBQUM7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsRUFBVTtRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Q0FDRjs7Ozs7O0lBYkMsd0NBQW1EOzs7OztJQUNuRCw0Q0FBbUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVDYW52YXNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3JlbW92ZUNhbnZhczogT2JzZXJ2YWJsZTxudW1iZXI+ID0gdGhpcy5fb2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBnZXQgcmVtb3ZlQ2FudmFzKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbW92ZUNhbnZhcztcbiAgfVxuXG4gIHJlbW92ZShpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChpZCk7XG4gIH1cbn1cbiJdfQ==