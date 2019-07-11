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
        this._observer.next(page);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1wcmVsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcGFnZS1wcmVsb2FkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFFMUMsTUFBTSxPQUFPLGtCQUFrQjtJQUk3QjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxVQUFVOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUUsQ0FDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLEVBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsb0JBQW9CLENBQUMsSUFBWTtRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7Ozs7OztJQWZDLDJDQUFtRDs7Ozs7SUFDbkQsdUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBPYnNlcnZlcn0gZnJvbSBcInJ4anNcIjtcblxuZXhwb3J0IGNsYXNzIFBhZ2VQcmVsb2FkU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NoZWNrUHJlbG9hZDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICBwcml2YXRlIF9vYnNlcnZlcjogT2JzZXJ2ZXI8bnVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9jaGVja1ByZWxvYWQgPSBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PlxuICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBvYnNlcnZlcik7XG4gIH1cblxuICBnZXQgY2hlY2tQcmVsb2FkKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrUHJlbG9hZDtcbiAgfVxuXG4gIGNoYW5nZUxhc3RQYWdlSW5WaWV3KHBhZ2U6IG51bWJlcikge1xuICAgIHRoaXMuX29ic2VydmVyLm5leHQocGFnZSk7XG4gIH1cbn1cbiJdfQ==