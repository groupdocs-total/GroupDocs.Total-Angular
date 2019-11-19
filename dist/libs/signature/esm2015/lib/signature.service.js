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
export class SignatureService {
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
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadFile(credentials) {
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
    }
    /**
     * @param {?} file
     * @param {?} url
     * @param {?} rewrite
     * @param {?} signType
     * @return {?}
     */
    upload(file, url, rewrite, signType) {
        /** @type {?} */
        const formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (signType) {
            formData.append("signatureType", signType);
        }
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    }
    /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    loadPage(credentials, page) {
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'page': page
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    getDownloadUrl(credentials) {
        return this._config.getSignatureApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadPrint(credentials) {
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.LOAD_PRINT, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadPrintPdf(credentials) {
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.LOAD_PRINT_PDF, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, Api.httpOptionsJsonResponseTypeBlob);
    }
    /**
     * @param {?} path
     * @param {?} type
     * @return {?}
     */
    getSignatures(path, type) {
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.LOAD_FILE_TREE, {
            'path': path,
            'signatureType': type
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} guid
     * @param {?} type
     * @return {?}
     */
    removeSignatures(guid, type) {
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.DELETE_SIGNATURE_FILE, {
            'guid': guid,
            'signatureType': type
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} data
     * @param {?} rewrite
     * @return {?}
     */
    uploadSignature(data, rewrite) {
        if (data.fileList.length > 1) {
            for (let i = 0; i < data.fileList.length - 1; i++) {
                this.upload(data.fileList.item(i), '', rewrite, data.signType);
            }
        }
        return this.upload(data.fileList.item(data.fileList.length - 1), '', rewrite, data.signType);
    }
    /**
     * @param {?} text
     * @param {?} temp
     * @param {?} type
     * @return {?}
     */
    getCode(text, temp, type) {
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.SAVE_OPTICAL_CODE, {
            'properties': { 'text': text, 'temp': temp },
            'signatureType': type
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} sign
     * @return {?}
     */
    loadSignatureImage(sign) {
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.LOAD_SIGNATURE_IMAGE, {
            'guid': sign.guid,
            'page': sign.pageNumber,
            'signatureType': sign.type,
            'password': ''
        }, Api.httpOptionsJson).pipe(map((/**
         * @param {?} props
         * @return {?}
         */
        (props) => {
            props.guid = sign.guid;
            return props;
        })));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    saveTextSignature(data) {
        /** @type {?} */
        const properties = data.props;
        properties.fontColor = this.toRgb(properties.fontColor);
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.SAVE_TEXT, {
            'properties': properties
        }, Api.httpOptionsJson).pipe(map((/**
         * @param {?} props
         * @return {?}
         */
        (props) => {
            props.fontColor = this.toHex(props.fontColor);
            return props;
        })));
    }
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    toRgb(color) {
        /** @type {?} */
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
        if (result) {
            /** @type {?} */
            const r = parseInt(result[1], 16);
            /** @type {?} */
            const g = parseInt(result[2], 16);
            /** @type {?} */
            const b = parseInt(result[3], 16);
            return result ? 'rgb(' + r + ',' + g + ',' + b + ')' : '';
        }
        return color;
    }
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    toHex(color) {
        // check if color is standard hex value
        if (color.match(/[0-9A-F]{6}|[0-9A-F]{3}$/i)) {
            return (color.charAt(0) === "#") ? color : ("#" + color);
            // check if color is RGB value -> convert to hex
        }
        else if (color.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/)) {
            /** @type {?} */
            const c = ([parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10), parseInt(RegExp.$3, 10)]);
            /** @type {?} */
            const pad = (/**
             * @param {?} str
             * @return {?}
             */
            function (str) {
                if (str.length < 2) {
                    for (let i = 0, len = 2 - str.length; i < len; i++) {
                        str = '0' + str;
                    }
                }
                return str;
            });
            if (c.length === 3) {
                /** @type {?} */
                const r = pad(c[0].toString(16));
                /** @type {?} */
                const g = pad(c[1].toString(16));
                /** @type {?} */
                const b = pad(c[2].toString(16));
                return '#' + r + g + b;
            }
            // else do nothing
        }
        else {
            return '';
        }
    }
    /**
     * @param {?} img
     * @return {?}
     */
    saveImage(img) {
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.SAVE_IMAGE, {
            'image': img
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} img
     * @param {?} props
     * @return {?}
     */
    saveStamp(img, props) {
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.SAVE_STAMP, {
            'image': img,
            'stampData': props
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @param {?} signatures
     * @return {?}
     */
    sign(credentials, signatures) {
        /** @type {?} */
        const docType = FileUtil.find(credentials.guid, false).format;
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.SIGN, {
            guid: credentials.guid,
            password: credentials.password ? credentials.password : "",
            signaturesData: signatures,
            documentType: docType
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @param {?} signatures
     * @return {?}
     */
    downloadSigned(credentials, signatures) {
        /** @type {?} */
        const docType = FileUtil.find(credentials.guid, false).format;
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.DOWNLOAD_SIGNED, {
            guid: credentials.guid,
            password: credentials.password,
            signaturesData: signatures,
            documentType: docType
        }, Api.httpOptionsJsonResponseTypeBlob);
    }
}
SignatureService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SignatureService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ SignatureService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SignatureService_Factory() { return new SignatureService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: SignatureService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL3NpZ25hdHVyZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQWUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUMsR0FBRyxFQUFFLGFBQWEsRUFBbUIsUUFBUSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFFNUcsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7O0FBS25DLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBRTNCLFlBQW9CLEtBQWlCLEVBQVUsT0FBc0I7UUFBakQsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWU7SUFDckUsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBWTtRQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxHQUFHLENBQUMsY0FBYyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMzSCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxXQUE0QjtRQUNuQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxHQUFHLENBQUMseUJBQXlCLEVBQUUsV0FBVyxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNuSSxDQUFDOzs7Ozs7OztJQUVELE1BQU0sQ0FBQyxJQUFVLEVBQUUsR0FBVyxFQUFFLE9BQWdCLEVBQUUsUUFBZ0I7O2NB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V0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFNO1FBQzdELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUU7WUFDeEUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJO1lBQ3RCLFFBQVEsRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzFELGNBQWMsRUFBRSxVQUFVO1lBQzFCLFlBQVksRUFBRSxPQUFPO1NBQ3RCLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxXQUE0QixFQUFFLFVBQWlCOztjQUN0RCxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU07UUFDN0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsR0FBRyxDQUFDLGVBQWUsRUFBRTtZQUNuRixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7WUFDdEIsUUFBUSxFQUFFLFdBQVcsQ0FBQyxRQUFRO1lBQzlCLGNBQWMsRUFBRSxVQUFVO1lBQzFCLFlBQVksRUFBRSxPQUFPO1NBQ3RCLEVBQUUsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDMUMsQ0FBQzs7O1lBcExGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBPLFVBQVU7WUFDTCxhQUFhOzs7Ozs7OztJQVNaLGlDQUF5Qjs7Ozs7SUFBRSxtQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2V9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHtBcGksIENvbmZpZ1NlcnZpY2UsIEZpbGVDcmVkZW50aWFscywgRmlsZVV0aWx9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7QWRkZWRTaWduYXR1cmUsIERyYWdnYWJsZVNpZ25hdHVyZSwgRmlsZUxpc3RXaXRoUGFyYW1zLCBTaWduYXR1cmVQcm9wc30gZnJvbSBcIi4vc2lnbmF0dXJlLW1vZGVsc1wiO1xuaW1wb3J0IHttYXB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTaWduYXR1cmVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIF9jb25maWc6IENvbmZpZ1NlcnZpY2UpIHtcbiAgfVxuXG4gIGxvYWRGaWxlcyhwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRklMRV9UUkVFLCB7J3BhdGgnOiBwYXRofSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICBsb2FkRmlsZShjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX0RPQ1VNRU5UX0RFU0NSSVBUSU9OLCBjcmVkZW50aWFscywgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICB1cGxvYWQoZmlsZTogRmlsZSwgdXJsOiBzdHJpbmcsIHJld3JpdGU6IGJvb2xlYW4sIHNpZ25UeXBlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdyZXdyaXRlJywgU3RyaW5nKHJld3JpdGUpKTtcbiAgICBpZiAoc2lnblR5cGUpIHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInNpZ25hdHVyZVR5cGVcIiwgc2lnblR5cGUpO1xuICAgIH1cbiAgICBpZiAodXJsKSB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cmxcIiwgdXJsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLlVQTE9BRF9ET0NVTUVOVFMsIGZvcm1EYXRhKTtcbiAgfVxuXG4gIGxvYWRQYWdlKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMsIHBhZ2U6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9ET0NVTUVOVF9QQUdFLCB7XG4gICAgICAnZ3VpZCc6IGNyZWRlbnRpYWxzLmd1aWQsXG4gICAgICAncGFzc3dvcmQnOiBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICdwYWdlJzogcGFnZVxuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgZ2V0RG93bmxvYWRVcmwoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscykge1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5ET1dOTE9BRF9ET0NVTUVOVFMgKyAnLz9wYXRoPScgKyBjcmVkZW50aWFscy5ndWlkO1xuICB9XG5cbiAgbG9hZFByaW50KGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfUFJJTlQsIHtcbiAgICAgICdndWlkJzogY3JlZGVudGlhbHMuZ3VpZCxcbiAgICAgICdwYXNzd29yZCc6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgbG9hZFByaW50UGRmKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfUFJJTlRfUERGLCB7XG4gICAgICAnZ3VpZCc6IGNyZWRlbnRpYWxzLmd1aWQsXG4gICAgICAncGFzc3dvcmQnOiBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uUmVzcG9uc2VUeXBlQmxvYik7XG4gIH1cblxuICBnZXRTaWduYXR1cmVzKHBhdGg6IHN0cmluZywgdHlwZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX0ZJTEVfVFJFRSwge1xuICAgICAgJ3BhdGgnOiBwYXRoLFxuICAgICAgJ3NpZ25hdHVyZVR5cGUnOiB0eXBlXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XG4gIH1cblxuICByZW1vdmVTaWduYXR1cmVzKGd1aWQ6IHN0cmluZywgdHlwZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5ERUxFVEVfU0lHTkFUVVJFX0ZJTEUsIHtcbiAgICAgICdndWlkJzogZ3VpZCxcbiAgICAgICdzaWduYXR1cmVUeXBlJzogdHlwZVxuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgdXBsb2FkU2lnbmF0dXJlKGRhdGE6IEZpbGVMaXN0V2l0aFBhcmFtcywgcmV3cml0ZTogYm9vbGVhbikge1xuICAgIGlmIChkYXRhLmZpbGVMaXN0Lmxlbmd0aCA+IDEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5maWxlTGlzdC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgdGhpcy51cGxvYWQoZGF0YS5maWxlTGlzdC5pdGVtKGkpLCAnJywgcmV3cml0ZSwgZGF0YS5zaWduVHlwZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVwbG9hZChkYXRhLmZpbGVMaXN0Lml0ZW0oZGF0YS5maWxlTGlzdC5sZW5ndGggLSAxKSwgJycsIHJld3JpdGUsIGRhdGEuc2lnblR5cGUpO1xuICB9XG5cbiAgZ2V0Q29kZSh0ZXh0OiBzdHJpbmcsIHRlbXA6IGJvb2xlYW4sIHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuU0FWRV9PUFRJQ0FMX0NPREUsIHtcbiAgICAgICdwcm9wZXJ0aWVzJzogeyd0ZXh0JzogdGV4dCwgJ3RlbXAnOiB0ZW1wfSxcbiAgICAgICdzaWduYXR1cmVUeXBlJzogdHlwZVxuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgbG9hZFNpZ25hdHVyZUltYWdlKHNpZ246IERyYWdnYWJsZVNpZ25hdHVyZSkge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9TSUdOQVRVUkVfSU1BR0UsIHtcbiAgICAgICdndWlkJzogc2lnbi5ndWlkLFxuICAgICAgJ3BhZ2UnOiBzaWduLnBhZ2VOdW1iZXIsXG4gICAgICAnc2lnbmF0dXJlVHlwZSc6IHNpZ24udHlwZSxcbiAgICAgICdwYXNzd29yZCc6ICcnXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbikucGlwZShcbiAgICAgIG1hcCgocHJvcHM6IEFkZGVkU2lnbmF0dXJlKSA9PiB7XG4gICAgICAgIHByb3BzLmd1aWQgPSBzaWduLmd1aWQ7XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgIH0pKTtcbiAgfVxuXG4gIHNhdmVUZXh0U2lnbmF0dXJlKGRhdGE6IEFkZGVkU2lnbmF0dXJlKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IGRhdGEucHJvcHM7XG4gICAgcHJvcGVydGllcy5mb250Q29sb3IgPSB0aGlzLnRvUmdiKHByb3BlcnRpZXMuZm9udENvbG9yKTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLlNBVkVfVEVYVCwge1xuICAgICAgJ3Byb3BlcnRpZXMnOiBwcm9wZXJ0aWVzXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbikucGlwZShcbiAgICAgIG1hcCgocHJvcHM6IFNpZ25hdHVyZVByb3BzKSA9PiB7XG4gICAgICAgIHByb3BzLmZvbnRDb2xvciA9IHRoaXMudG9IZXgocHJvcHMuZm9udENvbG9yKTtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b1JnYihjb2xvcjogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGNvbG9yKTtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBjb25zdCByID0gcGFyc2VJbnQocmVzdWx0WzFdLCAxNik7XG4gICAgICBjb25zdCBnID0gcGFyc2VJbnQocmVzdWx0WzJdLCAxNik7XG4gICAgICBjb25zdCBiID0gcGFyc2VJbnQocmVzdWx0WzNdLCAxNik7XG4gICAgICByZXR1cm4gcmVzdWx0ID8gJ3JnYignICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJyknIDogJyc7XG4gICAgfVxuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIHByaXZhdGUgdG9IZXgoY29sb3I6IHN0cmluZykge1xuICAgIC8vIGNoZWNrIGlmIGNvbG9yIGlzIHN0YW5kYXJkIGhleCB2YWx1ZVxuICAgIGlmIChjb2xvci5tYXRjaCgvWzAtOUEtRl17Nn18WzAtOUEtRl17M30kL2kpKSB7XG4gICAgICByZXR1cm4gKGNvbG9yLmNoYXJBdCgwKSA9PT0gXCIjXCIpID8gY29sb3IgOiAoXCIjXCIgKyBjb2xvcik7XG4gICAgICAvLyBjaGVjayBpZiBjb2xvciBpcyBSR0IgdmFsdWUgLT4gY29udmVydCB0byBoZXhcbiAgICB9IGVsc2UgaWYgKGNvbG9yLm1hdGNoKC9ecmdiXFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccypcXCkkLykpIHtcbiAgICAgIGNvbnN0IGMgPSAoW3BhcnNlSW50KFJlZ0V4cC4kMSwgMTApLCBwYXJzZUludChSZWdFeHAuJDIsIDEwKSwgcGFyc2VJbnQoUmVnRXhwLiQzLCAxMCldKSxcbiAgICAgICAgcGFkID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgIGlmIChzdHIubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IDIgLSBzdHIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgc3RyID0gJzAnICsgc3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9O1xuICAgICAgaWYgKGMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGNvbnN0IHIgPSBwYWQoY1swXS50b1N0cmluZygxNikpLFxuICAgICAgICAgIGcgPSBwYWQoY1sxXS50b1N0cmluZygxNikpLFxuICAgICAgICAgIGIgPSBwYWQoY1syXS50b1N0cmluZygxNikpO1xuICAgICAgICByZXR1cm4gJyMnICsgciArIGcgKyBiO1xuICAgICAgfVxuICAgICAgLy8gZWxzZSBkbyBub3RoaW5nXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICBzYXZlSW1hZ2UoaW1nOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLlNBVkVfSU1BR0UsIHtcbiAgICAgICdpbWFnZSc6IGltZ1xuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgc2F2ZVN0YW1wKGltZzogc3RyaW5nLCBwcm9wczogYW55W10pIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLlNBVkVfU1RBTVAsIHtcbiAgICAgICdpbWFnZSc6IGltZyxcbiAgICAgICdzdGFtcERhdGEnOiBwcm9wc1xuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xuICB9XG5cbiAgc2lnbihjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzLCBzaWduYXR1cmVzOiBhbnlbXSkge1xuICAgIGNvbnN0IGRvY1R5cGUgPSBGaWxlVXRpbC5maW5kKGNyZWRlbnRpYWxzLmd1aWQsIGZhbHNlKS5mb3JtYXQ7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5TSUdOLCB7XG4gICAgICBndWlkOiBjcmVkZW50aWFscy5ndWlkLFxuICAgICAgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzLnBhc3N3b3JkID8gY3JlZGVudGlhbHMucGFzc3dvcmQgOiBcIlwiLFxuICAgICAgc2lnbmF0dXJlc0RhdGE6IHNpZ25hdHVyZXMsXG4gICAgICBkb2N1bWVudFR5cGU6IGRvY1R5cGVcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcbiAgfVxuXG4gIGRvd25sb2FkU2lnbmVkKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMsIHNpZ25hdHVyZXM6IGFueVtdKSB7XG4gICAgY29uc3QgZG9jVHlwZSA9IEZpbGVVdGlsLmZpbmQoY3JlZGVudGlhbHMuZ3VpZCwgZmFsc2UpLmZvcm1hdDtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLkRPV05MT0FEX1NJR05FRCwge1xuICAgICAgZ3VpZDogY3JlZGVudGlhbHMuZ3VpZCxcbiAgICAgIHBhc3N3b3JkOiBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgIHNpZ25hdHVyZXNEYXRhOiBzaWduYXR1cmVzLFxuICAgICAgZG9jdW1lbnRUeXBlOiBkb2NUeXBlXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvblJlc3BvbnNlVHlwZUJsb2IpO1xuICB9XG59XG4iXX0=