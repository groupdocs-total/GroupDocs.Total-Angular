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
            let row = [];
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
        return this._state == 0;
    }
    /**
     * @return {?}
     */
    get isFailed() {
        return this._state == -1;
    }
    /**
     * @return {?}
     */
    get isCompleted() {
        return this._state == 1;
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
        return this._id != Template.NotSaved;
    }
    /**
     * @return {?}
     */
    get isEmpty() {
        return this._fields.length == 0;
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
        var index = this._fields.indexOf(field);
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
        let field = this.getFieldByName(fieldName);
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
        let name = fieldName.toLocaleLowerCase();
        for (var i = 0; i < this._fields.length; i++) {
            if (this._fields[i].name.toLocaleLowerCase() == name) {
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
        let field = new TemplateField(this);
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
        for (var i = 0; i < 1000; i++) {
            /** @type {?} */
            let name = baseName + i.toString();
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
        var index = this._columns.indexOf(column);
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
        let name = columnName.toLocaleLowerCase();
        for (var i = 0; i < this._columns.length; i++) {
            if (this._columns[i].name.toLocaleLowerCase() == name) {
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
        for (var i = 0; i < 1000; i++) {
            /** @type {?} */
            let name = "TC:" + i.toString();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLW1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvYXBwLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFjLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFJekQsTUFBTSxPQUFPLFVBQVU7Ozs7SUFDckIsWUFBWSxHQUFRO1FBYVgsU0FBSSxHQUFvQixFQUFFLENBQUM7UUFabEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUMvQixHQUFHLEdBQWEsRUFBRTtZQUN0QixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDVixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDdEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDckI7YUFDRjtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztDQUdGOzs7SUFEQywwQkFBb0M7Ozs7O0FBR3RDLE1BQU0sT0FBTyxjQUFjO0lBQTNCO1FBQ1UsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUszQixZQUFPLEdBQVksSUFBSSxDQUFDO0lBc0QxQixDQUFDOzs7O0lBcERDLElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFD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QVUsZUFBZ0M7UUFBL0UsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDbkcsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDO0lBQ0osQ0FBQztDQUNGOzs7Ozs7SUF0QmEsNENBQXFCOzs7OztJQUFFLDZDQUFzQjs7Ozs7SUFBRSxzREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiZXZlbnRzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IF9fdmFsdWVzIH0gZnJvbSBcInRzbGliXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVWYWx1ZSB7XHJcbiAgY29uc3RydWN0b3Iob2JqOiBhbnkpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCByb3c6IHN0cmluZ1tdID0gW107XHJcbiAgICAgIGlmIChvYmpbaV0pIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG9ialtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgcm93LnB1c2gob2JqW2ldW2pdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucm93cy5wdXNoKHJvdyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWFkb25seSByb3dzOiBBcnJheTxzdHJpbmdbXT4gPSBbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9wZXJhdGlvblN0YXRlPFQ+IHtcclxuICBwcml2YXRlIF9zdGF0ZTogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIF9wcm9tcHQ6IHN0cmluZztcclxuICBwcml2YXRlIF9lcnJvcjogc3RyaW5nO1xyXG4gIHByaXZhdGUgX3Jlc3VsdDogVDtcclxuXHJcbiAgZW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGdldCBpc1JlYWR5VG9SdW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUgPT0gMDtcclxuICB9XHJcblxyXG4gIGdldCBpc0ZhaWxlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zdGF0ZSA9PSAtMTtcclxuICB9XHJcblxyXG4gIGdldCBpc0NvbXBsZXRlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zdGF0ZSA9PSAxO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzUHJvY2Vzc2luZygpIHtcclxuICAgIHJldHVybiB0aGlzLl9zdGF0ZSA9PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByb21wdCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcm9tcHQ7XHJcbiAgfVxyXG5cclxuICBzZXQgcHJvbXB0KHByb21wdDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9wcm9tcHQgPSBwcm9tcHQ7XHJcbiAgICB0aGlzLl9lcnJvciA9IG51bGw7XHJcbiAgICB0aGlzLl9yZXN1bHQgPSBudWxsO1xyXG4gICAgdGhpcy5fc3RhdGUgPSAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGVycm9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yO1xyXG4gIH1cclxuXHJcbiAgc2V0IGVycm9yKGVycm9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3Byb21wdCA9IG51bGw7XHJcbiAgICB0aGlzLl9lcnJvciA9IGVycm9yO1xyXG4gICAgdGhpcy5fcmVzdWx0ID0gbnVsbDtcclxuICAgIHRoaXMuX3N0YXRlID0gLTE7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVzdWx0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdDtcclxuICB9XHJcblxyXG4gIHNldCByZXN1bHQocmVzdWx0OiBUKSB7XHJcbiAgICB0aGlzLl9wcm9tcHQgPSBudWxsO1xyXG4gICAgdGhpcy5fZXJyb3IgPSBudWxsO1xyXG4gICAgdGhpcy5fcmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgdGhpcy5fc3RhdGUgPSAxO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZSgpIHtcclxuICAgIHRoaXMuX3N0YXRlID0gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudERlc2NyaXB0aW9uUmVzcG9uc2Uge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICByZXN1bHQ6IERvY3VtZW50RGVzY3JpcHRpb247XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJzZUJ5VGVtcGxhdGVSZXNwb25zZSB7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIGRhdGE6IFBhcnNlUmVzdWx0W107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VGaWxlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZ3VpZDogc3RyaW5nLCBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERvY3VtZW50RGVzY3JpcHRpb24gZXh0ZW5kcyBTb3VyY2VGaWxlIHtcclxuICBwYWdlczogRG9jdW1lbnRQYWdlRGVzY3JpcHRpb25bXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERvY3VtZW50UGFnZURlc2NyaXB0aW9uIHtcclxuICBudW1iZXI6IG51bWJlcjtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIGRhdGE6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVEZXNjcmlwdGlvbiB7XHJcbiAgcGFnZXM6IFBhZ2VNb2RlbFtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFyc2VSZXN1bHQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnQge1xyXG4gIHJlYWRvbmx5IHg6IG51bWJlcjtcclxuICByZWFkb25seSB5OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaXplIHtcclxuICByZWFkb25seSB3aWR0aDogbnVtYmVyO1xyXG4gIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlSWQge1xyXG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XHJcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUgaW1wbGVtZW50cyBUZW1wbGF0ZUlkIHtcclxuICBzdGF0aWMgcmVhZG9ubHkgTm90U2F2ZWQgPSBcIk5vdFNhdmVkXCI7XHJcblxyXG4gIHByaXZhdGUgX2lkOiBzdHJpbmcgPSBudWxsO1xyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZyA9IFwidGVtcGxhdGUgbmFtZVwiO1xyXG4gIHByaXZhdGUgX2ZpZWxkczogVGVtcGxhdGVGaWVsZFtdID0gW107XHJcblxyXG4gIHByaXZhdGUgX2FkZEZpZWxkU3ViamVjdDogU3ViamVjdDxUZW1wbGF0ZUZpZWxkPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBfcmVtb3ZlRmllbGRTdWJqZWN0OiBTdWJqZWN0PFRlbXBsYXRlRmllbGQ+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIF9tb2RpZmllZFN1YmplY3Q6IFN1YmplY3Q8VGVtcGxhdGU+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJpdmF0ZSBfZmllbGRDaGFuZ2VkU3Vic2NyaXB0aW9ucyA9IG5ldyBNYXA8VGVtcGxhdGVGaWVsZCwgU3Vic2NyaXB0aW9uPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2lkID0gVGVtcGxhdGUuTm90U2F2ZWQ7XHJcbiAgfVxyXG5cclxuICByZWFkb25seSBhZGRlZEZpZWxkOiBPYnNlcnZhYmxlPFRlbXBsYXRlRmllbGQ+ID0gdGhpcy5fYWRkRmllbGRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHJlYWRvbmx5IHJlbW92ZWRGaWVsZDogT2JzZXJ2YWJsZTxUZW1wbGF0ZUZpZWxkPiA9IHRoaXMuX3JlbW92ZUZpZWxkU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICByZWFkb25seSBtb2RpZmllZDogT2JzZXJ2YWJsZTxUZW1wbGF0ZT4gPSB0aGlzLl9tb2RpZmllZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGdldCBpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9pZDtcclxuICB9XHJcblxyXG4gIHNldCBpZChpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9pZCA9IGlkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLm5vdGlmeU1vZGlmaWVkKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZmllbGRzKCk6IFRlbXBsYXRlRmllbGRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmllbGRzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU3RvcmVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lkICE9IFRlbXBsYXRlLk5vdFNhdmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzRW1wdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmllbGRzLmxlbmd0aCA9PSAwO1xyXG4gIH1cclxuXHJcbiAgYWRkRmllbGQoZmllbGQ6IFRlbXBsYXRlRmllbGQpIHtcclxuICAgIHRoaXMuX2ZpZWxkQ2hhbmdlZFN1YnNjcmlwdGlvbnMuc2V0KFxyXG4gICAgICBmaWVsZCxcclxuICAgICAgZmllbGQuY2hhbmdlZC5zdWJzY3JpYmUocCA9PiB0aGlzLm5vdGlmeU1vZGlmaWVkKCkpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX2ZpZWxkcy5wdXNoKGZpZWxkKTtcclxuICAgIHRoaXMuX2FkZEZpZWxkU3ViamVjdC5uZXh0KGZpZWxkKTtcclxuICAgIHRoaXMubm90aWZ5TW9kaWZpZWQoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUZpZWxkKGZpZWxkOiBUZW1wbGF0ZUZpZWxkKSB7XHJcbiAgICB2YXIgaW5kZXggPSB0aGlzLl9maWVsZHMuaW5kZXhPZihmaWVsZCk7XHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICB0aGlzLl9maWVsZENoYW5nZWRTdWJzY3JpcHRpb25zLmdldChmaWVsZCkudW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5fZmllbGRDaGFuZ2VkU3Vic2NyaXB0aW9ucy5kZWxldGUoZmllbGQpO1xyXG4gICAgICB0aGlzLl9maWVsZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9yZW1vdmVGaWVsZFN1YmplY3QubmV4dChmaWVsZCk7XHJcbiAgICB0aGlzLm5vdGlmeU1vZGlmaWVkKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVGaWVsZEJ5TmFtZShmaWVsZE5hbWU6IHN0cmluZykge1xyXG4gICAgbGV0IGZpZWxkID0gdGhpcy5nZXRGaWVsZEJ5TmFtZShmaWVsZE5hbWUpO1xyXG4gICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlRmllbGQoZmllbGQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGRCeU5hbWUoZmllbGROYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmICghZmllbGROYW1lKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBuYW1lID0gZmllbGROYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2ZpZWxkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5fZmllbGRzW2ldLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PSBuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpZWxkc1tpXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRmllbGQoYmFzZU5hbWU6IHN0cmluZyk6IFRlbXBsYXRlRmllbGQge1xyXG4gICAgbGV0IGZpZWxkID0gbmV3IFRlbXBsYXRlRmllbGQodGhpcyk7XHJcbiAgICBmaWVsZC5uYW1lID0gdGhpcy5nZXROZXh0RmllbGROYW1lKGJhc2VOYW1lKTtcclxuICAgIGZpZWxkLnNpemUgPSBuZXcgU2l6ZSg2MCwgMjApO1xyXG4gICAgZmllbGQucGFnZU51bWJlciA9IDE7XHJcbiAgICBmaWVsZC5wb3NpdGlvbiA9IG5ldyBQb2ludCgxMCwgMTApO1xyXG5cclxuICAgIHJldHVybiBmaWVsZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TmV4dEZpZWxkTmFtZShiYXNlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDsgaSsrKSB7XHJcbiAgICAgIGxldCBuYW1lID0gYmFzZU5hbWUgKyBpLnRvU3RyaW5nKCk7XHJcbiAgICAgIGlmICghdGhpcy5nZXRGaWVsZEJ5TmFtZShuYW1lKSkge1xyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5vdGlmeU1vZGlmaWVkKCkge1xyXG4gICAgdGhpcy5fbW9kaWZpZWRTdWJqZWN0Lm5leHQodGhpcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVGaWVsZFR5cGVzIHtcclxuICBzdGF0aWMgcmVhZG9ubHkgRklYRUQgPSBcIkZJWEVEXCI7XHJcbiAgc3RhdGljIHJlYWRvbmx5IFRBQkxFID0gXCJUQUJMRVwiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVGaWVsZCB7XHJcbiAgcHJpdmF0ZSBfZmllbGRUeXBlOiBzdHJpbmcgPSBUZW1wbGF0ZUZpZWxkVHlwZXMuRklYRUQ7XHJcblxyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICBwcml2YXRlIF9wYWdlTnVtYmVyOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfcG9zaXRpb246IFBvaW50O1xyXG4gIHByaXZhdGUgX3NpemU6IFNpemU7XHJcbiAgcHJpdmF0ZSBfY29sdW1uczogVGVtcGxhdGVGaWVsZFRhYmxlU2VwYXJhdG9yW107XHJcbiAgcHJpdmF0ZSBfY2hhbmdlZFN1YmplY3QgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RlbXBsYXRlOiBUZW1wbGF0ZSkge1xyXG4gICAgdGhpcy5fY29sdW1ucyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcmVhZG9ubHkgY2hhbmdlZCA9IHRoaXMuX2NoYW5nZWRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBnZXQgY29sdW1ucygpOiBUZW1wbGF0ZUZpZWxkVGFibGVTZXBhcmF0b3JbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcclxuICB9XHJcblxyXG4gIGFkZENvbHVtbihjb2x1bW5OYW1lOiBzdHJpbmcsIGNvbHVtblZhbHVlOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGNvbHVtbiA9IG5ldyBUZW1wbGF0ZUZpZWxkVGFibGVTZXBhcmF0b3IoXHJcbiAgICAgIGNvbHVtbk5hbWUgPT0gbnVsbCA/IHRoaXMuZ2V0TmV4dENvbHVtbk5hbWUoKSA6IGNvbHVtbk5hbWUsXHJcbiAgICAgIGNvbHVtblZhbHVlLFxyXG4gICAgICB0aGlzLl9jaGFuZ2VkU3ViamVjdCk7XHJcblxyXG4gICAgdGhpcy5fY29sdW1ucy5wdXNoKGNvbHVtbik7XHJcbiAgICB0aGlzLl9jaGFuZ2VkU3ViamVjdC5uZXh0KFwiY29sdW1uc1wiKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNvbHVtbihjb2x1bW46IFRlbXBsYXRlRmllbGRUYWJsZVNlcGFyYXRvcikge1xyXG4gICAgdmFyIGluZGV4ID0gdGhpcy5fY29sdW1ucy5pbmRleE9mKGNvbHVtbik7XHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG5cclxuICAgICAgdGhpcy5fY29sdW1ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB0aGlzLl9jaGFuZ2VkU3ViamVjdC5uZXh0KFwiY29sdW1uc1wiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENvbHVtbkJ5TmFtZShjb2x1bW5OYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmICghY29sdW1uTmFtZSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbmFtZSA9IGNvbHVtbk5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5fY29sdW1uc1tpXS5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT0gbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zW2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgZmllbGRUeXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmllbGRUeXBlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGZpZWxkVHlwZShmaWVsZFR5cGU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fZmllbGRUeXBlID0gZmllbGRUeXBlO1xyXG4gICAgdGhpcy5fY2hhbmdlZFN1YmplY3QubmV4dChcImZpZWxkVHlwZVwiKTtcclxuICB9XHJcblxyXG4gIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGU7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX2NoYW5nZWRTdWJqZWN0Lm5leHQoXCJuYW1lXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhZ2VOdW1iZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnZU51bWJlcjtcclxuICB9XHJcblxyXG4gIHNldCBwYWdlTnVtYmVyKHBhZ2VOdW1iZXI6IG51bWJlcikge1xyXG4gICAgdGhpcy5fcGFnZU51bWJlciA9IHBhZ2VOdW1iZXI7XHJcbiAgICB0aGlzLl9jaGFuZ2VkU3ViamVjdC5uZXh0KFwicGFnZU51bWJlclwiKTtcclxuICB9XHJcblxyXG4gIGdldCBwb3NpdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIHNldCBwb3NpdGlvbihwb3NpdGlvbjogUG9pbnQpIHtcclxuICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICB0aGlzLl9jaGFuZ2VkU3ViamVjdC5uZXh0KFwicG9zaXRpb25cIik7XHJcbiAgfVxyXG5cclxuICBnZXQgc2l6ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zaXplO1xyXG4gIH1cclxuXHJcbiAgc2V0IHNpemUoc2l6ZTogU2l6ZSkge1xyXG4gICAgdGhpcy5fc2l6ZSA9IHNpemU7XHJcbiAgICB0aGlzLl9jaGFuZ2VkU3ViamVjdC5uZXh0KFwic2l6ZVwiKTtcclxuICB9XHJcblxyXG4gIHRvSlNPTigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGZpZWxkVHlwZTogdGhpcy5maWVsZFR5cGUsXHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgcGFnZU51bWJlcjogdGhpcy5wYWdlTnVtYmVyLFxyXG4gICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXHJcbiAgICAgIHk6IHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgd2lkdGg6IHRoaXMuc2l6ZS53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLnNpemUuaGVpZ2h0LFxyXG4gICAgICBjb2x1bW5zOiB0aGlzLl9jb2x1bW5zXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXROZXh0Q29sdW1uTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDAwOyBpKyspIHtcclxuICAgICAgbGV0IG5hbWUgPSBcIlRDOlwiICsgaS50b1N0cmluZygpO1xyXG4gICAgICBpZiAoIXRoaXMuZ2V0Q29sdW1uQnlOYW1lKG5hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUZpZWxkVGFibGVTZXBhcmF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25hbWU6IHN0cmluZywgcHJpdmF0ZSBfdmFsdWU6IG51bWJlciwgcHJpdmF0ZSBfY2hhbmdlZFN1YmplY3Q6IFN1YmplY3Q8c3RyaW5nPikge1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5fY2hhbmdlZFN1YmplY3QubmV4dChcInRhYmxlLXNlcGFyYXRvclwiKTtcclxuICB9XHJcblxyXG4gIHRvSlNPTigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXHJcbiAgICB9O1xyXG4gIH1cclxufSJdfQ==