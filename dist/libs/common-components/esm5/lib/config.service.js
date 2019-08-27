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
    Api.DELETE_SIGNATURE_FILE = '/deleteSignatureFile';
    Api.SAVE_OPTICAL_CODE = '/saveOpticalCode';
    Api.SAVE_TEXT = '/saveText';
    Api.SAVE_IMAGE = '/saveImage';
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
    Api.DELETE_SIGNATURE_FILE;
    /** @type {?} */
    Api.SAVE_OPTICAL_CODE;
    /** @type {?} */
    Api.SAVE_TEXT;
    /** @type {?} */
    Api.SAVE_IMAGE;
    /** @type {?} */
    Api.LOAD_SIGNATURE_IMAGE;
    /** @type {?} */
    Api.httpOptionsJson;
    /** @type {?} */
    Api.httpOptionsJsonResponseTypeBlob;
}
var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this._apiEndpoint = Api.DEFAULT_API_ENDPOINT;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDO0lBQUE7SUFvQ0EsQ0FBQztJQW5DZSxjQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ3ZCLGlCQUFhLEdBQUcsWUFBWSxDQUFDO0lBQzdCLGNBQVUsR0FBRyxTQUFTLENBQUM7SUFDdkIsa0JBQWMsR0FBRyxhQUFhLENBQUM7SUFDL0Isd0JBQW9CLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDNUMsa0JBQWMsR0FBRyxlQUFlLENBQUM7SUFDakMsZUFBVyxHQUFHLGFBQWEsQ0FBQztJQUM1Qiw2QkFBeUIsR0FBRywwQkFBMEIsQ0FBQztJQUN2RCxzQkFBa0IsR0FBRyxtQkFBbUIsQ0FBQztJQUN6Qyx3QkFBb0IsR0FBRyxzQkFBc0IsQ0FBQztJQUM5QyxvQkFBZ0IsR0FBRyxpQkFBaUIsQ0FBQztJQUNyQyxzQkFBa0IsR0FBRyxtQkFBbUIsQ0FBQztJQUN6QyxjQUFVLEdBQUcsWUFBWSxDQUFDO0lBQzFCLGtCQUFjLEdBQUcsV0FBVyxDQUFDO0lBQzdCLG1CQUFlLEdBQUcsaUJBQWlCLENBQUM7SUFDcEMsZ0JBQVksR0FBRyxjQUFjLENBQUM7SUFDOUIsYUFBUyxHQUFHLFdBQVcsQ0FBQztJQUN4QixpQkFBYSxHQUFHLFVBQVUsQ0FBQztJQUMzQix5QkFBcUIsR0FBRyxzQkFBc0IsQ0FBQztJQUMvQyxxQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQztJQUN2QyxhQUFTLEdBQUcsV0FBVyxDQUFDO0lBQ3hCLGNBQVUsR0FBRyxZQUFZ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LFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNuSCxDQUFDOztnQkFsQ0YsVUFBVTs7OztJQW1DWCxvQkFBQztDQUFBLEFBbkNELElBbUNDO1NBbENZLGFBQWE7Ozs7OztJQUV4QixxQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IGNsYXNzIEFwaSB7XG4gIHB1YmxpYyBzdGF0aWMgVklFV0VSX0FQUCA9ICcvdmlld2VyJztcbiAgcHVibGljIHN0YXRpYyBTSUdOQVRVUkVfQVBQID0gJy9zaWduYXR1cmUnO1xuICBwdWJsaWMgc3RhdGljIEVESVRPUl9BUFAgPSAnL2VkaXRvcic7XG4gIHB1YmxpYyBzdGF0aWMgQ09NUEFSSVNPTl9BUFAgPSAnL2NvbXBhcmlzb24nO1xuICBwdWJsaWMgc3RhdGljIERFRkFVTFRfQVBJX0VORFBPSU5UID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9GSUxFX1RSRUUgPSAnL2xvYWRGaWxlVHJlZSc7XG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9DT05GSUcgPSAnL2xvYWRDb25maWcnO1xuICBwdWJsaWMgc3RhdGljIExPQURfRE9DVU1FTlRfREVTQ1JJUFRJT04gPSAnL2xvYWREb2N1bWVudERlc2NyaXB0aW9uJztcbiAgcHVibGljIHN0YXRpYyBMT0FEX0RPQ1VNRU5UX1BBR0UgPSAnL2xvYWREb2N1bWVudFBhZ2UnO1xuICBwdWJsaWMgc3RhdGljIFJPVEFURV9ET0NVTUVOVF9QQUdFID0gJy9yb3RhdGVEb2N1bWVudFBhZ2VzJztcbiAgcHVibGljIHN0YXRpYyBVUExPQURfRE9DVU1FTlRTID0gJy91cGxvYWREb2N1bWVudCc7XG4gIHB1YmxpYyBzdGF0aWMgRE9XTkxPQURfRE9DVU1FTlRTID0gJy9kb3dubG9hZERvY3VtZW50JztcbiAgcHVibGljIHN0YXRpYyBMT0FEX1BSSU5UID0gJy9sb2FkUHJpbnQnO1xuICBwdWJsaWMgc3RhdGljIExPQURfUFJJTlRfUERGID0gJy9wcmludFBkZic7XG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9USFVNQk5BSUxTID0gJy9sb2FkVGh1bWJuYWlscyc7XG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9GT1JNQVRTID0gJy9sb2FkRm9ybWF0cyc7XG4gIHB1YmxpYyBzdGF0aWMgU0FWRV9GSUxFID0gJy9zYXZlRmlsZSc7XG4gIHB1YmxpYyBzdGF0aWMgQ09NUEFSRV9GSUxFUyA9ICcvY29tcGFyZSc7XG4gIHB1YmxpYyBzdGF0aWMgREVMRVRFX1NJR05BVFVSRV9GSUxFID0gJy9kZWxldGVTaWduYXR1cmVGaWxlJztcbiAgcHVibGljIHN0YXRpYyBTQVZFX09QVElDQUxfQ09ERSA9ICcvc2F2ZU9wdGljYWxDb2RlJztcbiAgcHVibGljIHN0YXRpYyBTQVZFX1RFWFQgPSAnL3NhdmVUZXh0JztcbiAgcHVibGljIHN0YXRpYyBTQVZFX0lNQUdFID0gJy9zYXZlSW1hZ2UnO1xuICBwdWJsaWMgc3RhdGljIExPQURfU0lHTkFUVVJFX0lNQUdFID0gJy9sb2FkU2lnbmF0dXJlSW1hZ2UnO1xuXG4gIHB1YmxpYyBzdGF0aWMgaHR0cE9wdGlvbnNKc29uID0ge1xuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pXG4gIH07XG4gIHB1YmxpYyBzdGF0aWMgaHR0cE9wdGlvbnNKc29uUmVzcG9uc2VUeXBlQmxvYiA9IHtcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KSxcbiAgICByZXNwb25zZVR5cGU6ICdibG9iJyBhcyAnYmxvYidcbiAgfTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgX2FwaUVuZHBvaW50ID0gQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgc2V0IGFwaUVuZHBvaW50KHVybDogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXBpRW5kcG9pbnQgPSB1cmwgJiYgdXJsLnRyaW0oKS5lbmRzV2l0aCgnLycpID8gdXJsLnN1YnN0cmluZygwLCB1cmwubGVuZ3RoIC0gMSkgOiB1cmw7XG4gIH1cblxuICBnZXRDb25maWdFbmRwb2ludChhcHApIHtcbiAgICByZXR1cm4gKHRoaXMuYXBpRW5kcG9pbnQuZW5kc1dpdGgoYXBwKSA/IHRoaXMuYXBpRW5kcG9pbnQgOiB0aGlzLmFwaUVuZHBvaW50ICsgYXBwKSArIEFwaS5MT0FEX0NPTkZJRztcbiAgfVxuXG4gIGdldFZpZXdlckFwaUVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC5lbmRzV2l0aChBcGkuVklFV0VSX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLlZJRVdFUl9BUFA7XG4gIH1cblxuICBnZXRFZGl0b3JBcGlFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQudHJpbSgpLmVuZHNXaXRoKEFwaS5FRElUT1JfQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuRURJVE9SX0FQUDtcbiAgfVxuXG4gIGdldENvbXBhcmlzb25BcGlFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQudHJpbSgpLmVuZHNXaXRoKEFwaS5DT01QQVJJU09OX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLkNPTVBBUklTT05fQVBQO1xuICB9XG5cbiAgZ2V0IGFwaUVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludDtcbiAgfVxuXG4gIGdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC5lbmRzV2l0aChBcGkuU0lHTkFUVVJFX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLlNJR05BVFVSRV9BUFA7XG4gIH1cbn1cbiJdfQ==