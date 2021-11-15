/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ParserConfig } from "./parser-config";
import { Api, ConfigService } from "@groupdocs.examples.angular/common-components";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@groupdocs.examples.angular/common-components";
export class ParserConfigService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._parserConfig = new BehaviorSubject(new ParserConfig());
        this._updatedConfig = this._parserConfig.asObservable();
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
            const configEndpoint = this._config.getConfigEndpoint(Api.PARSER_APP);
            this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                /** @type {?} */
                const parserConfig = (/** @type {?} */ (response));
                this._parserConfig.next(parserConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                reject(`Could not load parser config: ${JSON.stringify(response)}`);
            }));
        }));
    }
}
ParserConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ParserConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ ParserConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ParserConfigService_Factory() { return new ParserConfigService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: ParserConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ParserConfigService.prototype._parserConfig;
    /**
     * @type {?}
     * @private
     */
    ParserConfigService.prototype._updatedConfig;
    /**
     * @type {?}
     * @private
     */
    ParserConfigService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ParserConfigService.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3BhcnNlci8iLCJzb3VyY2VzIjpbImxpYi9wYXJzZXItY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7Ozs7QUFNbkQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFJOUIsWUFBb0IsS0FBaUIsRUFBVSxPQUFzQjtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUg3RCxrQkFBYSxHQUFrQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDdkYsbUJBQWMsR0FBNkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUdyRixDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O2tCQUNyQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ3JFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTs7OztZQUFDLENBQUMsUUFBc0IsRUFBRSxFQUFFOztzQkFDeEYsWUFBWSxHQUFHLG1CQUFjLFFBQVEsRUFBQTtnQkFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxFQUFDLENBQUMsS0FBSzs7OztZQUFDLENBQUMsUUFBYSxFQUFFLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxpQ0FBaUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEUsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQXpCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSxVQUFVO1lBREwsYUFBYTs7Ozs7Ozs7SUFTekIsNENBQStGOzs7OztJQUMvRiw2Q0FBcUY7Ozs7O0lBRXpFLG9DQUF5Qjs7Ozs7SUFBRSxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYXJzZXJDb25maWcgfSBmcm9tIFwiLi9wYXJzZXItY29uZmlnXCI7XG5pbXBvcnQgeyBBcGksIENvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL3V0aWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQYXJzZXJDb25maWdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfcGFyc2VyQ29uZmlnOiBCZWhhdmlvclN1YmplY3Q8UGFyc2VyQ29uZmlnPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobmV3IFBhcnNlckNvbmZpZygpKTtcbiAgcHJpdmF0ZSBfdXBkYXRlZENvbmZpZzogT2JzZXJ2YWJsZTxQYXJzZXJDb25maWc+ID0gdGhpcy5fcGFyc2VyQ29uZmlnLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX2NvbmZpZzogQ29uZmlnU2VydmljZSkge1xuICB9XG5cbiAgZ2V0IHVwZGF0ZWRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZWRDb25maWc7XG4gIH1cblxuICBsb2FkKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBjb25maWdFbmRwb2ludCA9IHRoaXMuX2NvbmZpZy5nZXRDb25maWdFbmRwb2ludChBcGkuUEFSU0VSX0FQUCk7XG4gICAgICB0aGlzLl9odHRwLmdldChjb25maWdFbmRwb2ludCwgQXBpLmh0dHBPcHRpb25zSnNvbikudG9Qcm9taXNlKCkudGhlbigocmVzcG9uc2U6IFBhcnNlckNvbmZpZykgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZXJDb25maWcgPSA8UGFyc2VyQ29uZmlnPnJlc3BvbnNlO1xuICAgICAgICB0aGlzLl9wYXJzZXJDb25maWcubmV4dChwYXJzZXJDb25maWcpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KS5jYXRjaCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICByZWplY3QoYENvdWxkIG5vdCBsb2FkIHBhcnNlciBjb25maWc6ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpfWApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0iXX0=