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
            // formData.append("url", url);
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
    // checkApiHealth(): Observable<boolean> {
    //   let subject = new Subject<boolean>();
    //   const observer = {
    //     next: response => subject.next(response == "Healthy"),
    //     complete: () => subject.complete(),
    //     error: () => {
    //       subject.next(false)
    //       subject.complete();
    //     }
    //   };
    //   let url = Api.apiEndPoint.endsWith("v1/")
    //     ? Api.apiEndPoint.substring(0, Api.apiEndPoint.length - "v1/".length)
    //     : Api.apiEndPoint;
    //   this._http.get(url + Api.health, { responseType: 'text' })
    //     .pipe(timeout(25000))
    //     .subscribe(observer);
    //   return subject;
    // }
    // checkApiHealth(): Observable<boolean> {
    //   let subject = new Subject<boolean>();
    //   const observer = {
    //     next: response => subject.next(response == "Healthy"),
    //     complete: () => subject.complete(),
    //     error: () => {
    //       subject.next(false)
    //       subject.complete();
    //     }
    //   };
    //   let url = Api.apiEndPoint.endsWith("v1/")
    //     ? Api.apiEndPoint.substring(0, Api.apiEndPoint.length - "v1/".length)
    //     : Api.apiEndPoint;
    //   this._http.get(url + Api.health, { responseType: 'text' })
    //     .pipe(timeout(25000))
    //     .subscribe(observer);
    //   return subject;
    // }
    /**
     * @param {?} err
     * @return {?}
     */
    ParserService.prototype.getErrorMessage = 
    // checkApiHealth(): Observable<boolean> {
    //   let subject = new Subject<boolean>();
    //   const observer = {
    //     next: response => subject.next(response == "Healthy"),
    //     complete: () => subject.complete(),
    //     error: () => {
    //       subject.next(false)
    //       subject.complete();
    //     }
    //   };
    //   let url = Api.apiEndPoint.endsWith("v1/")
    //     ? Api.apiEndPoint.substring(0, Api.apiEndPoint.length - "v1/".length)
    //     : Api.apiEndPoint;
    //   this._http.get(url + Api.health, { responseType: 'text' })
    //     .pipe(timeout(25000))
    //     .subscribe(observer);
    //   return subject;
    // }
    /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        /** @type {?} */
        var text;
        if (err.status == 404) {
            text = "The requested file was not found.";
        }
        else if (err.error && typeof err.error.title == "string") {
            text = err.error.title;
        }
        else if (typeof err.error == "string") {
            text = err.error;
        }
        else if (typeof err.title == "string") {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3BhcnNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFFL0QsT0FBTyxFQUFFLEdBQUcsRUFBNkIsYUFBYSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFOUcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFHM0M7SUFLRSx1QkFBb0IsS0FBaUIsRUFBVSxPQUFzQjtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtJQUFJLENBQUM7Ozs7O0lBRTFFLGlDQUFTOzs7O0lBQVQsVUFBVSxJQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3hILENBQUM7Ozs7Ozs7SUFFRCw4QkFBTTs7Ozs7O0lBQU4sVUFBTyxJQUFVLEVBQUUsR0FBVyxFQUFFLE9BQWdCOztZQUN4QyxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUU7UUFDL0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxHQUFH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QUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLEVBQW5DLENBQW1DLENBQUE7YUFDakQsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkExSEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFWUSxVQUFVO2dCQUVzQixhQUFhOzs7d0JBSHREO0NBb0lDLEFBM0hELElBMkhDO1NBeEhZLGFBQWE7Ozs7OztJQUVaLDhCQUF5Qjs7Ozs7SUFBRSxnQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IEFwaSwgRmlsZUNyZWRlbnRpYWxzLCBGaWxlVXRpbCwgQ29uZmlnU2VydmljZSB9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnREZXNjcmlwdGlvbiwgUGFyc2VCeVRlbXBsYXRlUmVzcG9uc2UsIFNvdXJjZUZpbGUsIFRlbXBsYXRlIH0gZnJvbSAnLi9hcHAtbW9kZWxzJztcclxuaW1wb3J0IHsgdGltZW91dCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhcnNlclNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIF9jb25maWc6IENvbmZpZ1NlcnZpY2UpIHsgfVxyXG5cclxuICBsb2FkRmlsZXMocGF0aDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRQYXJzZXJBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRklMRV9UUkVFLCB7J3BhdGgnOiBwYXRofSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XHJcbiAgfVxyXG5cclxuICB1cGxvYWQoZmlsZTogRmlsZSwgdXJsOiBzdHJpbmcsIHJld3JpdGU6IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdyZXdyaXRlJywgU3RyaW5nKHJld3JpdGUpKTtcclxuICAgIGlmICh1cmwpIHtcclxuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKFwidXJsXCIsIHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0UGFyc2VyQXBpRW5kcG9pbnQoKSArIEFwaS5VUExPQURfRE9DVU1FTlRTLCBmb3JtRGF0YSk7XHJcbiAgfVxyXG5cclxuICBsb2FkRG9jdW1lbnREZXNjcmlwdGlvbihzb3VyY2VGaWxlOiBTb3VyY2VGaWxlKTogT2JzZXJ2YWJsZTxEb2N1bWVudERlc2NyaXB0aW9uPiB7XHJcbiAgICBsZXQgc3ViamVjdCA9IG5ldyBTdWJqZWN0PERvY3VtZW50RGVzY3JpcHRpb24+KCk7XHJcblxyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSB7XHJcbiAgICAgIG5leHQ6IChyZXNwb25zZTogRG9jdW1lbnREZXNjcmlwdGlvbikgPT4gc3ViamVjdC5uZXh0KHJlc3BvbnNlKSxcclxuICAgICAgY29tcGxldGU6ICgpID0+IHN1YmplY3QuY29tcGxldGUoKSxcclxuICAgICAgZXJyb3I6IChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9nVG9TZXJ2ZXIoZXJyKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgc3ViamVjdC5lcnJvcihlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX2h0dHAucG9zdChcclxuICAgICAgdGhpcy5fY29uZmlnLmdldFBhcnNlckFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9ET0NVTUVOVF9ERVNDUklQVElPTixcclxuICAgICAgc291cmNlRmlsZSxcclxuICAgICAgQXBpLmh0dHBPcHRpb25zSnNvbilcclxuICAgICAgLnBpcGUodGltZW91dCgyNTAwMCkpXHJcbiAgICAgIC5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xyXG5cclxuICAgIHJldHVybiBzdWJqZWN0O1xyXG4gIH1cclxuXHJcbiAgcGFyc2VCeVRlbXBsYXRlKHNvdXJjZUZpbGU6IFNvdXJjZUZpbGUsIHBhc3N3b3JkOiBzdHJpbmcsIHRlbXBsYXRlOiBUZW1wbGF0ZSk6IE9ic2VydmFibGU8UGFyc2VCeVRlbXBsYXRlUmVzcG9uc2U+IHtcclxuICAgIGxldCBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8UGFyc2VCeVRlbXBsYXRlUmVzcG9uc2U+KCk7XHJcblxyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSB7XHJcbiAgICAgIG5leHQ6IChyZXNwb25zZTogUGFyc2VCeVRlbXBsYXRlUmVzcG9uc2UpID0+IHN1YmplY3QubmV4dChyZXNwb25zZSksXHJcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiBzdWJqZWN0LmNvbXBsZXRlKCksXHJcbiAgICAgIGVycm9yOiAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmxvZ1RvU2VydmVyKGVycik7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHN1YmplY3QuZXJyb3IoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLl9odHRwLnBvc3QoXHJcbiAgICAgIHRoaXMuX2NvbmZpZy5nZXRQYXJzZXJBcGlFbmRwb2ludCgpICsgQXBpLlBBUlNFLFxyXG4gICAgICB7XHJcbiAgICAgICAgZ3VpZDogc291cmNlRmlsZS5ndWlkLFxyXG4gICAgICAgIHBhc3N3b3JkOiBzb3VyY2VGaWxlLnBhc3N3b3JkLFxyXG4gICAgICAgIGZpZWxkczogdGVtcGxhdGUuZmllbGRzXHJcbiAgICAgIH0sXHJcbiAgICAgIEFwaS5odHRwT3B0aW9uc0pzb24pXHJcbiAgICAgIC5waXBlKHRpbWVvdXQoMjUwMDApKVxyXG4gICAgICAuc3Vic2NyaWJlKG9ic2VydmVyKTtcclxuXHJcbiAgICByZXR1cm4gc3ViamVjdDtcclxuICB9XHJcblxyXG4gIC8vIGNoZWNrQXBpSGVhbHRoKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gIC8vICAgbGV0IHN1YmplY3QgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG5cclxuICAvLyAgIGNvbnN0IG9ic2VydmVyID0ge1xyXG4gIC8vICAgICBuZXh0OiByZXNwb25zZSA9PiBzdWJqZWN0Lm5leHQocmVzcG9uc2UgPT0gXCJIZWFsdGh5XCIpLFxyXG4gIC8vICAgICBjb21wbGV0ZTogKCkgPT4gc3ViamVjdC5jb21wbGV0ZSgpLFxyXG4gIC8vICAgICBlcnJvcjogKCkgPT4ge1xyXG4gIC8vICAgICAgIHN1YmplY3QubmV4dChmYWxzZSlcclxuICAvLyAgICAgICBzdWJqZWN0LmNvbXBsZXRlKCk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH07XHJcblxyXG4gIC8vICAgbGV0IHVybCA9IEFwaS5hcGlFbmRQb2ludC5lbmRzV2l0aChcInYxL1wiKVxyXG4gIC8vICAgICA/IEFwaS5hcGlFbmRQb2ludC5zdWJzdHJpbmcoMCwgQXBpLmFwaUVuZFBvaW50Lmxlbmd0aCAtIFwidjEvXCIubGVuZ3RoKVxyXG4gIC8vICAgICA6IEFwaS5hcGlFbmRQb2ludDtcclxuXHJcbiAgLy8gICB0aGlzLl9odHRwLmdldCh1cmwgKyBBcGkuaGVhbHRoLCB7IHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pXHJcbiAgLy8gICAgIC5waXBlKHRpbWVvdXQoMjUwMDApKVxyXG4gIC8vICAgICAuc3Vic2NyaWJlKG9ic2VydmVyKTtcclxuXHJcbiAgLy8gICByZXR1cm4gc3ViamVjdDtcclxuICAvLyB9XHJcblxyXG4gIGdldEVycm9yTWVzc2FnZShlcnI6IGFueSk6IHN0cmluZyB7XHJcbiAgICBsZXQgdGV4dDogc3RyaW5nO1xyXG5cclxuICAgIGlmIChlcnIuc3RhdHVzID09IDQwNCkge1xyXG4gICAgICB0ZXh0ID0gXCJUaGUgcmVxdWVzdGVkIGZpbGUgd2FzIG5vdCBmb3VuZC5cIlxyXG4gICAgfSBlbHNlIGlmIChlcnIuZXJyb3IgJiYgdHlwZW9mIGVyci5lcnJvci50aXRsZSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIHRleHQgPSBlcnIuZXJyb3IudGl0bGU7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlcnIuZXJyb3IgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICB0ZXh0ID0gZXJyLmVycm9yO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXJyLnRpdGxlID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgdGV4dCA9IGVyci50aXRsZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRleHQgPSBcIlRoZSBlcnJvciBvY2N1cmVkIHdoaWxlIG9wZW5pbmcgdGhlIGZpbGUuXCJcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9nVG9TZXJ2ZXIoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0geyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH07XHJcbiAgICBjb25zdCB1cmwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBhcnNlci5sb2djbGllbnRlcnJvclwiKTtcclxuICAgIGlmICh1cmwpIHtcclxuICAgICAgdGhpcy5faHR0cC5wb3N0KHVybCwgZXJyb3JNZXNzYWdlLCBBcGkuaHR0cE9wdGlvbnNKc29uKS5zdWJzY3JpYmUoe1xyXG4gICAgICAgIG5leHQ6ICgpID0+IGNvbnNvbGUubG9nKFwiU2VudCB0byBzZXJ2ZXJcIiksXHJcbiAgICAgICAgZXJyb3I6ICgpID0+IGNvbnNvbGUubG9nKFwiQ2FuJ3Qgc2VuZCB0byBzZXJ2ZXJcIilcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBjbGFzcyBBcGkge1xyXG4vLyAgIC8vIFRPRE86IGFkZCBjb25maWd1cmFibGUgSVBcclxuLy8gICBwdWJsaWMgc3RhdGljIGFwaUVuZFBvaW50OiBzdHJpbmcgPSB3aW5kb3dbJ0dST1VQRE9DU19QQVJTRVJfQVBJX0JBU0UnXSAhPSBudWxsID8gd2luZG93WydHUk9VUERPQ1NfUEFSU0VSX0FQSV9CQVNFJ10gOiAnaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzMzMvdjEvJztcclxuXHJcbi8vICAgcHVibGljIHN0YXRpYyBsb2FkRG9jdW1lbnREZXNjcmlwdGlvbiA9IFwibG9hZERvY3VtZW50RGVzY3JpcHRpb25cIjtcclxuXHJcbi8vICAgcHVibGljIHN0YXRpYyBwYXJzZUJ5VGVtcGxhdGUgPSBcInBhcnNlQnlUZW1wbGF0ZVwiO1xyXG5cclxuLy8gICBwdWJsaWMgc3RhdGljIGhlYWx0aCA9IFwiaGVhbHRoXCI7XHJcblxyXG5cclxuLy8gICBwdWJsaWMgc3RhdGljIGh0dHBPcHRpb25zSnNvbiA9IHtcclxuLy8gICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbi8vICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbi8vICAgICB9KVxyXG4vLyAgIH07XHJcbi8vIH1cclxuIl19