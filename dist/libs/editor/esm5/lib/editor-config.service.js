/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { EditorConfig } from "./editor-config";
import { Api, ConfigService } from "@groupdocs.examples.angular/common-components";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@groupdocs.examples.angular/common-components";
var EditorConfigService = /** @class */ (function () {
    function EditorConfigService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._editorConfig = new BehaviorSubject(new EditorConfig());
        this._updatedConfig = this._editorConfig.asObservable();
    }
    Object.defineProperty(EditorConfigService.prototype, "updatedConfig", {
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
    EditorConfigService.prototype.load = /**
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
            var configEndpoint = _this._config.getConfigEndpoint(Api.EDITOR_APP);
            _this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var editorConfig = (/** @type {?} */ (response));
                _this._editorConfig.next(editorConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                reject("Could not load editor config: " + JSON.stringify(response));
            }));
        }));
    };
    EditorConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EditorConfigService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ EditorConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EditorConfigService_Factory() { return new EditorConfigService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: EditorConfigService, providedIn: "root" });
    return EditorConfigService;
}());
export { EditorConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EditorConfigService.prototype._editorConfig;
    /**
     * @type {?}
     * @private
     */
    EditorConfigService.prototype._updatedConfig;
    /**
     * @type {?}
     * @private
     */
    EditorConfigService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    EditorConfigService.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2VkaXRvci8iLCJzb3VyY2VzIjpbImxpYi9lZGl0b3ItY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxHQUFHLEVBQUUsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7Ozs7QUFFakQ7SUFPRSw2QkFBb0IsS0FBaUIsRUFBVSxPQUFzQjtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUg3RCxrQkFBYSxHQUFrQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDdkYsbUJBQWMsR0FBNkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUlyRixDQUFDO0lBRUQsc0JBQUksOENBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7Ozs7SUFFRCxrQ0FBSTs7O0lBQUo7UUFBQSxpQkFXQztRQVZDLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07O2dCQUNqQyxjQUFjLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ3JFLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsUUFBc0I7O29CQUNwRixZQUFZLEdBQUcsbUJBQWMsUUFBUSxFQUFBO2dCQUMzQyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDdEMsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLEVBQUMsQ0FBQyxLQUFLOzs7O1lBQUMsVUFBQyxRQUFhO2dCQUNyQixNQUFNLENBQUMsbUNBQWlDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFHLENBQUMsQ0FBQztZQUN0RSxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBMUJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTE8sVUFBVTtnQkFETCxhQUFhOzs7OEJBRjFCO0NBa0NDLEFBNUJELElBNEJDO1NBekJZLG1CQUFtQjs7Ozs7O0lBQzlCLDRDQUErRjs7Ozs7SUFDL0YsNkNBQXFGOzs7OztJQUV6RSxvQ0FBeUI7Ozs7O0lBQUUsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtFZGl0b3JDb25maWd9IGZyb20gXCIuL2VkaXRvci1jb25maWdcIjtcclxuaW1wb3J0IHtBcGksIENvbmZpZ1NlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JDb25maWdTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9lZGl0b3JDb25maWc6IEJlaGF2aW9yU3ViamVjdDxFZGl0b3JDb25maWc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChuZXcgRWRpdG9yQ29uZmlnKCkpO1xyXG4gIHByaXZhdGUgX3VwZGF0ZWRDb25maWc6IE9ic2VydmFibGU8RWRpdG9yQ29uZmlnPiA9IHRoaXMuX2VkaXRvckNvbmZpZy5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBfY29uZmlnOiBDb25maWdTZXJ2aWNlKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0IHVwZGF0ZWRDb25maWcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlZENvbmZpZztcclxuICB9XHJcblxyXG4gIGxvYWQoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBjb25maWdFbmRwb2ludCA9IHRoaXMuX2NvbmZpZy5nZXRDb25maWdFbmRwb2ludChBcGkuRURJVE9SX0FQUCk7XHJcbiAgICAgIHRoaXMuX2h0dHAuZ2V0KGNvbmZpZ0VuZHBvaW50LCBBcGkuaHR0cE9wdGlvbnNKc29uKS50b1Byb21pc2UoKS50aGVuKChyZXNwb25zZTogRWRpdG9yQ29uZmlnKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWRpdG9yQ29uZmlnID0gPEVkaXRvckNvbmZpZz5yZXNwb25zZTtcclxuICAgICAgICB0aGlzLl9lZGl0b3JDb25maWcubmV4dChlZGl0b3JDb25maWcpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICByZWplY3QoYENvdWxkIG5vdCBsb2FkIGVkaXRvciBjb25maWc6ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpfWApO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19