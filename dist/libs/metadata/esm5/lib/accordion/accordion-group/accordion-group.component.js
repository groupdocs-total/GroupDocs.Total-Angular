/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { WindowService } from '@groupdocs.examples.angular/common-components';
import { FilePropertyModel, AccessLevels, MetadataPropertyType, PropertyState } from '../../metadata-models';
import * as moment_ from 'moment';
/** @type {?} */
var moment = moment_;
var AccordionGroupComponent = /** @class */ (function () {
    function AccordionGroupComponent(windowService) {
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
            addedProperty.state = PropertyState.Unchanged;
            addedProperty.editing = true;
            addedProperty.name = "Select property";
            addedProperty.type = MetadataPropertyType.String;
            addedProperty.adding = true;
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
            if (property.state !== PropertyState.Added) {
                property.state = PropertyState.Edited;
            }
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
        var selectedIndex = this.properties.findIndex((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return p.selected; }));
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
        /** @type {?} */
        var deletedPropertyIndex = this.properties.findIndex((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return p.name === property.name && p.state === PropertyState.Deleted; }));
        if (deletedPropertyIndex >= 0) {
            this.properties.splice(deletedPropertyIndex, 1);
            property.state = PropertyState.Edited;
        }
        else {
            property.state = PropertyState.Added;
        }
        property.adding = false;
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
        function (p) { return (p.accessLevel & AccessLevels.Add) !== 0 && (!(p.name in propertyDictionary) || propertyDictionary[p.name].state === PropertyState.Deleted); }));
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
            return this.hasAccessTo(property, AccessLevels.Update) || property.state === PropertyState.Added;
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
        return this.hasAccessTo(property, AccessLevels.Remove) || property.state === PropertyState.Added;
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
     * @return {?}
     */
    AccordionGroupComponent.prototype.getVisiblePoperties = /**
     * @return {?}
     */
    function () {
        return this.properties.filter((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return p.state !== PropertyState.Deleted; }));
    };
    /**
     * @template T
     * @param {?} array
     * @return {?}
     */
    AccordionGroupComponent.prototype.toDictionary = /**
     * @template T
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
                    template: "<div class=\"accordion-wrapper\">\r\n    <div class=\"title\" (click)=\"toggle($event)\">\r\n      <fa-icon *ngIf=\"!opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-down']\"></fa-icon>\r\n      <fa-icon *ngIf=\"opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-up']\"></fa-icon>\r\n      <div class=\"text\">{{title}}</div>\r\n      <fa-icon class=\"trash\" *ngIf=\"isRemoveAvailable()\" [icon]=\"['fas', 'trash']\" (click)=\"delete($event)\"></fa-icon>\r\n      <gd-button class=\"plus\" [icon]=\"['plus']\" [hidden]=\"addHidden\" [disabled]=\"!isAddAvailable()\" (click)=\"addProperty($event)\"></gd-button>\r\n    </div>\r\n    <div class=\"body\" [ngClass]=\"{'hidden': !opened}\">\r\n      <div *ngFor=\"let property of getVisiblePoperties()\" class=\"property-wrapper\">\r\n          <div *ngIf=\"!property.adding\" [ngClass]=\"{'selected': property.selected, 'disabled': !isEditable(property)}\" (click)=\"selectProperty(property)\" class=\"property-name property-name-simple\" title=\"{{property.name}}\">{{property.name}}</div>\r\n          <gd-select  class=\"property-name\" *ngIf=\"property.adding\" id=\"propertiesNames\" [disabled]=\"false\" [options]=\"notAddedProperties\" (selected)=\"selectPropName($event, property)\" [showSelected]=\"{name : property.name, value : property.name}\"></gd-select>\r\n          <div *ngIf=\"!property.editing\" [ngClass]=\"{'selected': property.selected}\" (click)=\"editProperty(property)\" class=\"property-value\" title=\"{{property.value}}\">{{formatValue(property)}}</div>\r\n          <div *ngIf=\"property.editing\" class=\"input-wrapper\">\r\n            <input #textinput *ngIf=\"property.type == metadataPropertyType.String\" class=\"property-value\" [(ngModel)]=\"property.value\" />\r\n            <input *ngIf=\"property.type == metadataPropertyType.Integer || property.type == metadataPropertyType.Long\" type=\"text\" class=\"property-value\" [(ngModel)]=\"property.value\" gdInteger />\r\n            <input *ngIf=\"property.type == metadataPropertyType.Double\" type=\"number\" class=\"property-value\" [(ngModel)]=\"property.value\" />\r\n            <input *ngIf=\"property.type == metadataPropertyType.Boolean\" type=\"checkbox\" class=\"property-value\" [(ngModel)]=\"property.value\" />\r\n            <dp-date-picker *ngIf=\"property.type == metadataPropertyType.DateTime\" [mode]=\"'daytime'\" [theme]=\"'dp-material dp-main'\" [config]=\"datePickerConfig\" [ngModel]=\"dateToPicker(property.value)\" (ngModelChange)=\"dateFromPicker(property, $event)\" ></dp-date-picker>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <div>",
                    styles: [".accordion-wrapper{background-color:#fff}.accordion-wrapper .title{width:100%;cursor:pointer;border-bottom:1px solid #6e6e6e;background-color:#539cf0;color:#f4f4f4;font-weight:700;display:flex;flex-direction:row;height:37px;line-height:37px;font-size:13px}.accordion-wrapper .title .text{width:100%}.chevron{padding:0 16px 0 15px}.plus{margin-left:auto}::ng-deep .title .button{color:#fff!important;display:block!important;margin-right:0!important}::ng-deep .title .button.active fa-icon{color:#fff!important}.accordion-wrapper .body.hidden,.trash.hidden{display:none}.property-wrapper{display:flex;height:35px;font-size:12px;border-bottom:1px solid #e7e7e7;line-height:35px}.property-wrapper.disabled{cursor:not-allowed;color:#acacac}.property-name{width:216px;text-transform:uppercase;font-weight:700;padding-left:15px;border-right:1px solid #e7e7e7;text-overflow:ellipsis;word-wrap:break-word}.property-name.disabled{color:#acacac}.property-name ::ng-deep .select{height:35px;line-height:37px;text-align:center;justify-content:unset;position:relative}.property-name ::ng-deep .select .nav-caret{display:none}.property-name ::ng-deep .select .selected-value{max-width:none;font-size:unset;text-transform:none;font-weight:400}.property-name ::ng-deep .select .dropdown-menu{width:216px;margin-left:-15px;top:36px}.property-name-simple{overflow-x:hidden;word-wrap:normal}.property-value{font-family:'Courier New',Courier,monospace;padding-left:12px;text-overflow:ellipsis;width:216px;white-space:nowrap;overflow:hidden;word-wrap:break-word;display:inline-block}.property-value.desktop-hide{display:none}::ng-deep dp-date-picker.dp-material .dp-picker-input,::ng-deep dp-day-time-calendar *{font-family:'Courier New',Courier,monospace}.input-wrapper input{height:30px;border:0;font-size:12px}.input-wrapper input.hidden{display:none}.input-wrapper input[type=datetime-local]::-webkit-clear-button,.input-wrapper input[type=datetime-local]::-webkit-inner-spin-button{-webkit-appearance:none;display:none}.selected{background-color:#3e4e5a;color:#fff}::ng-deep .default .property-name{color:#acacac}@media (max-width:1037px){.property-value{width:194px!important}.property-name{width:150px!important}.property-value.mobile-hide{display:none}.input-wrapper{width:185px!important}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF3QixTQUFTLEVBQUUsWUFBWSxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUN2SCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFzQixZQUFZLEVBQUUsb0JBQW9CLEVBQWEsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFNUksT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7O0lBQzVCLE1BQU0sR0FBRyxPQUFPO0FBRXRCO0lBZ0NFLGlDQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQXhCdkMsV0FBTSxHQUFHLElBQUksQ0FBQztRQVd2QixxQkFBZ0IsR0FBc0I7WUFDcEMsTUFBTSxFQUFFLHFCQUFxQjtTQUM5QixDQUFDO1FBQ0Ysa0JBQWEsR0FBOEIsSUFBSSxHQUFHLENBQ2hEO1lBQ0Usb0JBQW9CLENBQUMsTUFBTTtZQUMzQixvQkFBb0IsQ0FBQyxPQUFPO1lBQzVCLG9CQUFvQixDQUFDLElBQUk7WUFDekIsb0JBQW9CLENBQUMsTUFBTTtZQUMzQixvQkFBb0IsQ0FBQyxPQUFPO1lBQzVCLG9CQUFvQixDQUFDLFFBQVE7U0FDOUIsQ0FBQyxDQUFDO0lBR0wsQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxhQUFh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dUJBQXVCOzs7SUFDbEMsa0RBQThDOztJQUM5Qyx5Q0FBdUI7O0lBQ3ZCLHdDQUF1Qjs7SUFDdkIsNENBQTJCOztJQUMzQiw4Q0FBOEI7O0lBQzlCLDRDQUE0Qjs7SUFDNUIsNkNBQXlDOztJQUN6QywwREFBK0Q7O0lBQy9ELHFEQUF5Qzs7SUFDekMsdURBQWtEOztJQUNsRCw0Q0FBcUQ7O0lBQ3JELDRDQUFtQjs7SUFDbkIsbURBRUU7O0lBQ0YsZ0RBUUs7Ozs7O0lBRU8sZ0RBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuLCBBZnRlclZpZXdJbml0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEZpbGVQcm9wZXJ0eU1vZGVsLCBLbm93blByb3BlcnR5TW9kZWwsIEFjY2Vzc0xldmVscywgTWV0YWRhdGFQcm9wZXJ0eVR5cGUsIElQcm9wZXJ0eSwgUHJvcGVydHlTdGF0ZSB9IGZyb20gJy4uLy4uL21ldGFkYXRhLW1vZGVscyc7XHJcbmltcG9ydCB7IElEYXRlUGlja2VyQ29uZmlnIH0gZnJvbSAnbmcyLWRhdGUtcGlja2VyJztcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1hY2NvcmRpb24tZ3JvdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGtub3duUHJvcGVydGllczogS25vd25Qcm9wZXJ0eU1vZGVsW11cclxuICBASW5wdXQoKSBvcGVuZWQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGFja2FnZUlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYWRkRGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYWRkSGlkZGVuOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHByb3BlcnRpZXM6IEZpbGVQcm9wZXJ0eU1vZGVsW107XHJcbiAga25vd25Qcm9wZXJ0eURpY3Rpb25hcnk6IHsgW2tleTogc3RyaW5nXTogS25vd25Qcm9wZXJ0eU1vZGVsIH07XHJcbiAgbm90QWRkZWRQcm9wZXJ0aWVzOiBLbm93blByb3BlcnR5TW9kZWxbXTtcclxuICBtZXRhZGF0YVByb3BlcnR5VHlwZTogdHlwZW9mIE1ldGFkYXRhUHJvcGVydHlUeXBlO1xyXG4gIEBWaWV3Q2hpbGRyZW4oJ3RleHRpbnB1dCcpIHRleHRpbnB1dDogUXVlcnlMaXN0PGFueT47XHJcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xyXG4gIGRhdGVQaWNrZXJDb25maWc6IElEYXRlUGlja2VyQ29uZmlnID0ge1xyXG4gICAgZm9ybWF0OiAnREQtTU0tWVlZWSBISDptbTpzcydcclxuICB9O1xyXG4gIGVkaXRhYmxlVHlwZXM6IFNldDxNZXRhZGF0YVByb3BlcnR5VHlwZT4gPSBuZXcgU2V0PE1ldGFkYXRhUHJvcGVydHlUeXBlPihcclxuICAgIFtcclxuICAgICAgTWV0YWRhdGFQcm9wZXJ0eVR5cGUuU3RyaW5nLCBcclxuICAgICAgTWV0YWRhdGFQcm9wZXJ0eVR5cGUuSW50ZWdlciwgXHJcbiAgICAgIE1ldGFkYXRhUHJvcGVydHlUeXBlLkxvbmcsIFxyXG4gICAgICBNZXRhZGF0YVByb3BlcnR5VHlwZS5Eb3VibGUsXHJcbiAgICAgIE1ldGFkYXRhUHJvcGVydHlUeXBlLkJvb2xlYW4sXHJcbiAgICAgIE1ldGFkYXRhUHJvcGVydHlUeXBlLkRhdGVUaW1lXHJcbiAgICBdKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaXNEZXNrdG9wID0gdGhpcy53aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xyXG4gICAgdGhpcy53aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xyXG4gICAgICB0aGlzLmlzRGVza3RvcCA9IHRoaXMud2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5rbm93blByb3BlcnR5RGljdGlvbmFyeSA9IHRoaXMudG9EaWN0aW9uYXJ5KHRoaXMua25vd25Qcm9wZXJ0aWVzKTtcclxuICAgIHRoaXMudXBkYXRlTm90QWRkZWRQcm9wZXJ0aWVzKCk7XHJcbiAgICB0aGlzLm1ldGFkYXRhUHJvcGVydHlUeXBlID0gTWV0YWRhdGFQcm9wZXJ0eVR5cGU7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnRleHRpbnB1dC5jaGFuZ2VzLnN1YnNjcmliZSgoaTogUXVlcnlMaXN0PGFueT4pPT57XHJcbiAgICAgIGlmIChpLmxlbmd0aCkge1xyXG4gICAgICAgIGkuZmlyc3QubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlc2V0UHJvcGVydGllcygpIHtcclxuICAgICAgdGhpcy5wcm9wZXJ0aWVzLmZvckVhY2gocCA9PiB7IHAuc2VsZWN0ZWQgPSBmYWxzZTsgcC5lZGl0aW5nID0gZmFsc2U7IH0pO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKCRldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvcGVydHkoJGV2ZW50OiBFdmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLnJlc2V0UHJvcGVydGllcygpO1xyXG4gICAgaWYgKHRoaXMuaXNBZGRBdmFpbGFibGUoKSkge1xyXG4gICAgICBjb25zdCBhZGRlZFByb3BlcnR5ID0gbmV3IEZpbGVQcm9wZXJ0eU1vZGVsKCk7XHJcbiAgICAgIGFkZGVkUHJvcGVydHkuc3RhdGUgPSBQcm9wZXJ0eVN0YXRlLlVuY2hhbmdlZDtcclxuICAgICAgYWRkZWRQcm9wZXJ0eS5lZGl0aW5nID0gdHJ1ZTtcclxuICAgICAgYWRkZWRQcm9wZXJ0eS5uYW1lID0gXCJTZWxlY3QgcHJvcGVydHlcIjtcclxuICAgICAgYWRkZWRQcm9wZXJ0eS50eXBlID0gTWV0YWRhdGFQcm9wZXJ0eVR5cGUuU3RyaW5nO1xyXG4gICAgICBhZGRlZFByb3BlcnR5LmFkZGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMucHJvcGVydGllcy5wdXNoKGFkZGVkUHJvcGVydHkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0UHJvcGVydHkocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsKSB7XHJcbiAgICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKCk7XHJcbiAgICAgIHByb3BlcnR5LnNlbGVjdGVkID0gIXByb3BlcnR5LnNlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgZWRpdFByb3BlcnR5KHByb3BlcnR5OiBGaWxlUHJvcGVydHlNb2RlbCl7XHJcbiAgICBpZiAodGhpcy5pc0VkaXRhYmxlKHByb3BlcnR5KSkge1xyXG4gICAgICB0aGlzLnJlc2V0UHJvcGVydGllcygpO1xyXG4gICAgICBwcm9wZXJ0eS5lZGl0aW5nID0gIXByb3BlcnR5LmVkaXRpbmc7XHJcbiAgICAgIGlmIChwcm9wZXJ0eS5zdGF0ZSAhPT0gUHJvcGVydHlTdGF0ZS5BZGRlZCkge1xyXG4gICAgICAgIHByb3BlcnR5LnN0YXRlID0gUHJvcGVydHlTdGF0ZS5FZGl0ZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlbGV0ZSgkZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSB0aGlzLnByb3BlcnRpZXMuZmluZEluZGV4KHAgPT4gcC5zZWxlY3RlZCk7XHJcblxyXG4gICAgaWYgKHNlbGVjdGVkSW5kZXggPj0gMCkge1xyXG4gICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzW3NlbGVjdGVkSW5kZXhdLnN0YXRlID09PSBQcm9wZXJ0eVN0YXRlLkFkZGVkKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzLnNwbGljZShzZWxlY3RlZEluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXNbc2VsZWN0ZWRJbmRleF0uc3RhdGUgPSBQcm9wZXJ0eVN0YXRlLkRlbGV0ZWQ7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzW3NlbGVjdGVkSW5kZXhdLnZhbHVlID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZU5vdEFkZGVkUHJvcGVydGllcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNSZW1vdmVBdmFpbGFibGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzICYmIHRoaXMucHJvcGVydGllcy5maWx0ZXIocCA9PiBwLnNlbGVjdGVkICYmIHRoaXMuaXNSZW1vdmFibGUocCkpLmxlbmd0aCA9PT0gMTtcclxuICB9XHJcblxyXG4gIGlzQWRkQXZhaWxhYmxlKCkge1xyXG4gICAgcmV0dXJuICF0aGlzLmFkZERpc2FibGVkICYmIHRoaXMubm90QWRkZWRQcm9wZXJ0aWVzLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RQcm9wTmFtZSgkZXZlbnQ6IGFueSwgcHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsKSB7XHJcbiAgICBwcm9wZXJ0eS50eXBlID0gJGV2ZW50LnR5cGU7XHJcbiAgICBwcm9wZXJ0eS5uYW1lID0gJGV2ZW50Lm5hbWU7XHJcbiAgICBpZiAoJGV2ZW50LnR5cGUgPT09IE1ldGFkYXRhUHJvcGVydHlUeXBlLkRhdGVUaW1lKSB7XHJcbiAgICAgIHByb3BlcnR5LnZhbHVlID0gbW9tZW50KCkudG9JU09TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBwcm9wZXJ0eS52YWx1ZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlZFByb3BlcnR5SW5kZXggPSB0aGlzLnByb3BlcnRpZXMuZmluZEluZGV4KHAgPT4gcC5uYW1lID09PSBwcm9wZXJ0eS5uYW1lICYmIHAuc3RhdGUgPT09IFByb3BlcnR5U3RhdGUuRGVsZXRlZCk7XHJcbiAgICBpZiAoZGVsZXRlZFByb3BlcnR5SW5kZXggPj0gMCkge1xyXG4gICAgICB0aGlzLnByb3BlcnRpZXMuc3BsaWNlKGRlbGV0ZWRQcm9wZXJ0eUluZGV4LCAxKTtcclxuICAgICAgcHJvcGVydHkuc3RhdGUgPSBQcm9wZXJ0eVN0YXRlLkVkaXRlZDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBwcm9wZXJ0eS5zdGF0ZSA9IFByb3BlcnR5U3RhdGUuQWRkZWQ7XHJcbiAgICB9XHJcbiAgICBwcm9wZXJ0eS5hZGRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMudXBkYXRlTm90QWRkZWRQcm9wZXJ0aWVzKCk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRWYWx1ZShwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpe1xyXG4gICAgc3dpdGNoIChwcm9wZXJ0eS50eXBlKSB7XHJcbiAgICAgIGNhc2UgTWV0YWRhdGFQcm9wZXJ0eVR5cGUuRGF0ZVRpbWU6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVRvUGlja2VyKHByb3BlcnR5LnZhbHVlKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gcHJvcGVydHkudmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVOb3RBZGRlZFByb3BlcnRpZXMoKSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0eURpY3Rpb25hcnkgPSB0aGlzLnRvRGljdGlvbmFyeSh0aGlzLnByb3BlcnRpZXMpO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcclxuICAgIHRoaXMubm90QWRkZWRQcm9wZXJ0aWVzID0gdGhpcy5rbm93blByb3BlcnRpZXMuZmlsdGVyKHAgPT4gKHAuYWNjZXNzTGV2ZWwgJiBBY2Nlc3NMZXZlbHMuQWRkKSAhPT0gMCAmJiAoIShwLm5hbWUgaW4gcHJvcGVydHlEaWN0aW9uYXJ5KSB8fCBwcm9wZXJ0eURpY3Rpb25hcnlbcC5uYW1lXS5zdGF0ZSA9PT0gUHJvcGVydHlTdGF0ZS5EZWxldGVkKSk7XHJcbiAgfVxyXG5cclxuICBpc0VkaXRhYmxlKHByb3BlcnR5OiBGaWxlUHJvcGVydHlNb2RlbCkge1xyXG4gICAgaWYgKHRoaXMuZWRpdGFibGVUeXBlcy5oYXMocHJvcGVydHkudHlwZSkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGFzQWNjZXNzVG8ocHJvcGVydHksIEFjY2Vzc0xldmVscy5VcGRhdGUpIHx8IHByb3BlcnR5LnN0YXRlID09PSBQcm9wZXJ0eVN0YXRlLkFkZGVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNSZW1vdmFibGUocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oYXNBY2Nlc3NUbyhwcm9wZXJ0eSwgQWNjZXNzTGV2ZWxzLlJlbW92ZSkgfHwgcHJvcGVydHkuc3RhdGUgPT09IFByb3BlcnR5U3RhdGUuQWRkZWQ7XHJcbiAgfVxyXG5cclxuICBoYXNBY2Nlc3NUbyhwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwsIGFjY2Vzc0xldmVsOiBBY2Nlc3NMZXZlbHMpIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXHJcbiAgICByZXR1cm4gcHJvcGVydHkubmFtZSBpbiB0aGlzLmtub3duUHJvcGVydHlEaWN0aW9uYXJ5ICYmICh0aGlzLmtub3duUHJvcGVydHlEaWN0aW9uYXJ5W3Byb3BlcnR5Lm5hbWVdLmFjY2Vzc0xldmVsICYgYWNjZXNzTGV2ZWwpICE9PSAwO1xyXG4gIH1cclxuXHJcbiAgZGF0ZVRvUGlja2VyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gbW9tZW50LnV0Yyh2YWx1ZSkubG9jYWwoKS5mb3JtYXQodGhpcy5kYXRlUGlja2VyQ29uZmlnLmZvcm1hdCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGRhdGVGcm9tUGlja2VyKHByb3BlcnR5OiBGaWxlUHJvcGVydHlNb2RlbCwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IGRhdGVUaW1lID0gbW9tZW50KHZhbHVlLCB0aGlzLmRhdGVQaWNrZXJDb25maWcuZm9ybWF0KTtcclxuICAgICAgcHJvcGVydHkudmFsdWUgPSBkYXRlVGltZS50b0lTT1N0cmluZygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VmlzaWJsZVBvcGVydGllcygpIHtcclxuICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXMuZmlsdGVyKHAgPT4gcC5zdGF0ZSAhPT0gUHJvcGVydHlTdGF0ZS5EZWxldGVkKTtcclxuICB9XHJcblxyXG4gIHRvRGljdGlvbmFyeTxUIGV4dGVuZHMgSVByb3BlcnR5PihhcnJheTogVFtdKSA6IHsgW2lkOiBzdHJpbmddOiBUOyB9IHtcclxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xyXG4gICAgICBvYmpbaXRlbS5uYW1lXSA9IGl0ZW07XHJcbiAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9LCB7fSk7XHJcbiAgfVxyXG59Il19