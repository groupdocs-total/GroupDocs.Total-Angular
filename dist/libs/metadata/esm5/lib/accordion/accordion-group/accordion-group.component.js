/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, QueryList, ViewChildren } from '@angular/core';
import { WindowService } from '@groupdocs.examples.angular/common-components';
import { AccordionService } from './../../accordion.service';
import { DatePipe } from "@angular/common";
import { FilePropertyModel } from '../../metadata-models';
var AccordionGroupComponent = /** @class */ (function () {
    function AccordionGroupComponent(_accordionService, _datePipe, _windowService) {
        var _this = this;
        this._accordionService = _accordionService;
        this._datePipe = _datePipe;
        this._windowService = _windowService;
        this.opened = false;
        this.toggle = new EventEmitter();
        this.removeProperty = new EventEmitter();
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            _this.isDesktop = _windowService.isDesktop();
        }));
    }
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
     * @param {?=} onlyEditing
     * @return {?}
     */
    AccordionGroupComponent.prototype.resetProperties = /**
     * @param {?=} onlyEditing
     * @return {?}
     */
    function (onlyEditing) {
        if (onlyEditing === void 0) { onlyEditing = false; }
        if (!onlyEditing) {
            this.properties.forEach((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return p.selected = false; }));
        }
        this.properties.forEach((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return p.editing = false; }));
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
        if (!this.addDisabled) {
            /** @type {?} */
            var addedProperty = new FilePropertyModel();
            addedProperty.original = false;
            this._accordionService.addProperty(addedProperty);
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
        if (property.category === 0 && !property.disabled) {
            this.resetProperties(true);
            /** @type {?} */
            var selectedProperty = this.properties.filter((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return p.name.toLocaleLowerCase() === property.name.toLocaleLowerCase(); }))[0];
            selectedProperty.selected = !selectedProperty.selected;
            this.properties.filter((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return p.name === property.name; }))[0].selected = selectedProperty.selected;
        }
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
        // we can edit only first group props
        if (property.category === 0 && !property.disabled) {
            this.resetProperties();
            /** @type {?} */
            var selectedProperty = this.properties.filter((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return p.name.toLocaleLowerCase() === property.name.toLocaleLowerCase(); }))[0];
            selectedProperty.editing = !selectedProperty.editing;
            this.properties.filter((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return p.name === property.name; }))[0].editing = selectedProperty.editing;
            this.properties.filter((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return p.name === property.name; }))[0].edited = true;
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
        this.removeProperty.emit(selectedProperty);
    };
    /**
     * @return {?}
     */
    AccordionGroupComponent.prototype.wasSelected = /**
     * @return {?}
     */
    function () {
        if (this.properties && this.properties.length > 0) {
            return this.properties.filter((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return p.selected; })).length === 1;
        }
        else
            return false;
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
        if ($event.type === 3) {
            property.value = new Date().toISOString().slice(0, 19);
        }
        else {
            property.value = "";
        }
    };
    /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    AccordionGroupComponent.prototype.formatDateTime = /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    function (property, value) {
        if (value) {
            /** @type {?} */
            var dateTime = new Date(value);
            property.value = dateTime.toISOString().slice(0, 19);
        }
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
            case 3:
                return this.isDesktop ? this._datePipe.transform(new Date(property.value), 'MM/dd/yy, h:mm:ss a')
                    : this._datePipe.transform(new Date(property.value), 'MM/dd/yy, h:mm a');
            default:
                return property.value;
        }
    };
    AccordionGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-accordion-group',
                    template: "<div class=\"accordion-wrapper\">\n    <div class=\"title\" (click)=\"toggle.emit($event)\">\n      <fa-icon *ngIf=\"!opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-down']\"></fa-icon>\n      <fa-icon *ngIf=\"opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-up']\"></fa-icon>\n      <div class=\"text\">{{title}}</div>\n      <fa-icon class=\"trash\" *ngIf=\"wasSelected()\" [icon]=\"['fas', 'trash']\" (click)=\"delete($event)\"></fa-icon>\n      <gd-button class=\"plus\" [icon]=\"['plus']\" [hidden]=\"addHidden\" [disabled]=\"addDisabled\" (click)=\"addProperty($event)\"></gd-button>\n    </div>\n    <div class=\"body\" [ngClass]=\"{'hidden': !opened}\">\n      <div *ngFor=\"let property of properties\" class=\"property-wrapper\" [ngClass]=\"{'disabled': property.disabled}\">\n          <div *ngIf=\"property.original\" [ngClass]=\"{'selected': property.selected}\" (click)=\"selectProperty(property)\" class=\"property-name\" title=\"{{property.name}}\">{{property.name}}</div>\n          <gd-select  class=\"property-name\" *ngIf=\"!property.original\" id=\"propertiesNames\" [disabled]=\"false\" [options]=\"propertiesNames\" (selected)=\"selectPropName($event, property)\" [showSelected]=\"{name : property.name, value : property.name}\"></gd-select>\n          <div *ngIf=\"property.original && !property.editing\" [ngClass]=\"{'selected': property.selected}\" (click)=\"editProperty(property)\" class=\"property-value\" title=\"{{property.value}}\">{{formatValue(property)}}</div>\n          <div *ngIf=\"!property.original || property.editing\" class=\"input-wrapper\">\n            <input #textinput *ngIf=\"property.type == 1 || property.type == 5\" class=\"property-value\" [(ngModel)]=\"property.value\">\n            <input *ngIf=\"property.type == 3\" type=\"datetime-local\" step=\"1\" [ngClass]=\"isDesktop ? 'property-value' : 'property-value mobile-hide'\" [ngModel]=\"property.value | date:'yyyy-MM-ddTHH:mm:ss'\" (ngModelChange)=\"formatDateTime(property, $event)\">\n            <input *ngIf=\"property.type == 3\" type=\"datetime-local\" [ngClass]=\"isDesktop ? 'property-value desktop-hide' : 'property-value'\" [ngModel]=\"property.value | date:'yyyy-MM-ddTHH:mm'\" (ngModelChange)=\"formatDateTime(property, $event)\">\n        </div>\n      </div>\n    </div>\n  <div>",
                    styles: [".accordion-wrapper{background-color:#fff}.accordion-wrapper .title{width:100%;cursor:pointer;border-bottom:1px solid #6e6e6e;background-color:#539cf0;color:#f4f4f4;font-weight:700;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;height:37px;line-height:37px;font-size:13px}.accordion-wrapper .title .text{width:100%}.chevron{padding:0 16px 0 15px}.plus{margin-left:auto}::ng-deep .title .button{color:#fff!important;display:block!important;margin-right:0!important}::ng-deep .title .button.active fa-icon{color:#fff!important}.accordion-wrapper .body.hidden,.trash.hidden{display:none}.property-wrapper{display:-webkit-box;display:flex;height:35px;font-size:12px;border-bottom:1px solid #e7e7e7;line-height:35px}.property-wrapper.disabled{cursor:not-allowed;color:#acacac}.property-name{width:216px;text-transform:uppercase;font-weight:700;padding-left:15px;border-right:1px solid #e7e7e7;text-overflow:ellipsis;word-wrap:break-word}.property-name ::ng-deep .select{height:35px;line-height:37px;text-align:center;-webkit-box-pack:unset;justify-content:unset;position:relative}.property-name ::ng-deep .select .nav-caret{display:none}.property-name ::ng-deep .select .selected-value{max-width:none;font-size:unset;text-transform:none;font-weight:400}.property-name ::ng-deep .select .dropdown-menu{width:216px;margin-left:-15px;top:36px}.property-value{font-family:'Courier New',Courier,monospace;padding-left:12px;text-overflow:ellipsis;width:216px;white-space:nowrap;overflow:hidden;word-wrap:break-word;display:inline-block}.property-value.desktop-hide{display:none}.input-wrapper input{height:30px;border:0;font-size:12px}.input-wrapper input.hidden{display:none}.input-wrapper input[type=datetime-local]::-webkit-clear-button,.input-wrapper input[type=datetime-local]::-webkit-inner-spin-button{-webkit-appearance:none;display:none}.selected{background-color:#3e4e5a;color:#fff}::ng-deep .default .property-name{color:#acacac}@media (max-width:1037px){.property-value{width:194px!important}.property-name{width:150px!important}.property-value.mobile-hide{display:none}.input-wrapper{width:185px!important}}"]
                }] }
    ];
    /** @nocollapse */
    AccordionGroupComponent.ctorParameters = function () { return [
        { type: AccordionService },
        { type: DatePipe },
        { type: WindowService }
    ]; };
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
    return AccordionGroupComponent;
}());
export { AccordionGroupComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRDtJQWtCRSxpQ0FBb0IsaUJBQW1DLEVBQ25DLFNBQW1CLEVBQ25CLGNBQTZCO1FBRmpELGlCQU9DO1FBUG1CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQWJ4QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBTWQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFPL0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlDLENBQUMsRUFBQyxDQUFDO0lBQ0ws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YUFBYTs7O3lCQVluQixLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7a0NBQ0wsS0FBSzt5QkFDTCxNQUFNO2lDQUNOLE1BQU07NEJBQ04sWUFBWSxTQUFDLFdBQVc7O0lBdUczQiw4QkFBQztDQUFBLEFBdEhELElBc0hDO1NBaEhZLHVCQUF1Qjs7O0lBQ2xDLHlDQUF3Qjs7SUFDeEIsd0NBQXVCOztJQUN2Qiw4Q0FBOEI7O0lBQzlCLDRDQUE0Qjs7SUFDNUIsNkNBQXlDOztJQUN6QyxrREFBbUM7O0lBQ25DLHlDQUE4RDs7SUFDOUQsaURBQWlFOztJQUNqRSw0Q0FBcUQ7O0lBQ3JELDRDQUFtQjs7Ozs7SUFFUCxvREFBMkM7Ozs7O0lBQzNDLDRDQUEyQjs7Ozs7SUFDM0IsaURBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcbmltcG9ydCB7IEFjY29yZGlvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL2FjY29yZGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7RGF0ZVBpcGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEZpbGVQcm9wZXJ0eU1vZGVsIH0gZnJvbSAnLi4vLi4vbWV0YWRhdGEtbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtYWNjb3JkaW9uLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQubGVzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgb3BlbmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFkZERpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBhZGRIaWRkZW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIHByb3BlcnRpZXM6IEZpbGVQcm9wZXJ0eU1vZGVsW107XG4gIEBJbnB1dCgpIHByb3BlcnRpZXNOYW1lczogc3RyaW5nW107XG4gIEBPdXRwdXQoKSB0b2dnbGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSByZW1vdmVQcm9wZXJ0eSA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZVByb3BlcnR5TW9kZWw+KCk7XG4gIEBWaWV3Q2hpbGRyZW4oJ3RleHRpbnB1dCcpIHRleHRpbnB1dDogUXVlcnlMaXN0PGFueT47XG4gIGlzRGVza3RvcDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY2NvcmRpb25TZXJ2aWNlOiBBY2NvcmRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9kYXRlUGlwZTogRGF0ZVBpcGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UpIHtcbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xuICAgICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnRleHRpbnB1dC5jaGFuZ2VzLnN1YnNjcmliZSgoaTogUXVlcnlMaXN0PGFueT4pPT57XG4gICAgICBpZiAoaS5sZW5ndGgpIHtcbiAgICAgICAgaS5maXJzdC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gIH0pO1xuICB9XG5cbiAgcmVzZXRQcm9wZXJ0aWVzKG9ubHlFZGl0aW5nOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAoIW9ubHlFZGl0aW5nKSB7XG4gICAgICB0aGlzLnByb3BlcnRpZXMuZm9yRWFjaChwID0+IHAuc2VsZWN0ZWQgPSBmYWxzZSk7XG4gICAgfVxuICAgIHRoaXMucHJvcGVydGllcy5mb3JFYWNoKHAgPT4gcC5lZGl0aW5nID0gZmFsc2UpO1xuICB9XG5cbiAgYWRkUHJvcGVydHkoJGV2ZW50OiBFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICBpZiAoIXRoaXMuYWRkRGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGFkZGVkUHJvcGVydHkgPSBuZXcgRmlsZVByb3BlcnR5TW9kZWwoKTtcbiAgICAgIGFkZGVkUHJvcGVydHkub3JpZ2luYWwgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjY29yZGlvblNlcnZpY2UuYWRkUHJvcGVydHkoYWRkZWRQcm9wZXJ0eSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0UHJvcGVydHkocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsKXtcbiAgICBpZiAocHJvcGVydHkuY2F0ZWdvcnkgPT09IDAgJiYgIXByb3BlcnR5LmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnJlc2V0UHJvcGVydGllcyh0cnVlKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllcy5maWx0ZXIocCA9PiBwLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gcHJvcGVydHkubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpKVswXTtcbiAgICAgIHNlbGVjdGVkUHJvcGVydHkuc2VsZWN0ZWQgPSAhc2VsZWN0ZWRQcm9wZXJ0eS5zZWxlY3RlZDtcbiAgICAgIHRoaXMucHJvcGVydGllcy5maWx0ZXIocCA9PiBwLm5hbWUgPT09IHByb3BlcnR5Lm5hbWUpWzBdLnNlbGVjdGVkID0gc2VsZWN0ZWRQcm9wZXJ0eS5zZWxlY3RlZDtcbiAgICB9XG4gIH1cblxuICBlZGl0UHJvcGVydHkocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsKXtcbiAgICAvLyB3ZSBjYW4gZWRpdCBvbmx5IGZpcnN0IGdyb3VwIHByb3BzXG4gICAgaWYgKHByb3BlcnR5LmNhdGVnb3J5ID09PSAwICYmICFwcm9wZXJ0eS5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5yZXNldFByb3BlcnRpZXMoKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllcy5maWx0ZXIocCA9PiBwLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gcHJvcGVydHkubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpKVswXTtcbiAgICAgIHNlbGVjdGVkUHJvcGVydHkuZWRpdGluZyA9ICFzZWxlY3RlZFByb3BlcnR5LmVkaXRpbmc7XG4gICAgICB0aGlzLnByb3BlcnRpZXMuZmlsdGVyKHAgPT4gcC5uYW1lID09PSBwcm9wZXJ0eS5uYW1lKVswXS5lZGl0aW5nID0gc2VsZWN0ZWRQcm9wZXJ0eS5lZGl0aW5nO1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzLmZpbHRlcihwID0+IHAubmFtZSA9PT0gcHJvcGVydHkubmFtZSlbMF0uZWRpdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBkZWxldGUoJGV2ZW50OiBFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBzZWxlY3RlZFByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzLmZpbHRlcihwID0+IHAuc2VsZWN0ZWQpWzBdO1xuICAgIHRoaXMucmVtb3ZlUHJvcGVydHkuZW1pdChzZWxlY3RlZFByb3BlcnR5KTtcbiAgfVxuXG4gIHdhc1NlbGVjdGVkKCkge1xuICAgIGlmICh0aGlzLnByb3BlcnRpZXMgJiYgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXMuZmlsdGVyKHAgPT4gcC5zZWxlY3RlZCkubGVuZ3RoID09PSAxO1xuICAgIH1cbiAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNlbGVjdFByb3BOYW1lKCRldmVudDogYW55LCBwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpIHtcbiAgICBwcm9wZXJ0eS50eXBlID0gJGV2ZW50LnR5cGU7XG4gICAgcHJvcGVydHkubmFtZSA9ICRldmVudC5uYW1lO1xuICAgIGlmICgkZXZlbnQudHlwZSA9PT0gMykge1xuICAgICAgcHJvcGVydHkudmFsdWUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHByb3BlcnR5LnZhbHVlID0gXCJcIjtcbiAgICB9XG4gIH1cblxuICBmb3JtYXREYXRlVGltZShwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwsIHZhbHVlOiBzdHJpbmcpe1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICBwcm9wZXJ0eS52YWx1ZSA9IGRhdGVUaW1lLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTkpO1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdFZhbHVlKHByb3BlcnR5OiBGaWxlUHJvcGVydHlNb2RlbCl7XG4gICAgc3dpdGNoIChwcm9wZXJ0eS50eXBlKSB7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiB0aGlzLmlzRGVza3RvcCA/IHRoaXMuX2RhdGVQaXBlLnRyYW5zZm9ybShuZXcgRGF0ZShwcm9wZXJ0eS52YWx1ZSksICdNTS9kZC95eSwgaDptbTpzcyBhJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5fZGF0ZVBpcGUudHJhbnNmb3JtKG5ldyBEYXRlKHByb3BlcnR5LnZhbHVlKSwgJ01NL2RkL3l5LCBoOm1tIGEnKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwcm9wZXJ0eS52YWx1ZTtcbiAgICB9XG4gIH1cbn0iXX0=