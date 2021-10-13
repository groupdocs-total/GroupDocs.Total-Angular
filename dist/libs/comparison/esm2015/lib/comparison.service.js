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
export class ComparisonService {
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
        return this._http.post(this._config.getComparisonApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
    }
    /**
     * @return {?}
     */
    getFormats() {
        return this._http.get(this._config.getComparisonApiEndpoint() + Api.LOAD_FORMATS, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadFile(credentials) {
        return this._http.post(this._config.getComparisonApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
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
        return this._http.post(this._config.getComparisonApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    save(file) {
        return this._http.post(this._config.getComparisonApiEndpoint() + Api.SAVE_FILE, file, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    getDownloadUrl(credentials) {
        return this._config.getComparisonApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?guid=' + credentials.guid;
    }
    /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    loadPage(credentials, page) {
        return this._http.post(this._config.getComparisonApiEndpoint() + Api.LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'page': page
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} arr
     * @return {?}
     */
    compare(arr) {
        return this._http.post(this._config.getComparisonApiEndpoint() + Api.COMPARE_FILES, { 'guids': arr }, Api.httpOptionsJson);
    }
}
ComparisonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ComparisonService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ ComparisonService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ComparisonService_Factory() { return new ComparisonService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: ComparisonService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComparisonService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ComparisonService.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyaXNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvY29tcGFyaXNvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQ0wsR0FBRyxFQUFFLGFBQWEsRUFDbkIsTUFBTSwrQ0FBK0MsQ0FBQTs7OztBQUt0RCxNQUFNLE9BQU8saUJBQWlCOzs7OztJQUU1QixZQUFvQixLQUFpQixFQUFVLE9BQXNCO1FBQWpELFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFlO0lBQ3JFLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQVk7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUgsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxHQUFHLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN6RyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxXQUE0QjtRQUNuQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxHQUFHLENBQUMseUJBQXlCLEVBQUUsV0FBVyxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNwSSxDQUFDOzs7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQVUsRUFBRSxHQUFXLEVBQUUsT0FBZ0I7O2NBQ3hDLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRTtRQUMvQixRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QixRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLEdBQUcsRUFBRTtZQUNQLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25HLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLElBQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzdHLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFdBQTRCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztJQUN6RyxDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsV0FBNEIsRUFBRSxJQUFZO1FBQ2pELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRTtZQUN2RixNQUFNLEVBQUUsV0FBVyxDQUFDLElBQUk7WUFDeEIsVUFBVSxFQUFFLFdBQVcsQ0FBQyxRQUFRO1lBQ2hDLE1BQU0sRUFBRSxJQUFJO1NBQ2IsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsR0FBc0I7UUFDNUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsR0FBRyxDQUFDLGFBQWEsRUFBRSxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0gsQ0FBQzs7O1lBakRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBPLFVBQVU7WUFFWCxhQUFhOzs7Ozs7OztJQVFOLGtDQUF5Qjs7Ozs7SUFBRSxvQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7XG4gIEFwaSwgQ29uZmlnU2VydmljZSwgRmlsZUNyZWRlbnRpYWxzLCBTYXZlRmlsZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCJcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tcGFyaXNvblNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX2NvbmZpZzogQ29uZmlnU2VydmljZSkge1xuICB9XG5cbiAgbG9hZEZpbGVzKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldENvbXBhcmlzb25BcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRklMRV9UUkVFLCB7J3BhdGgnOiBwYXRofSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICBnZXRGb3JtYXRzKCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl9jb25maWcuZ2V0Q29tcGFyaXNvbkFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9GT1JNQVRTLCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIGxvYWRGaWxlKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRDb21wYXJpc29uQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX0RPQ1VNRU5UX0RFU0NSSVBUSU9OLCBjcmVkZW50aWFscywgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICB1cGxvYWQoZmlsZTogRmlsZSwgdXJsOiBzdHJpbmcsIHJld3JpdGU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdyZXdyaXRlJywgU3RyaW5nKHJld3JpdGUpKTtcbiAgICBpZiAodXJsKSB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cmxcIiwgdXJsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRDb21wYXJpc29uQXBpRW5kcG9pbnQoKSArIEFwaS5VUExPQURfRE9DVU1FTlRTLCBmb3JtRGF0YSk7XG4gIH1cblxuICBzYXZlKGZpbGU6IFNhdmVGaWxlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0Q29tcGFyaXNvbkFwaUVuZHBvaW50KCkgKyBBcGkuU0FWRV9GSUxFLCBmaWxlLCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIGdldERvd25sb2FkVXJsKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLmdldENvbXBhcmlzb25BcGlFbmRwb2ludCgpICsgQXBpLkRPV05MT0FEX0RPQ1VNRU5UUyArICcvP2d1aWQ9JyArIGNyZWRlbnRpYWxzLmd1aWQ7XG4gIH1cblxuICBsb2FkUGFnZShjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzLCBwYWdlOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRDb21wYXJpc29uQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX0RPQ1VNRU5UX1BBR0UsIHtcbiAgICAgICdndWlkJzogY3JlZGVudGlhbHMuZ3VpZCxcbiAgICAgICdwYXNzd29yZCc6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgJ3BhZ2UnOiBwYWdlXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICBjb21wYXJlKGFycjogRmlsZUNyZWRlbnRpYWxzW10pIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRDb21wYXJpc29uQXBpRW5kcG9pbnQoKSArIEFwaS5DT01QQVJFX0ZJTEVTLCB7J2d1aWRzJzogYXJyfSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cbn1cbiJdfQ==