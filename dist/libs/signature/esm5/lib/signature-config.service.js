/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Api, ConfigService } from "@groupdocs.examples.angular/common-components";
import { SignatureConfig } from "./signature-config";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@groupdocs.examples.angular/common-components";
var SignatureConfigService = /** @class */ (function () {
    function SignatureConfigService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._signatureConfig = new BehaviorSubject(new SignatureConfig());
        this._updatedConfig = this._signatureConfig.asObservable();
    }
    Object.defineProperty(SignatureConfigService.prototype, "updatedConfig", {
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
    SignatureConfigService.prototype.load = /**
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
            var configEndpoint = _this._config.getConfigEndpoint(Api.SIGNATURE_APP);
            _this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var signatureConfig = (/** @type {?} */ (response));
                _this._signatureConfig.next(signatureConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                reject("Could not load signature config: " + JSON.stringify(response));
            }));
        }));
    };
    SignatureConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SignatureConfigService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ SignatureConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SignatureConfigService_Factory() { return new SignatureConfigService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: SignatureConfigService, providedIn: "root" });
    return SignatureConfigService;
}());
export { SignatureConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SignatureConfigService.prototype._signatureConfig;
    /**
     * @type {?}
     * @private
     */
    SignatureConfigService.prototype._updatedConfig;
    /**
     * @type {?}
     * @private
     */
    SignatureConfigService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    SignatureConfigService.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9zaWduYXR1cmUtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFbkQ7SUFRRSxnQ0FBb0IsS0FBaUIsRUFBVSxPQUFzQjtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUg3RCxxQkFBZ0IsR0FBcUMsSUFBSSxlQUFlLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ2hHLG1CQUFjLEdBQWdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUczRixDQUFDO0lBRUQsc0JBQUksaURBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7Ozs7SUFFRCxxQ0FBSTs7O0lBQUo7UUFBQSxpQkFXQztRQVZDLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07O2dCQUNqQyxjQUFjLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO1lBQ3hFLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsUUFBeUI7O29CQUN2RixlQUFlLEdBQUcsbUJBQWlCLFFBQVEsRUFBQTtnQkFDakQsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDNUMsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLEVBQUMsQ0FBQyxLQUFLOzs7O1lBQUMsVUFBQyxRQUFhO2dCQUNyQixNQUFNLENBQUMsc0NBQW9DLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFHLENBQUMsQ0FBQztZQUN6RSxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBMUJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTk8sVUFBVTtnQkFDTCxhQUFhOzs7aUNBSDFCO0NBaUNDLEFBM0JELElBMkJDO1NBeEJZLHNCQUFzQjs7Ozs7O0lBRWpDLGtEQUF3Rzs7Ozs7SUFDeEcsZ0RBQTJGOzs7OztJQUUvRSx1Q0FBeUI7Ozs7O0lBQUUseUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7QXBpLCBDb25maWdTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7U2lnbmF0dXJlQ29uZmlnfSBmcm9tIFwiLi9zaWduYXR1cmUtY29uZmlnXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduYXR1cmVDb25maWdTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBfc2lnbmF0dXJlQ29uZmlnOiBCZWhhdmlvclN1YmplY3Q8U2lnbmF0dXJlQ29uZmlnPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobmV3IFNpZ25hdHVyZUNvbmZpZygpKTtcclxuICBwcml2YXRlIF91cGRhdGVkQ29uZmlnOiBPYnNlcnZhYmxlPFNpZ25hdHVyZUNvbmZpZz4gPSB0aGlzLl9zaWduYXR1cmVDb25maWcuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX2NvbmZpZzogQ29uZmlnU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgZ2V0IHVwZGF0ZWRDb25maWcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlZENvbmZpZztcclxuICB9XHJcblxyXG4gIGxvYWQoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBjb25maWdFbmRwb2ludCA9IHRoaXMuX2NvbmZpZy5nZXRDb25maWdFbmRwb2ludChBcGkuU0lHTkFUVVJFX0FQUCk7XHJcbiAgICAgIHRoaXMuX2h0dHAuZ2V0KGNvbmZpZ0VuZHBvaW50LCBBcGkuaHR0cE9wdGlvbnNKc29uKS50b1Byb21pc2UoKS50aGVuKChyZXNwb25zZTogU2lnbmF0dXJlQ29uZmlnKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2lnbmF0dXJlQ29uZmlnID0gPFNpZ25hdHVyZUNvbmZpZz5yZXNwb25zZTtcclxuICAgICAgICB0aGlzLl9zaWduYXR1cmVDb25maWcubmV4dChzaWduYXR1cmVDb25maWcpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICByZWplY3QoYENvdWxkIG5vdCBsb2FkIHNpZ25hdHVyZSBjb25maWc6ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpfWApO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=