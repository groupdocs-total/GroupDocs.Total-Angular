import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, Input, RendererFactory2, EventEmitter, Output, ViewChild, NgModule, APP_INITIALIZER } from '@angular/core';
import { Api, ConfigService, CommonModals, FileCredentials, ModalService, ZoomService, NavigateService, UploadFilesService, PasswordService, WindowService, Utils, HostingDynamicComponentService, AddDynamicComponentService, LoadingMaskInterceptorService, CommonComponentsModule, ExceptionMessageService, ErrorInterceptorService, LoadingMaskService } from '@groupdocs.examples.angular/common-components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { BrowserModule } from '@angular/platform-browser';
import { ClickOutsideModule } from 'ng-click-outside';
import { Subject, interval, fromEventPattern, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { timeout, throttle, takeUntil } from 'rxjs/operators';
import * as jquery from 'jquery';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableValue {
    /**
     * @param {?} obj
     */
    constructor(obj) {
        this.rows = [];
        for (let i = 0; i < obj.length; i++) {
            /** @type {?} */
            const row = [];
            if (obj[i]) {
                for (let j = 0; j < obj[i].length; j++) {
                    row.push(obj[i][j]);
                }
            }
            this.rows.push(row);
        }
    }
}
if (false) {
    /** @type {?} */
    TableValue.prototype.rows;
}
/**
 * @template T
 */
class OperationState {
    constructor() {
        this._state = 0;
        this.enabled = true;
    }
    /**
     * @return {?}
     */
    get isReadyToRun() {
        return this._state === 0;
    }
    /**
     * @return {?}
     */
    get isFailed() {
        return this._state === -1;
    }
    /**
     * @return {?}
     */
    get isCompleted() {
        return this._state === 1;
    }
    /**
     * @return {?}
     */
    get isProcessing() {
        return this._state == null;
    }
    /**
     * @return {?}
     */
    get prompt() {
        return this._prompt;
    }
    /**
     * @param {?} prompt
     * @return {?}
     */
    set prompt(prompt) {
        this._prompt = prompt;
        this._error = null;
        this._result = null;
        this._state = 0;
    }
    /**
     * @return {?}
     */
    get error() {
        return this._error;
    }
    /**
     * @param {?} error
     * @return {?}
     */
    set error(error) {
        this._prompt = null;
        this._error = error;
        this._result = null;
        this._state = -1;
    }
    /**
     * @return {?}
     */
    get result() {
        return this._result;
    }
    /**
     * @param {?} result
     * @return {?}
     */
    set result(result) {
        this._prompt = null;
        this._error = null;
        this._result = result;
        this._state = 1;
    }
    /**
     * @return {?}
     */
    execute() {
        this._state = null;
    }
}
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
class DocumentDescriptionResponse {
}
if (false) {
    /** @type {?} */
    DocumentDescriptionResponse.prototype.message;
    /** @type {?} */
    DocumentDescriptionResponse.prototype.result;
}
class ParseByTemplateResponse {
}
if (false) {
    /** @type {?} */
    ParseByTemplateResponse.prototype.message;
    /** @type {?} */
    ParseByTemplateResponse.prototype.data;
}
class SourceFile {
    /**
     * @param {?} guid
     * @param {?} password
     */
    constructor(guid, password) {
        this.guid = guid;
        this.password = password;
    }
}
if (false) {
    /** @type {?} */
    SourceFile.prototype.guid;
    /** @type {?} */
    SourceFile.prototype.password;
}
class DocumentDescription extends SourceFile {
}
if (false) {
    /** @type {?} */
    DocumentDescription.prototype.pages;
}
class DocumentPageDescription {
}
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
class FileDescription {
}
if (false) {
    /** @type {?} */
    FileDescription.prototype.pages;
}
class ParseResult {
}
if (false) {
    /** @type {?} */
    ParseResult.prototype.name;
    /** @type {?} */
    ParseResult.prototype.value;
}
class Point {
    /**
     * @param {?} x
     * @param {?} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
if (false) {
    /** @type {?} */
    Point.prototype.x;
    /** @type {?} */
    Point.prototype.y;
}
class Size {
    /**
     * @param {?} width
     * @param {?} height
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
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
class Template {
    constructor() {
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
    /**
     * @return {?}
     */
    get id() {
        return this._id;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    set id(id) {
        this._id = id;
    }
    /**
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        this._name = name;
        this.notifyModified();
    }
    /**
     * @return {?}
     */
    get fields() {
        return this._fields;
    }
    /**
     * @return {?}
     */
    get isStored() {
        return this._id !== Template.NotSaved;
    }
    /**
     * @return {?}
     */
    get isEmpty() {
        return this._fields.length === 0;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    addField(field) {
        this._fieldChangedSubscriptions.set(field, field.changed.subscribe((/**
         * @param {?} p
         * @return {?}
         */
        p => this.notifyModified())));
        this._fields.push(field);
        this._addFieldSubject.next(field);
        this.notifyModified();
    }
    /**
     * @param {?} field
     * @return {?}
     */
    removeField(field) {
        /** @type {?} */
        const index = this._fields.indexOf(field);
        if (index > -1) {
            this._fieldChangedSubscriptions.get(field).unsubscribe();
            this._fieldChangedSubscriptions.delete(field);
            this._fields.splice(index, 1);
        }
        this._removeFieldSubject.next(field);
        this.notifyModified();
    }
    /**
     * @param {?} fieldName
     * @return {?}
     */
    removeFieldByName(fieldName) {
        /** @type {?} */
        const field = this.getFieldByName(fieldName);
        if (field) {
            this.removeField(field);
        }
    }
    /**
     * @param {?} fieldName
     * @return {?}
     */
    getFieldByName(fieldName) {
        if (!fieldName) {
            return null;
        }
        /** @type {?} */
        const name = fieldName.toLocaleLowerCase();
        for (let i = 0; i < this._fields.length; i++) {
            if (this._fields[i].name.toLocaleLowerCase() === name) {
                return this._fields[i];
            }
        }
        return null;
    }
    /**
     * @param {?} baseName
     * @return {?}
     */
    createField(baseName) {
        /** @type {?} */
        const field = new TemplateField(this);
        field.name = this.getNextFieldName(baseName);
        field.size = new Size(60, 20);
        field.pageNumber = 1;
        field.position = new Point(10, 10);
        return field;
    }
    /**
     * @private
     * @param {?} baseName
     * @return {?}
     */
    getNextFieldName(baseName) {
        for (let i = 0; i < 1000; i++) {
            /** @type {?} */
            const name = baseName + i.toString();
            if (!this.getFieldByName(name)) {
                return name;
            }
        }
        return null;
    }
    /**
     * @private
     * @return {?}
     */
    notifyModified() {
        this._modifiedSubject.next(this);
    }
}
Template.NotSaved = "NotSaved";
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
class TemplateFieldTypes {
}
TemplateFieldTypes.FIXED = "FIXED";
TemplateFieldTypes.TABLE = "TABLE";
if (false) {
    /** @type {?} */
    TemplateFieldTypes.FIXED;
    /** @type {?} */
    TemplateFieldTypes.TABLE;
}
class TemplateField {
    /**
     * @param {?} _template
     */
    constructor(_template) {
        this._template = _template;
        this._fieldType = TemplateFieldTypes.FIXED;
        this._changedSubject = new Subject();
        this.changed = this._changedSubject.asObservable();
        this._columns = [];
    }
    /**
     * @return {?}
     */
    get columns() {
        return this._columns;
    }
    /**
     * @param {?} columnName
     * @param {?} columnValue
     * @return {?}
     */
    addColumn(columnName, columnValue) {
        /** @type {?} */
        const column = new TemplateFieldTableSeparator(columnName == null ? this.getNextColumnName() : columnName, columnValue, this._changedSubject);
        this._columns.push(column);
        this._changedSubject.next("columns");
    }
    /**
     * @param {?} column
     * @return {?}
     */
    removeColumn(column) {
        /** @type {?} */
        const index = this._columns.indexOf(column);
        if (index > -1) {
            this._columns.splice(index, 1);
            this._changedSubject.next("columns");
        }
    }
    /**
     * @param {?} columnName
     * @return {?}
     */
    getColumnByName(columnName) {
        if (!columnName) {
            return null;
        }
        /** @type {?} */
        const name = columnName.toLocaleLowerCase();
        for (let i = 0; i < this._columns.length; i++) {
            if (this._columns[i].name.toLocaleLowerCase() === name) {
                return this._columns[i];
            }
        }
        return null;
    }
    /**
     * @return {?}
     */
    get fieldType() {
        return this._fieldType;
    }
    /**
     * @param {?} fieldType
     * @return {?}
     */
    set fieldType(fieldType) {
        this._fieldType = fieldType;
        this._changedSubject.next("fieldType");
    }
    /**
     * @return {?}
     */
    get template() {
        return this._template;
    }
    /**
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        this._name = name;
        this._changedSubject.next("name");
    }
    /**
     * @return {?}
     */
    get pageNumber() {
        return this._pageNumber;
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    set pageNumber(pageNumber) {
        this._pageNumber = pageNumber;
        this._changedSubject.next("pageNumber");
    }
    /**
     * @return {?}
     */
    get position() {
        return this._position;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    set position(position) {
        this._position = position;
        this._changedSubject.next("position");
    }
    /**
     * @return {?}
     */
    get size() {
        return this._size;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    set size(size) {
        this._size = size;
        this._changedSubject.next("size");
    }
    /**
     * @return {?}
     */
    toJSON() {
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
    }
    /**
     * @private
     * @return {?}
     */
    getNextColumnName() {
        for (let i = 0; i < 1000; i++) {
            /** @type {?} */
            const name = "TC:" + i.toString();
            if (!this.getColumnByName(name)) {
                return name;
            }
        }
        return null;
    }
}
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
class TemplateFieldTableSeparator {
    /**
     * @param {?} _name
     * @param {?} _value
     * @param {?} _changedSubject
     */
    constructor(_name, _value, _changedSubject) {
        this._name = _name;
        this._value = _value;
        this._changedSubject = _changedSubject;
    }
    /**
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        this._changedSubject.next("table-separator");
    }
    /**
     * @return {?}
     */
    toJSON() {
        return {
            name: this.name,
            value: this.value,
        };
    }
}
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
class ParserService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    loadFiles(path) {
        return this._http.post(this._config.getParserApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
    }
    /**
     * @param {?} file
     * @param {?} url
     * @param {?} rewrite
     * @return {?}
     */
    upload(file, url, rewrite) {
        /** @type {?} */
        const formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getParserApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    }
    /**
     * @param {?} sourceFile
     * @return {?}
     */
    loadDocumentDescription(sourceFile) {
        /** @type {?} */
        const subject = new Subject();
        /** @type {?} */
        const observer = {
            next: (/**
             * @param {?} response
             * @return {?}
             */
            (response) => subject.next(response)),
            complete: (/**
             * @return {?}
             */
            () => subject.complete()),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                this.logToServer(err);
                console.error(err);
                subject.error(err);
            })
        };
        this._http.post(this._config.getParserApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, sourceFile, Api.httpOptionsJson)
            .pipe(timeout(25000))
            .subscribe(observer);
        return subject;
    }
    /**
     * @param {?} sourceFile
     * @param {?} password
     * @param {?} template
     * @return {?}
     */
    parseByTemplate(sourceFile, password, template) {
        /** @type {?} */
        const subject = new Subject();
        /** @type {?} */
        const observer = {
            next: (/**
             * @param {?} response
             * @return {?}
             */
            (response) => subject.next(response)),
            complete: (/**
             * @return {?}
             */
            () => subject.complete()),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                this.logToServer(err);
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
    }
    /**
     * @param {?} err
     * @return {?}
     */
    getErrorMessage(err) {
        /** @type {?} */
        let text;
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
    }
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    logToServer(error) {
        /** @type {?} */
        const errorMessage = { error: JSON.stringify(error) };
        /** @type {?} */
        const url = localStorage.getItem("parser.logclienterror");
        if (url) {
            this._http.post(url, errorMessage, Api.httpOptionsJson).subscribe({
                next: (/**
                 * @return {?}
                 */
                () => console.log("Sent to server")),
                error: (/**
                 * @return {?}
                 */
                () => console.log("Can't send to server"))
            });
        }
    }
}
ParserService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ParserService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ ParserService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ParserService_Factory() { return new ParserService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: ParserService, providedIn: "root" });
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
class TemplateService {
    constructor() {
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
    /**
     * @return {?}
     */
    get currentTemplate() {
        return this._currentTemplate;
    }
    /**
     * @return {?}
     */
    get templateIds() {
        return this._templates;
    }
    /**
     * @param {?} templateId
     * @return {?}
     */
    selectTemplate(templateId) {
        /** @type {?} */
        const template = this.getTemplateById(templateId);
        if (template) {
            this.setCurrentTemplate(template);
        }
    }
    /**
     * @return {?}
     */
    createTemplate() {
        /** @type {?} */
        const template = new Template();
        template.name = this.getNextTemplateName("Template");
        this.setCurrentTemplate(template);
    }
    /**
     * @param {?} templateId
     * @return {?}
     */
    renameTemplate(templateId) {
        if (!templateId) {
            return;
        }
        /** @type {?} */
        const exTemplate = this.getTemplateByName(templateId.name);
        if (exTemplate && exTemplate.id !== templateId.id) {
            throw Error('Template with the same name already exists');
        }
        if (templateId.id === this.currentTemplate.id) {
            this.currentTemplate.name = templateId.name;
        }
        else {
            /** @type {?} */
            const template = this.getTemplateById(templateId);
            template.name = templateId.name;
            this.saveTemplate(template);
        }
    }
    /**
     * @param {?} templateId
     * @return {?}
     */
    removeTemplate(templateId) {
        /** @type {?} */
        const template = this.getTemplateById(templateId);
        /** @type {?} */
        let index = this._templates.indexOf(template);
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
    }
    /**
     * @param {?} templateId
     * @return {?}
     */
    serialize(templateId) {
        if (!templateId) {
            return;
        }
        /** @type {?} */
        const template = this.getTemplateById(templateId);
        if (!template) {
            return;
        }
        return JSON.stringify({
            name: template.name,
            fields: template.fields
        });
    }
    /**
     * @param {?} templateJson
     * @return {?}
     */
    deserialize(templateJson) {
        if (!templateJson) {
            return;
        }
        try {
            /** @type {?} */
            const template = this.loadTemplateFromJson(templateJson);
            template.id = Template.NotSaved;
            this.saveTemplate(template);
            this.selectTemplate(template);
        }
        catch (error) {
            throw Error('Error while parsing template file');
        }
    }
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    setCurrentTemplate(template) {
        if (this._currentTemplateModifiedSubscription) {
            this._currentTemplateModifiedSubscription.unsubscribe();
        }
        this._currentTemplate = template;
        this._currentTemplateModifiedSubscription = this._currentTemplate.modified
            .pipe(throttle((/**
         * @param {?} v
         * @return {?}
         */
        v => interval(500))))
            .subscribe((/**
         * @param {?} t
         * @return {?}
         */
        t => this.saveTemplate(t)));
        this._currentTemplateChangedSubject.next(this._currentTemplate);
    }
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    onTemplateAdded(template) {
        this._templateAddedSubject.next(template);
    }
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    onTemplateRemoved(template) {
        this._templateRemovedSubject.next(template);
        // remove from local storage
        for (let i = 0; i < localStorage.length; i++) {
            /** @type {?} */
            const key = localStorage.key(i);
            if (key === this._templatePattern + template.id) {
                localStorage.removeItem(key);
                return;
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    loadTemplatesFromLocalStorage() {
        for (let i = 0; i < localStorage.length; i++) {
            /** @type {?} */
            const key = localStorage.key(i);
            if (key.startsWith(this._templatePattern)) {
                /** @type {?} */
                const template = this.loadTemplateFromJson(localStorage.getItem(key));
                this._templates.push(template);
                this.onTemplateAdded(template);
            }
        }
    }
    /**
     * @private
     * @param {?} templateJson
     * @return {?}
     */
    loadTemplateFromJson(templateJson) {
        /** @type {?} */
        const obj = JSON.parse(templateJson);
        /** @type {?} */
        const templateName = this.getNextTemplateName(obj.name);
        /** @type {?} */
        const template = new Template();
        template.id = obj.id ? obj.id : this.getNextTemplateId();
        template.name = templateName;
        for (let i = 0; i < obj.fields.length; i++) {
            /** @type {?} */
            const objField = obj.fields[i];
            /** @type {?} */
            const field = new TemplateField(template);
            if (objField.fieldType) {
                field.fieldType = objField.fieldType;
            }
            field.name = objField.name;
            field.pageNumber = objField.pageNumber;
            field.position = new Point(objField.x, objField.y);
            field.size = new Size(objField.width, objField.height);
            if (objField.columns) {
                for (let j = 0; j < objField.columns.length; j++) {
                    field.addColumn(objField.columns[j].name, objField.columns[j].value);
                }
            }
            template.addField(field);
        }
        return template;
    }
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    saveTemplateToLocalStorage(template) {
        if (!template) {
            return;
        }
        /** @type {?} */
        const key = this._templatePattern + template.id;
        localStorage.setItem(key, JSON.stringify({
            name: template.name,
            id: template.id,
            fields: template.fields
        }));
    }
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    saveTemplate(template) {
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
    }
    /**
     * @private
     * @param {?} templateId
     * @return {?}
     */
    getTemplateById(templateId) {
        if (!templateId) {
            return null;
        }
        for (let i = 0; i < this._templates.length; i++) {
            if (this._templates[i].id === templateId.id) {
                return this._templates[i];
            }
        }
        return null;
    }
    /**
     * @private
     * @param {?} templateName
     * @return {?}
     */
    getTemplateByName(templateName) {
        if (!templateName) {
            return null;
        }
        /** @type {?} */
        const name = templateName.toLocaleLowerCase();
        for (let i = 0; i < this._templates.length; i++) {
            if (this._templates[i].name.toLocaleLowerCase() === name) {
                return this._templates[i];
            }
        }
        return null;
    }
    /**
     * @private
     * @return {?}
     */
    getNextTemplateId() {
        /** @type {?} */
        const templateId = { id: "", name: "" };
        for (let i = 0; i < 1000; i++) {
            templateId.id = i.toString();
            if (!this.getTemplateById(templateId)) {
                return templateId.id;
            }
        }
        return null;
    }
    /**
     * @private
     * @param {?} baseName
     * @return {?}
     */
    getNextTemplateName(baseName) {
        for (let i = 0; i < 1000; i++) {
            /** @type {?} */
            const name = baseName + (i === 0 ? "" : " " + i.toString());
            if (!this.getTemplateByName(name)) {
                return name;
            }
        }
        return null;
    }
}
TemplateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TemplateService.ctorParameters = () => [];
/** @nocollapse */ TemplateService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TemplateService_Factory() { return new TemplateService(); }, token: TemplateService, providedIn: "root" });
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
class SourceFileService {
    constructor() {
        this._sourceFileChangedSubject = new Subject();
        this.sourceFileChanged = this._sourceFileChangedSubject.asObservable();
    }
    /**
     * @return {?}
     */
    get sourceFile() {
        return this._sourceFile;
    }
    /**
     * @param {?} sourceFile
     * @return {?}
     */
    set sourceFile(sourceFile) {
        this._sourceFile = sourceFile;
        this._sourceFileChangedSubject.next(sourceFile);
    }
}
SourceFileService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SourceFileService.ctorParameters = () => [];
/** @nocollapse */ SourceFileService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SourceFileService_Factory() { return new SourceFileService(); }, token: SourceFileService, providedIn: "root" });
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
class PlaceholderService {
    constructor() {
        this._descriptionSubject = new Subject();
        this._stateSubject = new Subject();
        this.descriptionChanged = this._descriptionSubject.asObservable();
        this.stateChanged = this._stateSubject.asObservable();
    }
    /**
     * @param {?} description
     * @return {?}
     */
    startOperation(description) {
        /** @type {?} */
        const subject = new Subject();
        this._descriptionSubject.next(description);
        this._stateSubject.next(subject);
        return subject;
    }
}
PlaceholderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PlaceholderService.ctorParameters = () => [];
/** @nocollapse */ PlaceholderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function PlaceholderService_Factory() { return new PlaceholderService(); }, token: PlaceholderService, providedIn: "root" });
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
class DocumentPageService {
    constructor() {
        this._activePageChangedSubject = new Subject();
        this._activePage = null;
        this.activePageChanged = this._activePageChangedSubject.asObservable();
    }
    /**
     * @return {?}
     */
    get activePage() {
        return this._activePage;
    }
    /**
     * @param {?} activePage
     * @return {?}
     */
    setActivePage(activePage) {
        this._activePage = activePage;
        this._activePageChangedSubject.next(activePage);
    }
}
DocumentPageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DocumentPageService.ctorParameters = () => [];
/** @nocollapse */ DocumentPageService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DocumentPageService_Factory() { return new DocumentPageService(); }, token: DocumentPageService, providedIn: "root" });
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
class ParserAppComponent {
    /**
     * @param {?} _modalService
     * @param {?} parserService
     * @param {?} sourceFileService
     * @param {?} templateService
     * @param {?} _zoomService
     * @param {?} _navigateService
     * @param {?} placeholderService
     * @param {?} documentPageService
     * @param {?} _uploadFilesService
     * @param {?} _passwordService
     * @param {?} windowService
     */
    constructor(_modalService, parserService, sourceFileService, templateService, _zoomService, _navigateService, placeholderService, documentPageService, _uploadFilesService, _passwordService, windowService) {
        this._modalService = _modalService;
        this._zoomService = _zoomService;
        this._navigateService = _navigateService;
        this._uploadFilesService = _uploadFilesService;
        this._passwordService = _passwordService;
        this.CREATE_FIELD_MODE = "createFieldMode";
        this.browseFilesModal = CommonModals.BrowseFiles;
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
        (w) => {
            this.refreshZoom();
        }));
        this.sourceFileService.sourceFileChanged.subscribe((/**
         * @param {?} sourceFile
         * @return {?}
         */
        sourceFile => this.loadDocumentDescription(sourceFile)));
        this._uploadFilesService.uploadsChange.subscribe((/**
         * @param {?} uploads
         * @return {?}
         */
        (uploads) => {
            if (uploads && uploads.length > 0) {
                this.parserService.upload(uploads.item(0), '', this.rewriteConfig).subscribe((/**
                 * @param {?} obj
                 * @return {?}
                 */
                (obj) => {
                    this.fileWasDropped ? this.selectFile(obj.guid, '', '') : this.selectDir('');
                }));
            }
        }));
        this._passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        (pass) => {
            this.selectFile(this.sourceFileService.sourceFile.guid, pass, CommonModals.PasswordRequired);
        }));
    }
    // Menu
    /**
     * @return {?}
     */
    zoomIn() {
        /** @type {?} */
        const zoom = this._zoomService.zoom;
        if (zoom < 490) {
            this._zoomService.changeZoom(zoom + 10);
        }
    }
    /**
     * @return {?}
     */
    zoomOut() {
        /** @type {?} */
        const zoom = this._zoomService.zoom;
        if (zoom > 30) {
            this._zoomService.changeZoom(zoom - 10);
        }
    }
    /**
     * @return {?}
     */
    addFieldClick() {
        /** @type {?} */
        const template = this.templateService.currentTemplate;
        if (!template) {
            return;
        }
        /** @type {?} */
        const field = template.createField("Field");
        field.fieldType = TemplateFieldTypes.FIXED;
        field.pageNumber = this.documentPageService.activePage;
        template.addField(field);
    }
    /**
     * @return {?}
     */
    addTableClick() {
        /** @type {?} */
        const template = this.templateService.currentTemplate;
        if (!template) {
            return;
        }
        /** @type {?} */
        const field = template.createField("Table");
        field.fieldType = TemplateFieldTypes.TABLE;
        field.pageNumber = this.documentPageService.activePage;
        template.addField(field);
    }
    // end of Menu
    /**
     * @return {?}
     */
    isFileLoaded() {
        return !this.documentError && this.document;
    }
    /**
     * @param {?} id
     * @param {?} fileShouldBeLoaded
     * @return {?}
     */
    openModal(id, fileShouldBeLoaded) {
        if (fileShouldBeLoaded && !this.isFileLoaded())
            return;
        this._modalService.open(id);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectDir($event) {
        this.parserService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        (files) => this.files = files || []));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    upload($event) {
        this.parserService.upload(null, $event, this.rewriteConfig).subscribe((/**
         * @return {?}
         */
        () => {
            this.selectDir('');
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    fileDropped($event) {
        this.fileWasDropped = $event;
    }
    /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @return {?}
     */
    selectFile($event, password, modalId) {
        this.credentials = new FileCredentials($event, password);
        this.sourceFileService.sourceFile = new SourceFile($event, password);
        if (modalId) {
            this._modalService.close(modalId);
        }
    }
    /**
     * @return {?}
     */
    get rewriteConfig() {
        return this.parserConfig ? this.parserConfig.rewrite : true;
    }
    /**
     * @return {?}
     */
    get uploadConfig() {
        return this.parserConfig ? this.parserConfig.upload : true;
    }
    /**
     * @return {?}
     */
    get browseConfig() {
        return this.parserConfig ? this.parserConfig.browse : true;
    }
    /**
     * @return {?}
     */
    get returnUrl() {
        return localStorage.getItem("returnUrl");
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    reloadCurrentPage() {
        window.location.reload();
    }
    /**
     * @private
     * @param {?} sourceFile
     * @return {?}
     */
    loadDocumentDescription(sourceFile) {
        this.isApiAvaible = true;
        this.documentError = null;
        this._document = null;
        /** @type {?} */
        const operationState = this.placeholderService.startOperation("Loading document...");
        /** @type {?} */
        const observer = {
            next: (/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                this.documentPageService.setActivePage(1);
                this._document = response;
                operationState.complete();
                this.templateService.createTemplate();
                this.refreshZoom();
                this._navigateService.countPages = this.document.pages ? this.document.pages.length : 0;
                this._navigateService.currentPage = 1;
            }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                this.documentError = this.parserService.getErrorMessage(err);
                operationState.error(err);
            }),
            complete: (/**
             * @return {?}
             */
            () => operationState.complete())
        };
        this.parserService.loadDocumentDescription(sourceFile).subscribe(observer);
    }
    /**
     * @return {?}
     */
    get document() {
        return this._document;
    }
    /**
     * @private
     * @return {?}
     */
    refreshZoom() {
        this._zoomService.changeZoom(this.getFitToWidth());
    }
    /**
     * @private
     * @return {?}
     */
    getFitToWidth() {
        if (!this.document) {
            return 100;
        }
        /** @type {?} */
        const surfaceWidth = window.innerWidth;
        // Images and Excel-related files receiving dimensions in px from server
        /** @type {?} */
        const pageWidth = this.ptToPx(this.document.pages[0].width);
        /** @type {?} */
        const pageHeight = this.ptToPx(this.document.pages[0].height);
        /** @type {?} */
        const offsetWidth = pageWidth ? pageWidth : surfaceWidth;
        return (pageHeight > pageWidth && Math.round(offsetWidth / surfaceWidth) < 2)
            ? 200 - Math.round(offsetWidth * 100 / surfaceWidth)
            : Math.round(surfaceWidth * 100 / offsetWidth);
    }
    /**
     * @private
     * @param {?} pt
     * @return {?}
     */
    ptToPx(pt) {
        //pt * 96 / 72 = px.
        return pt * 96 / 72;
    }
}
ParserAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-app-parser',
                template: "<gd-loading-mask></gd-loading-mask>\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"column\" [ngClass]=\"{'document-loaded': isFileLoaded()}\">\n      <div class=\"top-panel\">\n        <a class=\"logo-link\" [href]=\"returnUrl\">\n          <gd-logo [logo]=\"'parser'\" icon=\"glasses\"></gd-logo>\n        </a>\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal, false)\"\n            *ngIf=\"browseConfig\"></gd-button>\n\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"></gd-button>\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\" (click)=\"zoomOut()\"></gd-button>\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'expand'\" [tooltip]=\"'Add text field'\" (click)=\"addFieldClick()\"></gd-button>\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'table'\" [tooltip]=\"'Add table'\" (click)=\"addTableClick()\"></gd-button>\n        </gd-top-toolbar>\n      </div>\n       <gd-init-state [icon]=\"'glasses'\" [text]=\"'Drop file here to upload'\" *ngIf=\"documentError || !document\" (fileDropped)=\"fileDropped($event)\">\n        Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n        Or drop file here\n      </gd-init-state>\n\n      <div class=\"parser-wrapper\" *ngIf=\"!documentError && document\">\n        <gd-surface [document]=\"document\"></gd-surface>\n      </div>\n    </div>\n\n    <gd-parser-side-panel [fileNameForCsv]=\"\" *ngIf=\"!documentError && document\"></gd-parser-side-panel>\n  </div>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n    (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\" [uploadConfig]=\"uploadConfig\">\n  </gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.logo-link{color:inherit;text-decoration:inherit}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}.parser-wrapper{z-index:100;left:0;top:0;right:0;bottom:0}gd-parser-side-panel{position:absolute;right:0;top:60px;width:300px;height:calc(100vh - 60px);background-color:#fff}::ng-deep .tools .button{color:#fff!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .button.inactive{color:#959da5!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}.row{display:-webkit-box;display:flex}.column{width:100%;height:100vh;background-color:#e7e7e7;overflow:hidden}::ng-deep .gd-side-panel-body{background-color:#f4f4f4}::ng-deep .gd-side-panel-wrapper{width:464px!important}::ng-deep .page.excel{overflow:unset!important}@media (max-width:1037px){::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .gd-side-panel-wrapper{width:375px!important}}"]
            }] }
];
/** @nocollapse */
ParserAppComponent.ctorParameters = () => [
    { type: ModalService },
    { type: ParserService },
    { type: SourceFileService },
    { type: TemplateService },
    { type: ZoomService },
    { type: NavigateService },
    { type: PlaceholderService },
    { type: DocumentPageService },
    { type: UploadFilesService },
    { type: PasswordService },
    { type: WindowService }
];
ParserAppComponent.propDecorators = {
    sourceFile: [{ type: Input }]
};
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
class FieldService {
    /**
     * @param {?} rendererFactory2
     */
    constructor(rendererFactory2) {
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
        const renderer = this.rendererFactory2.createRenderer(null, null);
        this.createMouseObservables(renderer);
    }
    /**
     * @private
     * @param {?} renderer
     * @return {?}
     */
    createMouseObservables(renderer) {
        // MOUSE
        // MOUSE
        /** @type {?} */
        let removeMouseMoveListener;
        /** @type {?} */
        const createMouseMoveListener = (/**
         * @param {?} handler
         * @return {?}
         */
        (handler) => {
            removeMouseMoveListener = renderer.listen("document", "mousemove", handler);
        });
        fromEventPattern(createMouseMoveListener, (/**
         * @return {?}
         */
        () => removeMouseMoveListener()))
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => this.onMouseMove(event)));
        /** @type {?} */
        let removeMouseUpListener;
        /** @type {?} */
        const createMouseUpListener = (/**
         * @param {?} handler
         * @return {?}
         */
        (handler) => {
            removeMouseUpListener = renderer.listen("document", "mouseup", handler);
        });
        fromEventPattern(createMouseUpListener, (/**
         * @return {?}
         */
        () => removeMouseUpListener()))
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => this.onMouseUp(event)));
        // TOUCH
        /** @type {?} */
        let removePanMoveListener;
        /** @type {?} */
        const createPanMoveListener = (/**
         * @param {?} handler
         * @return {?}
         */
        (handler) => {
            removePanMoveListener = renderer.listen("document", "panmove", handler);
        });
        fromEventPattern(createPanMoveListener, (/**
         * @return {?}
         */
        () => removePanMoveListener()))
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => this.onMouseMove(event)));
        /** @type {?} */
        let removePanEndListener;
        /** @type {?} */
        const createPanEndListener = (/**
         * @param {?} handler
         * @return {?}
         */
        (handler) => {
            removePanEndListener = renderer.listen("document", "panend", handler);
        });
        fromEventPattern(createPanEndListener, (/**
         * @return {?}
         */
        () => removePanEndListener()))
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => this.onMouseUp(event)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
    }
    /**
     * @return {?}
     */
    get isMoving() {
        return this._isMoving;
    }
    /**
     * @param {?} fieldName
     * @return {?}
     */
    setActive(fieldName) {
        this._activeChangedSubject.next(fieldName);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    beginMove($event) {
        /** @type {?} */
        const mousePosition = Utils.getMousePosition($event);
        this._isMoving = true;
        return mousePosition;
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    onMouseMove($event) {
        if (!this.isMoving) {
            return;
        }
        /** @type {?} */
        const mousePosition = Utils.getMousePosition($event);
        this._mouseMoveSubject.next(mousePosition);
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    onMouseUp($event) {
        if (!this.isMoving) {
            return;
        }
        /** @type {?} */
        const mousePosition = Utils.getMousePosition($event);
        this._mouseUpSubject.next(mousePosition);
        this._isMoving = false;
    }
}
FieldService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FieldService.ctorParameters = () => [
    { type: RendererFactory2 }
];
/** @nocollapse */ FieldService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FieldService_Factory() { return new FieldService(ɵɵinject(RendererFactory2)); }, token: FieldService, providedIn: "root" });
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
const $ = jquery;
class FieldContextMenuClick {
    /**
     * @param {?} fieldName
     * @param {?} action
     */
    constructor(fieldName, action) {
        this.fieldName = fieldName;
        this.action = action;
    }
}
if (false) {
    /** @type {?} */
    FieldContextMenuClick.prototype.fieldName;
    /** @type {?} */
    FieldContextMenuClick.prototype.action;
}
class FieldComponent {
    /**
     * @param {?} _fieldService
     * @param {?} _zoomService
     */
    constructor(_fieldService, _zoomService) {
        this._fieldService = _fieldService;
        this._zoomService = _zoomService;
        this._destroy = new Subject();
        this.contextMenuClick = new EventEmitter();
        _fieldService.activeChanged.pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            this.isActive = this._field && this._field.name === name;
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
    }
    /**
     * @return {?}
     */
    get isFixed() {
        return this.field.fieldType === TemplateFieldTypes.FIXED;
    }
    /**
     * @return {?}
     */
    get isTable() {
        return this.field.fieldType === TemplateFieldTypes.TABLE;
    }
    /**
     * @return {?}
     */
    get left() {
        return this._left;
    }
    /**
     * @param {?} left
     * @return {?}
     */
    set left(left) {
        if (!this.pageSize) {
            return;
        }
        this._left = Math.min(this.pageSize.width, Math.max(0, left));
    }
    /**
     * @return {?}
     */
    get top() {
        return this._top;
    }
    /**
     * @param {?} top
     * @return {?}
     */
    set top(top) {
        if (!this.pageSize) {
            return;
        }
        this._top = Math.min(this.pageSize.height, Math.max(0, top));
    }
    /**
     * @return {?}
     */
    get right() {
        return this._right;
    }
    /**
     * @param {?} right
     * @return {?}
     */
    set right(right) {
        if (!this.pageSize) {
            return;
        }
        this._right = Math.min(Math.max(0, right), this.pageSize.width);
    }
    /**
     * @return {?}
     */
    get bottom() {
        return this._bottom;
    }
    /**
     * @param {?} bottom
     * @return {?}
     */
    set bottom(bottom) {
        if (!this.pageSize) {
            return;
        }
        this._bottom = Math.min(Math.max(0, bottom), this.pageSize.height);
    }
    /**
     * @return {?}
     */
    get width() {
        /** @type {?} */
        const width = this.right - this.left;
        return width ? width : 0;
    }
    /**
     * @return {?}
     */
    get height() {
        /** @type {?} */
        const height = this.bottom - this.top;
        return height ? height : 0;
    }
    /**
     * @return {?}
     */
    get scale() {
        return this._zoomService.zoom / 100;
    }
    /**
     * @return {?}
     */
    renameFieldClick() {
        this.contextMenuClick.emit(new FieldContextMenuClick(this.field.name, "rename"));
    }
    /**
     * @return {?}
     */
    deleteFieldClick() {
        this.contextMenuClick.emit(new FieldContextMenuClick(this.field.name, "remove"));
    }
    /**
     * @return {?}
     */
    addColumnLeft() {
        this.field.addColumn(null, this.width * 0.1);
    }
    /**
     * @return {?}
     */
    addColumnRight() {
        this.field.addColumn(null, this.width * 0.9);
    }
    /**
     * @param {?} column
     * @return {?}
     */
    removeColumn(column) {
        this.field.removeColumn(column);
    }
    /**
     * @param {?} field
     * @return {?}
     */
    set field(field) {
        this._field = field;
        this.left = this.field.position.x;
        this.top = this.field.position.y;
        this.right = this.field.position.x + this.field.size.width;
        this.bottom = this.field.position.y + this.field.size.height;
    }
    /**
     * @return {?}
     */
    get field() {
        return this._field;
    }
    /**
     * @param {?} $event
     * @param {?} mode
     * @return {?}
     */
    mouseDown($event, mode) {
        $event.preventDefault();
        this._fieldService.setActive(this.field.name);
        /** @type {?} */
        const startMousePos = this._fieldService.beginMove($event);
        /** @type {?} */
        const left = this.left;
        /** @type {?} */
        const top = this.top;
        /** @type {?} */
        const right = this.right;
        /** @type {?} */
        const bottom = this.bottom;
        /** @type {?} */
        const column = this.field.getColumnByName(mode);
        /** @type {?} */
        const columnInitialPos = column ? column.value : null;
        //  let ppa = mode.startsWith('TC:');
        /** @type {?} */
        const mouseUpSubscription = this._fieldService.mouseUp
            .subscribe((/**
         * @param {?} mousePos
         * @return {?}
         */
        mousePos => {
            this._field.position = new Point(this.left, this.top);
            this._field.size = new Size(this.width, this.height);
            //    ppa = false;
            mouseUpSubscription.unsubscribe();
        }));
        this._fieldService.mouseMove
            .pipe(takeUntil(this._fieldService.mouseUp))
            .subscribe((/**
         * @param {?} mousePos
         * @return {?}
         */
        mousePos => {
            if (!mousePos || !this.pageSize) {
                return;
            }
            /** @type {?} */
            const minWidth = 40;
            /** @type {?} */
            const minHeight = 15;
            /** @type {?} */
            const width = this.width;
            /** @type {?} */
            const height = this.height;
            /** @type {?} */
            const delta = new Point((mousePos.x - startMousePos.x) / this.scale, (mousePos.y - startMousePos.y) / this.scale);
            if (columnInitialPos) {
                /** @type {?} */
                const v = columnInitialPos + delta.x;
                column.value = Math.max(0, Math.min(this.width, v));
                return;
            }
            switch (mode) {
                case 'Move':
                    this.left = Math.min(left + delta.x, this.pageSize.width - this.width);
                    this.top = Math.min(top + delta.y, this.pageSize.height - this.height);
                    this.right = this.left + width;
                    this.bottom = this.top + height;
                    break;
                // Edges
                case 'W':
                    this.left = left + delta.x;
                    if (this.width < minWidth) {
                        this.left = this.right - minWidth;
                    }
                    break;
                case 'E':
                    this.right = right + delta.x;
                    if (this.width < minWidth) {
                        this.right = this.left + minWidth;
                    }
                    break;
                case 'N':
                    this.top = top + delta.y;
                    if (this.height < minWidth) {
                        this.top = this.bottom - minHeight;
                    }
                    break;
                case 'S':
                    this.bottom = bottom + delta.y;
                    if (this.height < minHeight) {
                        this.bottom = this.top + minHeight;
                    }
                    break;
                // Corners
                case 'NW':
                    this.left = left + delta.x;
                    this.top = top + delta.y;
                    if (this.width < minWidth) {
                        this.left = this.right - minWidth;
                    }
                    if (this.height < minWidth) {
                        this.top = this.bottom - minHeight;
                    }
                    break;
                case 'SW':
                    this.left = left + delta.x;
                    this.bottom = bottom + delta.y;
                    if (this.width < minWidth) {
                        this.left = this.right - minWidth;
                    }
                    if (this.height < minHeight) {
                        this.bottom = this.top + minHeight;
                    }
                    break;
                case 'NE':
                    this.right = right + delta.x;
                    this.top = top + delta.y;
                    if (this.width < minWidth) {
                        this.right = this.left + minWidth;
                    }
                    if (this.height < minHeight) {
                        this.top = this.bottom - minHeight;
                    }
                    break;
                case 'SE':
                    this.right = right + delta.x;
                    this.bottom = bottom + delta.y;
                    if (this.width < minWidth) {
                        this.right = this.left + minWidth;
                    }
                    if (this.height < minHeight) {
                        this.bottom = this.top + minHeight;
                    }
                    break;
            }
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    rightClick($event) {
        $event.preventDefault();
    }
}
FieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-field',
                template: "<div class=\"field\" (clickOutside)=\"isActive = false\" (contextmenu)=\"rightClick($event)\"\n    [clickOutsideEvents]=\"'mousedown'\" [clickOutsideEnabled]=\"isActive\" [style.left.px]=\"left\" [style.top.px]=\"top\"\n    [style.width.px]=\"width\" [style.height.px]=\"height\">\n\n    <div class=\"field-text\" (dblclick)=\"renameFieldClick()\" (mousedown)=\"mouseDown($event, 'Move')\"\n        (panstart)=\"mouseDown($event, 'Move')\">\n        <div *ngIf=\"!isActive\">{{ field.name }}</div>\n    </div>\n    <div class=\"resizable-handle ne-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'NE')\"\n        (panstart)=\"mouseDown($event, 'NE')\"></div>\n    <div class=\"resizable-handle se-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'SE')\"\n        (panstart)=\"mouseDown($event, 'SE')\"></div>\n    <div class=\"resizable-handle sw-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'SW')\"\n        (panstart)=\"mouseDown($event, 'SW')\"></div>\n    <div class=\"resizable-handle nw-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'NW')\"\n        (panstart)=\"mouseDown($event, 'NW')\"></div>\n\n    <div class=\"resizable-v-edge w-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'W')\"\n        (panstart)=\"mouseDown($event, 'W')\"></div>\n    <div class=\"resizable-v-edge e-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'E')\"\n        (panstart)=\"mouseDown($event, 'E')\"></div>\n    <div class=\"resizable-h-edge n-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'N')\"\n        (panstart)=\"mouseDown($event, 'N')\"></div>        \n    <div class=\"resizable-h-edge s-resize\" *ngIf=\"isActive\" (mousedown)=\"mouseDown($event, 'S')\"\n        (panstart)=\"mouseDown($event, 'S')\"></div>\n\n    <div *ngIf=\"isTable && isActive\">\n        <div *ngFor=\"let column of field.columns\" class=\"tc-top resizable-handle\" [style.left.px]=\"column.value\"></div>\n        <div *ngFor=\"let column of field.columns\" class=\"tc-bottom resizable-handle\" [style.left.px]=\"column.value\"></div>\n        <div *ngFor=\"let column of field.columns\" class=\"tc\" [style.left.px]=\"column.value\"\n            (mousedown)=\"mouseDown($event, column.name)\">\n            <div class=\"tc-background\"></div>\n            <div class=\"tc-remove image-btn\" title=\"Remove column separator\" (click)=\"removeColumn(column)\">\n                <fa-icon [icon]=\"'trash'\"></fa-icon>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"isTable && !isActive\">\n        <div *ngFor=\"let column of field.columns\" class=\"tc-deactived\" [style.left.px]=\"column.value\">\n        </div>\n    </div>\n\n    <div class=\"tc-add-left image-btn\" *ngIf=\"isTable && isActive\" title=\"Add new column separator\" (click)=\"addColumnLeft()\">\n        <fa-icon [icon]=\"'plus'\"></fa-icon>\n    </div>\n\n    <div class=\"tc-add-right image-btn\" *ngIf=\"isTable && isActive\" title=\"Add new column separator\" (click)=\"addColumnRight()\">\n        <fa-icon [icon]=\"'plus'\"></fa-icon>\n    </div>\n\n    <div class=\"context-menu\" *ngIf=\"isActive\">\n        <div class=\"image-btn\" (click)=\"renameFieldClick()\" title=\"Rename the field\">\n            <fa-icon [icon]=\"'edit'\"></fa-icon>\n        </div>\n        <div class=\"image-btn\" (click)=\"deleteFieldClick()\" title=\"Remove the field\">\n            <fa-icon [icon]=\"'trash'\"></fa-icon>\n        </div>\n    </div>\n\n    <div class=\"field-name\" *ngIf=\"isActive\">\n        {{ field.name }}\n    </div>\n\n</div>",
                styles: [".btn{padding:5px 20px;background-color:#25c2d4;cursor:pointer;color:#fff!important}.btn:hover{background-color:#688296;color:#ccd0d4!important}.image-btn{text-align:center;cursor:pointer;margin:1px;color:#c4c4c4}.image-btn:hover{color:#688296!important}.image-btn>fa-icon{padding:5px;font-size:16px}.list-item:nth-of-type(even){background-color:#f4f4f4}.list-item:hover{background-color:#e5e5e5}.tc{position:absolute;display:block;border-left:4px solid #679ffa;width:4px;top:-5px;bottom:-5px;cursor:col-resize;z-index:1000}.tc-deactived{position:absolute;display:block;border-left:4px solid #738a9cc9;width:4px;top:0;bottom:0;cursor:col-resize;z-index:1000}.tc-background{-webkit-transform:translatex(-9px);transform:translatex(-9px);background-color:#fffFFF01;width:15px;height:100%}.tc-top{top:-5px;-webkit-transform:translatex(-3px);transform:translatex(-3px);cursor:col-resize}.tc-bottom{bottom:-5px;-webkit-transform:translatex(-3px);transform:translatex(-3px);cursor:col-resize}.tc-remove{background:#fff;display:none;position:absolute;top:15px}.tc:hover>.tc-remove{display:block}.tc-add-left{position:absolute;left:-5px;top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.tc-add-right{position:absolute;right:-5px;top:50%;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}.resizable-v-edge{background-color:#fffFFF01;position:absolute;font-size:.1px;display:block;width:10px;top:5px;bottom:5px}.resizable-h-edge{background-color:#fffFFF01;position:absolute;font-size:.1px;display:block;height:10px;left:5px;right:5px}.w-resize{cursor:w-resize;left:-5px}.e-resize{cursor:e-resize;right:-5px}.n-resize{cursor:n-resize;top:-5px}.s-resize{cursor:s-resize;bottom:-5px}.resizable-handle{background-color:#679ffa;width:10px;height:10px;position:absolute;font-size:.1px;display:block}.se-resize{bottom:-5px;right:-5px;cursor:se-resize}.ne-resize{top:-5px;right:-5px;cursor:ne-resize}.sw-resize{bottom:-5px;left:-5px;cursor:sw-resize}.nw-resize{top:-5px;left:-5px;cursor:nw-resize}.field{position:absolute}.field-text{background-color:#99b1c440;cursor:move;color:#000;width:inherit;height:inherit}.field-text>div{background-color:#99b1c4DD;box-sizing:border-box;width:100%;height:100%;padding:1px 5px;font-size:10px;overflow:hidden;text-overflow:ellipsis;pointer-events:none}.field-name{position:absolute;width:auto;left:50%;top:0;-webkit-transform:translate(-50%,calc(-100% - 5px));transform:translate(-50%,calc(-100% - 5px));padding:2px 5px;background-color:#fff;border:#688296;box-shadow:rgba(0,0,0,.52) 0 0 5px;font-size:8px;color:#688296;cursor:context-menu}.context-menu{position:absolute;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;width:auto;left:50%;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);margin-top:5px;background-color:#fff;border:#688296;box-shadow:rgba(0,0,0,.52) 0 0 5px}"]
            }] }
];
/** @nocollapse */
FieldComponent.ctorParameters = () => [
    { type: FieldService },
    { type: ZoomService }
];
FieldComponent.propDecorators = {
    contextMenuClick: [{ type: Output }]
};
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
class RenameModalComponent {
    constructor() {
        this.acceptEvent = new EventEmitter();
        this.cancelEvent = new EventEmitter();
        this._error = null;
    }
    /**
     * @return {?}
     */
    get hasError() {
        return this.error != null;
    }
    /**
     * @return {?}
     */
    get error() {
        return this._error;
    }
    /**
     * @param {?} newError
     * @return {?}
     */
    set error(newError) {
        this._error = newError;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set value(newValue) {
        this._value = newValue;
        if (this.hasError) {
            this._error = null;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.initialValue) {
            this.initialValue = "";
        }
        this.value = this.initialValue;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    refresh($event) {
        if ($event) {
            this._error = null;
            this._value = this.initialValue;
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.inputBox.nativeElement.focus();
            }), 0);
        }
    }
    /**
     * @return {?}
     */
    acceptClick() {
        // Check if value is not empty
        if (this.value === null || this.value === "") {
            this._error = "A new value can't be empty";
        }
        if (!this.hasError) {
            this.acceptEvent.emit({ id: this.operationId, newValue: this.value });
        }
    }
    /**
     * @return {?}
     */
    cancelClick() {
        if (this.modalElement) {
            this.modalElement.cancelClose();
        }
    }
}
RenameModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-rename-modal',
                template: "<gd-modal #modal [id]=\"id\" [title]=\"title\" (visible)=\"refresh($event)\">\n  <div class=\"window\">\n    <div class=\"prompt\">{{ promptText }}</div>\n    <input #inputBox type=\"text\" [value]=\"value\" (input)=\"value=$event.target.value\" (keyup.enter)=\"acceptClick()\" (keyup.esc)=\"cancelClick()\"/>\n\n    <div class=\"error\" *ngIf=\"error\">{{ error }}</div>\n\n    <div class=\"buttons\">      \n      <div class=\"btn\" (click)=\"acceptClick()\">{{ acceptText }}</div>\n      <div class=\"btn\" (click)=\"cancelClick()\">Cancel</div>\n    </div>\n  </div>\n</gd-modal>",
                styles: [".btn{padding:5px 20px;background-color:#25c2d4;cursor:pointer;color:#fff!important}.btn:hover{background-color:#688296;color:#ccd0d4!important}.image-btn{text-align:center;color:#fff;cursor:pointer;margin:1px}.image-btn:hover{color:#688296!important}.image-btn>fa-icon{padding:5px;font-size:16px}.list-item:nth-of-type(even){background-color:#f4f4f4}.list-item:hover{background-color:#e5e5e5}input{margin-top:20px;margin-bottom:20px;padding:5px}.window{min-width:400px;min-height:auto;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:24px}.buttons{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;margin-left:auto;margin-top:auto}.buttons>div{margin-left:10px}.error{color:red;padding-top:1px;padding-bottom:20px}"]
            }] }
];
/** @nocollapse */
RenameModalComponent.ctorParameters = () => [];
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
const $$1 = jquery;
class SurfaceComponent {
    /**
     * @param {?} _modalService
     * @param {?} hostingComponentsService
     * @param {?} addDynamicComponentService
     * @param {?} _zoomService
     * @param {?} _templateService
     * @param {?} _documentPageService
     */
    constructor(_modalService, hostingComponentsService, addDynamicComponentService, _zoomService, _templateService, _documentPageService) {
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
        (zoom) => {
            this._zoom = zoom;
        }));
        this._currentTemplateChangedSubscription = _templateService.currentTemplateChanged
            .subscribe((/**
         * @param {?} template
         * @return {?}
         */
        template => this.setTemplate(template)));
        this.setTemplate(this._templateService.currentTemplate);
        this._documentPageService.activePageChanged.subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.updateActivePage()));
    }
    /**
     * @param {?} document
     * @return {?}
     */
    set document(document) {
        this._document = document;
    }
    /**
     * @return {?}
     */
    get document() {
        return this._document;
    }
    /**
     * @return {?}
     */
    get scale() {
        return this._zoom / 100;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    addField(field) {
        /** @type {?} */
        const dynamicDirective = this.hostingComponentsService.find(field.pageNumber);
        if (dynamicDirective) {
            /** @type {?} */
            const viewContainerRef = dynamicDirective.viewContainerRef;
            /** @type {?} */
            const fieldComponent = this.addDynamicComponentService.addDynamicComponent(viewContainerRef, FieldComponent);
            /** @type {?} */
            const wrapper = new FieldWrapper(fieldComponent);
            /** @type {?} */
            const pageModel = this.document.pages.find((/**
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
            event => this.fieldContextMenuClick(event)));
            this.fieldWrappers.set(field, wrapper);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    fieldContextMenuClick(event) {
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    fieldNameModalAccept(event) {
        /** @type {?} */
        const oldFieldName = event.id;
        /** @type {?} */
        const newFieldName = event.newValue;
        if (oldFieldName !== newFieldName) {
            /** @type {?} */
            const existFieldWithName = this._template.getFieldByName(newFieldName);
            if (existFieldWithName) {
                this.fieldNameModal.error = "Field with the same name already exists";
                return;
            }
        }
        this._modalService.close("FieldNameModal");
        /** @type {?} */
        const field = this._template.getFieldByName(oldFieldName);
        if (field) {
            field.name = newFieldName;
        }
    }
    /**
     * @return {?}
     */
    removeFields() {
        this.fieldWrappers.forEach((/**
         * @param {?} wrapper
         * @return {?}
         */
        wrapper => {
            wrapper.destroy();
        }));
        this.fieldWrappers.clear();
    }
    /**
     * @param {?} field
     * @return {?}
     */
    removeField(field) {
        /** @type {?} */
        const wrapper = this.fieldWrappers.get(field);
        if (wrapper) {
            wrapper.destroy();
        }
        this.fieldWrappers.delete(field);
    }
    /**
     * @private
     * @param {?} position
     * @param {?} page
     * @return {?}
     */
    getCurrentPosition(position, page) {
        /** @type {?} */
        const x = (position.x - page.offset().left);
        /** @type {?} */
        const y = (position.y - page.offset().top);
        return new Point(x, y);
    }
    // @HostListener('document:mousedown', ['$event'])
    // onMouseDown($event: MouseEvent) {
    //   const pos = Utils.getMousePosition($event);
    //   let e = document.elementFromPoint(pos.x, pos.y);
    // }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.updateActivePage();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._fieldAddedSubscription) {
            this._fieldAddedSubscription.unsubscribe();
        }
        if (this._fieldRemovedSubscription) {
            this._fieldRemovedSubscription.unsubscribe();
        }
        if (this._currentTemplateChangedSubscription) {
            this._currentTemplateChangedSubscription.unsubscribe();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    doubleTap($event) {
        //  $event.preventDefault();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    setActivePage($event) {
        $event.preventDefault();
        /** @type {?} */
        const position = Utils.getMousePosition($event);
        /** @type {?} */
        const elements = document.elementsFromPoint(position.x, position.y);
        /** @type {?} */
        const currentPage = elements.find((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id && x.id.startsWith("page-")));
        if (currentPage) {
            this._documentPageService.setActivePage(parseInt(currentPage.id.substring("page-".length), 10));
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateActivePage() {
        /** @type {?} */
        const activePage = "page-" + this._documentPageService.activePage;
        /** @type {?} */
        const elements = this.surface.nativeElement.querySelectorAll('gd-page');
        elements.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            /** @type {?} */
            const child = ((/** @type {?} */ (element))).children[0];
            if (child.id === activePage) {
                ((/** @type {?} */ (child))).style.opacity = '1';
                ((/** @type {?} */ (child))).parentElement.parentElement.style.background = '#FFFFFF';
            }
            else {
                ((/** @type {?} */ (child))).style.opacity = '0.5';
                ((/** @type {?} */ (child))).parentElement.parentElement.style.background = '#688296';
            }
        }));
    }
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    setTemplate(template) {
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
        field => this.addField(field)));
        this._fieldRemovedSubscription = this._template.removedField.subscribe((/**
         * @param {?} field
         * @return {?}
         */
        field => this.removeField(field)));
        this.removeFields();
        this._template = template;
        this._template.fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            this.addField(field);
        }));
    }
}
SurfaceComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-surface',
                template: "<div #surface class=\"doc-panel\">\n  <gd-document class=\"gd-document\" *ngIf=\"document\" [mode]=\"false\" [file]=\"document\" gdScrollable gdRenderPrint\n    [htmlMode]=\"false\" (click)=\"setActivePage($event)\"></gd-document>\n\n  <gd-rename-modal #fieldNameModal [id]=\"'FieldNameModal'\" [title]=\"'Rename Field'\"\n    [promptText]=\"'Enter a new field name:'\" [acceptText]=\"'Save'\" (acceptEvent)=\"fieldNameModalAccept($event)\">\n  </gd-rename-modal>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);.red{box-shadow:10px 5px 5px red}:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .top-panel{align-content:flex-start}.gd-document{position:absolute;height:calc(100vh - 60px);width:calc(100vw - 300px);left:0;top:60px;right:-300px;overflow:auto}::ng-deep .panzoom{-webkit-box-pack:unset!important;justify-content:unset!important}::ng-deep .page{position:relative}::ng-deep .gd-page-image{width:unset;height:unset}"]
            }] }
];
/** @nocollapse */
SurfaceComponent.ctorParameters = () => [
    { type: ModalService },
    { type: HostingDynamicComponentService },
    { type: AddDynamicComponentService },
    { type: ZoomService },
    { type: TemplateService },
    { type: DocumentPageService }
];
SurfaceComponent.propDecorators = {
    fieldNameModal: [{ type: ViewChild, args: ['fieldNameModal', { static: true },] }],
    surface: [{ type: ViewChild, args: ['surface', { static: true },] }],
    document: [{ type: Input }]
};
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
class FieldWrapper {
    /**
     * @param {?} ref
     */
    constructor(ref) {
        this.ref = ref;
        this.fieldComponent = (/** @type {?} */ (ref.instance));
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.ref) {
            this.ref.destroy();
        }
        if (this.contextMenuSubscription) {
            this.contextMenuSubscription.unsubscribe();
        }
    }
}
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
class ConfirmationModalComponent {
    constructor() {
        this.acceptEvent = new EventEmitter();
        this.cancelEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    acceptClick() {
        this.acceptEvent.emit(this.operationId);
    }
    /**
     * @return {?}
     */
    cancelClick() {
        if (this.modalElement) {
            this.modalElement.cancelClose();
        }
    }
}
ConfirmationModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-confirmation-modal',
                template: "<gd-modal #modal [id]=\"id\" [title]=\"title\">\n  <div class=\"window\">\n    <div class=\"prompt\" [innerHTML]=\"promptText\"></div>\n\n    <div class=\"buttons\">      \n      <div class=\"btn\" (click)=\"acceptClick()\">{{ acceptText }}</div>\n      <div class=\"btn\" (click)=\"cancelClick()\">Cancel</div>\n    </div>\n  </div>\n</gd-modal>\n",
                styles: [".btn{padding:5px 20px;background-color:#25c2d4;cursor:pointer;color:#fff!important}.btn:hover{background-color:#688296;color:#ccd0d4!important}.image-btn{text-align:center;color:#fff;cursor:pointer;margin:1px}.image-btn:hover{color:#688296!important}.image-btn>fa-icon{padding:5px;font-size:16px}.list-item:nth-of-type(even){background-color:#f4f4f4}.list-item:hover{background-color:#e5e5e5}.window{min-width:400px;min-height:auto;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:24px}.buttons{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;margin-left:auto;margin-top:20px}.buttons>div{margin-left:10px}"]
            }] }
];
/** @nocollapse */
ConfirmationModalComponent.ctorParameters = () => [];
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
class UtilsService {
    constructor() { }
    /**
     * @param {?} results
     * @return {?}
     */
    generateCsvForParseResults(results) {
        /** @type {?} */
        let r = "field, value";
        for (let i = 0; i < results.length; i++) {
            r += "\r\n";
            if (Array.isArray(results[i].value)) {
                /** @type {?} */
                const table = new TableValue(results[i].value);
                for (let row = 0; row < table.rows.length; row++) {
                    r += this.prepareCsvItem(results[i].name) + ",";
                    for (let col = 0; col < table.rows[row].length; col++) {
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
    }
    /**
     * @param {?} item
     * @return {?}
     */
    prepareCsvItem(item) {
        if (!item) {
            return "";
        }
        /** @type {?} */
        const ci = item.replace(/"/g, '""');
        if (ci.indexOf(',') > -1
            || ci.indexOf('\r') > -1
            || ci.indexOf('"') > -1
            || ci.indexOf("'") > -1) {
            return '"' + ci + '"';
        }
        else {
            return ci;
        }
    }
}
UtilsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UtilsService.ctorParameters = () => [];
/** @nocollapse */ UtilsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UtilsService_Factory() { return new UtilsService(); }, token: UtilsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableViewerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TableViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-table-viewer',
                template: "<gd-modal #modal [id]=\"'TableViewer'\" [title]=\"'Table Viewer'\">\n    <div class=\"window\" *ngIf=\"table\">\n        <table>\n            <tr *ngFor=\"let r of table.rows\">\n                <td *ngFor=\"let c of r\">{{c}}</td>\n            </tr>\n        </table>\n\n    </div>\n</gd-modal>",
                styles: [".window{min-width:400px;min-height:auto;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:24px}table{border-collapse:collapse;border:1px solid #e5e5e5}td{border:1px solid #e5e5e5;padding:5px}tr:nth-of-type(odd){background-color:#f4f4f4}tr:hover{background-color:#e5e5e5}"]
            }] }
];
/** @nocollapse */
TableViewerComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    TableViewerComponent.prototype.table;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidePanelComponent {
    /**
     * @param {?} _modalService
     * @param {?} _parserService
     * @param {?} _sourceFileService
     * @param {?} _templateService
     * @param {?} _utilsService
     * @param {?} _placeholderService
     */
    constructor(_modalService, _parserService, _sourceFileService, _templateService, _utilsService, _placeholderService) {
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
        template => this.currentTemplate = template));
        this._templateAddedSubscription = this._templateService.templateAddedSubject
            .subscribe((/**
         * @param {?} template
         * @return {?}
         */
        template => this.templateIds.push(template)));
        this._templateRemovedSubscription = this._templateService.templateRemovedSubject
            .subscribe((/**
         * @param {?} templateId
         * @return {?}
         */
        templateId => this.removeTemplateId(templateId)));
        this.currentTemplate = this._templateService.currentTemplate;
        this.templateIds = [];
        this._templateService.templateIds.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            this.templateIds.push(element);
        }));
    }
    /**
     * @return {?}
     */
    get parseState() {
        return this._parseState;
    }
    /**
     * @return {?}
     */
    get currentTemplate() {
        return this._currentTemplate;
    }
    /**
     * @param {?} template
     * @return {?}
     */
    set currentTemplate(template) {
        if (this._currentTemplateModifiedSubscription) {
            this._currentTemplateModifiedSubscription.unsubscribe();
        }
        this._currentTemplate = template;
        this._currentTemplateModifiedSubscription = this._currentTemplate.modified
            .subscribe((/**
         * @param {?} t
         * @return {?}
         */
        t => this.parseState.prompt = "Template was changed. Please parse data again."));
        this.parseState.prompt = "Press Parser to extract data by this template";
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._currentTemplateChangedSubscription) {
            this._currentTemplateChangedSubscription.unsubscribe();
        }
        if (this._templateAddedSubscription) {
            this._templateAddedSubscription.unsubscribe();
        }
        if (this._templateRemovedSubscription) {
            this._templateRemovedSubscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    manageTemplates() {
        this.isDataMode = false;
        this.isTemplateMode = true;
    }
    /**
     * @param {?} templateId
     * @return {?}
     */
    isCurrentTemplate(templateId) {
        return this.currentTemplate && this.currentTemplate.id === templateId.id;
    }
    /**
     * @param {?} templateId
     * @return {?}
     */
    selectTemplateClick(templateId) {
        if (!templateId) {
            return;
        }
        this._templateService.selectTemplate(templateId);
        this.showData();
    }
    /**
     * @return {?}
     */
    createTemplateClick() {
        this._templateService.createTemplate();
    }
    /**
     * @param {?} templateId
     * @param {?} $event
     * @return {?}
     */
    renameTemplateClick(templateId, $event) {
        $event.stopPropagation();
        $event.preventDefault();
        if (templateId && this.templateNameModal) {
            this.templateNameModal.operationId = templateId.id;
            this.templateNameModal.initialValue = templateId.name;
            this._modalService.open("TemplateNameModal");
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    templateNameModalAccept(event) {
        /** @type {?} */
        const templateId = event.id;
        /** @type {?} */
        const templateName = event.newValue;
        try {
            this._templateService.renameTemplate({ id: templateId, name: templateName });
        }
        catch (error) {
            this.templateNameModal.error = error;
            return;
        }
        this._modalService.close("TemplateNameModal");
    }
    /**
     * @param {?} templateId
     * @param {?} $event
     * @return {?}
     */
    removeTemplateClick(templateId, $event) {
        $event.stopPropagation();
        $event.preventDefault();
        if (this.templateRemoveModal) {
            this.templateRemoveModal.operationId = templateId.id;
            this.templateRemoveModal.promptText = "Remove template <b>" + templateId.name + "</b>?";
            this._modalService.open("TemplateRemoveModal");
        }
    }
    /**
     * @param {?} operationId
     * @return {?}
     */
    templateRemoveModalAccept(operationId) {
        this._modalService.close("TemplateRemoveModal");
        this._templateService.removeTemplate({ id: operationId, name: "" });
    }
    /**
     * @param {?} templateId
     * @param {?} $event
     * @return {?}
     */
    downloadTemplateClick(templateId, $event) {
        $event.stopPropagation();
        $event.preventDefault();
        /** @type {?} */
        const templateJson = this._templateService.serialize(templateId);
        /** @type {?} */
        const f = new File([templateJson], templateId.name + ".json", {
            type: "text/plain"
        });
        /** @type {?} */
        const fileUrl = window.URL.createObjectURL(f);
        /** @type {?} */
        const fileLink = document.createElement('a');
        fileLink.href = fileUrl;
        fileLink.download = f.name;
        fileLink.click();
        URL.revokeObjectURL(fileUrl);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFileSelected(event) {
        /** @type {?} */
        const file = event.target.files[0];
        if (file) {
            /** @type {?} */
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = (/**
             * @param {?} x
             * @return {?}
             */
            x => {
                this._templateService.deserialize(reader.result.toString());
                this.uploadTemplate.nativeElement.value = null;
            });
        }
    }
    /**
     * @return {?}
     */
    showData() {
        this.isTemplateMode = false;
        this.isDataMode = true;
    }
    /**
     * @return {?}
     */
    parse() {
        this.parseState.execute();
        /** @type {?} */
        const state = this._placeholderService.startOperation("Parsing data...");
        /** @type {?} */
        const observer = {
            next: (/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                this.parseState.result = response.data;
            }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                this.parseState.error = this._parserService.getErrorMessage(err);
                state.error(err);
            }),
            complete: (/**
             * @return {?}
             */
            () => state.complete())
        };
        this._parserService.parseByTemplate(this._sourceFileService.sourceFile, null, this._templateService.currentTemplate).subscribe(observer);
    }
    /**
     * @return {?}
     */
    downloadResultsAsCsv() {
        if (!this.parseState.isCompleted || this.parseState.result.length === 0) {
            return;
        }
        /** @type {?} */
        const csv = this._utilsService.generateCsvForParseResults(this.parseState.result);
        /** @type {?} */
        const f = new File([csv], this.fileNameForCsv ? this.fileNameForCsv + " - data.csv" : this._sourceFileService.sourceFile.guid + " - data.csv", {
            type: "text/plain"
        });
        /** @type {?} */
        const fileUrl = window.URL.createObjectURL(f);
        /** @type {?} */
        const fileLink = document.createElement('a');
        fileLink.href = fileUrl;
        fileLink.download = f.name;
        fileLink.click();
        URL.revokeObjectURL(fileUrl);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    isArray(obj) {
        return Array.isArray(obj);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    showTableValue(value) {
        /** @type {?} */
        const table = new TableValue(value);
        this.tableViewer.table = table;
        this._modalService.open("TableViewer");
    }
    /**
     * @private
     * @param {?} templateId
     * @return {?}
     */
    removeTemplateId(templateId) {
        for (let i = 0; i < this.templateIds.length; i++) {
            if (this.templateIds[i].id === templateId.id) {
                this.templateIds.splice(i, 1);
                return;
            }
        }
    }
}
SidePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-parser-side-panel',
                template: "<div class=\"side-panel\">\n    <input type=\"file\" #uploadTemplate (change)=\"onFileSelected($event)\" />\n\n    <div *ngIf=\"isDataMode\">\n        <div class=\"side-panel-title\">\n            <div>{{ currentTemplate?.name }}</div>\n            <div class=\"image-btn\" (click)=\"manageTemplates()\">\n                <fa-icon [icon]=\"'bars'\"></fa-icon>\n            </div>\n        </div>\n\n        <div class=\"side-panel-toolbar\">\n            <div class=\"image-btn\" (click)=\"createTemplateClick()\" title=\"Create a new template\">\n                <fa-icon [icon]=\"'file'\"></fa-icon>\n            </div>\n            <div class=\"image-btn\" (click)=\"uploadTemplate.click()\" title=\"Upload the existing template\">\n                <fa-icon [icon]=\"'upload'\"></fa-icon>\n            </div>\n\n            <div class=\"side-panel-toolbar-space\"></div>\n\n            <div class=\"image-btn\" (click)=\"renameTemplateClick(currentTemplate, $event)\" title=\"Rename the current template\">\n                <fa-icon [icon]=\"'edit'\"></fa-icon>\n            </div>\n            <div class=\"image-btn\" *ngIf=\"currentTemplate?.isStored\" (click)=\"removeTemplateClick(currentTemplate, $event)\"\n                title=\"Remove the current template\">\n                <fa-icon [icon]=\"'trash'\"></fa-icon>\n            </div>\n            <div class=\"image-btn\" *ngIf=\"currentTemplate?.isStored\" (click)=\"downloadTemplateClick(currentTemplate, $event)\"\n                title=\"Download the current template\">\n                <fa-icon [icon]=\"'file-download'\"></fa-icon>\n            </div>\n        </div>\n\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isProcessing\">\n            <div>Parsing data...</div>\n        </div>\n\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isFailed\">\n            <div class=\"side-panel-content-text error-text\">Error occurs while parsing data.</div>\n            <div class=\"btn\" (click)=\"parse()\">Parse again</div>\n        </div>\n\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isReadyToRun\">\n            <div class=\"side-panel-content-text\" [innerHTML]=\"parseState.prompt\"></div>\n            <div class=\"btn\" (click)=\"parse()\">Parse</div>\n        </div>\n\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isCompleted && !(parseState.result?.length > 0)\">\n            <div class=\"side-panel-content-text\">\n                No data is extracted. Try to change the template.\n            </div>\n        </div>\n\n        <div class=\"data-panel\" *ngIf=\"parseState.result?.length > 0\">\n            <div class=\"side-panel-toolbar\">\n                <div class=\"btn\" (click)=\"downloadResultsAsCsv()\">Download as CSV</div>\n            </div>\n            <div class=\"data-item list-item\" *ngFor=\"let r of parseState.result\">\n                <div class=\"data-item-field\">{{ r.name }}</div>\n                <div class=\"data-item-value\" *ngIf=\"r.value && !isArray(r.value)\">{{ r.value }}</div>\n                <div class=\"data-item-value\" *ngIf=\"r.value && isArray(r.value)\">\n                    <div class=\"btn\" (click)=\"showTableValue(r.value)\">Show Table</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"isTemplateMode\">\n        <div class=\"side-panel-title\">\n            <div>Manage Templates</div>\n            <div class=\"image-btn\" (click)=\"showData()\">\n                <fa-icon [icon]=\"'times'\"></fa-icon>\n            </div>\n        </div>\n        <div class=\"no-data-panel\" *ngIf=\"templateIds.length == 0\">\n            <div class=\"side-panel-content-text\">There are no templates. Try to create a new one or upload the existing\n                one.</div>\n        </div>\n\n        <div class=\"template-list\">\n            <div class=\"template-item list-item\" *ngFor=\"let t of templateIds\" (click)=\"selectTemplateClick(t)\">\n                <div class=\"template-item-text\" [ngClass]=\"{'template-item-current': isCurrentTemplate(t)}\">{{ t?.name\n                    }} </div>\n                <div class=\"image-btn\" (click)=\"renameTemplateClick(t, $event)\" title=\"Rename a template\">\n                    <fa-icon [icon]=\"'edit'\"></fa-icon>\n                </div>\n                <div class=\"image-btn\" (click)=\"downloadTemplateClick(t, $event)\" title=\"Download a template\">\n                    <fa-icon [icon]=\"'file-download'\"></fa-icon>\n                </div>\n                <div class=\"image-btn\" (click)=\"removeTemplateClick(t, $event)\" title=\"Remove a template\">\n                    <fa-icon [icon]=\"'trash'\"></fa-icon>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<gd-rename-modal #templateNameModal [id]=\"'TemplateNameModal'\" [title]=\"'Rename Template'\"\n    [promptText]=\"'Enter a new template name:'\" [acceptText]=\"'Save'\" (acceptEvent)=\"templateNameModalAccept($event)\">\n</gd-rename-modal>\n<gd-confirmation-modal #templateRemoveModal [id]=\"'TemplateRemoveModal'\" [title]=\"'Remove Template'\"\n    [acceptText]=\"'Remove'\" (acceptEvent)=\"templateRemoveModalAccept($event)\">\n</gd-confirmation-modal>\n<gd-table-viewer #tableViewer></gd-table-viewer>",
                styles: [".btn{padding:5px 20px;background-color:#25c2d4;cursor:pointer;color:#fff!important}.btn:hover{background-color:#688296;color:#ccd0d4!important}.image-btn{text-align:center;color:#fff;cursor:pointer;margin:1px}.image-btn:hover{color:#688296!important}.image-btn>fa-icon{padding:5px;font-size:16px}.list-item:nth-of-type(even){background-color:#f4f4f4}.list-item:hover{background-color:#e5e5e5}.list-item .image-btn,input{display:none}.list-item:hover .image-btn{display:block;color:#c4c4c4}.error-text{color:red}.side-panel{width:100%;height:100%}.side-panel>div{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%}.side-panel-title{background-color:#25c2d4;color:#fff;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;padding:10px}.side-panel-title>div{padding-left:5px}.side-panel-toolbar{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;padding:10px}.side-panel-toolbar>div{color:#acacac}.side-panel-toolbar-space{margin-left:10px}.side-panel-content-text{padding:20px;text-align:center}.side-panel-content{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;height:100%;width:100%}.data-panel{overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:stretch;justify-content:stretch;height:100%;width:100%}.data-item{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:stretch;justify-content:stretch;width:100%}.data-item>div{padding:10px}.data-item-field,.data-item-value{-webkit-box-flex:1;flex:1}.template-list{position:relative;overflow-x:hidden;overflow-y:auto}.template-item{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:5px;height:2em;cursor:pointer}.template-item-text{-webkit-box-flex:1;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:5px 15px}.template-item-current{font-weight:700}.template-item-btn>fa-icon{padding:5px;font-size:16px}"]
            }] }
];
/** @nocollapse */
SidePanelComponent.ctorParameters = () => [
    { type: ModalService },
    { type: ParserService },
    { type: SourceFileService },
    { type: TemplateService },
    { type: UtilsService },
    { type: PlaceholderService }
];
SidePanelComponent.propDecorators = {
    fileNameForCsv: [{ type: Input }],
    templateNameModal: [{ type: ViewChild, args: ['templateNameModal', { static: true },] }],
    templateRemoveModal: [{ type: ViewChild, args: ['templateRemoveModal', { static: true },] }],
    uploadTemplate: [{ type: ViewChild, args: ['uploadTemplate', { static: true },] }],
    tableViewer: [{ type: ViewChild, args: ['tableViewer', { static: true },] }]
};
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
class PlaceholderComponent {
    /**
     * @param {?} placeholderService
     */
    constructor(placeholderService) {
        this._destroy = new Subject();
        this.progress = null;
        placeholderService.descriptionChanged
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} d
         * @return {?}
         */
        d => {
            this.description = d;
            this.progress = null;
            this.isVisible = true;
        }));
        /** @type {?} */
        let stateSubscription;
        placeholderService.stateChanged
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        state => {
            if (stateSubscription) {
                stateSubscription.unsubscribe();
            }
            /** @type {?} */
            const observer = {
                next: (/**
                 * @param {?} progress
                 * @return {?}
                 */
                progress => this.progress = progress),
                error: (/**
                 * @param {?} err
                 * @return {?}
                 */
                err => this.isVisible = false),
                complete: (/**
                 * @return {?}
                 */
                () => this.isVisible = false)
            };
            stateSubscription = state.subscribe(observer);
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
    }
}
PlaceholderComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-placeholder',
                template: "<div class=\"loading-wrapper\" *ngIf=\"isVisible\">\n    <div class=\"loading-message\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n        <div>{{ description }}</div>\n    </div>\n</div>",
                styles: [".loading-wrapper{background:rgba(0,0,0,.5);width:100%;height:100%;font-size:14px;color:#fff;position:fixed;top:0;left:0;z-index:99999}.loading-message{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.loading-message>fa-icon{margin-bottom:10px;font-size:25px;text-align:center}"]
            }] }
];
/** @nocollapse */
PlaceholderComponent.ctorParameters = () => [
    { type: PlaceholderService }
];
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
class ParserConfig {
}
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
class ParserConfigService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._parserConfig = new BehaviorSubject(new ParserConfig());
        this._updatedConfig = this._parserConfig.asObservable();
    }
    /**
     * @return {?}
     */
    get updatedConfig() {
        return this._updatedConfig;
    }
    /**
     * @return {?}
     */
    load() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const configEndpoint = this._config.getConfigEndpoint(Api.PARSER_APP);
            this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                /** @type {?} */
                const parserConfig = (/** @type {?} */ (response));
                this._parserConfig.next(parserConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                reject(`Could not load parser config: ${JSON.stringify(response)}`);
            }));
        }));
    }
}
ParserConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ParserConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ ParserConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ParserConfigService_Factory() { return new ParserConfigService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: ParserConfigService, providedIn: "root" });
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
    const result = (/**
     * @return {?}
     */
    () => parserConfigService.load());
    return result;
}
// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
/**
 * @param {?} service
 * @return {?}
 */
