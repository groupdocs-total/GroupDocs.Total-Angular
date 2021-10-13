/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Api, ConfigService, FileUtil } from "@groupdocs.examples.angular/common-components";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@groupdocs.examples.angular/common-components";
var AnnotationService = /** @class */ (function () {
    function AnnotationService(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    AnnotationService.prototype.loadFiles = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this._http.post(this._config.getAnnotationApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    AnnotationService.prototype.loadFile = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._http.post(this._config.getAnnotationApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
    };
    /**
     * @param {?} file
     * @param {?} url
     * @param {?} rewrite
     * @return {?}
     */
    AnnotationService.prototype.upload = /**
     * @param {?} file
     * @param {?} url
     * @param {?} rewrite
     * @return {?}
     */
    function (file, url, rewrite) {
        /** @type {?} */
        var formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getAnnotationApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    };
    /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    AnnotationService.prototype.loadPage = /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    function (credentials, page) {
        return this._http.post(this._config.getAnnotationApiEndpoint() + Api.LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'page': page
        }, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    AnnotationService.prototype.getDownloadUrl = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._config.getAnnotationApiEndpoint() + Api.DOWNLOAD_ANNOTATED + '/?path=' + credentials.guid;
    };
    /**
     * @param {?} credentials
     * @param {?} annotationsData
     * @param {?} print
     * @return {?}
     */
    AnnotationService.prototype.annotate = /**
     * @param {?} credentials
     * @param {?} annotationsData
     * @param {?} print
     * @return {?}
     */
    function (credentials, annotationsData, print) {
        /** @type {?} */
        var data = {
            'guid': credentials.guid,
            'password': credentials.password,
            'annotationsData': annotationsData,
            'documentType': FileUtil.find(credentials.guid, false).format,
            'print': print
        };
        return this._http.post(this._config.getAnnotationApiEndpoint() + Api.ANNOTATE, data, Api.httpOptionsJson);
    };
    AnnotationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AnnotationService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ AnnotationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AnnotationService_Factory() { return new AnnotationService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: AnnotationService, providedIn: "root" });
    return AnnotationService;
}());
export { AnnotationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AnnotationService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    AnnotationService.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2Fubm90YXRpb24vIiwic291cmNlcyI6WyJsaWIvYW5ub3RhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsR0FBRyxFQUFFLGFBQWEsRUFBbUIsUUFBUSxFQUFDLE1BQU0sK0NBQStDLENBQUM7Ozs7QUFFNUc7SUFLRSwyQkFBb0IsS0FBaUIsRUFBVSxPQUFzQjtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtJQUNyRSxDQUFDOzs7OztJQUVELHFDQUFTOzs7O0lBQVQsVUFBVSxJQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzVILENBQUM7Ozs7O0lBRUQsb0NBQVE7Ozs7SUFBUixVQUFTLFdBQTRCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxXQUFXLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BJLENBQUM7Ozs7Ozs7SUFFRCxrQ0FBTTs7Ozs7O0lBQU4sVUFBTyxJQUFVLEVBQUUsR0FBVyxFQUFFLE9BQWdCOztZQUN4QyxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUU7UUFDL0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxHQUFHLEVBQUU7WUFDUCxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNuRyxDQUFDOzs7Ozs7SUFFRCxvQ0FBUTs7Ozs7SUFBUixVQUFTLFdBQTRCLEVBQUUsSUFBWTtRQUNqRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxHQUFHLENBQUMsa0JBQWtCLEVBQUU7WUFDdkYsTUFBTSxFQUFFLFdBQVcsQ0FBQyxJQUFJO1lBQ3hCLFVBQVUsRUFBRSxXQUFXLENBQUMsUUFBUTtZQUNoQyxNQUFNLEVBQUUsSUFBSTtTQUNiLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsMENBQWM7Ozs7SUFBZCxVQUFlLFdBQTRCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztJQUN6RyxDQUFDOzs7Ozs7O0lBRUQsb0NBQVE7Ozs7OztJQUFSLFVBQVMsV0FBNEIsRUFBRSxlQUFvQixFQUFFLEtBQWM7O1lBQ25FLElBQUksR0FBRztZQUNYLE1BQU0sRUFBRSxXQUFXLENBQUMsSUFBSTtZQUN4QixVQUFVLEVBQUUsV0FBVyxDQUFDLFFBQVE7WUFDaEMsaUJBQWlCLEVBQUUsZUFBZTtZQUNsQyxjQUFjLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU07WUFDN0QsT0FBTyxFQUFFLEtBQUs7U0FDZjtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1RyxDQUFDOztnQkFoREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMTyxVQUFVO2dCQUNMLGFBQWE7Ozs0QkFGMUI7Q0FxREMsQUFqREQsSUFpREM7U0E5Q1ksaUJBQWlCOzs7Ozs7SUFFaEIsa0NBQXlCOzs7OztJQUFFLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7QXBpLCBDb25maWdTZXJ2aWNlLCBGaWxlQ3JlZGVudGlhbHMsIEZpbGVVdGlsfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX2NvbmZpZzogQ29uZmlnU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbG9hZEZpbGVzKHBhdGg6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0QW5ub3RhdGlvbkFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9GSUxFX1RSRUUsIHsncGF0aCc6IHBhdGh9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcclxuICB9XHJcblxyXG4gIGxvYWRGaWxlKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldEFubm90YXRpb25BcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRE9DVU1FTlRfREVTQ1JJUFRJT04sIGNyZWRlbnRpYWxzLCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcclxuICB9XHJcblxyXG4gIHVwbG9hZChmaWxlOiBGaWxlLCB1cmw6IHN0cmluZywgcmV3cml0ZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3Jld3JpdGUnLCBTdHJpbmcocmV3cml0ZSkpO1xyXG4gICAgaWYgKHVybCkge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cmxcIiwgdXJsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRBbm5vdGF0aW9uQXBpRW5kcG9pbnQoKSArIEFwaS5VUExPQURfRE9DVU1FTlRTLCBmb3JtRGF0YSk7XHJcbiAgfVxyXG5cclxuICBsb2FkUGFnZShjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzLCBwYWdlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldEFubm90YXRpb25BcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRE9DVU1FTlRfUEFHRSwge1xyXG4gICAgICAnZ3VpZCc6IGNyZWRlbnRpYWxzLmd1aWQsXHJcbiAgICAgICdwYXNzd29yZCc6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgICAncGFnZSc6IHBhZ2VcclxuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RG93bmxvYWRVcmwoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5nZXRBbm5vdGF0aW9uQXBpRW5kcG9pbnQoKSArIEFwaS5ET1dOTE9BRF9BTk5PVEFURUQgKyAnLz9wYXRoPScgKyBjcmVkZW50aWFscy5ndWlkO1xyXG4gIH1cclxuXHJcbiAgYW5ub3RhdGUoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscywgYW5ub3RhdGlvbnNEYXRhOiBhbnksIHByaW50OiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAnZ3VpZCc6IGNyZWRlbnRpYWxzLmd1aWQsXHJcbiAgICAgICdwYXNzd29yZCc6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgICAnYW5ub3RhdGlvbnNEYXRhJzogYW5ub3RhdGlvbnNEYXRhLFxyXG4gICAgICAnZG9jdW1lbnRUeXBlJzogRmlsZVV0aWwuZmluZChjcmVkZW50aWFscy5ndWlkLCBmYWxzZSkuZm9ybWF0LFxyXG4gICAgICAncHJpbnQnOiBwcmludFxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldEFubm90YXRpb25BcGlFbmRwb2ludCgpICsgQXBpLkFOTk9UQVRFLCBkYXRhLCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcclxuICB9XHJcbn1cclxuIl19