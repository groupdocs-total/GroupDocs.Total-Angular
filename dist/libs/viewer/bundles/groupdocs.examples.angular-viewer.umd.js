(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('@angular/common/http'), require('@groupdocs.examples.angular/common-components'), require('rxjs'), require('@ngx-translate/core'), require('@fortawesome/angular-fontawesome'), require('hammerjs'), require('jquery')) :
    typeof define === 'function' && define.amd ? define('@groupdocs.examples.angular/viewer', ['exports', '@angular/platform-browser', '@angular/core', '@angular/common/http', '@groupdocs.examples.angular/common-components', 'rxjs', '@ngx-translate/core', '@fortawesome/angular-fontawesome', 'hammerjs', 'jquery'], factory) :
    (global = global || self, factory((global.groupdocs = global.groupdocs || {}, global.groupdocs.examples = global.groupdocs.examples || {}, global.groupdocs.examples.angular = global.groupdocs.examples.angular || {}, global.groupdocs.examples.angular.viewer = {}), global.ng.platformBrowser, global.ng.core, global.ng.common.http, global.commonComponents, global.rxjs, global.core$1, global.angularFontawesome, global.Hammer, global.jquery));
}(this, (function (exports, platformBrowser, core, http, commonComponents, rxjs, core$1, angularFontawesome, Hammer, jquery) { 'use strict';

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
    var ViewerService = /** @class */ (function () {
        function ViewerService(_http, _config) {
            this._http = _http;
            this._config = _config;
        }
        /**
         * @param {?} path
         * @return {?}
         */
        ViewerService.prototype.loadFiles = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.LOAD_FILE_TREE, { 'path': path }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        ViewerService.prototype.loadFile = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.LOAD_DOCUMENT_DESCRIPTION, credentials, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} file
         * @param {?} url
         * @param {?} rewrite
         * @return {?}
         */
        ViewerService.prototype.upload = /**
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
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.UPLOAD_DOCUMENTS, formData);
        };
        /**
         * @param {?} credentials
         * @param {?} page
         * @return {?}
         */
        ViewerService.prototype.loadPage = /**
         * @param {?} credentials
         * @param {?} page
         * @return {?}
         */
        function (credentials, page) {
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.LOAD_DOCUMENT_PAGE, {
                'guid': credentials.guid,
                'password': credentials.password,
                'page': page
            }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @param {?} angle
         * @param {?} page
         * @return {?}
         */
        ViewerService.prototype.rotate = /**
         * @param {?} credentials
         * @param {?} angle
         * @param {?} page
         * @return {?}
         */
        function (credentials, angle, page) {
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.ROTATE_DOCUMENT_PAGE, {
                'guid': credentials.guid,
                'password': credentials.password,
                'pages': [page],
                'angle': angle
            }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        ViewerService.prototype.getDownloadUrl = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._config.getViewerApiEndpoint() + commonComponents.Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        ViewerService.prototype.loadPrint = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.LOAD_PRINT, {
                'guid': credentials.guid,
                'password': credentials.password,
            }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        ViewerService.prototype.loadPrintPdf = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.LOAD_PRINT_PDF, {
                'guid': credentials.guid,
                'password': credentials.password,
            }, commonComponents.Api.httpOptionsJsonResponseTypeBlob);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        ViewerService.prototype.loadThumbnails = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.LOAD_THUMBNAILS, {
                'guid': credentials.guid,
                'password': credentials.password,
            }, commonComponents.Api.httpOptionsJson);
        };
        ViewerService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ViewerService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ ViewerService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ViewerService_Factory() { return new ViewerService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: ViewerService, providedIn: "root" });
        return ViewerService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ViewerService.prototype._http;
        /**
         * @type {?}
         * @private
         */
        ViewerService.prototype._config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ViewerConfig = /** @class */ (function () {
        function ViewerConfig() {
        }
        return ViewerConfig;
    }());
    if (false) {
        /** @type {?} */
        ViewerConfig.prototype.rewrite;
        /** @type {?} */
        ViewerConfig.prototype.pageSelector;
        /** @type {?} */
        ViewerConfig.prototype.download;
        /** @type {?} */
        ViewerConfig.prototype.upload;
        /** @type {?} */
        ViewerConfig.prototype.print;
        /** @type {?} */
        ViewerConfig.prototype.browse;
        /** @type {?} */
        ViewerConfig.prototype.enableRightClick;
        /** @type {?} */
        ViewerConfig.prototype.filesDirectory;
        /** @type {?} */
        ViewerConfig.prototype.fontsDirectory;
        /** @type {?} */
        ViewerConfig.prototype.defaultDocument;
        /** @type {?} */
        ViewerConfig.prototype.htmlMode;
        /** @type {?} */
        ViewerConfig.prototype.preloadPageCount;
        /** @type {?} */
        ViewerConfig.prototype.zoom;
        /** @type {?} */
        ViewerConfig.prototype.search;
        /** @type {?} */
        ViewerConfig.prototype.thumbnails;
        /** @type {?} */
        ViewerConfig.prototype.rotate;
        /** @type {?} */
        ViewerConfig.prototype.cache;
        /** @type {?} */
        ViewerConfig.prototype.saveRotateState;
        /** @type {?} */
        ViewerConfig.prototype.watermarkText;
        /** @type {?} */
        ViewerConfig.prototype.printAllowed;
        /** @type {?} */
        ViewerConfig.prototype.showGridLines;
        /** @type {?} */
        ViewerConfig.prototype.showLanguageMenu;
        /** @type {?} */
        ViewerConfig.prototype.defaultLanguage;
        /** @type {?} */
        ViewerConfig.prototype.supportedLanguages;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ViewerConfigService = /** @class */ (function () {
        function ViewerConfigService(_http, _config) {
            this._http = _http;
            this._config = _config;
            this._viewerConfig = new rxjs.BehaviorSubject(new ViewerConfig());
            this._updatedConfig = this._viewerConfig.asObservable();
        }
        Object.defineProperty(ViewerConfigService.prototype, "updatedConfig", {
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
        ViewerConfigService.prototype.load = /**
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
                var configEndpoint = _this._config.getConfigEndpoint(commonComponents.Api.VIEWER_APP);
                _this._http.get(configEndpoint, commonComponents.Api.httpOptionsJson).toPromise().then((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    /** @type {?} */
                    var viewerConfig = (/** @type {?} */ (response));
                    _this._viewerConfig.next(viewerConfig);
                    resolve();
                })).catch((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    reject("Could not load viewer config: " + JSON.stringify(response));
                }));
            }));
        };
        ViewerConfigService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ViewerConfigService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ ViewerConfigService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ViewerConfigService_Factory() { return new ViewerConfigService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: ViewerConfigService, providedIn: "root" });
        return ViewerConfigService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ViewerConfigService.prototype._viewerConfig;
        /**
         * @type {?}
         * @private
         */
        ViewerConfigService.prototype._updatedConfig;
        /**
         * @type {?}
         * @private
         */
        ViewerConfigService.prototype._http;
        /**
         * @type {?}
         * @private
         */
        ViewerConfigService.prototype._config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Language = /** @class */ (function () {
        function Language(code, alternateCode, name) {
            this.code = code;
            this.alternateCode = alternateCode;
            this.name = name;
        }
        /**
         * @param {?} code
         * @return {?}
         */
        Language.prototype.is = /**
         * @param {?} code
         * @return {?}
         */
        function (code) {
            return this.code === code || this.alternateCode === code;
        };
        return Language;
    }());
    if (false) {
        /** @type {?} */
        Language.prototype.code;
        /** @type {?} */
        Language.prototype.alternateCode;
        /** @type {?} */
        Language.prototype.name;
    }
    var Constants = /** @class */ (function () {
        function Constants() {
        }
        Constants.thumbnailsWidth = 300;
        Constants.scrollWidth = 17;
        Constants.topbarWidth = 60;
        Constants.documentMargin = 20;
        Constants.defaultShowLanguageMenu = true;
        Constants.defaultLanguage = new Language("en", "en-us", "English");
        Constants.defaultSupportedLanguages = [
            new Language("ar", "ar", "العربية"),
            new Language("ca", "ca-ES", "Català"),
            new Language("cs", "cs-CZ", "Čeština"),
            new Language("da", "da-DK", "Dansk"),
            new Language("de", "de-DE", "Deutsch"),
            new Language("el", "el-GR", "Ελληνικά"),
            new Language("en", "en-US", "English"),
            new Language("es", "es-ES", "Español"),
            new Language("fil", "fil-PH", "Filipino"),
            new Language("fr", "fr-FR", "Français"),
            new Language("he", "he-IL", "עברית"),
            new Language("hi", "hi-IN", "हिन्दी"),
            new Language("id", "id-ID", "Indonesia"),
            new Language("it", "it-IT", "Italiano"),
            new Language("ja", "ja-JP", "日本語"),
            new Language("kk", "kk-KZ", "Қазақ Тілі"),
            new Language("ko", "ko-KR", "한국어"),
            new Language("ms", "ms-MY", "Melayu"),
            new Language("nl", "nl-NL", "Nederlands"),
            new Language("pl", "pl-PL", "Polski"),
            new Language("pt", "pt-PT", "Português"),
            new Language("ro", "ro-RO", "Română"),
            new Language("ru", "ru-RU", "Русский"),
            new Language("sv", "sv-SE", "Svenska"),
            new Language("vi", "vi-VN", "Tiếng Việt"),
            new Language("th", "th-TH", "ไทย"),
            new Language("tr", "tr-TR", "Türkçe"),
            new Language("uk", "uk-UA", "Українська"),
            new Language("zh-hans", "zh-Hans", "中文"),
            new Language("zh-hant", "zh-Hant", "中文"),
        ];
        return Constants;
    }());
    if (false) {
        /** @type {?} */
        Constants.thumbnailsWidth;
        /** @type {?} */
        Constants.scrollWidth;
        /** @type {?} */
        Constants.topbarWidth;
        /** @type {?} */
        Constants.documentMargin;
        /** @type {?} */
        Constants.defaultShowLanguageMenu;
        /** @type {?} */
        Constants.defaultLanguage;
        /** @type {?} */
        Constants.defaultSupportedLanguages;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IntervalTimer = /** @class */ (function () {
        function IntervalTimer(callback, interval) {
            var _this_1 = this;
            this.remaining = 0;
            this.state = 0; //  0 = idle, 1 = running, 2 = paused, 3= resumed
            this.callback = callback;
            this.interval = interval;
            this.startTime = new Date().getTime();
            /** @type {?} */
            var _this = this;
            this.timerId = setInterval((/**
             * @return {?}
             */
            function () {
                _this_1.callback();
                _this.startTime = new Date().getTime();
            }), this.interval);
            this.state = 1;
        }
        /**
         * @return {?}
         */
        IntervalTimer.prototype.pause = /**
         * @return {?}
         */
        function () {
            if (this.state !== 1)
                return;
            this.remaining = this.interval - (new Date().getTime() - this.startTime);
            clearInterval(this.timerId);
            this.state = 2;
        };
        ;
        /**
         * @return {?}
         */
        IntervalTimer.prototype.resume = /**
         * @return {?}
         */
        function () {
            var _this_1 = this;
            if (this.state !== 2)
                return;
            this.state = 3;
            setTimeout((/**
             * @return {?}
             */
            function () { return _this_1.timeoutCallback(); }), this.remaining);
        };
        ;
        /**
         * @return {?}
         */
        IntervalTimer.prototype.stop = /**
         * @return {?}
         */
        function () {
            this.state = 0;
            clearInterval(this.timerId);
        };
        /**
         * @return {?}
         */
        IntervalTimer.prototype.timeoutCallback = /**
         * @return {?}
         */
        function () {
            if (this.state !== 3)
                return;
            this.callback();
            this.startTime = new Date().getTime();
            this.timerId = setInterval(this.callback, this.interval);
            this.state = 1;
        };
        ;
        return IntervalTimer;
    }());
    if (false) {
        /** @type {?} */
        IntervalTimer.prototype.callback;
        /** @type {?} */
        IntervalTimer.prototype.interval;
        /** @type {?} */
        IntervalTimer.prototype.timerId;
        /** @type {?} */
        IntervalTimer.prototype.startTime;
        /** @type {?} */
        IntervalTimer.prototype.remaining;
        /** @type {?} */
        IntervalTimer.prototype.state;
        /* Skipping unhandled member: ;*/
        /* Skipping unhandled member: ;*/
        /* Skipping unhandled member: ;*/
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ViewerAppComponent = /** @class */ (function () {
        function ViewerAppComponent(_viewerService, _modalService, configService, uploadFilesService, _navigateService, zoomService, pagePreloadService, _renderPrintService, passwordService, _windowService, _loadingMaskService, cdr, translate) {
            var _this = this;
            this._viewerService = _viewerService;
            this._modalService = _modalService;
            this._navigateService = _navigateService;
            this._renderPrintService = _renderPrintService;
            this._windowService = _windowService;
            this._loadingMaskService = _loadingMaskService;
            this.cdr = cdr;
            this.translate = translate;
            this.title = 'viewer';
            this.files = [];
            this.countPages = 0;
            this.formatDisabled = true;
            this.showThumbnails = false;
            this.browseFilesModal = commonComponents.CommonModals.BrowseFiles;
            this.showSearch = false;
            this.pagesToPreload = [];
            this._zoom = 100;
            this.fileWasDropped = false;
            this.docElmWithBrowsersFullScreenFunctions = (/** @type {?} */ (document.documentElement));
            this.docWithBrowsersExitFunctions = (/** @type {?} */ (document));
            this.zoomService = zoomService;
            this.startScrollTime = Date.now();
            this.endScrollTime = Date.now();
            configService.updatedConfig.subscribe((/**
             * @param {?} viewerConfig
             * @return {?}
             */
            function (viewerConfig) {
                _this.viewerConfig = viewerConfig;
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
                        _this._viewerService.upload(uploads.item(i), '', _this.viewerConfig.rewrite).subscribe((/**
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
                if (_this.viewerConfig.preloadPageCount !== 0) {
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
            this.isDesktop = _windowService.isDesktop();
            _windowService.onResize.subscribe((/**
             * @return {?}
             */
            function () {
                _this.isDesktop = _windowService.isDesktop();
                if (!_this.runPresentation) {
                    _this.refreshZoom();
                }
            }));
        }
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.fullScreen = /**
         * @return {?}
         */
        function () {
            if (!document.fullscreenElement) {
                this.closeFullScreen();
            }
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (this.viewerConfig.defaultDocument !== "") {
                this.isLoading = true;
                this.selectFile(this.viewerConfig.defaultDocument, "", "");
                this.selectCurrentOrFirstPage();
                return;
            }
            /** @type {?} */
            var defaultLanguage = this.defaultLanguageConfig;
            /** @type {?} */
            var supportedLanguages = this.supportedLanguagesConfig
                .map((/**
             * @param {?} language
             * @return {?}
             */
            function (language) {
                return {
                    name: language.name,
                    value: language.code,
                    separator: false
                };
            }));
            this.supportedLanguages = supportedLanguages;
            this.selectedLanguage = supportedLanguages.find((/**
             * @param {?} lang
             * @return {?}
             */
            function (lang) { return lang.value === defaultLanguage.code; }));
            this.translate.use(defaultLanguage.code);
            /** @type {?} */
            var queryString = window.location.search;
            if (queryString) {
                /** @type {?} */
                var urlParams = new URLSearchParams(queryString);
                this.fileParam = urlParams.get('file');
                if (this.fileParam) {
                    this.isLoading = true;
                    this.selectFile(this.fileParam, '', '');
                    this.selectCurrentOrFirstPage();
                    return;
                }
                this.urlParam = urlParams.get('url');
                if (this.urlParam) {
                    this.isLoading = true;
                    this.upload(this.urlParam);
                    this.selectCurrentOrFirstPage();
                }
            }
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.ngAfterViewInit = /**
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
        Object.defineProperty(ViewerAppComponent.prototype, "rewriteConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.rewrite : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "zoomConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.zoom : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "pageSelectorConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.pageSelector : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "searchConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.search : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "thumbnailsConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.thumbnails : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "rotateConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.rotate : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "downloadConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.download : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "uploadConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.upload : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "printConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.print : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "browseConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.browse : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "htmlModeConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.htmlMode : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "saveRotateStateConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.saveRotateState : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "enableRightClickConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.enableRightClick : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "currentPage", {
            get: /**
             * @return {?}
             */
            function () {
                return this._navigateService.currentPage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "showLanguageMenu", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.viewerConfig !== undefined && this.viewerConfig.showLanguageMenu !== undefined) {
                    return this.viewerConfig.showLanguageMenu;
                }
                return Constants.defaultShowLanguageMenu;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "supportedLanguagesConfig", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.viewerConfig && this.viewerConfig.supportedLanguages) {
                    /** @type {?} */
                    var supportedLanguages_1 = this.viewerConfig.supportedLanguages;
                    return Constants.defaultSupportedLanguages
                        .filter((/**
                     * @param {?} lang
                     * @return {?}
                     */
                    function (lang) {
                        return supportedLanguages_1.indexOf(lang.code) !== -1 || supportedLanguages_1.indexOf(lang.alternateCode) !== -1;
                    }));
                }
                return Constants.defaultSupportedLanguages;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "defaultLanguageConfig", {
            get: /**
             * @return {?}
             */
            function () {
                var _this = this;
                if (this.viewerConfig && this.viewerConfig.defaultLanguage) {
                    return this.supportedLanguagesConfig
                        .find((/**
                     * @param {?} lang
                     * @return {?}
                     */
                    function (lang) { return lang.is(_this.viewerConfig.defaultLanguage); }));
                }
                /** @type {?} */
                var pathname = window.location.pathname;
                if (pathname) {
                    /** @type {?} */
                    var parts_1 = pathname.split('/');
                    /** @type {?} */
                    var langOrNothing = this.supportedLanguagesConfig
                        .filter((/**
                     * @param {?} supported
                     * @return {?}
                     */
                    function (supported) { return parts_1.includes(supported.code) || parts_1.includes(supported.alternateCode); }))
                        .shift();
                    if (langOrNothing)
                        return langOrNothing;
                }
                /** @type {?} */
                var queryString = window.location.search;
                if (queryString) {
                    /** @type {?} */
                    var urlParams = new URLSearchParams(queryString);
                    /** @type {?} */
                    var candidate_1 = urlParams.get('lang');
                    if (candidate_1) {
                        return this.supportedLanguagesConfig
                            .find((/**
                         * @param {?} lang
                         * @return {?}
                         */
                        function (lang) { return lang.is(candidate_1); }));
                    }
                }
                return Constants.defaultLanguage;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.ifPresentation = /**
         * @return {?}
         */
        function () {
            return this.file ? commonComponents.FileUtil.find(this.file.guid, false).format === "Microsoft PowerPoint" : false;
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.ifExcel = /**
         * @return {?}
         */
        function () {
            return this.file ? commonComponents.FileUtil.find(this.file.guid, false).format === "Microsoft Excel" : false;
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.ifImage = /**
         * @return {?}
         */
        function () {
            return this.file ? this.formatIcon === "file-image" : false;
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.getFileName = /**
         * @return {?}
         */
        function () {
            return this.file.guid.replace(/^.*[\\\/]/, '');
        };
        /**
         * @param {?} id
         * @return {?}
         */
        ViewerAppComponent.prototype.openModal = /**
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
        ViewerAppComponent.prototype.closeModal = /**
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
        ViewerAppComponent.prototype.selectDir = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this._viewerService.loadFiles($event).subscribe((/**
             * @param {?} files
             * @return {?}
             */
            function (files) { return _this.files = files || []; }));
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.selectCurrentOrFirstPage = /**
         * @return {?}
         */
        function () {
            this.selectedPageNumber = this._navigateService.currentPage !== 0 ? this._navigateService.currentPage : 1;
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.getPreloadPageCount = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var minPresentationPagesToPreload = 3;
            /** @type {?} */
            var preloadPageCount = !this.ifPresentation()
                ? this.viewerConfig.preloadPageCount
                : this.viewerConfig.preloadPageCount !== 0 && this.viewerConfig.preloadPageCount < minPresentationPagesToPreload
                    ? minPresentationPagesToPreload
                    : this.viewerConfig.preloadPageCount;
            return preloadPageCount;
        };
        /**
         * @param {?} pages
         * @return {?}
         */
        ViewerAppComponent.prototype.copyThumbnails = /**
         * @param {?} pages
         * @return {?}
         */
        function (pages) {
            /** @type {?} */
            var thumbnails = pages.slice();
            for (var thumbIndex = 0; thumbIndex < thumbnails.length; thumbIndex++) {
                /** @type {?} */
                var thumb = thumbnails[thumbIndex];
                if (!thumb.data) {
                    /** @type {?} */
                    var emptyThumb = new commonComponents.PageModel();
                    emptyThumb.number = thumb.number;
                    emptyThumb.data = "<div style=\"height:100%;display:grid;color:#bfbfbf\"><div style=\"font-size:10vw;margin:auto;text-align:center;\">" + thumb.number + "</div></div>";
                    emptyThumb.width = 800;
                    emptyThumb.height = 800;
                    thumbnails[thumbIndex] = emptyThumb;
                }
            }
            return thumbnails;
        };
        /**
         * @param {?} $event
         * @param {?} password
         * @param {?} modalId
         * @return {?}
         */
        ViewerAppComponent.prototype.selectFile = /**
         * @param {?} $event
         * @param {?} password
         * @param {?} modalId
         * @return {?}
         */
        function ($event, password, modalId) {
            var _this = this;
            this.credentials = { guid: $event, password: password };
            this.file = null;
            this._viewerService.loadFile(this.credentials).subscribe((/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                _this.file = file;
                _this.formatDisabled = !_this.file;
                _this.pagesToPreload = [];
                if (file) {
                    _this.formatIcon = _this.file ? commonComponents.FileUtil.find(_this.file.guid, false).icon : null;
                    if (file.pages && file.pages[0]) {
                        _this._pageHeight = file.pages[0].height;
                        _this._pageWidth = file.pages[0].width;
                        _this.options = _this.zoomOptions();
                        _this.timerOptions = _this.getTimerOptions();
                        _this.refreshZoom();
                    }
                    /** @type {?} */
                    var preloadPageCount = _this.getPreloadPageCount();
                    /** @type {?} */
                    var countPages = file.pages ? file.pages.length : 0;
                    if (preloadPageCount > 0) {
                        _this.file.thumbnails = _this.copyThumbnails(file.pages);
                        _this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                    }
                    _this.selectedPageNumber = 1;
                    _this._navigateService.countPages = countPages;
                    _this._navigateService.currentPage = _this.selectedPageNumber;
                    _this.countPages = countPages;
                    _this.showThumbnails = _this.ifPresentation();
                    _this.runPresentation = false;
                }
                _this.cdr.detectChanges();
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
        ViewerAppComponent.prototype.preloadPages = /**
         * @param {?} start
         * @param {?} end
         * @return {?}
         */
        function (start, end) {
            var _this = this;
            var _loop_1 = function (pageNumber) {
                if (this_1.pagesToPreload.indexOf(pageNumber) !== -1) {
                    return "continue";
                }
                this_1.pagesToPreload.push(pageNumber);
                this_1._viewerService.loadPage(this_1.credentials, pageNumber).subscribe((/**
                 * @param {?} page
                 * @return {?}
                 */
                function (page) {
                    if (page.data) {
                        page.data = page.data.replace(/>\s+</g, '><').replace(/\uFEFF/g, '');
                    }
                    _this.file.pages[pageNumber - 1] = page;
                    if (_this.file.thumbnails) {
                        _this.file.thumbnails[pageNumber - 1] = page;
                    }
                }));
            };
            var this_1 = this;
            for (var pageNumber = start; pageNumber <= end; pageNumber++) {
                _loop_1(pageNumber);
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        ViewerAppComponent.prototype.upload = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this._viewerService.upload(null, $event, this.rewriteConfig).subscribe((/**
             * @param {?} uploadedDocument
             * @return {?}
             */
            function (uploadedDocument) {
                if (_this.fileParam !== '') {
                    _this.selectFile(uploadedDocument.guid, '', '');
                    _this.fileParam = '';
                }
                else {
                    _this.selectDir('');
                }
            }));
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.nextPage = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            if (this.intervalTimer && this._navigateService.currentPage + 1 > this.countPages) {
                this.intervalTimer.stop();
                this.intervalTime = 0;
            }
            this._navigateService.nextPage();
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.prevPage = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            this._navigateService.prevPage();
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.toLastPage = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            this._navigateService.toLastPage();
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.toFirstPage = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            this._navigateService.toFirstPage();
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.zoomIn = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            if (this._zoom < 490) {
                this.zoom = this._zoom + 10;
            }
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.zoomOut = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            if (this._zoom > 30) {
                this.zoom = this._zoom - 10;
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        ViewerAppComponent.prototype.fileDropped = /**
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
        ViewerAppComponent.prototype.ptToPx = /**
         * @private
         * @param {?} pt
         * @return {?}
         */
        function (pt) {
            //pt * 96 / 72 = px.
            return pt * 96 / 72;
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.getFitToWidth = /**
         * @return {?}
         */
        function () {
            // Images and Excel-related files receiving dimensions in px from server
            /** @type {?} */
            var pageWidth = this.formatIcon && (this.ifExcel() || this.ifImage()) ? this._pageWidth : this.ptToPx(this._pageWidth);
            /** @type {?} */
            var pageHeight = this.formatIcon && (this.ifExcel() || this.ifImage()) ? this._pageHeight : this.ptToPx(this._pageHeight);
            /** @type {?} */
            var offsetWidth = pageWidth ? pageWidth : window.innerWidth;
            /** @type {?} */
            var presentationThumbnails = this.isDesktop && this.ifPresentation() && !this.runPresentation;
            if (!this.runPresentation) {
                return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / (presentationThumbnails ? window.innerWidth - Constants.thumbnailsWidth - Constants.scrollWidth : window.innerWidth))
                    : (!this.isDesktop ? Math.round(window.innerWidth * 100 / offsetWidth)
                        : Math.round(((presentationThumbnails ? window.innerWidth - Constants.thumbnailsWidth - Constants.scrollWidth
                            : window.innerHeight) / offsetWidth) * 100));
            }
            else {
                return Math.round(window.innerWidth * 100 / offsetWidth);
            }
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.getFitToHeight = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var pageWidth = this.formatIcon && (this.ifExcel() || this.ifImage()) ? this._pageWidth : this.ptToPx(this._pageWidth);
            /** @type {?} */
            var pageHeight = this.formatIcon && (this.ifExcel() || this.ifImage()) ? this._pageHeight : this.ptToPx(this._pageHeight);
            /** @type {?} */
            var windowHeight = (pageHeight > pageWidth) ? window.innerHeight - 100 : window.innerHeight + 100;
            /** @type {?} */
            var offsetHeight = pageHeight ? pageHeight : windowHeight;
            if (!this.ifPresentation() && !(this.ifImage())) {
                return (pageHeight > pageWidth) ? Math.round(windowHeight * 100 / offsetHeight) : Math.round(offsetHeight * 100 / windowHeight);
            }
            if (this.ifPresentation()) {
                return Math.floor((window.innerHeight - Constants.topbarWidth) * 100 / (!this.runPresentation ? offsetHeight + Constants.documentMargin * 2 + Constants.scrollWidth
                    : offsetHeight));
            }
            if (this.ifImage()) {
                return Math.floor((window.innerHeight - Constants.topbarWidth) * 100 / (offsetHeight + Constants.documentMargin * 2 + Constants.scrollWidth));
            }
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.zoomOptions = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var width = this.getFitToWidth();
            /** @type {?} */
            var height = this.getFitToHeight();
            return this.zoomService.zoomOptions(width, height);
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.getTimerOptions = /**
         * @return {?}
         */
        function () {
            return [{ value: 0, name: 'None', separator: false },
                { value: 5, name: '5 sec', separator: false },
                { value: 10, name: '10 sec', separator: false },
                { value: 15, name: '15 sec', separator: false },
                { value: 30, name: '30 sec', separator: false }];
        };
        Object.defineProperty(ViewerAppComponent.prototype, "zoom", {
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
                this.zoomService.changeZoom(this._zoom);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} $event
         * @return {?}
         */
        ViewerAppComponent.prototype.selectZoom = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.zoom = $event.value;
        };
        /**
         * @param {?} deg
         * @return {?}
         */
        ViewerAppComponent.prototype.rotate = /**
         * @param {?} deg
         * @return {?}
         */
        function (deg) {
            var _this = this;
            if (this.formatDisabled)
                return;
            /** @type {?} */
            var pageNumber = this._navigateService.currentPage;
            /** @type {?} */
            var pageModel = this.file.pages[pageNumber - 1];
            if (this.saveRotateStateConfig && this.file) {
                this._viewerService.rotate(this.credentials, deg, pageNumber).subscribe((/**
                 * @param {?} page
                 * @return {?}
                 */
                function (page) {
                    /** @type {?} */
                    var updatedData = page.data.replace(/>\s+</g, '><')
                        .replace(/\uFEFF/g, "");
                    page.data = updatedData;
                    _this.file.pages[pageNumber - 1] = page;
                    if (_this.file && _this.file.pages && pageModel) {
                        /** @type {?} */
                        var angle = pageModel.angle + deg;
                        if (angle > 360) {
                            _this.changeAngle(pageModel, 90);
                        }
                        else if (angle < -360) {
                            _this.changeAngle(pageModel, -90);
                        }
                        else {
                            _this.changeAngle(pageModel, angle);
                        }
                    }
                }));
            }
        };
        /**
         * @private
         * @param {?} page
         * @param {?} angle
         * @return {?}
         */
        ViewerAppComponent.prototype.changeAngle = /**
         * @private
         * @param {?} page
         * @param {?} angle
         * @return {?}
         */
        function (page, angle) {
            page.angle = angle;
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.downloadFile = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            window.location.assign(this._viewerService.getDownloadUrl(this.credentials));
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.printFile = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.formatDisabled)
                return;
            this._viewerService.loadPrintPdf(this.credentials).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this._renderPrintService.changeBlob(data);
            }));
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.openThumbnails = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            if (this.showThumbnails) {
                this.showThumbnails = false;
                return;
            }
            this.runPresentation = false;
            this.showThumbnails = true;
        };
        /**
         * @private
         * @return {?}
         */
        ViewerAppComponent.prototype.clearData = /**
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
        ViewerAppComponent.prototype.onRightClick = /**
         * @return {?}
         */
        function () {
            return this.enableRightClickConfig;
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.openSearch = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            this.showSearch = !this.showSearch;
        };
        /**
         * @private
         * @return {?}
         */
        ViewerAppComponent.prototype.refreshZoom = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.file) {
                this.formatIcon = commonComponents.FileUtil.find(this.file.guid, false).icon;
                this.zoom = this._windowService.isDesktop() && !(this.ifImage() || this.ifPresentation()) ? 100
                    : (this.ifImage() ? this.getFitToHeight()
                        : this.getFitToWidth());
            }
        };
        /**
         * @param {?} pageNumber
         * @return {?}
         */
        ViewerAppComponent.prototype.selectCurrentPage = /**
         * @param {?} pageNumber
         * @return {?}
         */
        function (pageNumber) {
            this.selectedPageNumber = pageNumber;
            this._navigateService.currentPage = pageNumber;
            if (this.runPresentation && this.intervalTime > 0 && this.intervalTimer.state !== 3) {
                this.resetInterval();
                if (this.slideInRange()) {
                    this.startCountDown(this.intervalTime, true);
                }
            }
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.onMouseWheelUp = /**
         * @return {?}
         */
        function () {
            this.startScrollTime = Date.now();
            if (this.ifPresentation() && this.selectedPageNumber !== 1) {
                if (this.startScrollTime - this.endScrollTime > 300 && this.vertScrollEnded(true)) {
                    this.selectedPageNumber = this.selectedPageNumber - 1;
                    this.endScrollTime = Date.now();
                }
            }
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.onMouseWheelDown = /**
         * @return {?}
         */
        function () {
            this.startScrollTime = Date.now();
            if (this.ifPresentation() && this.selectedPageNumber !== this.file.pages.length) {
                if (this.startScrollTime - this.endScrollTime > 300 && this.vertScrollEnded(false)) {
                    this.startScrollTime = Date.now();
                    if (this.file.pages[this.selectedPageNumber] && !this.file.pages[this.selectedPageNumber].data) {
                        this.preloadPages(this.selectedPageNumber, this.selectedPageNumber + 1);
                        this.selectedPageNumber = this.selectedPageNumber + 1;
                    }
                    else {
                        this.selectedPageNumber = this.selectedPageNumber + 1;
                    }
                    this.endScrollTime = Date.now();
                }
            }
        };
        /**
         * @param {?} onTop
         * @return {?}
         */
        ViewerAppComponent.prototype.vertScrollEnded = /**
         * @param {?} onTop
         * @return {?}
         */
        function (onTop) {
            /** @type {?} */
            var gdDocument = (/** @type {?} */ (document.getElementsByClassName('gd-document')[0]));
            if (onTop) {
                return gdDocument.scrollTop === 0;
            }
            else
                return gdDocument.offsetHeight + gdDocument.scrollTop >= gdDocument.scrollHeight;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        ViewerAppComponent.prototype.toggleTimer = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.intervalTime = $event.value;
            if (this.intervalTime !== 0) {
                if (this.intervalTimer && this.intervalTimer.state === 1) {
                    this.intervalTimer.stop();
                }
                this.startCountDown(this.intervalTime);
                this.startInterval(this.intervalTime);
            }
            else {
                this.intervalTimer.stop();
            }
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.showCountDown = /**
         * @return {?}
         */
        function () {
            return this.intervalTime > 0 && (this.slideInRange());
        };
        /**
         * @param {?} seconds
         * @param {?=} reset
         * @return {?}
         */
        ViewerAppComponent.prototype.startCountDown = /**
         * @param {?} seconds
         * @param {?=} reset
         * @return {?}
         */
        function (seconds, reset) {
            var _this = this;
            if (reset === void 0) { reset = false; }
            clearInterval(this.countDownInterval);
            if (seconds > 0) {
                this.secondsLeft = seconds;
                seconds--;
                /** @type {?} */
                var interval_1 = setInterval((/**
                 * @return {?}
                 */
                function () {
                    _this.secondsLeft = seconds;
                    seconds--;
                    if (seconds === 0) {
                        clearInterval(interval_1);
                    }
                }), 1000);
                this.countDownInterval = interval_1;
            }
        };
        /**
         * @private
         * @param {?} intervalTime
         * @return {?}
         */
        ViewerAppComponent.prototype.startInterval = /**
         * @private
         * @param {?} intervalTime
         * @return {?}
         */
        function (intervalTime) {
            var _this = this;
            this.intervalTimer = new IntervalTimer((/**
             * @return {?}
             */
            function () {
                if (_this.slideInRange()) {
                    _this.nextPage();
                    if (_this.slideInRange()) {
                        _this.startCountDown(intervalTime);
                    }
                }
                else {
                    _this.intervalTimer.stop();
                }
            }), intervalTime * 1000);
        };
        /**
         * @private
         * @return {?}
         */
        ViewerAppComponent.prototype.slideInRange = /**
         * @private
         * @return {?}
         */
        function () {
            return this._navigateService.currentPage + 1 <= this.countPages;
        };
        /**
         * @private
         * @return {?}
         */
        ViewerAppComponent.prototype.resetInterval = /**
         * @private
         * @return {?}
         */
        function () {
            this.intervalTimer.stop();
            this.startInterval(this.intervalTime);
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.pausePresenting = /**
         * @return {?}
         */
        function () {
            this.intervalTimer.pause();
            this.startCountDown(0, true);
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.resumePresenting = /**
         * @return {?}
         */
        function () {
            this.intervalTimer.resume();
            /** @type {?} */
            var secondsRemaining = Math.round(this.intervalTimer.remaining / 1000);
            this.startCountDown(secondsRemaining);
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.presentationRunning = /**
         * @return {?}
         */
        function () {
            return this.intervalTimer && this.intervalTimer.state === 1 && this.slideInRange();
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.presentationPaused = /**
         * @return {?}
         */
        function () {
            return this.intervalTimer && this.intervalTimer.state === 2 && this.slideInRange();
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.startPresentation = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.showThumbnails = false;
            this.openFullScreen();
            this.runPresentation = !this.runPresentation;
            /** @type {?} */
            var intervalId = setInterval((/**
             * @return {?}
             */
            function () {
                if (screen.height === window.innerHeight && screen.width === window.innerWidth) {
                    _this.zoomService.changeZoom(window.innerWidth / window.innerHeight < 1.7 && _this._pageWidth / _this._pageHeight > 1.7
                        ? _this.getFitToWidth() : _this.getFitToHeight());
                    clearInterval(intervalId);
                }
            }), 50);
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.openFullScreen = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var docElmWithBrowsersFullScreenFunctions = (/** @type {?} */ (document.documentElement));
            if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
                docElmWithBrowsersFullScreenFunctions.requestFullscreen();
            }
            else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
                docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
            }
            else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
            }
            else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
                docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
            }
            this.isFullScreen = true;
        };
        /**
         * @param {?=} byButton
         * @return {?}
         */
        ViewerAppComponent.prototype.closeFullScreen = /**
         * @param {?=} byButton
         * @return {?}
         */
        function (byButton) {
            if (byButton === void 0) { byButton = false; }
            if (byButton) {
                /** @type {?} */
                var docWithBrowsersExitFunctions = (/** @type {?} */ (document));
                if (docWithBrowsersExitFunctions.exitFullscreen) {
                    docWithBrowsersExitFunctions.exitFullscreen();
                }
                else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */
                    docWithBrowsersExitFunctions.mozCancelFullScreen();
                }
                else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                    docWithBrowsersExitFunctions.webkitExitFullscreen();
                }
                else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */
                    docWithBrowsersExitFunctions.msExitFullscreen();
                }
            }
            if (this.intervalTimer) {
                this.intervalTimer.stop();
            }
            this.isFullScreen = false;
            this.runPresentation = false;
            this.showThumbnails = true;
            this.intervalTime = 0;
            this.startCountDown(0);
            this.refreshZoom();
        };
        /**
         * @param {?} selectedLanguage
         * @return {?}
         */
        ViewerAppComponent.prototype.selectLanguage = /**
         * @param {?} selectedLanguage
         * @return {?}
         */
        function (selectedLanguage) {
            this.selectedLanguage = selectedLanguage;
            this.translate.use(selectedLanguage.value);
        };
        ViewerAppComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-viewer',
                        template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick()\">\n  <div class=\"top-panel\" *ngIf=\"!runPresentation\">\n    <gd-logo [logo]=\"'viewer'\" icon=\"eye\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" title=\"{{'Browse files' | translate}}\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-select class=\"mobile-hide select-left\" [disabled]=\"formatDisabled\" [options]=\"options\" (selected)=\"selectZoom($event)\"\n                 [showSelected]=\"{ name: zoom+'%', value : zoom}\" *ngIf=\"zoomConfig\" ></gd-select>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" title=\"{{'Zoom In' | translate}}\" (click)=\"zoomIn()\"\n                 *ngIf=\"zoomConfig\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" title=\"{{'Zoom Out' | translate}}\"\n                 (click)=\"zoomOut()\" *ngIf=\"zoomConfig\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-left'\" title=\"{{'First Page' | translate }}\"\n                 (click)=\"toFirstPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" title=\"{{'Previous Page' | translate}}\"\n                 (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <div class=\"current-page-number\" [ngClass]=\"{'active': !formatDisabled}\" *ngIf=\"formatIcon !== 'file-excel'\">{{currentPage}}/{{countPages}}</div>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" title=\"{{'Next Page' | translate }}\"\n                 (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-right'\" title=\"{{'Last Page' | translate }}\"\n                 (click)=\"toLastPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'undo'\" title=\"{{'Rotate CCW' | translate}}\" (click)=\"rotate(-90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'redo'\" title=\"{{'Rotate CW' | translate}}\"  (click)=\"rotate(90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" title=\"{{'Download' | translate}}\"\n                 (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" title=\"{{'Print' | translate}}\" (click)=\"printFile()\"\n                 *ngIf=\"printConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search'\" title=\"{{'Search' | translate}}\" (click)=\"openSearch()\"\n                 *ngIf=\"searchConfig && !ifPresentation()\" ></gd-button>\n      <gd-search (hidePanel)=\"showSearch = !$event\" *ngIf=\"showSearch\" ></gd-search>\n\n      <div class=\"toolbar-panel-right\">\n        <div class=\"language-menu mobile-hide\" *ngIf=\"showLanguageMenu\">\n          <gd-select class=\"select-language-menu\" [disabled]=\"false\" [options]=\"supportedLanguages\"\n            (selected)=\"selectLanguage($event)\" [showSelected]=\"selectedLanguage\"></gd-select>\n        </div>\n\n        <gd-button class=\"thumbnails-button btn-right\" [disabled]=\"formatDisabled\" [icon]=\"'th-large'\" title=\"{{'Thumbnails' | translate}}\"\n                   (click)=\"openThumbnails()\" *ngIf=\"thumbnailsConfig && isDesktop && formatIcon !== 'file-excel' && (!ifPresentation() ||\n                   ifPresentation() && runPresentation)\"></gd-button>\n        <gd-button class=\"thumbnails-button mobile-hide btn-right smp-start-stop\" [disabled]=\"formatDisabled\" [icon]=\"'play'\" title=\"{{'Run presentation' | translate}}\"\n                   (click)=\"startPresentation()\" *ngIf=\"ifPresentation() && !runPresentation\">{{'Present' | translate}}</gd-button>\n      </div>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"top-panel\" *ngIf=\"runPresentation\">\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <div class=\"slides-title\">Viewer</div>\n      <div class=\"slides-filename\">{{getFileName()}}</div>\n      <div class=\"slides-buttons\">\n        <gd-select class=\"mobile-hide select-right\" [disabled]=\"formatDisabled\" [options]=\"timerOptions\" (selected)=\"toggleTimer($event)\"\n        [icon]=\"'clock'\" *ngIf=\"zoomConfig\" ></gd-select>\n        <gd-button class=\"mobile-hide\" *ngIf=\"presentationRunning()\" [disabled]=\"formatDisabled\" [icon]=\"'pause'\" title=\"{{'Pause presenting' | translate}}\"\n        (click)=\"pausePresenting()\"></gd-button>\n        <gd-button class=\"mobile-hide\" *ngIf=\"presentationPaused()\" [disabled]=\"formatDisabled\" [icon]=\"'step-forward'\" title=\"{{'Resume presenting' | translate}}\"\n        (click)=\"resumePresenting()\"></gd-button>\n        <gd-button class=\"mobile-hide btn-right smp-start-stop\" [disabled]=\"formatDisabled\" [icon]=\"'stop'\" title=\"{{'Stop presenting' | translate}}\"\n        (click)=\"closeFullScreen(true)\">{{'Stop' | translate}} </gd-button>\n      </div>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"doc-panel\" *ngIf=\"file\" #docPanel>\n    <gd-thumbnails *ngIf=\"showThumbnails && !ifPresentation() && isDesktop\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\" (selectedPage)=\"selectCurrentPage($event)\"></gd-thumbnails>\n    <gd-thumbnails *ngIf=\"showThumbnails && ifPresentation() && !runPresentation && isDesktop\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\" (selectedPage)=\"selectCurrentPage($event)\" gdScrollable [isPresentation]=\"ifPresentation()\"></gd-thumbnails>\n\n    <gd-document class=\"gd-document\" *ngIf=\"(file &&\n                                            (ifExcel() && !htmlModeConfig) ||\n                                            (ifPresentation() && isDesktop && !runPresentation) ||\n                                            (!ifExcel() && !ifPresentation()))\" [file]=\"file\" [mode]=\"htmlModeConfig\" [showActiveSlide]=\"true\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" [selectedPage]=\"selectedPageNumber\" gdRenderPrint [htmlMode]=\"htmlModeConfig\" gdMouseWheel (mouseWheelUp)=\"onMouseWheelUp()\" (mouseWheelDown)=\"onMouseWheelDown()\"></gd-document>\n    <gd-excel-document class=\"gd-document\" *ngIf=\"file && ifExcel() && htmlModeConfig\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-excel-document>\n    <gd-run-presentation class=\"gd-document\" *ngIf=\"(file && ifPresentation() && runPresentation) ||\n                                                    (file && ifPresentation() && !isDesktop)\" [file]=\"file\" [currentPage]=\"currentPage\" [mode]=\"htmlModeConfig\"\n                                                    (selectedPage)=\"selectCurrentPage($event)\"\n                 [preloadPageCount]=\"0\"></gd-run-presentation>\n    <div class=\"slides-nav\" *ngIf=\"runPresentation\">\n      <div class=\"timer\" *ngIf=\"showCountDown()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon><span [ngClass]=\"secondsLeft >= 10 ? 'seconds-remaining two-digits' : 'seconds-remaining'\">{{secondsLeft}}</span>\n      </div>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\"\n      (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\"\n      (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n    </div>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n    {{'Click' | translate}} <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> {{'to open file' | translate}}<br>\n    {{'Or drop file here' | translate}}\n  </gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.current-page-number{margin-left:7px;font-size:14px;color:#959da5;width:37px;height:37px;line-height:37px;text-align:center}.current-page-number.active{color:#fff}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}.toolbar-panel-right{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1;place-content:flex-end}.btn-right{margin-right:7px}.smp-start-stop ::ng-deep .button{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;border:1px solid;border-radius:5px;padding:0 10px!important}.select-language-menu ::ng-deep .select{width:100%}.select-language-menu ::ng-deep .selected-value{max-width:100%}::ng-deep .tools .button,::ng-deep .tools .nav-caret,::ng-deep .tools .selected-value{color:#fff!important}::ng-deep .tools .button.inactive,::ng-deep .tools .nav-caret.inactive,::ng-deep .tools .selected-value.inactive{color:#959da5!important}::ng-deep .tools .button{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .select-left .select{position:relative}::ng-deep .tools .select-left .dropdown-menu{top:40px;left:0}::ng-deep .tools .select-right .select{position:relative}::ng-deep .tools .select-right .dropdown-menu{top:40px;right:0}::ng-deep .tools .dropdown-menu .option{color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 15px!important}::ng-deep .tools .select{width:37px;height:37px;margin-left:7px;line-height:37px;text-align:center}::ng-deep .tools .slides-title{color:#fff;padding-left:12px;font-size:18px}::ng-deep .tools .slides-filename{-webkit-box-flex:1;flex-grow:1;text-align:center;color:#fff;text-overflow:ellipsis;white-space:nowrap;padding-left:20px;overflow:hidden}::ng-deep .tools .slides-buttons{display:-webkit-box;display:flex}::ng-deep .tools .slides-buttons ::ng-deep .select{color:#fff;cursor:pointer}::ng-deep .tools ::ng-deep .gd-nav-search-container .icon-button{margin:0 0 0 7px!important}.slides-nav{position:absolute;right:30px;bottom:30px;display:-webkit-box;display:flex}.slides-nav ::ng-deep .button{font-size:37px;background-color:#edf0f2;border-radius:3px}.slides-nav ::ng-deep .timer{font-size:42px;line-height:6px;color:#959da5;position:relative}.slides-nav ::ng-deep .timer .seconds-remaining{position:absolute;margin-left:5px;font-size:16px;top:18px;left:12px}.slides-nav ::ng-deep .timer .seconds-remaining.two-digits{left:6px!important}::ng-deep .page.presentation .gd-wrapper{pointer-events:none}@media (max-width:1037px){.current-page-number,.mobile-hide{display:none}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .tools .gd-nav-search-btn .icon-button{height:37px;width:37px}::ng-deep .tools .gd-nav-search-btn .button{font-size:14px}::ng-deep .tools .gd-nav-search-container{top:59px!important}}"]
                    }] }
        ];
        /** @nocollapse */
        ViewerAppComponent.ctorParameters = function () { return [
            { type: ViewerService },
            { type: commonComponents.ModalService },
            { type: ViewerConfigService },
            { type: commonComponents.UploadFilesService },
            { type: commonComponents.NavigateService },
            { type: commonComponents.ZoomService },
            { type: commonComponents.PagePreloadService },
            { type: commonComponents.RenderPrintService },
            { type: commonComponents.PasswordService },
            { type: commonComponents.WindowService },
            { type: commonComponents.LoadingMaskService },
            { type: core.ChangeDetectorRef },
            { type: core$1.TranslateService }
        ]; };
        ViewerAppComponent.propDecorators = {
            fullScreen: [{ type: core.HostListener, args: ["document:fullscreenchange", [],] }]
        };
        return ViewerAppComponent;
    }());
    if (false) {
        /** @type {?} */
        ViewerAppComponent.prototype.title;
        /** @type {?} */
        ViewerAppComponent.prototype.files;
        /** @type {?} */
        ViewerAppComponent.prototype.file;
        /** @type {?} */
        ViewerAppComponent.prototype.viewerConfig;
        /** @type {?} */
        ViewerAppComponent.prototype.countPages;
        /** @type {?} */
        ViewerAppComponent.prototype.formatDisabled;
        /** @type {?} */
        ViewerAppComponent.prototype.showThumbnails;
        /** @type {?} */
        ViewerAppComponent.prototype.credentials;
        /** @type {?} */
        ViewerAppComponent.prototype.browseFilesModal;
        /** @type {?} */
        ViewerAppComponent.prototype.showSearch;
        /** @type {?} */
        ViewerAppComponent.prototype.isDesktop;
        /** @type {?} */
        ViewerAppComponent.prototype.isLoading;
        /** @type {?} */
        ViewerAppComponent.prototype.pagesToPreload;
        /** @type {?} */
        ViewerAppComponent.prototype._zoom;
        /** @type {?} */
        ViewerAppComponent.prototype._pageWidth;
        /** @type {?} */
        ViewerAppComponent.prototype._pageHeight;
        /** @type {?} */
        ViewerAppComponent.prototype.options;
        /** @type {?} */
        ViewerAppComponent.prototype.timerOptions;
        /** @type {?} */
        ViewerAppComponent.prototype.intervalTime;
        /** @type {?} */
        ViewerAppComponent.prototype.intervalTimer;
        /** @type {?} */
        ViewerAppComponent.prototype.countDownInterval;
        /** @type {?} */
        ViewerAppComponent.prototype.secondsLeft;
        /** @type {?} */
        ViewerAppComponent.prototype.fileWasDropped;
        /** @type {?} */
        ViewerAppComponent.prototype.formatIcon;
        /** @type {?} */
        ViewerAppComponent.prototype.fileParam;
        /** @type {?} */
        ViewerAppComponent.prototype.urlParam;
        /** @type {?} */
        ViewerAppComponent.prototype.querySubscription;
        /** @type {?} */
        ViewerAppComponent.prototype.selectedPageNumber;
        /** @type {?} */
        ViewerAppComponent.prototype.runPresentation;
        /** @type {?} */
        ViewerAppComponent.prototype.isFullScreen;
        /** @type {?} */
        ViewerAppComponent.prototype.startScrollTime;
        /** @type {?} */
        ViewerAppComponent.prototype.endScrollTime;
        /** @type {?} */
        ViewerAppComponent.prototype.supportedLanguages;
        /** @type {?} */
        ViewerAppComponent.prototype.selectedLanguage;
        /** @type {?} */
        ViewerAppComponent.prototype.docElmWithBrowsersFullScreenFunctions;
        /** @type {?} */
        ViewerAppComponent.prototype.docWithBrowsersExitFunctions;
        /** @type {?} */
        ViewerAppComponent.prototype.zoomService;
        /**
         * @type {?}
         * @private
         */
        ViewerAppComponent.prototype._viewerService;
        /**
         * @type {?}
         * @private
         */
        ViewerAppComponent.prototype._modalService;
        /**
         * @type {?}
         * @private
         */
        ViewerAppComponent.prototype._navigateService;
        /**
         * @type {?}
         * @private
         */
        ViewerAppComponent.prototype._renderPrintService;
        /**
         * @type {?}
         * @private
         */
        ViewerAppComponent.prototype._windowService;
        /**
         * @type {?}
         * @private
         */
        ViewerAppComponent.prototype._loadingMaskService;
        /**
         * @type {?}
         * @private
         */
        ViewerAppComponent.prototype.cdr;
        /** @type {?} */
        ViewerAppComponent.prototype.translate;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ThumbnailsComponent = /** @class */ (function () {
        function ThumbnailsComponent(_navigateService, _zoomService) {
            this._navigateService = _navigateService;
            this._zoomService = _zoomService;
            this.selectedPage = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        ThumbnailsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        ThumbnailsComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
            // which leads to undesired spaces on the top of the docs pages
            if (this.pages) {
                this.pages.forEach((/**
                 * @param {?} page
                 * @return {?}
                 */
                function (page) {
                    if (page.data) {
                        page.data = page.data.replace(/>\s+</g, '><')
                            .replace(/\uFEFF/g, "");
                    }
                }));
            }
        };
        /**
         * @return {?}
         */
        ThumbnailsComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this._zoomService.changeZoom(this._zoomService.zoom);
        };
        /**
         * @return {?}
         */
        ThumbnailsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._zoomService.changeZoom(_this._zoomService.zoom);
            }), 100);
        };
        /**
         * @param {?} data
         * @return {?}
         */
        ThumbnailsComponent.prototype.imgData = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data) {
                return data.startsWith('data:image')
                    ? data
                    : 'data:image/png;base64,' + data;
            }
            return null;
        };
        /**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        ThumbnailsComponent.prototype.getScale = /**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        function (x, y) {
            return Math.min(190 / x, 190 / y);
        };
        /**
         * @param {?} pageNumber
         * @return {?}
         */
        ThumbnailsComponent.prototype.openPage = /**
         * @param {?} pageNumber
         * @return {?}
         */
        function (pageNumber) {
            this.selectedPage.emit(pageNumber);
            this._navigateService.navigateTo(pageNumber);
        };
        // TODO: consider placing in one service
        // TODO: consider placing in one service
        /**
         * @param {?} value
         * @return {?}
         */
        ThumbnailsComponent.prototype.getDimensionWithUnit = 
        // TODO: consider placing in one service
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return value + commonComponents.FileUtil.find(this.guid, false).unit;
        };
        ThumbnailsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-thumbnails',
                        template: "<div class=\"gd-thumbnails\">\n  <div class=\"gd-thumbnails-panzoom\">\n    <div *ngFor=\"let page of pages\" id=\"gd-thumbnails-page-{{page.number}}\" class=\"gd-page\"\n         (click)=\"openPage(page.number)\" gdRotation [withMargin]=\"false\"\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <div class=\"gd-wrapper\"\n           [style.height]=\"getDimensionWithUnit(page.height)\"\n           [style.width]=\"getDimensionWithUnit(page.width)\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && isHtmlMode\"\n           [innerHTML]=\"page.data | safeHtml\"></div>\n      <div class=\"gd-wrapper\" \n           [style.height]=\"getDimensionWithUnit(page.height)\"\n           [style.width]=\"getDimensionWithUnit(page.width)\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && !isHtmlMode\">\n           <img style=\"width: inherit !important\" class=\"gd-page-image\" [attr.src]=\"imgData(page.data) | safeResourceHtml\"\n             alt/>\n      </div>\n    </div>\n  </div>\n</div>\n",
                        styles: [":host{-webkit-box-flex:0;flex:0 0 300px;background:#f5f5f5;color:#fff;overflow-y:auto;display:block;-webkit-transition:margin-left .2s;transition:margin-left .2s;height:100%}.gd-page{width:272px;height:272px;-webkit-transition:.3s;transition:.3s;background-color:#e7e7e7;cursor:pointer;margin:14px 14px 0}.gd-page:hover{background-color:silver}.gd-wrapper{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);left:50%;top:50%;position:relative;background-color:#fff;box-shadow:0 4px 12px -4px rgba(0,0,0,.38);pointer-events:none}.gd-wrapper ::ng-deep img{width:inherit}.gd-thumbnails::-webkit-scrollbar{width:0;background-color:#f5f5f5}.gd-thumbnails-panzoom>.gd-thumbnails-landscape{margin:-134px 0 -1px 12px}.gd-thumbnails .gd-page-image{height:inherit}.gd-thumbnails-landscape-image{margin:-90px 0 -23px!important}.gd-thumbnails-landscape-image-rotated{margin:126px 0 -3px -104px!important}"]
                    }] }
        ];
        /** @nocollapse */
        ThumbnailsComponent.ctorParameters = function () { return [
            { type: commonComponents.NavigateService },
            { type: commonComponents.ZoomService }
        ]; };
        ThumbnailsComponent.propDecorators = {
            pages: [{ type: core.Input }],
            guid: [{ type: core.Input }],
            mode: [{ type: core.Input }],
            isHtmlMode: [{ type: core.Input }],
            selectedPage: [{ type: core.Output }]
        };
        return ThumbnailsComponent;
    }());
    if (false) {
        /** @type {?} */
        ThumbnailsComponent.prototype.pages;
        /** @type {?} */
        ThumbnailsComponent.prototype.guid;
        /** @type {?} */
        ThumbnailsComponent.prototype.mode;
        /** @type {?} */
        ThumbnailsComponent.prototype.isHtmlMode;
        /** @type {?} */
        ThumbnailsComponent.prototype.selectedPage;
        /**
         * @type {?}
         * @private
         */
        ThumbnailsComponent.prototype._navigateService;
        /**
         * @type {?}
         * @private
         */
        ThumbnailsComponent.prototype._zoomService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExcelPageService = /** @class */ (function () {
        function ExcelPageService() {
        }
        /**
         * @param {?} data
         * @return {?}
         */
        ExcelPageService.prototype.getUpdatedPage = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var doc = new DOMParser().parseFromString(data, "text/html");
            /** @type {?} */
            var table = doc.querySelector('table');
            /** @type {?} */
            var numCellsInFirstRow = 0;
            /** @type {?} */
            var cellsFromFirstRow = doc.querySelectorAll('table > tbody > tr:first-child td');
            cellsFromFirstRow.forEach((/**
             * @param {?} elm
             * @return {?}
             */
            function (elm) {
                numCellsInFirstRow += elm.attributes['colspan'] ? parseInt(elm.attributes['colspan'].value, 10) : 1;
            }));
            /** @type {?} */
            var newTable = this.createHeader(numCellsInFirstRow, table);
            doc.querySelector('table').replaceWith(newTable);
            /** @type {?} */
            var resultData = new XMLSerializer().serializeToString(doc)
            // work-around for FF which is adds a0 namespace during serialization
            ;
            // work-around for FF which is adds a0 namespace during serialization
            return resultData.replace(/a0:/g, "").replace(/:a0/g, "");
        };
        /**
         * @param {?} numCols
         * @param {?} table
         * @return {?}
         */
        ExcelPageService.prototype.createHeader = /**
         * @param {?} numCols
         * @param {?} table
         * @return {?}
         */
        function (numCols, table) {
            /** @type {?} */
            var header = document.createElement('thead');
            header.append(document.createElement('tr'));
            for (var i = 0; i < numCols; ++i) {
                /** @type {?} */
                var th = document.createElement('th');
                th.innerText = this.colName(i);
                header.querySelector("tr").append(th);
            }
            /** @type {?} */
            var colgroup = table.querySelector('colgroup');
            /** @type {?} */
            var col = document.createElement('col');
            col.width = '80px';
            colgroup.prepend(col);
            table.prepend(header);
            /** @type {?} */
            var cnt = 0;
            table.querySelectorAll('tr').forEach((/**
             * @param {?} row
             * @return {?}
             */
            function (row) {
                /** @type {?} */
                var div = document.createElement('div');
                if (cnt !== 0) {
                    /** @type {?} */
                    var td = document.createElement('td');
                    td.className = "excel";
                    td.append(div);
                    div.innerText = cnt.toString();
                    row.prepend(td);
                }
                else {
                    /** @type {?} */
                    var th = document.createElement('th');
                    th.append(div);
                    row.prepend(th);
                }
                cnt++;
            }));
            return table;
        };
        /**
         * @param {?} n
         * @return {?}
         */
        ExcelPageService.prototype.colName = /**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            /** @type {?} */
            var ordA = 'a'.charCodeAt(0);
            /** @type {?} */
            var ordZ = 'z'.charCodeAt(0);
            /** @type {?} */
            var len = ordZ - ordA + 1;
            /** @type {?} */
            var s = "";
            while (n >= 0) {
                s = String.fromCharCode(n % len + ordA) + s;
                n = Math.floor(n / len) - 1;
            }
            return s;
        };
        ExcelPageService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ExcelPageService.ctorParameters = function () { return []; };
        /** @nocollapse */ ExcelPageService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ExcelPageService_Factory() { return new ExcelPageService(); }, token: ExcelPageService, providedIn: "root" });
        return ExcelPageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExcelPageComponent = /** @class */ (function () {
        function ExcelPageComponent(_excelPageService) {
            this._excelPageService = _excelPageService;
        }
        /**
         * @return {?}
         */
        ExcelPageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var isIE = /*@cc_on!@*/ false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
            if (isIE && this.number === 0) {
                this.editable = false;
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        ExcelPageComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (this.isHtml) {
                // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
                // which leads to undesired spaces on the top of the docs pages
                this.data = this.data
                    ? this.data.replace(/>\s+</g, '><')
                        .replace(/\uFEFF/g, "")
                    : null;
            }
            else {
                if (this.data) {
                    this.imgData = this.data.startsWith('data:image')
                        ? this.data
                        : 'data:image/png;base64,' + this.data;
                }
            }
        };
        ExcelPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-excel-page',
                        template: "<div id=\"page-{{number}}\">\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\" [contentEditable]=\"(editable) ? true : false\"></div>\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\n       alt=\"\"\n       *ngIf=\"data && !isHtml\">\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n    &nbsp;Loading... Please wait.\n  </div>\n</div>\n",
                        styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper div{width:100%}::ng-deep .gd-highlight{background-color:#ff0}::ng-deep .gd-highlight-select{background-color:#ff9b00}::ng-deep th{color:#959da5;background-color:#f4f4f4;font-weight:unset;border:1px solid #e7e7e7!important;text-transform:uppercase;font-size:14px;overflow:hidden}::ng-deep td{vertical-align:middle!important}::ng-deep .page-grid-lines td{border:1px solid #e7e7e7!important}::ng-deep .page td:nth-child(1){border:1px solid #e7e7e7!important}::ng-deep tr td.excel:first-child{color:#959da5;background-color:#f4f4f4;font-weight:unset;width:1%;text-align:center}::ng-deep tr td.excel:first-child div{width:80px}::ng-deep tr th.excel:first-child{background-color:#f4f4f4;width:1%}::ng-deep tr th.excel:first-child div{width:80px}.gd-page-image{height:100%!important;width:100%!important}"]
                    }] }
        ];
        /** @nocollapse */
        ExcelPageComponent.ctorParameters = function () { return [
            { type: ExcelPageService }
        ]; };
        ExcelPageComponent.propDecorators = {
            angle: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            number: [{ type: core.Input }],
            data: [{ type: core.Input }],
            isHtml: [{ type: core.Input }],
            editable: [{ type: core.Input }]
        };
        return ExcelPageComponent;
    }());
    if (false) {
        /** @type {?} */
        ExcelPageComponent.prototype.angle;
        /** @type {?} */
        ExcelPageComponent.prototype.width;
        /** @type {?} */
        ExcelPageComponent.prototype.height;
        /** @type {?} */
        ExcelPageComponent.prototype.number;
        /** @type {?} */
        ExcelPageComponent.prototype.data;
        /** @type {?} */
        ExcelPageComponent.prototype.isHtml;
        /** @type {?} */
        ExcelPageComponent.prototype.editable;
        /** @type {?} */
        ExcelPageComponent.prototype.imgData;
        /**
         * @type {?}
         * @private
         */
        ExcelPageComponent.prototype._excelPageService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExcelDocumentComponent = /** @class */ (function (_super) {
        __extends(ExcelDocumentComponent, _super);
        function ExcelDocumentComponent(_elementRef, zoomService, windowService, navigateService, renderer) {
            var _this = _super.call(this, _elementRef, zoomService, windowService, navigateService) || this;
            _this.renderer = renderer;
            _this.panzoom = null;
            _this.navigateService = navigateService;
            return _this;
        }
        /**
         * @return {?}
         */
        ExcelDocumentComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.currentPageNo = 1;
        };
        /**
         * @return {?}
         */
        ExcelDocumentComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.refreshExcelDocHeight();
            this.pages.changes.subscribe((/**
             * @return {?}
             */
            function () {
                _this.refreshExcelDocHeight();
            }));
            this.navigateService.navigate.subscribe((((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value) {
                    _this.selectSheet(value);
                }
            }))));
            /** @type {?} */
            var scrollbarWidth = this.getScrollBarWidth();
            this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.sheets'), 'right', this.getScrollBarWidth() + 'px');
            this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.sheets'), 'bottom', this.getScrollBarWidth() + 'px');
            if (scrollbarWidth === 0) {
                this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.sheets'), 'padding-right', '17px');
            }
        };
        /**
         * @return {?}
         */
        ExcelDocumentComponent.prototype.getScrollBarWidth = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var documentBox = (/** @type {?} */ (document.querySelector('.gd-document')));
            /** @type {?} */
            var scrollbarWidth = documentBox.offsetWidth - documentBox.clientWidth;
            return scrollbarWidth;
        };
        /**
         * @return {?}
         */
        ExcelDocumentComponent.prototype.refreshExcelDocHeight = /**
         * @return {?}
         */
        function () {
            // For current iteration we'll change actual height of .document
            this.doc = this._elementRef.nativeElement.children.item(0);
            this.panzoom = this._elementRef.nativeElement.children.item(0).children.item(0);
            // magic number 37 is the height of the bottom-bar with navigation between pages
            this.doc.style.height = this.panzoom.scrollHeight + 37 + "px";
        };
        /**
         * @param {?} number
         * @return {?}
         */
        ExcelDocumentComponent.prototype.selectSheet = /**
         * @param {?} number
         * @return {?}
         */
        function (number) {
            this.currentPageNo = number;
        };
        ExcelDocumentComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-excel-document',
                        template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\">\n  <div [ngClass]=\"isDesktop ? 'panzoom auto-height' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\n    <div [ngClass]=\"file.showGridLines ? 'page-grid-lines' : 'page'\" *ngFor=\"let page of file?.pages\"\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\">\n      <gd-excel-page *ngIf=\"currentPageNo == page.number\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-excel-page>\n    </div>\n  </div>\n</div>\n<div class=\"sheets\">\n  <div class=\"sheets-wrapper\">\n    <div *ngFor=\"let page of file?.pages\">\n      <gd-button [icon]=\"'eye'\" [ngClass]=\"{'active': currentPageNo == page.number }\" (click)=\"selectSheet(page.number)\">{{page.sheetName}}</gd-button>\n    </div>\n  </div>\n</div>\n",
                        styles: [":host{overflow:scroll;width:100%;background-color:#e7e7e7}.document{width:100%;-webkit-transition:.4s;transition:.4s;padding:0;margin:0;position:relative}.sheets{background-color:#fff;display:-webkit-box;display:flex;border-top:1px solid #e7e7e7;position:fixed;width:100%}.sheets ::ng-deep gd-button.active .text{background-color:#272727;border-radius:10px;color:#eee}.sheets ::ng-deep gd-button .text{padding:1px 12px;color:#000}.sheets ::ng-deep gd-button fa-icon{display:none}.sheets-wrapper{margin-left:29px;display:-webkit-box;display:flex}.page{position:relative;display:inline-block;background-color:#fff;-webkit-transition:.3s;transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom.auto-height{-webkit-transform:none;transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;display:-webkit-box;display:flex;flex-wrap:wrap;height:auto!important}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}.page-grid-lines{background-color:#fff}@media (max-width:1037px){.document{overflow-x:auto!important}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
                    }] }
        ];
        /** @nocollapse */
        ExcelDocumentComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: commonComponents.ZoomService },
            { type: commonComponents.WindowService },
            { type: commonComponents.NavigateService },
            { type: core.Renderer2 }
        ]; };
        ExcelDocumentComponent.propDecorators = {
            pages: [{ type: core.ViewChildren, args: [ExcelPageComponent,] }]
        };
        return ExcelDocumentComponent;
    }(commonComponents.DocumentComponent));
    if (false) {
        /** @type {?} */
        ExcelDocumentComponent.prototype.pages;
        /** @type {?} */
        ExcelDocumentComponent.prototype.currentPageNo;
        /** @type {?} */
        ExcelDocumentComponent.prototype.panzoom;
        /** @type {?} */
        ExcelDocumentComponent.prototype.navigateService;
        /**
         * @type {?}
         * @private
         */
        ExcelDocumentComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var $ = jquery;
    var RunPresentationComponent = /** @class */ (function () {
        function RunPresentationComponent(_elementRef, _zoomService, _windowService, _navigateService) {
            var _this = this;
            this._elementRef = _elementRef;
            this._zoomService = _zoomService;
            this._windowService = _windowService;
            this._navigateService = _navigateService;
            this.selectedPage = new core.EventEmitter();
            this.wait = false;
            this.container = null;
            this.doc = null;
            _zoomService.zoomChange.subscribe((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                _this.zoom = val;
                if (val !== 100) {
                    if (_this.currentPage !== 1) {
                        _this.scrollTo(_this.currentPage, true, false);
                    }
                }
            }));
            this.isDesktop = _windowService.isDesktop();
            this._navigateService.navigate.subscribe(((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.scrollTo(value, value > _this.lastCurrentPage);
                _this.lastCurrentPage = value;
            })));
        }
        /**
         * @return {?}
         */
        RunPresentationComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.lastCurrentPage = this._navigateService.currentPage;
        };
        /**
         * @return {?}
         */
        RunPresentationComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        RunPresentationComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            // For current iteration we take .panzoom as a document
            this.doc = this._elementRef.nativeElement.children.item(0).children.item(0);
            // For current iteration we take .gd-document as a container
            this.container = this._elementRef.nativeElement;
            /** @type {?} */
            var hammer = new Hammer(this.container);
        };
        /**
         * @return {?}
         */
        RunPresentationComponent.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var elementNodeListOf = this._elementRef.nativeElement.querySelectorAll('.gd-wrapper');
            /** @type {?} */
            var element = elementNodeListOf.item(0);
            if (element) {
                $(element).trigger('focus');
            }
        };
        /**
         * @param {?} pageNumber
         * @param {?} onRight
         * @param {?=} animate
         * @return {?}
         */
        RunPresentationComponent.prototype.scrollTo = /**
         * @param {?} pageNumber
         * @param {?} onRight
         * @param {?=} animate
         * @return {?}
         */
        function (pageNumber, onRight, animate) {
            if (animate === void 0) { animate = true; }
            /** @type {?} */
            var pagesWidth = this._elementRef.nativeElement.offsetWidth * (pageNumber - 1);
            /** @type {?} */
            var startingX = onRight ? pagesWidth - this._elementRef.nativeElement.offsetWidth : pagesWidth + this._elementRef.nativeElement.offsetWidth;
            this.doScrolling(pagesWidth, startingX, 500, new rxjs.Subject(), this._elementRef, animate);
            this.selectedPage.emit(pageNumber);
        };
        /**
         * @private
         * @param {?} elementX
         * @param {?} startingX
         * @param {?} duration
         * @param {?} subject
         * @param {?} _elementRef
         * @param {?=} animate
         * @return {?}
         */
        RunPresentationComponent.prototype.doScrolling = /**
         * @private
         * @param {?} elementX
         * @param {?} startingX
         * @param {?} duration
         * @param {?} subject
         * @param {?} _elementRef
         * @param {?=} animate
         * @return {?}
         */
        function (elementX, startingX, duration, subject, _elementRef, animate) {
            if (animate === void 0) { animate = true; }
            /** @type {?} */
            var diff = elementX - startingX;
            /** @type {?} */
            var start;
            if (!animate) {
                _elementRef.nativeElement.scrollTo({ left: startingX + diff });
            }
            else {
                window.requestAnimationFrame((/**
                 * @param {?} timestamp
                 * @return {?}
                 */
                function step(timestamp) {
                    start = (!start) ? timestamp : start;
                    /** @type {?} */
                    var time = timestamp - start;
                    /** @type {?} */
                    var percent = Math.min(time / duration, 1);
                    _elementRef.nativeElement.scrollTo({ left: startingX + diff * percent });
                    if (time < duration) {
                        window.requestAnimationFrame(step);
                        subject.next({});
                    }
                    else {
                        subject.complete();
                    }
                }));
            }
        };
        /**
         * @param {?} value
         * @param {?} pageNumber
         * @return {?}
         */
        RunPresentationComponent.prototype.getDimensionWithUnit = /**
         * @param {?} value
         * @param {?} pageNumber
         * @return {?}
         */
        function (value, pageNumber) {
            return value + (this.mode ? commonComponents.FileUtil.find(this.file.guid, false).unit : 'px');
        };
        /**
         * @param {?} page
         * @return {?}
         */
        RunPresentationComponent.prototype.isVertical = /**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            return page.height > page.width;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        RunPresentationComponent.prototype.onPanLeft = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if ($event.isFinal) {
                this._navigateService.nextPage();
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        RunPresentationComponent.prototype.onPanRight = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if ($event.isFinal) {
                this._navigateService.prevPage();
            }
        };
        RunPresentationComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-run-presentation',
                        template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" (panleft)=\"onPanLeft($event)\" (panright)=\"onPanRight($event)\">\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\n    <div [ngClass]=\"isVertical(page) ? 'page presentation vertical' : 'page presentation'\" *ngFor=\"let page of file?.pages\"\n      [style.height]=\"getDimensionWithUnit(page.height, page.number)\" [style.width]=\"getDimensionWithUnit(page.width, page.number)\" gdRotation\n      [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\" [width]=\"page.width\"\n        [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                        styles: [":host{-webkit-box-flex:1;flex:1;-webkit-transition:.4s;transition:.4s;background-color:#e7e7e7;height:100%;overflow-y:hidden;touch-action:auto!important;overflow-x:hidden}:host .document{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important;touch-action:auto!important}.page{display:inline-block;margin:20px;-webkit-transition:.3s;transition:.3s}.page ::ng-deep gd-page{box-shadow:0 3px 6px rgba(0,0,0,.16);background-color:#fff}.page.presentation{-webkit-transition:unset;transition:unset;margin:0;width:100%!important;display:-webkit-box!important;display:flex!important;-webkit-box-pack:center!important;justify-content:center!important}.page.presentation.vertical{margin:0;width:100%!important;display:-webkit-box!important;display:flex!important;-webkit-box-pack:center!important;justify-content:center!important}.page.presentation.vertical ::ng-deep [class*=\"-rotate\"]{position:unset!important;margin-right:-240px}.page.presentation.vertical ::ng-deep gd-page{height:960pt;width:540pt}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;flex-wrap:wrap;align-content:flex-start}@media (max-width:1037px){:host{overflow-y:unset}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}.page ::ng-deep .gd-wrapper{pointer-events:none}}"]
                    }] }
        ];
        /** @nocollapse */
        RunPresentationComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: commonComponents.ZoomService },
            { type: commonComponents.WindowService },
            { type: commonComponents.NavigateService }
        ]; };
        RunPresentationComponent.propDecorators = {
            mode: [{ type: core.Input }],
            preloadPageCount: [{ type: core.Input }],
            file: [{ type: core.Input }],
            currentPage: [{ type: core.Input }],
            selectedPage: [{ type: core.Output }]
        };
        return RunPresentationComponent;
    }());
    if (false) {
        /** @type {?} */
        RunPresentationComponent.prototype.mode;
        /** @type {?} */
        RunPresentationComponent.prototype.preloadPageCount;
        /** @type {?} */
        RunPresentationComponent.prototype.file;
        /** @type {?} */
        RunPresentationComponent.prototype.currentPage;
        /** @type {?} */
        RunPresentationComponent.prototype.selectedPage;
        /** @type {?} */
        RunPresentationComponent.prototype.wait;
        /** @type {?} */
        RunPresentationComponent.prototype.zoom;
        /** @type {?} */
        RunPresentationComponent.prototype.container;
        /** @type {?} */
        RunPresentationComponent.prototype.doc;
        /** @type {?} */
        RunPresentationComponent.prototype.isDesktop;
        /** @type {?} */
        RunPresentationComponent.prototype.lastCurrentPage;
        /**
         * @type {?}
         * @protected
         */
        RunPresentationComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        RunPresentationComponent.prototype._zoomService;
        /**
         * @type {?}
         * @private
         */
        RunPresentationComponent.prototype._windowService;
        /**
         * @type {?}
         * @private
         */
        RunPresentationComponent.prototype._navigateService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var AR = {
        "Click": "انقر",
        "to open file": "لفتح الملف",
        "Or drop file here": "أو قم بإسقاط الملف هنا",
        "Browse files": "تصفح ملفات",
        "Zoom In": "تكبير",
        "Zoom Out": "تصغير",
        "First Page": "الصفحة الأولى",
        "Previous Page": "الصفحة السابقة",
        "Next Page": "الصفحة التالية",
        "Last Page": "آخر صفحة",
        "Rotate CCW": "تدوير CCW",
        "Rotate CW": "تدوير CW",
        "Download": "تحميل",
        "Print": "مطبعة",
        "Search": "بحث",
        "Run presentation": "تشغيل العرض التقديمي",
        "Present": "الحالي",
        "Stop": "قف",
        "Stop presenting": "توقف عن التقديم",
        "Resume presenting": "استئناف التقديم",
        "Pause presenting": "توقف مؤقتًا عن التقديم",
        "None": "لا أحد",
        "5 sec": "5 ثوانى",
        "10 sec": "10 ثوانى",
        "15 sec": "15 ثانية",
        "30 sec": "30 ثانية",
        "Thumbnails": "المصغرات"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CA = {
        "Click": "Feu clic a",
        "to open file": "per obrir el fitxer",
        "Or drop file here": "O deixeu anar el fitxer aquí",
        "Browse files": "Cercar fitxers",
        "Zoom In": "Apropar",
        "Zoom Out": "Disminuir el zoom",
        "First Page": "Primera pàgina",
        "Previous Page": "Pàgina anterior",
        "Next Page": "Pàgina següent",
        "Last Page": "Darrera pàgina",
        "Rotate CCW": "Gira CCW",
        "Rotate CW": "Gira CW",
        "Download": "descarregar",
        "Print": "Imprimir",
        "Search": "Cerca",
        "Run presentation": "Executa la presentació",
        "Present": "Present",
        "Stop": "Atura",
        "Stop presenting": "Deixa de presentar-te",
        "Resume presenting": "Reprèn la presentació",
        "Pause presenting": "Posa en pausa la presentació",
        "None": "Cap",
        "5 sec": "5 seg",
        "10 sec": "10 seg",
        "15 sec": "15 seg",
        "30 sec": "30 seg",
        "Thumbnails": "Miniatures"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CS = {
        "Click": "Klikněte",
        "to open file": "k otevření souboru",
        "Or drop file here": "Nebo sem přetáhněte soubor",
        "Browse files": "Procházet soubory",
        "Zoom In": "Přiblížit",
        "Zoom Out": "Oddálit",
        "First Page": "První strana",
        "Previous Page": "Předchozí stránka",
        "Next Page": "Další strana",
        "Last Page": "Poslední strana",
        "Rotate CCW": "Otočit CCW",
        "Rotate CW": "Otočit CW",
        "Download": "Stažení",
        "Print": "Tisk",
        "Search": "Vyhledávání",
        "Run presentation": "Spustit prezentaci",
        "Present": "Současnost, dárek",
        "Stop": "Stop",
        "Stop presenting": "Přestaňte prezentovat",
        "Resume presenting": "Obnovte prezentaci",
        "Pause presenting": "Pozastavit prezentaci",
        "None": "Žádný",
        "5 sec": "5 s",
        "10 sec": "10 s",
        "15 sec": "15 s",
        "30 sec": "30 s",
        "Thumbnails": "Miniatury"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DA = {
        "Click": "Klik på",
        "to open file": "for at åbne filen",
        "Or drop file here": "Eller slip filen her",
        "Browse files": "Gennemse filer",
        "Zoom In": "Zoom ind",
        "Zoom Out": "Zoome ud",
        "First Page": "Første side",
        "Previous Page": "Forrige side",
        "Next Page": "Næste side",
        "Last Page": "Sidste side",
        "Rotate CCW": "Drej CCW",
        "Rotate CW": "Drej CW",
        "Download": "Hent",
        "Print": "Print",
        "Search": "Søg",
        "Run presentation": "Kør præsentation",
        "Present": "Til stede",
        "Stop": "Hold op",
        "Stop presenting": "Stop med at præsentere",
        "Resume presenting": "Genoptag præsentationen",
        "Pause presenting": "Hold pause med præsentationen",
        "None": "Ingen",
        "5 sec": "5 sek",
        "10 sec": "10 sek",
        "15 sec": "15 sek",
        "30 sec": "30 sek",
        "Thumbnails": "Miniaturebilleder"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DE = {
        "Click": "Klicken",
        "to open file": "Datei öffnen",
        "Or drop file here": "Oder Datei hier ablegen",
        "Browse files": "Dateien durchsuchen",
        "Zoom In": "Hineinzoomen",
        "Zoom Out": "Rauszoomen",
        "First Page": "Erste Seite",
        "Previous Page": "Vorherige Seite",
        "Next Page": "Nächste Seite",
        "Last Page": "Letzte Seite",
        "Rotate CCW": "Gegen den Uhrzeigersinn drehen",
        "Rotate CW": "Im Uhrzeigersinn drehen",
        "Download": "Herunterladen",
        "Print": "Drucken",
        "Search": "Suche",
        "Run presentation": "Präsentation ausführen",
        "Present": "Gegenwärtig",
        "Stop": "Halt",
        "Stop presenting": "Hör auf zu präsentieren",
        "Resume presenting": "Präsentation fortsetzen",
        "Pause presenting": "Präsentation unterbrechen",
        "None": "Keiner",
        "5 sec": "5 Sek.",
        "10 sec": "10 Sek.",
        "15 sec": "15 Sek.",
        "30 sec": "30 Sekunden",
        "Thumbnails": "Miniaturansichten"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var EL = {
        "Click": "Κάντε κλικ",
        "to open file": "για άνοιγμα αρχείου",
        "Or drop file here": "Or ρίξτε το αρχείο εδώ",
        "Browse files": "ΕΞΕΡΕΥΝΗΣΗ ΑΡΧΕΙΩΝ",
        "Zoom In": "Μεγέθυνση",
        "Zoom Out": "Σμίκρυνση",
        "First Page": "Πρώτη σελίδα",
        "Previous Page": "Προηγούμενη σελίδα",
        "Next Page": "Επόμενη σελίδα",
        "Last Page": "Τελευταία σελίδα",
        "Rotate CCW": "Περιστροφή CCW",
        "Rotate CW": "Περιστροφή CW",
        "Download": "Κατεβάστε",
        "Print": "Τυπώνω",
        "Search": "Αναζήτηση",
        "Run presentation": "Εκτέλεση παρουσίασης",
        "Present": "Παρόν",
        "Stop": "Να σταματήσει",
        "Stop presenting": "Σταματήστε να παρουσιάζετε",
        "Resume presenting": "Συνέχιση παρουσίασης",
        "Pause presenting": "Παύση παρουσίασης",
        "None": "Κανένας",
        "5 sec": "5 δευτ",
        "10 sec": "10 δευτ",
        "15 sec": "15 δευτ",
        "30 sec": "30 δευτ",
        "Thumbnails": "Μικρογραφίες"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var EN = {
        "Click": "Click",
        "to open file": "to open file",
        "Or drop file here": "Or drop file here",
        "Browse files": "Browse files",
        "Zoom In": "Zoom In",
        "Zoom Out": "Zoom Out",
        "First Page": "First Page",
        "Previous Page": "Previous Page",
        "Next Page": "Next Page",
        "Last Page": "Last Page",
        "Rotate CCW": "Rotate CCW",
        "Rotate CW": "Rotate CW",
        "Download": "Download",
        "Print": "Print",
        "Search": "Search",
        "Run presentation": "Run presentation",
        "Present": "Present",
        "Stop": "Stop",
        "Stop presenting": "Stop presenting",
        "Resume presenting": "Resume presenting",
        "Pause presenting": "Pause presenting",
        "None": "None",
        "5 sec": "5 sec",
        "10 sec": "10 sec",
        "15 sec": "15 sec",
        "30 sec": "30 sec",
        "Thumbnails": "Thumbnails"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ES = {
        "Click": "Hacer clic",
        "to open file": "abrir archivo",
        "Or drop file here": "O suelte el archivo aquí",
        "Browse files": "Búsqueda de archivos",
        "Zoom In": "Acercarse",
        "Zoom Out": "Disminuir el zoom",
        "First Page": "Primera página",
        "Previous Page": "Pagina anterior",
        "Next Page": "Siguiente página",
        "Last Page": "Última página",
        "Rotate CCW": "Girar CCW",
        "Rotate CW": "Girar CW",
        "Download": "Descargar",
        "Print": "Impresión",
        "Search": "Buscar",
        "Run presentation": "Ejecutar presentación",
        "Present": "Regalo",
        "Stop": "Parada",
        "Stop presenting": "Deja de presentar",
        "Resume presenting": "Reanudar la presentación",
        "Pause presenting": "Pausar presentación",
        "None": "Ninguno",
        "5 sec": "5 segundos",
        "10 sec": "10 segundos",
        "15 sec": "15 segundos",
        "30 sec": "30 segundos",
        "Thumbnails": "Miniaturas"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var FIL = {
        "Click": "Mag-click",
        "to open file": "upang buksan ang file",
        "Or drop file here": "O ihulog ang file dito",
        "Browse files": "Mag-browse ng Mga file",
        "Zoom In": "Palakihin",
        "Zoom Out": "Mag-zoom Out",
        "First Page": "Unang pahina",
        "Previous Page": "Nakaraang pahina",
        "Next Page": "Susunod na pahina",
        "Last Page": "Huling pahina",
        "Rotate CCW": "Paikutin ang CCW",
        "Rotate CW": "Paikutin ang CW",
        "Download": "Mag-download",
        "Print": "I-print",
        "Search": "Maghanap",
        "Run presentation": "Patakbuhin ang pagtatanghal",
        "Present": "Kasalukuyan",
        "Stop": "Tigilan mo na",
        "Stop presenting": "Huwag nang iharap",
        "Resume presenting": "Ipagpatuloy ang pagtatanghal",
        "Pause presenting": "I-pause ang pagtatanghal",
        "None": "Wala",
        "5 sec": "5 sec",
        "10 sec": "10 sec",
        "15 sec": "15 sec",
        "30 sec": "30 sec",
        "Thumbnails": "Mga Thumbnail"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var FR = {
        "Click": "Cliquez sur",
        "to open file": "ouvrir le fichier",
        "Or drop file here": "Ou déposez le fichier ici",
        "Browse files": "Parcourir les fichiers",
        "Zoom In": "Agrandir",
        "Zoom Out": "Dézoomer",
        "First Page": "Première page",
        "Previous Page": "Page précédente",
        "Next Page": "Page suivante",
        "Last Page": "Dernière page",
        "Rotate CCW": "Rotation dans le sens antihoraire",
        "Rotate CW": "Rotation CW",
        "Download": "Télécharger",
        "Print": "Imprimer",
        "Search": "Chercher",
        "Run presentation": "Exécuter la présentation",
        "Present": "Présent",
        "Stop": "Arrêter",
        "Stop presenting": "Arrêter de présenter",
        "Resume presenting": "Reprendre la présentation",
        "Pause presenting": "Suspendre la présentation",
        "None": "Rien",
        "5 sec": "5 secondes",
        "10 sec": "10 secondes",
        "15 sec": "15 secondes",
        "30 sec": "30 secondes",
        "Thumbnails": "Vignettes"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var HE = {
        "Click": "נְקִישָׁה",
        "to open file": "לפתיחת הקובץ",
        "Or drop file here": "או שחרר קובץ כאן",
        "Browse files": "עיון בקבצים",
        "Zoom In": "לְהִתְמַקֵד",
        "Zoom Out": "להקטין את התצוגה",
        "First Page": "עמוד ראשון",
        "Previous Page": "עמוד קודם",
        "Next Page": "עמוד הבא",
        "Last Page": "עמוד אחרון",
        "Rotate CCW": "סובב CCW",
        "Rotate CW": "סובב את CW",
        "Download": "הורד",
        "Print": "הדפס",
        "Search": "לחפש",
        "Run presentation": "הפעל מצגת",
        "Present": "מתנה",
        "Stop": "תפסיק",
        "Stop presenting": "תפסיק להציג",
        "Resume presenting": "המשך להציג",
        "Pause presenting": "השהה את ההצגה",
        "None": "אף אחד",
        "5 sec": "5 שניות",
        "10 sec": "10 שניות",
        "15 sec": "15 שניות",
        "30 sec": "30 שניות",
        "Thumbnails": "תמונות ממוזערות"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var HI = {
        "Click": "क्लिक",
        "to open file": "फ़ाइल खोलने के लिए",
        "Or drop file here": "या फ़ाइल यहाँ छोड़ें",
        "Browse files": "फाइलों में खोजें",
        "Zoom In": "ज़ूम इन",
        "Zoom Out": "ज़ूम आउट",
        "First Page": "पहला पन्ना",
        "Previous Page": "पिछला पृष्ठ",
        "Next Page": "अगला पृष्ठ",
        "Last Page": "अंतिम पृष्ठ",
        "Rotate CCW": "सीसीडब्ल्यू घुमाएँ",
        "Rotate CW": "सीडब्ल्यू घुमाएँ",
        "Download": "डाउनलोड",
        "Print": "छाप",
        "Search": "खोज",
        "Run presentation": "प्रस्तुति चलाएं",
        "Present": "वर्तमान",
        "Stop": "विराम",
        "Stop presenting": "प्रस्तुत करना बंद करें",
        "Resume presenting": "प्रस्तुत करना फिर से शुरू करें",
        "Pause presenting": "प्रस्तुत करना रोकें",
        "None": "कोई नहीं",
        "5 sec": "5 सेकंड",
        "10 sec": "10 सेकंड",
        "15 sec": "१५ सेकंड",
        "30 sec": "३० सेकंड",
        "Thumbnails": "थंबनेल"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ID = {
        "Click": "Klik",
        "to open file": "untuk membuka file",
        "Or drop file here": "Atau letakkan file di sini",
        "Browse files": "Mencari berkas",
        "Zoom In": "Perbesar",
        "Zoom Out": "Perkecil",
        "First Page": "Halaman pertama",
        "Previous Page": "Halaman sebelumnya",
        "Next Page": "Halaman selanjutnya",
        "Last Page": "Halaman terakhir",
        "Rotate CCW": "Putar CCW",
        "Rotate CW": "Putar CW",
        "Download": "Unduh",
        "Print": "Mencetak",
        "Search": "Mencari",
        "Run presentation": "Jalankan presentasi",
        "Present": "Hadiah",
        "Stop": "Berhenti",
        "Stop presenting": "Berhenti menyajikan",
        "Resume presenting": "Lanjutkan presentasi",
        "Pause presenting": "Jeda presentasi",
        "None": "Tidak ada",
        "5 sec": "5 detik",
        "10 sec": "10 detik",
        "15 sec": "15 detik",
        "30 sec": "30 detik",
        "Thumbnails": "Gambar kecil"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var IT = {
        "Click": "Clic",
        "to open file": "per aprire il file",
        "Or drop file here": "Oppure trascina il file qui",
        "Browse files": "Sfoglia i file",
        "Zoom In": "Ingrandire",
        "Zoom Out": "Rimpicciolisci",
        "First Page": "Prima pagina",
        "Previous Page": "Pagina precedente",
        "Next Page": "Pagina successiva",
        "Last Page": "Ultima pagina",
        "Rotate CCW": "Ruota in senso antiorario",
        "Rotate CW": "Ruota in senso orario",
        "Download": "Scarica",
        "Print": "Stampa",
        "Search": "Ricerca",
        "Run presentation": "Esegui presentazione",
        "Present": "Regalo",
        "Stop": "Fermare",
        "Stop presenting": "Smettila di presentare",
        "Resume presenting": "Riprendi a presentare",
        "Pause presenting": "Metti in pausa la presentazione",
        "None": "Nessuno",
        "5 sec": "5 secondi",
        "10 sec": "10 secondi",
        "15 sec": "15 secondi",
        "30 sec": "30 secondi",
        "Thumbnails": "Miniature"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var JA = {
        "Click": "クリック",
        "to open file": "ファイルを開く",
        "Or drop file here": "または、ここにファイルをドロップします",
        "Browse files": "ブラウズファイル",
        "Zoom In": "ズームイン",
        "Zoom Out": "ズームアウトする",
        "First Page": "先頭ページ",
        "Previous Page": "前のページ",
        "Next Page": "次のページ",
        "Last Page": "最後のページ",
        "Rotate CCW": "CCWを回転させる",
        "Rotate CW": "CWを回転させる",
        "Download": "ダウンロード",
        "Print": "印刷",
        "Search": "検索",
        "Run presentation": "プレゼンテーションを実行する",
        "Present": "現在",
        "Stop": "やめる",
        "Stop presenting": "提示を停止します",
        "Resume presenting": "発表を再開する",
        "Pause presenting": "提示を一時停止",
        "None": "なし",
        "5 sec": "5秒",
        "10 sec": "10秒",
        "15 sec": "15秒",
        "30 sec": "30秒",
        "Thumbnails": "サムネイル"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var KK = {
        "Click": "Шертіңіз",
        "to open file": "файлды ашу үшін",
        "Or drop file here": "Немесе файлды осында тастаңыз",
        "Browse files": "Файлдарды шолу",
        "Zoom In": "Үлкейту",
        "Zoom Out": "Кішірейту",
        "First Page": "Бірінші бет",
        "Previous Page": "Алдыңғы бет",
        "Next Page": "Келесі бет",
        "Last Page": "Соңғы бет",
        "Rotate CCW": "CCW айналдыру",
        "Rotate CW": "CW айналдыру",
        "Download": "Жүктеу",
        "Print": "Басып шығару",
        "Search": "Іздеу",
        "Run presentation": "Презентацияны іске қосыңыз",
        "Present": "Ұсыну",
        "Stop": "Тоқта",
        "Stop presenting": "Көрсетуді тоқтатыңыз",
        "Resume presenting": "Ұсынуды жалғастыру",
        "Pause presenting": "Ұсынуды кідірту",
        "None": "Ешқайсысы",
        "5 sec": "5 сек",
        "10 sec": "10 сек",
        "15 sec": "15 сек",
        "30 sec": "30 сек",
        "Thumbnails": "Нобайлар"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var KO = {
        "Click": "딸깍 하는 소리",
        "to open file": "파일을 열다",
        "Or drop file here": "또는 여기에 파일을 드롭",
        "Browse files": "파일 찾아보기",
        "Zoom In": "확대",
        "Zoom Out": "축소",
        "First Page": "첫 페이지",
        "Previous Page": "이전 페이지",
        "Next Page": "다음 페이지",
        "Last Page": "마지막 페이지",
        "Rotate CCW": "시계 반대 방향으로 회전",
        "Rotate CW": "시계 방향으로 회전",
        "Download": "다운로드",
        "Print": "인쇄",
        "Search": "찾다",
        "Run presentation": "프레젠테이션 실행",
        "Present": "현재의",
        "Stop": "중지",
        "Stop presenting": "발표 중지",
        "Resume presenting": "프레젠테이션 재개",
        "Pause presenting": "발표 일시중지",
        "None": "없음",
        "5 sec": "5초",
        "10 sec": "10초",
        "15 sec": "15초",
        "30 sec": "30초",
        "Thumbnails": "썸네일"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MS = {
        "Click": "Klik",
        "to open file": "untuk membuka fail",
        "Or drop file here": "Atau jatuhkan fail di sini",
        "Browse files": "Semak imbas fail",
        "Zoom In": "Mengezum masuk",
        "Zoom Out": "Zum keluar",
        "First Page": "Muka surat pertama",
        "Previous Page": "Halaman sebelumnya",
        "Next Page": "Muka surat seterusnya",
        "Last Page": "Muka surat terakhir",
        "Rotate CCW": "Putar CCW",
        "Rotate CW": "Putar CW",
        "Download": "Muat turun",
        "Print": "Cetak",
        "Search": "Cari",
        "Run presentation": "Jalankan persembahan",
        "Present": "Hadir",
        "Stop": "Berhenti",
        "Stop presenting": "Berhenti membentangkan",
        "Resume presenting": "Sambung semula pembentangan",
        "Pause presenting": "Jeda pembentangan",
        "None": "Tiada",
        "5 sec": "5 saat",
        "10 sec": "10 saat",
        "15 sec": "15 saat",
        "30 sec": "30 saat",
        "Thumbnails": "Gambar kecil"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NL = {
        "Click": "Klik",
        "to open file": "bestand openen",
        "Or drop file here": "Of zet het bestand hier neer",
        "Browse files": "Bestanden doorbladeren",
        "Zoom In": "In zoomen",
        "Zoom Out": "Uitzoomen",
        "First Page": "Eerste pagina",
        "Previous Page": "Vorige pagina",
        "Next Page": "Volgende bladzijde",
        "Last Page": "Laatste pagina",
        "Rotate CCW": "Linksom draaien",
        "Rotate CW": "Draai CW",
        "Download": "Downloaden",
        "Print": "Afdrukken",
        "Search": "Zoeken",
        "Run presentation": "Presentatie uitvoeren",
        "Present": "Cadeau",
        "Stop": "Stop",
        "Stop presenting": "Stop met presenteren",
        "Resume presenting": "Presentatie hervatten",
        "Pause presenting": "Presentatie pauzeren",
        "None": "Geen",
        "5 sec": "5 seconden",
        "10 sec": "10 seconden",
        "15 sec": "15 seconden",
        "30 sec": "30 seconden",
        "Thumbnails": "Miniaturen"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var PL = {
        "Click": "Kliknij",
        "to open file": "otworzyć plik",
        "Or drop file here": "Lub upuść plik tutaj",
        "Browse files": "Przeglądaj pliki",
        "Zoom In": "Zbliżenie",
        "Zoom Out": "Pomniejsz",
        "First Page": "Pierwsza strona",
        "Previous Page": "Poprzednia strona",
        "Next Page": "Następna strona",
        "Last Page": "Ostatnia strona",
        "Rotate CCW": "Obróć w lewo",
        "Rotate CW": "Obróć w prawo",
        "Download": "Pobierać",
        "Print": "Wydrukować",
        "Search": "Szukaj",
        "Run presentation": "Uruchom prezentację",
        "Present": "Obecny",
        "Stop": "Zatrzymać",
        "Stop presenting": "Zatrzymaj prezentację",
        "Resume presenting": "Wznów prezentację",
        "Pause presenting": "Wstrzymaj prezentację",
        "None": "Nic",
        "5 sec": "5 sekund",
        "10 sec": "10 sekund",
        "15 sec": "15 sekund",
        "30 sec": "30 sekund",
        "Thumbnails": "Miniatury"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var PT = {
        "Click": "Clique",
        "to open file": "para abrir arquivo",
        "Or drop file here": "Ou solte o arquivo aqui",
        "Browse files": "Navegar nos arquivos",
        "Zoom In": "Mais Zoom",
        "Zoom Out": "Reduzir o zoom",
        "First Page": "Primeira página",
        "Previous Page": "Página anterior",
        "Next Page": "Próxima página",
        "Last Page": "Última página",
        "Rotate CCW": "Girar no sentido anti-horário",
        "Rotate CW": "Girar no sentido horário",
        "Download": "Download",
        "Print": "Imprimir",
        "Search": "Procurar",
        "Run presentation": "Executar apresentação",
        "Present": "Presente",
        "Stop": "Pare",
        "Stop presenting": "Pare de apresentar",
        "Resume presenting": "Retomar apresentação",
        "Pause presenting": "Pausar apresentação",
        "None": "Nenhum",
        "5 sec": "5 s",
        "10 sec": "10 s",
        "15 sec": "15 s",
        "30 sec": "30 s",
        "Thumbnails": "Miniaturas"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var RO = {
        "Click": "Clic",
        "to open file": "pentru a deschide fișierul",
        "Or drop file here": "Sau aruncați fișierul aici",
        "Browse files": "Cauta fisiere",
        "Zoom In": "Mareste",
        "Zoom Out": "A micsora",
        "First Page": "Prima pagina",
        "Previous Page": "Pagina precedentă",
        "Next Page": "Pagina următoare",
        "Last Page": "Ultima pagina",
        "Rotate CCW": "Rotiți CCW",
        "Rotate CW": "Rotiți CW",
        "Download": "Descarca",
        "Print": "Imprimare",
        "Search": "Căutare",
        "Run presentation": "Rulați prezentarea",
        "Present": "Prezent",
        "Stop": "Stop",
        "Stop presenting": "Nu mai prezenta",
        "Resume presenting": "Reluați prezentarea",
        "Pause presenting": "Pauză prezentare",
        "None": "Nici unul",
        "5 sec": "5 sec",
        "10 sec": "10 sec",
        "15 sec": "15 sec",
        "30 sec": "30 sec",
        "Thumbnails": "Miniaturi"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var RU = {
        "Click": "Нажмите",
        "to open file": "чтобы открыть файл",
        "Or drop file here": "Или перетащите файл сюда",
        "Browse files": "Просмотр файлов",
        "Zoom In": "Увеличить",
        "Zoom Out": "Уменьшить",
        "First Page": "Первая страница",
        "Previous Page": "Предыдущая страница",
        "Next Page": "Следующая Страница",
        "Last Page": "Последняя страница",
        "Rotate CCW": "Повернуть против часовой стрелки",
        "Rotate CW": "Повернуть по часовой стрелке",
        "Download": "Скачать",
        "Print": "Распечатать",
        "Search": "Поиск",
        "Run presentation": "Запустить презентацию",
        "Present": "Запустить презентацию",
        "Stop": "Стоп",
        "Stop presenting": "Остановить презентацию",
        "Resume presenting": "Возобновить презентацию",
        "Pause presenting": "Приостановить презентацию",
        "None": "-",
        "5 sec": "5 сек.",
        "10 sec": "10 сек.",
        "15 sec": "15 сек.",
        "30 sec": "30 сек.",
        "Thumbnails": "Миниатюры"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SV = {
        "Click": "Klick",
        "to open file": "för att öppna filen",
        "Or drop file here": "Eller släpp filen här",
        "Browse files": "Bläddra bland filer",
        "Zoom In": "Zooma in",
        "Zoom Out": "Zooma ut",
        "First Page": "Första sidan",
        "Previous Page": "Föregående sida",
        "Next Page": "Nästa sida",
        "Last Page": "Sista sidan",
        "Rotate CCW": "Vrid CCW",
        "Rotate CW": "Rotera CW",
        "Download": "Ladda ner",
        "Print": "Skriva ut",
        "Search": "Sök",
        "Run presentation": "Kör presentationen",
        "Present": "Närvarande",
        "Stop": "Sluta",
        "Stop presenting": "Sluta presentera",
        "Resume presenting": "Återuppta presentationen",
        "Pause presenting": "Pausa presentationen",
        "None": "Ingen",
        "5 sec": "5 sek",
        "10 sec": "10 sek",
        "15 sec": "15 sek",
        "30 sec": "30 sek",
        "Thumbnails": "Miniatyrer"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TH = {
        "Click": "คลิก",
        "to open file": "เพื่อเปิดไฟล์",
        "Or drop file here": "หรือวางไฟล์ที่นี่",
        "Browse files": "เรียกดูไฟล์",
        "Zoom In": "ขยายเข้า",
        "Zoom Out": "ซูมออก",
        "First Page": "หน้าแรก",
        "Previous Page": "หน้าก่อน",
        "Next Page": "หน้าต่อไป",
        "Last Page": "หน้าสุดท้าย",
        "Rotate CCW": "หมุนทวนเข็มนาฬิกา",
        "Rotate CW": "หมุน CW",
        "Download": "ดาวน์โหลด",
        "Print": "พิมพ์",
        "Search": "ค้นหา",
        "Run presentation": "เรียกใช้การนำเสนอ",
        "Present": "ปัจจุบัน",
        "Stop": "หยุด",
        "Stop presenting": "หยุดนำเสนอ",
        "Resume presenting": "นำเสนอต่อ",
        "Pause presenting": "หยุดการนำเสนอชั่วคราว",
        "None": "ไม่มี",
        "5 sec": "5 วินาที",
        "10 sec": "10 วินาที",
        "15 sec": "15 วินาที",
        "30 sec": "30 วินาที",
        "Thumbnails": "รูปขนาดย่อ"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TR = {
        "Click": "Tıklamak",
        "to open file": "dosyayı açmak için",
        "Or drop file here": "Veya dosyayı buraya bırakın",
        "Browse files": "Dosyalara göz atın",
        "Zoom In": "Yakınlaştır",
        "Zoom Out": "Uzaklaştırmak",
        "First Page": "İlk sayfa",
        "Previous Page": "Önceki sayfa",
        "Next Page": "Sonraki Sayfa",
        "Last Page": "Son Sayfa",
        "Rotate CCW": "CCW'yi döndür",
        "Rotate CW": "CW'yi döndür",
        "Download": "İndirmek",
        "Print": "Yazdır",
        "Search": "Arama",
        "Run presentation": "Sunuyu çalıştır",
        "Present": "Sunmak",
        "Stop": "Durmak",
        "Stop presenting": "Sunmayı durdur",
        "Resume presenting": "Sunuma devam et",
        "Pause presenting": "Sunumu duraklat",
        "None": "Hiçbiri",
        "5 sec": "5 saniye",
        "10 sec": "10 saniye",
        "15 sec": "15 saniye",
        "30 sec": "30 saniye",
        "Thumbnails": "küçük resimler"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var UK = {
        "Click": "Клікніть",
        "to open file": "щоб відкрити файл",
        "Or drop file here": "Або перетягніть файл у цю область",
        "Browse files": "Переглянути файли",
        "Zoom In": "Збільшити",
        "Zoom Out": "Зменшити",
        "First Page": "Перша сторінка",
        "Previous Page": "Попередня сторінка",
        "Next Page": "Наступна сторінка",
        "Last Page": "Остання сторінка",
        "Rotate CCW": "Повернути проти годинникової стрілки",
        "Rotate CW": "Повернути за годинниковою стрілкою",
        "Download": "Завантажити",
        "Print": "Друк",
        "Search": "Пошук",
        "Run presentation": "Запустити презентацію",
        "Present": "Запустити презентацію",
        "Stop": "Зупинити",
        "Stop presenting": "Зупинити презентацію",
        "Resume presenting": "Продовжити презентацію",
        "Pause presenting": "Призупинити презентацію",
        "None": "-",
        "5 sec": "5 секунд",
        "10 sec": "10 секунд",
        "15 sec": "15 секунд",
        "30 sec": "30 секунд",
        "Thumbnails": "Ескізи",
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var VI = {
        "Click": "Nhấp chuột",
        "to open file": "để mở tệp",
        "Or drop file here": "Hoặc thả tệp vào đây",
        "Browse files": "Duyệt qua các tệp",
        "Zoom In": "Phóng to",
        "Zoom Out": "Thu nhỏ",
        "First Page": "Trang đầu tiên",
        "Previous Page": "Trang trước",
        "Next Page": "Trang tiếp theo",
        "Last Page": "Trang cuối",
        "Rotate CCW": "Xoay CCW",
        "Rotate CW": "Xoay CW",
        "Download": "Tải xuống",
        "Print": "In",
        "Search": "Tìm kiếm",
        "Run presentation": "Chạy bản trình bày",
        "Present": "Món quà",
        "Stop": "Ngừng lại",
        "Stop presenting": "Dừng trình bày",
        "Resume presenting": "Tiếp tục trình bày",
        "Pause presenting": "Tạm dừng trình bày",
        "None": "Không có",
        "5 sec": "5 giây",
        "10 sec": "10 giây",
        "15 sec": "15 giây",
        "30 sec": "30 giây",
        "Thumbnails": "Hình thu nhỏ"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ZHHANS = {
        "Click": "点击",
        "to open file": "打开文件",
        "Or drop file here": "或将文件拖放到此处",
        "Browse files": "浏览文件",
        "Zoom In": "放大",
        "Zoom Out": "缩小",
        "First Page": "第一页",
        "Previous Page": "上一页",
        "Next Page": "下一页",
        "Last Page": "最后一页",
        "Rotate CCW": "逆时针旋转",
        "Rotate CW": "顺时针旋转",
        "Download": "下载",
        "Print": "打印",
        "Search": "搜索",
        "Run presentation": "运行演示",
        "Present": "展示",
        "Stop": "停止",
        "Stop presenting": "停止展示",
        "Resume presenting": "简历展示",
        "Pause presenting": "暂停演示",
        "None": "没有任何",
        "5 sec": "5 秒",
        "10 sec": "10 秒",
        "15 sec": "15 秒",
        "30 sec": "30 秒",
        "Thumbnails": "缩略图"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ZHHANT = {
        "Click": "點擊",
        "to open file": "打開文件",
        "Or drop file here": "或將文件拖放到此處",
        "Browse files": "瀏覽文件",
        "Zoom In": "放大",
        "Zoom Out": "縮小",
        "First Page": "第一頁",
        "Previous Page": "上一頁",
        "Next Page": "下一頁",
        "Last Page": "最後一頁",
        "Rotate CCW": "逆時針旋轉",
        "Rotate CW": "順時針旋轉",
        "Download": "下載",
        "Print": "打印",
        "Search": "搜索",
        "Run presentation": "運行演示",
        "Present": "展示",
        "Stop": "停止",
        "Stop presenting": "停止展示",
        "Resume presenting": "簡歷展示",
        "Pause presenting": "暫停演示",
        "None": "沒有任何",
        "5 sec": "5 秒",
        "10 sec": "10 秒",
        "15 sec": "15 秒",
        "30 sec": "30 秒",
        "Thumbnails": "縮略圖"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} viewerConfigService
     * @return {?}
     */
    function initializeApp(viewerConfigService) {
        /** @type {?} */
        var result = (/**
         * @return {?}
         */
        function () { return viewerConfigService.load(); });
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
    // AoT requires an exported function for factories
    /**
     * @return {?}
     */
    function StaticTranslateLoaderFactory() {
        /** @type {?} */
        var translations = {};
        translations['ar'] = AR;
        translations['ca'] = CA;
        translations['cs'] = CS;
        translations['da'] = DA;
        translations['de'] = DE;
        translations['el'] = EL;
        translations['en'] = EN;
        translations['es'] = ES;
        translations['fil'] = FIL;
        translations['fr'] = FR;
        translations['he'] = HE;
        translations['hi'] = HI;
        translations['id'] = ID;
        translations['it'] = IT;
        translations['ja'] = JA;
        translations['kk'] = KK;
        translations['ko'] = KO;
        translations['ms'] = MS;
        translations['nl'] = NL;
        translations['pl'] = PL;
        translations['pt'] = PT;
        translations['ro'] = RO;
        translations['ru'] = RU;
        translations['sv'] = SV;
        translations['th'] = TH;
        translations['tr'] = TR;
        translations['uk'] = UK;
        translations['vi'] = VI;
        translations['zh-hans'] = ZHHANS;
        translations['zh-hant'] = ZHHANT;
        return new commonComponents.StaticTranslateLoader(translations);
    }
    var ɵ0 = window;
    var ViewerModule = /** @class */ (function () {
        function ViewerModule() {
        }
        /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        ViewerModule.forRoot = /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        function (apiEndpoint) {
            commonComponents.Api.DEFAULT_API_ENDPOINT = apiEndpoint;
            return {
                ngModule: ViewerModule
            };
        };
        ViewerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            ViewerAppComponent,
                            ThumbnailsComponent,
                            RunPresentationComponent,
                            ExcelDocumentComponent,
                            ExcelPageComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
                            commonComponents.CommonComponentsModule,
                            http.HttpClientModule,
                            angularFontawesome.FontAwesomeModule,
                            core$1.TranslateModule.forRoot({
                                loader: {
                                    provide: core$1.TranslateLoader,
                                    useFactory: StaticTranslateLoaderFactory
                                }
                            })
                        ],
                        exports: [
                            ViewerAppComponent,
                            ThumbnailsComponent,
                            RunPresentationComponent,
                            ExcelDocumentComponent,
                            ExcelPageComponent,
                            commonComponents.CommonComponentsModule
                        ],
                        providers: [
                            ViewerService,
                            commonComponents.ConfigService,
                            ViewerConfigService,
                            {
                                provide: http.HTTP_INTERCEPTORS,
                                useClass: commonComponents.ErrorInterceptorService,
                                multi: true
                            },
                            {
                                provide: core.APP_INITIALIZER,
                                useFactory: initializeApp,
                                deps: [ViewerConfigService], multi: true
                            },
                            commonComponents.LoadingMaskService,
                            {
                                provide: http.HTTP_INTERCEPTORS,
                                useFactory: setupLoadingInterceptor,
                                multi: true,
                                deps: [commonComponents.LoadingMaskService]
                            },
                            { provide: Window, useValue: ɵ0 },
                        ]
                    },] }
        ];
        return ViewerModule;
    }());

    exports.StaticTranslateLoaderFactory = StaticTranslateLoaderFactory;
    exports.ViewerAppComponent = ViewerAppComponent;
    exports.ViewerConfigService = ViewerConfigService;
    exports.ViewerModule = ViewerModule;
    exports.ViewerService = ViewerService;
    exports.initializeApp = initializeApp;
    exports.setupLoadingInterceptor = setupLoadingInterceptor;
    exports.ɵa = ThumbnailsComponent;
    exports.ɵb = RunPresentationComponent;
    exports.ɵc = ExcelDocumentComponent;
    exports.ɵd = ExcelPageComponent;
    exports.ɵe = ExcelPageService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=groupdocs.examples.angular-viewer.umd.js.map
