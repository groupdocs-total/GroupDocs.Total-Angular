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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFekMsTUFBTSxPQUFPLGFBQWE7SUFVeEI7UUFUUSxjQUFTLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbEMsZ0JBQVcsR0FBdUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV6RSxxQkFBZ0IsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN6QyxtQkFBYyxHQUF1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFbkYsbUJBQWMsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN2QyxpQkFBWSxHQUF1QixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBR3ZGLENBQUM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBZTtRQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGOzs7Ozs7SUFuQ0Msa0NBQW1EOzs7OztJQUNuRCxvQ0FBaUY7Ozs7O0lBRWpGLHlDQUEwRDs7Ozs7SUFDMUQsdUNBQTJGOzs7OztJQUUzRix1Q0FBd0Q7Ozs7O0lBQ3hELHFDQUF1RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcblxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlcnZpY2Uge1xuICBwcml2YXRlIF9vYnNlcnZlcjogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfdGV4dENoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5fb2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJDdXJyZW50OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9jdXJyZW50Q2hhbmdlOiBPYnNlcnZhYmxlPG51bWJlcj4gPSB0aGlzLl9vYnNlcnZlckN1cnJlbnQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJUb3RhbDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfdG90YWxDaGFuZ2U6IE9ic2VydmFibGU8bnVtYmVyPiA9IHRoaXMuX29ic2VydmVyVG90YWwuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBnZXQgdGV4dENoYW5nZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl90ZXh0Q2hhbmdlO1xuICB9XG5cbiAgc2V0VGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KHRleHQpO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRDaGFuZ2UoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudENoYW5nZTtcbiAgfVxuXG4gIGdldCB0b3RhbENoYW5nZSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl90b3RhbENoYW5nZTtcbiAgfVxuXG4gIHNldEN1cnJlbnQoY3VycmVudDogbnVtYmVyKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJDdXJyZW50Lm5leHQoY3VycmVudCk7XG4gIH1cblxuICBzZXRUb3RhbCh0b3RhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJUb3RhbC5uZXh0KHRvdGFsKTtcbiAgfVxufVxuIl19