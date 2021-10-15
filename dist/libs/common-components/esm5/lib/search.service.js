/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
var SearchService = /** @class */ (function () {
    function SearchService() {
        this._observer = new Subject();
        this._textChange = this._observer.asObservable();
        this._observerCurrent = new Subject();
        this._currentChange = this._observerCurrent.asObservable();
        this._observerTotal = new Subject();
        this._totalChange = this._observerTotal.asObservable();
    }
    Object.defineProperty(SearchService.prototype, "textChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._textChange;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} text
     * @return {?}
     */
    SearchService.prototype.setText = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this._observer.next(text);
    };
    Object.defineProperty(SearchService.prototype, "currentChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "totalChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._totalChange;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} current
     * @return {?}
     */
    SearchService.prototype.setCurrent = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        this._observerCurrent.next(current);
    };
    /**
     * @param {?} total
     * @return {?}
     */
    SearchService.prototype.setTotal = /**
     * @param {?} total
     * @return {?}
     */
    function (total) {
        this._observerTotal.next(total);
    };
    return SearchService;
}());
export { SearchService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFekM7SUFVRTtRQVRRLGNBQVMsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNsQyxnQkFBVyxHQUF1QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXpFLHFCQUFnQixHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLG1CQUFjLEdBQXVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVuRixtQkFBYyxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3ZDLGlCQUFZLEdBQXVCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHdkYsQ0FBQztJQUVELHNCQUFJLHFDQUFVOzs7O1FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsK0JBQU87Ozs7SUFBUCxVQUFRLElBQVk7UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHNCQUFJLHdDQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0NBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7T0FBQTs7Ozs7SUFFRCxrQ0FBVTs7OztJQUFWLFVBQVcsT0FBZTtRQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQsZ0NBQVE7Ozs7SUFBUixVQUFTLEtBQWE7UUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXBDRCxJQW9DQzs7Ozs7OztJQW5DQyxrQ0FBbUQ7Ozs7O0lBQ25ELG9DQUFpRjs7Ozs7SUFFakYseUNBQTBEOzs7OztJQUMxRCx1Q0FBMkY7Ozs7O0lBRTNGLHVDQUF3RDs7Ozs7SUFDeEQscUNBQXVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX29ic2VydmVyOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3RleHRDaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuX29ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBwcml2YXRlIF9vYnNlcnZlckN1cnJlbnQ6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfY3VycmVudENoYW5nZTogT2JzZXJ2YWJsZTxudW1iZXI+ID0gdGhpcy5fb2JzZXJ2ZXJDdXJyZW50LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBwcml2YXRlIF9vYnNlcnZlclRvdGFsOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3RvdGFsQ2hhbmdlOiBPYnNlcnZhYmxlPG51bWJlcj4gPSB0aGlzLl9vYnNlcnZlclRvdGFsLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0Q2hhbmdlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dENoYW5nZTtcclxuICB9XHJcblxyXG4gIHNldFRleHQodGV4dDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KHRleHQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGN1cnJlbnRDaGFuZ2UoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcclxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50Q2hhbmdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRvdGFsQ2hhbmdlKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG90YWxDaGFuZ2U7XHJcbiAgfVxyXG5cclxuICBzZXRDdXJyZW50KGN1cnJlbnQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZXJDdXJyZW50Lm5leHQoY3VycmVudCk7XHJcbiAgfVxyXG5cclxuICBzZXRUb3RhbCh0b3RhbDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlclRvdGFsLm5leHQodG90YWwpO1xyXG4gIH1cclxufVxyXG4iXX0=