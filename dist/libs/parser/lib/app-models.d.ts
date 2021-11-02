import { Observable, Subject } from 'rxjs';
import { PageModel } from "@groupdocs.examples.angular/common-components";
export declare class TableValue {
    constructor(obj: any);
    readonly rows: Array<string[]>;
}
export declare class OperationState<T> {
    private _state;
    private _prompt;
    private _error;
    private _result;
    enabled: boolean;
    readonly isReadyToRun: boolean;
    readonly isFailed: boolean;
    readonly isCompleted: boolean;
    readonly isProcessing: boolean;
    prompt: string;
    error: string;
    result: T;
    execute(): void;
}
export declare class DocumentDescriptionResponse {
    message: string;
    result: DocumentDescription;
}
export declare class ParseByTemplateResponse {
    message: string;
    data: ParseResult[];
}
export declare class SourceFile {
    guid: string;
    password: string;
    constructor(guid: string, password: string);
}
export declare class DocumentDescription extends SourceFile {
    pages: DocumentPageDescription[];
}
export declare class DocumentPageDescription {
    number: number;
    width: number;
    height: number;
    data: string;
}
export declare class FileDescription {
    pages: PageModel[];
}
export declare class ParseResult {
    name: string;
    value: string;
}
export declare class Point {
    readonly x: number;
    readonly y: number;
    constructor(x: number, y: number);
}
export declare class Size {
    readonly width: number;
    readonly height: number;
    constructor(width: number, height: number);
}
export interface TemplateId {
    readonly id: string;
    readonly name: string;
}
export declare class Template implements TemplateId {
    static readonly NotSaved = "NotSaved";
    private _id;
    private _name;
    private _fields;
    private _addFieldSubject;
    private _removeFieldSubject;
    private _modifiedSubject;
    private _fieldChangedSubscriptions;
    constructor();
    readonly addedField: Observable<TemplateField>;
    readonly removedField: Observable<TemplateField>;
    readonly modified: Observable<Template>;
    id: string;
    name: string;
    readonly fields: TemplateField[];
    readonly isStored: boolean;
    readonly isEmpty: boolean;
    addField(field: TemplateField): void;
    removeField(field: TemplateField): void;
    removeFieldByName(fieldName: string): void;
    getFieldByName(fieldName: string): TemplateField;
    createField(baseName: string): TemplateField;
    private getNextFieldName;
    private notifyModified;
}
export declare class TemplateFieldTypes {
    static readonly FIXED = "FIXED";
    static readonly TABLE = "TABLE";
}
export declare class TemplateField {
    private _template;
    private _fieldType;
    private _name;
    private _pageNumber;
    private _position;
    private _size;
    private _columns;
    private _changedSubject;
    constructor(_template: Template);
    readonly changed: Observable<string>;
    readonly columns: TemplateFieldTableSeparator[];
    addColumn(columnName: string, columnValue: number): void;
    removeColumn(column: TemplateFieldTableSeparator): void;
    getColumnByName(columnName: string): TemplateFieldTableSeparator;
    fieldType: string;
    readonly template: Template;
    name: string;
    pageNumber: number;
    position: Point;
    size: Size;
    toJSON(): {
        fieldType: string;
        name: string;
        pageNumber: number;
        x: number;
        y: number;
        width: number;
        height: number;
        columns: TemplateFieldTableSeparator[];
    };
    private getNextColumnName;
}
export declare class TemplateFieldTableSeparator {
    private _name;
    private _value;
    private _changedSubject;
    constructor(_name: string, _value: number, _changedSubject: Subject<string>);
    readonly name: string;
    value: number;
    toJSON(): {
        name: string;
        value: number;
    };
}
