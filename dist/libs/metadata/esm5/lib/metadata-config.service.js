/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MetadataConfig } from "./metadata-config";
import { Api, ConfigService } from "@groupdocs.examples.angular/common-components";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@groupdocs.examples.angular/common-components";
var MetadataConfigService = /** @class */ (function () {
    function MetadataConfigService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._metadataConfig = new BehaviorSubject(new MetadataConfig());
        this._updatedConfig = this._metadataConfig.asObservable();
    }
    Object.defineProperty(MetadataConfigService.prototype, "updatedConfig", {
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
    MetadataConfigService.prototype.load = /**
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
            var configEndpoint = _this._config.getConfigEndpoint(Api.METADATA_APP);
            _this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var metadataConfig = (/** @type {?} */ (response));
                _this._metadataConfig.next(metadataConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                reject("Could not load metadata config: " + JSON.stringify(response));
            }));
        }));
    };
    MetadataConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MetadataConfigService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ MetadataConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MetadataConfigService_Factory() { return new MetadataConfigService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: MetadataConfigService, providedIn: "root" });
    return MetadataConfigService;
}());
export { MetadataConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MetadataConfigService.prototype._metadataConfig;
    /**
     * @type {?}
     * @private
     */
    MetadataConfigService.prototype._updatedConfig;
    /**
     * @type {?}
     * @private
     */
    MetadataConfigService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    MetadataConfigService.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvbWV0YWRhdGEvIiwic291cmNlcyI6WyJsaWIvbWV0YWRhdGEtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxHQUFHLEVBQUUsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7Ozs7QUFFakQ7SUFPRSwrQkFBb0IsS0FBaUIsRUFBVSxPQUFzQjtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUg3RCxvQkFBZSxHQUFvQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDN0YsbUJBQWMsR0FBK0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUd6RixDQUFDO0lBRUQsc0JBQUksZ0RBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7Ozs7SUFFRCxvQ0FBSTs7O0lBQUo7UUFBQSxpQkFXQztRQVZDLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07O2dCQUNqQyxjQUFjLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO1lBQ3ZFLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsUUFBd0I7O29CQUN0RixjQUFjLEdBQUcsbUJBQWdCLFFBQVEsRUFBQTtnQkFDL0MsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzFDLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxFQUFDLENBQUMsS0FBSzs7OztZQUFDLFVBQUMsUUFBYTtnQkFDckIsTUFBTSxDQUFDLHFDQUFtQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBRyxDQUFDLENBQUM7WUFDeEUsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXpCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUxPLFVBQVU7Z0JBREwsYUFBYTs7O2dDQUYxQjtDQWdDQyxBQTFCRCxJQTBCQztTQXZCWSxxQkFBcUI7Ozs7OztJQUNoQyxnREFBcUc7Ozs7O0lBQ3JHLCtDQUF5Rjs7Ozs7SUFFN0Usc0NBQXlCOzs7OztJQUFFLHdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWV0YWRhdGFDb25maWd9IGZyb20gXCIuL21ldGFkYXRhLWNvbmZpZ1wiO1xyXG5pbXBvcnQge0FwaSwgQ29uZmlnU2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhQ29uZmlnU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfbWV0YWRhdGFDb25maWc6IEJlaGF2aW9yU3ViamVjdDxNZXRhZGF0YUNvbmZpZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG5ldyBNZXRhZGF0YUNvbmZpZygpKTtcclxuICBwcml2YXRlIF91cGRhdGVkQ29uZmlnOiBPYnNlcnZhYmxlPE1ldGFkYXRhQ29uZmlnPiA9IHRoaXMuX21ldGFkYXRhQ29uZmlnLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIF9jb25maWc6IENvbmZpZ1NlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGdldCB1cGRhdGVkQ29uZmlnKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZWRDb25maWc7XHJcbiAgfVxyXG5cclxuICBsb2FkKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3QgY29uZmlnRW5kcG9pbnQgPSB0aGlzLl9jb25maWcuZ2V0Q29uZmlnRW5kcG9pbnQoQXBpLk1FVEFEQVRBX0FQUCk7XHJcbiAgICAgIHRoaXMuX2h0dHAuZ2V0KGNvbmZpZ0VuZHBvaW50LCBBcGkuaHR0cE9wdGlvbnNKc29uKS50b1Byb21pc2UoKS50aGVuKChyZXNwb25zZTogTWV0YWRhdGFDb25maWcpID0+IHtcclxuICAgICAgICBjb25zdCBtZXRhZGF0YUNvbmZpZyA9IDxNZXRhZGF0YUNvbmZpZz5yZXNwb25zZTtcclxuICAgICAgICB0aGlzLl9tZXRhZGF0YUNvbmZpZy5uZXh0KG1ldGFkYXRhQ29uZmlnKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pLmNhdGNoKChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgcmVqZWN0KGBDb3VsZCBub3QgbG9hZCBtZXRhZGF0YSBjb25maWc6ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpfWApO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=