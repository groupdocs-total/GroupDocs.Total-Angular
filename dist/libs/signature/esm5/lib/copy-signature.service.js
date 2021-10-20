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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS1zaWduYXR1cmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvY29weS1zaWduYXR1cmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUd6QztJQU1FO1FBTFEsY0FBUyxHQUFzQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3BDLG1CQUFjLEdBQXlCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUUscUJBQWdCLEdBQXlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDOUMsc0JBQWlCLEdBQTRCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUduRyxDQUFDO0lBRUQsc0JBQUksK0NBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsbUNBQUk7Ozs7SUFBSixVQUFLLFFBQWtCO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxzQkFBSSxrREFBZ0I7Ozs7UUFBcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTs7Ozs7SUFFRCw0Q0FBYTs7OztJQUFiLFVBQWMsT0FBb0I7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDOzs7Ozs7O0lBdkJDLHlDQUFxRDs7Ozs7SUFDckQsOENBQXNGOzs7OztJQUN0RixnREFBK0Q7Ozs7O0lBQy9ELGlEQUFtRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7Q29weUNoYW5nZXMsIENvcHlTaWdufSBmcm9tIFwiLi9zaWduYXR1cmUtbW9kZWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBDb3B5U2lnbmF0dXJlU2VydmljZSB7XG4gIHByaXZhdGUgX29ic2VydmVyOiBTdWJqZWN0PENvcHlTaWduPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NvcHlTaWduYXR1cmU6IE9ic2VydmFibGU8Q29weVNpZ24+ID0gdGhpcy5fb2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgX29ic2VydmVyQ2hhbmdlczogU3ViamVjdDxDb3B5Q2hhbmdlcz4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9jaGFuZ2VzU2lnbmF0dXJlOiBPYnNlcnZhYmxlPENvcHlDaGFuZ2VzPiA9IHRoaXMuX29ic2VydmVyQ2hhbmdlcy5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGdldCBjb3B5U2lnbmF0dXJlKCk6IE9ic2VydmFibGU8Q29weVNpZ24+IHtcbiAgICByZXR1cm4gdGhpcy5fY29weVNpZ25hdHVyZTtcbiAgfVxuXG4gIGNvcHkoY29weVNpZ246IENvcHlTaWduKTogdm9pZCB7XG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChjb3B5U2lnbik7XG4gIH1cblxuICBnZXQgY2hhbmdlc1NpZ25hdHVyZSgpOiBPYnNlcnZhYmxlPENvcHlDaGFuZ2VzPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZXNTaWduYXR1cmU7XG4gIH1cblxuICBub3RpZnlDaGFuZ2VzKGNoYW5nZXM6IENvcHlDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJDaGFuZ2VzLm5leHQoY2hhbmdlcyk7XG4gIH1cbn1cbiJdfQ==