/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoadingMaskService } from "./loading-mask.service";
import * as i0 from "@angular/core";
import * as i1 from "./loading-mask.service";
export class LoadingMaskInterceptorService {
    /**
     * @param {?} _loadingMaskService
     */
    constructor(_loadingMaskService) {
        this._loadingMaskService = _loadingMaskService;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        this._loadingMaskService.onRequestStart(req);
        /** @type {?} */
        const callback = (/**
         * @return {?}
         */
        () => this._loadingMaskService.onRequestFinish(req));
        return next.handle(req).pipe(finalize(callback));
    }
}
LoadingMaskInterceptorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LoadingMaskInterceptorService.ctorParameters = () => [
    { type: LoadingMaskService }
];
/** @nocollapse */ LoadingMaskInterceptorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LoadingMaskInterceptorService_Factory() { return new LoadingMaskInterceptorService(i0.ɵɵinject(i1.LoadingMaskService)); }, token: LoadingMaskInterceptorService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoadingMaskInterceptorService.prototype._loadingMaskService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1tYXNrLWludGVyY2VwdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbG9hZGluZy1tYXNrLWludGVyY2VwdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHekMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFBO0FBQ3ZDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7QUFLMUQsTUFBTSxPQUFPLDZCQUE2Qjs7OztJQUV4QyxZQUFvQixtQkFBdUM7UUFBdkMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtJQUMzRCxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjtRQUNoRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztjQUN2QyxRQUFROzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUUsUUFBUSxDQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBWkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSk8sa0JBQWtCOzs7Ozs7OztJQU9aLDREQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3R9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtmaW5hbGl6ZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5pbXBvcnQge0xvYWRpbmdNYXNrU2VydmljZX0gZnJvbSBcIi4vbG9hZGluZy1tYXNrLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2UgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvYWRpbmdNYXNrU2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlKSB7XG4gIH1cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICB0aGlzLl9sb2FkaW5nTWFza1NlcnZpY2Uub25SZXF1ZXN0U3RhcnQocmVxKTtcbiAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHRoaXMuX2xvYWRpbmdNYXNrU2VydmljZS5vblJlcXVlc3RGaW5pc2gocmVxKTtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKS5waXBlKCBmaW5hbGl6ZSggY2FsbGJhY2spKTtcbiAgfVxufVxuIl19