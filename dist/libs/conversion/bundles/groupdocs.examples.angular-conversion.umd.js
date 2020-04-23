(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@groupdocs.examples.angular/common-components'), require('@angular/common/http'), require('rxjs'), require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/free-regular-svg-icons'), require('@fortawesome/angular-fontawesome')) :
    typeof define === 'function' && define.amd ? define('@groupdocs.examples.angular/conversion', ['exports', '@angular/core', '@angular/common', '@groupdocs.examples.angular/common-components', '@angular/common/http', 'rxjs', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-regular-svg-icons', '@fortawesome/angular-fontawesome'], factory) :
    (global = global || self, factory((global.groupdocs = global.groupdocs || {}, global.groupdocs.examples = global.groupdocs.examples || {}, global.groupdocs.examples.angular = global.groupdocs.examples.angular || {}, global.groupdocs.examples.angular.conversion = {}), global.ng.core, global.ng.common, global.commonComponents, global.ng.common.http, global.rxjs, global.fontawesomeSvgCore, global.freeSolidSvgIcons, global.freeRegularSvgIcons, global.angularFontawesome));
}(this, (function (exports, core, common, commonComponents, http, rxjs, fontawesomeSvgCore, freeSolidSvgIcons, freeRegularSvgIcons, angularFontawesome) { 'use strict';

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
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConversionRequestModel = /** @class */ (function () {
        function ConversionRequestModel() {
        }
        return ConversionRequestModel;
    }());
    if (false) {
        /** @type {?} */
        ConversionRequestModel.prototype.added;
        /** @type {?} */
        ConversionRequestModel.prototype.destinationType;
        /** @type {?} */
        ConversionRequestModel.prototype.guid;
        /** @type {?} */
        ConversionRequestModel.prototype.size;
        /** @type {?} */
        ConversionRequestModel.prototype.destDocumentType;
    }
    var ConversionItemModel = /** @class */ (function () {
        function ConversionItemModel() {
        }
        return ConversionItemModel;
    }());
    if (false) {
        /** @type {?} */
        ConversionItemModel.prototype.guid;
        /** @type {?} */
        ConversionItemModel.prototype.directory;
        /** @type {?} */
        ConversionItemModel.prototype.size;
        /** @type {?} */
        ConversionItemModel.prototype.name;
        /** @type {?} */
        ConversionItemModel.prototype.destinationType;
        /** @type {?} */
        ConversionItemModel.prototype.sizeString;
        /** @type {?} */
        ConversionItemModel.prototype.destinationFileName;
        /** @type {?} */
        ConversionItemModel.prototype.destinationFormatName;
        /** @type {?} */
        ConversionItemModel.prototype.sourceIcon;
        /** @type {?} */
        ConversionItemModel.prototype.sourceFormatName;
        /** @type {?} */
        ConversionItemModel.prototype.destinationIcon;
        /** @type {?} */
        ConversionItemModel.prototype.converted;
        /** @type {?} */
        ConversionItemModel.prototype.converting;
        /** @type {?} */
        ConversionItemModel.prototype.isDirectory;
        /** @type {?} */
        ConversionItemModel.prototype.warning;
    }
    var ExtendedFileModel = /** @class */ (function () {
        function ExtendedFileModel() {
        }
        return ExtendedFileModel;
    }());
    if (false) {
        /** @type {?} */
        ExtendedFileModel.prototype.guid;
        /** @type {?} */
        ExtendedFileModel.prototype.directory;
        /** @type {?} */
        ExtendedFileModel.prototype.isDirectory;
        /** @type {?} */
        ExtendedFileModel.prototype.size;
        /** @type {?} */
        ExtendedFileModel.prototype.name;
        /** @type {?} */
        ExtendedFileModel.prototype.selected;
        /** @type {?} */
        ExtendedFileModel.prototype.conversionTypes;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConversionService = /** @class */ (function () {
        function ConversionService(_http, _config) {
            this._http = _http;
            this._config = _config;
            this._selectedItems = new rxjs.BehaviorSubject(new Array());
            this._selectItems = this._selectedItems.asObservable();
            this._selectedFormat = new rxjs.BehaviorSubject(null);
            this._selectFormat = this._selectedFormat.asObservable();
            this._itemToConvert = new rxjs.BehaviorSubject(null);
            this.itemToConvert = this._itemToConvert.asObservable();
            this._itemToRemove = new rxjs.BehaviorSubject(null);
            this.itemToRemove = this._itemToRemove.asObservable();
        }
        Object.defineProperty(ConversionService.prototype, "selectedItems", {
            get: /**
             * @return {?}
             */
            function () {
                return this._selectItems;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ConversionService.prototype, "selectedFormat", {
            get: /**
             * @return {?}
             */
            function () {
                return this._selectFormat;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} filesToConvert
         * @return {?}
         */
        ConversionService.prototype.selectItems = /**
         * @param {?} filesToConvert
         * @return {?}
         */
        function (filesToConvert) {
            this._selectedItems.next(filesToConvert);
        };
        /**
         * @param {?} selectedFormat
         * @return {?}
         */
        ConversionService.prototype.selectFormat = /**
         * @param {?} selectedFormat
         * @return {?}
         */
        function (selectedFormat) {
            this._selectedFormat.next(selectedFormat);
        };
        /**
         * @param {?} path
         * @return {?}
         */
        ConversionService.prototype.loadFiles = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            return this._http.post(this._config.getConversionApiEndpoint() + commonComponents.Api.LOAD_FILE_TREE, { 'path': path }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} file
         * @param {?} url
         * @param {?} rewrite
         * @return {?}
         */
        ConversionService.prototype.upload = /**
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
            return this._http.post(this._config.getConversionApiEndpoint() + commonComponents.Api.UPLOAD_DOCUMENTS, formData);
        };
        /**
         * @param {?} file
         * @return {?}
         */
        ConversionService.prototype.convert = /**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            /** @type {?} */
            var req = new ConversionRequestModel();
            req.added = true;
            req.destinationType = file.destinationType;
            req.guid = file.guid;
            req.size = file.size;
            req.destDocumentType = commonComponents.FileUtil.find(file.destinationType, false).format;
            return this._http.post(this._config.getConversionApiEndpoint() + commonComponents.Api.CONVERT_FILE, req);
        };
        /**
         * @param {?} guid
         * @return {?}
         */
        ConversionService.prototype.getDownloadUrl = /**
         * @param {?} guid
         * @return {?}
         */
        function (guid) {
            return this._config.getConversionApiEndpoint() + commonComponents.Api.DOWNLOAD_DOCUMENTS + '/?path=' + guid;
        };
        /**
         * @param {?} item
         * @return {?}
         */
        ConversionService.prototype.selectedItemToConvert = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this._itemToConvert.next(item);
        };
        /**
         * @param {?} item
         * @return {?}
         */
        ConversionService.prototype.selectedItemToRemove = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this._itemToRemove.next(item);
        };
        ConversionService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ConversionService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ ConversionService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ConversionService_Factory() { return new ConversionService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: ConversionService, providedIn: "root" });
        return ConversionService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ConversionService.prototype._selectedItems;
        /**
         * @type {?}
         * @private
         */
        ConversionService.prototype._selectItems;
        /**
         * @type {?}
         * @private
         */
        ConversionService.prototype._selectedFormat;
        /**
         * @type {?}
         * @private
         */
        ConversionService.prototype._selectFormat;
        /**
         * @type {?}
         * @private
         */
        ConversionService.prototype._itemToConvert;
        /** @type {?} */
        ConversionService.prototype.itemToConvert;
        /**
         * @type {?}
         * @private
         */
        ConversionService.prototype._itemToRemove;
        /** @type {?} */
        ConversionService.prototype.itemToRemove;
        /**
         * @type {?}
         * @private
         */
        ConversionService.prototype._http;
        /**
         * @type {?}
         * @private
         */
        ConversionService.prototype._config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConversionConfig = /** @class */ (function () {
        function ConversionConfig() {
        }
        return ConversionConfig;
    }());
    if (false) {
        /** @type {?} */
        ConversionConfig.prototype.rewrite;
        /** @type {?} */
        ConversionConfig.prototype.pageSelector;
        /** @type {?} */
        ConversionConfig.prototype.download;
        /** @type {?} */
        ConversionConfig.prototype.upload;
        /** @type {?} */
        ConversionConfig.prototype.print;
        /** @type {?} */
        ConversionConfig.prototype.browse;
        /** @type {?} */
        ConversionConfig.prototype.enableRightClick;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConversionConfigService = /** @class */ (function () {
        function ConversionConfigService(_http, _config) {
            this._http = _http;
            this._config = _config;
            this._conversionConfig = new rxjs.BehaviorSubject(new ConversionConfig());
            this._updatedConfig = this._conversionConfig.asObservable();
        }
        Object.defineProperty(ConversionConfigService.prototype, "updatedConfig", {
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
        ConversionConfigService.prototype.load = /**
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
                var configEndpoint = _this._config.getConfigEndpoint(commonComponents.Api.CONVERSION_APP);
                _this._http.get(configEndpoint, commonComponents.Api.httpOptionsJson).toPromise().then((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    /** @type {?} */
                    var conversionConfig = (/** @type {?} */ (response));
                    _this._conversionConfig.next(conversionConfig);
                    resolve();
                })).catch((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    reject("Could not load conversion config: " + JSON.stringify(response));
                }));
            }));
        };
        ConversionConfigService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ConversionConfigService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ ConversionConfigService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ConversionConfigService_Factory() { return new ConversionConfigService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: ConversionConfigService, providedIn: "root" });
        return ConversionConfigService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ConversionConfigService.prototype._conversionConfig;
        /**
         * @type {?}
         * @private
         */
        ConversionConfigService.prototype._updatedConfig;
        /**
         * @type {?}
         * @private
         */
        ConversionConfigService.prototype._http;
        /**
         * @type {?}
         * @private
         */
        ConversionConfigService.prototype._config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConversionAppComponent = /** @class */ (function () {
        function ConversionAppComponent(_modalService, _conversionService, configService, uploadFilesService) {
            var _this = this;
            this._modalService = _modalService;
            this._conversionService = _conversionService;
            this.title = 'conversion';
            this.files = [];
            this.conversionItems = [];
            this.browseFilesModal = commonComponents.CommonModals.BrowseFiles;
            this.leftBarOpen = false;
            this.warningItems = 0;
            configService.updatedConfig.subscribe((/**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                _this.conversionConfig = config;
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
                        _this._conversionService.upload(uploads.item(i), '', _this.conversionConfig.rewrite).subscribe((/**
                         * @return {?}
                         */
                        function () {
                            _this.selectDir('');
                        }));
                    }
                }
            }));
            _conversionService.selectedItems.subscribe((/**
             * @param {?} selectedItems
             * @return {?}
             */
            function (selectedItems) {
                selectedItems.forEach((/**
                 * @param {?} selectedItem
                 * @return {?}
                 */
                function (selectedItem) {
                    if (selectedItem.warning)
                        _this.warningItems++;
                    if (Object.keys(selectedItem).length > 0 && !_this.itemAlreadyAdded(selectedItem)) {
                        _this.conversionItems.push((/** @type {?} */ (selectedItem)));
                    }
                }));
            }));
            _conversionService.selectedFormat.subscribe((/**
             * @param {?} selectedFormat
             * @return {?}
             */
            function (selectedFormat) {
                _this.selectedFormat = selectedFormat;
            }));
            _conversionService.itemToConvert.subscribe((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (item)
                    _this.convertSingleItem(item);
            }));
            _conversionService.itemToRemove.subscribe((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (item)
                    _this.removeItemFromQueue(item);
            }));
        }
        Object.defineProperty(ConversionAppComponent.prototype, "rewriteConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.conversionConfig ? this.conversionConfig.rewrite : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ConversionAppComponent.prototype, "browseConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.conversionConfig ? this.conversionConfig.browse : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ConversionAppComponent.prototype, "uploadConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.conversionConfig ? this.conversionConfig.upload : true;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} $event
         * @return {?}
         */
        ConversionAppComponent.prototype.fileDropped = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if ($event) {
                this._modalService.open(commonComponents.CommonModals.BrowseFiles);
            }
        };
        /**
         * @param {?} id
         * @return {?}
         */
        ConversionAppComponent.prototype.openModal = /**
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
        ConversionAppComponent.prototype.closeModal = /**
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
        ConversionAppComponent.prototype.upload = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this._conversionService.upload(null, $event, this.rewriteConfig).subscribe((/**
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
        ConversionAppComponent.prototype.selectDir = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this._conversionService.loadFiles($event).subscribe((/**
             * @param {?} files
             * @return {?}
             */
            function (files) { return _this.files = files || []; }));
        };
        /**
         * @param {?} item
         * @return {?}
         */
        ConversionAppComponent.prototype.convertSingleItem = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var workItem = this.conversionItems.find((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.guid === item.guid
                && x.destinationType === item.destinationType; }));
            workItem.converting = true;
            this._conversionService.convert(item).subscribe((/**
             * @return {?}
             */
            function () {
                workItem.converting = false;
                workItem.converted = true;
            }), ((/**
             * @return {?}
             */
            function () {
                // TODO: add error handling?
                workItem.converting = false;
            })));
        };
        /**
         * @return {?}
         */
        ConversionAppComponent.prototype.convertAll = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.conversionItems.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (!item.converted && !item.converting) {
                    _this.convertSingleItem(item);
                }
            }));
        };
        /**
         * @return {?}
         */
        ConversionAppComponent.prototype.convertAllUnavailable = /**
         * @return {?}
         */
        function () {
            return this.conversionItems.length === 0 || this.conversionItems.filter((/**
             * @param {?} ci
             * @return {?}
             */
            function (ci) { return ci.converted !== true; })).length === 0;
        };
        /**
         * @param {?} item
         * @return {?}
         */
        ConversionAppComponent.prototype.removeItemFromQueue = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            var _this = this;
            if (this.conversionItems.length > 0) {
                this.conversionItems.forEach((/**
                 * @param {?} ci
                 * @param {?} index
                 * @return {?}
                 */
                function (ci, index) {
                    if (ci.guid === item.guid && ci.destinationType === item.destinationType)
                        _this.conversionItems.splice(index, 1);
                }));
            }
        };
        /**
         * @param {?} checked
         * @return {?}
         */
        ConversionAppComponent.prototype.selectAllItems = /**
         * @param {?} checked
         * @return {?}
         */
        function (checked) {
            this.files.forEach((/**
             * @param {?} f
             * @return {?}
             */
            function (f) {
                if (!f.isDirectory && !f.directory)
                    f.selected = checked;
            }));
        };
        /**
         * @param {?} selectedItem
         * @return {?}
         */
        ConversionAppComponent.prototype.itemAlreadyAdded = /**
         * @param {?} selectedItem
         * @return {?}
         */
        function (selectedItem) {
            return this.conversionItems.filter((/**
             * @param {?} ci
             * @return {?}
             */
            function (ci) { return ci.destinationType === selectedItem.destinationType
                && ci.guid === selectedItem.guid; })).length === 1;
        };
        /**
         * @return {?}
         */
        ConversionAppComponent.prototype.isLeftBarOpen = /**
         * @return {?}
         */
        function () {
            return this.isDesktop ? true : this.leftBarOpen;
        };
        ConversionAppComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-conversion',
                        template: "<div class=\"wrapper\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'conversion'\" [icon]=\"'exchange-alt'\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-button [icon]=\"'play'\" [tooltip]=\"'Convert'\" [disabled]=\"convertAllUnavailable()\"\n      (click)=\"convertAll()\"></gd-button>\n\n    </gd-top-toolbar>\n  </div>\n\n  <gd-init-state [icon]=\"'exchange-alt'\" [text]=\"'Drop file here to upload'\" *ngIf=\"conversionItems.length == 0\" (fileDropped)=\"fileDropped($event)\">\n      Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n      Or drop file here\n  </gd-init-state>\n\n  <gd-conversion-queue [items]=\"conversionItems\" (selectedItemToConvert)=\"convertSingleItem($event)\"></gd-conversion-queue>\n\n  <gd-conversion-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                                    [uploadConfig]=\"uploadConfig\" (selectAll)=\"selectAllItems($event)\"></gd-conversion-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-information-modal [warningCount]=\"warningItems\" [formatName]=\"selectedFormat\"></gd-information-modal>\n</div>\n",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}/deep/ .tools .button{color:#fff!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}/deep/ .tools .button.inactive{color:#959da5!important}/deep/ .tools .icon-button{margin:0 0 0 7px!important}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:inherit}.gd-document{width:100%;height:100%}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}@media (max-width:1037px){::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px!important;width:60px}}"]
                    }] }
        ];
        /** @nocollapse */
        ConversionAppComponent.ctorParameters = function () { return [
            { type: commonComponents.ModalService },
            { type: ConversionService },
            { type: ConversionConfigService },
            { type: commonComponents.UploadFilesService }
        ]; };
        return ConversionAppComponent;
    }());
    if (false) {
        /** @type {?} */
        ConversionAppComponent.prototype.title;
        /** @type {?} */
        ConversionAppComponent.prototype.files;
        /** @type {?} */
        ConversionAppComponent.prototype.conversionItems;
        /** @type {?} */
        ConversionAppComponent.prototype.browseFilesModal;
        /** @type {?} */
        ConversionAppComponent.prototype.isDesktop;
        /** @type {?} */
        ConversionAppComponent.prototype.leftBarOpen;
        /** @type {?} */
        ConversionAppComponent.prototype.conversionConfig;
        /** @type {?} */
        ConversionAppComponent.prototype.result;
        /** @type {?} */
        ConversionAppComponent.prototype.selectedFormat;
        /** @type {?} */
        ConversionAppComponent.prototype.warningItems;
        /**
         * @type {?}
         * @private
         */
        ConversionAppComponent.prototype._modalService;
        /**
         * @type {?}
         * @private
         */
        ConversionAppComponent.prototype._conversionService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function Option() { }
    if (false) {
        /** @type {?} */
        Option.prototype.name;
        /** @type {?} */
        Option.prototype.value;
        /** @type {?} */
        Option.prototype.warning;
    }
    var ConversionBrowseFilesModalComponent = /** @class */ (function (_super) {
        __extends(ConversionBrowseFilesModalComponent, _super);
        function ConversionBrowseFilesModalComponent(_uploadService, _conversionService, _modalService) {
            var _this = _super.call(this, _uploadService) || this;
            _this._conversionService = _conversionService;
            _this._modalService = _modalService;
            _this.selectAll = new core.EventEmitter();
            _this.dynamicOptions = [];
            return _this;
        }
        /**
         * @param {?} checked
         * @return {?}
         */
        ConversionBrowseFilesModalComponent.prototype.selectAllItems = /**
         * @param {?} checked
         * @return {?}
         */
        function (checked) {
            this.selectAll.emit(checked);
            this.dynamicOptions = this.prepareMultipleConversionTypes();
        };
        /**
         * @param {?} checked
         * @param {?} file
         * @return {?}
         */
        ConversionBrowseFilesModalComponent.prototype.selectSingleItem = /**
         * @param {?} checked
         * @param {?} file
         * @return {?}
         */
        function (checked, file) {
            // TODO: refactor?
            /** @type {?} */
            var selectedFiles = this.files.filter((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return f.guid === file.guid; }));
            if (selectedFiles.length === 1) {
                selectedFiles[0].selected = checked;
            }
            this.dynamicOptions = this.prepareMultipleConversionTypes();
        };
        /**
         * @return {?}
         */
        ConversionBrowseFilesModalComponent.prototype.getLabelString = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var label = 'Add selected';
            if (this.files && this.files.length > 0) {
                /** @type {?} */
                var selectedCount = this.files.filter((/**
                 * @param {?} file
                 * @return {?}
                 */
                function (file) { return file.selected; })).length;
                return selectedCount > 0 ? 'Add ' + selectedCount + ' selected' : label;
            }
            else {
                return label;
            }
        };
        /**
         * @return {?}
         */
        ConversionBrowseFilesModalComponent.prototype.prepareMultipleConversionTypes = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var allTypes = [];
            this.files.filter((/**
             * @param {?} file
             * @return {?}
             */
            function (file) { return file.selected; })).forEach((/**
             * @param {?} f
             * @return {?}
             */
            function (f) {
                if (f.conversionTypes.length > 0) {
                    /** @type {?} */
                    var types = Object.assign([], f.conversionTypes);
                    allTypes.push(types);
                }
            }));
            /** @type {?} */
            var longestArray = [];
            allTypes.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (item.length >= longestArray.length) {
                    longestArray = item;
                }
            }));
            //add warnings
            allTypes.forEach((/**
             * @param {?} typesArr
             * @return {?}
             */
            function (typesArr) {
                var _loop_1 = function (i) {
                    /** @type {?} */
                    var type = (longestArray[i].value) ? longestArray[i].value : longestArray[i];
                    // TODO: reconsider second check
                    if (typesArr.indexOf(type) === -1 && typesArr.filter((/**
                     * @param {?} t
                     * @return {?}
                     */
                    function (t) { return t.name === type; })).length === 0) {
                        longestArray[i] = {
                            value: type,
                            name: type,
                            warning: true,
                            icon: _this.getFormatIcon((/** @type {?} */ ({ name: 'dummyName.' + type, directory: false })))
                        };
                    }
                    else {
                        if (!longestArray[i].warning) {
                            longestArray[i] = {
                                value: type,
                                name: type,
                                warning: false,
                                icon: _this.getFormatIcon((/** @type {?} */ ({ name: 'dummyName.' + type, directory: false })))
                            };
                        }
                    }
                };
                for (var i = 0; i < longestArray.length; i++) {
                    _loop_1(i);
                }
            }));
            return longestArray;
        };
        /**
         * @param {?} $event
         * @param {?} file
         * @return {?}
         */
        ConversionBrowseFilesModalComponent.prototype.selectFormat = /**
         * @param {?} $event
         * @param {?} file
         * @return {?}
         */
        function ($event, file) {
            var _this = this;
            // the case when we selecting format inline on the single file
            if (file) {
                this.selectAll.emit(false);
                file.selected = true;
            }
            this._format = $event.value;
            /** @type {?} */
            var conversionItems = new Array();
            this.files.forEach((/**
             * @param {?} f
             * @return {?}
             */
            function (f) {
                if (f.selected && !f.isDirectory && !f.directory) {
                    /** @type {?} */
                    var extension = f.guid.replace(/^.*\./, '');
                    /** @type {?} */
                    var destinationGuid = f.guid.replace(extension, _this._format);
                    /** @type {?} */
                    var destinationFileName = destinationGuid.replace(/^.*[\\\/]/, '');
                    /** @type {?} */
                    var conversionItem = {
                        guid: f.guid,
                        directory: f.directory,
                        size: f.size,
                        name: f.name,
                        destinationType: $event.value,
                        isDirectory: f.isDirectory,
                        sizeString: _this.getSize(f.size),
                        sourceIcon: _this.getFormatIcon(f),
                        sourceFormatName: _this.getFormatName(f),
                        destinationFileName: destinationFileName,
                        destinationFormatName: _this.getFormatName((/** @type {?} */ ({ name: destinationFileName, directory: false }))),
                        destinationIcon: _this.getFormatIcon((/** @type {?} */ ({ name: destinationFileName, directory: false }))),
                        converted: false,
                        // TODO: maybe there is a more beauty way?
                        converting: false,
                        warning: f.conversionTypes.indexOf(_this._format) === -1 ? true : false
                    };
                    conversionItems.push(conversionItem);
                }
            }));
            this._conversionService.selectItems(conversionItems);
            this._conversionService.selectFormat(this._format.toUpperCase());
            this._modalService.close(commonComponents.CommonModals.BrowseFiles);
            if ($event.warning) {
                this._modalService.open(commonComponents.CommonModals.InformationMessage);
            }
        };
        /**
         * @param {?} val
         * @return {?}
         */
        ConversionBrowseFilesModalComponent.prototype.createFormatOption = /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            return {
                value: val,
                name: val,
                icon: this.getFormatIcon((/** @type {?} */ ({ name: 'dummyName.' + val, directory: false })))
            };
        };
        /**
         * @param {?} formats
         * @return {?}
         */
        ConversionBrowseFilesModalComponent.prototype.formatOptions = /**
         * @param {?} formats
         * @return {?}
         */
        function (formats) {
            if (formats) {
                /** @type {?} */
                var allTypes = new Array();
                for (var i = 0; i < formats.length; i++) {
                    allTypes.push(this.createFormatOption(formats[i]));
                }
                return allTypes;
            }
        };
        /**
         * @return {?}
         */
        ConversionBrowseFilesModalComponent.prototype.anyItemSelected = /**
         * @return {?}
         */
        function () {
            // TODO: reconsider such checks
            if (this.files && this.files.length > 0) {
                return this.files.filter((/**
                 * @param {?} file
                 * @return {?}
                 */
                function (file) { return file.selected; })).length > 0;
            }
            else
                return false;
        };
        /**
         * @return {?}
         */
        ConversionBrowseFilesModalComponent.prototype.allItemsSelected = /**
         * @return {?}
         */
        function () {
            if (this.files && this.files.filter((/**
             * @param {?} file
             * @return {?}
             */
            function (file) { return !file.isDirectory && !file.directory; })).length > 0 && this.files.length > 0) {
                return this.files.filter((/**
                 * @param {?} file
                 * @return {?}
                 */
                function (file) { return !file.isDirectory && !file.directory && file.selected; })).length
                    === this.files.filter((/**
                     * @param {?} file
                     * @return {?}
                     */
                    function (file) { return !file.isDirectory && !file.directory; })).length;
            }
            else
                return false;
        };
        ConversionBrowseFilesModalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-conversion-browse-files-modal',
                        template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\n    <div class=\"dnd-wrapper\">\n      <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\n      <span class=\"text\">Drop file here to upload</span>\n    </div>\n  </div>\n  <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n    <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\n            (change)=\"handleFileInput($event.target.files)\">\n\n    <div class=\"select-all\">\n      <input type=\"checkbox\" [disabled]=\"!(this.files && this.files.length > 0)\" class=\"gd-checkbox\" [checked]=\"allItemsSelected()\"\n               (change)=\"selectAllItems($event.target.checked);\">\n    </div>\n    <div class=\"context\">\n      <div class=\"context-actions\">\n        <gd-drop-down>\n          <gd-drop-down-toggle>\n            <gd-button [icon]=\"'plus'\" [disabled]=\"!anyItemSelected()\" [intent]=\"'primary'\" [iconOnly]=\"false\">\n              {{getLabelString()}}\n            </gd-button>\n          </gd-drop-down-toggle>\n          <gd-drop-down-items>\n            <gd-drop-down-item (selected)=\"selectFormat(item, null)\" *ngFor=\"let item of dynamicOptions\">\n              <div class=\"text\">{{item.name}}</div>\n              <div *ngIf=\"item.warning\" class=\"gd-type-warning\"\n                    title=\"1 selected file(s) can\u2019t be converted to {{item.name}} format\">\n                <fa-icon [icon]=\"['fas','exclamation-triangle']\"></fa-icon>\n              </div>\n            </gd-drop-down-item>\n          </gd-drop-down-items>\n        </gd-drop-down>\n        <gd-drop-down>\n          <gd-drop-down-toggle>\n            <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\n              Upload file\n            </gd-button>\n          </gd-drop-down-toggle>\n          <gd-drop-down-items>\n            <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\n              <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\n              <div class=\"text\">{{item.name}}</div>\n            </gd-drop-down-item>\n          </gd-drop-down-items>\n        </gd-drop-down>\n      </div>\n      <div class=\"context-panel\" *ngIf=\"showUploadUrl\">\n        <div class=\"upload-url\">\n          <input class=\"url-input\" placeholder=\"https://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n          <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"list-files-header\" [ngClass]=\"{'upload-url': showUploadUrl}\">\n    <div class=\"header-name\">FILE</div>\n    <div class=\"header-size\">SIZE</div>\n  </div>\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-body\">\n        <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n            <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n          </div>\n          <div class=\"go-up-dots\">..</div>\n        </div>\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n          <div class=\"gd-file-checkbox\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\n            <input type=\"checkbox\" *ngIf=\"file && !file.isDirectory && !file.directory\" [checked]=\"file.selected\"\n                   (change)=\"selectSingleItem($event.target.checked, file);\" class=\"gd-checkbox gd-checkbox-single\">\n          </div>\n          <div class=\"file-description\">\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n            <div class=\"file-name-format\">\n              <div class=\"file-name\" [ngClass]=\"{'gd-folder-name' : file.isDirectory || file.directory}\">{{file?.name}}</div>\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\n            </div>\n          </div>\n          <div class=\"file-size\">{{getSize(file?.size)}}</div>\n          <div class=\"file-format-select\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\n            <gd-drop-down *ngIf=\"!(file.isDirectory || file.directory)\" [placement]=\"{h:'left',v:'center'}\">\n              <gd-drop-down-toggle>\n                <gd-button [icon]=\"'plus'\">\n                </gd-button>\n              </gd-drop-down-toggle>\n              <gd-drop-down-items>\n                <gd-drop-down-item (selected)=\"selectFormat(item, file)\" *ngFor=\"let item of formatOptions(file.conversionTypes)\">\n                  <div class=\"text\">{{item.name}}</div>\n                </gd-drop-down-item>\n              </gd-drop-down-items>\n            </gd-drop-down>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n      <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
                        styles: [".gd-modal-table{width:100%;text-align:left}#gd-browse-section{width:1036px;height:561px;overflow-y:auto}.list-files-header{height:60px;color:#6e6e6e;font-size:13px;font-weight:700;background-color:#f4f4f4;margin-top:24px}.list-files-header.upload-url{margin-top:20px}.header-name{padding-left:68px;width:90%;line-height:60px}.header-size{padding-right:84px;line-height:60px}.file-size,.header-size{width:7%;color:#777;text-align:left}.file-size{font-size:12px;width:7%;line-height:79px}.file-description{display:-webkit-box;display:flex;width:90%;padding:18px 0;font-size:14px;-webkit-box-flex:1;flex:1;cursor:pointer;overflow:hidden}.file-description .ng-fa-icon{font-size:32px}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.upload-panel{display:-webkit-box;display:flex;position:relative;width:100%;margin-top:24px;margin-right:24px}.upload-panel .select-all{height:37px;margin:0 16px 0 15px;width:37px;line-height:44px;text-align:center}.upload-panel .context{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;margin-right:24px}.upload-panel .context .context-actions{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-actions :last-child{margin-right:0}.upload-panel .context .context-actions ::ng-deep .button{height:37px;width:96px;padding:0;-webkit-box-pack:center;justify-content:center;font-size:14px}.upload-panel .context .context-actions ::ng-deep .button ::ng-deep .text{font-size:10px}.upload-panel .context .context-actions ::ng-deep .button.primary{width:117px;background-color:#4b566c}.upload-panel .context .context-actions ::ng-deep .button.primary.inactive{width:106px;background-color:#959da5}.upload-panel .context .context-actions ::ng-deep .button.primary.inactive /deep/ .text{color:#3e4e5a}.upload-panel .context .context-actions ::ng-deep .button.primary.inactive /deep/ fa-icon{color:#3e4e5a}.upload-panel .context .context-panel{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%;margin-top:20px}.upload-panel .context .context-panel .upload-url{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-panel .upload-url .url-input{width:100%;height:27px;border:1px solid #25c2d4;font-size:14px;padding-left:6px}.upload-panel .context .context-panel .upload-url .url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.upload-panel .context .context-panel .upload-url .url-check .ng-fa-icon{display:block;padding:8px}.upload-panel gd-drop-down{margin-right:10px}.upload-panel gd-drop-down /deep/ .drop-down-item .text{margin-left:7px;text-transform:uppercase;color:#6e6e6e}.upload-panel gd-drop-down /deep/ .drop-down-item:hover{background-color:#4b566c}.upload-panel gd-drop-down /deep/ .drop-down-item:hover *{color:#fff}.list-files-header,.list-files-lines{display:-webkit-box;display:flex;width:100%;-webkit-box-pack:justify;justify-content:space-between}.file-description .ng-fa-icon.fa-file-pdf{color:#e04e4e}.file-description .ng-fa-icon.fa-file-word{color:#539cf0}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29e1e}.file-description .ng-fa-icon.fa-file-excel{color:#7cbc46}.file-description .ng-fa-icon.fa-file-image{color:#c375ed}.file-description .ng-fa-icon.fa-file,.file-description .ng-fa-icon.fa-file-alt,.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#4b566c}.go-up{cursor:pointer;display:-webkit-box;display:flex;font-size:26px;color:#4b566c;height:79px}.go-up-dots{margin-left:20px;margin-top:22px;font-size:16px}.go-up-icon{display:block;padding:18px 0 18px 68px}.file-name{font-size:16px;color:#6e6e6e;overflow:hidden;text-overflow:ellipsis}.file-name-format{padding-left:11px;overflow:hidden}.file-format{font-size:10px;padding-top:3px;color:#acacac}.go-up,.list-files-lines{border-bottom:1px solid #e7e7e7}.list-files-lines:hover{background-color:#e5e5e5}.gd-dnd-wrap{background-color:#fff;cursor:default;position:absolute;width:100%;height:calc(100% - 60px);background:rgba(255,255,255,.7);z-index:1;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.gd-drag-n-drop-icon{margin-top:-50px}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-file-checkbox{height:37px;margin:21px 16px 21px 15px;width:37px;line-height:44px;text-align:center}.gd-file-checkbox.empty{width:37px}.file-format-select{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:36px;margin-right:24px}.file-format-select ::ng-deep .button{padding:0;width:36px;margin:0;font-size:14px}.file-format-select ::ng-deep .button .text{padding:0}.file-format-select ::ng-deep .show .button{color:#959da5}.file-format-select gd-drop-down /deep/ .drop-down-item{width:96px}.file-format-select gd-drop-down /deep/ .drop-down-item .text{padding-left:7px;text-transform:uppercase;color:#6e6e6e}.file-format-select gd-drop-down /deep/ .drop-down-item:hover{background-color:#4b566c}.file-format-select gd-drop-down /deep/ .drop-down-item:hover *{color:#fff}.gd-checkbox{width:19px;height:19px;margin:0}.gd-checkbox:before{position:relative;display:-webkit-box;display:flex;width:17px;height:17px;border:1px solid #707070;content:\"\";background:#fff;cursor:pointer}.gd-checkbox:after{position:relative;display:-webkit-box;display:flex;left:1px;top:-18px;width:16px;height:16px;content:\"\";cursor:pointer}.gd-checkbox:checked:after{font-family:\"Font Awesome 5 Free\";content:\"\\f00c\";font-weight:900;font-size:16px;color:#6e6e6e}.gd-add-selected.active{cursor:pointer;opacity:1}.gd-add-selected{width:140px;height:36px;background-color:#3e4e5a;color:#fff;margin:0 8px 0 0;border:0;cursor:not-allowed;opacity:.43}.gd-folder-name{margin-top:8px}.dnd-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;top:259px;position:absolute}.dnd-wrapper .text{color:#6e6e6e;font-size:14px}.dnd-wrapper .icon{display:-webkit-box;display:flex;width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}@media (max-width:1037px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}.file-size,.list-files-header{display:none}#gd-browse-section{width:100%;height:calc(100% - 146px)}}"]
                    }] }
        ];
        /** @nocollapse */
        ConversionBrowseFilesModalComponent.ctorParameters = function () { return [
            { type: commonComponents.UploadFilesService },
            { type: ConversionService },
            { type: commonComponents.ModalService }
        ]; };
        ConversionBrowseFilesModalComponent.propDecorators = {
            files: [{ type: core.Input }],
            selectAll: [{ type: core.Output }]
        };
        return ConversionBrowseFilesModalComponent;
    }(commonComponents.BrowseFilesModalComponent));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ConversionBrowseFilesModalComponent.prototype._format;
        /** @type {?} */
        ConversionBrowseFilesModalComponent.prototype.formats;
        /** @type {?} */
        ConversionBrowseFilesModalComponent.prototype.files;
        /** @type {?} */
        ConversionBrowseFilesModalComponent.prototype.selectAll;
        /** @type {?} */
        ConversionBrowseFilesModalComponent.prototype.dynamicOptions;
        /**
         * @type {?}
         * @private
         */
        ConversionBrowseFilesModalComponent.prototype._conversionService;
        /**
         * @type {?}
         * @private
         */
        ConversionBrowseFilesModalComponent.prototype._modalService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InformationModalComponent = /** @class */ (function () {
        function InformationModalComponent() {
        }
        /**
         * @return {?}
         */
        InformationModalComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        InformationModalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-information-modal',
                        template: "<gd-modal id=\"gd-information-message\" [title]=\"'Imposible conversions'\">\n  <section id=\"gd-information-section\">\n    <fa-icon [icon]=\"['fas', 'info-circle']\"></fa-icon>\n    <div class=\"gd-modal-information\">\n      <div class=\"gd-modal-information-title\">Incompatible formats</div>\n      <div class=\"gd-modal-information-message\">{{warningCount}} selected {{warningCount == 1 ? 'file' : 'files'}} can't be converted to {{formatName}} format. Incompatible files will not be added to conversion queue.</div>\n    </div>\n  </section>\n</gd-modal>\n",
                        styles: [".gd-modal-information{display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex:1}.gd-modal-information .gd-modal-information-message{font-size:12px;margin:0 24px 24px 0;word-break:break-word}.gd-modal-information .gd-modal-information-title{font-size:16px;font-weight:700;margin:14px 0 10px}#gd-information-section{max-width:468px;max-height:107px;display:-webkit-box;display:flex}#gd-information-section fa-icon{-webkit-box-flex:1;flex:1;color:#25c2d4;font-size:40px;margin:13px 23px 90px;text-align:center;max-width:46px}"]
                    }] }
        ];
        /** @nocollapse */
        InformationModalComponent.ctorParameters = function () { return []; };
        InformationModalComponent.propDecorators = {
            formatName: [{ type: core.Input }],
            warningCount: [{ type: core.Input }]
        };
        return InformationModalComponent;
    }());
    if (false) {
        /** @type {?} */
        InformationModalComponent.prototype.formatName;
        /** @type {?} */
        InformationModalComponent.prototype.warningCount;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConversionQueueComponent = /** @class */ (function () {
        function ConversionQueueComponent() {
            this.items = [];
            this.selectedItemToConvert = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        ConversionQueueComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        ConversionQueueComponent.prototype.convertSingleItem = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.selectedItemToConvert.emit($event);
        };
        ConversionQueueComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-conversion-queue',
                        template: "<div id=\"gd-convert-queue\">\n  <div class=\"gd-queue-header\">\n    <div class=\"gd-placeholder\"></div>\n    <div>Source</div>\n    <div>Size</div>\n    <div>State</div>\n    <div>Target</div>\n    <div class=\"gd-queue-last-placeholder\"></div>\n  </div>\n  <div class=\"gd-queue-body\">\n    <div *ngFor=\"let item of items\">\n        <gd-conversion-item [item]=\"item\"></gd-conversion-item>\n    </div>\n  </div>\n</div>",
                        styles: ["#gd-convert-queue{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%;background-color:#e7e7e7}.gd-queue-header{display:-webkit-box;display:flex;font-size:13px;text-transform:uppercase;color:#6e6e6e;width:100%;height:60px;background-color:#f4f4f4;font-weight:700;-webkit-box-align:center;align-items:center}.gd-placeholder{margin:0 42px}.gd-queue-header div:nth-child(2){width:671px;text-align:left;display:-webkit-box;display:flex}.gd-queue-header div:nth-child(4){margin:0 162px 0 111px;width:32px}.gd-queue-header div:nth-child(3){width:112px;text-align:left}.gd-queue-header div:nth-child(5){width:644px;text-align:left}.gd-queue-body{overflow-y:scroll;height:calc(100% - 120px)}.gd-queue-last-placeholder{margin:0 52px}@media (max-width:1037px){.gd-queue-header{display:none}}"]
                    }] }
        ];
        /** @nocollapse */
        ConversionQueueComponent.ctorParameters = function () { return []; };
        ConversionQueueComponent.propDecorators = {
            items: [{ type: core.Input }],
            selectedItemToConvert: [{ type: core.Output }]
        };
        return ConversionQueueComponent;
    }());
    if (false) {
        /** @type {?} */
        ConversionQueueComponent.prototype.items;
        /** @type {?} */
        ConversionQueueComponent.prototype.selectedItemToConvert;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConversionItemComponent = /** @class */ (function () {
        function ConversionItemComponent(_conversionService) {
            this._conversionService = _conversionService;
        }
        /**
         * @return {?}
         */
        ConversionItemComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} $event
         * @param {?} item
         * @return {?}
         */
        ConversionItemComponent.prototype.convert = /**
         * @param {?} $event
         * @param {?} item
         * @return {?}
         */
        function ($event, item) {
            $event.preventDefault();
            $event.stopPropagation();
            this._conversionService.selectedItemToConvert(item);
        };
        /**
         * @param {?} item
         * @return {?}
         */
        ConversionItemComponent.prototype.downloadFile = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            window.location.assign(this._conversionService.getDownloadUrl(item.destinationFileName));
        };
        /**
         * @param {?} $event
         * @param {?} item
         * @return {?}
         */
        ConversionItemComponent.prototype.removeItemFromQueue = /**
         * @param {?} $event
         * @param {?} item
         * @return {?}
         */
        function ($event, item) {
            $event.preventDefault();
            $event.stopPropagation();
            this._conversionService.selectedItemToRemove(item);
        };
        ConversionItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-conversion-item',
                        template: "<div *ngIf=\"item\" class=\"gd-convert-item\">\n  <div class=\"gd-convert-remove\" [ngClass]=\"{'disabled': item.converting}\" (click)=\"removeItemFromQueue($event, item)\">\n    <span>&times;</span>\n  </div>\n  <div class=\"gd-filequeue-name disabled\">\n    <fa-icon [icon]=\"['fas', item.sourceIcon]\" [class]=\"'ng-fa-icon'\"></fa-icon>\n    <div class=\"gd-file-name gd-queue-name\">{{item.name}}\n      <div class=\"gd-file-format\">{{item.sourceFormatName}}</div>\n      <div class=\"gd-file-format mobile\">\n        <fa-icon [icon]=\"['fas','arrow-right']\"></fa-icon> \n        <fa-icon [icon]=\"['fas', item.destinationIcon]\" [class]=\"'ng-fa-icon'\" [ngClass]=\"['fa-' + item.destinationIcon]\"></fa-icon>{{item.destinationFileName}}\n      </div>\n    </div>\n  </div>\n  <div class=\"gd-file-size gd-queue-size\">{{item.sizeString}}</div>\n  <div class=\"gd-convert-status\">\n      <fa-icon class=\"gd-conversion-pending\" [icon]=\"['far','clock']\" [hidden]=\"item.converted || item.converting\"></fa-icon>\n      <fa-icon class=\"gd-conversion-progress\" [icon]=\"['fas','circle-notch']\" [spin]=\"true\" [hidden]=\"!item.converting\"></fa-icon>\n      <fa-icon class=\"gd-conversion-complete\" [icon]=\"['fas','check']\" [hidden]=\"!item.converted || item.converting\"></fa-icon>\n  </div>\n  <div class=\"gd-filequeue-name disabled gd-destination-file\">\n      <fa-icon [icon]=\"['fas', item.destinationIcon]\" [class]=\"'ng-fa-icon'\" [ngClass]=\"[item.converted ? 'fa-' + item.destinationIcon : '']\"></fa-icon>\n    <div class=\"gd-file-name gd-queue-name\">{{item.destinationFileName}}<div class=\"gd-file-format\">{{item.destinationFormatName}}</div></div>\n  </div>\n  <div (click)=\"convert($event, item)\" class=\"gd-convert-single\" \n      [ngClass]=\"{'disabled': item.converting}\" [hidden]=\"item.converted\">\n      <fa-icon [icon]=\"['fas','play']\"></fa-icon>\n  </div>\n  <div (click)=\"convert($event, item)\" class=\"gd-convert-single mobile\" \n    [ngClass]=\"{'disabled': item.converting}\" *ngIf=\"!item.converted && !item.converting\">\n    <fa-icon [icon]=\"['fas','play']\"></fa-icon>\n  </div>\n  <fa-icon class=\"gd-conversion-progress mobile\" [icon]=\"['fas','circle-notch']\" [spin]=\"true\" *ngIf=\"item.converting\"></fa-icon>\n  <div (click)=\"downloadFile(item)\" class=\"gd-download-single\" [hidden]=\"!item.converted\">\n    <fa-icon [icon]=\"['fas','download']\"></fa-icon>\n  </div>\n</div>",
                        styles: [".gd-convert-item{display:-webkit-box;display:flex;width:100%;height:98px;border-bottom:1px solid #e7e7e7;background-color:#fff;-webkit-box-align:center;align-items:center}.gd-convert-remove{font-size:18px;color:#6e6e6e;margin:0 24px;cursor:pointer}.gd-convert-remove span{width:37px;height:37px;display:block;line-height:37px;text-align:center;font-weight:700}.gd-convert-remove.disabled{color:#959da5;opacity:.4}.gd-filequeue-name{display:-webkit-box;display:flex;width:671px}.gd-filequeue-name.disabled fa-icon{color:#6e6e6e}.gd-queue-name{text-align:left;cursor:default}.gd-queue-size{text-align:left;font-size:14px}.gd-destination-file{cursor:not-allowed}.gd-destination-file .gd-queue-name{cursor:inherit}.gd-convert-status{font-size:32px;color:#dbdbdb;margin:0 162px 0 111px}.gd-conversion-complete{color:#62a529;margin-left:5px}.gd-conversion-progress{position:inherit;width:32px;height:32px;font-size:32px!important;line-height:32px;color:#007aff}.gd-conversion-progress.mobile{display:none}.gd-convert-single,.gd-download-single{font-size:16px;color:grey;margin:41px 36px 42px 11px;cursor:pointer}.gd-convert-single.mobile,.gd-download-single.mobile{display:none}.gd-convert-single.disabled,.gd-download-single.disabled{color:#959da5;opacity:.4}.gd-file-format{font-size:10px;color:#acacac;padding-top:4px}.gd-file-format.mobile{display:none}.gd-file-size{width:112px;color:#777}.disabled{cursor:not-allowed!important}.gd-convert-item .ng-fa-icon.fa-file-pdf{color:#e21717}.gd-convert-item .ng-fa-icon.fa-file-word{color:#6979b9}.gd-convert-item .ng-fa-icon.fa-file-powerpoint{color:#e29417}.gd-convert-item .ng-fa-icon.fa-file-excel{color:#3fa300}.gd-convert-item .ng-fa-icon.fa-file-image{color:#e217da}.gd-convert-item .ng-fa-icon.fa-file-text .fa-folder{color:#5d6a75}.gd-convert-status .ng-fa-icon,.gd-destination-file .ng-fa-icon,.gd-filequeue-name .ng-fa-icon{font-size:33px}.gd-filequeue-name fa-icon{font-size:32px;margin:0 11px 0 0}@media (max-width:1037px){.gd-convert-status,.gd-destination-file,.gd-file-size{display:none}.gd-conversion-progress.mobile{display:block;margin:26px 24px 25px 11px}.gd-convert-single.mobile{display:block;margin:31px 24px 30px 0;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;min-width:37px;height:37px}.gd-convert-single:not(.mobile){display:none}.gd-file-format.mobile{display:block}.gd-file-format.mobile>fa-icon{color:#bebebe}.gd-file-format.mobile fa-icon{font-size:10px;margin-right:2.1px}.gd-file-format.mobile fa-icon:nth-child(1){margin-right:6px}.gd-file-format{font-size:11px}.gd-file-format:not(.mobile){display:none}.gd-filequeue-name{white-space:nowrap;overflow:hidden}.gd-convert-remove{margin:0 16px 0 15px}}"]
                    }] }
        ];
        /** @nocollapse */
        ConversionItemComponent.ctorParameters = function () { return [
            { type: ConversionService }
        ]; };
        ConversionItemComponent.propDecorators = {
            item: [{ type: core.Input }]
        };
        return ConversionItemComponent;
    }());
    if (false) {
        /** @type {?} */
        ConversionItemComponent.prototype.item;
        /**
         * @type {?}
         * @private
         */
        ConversionItemComponent.prototype._conversionService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} conversionConfigService
     * @return {?}
     */
    function initializeApp(conversionConfigService) {
        /** @type {?} */
        var result = (/**
         * @return {?}
         */
        function () { return conversionConfigService.load(); });
        return result;
    }
    var ConversionModule = /** @class */ (function () {
        function ConversionModule() {
            fontawesomeSvgCore.library.add(freeSolidSvgIcons.fas, freeRegularSvgIcons.far);
        }
        /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        ConversionModule.forRoot = /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        function (apiEndpoint) {
            commonComponents.Api.DEFAULT_API_ENDPOINT = apiEndpoint;
            return {
                ngModule: ConversionModule
            };
        };
        ConversionModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ConversionAppComponent, ConversionBrowseFilesModalComponent, InformationModalComponent, ConversionQueueComponent, ConversionItemComponent],
                        exports: [ConversionAppComponent, ConversionBrowseFilesModalComponent, InformationModalComponent, ConversionQueueComponent],
                        imports: [common.CommonModule,
                            commonComponents.CommonComponentsModule,
                            http.HttpClientModule,
                            angularFontawesome.FontAwesomeModule],
                        providers: [
                            ConversionService,
                            commonComponents.ConfigService,
                            ConversionConfigService,
                            {
                                provide: http.HTTP_INTERCEPTORS,
                                useClass: commonComponents.ErrorInterceptorService,
                                multi: true
                            },
                            {
                                provide: core.APP_INITIALIZER,
                                useFactory: initializeApp,
                                deps: [ConversionConfigService], multi: true
                            }
                        ]
                    },] }
        ];
        /** @nocollapse */
        ConversionModule.ctorParameters = function () { return []; };
        return ConversionModule;
    }());

    exports.ConversionAppComponent = ConversionAppComponent;
    exports.ConversionConfigService = ConversionConfigService;
    exports.ConversionItemModel = ConversionItemModel;
    exports.ConversionModule = ConversionModule;
    exports.ConversionRequestModel = ConversionRequestModel;
    exports.ConversionService = ConversionService;
    exports.ExtendedFileModel = ExtendedFileModel;
    exports.initializeApp = initializeApp;
    exports.ɵa = ConversionBrowseFilesModalComponent;
    exports.ɵb = InformationModalComponent;
    exports.ɵc = ConversionQueueComponent;
    exports.ɵd = ConversionItemComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=groupdocs.examples.angular-conversion.umd.js.map
