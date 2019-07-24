/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
export class Api {
}
Api.VIEWER_APP = '/viewer';
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
if (false) {
    /** @type {?} */
    Api.VIEWER_APP;
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
    Api.httpOptionsJson;
    /** @type {?} */
    Api.httpOptionsJsonResponseTypeBlob;
}
export class ConfigService {
    constructor() {
        this._apiEndpoint = Api.DEFAULT_API_ENDPOINT;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    set apiEndpoint(url) {
        this._apiEndpoint = url && url.trim().endsWith('/') ? url.substring(0, url.length - 1) : url;
    }
    /**
     * @param {?} app
     * @return {?}
     */
    getConfigEndpoint(app) {
        return (this.apiEndpoint.endsWith(app) ? this.apiEndpoint : this.apiEndpoint + app) + Api.LOAD_CONFIG;
    }
    /**
     * @return {?}
     */
    getViewerApiEndpoint() {
        return this._apiEndpoint.endsWith(Api.VIEWER_APP) ? this._apiEndpoint : this._apiEndpoint + Api.VIEWER_APP;
    }
    /**
     * @return {?}
     */
    getEditorApiEndpoint() {
        return this._apiEndpoint.trim().endsWith(Api.EDITOR_APP) ? this._apiEndpoint : this._apiEndpoint + Api.EDITOR_APP;
    }
    /**
     * @return {?}
     */
    getComparisonApiEndpoint() {
        return this._apiEndpoint.trim().endsWith(Api.COMPARISON_APP) ? this._apiEndpoint : this._apiEndpoint + Api.EDITOR_APP;
    }
    /**
     * @return {?}
     */
    get apiEndpoint() {
        return this._apiEndpoint;
    }
}
ConfigService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigService.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype._apiEndpoint;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE1BQU0sT0FBTyxHQUFHOztBQUNBLGNBQVUsR0FBRyxTQUFTLENBQUM7QUFDdkIsY0FBVSxHQUFHLFNBQVMsQ0FBQztBQUN2QixrQkFBYyxHQUFHLGFBQWEsQ0FBQztBQUMvQix3QkFBb0IsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM1QyxrQkFBYyxHQUFHLGVBQWUsQ0FBQztBQUNqQyxlQUFXLEdBQUcsYUFBYSxDQUFDO0FBQzVCLDZCQUF5QixHQUFHLDBCQUEwQixDQUFDO0FBQ3ZELHNCQUFrQixHQUFHLG1CQUFtQixDQUFDO0FBQ3pDLHdCQUFvQixHQUFHLHNCQUFzQixDQUFDO0FBQzlDLG9CQUFnQixHQUFHLGlCQUFpQixDQUFDO0FBQ3JDLHNCQUFrQixHQUFHLG1CQUFtQixDQUFDO0FBQ3pDLGNBQVUsR0FBRyxZQUFZLENBQUM7QUFDMUIsa0JBQWMsR0FBRyxXQUFXLENBQUM7QUFDN0IsbUJBQWUsR0FBRyxpQkFBaUIsQ0FBQztBQUNwQyxnQkFBWSxHQUFHLGNBQWMsQ0FBQztBQUM5QixhQUFTLEdBQUcsV0FBVyxDQUFDO0FBRXhCLG1CQUFlLEdBQUc7SUFDOUIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO1FBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7S0FDbkMsQ0FBQztDQUNILENBQUM7QUFDWSxtQ0FBK0IsR0FBRztJQUM5QyxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7UUFDdkIsY0FBYyxFQUFFLGtCQUFrQjtLQUNuQyxDQUFDO0lBQ0YsWUFBWSxFQUFFLG1CQUFBLE1BQU0sRUFBVTtDQUMvQixDQUFDOzs7SUEzQkYsZUFBcUM7O0lBQ3JDLGVBQXFDOztJQUNyQyxtQkFBNkM7O0lBQzdDLHlCQUEwRDs7SUFDMUQsbUJBQStDOztJQUMvQyxnQkFBMEM7O0lBQzFDLDhCQUFxRTs7SUFDckUsdUJBQXVEOztJQUN2RCx5QkFBNEQ7O0lBQzVELHFCQUFtRDs7SUFDbkQsdUJBQXVEOztJQUN2RCxlQUF3Qzs7SUFDeEMsbUJBQTJDOztJQUMzQyxvQkFBa0Q7O0lBQ2xELGlCQUE0Qzs7SUFDNUMsY0FBc0M7O0lBRXRDLG9CQUlFOztJQUNGLG9DQUtFOztBQUlKLE1BQU0sT0FBTyxhQUFhO0lBSXhCO1FBRlEsaUJBQVksR0FBRyxHQUFHLENBQUMsb0JBQW9CLENBQUM7SUFHaEQsQ0FBQzs7Ozs7SUFFRCxJQUFJLFdBQVcsQ0FBQyxHQUFXO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUMvRixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEdBQUc7UUFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFDeEcsQ0FBQzs7OztJQUVELG9CQUFvQjtRQUNsQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQzdHLENBQUM7Ozs7SUFFRCxvQkFBb0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUNwSCxDQUFDOzs7O0lBRUQsd0JBQXdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDeEgsQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7WUE5QkYsVUFBVTs7Ozs7Ozs7O0lBR1QscUNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBBcGkge1xuICBwdWJsaWMgc3RhdGljIFZJRVdFUl9BUFAgPSAnL3ZpZXdlcic7XG4gIHB1YmxpYyBzdGF0aWMgRURJVE9SX0FQUCA9ICcvZWRpdG9yJztcbiAgcHVibGljIHN0YXRpYyBDT01QQVJJU09OX0FQUCA9ICcvY29tcGFyaXNvbic7XG4gIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9BUElfRU5EUE9JTlQgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgcHVibGljIHN0YXRpYyBMT0FEX0ZJTEVfVFJFRSA9ICcvbG9hZEZpbGVUcmVlJztcbiAgcHVibGljIHN0YXRpYyBMT0FEX0NPTkZJRyA9ICcvbG9hZENvbmZpZyc7XG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9ET0NVTUVOVF9ERVNDUklQVElPTiA9ICcvbG9hZERvY3VtZW50RGVzY3JpcHRpb24nO1xuICBwdWJsaWMgc3RhdGljIExPQURfRE9DVU1FTlRfUEFHRSA9ICcvbG9hZERvY3VtZW50UGFnZSc7XG4gIHB1YmxpYyBzdGF0aWMgUk9UQVRFX0RPQ1VNRU5UX1BBR0UgPSAnL3JvdGF0ZURvY3VtZW50UGFnZXMnO1xuICBwdWJsaWMgc3RhdGljIFVQTE9BRF9ET0NVTUVOVFMgPSAnL3VwbG9hZERvY3VtZW50JztcbiAgcHVibGljIHN0YXRpYyBET1dOTE9BRF9ET0NVTUVOVFMgPSAnL2Rvd25sb2FkRG9jdW1lbnQnO1xuICBwdWJsaWMgc3RhdGljIExPQURfUFJJTlQgPSAnL2xvYWRQcmludCc7XG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9QUklOVF9QREYgPSAnL3ByaW50UGRmJztcbiAgcHVibGljIHN0YXRpYyBMT0FEX1RIVU1CTkFJTFMgPSAnL2xvYWRUaHVtYm5haWxzJztcbiAgcHVibGljIHN0YXRpYyBMT0FEX0ZPUk1BVFMgPSAnL2xvYWRGb3JtYXRzJztcbiAgcHVibGljIHN0YXRpYyBTQVZFX0ZJTEUgPSAnL3NhdmVGaWxlJztcblxuICBwdWJsaWMgc3RhdGljIGh0dHBPcHRpb25zSnNvbiA9IHtcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KVxuICB9O1xuICBwdWJsaWMgc3RhdGljIGh0dHBPcHRpb25zSnNvblJlc3BvbnNlVHlwZUJsb2IgPSB7XG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSksXG4gICAgcmVzcG9uc2VUeXBlOiAnYmxvYicgYXMgJ2Jsb2InXG4gIH07XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcblxuICBwcml2YXRlIF9hcGlFbmRwb2ludCA9IEFwaS5ERUZBVUxUX0FQSV9FTkRQT0lOVDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIHNldCBhcGlFbmRwb2ludCh1cmw6IHN0cmluZykge1xuICAgIHRoaXMuX2FwaUVuZHBvaW50ID0gdXJsICYmIHVybC50cmltKCkuZW5kc1dpdGgoJy8nKSA/IHVybC5zdWJzdHJpbmcoMCwgdXJsLmxlbmd0aCAtIDEpIDogdXJsO1xuICB9XG5cbiAgZ2V0Q29uZmlnRW5kcG9pbnQoYXBwKSB7XG4gICAgcmV0dXJuICh0aGlzLmFwaUVuZHBvaW50LmVuZHNXaXRoKGFwcCkgPyB0aGlzLmFwaUVuZHBvaW50IDogdGhpcy5hcGlFbmRwb2ludCArIGFwcCkgKyBBcGkuTE9BRF9DT05GSUc7XG4gIH1cblxuICBnZXRWaWV3ZXJBcGlFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQuZW5kc1dpdGgoQXBpLlZJRVdFUl9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5WSUVXRVJfQVBQO1xuICB9XG5cbiAgZ2V0RWRpdG9yQXBpRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LnRyaW0oKS5lbmRzV2l0aChBcGkuRURJVE9SX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLkVESVRPUl9BUFA7XG4gIH1cblxuICBnZXRDb21wYXJpc29uQXBpRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LnRyaW0oKS5lbmRzV2l0aChBcGkuQ09NUEFSSVNPTl9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5FRElUT1JfQVBQO1xuICB9XG5cbiAgZ2V0IGFwaUVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludDtcbiAgfVxufVxuIl19