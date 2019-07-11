/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from "rxjs";
import { PagePreloadService } from "./page-preload.service";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "./page-preload.service";
var NavigateService = /** @class */ (function () {
    function NavigateService(_pagePreloadService) {
        var _this = this;
        this._pagePreloadService = _pagePreloadService;
        this._currentPage = 0;
        this._countPages = 0;
        this._navigate = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            return _this._observer = observer;
        }));
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
    NavigateService.prototype._navigate;
    /**
     * @type {?}
     * @private
     */
    NavigateService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    NavigateService.prototype._pagePreloadService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFXLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV6QztJQVNFLHlCQUFvQixtQkFBdUM7UUFBM0QsaUJBR0M7UUFIbUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUxuRCxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUt0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksVUFBVTs7OztRQUFDLFVBQUEsUUFBUTtZQUN0QyxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUTtRQUF6QixDQUF5QixFQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHNCQUFJLHFDQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBVTs7OztRQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7Ozs7O1FBRUQsVUFBZSxLQUFhO1lBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksd0NBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7OztRQUVELFVBQWdCLEtBQWE7WUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BSkE7Ozs7SUFNRCxrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7O0lBRUQsb0NBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELG9DQUFVOzs7O0lBQVYsVUFBVyxJQUFZO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOztnQkE5REYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMTyxrQkFBa0I7OzswQkFEMUI7Q0FtRUMsQUEvREQsSUErREM7U0E1RFksZUFBZTs7Ozs7O0lBQzFCLHVDQUF5Qjs7Ozs7SUFDekIsc0NBQXdCOzs7OztJQUN4QixvQ0FBK0M7Ozs7O0lBQy9DLG9DQUFvQzs7Ozs7SUFFeEIsOENBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBPYnNlcnZlcn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7UGFnZVByZWxvYWRTZXJ2aWNlfSBmcm9tIFwiLi9wYWdlLXByZWxvYWQuc2VydmljZVwiO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZVNlcnZpY2Uge1xuICBwcml2YXRlIF9jdXJyZW50UGFnZSA9IDA7XG4gIHByaXZhdGUgX2NvdW50UGFnZXMgPSAwO1xuICBwcml2YXRlIHJlYWRvbmx5IF9uYXZpZ2F0ZTogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICBwcml2YXRlIF9vYnNlcnZlcjogT2JzZXJ2ZXI8bnVtYmVyPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlUHJlbG9hZFNlcnZpY2U6IFBhZ2VQcmVsb2FkU2VydmljZSkge1xuICAgIHRoaXMuX25hdmlnYXRlID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT5cbiAgICAgIHRoaXMuX29ic2VydmVyID0gb2JzZXJ2ZXIpO1xuICB9XG5cbiAgZ2V0IG5hdmlnYXRlKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlO1xuICB9XG5cbiAgZ2V0IGNvdW50UGFnZXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY291bnRQYWdlcztcbiAgfVxuXG4gIHNldCBjb3VudFBhZ2VzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jb3VudFBhZ2VzID0gdmFsdWU7XG4gIH1cblxuICBnZXQgY3VycmVudFBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFBhZ2U7XG4gIH1cblxuICBzZXQgY3VycmVudFBhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2N1cnJlbnRQYWdlID0gdmFsdWU7XG4gIH1cblxuICBuZXh0UGFnZSgpIHtcbiAgICBpZiAodGhpcy5fY3VycmVudFBhZ2UgPCB0aGlzLl9jb3VudFBhZ2VzKSB7XG4gICAgICB0aGlzLl9jdXJyZW50UGFnZSsrO1xuICAgICAgdGhpcy5uYXZpZ2F0ZVRvKHRoaXMuX2N1cnJlbnRQYWdlKTtcbiAgICB9XG4gIH1cblxuICBwcmV2UGFnZSgpIHtcbiAgICBpZiAodGhpcy5fY3VycmVudFBhZ2UgPiAxKSB7XG4gICAgICB0aGlzLl9jdXJyZW50UGFnZS0tO1xuICAgICAgdGhpcy5uYXZpZ2F0ZVRvKHRoaXMuX2N1cnJlbnRQYWdlKTtcbiAgICB9XG4gIH1cblxuICB0b0xhc3RQYWdlKCkge1xuICAgIHRoaXMuX2N1cnJlbnRQYWdlID0gdGhpcy5fY291bnRQYWdlcztcbiAgICB0aGlzLm5hdmlnYXRlVG8odGhpcy5fY3VycmVudFBhZ2UpO1xuICB9XG5cbiAgdG9GaXJzdFBhZ2UoKSB7XG4gICAgdGhpcy5fY3VycmVudFBhZ2UgPSAxO1xuICAgIHRoaXMubmF2aWdhdGVUbyh0aGlzLl9jdXJyZW50UGFnZSk7XG4gIH1cblxuICBuYXZpZ2F0ZVRvKHBhZ2U6IG51bWJlcikge1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgIHRoaXMuX3BhZ2VQcmVsb2FkU2VydmljZS5jaGFuZ2VMYXN0UGFnZUluVmlldyhwYWdlKTtcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KHBhZ2UpO1xuICB9XG59XG4iXX0=