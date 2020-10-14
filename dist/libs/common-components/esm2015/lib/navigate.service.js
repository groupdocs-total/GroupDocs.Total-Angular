/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from "rxjs";
import { PagePreloadService } from "./page-preload.service";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "./page-preload.service";
export class NavigateService {
    /**
     * @param {?} _pagePreloadService
     */
    constructor(_pagePreloadService) {
        this._pagePreloadService = _pagePreloadService;
        this._currentPage = 0;
        this._countPages = 0;
        this._observer = new BehaviorSubject(null);
        this._navigate = this._observer.asObservable();
    }
    /**
     * @return {?}
     */
    get navigate() {
        return this._navigate;
    }
    /**
     * @return {?}
     */
    get countPages() {
        return this._countPages;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set countPages(value) {
        this._countPages = value;
    }
    /**
     * @return {?}
     */
    get currentPage() {
        return this._currentPage;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set currentPage(value) {
        this._currentPage = value;
    }
    /**
     * @return {?}
     */
    nextPage() {
        if (this._currentPage < this._countPages) {
            this._currentPage++;
            this.navigateTo(this._currentPage);
        }
    }
    /**
     * @return {?}
     */
    prevPage() {
        if (this._currentPage > 1) {
            this._currentPage--;
            this.navigateTo(this._currentPage);
        }
    }
    /**
     * @return {?}
     */
    toLastPage() {
        this._currentPage = this._countPages;
        this.navigateTo(this._currentPage);
    }
    /**
     * @return {?}
     */
    toFirstPage() {
        this._currentPage = 1;
        this.navigateTo(this._currentPage);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    navigateTo(page) {
        this.currentPage = page;
        this._pagePreloadService.changeLastPageInView(page);
        this._observer.next(page);
    }
}
NavigateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NavigateService.ctorParameters = () => [
    { type: PagePreloadService }
];
/** @nocollapse */ NavigateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NavigateService_Factory() { return new NavigateService(i0.ɵɵinject(i1.PagePreloadService)); }, token: NavigateService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUt6QyxNQUFNLE9BQU8sZUFBZTs7OztJQU0xQixZQUFvQixtQkFBdUM7UUFBdkMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUxuRCxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixjQUFTLEdBQTRCLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQ3ZFLGNBQVMsR0FBdUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUd0RSxDQUFDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxJQUFJLFVBQVUsQ0FBQyxLQUFhO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxJQUFJLFdBQVcsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBWTtRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7O1lBNURGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxPLGtCQUFrQjs7Ozs7Ozs7SUFPeEIsdUNBQXlCOzs7OztJQUN6QixzQ0FBd0I7Ozs7O0lBQ3hCLG9DQUErRTs7Ozs7SUFDL0Usb0NBQXNFOzs7OztJQUUxRCw4Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7UGFnZVByZWxvYWRTZXJ2aWNlfSBmcm9tIFwiLi9wYWdlLXByZWxvYWQuc2VydmljZVwiO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZVNlcnZpY2Uge1xuICBwcml2YXRlIF9jdXJyZW50UGFnZSA9IDA7XG4gIHByaXZhdGUgX2NvdW50UGFnZXMgPSAwO1xuICBwcml2YXRlIF9vYnNlcnZlcjogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4obnVsbCk7XG4gIHByaXZhdGUgX25hdmlnYXRlOiBPYnNlcnZhYmxlPG51bWJlcj4gPSB0aGlzLl9vYnNlcnZlci5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlUHJlbG9hZFNlcnZpY2U6IFBhZ2VQcmVsb2FkU2VydmljZSkge1xuICB9XG5cbiAgZ2V0IG5hdmlnYXRlKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlO1xuICB9XG5cbiAgZ2V0IGNvdW50UGFnZXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY291bnRQYWdlcztcbiAgfVxuXG4gIHNldCBjb3VudFBhZ2VzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jb3VudFBhZ2VzID0gdmFsdWU7XG4gIH1cblxuICBnZXQgY3VycmVudFBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFBhZ2U7XG4gIH1cblxuICBzZXQgY3VycmVudFBhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2N1cnJlbnRQYWdlID0gdmFsdWU7XG4gIH1cblxuICBuZXh0UGFnZSgpIHtcbiAgICBpZiAodGhpcy5fY3VycmVudFBhZ2UgPCB0aGlzLl9jb3VudFBhZ2VzKSB7XG4gICAgICB0aGlzLl9jdXJyZW50UGFnZSsrO1xuICAgICAgdGhpcy5uYXZpZ2F0ZVRvKHRoaXMuX2N1cnJlbnRQYWdlKTtcbiAgICB9XG4gIH1cblxuICBwcmV2UGFnZSgpIHtcbiAgICBpZiAodGhpcy5fY3VycmVudFBhZ2UgPiAxKSB7XG4gICAgICB0aGlzLl9jdXJyZW50UGFnZS0tO1xuICAgICAgdGhpcy5uYXZpZ2F0ZVRvKHRoaXMuX2N1cnJlbnRQYWdlKTtcbiAgICB9XG4gIH1cblxuICB0b0xhc3RQYWdlKCkge1xuICAgIHRoaXMuX2N1cnJlbnRQYWdlID0gdGhpcy5fY291bnRQYWdlcztcbiAgICB0aGlzLm5hdmlnYXRlVG8odGhpcy5fY3VycmVudFBhZ2UpO1xuICB9XG5cbiAgdG9GaXJzdFBhZ2UoKSB7XG4gICAgdGhpcy5fY3VycmVudFBhZ2UgPSAxO1xuICAgIHRoaXMubmF2aWdhdGVUbyh0aGlzLl9jdXJyZW50UGFnZSk7XG4gIH1cblxuICBuYXZpZ2F0ZVRvKHBhZ2U6IG51bWJlcikge1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgIHRoaXMuX3BhZ2VQcmVsb2FkU2VydmljZS5jaGFuZ2VMYXN0UGFnZUluVmlldyhwYWdlKTtcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KHBhZ2UpO1xuICB9XG59XG4iXX0=