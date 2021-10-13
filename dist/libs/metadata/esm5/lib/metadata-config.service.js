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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvbWV0YWRhdGEvIiwic291cmNlcyI6WyJsaWIvbWV0YWRhdGEtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxHQUFHLEVBQUUsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7Ozs7QUFFakQ7SUFPRSwrQkFBb0IsS0FBaUIsRUFBVSxPQUFzQjtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUg3RCxvQkFBZSxHQUFvQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDN0YsbUJBQWMsR0FBK0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUd6RixDQUFDO0lBRUQsc0JBQUksZ0RBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7Ozs7SUFFRCxvQ0FBSTs7O0lBQUo7UUFBQSxpQkFXQztRQVZDLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07O2dCQUNqQyxjQUFjLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO1lBQ3ZFLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsUUFBd0I7O29CQUN0RixjQUFjLEdBQUcsbUJBQWdCLFFBQVEsRUFBQTtnQkFDL0MsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzFDLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxFQUFDLENBQUMsS0FBSzs7OztZQUFDLFVBQUMsUUFBYTtnQkFDckIsTUFBTSxDQUFDLHFDQUFtQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBRyxDQUFDLENBQUM7WUFDeEUsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXpCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUxPLFVBQVU7Z0JBREwsYUFBYTs7O2dDQUYxQjtDQWdDQyxBQTFCRCxJQTBCQztTQXZCWSxxQkFBcUI7Ozs7OztJQUNoQyxnREFBcUc7Ozs7O0lBQ3JHLCtDQUF5Rjs7Ozs7SUFFN0Usc0NBQXlCOzs7OztJQUFFLHdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01ldGFkYXRhQ29uZmlnfSBmcm9tIFwiLi9tZXRhZGF0YS1jb25maWdcIjtcbmltcG9ydCB7QXBpLCBDb25maWdTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhQ29uZmlnU2VydmljZSB7XG4gIHByaXZhdGUgX21ldGFkYXRhQ29uZmlnOiBCZWhhdmlvclN1YmplY3Q8TWV0YWRhdGFDb25maWc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChuZXcgTWV0YWRhdGFDb25maWcoKSk7XG4gIHByaXZhdGUgX3VwZGF0ZWRDb25maWc6IE9ic2VydmFibGU8TWV0YWRhdGFDb25maWc+ID0gdGhpcy5fbWV0YWRhdGFDb25maWcuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBfY29uZmlnOiBDb25maWdTZXJ2aWNlKSB7XG4gIH1cblxuICBnZXQgdXBkYXRlZENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlZENvbmZpZztcbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGNvbmZpZ0VuZHBvaW50ID0gdGhpcy5fY29uZmlnLmdldENvbmZpZ0VuZHBvaW50KEFwaS5NRVRBREFUQV9BUFApO1xuICAgICAgdGhpcy5faHR0cC5nZXQoY29uZmlnRW5kcG9pbnQsIEFwaS5odHRwT3B0aW9uc0pzb24pLnRvUHJvbWlzZSgpLnRoZW4oKHJlc3BvbnNlOiBNZXRhZGF0YUNvbmZpZykgPT4ge1xuICAgICAgICBjb25zdCBtZXRhZGF0YUNvbmZpZyA9IDxNZXRhZGF0YUNvbmZpZz5yZXNwb25zZTtcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFDb25maWcubmV4dChtZXRhZGF0YUNvbmZpZyk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pLmNhdGNoKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIHJlamVjdChgQ291bGQgbm90IGxvYWQgbWV0YWRhdGEgY29uZmlnOiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlKX1gKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=