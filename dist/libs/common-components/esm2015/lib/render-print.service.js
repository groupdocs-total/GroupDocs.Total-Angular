/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from "rxjs";
export class RenderPrintService {
    constructor() {
        this._render = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => this._observer = observer));
        this._renderBlob = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => this._observerBlob = observer));
    }
    /**
     * @return {?}
     */
    get renderPrint() {
        return this._render;
    }
    /**
     * @param {?} pages
     * @return {?}
     */
    changePages(pages) {
        this._observer.next(pages);
    }
    /**
     * @return {?}
     */
    get renderPrintBlob() {
        return this._renderBlob;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    changeBlob(file) {
        this._observerBlob.next(file);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    RenderPrintService.prototype._render;
    /**
     * @type {?}
     * @private
     */
    RenderPrintService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    RenderPrintService.prototype._renderBlob;
    /**
     * @type {?}
     * @private
     */
    RenderPrintService.prototype._observerBlob;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLXByaW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcmVuZGVyLXByaW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFHMUMsTUFBTSxPQUFPLGtCQUFrQjtJQU03QjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxVQUFVOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUUsQ0FDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLEVBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksVUFBVTs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFLENBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxFQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxLQUFrQjtRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFVO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRjs7Ozs7O0lBM0JDLHFDQUF5Qzs7Ozs7SUFDekMsdUNBQXlDOzs7OztJQUN6Qyx5Q0FBc0M7Ozs7O0lBQ3RDLDJDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2ZXJ9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge1BhZ2VNb2RlbH0gZnJvbSBcIi4vZmlsZS5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBSZW5kZXJQcmludFNlcnZpY2Uge1xuICBwcml2YXRlIF9yZW5kZXI6IE9ic2VydmFibGU8UGFnZU1vZGVsW10+O1xuICBwcml2YXRlIF9vYnNlcnZlcjogT2JzZXJ2ZXI8UGFnZU1vZGVsW10+O1xuICBwcml2YXRlIF9yZW5kZXJCbG9iOiBPYnNlcnZhYmxlPEJsb2I+O1xuICBwcml2YXRlIF9vYnNlcnZlckJsb2I6IE9ic2VydmVyPEJsb2I+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3JlbmRlciA9IG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG9ic2VydmVyKTtcbiAgICB0aGlzLl9yZW5kZXJCbG9iID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT5cbiAgICAgIHRoaXMuX29ic2VydmVyQmxvYiA9IG9ic2VydmVyKTtcbiAgfVxuXG4gIGdldCByZW5kZXJQcmludCgpOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbmRlcjtcbiAgfVxuXG4gIGNoYW5nZVBhZ2VzKHBhZ2VzOiBQYWdlTW9kZWxbXSkge1xuICAgIHRoaXMuX29ic2VydmVyLm5leHQocGFnZXMpO1xuICB9XG5cbiAgZ2V0IHJlbmRlclByaW50QmxvYigpOiBPYnNlcnZhYmxlPEJsb2I+IHtcbiAgICByZXR1cm4gdGhpcy5fcmVuZGVyQmxvYjtcbiAgfVxuXG4gIGNoYW5nZUJsb2IoZmlsZTogQmxvYikge1xuICAgIHRoaXMuX29ic2VydmVyQmxvYi5uZXh0KGZpbGUpO1xuICB9XG59XG4iXX0=