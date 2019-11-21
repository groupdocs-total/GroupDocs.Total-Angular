/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Api, ConfigService, FileUtil } from "@groupdocs.examples.angular/common-components";
import { map } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@groupdocs.examples.angular/common-components";
var SignatureService = /** @class */ (function () {
    function SignatureService(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
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
        var _this = this;
        /** @type {?} */
        var properties = data.props;
        properties.fontColor = this.toRgb(properties.fontColor);
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.SAVE_TEXT, {
            'properties': properties
        }, Api.httpOptionsJson).pipe(map((/**
         * @param {?} props
         * @return {?}
         */
        function (props) {
            props.fontColor = _this.toHex(props.fontColor);
            return props;
        })));
    };
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    SignatureService.prototype.toRgb = /**
     * @private
     * @param {?} color
     * @return {?}
     */
    function (color) {
        /** @type {?} */
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
        if (result) {
            /** @type {?} */
            var r = parseInt(result[1], 16);
            /** @type {?} */
            var g = parseInt(result[2], 16);
            /** @type {?} */
            var b = parseInt(result[3], 16);
            return result ? 'rgb(' + r + ',' + g + ',' + b + ')' : '';
        }
        return color;
    };
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    SignatureService.prototype.toHex = /**
     * @private
     * @param {?} color
     * @return {?}
     */
    function (color) {
        // check if color is standard hex value
        if (color.match(/[0-9A-F]{6}|[0-9A-F]{3}$/i)) {
            return (color.charAt(0) === "#") ? color : ("#" + color);
            // check if color is RGB value -> convert to hex
        }
        else if (color.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/)) {
            /** @type {?} */
            var c = ([parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10), parseInt(RegExp.$3, 10)]);
            /** @type {?} */
            var pad = (/**
             * @param {?} str
             * @return {?}
             */
            function (str) {
                if (str.length < 2) {
                    for (var i = 0, len = 2 - str.length; i < len; i++) {
                        str = '0' + str;
                    }
                }
                return str;
            });
            if (c.length === 3) {
                /** @type {?} */
                var r = pad(c[0].toString(16));
                /** @type {?} */
                var g = pad(c[1].toString(16));
                /** @type {?} */
                var b = pad(c[2].toString(16));
                return '#' + r + g + b;
            }
            // else do nothing
        }
        else {
            return '';
        }
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
                properties.backgroundColor = this.toRgb(properties.backgroundColor);
                properties.strokeColor = this.toRgb(properties.strokeColor);
                properties.textColor = this.toRgb(properties.textColor);
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
    SignatureService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    SignatureService.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL3NpZ25hdHVyZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsVUFBVSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFDLEdBQUcsRUFBRSxhQUFhLEVBQW1CLFFBQVEsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRTVHLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUVuQztJQUtFLDBCQUFvQixLQUFpQixFQUFVLE9BQXNCO1FBQWpELFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFlO0lBQ3JFLENBQUM7Ozs7O0lBRUQsb0NBQVM7Ozs7SUFBVCxVQUFVLElBQVk7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0gsQ0FBQzs7Ozs7SUFFRCxtQ0FBUTs7OztJQUFSLFVBQVMsV0FBNEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsR0FBRyxDQUFDLHlCQUF5QixFQUFFLFdBQVcsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbkksQ0FBQzs7Ozs7Ozs7SUFFRCxpQ0FBTTs7Ozs7OztJQUFOLFVBQU8sSUFBVSxFQUFFLEdBQVcsRUFBRSxPQUFnQixFQUFF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SyxDQUFDLENBQUMsTUFBTTtRQUM3RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxHQUFHLENBQUMsZUFBZSxFQUFFO1lBQ25GLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSTtZQUN0QixRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVE7WUFDOUIsY0FBYyxFQUFFLFVBQVU7WUFDMUIsWUFBWSxFQUFFLE9BQU87U0FDdEIsRUFBRSxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUMxQyxDQUFDOztnQkF6TEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFQTyxVQUFVO2dCQUNMLGFBQWE7OzsyQkFGMUI7Q0FnTUMsQUExTEQsSUEwTEM7U0F2TFksZ0JBQWdCOzs7Ozs7SUFFZixpQ0FBeUI7Ozs7O0lBQUUsbUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cFJlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7QXBpLCBDb25maWdTZXJ2aWNlLCBGaWxlQ3JlZGVudGlhbHMsIEZpbGVVdGlsfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge0FkZGVkU2lnbmF0dXJlLCBEcmFnZ2FibGVTaWduYXR1cmUsIEZpbGVMaXN0V2l0aFBhcmFtcywgU2lnbmF0dXJlUHJvcHN9IGZyb20gXCIuL3NpZ25hdHVyZS1tb2RlbHNcIjtcbmltcG9ydCB7bWFwfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBfY29uZmlnOiBDb25maWdTZXJ2aWNlKSB7XG4gIH1cblxuICBsb2FkRmlsZXMocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX0ZJTEVfVFJFRSwgeydwYXRoJzogcGF0aH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgbG9hZEZpbGUoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscykge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9ET0NVTUVOVF9ERVNDUklQVElPTiwgY3JlZGVudGlhbHMsIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgdXBsb2FkKGZpbGU6IEZpbGUsIHVybDogc3RyaW5nLCByZXdyaXRlOiBib29sZWFuLCBzaWduVHlwZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgncmV3cml0ZScsIFN0cmluZyhyZXdyaXRlKSk7XG4gICAgaWYgKHNpZ25UeXBlKSB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJzaWduYXR1cmVUeXBlXCIsIHNpZ25UeXBlKTtcbiAgICB9XG4gICAgaWYgKHVybCkge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXJsXCIsIHVybCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5VUExPQURfRE9DVU1FTlRTLCBmb3JtRGF0YSk7XG4gIH1cblxuICBsb2FkUGFnZShjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzLCBwYWdlOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRE9DVU1FTlRfUEFHRSwge1xuICAgICAgJ2d1aWQnOiBjcmVkZW50aWFscy5ndWlkLFxuICAgICAgJ3Bhc3N3b3JkJzogY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAncGFnZSc6IHBhZ2VcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIGdldERvd25sb2FkVXJsKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuRE9XTkxPQURfRE9DVU1FTlRTICsgJy8/cGF0aD0nICsgY3JlZGVudGlhbHMuZ3VpZDtcbiAgfVxuXG4gIGxvYWRQcmludChjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX1BSSU5ULCB7XG4gICAgICAnZ3VpZCc6IGNyZWRlbnRpYWxzLmd1aWQsXG4gICAgICAncGFzc3dvcmQnOiBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIGxvYWRQcmludFBkZihjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX1BSSU5UX1BERiwge1xuICAgICAgJ2d1aWQnOiBjcmVkZW50aWFscy5ndWlkLFxuICAgICAgJ3Bhc3N3b3JkJzogY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvblJlc3BvbnNlVHlwZUJsb2IpO1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlcyhwYXRoOiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9GSUxFX1RSRUUsIHtcbiAgICAgICdwYXRoJzogcGF0aCxcbiAgICAgICdzaWduYXR1cmVUeXBlJzogdHlwZVxuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgcmVtb3ZlU2lnbmF0dXJlcyhndWlkOiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuREVMRVRFX1NJR05BVFVSRV9GSUxFLCB7XG4gICAgICAnZ3VpZCc6IGd1aWQsXG4gICAgICAnc2lnbmF0dXJlVHlwZSc6IHR5cGVcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIHVwbG9hZFNpZ25hdHVyZShkYXRhOiBGaWxlTGlzdFdpdGhQYXJhbXMsIHJld3JpdGU6IGJvb2xlYW4pIHtcbiAgICBpZiAoZGF0YS5maWxlTGlzdC5sZW5ndGggPiAxKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuZmlsZUxpc3QubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIHRoaXMudXBsb2FkKGRhdGEuZmlsZUxpc3QuaXRlbShpKSwgJycsIHJld3JpdGUsIGRhdGEuc2lnblR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy51cGxvYWQoZGF0YS5maWxlTGlzdC5pdGVtKGRhdGEuZmlsZUxpc3QubGVuZ3RoIC0gMSksICcnLCByZXdyaXRlLCBkYXRhLnNpZ25UeXBlKTtcbiAgfVxuXG4gIGdldENvZGUodGV4dDogc3RyaW5nLCB0ZW1wOiBib29sZWFuLCB0eXBlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLlNBVkVfT1BUSUNBTF9DT0RFLCB7XG4gICAgICAncHJvcGVydGllcyc6IHsndGV4dCc6IHRleHQsICd0ZW1wJzogdGVtcH0sXG4gICAgICAnc2lnbmF0dXJlVHlwZSc6IHR5cGVcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIGxvYWRTaWduYXR1cmVJbWFnZShzaWduOiBEcmFnZ2FibGVTaWduYXR1cmUpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfU0lHTkFUVVJFX0lNQUdFLCB7XG4gICAgICAnZ3VpZCc6IHNpZ24uZ3VpZCxcbiAgICAgICdwYWdlJzogc2lnbi5wYWdlTnVtYmVyLFxuICAgICAgJ3NpZ25hdHVyZVR5cGUnOiBzaWduLnR5cGUsXG4gICAgICAncGFzc3dvcmQnOiAnJ1xuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pLnBpcGUoXG4gICAgICBtYXAoKHByb3BzOiBBZGRlZFNpZ25hdHVyZSkgPT4ge1xuICAgICAgICBwcm9wcy5ndWlkID0gc2lnbi5ndWlkO1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgICB9KSk7XG4gIH1cblxuICBzYXZlVGV4dFNpZ25hdHVyZShkYXRhOiBBZGRlZFNpZ25hdHVyZSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBkYXRhLnByb3BzO1xuICAgIHByb3BlcnRpZXMuZm9udENvbG9yID0gdGhpcy50b1JnYihwcm9wZXJ0aWVzLmZvbnRDb2xvcik7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5TQVZFX1RFWFQsIHtcbiAgICAgICdwcm9wZXJ0aWVzJzogcHJvcGVydGllc1xuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pLnBpcGUoXG4gICAgICBtYXAoKHByb3BzOiBTaWduYXR1cmVQcm9wcykgPT4ge1xuICAgICAgICBwcm9wcy5mb250Q29sb3IgPSB0aGlzLnRvSGV4KHByb3BzLmZvbnRDb2xvcik7XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9SZ2IoY29sb3I6IHN0cmluZykge1xuICAgIGNvbnN0IHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhjb2xvcik7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgY29uc3QgciA9IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpO1xuICAgICAgY29uc3QgZyA9IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpO1xuICAgICAgY29uc3QgYiA9IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpO1xuICAgICAgcmV0dXJuIHJlc3VsdCA/ICdyZ2IoJyArIHIgKyAnLCcgKyBnICsgJywnICsgYiArICcpJyA6ICcnO1xuICAgIH1cbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICBwcml2YXRlIHRvSGV4KGNvbG9yOiBzdHJpbmcpIHtcbiAgICAvLyBjaGVjayBpZiBjb2xvciBpcyBzdGFuZGFyZCBoZXggdmFsdWVcbiAgICBpZiAoY29sb3IubWF0Y2goL1swLTlBLUZdezZ9fFswLTlBLUZdezN9JC9pKSkge1xuICAgICAgcmV0dXJuIChjb2xvci5jaGFyQXQoMCkgPT09IFwiI1wiKSA/IGNvbG9yIDogKFwiI1wiICsgY29sb3IpO1xuICAgICAgLy8gY2hlY2sgaWYgY29sb3IgaXMgUkdCIHZhbHVlIC0+IGNvbnZlcnQgdG8gaGV4XG4gICAgfSBlbHNlIGlmIChjb2xvci5tYXRjaCgvXnJnYlxcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqXFwpJC8pKSB7XG4gICAgICBjb25zdCBjID0gKFtwYXJzZUludChSZWdFeHAuJDEsIDEwKSwgcGFyc2VJbnQoUmVnRXhwLiQyLCAxMCksIHBhcnNlSW50KFJlZ0V4cC4kMywgMTApXSksXG4gICAgICAgIHBhZCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICBpZiAoc3RyLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSAyIC0gc3RyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgIHN0ciA9ICcwJyArIHN0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfTtcbiAgICAgIGlmIChjLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBjb25zdCByID0gcGFkKGNbMF0udG9TdHJpbmcoMTYpKSxcbiAgICAgICAgICBnID0gcGFkKGNbMV0udG9TdHJpbmcoMTYpKSxcbiAgICAgICAgICBiID0gcGFkKGNbMl0udG9TdHJpbmcoMTYpKTtcbiAgICAgICAgcmV0dXJuICcjJyArIHIgKyBnICsgYjtcbiAgICAgIH1cbiAgICAgIC8vIGVsc2UgZG8gbm90aGluZ1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgc2F2ZUltYWdlKGltZzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5TQVZFX0lNQUdFLCB7XG4gICAgICAnaW1hZ2UnOiBpbWdcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIHNhdmVTdGFtcChpbWc6IHN0cmluZywgcHJvcHM6IGFueVtdKSB7XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0aWVzIG9mIHByb3BzKSB7XG4gICAgICBwcm9wZXJ0aWVzLmJhY2tncm91bmRDb2xvciA9IHRoaXMudG9SZ2IocHJvcGVydGllcy5iYWNrZ3JvdW5kQ29sb3IpO1xuICAgICAgcHJvcGVydGllcy5zdHJva2VDb2xvciA9IHRoaXMudG9SZ2IocHJvcGVydGllcy5zdHJva2VDb2xvcik7XG4gICAgICBwcm9wZXJ0aWVzLnRleHRDb2xvciA9IHRoaXMudG9SZ2IocHJvcGVydGllcy50ZXh0Q29sb3IpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLlNBVkVfU1RBTVAsIHtcbiAgICAgICdpbWFnZSc6IGltZyxcbiAgICAgICdzdGFtcERhdGEnOiBwcm9wc1xuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgc2lnbihjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzLCBzaWduYXR1cmVzOiBhbnlbXSkge1xuICAgIGNvbnN0IGRvY1R5cGUgPSBGaWxlVXRpbC5maW5kKGNyZWRlbnRpYWxzLmd1aWQsIGZhbHNlKS5mb3JtYXQ7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5TSUdOLCB7XG4gICAgICBndWlkOiBjcmVkZW50aWFscy5ndWlkLFxuICAgICAgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzLnBhc3N3b3JkID8gY3JlZGVudGlhbHMucGFzc3dvcmQgOiBcIlwiLFxuICAgICAgc2lnbmF0dXJlc0RhdGE6IHNpZ25hdHVyZXMsXG4gICAgICBkb2N1bWVudFR5cGU6IGRvY1R5cGVcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIGRvd25sb2FkU2lnbmVkKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMsIHNpZ25hdHVyZXM6IGFueVtdKSB7XG4gICAgY29uc3QgZG9jVHlwZSA9IEZpbGVVdGlsLmZpbmQoY3JlZGVudGlhbHMuZ3VpZCwgZmFsc2UpLmZvcm1hdDtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLkRPV05MT0FEX1NJR05FRCwge1xuICAgICAgZ3VpZDogY3JlZGVudGlhbHMuZ3VpZCxcbiAgICAgIHBhc3N3b3JkOiBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgIHNpZ25hdHVyZXNEYXRhOiBzaWduYXR1cmVzLFxuICAgICAgZG9jdW1lbnRUeXBlOiBkb2NUeXBlXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvblJlc3BvbnNlVHlwZUJsb2IpO1xuICB9XG59XG4iXX0=