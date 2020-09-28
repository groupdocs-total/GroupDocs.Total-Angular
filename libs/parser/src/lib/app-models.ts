import { EventEmitter } from "events";
import { Observable, Subject } from 'rxjs';

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
          id : key.substr(Template.TEMPLATE_PREFIX.length),
          name : localStorage.getItem(key)
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
      };
    }

    return template;
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
}

export class TemplateField {
  id: number;
  name: string;
  pageNumber: number;
  position: Point;
  size: Size;

  constructor(private template: Template) {
  }

  remove() {
    this.template.removeField(this);
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