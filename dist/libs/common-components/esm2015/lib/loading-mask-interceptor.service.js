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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1tYXNrLWludGVyY2VwdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbG9hZGluZy1tYXNrLWludGVyY2VwdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHekMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFBO0FBQ3ZDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7QUFLMUQsTUFBTSxPQUFPLDZCQUE2Qjs7OztJQUV4QyxZQUFvQixtQkFBdUM7UUFBdkMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtJQUMzRCxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjtRQUNoRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztjQUN2QyxRQUFROzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUUsUUFBUSxDQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBWkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSk8sa0JBQWtCOzs7Ozs7OztJQU9aLDREQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtmaW5hbGl6ZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXHJcbmltcG9ydCB7TG9hZGluZ01hc2tTZXJ2aWNlfSBmcm9tIFwiLi9sb2FkaW5nLW1hc2suc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2UgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2FkaW5nTWFza1NlcnZpY2U6IExvYWRpbmdNYXNrU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICB0aGlzLl9sb2FkaW5nTWFza1NlcnZpY2Uub25SZXF1ZXN0U3RhcnQocmVxKTtcclxuICAgIGNvbnN0IGNhbGxiYWNrID0gKCkgPT4gdGhpcy5fbG9hZGluZ01hc2tTZXJ2aWNlLm9uUmVxdWVzdEZpbmlzaChyZXEpO1xyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSkucGlwZSggZmluYWxpemUoIGNhbGxiYWNrKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==