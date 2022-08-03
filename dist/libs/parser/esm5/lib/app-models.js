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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLW1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvYXBwLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBSXpEO0lBQ0Usb0JBQVksR0FBUTtRQWFYLFNBQUksR0FBb0IsRUFBRSxDQUFDO1FBWmxDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDN0IsR0FBRyxHQUFhLEVBQUU7WUFDeEIsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ1YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3JCO2FBQ0Y7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFHSCxpQkFBQztBQUFELENBQUMsQUFmRCxJQWVDOzs7O0lBREMsMEJBQW9DOzs7OztBQUd0Qzs7OztJQUFBO1FBQ1UsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUtuQixZQUFPLEdBQUcsSUFBSSxDQUFDO0lBc0RqQixDQUFDO0lBcERDLHNCQUFJLHdDQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG9DQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxD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aUJBQWlCLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FMQTs7OztJQU9ELDRDQUFNOzs7SUFBTjtRQUNFLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDbEIsQ0FBQztJQUNKLENBQUM7SUFDSCxrQ0FBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7Ozs7Ozs7SUF0QmEsNENBQXFCOzs7OztJQUFFLDZDQUFzQjs7Ozs7SUFBRSxzREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiZXZlbnRzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IF9fdmFsdWVzIH0gZnJvbSBcInRzbGliXCI7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZVZhbHVlIHtcbiAgY29uc3RydWN0b3Iob2JqOiBhbnkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgcm93OiBzdHJpbmdbXSA9IFtdO1xuICAgICAgaWYgKG9ialtpXSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG9ialtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHJvdy5wdXNoKG9ialtpXVtqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5yb3dzLnB1c2gocm93KTtcbiAgICB9XG4gIH1cblxuICByZWFkb25seSByb3dzOiBBcnJheTxzdHJpbmdbXT4gPSBbXTtcbn1cblxuZXhwb3J0IGNsYXNzIE9wZXJhdGlvblN0YXRlPFQ+IHtcbiAgcHJpdmF0ZSBfc3RhdGUgPSAwO1xuICBwcml2YXRlIF9wcm9tcHQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfZXJyb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfcmVzdWx0OiBUO1xuXG4gIGVuYWJsZWQgPSB0cnVlO1xuXG4gIGdldCBpc1JlYWR5VG9SdW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlID09PSAwO1xuICB9XG5cbiAgZ2V0IGlzRmFpbGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZSA9PT0gLTE7XG4gIH1cblxuICBnZXQgaXNDb21wbGV0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlID09PSAxO1xuICB9XG5cbiAgZ2V0IGlzUHJvY2Vzc2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUgPT0gbnVsbDtcbiAgfVxuXG4gIGdldCBwcm9tcHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb21wdDtcbiAgfVxuXG4gIHNldCBwcm9tcHQocHJvbXB0OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcm9tcHQgPSBwcm9tcHQ7XG4gICAgdGhpcy5fZXJyb3IgPSBudWxsO1xuICAgIHRoaXMuX3Jlc3VsdCA9IG51bGw7XG4gICAgdGhpcy5fc3RhdGUgPSAwO1xuICB9XG5cbiAgZ2V0IGVycm9yKCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcjtcbiAgfVxuXG4gIHNldCBlcnJvcihlcnJvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvbXB0ID0gbnVsbDtcbiAgICB0aGlzLl9lcnJvciA9IGVycm9yO1xuICAgIHRoaXMuX3Jlc3VsdCA9IG51bGw7XG4gICAgdGhpcy5fc3RhdGUgPSAtMTtcbiAgfVxuXG4gIGdldCByZXN1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdDtcbiAgfVxuXG4gIHNldCByZXN1bHQocmVzdWx0OiBUKSB7XG4gICAgdGhpcy5fcHJvbXB0ID0gbnVsbDtcbiAgICB0aGlzLl9lcnJvciA9IG51bGw7XG4gICAgdGhpcy5fcmVzdWx0ID0gcmVzdWx0O1xuICAgIHRoaXMuX3N0YXRlID0gMTtcbiAgfVxuXG4gIGV4ZWN1dGUoKSB7XG4gICAgdGhpcy5fc3RhdGUgPSBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudERlc2NyaXB0aW9uUmVzcG9uc2Uge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHJlc3VsdDogRG9jdW1lbnREZXNjcmlwdGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlQnlUZW1wbGF0ZVJlc3BvbnNlIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBkYXRhOiBQYXJzZVJlc3VsdFtdO1xufVxuXG5leHBvcnQgY2xhc3MgU291cmNlRmlsZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBndWlkOiBzdHJpbmcsIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nKSB7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50RGVzY3JpcHRpb24gZXh0ZW5kcyBTb3VyY2VGaWxlIHtcbiAgcGFnZXM6IERvY3VtZW50UGFnZURlc2NyaXB0aW9uW107XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFBhZ2VEZXNjcmlwdGlvbiB7XG4gIG51bWJlcjogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgZGF0YTogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgRmlsZURlc2NyaXB0aW9uIHtcbiAgcGFnZXM6IFBhZ2VNb2RlbFtdO1xufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VSZXN1bHQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQb2ludCB7XG4gIHJlYWRvbmx5IHg6IG51bWJlcjtcbiAgcmVhZG9ubHkgeTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTaXplIHtcbiAgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcbiAgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZW1wbGF0ZUlkIHtcbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUgaW1wbGVtZW50cyBUZW1wbGF0ZUlkIHtcbiAgc3RhdGljIHJlYWRvbmx5IE5vdFNhdmVkID0gXCJOb3RTYXZlZFwiO1xuXG4gIHByaXZhdGUgX2lkOiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIF9uYW1lID0gXCJ0ZW1wbGF0ZSBuYW1lXCI7XG4gIHByaXZhdGUgX2ZpZWxkczogVGVtcGxhdGVGaWVsZFtdID0gW107XG5cbiAgcHJpdmF0ZSBfYWRkRmllbGRTdWJqZWN0OiBTdWJqZWN0PFRlbXBsYXRlRmllbGQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBfcmVtb3ZlRmllbGRTdWJqZWN0OiBTdWJqZWN0PFRlbXBsYXRlRmllbGQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBfbW9kaWZpZWRTdWJqZWN0OiBTdWJqZWN0PFRlbXBsYXRlPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBfZmllbGRDaGFuZ2VkU3Vic2NyaXB0aW9ucyA9IG5ldyBNYXA8VGVtcGxhdGVGaWVsZCwgU3Vic2NyaXB0aW9uPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2lkID0gVGVtcGxhdGUuTm90U2F2ZWQ7XG4gIH1cblxuICByZWFkb25seSBhZGRlZEZpZWxkOiBPYnNlcnZhYmxlPFRlbXBsYXRlRmllbGQ+ID0gdGhpcy5fYWRkRmllbGRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICByZWFkb25seSByZW1vdmVkRmllbGQ6IE9ic2VydmFibGU8VGVtcGxhdGVGaWVsZD4gPSB0aGlzLl9yZW1vdmVGaWVsZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIHJlYWRvbmx5IG1vZGlmaWVkOiBPYnNlcnZhYmxlPFRlbXBsYXRlPiA9IHRoaXMuX21vZGlmaWVkU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgc2V0IGlkKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IGlkO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLm5vdGlmeU1vZGlmaWVkKCk7XG4gIH1cblxuICBnZXQgZmllbGRzKCk6IFRlbXBsYXRlRmllbGRbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkcztcbiAgfVxuXG4gIGdldCBpc1N0b3JlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQgIT09IFRlbXBsYXRlLk5vdFNhdmVkO1xuICB9XG5cbiAgZ2V0IGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkcy5sZW5ndGggPT09IDA7XG4gIH1cblxuICBhZGRGaWVsZChmaWVsZDogVGVtcGxhdGVGaWVsZCkge1xuICAgIHRoaXMuX2ZpZWxkQ2hhbmdlZFN1YnNjcmlwdGlvbnMuc2V0KFxuICAgICAgZmllbGQsXG4gICAgICBmaWVsZC5jaGFuZ2VkLnN1YnNjcmliZShwID0+IHRoaXMubm90aWZ5TW9kaWZpZWQoKSlcbiAgICApO1xuXG4gICAgdGhpcy5fZmllbGRzLnB1c2goZmllbGQpO1xuICAgIHRoaXMuX2FkZEZpZWxkU3ViamVjdC5uZXh0KGZpZWxkKTtcbiAgICB0aGlzLm5vdGlmeU1vZGlmaWVkKCk7XG4gIH1cblxuICByZW1vdmVGaWVsZChmaWVsZDogVGVtcGxhdGVGaWVsZCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fZmllbGRzLmluZGV4T2YoZmllbGQpO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLl9maWVsZENoYW5nZWRTdWJzY3JpcHRpb25zLmdldChmaWVsZCkudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuX2ZpZWxkQ2hhbmdlZFN1YnNjcmlwdGlvbnMuZGVsZXRlKGZpZWxkKTtcbiAgICAgIHRoaXMuX2ZpZWxkcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHRoaXMuX3JlbW92ZUZpZWxkU3ViamVjdC5uZXh0KGZpZWxkKTtcbiAgICB0aGlzLm5vdGlmeU1vZGlmaWVkKCk7XG4gIH1cblxuICByZW1vdmVGaWVsZEJ5TmFtZShmaWVsZE5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5nZXRGaWVsZEJ5TmFtZShmaWVsZE5hbWUpO1xuICAgIGlmIChmaWVsZCkge1xuICAgICAgdGhpcy5yZW1vdmVGaWVsZChmaWVsZCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RmllbGRCeU5hbWUoZmllbGROYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIWZpZWxkTmFtZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IGZpZWxkTmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5fZmllbGRzW2ldLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmllbGRzW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY3JlYXRlRmllbGQoYmFzZU5hbWU6IHN0cmluZyk6IFRlbXBsYXRlRmllbGQge1xuICAgIGNvbnN0IGZpZWxkID0gbmV3IFRlbXBsYXRlRmllbGQodGhpcyk7XG4gICAgZmllbGQubmFtZSA9IHRoaXMuZ2V0TmV4dEZpZWxkTmFtZShiYXNlTmFtZSk7XG4gICAgZmllbGQuc2l6ZSA9IG5ldyBTaXplKDYwLCAyMCk7XG4gICAgZmllbGQucGFnZU51bWJlciA9IDE7XG4gICAgZmllbGQucG9zaXRpb24gPSBuZXcgUG9pbnQoMTAsIDEwKTtcblxuICAgIHJldHVybiBmaWVsZDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV4dEZpZWxkTmFtZShiYXNlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDA7IGkrKykge1xuICAgICAgY29uc3QgbmFtZSA9IGJhc2VOYW1lICsgaS50b1N0cmluZygpO1xuICAgICAgaWYgKCF0aGlzLmdldEZpZWxkQnlOYW1lKG5hbWUpKSB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlNb2RpZmllZCgpIHtcbiAgICB0aGlzLl9tb2RpZmllZFN1YmplY3QubmV4dCh0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVGaWVsZFR5cGVzIHtcbiAgc3RhdGljIHJlYWRvbmx5IEZJWEVEID0gXCJGSVhFRFwiO1xuICBzdGF0aWMgcmVhZG9ubHkgVEFCTEUgPSBcIlRBQkxFXCI7XG59XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUZpZWxkIHtcbiAgcHJpdmF0ZSBfZmllbGRUeXBlOiBzdHJpbmcgPSBUZW1wbGF0ZUZpZWxkVHlwZXMuRklYRUQ7XG5cbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9wYWdlTnVtYmVyOiBudW1iZXI7XG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBQb2ludDtcbiAgcHJpdmF0ZSBfc2l6ZTogU2l6ZTtcbiAgcHJpdmF0ZSBfY29sdW1uczogVGVtcGxhdGVGaWVsZFRhYmxlU2VwYXJhdG9yW107XG4gIHByaXZhdGUgX2NoYW5nZWRTdWJqZWN0ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RlbXBsYXRlOiBUZW1wbGF0ZSkge1xuICAgIHRoaXMuX2NvbHVtbnMgPSBbXTtcbiAgfVxuXG4gIHJlYWRvbmx5IGNoYW5nZWQgPSB0aGlzLl9jaGFuZ2VkU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICBnZXQgY29sdW1ucygpOiBUZW1wbGF0ZUZpZWxkVGFibGVTZXBhcmF0b3JbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gIH1cblxuICBhZGRDb2x1bW4oY29sdW1uTmFtZTogc3RyaW5nLCBjb2x1bW5WYWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgY29sdW1uID0gbmV3IFRlbXBsYXRlRmllbGRUYWJsZVNlcGFyYXRvcihcbiAgICAgIGNvbHVtbk5hbWUgPT0gbnVsbCA/IHRoaXMuZ2V0TmV4dENvbHVtbk5hbWUoKSA6IGNvbHVtbk5hbWUsXG4gICAgICBjb2x1bW5WYWx1ZSxcbiAgICAgIHRoaXMuX2NoYW5nZWRTdWJqZWN0KTtcblxuICAgIHRoaXMuX2NvbHVtbnMucHVzaChjb2x1bW4pO1xuICAgIHRoaXMuX2NoYW5nZWRTdWJqZWN0Lm5leHQoXCJjb2x1bW5zXCIpO1xuICB9XG5cbiAgcmVtb3ZlQ29sdW1uKGNvbHVtbjogVGVtcGxhdGVGaWVsZFRhYmxlU2VwYXJhdG9yKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9jb2x1bW5zLmluZGV4T2YoY29sdW1uKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuXG4gICAgICB0aGlzLl9jb2x1bW5zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB0aGlzLl9jaGFuZ2VkU3ViamVjdC5uZXh0KFwiY29sdW1uc1wiKTtcbiAgICB9XG4gIH1cblxuICBnZXRDb2x1bW5CeU5hbWUoY29sdW1uTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCFjb2x1bW5OYW1lKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lID0gY29sdW1uTmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX2NvbHVtbnNbaV0ubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IGZpZWxkVHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWVsZFR5cGU7XG4gIH1cblxuICBzZXQgZmllbGRUeXBlKGZpZWxkVHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZmllbGRUeXBlID0gZmllbGRUeXBlO1xuICAgIHRoaXMuX2NoYW5nZWRTdWJqZWN0Lm5leHQoXCJmaWVsZFR5cGVcIik7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKTogVGVtcGxhdGUge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZTtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fY2hhbmdlZFN1YmplY3QubmV4dChcIm5hbWVcIik7XG4gIH1cblxuICBnZXQgcGFnZU51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZU51bWJlcjtcbiAgfVxuXG4gIHNldCBwYWdlTnVtYmVyKHBhZ2VOdW1iZXI6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xuICAgIHRoaXMuX2NoYW5nZWRTdWJqZWN0Lm5leHQoXCJwYWdlTnVtYmVyXCIpO1xuICB9XG5cbiAgZ2V0IHBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIHNldCBwb3NpdGlvbihwb3NpdGlvbjogUG9pbnQpIHtcbiAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuX2NoYW5nZWRTdWJqZWN0Lm5leHQoXCJwb3NpdGlvblwiKTtcbiAgfVxuXG4gIGdldCBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgc2V0IHNpemUoc2l6ZTogU2l6ZSkge1xuICAgIHRoaXMuX3NpemUgPSBzaXplO1xuICAgIHRoaXMuX2NoYW5nZWRTdWJqZWN0Lm5leHQoXCJzaXplXCIpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZFR5cGU6IHRoaXMuZmllbGRUeXBlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgcGFnZU51bWJlcjogdGhpcy5wYWdlTnVtYmVyLFxuICAgICAgeDogdGhpcy5wb3NpdGlvbi54LFxuICAgICAgeTogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgd2lkdGg6IHRoaXMuc2l6ZS53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5zaXplLmhlaWdodCxcbiAgICAgIGNvbHVtbnM6IHRoaXMuX2NvbHVtbnNcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXh0Q29sdW1uTmFtZSgpOiBzdHJpbmcge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwMDsgaSsrKSB7XG4gICAgICBjb25zdCBuYW1lID0gXCJUQzpcIiArIGkudG9TdHJpbmcoKTtcbiAgICAgIGlmICghdGhpcy5nZXRDb2x1bW5CeU5hbWUobmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlRmllbGRUYWJsZVNlcGFyYXRvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25hbWU6IHN0cmluZywgcHJpdmF0ZSBfdmFsdWU6IG51bWJlciwgcHJpdmF0ZSBfY2hhbmdlZFN1YmplY3Q6IFN1YmplY3Q8c3RyaW5nPikge1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX2NoYW5nZWRTdWJqZWN0Lm5leHQoXCJ0YWJsZS1zZXBhcmF0b3JcIik7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgIH07XG4gIH1cbn0iXX0=