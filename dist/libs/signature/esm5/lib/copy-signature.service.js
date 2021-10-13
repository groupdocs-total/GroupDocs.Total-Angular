/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
var CopySignatureService = /** @class */ (function () {
    function CopySignatureService() {
        this._observer = new Subject();
        this._copySignature = this._observer.asObservable();
        this._observerChanges = new Subject();
        this._changesSignature = this._observerChanges.asObservable();
    }
    Object.defineProperty(CopySignatureService.prototype, "copySignature", {
        get: /**
         * @return {?}
         */
        function () {
            return this._copySignature;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} copySign
     * @return {?}
     */
    CopySignatureService.prototype.copy = /**
     * @param {?} copySign
     * @return {?}
     */
    function (copySign) {
        this._observer.next(copySign);
    };
    Object.defineProperty(CopySignatureService.prototype, "changesSignature", {
        get: /**
         * @return {?}
         */
        function () {
            return this._changesSignature;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    CopySignatureService.prototype.notifyChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this._observerChanges.next(changes);
    };
    return CopySignatureService;
}());
export { CopySignatureService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CopySignatureService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    CopySignatureService.prototype._copySignature;
    /**
     * @type {?}
     * @private
     */
    CopySignatureService.prototype._observerChanges;
    /**
     * @type {?}
     * @private
     */
    CopySignatureService.prototype._changesSignature;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS1zaWduYXR1cmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvY29weS1zaWduYXR1cmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUd6QztJQU1FO1FBTFEsY0FBUyxHQUFzQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3BDLG1CQUFjLEdBQXlCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUUscUJBQWdCLEdBQXlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDOUMsc0JBQWlCLEdBQTRCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUduRyxDQUFDO0lBRUQsc0JBQUksK0NBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsbUNBQUk7Ozs7SUFBSixVQUFLLFFBQWtCO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxzQkFBSSxrREFBZ0I7Ozs7UUFBcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTs7Ozs7SUFFRCw0Q0FBYTs7OztJQUFiLFVBQWMsT0FBb0I7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDOzs7Ozs7O0lBdkJDLHlDQUFxRDs7Ozs7SUFDckQsOENBQXNGOzs7OztJQUN0RixnREFBK0Q7Ozs7O0lBQy9ELGlEQUFtRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtDb3B5Q2hhbmdlcywgQ29weVNpZ259IGZyb20gXCIuL3NpZ25hdHVyZS1tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3B5U2lnbmF0dXJlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IFN1YmplY3Q8Q29weVNpZ24+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9jb3B5U2lnbmF0dXJlOiBPYnNlcnZhYmxlPENvcHlTaWduPiA9IHRoaXMuX29ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHByaXZhdGUgX29ic2VydmVyQ2hhbmdlczogU3ViamVjdDxDb3B5Q2hhbmdlcz4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2NoYW5nZXNTaWduYXR1cmU6IE9ic2VydmFibGU8Q29weUNoYW5nZXM+ID0gdGhpcy5fb2JzZXJ2ZXJDaGFuZ2VzLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIGdldCBjb3B5U2lnbmF0dXJlKCk6IE9ic2VydmFibGU8Q29weVNpZ24+IHtcclxuICAgIHJldHVybiB0aGlzLl9jb3B5U2lnbmF0dXJlO1xyXG4gIH1cclxuXHJcbiAgY29weShjb3B5U2lnbjogQ29weVNpZ24pOiB2b2lkIHtcclxuICAgIHRoaXMuX29ic2VydmVyLm5leHQoY29weVNpZ24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNoYW5nZXNTaWduYXR1cmUoKTogT2JzZXJ2YWJsZTxDb3B5Q2hhbmdlcz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZXNTaWduYXR1cmU7XHJcbiAgfVxyXG5cclxuICBub3RpZnlDaGFuZ2VzKGNoYW5nZXM6IENvcHlDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vYnNlcnZlckNoYW5nZXMubmV4dChjaGFuZ2VzKTtcclxuICB9XHJcbn1cclxuIl19