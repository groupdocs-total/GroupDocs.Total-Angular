import { Injectable, TemplateRef } from '@angular/core';
import { Point, Size, Template, TemplateField, TemplateId } from './app-models';
import { interval, Observable, Subject, Subscription } from 'rxjs';
import { throttle } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  private readonly _templatePattern = "parser.template.";

  private _currentTemplate: Template;
  private _currentTemplateModifiedSubscription: Subscription;
  private _templates: Template[];

  private _currentTemplateChangedSubject: Subject<Template> = new Subject();
  private _templateAddedSubject: Subject<Template> = new Subject();
  private _templateRemovedSubject: Subject<TemplateId> = new Subject();

  constructor() {
    this._templates = [];
    this.loadTemplatesFromLocalStorage();

    this.createTemplate();
  }

  readonly currentTemplateChanged: Observable<Template> = this._currentTemplateChangedSubject.asObservable();
  readonly templateAddedSubject: Observable<Template> = this._templateAddedSubject.asObservable();
  readonly templateRemovedSubject: Observable<TemplateId> = this._templateRemovedSubject.asObservable();

  get currentTemplate() {
    return this._currentTemplate;
  }

  get templateIds(): TemplateId[] {
    return this._templates;
  }

  selectTemplate(templateId: TemplateId) {
    const template = this.getTemplateById(templateId);
    if (template) {
      this.setCurrentTemplate(template);
    }
  }

  createTemplate() {
    let template = new Template();
    template.name = this.getNextTemplateName("Template");

    this.setCurrentTemplate(template);
  }

  renameTemplate(templateId: TemplateId) {
    if (!templateId) {
      return;
    }

    const exTemplate = this.getTemplateByName(templateId.name);
    if (exTemplate && exTemplate.id != templateId.id) {
      throw 'Template with the same name already exists';
    }

    if (templateId.id == this.currentTemplate.id) {
      this.currentTemplate.name = templateId.name;
    }
    else {
      var template = this.getTemplateById(templateId);
      template.name = templateId.name;

      this.saveTemplate(template);
    }
  }

  removeTemplate(templateId: TemplateId) {
    const template = this.getTemplateById(templateId);
    let index = this._templates.indexOf(template);

    if (index > -1) {
      this._templates.splice(index, 1);
    }

    this.onTemplateRemoved(template);

    if (template != this._currentTemplate) {
      return;
    }

    if (this._templates.length == 0) {
      // Create an empty template if list is empty
      this.createTemplate();
    } else {
      // Select the upper template (or the first)
      if (index > 0) {
        index = index - 1;
      }

      this.setCurrentTemplate(this._templates[index]);
    }
  }

  serialize(templateId: TemplateId): string {
    if (!templateId) {
      return;
    }

    const template = this.getTemplateById(templateId);
    if (!template) {
      return;
    }

    return JSON.stringify({
      name: template.name,
      fields: template.fields
    });
  }

  deserialize(templateJson: string) {
    if (!templateJson) {
      return;
    }
    try {
      let template = this.loadTemplateFromJson(templateJson);
      template.id = Template.NotSaved;

      this.saveTemplate(template);

      this.selectTemplate(template);
    }
    catch (error) {
      throw 'Error while parsing template file';
    }
  }

  private setCurrentTemplate(template: Template) {
    if (this._currentTemplateModifiedSubscription) {
      this._currentTemplateModifiedSubscription.unsubscribe();
    }

    this._currentTemplate = template;

    this._currentTemplateModifiedSubscription = this._currentTemplate.modified
      .pipe(throttle(v => interval(500)))
      .subscribe(template => this.saveTemplate(template));

    this._currentTemplateChangedSubject.next(this._currentTemplate);
  }

  private onTemplateAdded(template: Template) {
    this._templateAddedSubject.next(template);
  }

  private onTemplateRemoved(template: Template) {
    this._templateRemovedSubject.next(template);

    // remove from local storage

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key == this._templatePattern + template.id) {
        localStorage.removeItem(key);
        return;
      }
    }
  }

  private loadTemplatesFromLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key.startsWith(this._templatePattern)) {
        const template = this.loadTemplateFromJson(localStorage.getItem(key));

        this._templates.push(template);
        this.onTemplateAdded(template);
      }
    }
  }

  private loadTemplateFromJson(templateJson: string): Template {
    const obj = JSON.parse(templateJson);

    const templateName = this.getNextTemplateName(obj.name);

    let template = new Template();
    template.id = obj.id ? obj.id : this.getNextTemplateId();
    template.name = templateName;
    for (let i = 0; i < obj.fields.length; i++) {
      const objField = obj.fields[i];

      let field = new TemplateField(template);
      if (objField.fieldType) {
        field.fieldType = objField.fieldType;
      }

      field.name = objField.name;
      field.pageNumber = objField.pageNumber;
      field.position = new Point(objField.x, objField.y);
      field.size = new Size(objField.width, objField.height);

      if (objField.columns) {
        for (let j = 0; j < objField.columns.length; j++) {
          field.addColumn(objField.columns[j].name, objField.columns[j].value);
        }
      }

      template.addField(field);
    }

    return template;
  }

  private saveTemplateToLocalStorage(template: Template) {
    if (!template) {
      return;
    }

    const key = this._templatePattern + template.id;

    localStorage.setItem(key, JSON.stringify({
      name: template.name,
      id: template.id,
      fields: template.fields
    }));
  }

  private saveTemplate(template: Template) {
    if (!template) {
      return;
    }

    if (!template.isStored) {
      template.id = this.getNextTemplateId();
      this._templates.push(template);
      this.onTemplateAdded(template);
    }

    // add to local storage
    this.saveTemplateToLocalStorage(template);
  }

  private getTemplateById(templateId: TemplateId) {
    if (!templateId) {
      return null;
    }

    for (let i = 0; i < this._templates.length; i++) {
      if (this._templates[i].id == templateId.id) {
        return this._templates[i];
      }
    }

    return null;
  }

  private getTemplateByName(templateName: string) {
    if (!templateName) {
      return null;
    }

    const name = templateName.toLocaleLowerCase();
    for (let i = 0; i < this._templates.length; i++) {
      if (this._templates[i].name.toLocaleLowerCase() == name) {
        return this._templates[i];
      }
    }

    return null;
  }

  private getNextTemplateId(): string {
    let templateId = { id: "", name: "" };

    for (let i = 0; i < 1000; i++) {
      templateId.id = i.toString();
      if (!this.getTemplateById(templateId)) {
        return templateId.id;
      }
    }

    return null;
  }

  private getNextTemplateName(baseName: string): string {
    for (let i = 0; i < 1000; i++) {
      const name = baseName + (i == 0 ? "" : " " + i.toString());
      if (!this.getTemplateByName(name)) {
        return name;
      }
    }

    return null;
  }
}
