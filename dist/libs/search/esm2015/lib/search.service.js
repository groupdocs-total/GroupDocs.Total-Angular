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
export class SearchService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._itemToRemove = new BehaviorSubject(null);
        this.itemToRemove = this._itemToRemove.asObservable();
    }
    /**
     * @param {?} filesToIndex
     * @return {?}
     */
    addFilesToIndex(filesToIndex) {
        return this._http.post(this._config.getSearchApiEndpoint() + Api.ADD_FILES_TO_INDEX, filesToIndex, Api.httpOptionsJson);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    loadFiles(path) {
        return this._http.post(this._config.getSearchApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadFile(credentials) {
        return this._http.post(this._config.getSearchApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
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
        return this._http.post(this._config.getSearchApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    }
    /**
     * @param {?} credentials
     * @param {?} query
     * @return {?}
     */
    search(credentials, query) {
        return this._http.post(this._config.getSearchApiEndpoint() + Api.SEARCH, {
            'query': query
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    removeFile(file) {
        return this._http.post(this._config.getSearchApiEndpoint() + Api.REMOVE_FROM_INDEX, file, Api.httpOptionsJson);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    selectedItemToRemove(file) {
        this._itemToRemove.next(file);
    }
    /**
     * @param {?} files
     * @return {?}
     */
    getDocumentStatus(files) {
        return this._http.post(this._config.getSearchApiEndpoint() + Api.GET_FILE_STATUS, files, Api.httpOptionsJson);
    }
}
SearchService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SearchService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ SearchService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SearchService_Factory() { return new SearchService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: SearchService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2VhcmNoLyIsInNvdXJjZXMiOlsibGliL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBOEIsTUFBTSwrQ0FBK0MsQ0FBQztBQUMvRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBT3ZDLE1BQU0sT0FBTyxhQUFhOzs7OztJQUl4QixZQUFvQixLQUFpQixFQUFVLE9BQXNCO1FBQWpELFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBSDdELGtCQUFhLEdBQUcsSUFBSSxlQUFlLENBQVksSUFBSSxDQUFDLENBQUM7UUFDN0QsaUJBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBR2pELENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLFlBQXlCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzFILENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQVk7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDeEgsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsV0FBNEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsR0FBRyxDQUFDLHlCQUF5QixFQUFFLFdBQVcsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDaEksQ0FBQzs7Ozs7OztJQUVELE1BQU0sQ0FBQyxJQUFVLEVBQUUsR0FBVyxFQUFFLE9BQWdCOztjQUN4QyxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUU7UUFDL0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxHQUFHLEVBQUU7WUFDUCxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvRixDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsV0FBOEIsRUFBRSxLQUFhO1FBQ2xELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDdkUsT0FBTyxFQUFFLEtBQUs7U0FDZixFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2pILENBQUM7Ozs7O0lBRUQsb0JBQW9CLENBQUMsSUFBZTtRQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEtBQXlCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNoSCxDQUFDOzs7WUFsREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUFEsVUFBVTtZQUNMLGFBQWE7Ozs7Ozs7O0lBU3pCLHNDQUE2RDs7SUFDN0QscUNBQWlEOzs7OztJQUVyQyw4QkFBeUI7Ozs7O0lBQUUsZ0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgQXBpLCBDb25maWdTZXJ2aWNlLCBGaWxlQ3JlZGVudGlhbHMsIEZpbGVNb2RlbCB9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5kZXhlZEZpbGVNb2RlbCB9IGZyb20gJy4vc2VhcmNoLW1vZGVscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoU2VydmljZSB7XG4gIHByaXZhdGUgX2l0ZW1Ub1JlbW92ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RmlsZU1vZGVsPihudWxsKTtcbiAgaXRlbVRvUmVtb3ZlID0gdGhpcy5faXRlbVRvUmVtb3ZlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX2NvbmZpZzogQ29uZmlnU2VydmljZSkge1xuICB9XG5cbiAgYWRkRmlsZXNUb0luZGV4KGZpbGVzVG9JbmRleDogRmlsZU1vZGVsW10pIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTZWFyY2hBcGlFbmRwb2ludCgpICsgQXBpLkFERF9GSUxFU19UT19JTkRFWCwgZmlsZXNUb0luZGV4LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIGxvYWRGaWxlcyhwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTZWFyY2hBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRklMRV9UUkVFLCB7J3BhdGgnOiBwYXRofSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICBsb2FkRmlsZShjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2VhcmNoQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX0RPQ1VNRU5UX0RFU0NSSVBUSU9OLCBjcmVkZW50aWFscywgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICB1cGxvYWQoZmlsZTogRmlsZSwgdXJsOiBzdHJpbmcsIHJld3JpdGU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdyZXdyaXRlJywgU3RyaW5nKHJld3JpdGUpKTtcbiAgICBpZiAodXJsKSB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cmxcIiwgdXJsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTZWFyY2hBcGlFbmRwb2ludCgpICsgQXBpLlVQTE9BRF9ET0NVTUVOVFMsIGZvcm1EYXRhKTtcbiAgfVxuXG4gIHNlYXJjaChjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzW10sIHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTZWFyY2hBcGlFbmRwb2ludCgpICsgQXBpLlNFQVJDSCwge1xuICAgICAgJ3F1ZXJ5JzogcXVlcnlcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIHJlbW92ZUZpbGUoZmlsZTogRmlsZU1vZGVsKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2VhcmNoQXBpRW5kcG9pbnQoKSArIEFwaS5SRU1PVkVfRlJPTV9JTkRFWCwgZmlsZSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICBzZWxlY3RlZEl0ZW1Ub1JlbW92ZShmaWxlOiBGaWxlTW9kZWwpIHtcbiAgICB0aGlzLl9pdGVtVG9SZW1vdmUubmV4dChmaWxlKTtcbiAgfVxuXG4gIGdldERvY3VtZW50U3RhdHVzKGZpbGVzOiBJbmRleGVkRmlsZU1vZGVsW10pIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTZWFyY2hBcGlFbmRwb2ludCgpICsgQXBpLkdFVF9GSUxFX1NUQVRVUywgZmlsZXMsIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG59XG4iXX0=