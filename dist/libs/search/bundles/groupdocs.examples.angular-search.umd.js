(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('@angular/common/http'), require('@groupdocs.examples.angular/common-components'), require('rxjs'), require('@fortawesome/angular-fontawesome'), require('@ngx-translate/core')) :
    typeof define === 'function' && define.amd ? define('@groupdocs.examples.angular/search', ['exports', '@angular/platform-browser', '@angular/core', '@angular/common/http', '@groupdocs.examples.angular/common-components', 'rxjs', '@fortawesome/angular-fontawesome', '@ngx-translate/core'], factory) :
    (global = global || self, factory((global.groupdocs = global.groupdocs || {}, global.groupdocs.examples = global.groupdocs.examples || {}, global.groupdocs.examples.angular = global.groupdocs.examples.angular || {}, global.groupdocs.examples.angular.search = {}), global.ng.platformBrowser, global.ng.core, global.ng.common.http, global.commonComponents, global.rxjs, global.angularFontawesome, global.core$1));
}(this, (function (exports, platformBrowser, core, http, commonComponents, rxjs, angularFontawesome, core$1) { 'use strict';

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
    var SearchService = /** @class */ (function () {
        function SearchService(_http, _config) {
            this._http = _http;
            this._config = _config;
            this._itemToRemove = new rxjs.BehaviorSubject(null);
            this.itemToRemove = this._itemToRemove.asObservable();
        }
        /**
         * @param {?} filesToIndex
         * @return {?}
         */
        SearchService.prototype.addFilesToIndex = /**
         * @param {?} filesToIndex
         * @return {?}
         */
        function (filesToIndex) {
            return this._http.post(this._config.getSearchApiEndpoint() + commonComponents.Api.ADD_FILES_TO_INDEX, filesToIndex, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} path
         * @return {?}
         */
        SearchService.prototype.loadFiles = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            return this._http.post(this._config.getSearchApiEndpoint() + commonComponents.Api.LOAD_FILE_TREE, { 'path': path }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        SearchService.prototype.loadFile = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._http.post(this._config.getSearchApiEndpoint() + commonComponents.Api.LOAD_DOCUMENT_DESCRIPTION, credentials, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} file
         * @param {?} url
         * @param {?} rewrite
         * @return {?}
         */
        SearchService.prototype.upload = /**
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
            return this._http.post(this._config.getSearchApiEndpoint() + commonComponents.Api.UPLOAD_DOCUMENTS, formData);
        };
        /**
         * @param {?} credentials
         * @param {?} query
         * @return {?}
         */
        SearchService.prototype.search = /**
         * @param {?} credentials
         * @param {?} query
         * @return {?}
         */
        function (credentials, query) {
            return this._http.post(this._config.getSearchApiEndpoint() + commonComponents.Api.SEARCH, {
                'query': query
            }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} file
         * @return {?}
         */
        SearchService.prototype.removeFile = /**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            return this._http.post(this._config.getSearchApiEndpoint() + commonComponents.Api.REMOVE_FROM_INDEX, file, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} file
         * @return {?}
         */
        SearchService.prototype.selectedItemToRemove = /**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            this._itemToRemove.next(file);
        };
        /**
         * @param {?} files
         * @return {?}
         */
        SearchService.prototype.getDocumentStatus = /**
         * @param {?} files
         * @return {?}
         */
        function (files) {
            return this._http.post(this._config.getSearchApiEndpoint() + commonComponents.Api.GET_FILE_STATUS, files, commonComponents.Api.httpOptionsJson);
        };
        SearchService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SearchService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ SearchService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SearchService_Factory() { return new SearchService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: SearchService, providedIn: "root" });
        return SearchService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SearchService.prototype._itemToRemove;
        /** @type {?} */
        SearchService.prototype.itemToRemove;
        /**
         * @type {?}
         * @private
         */
        SearchService.prototype._http;
        /**
         * @type {?}
         * @private
         */
        SearchService.prototype._config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchConfig = /** @class */ (function () {
        function SearchConfig() {
        }
        return SearchConfig;
    }());
    if (false) {
        /** @type {?} */
        SearchConfig.prototype.rewrite;
        /** @type {?} */
        SearchConfig.prototype.upload;
        /** @type {?} */
        SearchConfig.prototype.browse;
        /** @type {?} */
        SearchConfig.prototype.filesDirectory;
        /** @type {?} */
        SearchConfig.prototype.indexedFilesDirectory;
        /** @type {?} */
        SearchConfig.prototype.defaultDocument;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchConfigService = /** @class */ (function () {
        function SearchConfigService(_http, _config) {
            this._http = _http;
            this._config = _config;
            this._searchConfig = new rxjs.BehaviorSubject(new SearchConfig());
            this._updatedConfig = this._searchConfig.asObservable();
        }
        Object.defineProperty(SearchConfigService.prototype, "updatedConfig", {
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
        SearchConfigService.prototype.load = /**
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
                var configEndpoint = _this._config.getConfigEndpoint(commonComponents.Api.SEARCH_APP);
                _this._http.get(configEndpoint, commonComponents.Api.httpOptionsJson).toPromise().then((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    /** @type {?} */
                    var searchConfig = (/** @type {?} */ (response));
                    _this._searchConfig.next(searchConfig);
                    resolve();
                })).catch((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    reject("Could not load search config: " + JSON.stringify(response));
                }));
            }));
        };
        SearchConfigService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SearchConfigService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ SearchConfigService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SearchConfigService_Factory() { return new SearchConfigService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: SearchConfigService, providedIn: "root" });
        return SearchConfigService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SearchConfigService.prototype._searchConfig;
        /**
         * @type {?}
         * @private
         */
        SearchConfigService.prototype._updatedConfig;
        /**
         * @type {?}
         * @private
         */
        SearchConfigService.prototype._http;
        /**
         * @type {?}
         * @private
         */
        SearchConfigService.prototype._config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IndexedFileModel = /** @class */ (function (_super) {
        __extends(IndexedFileModel, _super);
        function IndexedFileModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return IndexedFileModel;
    }(commonComponents.FileModel));
    if (false) {
        /** @type {?} */
        IndexedFileModel.prototype.documentStatus;
        /** @type {?} */
        IndexedFileModel.prototype.password;
    }
    var SearchResult = /** @class */ (function () {
        function SearchResult() {
        }
        return SearchResult;
    }());
    if (false) {
        /** @type {?} */
        SearchResult.prototype.foundFiles;
        /** @type {?} */
        SearchResult.prototype.filePath;
        /** @type {?} */
        SearchResult.prototype.searchDuration;
        /** @type {?} */
        SearchResult.prototype.totalFiles;
        /** @type {?} */
        SearchResult.prototype.totalOccurences;
        /** @type {?} */
        SearchResult.prototype.indexedFiles;
    }
    var SearchResultItemModel = /** @class */ (function () {
        function SearchResultItemModel() {
        }
        return SearchResultItemModel;
    }());
    if (false) {
        /** @type {?} */
        SearchResultItemModel.prototype.directory;
        /** @type {?} */
        SearchResultItemModel.prototype.occurrences;
        /** @type {?} */
        SearchResultItemModel.prototype.size;
        /** @type {?} */
        SearchResultItemModel.prototype.guid;
        /** @type {?} */
        SearchResultItemModel.prototype.name;
        /** @type {?} */
        SearchResultItemModel.prototype.isDirectory;
        /** @type {?} */
        SearchResultItemModel.prototype.showPhrases;
        /** @type {?} */
        SearchResultItemModel.prototype.foundPhrases;
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
    }
    /** @enum {string} */
    var FileIndexingStatus = {
        Indexing: "Indexing",
        SuccessfullyProcessed: "SuccessfullyProcessed",
        Skipped: "Skipped",
        ProcessedWithError: "ProcessedWithError",
        PasswordRequired: "PasswordRequired",
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchAppComponent = /** @class */ (function () {
        function SearchAppComponent(_searchService, _modalService, configService, uploadFilesService, passwordService, _windowService, _loadingMaskService) {
            var _this = this;
            this._searchService = _searchService;
            this._modalService = _modalService;
            this._windowService = _windowService;
            this._loadingMaskService = _loadingMaskService;
            this.title = 'search';
            this.files = [];
            this.searchResultItems = [];
            this.indexedFiles = [];
            this.browseFilesModal = commonComponents.CommonModals.BrowseFiles;
            this.fileWasDropped = false;
            configService.updatedConfig.subscribe((/**
             * @param {?} searchConfig
             * @return {?}
             */
            function (searchConfig) {
                _this.searchConfig = searchConfig;
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
                        _this._searchService.upload(uploads.item(i), '', _this.searchConfig.rewrite).subscribe((/**
                         * @param {?} obj
                         * @return {?}
                         */
                        function (obj) {
                            if (!_this.fileWasDropped) {
                                _this.selectDir('');
                            }
                        }));
                    }
                }
            }));
            passwordService.passChange.subscribe((/**
             * @param {?} pass
             * @return {?}
             */
            function (pass) {
                _this.closeModal(commonComponents.CommonModals.PasswordRequired);
                /** @type {?} */
                var passwordRequiredFile = _this.indexedFiles.filter((/**
                 * @param {?} f
                 * @return {?}
                 */
                function (f) { return f.documentStatus === FileIndexingStatus.PasswordRequired; }))[0];
                passwordRequiredFile.password = pass;
                _this._searchService.addFilesToIndex([passwordRequiredFile]).subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.loadIndexedFiles(true);
                }));
            }));
            this.isDesktop = _windowService.isDesktop();
            _windowService.onResize.subscribe((/**
             * @param {?} w
             * @return {?}
             */
            function (w) {
                _this.isDesktop = _windowService.isDesktop();
            }));
            _searchService.itemToRemove.subscribe((/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                if (file) {
                    _this._searchService.removeFile(file).subscribe((/**
                     * @return {?}
                     */
                    function () {
                        _this.removeFileFromList(file);
                    }));
                }
            }));
        }
        /**
         * @return {?}
         */
        SearchAppComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        SearchAppComponent.prototype.ngAfterViewInit = /**
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
        };
        Object.defineProperty(SearchAppComponent.prototype, "rewriteConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.searchConfig ? this.searchConfig.rewrite : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SearchAppComponent.prototype, "uploadConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.searchConfig ? this.searchConfig.upload : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SearchAppComponent.prototype, "browseConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.searchConfig ? this.searchConfig.browse : true;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} id
         * @return {?}
         */
        SearchAppComponent.prototype.openModal = /**
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
        SearchAppComponent.prototype.closeModal = /**
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
        SearchAppComponent.prototype.selectDir = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this._searchService.loadFiles($event).subscribe((/**
             * @param {?} files
             * @return {?}
             */
            function (files) { return _this.files = files || []; }));
        };
        /**
         * @return {?}
         */
        SearchAppComponent.prototype.clearSearchResult = /**
         * @return {?}
         */
        function () {
            this.searchResult = null;
            if (this.firstSearchPerformed && this.indexedFiles.length === 0) {
                this.loadIndexedFiles(true);
            }
        };
        /**
         * @param {?} checked
         * @return {?}
         */
        SearchAppComponent.prototype.selectAllItems = /**
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
         * @param {?} $event
         * @return {?}
         */
        SearchAppComponent.prototype.loadIndexedFiles = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            if (!$event)
                return;
            this._searchService.loadFiles(this.searchConfig.indexedFilesDirectory).subscribe((/**
             * @param {?} indexingFiles
             * @return {?}
             */
            function (indexingFiles) {
                if (indexingFiles && _this.skipPasswordProtected && indexingFiles.filter((/**
                 * @param {?} f
                 * @return {?}
                 */
                function (f) { return f.documentStatus === FileIndexingStatus.PasswordRequired; })).length > 0) {
                    indexingFiles.filter((/**
                     * @param {?} f
                     * @return {?}
                     */
                    function (f) { return f.documentStatus === FileIndexingStatus.PasswordRequired; }))[0].documentStatus = FileIndexingStatus.Skipped;
                }
                _this.indexedFiles = indexingFiles || [];
                if (_this.indexedFiles.filter((/**
                 * @param {?} f
                 * @return {?}
                 */
                function (f) { return f.documentStatus === FileIndexingStatus.Indexing; })).length > 0 ||
                    (!_this.skipPasswordProtected && _this.indexedFiles.filter((/**
                     * @param {?} f
                     * @return {?}
                     */
                    function (f) { return f.documentStatus === FileIndexingStatus.PasswordRequired; })).length > 0)) {
                    /** @type {?} */
                    var timerId_1 = setInterval((/**
                     * @return {?}
                     */
                    function () {
                        _this._searchService.getDocumentStatus(_this.indexedFiles.filter((/**
                         * @param {?} f
                         * @return {?}
                         */
                        function (f) { return f.documentStatus === FileIndexingStatus.Indexing ||
                            (!_this.skipPasswordProtected && f.documentStatus === FileIndexingStatus.PasswordRequired); }))).toPromise().then((/**
                         * @param {?} searchIndexFiles
                         * @return {?}
                         */
                        function (searchIndexFiles) {
                            searchIndexFiles.forEach((/**
                             * @param {?} searchFile
                             * @return {?}
                             */
                            function (searchFile) {
                                if (searchFile.documentStatus !== FileIndexingStatus.Indexing) {
                                    _this.indexedFiles.filter((/**
                                     * @param {?} f
                                     * @return {?}
                                     */
                                    function (f) { return f.guid === searchFile.guid; }))[0].documentStatus = searchFile.documentStatus;
                                }
                            }));
                            if (_this.indexedFiles.filter((/**
                             * @param {?} f
                             * @return {?}
                             */
                            function (f) { return f.documentStatus === FileIndexingStatus.Indexing; })).length === 0) {
                                clearInterval(timerId_1);
                            }
                        })).catch((/**
                         * @param {?} response
                         * @return {?}
                         */
                        function (response) {
                            clearInterval(timerId_1);
                        }));
                    }), 1000);
                }
            }));
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        SearchAppComponent.prototype.cancel = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.indexedFiles.filter((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return f.documentStatus === FileIndexingStatus.PasswordRequired; }))[0].documentStatus = FileIndexingStatus.Skipped;
            this.skipPasswordProtected = true;
            this.loadIndexedFiles(true);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        SearchAppComponent.prototype.upload = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this._searchService.upload(null, $event, this.rewriteConfig).subscribe((/**
             * @return {?}
             */
            function () {
                _this.selectDir('');
            }));
        };
        /**
         * @param {?} $event
         * @param {?=} reloadFiles
         * @return {?}
         */
        SearchAppComponent.prototype.fileDropped = /**
         * @param {?} $event
         * @param {?=} reloadFiles
         * @return {?}
         */
        function ($event, reloadFiles) {
            var _this = this;
            if (reloadFiles === void 0) { reloadFiles = false; }
            this.fileWasDropped = $event;
            if (reloadFiles) {
                this._searchService.loadFiles('').subscribe((/**
                 * @param {?} files
                 * @return {?}
                 */
                function (files) { return _this.files = files || []; }));
            }
        };
        /**
         * @param {?} file
         * @return {?}
         */
        SearchAppComponent.prototype.removeFileFromList = /**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            var _this = this;
            if (this.indexedFiles.length > 0) {
                this.indexedFiles.forEach((/**
                 * @param {?} f
                 * @param {?} index
                 * @return {?}
                 */
                function (f, index) {
                    if (f.guid === file.guid)
                        _this.indexedFiles.splice(index, 1);
                }));
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        SearchAppComponent.prototype.search = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            if ($event === "")
                return;
            /** @type {?} */
            var creds = [];
            creds.push(this.credentials);
            this._searchService.search(creds, $event).subscribe((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                _this.searchResult = result;
                _this.firstSearchPerformed = true;
            }));
        };
        SearchAppComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-search-app',
                        template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'search'\" icon=\"search\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n    </gd-top-toolbar>\n    <gd-search-panel (searchText)=\"search($event)\" (clearQuery)=\"clearSearchResult()\"></gd-search-panel>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"'Drop file here to upload'\" *ngIf=\"indexedFiles.length === 0\" (fileDropped)=\"fileDropped($event)\">\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n    Or drop file here\n  </gd-init-state>\n\n  <gd-indexed-files-list [files]=\"indexedFiles\" *ngIf=\"indexedFiles.length > 0 && !searchResult\"></gd-indexed-files-list>\n\n  <gd-search-result-summary [searchResult]=\"searchResult\" *ngIf=\"searchResult\"></gd-search-result-summary>\n\n  <gd-search-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         [uploadConfig]=\"uploadConfig\" (selectAll)=\"selectAllItems($event)\" (fileDropped)=\"fileDropped($event, true)\"\n                         (filesAddedToIndex)=\"loadIndexedFiles($event)\"></gd-search-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required (cancelEvent)=\"cancel($event)\"></gd-password-required>\n</div>\n",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.gd-document,/deep/ .document{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important}.current-page-number{margin-left:7px;font-size:14px;color:#959da5;width:37px;height:37px;line-height:37px;text-align:center}.current-page-number.active{color:#fff}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.thumbnails-button{position:absolute;right:3px}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}::ng-deep .tools .button,::ng-deep .tools .nav-caret,::ng-deep .tools .selected-value{color:#fff!important}::ng-deep .tools .button.inactive,::ng-deep .tools .nav-caret.inactive,::ng-deep .tools .selected-value.inactive{color:#959da5!important}::ng-deep .tools .button{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .dropdown-menu .option{color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}::ng-deep .tools .select{width:65px;height:37px;margin-left:7px;line-height:37px;text-align:center}@media (max-width:1037px){.current-page-number,.mobile-hide{display:none}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .tools .gd-nav-search-btn .icon-button{height:37px;width:37px}::ng-deep .tools .gd-nav-search-btn .button{font-size:14px}}"]
                    }] }
        ];
        /** @nocollapse */
        SearchAppComponent.ctorParameters = function () { return [
            { type: SearchService },
            { type: commonComponents.ModalService },
            { type: SearchConfigService },
            { type: commonComponents.UploadFilesService },
            { type: commonComponents.PasswordService },
            { type: commonComponents.WindowService },
            { type: commonComponents.LoadingMaskService }
        ]; };
        return SearchAppComponent;
    }());
    if (false) {
        /** @type {?} */
        SearchAppComponent.prototype.title;
        /** @type {?} */
        SearchAppComponent.prototype.files;
        /** @type {?} */
        SearchAppComponent.prototype.searchResultItems;
        /** @type {?} */
        SearchAppComponent.prototype.indexedFiles;
        /** @type {?} */
        SearchAppComponent.prototype.searchConfig;
        /** @type {?} */
        SearchAppComponent.prototype.credentials;
        /** @type {?} */
        SearchAppComponent.prototype.browseFilesModal;
        /** @type {?} */
        SearchAppComponent.prototype.isDesktop;
        /** @type {?} */
        SearchAppComponent.prototype.isLoading;
        /** @type {?} */
        SearchAppComponent.prototype.skipPasswordProtected;
        /** @type {?} */
        SearchAppComponent.prototype.firstSearchPerformed;
        /** @type {?} */
        SearchAppComponent.prototype.searchResult;
        /** @type {?} */
        SearchAppComponent.prototype.fileWasDropped;
        /**
         * @type {?}
         * @private
         */
        SearchAppComponent.prototype._searchService;
        /**
         * @type {?}
         * @private
         */
        SearchAppComponent.prototype._modalService;
        /**
         * @type {?}
         * @private
         */
        SearchAppComponent.prototype._windowService;
        /**
         * @type {?}
         * @private
         */
        SearchAppComponent.prototype._loadingMaskService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchPanelComponent = /** @class */ (function () {
        function SearchPanelComponent() {
            this.text = "";
            this.searchText = new core.EventEmitter();
            this.clearQuery = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        SearchPanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        SearchPanelComponent.prototype.search = /**
         * @return {?}
         */
        function () {
            this.searchText.emit(this.text);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        SearchPanelComponent.prototype.setText = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.text = value;
            if (value === "") {
                this.clearQueryString();
            }
        };
        /**
         * @return {?}
         */
        SearchPanelComponent.prototype.clearQueryString = /**
         * @return {?}
         */
        function () {
            this.text = "";
            this.textElement.nativeElement.value = '';
            this.clearQuery.emit("");
        };
        SearchPanelComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-search-panel',
                        template: "<div class=\"gd-search-panel\">\n  <input type=\"text\" class=\"gd-search-input\" (keydown.enter)=\"search()\" #text (input)=\"setText(text.value)\" placeholder=\"Search query\"/>\n  <gd-button class=\"gd-clear-btn\" [icon]=\"'times'\" [tooltip]=\"'Clear search query'\" (click)=\"clearQueryString()\" *ngIf=\"text.value\"></gd-button>\n  <gd-button class=\"gd-search-btn\" [icon]=\"'search'\" (click)=\"search()\" [iconOnly]=\"false\"></gd-button>\n</div>\n",
                        styles: [".gd-search-panel{position:absolute;display:-webkit-box;display:flex;left:0;top:60px;width:100%;background-color:#e7e7e7;-webkit-box-align:center;align-items:center;height:60px}.gd-search-panel .gd-search-input{float:left;height:37px;width:100%;font-size:14px;border:1px solid #6e6e6e;box-sizing:border-box;padding:6px 0 5px 9px;margin-left:20px}.gd-search-panel .gd-search-btn{background-color:#3e4e5a;margin-right:20px;width:37px;height:37px;padding:0!important}.gd-search-panel .gd-search-btn ::ng-deep .button{padding:0!important}.gd-search-panel .gd-clear-btn{position:absolute;right:50px}"]
                    }] }
        ];
        /** @nocollapse */
        SearchPanelComponent.ctorParameters = function () { return []; };
        SearchPanelComponent.propDecorators = {
            textElement: [{ type: core.ViewChild, args: ['text', {
                            static: true
                        },] }],
            searchText: [{ type: core.Output }],
            clearQuery: [{ type: core.Output }]
        };
        return SearchPanelComponent;
    }());
    if (false) {
        /** @type {?} */
        SearchPanelComponent.prototype.textElement;
        /**
         * @type {?}
         * @private
         */
        SearchPanelComponent.prototype.text;
        /** @type {?} */
        SearchPanelComponent.prototype.searchText;
        /** @type {?} */
        SearchPanelComponent.prototype.clearQuery;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchResultSummaryComponent = /** @class */ (function () {
        function SearchResultSummaryComponent() {
        }
        /**
         * @return {?}
         */
        SearchResultSummaryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        SearchResultSummaryComponent.prototype.getTotalOccurrencesMessage = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var message = "Nothing found";
            if (this.searchResult) {
                if (this.searchResult.totalOccurences === 0) {
                    return message;
                }
                return "Found <b>" + this.searchResult.totalOccurences + "</b> occurrences <b>" + this.searchResult.totalFiles + "</b> files";
            }
            return message;
        };
        /**
         * @return {?}
         */
        SearchResultSummaryComponent.prototype.getIndexedFilesMessage = /**
         * @return {?}
         */
        function () {
            if (this.searchResult) {
                return "<b>" + this.searchResult.indexedFiles + "</b> files indexed";
            }
        };
        /**
         * @return {?}
         */
        SearchResultSummaryComponent.prototype.getSearchDuration = /**
         * @return {?}
         */
        function () {
            if (this.searchResult) {
                return this.searchResult.searchDuration;
            }
        };
        SearchResultSummaryComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-search-result-summary',
                        template: "<div id=\"gd-search-result-summary\">\n  <div class=\"gd-search-result-summary-status\">\n    <fa-icon [icon]=\"['fas','search']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    <div class=\"gd-total-occurrences\" [innerHTML]=\"getTotalOccurrencesMessage()\"></div>\n    <fa-icon [icon]=\"['fas','clock']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    <div class=\"gd-search-duration\">{{getSearchDuration()}} sec</div>\n    <div class=\"gd-indexed-files\" [innerHTML]=\"getIndexedFilesMessage()\"></div>\n  </div>\n  <div *ngIf=\"searchResult?.totalOccurences > 0\" class=\"gd-search-result-summary-header\">\n    <div>File</div>\n    <div>Occurrences</div>\n    <div>Size</div>\n  </div>\n  <div *ngIf=\"searchResult?.foundFiles\" class=\"gd-search-result-summary-body\">\n    <div *ngFor=\"let item of searchResult.foundFiles\">\n        <gd-search-result-item [item]=\"item\"></gd-search-result-item>\n    </div>\n  </div>\n</div>",
                        styles: ["#gd-search-result-summary{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%;background-color:#e7e7e7;top:120px;position:absolute;width:100%}.gd-search-result-summary-header{display:-webkit-box;display:flex;font-size:13px;text-transform:uppercase;color:#6e6e6e;width:100%;height:60px;background-color:#f4f4f4;font-weight:700;-webkit-box-align:center;align-items:center}.gd-search-result-summary-status{display:-webkit-box;display:flex;font-size:12px;color:#fff;width:100%;height:30px;background-color:#25c2d4;-webkit-box-align:center;align-items:center;padding-left:17px}.gd-total-occurrences{padding-left:8px;padding-right:17px}.gd-search-duration{padding-left:8px}.gd-indexed-files{right:18px;position:absolute}.gd-search-result-summary-header div:nth-child(1){width:253px;text-align:left;display:-webkit-box;display:flex;padding-left:17px}.gd-search-result-summary-header div:nth-child(2){text-align:left;display:-webkit-box;display:flex}.gd-search-result-summary-header div:nth-child(3){width:30px;position:fixed;right:111px;text-align:left}.gd-search-result-summary-body{overflow-y:scroll;height:calc(100% - 210px)}.gd-search-result-last-placeholder{margin:0 52px}@media (max-width:1037px){.gd-indexed-files,.gd-search-result-header,.gd-search-result-summary-header div:nth-child(3){display:none}.gd-search-result-summary-header div:nth-child(2){position:absolute;right:18px}}"]
                    }] }
        ];
        /** @nocollapse */
        SearchResultSummaryComponent.ctorParameters = function () { return []; };
        SearchResultSummaryComponent.propDecorators = {
            searchResult: [{ type: core.Input }]
        };
        return SearchResultSummaryComponent;
    }());
    if (false) {
        /** @type {?} */
        SearchResultSummaryComponent.prototype.searchResult;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchResultItemComponent = /** @class */ (function () {
        function SearchResultItemComponent() {
        }
        /**
         * @return {?}
         */
        SearchResultItemComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} size
         * @return {?}
         */
        SearchResultItemComponent.prototype.getSizeString = /**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            /** @type {?} */
            var mb = size / 1024 / 1024;
            if (mb > 1) {
                return (Math.round(mb * 100) / 100) + ' MB';
            }
            else {
                /** @type {?} */
                var kb = size / 1024;
                if (kb > 1) {
                    return (Math.round(kb * 100) / 100) + ' KB';
                }
            }
            return size + ' Bytes';
        };
        /**
         * @param {?} file
         * @return {?}
         */
        SearchResultItemComponent.prototype.getFormatIcon = /**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            return commonComponents.FileUtil.find(file.name, file.directory).icon;
        };
        /**
         * @param {?} file
         * @return {?}
         */
        SearchResultItemComponent.prototype.getFormatName = /**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            return commonComponents.FileUtil.find(file.name, file.directory).format;
        };
        /**
         * @param {?} occurrences
         * @return {?}
         */
        SearchResultItemComponent.prototype.getOccurrencesMessage = /**
         * @param {?} occurrences
         * @return {?}
         */
        function (occurrences) {
            return "Found <b>" + occurrences + "</b> occurrences";
        };
        /**
         * @param {?} item
         * @return {?}
         */
        SearchResultItemComponent.prototype.togglePhrases = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.showPhrases = !item.showPhrases;
        };
        SearchResultItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-search-result-item',
                        template: "<div *ngIf=\"item\" class=\"gd-search-result-item\">\n  <div class=\"gd-found-file-name\">\n    <fa-icon [icon]=\"['fas', getFormatIcon(item)]\" [class]=\"'ng-fa-icon'\" [ngClass]=\"['fa-' + getFormatIcon(item)]\"></fa-icon>\n    <div class=\"gd-file-name gd-search-result-name\">{{item.name}}\n      <div class=\"gd-file-format\">{{getFormatName(item)}}</div>\n    </div>\n  </div>\n  <div class=\"gd-file-occurrences gd-search-result-size\">\n    <span class=\"gd-search-result-occurrences\" [innerHTML]=\"getOccurrencesMessage(item.occurrences)\" (click)=\"togglePhrases(item)\"></span>\n  </div>\n  <div class=\"gd-file-size gd-search-result-size\">{{getSizeString(item.size)}}</div>\n</div>\n<div class=\"gd-found-phrases-wrapper\" *ngIf=\"item?.showPhrases\">\n  <div class=\"gd-vertical-bar\"></div>\n  <div class=\"gd-found-phrases-content-wrapper\">\n    <div *ngIf=\"item\" class=\"gd-found-phrases-title\">\n      <div class=\"gd-found-file-name\">Found phrases</div>\n      <gd-button class=\"gd-close-btn\" [icon]=\"'times'\" [tooltip]=\"'Close'\" (click)=\"togglePhrases(item)\"></gd-button>\n    </div>\n    <div *ngFor=\"let phrase of item.foundPhrases\" class=\"gd-search-result-phrase\">\n      <div [innerHTML]=\"phrase\"></div>\n    </div>\n  </div>\n</div>",
                        styles: [".gd-search-result-item{display:-webkit-box;display:flex;width:100%;height:98px;border-bottom:1px solid #e7e7e7;background-color:#fff;-webkit-box-align:center;align-items:center;position:relative}.gd-search-result-phrase{display:-webkit-box;display:flex;width:100%;height:40px;border-bottom:1px solid #e7e7e7;background-color:#fff;-webkit-box-align:center;align-items:center;font-size:13px;padding-left:17px;overflow:hidden}.gd-search-result-phrase ::ng-deep span{font-weight:700}.gd-found-phrases-title{display:-webkit-box;display:flex;font-size:13px;text-transform:uppercase;color:#3e4e5a;width:calc(100% + 17px);height:60px;background-color:#f4f4f4;font-weight:700;-webkit-box-align:center;align-items:center;position:relative}.gd-found-phrases-title .gd-close-btn{position:absolute;right:30px}.gd-vertical-bar{width:17px;background-color:#3e4e5a}.gd-found-phrases-content-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:calc(100% - 34px)}.gd-found-phrases-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.gd-found-file-name{display:-webkit-box;display:flex;width:253px;padding-left:17px}.gd-search-result-name{text-align:left;cursor:default;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}.gd-search-result-size{text-align:left;font-size:12px}.gd-file-size{width:60px;color:#777;position:absolute;right:65px}.gd-file-format{font-size:10px;color:#acacac;padding-top:4px}.gd-file-format.mobile{display:none}.gd-file-occurrences{color:#777}.gd-search-result-item .ng-fa-icon.fa-file-pdf{color:#e21717}.gd-search-result-item .ng-fa-icon.fa-file-word{color:#6979b9}.gd-search-result-item .ng-fa-icon.fa-file-powerpoint{color:#e29417}.gd-search-result-item .ng-fa-icon.fa-file-excel{color:#3fa300}.gd-search-result-item .ng-fa-icon.fa-file-image{color:#e217da}.gd-search-result-item .ng-fa-icon.fa-file-text .fa-folder{color:#5d6a75}.gd-found-file-name .ng-fa-icon{font-size:33px}.gd-found-file-name fa-icon{font-size:32px;margin:0 11px 0 0}.gd-search-result-occurrences{text-decoration:underline;cursor:pointer}@media (max-width:1037px){.gd-file-size{display:none}.gd-file-format.mobile{display:block}.gd-file-format.mobile>fa-icon{color:#bebebe}.gd-file-format.mobile fa-icon{font-size:10px;margin-right:2.1px}.gd-file-format.mobile fa-icon:nth-child(1){margin-right:6px}.gd-file-format{font-size:11px}.gd-found-file-name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}.gd-file-occurrences{width:94px;position:absolute;right:15px}}"]
                    }] }
        ];
        /** @nocollapse */
        SearchResultItemComponent.ctorParameters = function () { return []; };
        SearchResultItemComponent.propDecorators = {
            item: [{ type: core.Input }]
        };
        return SearchResultItemComponent;
    }());
    if (false) {
        /** @type {?} */
        SearchResultItemComponent.prototype.item;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IndexedFilesListComponent = /** @class */ (function () {
        function IndexedFilesListComponent() {
            this.files = [];
        }
        /**
         * @return {?}
         */
        IndexedFilesListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        IndexedFilesListComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-indexed-files-list',
                        template: "<div id=\"gd-indexed-files-list\">\n  <div class=\"gd-indexed-files-list-header\">\n    <div class=\"gd-placeholder\"></div>\n    <div>File</div>\n    <div class=\"gd-indexed-files-size\">Size</div>\n    <div>State</div>\n  </div>\n  <div class=\"gd-indexed-files-list-body\">\n    <div class=\"gd-indexed-file-wrapper\" *ngFor=\"let file of files\">\n        <gd-indexed-file [file]=\"file\"></gd-indexed-file>\n    </div>\n  </div>\n</div>",
                        styles: ["#gd-indexed-files-list{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%;background-color:#e7e7e7;top:120px;position:absolute;width:100%}.gd-indexed-files-list-header{display:-webkit-box;display:flex;font-size:13px;text-transform:uppercase;color:#6e6e6e;width:100%;height:60px;background-color:#f4f4f4;font-weight:700;-webkit-box-align:center;align-items:center}.gd-placeholder{margin:0 42px}.gd-indexed-files-list-header div:nth-child(2){text-align:left;display:-webkit-box;display:flex}.gd-indexed-files-list-header div:nth-child(3){position:absolute;right:325px}.gd-indexed-files-list-header div:nth-child(4){position:absolute;right:153px}.gd-indexed-files-list-body{overflow-y:scroll;height:calc(100% - 180px)}.gd-last-placeholder{margin:0 52px}@media (max-width:1037px){.gd-indexed-files-size{display:none}.gd-placeholder{margin:0 34px}.gd-indexed-files-list-header div:nth-child(4){right:30px}.gd-indexed-file-wrapper{padding:5px 5px 0}}"]
                    }] }
        ];
        /** @nocollapse */
        IndexedFilesListComponent.ctorParameters = function () { return []; };
        IndexedFilesListComponent.propDecorators = {
            files: [{ type: core.Input }]
        };
        return IndexedFilesListComponent;
    }());
    if (false) {
        /** @type {?} */
        IndexedFilesListComponent.prototype.files;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IndexedFileComponent = /** @class */ (function () {
        function IndexedFileComponent(_searchService) {
            this._searchService = _searchService;
        }
        /**
         * @return {?}
         */
        IndexedFileComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} $event
         * @param {?} file
         * @return {?}
         */
        IndexedFileComponent.prototype.removeFile = /**
         * @param {?} $event
         * @param {?} file
         * @return {?}
         */
        function ($event, file) {
            $event.preventDefault();
            $event.stopPropagation();
            this._searchService.selectedItemToRemove(file);
        };
        /**
         * @param {?} size
         * @return {?}
         */
        IndexedFileComponent.prototype.getSizeString = /**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            /** @type {?} */
            var mb = size / 1024 / 1024;
            if (mb > 1) {
                return (Math.round(mb * 100) / 100) + ' MB';
            }
            else {
                /** @type {?} */
                var kb = size / 1024;
                if (kb > 1) {
                    return (Math.round(kb * 100) / 100) + ' KB';
                }
            }
            return size + ' Bytes';
        };
        /**
         * @return {?}
         */
        IndexedFileComponent.prototype.getFormatIcon = /**
         * @return {?}
         */
        function () {
            return commonComponents.FileUtil.find(this.file.name, this.file.directory).icon;
        };
        /**
         * @return {?}
         */
        IndexedFileComponent.prototype.getFormatName = /**
         * @return {?}
         */
        function () {
            return commonComponents.FileUtil.find(this.file.name, this.file.directory).format;
        };
        /**
         * @return {?}
         */
        IndexedFileComponent.prototype.getStatusIcon = /**
         * @return {?}
         */
        function () {
            switch (this.file.documentStatus) {
                case FileIndexingStatus.Indexing:
                case FileIndexingStatus.PasswordRequired:
                    return "circle-notch";
                case FileIndexingStatus.SuccessfullyProcessed:
                    return "check";
                case FileIndexingStatus.ProcessedWithError:
                    return "times";
                case FileIndexingStatus.Skipped:
                    return "forward";
                default:
                    return "times";
            }
        };
        /**
         * @return {?}
         */
        IndexedFileComponent.prototype.getStatusTitle = /**
         * @return {?}
         */
        function () {
            switch (this.file.documentStatus) {
                case FileIndexingStatus.Indexing:
                case FileIndexingStatus.PasswordRequired:
                    return "Indexing";
                case FileIndexingStatus.SuccessfullyProcessed:
                    return "Indexed";
                case FileIndexingStatus.ProcessedWithError:
                    return "Error";
                case FileIndexingStatus.Skipped:
                    return "Skipped";
                default:
                    return "times";
            }
        };
        IndexedFileComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-indexed-file',
                        template: "<div *ngIf=\"file\" class=\"gd-indexed-file\">\n  <div class=\"gd-indexed-file-remove\" (click)=\"removeFile($event, file)\">\n    <span>&times;</span>\n  </div>\n  <div class=\"gd-indexed-file-name disabled\">\n    <fa-icon [icon]=\"['fas', getFormatIcon()]\" [class]=\"'ng-fa-icon'\" [ngClass]=\"['fa-' + getFormatIcon()]\"></fa-icon>\n    <div class=\"gd-file-name\">{{file.name}}\n      <div class=\"gd-file-format\">{{getFormatName()}}</div>\n    </div>\n  </div>\n  <div class=\"gd-file-size gd-indexed-file-size\">{{getSizeString(file.size)}}</div>\n  <div class=\"gd-indexed-file-status-wrapper\">\n    <div class=\"gd-indexed-file-status\">\n      <fa-icon class=\"gd-indexed-file-successful\" [icon]=\"['fas',getStatusIcon()]\" [spin]=\"getStatusIcon() === 'circle-notch'\"></fa-icon>\n      <span class=\"mobile-hide\">{{getStatusTitle()}}</span>\n    </div>\n  </div>\n</div>",
                        styles: [".gd-indexed-file{display:-webkit-box;display:flex;width:100%;height:98px;border-bottom:1px solid #e7e7e7;background-color:#fff;-webkit-box-align:center;align-items:center;position:relative}.gd-indexed-file-remove{font-size:18px;color:#6e6e6e;margin:0 24px;cursor:pointer}.gd-indexed-file-remove span{width:37px;height:37px;display:block;line-height:37px;text-align:center;font-weight:700}.gd-indexed-file-remove.disabled{color:#959da5;opacity:.4}.gd-indexed-file-name{display:-webkit-box;display:flex}.gd-indexed-file-name.disabled fa-icon{color:#6e6e6e}.gd-file-name{text-align:left;cursor:default;overflow:hidden;text-overflow:ellipsis}.gd-indexed-file-size{width:70px;color:#777;text-align:left;font-size:12px;right:265px;position:absolute}.gd-indexed-file-status-wrapper{color:#777;font-size:12px;right:104px;position:absolute;width:70px}.gd-indexed-file-status{display:-webkit-box;display:flex}.gd-indexed-file-status fa-icon{padding-right:7px}.gd-file-format{font-size:10px;color:#acacac;padding-top:4px}.gd-file-format.mobile{display:none}.disabled{cursor:not-allowed!important}.gd-indexed-file .ng-fa-icon.fa-file-pdf{color:#e21717}.gd-indexed-file .ng-fa-icon.fa-file-word{color:#6979b9}.gd-indexed-file .ng-fa-icon.fa-file-powerpoint{color:#e29417}.gd-indexed-file .ng-fa-icon.fa-file-excel{color:#3fa300}.gd-indexed-file .ng-fa-icon.fa-file-image{color:#e217da}.gd-indexed-file .ng-fa-icon.fa-file-text .fa-folder{color:#5d6a75}.gd-indexed-file-name .ng-fa-icon{font-size:33px}.gd-indexed-file-name fa-icon{font-size:32px;margin:0 11px 0 0}@media (max-width:1037px){.gd-indexed-file-size{display:none}.gd-file-format.mobile{display:block}.gd-file-format.mobile>fa-icon{color:#bebebe}.gd-file-format.mobile fa-icon{font-size:10px;margin-right:2.1px}.gd-file-format.mobile fa-icon:nth-child(1){margin-right:6px}.gd-file-format{font-size:11px}.gd-indexed-file-name{white-space:nowrap;overflow:hidden;width:65%}.gd-indexed-file-status-wrapper{right:45px;width:unset}.gd-indexed-file-status-wrapper .gd-indexed-file-status fa-icon{padding-right:unset;font-size:16px}.gd-indexed-file-remove{margin:0 16px 0 15px;font-size:24px}.mobile-hide{display:none}.gd-indexed-file{height:85px}}"]
                    }] }
        ];
        /** @nocollapse */
        IndexedFileComponent.ctorParameters = function () { return [
            { type: SearchService }
        ]; };
        IndexedFileComponent.propDecorators = {
            file: [{ type: core.Input }]
        };
        return IndexedFileComponent;
    }());
    if (false) {
        /** @type {?} */
        IndexedFileComponent.prototype.file;
        /**
         * @type {?}
         * @private
         */
        IndexedFileComponent.prototype._searchService;
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
    var SearchBrowseFilesModalComponent = /** @class */ (function (_super) {
        __extends(SearchBrowseFilesModalComponent, _super);
        function SearchBrowseFilesModalComponent(_uploadService, _searchService, _modalService) {
            var _this = _super.call(this, _uploadService) || this;
            _this._searchService = _searchService;
            _this._modalService = _modalService;
            _this.selectAll = new core.EventEmitter();
            _this.filesAddedToIndex = new core.EventEmitter();
            _this.fileDropped = new core.EventEmitter();
            return _this;
        }
        /**
         * @param {?} checked
         * @return {?}
         */
        SearchBrowseFilesModalComponent.prototype.selectAllItems = /**
         * @param {?} checked
         * @return {?}
         */
        function (checked) {
            this.selectAll.emit(checked);
        };
        /**
         * @param {?} checked
         * @param {?} file
         * @return {?}
         */
        SearchBrowseFilesModalComponent.prototype.selectSingleItem = /**
         * @param {?} checked
         * @param {?} file
         * @return {?}
         */
        function (checked, file) {
            /** @type {?} */
            var selectedFiles = this.files.filter((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return f.guid === file.guid; }));
            if (selectedFiles.length === 1) {
                selectedFiles[0].selected = checked;
            }
        };
        /**
         * @return {?}
         */
        SearchBrowseFilesModalComponent.prototype.getLabelString = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var label = 'Add to index';
            if (this.files && this.files.length > 0) {
                /** @type {?} */
                var selectedCount = this.files.filter((/**
                 * @param {?} file
                 * @return {?}
                 */
                function (file) { return file.selected; })).length;
                return selectedCount > 0 ? 'Add ' + selectedCount + ' to index' : label;
            }
            else {
                return label;
            }
        };
        /**
         * @return {?}
         */
        SearchBrowseFilesModalComponent.prototype.anyItemSelected = /**
         * @return {?}
         */
        function () {
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
        SearchBrowseFilesModalComponent.prototype.allItemsSelected = /**
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
        /**
         * @return {?}
         */
        SearchBrowseFilesModalComponent.prototype.addSelectedToIndex = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var itemsToIndex = new Array();
            this.files.forEach((/**
             * @param {?} f
             * @return {?}
             */
            function (f) {
                if (f.selected && !f.isDirectory && !f.directory) {
                    itemsToIndex.push(f);
                }
            }));
            this._searchService.addFilesToIndex(itemsToIndex).subscribe((/**
             * @return {?}
             */
            function () {
                _this.filesAddedToIndex.emit(true);
            }));
            this._modalService.close(commonComponents.CommonModals.BrowseFiles);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        SearchBrowseFilesModalComponent.prototype.dropped = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if ($event) {
                this.fileDropped.emit($event);
            }
        };
        SearchBrowseFilesModalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-search-browse-files-modal',
                        template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (dropped)=\"dropped($event)\" (opening)=\"showUploadFile=$event\">\n    <div class=\"dnd-wrapper\">\n      <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\n      <span class=\"text\">Drop file here to upload</span>\n    </div>\n  </div>\n  <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n    <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\n            (change)=\"handleFileInput($event.target.files)\">\n    <div class=\"select-all\">\n      <input type=\"checkbox\" [disabled]=\"!(this.files && this.files.length > 0)\" class=\"gd-checkbox\" [checked]=\"allItemsSelected()\"\n               (change)=\"selectAllItems($event.target.checked);\">\n    </div>\n    <div class=\"context\">\n      <div class=\"context-actions\">\n          <gd-button [icon]=\"'plus'\" [disabled]=\"!anyItemSelected()\" [intent]=\"'primary'\" [iconOnly]=\"false\" (click)=\"addSelectedToIndex()\">\n            {{getLabelString()}}\n          </gd-button>\n        <gd-drop-down>\n          <gd-drop-down-toggle>\n            <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\n              Upload file\n            </gd-button>\n          </gd-drop-down-toggle>\n          <gd-drop-down-items>\n            <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\n              <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\n              <div class=\"text\">{{item.name}}</div>\n            </gd-drop-down-item>\n          </gd-drop-down-items>\n        </gd-drop-down>\n      </div>\n      <div class=\"context-panel\" *ngIf=\"showUploadUrl\">\n        <div class=\"upload-url\">\n          <input class=\"url-input\" placeholder=\"https://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n          <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"list-files-header\" [ngClass]=\"{'upload-url': showUploadUrl}\">\n    <div class=\"header-name\">FILE</div>\n    <div class=\"header-size\">SIZE</div>\n  </div>\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-body\">\n        <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n            <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n          </div>\n          <div class=\"go-up-dots\">..</div>\n        </div>\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n          <div class=\"gd-file-checkbox\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\n            <input type=\"checkbox\" *ngIf=\"file && !file.isDirectory && !file.directory\" [checked]=\"file.selected\"\n                   (change)=\"selectSingleItem($event.target.checked, file);\" class=\"gd-checkbox gd-checkbox-single\">\n          </div>\n          <div class=\"file-description\">\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n            <div class=\"file-name-format\">\n              <div class=\"file-name\" [ngClass]=\"{'gd-folder-name' : file.isDirectory || file.directory}\">{{file?.name}}</div>\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\n            </div>\n          </div>\n          <div class=\"file-size\">{{getSize(file?.size)}}</div>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n      <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
                        styles: [".gd-modal-table{width:100%;text-align:left}#gd-browse-section{width:1036px;height:561px;overflow-y:auto}.list-files-header{height:60px;color:#6e6e6e;font-size:13px;font-weight:700;background-color:#f4f4f4;margin-top:24px}.list-files-header.upload-url{margin-top:20px}.header-name{padding-left:68px;width:90%;line-height:60px}.header-size{line-height:60px}.file-size,.header-size{width:7%;color:#777;text-align:left}.file-size{font-size:12px;width:7%;line-height:79px}.file-description{display:-webkit-box;display:flex;width:90%;padding:18px 0;font-size:14px;-webkit-box-flex:1;flex:1;cursor:pointer;overflow:hidden}.file-description .ng-fa-icon{font-size:32px}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.upload-panel{display:-webkit-box;display:flex;position:relative;width:100%;margin-top:24px;margin-right:24px}.upload-panel .select-all{height:37px;margin:0 16px 0 15px;width:37px;line-height:44px;text-align:center}.upload-panel .context{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;margin-right:24px}.upload-panel .context .context-actions{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-actions>gd-button{margin-right:10px}.upload-panel .context .context-actions :last-child{margin-right:0}.upload-panel .context .context-actions ::ng-deep .button{height:37px;width:96px;padding:0;-webkit-box-pack:center;justify-content:center;font-size:14px}.upload-panel .context .context-actions ::ng-deep .button ::ng-deep .text{font-size:10px}.upload-panel .context .context-actions ::ng-deep .button.primary{width:117px;background-color:#4b566c}.upload-panel .context .context-actions ::ng-deep .button.primary.inactive{width:106px;background-color:#959da5}.upload-panel .context .context-actions ::ng-deep .button.primary.inactive /deep/ .text{color:#3e4e5a}.upload-panel .context .context-actions ::ng-deep .button.primary.inactive /deep/ fa-icon{color:#3e4e5a}.upload-panel .context .context-panel{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%;margin-top:20px}.upload-panel .context .context-panel .upload-url{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-panel .upload-url .url-input{width:100%;height:27px;border:1px solid #25c2d4;font-size:14px;padding-left:6px}.upload-panel .context .context-panel .upload-url .url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.upload-panel .context .context-panel .upload-url .url-check .ng-fa-icon{display:block;padding:8px}.upload-panel gd-drop-down{margin-right:10px}.upload-panel gd-drop-down /deep/ .drop-down-item .text{margin-left:7px;text-transform:uppercase;color:#6e6e6e}.upload-panel gd-drop-down /deep/ .drop-down-item:hover{background-color:#4b566c}.upload-panel gd-drop-down /deep/ .drop-down-item:hover *{color:#fff}.list-files-header,.list-files-lines{display:-webkit-box;display:flex;width:100%;-webkit-box-pack:justify;justify-content:space-between}.file-description .ng-fa-icon.fa-file-pdf{color:#e04e4e}.file-description .ng-fa-icon.fa-file-word{color:#539cf0}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29e1e}.file-description .ng-fa-icon.fa-file-excel{color:#7cbc46}.file-description .ng-fa-icon.fa-file-image{color:#c375ed}.file-description .ng-fa-icon.fa-file,.file-description .ng-fa-icon.fa-file-alt,.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#4b566c}.go-up{cursor:pointer;display:-webkit-box;display:flex;font-size:26px;color:#4b566c;height:79px}.go-up-dots{margin-left:20px;margin-top:22px;font-size:16px}.go-up-icon{display:block;padding:18px 0 18px 68px}.file-name{font-size:16px;color:#6e6e6e;overflow:hidden;text-overflow:ellipsis}.file-name-format{padding-left:11px;overflow:hidden}.file-format{font-size:10px;padding-top:3px;color:#acacac}.go-up,.list-files-lines{border-bottom:1px solid #e7e7e7}.list-files-lines:hover{background-color:#e5e5e5}.gd-dnd-wrap{background-color:#fff;cursor:default;position:absolute;width:100%;height:calc(100% - 60px);background:rgba(255,255,255,.7);z-index:1;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.gd-drag-n-drop-icon{margin-top:-50px}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-file-checkbox{height:37px;margin:21px 16px 21px 15px;width:37px;line-height:44px;text-align:center}.gd-file-checkbox.empty{width:37px}.file-format-select{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:36px;margin-right:24px}.file-format-select ::ng-deep .button{padding:0;width:36px;margin:0;font-size:14px}.file-format-select ::ng-deep .button .text{padding:0}.file-format-select ::ng-deep .show .button{color:#959da5}.file-format-select gd-drop-down /deep/ .drop-down-item{width:96px}.file-format-select gd-drop-down /deep/ .drop-down-item .text{padding-left:7px;text-transform:uppercase;color:#6e6e6e}.file-format-select gd-drop-down /deep/ .drop-down-item:hover{background-color:#4b566c}.file-format-select gd-drop-down /deep/ .drop-down-item:hover *{color:#fff}.gd-checkbox{width:19px;height:19px;margin:0}.gd-checkbox:before{position:relative;display:-webkit-box;display:flex;width:17px;height:17px;border:1px solid #707070;content:\"\";background:#fff;cursor:pointer}.gd-checkbox:after{position:relative;display:-webkit-box;display:flex;left:1px;top:-18px;width:16px;height:16px;content:\"\";cursor:pointer}.gd-checkbox:checked:after{font-family:\"Font Awesome 5 Free\";content:\"\\f00c\";font-weight:900;font-size:16px;color:#6e6e6e}.gd-add-selected.active{cursor:pointer;opacity:1}.gd-add-selected{width:140px;height:36px;background-color:#3e4e5a;color:#fff;margin:0 8px 0 0;border:0;cursor:not-allowed;opacity:.43}.gd-folder-name{margin-top:8px}.dnd-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;top:259px;position:absolute}.dnd-wrapper .text{color:#6e6e6e;font-size:14px}.dnd-wrapper .icon{display:-webkit-box;display:flex;width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}@media (max-width:1037px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}#gd-browse-section{width:100%;height:calc(100% - 146px)}}"]
                    }] }
        ];
        /** @nocollapse */
        SearchBrowseFilesModalComponent.ctorParameters = function () { return [
            { type: commonComponents.UploadFilesService },
            { type: SearchService },
            { type: commonComponents.ModalService }
        ]; };
        SearchBrowseFilesModalComponent.propDecorators = {
            files: [{ type: core.Input }],
            selectAll: [{ type: core.Output }],
            filesAddedToIndex: [{ type: core.Output }],
            fileDropped: [{ type: core.Output }]
        };
        return SearchBrowseFilesModalComponent;
    }(commonComponents.BrowseFilesModalComponent));
    if (false) {
        /** @type {?} */
        SearchBrowseFilesModalComponent.prototype.files;
        /** @type {?} */
        SearchBrowseFilesModalComponent.prototype.selectAll;
        /** @type {?} */
        SearchBrowseFilesModalComponent.prototype.filesAddedToIndex;
        /** @type {?} */
        SearchBrowseFilesModalComponent.prototype.fileDropped;
        /**
         * @type {?}
         * @private
         */
        SearchBrowseFilesModalComponent.prototype._searchService;
        /**
         * @type {?}
         * @private
         */
        SearchBrowseFilesModalComponent.prototype._modalService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} searchConfigService
     * @return {?}
     */
    function initializeApp(searchConfigService) {
        /** @type {?} */
        var result = (/**
         * @return {?}
         */
        function () { return searchConfigService.load(); });
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
    var SearchModule = /** @class */ (function () {
        function SearchModule() {
        }
        /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        SearchModule.forRoot = /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        function (apiEndpoint) {
            commonComponents.Api.DEFAULT_API_ENDPOINT = apiEndpoint;
            return {
                ngModule: SearchModule
            };
        };
        SearchModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            SearchAppComponent,
                            SearchPanelComponent,
                            SearchResultSummaryComponent,
                            SearchResultItemComponent,
                            IndexedFilesListComponent,
                            IndexedFileComponent,
                            SearchBrowseFilesModalComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
                            commonComponents.CommonComponentsModule,
                            http.HttpClientModule,
                            angularFontawesome.FontAwesomeModule,
                            core$1.TranslateModule.forRoot()
                        ],
                        exports: [
                            SearchAppComponent,
                            commonComponents.CommonComponentsModule,
                            SearchPanelComponent,
                            SearchResultSummaryComponent,
                            SearchResultItemComponent,
                            IndexedFilesListComponent,
                            IndexedFileComponent,
                            SearchBrowseFilesModalComponent
                        ],
                        providers: [
                            SearchService,
                            commonComponents.ConfigService,
                            SearchConfigService,
                            {
                                provide: http.HTTP_INTERCEPTORS,
                                useClass: commonComponents.ErrorInterceptorService,
                                multi: true
                            },
                            {
                                provide: core.APP_INITIALIZER,
                                useFactory: initializeApp,
                                deps: [SearchConfigService], multi: true
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
        return SearchModule;
    }());

    exports.SearchAppComponent = SearchAppComponent;
    exports.SearchConfigService = SearchConfigService;
    exports.SearchModule = SearchModule;
    exports.SearchService = SearchService;
    exports.initializeApp = initializeApp;
    exports.setupLoadingInterceptor = setupLoadingInterceptor;
    exports.ɵa = SearchPanelComponent;
    exports.ɵb = SearchResultSummaryComponent;
    exports.ɵc = SearchResultItemComponent;
    exports.ɵd = IndexedFilesListComponent;
    exports.ɵe = IndexedFileComponent;
    exports.ɵf = SearchBrowseFilesModalComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=groupdocs.examples.angular-search.umd.js.map
