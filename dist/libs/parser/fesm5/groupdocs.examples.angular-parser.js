import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, Input, RendererFactory2, EventEmitter, Output, ViewChild, NgModule } from '@angular/core';
import { Api, ConfigService, CommonModals, ModalService, ZoomService, NavigateService, UploadFilesService, WindowService, Utils, HostingDynamicComponentService, AddDynamicComponentService, CommonComponentsModule, ExceptionMessageService } from '@groupdocs.examples.angular/common-components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { BrowserModule } from '@angular/platform-browser';
import { ClickOutsideModule } from 'ng-click-outside';
import { __extends } from 'tslib';
import { Subject, interval, fromEventPattern } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { timeout, throttle, takeUntil } from 'rxjs/operators';
import * as jquery from 'jquery';

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
            return this._state == 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OperationState.prototype, "isFailed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state == -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OperationState.prototype, "isCompleted", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state == 1;
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
        this._addFieldSubject = new Subject();
        this._removeFieldSubject = new Subject();
        this._modifiedSubject = new Subject();
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
            return this._id != Template.NotSaved;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Template.prototype, "isEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fields.length == 0;
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
            if (this._fields[i].name.toLocaleLowerCase() == name) {
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
        this._changedSubject = new Subject();
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
            if (this._columns[i].name.toLocaleLowerCase() == name) {
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
        return this._http.post(this._config.getParserApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
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
            // formData.append("url", url);
        }
        return this._http.post(this._config.getParserApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
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
        var subject = new Subject();
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
        this._http.post(this._config.getParserApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, sourceFile, Api.httpOptionsJson)
            .pipe(timeout(25000))
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
        var subject = new Subject();
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
        this._http.post(this._config.getParserApiEndpoint() + Api.PARSE, {
            guid: sourceFile.guid,
            password: sourceFile.password,
            fields: template.fields
        }, Api.httpOptionsJson)
            .pipe(timeout(25000))
            .subscribe(observer);
        return subject;
    };
    // checkApiHealth(): Observable<boolean> {
    //   let subject = new Subject<boolean>();
    //   const observer = {
    //     next: response => subject.next(response == "Healthy"),
    //     complete: () => subject.complete(),
    //     error: () => {
    //       subject.next(false)
    //       subject.complete();
    //     }
    //   };
    //   let url = Api.apiEndPoint.endsWith("v1/")
    //     ? Api.apiEndPoint.substring(0, Api.apiEndPoint.length - "v1/".length)
    //     : Api.apiEndPoint;
    //   this._http.get(url + Api.health, { responseType: 'text' })
    //     .pipe(timeout(25000))
    //     .subscribe(observer);
    //   return subject;
    // }
    // checkApiHealth(): Observable<boolean> {
    //   let subject = new Subject<boolean>();
    //   const observer = {
    //     next: response => subject.next(response == "Healthy"),
    //     complete: () => subject.complete(),
    //     error: () => {
    //       subject.next(false)
    //       subject.complete();
    //     }
    //   };
    //   let url = Api.apiEndPoint.endsWith("v1/")
    //     ? Api.apiEndPoint.substring(0, Api.apiEndPoint.length - "v1/".length)
    //     : Api.apiEndPoint;
    //   this._http.get(url + Api.health, { responseType: 'text' })
    //     .pipe(timeout(25000))
    //     .subscribe(observer);
    //   return subject;
    // }
    /**
     * @param {?} err
     * @return {?}
     */
    ParserService.prototype.getErrorMessage = 
    // checkApiHealth(): Observable<boolean> {
    //   let subject = new Subject<boolean>();
    //   const observer = {
    //     next: response => subject.next(response == "Healthy"),
    //     complete: () => subject.complete(),
    //     error: () => {
    //       subject.next(false)
    //       subject.complete();
    //     }
    //   };
    //   let url = Api.apiEndPoint.endsWith("v1/")
    //     ? Api.apiEndPoint.substring(0, Api.apiEndPoint.length - "v1/".length)
    //     : Api.apiEndPoint;
    //   this._http.get(url + Api.health, { responseType: 'text' })
    //     .pipe(timeout(25000))
    //     .subscribe(observer);
    //   return subject;
    // }
    /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        /** @type {?} */
        var text;
        if (err.status == 404) {
            text = "The requested file was not found.";
        }
        else if (err.error && typeof err.error.title == "string") {
            text = err.error.title;
        }
        else if (typeof err.error == "string") {
            text = err.error;
        }
        else if (typeof err.title == "string") {
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
            this._http.post(url, errorMessage, Api.httpOptionsJson).subscribe({
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ParserService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ ParserService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ParserService_Factory() { return new ParserService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: ParserService, providedIn: "root" });
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
        this._currentTemplateChangedSubject = new Subject();
        this._templateAddedSubject = new Subject();
        this._templateRemovedSubject = new Subject();
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
        if (exTemplate && exTemplate.id != templateId.id) {
            throw 'Template with the same name already exists';
        }
        if (templateId.id == this.currentTemplate.id) {
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
        if (template != this._currentTemplate) {
            return;
        }
        if (this._templates.length == 0) {
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
            throw 'Error while parsing template file';
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
            .pipe(throttle((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return interval(500); })))
            .subscribe((/**
         * @param {?} template
         * @return {?}
         */
        function (template) { return _this.saveTemplate(template); }));
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
            if (key == this._templatePattern + template.id) {
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
            if (this._templates[i].id == templateId.id) {
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
            if (this._templates[i].name.toLocaleLowerCase() == name) {
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
            var name_1 = baseName + (i == 0 ? "" : " " + i.toString());
            if (!this.getTemplateByName(name_1)) {
                return name_1;
            }
        }
        return null;
    };
    TemplateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TemplateService.ctorParameters = function () { return []; };
    /** @nocollapse */ TemplateService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TemplateService_Factory() { return new TemplateService(); }, token: TemplateService, providedIn: "root" });
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
        this._sourceFileChangedSubject = new Subject();
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SourceFileService.ctorParameters = function () { return []; };
    /** @nocollapse */ SourceFileService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SourceFileService_Factory() { return new SourceFileService(); }, token: SourceFileService, providedIn: "root" });
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
        this._descriptionSubject = new Subject();
        this._stateSubject = new Subject();
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
        var subject = new Subject();
        this._descriptionSubject.next(description);
        this._stateSubject.next(subject);
        return subject;
    };
    PlaceholderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PlaceholderService.ctorParameters = function () { return []; };
    /** @nocollapse */ PlaceholderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function PlaceholderService_Factory() { return new PlaceholderService(); }, token: PlaceholderService, providedIn: "root" });
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
        this._activePageChangedSubject = new Subject();
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DocumentPageService.ctorParameters = function () { return []; };
    /** @nocollapse */ DocumentPageService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DocumentPageService_Factory() { return new DocumentPageService(); }, token: DocumentPageService, providedIn: "root" });
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
    function ParserAppComponent(_modalService, _parserService, _sourceFileService, _templateService, _zoomService, _navigateService, _placeholderService, _documentPageService, _uploadFilesService, windowService) {
        var _this = this;
        this._modalService = _modalService;
        this._parserService = _parserService;
        this._sourceFileService = _sourceFileService;
        this._templateService = _templateService;
        this._zoomService = _zoomService;
        this._navigateService = _navigateService;
        this._placeholderService = _placeholderService;
        this._documentPageService = _documentPageService;
        this._uploadFilesService = _uploadFilesService;
        this.CREATE_FIELD_MODE = "createFieldMode";
        this.browseFilesModal = CommonModals.BrowseFiles;
        this.documentError = null;
        this.isApiAvaible = true;
        this.fileWasDropped = false;
        this.files = [];
        windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            _this.refreshZoom();
        }));
        this._sourceFileService.sourceFileChanged.subscribe((/**
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
                _this._parserService.upload(uploads.item(0), '', _this.rewriteConfig).subscribe((/**
                 * @param {?} obj
                 * @return {?}
                 */
                function (obj) {
                    _this.fileWasDropped ? _this.selectFile(obj.guid, '', '') : _this.selectDir('');
                }));
            }
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
        var template = this._templateService.currentTemplate;
        if (!template) {
            return;
        }
        /** @type {?} */
        var field = template.createField("Field");
        field.fieldType = TemplateFieldTypes.FIXED;
        field.pageNumber = this._documentPageService.activePage;
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
        var template = this._templateService.currentTemplate;
        if (!template) {
            return;
        }
        /** @type {?} */
        var field = template.createField("Table");
        field.fieldType = TemplateFieldTypes.TABLE;
        field.pageNumber = this._documentPageService.activePage;
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
        this._parserService.loadFiles($event).subscribe((/**
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
        this._parserService.upload(null, $event, this.rewriteConfig).subscribe((/**
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
        this._sourceFileService.sourceFile = new SourceFile($event, password);
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
        var operationState = this._placeholderService.startOperation("Loading document...");
        /** @type {?} */
        var observer = {
            next: (/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                _this._documentPageService.setActivePage(1);
                _this._document = response;
                operationState.complete();
                _this._templateService.createTemplate();
                _this.refreshZoom();
                _this._navigateService.countPages = _this.document.pages ? _this.document.pages.length : 0;
                _this._navigateService.currentPage = 1;
            }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                _this.documentError = _this._parserService.getErrorMessage(err);
                operationState.error(err);
            }),
            complete: (/**
             * @return {?}
             */
            function () { return operationState.complete(); })
        };
        this._parserService.loadDocumentDescription(sourceFile).subscribe(observer);
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
        { type: Component, args: [{
                    selector: 'gd-app-parser',
                    template: "<gd-loading-mask></gd-loading-mask>\r\n<div class=\"wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"column\" [ngClass]=\"{'document-loaded': isFileLoaded()}\">\r\n      <div class=\"top-panel\">\r\n        <a class=\"logo-link\" [href]=\"returnUrl\">\r\n          <gd-logo [logo]=\"'parser'\" icon=\"glasses\"></gd-logo>\r\n        </a>\r\n        <gd-top-toolbar class=\"toolbar-panel\">\r\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal, false)\"\r\n            *ngIf=\"browseConfig\"></gd-button>\r\n\r\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"></gd-button>\r\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\" (click)=\"zoomOut()\"></gd-button>\r\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'expand'\" [tooltip]=\"'Add text field'\" (click)=\"addFieldClick()\"></gd-button>\r\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'table'\" [tooltip]=\"'Add table'\" (click)=\"addTableClick()\"></gd-button>\r\n        </gd-top-toolbar>\r\n      </div>\r\n       <gd-init-state [icon]=\"'glasses'\" [text]=\"'Drop file here to upload'\" *ngIf=\"documentError || !document\" (fileDropped)=\"fileDropped($event)\">\r\n        Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\r\n        Or drop file here\r\n      </gd-init-state>\r\n\r\n      <div class=\"parser-wrapper\" *ngIf=\"!documentError && document\">\r\n        <app-surface [document]=\"document\"></app-surface>\r\n      </div>\r\n    </div>\r\n\r\n    <app-side-panel *ngIf=\"!documentError && document\"></app-side-panel>\r\n  </div>\r\n\r\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\r\n    (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\" [uploadConfig]=\"uploadConfig\">\r\n  </gd-browse-files-modal>\r\n\r\n  <gd-error-modal></gd-error-modal>\r\n  <gd-password-required></gd-password-required>\r\n  <gd-success-modal></gd-success-modal>\r\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.logo-link{color:inherit;text-decoration:inherit}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}.parser-wrapper{z-index:100;left:0;top:0;right:0;bottom:0}app-side-panel{position:absolute;right:0;top:60px;width:300px;height:100%;background-color:#fff}::ng-deep .tools .button{color:#fff!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .button.inactive{color:#959da5!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}.row{display:-webkit-box;display:flex}.column{width:100%;height:100vh;background-color:#e7e7e7;overflow:hidden}::ng-deep .gd-side-panel-body{background-color:#f4f4f4}::ng-deep .gd-side-panel-wrapper{width:464px!important}::ng-deep .page.excel{overflow:unset!important}@media (max-width:1037px){::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .gd-side-panel-wrapper{width:375px!important}}"]
                }] }
    ];
    /** @nocollapse */
    ParserAppComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: ParserService },
        { type: SourceFileService },
        { type: TemplateService },
        { type: ZoomService },
        { type: NavigateService },
        { type: PlaceholderService },
        { type: DocumentPageService },
        { type: UploadFilesService },
        { type: WindowService }
    ]; };
    ParserAppComponent.propDecorators = {
        sourceFile: [{ type: Input }]
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
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._parserService;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._sourceFileService;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._templateService;
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
    ParserAppComponent.prototype._placeholderService;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._documentPageService;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._uploadFilesService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FieldService = /** @class */ (function () {
    function FieldService(rendererFactory2) {
        this.rendererFactory2 = rendererFactory2;
        this._destroy = new Subject();
        this._isMoving = false;
        this._mouseMoveSubject = new Subject();
        this._mouseUpSubject = new Subject();
        this._activeChangedSubject = new Subject();
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
        fromEventPattern(createMouseMoveListener, (/**
         * @return {?}
         */
        function () { return removeMouseMoveListener(); }))
            .pipe(takeUntil(this._destroy))
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
        fromEventPattern(createMouseUpListener, (/**
         * @return {?}
         */
        function () { return removeMouseUpListener(); }))
            .pipe(takeUntil(this._destroy))
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
        fromEventPattern(createPanMoveListener, (/**
         * @return {?}
         */
        function () { return removePanMoveListener(); }))
            .pipe(takeUntil(this._destroy))
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
        fromEventPattern(createPanEndListener, (/**
         * @return {?}
         */
        function () { return removePanEndListener(); }))
            .pipe(takeUntil(this._destroy))
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
        var mousePosition = Utils.getMousePosition($event);
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
        var mousePosition = Utils.getMousePosition($event);
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
        var mousePosition = Utils.getMousePosition($event);
        this._mouseUpSubject.next(mousePosition);
        this._isMoving = false;
    };
    FieldService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FieldService.ctorParameters = function () { return [
        { type: RendererFactory2 }
    ]; };
    /** @nocollapse */ FieldService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FieldService_Factory() { return new FieldService(ɵɵinject(RendererFactory2)); }, token: FieldService, providedIn: "root" });
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
        this._destroy = new Subject();
        this.contextMenuClick = new EventEmitter();
        _fieldService.activeChanged.pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            _this.isActive = _this._field && _this._field.name == name;
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
            .pipe(takeUntil(this._fieldService.mouseUp))
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
        { type: Component, args: [{
                    selector: 'app-field',
                    template: "<div class=\"field\" (clickOutside)=\"isActive = false\" (contextmenu)=\"rightClick($event)\"\r\n    [clickOutsideEvents]=\"'mousedown'\" [clickOutsideEnabled]=\"isActive\" [style.left.px]=\"left\" [style.top.px]=\"top\"\r\n    [style.width.px]=\"width\" [style.height.px]=\"height\">\r\n\r\n    <div class=\"field-text\" (dblclick)=\"renameFieldClick()\" (mousedown)=\"mouseDown($event, 'Move')\"\r\n        (panstart)=\"mouseDown($event, 'Move')\">\r\n        <div *ngIf=\"!isActive\">{{ field.name }}</div>\r\n    </div>\r\n    <div class=\"resizable-handle ne-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'NE')\"\r\n        (panstart)=\"mouseDown($event, 'NE')\"></div>\r\n    <div class=\"resizable-handle se-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'SE')\"\r\n        (panstart)=\"mouseDown($event, 'SE')\"></div>\r\n    <div class=\"resizable-handle sw-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'SW')\"\r\n        (panstart)=\"mouseDown($event, 'SW')\"></div>\r\n    <div class=\"resizable-handle nw-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'NW')\"\r\n        (panstart)=\"mouseDown($event, 'NW')\"></div>\r\n\r\n    <div class=\"resizable-v-edge w-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'W')\"\r\n        (panstart)=\"mouseDown($event, 'W')\"></div>\r\n    <div class=\"resizable-v-edge e-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'E')\"\r\n        (panstart)=\"mouseDown($event, 'E')\"></div>\r\n    <div class=\"resizable-h-edge n-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'N')\"\r\n        (panstart)=\"mouseDown($event, 'N')\"></div>        \r\n    <div class=\"resizable-h-edge s-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'S')\"\r\n        (panstart)=\"mouseDown($event, 'S')\"></div>\r\n\r\n    <div *ngIf=\"isTable && isActive\">\r\n        <div *ngFor=\"let column of field.columns\" class=\"tc-top resizable-handle\" [style.left.px]=\"column.value\"></div>\r\n        <div *ngFor=\"let column of field.columns\" class=\"tc-bottom resizable-handle\" [style.left.px]=\"column.value\"></div>\r\n        <div *ngFor=\"let column of field.columns\" class=\"tc\" [style.left.px]=\"column.value\"\r\n            (mousedown)=\"mouseDown($event, column.name)\">\r\n            <div class=\"tc-background\"></div>\r\n            <div class=\"tc-remove image-btn\" title=\"Remove column separator\" (click)=\"removeColumn(column)\">\r\n                <fa-icon [icon]=\"'trash'\"></fa-icon>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"isTable && !isActive\">\r\n        <div *ngFor=\"let column of field.columns\" class=\"tc-deactived\" [style.left.px]=\"column.value\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"tc-add-left image-btn\" *ngIf=\"isTable && isActive\" title=\"Add new column separator\" (click)=\"addColumnLeft()\">\r\n        <fa-icon [icon]=\"'plus'\"></fa-icon>\r\n    </div>\r\n\r\n    <div class=\"tc-add-right image-btn\" *ngIf=\"isTable && isActive\" title=\"Add new column separator\" (click)=\"addColumnRight()\">\r\n        <fa-icon [icon]=\"'plus'\"></fa-icon>\r\n    </div>\r\n\r\n    <div class=\"context-menu\" *ngIf=\"isActive\">\r\n        <div class=\"image-btn\" (click)=\"renameFieldClick()\" title=\"Rename the field\">\r\n            <fa-icon [icon]=\"'edit'\"></fa-icon>\r\n        </div>\r\n        <div class=\"image-btn\" (click)=\"deleteFieldClick()\" title=\"Remove the field\">\r\n            <fa-icon [icon]=\"'trash'\"></fa-icon>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"field-name\" *ngIf=\"isActive\">\r\n        {{ field.name }}\r\n    </div>\r\n\r\n</div>",
                    styles: [".btn{padding:5px 20px;background-color:#25c2d4;cursor:pointer;color:#fff!important}.btn:hover{background-color:#688296;color:#ccd0d4!important}.image-btn{text-align:center;cursor:pointer;margin:1px;color:#c4c4c4}.image-btn:hover{color:#688296!important}.image-btn>fa-icon{padding:5px;font-size:16px}.list-item:nth-of-type(even){background-color:#f4f4f4}.list-item:hover{background-color:#e5e5e5}.tc{position:absolute;display:block;border-left:4px solid #679ffa;width:4px;top:-5px;bottom:-5px;cursor:col-resize;z-index:1000}.tc-deactived{position:absolute;display:block;border-left:4px solid #738a9cc9;width:4px;top:0;bottom:0;cursor:col-resize;z-index:1000}.tc-background{-webkit-transform:translatex(-9px);transform:translatex(-9px);background-color:#fffFFF01;width:15px;height:100%}.tc-top{top:-5px;-webkit-transform:translatex(-3px);transform:translatex(-3px);cursor:col-resize}.tc-bottom{bottom:-5px;-webkit-transform:translatex(-3px);transform:translatex(-3px);cursor:col-resize}.tc-remove{background:#fff;display:none;position:absolute;top:15px}.tc:hover>.tc-remove{display:block}.tc-add-left{position:absolute;left:-5px;top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.tc-add-right{position:absolute;right:-5px;top:50%;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}.resizable-v-edge{background-color:#fffFFF01;position:absolute;font-size:.1px;display:block;width:10px;top:5px;bottom:5px}.resizable-h-edge{background-color:#fffFFF01;position:absolute;font-size:.1px;display:block;height:10px;left:5px;right:5px}.w-resize{cursor:w-resize;left:-5px}.e-resize{cursor:e-resize;right:-5px}.n-resize{cursor:n-resize;top:-5px}.s-resize{cursor:s-resize;bottom:-5px}.resizable-handle{background-color:#679ffa;width:10px;height:10px;position:absolute;font-size:.1px;display:block}.se-resize{bottom:-5px;right:-5px;cursor:se-resize}.ne-resize{top:-5px;right:-5px;cursor:ne-resize}.sw-resize{bottom:-5px;left:-5px;cursor:sw-resize}.nw-resize{top:-5px;left:-5px;cursor:nw-resize}.field{position:absolute}.field-text{background-color:#99b1c440;cursor:move;color:#000;width:inherit;height:inherit}.field-text>div{background-color:#99b1c4DD;box-sizing:border-box;width:100%;height:100%;padding:1px 5px;font-size:10px;overflow:hidden;text-overflow:ellipsis;pointer-events:none}.field-name{position:absolute;width:auto;left:50%;top:0;-webkit-transform:translate(-50%,calc(-100% - 5px));transform:translate(-50%,calc(-100% - 5px));padding:2px 5px;background-color:#fff;border:#688296;box-shadow:rgba(0,0,0,.52) 0 0 5px;font-size:8px;color:#688296;cursor:context-menu}.context-menu{position:absolute;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;width:auto;left:50%;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);margin-top:5px;background-color:#fff;border:#688296;box-shadow:rgba(0,0,0,.52) 0 0 5px}"]
                }] }
    ];
    /** @nocollapse */
    FieldComponent.ctorParameters = function () { return [
        { type: FieldService },
        { type: ZoomService }
    ]; };
    FieldComponent.propDecorators = {
        contextMenuClick: [{ type: Output }]
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
    FieldComponent.prototype.contextMenuClick;
    /** @type {?} */
    FieldComponent.prototype.isActive;
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
        this.acceptEvent = new EventEmitter();
        this.cancelEvent = new EventEmitter();
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
        if (this.value == null || this.value == "") {
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
        { type: Component, args: [{
                    selector: 'app-rename-modal',
                    template: "<gd-modal #modal [id]=\"id\" [title]=\"title\" (visible)=\"refresh($event)\">\r\n  <div class=\"window\">\r\n    <div class=\"prompt\">{{ promptText }}</div>\r\n    <input #inputBox type=\"text\" [value]=\"value\" (input)=\"value=$event.target.value\" (keyup.enter)=\"acceptClick()\" (keyup.esc)=\"cancelClick()\"/>\r\n\r\n    <div class=\"error\" *ngIf=\"error\">{{ error }}</div>\r\n\r\n    <div class=\"buttons\">      \r\n      <div class=\"btn\" (click)=\"acceptClick()\">{{ acceptText }}</div>\r\n      <div class=\"btn\" (click)=\"cancelClick()\">Cancel</div>\r\n    </div>\r\n  </div>\r\n</gd-modal>",
                    styles: [".btn{padding:5px 20px;background-color:#25c2d4;cursor:pointer;color:#fff!important}.btn:hover{background-color:#688296;color:#ccd0d4!important}.image-btn{text-align:center;color:#fff;cursor:pointer;margin:1px}.image-btn:hover{color:#688296!important}.image-btn>fa-icon{padding:5px;font-size:16px}.list-item:nth-of-type(even){background-color:#f4f4f4}.list-item:hover{background-color:#e5e5e5}input{margin-top:20px;margin-bottom:20px;padding:5px}.window{min-width:400px;min-height:auto;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:24px}.buttons{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;margin-left:auto;margin-top:auto}.buttons>div{margin-left:10px}.error{color:red;padding-top:1px;padding-bottom:20px}"]
                }] }
    ];
    /** @nocollapse */
    RenameModalComponent.ctorParameters = function () { return []; };
    RenameModalComponent.propDecorators = {
        id: [{ type: Input }],
        title: [{ type: Input }],
        promptText: [{ type: Input }],
        acceptText: [{ type: Input }],
        operationId: [{ type: Input }],
        initialValue: [{ type: Input }],
        acceptEvent: [{ type: Output }],
        cancelEvent: [{ type: Output }],
        modalElement: [{ type: ViewChild, args: ['modal', { static: true },] }],
        inputBox: [{ type: ViewChild, args: ['inputBox', { static: true },] }],
        error: [{ type: Input }]
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
        if (event.action == "rename") {
            this.fieldNameModal.operationId = event.fieldName;
            this.fieldNameModal.initialValue = event.fieldName;
            this._modalService.open("FieldNameModal");
            return;
        }
        if (event.action == "remove") {
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
        if (oldFieldName != newFieldName) {
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
        var position = Utils.getMousePosition($event);
        /** @type {?} */
        var elements = document.elementsFromPoint(position.x, position.y);
        /** @type {?} */
        var currentPage = elements.find((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id && x.id.startsWith("page-"); }));
        if (currentPage) {
            this._documentPageService.setActivePage(parseInt(currentPage.id.substring("page-".length)));
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
            if (child.id == activePage) {
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
        { type: Component, args: [{
                    selector: 'app-surface',
                    template: "<div #surface class=\"doc-panel\">\r\n  <gd-document class=\"gd-document\" *ngIf=\"document\" [mode]=\"false\" [file]=\"document\" gdScrollable gdRenderPrint\r\n    [htmlMode]=\"false\" (click)=\"setActivePage($event)\"></gd-document>\r\n\r\n  <app-rename-modal #fieldNameModal [id]=\"'FieldNameModal'\" [title]=\"'Rename Field'\"\r\n    [promptText]=\"'Enter a new field name:'\" [acceptText]=\"'Save'\" (acceptEvent)=\"fieldNameModalAccept($event)\">\r\n  </app-rename-modal>\r\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);.red{box-shadow:10px 5px 5px red}:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .top-panel{align-content:flex-start}.gd-document{position:absolute;height:calc(100vh - 60px);width:calc(100vw - 300px);left:0;top:60px;right:-300px;overflow:auto}::ng-deep .panzoom{-webkit-box-pack:unset!important;justify-content:unset!important}::ng-deep .page{position:relative}::ng-deep .gd-page-image{width:unset;height:unset}"]
                }] }
    ];
    /** @nocollapse */
    SurfaceComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: HostingDynamicComponentService },
        { type: AddDynamicComponentService },
        { type: ZoomService },
        { type: TemplateService },
        { type: DocumentPageService }
    ]; };
    SurfaceComponent.propDecorators = {
        fieldNameModal: [{ type: ViewChild, args: ['fieldNameModal', { static: true },] }],
        surface: [{ type: ViewChild, args: ['surface', { static: true },] }],
        document: [{ type: Input }]
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
        this.acceptEvent = new EventEmitter();
        this.cancelEvent = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'app-confirmation-modal',
                    template: "<gd-modal #modal [id]=\"id\" [title]=\"title\">\r\n  <div class=\"window\">\r\n    <div class=\"prompt\" [innerHTML]=\"promptText\"></div>\r\n\r\n    <div class=\"buttons\">      \r\n      <div class=\"btn\" (click)=\"acceptClick()\">{{ acceptText }}</div>\r\n      <div class=\"btn\" (click)=\"cancelClick()\">Cancel</div>\r\n    </div>\r\n  </div>\r\n  </gd-modal>\r\n",
                    styles: [".btn{padding:5px 20px;background-color:#25c2d4;cursor:pointer;color:#fff!important}.btn:hover{background-color:#688296;color:#ccd0d4!important}.image-btn{text-align:center;color:#fff;cursor:pointer;margin:1px}.image-btn:hover{color:#688296!important}.image-btn>fa-icon{padding:5px;font-size:16px}.list-item:nth-of-type(even){background-color:#f4f4f4}.list-item:hover{background-color:#e5e5e5}.window{min-width:400px;min-height:auto;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:24px}.buttons{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;margin-left:auto;margin-top:20px}.buttons>div{margin-left:10px}"]
                }] }
    ];
    /** @nocollapse */
    ConfirmationModalComponent.ctorParameters = function () { return []; };
    ConfirmationModalComponent.propDecorators = {
        id: [{ type: Input }],
        title: [{ type: Input }],
        promptText: [{ type: Input }],
        acceptText: [{ type: Input }],
        operationId: [{ type: Input }],
        acceptEvent: [{ type: Output }],
        cancelEvent: [{ type: Output }],
        modalElement: [{ type: ViewChild, args: ['modal', { static: true },] }]
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UtilsService.ctorParameters = function () { return []; };
    /** @nocollapse */ UtilsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UtilsService_Factory() { return new UtilsService(); }, token: UtilsService, providedIn: "root" });
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
        { type: Component, args: [{
                    selector: 'app-table-viewer',
                    template: "<gd-modal #modal [id]=\"'TableViewer'\" [title]=\"'Table Viewer'\">\r\n    <div class=\"window\" *ngIf=\"table\">\r\n        <table>\r\n            <tr *ngFor=\"let r of table.rows\">\r\n                <td *ngFor=\"let c of r\">{{c}}</td>\r\n            </tr>\r\n        </table>\r\n\r\n    </div>\r\n</gd-modal>",
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
        return this.currentTemplate && this.currentTemplate.id == templateId.id;
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
     * @return {?}
     */
    SidePanelComponent.prototype.renameTemplateClick = /**
     * @param {?} templateId
     * @return {?}
     */
    function (templateId) {
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
     * @return {?}
     */
    SidePanelComponent.prototype.removeTemplateClick = /**
     * @param {?} templateId
     * @return {?}
     */
    function (templateId) {
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
     * @return {?}
     */
    SidePanelComponent.prototype.downloadTemplateClick = /**
     * @param {?} templateId
     * @return {?}
     */
    function (templateId) {
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
        if (!this.parseState.isCompleted || this.parseState.result.length == 0) {
            return;
        }
        /** @type {?} */
        var csv = this._utilsService.generateCsvForParseResults(this.parseState.result);
        /** @type {?} */
        var f = new File([csv], this._sourceFileService.sourceFile.guid + "- data.csv", {
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
            if (this.templateIds[i].id == templateId.id) {
                this.templateIds.splice(i, 1);
                return;
            }
        }
    };
    SidePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-side-panel',
                    template: "<div class=\"side-panel\">\r\n    <input type=\"file\" #uploadTemplate (change)=\"onFileSelected($event)\" />\r\n\r\n    <div *ngIf=\"isDataMode\">\r\n        <div class=\"side-panel-title\">\r\n            <div>{{ currentTemplate?.name }}</div>\r\n            <div class=\"image-btn\" (click)=\"manageTemplates()\">\r\n                <fa-icon [icon]=\"'bars'\"></fa-icon>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"side-panel-toolbar\">\r\n            <div class=\"image-btn\" (click)=\"createTemplateClick()\" title=\"Create a new template\">\r\n                <fa-icon [icon]=\"'file'\"></fa-icon>\r\n            </div>\r\n            <div class=\"image-btn\" (click)=\"uploadTemplate.click()\" title=\"Upload the existing template\">\r\n                <fa-icon [icon]=\"'upload'\"></fa-icon>\r\n            </div>\r\n\r\n            <div class=\"side-panel-toolbar-space\"></div>\r\n\r\n            <div class=\"image-btn\" (click)=\"renameTemplateClick(currentTemplate)\" title=\"Rename the current template\">\r\n                <fa-icon [icon]=\"'edit'\"></fa-icon>\r\n            </div>\r\n            <div class=\"image-btn\" *ngIf=\"currentTemplate?.isStored\" (click)=\"removeTemplateClick(currentTemplate)\"\r\n                title=\"Remove the current template\">\r\n                <fa-icon [icon]=\"'trash'\"></fa-icon>\r\n            </div>\r\n            <div class=\"image-btn\" *ngIf=\"currentTemplate?.isStored\" (click)=\"downloadTemplateClick(currentTemplate)\"\r\n                title=\"Download the current template\">\r\n                <fa-icon [icon]=\"'file-download'\"></fa-icon>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isProcessing\">\r\n            <div>Parsing data...</div>\r\n        </div>\r\n\r\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isFailed\">\r\n            <div class=\"side-panel-content-text error-text\">Error occurs while parsing data.</div>\r\n            <div class=\"btn\" (click)=\"parse()\">Parse again</div>\r\n        </div>\r\n\r\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isReadyToRun\">\r\n            <div class=\"side-panel-content-text\" [innerHTML]=\"parseState.prompt\"></div>\r\n            <div class=\"btn\" (click)=\"parse()\">Parse</div>\r\n        </div>\r\n\r\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isCompleted && !(parseState.result?.length > 0)\">\r\n            <div class=\"side-panel-content-text\">\r\n                No data is extracted. Try to change the template.\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"data-panel\" *ngIf=\"parseState.result?.length > 0\">\r\n            <div class=\"side-panel-toolbar\">\r\n                <div class=\"btn\" (click)=\"downloadResultsAsCsv()\">Download as CSV</div>\r\n            </div>\r\n            <div class=\"data-item list-item\" *ngFor=\"let r of parseState.result\">\r\n                <div class=\"data-item-field\">{{ r.name }}</div>\r\n                <div class=\"data-item-value\" *ngIf=\"r.value && !isArray(r.value)\">{{ r.value }}</div>\r\n                <div class=\"data-item-value\" *ngIf=\"r.value && isArray(r.value)\">\r\n                    <div class=\"btn\" (click)=\"showTableValue(r.value)\">Show Table</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"isTemplateMode\">\r\n        <div class=\"side-panel-title\">\r\n            <div>Manage Templates</div>\r\n            <div class=\"image-btn\" (click)=\"showData()\">\r\n                <fa-icon [icon]=\"'times'\"></fa-icon>\r\n            </div>\r\n        </div>\r\n        <div class=\"no-data-panel\" *ngIf=\"templateIds.length == 0\">\r\n            <div class=\"side-panel-content-text\">There are no templates. Try to create a new one or upload the existing\r\n                one.</div>\r\n        </div>\r\n\r\n        <div class=\"template-list\">\r\n            <div class=\"template-item list-item\" *ngFor=\"let t of templateIds\" (dblclick)=\"selectTemplateClick(t)\">\r\n                <div class=\"template-item-text\" [ngClass]=\"{'template-item-current': isCurrentTemplate(t)}\">{{ t?.name\r\n                    }} </div>\r\n                <div class=\"image-btn\" (click)=\"renameTemplateClick(t)\" title=\"Rename a template\">\r\n                    <fa-icon [icon]=\"'edit'\"></fa-icon>\r\n                </div>\r\n                <div class=\"image-btn\" (click)=\"downloadTemplateClick(t)\" title=\"Download a template\">\r\n                    <fa-icon [icon]=\"'file-download'\"></fa-icon>\r\n                </div>\r\n                <div class=\"image-btn\" (click)=\"removeTemplateClick(t)\" title=\"Remove a template\">\r\n                    <fa-icon [icon]=\"'trash'\"></fa-icon>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<app-rename-modal #templateNameModal [id]=\"'TemplateNameModal'\" [title]=\"'Rename Template'\"\r\n    [promptText]=\"'Enter a new template name:'\" [acceptText]=\"'Save'\" (acceptEvent)=\"templateNameModalAccept($event)\">\r\n</app-rename-modal>\r\n<app-confirmation-modal #templateRemoveModal [id]=\"'TemplateRemoveModal'\" [title]=\"'Remove Template'\"\r\n    [acceptText]=\"'Remove'\" (acceptEvent)=\"templateRemoveModalAccept($event)\">\r\n</app-confirmation-modal>\r\n<app-table-viewer #tableViewer></app-table-viewer>",
                    styles: [".btn{padding:5px 20px;background-color:#25c2d4;cursor:pointer;color:#fff!important}.btn:hover{background-color:#688296;color:#ccd0d4!important}.image-btn{text-align:center;color:#fff;cursor:pointer;margin:1px}.image-btn:hover{color:#688296!important}.image-btn>fa-icon{padding:5px;font-size:16px}.list-item:nth-of-type(even){background-color:#f4f4f4}.list-item:hover{background-color:#e5e5e5}.list-item .image-btn,input{display:none}.list-item:hover .image-btn{display:block;color:#c4c4c4}.error-text{color:red}.side-panel{width:100%;height:100%}.side-panel>div{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%}.side-panel-title{background-color:#25c2d4;color:#fff;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;padding:10px}.side-panel-title>div{padding-left:5px}.side-panel-toolbar{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;padding:10px}.side-panel-toolbar>div{color:#acacac}.side-panel-toolbar-space{margin-left:10px}.side-panel-content-text{padding:20px;text-align:center}.side-panel-content{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;height:100%;width:100%}.data-panel{overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:stretch;justify-content:stretch;height:100%;width:100%}.data-item{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:stretch;justify-content:stretch;width:100%}.data-item>div{padding:10px}.data-item-field,.data-item-value{-webkit-box-flex:1;flex:1}.template-list{position:relative;overflow-x:hidden;overflow-y:auto}.template-item{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:5px;height:2em;cursor:pointer}.template-item-text{-webkit-box-flex:1;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:5px 15px}.template-item-current{font-weight:700}.template-item-btn>fa-icon{padding:5px;font-size:16px}"]
                }] }
    ];
    /** @nocollapse */
    SidePanelComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: ParserService },
        { type: SourceFileService },
        { type: TemplateService },
        { type: UtilsService },
        { type: PlaceholderService }
    ]; };
    SidePanelComponent.propDecorators = {
        templateNameModal: [{ type: ViewChild, args: ['templateNameModal', { static: true },] }],
        templateRemoveModal: [{ type: ViewChild, args: ['templateRemoveModal', { static: true },] }],
        uploadTemplate: [{ type: ViewChild, args: ['uploadTemplate', { static: true },] }],
        tableViewer: [{ type: ViewChild, args: ['tableViewer', { static: true },] }]
    };
    return SidePanelComponent;
}());
if (false) {
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
        this._destroy = new Subject();
        this.progress = null;
        placeholderService.descriptionChanged
            .pipe(takeUntil(this._destroy))
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
            .pipe(takeUntil(this._destroy))
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
        { type: Component, args: [{
                    selector: 'app-placeholder',
                    template: "<div class=\"loading-wrapper\" *ngIf=\"isVisible\">\r\n    <div class=\"loading-message\">\r\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\r\n        <div>{{ description }}</div>\r\n    </div>\r\n</div>",
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
var ParserModule = /** @class */ (function () {
    function ParserModule() {
        library.add(fas, far);
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
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: ParserModule
        };
    };
    ParserModule.decorators = [
        { type: NgModule, args: [{
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
                        BrowserModule,
                        CommonComponentsModule,
                        ClickOutsideModule,
                        FontAwesomeModule
                    ],
                    providers: [
                        ConfigService,
                        ExceptionMessageService
                    ],
                    exports: [
                        ParserAppComponent,
                        FieldComponent
                    ],
                    entryComponents: [FieldComponent],
                },] }
    ];
    /** @nocollapse */
    ParserModule.ctorParameters = function () { return []; };
    return ParserModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ParserAppComponent, ParserModule, ParserService as ɵa, SourceFileService as ɵb, TemplateService as ɵc, PlaceholderService as ɵd, DocumentPageService as ɵe, SurfaceComponent as ɵf, FieldComponent as ɵg, FieldService as ɵh, ConfirmationModalComponent as ɵi, SidePanelComponent as ɵj, UtilsService as ɵk, RenameModalComponent as ɵl, PlaceholderComponent as ɵm, TableViewerComponent as ɵn };
//# sourceMappingURL=groupdocs.examples.angular-parser.js.map
