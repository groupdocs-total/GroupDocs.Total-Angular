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
    Api.WATERMARK_APP = '/watermark';
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
    Api.SAVE_WATERMARK = '/saveWatermark';
    Api.DELETE_WATERMARK_FILE = '/deleteWatermarkFile';
    Api.LOAD_WATERMARK_IMAGE = '/loadWatermarkImage';
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
    Api.WATERMARK_APP;
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
    Api.SAVE_WATERMARK;
    /** @type {?} */
    Api.DELETE_WATERMARK_FILE;
    /** @type {?} */
    Api.LOAD_WATERMARK_IMAGE;
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
    ConfigService.prototype.getWatermarkApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.trim().endsWith(Api.WATERMARK_APP) ? this._apiEndpoint : this._apiEndpoint + Api.WATERMARK_APP;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDO0lBQUE7SUF5REEsQ0FBQztJQXhEZSxjQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ3ZCLGlCQUFhLEdBQUcsWUFBWSxDQUFDO0lBQzdCLGtCQUFjLEdBQUcsYUFBYSxDQUFDO0lBQy9CLGNBQVUsR0FBRyxTQUFTLENBQUM7SUFDdkIsY0FBVSxHQUFHLFNBQVMsQ0FBQztJQUN2QixrQkFBYyxHQUFHLGFBQWEsQ0FBQztJQUMvQixrQkFBYyxHQUFHLGFBQWEsQ0FBQztJQUMvQixnQkFBWSxHQUFHLFdBQVcsQ0FBQztJQUMzQixpQkFBYSxHQUFHLFlBQVksQ0FBQztJQUM3Qix3QkFBb0IsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUM1QyxrQkFBYyxHQUFHLGVBQWUsQ0FBQztJQUNqQyxlQUFXLEdBQUcsYUFBYSxDQUFDO0lBQzVCLDZCQUF5QixHQUFHLDBCQUEwQixDQUFDO0lBQ3ZELHNCQUFrQixHQUFHLG1CQUFtQixDQUFDO0lBQ3pDLDRCQUF3QixHQUFHLGlCQUFpQixDQUFDO0lBQzdDLGtDQUE4QixHQUFHLHNCQUFzQixDQUFDO0lBQ3hELGlCQUFhLEdBQUcsZUFBZSxDQUFDO0lBQ2hDLG1CQUFlLEdBQUcsaUJBQWlCLENBQUM7SUFDcEMsd0JBQW9CLEdBQUcsc0JBQXNCLENBQUM7SUFDOUMsb0JBQWdCLEdBQUcsaUJBQWlCLENBQUM7SUFDckMsc0JBQWtCLEdBQUcsbUJBQW1CLENBQUM7SUFDekMsY0FBVSxHQUFHLFlB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LE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDN0csQ0FBQzs7Z0JBdkRGLFVBQVU7Ozs7SUF3RFgsb0JBQUM7Q0FBQSxBQXhERCxJQXdEQztTQXZEWSxhQUFhOzs7Ozs7SUFFeEIscUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcGkge1xyXG4gIHB1YmxpYyBzdGF0aWMgVklFV0VSX0FQUCA9ICcvdmlld2VyJztcclxuICBwdWJsaWMgc3RhdGljIFNJR05BVFVSRV9BUFAgPSAnL3NpZ25hdHVyZSc7XHJcbiAgcHVibGljIHN0YXRpYyBBTk5PVEFUSU9OX0FQUCA9ICcvYW5ub3RhdGlvbic7XHJcbiAgcHVibGljIHN0YXRpYyBTRUFSQ0hfQVBQID0gJy9zZWFyY2gnO1xyXG4gIHB1YmxpYyBzdGF0aWMgRURJVE9SX0FQUCA9ICcvZWRpdG9yJztcclxuICBwdWJsaWMgc3RhdGljIENPTVBBUklTT05fQVBQID0gJy9jb21wYXJpc29uJztcclxuICBwdWJsaWMgc3RhdGljIENPTlZFUlNJT05fQVBQID0gJy9jb252ZXJzaW9uJztcclxuICBwdWJsaWMgc3RhdGljIE1FVEFEQVRBX0FQUCA9ICcvbWV0YWRhdGEnO1xyXG4gIHB1YmxpYyBzdGF0aWMgV0FURVJNQVJLX0FQUCA9ICcvd2F0ZXJtYXJrJztcclxuICBwdWJsaWMgc3RhdGljIERFRkFVTFRfQVBJX0VORFBPSU5UID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgcHVibGljIHN0YXRpYyBMT0FEX0ZJTEVfVFJFRSA9ICcvbG9hZEZpbGVUcmVlJztcclxuICBwdWJsaWMgc3RhdGljIExPQURfQ09ORklHID0gJy9sb2FkQ29uZmlnJztcclxuICBwdWJsaWMgc3RhdGljIExPQURfRE9DVU1FTlRfREVTQ1JJUFRJT04gPSAnL2xvYWREb2N1bWVudERlc2NyaXB0aW9uJztcclxuICBwdWJsaWMgc3RhdGljIExPQURfRE9DVU1FTlRfUEFHRSA9ICcvbG9hZERvY3VtZW50UGFnZSc7XHJcbiAgcHVibGljIHN0YXRpYyBMT0FEX0RPQ1VNRU5UX1BST1BFUlRJRVMgPSAnL2xvYWRQcm9wZXJ0aWVzJztcclxuICBwdWJsaWMgc3RhdGljIExPQURfRE9DVU1FTlRfUFJPUEVSVElFU19OQU1FUyA9ICcvbG9hZFByb3BlcnRpZXNOYW1lcyc7XHJcbiAgcHVibGljIHN0YXRpYyBTQVZFX1BST1BFUlRZID0gJy9zYXZlUHJvcGVydHknO1xyXG4gIHB1YmxpYyBzdGF0aWMgUkVNT1ZFX1BST1BFUlRZID0gJy9yZW1vdmVQcm9wZXJ0eSc7XHJcbiAgcHVibGljIHN0YXRpYyBST1RBVEVfRE9DVU1FTlRfUEFHRSA9ICcvcm90YXRlRG9jdW1lbnRQYWdlcyc7XHJcbiAgcHVibGljIHN0YXRpYyBVUExPQURfRE9DVU1FTlRTID0gJy91cGxvYWREb2N1bWVudCc7XHJcbiAgcHVibGljIHN0YXRpYyBET1dOTE9BRF9ET0NVTUVOVFMgPSAnL2Rvd25sb2FkRG9jdW1lbnQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9QUklOVCA9ICcvbG9hZFByaW50JztcclxuICBwdWJsaWMgc3RhdGljIExPQURfUFJJTlRfUERGID0gJy9wcmludFBkZic7XHJcbiAgcHVibGljIHN0YXRpYyBMT0FEX1RIVU1CTkFJTFMgPSAnL2xvYWRUaHVtYm5haWxzJztcclxuICBwdWJsaWMgc3RhdGljIExPQURfRk9STUFUUyA9ICcvbG9hZEZvcm1hdHMnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU0FWRV9GSUxFID0gJy9zYXZlRmlsZSc7XHJcbiAgcHVibGljIHN0YXRpYyBDT01QQVJFX0ZJTEVTID0gJy9jb21wYXJlJztcclxuICBwdWJsaWMgc3RhdGljIENPTlZFUlRfRklMRSA9ICcvY29udmVydCc7XHJcbiAgcHVibGljIHN0YXRpYyBERUxFVEVfU0lHTkFUVVJFX0ZJTEUgPSAnL2RlbGV0ZVNpZ25hdHVyZUZpbGUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgUkVNT1ZFX0ZST01fSU5ERVggPSAnL3JlbW92ZUZyb21JbmRleCc7XHJcbiAgcHVibGljIHN0YXRpYyBHRVRfRklMRV9TVEFUVVMgPSAnL2dldEZpbGVTdGF0dXMnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU0FWRV9PUFRJQ0FMX0NPREUgPSAnL3NhdmVPcHRpY2FsQ29kZSc7XHJcbiAgcHVibGljIHN0YXRpYyBTQVZFX1RFWFQgPSAnL3NhdmVUZXh0JztcclxuICBwdWJsaWMgc3RhdGljIFNBVkVfSU1BR0UgPSAnL3NhdmVJbWFnZSc7XHJcbiAgcHVibGljIHN0YXRpYyBTQVZFX1NUQU1QID0gJy9zYXZlU3RhbXAnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU0lHTiA9ICcvc2lnbic7XHJcbiAgcHVibGljIHN0YXRpYyBET1dOTE9BRF9TSUdORUQgPSAnL2Rvd25sb2FkU2lnbmVkJztcclxuICBwdWJsaWMgc3RhdGljIExPQURfU0lHTkFUVVJFX0lNQUdFID0gJy9sb2FkU2lnbmF0dXJlSW1hZ2UnO1xyXG4gIHB1YmxpYyBzdGF0aWMgQU5OT1RBVEUgPSAnL2Fubm90YXRlJztcclxuICBwdWJsaWMgc3RhdGljIFNFQVJDSCA9ICcvc2VhcmNoJztcclxuICBwdWJsaWMgc3RhdGljIEFERF9GSUxFU19UT19JTkRFWCA9ICcvYWRkRmlsZXNUb0luZGV4JztcclxuICBwdWJsaWMgc3RhdGljIFNBVkVfV0FURVJNQVJLID0gJy9zYXZlV2F0ZXJtYXJrJztcclxuICBwdWJsaWMgc3RhdGljIERFTEVURV9XQVRFUk1BUktfRklMRSA9ICcvZGVsZXRlV2F0ZXJtYXJrRmlsZSc7XHJcbiAgcHVibGljIHN0YXRpYyBMT0FEX1dBVEVSTUFSS19JTUFHRSA9ICcvbG9hZFdhdGVybWFya0ltYWdlJztcclxuXHJcbiAgcHVibGljIHN0YXRpYyBodHRwT3B0aW9uc0pzb24gPSB7XHJcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSlcclxuICB9O1xyXG4gIHB1YmxpYyBzdGF0aWMgaHR0cE9wdGlvbnNKc29uUmVzcG9uc2VUeXBlQmxvYiA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9KSxcclxuICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InIGFzICdibG9iJ1xyXG4gIH07XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIF9hcGlFbmRwb2ludDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYXBpRW5kcG9pbnQgPSBBcGkuREVGQVVMVF9BUElfRU5EUE9JTlQ7XHJcbiAgfVxyXG5cclxuICBzZXQgYXBpRW5kcG9pbnQodXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2FwaUVuZHBvaW50ID0gdXJsICYmIHVybC50cmltKCkuZW5kc1dpdGgoJy8nKSA/IHVybC5zdWJzdHJpbmcoMCwgdXJsLmxlbmd0aCAtIDEpIDogdXJsO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29uZmlnRW5kcG9pbnQoYXBwKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuYXBpRW5kcG9pbnQuZW5kc1dpdGgoYXBwKSA/IHRoaXMuYXBpRW5kcG9pbnQgOiB0aGlzLmFwaUVuZHBvaW50ICsgYXBwKSArIEFwaS5MT0FEX0NPTkZJRztcclxuICB9XHJcblxyXG4gIGdldFZpZXdlckFwaUVuZHBvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LmVuZHNXaXRoKEFwaS5WSUVXRVJfQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuVklFV0VSX0FQUDtcclxuICB9XHJcblxyXG4gIGdldEVkaXRvckFwaUVuZHBvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LnRyaW0oKS5lbmRzV2l0aChBcGkuRURJVE9SX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLkVESVRPUl9BUFA7XHJcbiAgfVxyXG5cclxuICBnZXRDb21wYXJpc29uQXBpRW5kcG9pbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQudHJpbSgpLmVuZHNXaXRoKEFwaS5DT01QQVJJU09OX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLkNPTVBBUklTT05fQVBQO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udmVyc2lvbkFwaUVuZHBvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LnRyaW0oKS5lbmRzV2l0aChBcGkuQ09OVkVSU0lPTl9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5DT05WRVJTSU9OX0FQUDtcclxuICB9XHJcblxyXG4gIGdldE1ldGFkYXRhQXBpRW5kcG9pbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQudHJpbSgpLmVuZHNXaXRoKEFwaS5NRVRBREFUQV9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5NRVRBREFUQV9BUFA7XHJcbiAgfVxyXG5cclxuICBnZXRXYXRlcm1hcmtBcGlFbmRwb2ludCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC50cmltKCkuZW5kc1dpdGgoQXBpLldBVEVSTUFSS19BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5XQVRFUk1BUktfQVBQO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFwaUVuZHBvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQuZW5kc1dpdGgoQXBpLlNJR05BVFVSRV9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5TSUdOQVRVUkVfQVBQO1xyXG4gIH1cclxuXHJcbiAgZ2V0QW5ub3RhdGlvbkFwaUVuZHBvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LmVuZHNXaXRoKEFwaS5BTk5PVEFUSU9OX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLkFOTk9UQVRJT05fQVBQO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VhcmNoQXBpRW5kcG9pbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQuZW5kc1dpdGgoQXBpLlNFQVJDSF9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5TRUFSQ0hfQVBQO1xyXG4gIH1cclxufVxyXG4iXX0=