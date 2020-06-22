/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, QueryList, ViewChildren } from '@angular/core';
import { FilePropertyModel, WindowService } from '@groupdocs.examples.angular/common-components';
import { AccordionService } from './../../accordion.service';
import { DatePipe } from "@angular/common";
export class AccordionGroupComponent {
    /**
     * @param {?} _accordionService
     * @param {?} _datePipe
     * @param {?} _windowService
     */
    constructor(_accordionService, _datePipe, _windowService) {
        this._accordionService = _accordionService;
        this._datePipe = _datePipe;
        this._windowService = _windowService;
        this.opened = false;
        this.toggle = new EventEmitter();
        this.removeProperty = new EventEmitter();
        this._selectedPropName = "Select property";
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.isDesktop = _windowService.isDesktop();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.textinput.changes.subscribe((/**
         * @param {?} i
         * @return {?}
         */
        (i) => {
            if (i.length) {
                i.first.nativeElement.focus();
            }
        }));
    }
    /**
     * @return {?}
     */
    get selectedPropName() {
        return this._selectedPropName;
    }
    /**
     * @param {?=} onlyEditing
     * @return {?}
     */
    resetProperties(onlyEditing = false) {
        // for the moment we are working only with a single property
        if (!onlyEditing) {
            this.properties.forEach((/**
             * @param {?} p
             * @return {?}
             */
            p => p.selected = false));
        }
        this.properties.forEach((/**
         * @param {?} p
         * @return {?}
         */
        p => p.editing = false));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    addProperty($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this._selectedPropName = "Select property";
        this.resetProperties();
        if (!this.addDisabled) {
            /** @type {?} */
            const addedProperty = new FilePropertyModel();
            addedProperty.original = false;
            this._accordionService.addProperty(addedProperty);
        }
    }
    /**
     * @param {?} property
     * @return {?}
     */
    selectProperty(property) {
        if (property.category === 0 && !property.disabled) {
            this.resetProperties(true);
            /** @type {?} */
            const selectedProperty = this.properties.filter((/**
             * @param {?} p
             * @return {?}
             */
            p => p.name.toLocaleLowerCase() === property.name.toLocaleLowerCase()))[0];
            selectedProperty.selected = !selectedProperty.selected;
            this.properties.filter((/**
             * @param {?} p
             * @return {?}
             */
            p => p.name === property.name))[0].selected = selectedProperty.selected;
        }
    }
    /**
     * @param {?} property
     * @return {?}
     */
    editProperty(property) {
        // we can edit only first group props
        if (property.category === 0 && !property.disabled) {
            this.resetProperties();
            /** @type {?} */
            const selectedProperty = this.properties.filter((/**
             * @param {?} p
             * @return {?}
             */
            p => p.name.toLocaleLowerCase() === property.name.toLocaleLowerCase()))[0];
            selectedProperty.editing = !selectedProperty.editing;
            this.properties.filter((/**
             * @param {?} p
             * @return {?}
             */
            p => p.name === property.name))[0].editing = selectedProperty.editing;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    delete($event) {
        $event.preventDefault();
        $event.stopPropagation();
        /** @type {?} */
        const selectedProperty = this.properties.filter((/**
         * @param {?} p
         * @return {?}
         */
        p => p.selected))[0];
        this.removeProperty.emit(selectedProperty);
    }
    /**
     * @return {?}
     */
    wasSelected() {
        if (this.properties && this.properties.length > 0) {
            return this.properties.filter((/**
             * @param {?} p
             * @return {?}
             */
            p => p.selected)).length === 1;
        }
        else
            return false;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectPropName($event) {
        this._selectedPropName = $event.name;
        /** @type {?} */
        const editingProperty = this.properties.filter((/**
         * @param {?} p
         * @return {?}
         */
        p => !p.original))[0];
        editingProperty.type = $event.type;
        editingProperty.name = $event.name;
        if ($event.type === 3) {
            editingProperty.value = new Date().toISOString().slice(0, 19);
        }
        else {
            editingProperty.value = "";
        }
    }
    /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    formatDateTime(property, value) {
        if (value) {
            /** @type {?} */
            const dateTime = new Date(value);
            property.value = dateTime.toISOString().slice(0, 19);
        }
    }
    /**
     * @param {?} property
     * @return {?}
     */
    formatValue(property) {
        switch (property.type) {
            case 3:
                return this.isDesktop ? this._datePipe.transform(new Date(property.value), 'MM/dd/yy, h:mm:ss a')
                    : this._datePipe.transform(new Date(property.value), 'MM/dd/yy, h:mm a');
            default:
                return property.value;
        }
    }
}
AccordionGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-accordion-group',
                template: "<div class=\"accordion-wrapper\">\n    <div class=\"title\" (click)=\"toggle.emit($event)\">\n      <fa-icon *ngIf=\"!opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-down']\"></fa-icon>\n      <fa-icon *ngIf=\"opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-up']\"></fa-icon>\n      <div class=\"text\">{{title}}</div>\n      <fa-icon class=\"trash\" *ngIf=\"wasSelected()\" [icon]=\"['fas', 'trash']\" (click)=\"delete($event)\"></fa-icon>\n      <gd-button class=\"plus\" [icon]=\"['plus']\" [hidden]=\"addHidden\" [disabled]=\"addDisabled\" (click)=\"addProperty($event)\"></gd-button>\n    </div>\n    <div class=\"body\" [ngClass]=\"{'hidden': !opened}\">\n      <div *ngFor=\"let property of properties\" class=\"property-wrapper\" [ngClass]=\"{'disabled': property.disabled}\">\n          <div *ngIf=\"property.original\" [ngClass]=\"{'selected': property.selected}\" (click)=\"selectProperty(property)\" class=\"property-name\" title=\"{{property.name}}\">{{property.name}}</div>\n          <gd-select  class=\"property-name\" *ngIf=\"!property.original\" id=\"propertiesNames\" [disabled]=\"false\" [options]=\"propertiesNames\" (selected)=\"selectPropName($event)\" [showSelected]=\"{name : selectedPropName, value : selectedPropName}\"></gd-select>\n          <div *ngIf=\"property.original && !property.editing\" [ngClass]=\"{'selected': property.selected}\" (click)=\"editProperty(property)\" class=\"property-value\" title=\"{{property.value}}\">{{formatValue(property)}}</div>\n          <div *ngIf=\"!property.original || property.editing\" class=\"input-wrapper\">\n            <input #textinput *ngIf=\"property.type == 1 || property.type == 5\" class=\"property-value\" [(ngModel)]=\"property.value\">\n            <input *ngIf=\"property.type == 3\" type=\"datetime-local\" step=\"1\" [ngClass]=\"isDesktop ? 'property-value' : 'property-value mobile-hide'\" [ngModel]=\"property.value | date:'yyyy-MM-ddTHH:mm:ss'\" (ngModelChange)=\"formatDateTime(property, $event)\">\n            <input *ngIf=\"property.type == 3\" type=\"datetime-local\" [ngClass]=\"isDesktop ? 'property-value desktop-hide' : 'property-value'\" [ngModel]=\"property.value | date:'yyyy-MM-ddTHH:mm'\" (ngModelChange)=\"formatDateTime(property, $event)\">\n        </div>\n      </div>\n    </div>\n  <div>",
                styles: [".accordion-wrapper{background-color:#fff}.accordion-wrapper .title{width:100%;cursor:pointer;border-bottom:1px solid #6e6e6e;background-color:#539cf0;color:#f4f4f4;font-weight:700;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;height:37px;line-height:37px;font-size:13px}.accordion-wrapper .title .text{width:100%}.chevron{padding:0 16px 0 15px}.plus{margin-left:auto}::ng-deep .title .button{color:#fff!important;display:block!important;margin-right:0!important}::ng-deep .title .button.active fa-icon{color:#fff!important}.accordion-wrapper .body.hidden,.trash.hidden{display:none}.property-wrapper{display:-webkit-box;display:flex;height:35px;font-size:12px;border-bottom:1px solid #e7e7e7;line-height:35px}.property-wrapper.disabled{cursor:not-allowed;color:#acacac}.property-name{width:216px;text-transform:uppercase;font-weight:700;padding-left:15px;border-right:1px solid #e7e7e7;text-overflow:ellipsis;word-wrap:break-word}.property-name ::ng-deep .select{height:35px;line-height:37px;text-align:center;-webkit-box-pack:unset;justify-content:unset;position:relative}.property-name ::ng-deep .select .nav-caret{display:none}.property-name ::ng-deep .select .selected-value{max-width:none;font-size:unset;text-transform:none;font-weight:400}.property-name ::ng-deep .select .dropdown-menu{width:216px;margin-left:-15px;top:36px}.property-value{font-family:'Courier New',Courier,monospace;padding-left:12px;text-overflow:ellipsis;width:216px;white-space:nowrap;overflow:hidden;word-wrap:break-word;display:inline-block}.property-value.desktop-hide{display:none}.input-wrapper input{height:30px;border:0;font-size:12px}.input-wrapper input.hidden{display:none}.input-wrapper input[type=datetime-local]::-webkit-clear-button,.input-wrapper input[type=datetime-local]::-webkit-inner-spin-button{-webkit-appearance:none;display:none}.selected{background-color:#3e4e5a;color:#fff}::ng-deep .default .property-name{color:#acacac}@media (max-width:1037px){.property-value{width:194px!important}.property-name{width:150px!important}.property-value.mobile-hide{display:none}.input-wrapper{width:185px!important}}"]
            }] }
];
/** @nocollapse */
AccordionGroupComponent.ctorParameters = () => [
    { type: AccordionService },
    { type: DatePipe },
    { type: WindowService }
];
AccordionGroupComponent.propDecorators = {
    opened: [{ type: Input }],
    title: [{ type: Input }],
    addDisabled: [{ type: Input }],
    addHidden: [{ type: Input }],
    properties: [{ type: Input }],
    propertiesNames: [{ type: Input }],
    toggle: [{ type: Output }],
    removeProperty: [{ type: Output }],
    textinput: [{ type: ViewChildren, args: ['textinput',] }]
};
if (false) {
    /** @type {?} */
    AccordionGroupComponent.prototype.opened;
    /** @type {?} */
    AccordionGroupComponent.prototype.title;
    /** @type {?} */
    AccordionGroupComponent.prototype.addDisabled;
    /** @type {?} */
    AccordionGroupComponent.prototype.addHidden;
    /** @type {?} */
    AccordionGroupComponent.prototype.properties;
    /** @type {?} */
    AccordionGroupComponent.prototype.propertiesNames;
    /** @type {?} */
    AccordionGroupComponent.prototype.toggle;
    /** @type {?} */
    AccordionGroupComponent.prototype.removeProperty;
    /** @type {?} */
    AccordionGroupComponent.prototype.textinput;
    /** @type {?} */
    AccordionGroupComponent.prototype._selectedPropName;
    /** @type {?} */
    AccordionGroupComponent.prototype.isDesktop;
    /**
     * @type {?}
     * @private
     */
    AccordionGroupComponent.prototype._accordionService;
    /**
     * @type {?}
     * @private
     */
    AccordionGroupComponent.prototype._datePipe;
    /**
     * @type {?}
     * @private
     */
    AccordionGroupComponent.prototype._windowService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQVF6QyxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUFhbEMsWUFBb0IsaUJBQW1DLEVBQ25DLFNBQW1CLEVBQ25CLGNBQTZCO1FBRjdCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQWR4QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBTWQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFFaEUsc0JBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFNckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QyxDQUFD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LEtBQUs7cUJBQ0wsTUFBTTs2QkFDTixNQUFNO3dCQUNOLFlBQVksU0FBQyxXQUFXOzs7O0lBUnpCLHlDQUF3Qjs7SUFDeEIsd0NBQXVCOztJQUN2Qiw4Q0FBOEI7O0lBQzlCLDRDQUE0Qjs7SUFDNUIsNkNBQXlDOztJQUN6QyxrREFBbUM7O0lBQ25DLHlDQUE4RDs7SUFDOUQsaURBQWlFOztJQUNqRSw0Q0FBcUQ7O0lBQ3BELG9EQUFzQzs7SUFDdEMsNENBQW1COzs7OztJQUVSLG9EQUEyQzs7Ozs7SUFDM0MsNENBQTJCOzs7OztJQUMzQixpREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4sIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbGVQcm9wZXJ0eU1vZGVsLCBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcbmltcG9ydCB7IEFjY29yZGlvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL2FjY29yZGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7RGF0ZVBpcGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtYWNjb3JkaW9uLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQubGVzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgb3BlbmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFkZERpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBhZGRIaWRkZW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIHByb3BlcnRpZXM6IEZpbGVQcm9wZXJ0eU1vZGVsW107XG4gIEBJbnB1dCgpIHByb3BlcnRpZXNOYW1lczogc3RyaW5nW107XG4gIEBPdXRwdXQoKSB0b2dnbGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSByZW1vdmVQcm9wZXJ0eSA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZVByb3BlcnR5TW9kZWw+KCk7XG4gIEBWaWV3Q2hpbGRyZW4oJ3RleHRpbnB1dCcpIHRleHRpbnB1dDogUXVlcnlMaXN0PGFueT47IFxuICAgX3NlbGVjdGVkUHJvcE5hbWUgPSBcIlNlbGVjdCBwcm9wZXJ0eVwiO1xuICAgaXNEZXNrdG9wOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FjY29yZGlvblNlcnZpY2U6IEFjY29yZGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2RhdGVQaXBlOiBEYXRlUGlwZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSkge1xuICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgX3dpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XG4gICAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMudGV4dGlucHV0LmNoYW5nZXMuc3Vic2NyaWJlKChpOiBRdWVyeUxpc3Q8YW55Pik9PntcbiAgICAgIGlmIChpLmxlbmd0aCkge1xuICAgICAgICBpLmZpcnN0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgfSk7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRQcm9wTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRQcm9wTmFtZTtcbiAgfVxuXG4gIHJlc2V0UHJvcGVydGllcyhvbmx5RWRpdGluZzogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgLy8gZm9yIHRoZSBtb21lbnQgd2UgYXJlIHdvcmtpbmcgb25seSB3aXRoIGEgc2luZ2xlIHByb3BlcnR5XG4gICAgaWYgKCFvbmx5RWRpdGluZykge1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzLmZvckVhY2gocCA9PiBwLnNlbGVjdGVkID0gZmFsc2UpO1xuICAgIH1cbiAgICB0aGlzLnByb3BlcnRpZXMuZm9yRWFjaChwID0+IHAuZWRpdGluZyA9IGZhbHNlKTtcbiAgfVxuXG4gIGFkZFByb3BlcnR5KCRldmVudDogRXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLl9zZWxlY3RlZFByb3BOYW1lID0gXCJTZWxlY3QgcHJvcGVydHlcIjtcbiAgICB0aGlzLnJlc2V0UHJvcGVydGllcygpO1xuXG4gICAgaWYgKCF0aGlzLmFkZERpc2FibGVkKSB7XG4gICAgICBjb25zdCBhZGRlZFByb3BlcnR5ID0gbmV3IEZpbGVQcm9wZXJ0eU1vZGVsKCk7XG4gICAgICBhZGRlZFByb3BlcnR5Lm9yaWdpbmFsID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY2NvcmRpb25TZXJ2aWNlLmFkZFByb3BlcnR5KGFkZGVkUHJvcGVydHkpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdFByb3BlcnR5KHByb3BlcnR5OiBGaWxlUHJvcGVydHlNb2RlbCl7XG4gICAgaWYgKHByb3BlcnR5LmNhdGVnb3J5ID09PSAwICYmICFwcm9wZXJ0eS5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5yZXNldFByb3BlcnRpZXModHJ1ZSk7XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkUHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXMuZmlsdGVyKHAgPT4gcC5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IHByb3BlcnR5Lm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSlbMF07XG4gICAgICBzZWxlY3RlZFByb3BlcnR5LnNlbGVjdGVkID0gIXNlbGVjdGVkUHJvcGVydHkuc2VsZWN0ZWQ7XG4gICAgICB0aGlzLnByb3BlcnRpZXMuZmlsdGVyKHAgPT4gcC5uYW1lID09PSBwcm9wZXJ0eS5uYW1lKVswXS5zZWxlY3RlZCA9IHNlbGVjdGVkUHJvcGVydHkuc2VsZWN0ZWQ7XG4gICAgfVxuICB9XG5cbiAgZWRpdFByb3BlcnR5KHByb3BlcnR5OiBGaWxlUHJvcGVydHlNb2RlbCl7XG4gICAgLy8gd2UgY2FuIGVkaXQgb25seSBmaXJzdCBncm91cCBwcm9wc1xuICAgIGlmIChwcm9wZXJ0eS5jYXRlZ29yeSA9PT0gMCAmJiAhcHJvcGVydHkuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkUHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXMuZmlsdGVyKHAgPT4gcC5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IHByb3BlcnR5Lm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSlbMF07XG4gICAgICBzZWxlY3RlZFByb3BlcnR5LmVkaXRpbmcgPSAhc2VsZWN0ZWRQcm9wZXJ0eS5lZGl0aW5nO1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzLmZpbHRlcihwID0+IHAubmFtZSA9PT0gcHJvcGVydHkubmFtZSlbMF0uZWRpdGluZyA9IHNlbGVjdGVkUHJvcGVydHkuZWRpdGluZztcbiAgICB9XG4gIH1cblxuICBkZWxldGUoJGV2ZW50OiBFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBzZWxlY3RlZFByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzLmZpbHRlcihwID0+IHAuc2VsZWN0ZWQpWzBdO1xuICAgIHRoaXMucmVtb3ZlUHJvcGVydHkuZW1pdChzZWxlY3RlZFByb3BlcnR5KTtcbiAgfVxuXG4gIHdhc1NlbGVjdGVkKCkge1xuICAgIGlmICh0aGlzLnByb3BlcnRpZXMgJiYgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXMuZmlsdGVyKHAgPT4gcC5zZWxlY3RlZCkubGVuZ3RoID09PSAxO1xuICAgIH1cbiAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNlbGVjdFByb3BOYW1lKCRldmVudDogYW55KSB7XG4gICAgdGhpcy5fc2VsZWN0ZWRQcm9wTmFtZSA9ICRldmVudC5uYW1lO1xuICAgIGNvbnN0IGVkaXRpbmdQcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllcy5maWx0ZXIocCA9PiAhcC5vcmlnaW5hbClbMF07XG4gICAgZWRpdGluZ1Byb3BlcnR5LnR5cGUgPSAkZXZlbnQudHlwZTtcbiAgICBlZGl0aW5nUHJvcGVydHkubmFtZSA9ICRldmVudC5uYW1lO1xuICAgIGlmICgkZXZlbnQudHlwZSA9PT0gMykge1xuICAgICAgZWRpdGluZ1Byb3BlcnR5LnZhbHVlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlZGl0aW5nUHJvcGVydHkudmFsdWUgPSBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdERhdGVUaW1lKHByb3BlcnR5OiBGaWxlUHJvcGVydHlNb2RlbCwgdmFsdWU6IHN0cmluZyl7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgIHByb3BlcnR5LnZhbHVlID0gZGF0ZVRpbWUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxOSk7XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0VmFsdWUocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsKXtcbiAgICBzd2l0Y2ggKHByb3BlcnR5LnR5cGUpIHtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNEZXNrdG9wID8gdGhpcy5fZGF0ZVBpcGUudHJhbnNmb3JtKG5ldyBEYXRlKHByb3BlcnR5LnZhbHVlKSwgJ01NL2RkL3l5LCBoOm1tOnNzIGEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9kYXRlUGlwZS50cmFuc2Zvcm0obmV3IERhdGUocHJvcGVydHkudmFsdWUpLCAnTU0vZGQveXksIGg6bW0gYScpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5LnZhbHVlO1xuICAgIH1cbiAgfVxufSJdfQ==