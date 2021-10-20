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
export class MetadataConfigService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._metadataConfig = new BehaviorSubject(new MetadataConfig());
        this._updatedConfig = this._metadataConfig.asObservable();
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
            const configEndpoint = this._config.getConfigEndpoint(Api.METADATA_APP);
            this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                /** @type {?} */
                const metadataConfig = (/** @type {?} */ (response));
                this._metadataConfig.next(metadataConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                reject(`Could not load metadata config: ${JSON.stringify(response)}`);
            }));
        }));
    }
}
MetadataConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MetadataConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ MetadataConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MetadataConfigService_Factory() { return new MetadataConfigService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: MetadataConfigService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvbWV0YWRhdGEvIiwic291cmNlcyI6WyJsaWIvbWV0YWRhdGEtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxHQUFHLEVBQUUsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7Ozs7QUFLakQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFJaEMsWUFBb0IsS0FBaUIsRUFBVSxPQUFzQjtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUg3RCxvQkFBZSxHQUFvQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDN0YsbUJBQWMsR0FBK0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUd6RixDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O2tCQUNyQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTs7OztZQUFDLENBQUMsUUFBd0IsRUFBRSxFQUFFOztzQkFDMUYsY0FBYyxHQUFHLG1CQUFnQixRQUFRLEVBQUE7Z0JBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUMxQyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsRUFBQyxDQUFDLEtBQUs7Ozs7WUFBQyxDQUFDLFFBQWEsRUFBRSxFQUFFO2dCQUN6QixNQUFNLENBQUMsbUNBQW1DLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hFLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF6QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTE8sVUFBVTtZQURMLGFBQWE7Ozs7Ozs7O0lBUXhCLGdEQUFxRzs7Ozs7SUFDckcsK0NBQXlGOzs7OztJQUU3RSxzQ0FBeUI7Ozs7O0lBQUUsd0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWV0YWRhdGFDb25maWd9IGZyb20gXCIuL21ldGFkYXRhLWNvbmZpZ1wiO1xuaW1wb3J0IHtBcGksIENvbmZpZ1NlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWV0YWRhdGFDb25maWdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfbWV0YWRhdGFDb25maWc6IEJlaGF2aW9yU3ViamVjdDxNZXRhZGF0YUNvbmZpZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG5ldyBNZXRhZGF0YUNvbmZpZygpKTtcbiAgcHJpdmF0ZSBfdXBkYXRlZENvbmZpZzogT2JzZXJ2YWJsZTxNZXRhZGF0YUNvbmZpZz4gPSB0aGlzLl9tZXRhZGF0YUNvbmZpZy5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIF9jb25maWc6IENvbmZpZ1NlcnZpY2UpIHtcbiAgfVxuXG4gIGdldCB1cGRhdGVkQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVkQ29uZmlnO1xuICB9XG5cbiAgbG9hZCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgY29uZmlnRW5kcG9pbnQgPSB0aGlzLl9jb25maWcuZ2V0Q29uZmlnRW5kcG9pbnQoQXBpLk1FVEFEQVRBX0FQUCk7XG4gICAgICB0aGlzLl9odHRwLmdldChjb25maWdFbmRwb2ludCwgQXBpLmh0dHBPcHRpb25zSnNvbikudG9Qcm9taXNlKCkudGhlbigocmVzcG9uc2U6IE1ldGFkYXRhQ29uZmlnKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhQ29uZmlnID0gPE1ldGFkYXRhQ29uZmlnPnJlc3BvbnNlO1xuICAgICAgICB0aGlzLl9tZXRhZGF0YUNvbmZpZy5uZXh0KG1ldGFkYXRhQ29uZmlnKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgcmVqZWN0KGBDb3VsZCBub3QgbG9hZCBtZXRhZGF0YSBjb25maWc6ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpfWApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==