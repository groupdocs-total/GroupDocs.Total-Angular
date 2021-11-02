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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLW1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvYXBwLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFjLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFJekQsTUFBTSxPQUFPLFVBQVU7Ozs7SUFDckIsWUFBWSxHQUFRO1FBYVgsU0FBSSxHQUFvQixFQUFFLENBQUM7UUFabEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUM3QixHQUFHLEdBQWEsRUFBRTtZQUN4QixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDVixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDdEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDckI7YUFDRjtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztDQUdGOzs7SUFEQywwQkFBb0M7Ozs7O0FBR3RDLE1BQU0sT0FBTyxjQUFjO0lBQTNCO1FBQ1UsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUtuQixZQUFPLEdBQUcsSUFBSSxDQUFDO0lBc0RqQixDQUFDOzs7O0lBcERDLElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFD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VSxlQUFnQztRQUEvRSxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUNuRyxDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELE1BQU07UUFDSixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUM7SUFDSixDQUFDO0NBQ0Y7Ozs7OztJQXRCYSw0Q0FBcUI7Ozs7O0lBQUUsNkNBQXNCOzs7OztJQUFFLHNEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJldmVudHNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgX192YWx1ZXMgfSBmcm9tIFwidHNsaWJcIjtcblxuZXhwb3J0IGNsYXNzIFRhYmxlVmFsdWUge1xuICBjb25zdHJ1Y3RvcihvYmo6IGFueSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCByb3c6IHN0cmluZ1tdID0gW107XG4gICAgICBpZiAob2JqW2ldKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgb2JqW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgcm93LnB1c2gob2JqW2ldW2pdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnJvd3MucHVzaChyb3cpO1xuICAgIH1cbiAgfVxuXG4gIHJlYWRvbmx5IHJvd3M6IEFycmF5PHN0cmluZ1tdPiA9IFtdO1xufVxuXG5leHBvcnQgY2xhc3MgT3BlcmF0aW9uU3RhdGU8VD4ge1xuICBwcml2YXRlIF9zdGF0ZSA9IDA7XG4gIHByaXZhdGUgX3Byb21wdDogc3RyaW5nO1xuICBwcml2YXRlIF9lcnJvcjogc3RyaW5nO1xuICBwcml2YXRlIF9yZXN1bHQ6IFQ7XG5cbiAgZW5hYmxlZCA9IHRydWU7XG5cbiAgZ2V0IGlzUmVhZHlUb1J1bigpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUgPT09IDA7XG4gIH1cblxuICBnZXQgaXNGYWlsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlID09PSAtMTtcbiAgfVxuXG4gIGdldCBpc0NvbXBsZXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUgPT09IDE7XG4gIH1cblxuICBnZXQgaXNQcm9jZXNzaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZSA9PSBudWxsO1xuICB9XG5cbiAgZ2V0IHByb21wdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvbXB0O1xuICB9XG5cbiAgc2V0IHByb21wdChwcm9tcHQ6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb21wdCA9IHByb21wdDtcbiAgICB0aGlzLl9lcnJvciA9IG51bGw7XG4gICAgdGhpcy5fcmVzdWx0ID0gbnVsbDtcbiAgICB0aGlzLl9zdGF0ZSA9IDA7XG4gIH1cblxuICBnZXQgZXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yO1xuICB9XG5cbiAgc2V0IGVycm9yKGVycm9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcm9tcHQgPSBudWxsO1xuICAgIHRoaXMuX2Vycm9yID0gZXJyb3I7XG4gICAgdGhpcy5fcmVzdWx0ID0gbnVsbDtcbiAgICB0aGlzLl9zdGF0ZSA9IC0xO1xuICB9XG5cbiAgZ2V0IHJlc3VsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0O1xuICB9XG5cbiAgc2V0IHJlc3VsdChyZXN1bHQ6IFQpIHtcbiAgICB0aGlzLl9wcm9tcHQgPSBudWxsO1xuICAgIHRoaXMuX2Vycm9yID0gbnVsbDtcbiAgICB0aGlzLl9yZXN1bHQgPSByZXN1bHQ7XG4gICAgdGhpcy5fc3RhdGUgPSAxO1xuICB9XG5cbiAgZXhlY3V0ZSgpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50RGVzY3JpcHRpb25SZXNwb25zZSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgcmVzdWx0OiBEb2N1bWVudERlc2NyaXB0aW9uO1xufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VCeVRlbXBsYXRlUmVzcG9uc2Uge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGRhdGE6IFBhcnNlUmVzdWx0W107XG59XG5cbmV4cG9ydCBjbGFzcyBTb3VyY2VGaWxlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGd1aWQ6IHN0cmluZywgcHVibGljIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnREZXNjcmlwdGlvbiBleHRlbmRzIFNvdXJjZUZpbGUge1xuICBwYWdlczogRG9jdW1lbnRQYWdlRGVzY3JpcHRpb25bXTtcbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UGFnZURlc2NyaXB0aW9uIHtcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBkYXRhOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlRGVzY3JpcHRpb24ge1xuICBwYWdlczogUGFnZU1vZGVsW107XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZVJlc3VsdCB7XG4gIG5hbWU6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFBvaW50IHtcbiAgcmVhZG9ubHkgeDogbnVtYmVyO1xuICByZWFkb25seSB5OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNpemUge1xuICByZWFkb25seSB3aWR0aDogbnVtYmVyO1xuICByZWFkb25seSBoZWlnaHQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlSWQge1xuICByZWFkb25seSBpZDogc3RyaW5nO1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZSBpbXBsZW1lbnRzIFRlbXBsYXRlSWQge1xuICBzdGF0aWMgcmVhZG9ubHkgTm90U2F2ZWQgPSBcIk5vdFNhdmVkXCI7XG5cbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgX25hbWUgPSBcInRlbXBsYXRlIG5hbWVcIjtcbiAgcHJpdmF0ZSBfZmllbGRzOiBUZW1wbGF0ZUZpZWxkW10gPSBbXTtcblxuICBwcml2YXRlIF9hZGRGaWVsZFN1YmplY3Q6IFN1YmplY3Q8VGVtcGxhdGVGaWVsZD4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIF9yZW1vdmVGaWVsZFN1YmplY3Q6IFN1YmplY3Q8VGVtcGxhdGVGaWVsZD4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIF9tb2RpZmllZFN1YmplY3Q6IFN1YmplY3Q8VGVtcGxhdGU+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIF9maWVsZENoYW5nZWRTdWJzY3JpcHRpb25zID0gbmV3IE1hcDxUZW1wbGF0ZUZpZWxkLCBTdWJzY3JpcHRpb24+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5faWQgPSBUZW1wbGF0ZS5Ob3RTYXZlZDtcbiAgfVxuXG4gIHJlYWRvbmx5IGFkZGVkRmllbGQ6IE9ic2VydmFibGU8VGVtcGxhdGVGaWVsZD4gPSB0aGlzLl9hZGRGaWVsZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIHJlYWRvbmx5IHJlbW92ZWRGaWVsZDogT2JzZXJ2YWJsZTxUZW1wbGF0ZUZpZWxkPiA9IHRoaXMuX3JlbW92ZUZpZWxkU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgcmVhZG9ubHkgbW9kaWZpZWQ6IE9ic2VydmFibGU8VGVtcGxhdGU+ID0gdGhpcy5fbW9kaWZpZWRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICBzZXQgaWQoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gaWQ7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIHRoaXMubm90aWZ5TW9kaWZpZWQoKTtcbiAgfVxuXG4gIGdldCBmaWVsZHMoKTogVGVtcGxhdGVGaWVsZFtdIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRzO1xuICB9XG5cbiAgZ2V0IGlzU3RvcmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9pZCAhPT0gVGVtcGxhdGUuTm90U2F2ZWQ7XG4gIH1cblxuICBnZXQgaXNFbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRzLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIGFkZEZpZWxkKGZpZWxkOiBUZW1wbGF0ZUZpZWxkKSB7XG4gICAgdGhpcy5fZmllbGRDaGFuZ2VkU3Vic2NyaXB0aW9ucy5zZXQoXG4gICAgICBmaWVsZCxcbiAgICAgIGZpZWxkLmNoYW5nZWQuc3Vic2NyaWJlKHAgPT4gdGhpcy5ub3RpZnlNb2RpZmllZCgpKVxuICAgICk7XG5cbiAgICB0aGlzLl9maWVsZHMucHVzaChmaWVsZCk7XG4gICAgdGhpcy5fYWRkRmllbGRTdWJqZWN0Lm5leHQoZmllbGQpO1xuICAgIHRoaXMubm90aWZ5TW9kaWZpZWQoKTtcbiAgfVxuXG4gIHJlbW92ZUZpZWxkKGZpZWxkOiBUZW1wbGF0ZUZpZWxkKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9maWVsZHMuaW5kZXhPZihmaWVsZCk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuX2ZpZWxkQ2hhbmdlZFN1YnNjcmlwdGlvbnMuZ2V0KGZpZWxkKS51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fZmllbGRDaGFuZ2VkU3Vic2NyaXB0aW9ucy5kZWxldGUoZmllbGQpO1xuICAgICAgdGhpcy5fZmllbGRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVtb3ZlRmllbGRTdWJqZWN0Lm5leHQoZmllbGQpO1xuICAgIHRoaXMubm90aWZ5TW9kaWZpZWQoKTtcbiAgfVxuXG4gIHJlbW92ZUZpZWxkQnlOYW1lKGZpZWxkTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZmllbGQgPSB0aGlzLmdldEZpZWxkQnlOYW1lKGZpZWxkTmFtZSk7XG4gICAgaWYgKGZpZWxkKSB7XG4gICAgICB0aGlzLnJlbW92ZUZpZWxkKGZpZWxkKTtcbiAgICB9XG4gIH1cblxuICBnZXRGaWVsZEJ5TmFtZShmaWVsZE5hbWU6IHN0cmluZykge1xuICAgIGlmICghZmllbGROYW1lKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lID0gZmllbGROYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9maWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9maWVsZHNbaV0ubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWVsZHNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjcmVhdGVGaWVsZChiYXNlTmFtZTogc3RyaW5nKTogVGVtcGxhdGVGaWVsZCB7XG4gICAgY29uc3QgZmllbGQgPSBuZXcgVGVtcGxhdGVGaWVsZCh0aGlzKTtcbiAgICBmaWVsZC5uYW1lID0gdGhpcy5nZXROZXh0RmllbGROYW1lKGJhc2VOYW1lKTtcbiAgICBmaWVsZC5zaXplID0gbmV3IFNpemUoNjAsIDIwKTtcbiAgICBmaWVsZC5wYWdlTnVtYmVyID0gMTtcbiAgICBmaWVsZC5wb3NpdGlvbiA9IG5ldyBQb2ludCgxMCwgMTApO1xuXG4gICAgcmV0dXJuIGZpZWxkO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXh0RmllbGROYW1lKGJhc2VOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwMDsgaSsrKSB7XG4gICAgICBjb25zdCBuYW1lID0gYmFzZU5hbWUgKyBpLnRvU3RyaW5nKCk7XG4gICAgICBpZiAoIXRoaXMuZ2V0RmllbGRCeU5hbWUobmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeU1vZGlmaWVkKCkge1xuICAgIHRoaXMuX21vZGlmaWVkU3ViamVjdC5uZXh0KHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUZpZWxkVHlwZXMge1xuICBzdGF0aWMgcmVhZG9ubHkgRklYRUQgPSBcIkZJWEVEXCI7XG4gIHN0YXRpYyByZWFkb25seSBUQUJMRSA9IFwiVEFCTEVcIjtcbn1cblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlRmllbGQge1xuICBwcml2YXRlIF9maWVsZFR5cGU6IHN0cmluZyA9IFRlbXBsYXRlRmllbGRUeXBlcy5GSVhFRDtcblxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3BhZ2VOdW1iZXI6IG51bWJlcjtcbiAgcHJpdmF0ZSBfcG9zaXRpb246IFBvaW50O1xuICBwcml2YXRlIF9zaXplOiBTaXplO1xuICBwcml2YXRlIF9jb2x1bW5zOiBUZW1wbGF0ZUZpZWxkVGFibGVTZXBhcmF0b3JbXTtcbiAgcHJpdmF0ZSBfY2hhbmdlZFN1YmplY3QgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGVtcGxhdGU6IFRlbXBsYXRlKSB7XG4gICAgdGhpcy5fY29sdW1ucyA9IFtdO1xuICB9XG5cbiAgcmVhZG9ubHkgY2hhbmdlZCA9IHRoaXMuX2NoYW5nZWRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGdldCBjb2x1bW5zKCk6IFRlbXBsYXRlRmllbGRUYWJsZVNlcGFyYXRvcltdIHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgfVxuXG4gIGFkZENvbHVtbihjb2x1bW5OYW1lOiBzdHJpbmcsIGNvbHVtblZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCBjb2x1bW4gPSBuZXcgVGVtcGxhdGVGaWVsZFRhYmxlU2VwYXJhdG9yKFxuICAgICAgY29sdW1uTmFtZSA9PSBudWxsID8gdGhpcy5nZXROZXh0Q29sdW1uTmFtZSgpIDogY29sdW1uTmFtZSxcbiAgICAgIGNvbHVtblZhbHVlLFxuICAgICAgdGhpcy5fY2hhbmdlZFN1YmplY3QpO1xuXG4gICAgdGhpcy5fY29sdW1ucy5wdXNoKGNvbHVtbik7XG4gICAgdGhpcy5fY2hhbmdlZFN1YmplY3QubmV4dChcImNvbHVtbnNcIik7XG4gIH1cblxuICByZW1vdmVDb2x1bW4oY29sdW1uOiBUZW1wbGF0ZUZpZWxkVGFibGVTZXBhcmF0b3IpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX2NvbHVtbnMuaW5kZXhPZihjb2x1bW4pO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG5cbiAgICAgIHRoaXMuX2NvbHVtbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoaXMuX2NoYW5nZWRTdWJqZWN0Lm5leHQoXCJjb2x1bW5zXCIpO1xuICAgIH1cbiAgfVxuXG4gIGdldENvbHVtbkJ5TmFtZShjb2x1bW5OYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIWNvbHVtbk5hbWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWUgPSBjb2x1bW5OYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5fY29sdW1uc1tpXS5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXQgZmllbGRUeXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkVHlwZTtcbiAgfVxuXG4gIHNldCBmaWVsZFR5cGUoZmllbGRUeXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9maWVsZFR5cGUgPSBmaWVsZFR5cGU7XG4gICAgdGhpcy5fY2hhbmdlZFN1YmplY3QubmV4dChcImZpZWxkVHlwZVwiKTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9jaGFuZ2VkU3ViamVjdC5uZXh0KFwibmFtZVwiKTtcbiAgfVxuXG4gIGdldCBwYWdlTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLl9wYWdlTnVtYmVyO1xuICB9XG5cbiAgc2V0IHBhZ2VOdW1iZXIocGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZU51bWJlciA9IHBhZ2VOdW1iZXI7XG4gICAgdGhpcy5fY2hhbmdlZFN1YmplY3QubmV4dChcInBhZ2VOdW1iZXJcIik7XG4gIH1cblxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgc2V0IHBvc2l0aW9uKHBvc2l0aW9uOiBQb2ludCkge1xuICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5fY2hhbmdlZFN1YmplY3QubmV4dChcInBvc2l0aW9uXCIpO1xuICB9XG5cbiAgZ2V0IHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBzZXQgc2l6ZShzaXplOiBTaXplKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHNpemU7XG4gICAgdGhpcy5fY2hhbmdlZFN1YmplY3QubmV4dChcInNpemVcIik7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkVHlwZTogdGhpcy5maWVsZFR5cGUsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBwYWdlTnVtYmVyOiB0aGlzLnBhZ2VOdW1iZXIsXG4gICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB5OiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB3aWR0aDogdGhpcy5zaXplLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLnNpemUuaGVpZ2h0LFxuICAgICAgY29sdW1uczogdGhpcy5fY29sdW1uc1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldE5leHRDb2x1bW5OYW1lKCk6IHN0cmluZyB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDAwOyBpKyspIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBcIlRDOlwiICsgaS50b1N0cmluZygpO1xuICAgICAgaWYgKCF0aGlzLmdldENvbHVtbkJ5TmFtZShuYW1lKSkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVGaWVsZFRhYmxlU2VwYXJhdG9yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmFtZTogc3RyaW5nLCBwcml2YXRlIF92YWx1ZTogbnVtYmVyLCBwcml2YXRlIF9jaGFuZ2VkU3ViamVjdDogU3ViamVjdDxzdHJpbmc+KSB7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fY2hhbmdlZFN1YmplY3QubmV4dChcInRhYmxlLXNlcGFyYXRvclwiKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgfTtcbiAgfVxufSJdfQ==