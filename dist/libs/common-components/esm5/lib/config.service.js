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
    Api.METADATA_APP = '/metadata';
    Api.DEFAULT_API_ENDPOINT = window.location.href;
    Api.LOAD_FILE_TREE = '/loadFileTree';
    Api.LOAD_CONFIG = '/loadConfig';
    Api.LOAD_DOCUMENT_DESCRIPTION = '/loadDocumentDescription';
    Api.LOAD_DOCUMENT_PAGE = '/loadDocumentPage';
    Api.LOAD_DOCUMENT_PROPERTIES = '/loadProperties';
    Api.LOAD_DOCUMENT_PROPERTIES_NAMES = '/loadPropertiesNames';
    Api.SAVE_PROPERTY = '/saveProperty';
    Api.REMOVE_PROPERTY = '/removeProperty';
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
    Api.METADATA_APP;
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
    Api.LOAD_DOCUMENT_PROPERTIES;
    /** @type {?} */
    Api.LOAD_DOCUMENT_PROPERTIES_NAMES;
    /** @type {?} */
    Api.SAVE_PROPERTY;
    /** @type {?} */
    Api.REMOVE_PROPERTY;
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
    ConfigService.prototype.getMetadataApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.trim().endsWith(Api.METADATA_APP) ? this._apiEndpoint : this._apiEndpoint + Api.METADATA_APP;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDO0lBQUE7SUE4Q0EsQ0FBQztJQTdDZSxjQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ3ZCLGlCQUFhLEdBQUcsWUFBWSxDQUFDO0lBQzdCLGNBQVUsR0FBRyxTQUFTLENBQUM7SUFDdkIsa0JBQWMsR0FBRyxhQUFhLENBQUM7SUFDL0Isa0JBQWMsR0FBRyxhQUFhLENBQUM7SUFDL0IsZ0JBQVksR0FBRyxXQUFXLENBQUM7SUFDM0Isd0JBQW9CLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDNUMsa0JBQWMsR0FBRyxlQUFlLENBQUM7SUFDakMsZUFBVyxHQUFHLGFBQWEsQ0FBQztJQUM1Qiw2QkFBeUIsR0FBRywwQkFBMEIsQ0FBQztJQUN2RCxzQkFBa0IsR0FBRyxtQkFBbUIsQ0FBQztJQUN6Qyw0QkFBd0IsR0FBRyxpQkFBaUIsQ0FBQztJQUM3QyxrQ0FBOEIsR0FBRyxzQkFBc0IsQ0FBQztJQUN4RCxpQkFBYSxHQUFHLGVBQWUsQ0FBQztJQUNoQyxtQkFBZSxHQUFHLGlCQUFpQixDQUFDO0lBQ3BDLHdCQUFvQixHQUFHLHNCQUFzQixDQUFDO0lBQzlDLG9CQUFnQixHQUFHLGlCQUFpQixDQUFDO0lBQ3JDLHNCQUFrQixHQUFHLG1CQUFtQixDQUFDO0lBQ3pDLGNBQVUsR0FBRyxZQUFZLENBQUM7SUFDMUIsa0JBQWMsR0FBRyxXQUFXLENBQUM7SUFDN0IsbUJBQWUsR0FBRyxpQkFBaUIsQ0FBQztJQUNwQyxnQkFBWSxHQUFH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QVksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ25ILENBQUM7O2dCQTNDRixVQUFVOzs7O0lBNENYLG9CQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0EzQ1ksYUFBYTs7Ozs7O0lBRXhCLHFDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBpIHtcclxuICBwdWJsaWMgc3RhdGljIFZJRVdFUl9BUFAgPSAnL3ZpZXdlcic7XHJcbiAgcHVibGljIHN0YXRpYyBTSUdOQVRVUkVfQVBQID0gJy9zaWduYXR1cmUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgRURJVE9SX0FQUCA9ICcvZWRpdG9yJztcclxuICBwdWJsaWMgc3RhdGljIENPTVBBUklTT05fQVBQID0gJy9jb21wYXJpc29uJztcclxuICBwdWJsaWMgc3RhdGljIENPTlZFUlNJT05fQVBQID0gJy9jb252ZXJzaW9uJztcclxuICBwdWJsaWMgc3RhdGljIE1FVEFEQVRBX0FQUCA9ICcvbWV0YWRhdGEnO1xyXG4gIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9BUElfRU5EUE9JTlQgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICBwdWJsaWMgc3RhdGljIExPQURfRklMRV9UUkVFID0gJy9sb2FkRmlsZVRyZWUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9DT05GSUcgPSAnL2xvYWRDb25maWcnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9ET0NVTUVOVF9ERVNDUklQVElPTiA9ICcvbG9hZERvY3VtZW50RGVzY3JpcHRpb24nO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9ET0NVTUVOVF9QQUdFID0gJy9sb2FkRG9jdW1lbnRQYWdlJztcclxuICBwdWJsaWMgc3RhdGljIExPQURfRE9DVU1FTlRfUFJPUEVSVElFUyA9ICcvbG9hZFByb3BlcnRpZXMnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9ET0NVTUVOVF9QUk9QRVJUSUVTX05BTUVTID0gJy9sb2FkUHJvcGVydGllc05hbWVzJztcclxuICBwdWJsaWMgc3RhdGljIFNBVkVfUFJPUEVSVFkgPSAnL3NhdmVQcm9wZXJ0eSc7XHJcbiAgcHVibGljIHN0YXRpYyBSRU1PVkVfUFJPUEVSVFkgPSAnL3JlbW92ZVByb3BlcnR5JztcclxuICBwdWJsaWMgc3RhdGljIFJPVEFURV9ET0NVTUVOVF9QQUdFID0gJy9yb3RhdGVEb2N1bWVudFBhZ2VzJztcclxuICBwdWJsaWMgc3RhdGljIFVQTE9BRF9ET0NVTUVOVFMgPSAnL3VwbG9hZERvY3VtZW50JztcclxuICBwdWJsaWMgc3RhdGljIERPV05MT0FEX0RPQ1VNRU5UUyA9ICcvZG93bmxvYWREb2N1bWVudCc7XHJcbiAgcHVibGljIHN0YXRpYyBMT0FEX1BSSU5UID0gJy9sb2FkUHJpbnQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9QUklOVF9QREYgPSAnL3ByaW50UGRmJztcclxuICBwdWJsaWMgc3RhdGljIExPQURfVEhVTUJOQUlMUyA9ICcvbG9hZFRodW1ibmFpbHMnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9GT1JNQVRTID0gJy9sb2FkRm9ybWF0cyc7XHJcbiAgcHVibGljIHN0YXRpYyBTQVZFX0ZJTEUgPSAnL3NhdmVGaWxlJztcclxuICBwdWJsaWMgc3RhdGljIENPTVBBUkVfRklMRVMgPSAnL2NvbXBhcmUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgQ09OVkVSVF9GSUxFID0gJy9jb252ZXJ0JztcclxuICBwdWJsaWMgc3RhdGljIERFTEVURV9TSUdOQVRVUkVfRklMRSA9ICcvZGVsZXRlU2lnbmF0dXJlRmlsZSc7XHJcbiAgcHVibGljIHN0YXRpYyBTQVZFX09QVElDQUxfQ09ERSA9ICcvc2F2ZU9wdGljYWxDb2RlJztcclxuICBwdWJsaWMgc3RhdGljIFNBVkVfVEVYVCA9ICcvc2F2ZVRleHQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU0FWRV9JTUFHRSA9ICcvc2F2ZUltYWdlJztcclxuICBwdWJsaWMgc3RhdGljIFNBVkVfU1RBTVAgPSAnL3NhdmVTdGFtcCc7XHJcbiAgcHVibGljIHN0YXRpYyBTSUdOID0gJy9zaWduJztcclxuICBwdWJsaWMgc3RhdGljIERPV05MT0FEX1NJR05FRCA9ICcvZG93bmxvYWRTaWduZWQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9TSUdOQVRVUkVfSU1BR0UgPSAnL2xvYWRTaWduYXR1cmVJbWFnZSc7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaHR0cE9wdGlvbnNKc29uID0ge1xyXG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0pXHJcbiAgfTtcclxuICBwdWJsaWMgc3RhdGljIGh0dHBPcHRpb25zSnNvblJlc3BvbnNlVHlwZUJsb2IgPSB7XHJcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSksXHJcbiAgICByZXNwb25zZVR5cGU6ICdibG9iJyBhcyAnYmxvYidcclxuICB9O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBfYXBpRW5kcG9pbnQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmFwaUVuZHBvaW50ID0gQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UO1xyXG4gIH1cclxuXHJcbiAgc2V0IGFwaUVuZHBvaW50KHVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9hcGlFbmRwb2ludCA9IHVybCAmJiB1cmwudHJpbSgpLmVuZHNXaXRoKCcvJykgPyB1cmwuc3Vic3RyaW5nKDAsIHVybC5sZW5ndGggLSAxKSA6IHVybDtcclxuICB9XHJcblxyXG4gIGdldENvbmZpZ0VuZHBvaW50KGFwcCkge1xyXG4gICAgcmV0dXJuICh0aGlzLmFwaUVuZHBvaW50LmVuZHNXaXRoKGFwcCkgPyB0aGlzLmFwaUVuZHBvaW50IDogdGhpcy5hcGlFbmRwb2ludCArIGFwcCkgKyBBcGkuTE9BRF9DT05GSUc7XHJcbiAgfVxyXG5cclxuICBnZXRWaWV3ZXJBcGlFbmRwb2ludCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC5lbmRzV2l0aChBcGkuVklFV0VSX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLlZJRVdFUl9BUFA7XHJcbiAgfVxyXG5cclxuICBnZXRFZGl0b3JBcGlFbmRwb2ludCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC50cmltKCkuZW5kc1dpdGgoQXBpLkVESVRPUl9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5FRElUT1JfQVBQO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29tcGFyaXNvbkFwaUVuZHBvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LnRyaW0oKS5lbmRzV2l0aChBcGkuQ09NUEFSSVNPTl9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5DT01QQVJJU09OX0FQUDtcclxuICB9XHJcblxyXG4gIGdldENvbnZlcnNpb25BcGlFbmRwb2ludCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC50cmltKCkuZW5kc1dpdGgoQXBpLkNPTlZFUlNJT05fQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuQ09OVkVSU0lPTl9BUFA7XHJcbiAgfVxyXG5cclxuICBnZXRNZXRhZGF0YUFwaUVuZHBvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LnRyaW0oKS5lbmRzV2l0aChBcGkuTUVUQURBVEFfQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuTUVUQURBVEFfQVBQO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFwaUVuZHBvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQuZW5kc1dpdGgoQXBpLlNJR05BVFVSRV9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5TSUdOQVRVUkVfQVBQO1xyXG4gIH1cclxufVxyXG4iXX0=