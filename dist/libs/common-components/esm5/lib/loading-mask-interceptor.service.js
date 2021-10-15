/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoadingMaskService } from "./loading-mask.service";
import * as i0 from "@angular/core";
import * as i1 from "./loading-mask.service";
var LoadingMaskInterceptorService = /** @class */ (function () {
    function LoadingMaskInterceptorService(_loadingMaskService) {
        this._loadingMaskService = _loadingMaskService;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    LoadingMaskInterceptorService.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        var _this = this;
        this._loadingMaskService.onRequestStart(req);
        /** @type {?} */
        var callback = (/**
         * @return {?}
         */
        function () { return _this._loadingMaskService.onRequestFinish(req); });
        return next.handle(req).pipe(finalize(callback));
    };
    LoadingMaskInterceptorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LoadingMaskInterceptorService.ctorParameters = function () { return [
        { type: LoadingMaskService }
    ]; };
    /** @nocollapse */ LoadingMaskInterceptorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LoadingMaskInterceptorService_Factory() { return new LoadingMaskInterceptorService(i0.ɵɵinject(i1.LoadingMaskService)); }, token: LoadingMaskInterceptorService, providedIn: "root" });
    return LoadingMaskInterceptorService;
}());
export { LoadingMaskInterceptorService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoadingMaskInterceptorService.prototype._loadingMaskService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1tYXNrLWludGVyY2VwdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbG9hZGluZy1tYXNrLWludGVyY2VwdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHekMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFBO0FBQ3ZDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7QUFFMUQ7SUFLRSx1Q0FBb0IsbUJBQXVDO1FBQXZDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7SUFDM0QsQ0FBQzs7Ozs7O0lBRUQsaURBQVM7Ozs7O0lBQVQsVUFBVSxHQUFxQixFQUFFLElBQWlCO1FBQWxELGlCQUlDO1FBSEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7WUFDdkMsUUFBUTs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQTdDLENBQTZDLENBQUE7UUFDcEUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBRSxRQUFRLENBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDOztnQkFaRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpPLGtCQUFrQjs7O3dDQUoxQjtDQW1CQyxBQWJELElBYUM7U0FWWSw2QkFBNkI7Ozs7OztJQUU1Qiw0REFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3R9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7ZmluYWxpemV9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xyXG5pbXBvcnQge0xvYWRpbmdNYXNrU2VydmljZX0gZnJvbSBcIi4vbG9hZGluZy1tYXNrLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9hZGluZ01hc2tTZXJ2aWNlOiBMb2FkaW5nTWFza1NlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgdGhpcy5fbG9hZGluZ01hc2tTZXJ2aWNlLm9uUmVxdWVzdFN0YXJ0KHJlcSk7XHJcbiAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHRoaXMuX2xvYWRpbmdNYXNrU2VydmljZS5vblJlcXVlc3RGaW5pc2gocmVxKTtcclxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpLnBpcGUoIGZpbmFsaXplKCBjYWxsYmFjaykpO1xyXG4gIH1cclxufVxyXG4iXX0=