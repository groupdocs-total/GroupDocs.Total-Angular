(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('@groupdocs.examples.angular/common-components'), require('rxjs'), require('@fortawesome/angular-fontawesome'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@groupdocs.examples.angular/metadata', ['exports', '@angular/platform-browser', '@angular/core', '@angular/common', '@angular/common/http', '@groupdocs.examples.angular/common-components', 'rxjs', '@fortawesome/angular-fontawesome', '@angular/forms'], factory) :
    (global = global || self, factory((global.groupdocs = global.groupdocs || {}, global.groupdocs.examples = global.groupdocs.examples || {}, global.groupdocs.examples.angular = global.groupdocs.examples.angular || {}, global.groupdocs.examples.angular.metadata = {}), global.ng.platformBrowser, global.ng.core, global.ng.common, global.ng.common.http, global.commonComponents, global.rxjs, global.angularFontawesome, global.ng.forms));
}(this, (function (exports, platformBrowser, core, common, http, commonComponents, rxjs, angularFontawesome, forms) { 'use strict';

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
        MetadataFileDescription.prototype.properties;
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
        MetadataConfig.prototype.filesDirectory;
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AccordionService = /** @class */ (function () {
        function AccordionService() {
            this._addingObserver = new rxjs.BehaviorSubject(null);
            this._removingObserver = new rxjs.BehaviorSubject(null);
            this._addedProperty = this._addingObserver.asObservable();
            this._removedProperty = this._removingObserver.asObservable();
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
        Object.defineProperty(AccordionService.prototype, "removedProperty", {
            get: /**
             * @return {?}
             */
            function () {
                return this._removedProperty;
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
        /**
         * @param {?} removedProperty
         * @return {?}
         */
        AccordionService.prototype.removeProperty = /**
         * @param {?} removedProperty
         * @return {?}
         */
        function (removedProperty) {
            this._removingObserver.next(removedProperty);
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
        AccordionService.prototype._removingObserver;
        /**
         * @type {?}
         * @private
         */
        AccordionService.prototype._addedProperty;
        /**
         * @type {?}
         * @private
         */
        AccordionService.prototype._removedProperty;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MetadataAppComponent = /** @class */ (function () {
        function MetadataAppComponent(_metadataService, _modalService, configService, uploadFilesService, _navigateService, _zoomService, pagePreloadService, passwordService, _loadingMaskService, _accrodionService, _windowService) {
            var _this = this;
            this._metadataService = _metadataService;
            this._modalService = _modalService;
            this._navigateService = _navigateService;
            this._zoomService = _zoomService;
            this._loadingMaskService = _loadingMaskService;
            this._accrodionService = _accrodionService;
            this._windowService = _windowService;
            this.title = 'metadata';
            this.files = [];
            this.countPages = 0;
            this.formatDisabled = !this.file;
            this.browseFilesModal = commonComponents.CommonModals.BrowseFiles;
            this._zoom = 100;
            this.fileWasDropped = false;
            this.disabled = false;
            this.showSidePanel = true;
            this.disabledProperties = ["generator", "producer", "creator"];
            this.isDesktop = _windowService.isDesktop();
            _windowService.onResize.subscribe((/**
             * @param {?} w
             * @return {?}
             */
            function (w) {
                _this.isDesktop = _windowService.isDesktop();
                _this.refreshZoom();
            }));
            configService.updatedConfig.subscribe((/**
             * @param {?} metadataConfig
             * @return {?}
             */
            function (metadataConfig) {
                _this.metadataConfig = metadataConfig;
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
                        _this._metadataService.upload(uploads.item(i), '', _this.metadataConfig.rewrite).subscribe((/**
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
                if (_this.metadataConfig.preloadPageCount !== 0) {
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
            _accrodionService.addedProperty.subscribe((/**
             * @param {?} addedProperty
             * @return {?}
             */
            function (addedProperty) {
                if (addedProperty) {
                    _this.addedProperty = addedProperty;
                    /** @type {?} */
                    var propObject = {
                        original: addedProperty.original,
                        name: "",
                        value: "",
                        category: 0,
                        type: 1,
                        selected: false,
                        editing: false,
                        disabled: false
                    };
                    if (_this.buildInProperties) {
                        _this.buildInProperties.push(propObject);
                    }
                }
            }));
            _accrodionService.removedProperty.subscribe((/**
             * @param {?} removedProperty
             * @return {?}
             */
            function (removedProperty) {
                if (_this.file) {
                    /** @type {?} */
                    var metadataFile = new MetadataFileDescription();
                    metadataFile.guid = _this.file.guid;
                    metadataFile.properties = [removedProperty];
                    _this._metadataService.removeProperty(metadataFile).subscribe((/**
                     * @param {?} loadFile
                     * @return {?}
                     */
                    function (loadFile) {
                        _this.loadProperties();
                        _this._modalService.open(commonComponents.CommonModals.OperationSuccess);
                    }));
                }
            }));
        }
        /**
         * @return {?}
         */
        MetadataAppComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (this.metadataConfig.defaultDocument !== "") {
                this.isLoading = true;
                this.selectFile(this.metadataConfig.defaultDocument, "", "");
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
            this._loadingMaskService
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
         * @return {?}
         */
        MetadataAppComponent.prototype.openModal = /**
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
        MetadataAppComponent.prototype.closeModal = /**
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
        MetadataAppComponent.prototype.selectDir = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this._metadataService.loadFiles($event).subscribe((/**
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
            this._metadataService.loadFile(this.credentials).subscribe((/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                _this.file = file;
                _this.formatDisabled = !_this.file;
                if (file) {
                    if (file.pages && file.pages[0]) {
                        _this._pageHeight = file.pages[0].height;
                        _this._pageWidth = file.pages[0].width;
                        _this.options = _this.zoomOptions();
                        _this.refreshZoom();
                    }
                    /** @type {?} */
                    var preloadPageCount = _this.metadataConfig.preloadPageCount;
                    /** @type {?} */
                    var countPages = file.pages ? file.pages.length : 0;
                    if (preloadPageCount > 0) {
                        _this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                    }
                    _this._navigateService.countPages = countPages;
                    _this._navigateService.currentPage = 1;
                    _this.countPages = countPages;
                    _this.loadProperties();
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
        MetadataAppComponent.prototype.preloadPages = /**
         * @param {?} start
         * @param {?} end
         * @return {?}
         */
        function (start, end) {
            var _this = this;
            var _loop_1 = function (i) {
                this_1._metadataService.loadPage(this_1.credentials, i).subscribe((/**
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
        MetadataAppComponent.prototype.upload = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this._metadataService.upload(null, $event, this.rewriteConfig).subscribe((/**
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
            var pageWidth = this.ptToPx(this._pageWidth);
            /** @type {?} */
            var pageHeight = this.ptToPx(this._pageHeight);
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
            var pageWidth = this.ptToPx(this._pageWidth);
            /** @type {?} */
            var pageHeight = this.ptToPx(this._pageHeight);
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
            return this._zoomService.zoomOptions(width, height);
        };
        Object.defineProperty(MetadataAppComponent.prototype, "zoom", {
            get: /**
             * @return {?}
             */
            function () {
                return this._zoom;
            },
            set: /**
             * @param {?} zoom
             * @return {?}
             */
            function (zoom) {
                this._zoom = zoom;
                this._zoomService.changeZoom(this._zoom);
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
            this.zoom = this._windowService.isDesktop() ? 100 : this.getFitToWidth();
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
            window.location.assign(this._metadataService.getDownloadUrl(this.credentials));
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
            return !this.file || this.disabled || (this.buildInProperties && this.buildInProperties.filter((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return p.original === false; })).length > 0);
        };
        /**
         * @return {?}
         */
        MetadataAppComponent.prototype.save = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.file || !this.file.pages)
                return;
            /** @type {?} */
            var savingProperty = this.buildInProperties.filter((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return !p.original || p.editing; }));
            /** @type {?} */
            var savingFile = new MetadataFileDescription();
            savingFile.guid = this.file.guid;
            savingFile.properties = savingProperty;
            this._metadataService.saveProperty(savingFile).subscribe((/**
             * @param {?} loadFile
             * @return {?}
             */
            function (loadFile) {
                _this.loadProperties();
                _this.disabled = false;
                _this._modalService.open(commonComponents.CommonModals.OperationSuccess);
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
            this._metadataService.loadProperties(this.credentials).subscribe((/**
             * @param {?} fileProperties
             * @return {?}
             */
            function (fileProperties) {
                _this.buildInProperties = fileProperties.filter((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) { return p.category === commonComponents.FilePropertyCategory.BuildIn; }));
                _this.buildInProperties.forEach((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) {
                    if (_this.disabledProperties.some((/**
                     * @param {?} dp
                     * @return {?}
                     */
                    function (dp) { return dp === p.name.toLowerCase(); }))) {
                        p.disabled = true;
                    }
                }));
                _this.defaultProperties = fileProperties.filter((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) { return p.category === commonComponents.FilePropertyCategory.Default; }));
                _this._metadataService.loadPropertiesNames(_this.credentials).subscribe((/**
                 * @param {?} filePropertiesNames
                 * @return {?}
                 */
                function (filePropertiesNames) {
                    _this.filePropertiesNames = filePropertiesNames;
                }));
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
        MetadataAppComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-metadata',
                        template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"column\">\n      <div class=\"top-panel\">\n        <gd-logo [logo]=\"'metadata'\" icon=\"clipboard-list\"></gd-logo>\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                    *ngIf=\"browseConfig\" ></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"save()\">\n                    </gd-button>\n          <gd-button [hidden] =\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'file-export'\" [tooltip]=\"'Attributes'\" (click)=\"loadProperties()\">\n                    </gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                    (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n        </gd-top-toolbar>\n      </div>\n      <div class=\"doc-panel\" *ngIf=\"file\" #docPanel>\n        <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"false\" gdScrollable\n                    [preloadPageCount]=\"metadataConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"false\"></gd-document>\n      </div>\n    </div>\n    <gd-side-panel *ngIf=\"file && showSidePanel\"\n      (hideSidePanel)=\"hideSidePanel($event)\"\n      (saveInSidePanel)=\"save()\"\n      [closable]=\"isDesktop ? false : true\"\n      [saveable]=\"isDesktop ? false : true\"\n      [title]=\"'Metadata'\"\n      [icon]=\"'clipboard-list'\">\n      <gd-accordion>\n        <gd-accordion-group title=\"Build-in properties\" [addDisabled]=\"isDisabled()\" [addHidden]=\"false\" [properties]=\"buildInProperties\" [propertiesNames]=\"filePropertiesNames\"></gd-accordion-group>\n        <gd-accordion-group class=\"default\" title=\"Default properties\" [addDisabled]=\"true\" [addHidden]=\"true\" [properties]=\"defaultProperties\"></gd-accordion-group>\n      </gd-accordion>\n    </gd-side-panel>\n  </div>\n  <gd-init-state [icon]=\"'clipboard-list'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n    Or drop file here\n  </gd-init-state>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n</div>\n",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}::ng-deep .tools .button{color:#fff!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .button.inactive{color:#959da5!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}.row{display:-webkit-box;display:flex}.column{width:100%}::ng-deep .gd-side-panel-body{background-color:#f4f4f4}::ng-deep .gd-side-panel-wrapper{width:464px!important}::ng-deep .page.excel{overflow:unset!important}@media (max-width:1037px){::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .gd-side-panel-wrapper{width:375px!important}}"]
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
            { type: commonComponents.PagePreloadService },
            { type: commonComponents.PasswordService },
            { type: commonComponents.LoadingMaskService },
            { type: AccordionService },
            { type: commonComponents.WindowService }
        ]; };
        return MetadataAppComponent;
    }());
    if (false) {
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
        MetadataAppComponent.prototype._zoom;
        /** @type {?} */
        MetadataAppComponent.prototype._pageWidth;
        /** @type {?} */
        MetadataAppComponent.prototype._pageHeight;
        /** @type {?} */
        MetadataAppComponent.prototype.options;
        /** @type {?} */
        MetadataAppComponent.prototype.fileWasDropped;
        /** @type {?} */
        MetadataAppComponent.prototype.buildInProperties;
        /** @type {?} */
        MetadataAppComponent.prototype.defaultProperties;
        /** @type {?} */
        MetadataAppComponent.prototype.addedProperty;
        /** @type {?} */
        MetadataAppComponent.prototype.removedProperty;
        /** @type {?} */
        MetadataAppComponent.prototype.filePropertiesNames;
        /** @type {?} */
        MetadataAppComponent.prototype.disabled;
        /** @type {?} */
        MetadataAppComponent.prototype.isDesktop;
        /** @type {?} */
        MetadataAppComponent.prototype.showSidePanel;
        /** @type {?} */
        MetadataAppComponent.prototype.disabledProperties;
        /**
         * @type {?}
         * @private
         */
        MetadataAppComponent.prototype._metadataService;
        /**
         * @type {?}
         * @private
         */
        MetadataAppComponent.prototype._modalService;
        /**
         * @type {?}
         * @private
         */
        MetadataAppComponent.prototype._navigateService;
        /**
         * @type {?}
         * @private
         */
        MetadataAppComponent.prototype._zoomService;
        /**
         * @type {?}
         * @private
         */
        MetadataAppComponent.prototype._loadingMaskService;
        /**
         * @type {?}
         * @private
         */
        MetadataAppComponent.prototype._accrodionService;
        /**
         * @type {?}
         * @private
         */
        MetadataAppComponent.prototype._windowService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AccordionGroupComponent = /** @class */ (function () {
        function AccordionGroupComponent(_accordionService, _datePipe, _windowService) {
            var _this = this;
            this._accordionService = _accordionService;
            this._datePipe = _datePipe;
            this._windowService = _windowService;
            this.opened = false;
            this.toggle = new core.EventEmitter();
            this._selectedPropName = "Select property";
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
        Object.defineProperty(AccordionGroupComponent.prototype, "selectedPropName", {
            get: /**
             * @return {?}
             */
            function () {
                return this._selectedPropName;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?=} onlyEditing
         * @return {?}
         */
        AccordionGroupComponent.prototype.resetProperties = /**
         * @param {?=} onlyEditing
         * @return {?}
         */
        function (onlyEditing) {
            if (onlyEditing === void 0) { onlyEditing = false; }
            // for the moment we are working only with a single property
            if (!onlyEditing) {
                this.properties.forEach((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) { return p.selected = false; }));
            }
            this.properties.forEach((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return p.editing = false; }));
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
            this._selectedPropName = "Select property";
            this.resetProperties();
            if (!this.addDisabled) {
                /** @type {?} */
                var addedProperty = new commonComponents.FilePropertyModel();
                addedProperty.original = false;
                this._accordionService.addProperty(addedProperty);
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
            if (property.category === 0 && !property.disabled) {
                this.resetProperties(true);
                /** @type {?} */
                var selectedProperty = this.properties.filter((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) { return p.name.toLocaleLowerCase() === property.name.toLocaleLowerCase(); }))[0];
                selectedProperty.selected = !selectedProperty.selected;
                this.properties.filter((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) { return p.name === property.name; }))[0].selected = selectedProperty.selected;
            }
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
            // we can edit only first group props
            if (property.category === 0 && !property.disabled) {
                this.resetProperties();
                /** @type {?} */
                var selectedProperty = this.properties.filter((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) { return p.name.toLocaleLowerCase() === property.name.toLocaleLowerCase(); }))[0];
                selectedProperty.editing = !selectedProperty.editing;
                this.properties.filter((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) { return p.name === property.name; }))[0].editing = selectedProperty.editing;
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
            this._accordionService.removeProperty(selectedProperty);
        };
        /**
         * @return {?}
         */
        AccordionGroupComponent.prototype.wasSelected = /**
         * @return {?}
         */
        function () {
            if (this.properties && this.properties.length > 0) {
                return this.properties.filter((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) { return p.selected; })).length === 1;
            }
            else
                return false;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AccordionGroupComponent.prototype.selectPropName = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this._selectedPropName = $event.name;
            /** @type {?} */
            var editingProperty = this.properties.filter((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return !p.original; }))[0];
            editingProperty.type = $event.type;
            editingProperty.name = $event.name;
            if ($event.type === 3) {
                editingProperty.value = new Date().toISOString().slice(0, 19);
            }
            else {
                editingProperty.value = "";
            }
        };
        /**
         * @param {?} property
         * @param {?} value
         * @return {?}
         */
        AccordionGroupComponent.prototype.formatDateTime = /**
         * @param {?} property
         * @param {?} value
         * @return {?}
         */
        function (property, value) {
            if (value) {
                /** @type {?} */
                var dateTime = new Date(value);
                property.value = dateTime.toISOString().slice(0, 19);
            }
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
                case 3:
                    return this.isDesktop ? this._datePipe.transform(new Date(property.value), 'MM/dd/yy, h:mm:ss a')
                        : this._datePipe.transform(new Date(property.value), 'MM/dd/yy, h:mm a');
                default:
                    return property.value;
            }
        };
        AccordionGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-accordion-group',
                        template: "<div class=\"accordion-wrapper\">\n    <div class=\"title\" (click)=\"toggle.emit($event)\">\n      <fa-icon *ngIf=\"!opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-down']\"></fa-icon>\n      <fa-icon *ngIf=\"opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-up']\"></fa-icon>\n      <div class=\"text\">{{title}}</div>\n      <fa-icon class=\"trash\" *ngIf=\"wasSelected()\" [icon]=\"['fas', 'trash']\" (click)=\"delete($event)\"></fa-icon>\n      <gd-button class=\"plus\" [icon]=\"['plus']\" [hidden]=\"addHidden\" [disabled]=\"addDisabled\" (click)=\"addProperty($event)\"></gd-button>\n    </div>\n    <div class=\"body\" [ngClass]=\"{'hidden': !opened}\">\n      <div *ngFor=\"let property of properties\" class=\"property-wrapper\" [ngClass]=\"{'disabled': property.disabled}\">\n          <div *ngIf=\"property.original\" [ngClass]=\"{'selected': property.selected}\" (click)=\"selectProperty(property)\" class=\"property-name\" title=\"{{property.name}}\">{{property.name}}</div>\n          <gd-select  class=\"property-name\" *ngIf=\"!property.original\" id=\"propertiesNames\" [disabled]=\"false\" [options]=\"propertiesNames\" (selected)=\"selectPropName($event)\" [showSelected]=\"{name : selectedPropName, value : selectedPropName}\"></gd-select>\n          <div *ngIf=\"property.original && !property.editing\" [ngClass]=\"{'selected': property.selected}\" (click)=\"editProperty(property)\" class=\"property-value\" title=\"{{property.value}}\">{{formatValue(property)}}</div>\n          <div *ngIf=\"!property.original || property.editing\" class=\"input-wrapper\">\n            <input #textinput *ngIf=\"property.type == 1 || property.type == 5\" class=\"property-value\" [(ngModel)]=\"property.value\">\n            <input *ngIf=\"property.type == 3\" type=\"datetime-local\" step=\"1\" [ngClass]=\"isDesktop ? 'property-value' : 'property-value mobile-hide'\" [ngModel]=\"property.value | date:'yyyy-MM-ddTHH:mm:ss'\" (ngModelChange)=\"formatDateTime(property, $event)\">\n            <input *ngIf=\"property.type == 3\" type=\"datetime-local\" [ngClass]=\"isDesktop ? 'property-value desktop-hide' : 'property-value'\" [ngModel]=\"property.value | date:'yyyy-MM-ddTHH:mm'\" (ngModelChange)=\"formatDateTime(property, $event)\">\n        </div>\n      </div>\n    </div>\n  <div>",
                        styles: [".accordion-wrapper{background-color:#fff}.accordion-wrapper .title{width:100%;cursor:pointer;border-bottom:1px solid #6e6e6e;background-color:#539cf0;color:#f4f4f4;font-weight:700;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;height:37px;line-height:37px;font-size:13px}.accordion-wrapper .title .text{width:100%}.chevron{padding:0 16px 0 15px}.plus{margin-left:auto}::ng-deep .title .button{color:#fff!important;display:block!important;margin-right:0!important}::ng-deep .title .button.active fa-icon{color:#fff!important}.accordion-wrapper .body.hidden,.trash.hidden{display:none}.property-wrapper{display:-webkit-box;display:flex;height:35px;font-size:12px;border-bottom:1px solid #e7e7e7;line-height:35px}.property-wrapper.disabled{cursor:not-allowed;color:#acacac}.property-name{width:216px;text-transform:uppercase;font-weight:700;padding-left:15px;border-right:1px solid #e7e7e7;text-overflow:ellipsis;word-wrap:break-word}.property-name ::ng-deep .select{height:35px;line-height:37px;text-align:center;-webkit-box-pack:unset;justify-content:unset;position:relative}.property-name ::ng-deep .select .nav-caret{display:none}.property-name ::ng-deep .select .selected-value{max-width:none;font-size:unset;text-transform:none;font-weight:400}.property-name ::ng-deep .select .dropdown-menu{width:216px;margin-left:-15px;top:36px}.property-value{font-family:'Courier New',Courier,monospace;padding-left:12px;text-overflow:ellipsis;width:216px;white-space:nowrap;overflow:hidden;word-wrap:break-word;display:inline-block}.property-value.desktop-hide{display:none}.input-wrapper input{height:30px;border:0;font-size:12px}.input-wrapper input.hidden{display:none}.input-wrapper input[type=datetime-local]::-webkit-clear-button,.input-wrapper input[type=datetime-local]::-webkit-inner-spin-button{-webkit-appearance:none;display:none}.selected{background-color:#3e4e5a;color:#fff}::ng-deep .default .property-name{color:#acacac}@media (max-width:1037px){.property-value{width:194px!important}.property-name{width:150px!important}.property-value.mobile-hide{display:none}.input-wrapper{width:185px!important}}"]
                    }] }
        ];
        /** @nocollapse */
        AccordionGroupComponent.ctorParameters = function () { return [
            { type: AccordionService },
            { type: common.DatePipe },
            { type: commonComponents.WindowService }
        ]; };
        AccordionGroupComponent.propDecorators = {
            opened: [{ type: core.Input }],
            title: [{ type: core.Input }],
            addDisabled: [{ type: core.Input }],
            addHidden: [{ type: core.Input }],
            properties: [{ type: core.Input }],
            propertiesNames: [{ type: core.Input }],
            toggle: [{ type: core.Output }],
            textinput: [{ type: core.ViewChildren, args: ['textinput',] }]
        };
        return AccordionGroupComponent;
    }());
    if (false) {
        /** @type {?} */
        AccordionGroupComponent.prototype.opened;
        /** @type {?} */
        AccordionGroupComponent.prototype.title;
        /** @type {?} */
        AccordionGroupComponent.prototype.addDisabled;
        /** @type {?} */
        AccordionGroupComponent.prototype.addHidden;
        /** @type {?} */
        AccordionGroupComponent.prototype.properties;
        /** @type {?} */
        AccordionGroupComponent.prototype.propertiesNames;
        /** @type {?} */
        AccordionGroupComponent.prototype.toggle;
        /** @type {?} */
        AccordionGroupComponent.prototype.textinput;
        /** @type {?} */
        AccordionGroupComponent.prototype._selectedPropName;
        /** @type {?} */
        AccordionGroupComponent.prototype.isDesktop;
        /**
         * @type {?}
         * @private
         */
        AccordionGroupComponent.prototype._accordionService;
        /**
         * @type {?}
         * @private
         */
        AccordionGroupComponent.prototype._datePipe;
        /**
         * @type {?}
         * @private
         */
        AccordionGroupComponent.prototype._windowService;
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
            var _this = this;
            this.groups.toArray().forEach((/**
             * @param {?} group
             * @return {?}
             */
            function (group) {
                group.opened = true;
                group.toggle.subscribe((/**
                 * @param {?} $event
                 * @return {?}
                 */
                function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    _this.openGroup(group);
                }));
            }));
        };
        /**
         * @param {?} group
         * @return {?}
         */
        AccordionComponent.prototype.openGroup = /**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            group.opened = !group.opened;
        };
        AccordionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-accordion',
                        template: "\n    <ng-content></ng-content>\n",
                        styles: [""]
                    }] }
        ];
        AccordionComponent.propDecorators = {
            groups: [{ type: core.ContentChildren, args: [AccordionGroupComponent,] }]
        };
        return AccordionComponent;
    }());
    if (false) {
        /** @type {?} */
        AccordionComponent.prototype.groups;
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
                            AccordionGroupComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
                            commonComponents.CommonComponentsModule,
                            http.HttpClientModule,
                            angularFontawesome.FontAwesomeModule,
                            forms.FormsModule
                        ],
                        exports: [
                            MetadataAppComponent,
                            commonComponents.CommonComponentsModule,
                            AccordionComponent,
                            AccordionGroupComponent
                        ],
                        providers: [
                            MetadataService,
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

    exports.MetadataAppComponent = MetadataAppComponent;
    exports.MetadataConfigService = MetadataConfigService;
    exports.MetadataFileDescription = MetadataFileDescription;
    exports.MetadataModule = MetadataModule;
    exports.MetadataService = MetadataService;
    exports.initializeApp = initializeApp;
    exports.setupLoadingInterceptor = setupLoadingInterceptor;
    exports.ɵa = AccordionService;
    exports.ɵb = AccordionComponent;
    exports.ɵc = AccordionGroupComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=groupdocs.examples.angular-metadata.umd.js.map
