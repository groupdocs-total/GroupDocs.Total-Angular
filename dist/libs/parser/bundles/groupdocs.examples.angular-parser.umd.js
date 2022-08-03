(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@groupdocs.examples.angular/common-components'), require('@fortawesome/angular-fontawesome'), require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/free-regular-svg-icons'), require('@angular/platform-browser'), require('ng-click-outside'), require('rxjs'), require('@angular/common/http'), require('rxjs/operators'), require('jquery')) :
    typeof define === 'function' && define.amd ? define('@groupdocs.examples.angular/parser', ['exports', '@angular/core', '@groupdocs.examples.angular/common-components', '@fortawesome/angular-fontawesome', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-regular-svg-icons', '@angular/platform-browser', 'ng-click-outside', 'rxjs', '@angular/common/http', 'rxjs/operators', 'jquery'], factory) :
    (global = global || self, factory((global.groupdocs = global.groupdocs || {}, global.groupdocs.examples = global.groupdocs.examples || {}, global.groupdocs.examples.angular = global.groupdocs.examples.angular || {}, global.groupdocs.examples.angular.parser = {}), global.ng.core, global.commonComponents, global.angularFontawesome, global.fontawesomeSvgCore, global.freeSolidSvgIcons, global.freeRegularSvgIcons, global.ng.platformBrowser, global.ngClickOutside, global.rxjs, global.ng.common.http, global.rxjs.operators, global.jquery));
}(this, (function (exports, core, commonComponents, angularFontawesome, fontawesomeSvgCore, freeSolidSvgIcons, freeRegularSvgIcons, platformBrowser, ngClickOutside, rxjs, http, operators, jquery) { 'use strict';

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
    var TableValue = /** @class */ (function () {
        function TableValue(obj) {
            this.rows = [];
            for (var i = 0; i < obj.length; i++) {
                /** @type {?} */
                var row = [];
                if (obj[i]) {
                    for (var j = 0; j < obj[i].length; j++) {
                        row.push(obj[i][j]);
                    }
                }
                this.rows.push(row);
            }
        }
        return TableValue;
    }());
    if (false) {
        /** @type {?} */
        TableValue.prototype.rows;
    }
    /**
     * @template T
     */
    var /**
     * @template T
     */
    OperationState = /** @class */ (function () {
        function OperationState() {
            this._state = 0;
            this.enabled = true;
        }
        Object.defineProperty(OperationState.prototype, "isReadyToRun", {
            get: /**
             * @return {?}
             */
            function () {
                return this._state === 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OperationState.prototype, "isFailed", {
            get: /**
             * @return {?}
             */
            function () {
                return this._state === -1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OperationState.prototype, "isCompleted", {
            get: /**
             * @return {?}
             */
            function () {
                return this._state === 1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OperationState.prototype, "isProcessing", {
            get: /**
             * @return {?}
             */
            function () {
                return this._state == null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OperationState.prototype, "prompt", {
            get: /**
             * @return {?}
             */
            function () {
                return this._prompt;
            },
            set: /**
             * @param {?} prompt
             * @return {?}
             */
            function (prompt) {
                this._prompt = prompt;
                this._error = null;
                this._result = null;
                this._state = 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OperationState.prototype, "error", {
            get: /**
             * @return {?}
             */
            function () {
                return this._error;
            },
            set: /**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                this._prompt = null;
                this._error = error;
                this._result = null;
                this._state = -1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OperationState.prototype, "result", {
            get: /**
             * @return {?}
             */
            function () {
                return this._result;
            },
            set: /**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                this._prompt = null;
                this._error = null;
                this._result = result;
                this._state = 1;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        OperationState.prototype.execute = /**
         * @return {?}
         */
        function () {
            this._state = null;
        };
        return OperationState;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        OperationState.prototype._state;
        /**
         * @type {?}
         * @private
         */
        OperationState.prototype._prompt;
        /**
         * @type {?}
         * @private
         */
        OperationState.prototype._error;
        /**
         * @type {?}
         * @private
         */
        OperationState.prototype._result;
        /** @type {?} */
        OperationState.prototype.enabled;
    }
    var DocumentDescriptionResponse = /** @class */ (function () {
        function DocumentDescriptionResponse() {
        }
        return DocumentDescriptionResponse;
    }());
    if (false) {
        /** @type {?} */
        DocumentDescriptionResponse.prototype.message;
        /** @type {?} */
        DocumentDescriptionResponse.prototype.result;
    }
    var ParseByTemplateResponse = /** @class */ (function () {
        function ParseByTemplateResponse() {
        }
        return ParseByTemplateResponse;
    }());
    if (false) {
        /** @type {?} */
        ParseByTemplateResponse.prototype.message;
        /** @type {?} */
        ParseByTemplateResponse.prototype.data;
    }
    var SourceFile = /** @class */ (function () {
        function SourceFile(guid, password) {
            this.guid = guid;
            this.password = password;
        }
        return SourceFile;
    }());
    if (false) {
        /** @type {?} */
        SourceFile.prototype.guid;
        /** @type {?} */
        SourceFile.prototype.password;
    }
    var DocumentDescription = /** @class */ (function (_super) {
        __extends(DocumentDescription, _super);
        function DocumentDescription() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DocumentDescription;
    }(SourceFile));
    if (false) {
        /** @type {?} */
        DocumentDescription.prototype.pages;
    }
    var DocumentPageDescription = /** @class */ (function () {
        function DocumentPageDescription() {
        }
        return DocumentPageDescription;
    }());
    if (false) {
        /** @type {?} */
        DocumentPageDescription.prototype.number;
        /** @type {?} */
        DocumentPageDescription.prototype.width;
        /** @type {?} */
        DocumentPageDescription.prototype.height;
        /** @type {?} */
        DocumentPageDescription.prototype.data;
    }
    var FileDescription = /** @class */ (function () {
        function FileDescription() {
        }
        return FileDescription;
    }());
    if (false) {
        /** @type {?} */
        FileDescription.prototype.pages;
    }
    var ParseResult = /** @class */ (function () {
        function ParseResult() {
        }
        return ParseResult;
    }());
    if (false) {
        /** @type {?} */
        ParseResult.prototype.name;
        /** @type {?} */
        ParseResult.prototype.value;
    }
    var Point = /** @class */ (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        return Point;
    }());
    if (false) {
        /** @type {?} */
        Point.prototype.x;
        /** @type {?} */
        Point.prototype.y;
    }
    var Size = /** @class */ (function () {
        function Size(width, height) {
            this.width = width;
            this.height = height;
        }
        return Size;
    }());
    if (false) {
        /** @type {?} */
        Size.prototype.width;
        /** @type {?} */
        Size.prototype.height;
    }
    /**
     * @record
     */
    function TemplateId() { }
    if (false) {
        /** @type {?} */
        TemplateId.prototype.id;
        /** @type {?} */
        TemplateId.prototype.name;
    }
    var Template = /** @class */ (function () {
        function Template() {
            this._id = null;
            this._name = "template name";
            this._fields = [];
            this._addFieldSubject = new rxjs.Subject();
            this._removeFieldSubject = new rxjs.Subject();
            this._modifiedSubject = new rxjs.Subject();
            this._fieldChangedSubscriptions = new Map();
            this.addedField = this._addFieldSubject.asObservable();
            this.removedField = this._removeFieldSubject.asObservable();
            this.modified = this._modifiedSubject.asObservable();
            this._id = Template.NotSaved;
        }
        Object.defineProperty(Template.prototype, "id", {
            get: /**
             * @return {?}
             */
            function () {
                return this._id;
            },
            set: /**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                this._id = id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Template.prototype, "name", {
            get: /**
             * @return {?}
             */
            function () {
                return this._name;
            },
            set: /**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                this._name = name;
                this.notifyModified();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Template.prototype, "fields", {
            get: /**
             * @return {?}
             */
            function () {
                return this._fields;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Template.prototype, "isStored", {
            get: /**
             * @return {?}
             */
            function () {
                return this._id !== Template.NotSaved;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Template.prototype, "isEmpty", {
            get: /**
             * @return {?}
             */
            function () {
                return this._fields.length === 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} field
         * @return {?}
         */
        Template.prototype.addField = /**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            var _this = this;
            this._fieldChangedSubscriptions.set(field, field.changed.subscribe((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return _this.notifyModified(); })));
            this._fields.push(field);
            this._addFieldSubject.next(field);
            this.notifyModified();
        };
        /**
         * @param {?} field
         * @return {?}
         */
        Template.prototype.removeField = /**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            /** @type {?} */
            var index = this._fields.indexOf(field);
            if (index > -1) {
                this._fieldChangedSubscriptions.get(field).unsubscribe();
                this._fieldChangedSubscriptions.delete(field);
                this._fields.splice(index, 1);
            }
            this._removeFieldSubject.next(field);
            this.notifyModified();
        };
        /**
         * @param {?} fieldName
         * @return {?}
         */
        Template.prototype.removeFieldByName = /**
         * @param {?} fieldName
         * @return {?}
         */
        function (fieldName) {
            /** @type {?} */
            var field = this.getFieldByName(fieldName);
            if (field) {
                this.removeField(field);
            }
        };
        /**
         * @param {?} fieldName
         * @return {?}
         */
        Template.prototype.getFieldByName = /**
         * @param {?} fieldName
         * @return {?}
         */
        function (fieldName) {
            if (!fieldName) {
                return null;
            }
            /** @type {?} */
            var name = fieldName.toLocaleLowerCase();
            for (var i = 0; i < this._fields.length; i++) {
                if (this._fields[i].name.toLocaleLowerCase() === name) {
                    return this._fields[i];
                }
            }
            return null;
        };
        /**
         * @param {?} baseName
         * @return {?}
         */
        Template.prototype.createField = /**
         * @param {?} baseName
         * @return {?}
         */
        function (baseName) {
            /** @type {?} */
            var field = new TemplateField(this);
            field.name = this.getNextFieldName(baseName);
            field.size = new Size(60, 20);
            field.pageNumber = 1;
            field.position = new Point(10, 10);
            return field;
        };
        /**
         * @private
         * @param {?} baseName
         * @return {?}
         */
        Template.prototype.getNextFieldName = /**
         * @private
         * @param {?} baseName
         * @return {?}
         */
        function (baseName) {
            for (var i = 0; i < 1000; i++) {
                /** @type {?} */
                var name_1 = baseName + i.toString();
                if (!this.getFieldByName(name_1)) {
                    return name_1;
                }
            }
            return null;
        };
        /**
         * @private
         * @return {?}
         */
        Template.prototype.notifyModified = /**
         * @private
         * @return {?}
         */
        function () {
            this._modifiedSubject.next(this);
        };
        Template.NotSaved = "NotSaved";
        return Template;
    }());
    if (false) {
        /** @type {?} */
        Template.NotSaved;
        /**
         * @type {?}
         * @private
         */
        Template.prototype._id;
        /**
         * @type {?}
         * @private
         */
        Template.prototype._name;
        /**
         * @type {?}
         * @private
         */
        Template.prototype._fields;
        /**
         * @type {?}
         * @private
         */
        Template.prototype._addFieldSubject;
        /**
         * @type {?}
         * @private
         */
        Template.prototype._removeFieldSubject;
        /**
         * @type {?}
         * @private
         */
        Template.prototype._modifiedSubject;
        /**
         * @type {?}
         * @private
         */
        Template.prototype._fieldChangedSubscriptions;
        /** @type {?} */
        Template.prototype.addedField;
        /** @type {?} */
        Template.prototype.removedField;
        /** @type {?} */
        Template.prototype.modified;
    }
    var TemplateFieldTypes = /** @class */ (function () {
        function TemplateFieldTypes() {
        }
        TemplateFieldTypes.FIXED = "FIXED";
        TemplateFieldTypes.TABLE = "TABLE";
        return TemplateFieldTypes;
    }());
    if (false) {
        /** @type {?} */
        TemplateFieldTypes.FIXED;
        /** @type {?} */
        TemplateFieldTypes.TABLE;
    }
    var TemplateField = /** @class */ (function () {
        function TemplateField(_template) {
            this._template = _template;
            this._fieldType = TemplateFieldTypes.FIXED;
            this._changedSubject = new rxjs.Subject();
            this.changed = this._changedSubject.asObservable();
            this._columns = [];
        }
        Object.defineProperty(TemplateField.prototype, "columns", {
            get: /**
             * @return {?}
             */
            function () {
                return this._columns;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} columnName
         * @param {?} columnValue
         * @return {?}
         */
        TemplateField.prototype.addColumn = /**
         * @param {?} columnName
         * @param {?} columnValue
         * @return {?}
         */
        function (columnName, columnValue) {
            /** @type {?} */
            var column = new TemplateFieldTableSeparator(columnName == null ? this.getNextColumnName() : columnName, columnValue, this._changedSubject);
            this._columns.push(column);
            this._changedSubject.next("columns");
        };
        /**
         * @param {?} column
         * @return {?}
         */
        TemplateField.prototype.removeColumn = /**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            /** @type {?} */
            var index = this._columns.indexOf(column);
            if (index > -1) {
                this._columns.splice(index, 1);
                this._changedSubject.next("columns");
            }
        };
        /**
         * @param {?} columnName
         * @return {?}
         */
        TemplateField.prototype.getColumnByName = /**
         * @param {?} columnName
         * @return {?}
         */
        function (columnName) {
            if (!columnName) {
                return null;
            }
            /** @type {?} */
            var name = columnName.toLocaleLowerCase();
            for (var i = 0; i < this._columns.length; i++) {
                if (this._columns[i].name.toLocaleLowerCase() === name) {
                    return this._columns[i];
                }
            }
            return null;
        };
        Object.defineProperty(TemplateField.prototype, "fieldType", {
            get: /**
             * @return {?}
             */
            function () {
                return this._fieldType;
            },
            set: /**
             * @param {?} fieldType
             * @return {?}
             */
            function (fieldType) {
                this._fieldType = fieldType;
                this._changedSubject.next("fieldType");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TemplateField.prototype, "template", {
            get: /**
             * @return {?}
             */
            function () {
                return this._template;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TemplateField.prototype, "name", {
            get: /**
             * @return {?}
             */
            function () {
                return this._name;
            },
            set: /**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                this._name = name;
                this._changedSubject.next("name");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TemplateField.prototype, "pageNumber", {
            get: /**
             * @return {?}
             */
            function () {
                return this._pageNumber;
            },
            set: /**
             * @param {?} pageNumber
             * @return {?}
             */
            function (pageNumber) {
                this._pageNumber = pageNumber;
                this._changedSubject.next("pageNumber");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TemplateField.prototype, "position", {
            get: /**
             * @return {?}
             */
            function () {
                return this._position;
            },
            set: /**
             * @param {?} position
             * @return {?}
             */
            function (position) {
                this._position = position;
                this._changedSubject.next("position");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TemplateField.prototype, "size", {
            get: /**
             * @return {?}
             */
            function () {
                return this._size;
            },
            set: /**
             * @param {?} size
             * @return {?}
             */
            function (size) {
                this._size = size;
                this._changedSubject.next("size");
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TemplateField.prototype.toJSON = /**
         * @return {?}
         */
        function () {
            return {
                fieldType: this.fieldType,
                name: this.name,
                pageNumber: this.pageNumber,
                x: this.position.x,
                y: this.position.y,
                width: this.size.width,
                height: this.size.height,
                columns: this._columns
            };
        };
        /**
         * @private
         * @return {?}
         */
        TemplateField.prototype.getNextColumnName = /**
         * @private
         * @return {?}
         */
        function () {
            for (var i = 0; i < 1000; i++) {
                /** @type {?} */
                var name_2 = "TC:" + i.toString();
                if (!this.getColumnByName(name_2)) {
                    return name_2;
                }
            }
            return null;
        };
        return TemplateField;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TemplateField.prototype._fieldType;
        /**
         * @type {?}
         * @private
         */
        TemplateField.prototype._name;
        /**
         * @type {?}
         * @private
         */
        TemplateField.prototype._pageNumber;
        /**
         * @type {?}
         * @private
         */
        TemplateField.prototype._position;
        /**
         * @type {?}
         * @private
         */
        TemplateField.prototype._size;
        /**
         * @type {?}
         * @private
         */
        TemplateField.prototype._columns;
        /**
         * @type {?}
         * @private
         */
        TemplateField.prototype._changedSubject;
        /** @type {?} */
        TemplateField.prototype.changed;
        /**
         * @type {?}
         * @private
         */
        TemplateField.prototype._template;
    }
    var TemplateFieldTableSeparator = /** @class */ (function () {
        function TemplateFieldTableSeparator(_name, _value, _changedSubject) {
            this._name = _name;
            this._value = _value;
            this._changedSubject = _changedSubject;
        }
        Object.defineProperty(TemplateFieldTableSeparator.prototype, "name", {
            get: /**
             * @return {?}
             */
            function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TemplateFieldTableSeparator.prototype, "value", {
            get: /**
             * @return {?}
             */
            function () {
                return this._value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._value = value;
                this._changedSubject.next("table-separator");
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TemplateFieldTableSeparator.prototype.toJSON = /**
         * @return {?}
         */
        function () {
            return {
                name: this.name,
                value: this.value,
            };
        };
        return TemplateFieldTableSeparator;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TemplateFieldTableSeparator.prototype._name;
        /**
         * @type {?}
         * @private
         */
        TemplateFieldTableSeparator.prototype._value;
        /**
         * @type {?}
         * @private
         */
        TemplateFieldTableSeparator.prototype._changedSubject;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ParserService = /** @class */ (function () {
        function ParserService(_http, _config) {
            this._http = _http;
            this._config = _config;
        }
        /**
         * @param {?} path
         * @return {?}
         */
        ParserService.prototype.loadFiles = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            return this._http.post(this._config.getParserApiEndpoint() + commonComponents.Api.LOAD_FILE_TREE, { 'path': path }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} file
         * @param {?} url
         * @param {?} rewrite
         * @return {?}
         */
        ParserService.prototype.upload = /**
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
            return this._http.post(this._config.getParserApiEndpoint() + commonComponents.Api.UPLOAD_DOCUMENTS, formData);
        };
        /**
         * @param {?} sourceFile
         * @return {?}
         */
        ParserService.prototype.loadDocumentDescription = /**
         * @param {?} sourceFile
         * @return {?}
         */
        function (sourceFile) {
            var _this = this;
            /** @type {?} */
            var subject = new rxjs.Subject();
            /** @type {?} */
            var observer = {
                next: (/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) { return subject.next(response); }),
                complete: (/**
                 * @return {?}
                 */
                function () { return subject.complete(); }),
                error: (/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    _this.logToServer(err);
                    console.error(err);
                    subject.error(err);
                })
            };
            this._http.post(this._config.getParserApiEndpoint() + commonComponents.Api.LOAD_DOCUMENT_DESCRIPTION, sourceFile, commonComponents.Api.httpOptionsJson)
                .pipe(operators.timeout(25000))
                .subscribe(observer);
            return subject;
        };
        /**
         * @param {?} sourceFile
         * @param {?} password
         * @param {?} template
         * @return {?}
         */
        ParserService.prototype.parseByTemplate = /**
         * @param {?} sourceFile
         * @param {?} password
         * @param {?} template
         * @return {?}
         */
        function (sourceFile, password, template) {
            var _this = this;
            /** @type {?} */
            var subject = new rxjs.Subject();
            /** @type {?} */
            var observer = {
                next: (/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) { return subject.next(response); }),
                complete: (/**
                 * @return {?}
                 */
                function () { return subject.complete(); }),
                error: (/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    _this.logToServer(err);
                    console.error(err);
                    subject.error(err);
                })
            };
            this._http.post(this._config.getParserApiEndpoint() + commonComponents.Api.PARSE, {
                guid: sourceFile.guid,
                password: sourceFile.password,
                fields: template.fields
            }, commonComponents.Api.httpOptionsJson)
                .pipe(operators.timeout(25000))
                .subscribe(observer);
            return subject;
        };
        /**
         * @param {?} err
         * @return {?}
         */
        ParserService.prototype.getErrorMessage = /**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            /** @type {?} */
            var text;
            if (err.status === 404) {
                text = "The requested file was not found.";
            }
            else if (err.error && typeof err.error.title === "string") {
                text = err.error.title;
            }
            else if (typeof err.error === "string") {
                text = err.error;
            }
            else if (typeof err.title === "string") {
                text = err.title;
            }
            else {
                text = "The error occured while opening the file.";
            }
            return text;
        };
        /**
         * @private
         * @param {?} error
         * @return {?}
         */
        ParserService.prototype.logToServer = /**
         * @private
         * @param {?} error
         * @return {?}
         */
        function (error) {
            /** @type {?} */
            var errorMessage = { error: JSON.stringify(error) };
            /** @type {?} */
            var url = localStorage.getItem("parser.logclienterror");
            if (url) {
                this._http.post(url, errorMessage, commonComponents.Api.httpOptionsJson).subscribe({
                    next: (/**
                     * @return {?}
                     */
                    function () { return console.log("Sent to server"); }),
                    error: (/**
                     * @return {?}
                     */
                    function () { return console.log("Can't send to server"); })
                });
            }
        };
        ParserService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ParserService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ ParserService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ParserService_Factory() { return new ParserService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: ParserService, providedIn: "root" });
        return ParserService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ParserService.prototype._http;
        /**
         * @type {?}
         * @private
         */
        ParserService.prototype._config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TemplateService = /** @class */ (function () {
        function TemplateService() {
            this._templatePattern = "parser.template.";
            this._currentTemplateChangedSubject = new rxjs.Subject();
            this._templateAddedSubject = new rxjs.Subject();
            this._templateRemovedSubject = new rxjs.Subject();
            this.currentTemplateChanged = this._currentTemplateChangedSubject.asObservable();
            this.templateAddedSubject = this._templateAddedSubject.asObservable();
            this.templateRemovedSubject = this._templateRemovedSubject.asObservable();
            this._templates = [];
            this.loadTemplatesFromLocalStorage();
            this.createTemplate();
        }
        Object.defineProperty(TemplateService.prototype, "currentTemplate", {
            get: /**
             * @return {?}
             */
            function () {
                return this._currentTemplate;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TemplateService.prototype, "templateIds", {
            get: /**
             * @return {?}
             */
            function () {
                return this._templates;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} templateId
         * @return {?}
         */
        TemplateService.prototype.selectTemplate = /**
         * @param {?} templateId
         * @return {?}
         */
        function (templateId) {
            /** @type {?} */
            var template = this.getTemplateById(templateId);
            if (template) {
                this.setCurrentTemplate(template);
            }
        };
        /**
         * @return {?}
         */
        TemplateService.prototype.createTemplate = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var template = new Template();
            template.name = this.getNextTemplateName("Template");
            this.setCurrentTemplate(template);
        };
        /**
         * @param {?} templateId
         * @return {?}
         */
        TemplateService.prototype.renameTemplate = /**
         * @param {?} templateId
         * @return {?}
         */
        function (templateId) {
            if (!templateId) {
                return;
            }
            /** @type {?} */
            var exTemplate = this.getTemplateByName(templateId.name);
            if (exTemplate && exTemplate.id !== templateId.id) {
                throw Error('Template with the same name already exists');
            }
            if (templateId.id === this.currentTemplate.id) {
                this.currentTemplate.name = templateId.name;
            }
            else {
                /** @type {?} */
                var template = this.getTemplateById(templateId);
                template.name = templateId.name;
                this.saveTemplate(template);
            }
        };
        /**
         * @param {?} templateId
         * @return {?}
         */
        TemplateService.prototype.removeTemplate = /**
         * @param {?} templateId
         * @return {?}
         */
        function (templateId) {
            /** @type {?} */
            var template = this.getTemplateById(templateId);
            /** @type {?} */
            var index = this._templates.indexOf(template);
            if (index > -1) {
                this._templates.splice(index, 1);
            }
            this.onTemplateRemoved(template);
            if (template !== this._currentTemplate) {
                return;
            }
            if (this._templates.length === 0) {
                // Create an empty template if list is empty
                this.createTemplate();
            }
            else {
                // Select the upper template (or the first)
                if (index > 0) {
                    index = index - 1;
                }
                this.setCurrentTemplate(this._templates[index]);
            }
        };
        /**
         * @param {?} templateId
         * @return {?}
         */
        TemplateService.prototype.serialize = /**
         * @param {?} templateId
         * @return {?}
         */
        function (templateId) {
            if (!templateId) {
                return;
            }
            /** @type {?} */
            var template = this.getTemplateById(templateId);
            if (!template) {
                return;
            }
            return JSON.stringify({
                name: template.name,
                fields: template.fields
            });
        };
        /**
         * @param {?} templateJson
         * @return {?}
         */
        TemplateService.prototype.deserialize = /**
         * @param {?} templateJson
         * @return {?}
         */
        function (templateJson) {
            if (!templateJson) {
                return;
            }
            try {
                /** @type {?} */
                var template = this.loadTemplateFromJson(templateJson);
                template.id = Template.NotSaved;
                this.saveTemplate(template);
                this.selectTemplate(template);
            }
            catch (error) {
                throw Error('Error while parsing template file');
            }
        };
        /**
         * @private
         * @param {?} template
         * @return {?}
         */
        TemplateService.prototype.setCurrentTemplate = /**
         * @private
         * @param {?} template
         * @return {?}
         */
        function (template) {
            var _this = this;
            if (this._currentTemplateModifiedSubscription) {
                this._currentTemplateModifiedSubscription.unsubscribe();
            }
            this._currentTemplate = template;
            this._currentTemplateModifiedSubscription = this._currentTemplate.modified
                .pipe(operators.throttle((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return rxjs.interval(500); })))
                .subscribe((/**
             * @param {?} t
             * @return {?}
             */
            function (t) { return _this.saveTemplate(t); }));
            this._currentTemplateChangedSubject.next(this._currentTemplate);
        };
        /**
         * @private
         * @param {?} template
         * @return {?}
         */
        TemplateService.prototype.onTemplateAdded = /**
         * @private
         * @param {?} template
         * @return {?}
         */
        function (template) {
            this._templateAddedSubject.next(template);
        };
        /**
         * @private
         * @param {?} template
         * @return {?}
         */
        TemplateService.prototype.onTemplateRemoved = /**
         * @private
         * @param {?} template
         * @return {?}
         */
        function (template) {
            this._templateRemovedSubject.next(template);
            // remove from local storage
            for (var i = 0; i < localStorage.length; i++) {
                /** @type {?} */
                var key = localStorage.key(i);
                if (key === this._templatePattern + template.id) {
                    localStorage.removeItem(key);
                    return;
                }
            }
        };
        /**
         * @private
         * @return {?}
         */
        TemplateService.prototype.loadTemplatesFromLocalStorage = /**
         * @private
         * @return {?}
         */
        function () {
            for (var i = 0; i < localStorage.length; i++) {
                /** @type {?} */
                var key = localStorage.key(i);
                if (key.startsWith(this._templatePattern)) {
                    /** @type {?} */
                    var template = this.loadTemplateFromJson(localStorage.getItem(key));
                    this._templates.push(template);
                    this.onTemplateAdded(template);
                }
            }
        };
        /**
         * @private
         * @param {?} templateJson
         * @return {?}
         */
        TemplateService.prototype.loadTemplateFromJson = /**
         * @private
         * @param {?} templateJson
         * @return {?}
         */
        function (templateJson) {
            /** @type {?} */
            var obj = JSON.parse(templateJson);
            /** @type {?} */
            var templateName = this.getNextTemplateName(obj.name);
            /** @type {?} */
            var template = new Template();
            template.id = obj.id ? obj.id : this.getNextTemplateId();
            template.name = templateName;
            for (var i = 0; i < obj.fields.length; i++) {
                /** @type {?} */
                var objField = obj.fields[i];
                /** @type {?} */
                var field = new TemplateField(template);
                if (objField.fieldType) {
                    field.fieldType = objField.fieldType;
                }
                field.name = objField.name;
                field.pageNumber = objField.pageNumber;
                field.position = new Point(objField.x, objField.y);
                field.size = new Size(objField.width, objField.height);
                if (objField.columns) {
                    for (var j = 0; j < objField.columns.length; j++) {
                        field.addColumn(objField.columns[j].name, objField.columns[j].value);
                    }
                }
                template.addField(field);
            }
            return template;
        };
        /**
         * @private
         * @param {?} template
         * @return {?}
         */
        TemplateService.prototype.saveTemplateToLocalStorage = /**
         * @private
         * @param {?} template
         * @return {?}
         */
        function (template) {
            if (!template) {
                return;
            }
            /** @type {?} */
            var key = this._templatePattern + template.id;
            localStorage.setItem(key, JSON.stringify({
                name: template.name,
                id: template.id,
                fields: template.fields
            }));
        };
        /**
         * @private
         * @param {?} template
         * @return {?}
         */
        TemplateService.prototype.saveTemplate = /**
         * @private
         * @param {?} template
         * @return {?}
         */
        function (template) {
            if (!template) {
                return;
            }
            if (!template.isStored) {
                template.id = this.getNextTemplateId();
                this._templates.push(template);
                this.onTemplateAdded(template);
            }
            // add to local storage
            this.saveTemplateToLocalStorage(template);
        };
        /**
         * @private
         * @param {?} templateId
         * @return {?}
         */
        TemplateService.prototype.getTemplateById = /**
         * @private
         * @param {?} templateId
         * @return {?}
         */
        function (templateId) {
            if (!templateId) {
                return null;
            }
            for (var i = 0; i < this._templates.length; i++) {
                if (this._templates[i].id === templateId.id) {
                    return this._templates[i];
                }
            }
            return null;
        };
        /**
         * @private
         * @param {?} templateName
         * @return {?}
         */
        TemplateService.prototype.getTemplateByName = /**
         * @private
         * @param {?} templateName
         * @return {?}
         */
        function (templateName) {
            if (!templateName) {
                return null;
            }
            /** @type {?} */
            var name = templateName.toLocaleLowerCase();
            for (var i = 0; i < this._templates.length; i++) {
                if (this._templates[i].name.toLocaleLowerCase() === name) {
                    return this._templates[i];
                }
            }
            return null;
        };
        /**
         * @private
         * @return {?}
         */
        TemplateService.prototype.getNextTemplateId = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var templateId = { id: "", name: "" };
            for (var i = 0; i < 1000; i++) {
                templateId.id = i.toString();
                if (!this.getTemplateById(templateId)) {
                    return templateId.id;
                }
            }
            return null;
        };
        /**
         * @private
         * @param {?} baseName
         * @return {?}
         */
        TemplateService.prototype.getNextTemplateName = /**
         * @private
         * @param {?} baseName
         * @return {?}
         */
        function (baseName) {
            for (var i = 0; i < 1000; i++) {
                /** @type {?} */
                var name_1 = baseName + (i === 0 ? "" : " " + i.toString());
                if (!this.getTemplateByName(name_1)) {
                    return name_1;
                }
            }
            return null;
        };
        TemplateService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TemplateService.ctorParameters = function () { return []; };
        /** @nocollapse */ TemplateService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function TemplateService_Factory() { return new TemplateService(); }, token: TemplateService, providedIn: "root" });
        return TemplateService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TemplateService.prototype._templatePattern;
        /**
         * @type {?}
         * @private
         */
        TemplateService.prototype._currentTemplate;
        /**
         * @type {?}
         * @private
         */
        TemplateService.prototype._currentTemplateModifiedSubscription;
        /**
         * @type {?}
         * @private
         */
        TemplateService.prototype._templates;
        /**
         * @type {?}
         * @private
         */
        TemplateService.prototype._currentTemplateChangedSubject;
        /**
         * @type {?}
         * @private
         */
        TemplateService.prototype._templateAddedSubject;
        /**
         * @type {?}
         * @private
         */
        TemplateService.prototype._templateRemovedSubject;
        /** @type {?} */
        TemplateService.prototype.currentTemplateChanged;
        /** @type {?} */
        TemplateService.prototype.templateAddedSubject;
        /** @type {?} */
        TemplateService.prototype.templateRemovedSubject;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceFileService = /** @class */ (function () {
        function SourceFileService() {
            this._sourceFileChangedSubject = new rxjs.Subject();
            this.sourceFileChanged = this._sourceFileChangedSubject.asObservable();
        }
        Object.defineProperty(SourceFileService.prototype, "sourceFile", {
            get: /**
             * @return {?}
             */
            function () {
                return this._sourceFile;
            },
            set: /**
             * @param {?} sourceFile
             * @return {?}
             */
            function (sourceFile) {
                this._sourceFile = sourceFile;
                this._sourceFileChangedSubject.next(sourceFile);
            },
            enumerable: true,
            configurable: true
        });
        SourceFileService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SourceFileService.ctorParameters = function () { return []; };
        /** @nocollapse */ SourceFileService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SourceFileService_Factory() { return new SourceFileService(); }, token: SourceFileService, providedIn: "root" });
        return SourceFileService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SourceFileService.prototype._sourceFile;
        /**
         * @type {?}
         * @private
         */
        SourceFileService.prototype._sourceFileChangedSubject;
        /** @type {?} */
        SourceFileService.prototype.sourceFileChanged;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PlaceholderService = /** @class */ (function () {
        function PlaceholderService() {
            this._descriptionSubject = new rxjs.Subject();
            this._stateSubject = new rxjs.Subject();
            this.descriptionChanged = this._descriptionSubject.asObservable();
            this.stateChanged = this._stateSubject.asObservable();
        }
        /**
         * @param {?} description
         * @return {?}
         */
        PlaceholderService.prototype.startOperation = /**
         * @param {?} description
         * @return {?}
         */
        function (description) {
            /** @type {?} */
            var subject = new rxjs.Subject();
            this._descriptionSubject.next(description);
            this._stateSubject.next(subject);
            return subject;
        };
        PlaceholderService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PlaceholderService.ctorParameters = function () { return []; };
        /** @nocollapse */ PlaceholderService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function PlaceholderService_Factory() { return new PlaceholderService(); }, token: PlaceholderService, providedIn: "root" });
        return PlaceholderService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        PlaceholderService.prototype._descriptionSubject;
        /**
         * @type {?}
         * @private
         */
        PlaceholderService.prototype._stateSubject;
        /** @type {?} */
        PlaceholderService.prototype.descriptionChanged;
        /** @type {?} */
        PlaceholderService.prototype.stateChanged;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DocumentPageService = /** @class */ (function () {
        function DocumentPageService() {
            this._activePageChangedSubject = new rxjs.Subject();
            this._activePage = null;
            this.activePageChanged = this._activePageChangedSubject.asObservable();
        }
        Object.defineProperty(DocumentPageService.prototype, "activePage", {
            get: /**
             * @return {?}
             */
            function () {
                return this._activePage;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} activePage
         * @return {?}
         */
        DocumentPageService.prototype.setActivePage = /**
         * @param {?} activePage
         * @return {?}
         */
        function (activePage) {
            this._activePage = activePage;
            this._activePageChangedSubject.next(activePage);
        };
        DocumentPageService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DocumentPageService.ctorParameters = function () { return []; };
        /** @nocollapse */ DocumentPageService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DocumentPageService_Factory() { return new DocumentPageService(); }, token: DocumentPageService, providedIn: "root" });
        return DocumentPageService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DocumentPageService.prototype._activePageChangedSubject;
        /**
         * @type {?}
         * @private
         */
        DocumentPageService.prototype._activePage;
        /** @type {?} */
        DocumentPageService.prototype.activePageChanged;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ParserAppComponent = /** @class */ (function () {
        function ParserAppComponent(_modalService, parserService, sourceFileService, templateService, _zoomService, _navigateService, placeholderService, documentPageService, _uploadFilesService, _passwordService, windowService) {
            var _this = this;
            this._modalService = _modalService;
            this._zoomService = _zoomService;
            this._navigateService = _navigateService;
            this._uploadFilesService = _uploadFilesService;
            this._passwordService = _passwordService;
            this.CREATE_FIELD_MODE = "createFieldMode";
            this.browseFilesModal = commonComponents.CommonModals.BrowseFiles;
            this.documentError = null;
            this.isApiAvaible = true;
            this.fileWasDropped = false;
            this.files = [];
            this.parserService = parserService;
            this.sourceFileService = sourceFileService;
            this.templateService = templateService;
            this.placeholderService = placeholderService;
            this.documentPageService = documentPageService;
            windowService.onResize.subscribe((/**
             * @param {?} w
             * @return {?}
             */
            function (w) {
                _this.refreshZoom();
            }));
            this.sourceFileService.sourceFileChanged.subscribe((/**
             * @param {?} sourceFile
             * @return {?}
             */
            function (sourceFile) { return _this.loadDocumentDescription(sourceFile); }));
            this._uploadFilesService.uploadsChange.subscribe((/**
             * @param {?} uploads
             * @return {?}
             */
            function (uploads) {
                if (uploads && uploads.length > 0) {
                    _this.parserService.upload(uploads.item(0), '', _this.rewriteConfig).subscribe((/**
                     * @param {?} obj
                     * @return {?}
                     */
                    function (obj) {
                        _this.fileWasDropped ? _this.selectFile(obj.guid, '', '') : _this.selectDir('');
                    }));
                }
            }));
            this._passwordService.passChange.subscribe((/**
             * @param {?} pass
             * @return {?}
             */
            function (pass) {
                _this.selectFile(_this.sourceFileService.sourceFile.guid, pass, commonComponents.CommonModals.PasswordRequired);
            }));
        }
        // Menu
        // Menu
        /**
         * @return {?}
         */
        ParserAppComponent.prototype.zoomIn = 
        // Menu
        /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var zoom = this._zoomService.zoom;
            if (zoom < 490) {
                this._zoomService.changeZoom(zoom + 10);
            }
        };
        /**
         * @return {?}
         */
        ParserAppComponent.prototype.zoomOut = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var zoom = this._zoomService.zoom;
            if (zoom > 30) {
                this._zoomService.changeZoom(zoom - 10);
            }
        };
        /**
         * @return {?}
         */
        ParserAppComponent.prototype.addFieldClick = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var template = this.templateService.currentTemplate;
            if (!template) {
                return;
            }
            /** @type {?} */
            var field = template.createField("Field");
            field.fieldType = TemplateFieldTypes.FIXED;
            field.pageNumber = this.documentPageService.activePage;
            template.addField(field);
        };
        /**
         * @return {?}
         */
        ParserAppComponent.prototype.addTableClick = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var template = this.templateService.currentTemplate;
            if (!template) {
                return;
            }
            /** @type {?} */
            var field = template.createField("Table");
            field.fieldType = TemplateFieldTypes.TABLE;
            field.pageNumber = this.documentPageService.activePage;
            template.addField(field);
        };
        // end of Menu
        // end of Menu
        /**
         * @return {?}
         */
        ParserAppComponent.prototype.isFileLoaded = 
        // end of Menu
        /**
         * @return {?}
         */
        function () {
            return !this.documentError && this.document;
        };
        /**
         * @param {?} id
         * @param {?} fileShouldBeLoaded
         * @return {?}
         */
        ParserAppComponent.prototype.openModal = /**
         * @param {?} id
         * @param {?} fileShouldBeLoaded
         * @return {?}
         */
        function (id, fileShouldBeLoaded) {
            if (fileShouldBeLoaded && !this.isFileLoaded())
                return;
            this._modalService.open(id);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        ParserAppComponent.prototype.selectDir = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this.parserService.loadFiles($event).subscribe((/**
             * @param {?} files
             * @return {?}
             */
            function (files) { return _this.files = files || []; }));
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        ParserAppComponent.prototype.upload = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this.parserService.upload(null, $event, this.rewriteConfig).subscribe((/**
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
        ParserAppComponent.prototype.fileDropped = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.fileWasDropped = $event;
        };
        /**
         * @param {?} $event
         * @param {?} password
         * @param {?} modalId
         * @return {?}
         */
        ParserAppComponent.prototype.selectFile = /**
         * @param {?} $event
         * @param {?} password
         * @param {?} modalId
         * @return {?}
         */
        function ($event, password, modalId) {
            this.credentials = new commonComponents.FileCredentials($event, password);
            this.sourceFileService.sourceFile = new SourceFile($event, password);
            if (modalId) {
                this._modalService.close(modalId);
            }
        };
        Object.defineProperty(ParserAppComponent.prototype, "rewriteConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.parserConfig ? this.parserConfig.rewrite : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ParserAppComponent.prototype, "uploadConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.parserConfig ? this.parserConfig.upload : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ParserAppComponent.prototype, "browseConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.parserConfig ? this.parserConfig.browse : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ParserAppComponent.prototype, "returnUrl", {
            get: /**
             * @return {?}
             */
            function () {
                return localStorage.getItem("returnUrl");
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ParserAppComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        ParserAppComponent.prototype.reloadCurrentPage = /**
         * @return {?}
         */
        function () {
            window.location.reload();
        };
        /**
         * @private
         * @param {?} sourceFile
         * @return {?}
         */
        ParserAppComponent.prototype.loadDocumentDescription = /**
         * @private
         * @param {?} sourceFile
         * @return {?}
         */
        function (sourceFile) {
            var _this = this;
            this.isApiAvaible = true;
            this.documentError = null;
            this._document = null;
            /** @type {?} */
            var operationState = this.placeholderService.startOperation("Loading document...");
            /** @type {?} */
            var observer = {
                next: (/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    _this.documentPageService.setActivePage(1);
                    _this._document = response;
                    operationState.complete();
                    _this.templateService.createTemplate();
                    _this.refreshZoom();
                    _this._navigateService.countPages = _this.document.pages ? _this.document.pages.length : 0;
                    _this._navigateService.currentPage = 1;
                }),
                error: (/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    _this.documentError = _this.parserService.getErrorMessage(err);
                    operationState.error(err);
                }),
                complete: (/**
                 * @return {?}
                 */
                function () { return operationState.complete(); })
            };
            this.parserService.loadDocumentDescription(sourceFile).subscribe(observer);
        };
        Object.defineProperty(ParserAppComponent.prototype, "document", {
            get: /**
             * @return {?}
             */
            function () {
                return this._document;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        ParserAppComponent.prototype.refreshZoom = /**
         * @private
         * @return {?}
         */
        function () {
            this._zoomService.changeZoom(this.getFitToWidth());
        };
        /**
         * @private
         * @return {?}
         */
        ParserAppComponent.prototype.getFitToWidth = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.document) {
                return 100;
            }
            /** @type {?} */
            var surfaceWidth = window.innerWidth;
            // Images and Excel-related files receiving dimensions in px from server
            /** @type {?} */
            var pageWidth = this.ptToPx(this.document.pages[0].width);
            /** @type {?} */
            var pageHeight = this.ptToPx(this.document.pages[0].height);
            /** @type {?} */
            var offsetWidth = pageWidth ? pageWidth : surfaceWidth;
            return (pageHeight > pageWidth && Math.round(offsetWidth / surfaceWidth) < 2)
                ? 200 - Math.round(offsetWidth * 100 / surfaceWidth)
                : Math.round(surfaceWidth * 100 / offsetWidth);
        };
        /**
         * @private
         * @param {?} pt
         * @return {?}
         */
        ParserAppComponent.prototype.ptToPx = /**
         * @private
         * @param {?} pt
         * @return {?}
         */
        function (pt) {
            //pt * 96 / 72 = px.
            return pt * 96 / 72;
        };
        ParserAppComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-app-parser',
                        template: "<gd-loading-mask></gd-loading-mask>\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"column\" [ngClass]=\"{'document-loaded': isFileLoaded()}\">\n      <div class=\"top-panel\">\n        <a class=\"logo-link\" [href]=\"returnUrl\">\n          <gd-logo [logo]=\"'parser'\" icon=\"glasses\"></gd-logo>\n        </a>\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal, false)\"\n            *ngIf=\"browseConfig\"></gd-button>\n\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"></gd-button>\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\" (click)=\"zoomOut()\"></gd-button>\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'expand'\" [tooltip]=\"'Add text field'\" (click)=\"addFieldClick()\"></gd-button>\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'table'\" [tooltip]=\"'Add table'\" (click)=\"addTableClick()\"></gd-button>\n        </gd-top-toolbar>\n      </div>\n       <gd-init-state [icon]=\"'glasses'\" [text]=\"'Drop file here to upload'\" *ngIf=\"documentError || !document\" (fileDropped)=\"fileDropped($event)\">\n        Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n        Or drop file here\n      </gd-init-state>\n\n      <div class=\"parser-wrapper\" *ngIf=\"!documentError && document\">\n        <gd-surface [document]=\"document\"></gd-surface>\n      </div>\n    </div>\n\n    <gd-parser-side-panel [fileNameForCsv]=\"\" *ngIf=\"!documentError && document\"></gd-parser-side-panel>\n  </div>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n    (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\" [uploadConfig]=\"uploadConfig\">\n  </gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n</div>",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.logo-link{color:inherit;text-decoration:inherit}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}.parser-wrapper{z-index:100;left:0;top:0;right:0;bottom:0}gd-parser-side-panel{position:absolute;right:0;top:60px;width:300px;height:calc(100vh - 60px);background-color:#fff}::ng-deep .tools .button{color:#fff!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .button.inactive{color:#959da5!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}.row{display:-webkit-box;display:flex}.column{width:100%;height:100vh;background-color:#e7e7e7;overflow:hidden}::ng-deep .gd-side-panel-body{background-color:#f4f4f4}::ng-deep .gd-side-panel-wrapper{width:464px!important}::ng-deep .page.excel{overflow:unset!important}@media (max-width:1037px){::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .gd-side-panel-wrapper{width:375px!important}}"]
                    }] }
        ];
        /** @nocollapse */
        ParserAppComponent.ctorParameters = function () { return [
            { type: commonComponents.ModalService },
            { type: ParserService },
            { type: SourceFileService },
            { type: TemplateService },
            { type: commonComponents.ZoomService },
            { type: commonComponents.NavigateService },
            { type: PlaceholderService },
            { type: DocumentPageService },
            { type: commonComponents.UploadFilesService },
            { type: commonComponents.PasswordService },
            { type: commonComponents.WindowService }
        ]; };
        ParserAppComponent.propDecorators = {
            sourceFile: [{ type: core.Input }]
        };
        return ParserAppComponent;
    }());
    if (false) {
        /** @type {?} */
        ParserAppComponent.prototype.sourceFile;
        /**
         * @type {?}
         * @private
         */
        ParserAppComponent.prototype.CREATE_FIELD_MODE;
        /** @type {?} */
        ParserAppComponent.prototype.browseFilesModal;
        /**
         * @type {?}
         * @private
         */
        ParserAppComponent.prototype._document;
        /** @type {?} */
        ParserAppComponent.prototype.template;
        /** @type {?} */
        ParserAppComponent.prototype.parserConfig;
        /** @type {?} */
        ParserAppComponent.prototype.filePassword;
        /** @type {?} */
        ParserAppComponent.prototype.documentError;
        /** @type {?} */
        ParserAppComponent.prototype.isApiAvaible;
        /** @type {?} */
        ParserAppComponent.prototype.fileWasDropped;
        /** @type {?} */
        ParserAppComponent.prototype.files;
        /** @type {?} */
        ParserAppComponent.prototype.parserService;
        /** @type {?} */
        ParserAppComponent.prototype.sourceFileService;
        /** @type {?} */
        ParserAppComponent.prototype.templateService;
        /** @type {?} */
        ParserAppComponent.prototype.placeholderService;
        /** @type {?} */
        ParserAppComponent.prototype.documentPageService;
        /** @type {?} */
        ParserAppComponent.prototype.credentials;
        /**
         * @type {?}
         * @private
         */
        ParserAppComponent.prototype._modalService;
        /**
         * @type {?}
         * @private
         */
        ParserAppComponent.prototype._zoomService;
        /**
         * @type {?}
         * @private
         */
        ParserAppComponent.prototype._navigateService;
        /**
         * @type {?}
         * @private
         */
        ParserAppComponent.prototype._uploadFilesService;
        /**
         * @type {?}
         * @private
         */
        ParserAppComponent.prototype._passwordService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FieldService = /** @class */ (function () {
        function FieldService(rendererFactory2) {
            this.rendererFactory2 = rendererFactory2;
            this._destroy = new rxjs.Subject();
            this._isMoving = false;
            this._mouseMoveSubject = new rxjs.Subject();
            this._mouseUpSubject = new rxjs.Subject();
            this._activeChangedSubject = new rxjs.Subject();
            this.mouseMove = this._mouseMoveSubject.asObservable();
            this.mouseUp = this._mouseUpSubject.asObservable();
            this.activeChanged = this._activeChangedSubject.asObservable();
            /** @type {?} */
            var renderer = this.rendererFactory2.createRenderer(null, null);
            this.createMouseObservables(renderer);
        }
        /**
         * @private
         * @param {?} renderer
         * @return {?}
         */
        FieldService.prototype.createMouseObservables = /**
         * @private
         * @param {?} renderer
         * @return {?}
         */
        function (renderer) {
            // MOUSE
            var _this = this;
            // MOUSE
            /** @type {?} */
            var removeMouseMoveListener;
            /** @type {?} */
            var createMouseMoveListener = (/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                removeMouseMoveListener = renderer.listen("document", "mousemove", handler);
            });
            rxjs.fromEventPattern(createMouseMoveListener, (/**
             * @return {?}
             */
            function () { return removeMouseMoveListener(); }))
                .pipe(operators.takeUntil(this._destroy))
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.onMouseMove(event); }));
            /** @type {?} */
            var removeMouseUpListener;
            /** @type {?} */
            var createMouseUpListener = (/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                removeMouseUpListener = renderer.listen("document", "mouseup", handler);
            });
            rxjs.fromEventPattern(createMouseUpListener, (/**
             * @return {?}
             */
            function () { return removeMouseUpListener(); }))
                .pipe(operators.takeUntil(this._destroy))
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.onMouseUp(event); }));
            // TOUCH
            /** @type {?} */
            var removePanMoveListener;
            /** @type {?} */
            var createPanMoveListener = (/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                removePanMoveListener = renderer.listen("document", "panmove", handler);
            });
            rxjs.fromEventPattern(createPanMoveListener, (/**
             * @return {?}
             */
            function () { return removePanMoveListener(); }))
                .pipe(operators.takeUntil(this._destroy))
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.onMouseMove(event); }));
            /** @type {?} */
            var removePanEndListener;
            /** @type {?} */
            var createPanEndListener = (/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                removePanEndListener = renderer.listen("document", "panend", handler);
            });
            rxjs.fromEventPattern(createPanEndListener, (/**
             * @return {?}
             */
            function () { return removePanEndListener(); }))
                .pipe(operators.takeUntil(this._destroy))
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.onMouseUp(event); }));
        };
        /**
         * @return {?}
         */
        FieldService.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._destroy.next();
            this._destroy.complete();
        };
        Object.defineProperty(FieldService.prototype, "isMoving", {
            get: /**
             * @return {?}
             */
            function () {
                return this._isMoving;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} fieldName
         * @return {?}
         */
        FieldService.prototype.setActive = /**
         * @param {?} fieldName
         * @return {?}
         */
        function (fieldName) {
            this._activeChangedSubject.next(fieldName);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        FieldService.prototype.beginMove = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            /** @type {?} */
            var mousePosition = commonComponents.Utils.getMousePosition($event);
            this._isMoving = true;
            return mousePosition;
        };
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        FieldService.prototype.onMouseMove = /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (!this.isMoving) {
                return;
            }
            /** @type {?} */
            var mousePosition = commonComponents.Utils.getMousePosition($event);
            this._mouseMoveSubject.next(mousePosition);
        };
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        FieldService.prototype.onMouseUp = /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (!this.isMoving) {
                return;
            }
            /** @type {?} */
            var mousePosition = commonComponents.Utils.getMousePosition($event);
            this._mouseUpSubject.next(mousePosition);
            this._isMoving = false;
        };
        FieldService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FieldService.ctorParameters = function () { return [
            { type: core.RendererFactory2 }
        ]; };
        /** @nocollapse */ FieldService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function FieldService_Factory() { return new FieldService(core.ɵɵinject(core.RendererFactory2)); }, token: FieldService, providedIn: "root" });
        return FieldService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FieldService.prototype._destroy;
        /**
         * @type {?}
         * @private
         */
        FieldService.prototype._isMoving;
        /**
         * @type {?}
         * @private
         */
        FieldService.prototype._mouseMoveSubject;
        /**
         * @type {?}
         * @private
         */
        FieldService.prototype._mouseUpSubject;
        /**
         * @type {?}
         * @private
         */
        FieldService.prototype._activeChangedSubject;
        /** @type {?} */
        FieldService.prototype.mouseMove;
        /** @type {?} */
        FieldService.prototype.mouseUp;
        /** @type {?} */
        FieldService.prototype.activeChanged;
        /**
         * @type {?}
         * @private
         */
        FieldService.prototype.rendererFactory2;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var $ = jquery;
    var FieldContextMenuClick = /** @class */ (function () {
        function FieldContextMenuClick(fieldName, action) {
            this.fieldName = fieldName;
            this.action = action;
        }
        return FieldContextMenuClick;
    }());
    if (false) {
        /** @type {?} */
        FieldContextMenuClick.prototype.fieldName;
        /** @type {?} */
        FieldContextMenuClick.prototype.action;
    }
    var FieldComponent = /** @class */ (function () {
        function FieldComponent(_fieldService, _zoomService) {
            var _this = this;
            this._fieldService = _fieldService;
            this._zoomService = _zoomService;
            this._destroy = new rxjs.Subject();
            this.contextMenuClick = new core.EventEmitter();
            _fieldService.activeChanged.pipe(operators.takeUntil(this._destroy))
                .subscribe((/**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                _this.isActive = _this._field && _this._field.name === name;
            }));
        }
        /**
         * @return {?}
         */
        FieldComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        FieldComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._destroy.next();
            this._destroy.complete();
        };
        Object.defineProperty(FieldComponent.prototype, "isFixed", {
            get: /**
             * @return {?}
             */
            function () {
                return this.field.fieldType === TemplateFieldTypes.FIXED;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldComponent.prototype, "isTable", {
            get: /**
             * @return {?}
             */
            function () {
                return this.field.fieldType === TemplateFieldTypes.TABLE;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldComponent.prototype, "left", {
            get: /**
             * @return {?}
             */
            function () {
                return this._left;
            },
            set: /**
             * @param {?} left
             * @return {?}
             */
            function (left) {
                if (!this.pageSize) {
                    return;
                }
                this._left = Math.min(this.pageSize.width, Math.max(0, left));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldComponent.prototype, "top", {
            get: /**
             * @return {?}
             */
            function () {
                return this._top;
            },
            set: /**
             * @param {?} top
             * @return {?}
             */
            function (top) {
                if (!this.pageSize) {
                    return;
                }
                this._top = Math.min(this.pageSize.height, Math.max(0, top));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldComponent.prototype, "right", {
            get: /**
             * @return {?}
             */
            function () {
                return this._right;
            },
            set: /**
             * @param {?} right
             * @return {?}
             */
            function (right) {
                if (!this.pageSize) {
                    return;
                }
                this._right = Math.min(Math.max(0, right), this.pageSize.width);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldComponent.prototype, "bottom", {
            get: /**
             * @return {?}
             */
            function () {
                return this._bottom;
            },
            set: /**
             * @param {?} bottom
             * @return {?}
             */
            function (bottom) {
                if (!this.pageSize) {
                    return;
                }
                this._bottom = Math.min(Math.max(0, bottom), this.pageSize.height);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldComponent.prototype, "width", {
            get: /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var width = this.right - this.left;
                return width ? width : 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldComponent.prototype, "height", {
            get: /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var height = this.bottom - this.top;
                return height ? height : 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldComponent.prototype, "scale", {
            get: /**
             * @return {?}
             */
            function () {
                return this._zoomService.zoom / 100;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        FieldComponent.prototype.renameFieldClick = /**
         * @return {?}
         */
        function () {
            this.contextMenuClick.emit(new FieldContextMenuClick(this.field.name, "rename"));
        };
        /**
         * @return {?}
         */
        FieldComponent.prototype.deleteFieldClick = /**
         * @return {?}
         */
        function () {
            this.contextMenuClick.emit(new FieldContextMenuClick(this.field.name, "remove"));
        };
        /**
         * @return {?}
         */
        FieldComponent.prototype.addColumnLeft = /**
         * @return {?}
         */
        function () {
            this.field.addColumn(null, this.width * 0.1);
        };
        /**
         * @return {?}
         */
        FieldComponent.prototype.addColumnRight = /**
         * @return {?}
         */
        function () {
            this.field.addColumn(null, this.width * 0.9);
        };
        /**
         * @param {?} column
         * @return {?}
         */
        FieldComponent.prototype.removeColumn = /**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            this.field.removeColumn(column);
        };
        Object.defineProperty(FieldComponent.prototype, "field", {
            get: /**
             * @return {?}
             */
            function () {
                return this._field;
            },
            set: /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                this._field = field;
                this.left = this.field.position.x;
                this.top = this.field.position.y;
                this.right = this.field.position.x + this.field.size.width;
                this.bottom = this.field.position.y + this.field.size.height;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} $event
         * @param {?} mode
         * @return {?}
         */
        FieldComponent.prototype.mouseDown = /**
         * @param {?} $event
         * @param {?} mode
         * @return {?}
         */
        function ($event, mode) {
            var _this = this;
            $event.preventDefault();
            this._fieldService.setActive(this.field.name);
            /** @type {?} */
            var startMousePos = this._fieldService.beginMove($event);
            /** @type {?} */
            var left = this.left;
            /** @type {?} */
            var top = this.top;
            /** @type {?} */
            var right = this.right;
            /** @type {?} */
            var bottom = this.bottom;
            /** @type {?} */
            var column = this.field.getColumnByName(mode);
            /** @type {?} */
            var columnInitialPos = column ? column.value : null;
            //  let ppa = mode.startsWith('TC:');
            /** @type {?} */
            var mouseUpSubscription = this._fieldService.mouseUp
                .subscribe((/**
             * @param {?} mousePos
             * @return {?}
             */
            function (mousePos) {
                _this._field.position = new Point(_this.left, _this.top);
                _this._field.size = new Size(_this.width, _this.height);
                //    ppa = false;
                mouseUpSubscription.unsubscribe();
            }));
            this._fieldService.mouseMove
                .pipe(operators.takeUntil(this._fieldService.mouseUp))
                .subscribe((/**
             * @param {?} mousePos
             * @return {?}
             */
            function (mousePos) {
                if (!mousePos || !_this.pageSize) {
                    return;
                }
                /** @type {?} */
                var minWidth = 40;
                /** @type {?} */
                var minHeight = 15;
                /** @type {?} */
                var width = _this.width;
                /** @type {?} */
                var height = _this.height;
                /** @type {?} */
                var delta = new Point((mousePos.x - startMousePos.x) / _this.scale, (mousePos.y - startMousePos.y) / _this.scale);
                if (columnInitialPos) {
                    /** @type {?} */
                    var v = columnInitialPos + delta.x;
                    column.value = Math.max(0, Math.min(_this.width, v));
                    return;
                }
                switch (mode) {
                    case 'Move':
                        _this.left = Math.min(left + delta.x, _this.pageSize.width - _this.width);
                        _this.top = Math.min(top + delta.y, _this.pageSize.height - _this.height);
                        _this.right = _this.left + width;
                        _this.bottom = _this.top + height;
                        break;
                    // Edges
                    case 'W':
                        _this.left = left + delta.x;
                        if (_this.width < minWidth) {
                            _this.left = _this.right - minWidth;
                        }
                        break;
                    case 'E':
                        _this.right = right + delta.x;
                        if (_this.width < minWidth) {
                            _this.right = _this.left + minWidth;
                        }
                        break;
                    case 'N':
                        _this.top = top + delta.y;
                        if (_this.height < minWidth) {
                            _this.top = _this.bottom - minHeight;
                        }
                        break;
                    case 'S':
                        _this.bottom = bottom + delta.y;
                        if (_this.height < minHeight) {
                            _this.bottom = _this.top + minHeight;
                        }
                        break;
                    // Corners
                    case 'NW':
                        _this.left = left + delta.x;
                        _this.top = top + delta.y;
                        if (_this.width < minWidth) {
                            _this.left = _this.right - minWidth;
                        }
                        if (_this.height < minWidth) {
                            _this.top = _this.bottom - minHeight;
                        }
                        break;
                    case 'SW':
                        _this.left = left + delta.x;
                        _this.bottom = bottom + delta.y;
                        if (_this.width < minWidth) {
                            _this.left = _this.right - minWidth;
                        }
                        if (_this.height < minHeight) {
                            _this.bottom = _this.top + minHeight;
                        }
                        break;
                    case 'NE':
                        _this.right = right + delta.x;
                        _this.top = top + delta.y;
                        if (_this.width < minWidth) {
                            _this.right = _this.left + minWidth;
                        }
                        if (_this.height < minHeight) {
                            _this.top = _this.bottom - minHeight;
                        }
                        break;
                    case 'SE':
                        _this.right = right + delta.x;
                        _this.bottom = bottom + delta.y;
                        if (_this.width < minWidth) {
                            _this.right = _this.left + minWidth;
                        }
                        if (_this.height < minHeight) {
                            _this.bottom = _this.top + minHeight;
                        }
                        break;
                }
            }));
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        FieldComponent.prototype.rightClick = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
        };
        FieldComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-field',
                        template: "<div class=\"field\" (clickOutside)=\"isActive = false\" (contextmenu)=\"rightClick($event)\"\n    [clickOutsideEvents]=\"'mousedown'\" [clickOutsideEnabled]=\"isActive\" [style.left.px]=\"left\" [style.top.px]=\"top\"\n    [style.width.px]=\"width\" [style.height.px]=\"height\">\n\n    <div class=\"field-text\" (dblclick)=\"renameFieldClick()\" (mousedown)=\"mouseDown($event, 'Move')\"\n        (panstart)=\"mouseDown($event, 'Move')\">\n        <div *ngIf=\"!isActive\">{{ field.name }}</div>\n    </div>\n    <div class=\"resizable-handle ne-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'NE')\"\n        (panstart)=\"mouseDown($event, 'NE')\"></div>\n    <div class=\"resizable-handle se-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'SE')\"\n        (panstart)=\"mouseDown($event, 'SE')\"></div>\n    <div class=\"resizable-handle sw-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'SW')\"\n        (panstart)=\"mouseDown($event, 'SW')\"></div>\n    <div class=\"resizable-handle nw-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'NW')\"\n        (panstart)=\"mouseDown($event, 'NW')\"></div>\n\n    <div class=\"resizable-v-edge w-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'W')\"\n        (panstart)=\"mouseDown($event, 'W')\"></div>\n    <div class=\"resizable-v-edge e-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'E')\"\n        (panstart)=\"mouseDown($event, 'E')\"></div>\n    <div class=\"resizable-h-edge n-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'N')\"\n        (panstart)=\"mouseDown($event, 'N')\"></div>        \n    <div class=\"resizable-h-edge s-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'S')\"\n        (panstart)=\"mouseDown($event, 'S')\"></div>\n\n    <div *ngIf=\"isTable && isActive\">\n        <div *ngFor=\"let column of field.columns\" class=\"tc-top resizable-handle\" [style.left.px]=\"column.value\"></div>\n        <div *ngFor=\"let column of field.columns\" class=\"tc-bottom resizable-handle\" [style.left.px]=\"column.value\"></div>\n        <div *ngFor=\"let column of field.columns\" class=\"tc\" [style.left.px]=\"column.value\"\n            (mousedown)=\"mouseDown($event, column.name)\">\n            <div class=\"tc-background\"></div>\n            <div class=\"tc-remove image-btn\" title=\"Remove column separator\" (click)=\"removeColumn(column)\">\n                <fa-icon [icon]=\"'trash'\"></fa-icon>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"isTable && !isActive\">\n        <div *ngFor=\"let column of field.columns\" class=\"tc-deactived\" [style.left.px]=\"column.value\">\n        </div>\n    </div>\n\n    <div class=\"tc-add-left image-btn\" *ngIf=\"isTable && isActive\" title=\"Add new column separator\" (click)=\"addColumnLeft()\">\n        <fa-icon [icon]=\"'plus'\"></fa-icon>\n    </div>\n\n    <div class=\"tc-add-right image-btn\" *ngIf=\"isTable && isActive\" title=\"Add new column separator\" (click)=\"addColumnRight()\">\n        <fa-icon [icon]=\"'plus'\"></fa-icon>\n    </div>\n\n    <div class=\"context-menu\" *ngIf=\"isActive\">\n        <div class=\"image-btn\" (click)=\"renameFieldClick()\" title=\"Rename the field\">\n            <fa-icon [icon]=\"'edit'\"></fa-icon>\n        </div>\n        <div class=\"image-btn\" (click)=\"deleteFieldClick()\" title=\"Remove the field\">\n            <fa-icon [icon]=\"'trash'\"></fa-icon>\n        </div>\n    </div>\n\n    <div class=\"field-name\" *ngIf=\"isActive\">\n        {{ field.name }}\n    </div>\n\n</div>",
                        styles: [".btn{padding:5px 20px;background-color:#25c2d4;cursor:pointer;color:#fff!important}.btn:hover{background-color:#688296;color:#ccd0d4!important}.image-btn{text-align:center;cursor:pointer;margin:1px;color:#c4c4c4}.image-btn:hover{color:#688296!important}.image-btn>fa-icon{padding:5px;font-size:16px}.list-item:nth-of-type(even){background-color:#f4f4f4}.list-item:hover{background-color:#e5e5e5}.tc{position:absolute;display:block;border-left:4px solid #679ffa;width:4px;top:-5px;bottom:-5px;cursor:col-resize;z-index:1000}.tc-deactived{position:absolute;display:block;border-left:4px solid #738a9cc9;width:4px;top:0;bottom:0;cursor:col-resize;z-index:1000}.tc-background{-webkit-transform:translatex(-9px);transform:translatex(-9px);background-color:#fffFFF01;width:15px;height:100%}.tc-top{top:-5px;-webkit-transform:translatex(-3px);transform:translatex(-3px);cursor:col-resize}.tc-bottom{bottom:-5px;-webkit-transform:translatex(-3px);transform:translatex(-3px);cursor:col-resize}.tc-remove{background:#fff;display:none;position:absolute;top:15px}.tc:hover>.tc-remove{display:block}.tc-add-left{position:absolute;left:-5px;top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.tc-add-right{position:absolute;right:-5px;top:50%;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}.resizable-v-edge{background-color:#fffFFF01;position:absolute;font-size:.1px;display:block;width:10px;top:5px;bottom:5px}.resizable-h-edge{background-color:#fffFFF01;position:absolute;font-size:.1px;display:block;height:10px;left:5px;right:5px}.w-resize{cursor:w-resize;left:-5px}.e-resize{cursor:e-resize;right:-5px}.n-resize{cursor:n-resize;top:-5px}.s-resize{cursor:s-resize;bottom:-5px}.resizable-handle{background-color:#679ffa;width:10px;height:10px;position:absolute;font-size:.1px;display:block}.se-resize{bottom:-5px;right:-5px;cursor:se-resize}.ne-resize{top:-5px;right:-5px;cursor:ne-resize}.sw-resize{bottom:-5px;left:-5px;cursor:sw-resize}.nw-resize{top:-5px;left:-5px;cursor:nw-resize}.field{position:absolute}.field-text{background-color:#99b1c440;cursor:move;color:#000;width:inherit;height:inherit}.field-text>div{background-color:#99b1c4DD;box-sizing:border-box;width:100%;height:100%;padding:1px 5px;font-size:10px;overflow:hidden;text-overflow:ellipsis;pointer-events:none}.field-name{position:absolute;width:auto;left:50%;top:0;-webkit-transform:translate(-50%,calc(-100% - 5px));transform:translate(-50%,calc(-100% - 5px));padding:2px 5px;background-color:#fff;border:#688296;box-shadow:rgba(0,0,0,.52) 0 0 5px;font-size:8px;color:#688296;cursor:context-menu}.context-menu{position:absolute;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;width:auto;left:50%;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);margin-top:5px;background-color:#fff;border:#688296;box-shadow:rgba(0,0,0,.52) 0 0 5px}"]
                    }] }
        ];
        /** @nocollapse */
        FieldComponent.ctorParameters = function () { return [
            { type: FieldService },
            { type: commonComponents.ZoomService }
        ]; };
        FieldComponent.propDecorators = {
            contextMenuClick: [{ type: core.Output }]
        };
        return FieldComponent;
    }());
    if (false) {
        /** @type {?} */
        FieldComponent.prototype.pageSize;
        /**
         * @type {?}
         * @private
         */
        FieldComponent.prototype._left;
        /**
         * @type {?}
         * @private
         */
        FieldComponent.prototype._top;
        /**
         * @type {?}
         * @private
         */
        FieldComponent.prototype._right;
        /**
         * @type {?}
         * @private
         */
        FieldComponent.prototype._bottom;
        /**
         * @type {?}
         * @private
         */
        FieldComponent.prototype._field;
        /**
         * @type {?}
         * @private
         */
        FieldComponent.prototype._destroy;
        /** @type {?} */
        FieldComponent.prototype.isActive;
        /** @type {?} */
        FieldComponent.prototype.contextMenuClick;
        /**
         * @type {?}
         * @private
         */
        FieldComponent.prototype._fieldService;
        /**
         * @type {?}
         * @private
         */
        FieldComponent.prototype._zoomService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RenameModalComponent = /** @class */ (function () {
        function RenameModalComponent() {
            this.acceptEvent = new core.EventEmitter();
            this.cancelEvent = new core.EventEmitter();
            this._error = null;
        }
        Object.defineProperty(RenameModalComponent.prototype, "hasError", {
            get: /**
             * @return {?}
             */
            function () {
                return this.error != null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RenameModalComponent.prototype, "error", {
            get: /**
             * @return {?}
             */
            function () {
                return this._error;
            },
            set: /**
             * @param {?} newError
             * @return {?}
             */
            function (newError) {
                this._error = newError;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RenameModalComponent.prototype, "value", {
            get: /**
             * @return {?}
             */
            function () {
                return this._value;
            },
            set: /**
             * @param {?} newValue
             * @return {?}
             */
            function (newValue) {
                this._value = newValue;
                if (this.hasError) {
                    this._error = null;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        RenameModalComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (!this.initialValue) {
                this.initialValue = "";
            }
            this.value = this.initialValue;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        RenameModalComponent.prototype.refresh = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            if ($event) {
                this._error = null;
                this._value = this.initialValue;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.inputBox.nativeElement.focus();
                }), 0);
            }
        };
        /**
         * @return {?}
         */
        RenameModalComponent.prototype.acceptClick = /**
         * @return {?}
         */
        function () {
            // Check if value is not empty
            if (this.value === null || this.value === "") {
                this._error = "A new value can't be empty";
            }
            if (!this.hasError) {
                this.acceptEvent.emit({ id: this.operationId, newValue: this.value });
            }
        };
        /**
         * @return {?}
         */
        RenameModalComponent.prototype.cancelClick = /**
         * @return {?}
         */
        function () {
            if (this.modalElement) {
                this.modalElement.cancelClose();
            }
        };
        RenameModalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-rename-modal',
                        template: "<gd-modal #modal [id]=\"id\" [title]=\"title\" (visible)=\"refresh($event)\">\n  <div class=\"window\">\n    <div class=\"prompt\">{{ promptText }}</div>\n    <input #inputBox type=\"text\" [value]=\"value\" (input)=\"value=$event.target.value\" (keyup.enter)=\"acceptClick()\" (keyup.esc)=\"cancelClick()\"/>\n\n    <div class=\"error\" *ngIf=\"error\">{{ error }}</div>\n\n    <div class=\"buttons\">      \n      <div class=\"btn\" (click)=\"acceptClick()\">{{ acceptText }}</div>\n      <div class=\"btn\" (click)=\"cancelClick()\">Cancel</div>\n    </div>\n  </div>\n</gd-modal>",
                        styles: [".btn{padding:5px 20px;background-color:#25c2d4;cursor:pointer;color:#fff!important}.btn:hover{background-color:#688296;color:#ccd0d4!important}.image-btn{text-align:center;color:#fff;cursor:pointer;margin:1px}.image-btn:hover{color:#688296!important}.image-btn>fa-icon{padding:5px;font-size:16px}.list-item:nth-of-type(even){background-color:#f4f4f4}.list-item:hover{background-color:#e5e5e5}input{margin-top:20px;margin-bottom:20px;padding:5px}.window{min-width:400px;min-height:auto;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:24px}.buttons{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;margin-left:auto;margin-top:auto}.buttons>div{margin-left:10px}.error{color:red;padding-top:1px;padding-bottom:20px}"]
                    }] }
        ];
        /** @nocollapse */
        RenameModalComponent.ctorParameters = function () { return []; };
        RenameModalComponent.propDecorators = {
            id: [{ type: core.Input }],
            title: [{ type: core.Input }],
            promptText: [{ type: core.Input }],
            acceptText: [{ type: core.Input }],
            operationId: [{ type: core.Input }],
            initialValue: [{ type: core.Input }],
            acceptEvent: [{ type: core.Output }],
            cancelEvent: [{ type: core.Output }],
            modalElement: [{ type: core.ViewChild, args: ['modal', { static: true },] }],
            inputBox: [{ type: core.ViewChild, args: ['inputBox', { static: true },] }],
            error: [{ type: core.Input }]
        };
        return RenameModalComponent;
    }());
    if (false) {
        /** @type {?} */
        RenameModalComponent.prototype.id;
        /** @type {?} */
        RenameModalComponent.prototype.title;
        /** @type {?} */
        RenameModalComponent.prototype.promptText;
        /** @type {?} */
        RenameModalComponent.prototype.acceptText;
        /** @type {?} */
        RenameModalComponent.prototype.operationId;
        /** @type {?} */
        RenameModalComponent.prototype.initialValue;
        /** @type {?} */
        RenameModalComponent.prototype.acceptEvent;
        /** @type {?} */
        RenameModalComponent.prototype.cancelEvent;
        /** @type {?} */
        RenameModalComponent.prototype.modalElement;
        /** @type {?} */
        RenameModalComponent.prototype.inputBox;
        /**
         * @type {?}
         * @private
         */
        RenameModalComponent.prototype._error;
        /**
         * @type {?}
         * @private
         */
        RenameModalComponent.prototype._value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var $$1 = jquery;
    var SurfaceComponent = /** @class */ (function () {
        function SurfaceComponent(_modalService, hostingComponentsService, addDynamicComponentService, _zoomService, _templateService, _documentPageService) {
            var _this = this;
            this._modalService = _modalService;
            this.hostingComponentsService = hostingComponentsService;
            this.addDynamicComponentService = addDynamicComponentService;
            this._zoomService = _zoomService;
            this._templateService = _templateService;
            this._documentPageService = _documentPageService;
            //private fieldComponentRefs = new Map<TemplateField, ComponentRef<{}>>();
            this.fieldWrappers = new Map();
            this._zoom = _zoomService.zoom;
            _zoomService.zoomChange.subscribe((/**
             * @param {?} zoom
             * @return {?}
             */
            function (zoom) {
                _this._zoom = zoom;
            }));
            this._currentTemplateChangedSubscription = _templateService.currentTemplateChanged
                .subscribe((/**
             * @param {?} template
             * @return {?}
             */
            function (template) { return _this.setTemplate(template); }));
            this.setTemplate(this._templateService.currentTemplate);
            this._documentPageService.activePageChanged.subscribe((/**
             * @param {?} _
             * @return {?}
             */
            function (_) { return _this.updateActivePage(); }));
        }
        Object.defineProperty(SurfaceComponent.prototype, "document", {
            get: /**
             * @return {?}
             */
            function () {
                return this._document;
            },
            set: /**
             * @param {?} document
             * @return {?}
             */
            function (document) {
                this._document = document;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SurfaceComponent.prototype, "scale", {
            get: /**
             * @return {?}
             */
            function () {
                return this._zoom / 100;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} field
         * @return {?}
         */
        SurfaceComponent.prototype.addField = /**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            var _this = this;
            /** @type {?} */
            var dynamicDirective = this.hostingComponentsService.find(field.pageNumber);
            if (dynamicDirective) {
                /** @type {?} */
                var viewContainerRef = dynamicDirective.viewContainerRef;
                /** @type {?} */
                var fieldComponent = this.addDynamicComponentService.addDynamicComponent(viewContainerRef, FieldComponent);
                /** @type {?} */
                var wrapper = new FieldWrapper(fieldComponent);
                /** @type {?} */
                var pageModel = this.document.pages.find((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) {
                    return p.number === field.pageNumber;
                }));
                wrapper.fieldComponent.pageSize = new Size(pageModel.width, pageModel.height);
                wrapper.fieldComponent.field = field;
                wrapper.contextMenuSubscription = wrapper.fieldComponent.contextMenuClick.subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) { return _this.fieldContextMenuClick(event); }));
                this.fieldWrappers.set(field, wrapper);
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        SurfaceComponent.prototype.fieldContextMenuClick = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.action === "rename") {
                this.fieldNameModal.operationId = event.fieldName;
                this.fieldNameModal.initialValue = event.fieldName;
                this._modalService.open("FieldNameModal");
                return;
            }
            if (event.action === "remove") {
                this._template.removeFieldByName(event.fieldName);
                return;
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        SurfaceComponent.prototype.fieldNameModalAccept = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var oldFieldName = event.id;
            /** @type {?} */
            var newFieldName = event.newValue;
            if (oldFieldName !== newFieldName) {
                /** @type {?} */
                var existFieldWithName = this._template.getFieldByName(newFieldName);
                if (existFieldWithName) {
                    this.fieldNameModal.error = "Field with the same name already exists";
                    return;
                }
            }
            this._modalService.close("FieldNameModal");
            /** @type {?} */
            var field = this._template.getFieldByName(oldFieldName);
            if (field) {
                field.name = newFieldName;
            }
        };
        /**
         * @return {?}
         */
        SurfaceComponent.prototype.removeFields = /**
         * @return {?}
         */
        function () {
            this.fieldWrappers.forEach((/**
             * @param {?} wrapper
             * @return {?}
             */
            function (wrapper) {
                wrapper.destroy();
            }));
            this.fieldWrappers.clear();
        };
        /**
         * @param {?} field
         * @return {?}
         */
        SurfaceComponent.prototype.removeField = /**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            /** @type {?} */
            var wrapper = this.fieldWrappers.get(field);
            if (wrapper) {
                wrapper.destroy();
            }
            this.fieldWrappers.delete(field);
        };
        /**
         * @private
         * @param {?} position
         * @param {?} page
         * @return {?}
         */
        SurfaceComponent.prototype.getCurrentPosition = /**
         * @private
         * @param {?} position
         * @param {?} page
         * @return {?}
         */
        function (position, page) {
            /** @type {?} */
            var x = (position.x - page.offset().left);
            /** @type {?} */
            var y = (position.y - page.offset().top);
            return new Point(x, y);
        };
        // @HostListener('document:mousedown', ['$event'])
        // onMouseDown($event: MouseEvent) {
        //   const pos = Utils.getMousePosition($event);
        //   let e = document.elementFromPoint(pos.x, pos.y);
        // }
        // @HostListener('document:mousedown', ['$event'])
        // onMouseDown($event: MouseEvent) {
        //   const pos = Utils.getMousePosition($event);
        //   let e = document.elementFromPoint(pos.x, pos.y);
        // }
        /**
         * @return {?}
         */
        SurfaceComponent.prototype.ngOnInit = 
        // @HostListener('document:mousedown', ['$event'])
        // onMouseDown($event: MouseEvent) {
        //   const pos = Utils.getMousePosition($event);
        //   let e = document.elementFromPoint(pos.x, pos.y);
        // }
        /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        SurfaceComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.updateActivePage();
        };
        /**
         * @return {?}
         */
        SurfaceComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this._fieldAddedSubscription) {
                this._fieldAddedSubscription.unsubscribe();
            }
            if (this._fieldRemovedSubscription) {
                this._fieldRemovedSubscription.unsubscribe();
            }
            if (this._currentTemplateChangedSubscription) {
                this._currentTemplateChangedSubscription.unsubscribe();
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        SurfaceComponent.prototype.doubleTap = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            //  $event.preventDefault();
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        SurfaceComponent.prototype.setActivePage = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            /** @type {?} */
            var position = commonComponents.Utils.getMousePosition($event);
            /** @type {?} */
            var elements = document.elementsFromPoint(position.x, position.y);
            /** @type {?} */
            var currentPage = elements.find((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.id && x.id.startsWith("page-"); }));
            if (currentPage) {
                this._documentPageService.setActivePage(parseInt(currentPage.id.substring("page-".length), 10));
            }
        };
        /**
         * @private
         * @return {?}
         */
        SurfaceComponent.prototype.updateActivePage = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var activePage = "page-" + this._documentPageService.activePage;
            /** @type {?} */
            var elements = this.surface.nativeElement.querySelectorAll('gd-page');
            elements.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                /** @type {?} */
                var child = ((/** @type {?} */ (element))).children[0];
                if (child.id === activePage) {
                    ((/** @type {?} */ (child))).style.opacity = '1';
                    ((/** @type {?} */ (child))).parentElement.parentElement.style.background = '#FFFFFF';
                }
                else {
                    ((/** @type {?} */ (child))).style.opacity = '0.5';
                    ((/** @type {?} */ (child))).parentElement.parentElement.style.background = '#688296';
                }
            }));
        };
        /**
         * @private
         * @param {?} template
         * @return {?}
         */
        SurfaceComponent.prototype.setTemplate = /**
         * @private
         * @param {?} template
         * @return {?}
         */
        function (template) {
            var _this = this;
            this._template = template;
            if (this._fieldAddedSubscription) {
                this._fieldAddedSubscription.unsubscribe();
            }
            if (this._fieldRemovedSubscription) {
                this._fieldRemovedSubscription.unsubscribe();
            }
            if (!this._template) {
                return;
            }
            this._fieldAddedSubscription = this._template.addedField.subscribe((/**
             * @param {?} field
             * @return {?}
             */
            function (field) { return _this.addField(field); }));
            this._fieldRemovedSubscription = this._template.removedField.subscribe((/**
             * @param {?} field
             * @return {?}
             */
            function (field) { return _this.removeField(field); }));
            this.removeFields();
            this._template = template;
            this._template.fields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                _this.addField(field);
            }));
        };
        SurfaceComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-surface',
                        template: "<div #surface class=\"doc-panel\">\n  <gd-document class=\"gd-document\" *ngIf=\"document\" [mode]=\"false\" [file]=\"document\" gdScrollable gdRenderPrint\n    [htmlMode]=\"false\" (click)=\"setActivePage($event)\"></gd-document>\n\n  <gd-rename-modal #fieldNameModal [id]=\"'FieldNameModal'\" [title]=\"'Rename Field'\"\n    [promptText]=\"'Enter a new field name:'\" [acceptText]=\"'Save'\" (acceptEvent)=\"fieldNameModalAccept($event)\">\n  </gd-rename-modal>\n</div>",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);.red{box-shadow:10px 5px 5px red}:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .top-panel{align-content:flex-start}.gd-document{position:absolute;height:calc(100vh - 60px);width:calc(100vw - 300px);left:0;top:60px;right:-300px;overflow:auto}::ng-deep .panzoom{-webkit-box-pack:unset!important;justify-content:unset!important}::ng-deep .page{position:relative}::ng-deep .gd-page-image{width:unset;height:unset}"]
                    }] }
        ];
        /** @nocollapse */
        SurfaceComponent.ctorParameters = function () { return [
            { type: commonComponents.ModalService },
            { type: commonComponents.HostingDynamicComponentService },
            { type: commonComponents.AddDynamicComponentService },
            { type: commonComponents.ZoomService },
            { type: TemplateService },
            { type: DocumentPageService }
        ]; };
        SurfaceComponent.propDecorators = {
            fieldNameModal: [{ type: core.ViewChild, args: ['fieldNameModal', { static: true },] }],
            surface: [{ type: core.ViewChild, args: ['surface', { static: true },] }],
            document: [{ type: core.Input }]
        };
        return SurfaceComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SurfaceComponent.prototype._document;
        /**
         * @type {?}
         * @private
         */
        SurfaceComponent.prototype._template;
        /**
         * @type {?}
         * @private
         */
        SurfaceComponent.prototype._zoom;
        /**
         * @type {?}
         * @private
         */
        SurfaceComponent.prototype._fieldAddedSubscription;
        /**
         * @type {?}
         * @private
         */
        SurfaceComponent.prototype._fieldRemovedSubscription;
        /**
         * @type {?}
         * @private
         */
        SurfaceComponent.prototype._currentTemplateChangedSubscription;
        /**
         * @type {?}
         * @private
         */
        SurfaceComponent.prototype.fieldWrappers;
        /** @type {?} */
        SurfaceComponent.prototype.fieldNameModal;
        /** @type {?} */
        SurfaceComponent.prototype.surface;
        /**
         * @type {?}
         * @private
         */
        SurfaceComponent.prototype._modalService;
        /**
         * @type {?}
         * @private
         */
        SurfaceComponent.prototype.hostingComponentsService;
        /**
         * @type {?}
         * @private
         */
        SurfaceComponent.prototype.addDynamicComponentService;
        /**
         * @type {?}
         * @private
         */
        SurfaceComponent.prototype._zoomService;
        /**
         * @type {?}
         * @private
         */
        SurfaceComponent.prototype._templateService;
        /**
         * @type {?}
         * @private
         */
        SurfaceComponent.prototype._documentPageService;
    }
    var FieldWrapper = /** @class */ (function () {
        function FieldWrapper(ref) {
            this.ref = ref;
            this.fieldComponent = (/** @type {?} */ (ref.instance));
        }
        /**
         * @return {?}
         */
        FieldWrapper.prototype.destroy = /**
         * @return {?}
         */
        function () {
            if (this.ref) {
                this.ref.destroy();
            }
            if (this.contextMenuSubscription) {
                this.contextMenuSubscription.unsubscribe();
            }
        };
        return FieldWrapper;
    }());
    if (false) {
        /** @type {?} */
        FieldWrapper.prototype.fieldComponent;
        /** @type {?} */
        FieldWrapper.prototype.contextMenuSubscription;
        /** @type {?} */
        FieldWrapper.prototype.ref;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConfirmationModalComponent = /** @class */ (function () {
        function ConfirmationModalComponent() {
            this.acceptEvent = new core.EventEmitter();
            this.cancelEvent = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        ConfirmationModalComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        ConfirmationModalComponent.prototype.acceptClick = /**
         * @return {?}
         */
        function () {
            this.acceptEvent.emit(this.operationId);
        };
        /**
         * @return {?}
         */
        ConfirmationModalComponent.prototype.cancelClick = /**
         * @return {?}
         */
        function () {
            if (this.modalElement) {
                this.modalElement.cancelClose();
            }
        };
        ConfirmationModalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-confirmation-modal',
                        template: "<gd-modal #modal [id]=\"id\" [title]=\"title\">\n  <div class=\"window\">\n    <div class=\"prompt\" [innerHTML]=\"promptText\"></div>\n\n    <div class=\"buttons\">      \n      <div class=\"btn\" (click)=\"acceptClick()\">{{ acceptText }}</div>\n      <div class=\"btn\" (click)=\"cancelClick()\">Cancel</div>\n    </div>\n  </div>\n</gd-modal>\n",
                        styles: [".btn{padding:5px 20px;background-color:#25c2d4;cursor:pointer;color:#fff!important}.btn:hover{background-color:#688296;color:#ccd0d4!important}.image-btn{text-align:center;color:#fff;cursor:pointer;margin:1px}.image-btn:hover{color:#688296!important}.image-btn>fa-icon{padding:5px;font-size:16px}.list-item:nth-of-type(even){background-color:#f4f4f4}.list-item:hover{background-color:#e5e5e5}.window{min-width:400px;min-height:auto;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:24px}.buttons{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;margin-left:auto;margin-top:20px}.buttons>div{margin-left:10px}"]
                    }] }
        ];
        /** @nocollapse */
        ConfirmationModalComponent.ctorParameters = function () { return []; };
        ConfirmationModalComponent.propDecorators = {
            id: [{ type: core.Input }],
            title: [{ type: core.Input }],
            promptText: [{ type: core.Input }],
            acceptText: [{ type: core.Input }],
            operationId: [{ type: core.Input }],
            acceptEvent: [{ type: core.Output }],
            cancelEvent: [{ type: core.Output }],
            modalElement: [{ type: core.ViewChild, args: ['modal', { static: true },] }]
        };
        return ConfirmationModalComponent;
    }());
    if (false) {
        /** @type {?} */
        ConfirmationModalComponent.prototype.id;
        /** @type {?} */
        ConfirmationModalComponent.prototype.title;
        /** @type {?} */
        ConfirmationModalComponent.prototype.promptText;
        /** @type {?} */
        ConfirmationModalComponent.prototype.acceptText;
        /** @type {?} */
        ConfirmationModalComponent.prototype.operationId;
        /** @type {?} */
        ConfirmationModalComponent.prototype.acceptEvent;
        /** @type {?} */
        ConfirmationModalComponent.prototype.cancelEvent;
        /** @type {?} */
        ConfirmationModalComponent.prototype.modalElement;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UtilsService = /** @class */ (function () {
        function UtilsService() {
        }
        /**
         * @param {?} results
         * @return {?}
         */
        UtilsService.prototype.generateCsvForParseResults = /**
         * @param {?} results
         * @return {?}
         */
        function (results) {
            /** @type {?} */
            var r = "field, value";
            for (var i = 0; i < results.length; i++) {
                r += "\r\n";
                if (Array.isArray(results[i].value)) {
                    /** @type {?} */
                    var table = new TableValue(results[i].value);
                    for (var row = 0; row < table.rows.length; row++) {
                        r += this.prepareCsvItem(results[i].name) + ",";
                        for (var col = 0; col < table.rows[row].length; col++) {
                            if (col > 0) {
                                r += ",";
                            }
                            r += this.prepareCsvItem(table.rows[row][col]);
                        }
                        if (row < table.rows.length - 1) {
                            r += "\r\n";
                        }
                    }
                }
                else {
                    r += this.prepareCsvItem(results[i].name) + "," + this.prepareCsvItem(results[i].value);
                }
            }
            return r;
        };
        /**
         * @param {?} item
         * @return {?}
         */
        UtilsService.prototype.prepareCsvItem = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (!item) {
                return "";
            }
            /** @type {?} */
            var ci = item.replace(/"/g, '""');
            if (ci.indexOf(',') > -1
                || ci.indexOf('\r') > -1
                || ci.indexOf('"') > -1
                || ci.indexOf("'") > -1) {
                return '"' + ci + '"';
            }
            else {
                return ci;
            }
        };
        UtilsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        UtilsService.ctorParameters = function () { return []; };
        /** @nocollapse */ UtilsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function UtilsService_Factory() { return new UtilsService(); }, token: UtilsService, providedIn: "root" });
        return UtilsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableViewerComponent = /** @class */ (function () {
        function TableViewerComponent() {
        }
        /**
         * @return {?}
         */
        TableViewerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        TableViewerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-table-viewer',
                        template: "<gd-modal #modal [id]=\"'TableViewer'\" [title]=\"'Table Viewer'\">\n    <div class=\"window\" *ngIf=\"table\">\n        <table>\n            <tr *ngFor=\"let r of table.rows\">\n                <td *ngFor=\"let c of r\">{{c}}</td>\n            </tr>\n        </table>\n\n    </div>\n</gd-modal>",
                        styles: [".window{min-width:400px;min-height:auto;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:24px}table{border-collapse:collapse;border:1px solid #e5e5e5}td{border:1px solid #e5e5e5;padding:5px}tr:nth-of-type(odd){background-color:#f4f4f4}tr:hover{background-color:#e5e5e5}"]
                    }] }
        ];
        /** @nocollapse */
        TableViewerComponent.ctorParameters = function () { return []; };
        return TableViewerComponent;
    }());
    if (false) {
        /** @type {?} */
        TableViewerComponent.prototype.table;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SidePanelComponent = /** @class */ (function () {
        function SidePanelComponent(_modalService, _parserService, _sourceFileService, _templateService, _utilsService, _placeholderService) {
            var _this = this;
            this._modalService = _modalService;
            this._parserService = _parserService;
            this._sourceFileService = _sourceFileService;
            this._templateService = _templateService;
            this._utilsService = _utilsService;
            this._placeholderService = _placeholderService;
            this._parseState = new OperationState();
            this.isDataMode = true;
            this.isTemplateMode = false;
            this._currentTemplateChangedSubscription = this._templateService.currentTemplateChanged
                .subscribe((/**
             * @param {?} template
             * @return {?}
             */
            function (template) { return _this.currentTemplate = template; }));
            this._templateAddedSubscription = this._templateService.templateAddedSubject
                .subscribe((/**
             * @param {?} template
             * @return {?}
             */
            function (template) { return _this.templateIds.push(template); }));
            this._templateRemovedSubscription = this._templateService.templateRemovedSubject
                .subscribe((/**
             * @param {?} templateId
             * @return {?}
             */
            function (templateId) { return _this.removeTemplateId(templateId); }));
            this.currentTemplate = this._templateService.currentTemplate;
            this.templateIds = [];
            this._templateService.templateIds.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                _this.templateIds.push(element);
            }));
        }
        Object.defineProperty(SidePanelComponent.prototype, "parseState", {
            get: /**
             * @return {?}
             */
            function () {
                return this._parseState;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SidePanelComponent.prototype, "currentTemplate", {
            get: /**
             * @return {?}
             */
            function () {
                return this._currentTemplate;
            },
            set: /**
             * @param {?} template
             * @return {?}
             */
            function (template) {
                var _this = this;
                if (this._currentTemplateModifiedSubscription) {
                    this._currentTemplateModifiedSubscription.unsubscribe();
                }
                this._currentTemplate = template;
                this._currentTemplateModifiedSubscription = this._currentTemplate.modified
                    .subscribe((/**
                 * @param {?} t
                 * @return {?}
                 */
                function (t) { return _this.parseState.prompt = "Template was changed. Please parse data again."; }));
                this.parseState.prompt = "Press Parser to extract data by this template";
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SidePanelComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this._currentTemplateChangedSubscription) {
                this._currentTemplateChangedSubscription.unsubscribe();
            }
            if (this._templateAddedSubscription) {
                this._templateAddedSubscription.unsubscribe();
            }
            if (this._templateRemovedSubscription) {
                this._templateRemovedSubscription.unsubscribe();
            }
        };
        /**
         * @return {?}
         */
        SidePanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        SidePanelComponent.prototype.manageTemplates = /**
         * @return {?}
         */
        function () {
            this.isDataMode = false;
            this.isTemplateMode = true;
        };
        /**
         * @param {?} templateId
         * @return {?}
         */
        SidePanelComponent.prototype.isCurrentTemplate = /**
         * @param {?} templateId
         * @return {?}
         */
        function (templateId) {
            return this.currentTemplate && this.currentTemplate.id === templateId.id;
        };
        /**
         * @param {?} templateId
         * @return {?}
         */
        SidePanelComponent.prototype.selectTemplateClick = /**
         * @param {?} templateId
         * @return {?}
         */
        function (templateId) {
            if (!templateId) {
                return;
            }
            this._templateService.selectTemplate(templateId);
            this.showData();
        };
        /**
         * @return {?}
         */
        SidePanelComponent.prototype.createTemplateClick = /**
         * @return {?}
         */
        function () {
            this._templateService.createTemplate();
        };
        /**
         * @param {?} templateId
         * @param {?} $event
         * @return {?}
         */
        SidePanelComponent.prototype.renameTemplateClick = /**
         * @param {?} templateId
         * @param {?} $event
         * @return {?}
         */
        function (templateId, $event) {
            $event.stopPropagation();
            $event.preventDefault();
            if (templateId && this.templateNameModal) {
                this.templateNameModal.operationId = templateId.id;
                this.templateNameModal.initialValue = templateId.name;
                this._modalService.open("TemplateNameModal");
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        SidePanelComponent.prototype.templateNameModalAccept = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var templateId = event.id;
            /** @type {?} */
            var templateName = event.newValue;
            try {
                this._templateService.renameTemplate({ id: templateId, name: templateName });
            }
            catch (error) {
                this.templateNameModal.error = error;
                return;
            }
            this._modalService.close("TemplateNameModal");
        };
        /**
         * @param {?} templateId
         * @param {?} $event
         * @return {?}
         */
        SidePanelComponent.prototype.removeTemplateClick = /**
         * @param {?} templateId
         * @param {?} $event
         * @return {?}
         */
        function (templateId, $event) {
            $event.stopPropagation();
            $event.preventDefault();
            if (this.templateRemoveModal) {
                this.templateRemoveModal.operationId = templateId.id;
                this.templateRemoveModal.promptText = "Remove template <b>" + templateId.name + "</b>?";
                this._modalService.open("TemplateRemoveModal");
            }
        };
        /**
         * @param {?} operationId
         * @return {?}
         */
        SidePanelComponent.prototype.templateRemoveModalAccept = /**
         * @param {?} operationId
         * @return {?}
         */
        function (operationId) {
            this._modalService.close("TemplateRemoveModal");
            this._templateService.removeTemplate({ id: operationId, name: "" });
        };
        /**
         * @param {?} templateId
         * @param {?} $event
         * @return {?}
         */
        SidePanelComponent.prototype.downloadTemplateClick = /**
         * @param {?} templateId
         * @param {?} $event
         * @return {?}
         */
        function (templateId, $event) {
            $event.stopPropagation();
            $event.preventDefault();
            /** @type {?} */
            var templateJson = this._templateService.serialize(templateId);
            /** @type {?} */
            var f = new File([templateJson], templateId.name + ".json", {
                type: "text/plain"
            });
            /** @type {?} */
            var fileUrl = window.URL.createObjectURL(f);
            /** @type {?} */
            var fileLink = document.createElement('a');
            fileLink.href = fileUrl;
            fileLink.download = f.name;
            fileLink.click();
            URL.revokeObjectURL(fileUrl);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        SidePanelComponent.prototype.onFileSelected = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            var _this = this;
            /** @type {?} */
            var file = event.target.files[0];
            if (file) {
                /** @type {?} */
                var reader_1 = new FileReader();
                reader_1.readAsText(file);
                reader_1.onload = (/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) {
                    _this._templateService.deserialize(reader_1.result.toString());
                    _this.uploadTemplate.nativeElement.value = null;
                });
            }
        };
        /**
         * @return {?}
         */
        SidePanelComponent.prototype.showData = /**
         * @return {?}
         */
        function () {
            this.isTemplateMode = false;
            this.isDataMode = true;
        };
        /**
         * @return {?}
         */
        SidePanelComponent.prototype.parse = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.parseState.execute();
            /** @type {?} */
            var state = this._placeholderService.startOperation("Parsing data...");
            /** @type {?} */
            var observer = {
                next: (/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    _this.parseState.result = response.data;
                }),
                error: (/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    _this.parseState.error = _this._parserService.getErrorMessage(err);
                    state.error(err);
                }),
                complete: (/**
                 * @return {?}
                 */
                function () { return state.complete(); })
            };
            this._parserService.parseByTemplate(this._sourceFileService.sourceFile, null, this._templateService.currentTemplate).subscribe(observer);
        };
        /**
         * @return {?}
         */
        SidePanelComponent.prototype.downloadResultsAsCsv = /**
         * @return {?}
         */
        function () {
            if (!this.parseState.isCompleted || this.parseState.result.length === 0) {
                return;
            }
            /** @type {?} */
            var csv = this._utilsService.generateCsvForParseResults(this.parseState.result);
            /** @type {?} */
            var f = new File([csv], this.fileNameForCsv ? this.fileNameForCsv + " - data.csv" : this._sourceFileService.sourceFile.guid + " - data.csv", {
                type: "text/plain"
            });
            /** @type {?} */
            var fileUrl = window.URL.createObjectURL(f);
            /** @type {?} */
            var fileLink = document.createElement('a');
            fileLink.href = fileUrl;
            fileLink.download = f.name;
            fileLink.click();
            URL.revokeObjectURL(fileUrl);
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        SidePanelComponent.prototype.isArray = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            return Array.isArray(obj);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        SidePanelComponent.prototype.showTableValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var table = new TableValue(value);
            this.tableViewer.table = table;
            this._modalService.open("TableViewer");
        };
        /**
         * @private
         * @param {?} templateId
         * @return {?}
         */
        SidePanelComponent.prototype.removeTemplateId = /**
         * @private
         * @param {?} templateId
         * @return {?}
         */
        function (templateId) {
            for (var i = 0; i < this.templateIds.length; i++) {
                if (this.templateIds[i].id === templateId.id) {
                    this.templateIds.splice(i, 1);
                    return;
                }
            }
        };
        SidePanelComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-parser-side-panel',
                        template: "<div class=\"side-panel\">\n    <input type=\"file\" #uploadTemplate (change)=\"onFileSelected($event)\" />\n\n    <div *ngIf=\"isDataMode\">\n        <div class=\"side-panel-title\">\n            <div>{{ currentTemplate?.name }}</div>\n            <div class=\"image-btn\" (click)=\"manageTemplates()\">\n                <fa-icon [icon]=\"'bars'\"></fa-icon>\n            </div>\n        </div>\n\n        <div class=\"side-panel-toolbar\">\n            <div class=\"image-btn\" (click)=\"createTemplateClick()\" title=\"Create a new template\">\n                <fa-icon [icon]=\"'file'\"></fa-icon>\n            </div>\n            <div class=\"image-btn\" (click)=\"uploadTemplate.click()\" title=\"Upload the existing template\">\n                <fa-icon [icon]=\"'upload'\"></fa-icon>\n            </div>\n\n            <div class=\"side-panel-toolbar-space\"></div>\n\n            <div class=\"image-btn\" (click)=\"renameTemplateClick(currentTemplate, $event)\" title=\"Rename the current template\">\n                <fa-icon [icon]=\"'edit'\"></fa-icon>\n            </div>\n            <div class=\"image-btn\" *ngIf=\"currentTemplate?.isStored\" (click)=\"removeTemplateClick(currentTemplate, $event)\"\n                title=\"Remove the current template\">\n                <fa-icon [icon]=\"'trash'\"></fa-icon>\n            </div>\n            <div class=\"image-btn\" *ngIf=\"currentTemplate?.isStored\" (click)=\"downloadTemplateClick(currentTemplate, $event)\"\n                title=\"Download the current template\">\n                <fa-icon [icon]=\"'file-download'\"></fa-icon>\n            </div>\n        </div>\n\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isProcessing\">\n            <div>Parsing data...</div>\n        </div>\n\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isFailed\">\n            <div class=\"side-panel-content-text error-text\">Error occurs while parsing data.</div>\n            <div class=\"btn\" (click)=\"parse()\">Parse again</div>\n        </div>\n\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isReadyToRun\">\n            <div class=\"side-panel-content-text\" [innerHTML]=\"parseState.prompt\"></div>\n            <div class=\"btn\" (click)=\"parse()\">Parse</div>\n        </div>\n\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isCompleted && !(parseState.result?.length > 0)\">\n            <div class=\"side-panel-content-text\">\n                No data is extracted. Try to change the template.\n            </div>\n        </div>\n\n        <div class=\"data-panel\" *ngIf=\"parseState.result?.length > 0\">\n            <div class=\"side-panel-toolbar\">\n                <div class=\"btn\" (click)=\"downloadResultsAsCsv()\">Download as CSV</div>\n            </div>\n            <div class=\"data-item list-item\" *ngFor=\"let r of parseState.result\">\n                <div class=\"data-item-field\">{{ r.name }}</div>\n                <div class=\"data-item-value\" *ngIf=\"r.value && !isArray(r.value)\">{{ r.value }}</div>\n                <div class=\"data-item-value\" *ngIf=\"r.value && isArray(r.value)\">\n                    <div class=\"btn\" (click)=\"showTableValue(r.value)\">Show Table</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"isTemplateMode\">\n        <div class=\"side-panel-title\">\n            <div>Manage Templates</div>\n            <div class=\"image-btn\" (click)=\"showData()\">\n                <fa-icon [icon]=\"'times'\"></fa-icon>\n            </div>\n        </div>\n        <div class=\"no-data-panel\" *ngIf=\"templateIds.length == 0\">\n            <div class=\"side-panel-content-text\">There are no templates. Try to create a new one or upload the existing\n                one.</div>\n        </div>\n\n        <div class=\"template-list\">\n            <div class=\"template-item list-item\" *ngFor=\"let t of templateIds\" (click)=\"selectTemplateClick(t)\">\n                <div class=\"template-item-text\" [ngClass]=\"{'template-item-current': isCurrentTemplate(t)}\">{{ t?.name\n                    }} </div>\n                <div class=\"image-btn\" (click)=\"renameTemplateClick(t, $event)\" title=\"Rename a template\">\n                    <fa-icon [icon]=\"'edit'\"></fa-icon>\n                </div>\n                <div class=\"image-btn\" (click)=\"downloadTemplateClick(t, $event)\" title=\"Download a template\">\n                    <fa-icon [icon]=\"'file-download'\"></fa-icon>\n                </div>\n                <div class=\"image-btn\" (click)=\"removeTemplateClick(t, $event)\" title=\"Remove a template\">\n                    <fa-icon [icon]=\"'trash'\"></fa-icon>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<gd-rename-modal #templateNameModal [id]=\"'TemplateNameModal'\" [title]=\"'Rename Template'\"\n    [promptText]=\"'Enter a new template name:'\" [acceptText]=\"'Save'\" (acceptEvent)=\"templateNameModalAccept($event)\">\n</gd-rename-modal>\n<gd-confirmation-modal #templateRemoveModal [id]=\"'TemplateRemoveModal'\" [title]=\"'Remove Template'\"\n    [acceptText]=\"'Remove'\" (acceptEvent)=\"templateRemoveModalAccept($event)\">\n</gd-confirmation-modal>\n<gd-table-viewer #tableViewer></gd-table-viewer>",
                        styles: [".btn{padding:5px 20px;background-color:#25c2d4;cursor:pointer;color:#fff!important}.btn:hover{background-color:#688296;color:#ccd0d4!important}.image-btn{text-align:center;color:#fff;cursor:pointer;margin:1px}.image-btn:hover{color:#688296!important}.image-btn>fa-icon{padding:5px;font-size:16px}.list-item:nth-of-type(even){background-color:#f4f4f4}.list-item:hover{background-color:#e5e5e5}.list-item .image-btn,input{display:none}.list-item:hover .image-btn{display:block;color:#c4c4c4}.error-text{color:red}.side-panel{width:100%;height:100%}.side-panel>div{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%}.side-panel-title{background-color:#25c2d4;color:#fff;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;padding:10px}.side-panel-title>div{padding-left:5px}.side-panel-toolbar{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;padding:10px}.side-panel-toolbar>div{color:#acacac}.side-panel-toolbar-space{margin-left:10px}.side-panel-content-text{padding:20px;text-align:center}.side-panel-content{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;height:100%;width:100%}.data-panel{overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:stretch;justify-content:stretch;height:100%;width:100%}.data-item{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:stretch;justify-content:stretch;width:100%}.data-item>div{padding:10px}.data-item-field,.data-item-value{-webkit-box-flex:1;flex:1}.template-list{position:relative;overflow-x:hidden;overflow-y:auto}.template-item{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:5px;height:2em;cursor:pointer}.template-item-text{-webkit-box-flex:1;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:5px 15px}.template-item-current{font-weight:700}.template-item-btn>fa-icon{padding:5px;font-size:16px}"]
                    }] }
        ];
        /** @nocollapse */
        SidePanelComponent.ctorParameters = function () { return [
            { type: commonComponents.ModalService },
            { type: ParserService },
            { type: SourceFileService },
            { type: TemplateService },
            { type: UtilsService },
            { type: PlaceholderService }
        ]; };
        SidePanelComponent.propDecorators = {
            fileNameForCsv: [{ type: core.Input }],
            templateNameModal: [{ type: core.ViewChild, args: ['templateNameModal', { static: true },] }],
            templateRemoveModal: [{ type: core.ViewChild, args: ['templateRemoveModal', { static: true },] }],
            uploadTemplate: [{ type: core.ViewChild, args: ['uploadTemplate', { static: true },] }],
            tableViewer: [{ type: core.ViewChild, args: ['tableViewer', { static: true },] }]
        };
        return SidePanelComponent;
    }());
    if (false) {
        /** @type {?} */
        SidePanelComponent.prototype.fileNameForCsv;
        /**
         * @type {?}
         * @private
         */
        SidePanelComponent.prototype._currentTemplateChangedSubscription;
        /**
         * @type {?}
         * @private
         */
        SidePanelComponent.prototype._templateAddedSubscription;
        /**
         * @type {?}
         * @private
         */
        SidePanelComponent.prototype._templateRemovedSubscription;
        /**
         * @type {?}
         * @private
         */
        SidePanelComponent.prototype._currentTemplate;
        /**
         * @type {?}
         * @private
         */
        SidePanelComponent.prototype._currentTemplateModifiedSubscription;
        /**
         * @type {?}
         * @private
         */
        SidePanelComponent.prototype._parseState;
        /** @type {?} */
        SidePanelComponent.prototype.templateNameModal;
        /** @type {?} */
        SidePanelComponent.prototype.templateRemoveModal;
        /** @type {?} */
        SidePanelComponent.prototype.uploadTemplate;
        /** @type {?} */
        SidePanelComponent.prototype.tableViewer;
        /** @type {?} */
        SidePanelComponent.prototype.templateIds;
        /** @type {?} */
        SidePanelComponent.prototype.isTemplateMode;
        /** @type {?} */
        SidePanelComponent.prototype.isDataMode;
        /**
         * @type {?}
         * @private
         */
        SidePanelComponent.prototype._modalService;
        /**
         * @type {?}
         * @private
         */
        SidePanelComponent.prototype._parserService;
        /**
         * @type {?}
         * @private
         */
        SidePanelComponent.prototype._sourceFileService;
        /**
         * @type {?}
         * @private
         */
        SidePanelComponent.prototype._templateService;
        /**
         * @type {?}
         * @private
         */
        SidePanelComponent.prototype._utilsService;
        /**
         * @type {?}
         * @private
         */
        SidePanelComponent.prototype._placeholderService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PlaceholderComponent = /** @class */ (function () {
        function PlaceholderComponent(placeholderService) {
            var _this = this;
            this._destroy = new rxjs.Subject();
            this.progress = null;
            placeholderService.descriptionChanged
                .pipe(operators.takeUntil(this._destroy))
                .subscribe((/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                _this.description = d;
                _this.progress = null;
                _this.isVisible = true;
            }));
            /** @type {?} */
            var stateSubscription;
            placeholderService.stateChanged
                .pipe(operators.takeUntil(this._destroy))
                .subscribe((/**
             * @param {?} state
             * @return {?}
             */
            function (state) {
                if (stateSubscription) {
                    stateSubscription.unsubscribe();
                }
                /** @type {?} */
                var observer = {
                    next: (/**
                     * @param {?} progress
                     * @return {?}
                     */
                    function (progress) { return _this.progress = progress; }),
                    error: (/**
                     * @param {?} err
                     * @return {?}
                     */
                    function (err) { return _this.isVisible = false; }),
                    complete: (/**
                     * @return {?}
                     */
                    function () { return _this.isVisible = false; })
                };
                stateSubscription = state.subscribe(observer);
            }));
        }
        /**
         * @return {?}
         */
        PlaceholderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        PlaceholderComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._destroy.next();
            this._destroy.complete();
        };
        PlaceholderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-placeholder',
                        template: "<div class=\"loading-wrapper\" *ngIf=\"isVisible\">\n    <div class=\"loading-message\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n        <div>{{ description }}</div>\n    </div>\n</div>",
                        styles: [".loading-wrapper{background:rgba(0,0,0,.5);width:100%;height:100%;font-size:14px;color:#fff;position:fixed;top:0;left:0;z-index:99999}.loading-message{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.loading-message>fa-icon{margin-bottom:10px;font-size:25px;text-align:center}"]
                    }] }
        ];
        /** @nocollapse */
        PlaceholderComponent.ctorParameters = function () { return [
            { type: PlaceholderService }
        ]; };
        return PlaceholderComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        PlaceholderComponent.prototype._destroy;
        /** @type {?} */
        PlaceholderComponent.prototype.description;
        /** @type {?} */
        PlaceholderComponent.prototype.progress;
        /** @type {?} */
        PlaceholderComponent.prototype.isVisible;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ParserConfig = /** @class */ (function () {
        function ParserConfig() {
        }
        return ParserConfig;
    }());
    if (false) {
        /** @type {?} */
        ParserConfig.prototype.upload;
        /** @type {?} */
        ParserConfig.prototype.browse;
        /** @type {?} */
        ParserConfig.prototype.rewrite;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ParserConfigService = /** @class */ (function () {
        function ParserConfigService(_http, _config) {
            this._http = _http;
            this._config = _config;
            this._parserConfig = new rxjs.BehaviorSubject(new ParserConfig());
            this._updatedConfig = this._parserConfig.asObservable();
        }
        Object.defineProperty(ParserConfigService.prototype, "updatedConfig", {
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
        ParserConfigService.prototype.load = /**
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
                var configEndpoint = _this._config.getConfigEndpoint(commonComponents.Api.PARSER_APP);
                _this._http.get(configEndpoint, commonComponents.Api.httpOptionsJson).toPromise().then((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    /** @type {?} */
                    var parserConfig = (/** @type {?} */ (response));
                    _this._parserConfig.next(parserConfig);
                    resolve();
                })).catch((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    reject("Could not load parser config: " + JSON.stringify(response));
                }));
            }));
        };
        ParserConfigService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ParserConfigService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ ParserConfigService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ParserConfigService_Factory() { return new ParserConfigService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: ParserConfigService, providedIn: "root" });
        return ParserConfigService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ParserConfigService.prototype._parserConfig;
        /**
         * @type {?}
         * @private
         */
        ParserConfigService.prototype._updatedConfig;
        /**
         * @type {?}
         * @private
         */
        ParserConfigService.prototype._http;
        /**
         * @type {?}
         * @private
         */
        ParserConfigService.prototype._config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} parserConfigService
     * @return {?}
     */
    function initializeApp(parserConfigService) {
        /** @type {?} */
        var result = (/**
         * @return {?}
         */
        function () { return parserConfigService.load(); });
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
    var ParserModule = /** @class */ (function () {
        function ParserModule() {
            fontawesomeSvgCore.library.add(freeSolidSvgIcons.fas, freeRegularSvgIcons.far);
        }
        /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        ParserModule.forRoot = /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        function (apiEndpoint) {
            commonComponents.Api.DEFAULT_API_ENDPOINT = apiEndpoint;
            return {
                ngModule: ParserModule
            };
        };
        ParserModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            ParserAppComponent,
                            SurfaceComponent,
                            FieldComponent,
                            ConfirmationModalComponent,
                            SidePanelComponent,
                            RenameModalComponent,
                            PlaceholderComponent,
                            TableViewerComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
                            commonComponents.CommonComponentsModule,
                            http.HttpClientModule,
                            ngClickOutside.ClickOutsideModule,
                            angularFontawesome.FontAwesomeModule
                        ],
                        exports: [
                            ParserAppComponent,
                            FieldComponent,
                            commonComponents.CommonComponentsModule,
                            SurfaceComponent,
                            SidePanelComponent
                        ],
                        providers: [
                            ParserService,
                            commonComponents.ConfigService,
                            commonComponents.ExceptionMessageService,
                            ParserConfigService,
                            {
                                provide: http.HTTP_INTERCEPTORS,
                                useClass: commonComponents.ErrorInterceptorService,
                                multi: true
                            },
                            {
                                provide: core.APP_INITIALIZER,
                                useFactory: initializeApp,
                                deps: [ParserConfigService], multi: true
                            },
                            commonComponents.LoadingMaskService,
                            {
                                provide: http.HTTP_INTERCEPTORS,
                                useFactory: setupLoadingInterceptor,
                                multi: true,
                                deps: [commonComponents.LoadingMaskService]
                            }
                        ],
                        entryComponents: [FieldComponent],
                    },] }
        ];
        /** @nocollapse */
        ParserModule.ctorParameters = function () { return []; };
        return ParserModule;
    }());

    exports.DocumentPageService = DocumentPageService;
    exports.ParserAppComponent = ParserAppComponent;
    exports.ParserModule = ParserModule;
    exports.ParserService = ParserService;
    exports.PlaceholderService = PlaceholderService;
    exports.SourceFileService = SourceFileService;
    exports.TemplateService = TemplateService;
    exports.initializeApp = initializeApp;
    exports.setupLoadingInterceptor = setupLoadingInterceptor;
    exports.ɵa = SurfaceComponent;
    exports.ɵb = FieldComponent;
    exports.ɵc = FieldService;
    exports.ɵd = ConfirmationModalComponent;
    exports.ɵe = SidePanelComponent;
    exports.ɵf = UtilsService;
    exports.ɵg = RenameModalComponent;
    exports.ɵh = PlaceholderComponent;
    exports.ɵi = TableViewerComponent;
    exports.ɵj = ParserConfigService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=groupdocs.examples.angular-parser.umd.js.map
