import { EventEmitter } from "events";
import { Observable, Subject, Subscription } from 'rxjs';
import { PageModel } from "@groupdocs.examples.angular/common-components";
import { __values } from "tslib";

export class HelpTopic {
  title: string;
  image: string;
  text: string;
}

export class TableValue {
  constructor(obj: any) {
    for (let i = 0; i < obj.length; i++) {
      const row: string[] = [];
      if (obj[i]) {
        for (let j = 0; j < obj[i].length; j++) {
          row.push(obj[i][j]);
        }
      }

      this.rows.push(row);
    }
  }

  readonly rows: Array<string[]> = [];
}

export class OperationState<T> {
  private _state = 0;
  private _prompt: string;
  private _error: string;
  private _result: T;

  enabled = true;

  get isReadyToRun() {
    return this._state === 0;
  }

  get isFailed() {
    return this._state === -1;
  }

  get isCompleted() {
    return this._state === 1;
  }

  get isProcessing() {
    return this._state == null;
  }

  get prompt() {
    return this._prompt;
  }

  set prompt(prompt: string) {
    this._prompt = prompt;
    this._error = null;
    this._result = null;
    this._state = 0;
  }

  get error() {
    return this._error;
  }

  set error(error: string) {
    this._prompt = null;
    this._error = error;
    this._result = null;
    this._state = -1;
  }

  get result() {
    return this._result;
  }

  set result(result: T) {
    this._prompt = null;
    this._error = null;
    this._result = result;
    this._state = 1;
  }

  execute() {
    this._state = null;
  }
}

export class DocumentDescriptionResponse {
  message: string;
  result: DocumentDescription;
}

export class ParseByTemplateResponse {
  message: string;
  data: ParseResult[];
}

export class SourceFile {
  constructor(public guid: string, public password: string) {
  }
}

export class DocumentDescription extends SourceFile {
  pages: DocumentPageDescription[];
}

export class DocumentPageDescription {
  number: number;
  width: number;
  height: number;
  data: string;
}

export class FileDescription {
  pages: PageModel[];
}

export class ParseResult {
  name: string;
  value: string;
}

export class Point {
  readonly x: number;
  readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export class Size {
  readonly width: number;
  readonly height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

export interface TemplateId {
  readonly id: string;
  readonly name: string;
}

export class Template implements TemplateId {
  static readonly NotSaved = "NotSaved";

  private _id: string = null;
  private _name = "template name";
  private _fields: TemplateField[] = [];

  private _addFieldSubject: Subject<TemplateField> = new Subject();
  private _removeFieldSubject: Subject<TemplateField> = new Subject();
  private _modifiedSubject: Subject<Template> = new Subject();

  private _fieldChangedSubscriptions = new Map<TemplateField, Subscription>();

  constructor() {
    this._id = Template.NotSaved;
  }

  readonly addedField: Observable<TemplateField> = this._addFieldSubject.asObservable();
  readonly removedField: Observable<TemplateField> = this._removeFieldSubject.asObservable();
  readonly modified: Observable<Template> = this._modifiedSubject.asObservable();

  get id() {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
    this.notifyModified();
  }

  get fields(): TemplateField[] {
    return this._fields;
  }

  get isStored() {
    return this._id !== Template.NotSaved;
  }

  get isEmpty() {
    return this._fields.length === 0;
  }

  addField(field: TemplateField) {
    this._fieldChangedSubscriptions.set(
      field,
      field.changed.subscribe(p => this.notifyModified())
    );

    this._fields.push(field);
    this._addFieldSubject.next(field);
    this.notifyModified();
  }

  removeField(field: TemplateField) {
    const index = this._fields.indexOf(field);
    if (index > -1) {
      this._fieldChangedSubscriptions.get(field).unsubscribe();
      this._fieldChangedSubscriptions.delete(field);
      this._fields.splice(index, 1);
    }

    this._removeFieldSubject.next(field);
    this.notifyModified();
  }

  removeFieldByName(fieldName: string) {
    const field = this.getFieldByName(fieldName);
    if (field) {
      this.removeField(field);
    }
  }

  getFieldByName(fieldName: string) {
    if (!fieldName) {
      return null;
    }

    const name = fieldName.toLocaleLowerCase();
    for (let i = 0; i < this._fields.length; i++) {
      if (this._fields[i].name.toLocaleLowerCase() === name) {
        return this._fields[i];
      }
    }

    return null;
  }

  createField(baseName: string): TemplateField {
    const field = new TemplateField(this);
    field.name = this.getNextFieldName(baseName);
    field.size = new Size(60, 20);
    field.pageNumber = 1;
    field.position = new Point(10, 10);

    return field;
  }

  private getNextFieldName(baseName: string): string {
    for (let i = 0; i < 1000; i++) {
      const name = baseName + i.toString();
      if (!this.getFieldByName(name)) {
        return name;
      }
    }

    return null;
  }

  private notifyModified() {
    this._modifiedSubject.next(this);
  }
}

export class TemplateFieldTypes {
  static readonly FIXED = "FIXED";
  static readonly TABLE = "TABLE";
}

export class TemplateField {
  private _fieldType: string = TemplateFieldTypes.FIXED;

  private _name: string;
  private _pageNumber: number;
  private _position: Point;
  private _size: Size;
  private _columns: TemplateFieldTableSeparator[];
  private _changedSubject = new Subject<string>();

  constructor(private _template: Template) {
    this._columns = [];
  }

  readonly changed = this._changedSubject.asObservable();

  get columns(): TemplateFieldTableSeparator[] {
    return this._columns;
  }

  addColumn(columnName: string, columnValue: number) {
    const column = new TemplateFieldTableSeparator(
      columnName == null ? this.getNextColumnName() : columnName,
      columnValue,
      this._changedSubject);

    this._columns.push(column);
    this._changedSubject.next("columns");
  }

  removeColumn(column: TemplateFieldTableSeparator) {
    const index = this._columns.indexOf(column);
    if (index > -1) {

      this._columns.splice(index, 1);
      this._changedSubject.next("columns");
    }
  }

  getColumnByName(columnName: string) {
    if (!columnName) {
      return null;
    }

    const name = columnName.toLocaleLowerCase();
    for (let i = 0; i < this._columns.length; i++) {
      if (this._columns[i].name.toLocaleLowerCase() === name) {
        return this._columns[i];
      }
    }

    return null;
  }

  get fieldType(): string {
    return this._fieldType;
  }

  set fieldType(fieldType: string) {
    this._fieldType = fieldType;
    this._changedSubject.next("fieldType");
  }

  get template(): Template {
    return this._template;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
    this._changedSubject.next("name");
  }

  get pageNumber() {
    return this._pageNumber;
  }

  set pageNumber(pageNumber: number) {
    this._pageNumber = pageNumber;
    this._changedSubject.next("pageNumber");
  }

  get position() {
    return this._position;
  }

  set position(position: Point) {
    this._position = position;
    this._changedSubject.next("position");
  }

  get size() {
    return this._size;
  }

  set size(size: Size) {
    this._size = size;
    this._changedSubject.next("size");
  }

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

  private getNextColumnName(): string {
    for (let i = 0; i < 1000; i++) {
      const name = "TC:" + i.toString();
      if (!this.getColumnByName(name)) {
        return name;
      }
    }

    return null;
  }
}

export class TemplateFieldTableSeparator {
  constructor(private _name: string, private _value: number, private _changedSubject: Subject<string>) {
  }

  get name() {
    return this._name;
  }

  get value() {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
    this._changedSubject.next("table-separator");
  }

  toJSON() {
    return {
      name: this.name,
      value: this.value,
    };
  }
}