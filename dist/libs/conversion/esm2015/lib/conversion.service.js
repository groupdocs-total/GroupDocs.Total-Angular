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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvY29udmVyc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQ0wsR0FBRyxFQUFFLGFBQWEsRUFDbkIsTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RCxPQUFPLEVBQWEsZUFBZSxFQUFXLE1BQU0sTUFBTSxDQUFDO0FBQzNELE9BQU8sRUFBdUIsc0JBQXNCLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7QUFNdkUsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFZNUIsWUFBb0IsS0FBaUIsRUFBVSxPQUFzQjtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQVg3RCxtQkFBYyxHQUEyQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLEtBQUssRUFBdUIsQ0FBQyxDQUFDO1FBQy9HLGlCQUFZLEdBQXNDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckYsb0JBQWUsR0FBNEIsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLENBQUM7UUFDN0Usa0JBQWEsR0FBdUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV4RSxtQkFBYyxHQUFHLElBQUksZUFBZSxDQUFzQixJQUFJLENBQUMsQ0FBQztRQUN4RSxrQkFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFM0Msa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBc0IsSUFBSSxDQUFDLENBQUM7UUFDdkUsaUJBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFD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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7XG4gIEFwaSwgQ29uZmlnU2VydmljZSwgRmlsZUNyZWRlbnRpYWxzLCBTYXZlRmlsZSwgRmlsZU1vZGVsXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZlcn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IENvbnZlcnNpb25JdGVtTW9kZWwsIENvbnZlcnNpb25SZXF1ZXN0TW9kZWwgfSBmcm9tICcuL21vZGVscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgQ29udmVyc2lvblNlcnZpY2Uge1xuICBwcml2YXRlIF9zZWxlY3RlZEl0ZW1zOiBCZWhhdmlvclN1YmplY3Q8Q29udmVyc2lvbkl0ZW1Nb2RlbFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobmV3IEFycmF5PENvbnZlcnNpb25JdGVtTW9kZWw+KCkpO1xuICBwcml2YXRlIF9zZWxlY3RJdGVtczogT2JzZXJ2YWJsZTxDb252ZXJzaW9uSXRlbU1vZGVsW10+ID0gdGhpcy5fc2VsZWN0ZWRJdGVtcy5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRGb3JtYXQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuICBwcml2YXRlIF9zZWxlY3RGb3JtYXQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuX3NlbGVjdGVkRm9ybWF0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHByaXZhdGUgX2l0ZW1Ub0NvbnZlcnQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENvbnZlcnNpb25JdGVtTW9kZWw+KG51bGwpO1xuICBpdGVtVG9Db252ZXJ0ID0gdGhpcy5faXRlbVRvQ29udmVydC5hc09ic2VydmFibGUoKTtcblxuICBwcml2YXRlIF9pdGVtVG9SZW1vdmUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENvbnZlcnNpb25JdGVtTW9kZWw+KG51bGwpO1xuICBpdGVtVG9SZW1vdmUgPSB0aGlzLl9pdGVtVG9SZW1vdmUuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBfY29uZmlnOiBDb25maWdTZXJ2aWNlKSB7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRJdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0SXRlbXM7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdEZvcm1hdDtcbiAgfVxuXG4gIHNlbGVjdEl0ZW1zKGZpbGVzVG9Db252ZXJ0OiBDb252ZXJzaW9uSXRlbU1vZGVsW10pIHtcbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zLm5leHQoZmlsZXNUb0NvbnZlcnQpO1xuICB9XG5cbiAgc2VsZWN0Rm9ybWF0KHNlbGVjdGVkRm9ybWF0OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWxlY3RlZEZvcm1hdC5uZXh0KHNlbGVjdGVkRm9ybWF0KTtcbiAgfVxuXG4gIGxvYWRGaWxlcyhwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRDb252ZXJzaW9uQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX0ZJTEVfVFJFRSwgeydwYXRoJzogcGF0aH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgdXBsb2FkKGZpbGU6IEZpbGUsIHVybDogc3RyaW5nLCByZXdyaXRlOiBib29sZWFuKSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgncmV3cml0ZScsIFN0cmluZyhyZXdyaXRlKSk7XG4gICAgaWYgKHVybCkge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXJsXCIsIHVybCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0Q29udmVyc2lvbkFwaUVuZHBvaW50KCkgKyBBcGkuVVBMT0FEX0RPQ1VNRU5UUywgZm9ybURhdGEpO1xuICB9XG5cbiAgY29udmVydChmaWxlOiBDb252ZXJzaW9uSXRlbU1vZGVsKSB7XG4gICAgY29uc3QgcmVxID0gbmV3IENvbnZlcnNpb25SZXF1ZXN0TW9kZWwoKTtcbiAgICByZXEuYWRkZWQgPSB0cnVlO1xuICAgIHJlcS5kZXN0aW5hdGlvblR5cGUgPSBmaWxlLmRlc3RpbmF0aW9uVHlwZTtcbiAgICByZXEuZ3VpZCA9IGZpbGUuZ3VpZDtcbiAgICByZXEuc2l6ZSA9IGZpbGUuc2l6ZTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRDb252ZXJzaW9uQXBpRW5kcG9pbnQoKSArIEFwaS5DT05WRVJUX0ZJTEUsIHJlcSk7XG4gIH1cblxuICBnZXREb3dubG9hZFVybChndWlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLmdldENvbnZlcnNpb25BcGlFbmRwb2ludCgpICsgQXBpLkRPV05MT0FEX0RPQ1VNRU5UUyArICcvP3BhdGg9JyArIGd1aWQ7XG4gIH1cblxuICBzZWxlY3RlZEl0ZW1Ub0NvbnZlcnQoaXRlbTogQ29udmVyc2lvbkl0ZW1Nb2RlbCkge1xuICAgIHRoaXMuX2l0ZW1Ub0NvbnZlcnQubmV4dChpdGVtKTtcbiAgfVxuXG4gIHNlbGVjdGVkSXRlbVRvUmVtb3ZlKGl0ZW06IENvbnZlcnNpb25JdGVtTW9kZWwpIHtcbiAgICB0aGlzLl9pdGVtVG9SZW1vdmUubmV4dChpdGVtKTtcbiAgfVxufVxuIl19