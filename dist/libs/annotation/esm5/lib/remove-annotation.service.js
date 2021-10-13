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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWFubm90YXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9hbm5vdGF0aW9uLyIsInNvdXJjZXMiOlsibGliL3JlbW92ZS1hbm5vdGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHekM7SUFJRTtRQUhRLGNBQVMsR0FBOEIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM1QyxzQkFBaUIsR0FBaUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUdqRyxDQUFDO0lBRUQsc0JBQUkscURBQWdCOzs7O1FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsd0NBQU07Ozs7SUFBTixVQUFPLEVBQW9CO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUFkRCxJQWNDOzs7Ozs7O0lBYkMsNENBQTZEOzs7OztJQUM3RCxvREFBaUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7UmVtb3ZlQW5ub3RhdGlvbn0gZnJvbSBcIi4vYW5ub3RhdGlvbi1tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW1vdmVBbm5vdGF0aW9uU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IFN1YmplY3Q8UmVtb3ZlQW5ub3RhdGlvbj4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3JlbW92ZUFubm90YXRpb246IE9ic2VydmFibGU8UmVtb3ZlQW5ub3RhdGlvbj4gPSB0aGlzLl9vYnNlcnZlci5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVtb3ZlQW5ub3RhdGlvbigpOiBPYnNlcnZhYmxlPFJlbW92ZUFubm90YXRpb24+IHtcclxuICAgIHJldHVybiB0aGlzLl9yZW1vdmVBbm5vdGF0aW9uO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKGlkOiBSZW1vdmVBbm5vdGF0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KGlkKTtcclxuICB9XHJcbn1cclxuIl19