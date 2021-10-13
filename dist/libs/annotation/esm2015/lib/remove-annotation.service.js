/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
export class RemoveAnnotationService {
    constructor() {
        this._observer = new Subject();
        this._removeAnnotation = this._observer.asObservable();
    }
    /**
     * @return {?}
     */
    get removeAnnotation() {
        return this._removeAnnotation;
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
    RemoveAnnotationService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    RemoveAnnotationService.prototype._removeAnnotation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWFubm90YXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9hbm5vdGF0aW9uLyIsInNvdXJjZXMiOlsibGliL3JlbW92ZS1hbm5vdGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHekMsTUFBTSxPQUFPLHVCQUF1QjtJQUlsQztRQUhRLGNBQVMsR0FBOEIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM1QyxzQkFBaUIsR0FBaUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUdqRyxDQUFDOzs7O0lBRUQsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsRUFBb0I7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNGOzs7Ozs7SUFiQyw0Q0FBNkQ7Ozs7O0lBQzdELG9EQUFpRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtSZW1vdmVBbm5vdGF0aW9ufSBmcm9tIFwiLi9hbm5vdGF0aW9uLW1vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlbW92ZUFubm90YXRpb25TZXJ2aWNlIHtcclxuICBwcml2YXRlIF9vYnNlcnZlcjogU3ViamVjdDxSZW1vdmVBbm5vdGF0aW9uPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfcmVtb3ZlQW5ub3RhdGlvbjogT2JzZXJ2YWJsZTxSZW1vdmVBbm5vdGF0aW9uPiA9IHRoaXMuX29ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIGdldCByZW1vdmVBbm5vdGF0aW9uKCk6IE9ic2VydmFibGU8UmVtb3ZlQW5ub3RhdGlvbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlbW92ZUFubm90YXRpb247XHJcbiAgfVxyXG5cclxuICByZW1vdmUoaWQ6IFJlbW92ZUFubm90YXRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuX29ic2VydmVyLm5leHQoaWQpO1xyXG4gIH1cclxufVxyXG4iXX0=