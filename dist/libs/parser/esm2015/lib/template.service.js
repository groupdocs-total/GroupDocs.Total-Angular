/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Point, Size, Template, TemplateField } from './app-models';
import { interval, Subject } from 'rxjs';
import { throttle } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class TemplateService {
    constructor() {
        this._templatePattern = "parser.template.";
        this._currentTemplateChangedSubject = new Subject();
        this._templateAddedSubject = new Subject();
        this._templateRemovedSubject = new Subject();
        this.currentTemplateChanged = this._currentTemplateChangedSubject.asObservable();
        this.templateAddedSubject = this._templateAddedSubject.asObservable();
        this.templateRemovedSubject = this._templateRemovedSubject.asObservable();
        this._templates = [];
        this.loadTemplatesFromLocalStorage();
        this.createTemplate();
    }
    /**
     * @return {?}
     */
    get currentTemplate() {
        return this._currentTemplate;
    }
    /**
     * @return {?}
     */
    get templateIds() {
        return this._templates;
    }
    /**
     * @param {?} templateId
     * @return {?}
     */
    selectTemplate(templateId) {
        /** @type {?} */
        const template = this.getTemplateById(templateId);
        if (template) {
            this.setCurrentTemplate(template);
        }
    }
    /**
     * @return {?}
     */
    createTemplate() {
        /** @type {?} */
        const template = new Template();
        template.name = this.getNextTemplateName("Template");
        this.setCurrentTemplate(template);
    }
    /**
     * @param {?} templateId
     * @return {?}
     */
    renameTemplate(templateId) {
        if (!templateId) {
            return;
        }
        /** @type {?} */
        const exTemplate = this.getTemplateByName(templateId.name);
        if (exTemplate && exTemplate.id !== templateId.id) {
            throw Error('Template with the same name already exists');
        }
        if (templateId.id === this.currentTemplate.id) {
            this.currentTemplate.name = templateId.name;
        }
        else {
            /** @type {?} */
            const template = this.getTemplateById(templateId);
            template.name = templateId.name;
            this.saveTemplate(template);
        }
    }
    /**
     * @param {?} templateId
     * @return {?}
     */
    removeTemplate(templateId) {
        /** @type {?} */
        const template = this.getTemplateById(templateId);
        /** @type {?} */
        let index = this._templates.indexOf(template);
        if (index > -1) {
            this._templates.splice(index, 1);
        }
        this.onTemplateRemoved(template);
        if (template !== this._currentTemplate) {
            return;
        }
        if (this._templates.length === 0) {
            // Create an empty template if list is empty
            this.createTemplate();
        }
        else {
            // Select the upper template (or the first)
            if (index > 0) {
                index = index - 1;
            }
            this.setCurrentTemplate(this._templates[index]);
        }
    }
    /**
     * @param {?} templateId
     * @return {?}
     */
    serialize(templateId) {
        if (!templateId) {
            return;
        }
        /** @type {?} */
        const template = this.getTemplateById(templateId);
        if (!template) {
            return;
        }
        return JSON.stringify({
            name: template.name,
            fields: template.fields
        });
    }
    /**
     * @param {?} templateJson
     * @return {?}
     */
    deserialize(templateJson) {
        if (!templateJson) {
            return;
        }
        try {
            /** @type {?} */
            const template = this.loadTemplateFromJson(templateJson);
            template.id = Template.NotSaved;
            this.saveTemplate(template);
            this.selectTemplate(template);
        }
        catch (error) {
            throw Error('Error while parsing template file');
        }
    }
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    setCurrentTemplate(template) {
        if (this._currentTemplateModifiedSubscription) {
            this._currentTemplateModifiedSubscription.unsubscribe();
        }
        this._currentTemplate = template;
        this._currentTemplateModifiedSubscription = this._currentTemplate.modified
            .pipe(throttle((/**
         * @param {?} v
         * @return {?}
         */
        v => interval(500))))
            .subscribe((/**
         * @param {?} t
         * @return {?}
         */
        t => this.saveTemplate(t)));
        this._currentTemplateChangedSubject.next(this._currentTemplate);
    }
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    onTemplateAdded(template) {
        this._templateAddedSubject.next(template);
    }
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    onTemplateRemoved(template) {
        this._templateRemovedSubject.next(template);
        // remove from local storage
        for (let i = 0; i < localStorage.length; i++) {
            /** @type {?} */
            const key = localStorage.key(i);
            if (key === this._templatePattern + template.id) {
                localStorage.removeItem(key);
                return;
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    loadTemplatesFromLocalStorage() {
        for (let i = 0; i < localStorage.length; i++) {
            /** @type {?} */
            const key = localStorage.key(i);
            if (key.startsWith(this._templatePattern)) {
                /** @type {?} */
                const template = this.loadTemplateFromJson(localStorage.getItem(key));
                this._templates.push(template);
                this.onTemplateAdded(template);
            }
        }
    }
    /**
     * @private
     * @param {?} templateJson
     * @return {?}
     */
    loadTemplateFromJson(templateJson) {
        /** @type {?} */
        const obj = JSON.parse(templateJson);
        /** @type {?} */
        const templateName = this.getNextTemplateName(obj.name);
        /** @type {?} */
        const template = new Template();
        template.id = obj.id ? obj.id : this.getNextTemplateId();
        template.name = templateName;
        for (let i = 0; i < obj.fields.length; i++) {
            /** @type {?} */
            const objField = obj.fields[i];
            /** @type {?} */
            const field = new TemplateField(template);
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
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    saveTemplateToLocalStorage(template) {
        if (!template) {
            return;
        }
        /** @type {?} */
        const key = this._templatePattern + template.id;
        localStorage.setItem(key, JSON.stringify({
            name: template.name,
            id: template.id,
            fields: template.fields
        }));
    }
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    saveTemplate(template) {
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
    /**
     * @private
     * @param {?} templateId
     * @return {?}
     */
    getTemplateById(templateId) {
        if (!templateId) {
            return null;
        }
        for (let i = 0; i < this._templates.length; i++) {
            if (this._templates[i].id === templateId.id) {
                return this._templates[i];
            }
        }
        return null;
    }
    /**
     * @private
     * @param {?} templateName
     * @return {?}
     */
    getTemplateByName(templateName) {
        if (!templateName) {
            return null;
        }
        /** @type {?} */
        const name = templateName.toLocaleLowerCase();
        for (let i = 0; i < this._templates.length; i++) {
            if (this._templates[i].name.toLocaleLowerCase() === name) {
                return this._templates[i];
            }
        }
        return null;
    }
    /**
     * @private
     * @return {?}
     */
    getNextTemplateId() {
        /** @type {?} */
        const templateId = { id: "", name: "" };
        for (let i = 0; i < 1000; i++) {
            templateId.id = i.toString();
            if (!this.getTemplateById(templateId)) {
                return templateId.id;
            }
        }
        return null;
    }
    /**
     * @private
     * @param {?} baseName
     * @return {?}
     */
    getNextTemplateName(baseName) {
        for (let i = 0; i < 1000; i++) {
            /** @type {?} */
            const name = baseName + (i === 0 ? "" : " " + i.toString());
            if (!this.getTemplateByName(name)) {
                return name;
            }
        }
        return null;
    }
}
TemplateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TemplateService.ctorParameters = () => [];
/** @nocollapse */ TemplateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TemplateService_Factory() { return new TemplateService(); }, token: TemplateService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    TemplateService.prototype._templatePattern;
    /**
     * @type {?}
     * @private
     */
    TemplateService.prototype._currentTemplate;
    /**
     * @type {?}
     * @private
     */
    TemplateService.prototype._currentTemplateModifiedSubscription;
    /**
     * @type {?}
     * @private
     */
    TemplateService.prototype._templates;
    /**
     * @type {?}
     * @private
     */
    TemplateService.prototype._currentTemplateChangedSubject;
    /**
     * @type {?}
     * @private
     */
    TemplateService.prototype._templateAddedSubject;
    /**
     * @type {?}
     * @private
     */
    TemplateService.prototype._templateRemovedSubject;
    /** @type {?} */
    TemplateService.prototype.currentTemplateChanged;
    /** @type {?} */
    TemplateService.prototype.templateAddedSubject;
    /** @type {?} */
    TemplateService.prototype.templateRemovedSubject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFjLE1BQU0sY0FBYyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQWMsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBSzFDLE1BQU0sT0FBTyxlQUFlO0lBVzFCO1FBVmlCLHFCQUFnQixHQUFHLGtCQUFrQixDQUFDO1FBTS9DLG1DQUE4QixHQUFzQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2xFLDBCQUFxQixHQUFzQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pELDRCQUF1QixHQUF3QixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBUzVELDJCQUFzQixHQUF5QixJQUFJLENBQUMsOEJBQThCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEcseUJBQW9CLEdBQXlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2RiwyQkFBc0IsR0FBMkIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksRUFBRSxDQUFDO1FBUnBHLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO1FBRXJDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBTUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxJQUFJLFdB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UUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7O1lBL1JGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztJQUVDLDJDQUF1RDs7Ozs7SUFFdkQsMkNBQW1DOzs7OztJQUNuQywrREFBMkQ7Ozs7O0lBQzNELHFDQUErQjs7Ozs7SUFFL0IseURBQTBFOzs7OztJQUMxRSxnREFBaUU7Ozs7O0lBQ2pFLGtEQUFxRTs7SUFTckUsaURBQTJHOztJQUMzRywrQ0FBZ0c7O0lBQ2hHLGlEQUFzRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBvaW50LCBTaXplLCBUZW1wbGF0ZSwgVGVtcGxhdGVGaWVsZCwgVGVtcGxhdGVJZCB9IGZyb20gJy4vYXBwLW1vZGVscyc7XHJcbmltcG9ydCB7IGludGVydmFsLCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGhyb3R0bGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3RlbXBsYXRlUGF0dGVybiA9IFwicGFyc2VyLnRlbXBsYXRlLlwiO1xyXG5cclxuICBwcml2YXRlIF9jdXJyZW50VGVtcGxhdGU6IFRlbXBsYXRlO1xyXG4gIHByaXZhdGUgX2N1cnJlbnRUZW1wbGF0ZU1vZGlmaWVkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBfdGVtcGxhdGVzOiBUZW1wbGF0ZVtdO1xyXG5cclxuICBwcml2YXRlIF9jdXJyZW50VGVtcGxhdGVDaGFuZ2VkU3ViamVjdDogU3ViamVjdDxUZW1wbGF0ZT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgX3RlbXBsYXRlQWRkZWRTdWJqZWN0OiBTdWJqZWN0PFRlbXBsYXRlPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBfdGVtcGxhdGVSZW1vdmVkU3ViamVjdDogU3ViamVjdDxUZW1wbGF0ZUlkPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fdGVtcGxhdGVzID0gW107XHJcbiAgICB0aGlzLmxvYWRUZW1wbGF0ZXNGcm9tTG9jYWxTdG9yYWdlKCk7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVhZG9ubHkgY3VycmVudFRlbXBsYXRlQ2hhbmdlZDogT2JzZXJ2YWJsZTxUZW1wbGF0ZT4gPSB0aGlzLl9jdXJyZW50VGVtcGxhdGVDaGFuZ2VkU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICByZWFkb25seSB0ZW1wbGF0ZUFkZGVkU3ViamVjdDogT2JzZXJ2YWJsZTxUZW1wbGF0ZT4gPSB0aGlzLl90ZW1wbGF0ZUFkZGVkU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICByZWFkb25seSB0ZW1wbGF0ZVJlbW92ZWRTdWJqZWN0OiBPYnNlcnZhYmxlPFRlbXBsYXRlSWQ+ID0gdGhpcy5fdGVtcGxhdGVSZW1vdmVkU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgZ2V0IGN1cnJlbnRUZW1wbGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50VGVtcGxhdGU7XHJcbiAgfVxyXG5cclxuICBnZXQgdGVtcGxhdGVJZHMoKTogVGVtcGxhdGVJZFtdIHtcclxuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXM7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RUZW1wbGF0ZSh0ZW1wbGF0ZUlkOiBUZW1wbGF0ZUlkKSB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZ2V0VGVtcGxhdGVCeUlkKHRlbXBsYXRlSWQpO1xyXG4gICAgaWYgKHRlbXBsYXRlKSB7XHJcbiAgICAgIHRoaXMuc2V0Q3VycmVudFRlbXBsYXRlKHRlbXBsYXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZVRlbXBsYXRlKCkge1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUoKTtcclxuICAgIHRlbXBsYXRlLm5hbWUgPSB0aGlzLmdldE5leHRUZW1wbGF0ZU5hbWUoXCJUZW1wbGF0ZVwiKTtcclxuXHJcbiAgICB0aGlzLnNldEN1cnJlbnRUZW1wbGF0ZSh0ZW1wbGF0ZSk7XHJcbiAgfVxyXG5cclxuICByZW5hbWVUZW1wbGF0ZSh0ZW1wbGF0ZUlkOiBUZW1wbGF0ZUlkKSB7XHJcbiAgICBpZiAoIXRlbXBsYXRlSWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV4VGVtcGxhdGUgPSB0aGlzLmdldFRlbXBsYXRlQnlOYW1lKHRlbXBsYXRlSWQubmFtZSk7XHJcbiAgICBpZiAoZXhUZW1wbGF0ZSAmJiBleFRlbXBsYXRlLmlkICE9PSB0ZW1wbGF0ZUlkLmlkKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdUZW1wbGF0ZSB3aXRoIHRoZSBzYW1lIG5hbWUgYWxyZWFkeSBleGlzdHMnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGVtcGxhdGVJZC5pZCA9PT0gdGhpcy5jdXJyZW50VGVtcGxhdGUuaWQpIHtcclxuICAgICAgdGhpcy5jdXJyZW50VGVtcGxhdGUubmFtZSA9IHRlbXBsYXRlSWQubmFtZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZ2V0VGVtcGxhdGVCeUlkKHRlbXBsYXRlSWQpO1xyXG4gICAgICB0ZW1wbGF0ZS5uYW1lID0gdGVtcGxhdGVJZC5uYW1lO1xyXG5cclxuICAgICAgdGhpcy5zYXZlVGVtcGxhdGUodGVtcGxhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVGVtcGxhdGUodGVtcGxhdGVJZDogVGVtcGxhdGVJZCkge1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmdldFRlbXBsYXRlQnlJZCh0ZW1wbGF0ZUlkKTtcclxuICAgIGxldCBpbmRleCA9IHRoaXMuX3RlbXBsYXRlcy5pbmRleE9mKHRlbXBsYXRlKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICB0aGlzLl90ZW1wbGF0ZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uVGVtcGxhdGVSZW1vdmVkKHRlbXBsYXRlKTtcclxuXHJcbiAgICBpZiAodGVtcGxhdGUgIT09IHRoaXMuX2N1cnJlbnRUZW1wbGF0ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX3RlbXBsYXRlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgLy8gQ3JlYXRlIGFuIGVtcHR5IHRlbXBsYXRlIGlmIGxpc3QgaXMgZW1wdHlcclxuICAgICAgdGhpcy5jcmVhdGVUZW1wbGF0ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gU2VsZWN0IHRoZSB1cHBlciB0ZW1wbGF0ZSAob3IgdGhlIGZpcnN0KVxyXG4gICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgaW5kZXggPSBpbmRleCAtIDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0Q3VycmVudFRlbXBsYXRlKHRoaXMuX3RlbXBsYXRlc1tpbmRleF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VyaWFsaXplKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQpOiBzdHJpbmcge1xyXG4gICAgaWYgKCF0ZW1wbGF0ZUlkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZ2V0VGVtcGxhdGVCeUlkKHRlbXBsYXRlSWQpO1xyXG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgbmFtZTogdGVtcGxhdGUubmFtZSxcclxuICAgICAgZmllbGRzOiB0ZW1wbGF0ZS5maWVsZHNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVzZXJpYWxpemUodGVtcGxhdGVKc29uOiBzdHJpbmcpIHtcclxuICAgIGlmICghdGVtcGxhdGVKc29uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5sb2FkVGVtcGxhdGVGcm9tSnNvbih0ZW1wbGF0ZUpzb24pO1xyXG4gICAgICB0ZW1wbGF0ZS5pZCA9IFRlbXBsYXRlLk5vdFNhdmVkO1xyXG5cclxuICAgICAgdGhpcy5zYXZlVGVtcGxhdGUodGVtcGxhdGUpO1xyXG5cclxuICAgICAgdGhpcy5zZWxlY3RUZW1wbGF0ZSh0ZW1wbGF0ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ0Vycm9yIHdoaWxlIHBhcnNpbmcgdGVtcGxhdGUgZmlsZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDdXJyZW50VGVtcGxhdGUodGVtcGxhdGU6IFRlbXBsYXRlKSB7XHJcbiAgICBpZiAodGhpcy5fY3VycmVudFRlbXBsYXRlTW9kaWZpZWRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5fY3VycmVudFRlbXBsYXRlTW9kaWZpZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jdXJyZW50VGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxuXHJcbiAgICB0aGlzLl9jdXJyZW50VGVtcGxhdGVNb2RpZmllZFN1YnNjcmlwdGlvbiA9IHRoaXMuX2N1cnJlbnRUZW1wbGF0ZS5tb2RpZmllZFxyXG4gICAgICAucGlwZSh0aHJvdHRsZSh2ID0+IGludGVydmFsKDUwMCkpKVxyXG4gICAgICAuc3Vic2NyaWJlKHQgPT4gdGhpcy5zYXZlVGVtcGxhdGUodCkpO1xyXG5cclxuICAgIHRoaXMuX2N1cnJlbnRUZW1wbGF0ZUNoYW5nZWRTdWJqZWN0Lm5leHQodGhpcy5fY3VycmVudFRlbXBsYXRlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25UZW1wbGF0ZUFkZGVkKHRlbXBsYXRlOiBUZW1wbGF0ZSkge1xyXG4gICAgdGhpcy5fdGVtcGxhdGVBZGRlZFN1YmplY3QubmV4dCh0ZW1wbGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uVGVtcGxhdGVSZW1vdmVkKHRlbXBsYXRlOiBUZW1wbGF0ZSkge1xyXG4gICAgdGhpcy5fdGVtcGxhdGVSZW1vdmVkU3ViamVjdC5uZXh0KHRlbXBsYXRlKTtcclxuXHJcbiAgICAvLyByZW1vdmUgZnJvbSBsb2NhbCBzdG9yYWdlXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcclxuXHJcbiAgICAgIGlmIChrZXkgPT09IHRoaXMuX3RlbXBsYXRlUGF0dGVybiArIHRlbXBsYXRlLmlkKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZFRlbXBsYXRlc0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xyXG5cclxuICAgICAgaWYgKGtleS5zdGFydHNXaXRoKHRoaXMuX3RlbXBsYXRlUGF0dGVybikpIHtcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMubG9hZFRlbXBsYXRlRnJvbUpzb24obG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3RlbXBsYXRlcy5wdXNoKHRlbXBsYXRlKTtcclxuICAgICAgICB0aGlzLm9uVGVtcGxhdGVBZGRlZCh0ZW1wbGF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZFRlbXBsYXRlRnJvbUpzb24odGVtcGxhdGVKc29uOiBzdHJpbmcpOiBUZW1wbGF0ZSB7XHJcbiAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKHRlbXBsYXRlSnNvbik7XHJcblxyXG4gICAgY29uc3QgdGVtcGxhdGVOYW1lID0gdGhpcy5nZXROZXh0VGVtcGxhdGVOYW1lKG9iai5uYW1lKTtcclxuXHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZSgpO1xyXG4gICAgdGVtcGxhdGUuaWQgPSBvYmouaWQgPyBvYmouaWQgOiB0aGlzLmdldE5leHRUZW1wbGF0ZUlkKCk7XHJcbiAgICB0ZW1wbGF0ZS5uYW1lID0gdGVtcGxhdGVOYW1lO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmouZmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG9iakZpZWxkID0gb2JqLmZpZWxkc1tpXTtcclxuXHJcbiAgICAgIGNvbnN0IGZpZWxkID0gbmV3IFRlbXBsYXRlRmllbGQodGVtcGxhdGUpO1xyXG4gICAgICBpZiAob2JqRmllbGQuZmllbGRUeXBlKSB7XHJcbiAgICAgICAgZmllbGQuZmllbGRUeXBlID0gb2JqRmllbGQuZmllbGRUeXBlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmaWVsZC5uYW1lID0gb2JqRmllbGQubmFtZTtcclxuICAgICAgZmllbGQucGFnZU51bWJlciA9IG9iakZpZWxkLnBhZ2VOdW1iZXI7XHJcbiAgICAgIGZpZWxkLnBvc2l0aW9uID0gbmV3IFBvaW50KG9iakZpZWxkLngsIG9iakZpZWxkLnkpO1xyXG4gICAgICBmaWVsZC5zaXplID0gbmV3IFNpemUob2JqRmllbGQud2lkdGgsIG9iakZpZWxkLmhlaWdodCk7XHJcblxyXG4gICAgICBpZiAob2JqRmllbGQuY29sdW1ucykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgb2JqRmllbGQuY29sdW1ucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgZmllbGQuYWRkQ29sdW1uKG9iakZpZWxkLmNvbHVtbnNbal0ubmFtZSwgb2JqRmllbGQuY29sdW1uc1tqXS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZW1wbGF0ZS5hZGRGaWVsZChmaWVsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzYXZlVGVtcGxhdGVUb0xvY2FsU3RvcmFnZSh0ZW1wbGF0ZTogVGVtcGxhdGUpIHtcclxuICAgIGlmICghdGVtcGxhdGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGtleSA9IHRoaXMuX3RlbXBsYXRlUGF0dGVybiArIHRlbXBsYXRlLmlkO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBuYW1lOiB0ZW1wbGF0ZS5uYW1lLFxyXG4gICAgICBpZDogdGVtcGxhdGUuaWQsXHJcbiAgICAgIGZpZWxkczogdGVtcGxhdGUuZmllbGRzXHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNhdmVUZW1wbGF0ZSh0ZW1wbGF0ZTogVGVtcGxhdGUpIHtcclxuICAgIGlmICghdGVtcGxhdGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGVtcGxhdGUuaXNTdG9yZWQpIHtcclxuICAgICAgdGVtcGxhdGUuaWQgPSB0aGlzLmdldE5leHRUZW1wbGF0ZUlkKCk7XHJcbiAgICAgIHRoaXMuX3RlbXBsYXRlcy5wdXNoKHRlbXBsYXRlKTtcclxuICAgICAgdGhpcy5vblRlbXBsYXRlQWRkZWQodGVtcGxhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZCB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICB0aGlzLnNhdmVUZW1wbGF0ZVRvTG9jYWxTdG9yYWdlKHRlbXBsYXRlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VGVtcGxhdGVCeUlkKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQpIHtcclxuICAgIGlmICghdGVtcGxhdGVJZCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3RlbXBsYXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5fdGVtcGxhdGVzW2ldLmlkID09PSB0ZW1wbGF0ZUlkLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1tpXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRUZW1wbGF0ZUJ5TmFtZSh0ZW1wbGF0ZU5hbWU6IHN0cmluZykge1xyXG4gICAgaWYgKCF0ZW1wbGF0ZU5hbWUpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IHRlbXBsYXRlTmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90ZW1wbGF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuX3RlbXBsYXRlc1tpXS5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzW2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE5leHRUZW1wbGF0ZUlkKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZUlkID0geyBpZDogXCJcIiwgbmFtZTogXCJcIiB9O1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwMDsgaSsrKSB7XHJcbiAgICAgIHRlbXBsYXRlSWQuaWQgPSBpLnRvU3RyaW5nKCk7XHJcbiAgICAgIGlmICghdGhpcy5nZXRUZW1wbGF0ZUJ5SWQodGVtcGxhdGVJZCkpIHtcclxuICAgICAgICByZXR1cm4gdGVtcGxhdGVJZC5pZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXROZXh0VGVtcGxhdGVOYW1lKGJhc2VOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDAwOyBpKyspIHtcclxuICAgICAgY29uc3QgbmFtZSA9IGJhc2VOYW1lICsgKGkgPT09IDAgPyBcIlwiIDogXCIgXCIgKyBpLnRvU3RyaW5nKCkpO1xyXG4gICAgICBpZiAoIXRoaXMuZ2V0VGVtcGxhdGVCeU5hbWUobmFtZSkpIHtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=