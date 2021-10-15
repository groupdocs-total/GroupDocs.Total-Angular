/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
export class TabActivatorService {
    constructor() {
        this._observer = new Subject();
        this._activeTabChange = this._observer.asObservable();
    }
    /**
     * @return {?}
     */
    get activeTabChange() {
        return this._activeTabChange;
    }
    /**
     * @param {?} tabId
     * @return {?}
     */
    changeActiveTab(tabId) {
        this._observer.next(tabId);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWFjdGl2YXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3RhYi1hY3RpdmF0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV6QyxNQUFNLE9BQU8sbUJBQW1CO0lBSTlCO1FBSFEsY0FBUyxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2xDLHFCQUFnQixHQUF1QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBR3RGLENBQUM7Ozs7SUFFRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7Ozs7OztJQWJDLHdDQUFtRDs7Ozs7SUFDbkQsK0NBQXNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhYkFjdGl2YXRvclNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX29ic2VydmVyOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2FjdGl2ZVRhYkNoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5fb2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFjdGl2ZVRhYkNoYW5nZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVRhYkNoYW5nZTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUFjdGl2ZVRhYih0YWJJZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KHRhYklkKTtcclxuICB9XHJcbn1cclxuIl19