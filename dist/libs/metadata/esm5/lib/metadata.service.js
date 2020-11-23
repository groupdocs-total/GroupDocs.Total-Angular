/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Api, ConfigService } from "@groupdocs.examples.angular/common-components";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@groupdocs.examples.angular/common-components";
var MetadataService = /** @class */ (function () {
    function MetadataService(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    MetadataService.prototype.loadFiles = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    MetadataService.prototype.loadFile = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    MetadataService.prototype.loadProperties = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_DOCUMENT_PROPERTIES, credentials, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    MetadataService.prototype.loadPropertiesNames = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_DOCUMENT_PROPERTIES_NAMES, credentials, Api.httpOptionsJson);
    };
    /**
     * @param {?} metadataFile
     * @return {?}
     */
    MetadataService.prototype.saveProperty = /**
     * @param {?} metadataFile
     * @return {?}
     */
    function (metadataFile) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.SAVE_PROPERTY, metadataFile, Api.httpOptionsJson);
    };
    /**
     * @param {?} metadataFile
     * @return {?}
     */
    MetadataService.prototype.removeProperty = /**
     * @param {?} metadataFile
     * @return {?}
     */
    function (metadataFile) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.REMOVE_PROPERTY, metadataFile, Api.httpOptionsJson);
    };
    /**
     * @param {?} metadataFile
     * @return {?}
     */
    MetadataService.prototype.cleanMetadata = /**
     * @param {?} metadataFile
     * @return {?}
     */
    function (metadataFile) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.CLEAN_METADATA, metadataFile, Api.httpOptionsJson);
    };
    /**
     * @param {?} file
     * @param {?} url
     * @param {?} rewrite
     * @return {?}
     */
    MetadataService.prototype.upload = /**
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
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    };
    /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    MetadataService.prototype.loadPage = /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    function (credentials, page) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'page': page
        }, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    MetadataService.prototype.getDownloadUrl = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._config.getMetadataApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    MetadataService.prototype.exportProperties = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.EXPORT_METADATA, credentials, Api.httpOptionsJsonResponseTypeBlob);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    MetadataService.prototype.loadPrint = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_PRINT, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, Api.httpOptionsJson);
    };
    MetadataService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MetadataService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ MetadataService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MetadataService_Factory() { return new MetadataService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: MetadataService, providedIn: "root" });
    return MetadataService;
}());
export { MetadataService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MetadataService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    MetadataService.prototype._config;
}
var MetadataFileDescription = /** @class */ (function () {
    function MetadataFileDescription() {
    }
    return MetadataFileDescription;
}());
export { MetadataFileDescription };
if (false) {
    /** @type {?} */
    MetadataFileDescription.prototype.guid;
    /** @type {?} */
    MetadataFileDescription.prototype.password;
    /** @type {?} */
    MetadataFileDescription.prototype.packages;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZXRhZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsR0FBRyxFQUFFLGFBQWEsRUFBa0IsTUFBTSwrQ0FBK0MsQ0FBQzs7OztBQUdsRztJQU1FLHlCQUFvQixLQUFpQixFQUFVLE9BQXNCO1FBQWpELFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFlO0lBQ3JFLENBQUM7Ozs7O0lBRUQsbUNBQVM7Ozs7SUFBVCxVQUFVLElBQVk7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDMUgsQ0FBQzs7Ozs7SUFFRCxrQ0FBUTs7OztJQUFSLFVBQVMsV0FBNEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsR0FBRyxDQUFDLHlCQUF5QixFQUFFLFdBQVcsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEksQ0FBQzs7Ozs7SUFFRCx3Q0FBYzs7OztJQUFkLFVBQWUsV0FBNEI7UUFDekMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsR0FBRyxDQUFD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QVM7Ozs7SUFBVCxVQUFVLFdBQTRCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUU7WUFDN0UsTUFBTSxFQUFFLFdBQVcsQ0FBQyxJQUFJO1lBQ3hCLFVBQVUsRUFBRSxXQUFXLENBQUMsUUFBUTtTQUNqQyxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMxQixDQUFDOztnQkFyRUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOTyxVQUFVO2dCQUNMLGFBQWE7OzswQkFGMUI7Q0EyRUMsQUF0RUQsSUFzRUM7U0FsRVksZUFBZTs7Ozs7O0lBRWQsZ0NBQXlCOzs7OztJQUFFLGtDQUE4Qjs7QUFrRXZFO0lBQUE7SUFJQSxDQUFDO0lBQUQsOEJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhDLHVDQUFhOztJQUNiLDJDQUFpQjs7SUFDakIsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge0FwaSwgQ29uZmlnU2VydmljZSwgRmlsZUNyZWRlbnRpYWxzfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBDaGFuZ2VkUGFja2FnZU1vZGVsIH0gZnJvbSAnLi9tZXRhZGF0YS1tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBfY29uZmlnOiBDb25maWdTZXJ2aWNlKSB7XG4gIH1cblxuICBsb2FkRmlsZXMocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0TWV0YWRhdGFBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRklMRV9UUkVFLCB7J3BhdGgnOiBwYXRofSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICBsb2FkRmlsZShjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0TWV0YWRhdGFBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRE9DVU1FTlRfREVTQ1JJUFRJT04sIGNyZWRlbnRpYWxzLCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIGxvYWRQcm9wZXJ0aWVzKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRNZXRhZGF0YUFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9ET0NVTUVOVF9QUk9QRVJUSUVTLCBjcmVkZW50aWFscywgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICBsb2FkUHJvcGVydGllc05hbWVzKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRNZXRhZGF0YUFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9ET0NVTUVOVF9QUk9QRVJUSUVTX05BTUVTLCBjcmVkZW50aWFscywgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICBzYXZlUHJvcGVydHkobWV0YWRhdGFGaWxlOiBNZXRhZGF0YUZpbGVEZXNjcmlwdGlvbikge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldE1ldGFkYXRhQXBpRW5kcG9pbnQoKSArIEFwaS5TQVZFX1BST1BFUlRZLCBtZXRhZGF0YUZpbGUsIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgcmVtb3ZlUHJvcGVydHkobWV0YWRhdGFGaWxlOiBNZXRhZGF0YUZpbGVEZXNjcmlwdGlvbikge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldE1ldGFkYXRhQXBpRW5kcG9pbnQoKSArIEFwaS5SRU1PVkVfUFJPUEVSVFksIG1ldGFkYXRhRmlsZSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICBjbGVhbk1ldGFkYXRhKG1ldGFkYXRhRmlsZTogRmlsZUNyZWRlbnRpYWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0TWV0YWRhdGFBcGlFbmRwb2ludCgpICsgQXBpLkNMRUFOX01FVEFEQVRBLCBtZXRhZGF0YUZpbGUsIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgdXBsb2FkKGZpbGU6IEZpbGUsIHVybDogc3RyaW5nLCByZXdyaXRlOiBib29sZWFuKSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgncmV3cml0ZScsIFN0cmluZyhyZXdyaXRlKSk7XG4gICAgaWYgKHVybCkge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXJsXCIsIHVybCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0TWV0YWRhdGFBcGlFbmRwb2ludCgpICsgQXBpLlVQTE9BRF9ET0NVTUVOVFMsIGZvcm1EYXRhKTtcbiAgfVxuXG4gIGxvYWRQYWdlKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMsIHBhZ2U6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldE1ldGFkYXRhQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX0RPQ1VNRU5UX1BBR0UsIHtcbiAgICAgICdndWlkJzogY3JlZGVudGlhbHMuZ3VpZCxcbiAgICAgICdwYXNzd29yZCc6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgJ3BhZ2UnOiBwYWdlXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICBnZXREb3dubG9hZFVybChjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5nZXRNZXRhZGF0YUFwaUVuZHBvaW50KCkgKyBBcGkuRE9XTkxPQURfRE9DVU1FTlRTICsgJy8/cGF0aD0nICsgY3JlZGVudGlhbHMuZ3VpZDtcbiAgfVxuXG4gIGV4cG9ydFByb3BlcnRpZXMoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscykge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldE1ldGFkYXRhQXBpRW5kcG9pbnQoKSArIEFwaS5FWFBPUlRfTUVUQURBVEEsIGNyZWRlbnRpYWxzLCBBcGkuaHR0cE9wdGlvbnNKc29uUmVzcG9uc2VUeXBlQmxvYik7XG4gIH1cblxuICBsb2FkUHJpbnQoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscykge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldE1ldGFkYXRhQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX1BSSU5ULCB7XG4gICAgICAnZ3VpZCc6IGNyZWRlbnRpYWxzLmd1aWQsXG4gICAgICAncGFzc3dvcmQnOiBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWV0YWRhdGFGaWxlRGVzY3JpcHRpb24ge1xuICBndWlkOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIHBhY2thZ2VzOiBDaGFuZ2VkUGFja2FnZU1vZGVsW107XG59XG4iXX0=