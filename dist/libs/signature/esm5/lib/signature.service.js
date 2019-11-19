/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL3NpZ25hdHVyZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQWUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUMsR0FBRyxFQUFFLGFBQWEsRUFBbUIsUUFBUSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFFNUcsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRW5DO0lBS0UsMEJBQW9CLEtBQWlCLEVBQVUsT0FBc0I7UUFBakQsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWU7SUFDckUsQ0FBQzs7Ozs7SUFFRCxvQ0FBUzs7OztJQUFULFVBQVUsSUFBWTtRQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxHQUFHLENBQUMsY0FBYyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMzSCxDQUFDOzs7OztJQUVELG1DQUFROzs7O0lBQVIsVUFBUyxXQUE0QjtRQUNuQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxHQUFHLENBQUMseUJBQXlCLEVBQUUsV0FBVyxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNuSSxDQUFDOzs7Ozs7OztJQUVELGlDQUFNOzs7Ozs7O0lBQU4sVUFBTyxJQUFVLEVBQUUsR0FBVyxFQUFFLE9BQWdCLEVBQUUs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TTtpQkFDbkI7Ozs7Z0JBUE8sVUFBVTtnQkFDTCxhQUFhOzs7MkJBRjFCO0NBMkxDLEFBckxELElBcUxDO1NBbExZLGdCQUFnQjs7Ozs7O0lBRWYsaUNBQXlCOzs7OztJQUFFLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge0FwaSwgQ29uZmlnU2VydmljZSwgRmlsZUNyZWRlbnRpYWxzLCBGaWxlVXRpbH0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtBZGRlZFNpZ25hdHVyZSwgRHJhZ2dhYmxlU2lnbmF0dXJlLCBGaWxlTGlzdFdpdGhQYXJhbXMsIFNpZ25hdHVyZVByb3BzfSBmcm9tIFwiLi9zaWduYXR1cmUtbW9kZWxzXCI7XG5pbXBvcnQge21hcH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX2NvbmZpZzogQ29uZmlnU2VydmljZSkge1xuICB9XG5cbiAgbG9hZEZpbGVzKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9GSUxFX1RSRUUsIHsncGF0aCc6IHBhdGh9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIGxvYWRGaWxlKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRE9DVU1FTlRfREVTQ1JJUFRJT04sIGNyZWRlbnRpYWxzLCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIHVwbG9hZChmaWxlOiBGaWxlLCB1cmw6IHN0cmluZywgcmV3cml0ZTogYm9vbGVhbiwgc2lnblR5cGU6IHN0cmluZykge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3Jld3JpdGUnLCBTdHJpbmcocmV3cml0ZSkpO1xuICAgIGlmIChzaWduVHlwZSkge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwic2lnbmF0dXJlVHlwZVwiLCBzaWduVHlwZSk7XG4gICAgfVxuICAgIGlmICh1cmwpIHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVybFwiLCB1cmwpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuVVBMT0FEX0RPQ1VNRU5UUywgZm9ybURhdGEpO1xuICB9XG5cbiAgbG9hZFBhZ2UoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscywgcGFnZTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX0RPQ1VNRU5UX1BBR0UsIHtcbiAgICAgICdndWlkJzogY3JlZGVudGlhbHMuZ3VpZCxcbiAgICAgICdwYXNzd29yZCc6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgJ3BhZ2UnOiBwYWdlXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICBnZXREb3dubG9hZFVybChjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLkRPV05MT0FEX0RPQ1VNRU5UUyArICcvP3BhdGg9JyArIGNyZWRlbnRpYWxzLmd1aWQ7XG4gIH1cblxuICBsb2FkUHJpbnQoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscykge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9QUklOVCwge1xuICAgICAgJ2d1aWQnOiBjcmVkZW50aWFscy5ndWlkLFxuICAgICAgJ3Bhc3N3b3JkJzogY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICBsb2FkUHJpbnRQZGYoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscykge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9QUklOVF9QREYsIHtcbiAgICAgICdndWlkJzogY3JlZGVudGlhbHMuZ3VpZCxcbiAgICAgICdwYXNzd29yZCc6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb25SZXNwb25zZVR5cGVCbG9iKTtcbiAgfVxuXG4gIGdldFNpZ25hdHVyZXMocGF0aDogc3RyaW5nLCB0eXBlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRklMRV9UUkVFLCB7XG4gICAgICAncGF0aCc6IHBhdGgsXG4gICAgICAnc2lnbmF0dXJlVHlwZSc6IHR5cGVcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIHJlbW92ZVNpZ25hdHVyZXMoZ3VpZDogc3RyaW5nLCB0eXBlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLkRFTEVURV9TSUdOQVRVUkVfRklMRSwge1xuICAgICAgJ2d1aWQnOiBndWlkLFxuICAgICAgJ3NpZ25hdHVyZVR5cGUnOiB0eXBlXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICB1cGxvYWRTaWduYXR1cmUoZGF0YTogRmlsZUxpc3RXaXRoUGFyYW1zLCByZXdyaXRlOiBib29sZWFuKSB7XG4gICAgaWYgKGRhdGEuZmlsZUxpc3QubGVuZ3RoID4gMSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmZpbGVMaXN0Lmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICB0aGlzLnVwbG9hZChkYXRhLmZpbGVMaXN0Lml0ZW0oaSksICcnLCByZXdyaXRlLCBkYXRhLnNpZ25UeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXBsb2FkKGRhdGEuZmlsZUxpc3QuaXRlbShkYXRhLmZpbGVMaXN0Lmxlbmd0aCAtIDEpLCAnJywgcmV3cml0ZSwgZGF0YS5zaWduVHlwZSk7XG4gIH1cblxuICBnZXRDb2RlKHRleHQ6IHN0cmluZywgdGVtcDogYm9vbGVhbiwgdHlwZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5TQVZFX09QVElDQUxfQ09ERSwge1xuICAgICAgJ3Byb3BlcnRpZXMnOiB7J3RleHQnOiB0ZXh0LCAndGVtcCc6IHRlbXB9LFxuICAgICAgJ3NpZ25hdHVyZVR5cGUnOiB0eXBlXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICBsb2FkU2lnbmF0dXJlSW1hZ2Uoc2lnbjogRHJhZ2dhYmxlU2lnbmF0dXJlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX1NJR05BVFVSRV9JTUFHRSwge1xuICAgICAgJ2d1aWQnOiBzaWduLmd1aWQsXG4gICAgICAncGFnZSc6IHNpZ24ucGFnZU51bWJlcixcbiAgICAgICdzaWduYXR1cmVUeXBlJzogc2lnbi50eXBlLFxuICAgICAgJ3Bhc3N3b3JkJzogJydcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKS5waXBlKFxuICAgICAgbWFwKChwcm9wczogQWRkZWRTaWduYXR1cmUpID0+IHtcbiAgICAgICAgcHJvcHMuZ3VpZCA9IHNpZ24uZ3VpZDtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgfSkpO1xuICB9XG5cbiAgc2F2ZVRleHRTaWduYXR1cmUoZGF0YTogQWRkZWRTaWduYXR1cmUpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gZGF0YS5wcm9wcztcbiAgICBwcm9wZXJ0aWVzLmZvbnRDb2xvciA9IHRoaXMudG9SZ2IocHJvcGVydGllcy5mb250Q29sb3IpO1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuU0FWRV9URVhULCB7XG4gICAgICAncHJvcGVydGllcyc6IHByb3BlcnRpZXNcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKS5waXBlKFxuICAgICAgbWFwKChwcm9wczogU2lnbmF0dXJlUHJvcHMpID0+IHtcbiAgICAgICAgcHJvcHMuZm9udENvbG9yID0gdGhpcy50b0hleChwcm9wcy5mb250Q29sb3IpO1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIHRvUmdiKGNvbG9yOiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoY29sb3IpO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGNvbnN0IHIgPSBwYXJzZUludChyZXN1bHRbMV0sIDE2KTtcbiAgICAgIGNvbnN0IGcgPSBwYXJzZUludChyZXN1bHRbMl0sIDE2KTtcbiAgICAgIGNvbnN0IGIgPSBwYXJzZUludChyZXN1bHRbM10sIDE2KTtcbiAgICAgIHJldHVybiByZXN1bHQgPyAncmdiKCcgKyByICsgJywnICsgZyArICcsJyArIGIgKyAnKScgOiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgcHJpdmF0ZSB0b0hleChjb2xvcjogc3RyaW5nKSB7XG4gICAgLy8gY2hlY2sgaWYgY29sb3IgaXMgc3RhbmRhcmQgaGV4IHZhbHVlXG4gICAgaWYgKGNvbG9yLm1hdGNoKC9bMC05QS1GXXs2fXxbMC05QS1GXXszfSQvaSkpIHtcbiAgICAgIHJldHVybiAoY29sb3IuY2hhckF0KDApID09PSBcIiNcIikgPyBjb2xvciA6IChcIiNcIiArIGNvbG9yKTtcbiAgICAgIC8vIGNoZWNrIGlmIGNvbG9yIGlzIFJHQiB2YWx1ZSAtPiBjb252ZXJ0IHRvIGhleFxuICAgIH0gZWxzZSBpZiAoY29sb3IubWF0Y2goL15yZ2JcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKlxcKSQvKSkge1xuICAgICAgY29uc3QgYyA9IChbcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCksIHBhcnNlSW50KFJlZ0V4cC4kMiwgMTApLCBwYXJzZUludChSZWdFeHAuJDMsIDEwKV0pLFxuICAgICAgICBwYWQgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgaWYgKHN0ci5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gMiAtIHN0ci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICBzdHIgPSAnMCcgKyBzdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH07XG4gICAgICBpZiAoYy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgY29uc3QgciA9IHBhZChjWzBdLnRvU3RyaW5nKDE2KSksXG4gICAgICAgICAgZyA9IHBhZChjWzFdLnRvU3RyaW5nKDE2KSksXG4gICAgICAgICAgYiA9IHBhZChjWzJdLnRvU3RyaW5nKDE2KSk7XG4gICAgICAgIHJldHVybiAnIycgKyByICsgZyArIGI7XG4gICAgICB9XG4gICAgICAvLyBlbHNlIGRvIG5vdGhpbmdcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIHNhdmVJbWFnZShpbWc6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuU0FWRV9JTUFHRSwge1xuICAgICAgJ2ltYWdlJzogaW1nXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICBzYXZlU3RhbXAoaW1nOiBzdHJpbmcsIHByb3BzOiBhbnlbXSkge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuU0FWRV9TVEFNUCwge1xuICAgICAgJ2ltYWdlJzogaW1nLFxuICAgICAgJ3N0YW1wRGF0YSc6IHByb3BzXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICBzaWduKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMsIHNpZ25hdHVyZXM6IGFueVtdKSB7XG4gICAgY29uc3QgZG9jVHlwZSA9IEZpbGVVdGlsLmZpbmQoY3JlZGVudGlhbHMuZ3VpZCwgZmFsc2UpLmZvcm1hdDtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLlNJR04sIHtcbiAgICAgIGd1aWQ6IGNyZWRlbnRpYWxzLmd1aWQsXG4gICAgICBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQgPyBjcmVkZW50aWFscy5wYXNzd29yZCA6IFwiXCIsXG4gICAgICBzaWduYXR1cmVzRGF0YTogc2lnbmF0dXJlcyxcbiAgICAgIGRvY3VtZW50VHlwZTogZG9jVHlwZVxuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgZG93bmxvYWRTaWduZWQoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscywgc2lnbmF0dXJlczogYW55W10pIHtcbiAgICBjb25zdCBkb2NUeXBlID0gRmlsZVV0aWwuZmluZChjcmVkZW50aWFscy5ndWlkLCBmYWxzZSkuZm9ybWF0O1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuRE9XTkxPQURfU0lHTkVELCB7XG4gICAgICBndWlkOiBjcmVkZW50aWFscy5ndWlkLFxuICAgICAgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgc2lnbmF0dXJlc0RhdGE6IHNpZ25hdHVyZXMsXG4gICAgICBkb2N1bWVudFR5cGU6IGRvY1R5cGVcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uUmVzcG9uc2VUeXBlQmxvYik7XG4gIH1cbn1cbiJdfQ==