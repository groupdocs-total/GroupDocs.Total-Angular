/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ViewerConfig } from "./viewer-config";
import { Api, ConfigService } from "@groupdocs.examples.angular/common-components";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@groupdocs.examples.angular/common-components";
var ViewerConfigService = /** @class */ (function () {
    function ViewerConfigService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._viewerConfig = new BehaviorSubject(new ViewerConfig());
        this._updatedConfig = this._viewerConfig.asObservable();
    }
    Object.defineProperty(ViewerConfigService.prototype, "updatedConfig", {
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
    ViewerConfigService.prototype.load = /**
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
            var configEndpoint = _this._config.getConfigEndpoint(Api.VIEWER_APP);
            _this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var viewerConfig = (/** @type {?} */ (response));
                _this._viewerConfig.next(viewerConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                reject("Could not load viewer config: " + JSON.stringify(response));
            }));
        }));
    };
    ViewerConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ViewerConfigService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ ViewerConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ViewerConfigService_Factory() { return new ViewerConfigService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: ViewerConfigService, providedIn: "root" });
    return ViewerConfigService;
}());
export { ViewerConfigService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi92aWV3ZXItY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxHQUFHLEVBQUUsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7Ozs7QUFFakQ7SUFPRSw2QkFBb0IsS0FBaUIsRUFBVSxPQUFzQjtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUg3RCxrQkFBYSxHQUFrQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDdkYsbUJBQWMsR0FBNkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUdyRixDQUFDO0lBRUQsc0JBQUksOENBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7Ozs7SUFFRCxrQ0FBSTs7O0lBQUo7UUFBQSxpQkFXQztRQVZDLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07O2dCQUNqQyxjQUFjLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ3JFLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsUUFBc0I7O29CQUNwRixZQUFZLEdBQUcsbUJBQWMsUUFBUSxFQUFBO2dCQUMzQyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDdEMsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLEVBQUMsQ0FBQyxLQUFLOzs7O1lBQUMsVUFBQyxRQUFhO2dCQUNyQixNQUFNLENBQUMsbUNBQWlDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFHLENBQUMsQ0FBQztZQUN0RSxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBekJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTE8sVUFBVTtnQkFETCxhQUFhOzs7OEJBRjFCO0NBaUNDLEFBM0JELElBMkJDO1NBeEJZLG1CQUFtQjs7Ozs7O0lBQzlCLDRDQUErRjs7Ozs7SUFDL0YsNkNBQXFGOzs7OztJQUV6RSxvQ0FBeUI7Ozs7O0lBQUUsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Vmlld2VyQ29uZmlnfSBmcm9tIFwiLi92aWV3ZXItY29uZmlnXCI7XG5pbXBvcnQge0FwaSwgQ29uZmlnU2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBWaWV3ZXJDb25maWdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdmlld2VyQ29uZmlnOiBCZWhhdmlvclN1YmplY3Q8Vmlld2VyQ29uZmlnPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobmV3IFZpZXdlckNvbmZpZygpKTtcbiAgcHJpdmF0ZSBfdXBkYXRlZENvbmZpZzogT2JzZXJ2YWJsZTxWaWV3ZXJDb25maWc+ID0gdGhpcy5fdmlld2VyQ29uZmlnLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX2NvbmZpZzogQ29uZmlnU2VydmljZSkge1xuICB9XG5cbiAgZ2V0IHVwZGF0ZWRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZWRDb25maWc7XG4gIH1cblxuICBsb2FkKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBjb25maWdFbmRwb2ludCA9IHRoaXMuX2NvbmZpZy5nZXRDb25maWdFbmRwb2ludChBcGkuVklFV0VSX0FQUCk7XG4gICAgICB0aGlzLl9odHRwLmdldChjb25maWdFbmRwb2ludCwgQXBpLmh0dHBPcHRpb25zSnNvbikudG9Qcm9taXNlKCkudGhlbigocmVzcG9uc2U6IFZpZXdlckNvbmZpZykgPT4ge1xuICAgICAgICBjb25zdCB2aWV3ZXJDb25maWcgPSA8Vmlld2VyQ29uZmlnPnJlc3BvbnNlO1xuICAgICAgICB0aGlzLl92aWV3ZXJDb25maWcubmV4dCh2aWV3ZXJDb25maWcpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KS5jYXRjaCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICByZWplY3QoYENvdWxkIG5vdCBsb2FkIHZpZXdlciBjb25maWc6ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpfWApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19