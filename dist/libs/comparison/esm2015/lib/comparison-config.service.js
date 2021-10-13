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
export class ComparisonConfigService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._comparisonConfig = new BehaviorSubject(new ComparisonConfig());
        this._updatedConfig = this._comparisonConfig.asObservable();
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
            const configEndpoint = this._config.getConfigEndpoint(Api.COMPARISON_APP);
            this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                /** @type {?} */
                const comparisonConfig = (/** @type {?} */ (response));
                this._comparisonConfig.next(comparisonConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                reject(`Could not load comparison config: ${JSON.stringify(response)}`);
            }));
        }));
    }
}
ComparisonConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ComparisonConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ ComparisonConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ComparisonConfigService_Factory() { return new ComparisonConfigService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: ComparisonConfigService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyaXNvbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21wYXJpc29uLyIsInNvdXJjZXMiOlsibGliL2NvbXBhcmlzb24tY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQzs7OztBQUtqRCxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUlsQyxZQUFvQixLQUFpQixFQUFVLE9BQXNCO1FBQWpELFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBSDdELHNCQUFpQixHQUFzQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUNuRyxtQkFBYyxHQUFpQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHN0YsQ0FBQzs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztrQkFDckMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztZQUN6RSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLFFBQTBCLEVBQUUsRUFBRTs7c0JBQzVGLGdCQUFnQixHQUFHLG1CQUFrQixRQUFRLEVBQUE7Z0JBQ25ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDOUMsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLEVBQUMsQ0FBQyxLQUFLOzs7O1lBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtnQkFDekIsTUFBTSxDQUFDLHFDQUFxQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxRSxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBekJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxPLFVBQVU7WUFETCxhQUFhOzs7Ozs7OztJQVF4QixvREFBMkc7Ozs7O0lBQzNHLGlEQUE2Rjs7Ozs7SUFFakYsd0NBQXlCOzs7OztJQUFFLDBDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbXBhcmlzb25Db25maWd9IGZyb20gXCIuL2NvbXBhcmlzb24tY29uZmlnXCI7XG5pbXBvcnQge0FwaSwgQ29uZmlnU2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb21wYXJpc29uQ29uZmlnU2VydmljZSB7XG4gIHByaXZhdGUgX2NvbXBhcmlzb25Db25maWc6IEJlaGF2aW9yU3ViamVjdDxDb21wYXJpc29uQ29uZmlnPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobmV3IENvbXBhcmlzb25Db25maWcoKSk7XG4gIHByaXZhdGUgX3VwZGF0ZWRDb25maWc6IE9ic2VydmFibGU8Q29tcGFyaXNvbkNvbmZpZz4gPSB0aGlzLl9jb21wYXJpc29uQ29uZmlnLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX2NvbmZpZzogQ29uZmlnU2VydmljZSkge1xuICB9XG5cbiAgZ2V0IHVwZGF0ZWRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZWRDb25maWc7XG4gIH1cblxuICBsb2FkKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBjb25maWdFbmRwb2ludCA9IHRoaXMuX2NvbmZpZy5nZXRDb25maWdFbmRwb2ludChBcGkuQ09NUEFSSVNPTl9BUFApO1xuICAgICAgdGhpcy5faHR0cC5nZXQoY29uZmlnRW5kcG9pbnQsIEFwaS5odHRwT3B0aW9uc0pzb24pLnRvUHJvbWlzZSgpLnRoZW4oKHJlc3BvbnNlOiBDb21wYXJpc29uQ29uZmlnKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBhcmlzb25Db25maWcgPSA8Q29tcGFyaXNvbkNvbmZpZz5yZXNwb25zZTtcbiAgICAgICAgdGhpcy5fY29tcGFyaXNvbkNvbmZpZy5uZXh0KGNvbXBhcmlzb25Db25maWcpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KS5jYXRjaCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICByZWplY3QoYENvdWxkIG5vdCBsb2FkIGNvbXBhcmlzb24gY29uZmlnOiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlKX1gKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==