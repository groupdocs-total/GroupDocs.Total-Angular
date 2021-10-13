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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLW1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvYXBwLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBSXpEO0lBQ0Usb0JBQVksR0FBUTtRQWFYLFNBQUksR0FBb0IsRUFBRSxDQUFDO1FBWmxDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDL0IsR0FBRyxHQUFhLEVBQUU7WUFDdEIsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ1YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3JCO2FBQ0Y7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFHSCxpQkFBQztBQUFELENBQUMsQUFmRCxJQWVDOzs7O0lBREMsMEJBQW9DOzs7OztBQUd0Qzs7OztJQUFBO1FBQ1UsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUszQixZQUFPLEdBQVksSUFBSSxDQUFDO0lBc0QxQixDQUFDO0lBcERDLHNCQUFJLHdDQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG9DQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxD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LGlCQUFpQixDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BTEE7Ozs7SUFPRCw0Q0FBTTs7O0lBQU47UUFDRSxPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUM7SUFDSixDQUFDO0lBQ0gsa0NBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDOzs7Ozs7O0lBdEJhLDRDQUFxQjs7Ozs7SUFBRSw2Q0FBc0I7Ozs7O0lBQUUsc0RBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcImV2ZW50c1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBfX3ZhbHVlcyB9IGZyb20gXCJ0c2xpYlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlVmFsdWUge1xyXG4gIGNvbnN0cnVjdG9yKG9iajogYW55KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgcm93OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICBpZiAob2JqW2ldKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBvYmpbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIHJvdy5wdXNoKG9ialtpXVtqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnJvd3MucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVhZG9ubHkgcm93czogQXJyYXk8c3RyaW5nW10+ID0gW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPcGVyYXRpb25TdGF0ZTxUPiB7XHJcbiAgcHJpdmF0ZSBfc3RhdGU6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBfcHJvbXB0OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfZXJyb3I6IHN0cmluZztcclxuICBwcml2YXRlIF9yZXN1bHQ6IFQ7XHJcblxyXG4gIGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBnZXQgaXNSZWFkeVRvUnVuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlID09IDA7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNGYWlsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUgPT0gLTE7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNDb21wbGV0ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUgPT0gMTtcclxuICB9XHJcblxyXG4gIGdldCBpc1Byb2Nlc3NpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUgPT0gbnVsbDtcclxuICB9XHJcblxyXG4gIGdldCBwcm9tcHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJvbXB0O1xyXG4gIH1cclxuXHJcbiAgc2V0IHByb21wdChwcm9tcHQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fcHJvbXB0ID0gcHJvbXB0O1xyXG4gICAgdGhpcy5fZXJyb3IgPSBudWxsO1xyXG4gICAgdGhpcy5fcmVzdWx0ID0gbnVsbDtcclxuICAgIHRoaXMuX3N0YXRlID0gMDtcclxuICB9XHJcblxyXG4gIGdldCBlcnJvcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9lcnJvcjtcclxuICB9XHJcblxyXG4gIHNldCBlcnJvcihlcnJvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9wcm9tcHQgPSBudWxsO1xyXG4gICAgdGhpcy5fZXJyb3IgPSBlcnJvcjtcclxuICAgIHRoaXMuX3Jlc3VsdCA9IG51bGw7XHJcbiAgICB0aGlzLl9zdGF0ZSA9IC0xO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlc3VsdCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9yZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBzZXQgcmVzdWx0KHJlc3VsdDogVCkge1xyXG4gICAgdGhpcy5fcHJvbXB0ID0gbnVsbDtcclxuICAgIHRoaXMuX2Vycm9yID0gbnVsbDtcclxuICAgIHRoaXMuX3Jlc3VsdCA9IHJlc3VsdDtcclxuICAgIHRoaXMuX3N0YXRlID0gMTtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGUoKSB7XHJcbiAgICB0aGlzLl9zdGF0ZSA9IG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnREZXNjcmlwdGlvblJlc3BvbnNlIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcmVzdWx0OiBEb2N1bWVudERlc2NyaXB0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFyc2VCeVRlbXBsYXRlUmVzcG9uc2Uge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBkYXRhOiBQYXJzZVJlc3VsdFtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU291cmNlRmlsZSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGd1aWQ6IHN0cmluZywgcHVibGljIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudERlc2NyaXB0aW9uIGV4dGVuZHMgU291cmNlRmlsZSB7XHJcbiAgcGFnZXM6IERvY3VtZW50UGFnZURlc2NyaXB0aW9uW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudFBhZ2VEZXNjcmlwdGlvbiB7XHJcbiAgbnVtYmVyOiBudW1iZXI7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICBkYXRhOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlRGVzY3JpcHRpb24ge1xyXG4gIHBhZ2VzOiBQYWdlTW9kZWxbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlUmVzdWx0IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50IHtcclxuICByZWFkb25seSB4OiBudW1iZXI7XHJcbiAgcmVhZG9ubHkgeTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2l6ZSB7XHJcbiAgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcclxuICByZWFkb25seSBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZW1wbGF0ZUlkIHtcclxuICByZWFkb25seSBpZDogc3RyaW5nO1xyXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlIGltcGxlbWVudHMgVGVtcGxhdGVJZCB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IE5vdFNhdmVkID0gXCJOb3RTYXZlZFwiO1xyXG5cclxuICBwcml2YXRlIF9pZDogc3RyaW5nID0gbnVsbDtcclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmcgPSBcInRlbXBsYXRlIG5hbWVcIjtcclxuICBwcml2YXRlIF9maWVsZHM6IFRlbXBsYXRlRmllbGRbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIF9hZGRGaWVsZFN1YmplY3Q6IFN1YmplY3Q8VGVtcGxhdGVGaWVsZD4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgX3JlbW92ZUZpZWxkU3ViamVjdDogU3ViamVjdDxUZW1wbGF0ZUZpZWxkPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBfbW9kaWZpZWRTdWJqZWN0OiBTdWJqZWN0PFRlbXBsYXRlPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHByaXZhdGUgX2ZpZWxkQ2hhbmdlZFN1YnNjcmlwdGlvbnMgPSBuZXcgTWFwPFRlbXBsYXRlRmllbGQsIFN1YnNjcmlwdGlvbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9pZCA9IFRlbXBsYXRlLk5vdFNhdmVkO1xyXG4gIH1cclxuXHJcbiAgcmVhZG9ubHkgYWRkZWRGaWVsZDogT2JzZXJ2YWJsZTxUZW1wbGF0ZUZpZWxkPiA9IHRoaXMuX2FkZEZpZWxkU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICByZWFkb25seSByZW1vdmVkRmllbGQ6IE9ic2VydmFibGU8VGVtcGxhdGVGaWVsZD4gPSB0aGlzLl9yZW1vdmVGaWVsZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcmVhZG9ubHkgbW9kaWZpZWQ6IE9ic2VydmFibGU8VGVtcGxhdGU+ID0gdGhpcy5fbW9kaWZpZWRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBnZXQgaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgaWQoaWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5faWQgPSBpZDtcclxuICB9XHJcblxyXG4gIGdldCBuYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5ub3RpZnlNb2RpZmllZCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZpZWxkcygpOiBUZW1wbGF0ZUZpZWxkW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkcztcclxuICB9XHJcblxyXG4gIGdldCBpc1N0b3JlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9pZCAhPSBUZW1wbGF0ZS5Ob3RTYXZlZDtcclxuICB9XHJcblxyXG4gIGdldCBpc0VtcHR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkcy5sZW5ndGggPT0gMDtcclxuICB9XHJcblxyXG4gIGFkZEZpZWxkKGZpZWxkOiBUZW1wbGF0ZUZpZWxkKSB7XHJcbiAgICB0aGlzLl9maWVsZENoYW5nZWRTdWJzY3JpcHRpb25zLnNldChcclxuICAgICAgZmllbGQsXHJcbiAgICAgIGZpZWxkLmNoYW5nZWQuc3Vic2NyaWJlKHAgPT4gdGhpcy5ub3RpZnlNb2RpZmllZCgpKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLl9maWVsZHMucHVzaChmaWVsZCk7XHJcbiAgICB0aGlzLl9hZGRGaWVsZFN1YmplY3QubmV4dChmaWVsZCk7XHJcbiAgICB0aGlzLm5vdGlmeU1vZGlmaWVkKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVGaWVsZChmaWVsZDogVGVtcGxhdGVGaWVsZCkge1xyXG4gICAgdmFyIGluZGV4ID0gdGhpcy5fZmllbGRzLmluZGV4T2YoZmllbGQpO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgdGhpcy5fZmllbGRDaGFuZ2VkU3Vic2NyaXB0aW9ucy5nZXQoZmllbGQpLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMuX2ZpZWxkQ2hhbmdlZFN1YnNjcmlwdGlvbnMuZGVsZXRlKGZpZWxkKTtcclxuICAgICAgdGhpcy5fZmllbGRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcmVtb3ZlRmllbGRTdWJqZWN0Lm5leHQoZmllbGQpO1xyXG4gICAgdGhpcy5ub3RpZnlNb2RpZmllZCgpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRmllbGRCeU5hbWUoZmllbGROYW1lOiBzdHJpbmcpIHtcclxuICAgIGxldCBmaWVsZCA9IHRoaXMuZ2V0RmllbGRCeU5hbWUoZmllbGROYW1lKTtcclxuICAgIGlmIChmaWVsZCkge1xyXG4gICAgICB0aGlzLnJlbW92ZUZpZWxkKGZpZWxkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEZpZWxkQnlOYW1lKGZpZWxkTmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWZpZWxkTmFtZSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbmFtZSA9IGZpZWxkTmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9maWVsZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuX2ZpZWxkc1tpXS5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT0gbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maWVsZHNbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUZpZWxkKGJhc2VOYW1lOiBzdHJpbmcpOiBUZW1wbGF0ZUZpZWxkIHtcclxuICAgIGxldCBmaWVsZCA9IG5ldyBUZW1wbGF0ZUZpZWxkKHRoaXMpO1xyXG4gICAgZmllbGQubmFtZSA9IHRoaXMuZ2V0TmV4dEZpZWxkTmFtZShiYXNlTmFtZSk7XHJcbiAgICBmaWVsZC5zaXplID0gbmV3IFNpemUoNjAsIDIwKTtcclxuICAgIGZpZWxkLnBhZ2VOdW1iZXIgPSAxO1xyXG4gICAgZmllbGQucG9zaXRpb24gPSBuZXcgUG9pbnQoMTAsIDEwKTtcclxuXHJcbiAgICByZXR1cm4gZmllbGQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE5leHRGaWVsZE5hbWUoYmFzZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDA7IGkrKykge1xyXG4gICAgICBsZXQgbmFtZSA9IGJhc2VOYW1lICsgaS50b1N0cmluZygpO1xyXG4gICAgICBpZiAoIXRoaXMuZ2V0RmllbGRCeU5hbWUobmFtZSkpIHtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBub3RpZnlNb2RpZmllZCgpIHtcclxuICAgIHRoaXMuX21vZGlmaWVkU3ViamVjdC5uZXh0KHRoaXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlRmllbGRUeXBlcyB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IEZJWEVEID0gXCJGSVhFRFwiO1xyXG4gIHN0YXRpYyByZWFkb25seSBUQUJMRSA9IFwiVEFCTEVcIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlRmllbGQge1xyXG4gIHByaXZhdGUgX2ZpZWxkVHlwZTogc3RyaW5nID0gVGVtcGxhdGVGaWVsZFR5cGVzLkZJWEVEO1xyXG5cclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfcGFnZU51bWJlcjogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBQb2ludDtcclxuICBwcml2YXRlIF9zaXplOiBTaXplO1xyXG4gIHByaXZhdGUgX2NvbHVtbnM6IFRlbXBsYXRlRmllbGRUYWJsZVNlcGFyYXRvcltdO1xyXG4gIHByaXZhdGUgX2NoYW5nZWRTdWJqZWN0ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90ZW1wbGF0ZTogVGVtcGxhdGUpIHtcclxuICAgIHRoaXMuX2NvbHVtbnMgPSBbXTtcclxuICB9XHJcblxyXG4gIHJlYWRvbmx5IGNoYW5nZWQgPSB0aGlzLl9jaGFuZ2VkU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgZ2V0IGNvbHVtbnMoKTogVGVtcGxhdGVGaWVsZFRhYmxlU2VwYXJhdG9yW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XHJcbiAgfVxyXG5cclxuICBhZGRDb2x1bW4oY29sdW1uTmFtZTogc3RyaW5nLCBjb2x1bW5WYWx1ZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBjb2x1bW4gPSBuZXcgVGVtcGxhdGVGaWVsZFRhYmxlU2VwYXJhdG9yKFxyXG4gICAgICBjb2x1bW5OYW1lID09IG51bGwgPyB0aGlzLmdldE5leHRDb2x1bW5OYW1lKCkgOiBjb2x1bW5OYW1lLFxyXG4gICAgICBjb2x1bW5WYWx1ZSxcclxuICAgICAgdGhpcy5fY2hhbmdlZFN1YmplY3QpO1xyXG5cclxuICAgIHRoaXMuX2NvbHVtbnMucHVzaChjb2x1bW4pO1xyXG4gICAgdGhpcy5fY2hhbmdlZFN1YmplY3QubmV4dChcImNvbHVtbnNcIik7XHJcbiAgfVxyXG5cclxuICByZW1vdmVDb2x1bW4oY29sdW1uOiBUZW1wbGF0ZUZpZWxkVGFibGVTZXBhcmF0b3IpIHtcclxuICAgIHZhciBpbmRleCA9IHRoaXMuX2NvbHVtbnMuaW5kZXhPZihjb2x1bW4pO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuXHJcbiAgICAgIHRoaXMuX2NvbHVtbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgdGhpcy5fY2hhbmdlZFN1YmplY3QubmV4dChcImNvbHVtbnNcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDb2x1bW5CeU5hbWUoY29sdW1uTmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWNvbHVtbk5hbWUpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5hbWUgPSBjb2x1bW5OYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2NvbHVtbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuX2NvbHVtbnNbaV0ubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09IG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1uc1tpXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZpZWxkVHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkVHlwZTtcclxuICB9XHJcblxyXG4gIHNldCBmaWVsZFR5cGUoZmllbGRUeXBlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2ZpZWxkVHlwZSA9IGZpZWxkVHlwZTtcclxuICAgIHRoaXMuX2NoYW5nZWRTdWJqZWN0Lm5leHQoXCJmaWVsZFR5cGVcIik7XHJcbiAgfVxyXG5cclxuICBnZXQgdGVtcGxhdGUoKTogVGVtcGxhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl9jaGFuZ2VkU3ViamVjdC5uZXh0KFwibmFtZVwiKTtcclxuICB9XHJcblxyXG4gIGdldCBwYWdlTnVtYmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VOdW1iZXI7XHJcbiAgfVxyXG5cclxuICBzZXQgcGFnZU51bWJlcihwYWdlTnVtYmVyOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3BhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xyXG4gICAgdGhpcy5fY2hhbmdlZFN1YmplY3QubmV4dChcInBhZ2VOdW1iZXJcIik7XHJcbiAgfVxyXG5cclxuICBnZXQgcG9zaXRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XHJcbiAgfVxyXG5cclxuICBzZXQgcG9zaXRpb24ocG9zaXRpb246IFBvaW50KSB7XHJcbiAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgdGhpcy5fY2hhbmdlZFN1YmplY3QubmV4dChcInBvc2l0aW9uXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNpemUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICB9XHJcblxyXG4gIHNldCBzaXplKHNpemU6IFNpemUpIHtcclxuICAgIHRoaXMuX3NpemUgPSBzaXplO1xyXG4gICAgdGhpcy5fY2hhbmdlZFN1YmplY3QubmV4dChcInNpemVcIik7XHJcbiAgfVxyXG5cclxuICB0b0pTT04oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBmaWVsZFR5cGU6IHRoaXMuZmllbGRUeXBlLFxyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIHBhZ2VOdW1iZXI6IHRoaXMucGFnZU51bWJlcixcclxuICAgICAgeDogdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICB5OiB0aGlzLnBvc2l0aW9uLnksXHJcbiAgICAgIHdpZHRoOiB0aGlzLnNpemUud2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5zaXplLmhlaWdodCxcclxuICAgICAgY29sdW1uczogdGhpcy5fY29sdW1uc1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TmV4dENvbHVtbk5hbWUoKTogc3RyaW5nIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDsgaSsrKSB7XHJcbiAgICAgIGxldCBuYW1lID0gXCJUQzpcIiArIGkudG9TdHJpbmcoKTtcclxuICAgICAgaWYgKCF0aGlzLmdldENvbHVtbkJ5TmFtZShuYW1lKSkge1xyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVGaWVsZFRhYmxlU2VwYXJhdG9yIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uYW1lOiBzdHJpbmcsIHByaXZhdGUgX3ZhbHVlOiBudW1iZXIsIHByaXZhdGUgX2NoYW5nZWRTdWJqZWN0OiBTdWJqZWN0PHN0cmluZz4pIHtcclxuICB9XHJcblxyXG4gIGdldCBuYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuX2NoYW5nZWRTdWJqZWN0Lm5leHQoXCJ0YWJsZS1zZXBhcmF0b3JcIik7XHJcbiAgfVxyXG5cclxuICB0b0pTT04oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxyXG4gICAgfTtcclxuICB9XHJcbn0iXX0=