/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ViewerConfig } from "./viewer-config";
import { Api, ConfigService } from "@groupdocs.examples.angular/common-components";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@groupdocs.examples.angular/common-components";
export class ViewerConfigService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._viewerConfig = new BehaviorSubject(new ViewerConfig());
        this._updatedConfig = this._viewerConfig.asObservable();
        _config.apiEndpoint = environment.apiUrl;
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
            const configEndpoint = this._config.getConfigEndpoint(Api.VIEWER_APP);
            this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                /** @type {?} */
                const viewerConfig = (/** @type {?} */ (response));
                this._viewerConfig.next(viewerConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                reject(`Could not load viewer config: ${JSON.stringify(response)}`);
            }));
        }));
    }
}
ViewerConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ViewerConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ ViewerConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ViewerConfigService_Factory() { return new ViewerConfigService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: ViewerConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ViewerConfigService.prototype._viewerConfig;
    /**
     * @type {?}
     * @private
     */
    ViewerConfigService.prototype._updatedConfig;
    /**
     * @type {?}
     * @private
     */
    ViewerConfigService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ViewerConfigService.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi92aWV3ZXItY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxHQUFHLEVBQUUsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDOzs7O0FBS2pELE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBSTlCLFlBQW9CLEtBQWlCLEVBQVUsT0FBc0I7UUFBakQsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFIN0Qsa0JBQWEsR0FBa0MsSUFBSSxlQUFlLENBQUMsSUFBSSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZGLG1CQUFjLEdBQTZCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFHbkYsT0FBTyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELElBQUk7UUFDRixPQUFPLElBQUksT0FBTzs7Ozs7UUFBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTs7a0JBQ3JDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDckUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxRQUFzQixFQUFFLEVBQUU7O3NCQUN4RixZQUFZLEdBQUcsbUJBQWMsUUFBUSxFQUFBO2dCQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDdEMsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLEVBQUMsQ0FBQyxLQUFLOzs7O1lBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtnQkFDekIsTUFBTSxDQUFDLGlDQUFpQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0RSxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBMUJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5PLFVBQVU7WUFETCxhQUFhOzs7Ozs7OztJQVN4Qiw0Q0FBK0Y7Ozs7O0lBQy9GLDZDQUFxRjs7Ozs7SUFFekUsb0NBQXlCOzs7OztJQUFFLHNDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1ZpZXdlckNvbmZpZ30gZnJvbSBcIi4vdmlld2VyLWNvbmZpZ1wiO1xuaW1wb3J0IHtBcGksIENvbmZpZ1NlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge2Vudmlyb25tZW50fSBmcm9tIFwiLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50XCI7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVmlld2VyQ29uZmlnU2VydmljZSB7XG4gIHByaXZhdGUgX3ZpZXdlckNvbmZpZzogQmVoYXZpb3JTdWJqZWN0PFZpZXdlckNvbmZpZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG5ldyBWaWV3ZXJDb25maWcoKSk7XG4gIHByaXZhdGUgX3VwZGF0ZWRDb25maWc6IE9ic2VydmFibGU8Vmlld2VyQ29uZmlnPiA9IHRoaXMuX3ZpZXdlckNvbmZpZy5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIF9jb25maWc6IENvbmZpZ1NlcnZpY2UpIHtcbiAgICBfY29uZmlnLmFwaUVuZHBvaW50ID0gZW52aXJvbm1lbnQuYXBpVXJsO1xuICB9XG5cbiAgZ2V0IHVwZGF0ZWRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZWRDb25maWc7XG4gIH1cblxuICBsb2FkKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBjb25maWdFbmRwb2ludCA9IHRoaXMuX2NvbmZpZy5nZXRDb25maWdFbmRwb2ludChBcGkuVklFV0VSX0FQUCk7XG4gICAgICB0aGlzLl9odHRwLmdldChjb25maWdFbmRwb2ludCwgQXBpLmh0dHBPcHRpb25zSnNvbikudG9Qcm9taXNlKCkudGhlbigocmVzcG9uc2U6IFZpZXdlckNvbmZpZykgPT4ge1xuICAgICAgICBjb25zdCB2aWV3ZXJDb25maWcgPSA8Vmlld2VyQ29uZmlnPnJlc3BvbnNlO1xuICAgICAgICB0aGlzLl92aWV3ZXJDb25maWcubmV4dCh2aWV3ZXJDb25maWcpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KS5jYXRjaCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICByZWplY3QoYENvdWxkIG5vdCBsb2FkIHZpZXdlciBjb25maWc6ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpfWApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19