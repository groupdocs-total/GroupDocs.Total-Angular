/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from "rxjs";
var PagePreloadService = /** @class */ (function () {
    function PagePreloadService() {
        var _this = this;
        this._checkPreload = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            return _this._observer = observer;
        }));
    }
    Object.defineProperty(PagePreloadService.prototype, "checkPreload", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checkPreload;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} page
     * @return {?}
     */
    PagePreloadService.prototype.changeLastPageInView = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this._observer.next(page);
    };
    return PagePreloadService;
}());
export { PagePreloadService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1wcmVsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcGFnZS1wcmVsb2FkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFFMUM7SUFJRTtRQUFBLGlCQUdDO1FBRkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFVBQVU7Ozs7UUFBQyxVQUFBLFFBQVE7WUFDMUMsT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVE7UUFBekIsQ0FBeUIsRUFBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxzQkFBSSw0Q0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTs7Ozs7SUFFRCxpREFBb0I7Ozs7SUFBcEIsVUFBcUIsSUFBWTtRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDOzs7Ozs7O0lBZkMsMkNBQW1EOzs7OztJQUNuRCx1Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIE9ic2VydmVyfSBmcm9tIFwicnhqc1wiO1xuXG5leHBvcnQgY2xhc3MgUGFnZVByZWxvYWRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfY2hlY2tQcmVsb2FkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIHByaXZhdGUgX29ic2VydmVyOiBPYnNlcnZlcjxudW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2NoZWNrUHJlbG9hZCA9IG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG9ic2VydmVyKTtcbiAgfVxuXG4gIGdldCBjaGVja1ByZWxvYWQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tQcmVsb2FkO1xuICB9XG5cbiAgY2hhbmdlTGFzdFBhZ2VJblZpZXcocGFnZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChwYWdlKTtcbiAgfVxufVxuIl19