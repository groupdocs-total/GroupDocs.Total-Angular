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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLXByaW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcmVuZGVyLXByaW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFHMUMsTUFBTSxPQUFPLGtCQUFrQjtJQU03QjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxVQUFVOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUUsQ0FDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLEVBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksVUFBVTs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFLENBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxFQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxLQUFrQjtRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFVO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRjs7Ozs7O0lBM0JDLHFDQUF5Qzs7Ozs7SUFDekMsdUNBQXlDOzs7OztJQUN6Qyx5Q0FBc0M7Ozs7O0lBQ3RDLDJDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2ZXJ9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7UGFnZU1vZGVsfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJQcmludFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX3JlbmRlcjogT2JzZXJ2YWJsZTxQYWdlTW9kZWxbXT47XHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IE9ic2VydmVyPFBhZ2VNb2RlbFtdPjtcclxuICBwcml2YXRlIF9yZW5kZXJCbG9iOiBPYnNlcnZhYmxlPEJsb2I+O1xyXG4gIHByaXZhdGUgX29ic2VydmVyQmxvYjogT2JzZXJ2ZXI8QmxvYj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fcmVuZGVyID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT5cclxuICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBvYnNlcnZlcik7XHJcbiAgICB0aGlzLl9yZW5kZXJCbG9iID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT5cclxuICAgICAgdGhpcy5fb2JzZXJ2ZXJCbG9iID0gb2JzZXJ2ZXIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlbmRlclByaW50KCk6IE9ic2VydmFibGU8UGFnZU1vZGVsW10+IHtcclxuICAgIHJldHVybiB0aGlzLl9yZW5kZXI7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQYWdlcyhwYWdlczogUGFnZU1vZGVsW10pIHtcclxuICAgIHRoaXMuX29ic2VydmVyLm5leHQocGFnZXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlbmRlclByaW50QmxvYigpOiBPYnNlcnZhYmxlPEJsb2I+IHtcclxuICAgIHJldHVybiB0aGlzLl9yZW5kZXJCbG9iO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlQmxvYihmaWxlOiBCbG9iKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlckJsb2IubmV4dChmaWxlKTtcclxuICB9XHJcbn1cclxuIl19