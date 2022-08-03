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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFjLE1BQU0sY0FBYyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQWMsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBSzFDLE1BQU0sT0FBTyxlQUFlO0lBVzFCO1FBVmlCLHFCQUFnQixHQUFHLGtCQUFrQixDQUFDO1FBTS9DLG1DQUE4QixHQUFzQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2xFLDBCQUFxQixHQUFzQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pELDRCQUF1QixHQUF3QixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBUzVELDJCQUFzQixHQUF5QixJQUFJLENBQUMsOEJBQThCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEcseUJBQW9CLEdBQXlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2RiwyQkFBc0IsR0FBMkIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksRUFBRSxDQUFDO1FBUnBHLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO1FBRXJDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBTUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxJQUFJLFdB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UUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7O1lBL1JGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztJQUVDLDJDQUF1RDs7Ozs7SUFFdkQsMkNBQW1DOzs7OztJQUNuQywrREFBMkQ7Ozs7O0lBQzNELHFDQUErQjs7Ozs7SUFFL0IseURBQTBFOzs7OztJQUMxRSxnREFBaUU7Ozs7O0lBQ2pFLGtEQUFxRTs7SUFTckUsaURBQTJHOztJQUMzRywrQ0FBZ0c7O0lBQ2hHLGlEQUFzRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb2ludCwgU2l6ZSwgVGVtcGxhdGUsIFRlbXBsYXRlRmllbGQsIFRlbXBsYXRlSWQgfSBmcm9tICcuL2FwcC1tb2RlbHMnO1xuaW1wb3J0IHsgaW50ZXJ2YWwsIE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGhyb3R0bGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3RlbXBsYXRlUGF0dGVybiA9IFwicGFyc2VyLnRlbXBsYXRlLlwiO1xuXG4gIHByaXZhdGUgX2N1cnJlbnRUZW1wbGF0ZTogVGVtcGxhdGU7XG4gIHByaXZhdGUgX2N1cnJlbnRUZW1wbGF0ZU1vZGlmaWVkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3RlbXBsYXRlczogVGVtcGxhdGVbXTtcblxuICBwcml2YXRlIF9jdXJyZW50VGVtcGxhdGVDaGFuZ2VkU3ViamVjdDogU3ViamVjdDxUZW1wbGF0ZT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIF90ZW1wbGF0ZUFkZGVkU3ViamVjdDogU3ViamVjdDxUZW1wbGF0ZT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIF90ZW1wbGF0ZVJlbW92ZWRTdWJqZWN0OiBTdWJqZWN0PFRlbXBsYXRlSWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSBbXTtcbiAgICB0aGlzLmxvYWRUZW1wbGF0ZXNGcm9tTG9jYWxTdG9yYWdlKCk7XG5cbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlKCk7XG4gIH1cblxuICByZWFkb25seSBjdXJyZW50VGVtcGxhdGVDaGFuZ2VkOiBPYnNlcnZhYmxlPFRlbXBsYXRlPiA9IHRoaXMuX2N1cnJlbnRUZW1wbGF0ZUNoYW5nZWRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICByZWFkb25seSB0ZW1wbGF0ZUFkZGVkU3ViamVjdDogT2JzZXJ2YWJsZTxUZW1wbGF0ZT4gPSB0aGlzLl90ZW1wbGF0ZUFkZGVkU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgcmVhZG9ubHkgdGVtcGxhdGVSZW1vdmVkU3ViamVjdDogT2JzZXJ2YWJsZTxUZW1wbGF0ZUlkPiA9IHRoaXMuX3RlbXBsYXRlUmVtb3ZlZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgZ2V0IGN1cnJlbnRUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFRlbXBsYXRlO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlSWRzKCk6IFRlbXBsYXRlSWRbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlcztcbiAgfVxuXG4gIHNlbGVjdFRlbXBsYXRlKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZ2V0VGVtcGxhdGVCeUlkKHRlbXBsYXRlSWQpO1xuICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgdGhpcy5zZXRDdXJyZW50VGVtcGxhdGUodGVtcGxhdGUpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZVRlbXBsYXRlKCkge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKCk7XG4gICAgdGVtcGxhdGUubmFtZSA9IHRoaXMuZ2V0TmV4dFRlbXBsYXRlTmFtZShcIlRlbXBsYXRlXCIpO1xuXG4gICAgdGhpcy5zZXRDdXJyZW50VGVtcGxhdGUodGVtcGxhdGUpO1xuICB9XG5cbiAgcmVuYW1lVGVtcGxhdGUodGVtcGxhdGVJZDogVGVtcGxhdGVJZCkge1xuICAgIGlmICghdGVtcGxhdGVJZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGV4VGVtcGxhdGUgPSB0aGlzLmdldFRlbXBsYXRlQnlOYW1lKHRlbXBsYXRlSWQubmFtZSk7XG4gICAgaWYgKGV4VGVtcGxhdGUgJiYgZXhUZW1wbGF0ZS5pZCAhPT0gdGVtcGxhdGVJZC5pZCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ1RlbXBsYXRlIHdpdGggdGhlIHNhbWUgbmFtZSBhbHJlYWR5IGV4aXN0cycpO1xuICAgIH1cblxuICAgIGlmICh0ZW1wbGF0ZUlkLmlkID09PSB0aGlzLmN1cnJlbnRUZW1wbGF0ZS5pZCkge1xuICAgICAgdGhpcy5jdXJyZW50VGVtcGxhdGUubmFtZSA9IHRlbXBsYXRlSWQubmFtZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZ2V0VGVtcGxhdGVCeUlkKHRlbXBsYXRlSWQpO1xuICAgICAgdGVtcGxhdGUubmFtZSA9IHRlbXBsYXRlSWQubmFtZTtcblxuICAgICAgdGhpcy5zYXZlVGVtcGxhdGUodGVtcGxhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVRlbXBsYXRlKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZ2V0VGVtcGxhdGVCeUlkKHRlbXBsYXRlSWQpO1xuICAgIGxldCBpbmRleCA9IHRoaXMuX3RlbXBsYXRlcy5pbmRleE9mKHRlbXBsYXRlKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLl90ZW1wbGF0ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uVGVtcGxhdGVSZW1vdmVkKHRlbXBsYXRlKTtcblxuICAgIGlmICh0ZW1wbGF0ZSAhPT0gdGhpcy5fY3VycmVudFRlbXBsYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3RlbXBsYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIENyZWF0ZSBhbiBlbXB0eSB0ZW1wbGF0ZSBpZiBsaXN0IGlzIGVtcHR5XG4gICAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNlbGVjdCB0aGUgdXBwZXIgdGVtcGxhdGUgKG9yIHRoZSBmaXJzdClcbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgaW5kZXggPSBpbmRleCAtIDE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0Q3VycmVudFRlbXBsYXRlKHRoaXMuX3RlbXBsYXRlc1tpbmRleF0pO1xuICAgIH1cbiAgfVxuXG4gIHNlcmlhbGl6ZSh0ZW1wbGF0ZUlkOiBUZW1wbGF0ZUlkKTogc3RyaW5nIHtcbiAgICBpZiAoIXRlbXBsYXRlSWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZ2V0VGVtcGxhdGVCeUlkKHRlbXBsYXRlSWQpO1xuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbmFtZTogdGVtcGxhdGUubmFtZSxcbiAgICAgIGZpZWxkczogdGVtcGxhdGUuZmllbGRzXG4gICAgfSk7XG4gIH1cblxuICBkZXNlcmlhbGl6ZSh0ZW1wbGF0ZUpzb246IHN0cmluZykge1xuICAgIGlmICghdGVtcGxhdGVKc29uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMubG9hZFRlbXBsYXRlRnJvbUpzb24odGVtcGxhdGVKc29uKTtcbiAgICAgIHRlbXBsYXRlLmlkID0gVGVtcGxhdGUuTm90U2F2ZWQ7XG5cbiAgICAgIHRoaXMuc2F2ZVRlbXBsYXRlKHRlbXBsYXRlKTtcblxuICAgICAgdGhpcy5zZWxlY3RUZW1wbGF0ZSh0ZW1wbGF0ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgRXJyb3IoJ0Vycm9yIHdoaWxlIHBhcnNpbmcgdGVtcGxhdGUgZmlsZScpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q3VycmVudFRlbXBsYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZSkge1xuICAgIGlmICh0aGlzLl9jdXJyZW50VGVtcGxhdGVNb2RpZmllZFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fY3VycmVudFRlbXBsYXRlTW9kaWZpZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jdXJyZW50VGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuICAgIHRoaXMuX2N1cnJlbnRUZW1wbGF0ZU1vZGlmaWVkU3Vic2NyaXB0aW9uID0gdGhpcy5fY3VycmVudFRlbXBsYXRlLm1vZGlmaWVkXG4gICAgICAucGlwZSh0aHJvdHRsZSh2ID0+IGludGVydmFsKDUwMCkpKVxuICAgICAgLnN1YnNjcmliZSh0ID0+IHRoaXMuc2F2ZVRlbXBsYXRlKHQpKTtcblxuICAgIHRoaXMuX2N1cnJlbnRUZW1wbGF0ZUNoYW5nZWRTdWJqZWN0Lm5leHQodGhpcy5fY3VycmVudFRlbXBsYXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgb25UZW1wbGF0ZUFkZGVkKHRlbXBsYXRlOiBUZW1wbGF0ZSkge1xuICAgIHRoaXMuX3RlbXBsYXRlQWRkZWRTdWJqZWN0Lm5leHQodGVtcGxhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBvblRlbXBsYXRlUmVtb3ZlZCh0ZW1wbGF0ZTogVGVtcGxhdGUpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZVJlbW92ZWRTdWJqZWN0Lm5leHQodGVtcGxhdGUpO1xuXG4gICAgLy8gcmVtb3ZlIGZyb20gbG9jYWwgc3RvcmFnZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG5cbiAgICAgIGlmIChrZXkgPT09IHRoaXMuX3RlbXBsYXRlUGF0dGVybiArIHRlbXBsYXRlLmlkKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWRUZW1wbGF0ZXNGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuXG4gICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgodGhpcy5fdGVtcGxhdGVQYXR0ZXJuKSkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMubG9hZFRlbXBsYXRlRnJvbUpzb24obG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG5cbiAgICAgICAgdGhpcy5fdGVtcGxhdGVzLnB1c2godGVtcGxhdGUpO1xuICAgICAgICB0aGlzLm9uVGVtcGxhdGVBZGRlZCh0ZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkVGVtcGxhdGVGcm9tSnNvbih0ZW1wbGF0ZUpzb246IHN0cmluZyk6IFRlbXBsYXRlIHtcbiAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKHRlbXBsYXRlSnNvbik7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZU5hbWUgPSB0aGlzLmdldE5leHRUZW1wbGF0ZU5hbWUob2JqLm5hbWUpO1xuXG4gICAgY29uc3QgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUoKTtcbiAgICB0ZW1wbGF0ZS5pZCA9IG9iai5pZCA/IG9iai5pZCA6IHRoaXMuZ2V0TmV4dFRlbXBsYXRlSWQoKTtcbiAgICB0ZW1wbGF0ZS5uYW1lID0gdGVtcGxhdGVOYW1lO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqLmZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgb2JqRmllbGQgPSBvYmouZmllbGRzW2ldO1xuXG4gICAgICBjb25zdCBmaWVsZCA9IG5ldyBUZW1wbGF0ZUZpZWxkKHRlbXBsYXRlKTtcbiAgICAgIGlmIChvYmpGaWVsZC5maWVsZFR5cGUpIHtcbiAgICAgICAgZmllbGQuZmllbGRUeXBlID0gb2JqRmllbGQuZmllbGRUeXBlO1xuICAgICAgfVxuXG4gICAgICBmaWVsZC5uYW1lID0gb2JqRmllbGQubmFtZTtcbiAgICAgIGZpZWxkLnBhZ2VOdW1iZXIgPSBvYmpGaWVsZC5wYWdlTnVtYmVyO1xuICAgICAgZmllbGQucG9zaXRpb24gPSBuZXcgUG9pbnQob2JqRmllbGQueCwgb2JqRmllbGQueSk7XG4gICAgICBmaWVsZC5zaXplID0gbmV3IFNpemUob2JqRmllbGQud2lkdGgsIG9iakZpZWxkLmhlaWdodCk7XG5cbiAgICAgIGlmIChvYmpGaWVsZC5jb2x1bW5zKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgb2JqRmllbGQuY29sdW1ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGZpZWxkLmFkZENvbHVtbihvYmpGaWVsZC5jb2x1bW5zW2pdLm5hbWUsIG9iakZpZWxkLmNvbHVtbnNbal0udmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRlbXBsYXRlLmFkZEZpZWxkKGZpZWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICBwcml2YXRlIHNhdmVUZW1wbGF0ZVRvTG9jYWxTdG9yYWdlKHRlbXBsYXRlOiBUZW1wbGF0ZSkge1xuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSB0aGlzLl90ZW1wbGF0ZVBhdHRlcm4gKyB0ZW1wbGF0ZS5pZDtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbmFtZTogdGVtcGxhdGUubmFtZSxcbiAgICAgIGlkOiB0ZW1wbGF0ZS5pZCxcbiAgICAgIGZpZWxkczogdGVtcGxhdGUuZmllbGRzXG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzYXZlVGVtcGxhdGUodGVtcGxhdGU6IFRlbXBsYXRlKSB7XG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGVtcGxhdGUuaXNTdG9yZWQpIHtcbiAgICAgIHRlbXBsYXRlLmlkID0gdGhpcy5nZXROZXh0VGVtcGxhdGVJZCgpO1xuICAgICAgdGhpcy5fdGVtcGxhdGVzLnB1c2godGVtcGxhdGUpO1xuICAgICAgdGhpcy5vblRlbXBsYXRlQWRkZWQodGVtcGxhdGUpO1xuICAgIH1cblxuICAgIC8vIGFkZCB0byBsb2NhbCBzdG9yYWdlXG4gICAgdGhpcy5zYXZlVGVtcGxhdGVUb0xvY2FsU3RvcmFnZSh0ZW1wbGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRlbXBsYXRlQnlJZCh0ZW1wbGF0ZUlkOiBUZW1wbGF0ZUlkKSB7XG4gICAgaWYgKCF0ZW1wbGF0ZUlkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3RlbXBsYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX3RlbXBsYXRlc1tpXS5pZCA9PT0gdGVtcGxhdGVJZC5pZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUZW1wbGF0ZUJ5TmFtZSh0ZW1wbGF0ZU5hbWU6IHN0cmluZykge1xuICAgIGlmICghdGVtcGxhdGVOYW1lKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lID0gdGVtcGxhdGVOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90ZW1wbGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl90ZW1wbGF0ZXNbaV0ubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldE5leHRUZW1wbGF0ZUlkKCk6IHN0cmluZyB7XG4gICAgY29uc3QgdGVtcGxhdGVJZCA9IHsgaWQ6IFwiXCIsIG5hbWU6IFwiXCIgfTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwMDsgaSsrKSB7XG4gICAgICB0ZW1wbGF0ZUlkLmlkID0gaS50b1N0cmluZygpO1xuICAgICAgaWYgKCF0aGlzLmdldFRlbXBsYXRlQnlJZCh0ZW1wbGF0ZUlkKSkge1xuICAgICAgICByZXR1cm4gdGVtcGxhdGVJZC5pZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV4dFRlbXBsYXRlTmFtZShiYXNlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDA7IGkrKykge1xuICAgICAgY29uc3QgbmFtZSA9IGJhc2VOYW1lICsgKGkgPT09IDAgPyBcIlwiIDogXCIgXCIgKyBpLnRvU3RyaW5nKCkpO1xuICAgICAgaWYgKCF0aGlzLmdldFRlbXBsYXRlQnlOYW1lKG5hbWUpKSB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=