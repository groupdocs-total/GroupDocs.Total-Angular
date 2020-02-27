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
        this._accordionService.removeProperty(selectedProperty);
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
                styles: [".accordion-wrapper{background-color:#fff}.accordion-wrapper .title{width:100%;cursor:pointer;border-bottom:1px solid #6e6e6e;background-color:#539cf0;color:#f4f4f4;font-weight:700;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;height:37px;line-height:37px;font-size:13px}.accordion-wrapper .title .text{width:100%}.chevron{padding:0 16px 0 15px}.plus{margin-left:auto}/deep/ .title .button{color:#fff!important;display:block!important;margin-right:0!important}/deep/ .title .button.active fa-icon{color:#fff!important}.accordion-wrapper .body.hidden,.trash.hidden{display:none}.property-wrapper{display:-webkit-box;display:flex;height:35px;font-size:12px;border-bottom:1px solid #e7e7e7;line-height:35px}.property-wrapper.disabled{cursor:not-allowed;color:#acacac}.property-name{width:216px;text-transform:uppercase;font-weight:700;padding-left:15px;border-right:1px solid #e7e7e7;text-overflow:ellipsis;word-wrap:break-word}.property-name /deep/ .select{height:35px;line-height:37px;text-align:center;-webkit-box-pack:unset;justify-content:unset;position:relative}.property-name /deep/ .select .nav-caret{display:none}.property-name /deep/ .select .selected-value{max-width:none;font-size:unset;text-transform:none;font-weight:400}.property-name /deep/ .select .dropdown-menu{width:216px;margin-left:-15px;top:36px}.property-value{font-family:'Courier New',Courier,monospace;padding-left:12px;text-overflow:ellipsis;width:216px;white-space:nowrap;overflow:hidden;word-wrap:break-word;display:inline-block}.property-value.desktop-hide{display:none}.input-wrapper input{height:30px;border:0;font-size:12px}.input-wrapper input.hidden{display:none}.input-wrapper input[type=datetime-local]::-webkit-clear-button,.input-wrapper input[type=datetime-local]::-webkit-inner-spin-button{-webkit-appearance:none;display:none}.selected{background-color:#3e4e5a;color:#fff}/deep/ .default .property-name{color:#acacac}@media (max-width:1037px){.property-value{width:194px!important}.property-name{width:150px!important}.property-value.mobile-hide{display:none}.input-wrapper{width:185px!important}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQVF6QyxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUFZbEMsWUFBb0IsaUJBQW1DLEVBQ25DLFNBQW1CLEVBQ25CLGNBQTZCO1FBRjdCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQWJ4QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBTWQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTdELHNCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBTXJDLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNi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Vzs7OztJQVB6Qix5Q0FBd0I7O0lBQ3hCLHdDQUF1Qjs7SUFDdkIsOENBQThCOztJQUM5Qiw0Q0FBNEI7O0lBQzVCLDZDQUF5Qzs7SUFDekMsa0RBQW1DOztJQUNuQyx5Q0FBOEQ7O0lBQzlELDRDQUFxRDs7SUFDcEQsb0RBQXNDOztJQUN0Qyw0Q0FBbUI7Ozs7O0lBRVIsb0RBQTJDOzs7OztJQUMzQyw0Q0FBMkI7Ozs7O0lBQzNCLGlEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsZVByb3BlcnR5TW9kZWwsIFdpbmRvd1NlcnZpY2UgfSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQWNjb3JkaW9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vYWNjb3JkaW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtEYXRlUGlwZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1hY2NvcmRpb24tZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBvcGVuZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgYWRkRGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFkZEhpZGRlbjogYm9vbGVhbjtcbiAgQElucHV0KCkgcHJvcGVydGllczogRmlsZVByb3BlcnR5TW9kZWxbXTtcbiAgQElucHV0KCkgcHJvcGVydGllc05hbWVzOiBzdHJpbmdbXTtcbiAgQE91dHB1dCgpIHRvZ2dsZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQFZpZXdDaGlsZHJlbigndGV4dGlucHV0JykgdGV4dGlucHV0OiBRdWVyeUxpc3Q8YW55PjsgXG4gICBfc2VsZWN0ZWRQcm9wTmFtZSA9IFwiU2VsZWN0IHByb3BlcnR5XCI7XG4gICBpc0Rlc2t0b3A6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWNjb3JkaW9uU2VydmljZTogQWNjb3JkaW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZGF0ZVBpcGU6IERhdGVQaXBlLFxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlKSB7XG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy50ZXh0aW5wdXQuY2hhbmdlcy5zdWJzY3JpYmUoKGk6IFF1ZXJ5TGlzdDxhbnk+KT0+e1xuICAgICAgaWYgKGkubGVuZ3RoKSB7XG4gICAgICAgIGkuZmlyc3QubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICB9KTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZFByb3BOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFByb3BOYW1lO1xuICB9XG5cbiAgcmVzZXRQcm9wZXJ0aWVzKG9ubHlFZGl0aW5nOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAvLyBmb3IgdGhlIG1vbWVudCB3ZSBhcmUgd29ya2luZyBvbmx5IHdpdGggYSBzaW5nbGUgcHJvcGVydHlcbiAgICBpZiAoIW9ubHlFZGl0aW5nKSB7XG4gICAgICB0aGlzLnByb3BlcnRpZXMuZm9yRWFjaChwID0+IHAuc2VsZWN0ZWQgPSBmYWxzZSk7XG4gICAgfVxuICAgIHRoaXMucHJvcGVydGllcy5mb3JFYWNoKHAgPT4gcC5lZGl0aW5nID0gZmFsc2UpO1xuICB9XG5cbiAgYWRkUHJvcGVydHkoJGV2ZW50OiBFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMuX3NlbGVjdGVkUHJvcE5hbWUgPSBcIlNlbGVjdCBwcm9wZXJ0eVwiO1xuICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICBpZiAoIXRoaXMuYWRkRGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGFkZGVkUHJvcGVydHkgPSBuZXcgRmlsZVByb3BlcnR5TW9kZWwoKTtcbiAgICAgIGFkZGVkUHJvcGVydHkub3JpZ2luYWwgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjY29yZGlvblNlcnZpY2UuYWRkUHJvcGVydHkoYWRkZWRQcm9wZXJ0eSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0UHJvcGVydHkocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsKXtcbiAgICBpZiAocHJvcGVydHkuY2F0ZWdvcnkgPT09IDAgJiYgIXByb3BlcnR5LmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnJlc2V0UHJvcGVydGllcyh0cnVlKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllcy5maWx0ZXIocCA9PiBwLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gcHJvcGVydHkubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpKVswXTtcbiAgICAgIHNlbGVjdGVkUHJvcGVydHkuc2VsZWN0ZWQgPSAhc2VsZWN0ZWRQcm9wZXJ0eS5zZWxlY3RlZDtcbiAgICAgIHRoaXMucHJvcGVydGllcy5maWx0ZXIocCA9PiBwLm5hbWUgPT09IHByb3BlcnR5Lm5hbWUpWzBdLnNlbGVjdGVkID0gc2VsZWN0ZWRQcm9wZXJ0eS5zZWxlY3RlZDtcbiAgICB9XG4gIH1cblxuICBlZGl0UHJvcGVydHkocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsKXtcbiAgICAvLyB3ZSBjYW4gZWRpdCBvbmx5IGZpcnN0IGdyb3VwIHByb3BzXG4gICAgaWYgKHByb3BlcnR5LmNhdGVnb3J5ID09PSAwICYmICFwcm9wZXJ0eS5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5yZXNldFByb3BlcnRpZXMoKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllcy5maWx0ZXIocCA9PiBwLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gcHJvcGVydHkubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpKVswXTtcbiAgICAgIHNlbGVjdGVkUHJvcGVydHkuZWRpdGluZyA9ICFzZWxlY3RlZFByb3BlcnR5LmVkaXRpbmc7XG4gICAgICB0aGlzLnByb3BlcnRpZXMuZmlsdGVyKHAgPT4gcC5uYW1lID09PSBwcm9wZXJ0eS5uYW1lKVswXS5lZGl0aW5nID0gc2VsZWN0ZWRQcm9wZXJ0eS5lZGl0aW5nO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZSgkZXZlbnQ6IEV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXMuZmlsdGVyKHAgPT4gcC5zZWxlY3RlZClbMF07XG4gICAgdGhpcy5fYWNjb3JkaW9uU2VydmljZS5yZW1vdmVQcm9wZXJ0eShzZWxlY3RlZFByb3BlcnR5KTtcbiAgfVxuXG4gIHdhc1NlbGVjdGVkKCkge1xuICAgIGlmICh0aGlzLnByb3BlcnRpZXMgJiYgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXMuZmlsdGVyKHAgPT4gcC5zZWxlY3RlZCkubGVuZ3RoID09PSAxO1xuICAgIH1cbiAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNlbGVjdFByb3BOYW1lKCRldmVudDogYW55KSB7XG4gICAgdGhpcy5fc2VsZWN0ZWRQcm9wTmFtZSA9ICRldmVudC5uYW1lO1xuICAgIGNvbnN0IGVkaXRpbmdQcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllcy5maWx0ZXIocCA9PiAhcC5vcmlnaW5hbClbMF07XG4gICAgZWRpdGluZ1Byb3BlcnR5LnR5cGUgPSAkZXZlbnQudHlwZTtcbiAgICBlZGl0aW5nUHJvcGVydHkubmFtZSA9ICRldmVudC5uYW1lO1xuICAgIGlmICgkZXZlbnQudHlwZSA9PT0gMykge1xuICAgICAgZWRpdGluZ1Byb3BlcnR5LnZhbHVlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlZGl0aW5nUHJvcGVydHkudmFsdWUgPSBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdERhdGVUaW1lKHByb3BlcnR5OiBGaWxlUHJvcGVydHlNb2RlbCwgdmFsdWU6IHN0cmluZyl7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgIHByb3BlcnR5LnZhbHVlID0gZGF0ZVRpbWUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxOSk7XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0VmFsdWUocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsKXtcbiAgICBzd2l0Y2ggKHByb3BlcnR5LnR5cGUpIHtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNEZXNrdG9wID8gdGhpcy5fZGF0ZVBpcGUudHJhbnNmb3JtKG5ldyBEYXRlKHByb3BlcnR5LnZhbHVlKSwgJ01NL2RkL3l5LCBoOm1tOnNzIGEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9kYXRlUGlwZS50cmFuc2Zvcm0obmV3IERhdGUocHJvcGVydHkudmFsdWUpLCAnTU0vZGQveXksIGg6bW0gYScpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5LnZhbHVlO1xuICAgIH1cbiAgfVxufSJdfQ==