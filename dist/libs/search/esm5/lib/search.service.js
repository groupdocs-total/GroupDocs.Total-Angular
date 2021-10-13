/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Api, ConfigService } from "@groupdocs.examples.angular/common-components";
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@groupdocs.examples.angular/common-components";
var SearchService = /** @class */ (function () {
    function SearchService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._itemToRemove = new BehaviorSubject(null);
        this.itemToRemove = this._itemToRemove.asObservable();
    }
    /**
     * @param {?} filesToIndex
     * @return {?}
     */
    SearchService.prototype.addFilesToIndex = /**
     * @param {?} filesToIndex
     * @return {?}
     */
    function (filesToIndex) {
        return this._http.post(this._config.getSearchApiEndpoint() + Api.ADD_FILES_TO_INDEX, filesToIndex, Api.httpOptionsJson);
    };
    /**
     * @param {?} path
     * @return {?}
     */
    SearchService.prototype.loadFiles = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this._http.post(this._config.getSearchApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    SearchService.prototype.loadFile = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._http.post(this._config.getSearchApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
    };
    /**
     * @param {?} file
     * @param {?} url
     * @param {?} rewrite
     * @return {?}
     */
    SearchService.prototype.upload = /**
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
        return this._http.post(this._config.getSearchApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    };
    /**
     * @param {?} credentials
     * @param {?} query
     * @return {?}
     */
    SearchService.prototype.search = /**
     * @param {?} credentials
     * @param {?} query
     * @return {?}
     */
    function (credentials, query) {
        return this._http.post(this._config.getSearchApiEndpoint() + Api.SEARCH, {
            'query': query
        }, Api.httpOptionsJson);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    SearchService.prototype.removeFile = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return this._http.post(this._config.getSearchApiEndpoint() + Api.REMOVE_FROM_INDEX, file, Api.httpOptionsJson);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    SearchService.prototype.selectedItemToRemove = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this._itemToRemove.next(file);
    };
    /**
     * @param {?} files
     * @return {?}
     */
    SearchService.prototype.getDocumentStatus = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        return this._http.post(this._config.getSearchApiEndpoint() + Api.GET_FILE_STATUS, files, Api.httpOptionsJson);
    };
    SearchService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SearchService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ SearchService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SearchService_Factory() { return new SearchService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: SearchService, providedIn: "root" });
    return SearchService;
}());
export { SearchService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype._itemToRemove;
    /** @type {?} */
    SearchService.prototype.itemToRemove;
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2VhcmNoLyIsInNvdXJjZXMiOlsibGliL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBOEIsTUFBTSwrQ0FBK0MsQ0FBQztBQUMvRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBR3ZDO0lBUUUsdUJBQW9CLEtBQWlCLEVBQVUsT0FBc0I7UUFBakQsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFIN0Qsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBWSxJQUFJLENBQUMsQ0FBQztRQUM3RCxpQkFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHakQsQ0FBQzs7Ozs7SUFFRCx1Q0FBZTs7OztJQUFmLFVBQWdCLFlBQXlCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzFILENBQUM7Ozs7O0lBRUQsaUNBQVM7Ozs7SUFBVCxVQUFVLElBQVk7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDeEgsQ0FBQzs7Ozs7SUFFRCxnQ0FBUTs7OztJQUFSLFVBQVMsV0FBNEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsR0FBRyxDQUFDLHlCQUF5QixFQUFFLFdBQVcsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDaEksQ0FBQzs7Ozs7OztJQUVELDhCQUFNOzs7Ozs7SUFBTixVQUFPLElBQVUsRUFBRSxHQUFXLEVBQUUsT0FBZ0I7O1lBQ3hDLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRTtRQUMvQixRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QixRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLEdBQUcsRUFBRTtZQUNQLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9GLENBQUM7Ozs7OztJQUVELDhCQUFNOzs7OztJQUFOLFVBQU8sV0FBOEIsRUFBRSxLQUFhO1FBQ2xELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDdkUsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELGtDQUFVOzs7O0lBQVYsVUFBVyxJQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2pILENBQUM7Ozs7O0lBRUQsNENBQW9COzs7O0lBQXBCLFVBQXFCLElBQWU7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCx5Q0FBaUI7Ozs7SUFBakIsVUFBa0IsS0FBeUI7UUFDekMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsR0FBRyxDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2hILENBQUM7O2dCQWxERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBRLFVBQVU7Z0JBQ0wsYUFBYTs7O3dCQUYzQjtDQXlEQyxBQW5ERCxJQW1EQztTQS9DWSxhQUFhOzs7Ozs7SUFDeEIsc0NBQTZEOztJQUM3RCxxQ0FBaUQ7Ozs7O0lBRXJDLDhCQUF5Qjs7Ozs7SUFBRSxnQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBBcGksIENvbmZpZ1NlcnZpY2UsIEZpbGVDcmVkZW50aWFscywgRmlsZU1vZGVsIH0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmRleGVkRmlsZU1vZGVsIH0gZnJvbSAnLi9zZWFyY2gtbW9kZWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfaXRlbVRvUmVtb3ZlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxGaWxlTW9kZWw+KG51bGwpO1xuICBpdGVtVG9SZW1vdmUgPSB0aGlzLl9pdGVtVG9SZW1vdmUuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBfY29uZmlnOiBDb25maWdTZXJ2aWNlKSB7XG4gIH1cblxuICBhZGRGaWxlc1RvSW5kZXgoZmlsZXNUb0luZGV4OiBGaWxlTW9kZWxbXSkge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNlYXJjaEFwaUVuZHBvaW50KCkgKyBBcGkuQUREX0ZJTEVTX1RPX0lOREVYLCBmaWxlc1RvSW5kZXgsIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgbG9hZEZpbGVzKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNlYXJjaEFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9GSUxFX1RSRUUsIHsncGF0aCc6IHBhdGh9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIGxvYWRGaWxlKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTZWFyY2hBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRE9DVU1FTlRfREVTQ1JJUFRJT04sIGNyZWRlbnRpYWxzLCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIHVwbG9hZChmaWxlOiBGaWxlLCB1cmw6IHN0cmluZywgcmV3cml0ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3Jld3JpdGUnLCBTdHJpbmcocmV3cml0ZSkpO1xuICAgIGlmICh1cmwpIHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVybFwiLCB1cmwpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNlYXJjaEFwaUVuZHBvaW50KCkgKyBBcGkuVVBMT0FEX0RPQ1VNRU5UUywgZm9ybURhdGEpO1xuICB9XG5cbiAgc2VhcmNoKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHNbXSwgcXVlcnk6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNlYXJjaEFwaUVuZHBvaW50KCkgKyBBcGkuU0VBUkNILCB7XG4gICAgICAncXVlcnknOiBxdWVyeVxuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgcmVtb3ZlRmlsZShmaWxlOiBGaWxlTW9kZWwpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTZWFyY2hBcGlFbmRwb2ludCgpICsgQXBpLlJFTU9WRV9GUk9NX0lOREVYLCBmaWxlLCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIHNlbGVjdGVkSXRlbVRvUmVtb3ZlKGZpbGU6IEZpbGVNb2RlbCkge1xuICAgIHRoaXMuX2l0ZW1Ub1JlbW92ZS5uZXh0KGZpbGUpO1xuICB9XG5cbiAgZ2V0RG9jdW1lbnRTdGF0dXMoZmlsZXM6IEluZGV4ZWRGaWxlTW9kZWxbXSkge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNlYXJjaEFwaUVuZHBvaW50KCkgKyBBcGkuR0VUX0ZJTEVfU1RBVFVTLCBmaWxlcywgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cbn1cbiJdfQ==