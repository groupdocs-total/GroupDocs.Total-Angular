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
    Api.REMOVE_FROM_INDEX = '/removeFromIndex';
    Api.GET_FILE_STATUS = '/getFileStatus';
    Api.SAVE_OPTICAL_CODE = '/saveOpticalCode';
    Api.SAVE_TEXT = '/saveText';
    Api.SAVE_IMAGE = '/saveImage';
    Api.SAVE_STAMP = '/saveStamp';
    Api.SIGN = '/sign';
    Api.DOWNLOAD_SIGNED = '/downloadSigned';
    Api.LOAD_SIGNATURE_IMAGE = '/loadSignatureImage';
    Api.ANNOTATE = '/annotate';
    Api.SEARCH = '/search';
    Api.ADD_FILES_TO_INDEX = '/addFilesToIndex';
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
    Api.REMOVE_FROM_INDEX;
    /** @type {?} */
    Api.GET_FILE_STATUS;
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
    Api.ADD_FILES_TO_INDEX;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDO0lBQUE7SUFxREEsQ0FBQztJQXBEZSxjQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ3ZCLGlCQUFhLEdBQUcsWUFBWSxDQUFDO0lBQzdCLGtCQUFjLEdBQUcsYUFBYSxDQUFDO0lBQy9CLGNBQVUsR0FBRyxTQUFTLENBQUM7SUFDdkIsY0FBVSxHQUFHLFNBQVMsQ0FBQztJQUN2QixrQkFBYyxHQUFHLGFBQWEsQ0FBQztJQUMvQixrQkFBYyxHQUFHLGFBQWEsQ0FBQztJQUMvQixnQkFBWSxHQUFHLFdBQVcsQ0FBQztJQUMzQix3QkFBb0IsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUM1QyxrQkFBYyxHQUFHLGVBQWUsQ0FBQztJQUNqQyxlQUFXLEdBQUcsYUFBYSxDQUFDO0lBQzVCLDZCQUF5QixHQUFHLDBCQUEwQixDQUFDO0lBQ3ZELHNCQUFrQixHQUFHLG1CQUFtQixDQUFDO0lBQ3pDLDRCQUF3QixHQUFHLGlCQUFpQixDQUFDO0lBQzdDLGtDQUE4QixHQUFHLHNCQUFzQixDQUFDO0lBQ3hELGlCQUFhLEdBQUcsZUFBZSxDQUFDO0lBQ2hDLG1CQUFlLEdBQUcsaUJBQWlCLENBQUM7SUFDcEMsd0JBQW9CLEdBQUcsc0JBQXNCLENBQUM7SUFDOUMsb0JBQWdCLEdBQUcsaUJBQWlCLENBQUM7SUFDckMsc0JBQWtCLEdBQUcsbUJBQW1CLENBQUM7SUFDekMsY0FBVSxHQUFHLFlBQVksQ0FBQztJQUMxQixrQkFBYyxHQUFHLFdB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QVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFDeEgsQ0FBQzs7OztJQU1ELCtDQUF1Qjs7O0lBQXZCO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNuSCxDQUFDOzs7O0lBRUQsZ0RBQXdCOzs7SUFBeEI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3JILENBQUM7Ozs7SUFFRCw0Q0FBb0I7OztJQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDN0csQ0FBQzs7Z0JBbkRGLFVBQVU7Ozs7SUFvRFgsb0JBQUM7Q0FBQSxBQXBERCxJQW9EQztTQW5EWSxhQUFhOzs7Ozs7SUFFeEIscUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcGkge1xyXG4gIHB1YmxpYyBzdGF0aWMgVklFV0VSX0FQUCA9ICcvdmlld2VyJztcclxuICBwdWJsaWMgc3RhdGljIFNJR05BVFVSRV9BUFAgPSAnL3NpZ25hdHVyZSc7XHJcbiAgcHVibGljIHN0YXRpYyBBTk5PVEFUSU9OX0FQUCA9ICcvYW5ub3RhdGlvbic7XHJcbiAgcHVibGljIHN0YXRpYyBTRUFSQ0hfQVBQID0gJy9zZWFyY2gnO1xyXG4gIHB1YmxpYyBzdGF0aWMgRURJVE9SX0FQUCA9ICcvZWRpdG9yJztcclxuICBwdWJsaWMgc3RhdGljIENPTVBBUklTT05fQVBQID0gJy9jb21wYXJpc29uJztcclxuICBwdWJsaWMgc3RhdGljIENPTlZFUlNJT05fQVBQID0gJy9jb252ZXJzaW9uJztcclxuICBwdWJsaWMgc3RhdGljIE1FVEFEQVRBX0FQUCA9ICcvbWV0YWRhdGEnO1xyXG4gIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9BUElfRU5EUE9JTlQgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICBwdWJsaWMgc3RhdGljIExPQURfRklMRV9UUkVFID0gJy9sb2FkRmlsZVRyZWUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9DT05GSUcgPSAnL2xvYWRDb25maWcnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9ET0NVTUVOVF9ERVNDUklQVElPTiA9ICcvbG9hZERvY3VtZW50RGVzY3JpcHRpb24nO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9ET0NVTUVOVF9QQUdFID0gJy9sb2FkRG9jdW1lbnRQYWdlJztcclxuICBwdWJsaWMgc3RhdGljIExPQURfRE9DVU1FTlRfUFJPUEVSVElFUyA9ICcvbG9hZFByb3BlcnRpZXMnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9ET0NVTUVOVF9QUk9QRVJUSUVTX05BTUVTID0gJy9sb2FkUHJvcGVydGllc05hbWVzJztcclxuICBwdWJsaWMgc3RhdGljIFNBVkVfUFJPUEVSVFkgPSAnL3NhdmVQcm9wZXJ0eSc7XHJcbiAgcHVibGljIHN0YXRpYyBSRU1PVkVfUFJPUEVSVFkgPSAnL3JlbW92ZVByb3BlcnR5JztcclxuICBwdWJsaWMgc3RhdGljIFJPVEFURV9ET0NVTUVOVF9QQUdFID0gJy9yb3RhdGVEb2N1bWVudFBhZ2VzJztcclxuICBwdWJsaWMgc3RhdGljIFVQTE9BRF9ET0NVTUVOVFMgPSAnL3VwbG9hZERvY3VtZW50JztcclxuICBwdWJsaWMgc3RhdGljIERPV05MT0FEX0RPQ1VNRU5UUyA9ICcvZG93bmxvYWREb2N1bWVudCc7XHJcbiAgcHVibGljIHN0YXRpYyBMT0FEX1BSSU5UID0gJy9sb2FkUHJpbnQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9QUklOVF9QREYgPSAnL3ByaW50UGRmJztcclxuICBwdWJsaWMgc3RhdGljIExPQURfVEhVTUJOQUlMUyA9ICcvbG9hZFRodW1ibmFpbHMnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9GT1JNQVRTID0gJy9sb2FkRm9ybWF0cyc7XHJcbiAgcHVibGljIHN0YXRpYyBTQVZFX0ZJTEUgPSAnL3NhdmVGaWxlJztcclxuICBwdWJsaWMgc3RhdGljIENPTVBBUkVfRklMRVMgPSAnL2NvbXBhcmUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgQ09OVkVSVF9GSUxFID0gJy9jb252ZXJ0JztcclxuICBwdWJsaWMgc3RhdGljIERFTEVURV9TSUdOQVRVUkVfRklMRSA9ICcvZGVsZXRlU2lnbmF0dXJlRmlsZSc7XHJcbiAgcHVibGljIHN0YXRpYyBSRU1PVkVfRlJPTV9JTkRFWCA9ICcvcmVtb3ZlRnJvbUluZGV4JztcclxuICBwdWJsaWMgc3RhdGljIEdFVF9GSUxFX1NUQVRVUyA9ICcvZ2V0RmlsZVN0YXR1cyc7XHJcbiAgcHVibGljIHN0YXRpYyBTQVZFX09QVElDQUxfQ09ERSA9ICcvc2F2ZU9wdGljYWxDb2RlJztcclxuICBwdWJsaWMgc3RhdGljIFNBVkVfVEVYVCA9ICcvc2F2ZVRleHQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU0FWRV9JTUFHRSA9ICcvc2F2ZUltYWdlJztcclxuICBwdWJsaWMgc3RhdGljIFNBVkVfU1RBTVAgPSAnL3NhdmVTdGFtcCc7XHJcbiAgcHVibGljIHN0YXRpYyBTSUdOID0gJy9zaWduJztcclxuICBwdWJsaWMgc3RhdGljIERPV05MT0FEX1NJR05FRCA9ICcvZG93bmxvYWRTaWduZWQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9TSUdOQVRVUkVfSU1BR0UgPSAnL2xvYWRTaWduYXR1cmVJbWFnZSc7XHJcbiAgcHVibGljIHN0YXRpYyBBTk5PVEFURSA9ICcvYW5ub3RhdGUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU0VBUkNIID0gJy9zZWFyY2gnO1xyXG4gIHB1YmxpYyBzdGF0aWMgQUREX0ZJTEVTX1RPX0lOREVYID0gJy9hZGRGaWxlc1RvSW5kZXgnO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGh0dHBPcHRpb25zSnNvbiA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9KVxyXG4gIH07XHJcbiAgcHVibGljIHN0YXRpYyBodHRwT3B0aW9uc0pzb25SZXNwb25zZVR5cGVCbG9iID0ge1xyXG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0pLFxyXG4gICAgcmVzcG9uc2VUeXBlOiAnYmxvYicgYXMgJ2Jsb2InXHJcbiAgfTtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgX2FwaUVuZHBvaW50OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5hcGlFbmRwb2ludCA9IEFwaS5ERUZBVUxUX0FQSV9FTkRQT0lOVDtcclxuICB9XHJcblxyXG4gIHNldCBhcGlFbmRwb2ludCh1cmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5fYXBpRW5kcG9pbnQgPSB1cmwgJiYgdXJsLnRyaW0oKS5lbmRzV2l0aCgnLycpID8gdXJsLnN1YnN0cmluZygwLCB1cmwubGVuZ3RoIC0gMSkgOiB1cmw7XHJcbiAgfVxyXG5cclxuICBnZXRDb25maWdFbmRwb2ludChhcHApIHtcclxuICAgIHJldHVybiAodGhpcy5hcGlFbmRwb2ludC5lbmRzV2l0aChhcHApID8gdGhpcy5hcGlFbmRwb2ludCA6IHRoaXMuYXBpRW5kcG9pbnQgKyBhcHApICsgQXBpLkxPQURfQ09ORklHO1xyXG4gIH1cclxuXHJcbiAgZ2V0Vmlld2VyQXBpRW5kcG9pbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQuZW5kc1dpdGgoQXBpLlZJRVdFUl9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5WSUVXRVJfQVBQO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWRpdG9yQXBpRW5kcG9pbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQudHJpbSgpLmVuZHNXaXRoKEFwaS5FRElUT1JfQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuRURJVE9SX0FQUDtcclxuICB9XHJcblxyXG4gIGdldENvbXBhcmlzb25BcGlFbmRwb2ludCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC50cmltKCkuZW5kc1dpdGgoQXBpLkNPTVBBUklTT05fQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuQ09NUEFSSVNPTl9BUFA7XHJcbiAgfVxyXG5cclxuICBnZXRDb252ZXJzaW9uQXBpRW5kcG9pbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQudHJpbSgpLmVuZHNXaXRoKEFwaS5DT05WRVJTSU9OX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLkNPTlZFUlNJT05fQVBQO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWV0YWRhdGFBcGlFbmRwb2ludCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC50cmltKCkuZW5kc1dpdGgoQXBpLk1FVEFEQVRBX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLk1FVEFEQVRBX0FQUDtcclxuICB9XHJcblxyXG4gIGdldCBhcGlFbmRwb2ludCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludDtcclxuICB9XHJcblxyXG4gIGdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LmVuZHNXaXRoKEFwaS5TSUdOQVRVUkVfQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuU0lHTkFUVVJFX0FQUDtcclxuICB9XHJcblxyXG4gIGdldEFubm90YXRpb25BcGlFbmRwb2ludCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC5lbmRzV2l0aChBcGkuQU5OT1RBVElPTl9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5BTk5PVEFUSU9OX0FQUDtcclxuICB9XHJcblxyXG4gIGdldFNlYXJjaEFwaUVuZHBvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LmVuZHNXaXRoKEFwaS5TRUFSQ0hfQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuU0VBUkNIX0FQUDtcclxuICB9XHJcbn1cclxuIl19