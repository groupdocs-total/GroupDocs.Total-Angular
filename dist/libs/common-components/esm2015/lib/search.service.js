/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
export class SearchService {
    constructor() {
        this._observer = new Subject();
        this._textChange = this._observer.asObservable();
        this._observerCurrent = new Subject();
        this._currentChange = this._observerCurrent.asObservable();
        this._observerTotal = new Subject();
        this._totalChange = this._observerTotal.asObservable();
    }
    /**
     * @return {?}
     */
    get textChange() {
        return this._textChange;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    setText(text) {
        this._observer.next(text);
    }
    /**
     * @return {?}
     */
    get currentChange() {
        return this._currentChange;
    }
    /**
     * @return {?}
     */
    get totalChange() {
        return this._totalChange;
    }
    /**
     * @param {?} current
     * @return {?}
     */
    setCurrent(current) {
        this._observerCurrent.next(current);
    }
    /**
     * @param {?} total
     * @return {?}
     */
    setTotal(total) {
        this._observerTotal.next(total);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype._textChange;
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype._observerCurrent;
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype._currentChange;
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype._observerTotal;
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype._totalChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFekMsTUFBTSxPQUFPLGFBQWE7SUFVeEI7UUFUUSxjQUFTLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbEMsZ0JBQVcsR0FBdUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV6RSxxQkFBZ0IsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN6QyxtQkFBYyxHQUF1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFbkYsbUJBQWMsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN2QyxpQkFBWSxHQUF1QixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBR3ZGLENBQUM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBZTtRQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGOzs7Ozs7SUFuQ0Msa0NBQW1EOzs7OztJQUNuRCxvQ0FBaUY7Ozs7O0lBRWpGLHlDQUEwRDs7Ozs7SUFDMUQsdUNBQTJGOzs7OztJQUUzRix1Q0FBd0Q7Ozs7O0lBQ3hELHFDQUF1RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9vYnNlcnZlcjogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IF90ZXh0Q2hhbmdlOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLl9vYnNlcnZlci5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJDdXJyZW50OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2N1cnJlbnRDaGFuZ2U6IE9ic2VydmFibGU8bnVtYmVyPiA9IHRoaXMuX29ic2VydmVyQ3VycmVudC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJUb3RhbDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IF90b3RhbENoYW5nZTogT2JzZXJ2YWJsZTxudW1iZXI+ID0gdGhpcy5fb2JzZXJ2ZXJUb3RhbC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBnZXQgdGV4dENoYW5nZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHRDaGFuZ2U7XHJcbiAgfVxyXG5cclxuICBzZXRUZXh0KHRleHQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dCh0ZXh0KTtcclxuICB9XHJcblxyXG4gIGdldCBjdXJyZW50Q2hhbmdlKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudENoYW5nZTtcclxuICB9XHJcblxyXG4gIGdldCB0b3RhbENoYW5nZSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsQ2hhbmdlO1xyXG4gIH1cclxuXHJcbiAgc2V0Q3VycmVudChjdXJyZW50OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX29ic2VydmVyQ3VycmVudC5uZXh0KGN1cnJlbnQpO1xyXG4gIH1cclxuXHJcbiAgc2V0VG90YWwodG90YWw6IG51bWJlcikge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZXJUb3RhbC5uZXh0KHRvdGFsKTtcclxuICB9XHJcbn1cclxuIl19