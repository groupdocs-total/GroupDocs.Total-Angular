/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Api, ConfigService } from "@groupdocs.examples.angular/common-components";
import { BehaviorSubject } from "rxjs";
import { ConversionRequestModel } from './models';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@groupdocs.examples.angular/common-components";
export class ConversionService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._selectedFormat = new BehaviorSubject(new Array());
        this._selectFormats = this._selectedFormat.asObservable();
        this._itemToConvert = new BehaviorSubject(null);
        this.itemToConvert = this._itemToConvert.asObservable();
        this._itemToRemove = new BehaviorSubject(null);
        this.itemToRemove = this._itemToRemove.asObservable();
    }
    /**
     * @return {?}
     */
    get selectedItems() {
        return this._selectFormats;
    }
    /**
     * @param {?} filesToConvert
     * @return {?}
     */
    selectItems(filesToConvert) {
        this._selectedFormat.next(filesToConvert);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    loadFiles(path) {
        return this._http.post(this._config.getConversionApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
    }
    /**
     * @param {?} file
     * @param {?} url
     * @param {?} rewrite
     * @return {?}
     */
    upload(file, url, rewrite) {
        /** @type {?} */
        const formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getConversionApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    convert(file) {
        /** @type {?} */
        const req = new ConversionRequestModel();
        req.added = true;
        req.destinationType = file.destinationType;
        req.guid = file.guid;
        req.size = file.size;
        return this._http.post(this._config.getConversionApiEndpoint() + Api.CONVERT_FILE, req);
    }
    /**
     * @param {?} guid
     * @return {?}
     */
    getDownloadUrl(guid) {
        return this._config.getConversionApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?path=' + guid;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectedItemToConvert(item) {
        this._itemToConvert.next(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectedItemToRemove(item) {
        this._itemToRemove.next(item);
    }
}
ConversionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ConversionService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ ConversionService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConversionService_Factory() { return new ConversionService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: ConversionService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConversionService.prototype._selectedFormat;
    /**
     * @type {?}
     * @private
     */
    ConversionService.prototype._selectFormats;
    /**
     * @type {?}
     * @private
     */
    ConversionService.prototype._itemToConvert;
    /** @type {?} */
    ConversionService.prototype.itemToConvert;
    /**
     * @type {?}
     * @private
     */
    ConversionService.prototype._itemToRemove;
    /** @type {?} */
    ConversionService.prototype.itemToRemove;
    /**
     * @type {?}
     * @private
     */
    ConversionService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ConversionService.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvY29udmVyc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQ0wsR0FBRyxFQUFFLGFBQWEsRUFDbkIsTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RCxPQUFPLEVBQWEsZUFBZSxFQUFXLE1BQU0sTUFBTSxDQUFDO0FBQzNELE9BQU8sRUFBdUIsc0JBQXNCLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7QUFNdkUsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFVNUIsWUFBb0IsS0FBaUIsRUFBVSxPQUFzQjtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQVQ3RCxvQkFBZSxHQUEyQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLEtBQUssRUFBdUIsQ0FBQyxDQUFDO1FBQ2hILG1CQUFjLEdBQXNDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFeEYsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBc0IsSUFBSSxDQUFDLENBQUM7UUFDeEUsa0JBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTNDLGtCQUFhLEdBQUcsSUFBSSxlQUFlLENBQXNCLElBQUksQ0FBQyxDQUFDO1FBQ3ZFLGlCQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUdqRCxDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLGNBQXFDO1FBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQVk7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUgsQ0FBQzs7Ozs7OztJQUVELE1BQU0sQ0FBQyxJQUFVLEVBQUUsR0FBVyxFQUFFLE9BQWdCOztjQUN4QyxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUU7UUFDL0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxHQUFHLEVBQUU7WUFDUCxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNuRyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxJQUF5Qjs7Y0FDekIsR0FBRyxHQUFHLElBQUksc0JBQXNCLEVBQUU7UUFDeEMsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsR0FBRyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMxRixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxJQUFZO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzdGLENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsSUFBeUI7UUFDN0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxJQUF5QjtRQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUEzREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVE8sVUFBVTtZQUVYLGFBQWE7Ozs7Ozs7O0lBVWxCLDRDQUF3SDs7Ozs7SUFDeEgsMkNBQWdHOzs7OztJQUVoRywyQ0FBd0U7O0lBQ3hFLDBDQUFtRDs7Ozs7SUFFbkQsMENBQXVFOztJQUN2RSx5Q0FBaUQ7Ozs7O0lBRXJDLGtDQUF5Qjs7Ozs7SUFBRSxvQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7XG4gIEFwaSwgQ29uZmlnU2VydmljZSwgRmlsZUNyZWRlbnRpYWxzLCBTYXZlRmlsZSwgRmlsZU1vZGVsXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZlcn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IENvbnZlcnNpb25JdGVtTW9kZWwsIENvbnZlcnNpb25SZXF1ZXN0TW9kZWwgfSBmcm9tICcuL21vZGVscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgQ29udmVyc2lvblNlcnZpY2Uge1xuICBwcml2YXRlIF9zZWxlY3RlZEZvcm1hdDogQmVoYXZpb3JTdWJqZWN0PENvbnZlcnNpb25JdGVtTW9kZWxbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG5ldyBBcnJheTxDb252ZXJzaW9uSXRlbU1vZGVsPigpKTtcbiAgcHJpdmF0ZSBfc2VsZWN0Rm9ybWF0czogT2JzZXJ2YWJsZTxDb252ZXJzaW9uSXRlbU1vZGVsW10+ID0gdGhpcy5fc2VsZWN0ZWRGb3JtYXQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSBfaXRlbVRvQ29udmVydCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q29udmVyc2lvbkl0ZW1Nb2RlbD4obnVsbCk7XG4gIGl0ZW1Ub0NvbnZlcnQgPSB0aGlzLl9pdGVtVG9Db252ZXJ0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHByaXZhdGUgX2l0ZW1Ub1JlbW92ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q29udmVyc2lvbkl0ZW1Nb2RlbD4obnVsbCk7XG4gIGl0ZW1Ub1JlbW92ZSA9IHRoaXMuX2l0ZW1Ub1JlbW92ZS5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIF9jb25maWc6IENvbmZpZ1NlcnZpY2UpIHtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZEl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RGb3JtYXRzO1xuICB9XG5cbiAgc2VsZWN0SXRlbXMoZmlsZXNUb0NvbnZlcnQ6IENvbnZlcnNpb25JdGVtTW9kZWxbXSkge1xuICAgIHRoaXMuX3NlbGVjdGVkRm9ybWF0Lm5leHQoZmlsZXNUb0NvbnZlcnQpO1xuICB9XG5cbiAgbG9hZEZpbGVzKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldENvbnZlcnNpb25BcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRklMRV9UUkVFLCB7J3BhdGgnOiBwYXRofSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICB1cGxvYWQoZmlsZTogRmlsZSwgdXJsOiBzdHJpbmcsIHJld3JpdGU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdyZXdyaXRlJywgU3RyaW5nKHJld3JpdGUpKTtcbiAgICBpZiAodXJsKSB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cmxcIiwgdXJsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRDb252ZXJzaW9uQXBpRW5kcG9pbnQoKSArIEFwaS5VUExPQURfRE9DVU1FTlRTLCBmb3JtRGF0YSk7XG4gIH1cblxuICBjb252ZXJ0KGZpbGU6IENvbnZlcnNpb25JdGVtTW9kZWwpIHtcbiAgICBjb25zdCByZXEgPSBuZXcgQ29udmVyc2lvblJlcXVlc3RNb2RlbCgpO1xuICAgIHJlcS5hZGRlZCA9IHRydWU7XG4gICAgcmVxLmRlc3RpbmF0aW9uVHlwZSA9IGZpbGUuZGVzdGluYXRpb25UeXBlO1xuICAgIHJlcS5ndWlkID0gZmlsZS5ndWlkO1xuICAgIHJlcS5zaXplID0gZmlsZS5zaXplO1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldENvbnZlcnNpb25BcGlFbmRwb2ludCgpICsgQXBpLkNPTlZFUlRfRklMRSwgcmVxKTtcbiAgfVxuXG4gIGdldERvd25sb2FkVXJsKGd1aWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuZ2V0Q29udmVyc2lvbkFwaUVuZHBvaW50KCkgKyBBcGkuRE9XTkxPQURfRE9DVU1FTlRTICsgJy8/cGF0aD0nICsgZ3VpZDtcbiAgfVxuXG4gIHNlbGVjdGVkSXRlbVRvQ29udmVydChpdGVtOiBDb252ZXJzaW9uSXRlbU1vZGVsKSB7XG4gICAgdGhpcy5faXRlbVRvQ29udmVydC5uZXh0KGl0ZW0pO1xuICB9XG5cbiAgc2VsZWN0ZWRJdGVtVG9SZW1vdmUoaXRlbTogQ29udmVyc2lvbkl0ZW1Nb2RlbCkge1xuICAgIHRoaXMuX2l0ZW1Ub1JlbW92ZS5uZXh0KGl0ZW0pO1xuICB9XG59XG4iXX0=