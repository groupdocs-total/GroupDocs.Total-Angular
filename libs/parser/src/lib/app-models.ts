import { EventEmitter } from "events";
import { Observable, Subject } from 'rxjs';
import { PageModel } from "@groupdocs.examples.angular/common-components";

export class FileDescription {
  guid: string;
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
  name: string;
}

export class Template implements TemplateId {
  private _id: string = null;
  private _name: string = "template name";
  private _hasErrors = false;
  private _lastFieldId: number = -1;

  private fields = new Array<TemplateField>();
  private addSubject: Subject<TemplateField> = new Subject();
  private removeSubject: Subject<TemplateField> = new Subject();

  readonly added: Observable<TemplateField> = this.addSubject.asObservable();
  readonly removed: Observable<TemplateField> = this.removeSubject.asObservable();

  isStored() {
    return this.id != null;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
    this.save();
  }

  get isEmpty() {
    return this.fields.length == 0;
  }

  addField(field: TemplateField) {
    this.fields.push(field);
    this.save();

    this.addSubject.next(field);
  }

  removeField(field: TemplateField) {
    var index = this.fields.indexOf(field);
    if (index > -1) {
      this.fields.splice(index, 1);
    }

    this.save();

    this.removeSubject.next(field);
  }

  getFields() {
    return this.fields;
  }

  hasErrors() {
    return this._hasErrors;
  }

  static readonly TEMPLATE_MAX_ID = "TEMPLATEMAXID";
  static readonly TEMPLATE_PREFIX = "TEMPLATE_";
  static readonly FIELD_PREFIX = "FIELD_";

  static getTemplateIds(): Array<TemplateId> {
    let ids = new Array<TemplateId>();

    let i: number;
    for (i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith(Template.TEMPLATE_PREFIX)) {
        const id: TemplateId = {
          id: key.substr(Template.TEMPLATE_PREFIX.length),
          name: localStorage.getItem(key)
        }

        ids.push(id);
      }
    }

    return ids;
  }

  static load(id: string): Template {
    let template = new Template();
    template._id = id;
    template._name = localStorage[Template.TEMPLATE_PREFIX + id]

    const fieldPrefix = Template.FIELD_PREFIX + id;

    let i: number;
    for (i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith(fieldPrefix)) {
        const data = JSON.parse(localStorage.getItem(key));

        let field = new TemplateField(template);
        field.id = data.id;
        field.name = data.name;
        field.pageNumber = data.pageNumber;
        field.position = data.position;
        field.size = data.size;

        template.fields.push(field);

        template._lastFieldId = Math.max(template._lastFieldId, field.id);
      };
    }

    template.validate();

    return template;
  }

  createField(): TemplateField {
    let field = new TemplateField(this);
    field.id = this.getNextFieldId();
    field.name = "field" + field.id;
    field.size = new Size(60, 20);
    field.pageNumber = 1;
    field.position = new Point(10, 10);

    return field;
  }

  private getNextFieldId() {
    this._lastFieldId++;
    return this._lastFieldId;
  }

  save() {
    if (this.id != null) {
      this.remove();
    } else {
      const maxId = Number.parseInt(localStorage[Template.TEMPLATE_MAX_ID]);

      this._id = ((isNaN(maxId) ? 0 : maxId) + 1).toString();
      localStorage[Template.TEMPLATE_MAX_ID] = this._id;
    }

    localStorage[Template.TEMPLATE_PREFIX + this.id] = this.name;
    const fieldPrefix = Template.FIELD_PREFIX + this.id;

    this.fields.forEach(field => {
      localStorage.setItem(fieldPrefix + field.id, JSON.stringify(field));
    });
  }

  remove() {
    localStorage.removeItem(Template.TEMPLATE_PREFIX + this.id);
    const fieldPrefix = Template.FIELD_PREFIX + this.id;

    let i: number;
    for (i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key.startsWith(fieldPrefix)) {
        localStorage.removeItem(key);
      }
    }

    if (localStorage.length == 1) {
      localStorage.removeItem(Template.TEMPLATE_MAX_ID);
    }
  }

  validate() {
    let hasErrors = false;
    let m = new Map<string, TemplateField>();

    let i: number;
    for (i = 0; i < this.fields.length; i++) {
      this.fields[i].error = null;
    }

    for (i = 0; i < this.fields.length; i++) {
      let f = this.fields[i];
      if (f.name == null || f.name.length == 0) {
        f.error = "Field name can't be empty";
      }

      if (m.has(f.name)) {
        f.error = "Field name must be unique";
        m.get(f.name).error = f.error;
        hasErrors = true;
      } else {
        m.set(f.name, f);
      }
    }

    this._hasErrors = hasErrors;
  }
}

export class TemplateField {
  private _name: string;
  private _error: string;

  id: number;
  pageNumber: number;
  position: Point;
  size: Size;

  constructor(private template: Template) {
  }

  set error(error: string) {
    this._error = error;
  }

  get error() {
    return this._error;
  }

  set name(name: string) {
    this._name = name;

    if (this.template) {
      this.template.validate();
    }
  }

  get name() {
    return this._name;
  }

  remove() {
    if (this.template) {
      this.template.removeField(this);
    }
  }

  update() {
    this.template.save();
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      pageNumber: this.pageNumber,
      position: this.position,
      size: this.size
    };
  }
}