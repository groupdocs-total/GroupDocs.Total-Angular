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
var ComparisonService = /** @class */ (function () {
    function ComparisonService(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    ComparisonService.prototype.loadFiles = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this._http.post(this._config.getComparisonApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
    };
    /**
     * @return {?}
     */
    ComparisonService.prototype.getFormats = /**
     * @return {?}
     */
    function () {
        return this._http.get(this._config.getComparisonApiEndpoint() + Api.LOAD_FORMATS, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    ComparisonService.prototype.loadFile = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._http.post(this._config.getComparisonApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
    };
    /**
     * @param {?} file
     * @param {?} url
     * @param {?} rewrite
     * @return {?}
     */
    ComparisonService.prototype.upload = /**
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
        return this._http.post(this._config.getComparisonApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ComparisonService.prototype.save = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return this._http.post(this._config.getComparisonApiEndpoint() + Api.SAVE_FILE, file, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    ComparisonService.prototype.getDownloadUrl = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._config.getComparisonApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?guid=' + credentials.guid;
    };
    /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    ComparisonService.prototype.loadPage = /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    function (credentials, page) {
        return this._http.post(this._config.getComparisonApiEndpoint() + Api.LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'page': page
        }, Api.httpOptionsJson);
    };
    /**
     * @param {?} arr
     * @return {?}
     */
    ComparisonService.prototype.compare = /**
     * @param {?} arr
     * @return {?}
     */
    function (arr) {
        return this._http.post(this._config.getComparisonApiEndpoint() + Api.COMPARE_FILES, { 'guids': arr }, Api.httpOptionsJson);
    };
    ComparisonService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ComparisonService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ ComparisonService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ComparisonService_Factory() { return new ComparisonService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: ComparisonService, providedIn: "root" });
    return ComparisonService;
}());
export { ComparisonService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyaXNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvY29tcGFyaXNvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQ0wsR0FBRyxFQUFFLGFBQWEsRUFDbkIsTUFBTSwrQ0FBK0MsQ0FBQTs7OztBQUV0RDtJQUtFLDJCQUFvQixLQUFpQixFQUFVLE9BQXNCO1FBQWpELFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFlO0lBQ3JFLENBQUM7Ozs7O0lBRUQscUNBQVM7Ozs7SUFBVCxVQUFVLElBQVk7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUgsQ0FBQzs7OztJQUVELHNDQUFVOzs7SUFBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7Ozs7O0lBRUQsb0NBQVE7Ozs7SUFBUixVQUFTLFdBQTRCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxXQUFXLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BJLENBQUM7Ozs7Ozs7SUFFRCxrQ0FBTTs7Ozs7O0lBQU4sVUFBTyxJQUFVLEVBQUUsR0FBVyxFQUFFLE9BQWdCOztZQUN4QyxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUU7UUFDL0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxHQUFHLEVBQUU7WUFDUCxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNuRyxDQUFDOzs7OztJQUVELGdDQUFJOzs7O0lBQUosVUFBSyxJQUFjO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM3RyxDQUFDOzs7OztJQUVELDBDQUFjOzs7O0lBQWQsVUFBZSxXQUE0QjtRQUN6QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDekcsQ0FBQzs7Ozs7O0lBRUQsb0NBQVE7Ozs7O0lBQVIsVUFBUyxXQUE0QixFQUFFLElBQVk7UUFDakQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsR0FBRyxDQUFDLGtCQUFrQixFQUFFO1lBQ3ZGLE1BQU0sRUFBRSxXQUFXLENBQUMsSUFBSTtZQUN4QixVQUFVLEVBQUUsV0FBVyxDQUFDLFFBQVE7WUFDaEMsTUFBTSxFQUFFLElBQUk7U0FDYixFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELG1DQUFPOzs7O0lBQVAsVUFBUSxHQUFzQjtRQUM1QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxHQUFHLENBQUMsYUFBYSxFQUFFLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBQyxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMzSCxDQUFDOztnQkFqREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFQTyxVQUFVO2dCQUVYLGFBQWE7Ozs0QkFIcEI7Q0F3REMsQUFsREQsSUFrREM7U0EvQ1ksaUJBQWlCOzs7Ozs7SUFFaEIsa0NBQXlCOzs7OztJQUFFLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHtcbiAgQXBpLCBDb25maWdTZXJ2aWNlLCBGaWxlQ3JlZGVudGlhbHMsIFNhdmVGaWxlXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIlxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb21wYXJpc29uU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBfY29uZmlnOiBDb25maWdTZXJ2aWNlKSB7XG4gIH1cblxuICBsb2FkRmlsZXMocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0Q29tcGFyaXNvbkFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9GSUxFX1RSRUUsIHsncGF0aCc6IHBhdGh9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIGdldEZvcm1hdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX2NvbmZpZy5nZXRDb21wYXJpc29uQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX0ZPUk1BVFMsIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgbG9hZEZpbGUoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscykge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldENvbXBhcmlzb25BcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRE9DVU1FTlRfREVTQ1JJUFRJT04sIGNyZWRlbnRpYWxzLCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIHVwbG9hZChmaWxlOiBGaWxlLCB1cmw6IHN0cmluZywgcmV3cml0ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3Jld3JpdGUnLCBTdHJpbmcocmV3cml0ZSkpO1xuICAgIGlmICh1cmwpIHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVybFwiLCB1cmwpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldENvbXBhcmlzb25BcGlFbmRwb2ludCgpICsgQXBpLlVQTE9BRF9ET0NVTUVOVFMsIGZvcm1EYXRhKTtcbiAgfVxuXG4gIHNhdmUoZmlsZTogU2F2ZUZpbGUpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRDb21wYXJpc29uQXBpRW5kcG9pbnQoKSArIEFwaS5TQVZFX0ZJTEUsIGZpbGUsIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgZ2V0RG93bmxvYWRVcmwoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscykge1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuZ2V0Q29tcGFyaXNvbkFwaUVuZHBvaW50KCkgKyBBcGkuRE9XTkxPQURfRE9DVU1FTlRTICsgJy8/Z3VpZD0nICsgY3JlZGVudGlhbHMuZ3VpZDtcbiAgfVxuXG4gIGxvYWRQYWdlKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMsIHBhZ2U6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldENvbXBhcmlzb25BcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRE9DVU1FTlRfUEFHRSwge1xuICAgICAgJ2d1aWQnOiBjcmVkZW50aWFscy5ndWlkLFxuICAgICAgJ3Bhc3N3b3JkJzogY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAncGFnZSc6IHBhZ2VcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIGNvbXBhcmUoYXJyOiBGaWxlQ3JlZGVudGlhbHNbXSkge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldENvbXBhcmlzb25BcGlFbmRwb2ludCgpICsgQXBpLkNPTVBBUkVfRklMRVMsIHsnZ3VpZHMnOiBhcnJ9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxufVxuIl19