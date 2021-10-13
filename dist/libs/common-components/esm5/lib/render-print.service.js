/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from "rxjs";
var RenderPrintService = /** @class */ (function () {
    function RenderPrintService() {
        var _this = this;
        this._render = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            return _this._observer = observer;
        }));
        this._renderBlob = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            return _this._observerBlob = observer;
        }));
    }
    Object.defineProperty(RenderPrintService.prototype, "renderPrint", {
        get: /**
         * @return {?}
         */
        function () {
            return this._render;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} pages
     * @return {?}
     */
    RenderPrintService.prototype.changePages = /**
     * @param {?} pages
     * @return {?}
     */
    function (pages) {
        this._observer.next(pages);
    };
    Object.defineProperty(RenderPrintService.prototype, "renderPrintBlob", {
        get: /**
         * @return {?}
         */
        function () {
            return this._renderBlob;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} file
     * @return {?}
     */
    RenderPrintService.prototype.changeBlob = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this._observerBlob.next(file);
    };
    return RenderPrintService;
}());
export { RenderPrintService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RenderPrintService.prototype._render;
    /**
     * @type {?}
     * @private
     */
    RenderPrintService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    RenderPrintService.prototype._renderBlob;
    /**
     * @type {?}
     * @private
     */
    RenderPrintService.prototype._observerBlob;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLXByaW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcmVuZGVyLXByaW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFHMUM7SUFNRTtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFVBQVU7Ozs7UUFBQyxVQUFBLFFBQVE7WUFDcEMsT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVE7UUFBekIsQ0FBeUIsRUFBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxVQUFVOzs7O1FBQUMsVUFBQSxRQUFRO1lBQ3hDLE9BQUEsS0FBSSxDQUFDLGFBQWEsR0FBRyxRQUFRO1FBQTdCLENBQTZCLEVBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsc0JBQUksMkNBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7T0FBQTs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksS0FBa0I7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELHNCQUFJLCtDQUFlOzs7O1FBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7OztPQUFBOzs7OztJQUVELHVDQUFVOzs7O0lBQVYsVUFBVyxJQUFVO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7Ozs7Ozs7SUEzQkMscUNBQXlDOzs7OztJQUN6Qyx1Q0FBeUM7Ozs7O0lBQ3pDLHlDQUFzQzs7Ozs7SUFDdEMsMkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBPYnNlcnZlcn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7UGFnZU1vZGVsfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFJlbmRlclByaW50U2VydmljZSB7XG4gIHByaXZhdGUgX3JlbmRlcjogT2JzZXJ2YWJsZTxQYWdlTW9kZWxbXT47XG4gIHByaXZhdGUgX29ic2VydmVyOiBPYnNlcnZlcjxQYWdlTW9kZWxbXT47XG4gIHByaXZhdGUgX3JlbmRlckJsb2I6IE9ic2VydmFibGU8QmxvYj47XG4gIHByaXZhdGUgX29ic2VydmVyQmxvYjogT2JzZXJ2ZXI8QmxvYj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fcmVuZGVyID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT5cbiAgICAgIHRoaXMuX29ic2VydmVyID0gb2JzZXJ2ZXIpO1xuICAgIHRoaXMuX3JlbmRlckJsb2IgPSBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PlxuICAgICAgdGhpcy5fb2JzZXJ2ZXJCbG9iID0gb2JzZXJ2ZXIpO1xuICB9XG5cbiAgZ2V0IHJlbmRlclByaW50KCk6IE9ic2VydmFibGU8UGFnZU1vZGVsW10+IHtcbiAgICByZXR1cm4gdGhpcy5fcmVuZGVyO1xuICB9XG5cbiAgY2hhbmdlUGFnZXMocGFnZXM6IFBhZ2VNb2RlbFtdKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChwYWdlcyk7XG4gIH1cblxuICBnZXQgcmVuZGVyUHJpbnRCbG9iKCk6IE9ic2VydmFibGU8QmxvYj4ge1xuICAgIHJldHVybiB0aGlzLl9yZW5kZXJCbG9iO1xuICB9XG5cbiAgY2hhbmdlQmxvYihmaWxlOiBCbG9iKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJCbG9iLm5leHQoZmlsZSk7XG4gIH1cbn1cbiJdfQ==