function setupLoadingInterceptor(service) {
    return new LoadingMaskInterceptorService(service);
}
class ParserModule {
    constructor() {
        library.add(fas, far);
    }
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    static forRoot(apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: ParserModule
        };
    }
}
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
                    HttpClientModule,
                    ClickOutsideModule,
                    FontAwesomeModule
                ],
                exports: [
                    ParserAppComponent,
                    FieldComponent,
                    CommonComponentsModule,
                    SurfaceComponent,
                    SidePanelComponent
                ],
                providers: [
                    ParserService,
                    ConfigService,
                    ExceptionMessageService,
                    ParserConfigService,
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: ErrorInterceptorService,
                        multi: true
                    },
                    {
                        provide: APP_INITIALIZER,
                        useFactory: initializeApp,
                        deps: [ParserConfigService], multi: true
                    },
                    LoadingMaskService,
                    {
                        provide: HTTP_INTERCEPTORS,
                        useFactory: setupLoadingInterceptor,
                        multi: true,
                        deps: [LoadingMaskService]
                    }
                ],
                entryComponents: [FieldComponent],
            },] }
];
/** @nocollapse */
ParserModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DocumentPageService, ParserAppComponent, ParserModule, ParserService, PlaceholderService, SourceFileService, TemplateService, initializeApp, setupLoadingInterceptor, SurfaceComponent as ɵa, FieldComponent as ɵb, FieldService as ɵc, ConfirmationModalComponent as ɵd, SidePanelComponent as ɵe, UtilsService as ɵf, RenameModalComponent as ɵg, PlaceholderComponent as ɵh, TableViewerComponent as ɵi, ParserConfigService as ɵj };
//# sourceMappingURL=groupdocs.examples.angular-parser.js.map
