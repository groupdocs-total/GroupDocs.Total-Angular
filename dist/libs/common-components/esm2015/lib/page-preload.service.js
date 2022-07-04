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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1wcmVsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcGFnZS1wcmVsb2FkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFFMUMsTUFBTSxPQUFPLGtCQUFrQjtJQUk3QjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxVQUFVOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUUsQ0FDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLEVBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsb0JBQW9CLENBQUMsSUFBWTtRQUMvQixJQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDO0NBQ0Y7Ozs7OztJQWpCQywyQ0FBbUQ7Ozs7O0lBQ25ELHVDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2ZXJ9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCBjbGFzcyBQYWdlUHJlbG9hZFNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IF9jaGVja1ByZWxvYWQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IE9ic2VydmVyPG51bWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fY2hlY2tQcmVsb2FkID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT5cbiAgICAgIHRoaXMuX29ic2VydmVyID0gb2JzZXJ2ZXIpO1xuICB9XG5cbiAgZ2V0IGNoZWNrUHJlbG9hZCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl9jaGVja1ByZWxvYWQ7XG4gIH1cblxuICBjaGFuZ2VMYXN0UGFnZUluVmlldyhwYWdlOiBudW1iZXIpIHtcbiAgICBpZih0aGlzLl9vYnNlcnZlcikge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChwYWdlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==