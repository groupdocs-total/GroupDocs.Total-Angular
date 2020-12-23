/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import * as i0 from "@angular/core";
var EditHtmlService = /** @class */ (function () {
    function EditHtmlService() {
        this._observer = new Subject();
        this._htmlContent = this._observer.asObservable();
    }
    Object.defineProperty(EditHtmlService.prototype, "observer", {
        get: /**
         * @return {?}
         */
        function () {
            return this._observer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditHtmlService.prototype, "htmlContent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._htmlContent;
        },
        enumerable: true,
        configurable: true
    });
    EditHtmlService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EditHtmlService.ctorParameters = function () { return []; };
    /** @nocollapse */ EditHtmlService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EditHtmlService_Factory() { return new EditHtmlService(); }, token: EditHtmlService, providedIn: "root" });
    return EditHtmlService;
}());
export { EditHtmlService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EditHtmlService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    EditHtmlService.prototype._htmlContent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1odG1sLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZWRpdC1odG1sLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFFekM7SUFPRTtRQUhRLGNBQVMsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNsQyxpQkFBWSxHQUF1QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBR2xGLENBQUM7SUFFRCxzQkFBSSxxQ0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0NBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7T0FBQTs7Z0JBaEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzBCQUxEO0NBcUJDLEFBbEJELElBa0JDO1NBZlksZUFBZTs7Ozs7O0lBQzFCLG9DQUFtRDs7Ozs7SUFDbkQsdUNBQWtGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRWRpdEh0bWxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2h0bWxDb250ZW50OiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLl9vYnNlcnZlci5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGdldCBvYnNlcnZlcigpOiBTdWJqZWN0PHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9vYnNlcnZlcjtcbiAgfVxuXG4gIGdldCBodG1sQ29udGVudCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9odG1sQ29udGVudDtcbiAgfVxuXG59XG4iXX0=