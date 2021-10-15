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
    Api.DEFAULT_API_ENDPOINT = window.location.protocol + "//" + window.location.host + window.location.pathname;
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
    Api.DOWNLOAD_ANNOTATED = '/downloadAnnotated';
    Api.LOAD_PRINT = '/loadPrint';
    Api.LOAD_PRINT_PDF = '/printPdf';
    Api.LOAD_THUMBNAILS = '/loadThumbnails';
    Api.LOAD_FORMATS = '/loadFormats';
    Api.SAVE_FILE = '/saveFile';
    Api.CREATE_FILE = '/createFile';
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
    Api.CLEAN_METADATA = '/clean';
    Api.EXPORT_METADATA = '/export';
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
    Api.DOWNLOAD_ANNOTATED;
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
    Api.CREATE_FILE;
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
    Api.CLEAN_METADATA;
    /** @type {?} */
    Api.EXPORT_METADATA;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDO0lBQUE7SUF5REEsQ0FBQztJQXhEZSxjQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ3ZCLGlCQUFhLEdBQUcsWUFBWSxDQUFDO0lBQzdCLGtCQUFjLEdBQUcsYUFBYSxDQUFDO0lBQy9CLGNBQVUsR0FBRyxTQUFTLENBQUM7SUFDdkIsY0FBVSxHQUFHLFNBQVMsQ0FBQztJQUN2QixrQkFBYyxHQUFHLGFBQWEsQ0FBQztJQUMvQixrQkFBYyxHQUFHLGFBQWEsQ0FBQztJQUMvQixnQkFBWSxHQUFHLFdBQVcsQ0FBQztJQUMzQix3QkFBb0IsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDekcsa0JBQWMsR0FBRyxlQUFlLENBQUM7SUFDakMsZUFBVyxHQUFHLGFBQWEsQ0FBQztJQUM1Qiw2QkFBeUIsR0FBRywwQkFBMEIsQ0FBQztJQUN2RCxzQkFBa0IsR0FBRyxtQkFBbUIsQ0FBQztJQUN6Qyw0QkFBd0IsR0FBRyxpQkFBaUIsQ0FBQztJQUM3QyxrQ0FBOEIsR0FBRyxzQkFBc0IsQ0FBQztJQUN4RCxpQkFBYSxHQUFHLGVBQWUsQ0FBQztJQUNoQyxtQkFBZSxHQUFHLGlCQUFpQixDQUFDO0lBQ3BDLHdCQUFvQixHQUFHLHNCQUFzQixDQUFDO0lBQzlDLG9CQUFnQixHQUFHLGlCQUFpQixDQUFDO0lBQ3JD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LFVBQVUsQ0FBQztJQUM3RyxDQUFDOztnQkFuREYsVUFBVTs7OztJQW9EWCxvQkFBQztDQUFBLEFBcERELElBb0RDO1NBbkRZLGFBQWE7Ozs7OztJQUV4QixxQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IGNsYXNzIEFwaSB7XG4gIHB1YmxpYyBzdGF0aWMgVklFV0VSX0FQUCA9ICcvdmlld2VyJztcbiAgcHVibGljIHN0YXRpYyBTSUdOQVRVUkVfQVBQID0gJy9zaWduYXR1cmUnO1xuICBwdWJsaWMgc3RhdGljIEFOTk9UQVRJT05fQVBQID0gJy9hbm5vdGF0aW9uJztcbiAgcHVibGljIHN0YXRpYyBTRUFSQ0hfQVBQID0gJy9zZWFyY2gnO1xuICBwdWJsaWMgc3RhdGljIEVESVRPUl9BUFAgPSAnL2VkaXRvcic7XG4gIHB1YmxpYyBzdGF0aWMgQ09NUEFSSVNPTl9BUFAgPSAnL2NvbXBhcmlzb24nO1xuICBwdWJsaWMgc3RhdGljIENPTlZFUlNJT05fQVBQID0gJy9jb252ZXJzaW9uJztcbiAgcHVibGljIHN0YXRpYyBNRVRBREFUQV9BUFAgPSAnL21ldGFkYXRhJztcbiAgcHVibGljIHN0YXRpYyBERUZBVUxUX0FQSV9FTkRQT0lOVCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICBwdWJsaWMgc3RhdGljIExPQURfRklMRV9UUkVFID0gJy9sb2FkRmlsZVRyZWUnO1xuICBwdWJsaWMgc3RhdGljIExPQURfQ09ORklHID0gJy9sb2FkQ29uZmlnJztcbiAgcHVibGljIHN0YXRpYyBMT0FEX0RPQ1VNRU5UX0RFU0NSSVBUSU9OID0gJy9sb2FkRG9jdW1lbnREZXNjcmlwdGlvbic7XG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9ET0NVTUVOVF9QQUdFID0gJy9sb2FkRG9jdW1lbnRQYWdlJztcbiAgcHVibGljIHN0YXRpYyBMT0FEX0RPQ1VNRU5UX1BST1BFUlRJRVMgPSAnL2xvYWRQcm9wZXJ0aWVzJztcbiAgcHVibGljIHN0YXRpYyBMT0FEX0RPQ1VNRU5UX1BST1BFUlRJRVNfTkFNRVMgPSAnL2xvYWRQcm9wZXJ0aWVzTmFtZXMnO1xuICBwdWJsaWMgc3RhdGljIFNBVkVfUFJPUEVSVFkgPSAnL3NhdmVQcm9wZXJ0eSc7XG4gIHB1YmxpYyBzdGF0aWMgUkVNT1ZFX1BST1BFUlRZID0gJy9yZW1vdmVQcm9wZXJ0eSc7XG4gIHB1YmxpYyBzdGF0aWMgUk9UQVRFX0RPQ1VNRU5UX1BBR0UgPSAnL3JvdGF0ZURvY3VtZW50UGFnZXMnO1xuICBwdWJsaWMgc3RhdGljIFVQTE9BRF9ET0NVTUVOVFMgPSAnL3VwbG9hZERvY3VtZW50JztcbiAgcHVibGljIHN0YXRpYyBET1dOTE9BRF9ET0NVTUVOVFMgPSAnL2Rvd25sb2FkRG9jdW1lbnQnO1xuICBwdWJsaWMgc3RhdGljIERPV05MT0FEX0FOTk9UQVRFRCA9ICcvZG93bmxvYWRBbm5vdGF0ZWQnO1xuICBwdWJsaWMgc3RhdGljIExPQURfUFJJTlQgPSAnL2xvYWRQcmludCc7XG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9QUklOVF9QREYgPSAnL3ByaW50UGRmJztcbiAgcHVibGljIHN0YXRpYyBMT0FEX1RIVU1CTkFJTFMgPSAnL2xvYWRUaHVtYm5haWxzJztcbiAgcHVibGljIHN0YXRpYyBMT0FEX0ZPUk1BVFMgPSAnL2xvYWRGb3JtYXRzJztcbiAgcHVibGljIHN0YXRpYyBTQVZFX0ZJTEUgPSAnL3NhdmVGaWxlJztcbiAgcHVibGljIHN0YXRpYyBDUkVBVEVfRklMRSA9ICcvY3JlYXRlRmlsZSc7XG4gIHB1YmxpYyBzdGF0aWMgQ09NUEFSRV9GSUxFUyA9ICcvY29tcGFyZSc7XG4gIHB1YmxpYyBzdGF0aWMgQ09OVkVSVF9GSUxFID0gJy9jb252ZXJ0JztcbiAgcHVibGljIHN0YXRpYyBERUxFVEVfU0lHTkFUVVJFX0ZJTEUgPSAnL2RlbGV0ZVNpZ25hdHVyZUZpbGUnO1xuICBwdWJsaWMgc3RhdGljIFJFTU9WRV9GUk9NX0lOREVYID0gJy9yZW1vdmVGcm9tSW5kZXgnO1xuICBwdWJsaWMgc3RhdGljIEdFVF9GSUxFX1NUQVRVUyA9ICcvZ2V0RmlsZVN0YXR1cyc7XG4gIHB1YmxpYyBzdGF0aWMgU0FWRV9PUFRJQ0FMX0NPREUgPSAnL3NhdmVPcHRpY2FsQ29kZSc7XG4gIHB1YmxpYyBzdGF0aWMgU0FWRV9URVhUID0gJy9zYXZlVGV4dCc7XG4gIHB1YmxpYyBzdGF0aWMgU0FWRV9JTUFHRSA9ICcvc2F2ZUltYWdlJztcbiAgcHVibGljIHN0YXRpYyBTQVZFX1NUQU1QID0gJy9zYXZlU3RhbXAnO1xuICBwdWJsaWMgc3RhdGljIFNJR04gPSAnL3NpZ24nO1xuICBwdWJsaWMgc3RhdGljIERPV05MT0FEX1NJR05FRCA9ICcvZG93bmxvYWRTaWduZWQnO1xuICBwdWJsaWMgc3RhdGljIExPQURfU0lHTkFUVVJFX0lNQUdFID0gJy9sb2FkU2lnbmF0dXJlSW1hZ2UnO1xuICBwdWJsaWMgc3RhdGljIEFOTk9UQVRFID0gJy9hbm5vdGF0ZSc7XG4gIHB1YmxpYyBzdGF0aWMgU0VBUkNIID0gJy9zZWFyY2gnO1xuICBwdWJsaWMgc3RhdGljIEFERF9GSUxFU19UT19JTkRFWCA9ICcvYWRkRmlsZXNUb0luZGV4JztcbiAgcHVibGljIHN0YXRpYyBDTEVBTl9NRVRBREFUQSA9ICcvY2xlYW4nO1xuICBwdWJsaWMgc3RhdGljIEVYUE9SVF9NRVRBREFUQSA9ICcvZXhwb3J0JztcblxuICBwdWJsaWMgc3RhdGljIGh0dHBPcHRpb25zSnNvbiA9IHtcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KVxuICB9O1xuICBwdWJsaWMgc3RhdGljIGh0dHBPcHRpb25zSnNvblJlc3BvbnNlVHlwZUJsb2IgPSB7XG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSksXG4gICAgcmVzcG9uc2VUeXBlOiAnYmxvYicgYXMgJ2Jsb2InXG4gIH07XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcblxuICBwcml2YXRlIF9hcGlFbmRwb2ludDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXBpRW5kcG9pbnQgPSBBcGkuREVGQVVMVF9BUElfRU5EUE9JTlQ7XG4gIH1cblxuICBzZXQgYXBpRW5kcG9pbnQodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcGlFbmRwb2ludCA9IHVybCAmJiB1cmwudHJpbSgpLmVuZHNXaXRoKCcvJykgPyB1cmwuc3Vic3RyaW5nKDAsIHVybC5sZW5ndGggLSAxKSA6IHVybDtcbiAgfVxuXG4gIGdldENvbmZpZ0VuZHBvaW50KGFwcCkge1xuICAgIHJldHVybiAodGhpcy5hcGlFbmRwb2ludC5lbmRzV2l0aChhcHApID8gdGhpcy5hcGlFbmRwb2ludCA6IHRoaXMuYXBpRW5kcG9pbnQgKyBhcHApICsgQXBpLkxPQURfQ09ORklHO1xuICB9XG5cbiAgZ2V0Vmlld2VyQXBpRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LmVuZHNXaXRoKEFwaS5WSUVXRVJfQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuVklFV0VSX0FQUDtcbiAgfVxuXG4gIGdldEVkaXRvckFwaUVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC50cmltKCkuZW5kc1dpdGgoQXBpLkVESVRPUl9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5FRElUT1JfQVBQO1xuICB9XG5cbiAgZ2V0Q29tcGFyaXNvbkFwaUVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC50cmltKCkuZW5kc1dpdGgoQXBpLkNPTVBBUklTT05fQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuQ09NUEFSSVNPTl9BUFA7XG4gIH1cblxuICBnZXRDb252ZXJzaW9uQXBpRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LnRyaW0oKS5lbmRzV2l0aChBcGkuQ09OVkVSU0lPTl9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5DT05WRVJTSU9OX0FQUDtcbiAgfVxuXG4gIGdldE1ldGFkYXRhQXBpRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LnRyaW0oKS5lbmRzV2l0aChBcGkuTUVUQURBVEFfQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuTUVUQURBVEFfQVBQO1xuICB9XG5cbiAgZ2V0IGFwaUVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludDtcbiAgfVxuXG4gIGdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC5lbmRzV2l0aChBcGkuU0lHTkFUVVJFX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLlNJR05BVFVSRV9BUFA7XG4gIH1cblxuICBnZXRBbm5vdGF0aW9uQXBpRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LmVuZHNXaXRoKEFwaS5BTk5PVEFUSU9OX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLkFOTk9UQVRJT05fQVBQO1xuICB9XG5cbiAgZ2V0U2VhcmNoQXBpRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LmVuZHNXaXRoKEFwaS5TRUFSQ0hfQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuU0VBUkNIX0FQUDtcbiAgfVxufVxuIl19