/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, QueryList, ViewChildren } from '@angular/core';
import { FilePropertyModel, WindowService } from '@groupdocs.examples.angular/common-components';
import { AccordionService } from './../../accordion.service';
import { DatePipe } from "@angular/common";
var AccordionGroupComponent = /** @class */ (function () {
    function AccordionGroupComponent(_accordionService, _datePipe, _windowService) {
        var _this = this;
        this._accordionService = _accordionService;
        this._datePipe = _datePipe;
        this._windowService = _windowService;
        this.opened = false;
        this.toggle = new EventEmitter();
        this._selectedPropName = "Select property";
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
    Object.defineProperty(AccordionGroupComponent.prototype, "selectedPropName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedPropName;
        },
        enumerable: true,
        configurable: true
    });
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
        // for the moment we are working only with a single property
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
        this._selectedPropName = "Select property";
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
        this._accordionService.removeProperty(selectedProperty);
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
     * @return {?}
     */
    AccordionGroupComponent.prototype.selectPropName = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this._selectedPropName = $event.name;
        /** @type {?} */
        var editingProperty = this.properties.filter((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return !p.original; }))[0];
        editingProperty.type = $event.type;
        editingProperty.name = $event.name;
        if ($event.type === 3) {
            editingProperty.value = new Date().toISOString().slice(0, 19);
        }
        else {
            editingProperty.value = "";
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
                    template: "<div class=\"accordion-wrapper\">\n    <div class=\"title\" (click)=\"toggle.emit($event)\">\n      <fa-icon *ngIf=\"!opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-down']\"></fa-icon>\n      <fa-icon *ngIf=\"opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-up']\"></fa-icon>\n      <div class=\"text\">{{title}}</div>\n      <fa-icon class=\"trash\" *ngIf=\"wasSelected()\" [icon]=\"['fas', 'trash']\" (click)=\"delete($event)\"></fa-icon>\n      <gd-button class=\"plus\" [icon]=\"['plus']\" [hidden]=\"addHidden\" [disabled]=\"addDisabled\" (click)=\"addProperty($event)\"></gd-button>\n    </div>\n    <div class=\"body\" [ngClass]=\"{'hidden': !opened}\">\n      <div *ngFor=\"let property of properties\" class=\"property-wrapper\" [ngClass]=\"{'disabled': property.disabled}\">\n          <div *ngIf=\"property.original\" [ngClass]=\"{'selected': property.selected}\" (click)=\"selectProperty(property)\" class=\"property-name\" title=\"{{property.name}}\">{{property.name}}</div>\n          <gd-select  class=\"property-name\" *ngIf=\"!property.original\" id=\"propertiesNames\" [disabled]=\"false\" [options]=\"propertiesNames\" (selected)=\"selectPropName($event)\" [showSelected]=\"{name : selectedPropName, value : selectedPropName}\"></gd-select>\n          <div *ngIf=\"property.original && !property.editing\" [ngClass]=\"{'selected': property.selected}\" (click)=\"editProperty(property)\" class=\"property-value\" title=\"{{property.value}}\">{{formatValue(property)}}</div>\n          <div *ngIf=\"!property.original || property.editing\" class=\"input-wrapper\">\n            <input #textinput *ngIf=\"property.type == 1 || property.type == 5\" class=\"property-value\" [(ngModel)]=\"property.value\">\n            <input *ngIf=\"property.type == 3\" type=\"datetime-local\" step=\"1\" [ngClass]=\"isDesktop ? 'property-value' : 'property-value mobile-hide'\" [ngModel]=\"property.value | date:'yyyy-MM-ddTHH:mm:ss'\" (ngModelChange)=\"formatDateTime(property, $event)\">\n            <input *ngIf=\"property.type == 3\" type=\"datetime-local\" [ngClass]=\"isDesktop ? 'property-value desktop-hide' : 'property-value'\" [ngModel]=\"property.value | date:'yyyy-MM-ddTHH:mm'\" (ngModelChange)=\"formatDateTime(property, $event)\">\n        </div>\n      </div>\n    </div>\n  <div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QztJQWtCRSxpQ0FBb0IsaUJBQW1DLEVBQ25DLFNBQW1CLEVBQ25CLGNBQTZCO1FBRmpELGlCQU9DO1FBUG1CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQWJ4QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBTWQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTdELHNCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBTXJDLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxpREFBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMs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QTVIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsZ3hFQUErQzs7aUJBRWhEOzs7O2dCQVBRLGdCQUFnQjtnQkFDakIsUUFBUTtnQkFGWSxhQUFhOzs7eUJBV3RDLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSztrQ0FDTCxLQUFLO3lCQUNMLE1BQU07NEJBQ04sWUFBWSxTQUFDLFdBQVc7O0lBK0czQiw4QkFBQztDQUFBLEFBN0hELElBNkhDO1NBdkhZLHVCQUF1Qjs7O0lBQ2xDLHlDQUF3Qjs7SUFDeEIsd0NBQXVCOztJQUN2Qiw4Q0FBOEI7O0lBQzlCLDRDQUE0Qjs7SUFDNUIsNkNBQXlDOztJQUN6QyxrREFBbUM7O0lBQ25DLHlDQUE4RDs7SUFDOUQsNENBQXFEOztJQUNwRCxvREFBc0M7O0lBQ3RDLDRDQUFtQjs7Ozs7SUFFUixvREFBMkM7Ozs7O0lBQzNDLDRDQUEyQjs7Ozs7SUFDM0IsaURBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWxlUHJvcGVydHlNb2RlbCwgV2luZG93U2VydmljZSB9IGZyb20gJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XG5pbXBvcnQgeyBBY2NvcmRpb25TZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9hY2NvcmRpb24uc2VydmljZSc7XG5pbXBvcnQge0RhdGVQaXBlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWFjY29yZGlvbi1ncm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50Lmxlc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIG9wZW5lZCA9IGZhbHNlO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBhZGREaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgYWRkSGlkZGVuOiBib29sZWFuO1xuICBASW5wdXQoKSBwcm9wZXJ0aWVzOiBGaWxlUHJvcGVydHlNb2RlbFtdO1xuICBASW5wdXQoKSBwcm9wZXJ0aWVzTmFtZXM6IHN0cmluZ1tdO1xuICBAT3V0cHV0KCkgdG9nZ2xlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAVmlld0NoaWxkcmVuKCd0ZXh0aW5wdXQnKSB0ZXh0aW5wdXQ6IFF1ZXJ5TGlzdDxhbnk+OyBcbiAgIF9zZWxlY3RlZFByb3BOYW1lID0gXCJTZWxlY3QgcHJvcGVydHlcIjtcbiAgIGlzRGVza3RvcDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY2NvcmRpb25TZXJ2aWNlOiBBY2NvcmRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9kYXRlUGlwZTogRGF0ZVBpcGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UpIHtcbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xuICAgICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnRleHRpbnB1dC5jaGFuZ2VzLnN1YnNjcmliZSgoaTogUXVlcnlMaXN0PGFueT4pPT57XG4gICAgICBpZiAoaS5sZW5ndGgpIHtcbiAgICAgICAgaS5maXJzdC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gIH0pO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkUHJvcE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkUHJvcE5hbWU7XG4gIH1cblxuICByZXNldFByb3BlcnRpZXMob25seUVkaXRpbmc6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIC8vIGZvciB0aGUgbW9tZW50IHdlIGFyZSB3b3JraW5nIG9ubHkgd2l0aCBhIHNpbmdsZSBwcm9wZXJ0eVxuICAgIGlmICghb25seUVkaXRpbmcpIHtcbiAgICAgIHRoaXMucHJvcGVydGllcy5mb3JFYWNoKHAgPT4gcC5zZWxlY3RlZCA9IGZhbHNlKTtcbiAgICB9XG4gICAgdGhpcy5wcm9wZXJ0aWVzLmZvckVhY2gocCA9PiBwLmVkaXRpbmcgPSBmYWxzZSk7XG4gIH1cblxuICBhZGRQcm9wZXJ0eSgkZXZlbnQ6IEV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy5fc2VsZWN0ZWRQcm9wTmFtZSA9IFwiU2VsZWN0IHByb3BlcnR5XCI7XG4gICAgdGhpcy5yZXNldFByb3BlcnRpZXMoKTtcblxuICAgIGlmICghdGhpcy5hZGREaXNhYmxlZCkge1xuICAgICAgY29uc3QgYWRkZWRQcm9wZXJ0eSA9IG5ldyBGaWxlUHJvcGVydHlNb2RlbCgpO1xuICAgICAgYWRkZWRQcm9wZXJ0eS5vcmlnaW5hbCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWNjb3JkaW9uU2VydmljZS5hZGRQcm9wZXJ0eShhZGRlZFByb3BlcnR5KTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RQcm9wZXJ0eShwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpe1xuICAgIGlmIChwcm9wZXJ0eS5jYXRlZ29yeSA9PT0gMCAmJiAhcHJvcGVydHkuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKHRydWUpO1xuXG4gICAgICBjb25zdCBzZWxlY3RlZFByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzLmZpbHRlcihwID0+IHAubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBwcm9wZXJ0eS5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkpWzBdO1xuICAgICAgc2VsZWN0ZWRQcm9wZXJ0eS5zZWxlY3RlZCA9ICFzZWxlY3RlZFByb3BlcnR5LnNlbGVjdGVkO1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzLmZpbHRlcihwID0+IHAubmFtZSA9PT0gcHJvcGVydHkubmFtZSlbMF0uc2VsZWN0ZWQgPSBzZWxlY3RlZFByb3BlcnR5LnNlbGVjdGVkO1xuICAgIH1cbiAgfVxuXG4gIGVkaXRQcm9wZXJ0eShwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpe1xuICAgIC8vIHdlIGNhbiBlZGl0IG9ubHkgZmlyc3QgZ3JvdXAgcHJvcHNcbiAgICBpZiAocHJvcGVydHkuY2F0ZWdvcnkgPT09IDAgJiYgIXByb3BlcnR5LmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnJlc2V0UHJvcGVydGllcygpO1xuXG4gICAgICBjb25zdCBzZWxlY3RlZFByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzLmZpbHRlcihwID0+IHAubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBwcm9wZXJ0eS5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkpWzBdO1xuICAgICAgc2VsZWN0ZWRQcm9wZXJ0eS5lZGl0aW5nID0gIXNlbGVjdGVkUHJvcGVydHkuZWRpdGluZztcbiAgICAgIHRoaXMucHJvcGVydGllcy5maWx0ZXIocCA9PiBwLm5hbWUgPT09IHByb3BlcnR5Lm5hbWUpWzBdLmVkaXRpbmcgPSBzZWxlY3RlZFByb3BlcnR5LmVkaXRpbmc7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlKCRldmVudDogRXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllcy5maWx0ZXIocCA9PiBwLnNlbGVjdGVkKVswXTtcbiAgICB0aGlzLl9hY2NvcmRpb25TZXJ2aWNlLnJlbW92ZVByb3BlcnR5KHNlbGVjdGVkUHJvcGVydHkpO1xuICB9XG5cbiAgd2FzU2VsZWN0ZWQoKSB7XG4gICAgaWYgKHRoaXMucHJvcGVydGllcyAmJiB0aGlzLnByb3BlcnRpZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcGVydGllcy5maWx0ZXIocCA9PiBwLnNlbGVjdGVkKS5sZW5ndGggPT09IDE7XG4gICAgfVxuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2VsZWN0UHJvcE5hbWUoJGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLl9zZWxlY3RlZFByb3BOYW1lID0gJGV2ZW50Lm5hbWU7XG4gICAgY29uc3QgZWRpdGluZ1Byb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzLmZpbHRlcihwID0+ICFwLm9yaWdpbmFsKVswXTtcbiAgICBlZGl0aW5nUHJvcGVydHkudHlwZSA9ICRldmVudC50eXBlO1xuICAgIGVkaXRpbmdQcm9wZXJ0eS5uYW1lID0gJGV2ZW50Lm5hbWU7XG4gICAgaWYgKCRldmVudC50eXBlID09PSAzKSB7XG4gICAgICBlZGl0aW5nUHJvcGVydHkudmFsdWUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVkaXRpbmdQcm9wZXJ0eS52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0RGF0ZVRpbWUocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsLCB2YWx1ZTogc3RyaW5nKXtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGNvbnN0IGRhdGVUaW1lID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgcHJvcGVydHkudmFsdWUgPSBkYXRlVGltZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE5KTtcbiAgICB9XG4gIH1cblxuICBmb3JtYXRWYWx1ZShwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpe1xuICAgIHN3aXRjaCAocHJvcGVydHkudHlwZSkge1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gdGhpcy5pc0Rlc2t0b3AgPyB0aGlzLl9kYXRlUGlwZS50cmFuc2Zvcm0obmV3IERhdGUocHJvcGVydHkudmFsdWUpLCAnTU0vZGQveXksIGg6bW06c3MgYScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX2RhdGVQaXBlLnRyYW5zZm9ybShuZXcgRGF0ZShwcm9wZXJ0eS52YWx1ZSksICdNTS9kZC95eSwgaDptbSBhJyk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcHJvcGVydHkudmFsdWU7XG4gICAgfVxuICB9XG59Il19