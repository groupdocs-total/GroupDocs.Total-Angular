/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
export class RotationService {
    constructor() {
        this._observerRotationAngle = new Subject();
        this._rotationAngleChange = this._observerRotationAngle.asObservable();
    }
    /**
     * @return {?}
     */
    get rotationAngleChange() {
        return this._rotationAngleChange;
    }
    /**
     * @param {?} angle
     * @return {?}
     */
    setRotationAngle(angle) {
        this._observerRotationAngle.next(angle);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    RotationService.prototype._observerRotationAngle;
    /**
     * @type {?}
     * @private
     */
    RotationService.prototype._rotationAngleChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9yb3RhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWEsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRXpDLE1BQU0sT0FBTyxlQUFlO0lBSTFCO1FBSFEsMkJBQXNCLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFDL0MseUJBQW9CLEdBQXVCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUd2RyxDQUFDOzs7O0lBRUQsSUFBSSxtQkFBbUI7UUFDckIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUNGOzs7Ozs7SUFiQyxpREFBZ0U7Ozs7O0lBQ2hFLCtDQUF1RyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSb3RhdGlvblNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX29ic2VydmVyUm90YXRpb25BbmdsZTogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9yb3RhdGlvbkFuZ2xlQ2hhbmdlOiBPYnNlcnZhYmxlPG51bWJlcj4gPSB0aGlzLl9vYnNlcnZlclJvdGF0aW9uQW5nbGUuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJvdGF0aW9uQW5nbGVDaGFuZ2UoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcclxuICAgIHJldHVybiB0aGlzLl9yb3RhdGlvbkFuZ2xlQ2hhbmdlO1xyXG4gIH1cclxuXHJcbiAgc2V0Um90YXRpb25BbmdsZShhbmdsZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlclJvdGF0aW9uQW5nbGUubmV4dChhbmdsZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==