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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLXByaW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcmVuZGVyLXByaW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFHMUM7SUFNRTtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFVBQVU7Ozs7UUFBQyxVQUFBLFFBQVE7WUFDcEMsT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVE7UUFBekIsQ0FBeUIsRUFBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxVQUFVOzs7O1FBQUMsVUFBQSxRQUFRO1lBQ3hDLE9BQUEsS0FBSSxDQUFDLGFBQWEsR0FBRyxRQUFRO1FBQTdCLENBQTZCLEVBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsc0JBQUksMkNBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7T0FBQTs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksS0FBa0I7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELHNCQUFJLCtDQUFlOzs7O1FBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7OztPQUFBOzs7OztJQUVELHVDQUFVOzs7O0lBQVYsVUFBVyxJQUFVO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7Ozs7Ozs7SUEzQkMscUNBQXlDOzs7OztJQUN6Qyx1Q0FBeUM7Ozs7O0lBQ3pDLHlDQUFzQzs7Ozs7SUFDdEMsMkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBPYnNlcnZlcn0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtQYWdlTW9kZWx9IGZyb20gXCIuL2ZpbGUuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlclByaW50U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfcmVuZGVyOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbFtdPjtcclxuICBwcml2YXRlIF9vYnNlcnZlcjogT2JzZXJ2ZXI8UGFnZU1vZGVsW10+O1xyXG4gIHByaXZhdGUgX3JlbmRlckJsb2I6IE9ic2VydmFibGU8QmxvYj47XHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJCbG9iOiBPYnNlcnZlcjxCbG9iPjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9yZW5kZXIgPSBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PlxyXG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG9ic2VydmVyKTtcclxuICAgIHRoaXMuX3JlbmRlckJsb2IgPSBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PlxyXG4gICAgICB0aGlzLl9vYnNlcnZlckJsb2IgPSBvYnNlcnZlcik7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVuZGVyUHJpbnQoKTogT2JzZXJ2YWJsZTxQYWdlTW9kZWxbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlbmRlcjtcclxuICB9XHJcblxyXG4gIGNoYW5nZVBhZ2VzKHBhZ2VzOiBQYWdlTW9kZWxbXSkge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChwYWdlcyk7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVuZGVyUHJpbnRCbG9iKCk6IE9ic2VydmFibGU8QmxvYj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlbmRlckJsb2I7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VCbG9iKGZpbGU6IEJsb2IpIHtcclxuICAgIHRoaXMuX29ic2VydmVyQmxvYi5uZXh0KGZpbGUpO1xyXG4gIH1cclxufVxyXG4iXX0=