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
export class ParserService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    loadFiles(path) {
        return this._http.post(this._config.getParserApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
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
        return this._http.post(this._config.getParserApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    }
    /**
     * @param {?} sourceFile
     * @return {?}
     */
    loadDocumentDescription(sourceFile) {
        /** @type {?} */
        const subject = new Subject();
        /** @type {?} */
        const observer = {
            next: (/**
             * @param {?} response
             * @return {?}
             */
            (response) => subject.next(response)),
            complete: (/**
             * @return {?}
             */
            () => subject.complete()),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                this.logToServer(err);
                console.error(err);
                subject.error(err);
            })
        };
        this._http.post(this._config.getParserApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, sourceFile, Api.httpOptionsJson)
            .pipe(timeout(25000))
            .subscribe(observer);
        return subject;
    }
    /**
     * @param {?} sourceFile
     * @param {?} password
     * @param {?} template
     * @return {?}
     */
    parseByTemplate(sourceFile, password, template) {
        /** @type {?} */
        const subject = new Subject();
        /** @type {?} */
        const observer = {
            next: (/**
             * @param {?} response
             * @return {?}
             */
            (response) => subject.next(response)),
            complete: (/**
             * @return {?}
             */
            () => subject.complete()),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                this.logToServer(err);
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
    }
    /**
     * @param {?} err
     * @return {?}
     */
    getErrorMessage(err) {
        /** @type {?} */
        let text;
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
    }
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    logToServer(error) {
        /** @type {?} */
        const errorMessage = { error: JSON.stringify(error) };
        /** @type {?} */
        const url = localStorage.getItem("parser.logclienterror");
        if (url) {
            this._http.post(url, errorMessage, Api.httpOptionsJson).subscribe({
                next: (/**
                 * @return {?}
                 */
                () => console.log("Sent to server")),
                error: (/**
                 * @return {?}
                 */
                () => console.log("Can't send to server"))
            });
        }
    }
}
ParserService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ParserService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ ParserService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ParserService_Factory() { return new ParserService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: ParserService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3BhcnNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFFL0QsT0FBTyxFQUFFLEdBQUcsRUFBNkIsYUFBYSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFOUcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFNM0MsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBRXhCLFlBQW9CLEtBQWlCLEVBQVUsT0FBc0I7UUFBakQsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWU7SUFBSSxDQUFDOzs7OztJQUUxRSxTQUFTLENBQUMsSUFBWTtRQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxHQUFHLENBQUMsY0FBYyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN4SCxDQUFDOzs7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQVUsRUFBRSxHQUFXLEVBQUUsT0FBZ0I7O2NBQ3hDLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRTtRQUMvQixRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QixRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLEdBQUcs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SUFBSSxPQUFPLEdBQUcsQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQ3hDLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ2xCO2FBQU0sSUFBSSxPQUFPLEdBQUcsQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQ3hDLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ2xCO2FBQU07WUFDTCxJQUFJLEdBQUcsMkNBQTJDLENBQUE7U0FDbkQ7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxLQUFVOztjQUN0QixZQUFZLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTs7Y0FDL0MsR0FBRyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUM7UUFDekQsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsWUFBWSxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBQ2hFLElBQUk7OztnQkFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7Z0JBQ3pDLEtBQUs7OztnQkFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUE7YUFDakQsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7WUFuR0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVlEsVUFBVTtZQUVzQixhQUFhOzs7Ozs7OztJQVd4Qyw4QkFBeUI7Ozs7O0lBQUUsZ0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5pbXBvcnQgeyBBcGksIEZpbGVDcmVkZW50aWFscywgRmlsZVV0aWwsIENvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBEb2N1bWVudERlc2NyaXB0aW9uLCBQYXJzZUJ5VGVtcGxhdGVSZXNwb25zZSwgU291cmNlRmlsZSwgVGVtcGxhdGUgfSBmcm9tICcuL2FwcC1tb2RlbHMnO1xuaW1wb3J0IHsgdGltZW91dCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQYXJzZXJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIF9jb25maWc6IENvbmZpZ1NlcnZpY2UpIHsgfVxuXG4gIGxvYWRGaWxlcyhwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRQYXJzZXJBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRklMRV9UUkVFLCB7J3BhdGgnOiBwYXRofSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICB1cGxvYWQoZmlsZTogRmlsZSwgdXJsOiBzdHJpbmcsIHJld3JpdGU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdyZXdyaXRlJywgU3RyaW5nKHJld3JpdGUpKTtcbiAgICBpZiAodXJsKSB7XG4gICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXJsXCIsIHVybCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0UGFyc2VyQXBpRW5kcG9pbnQoKSArIEFwaS5VUExPQURfRE9DVU1FTlRTLCBmb3JtRGF0YSk7XG4gIH1cblxuICBsb2FkRG9jdW1lbnREZXNjcmlwdGlvbihzb3VyY2VGaWxlOiBTb3VyY2VGaWxlKTogT2JzZXJ2YWJsZTxEb2N1bWVudERlc2NyaXB0aW9uPiB7XG4gICAgY29uc3Qgc3ViamVjdCA9IG5ldyBTdWJqZWN0PERvY3VtZW50RGVzY3JpcHRpb24+KCk7XG5cbiAgICBjb25zdCBvYnNlcnZlciA9IHtcbiAgICAgIG5leHQ6IChyZXNwb25zZTogRG9jdW1lbnREZXNjcmlwdGlvbikgPT4gc3ViamVjdC5uZXh0KHJlc3BvbnNlKSxcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiBzdWJqZWN0LmNvbXBsZXRlKCksXG4gICAgICBlcnJvcjogKGVycjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMubG9nVG9TZXJ2ZXIoZXJyKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICBzdWJqZWN0LmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuX2h0dHAucG9zdChcbiAgICAgIHRoaXMuX2NvbmZpZy5nZXRQYXJzZXJBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRE9DVU1FTlRfREVTQ1JJUFRJT04sXG4gICAgICBzb3VyY2VGaWxlLFxuICAgICAgQXBpLmh0dHBPcHRpb25zSnNvbilcbiAgICAgIC5waXBlKHRpbWVvdXQoMjUwMDApKVxuICAgICAgLnN1YnNjcmliZShvYnNlcnZlcik7XG5cbiAgICByZXR1cm4gc3ViamVjdDtcbiAgfVxuXG4gIHBhcnNlQnlUZW1wbGF0ZShzb3VyY2VGaWxlOiBTb3VyY2VGaWxlLCBwYXNzd29yZDogc3RyaW5nLCB0ZW1wbGF0ZTogVGVtcGxhdGUpOiBPYnNlcnZhYmxlPFBhcnNlQnlUZW1wbGF0ZVJlc3BvbnNlPiB7XG4gICAgY29uc3Qgc3ViamVjdCA9IG5ldyBTdWJqZWN0PFBhcnNlQnlUZW1wbGF0ZVJlc3BvbnNlPigpO1xuXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSB7XG4gICAgICBuZXh0OiAocmVzcG9uc2U6IFBhcnNlQnlUZW1wbGF0ZVJlc3BvbnNlKSA9PiBzdWJqZWN0Lm5leHQocmVzcG9uc2UpLFxuICAgICAgY29tcGxldGU6ICgpID0+IHN1YmplY3QuY29tcGxldGUoKSxcbiAgICAgIGVycm9yOiAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5sb2dUb1NlcnZlcihlcnIpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHN1YmplY3QuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5faHR0cC5wb3N0KFxuICAgICAgdGhpcy5fY29uZmlnLmdldFBhcnNlckFwaUVuZHBvaW50KCkgKyBBcGkuUEFSU0UsXG4gICAgICB7XG4gICAgICAgIGd1aWQ6IHNvdXJjZUZpbGUuZ3VpZCxcbiAgICAgICAgcGFzc3dvcmQ6IHNvdXJjZUZpbGUucGFzc3dvcmQsXG4gICAgICAgIGZpZWxkczogdGVtcGxhdGUuZmllbGRzXG4gICAgICB9LFxuICAgICAgQXBpLmh0dHBPcHRpb25zSnNvbilcbiAgICAgIC5waXBlKHRpbWVvdXQoMjUwMDApKVxuICAgICAgLnN1YnNjcmliZShvYnNlcnZlcik7XG5cbiAgICByZXR1cm4gc3ViamVjdDtcbiAgfVxuXG4gIGdldEVycm9yTWVzc2FnZShlcnI6IGFueSk6IHN0cmluZyB7XG4gICAgbGV0IHRleHQ6IHN0cmluZztcblxuICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgIHRleHQgPSBcIlRoZSByZXF1ZXN0ZWQgZmlsZSB3YXMgbm90IGZvdW5kLlwiXG4gICAgfSBlbHNlIGlmIChlcnIuZXJyb3IgJiYgdHlwZW9mIGVyci5lcnJvci50aXRsZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdGV4dCA9IGVyci5lcnJvci50aXRsZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlcnIuZXJyb3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRleHQgPSBlcnIuZXJyb3I7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXJyLnRpdGxlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB0ZXh0ID0gZXJyLnRpdGxlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0ID0gXCJUaGUgZXJyb3Igb2NjdXJlZCB3aGlsZSBvcGVuaW5nIHRoZSBmaWxlLlwiXG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBwcml2YXRlIGxvZ1RvU2VydmVyKGVycm9yOiBhbnkpIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfTtcbiAgICBjb25zdCB1cmwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBhcnNlci5sb2djbGllbnRlcnJvclwiKTtcbiAgICBpZiAodXJsKSB7XG4gICAgICB0aGlzLl9odHRwLnBvc3QodXJsLCBlcnJvck1lc3NhZ2UsIEFwaS5odHRwT3B0aW9uc0pzb24pLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6ICgpID0+IGNvbnNvbGUubG9nKFwiU2VudCB0byBzZXJ2ZXJcIiksXG4gICAgICAgIGVycm9yOiAoKSA9PiBjb25zb2xlLmxvZyhcIkNhbid0IHNlbmQgdG8gc2VydmVyXCIpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gY2xhc3MgQXBpIHtcbi8vICAgLy8gVE9ETzogYWRkIGNvbmZpZ3VyYWJsZSBJUFxuLy8gICBwdWJsaWMgc3RhdGljIGFwaUVuZFBvaW50OiBzdHJpbmcgPSB3aW5kb3dbJ0dST1VQRE9DU19QQVJTRVJfQVBJX0JBU0UnXSAhPSBudWxsID8gd2luZG93WydHUk9VUERPQ1NfUEFSU0VSX0FQSV9CQVNFJ10gOiAnaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzMzMvdjEvJztcblxuLy8gICBwdWJsaWMgc3RhdGljIGxvYWREb2N1bWVudERlc2NyaXB0aW9uID0gXCJsb2FkRG9jdW1lbnREZXNjcmlwdGlvblwiO1xuXG4vLyAgIHB1YmxpYyBzdGF0aWMgcGFyc2VCeVRlbXBsYXRlID0gXCJwYXJzZUJ5VGVtcGxhdGVcIjtcblxuLy8gICBwdWJsaWMgc3RhdGljIGhlYWx0aCA9IFwiaGVhbHRoXCI7XG5cblxuLy8gICBwdWJsaWMgc3RhdGljIGh0dHBPcHRpb25zSnNvbiA9IHtcbi8vICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICB9KVxuLy8gICB9O1xuLy8gfVxuIl19