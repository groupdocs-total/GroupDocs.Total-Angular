(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('@groupdocs.examples.angular/common-components'), require('rxjs'), require('@fortawesome/angular-fontawesome'), require('moment'), require('@angular/forms'), require('ng2-date-picker')) :
    typeof define === 'function' && define.amd ? define('@groupdocs.examples.angular/metadata', ['exports', '@angular/platform-browser', '@angular/core', '@angular/common', '@angular/common/http', '@groupdocs.examples.angular/common-components', 'rxjs', '@fortawesome/angular-fontawesome', 'moment', '@angular/forms', 'ng2-date-picker'], factory) :
    (global = global || self, factory((global.groupdocs = global.groupdocs || {}, global.groupdocs.examples = global.groupdocs.examples || {}, global.groupdocs.examples.angular = global.groupdocs.examples.angular || {}, global.groupdocs.examples.angular.metadata = {}), global.ng.platformBrowser, global.ng.core, global.ng.common, global.ng.common.http, global.commonComponents, global.rxjs, global.angularFontawesome, global.moment_, global.ng.forms, global.ng2DatePicker));
}(this, (function (exports, platformBrowser, core, common, http, commonComponents, rxjs, angularFontawesome, moment_, forms, ng2DatePicker) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
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

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MetadataService = /** @class */ (function () {
        function MetadataService(_http, _config) {
            this._http = _http;
            this._config = _config;
        }
        /**
         * @param {?} path
         * @return {?}
         */
        MetadataService.prototype.loadFiles = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            return this._http.post(this._config.getMetadataApiEndpoint() + commonComponents.Api.LOAD_FILE_TREE, { 'path': path }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        MetadataService.prototype.loadFile = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._http.post(this._config.getMetadataApiEndpoint() + commonComponents.Api.LOAD_DOCUMENT_DESCRIPTION, credentials, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        MetadataService.prototype.loadProperties = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._http.post(this._config.getMetadataApiEndpoint() + commonComponents.Api.LOAD_DOCUMENT_PROPERTIES, credentials, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        MetadataService.prototype.loadPropertiesNames = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._http.post(this._config.getMetadataApiEndpoint() + commonComponents.Api.LOAD_DOCUMENT_PROPERTIES_NAMES, credentials, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} metadataFile
         * @return {?}
         */
        MetadataService.prototype.saveProperty = /**
         * @param {?} metadataFile
         * @return {?}
         */
        function (metadataFile) {
            return this._http.post(this._config.getMetadataApiEndpoint() + commonComponents.Api.SAVE_PROPERTY, metadataFile, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} metadataFile
         * @return {?}
         */
        MetadataService.prototype.removeProperty = /**
         * @param {?} metadataFile
         * @return {?}
         */
        function (metadataFile) {
            return this._http.post(this._config.getMetadataApiEndpoint() + commonComponents.Api.REMOVE_PROPERTY, metadataFile, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} metadataFile
         * @return {?}
         */
        MetadataService.prototype.cleanMetadata = /**
         * @param {?} metadataFile
         * @return {?}
         */
        function (metadataFile) {
            return this._http.post(this._config.getMetadataApiEndpoint() + commonComponents.Api.CLEAN_METADATA, metadataFile, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} file
         * @param {?} url
         * @param {?} rewrite
         * @return {?}
         */
        MetadataService.prototype.upload = /**
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
            return this._http.post(this._config.getMetadataApiEndpoint() + commonComponents.Api.UPLOAD_DOCUMENTS, formData);
        };
        /**
         * @param {?} credentials
         * @param {?} page
         * @return {?}
         */
        MetadataService.prototype.loadPage = /**
         * @param {?} credentials
         * @param {?} page
         * @return {?}
         */
        function (credentials, page) {
            return this._http.post(this._config.getMetadataApiEndpoint() + commonComponents.Api.LOAD_DOCUMENT_PAGE, {
                'guid': credentials.guid,
                'password': credentials.password,
                'page': page
            }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        MetadataService.prototype.getDownloadUrl = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._config.getMetadataApiEndpoint() + commonComponents.Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        MetadataService.prototype.exportProperties = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._http.post(this._config.getMetadataApiEndpoint() + commonComponents.Api.EXPORT_METADATA, credentials, commonComponents.Api.httpOptionsJsonResponseTypeBlob);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        MetadataService.prototype.loadPrint = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._http.post(this._config.getMetadataApiEndpoint() + commonComponents.Api.LOAD_PRINT, {
                'guid': credentials.guid,
                'password': credentials.password,
            }, commonComponents.Api.httpOptionsJson);
        };
        MetadataService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MetadataService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ MetadataService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MetadataService_Factory() { return new MetadataService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: MetadataService, providedIn: "root" });
        return MetadataService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        MetadataService.prototype._http;
        /**
         * @type {?}
         * @private
         */
        MetadataService.prototype._config;
    }
    var MetadataFileDescription = /** @class */ (function () {
        function MetadataFileDescription() {
        }
        return MetadataFileDescription;
    }());
    if (false) {
        /** @type {?} */
        MetadataFileDescription.prototype.guid;
        /** @type {?} */
        MetadataFileDescription.prototype.password;
        /** @type {?} */
        MetadataFileDescription.prototype.packages;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MetadataConfig = /** @class */ (function () {
        function MetadataConfig() {
        }
        return MetadataConfig;
    }());
    if (false) {
        /** @type {?} */
        MetadataConfig.prototype.rewrite;
        /** @type {?} */
        MetadataConfig.prototype.download;
        /** @type {?} */
        MetadataConfig.prototype.upload;
        /** @type {?} */
        MetadataConfig.prototype.browse;
        /** @type {?} */
        MetadataConfig.prototype.defaultDocument;
        /** @type {?} */
        MetadataConfig.prototype.preloadPageCount;
        /** @type {?} */
        MetadataConfig.prototype.cache;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MetadataConfigService = /** @class */ (function () {
        function MetadataConfigService(_http, _config) {
            this._http = _http;
            this._config = _config;
            this._metadataConfig = new rxjs.BehaviorSubject(new MetadataConfig());
            this._updatedConfig = this._metadataConfig.asObservable();
        }
        Object.defineProperty(MetadataConfigService.prototype, "updatedConfig", {
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
        MetadataConfigService.prototype.load = /**
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
                var configEndpoint = _this._config.getConfigEndpoint(commonComponents.Api.METADATA_APP);
                _this._http.get(configEndpoint, commonComponents.Api.httpOptionsJson).toPromise().then((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    /** @type {?} */
                    var metadataConfig = (/** @type {?} */ (response));
                    _this._metadataConfig.next(metadataConfig);
                    resolve();
                })).catch((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    reject("Could not load metadata config: " + JSON.stringify(response));
                }));
            }));
        };
        MetadataConfigService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MetadataConfigService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ MetadataConfigService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MetadataConfigService_Factory() { return new MetadataConfigService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: MetadataConfigService, providedIn: "root" });
        return MetadataConfigService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        MetadataConfigService.prototype._metadataConfig;
        /**
         * @type {?}
         * @private
         */
        MetadataConfigService.prototype._updatedConfig;
        /**
         * @type {?}
         * @private
         */
        MetadataConfigService.prototype._http;
        /**
         * @type {?}
         * @private
         */
        MetadataConfigService.prototype._config;
    }

    var _a;
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var AccessLevels = {
        Read: 0,
        Update: 1,
        Remove: 2,
        Add: 4,
        AddOrUpdate: 5,
        Full: 7,
    };
    AccessLevels[AccessLevels.Read] = 'Read';
    AccessLevels[AccessLevels.Update] = 'Update';
    AccessLevels[AccessLevels.Remove] = 'Remove';
    AccessLevels[AccessLevels.Add] = 'Add';
    AccessLevels[AccessLevels.AddOrUpdate] = 'AddOrUpdate';
    AccessLevels[AccessLevels.Full] = 'Full';
    /** @enum {number} */
    var MetadataPropertyType = {
        Empty: 0,
        String: 1,
        Boolean: 2,
        DateTime: 3,
        TimeSpan: 4,
        Integer: 5,
        Long: 6,
        Double: 7,
        StringArray: 8,
        ByteArray: 9,
        DoubleArray: 10,
        IntegerArray: 11,
        LongArray: 12,
        Metadata: 13,
        MetadataArray: 14,
        Guid: 15,
        PropertyValueArray: 16,
    };
    MetadataPropertyType[MetadataPropertyType.Empty] = 'Empty';
    MetadataPropertyType[MetadataPropertyType.String] = 'String';
    MetadataPropertyType[MetadataPropertyType.Boolean] = 'Boolean';
    MetadataPropertyType[MetadataPropertyType.DateTime] = 'DateTime';
    MetadataPropertyType[MetadataPropertyType.TimeSpan] = 'TimeSpan';
    MetadataPropertyType[MetadataPropertyType.Integer] = 'Integer';
    MetadataPropertyType[MetadataPropertyType.Long] = 'Long';
    MetadataPropertyType[MetadataPropertyType.Double] = 'Double';
    MetadataPropertyType[MetadataPropertyType.StringArray] = 'StringArray';
    MetadataPropertyType[MetadataPropertyType.ByteArray] = 'ByteArray';
    MetadataPropertyType[MetadataPropertyType.DoubleArray] = 'DoubleArray';
    MetadataPropertyType[MetadataPropertyType.IntegerArray] = 'IntegerArray';
    MetadataPropertyType[MetadataPropertyType.LongArray] = 'LongArray';
    MetadataPropertyType[MetadataPropertyType.Metadata] = 'Metadata';
    MetadataPropertyType[MetadataPropertyType.MetadataArray] = 'MetadataArray';
    MetadataPropertyType[MetadataPropertyType.Guid] = 'Guid';
    MetadataPropertyType[MetadataPropertyType.PropertyValueArray] = 'PropertyValueArray';
    /** @enum {number} */
    var MetadataType = {
        Undefined: 0,
        Root: 1,
        Xmp: 2,
        Exif: 3,
        Iptc: 4,
        DublinCore: 5,
        ImageResourceBlock: 6,
        FileFormat: 7,
        DigitalSignature: 8,
        Presentation: 9,
        Spreadsheet: 10,
        WordProcessing: 11,
        Diagram: 12,
        Note: 13,
        ProjectManagement: 14,
        Pdf: 15,
        DocumentStatistics: 16,
        Psd: 17,
        Jpeg2000: 18,
        Dicom: 19,
        Bmp: 20,
        Wav: 21,
        ID3V1: 22,
        ID3V2: 23,
        MpegAudio: 24,
        Lyrics3: 25,
        ApeV2: 26,
        Avi: 27,
        Flv: 28,
        Asf: 29,
        Mov: 30,
        Matroska: 31,
        Zip: 32,
        VCard: 33,
        Epub: 34,
        OpenType: 35,
        Cad: 36,
        Eml: 37,
        Msg: 38,
        Torrent: 39,
    };
    MetadataType[MetadataType.Undefined] = 'Undefined';
    MetadataType[MetadataType.Root] = 'Root';
    MetadataType[MetadataType.Xmp] = 'Xmp';
    MetadataType[MetadataType.Exif] = 'Exif';
    MetadataType[MetadataType.Iptc] = 'Iptc';
    MetadataType[MetadataType.DublinCore] = 'DublinCore';
    MetadataType[MetadataType.ImageResourceBlock] = 'ImageResourceBlock';
    MetadataType[MetadataType.FileFormat] = 'FileFormat';
    MetadataType[MetadataType.DigitalSignature] = 'DigitalSignature';
    MetadataType[MetadataType.Presentation] = 'Presentation';
    MetadataType[MetadataType.Spreadsheet] = 'Spreadsheet';
    MetadataType[MetadataType.WordProcessing] = 'WordProcessing';
    MetadataType[MetadataType.Diagram] = 'Diagram';
    MetadataType[MetadataType.Note] = 'Note';
    MetadataType[MetadataType.ProjectManagement] = 'ProjectManagement';
    MetadataType[MetadataType.Pdf] = 'Pdf';
    MetadataType[MetadataType.DocumentStatistics] = 'DocumentStatistics';
    MetadataType[MetadataType.Psd] = 'Psd';
    MetadataType[MetadataType.Jpeg2000] = 'Jpeg2000';
    MetadataType[MetadataType.Dicom] = 'Dicom';
    MetadataType[MetadataType.Bmp] = 'Bmp';
    MetadataType[MetadataType.Wav] = 'Wav';
    MetadataType[MetadataType.ID3V1] = 'ID3V1';
    MetadataType[MetadataType.ID3V2] = 'ID3V2';
    MetadataType[MetadataType.MpegAudio] = 'MpegAudio';
    MetadataType[MetadataType.Lyrics3] = 'Lyrics3';
    MetadataType[MetadataType.ApeV2] = 'ApeV2';
    MetadataType[MetadataType.Avi] = 'Avi';
    MetadataType[MetadataType.Flv] = 'Flv';
    MetadataType[MetadataType.Asf] = 'Asf';
    MetadataType[MetadataType.Mov] = 'Mov';
    MetadataType[MetadataType.Matroska] = 'Matroska';
    MetadataType[MetadataType.Zip] = 'Zip';
    MetadataType[MetadataType.VCard] = 'VCard';
    MetadataType[MetadataType.Epub] = 'Epub';
    MetadataType[MetadataType.OpenType] = 'OpenType';
    MetadataType[MetadataType.Cad] = 'Cad';
    MetadataType[MetadataType.Eml] = 'Eml';
    MetadataType[MetadataType.Msg] = 'Msg';
    MetadataType[MetadataType.Torrent] = 'Torrent';
    var FilePropertyModel = /** @class */ (function () {
        function FilePropertyModel() {
        }
        return FilePropertyModel;
    }());
    if (false) {
        /** @type {?} */
        FilePropertyModel.prototype.name;
        /** @type {?} */
        FilePropertyModel.prototype.value;
        /** @type {?} */
        FilePropertyModel.prototype.type;
        /** @type {?} */
        FilePropertyModel.prototype.added;
        /** @type {?} */
        FilePropertyModel.prototype.selected;
        /** @type {?} */
        FilePropertyModel.prototype.editing;
        /** @type {?} */
        FilePropertyModel.prototype.edited;
    }
    var KnownPropertyModel = /** @class */ (function () {
        function KnownPropertyModel() {
        }
        return KnownPropertyModel;
    }());
    if (false) {
        /** @type {?} */
        KnownPropertyModel.prototype.name;
        /** @type {?} */
        KnownPropertyModel.prototype.type;
        /** @type {?} */
        KnownPropertyModel.prototype.accessLevel;
    }
    var PackageModel = /** @class */ (function () {
        function PackageModel() {
        }
        return PackageModel;
    }());
    if (false) {
        /** @type {?} */
        PackageModel.prototype.id;
        /** @type {?} */
        PackageModel.prototype.name;
        /** @type {?} */
        PackageModel.prototype.index;
        /** @type {?} */
        PackageModel.prototype.type;
        /** @type {?} */
        PackageModel.prototype.properties;
        /** @type {?} */
        PackageModel.prototype.knownProperties;
    }
    var RemovePropertyModel = /** @class */ (function () {
        function RemovePropertyModel() {
        }
        return RemovePropertyModel;
    }());
    if (false) {
        /** @type {?} */
        RemovePropertyModel.prototype.packageId;
        /** @type {?} */
        RemovePropertyModel.prototype.property;
    }
    var ChangedPackageModel = /** @class */ (function () {
        function ChangedPackageModel() {
        }
        return ChangedPackageModel;
    }());
    if (false) {
        /** @type {?} */
        ChangedPackageModel.prototype.id;
        /** @type {?} */
        ChangedPackageModel.prototype.properties;
    }
    /** @type {?} */
    var PackageNameByMetadataType = (_a = {},
        _a[MetadataType.WordProcessing] = "Document Properties",
        _a[MetadataType.Spreadsheet] = "Workbook Properties",
        _a[MetadataType.Presentation] = "Presentation Properties",
        _a[MetadataType.ProjectManagement] = "Project Properties",
        _a[MetadataType.Diagram] = "Diagram Properties",
        _a[MetadataType.Note] = "Note Properties",
        _a[MetadataType.Pdf] = "PDF Properties",
        _a[MetadataType.FileFormat] = "File Format Info",
        _a[MetadataType.DocumentStatistics] = "Document Statistics",
        _a[MetadataType.DublinCore] = "Dublin Core Properties",
        _a[MetadataType.ImageResourceBlock] = "Image Resources",
        _a[MetadataType.MpegAudio] = "Mpeg Audio Properties",
        _a[MetadataType.DigitalSignature] = "Digital Signature Properties",
        _a);
    /** @type {?} */
    var PackageNameByOriginalName = {
        "NotePage": "Page",
        "ZipFile": "Archived File",
        "TorrentSharedFilePackage": "Shared File",
        "MovAtom": "Atom",
        "CanonMakerNotePackage": "Canon Makernote",
        "NikonMakerNotePackage": "Nikon Makernote",
        "PanasonicMakerNotePackage": "Panasonic Makernote",
        "SonyMakerNotePackage": "Sony Makernote",
        "MatroskaSegment": "Segment",
        "MatroskaAudioTrack": "Track",
        "MatroskaSubtitleTrack": "Track",
        "MatroskaVideoTrack": "Track",
        "MatroskaTrack": "Track",
        "MatroskaTag": "Tag",
        "MatroskaEbmlHeader": "Header",
        "VCardCard": "Card",
        "AsfCodec": "Codec",
        "AsfBaseStreamProperty": "Stream",
        "AsfAudioStreamProperty": "Stream",
        "AsfVideoStreamProperty": "Stream",
        "AsfMetadataDescriptorCollection": "Descriptors",
        "OpenTypeFont": "Font",
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MetadataAppComponent = /** @class */ (function () {
        function MetadataAppComponent(metadataService, modalService, configService, uploadFilesService, navigateService, zoomService, passwordService, loadingMaskService, windowService) {
            this.metadataService = metadataService;
            this.modalService = modalService;
            this.configService = configService;
            this.uploadFilesService = uploadFilesService;
            this.navigateService = navigateService;
            this.zoomService = zoomService;
            this.passwordService = passwordService;
            this.loadingMaskService = loadingMaskService;
            this.windowService = windowService;
            this.returnUrl = window.location.href;
            this.title = 'metadata';
            this.files = [];
            this.countPages = 0;
            this.formatDisabled = true;
            this.browseFilesModal = commonComponents.CommonModals.BrowseFiles;
            this.previewZoom = 100;
            this.fileWasDropped = false;
            this.disabled = false;
            this.showSidePanel = true;
            this.confirmCleanModalId = "confirm-clean";
            this.confirmSaveModalId = "confirm-save";
        }
        /**
         * @return {?}
         */
        MetadataAppComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.isDesktop = this.windowService.isDesktop();
            this.windowService.onResize.subscribe((/**
             * @param {?} w
             * @return {?}
             */
            function (w) {
                _this.isDesktop = _this.windowService.isDesktop();
                _this.refreshZoom();
            }));
            this.configService.updatedConfig.subscribe((/**
             * @param {?} metadataConfig
             * @return {?}
             */
            function (metadataConfig) {
                _this.metadataConfig = metadataConfig;
            }));
            this.uploadFilesService.uploadsChange.subscribe((/**
             * @param {?} uploads
             * @return {?}
             */
            function (uploads) {
                if (uploads) {
                    /** @type {?} */
                    var i = void 0;
                    for (i = 0; i < uploads.length; i++) {
                        _this.metadataService.upload(uploads.item(i), '', _this.metadataConfig.rewrite).subscribe((/**
                         * @param {?} obj
                         * @return {?}
                         */
                        function (obj) {
                            _this.fileWasDropped ? _this.selectFile(obj.guid, '', '') : _this.selectDir('');
                        }));
                    }
                }
            }));
            this.passwordService.passChange.subscribe((/**
             * @param {?} pass
             * @return {?}
             */
            function (pass) {
                _this.selectFile(_this.credentials.guid, pass, commonComponents.CommonModals.PasswordRequired);
            }));
            if (this.metadataConfig.defaultDocument !== "") {
                this.isLoading = true;
                this.selectFile(this.metadataConfig.defaultDocument, "", "");
            }
            else if (this.initialFile) {
                this.isLoading = true;
                this.selectFile(this.initialFile, null, null);
            }
        };
        /**
         * @return {?}
         */
        MetadataAppComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.loadingMaskService
                .onLoadingChanged
                .subscribe((/**
             * @param {?} loading
             * @return {?}
             */
            function (loading) { return _this.isLoading = loading; }));
            this.refreshZoom();
        };
        Object.defineProperty(MetadataAppComponent.prototype, "rewriteConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.metadataConfig ? this.metadataConfig.rewrite : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MetadataAppComponent.prototype, "downloadConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.metadataConfig ? this.metadataConfig.download : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MetadataAppComponent.prototype, "uploadConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.metadataConfig ? this.metadataConfig.upload : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MetadataAppComponent.prototype, "browseConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.metadataConfig ? this.metadataConfig.browse : true;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} id
         * @param {?} fileShouldBeLoaded
         * @return {?}
         */
        MetadataAppComponent.prototype.openModal = /**
         * @param {?} id
         * @param {?} fileShouldBeLoaded
         * @return {?}
         */
        function (id, fileShouldBeLoaded) {
            if (fileShouldBeLoaded && this.formatDisabled)
                return;
            this.modalService.open(id);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        MetadataAppComponent.prototype.selectDir = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this.metadataService.loadFiles($event).subscribe((/**
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
        MetadataAppComponent.prototype.selectFile = /**
         * @param {?} $event
         * @param {?} password
         * @param {?} modalId
         * @return {?}
         */
        function ($event, password, modalId) {
            var _this = this;
            this.credentials = { guid: $event, password: password };
            this.file = null;
            this.metadataService.loadFile(this.credentials).subscribe((/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                _this.file = file;
                _this.formatDisabled = !_this.file;
                if (file) {
                    if (file.pages && file.pages[0]) {
                        _this.pageHeight = file.pages[0].height;
                        _this.pageWidth = file.pages[0].width;
                        _this.options = _this.zoomOptions();
                        _this.refreshZoom();
                    }
                    /** @type {?} */
                    var countPages = file.pages ? file.pages.length : 0;
                    _this.navigateService.countPages = countPages;
                    _this.navigateService.currentPage = 1;
                    _this.countPages = countPages;
                    _this.loadProperties();
                }
            }));
            if (modalId) {
                this.modalService.close(modalId);
            }
            this.clearData();
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        MetadataAppComponent.prototype.upload = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this.metadataService.upload(null, $event, this.rewriteConfig).subscribe((/**
             * @return {?}
             */
            function () {
                _this.selectDir('');
            }));
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        MetadataAppComponent.prototype.fileDropped = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.fileWasDropped = $event;
        };
        /**
         * @private
         * @param {?} pt
         * @return {?}
         */
        MetadataAppComponent.prototype.ptToPx = /**
         * @private
         * @param {?} pt
         * @return {?}
         */
        function (pt) {
            //pt * 96 / 72 = px.
            return pt * 96 / 72;
        };
        /**
         * @private
         * @return {?}
         */
        MetadataAppComponent.prototype.getFitToWidth = /**
         * @private
         * @return {?}
         */
        function () {
            // Images and Excel-related files receiving dimensions in px from server
            /** @type {?} */
            var pageWidth = this.ptToPx(this.pageWidth);
            /** @type {?} */
            var pageHeight = this.ptToPx(this.pageHeight);
            /** @type {?} */
            var offsetWidth = pageWidth ? pageWidth : window.innerWidth;
            return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / window.innerWidth) : Math.round(window.innerWidth * 100 / offsetWidth);
        };
        /**
         * @private
         * @return {?}
         */
        MetadataAppComponent.prototype.getFitToHeight = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var pageWidth = this.ptToPx(this.pageWidth);
            /** @type {?} */
            var pageHeight = this.ptToPx(this.pageHeight);
            /** @type {?} */
            var windowHeight = (pageHeight > pageWidth) ? window.innerHeight - 100 : window.innerHeight + 100;
            /** @type {?} */
            var offsetHeight = pageHeight ? pageHeight : windowHeight;
            return (pageHeight > pageWidth) ? Math.round(windowHeight * 100 / offsetHeight) : Math.round(offsetHeight * 100 / windowHeight);
        };
        /**
         * @return {?}
         */
        MetadataAppComponent.prototype.zoomOptions = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var width = this.getFitToWidth();
            /** @type {?} */
            var height = this.getFitToHeight();
            return this.zoomService.zoomOptions(width, height);
        };
        Object.defineProperty(MetadataAppComponent.prototype, "zoom", {
            get: /**
             * @return {?}
             */
            function () {
                return this.previewZoom;
            },
            set: /**
             * @param {?} zoom
             * @return {?}
             */
            function (zoom) {
                this.previewZoom = zoom;
                this.zoomService.changeZoom(this.previewZoom);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        MetadataAppComponent.prototype.refreshZoom = /**
         * @private
         * @return {?}
         */
        function () {
            this.zoom = this.windowService.isDesktop() ? 100 : this.getFitToWidth();
        };
        /**
         * @return {?}
         */
        MetadataAppComponent.prototype.downloadFile = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            window.location.assign(this.metadataService.getDownloadUrl(this.credentials));
        };
        /**
         * @return {?}
         */
        MetadataAppComponent.prototype.exportProperties = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.formatDisabled)
                return;
            this.metadataService.exportProperties(this.credentials).subscribe((/**
             * @param {?} exportedFile
             * @return {?}
             */
            function (exportedFile) {
                return _this.saveBlob(exportedFile, "ExportedProperties.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
            }));
        };
        /**
         * @private
         * @return {?}
         */
        MetadataAppComponent.prototype.clearData = /**
         * @private
         * @return {?}
         */
        function () {
            var e_1, _a;
            if (!this.file || !this.file.pages) {
                return;
            }
            try {
                for (var _b = __values(this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var page = _c.value;
                    page.data = null;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         * @return {?}
         */
        MetadataAppComponent.prototype.isDisabled = /**
         * @return {?}
         */
        function () {
            return !this.file || this.disabled;
        };
        /**
         * @return {?}
         */
        MetadataAppComponent.prototype.save = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var savingFile = new MetadataFileDescription();
            savingFile.guid = this.file.guid;
            savingFile.password = this.credentials.password;
            savingFile.packages = this.packages
                .map((/**
             * @param {?} updatedPackage
             * @return {?}
             */
            function (updatedPackage) {
                return { id: updatedPackage.id, properties: updatedPackage.properties.filter((/**
                     * @param {?} p
                     * @return {?}
                     */
                    function (p) { return p.added || p.edited; })) };
            }))
                .filter((/**
             * @param {?} updatedPackage
             * @return {?}
             */
            function (updatedPackage) { return updatedPackage.properties.length > 0; }));
            if (savingFile.packages.length > 0) {
                this.metadataService.saveProperty(savingFile).subscribe((/**
                 * @param {?} loadFile
                 * @return {?}
                 */
                function (loadFile) {
                    _this.loadProperties();
                    _this.disabled = false;
                    _this.modalService.open(commonComponents.CommonModals.OperationSuccess);
                }));
            }
        };
        /**
         * @return {?}
         */
        MetadataAppComponent.prototype.cleanMetadata = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.metadataService.cleanMetadata(this.credentials).subscribe((/**
             * @return {?}
             */
            function () {
                _this.loadProperties();
                _this.disabled = false;
                _this.modalService.open(commonComponents.CommonModals.OperationSuccess);
            }));
        };
        /**
         * @return {?}
         */
        MetadataAppComponent.prototype.loadProperties = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.file)
                return;
            this.metadataService.loadProperties(this.credentials).subscribe((/**
             * @param {?} packages
             * @return {?}
             */
            function (packages) {
                _this.packages = packages;
            }));
            if (!this.showSidePanel) {
                this.showSidePanel = true;
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        MetadataAppComponent.prototype.hideSidePanel = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.showSidePanel = !this.showSidePanel;
        };
        /**
         * @param {?} propertyInfo
         * @return {?}
         */
        MetadataAppComponent.prototype.removeProperty = /**
         * @param {?} propertyInfo
         * @return {?}
         */
        function (propertyInfo) {
            var _this = this;
            if (this.file) {
                /** @type {?} */
                var metadataFile = new MetadataFileDescription();
                metadataFile.guid = this.file.guid;
                metadataFile.password = this.credentials.password;
                metadataFile.packages = [{ id: propertyInfo.packageId, properties: [propertyInfo.property] }];
                this.metadataService.removeProperty(metadataFile).subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.loadProperties();
                    _this.modalService.open(commonComponents.CommonModals.OperationSuccess);
                }));
            }
        };
        /**
         * @param {?} packageInfo
         * @return {?}
         */
        MetadataAppComponent.prototype.getPackageName = /**
         * @param {?} packageInfo
         * @return {?}
         */
        function (packageInfo) {
            if (packageInfo.name in PackageNameByOriginalName) {
                if (packageInfo.index >= 0) {
                    return PackageNameByOriginalName[packageInfo.name].concat(" ", (packageInfo.index + 1).toString(10));
                }
                return PackageNameByOriginalName[packageInfo.name];
            }
            if (packageInfo.type in PackageNameByMetadataType) {
                return PackageNameByMetadataType[packageInfo.type];
            }
            return (MetadataType[packageInfo.type]).toString();
        };
        /**
         * @private
         * @param {?} blob
         * @param {?} fileName
         * @param {?} mimeType
         * @return {?}
         */
        MetadataAppComponent.prototype.saveBlob = /**
         * @private
         * @param {?} blob
         * @param {?} fileName
         * @param {?} mimeType
         * @return {?}
         */
        function (blob, fileName, mimeType) {
            /** @type {?} */
            var newBlob = new Blob([blob], { type: mimeType });
            // IE
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(newBlob);
                return;
            }
            /** @type {?} */
            var data = window.URL.createObjectURL(newBlob);
            /** @type {?} */
            var link = document.createElement('a');
            link.href = data;
            link.download = fileName;
            // Firefox
            link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
            setTimeout((/**
             * @return {?}
             */
            function () {
                // Firefox
                window.URL.revokeObjectURL(data);
                link.remove();
            }), 100);
        };
        MetadataAppComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-metadata',
                        template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\r\n<div class=\"wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"column\" [ngClass]=\"{'document-loaded': !formatDisabled}\">\r\n      <div class=\"top-panel\">\r\n        <a class=\"logo-link\" [href]=\"returnUrl\"><gd-logo [logo]=\"'metadata'\" icon=\"clipboard-list\"></gd-logo></a>\r\n        <gd-top-toolbar class=\"toolbar-panel\">\r\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal, false)\"\r\n                    *ngIf=\"browseConfig\" ></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'trash'\" [tooltip]=\"'Clean Metadata'\" (click)=\"openModal(confirmCleanModalId, true)\">\r\n                    </gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"openModal(confirmSaveModalId, true)\">\r\n                    </gd-button>\r\n          <gd-button [hidden] =\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'file-export'\" [tooltip]=\"'Attributes'\" (click)=\"loadProperties()\">\r\n                    </gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\r\n                    (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'file-excel'\" [tooltip]=\"'Export Properties'\"\r\n                    (click)=\"exportProperties()\" ></gd-button>\r\n        </gd-top-toolbar>\r\n      </div>\r\n      <div class=\"doc-panel\" *ngIf=\"file\" #docPanel>\r\n        <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"false\" gdScrollable\r\n                    [preloadPageCount]=\"metadataConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"false\"></gd-document>\r\n      </div>\r\n    </div>\r\n    <gd-side-panel *ngIf=\"file && showSidePanel\"\r\n      (hideSidePanel)=\"hideSidePanel($event)\"\r\n      (saveInSidePanel)=\"save()\"\r\n      [closable]=\"isDesktop ? false : true\"\r\n      [saveable]=\"isDesktop ? false : true\"\r\n      [title]=\"'Metadata'\"\r\n      [icon]=\"'clipboard-list'\">\r\n      <gd-accordion>\r\n        <gd-accordion-group *ngFor=\"let package of packages\" [title]=\"getPackageName(package)\" [addDisabled]=\"false\" [addHidden]=\"false\" [properties]=\"package.properties\" [knownProperties]=\"package.knownProperties\" [packageId]=\"package.id\" (removeProperty)=\"removeProperty($event)\"></gd-accordion-group>\r\n      </gd-accordion>\r\n    </gd-side-panel>\r\n  </div>\r\n  <gd-init-state [icon]=\"'clipboard-list'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file && uploadConfig\" (fileDropped)=\"fileDropped($event)\">\r\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\r\n    Or drop file here\r\n  </gd-init-state>\r\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\r\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\r\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\r\n\r\n  <gd-error-modal></gd-error-modal>\r\n  <gd-password-required></gd-password-required>\r\n  <gd-success-modal></gd-success-modal>\r\n  <gd-confirm-modal [id]=\"confirmCleanModalId\" [text]=\"'Are you sure, you want to clean metadata in this file?'\" (confirm)=\"cleanMetadata()\"></gd-confirm-modal>\r\n  <gd-confirm-modal [id]=\"confirmSaveModalId\" [text]=\"'Do you want to save the changes?'\" (confirm)=\"save()\"></gd-confirm-modal>\r\n  \r\n</div>\r\n",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.logo-link{color:inherit;text-decoration:inherit}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}::ng-deep .tools .button{color:#fff!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .button.inactive{color:#959da5!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}.row{display:-webkit-box;display:flex}.column{width:100%;background-color:#e7e7e7}.document-loaded{overflow:hidden}::ng-deep .gd-side-panel-body{background-color:#f4f4f4}::ng-deep .gd-side-panel-wrapper{width:464px!important}::ng-deep .page.excel{overflow:unset!important}@media (max-width:1037px){::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .gd-side-panel-wrapper{width:375px!important}}"]
                    }] }
        ];
        /** @nocollapse */
        MetadataAppComponent.ctorParameters = function () { return [
            { type: MetadataService },
            { type: commonComponents.ModalService },
            { type: MetadataConfigService },
            { type: commonComponents.UploadFilesService },
            { type: commonComponents.NavigateService },
            { type: commonComponents.ZoomService },
            { type: commonComponents.PasswordService },
            { type: commonComponents.LoadingMaskService },
            { type: commonComponents.WindowService }
        ]; };
        MetadataAppComponent.propDecorators = {
            initialFile: [{ type: core.Input }],
            returnUrl: [{ type: core.Input }]
        };
        return MetadataAppComponent;
    }());
    if (false) {
        /** @type {?} */
        MetadataAppComponent.prototype.initialFile;
        /** @type {?} */
        MetadataAppComponent.prototype.returnUrl;
        /** @type {?} */
        MetadataAppComponent.prototype.title;
        /** @type {?} */
        MetadataAppComponent.prototype.files;
        /** @type {?} */
        MetadataAppComponent.prototype.file;
        /** @type {?} */
        MetadataAppComponent.prototype.metadataConfig;
        /** @type {?} */
        MetadataAppComponent.prototype.countPages;
        /** @type {?} */
        MetadataAppComponent.prototype.formatDisabled;
        /** @type {?} */
        MetadataAppComponent.prototype.credentials;
        /** @type {?} */
        MetadataAppComponent.prototype.browseFilesModal;
        /** @type {?} */
        MetadataAppComponent.prototype.isLoading;
        /** @type {?} */
        MetadataAppComponent.prototype.previewZoom;
        /** @type {?} */
        MetadataAppComponent.prototype.pageWidth;
        /** @type {?} */
        MetadataAppComponent.prototype.pageHeight;
        /** @type {?} */
        MetadataAppComponent.prototype.options;
        /** @type {?} */
        MetadataAppComponent.prototype.fileWasDropped;
        /** @type {?} */
        MetadataAppComponent.prototype.packages;
        /** @type {?} */
        MetadataAppComponent.prototype.disabled;
        /** @type {?} */
        MetadataAppComponent.prototype.isDesktop;
        /** @type {?} */
        MetadataAppComponent.prototype.showSidePanel;
        /** @type {?} */
        MetadataAppComponent.prototype.confirmCleanModalId;
        /** @type {?} */
        MetadataAppComponent.prototype.confirmSaveModalId;
        /**
         * @type {?}
         * @private
         */
        MetadataAppComponent.prototype.metadataService;
        /**
         * @type {?}
         * @private
         */
        MetadataAppComponent.prototype.modalService;
        /**
         * @type {?}
         * @private
         */
        MetadataAppComponent.prototype.configService;
        /**
         * @type {?}
         * @private
         */
        MetadataAppComponent.prototype.uploadFilesService;
        /**
         * @type {?}
         * @private
         */
        MetadataAppComponent.prototype.navigateService;
        /**
         * @type {?}
         * @private
         */
        MetadataAppComponent.prototype.zoomService;
        /**
         * @type {?}
         * @private
         */
        MetadataAppComponent.prototype.passwordService;
        /**
         * @type {?}
         * @private
         */
        MetadataAppComponent.prototype.loadingMaskService;
        /**
         * @type {?}
         * @private
         */
        MetadataAppComponent.prototype.windowService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AccordionComponent = /** @class */ (function () {
        function AccordionComponent() {
        }
        /**
         * @return {?}
         */
        AccordionComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
        };
        AccordionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-accordion',
                        template: "\n    <ng-content></ng-content>\n",
                        styles: [""]
                    }] }
        ];
        return AccordionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var moment = moment_;
    var AccordionGroupComponent = /** @class */ (function () {
        function AccordionGroupComponent(windowService) {
            this.windowService = windowService;
            this.opened = true;
            this.removeProperty = new core.EventEmitter();
            this.datePickerConfig = {
                format: 'DD-MM-YYYY HH:mm:ss'
            };
            this.editableTypes = new Set([
                MetadataPropertyType.String,
                MetadataPropertyType.Integer,
                MetadataPropertyType.Long,
                MetadataPropertyType.Double,
                MetadataPropertyType.Boolean,
                MetadataPropertyType.DateTime
            ]);
        }
        /**
         * @return {?}
         */
        AccordionGroupComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.isDesktop = this.windowService.isDesktop();
            this.windowService.onResize.subscribe((/**
             * @param {?} w
             * @return {?}
             */
            function (w) {
                _this.isDesktop = _this.windowService.isDesktop();
            }));
            this.knownPropertyDictionary = this.toDictionary(this.knownProperties);
            this.updateNotAddedProperties();
            this.metadataPropertyType = MetadataPropertyType;
        };
        /**
         * @return {?}
         */
        AccordionGroupComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.textinput.changes.subscribe((/**
             * @param {?} i
             * @return {?}
             */
            function (i) {
                if (i.length) {
                    i.first.nativeElement.focus();
                }
            }));
        };
        /**
         * @return {?}
         */
        AccordionGroupComponent.prototype.resetProperties = /**
         * @return {?}
         */
        function () {
            this.properties.forEach((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { p.selected = false; p.editing = false; }));
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AccordionGroupComponent.prototype.toggle = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.opened = !this.opened;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AccordionGroupComponent.prototype.addProperty = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            this.resetProperties();
            if (this.isAddAvailable()) {
                /** @type {?} */
                var addedProperty = new FilePropertyModel();
                addedProperty.added = true;
                addedProperty.editing = true;
                addedProperty.name = "Select property";
                addedProperty.type = 1;
                this.properties.push(addedProperty);
            }
        };
        /**
         * @param {?} property
         * @return {?}
         */
        AccordionGroupComponent.prototype.selectProperty = /**
         * @param {?} property
         * @return {?}
         */
        function (property) {
            this.resetProperties();
            property.selected = !property.selected;
        };
        /**
         * @param {?} property
         * @return {?}
         */
        AccordionGroupComponent.prototype.editProperty = /**
         * @param {?} property
         * @return {?}
         */
        function (property) {
            if (this.isEditable(property)) {
                this.resetProperties();
                property.editing = !property.editing;
                property.edited = true;
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AccordionGroupComponent.prototype.delete = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            /** @type {?} */
            var selectedProperty = this.properties.filter((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return p.selected; }))[0];
            this.removeProperty.emit({ packageId: this.packageId, property: selectedProperty });
        };
        /**
         * @return {?}
         */
        AccordionGroupComponent.prototype.isRemoveAvailable = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.properties && this.properties.filter((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return p.selected && _this.isRemovable(p); })).length === 1;
        };
        /**
         * @return {?}
         */
        AccordionGroupComponent.prototype.isAddAvailable = /**
         * @return {?}
         */
        function () {
            return !this.addDisabled && this.notAddedProperties.length > 0;
        };
        /**
         * @param {?} $event
         * @param {?} property
         * @return {?}
         */
        AccordionGroupComponent.prototype.selectPropName = /**
         * @param {?} $event
         * @param {?} property
         * @return {?}
         */
        function ($event, property) {
            property.type = $event.type;
            property.name = $event.name;
            if ($event.type === MetadataPropertyType.DateTime) {
                property.value = moment().toISOString();
            }
            else {
                property.value = "";
            }
            this.updateNotAddedProperties();
        };
        /**
         * @param {?} property
         * @return {?}
         */
        AccordionGroupComponent.prototype.formatValue = /**
         * @param {?} property
         * @return {?}
         */
        function (property) {
            switch (property.type) {
                case MetadataPropertyType.DateTime:
                    return this.dateToPicker(property.value);
                default:
                    return property.value;
            }
        };
        /**
         * @return {?}
         */
        AccordionGroupComponent.prototype.updateNotAddedProperties = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var propertyDictionary = this.toDictionary(this.properties);
            // tslint:disable-next-line:no-bitwise
            this.notAddedProperties = this.knownProperties.filter((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return (p.accessLevel & AccessLevels.Add) !== 0 && !(p.name in propertyDictionary); }));
        };
        /**
         * @param {?} property
         * @return {?}
         */
        AccordionGroupComponent.prototype.isEditable = /**
         * @param {?} property
         * @return {?}
         */
        function (property) {
            if (this.editableTypes.has(property.type)) {
                return this.hasAccessTo(property, AccessLevels.Update);
            }
        };
        /**
         * @param {?} property
         * @return {?}
         */
        AccordionGroupComponent.prototype.isRemovable = /**
         * @param {?} property
         * @return {?}
         */
        function (property) {
            return this.hasAccessTo(property, AccessLevels.Remove);
        };
        /**
         * @param {?} property
         * @param {?} accessLevel
         * @return {?}
         */
        AccordionGroupComponent.prototype.hasAccessTo = /**
         * @param {?} property
         * @param {?} accessLevel
         * @return {?}
         */
        function (property, accessLevel) {
            // tslint:disable-next-line:no-bitwise
            return property.name in this.knownPropertyDictionary && (this.knownPropertyDictionary[property.name].accessLevel & accessLevel) !== 0;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        AccordionGroupComponent.prototype.dateToPicker = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                return moment.utc(value).local().format(this.datePickerConfig.format);
            }
            return null;
        };
        /**
         * @param {?} property
         * @param {?} value
         * @return {?}
         */
        AccordionGroupComponent.prototype.dateFromPicker = /**
         * @param {?} property
         * @param {?} value
         * @return {?}
         */
        function (property, value) {
            if (value) {
                /** @type {?} */
                var dateTime = moment(value, this.datePickerConfig.format);
                property.value = dateTime.toISOString();
            }
        };
        /**
         * @param {?} array
         * @return {?}
         */
        AccordionGroupComponent.prototype.toDictionary = /**
         * @param {?} array
         * @return {?}
         */
        function (array) {
            return array.reduce((/**
             * @param {?} obj
             * @param {?} item
             * @return {?}
             */
            function (obj, item) {
                obj[item.name] = item;
                return obj;
            }), {});
        };
        AccordionGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-accordion-group',
                        template: "<div class=\"accordion-wrapper\">\r\n    <div class=\"title\" (click)=\"toggle($event)\">\r\n      <fa-icon *ngIf=\"!opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-down']\"></fa-icon>\r\n      <fa-icon *ngIf=\"opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-up']\"></fa-icon>\r\n      <div class=\"text\">{{title}}</div>\r\n      <fa-icon class=\"trash\" *ngIf=\"isRemoveAvailable()\" [icon]=\"['fas', 'trash']\" (click)=\"delete($event)\"></fa-icon>\r\n      <gd-button class=\"plus\" [icon]=\"['plus']\" [hidden]=\"addHidden\" [disabled]=\"!isAddAvailable()\" (click)=\"addProperty($event)\"></gd-button>\r\n    </div>\r\n    <div class=\"body\" [ngClass]=\"{'hidden': !opened}\">\r\n      <div *ngFor=\"let property of properties\" class=\"property-wrapper\">\r\n          <div *ngIf=\"!property.added\" [ngClass]=\"{'selected': property.selected, 'disabled': !isEditable(property)}\" (click)=\"selectProperty(property)\" class=\"property-name property-name-simple\" title=\"{{property.name}}\">{{property.name}}</div>\r\n          <gd-select  class=\"property-name\" *ngIf=\"property.added\" id=\"propertiesNames\" [disabled]=\"false\" [options]=\"notAddedProperties\" (selected)=\"selectPropName($event, property)\" [showSelected]=\"{name : property.name, value : property.name}\"></gd-select>\r\n          <div *ngIf=\"!property.editing\" [ngClass]=\"{'selected': property.selected}\" (click)=\"editProperty(property)\" class=\"property-value\" title=\"{{property.value}}\">{{formatValue(property)}}</div>\r\n          <div *ngIf=\"property.editing\" class=\"input-wrapper\">\r\n            <input #textinput *ngIf=\"property.type == metadataPropertyType.String\" class=\"property-value\" [(ngModel)]=\"property.value\" />\r\n            <input *ngIf=\"property.type == metadataPropertyType.Integer || property.type == metadataPropertyType.Long\" type=\"text\" class=\"property-value\" [(ngModel)]=\"property.value\" gdInteger />\r\n            <input *ngIf=\"property.type == metadataPropertyType.Double\" type=\"number\" class=\"property-value\" [(ngModel)]=\"property.value\" />\r\n            <input *ngIf=\"property.type == metadataPropertyType.Boolean\" type=\"checkbox\" class=\"property-value\" [(ngModel)]=\"property.value\" />\r\n            <dp-date-picker *ngIf=\"property.type == metadataPropertyType.DateTime\" [mode]=\"'daytime'\" [theme]=\"'dp-material dp-main'\" [config]=\"datePickerConfig\" [ngModel]=\"dateToPicker(property.value)\" (ngModelChange)=\"dateFromPicker(property, $event)\" ></dp-date-picker>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <div>",
                        styles: [".accordion-wrapper{background-color:#fff}.accordion-wrapper .title{width:100%;cursor:pointer;border-bottom:1px solid #6e6e6e;background-color:#539cf0;color:#f4f4f4;font-weight:700;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;height:37px;line-height:37px;font-size:13px}.accordion-wrapper .title .text{width:100%}.chevron{padding:0 16px 0 15px}.plus{margin-left:auto}::ng-deep .title .button{color:#fff!important;display:block!important;margin-right:0!important}::ng-deep .title .button.active fa-icon{color:#fff!important}.accordion-wrapper .body.hidden,.trash.hidden{display:none}.property-wrapper{display:-webkit-box;display:flex;height:35px;font-size:12px;border-bottom:1px solid #e7e7e7;line-height:35px}.property-wrapper.disabled{cursor:not-allowed;color:#acacac}.property-name{width:216px;text-transform:uppercase;font-weight:700;padding-left:15px;border-right:1px solid #e7e7e7;text-overflow:ellipsis;word-wrap:break-word}.property-name.disabled{color:#acacac}.property-name ::ng-deep .select{height:35px;line-height:37px;text-align:center;-webkit-box-pack:unset;justify-content:unset;position:relative}.property-name ::ng-deep .select .nav-caret{display:none}.property-name ::ng-deep .select .selected-value{max-width:none;font-size:unset;text-transform:none;font-weight:400}.property-name ::ng-deep .select .dropdown-menu{width:216px;margin-left:-15px;top:36px}.property-name-simple{overflow-x:hidden;word-wrap:normal}.property-value{font-family:'Courier New',Courier,monospace;padding-left:12px;text-overflow:ellipsis;width:216px;white-space:nowrap;overflow:hidden;word-wrap:break-word;display:inline-block}.property-value.desktop-hide{display:none}::ng-deep dp-date-picker.dp-material .dp-picker-input,::ng-deep dp-day-time-calendar *{font-family:'Courier New',Courier,monospace}.input-wrapper input{height:30px;border:0;font-size:12px}.input-wrapper input.hidden{display:none}.input-wrapper input[type=datetime-local]::-webkit-clear-button,.input-wrapper input[type=datetime-local]::-webkit-inner-spin-button{-webkit-appearance:none;display:none}.selected{background-color:#3e4e5a;color:#fff}::ng-deep .default .property-name{color:#acacac}@media (max-width:1037px){.property-value{width:194px!important}.property-name{width:150px!important}.property-value.mobile-hide{display:none}.input-wrapper{width:185px!important}}"]
                    }] }
        ];
        /** @nocollapse */
        AccordionGroupComponent.ctorParameters = function () { return [
            { type: commonComponents.WindowService }
        ]; };
        AccordionGroupComponent.propDecorators = {
            knownProperties: [{ type: core.Input }],
            opened: [{ type: core.Input }],
            title: [{ type: core.Input }],
            packageId: [{ type: core.Input }],
            addDisabled: [{ type: core.Input }],
            addHidden: [{ type: core.Input }],
            properties: [{ type: core.Input }],
            removeProperty: [{ type: core.Output }],
            textinput: [{ type: core.ViewChildren, args: ['textinput',] }]
        };
        return AccordionGroupComponent;
    }());
    if (false) {
        /** @type {?} */
        AccordionGroupComponent.prototype.knownProperties;
        /** @type {?} */
        AccordionGroupComponent.prototype.opened;
        /** @type {?} */
        AccordionGroupComponent.prototype.title;
        /** @type {?} */
        AccordionGroupComponent.prototype.packageId;
        /** @type {?} */
        AccordionGroupComponent.prototype.addDisabled;
        /** @type {?} */
        AccordionGroupComponent.prototype.addHidden;
        /** @type {?} */
        AccordionGroupComponent.prototype.properties;
        /** @type {?} */
        AccordionGroupComponent.prototype.removeProperty;
        /** @type {?} */
        AccordionGroupComponent.prototype.knownPropertyDictionary;
        /** @type {?} */
        AccordionGroupComponent.prototype.notAddedProperties;
        /** @type {?} */
        AccordionGroupComponent.prototype.metadataPropertyType;
        /** @type {?} */
        AccordionGroupComponent.prototype.textinput;
        /** @type {?} */
        AccordionGroupComponent.prototype.isDesktop;
        /** @type {?} */
        AccordionGroupComponent.prototype.datePickerConfig;
        /** @type {?} */
        AccordionGroupComponent.prototype.editableTypes;
        /**
         * @type {?}
         * @private
         */
        AccordionGroupComponent.prototype.windowService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AccordionService = /** @class */ (function () {
        function AccordionService() {
            this._addingObserver = new rxjs.BehaviorSubject(null);
            this._addedProperty = this._addingObserver.asObservable();
        }
        Object.defineProperty(AccordionService.prototype, "addedProperty", {
            get: /**
             * @return {?}
             */
            function () {
                return this._addedProperty;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} addedProperty
         * @return {?}
         */
        AccordionService.prototype.addProperty = /**
         * @param {?} addedProperty
         * @return {?}
         */
        function (addedProperty) {
            this._addingObserver.next(addedProperty);
        };
        AccordionService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AccordionService.ctorParameters = function () { return []; };
        /** @nocollapse */ AccordionService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AccordionService_Factory() { return new AccordionService(); }, token: AccordionService, providedIn: "root" });
        return AccordionService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AccordionService.prototype._addingObserver;
        /**
         * @type {?}
         * @private
         */
        AccordionService.prototype._addedProperty;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdIntegerDirective = /** @class */ (function () {
        function GdIntegerDirective(ngModel, element) {
            this.ngModel = ngModel;
            this.element = element;
            this.specialKeys = [
                'Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'
            ];
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        GdIntegerDirective.prototype.isInteger = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return String(value).match(new RegExp(/^(\-){0,1}\d*$/));
        };
        /**
         * @param {?} event
         * @return {?}
         */
        GdIntegerDirective.prototype.onKeyDown = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.specialKeys.indexOf(event.key) !== -1) {
                return;
            }
            /** @type {?} */
            var current = this.element.nativeElement.value;
            /** @type {?} */
            var position = this.element.nativeElement.selectionStart;
            /** @type {?} */
            var next = [current.slice(0, position), event.key, current.slice(position)].join('');
            if (next && !this.isInteger(next)) {
                event.preventDefault();
            }
        };
        /**
         * @return {?}
         */
        GdIntegerDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.ngModel.control.valueChanges.subscribe((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var value = _this.element.nativeElement.value;
                if (!value)
                    return;
                _this.ngModel.control.setValue(value === "-" ? 0 : parseInt(value, 10), { emitModelToViewChange: false, emitViewToModelChange: true, emitEvent: false });
            }));
        };
        GdIntegerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "[gdInteger]"
                    },] }
        ];
        /** @nocollapse */
        GdIntegerDirective.ctorParameters = function () { return [
            { type: forms.NgModel },
            { type: core.ElementRef }
        ]; };
        GdIntegerDirective.propDecorators = {
            onKeyDown: [{ type: core.HostListener, args: ["keydown", ["$event"],] }]
        };
        return GdIntegerDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        GdIntegerDirective.prototype.specialKeys;
        /**
         * @type {?}
         * @private
         */
        GdIntegerDirective.prototype.ngModel;
        /**
         * @type {?}
         * @private
         */
        GdIntegerDirective.prototype.element;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConfirmModalComponent = /** @class */ (function () {
        function ConfirmModalComponent() {
            this.confirm = new core.EventEmitter();
            this.cancel = new core.EventEmitter();
        }
        /**
         * @param {?} $event
         * @return {?}
         */
        ConfirmModalComponent.prototype.onConfirm = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.cleanUpAndClose($event);
            this.confirm.emit();
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        ConfirmModalComponent.prototype.onCancel = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.cleanUpAndClose($event);
            this.cancel.emit();
        };
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        ConfirmModalComponent.prototype.cleanUpAndClose = /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.stopPropagation();
            this.buttons.forEach((/**
             * @param {?} button
             * @return {?}
             */
            function (button) { return button.onUnhovering(); }));
            this.modal.close();
        };
        ConfirmModalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-confirm-modal',
                        template: "<gd-modal [id]=\"id\" [title]=\"'Confirm action'\">\r\n    <section id=\"gd-confirm-section\">\r\n        <div class=\"gd-confirm-wrap\">\r\n          <span class=\"gd-confirm-text\">{{text}}</span>\r\n          <div class=\"gd-confirm-button-wrap\">\r\n            <gd-button id=\"cancel-button\" [icon]=\"'times'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"onCancel($event)\">\r\n                Cancel\r\n            </gd-button>\r\n            <gd-button id=\"confirm-button\" [icon]=\"'check'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"onConfirm($event)\">\r\n                Confirm\r\n            </gd-button>\r\n        </div>\r\n        </div>\r\n      </section>\r\n</gd-modal>",
                        styles: ["#gd-confirm-section{width:375px}.gd-confirm-wrap{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:24px}.gd-confirm-wrap ::ng-deep .button{height:37px;width:75px;padding:0;-webkit-box-pack:center;justify-content:center}.gd-confirm-wrap ::ng-deep .button ::ng-deep .text{font-size:10px!important}.gd-confirm-text{color:#000;padding:10px 0 45px;height:20px;font-size:16px}.gd-confirm-button-wrap{height:40px}.gd-confirm-button-wrap gd-button{float:right;padding-left:15px}@media (max-width:1037px){#gd-confirm-section{max-width:375px}}"]
                    }] }
        ];
        ConfirmModalComponent.propDecorators = {
            id: [{ type: core.Input }],
            text: [{ type: core.Input }],
            confirm: [{ type: core.Output }],
            cancel: [{ type: core.Output }],
            modal: [{ type: core.ViewChild, args: [commonComponents.ModalComponent, { static: false },] }],
            buttons: [{ type: core.ViewChildren, args: [commonComponents.ButtonComponent,] }]
        };
        return ConfirmModalComponent;
    }());
    if (false) {
        /** @type {?} */
        ConfirmModalComponent.prototype.id;
        /** @type {?} */
        ConfirmModalComponent.prototype.text;
        /** @type {?} */
        ConfirmModalComponent.prototype.confirm;
        /** @type {?} */
        ConfirmModalComponent.prototype.cancel;
        /** @type {?} */
        ConfirmModalComponent.prototype.modal;
        /** @type {?} */
        ConfirmModalComponent.prototype.buttons;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} metadataConfigService
     * @return {?}
     */
    function initializeApp(metadataConfigService) {
        /** @type {?} */
        var result = (/**
         * @return {?}
         */
        function () { return metadataConfigService.load(); });
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
    var MetadataModule = /** @class */ (function () {
        function MetadataModule() {
        }
        /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        MetadataModule.forRoot = /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        function (apiEndpoint) {
            commonComponents.Api.DEFAULT_API_ENDPOINT = apiEndpoint;
            return {
                ngModule: MetadataModule
            };
        };
        MetadataModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            MetadataAppComponent,
                            AccordionComponent,
                            AccordionGroupComponent,
                            GdIntegerDirective,
                            ConfirmModalComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
                            commonComponents.CommonComponentsModule,
                            http.HttpClientModule,
                            angularFontawesome.FontAwesomeModule,
                            forms.FormsModule,
                            ng2DatePicker.DpDatePickerModule
                        ],
                        exports: [
                            MetadataAppComponent,
                            commonComponents.CommonComponentsModule,
                            AccordionComponent,
                            AccordionGroupComponent
                        ],
                        providers: [
                            MetadataService,
                            AccordionService,
                            commonComponents.ConfigService,
                            common.DatePipe,
                            MetadataConfigService,
                            {
                                provide: http.HTTP_INTERCEPTORS,
                                useClass: commonComponents.ErrorInterceptorService,
                                multi: true
                            },
                            {
                                provide: core.APP_INITIALIZER,
                                useFactory: initializeApp,
                                deps: [MetadataConfigService], multi: true
                            },
                            commonComponents.LoadingMaskService,
                            {
                                provide: http.HTTP_INTERCEPTORS,
                                useFactory: setupLoadingInterceptor,
                                multi: true,
                                deps: [commonComponents.LoadingMaskService]
                            }
                        ]
                    },] }
        ];
        return MetadataModule;
    }());

    exports.AccessLevels = AccessLevels;
    exports.AccordionService = AccordionService;
    exports.ChangedPackageModel = ChangedPackageModel;
    exports.FilePropertyModel = FilePropertyModel;
    exports.KnownPropertyModel = KnownPropertyModel;
    exports.MetadataAppComponent = MetadataAppComponent;
    exports.MetadataConfigService = MetadataConfigService;
    exports.MetadataFileDescription = MetadataFileDescription;
    exports.MetadataModule = MetadataModule;
    exports.MetadataPropertyType = MetadataPropertyType;
    exports.MetadataService = MetadataService;
    exports.MetadataType = MetadataType;
    exports.PackageModel = PackageModel;
    exports.PackageNameByMetadataType = PackageNameByMetadataType;
    exports.PackageNameByOriginalName = PackageNameByOriginalName;
    exports.RemovePropertyModel = RemovePropertyModel;
    exports.initializeApp = initializeApp;
    exports.setupLoadingInterceptor = setupLoadingInterceptor;
    exports.ɵa = AccordionComponent;
    exports.ɵb = AccordionGroupComponent;
    exports.ɵc = GdIntegerDirective;
    exports.ɵd = ConfirmModalComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=groupdocs.examples.angular-metadata.umd.js.map
