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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFjLE1BQU0sY0FBYyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQWMsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRTFDO0lBY0U7UUFWaUIscUJBQWdCLEdBQUcsa0JBQWtCLENBQUM7UUFNL0MsbUNBQThCLEdBQXNCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbEUsMEJBQXFCLEdBQXNCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDekQsNEJBQXVCLEdBQXdCLElBQUksT0FBTyxFQUFFLENBQUM7UUFTNUQsMkJBQXNCLEdBQXlCLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsRyx5QkFBb0IsR0FBeUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZGLDJCQUFzQixHQUEyQixJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFScEcsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLDZCQUE2QixFQUFFLENBQUM7UUFFckMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFNRCxzQkFBSSw0Q0FBZTs7OztRQUFuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0NBQVc7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VUFBVSxDQUFDLEVBQUU7Z0JBQ3JDLE9BQU8sVUFBVSxDQUFDLEVBQUUsQ0FBQzthQUN0QjtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFTyw2Q0FBbUI7Ozs7O0lBQTNCLFVBQTRCLFFBQWdCO1FBQzFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUN2QixNQUFJLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBSSxDQUFDLEVBQUU7Z0JBQ2pDLE9BQU8sTUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBL1JGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzBCQVBEO0NBcVNDLEFBaFNELElBZ1NDO1NBN1JZLGVBQWU7Ozs7OztJQUMxQiwyQ0FBdUQ7Ozs7O0lBRXZELDJDQUFtQzs7Ozs7SUFDbkMsK0RBQTJEOzs7OztJQUMzRCxxQ0FBK0I7Ozs7O0lBRS9CLHlEQUEwRTs7Ozs7SUFDMUUsZ0RBQWlFOzs7OztJQUNqRSxrREFBcUU7O0lBU3JFLGlEQUEyRzs7SUFDM0csK0NBQWdHOztJQUNoRyxpREFBc0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQb2ludCwgU2l6ZSwgVGVtcGxhdGUsIFRlbXBsYXRlRmllbGQsIFRlbXBsYXRlSWQgfSBmcm9tICcuL2FwcC1tb2RlbHMnO1xyXG5pbXBvcnQgeyBpbnRlcnZhbCwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRocm90dGxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IF90ZW1wbGF0ZVBhdHRlcm4gPSBcInBhcnNlci50ZW1wbGF0ZS5cIjtcclxuXHJcbiAgcHJpdmF0ZSBfY3VycmVudFRlbXBsYXRlOiBUZW1wbGF0ZTtcclxuICBwcml2YXRlIF9jdXJyZW50VGVtcGxhdGVNb2RpZmllZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgX3RlbXBsYXRlczogVGVtcGxhdGVbXTtcclxuXHJcbiAgcHJpdmF0ZSBfY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YmplY3Q6IFN1YmplY3Q8VGVtcGxhdGU+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIF90ZW1wbGF0ZUFkZGVkU3ViamVjdDogU3ViamVjdDxUZW1wbGF0ZT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgX3RlbXBsYXRlUmVtb3ZlZFN1YmplY3Q6IFN1YmplY3Q8VGVtcGxhdGVJZD4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3RlbXBsYXRlcyA9IFtdO1xyXG4gICAgdGhpcy5sb2FkVGVtcGxhdGVzRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGUoKTtcclxuICB9XHJcblxyXG4gIHJlYWRvbmx5IGN1cnJlbnRUZW1wbGF0ZUNoYW5nZWQ6IE9ic2VydmFibGU8VGVtcGxhdGU+ID0gdGhpcy5fY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcmVhZG9ubHkgdGVtcGxhdGVBZGRlZFN1YmplY3Q6IE9ic2VydmFibGU8VGVtcGxhdGU+ID0gdGhpcy5fdGVtcGxhdGVBZGRlZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcmVhZG9ubHkgdGVtcGxhdGVSZW1vdmVkU3ViamVjdDogT2JzZXJ2YWJsZTxUZW1wbGF0ZUlkPiA9IHRoaXMuX3RlbXBsYXRlUmVtb3ZlZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGdldCBjdXJyZW50VGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFRlbXBsYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRlbXBsYXRlSWRzKCk6IFRlbXBsYXRlSWRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0VGVtcGxhdGUodGVtcGxhdGVJZDogVGVtcGxhdGVJZCkge1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmdldFRlbXBsYXRlQnlJZCh0ZW1wbGF0ZUlkKTtcclxuICAgIGlmICh0ZW1wbGF0ZSkge1xyXG4gICAgICB0aGlzLnNldEN1cnJlbnRUZW1wbGF0ZSh0ZW1wbGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVUZW1wbGF0ZSgpIHtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKCk7XHJcbiAgICB0ZW1wbGF0ZS5uYW1lID0gdGhpcy5nZXROZXh0VGVtcGxhdGVOYW1lKFwiVGVtcGxhdGVcIik7XHJcblxyXG4gICAgdGhpcy5zZXRDdXJyZW50VGVtcGxhdGUodGVtcGxhdGUpO1xyXG4gIH1cclxuXHJcbiAgcmVuYW1lVGVtcGxhdGUodGVtcGxhdGVJZDogVGVtcGxhdGVJZCkge1xyXG4gICAgaWYgKCF0ZW1wbGF0ZUlkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBleFRlbXBsYXRlID0gdGhpcy5nZXRUZW1wbGF0ZUJ5TmFtZSh0ZW1wbGF0ZUlkLm5hbWUpO1xyXG4gICAgaWYgKGV4VGVtcGxhdGUgJiYgZXhUZW1wbGF0ZS5pZCAhPT0gdGVtcGxhdGVJZC5pZCkge1xyXG4gICAgICB0aHJvdyBFcnJvcignVGVtcGxhdGUgd2l0aCB0aGUgc2FtZSBuYW1lIGFscmVhZHkgZXhpc3RzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRlbXBsYXRlSWQuaWQgPT09IHRoaXMuY3VycmVudFRlbXBsYXRlLmlkKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFRlbXBsYXRlLm5hbWUgPSB0ZW1wbGF0ZUlkLm5hbWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmdldFRlbXBsYXRlQnlJZCh0ZW1wbGF0ZUlkKTtcclxuICAgICAgdGVtcGxhdGUubmFtZSA9IHRlbXBsYXRlSWQubmFtZTtcclxuXHJcbiAgICAgIHRoaXMuc2F2ZVRlbXBsYXRlKHRlbXBsYXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVRlbXBsYXRlKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQpIHtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5nZXRUZW1wbGF0ZUJ5SWQodGVtcGxhdGVJZCk7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLl90ZW1wbGF0ZXMuaW5kZXhPZih0ZW1wbGF0ZSk7XHJcblxyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgdGhpcy5fdGVtcGxhdGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vblRlbXBsYXRlUmVtb3ZlZCh0ZW1wbGF0ZSk7XHJcblxyXG4gICAgaWYgKHRlbXBsYXRlICE9PSB0aGlzLl9jdXJyZW50VGVtcGxhdGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl90ZW1wbGF0ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIC8vIENyZWF0ZSBhbiBlbXB0eSB0ZW1wbGF0ZSBpZiBsaXN0IGlzIGVtcHR5XHJcbiAgICAgIHRoaXMuY3JlYXRlVGVtcGxhdGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFNlbGVjdCB0aGUgdXBwZXIgdGVtcGxhdGUgKG9yIHRoZSBmaXJzdClcclxuICAgICAgaWYgKGluZGV4ID4gMCkge1xyXG4gICAgICAgIGluZGV4ID0gaW5kZXggLSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNldEN1cnJlbnRUZW1wbGF0ZSh0aGlzLl90ZW1wbGF0ZXNbaW5kZXhdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlcmlhbGl6ZSh0ZW1wbGF0ZUlkOiBUZW1wbGF0ZUlkKTogc3RyaW5nIHtcclxuICAgIGlmICghdGVtcGxhdGVJZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmdldFRlbXBsYXRlQnlJZCh0ZW1wbGF0ZUlkKTtcclxuICAgIGlmICghdGVtcGxhdGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIG5hbWU6IHRlbXBsYXRlLm5hbWUsXHJcbiAgICAgIGZpZWxkczogdGVtcGxhdGUuZmllbGRzXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlc2VyaWFsaXplKHRlbXBsYXRlSnNvbjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXRlbXBsYXRlSnNvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMubG9hZFRlbXBsYXRlRnJvbUpzb24odGVtcGxhdGVKc29uKTtcclxuICAgICAgdGVtcGxhdGUuaWQgPSBUZW1wbGF0ZS5Ob3RTYXZlZDtcclxuXHJcbiAgICAgIHRoaXMuc2F2ZVRlbXBsYXRlKHRlbXBsYXRlKTtcclxuXHJcbiAgICAgIHRoaXMuc2VsZWN0VGVtcGxhdGUodGVtcGxhdGUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdFcnJvciB3aGlsZSBwYXJzaW5nIHRlbXBsYXRlIGZpbGUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q3VycmVudFRlbXBsYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZSkge1xyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRUZW1wbGF0ZU1vZGlmaWVkU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRUZW1wbGF0ZU1vZGlmaWVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY3VycmVudFRlbXBsYXRlID0gdGVtcGxhdGU7XHJcblxyXG4gICAgdGhpcy5fY3VycmVudFRlbXBsYXRlTW9kaWZpZWRTdWJzY3JpcHRpb24gPSB0aGlzLl9jdXJyZW50VGVtcGxhdGUubW9kaWZpZWRcclxuICAgICAgLnBpcGUodGhyb3R0bGUodiA9PiBpbnRlcnZhbCg1MDApKSlcclxuICAgICAgLnN1YnNjcmliZSh0ID0+IHRoaXMuc2F2ZVRlbXBsYXRlKHQpKTtcclxuXHJcbiAgICB0aGlzLl9jdXJyZW50VGVtcGxhdGVDaGFuZ2VkU3ViamVjdC5uZXh0KHRoaXMuX2N1cnJlbnRUZW1wbGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uVGVtcGxhdGVBZGRlZCh0ZW1wbGF0ZTogVGVtcGxhdGUpIHtcclxuICAgIHRoaXMuX3RlbXBsYXRlQWRkZWRTdWJqZWN0Lm5leHQodGVtcGxhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblRlbXBsYXRlUmVtb3ZlZCh0ZW1wbGF0ZTogVGVtcGxhdGUpIHtcclxuICAgIHRoaXMuX3RlbXBsYXRlUmVtb3ZlZFN1YmplY3QubmV4dCh0ZW1wbGF0ZSk7XHJcblxyXG4gICAgLy8gcmVtb3ZlIGZyb20gbG9jYWwgc3RvcmFnZVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XHJcblxyXG4gICAgICBpZiAoa2V5ID09PSB0aGlzLl90ZW1wbGF0ZVBhdHRlcm4gKyB0ZW1wbGF0ZS5pZCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRUZW1wbGF0ZXNGcm9tTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcclxuXHJcbiAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCh0aGlzLl90ZW1wbGF0ZVBhdHRlcm4pKSB7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmxvYWRUZW1wbGF0ZUZyb21Kc29uKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xyXG5cclxuICAgICAgICB0aGlzLl90ZW1wbGF0ZXMucHVzaCh0ZW1wbGF0ZSk7XHJcbiAgICAgICAgdGhpcy5vblRlbXBsYXRlQWRkZWQodGVtcGxhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRUZW1wbGF0ZUZyb21Kc29uKHRlbXBsYXRlSnNvbjogc3RyaW5nKTogVGVtcGxhdGUge1xyXG4gICAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZSh0ZW1wbGF0ZUpzb24pO1xyXG5cclxuICAgIGNvbnN0IHRlbXBsYXRlTmFtZSA9IHRoaXMuZ2V0TmV4dFRlbXBsYXRlTmFtZShvYmoubmFtZSk7XHJcblxyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUoKTtcclxuICAgIHRlbXBsYXRlLmlkID0gb2JqLmlkID8gb2JqLmlkIDogdGhpcy5nZXROZXh0VGVtcGxhdGVJZCgpO1xyXG4gICAgdGVtcGxhdGUubmFtZSA9IHRlbXBsYXRlTmFtZTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqLmZpZWxkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBvYmpGaWVsZCA9IG9iai5maWVsZHNbaV07XHJcblxyXG4gICAgICBjb25zdCBmaWVsZCA9IG5ldyBUZW1wbGF0ZUZpZWxkKHRlbXBsYXRlKTtcclxuICAgICAgaWYgKG9iakZpZWxkLmZpZWxkVHlwZSkge1xyXG4gICAgICAgIGZpZWxkLmZpZWxkVHlwZSA9IG9iakZpZWxkLmZpZWxkVHlwZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZmllbGQubmFtZSA9IG9iakZpZWxkLm5hbWU7XHJcbiAgICAgIGZpZWxkLnBhZ2VOdW1iZXIgPSBvYmpGaWVsZC5wYWdlTnVtYmVyO1xyXG4gICAgICBmaWVsZC5wb3NpdGlvbiA9IG5ldyBQb2ludChvYmpGaWVsZC54LCBvYmpGaWVsZC55KTtcclxuICAgICAgZmllbGQuc2l6ZSA9IG5ldyBTaXplKG9iakZpZWxkLndpZHRoLCBvYmpGaWVsZC5oZWlnaHQpO1xyXG5cclxuICAgICAgaWYgKG9iakZpZWxkLmNvbHVtbnMpIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG9iakZpZWxkLmNvbHVtbnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGZpZWxkLmFkZENvbHVtbihvYmpGaWVsZC5jb2x1bW5zW2pdLm5hbWUsIG9iakZpZWxkLmNvbHVtbnNbal0udmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGVtcGxhdGUuYWRkRmllbGQoZmllbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2F2ZVRlbXBsYXRlVG9Mb2NhbFN0b3JhZ2UodGVtcGxhdGU6IFRlbXBsYXRlKSB7XHJcbiAgICBpZiAoIXRlbXBsYXRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBrZXkgPSB0aGlzLl90ZW1wbGF0ZVBhdHRlcm4gKyB0ZW1wbGF0ZS5pZDtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgbmFtZTogdGVtcGxhdGUubmFtZSxcclxuICAgICAgaWQ6IHRlbXBsYXRlLmlkLFxyXG4gICAgICBmaWVsZHM6IHRlbXBsYXRlLmZpZWxkc1xyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzYXZlVGVtcGxhdGUodGVtcGxhdGU6IFRlbXBsYXRlKSB7XHJcbiAgICBpZiAoIXRlbXBsYXRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRlbXBsYXRlLmlzU3RvcmVkKSB7XHJcbiAgICAgIHRlbXBsYXRlLmlkID0gdGhpcy5nZXROZXh0VGVtcGxhdGVJZCgpO1xyXG4gICAgICB0aGlzLl90ZW1wbGF0ZXMucHVzaCh0ZW1wbGF0ZSk7XHJcbiAgICAgIHRoaXMub25UZW1wbGF0ZUFkZGVkKHRlbXBsYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGQgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgdGhpcy5zYXZlVGVtcGxhdGVUb0xvY2FsU3RvcmFnZSh0ZW1wbGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRlbXBsYXRlQnlJZCh0ZW1wbGF0ZUlkOiBUZW1wbGF0ZUlkKSB7XHJcbiAgICBpZiAoIXRlbXBsYXRlSWQpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90ZW1wbGF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuX3RlbXBsYXRlc1tpXS5pZCA9PT0gdGVtcGxhdGVJZC5pZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXNbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VGVtcGxhdGVCeU5hbWUodGVtcGxhdGVOYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmICghdGVtcGxhdGVOYW1lKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5hbWUgPSB0ZW1wbGF0ZU5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGVtcGxhdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLl90ZW1wbGF0ZXNbaV0ubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1tpXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXROZXh0VGVtcGxhdGVJZCgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdGVtcGxhdGVJZCA9IHsgaWQ6IFwiXCIsIG5hbWU6IFwiXCIgfTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDA7IGkrKykge1xyXG4gICAgICB0ZW1wbGF0ZUlkLmlkID0gaS50b1N0cmluZygpO1xyXG4gICAgICBpZiAoIXRoaXMuZ2V0VGVtcGxhdGVCeUlkKHRlbXBsYXRlSWQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlSWQuaWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TmV4dFRlbXBsYXRlTmFtZShiYXNlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwMDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBiYXNlTmFtZSArIChpID09PSAwID8gXCJcIiA6IFwiIFwiICsgaS50b1N0cmluZygpKTtcclxuICAgICAgaWYgKCF0aGlzLmdldFRlbXBsYXRlQnlOYW1lKG5hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIl19