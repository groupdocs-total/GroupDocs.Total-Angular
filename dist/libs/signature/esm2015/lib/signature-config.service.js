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
export class SignatureConfigService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._signatureConfig = new BehaviorSubject(new SignatureConfig());
        this._updatedConfig = this._signatureConfig.asObservable();
    }
    /**
     * @return {?}
     */
    get updatedConfig() {
        return this._updatedConfig;
    }
    /**
     * @return {?}
     */
    load() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const configEndpoint = this._config.getConfigEndpoint(Api.SIGNATURE_APP);
            this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                /** @type {?} */
                const signatureConfig = (/** @type {?} */ (response));
                this._signatureConfig.next(signatureConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                reject(`Could not load signature config: ${JSON.stringify(response)}`);
            }));
        }));
    }
}
SignatureConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SignatureConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ SignatureConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SignatureConfigService_Factory() { return new SignatureConfigService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: SignatureConfigService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9zaWduYXR1cmUtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFLbkQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFLakMsWUFBb0IsS0FBaUIsRUFBVSxPQUFzQjtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUg3RCxxQkFBZ0IsR0FBcUMsSUFBSSxlQUFlLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ2hHLG1CQUFjLEdBQWdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUczRixDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O2tCQUNyQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO1lBQ3hFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTs7OztZQUFDLENBQUMsUUFBeUIsRUFBRSxFQUFFOztzQkFDM0YsZUFBZSxHQUFHLG1CQUFpQixRQUFRLEVBQUE7Z0JBQ2pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQzVDLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxFQUFDLENBQUMsS0FBSzs7OztZQUFDLENBQUMsUUFBYSxFQUFFLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxvQ0FBb0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekUsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQTFCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOTyxVQUFVO1lBQ0wsYUFBYTs7Ozs7Ozs7SUFReEIsa0RBQXdHOzs7OztJQUN4RyxnREFBMkY7Ozs7O0lBRS9FLHVDQUF5Qjs7Ozs7SUFBRSx5Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHtBcGksIENvbmZpZ1NlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtTaWduYXR1cmVDb25maWd9IGZyb20gXCIuL3NpZ25hdHVyZS1jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZUNvbmZpZ1NlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIF9zaWduYXR1cmVDb25maWc6IEJlaGF2aW9yU3ViamVjdDxTaWduYXR1cmVDb25maWc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChuZXcgU2lnbmF0dXJlQ29uZmlnKCkpO1xyXG4gIHByaXZhdGUgX3VwZGF0ZWRDb25maWc6IE9ic2VydmFibGU8U2lnbmF0dXJlQ29uZmlnPiA9IHRoaXMuX3NpZ25hdHVyZUNvbmZpZy5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBfY29uZmlnOiBDb25maWdTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBnZXQgdXBkYXRlZENvbmZpZygpIHtcclxuICAgIHJldHVybiB0aGlzLl91cGRhdGVkQ29uZmlnO1xyXG4gIH1cclxuXHJcbiAgbG9hZCgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbmZpZ0VuZHBvaW50ID0gdGhpcy5fY29uZmlnLmdldENvbmZpZ0VuZHBvaW50KEFwaS5TSUdOQVRVUkVfQVBQKTtcclxuICAgICAgdGhpcy5faHR0cC5nZXQoY29uZmlnRW5kcG9pbnQsIEFwaS5odHRwT3B0aW9uc0pzb24pLnRvUHJvbWlzZSgpLnRoZW4oKHJlc3BvbnNlOiBTaWduYXR1cmVDb25maWcpID0+IHtcclxuICAgICAgICBjb25zdCBzaWduYXR1cmVDb25maWcgPSA8U2lnbmF0dXJlQ29uZmlnPnJlc3BvbnNlO1xyXG4gICAgICAgIHRoaXMuX3NpZ25hdHVyZUNvbmZpZy5uZXh0KHNpZ25hdHVyZUNvbmZpZyk7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9KS5jYXRjaCgocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIHJlamVjdChgQ291bGQgbm90IGxvYWQgc2lnbmF0dXJlIGNvbmZpZzogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZSl9YCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==