/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { WindowService } from '@groupdocs.examples.angular/common-components';
import { FilePropertyModel, AccessLevels, MetadataPropertyType, PropertyState } from '../../metadata-models';
import * as moment_ from 'moment';
/** @type {?} */
const moment = moment_;
export class AccordionGroupComponent {
    /**
     * @param {?} windowService
     */
    constructor(windowService) {
        this.windowService = windowService;
        this.opened = true;
        this.datePickerConfig = {
            format: 'DD-MM-YYYY HH:mm:ss'
        };
        this.editableTypes = new Set([
            MetadataPropertyType.String,
            MetadataPropertyType.Integer,
            MetadataPropertyType.Long,
            MetadataPropertyType.Double,
            MetadataPropertyType.Boolean,
            MetadataPropertyType.DateTime
        ]);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isDesktop = this.windowService.isDesktop();
        this.windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.isDesktop = this.windowService.isDesktop();
        }));
        this.knownPropertyDictionary = this.toDictionary(this.knownProperties);
        this.updateNotAddedProperties();
        this.metadataPropertyType = MetadataPropertyType;
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
    resetProperties() {
        this.properties.forEach((/**
         * @param {?} p
         * @return {?}
         */
        p => { p.selected = false; p.editing = false; }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggle($event) {
        this.opened = !this.opened;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    addProperty($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.resetProperties();
        if (this.isAddAvailable()) {
            /** @type {?} */
            const addedProperty = new FilePropertyModel();
            addedProperty.state = PropertyState.Unchanged;
            addedProperty.editing = true;
            addedProperty.name = "Select property";
            addedProperty.type = MetadataPropertyType.String;
            addedProperty.adding = true;
            this.properties.push(addedProperty);
        }
    }
    /**
     * @param {?} property
     * @return {?}
     */
    selectProperty(property) {
        this.resetProperties();
        property.selected = !property.selected;
    }
    /**
     * @param {?} property
     * @return {?}
     */
    editProperty(property) {
        if (this.isEditable(property)) {
            this.resetProperties();
            property.editing = !property.editing;
            if (property.state !== PropertyState.Added) {
                property.state = PropertyState.Edited;
            }
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
        const selectedIndex = this.properties.findIndex((/**
         * @param {?} p
         * @return {?}
         */
        p => p.selected));
        if (selectedIndex >= 0) {
            if (this.properties[selectedIndex].state === PropertyState.Added) {
                this.properties.splice(selectedIndex, 1);
            }
            else {
                this.properties[selectedIndex].state = PropertyState.Deleted;
                this.properties[selectedIndex].value = null;
            }
            this.updateNotAddedProperties();
        }
    }
    /**
     * @return {?}
     */
    isRemoveAvailable() {
        return this.properties && this.properties.filter((/**
         * @param {?} p
         * @return {?}
         */
        p => p.selected && this.isRemovable(p))).length === 1;
    }
    /**
     * @return {?}
     */
    isAddAvailable() {
        return !this.addDisabled && this.notAddedProperties.length > 0;
    }
    /**
     * @param {?} $event
     * @param {?} property
     * @return {?}
     */
    selectPropName($event, property) {
        property.type = $event.type;
        property.name = $event.name;
        if ($event.type === MetadataPropertyType.DateTime) {
            property.value = moment().toISOString();
        }
        else {
            property.value = "";
        }
        /** @type {?} */
        const deletedPropertyIndex = this.properties.findIndex((/**
         * @param {?} p
         * @return {?}
         */
        p => p.name === property.name && p.state === PropertyState.Deleted));
        if (deletedPropertyIndex >= 0) {
            this.properties.splice(deletedPropertyIndex, 1);
            property.state = PropertyState.Edited;
        }
        else {
            property.state = PropertyState.Added;
        }
        property.adding = false;
        this.updateNotAddedProperties();
    }
    /**
     * @param {?} property
     * @return {?}
     */
    formatValue(property) {
        switch (property.type) {
            case MetadataPropertyType.DateTime:
                return this.dateToPicker(property.value);
            default:
                return property.value;
        }
    }
    /**
     * @return {?}
     */
    updateNotAddedProperties() {
        /** @type {?} */
        const propertyDictionary = this.toDictionary(this.properties);
        // tslint:disable-next-line:no-bitwise
        this.notAddedProperties = this.knownProperties.filter((/**
         * @param {?} p
         * @return {?}
         */
        p => (p.accessLevel & AccessLevels.Add) !== 0 && (!(p.name in propertyDictionary) || propertyDictionary[p.name].state === PropertyState.Deleted)));
    }
    /**
     * @param {?} property
     * @return {?}
     */
    isEditable(property) {
        if (this.editableTypes.has(property.type)) {
            return this.hasAccessTo(property, AccessLevels.Update) || property.state === PropertyState.Added;
        }
    }
    /**
     * @param {?} property
     * @return {?}
     */
    isRemovable(property) {
        return this.hasAccessTo(property, AccessLevels.Remove) || property.state === PropertyState.Added;
    }
    /**
     * @param {?} property
     * @param {?} accessLevel
     * @return {?}
     */
    hasAccessTo(property, accessLevel) {
        // tslint:disable-next-line:no-bitwise
        return property.name in this.knownPropertyDictionary && (this.knownPropertyDictionary[property.name].accessLevel & accessLevel) !== 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    dateToPicker(value) {
        if (value) {
            return moment.utc(value).local().format(this.datePickerConfig.format);
        }
        return null;
    }
    /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    dateFromPicker(property, value) {
        if (value) {
            /** @type {?} */
            const dateTime = moment(value, this.datePickerConfig.format);
            property.value = dateTime.toISOString();
        }
    }
    /**
     * @return {?}
     */
    getVisiblePoperties() {
        return this.properties.filter((/**
         * @param {?} p
         * @return {?}
         */
        p => p.state !== PropertyState.Deleted));
    }
    /**
     * @template T
     * @param {?} array
     * @return {?}
     */
    toDictionary(array) {
        return array.reduce((/**
         * @param {?} obj
         * @param {?} item
         * @return {?}
         */
        (obj, item) => {
            obj[item.name] = item;
            return obj;
        }), {});
    }
}
AccordionGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-accordion-group',
                template: "<div class=\"accordion-wrapper\">\r\n    <div class=\"title\" (click)=\"toggle($event)\">\r\n      <fa-icon *ngIf=\"!opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-down']\"></fa-icon>\r\n      <fa-icon *ngIf=\"opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-up']\"></fa-icon>\r\n      <div class=\"text\">{{title}}</div>\r\n      <fa-icon class=\"trash\" *ngIf=\"isRemoveAvailable()\" [icon]=\"['fas', 'trash']\" (click)=\"delete($event)\"></fa-icon>\r\n      <gd-button class=\"plus\" [icon]=\"['plus']\" [hidden]=\"addHidden\" [disabled]=\"!isAddAvailable()\" (click)=\"addProperty($event)\"></gd-button>\r\n    </div>\r\n    <div class=\"body\" [ngClass]=\"{'hidden': !opened}\">\r\n      <div *ngFor=\"let property of getVisiblePoperties()\" class=\"property-wrapper\">\r\n          <div *ngIf=\"!property.adding\" [ngClass]=\"{'selected': property.selected, 'disabled': !isEditable(property)}\" (click)=\"selectProperty(property)\" class=\"property-name property-name-simple\" title=\"{{property.name}}\">{{property.name}}</div>\r\n          <gd-select  class=\"property-name\" *ngIf=\"property.adding\" id=\"propertiesNames\" [disabled]=\"false\" [options]=\"notAddedProperties\" (selected)=\"selectPropName($event, property)\" [showSelected]=\"{name : property.name, value : property.name}\"></gd-select>\r\n          <div *ngIf=\"!property.editing\" [ngClass]=\"{'selected': property.selected}\" (click)=\"editProperty(property)\" class=\"property-value\" title=\"{{property.value}}\">{{formatValue(property)}}</div>\r\n          <div *ngIf=\"property.editing\" class=\"input-wrapper\">\r\n            <input #textinput *ngIf=\"property.type == metadataPropertyType.String\" class=\"property-value\" [(ngModel)]=\"property.value\" />\r\n            <input *ngIf=\"property.type == metadataPropertyType.Integer || property.type == metadataPropertyType.Long\" type=\"text\" class=\"property-value\" [(ngModel)]=\"property.value\" gdInteger />\r\n            <input *ngIf=\"property.type == metadataPropertyType.Double\" type=\"number\" class=\"property-value\" [(ngModel)]=\"property.value\" />\r\n            <input *ngIf=\"property.type == metadataPropertyType.Boolean\" type=\"checkbox\" class=\"property-value\" [(ngModel)]=\"property.value\" />\r\n            <dp-date-picker *ngIf=\"property.type == metadataPropertyType.DateTime\" [mode]=\"'daytime'\" [theme]=\"'dp-material dp-main'\" [config]=\"datePickerConfig\" [ngModel]=\"dateToPicker(property.value)\" (ngModelChange)=\"dateFromPicker(property, $event)\" ></dp-date-picker>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <div>",
                styles: [".accordion-wrapper{background-color:#fff}.accordion-wrapper .title{width:100%;cursor:pointer;border-bottom:1px solid #6e6e6e;background-color:#539cf0;color:#f4f4f4;font-weight:700;display:flex;flex-direction:row;height:37px;line-height:37px;font-size:13px}.accordion-wrapper .title .text{width:100%}.chevron{padding:0 16px 0 15px}.plus{margin-left:auto}::ng-deep .title .button{color:#fff!important;display:block!important;margin-right:0!important}::ng-deep .title .button.active fa-icon{color:#fff!important}.accordion-wrapper .body.hidden,.trash.hidden{display:none}.property-wrapper{display:flex;height:35px;font-size:12px;border-bottom:1px solid #e7e7e7;line-height:35px}.property-wrapper.disabled{cursor:not-allowed;color:#acacac}.property-name{width:216px;text-transform:uppercase;font-weight:700;padding-left:15px;border-right:1px solid #e7e7e7;text-overflow:ellipsis;word-wrap:break-word}.property-name.disabled{color:#acacac}.property-name ::ng-deep .select{height:35px;line-height:37px;text-align:center;justify-content:unset;position:relative}.property-name ::ng-deep .select .nav-caret{display:none}.property-name ::ng-deep .select .selected-value{max-width:none;font-size:unset;text-transform:none;font-weight:400}.property-name ::ng-deep .select .dropdown-menu{width:216px;margin-left:-15px;top:36px}.property-name-simple{overflow-x:hidden;word-wrap:normal}.property-value{font-family:'Courier New',Courier,monospace;padding-left:12px;text-overflow:ellipsis;width:216px;white-space:nowrap;overflow:hidden;word-wrap:break-word;display:inline-block}.property-value.desktop-hide{display:none}::ng-deep dp-date-picker.dp-material .dp-picker-input,::ng-deep dp-day-time-calendar *{font-family:'Courier New',Courier,monospace}.input-wrapper input{height:30px;border:0;font-size:12px}.input-wrapper input.hidden{display:none}.input-wrapper input[type=datetime-local]::-webkit-clear-button,.input-wrapper input[type=datetime-local]::-webkit-inner-spin-button{-webkit-appearance:none;display:none}.selected{background-color:#3e4e5a;color:#fff}::ng-deep .default .property-name{color:#acacac}@media (max-width:1037px){.property-value{width:194px!important}.property-name{width:150px!important}.property-value.mobile-hide{display:none}.input-wrapper{width:185px!important}}"]
            }] }
];
/** @nocollapse */
AccordionGroupComponent.ctorParameters = () => [
    { type: WindowService }
];
AccordionGroupComponent.propDecorators = {
    knownProperties: [{ type: Input }],
    opened: [{ type: Input }],
    title: [{ type: Input }],
    packageId: [{ type: Input }],
    addDisabled: [{ type: Input }],
    addHidden: [{ type: Input }],
    properties: [{ type: Input }],
    textinput: [{ type: ViewChildren, args: ['textinput',] }]
};
if (false) {
    /** @type {?} */
    AccordionGroupComponent.prototype.knownProperties;
    /** @type {?} */
    AccordionGroupComponent.prototype.opened;
    /** @type {?} */
    AccordionGroupComponent.prototype.title;
    /** @type {?} */
    AccordionGroupComponent.prototype.packageId;
    /** @type {?} */
    AccordionGroupComponent.prototype.addDisabled;
    /** @type {?} */
    AccordionGroupComponent.prototype.addHidden;
    /** @type {?} */
    AccordionGroupComponent.prototype.properties;
    /** @type {?} */
    AccordionGroupComponent.prototype.knownPropertyDictionary;
    /** @type {?} */
    AccordionGroupComponent.prototype.notAddedProperties;
    /** @type {?} */
    AccordionGroupComponent.prototype.metadataPropertyType;
    /** @type {?} */
    AccordionGroupComponent.prototype.textinput;
    /** @type {?} */
    AccordionGroupComponent.prototype.isDesktop;
    /** @type {?} */
    AccordionGroupComponent.prototype.datePickerConfig;
    /** @type {?} */
    AccordionGroupComponent.prototype.editableTypes;
    /**
     * @type {?}
     * @private
     */
    AccordionGroupComponent.prototype.windowService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF3QixTQUFTLEVBQUUsWUFBWSxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUN2SCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFzQixZQUFZLEVBQUUsb0JBQW9CLEVBQWEsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFNUksT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7O01BQzVCLE1BQU0sR0FBRyxPQUFPO0FBUXRCLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUEwQmxDLFlBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBeEJ2QyxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBV3ZCLHFCQUFnQixHQUFzQjtZQUNwQyxNQUFNLEVBQUUscUJBQXFCO1NBQzlCLENBQUM7UUFDRixrQkFBYSxHQUE4QixJQUFJLEdBQUcsQ0FDaEQ7WUFDRSxvQkFBb0IsQ0FBQyxNQUFNO1lBQzNCLG9CQUFvQixDQUFDLE9BQU87WUFDNUIsb0JBQW9CLENBQUMsSUFBSTtZQUN6QixvQkFBb0IsQ0FBQyxNQUFNO1lBQzNCLG9CQUFvQixDQUFDLE9BQU87WUFDNUIsb0JBQW9CLENBQUMsUUFBUTtTQUM5QixDQUFDLENBQUM7SUFHTCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFB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IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBGaWxlUHJvcGVydHlNb2RlbCwgS25vd25Qcm9wZXJ0eU1vZGVsLCBBY2Nlc3NMZXZlbHMsIE1ldGFkYXRhUHJvcGVydHlUeXBlLCBJUHJvcGVydHksIFByb3BlcnR5U3RhdGUgfSBmcm9tICcuLi8uLi9tZXRhZGF0YS1tb2RlbHMnO1xyXG5pbXBvcnQgeyBJRGF0ZVBpY2tlckNvbmZpZyB9IGZyb20gJ25nMi1kYXRlLXBpY2tlcic7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtYWNjb3JkaW9uLWdyb3VwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBrbm93blByb3BlcnRpZXM6IEtub3duUHJvcGVydHlNb2RlbFtdXHJcbiAgQElucHV0KCkgb3BlbmVkID0gdHJ1ZTtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBhY2thZ2VJZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFkZERpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGFkZEhpZGRlbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwcm9wZXJ0aWVzOiBGaWxlUHJvcGVydHlNb2RlbFtdO1xyXG4gIGtub3duUHJvcGVydHlEaWN0aW9uYXJ5OiB7IFtrZXk6IHN0cmluZ106IEtub3duUHJvcGVydHlNb2RlbCB9O1xyXG4gIG5vdEFkZGVkUHJvcGVydGllczogS25vd25Qcm9wZXJ0eU1vZGVsW107XHJcbiAgbWV0YWRhdGFQcm9wZXJ0eVR5cGU6IHR5cGVvZiBNZXRhZGF0YVByb3BlcnR5VHlwZTtcclxuICBAVmlld0NoaWxkcmVuKCd0ZXh0aW5wdXQnKSB0ZXh0aW5wdXQ6IFF1ZXJ5TGlzdDxhbnk+O1xyXG4gIGlzRGVza3RvcDogYm9vbGVhbjtcclxuICBkYXRlUGlja2VyQ29uZmlnOiBJRGF0ZVBpY2tlckNvbmZpZyA9IHtcclxuICAgIGZvcm1hdDogJ0RELU1NLVlZWVkgSEg6bW06c3MnXHJcbiAgfTtcclxuICBlZGl0YWJsZVR5cGVzOiBTZXQ8TWV0YWRhdGFQcm9wZXJ0eVR5cGU+ID0gbmV3IFNldDxNZXRhZGF0YVByb3BlcnR5VHlwZT4oXHJcbiAgICBbXHJcbiAgICAgIE1ldGFkYXRhUHJvcGVydHlUeXBlLlN0cmluZywgXHJcbiAgICAgIE1ldGFkYXRhUHJvcGVydHlUeXBlLkludGVnZXIsIFxyXG4gICAgICBNZXRhZGF0YVByb3BlcnR5VHlwZS5Mb25nLCBcclxuICAgICAgTWV0YWRhdGFQcm9wZXJ0eVR5cGUuRG91YmxlLFxyXG4gICAgICBNZXRhZGF0YVByb3BlcnR5VHlwZS5Cb29sZWFuLFxyXG4gICAgICBNZXRhZGF0YVByb3BlcnR5VHlwZS5EYXRlVGltZVxyXG4gICAgXSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2luZG93U2VydmljZTogV2luZG93U2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmlzRGVza3RvcCA9IHRoaXMud2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcclxuICAgIHRoaXMud2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcclxuICAgICAgdGhpcy5pc0Rlc2t0b3AgPSB0aGlzLndpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMua25vd25Qcm9wZXJ0eURpY3Rpb25hcnkgPSB0aGlzLnRvRGljdGlvbmFyeSh0aGlzLmtub3duUHJvcGVydGllcyk7XHJcbiAgICB0aGlzLnVwZGF0ZU5vdEFkZGVkUHJvcGVydGllcygpO1xyXG4gICAgdGhpcy5tZXRhZGF0YVByb3BlcnR5VHlwZSA9IE1ldGFkYXRhUHJvcGVydHlUeXBlO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy50ZXh0aW5wdXQuY2hhbmdlcy5zdWJzY3JpYmUoKGk6IFF1ZXJ5TGlzdDxhbnk+KT0+e1xyXG4gICAgICBpZiAoaS5sZW5ndGgpIHtcclxuICAgICAgICBpLmZpcnN0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXNldFByb3BlcnRpZXMoKSB7XHJcbiAgICAgIHRoaXMucHJvcGVydGllcy5mb3JFYWNoKHAgPT4geyBwLnNlbGVjdGVkID0gZmFsc2U7IHAuZWRpdGluZyA9IGZhbHNlOyB9KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZSgkZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcclxuICB9XHJcblxyXG4gIGFkZFByb3BlcnR5KCRldmVudDogRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5yZXNldFByb3BlcnRpZXMoKTtcclxuICAgIGlmICh0aGlzLmlzQWRkQXZhaWxhYmxlKCkpIHtcclxuICAgICAgY29uc3QgYWRkZWRQcm9wZXJ0eSA9IG5ldyBGaWxlUHJvcGVydHlNb2RlbCgpO1xyXG4gICAgICBhZGRlZFByb3BlcnR5LnN0YXRlID0gUHJvcGVydHlTdGF0ZS5VbmNoYW5nZWQ7XHJcbiAgICAgIGFkZGVkUHJvcGVydHkuZWRpdGluZyA9IHRydWU7XHJcbiAgICAgIGFkZGVkUHJvcGVydHkubmFtZSA9IFwiU2VsZWN0IHByb3BlcnR5XCI7XHJcbiAgICAgIGFkZGVkUHJvcGVydHkudHlwZSA9IE1ldGFkYXRhUHJvcGVydHlUeXBlLlN0cmluZztcclxuICAgICAgYWRkZWRQcm9wZXJ0eS5hZGRpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnByb3BlcnRpZXMucHVzaChhZGRlZFByb3BlcnR5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdFByb3BlcnR5KHByb3BlcnR5OiBGaWxlUHJvcGVydHlNb2RlbCkge1xyXG4gICAgICB0aGlzLnJlc2V0UHJvcGVydGllcygpO1xyXG4gICAgICBwcm9wZXJ0eS5zZWxlY3RlZCA9ICFwcm9wZXJ0eS5zZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIGVkaXRQcm9wZXJ0eShwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpe1xyXG4gICAgaWYgKHRoaXMuaXNFZGl0YWJsZShwcm9wZXJ0eSkpIHtcclxuICAgICAgdGhpcy5yZXNldFByb3BlcnRpZXMoKTtcclxuICAgICAgcHJvcGVydHkuZWRpdGluZyA9ICFwcm9wZXJ0eS5lZGl0aW5nO1xyXG4gICAgICBpZiAocHJvcGVydHkuc3RhdGUgIT09IFByb3BlcnR5U3RhdGUuQWRkZWQpIHtcclxuICAgICAgICBwcm9wZXJ0eS5zdGF0ZSA9IFByb3BlcnR5U3RhdGUuRWRpdGVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGUoJGV2ZW50OiBFdmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gdGhpcy5wcm9wZXJ0aWVzLmZpbmRJbmRleChwID0+IHAuc2VsZWN0ZWQpO1xyXG5cclxuICAgIGlmIChzZWxlY3RlZEluZGV4ID49IDApIHtcclxuICAgICAgaWYgKHRoaXMucHJvcGVydGllc1tzZWxlY3RlZEluZGV4XS5zdGF0ZSA9PT0gUHJvcGVydHlTdGF0ZS5BZGRlZCkge1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllcy5zcGxpY2Uoc2VsZWN0ZWRJbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzW3NlbGVjdGVkSW5kZXhdLnN0YXRlID0gUHJvcGVydHlTdGF0ZS5EZWxldGVkO1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllc1tzZWxlY3RlZEluZGV4XS52YWx1ZSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGVOb3RBZGRlZFByb3BlcnRpZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzUmVtb3ZlQXZhaWxhYmxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcGVydGllcyAmJiB0aGlzLnByb3BlcnRpZXMuZmlsdGVyKHAgPT4gcC5zZWxlY3RlZCAmJiB0aGlzLmlzUmVtb3ZhYmxlKHApKS5sZW5ndGggPT09IDE7XHJcbiAgfVxyXG5cclxuICBpc0FkZEF2YWlsYWJsZSgpIHtcclxuICAgIHJldHVybiAhdGhpcy5hZGREaXNhYmxlZCAmJiB0aGlzLm5vdEFkZGVkUHJvcGVydGllcy5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0UHJvcE5hbWUoJGV2ZW50OiBhbnksIHByb3BlcnR5OiBGaWxlUHJvcGVydHlNb2RlbCkge1xyXG4gICAgcHJvcGVydHkudHlwZSA9ICRldmVudC50eXBlO1xyXG4gICAgcHJvcGVydHkubmFtZSA9ICRldmVudC5uYW1lO1xyXG4gICAgaWYgKCRldmVudC50eXBlID09PSBNZXRhZGF0YVByb3BlcnR5VHlwZS5EYXRlVGltZSkge1xyXG4gICAgICBwcm9wZXJ0eS52YWx1ZSA9IG1vbWVudCgpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcHJvcGVydHkudmFsdWUgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZWRQcm9wZXJ0eUluZGV4ID0gdGhpcy5wcm9wZXJ0aWVzLmZpbmRJbmRleChwID0+IHAubmFtZSA9PT0gcHJvcGVydHkubmFtZSAmJiBwLnN0YXRlID09PSBQcm9wZXJ0eVN0YXRlLkRlbGV0ZWQpO1xyXG4gICAgaWYgKGRlbGV0ZWRQcm9wZXJ0eUluZGV4ID49IDApIHtcclxuICAgICAgdGhpcy5wcm9wZXJ0aWVzLnNwbGljZShkZWxldGVkUHJvcGVydHlJbmRleCwgMSk7XHJcbiAgICAgIHByb3BlcnR5LnN0YXRlID0gUHJvcGVydHlTdGF0ZS5FZGl0ZWQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcHJvcGVydHkuc3RhdGUgPSBQcm9wZXJ0eVN0YXRlLkFkZGVkO1xyXG4gICAgfVxyXG4gICAgcHJvcGVydHkuYWRkaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLnVwZGF0ZU5vdEFkZGVkUHJvcGVydGllcygpO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0VmFsdWUocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsKXtcclxuICAgIHN3aXRjaCAocHJvcGVydHkudHlwZSkge1xyXG4gICAgICBjYXNlIE1ldGFkYXRhUHJvcGVydHlUeXBlLkRhdGVUaW1lOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVUb1BpY2tlcihwcm9wZXJ0eS52YWx1ZSk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5LnZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlTm90QWRkZWRQcm9wZXJ0aWVzKCkge1xyXG4gICAgY29uc3QgcHJvcGVydHlEaWN0aW9uYXJ5ID0gdGhpcy50b0RpY3Rpb25hcnkodGhpcy5wcm9wZXJ0aWVzKTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXHJcbiAgICB0aGlzLm5vdEFkZGVkUHJvcGVydGllcyA9IHRoaXMua25vd25Qcm9wZXJ0aWVzLmZpbHRlcihwID0+IChwLmFjY2Vzc0xldmVsICYgQWNjZXNzTGV2ZWxzLkFkZCkgIT09IDAgJiYgKCEocC5uYW1lIGluIHByb3BlcnR5RGljdGlvbmFyeSkgfHwgcHJvcGVydHlEaWN0aW9uYXJ5W3AubmFtZV0uc3RhdGUgPT09IFByb3BlcnR5U3RhdGUuRGVsZXRlZCkpO1xyXG4gIH1cclxuXHJcbiAgaXNFZGl0YWJsZShwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpIHtcclxuICAgIGlmICh0aGlzLmVkaXRhYmxlVHlwZXMuaGFzKHByb3BlcnR5LnR5cGUpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhhc0FjY2Vzc1RvKHByb3BlcnR5LCBBY2Nlc3NMZXZlbHMuVXBkYXRlKSB8fCBwcm9wZXJ0eS5zdGF0ZSA9PT0gUHJvcGVydHlTdGF0ZS5BZGRlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzUmVtb3ZhYmxlKHByb3BlcnR5OiBGaWxlUHJvcGVydHlNb2RlbCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGFzQWNjZXNzVG8ocHJvcGVydHksIEFjY2Vzc0xldmVscy5SZW1vdmUpIHx8IHByb3BlcnR5LnN0YXRlID09PSBQcm9wZXJ0eVN0YXRlLkFkZGVkO1xyXG4gIH1cclxuXHJcbiAgaGFzQWNjZXNzVG8ocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsLCBhY2Nlc3NMZXZlbDogQWNjZXNzTGV2ZWxzKSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxyXG4gICAgcmV0dXJuIHByb3BlcnR5Lm5hbWUgaW4gdGhpcy5rbm93blByb3BlcnR5RGljdGlvbmFyeSAmJiAodGhpcy5rbm93blByb3BlcnR5RGljdGlvbmFyeVtwcm9wZXJ0eS5uYW1lXS5hY2Nlc3NMZXZlbCAmIGFjY2Vzc0xldmVsKSAhPT0gMDtcclxuICB9XHJcblxyXG4gIGRhdGVUb1BpY2tlcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgcmV0dXJuIG1vbWVudC51dGModmFsdWUpLmxvY2FsKCkuZm9ybWF0KHRoaXMuZGF0ZVBpY2tlckNvbmZpZy5mb3JtYXQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBkYXRlRnJvbVBpY2tlcihwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBjb25zdCBkYXRlVGltZSA9IG1vbWVudCh2YWx1ZSwgdGhpcy5kYXRlUGlja2VyQ29uZmlnLmZvcm1hdCk7XHJcbiAgICAgIHByb3BlcnR5LnZhbHVlID0gZGF0ZVRpbWUudG9JU09TdHJpbmcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFZpc2libGVQb3BlcnRpZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzLmZpbHRlcihwID0+IHAuc3RhdGUgIT09IFByb3BlcnR5U3RhdGUuRGVsZXRlZCk7XHJcbiAgfVxyXG5cclxuICB0b0RpY3Rpb25hcnk8VCBleHRlbmRzIElQcm9wZXJ0eT4oYXJyYXk6IFRbXSkgOiB7IFtpZDogc3RyaW5nXTogVDsgfSB7XHJcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChvYmosIGl0ZW0pID0+IHtcclxuICAgICAgb2JqW2l0ZW0ubmFtZV0gPSBpdGVtO1xyXG4gICAgICByZXR1cm4gb2JqO1xyXG4gICAgfSwge30pO1xyXG4gIH1cclxufSJdfQ==