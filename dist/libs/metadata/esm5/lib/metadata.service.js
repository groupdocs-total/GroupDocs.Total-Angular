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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZXRhZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsR0FBRyxFQUFFLGFBQWEsRUFBa0IsTUFBTSwrQ0FBK0MsQ0FBQzs7OztBQUdsRztJQU1FLHlCQUFvQixLQUFpQixFQUFVLE9BQXNCO1FBQWpELFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFlO0lBQ3JFLENBQUM7Ozs7O0lBRUQsbUNBQVM7Ozs7SUFBVCxVQUFVLElBQVk7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDMUgsQ0FBQzs7Ozs7SUFFRCxrQ0FBUTs7OztJQUFSLFVBQVMsV0FBNEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsR0FBRyxDQUFDLHlCQUF5QixFQUFFLFdBQVcsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEksQ0FBQzs7Ozs7SUFFRCx3Q0FBYzs7OztJQUFkLFVBQWUsV0FBNEI7UUFDekMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsR0FBRyxDQUFD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QUNqQyxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMxQixDQUFDOztnQkFqRUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOTyxVQUFVO2dCQUNMLGFBQWE7OzswQkFGMUI7Q0F1RUMsQUFsRUQsSUFrRUM7U0E5RFksZUFBZTs7Ozs7O0lBRWQsZ0NBQXlCOzs7OztJQUFFLGtDQUE4Qjs7QUE4RHZFO0lBQUE7SUFJQSxDQUFDO0lBQUQsOEJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhDLHVDQUFhOztJQUNiLDJDQUFpQjs7SUFDakIsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHtBcGksIENvbmZpZ1NlcnZpY2UsIEZpbGVDcmVkZW50aWFsc30gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBDaGFuZ2VkUGFja2FnZU1vZGVsIH0gZnJvbSAnLi9tZXRhZGF0YS1tb2RlbHMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX2NvbmZpZzogQ29uZmlnU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbG9hZEZpbGVzKHBhdGg6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0TWV0YWRhdGFBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRklMRV9UUkVFLCB7J3BhdGgnOiBwYXRofSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XHJcbiAgfVxyXG5cclxuICBsb2FkRmlsZShjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRNZXRhZGF0YUFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9ET0NVTUVOVF9ERVNDUklQVElPTiwgY3JlZGVudGlhbHMsIEFwaS5odHRwT3B0aW9uc0pzb24pO1xyXG4gIH1cclxuXHJcbiAgbG9hZFByb3BlcnRpZXMoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0TWV0YWRhdGFBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRE9DVU1FTlRfUFJPUEVSVElFUywgY3JlZGVudGlhbHMsIEFwaS5odHRwT3B0aW9uc0pzb24pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVByb3BlcnR5KG1ldGFkYXRhRmlsZTogTWV0YWRhdGFGaWxlRGVzY3JpcHRpb24pIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldE1ldGFkYXRhQXBpRW5kcG9pbnQoKSArIEFwaS5TQVZFX1BST1BFUlRZLCBtZXRhZGF0YUZpbGUsIEFwaS5odHRwT3B0aW9uc0pzb24pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUHJvcGVydHkobWV0YWRhdGFGaWxlOiBNZXRhZGF0YUZpbGVEZXNjcmlwdGlvbikge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0TWV0YWRhdGFBcGlFbmRwb2ludCgpICsgQXBpLlJFTU9WRV9QUk9QRVJUWSwgbWV0YWRhdGFGaWxlLCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcclxuICB9XHJcblxyXG4gIGNsZWFuTWV0YWRhdGEobWV0YWRhdGFGaWxlOiBGaWxlQ3JlZGVudGlhbHMpIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldE1ldGFkYXRhQXBpRW5kcG9pbnQoKSArIEFwaS5DTEVBTl9NRVRBREFUQSwgbWV0YWRhdGFGaWxlLCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcclxuICB9XHJcblxyXG4gIHVwbG9hZChmaWxlOiBGaWxlLCB1cmw6IHN0cmluZywgcmV3cml0ZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3Jld3JpdGUnLCBTdHJpbmcocmV3cml0ZSkpO1xyXG4gICAgaWYgKHVybCkge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cmxcIiwgdXJsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRNZXRhZGF0YUFwaUVuZHBvaW50KCkgKyBBcGkuVVBMT0FEX0RPQ1VNRU5UUywgZm9ybURhdGEpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFBhZ2UoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscywgcGFnZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRNZXRhZGF0YUFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9ET0NVTUVOVF9QQUdFLCB7XHJcbiAgICAgICdndWlkJzogY3JlZGVudGlhbHMuZ3VpZCxcclxuICAgICAgJ3Bhc3N3b3JkJzogY3JlZGVudGlhbHMucGFzc3dvcmQsXHJcbiAgICAgICdwYWdlJzogcGFnZVxyXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XHJcbiAgfVxyXG5cclxuICBnZXREb3dubG9hZFVybChjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLmdldE1ldGFkYXRhQXBpRW5kcG9pbnQoKSArIEFwaS5ET1dOTE9BRF9ET0NVTUVOVFMgKyAnLz9wYXRoPScgKyBjcmVkZW50aWFscy5ndWlkO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0UHJvcGVydGllcyhjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRNZXRhZGF0YUFwaUVuZHBvaW50KCkgKyBBcGkuRVhQT1JUX01FVEFEQVRBLCBjcmVkZW50aWFscywgQXBpLmh0dHBPcHRpb25zSnNvblJlc3BvbnNlVHlwZUJsb2IpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFByaW50KGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldE1ldGFkYXRhQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX1BSSU5ULCB7XHJcbiAgICAgICdndWlkJzogY3JlZGVudGlhbHMuZ3VpZCxcclxuICAgICAgJ3Bhc3N3b3JkJzogY3JlZGVudGlhbHMucGFzc3dvcmQsXHJcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNZXRhZGF0YUZpbGVEZXNjcmlwdGlvbiB7XHJcbiAgZ3VpZDogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgcGFja2FnZXM6IENoYW5nZWRQYWNrYWdlTW9kZWxbXTtcclxufVxyXG4iXX0=