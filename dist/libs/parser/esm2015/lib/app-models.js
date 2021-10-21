/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
export class TableValue {
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
export class OperationState {
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
export class DocumentDescriptionResponse {
}
if (false) {
    /** @type {?} */
    DocumentDescriptionResponse.prototype.message;
    /** @type {?} */
    DocumentDescriptionResponse.prototype.result;
}
export class ParseByTemplateResponse {
}
if (false) {
    /** @type {?} */
    ParseByTemplateResponse.prototype.message;
    /** @type {?} */
    ParseByTemplateResponse.prototype.data;
}
export class SourceFile {
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
export class DocumentDescription extends SourceFile {
}
if (false) {
    /** @type {?} */
    DocumentDescription.prototype.pages;
}
export class DocumentPageDescription {
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
export class FileDescription {
}
if (false) {
    /** @type {?} */
    FileDescription.prototype.pages;
}
export class ParseResult {
}
if (false) {
    /** @type {?} */
    ParseResult.prototype.name;
    /** @type {?} */
    ParseResult.prototype.value;
}
export class Point {
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
export class Size {
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
export function TemplateId() { }
if (false) {
    /** @type {?} */
    TemplateId.prototype.id;
    /** @type {?} */
    TemplateId.prototype.name;
}
export class Template {
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
export class TemplateFieldTypes {
}
TemplateFieldTypes.FIXED = "FIXED";
TemplateFieldTypes.TABLE = "TABLE";
if (false) {
    /** @type {?} */
    TemplateFieldTypes.FIXED;
    /** @type {?} */
    TemplateFieldTypes.TABLE;
}
export class TemplateField {
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
export class TemplateFieldTableSeparator {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLW1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvYXBwLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFjLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFJekQsTUFBTSxPQUFPLFVBQVU7Ozs7SUFDckIsWUFBWSxHQUFRO1FBYVgsU0FBSSxHQUFvQixFQUFFLENBQUM7UUFabEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUM3QixHQUFHLEdBQWEsRUFBRTtZQUN4QixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDVixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDdEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDckI7YUFDRjtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztDQUdGOzs7SUFEQywwQkFBb0M7Ozs7O0FBR3RDLE1BQU0sT0FBTyxjQUFjO0lBQTNCO1FBQ1UsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUtuQixZQUFPLEdBQUcsSUFBSSxDQUFDO0lBc0RqQixDQUFDOzs7O0lBcERDLElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFD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VSxlQUFnQztRQUEvRSxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUNuRyxDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELE1BQU07UUFDSixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUM7SUFDSixDQUFDO0NBQ0Y7Ozs7OztJQXRCYSw0Q0FBcUI7Ozs7O0lBQUUsNkNBQXNCOzs7OztJQUFFLHNEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJldmVudHNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgX192YWx1ZXMgfSBmcm9tIFwidHNsaWJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZVZhbHVlIHtcclxuICBjb25zdHJ1Y3RvcihvYmo6IGFueSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qgcm93OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICBpZiAob2JqW2ldKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBvYmpbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIHJvdy5wdXNoKG9ialtpXVtqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnJvd3MucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVhZG9ubHkgcm93czogQXJyYXk8c3RyaW5nW10+ID0gW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPcGVyYXRpb25TdGF0ZTxUPiB7XHJcbiAgcHJpdmF0ZSBfc3RhdGUgPSAwO1xyXG4gIHByaXZhdGUgX3Byb21wdDogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2Vycm9yOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfcmVzdWx0OiBUO1xyXG5cclxuICBlbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgZ2V0IGlzUmVhZHlUb1J1bigpIHtcclxuICAgIHJldHVybiB0aGlzLl9zdGF0ZSA9PT0gMDtcclxuICB9XHJcblxyXG4gIGdldCBpc0ZhaWxlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zdGF0ZSA9PT0gLTE7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNDb21wbGV0ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUgPT09IDE7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNQcm9jZXNzaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlID09IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJvbXB0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb21wdDtcclxuICB9XHJcblxyXG4gIHNldCBwcm9tcHQocHJvbXB0OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3Byb21wdCA9IHByb21wdDtcclxuICAgIHRoaXMuX2Vycm9yID0gbnVsbDtcclxuICAgIHRoaXMuX3Jlc3VsdCA9IG51bGw7XHJcbiAgICB0aGlzLl9zdGF0ZSA9IDA7XHJcbiAgfVxyXG5cclxuICBnZXQgZXJyb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZXJyb3I7XHJcbiAgfVxyXG5cclxuICBzZXQgZXJyb3IoZXJyb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5fcHJvbXB0ID0gbnVsbDtcclxuICAgIHRoaXMuX2Vycm9yID0gZXJyb3I7XHJcbiAgICB0aGlzLl9yZXN1bHQgPSBudWxsO1xyXG4gICAgdGhpcy5fc3RhdGUgPSAtMTtcclxuICB9XHJcblxyXG4gIGdldCByZXN1bHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgc2V0IHJlc3VsdChyZXN1bHQ6IFQpIHtcclxuICAgIHRoaXMuX3Byb21wdCA9IG51bGw7XHJcbiAgICB0aGlzLl9lcnJvciA9IG51bGw7XHJcbiAgICB0aGlzLl9yZXN1bHQgPSByZXN1bHQ7XHJcbiAgICB0aGlzLl9zdGF0ZSA9IDE7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlKCkge1xyXG4gICAgdGhpcy5fc3RhdGUgPSBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERvY3VtZW50RGVzY3JpcHRpb25SZXNwb25zZSB7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHJlc3VsdDogRG9jdW1lbnREZXNjcmlwdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlQnlUZW1wbGF0ZVJlc3BvbnNlIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgZGF0YTogUGFyc2VSZXN1bHRbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNvdXJjZUZpbGUge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBndWlkOiBzdHJpbmcsIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnREZXNjcmlwdGlvbiBleHRlbmRzIFNvdXJjZUZpbGUge1xyXG4gIHBhZ2VzOiBEb2N1bWVudFBhZ2VEZXNjcmlwdGlvbltdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRQYWdlRGVzY3JpcHRpb24ge1xyXG4gIG51bWJlcjogbnVtYmVyO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgZGF0YTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZURlc2NyaXB0aW9uIHtcclxuICBwYWdlczogUGFnZU1vZGVsW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJzZVJlc3VsdCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludCB7XHJcbiAgcmVhZG9ubHkgeDogbnVtYmVyO1xyXG4gIHJlYWRvbmx5IHk6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpemUge1xyXG4gIHJlYWRvbmx5IHdpZHRoOiBudW1iZXI7XHJcbiAgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGVtcGxhdGVJZCB7XHJcbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcclxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZSBpbXBsZW1lbnRzIFRlbXBsYXRlSWQge1xyXG4gIHN0YXRpYyByZWFkb25seSBOb3RTYXZlZCA9IFwiTm90U2F2ZWRcIjtcclxuXHJcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZyA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfbmFtZSA9IFwidGVtcGxhdGUgbmFtZVwiO1xyXG4gIHByaXZhdGUgX2ZpZWxkczogVGVtcGxhdGVGaWVsZFtdID0gW107XHJcblxyXG4gIHByaXZhdGUgX2FkZEZpZWxkU3ViamVjdDogU3ViamVjdDxUZW1wbGF0ZUZpZWxkPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBfcmVtb3ZlRmllbGRTdWJqZWN0OiBTdWJqZWN0PFRlbXBsYXRlRmllbGQ+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIF9tb2RpZmllZFN1YmplY3Q6IFN1YmplY3Q8VGVtcGxhdGU+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJpdmF0ZSBfZmllbGRDaGFuZ2VkU3Vic2NyaXB0aW9ucyA9IG5ldyBNYXA8VGVtcGxhdGVGaWVsZCwgU3Vic2NyaXB0aW9uPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2lkID0gVGVtcGxhdGUuTm90U2F2ZWQ7XHJcbiAgfVxyXG5cclxuICByZWFkb25seSBhZGRlZEZpZWxkOiBPYnNlcnZhYmxlPFRlbXBsYXRlRmllbGQ+ID0gdGhpcy5fYWRkRmllbGRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHJlYWRvbmx5IHJlbW92ZWRGaWVsZDogT2JzZXJ2YWJsZTxUZW1wbGF0ZUZpZWxkPiA9IHRoaXMuX3JlbW92ZUZpZWxkU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICByZWFkb25seSBtb2RpZmllZDogT2JzZXJ2YWJsZTxUZW1wbGF0ZT4gPSB0aGlzLl9tb2RpZmllZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGdldCBpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9pZDtcclxuICB9XHJcblxyXG4gIHNldCBpZChpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9pZCA9IGlkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLm5vdGlmeU1vZGlmaWVkKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZmllbGRzKCk6IFRlbXBsYXRlRmllbGRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmllbGRzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU3RvcmVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lkICE9PSBUZW1wbGF0ZS5Ob3RTYXZlZDtcclxuICB9XHJcblxyXG4gIGdldCBpc0VtcHR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkcy5sZW5ndGggPT09IDA7XHJcbiAgfVxyXG5cclxuICBhZGRGaWVsZChmaWVsZDogVGVtcGxhdGVGaWVsZCkge1xyXG4gICAgdGhpcy5fZmllbGRDaGFuZ2VkU3Vic2NyaXB0aW9ucy5zZXQoXHJcbiAgICAgIGZpZWxkLFxyXG4gICAgICBmaWVsZC5jaGFuZ2VkLnN1YnNjcmliZShwID0+IHRoaXMubm90aWZ5TW9kaWZpZWQoKSlcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5fZmllbGRzLnB1c2goZmllbGQpO1xyXG4gICAgdGhpcy5fYWRkRmllbGRTdWJqZWN0Lm5leHQoZmllbGQpO1xyXG4gICAgdGhpcy5ub3RpZnlNb2RpZmllZCgpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRmllbGQoZmllbGQ6IFRlbXBsYXRlRmllbGQpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fZmllbGRzLmluZGV4T2YoZmllbGQpO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgdGhpcy5fZmllbGRDaGFuZ2VkU3Vic2NyaXB0aW9ucy5nZXQoZmllbGQpLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMuX2ZpZWxkQ2hhbmdlZFN1YnNjcmlwdGlvbnMuZGVsZXRlKGZpZWxkKTtcclxuICAgICAgdGhpcy5fZmllbGRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcmVtb3ZlRmllbGRTdWJqZWN0Lm5leHQoZmllbGQpO1xyXG4gICAgdGhpcy5ub3RpZnlNb2RpZmllZCgpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRmllbGRCeU5hbWUoZmllbGROYW1lOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5nZXRGaWVsZEJ5TmFtZShmaWVsZE5hbWUpO1xyXG4gICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlRmllbGQoZmllbGQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGRCeU5hbWUoZmllbGROYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmICghZmllbGROYW1lKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBmaWVsZE5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLl9maWVsZHNbaV0ubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpZWxkc1tpXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRmllbGQoYmFzZU5hbWU6IHN0cmluZyk6IFRlbXBsYXRlRmllbGQge1xyXG4gICAgY29uc3QgZmllbGQgPSBuZXcgVGVtcGxhdGVGaWVsZCh0aGlzKTtcclxuICAgIGZpZWxkLm5hbWUgPSB0aGlzLmdldE5leHRGaWVsZE5hbWUoYmFzZU5hbWUpO1xyXG4gICAgZmllbGQuc2l6ZSA9IG5ldyBTaXplKDYwLCAyMCk7XHJcbiAgICBmaWVsZC5wYWdlTnVtYmVyID0gMTtcclxuICAgIGZpZWxkLnBvc2l0aW9uID0gbmV3IFBvaW50KDEwLCAxMCk7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXROZXh0RmllbGROYW1lKGJhc2VOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDAwOyBpKyspIHtcclxuICAgICAgY29uc3QgbmFtZSA9IGJhc2VOYW1lICsgaS50b1N0cmluZygpO1xyXG4gICAgICBpZiAoIXRoaXMuZ2V0RmllbGRCeU5hbWUobmFtZSkpIHtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBub3RpZnlNb2RpZmllZCgpIHtcclxuICAgIHRoaXMuX21vZGlmaWVkU3ViamVjdC5uZXh0KHRoaXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlRmllbGRUeXBlcyB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IEZJWEVEID0gXCJGSVhFRFwiO1xyXG4gIHN0YXRpYyByZWFkb25seSBUQUJMRSA9IFwiVEFCTEVcIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlRmllbGQge1xyXG4gIHByaXZhdGUgX2ZpZWxkVHlwZTogc3RyaW5nID0gVGVtcGxhdGVGaWVsZFR5cGVzLkZJWEVEO1xyXG5cclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfcGFnZU51bWJlcjogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBQb2ludDtcclxuICBwcml2YXRlIF9zaXplOiBTaXplO1xyXG4gIHByaXZhdGUgX2NvbHVtbnM6IFRlbXBsYXRlRmllbGRUYWJsZVNlcGFyYXRvcltdO1xyXG4gIHByaXZhdGUgX2NoYW5nZWRTdWJqZWN0ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90ZW1wbGF0ZTogVGVtcGxhdGUpIHtcclxuICAgIHRoaXMuX2NvbHVtbnMgPSBbXTtcclxuICB9XHJcblxyXG4gIHJlYWRvbmx5IGNoYW5nZWQgPSB0aGlzLl9jaGFuZ2VkU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgZ2V0IGNvbHVtbnMoKTogVGVtcGxhdGVGaWVsZFRhYmxlU2VwYXJhdG9yW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XHJcbiAgfVxyXG5cclxuICBhZGRDb2x1bW4oY29sdW1uTmFtZTogc3RyaW5nLCBjb2x1bW5WYWx1ZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBjb2x1bW4gPSBuZXcgVGVtcGxhdGVGaWVsZFRhYmxlU2VwYXJhdG9yKFxyXG4gICAgICBjb2x1bW5OYW1lID09IG51bGwgPyB0aGlzLmdldE5leHRDb2x1bW5OYW1lKCkgOiBjb2x1bW5OYW1lLFxyXG4gICAgICBjb2x1bW5WYWx1ZSxcclxuICAgICAgdGhpcy5fY2hhbmdlZFN1YmplY3QpO1xyXG5cclxuICAgIHRoaXMuX2NvbHVtbnMucHVzaChjb2x1bW4pO1xyXG4gICAgdGhpcy5fY2hhbmdlZFN1YmplY3QubmV4dChcImNvbHVtbnNcIik7XHJcbiAgfVxyXG5cclxuICByZW1vdmVDb2x1bW4oY29sdW1uOiBUZW1wbGF0ZUZpZWxkVGFibGVTZXBhcmF0b3IpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fY29sdW1ucy5pbmRleE9mKGNvbHVtbik7XHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG5cclxuICAgICAgdGhpcy5fY29sdW1ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB0aGlzLl9jaGFuZ2VkU3ViamVjdC5uZXh0KFwiY29sdW1uc1wiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENvbHVtbkJ5TmFtZShjb2x1bW5OYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmICghY29sdW1uTmFtZSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuYW1lID0gY29sdW1uTmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLl9jb2x1bW5zW2ldLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zW2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgZmllbGRUeXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmllbGRUeXBlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGZpZWxkVHlwZShmaWVsZFR5cGU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fZmllbGRUeXBlID0gZmllbGRUeXBlO1xyXG4gICAgdGhpcy5fY2hhbmdlZFN1YmplY3QubmV4dChcImZpZWxkVHlwZVwiKTtcclxuICB9XHJcblxyXG4gIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGU7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX2NoYW5nZWRTdWJqZWN0Lm5leHQoXCJuYW1lXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhZ2VOdW1iZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnZU51bWJlcjtcclxuICB9XHJcblxyXG4gIHNldCBwYWdlTnVtYmVyKHBhZ2VOdW1iZXI6IG51bWJlcikge1xyXG4gICAgdGhpcy5fcGFnZU51bWJlciA9IHBhZ2VOdW1iZXI7XHJcbiAgICB0aGlzLl9jaGFuZ2VkU3ViamVjdC5uZXh0KFwicGFnZU51bWJlclwiKTtcclxuICB9XHJcblxyXG4gIGdldCBwb3NpdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIHNldCBwb3NpdGlvbihwb3NpdGlvbjogUG9pbnQpIHtcclxuICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICB0aGlzLl9jaGFuZ2VkU3ViamVjdC5uZXh0KFwicG9zaXRpb25cIik7XHJcbiAgfVxyXG5cclxuICBnZXQgc2l6ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zaXplO1xyXG4gIH1cclxuXHJcbiAgc2V0IHNpemUoc2l6ZTogU2l6ZSkge1xyXG4gICAgdGhpcy5fc2l6ZSA9IHNpemU7XHJcbiAgICB0aGlzLl9jaGFuZ2VkU3ViamVjdC5uZXh0KFwic2l6ZVwiKTtcclxuICB9XHJcblxyXG4gIHRvSlNPTigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGZpZWxkVHlwZTogdGhpcy5maWVsZFR5cGUsXHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgcGFnZU51bWJlcjogdGhpcy5wYWdlTnVtYmVyLFxyXG4gICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXHJcbiAgICAgIHk6IHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgd2lkdGg6IHRoaXMuc2l6ZS53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLnNpemUuaGVpZ2h0LFxyXG4gICAgICBjb2x1bW5zOiB0aGlzLl9jb2x1bW5zXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXROZXh0Q29sdW1uTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDAwOyBpKyspIHtcclxuICAgICAgY29uc3QgbmFtZSA9IFwiVEM6XCIgKyBpLnRvU3RyaW5nKCk7XHJcbiAgICAgIGlmICghdGhpcy5nZXRDb2x1bW5CeU5hbWUobmFtZSkpIHtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlRmllbGRUYWJsZVNlcGFyYXRvciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmFtZTogc3RyaW5nLCBwcml2YXRlIF92YWx1ZTogbnVtYmVyLCBwcml2YXRlIF9jaGFuZ2VkU3ViamVjdDogU3ViamVjdDxzdHJpbmc+KSB7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLl9jaGFuZ2VkU3ViamVjdC5uZXh0KFwidGFibGUtc2VwYXJhdG9yXCIpO1xyXG4gIH1cclxuXHJcbiAgdG9KU09OKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcclxuICAgIH07XHJcbiAgfVxyXG59Il19