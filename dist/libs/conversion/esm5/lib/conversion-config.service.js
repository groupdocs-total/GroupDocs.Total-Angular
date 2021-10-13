/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ConversionConfig } from "./conversion-config";
import { Api, ConfigService } from "@groupdocs.examples.angular/common-components";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@groupdocs.examples.angular/common-components";
var ConversionConfigService = /** @class */ (function () {
    function ConversionConfigService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._conversionConfig = new BehaviorSubject(new ConversionConfig());
        this._updatedConfig = this._conversionConfig.asObservable();
    }
    Object.defineProperty(ConversionConfigService.prototype, "updatedConfig", {
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
    ConversionConfigService.prototype.load = /**
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
            var configEndpoint = _this._config.getConfigEndpoint(Api.CONVERSION_APP);
            _this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var conversionConfig = (/** @type {?} */ (response));
                _this._conversionConfig.next(conversionConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                reject("Could not load conversion config: " + JSON.stringify(response));
            }));
        }));
    };
    ConversionConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ConversionConfigService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ ConversionConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConversionConfigService_Factory() { return new ConversionConfigService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: ConversionConfigService, providedIn: "root" });
    return ConversionConfigService;
}());
export { ConversionConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConversionConfigService.prototype._conversionConfig;
    /**
     * @type {?}
     * @private
     */
    ConversionConfigService.prototype._updatedConfig;
    /**
     * @type {?}
     * @private
     */
    ConversionConfigService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ConversionConfigService.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb252ZXJzaW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnZlcnNpb24tY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQzs7OztBQUVqRDtJQU9FLGlDQUFvQixLQUFpQixFQUFVLE9BQXNCO1FBQWpELFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBSDdELHNCQUFpQixHQUFzQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUNuRyxtQkFBYyxHQUFpQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHN0YsQ0FBQztJQUVELHNCQUFJLGtEQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7OztPQUFBOzs7O0lBRUQsc0NBQUk7OztJQUFKO1FBQUEsaUJBV0M7UUFWQyxPQUFPLElBQUksT0FBTzs7Ozs7UUFBTyxVQUFDLE9BQU8sRUFBRSxNQUFNOztnQkFDakMsY0FBYyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztZQUN6RSxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLFFBQTBCOztvQkFDeEYsZ0JBQWdCLEdBQUcsbUJBQWtCLFFBQVEsRUFBQTtnQkFDbkQsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUM5QyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsRUFBQyxDQUFDLEtBQUs7Ozs7WUFBQyxVQUFDLFFBQWE7Z0JBQ3JCLE1BQU0sQ0FBQyx1Q0FBcUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUcsQ0FBQyxDQUFDO1lBQzFFLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkF6QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMTyxVQUFVO2dCQURMLGFBQWE7OztrQ0FGMUI7Q0FpQ0MsQUEzQkQsSUEyQkM7U0F4QlksdUJBQXVCOzs7Ozs7SUFDbEMsb0RBQTJHOzs7OztJQUMzRyxpREFBNkY7Ozs7O0lBRWpGLHdDQUF5Qjs7Ozs7SUFBRSwwQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnZlcnNpb25Db25maWd9IGZyb20gXCIuL2NvbnZlcnNpb24tY29uZmlnXCI7XHJcbmltcG9ydCB7QXBpLCBDb25maWdTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udmVyc2lvbkNvbmZpZ1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgX2NvbnZlcnNpb25Db25maWc6IEJlaGF2aW9yU3ViamVjdDxDb252ZXJzaW9uQ29uZmlnPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobmV3IENvbnZlcnNpb25Db25maWcoKSk7XHJcbiAgcHJpdmF0ZSBfdXBkYXRlZENvbmZpZzogT2JzZXJ2YWJsZTxDb252ZXJzaW9uQ29uZmlnPiA9IHRoaXMuX2NvbnZlcnNpb25Db25maWcuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX2NvbmZpZzogQ29uZmlnU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgZ2V0IHVwZGF0ZWRDb25maWcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlZENvbmZpZztcclxuICB9XHJcblxyXG4gIGxvYWQoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBjb25maWdFbmRwb2ludCA9IHRoaXMuX2NvbmZpZy5nZXRDb25maWdFbmRwb2ludChBcGkuQ09OVkVSU0lPTl9BUFApO1xyXG4gICAgICB0aGlzLl9odHRwLmdldChjb25maWdFbmRwb2ludCwgQXBpLmh0dHBPcHRpb25zSnNvbikudG9Qcm9taXNlKCkudGhlbigocmVzcG9uc2U6IENvbnZlcnNpb25Db25maWcpID0+IHtcclxuICAgICAgICBjb25zdCBjb252ZXJzaW9uQ29uZmlnID0gPENvbnZlcnNpb25Db25maWc+cmVzcG9uc2U7XHJcbiAgICAgICAgdGhpcy5fY29udmVyc2lvbkNvbmZpZy5uZXh0KGNvbnZlcnNpb25Db25maWcpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICByZWplY3QoYENvdWxkIG5vdCBsb2FkIGNvbnZlcnNpb24gY29uZmlnOiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlKX1gKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==