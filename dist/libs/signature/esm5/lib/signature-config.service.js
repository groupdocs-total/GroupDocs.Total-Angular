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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9zaWduYXR1cmUtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFbkQ7SUFRRSxnQ0FBb0IsS0FBaUIsRUFBVSxPQUFzQjtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUg3RCxxQkFBZ0IsR0FBcUMsSUFBSSxlQUFlLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ2hHLG1CQUFjLEdBQWdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUczRixDQUFDO0lBRUQsc0JBQUksaURBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7Ozs7SUFFRCxxQ0FBSTs7O0lBQUo7UUFBQSxpQkFXQztRQVZDLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07O2dCQUNqQyxjQUFjLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO1lBQ3hFLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsUUFBeUI7O29CQUN2RixlQUFlLEdBQUcsbUJBQWlCLFFBQVEsRUFBQTtnQkFDakQsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDNUMsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLEVBQUMsQ0FBQyxLQUFLOzs7O1lBQUMsVUFBQyxRQUFhO2dCQUNyQixNQUFNLENBQUMsc0NBQW9DLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFHLENBQUMsQ0FBQztZQUN6RSxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBMUJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTk8sVUFBVTtnQkFDTCxhQUFhOzs7aUNBSDFCO0NBaUNDLEFBM0JELElBMkJDO1NBeEJZLHNCQUFzQjs7Ozs7O0lBRWpDLGtEQUF3Rzs7Ozs7SUFDeEcsZ0RBQTJGOzs7OztJQUUvRSx1Q0FBeUI7Ozs7O0lBQUUseUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7QXBpLCBDb25maWdTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge1NpZ25hdHVyZUNvbmZpZ30gZnJvbSBcIi4vc2lnbmF0dXJlLWNvbmZpZ1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTaWduYXR1cmVDb25maWdTZXJ2aWNlIHtcblxuICBwcml2YXRlIF9zaWduYXR1cmVDb25maWc6IEJlaGF2aW9yU3ViamVjdDxTaWduYXR1cmVDb25maWc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChuZXcgU2lnbmF0dXJlQ29uZmlnKCkpO1xuICBwcml2YXRlIF91cGRhdGVkQ29uZmlnOiBPYnNlcnZhYmxlPFNpZ25hdHVyZUNvbmZpZz4gPSB0aGlzLl9zaWduYXR1cmVDb25maWcuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBfY29uZmlnOiBDb25maWdTZXJ2aWNlKSB7XG4gIH1cblxuICBnZXQgdXBkYXRlZENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlZENvbmZpZztcbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGNvbmZpZ0VuZHBvaW50ID0gdGhpcy5fY29uZmlnLmdldENvbmZpZ0VuZHBvaW50KEFwaS5TSUdOQVRVUkVfQVBQKTtcbiAgICAgIHRoaXMuX2h0dHAuZ2V0KGNvbmZpZ0VuZHBvaW50LCBBcGkuaHR0cE9wdGlvbnNKc29uKS50b1Byb21pc2UoKS50aGVuKChyZXNwb25zZTogU2lnbmF0dXJlQ29uZmlnKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZ25hdHVyZUNvbmZpZyA9IDxTaWduYXR1cmVDb25maWc+cmVzcG9uc2U7XG4gICAgICAgIHRoaXMuX3NpZ25hdHVyZUNvbmZpZy5uZXh0KHNpZ25hdHVyZUNvbmZpZyk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pLmNhdGNoKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIHJlamVjdChgQ291bGQgbm90IGxvYWQgc2lnbmF0dXJlIGNvbmZpZzogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZSl9YCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19