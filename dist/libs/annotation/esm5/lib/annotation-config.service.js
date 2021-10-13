/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Api, ConfigService } from "@groupdocs.examples.angular/common-components";
import { AnnotationConfig } from "./annotation-config";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@groupdocs.examples.angular/common-components";
var AnnotationConfigService = /** @class */ (function () {
    function AnnotationConfigService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._annotationConfig = new BehaviorSubject(new AnnotationConfig());
        this._updatedConfig = this._annotationConfig.asObservable();
    }
    Object.defineProperty(AnnotationConfigService.prototype, "updatedConfig", {
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
    AnnotationConfigService.prototype.load = /**
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
            var configEndpoint = _this._config.getConfigEndpoint(Api.ANNOTATION_APP);
            _this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var annotationConfig = (/** @type {?} */ (response));
                _this._annotationConfig.next(annotationConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                reject("Could not load annotation config: " + JSON.stringify(response));
            }));
        }));
    };
    AnnotationConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AnnotationConfigService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ AnnotationConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AnnotationConfigService_Factory() { return new AnnotationConfigService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: AnnotationConfigService, providedIn: "root" });
    return AnnotationConfigService;
}());
export { AnnotationConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AnnotationConfigService.prototype._annotationConfig;
    /**
     * @type {?}
     * @private
     */
    AnnotationConfigService.prototype._updatedConfig;
    /**
     * @type {?}
     * @private
     */
    AnnotationConfigService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    AnnotationConfigService.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9hbm5vdGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2Fubm90YXRpb24tY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUVyRDtJQVFFLGlDQUFvQixLQUFpQixFQUFVLE9BQXNCO1FBQWpELFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBSDdELHNCQUFpQixHQUFzQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUNuRyxtQkFBYyxHQUFpQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHN0YsQ0FBQztJQUVELHNCQUFJLGtEQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7OztPQUFBOzs7O0lBRUQsc0NBQUk7OztJQUFKO1FBQUEsaUJBV0M7UUFWQyxPQUFPLElBQUksT0FBTzs7Ozs7UUFBTyxVQUFDLE9BQU8sRUFBRSxNQUFNOztnQkFDakMsY0FBYyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztZQUN6RSxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLFFBQTBCOztvQkFDeEYsZ0JBQWdCLEdBQUcsbUJBQWtCLFFBQVEsRUFBQTtnQkFDbkQsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUM5QyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsRUFBQyxDQUFDLEtBQUs7Ozs7WUFBQyxVQUFDLFFBQWE7Z0JBQ3JCLE1BQU0sQ0FBQyx1Q0FBcUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUcsQ0FBQyxDQUFDO1lBQzFFLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkExQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOTyxVQUFVO2dCQUNMLGFBQWE7OztrQ0FIMUI7Q0FpQ0MsQUEzQkQsSUEyQkM7U0F4QlksdUJBQXVCOzs7Ozs7SUFFbEMsb0RBQTJHOzs7OztJQUMzRyxpREFBNkY7Ozs7O0lBRWpGLHdDQUF5Qjs7Ozs7SUFBRSwwQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHtBcGksIENvbmZpZ1NlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtBbm5vdGF0aW9uQ29uZmlnfSBmcm9tIFwiLi9hbm5vdGF0aW9uLWNvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbkNvbmZpZ1NlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIF9hbm5vdGF0aW9uQ29uZmlnOiBCZWhhdmlvclN1YmplY3Q8QW5ub3RhdGlvbkNvbmZpZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG5ldyBBbm5vdGF0aW9uQ29uZmlnKCkpO1xyXG4gIHByaXZhdGUgX3VwZGF0ZWRDb25maWc6IE9ic2VydmFibGU8QW5ub3RhdGlvbkNvbmZpZz4gPSB0aGlzLl9hbm5vdGF0aW9uQ29uZmlnLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIF9jb25maWc6IENvbmZpZ1NlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGdldCB1cGRhdGVkQ29uZmlnKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZWRDb25maWc7XHJcbiAgfVxyXG5cclxuICBsb2FkKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3QgY29uZmlnRW5kcG9pbnQgPSB0aGlzLl9jb25maWcuZ2V0Q29uZmlnRW5kcG9pbnQoQXBpLkFOTk9UQVRJT05fQVBQKTtcclxuICAgICAgdGhpcy5faHR0cC5nZXQoY29uZmlnRW5kcG9pbnQsIEFwaS5odHRwT3B0aW9uc0pzb24pLnRvUHJvbWlzZSgpLnRoZW4oKHJlc3BvbnNlOiBBbm5vdGF0aW9uQ29uZmlnKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbkNvbmZpZyA9IDxBbm5vdGF0aW9uQ29uZmlnPnJlc3BvbnNlO1xyXG4gICAgICAgIHRoaXMuX2Fubm90YXRpb25Db25maWcubmV4dChhbm5vdGF0aW9uQ29uZmlnKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pLmNhdGNoKChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgcmVqZWN0KGBDb3VsZCBub3QgbG9hZCBhbm5vdGF0aW9uIGNvbmZpZzogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZSl9YCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==