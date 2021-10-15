/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from "rxjs";
var UploadFilesService = /** @class */ (function () {
    function UploadFilesService() {
        var _this = this;
        this._uploadsChange = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            return _this._observer = observer;
        }));
    }
    Object.defineProperty(UploadFilesService.prototype, "uploadsChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._uploadsChange;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} filesList
     * @return {?}
     */
    UploadFilesService.prototype.changeFilesList = /**
     * @param {?} filesList
     * @return {?}
     */
    function (filesList) {
        this._observer.next(filesList);
    };
    return UploadFilesService;
}());
export { UploadFilesService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UploadFilesService.prototype._uploadsChange;
    /**
     * @type {?}
     * @private
     */
    UploadFilesService.prototype._observer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWZpbGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdXBsb2FkLWZpbGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFFMUM7SUFJRTtRQUFBLGlCQUdDO1FBRkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLFVBQVU7Ozs7UUFBQyxVQUFBLFFBQVE7WUFDM0MsT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVE7UUFBekIsQ0FBeUIsRUFBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxzQkFBSSw2Q0FBYTs7OztRQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTs7Ozs7SUFFRCw0Q0FBZTs7OztJQUFmLFVBQWdCLFNBQW1CO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7Ozs7Ozs7SUFmQyw0Q0FBNkM7Ozs7O0lBQzdDLHVDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2ZXJ9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVXBsb2FkRmlsZXNTZXJ2aWNlIHtcclxuICBwcml2YXRlIF91cGxvYWRzQ2hhbmdlOiBPYnNlcnZhYmxlPEZpbGVMaXN0PjtcclxuICBwcml2YXRlIF9vYnNlcnZlcjogT2JzZXJ2ZXI8RmlsZUxpc3Q+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3VwbG9hZHNDaGFuZ2UgPSBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PlxyXG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG9ic2VydmVyKTtcclxuICB9XHJcblxyXG4gIGdldCB1cGxvYWRzQ2hhbmdlKCk6IE9ic2VydmFibGU8RmlsZUxpc3Q+IHtcclxuICAgIHJldHVybiB0aGlzLl91cGxvYWRzQ2hhbmdlO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRmlsZXNMaXN0KGZpbGVzTGlzdDogRmlsZUxpc3QpIHtcclxuICAgIHRoaXMuX29ic2VydmVyLm5leHQoZmlsZXNMaXN0KTtcclxuICB9XHJcbn1cclxuIl19