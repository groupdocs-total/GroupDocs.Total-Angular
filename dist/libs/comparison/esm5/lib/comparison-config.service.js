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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyaXNvbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21wYXJpc29uLyIsInNvdXJjZXMiOlsibGliL2NvbXBhcmlzb24tY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQzs7OztBQUVqRDtJQU9FLGlDQUFvQixLQUFpQixFQUFVLE9BQXNCO1FBQWpELFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBSDdELHNCQUFpQixHQUFzQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUNuRyxtQkFBYyxHQUFpQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHN0YsQ0FBQztJQUVELHNCQUFJLGtEQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7OztPQUFBOzs7O0lBRUQsc0NBQUk7OztJQUFKO1FBQUEsaUJBV0M7UUFWQyxPQUFPLElBQUksT0FBTzs7Ozs7UUFBTyxVQUFDLE9BQU8sRUFBRSxNQUFNOztnQkFDakMsY0FBYyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztZQUN6RSxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLFFBQTBCOztvQkFDeEYsZ0JBQWdCLEdBQUcsbUJBQWtCLFFBQVEsRUFBQTtnQkFDbkQsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUM5QyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsRUFBQyxDQUFDLEtBQUs7Ozs7WUFBQyxVQUFDLFFBQWE7Z0JBQ3JCLE1BQU0sQ0FBQyx1Q0FBcUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUcsQ0FBQyxDQUFDO1lBQzFFLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkF6QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMTyxVQUFVO2dCQURMLGFBQWE7OztrQ0FGMUI7Q0FpQ0MsQUEzQkQsSUEyQkM7U0F4QlksdUJBQXVCOzs7Ozs7SUFDbEMsb0RBQTJHOzs7OztJQUMzRyxpREFBNkY7Ozs7O0lBRWpGLHdDQUF5Qjs7Ozs7SUFBRSwwQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbXBhcmlzb25Db25maWd9IGZyb20gXCIuL2NvbXBhcmlzb24tY29uZmlnXCI7XHJcbmltcG9ydCB7QXBpLCBDb25maWdTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcGFyaXNvbkNvbmZpZ1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgX2NvbXBhcmlzb25Db25maWc6IEJlaGF2aW9yU3ViamVjdDxDb21wYXJpc29uQ29uZmlnPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobmV3IENvbXBhcmlzb25Db25maWcoKSk7XHJcbiAgcHJpdmF0ZSBfdXBkYXRlZENvbmZpZzogT2JzZXJ2YWJsZTxDb21wYXJpc29uQ29uZmlnPiA9IHRoaXMuX2NvbXBhcmlzb25Db25maWcuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX2NvbmZpZzogQ29uZmlnU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgZ2V0IHVwZGF0ZWRDb25maWcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlZENvbmZpZztcclxuICB9XHJcblxyXG4gIGxvYWQoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBjb25maWdFbmRwb2ludCA9IHRoaXMuX2NvbmZpZy5nZXRDb25maWdFbmRwb2ludChBcGkuQ09NUEFSSVNPTl9BUFApO1xyXG4gICAgICB0aGlzLl9odHRwLmdldChjb25maWdFbmRwb2ludCwgQXBpLmh0dHBPcHRpb25zSnNvbikudG9Qcm9taXNlKCkudGhlbigocmVzcG9uc2U6IENvbXBhcmlzb25Db25maWcpID0+IHtcclxuICAgICAgICBjb25zdCBjb21wYXJpc29uQ29uZmlnID0gPENvbXBhcmlzb25Db25maWc+cmVzcG9uc2U7XHJcbiAgICAgICAgdGhpcy5fY29tcGFyaXNvbkNvbmZpZy5uZXh0KGNvbXBhcmlzb25Db25maWcpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICByZWplY3QoYENvdWxkIG5vdCBsb2FkIGNvbXBhcmlzb24gY29uZmlnOiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlKX1gKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==