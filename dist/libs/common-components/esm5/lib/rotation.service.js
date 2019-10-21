/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
var RotationService = /** @class */ (function () {
    function RotationService() {
        this._observerRotationAngle = new Subject();
        this._rotationAngleChange = this._observerRotationAngle.asObservable();
    }
    Object.defineProperty(RotationService.prototype, "rotationAngleChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._rotationAngleChange;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} angle
     * @return {?}
     */
    RotationService.prototype.setRotationAngle = /**
     * @param {?} angle
     * @return {?}
     */
    function (angle) {
        this._observerRotationAngle.next(angle);
    };
    return RotationService;
}());
export { RotationService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9yb3RhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWEsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRXpDO0lBSUU7UUFIUSwyQkFBc0IsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMvQyx5QkFBb0IsR0FBdUIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBR3ZHLENBQUM7SUFFRCxzQkFBSSxnREFBbUI7Ozs7UUFBdkI7WUFDRSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTs7Ozs7SUFFRCwwQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsS0FBYTtRQUM1QixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFkRCxJQWNDOzs7Ozs7O0lBYkMsaURBQWdFOzs7OztJQUNoRSwrQ0FBdUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUm90YXRpb25TZXJ2aWNlIHtcclxuICBwcml2YXRlIF9vYnNlcnZlclJvdGF0aW9uQW5nbGU6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfcm90YXRpb25BbmdsZUNoYW5nZTogT2JzZXJ2YWJsZTxudW1iZXI+ID0gdGhpcy5fb2JzZXJ2ZXJSb3RhdGlvbkFuZ2xlLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIGdldCByb3RhdGlvbkFuZ2xlQ2hhbmdlKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcm90YXRpb25BbmdsZUNoYW5nZTtcclxuICB9XHJcblxyXG4gIHNldFJvdGF0aW9uQW5nbGUoYW5nbGU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZXJSb3RhdGlvbkFuZ2xlLm5leHQoYW5nbGUpO1xyXG4gIH1cclxufVxyXG4iXX0=