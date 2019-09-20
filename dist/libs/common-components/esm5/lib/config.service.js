/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
var Api = /** @class */ (function () {
    function Api() {
    }
    Api.VIEWER_APP = '/viewer';
    Api.SIGNATURE_APP = '/signature';
    Api.EDITOR_APP = '/editor';
    Api.COMPARISON_APP = '/comparison';
    Api.CONVERSION_APP = '/conversion';
    Api.DEFAULT_API_ENDPOINT = window.location.href;
    Api.LOAD_FILE_TREE = '/loadFileTree';
    Api.LOAD_CONFIG = '/loadConfig';
    Api.LOAD_DOCUMENT_DESCRIPTION = '/loadDocumentDescription';
    Api.LOAD_DOCUMENT_PAGE = '/loadDocumentPage';
    Api.ROTATE_DOCUMENT_PAGE = '/rotateDocumentPages';
    Api.UPLOAD_DOCUMENTS = '/uploadDocument';
    Api.DOWNLOAD_DOCUMENTS = '/downloadDocument';
    Api.LOAD_PRINT = '/loadPrint';
    Api.LOAD_PRINT_PDF = '/printPdf';
    Api.LOAD_THUMBNAILS = '/loadThumbnails';
    Api.LOAD_FORMATS = '/loadFormats';
    Api.SAVE_FILE = '/saveFile';
    Api.COMPARE_FILES = '/compare';
    Api.CONVERT_FILE = '/convert';
    Api.DELETE_SIGNATURE_FILE = '/deleteSignatureFile';
    Api.SAVE_OPTICAL_CODE = '/saveOpticalCode';
    Api.SAVE_TEXT = '/saveText';
    Api.SAVE_IMAGE = '/saveImage';
    Api.SAVE_STAMP = '/saveStamp';
    Api.SIGN = '/sign';
    Api.DOWNLOAD_SIGNED = '/downloadSigned';
    Api.LOAD_SIGNATURE_IMAGE = '/loadSignatureImage';
    Api.httpOptionsJson = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };
    Api.httpOptionsJsonResponseTypeBlob = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
        responseType: (/** @type {?} */ ('blob'))
    };
    return Api;
}());
export { Api };
if (false) {
    /** @type {?} */
    Api.VIEWER_APP;
    /** @type {?} */
    Api.SIGNATURE_APP;
    /** @type {?} */
    Api.EDITOR_APP;
    /** @type {?} */
    Api.COMPARISON_APP;
    /** @type {?} */
    Api.CONVERSION_APP;
    /** @type {?} */
    Api.DEFAULT_API_ENDPOINT;
    /** @type {?} */
    Api.LOAD_FILE_TREE;
    /** @type {?} */
    Api.LOAD_CONFIG;
    /** @type {?} */
    Api.LOAD_DOCUMENT_DESCRIPTION;
    /** @type {?} */
    Api.LOAD_DOCUMENT_PAGE;
    /** @type {?} */
    Api.ROTATE_DOCUMENT_PAGE;
    /** @type {?} */
    Api.UPLOAD_DOCUMENTS;
    /** @type {?} */
    Api.DOWNLOAD_DOCUMENTS;
    /** @type {?} */
    Api.LOAD_PRINT;
    /** @type {?} */
    Api.LOAD_PRINT_PDF;
    /** @type {?} */
    Api.LOAD_THUMBNAILS;
    /** @type {?} */
    Api.LOAD_FORMATS;
    /** @type {?} */
    Api.SAVE_FILE;
    /** @type {?} */
    Api.COMPARE_FILES;
    /** @type {?} */
    Api.CONVERT_FILE;
    /** @type {?} */
    Api.DELETE_SIGNATURE_FILE;
    /** @type {?} */
    Api.SAVE_OPTICAL_CODE;
    /** @type {?} */
    Api.SAVE_TEXT;
    /** @type {?} */
    Api.SAVE_IMAGE;
    /** @type {?} */
    Api.SAVE_STAMP;
    /** @type {?} */
    Api.SIGN;
    /** @type {?} */
    Api.DOWNLOAD_SIGNED;
    /** @type {?} */
    Api.LOAD_SIGNATURE_IMAGE;
    /** @type {?} */
    Api.httpOptionsJson;
    /** @type {?} */
    Api.httpOptionsJsonResponseTypeBlob;
}
var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.apiEndpoint = Api.DEFAULT_API_ENDPOINT;
    }
    Object.defineProperty(ConfigService.prototype, "apiEndpoint", {
        get: /**
         * @return {?}
         */
        function () {
            return this._apiEndpoint;
        },
        set: /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            this._apiEndpoint = url && url.trim().endsWith('/') ? url.substring(0, url.length - 1) : url;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} app
     * @return {?}
     */
    ConfigService.prototype.getConfigEndpoint = /**
     * @param {?} app
     * @return {?}
     */
    function (app) {
        return (this.apiEndpoint.endsWith(app) ? this.apiEndpoint : this.apiEndpoint + app) + Api.LOAD_CONFIG;
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getViewerApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.endsWith(Api.VIEWER_APP) ? this._apiEndpoint : this._apiEndpoint + Api.VIEWER_APP;
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getEditorApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.trim().endsWith(Api.EDITOR_APP) ? this._apiEndpoint : this._apiEndpoint + Api.EDITOR_APP;
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getComparisonApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.trim().endsWith(Api.COMPARISON_APP) ? this._apiEndpoint : this._apiEndpoint + Api.COMPARISON_APP;
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getConversionApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.trim().endsWith(Api.CONVERSION_APP) ? this._apiEndpoint : this._apiEndpoint + Api.CONVERSION_APP;
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getSignatureApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.endsWith(Api.SIGNATURE_APP) ? this._apiEndpoint : this._apiEndpoint + Api.SIGNATURE_APP;
    };
    ConfigService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return []; };
    return ConfigService;
}());
export { ConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype._apiEndpoint;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDO0lBQUE7SUFnQ0EsQ0FBQztJQS9CZSxjQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ3ZCLGNBQVUsR0FBRyxTQUFTLENBQUM7SUFDdkIsa0JBQWMsR0FBRyxhQUFhLENBQUM7SUFDL0Isa0JBQWMsR0FBRyxhQUFhLENBQUM7SUFDL0Isd0JBQW9CLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDNUMsa0JBQWMsR0FBRyxlQUFlLENBQUM7SUFDakMsZUFBVyxHQUFHLGFBQWEsQ0FBQztJQUM1Qiw2QkFBeUIsR0FBRywwQkFBMEIsQ0FBQztJQUN2RCxzQkFBa0IsR0FBRyxtQkFBbUIsQ0FBQztJQUN6Qyx3QkFBb0IsR0FBRyxzQkFBc0IsQ0FBQztJQUM5QyxvQkFBZ0IsR0FBRyxpQkFBaUIsQ0FBQztJQUNyQyxzQkFBa0IsR0FBRyxtQkFBbUIsQ0FBQztJQUN6QyxjQUFVLEdBQUcsWUFBWSxDQUFDO0lBQzFCLGtCQUFjLEdBQUcsV0FBVyxDQUFDO0lBQzdCLG1CQUFlLEdBQUcsaUJBQWlCLENBQUM7SUFDcEMsZ0JBQVksR0FBRyxjQUFjLENBQUM7SUFDOUIsYUFBUyxHQUFHLFdBQVcsQ0FBQztJQUN4QixpQkFBYSxHQUFHLFVBQVUsQ0FBQztJQUMzQixnQkFBWSxHQUFHLFVBQVUsQ0FBQztJQUUxQixtQkFBZSxHQUFHO1FBQzlCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztZQUN2QixjQUFjLEVBQUUsa0JBQWtCO1NBQ25DLENBQUM7S0FDSCxDQUFDO0lBQ1ksbUNBQStCLEdBQUc7UUFDOUMsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO1lBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkMsQ0FBQztRQUNGLFlBQVksRUFBRSxtQkFBQSxNQUFNLEVBQVU7S0FDL0IsQ0FBQztJQUNKLFVBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQWhDWSxHQUFHOzs7SUFDZCxlQUFxQzs7SUFDckMsZUFBcUM7O0lBQ3JDLG1CQUE2Qzs7SUFDN0MsbUJBQTZDOztJQUM3Qyx5QkFBMEQ7O0lBQzFELG1CQUErQzs7SUFDL0MsZ0JBQTBDOztJQUMxQyw4QkFBcUU7O0lBQ3JFLHVCQUF1RDs7SUFDdkQseUJBQTREOztJQUM1RCxxQkFBbUQ7O0lBQ25ELHVCQUF1RDs7SUFDdkQsZUFBd0M7O0lBQ3hDLG1CQUEyQzs7SUFDM0Msb0JBQWtEOztJQUNsRCxpQkFBNEM7O0lBQzVDLGNBQXNDOztJQUN0QyxrQkFBeUM7O0lBQ3pDLGlCQUF3Qzs7SUFFeEMsb0JBSUU7O0lBQ0Ysb0NBS0U7O0FBR0o7SUFLRTtRQUZRLGlCQUFZLEdBQUcsR0FBRyxDQUFDLG9CQUFvQixDQUFDO0lBR2hELENBQUM7SUFFRCxzQkFBSSxzQ0FBVzs7OztRQXdCZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7OztRQTFCRCxVQUFnQixHQUFXO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMvRixDQUFDOzs7T0FBQTs7Ozs7SUFFRCx5Q0FBaUI7Ozs7SUFBakIsVUFBa0IsR0FBRztRQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQztJQUN4RyxDQUFDOzs7O0lBRUQsNENBQW9COzs7SUFBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQzdHLENBQUM7Ozs7SUFFRCw0Q0FBb0I7OztJQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDcEgsQ0FBQzs7OztJQUVELGdEQUF3Qjs7O0lBQXhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUM1SCxDQUFDOzs7O0lBRUQsZ0RBQXdCOzs7SUFBeEI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQzVILENBQUM7O2dCQTlCRixVQUFVOzs7O0lBbUNYLG9CQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0FsQ1ksYUFBYTs7Ozs7O0lBRXhCLHFDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgQXBpIHtcbiAgcHVibGljIHN0YXRpYyBWSUVXRVJfQVBQID0gJy92aWV3ZXInO1xuICBwdWJsaWMgc3RhdGljIEVESVRPUl9BUFAgPSAnL2VkaXRvcic7XG4gIHB1YmxpYyBzdGF0aWMgQ09NUEFSSVNPTl9BUFAgPSAnL2NvbXBhcmlzb24nO1xuICBwdWJsaWMgc3RhdGljIENPTlZFUlNJT05fQVBQID0gJy9jb252ZXJzaW9uJztcbiAgcHVibGljIHN0YXRpYyBERUZBVUxUX0FQSV9FTkRQT0lOVCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICBwdWJsaWMgc3RhdGljIExPQURfRklMRV9UUkVFID0gJy9sb2FkRmlsZVRyZWUnO1xuICBwdWJsaWMgc3RhdGljIExPQURfQ09ORklHID0gJy9sb2FkQ29uZmlnJztcbiAgcHVibGljIHN0YXRpYyBMT0FEX0RPQ1VNRU5UX0RFU0NSSVBUSU9OID0gJy9sb2FkRG9jdW1lbnREZXNjcmlwdGlvbic7XG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9ET0NVTUVOVF9QQUdFID0gJy9sb2FkRG9jdW1lbnRQYWdlJztcbiAgcHVibGljIHN0YXRpYyBST1RBVEVfRE9DVU1FTlRfUEFHRSA9ICcvcm90YXRlRG9jdW1lbnRQYWdlcyc7XG4gIHB1YmxpYyBzdGF0aWMgVVBMT0FEX0RPQ1VNRU5UUyA9ICcvdXBsb2FkRG9jdW1lbnQnO1xuICBwdWJsaWMgc3RhdGljIERPV05MT0FEX0RPQ1VNRU5UUyA9ICcvZG93bmxvYWREb2N1bWVudCc7XG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9QUklOVCA9ICcvbG9hZFByaW50JztcbiAgcHVibGljIHN0YXRpYyBMT0FEX1BSSU5UX1BERiA9ICcvcHJpbnRQZGYnO1xuICBwdWJsaWMgc3RhdGljIExPQURfVEhVTUJOQUlMUyA9ICcvbG9hZFRodW1ibmFpbHMnO1xuICBwdWJsaWMgc3RhdGljIExPQURfRk9STUFUUyA9ICcvbG9hZEZvcm1hdHMnO1xuICBwdWJsaWMgc3RhdGljIFNBVkVfRklMRSA9ICcvc2F2ZUZpbGUnO1xuICBwdWJsaWMgc3RhdGljIENPTVBBUkVfRklMRVMgPSAnL2NvbXBhcmUnO1xuICBwdWJsaWMgc3RhdGljIENPTlZFUlRfRklMRSA9ICcvY29udmVydCc7XG5cbiAgcHVibGljIHN0YXRpYyBodHRwT3B0aW9uc0pzb24gPSB7XG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSlcbiAgfTtcbiAgcHVibGljIHN0YXRpYyBodHRwT3B0aW9uc0pzb25SZXNwb25zZVR5cGVCbG9iID0ge1xuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pLFxuICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InIGFzICdibG9iJ1xuICB9O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfYXBpRW5kcG9pbnQgPSBBcGkuREVGQVVMVF9BUElfRU5EUE9JTlQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBzZXQgYXBpRW5kcG9pbnQodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcGlFbmRwb2ludCA9IHVybCAmJiB1cmwudHJpbSgpLmVuZHNXaXRoKCcvJykgPyB1cmwuc3Vic3RyaW5nKDAsIHVybC5sZW5ndGggLSAxKSA6IHVybDtcbiAgfVxuXG4gIGdldENvbmZpZ0VuZHBvaW50KGFwcCkge1xuICAgIHJldHVybiAodGhpcy5hcGlFbmRwb2ludC5lbmRzV2l0aChhcHApID8gdGhpcy5hcGlFbmRwb2ludCA6IHRoaXMuYXBpRW5kcG9pbnQgKyBhcHApICsgQXBpLkxPQURfQ09ORklHO1xuICB9XG5cbiAgZ2V0Vmlld2VyQXBpRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LmVuZHNXaXRoKEFwaS5WSUVXRVJfQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuVklFV0VSX0FQUDtcbiAgfVxuXG4gIGdldEVkaXRvckFwaUVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC50cmltKCkuZW5kc1dpdGgoQXBpLkVESVRPUl9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5FRElUT1JfQVBQO1xuICB9XG5cbiAgZ2V0Q29tcGFyaXNvbkFwaUVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC50cmltKCkuZW5kc1dpdGgoQXBpLkNPTVBBUklTT05fQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuQ09NUEFSSVNPTl9BUFA7XG4gIH1cblxuICBnZXRDb252ZXJzaW9uQXBpRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LnRyaW0oKS5lbmRzV2l0aChBcGkuQ09OVkVSU0lPTl9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5DT05WRVJTSU9OX0FQUDtcbiAgfVxuXG4gIGdldCBhcGlFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQ7XG4gIH1cbn1cbiJdfQ==
