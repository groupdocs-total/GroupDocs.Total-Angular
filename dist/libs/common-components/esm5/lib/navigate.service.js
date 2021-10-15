/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
import { PagePreloadService } from "./page-preload.service";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "./page-preload.service";
var NavigateService = /** @class */ (function () {
    function NavigateService(_pagePreloadService) {
        this._pagePreloadService = _pagePreloadService;
        this._currentPage = 0;
        this._countPages = 0;
        this._observer = new Subject();
        this._navigate = this._observer;
    }
    Object.defineProperty(NavigateService.prototype, "navigate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._navigate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigateService.prototype, "countPages", {
        get: /**
         * @return {?}
         */
        function () {
            return this._countPages;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._countPages = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigateService.prototype, "currentPage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentPage;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._currentPage = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NavigateService.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        if (this._currentPage < this._countPages) {
            this._currentPage++;
            this.navigateTo(this._currentPage);
        }
    };
    /**
     * @return {?}
     */
    NavigateService.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        if (this._currentPage > 1) {
            this._currentPage--;
            this.navigateTo(this._currentPage);
        }
    };
    /**
     * @return {?}
     */
    NavigateService.prototype.toLastPage = /**
     * @return {?}
     */
    function () {
        this._currentPage = this._countPages;
        this.navigateTo(this._currentPage);
    };
    /**
     * @return {?}
     */
    NavigateService.prototype.toFirstPage = /**
     * @return {?}
     */
    function () {
        this._currentPage = 1;
        this.navigateTo(this._currentPage);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    NavigateService.prototype.navigateTo = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.currentPage = page;
        this._pagePreloadService.changeLastPageInView(page);
        this._observer.next(page);
    };
    NavigateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NavigateService.ctorParameters = function () { return [
        { type: PagePreloadService }
    ]; };
    /** @nocollapse */ NavigateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NavigateService_Factory() { return new NavigateService(i0.ɵɵinject(i1.PagePreloadService)); }, token: NavigateService, providedIn: "root" });
    return NavigateService;
}());
export { NavigateService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NavigateService.prototype._currentPage;
    /**
     * @type {?}
     * @private
     */
    NavigateService.prototype._countPages;
    /**
     * @type {?}
     * @private
     */
    NavigateService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    NavigateService.prototype._navigate;
    /**
     * @type {?}
     * @private
     */
    NavigateService.prototype._pagePreloadService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQThCLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFekM7SUFTRSx5QkFBb0IsbUJBQXVDO1FBQXZDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFMbkQsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsY0FBUyxHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO1FBQ25ELGNBQVMsR0FBdUIsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUd2RCxDQUFDO0lBRUQsc0JBQUkscUNBQVE7Ozs7UUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFVOzs7O1FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFFRCxVQUFlLEtBQWE7WUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSx3Q0FBVzs7OztRQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7Ozs7O1FBRUQsVUFBZ0IsS0FBYTtZQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FKQTs7OztJQU1ELGtDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Ozs7SUFFRCxvQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsb0NBQVU7Ozs7SUFBVixVQUFXLElBQVk7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQTVERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUxPLGtCQUFrQjs7OzBCQUQxQjtDQWlFQyxBQTdERCxJQTZEQztTQTFEWSxlQUFlOzs7Ozs7SUFDMUIsdUNBQXlCOzs7OztJQUN6QixzQ0FBd0I7Ozs7O0lBQ3hCLG9DQUEyRDs7Ozs7SUFDM0Qsb0NBQXVEOzs7OztJQUUzQyw4Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtQYWdlUHJlbG9hZFNlcnZpY2V9IGZyb20gXCIuL3BhZ2UtcHJlbG9hZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfY3VycmVudFBhZ2UgPSAwO1xyXG4gIHByaXZhdGUgX2NvdW50UGFnZXMgPSAwO1xyXG4gIHByaXZhdGUgX29ic2VydmVyOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XHJcbiAgcHJpdmF0ZSBfbmF2aWdhdGU6IE9ic2VydmFibGU8bnVtYmVyPiA9IHRoaXMuX29ic2VydmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlUHJlbG9hZFNlcnZpY2U6IFBhZ2VQcmVsb2FkU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hdmlnYXRlKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmF2aWdhdGU7XHJcbiAgfVxyXG5cclxuICBnZXQgY291bnRQYWdlcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvdW50UGFnZXM7XHJcbiAgfVxyXG5cclxuICBzZXQgY291bnRQYWdlcyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9jb3VudFBhZ2VzID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgY3VycmVudFBhZ2UoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50UGFnZTtcclxuICB9XHJcblxyXG4gIHNldCBjdXJyZW50UGFnZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9jdXJyZW50UGFnZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgbmV4dFBhZ2UoKSB7XHJcbiAgICBpZiAodGhpcy5fY3VycmVudFBhZ2UgPCB0aGlzLl9jb3VudFBhZ2VzKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRQYWdlKys7XHJcbiAgICAgIHRoaXMubmF2aWdhdGVUbyh0aGlzLl9jdXJyZW50UGFnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmV2UGFnZSgpIHtcclxuICAgIGlmICh0aGlzLl9jdXJyZW50UGFnZSA+IDEpIHtcclxuICAgICAgdGhpcy5fY3VycmVudFBhZ2UtLTtcclxuICAgICAgdGhpcy5uYXZpZ2F0ZVRvKHRoaXMuX2N1cnJlbnRQYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvTGFzdFBhZ2UoKSB7XHJcbiAgICB0aGlzLl9jdXJyZW50UGFnZSA9IHRoaXMuX2NvdW50UGFnZXM7XHJcbiAgICB0aGlzLm5hdmlnYXRlVG8odGhpcy5fY3VycmVudFBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgdG9GaXJzdFBhZ2UoKSB7XHJcbiAgICB0aGlzLl9jdXJyZW50UGFnZSA9IDE7XHJcbiAgICB0aGlzLm5hdmlnYXRlVG8odGhpcy5fY3VycmVudFBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVUbyhwYWdlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xyXG4gICAgdGhpcy5fcGFnZVByZWxvYWRTZXJ2aWNlLmNoYW5nZUxhc3RQYWdlSW5WaWV3KHBhZ2UpO1xyXG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChwYWdlKTtcclxuICB9XHJcbn1cclxuIl19