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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWFubm90YXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9hbm5vdGF0aW9uLyIsInNvdXJjZXMiOlsibGliL3JlbW92ZS1hbm5vdGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHekMsTUFBTSxPQUFPLHVCQUF1QjtJQUlsQztRQUhRLGNBQVMsR0FBOEIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM1QyxzQkFBaUIsR0FBaUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUdqRyxDQUFDOzs7O0lBRUQsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsRUFBb0I7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNGOzs7Ozs7SUFiQyw0Q0FBNkQ7Ozs7O0lBQzdELG9EQUFpRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7UmVtb3ZlQW5ub3RhdGlvbn0gZnJvbSBcIi4vYW5ub3RhdGlvbi1tb2RlbHNcIjtcblxuZXhwb3J0IGNsYXNzIFJlbW92ZUFubm90YXRpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IFN1YmplY3Q8UmVtb3ZlQW5ub3RhdGlvbj4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9yZW1vdmVBbm5vdGF0aW9uOiBPYnNlcnZhYmxlPFJlbW92ZUFubm90YXRpb24+ID0gdGhpcy5fb2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBnZXQgcmVtb3ZlQW5ub3RhdGlvbigpOiBPYnNlcnZhYmxlPFJlbW92ZUFubm90YXRpb24+IHtcbiAgICByZXR1cm4gdGhpcy5fcmVtb3ZlQW5ub3RhdGlvbjtcbiAgfVxuXG4gIHJlbW92ZShpZDogUmVtb3ZlQW5ub3RhdGlvbik6IHZvaWQge1xuICAgIHRoaXMuX29ic2VydmVyLm5leHQoaWQpO1xuICB9XG59XG4iXX0=