/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SearchConfig } from "./search-config";
import { Api, ConfigService } from "@groupdocs.examples.angular/common-components";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@groupdocs.examples.angular/common-components";
export class SearchConfigService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._searchConfig = new BehaviorSubject(new SearchConfig());
        this._updatedConfig = this._searchConfig.asObservable();
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
            const configEndpoint = this._config.getConfigEndpoint(Api.SEARCH_APP);
            this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                /** @type {?} */
                const searchConfig = (/** @type {?} */ (response));
                this._searchConfig.next(searchConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                reject(`Could not load search config: ${JSON.stringify(response)}`);
            }));
        }));
    }
}
SearchConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SearchConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ SearchConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SearchConfigService_Factory() { return new SearchConfigService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: SearchConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchConfigService.prototype._searchConfig;
    /**
     * @type {?}
     * @private
     */
    SearchConfigService.prototype._updatedConfig;
    /**
     * @type {?}
     * @private
     */
    SearchConfigService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    SearchConfigService.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NlYXJjaC8iLCJzb3VyY2VzIjpbImxpYi9zZWFyY2gtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxHQUFHLEVBQUUsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7Ozs7QUFLakQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFJOUIsWUFBb0IsS0FBaUIsRUFBVSxPQUFzQjtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUg3RCxrQkFBYSxHQUFrQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDdkYsbUJBQWMsR0FBNkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUdyRixDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O2tCQUNyQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ3JFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTs7OztZQUFDLENBQUMsUUFBc0IsRUFBRSxFQUFFOztzQkFDeEYsWUFBWSxHQUFHLG1CQUFjLFFBQVEsRUFBQTtnQkFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxFQUFDLENBQUMsS0FBSzs7OztZQUFDLENBQUMsUUFBYSxFQUFFLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxpQ0FBaUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEUsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQXpCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFMTyxVQUFVO1lBREwsYUFBYTs7Ozs7Ozs7SUFReEIsNENBQStGOzs7OztJQUMvRiw2Q0FBcUY7Ozs7O0lBRXpFLG9DQUF5Qjs7Ozs7SUFBRSxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1NlYXJjaENvbmZpZ30gZnJvbSBcIi4vc2VhcmNoLWNvbmZpZ1wiO1xyXG5pbXBvcnQge0FwaSwgQ29uZmlnU2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbmZpZ1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgX3NlYXJjaENvbmZpZzogQmVoYXZpb3JTdWJqZWN0PFNlYXJjaENvbmZpZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG5ldyBTZWFyY2hDb25maWcoKSk7XHJcbiAgcHJpdmF0ZSBfdXBkYXRlZENvbmZpZzogT2JzZXJ2YWJsZTxTZWFyY2hDb25maWc+ID0gdGhpcy5fc2VhcmNoQ29uZmlnLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIF9jb25maWc6IENvbmZpZ1NlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGdldCB1cGRhdGVkQ29uZmlnKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZWRDb25maWc7XHJcbiAgfVxyXG5cclxuICBsb2FkKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3QgY29uZmlnRW5kcG9pbnQgPSB0aGlzLl9jb25maWcuZ2V0Q29uZmlnRW5kcG9pbnQoQXBpLlNFQVJDSF9BUFApO1xyXG4gICAgICB0aGlzLl9odHRwLmdldChjb25maWdFbmRwb2ludCwgQXBpLmh0dHBPcHRpb25zSnNvbikudG9Qcm9taXNlKCkudGhlbigocmVzcG9uc2U6IFNlYXJjaENvbmZpZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaENvbmZpZyA9IDxTZWFyY2hDb25maWc+cmVzcG9uc2U7XHJcbiAgICAgICAgdGhpcy5fc2VhcmNoQ29uZmlnLm5leHQoc2VhcmNoQ29uZmlnKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pLmNhdGNoKChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgcmVqZWN0KGBDb3VsZCBub3QgbG9hZCBzZWFyY2ggY29uZmlnOiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlKX1gKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==