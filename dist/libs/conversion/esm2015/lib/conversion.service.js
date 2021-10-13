/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Api, ConfigService, FileUtil } from "@groupdocs.examples.angular/common-components";
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
        this._selectedItems = new BehaviorSubject(new Array());
        this._selectItems = this._selectedItems.asObservable();
        this._selectedFormat = new BehaviorSubject(null);
        this._selectFormat = this._selectedFormat.asObservable();
        this._itemToConvert = new BehaviorSubject(null);
        this.itemToConvert = this._itemToConvert.asObservable();
        this._itemToRemove = new BehaviorSubject(null);
        this.itemToRemove = this._itemToRemove.asObservable();
    }
    /**
     * @return {?}
     */
    get selectedItems() {
        return this._selectItems;
    }
    /**
     * @return {?}
     */
    get selectedFormat() {
        return this._selectFormat;
    }
    /**
     * @param {?} filesToConvert
     * @return {?}
     */
    selectItems(filesToConvert) {
        this._selectedItems.next(filesToConvert);
    }
    /**
     * @param {?} selectedFormat
     * @return {?}
     */
    selectFormat(selectedFormat) {
        this._selectedFormat.next(selectedFormat);
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
        req.destDocumentType = FileUtil.find(file.destinationType, false).format;
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
    ConversionService.prototype._selectedItems;
    /**
     * @type {?}
     * @private
     */
    ConversionService.prototype._selectItems;
    /**
     * @type {?}
     * @private
     */
    ConversionService.prototype._selectedFormat;
    /**
     * @type {?}
     * @private
     */
    ConversionService.prototype._selectFormat;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvY29udmVyc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQ0wsR0FBRyxFQUFFLGFBQWEsRUFBd0MsUUFBUSxFQUNuRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3ZELE9BQU8sRUFBYSxlQUFlLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFDM0QsT0FBTyxFQUF1QixzQkFBc0IsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7OztBQU12RSxNQUFNLE9BQU8saUJBQWlCOzs7OztJQVk1QixZQUFvQixLQUFpQixFQUFVLE9BQXNCO1FBQWpELFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBWDdELG1CQUFjLEdBQTJDLElBQUksZUFBZSxDQUFDLElBQUksS0FBSyxFQUF1QixDQUFDLENBQUM7UUFDL0csaUJBQVksR0FBc0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyRixvQkFBZSxHQUE0QixJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUM3RSxrQkFBYSxHQUF1QixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXhFLG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQXNCLElBQUksQ0FBQyxDQUFDO1FBQ3hFLGtCQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUUzQyxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFzQixJQUFJLENBQUMsQ0FBQztRQUN2RSxpQkFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHakQsQ0FBQzs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxjQUFxQztRQUMvQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxjQUFzQjtRQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzVILENBQUM7Ozs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBVSxFQUFFLEdBQVcsRUFBRSxPQUFnQjs7Y0FDeEMsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFO1FBQy9CLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksR0FBRyxFQUFFO1lBQ1AsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDN0I7UUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbkcsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBeUI7O2NBQ3pCLEdBQUcsR0FBRyxJQUFJLHNCQUFzQixFQUFFO1FBQ3hDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUMzQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3pFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsSUFBWTtRQUN6QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQztJQUM3RixDQUFDOzs7OztJQUVELHFCQUFxQixDQUFDLElBQXlCO1FBQzdDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsb0JBQW9CLENBQUMsSUFBeUI7UUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBdEVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVRPLFVBQVU7WUFFWCxhQUFhOzs7Ozs7OztJQVVsQiwyQ0FBdUg7Ozs7O0lBQ3ZILHlDQUE2Rjs7Ozs7SUFDN0YsNENBQXFGOzs7OztJQUNyRiwwQ0FBZ0Y7Ozs7O0lBRWhGLDJDQUF3RTs7SUFDeEUsMENBQW1EOzs7OztJQUVuRCwwQ0FBdUU7O0lBQ3ZFLHlDQUFpRDs7Ozs7SUFFckMsa0NBQXlCOzs7OztJQUFFLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7XHJcbiAgQXBpLCBDb25maWdTZXJ2aWNlLCBGaWxlQ3JlZGVudGlhbHMsIFNhdmVGaWxlLCBGaWxlTW9kZWwsIEZpbGVVdGlsXHJcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge09ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2ZXJ9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IENvbnZlcnNpb25JdGVtTW9kZWwsIENvbnZlcnNpb25SZXF1ZXN0TW9kZWwgfSBmcm9tICcuL21vZGVscyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29udmVyc2lvblNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX3NlbGVjdGVkSXRlbXM6IEJlaGF2aW9yU3ViamVjdDxDb252ZXJzaW9uSXRlbU1vZGVsW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChuZXcgQXJyYXk8Q29udmVyc2lvbkl0ZW1Nb2RlbD4oKSk7XHJcbiAgcHJpdmF0ZSBfc2VsZWN0SXRlbXM6IE9ic2VydmFibGU8Q29udmVyc2lvbkl0ZW1Nb2RlbFtdPiA9IHRoaXMuX3NlbGVjdGVkSXRlbXMuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRGb3JtYXQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xyXG4gIHByaXZhdGUgX3NlbGVjdEZvcm1hdDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5fc2VsZWN0ZWRGb3JtYXQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHByaXZhdGUgX2l0ZW1Ub0NvbnZlcnQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENvbnZlcnNpb25JdGVtTW9kZWw+KG51bGwpO1xyXG4gIGl0ZW1Ub0NvbnZlcnQgPSB0aGlzLl9pdGVtVG9Db252ZXJ0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBwcml2YXRlIF9pdGVtVG9SZW1vdmUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENvbnZlcnNpb25JdGVtTW9kZWw+KG51bGwpO1xyXG4gIGl0ZW1Ub1JlbW92ZSA9IHRoaXMuX2l0ZW1Ub1JlbW92ZS5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBfY29uZmlnOiBDb25maWdTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWRJdGVtcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RJdGVtcztcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZEZvcm1hdCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RGb3JtYXQ7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RJdGVtcyhmaWxlc1RvQ29udmVydDogQ29udmVyc2lvbkl0ZW1Nb2RlbFtdKSB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zLm5leHQoZmlsZXNUb0NvbnZlcnQpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Rm9ybWF0KHNlbGVjdGVkRm9ybWF0OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkRm9ybWF0Lm5leHQoc2VsZWN0ZWRGb3JtYXQpO1xyXG4gIH1cclxuXHJcbiAgbG9hZEZpbGVzKHBhdGg6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0Q29udmVyc2lvbkFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9GSUxFX1RSRUUsIHsncGF0aCc6IHBhdGh9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcclxuICB9XHJcblxyXG4gIHVwbG9hZChmaWxlOiBGaWxlLCB1cmw6IHN0cmluZywgcmV3cml0ZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3Jld3JpdGUnLCBTdHJpbmcocmV3cml0ZSkpO1xyXG4gICAgaWYgKHVybCkge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cmxcIiwgdXJsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRDb252ZXJzaW9uQXBpRW5kcG9pbnQoKSArIEFwaS5VUExPQURfRE9DVU1FTlRTLCBmb3JtRGF0YSk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0KGZpbGU6IENvbnZlcnNpb25JdGVtTW9kZWwpIHtcclxuICAgIGNvbnN0IHJlcSA9IG5ldyBDb252ZXJzaW9uUmVxdWVzdE1vZGVsKCk7XHJcbiAgICByZXEuYWRkZWQgPSB0cnVlO1xyXG4gICAgcmVxLmRlc3RpbmF0aW9uVHlwZSA9IGZpbGUuZGVzdGluYXRpb25UeXBlO1xyXG4gICAgcmVxLmd1aWQgPSBmaWxlLmd1aWQ7XHJcbiAgICByZXEuc2l6ZSA9IGZpbGUuc2l6ZTtcclxuICAgIHJlcS5kZXN0RG9jdW1lbnRUeXBlID0gRmlsZVV0aWwuZmluZChmaWxlLmRlc3RpbmF0aW9uVHlwZSwgZmFsc2UpLmZvcm1hdDtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldENvbnZlcnNpb25BcGlFbmRwb2ludCgpICsgQXBpLkNPTlZFUlRfRklMRSwgcmVxKTtcclxuICB9XHJcblxyXG4gIGdldERvd25sb2FkVXJsKGd1aWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5nZXRDb252ZXJzaW9uQXBpRW5kcG9pbnQoKSArIEFwaS5ET1dOTE9BRF9ET0NVTUVOVFMgKyAnLz9wYXRoPScgKyBndWlkO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0ZWRJdGVtVG9Db252ZXJ0KGl0ZW06IENvbnZlcnNpb25JdGVtTW9kZWwpIHtcclxuICAgIHRoaXMuX2l0ZW1Ub0NvbnZlcnQubmV4dChpdGVtKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdGVkSXRlbVRvUmVtb3ZlKGl0ZW06IENvbnZlcnNpb25JdGVtTW9kZWwpIHtcclxuICAgIHRoaXMuX2l0ZW1Ub1JlbW92ZS5uZXh0KGl0ZW0pO1xyXG4gIH1cclxufVxyXG4iXX0=