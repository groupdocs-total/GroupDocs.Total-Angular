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
        this.removeProperty = new EventEmitter();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QztJQW1CRSxpQ0FBb0IsaUJBQW1DLEVBQ25DLFNBQW1CLEVBQ25CLGNBQTZCO1FBRmpELGlCQU9DO1FBUG1CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQWR4QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBTWQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFFaEUsc0JBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFNckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FB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USxDQUFDLEtBQUssQ0FBQztTQUN6QjtJQUNILENBQUM7O2dCQTdIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsZ3hFQUErQzs7aUJBRWhEOzs7O2dCQVBRLGdCQUFnQjtnQkFDakIsUUFBUTtnQkFGWSxhQUFhOzs7eUJBV3RDLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSztrQ0FDTCxLQUFLO3lCQUNMLE1BQU07aUNBQ04sTUFBTTs0QkFDTixZQUFZLFNBQUMsV0FBVzs7SUErRzNCLDhCQUFDO0NBQUEsQUE5SEQsSUE4SEM7U0F4SFksdUJBQXVCOzs7SUFDbEMseUNBQXdCOztJQUN4Qix3Q0FBdUI7O0lBQ3ZCLDhDQUE4Qjs7SUFDOUIsNENBQTRCOztJQUM1Qiw2Q0FBeUM7O0lBQ3pDLGtEQUFtQzs7SUFDbkMseUNBQThEOztJQUM5RCxpREFBaUU7O0lBQ2pFLDRDQUFxRDs7SUFDcEQsb0RBQXNDOztJQUN0Qyw0Q0FBbUI7Ozs7O0lBRVIsb0RBQTJDOzs7OztJQUMzQyw0Q0FBMkI7Ozs7O0lBQzNCLGlEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsZVByb3BlcnR5TW9kZWwsIFdpbmRvd1NlcnZpY2UgfSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQWNjb3JkaW9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vYWNjb3JkaW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtEYXRlUGlwZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1hY2NvcmRpb24tZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBvcGVuZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgYWRkRGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFkZEhpZGRlbjogYm9vbGVhbjtcbiAgQElucHV0KCkgcHJvcGVydGllczogRmlsZVByb3BlcnR5TW9kZWxbXTtcbiAgQElucHV0KCkgcHJvcGVydGllc05hbWVzOiBzdHJpbmdbXTtcbiAgQE91dHB1dCgpIHRvZ2dsZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHJlbW92ZVByb3BlcnR5ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlUHJvcGVydHlNb2RlbD4oKTtcbiAgQFZpZXdDaGlsZHJlbigndGV4dGlucHV0JykgdGV4dGlucHV0OiBRdWVyeUxpc3Q8YW55PjsgXG4gICBfc2VsZWN0ZWRQcm9wTmFtZSA9IFwiU2VsZWN0IHByb3BlcnR5XCI7XG4gICBpc0Rlc2t0b3A6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWNjb3JkaW9uU2VydmljZTogQWNjb3JkaW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZGF0ZVBpcGU6IERhdGVQaXBlLFxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlKSB7XG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy50ZXh0aW5wdXQuY2hhbmdlcy5zdWJzY3JpYmUoKGk6IFF1ZXJ5TGlzdDxhbnk+KT0+e1xuICAgICAgaWYgKGkubGVuZ3RoKSB7XG4gICAgICAgIGkuZmlyc3QubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICB9KTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZFByb3BOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFByb3BOYW1lO1xuICB9XG5cbiAgcmVzZXRQcm9wZXJ0aWVzKG9ubHlFZGl0aW5nOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAvLyBmb3IgdGhlIG1vbWVudCB3ZSBhcmUgd29ya2luZyBvbmx5IHdpdGggYSBzaW5nbGUgcHJvcGVydHlcbiAgICBpZiAoIW9ubHlFZGl0aW5nKSB7XG4gICAgICB0aGlzLnByb3BlcnRpZXMuZm9yRWFjaChwID0+IHAuc2VsZWN0ZWQgPSBmYWxzZSk7XG4gICAgfVxuICAgIHRoaXMucHJvcGVydGllcy5mb3JFYWNoKHAgPT4gcC5lZGl0aW5nID0gZmFsc2UpO1xuICB9XG5cbiAgYWRkUHJvcGVydHkoJGV2ZW50OiBFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMuX3NlbGVjdGVkUHJvcE5hbWUgPSBcIlNlbGVjdCBwcm9wZXJ0eVwiO1xuICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICBpZiAoIXRoaXMuYWRkRGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGFkZGVkUHJvcGVydHkgPSBuZXcgRmlsZVByb3BlcnR5TW9kZWwoKTtcbiAgICAgIGFkZGVkUHJvcGVydHkub3JpZ2luYWwgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjY29yZGlvblNlcnZpY2UuYWRkUHJvcGVydHkoYWRkZWRQcm9wZXJ0eSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0UHJvcGVydHkocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsKXtcbiAgICBpZiAocHJvcGVydHkuY2F0ZWdvcnkgPT09IDAgJiYgIXByb3BlcnR5LmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnJlc2V0UHJvcGVydGllcyh0cnVlKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllcy5maWx0ZXIocCA9PiBwLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gcHJvcGVydHkubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpKVswXTtcbiAgICAgIHNlbGVjdGVkUHJvcGVydHkuc2VsZWN0ZWQgPSAhc2VsZWN0ZWRQcm9wZXJ0eS5zZWxlY3RlZDtcbiAgICAgIHRoaXMucHJvcGVydGllcy5maWx0ZXIocCA9PiBwLm5hbWUgPT09IHByb3BlcnR5Lm5hbWUpWzBdLnNlbGVjdGVkID0gc2VsZWN0ZWRQcm9wZXJ0eS5zZWxlY3RlZDtcbiAgICB9XG4gIH1cblxuICBlZGl0UHJvcGVydHkocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsKXtcbiAgICAvLyB3ZSBjYW4gZWRpdCBvbmx5IGZpcnN0IGdyb3VwIHByb3BzXG4gICAgaWYgKHByb3BlcnR5LmNhdGVnb3J5ID09PSAwICYmICFwcm9wZXJ0eS5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5yZXNldFByb3BlcnRpZXMoKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllcy5maWx0ZXIocCA9PiBwLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gcHJvcGVydHkubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpKVswXTtcbiAgICAgIHNlbGVjdGVkUHJvcGVydHkuZWRpdGluZyA9ICFzZWxlY3RlZFByb3BlcnR5LmVkaXRpbmc7XG4gICAgICB0aGlzLnByb3BlcnRpZXMuZmlsdGVyKHAgPT4gcC5uYW1lID09PSBwcm9wZXJ0eS5uYW1lKVswXS5lZGl0aW5nID0gc2VsZWN0ZWRQcm9wZXJ0eS5lZGl0aW5nO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZSgkZXZlbnQ6IEV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXMuZmlsdGVyKHAgPT4gcC5zZWxlY3RlZClbMF07XG4gICAgdGhpcy5yZW1vdmVQcm9wZXJ0eS5lbWl0KHNlbGVjdGVkUHJvcGVydHkpO1xuICB9XG5cbiAgd2FzU2VsZWN0ZWQoKSB7XG4gICAgaWYgKHRoaXMucHJvcGVydGllcyAmJiB0aGlzLnByb3BlcnRpZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcGVydGllcy5maWx0ZXIocCA9PiBwLnNlbGVjdGVkKS5sZW5ndGggPT09IDE7XG4gICAgfVxuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2VsZWN0UHJvcE5hbWUoJGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLl9zZWxlY3RlZFByb3BOYW1lID0gJGV2ZW50Lm5hbWU7XG4gICAgY29uc3QgZWRpdGluZ1Byb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzLmZpbHRlcihwID0+ICFwLm9yaWdpbmFsKVswXTtcbiAgICBlZGl0aW5nUHJvcGVydHkudHlwZSA9ICRldmVudC50eXBlO1xuICAgIGVkaXRpbmdQcm9wZXJ0eS5uYW1lID0gJGV2ZW50Lm5hbWU7XG4gICAgaWYgKCRldmVudC50eXBlID09PSAzKSB7XG4gICAgICBlZGl0aW5nUHJvcGVydHkudmFsdWUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVkaXRpbmdQcm9wZXJ0eS52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0RGF0ZVRpbWUocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsLCB2YWx1ZTogc3RyaW5nKXtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGNvbnN0IGRhdGVUaW1lID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgcHJvcGVydHkudmFsdWUgPSBkYXRlVGltZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE5KTtcbiAgICB9XG4gIH1cblxuICBmb3JtYXRWYWx1ZShwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpe1xuICAgIHN3aXRjaCAocHJvcGVydHkudHlwZSkge1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gdGhpcy5pc0Rlc2t0b3AgPyB0aGlzLl9kYXRlUGlwZS50cmFuc2Zvcm0obmV3IERhdGUocHJvcGVydHkudmFsdWUpLCAnTU0vZGQveXksIGg6bW06c3MgYScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX2RhdGVQaXBlLnRyYW5zZm9ybShuZXcgRGF0ZShwcm9wZXJ0eS52YWx1ZSksICdNTS9kZC95eSwgaDptbSBhJyk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcHJvcGVydHkudmFsdWU7XG4gICAgfVxuICB9XG59Il19