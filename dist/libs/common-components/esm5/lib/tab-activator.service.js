/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
var TabActivatorService = /** @class */ (function () {
    function TabActivatorService() {
        this._observer = new Subject();
        this._activeTabChange = this._observer.asObservable();
    }
    Object.defineProperty(TabActivatorService.prototype, "activeTabChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._activeTabChange;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} tabId
     * @return {?}
     */
    TabActivatorService.prototype.changeActiveTab = /**
     * @param {?} tabId
     * @return {?}
     */
    function (tabId) {
        this._observer.next(tabId);
    };
    return TabActivatorService;
}());
export { TabActivatorService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TabActivatorService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    TabActivatorService.prototype._activeTabChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWFjdGl2YXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3RhYi1hY3RpdmF0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV6QztJQUlFO1FBSFEsY0FBUyxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2xDLHFCQUFnQixHQUF1QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBR3RGLENBQUM7SUFFRCxzQkFBSSxnREFBZTs7OztRQUFuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7OztPQUFBOzs7OztJQUVELDZDQUFlOzs7O0lBQWYsVUFBZ0IsS0FBYTtRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7Ozs7OztJQWJDLHdDQUFtRDs7Ozs7SUFDbkQsK0NBQXNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuXG5leHBvcnQgY2xhc3MgVGFiQWN0aXZhdG9yU2VydmljZSB7XG4gIHByaXZhdGUgX29ic2VydmVyOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9hY3RpdmVUYWJDaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuX29ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgZ2V0IGFjdGl2ZVRhYkNoYW5nZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVUYWJDaGFuZ2U7XG4gIH1cblxuICBjaGFuZ2VBY3RpdmVUYWIodGFiSWQ6IHN0cmluZykge1xuICAgIHRoaXMuX29ic2VydmVyLm5leHQodGFiSWQpO1xuICB9XG59XG4iXX0=