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
export class ViewerService {
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
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadFile(credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
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
        return this._http.post(this._config.getViewerApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    }
    /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    loadPage(credentials, page) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'page': page
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @param {?} angle
     * @param {?} page
     * @return {?}
     */
    rotate(credentials, angle, page) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.ROTATE_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'pages': [page],
            'angle': angle
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    getDownloadUrl(credentials) {
        return this._config.getViewerApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadPrint(credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_PRINT, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadPrintPdf(credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_PRINT_PDF, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, Api.httpOptionsJsonResponseTypeBlob);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadThumbnails(credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_THUMBNAILS, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, Api.httpOptionsJson);
    }
}
ViewerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ViewerService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ ViewerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ViewerService_Factory() { return new ViewerService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: ViewerService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ViewerService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ViewerService.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3ZpZXdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsR0FBRyxFQUFFLGFBQWEsRUFBa0IsTUFBTSwrQ0FBK0MsQ0FBQzs7OztBQUtsRyxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFFeEIsWUFBb0IsS0FBaUIsRUFBVSxPQUFzQjtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtJQUNyRSxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3hILENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLFdBQTRCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxXQUFXLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2hJLENBQUM7Ozs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBVSxFQUFFLEdBQVcsRUFBRSxPQUFnQjs7Y0FDeEMsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFO1FBQy9CLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxD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aW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge0FwaSwgQ29uZmlnU2VydmljZSwgRmlsZUNyZWRlbnRpYWxzfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX2NvbmZpZzogQ29uZmlnU2VydmljZSkge1xuICB9XG5cbiAgbG9hZEZpbGVzKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFZpZXdlckFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9GSUxFX1RSRUUsIHsncGF0aCc6IHBhdGh9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIGxvYWRGaWxlKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRWaWV3ZXJBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRE9DVU1FTlRfREVTQ1JJUFRJT04sIGNyZWRlbnRpYWxzLCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIHVwbG9hZChmaWxlOiBGaWxlLCB1cmw6IHN0cmluZywgcmV3cml0ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3Jld3JpdGUnLCBTdHJpbmcocmV3cml0ZSkpO1xuICAgIGlmICh1cmwpIHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVybFwiLCB1cmwpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFZpZXdlckFwaUVuZHBvaW50KCkgKyBBcGkuVVBMT0FEX0RPQ1VNRU5UUywgZm9ybURhdGEpO1xuICB9XG5cbiAgbG9hZFBhZ2UoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscywgcGFnZTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0Vmlld2VyQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX0RPQ1VNRU5UX1BBR0UsIHtcbiAgICAgICdndWlkJzogY3JlZGVudGlhbHMuZ3VpZCxcbiAgICAgICdwYXNzd29yZCc6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgJ3BhZ2UnOiBwYWdlXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICByb3RhdGUoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscywgYW5nbGU6IG51bWJlciwgcGFnZTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0Vmlld2VyQXBpRW5kcG9pbnQoKSArIEFwaS5ST1RBVEVfRE9DVU1FTlRfUEFHRSwge1xuICAgICAgJ2d1aWQnOiBjcmVkZW50aWFscy5ndWlkLFxuICAgICAgJ3Bhc3N3b3JkJzogY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAncGFnZXMnOiBbcGFnZV0sXG4gICAgICAnYW5nbGUnOiBhbmdsZVxuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgZ2V0RG93bmxvYWRVcmwoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscykge1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuZ2V0Vmlld2VyQXBpRW5kcG9pbnQoKSArIEFwaS5ET1dOTE9BRF9ET0NVTUVOVFMgKyAnLz9wYXRoPScgKyBjcmVkZW50aWFscy5ndWlkO1xuICB9XG5cbiAgbG9hZFByaW50KGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRWaWV3ZXJBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfUFJJTlQsIHtcbiAgICAgICdndWlkJzogY3JlZGVudGlhbHMuZ3VpZCxcbiAgICAgICdwYXNzd29yZCc6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgbG9hZFByaW50UGRmKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRWaWV3ZXJBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfUFJJTlRfUERGLCB7XG4gICAgICAnZ3VpZCc6IGNyZWRlbnRpYWxzLmd1aWQsXG4gICAgICAncGFzc3dvcmQnOiBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uUmVzcG9uc2VUeXBlQmxvYik7XG4gIH1cblxuICBsb2FkVGh1bWJuYWlscyhjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0Vmlld2VyQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX1RIVU1CTkFJTFMsIHtcbiAgICAgICdndWlkJzogY3JlZGVudGlhbHMuZ3VpZCxcbiAgICAgICdwYXNzd29yZCc6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG59XG4iXX0=