(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('@angular/common/http'), require('@groupdocs.examples.angular/common-components'), require('rxjs'), require('jquery'), require('@fortawesome/angular-fontawesome'), require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/free-regular-svg-icons')) :
    typeof define === 'function' && define.amd ? define('@groupdocs.examples.angular/editor', ['exports', '@angular/platform-browser', '@angular/core', '@angular/common/http', '@groupdocs.examples.angular/common-components', 'rxjs', 'jquery', '@fortawesome/angular-fontawesome', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-regular-svg-icons'], factory) :
    (global = global || self, factory((global.groupdocs = global.groupdocs || {}, global.groupdocs.examples = global.groupdocs.examples || {}, global.groupdocs.examples.angular = global.groupdocs.examples.angular || {}, global.groupdocs.examples.angular.editor = {}), global.ng.platformBrowser, global.ng.core, global.ng.common.http, global.commonComponents, global.rxjs, global.jquery, global.angularFontawesome, global.fontawesomeSvgCore, global.freeSolidSvgIcons, global.freeRegularSvgIcons));
}(this, (function (exports, platformBrowser, core, http, commonComponents, rxjs, jquery, angularFontawesome, fontawesomeSvgCore, freeSolidSvgIcons, freeRegularSvgIcons) { 'use strict';

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
    var EditorService = /** @class */ (function () {
        function EditorService(_http, _config) {
            this._http = _http;
            this._config = _config;
        }
        /**
         * @param {?} path
         * @return {?}
         */
        EditorService.prototype.loadFiles = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            return this._http.post(this._config.getEditorApiEndpoint() + commonComponents.Api.LOAD_FILE_TREE, { 'path': path }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @return {?}
         */
        EditorService.prototype.getFormats = /**
         * @return {?}
         */
        function () {
            return this._http.get(this._config.getEditorApiEndpoint() + commonComponents.Api.LOAD_FORMATS, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        EditorService.prototype.loadFile = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._http.post(this._config.getEditorApiEndpoint() + commonComponents.Api.LOAD_DOCUMENT_DESCRIPTION, credentials, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} file
         * @param {?} url
         * @param {?} rewrite
         * @return {?}
         */
        EditorService.prototype.upload = /**
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
            return this._http.post(this._config.getEditorApiEndpoint() + commonComponents.Api.UPLOAD_DOCUMENTS, formData);
        };
        /**
         * @param {?} file
         * @return {?}
         */
        EditorService.prototype.save = /**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            return this._http.post(this._config.getEditorApiEndpoint() + commonComponents.Api.SAVE_FILE, file, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} file
         * @return {?}
         */
        EditorService.prototype.create = /**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            return this._http.post(this._config.getEditorApiEndpoint() + commonComponents.Api.CREATE_FILE, file, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        EditorService.prototype.getDownloadUrl = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._config.getEditorApiEndpoint() + commonComponents.Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
        };
        EditorService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EditorService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ EditorService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function EditorService_Factory() { return new EditorService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: EditorService, providedIn: "root" });
        return EditorService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        EditorService.prototype._http;
        /**
         * @type {?}
         * @private
         */
        EditorService.prototype._config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EditorConfig = /** @class */ (function () {
        function EditorConfig() {
        }
        return EditorConfig;
    }());
    if (false) {
        /** @type {?} */
        EditorConfig.prototype.rewrite;
        /** @type {?} */
        EditorConfig.prototype.pageSelector;
        /** @type {?} */
        EditorConfig.prototype.download;
        /** @type {?} */
        EditorConfig.prototype.upload;
        /** @type {?} */
        EditorConfig.prototype.print;
        /** @type {?} */
        EditorConfig.prototype.browse;
        /** @type {?} */
        EditorConfig.prototype.enableRightClick;
        /** @type {?} */
        EditorConfig.prototype.filesDirectory;
        /** @type {?} */
        EditorConfig.prototype.fontsDirectory;
        /** @type {?} */
        EditorConfig.prototype.defaultDocument;
        /** @type {?} */
        EditorConfig.prototype.createNewFile;
        /** @type {?} */
        EditorConfig.prototype.preloadPageCount;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EditorConfigService = /** @class */ (function () {
        function EditorConfigService(_http, _config) {
            this._http = _http;
            this._config = _config;
            this._editorConfig = new rxjs.BehaviorSubject(new EditorConfig());
            this._updatedConfig = this._editorConfig.asObservable();
        }
        Object.defineProperty(EditorConfigService.prototype, "updatedConfig", {
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
        EditorConfigService.prototype.load = /**
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
                var configEndpoint = _this._config.getConfigEndpoint(commonComponents.Api.EDITOR_APP);
                _this._http.get(configEndpoint, commonComponents.Api.httpOptionsJson).toPromise().then((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    /** @type {?} */
                    var editorConfig = (/** @type {?} */ (response));
                    _this._editorConfig.next(editorConfig);
                    resolve();
                })).catch((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    reject("Could not load editor config: " + JSON.stringify(response));
                }));
            }));
        };
        EditorConfigService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EditorConfigService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ EditorConfigService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function EditorConfigService_Factory() { return new EditorConfigService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: EditorConfigService, providedIn: "root" });
        return EditorConfigService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        EditorConfigService.prototype._editorConfig;
        /**
         * @type {?}
         * @private
         */
        EditorConfigService.prototype._updatedConfig;
        /**
         * @type {?}
         * @private
         */
        EditorConfigService.prototype._http;
        /**
         * @type {?}
         * @private
         */
        EditorConfigService.prototype._config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var $ = jquery;
    var EditorAppComponent = /** @class */ (function () {
        function EditorAppComponent(_editorService, _modalService, configService, uploadFilesService, passwordService, _windowService, _formattingService, _backFormattingService, _onCloseService, _selectionService, _htmlService, _renderPrintService, _loadingMaskService) {
            var _this = this;
            this._editorService = _editorService;
            this._modalService = _modalService;
            this._windowService = _windowService;
            this._formattingService = _formattingService;
            this._backFormattingService = _backFormattingService;
            this._onCloseService = _onCloseService;
            this._selectionService = _selectionService;
            this._htmlService = _htmlService;
            this._renderPrintService = _renderPrintService;
            this._loadingMaskService = _loadingMaskService;
            this.title = 'editor';
            this.files = [];
            this.formatDisabled = !this.file;
            this.downloadDisabled = true;
            this.browseFilesModal = commonComponents.CommonModals.BrowseFiles;
            this.formatting = commonComponents.Formatting.default();
            this.fontSizeOptions = commonComponents.FormattingService.getFontSizeOptions();
            this.fontOptions = commonComponents.FormattingService.getFontOptions();
            this.bgColorPickerShow = false;
            this.colorPickerShow = false;
            this.active = false;
            this.isIE = false;
            this.selectFontShow = false;
            this.selectFontSizeShow = false;
            this.newFile = false;
            this.isIE = /*@cc_on!@*/ false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
            configService.updatedConfig.subscribe((/**
             * @param {?} editorConfig
             * @return {?}
             */
            function (editorConfig) {
                _this.editorConfig = editorConfig;
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
                        _this._editorService.upload(uploads.item(i), '', _this.editorConfig.rewrite).subscribe((/**
                         * @param {?} obj
                         * @return {?}
                         */
                        function (obj) {
                            _this.fileWasDropped ? _this.selectFile(obj.guid, '', '') : _this.selectDir('');
                        }));
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
             * @param {?} w
             * @return {?}
             */
            function (w) {
                _this.isDesktop = _windowService.isDesktop();
            }));
            this._backFormattingService.formatBoldChange.subscribe((/**
             * @param {?} bold
             * @return {?}
             */
            function (bold) {
                _this.formatting.bold = bold;
            }));
            this._backFormattingService.formatItalicChange.subscribe((/**
             * @param {?} italic
             * @return {?}
             */
            function (italic) {
                _this.formatting.italic = italic;
            }));
            this._backFormattingService.formatUnderlineChange.subscribe((/**
             * @param {?} underline
             * @return {?}
             */
            function (underline) {
                _this.formatting.underline = underline;
            }));
            this._backFormattingService.formatColorChange.subscribe((/**
             * @param {?} color
             * @return {?}
             */
            function (color) {
                _this.formatting.color = color;
            }));
            this._backFormattingService.formatBgColorChange.subscribe((/**
             * @param {?} bgcolor
             * @return {?}
             */
            function (bgcolor) {
                _this.formatting.bgColor = bgcolor;
            }));
            this._backFormattingService.formatFontSizeChange.subscribe((/**
             * @param {?} fontSize
             * @return {?}
             */
            function (fontSize) {
                _this.formatting.fontSize = fontSize;
            }));
            this._backFormattingService.formatFontChange.subscribe((/**
             * @param {?} font
             * @return {?}
             */
            function (font) {
                _this.formatting.font = font;
            }));
            this._backFormattingService.formatStrikeoutChange.subscribe((/**
             * @param {?} strikeout
             * @return {?}
             */
            function (strikeout) {
                _this.formatting.strikeout = strikeout;
            }));
            this._backFormattingService.formatAlignChange.subscribe((/**
             * @param {?} align
             * @return {?}
             */
            function (align) {
                _this.formatting.align = align;
            }));
            this._backFormattingService.formatListChange.subscribe((/**
             * @param {?} list
             * @return {?}
             */
            function (list) {
                _this.formatting.list = list;
            }));
            this._formattingService.formatBoldChange.subscribe((/**
             * @param {?} bold
             * @return {?}
             */
            function (bold) {
                _this.formatting.bold = bold;
            }));
            this._formattingService.formatItalicChange.subscribe((/**
             * @param {?} italic
             * @return {?}
             */
            function (italic) {
                _this.formatting.italic = italic;
            }));
            this._formattingService.formatUnderlineChange.subscribe((/**
             * @param {?} underline
             * @return {?}
             */
            function (underline) {
                _this.formatting.underline = underline;
            }));
            this._formattingService.formatColorChange.subscribe((/**
             * @param {?} color
             * @return {?}
             */
            function (color) {
                _this.formatting.color = color;
            }));
            this._formattingService.formatBgColorChange.subscribe((/**
             * @param {?} bgcolor
             * @return {?}
             */
            function (bgcolor) {
                _this.formatting.bgColor = bgcolor;
            }));
            this._formattingService.formatFontSizeChange.subscribe((/**
             * @param {?} fontSize
             * @return {?}
             */
            function (fontSize) {
                _this.formatting.fontSize = fontSize;
            }));
            this._formattingService.formatFontChange.subscribe((/**
             * @param {?} font
             * @return {?}
             */
            function (font) {
                _this.formatting.font = font;
            }));
            this._formattingService.formatStrikeoutChange.subscribe((/**
             * @param {?} strikeout
             * @return {?}
             */
            function (strikeout) {
                _this.formatting.strikeout = strikeout;
            }));
            this._formattingService.formatAlignChange.subscribe((/**
             * @param {?} align
             * @return {?}
             */
            function (align) {
                _this.formatting.align = align;
            }));
            this._formattingService.formatListChange.subscribe((/**
             * @param {?} list
             * @return {?}
             */
            function (list) {
                _this.formatting.list = list;
            }));
            this._htmlService.htmlContent.subscribe((/**
             * @param {?} text
             * @return {?}
             */
            function (text) {
                if (_this.file && _this.file.pages) {
                    _this.textBackup = text;
                }
            }));
        }
        /**
         * @return {?}
         */
        EditorAppComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (this.editorConfig.defaultDocument !== "") {
                this.isLoading = true;
                this.selectFile(this.editorConfig.defaultDocument, "", "");
            }
        };
        /**
         * @return {?}
         */
        EditorAppComponent.prototype.ngAfterViewInit = /**
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
        Object.defineProperty(EditorAppComponent.prototype, "rewriteConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.editorConfig ? this.editorConfig.rewrite : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorAppComponent.prototype, "downloadConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.editorConfig ? this.editorConfig.download : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorAppComponent.prototype, "uploadConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.editorConfig ? this.editorConfig.upload : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorAppComponent.prototype, "printConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.editorConfig ? this.editorConfig.print : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorAppComponent.prototype, "browseConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.editorConfig ? this.editorConfig.browse : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorAppComponent.prototype, "enableRightClickConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.editorConfig ? this.editorConfig.enableRightClick : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorAppComponent.prototype, "pageSelectorConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.editorConfig ? this.editorConfig.pageSelector : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorAppComponent.prototype, "createNewFileConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.editorConfig ? this.editorConfig.createNewFile : true;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} id
         * @return {?}
         */
        EditorAppComponent.prototype.openModal = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            if (this.file) {
                this.file.pages[0].editable = false;
            }
            this._modalService.open(id);
        };
        /**
         * @return {?}
         */
        EditorAppComponent.prototype.openSave = /**
         * @return {?}
         */
        function () {
            if (!this.formatDisabled) {
                this.openModal(commonComponents.CommonModals.CreateDocument);
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        EditorAppComponent.prototype.selectDir = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this._editorService.loadFiles($event).subscribe((/**
             * @param {?} files
             * @return {?}
             */
            function (files) { return _this.files = files || []; }));
        };
        /**
         * @private
         * @param {?} pt
         * @return {?}
         */
        EditorAppComponent.prototype.ptToPx = /**
         * @private
         * @param {?} pt
         * @return {?}
         */
        function (pt) {
            //pt * 96 / 72 = px.
            return pt * 96 / 72;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        EditorAppComponent.prototype.onRightClick = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            return this.enableRightClickConfig;
        };
        /**
         * @return {?}
         */
        EditorAppComponent.prototype.createFile = /**
         * @return {?}
         */
        function () {
            this.newFile = true;
            this.file = new commonComponents.FileDescription();
            /** @type {?} */
            var page = new commonComponents.PageModel;
            page.width = 595;
            page.height = 842;
            page.data = '<!DOCTYPE HTML><html><head></head><body></body></html>';
            page.number = 1;
            page.editable = true;
            this.file.pages = [];
            this.file.pages.push(page);
            this.file.guid = "new document.docx";
            this.credentials = new commonComponents.FileCredentials("new document.docx", "");
            this.formatDisabled = false;
            this.downloadDisabled = true;
        };
        /**
         * @param {?} $event
         * @param {?} password
         * @param {?} modalId
         * @return {?}
         */
        EditorAppComponent.prototype.selectFile = /**
         * @param {?} $event
         * @param {?} password
         * @param {?} modalId
         * @return {?}
         */
        function ($event, password, modalId) {
            var _this = this;
            this.credentials = new commonComponents.FileCredentials($event, password);
            this._editorService.loadFile(this.credentials).subscribe((/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                _this.loadFile(file);
                /** @type {?} */
                var isIE = /*@cc_on!@*/ false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
                if (isIE) {
                    /** @type {?} */
                    var observer_1 = new MutationObserver((/**
                     * @param {?} mutations
                     * @return {?}
                     */
                    function (mutations) {
                        if ($(".documentMainContent").length > 0) {
                            $(".documentMainContent").attr("contentEditable", "true");
                            observer_1.disconnect();
                        }
                    }));
                    observer_1.observe(document, { attributes: false, childList: true, characterData: false, subtree: true });
                }
            }));
            this.clearData();
            this._modalService.close(modalId);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        EditorAppComponent.prototype.fileDropped = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.fileWasDropped = $event;
        };
        /**
         * @private
         * @param {?} file
         * @return {?}
         */
        EditorAppComponent.prototype.loadFile = /**
         * @private
         * @param {?} file
         * @return {?}
         */
        function (file) {
            this.file = file;
            if (this.file && this.file.pages[0]) {
                this.file.pages[0].editable = true;
                this.file.pages[0].width = 595;
                this.file.pages[0].height = 842;
                this.textBackup = this.file.pages[0].data;
            }
            this.formatDisabled = !this.file;
            this.downloadDisabled = false;
        };
        /**
         * @private
         * @return {?}
         */
        EditorAppComponent.prototype.clearData = /**
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
         * @param {?} $event
         * @return {?}
         */
        EditorAppComponent.prototype.upload = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this._editorService.upload(null, $event, this.rewriteConfig).subscribe((/**
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
        EditorAppComponent.prototype.selectFontSize = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (this.formatDisabled)
                return;
            $(".gd-wrapper").off("keyup");
            if (this.isIE) {
                this._selectionService.restoreSelection();
                this._selectionService.captureSelection();
            }
            this._formattingService.changeFormatFontSize($event.value);
            $(".gd-wrapper").on("keyup", (/**
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
        EditorAppComponent.prototype.selectFont = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (this.formatDisabled)
                return;
            event.preventDefault();
            event.stopPropagation();
            if (this.isIE) {
                this._selectionService.restoreSelection();
                this._selectionService.captureSelection();
            }
            this._formattingService.changeFormatFont($event.value);
        };
        /**
         * @param {?} $event
         * @param {?} bg
         * @return {?}
         */
        EditorAppComponent.prototype.toggleColorPicker = /**
         * @param {?} $event
         * @param {?} bg
         * @return {?}
         */
        function ($event, bg) {
            $event.preventDefault();
            $event.stopPropagation();
            if (this.formatDisabled) {
                return;
            }
            if (this.isIE) {
                this._selectionService.restoreSelection();
                this._selectionService.captureSelection();
            }
            if (bg) {
                this.bgColorPickerShow = !this.bgColorPickerShow;
                this.colorPickerShow = false;
            }
            else {
                this.colorPickerShow = !this.colorPickerShow;
                this.bgColorPickerShow = false;
            }
        };
        /**
         * @param {?} $event
         * @param {?} isFontName
         * @return {?}
         */
        EditorAppComponent.prototype.toggleFontSelect = /**
         * @param {?} $event
         * @param {?} isFontName
         * @return {?}
         */
        function ($event, isFontName) {
            $event.preventDefault();
            $event.stopPropagation();
            if (isFontName) {
                this.selectFontShow = !this.selectFontShow;
                this.selectFontSizeShow = false;
            }
            else {
                this.selectFontSizeShow = !this.selectFontSizeShow;
                this.selectFontShow = false;
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        EditorAppComponent.prototype.selectColor = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (this.isIE) {
                this._selectionService.restoreSelection();
                this._selectionService.captureSelection();
            }
            if (this.bgColorPickerShow) {
                this.bgColorPickerShow = false;
                this._formattingService.changeFormatBgColor($event);
            }
            else {
                this.colorPickerShow = false;
                this._formattingService.changeFormatColor($event);
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        EditorAppComponent.prototype.toggleBold = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.formatDisabled)
                return;
            event.preventDefault();
            event.stopPropagation();
            if (this.isIE) {
                this._selectionService.restoreSelection();
                this._selectionService.captureSelection();
            }
            this._formattingService.changeFormatBold(!this.formatting.bold);
        };
        /**
         * @return {?}
         */
        EditorAppComponent.prototype.toggleUndo = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            event.preventDefault();
            event.stopPropagation();
            this._formattingService.Undo();
        };
        /**
         * @return {?}
         */
        EditorAppComponent.prototype.toggleRedo = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            event.preventDefault();
            event.stopPropagation();
            this._formattingService.Redo();
        };
        /**
         * @param {?} event
         * @return {?}
         */
        EditorAppComponent.prototype.toggleItalic = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.formatDisabled)
                return;
            event.preventDefault();
            event.stopPropagation();
            if (this.isIE) {
                this._selectionService.restoreSelection();
                this._selectionService.captureSelection();
            }
            this._formattingService.changeFormatItalic(!this.formatting.italic);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        EditorAppComponent.prototype.toggleUnderline = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.formatDisabled)
                return;
            event.preventDefault();
            event.stopPropagation();
            if (this.isIE) {
                this._selectionService.restoreSelection();
                this._selectionService.captureSelection();
            }
            this._formattingService.changeFormatUnderline(!this.formatting.underline);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        EditorAppComponent.prototype.hideAll = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (($event.target.parentElement && $event.target.parentElement.attributes['name'] &&
                $event.target.parentElement.attributes['name'].value === 'button') ||
                ($event.target.parentElement.parentElement &&
                    $event.target.parentElement.parentElement.attributes['name'] &&
                    $event.target.parentElement.parentElement.attributes['name'].value === 'button')) {
                this._onCloseService.close(true);
                return;
            }
            this.colorPickerShow = false;
            this.bgColorPickerShow = false;
            this._onCloseService.close(true);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        EditorAppComponent.prototype.toggleStrikeout = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.formatDisabled)
                return;
            event.preventDefault();
            event.stopPropagation();
            if (this.isIE) {
                this._selectionService.restoreSelection();
                this._selectionService.captureSelection();
            }
            this._formattingService.changeFormatStrikeout(!this.formatting.strikeout);
        };
        /**
         * @param {?} align
         * @return {?}
         */
        EditorAppComponent.prototype.toggleAlign = /**
         * @param {?} align
         * @return {?}
         */
        function (align) {
            if (this.formatDisabled)
                return;
            event.preventDefault();
            event.stopPropagation();
            if (align === this.formatting.align) {
                align = 'full';
            }
            this._formattingService.changeFormatAlign(align);
            this.formatting.align = align;
        };
        /**
         * @param {?} list
         * @return {?}
         */
        EditorAppComponent.prototype.toggleList = /**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            if (this.formatDisabled)
                return;
            event.preventDefault();
            event.stopPropagation();
            if (list === this.formatting.list) {
                this.formatting.list = "";
                // to trigger changes in contentEditable
                this._formattingService.changeFormatList(list);
                // to clear the toggle status of the button only
                this._formattingService.changeFormatList("");
            }
            else {
                this.formatting.list = list;
                this._formattingService.changeFormatList(list);
            }
            if (this.isIE) {
                this._selectionService.restoreSelection();
                this._selectionService.captureSelection();
            }
        };
        /**
         * @return {?}
         */
        EditorAppComponent.prototype.downloadFile = /**
         * @return {?}
         */
        function () {
            if (this.downloadDisabled)
                return;
            window.location.assign(this._editorService.getDownloadUrl(this.credentials));
        };
        /**
         * @return {?}
         */
        EditorAppComponent.prototype.save = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            if (this.credentials) {
                if (this.file.guid === "new document.docx") {
                    this.openModal(commonComponents.CommonModals.CreateDocument);
                }
                else {
                    this.saveFile(this.credentials);
                }
            }
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        EditorAppComponent.prototype.saveFile = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            var _this = this;
            if (!this.file || !this.file.pages)
                return;
            this.textBackup = this.getPageWithRootTags(this.textBackup, credentials.guid);
            /** @type {?} */
            var saveFile = new commonComponents.SaveFile(credentials.guid, credentials.password, this.textBackup);
            this._editorService.save(saveFile).subscribe((/**
             * @param {?} loadFile
             * @return {?}
             */
            function (loadFile) {
                _this.loadFile(loadFile);
                _this.credentials = new commonComponents.FileCredentials(loadFile.guid, credentials.password);
                _this._modalService.open(commonComponents.CommonModals.OperationSuccess);
            }));
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        EditorAppComponent.prototype.saveNewFile = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            var _this = this;
            if (!this.file || !this.file.pages) {
                return;
            }
            this.textBackup = this.getPageWithRootTags(this.textBackup, credentials.guid);
            /** @type {?} */
            var saveFile = new commonComponents.SaveFile(credentials.guid, credentials.password, this.textBackup);
            this._editorService.create(saveFile).subscribe((/**
             * @param {?} loadFile
             * @return {?}
             */
            function (loadFile) {
                _this.loadFile(loadFile);
                _this.credentials = new commonComponents.FileCredentials(loadFile.guid, credentials.password);
                _this._modalService.open(commonComponents.CommonModals.OperationSuccess);
                _this.newFile = false;
            }));
        };
        // Returns root-tags in the HTML-markup which previously were removed by innerHTML.
        // Returns root-tags in the HTML-markup which previously were removed by innerHTML.
        /**
         * @param {?} data
         * @param {?} guid
         * @return {?}
         */
        EditorAppComponent.prototype.getPageWithRootTags = 
        // Returns root-tags in the HTML-markup which previously were removed by innerHTML.
        /**
         * @param {?} data
         * @param {?} guid
         * @return {?}
         */
        function (data, guid) {
            /** @type {?} */
            var pptFormats = ["ppt", "pptx", "pptm", "pps", "ppsx", "ppsm", "pot", "potx", "potm", "odp", "otp"];
            /** @type {?} */
            var resultData = "<html><head>" + data + "</body></html>";
            if (this.newFile) {
                resultData = resultData.replace('<head>', '<head><meta http-equiv="content-type" content="text/html; charset=utf-8"></head><body>');
                if (pptFormats.includes(guid.split('.').pop())) {
                    resultData = resultData.replace('<body>', '<body><div class="slide">');
                }
                else {
                    resultData = resultData.replace('<body>', '<body><div class="documentMainContent">');
                }
                resultData = resultData.replace('</body>', '</div></body>');
            }
            else {
                // for Word files
                resultData = resultData.replace('<div class="documentMainContent">', '</head><body><div class="documentMainContent">');
                // for Presentations files
                resultData = resultData.replace('<div class="slide"', '</head><body><div class="slide"');
                // for Excel files
                resultData = resultData.replace('</style><table', '</style></head><body><table');
            }
            resultData = resultData.replace('<main class="documentMainContent">', '</head><body><main class="documentMainContent">');
            return resultData;
        };
        /**
         * @return {?}
         */
        EditorAppComponent.prototype.printFile = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            if (this.file.pages) {
                /** @type {?} */
                var page = new commonComponents.PageModel;
                page.width = 595;
                page.height = 842;
                // using of the replace is required to fix issue with padding for intire print content
                page.data = this.textBackup.replace('</style>', 'body { padding: 96px; } </style>');
                /** @type {?} */
                var printHtml = [page];
                this._renderPrintService.changePages(printHtml);
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        EditorAppComponent.prototype.onCloseModal = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (this.file && $event) {
                if (this.isIE) {
                    $(".documentMainContent").attr("contentEditable", "true");
                }
                else {
                    this.file.pages[0].editable = true;
                }
                this._selectionService.restoreSelection();
            }
        };
        EditorAppComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-editor-angular-root',
                        template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\" (click)=\"hideAll($event)\">\n  <gd-tabbed-toolbars [logo]=\"'editor'\" [icon]=\"'pen-square'\">\n    <gd-tabs>\n      <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'file'\" [tooltip]=\"'Create document'\" (click)=\"createFile()\"\n                     *ngIf=\"createNewFileConfig\"></gd-button>\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                     *ngIf=\"browseConfig\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save File'\" (click)=\"save()\"></gd-button>\n          <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'pencil-alt'\" [iconClass]=\"'save-as-button-icon'\" [tooltip]=\"'Save File As'\" (click)=\"openSave()\">\n            <fa-icon [icon]=\"['fas','save']\" class=\"save-button\" size=\"xs\"></fa-icon></gd-button>\n          <gd-button [disabled]=\"downloadDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                     (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n          <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                     *ngIf=\"printConfig\" ></gd-button>\n          <gd-button *ngIf=\"!isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Undo'\"\n                     (click)=\"toggleUndo()\"></gd-button>\n          <gd-button *ngIf=\"!isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Redo'\"\n                     (click)=\"toggleRedo()\"></gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab id=\"formatting-tab\" [tabTitle]=\"'Formatting'\" [icon]=\"'edit'\" [id]=\"'2'\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button *ngIf=\"isDesktop\"  [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Undo'\"\n                     (click)=\"toggleUndo()\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\"  [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Redo'\"\n                     (click)=\"toggleRedo()\"></gd-button>\n          <gd-select class=\"format-select mobile-hide\" [disabled]=\"formatDisabled\" [options]=\"fontOptions\"\n                     [isOpen]=\"selectFontShow\" (selected)=\"selectFont($event)\" (click)=\"toggleFontSelect($event, true)\"\n                     [showSelected]=\"{name : formatting.font, value : formatting.font}\"></gd-select>\n          <gd-select class=\"format-select mobile-hide\" [disabled]=\"formatDisabled\" [options]=\"fontSizeOptions\"\n                     [isOpen]=\"selectFontSizeShow\" (selected)=\"selectFontSize($event)\" (click)=\"toggleFontSelect($event, false)\"\n                     [showSelected]=\"{name : formatting.fontSize + 'px', value : formatting.fontSize}\"></gd-select>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'bold'\" [tooltip]=\"'Bold'\"\n                     (click)=\"toggleBold($event)\" [toggle]=\"formatting.bold\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'italic'\" [tooltip]=\"'Italic'\"\n                     (click)=\"toggleItalic($event)\" [toggle]=\"formatting.italic\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'underline'\" [tooltip]=\"'Underline'\"\n                     (click)=\"toggleUnderline($event)\" [toggle]=\"formatting.underline\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'strikethrough'\" [tooltip]=\"'Strike out'\"\n                     (click)=\"toggleStrikeout($event)\" [toggle]=\"formatting.strikeout\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'align-center'\" [tooltip]=\"'Align center'\"\n                     (click)=\"toggleAlign('center')\" [toggle]=\"formatting.align == 'center' ? true : false\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'align-justify'\" [tooltip]=\"'Align full'\"\n                     (click)=\"toggleAlign('full')\" [toggle]=\"formatting.align == 'full' ? true : false\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'align-right'\" [tooltip]=\"'Align right'\"\n                     (click)=\"toggleAlign('right')\" [toggle]=\"formatting.align == 'right' ? true : false\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'align-left'\" [tooltip]=\"'Align left'\"\n                     (click)=\"toggleAlign('left')\" [toggle]=\"formatting.align == 'left' ? true : false\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'list-ul'\" [tooltip]=\"'Add Unordered List'\"\n                     (click)=\"toggleList('unordered')\" [toggle]=\"formatting.list == 'unordered' ? true : false\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'list-ol'\" [tooltip]=\"'Add Ordered List'\"\n                     (click)=\"toggleList('ordered')\" [toggle]=\"formatting.list == 'ordered' ? true : false\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\" name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'fill'\" [tooltip]=\"'Background color'\"\n                     (click)=\"toggleColorPicker($event, true)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.bgColor\"></div>\n          </gd-button>\n          <gd-button *ngIf=\"isDesktop\" name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'font'\" [tooltip]=\"'Color'\" \n                     (click)=\"toggleColorPicker($event, false)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.color\"></div>\n          </gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab class=\"desktop-hide\" [tabTitle]=\"'Font'\" [icon]=\"'font'\" [id]=\"'3'\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-select class=\"format-select font-type\" [disabled]=\"formatDisabled\" [options]=\"fontOptions\"\n                      [isOpen]=\"selectFontShow\" (selected)=\"selectFont($event)\" (click)=\"toggleFontSelect($event, true)\"\n                      [showSelected]=\"{name : formatting.font, value : formatting.font}\"></gd-select>\n          <gd-select class=\"format-select font-size\" [disabled]=\"formatDisabled\" [options]=\"fontSizeOptions\"\n                      [isOpen]=\"selectFontSizeShow\" (selected)=\"selectFontSize($event)\" (click)=\"toggleFontSelect($event, false)\"\n                      [showSelected]=\"{name : formatting.fontSize + 'px', value : formatting.fontSize}\"></gd-select>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab id=\"paragraph-tab\" class=\"desktop-hide\" [tabTitle]=\"'Paragraph'\" [icon]=\"'paragraph'\" [id]=\"'4'\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-center'\" [tooltip]=\"'Align center'\"\n                     (click)=\"toggleAlign('center')\" [toggle]=\"formatting.align == 'center' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-justify'\" [tooltip]=\"'Align full'\"\n                     (click)=\"toggleAlign('full')\" [toggle]=\"formatting.align == 'full' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-right'\" [tooltip]=\"'Align right'\"\n                     (click)=\"toggleAlign('right')\" [toggle]=\"formatting.align == 'right' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-left'\" [tooltip]=\"'Align left'\"\n                     (click)=\"toggleAlign('left')\" [toggle]=\"formatting.align == 'left' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ul'\" [tooltip]=\"'Add Unordered List'\"\n                     (click)=\"toggleList('unordered')\" [toggle]=\"formatting.list == 'unordered' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ol'\" [tooltip]=\"'Add Ordered List'\"\n                     (click)=\"toggleList('ordered')\" [toggle]=\"formatting.list == 'ordered' ? true : false\"></gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab class=\"desktop-hide\" [tabTitle]=\"'Palette'\" [icon]=\"'palette'\" [id]=\"'5'\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'fill'\" [tooltip]=\"'Background color'\"\n                    (click)=\"toggleColorPicker($event, true)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.bgColor\"></div>\n          </gd-button>\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'font'\" [tooltip]=\"'Color'\" \n                    (click)=\"toggleColorPicker($event, false)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.color\"></div>\n          </gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n    </gd-tabs>\n  </gd-tabbed-toolbars>\n  <gd-color-picker [isOpen]=\"bgColorPickerShow || colorPickerShow\"\n                   [className]=\"'palette ' + (bgColorPickerShow ? 'background-color-picker' : 'color-picker')\"\n                   (selectedColor)=\"selectColor($event)\"></gd-color-picker>\n  <div class=\"doc-panel\" *ngIf=\"file\">\n    <gd-document class=\"gd-document\" *ngIf=\"file\" [ngClass]=\"{'new-file': newFile}\" [file]=\"file\" [mode]=\"true\" [htmlMode]=\"true\"\n                 [preloadPageCount]=\"0\" gdFormatting gdRenderPrint gdScrollable>\n    </gd-document>\n  </div>\n  <gd-init-state [icon]=\"'pen-square'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n      Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n      Or drop file here\n  </gd-init-state>\n  <gd-browse-files-modal\n    (closing)=\"onCloseModal($event)\"\n    (urlForUpload)=\"upload($event)\"\n    [files]=\"files\"\n    (selectedDirectory)=\"selectDir($event)\"\n    (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n    [uploadConfig]=\"uploadConfig\"\n  ></gd-browse-files-modal>\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-create-document-modal (closing)=\"onCloseModal($event)\" [file]=\"credentials\" (savingFile)=\"saveNewFile($event)\"></gd-create-document-modal>\n  <gd-success-modal></gd-success-modal>\n</div>\n",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.current-page-number{margin:0 15px;font-size:14px;color:#959da5}*{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:text}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}::ng-deep .gd-drag-n-drop-wrap.active{z-index:999}::ng-deep .gd-drag-n-drop-wrap.active .init-state-wrapper{top:unset!important}::ng-deep .init-state-wrapper{top:-90px!important}.doc-panel{display:-webkit-box;display:flex;height:inherit}.gd-document{width:100%;height:calc(100% - 90px)}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{width:100%}::ng-deep .gd-wrapper{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;outline:0;position:relative}::ng-deep .dropdown-menu{min-width:unset!important}.palette{position:absolute;top:90px;z-index:100}.background-color-picker{left:700px}.color-picker{left:750px}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}::ng-deep .tools .button{color:#3e4e5a!important}::ng-deep .tools .button .text{padding:0!important}::ng-deep .tools .button.inactive{color:#959da5!important;opacity:.4}::ng-deep .tools .dropdown-menu .option{min-width:61px;color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}::ng-deep .tools .select{width:65px;height:37px;margin-left:7px;line-height:37px;text-align:center;border:none!important}::ng-deep .tools .select .nav-caret{margin:0 0 0 4px!important}::ng-deep .gd-select-format .select{-webkit-box-pack:justify!important;justify-content:space-between!important}::ng-deep .tab-content .button .tooltip{margin-top:45px;margin-left:-36px}::ng-deep .gd-edit.active{background-color:#7e8991}::ng-deep .gd-edit.active i{color:#fff}::ng-deep .page{width:auto!important;height:auto!important}::ng-deep .page ::ng-deep .gd-document .page{width:auto!important;height:auto!important}::ng-deep .documentMainContent.newfile{width:595px!important;height:842px!important}::ng-deep .gd-document.new-file .page{width:595pt!important;height:842pt!important}::ng-deep .slide{margin:0!important}::ng-deep #page-0{height:calc(100% - 2 * 20px)}::ng-deep .save-as-button-icon{font-size:11px;left:22px!important;top:13px!important}::ng-deep .documentMainContent .section{margin:0!important}::ng-deep .documentMainContent>div{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:end;justify-content:flex-end}::ng-deep .documentMainContent>div .footer-1{position:absolute;bottom:0;width:calc(100% - 2 * 96px);display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}::ng-deep .documentMainContent>div .footer-1 .Normal{margin:0 0 0 auto}::ng-deep .documentMainContent>div .footer-1 p{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}::ng-deep .documentMainContent>div .header-0{padding-bottom:10px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}::ng-deep .documentMainContent>div .header-0 .Header,::ng-deep .documentMainContent>div .header-0 .Normal{margin:0 0 0 auto}::ng-deep .documentMainContent>div .header-0 p{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}::ng-deep .documentMainContent>div .header-0 p:last-of-type{margin:0!important}.save-button{position:absolute;top:-5px;left:21px}gd-tab.desktop-hide{display:none}@media (max-width:1037px){::ng-deep .panzoom{zoom:.45;margin-top:130px}::ng-deep .gd-tab fa-icon{height:60px;width:60px;font-size:22px!important;margin:unset!important}gd-tab.desktop-hide{display:block}.mobile-hide{display:none}::ng-deep .tools{overflow-x:unset!important}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0!important}::ng-deep .tools .icon-button{height:60px!important;width:60px}::ng-deep #formatting-tab ::ng-deep .tools .icon-button,::ng-deep #paragraph-tab ::ng-deep .tools .icon-button{margin:0!important}::ng-deep .bg-color-pic{height:13px!important;width:13px!important;right:9px!important;bottom:11px!important}::ng-deep .palette{position:absolute;top:130px!important;z-index:100}::ng-deep .background-color-picker{left:0!important}::ng-deep .color-picker{left:60px!important}::ng-deep .format-select.font-type{width:109px}::ng-deep .format-select.font-type ::ng-deep .dropdown-menu{width:109px!important;top:60px!important;left:0!important}::ng-deep .format-select.font-size{width:81px}::ng-deep .format-select.font-size ::ng-deep .dropdown-menu{width:81px!important;top:60px!important;left:109px!important}::ng-deep .format-select .select{width:unset!important;height:60px!important;line-height:60px}::ng-deep .init-state-wrapper{position:unset!important}}"]
                    }] }
        ];
        /** @nocollapse */
        EditorAppComponent.ctorParameters = function () { return [
            { type: EditorService },
            { type: commonComponents.ModalService },
            { type: EditorConfigService },
            { type: commonComponents.UploadFilesService },
            { type: commonComponents.PasswordService },
            { type: commonComponents.WindowService },
            { type: commonComponents.FormattingService },
            { type: commonComponents.BackFormattingService },
            { type: commonComponents.OnCloseService },
            { type: commonComponents.SelectionService },
            { type: commonComponents.EditHtmlService },
            { type: commonComponents.RenderPrintService },
            { type: commonComponents.LoadingMaskService }
        ]; };
        return EditorAppComponent;
    }());
    if (false) {
        /** @type {?} */
        EditorAppComponent.prototype.title;
        /** @type {?} */
        EditorAppComponent.prototype.files;
        /** @type {?} */
        EditorAppComponent.prototype.file;
        /** @type {?} */
        EditorAppComponent.prototype.editorConfig;
        /** @type {?} */
        EditorAppComponent.prototype.formatDisabled;
        /** @type {?} */
        EditorAppComponent.prototype.downloadDisabled;
        /** @type {?} */
        EditorAppComponent.prototype.credentials;
        /** @type {?} */
        EditorAppComponent.prototype.browseFilesModal;
        /** @type {?} */
        EditorAppComponent.prototype.isDesktop;
        /** @type {?} */
        EditorAppComponent.prototype.formatting;
        /** @type {?} */
        EditorAppComponent.prototype.fontSizeOptions;
        /** @type {?} */
        EditorAppComponent.prototype.fontOptions;
        /** @type {?} */
        EditorAppComponent.prototype.bgColorPickerShow;
        /** @type {?} */
        EditorAppComponent.prototype.colorPickerShow;
        /** @type {?} */
        EditorAppComponent.prototype.active;
        /** @type {?} */
        EditorAppComponent.prototype.textBackup;
        /**
         * @type {?}
         * @private
         */
        EditorAppComponent.prototype.isIE;
        /** @type {?} */
        EditorAppComponent.prototype.isLoading;
        /** @type {?} */
        EditorAppComponent.prototype.fileWasDropped;
        /** @type {?} */
        EditorAppComponent.prototype.selectFontShow;
        /** @type {?} */
        EditorAppComponent.prototype.selectFontSizeShow;
        /** @type {?} */
        EditorAppComponent.prototype.newFile;
        /**
         * @type {?}
         * @private
         */
        EditorAppComponent.prototype._editorService;
        /**
         * @type {?}
         * @private
         */
        EditorAppComponent.prototype._modalService;
        /**
         * @type {?}
         * @private
         */
        EditorAppComponent.prototype._windowService;
        /**
         * @type {?}
         * @private
         */
        EditorAppComponent.prototype._formattingService;
        /**
         * @type {?}
         * @private
         */
        EditorAppComponent.prototype._backFormattingService;
        /**
         * @type {?}
         * @private
         */
        EditorAppComponent.prototype._onCloseService;
        /**
         * @type {?}
         * @private
         */
        EditorAppComponent.prototype._selectionService;
        /**
         * @type {?}
         * @private
         */
        EditorAppComponent.prototype._htmlService;
        /**
         * @type {?}
         * @private
         */
        EditorAppComponent.prototype._renderPrintService;
        /**
         * @type {?}
         * @private
         */
        EditorAppComponent.prototype._loadingMaskService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CreateDocumentModalComponent = /** @class */ (function () {
        function CreateDocumentModalComponent(_editorService, _modalService, _excMessageService) {
            this._editorService = _editorService;
            this._modalService = _modalService;
            this._excMessageService = _excMessageService;
            this.savingFile = new core.EventEmitter();
            this.closing = new core.EventEmitter();
            this.FILE_NAME_REGEX = /^.*[\\\/]/;
        }
        Object.defineProperty(CreateDocumentModalComponent.prototype, "format", {
            get: /**
             * @return {?}
             */
            function () {
                return this._format;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CreateDocumentModalComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.loadFormats();
        };
        /**
         * @return {?}
         */
        CreateDocumentModalComponent.prototype.loadFormats = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._editorService.getFormats().subscribe((/**
             * @param {?} formats
             * @return {?}
             */
            function (formats) {
                _this.formats = _this.formatOptions(formats);
                _this._format = "DOCX";
            }));
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        CreateDocumentModalComponent.prototype.selectFormat = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this._format = $event.name;
        };
        /**
         * @param {?} val
         * @return {?}
         */
        CreateDocumentModalComponent.prototype.createFormatOption = /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            return { value: val, name: val.toUpperCase() };
        };
        /**
         * @param {?} formats
         * @return {?}
         */
        CreateDocumentModalComponent.prototype.formatOptions = /**
         * @param {?} formats
         * @return {?}
         */
        function (formats) {
            /** @type {?} */
            var allTypes = new Array();
            for (var i = 0; i < formats.length; i++) {
                allTypes.push(this.createFormatOption(formats[i]));
            }
            return allTypes;
        };
        /**
         * @param {?} name
         * @return {?}
         */
        CreateDocumentModalComponent.prototype.save = /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            /** @type {?} */
            var fileName = "";
            if (name && name !== "") {
                fileName = name + "." + this._format.toLowerCase();
            }
            else if (!this.file) {
                this._modalService.open(commonComponents.CommonModals.ErrorMessage);
                this._excMessageService.changeMessage("File name is empty");
            }
            this._modalService.close(commonComponents.CommonModals.CreateDocument);
            /** @type {?} */
            var guid = fileName !== "" ? fileName : this.file.guid;
            /** @type {?} */
            var password = this.file ? this.file.password : '';
            this.savingFile.emit(new commonComponents.FileCredentials(guid, password));
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        CreateDocumentModalComponent.prototype.refresh = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (!$event) {
                this.closing.emit(true);
            }
        };
        CreateDocumentModalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-create-document-modal',
                        template: "<gd-modal id=\"gd-create-document\" [title]=\"'Save document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-create-document-section\" class=\"tab-slider-body\">\n    <div class=\"gd-create-wrap\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" [value]=\"!file ? '' : file.guid.replace(FILE_NAME_REGEX, '').split('.')[0]\" #name autofocus/>\n      <label for=\"format\">Format</label>\n      <gd-select id=\"format\" [disabled]=\"false\" [options]=\"formats\" (selected)=\"selectFormat($event)\" [showSelected]=\"{name : format, value : format}\" class=\"gd-select-format\"></gd-select>\n      <gd-button [icon]=\"'save'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"save(name.value)\">Save</gd-button>\n    </div>\n  </section>\n</gd-modal>\n",
                        styles: [".gd-create-wrap{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:24px}.gd-create-wrap label{font-size:14px;color:#acacac;padding-bottom:12px}.gd-create-wrap input{margin-bottom:20px;border:1px solid #6e6e6e!important;padding:9px 0 9px 10px;font-size:14px}.gd-create-wrap gd-button{align-self:flex-end}.gd-create-wrap ::ng-deep .button ::ng-deep .text{font-size:10px!important}#gd-create-document-section{width:468px}::ng-deep .gd-select-format .dropdown-menu{height:167px;overflow:hidden;overflow-y:auto;top:241px!important;min-width:0!important;width:70px;border:none!important}::ng-deep .gd-select-format .dropdown-menu .option{font-size:10px;color:#6e6e6e}::ng-deep .gd-select-format .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .select{height:37px;width:70px;border:1px solid #6e6e6e;color:#6e6e6e!important;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}::ng-deep .select .selected-value{padding:9px 0 9px 8px}::ng-deep .select .nav-caret{margin-right:8px}@media (max-width:1037px){#gd-create-document-section{width:100%}}"]
                    }] }
        ];
        /** @nocollapse */
        CreateDocumentModalComponent.ctorParameters = function () { return [
            { type: EditorService },
            { type: commonComponents.ModalService },
            { type: commonComponents.ExceptionMessageService }
        ]; };
        CreateDocumentModalComponent.propDecorators = {
            file: [{ type: core.Input }],
            savingFile: [{ type: core.Output }],
            closing: [{ type: core.Output }]
        };
        return CreateDocumentModalComponent;
    }());
    if (false) {
        /** @type {?} */
        CreateDocumentModalComponent.prototype.file;
        /** @type {?} */
        CreateDocumentModalComponent.prototype.savingFile;
        /** @type {?} */
        CreateDocumentModalComponent.prototype.closing;
        /**
         * @type {?}
         * @private
         */
        CreateDocumentModalComponent.prototype._format;
        /** @type {?} */
        CreateDocumentModalComponent.prototype.formats;
        /** @type {?} */
        CreateDocumentModalComponent.prototype.FILE_NAME_REGEX;
        /**
         * @type {?}
         * @private
         */
        CreateDocumentModalComponent.prototype._editorService;
        /**
         * @type {?}
         * @private
         */
        CreateDocumentModalComponent.prototype._modalService;
        /**
         * @type {?}
         * @private
         */
        CreateDocumentModalComponent.prototype._excMessageService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} editorConfigService
     * @return {?}
     */
    function initializeApp(editorConfigService) {
        /** @type {?} */
        var result = (/**
         * @return {?}
         */
        function () { return editorConfigService.load(); });
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
    var EditorModule = /** @class */ (function () {
        function EditorModule() {
            fontawesomeSvgCore.library.add(freeSolidSvgIcons.fas, freeRegularSvgIcons.far);
        }
        /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        EditorModule.forRoot = /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        function (apiEndpoint) {
            commonComponents.Api.DEFAULT_API_ENDPOINT = apiEndpoint;
            return {
                ngModule: EditorModule
            };
        };
        EditorModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [EditorAppComponent, CreateDocumentModalComponent],
                        imports: [
                            platformBrowser.BrowserModule,
                            commonComponents.CommonComponentsModule,
                            http.HttpClientModule,
                            angularFontawesome.FontAwesomeModule
                        ],
                        exports: [
                            CreateDocumentModalComponent,
                            EditorAppComponent,
                            commonComponents.CommonComponentsModule
                        ],
                        providers: [
                            EditorService,
                            commonComponents.ConfigService,
                            EditorConfigService,
                            {
                                provide: core.APP_INITIALIZER,
                                useFactory: initializeApp,
                                deps: [EditorConfigService],
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
        EditorModule.ctorParameters = function () { return []; };
        return EditorModule;
    }());

    exports.CreateDocumentModalComponent = CreateDocumentModalComponent;
    exports.EditorAppComponent = EditorAppComponent;
    exports.EditorConfig = EditorConfig;
    exports.EditorConfigService = EditorConfigService;
    exports.EditorModule = EditorModule;
    exports.EditorService = EditorService;
    exports.initializeApp = initializeApp;
    exports.setupLoadingInterceptor = setupLoadingInterceptor;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=groupdocs.examples.angular-editor.umd.js.map
