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
var ParserConfigService = /** @class */ (function () {
    function ParserConfigService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._parserConfig = new BehaviorSubject(new ParserConfig());
        this._updatedConfig = this._parserConfig.asObservable();
    }
    Object.defineProperty(ParserConfigService.prototype, "updatedConfig", {
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
    ParserConfigService.prototype.load = /**
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
            var configEndpoint = _this._config.getConfigEndpoint(Api.PARSER_APP);
            _this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var parserConfig = (/** @type {?} */ (response));
                _this._parserConfig.next(parserConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                reject("Could not load parser config: " + JSON.stringify(response));
            }));
        }));
    };
    ParserConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ParserConfigService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ ParserConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ParserConfigService_Factory() { return new ParserConfigService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: ParserConfigService, providedIn: "root" });
    return ParserConfigService;
}());
export { ParserConfigService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3BhcnNlci8iLCJzb3VyY2VzIjpbImxpYi9wYXJzZXItY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7Ozs7QUFHbkQ7SUFPRSw2QkFBb0IsS0FBaUIsRUFBVSxPQUFzQjtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUg3RCxrQkFBYSxHQUFrQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDdkYsbUJBQWMsR0FBNkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUdyRixDQUFDO0lBRUQsc0JBQUksOENBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7Ozs7SUFFRCxrQ0FBSTs7O0lBQUo7UUFBQSxpQkFXQztRQVZDLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07O2dCQUNqQyxjQUFjLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ3JFLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsUUFBc0I7O29CQUNwRixZQUFZLEdBQUcsbUJBQWMsUUFBUSxFQUFBO2dCQUMzQyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDdEMsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLEVBQUMsQ0FBQyxLQUFLOzs7O1lBQUMsVUFBQyxRQUFhO2dCQUNyQixNQUFNLENBQUMsbUNBQWlDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFHLENBQUMsQ0FBQztZQUN0RSxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBekJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsVUFBVTtnQkFETCxhQUFhOzs7OEJBRjNCO0NBaUNDLEFBMUJELElBMEJDO1NBdkJZLG1CQUFtQjs7Ozs7O0lBQzlCLDRDQUErRjs7Ozs7SUFDL0YsNkNBQXFGOzs7OztJQUV6RSxvQ0FBeUI7Ozs7O0lBQUUsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFyc2VyQ29uZmlnIH0gZnJvbSBcIi4vcGFyc2VyLWNvbmZpZ1wiO1xuaW1wb3J0IHsgQXBpLCBDb25maWdTZXJ2aWNlIH0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy91dGlsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUGFyc2VyQ29uZmlnU2VydmljZSB7XG4gIHByaXZhdGUgX3BhcnNlckNvbmZpZzogQmVoYXZpb3JTdWJqZWN0PFBhcnNlckNvbmZpZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG5ldyBQYXJzZXJDb25maWcoKSk7XG4gIHByaXZhdGUgX3VwZGF0ZWRDb25maWc6IE9ic2VydmFibGU8UGFyc2VyQ29uZmlnPiA9IHRoaXMuX3BhcnNlckNvbmZpZy5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIF9jb25maWc6IENvbmZpZ1NlcnZpY2UpIHtcbiAgfVxuXG4gIGdldCB1cGRhdGVkQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVkQ29uZmlnO1xuICB9XG5cbiAgbG9hZCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgY29uZmlnRW5kcG9pbnQgPSB0aGlzLl9jb25maWcuZ2V0Q29uZmlnRW5kcG9pbnQoQXBpLlBBUlNFUl9BUFApO1xuICAgICAgdGhpcy5faHR0cC5nZXQoY29uZmlnRW5kcG9pbnQsIEFwaS5odHRwT3B0aW9uc0pzb24pLnRvUHJvbWlzZSgpLnRoZW4oKHJlc3BvbnNlOiBQYXJzZXJDb25maWcpID0+IHtcbiAgICAgICAgY29uc3QgcGFyc2VyQ29uZmlnID0gPFBhcnNlckNvbmZpZz5yZXNwb25zZTtcbiAgICAgICAgdGhpcy5fcGFyc2VyQ29uZmlnLm5leHQocGFyc2VyQ29uZmlnKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgcmVqZWN0KGBDb3VsZCBub3QgbG9hZCBwYXJzZXIgY29uZmlnOiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlKX1gKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59Il19