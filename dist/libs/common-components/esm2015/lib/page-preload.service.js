/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from "rxjs";
export class PagePreloadService {
    constructor() {
        this._checkPreload = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => this._observer = observer));
    }
    /**
     * @return {?}
     */
    get checkPreload() {
        return this._checkPreload;
    }
    /**
     * @param {?} page
     * @return {?}
     */
    changeLastPageInView(page) {
        if (this._observer) {
            this._observer.next(page);
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagePreloadService.prototype._checkPreload;
    /**
     * @type {?}
     * @private
     */
    PagePreloadService.prototype._observer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1wcmVsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcGFnZS1wcmVsb2FkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFFMUMsTUFBTSxPQUFPLGtCQUFrQjtJQUk3QjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxVQUFVOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUUsQ0FDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLEVBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsb0JBQW9CLENBQUMsSUFBWTtRQUMvQixJQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDO0NBQ0Y7Ozs7OztJQWpCQywyQ0FBbUQ7Ozs7O0lBQ25ELHVDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2ZXJ9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnZVByZWxvYWRTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9jaGVja1ByZWxvYWQ6IE9ic2VydmFibGU8bnVtYmVyPjtcclxuICBwcml2YXRlIF9vYnNlcnZlcjogT2JzZXJ2ZXI8bnVtYmVyPjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9jaGVja1ByZWxvYWQgPSBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PlxyXG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG9ic2VydmVyKTtcclxuICB9XHJcblxyXG4gIGdldCBjaGVja1ByZWxvYWQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcclxuICAgIHJldHVybiB0aGlzLl9jaGVja1ByZWxvYWQ7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VMYXN0UGFnZUluVmlldyhwYWdlOiBudW1iZXIpIHtcclxuICAgIGlmKHRoaXMuX29ic2VydmVyKSB7XHJcbiAgICAgIHRoaXMuX29ic2VydmVyLm5leHQocGFnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==