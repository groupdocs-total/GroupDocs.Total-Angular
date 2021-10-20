/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ComparisonConfig } from "./comparison-config";
import { Api, ConfigService } from "@groupdocs.examples.angular/common-components";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@groupdocs.examples.angular/common-components";
var ComparisonConfigService = /** @class */ (function () {
    function ComparisonConfigService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._comparisonConfig = new BehaviorSubject(new ComparisonConfig());
        this._updatedConfig = this._comparisonConfig.asObservable();
    }
    Object.defineProperty(ComparisonConfigService.prototype, "updatedConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this._updatedConfig;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ComparisonConfigService.prototype.load = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var configEndpoint = _this._config.getConfigEndpoint(Api.COMPARISON_APP);
            _this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var comparisonConfig = (/** @type {?} */ (response));
                _this._comparisonConfig.next(comparisonConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                reject("Could not load comparison config: " + JSON.stringify(response));
            }));
        }));
    };
    ComparisonConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ComparisonConfigService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ ComparisonConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ComparisonConfigService_Factory() { return new ComparisonConfigService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: ComparisonConfigService, providedIn: "root" });
    return ComparisonConfigService;
}());
export { ComparisonConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComparisonConfigService.prototype._comparisonConfig;
    /**
     * @type {?}
     * @private
     */
    ComparisonConfigService.prototype._updatedConfig;
    /**
     * @type {?}
     * @private
     */
    ComparisonConfigService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ComparisonConfigService.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyaXNvbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21wYXJpc29uLyIsInNvdXJjZXMiOlsibGliL2NvbXBhcmlzb24tY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQzs7OztBQUVqRDtJQU9FLGlDQUFvQixLQUFpQixFQUFVLE9BQXNCO1FBQWpELFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBSDdELHNCQUFpQixHQUFzQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUNuRyxtQkFBYyxHQUFpQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHN0YsQ0FBQztJQUVELHNCQUFJLGtEQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7OztPQUFBOzs7O0lBRUQsc0NBQUk7OztJQUFKO1FBQUEsaUJBV0M7UUFWQyxPQUFPLElBQUksT0FBTzs7Ozs7UUFBTyxVQUFDLE9BQU8sRUFBRSxNQUFNOztnQkFDakMsY0FBYyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztZQUN6RSxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLFFBQTBCOztvQkFDeEYsZ0JBQWdCLEdBQUcsbUJBQWtCLFFBQVEsRUFBQTtnQkFDbkQsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUM5QyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsRUFBQyxDQUFDLEtBQUs7Ozs7WUFBQyxVQUFDLFFBQWE7Z0JBQ3JCLE1BQU0sQ0FBQyx1Q0FBcUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUcsQ0FBQyxDQUFDO1lBQzFFLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkF6QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMTyxVQUFVO2dCQURMLGFBQWE7OztrQ0FGMUI7Q0FpQ0MsQUEzQkQsSUEyQkM7U0F4QlksdUJBQXVCOzs7Ozs7SUFDbEMsb0RBQTJHOzs7OztJQUMzRyxpREFBNkY7Ozs7O0lBRWpGLHdDQUF5Qjs7Ozs7SUFBRSwwQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21wYXJpc29uQ29uZmlnfSBmcm9tIFwiLi9jb21wYXJpc29uLWNvbmZpZ1wiO1xuaW1wb3J0IHtBcGksIENvbmZpZ1NlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tcGFyaXNvbkNvbmZpZ1NlcnZpY2Uge1xuICBwcml2YXRlIF9jb21wYXJpc29uQ29uZmlnOiBCZWhhdmlvclN1YmplY3Q8Q29tcGFyaXNvbkNvbmZpZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG5ldyBDb21wYXJpc29uQ29uZmlnKCkpO1xuICBwcml2YXRlIF91cGRhdGVkQ29uZmlnOiBPYnNlcnZhYmxlPENvbXBhcmlzb25Db25maWc+ID0gdGhpcy5fY29tcGFyaXNvbkNvbmZpZy5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIF9jb25maWc6IENvbmZpZ1NlcnZpY2UpIHtcbiAgfVxuXG4gIGdldCB1cGRhdGVkQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVkQ29uZmlnO1xuICB9XG5cbiAgbG9hZCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgY29uZmlnRW5kcG9pbnQgPSB0aGlzLl9jb25maWcuZ2V0Q29uZmlnRW5kcG9pbnQoQXBpLkNPTVBBUklTT05fQVBQKTtcbiAgICAgIHRoaXMuX2h0dHAuZ2V0KGNvbmZpZ0VuZHBvaW50LCBBcGkuaHR0cE9wdGlvbnNKc29uKS50b1Byb21pc2UoKS50aGVuKChyZXNwb25zZTogQ29tcGFyaXNvbkNvbmZpZykgPT4ge1xuICAgICAgICBjb25zdCBjb21wYXJpc29uQ29uZmlnID0gPENvbXBhcmlzb25Db25maWc+cmVzcG9uc2U7XG4gICAgICAgIHRoaXMuX2NvbXBhcmlzb25Db25maWcubmV4dChjb21wYXJpc29uQ29uZmlnKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgcmVqZWN0KGBDb3VsZCBub3QgbG9hZCBjb21wYXJpc29uIGNvbmZpZzogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZSl9YCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=