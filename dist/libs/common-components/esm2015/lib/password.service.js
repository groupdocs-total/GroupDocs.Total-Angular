/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
export class PasswordService {
    constructor() {
        this._observer = new Subject();
        this._passChange = this._observer.asObservable();
    }
    /**
     * @return {?}
     */
    get passChange() {
        return this._passChange;
    }
    /**
     * @param {?} pass
     * @return {?}
     */
    setPassword(pass) {
        this._observer.next(pass);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PasswordService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    PasswordService.prototype._passChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9wYXNzd29yZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWEsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRXpDLE1BQU0sT0FBTyxlQUFlO0lBSTFCO1FBSFEsY0FBUyxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2xDLGdCQUFXLEdBQXVCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHakYsQ0FBQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxJQUFZO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjs7Ozs7O0lBYkMsb0NBQW1EOzs7OztJQUNuRCxzQ0FBaUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCBjbGFzcyBQYXNzd29yZFNlcnZpY2Uge1xuICBwcml2YXRlIF9vYnNlcnZlcjogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfcGFzc0NoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5fb2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBnZXQgcGFzc0NoYW5nZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9wYXNzQ2hhbmdlO1xuICB9XG5cbiAgc2V0UGFzc3dvcmQocGFzczogc3RyaW5nKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChwYXNzKTtcbiAgfVxufVxuIl19