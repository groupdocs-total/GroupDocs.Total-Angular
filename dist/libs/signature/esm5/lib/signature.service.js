/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Api, ConfigService, FileUtil, Utils } from "@groupdocs.examples.angular/common-components";
import { map } from "rxjs/operators";
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@groupdocs.examples.angular/common-components";
var SignatureService = /** @class */ (function () {
    function SignatureService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._observer = new Subject();
        this._refreshSignatures = this._observer.asObservable();
    }
    Object.defineProperty(SignatureService.prototype, "getRefreshSignatures", {
        get: /**
         * @return {?}
         */
        function () {
            return this._refreshSignatures;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} path
     * @return {?}
     */
    SignatureService.prototype.loadFiles = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    SignatureService.prototype.loadFile = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
    };
    /**
     * @param {?} file
     * @param {?} url
     * @param {?} rewrite
     * @param {?} signType
     * @return {?}
     */
    SignatureService.prototype.upload = /**
     * @param {?} file
     * @param {?} url
     * @param {?} rewrite
     * @param {?} signType
     * @return {?}
     */
    function (file, url, rewrite, signType) {
        /** @type {?} */
        var formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (signType) {
            formData.append("signatureType", signType);
        }
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    };
    /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    SignatureService.prototype.loadPage = /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    function (credentials, page) {
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'page': page
        }, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    SignatureService.prototype.getDownloadUrl = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._config.getSignatureApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    SignatureService.prototype.loadPrint = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.LOAD_PRINT, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    SignatureService.prototype.loadPrintPdf = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.LOAD_PRINT_PDF, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, Api.httpOptionsJsonResponseTypeBlob);
    };
    /**
     * @param {?} path
     * @param {?} type
     * @return {?}
     */
    SignatureService.prototype.getSignatures = /**
     * @param {?} path
     * @param {?} type
     * @return {?}
     */
    function (path, type) {
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.LOAD_FILE_TREE, {
            'path': path,
            'signatureType': type
        }, Api.httpOptionsJson);
    };
    /**
     * @param {?} guid
     * @param {?} type
     * @return {?}
     */
    SignatureService.prototype.removeSignatures = /**
     * @param {?} guid
     * @param {?} type
     * @return {?}
     */
    function (guid, type) {
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.DELETE_SIGNATURE_FILE, {
            'guid': guid,
            'signatureType': type
        }, Api.httpOptionsJson);
    };
    /**
     * @param {?} data
     * @param {?} rewrite
     * @return {?}
     */
    SignatureService.prototype.uploadSignature = /**
     * @param {?} data
     * @param {?} rewrite
     * @return {?}
     */
    function (data, rewrite) {
        if (data.fileList.length > 1) {
            for (var i = 0; i < data.fileList.length - 1; i++) {
                this.upload(data.fileList.item(i), '', rewrite, data.signType);
            }
        }
        return this.upload(data.fileList.item(data.fileList.length - 1), '', rewrite, data.signType);
    };
    /**
     * @param {?} text
     * @param {?} temp
     * @param {?} type
     * @return {?}
     */
    SignatureService.prototype.getCode = /**
     * @param {?} text
     * @param {?} temp
     * @param {?} type
     * @return {?}
     */
    function (text, temp, type) {
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.SAVE_OPTICAL_CODE, {
            'properties': { 'text': text, 'temp': temp },
            'signatureType': type
        }, Api.httpOptionsJson);
    };
    /**
     * @param {?} sign
     * @return {?}
     */
    SignatureService.prototype.loadSignatureImage = /**
     * @param {?} sign
     * @return {?}
     */
    function (sign) {
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.LOAD_SIGNATURE_IMAGE, {
            'guid': sign.guid,
            'page': sign.pageNumber,
            'signatureType': sign.type,
            'password': ''
        }, Api.httpOptionsJson).pipe(map((/**
         * @param {?} props
         * @return {?}
         */
        function (props) {
            props.guid = sign.guid;
            return props;
        })));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    SignatureService.prototype.saveTextSignature = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var properties = data.props;
        properties.fontColor = Utils.toRgb(properties.fontColor);
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.SAVE_TEXT, {
            'properties': properties
        }, Api.httpOptionsJson).pipe(map((/**
         * @param {?} props
         * @return {?}
         */
        function (props) {
            props.fontColor = Utils.toHex(props.fontColor);
            return props;
        })));
    };
    /**
     * @param {?} img
     * @return {?}
     */
    SignatureService.prototype.saveImage = /**
     * @param {?} img
     * @return {?}
     */
    function (img) {
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.SAVE_IMAGE, {
            'image': img
        }, Api.httpOptionsJson);
    };
    /**
     * @param {?} img
     * @param {?} props
     * @return {?}
     */
    SignatureService.prototype.saveStamp = /**
     * @param {?} img
     * @param {?} props
     * @return {?}
     */
    function (img, props) {
        var e_1, _a;
        try {
            for (var props_1 = tslib_1.__values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
                var properties = props_1_1.value;
                properties.backgroundColor = Utils.toRgb(properties.backgroundColor);
                properties.strokeColor = Utils.toRgb(properties.strokeColor);
                properties.textColor = Utils.toRgb(properties.textColor);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.SAVE_STAMP, {
            'image': img,
            'stampData': props
        }, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @param {?} signatures
     * @return {?}
     */
    SignatureService.prototype.sign = /**
     * @param {?} credentials
     * @param {?} signatures
     * @return {?}
     */
    function (credentials, signatures) {
        /** @type {?} */
        var docType = FileUtil.find(credentials.guid, false).format;
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.SIGN, {
            guid: credentials.guid,
            password: credentials.password ? credentials.password : "",
            signaturesData: signatures,
            documentType: docType
        }, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @param {?} signatures
     * @return {?}
     */
    SignatureService.prototype.downloadSigned = /**
     * @param {?} credentials
     * @param {?} signatures
     * @return {?}
     */
    function (credentials, signatures) {
        /** @type {?} */
        var docType = FileUtil.find(credentials.guid, false).format;
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.DOWNLOAD_SIGNED, {
            guid: credentials.guid,
            password: credentials.password,
            signaturesData: signatures,
            documentType: docType
        }, Api.httpOptionsJsonResponseTypeBlob);
    };
    /**
     * @return {?}
     */
    SignatureService.prototype.refreshSignatures = /**
     * @return {?}
     */
    function () {
        this._observer.next();
    };
    SignatureService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SignatureService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ SignatureService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SignatureService_Factory() { return new SignatureService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: SignatureService, providedIn: "root" });
    return SignatureService;
}());
export { SignatureService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SignatureService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    SignatureService.prototype._refreshSignatures;
    /**
     * @type {?}
     * @private
     */
    SignatureService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    SignatureService.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL3NpZ25hdHVyZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsVUFBVSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFDLEdBQUcsRUFBRSxhQUFhLEVBQW1CLFFBQVEsRUFBRSxLQUFLLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUVuSCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkMsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQzs7OztBQUUzQztJQU9FLDBCQUFvQixLQUFpQixFQUFVLE9BQXNCO1FBQWpELFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBSDdELGNBQVMsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMvQix1QkFBa0IsR0FBb0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUdyRixDQUFDO0lBRUQsc0JBQUksa0RBQW9COzs7O1FBQXhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsb0NBQVM7Ozs7SUFBVCxVQUFVLElBQVk7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0gsQ0FBQzs7Ozs7SUFFRCxtQ0FBUTs7OztJQUFSLFVB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SUFDM0IscUNBQWdEOzs7OztJQUNoRCw4Q0FBcUY7Ozs7O0lBRXpFLGlDQUF5Qjs7Ozs7SUFBRSxtQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7QXBpLCBDb25maWdTZXJ2aWNlLCBGaWxlQ3JlZGVudGlhbHMsIEZpbGVVdGlsLCBVdGlsc30gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0FkZGVkU2lnbmF0dXJlLCBEcmFnZ2FibGVTaWduYXR1cmUsIEZpbGVMaXN0V2l0aFBhcmFtcywgU2lnbmF0dXJlUHJvcHN9IGZyb20gXCIuL3NpZ25hdHVyZS1tb2RlbHNcIjtcclxuaW1wb3J0IHttYXB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduYXR1cmVTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9vYnNlcnZlcjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9yZWZyZXNoU2lnbmF0dXJlczogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5fb2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX2NvbmZpZzogQ29uZmlnU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgZ2V0IGdldFJlZnJlc2hTaWduYXR1cmVzKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVmcmVzaFNpZ25hdHVyZXM7XHJcbiAgfVxyXG5cclxuICBsb2FkRmlsZXMocGF0aDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRklMRV9UUkVFLCB7J3BhdGgnOiBwYXRofSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XHJcbiAgfVxyXG5cclxuICBsb2FkRmlsZShjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRE9DVU1FTlRfREVTQ1JJUFRJT04sIGNyZWRlbnRpYWxzLCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcclxuICB9XHJcblxyXG4gIHVwbG9hZChmaWxlOiBGaWxlLCB1cmw6IHN0cmluZywgcmV3cml0ZTogYm9vbGVhbiwgc2lnblR5cGU6IHN0cmluZykge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3Jld3JpdGUnLCBTdHJpbmcocmV3cml0ZSkpO1xyXG4gICAgaWYgKHNpZ25UeXBlKSB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInNpZ25hdHVyZVR5cGVcIiwgc2lnblR5cGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHVybCkge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cmxcIiwgdXJsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLlVQTE9BRF9ET0NVTUVOVFMsIGZvcm1EYXRhKTtcclxuICB9XHJcblxyXG4gIGxvYWRQYWdlKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMsIHBhZ2U6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX0RPQ1VNRU5UX1BBR0UsIHtcclxuICAgICAgJ2d1aWQnOiBjcmVkZW50aWFscy5ndWlkLFxyXG4gICAgICAncGFzc3dvcmQnOiBjcmVkZW50aWFscy5wYXNzd29yZCxcclxuICAgICAgJ3BhZ2UnOiBwYWdlXHJcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcclxuICB9XHJcblxyXG4gIGdldERvd25sb2FkVXJsKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5ET1dOTE9BRF9ET0NVTUVOVFMgKyAnLz9wYXRoPScgKyBjcmVkZW50aWFscy5ndWlkO1xyXG4gIH1cclxuXHJcbiAgbG9hZFByaW50KGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9QUklOVCwge1xyXG4gICAgICAnZ3VpZCc6IGNyZWRlbnRpYWxzLmd1aWQsXHJcbiAgICAgICdwYXNzd29yZCc6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XHJcbiAgfVxyXG5cclxuICBsb2FkUHJpbnRQZGYoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX1BSSU5UX1BERiwge1xyXG4gICAgICAnZ3VpZCc6IGNyZWRlbnRpYWxzLmd1aWQsXHJcbiAgICAgICdwYXNzd29yZCc6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvblJlc3BvbnNlVHlwZUJsb2IpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2lnbmF0dXJlcyhwYXRoOiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX0ZJTEVfVFJFRSwge1xyXG4gICAgICAncGF0aCc6IHBhdGgsXHJcbiAgICAgICdzaWduYXR1cmVUeXBlJzogdHlwZVxyXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XHJcbiAgfVxyXG5cclxuICByZW1vdmVTaWduYXR1cmVzKGd1aWQ6IHN0cmluZywgdHlwZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLkRFTEVURV9TSUdOQVRVUkVfRklMRSwge1xyXG4gICAgICAnZ3VpZCc6IGd1aWQsXHJcbiAgICAgICdzaWduYXR1cmVUeXBlJzogdHlwZVxyXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XHJcbiAgfVxyXG5cclxuICB1cGxvYWRTaWduYXR1cmUoZGF0YTogRmlsZUxpc3RXaXRoUGFyYW1zLCByZXdyaXRlOiBib29sZWFuKSB7XHJcbiAgICBpZiAoZGF0YS5maWxlTGlzdC5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5maWxlTGlzdC5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICB0aGlzLnVwbG9hZChkYXRhLmZpbGVMaXN0Lml0ZW0oaSksICcnLCByZXdyaXRlLCBkYXRhLnNpZ25UeXBlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudXBsb2FkKGRhdGEuZmlsZUxpc3QuaXRlbShkYXRhLmZpbGVMaXN0Lmxlbmd0aCAtIDEpLCAnJywgcmV3cml0ZSwgZGF0YS5zaWduVHlwZSk7XHJcbiAgfVxyXG5cclxuICBnZXRDb2RlKHRleHQ6IHN0cmluZywgdGVtcDogYm9vbGVhbiwgdHlwZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLlNBVkVfT1BUSUNBTF9DT0RFLCB7XHJcbiAgICAgICdwcm9wZXJ0aWVzJzogeyd0ZXh0JzogdGV4dCwgJ3RlbXAnOiB0ZW1wfSxcclxuICAgICAgJ3NpZ25hdHVyZVR5cGUnOiB0eXBlXHJcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcclxuICB9XHJcblxyXG4gIGxvYWRTaWduYXR1cmVJbWFnZShzaWduOiBEcmFnZ2FibGVTaWduYXR1cmUpIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9TSUdOQVRVUkVfSU1BR0UsIHtcclxuICAgICAgJ2d1aWQnOiBzaWduLmd1aWQsXHJcbiAgICAgICdwYWdlJzogc2lnbi5wYWdlTnVtYmVyLFxyXG4gICAgICAnc2lnbmF0dXJlVHlwZSc6IHNpZ24udHlwZSxcclxuICAgICAgJ3Bhc3N3b3JkJzogJydcclxuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pLnBpcGUoXHJcbiAgICAgIG1hcCgocHJvcHM6IEFkZGVkU2lnbmF0dXJlKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuZ3VpZCA9IHNpZ24uZ3VpZDtcclxuICAgICAgICByZXR1cm4gcHJvcHM7XHJcbiAgICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHNhdmVUZXh0U2lnbmF0dXJlKGRhdGE6IEFkZGVkU2lnbmF0dXJlKSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gZGF0YS5wcm9wcztcclxuICAgIHByb3BlcnRpZXMuZm9udENvbG9yID0gVXRpbHMudG9SZ2IocHJvcGVydGllcy5mb250Q29sb3IpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5TQVZFX1RFWFQsIHtcclxuICAgICAgJ3Byb3BlcnRpZXMnOiBwcm9wZXJ0aWVzXHJcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKS5waXBlKFxyXG4gICAgICBtYXAoKHByb3BzOiBTaWduYXR1cmVQcm9wcykgPT4ge1xyXG4gICAgICAgIHByb3BzLmZvbnRDb2xvciA9IFV0aWxzLnRvSGV4KHByb3BzLmZvbnRDb2xvcik7XHJcbiAgICAgICAgcmV0dXJuIHByb3BzO1xyXG4gICAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBzYXZlSW1hZ2UoaW1nOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuU0FWRV9JTUFHRSwge1xyXG4gICAgICAnaW1hZ2UnOiBpbWdcclxuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVN0YW1wKGltZzogc3RyaW5nLCBwcm9wczogYW55W10pIHtcclxuICAgIGZvciAoY29uc3QgcHJvcGVydGllcyBvZiBwcm9wcykge1xyXG4gICAgICBwcm9wZXJ0aWVzLmJhY2tncm91bmRDb2xvciA9IFV0aWxzLnRvUmdiKHByb3BlcnRpZXMuYmFja2dyb3VuZENvbG9yKTtcclxuICAgICAgcHJvcGVydGllcy5zdHJva2VDb2xvciA9IFV0aWxzLnRvUmdiKHByb3BlcnRpZXMuc3Ryb2tlQ29sb3IpO1xyXG4gICAgICBwcm9wZXJ0aWVzLnRleHRDb2xvciA9IFV0aWxzLnRvUmdiKHByb3BlcnRpZXMudGV4dENvbG9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuU0FWRV9TVEFNUCwge1xyXG4gICAgICAnaW1hZ2UnOiBpbWcsXHJcbiAgICAgICdzdGFtcERhdGEnOiBwcm9wc1xyXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XHJcbiAgfVxyXG5cclxuICBzaWduKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMsIHNpZ25hdHVyZXM6IGFueVtdKSB7XHJcbiAgICBjb25zdCBkb2NUeXBlID0gRmlsZVV0aWwuZmluZChjcmVkZW50aWFscy5ndWlkLCBmYWxzZSkuZm9ybWF0O1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5TSUdOLCB7XHJcbiAgICAgIGd1aWQ6IGNyZWRlbnRpYWxzLmd1aWQsXHJcbiAgICAgIHBhc3N3b3JkOiBjcmVkZW50aWFscy5wYXNzd29yZCA/IGNyZWRlbnRpYWxzLnBhc3N3b3JkIDogXCJcIixcclxuICAgICAgc2lnbmF0dXJlc0RhdGE6IHNpZ25hdHVyZXMsXHJcbiAgICAgIGRvY3VtZW50VHlwZTogZG9jVHlwZVxyXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XHJcbiAgfVxyXG5cclxuICBkb3dubG9hZFNpZ25lZChjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzLCBzaWduYXR1cmVzOiBhbnlbXSkge1xyXG4gICAgY29uc3QgZG9jVHlwZSA9IEZpbGVVdGlsLmZpbmQoY3JlZGVudGlhbHMuZ3VpZCwgZmFsc2UpLmZvcm1hdDtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuRE9XTkxPQURfU0lHTkVELCB7XHJcbiAgICAgIGd1aWQ6IGNyZWRlbnRpYWxzLmd1aWQsXHJcbiAgICAgIHBhc3N3b3JkOiBjcmVkZW50aWFscy5wYXNzd29yZCxcclxuICAgICAgc2lnbmF0dXJlc0RhdGE6IHNpZ25hdHVyZXMsXHJcbiAgICAgIGRvY3VtZW50VHlwZTogZG9jVHlwZVxyXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvblJlc3BvbnNlVHlwZUJsb2IpO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaFNpZ25hdHVyZXMoKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==