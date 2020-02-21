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
    Api.ANNOTATION_APP = '/annotation';
    Api.SEARCH_APP = '/search';
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
    Api.ANNOTATE = '/annotate';
    Api.SEARCH = '/search';
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
    Api.ANNOTATION_APP;
    /** @type {?} */
    Api.SEARCH_APP;
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
    Api.ANNOTATE;
    /** @type {?} */
    Api.SEARCH;
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
    /**
     * @return {?}
     */
    ConfigService.prototype.getAnnotationApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.endsWith(Api.ANNOTATION_APP) ? this._apiEndpoint : this._apiEndpoint + Api.ANNOTATION_APP;
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getSearchApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.endsWith(Api.SEARCH_APP) ? this._apiEndpoint : this._apiEndpoint + Api.SEARCH_APP;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDO0lBQUE7SUE2Q0EsQ0FBQztJQTVDZSxjQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ3ZCLGlCQUFhLEdBQUcsWUFBWSxDQUFDO0lBQzdCLGtCQUFjLEdBQUcsYUFBYSxDQUFDO0lBQy9CLGNBQVUsR0FBRyxTQUFTLENBQUM7SUFDdkIsY0FBVSxHQUFHLFNBQVMsQ0FBQztJQUN2QixrQkFBYyxHQUFHLGFBQWEsQ0FBQztJQUMvQixrQkFBYyxHQUFHLGFBQWEsQ0FBQztJQUMvQix3QkFBb0IsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUM1QyxrQkFBYyxHQUFHLGVBQWUsQ0FBQztJQUNqQyxlQUFXLEdBQUcsYUFBYSxDQUFDO0lBQzVCLDZCQUF5QixHQUFHLDBCQUEwQixDQUFDO0lBQ3ZELHNCQUFrQixHQUFHLG1CQUFtQixDQUFDO0lBQ3pDLHdCQUFvQixHQUFHLHNCQUFzQixDQUFDO0lBQzlDLG9CQUFnQixHQUFHLGlCQUFpQixDQUFDO0lBQ3JDLHNCQUFrQixHQUFHLG1CQUFtQixDQUFDO0lBQ3pDLGNBQVUsR0FBRyxZQUFZLENBQUM7SUFDMUIsa0JBQWMsR0FBRyxXQUFXLENBQUM7SUFDN0IsbUJBQWUsR0FBRyxpQkFBaUIsQ0FBQztJQUNwQyxnQkFBWSxHQUFHLGNBQWMsQ0FBQztJQUM5QixhQUFTLEdBQUcsV0FBVyxDQUFDO0lBQ3hCLGlCQUFhLEdBQUcsVUFBVSxDQUFDO0lBQzNCLGdCQUFZLEdBQUcsVUFBVSxDQUFD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TyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUM3RyxDQUFDOztnQkEvQ0YsVUFBVTs7OztJQWdEWCxvQkFBQztDQUFBLEFBaERELElBZ0RDO1NBL0NZLGFBQWE7Ozs7OztJQUV4QixxQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IGNsYXNzIEFwaSB7XG4gIHB1YmxpYyBzdGF0aWMgVklFV0VSX0FQUCA9ICcvdmlld2VyJztcbiAgcHVibGljIHN0YXRpYyBTSUdOQVRVUkVfQVBQID0gJy9zaWduYXR1cmUnO1xuICBwdWJsaWMgc3RhdGljIEFOTk9UQVRJT05fQVBQID0gJy9hbm5vdGF0aW9uJztcbiAgcHVibGljIHN0YXRpYyBTRUFSQ0hfQVBQID0gJy9zZWFyY2gnO1xuICBwdWJsaWMgc3RhdGljIEVESVRPUl9BUFAgPSAnL2VkaXRvcic7XG4gIHB1YmxpYyBzdGF0aWMgQ09NUEFSSVNPTl9BUFAgPSAnL2NvbXBhcmlzb24nO1xuICBwdWJsaWMgc3RhdGljIENPTlZFUlNJT05fQVBQID0gJy9jb252ZXJzaW9uJztcbiAgcHVibGljIHN0YXRpYyBERUZBVUxUX0FQSV9FTkRQT0lOVCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICBwdWJsaWMgc3RhdGljIExPQURfRklMRV9UUkVFID0gJy9sb2FkRmlsZVRyZWUnO1xuICBwdWJsaWMgc3RhdGljIExPQURfQ09ORklHID0gJy9sb2FkQ29uZmlnJztcbiAgcHVibGljIHN0YXRpYyBMT0FEX0RPQ1VNRU5UX0RFU0NSSVBUSU9OID0gJy9sb2FkRG9jdW1lbnREZXNjcmlwdGlvbic7XG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9ET0NVTUVOVF9QQUdFID0gJy9sb2FkRG9jdW1lbnRQYWdlJztcbiAgcHVibGljIHN0YXRpYyBST1RBVEVfRE9DVU1FTlRfUEFHRSA9ICcvcm90YXRlRG9jdW1lbnRQYWdlcyc7XG4gIHB1YmxpYyBzdGF0aWMgVVBMT0FEX0RPQ1VNRU5UUyA9ICcvdXBsb2FkRG9jdW1lbnQnO1xuICBwdWJsaWMgc3RhdGljIERPV05MT0FEX0RPQ1VNRU5UUyA9ICcvZG93bmxvYWREb2N1bWVudCc7XG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9QUklOVCA9ICcvbG9hZFByaW50JztcbiAgcHVibGljIHN0YXRpYyBMT0FEX1BSSU5UX1BERiA9ICcvcHJpbnRQZGYnO1xuICBwdWJsaWMgc3RhdGljIExPQURfVEhVTUJOQUlMUyA9ICcvbG9hZFRodW1ibmFpbHMnO1xuICBwdWJsaWMgc3RhdGljIExPQURfRk9STUFUUyA9ICcvbG9hZEZvcm1hdHMnO1xuICBwdWJsaWMgc3RhdGljIFNBVkVfRklMRSA9ICcvc2F2ZUZpbGUnO1xuICBwdWJsaWMgc3RhdGljIENPTVBBUkVfRklMRVMgPSAnL2NvbXBhcmUnO1xuICBwdWJsaWMgc3RhdGljIENPTlZFUlRfRklMRSA9ICcvY29udmVydCc7XG4gIHB1YmxpYyBzdGF0aWMgREVMRVRFX1NJR05BVFVSRV9GSUxFID0gJy9kZWxldGVTaWduYXR1cmVGaWxlJztcbiAgcHVibGljIHN0YXRpYyBTQVZFX09QVElDQUxfQ09ERSA9ICcvc2F2ZU9wdGljYWxDb2RlJztcbiAgcHVibGljIHN0YXRpYyBTQVZFX1RFWFQgPSAnL3NhdmVUZXh0JztcbiAgcHVibGljIHN0YXRpYyBTQVZFX0lNQUdFID0gJy9zYXZlSW1hZ2UnO1xuICBwdWJsaWMgc3RhdGljIFNBVkVfU1RBTVAgPSAnL3NhdmVTdGFtcCc7XG4gIHB1YmxpYyBzdGF0aWMgU0lHTiA9ICcvc2lnbic7XG4gIHB1YmxpYyBzdGF0aWMgRE9XTkxPQURfU0lHTkVEID0gJy9kb3dubG9hZFNpZ25lZCc7XG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9TSUdOQVRVUkVfSU1BR0UgPSAnL2xvYWRTaWduYXR1cmVJbWFnZSc7XG4gIHB1YmxpYyBzdGF0aWMgQU5OT1RBVEUgPSAnL2Fubm90YXRlJztcbiAgcHVibGljIHN0YXRpYyBTRUFSQ0ggPSAnL3NlYXJjaCc7XG5cbiAgcHVibGljIHN0YXRpYyBodHRwT3B0aW9uc0pzb24gPSB7XG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSlcbiAgfTtcbiAgcHVibGljIHN0YXRpYyBodHRwT3B0aW9uc0pzb25SZXNwb25zZVR5cGVCbG9iID0ge1xuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pLFxuICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InIGFzICdibG9iJ1xuICB9O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfYXBpRW5kcG9pbnQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFwaUVuZHBvaW50ID0gQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UO1xuICB9XG5cbiAgc2V0IGFwaUVuZHBvaW50KHVybDogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXBpRW5kcG9pbnQgPSB1cmwgJiYgdXJsLnRyaW0oKS5lbmRzV2l0aCgnLycpID8gdXJsLnN1YnN0cmluZygwLCB1cmwubGVuZ3RoIC0gMSkgOiB1cmw7XG4gIH1cblxuICBnZXRDb25maWdFbmRwb2ludChhcHApIHtcbiAgICByZXR1cm4gKHRoaXMuYXBpRW5kcG9pbnQuZW5kc1dpdGgoYXBwKSA/IHRoaXMuYXBpRW5kcG9pbnQgOiB0aGlzLmFwaUVuZHBvaW50ICsgYXBwKSArIEFwaS5MT0FEX0NPTkZJRztcbiAgfVxuXG4gIGdldFZpZXdlckFwaUVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC5lbmRzV2l0aChBcGkuVklFV0VSX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLlZJRVdFUl9BUFA7XG4gIH1cblxuICBnZXRFZGl0b3JBcGlFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQudHJpbSgpLmVuZHNXaXRoKEFwaS5FRElUT1JfQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuRURJVE9SX0FQUDtcbiAgfVxuXG4gIGdldENvbXBhcmlzb25BcGlFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQudHJpbSgpLmVuZHNXaXRoKEFwaS5DT01QQVJJU09OX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLkNPTVBBUklTT05fQVBQO1xuICB9XG5cbiAgZ2V0Q29udmVyc2lvbkFwaUVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC50cmltKCkuZW5kc1dpdGgoQXBpLkNPTlZFUlNJT05fQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuQ09OVkVSU0lPTl9BUFA7XG4gIH1cblxuICBnZXQgYXBpRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50O1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LmVuZHNXaXRoKEFwaS5TSUdOQVRVUkVfQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuU0lHTkFUVVJFX0FQUDtcbiAgfVxuXG4gIGdldEFubm90YXRpb25BcGlFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQuZW5kc1dpdGgoQXBpLkFOTk9UQVRJT05fQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuQU5OT1RBVElPTl9BUFA7XG4gIH1cblxuICBnZXRTZWFyY2hBcGlFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQuZW5kc1dpdGgoQXBpLlNFQVJDSF9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5TRUFSQ0hfQVBQO1xuICB9XG59XG4iXX0=