/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, QueryList, ViewChildren } from '@angular/core';
import { WindowService } from '@groupdocs.examples.angular/common-components';
import { FilePropertyModel, AccessLevels, MetadataPropertyType } from '../../metadata-models';
import * as moment_ from 'moment';
/** @type {?} */
var moment = moment_;
var AccordionGroupComponent = /** @class */ (function () {
    function AccordionGroupComponent(windowService) {
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
    AccordionGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isDesktop = this.windowService.isDesktop();
        this.windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            _this.isDesktop = _this.windowService.isDesktop();
        }));
        this.knownPropertyDictionary = this.toDictionary(this.knownProperties);
        this.updateNotAddedProperties();
        this.metadataPropertyType = MetadataPropertyType;
    };
    /**
     * @return {?}
     */
    AccordionGroupComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.textinput.changes.subscribe((/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            if (i.length) {
                i.first.nativeElement.focus();
            }
        }));
    };
    /**
     * @return {?}
     */
    AccordionGroupComponent.prototype.resetProperties = /**
     * @return {?}
     */
    function () {
        this.properties.forEach((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { p.selected = false; p.editing = false; }));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AccordionGroupComponent.prototype.toggle = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.opened = !this.opened;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AccordionGroupComponent.prototype.addProperty = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.resetProperties();
        if (this.isAddAvailable()) {
            /** @type {?} */
            var addedProperty = new FilePropertyModel();
            addedProperty.added = true;
            addedProperty.editing = true;
            addedProperty.name = "Select property";
            addedProperty.type = 1;
            this.properties.push(addedProperty);
        }
    };
    /**
     * @param {?} property
     * @return {?}
     */
    AccordionGroupComponent.prototype.selectProperty = /**
     * @param {?} property
     * @return {?}
     */
    function (property) {
        this.resetProperties();
        property.selected = !property.selected;
    };
    /**
     * @param {?} property
     * @return {?}
     */
    AccordionGroupComponent.prototype.editProperty = /**
     * @param {?} property
     * @return {?}
     */
    function (property) {
        if (this.isEditable(property)) {
            this.resetProperties();
            property.editing = !property.editing;
            property.edited = true;
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AccordionGroupComponent.prototype.delete = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        /** @type {?} */
        var selectedProperty = this.properties.filter((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return p.selected; }))[0];
        this.removeProperty.emit({ packageId: this.packageId, property: selectedProperty });
    };
    /**
     * @return {?}
     */
    AccordionGroupComponent.prototype.isRemoveAvailable = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.properties && this.properties.filter((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return p.selected && _this.isRemovable(p); })).length === 1;
    };
    /**
     * @return {?}
     */
    AccordionGroupComponent.prototype.isAddAvailable = /**
     * @return {?}
     */
    function () {
        return !this.addDisabled && this.notAddedProperties.length > 0;
    };
    /**
     * @param {?} $event
     * @param {?} property
     * @return {?}
     */
    AccordionGroupComponent.prototype.selectPropName = /**
     * @param {?} $event
     * @param {?} property
     * @return {?}
     */
    function ($event, property) {
        property.type = $event.type;
        property.name = $event.name;
        if ($event.type === MetadataPropertyType.DateTime) {
            property.value = moment().toISOString();
        }
        else {
            property.value = "";
        }
        this.updateNotAddedProperties();
    };
    /**
     * @param {?} property
     * @return {?}
     */
    AccordionGroupComponent.prototype.formatValue = /**
     * @param {?} property
     * @return {?}
     */
    function (property) {
        switch (property.type) {
            case MetadataPropertyType.DateTime:
                return this.dateToPicker(property.value);
            default:
                return property.value;
        }
    };
    /**
     * @return {?}
     */
    AccordionGroupComponent.prototype.updateNotAddedProperties = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var propertyDictionary = this.toDictionary(this.properties);
        // tslint:disable-next-line:no-bitwise
        this.notAddedProperties = this.knownProperties.filter((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return (p.accessLevel & AccessLevels.Add) !== 0 && !(p.name in propertyDictionary); }));
    };
    /**
     * @param {?} property
     * @return {?}
     */
    AccordionGroupComponent.prototype.isEditable = /**
     * @param {?} property
     * @return {?}
     */
    function (property) {
        if (this.editableTypes.has(property.type)) {
            return this.hasAccessTo(property, AccessLevels.Update);
        }
    };
    /**
     * @param {?} property
     * @return {?}
     */
    AccordionGroupComponent.prototype.isRemovable = /**
     * @param {?} property
     * @return {?}
     */
    function (property) {
        return this.hasAccessTo(property, AccessLevels.Remove);
    };
    /**
     * @param {?} property
     * @param {?} accessLevel
     * @return {?}
     */
    AccordionGroupComponent.prototype.hasAccessTo = /**
     * @param {?} property
     * @param {?} accessLevel
     * @return {?}
     */
    function (property, accessLevel) {
        // tslint:disable-next-line:no-bitwise
        return property.name in this.knownPropertyDictionary && (this.knownPropertyDictionary[property.name].accessLevel & accessLevel) !== 0;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AccordionGroupComponent.prototype.dateToPicker = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            return moment.utc(value).local().format(this.datePickerConfig.format);
        }
        return null;
    };
    /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    AccordionGroupComponent.prototype.dateFromPicker = /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    function (property, value) {
        if (value) {
            /** @type {?} */
            var dateTime = moment(value, this.datePickerConfig.format);
            property.value = dateTime.toISOString();
        }
    };
    /**
     * @param {?} array
     * @return {?}
     */
    AccordionGroupComponent.prototype.toDictionary = /**
     * @param {?} array
     * @return {?}
     */
    function (array) {
        return array.reduce((/**
         * @param {?} obj
         * @param {?} item
         * @return {?}
         */
        function (obj, item) {
            obj[item.name] = item;
            return obj;
        }), {});
    };
    AccordionGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-accordion-group',
                    template: "<div class=\"accordion-wrapper\">\n    <div class=\"title\" (click)=\"toggle($event)\">\n      <fa-icon *ngIf=\"!opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-down']\"></fa-icon>\n      <fa-icon *ngIf=\"opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-up']\"></fa-icon>\n      <div class=\"text\">{{title}}</div>\n      <fa-icon class=\"trash\" *ngIf=\"isRemoveAvailable()\" [icon]=\"['fas', 'trash']\" (click)=\"delete($event)\"></fa-icon>\n      <gd-button class=\"plus\" [icon]=\"['plus']\" [hidden]=\"addHidden\" [disabled]=\"!isAddAvailable()\" (click)=\"addProperty($event)\"></gd-button>\n    </div>\n    <div class=\"body\" [ngClass]=\"{'hidden': !opened}\">\n      <div *ngFor=\"let property of properties\" class=\"property-wrapper\">\n          <div *ngIf=\"!property.added\" [ngClass]=\"{'selected': property.selected, 'disabled': !isEditable(property)}\" (click)=\"selectProperty(property)\" class=\"property-name property-name-simple\" title=\"{{property.name}}\">{{property.name}}</div>\n          <gd-select  class=\"property-name\" *ngIf=\"property.added\" id=\"propertiesNames\" [disabled]=\"false\" [options]=\"notAddedProperties\" (selected)=\"selectPropName($event, property)\" [showSelected]=\"{name : property.name, value : property.name}\"></gd-select>\n          <div *ngIf=\"!property.editing\" [ngClass]=\"{'selected': property.selected}\" (click)=\"editProperty(property)\" class=\"property-value\" title=\"{{property.value}}\">{{formatValue(property)}}</div>\n          <div *ngIf=\"property.editing\" class=\"input-wrapper\">\n            <input #textinput *ngIf=\"property.type == metadataPropertyType.String\" class=\"property-value\" [(ngModel)]=\"property.value\" />\n            <input *ngIf=\"property.type == metadataPropertyType.Integer || property.type == metadataPropertyType.Long\" type=\"text\" class=\"property-value\" [(ngModel)]=\"property.value\" gdInteger />\n            <input *ngIf=\"property.type == metadataPropertyType.Double\" type=\"number\" class=\"property-value\" [(ngModel)]=\"property.value\" />\n            <input *ngIf=\"property.type == metadataPropertyType.Boolean\" type=\"checkbox\" class=\"property-value\" [(ngModel)]=\"property.value\" />\n            <dp-date-picker *ngIf=\"property.type == metadataPropertyType.DateTime\" [mode]=\"'daytime'\" [theme]=\"'dp-material dp-main'\" [config]=\"datePickerConfig\" [ngModel]=\"dateToPicker(property.value)\" (ngModelChange)=\"dateFromPicker(property, $event)\" ></dp-date-picker>\n        </div>\n      </div>\n    </div>\n  <div>",
                    styles: [".accordion-wrapper{background-color:#fff}.accordion-wrapper .title{width:100%;cursor:pointer;border-bottom:1px solid #6e6e6e;background-color:#539cf0;color:#f4f4f4;font-weight:700;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;height:37px;line-height:37px;font-size:13px}.accordion-wrapper .title .text{width:100%}.chevron{padding:0 16px 0 15px}.plus{margin-left:auto}::ng-deep .title .button{color:#fff!important;display:block!important;margin-right:0!important}::ng-deep .title .button.active fa-icon{color:#fff!important}.accordion-wrapper .body.hidden,.trash.hidden{display:none}.property-wrapper{display:-webkit-box;display:flex;height:35px;font-size:12px;border-bottom:1px solid #e7e7e7;line-height:35px}.property-wrapper.disabled{cursor:not-allowed;color:#acacac}.property-name{width:216px;text-transform:uppercase;font-weight:700;padding-left:15px;border-right:1px solid #e7e7e7;text-overflow:ellipsis;word-wrap:break-word}.property-name.disabled{color:#acacac}.property-name ::ng-deep .select{height:35px;line-height:37px;text-align:center;-webkit-box-pack:unset;justify-content:unset;position:relative}.property-name ::ng-deep .select .nav-caret{display:none}.property-name ::ng-deep .select .selected-value{max-width:none;font-size:unset;text-transform:none;font-weight:400}.property-name ::ng-deep .select .dropdown-menu{width:216px;margin-left:-15px;top:36px}.property-name-simple{overflow-x:hidden;word-wrap:normal}.property-value{font-family:'Courier New',Courier,monospace;padding-left:12px;text-overflow:ellipsis;width:216px;white-space:nowrap;overflow:hidden;word-wrap:break-word;display:inline-block}.property-value.desktop-hide{display:none}::ng-deep dp-date-picker.dp-material .dp-picker-input,::ng-deep dp-day-time-calendar *{font-family:'Courier New',Courier,monospace}.input-wrapper input{height:30px;border:0;font-size:12px}.input-wrapper input.hidden{display:none}.input-wrapper input[type=datetime-local]::-webkit-clear-button,.input-wrapper input[type=datetime-local]::-webkit-inner-spin-button{-webkit-appearance:none;display:none}.selected{background-color:#3e4e5a;color:#fff}::ng-deep .default .property-name{color:#acacac}@media (max-width:1037px){.property-value{width:194px!important}.property-name{width:150px!important}.property-value.mobile-hide{display:none}.input-wrapper{width:185px!important}}"]
                }] }
    ];
    /** @nocollapse */
    AccordionGroupComponent.ctorParameters = function () { return [
        { type: WindowService }
    ]; };
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
    return AccordionGroupComponent;
}());
export { AccordionGroupComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFDdkgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBc0IsWUFBWSxFQUF1QixvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXZJLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztJQUM1QixNQUFNLEdBQUcsT0FBTztBQUV0QjtJQWlDRSxpQ0FBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUF6QnZDLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFNYixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO1FBTW5FLHFCQUFnQixHQUFzQjtZQUNwQyxNQUFNLEVBQUUscUJBQXFCO1NBQzlCLENBQUM7UUFDRixrQkFBYSxHQUE4QixJQUFJLEdBQUcsQ0FDaEQ7WUFDRSxvQkFBb0IsQ0FBQyxNQUFNO1lBQzNCLG9CQUFvQixDQUFDLE9BQU87WUFDNUIsb0JBQW9CLENBQUMsSUFBSTtZQUN6QixvQkFBb0IsQ0FBQyxNQUFNO1lBQzNCLG9CQUFvQixDQUFDLE9BQU87WUFDNUIsb0JBQW9CLENBQUMsUUFBUTtTQUM5QixDQUFDLENBQUM7SUFHTCxDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FB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SUFDbkUsMERBQStEOztJQUMvRCxxREFBeUM7O0lBQ3pDLHVEQUFpRDs7SUFDakQsNENBQXFEOztJQUNyRCw0Q0FBbUI7O0lBQ25CLG1EQUVFOztJQUNGLGdEQVFLOzs7OztJQUVPLGdEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcbmltcG9ydCB7IEZpbGVQcm9wZXJ0eU1vZGVsLCBLbm93blByb3BlcnR5TW9kZWwsIEFjY2Vzc0xldmVscywgUmVtb3ZlUHJvcGVydHlNb2RlbCwgTWV0YWRhdGFQcm9wZXJ0eVR5cGUgfSBmcm9tICcuLi8uLi9tZXRhZGF0YS1tb2RlbHMnO1xuaW1wb3J0IHsgSURhdGVQaWNrZXJDb25maWcgfSBmcm9tICduZzItZGF0ZS1waWNrZXInO1xuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xuY29uc3QgbW9tZW50ID0gbW9tZW50XztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtYWNjb3JkaW9uLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQubGVzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBrbm93blByb3BlcnRpZXM6IEtub3duUHJvcGVydHlNb2RlbFtdXG4gIEBJbnB1dCgpIG9wZW5lZCA9IHRydWU7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhY2thZ2VJZDogc3RyaW5nO1xuICBASW5wdXQoKSBhZGREaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgYWRkSGlkZGVuOiBib29sZWFuO1xuICBASW5wdXQoKSBwcm9wZXJ0aWVzOiBGaWxlUHJvcGVydHlNb2RlbFtdO1xuICBAT3V0cHV0KCkgcmVtb3ZlUHJvcGVydHkgPSBuZXcgRXZlbnRFbWl0dGVyPFJlbW92ZVByb3BlcnR5TW9kZWw+KCk7XG4gIGtub3duUHJvcGVydHlEaWN0aW9uYXJ5OiB7IFtrZXk6IHN0cmluZ106IEtub3duUHJvcGVydHlNb2RlbCB9O1xuICBub3RBZGRlZFByb3BlcnRpZXM6IEtub3duUHJvcGVydHlNb2RlbFtdO1xuICBtZXRhZGF0YVByb3BlcnR5VHlwZTogdHlwZW9mIE1ldGFkYXRhUHJvcGVydHlUeXBlXG4gIEBWaWV3Q2hpbGRyZW4oJ3RleHRpbnB1dCcpIHRleHRpbnB1dDogUXVlcnlMaXN0PGFueT47XG4gIGlzRGVza3RvcDogYm9vbGVhbjtcbiAgZGF0ZVBpY2tlckNvbmZpZzogSURhdGVQaWNrZXJDb25maWcgPSB7XG4gICAgZm9ybWF0OiAnREQtTU0tWVlZWSBISDptbTpzcydcbiAgfTtcbiAgZWRpdGFibGVUeXBlczogU2V0PE1ldGFkYXRhUHJvcGVydHlUeXBlPiA9IG5ldyBTZXQ8TWV0YWRhdGFQcm9wZXJ0eVR5cGU+KFxuICAgIFtcbiAgICAgIE1ldGFkYXRhUHJvcGVydHlUeXBlLlN0cmluZywgXG4gICAgICBNZXRhZGF0YVByb3BlcnR5VHlwZS5JbnRlZ2VyLCBcbiAgICAgIE1ldGFkYXRhUHJvcGVydHlUeXBlLkxvbmcsIFxuICAgICAgTWV0YWRhdGFQcm9wZXJ0eVR5cGUuRG91YmxlLFxuICAgICAgTWV0YWRhdGFQcm9wZXJ0eVR5cGUuQm9vbGVhbixcbiAgICAgIE1ldGFkYXRhUHJvcGVydHlUeXBlLkRhdGVUaW1lXG4gICAgXSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzRGVza3RvcCA9IHRoaXMud2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICB0aGlzLndpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XG4gICAgICB0aGlzLmlzRGVza3RvcCA9IHRoaXMud2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICB9KTtcbiAgICB0aGlzLmtub3duUHJvcGVydHlEaWN0aW9uYXJ5ID0gdGhpcy50b0RpY3Rpb25hcnkodGhpcy5rbm93blByb3BlcnRpZXMpO1xuICAgIHRoaXMudXBkYXRlTm90QWRkZWRQcm9wZXJ0aWVzKCk7XG4gICAgdGhpcy5tZXRhZGF0YVByb3BlcnR5VHlwZSA9IE1ldGFkYXRhUHJvcGVydHlUeXBlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMudGV4dGlucHV0LmNoYW5nZXMuc3Vic2NyaWJlKChpOiBRdWVyeUxpc3Q8YW55Pik9PntcbiAgICAgIGlmIChpLmxlbmd0aCkge1xuICAgICAgICBpLmZpcnN0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0UHJvcGVydGllcygpIHtcbiAgICAgIHRoaXMucHJvcGVydGllcy5mb3JFYWNoKHAgPT4geyBwLnNlbGVjdGVkID0gZmFsc2U7IHAuZWRpdGluZyA9IGZhbHNlOyB9KTtcbiAgfVxuXG4gIHRvZ2dsZSgkZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWQ7XG4gIH1cblxuICBhZGRQcm9wZXJ0eSgkZXZlbnQ6IEV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKCk7XG4gICAgaWYgKHRoaXMuaXNBZGRBdmFpbGFibGUoKSkge1xuICAgICAgY29uc3QgYWRkZWRQcm9wZXJ0eSA9IG5ldyBGaWxlUHJvcGVydHlNb2RlbCgpO1xuICAgICAgYWRkZWRQcm9wZXJ0eS5hZGRlZCA9IHRydWU7XG4gICAgICBhZGRlZFByb3BlcnR5LmVkaXRpbmcgPSB0cnVlO1xuICAgICAgYWRkZWRQcm9wZXJ0eS5uYW1lID0gXCJTZWxlY3QgcHJvcGVydHlcIjtcbiAgICAgIGFkZGVkUHJvcGVydHkudHlwZSA9IDE7XG4gICAgICB0aGlzLnByb3BlcnRpZXMucHVzaChhZGRlZFByb3BlcnR5KTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RQcm9wZXJ0eShwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpIHtcbiAgICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKCk7XG4gICAgICBwcm9wZXJ0eS5zZWxlY3RlZCA9ICFwcm9wZXJ0eS5zZWxlY3RlZDtcbiAgfVxuXG4gIGVkaXRQcm9wZXJ0eShwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpe1xuICAgIGlmICh0aGlzLmlzRWRpdGFibGUocHJvcGVydHkpKSB7XG4gICAgICB0aGlzLnJlc2V0UHJvcGVydGllcygpO1xuICAgICAgcHJvcGVydHkuZWRpdGluZyA9ICFwcm9wZXJ0eS5lZGl0aW5nO1xuICAgICAgcHJvcGVydHkuZWRpdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBkZWxldGUoJGV2ZW50OiBFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBzZWxlY3RlZFByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzLmZpbHRlcihwID0+IHAuc2VsZWN0ZWQpWzBdO1xuICAgIHRoaXMucmVtb3ZlUHJvcGVydHkuZW1pdCh7IHBhY2thZ2VJZDogdGhpcy5wYWNrYWdlSWQsIHByb3BlcnR5OiBzZWxlY3RlZFByb3BlcnR5IH0pO1xuICB9XG5cbiAgaXNSZW1vdmVBdmFpbGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydGllcyAmJiB0aGlzLnByb3BlcnRpZXMuZmlsdGVyKHAgPT4gcC5zZWxlY3RlZCAmJiB0aGlzLmlzUmVtb3ZhYmxlKHApKS5sZW5ndGggPT09IDE7XG4gIH1cblxuICBpc0FkZEF2YWlsYWJsZSgpIHtcbiAgICByZXR1cm4gIXRoaXMuYWRkRGlzYWJsZWQgJiYgdGhpcy5ub3RBZGRlZFByb3BlcnRpZXMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIHNlbGVjdFByb3BOYW1lKCRldmVudDogYW55LCBwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpIHtcbiAgICBwcm9wZXJ0eS50eXBlID0gJGV2ZW50LnR5cGU7XG4gICAgcHJvcGVydHkubmFtZSA9ICRldmVudC5uYW1lO1xuICAgIGlmICgkZXZlbnQudHlwZSA9PT0gTWV0YWRhdGFQcm9wZXJ0eVR5cGUuRGF0ZVRpbWUpIHtcbiAgICAgIHByb3BlcnR5LnZhbHVlID0gbW9tZW50KCkudG9JU09TdHJpbmcoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwcm9wZXJ0eS52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlTm90QWRkZWRQcm9wZXJ0aWVzKCk7XG4gIH1cblxuICBmb3JtYXRWYWx1ZShwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpe1xuICAgIHN3aXRjaCAocHJvcGVydHkudHlwZSkge1xuICAgICAgY2FzZSBNZXRhZGF0YVByb3BlcnR5VHlwZS5EYXRlVGltZTpcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVRvUGlja2VyKHByb3BlcnR5LnZhbHVlKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwcm9wZXJ0eS52YWx1ZTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVOb3RBZGRlZFByb3BlcnRpZXMoKSB7XG4gICAgY29uc3QgcHJvcGVydHlEaWN0aW9uYXJ5ID0gdGhpcy50b0RpY3Rpb25hcnkodGhpcy5wcm9wZXJ0aWVzKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgIHRoaXMubm90QWRkZWRQcm9wZXJ0aWVzID0gdGhpcy5rbm93blByb3BlcnRpZXMuZmlsdGVyKHAgPT4gKHAuYWNjZXNzTGV2ZWwgJiBBY2Nlc3NMZXZlbHMuQWRkKSAhPT0gMCAmJiAhKHAubmFtZSBpbiBwcm9wZXJ0eURpY3Rpb25hcnkpKTtcbiAgfVxuXG4gIGlzRWRpdGFibGUocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsKSB7XG4gICAgaWYgKHRoaXMuZWRpdGFibGVUeXBlcy5oYXMocHJvcGVydHkudHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhc0FjY2Vzc1RvKHByb3BlcnR5LCBBY2Nlc3NMZXZlbHMuVXBkYXRlKTtcbiAgICB9XG4gIH1cblxuICBpc1JlbW92YWJsZShwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNBY2Nlc3NUbyhwcm9wZXJ0eSwgQWNjZXNzTGV2ZWxzLlJlbW92ZSk7XG4gIH1cblxuICBoYXNBY2Nlc3NUbyhwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwsIGFjY2Vzc0xldmVsOiBBY2Nlc3NMZXZlbHMpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgIHJldHVybiBwcm9wZXJ0eS5uYW1lIGluIHRoaXMua25vd25Qcm9wZXJ0eURpY3Rpb25hcnkgJiYgKHRoaXMua25vd25Qcm9wZXJ0eURpY3Rpb25hcnlbcHJvcGVydHkubmFtZV0uYWNjZXNzTGV2ZWwgJiBhY2Nlc3NMZXZlbCkgIT09IDA7XG4gIH1cblxuICBkYXRlVG9QaWNrZXIodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIG1vbWVudC51dGModmFsdWUpLmxvY2FsKCkuZm9ybWF0KHRoaXMuZGF0ZVBpY2tlckNvbmZpZy5mb3JtYXQpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGRhdGVGcm9tUGlja2VyKHByb3BlcnR5OiBGaWxlUHJvcGVydHlNb2RlbCwgdmFsdWU6IHN0cmluZyl7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCBkYXRlVGltZSA9IG1vbWVudCh2YWx1ZSwgdGhpcy5kYXRlUGlja2VyQ29uZmlnLmZvcm1hdCk7XG4gICAgICBwcm9wZXJ0eS52YWx1ZSA9IGRhdGVUaW1lLnRvSVNPU3RyaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgdG9EaWN0aW9uYXJ5KGFycmF5OiBhbnlbXSkge1xuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xuICAgICAgb2JqW2l0ZW0ubmFtZV0gPSBpdGVtO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9LCB7fSk7XG4gIH1cbn0iXX0=