/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Subject } from 'rxjs';
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
export { TableValue };
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
/**
 * @template T
 */
export { OperationState };
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
export { DocumentDescriptionResponse };
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
export { ParseByTemplateResponse };
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
export { SourceFile };
if (false) {
    /** @type {?} */
    SourceFile.prototype.guid;
    /** @type {?} */
    SourceFile.prototype.password;
}
var DocumentDescription = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentDescription, _super);
    function DocumentDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DocumentDescription;
}(SourceFile));
export { DocumentDescription };
if (false) {
    /** @type {?} */
    DocumentDescription.prototype.pages;
}
var DocumentPageDescription = /** @class */ (function () {
    function DocumentPageDescription() {
    }
    return DocumentPageDescription;
}());
export { DocumentPageDescription };
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
export { FileDescription };
if (false) {
    /** @type {?} */
    FileDescription.prototype.pages;
}
var ParseResult = /** @class */ (function () {
    function ParseResult() {
    }
    return ParseResult;
}());
export { ParseResult };
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
export { Point };
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
export { Size };
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
export { Template };
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
export { TemplateFieldTypes };
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
export { TemplateField };
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
export { TemplateFieldTableSeparator };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLW1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvYXBwLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBSXpEO0lBQ0Usb0JBQVksR0FBUTtRQWFYLFNBQUksR0FBb0IsRUFBRSxDQUFDO1FBWmxDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDN0IsR0FBRyxHQUFhLEVBQUU7WUFDeEIsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ1YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3JCO2FBQ0Y7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFHSCxpQkFBQztBQUFELENBQUMsQUFmRCxJQWVDOzs7O0lBREMsMEJBQW9DOzs7OztBQUd0Qzs7OztJQUFBO1FBQ1UsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUtuQixZQUFPLEdBQUcsSUFBSSxDQUFDO0lBc0RqQixDQUFDO0lBcERDLHNCQUFJLHdDQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG9DQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxD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aUJBQWlCLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FMQTs7OztJQU9ELDRDQUFNOzs7SUFBTjtRQUNFLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDbEIsQ0FBQztJQUNKLENBQUM7SUFDSCxrQ0FBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7Ozs7Ozs7SUF0QmEsNENBQXFCOzs7OztJQUFFLDZDQUFzQjs7Ozs7SUFBRSxzREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiZXZlbnRzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IF9fdmFsdWVzIH0gZnJvbSBcInRzbGliXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVWYWx1ZSB7XHJcbiAgY29uc3RydWN0b3Iob2JqOiBhbnkpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJvdzogc3RyaW5nW10gPSBbXTtcclxuICAgICAgaWYgKG9ialtpXSkge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgb2JqW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICByb3cucHVzaChvYmpbaV1bal0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5yb3dzLnB1c2gocm93KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlYWRvbmx5IHJvd3M6IEFycmF5PHN0cmluZ1tdPiA9IFtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT3BlcmF0aW9uU3RhdGU8VD4ge1xyXG4gIHByaXZhdGUgX3N0YXRlID0gMDtcclxuICBwcml2YXRlIF9wcm9tcHQ6IHN0cmluZztcclxuICBwcml2YXRlIF9lcnJvcjogc3RyaW5nO1xyXG4gIHByaXZhdGUgX3Jlc3VsdDogVDtcclxuXHJcbiAgZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gIGdldCBpc1JlYWR5VG9SdW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUgPT09IDA7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNGYWlsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUgPT09IC0xO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQ29tcGxldGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlID09PSAxO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzUHJvY2Vzc2luZygpIHtcclxuICAgIHJldHVybiB0aGlzLl9zdGF0ZSA9PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByb21wdCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcm9tcHQ7XHJcbiAgfVxyXG5cclxuICBzZXQgcHJvbXB0KHByb21wdDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9wcm9tcHQgPSBwcm9tcHQ7XHJcbiAgICB0aGlzLl9lcnJvciA9IG51bGw7XHJcbiAgICB0aGlzLl9yZXN1bHQgPSBudWxsO1xyXG4gICAgdGhpcy5fc3RhdGUgPSAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGVycm9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yO1xyXG4gIH1cclxuXHJcbiAgc2V0IGVycm9yKGVycm9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3Byb21wdCA9IG51bGw7XHJcbiAgICB0aGlzLl9lcnJvciA9IGVycm9yO1xyXG4gICAgdGhpcy5fcmVzdWx0ID0gbnVsbDtcclxuICAgIHRoaXMuX3N0YXRlID0gLTE7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVzdWx0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdDtcclxuICB9XHJcblxyXG4gIHNldCByZXN1bHQocmVzdWx0OiBUKSB7XHJcbiAgICB0aGlzLl9wcm9tcHQgPSBudWxsO1xyXG4gICAgdGhpcy5fZXJyb3IgPSBudWxsO1xyXG4gICAgdGhpcy5fcmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgdGhpcy5fc3RhdGUgPSAxO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZSgpIHtcclxuICAgIHRoaXMuX3N0YXRlID0gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudERlc2NyaXB0aW9uUmVzcG9uc2Uge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICByZXN1bHQ6IERvY3VtZW50RGVzY3JpcHRpb247XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJzZUJ5VGVtcGxhdGVSZXNwb25zZSB7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIGRhdGE6IFBhcnNlUmVzdWx0W107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VGaWxlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZ3VpZDogc3RyaW5nLCBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERvY3VtZW50RGVzY3JpcHRpb24gZXh0ZW5kcyBTb3VyY2VGaWxlIHtcclxuICBwYWdlczogRG9jdW1lbnRQYWdlRGVzY3JpcHRpb25bXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERvY3VtZW50UGFnZURlc2NyaXB0aW9uIHtcclxuICBudW1iZXI6IG51bWJlcjtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIGRhdGE6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVEZXNjcmlwdGlvbiB7XHJcbiAgcGFnZXM6IFBhZ2VNb2RlbFtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFyc2VSZXN1bHQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnQge1xyXG4gIHJlYWRvbmx5IHg6IG51bWJlcjtcclxuICByZWFkb25seSB5OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaXplIHtcclxuICByZWFkb25seSB3aWR0aDogbnVtYmVyO1xyXG4gIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlSWQge1xyXG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XHJcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUgaW1wbGVtZW50cyBUZW1wbGF0ZUlkIHtcclxuICBzdGF0aWMgcmVhZG9ubHkgTm90U2F2ZWQgPSBcIk5vdFNhdmVkXCI7XHJcblxyXG4gIHByaXZhdGUgX2lkOiBzdHJpbmcgPSBudWxsO1xyXG4gIHByaXZhdGUgX25hbWUgPSBcInRlbXBsYXRlIG5hbWVcIjtcclxuICBwcml2YXRlIF9maWVsZHM6IFRlbXBsYXRlRmllbGRbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIF9hZGRGaWVsZFN1YmplY3Q6IFN1YmplY3Q8VGVtcGxhdGVGaWVsZD4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgX3JlbW92ZUZpZWxkU3ViamVjdDogU3ViamVjdDxUZW1wbGF0ZUZpZWxkPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBfbW9kaWZpZWRTdWJqZWN0OiBTdWJqZWN0PFRlbXBsYXRlPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHByaXZhdGUgX2ZpZWxkQ2hhbmdlZFN1YnNjcmlwdGlvbnMgPSBuZXcgTWFwPFRlbXBsYXRlRmllbGQsIFN1YnNjcmlwdGlvbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9pZCA9IFRlbXBsYXRlLk5vdFNhdmVkO1xyXG4gIH1cclxuXHJcbiAgcmVhZG9ubHkgYWRkZWRGaWVsZDogT2JzZXJ2YWJsZTxUZW1wbGF0ZUZpZWxkPiA9IHRoaXMuX2FkZEZpZWxkU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICByZWFkb25seSByZW1vdmVkRmllbGQ6IE9ic2VydmFibGU8VGVtcGxhdGVGaWVsZD4gPSB0aGlzLl9yZW1vdmVGaWVsZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcmVhZG9ubHkgbW9kaWZpZWQ6IE9ic2VydmFibGU8VGVtcGxhdGU+ID0gdGhpcy5fbW9kaWZpZWRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBnZXQgaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgaWQoaWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5faWQgPSBpZDtcclxuICB9XHJcblxyXG4gIGdldCBuYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5ub3RpZnlNb2RpZmllZCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZpZWxkcygpOiBUZW1wbGF0ZUZpZWxkW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkcztcclxuICB9XHJcblxyXG4gIGdldCBpc1N0b3JlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9pZCAhPT0gVGVtcGxhdGUuTm90U2F2ZWQ7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNFbXB0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9maWVsZHMubGVuZ3RoID09PSAwO1xyXG4gIH1cclxuXHJcbiAgYWRkRmllbGQoZmllbGQ6IFRlbXBsYXRlRmllbGQpIHtcclxuICAgIHRoaXMuX2ZpZWxkQ2hhbmdlZFN1YnNjcmlwdGlvbnMuc2V0KFxyXG4gICAgICBmaWVsZCxcclxuICAgICAgZmllbGQuY2hhbmdlZC5zdWJzY3JpYmUocCA9PiB0aGlzLm5vdGlmeU1vZGlmaWVkKCkpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX2ZpZWxkcy5wdXNoKGZpZWxkKTtcclxuICAgIHRoaXMuX2FkZEZpZWxkU3ViamVjdC5uZXh0KGZpZWxkKTtcclxuICAgIHRoaXMubm90aWZ5TW9kaWZpZWQoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUZpZWxkKGZpZWxkOiBUZW1wbGF0ZUZpZWxkKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX2ZpZWxkcy5pbmRleE9mKGZpZWxkKTtcclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgIHRoaXMuX2ZpZWxkQ2hhbmdlZFN1YnNjcmlwdGlvbnMuZ2V0KGZpZWxkKS51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLl9maWVsZENoYW5nZWRTdWJzY3JpcHRpb25zLmRlbGV0ZShmaWVsZCk7XHJcbiAgICAgIHRoaXMuX2ZpZWxkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3JlbW92ZUZpZWxkU3ViamVjdC5uZXh0KGZpZWxkKTtcclxuICAgIHRoaXMubm90aWZ5TW9kaWZpZWQoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUZpZWxkQnlOYW1lKGZpZWxkTmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBmaWVsZCA9IHRoaXMuZ2V0RmllbGRCeU5hbWUoZmllbGROYW1lKTtcclxuICAgIGlmIChmaWVsZCkge1xyXG4gICAgICB0aGlzLnJlbW92ZUZpZWxkKGZpZWxkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEZpZWxkQnlOYW1lKGZpZWxkTmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWZpZWxkTmFtZSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuYW1lID0gZmllbGROYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2ZpZWxkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5fZmllbGRzW2ldLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maWVsZHNbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUZpZWxkKGJhc2VOYW1lOiBzdHJpbmcpOiBUZW1wbGF0ZUZpZWxkIHtcclxuICAgIGNvbnN0IGZpZWxkID0gbmV3IFRlbXBsYXRlRmllbGQodGhpcyk7XHJcbiAgICBmaWVsZC5uYW1lID0gdGhpcy5nZXROZXh0RmllbGROYW1lKGJhc2VOYW1lKTtcclxuICAgIGZpZWxkLnNpemUgPSBuZXcgU2l6ZSg2MCwgMjApO1xyXG4gICAgZmllbGQucGFnZU51bWJlciA9IDE7XHJcbiAgICBmaWVsZC5wb3NpdGlvbiA9IG5ldyBQb2ludCgxMCwgMTApO1xyXG5cclxuICAgIHJldHVybiBmaWVsZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TmV4dEZpZWxkTmFtZShiYXNlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwMDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBiYXNlTmFtZSArIGkudG9TdHJpbmcoKTtcclxuICAgICAgaWYgKCF0aGlzLmdldEZpZWxkQnlOYW1lKG5hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbm90aWZ5TW9kaWZpZWQoKSB7XHJcbiAgICB0aGlzLl9tb2RpZmllZFN1YmplY3QubmV4dCh0aGlzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUZpZWxkVHlwZXMge1xyXG4gIHN0YXRpYyByZWFkb25seSBGSVhFRCA9IFwiRklYRURcIjtcclxuICBzdGF0aWMgcmVhZG9ubHkgVEFCTEUgPSBcIlRBQkxFXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUZpZWxkIHtcclxuICBwcml2YXRlIF9maWVsZFR5cGU6IHN0cmluZyA9IFRlbXBsYXRlRmllbGRUeXBlcy5GSVhFRDtcclxuXHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX3BhZ2VOdW1iZXI6IG51bWJlcjtcclxuICBwcml2YXRlIF9wb3NpdGlvbjogUG9pbnQ7XHJcbiAgcHJpdmF0ZSBfc2l6ZTogU2l6ZTtcclxuICBwcml2YXRlIF9jb2x1bW5zOiBUZW1wbGF0ZUZpZWxkVGFibGVTZXBhcmF0b3JbXTtcclxuICBwcml2YXRlIF9jaGFuZ2VkU3ViamVjdCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGVtcGxhdGU6IFRlbXBsYXRlKSB7XHJcbiAgICB0aGlzLl9jb2x1bW5zID0gW107XHJcbiAgfVxyXG5cclxuICByZWFkb25seSBjaGFuZ2VkID0gdGhpcy5fY2hhbmdlZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGdldCBjb2x1bW5zKCk6IFRlbXBsYXRlRmllbGRUYWJsZVNlcGFyYXRvcltdIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xyXG4gIH1cclxuXHJcbiAgYWRkQ29sdW1uKGNvbHVtbk5hbWU6IHN0cmluZywgY29sdW1uVmFsdWU6IG51bWJlcikge1xyXG4gICAgY29uc3QgY29sdW1uID0gbmV3IFRlbXBsYXRlRmllbGRUYWJsZVNlcGFyYXRvcihcclxuICAgICAgY29sdW1uTmFtZSA9PSBudWxsID8gdGhpcy5nZXROZXh0Q29sdW1uTmFtZSgpIDogY29sdW1uTmFtZSxcclxuICAgICAgY29sdW1uVmFsdWUsXHJcbiAgICAgIHRoaXMuX2NoYW5nZWRTdWJqZWN0KTtcclxuXHJcbiAgICB0aGlzLl9jb2x1bW5zLnB1c2goY29sdW1uKTtcclxuICAgIHRoaXMuX2NoYW5nZWRTdWJqZWN0Lm5leHQoXCJjb2x1bW5zXCIpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ29sdW1uKGNvbHVtbjogVGVtcGxhdGVGaWVsZFRhYmxlU2VwYXJhdG9yKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX2NvbHVtbnMuaW5kZXhPZihjb2x1bW4pO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuXHJcbiAgICAgIHRoaXMuX2NvbHVtbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgdGhpcy5fY2hhbmdlZFN1YmplY3QubmV4dChcImNvbHVtbnNcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDb2x1bW5CeU5hbWUoY29sdW1uTmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWNvbHVtbk5hbWUpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGNvbHVtbk5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5fY29sdW1uc1tpXS5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1uc1tpXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZpZWxkVHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkVHlwZTtcclxuICB9XHJcblxyXG4gIHNldCBmaWVsZFR5cGUoZmllbGRUeXBlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2ZpZWxkVHlwZSA9IGZpZWxkVHlwZTtcclxuICAgIHRoaXMuX2NoYW5nZWRTdWJqZWN0Lm5leHQoXCJmaWVsZFR5cGVcIik7XHJcbiAgfVxyXG5cclxuICBnZXQgdGVtcGxhdGUoKTogVGVtcGxhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl9jaGFuZ2VkU3ViamVjdC5uZXh0KFwibmFtZVwiKTtcclxuICB9XHJcblxyXG4gIGdldCBwYWdlTnVtYmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VOdW1iZXI7XHJcbiAgfVxyXG5cclxuICBzZXQgcGFnZU51bWJlcihwYWdlTnVtYmVyOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3BhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xyXG4gICAgdGhpcy5fY2hhbmdlZFN1YmplY3QubmV4dChcInBhZ2VOdW1iZXJcIik7XHJcbiAgfVxyXG5cclxuICBnZXQgcG9zaXRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XHJcbiAgfVxyXG5cclxuICBzZXQgcG9zaXRpb24ocG9zaXRpb246IFBvaW50KSB7XHJcbiAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgdGhpcy5fY2hhbmdlZFN1YmplY3QubmV4dChcInBvc2l0aW9uXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNpemUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICB9XHJcblxyXG4gIHNldCBzaXplKHNpemU6IFNpemUpIHtcclxuICAgIHRoaXMuX3NpemUgPSBzaXplO1xyXG4gICAgdGhpcy5fY2hhbmdlZFN1YmplY3QubmV4dChcInNpemVcIik7XHJcbiAgfVxyXG5cclxuICB0b0pTT04oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBmaWVsZFR5cGU6IHRoaXMuZmllbGRUeXBlLFxyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIHBhZ2VOdW1iZXI6IHRoaXMucGFnZU51bWJlcixcclxuICAgICAgeDogdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICB5OiB0aGlzLnBvc2l0aW9uLnksXHJcbiAgICAgIHdpZHRoOiB0aGlzLnNpemUud2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5zaXplLmhlaWdodCxcclxuICAgICAgY29sdW1uczogdGhpcy5fY29sdW1uc1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TmV4dENvbHVtbk5hbWUoKTogc3RyaW5nIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwMDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBcIlRDOlwiICsgaS50b1N0cmluZygpO1xyXG4gICAgICBpZiAoIXRoaXMuZ2V0Q29sdW1uQnlOYW1lKG5hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUZpZWxkVGFibGVTZXBhcmF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25hbWU6IHN0cmluZywgcHJpdmF0ZSBfdmFsdWU6IG51bWJlciwgcHJpdmF0ZSBfY2hhbmdlZFN1YmplY3Q6IFN1YmplY3Q8c3RyaW5nPikge1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5fY2hhbmdlZFN1YmplY3QubmV4dChcInRhYmxlLXNlcGFyYXRvclwiKTtcclxuICB9XHJcblxyXG4gIHRvSlNPTigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXHJcbiAgICB9O1xyXG4gIH1cclxufSJdfQ==