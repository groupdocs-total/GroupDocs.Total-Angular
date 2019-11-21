(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@groupdocs.examples.angular/common-components'), require('@angular/common/http'), require('rxjs/operators'), require('rxjs'), require('jquery'), require('hammerjs'), require('@fortawesome/angular-fontawesome'), require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/free-regular-svg-icons'), require('ng-click-outside')) :
    typeof define === 'function' && define.amd ? define('@groupdocs.examples.angular/signature', ['exports', '@angular/core', '@angular/common', '@groupdocs.examples.angular/common-components', '@angular/common/http', 'rxjs/operators', 'rxjs', 'jquery', 'hammerjs', '@fortawesome/angular-fontawesome', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-regular-svg-icons', 'ng-click-outside'], factory) :
    (global = global || self, factory((global.groupdocs = global.groupdocs || {}, global.groupdocs.examples = global.groupdocs.examples || {}, global.groupdocs.examples.angular = global.groupdocs.examples.angular || {}, global.groupdocs.examples.angular.signature = {}), global.ng.core, global.ng.common, global.commonComponents, global.ng.common.http, global.rxjs.operators, global.rxjs, global.jquery, null, global.angularFontawesome, global.fontawesomeSvgCore, global.freeSolidSvgIcons, global.freeRegularSvgIcons, global.ngClickOutside));
}(this, function (exports, core, common, commonComponents, http, operators, rxjs, jquery, hammerjs, angularFontawesome, fontawesomeSvgCore, freeSolidSvgIcons, freeRegularSvgIcons, ngClickOutside) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            return this._http.post(this._config.getSignatureApiEndpoint() + commonComponents.Api.LOAD_FILE_TREE, { 'path': path }, commonComponents.Api.httpOptionsJson);
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
            return this._http.post(this._config.getSignatureApiEndpoint() + commonComponents.Api.LOAD_DOCUMENT_DESCRIPTION, credentials, commonComponents.Api.httpOptionsJson);
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
            return this._http.post(this._config.getSignatureApiEndpoint() + commonComponents.Api.UPLOAD_DOCUMENTS, formData);
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
            return this._http.post(this._config.getSignatureApiEndpoint() + commonComponents.Api.LOAD_DOCUMENT_PAGE, {
                'guid': credentials.guid,
                'password': credentials.password,
                'page': page
            }, commonComponents.Api.httpOptionsJson);
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
            return this._config.getSignatureApiEndpoint() + commonComponents.Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
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
            return this._http.post(this._config.getSignatureApiEndpoint() + commonComponents.Api.LOAD_PRINT, {
                'guid': credentials.guid,
                'password': credentials.password,
            }, commonComponents.Api.httpOptionsJson);
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
            return this._http.post(this._config.getSignatureApiEndpoint() + commonComponents.Api.LOAD_PRINT_PDF, {
                'guid': credentials.guid,
                'password': credentials.password,
            }, commonComponents.Api.httpOptionsJsonResponseTypeBlob);
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
            return this._http.post(this._config.getSignatureApiEndpoint() + commonComponents.Api.LOAD_FILE_TREE, {
                'path': path,
                'signatureType': type
            }, commonComponents.Api.httpOptionsJson);
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
            return this._http.post(this._config.getSignatureApiEndpoint() + commonComponents.Api.DELETE_SIGNATURE_FILE, {
                'guid': guid,
                'signatureType': type
            }, commonComponents.Api.httpOptionsJson);
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
            return this._http.post(this._config.getSignatureApiEndpoint() + commonComponents.Api.SAVE_OPTICAL_CODE, {
                'properties': { 'text': text, 'temp': temp },
                'signatureType': type
            }, commonComponents.Api.httpOptionsJson);
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
            return this._http.post(this._config.getSignatureApiEndpoint() + commonComponents.Api.LOAD_SIGNATURE_IMAGE, {
                'guid': sign.guid,
                'page': sign.pageNumber,
                'signatureType': sign.type,
                'password': ''
            }, commonComponents.Api.httpOptionsJson).pipe(operators.map((/**
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
            return this._http.post(this._config.getSignatureApiEndpoint() + commonComponents.Api.SAVE_TEXT, {
                'properties': properties
            }, commonComponents.Api.httpOptionsJson).pipe(operators.map((/**
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
            return this._http.post(this._config.getSignatureApiEndpoint() + commonComponents.Api.SAVE_IMAGE, {
                'image': img
            }, commonComponents.Api.httpOptionsJson);
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
                for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
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
            return this._http.post(this._config.getSignatureApiEndpoint() + commonComponents.Api.SAVE_STAMP, {
                'image': img,
                'stampData': props
            }, commonComponents.Api.httpOptionsJson);
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
            var docType = commonComponents.FileUtil.find(credentials.guid, false).format;
            return this._http.post(this._config.getSignatureApiEndpoint() + commonComponents.Api.SIGN, {
                guid: credentials.guid,
                password: credentials.password ? credentials.password : "",
                signaturesData: signatures,
                documentType: docType
            }, commonComponents.Api.httpOptionsJson);
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
            var docType = commonComponents.FileUtil.find(credentials.guid, false).format;
            return this._http.post(this._config.getSignatureApiEndpoint() + commonComponents.Api.DOWNLOAD_SIGNED, {
                guid: credentials.guid,
                password: credentials.password,
                signaturesData: signatures,
                documentType: docType
            }, commonComponents.Api.httpOptionsJsonResponseTypeBlob);
        };
        SignatureService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SignatureService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ SignatureService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SignatureService_Factory() { return new SignatureService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: SignatureService, providedIn: "root" });
        return SignatureService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SignatureConfig = /** @class */ (function () {
        function SignatureConfig() {
        }
        return SignatureConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SignatureConfigService = /** @class */ (function () {
        function SignatureConfigService(_http, _config) {
            this._http = _http;
            this._config = _config;
            this._signatureConfig = new rxjs.BehaviorSubject(new SignatureConfig());
            this._updatedConfig = this._signatureConfig.asObservable();
        }
        Object.defineProperty(SignatureConfigService.prototype, "updatedConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this._updatedConfig;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SignatureConfigService.prototype.load = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                /** @type {?} */
                var configEndpoint = _this._config.getConfigEndpoint(commonComponents.Api.SIGNATURE_APP);
                _this._http.get(configEndpoint, commonComponents.Api.httpOptionsJson).toPromise().then((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    /** @type {?} */
                    var signatureConfig = (/** @type {?} */ (response));
                    _this._signatureConfig.next(signatureConfig);
                    resolve();
                })).catch((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    reject("Could not load signature config: " + JSON.stringify(response));
                }));
            }));
        };
        SignatureConfigService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SignatureConfigService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ SignatureConfigService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SignatureConfigService_Factory() { return new SignatureConfigService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: SignatureConfigService, providedIn: "root" });
        return SignatureConfigService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SignatureType = /** @class */ (function () {
        function SignatureType() {
        }
        /**
         * @param {?} id
         * @return {?}
         */
        SignatureType.getSignatureType = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            switch (id) {
                case SignatureType.TEXT.id:
                    return SignatureType.TEXT;
                case SignatureType.IMAGE.id:
                    return SignatureType.IMAGE;
                case SignatureType.DIGITAL.id:
                    return SignatureType.DIGITAL;
                case SignatureType.QR_CODE.id:
                    return SignatureType.QR_CODE;
                case SignatureType.BAR_CODE.id:
                    return SignatureType.BAR_CODE;
                case SignatureType.STAMP.id:
                    return SignatureType.STAMP;
                case SignatureType.HAND.id:
                    return SignatureType.HAND;
            }
        };
        SignatureType.TEXT = { id: 'text', name: 'Text signatures', icon: 'font', title: '' };
        SignatureType.IMAGE = { id: 'image', name: 'Uploaded Images', icon: 'image', title: 'Add image signature' };
        SignatureType.QR_CODE = { id: 'qrCode', name: 'QR codes', icon: 'qrcode', title: 'New QR code' };
        SignatureType.BAR_CODE = { id: 'barCode', name: 'Bar codes', icon: 'barcode', title: 'New Bar code' };
        SignatureType.DIGITAL = {
            id: 'digital',
            name: 'Digital signatures',
            icon: 'fingerprint',
            title: 'New digital signature'
        };
        SignatureType.STAMP = { id: 'stamp', name: 'Stamps', icon: 'stamp', title: '' };
        SignatureType.HAND = { id: 'hand', name: 'Signatures', icon: 'signature', title: '' };
        return SignatureType;
    }());
    var FileListWithParams = /** @class */ (function () {
        function FileListWithParams(fileList, signType) {
            this.fileList = fileList;
            this.signType = signType;
        }
        return FileListWithParams;
    }());
    var DraggableSignature = /** @class */ (function () {
        function DraggableSignature() {
        }
        DraggableSignature.TEMP = "temp";
        return DraggableSignature;
    }());
    var Position = /** @class */ (function () {
        function Position(left, top) {
            this.left = left;
            this.top = top;
        }
        return Position;
    }());
    var SignatureData = /** @class */ (function () {
        function SignatureData() {
        }
        /**
         * @param {?} data
         * @param {?} type
         * @param {?} position
         * @return {?}
         */
        SignatureData.map = /**
         * @param {?} data
         * @param {?} type
         * @param {?} position
         * @return {?}
         */
        function (data, type, position) {
            /** @type {?} */
            var ret = new SignatureData();
            ret.signatureType = type;
            ret.pageNumber = data.number;
            ret.left = position.left;
            ret.top = position.top;
            ret.signatureGuid = data.guid;
            ret.imageWidth = data.width;
            ret.imageHeight = data.height;
            if (data.digitalProps) {
                ret.reason = data.digitalProps.reason;
                ret.contact = data.digitalProps.contact;
                ret.address = data.digitalProps.address;
                ret.signaturePassword = data.digitalProps.signaturePassword;
                ret.date = data.digitalProps.date;
            }
            return ret;
        };
        return SignatureData;
    }());
    var DigitalSign = /** @class */ (function () {
        function DigitalSign() {
        }
        return DigitalSign;
    }());
    var AddedSignature = /** @class */ (function () {
        function AddedSignature() {
            this.height = 0;
            this.width = 0;
        }
        return AddedSignature;
    }());
    var SignatureProps = /** @class */ (function () {
        function SignatureProps() {
        }
        /**
         * @return {?}
         */
        SignatureProps.getDefault = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var props = new SignatureProps();
            props.text = "";
            /** @type {?} */
            var f = commonComponents.Formatting.default();
            props.fontColor = f.color;
            props.font = f.font;
            props.fontSize = f.fontSize;
            props.underline = f.underline;
            props.bold = f.bold;
            props.italic = f.italic;
            return props;
        };
        return SignatureProps;
    }());
    var RemoveSign = /** @class */ (function () {
        function RemoveSign() {
        }
        return RemoveSign;
    }());
    var CopySign = /** @class */ (function () {
        function CopySign() {
        }
        return CopySign;
    }());
    var CopyChanges = /** @class */ (function () {
        function CopyChanges() {
        }
        return CopyChanges;
    }());
    var StampCanvasProps = /** @class */ (function () {
        function StampCanvasProps() {
            this.textExpansion = 0.173;
            this.textRepeat = 1;
        }
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} isMobile
         * @return {THIS}
         */
        StampCanvasProps.prototype.init = /**
         * @template THIS
         * @this {THIS}
         * @param {?} isMobile
         * @return {THIS}
         */
        function (isMobile) {
            (/** @type {?} */ (this)).text = "";
            (/** @type {?} */ (this)).width = isMobile ? 103 : 153;
            (/** @type {?} */ (this)).height = isMobile ? 103 : 153;
            (/** @type {?} */ (this)).zIndex = 10;
            (/** @type {?} */ (this)).backgroundColor = "rgb(255, 255, 255)";
            (/** @type {?} */ (this)).strokeColor = "rgb(51, 51, 51)";
            (/** @type {?} */ (this)).strokeWidth = 1;
            (/** @type {?} */ (this)).fontSize = 19;
            (/** @type {?} */ (this)).font = "Arial";
            (/** @type {?} */ (this)).textColor = "rgb(51, 51, 51)";
            (/** @type {?} */ (this)).radius = 76.5;
            (/** @type {?} */ (this)).bold = false;
            (/** @type {?} */ (this)).italic = false;
            (/** @type {?} */ (this)).underline = false;
            return (/** @type {?} */ (this));
        };
        return StampCanvasProps;
    }());
    var Border = /** @class */ (function () {
        function Border() {
        }
        /**
         * @return {?}
         */
        Border.widthOptions = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var ret = [];
            for (var i = 1; i <= 10; i++) {
                ret.push(this.widthOption(i));
            }
            return ret;
        };
        /**
         * @param {?} width
         * @return {?}
         */
        Border.widthOption = /**
         * @param {?} width
         * @return {?}
         */
        function (width) {
            return { value: width, name: width + 'px', separator: false };
        };
        return Border;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SelectSignatureService = /** @class */ (function () {
        function SelectSignatureService() {
            this._observer = new rxjs.Subject();
            this._selectSignature = this._observer.asObservable();
        }
        Object.defineProperty(SelectSignatureService.prototype, "selectSignature", {
            get: /**
             * @return {?}
             */
            function () {
                return this._selectSignature;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} sign
         * @return {?}
         */
        SelectSignatureService.prototype.select = /**
         * @param {?} sign
         * @return {?}
         */
        function (sign) {
            this._observer.next(sign);
        };
        return SelectSignatureService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RemoveSignatureService = /** @class */ (function () {
        function RemoveSignatureService() {
            this._observer = new rxjs.Subject();
            this._removeSignature = this._observer.asObservable();
        }
        Object.defineProperty(RemoveSignatureService.prototype, "removeSignature", {
            get: /**
             * @return {?}
             */
            function () {
                return this._removeSignature;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} id
         * @return {?}
         */
        RemoveSignatureService.prototype.remove = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this._observer.next(id);
        };
        return RemoveSignatureService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ActiveSignatureService = /** @class */ (function () {
        function ActiveSignatureService() {
            this._observer = new rxjs.Subject();
            this._activeChange = this._observer.asObservable();
        }
        Object.defineProperty(ActiveSignatureService.prototype, "activeChange", {
            get: /**
             * @return {?}
             */
            function () {
                return this._activeChange;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} signId
         * @return {?}
         */
        ActiveSignatureService.prototype.changeActive = /**
         * @param {?} signId
         * @return {?}
         */
        function (signId) {
            this._observer.next(signId);
        };
        return ActiveSignatureService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SignaturesHolderService = /** @class */ (function () {
        function SignaturesHolderService() {
            this.map = new Map();
        }
        /**
         * @param {?} key
         * @return {?}
         */
        SignaturesHolderService.prototype.add = /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            this.map.set(key, []);
        };
        /**
         * @param {?} key
         * @param {?} id
         * @return {?}
         */
        SignaturesHolderService.prototype.addId = /**
         * @param {?} key
         * @param {?} id
         * @return {?}
         */
        function (key, id) {
            if (!this.map.has(key)) {
                this.add(key);
            }
            /** @type {?} */
            var item = this.map.get(key);
            item.push(id);
        };
        /**
         * @param {?} key
         * @return {?}
         */
        SignaturesHolderService.prototype.delete = /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            this.map.delete(key);
        };
        /**
         * @param {?} key
         * @return {?}
         */
        SignaturesHolderService.prototype.has = /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            return this.map.has(key);
        };
        /**
         * @return {?}
         */
        SignaturesHolderService.prototype.clear = /**
         * @return {?}
         */
        function () {
            this.map.clear();
        };
        /**
         * @return {?}
         */
        SignaturesHolderService.prototype.values = /**
         * @return {?}
         */
        function () {
            return this.map.values();
        };
        /**
         * @param {?} key
         * @return {?}
         */
        SignaturesHolderService.prototype.get = /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            return this.map.get(key);
        };
        /**
         * @param {?} key
         * @param {?} id
         * @return {?}
         */
        SignaturesHolderService.prototype.remove = /**
         * @param {?} key
         * @param {?} id
         * @return {?}
         */
        function (key, id) {
            var e_1, _a;
            /** @type {?} */
            var items = this.map.get(key);
            this.delete(key);
            if (items.length !== 1) {
                this.add(key);
                try {
                    for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                        var elem = items_1_1.value;
                        if (elem !== id) {
                            this.map.get(key).push(elem);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        };
        /**
         * @param {?} imageGuid
         * @param {?} id
         * @return {?}
         */
        SignaturesHolderService.prototype.changeTemp = /**
         * @param {?} imageGuid
         * @param {?} id
         * @return {?}
         */
        function (imageGuid, id) {
            this.remove(DraggableSignature.TEMP, id);
            this.addId(imageGuid, id);
        };
        return SignaturesHolderService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CopySignatureService = /** @class */ (function () {
        function CopySignatureService() {
            this._observer = new rxjs.Subject();
            this._copySignature = this._observer.asObservable();
            this._observerChanges = new rxjs.Subject();
            this._changesSignature = this._observerChanges.asObservable();
        }
        Object.defineProperty(CopySignatureService.prototype, "copySignature", {
            get: /**
             * @return {?}
             */
            function () {
                return this._copySignature;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} copySign
         * @return {?}
         */
        CopySignatureService.prototype.copy = /**
         * @param {?} copySign
         * @return {?}
         */
        function (copySign) {
            this._observer.next(copySign);
        };
        Object.defineProperty(CopySignatureService.prototype, "changesSignature", {
            get: /**
             * @return {?}
             */
            function () {
                return this._changesSignature;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        CopySignatureService.prototype.notifyChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            this._observerChanges.next(changes);
        };
        return CopySignatureService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var $ = jquery;
    var Signature = /** @class */ (function () {
        function Signature(_signatureService, _removeSignatureService, _copySignatureService, _activeSignatureService, _signaturesHolderService) {
            var _this = this;
            this._signatureService = _signatureService;
            this._removeSignatureService = _removeSignatureService;
            this._copySignatureService = _copySignatureService;
            this._activeSignatureService = _activeSignatureService;
            this._signaturesHolderService = _signaturesHolderService;
            this.active = true;
            this.unlock = true;
            this.subject = new rxjs.Subject();
            this._activeSignatureService.activeChange.subscribe((/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                if (_this.id === id) {
                    _this.active = true;
                }
                else {
                    _this.active = false;
                }
            }));
            this.subject.pipe(operators.debounceTime(300)).subscribe((/**
             * @param {?} text
             * @return {?}
             */
            function (text) {
                _this.sendSaveText();
            }));
        }
        /**
         * @return {?}
         */
        Signature.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        Signature.prototype.getData = /**
         * @return {?}
         */
        function () {
            return 'data:image/png;base64,' + this.data.data;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        Signature.prototype.dragOver = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        Signature.prototype.dragStart = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            this.oldPosition = commonComponents.Utils.getMousePosition($event);
            if ($event.dataTransfer) {
                $event.dataTransfer.setData('text', 'foo');
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        Signature.prototype.dragging = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            /** @type {?} */
            var position = commonComponents.Utils.getMousePosition($event);
            if (position.x && position.y && this.isOnPage(position)) {
                /** @type {?} */
                var left = position.x - this.oldPosition.x;
                /** @type {?} */
                var top_1 = position.y - this.oldPosition.y;
                this.position.left += left;
                this.position.top += top_1;
                this.correctPosition();
                this.oldPosition = position;
            }
        };
        /**
         * @param {?} position
         * @return {?}
         */
        Signature.prototype.isOnPage = /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            /** @type {?} */
            var currentPage = document.elementFromPoint(position.x, position.y);
            return currentPage && $(currentPage).parent().parent() &&
                ($(currentPage).parent().parent().parent().hasClass("page") ||
                    $(currentPage).parent().parent().parent().parent().parent().hasClass("page"));
        };
        /**
         * @return {?}
         */
        Signature.prototype.isText = /**
         * @return {?}
         */
        function () {
            return SignatureType.TEXT.id === this.type;
        };
        /**
         * @return {?}
         */
        Signature.prototype.getFormatting = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var f = this.data.props;
            /** @type {?} */
            var formatting = commonComponents.Formatting.default();
            if (f) {
                formatting.fontSize = f.fontSize;
                formatting.font = f.font;
                formatting.color = f.fontColor;
                formatting.bold = f.bold;
                formatting.underline = f.underline;
                formatting.italic = f.italic;
            }
            return formatting;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        Signature.prototype.saveTextSignature = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (this.data.props) {
                this.fillFormatting($event);
                this.notifyChanges();
                this.sendSaveText();
            }
        };
        /**
         * @private
         * @param {?} formatting
         * @return {?}
         */
        Signature.prototype.fillFormatting = /**
         * @private
         * @param {?} formatting
         * @return {?}
         */
        function (formatting) {
            this.data.props.fontSize = formatting.fontSize;
            this.data.props.font = formatting.font;
            this.data.props.bold = formatting.bold;
            this.data.props.italic = formatting.italic;
            this.data.props.underline = formatting.underline;
            this.data.props.fontColor = formatting.color;
        };
        /**
         * @return {?}
         */
        Signature.prototype.remove = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var del = new RemoveSign();
            del.guid = this.data.guid;
            del.id = this.id;
            del.type = this.type;
            this._removeSignatureService.remove(del);
        };
        /**
         * @return {?}
         */
        Signature.prototype.activation = /**
         * @return {?}
         */
        function () {
            this._activeSignatureService.changeActive(this.id);
        };
        /**
         * @return {?}
         */
        Signature.prototype.isDigital = /**
         * @return {?}
         */
        function () {
            return this.type === SignatureType.DIGITAL.id;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        Signature.prototype.width = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.data.width += $event;
            if (!this.unlock) {
                this.data.height += $event;
            }
            this.correctPosition();
            this.notifyChanges();
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        Signature.prototype.height = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.data.height += $event;
            if (!this.unlock) {
                this.data.width += $event;
            }
            this.correctPosition();
            this.notifyChanges();
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        Signature.prototype.left = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (this.unlock) {
                this.position.left += $event;
            }
            this.correctPosition();
            this.notifyChanges();
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        Signature.prototype.top = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (this.unlock) {
                this.position.top += $event;
            }
            this.correctPosition();
            this.notifyChanges();
        };
        /**
         * @return {?}
         */
        Signature.prototype.notifyChanges = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var changes = new CopyChanges();
            changes.guid = this.data.guid;
            changes.id = this.id;
            changes.position = this.position;
            changes.width = this.data.width;
            changes.height = this.data.height;
            changes.props = this.data.props;
            this._copySignatureService.notifyChanges(changes);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        Signature.prototype.drop = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        };
        /**
         * @return {?}
         */
        Signature.prototype.isInit = /**
         * @return {?}
         */
        function () {
            return this.data.width === 0 && this.data.height === 0;
        };
        /**
         * @return {?}
         */
        Signature.prototype.onCopySign = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var copy = new CopySign();
            copy.guid = this.data.guid;
            copy.id = this.id;
            copy.type = this.type;
            this._copySignatureService.copy(copy);
        };
        /**
         * @return {?}
         */
        Signature.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            if (this.type === SignatureType.TEXT.id) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var element = $("#text");
                    if (element) {
                        element.focus();
                    }
                }), 100);
            }
        };
        /**
         * @private
         * @return {?}
         */
        Signature.prototype.correctPosition = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.position.left < 0) {
                this.position.left = 0;
            }
            if (this.position.top < 0) {
                this.position.top = 0;
            }
            if (this.position.top + this.data.height > this.pageHeight) {
                this.position.top = this.pageHeight - this.data.height;
            }
            if (this.position.left + this.data.width > this.pageWidth) {
                this.position.left = this.pageWidth - this.data.width;
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        Signature.prototype.saveText = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.data.props.text = value;
            this.subject.next(value);
        };
        /**
         * @private
         * @return {?}
         */
        Signature.prototype.sendSaveText = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this._signatureService.saveTextSignature(this.data).subscribe((/**
             * @param {?} p
             * @return {?}
             */
            function (p) {
                if (DraggableSignature.TEMP === _this.data.guid) {
                    _this._signaturesHolderService.changeTemp(p.imageGuid, _this.id);
                    _this.data.guid = p.imageGuid;
                }
                _this.data.props = p;
            }));
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        Signature.prototype.hideMenu = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this._activeSignatureService.changeActive(null);
        };
        /**
         * @return {?}
         */
        Signature.prototype.getMenuShift = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var menuWidth = this.type === SignatureType.TEXT.id ? 426 : 148;
            return this.data.width > menuWidth ? 0 : (this.data.width - menuWidth) * 0.5;
        };
        Signature.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-signature-component',
                        template: "<div class=\"gd-signature\" *ngIf=\"!isDigital()\"\n     (clickOutside)=\"hideMenu($event)\"\n     [exclude]=\"'gd-context-menu,.ui-resizable-handle'\"\n     [excludeBeforeClick]=\"true\"\n     [clickOutsideEvents]=\"'mousedown'\"\n     [clickOutsideEnabled]=\"active\"\n     [style.left.px]=\"position.left\" [style.top.px]=\"position.top\"\n     [style.width.px]=\"data.width ? data.width : undefined\"\n     [style.height.px]=\"data.height ? data.height : undefined\" (click)=\"activation()\">\n  <div [draggable]=\"true\" (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\n       (drag)=\"dragging($event)\" (dragend)=\"dragging($event)\" (drop)=\"drop($event)\"\n       (panstart)=\"dragStart($event)\" (panmove)=\"dragging($event)\"\n       class=\"gd-signature-wrapper\">\n    <gd-context-menu *ngIf=\"active\" [topPosition]=\"position.top\" [textMenu]=\"isText()\" [formatting]=\"getFormatting()\"\n                     (changeFormatting)=\"saveTextSignature($event)\" (removeSign)=\"remove()\" (copySign)=\"onCopySign()\"\n                     [lock]=\"!unlock\" (lockOut)=\"unlock = !$event\" [translation]=\"getMenuShift()\"></gd-context-menu>\n    <img class=\"gd-signature-image\" *ngIf=\"!isText()\" [attr.src]=\"getData()\" alt>\n    <textarea class=\"gd-text\" *ngIf=\"isText()\" [value]=\"data.props?.text\"\n              id=\"text\" #text (keyup)=\"saveText(text.value)\"\n              [style.text-decoration]=\"data.props?.underline ? 'underline' : 'unset'\"\n              [style.font-style]=\"data.props?.italic ? 'italic' : 'unset'\"\n              [style.font-weight]=\"data.props?.bold ? 'bold' : 'unset'\"\n              [style.color]=\"data.props?.fontColor\"\n              [style.font-family]=\"data?.props.font\"\n              [style.font-size.px]=\"data?.props.fontSize\"\n              [style.width.px]=\"data.width ? data.width : undefined\"\n              [style.height.px]=\"data.height ? data.height : undefined\"></textarea>\n  </div>\n  <gd-resizing [id]=\"id\" *ngIf=\"active\" [init]=\"isInit()\"\n               (offsetX)=\"width($event)\" (offsetY)=\"height($event)\"\n               (offsetTop)=\"top($event)\" (offsetLeft)=\"left($event)\"\n               [se]=\"true\" [sw]=\"unlock\" [ne]=\"unlock\" [nw]=\"unlock\"\n               [pageHeight]=\"pageHeight\" [pageWidth]=\"pageWidth\"></gd-resizing>\n</div>\n<div class=\"gd-digital-marker\" *ngIf=\"isDigital()\">\n  <fa-icon [icon]=\"['fas','info-circle']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  <div>Digitally signed : {{data.digitalProps.contact ? data.digitalProps.contact : data.digitalProps.reason}}</div>\n  <fa-icon [icon]=\"['fas','times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"remove()\"></fa-icon>\n</div>\n",
                        styles: [".gd-signature{position:absolute!important}.gd-signature .gd-signature-wrapper{height:inherit;outline:#679ffa solid 1px}.gd-signature-image{width:100%!important;height:inherit}.gd-text{width:inherit;height:inherit;border:none;resize:none;outline:0;margin:0;padding:0}.gd-digital-marker{background-color:#3787f5;height:16px;width:100%;text-align:left;display:flex;position:absolute;bottom:0}.gd-digital-marker .icon{color:#fff;font-size:10px;margin:0 5px 0 3px}.gd-digital-marker div{flex-grow:1;font-size:8px;color:#fff;margin-top:1px}"]
                    }] }
        ];
        /** @nocollapse */
        Signature.ctorParameters = function () { return [
            { type: SignatureService },
            { type: RemoveSignatureService },
            { type: CopySignatureService },
            { type: ActiveSignatureService },
            { type: SignaturesHolderService }
        ]; };
        Signature.propDecorators = {
            id: [{ type: core.Input }],
            data: [{ type: core.Input }],
            position: [{ type: core.Input }],
            type: [{ type: core.Input }],
            pageWidth: [{ type: core.Input }],
            pageHeight: [{ type: core.Input }]
        };
        return Signature;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DragSignatureService = /** @class */ (function () {
        function DragSignatureService() {
        }
        return DragSignatureService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SignatureTabActivatorService = /** @class */ (function (_super) {
        __extends(SignatureTabActivatorService, _super);
        function SignatureTabActivatorService() {
            return _super.call(this) || this;
        }
        return SignatureTabActivatorService;
    }(commonComponents.TabActivatorService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var $$1 = jquery;
    var SignatureAppComponent = /** @class */ (function () {
        function SignatureAppComponent(_signatureService, _modalService, configService, uploadFilesService, _navigateService, _zoomService, pagePreloadService, _renderPrintService, passwordService, _windowService, _selectSignatureService, _signatureTabActivationService, _hostingComponentsService, _addDynamicComponentService, _dragSignatureService, _onCloseService, removeSignatureService, _activeSignatureService, _excMessageService, _signaturesHolderService, _tabActivatorService, copySignatureService) {
            var _this = this;
            this._signatureService = _signatureService;
            this._modalService = _modalService;
            this._navigateService = _navigateService;
            this._zoomService = _zoomService;
            this._renderPrintService = _renderPrintService;
            this._windowService = _windowService;
            this._selectSignatureService = _selectSignatureService;
            this._signatureTabActivationService = _signatureTabActivationService;
            this._hostingComponentsService = _hostingComponentsService;
            this._addDynamicComponentService = _addDynamicComponentService;
            this._dragSignatureService = _dragSignatureService;
            this._onCloseService = _onCloseService;
            this._activeSignatureService = _activeSignatureService;
            this._excMessageService = _excMessageService;
            this._signaturesHolderService = _signaturesHolderService;
            this._tabActivatorService = _tabActivatorService;
            this.title = 'signature';
            this.files = [];
            this.countPages = 0;
            this.formatDisabled = !this.file;
            this.browseFilesModal = commonComponents.CommonModals.BrowseFiles;
            this.signatureTypes = [
                SignatureType.TEXT,
                SignatureType.IMAGE,
                SignatureType.DIGITAL,
                SignatureType.QR_CODE,
                SignatureType.BAR_CODE,
                SignatureType.STAMP,
                SignatureType.HAND,
            ];
            this.signatureTypeCodes = [
                SignatureType.QR_CODE,
                SignatureType.BAR_CODE,
            ];
            this.signatureComponents = new Map();
            this.fileWasDropped = false;
            this._tabActivatorService.activeTabChange.subscribe((/**
             * @param {?} tabId
             * @return {?}
             */
            function (tabId) {
                if (tabId === '1') {
                    if (_this.activeSignatureTab) {
                        _this._signatureTabActivationService.changeActiveTab(_this.activeSignatureTab);
                    }
                    _this.activeSignatureTab = null;
                }
            }));
            copySignatureService.copySignature.subscribe((/**
             * @param {?} copySign
             * @return {?}
             */
            function (copySign) {
                var e_1, _a;
                /** @type {?} */
                var componentRef = _this.signatureComponents.get(copySign.id);
                if (componentRef) {
                    // @ts-ignore
                    /** @type {?} */
                    var comp = ((/** @type {?} */ (componentRef))).instance;
                    /** @type {?} */
                    var compPage = comp.data.number;
                    try {
                        for (var _b = __values(_this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var page = _c.value;
                            if (page.number !== compPage) {
                                /** @type {?} */
                                var sign = _this.createDraggableSign(comp, copySign, page);
                                /** @type {?} */
                                var addedSignature = _this.createAddedSignature(copySign, comp, page);
                                /** @type {?} */
                                var id = _this.addSignatureComponent(addedSignature, sign, page);
                                _this._signaturesHolderService.addId(sign.guid, id);
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
            }));
            copySignatureService.changesSignature.subscribe((/**
             * @param {?} copyChanges
             * @return {?}
             */
            function (copyChanges) {
                var e_2, _a;
                /** @type {?} */
                var componentRef = _this.signatureComponents.get(copyChanges.id);
                if (componentRef) {
                    /** @type {?} */
                    var ids = _this._signaturesHolderService.get(copyChanges.guid);
                    try {
                        for (var ids_1 = __values(ids), ids_1_1 = ids_1.next(); !ids_1_1.done; ids_1_1 = ids_1.next()) {
                            var id = ids_1_1.value;
                            /** @type {?} */
                            var compRef = _this.signatureComponents.get(id);
                            if (compRef) {
                                // @ts-ignore
                                /** @type {?} */
                                var comp = ((/** @type {?} */ (compRef))).instance;
                                if (comp.id !== copyChanges.id) {
                                    comp.data.width = copyChanges.width;
                                    comp.data.height = copyChanges.height;
                                    comp.data.position = copyChanges.position;
                                    comp.data.props = copyChanges.props;
                                }
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (ids_1_1 && !ids_1_1.done && (_a = ids_1.return)) _a.call(ids_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }));
            removeSignatureService.removeSignature.subscribe((/**
             * @param {?} del
             * @return {?}
             */
            function (del) {
                var e_3, _a;
                /** @type {?} */
                var ids = _this._signaturesHolderService.get(del.guid);
                try {
                    for (var ids_2 = __values(ids), ids_2_1 = ids_2.next(); !ids_2_1.done; ids_2_1 = ids_2.next()) {
                        var id = ids_2_1.value;
                        if (del.type === SignatureType.DIGITAL.id || del.id === id) {
                            /** @type {?} */
                            var componentRef = _this.signatureComponents.get(id);
                            if (componentRef) {
                                componentRef.destroy();
                            }
                            _this.signatureComponents.delete(id);
                            _this._signaturesHolderService.remove(del.guid, id);
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (ids_2_1 && !ids_2_1.done && (_a = ids_2.return)) _a.call(ids_2);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }));
            configService.updatedConfig.subscribe((/**
             * @param {?} signatureConfig
             * @return {?}
             */
            function (signatureConfig) {
                _this.signatureConfig = signatureConfig;
            }));
            uploadFilesService.uploadsChange.subscribe((/**
             * @param {?} uploads
             * @return {?}
             */
            function (uploads) {
                if (uploads) {
                    /** @type {?} */
                    var i = void 0;
                    for (i = 0; i < uploads.length; i++) {
                        _this._signatureService.upload(uploads.item(i), '', _this.rewriteConfig, null).subscribe((/**
                         * @param {?} obj
                         * @return {?}
                         */
                        function (obj) {
                            _this.fileWasDropped ? _this.selectFile(obj.guid, '', '') : _this.selectDir('');
                        }));
                    }
                }
            }));
            pagePreloadService.checkPreload.subscribe((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                if (_this.preloadPageCountConfig !== 0) {
                    for (var i = page; i < page + 2; i++) {
                        if (i > 0 && i <= _this.countPages && !_this.file.pages[i - 1].data) {
                            _this.preloadPages(i, i);
                        }
                    }
                }
            }));
            passwordService.passChange.subscribe((/**
             * @param {?} pass
             * @return {?}
             */
            function (pass) {
                _this.selectFile(_this.credentials.guid, pass, commonComponents.CommonModals.PasswordRequired);
            }));
            _selectSignatureService.selectSignature.subscribe((/**
             * @param {?} sign
             * @return {?}
             */
            function (sign) {
                _this.selectSignature(sign);
            }));
            this.isDesktop = _windowService.isDesktop();
            _windowService.onResize.subscribe((/**
             * @param {?} w
             * @return {?}
             */
            function (w) {
                _this.isDesktop = _windowService.isDesktop();
            }));
        }
        /**
         * @private
         * @param {?} comp
         * @param {?} copySign
         * @param {?} page
         * @return {?}
         */
        SignatureAppComponent.prototype.createDraggableSign = /**
         * @private
         * @param {?} comp
         * @param {?} copySign
         * @param {?} page
         * @return {?}
         */
        function (comp, copySign, page) {
            /** @type {?} */
            var sign = new DraggableSignature();
            sign.type = comp.type;
            sign.guid = copySign.guid;
            sign.position = comp.position;
            sign.pageNumber = page.number;
            return sign;
        };
        /**
         * @private
         * @param {?} copySign
         * @param {?} comp
         * @param {?} page
         * @return {?}
         */
        SignatureAppComponent.prototype.createAddedSignature = /**
         * @private
         * @param {?} copySign
         * @param {?} comp
         * @param {?} page
         * @return {?}
         */
        function (copySign, comp, page) {
            /** @type {?} */
            var addedSignature = new AddedSignature();
            addedSignature.guid = copySign.guid;
            addedSignature.data = comp.data.data;
            if (comp.data.props) {
                addedSignature.props = comp.data.props;
            }
            else {
                addedSignature.width = comp.data.width;
                addedSignature.height = comp.data.height;
            }
            addedSignature.number = page.number;
            return addedSignature;
        };
        /**
         * @return {?}
         */
        SignatureAppComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (this.defaultDocumentConfig()) {
                this.isLoading = true;
                this.selectFile(this.defaultDocumentConfig(), "", "");
            }
        };
        Object.defineProperty(SignatureAppComponent.prototype, "rewriteConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.signatureConfig ? this.signatureConfig.rewrite : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureAppComponent.prototype, "zoomConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureAppComponent.prototype, "pageSelectorConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.signatureConfig ? this.signatureConfig.pageSelector : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureAppComponent.prototype, "preloadPageCountConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.signatureConfig ? this.signatureConfig.preloadPageCount : 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureAppComponent.prototype, "downloadConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.signatureConfig ? this.signatureConfig.download : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureAppComponent.prototype, "downloadOriginalConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.signatureConfig ? this.signatureConfig.downloadOriginal : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureAppComponent.prototype, "downloadSingedConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.signatureConfig ? this.signatureConfig.downloadSigned : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureAppComponent.prototype, "uploadConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.signatureConfig ? this.signatureConfig.upload : true;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        SignatureAppComponent.prototype.defaultDocumentConfig = /**
         * @private
         * @return {?}
         */
        function () {
            return this.signatureConfig ? this.signatureConfig.defaultDocument : "";
        };
        Object.defineProperty(SignatureAppComponent.prototype, "printConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.signatureConfig ? this.signatureConfig.print : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureAppComponent.prototype, "browseConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.signatureConfig ? this.signatureConfig.browse : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureAppComponent.prototype, "htmlModeConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureAppComponent.prototype, "enableRightClickConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.signatureConfig ? this.signatureConfig.enableRightClick : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureAppComponent.prototype, "textSignatureConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.signatureConfig ? this.signatureConfig.textSignature : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureAppComponent.prototype, "imageSignatureConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.signatureConfig ? this.signatureConfig.imageSignature : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureAppComponent.prototype, "digitalSignatureConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.signatureConfig ? this.signatureConfig.digitalSignature : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureAppComponent.prototype, "qrCodeSignatureConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.signatureConfig ? this.signatureConfig.qrCodeSignature : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureAppComponent.prototype, "barCodeSignatureConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.signatureConfig ? this.signatureConfig.barCodeSignature : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureAppComponent.prototype, "stampSignatureConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.signatureConfig ? this.signatureConfig.stampSignature : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureAppComponent.prototype, "handSignatureConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.signatureConfig ? this.signatureConfig.handSignature : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureAppComponent.prototype, "currentPage", {
            get: /**
             * @return {?}
             */
            function () {
                return this._navigateService.currentPage;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} id
         * @return {?}
         */
        SignatureAppComponent.prototype.openModal = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this._modalService.open(id);
        };
        /**
         * @param {?} id
         * @return {?}
         */
        SignatureAppComponent.prototype.closeModal = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this._modalService.close(id);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        SignatureAppComponent.prototype.selectDir = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this._signatureService.loadFiles($event).subscribe((/**
             * @param {?} files
             * @return {?}
             */
            function (files) { return _this.files = files || []; }));
        };
        /**
         * @param {?} $event
         * @param {?} password
         * @param {?} modalId
         * @return {?}
         */
        SignatureAppComponent.prototype.selectFile = /**
         * @param {?} $event
         * @param {?} password
         * @param {?} modalId
         * @return {?}
         */
        function ($event, password, modalId) {
            var _this = this;
            this.credentials = { guid: $event, password: password };
            this.file = null;
            this._signatureService.loadFile(this.credentials).subscribe((/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                _this.file = file;
                _this.formatDisabled = !_this.file;
                if (file) {
                    /** @type {?} */
                    var preloadPageCount = _this.preloadPageCountConfig;
                    /** @type {?} */
                    var countPages = file.pages ? file.pages.length : 0;
                    if (preloadPageCount > 0) {
                        _this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                    }
                    _this._navigateService.countPages = countPages;
                    _this._navigateService.currentPage = 1;
                    _this.countPages = countPages;
                    _this.cleanSignatures();
                }
            }));
            if (modalId) {
                this._modalService.close(modalId);
            }
            this.clearData();
        };
        /**
         * @param {?} start
         * @param {?} end
         * @return {?}
         */
        SignatureAppComponent.prototype.preloadPages = /**
         * @param {?} start
         * @param {?} end
         * @return {?}
         */
        function (start, end) {
            var _this = this;
            var _loop_1 = function (i) {
                this_1._signatureService.loadPage(this_1.credentials, i).subscribe((/**
                 * @param {?} page
                 * @return {?}
                 */
                function (page) {
                    _this.file.pages[i - 1] = page;
                }));
            };
            var this_1 = this;
            for (var i = start; i <= end; i++) {
                _loop_1(i);
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        SignatureAppComponent.prototype.upload = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this._signatureService.upload(null, $event, this.rewriteConfig, null).subscribe((/**
             * @return {?}
             */
            function () {
                _this.selectDir('');
            }));
        };
        /**
         * @return {?}
         */
        SignatureAppComponent.prototype.downloadFile = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            window.location.assign(this._signatureService.getDownloadUrl(this.credentials));
        };
        /**
         * @private
         * @return {?}
         */
        SignatureAppComponent.prototype.clearData = /**
         * @private
         * @return {?}
         */
        function () {
            var e_4, _a;
            if (!this.file || !this.file.pages) {
                return;
            }
            try {
                for (var _b = __values(this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var page = _c.value;
                    page.data = null;
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        SignatureAppComponent.prototype.onRightClick = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            return this.enableRightClickConfig;
        };
        /**
         * @param {?} id
         * @return {?}
         */
        SignatureAppComponent.prototype.getSignatureTypeConfig = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            switch (id) {
                case SignatureType.TEXT.id:
                    return this.textSignatureConfig;
                case SignatureType.IMAGE.id:
                    return this.imageSignatureConfig;
                case SignatureType.DIGITAL.id:
                    return this.digitalSignatureConfig;
                case SignatureType.QR_CODE.id:
                    return this.qrCodeSignatureConfig;
                case SignatureType.BAR_CODE.id:
                    return this.barCodeSignatureConfig;
                case SignatureType.STAMP.id:
                    return this.stampSignatureConfig;
                case SignatureType.HAND.id:
                    return this.handSignatureConfig;
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        SignatureAppComponent.prototype.dragOver = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        SignatureAppComponent.prototype.dropSignature = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            /** @type {?} */
            var position = commonComponents.Utils.getMousePosition($event);
            /** @type {?} */
            var currentPage = document.elementFromPoint(position.x, position.y);
            if (currentPage && $$1(currentPage).parent().parent() && $$1(currentPage).parent().parent().parent().hasClass("page")) {
                /** @type {?} */
                var documentPage = $$1(currentPage).parent().parent()[0];
                /** @type {?} */
                var left = position.x - $$1(documentPage).offset().left;
                /** @type {?} */
                var top_1 = position.y - $$1(documentPage).offset().top;
                /** @type {?} */
                var currentPosition = new Position(left, top_1);
                /** @type {?} */
                var sign = this._dragSignatureService.sign;
                if (sign) {
                    /** @type {?} */
                    var id = $$1(currentPage).parent().attr('id');
                    if (id) {
                        /** @type {?} */
                        var split = id.split('-');
                        sign.pageNumber = split.length === 2 ? parseInt(split[1], 10) : sign.pageNumber;
                    }
                    sign.position = currentPosition;
                    this.selectSignature(sign);
                    this._dragSignatureService.sign = null;
                }
            }
        };
        /**
         * @private
         * @param {?} sign
         * @return {?}
         */
        SignatureAppComponent.prototype.selectSignature = /**
         * @private
         * @param {?} sign
         * @return {?}
         */
        function (sign) {
            var _this = this;
            var e_5, _a;
            if (sign.type === SignatureType.DIGITAL.id) {
                /** @type {?} */
                var addedSignature = new AddedSignature();
                addedSignature.digitalProps = sign.digitalProps;
                addedSignature.guid = sign.guid;
                addedSignature.number = sign.pageNumber;
                try {
                    for (var _b = __values(this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var page = _c.value;
                        /** @type {?} */
                        var id = this.addSignatureComponent(addedSignature, sign, page);
                        this._signaturesHolderService.addId(sign.guid, id);
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
                this.closeTab(sign.type);
            }
            else {
                this._signatureService.loadSignatureImage(sign).subscribe((/**
                 * @param {?} signature
                 * @return {?}
                 */
                function (signature) {
                    signature.number = sign.pageNumber;
                    /** @type {?} */
                    var pageModel = _this.file.pages.find((/**
                     * @param {?} p
                     * @return {?}
                     */
                    function (p) {
                        return p.number === sign.pageNumber;
                    }));
                    /** @type {?} */
                    var id = _this.addSignatureComponent(signature, sign, pageModel);
                    _this._signaturesHolderService.addId(sign.guid, id);
                    _this.closeTab(sign.type);
                }));
            }
        };
        /**
         * @private
         * @param {?} addedSignature
         * @param {?} sign
         * @param {?} page
         * @return {?}
         */
        SignatureAppComponent.prototype.addSignatureComponent = /**
         * @private
         * @param {?} addedSignature
         * @param {?} sign
         * @param {?} page
         * @return {?}
         */
        function (addedSignature, sign, page) {
            /** @type {?} */
            var dynamicDirective = this._hostingComponentsService.find(page.number);
            if (dynamicDirective) {
                /** @type {?} */
                var viewContainerRef = dynamicDirective.viewContainerRef;
                /** @type {?} */
                var selectSignature = this._addDynamicComponentService.addDynamicComponent(viewContainerRef, Signature);
                /** @type {?} */
                var id = this.signatureComponents.size + 1;
                while (addedSignature.width >= page.width || addedSignature.height >= page.height) {
                    addedSignature.width = addedSignature.width / 2;
                    addedSignature.height = addedSignature.height / 2;
                }
                ((/** @type {?} */ (selectSignature.instance))).id = id;
                ((/** @type {?} */ (selectSignature.instance))).data = addedSignature;
                ((/** @type {?} */ (selectSignature.instance))).position = sign.position;
                ((/** @type {?} */ (selectSignature.instance))).type = sign.type;
                ((/** @type {?} */ (selectSignature.instance))).pageWidth = page.width;
                ((/** @type {?} */ (selectSignature.instance))).pageHeight = page.height;
                this.signatureComponents.set(id, selectSignature);
                this._activeSignatureService.changeActive(id);
                return id;
            }
            return null;
        };
        /**
         * @private
         * @param {?} type
         * @return {?}
         */
        SignatureAppComponent.prototype.closeTab = /**
         * @private
         * @param {?} type
         * @return {?}
         */
        function (type) {
            this._signatureTabActivationService.changeActiveTab(type);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        SignatureAppComponent.prototype.hideAll = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (($event.target.parentElement && $event.target.parentElement.attributes['name'] &&
                $event.target.parentElement.attributes['name'].value === 'button') ||
                ($event.target.parentElement &&
                    $event.target.parentElement.parentElement &&
                    $event.target.parentElement.parentElement.attributes['name'] &&
                    $event.target.parentElement.parentElement.attributes['name'].value === 'button') ||
                ($event.target.parentElement &&
                    $event.target.parentElement.parentElement &&
                    $event.target.parentElement.parentElement.parentElement &&
                    $event.target.parentElement.parentElement.parentElement.parentElement &&
                    $event.target.parentElement.parentElement.parentElement.parentElement.attributes['name'] &&
                    $event.target.parentElement.parentElement.parentElement.parentElement.attributes['name'].value === 'button')) {
                return;
            }
            this._onCloseService.close(true);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        SignatureAppComponent.prototype.newSign = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (SignatureType.HAND.id === $event) {
                this._modalService.open(commonComponents.CommonModals.DrawHandSignature);
                this._signatureTabActivationService.changeActiveTab(SignatureType.HAND.id);
            }
            else if (SignatureType.STAMP.id === $event) {
                this._modalService.open(commonComponents.CommonModals.DrawStampSignature);
                this._signatureTabActivationService.changeActiveTab(SignatureType.STAMP.id);
            }
            else if (SignatureType.TEXT.id === $event) {
                this.addTextSign();
                this._signatureTabActivationService.changeActiveTab(SignatureType.TEXT.id);
            }
        };
        /**
         * @private
         * @return {?}
         */
        SignatureAppComponent.prototype.addTextSign = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var signature = new AddedSignature();
            signature.props = SignatureProps.getDefault();
            signature.guid = DraggableSignature.TEMP;
            /** @type {?} */
            var sign = new DraggableSignature();
            sign.guid = DraggableSignature.TEMP;
            sign.position = new Position(0, 0);
            sign.type = SignatureType.TEXT.id;
            /** @type {?} */
            var pageNumber = this._navigateService.currentPage;
            signature.number = pageNumber;
            sign.pageNumber = pageNumber;
            /** @type {?} */
            var pageModel = this.file.pages.find((/**
             * @param {?} p
             * @return {?}
             */
            function (p) {
                return p.number === pageNumber;
            }));
            /** @type {?} */
            var id = this.addSignatureComponent(signature, sign, pageModel);
            this._signaturesHolderService.addId(sign.guid, id);
        };
        /**
         * @return {?}
         */
        SignatureAppComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.cleanSignatures();
        };
        /**
         * @private
         * @return {?}
         */
        SignatureAppComponent.prototype.cleanSignatures = /**
         * @private
         * @return {?}
         */
        function () {
            var e_6, _a;
            try {
                for (var _b = __values(this.signatureComponents.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var componentRef = _c.value;
                    componentRef.destroy();
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_6) throw e_6.error; }
            }
            this.signatureComponents = new Map();
            this._signaturesHolderService.clear();
        };
        /**
         * @return {?}
         */
        SignatureAppComponent.prototype.sign = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var signatures = this.prepareSignaturesData();
            this._signatureService.sign(this.credentials, signatures).subscribe((/**
             * @param {?} ret
             * @return {?}
             */
            function (ret) {
                _this._modalService.open(commonComponents.CommonModals.OperationSuccess);
                _this.selectFile(ret.guid, null, commonComponents.CommonModals.OperationSuccess);
            }));
        };
        /**
         * @private
         * @return {?}
         */
        SignatureAppComponent.prototype.prepareSignaturesData = /**
         * @private
         * @return {?}
         */
        function () {
            var e_7, _a, e_8, _b;
            /** @type {?} */
            var signatures = [];
            try {
                for (var _c = __values(this._signaturesHolderService.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var ids = _d.value;
                    try {
                        for (var ids_3 = __values(ids), ids_3_1 = ids_3.next(); !ids_3_1.done; ids_3_1 = ids_3.next()) {
                            var id = ids_3_1.value;
                            /** @type {?} */
                            var componentRef = this.signatureComponents.get(id);
                            // @ts-ignore
                            /** @type {?} */
                            var sign = ((/** @type {?} */ (componentRef))).instance;
                            /** @type {?} */
                            var data = sign.data;
                            /** @type {?} */
                            var position = sign.position;
                            /** @type {?} */
                            var type = sign.type;
                            if (DraggableSignature.TEMP !== data.guid) {
                                signatures.push(SignatureData.map(data, type, position));
                            }
                            if (SignatureType.DIGITAL.id === type) {
                                break;
                            }
                        }
                    }
                    catch (e_8_1) { e_8 = { error: e_8_1 }; }
                    finally {
                        try {
                            if (ids_3_1 && !ids_3_1.done && (_b = ids_3.return)) _b.call(ids_3);
                        }
                        finally { if (e_8) throw e_8.error; }
                    }
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_7) throw e_7.error; }
            }
            return signatures;
        };
        /**
         * @return {?}
         */
        SignatureAppComponent.prototype.isPdf = /**
         * @return {?}
         */
        function () {
            if (this.file) {
                if (commonComponents.FileUtil.find(this.file.guid, false).format === "Portable Document Format") {
                    return true;
                }
            }
            return false;
        };
        /**
         * @return {?}
         */
        SignatureAppComponent.prototype.codesConfig = /**
         * @return {?}
         */
        function () {
            return this.getSignatureTypeConfig(SignatureType.BAR_CODE.id) || this.getSignatureTypeConfig(SignatureType.QR_CODE.id);
        };
        /**
         * @param {?} id
         * @return {?}
         */
        SignatureAppComponent.prototype.isVisible = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            /** @type {?} */
            var notCode = id !== SignatureType.BAR_CODE.id && id !== SignatureType.QR_CODE.id;
            return this.getSignatureTypeConfig(id) && (this.isDesktop || notCode);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        SignatureAppComponent.prototype.activeTab = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.activeSignatureTab = $event;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        SignatureAppComponent.prototype.fileDropped = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.fileWasDropped = $event;
        };
        SignatureAppComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-signature',
                        template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\" (click)=\"hideAll($event)\">\n  <div class=\"signature-wrapper wrapper\">\n    <gd-tabbed-toolbars [logo]=\"'signature'\" [icon]=\"'pen-square'\">\n      <gd-tabs>\n        <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\n          <div id=\"files-tools\" class=\"toolbar-panel\">\n            <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                       *ngIf=\"browseConfig\"></gd-button>\n\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                       (click)=\"downloadFile()\" *ngIf=\"downloadConfig\"></gd-button>\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"sign()\"></gd-button>\n\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"'Signatures'\" [icon]=\"'signature'\" [id]=\"'2'\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let signatureType of signatureTypes\">\n              <gd-signature-tab [disabled]=\"!file\" *ngIf=\"isVisible(signatureType.id)\"\n                                [icon]=\"signatureType.icon\" (activeTab)=\"activeTab($event)\"\n                                [id]=\"signatureType.id\" [tooltip]=\"signatureType.name\">\n              </gd-signature-tab>\n            </div>\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"''\" [icon]=\"'qrcode'\" [id]=\"'3'\" *ngIf=\"!isDesktop && codesConfig()\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let signatureType of signatureTypeCodes\">\n              <gd-signature-tab [disabled]=\"!file\" *ngIf=\"getSignatureTypeConfig(signatureType.id)\"\n                                [icon]=\"signatureType.icon\" (activeTab)=\"activeTab($event)\"\n                                [id]=\"signatureType.id\" [tooltip]=\"signatureType.name\">\n              </gd-signature-tab>\n            </div>\n          </div>\n        </gd-tab>\n      </gd-tabs>\n    </gd-tabbed-toolbars>\n    <gd-signature-left-panel *ngIf=\"activeSignatureTab\" [rewrite]=\"rewriteConfig\" (newSignatureEvent)=\"newSign($event)\"\n                             [isPdf]=\"isPdf()\" [id]=\"activeSignatureTab\">\n    </gd-signature-left-panel>\n    <div class=\"doc-panel\" *ngIf=\"file\">\n      <gd-document (drop)=\"dropSignature($event)\" (dragover)=\"dragOver($event)\" class=\"gd-document\" *ngIf=\"file\"\n                   [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                   [preloadPageCount]=\"preloadPageCountConfig\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-document>\n    </div>\n\n    <gd-init-state [icon]=\"'signature'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\"\n                   (fileDropped)=\"fileDropped($event)\">\n      Click\n      <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon>\n      to open file<br>\n      Or drop file here\n    </gd-init-state>\n    <gd-hand-modal></gd-hand-modal>\n    <gd-stamp-modal></gd-stamp-modal>\n  </div>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n</div>\n",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .page{position:relative}::ng-deep .gd-page-image{width:unset;height:unset}::ng-deep .top-panel{align-content:flex-start}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:flex;height:inherit}.gd-document{width:100%;height:calc(100% - 90px)}.toolbar-panel{width:100%;display:flex;align-items:center}.signature-wrapper ::ng-deep .button{color:#3e4e5a!important}.signature-wrapper ::ng-deep .button .text{padding:0!important}@media (max-width:1037px){::ng-deep .panzoom{justify-content:unset!important}::ng-deep .logo ::ng-deep .icon{font-size:24px!important}::ng-deep .top-panel{height:120px!important}}"]
                    }] }
        ];
        /** @nocollapse */
        SignatureAppComponent.ctorParameters = function () { return [
            { type: SignatureService },
            { type: commonComponents.ModalService },
            { type: SignatureConfigService },
            { type: commonComponents.UploadFilesService },
            { type: commonComponents.NavigateService },
            { type: commonComponents.ZoomService },
            { type: commonComponents.PagePreloadService },
            { type: commonComponents.RenderPrintService },
            { type: commonComponents.PasswordService },
            { type: commonComponents.WindowService },
            { type: SelectSignatureService },
            { type: SignatureTabActivatorService },
            { type: commonComponents.HostingDynamicComponentService },
            { type: commonComponents.AddDynamicComponentService },
            { type: DragSignatureService },
            { type: commonComponents.OnCloseService },
            { type: RemoveSignatureService },
            { type: ActiveSignatureService },
            { type: commonComponents.ExceptionMessageService },
            { type: SignaturesHolderService },
            { type: commonComponents.TabActivatorService },
            { type: CopySignatureService }
        ]; };
        return SignatureAppComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SignatureListPanelComponent = /** @class */ (function () {
        function SignatureListPanelComponent(_navigateService, _selectSignatureService, _dragSignatureService, _datePipe, _signaturesHolderService) {
            this._navigateService = _navigateService;
            this._selectSignatureService = _selectSignatureService;
            this._dragSignatureService = _dragSignatureService;
            this._datePipe = _datePipe;
            this._signaturesHolderService = _signaturesHolderService;
            this.removeSignatureEvent = new core.EventEmitter();
            this.showDigitalInputs = false;
            this.digitalProps = new DigitalSign();
            this.digitalProps.date = this._datePipe.transform(new Date(), 'dd-MM-yyyy');
        }
        /**
         * @return {?}
         */
        SignatureListPanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} data
         * @return {?}
         */
        SignatureListPanelComponent.prototype.getImage = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var dataImagePngBase64 = 'data:image/png;base64,';
            return dataImagePngBase64 + data;
        };
        /**
         * @param {?} guid
         * @return {?}
         */
        SignatureListPanelComponent.prototype.deleteSign = /**
         * @param {?} guid
         * @return {?}
         */
        function (guid) {
            this.removeSignatureEvent.emit(guid);
        };
        /**
         * @return {?}
         */
        SignatureListPanelComponent.prototype.isDigital = /**
         * @return {?}
         */
        function () {
            return SignatureType.DIGITAL.id === this.signatureType;
        };
        /**
         * @private
         * @param {?} sign
         * @return {?}
         */
        SignatureListPanelComponent.prototype.selectSignature = /**
         * @private
         * @param {?} sign
         * @return {?}
         */
        function (sign) {
            this._selectSignatureService.select(sign);
        };
        /**
         * @private
         * @param {?} guid
         * @return {?}
         */
        SignatureListPanelComponent.prototype.getSign = /**
         * @private
         * @param {?} guid
         * @return {?}
         */
        function (guid) {
            /** @type {?} */
            var sign = new DraggableSignature();
            sign.type = this.signatureType;
            sign.guid = guid;
            sign.position = new Position(0, 0);
            sign.pageNumber = this._navigateService.currentPage;
            return sign;
        };
        /**
         * @param {?} guid
         * @return {?}
         */
        SignatureListPanelComponent.prototype.select = /**
         * @param {?} guid
         * @return {?}
         */
        function (guid) {
            if (this.signatureType === SignatureType.DIGITAL.id) {
                this.showDigitalInputs = this.digitalId !== guid;
                this.digitalId = this.digitalId === guid ? null : guid;
            }
            else {
                /** @type {?} */
                var sign = this.getSign(guid);
                this.selectSignature(sign);
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        SignatureListPanelComponent.prototype.dragOver = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        };
        /**
         * @param {?} $event
         * @param {?} guid
         * @return {?}
         */
        SignatureListPanelComponent.prototype.dragLeave = /**
         * @param {?} $event
         * @param {?} guid
         * @return {?}
         */
        function ($event, guid) {
            this._dragSignatureService.sign = this.getSign(guid);
        };
        /**
         * @param {?} guid
         * @return {?}
         */
        SignatureListPanelComponent.prototype.selectDigital = /**
         * @param {?} guid
         * @return {?}
         */
        function (guid) {
            if (!this.isActive(guid)) {
                return;
            }
            /** @type {?} */
            var sign = this.getSign(guid);
            sign.digitalProps = this.digitalProps;
            this.selectSignature(sign);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        SignatureListPanelComponent.prototype.parseDate = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return this._datePipe.transform(value, 'dd-MM-yyyy');
        };
        /**
         * @param {?} guid
         * @return {?}
         */
        SignatureListPanelComponent.prototype.isActive = /**
         * @param {?} guid
         * @return {?}
         */
        function (guid) {
            return !this._signaturesHolderService.has(guid);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        SignatureListPanelComponent.prototype.dragStart = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.dataTransfer.setData('text', 'foo');
        };
        /**
         * @return {?}
         */
        SignatureListPanelComponent.prototype.empty = /**
         * @return {?}
         */
        function () {
            return !this.loading && (!this.signatures || this.signatures.length === 0);
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        SignatureListPanelComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (this.showDigitalInputs) {
                this.showDigitalInputs = this.signatureType === SignatureType.DIGITAL.id;
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        SignatureListPanelComponent.prototype.drop = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        };
        SignatureListPanelComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-signature-list-panel',
                        template: "<div class=\"gd-signature-list-wrapper\">\n  <div class=\"gd-signature-list-scroll\" *ngIf=\"signatures\">\n    <div class=\"gd-signature-list\" *ngIf=\"signatures\">\n      <div class=\"gd-signature\" *ngFor=\"let signature of signatures\">\n        <div class=\"gd-signature-item\" [draggable]=\"isDigital() ? false : true\"\n             (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\n             (dragleave)=\"dragLeave($event, signature.guid)\" (drop)=\"drop($event)\">\n          <div class=\"gd-signature-thumbnail\" *ngIf=\"isDigital()\" (click)=\"select(signature.guid)\">\n            <fa-icon [icon]=\"['fa','fingerprint']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n          </div>\n          <div class=\"gd-signature-thumbnail\" *ngIf=\"signature.image\">\n            <img [ngClass]=\"'gd-signature-thumbnail-' + signatureType\"\n                 [attr.src]=\"getImage(signature.image) | safeResourceHtml\"\n                 alt=\"\" [draggable]=\"false\" (click)=\"select(signature.guid)\">\n          </div>\n          <div class=\"gd-signature-title\" [ngClass]=\"signatureType\" (click)=\"select(signature.guid)\">\n            <label class=\"gd-signature-name\" [style.color]=\"signature.fontColor\">\n              {{signature.text ? signature.text : signature.name}}</label>\n          </div>\n          <div class=\"gd-signature-trash-icon\">\n            <fa-icon [icon]=\"['fas','trash']\" [class]=\"'ng-fa-icon icon'\"\n                     (click)=\"deleteSign(signature.guid)\"></fa-icon>\n          </div>\n        </div>\n        <div class=\"gd-digital-inputs\" *ngIf=\"showDigitalInputs && digitalId === signature.guid\">\n          <div class=\"gd-digital-input-wrapper\">\n            <fa-icon [icon]=\"['fas','comment']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input #reason (input)=\"digitalProps.reason = reason.value\" type=\"text\" placeholder=\"Reason\">\n          </div>\n          <div class=\"gd-digital-input-wrapper\" *ngIf=\"isPdf\">\n            <fa-icon [icon]=\"['fas','envelope']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input #contact (input)=\"digitalProps.contact = contact.value\" type=\"text\" placeholder=\"Contact\">\n          </div>\n          <div class=\"gd-digital-input-wrapper\" *ngIf=\"isPdf\">\n            <fa-icon [icon]=\"['fas','map-marker-alt']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input #address (input)=\"digitalProps.address = address.value\" type=\"text\" placeholder=\"Location\">\n          </div>\n          <div class=\"gd-digital-input-wrapper\">\n            <fa-icon [icon]=\"['fas','key']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input #password (input)=\"digitalProps.signaturePassword = password.value\" type=\"password\"\n                   placeholder=\"Password\">\n          </div>\n          <div class=\"gd-digital-input-wrapper\">\n            <fa-icon [icon]=\"['fas','calendar']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input type=\"date\" #date (input)=\"digitalProps.date=parseDate(date.value)\" placeholder=\"Date\">\n          </div>\n          <div class=\"gd-sign-digital\" [ngClass]=\"isActive(signature.guid) ? 'active' : ''\"\n               (click)=\"selectDigital(signature.guid)\">\n            <fa-icon [icon]=\"['fas','save']\"></fa-icon>\n            <span class=\"digital-apply\">Apply</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"gd-signature-empty-list\" *ngIf=\"empty()\">\n    <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    <span class=\"gd-empty-list-text\">There is no entries yet</span>\n  </div>\n</div>\n",
                        styles: [".gd-signature-list-wrapper{display:flex;flex-direction:column;flex:1;overflow:auto;height:100%}.gd-signature-list-scroll{display:block;overflow-x:hidden;overflow-y:auto!important}.gd-signature-item{width:100%;cursor:pointer;position:relative;min-height:68px;display:flex;flex-direction:row;background-color:rgba(255,255,255)}.gd-signature-item .icon{font-size:15px;color:#676767;cursor:pointer}.gd-signature-item .gd-signature-trash-icon{flex:0 0 70px;display:flex;align-items:center;justify-content:center}.gd-signature-item .gd-signature-name{max-width:130px;font-size:13px;color:rgba(0,0,0,.36);cursor:pointer;text-overflow:ellipsis;white-space:nowrap;display:block;overflow:hidden}.gd-signature-item .gd-signature-thumbnail{flex:0 0 70px;display:flex;align-items:center;justify-content:center;width:auto}.gd-signature-item .gd-signature-thumbnail .icon{font-size:30px;padding:0;margin:0;opacity:.25}.gd-signature-item .gd-signature-title{flex:1;display:flex;align-items:center;justify-content:flex-start;padding-left:7px}.gd-signature-item .gd-signature-thumbnail-hand,.gd-signature-item .gd-signature-thumbnail-image,.gd-signature-item .gd-signature-thumbnail-text{max-width:70px;height:41px}.gd-signature-item .gd-signature-thumbnail-image{min-width:41px;max-width:70px}.gd-signature-item .gd-signature-thumbnail-barCode,.gd-signature-item .gd-signature-thumbnail-qrCode{max-width:70px;height:44px}.gd-signature-item .gd-signature-thumbnail-stamp{max-width:70px;height:48px}.gd-signature-item .gd-signature-title.text{padding-left:16px}.gd-signature-list{display:flex;flex-direction:column;width:inherit;background-color:#e7e7e7}.gd-signature{display:flex;flex-direction:column;width:100%;background-color:rgba(255,255,255,.75);margin-bottom:2px}.gd-signature-empty-list{display:flex;flex-direction:column;text-align:center;color:#acacac;justify-content:center;width:350px;height:250px}.gd-signature-empty-list .icon{font-size:60px}.gd-signature-empty-list i{font-size:60px;padding:87px 97px 0}.gd-empty-list-text{padding:18px 38px 0;font-size:12px}.gd-digital-input-wrapper{margin:9px 8px 7px;display:flex;border:5px #ddd}.gd-sign-digital{height:27px;background-color:#969696;margin:9px 8px 7px;display:flex;color:#fff;font-size:13px;box-shadow:0 0 3px #ddd;cursor:pointer;padding-top:5px;padding-left:10px}.digital-apply{padding-left:10px}.gd-sign-digital.active{background-color:#25c2d4}.gd-digital-inputs input{width:100%;height:27px;padding-left:28px}.gd-digital-inputs .icon{position:absolute;font-size:12px;margin:7px 0 7px 7px;color:#ccc!important}@media (max-width:1037px){.gd-signature-item .gd-signature-name{font-size:13px}.gd-signature-item .icon{font-size:15px}.gd-signature-thumbnail-hand,.gd-signature-thumbnail-image,.gd-signature-thumbnail-text{margin:0}.gd-signature-thumbnail-image{width:44px;height:44px}.gd-signature-thumbnail-digital .icon{font-size:30px!important}.gd-digital-inputs .icon{font-size:13px}}"]
                    }] }
        ];
        /** @nocollapse */
        SignatureListPanelComponent.ctorParameters = function () { return [
            { type: commonComponents.NavigateService },
            { type: SelectSignatureService },
            { type: DragSignatureService },
            { type: common.DatePipe },
            { type: SignaturesHolderService }
        ]; };
        SignatureListPanelComponent.propDecorators = {
            signatures: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            signatureType: [{ type: core.Input }],
            isPdf: [{ type: core.Input }],
            loading: [{ type: core.Input }],
            removeSignatureEvent: [{ type: core.Output }]
        };
        return SignatureListPanelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SignatureTabComponent = /** @class */ (function () {
        function SignatureTabComponent(_tabActivatorService, _modalService, _excMessageService) {
            var _this = this;
            this._tabActivatorService = _tabActivatorService;
            this._modalService = _modalService;
            this._excMessageService = _excMessageService;
            this.disabled = false;
            this.activeTab = new core.EventEmitter();
            this.active = false;
            this.showToolTip = false;
            this._tabActivatorService.activeTabChange.subscribe((/**
             * @param {?} tabId
             * @return {?}
             */
            function (tabId) {
                _this.activation(tabId);
            }));
        }
        /**
         * @private
         * @param {?} tabId
         * @return {?}
         */
        SignatureTabComponent.prototype.activation = /**
         * @private
         * @param {?} tabId
         * @return {?}
         */
        function (tabId) {
            if (this.id === tabId) {
                this.active = !this.active;
                if (this.active) {
                    this.activeTab.emit(this.id);
                }
                else {
                    this.activeTab.emit("");
                }
            }
            else {
                this.active = false;
            }
        };
        /**
         * @return {?}
         */
        SignatureTabComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        SignatureTabComponent.prototype.toggleTab = /**
         * @return {?}
         */
        function () {
            if (this.disabled) {
                this._modalService.open(commonComponents.CommonModals.ErrorMessage);
                this._excMessageService.changeMessage("Please open document first");
                return;
            }
            this._tabActivatorService.changeActiveTab(this.id);
        };
        SignatureTabComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-signature-tab',
                        template: "<div class=\"gd-tab\" (mousedown)=\"toggleTab()\" gdTooltip\n     (showToolTip)=\"showToolTip = $event\" [ngClass]=\"(active) ? 'active' : ''\">\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\"\n              *ngIf=\"tooltip\"></gd-tooltip>\n</div>\n",
                        styles: [".gd-tab{font-size:14px;color:#3e4e5a;cursor:pointer;display:flex;align-items:center;justify-content:center;min-width:36px;height:36px;text-align:center;position:relative;white-space:nowrap;padding:0!important;margin:0 10px}.gd-tab.active{background-color:#acacac;color:#fff!important;font-weight:700}.gd-tab ::ng-deep .tooltip{font-size:12px;margin:20px -57px}.gd-tab .title{margin:auto 23px}@media (max-width:1037px){.gd-tab{font-size:20px}}"]
                    }] }
        ];
        /** @nocollapse */
        SignatureTabComponent.ctorParameters = function () { return [
            { type: SignatureTabActivatorService },
            { type: commonComponents.ModalService },
            { type: commonComponents.ExceptionMessageService }
        ]; };
        SignatureTabComponent.propDecorators = {
            id: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            tooltip: [{ type: core.Input }],
            activeTab: [{ type: core.Output }]
        };
        return SignatureTabComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NewBarQrCodeComponent = /** @class */ (function () {
        function NewBarQrCodeComponent(_signatureService, _elementRef) {
            var _this = this;
            this._signatureService = _signatureService;
            this._elementRef = _elementRef;
            this.closePanel = new core.EventEmitter();
            this.subject = new rxjs.Subject();
            this.subject.pipe(operators.debounceTime(500)).subscribe((/**
             * @param {?} text
             * @return {?}
             */
            function (text) {
                _this.saveCode(text, true);
            }));
        }
        /**
         * @private
         * @param {?} text
         * @param {?} temp
         * @return {?}
         */
        NewBarQrCodeComponent.prototype.saveCode = /**
         * @private
         * @param {?} text
         * @param {?} temp
         * @return {?}
         */
        function (text, temp) {
            var _this = this;
            if (text) {
                this._signatureService.getCode(text, temp, this.type).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    _this.encodedImage = data.encodedImage;
                    if (!temp) {
                        _this.closePanel.emit(true);
                    }
                }));
            }
            else {
                this.clean();
            }
        };
        /**
         * @private
         * @return {?}
         */
        NewBarQrCodeComponent.prototype.clean = /**
         * @private
         * @return {?}
         */
        function () {
            this.encodedImage = null;
        };
        /**
         * @return {?}
         */
        NewBarQrCodeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.clean();
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var element = _this._elementRef.nativeElement.querySelector("#text-input");
                element.focus();
            }), 100);
        };
        /**
         * @param {?} text
         * @return {?}
         */
        NewBarQrCodeComponent.prototype.addSign = /**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            this.saveCode(text, false);
        };
        /**
         * @param {?} text
         * @return {?}
         */
        NewBarQrCodeComponent.prototype.saveTemp = /**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            this.subject.next(text);
        };
        /**
         * @return {?}
         */
        NewBarQrCodeComponent.prototype.getData = /**
         * @return {?}
         */
        function () {
            return 'data:image/png;base64,' + this.encodedImage;
        };
        NewBarQrCodeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-new-bar-qr-code',
                        template: "<div class=\"gd-qr-container\">\n  <div class=\"gd-qr-preview-container\">\n    <img class=\"gd-signature-thumbnail-image\" [attr.src]=\"getData()\" alt *ngIf=\"encodedImage\">\n    <div class=\"gd-empty-code\" *ngIf=\"!encodedImage\">\n      <fa-icon [icon]=\"['fa',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    </div>\n  </div>\n  <div class=\"new-signature-input-group\">\n    <input type=\"text\" class=\"gd-qr-property\" #text (keyup)=\"saveTemp(text.value)\" (keyup.enter)=\"addSign(text.value)\"\n           placeholder=\"{{name}}\" id=\"text-input\"/>\n    <div class=\"gd-add-optical\" [ngClass]=\"text.value ? 'active' : 'inactive'\" (click)=\"addSign(text.value)\">\n      <fa-icon [icon]=\"['fa','plus']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    </div>\n  </div>\n</div>\n",
                        styles: [".gd-sign-digital.active{background-color:#3787f5}.gd-sign-digital{height:27px;background-color:#969696;margin:9px 8px 7px;text-align:center;color:#fff;font-size:13px;box-shadow:0 0 3px #ddd;cursor:pointer;padding-top:5px}.gd-qr-container{font-family:\"Open Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;background-color:#e7e7e7}.gd-qr-container input:focus{border:2px solid #00c4d7;transition:border-color .3s linear}.gd-qr-preview-container{text-align:center;background-color:#fff;margin-bottom:1px;height:350px}.gd-qr-preview-container .gd-empty-code{color:#ccc;font-size:60px;width:350px;height:350px;justify-content:center;display:flex;align-items:center}.gd-qr-preview-container .gd-signature-thumbnail-image{min-width:41px;width:100%;height:100%;margin:0}.new-signature-input-group{display:flex;flex-direction:row;align-items:center;height:70px;background-color:#fff;justify-content:center}.gd-qr-property{font-size:12px;width:80%;border:2px solid #ddd;padding:5px;outline:0;color:#3a4e5b}.gd-add-optical{width:32px;height:29px;display:flex;justify-content:center;align-items:center;background-color:#3787f5;cursor:pointer}.gd-add-optical .icon{color:#fff;line-height:28px}.gd-add-optical.active{background-color:#25c2d4}.gd-add-optical.inactive{background-color:#646464}.gd-add-optical:hover{box-shadow:transparent 0 0 3px}@media (max-width:1037px){.gd-qr-container{margin:0 13px 0 12px}}"]
                    }] }
        ];
        /** @nocollapse */
        NewBarQrCodeComponent.ctorParameters = function () { return [
            { type: SignatureService },
            { type: core.ElementRef }
        ]; };
        NewBarQrCodeComponent.propDecorators = {
            type: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            name: [{ type: core.Input }],
            closePanel: [{ type: core.Output }]
        };
        return NewBarQrCodeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UploadSignatureComponent = /** @class */ (function () {
        function UploadSignatureComponent(_signatureService) {
            this._signatureService = _signatureService;
            this.closePanel = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        UploadSignatureComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} files
         * @return {?}
         */
        UploadSignatureComponent.prototype.handleFileInput = /**
         * @param {?} files
         * @return {?}
         */
        function (files) {
            this.addFiles(files);
        };
        /**
         * @param {?} files
         * @return {?}
         */
        UploadSignatureComponent.prototype.addFiles = /**
         * @param {?} files
         * @return {?}
         */
        function (files) {
            var _this = this;
            /** @type {?} */
            var data = new FileListWithParams(files, this.signatureType);
            this._signatureService.uploadSignature(data, this.rewrite).subscribe((/**
             * @return {?}
             */
            function () {
                _this.closePanel.emit(true);
            }));
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        UploadSignatureComponent.prototype.uploadFiles = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.addFiles($event);
        };
        UploadSignatureComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-upload-signature',
                        template: "<div class=\"gd-upload-signature\" gdDndSignature (files)=\"uploadFiles($event)\">\n  <div class=\"gd-upload-inputs\">\n    <input type=\"file\" (change)=\"handleFileInput($event.target.files)\"/>\n    <fa-icon [icon]=\"['fas','folder-open']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    <div class=\"gd-upload-title\">\n      <p class=\"text\">Click\n        <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon>\n        to open file\n      </p>\n      <p class=\"text\">Or drop file here</p>\n    </div>\n  </div>\n</div>\n",
                        styles: [".gd-upload-inputs{height:350px;text-align:center;display:flex;flex-direction:column;justify-content:center;align-content:center;background-color:#fff}.gd-upload-inputs .icon{font-size:52px;color:#959da5}.gd-upload-inputs input{opacity:0;position:absolute;cursor:pointer;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:203px}.gd-upload-title{color:#bababa;font-size:13px;margin:10px 0 0}.text{font-size:12px;text-align:center}@media (max-width:1037px){.gd-upload-inputs{width:-webkit-fill-available}.gd-upload-inputs input{width:-webkit-fill-available;height:201px}}"]
                    }] }
        ];
        /** @nocollapse */
        UploadSignatureComponent.ctorParameters = function () { return [
            { type: SignatureService }
        ]; };
        UploadSignatureComponent.propDecorators = {
            signatureType: [{ type: core.Input }],
            rewrite: [{ type: core.Input }],
            closePanel: [{ type: core.Output }]
        };
        return UploadSignatureComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DndSignatureDirective = /** @class */ (function (_super) {
        __extends(DndSignatureDirective, _super);
        function DndSignatureDirective(_uploadFilesService) {
            var _this = _super.call(this, _uploadFilesService) || this;
            _this.files = new core.EventEmitter();
            return _this;
        }
        /**
         * @param {?} evt
         * @return {?}
         */
        DndSignatureDirective.prototype.onDrop = /**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            /** @type {?} */
            var files = evt.dataTransfer.files;
            if (files.length > 0) {
                this.active = false;
                this.files.emit(files);
            }
        };
        DndSignatureDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[gdDndSignature]'
                    },] }
        ];
        /** @nocollapse */
        DndSignatureDirective.ctorParameters = function () { return [
            { type: commonComponents.UploadFilesService }
        ]; };
        DndSignatureDirective.propDecorators = {
            files: [{ type: core.Output }],
            onDrop: [{ type: core.HostListener, args: ['drop', ['$event'],] }]
        };
        return DndSignatureDirective;
    }(commonComponents.DndDirective));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContextMenuComponent = /** @class */ (function () {
        function ContextMenuComponent(_windowService) {
            var _this = this;
            this._windowService = _windowService;
            this.formatting = commonComponents.Formatting.default();
            this.lock = false;
            this.translation = 0;
            this.changeFormatting = new core.EventEmitter();
            this.removeSign = new core.EventEmitter();
            this.copySign = new core.EventEmitter();
            this.lockOut = new core.EventEmitter();
            this.isMobile = _windowService.isMobile();
            _windowService.onResize.subscribe((/**
             * @param {?} w
             * @return {?}
             */
            function (w) {
                _this.isMobile = _windowService.isMobile();
            }));
        }
        /**
         * @return {?}
         */
        ContextMenuComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        ContextMenuComponent.prototype.saveChanges = /**
         * @return {?}
         */
        function () {
            this.changeFormatting.emit(this.formatting);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        ContextMenuComponent.prototype.selectFontSize = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.formatting.fontSize = $event;
            this.saveChanges();
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        ContextMenuComponent.prototype.selectFont = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.formatting.font = $event;
            this.saveChanges();
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        ContextMenuComponent.prototype.selectColor = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.formatting.color = $event;
            this.saveChanges();
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        ContextMenuComponent.prototype.toggleBold = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.formatting.bold = $event;
            this.saveChanges();
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        ContextMenuComponent.prototype.toggleItalic = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.formatting.italic = $event;
            this.saveChanges();
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        ContextMenuComponent.prototype.toggleUnderline = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.formatting.underline = $event;
            this.saveChanges();
        };
        /**
         * @return {?}
         */
        ContextMenuComponent.prototype.deleteSign = /**
         * @return {?}
         */
        function () {
            this.removeSign.emit(true);
        };
        /**
         * @return {?}
         */
        ContextMenuComponent.prototype.toggleLock = /**
         * @return {?}
         */
        function () {
            this.lock = !this.lock;
            this.lockOut.emit(this.lock);
        };
        /**
         * @return {?}
         */
        ContextMenuComponent.prototype.onCopySign = /**
         * @return {?}
         */
        function () {
            this.copySign.emit(true);
        };
        ContextMenuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-context-menu',
                        template: "<div class=\"gd-context-menu\" [ngStyle]=\"isMobile ? null : {transform: 'translateX(' + translation + 'px)'}\"\n     [ngClass]=\"topPosition > 10 ? 'gd-context-menu-top' : 'gd-context-menu-bottom'\">\n  <gd-button [icon]=\"'arrows-alt'\" [class]=\"'ng-fa-icon icon arrows'\" [iconSize]=\"'sm'\"></gd-button>\n  <gd-text-menu *ngIf=\"textMenu\" [blur]=\"isMobile\" [color]=\"formatting.color\" [bold]=\"formatting.bold\"\n                [font]=\"formatting.font\" [fontSize]=\"formatting.fontSize\" [italic]=\"formatting.italic\"\n                [underline]=\"formatting.underline\" (outBold)=\"toggleBold($event)\"\n                (outUnderline)=\"toggleUnderline($event)\" (outItalic)=\"toggleItalic($event)\"\n                (outColor)=\"selectColor($event)\" (outFont)=\"selectFont($event)\"\n                (outFontSize)=\"selectFontSize($event)\"></gd-text-menu>\n  <gd-button [icon]=\"lock ? 'lock' : 'unlock'\" [class]=\"'ng-fa-icon icon'\" (click)=\"toggleLock()\"></gd-button>\n  <gd-button [icon]=\"'copy'\" [class]=\"'ng-fa-icon icon'\" (click)=\"onCopySign()\"></gd-button>\n  <gd-button [icon]=\"'trash'\" [class]=\"'ng-fa-icon icon'\" [iconSize]=\"'sm'\" (click)=\"deleteSign()\"></gd-button>\n</div>\n",
                        styles: [".gd-context-menu-top{top:-44px}.gd-context-menu-bottom{bottom:-40px}.gd-context-menu{box-shadow:rgba(0,0,0,.52) 0 0 5px;background-color:#fff;position:absolute;left:0;right:0;margin:auto;cursor:default;width:max-content;width:-moz-max-content;width:-webkit-max-content;display:flex;flex-direction:row;z-index:999}.gd-context-menu .arrows{cursor:move}.gd-context-menu ::ng-deep .active{background-color:#e7e7e7}.gd-context-menu ::ng-deep .icon-button{margin:0!important}@media (max-width:1037px){.gd-context-menu-top{top:-34px}}"]
                    }] }
        ];
        /** @nocollapse */
        ContextMenuComponent.ctorParameters = function () { return [
            { type: commonComponents.WindowService }
        ]; };
        ContextMenuComponent.propDecorators = {
            formatting: [{ type: core.Input }],
            textMenu: [{ type: core.Input }],
            topPosition: [{ type: core.Input }],
            lock: [{ type: core.Input }],
            translation: [{ type: core.Input }],
            changeFormatting: [{ type: core.Output }],
            removeSign: [{ type: core.Output }],
            copySign: [{ type: core.Output }],
            lockOut: [{ type: core.Output }]
        };
        return ContextMenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CanvasComponent = /** @class */ (function () {
        function CanvasComponent(_windowService) {
            var _this = this;
            this._windowService = _windowService;
            this._isDragged = false;
            this.isDesktop = _windowService.isDesktop();
            _windowService.onResize.subscribe((/**
             * @param {?} w
             * @return {?}
             */
            function (w) {
                _this.isDesktop = _windowService.isDesktop();
            }));
        }
        /**
         * @return {?}
         */
        CanvasComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this._ctx = this.canvas.nativeElement.getContext('2d');
        };
        /**
         * @param {?} e
         * @return {?}
         */
        CanvasComponent.prototype.onMouseDown = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            /** @type {?} */
            var pos;
            if (this.isDesktop) {
                pos = { x: e.offsetX, y: e.offsetY };
            }
            else {
                /** @type {?} */
                var wEvent = (/** @type {?} */ (window.event));
                pos = { x: wEvent.offsetX, y: wEvent.offsetY };
            }
            e.preventDefault();
            this._isDragged = true;
            this._ctx.beginPath();
            this._ctx.moveTo(pos.x, pos.y);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        CanvasComponent.prototype.onMouseUp = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.preventDefault();
            this._isDragged = false;
        };
        /**
         * @param {?} e
         * @return {?}
         */
        CanvasComponent.prototype.onMouseMove = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            /** @type {?} */
            var pos;
            if (this.isDesktop) {
                pos = { x: e.offsetX, y: e.offsetY };
            }
            else {
                /** @type {?} */
                var wEvent = (/** @type {?} */ (window.event));
                pos = { x: wEvent.offsetX, y: wEvent.offsetY };
            }
            e.preventDefault();
            if (this._isDragged) {
                this._ctx.lineTo(pos.x, pos.y);
                this._ctx.stroke();
            }
        };
        /**
         * @param {?} color
         * @return {?}
         */
        CanvasComponent.prototype.setColor = /**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            if (this._ctx) {
                this._ctx.strokeStyle = color;
            }
        };
        /**
         * @return {?}
         */
        CanvasComponent.prototype.getImage = /**
         * @return {?}
         */
        function () {
            return this.canvas.nativeElement.toDataURL('image/png');
        };
        /**
         * @return {?}
         */
        CanvasComponent.prototype.clear = /**
         * @return {?}
         */
        function () {
            this.canvas.nativeElement.width = this.canvas.nativeElement.width;
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        CanvasComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            this.setColor(this.color);
        };
        /**
         * @return {?}
         */
        CanvasComponent.prototype.getWidth = /**
         * @return {?}
         */
        function () {
            return this.isDesktop ? 1079 : this._windowService.getWidth();
        };
        /**
         * @return {?}
         */
        CanvasComponent.prototype.getHeight = /**
         * @return {?}
         */
        function () {
            return this.isDesktop ? 540 : this._windowService.getHeight();
        };
        CanvasComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-canvas',
                        template: "<div class=\"bc-paint-container\">\n  <div class=\"bc-paint-canvas-container\">\n    <canvas #canvas (mousedown)=\"onMouseDown($event)\" (mousemove)=\"onMouseMove($event)\"\n            (mouseup)=\"onMouseUp($event)\" (mouseleave)=\"onMouseUp($event)\" [width]=\"getWidth()\"\n            [height]=\"getHeight()\" (panstart)=\"onMouseDown($event)\" (panmove)=\"onMouseMove($event)\"\n            (panend)=\"onMouseUp($event)\"></canvas>\n  </div>\n</div>\n",
                        styles: [".bc-paint-canvas-container,.bc-paint-container{width:100%;height:100%}@media (max-width:1037px){.bc-paint-canvas-container>canvas{width:100%;height:100%;border:0}}"]
                    }] }
        ];
        /** @nocollapse */
        CanvasComponent.ctorParameters = function () { return [
            { type: commonComponents.WindowService }
        ]; };
        CanvasComponent.propDecorators = {
            color: [{ type: core.Input }],
            canvas: [{ type: core.ViewChild, args: ['canvas', { static: true },] }]
        };
        return CanvasComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ActiveCanvasService = /** @class */ (function () {
        function ActiveCanvasService() {
            this._observer = new rxjs.Subject();
            this._activeChange = this._observer.asObservable();
        }
        Object.defineProperty(ActiveCanvasService.prototype, "activeChange", {
            get: /**
             * @return {?}
             */
            function () {
                return this._activeChange;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} signId
         * @return {?}
         */
        ActiveCanvasService.prototype.changeActive = /**
         * @param {?} signId
         * @return {?}
         */
        function (signId) {
            this._observer.next(signId);
        };
        return ActiveCanvasService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RemoveCanvasService = /** @class */ (function () {
        function RemoveCanvasService() {
            this._observer = new rxjs.Subject();
            this._removeCanvas = this._observer.asObservable();
        }
        Object.defineProperty(RemoveCanvasService.prototype, "removeCanvas", {
            get: /**
             * @return {?}
             */
            function () {
                return this._removeCanvas;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} id
         * @return {?}
         */
        RemoveCanvasService.prototype.remove = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this._observer.next(id);
        };
        return RemoveCanvasService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StampCanvasComponent = /** @class */ (function () {
        function StampCanvasComponent(_activeCanvasService, _removeCanvas, _onCloseService, _windowService) {
            var _this = this;
            this._activeCanvasService = _activeCanvasService;
            this._removeCanvas = _removeCanvas;
            this._onCloseService = _onCloseService;
            this._windowService = _windowService;
            this.colorPickerBG = false;
            this.colorPickerC = false;
            this.borderWidth = Border.widthOptions();
            this._onCloseService.onClose.subscribe((/**
             * @param {?} c
             * @return {?}
             */
            function (c) {
                _this.colorPickerC = false;
                _this.colorPickerBG = false;
            }));
            this._activeCanvasService.activeChange.subscribe((/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                _this.active = _this.id === id;
            }));
            this.isMobile = _windowService.isMobile();
            _windowService.onResize.subscribe((/**
             * @param {?} w
             * @return {?}
             */
            function (w) {
                _this.isMobile = _windowService.isMobile();
            }));
        }
        Object.defineProperty(StampCanvasComponent.prototype, "ctx", {
            get: /**
             * @return {?}
             */
            function () {
                return this._ctx;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        StampCanvasComponent.prototype.activation = /**
         * @return {?}
         */
        function () {
            this._activeCanvasService.changeActive(this.id);
        };
        /**
         * @return {?}
         */
        StampCanvasComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        StampCanvasComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this._ctx = this.canvas.nativeElement.getContext('2d');
            this.redrawCanvas();
        };
        /**
         * @return {?}
         */
        StampCanvasComponent.prototype.redrawCanvas = /**
         * @return {?}
         */
        function () {
            this.refreshRadius();
            this.drawCircle();
            if (this.props.text) {
                if (this.theFirst) {
                    this._ctx.fillStyle = this.props.textColor;
                    this._ctx.font = this.fontDecoration() + " " + this.props.fontSize + 'px ' + this.props.font;
                    this._ctx.textAlign = 'center';
                    this._ctx.fillText(this.props.text, this.props.width / 2, this.props.height / 2 + this.props.fontSize / 2);
                    if (this.props.underline) {
                        this.makeTextUnderline();
                    }
                }
                else {
                    this.drawTextCircle();
                }
            }
        };
        /**
         * @private
         * @return {?}
         */
        StampCanvasComponent.prototype.fontDecoration = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var bold = (this.props.bold) ? "bold" : "";
            /** @type {?} */
            var italic = (this.props.italic) ? "italic" : "";
            return bold + " " + italic;
        };
        /**
         * @private
         * @return {?}
         */
        StampCanvasComponent.prototype.makeTextUnderline = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var x = this.props.width / 2;
            /** @type {?} */
            var y = this.props.height / 2;
            /** @type {?} */
            var textWidth = this._ctx.measureText(this.props.text).width;
            /** @type {?} */
            var startY = y + this.props.fontSize;
            /** @type {?} */
            var endY = startY;
            /** @type {?} */
            var underlineHeight = this.props.fontSize / 15;
            if (underlineHeight < 1) {
                underlineHeight = 1;
            }
            this._ctx.beginPath();
            /** @type {?} */
            var startX = x - (textWidth / 2);
            /** @type {?} */
            var endX = x + (textWidth / 2);
            this._ctx.strokeStyle = this.props.textColor;
            this._ctx.lineWidth = underlineHeight;
            this._ctx.moveTo(startX, startY);
            this._ctx.lineTo(endX, endY);
            this._ctx.strokeStyle = 'blue';
            this._ctx.stroke();
        };
        /**
         * @private
         * @return {?}
         */
        StampCanvasComponent.prototype.drawCircle = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var backgroundColor = (this.props.backgroundColor === "") ? "rgb(255, 255, 255)" : this.props.backgroundColor;
            /** @type {?} */
            var x = this.props.width / 2;
            /** @type {?} */
            var y = this.props.height / 2;
            this._ctx.beginPath();
            this._ctx.arc(x, y, this.props.radius, 0, 2 * Math.PI);
            this._ctx.lineWidth = this.props.strokeWidth;
            this._ctx.strokeStyle = this.props.strokeColor;
            this._ctx.stroke();
            this._ctx.fillStyle = backgroundColor;
            this._ctx.fill();
            this._ctx.closePath();
        };
        /**
         * @private
         * @return {?}
         */
        StampCanvasComponent.prototype.drawTextCircle = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var x = this.props.width / 2;
            /** @type {?} */
            var y = this.props.height / 2;
            this._ctx.save();
            this._ctx.translate(x, y);
            this._ctx.rotate(Math.PI / 2);
            this._ctx.fillStyle = this.props.textColor;
            this._ctx.font = this.fontDecoration() + " " + this.props.fontSize + 'px ' + this.props.font;
            /** @type {?} */
            var num = this.props.textExpansion + (this.props.fontSize / 100);
            /** @type {?} */
            var rad = this.props.radius - (this.props.fontSize / 2);
            for (var i = 0; i < this.props.textRepeat; i++) {
                for (var j = 0; j < this.props.text.length; j++) {
                    this._ctx.save();
                    this._ctx.rotate(j * num + num * this.props.text.length * i);
                    this._ctx.fillText(this.props.text[j], 0, -(rad));
                    this._ctx.restore();
                }
            }
            this._ctx.restore();
        };
        /**
         * @private
         * @return {?}
         */
        StampCanvasComponent.prototype.refreshRadius = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.props.strokeWidth > 1) {
                this.props.radius = (this.props.width / 2) - (this.props.strokeWidth / 2);
            }
            else {
                this.props.radius = (this.props.width / 2);
            }
        };
        /**
         * @param {?} $event
         * @param {?} bg
         * @return {?}
         */
        StampCanvasComponent.prototype.toggleColorPicker = /**
         * @param {?} $event
         * @param {?} bg
         * @return {?}
         */
        function ($event, bg) {
            $event.preventDefault();
            $event.stopPropagation();
            if (bg) {
                this.colorPickerBG = !this.colorPickerBG;
            }
            else {
                this.colorPickerC = !this.colorPickerC;
            }
        };
        /**
         * @param {?} bg
         * @param {?} $event
         * @return {?}
         */
        StampCanvasComponent.prototype.selectColor = /**
         * @param {?} bg
         * @param {?} $event
         * @return {?}
         */
        function (bg, $event) {
            if (bg) {
                this.props.backgroundColor = $event;
                this.colorPickerBG = false;
            }
            else {
                this.props.strokeColor = $event;
                this.colorPickerC = false;
            }
            this.redrawCanvas();
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        StampCanvasComponent.prototype.selectBorderWidth = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.props.strokeWidth = $event.value;
            this.redrawCanvas();
        };
        /**
         * @return {?}
         */
        StampCanvasComponent.prototype.deleteCanvas = /**
         * @return {?}
         */
        function () {
            this._removeCanvas.remove(this.id);
            this.redrawCanvas();
        };
        /**
         * @return {?}
         */
        StampCanvasComponent.prototype.getLeft = /**
         * @return {?}
         */
        function () {
            return (this.width - this.props.width) / 2;
        };
        /**
         * @return {?}
         */
        StampCanvasComponent.prototype.getTop = /**
         * @return {?}
         */
        function () {
            return (this.height - (this.isMobile ? 62 : 0) - this.props.height) / 2 - this.calcDiff();
        };
        /**
         * @private
         * @return {?}
         */
        StampCanvasComponent.prototype.calcDiff = /**
         * @private
         * @return {?}
         */
        function () {
            return (this.active && !this.isMobile) ? 37 : 0;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        StampCanvasComponent.prototype.resize = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.props.width += $event;
            this.props.height += $event;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        StampCanvasComponent.prototype.closeColorPickerBG = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.colorPickerBG = !$event;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        StampCanvasComponent.prototype.closeColorPickerC = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.colorPickerC = !$event;
        };
        /**
         * @return {?}
         */
        StampCanvasComponent.prototype.getTranslation = /**
         * @return {?}
         */
        function () {
            this.refreshRadius();
            /** @type {?} */
            var menuWidth = 148 * 0.5;
            return this.props.radius < menuWidth ? (menuWidth - this.props.radius) : (this.props.radius - menuWidth);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        StampCanvasComponent.prototype.inactive = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this._activeCanvasService.changeActive(null);
        };
        StampCanvasComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-stamp-canvas',
                        template: "<div [clickOutsideEnabled]=\"active\" [clickOutsideEvents]=\"'mousedown'\"\n     (clickOutside)=\"inactive($event)\">\n  <div class=\"gd-stamp-box\" [style.left.px]=\"getLeft()\" [style.top.px]=\"getTop()\" [style.z-index]=\"props.zIndex\">\n    <div class=\"gd-context-menu\" *ngIf=\"active\" [ngStyle]=\"isMobile ? null : {transform: 'translateX(' + getTranslation() + 'px)'}\">\n      <gd-button name=\"button\" class=\"first-element\" [icon]=\"'fill-drip'\" [tooltip]=\"'Color'\" (click)=\"toggleColorPicker($event, true)\">\n        <div class=\"bg-color-pic\" [style.background-color]=\"props.backgroundColor\"></div>\n      </gd-button>\n      <gd-color-picker [isOpen]=\"colorPickerBG\" (closeOutside)=\"closeColorPickerBG($event)\"\n                       [className]=\"'palette'\"\n                       (selectedColor)=\"selectColor(true, $event)\"></gd-color-picker>\n      <gd-select class=\"csg-border-width\" [options]=\"borderWidth\" (selected)=\"selectBorderWidth($event)\"\n                 [showSelected]=\"{name: props.strokeWidth + 'px', value: props.strokeWidth}\"></gd-select>\n      <gd-button name=\"button\" [icon]=\"'square'\" [iconRegular]=\"true\" [tooltip]=\"'Color'\"\n                 (click)=\"toggleColorPicker($event, false)\" class=\"color-for-shape\">\n        <div class=\"bg-color-pic\" [style.background-color]=\"props.strokeColor\"></div>\n      </gd-button>\n      <gd-color-picker [isOpen]=\"colorPickerC\" (closeOutside)=\"closeColorPickerC($event)\"\n                       [className]=\"'palette'\"\n                       (selectedColor)=\"selectColor(false, $event)\"></gd-color-picker>\n      <gd-button name=\"button\" class=\"stamp-trash\" [icon]=\"'trash'\" [tooltip]=\"'Delete'\" [iconSize]=\"'sm'\" (click)=\"deleteCanvas()\">\n      </gd-button>\n    </div>\n    <div class=\"csg-bounding-box\" [ngClass]=\"active ? 'active' : ''\" [style.width.px]=\"props.width\"\n         [style.height.px]=\"props.height\">\n      <canvas #canvas (click)=\"activation()\" class=\"csg-preview\" [width]=\"props.width\" [height]=\"props.height\"></canvas>\n      <gd-resizing [init]=\"false\" [id]=\"999\" (offsetX)=\"resize($event)\" [se]=\"true\"\n                   (release)=\"redrawCanvas()\" *ngIf=\"active\"></gd-resizing>\n    </div>\n  </div>\n</div>\n",
                        styles: [".gd-context-menu{display:flex;height:37px;top:-40px;padding:0;background-color:#fff;cursor:default;flex-direction:row;box-shadow:rgba(0,0,0,.52) 0 0 5px}.gd-context-menu .icon{font-size:14px;cursor:pointer;color:#3e4e5a!important}.gd-context-menu ::ng-deep .dropdown-menu{top:-120px!important;height:120px;overflow-y:auto}.gd-context-menu ::ng-deep .icon-button{margin:0!important}.gd-stamp-box{position:absolute}.palette{position:absolute;top:-190px}.csg-preview{width:100%;height:100%}.csg-bounding-box{position:absolute;background-color:unset!important}.csg-bounding-box.active{border:1px solid #679ffa}.csg-border-width{width:37px!important;height:37px!important;display:flex;justify-content:center;align-items:center}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}::ng-deep .select{min-width:unset!important}::ng-deep .selected-value{font-size:12px!important}@media (max-width:1037px){.gd-context-menu{position:fixed;bottom:0;left:0;top:unset;right:0;width:100%;height:60px;align-items:center;padding:0;margin:0;background-color:#fff;border-top:2px solid #707070}.gd-context-menu .color-for-shape{flex:1;display:flex;align-items:center;justify-content:flex-start}.gd-context-menu .stamp-trash{flex:0 0 37px;margin-right:8px}.gd-context-menu ::ng-deep .button{margin:3px!important}.gd-context-menu ::ng-deep .select{margin:3px!important}.gd-context-menu .first-element{margin-left:8px}.csg-border-width .select{width:21px}}"]
                    }] }
        ];
        /** @nocollapse */
        StampCanvasComponent.ctorParameters = function () { return [
            { type: ActiveCanvasService },
            { type: RemoveCanvasService },
            { type: commonComponents.OnCloseService },
            { type: commonComponents.WindowService }
        ]; };
        StampCanvasComponent.propDecorators = {
            id: [{ type: core.Input }],
            theFirst: [{ type: core.Input }],
            active: [{ type: core.Input }],
            props: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            canvas: [{ type: core.ViewChild, args: ['canvas', { static: true },] }]
        };
        return StampCanvasComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var $$2 = jquery;
    var TextMenuComponent = /** @class */ (function () {
        function TextMenuComponent(_onCloseService) {
            var _this = this;
            this._onCloseService = _onCloseService;
            this.decoration = true;
            this.outFontSize = new core.EventEmitter();
            this.outFont = new core.EventEmitter();
            this.outBold = new core.EventEmitter();
            this.outItalic = new core.EventEmitter();
            this.outUnderline = new core.EventEmitter();
            this.outColor = new core.EventEmitter();
            this.fontSizeOptions = commonComponents.FormattingService.getFontSizeOptions();
            this.fontOptions = commonComponents.FormattingService.getFontOptions();
            this.colorPickerShow = false;
            _onCloseService.onClose.subscribe((/**
             * @return {?}
             */
            function () {
                _this.colorPickerShow = false;
            }));
        }
        /**
         * @return {?}
         */
        TextMenuComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        TextMenuComponent.prototype.selectFontSize = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $$2(".gd-wrapper").off("keyup");
            this.outFontSize.emit($event.value);
            $$2(".gd-wrapper").on("keyup", (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var fontElements = document.getElementsByTagName("font");
                for (var i = 0, len = fontElements.length; i < len; ++i) {
                    if (fontElements[i].getAttribute('size') === "7") {
                        fontElements[i].removeAttribute("size");
                        fontElements[i].style.fontSize = $event + "px";
                    }
                }
            }));
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        TextMenuComponent.prototype.selectFont = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            event.preventDefault();
            event.stopPropagation();
            this.outFont.emit($event.value);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        TextMenuComponent.prototype.toggleColorPicker = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            this.colorPickerShow = !this.colorPickerShow;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        TextMenuComponent.prototype.selectColor = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.colorPickerShow = false;
            this.outColor.emit($event);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        TextMenuComponent.prototype.toggleBold = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.outBold.emit(!this.bold);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        TextMenuComponent.prototype.toggleItalic = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.outItalic.emit(!this.italic);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        TextMenuComponent.prototype.toggleUnderline = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.outUnderline.emit(!this.underline);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        TextMenuComponent.prototype.closePicker = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.colorPickerShow = !$event;
        };
        TextMenuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-text-menu',
                        template: "<div class=\"gd-text-menu\">\n  <gd-select class=\"format-select first-component\" [options]=\"fontOptions\"\n             (selected)=\"selectFont($event)\"\n             [showSelected]=\"{name : font, value : font}\"></gd-select>\n  <gd-select class=\"format-select\" [options]=\"fontSizeOptions\"\n             (selected)=\"selectFontSize($event)\"\n             [showSelected]=\"{name : fontSize + 'px', value : fontSize}\"></gd-select>\n  <gd-button [icon]=\"'bold'\" [tooltip]=\"'Bold'\" *ngIf=\"decoration\"\n             (click)=\"toggleBold($event)\" [toggle]=\"bold\"></gd-button>\n  <gd-button [icon]=\"'italic'\" [tooltip]=\"'Italic'\" *ngIf=\"decoration\"\n             (click)=\"toggleItalic($event)\" [toggle]=\"italic\"></gd-button>\n  <gd-button [icon]=\"'underline'\" [tooltip]=\"'Underline'\" *ngIf=\"decoration\"\n             (click)=\"toggleUnderline($event)\" [toggle]=\"underline\"></gd-button>\n  <gd-button name=\"button\" class=\"color-for-text\" [icon]=\"'font'\" [tooltip]=\"'Color'\" (click)=\"toggleColorPicker($event)\">\n    <div class=\"bg-color-pic\" [style.background-color]=\"color\"></div>\n  </gd-button>\n  <gd-color-picker [isOpen]=\"colorPickerShow\" (closeOutside)=\"closePicker($event)\"\n                   [className]=\"'palette'\"\n                   (selectedColor)=\"selectColor($event)\"></gd-color-picker>\n  <ng-content></ng-content>\n</div>\n",
                        styles: ["::ng-deep .active{background-color:#e7e7e7}.gd-text-menu{display:flex;flex-direction:row}.gd-text-menu .format-select{height:37px;display:flex;justify-content:center;align-items:center;max-width:80px;margin:0 3px}.gd-text-menu .first-component{margin-left:8px}.gd-text-menu ::ng-deep .dropdown-menu{top:40px!important;height:120px;overflow-y:auto}.gd-text-menu ::ng-deep .icon-button{margin:0!important}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}.palette{position:relative;top:40px;left:-55px;z-index:100}@media (max-width:1037px){.gd-text-menu{position:fixed;bottom:0;left:0;right:0;width:100%;height:60px;align-items:center;padding:0;margin:0;background-color:#fff;border-top:2px solid #707070}.gd-text-menu ::ng-deep .selected-value{white-space:normal!important;word-wrap:break-word}.gd-text-menu .icon{color:#fff;margin:0 9px}.gd-text-menu ::ng-deep .bcPicker-palette{left:-200px;top:-200px}.gd-text-menu .palette{top:unset;bottom:40px;left:unset;right:5px}.gd-text-menu ::ng-deep .dropdown-menu{bottom:40px;top:unset!important}.gd-text-menu ::ng-deep .button{margin:3px!important}}"]
                    }] }
        ];
        /** @nocollapse */
        TextMenuComponent.ctorParameters = function () { return [
            { type: commonComponents.OnCloseService }
        ]; };
        TextMenuComponent.propDecorators = {
            blur: [{ type: core.Input }],
            fontSize: [{ type: core.Input }],
            font: [{ type: core.Input }],
            bold: [{ type: core.Input }],
            italic: [{ type: core.Input }],
            underline: [{ type: core.Input }],
            color: [{ type: core.Input }],
            decoration: [{ type: core.Input }],
            outFontSize: [{ type: core.Output }],
            outFont: [{ type: core.Output }],
            outBold: [{ type: core.Output }],
            outItalic: [{ type: core.Output }],
            outUnderline: [{ type: core.Output }],
            outColor: [{ type: core.Output }]
        };
        return TextMenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SignatureLeftPanelComponent = /** @class */ (function () {
        function SignatureLeftPanelComponent(_signatureService) {
            this._signatureService = _signatureService;
            this.newSignatureEvent = new core.EventEmitter();
            this.showNewCode = false;
            this.showUpload = false;
            this.loading = true;
        }
        /**
         * @param {?} tabId
         * @return {?}
         */
        SignatureLeftPanelComponent.prototype.getSignatures = /**
         * @param {?} tabId
         * @return {?}
         */
        function (tabId) {
            var _this = this;
            this._signatureService.getSignatures('', tabId).subscribe((/**
             * @param {?} signatures
             * @return {?}
             */
            function (signatures) {
                _this.signatures = signatures || [];
                _this.loading = false;
            }));
        };
        /**
         * @return {?}
         */
        SignatureLeftPanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.init();
        };
        /**
         * @private
         * @return {?}
         */
        SignatureLeftPanelComponent.prototype.init = /**
         * @private
         * @return {?}
         */
        function () {
            this.loading = true;
            this.signatures = [];
            this.getSignatures(this.id);
            this.showNewCode = false;
            this.showUpload = false;
        };
        /**
         * @return {?}
         */
        SignatureLeftPanelComponent.prototype.getTitleIcon = /**
         * @return {?}
         */
        function () {
            return this.showUpload || this.showNewCode ? 'times' : 'plus';
        };
        /**
         * @return {?}
         */
        SignatureLeftPanelComponent.prototype.getTitle = /**
         * @return {?}
         */
        function () {
            if (!this.id) {
                return "";
            }
            /** @type {?} */
            var signatureType = SignatureType.getSignatureType(this.id);
            return (this.showUpload || this.showNewCode) ? signatureType.title : signatureType.name;
        };
        /**
         * @return {?}
         */
        SignatureLeftPanelComponent.prototype.getName = /**
         * @return {?}
         */
        function () {
            if (!this.id) {
                return "";
            }
            /** @type {?} */
            var signatureType = SignatureType.getSignatureType(this.id);
            return signatureType.name;
        };
        /**
         * @param {?} $event
         * @param {?} type
         * @return {?}
         */
        SignatureLeftPanelComponent.prototype.removeSignature = /**
         * @param {?} $event
         * @param {?} type
         * @return {?}
         */
        function ($event, type) {
            var _this = this;
            this._signatureService.removeSignatures($event, type).subscribe((/**
             * @return {?}
             */
            function () { return _this.getSignatures(type); }));
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        SignatureLeftPanelComponent.prototype.closeUploadPanel = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.showUpload = !$event;
            this.getSignatures(this.id);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        SignatureLeftPanelComponent.prototype.closeCodePanel = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.showNewCode = !$event;
            this.getSignatures(this.id);
        };
        /**
         * @return {?}
         */
        SignatureLeftPanelComponent.prototype.getCodeName = /**
         * @return {?}
         */
        function () {
            if (!this.id) {
                return "";
            }
            return SignatureType.QR_CODE.id === this.id ? 'Qr Code' : (SignatureType.BAR_CODE.id === this.id ? 'Bar Code' : '');
        };
        /**
         * @return {?}
         */
        SignatureLeftPanelComponent.prototype.icon = /**
         * @return {?}
         */
        function () {
            if (!this.id) {
                return "";
            }
            return SignatureType.getSignatureType(this.id).icon;
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        SignatureLeftPanelComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            this.init();
        };
        /**
         * @return {?}
         */
        SignatureLeftPanelComponent.prototype.closeNewSignature = /**
         * @return {?}
         */
        function () {
            if (SignatureType.DIGITAL.id === this.id || SignatureType.IMAGE.id === this.id) {
                this.showUpload = false;
            }
            else if (SignatureType.BAR_CODE.id === this.id || SignatureType.QR_CODE.id === this.id) {
                this.showNewCode = false;
            }
        };
        /**
         * @return {?}
         */
        SignatureLeftPanelComponent.prototype.openNewSignature = /**
         * @return {?}
         */
        function () {
            if (this.showUpload || this.showNewCode) {
                return;
            }
            if (SignatureType.DIGITAL.id === this.id || SignatureType.IMAGE.id === this.id) {
                this.showUpload = true;
            }
            else if (SignatureType.BAR_CODE.id === this.id || SignatureType.QR_CODE.id === this.id) {
                this.showNewCode = true;
            }
            else {
                this.newSignatureEvent.emit(this.id);
            }
        };
        SignatureLeftPanelComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-signature-left-panel',
                        template: "<gd-left-side-bar [showSpinner]=\"loading\">\n  <div class=\"tab-content\">\n    <div class=\"gd-signature-context-panel\">\n      <div class=\"gd-signature-context-pane-wrapper\">\n        <div class=\"signature-title-block\"> <!--for safari-->\n          <div class=\"gd-signature-list-title\" *ngIf=\"showNewCode || showUpload\">\n            <div class=\"gd-signature-context-panel-title\">{{getTitle()}}</div>\n            <div class=\"gd-signature-title-icon\">\n              <fa-icon [icon]=\"['fa','times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"closeNewSignature()\"></fa-icon>\n            </div>\n          </div>\n        </div>\n        <gd-upload-signature (closePanel)=\"closeUploadPanel($event)\" [rewrite]=\"rewrite\" [signatureType]=\"id\"\n                             *ngIf=\"showUpload\"></gd-upload-signature>\n        <gd-new-bar-qr-code (closePanel)=\"closeCodePanel($event)\" [type]=\"id\" [icon]=\"icon()\" [name]=\"getCodeName()\"\n                            *ngIf=\"showNewCode\"></gd-new-bar-qr-code>\n        <div class=\"signature-title-block\"> <!--for safari-->\n          <div class=\"gd-signature-list-title\">\n            <div class=\"gd-signature-context-panel-title\">{{getName()}}</div>\n            <div class=\"gd-signature-title-icon\">\n              <fa-icon [icon]=\"['fa','plus']\" [class]=\"'ng-fa-icon icon'\"\n                       [ngClass]=\"showNewCode || showUpload ? 'disabled' : ''\"\n                       (click)=\"openNewSignature()\"></fa-icon>\n            </div>\n          </div>\n        </div>\n        <gd-signature-list-panel class=\"gd-signatures-scroll\" [icon]=\"icon()\" [signatureType]=\"id\"\n                                 [signatures]=\"signatures\"\n                                 (removeSignatureEvent)=\"removeSignature($event, id)\"\n                                 [isPdf]=\"isPdf\" [loading]=\"loading\"></gd-signature-list-panel>\n      </div>\n    </div>\n  </div>\n</gd-left-side-bar>\n",
                        styles: ["::ng-deep .left-panel{width:350px;height:calc(100% - 90px)}::ng-deep .gd-left-bar-fade{width:350px!important}.gd-signatures-scroll{height:calc(100% - 60px)}.tab-content{height:calc(100% - 90px);line-height:unset;position:absolute;background-color:#fff}.gd-signature-context-panel{background-color:#f3f3f3;width:350px;height:100%;position:absolute}.gd-signature-context-panel-title,.gd-signature-context-upload-title{color:#aaa;font-size:12px;font-family:Helvetica;font-weight:700;margin:5px 12px}.signature-title-block{display:block}.gd-signature-list-title{display:flex;flex-direction:row;height:70px}.gd-signature-list-title .gd-signature-title-icon{flex:0 0 70px;display:flex;align-items:center;justify-content:center}.gd-signature-list-title .gd-signature-title-icon .icon{color:#707070;cursor:pointer;font-size:12px}.gd-signature-list-title .gd-signature-title-icon .icon.disabled{color:#959da5}.gd-signature-list-title .gd-signature-context-panel-title{flex:1;display:flex;align-items:center;justify-content:flex-start}.gd-signature-context-pane-wrapper{display:flex;flex-direction:column;height:inherit;overflow:auto}@media (max-width:1037px){.tab-content{width:100%;height:calc(100% - 120px)!important}::ng-deep .left-panel{width:100%!important;overflow:auto!important;height:calc(100% - 120px)}.gd-signature-context-panel{left:0;right:0;width:auto}.gd-signature-context-panel-title{font-size:12px;line-height:18px;margin:16px 0 14px 12px}.gd-signature-context-panel-title,.gd-signature-context-upload-title{width:unset}}"]
                    }] }
        ];
        /** @nocollapse */
        SignatureLeftPanelComponent.ctorParameters = function () { return [
            { type: SignatureService }
        ]; };
        SignatureLeftPanelComponent.propDecorators = {
            rewrite: [{ type: core.Input }],
            isPdf: [{ type: core.Input }],
            id: [{ type: core.Input }],
            newSignatureEvent: [{ type: core.Output }]
        };
        return SignatureLeftPanelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HandModalComponent = /** @class */ (function () {
        function HandModalComponent(_signatureService, _tabActivationService, _modalService) {
            this._signatureService = _signatureService;
            this._tabActivationService = _tabActivationService;
            this._modalService = _modalService;
            this.defaultColor = '#000000';
            this.selectedColor = this.defaultColor;
            this.colorPickerShow = false;
        }
        /**
         * @return {?}
         */
        HandModalComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} color
         * @return {?}
         */
        HandModalComponent.prototype.selectColor = /**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            this.selectedColor = color;
            this.colorPickerShow = false;
        };
        /**
         * @param {?} canvasComponent
         * @return {?}
         */
        HandModalComponent.prototype.saveSign = /**
         * @param {?} canvasComponent
         * @return {?}
         */
        function (canvasComponent) {
            var _this = this;
            /** @type {?} */
            var img = canvasComponent.getImage();
            this._signatureService.saveImage(img).subscribe((/**
             * @return {?}
             */
            function () {
                _this._tabActivationService.changeActiveTab(SignatureType.HAND.id);
            }));
            this.clear(canvasComponent);
            this.close();
        };
        /**
         * @private
         * @return {?}
         */
        HandModalComponent.prototype.close = /**
         * @private
         * @return {?}
         */
        function () {
            this._modalService.close(commonComponents.CommonModals.DrawHandSignature);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        HandModalComponent.prototype.toggleColorPicker = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            this.colorPickerShow = !this.colorPickerShow;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        HandModalComponent.prototype.closePicker = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.colorPickerShow = !$event;
        };
        /**
         * @param {?} canvasComponent
         * @param {?} $event
         * @return {?}
         */
        HandModalComponent.prototype.onCloseOpen = /**
         * @param {?} canvasComponent
         * @param {?} $event
         * @return {?}
         */
        function (canvasComponent, $event) {
            this.clear(canvasComponent);
        };
        /**
         * @private
         * @param {?} canvasComponent
         * @return {?}
         */
        HandModalComponent.prototype.clear = /**
         * @private
         * @param {?} canvasComponent
         * @return {?}
         */
        function (canvasComponent) {
            this.selectedColor = this.defaultColor;
            canvasComponent.clear();
        };
        HandModalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-hand-modal',
                        template: "<gd-modal [id]=\"'gd-draw-hand-signature'\" [title]=\"'Draw signature'\" (visible)=\"onCloseOpen(canvasComponent, $event)\">\n  <div class=\"paint-body\">\n    <div class=\"bc-paint-header\">\n      <div class=\"bc-paint-palette\">\n        <gd-button name=\"button\" [icon]=\"'fill'\" [tooltip]=\"'Pencil color'\"\n                   (click)=\"toggleColorPicker($event)\">\n          <div class=\"bg-color-pic\" [style.background-color]=\"selectedColor\"></div>\n        </gd-button>\n        <gd-color-picker [isOpen]=\"colorPickerShow\" (closeOutside)=\"closePicker($event)\"\n                         [className]=\"'palette'\"\n                         (selectedColor)=\"selectColor($event)\"></gd-color-picker>\n      </div>\n      <div class=\"bc-paint-export\" (click)=\"saveSign(canvasComponent)\">\n        <fa-icon [icon]=\"['fa','save']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n        <span class=\"save-button\">Save</span>\n      </div>\n    </div>\n    <div class=\"gd-draw-image\">\n      <gd-canvas #canvasComponent [color]=\"selectedColor\"></gd-canvas>\n    </div>\n  </div>\n</gd-modal>\n",
                        styles: [".paint-body{width:1036px;height:561px}.paint-body ::ng-deep .button{font-size:unset!important;color:#3e4e5a!important}.paint-body ::ng-deep .button ::ng-deep .text{padding-left:0!important}.gd-draw-image{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA4UlEQVR4nO2WbQuDMAyE+///q0WhKiiacYFK7BeXK2OMJXC2SF8er2kwiTPO81St6yo5ZxmGQdsnYZwdi/6yLJICIAACIAAC4KcA6uYMgN34BmAX9QgA9atYuQGO47j6mMw4YDXPsyQ8PCqlaAsAuNAjdYC1DyDeY7MOQuoAY10L0CboO0KoAywA6NsFn26QBaUB6hFYAO8VrhEAAfC/APQ1tJXQC9CCXABsKQZAW1qpStgDwG7+kVL8dQBPAnYDQN4cwFgrvFOAfd/Fq23b9IdiHEeZpokWAF41ugKO5u7gN6EQAAAFZL5NAAAAAElFTkSuQmCC)!important;position:absolute;padding:0!important;background-color:#fff;overflow:hidden;overflow-y:auto;width:inherit}.bc-paint-header{height:60px;width:100%;display:flex;justify-content:space-between;align-items:center}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}::ng-deep .bcPicker-palette{position:absolute}.bc-paint-export{background-color:#25c2d4;margin-right:10px;width:68px;height:37px;display:flex;justify-content:space-between;color:#fff;align-items:center;cursor:pointer}.bc-paint-export .icon{display:flex;text-align:center;justify-content:center;flex:0 0 27px}.bc-paint-export .save-button{font-size:10px;display:flex;text-align:center;justify-content:center;flex:0 0 40px}@media (max-width:1037px){.paint-body{width:inherit;height:inherit}}"]
                    }] }
        ];
        /** @nocollapse */
        HandModalComponent.ctorParameters = function () { return [
            { type: SignatureService },
            { type: SignatureTabActivatorService },
            { type: commonComponents.ModalService }
        ]; };
        return HandModalComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var $$3 = jquery;
    var StampModalComponent = /** @class */ (function () {
        function StampModalComponent(_addDynamicComponentService, _activeCanvasService, _windowService, _removeCanvas, _signatureService, _tabActivationService, _modalService) {
            var _this = this;
            this._addDynamicComponentService = _addDynamicComponentService;
            this._activeCanvasService = _activeCanvasService;
            this._windowService = _windowService;
            this._removeCanvas = _removeCanvas;
            this._signatureService = _signatureService;
            this._tabActivationService = _tabActivationService;
            this._modalService = _modalService;
            this.stampCircles = new Map();
            this.textString = '';
            this.showText = false;
            this.sizeMagnifier = 40;
            this.textProps = commonComponents.Formatting.default();
            this._removeCanvas.removeCanvas.subscribe((/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                /** @type {?} */
                var componentRef = _this.stampCircles.get(id);
                componentRef.destroy();
                _this.stampCircles.delete(id);
            }));
            this.isMobile = _windowService.isMobile();
            _windowService.onResize.subscribe((/**
             * @param {?} w
             * @return {?}
             */
            function (w) {
                _this.isMobile = _windowService.isMobile();
            }));
            this._activeCanvasService.activeChange.subscribe((/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                _this.activeId = id;
            }));
        }
        /**
         * @return {?}
         */
        StampModalComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        StampModalComponent.prototype.saveSign = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var componentRef = this.stampCircles.get(this.stampCircles.size);
            /** @type {?} */
            var canvasComponent = (/** @type {?} */ (componentRef.instance));
            /** @type {?} */
            var lastProps = canvasComponent.props;
            /** @type {?} */
            var ctx = canvasComponent.ctx;
            /** @type {?} */
            var props = [];
            props.push(lastProps);
            for (var i = this.stampCircles.size - 1; i > 0; i--) {
                /** @type {?} */
                var comp = (/** @type {?} */ (this.stampCircles.get(i).instance));
                /** @type {?} */
                var canvas = comp.canvas.nativeElement;
                /** @type {?} */
                var offset = lastProps.width - comp.props.width;
                if (offset !== 0) {
                    offset = offset / 2;
                }
                ctx.drawImage(canvas, offset, offset);
                props.push(comp.props);
            }
            props.reverse();
            /** @type {?} */
            var img = canvasComponent.canvas.nativeElement.toDataURL("image/png");
            this._signatureService.saveStamp(img, props).subscribe((/**
             * @return {?}
             */
            function () {
                _this._tabActivationService.changeActiveTab(SignatureType.STAMP.id);
            }));
            this.close();
        };
        /**
         * @private
         * @return {?}
         */
        StampModalComponent.prototype.close = /**
         * @private
         * @return {?}
         */
        function () {
            this._modalService.close(commonComponents.CommonModals.DrawStampSignature);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        StampModalComponent.prototype.onCloseOpen = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if ($event) {
                this.textString = '';
                /** @type {?} */
                var props = new StampCanvasProps().init(this.isMobile);
                props.id = this.stampCircles.size + 1;
                this.addCircle(props, true);
            }
            else {
                this.clear();
            }
        };
        /**
         * @return {?}
         */
        StampModalComponent.prototype.clear = /**
         * @return {?}
         */
        function () {
            var e_1, _a;
            try {
                for (var _b = __values(this.stampCircles.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var comp = _c.value;
                    comp.destroy();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.stampCircles = new Map();
            this.showText = false;
        };
        /**
         * @private
         * @param {?} props
         * @param {?} theFirst
         * @return {?}
         */
        StampModalComponent.prototype.addCircle = /**
         * @private
         * @param {?} props
         * @param {?} theFirst
         * @return {?}
         */
        function (props, theFirst) {
            if (this.dynamicDirective) {
                /** @type {?} */
                var viewContainerRef = this.dynamicDirective.viewContainerRef;
                /** @type {?} */
                var stampCircle = this._addDynamicComponentService.addDynamicComponent(viewContainerRef, StampCanvasComponent);
                ((/** @type {?} */ (stampCircle.instance))).id = props.id;
                ((/** @type {?} */ (stampCircle.instance))).theFirst = theFirst;
                ((/** @type {?} */ (stampCircle.instance))).active = true;
                ((/** @type {?} */ (stampCircle.instance))).props = props;
                ((/** @type {?} */ (stampCircle.instance))).width = this.getWidth();
                ((/** @type {?} */ (stampCircle.instance))).height = this.getHeight();
                this.stampCircles.set(props.id, stampCircle);
                this._activeCanvasService.changeActive(props.id);
            }
        };
        /**
         * @return {?}
         */
        StampModalComponent.prototype.addCanvas = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var props = new StampCanvasProps();
            props.init(this.isMobile);
            props.id = this.stampCircles.size + 1;
            /** @type {?} */
            var componentRef = this.stampCircles.get(this.stampCircles.size);
            if (componentRef) {
                /** @type {?} */
                var lastProps = ((/** @type {?} */ (componentRef.instance))).props;
                props.width = lastProps.width + this.sizeMagnifier;
                props.height = lastProps.height + this.sizeMagnifier;
                props.zIndex = lastProps.zIndex - 1;
            }
            this.addCircle(props, false);
            this.showText = false;
        };
        /**
         * @return {?}
         */
        StampModalComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.clear();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        StampModalComponent.prototype.addText = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.textString = value;
            /** @type {?} */
            var componentRef = this.stampCircles.get(1);
            if (this.textString && componentRef) {
                /** @type {?} */
                var props = ((/** @type {?} */ (componentRef.instance))).props;
                props.text = value;
                ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
                this.showText = false;
            }
        };
        /**
         * @return {?}
         */
        StampModalComponent.prototype.toggleText = /**
         * @return {?}
         */
        function () {
            this.showText = !this.showText;
            if (this.showText) {
                this._activeCanvasService.changeActive(null);
            }
            if (this.showText) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var element = $$3("#text-input");
                    if (element) {
                        element.focus();
                    }
                }), 100);
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        StampModalComponent.prototype.toggleUnderline = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.textProps.underline = $event;
            /** @type {?} */
            var componentRef = this.stampCircles.get(1);
            if (componentRef) {
                /** @type {?} */
                var props = ((/** @type {?} */ (componentRef.instance))).props;
                props.underline = $event;
                ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        StampModalComponent.prototype.toggleBold = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.textProps.bold = $event;
            /** @type {?} */
            var componentRef = this.stampCircles.get(1);
            if (componentRef) {
                /** @type {?} */
                var props = ((/** @type {?} */ (componentRef.instance))).props;
                props.bold = $event;
                ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        StampModalComponent.prototype.toggleItalic = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.textProps.italic = $event;
            /** @type {?} */
            var componentRef = this.stampCircles.get(1);
            if (componentRef) {
                /** @type {?} */
                var props = ((/** @type {?} */ (componentRef.instance))).props;
                props.italic = $event;
                ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        StampModalComponent.prototype.selectTextColor = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.textProps.color = $event;
            /** @type {?} */
            var componentRef = this.stampCircles.get(1);
            if (componentRef) {
                /** @type {?} */
                var props = ((/** @type {?} */ (componentRef.instance))).props;
                props.textColor = $event;
                ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        StampModalComponent.prototype.selectFont = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.textProps.font = $event;
            /** @type {?} */
            var componentRef = this.stampCircles.get(1);
            if (componentRef) {
                /** @type {?} */
                var props = ((/** @type {?} */ (componentRef.instance))).props;
                props.font = $event;
                ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        StampModalComponent.prototype.selectFontSize = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.textProps.fontSize = $event;
            /** @type {?} */
            var componentRef = this.stampCircles.get(1);
            if (componentRef) {
                /** @type {?} */
                var props = ((/** @type {?} */ (componentRef.instance))).props;
                props.fontSize = $event;
                ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
            }
        };
        /**
         * @return {?}
         */
        StampModalComponent.prototype.getWidth = /**
         * @return {?}
         */
        function () {
            return this.isMobile ? this._windowService.getWidth() : 1036;
        };
        /**
         * @return {?}
         */
        StampModalComponent.prototype.getHeight = /**
         * @return {?}
         */
        function () {
            return this.isMobile ? this._windowService.getHeight() : 501;
        };
        /**
         * @return {?}
         */
        StampModalComponent.prototype.deleteText = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var componentRef = this.stampCircles.get(1);
            if (componentRef) {
                /** @type {?} */
                var props = ((/** @type {?} */ (componentRef.instance))).props;
                props.text = "";
                ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
                this.showText = false;
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        StampModalComponent.prototype.leaveText = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.showText = false;
        };
        /**
         * @return {?}
         */
        StampModalComponent.prototype.getTextWidth = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var componentRef = this.stampCircles.get(1);
            if (componentRef) {
                /** @type {?} */
                var props = ((/** @type {?} */ (componentRef.instance))).props;
                return props.radius * 2;
            }
            return 100;
        };
        StampModalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-stamp-modal',
                        template: "<gd-modal [id]=\"'gd-draw-stamp-signature'\" [title]=\"'Compose stamp'\" (visible)=\"onCloseOpen($event)\">\n  <div class=\"stamp-body\">\n    <div class=\"stamp-header\">\n      <div class=\"header-buttons\">\n        <gd-button [icon]=\"'circle'\" (click)=\"addCanvas()\" [iconRegular]=\"true\">\n          <fa-icon class=\"plus\" [icon]=\"['fas','plus']\"></fa-icon>\n        </gd-button>\n        <gd-button [icon]=\"'font'\" (click)=\"toggleText()\">\n          <fa-icon class=\"plus\" [icon]=\"['fas','plus']\"></fa-icon>\n        </gd-button>\n      </div>\n      <div class=\"stamp-export\" (click)=\"saveSign()\">\n        <fa-icon [icon]=\"['fa','save']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n        <span class=\"save-button\">Save</span>\n      </div>\n    </div>\n    <div class=\"gd-draw-stamp\" [style.width.px]=\"getWidth()\" [style.height.px]=\"getHeight()\">\n      <div gdHostDynamic [ident]=\"999999\"></div>\n      <div class=\"gd-draw-stamp-text\" *ngIf=\"showText\" [clickOutsideEnabled]=\"showText\"\n           [clickOutsideEvents]=\"'mousedown'\" (clickOutside)=\"text.value ? addText(text.value) : leaveText($event)\">\n        <div class=\"gd-text-menu-context\">\n          <gd-text-menu [blur]=\"true\" [color]=\"textProps.color\" [bold]=\"textProps.bold\"\n                        [font]=\"textProps.font\" [fontSize]=\"textProps.fontSize\" [italic]=\"textProps.italic\"\n                        [underline]=\"textProps.underline\" (outBold)=\"toggleBold($event)\"\n                        (outUnderline)=\"toggleUnderline($event)\" (outItalic)=\"toggleItalic($event)\"\n                        (outColor)=\"selectTextColor($event)\" (outFont)=\"selectFont($event)\"\n                        (outFontSize)=\"selectFontSize($event)\" [decoration]=\"false\">\n            <gd-button [icon]=\"'trash'\" [class]=\"'ng-fa-icon icon'\" [iconSize]=\"'sm'\"\n                       (click)=\"deleteText()\"></gd-button>\n          </gd-text-menu>\n        </div>\n        <input placeholder=\"Type your text\" id=\"text-input\"\n               #text (keyup.enter)=\"addText(text.value)\"\n               [style.text-decoration]=\"textProps?.underline ? 'underline' : 'unset'\"\n               [style.font-style]=\"textProps?.italic ? 'italic' : 'unset'\"\n               [style.font-weight]=\"textProps?.bold ? 'bold' : 'unset'\"\n               [style.color]=\"textProps?.color\"\n               [style.font-family]=\"textProps.font\"\n               [style.font-size.px]=\"textProps.fontSize\"\n               [value]=\"textString\" type=\"text\"\n               [style.width.px]=\"getTextWidth()\">\n      </div>\n    </div>\n  </div>\n</gd-modal>\n",
                        styles: [".stamp-body{width:1036px;height:561px}.stamp-body ::ng-deep .button{font-size:unset!important;color:#3e4e5a!important}.stamp-body ::ng-deep .button ::ng-deep .text{padding-left:0!important}.stamp-body .csg-text-input{padding:5px;background-color:#e6e6e6;position:absolute;top:120px;left:0;width:calc(100% - 10px);flex-direction:row;display:flex;z-index:99999}.stamp-body .csg-text-input::after{content:\" \";width:0;height:0;border-style:solid;border-width:0 4px 5px;border-color:transparent transparent #e6e6e6;position:absolute;top:-5px;right:110px}.stamp-body .csg-text-input input{height:20px;width:100%;padding:0;margin:0 10px 0 0}.stamp-body .csg-insert-text{width:27px;height:27px;background-color:#3787f5;margin:0}.stamp-body .csg-insert-text .icon{padding:5px;color:#fff}.stamp-header{height:60px;width:100%;display:flex;justify-content:space-between;align-items:center}.header-buttons{display:flex}.header-buttons .plus{font-size:8px;position:absolute;height:5px;width:5px;right:10px;bottom:10px}.stamp-export{background-color:#25c2d4;margin-right:10px;width:68px;height:37px;display:flex;justify-content:space-between;color:#fff;align-items:center;cursor:pointer}.stamp-export .icon{display:flex;text-align:center;justify-content:center;flex:0 0 27px}.stamp-export .save-button{font-size:10px;display:flex;text-align:center;justify-content:center;flex:0 0 40px}.gd-draw-stamp{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA4UlEQVR4nO2WbQuDMAyE+///q0WhKiiacYFK7BeXK2OMJXC2SF8er2kwiTPO81St6yo5ZxmGQdsnYZwdi/6yLJICIAACIAAC4KcA6uYMgN34BmAX9QgA9atYuQGO47j6mMw4YDXPsyQ8PCqlaAsAuNAjdYC1DyDeY7MOQuoAY10L0CboO0KoAywA6NsFn26QBaUB6hFYAO8VrhEAAfC/APQ1tJXQC9CCXABsKQZAW1qpStgDwG7+kVL8dQBPAnYDQN4cwFgrvFOAfd/Fq23b9IdiHEeZpokWAF41ugKO5u7gN6EQAAAFZL5NAAAAAElFTkSuQmCC)!important;position:absolute;padding:0!important;background-color:#fff;display:flex;justify-content:center;align-items:center}.gd-draw-stamp input{height:30px;outline:#679ffa solid 2px}.gd-draw-stamp .gd-draw-stamp-text{z-index:99999}.gd-draw-stamp .gd-text-menu-context{height:37px;top:180px;padding:0;background-color:#fff;cursor:default;position:absolute;box-shadow:rgba(0,0,0,.52) 0 0 5px}.gd-draw-stamp .gd-text-menu-context ::ng-deep .color-for-text{flex:1;display:flex;align-items:center;justify-content:flex-start}.gd-draw-stamp .gd-text-menu-context .stamp-trash{flex:0 0 37px;margin-right:8px}.gd-draw-stamp .gd-text-menu-context ::ng-deep .first-component ::ng-deep .dropdown-menu{left:8px}::ng-deep .select{color:#3e4e5a!important}::ng-deep gd-drop-down{z-index:999999!important}@media (max-width:1037px){.stamp-body{width:inherit;height:inherit}}"]
                    }] }
        ];
        /** @nocollapse */
        StampModalComponent.ctorParameters = function () { return [
            { type: commonComponents.AddDynamicComponentService },
            { type: ActiveCanvasService },
            { type: commonComponents.WindowService },
            { type: RemoveCanvasService },
            { type: SignatureService },
            { type: SignatureTabActivatorService },
            { type: commonComponents.ModalService }
        ]; };
        StampModalComponent.propDecorators = {
            dynamicDirective: [{ type: core.ViewChild, args: [commonComponents.HostDynamicDirective, { static: true },] }]
        };
        return StampModalComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} signatureConfigService
     * @return {?}
     */
    function initializeApp(signatureConfigService) {
        /** @type {?} */
        var result = (/**
         * @return {?}
         */
        function () { return signatureConfigService.load(); });
        return result;
    }
    // NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
    // @dynamic
    /**
     * @param {?} service
     * @return {?}
     */
    function setupLoadingInterceptor(service) {
        return new commonComponents.LoadingMaskInterceptorService(service);
    }
    var SignatureModule = /** @class */ (function () {
        function SignatureModule() {
            fontawesomeSvgCore.library.add(freeSolidSvgIcons.fas, freeRegularSvgIcons.far);
        }
        /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        SignatureModule.forRoot = /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        function (apiEndpoint) {
            commonComponents.Api.DEFAULT_API_ENDPOINT = apiEndpoint;
            return {
                ngModule: SignatureModule
            };
        };
        SignatureModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [SignatureAppComponent,
                            SignatureListPanelComponent,
                            SignatureTabComponent,
                            NewBarQrCodeComponent,
                            UploadSignatureComponent,
                            DndSignatureDirective,
                            Signature,
                            ContextMenuComponent,
                            CanvasComponent,
                            StampCanvasComponent,
                            TextMenuComponent,
                            SignatureLeftPanelComponent,
                            HandModalComponent,
                            StampModalComponent],
                        exports: [SignatureAppComponent,
                            SignatureListPanelComponent,
                            SignatureTabComponent,
                            NewBarQrCodeComponent,
                            UploadSignatureComponent,
                            DndSignatureDirective,
                            Signature,
                            ContextMenuComponent,
                            CanvasComponent,
                            StampCanvasComponent,
                            TextMenuComponent,
                            SignatureLeftPanelComponent,
                            HandModalComponent,
                            StampModalComponent],
                        imports: [common.CommonModule,
                            commonComponents.CommonComponentsModule,
                            http.HttpClientModule,
                            angularFontawesome.FontAwesomeModule,
                            ngClickOutside.ClickOutsideModule],
                        providers: [
                            SignatureService,
                            commonComponents.ConfigService,
                            SignatureConfigService,
                            SelectSignatureService,
                            DragSignatureService,
                            RemoveSignatureService,
                            ActiveSignatureService,
                            ActiveCanvasService,
                            RemoveCanvasService,
                            common.DatePipe,
                            SignaturesHolderService,
                            SignatureTabActivatorService,
                            CopySignatureService,
                            {
                                provide: http.HTTP_INTERCEPTORS,
                                useClass: commonComponents.ErrorInterceptorService,
                                multi: true
                            },
                            {
                                provide: core.APP_INITIALIZER,
                                useFactory: initializeApp,
                                deps: [SignatureConfigService], multi: true
                            },
                            commonComponents.LoadingMaskService,
                            {
                                provide: http.HTTP_INTERCEPTORS,
                                useFactory: setupLoadingInterceptor,
                                multi: true,
                                deps: [commonComponents.LoadingMaskService]
                            }
                        ],
                        entryComponents: [
                            Signature,
                            StampCanvasComponent
                        ]
                    },] }
        ];
        /** @nocollapse */
        SignatureModule.ctorParameters = function () { return []; };
        return SignatureModule;
    }());

    exports.ActiveCanvasService = ActiveCanvasService;
    exports.ActiveSignatureService = ActiveSignatureService;
    exports.CopySignatureService = CopySignatureService;
    exports.RemoveSignatureService = RemoveSignatureService;
    exports.SelectSignatureService = SelectSignatureService;
    exports.SignatureAppComponent = SignatureAppComponent;
    exports.SignatureConfigService = SignatureConfigService;
    exports.SignatureListPanelComponent = SignatureListPanelComponent;
    exports.SignatureModule = SignatureModule;
    exports.SignatureService = SignatureService;
    exports.SignatureTabActivatorService = SignatureTabActivatorService;
    exports.SignaturesHolderService = SignaturesHolderService;
    exports.initializeApp = initializeApp;
    exports.setupLoadingInterceptor = setupLoadingInterceptor;
    exports.ɵa = DragSignatureService;
    exports.ɵb = SignatureTabComponent;
    exports.ɵc = NewBarQrCodeComponent;
    exports.ɵd = UploadSignatureComponent;
    exports.ɵe = DndSignatureDirective;
    exports.ɵf = Signature;
    exports.ɵg = ContextMenuComponent;
    exports.ɵh = CanvasComponent;
    exports.ɵi = StampCanvasComponent;
    exports.ɵj = RemoveCanvasService;
    exports.ɵk = TextMenuComponent;
    exports.ɵl = SignatureLeftPanelComponent;
    exports.ɵm = HandModalComponent;
    exports.ɵn = StampModalComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=groupdocs.examples.angular-signature.umd.js.map
