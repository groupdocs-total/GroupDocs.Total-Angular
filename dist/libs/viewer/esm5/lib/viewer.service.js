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
var ViewerService = /** @class */ (function () {
    function ViewerService(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    ViewerService.prototype.loadFiles = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    ViewerService.prototype.loadFile = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
    };
    /**
     * @param {?} forumPostRequest
     * @return {?}
     */
    ViewerService.prototype.reportError = /**
     * @param {?} forumPostRequest
     * @return {?}
     */
    function (forumPostRequest) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.REPORT_ERROR_TO_FORUM, { 'email': forumPostRequest.Email,
            'username': forumPostRequest.UserName,
            'originalUrl': forumPostRequest.OriginalUrl,
            'categoryId': forumPostRequest.CategoryId,
            'title': forumPostRequest.Title,
            'message': forumPostRequest.Message,
            'exceptionMessage': forumPostRequest.ExceptionMessage,
            'innerExceptionMessage': forumPostRequest.InnerExceptionMessage,
            'folderPath': forumPostRequest.FolderPath,
            'isprivatepost': forumPostRequest.IsPrivatePost,
            'isSendNotification': forumPostRequest.IsSendNotification,
        }, Api.httpOptionsJson);
    };
    /**
     * @param {?} file
     * @param {?} url
     * @param {?} rewrite
     * @return {?}
     */
    ViewerService.prototype.upload = /**
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
        return this._http.post(this._config.getViewerApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    };
    /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    ViewerService.prototype.loadPage = /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    function (credentials, page) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'page': page
        }, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @param {?} angle
     * @param {?} page
     * @return {?}
     */
    ViewerService.prototype.rotate = /**
     * @param {?} credentials
     * @param {?} angle
     * @param {?} page
     * @return {?}
     */
    function (credentials, angle, page) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.ROTATE_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'pages': [page],
            'angle': angle
        }, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    ViewerService.prototype.getDownloadUrl = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._config.getViewerApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    ViewerService.prototype.loadPrint = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_PRINT, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    ViewerService.prototype.loadPrintPdf = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_PRINT_PDF, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, Api.httpOptionsJsonResponseTypeBlob);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    ViewerService.prototype.loadThumbnails = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_THUMBNAILS, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, Api.httpOptionsJson);
    };
    ViewerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ViewerService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ ViewerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ViewerService_Factory() { return new ViewerService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: ViewerService, providedIn: "root" });
    return ViewerService;
}());
export { ViewerService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3ZpZXdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQVksTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUMsR0FBRyxFQUFFLGFBQWEsRUFBa0IsTUFBTSwrQ0FBK0MsQ0FBQzs7OztBQUdsRztJQUtFLHVCQUFvQixLQUFpQixFQUFVLE9BQXNCO1FBQWpELFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFlO0lBQ3JFLENBQUM7Ozs7O0lBRUQsaUNBQVM7Ozs7SUFBVCxVQUFVLElBQVk7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDeEgsQ0FBQzs7Ozs7SUFFRCxnQ0FBUTs7OztJQUFSLFVBQVMsV0FBNEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsR0FBRyxDQUFDLHlCQUF5QixFQUFFLFdBQVcsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDaEksQ0FBQzs7Ozs7SUFFRCxtQ0FBVzs7OztJQUFYLFVBQVksZ0JBQWlDO1FBRTFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxxQkFB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LENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxvQ0FBWTs7OztJQUFaLFVBQWEsV0FBNEI7UUFDdkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsR0FBRyxDQUFDLGNBQWMsRUFBRTtZQUMvRSxNQUFNLEVBQUUsV0FBVyxDQUFDLElBQUk7WUFDeEIsVUFBVSxFQUFFLFdBQVcsQ0FBQyxRQUFRO1NBQ2pDLEVBQUUsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCxzQ0FBYzs7OztJQUFkLFVBQWUsV0FBNEI7UUFDekMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsR0FBRyxDQUFDLGVBQWUsRUFBRTtZQUNoRixNQUFNLEVBQUUsV0FBVyxDQUFDLElBQUk7WUFDeEIsVUFBVSxFQUFFLFdBQVcsQ0FBQyxRQUFRO1NBQ2pDLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7O2dCQXJGRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5PLFVBQVU7Z0JBQ0wsYUFBYTs7O3dCQUYxQjtDQTJGQyxBQXRGRCxJQXNGQztTQW5GWSxhQUFhOzs7Ozs7SUFFWiw4QkFBeUI7Ozs7O0lBQUUsZ0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwRXZlbnR9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQge0FwaSwgQ29uZmlnU2VydmljZSwgRmlsZUNyZWRlbnRpYWxzfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IEZvcnVtUG9zdFJlcXVlc3QgfSBmcm9tICcuL2Vycm9yLXJlcG9ydC1tb2RhbC9mb3J1bS1wb3N0LXJlcXVlc3QnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmlld2VyU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX2NvbmZpZzogQ29uZmlnU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbG9hZEZpbGVzKHBhdGg6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0Vmlld2VyQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX0ZJTEVfVFJFRSwgeydwYXRoJzogcGF0aH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xyXG4gIH1cclxuICBcclxuICBsb2FkRmlsZShjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRWaWV3ZXJBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRE9DVU1FTlRfREVTQ1JJUFRJT04sIGNyZWRlbnRpYWxzLCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcclxuICB9XHJcblxyXG4gIHJlcG9ydEVycm9yKGZvcnVtUG9zdFJlcXVlc3Q6Rm9ydW1Qb3N0UmVxdWVzdClcclxuICB7XHJcbiAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0Vmlld2VyQXBpRW5kcG9pbnQoKSArIEFwaS5SRVBPUlRfRVJST1JfVE9fRk9SVU0sIFxyXG4gICAgIHsgJ2VtYWlsJzogZm9ydW1Qb3N0UmVxdWVzdC5FbWFpbCxcclxuICAgICAgICd1c2VybmFtZSc6IGZvcnVtUG9zdFJlcXVlc3QuVXNlck5hbWUsXHJcbiAgICAgICAnb3JpZ2luYWxVcmwnOmZvcnVtUG9zdFJlcXVlc3QuT3JpZ2luYWxVcmwsXHJcbiAgICAgICAnY2F0ZWdvcnlJZCc6Zm9ydW1Qb3N0UmVxdWVzdC5DYXRlZ29yeUlkLFxyXG4gICAgICAgJ3RpdGxlJzpmb3J1bVBvc3RSZXF1ZXN0LlRpdGxlLFxyXG4gICAgICAgJ21lc3NhZ2UnOmZvcnVtUG9zdFJlcXVlc3QuTWVzc2FnZSxcclxuICAgICAgICdleGNlcHRpb25NZXNzYWdlJzpmb3J1bVBvc3RSZXF1ZXN0LkV4Y2VwdGlvbk1lc3NhZ2UsXHJcbiAgICAgICAnaW5uZXJFeGNlcHRpb25NZXNzYWdlJzpmb3J1bVBvc3RSZXF1ZXN0LklubmVyRXhjZXB0aW9uTWVzc2FnZSxcclxuICAgICAgICdmb2xkZXJQYXRoJzpmb3J1bVBvc3RSZXF1ZXN0LkZvbGRlclBhdGgsXHJcbiAgICAgICAnaXNwcml2YXRlcG9zdCc6IGZvcnVtUG9zdFJlcXVlc3QuSXNQcml2YXRlUG9zdCxcclxuICAgICAgICdpc1NlbmROb3RpZmljYXRpb24nOiBmb3J1bVBvc3RSZXF1ZXN0LklzU2VuZE5vdGlmaWNhdGlvbixcclxuICAgIH0sXHJcbiAgICAgIEFwaS5odHRwT3B0aW9uc0pzb24pO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkKGZpbGU6IEZpbGUsIHVybDogc3RyaW5nLCByZXdyaXRlOiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgncmV3cml0ZScsIFN0cmluZyhyZXdyaXRlKSk7XHJcbiAgICBpZiAodXJsKSB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVybFwiLCB1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFZpZXdlckFwaUVuZHBvaW50KCkgKyBBcGkuVVBMT0FEX0RPQ1VNRU5UUywgZm9ybURhdGEpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFBhZ2UoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscywgcGFnZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRWaWV3ZXJBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRE9DVU1FTlRfUEFHRSwge1xyXG4gICAgICAnZ3VpZCc6IGNyZWRlbnRpYWxzLmd1aWQsXHJcbiAgICAgICdwYXNzd29yZCc6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgICAncGFnZSc6IHBhZ2VcclxuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xyXG4gIH1cclxuXHJcbiAgcm90YXRlKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMsIGFuZ2xlOiBudW1iZXIsIHBhZ2U6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0Vmlld2VyQXBpRW5kcG9pbnQoKSArIEFwaS5ST1RBVEVfRE9DVU1FTlRfUEFHRSwge1xyXG4gICAgICAnZ3VpZCc6IGNyZWRlbnRpYWxzLmd1aWQsXHJcbiAgICAgICdwYXNzd29yZCc6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgICAncGFnZXMnOiBbcGFnZV0sXHJcbiAgICAgICdhbmdsZSc6IGFuZ2xlXHJcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcclxuICB9XHJcblxyXG4gIGdldERvd25sb2FkVXJsKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb25maWcuZ2V0Vmlld2VyQXBpRW5kcG9pbnQoKSArIEFwaS5ET1dOTE9BRF9ET0NVTUVOVFMgKyAnLz9wYXRoPScgKyBjcmVkZW50aWFscy5ndWlkO1xyXG4gIH1cclxuXHJcbiAgbG9hZFByaW50KGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFZpZXdlckFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9QUklOVCwge1xyXG4gICAgICAnZ3VpZCc6IGNyZWRlbnRpYWxzLmd1aWQsXHJcbiAgICAgICdwYXNzd29yZCc6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XHJcbiAgfVxyXG5cclxuICBsb2FkUHJpbnRQZGYoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0Vmlld2VyQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX1BSSU5UX1BERiwge1xyXG4gICAgICAnZ3VpZCc6IGNyZWRlbnRpYWxzLmd1aWQsXHJcbiAgICAgICdwYXNzd29yZCc6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvblJlc3BvbnNlVHlwZUJsb2IpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFRodW1ibmFpbHMoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0Vmlld2VyQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX1RIVU1CTkFJTFMsIHtcclxuICAgICAgJ2d1aWQnOiBjcmVkZW50aWFscy5ndWlkLFxyXG4gICAgICAncGFzc3dvcmQnOiBjcmVkZW50aWFscy5wYXNzd29yZCxcclxuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xyXG4gIH1cclxufVxyXG4iXX0=