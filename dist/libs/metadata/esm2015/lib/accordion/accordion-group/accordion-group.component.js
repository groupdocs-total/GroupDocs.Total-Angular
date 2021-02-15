/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, QueryList, ViewChildren } from '@angular/core';
import { WindowService } from '@groupdocs.examples.angular/common-components';
import { FilePropertyModel, AccessLevels, MetadataPropertyType } from '../../metadata-models';
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
        this.removeProperty = new EventEmitter();
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
            addedProperty.added = true;
            addedProperty.editing = true;
            addedProperty.name = "Select property";
            addedProperty.type = 1;
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
            property.edited = true;
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
        this.removeProperty.emit({ packageId: this.packageId, property: selectedProperty });
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
        p => (p.accessLevel & AccessLevels.Add) !== 0 && !(p.name in propertyDictionary)));
    }
    /**
     * @param {?} property
     * @return {?}
     */
    isEditable(property) {
        if (this.editableTypes.has(property.type)) {
            return this.hasAccessTo(property, AccessLevels.Update);
        }
    }
    /**
     * @param {?} property
     * @return {?}
     */
    isRemovable(property) {
        return this.hasAccessTo(property, AccessLevels.Remove);
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
                template: "<div class=\"accordion-wrapper\">\r\n    <div class=\"title\" (click)=\"toggle($event)\">\r\n      <fa-icon *ngIf=\"!opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-down']\"></fa-icon>\r\n      <fa-icon *ngIf=\"opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-up']\"></fa-icon>\r\n      <div class=\"text\">{{title}}</div>\r\n      <fa-icon class=\"trash\" *ngIf=\"isRemoveAvailable()\" [icon]=\"['fas', 'trash']\" (click)=\"delete($event)\"></fa-icon>\r\n      <gd-button class=\"plus\" [icon]=\"['plus']\" [hidden]=\"addHidden\" [disabled]=\"!isAddAvailable()\" (click)=\"addProperty($event)\"></gd-button>\r\n    </div>\r\n    <div class=\"body\" [ngClass]=\"{'hidden': !opened}\">\r\n      <div *ngFor=\"let property of properties\" class=\"property-wrapper\">\r\n          <div *ngIf=\"!property.added\" [ngClass]=\"{'selected': property.selected, 'disabled': !isEditable(property)}\" (click)=\"selectProperty(property)\" class=\"property-name property-name-simple\" title=\"{{property.name}}\">{{property.name}}</div>\r\n          <gd-select  class=\"property-name\" *ngIf=\"property.added\" id=\"propertiesNames\" [disabled]=\"false\" [options]=\"notAddedProperties\" (selected)=\"selectPropName($event, property)\" [showSelected]=\"{name : property.name, value : property.name}\"></gd-select>\r\n          <div *ngIf=\"!property.editing\" [ngClass]=\"{'selected': property.selected}\" (click)=\"editProperty(property)\" class=\"property-value\" title=\"{{property.value}}\">{{formatValue(property)}}</div>\r\n          <div *ngIf=\"property.editing\" class=\"input-wrapper\">\r\n            <input #textinput *ngIf=\"property.type == metadataPropertyType.String\" class=\"property-value\" [(ngModel)]=\"property.value\" />\r\n            <input *ngIf=\"property.type == metadataPropertyType.Integer || property.type == metadataPropertyType.Long\" type=\"text\" class=\"property-value\" [(ngModel)]=\"property.value\" gdInteger />\r\n            <input *ngIf=\"property.type == metadataPropertyType.Double\" type=\"number\" class=\"property-value\" [(ngModel)]=\"property.value\" />\r\n            <input *ngIf=\"property.type == metadataPropertyType.Boolean\" type=\"checkbox\" class=\"property-value\" [(ngModel)]=\"property.value\" />\r\n            <dp-date-picker *ngIf=\"property.type == metadataPropertyType.DateTime\" [mode]=\"'daytime'\" [theme]=\"'dp-material dp-main'\" [config]=\"datePickerConfig\" [ngModel]=\"dateToPicker(property.value)\" (ngModelChange)=\"dateFromPicker(property, $event)\" ></dp-date-picker>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <div>",
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
    removeProperty: [{ type: Output }],
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
    AccordionGroupComponent.prototype.removeProperty;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFDdkgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBc0IsWUFBWSxFQUF1QixvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXZJLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztNQUM1QixNQUFNLEdBQUcsT0FBTztBQVF0QixNQUFNLE9BQU8sdUJBQXVCOzs7O0lBMkJsQyxZQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQXpCdkMsV0FBTSxHQUFHLElBQUksQ0FBQztRQU1iLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFNbkUscUJBQWdCLEdBQXNCO1lBQ3BDLE1BQU0sRUFBRSxxQkFBcUI7U0FDOUIsQ0FBQztRQUNGLGtCQUFhLEdBQThCLElBQUksR0FBRyxDQUNoRDtZQUNFLG9CQUFvQixDQUFDLE1BQU07WUFDM0Isb0JBQW9CLENBQUMsT0FBTztZQUM1QixvQkFBb0IsQ0FBQyxJQUFJO1lBQ3pCLG9CQUFvQixDQUFDLE1BQU07WUFDM0Isb0JBQW9CLENBQUMsT0FBTztZQUM1QixvQkFBb0IsQ0FBQyxRQUFRO1NBQzlCLENBQUMsQ0FBQztJQUdMLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENB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Y0FBYyxDQUFDLFFBQTJCLEVBQUUsS0FBYTtRQUN2RCxJQUFJLEtBQUssRUFBRTs7a0JBQ0gsUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztZQUM1RCxRQUFRLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQVk7UUFDdkIsT0FBTyxLQUFLLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNoQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztZQUN0QixPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7OztZQXJLRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsb2pGQUErQzs7YUFFaEQ7Ozs7WUFWUSxhQUFhOzs7OEJBYW5CLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7NkJBQ0wsTUFBTTt3QkFJTixZQUFZLFNBQUMsV0FBVzs7OztJQVh6QixrREFBOEM7O0lBQzlDLHlDQUF1Qjs7SUFDdkIsd0NBQXVCOztJQUN2Qiw0Q0FBMkI7O0lBQzNCLDhDQUE4Qjs7SUFDOUIsNENBQTRCOztJQUM1Qiw2Q0FBeUM7O0lBQ3pDLGlEQUFtRTs7SUFDbkUsMERBQStEOztJQUMvRCxxREFBeUM7O0lBQ3pDLHVEQUFpRDs7SUFDakQsNENBQXFEOztJQUNyRCw0Q0FBbUI7O0lBQ25CLG1EQUVFOztJQUNGLGdEQVFLOzs7OztJQUVPLGdEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBGaWxlUHJvcGVydHlNb2RlbCwgS25vd25Qcm9wZXJ0eU1vZGVsLCBBY2Nlc3NMZXZlbHMsIFJlbW92ZVByb3BlcnR5TW9kZWwsIE1ldGFkYXRhUHJvcGVydHlUeXBlIH0gZnJvbSAnLi4vLi4vbWV0YWRhdGEtbW9kZWxzJztcclxuaW1wb3J0IHsgSURhdGVQaWNrZXJDb25maWcgfSBmcm9tICduZzItZGF0ZS1waWNrZXInO1xyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWFjY29yZGlvbi1ncm91cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkga25vd25Qcm9wZXJ0aWVzOiBLbm93blByb3BlcnR5TW9kZWxbXVxyXG4gIEBJbnB1dCgpIG9wZW5lZCA9IHRydWU7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBwYWNrYWdlSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBhZGREaXNhYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBhZGRIaWRkZW46IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcHJvcGVydGllczogRmlsZVByb3BlcnR5TW9kZWxbXTtcclxuICBAT3V0cHV0KCkgcmVtb3ZlUHJvcGVydHkgPSBuZXcgRXZlbnRFbWl0dGVyPFJlbW92ZVByb3BlcnR5TW9kZWw+KCk7XHJcbiAga25vd25Qcm9wZXJ0eURpY3Rpb25hcnk6IHsgW2tleTogc3RyaW5nXTogS25vd25Qcm9wZXJ0eU1vZGVsIH07XHJcbiAgbm90QWRkZWRQcm9wZXJ0aWVzOiBLbm93blByb3BlcnR5TW9kZWxbXTtcclxuICBtZXRhZGF0YVByb3BlcnR5VHlwZTogdHlwZW9mIE1ldGFkYXRhUHJvcGVydHlUeXBlXHJcbiAgQFZpZXdDaGlsZHJlbigndGV4dGlucHV0JykgdGV4dGlucHV0OiBRdWVyeUxpc3Q8YW55PjtcclxuICBpc0Rlc2t0b3A6IGJvb2xlYW47XHJcbiAgZGF0ZVBpY2tlckNvbmZpZzogSURhdGVQaWNrZXJDb25maWcgPSB7XHJcbiAgICBmb3JtYXQ6ICdERC1NTS1ZWVlZIEhIOm1tOnNzJ1xyXG4gIH07XHJcbiAgZWRpdGFibGVUeXBlczogU2V0PE1ldGFkYXRhUHJvcGVydHlUeXBlPiA9IG5ldyBTZXQ8TWV0YWRhdGFQcm9wZXJ0eVR5cGU+KFxyXG4gICAgW1xyXG4gICAgICBNZXRhZGF0YVByb3BlcnR5VHlwZS5TdHJpbmcsIFxyXG4gICAgICBNZXRhZGF0YVByb3BlcnR5VHlwZS5JbnRlZ2VyLCBcclxuICAgICAgTWV0YWRhdGFQcm9wZXJ0eVR5cGUuTG9uZywgXHJcbiAgICAgIE1ldGFkYXRhUHJvcGVydHlUeXBlLkRvdWJsZSxcclxuICAgICAgTWV0YWRhdGFQcm9wZXJ0eVR5cGUuQm9vbGVhbixcclxuICAgICAgTWV0YWRhdGFQcm9wZXJ0eVR5cGUuRGF0ZVRpbWVcclxuICAgIF0pO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSB0aGlzLndpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XHJcbiAgICB0aGlzLndpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XHJcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gdGhpcy53aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmtub3duUHJvcGVydHlEaWN0aW9uYXJ5ID0gdGhpcy50b0RpY3Rpb25hcnkodGhpcy5rbm93blByb3BlcnRpZXMpO1xyXG4gICAgdGhpcy51cGRhdGVOb3RBZGRlZFByb3BlcnRpZXMoKTtcclxuICAgIHRoaXMubWV0YWRhdGFQcm9wZXJ0eVR5cGUgPSBNZXRhZGF0YVByb3BlcnR5VHlwZTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMudGV4dGlucHV0LmNoYW5nZXMuc3Vic2NyaWJlKChpOiBRdWVyeUxpc3Q8YW55Pik9PntcclxuICAgICAgaWYgKGkubGVuZ3RoKSB7XHJcbiAgICAgICAgaS5maXJzdC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRQcm9wZXJ0aWVzKCkge1xyXG4gICAgICB0aGlzLnByb3BlcnRpZXMuZm9yRWFjaChwID0+IHsgcC5zZWxlY3RlZCA9IGZhbHNlOyBwLmVkaXRpbmcgPSBmYWxzZTsgfSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoJGV2ZW50OiBFdmVudCkge1xyXG4gICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWQ7XHJcbiAgfVxyXG5cclxuICBhZGRQcm9wZXJ0eSgkZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKCk7XHJcbiAgICBpZiAodGhpcy5pc0FkZEF2YWlsYWJsZSgpKSB7XHJcbiAgICAgIGNvbnN0IGFkZGVkUHJvcGVydHkgPSBuZXcgRmlsZVByb3BlcnR5TW9kZWwoKTtcclxuICAgICAgYWRkZWRQcm9wZXJ0eS5hZGRlZCA9IHRydWU7XHJcbiAgICAgIGFkZGVkUHJvcGVydHkuZWRpdGluZyA9IHRydWU7XHJcbiAgICAgIGFkZGVkUHJvcGVydHkubmFtZSA9IFwiU2VsZWN0IHByb3BlcnR5XCI7XHJcbiAgICAgIGFkZGVkUHJvcGVydHkudHlwZSA9IDE7XHJcbiAgICAgIHRoaXMucHJvcGVydGllcy5wdXNoKGFkZGVkUHJvcGVydHkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0UHJvcGVydHkocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsKSB7XHJcbiAgICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKCk7XHJcbiAgICAgIHByb3BlcnR5LnNlbGVjdGVkID0gIXByb3BlcnR5LnNlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgZWRpdFByb3BlcnR5KHByb3BlcnR5OiBGaWxlUHJvcGVydHlNb2RlbCl7XHJcbiAgICBpZiAodGhpcy5pc0VkaXRhYmxlKHByb3BlcnR5KSkge1xyXG4gICAgICB0aGlzLnJlc2V0UHJvcGVydGllcygpO1xyXG4gICAgICBwcm9wZXJ0eS5lZGl0aW5nID0gIXByb3BlcnR5LmVkaXRpbmc7XHJcbiAgICAgIHByb3BlcnR5LmVkaXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGUoJGV2ZW50OiBFdmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZFByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzLmZpbHRlcihwID0+IHAuc2VsZWN0ZWQpWzBdO1xyXG4gICAgdGhpcy5yZW1vdmVQcm9wZXJ0eS5lbWl0KHsgcGFja2FnZUlkOiB0aGlzLnBhY2thZ2VJZCwgcHJvcGVydHk6IHNlbGVjdGVkUHJvcGVydHkgfSk7XHJcbiAgfVxyXG5cclxuICBpc1JlbW92ZUF2YWlsYWJsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXMgJiYgdGhpcy5wcm9wZXJ0aWVzLmZpbHRlcihwID0+IHAuc2VsZWN0ZWQgJiYgdGhpcy5pc1JlbW92YWJsZShwKSkubGVuZ3RoID09PSAxO1xyXG4gIH1cclxuXHJcbiAgaXNBZGRBdmFpbGFibGUoKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuYWRkRGlzYWJsZWQgJiYgdGhpcy5ub3RBZGRlZFByb3BlcnRpZXMubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIHNlbGVjdFByb3BOYW1lKCRldmVudDogYW55LCBwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpIHtcclxuICAgIHByb3BlcnR5LnR5cGUgPSAkZXZlbnQudHlwZTtcclxuICAgIHByb3BlcnR5Lm5hbWUgPSAkZXZlbnQubmFtZTtcclxuICAgIGlmICgkZXZlbnQudHlwZSA9PT0gTWV0YWRhdGFQcm9wZXJ0eVR5cGUuRGF0ZVRpbWUpIHtcclxuICAgICAgcHJvcGVydHkudmFsdWUgPSBtb21lbnQoKS50b0lTT1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHByb3BlcnR5LnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlTm90QWRkZWRQcm9wZXJ0aWVzKCk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRWYWx1ZShwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpe1xyXG4gICAgc3dpdGNoIChwcm9wZXJ0eS50eXBlKSB7XHJcbiAgICAgIGNhc2UgTWV0YWRhdGFQcm9wZXJ0eVR5cGUuRGF0ZVRpbWU6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVRvUGlja2VyKHByb3BlcnR5LnZhbHVlKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gcHJvcGVydHkudmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVOb3RBZGRlZFByb3BlcnRpZXMoKSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0eURpY3Rpb25hcnkgPSB0aGlzLnRvRGljdGlvbmFyeSh0aGlzLnByb3BlcnRpZXMpO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcclxuICAgIHRoaXMubm90QWRkZWRQcm9wZXJ0aWVzID0gdGhpcy5rbm93blByb3BlcnRpZXMuZmlsdGVyKHAgPT4gKHAuYWNjZXNzTGV2ZWwgJiBBY2Nlc3NMZXZlbHMuQWRkKSAhPT0gMCAmJiAhKHAubmFtZSBpbiBwcm9wZXJ0eURpY3Rpb25hcnkpKTtcclxuICB9XHJcblxyXG4gIGlzRWRpdGFibGUocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsKSB7XHJcbiAgICBpZiAodGhpcy5lZGl0YWJsZVR5cGVzLmhhcyhwcm9wZXJ0eS50eXBlKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5oYXNBY2Nlc3NUbyhwcm9wZXJ0eSwgQWNjZXNzTGV2ZWxzLlVwZGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc1JlbW92YWJsZShwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpIHtcclxuICAgIHJldHVybiB0aGlzLmhhc0FjY2Vzc1RvKHByb3BlcnR5LCBBY2Nlc3NMZXZlbHMuUmVtb3ZlKTtcclxuICB9XHJcblxyXG4gIGhhc0FjY2Vzc1RvKHByb3BlcnR5OiBGaWxlUHJvcGVydHlNb2RlbCwgYWNjZXNzTGV2ZWw6IEFjY2Vzc0xldmVscykge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcclxuICAgIHJldHVybiBwcm9wZXJ0eS5uYW1lIGluIHRoaXMua25vd25Qcm9wZXJ0eURpY3Rpb25hcnkgJiYgKHRoaXMua25vd25Qcm9wZXJ0eURpY3Rpb25hcnlbcHJvcGVydHkubmFtZV0uYWNjZXNzTGV2ZWwgJiBhY2Nlc3NMZXZlbCkgIT09IDA7XHJcbiAgfVxyXG5cclxuICBkYXRlVG9QaWNrZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBtb21lbnQudXRjKHZhbHVlKS5sb2NhbCgpLmZvcm1hdCh0aGlzLmRhdGVQaWNrZXJDb25maWcuZm9ybWF0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZGF0ZUZyb21QaWNrZXIocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsLCB2YWx1ZTogc3RyaW5nKXtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBjb25zdCBkYXRlVGltZSA9IG1vbWVudCh2YWx1ZSwgdGhpcy5kYXRlUGlja2VyQ29uZmlnLmZvcm1hdCk7XHJcbiAgICAgIHByb3BlcnR5LnZhbHVlID0gZGF0ZVRpbWUudG9JU09TdHJpbmcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvRGljdGlvbmFyeShhcnJheTogYW55W10pIHtcclxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xyXG4gICAgICBvYmpbaXRlbS5uYW1lXSA9IGl0ZW07XHJcbiAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9LCB7fSk7XHJcbiAgfVxyXG59Il19