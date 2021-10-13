/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Api, ConfigService, FileUtil, Utils } from "@groupdocs.examples.angular/common-components";
import { map } from "rxjs/operators";
import { Subject } from 'rxjs';
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
        this._observer = new Subject();
        this._refreshSignatures = this._observer.asObservable();
    }
    /**
     * @return {?}
     */
    get getRefreshSignatures() {
        return this._refreshSignatures;
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
        properties.fontColor = Utils.toRgb(properties.fontColor);
        return this._http.post(this._config.getSignatureApiEndpoint() + Api.SAVE_TEXT, {
            'properties': properties
        }, Api.httpOptionsJson).pipe(map((/**
         * @param {?} props
         * @return {?}
         */
        (props) => {
            props.fontColor = Utils.toHex(props.fontColor);
            return props;
        })));
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
        for (const properties of props) {
            properties.backgroundColor = Utils.toRgb(properties.backgroundColor);
            properties.strokeColor = Utils.toRgb(properties.strokeColor);
            properties.textColor = Utils.toRgb(properties.textColor);
        }
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
    /**
     * @return {?}
     */
    refreshSignatures() {
        this._observer.next();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL3NpZ25hdHVyZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQWUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUMsR0FBRyxFQUFFLGFBQWEsRUFBbUIsUUFBUSxFQUFFLEtBQUssRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRW5ILE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuQyxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDOzs7O0FBSzNDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBSTNCLFlBQW9CLEtBQWlCLEVBQVUsT0FBc0I7UUFBakQsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFIN0QsY0FBUyxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQy9CLHVCQUFrQixHQUFvQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBR3JGLENBQUM7Ozs7SUFFRCxJQUFJLG9CQUFvQjtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNILENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLFdBQTRCO1FB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QUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzFELGNBQWMsRUFBRSxVQUFVO1lBQzFCLFlBQVksRUFBRSxPQUFPO1NBQ3RCLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxXQUE0QixFQUFFLFVBQWlCOztjQUN0RCxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU07UUFDN0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsR0FBRyxDQUFDLGVBQWUsRUFBRTtZQUNuRixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7WUFDdEIsUUFBUSxFQUFFLFdBQVcsQ0FBQyxRQUFRO1lBQzlCLGNBQWMsRUFBRSxVQUFVO1lBQzFCLFlBQVksRUFBRSxPQUFPO1NBQ3RCLEVBQUUsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7O1lBN0pGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJPLFVBQVU7WUFDTCxhQUFhOzs7Ozs7OztJQVN4QixxQ0FBZ0Q7Ozs7O0lBQ2hELDhDQUFxRjs7Ozs7SUFFekUsaUNBQXlCOzs7OztJQUFFLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cFJlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHtBcGksIENvbmZpZ1NlcnZpY2UsIEZpbGVDcmVkZW50aWFscywgRmlsZVV0aWwsIFV0aWxzfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7QWRkZWRTaWduYXR1cmUsIERyYWdnYWJsZVNpZ25hdHVyZSwgRmlsZUxpc3RXaXRoUGFyYW1zLCBTaWduYXR1cmVQcm9wc30gZnJvbSBcIi4vc2lnbmF0dXJlLW1vZGVsc1wiO1xyXG5pbXBvcnQge21hcH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX29ic2VydmVyOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3JlZnJlc2hTaWduYXR1cmVzOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLl9vYnNlcnZlci5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBfY29uZmlnOiBDb25maWdTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBnZXQgZ2V0UmVmcmVzaFNpZ25hdHVyZXMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9yZWZyZXNoU2lnbmF0dXJlcztcclxuICB9XHJcblxyXG4gIGxvYWRGaWxlcyhwYXRoOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9GSUxFX1RSRUUsIHsncGF0aCc6IHBhdGh9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcclxuICB9XHJcblxyXG4gIGxvYWRGaWxlKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuTE9BRF9ET0NVTUVOVF9ERVNDUklQVElPTiwgY3JlZGVudGlhbHMsIEFwaS5odHRwT3B0aW9uc0pzb24pO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkKGZpbGU6IEZpbGUsIHVybDogc3RyaW5nLCByZXdyaXRlOiBib29sZWFuLCBzaWduVHlwZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgncmV3cml0ZScsIFN0cmluZyhyZXdyaXRlKSk7XHJcbiAgICBpZiAoc2lnblR5cGUpIHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwic2lnbmF0dXJlVHlwZVwiLCBzaWduVHlwZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodXJsKSB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVybFwiLCB1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuVVBMT0FEX0RPQ1VNRU5UUywgZm9ybURhdGEpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFBhZ2UoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscywgcGFnZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRE9DVU1FTlRfUEFHRSwge1xyXG4gICAgICAnZ3VpZCc6IGNyZWRlbnRpYWxzLmd1aWQsXHJcbiAgICAgICdwYXNzd29yZCc6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgICAncGFnZSc6IHBhZ2VcclxuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RG93bmxvYWRVcmwoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLkRPV05MT0FEX0RPQ1VNRU5UUyArICcvP3BhdGg9JyArIGNyZWRlbnRpYWxzLmd1aWQ7XHJcbiAgfVxyXG5cclxuICBsb2FkUHJpbnQoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX1BSSU5ULCB7XHJcbiAgICAgICdndWlkJzogY3JlZGVudGlhbHMuZ3VpZCxcclxuICAgICAgJ3Bhc3N3b3JkJzogY3JlZGVudGlhbHMucGFzc3dvcmQsXHJcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcclxuICB9XHJcblxyXG4gIGxvYWRQcmludFBkZihjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfUFJJTlRfUERGLCB7XHJcbiAgICAgICdndWlkJzogY3JlZGVudGlhbHMuZ3VpZCxcclxuICAgICAgJ3Bhc3N3b3JkJzogY3JlZGVudGlhbHMucGFzc3dvcmQsXHJcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uUmVzcG9uc2VUeXBlQmxvYik7XHJcbiAgfVxyXG5cclxuICBnZXRTaWduYXR1cmVzKHBhdGg6IHN0cmluZywgdHlwZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLkxPQURfRklMRV9UUkVFLCB7XHJcbiAgICAgICdwYXRoJzogcGF0aCxcclxuICAgICAgJ3NpZ25hdHVyZVR5cGUnOiB0eXBlXHJcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVNpZ25hdHVyZXMoZ3VpZDogc3RyaW5nLCB0eXBlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuREVMRVRFX1NJR05BVFVSRV9GSUxFLCB7XHJcbiAgICAgICdndWlkJzogZ3VpZCxcclxuICAgICAgJ3NpZ25hdHVyZVR5cGUnOiB0eXBlXHJcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcclxuICB9XHJcblxyXG4gIHVwbG9hZFNpZ25hdHVyZShkYXRhOiBGaWxlTGlzdFdpdGhQYXJhbXMsIHJld3JpdGU6IGJvb2xlYW4pIHtcclxuICAgIGlmIChkYXRhLmZpbGVMaXN0Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmZpbGVMaXN0Lmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIHRoaXMudXBsb2FkKGRhdGEuZmlsZUxpc3QuaXRlbShpKSwgJycsIHJld3JpdGUsIGRhdGEuc2lnblR5cGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy51cGxvYWQoZGF0YS5maWxlTGlzdC5pdGVtKGRhdGEuZmlsZUxpc3QubGVuZ3RoIC0gMSksICcnLCByZXdyaXRlLCBkYXRhLnNpZ25UeXBlKTtcclxuICB9XHJcblxyXG4gIGdldENvZGUodGV4dDogc3RyaW5nLCB0ZW1wOiBib29sZWFuLCB0eXBlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fY29uZmlnLmdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkgKyBBcGkuU0FWRV9PUFRJQ0FMX0NPREUsIHtcclxuICAgICAgJ3Byb3BlcnRpZXMnOiB7J3RleHQnOiB0ZXh0LCAndGVtcCc6IHRlbXB9LFxyXG4gICAgICAnc2lnbmF0dXJlVHlwZSc6IHR5cGVcclxuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pO1xyXG4gIH1cclxuXHJcbiAgbG9hZFNpZ25hdHVyZUltYWdlKHNpZ246IERyYWdnYWJsZVNpZ25hdHVyZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5MT0FEX1NJR05BVFVSRV9JTUFHRSwge1xyXG4gICAgICAnZ3VpZCc6IHNpZ24uZ3VpZCxcclxuICAgICAgJ3BhZ2UnOiBzaWduLnBhZ2VOdW1iZXIsXHJcbiAgICAgICdzaWduYXR1cmVUeXBlJzogc2lnbi50eXBlLFxyXG4gICAgICAncGFzc3dvcmQnOiAnJ1xyXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbikucGlwZShcclxuICAgICAgbWFwKChwcm9wczogQWRkZWRTaWduYXR1cmUpID0+IHtcclxuICAgICAgICBwcm9wcy5ndWlkID0gc2lnbi5ndWlkO1xyXG4gICAgICAgIHJldHVybiBwcm9wcztcclxuICAgICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVRleHRTaWduYXR1cmUoZGF0YTogQWRkZWRTaWduYXR1cmUpIHtcclxuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBkYXRhLnByb3BzO1xyXG4gICAgcHJvcGVydGllcy5mb250Q29sb3IgPSBVdGlscy50b1JnYihwcm9wZXJ0aWVzLmZvbnRDb2xvcik7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLlNBVkVfVEVYVCwge1xyXG4gICAgICAncHJvcGVydGllcyc6IHByb3BlcnRpZXNcclxuICAgIH0sIEFwaS5odHRwT3B0aW9uc0pzb24pLnBpcGUoXHJcbiAgICAgIG1hcCgocHJvcHM6IFNpZ25hdHVyZVByb3BzKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuZm9udENvbG9yID0gVXRpbHMudG9IZXgocHJvcHMuZm9udENvbG9yKTtcclxuICAgICAgICByZXR1cm4gcHJvcHM7XHJcbiAgICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHNhdmVJbWFnZShpbWc6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5TQVZFX0lNQUdFLCB7XHJcbiAgICAgICdpbWFnZSc6IGltZ1xyXG4gICAgfSwgQXBpLmh0dHBPcHRpb25zSnNvbik7XHJcbiAgfVxyXG5cclxuICBzYXZlU3RhbXAoaW1nOiBzdHJpbmcsIHByb3BzOiBhbnlbXSkge1xyXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0aWVzIG9mIHByb3BzKSB7XHJcbiAgICAgIHByb3BlcnRpZXMuYmFja2dyb3VuZENvbG9yID0gVXRpbHMudG9SZ2IocHJvcGVydGllcy5iYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICBwcm9wZXJ0aWVzLnN0cm9rZUNvbG9yID0gVXRpbHMudG9SZ2IocHJvcGVydGllcy5zdHJva2VDb2xvcik7XHJcbiAgICAgIHByb3BlcnRpZXMudGV4dENvbG9yID0gVXRpbHMudG9SZ2IocHJvcGVydGllcy50ZXh0Q29sb3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5TQVZFX1NUQU1QLCB7XHJcbiAgICAgICdpbWFnZSc6IGltZyxcclxuICAgICAgJ3N0YW1wRGF0YSc6IHByb3BzXHJcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcclxuICB9XHJcblxyXG4gIHNpZ24oY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscywgc2lnbmF0dXJlczogYW55W10pIHtcclxuICAgIGNvbnN0IGRvY1R5cGUgPSBGaWxlVXRpbC5maW5kKGNyZWRlbnRpYWxzLmd1aWQsIGZhbHNlKS5mb3JtYXQ7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX2NvbmZpZy5nZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpICsgQXBpLlNJR04sIHtcclxuICAgICAgZ3VpZDogY3JlZGVudGlhbHMuZ3VpZCxcclxuICAgICAgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzLnBhc3N3b3JkID8gY3JlZGVudGlhbHMucGFzc3dvcmQgOiBcIlwiLFxyXG4gICAgICBzaWduYXR1cmVzRGF0YTogc2lnbmF0dXJlcyxcclxuICAgICAgZG9jdW1lbnRUeXBlOiBkb2NUeXBlXHJcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uKTtcclxuICB9XHJcblxyXG4gIGRvd25sb2FkU2lnbmVkKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMsIHNpZ25hdHVyZXM6IGFueVtdKSB7XHJcbiAgICBjb25zdCBkb2NUeXBlID0gRmlsZVV0aWwuZmluZChjcmVkZW50aWFscy5ndWlkLCBmYWxzZSkuZm9ybWF0O1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9jb25maWcuZ2V0U2lnbmF0dXJlQXBpRW5kcG9pbnQoKSArIEFwaS5ET1dOTE9BRF9TSUdORUQsIHtcclxuICAgICAgZ3VpZDogY3JlZGVudGlhbHMuZ3VpZCxcclxuICAgICAgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgICBzaWduYXR1cmVzRGF0YTogc2lnbmF0dXJlcyxcclxuICAgICAgZG9jdW1lbnRUeXBlOiBkb2NUeXBlXHJcbiAgICB9LCBBcGkuaHR0cE9wdGlvbnNKc29uUmVzcG9uc2VUeXBlQmxvYik7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoU2lnbmF0dXJlcygpIHtcclxuICAgIHRoaXMuX29ic2VydmVyLm5leHQoKTtcclxuICB9XHJcbn1cclxuIl19