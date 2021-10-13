/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
var ActiveCanvasService = /** @class */ (function () {
    function ActiveCanvasService() {
        this._observer = new Subject();
        this._activeChange = this._observer.asObservable();
    }
    Object.defineProperty(ActiveCanvasService.prototype, "activeChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._activeChange;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} signId
     * @return {?}
     */
    ActiveCanvasService.prototype.changeActive = /**
     * @param {?} signId
     * @return {?}
     */
    function (signId) {
        this._observer.next(signId);
    };
    return ActiveCanvasService;
}());
export { ActiveCanvasService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActiveCanvasService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    ActiveCanvasService.prototype._activeChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNhbnZhcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9hY3RpdmUtY2FudmFzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFekM7SUFJRTtRQUhRLGNBQVMsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUF1QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBR25GLENBQUM7SUFFRCxzQkFBSSw2Q0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTs7Ozs7SUFFRCwwQ0FBWTs7OztJQUFaLFVBQWEsTUFBYztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7Ozs7OztJQWJDLHdDQUFtRDs7Ozs7SUFDbkQsNENBQW1GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFjdGl2ZUNhbnZhc1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgX29ic2VydmVyOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2FjdGl2ZUNoYW5nZTogT2JzZXJ2YWJsZTxudW1iZXI+ID0gdGhpcy5fb2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFjdGl2ZUNoYW5nZSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUNoYW5nZTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUFjdGl2ZShzaWduSWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChzaWduSWQpO1xyXG4gIH1cclxufVxyXG4iXX0=