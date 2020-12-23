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
                    template: "<div class=\"accordion-wrapper\">\r\n    <div class=\"title\" (click)=\"toggle($event)\">\r\n      <fa-icon *ngIf=\"!opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-down']\"></fa-icon>\r\n      <fa-icon *ngIf=\"opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-up']\"></fa-icon>\r\n      <div class=\"text\">{{title}}</div>\r\n      <fa-icon class=\"trash\" *ngIf=\"isRemoveAvailable()\" [icon]=\"['fas', 'trash']\" (click)=\"delete($event)\"></fa-icon>\r\n      <gd-button class=\"plus\" [icon]=\"['plus']\" [hidden]=\"addHidden\" [disabled]=\"!isAddAvailable()\" (click)=\"addProperty($event)\"></gd-button>\r\n    </div>\r\n    <div class=\"body\" [ngClass]=\"{'hidden': !opened}\">\r\n      <div *ngFor=\"let property of properties\" class=\"property-wrapper\">\r\n          <div *ngIf=\"!property.added\" [ngClass]=\"{'selected': property.selected, 'disabled': !isEditable(property)}\" (click)=\"selectProperty(property)\" class=\"property-name property-name-simple\" title=\"{{property.name}}\">{{property.name}}</div>\r\n          <gd-select  class=\"property-name\" *ngIf=\"property.added\" id=\"propertiesNames\" [disabled]=\"false\" [options]=\"notAddedProperties\" (selected)=\"selectPropName($event, property)\" [showSelected]=\"{name : property.name, value : property.name}\"></gd-select>\r\n          <div *ngIf=\"!property.editing\" [ngClass]=\"{'selected': property.selected}\" (click)=\"editProperty(property)\" class=\"property-value\" title=\"{{property.value}}\">{{formatValue(property)}}</div>\r\n          <div *ngIf=\"property.editing\" class=\"input-wrapper\">\r\n            <input #textinput *ngIf=\"property.type == metadataPropertyType.String\" class=\"property-value\" [(ngModel)]=\"property.value\" />\r\n            <input *ngIf=\"property.type == metadataPropertyType.Integer || property.type == metadataPropertyType.Long\" type=\"text\" class=\"property-value\" [(ngModel)]=\"property.value\" gdInteger />\r\n            <input *ngIf=\"property.type == metadataPropertyType.Double\" type=\"number\" class=\"property-value\" [(ngModel)]=\"property.value\" />\r\n            <input *ngIf=\"property.type == metadataPropertyType.Boolean\" type=\"checkbox\" class=\"property-value\" [(ngModel)]=\"property.value\" />\r\n            <dp-date-picker *ngIf=\"property.type == metadataPropertyType.DateTime\" [mode]=\"'daytime'\" [theme]=\"'dp-material dp-main'\" [config]=\"datePickerConfig\" [ngModel]=\"dateToPicker(property.value)\" (ngModelChange)=\"dateFromPicker(property, $event)\" ></dp-date-picker>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFDdkgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBc0IsWUFBWSxFQUF1QixvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXZJLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztJQUM1QixNQUFNLEdBQUcsT0FBTztBQUV0QjtJQWlDRSxpQ0FBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUF6QnZDLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFNYixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO1FBTW5FLHFCQUFnQixHQUFzQjtZQUNwQyxNQUFNLEVBQUUscUJBQXFCO1NBQzlCLENBQUM7UUFDRixrQkFBYSxHQUE4QixJQUFJLEdBQUcsQ0FDaEQ7WUFDRSxvQkFBb0IsQ0FBQyxNQUFNO1lBQzNCLG9CQUFvQixDQUFDLE9BQU87WUFDNUIsb0JBQW9CLENBQUMsSUFBSTtZQUN6QixvQkFBb0IsQ0FBQyxNQUFNO1lBQzNCLG9CQUFvQixDQUFDLE9BQU87WUFDNUIsb0JBQW9CLENBQUMsUUFBUTtTQUM5QixDQUFDLENBQUM7SUFHTCxDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FB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SUFDbkUsMERBQStEOztJQUMvRCxxREFBeUM7O0lBQ3pDLHVEQUFpRDs7SUFDakQsNENBQXFEOztJQUNyRCw0Q0FBbUI7O0lBQ25CLG1EQUVFOztJQUNGLGdEQVFLOzs7OztJQUVPLGdEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBGaWxlUHJvcGVydHlNb2RlbCwgS25vd25Qcm9wZXJ0eU1vZGVsLCBBY2Nlc3NMZXZlbHMsIFJlbW92ZVByb3BlcnR5TW9kZWwsIE1ldGFkYXRhUHJvcGVydHlUeXBlIH0gZnJvbSAnLi4vLi4vbWV0YWRhdGEtbW9kZWxzJztcclxuaW1wb3J0IHsgSURhdGVQaWNrZXJDb25maWcgfSBmcm9tICduZzItZGF0ZS1waWNrZXInO1xyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWFjY29yZGlvbi1ncm91cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkga25vd25Qcm9wZXJ0aWVzOiBLbm93blByb3BlcnR5TW9kZWxbXVxyXG4gIEBJbnB1dCgpIG9wZW5lZCA9IHRydWU7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBwYWNrYWdlSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBhZGREaXNhYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBhZGRIaWRkZW46IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcHJvcGVydGllczogRmlsZVByb3BlcnR5TW9kZWxbXTtcclxuICBAT3V0cHV0KCkgcmVtb3ZlUHJvcGVydHkgPSBuZXcgRXZlbnRFbWl0dGVyPFJlbW92ZVByb3BlcnR5TW9kZWw+KCk7XHJcbiAga25vd25Qcm9wZXJ0eURpY3Rpb25hcnk6IHsgW2tleTogc3RyaW5nXTogS25vd25Qcm9wZXJ0eU1vZGVsIH07XHJcbiAgbm90QWRkZWRQcm9wZXJ0aWVzOiBLbm93blByb3BlcnR5TW9kZWxbXTtcclxuICBtZXRhZGF0YVByb3BlcnR5VHlwZTogdHlwZW9mIE1ldGFkYXRhUHJvcGVydHlUeXBlXHJcbiAgQFZpZXdDaGlsZHJlbigndGV4dGlucHV0JykgdGV4dGlucHV0OiBRdWVyeUxpc3Q8YW55PjtcclxuICBpc0Rlc2t0b3A6IGJvb2xlYW47XHJcbiAgZGF0ZVBpY2tlckNvbmZpZzogSURhdGVQaWNrZXJDb25maWcgPSB7XHJcbiAgICBmb3JtYXQ6ICdERC1NTS1ZWVlZIEhIOm1tOnNzJ1xyXG4gIH07XHJcbiAgZWRpdGFibGVUeXBlczogU2V0PE1ldGFkYXRhUHJvcGVydHlUeXBlPiA9IG5ldyBTZXQ8TWV0YWRhdGFQcm9wZXJ0eVR5cGU+KFxyXG4gICAgW1xyXG4gICAgICBNZXRhZGF0YVByb3BlcnR5VHlwZS5TdHJpbmcsIFxyXG4gICAgICBNZXRhZGF0YVByb3BlcnR5VHlwZS5JbnRlZ2VyLCBcclxuICAgICAgTWV0YWRhdGFQcm9wZXJ0eVR5cGUuTG9uZywgXHJcbiAgICAgIE1ldGFkYXRhUHJvcGVydHlUeXBlLkRvdWJsZSxcclxuICAgICAgTWV0YWRhdGFQcm9wZXJ0eVR5cGUuQm9vbGVhbixcclxuICAgICAgTWV0YWRhdGFQcm9wZXJ0eVR5cGUuRGF0ZVRpbWVcclxuICAgIF0pO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSB0aGlzLndpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XHJcbiAgICB0aGlzLndpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XHJcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gdGhpcy53aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmtub3duUHJvcGVydHlEaWN0aW9uYXJ5ID0gdGhpcy50b0RpY3Rpb25hcnkodGhpcy5rbm93blByb3BlcnRpZXMpO1xyXG4gICAgdGhpcy51cGRhdGVOb3RBZGRlZFByb3BlcnRpZXMoKTtcclxuICAgIHRoaXMubWV0YWRhdGFQcm9wZXJ0eVR5cGUgPSBNZXRhZGF0YVByb3BlcnR5VHlwZTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMudGV4dGlucHV0LmNoYW5nZXMuc3Vic2NyaWJlKChpOiBRdWVyeUxpc3Q8YW55Pik9PntcclxuICAgICAgaWYgKGkubGVuZ3RoKSB7XHJcbiAgICAgICAgaS5maXJzdC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRQcm9wZXJ0aWVzKCkge1xyXG4gICAgICB0aGlzLnByb3BlcnRpZXMuZm9yRWFjaChwID0+IHsgcC5zZWxlY3RlZCA9IGZhbHNlOyBwLmVkaXRpbmcgPSBmYWxzZTsgfSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoJGV2ZW50OiBFdmVudCkge1xyXG4gICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWQ7XHJcbiAgfVxyXG5cclxuICBhZGRQcm9wZXJ0eSgkZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKCk7XHJcbiAgICBpZiAodGhpcy5pc0FkZEF2YWlsYWJsZSgpKSB7XHJcbiAgICAgIGNvbnN0IGFkZGVkUHJvcGVydHkgPSBuZXcgRmlsZVByb3BlcnR5TW9kZWwoKTtcclxuICAgICAgYWRkZWRQcm9wZXJ0eS5hZGRlZCA9IHRydWU7XHJcbiAgICAgIGFkZGVkUHJvcGVydHkuZWRpdGluZyA9IHRydWU7XHJcbiAgICAgIGFkZGVkUHJvcGVydHkubmFtZSA9IFwiU2VsZWN0IHByb3BlcnR5XCI7XHJcbiAgICAgIGFkZGVkUHJvcGVydHkudHlwZSA9IDE7XHJcbiAgICAgIHRoaXMucHJvcGVydGllcy5wdXNoKGFkZGVkUHJvcGVydHkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0UHJvcGVydHkocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsKSB7XHJcbiAgICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKCk7XHJcbiAgICAgIHByb3BlcnR5LnNlbGVjdGVkID0gIXByb3BlcnR5LnNlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgZWRpdFByb3BlcnR5KHByb3BlcnR5OiBGaWxlUHJvcGVydHlNb2RlbCl7XHJcbiAgICBpZiAodGhpcy5pc0VkaXRhYmxlKHByb3BlcnR5KSkge1xyXG4gICAgICB0aGlzLnJlc2V0UHJvcGVydGllcygpO1xyXG4gICAgICBwcm9wZXJ0eS5lZGl0aW5nID0gIXByb3BlcnR5LmVkaXRpbmc7XHJcbiAgICAgIHByb3BlcnR5LmVkaXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGUoJGV2ZW50OiBFdmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZFByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzLmZpbHRlcihwID0+IHAuc2VsZWN0ZWQpWzBdO1xyXG4gICAgdGhpcy5yZW1vdmVQcm9wZXJ0eS5lbWl0KHsgcGFja2FnZUlkOiB0aGlzLnBhY2thZ2VJZCwgcHJvcGVydHk6IHNlbGVjdGVkUHJvcGVydHkgfSk7XHJcbiAgfVxyXG5cclxuICBpc1JlbW92ZUF2YWlsYWJsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXMgJiYgdGhpcy5wcm9wZXJ0aWVzLmZpbHRlcihwID0+IHAuc2VsZWN0ZWQgJiYgdGhpcy5pc1JlbW92YWJsZShwKSkubGVuZ3RoID09PSAxO1xyXG4gIH1cclxuXHJcbiAgaXNBZGRBdmFpbGFibGUoKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuYWRkRGlzYWJsZWQgJiYgdGhpcy5ub3RBZGRlZFByb3BlcnRpZXMubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIHNlbGVjdFByb3BOYW1lKCRldmVudDogYW55LCBwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpIHtcclxuICAgIHByb3BlcnR5LnR5cGUgPSAkZXZlbnQudHlwZTtcclxuICAgIHByb3BlcnR5Lm5hbWUgPSAkZXZlbnQubmFtZTtcclxuICAgIGlmICgkZXZlbnQudHlwZSA9PT0gTWV0YWRhdGFQcm9wZXJ0eVR5cGUuRGF0ZVRpbWUpIHtcclxuICAgICAgcHJvcGVydHkudmFsdWUgPSBtb21lbnQoKS50b0lTT1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHByb3BlcnR5LnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlTm90QWRkZWRQcm9wZXJ0aWVzKCk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRWYWx1ZShwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpe1xyXG4gICAgc3dpdGNoIChwcm9wZXJ0eS50eXBlKSB7XHJcbiAgICAgIGNhc2UgTWV0YWRhdGFQcm9wZXJ0eVR5cGUuRGF0ZVRpbWU6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVRvUGlja2VyKHByb3BlcnR5LnZhbHVlKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gcHJvcGVydHkudmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVOb3RBZGRlZFByb3BlcnRpZXMoKSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0eURpY3Rpb25hcnkgPSB0aGlzLnRvRGljdGlvbmFyeSh0aGlzLnByb3BlcnRpZXMpO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcclxuICAgIHRoaXMubm90QWRkZWRQcm9wZXJ0aWVzID0gdGhpcy5rbm93blByb3BlcnRpZXMuZmlsdGVyKHAgPT4gKHAuYWNjZXNzTGV2ZWwgJiBBY2Nlc3NMZXZlbHMuQWRkKSAhPT0gMCAmJiAhKHAubmFtZSBpbiBwcm9wZXJ0eURpY3Rpb25hcnkpKTtcclxuICB9XHJcblxyXG4gIGlzRWRpdGFibGUocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsKSB7XHJcbiAgICBpZiAodGhpcy5lZGl0YWJsZVR5cGVzLmhhcyhwcm9wZXJ0eS50eXBlKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5oYXNBY2Nlc3NUbyhwcm9wZXJ0eSwgQWNjZXNzTGV2ZWxzLlVwZGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc1JlbW92YWJsZShwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpIHtcclxuICAgIHJldHVybiB0aGlzLmhhc0FjY2Vzc1RvKHByb3BlcnR5LCBBY2Nlc3NMZXZlbHMuUmVtb3ZlKTtcclxuICB9XHJcblxyXG4gIGhhc0FjY2Vzc1RvKHByb3BlcnR5OiBGaWxlUHJvcGVydHlNb2RlbCwgYWNjZXNzTGV2ZWw6IEFjY2Vzc0xldmVscykge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcclxuICAgIHJldHVybiBwcm9wZXJ0eS5uYW1lIGluIHRoaXMua25vd25Qcm9wZXJ0eURpY3Rpb25hcnkgJiYgKHRoaXMua25vd25Qcm9wZXJ0eURpY3Rpb25hcnlbcHJvcGVydHkubmFtZV0uYWNjZXNzTGV2ZWwgJiBhY2Nlc3NMZXZlbCkgIT09IDA7XHJcbiAgfVxyXG5cclxuICBkYXRlVG9QaWNrZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBtb21lbnQudXRjKHZhbHVlKS5sb2NhbCgpLmZvcm1hdCh0aGlzLmRhdGVQaWNrZXJDb25maWcuZm9ybWF0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZGF0ZUZyb21QaWNrZXIocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsLCB2YWx1ZTogc3RyaW5nKXtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBjb25zdCBkYXRlVGltZSA9IG1vbWVudCh2YWx1ZSwgdGhpcy5kYXRlUGlja2VyQ29uZmlnLmZvcm1hdCk7XHJcbiAgICAgIHByb3BlcnR5LnZhbHVlID0gZGF0ZVRpbWUudG9JU09TdHJpbmcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvRGljdGlvbmFyeShhcnJheTogYW55W10pIHtcclxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xyXG4gICAgICBvYmpbaXRlbS5uYW1lXSA9IGl0ZW07XHJcbiAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9LCB7fSk7XHJcbiAgfVxyXG59Il19