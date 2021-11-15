(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('@angular/common/http'), require('jquery'), require('@groupdocs.examples.angular/common-components'), require('rxjs'), require('@fortawesome/angular-fontawesome'), require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/free-regular-svg-icons'), require('ng-click-outside'), require('@ngx-translate/core')) :
    typeof define === 'function' && define.amd ? define('@groupdocs.examples.angular/comparison', ['exports', '@angular/platform-browser', '@angular/core', '@angular/common/http', 'jquery', '@groupdocs.examples.angular/common-components', 'rxjs', '@fortawesome/angular-fontawesome', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-regular-svg-icons', 'ng-click-outside', '@ngx-translate/core'], factory) :
    (global = global || self, factory((global.groupdocs = global.groupdocs || {}, global.groupdocs.examples = global.groupdocs.examples || {}, global.groupdocs.examples.angular = global.groupdocs.examples.angular || {}, global.groupdocs.examples.angular.comparison = {}), global.ng.platformBrowser, global.ng.core, global.ng.common.http, global.jquery, global.commonComponents, global.rxjs, global.angularFontawesome, global.fontawesomeSvgCore, global.freeSolidSvgIcons, global.freeRegularSvgIcons, global.ngClickOutside, global.core$1));
}(this, (function (exports, platformBrowser, core, http, jquery, commonComponents, rxjs, angularFontawesome, fontawesomeSvgCore, freeSolidSvgIcons, freeRegularSvgIcons, ngClickOutside, core$1) { 'use strict';

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
    var ComparisonConfig = /** @class */ (function () {
        function ComparisonConfig() {
        }
        return ComparisonConfig;
    }());
    if (false) {
        /** @type {?} */
        ComparisonConfig.prototype.rewrite;
        /** @type {?} */
        ComparisonConfig.prototype.pageSelector;
        /** @type {?} */
        ComparisonConfig.prototype.download;
        /** @type {?} */
        ComparisonConfig.prototype.upload;
        /** @type {?} */
        ComparisonConfig.prototype.print;
        /** @type {?} */
        ComparisonConfig.prototype.browse;
        /** @type {?} */
        ComparisonConfig.prototype.enableRightClick;
        /** @type {?} */
        ComparisonConfig.prototype.filesDirectory;
        /** @type {?} */
        ComparisonConfig.prototype.fontsDirectory;
        /** @type {?} */
        ComparisonConfig.prototype.defaultDocument;
        /** @type {?} */
        ComparisonConfig.prototype.preloadResultPageCount;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComparisonConfigService = /** @class */ (function () {
        function ComparisonConfigService(_http, _config) {
            this._http = _http;
            this._config = _config;
            this._comparisonConfig = new rxjs.BehaviorSubject(new ComparisonConfig());
            this._updatedConfig = this._comparisonConfig.asObservable();
        }
        Object.defineProperty(ComparisonConfigService.prototype, "updatedConfig", {
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
        ComparisonConfigService.prototype.load = /**
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
                var configEndpoint = _this._config.getConfigEndpoint(commonComponents.Api.COMPARISON_APP);
                _this._http.get(configEndpoint, commonComponents.Api.httpOptionsJson).toPromise().then((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    /** @type {?} */
                    var comparisonConfig = (/** @type {?} */ (response));
                    _this._comparisonConfig.next(comparisonConfig);
                    resolve();
                })).catch((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    reject("Could not load comparison config: " + JSON.stringify(response));
                }));
            }));
        };
        ComparisonConfigService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ComparisonConfigService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ ComparisonConfigService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ComparisonConfigService_Factory() { return new ComparisonConfigService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: ComparisonConfigService, providedIn: "root" });
        return ComparisonConfigService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ComparisonConfigService.prototype._comparisonConfig;
        /**
         * @type {?}
         * @private
         */
        ComparisonConfigService.prototype._updatedConfig;
        /**
         * @type {?}
         * @private
         */
        ComparisonConfigService.prototype._http;
        /**
         * @type {?}
         * @private
         */
        ComparisonConfigService.prototype._config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComparisonService = /** @class */ (function () {
        function ComparisonService(_http, _config) {
            this._http = _http;
            this._config = _config;
        }
        /**
         * @param {?} path
         * @return {?}
         */
        ComparisonService.prototype.loadFiles = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            return this._http.post(this._config.getComparisonApiEndpoint() + commonComponents.Api.LOAD_FILE_TREE, { 'path': path }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @return {?}
         */
        ComparisonService.prototype.getFormats = /**
         * @return {?}
         */
        function () {
            return this._http.get(this._config.getComparisonApiEndpoint() + commonComponents.Api.LOAD_FORMATS, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        ComparisonService.prototype.loadFile = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._http.post(this._config.getComparisonApiEndpoint() + commonComponents.Api.LOAD_DOCUMENT_DESCRIPTION, credentials, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} file
         * @param {?} url
         * @param {?} rewrite
         * @return {?}
         */
        ComparisonService.prototype.upload = /**
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
            return this._http.post(this._config.getComparisonApiEndpoint() + commonComponents.Api.UPLOAD_DOCUMENTS, formData);
        };
        /**
         * @param {?} file
         * @return {?}
         */
        ComparisonService.prototype.save = /**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            return this._http.post(this._config.getComparisonApiEndpoint() + commonComponents.Api.SAVE_FILE, file, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        ComparisonService.prototype.getDownloadUrl = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._config.getComparisonApiEndpoint() + commonComponents.Api.DOWNLOAD_DOCUMENTS + '/?guid=' + credentials.guid;
        };
        /**
         * @param {?} credentials
         * @param {?} page
         * @return {?}
         */
        ComparisonService.prototype.loadPage = /**
         * @param {?} credentials
         * @param {?} page
         * @return {?}
         */
        function (credentials, page) {
            return this._http.post(this._config.getComparisonApiEndpoint() + commonComponents.Api.LOAD_DOCUMENT_PAGE, {
                'guid': credentials.guid,
                'password': credentials.password,
                'page': page
            }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} arr
         * @return {?}
         */
        ComparisonService.prototype.compare = /**
         * @param {?} arr
         * @return {?}
         */
        function (arr) {
            return this._http.post(this._config.getComparisonApiEndpoint() + commonComponents.Api.COMPARE_FILES, { 'guids': arr }, commonComponents.Api.httpOptionsJson);
        };
        ComparisonService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ComparisonService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ ComparisonService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ComparisonService_Factory() { return new ComparisonService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: ComparisonService, providedIn: "root" });
        return ComparisonService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ComparisonService.prototype._http;
        /**
         * @type {?}
         * @private
         */
        ComparisonService.prototype._config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var $ = jquery;
    var Files = /** @class */ (function () {
        function Files() {
        }
        Files.FIRST = 'first';
        Files.SECOND = 'second';
        return Files;
    }());
    if (false) {
        /** @type {?} */
        Files.FIRST;
        /** @type {?} */
        Files.SECOND;
    }
    var Highlight = /** @class */ (function () {
        function Highlight() {
            this.active = false;
        }
        return Highlight;
    }());
    if (false) {
        /** @type {?} */
        Highlight.prototype.id;
        /** @type {?} */
        Highlight.prototype.active;
    }
    var ComparisonAppComponent = /** @class */ (function () {
        function ComparisonAppComponent(_comparisonService, configService, uploadFilesService, pagePreloadService, _modalService, _tabActivatorService, _elementRef, passwordService) {
            var _this = this;
            this._comparisonService = _comparisonService;
            this.configService = configService;
            this._modalService = _modalService;
            this._tabActivatorService = _tabActivatorService;
            this._elementRef = _elementRef;
            this.files = [];
            this.browseFilesModal = commonComponents.CommonModals.BrowseFiles;
            this.credentials = new Map();
            this.file = new Map();
            this.first = Files.FIRST;
            this.second = Files.SECOND;
            this.firstFileName = undefined;
            this.secondFileName = undefined;
            this.loadingFirstPanel = false;
            this.loadingSecondPanel = false;
            this.countPages = 0;
            this.filesTab = 'files';
            this.resultTab = 'result';
            this.activeTab = this.filesTab;
            this.resultTabDisabled = true;
            configService.updatedConfig.subscribe((/**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                _this.comparisonConfig = config;
            }));
            pagePreloadService.checkPreload.subscribe((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                if (_this.comparisonConfig.preloadResultPageCount !== 0) {
                    _this.checkPreload(_this.first, page);
                    _this.checkPreload(_this.second, page);
                }
            }));
            uploadFilesService.uploadsChange.subscribe((/**
             * @param {?} uploads
             * @return {?}
             */
            function (uploads) {
                /** @type {?} */
                var active = _this.activePanel;
                _this.setLoading(active, true);
                if (uploads) {
                    /** @type {?} */
                    var i = void 0;
                    for (i = 0; i < uploads.length; i++) {
                        _this._comparisonService.upload(uploads.item(i), '', _this.rewriteConfig).subscribe((/**
                         * @param {?} obj
                         * @return {?}
                         */
                        function (obj) {
                            _this.getFile(obj.guid, '', active);
                            _this.selectDir('');
                        }));
                    }
                }
            }));
            _tabActivatorService.activeTabChange.subscribe((/**
             * @param {?} tabId
             * @return {?}
             */
            function (tabId) {
                _this.activeTab = tabId;
            }));
            passwordService.passChange.subscribe((/**
             * @param {?} pass
             * @return {?}
             */
            function (pass) {
                /** @type {?} */
                var activePanelFileGuid = "";
                if (_this.credentials.get(_this.first)) {
                    activePanelFileGuid = _this.credentials.get(_this.first).guid;
                }
                else if (_this.credentials.get(_this.second)) {
                    activePanelFileGuid = _this.credentials.get(_this.second).guid;
                }
                _this.selectFile(activePanelFileGuid, pass, commonComponents.CommonModals.PasswordRequired, _this.activePanel);
            }));
        }
        Object.defineProperty(ComparisonAppComponent.prototype, "uploadConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.comparisonConfig ? this.comparisonConfig.upload : true;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @param {?} panel
         * @param {?} flag
         * @return {?}
         */
        ComparisonAppComponent.prototype.setLoading = /**
         * @private
         * @param {?} panel
         * @param {?} flag
         * @return {?}
         */
        function (panel, flag) {
            if (panel === this.first) {
                this.loadingFirstPanel = flag;
            }
            else {
                this.loadingSecondPanel = flag;
            }
        };
        Object.defineProperty(ComparisonAppComponent.prototype, "rewriteConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.comparisonConfig ? this.comparisonConfig.rewrite : true;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} $event
         * @return {?}
         */
        ComparisonAppComponent.prototype.selectDir = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this._comparisonService.loadFiles($event).subscribe((/**
             * @param {?} files
             * @return {?}
             */
            function (files) {
                /** @type {?} */
                var nameExt;
                if (_this.credentials.get(_this.first)) {
                    nameExt = _this.credentials.get(_this.first).guid.split('.').pop();
                }
                else if (_this.credentials.get(_this.second)) {
                    nameExt = _this.credentials.get(_this.second).guid.split('.').pop();
                }
                if (nameExt) {
                    files = files.filter((/**
                     * @param {?} value
                     * @return {?}
                     */
                    function (value) {
                        return value.directory || value.guid.split('.').pop() === nameExt;
                    }));
                }
                _this.files = files || [];
            }));
        };
        /**
         * @param {?} $event
         * @param {?} password
         * @param {?} modalId
         * @param {?} param
         * @return {?}
         */
        ComparisonAppComponent.prototype.selectFile = /**
         * @param {?} $event
         * @param {?} password
         * @param {?} modalId
         * @param {?} param
         * @return {?}
         */
        function ($event, password, modalId, param) {
            this.setLoading(param, true);
            this.getFile($event, password, param);
            this.selectDir('');
            this._modalService.close(modalId);
            this.clearData(param);
        };
        /**
         * @private
         * @param {?} $event
         * @param {?} password
         * @param {?} param
         * @return {?}
         */
        ComparisonAppComponent.prototype.getFile = /**
         * @private
         * @param {?} $event
         * @param {?} password
         * @param {?} param
         * @return {?}
         */
        function ($event, password, param) {
            var _this = this;
            /** @type {?} */
            var credentials = { guid: $event, password: password };
            this.credentials.set(param, credentials);
            this._comparisonService.loadFile(credentials).subscribe((/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                _this.file.set(param, file);
                if (file) {
                    /** @type {?} */
                    var preloadResultPageCount = _this.comparisonConfig.preloadResultPageCount;
                    _this.countPages = file.pages ? file.pages.length : 0;
                    if (preloadResultPageCount > 0) {
                        _this.preloadPages(param, 1, preloadResultPageCount > _this.countPages ? _this.countPages : preloadResultPageCount);
                    }
                }
                _this.updateFileNames();
                _this.setLoading(param, false);
            }));
        };
        /**
         * @param {?} param
         * @return {?}
         */
        ComparisonAppComponent.prototype.clearFile = /**
         * @param {?} param
         * @return {?}
         */
        function (param) {
            this.clearData(param);
            this.credentials.delete(param);
            this.result = null;
            this.resultTabDisabled = true;
            this._tabActivatorService.changeActiveTab(this.filesTab);
        };
        /**
         * @private
         * @param {?} param
         * @return {?}
         */
        ComparisonAppComponent.prototype.clearData = /**
         * @private
         * @param {?} param
         * @return {?}
         */
        function (param) {
            if (!this.file || !this.file.size) {
                return;
            }
            this.file.delete(param);
            if (param === this.first) {
                this.firstFileName = undefined;
            }
            else {
                this.secondFileName = undefined;
            }
        };
        /**
         * @param {?} param
         * @param {?} start
         * @param {?} end
         * @return {?}
         */
        ComparisonAppComponent.prototype.preloadPages = /**
         * @param {?} param
         * @param {?} start
         * @param {?} end
         * @return {?}
         */
        function (param, start, end) {
            var _this = this;
            var _loop_1 = function (i) {
                this_1._comparisonService.loadPage(this_1.credentials.get(param), i).subscribe((/**
                 * @param {?} page
                 * @return {?}
                 */
                function (page) {
                    _this.file.get(param).pages[i - 1] = page;
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
        ComparisonAppComponent.prototype.upload = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            /** @type {?} */
            var active = this.activePanel;
            this._comparisonService.upload(null, $event, this.rewriteConfig).subscribe((/**
             * @param {?} obj
             * @return {?}
             */
            function (obj) {
                _this.getFile(obj.guid, '', active);
                _this.selectDir('');
            }));
        };
        /**
         * @return {?}
         */
        ComparisonAppComponent.prototype.updateFileNames = /**
         * @return {?}
         */
        function () {
            this.firstFileName = this.getFirstFileName();
            this.secondFileName = this.getSecondFileName();
        };
        /**
         * @return {?}
         */
        ComparisonAppComponent.prototype.getSecondFileName = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var fileCredentials = this.credentials ? this.credentials.get(this.second) : undefined;
            return fileCredentials ? fileCredentials.guid.replace(/^.*[\\\/]/, '') : '';
        };
        /**
         * @return {?}
         */
        ComparisonAppComponent.prototype.getFirstFileName = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var fileCredentials = this.credentials ? this.credentials.get(this.first) : undefined;
            return fileCredentials ? fileCredentials.guid.replace(/^.*[\\\/]/, '') : '';
        };
        /**
         * @private
         * @param {?} panel
         * @param {?} page
         * @return {?}
         */
        ComparisonAppComponent.prototype.checkPreload = /**
         * @private
         * @param {?} panel
         * @param {?} page
         * @return {?}
         */
        function (panel, page) {
            if (!this.file.get(panel)) {
                return;
            }
            for (var i = page; i < page + 2; i++) {
                if (i > 0 && i <= this.countPages && !this.file.get(panel).pages[i - 1].data) {
                    this.preloadPages(panel, i, i);
                }
            }
        };
        /**
         * @return {?}
         */
        ComparisonAppComponent.prototype.compare = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.credentials.size !== 2) {
                return;
            }
            this.resultTabDisabled = false;
            /** @type {?} */
            var arr = [];
            arr.push(this.credentials.get(this.first));
            arr.push(this.credentials.get(this.second));
            this._comparisonService.compare(arr).subscribe((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                _this.result = result;
                /** @type {?} */
                var isZeroBasedPageId = _this.result.changes.find((/**
                 * @param {?} change
                 * @return {?}
                 */
                function (change) { return change.pageInfo.pageNumber === 0; }));
                _this.result.changes.forEach((/**
                 * @param {?} change
                 * @return {?}
                 */
                function (change) {
                    change.id = _this.generateRandomInteger();
                    /** @type {?} */
                    var zeroBasedId = isZeroBasedPageId ? change.pageInfo.pageNumber : change.pageInfo.pageNumber - 1;
                    change.pageInfo.pageNumber = isZeroBasedPageId ? change.pageInfo.pageNumber : change.pageInfo.pageNumber - 1;
                    if (!_this.result.pages[zeroBasedId].changes) {
                        _this.result.pages[zeroBasedId].changes = [];
                    }
                    _this.result.pages[zeroBasedId].changes.push(change);
                    change.normalized = {
                        x: _this.pxToPt(change.box.x) * 100 / change.pageInfo.width,
                        y: _this.pxToPt(change.box.y) * 100 / change.pageInfo.height,
                        width: _this.pxToPt(change.box.width) * 100 / change.pageInfo.width,
                        height: _this.pxToPt(change.box.height) * 100 / change.pageInfo.height,
                    };
                }));
            }), ((/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                _this.resultTabDisabled = true;
                _this._tabActivatorService.changeActiveTab(_this.filesTab);
            })));
            this._tabActivatorService.changeActiveTab(this.resultTab);
        };
        /**
         * @param {?} px
         * @return {?}
         */
        ComparisonAppComponent.prototype.pxToPt = /**
         * @param {?} px
         * @return {?}
         */
        function (px) {
            return px * 72 / 96;
        };
        /**
         * @return {?}
         */
        ComparisonAppComponent.prototype.generateRandomInteger = /**
         * @return {?}
         */
        function () {
            /**
             * @param {?} s
             * @return {?}
             */
            function _p8(s) {
                /** @type {?} */
                var p = (Math.random().toString(16) + "000000000").substr(2, 8);
                return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
            }
            return _p8(null) + _p8(true) + _p8(true) + _p8(null);
        };
        /**
         * @return {?}
         */
        ComparisonAppComponent.prototype.download = /**
         * @return {?}
         */
        function () {
            if (!this.result) {
                return;
            }
            /** @type {?} */
            var credentials = { 'guid': this.result.guid, 'password': '' };
            window.location.assign(this._comparisonService.getDownloadUrl(credentials));
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        ComparisonAppComponent.prototype.hideSidePanel = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.activeTab = $event ? this.filesTab : this.resultTab;
            this._tabActivatorService.changeActiveTab(this.filesTab);
        };
        ComparisonAppComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-comparison',
                        template: "<!--<gd-loading-mask></gd-loading-mask>-->\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"column\">\n      <div class=\"top-panel\">\n        <gd-logo [logo]=\"'comparison'\" icon=\"copy\"></gd-logo>\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'play'\" [tooltip]=\"'Compare'\" [disabled]=\"!file.get(first) || !file.get(second)\"\n                     (click)=\"compare()\"></gd-button>\n          <gd-button [icon]=\"'download'\" [tooltip]=\"'Download'\" [disabled]=\"!result\" (click)=\"download()\"></gd-button>\n          <div class=\"tabs-wrapper\">\n            <div class=\"tabs\">\n              <gd-tabs>\n                <gd-tab [id]=\"filesTab\" tabTitle=\"Documents\" [icon]=\"'copy'\" [active]=\"true\" [content]=\"false\">\n                </gd-tab>\n                <gd-tab [id]=\"resultTab\" tabTitle=\"Result\" [icon]=\"'poll'\" [disabled]=\"resultTabDisabled\" [content]=\"false\">\n                </gd-tab>\n              </gd-tabs>\n            </div>\n          </div>\n        </gd-top-toolbar>\n      </div>\n      <div class=\"files-panel\" *ngIf=\"activeTab === filesTab\">\n        <div class=\"upload-compare-file\">\n          <gd-add-file-panel class=\"compare-file\"\n                             [fileName]=\"firstFileName\"\n                             [panel]=\"first\"\n                             (active)=\"activePanel = $event\"\n                             (urlForUpload)=\"upload($event)\"\n                             (cleanPanel)=\"clearFile(first)\">\n          </gd-add-file-panel>\n          <gd-upload-file-panel\n                                [panel]=\"first\"\n                                (active)=\"activePanel = $event\"\n                                *ngIf=\"!firstFileName && !loadingFirstPanel\">\n          </gd-upload-file-panel>\n          <div *ngIf=\"loadingFirstPanel\" class=\"loader\">\n            <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n            <span>Loading... Please wait.</span>\n          </div>\n          <gd-document class=\"gd-document\"\n                       *ngIf=\"file.get(first)\"\n                       [file]=\"file.get(first)\"\n                       [mode]=\"false\"\n                       [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\" gdRenderPrint\n                       [htmlMode]=\"false\"\n                       gdScrollable>\n          </gd-document>\n        </div>\n        <div class=\"upload-compare-file\">\n          <gd-add-file-panel class=\"compare-file\"\n                             [fileName]=\"secondFileName\"\n                             [panel]=\"second\"\n                             (active)=\"activePanel = $event\"\n                             (urlForUpload)=\"upload($event)\"\n                             (cleanPanel)=\"clearFile(second)\">\n          </gd-add-file-panel>\n          <gd-upload-file-panel [panel]=\"second\"\n                                (active)=\"activePanel = $event\"\n                                *ngIf=\"!secondFileName && !loadingSecondPanel\">\n          </gd-upload-file-panel>\n          <div *ngIf=\"loadingSecondPanel\" class=\"loader\">\n            <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n            <span>Loading... Please wait.</span>\n          </div>\n          <gd-document class=\"gd-document\"\n                       *ngIf=\"file.get(second)\"\n                       [file]=\"file.get(second)\"\n                       [mode]=\"false\"\n                       [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\" gdRenderPrint\n                       [htmlMode]=\"false\"\n                       gdScrollable>\n          </gd-document>\n        </div>\n      </div>\n      <div class=\"result-panel\" *ngIf=\"activeTab === resultTab\">\n        <div  class=\"loader\" *ngIf=\"!result\">\n          <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n          <span>Loading... Please wait.</span>\n        </div>\n        <gd-result-document\n          class=\"gd-document\"\n          *ngIf=\"result\"\n          [file]=\"result\"\n          [mode]=\"false\"\n          [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\"\n          gdRenderPrint\n          [htmlMode]=\"false\"\n          gdScrollable>\n        </gd-result-document>\n      </div>\n    </div>\n    <gd-side-panel (hideSidePanel)=\"hideSidePanel($event)\"\n                   *ngIf=\"result && activeTab === resultTab\"\n                   [title]=\"'Differences'\"\n                   [saveable]=\"false\"\n                   [icon]=\"'info-circle'\">\n      <gd-differences\n        [changes]=\"result.changes\">\n      </gd-differences>\n    </gd-side-panel>\n  </div>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\"\n                         [files]=\"files\"\n                         (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal, activePanel)\"\n                         [uploadConfig]=\"uploadConfig\">\n  </gd-browse-files-modal>\n  <gd-password-required></gd-password-required>\n  <gd-error-modal></gd-error-modal>\n</div>\n",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .tools .button{color:#fff!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .button.inactive{color:#959da5!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}::ng-deep .compare-file .icon-button{margin:0!important}::ng-deep .compare-file .icon-button .text{padding:0!important}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.loader{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%}.upload-compare-file{height:100%;width:50%;border-right:1px solid #ccc;display:-webkit-box;display:flex;align-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;text-align:center;-webkit-box-flex:0;flex-grow:0}.open-file-panel{display:-webkit-box;display:flex;width:100%}.files-panel{background-color:#e7e7e7;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%;height:100%}.result-panel{background-color:#e7e7e7;width:100%;height:100%;display:-webkit-box;display:flex;align-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;text-align:center}.doc-panel{display:-webkit-box;display:flex;height:inherit}.gd-document{width:100%;height:100%}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}.row{display:-webkit-box;display:flex;height:inherit}.column{width:100%}.tabs-wrapper{display:-webkit-box;display:flex;justify-self:flex-end;align-self:flex-end;width:100%;-webkit-box-pack:end;justify-content:flex-end}.tabs{display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:end;justify-content:flex-end}::ng-deep .button.brand fa-icon{color:#fff!important}@media (max-width:1037px){.files-panel{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:calc(100% - 60px)}.files-panel .upload-compare-file{width:100%;height:50%;border-bottom:1px solid #ccc}::ng-deep .gd-side-panel-wrapper{height:50%!important;top:inherit!important;bottom:0!important}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px!important;width:60px}::ng-deep .tabs-wrapper .gd-tab .icon{font-size:22px!important}}"]
                    }] }
        ];
        /** @nocollapse */
        ComparisonAppComponent.ctorParameters = function () { return [
            { type: ComparisonService },
            { type: ComparisonConfigService },
            { type: commonComponents.UploadFilesService },
            { type: commonComponents.PagePreloadService },
            { type: commonComponents.ModalService },
            { type: commonComponents.TabActivatorService },
            { type: core.ElementRef },
            { type: commonComponents.PasswordService }
        ]; };
        return ComparisonAppComponent;
    }());
    if (false) {
        /** @type {?} */
        ComparisonAppComponent.prototype.files;
        /** @type {?} */
        ComparisonAppComponent.prototype.browseFilesModal;
        /** @type {?} */
        ComparisonAppComponent.prototype.credentials;
        /** @type {?} */
        ComparisonAppComponent.prototype.file;
        /** @type {?} */
        ComparisonAppComponent.prototype.comparisonConfig;
        /** @type {?} */
        ComparisonAppComponent.prototype.activePanel;
        /** @type {?} */
        ComparisonAppComponent.prototype.first;
        /** @type {?} */
        ComparisonAppComponent.prototype.second;
        /** @type {?} */
        ComparisonAppComponent.prototype.firstFileName;
        /** @type {?} */
        ComparisonAppComponent.prototype.secondFileName;
        /** @type {?} */
        ComparisonAppComponent.prototype.loadingFirstPanel;
        /** @type {?} */
        ComparisonAppComponent.prototype.loadingSecondPanel;
        /** @type {?} */
        ComparisonAppComponent.prototype.countPages;
        /** @type {?} */
        ComparisonAppComponent.prototype.result;
        /** @type {?} */
        ComparisonAppComponent.prototype.filesTab;
        /** @type {?} */
        ComparisonAppComponent.prototype.resultTab;
        /** @type {?} */
        ComparisonAppComponent.prototype.activeTab;
        /** @type {?} */
        ComparisonAppComponent.prototype.resultTabDisabled;
        /**
         * @type {?}
         * @private
         */
        ComparisonAppComponent.prototype._comparisonService;
        /**
         * @type {?}
         * @private
         */
        ComparisonAppComponent.prototype.configService;
        /**
         * @type {?}
         * @private
         */
        ComparisonAppComponent.prototype._modalService;
        /**
         * @type {?}
         * @private
         */
        ComparisonAppComponent.prototype._tabActivatorService;
        /**
         * @type {?}
         * @private
         */
        ComparisonAppComponent.prototype._elementRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var States = /** @class */ (function () {
        function States() {
        }
        States.Empty = 'empty';
        States.Opened = 'opened';
        return States;
    }());
    if (false) {
        /** @type {?} */
        States.Empty;
        /** @type {?} */
        States.Opened;
    }
    var AddFilePanelComponent = /** @class */ (function () {
        function AddFilePanelComponent(_modalService, _excMessageService) {
            this._modalService = _modalService;
            this._excMessageService = _excMessageService;
            this.active = new core.EventEmitter();
            this.urlForUpload = new core.EventEmitter();
            this.cleanPanel = new core.EventEmitter();
            this.state = States.Empty;
            this.uploadDisabled = true;
        }
        /**
         * @return {?}
         */
        AddFilePanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        AddFilePanelComponent.prototype.getFormatIcon = /**
         * @return {?}
         */
        function () {
            return commonComponents.FileUtil.find(this.fileName, false).icon;
        };
        /**
         * @return {?}
         */
        AddFilePanelComponent.prototype.openModal = /**
         * @return {?}
         */
        function () {
            this.active.emit(this.panel);
            this._modalService.open(commonComponents.CommonModals.BrowseFiles);
        };
        /**
         * @return {?}
         */
        AddFilePanelComponent.prototype.isEmpty = /**
         * @return {?}
         */
        function () {
            return this.state === States.Empty;
        };
        /**
         * @return {?}
         */
        AddFilePanelComponent.prototype.cleanFile = /**
         * @return {?}
         */
        function () {
            this.active.emit(this.panel);
            this.cleanPanel.emit(true);
        };
        /**
         * @param {?} url
         * @return {?}
         */
        AddFilePanelComponent.prototype.uploadUrl = /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            if (this.uploadDisabled) {
                return;
            }
            if (url && (url.startsWith('http') || url.startsWith('file') || url.startsWith('ftp'))) {
                this.active.emit(this.panel);
                this.urlForUpload.emit(url);
            }
            else {
                this._modalService.open(commonComponents.CommonModals.ErrorMessage);
                this._excMessageService.changeMessage("Wrong url");
            }
        };
        /**
         * @param {?} url
         * @return {?}
         */
        AddFilePanelComponent.prototype.checkDisabled = /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            this.uploadDisabled = url ? url.length === 0 : true;
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        AddFilePanelComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (this.fileName) {
                this.state = States.Opened;
            }
            else {
                this.state = States.Empty;
            }
        };
        AddFilePanelComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-add-file-panel',
                        template: "<div class=\"wrapper\">\n  <div class=\"upload-wrapper\" *ngIf=\"isEmpty()\">\n    <gd-button [icon]=\"'arrow-right'\" [tooltip]=\"'Upload file'\" (click)=\"uploadUrl(url.value)\" [disabled]=\"uploadDisabled\" ></gd-button>\n    <input class=\"url-input\" #url (keyup)=\"checkDisabled(url.value)\" (keyup.enter)=\"uploadUrl(url.value)\" placeholder=\"https://\">\n  </div>\n  <fa-icon *ngIf=\"!isEmpty()\" [icon]=\"['fas',getFormatIcon()]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon()\"></fa-icon>\n  <span *ngIf=\"!isEmpty()\" class=\"compare-file-name\">{{fileName}}</span>\n  <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Open file'\" (click)=\"openModal()\" *ngIf=\"isEmpty()\"></gd-button>\n  <gd-button [icon]=\"'times'\" [tooltip]=\"'Close file'\" (click)=\"cleanFile()\" *ngIf=\"!isEmpty()\"></gd-button>\n</div>\n",
                        styles: [":host{border-bottom:1px solid #ccc}:host ::ng-deep gd-button .button{font-size:14px!important}.wrapper{height:37px;background-color:#fff;display:-webkit-box;display:flex}.upload-wrapper{display:-webkit-box;display:flex;width:100%}.url-input{border:0;height:37px;width:100%;padding-left:5px;margin:0;padding-top:0;padding-bottom:0;outline:0;color:#959da5;opacity:.5;font-style:italic}.compare-file-name{color:#6e6e6e;margin:8px 8px 8px 0;width:100%;text-align:left;font-size:13px;opacity:.5}.ng-fa-icon{color:#959da5;margin:9px 15px 0 13px;font-size:14px}.compare-file{width:100%;border-right:2px solid #ddd}.wrapper .ng-fa-icon.fa-file-pdf{color:#e04e4e}.wrapper .ng-fa-icon.fa-file-word{color:#539cf0}.wrapper .ng-fa-icon.fa-file-powerpoint{color:#e29e1e}.wrapper .ng-fa-icon.fa-file-excel{color:#7cbc46}.wrapper .ng-fa-icon.fa-file-image{color:#c375ed}.wrapper .ng-fa-icon.fa-file,.wrapper .ng-fa-icon.fa-file-alt,.wrapper .ng-fa-icon.fa-file-text .fa-folder{color:#4b566c}.wrapper ::ng-deep gd-button .button fa-icon{color:#6e6e6e}::ng-deep gd-tab .gd-tab .title{font-size:13px;font-weight:700;color:#959da5;opacity:.4}::ng-deep gd-tab .gd-tab.active .title{color:#3e4e5a!important;opacity:1}"]
                    }] }
        ];
        /** @nocollapse */
        AddFilePanelComponent.ctorParameters = function () { return [
            { type: commonComponents.ModalService },
            { type: commonComponents.ExceptionMessageService }
        ]; };
        AddFilePanelComponent.propDecorators = {
            panel: [{ type: core.Input }],
            active: [{ type: core.Output }],
            urlForUpload: [{ type: core.Output }],
            cleanPanel: [{ type: core.Output }],
            fileName: [{ type: core.Input }]
        };
        return AddFilePanelComponent;
    }());
    if (false) {
        /** @type {?} */
        AddFilePanelComponent.prototype.panel;
        /** @type {?} */
        AddFilePanelComponent.prototype.active;
        /** @type {?} */
        AddFilePanelComponent.prototype.urlForUpload;
        /** @type {?} */
        AddFilePanelComponent.prototype.cleanPanel;
        /** @type {?} */
        AddFilePanelComponent.prototype.state;
        /** @type {?} */
        AddFilePanelComponent.prototype.fileName;
        /** @type {?} */
        AddFilePanelComponent.prototype.uploadDisabled;
        /**
         * @type {?}
         * @private
         */
        AddFilePanelComponent.prototype._modalService;
        /**
         * @type {?}
         * @private
         */
        AddFilePanelComponent.prototype._excMessageService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UploadFilePanelComponent = /** @class */ (function () {
        function UploadFilePanelComponent(_uploadService, _modalService) {
            this._uploadService = _uploadService;
            this._modalService = _modalService;
            this.active = new core.EventEmitter();
            this.showUploadFile = false;
        }
        /**
         * @return {?}
         */
        UploadFilePanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        UploadFilePanelComponent.prototype.openModal = /**
         * @return {?}
         */
        function () {
            this.active.emit(this.panel);
            this._modalService.open(commonComponents.CommonModals.BrowseFiles);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        UploadFilePanelComponent.prototype.dropped = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if ($event) {
                this.active.emit(this.panel);
                this.showUploadFile = false;
            }
        };
        UploadFilePanelComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-upload-file-panel',
                        template: "<div class=\"wrapper gd-drag-n-drop-wrap\" gdDnd (dropped)=\"dropped($event)\" (opening)=\"showUploadFile=$event\" (click)=\"openModal()\">\n  <div class=\"init-state-wrapper\">\n    <fa-icon class=\"icon\" [icon]=\"['fas', 'folder-open']\"></fa-icon>\n    <span class=\"start\">\n        Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n        Or drop file here\n    </span>\n  </div>\n  <div *ngIf=\"showUploadFile\" class=\"init-state-dnd-wrapper\">\n    <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\n    <span class=\"text\">Drop file here to upload</span>\n  </div>\n</div>\n",
                        styles: [":host{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;align-content:center;height:100%;border-bottom:1px solid #ccc}.wrapper{color:#959da5;background-color:#e7e7e7;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;width:100%;height:100%}.icon{font-size:65px;margin-bottom:43px;display:-webkit-box;display:flex;color:#959da5}.start{font-size:15px;text-align:center;color:#959da5}.gd-drag-n-drop-wrap.active{background-color:#fff;position:fixed;top:60px;width:50%;background:rgba(255,255,255,.8)}.gd-drag-n-drop-wrap.active .init-state-wrapper{position:absolute;opacity:.2;top:unset;margin-top:-11px}.gd-drag-n-drop-wrap.active .init-state-dnd-wrapper{top:0;z-index:999;margin-top:-11px}.gd-drag-n-drop-wrap.active .init-state-dnd-wrapper .icon{width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}.gd-drag-n-drop-wrap.active .text{color:#6e6e6e;font-size:14px}.init-state-dnd-wrapper,.init-state-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:250px;height:250px;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.init-state-wrapper{top:-30px;position:relative}"]
                    }] }
        ];
        /** @nocollapse */
        UploadFilePanelComponent.ctorParameters = function () { return [
            { type: commonComponents.UploadFilesService },
            { type: commonComponents.ModalService }
        ]; };
        UploadFilePanelComponent.propDecorators = {
            panel: [{ type: core.Input }],
            active: [{ type: core.Output }]
        };
        return UploadFilePanelComponent;
    }());
    if (false) {
        /** @type {?} */
        UploadFilePanelComponent.prototype.panel;
        /** @type {?} */
        UploadFilePanelComponent.prototype.active;
        /** @type {?} */
        UploadFilePanelComponent.prototype.showUploadFile;
        /**
         * @type {?}
         * @private
         */
        UploadFilePanelComponent.prototype._uploadService;
        /**
         * @type {?}
         * @private
         */
        UploadFilePanelComponent.prototype._modalService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComparedPageModel = /** @class */ (function (_super) {
        __extends(ComparedPageModel, _super);
        function ComparedPageModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ComparedPageModel;
    }(commonComponents.PageModel));
    if (false) {
        /** @type {?} */
        ComparedPageModel.prototype.changes;
    }
    var CompareResult = /** @class */ (function () {
        function CompareResult() {
        }
        return CompareResult;
    }());
    if (false) {
        /** @type {?} */
        CompareResult.prototype.changes;
        /** @type {?} */
        CompareResult.prototype.pages;
        /** @type {?} */
        CompareResult.prototype.guid;
    }
    var ChangeInfo = /** @class */ (function () {
        function ChangeInfo() {
        }
        return ChangeInfo;
    }());
    if (false) {
        /** @type {?} */
        ChangeInfo.prototype.pageInfo;
        /** @type {?} */
        ChangeInfo.prototype.text;
        /** @type {?} */
        ChangeInfo.prototype.type;
        /** @type {?} */
        ChangeInfo.prototype.box;
        /** @type {?} */
        ChangeInfo.prototype.id;
        /** @type {?} */
        ChangeInfo.prototype.styleChanges;
        /** @type {?} */
        ChangeInfo.prototype.normalized;
        /** @type {?} */
        ChangeInfo.prototype.active;
    }
    var StyleChange = /** @class */ (function () {
        function StyleChange() {
        }
        return StyleChange;
    }());
    if (false) {
        /** @type {?} */
        StyleChange.prototype.changedProperty;
        /** @type {?} */
        StyleChange.prototype.newValue;
        /** @type {?} */
        StyleChange.prototype.oldValue;
    }
    var Rectangle = /** @class */ (function () {
        function Rectangle() {
        }
        return Rectangle;
    }());
    if (false) {
        /** @type {?} */
        Rectangle.prototype.x;
        /** @type {?} */
        Rectangle.prototype.y;
        /** @type {?} */
        Rectangle.prototype.width;
        /** @type {?} */
        Rectangle.prototype.height;
    }
    var PageInfo = /** @class */ (function () {
        function PageInfo() {
        }
        return PageInfo;
    }());
    if (false) {
        /** @type {?} */
        PageInfo.prototype.width;
        /** @type {?} */
        PageInfo.prototype.height;
        /** @type {?} */
        PageInfo.prototype.changes;
        /** @type {?} */
        PageInfo.prototype.pageNumber;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DifferencesService = /** @class */ (function () {
        function DifferencesService() {
            this._activeChange = new rxjs.BehaviorSubject(null);
            this.activeChange = this._activeChange.asObservable();
        }
        /**
         * @param {?} id
         * @return {?}
         */
        DifferencesService.prototype.setActiveChange = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this._activeChange.next(id);
        };
        DifferencesService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DifferencesService.ctorParameters = function () { return []; };
        /** @nocollapse */ DifferencesService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DifferencesService_Factory() { return new DifferencesService(); }, token: DifferencesService, providedIn: "root" });
        return DifferencesService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DifferencesService.prototype._activeChange;
        /** @type {?} */
        DifferencesService.prototype.activeChange;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DifferenceComponent = /** @class */ (function () {
        function DifferenceComponent(changeService) {
            this.changesService = changeService;
        }
        /**
         * @return {?}
         */
        DifferenceComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.changesService.activeChange.subscribe((/**
             * @param {?} activeID
             * @return {?}
             */
            function (activeID) { return _this.active = _this.change.id === activeID; }));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        DifferenceComponent.prototype.getRgbaColor = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return "rgba(" + value.red + "," + value.green + "," + value.blue + "," + value.alpha + ")";
        };
        DifferenceComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-comparison-difference',
                        template: "<div  class=\"gd-difference\" [ngClass]=\"{'active': active}\">\n  <div [ngSwitch]=\"change.type\" class=\"gd-difference-title-wrapper\">\n    <ng-container *ngSwitchCase='1'>\n      <fa-icon class=\"fas fa-pencil-alt\" [icon]=\"['fas','pencil-alt']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text edited</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='2'>\n      <fa-icon class=\"fas fa-arrow-right\" [icon]=\"['fas','arrow-right']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text added</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='3'>\n      <fa-icon class=\"fas fa-times\" [icon]=\"['fas','trash']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text deleted</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='4'>\n      <fa-icon class=\"fas fa-arrow-right\" [icon]=\"['fas','arrow-right']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text added</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='6'>\n      <fa-icon class=\"fas fa-pencil-alt\" [icon]=\"['fas','pencil-alt']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Style changed</div>\n        <div class=\"gd-differentce-comment\">\n          <ng-container *ngFor=\"let style of change.styleChanges\" [ngSwitch]=\"style.changedProperty\">\n            <div *ngSwitchCase=\"'HighlightColor'\">\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.oldValue)\"></span>\n              &rarr;\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.newValue)\"></span>\n              <span class=\"property\">Highlight Color</span>\n            </div>\n            <div *ngSwitchCase=\"'Color'\">\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.oldValue)\"></span>\n              &rarr;\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.newValue)\"></span>\n              <span class=\"property\">Color</span>\n            </div>\n            <div *ngSwitchCase=\"'Size'\">\n              {{style.oldValue}} &rarr; {{style.newValue}}\n              <span class=\"property\">Font size</span>\n            </div>\n            <div *ngSwitchCase=\"'Bold'\">\n              <span [style.fontWeight]=\"style.oldValue ? 'bold' : ''\">{{change.text}}</span> &rarr; <span [style.fontWeight]=\"style.newValue ? 'bold' : ''\">{{change.text}}</span>\n              <span class=\"property\">Bold</span>\n            </div>\n            <div *ngSwitchCase=\"'Italic'\">\n              <span [style.fontStyle]=\"style.oldValue ? 'italic' : ''\">{{change.text}}</span> &rarr; <span [style.fontStyle]=\"style.newValue ? 'italic' : ''\">{{change.text}}</span>\n              <span class=\"property\">Italic</span>\n            </div>\n            <div *ngSwitchCase=\"'cS'\">\n              <span [style.textDecoration]=\"style.oldValue === 'SINGLE' ? 'underline' : ''\">{{change.text}}</span> &rarr; <span [style.textDecoration]=\"style.newValue === 'SINGLE' ? 'underline' : ''\">{{change.text}}</span>\n              <span class=\"property\">Underline</span>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </ng-container>\n    <div class=\"gd-difference-page\">Page {{change.pageInfo.pageNumber + 1}}</div>\n  </div>\n</div>\n",
                        styles: [".gd-difference{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;border-bottom:1px solid #eee;cursor:pointer}.gd-difference.active{background-color:#f2f2f2}.gd-difference:hover{background-color:#e5e5e5}.gd-difference .gd-difference-title-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;align-content:stretch;padding:14px 21px 17px 24px}.gd-difference .gd-difference-title-wrapper fa-icon{font-size:14px}.gd-difference .gd-difference-title-wrapper .fa-arrow-right{color:#16b901}.gd-difference .gd-difference-title-wrapper .fa-pencil-alt{color:#ced600}.gd-difference .gd-difference-title-wrapper .fa-times{color:#b96401}.gd-difference .gd-difference-title-wrapper .gd-difference-body{width:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding-left:24.6px}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-difference-title{color:#222e35;font-size:13px;font-weight:700}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-differentce-comment{color:#959da5;font-size:13px;padding-top:10px;overflow:hidden;text-overflow:ellipsis}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-differentce-comment .color{vertical-align:text-bottom;width:14px;height:14px;display:inline-block;border:1px solid #ccc;border-radius:100%}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-differentce-comment .property{padding-left:1em}.gd-difference .gd-difference-title-wrapper .gd-difference-page{color:rgba(149,157,165,.48);font-size:11px;white-space:nowrap}"]
                    }] }
        ];
        /** @nocollapse */
        DifferenceComponent.ctorParameters = function () { return [
            { type: DifferencesService }
        ]; };
        DifferenceComponent.propDecorators = {
            change: [{ type: core.Input }]
        };
        return DifferenceComponent;
    }());
    if (false) {
        /** @type {?} */
        DifferenceComponent.prototype.change;
        /** @type {?} */
        DifferenceComponent.prototype.active;
        /**
         * @type {?}
         * @private
         */
        DifferenceComponent.prototype.changesService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var $$1 = jquery;
    var DifferenceHighlightComponent = /** @class */ (function () {
        function DifferenceHighlightComponent(changeService) {
            this.changesService = changeService;
        }
        /**
         * @return {?}
         */
        DifferenceHighlightComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.changesService.activeChange.subscribe((/**
             * @param {?} activeID
             * @return {?}
             */
            function (activeID) { return _this.active = _this.change.id === activeID; }));
        };
        /**
         * @param {?} event
         * @return {?}
         */
        DifferenceHighlightComponent.prototype.close = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.changesService.setActiveChange(null);
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DifferenceHighlightComponent.prototype.highlight = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this.changesService.setActiveChange(id);
        };
        DifferenceHighlightComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-difference-highlight',
                        template: "<div\n  class=\"gd-difference-{{change.type}} highlight-difference\"\n  (clickOutside)=\"close($event)\"\n  [clickOutsideEnabled]=\"active\"\n  (click)=\"highlight(change.id)\"\n  [ngClass]=\"{'active': active}\"\n  [ngStyle]=\"{\n    width: change.normalized.width + '%',\n    height: change.normalized.height + '%',\n    left: change.normalized.x + '%',\n    top: change.normalized.y + '%'\n  }\"\n  data-id=\"{{change.id}}\">\n\n</div>\n\n",
                        styles: [".highlight-difference{position:absolute;cursor:pointer;z-index:1}.gd-difference.active,.highlight-difference.active{box-shadow:0 0 0 9999px rgba(0,0,0,.5);z-index:999}.gd-difference-1{background-color:rgba(0,122,255,.4)}.gd-difference-2,.gd-difference-4{background-color:rgba(46,237,0,.4)}.gd-difference-3{background-color:rgba(237,0,0,.4)}.gd-difference-6{background-color:rgba(215,224,0,.4)}"]
                    }] }
        ];
        /** @nocollapse */
        DifferenceHighlightComponent.ctorParameters = function () { return [
            { type: DifferencesService }
        ]; };
        DifferenceHighlightComponent.propDecorators = {
            change: [{ type: core.Input }],
            active: [{ type: core.Input }]
        };
        return DifferenceHighlightComponent;
    }());
    if (false) {
        /** @type {?} */
        DifferenceHighlightComponent.prototype.change;
        /** @type {?} */
        DifferenceHighlightComponent.prototype.active;
        /**
         * @type {?}
         * @private
         */
        DifferenceHighlightComponent.prototype.changesService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var $$2 = jquery;
    var ResultDocumentComponent = /** @class */ (function (_super) {
        __extends(ResultDocumentComponent, _super);
        function ResultDocumentComponent(_elementRef, zoomService, changeService, windowService, navigateService) {
            var _this = _super.call(this, _elementRef, zoomService, windowService, navigateService) || this;
            _this.changesService = changeService;
            return _this;
        }
        /**
         * @return {?}
         */
        ResultDocumentComponent.prototype.close = /**
         * @return {?}
         */
        function () {
            this.changesService.setActiveChange(null);
        };
        /**
         * @return {?}
         */
        ResultDocumentComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        ResultDocumentComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-result-document',
                        template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\">\n  <div class=\"panzoom\">\n    <div [ngClass]=\"'page'\" *ngFor=\"let page of file?.pages\"\n         [style.height]=\"getDimensionWithUnit(page.height, page.number)\"\n         [style.width]=\"getDimensionWithUnit(page.width, page.number)\"\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\n      <div class=\"highlights\">\n        <gd-difference-highlight\n          *ngFor=\"let change of page?.changes\"\n          [change]=\"change\">\n        </gd-difference-highlight>\n      </div>\n    </div>\n  </div>\n</div>\n",
                        // @TODO: this is replicated from base component until styles inheritance supported added to angular
                        providers: [commonComponents.ZoomService],
                        viewProviders: [commonComponents.ZoomDirective],
                        styles: [":host{overflow:scroll}.document{background-color:#e7e7e7;width:100%;height:100%;-webkit-transition:.4s;transition:.4s;padding:0;margin:0;position:relative}.page{position:relative;display:inline-block;background-color:#fff;margin:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);-webkit-transition:.3s;transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{-webkit-transform:none;transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}@media (max-width:1037px){.panzoom{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
                    }] }
        ];
        /** @nocollapse */
        ResultDocumentComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: commonComponents.ZoomService },
            { type: DifferencesService },
            { type: commonComponents.WindowService },
            { type: commonComponents.NavigateService }
        ]; };
        return ResultDocumentComponent;
    }(commonComponents.DocumentComponent));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ResultDocumentComponent.prototype.changesService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DifferencesComponent = /** @class */ (function () {
        function DifferencesComponent(changeService, navigateService) {
            this.changes = [];
            this.changesService = changeService;
            this.navigateService = navigateService;
        }
        /**
         * @return {?}
         */
        DifferencesComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} id
         * @param {?} page
         * @param {?} event
         * @return {?}
         */
        DifferencesComponent.prototype.highlightDifference = /**
         * @param {?} id
         * @param {?} page
         * @param {?} event
         * @return {?}
         */
        function (id, page, event) {
            event.stopPropagation();
            this.changesService.setActiveChange(id);
            this.navigateService.navigateTo(page + 1);
        };
        DifferencesComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-differences',
                        template: "<div *ngFor=\"let change of changes; let i = index\" data-id=\"{{i}}\" (click)=\"highlightDifference(change.id,change.pageInfo.pageNumber,$event)\">\n  <gd-comparison-difference [change]=\"change\"></gd-comparison-difference>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        DifferencesComponent.ctorParameters = function () { return [
            { type: DifferencesService },
            { type: commonComponents.NavigateService }
        ]; };
        DifferencesComponent.propDecorators = {
            changes: [{ type: core.Input }]
        };
        return DifferencesComponent;
    }());
    if (false) {
        /** @type {?} */
        DifferencesComponent.prototype.changes;
        /**
         * @type {?}
         * @private
         */
        DifferencesComponent.prototype.changesService;
        /**
         * @type {?}
         * @private
         */
        DifferencesComponent.prototype.navigateService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} comparisonConfigService
     * @return {?}
     */
    function initializeApp(comparisonConfigService) {
        /** @type {?} */
        var result = (/**
         * @return {?}
         */
        function () { return comparisonConfigService.load(); });
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
    var ComparisonModule = /** @class */ (function () {
        function ComparisonModule() {
            fontawesomeSvgCore.library.add(freeSolidSvgIcons.fas, freeRegularSvgIcons.far);
        }
        /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        ComparisonModule.forRoot = /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        function (apiEndpoint) {
            commonComponents.Api.DEFAULT_API_ENDPOINT = apiEndpoint;
            return {
                ngModule: ComparisonModule
            };
        };
        ComparisonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ComparisonAppComponent, AddFilePanelComponent, UploadFilePanelComponent, DifferenceComponent, DifferenceHighlightComponent, ResultDocumentComponent, DifferencesComponent],
                        imports: [
                            platformBrowser.BrowserModule,
                            commonComponents.CommonComponentsModule,
                            http.HttpClientModule,
                            angularFontawesome.FontAwesomeModule,
                            ngClickOutside.ClickOutsideModule,
                            core$1.TranslateModule.forRoot()
                        ],
                        exports: [
                            ComparisonAppComponent,
                            commonComponents.CommonComponentsModule,
                            ResultDocumentComponent,
                            DifferencesComponent
                        ],
                        providers: [
                            ComparisonService,
                            commonComponents.ConfigService,
                            DifferencesService,
                            ComparisonConfigService,
                            {
                                provide: core.APP_INITIALIZER,
                                useFactory: initializeApp,
                                deps: [ComparisonConfigService],
                                multi: true
                            },
                            {
                                provide: http.HTTP_INTERCEPTORS,
                                useClass: commonComponents.ErrorInterceptorService,
                                multi: true
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
        /** @nocollapse */
        ComparisonModule.ctorParameters = function () { return []; };
        return ComparisonModule;
    }());

    exports.ChangeInfo = ChangeInfo;
    exports.CompareResult = CompareResult;
    exports.ComparedPageModel = ComparedPageModel;
    exports.ComparisonAppComponent = ComparisonAppComponent;
    exports.ComparisonConfig = ComparisonConfig;
    exports.ComparisonConfigService = ComparisonConfigService;
    exports.ComparisonModule = ComparisonModule;
    exports.ComparisonService = ComparisonService;
    exports.Files = Files;
    exports.Highlight = Highlight;
    exports.PageInfo = PageInfo;
    exports.Rectangle = Rectangle;
    exports.StyleChange = StyleChange;
    exports.initializeApp = initializeApp;
    exports.setupLoadingInterceptor = setupLoadingInterceptor;
    exports.ɵa = AddFilePanelComponent;
    exports.ɵb = UploadFilePanelComponent;
    exports.ɵc = DifferenceComponent;
    exports.ɵd = DifferencesService;
    exports.ɵe = DifferenceHighlightComponent;
    exports.ɵf = ResultDocumentComponent;
    exports.ɵg = DifferencesComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=groupdocs.examples.angular-comparison.umd.js.map
