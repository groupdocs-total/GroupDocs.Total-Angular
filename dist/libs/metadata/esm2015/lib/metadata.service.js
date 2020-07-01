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
export class MetadataService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    loadFiles(path) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadFile(credentials) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadProperties(credentials) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_DOCUMENT_PROPERTIES, credentials, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadPropertiesNames(credentials) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_DOCUMENT_PROPERTIES_NAMES, credentials, Api.httpOptionsJson);
    }
    /**
     * @param {?} metadataFile
     * @return {?}
     */
    saveProperty(metadataFile) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.SAVE_PROPERTY, metadataFile, Api.httpOptionsJson);
    }
    /**
     * @param {?} metadataFile
     * @return {?}
     */
    removeProperty(metadataFile) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.REMOVE_PROPERTY, metadataFile, Api.httpOptionsJson);
    }
    /**
     * @param {?} file
     * @param {?} url
     * @param {?} rewrite
     * @return {?}
     */
    upload(file, url, rewrite) {
        /** @type {?} */
        const formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    }
    /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    loadPage(credentials, page) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'page': page
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    getDownloadUrl(credentials) {
        return this._config.getMetadataApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadPrint(credentials) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_PRINT, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, Api.httpOptionsJson);
    }
}
MetadataService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MetadataService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ MetadataService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MetadataService_Factory() { return new MetadataService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: MetadataService, providedIn: "root" });
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
export class MetadataFileDescription {
}
if (false) {
    /** @type {?} */
    MetadataFileDescription.prototype.guid;
    /** @type {?} */
    MetadataFileDescription.prototype.properties;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZXRhZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsR0FBRyxFQUFFLGFBQWEsRUFBa0IsTUFBTSwrQ0FBK0MsQ0FBQzs7OztBQU9sRyxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFFMUIsWUFBb0IsS0FBaUIsRUFBVSxPQUFzQjtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtJQUNyRSxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzFILENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLFdBQTRCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxXQUFXLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xJLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFdBQTRCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyx3QkFBd0Is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YW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge0FwaSwgQ29uZmlnU2VydmljZSwgRmlsZUNyZWRlbnRpYWxzfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBGaWxlUHJvcGVydHlNb2RlbCB9IGZyb20gJy4vbWV0YWRhdGEtbW9kZWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZXRhZGF0YVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX2NvbmZpZzogQ29uZmlnU2VydmljZSkge1xuICB9XG5cbiAgbG9hZEZpbGVzKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldE1ldGFkYXRhQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX0ZJTEVfVFJFRSwgeydwYXRoJzogcGF0aH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgbG9hZEZpbGUoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscykge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldE1ldGFkYXRhQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX0RPQ1VNRU5UX0RFU0NSSVBUSU9OLCBjcmVkZW50aWFscywgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICBsb2FkUHJvcGVydGllcyhjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0TWV0YWRhdGFBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRE9DVU1FTlRfUFJPUEVSVElFUywgY3JlZGVudGlhbHMsIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgbG9hZFByb3BlcnRpZXNOYW1lcyhjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0TWV0YWRhdGFBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRE9DVU1FTlRfUFJPUEVSVElFU19OQU1FUywgY3JlZGVudGlhbHMsIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgc2F2ZVByb3BlcnR5KG1ldGFkYXRhRmlsZTogTWV0YWRhdGFGaWxlRGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRNZXRhZGF0YUFwaUVuZHBvaW50KCkgKyBBcGkuU0FWRV9QUk9QRVJUWSwgbWV0YWRhdGFGaWxlLCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIHJlbW92ZVByb3BlcnR5KG1ldGFkYXRhRmlsZTogTWV0YWRhdGFGaWxlRGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRNZXRhZGF0YUFwaUVuZHBvaW50KCkgKyBBcGkuUkVNT1ZFX1BST1BFUlRZLCBtZXRhZGF0YUZpbGUsIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgdXBsb2FkKGZpbGU6IEZpbGUsIHVybDogc3RyaW5nLCByZXdyaXRlOiBib29sZWFuKSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgncmV3cml0ZScsIFN0cmluZyhyZXdyaXRlKSk7XG4gICAgaWYgKHVybCkge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXJsXCIsIHVybCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0TWV0YWRhdGFBcGlFbmRwb2ludCgpICsgQXBpLlVQTE9BRF9ET0NVTUVOVFMsIGZvcm1EYXRhKTtcbiAgfVxuXG4gIGxvYWRQYWdlKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMsIHBhZ2U6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldE1ldGFkYXRhQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX0RPQ1VNRU5UX1BBR0UsIHtcbiAgICAgICdndWlkJzogY3JlZGVudGlhbHMuZ3VpZCxcbiAgICAgICdwYXNzd29yZCc6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgJ3BhZ2UnOiBwYWdlXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICBnZXREb3dubG9hZFVybChjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5nZXRNZXRhZGF0YUFwaUVuZHBvaW50KCkgKyBBcGkuRE9XTkxPQURfRE9DVU1FTlRTICsgJy8/cGF0aD0nICsgY3JlZGVudGlhbHMuZ3VpZDtcbiAgfVxuXG4gIGxvYWRQcmludChjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0TWV0YWRhdGFBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfUFJJTlQsIHtcbiAgICAgICdndWlkJzogY3JlZGVudGlhbHMuZ3VpZCxcbiAgICAgICdwYXNzd29yZCc6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNZXRhZGF0YUZpbGVEZXNjcmlwdGlvbiB7XG4gIGd1aWQ6IHN0cmluZztcbiAgcHJvcGVydGllczogRmlsZVByb3BlcnR5TW9kZWxbXTtcbn1cbiJdfQ==