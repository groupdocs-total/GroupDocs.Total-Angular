/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
var RemoveAnnotationService = /** @class */ (function () {
    function RemoveAnnotationService() {
        this._observer = new Subject();
        this._removeAnnotation = this._observer.asObservable();
    }
    Object.defineProperty(RemoveAnnotationService.prototype, "removeAnnotation", {
        get: /**
         * @return {?}
         */
        function () {
            return this._removeAnnotation;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} id
     * @return {?}
     */
    RemoveAnnotationService.prototype.remove = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this._observer.next(id);
    };
    return RemoveAnnotationService;
}());
export { RemoveAnnotationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RemoveAnnotationService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    RemoveAnnotationService.prototype._removeAnnotation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWFubm90YXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9hbm5vdGF0aW9uLyIsInNvdXJjZXMiOlsibGliL3JlbW92ZS1hbm5vdGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHekM7SUFJRTtRQUhRLGNBQVMsR0FBOEIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM1QyxzQkFBaUIsR0FBaUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUdqRyxDQUFDO0lBRUQsc0JBQUkscURBQWdCOzs7O1FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsd0NBQU07Ozs7SUFBTixVQUFPLEVBQW9CO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUFkRCxJQWNDOzs7Ozs7O0lBYkMsNENBQTZEOzs7OztJQUM3RCxvREFBaUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge1JlbW92ZUFubm90YXRpb259IGZyb20gXCIuL2Fubm90YXRpb24tbW9kZWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVBbm5vdGF0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgX29ic2VydmVyOiBTdWJqZWN0PFJlbW92ZUFubm90YXRpb24+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfcmVtb3ZlQW5ub3RhdGlvbjogT2JzZXJ2YWJsZTxSZW1vdmVBbm5vdGF0aW9uPiA9IHRoaXMuX29ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgZ2V0IHJlbW92ZUFubm90YXRpb24oKTogT2JzZXJ2YWJsZTxSZW1vdmVBbm5vdGF0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbW92ZUFubm90YXRpb247XG4gIH1cblxuICByZW1vdmUoaWQ6IFJlbW92ZUFubm90YXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KGlkKTtcbiAgfVxufVxuIl19