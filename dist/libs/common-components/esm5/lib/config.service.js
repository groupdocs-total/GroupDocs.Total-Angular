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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDO0lBQUE7SUF5REEsQ0FBQztJQXhEZSxjQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ3ZCLGlCQUFhLEdBQUcsWUFBWSxDQUFDO0lBQzdCLGtCQUFjLEdBQUcsYUFBYSxDQUFDO0lBQy9CLGNBQVUsR0FBRyxTQUFTLENBQUM7SUFDdkIsY0FBVSxHQUFHLFNBQVMsQ0FBQztJQUN2QixrQkFBYyxHQUFHLGFBQWEsQ0FBQztJQUMvQixrQkFBYyxHQUFHLGFBQWEsQ0FBQztJQUMvQixnQkFBWSxHQUFHLFdBQVcsQ0FBQztJQUMzQix3QkFBb0IsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDekcsa0JBQWMsR0FBRyxlQUFlLENBQUM7SUFDakMsZUFBVyxHQUFHLGFBQWEsQ0FBQztJQUM1Qiw2QkFBeUIsR0FBRywwQkFBMEIsQ0FBQztJQUN2RCxzQkFBa0IsR0FBRyxtQkFBbUIsQ0FBQztJQUN6Qyw0QkFBd0IsR0FBRyxpQkFBaUIsQ0FBQztJQUM3QyxrQ0FBOEIsR0FBRyxzQkFBc0IsQ0FBQztJQUN4RCxpQkFBYSxHQUFHLGVBQWUsQ0FBQztJQUNoQyxtQkFBZSxHQUFHLGlCQUFpQixDQUFDO0lBQ3BDLHdCQUFvQixHQUFHLHNCQUFzQixDQUFDO0lBQzlDLG9CQUFnQixHQUFHLGlCQUFpQixDQUFDO0lBQ3JDLHNCQUFrQixHQUFHLG1CQUFtQixDQUFDO0lBQ3pDLHNCQUFrQixHQUFHLG9CQUFvQixDQUFDO0lBQzFDLGNBQVUsR0FBRyxZQUFZLENBQUM7SUFDMUIsa0JBQWMsR0FBRyxXQUFXLENBQUM7SUFDN0IsbUJBQWUsR0FBRyxpQkFBaUIsQ0FBQztJQUNwQyxnQkFBWSxHQUFHLGNBQWMsQ0FBQztJQUM5QixhQUFTLEdBQUcsV0FBVyxDQUFDO0lBQ3hCLGVBQVcsR0FBRyxhQUFhLENBQUM7SUFDNUIsaUJBQWEsR0FBRyxVQUFVLENBQUM7SUFDM0IsZ0JBQVksR0FBRyxVQUFVLENBQUM7SUFDMUIseUJBQXFCLEdBQUcsc0JBQXNCLENBQUM7SUFDL0MscUJBQWlCLEdBQUcsa0JBQWtCLENBQUM7SUFDdkMsbUJBQWUsR0FBRyxnQkFBZ0IsQ0FBQztJQUNuQyxxQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQztJQUN2QyxhQUFTLEdBQUcsV0FBVyxDQUFDO0lBQ3hCLGNBQVUsR0FBRyxZQUFZLENBQUM7SUFDMUIsY0FBVSxHQUFHLFlBQVksQ0FBQztJQUMxQixRQUFJLEdBQUcsT0FBTyxDQUFDO0lBQ2YsbUJBQWUsR0FBRyxpQkFBaUIsQ0FBQztJQUNwQyx3QkFBb0IsR0FBRyxxQkFBcUIsQ0FBQztJQUM3QyxZQUFRLEdBQUcsV0FBVyxDQUFDO0lBQ3ZCLFVBQU0sR0FBRyxTQUFTLENBQUM7SUFDbkIsc0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7SUFDeEMsa0JBQWMsR0FBRyxRQUFRLENBQUM7SUFDMUIsbUJBQWUsR0FBRyxTQUFTLENBQUM7SUFFNUIsbUJBQWUsR0FBRztRQUM5QixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7WUFDdkIsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQyxDQUFDO0tBQ0gsQ0FBQztJQUNZLG1DQUErQixHQUFHO1FBQzlDLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztZQUN2QixjQUFjLEVBQUUsa0JBQWtCO1NBQ25DLENBQUM7UUFDRixZQUFZLEVBQUUsbUJBQUEsTUFBTSxFQUFVO0tBQy9CLENBQUM7SUFDSixVQUFDO0NBQUEsQUF6REQsSUF5REM7U0F6RFksR0FBRzs7O0lBQ2QsZUFBcUM7O0lBQ3JDLGtCQUEyQzs7SUFDM0MsbUJBQTZDOztJQUM3QyxlQUFxQzs7SUFDckMsZUFBcUM7O0lBQ3JDLG1CQUE2Qzs7SUFDN0MsbUJBQTZDOztJQUM3QyxpQkFBeUM7O0lBQ3pDLHlCQUF1SDs7SUFDdkgsbUJBQStDOztJQUMvQyxnQkFBMEM7O0lBQzFDLDhCQUFxRTs7SUFDckUsdUJBQXVEOztJQUN2RCw2QkFBMkQ7O0lBQzNELG1DQUFzRTs7SUFDdEUsa0JBQThDOztJQUM5QyxvQkFBa0Q7O0lBQ2xELHlCQUE0RDs7SUFDNUQscUJBQW1EOztJQUNuRCx1QkFBdUQ7O0lBQ3ZELHVCQUF3RDs7SUFDeEQsZUFBd0M7O0lBQ3hDLG1CQUEyQzs7SUFDM0Msb0JBQWtEOztJQUNsRCxpQkFBNEM7O0lBQzVDLGNBQXNDOztJQUN0QyxnQkFBMEM7O0lBQzFDLGtCQUF5Qzs7SUFDekMsaUJBQXdDOztJQUN4QywwQkFBNkQ7O0lBQzdELHNCQUFxRDs7SUFDckQsb0JBQWlEOztJQUNqRCxzQkFBcUQ7O0lBQ3JELGNBQXNDOztJQUN0QyxlQUF3Qzs7SUFDeEMsZUFBd0M7O0lBQ3hDLFNBQTZCOztJQUM3QixvQkFBa0Q7O0lBQ2xELHlCQUEyRDs7SUFDM0QsYUFBcUM7O0lBQ3JDLFdBQWlDOztJQUNqQyx1QkFBc0Q7O0lBQ3RELG1CQUF3Qzs7SUFDeEMsb0JBQTBDOztJQUUxQyxvQkFJRTs7SUFDRixvQ0FLRTs7QUFHSjtJQUtFO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsb0JBQW9CLENBQUM7SUFDOUMsQ0FBQztJQUVELHNCQUFJLHNDQUFXOzs7O1FBNEJmO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7Ozs7O1FBOUJELFVBQWdCLEdBQVc7WUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQy9GLENBQUM7OztPQUFBOzs7OztJQUVELHlDQUFpQjs7OztJQUFqQixVQUFrQixHQUFHO1FBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBQ3hHLENBQUM7Ozs7SUFFRCw0Q0FBb0I7OztJQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDN0csQ0FBQzs7OztJQUVELDRDQUFvQjs7O0lBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUNwSCxDQUFDOzs7O0lBRUQsZ0RBQXdCOzs7SUFBeEI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQzVILENBQUM7Ozs7SUFFRCxnREFBd0I7OztJQUF4QjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDNUgsQ0FBQzs7OztJQUVELDhDQUFzQjs7O0lBQXRCO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztJQUN4SCxDQUFDOzs7O0lBTUQsK0NBQXVCOzs7SUFBdkI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ25ILENBQUM7Ozs7SUFFRCxnREFBd0I7OztJQUF4QjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDckgsQ0FBQzs7OztJQUVELDRDQUFvQjs7O0lBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUM3RyxDQUFDOztnQkFuREYsVUFBVTs7OztJQW9EWCxvQkFBQztDQUFBLEFBcERELElBb0RDO1NBbkRZLGFBQWE7Ozs7OztJQUV4QixxQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwaSB7XHJcbiAgcHVibGljIHN0YXRpYyBWSUVXRVJfQVBQID0gJy92aWV3ZXInO1xyXG4gIHB1YmxpYyBzdGF0aWMgU0lHTkFUVVJFX0FQUCA9ICcvc2lnbmF0dXJlJztcclxuICBwdWJsaWMgc3RhdGljIEFOTk9UQVRJT05fQVBQID0gJy9hbm5vdGF0aW9uJztcclxuICBwdWJsaWMgc3RhdGljIFNFQVJDSF9BUFAgPSAnL3NlYXJjaCc7XHJcbiAgcHVibGljIHN0YXRpYyBFRElUT1JfQVBQID0gJy9lZGl0b3InO1xyXG4gIHB1YmxpYyBzdGF0aWMgQ09NUEFSSVNPTl9BUFAgPSAnL2NvbXBhcmlzb24nO1xyXG4gIHB1YmxpYyBzdGF0aWMgQ09OVkVSU0lPTl9BUFAgPSAnL2NvbnZlcnNpb24nO1xyXG4gIHB1YmxpYyBzdGF0aWMgTUVUQURBVEFfQVBQID0gJy9tZXRhZGF0YSc7XHJcbiAgcHVibGljIHN0YXRpYyBERUZBVUxUX0FQSV9FTkRQT0lOVCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9GSUxFX1RSRUUgPSAnL2xvYWRGaWxlVHJlZSc7XHJcbiAgcHVibGljIHN0YXRpYyBMT0FEX0NPTkZJRyA9ICcvbG9hZENvbmZpZyc7XHJcbiAgcHVibGljIHN0YXRpYyBMT0FEX0RPQ1VNRU5UX0RFU0NSSVBUSU9OID0gJy9sb2FkRG9jdW1lbnREZXNjcmlwdGlvbic7XHJcbiAgcHVibGljIHN0YXRpYyBMT0FEX0RPQ1VNRU5UX1BBR0UgPSAnL2xvYWREb2N1bWVudFBhZ2UnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9ET0NVTUVOVF9QUk9QRVJUSUVTID0gJy9sb2FkUHJvcGVydGllcyc7XHJcbiAgcHVibGljIHN0YXRpYyBMT0FEX0RPQ1VNRU5UX1BST1BFUlRJRVNfTkFNRVMgPSAnL2xvYWRQcm9wZXJ0aWVzTmFtZXMnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU0FWRV9QUk9QRVJUWSA9ICcvc2F2ZVByb3BlcnR5JztcclxuICBwdWJsaWMgc3RhdGljIFJFTU9WRV9QUk9QRVJUWSA9ICcvcmVtb3ZlUHJvcGVydHknO1xyXG4gIHB1YmxpYyBzdGF0aWMgUk9UQVRFX0RPQ1VNRU5UX1BBR0UgPSAnL3JvdGF0ZURvY3VtZW50UGFnZXMnO1xyXG4gIHB1YmxpYyBzdGF0aWMgVVBMT0FEX0RPQ1VNRU5UUyA9ICcvdXBsb2FkRG9jdW1lbnQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgRE9XTkxPQURfRE9DVU1FTlRTID0gJy9kb3dubG9hZERvY3VtZW50JztcclxuICBwdWJsaWMgc3RhdGljIERPV05MT0FEX0FOTk9UQVRFRCA9ICcvZG93bmxvYWRBbm5vdGF0ZWQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9QUklOVCA9ICcvbG9hZFByaW50JztcclxuICBwdWJsaWMgc3RhdGljIExPQURfUFJJTlRfUERGID0gJy9wcmludFBkZic7XHJcbiAgcHVibGljIHN0YXRpYyBMT0FEX1RIVU1CTkFJTFMgPSAnL2xvYWRUaHVtYm5haWxzJztcclxuICBwdWJsaWMgc3RhdGljIExPQURfRk9STUFUUyA9ICcvbG9hZEZvcm1hdHMnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU0FWRV9GSUxFID0gJy9zYXZlRmlsZSc7XHJcbiAgcHVibGljIHN0YXRpYyBDUkVBVEVfRklMRSA9ICcvY3JlYXRlRmlsZSc7XHJcbiAgcHVibGljIHN0YXRpYyBDT01QQVJFX0ZJTEVTID0gJy9jb21wYXJlJztcclxuICBwdWJsaWMgc3RhdGljIENPTlZFUlRfRklMRSA9ICcvY29udmVydCc7XHJcbiAgcHVibGljIHN0YXRpYyBERUxFVEVfU0lHTkFUVVJFX0ZJTEUgPSAnL2RlbGV0ZVNpZ25hdHVyZUZpbGUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgUkVNT1ZFX0ZST01fSU5ERVggPSAnL3JlbW92ZUZyb21JbmRleCc7XHJcbiAgcHVibGljIHN0YXRpYyBHRVRfRklMRV9TVEFUVVMgPSAnL2dldEZpbGVTdGF0dXMnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU0FWRV9PUFRJQ0FMX0NPREUgPSAnL3NhdmVPcHRpY2FsQ29kZSc7XHJcbiAgcHVibGljIHN0YXRpYyBTQVZFX1RFWFQgPSAnL3NhdmVUZXh0JztcclxuICBwdWJsaWMgc3RhdGljIFNBVkVfSU1BR0UgPSAnL3NhdmVJbWFnZSc7XHJcbiAgcHVibGljIHN0YXRpYyBTQVZFX1NUQU1QID0gJy9zYXZlU3RhbXAnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU0lHTiA9ICcvc2lnbic7XHJcbiAgcHVibGljIHN0YXRpYyBET1dOTE9BRF9TSUdORUQgPSAnL2Rvd25sb2FkU2lnbmVkJztcclxuICBwdWJsaWMgc3RhdGljIExPQURfU0lHTkFUVVJFX0lNQUdFID0gJy9sb2FkU2lnbmF0dXJlSW1hZ2UnO1xyXG4gIHB1YmxpYyBzdGF0aWMgQU5OT1RBVEUgPSAnL2Fubm90YXRlJztcclxuICBwdWJsaWMgc3RhdGljIFNFQVJDSCA9ICcvc2VhcmNoJztcclxuICBwdWJsaWMgc3RhdGljIEFERF9GSUxFU19UT19JTkRFWCA9ICcvYWRkRmlsZXNUb0luZGV4JztcclxuICBwdWJsaWMgc3RhdGljIENMRUFOX01FVEFEQVRBID0gJy9jbGVhbic7XHJcbiAgcHVibGljIHN0YXRpYyBFWFBPUlRfTUVUQURBVEEgPSAnL2V4cG9ydCc7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaHR0cE9wdGlvbnNKc29uID0ge1xyXG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0pXHJcbiAgfTtcclxuICBwdWJsaWMgc3RhdGljIGh0dHBPcHRpb25zSnNvblJlc3BvbnNlVHlwZUJsb2IgPSB7XHJcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSksXHJcbiAgICByZXNwb25zZVR5cGU6ICdibG9iJyBhcyAnYmxvYidcclxuICB9O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBfYXBpRW5kcG9pbnQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmFwaUVuZHBvaW50ID0gQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UO1xyXG4gIH1cclxuXHJcbiAgc2V0IGFwaUVuZHBvaW50KHVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9hcGlFbmRwb2ludCA9IHVybCAmJiB1cmwudHJpbSgpLmVuZHNXaXRoKCcvJykgPyB1cmwuc3Vic3RyaW5nKDAsIHVybC5sZW5ndGggLSAxKSA6IHVybDtcclxuICB9XHJcblxyXG4gIGdldENvbmZpZ0VuZHBvaW50KGFwcCkge1xyXG4gICAgcmV0dXJuICh0aGlzLmFwaUVuZHBvaW50LmVuZHNXaXRoKGFwcCkgPyB0aGlzLmFwaUVuZHBvaW50IDogdGhpcy5hcGlFbmRwb2ludCArIGFwcCkgKyBBcGkuTE9BRF9DT05GSUc7XHJcbiAgfVxyXG5cclxuICBnZXRWaWV3ZXJBcGlFbmRwb2ludCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC5lbmRzV2l0aChBcGkuVklFV0VSX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLlZJRVdFUl9BUFA7XHJcbiAgfVxyXG5cclxuICBnZXRFZGl0b3JBcGlFbmRwb2ludCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC50cmltKCkuZW5kc1dpdGgoQXBpLkVESVRPUl9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5FRElUT1JfQVBQO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29tcGFyaXNvbkFwaUVuZHBvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LnRyaW0oKS5lbmRzV2l0aChBcGkuQ09NUEFSSVNPTl9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5DT01QQVJJU09OX0FQUDtcclxuICB9XHJcblxyXG4gIGdldENvbnZlcnNpb25BcGlFbmRwb2ludCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC50cmltKCkuZW5kc1dpdGgoQXBpLkNPTlZFUlNJT05fQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuQ09OVkVSU0lPTl9BUFA7XHJcbiAgfVxyXG5cclxuICBnZXRNZXRhZGF0YUFwaUVuZHBvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LnRyaW0oKS5lbmRzV2l0aChBcGkuTUVUQURBVEFfQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuTUVUQURBVEFfQVBQO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFwaUVuZHBvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQuZW5kc1dpdGgoQXBpLlNJR05BVFVSRV9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5TSUdOQVRVUkVfQVBQO1xyXG4gIH1cclxuXHJcbiAgZ2V0QW5ub3RhdGlvbkFwaUVuZHBvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LmVuZHNXaXRoKEFwaS5BTk5PVEFUSU9OX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLkFOTk9UQVRJT05fQVBQO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VhcmNoQXBpRW5kcG9pbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQuZW5kc1dpdGgoQXBpLlNFQVJDSF9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5TRUFSQ0hfQVBQO1xyXG4gIH1cclxufVxyXG4iXX0=