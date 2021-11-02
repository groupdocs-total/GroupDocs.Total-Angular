/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Point, Size, Template, TemplateField } from './app-models';
import { interval, Subject } from 'rxjs';
import { throttle } from 'rxjs/operators';
import * as i0 from "@angular/core";
var TemplateService = /** @class */ (function () {
    function TemplateService() {
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
    Object.defineProperty(TemplateService.prototype, "currentTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentTemplate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TemplateService.prototype, "templateIds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._templates;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} templateId
     * @return {?}
     */
    TemplateService.prototype.selectTemplate = /**
     * @param {?} templateId
     * @return {?}
     */
    function (templateId) {
        /** @type {?} */
        var template = this.getTemplateById(templateId);
        if (template) {
            this.setCurrentTemplate(template);
        }
    };
    /**
     * @return {?}
     */
    TemplateService.prototype.createTemplate = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var template = new Template();
        template.name = this.getNextTemplateName("Template");
        this.setCurrentTemplate(template);
    };
    /**
     * @param {?} templateId
     * @return {?}
     */
    TemplateService.prototype.renameTemplate = /**
     * @param {?} templateId
     * @return {?}
     */
    function (templateId) {
        if (!templateId) {
            return;
        }
        /** @type {?} */
        var exTemplate = this.getTemplateByName(templateId.name);
        if (exTemplate && exTemplate.id !== templateId.id) {
            throw Error('Template with the same name already exists');
        }
        if (templateId.id === this.currentTemplate.id) {
            this.currentTemplate.name = templateId.name;
        }
        else {
            /** @type {?} */
            var template = this.getTemplateById(templateId);
            template.name = templateId.name;
            this.saveTemplate(template);
        }
    };
    /**
     * @param {?} templateId
     * @return {?}
     */
    TemplateService.prototype.removeTemplate = /**
     * @param {?} templateId
     * @return {?}
     */
    function (templateId) {
        /** @type {?} */
        var template = this.getTemplateById(templateId);
        /** @type {?} */
        var index = this._templates.indexOf(template);
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
    };
    /**
     * @param {?} templateId
     * @return {?}
     */
    TemplateService.prototype.serialize = /**
     * @param {?} templateId
     * @return {?}
     */
    function (templateId) {
        if (!templateId) {
            return;
        }
        /** @type {?} */
        var template = this.getTemplateById(templateId);
        if (!template) {
            return;
        }
        return JSON.stringify({
            name: template.name,
            fields: template.fields
        });
    };
    /**
     * @param {?} templateJson
     * @return {?}
     */
    TemplateService.prototype.deserialize = /**
     * @param {?} templateJson
     * @return {?}
     */
    function (templateJson) {
        if (!templateJson) {
            return;
        }
        try {
            /** @type {?} */
            var template = this.loadTemplateFromJson(templateJson);
            template.id = Template.NotSaved;
            this.saveTemplate(template);
            this.selectTemplate(template);
        }
        catch (error) {
            throw Error('Error while parsing template file');
        }
    };
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    TemplateService.prototype.setCurrentTemplate = /**
     * @private
     * @param {?} template
     * @return {?}
     */
    function (template) {
        var _this = this;
        if (this._currentTemplateModifiedSubscription) {
            this._currentTemplateModifiedSubscription.unsubscribe();
        }
        this._currentTemplate = template;
        this._currentTemplateModifiedSubscription = this._currentTemplate.modified
            .pipe(throttle((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return interval(500); })))
            .subscribe((/**
         * @param {?} t
         * @return {?}
         */
        function (t) { return _this.saveTemplate(t); }));
        this._currentTemplateChangedSubject.next(this._currentTemplate);
    };
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    TemplateService.prototype.onTemplateAdded = /**
     * @private
     * @param {?} template
     * @return {?}
     */
    function (template) {
        this._templateAddedSubject.next(template);
    };
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    TemplateService.prototype.onTemplateRemoved = /**
     * @private
     * @param {?} template
     * @return {?}
     */
    function (template) {
        this._templateRemovedSubject.next(template);
        // remove from local storage
        for (var i = 0; i < localStorage.length; i++) {
            /** @type {?} */
            var key = localStorage.key(i);
            if (key === this._templatePattern + template.id) {
                localStorage.removeItem(key);
                return;
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    TemplateService.prototype.loadTemplatesFromLocalStorage = /**
     * @private
     * @return {?}
     */
    function () {
        for (var i = 0; i < localStorage.length; i++) {
            /** @type {?} */
            var key = localStorage.key(i);
            if (key.startsWith(this._templatePattern)) {
                /** @type {?} */
                var template = this.loadTemplateFromJson(localStorage.getItem(key));
                this._templates.push(template);
                this.onTemplateAdded(template);
            }
        }
    };
    /**
     * @private
     * @param {?} templateJson
     * @return {?}
     */
    TemplateService.prototype.loadTemplateFromJson = /**
     * @private
     * @param {?} templateJson
     * @return {?}
     */
    function (templateJson) {
        /** @type {?} */
        var obj = JSON.parse(templateJson);
        /** @type {?} */
        var templateName = this.getNextTemplateName(obj.name);
        /** @type {?} */
        var template = new Template();
        template.id = obj.id ? obj.id : this.getNextTemplateId();
        template.name = templateName;
        for (var i = 0; i < obj.fields.length; i++) {
            /** @type {?} */
            var objField = obj.fields[i];
            /** @type {?} */
            var field = new TemplateField(template);
            if (objField.fieldType) {
                field.fieldType = objField.fieldType;
            }
            field.name = objField.name;
            field.pageNumber = objField.pageNumber;
            field.position = new Point(objField.x, objField.y);
            field.size = new Size(objField.width, objField.height);
            if (objField.columns) {
                for (var j = 0; j < objField.columns.length; j++) {
                    field.addColumn(objField.columns[j].name, objField.columns[j].value);
                }
            }
            template.addField(field);
        }
        return template;
    };
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    TemplateService.prototype.saveTemplateToLocalStorage = /**
     * @private
     * @param {?} template
     * @return {?}
     */
    function (template) {
        if (!template) {
            return;
        }
        /** @type {?} */
        var key = this._templatePattern + template.id;
        localStorage.setItem(key, JSON.stringify({
            name: template.name,
            id: template.id,
            fields: template.fields
        }));
    };
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    TemplateService.prototype.saveTemplate = /**
     * @private
     * @param {?} template
     * @return {?}
     */
    function (template) {
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
    };
    /**
     * @private
     * @param {?} templateId
     * @return {?}
     */
    TemplateService.prototype.getTemplateById = /**
     * @private
     * @param {?} templateId
     * @return {?}
     */
    function (templateId) {
        if (!templateId) {
            return null;
        }
        for (var i = 0; i < this._templates.length; i++) {
            if (this._templates[i].id === templateId.id) {
                return this._templates[i];
            }
        }
        return null;
    };
    /**
     * @private
     * @param {?} templateName
     * @return {?}
     */
    TemplateService.prototype.getTemplateByName = /**
     * @private
     * @param {?} templateName
     * @return {?}
     */
    function (templateName) {
        if (!templateName) {
            return null;
        }
        /** @type {?} */
        var name = templateName.toLocaleLowerCase();
        for (var i = 0; i < this._templates.length; i++) {
            if (this._templates[i].name.toLocaleLowerCase() === name) {
                return this._templates[i];
            }
        }
        return null;
    };
    /**
     * @private
     * @return {?}
     */
    TemplateService.prototype.getNextTemplateId = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var templateId = { id: "", name: "" };
        for (var i = 0; i < 1000; i++) {
            templateId.id = i.toString();
            if (!this.getTemplateById(templateId)) {
                return templateId.id;
            }
        }
        return null;
    };
    /**
     * @private
     * @param {?} baseName
     * @return {?}
     */
    TemplateService.prototype.getNextTemplateName = /**
     * @private
     * @param {?} baseName
     * @return {?}
     */
    function (baseName) {
        for (var i = 0; i < 1000; i++) {
            /** @type {?} */
            var name_1 = baseName + (i === 0 ? "" : " " + i.toString());
            if (!this.getTemplateByName(name_1)) {
                return name_1;
            }
        }
        return null;
    };
    TemplateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TemplateService.ctorParameters = function () { return []; };
    /** @nocollapse */ TemplateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TemplateService_Factory() { return new TemplateService(); }, token: TemplateService, providedIn: "root" });
    return TemplateService;
}());
export { TemplateService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFjLE1BQU0sY0FBYyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQWMsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRTFDO0lBY0U7UUFWaUIscUJBQWdCLEdBQUcsa0JBQWtCLENBQUM7UUFNL0MsbUNBQThCLEdBQXNCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbEUsMEJBQXFCLEdBQXNCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDekQsNEJBQXVCLEdBQXdCLElBQUksT0FBTyxFQUFFLENBQUM7UUFTNUQsMkJBQXNCLEdBQXlCLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsRyx5QkFBb0IsR0FBeUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZGLDJCQUFzQixHQUEyQixJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFScEcsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLDZCQUE2QixFQUFFLENBQUM7UUFFckMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFNRCxzQkFBSSw0Q0FBZTs7OztRQUFuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0NBQVc7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VUFBVSxDQUFDLEVBQUU7Z0JBQ3JDLE9BQU8sVUFBVSxDQUFDLEVBQUUsQ0FBQzthQUN0QjtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFTyw2Q0FBbUI7Ozs7O0lBQTNCLFVBQTRCLFFBQWdCO1FBQzFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUN2QixNQUFJLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBSSxDQUFDLEVBQUU7Z0JBQ2pDLE9BQU8sTUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBL1JGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzBCQVBEO0NBcVNDLEFBaFNELElBZ1NDO1NBN1JZLGVBQWU7Ozs7OztJQUMxQiwyQ0FBdUQ7Ozs7O0lBRXZELDJDQUFtQzs7Ozs7SUFDbkMsK0RBQTJEOzs7OztJQUMzRCxxQ0FBK0I7Ozs7O0lBRS9CLHlEQUEwRTs7Ozs7SUFDMUUsZ0RBQWlFOzs7OztJQUNqRSxrREFBcUU7O0lBU3JFLGlEQUEyRzs7SUFDM0csK0NBQWdHOztJQUNoRyxpREFBc0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9pbnQsIFNpemUsIFRlbXBsYXRlLCBUZW1wbGF0ZUZpZWxkLCBUZW1wbGF0ZUlkIH0gZnJvbSAnLi9hcHAtbW9kZWxzJztcbmltcG9ydCB7IGludGVydmFsLCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRocm90dGxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IF90ZW1wbGF0ZVBhdHRlcm4gPSBcInBhcnNlci50ZW1wbGF0ZS5cIjtcblxuICBwcml2YXRlIF9jdXJyZW50VGVtcGxhdGU6IFRlbXBsYXRlO1xuICBwcml2YXRlIF9jdXJyZW50VGVtcGxhdGVNb2RpZmllZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF90ZW1wbGF0ZXM6IFRlbXBsYXRlW107XG5cbiAgcHJpdmF0ZSBfY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YmplY3Q6IFN1YmplY3Q8VGVtcGxhdGU+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBfdGVtcGxhdGVBZGRlZFN1YmplY3Q6IFN1YmplY3Q8VGVtcGxhdGU+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBfdGVtcGxhdGVSZW1vdmVkU3ViamVjdDogU3ViamVjdDxUZW1wbGF0ZUlkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fdGVtcGxhdGVzID0gW107XG4gICAgdGhpcy5sb2FkVGVtcGxhdGVzRnJvbUxvY2FsU3RvcmFnZSgpO1xuXG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZSgpO1xuICB9XG5cbiAgcmVhZG9ubHkgY3VycmVudFRlbXBsYXRlQ2hhbmdlZDogT2JzZXJ2YWJsZTxUZW1wbGF0ZT4gPSB0aGlzLl9jdXJyZW50VGVtcGxhdGVDaGFuZ2VkU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgcmVhZG9ubHkgdGVtcGxhdGVBZGRlZFN1YmplY3Q6IE9ic2VydmFibGU8VGVtcGxhdGU+ID0gdGhpcy5fdGVtcGxhdGVBZGRlZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIHJlYWRvbmx5IHRlbXBsYXRlUmVtb3ZlZFN1YmplY3Q6IE9ic2VydmFibGU8VGVtcGxhdGVJZD4gPSB0aGlzLl90ZW1wbGF0ZVJlbW92ZWRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGdldCBjdXJyZW50VGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRUZW1wbGF0ZTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZUlkcygpOiBUZW1wbGF0ZUlkW10ge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXM7XG4gIH1cblxuICBzZWxlY3RUZW1wbGF0ZSh0ZW1wbGF0ZUlkOiBUZW1wbGF0ZUlkKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmdldFRlbXBsYXRlQnlJZCh0ZW1wbGF0ZUlkKTtcbiAgICBpZiAodGVtcGxhdGUpIHtcbiAgICAgIHRoaXMuc2V0Q3VycmVudFRlbXBsYXRlKHRlbXBsYXRlKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZSgpO1xuICAgIHRlbXBsYXRlLm5hbWUgPSB0aGlzLmdldE5leHRUZW1wbGF0ZU5hbWUoXCJUZW1wbGF0ZVwiKTtcblxuICAgIHRoaXMuc2V0Q3VycmVudFRlbXBsYXRlKHRlbXBsYXRlKTtcbiAgfVxuXG4gIHJlbmFtZVRlbXBsYXRlKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQpIHtcbiAgICBpZiAoIXRlbXBsYXRlSWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBleFRlbXBsYXRlID0gdGhpcy5nZXRUZW1wbGF0ZUJ5TmFtZSh0ZW1wbGF0ZUlkLm5hbWUpO1xuICAgIGlmIChleFRlbXBsYXRlICYmIGV4VGVtcGxhdGUuaWQgIT09IHRlbXBsYXRlSWQuaWQpIHtcbiAgICAgIHRocm93IEVycm9yKCdUZW1wbGF0ZSB3aXRoIHRoZSBzYW1lIG5hbWUgYWxyZWFkeSBleGlzdHMnKTtcbiAgICB9XG5cbiAgICBpZiAodGVtcGxhdGVJZC5pZCA9PT0gdGhpcy5jdXJyZW50VGVtcGxhdGUuaWQpIHtcbiAgICAgIHRoaXMuY3VycmVudFRlbXBsYXRlLm5hbWUgPSB0ZW1wbGF0ZUlkLm5hbWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmdldFRlbXBsYXRlQnlJZCh0ZW1wbGF0ZUlkKTtcbiAgICAgIHRlbXBsYXRlLm5hbWUgPSB0ZW1wbGF0ZUlkLm5hbWU7XG5cbiAgICAgIHRoaXMuc2F2ZVRlbXBsYXRlKHRlbXBsYXRlKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVUZW1wbGF0ZSh0ZW1wbGF0ZUlkOiBUZW1wbGF0ZUlkKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmdldFRlbXBsYXRlQnlJZCh0ZW1wbGF0ZUlkKTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLl90ZW1wbGF0ZXMuaW5kZXhPZih0ZW1wbGF0ZSk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5fdGVtcGxhdGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgdGhpcy5vblRlbXBsYXRlUmVtb3ZlZCh0ZW1wbGF0ZSk7XG5cbiAgICBpZiAodGVtcGxhdGUgIT09IHRoaXMuX2N1cnJlbnRUZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl90ZW1wbGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBDcmVhdGUgYW4gZW1wdHkgdGVtcGxhdGUgaWYgbGlzdCBpcyBlbXB0eVxuICAgICAgdGhpcy5jcmVhdGVUZW1wbGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZWxlY3QgdGhlIHVwcGVyIHRlbXBsYXRlIChvciB0aGUgZmlyc3QpXG4gICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgIGluZGV4ID0gaW5kZXggLSAxO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldEN1cnJlbnRUZW1wbGF0ZSh0aGlzLl90ZW1wbGF0ZXNbaW5kZXhdKTtcbiAgICB9XG4gIH1cblxuICBzZXJpYWxpemUodGVtcGxhdGVJZDogVGVtcGxhdGVJZCk6IHN0cmluZyB7XG4gICAgaWYgKCF0ZW1wbGF0ZUlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmdldFRlbXBsYXRlQnlJZCh0ZW1wbGF0ZUlkKTtcbiAgICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG5hbWU6IHRlbXBsYXRlLm5hbWUsXG4gICAgICBmaWVsZHM6IHRlbXBsYXRlLmZpZWxkc1xuICAgIH0pO1xuICB9XG5cbiAgZGVzZXJpYWxpemUodGVtcGxhdGVKc29uOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRlbXBsYXRlSnNvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmxvYWRUZW1wbGF0ZUZyb21Kc29uKHRlbXBsYXRlSnNvbik7XG4gICAgICB0ZW1wbGF0ZS5pZCA9IFRlbXBsYXRlLk5vdFNhdmVkO1xuXG4gICAgICB0aGlzLnNhdmVUZW1wbGF0ZSh0ZW1wbGF0ZSk7XG5cbiAgICAgIHRoaXMuc2VsZWN0VGVtcGxhdGUodGVtcGxhdGUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IEVycm9yKCdFcnJvciB3aGlsZSBwYXJzaW5nIHRlbXBsYXRlIGZpbGUnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldEN1cnJlbnRUZW1wbGF0ZSh0ZW1wbGF0ZTogVGVtcGxhdGUpIHtcbiAgICBpZiAodGhpcy5fY3VycmVudFRlbXBsYXRlTW9kaWZpZWRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRUZW1wbGF0ZU1vZGlmaWVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fY3VycmVudFRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICB0aGlzLl9jdXJyZW50VGVtcGxhdGVNb2RpZmllZFN1YnNjcmlwdGlvbiA9IHRoaXMuX2N1cnJlbnRUZW1wbGF0ZS5tb2RpZmllZFxuICAgICAgLnBpcGUodGhyb3R0bGUodiA9PiBpbnRlcnZhbCg1MDApKSlcbiAgICAgIC5zdWJzY3JpYmUodCA9PiB0aGlzLnNhdmVUZW1wbGF0ZSh0KSk7XG5cbiAgICB0aGlzLl9jdXJyZW50VGVtcGxhdGVDaGFuZ2VkU3ViamVjdC5uZXh0KHRoaXMuX2N1cnJlbnRUZW1wbGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIG9uVGVtcGxhdGVBZGRlZCh0ZW1wbGF0ZTogVGVtcGxhdGUpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZUFkZGVkU3ViamVjdC5uZXh0KHRlbXBsYXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgb25UZW1wbGF0ZVJlbW92ZWQodGVtcGxhdGU6IFRlbXBsYXRlKSB7XG4gICAgdGhpcy5fdGVtcGxhdGVSZW1vdmVkU3ViamVjdC5uZXh0KHRlbXBsYXRlKTtcblxuICAgIC8vIHJlbW92ZSBmcm9tIGxvY2FsIHN0b3JhZ2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuXG4gICAgICBpZiAoa2V5ID09PSB0aGlzLl90ZW1wbGF0ZVBhdHRlcm4gKyB0ZW1wbGF0ZS5pZCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkVGVtcGxhdGVzRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcblxuICAgICAgaWYgKGtleS5zdGFydHNXaXRoKHRoaXMuX3RlbXBsYXRlUGF0dGVybikpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmxvYWRUZW1wbGF0ZUZyb21Kc29uKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuXG4gICAgICAgIHRoaXMuX3RlbXBsYXRlcy5wdXNoKHRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy5vblRlbXBsYXRlQWRkZWQodGVtcGxhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZFRlbXBsYXRlRnJvbUpzb24odGVtcGxhdGVKc29uOiBzdHJpbmcpOiBUZW1wbGF0ZSB7XG4gICAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZSh0ZW1wbGF0ZUpzb24pO1xuXG4gICAgY29uc3QgdGVtcGxhdGVOYW1lID0gdGhpcy5nZXROZXh0VGVtcGxhdGVOYW1lKG9iai5uYW1lKTtcblxuICAgIGNvbnN0IHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKCk7XG4gICAgdGVtcGxhdGUuaWQgPSBvYmouaWQgPyBvYmouaWQgOiB0aGlzLmdldE5leHRUZW1wbGF0ZUlkKCk7XG4gICAgdGVtcGxhdGUubmFtZSA9IHRlbXBsYXRlTmFtZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iai5maWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG9iakZpZWxkID0gb2JqLmZpZWxkc1tpXTtcblxuICAgICAgY29uc3QgZmllbGQgPSBuZXcgVGVtcGxhdGVGaWVsZCh0ZW1wbGF0ZSk7XG4gICAgICBpZiAob2JqRmllbGQuZmllbGRUeXBlKSB7XG4gICAgICAgIGZpZWxkLmZpZWxkVHlwZSA9IG9iakZpZWxkLmZpZWxkVHlwZTtcbiAgICAgIH1cblxuICAgICAgZmllbGQubmFtZSA9IG9iakZpZWxkLm5hbWU7XG4gICAgICBmaWVsZC5wYWdlTnVtYmVyID0gb2JqRmllbGQucGFnZU51bWJlcjtcbiAgICAgIGZpZWxkLnBvc2l0aW9uID0gbmV3IFBvaW50KG9iakZpZWxkLngsIG9iakZpZWxkLnkpO1xuICAgICAgZmllbGQuc2l6ZSA9IG5ldyBTaXplKG9iakZpZWxkLndpZHRoLCBvYmpGaWVsZC5oZWlnaHQpO1xuXG4gICAgICBpZiAob2JqRmllbGQuY29sdW1ucykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG9iakZpZWxkLmNvbHVtbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBmaWVsZC5hZGRDb2x1bW4ob2JqRmllbGQuY29sdW1uc1tqXS5uYW1lLCBvYmpGaWVsZC5jb2x1bW5zW2pdLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0ZW1wbGF0ZS5hZGRGaWVsZChmaWVsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgcHJpdmF0ZSBzYXZlVGVtcGxhdGVUb0xvY2FsU3RvcmFnZSh0ZW1wbGF0ZTogVGVtcGxhdGUpIHtcbiAgICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qga2V5ID0gdGhpcy5fdGVtcGxhdGVQYXR0ZXJuICsgdGVtcGxhdGUuaWQ7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG5hbWU6IHRlbXBsYXRlLm5hbWUsXG4gICAgICBpZDogdGVtcGxhdGUuaWQsXG4gICAgICBmaWVsZHM6IHRlbXBsYXRlLmZpZWxkc1xuICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgc2F2ZVRlbXBsYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZSkge1xuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRlbXBsYXRlLmlzU3RvcmVkKSB7XG4gICAgICB0ZW1wbGF0ZS5pZCA9IHRoaXMuZ2V0TmV4dFRlbXBsYXRlSWQoKTtcbiAgICAgIHRoaXMuX3RlbXBsYXRlcy5wdXNoKHRlbXBsYXRlKTtcbiAgICAgIHRoaXMub25UZW1wbGF0ZUFkZGVkKHRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgdG8gbG9jYWwgc3RvcmFnZVxuICAgIHRoaXMuc2F2ZVRlbXBsYXRlVG9Mb2NhbFN0b3JhZ2UodGVtcGxhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUZW1wbGF0ZUJ5SWQodGVtcGxhdGVJZDogVGVtcGxhdGVJZCkge1xuICAgIGlmICghdGVtcGxhdGVJZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90ZW1wbGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl90ZW1wbGF0ZXNbaV0uaWQgPT09IHRlbXBsYXRlSWQuaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1tpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGVtcGxhdGVCeU5hbWUodGVtcGxhdGVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRlbXBsYXRlTmFtZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IHRlbXBsYXRlTmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGVtcGxhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5fdGVtcGxhdGVzW2ldLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXh0VGVtcGxhdGVJZCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHRlbXBsYXRlSWQgPSB7IGlkOiBcIlwiLCBuYW1lOiBcIlwiIH07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDA7IGkrKykge1xuICAgICAgdGVtcGxhdGVJZC5pZCA9IGkudG9TdHJpbmcoKTtcbiAgICAgIGlmICghdGhpcy5nZXRUZW1wbGF0ZUJ5SWQodGVtcGxhdGVJZCkpIHtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlSWQuaWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldE5leHRUZW1wbGF0ZU5hbWUoYmFzZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDAwOyBpKyspIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBiYXNlTmFtZSArIChpID09PSAwID8gXCJcIiA6IFwiIFwiICsgaS50b1N0cmluZygpKTtcbiAgICAgIGlmICghdGhpcy5nZXRUZW1wbGF0ZUJ5TmFtZShuYW1lKSkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl19