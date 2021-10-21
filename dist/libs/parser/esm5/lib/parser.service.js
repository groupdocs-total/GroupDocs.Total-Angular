/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Api, ConfigService } from "@groupdocs.examples.angular/common-components";
import { timeout } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@groupdocs.examples.angular/common-components";
var ParserService = /** @class */ (function () {
    function ParserService(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    ParserService.prototype.loadFiles = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this._http.post(this._config.getParserApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
    };
    /**
     * @param {?} file
     * @param {?} url
     * @param {?} rewrite
     * @return {?}
     */
    ParserService.prototype.upload = /**
     * @param {?} file
     * @param {?} url
     * @param {?} rewrite
     * @return {?}
     */
    function (file, url, rewrite) {
        /** @type {?} */
        var formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getParserApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    };
    /**
     * @param {?} sourceFile
     * @return {?}
     */
    ParserService.prototype.loadDocumentDescription = /**
     * @param {?} sourceFile
     * @return {?}
     */
    function (sourceFile) {
        var _this = this;
        /** @type {?} */
        var subject = new Subject();
        /** @type {?} */
        var observer = {
            next: (/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return subject.next(response); }),
            complete: (/**
             * @return {?}
             */
            function () { return subject.complete(); }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                _this.logToServer(err);
                console.error(err);
                subject.error(err);
            })
        };
        this._http.post(this._config.getParserApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, sourceFile, Api.httpOptionsJson)
            .pipe(timeout(25000))
            .subscribe(observer);
        return subject;
    };
    /**
     * @param {?} sourceFile
     * @param {?} password
     * @param {?} template
     * @return {?}
     */
    ParserService.prototype.parseByTemplate = /**
     * @param {?} sourceFile
     * @param {?} password
     * @param {?} template
     * @return {?}
     */
    function (sourceFile, password, template) {
        var _this = this;
        /** @type {?} */
        var subject = new Subject();
        /** @type {?} */
        var observer = {
            next: (/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return subject.next(response); }),
            complete: (/**
             * @return {?}
             */
            function () { return subject.complete(); }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                _this.logToServer(err);
                console.error(err);
                subject.error(err);
            })
        };
        this._http.post(this._config.getParserApiEndpoint() + Api.PARSE, {
            guid: sourceFile.guid,
            password: sourceFile.password,
            fields: template.fields
        }, Api.httpOptionsJson)
            .pipe(timeout(25000))
            .subscribe(observer);
        return subject;
    };
    /**
     * @param {?} err
     * @return {?}
     */
    ParserService.prototype.getErrorMessage = /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        /** @type {?} */
        var text;
        if (err.status === 404) {
            text = "The requested file was not found.";
        }
        else if (err.error && typeof err.error.title === "string") {
            text = err.error.title;
        }
        else if (typeof err.error === "string") {
            text = err.error;
        }
        else if (typeof err.title === "string") {
            text = err.title;
        }
        else {
            text = "The error occured while opening the file.";
        }
        return text;
    };
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    ParserService.prototype.logToServer = /**
     * @private
     * @param {?} error
     * @return {?}
     */
    function (error) {
        /** @type {?} */
        var errorMessage = { error: JSON.stringify(error) };
        /** @type {?} */
        var url = localStorage.getItem("parser.logclienterror");
        if (url) {
            this._http.post(url, errorMessage, Api.httpOptionsJson).subscribe({
                next: (/**
                 * @return {?}
                 */
                function () { return console.log("Sent to server"); }),
                error: (/**
                 * @return {?}
                 */
                function () { return console.log("Can't send to server"); })
            });
        }
    };
    ParserService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ParserService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ ParserService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ParserService_Factory() { return new ParserService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: ParserService, providedIn: "root" });
    return ParserService;
}());
export { ParserService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ParserService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ParserService.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3BhcnNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFFL0QsT0FBTyxFQUFFLEdBQUcsRUFBNkIsYUFBYSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFOUcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFHM0M7SUFLRSx1QkFBb0IsS0FBaUIsRUFBVSxPQUFzQjtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtJQUFJLENBQUM7Ozs7O0lBRTFFLGlDQUFTOzs7O0lBQVQsVUFBVSxJQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3hILENBQUM7Ozs7Ozs7SUFFRCw4QkFBTTs7Ozs7O0lBQU4sVUFBTyxJQUFVLEVBQUUsR0FBVyxFQUFFLE9BQWdCOztZQUN4QyxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUU7UUFDL0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxHQUFH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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBBcGksIEZpbGVDcmVkZW50aWFscywgRmlsZVV0aWwsIENvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IERvY3VtZW50RGVzY3JpcHRpb24sIFBhcnNlQnlUZW1wbGF0ZVJlc3BvbnNlLCBTb3VyY2VGaWxlLCBUZW1wbGF0ZSB9IGZyb20gJy4vYXBwLW1vZGVscyc7XHJcbmltcG9ydCB7IHRpbWVvdXQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXJzZXJTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBfY29uZmlnOiBDb25maWdTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbG9hZEZpbGVzKHBhdGg6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0UGFyc2VyQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX0ZJTEVfVFJFRSwgeydwYXRoJzogcGF0aH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkKGZpbGU6IEZpbGUsIHVybDogc3RyaW5nLCByZXdyaXRlOiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgncmV3cml0ZScsIFN0cmluZyhyZXdyaXRlKSk7XHJcbiAgICBpZiAodXJsKSB7XHJcbiAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cmxcIiwgdXJsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRQYXJzZXJBcGlFbmRwb2ludCgpICsgQXBpLlVQTE9BRF9ET0NVTUVOVFMsIGZvcm1EYXRhKTtcclxuICB9XHJcblxyXG4gIGxvYWREb2N1bWVudERlc2NyaXB0aW9uKHNvdXJjZUZpbGU6IFNvdXJjZUZpbGUpOiBPYnNlcnZhYmxlPERvY3VtZW50RGVzY3JpcHRpb24+IHtcclxuICAgIGNvbnN0IHN1YmplY3QgPSBuZXcgU3ViamVjdDxEb2N1bWVudERlc2NyaXB0aW9uPigpO1xyXG5cclxuICAgIGNvbnN0IG9ic2VydmVyID0ge1xyXG4gICAgICBuZXh0OiAocmVzcG9uc2U6IERvY3VtZW50RGVzY3JpcHRpb24pID0+IHN1YmplY3QubmV4dChyZXNwb25zZSksXHJcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiBzdWJqZWN0LmNvbXBsZXRlKCksXHJcbiAgICAgIGVycm9yOiAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmxvZ1RvU2VydmVyKGVycik7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHN1YmplY3QuZXJyb3IoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLl9odHRwLnBvc3QoXHJcbiAgICAgIHRoaXMuX2NvbmZpZy5nZXRQYXJzZXJBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRE9DVU1FTlRfREVTQ1JJUFRJT04sXHJcbiAgICAgIHNvdXJjZUZpbGUsXHJcbiAgICAgIEFwaS5odHRwT3B0aW9uc0pzb24pXHJcbiAgICAgIC5waXBlKHRpbWVvdXQoMjUwMDApKVxyXG4gICAgICAuc3Vic2NyaWJlKG9ic2VydmVyKTtcclxuXHJcbiAgICByZXR1cm4gc3ViamVjdDtcclxuICB9XHJcblxyXG4gIHBhcnNlQnlUZW1wbGF0ZShzb3VyY2VGaWxlOiBTb3VyY2VGaWxlLCBwYXNzd29yZDogc3RyaW5nLCB0ZW1wbGF0ZTogVGVtcGxhdGUpOiBPYnNlcnZhYmxlPFBhcnNlQnlUZW1wbGF0ZVJlc3BvbnNlPiB7XHJcbiAgICBjb25zdCBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8UGFyc2VCeVRlbXBsYXRlUmVzcG9uc2U+KCk7XHJcblxyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSB7XHJcbiAgICAgIG5leHQ6IChyZXNwb25zZTogUGFyc2VCeVRlbXBsYXRlUmVzcG9uc2UpID0+IHN1YmplY3QubmV4dChyZXNwb25zZSksXHJcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiBzdWJqZWN0LmNvbXBsZXRlKCksXHJcbiAgICAgIGVycm9yOiAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmxvZ1RvU2VydmVyKGVycik7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHN1YmplY3QuZXJyb3IoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLl9odHRwLnBvc3QoXHJcbiAgICAgIHRoaXMuX2NvbmZpZy5nZXRQYXJzZXJBcGlFbmRwb2ludCgpICsgQXBpLlBBUlNFLFxyXG4gICAgICB7XHJcbiAgICAgICAgZ3VpZDogc291cmNlRmlsZS5ndWlkLFxyXG4gICAgICAgIHBhc3N3b3JkOiBzb3VyY2VGaWxlLnBhc3N3b3JkLFxyXG4gICAgICAgIGZpZWxkczogdGVtcGxhdGUuZmllbGRzXHJcbiAgICAgIH0sXHJcbiAgICAgIEFwaS5odHRwT3B0aW9uc0pzb24pXHJcbiAgICAgIC5waXBlKHRpbWVvdXQoMjUwMDApKVxyXG4gICAgICAuc3Vic2NyaWJlKG9ic2VydmVyKTtcclxuXHJcbiAgICByZXR1cm4gc3ViamVjdDtcclxuICB9XHJcblxyXG4gIGdldEVycm9yTWVzc2FnZShlcnI6IGFueSk6IHN0cmluZyB7XHJcbiAgICBsZXQgdGV4dDogc3RyaW5nO1xyXG5cclxuICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDQpIHtcclxuICAgICAgdGV4dCA9IFwiVGhlIHJlcXVlc3RlZCBmaWxlIHdhcyBub3QgZm91bmQuXCJcclxuICAgIH0gZWxzZSBpZiAoZXJyLmVycm9yICYmIHR5cGVvZiBlcnIuZXJyb3IudGl0bGUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgdGV4dCA9IGVyci5lcnJvci50aXRsZTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVyci5lcnJvciA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICB0ZXh0ID0gZXJyLmVycm9yO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXJyLnRpdGxlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIHRleHQgPSBlcnIudGl0bGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ZXh0ID0gXCJUaGUgZXJyb3Igb2NjdXJlZCB3aGlsZSBvcGVuaW5nIHRoZSBmaWxlLlwiXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvZ1RvU2VydmVyKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9O1xyXG4gICAgY29uc3QgdXJsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXJzZXIubG9nY2xpZW50ZXJyb3JcIik7XHJcbiAgICBpZiAodXJsKSB7XHJcbiAgICAgIHRoaXMuX2h0dHAucG9zdCh1cmwsIGVycm9yTWVzc2FnZSwgQXBpLmh0dHBPcHRpb25zSnNvbikuc3Vic2NyaWJlKHtcclxuICAgICAgICBuZXh0OiAoKSA9PiBjb25zb2xlLmxvZyhcIlNlbnQgdG8gc2VydmVyXCIpLFxyXG4gICAgICAgIGVycm9yOiAoKSA9PiBjb25zb2xlLmxvZyhcIkNhbid0IHNlbmQgdG8gc2VydmVyXCIpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gY2xhc3MgQXBpIHtcclxuLy8gICAvLyBUT0RPOiBhZGQgY29uZmlndXJhYmxlIElQXHJcbi8vICAgcHVibGljIHN0YXRpYyBhcGlFbmRQb2ludDogc3RyaW5nID0gd2luZG93WydHUk9VUERPQ1NfUEFSU0VSX0FQSV9CQVNFJ10gIT0gbnVsbCA/IHdpbmRvd1snR1JPVVBET0NTX1BBUlNFUl9BUElfQkFTRSddIDogJ2h0dHBzOi8vbG9jYWxob3N0OjQ0MzMzL3YxLyc7XHJcblxyXG4vLyAgIHB1YmxpYyBzdGF0aWMgbG9hZERvY3VtZW50RGVzY3JpcHRpb24gPSBcImxvYWREb2N1bWVudERlc2NyaXB0aW9uXCI7XHJcblxyXG4vLyAgIHB1YmxpYyBzdGF0aWMgcGFyc2VCeVRlbXBsYXRlID0gXCJwYXJzZUJ5VGVtcGxhdGVcIjtcclxuXHJcbi8vICAgcHVibGljIHN0YXRpYyBoZWFsdGggPSBcImhlYWx0aFwiO1xyXG5cclxuXHJcbi8vICAgcHVibGljIHN0YXRpYyBodHRwT3B0aW9uc0pzb24gPSB7XHJcbi8vICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4vLyAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4vLyAgICAgfSlcclxuLy8gICB9O1xyXG4vLyB9XHJcbiJdfQ==