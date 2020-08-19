/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, QueryList, ViewChildren } from '@angular/core';
import { WindowService } from '@groupdocs.examples.angular/common-components';
import { AccordionService } from './../../accordion.service';
import { DatePipe } from "@angular/common";
import { FilePropertyModel } from '../../metadata-models';
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
     * @param {?=} onlyEditing
     * @return {?}
     */
    resetProperties(onlyEditing = false) {
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
            this.properties.filter((/**
             * @param {?} p
             * @return {?}
             */
            p => p.name === property.name))[0].edited = true;
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
     * @param {?} property
     * @return {?}
     */
    selectPropName($event, property) {
        property.type = $event.type;
        property.name = $event.name;
        if ($event.type === 3) {
            property.value = new Date().toISOString().slice(0, 19);
        }
        else {
            property.value = "";
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
                template: "<div class=\"accordion-wrapper\">\n    <div class=\"title\" (click)=\"toggle.emit($event)\">\n      <fa-icon *ngIf=\"!opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-down']\"></fa-icon>\n      <fa-icon *ngIf=\"opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-up']\"></fa-icon>\n      <div class=\"text\">{{title}}</div>\n      <fa-icon class=\"trash\" *ngIf=\"wasSelected()\" [icon]=\"['fas', 'trash']\" (click)=\"delete($event)\"></fa-icon>\n      <gd-button class=\"plus\" [icon]=\"['plus']\" [hidden]=\"addHidden\" [disabled]=\"addDisabled\" (click)=\"addProperty($event)\"></gd-button>\n    </div>\n    <div class=\"body\" [ngClass]=\"{'hidden': !opened}\">\n      <div *ngFor=\"let property of properties\" class=\"property-wrapper\" [ngClass]=\"{'disabled': property.disabled}\">\n          <div *ngIf=\"property.original\" [ngClass]=\"{'selected': property.selected}\" (click)=\"selectProperty(property)\" class=\"property-name\" title=\"{{property.name}}\">{{property.name}}</div>\n          <gd-select  class=\"property-name\" *ngIf=\"!property.original\" id=\"propertiesNames\" [disabled]=\"false\" [options]=\"propertiesNames\" (selected)=\"selectPropName($event, property)\" [showSelected]=\"{name : property.name, value : property.name}\"></gd-select>\n          <div *ngIf=\"property.original && !property.editing\" [ngClass]=\"{'selected': property.selected}\" (click)=\"editProperty(property)\" class=\"property-value\" title=\"{{property.value}}\">{{formatValue(property)}}</div>\n          <div *ngIf=\"!property.original || property.editing\" class=\"input-wrapper\">\n            <input #textinput *ngIf=\"property.type == 1 || property.type == 5\" class=\"property-value\" [(ngModel)]=\"property.value\">\n            <input *ngIf=\"property.type == 3\" type=\"datetime-local\" step=\"1\" [ngClass]=\"isDesktop ? 'property-value' : 'property-value mobile-hide'\" [ngModel]=\"property.value | date:'yyyy-MM-ddTHH:mm:ss'\" (ngModelChange)=\"formatDateTime(property, $event)\">\n            <input *ngIf=\"property.type == 3\" type=\"datetime-local\" [ngClass]=\"isDesktop ? 'property-value desktop-hide' : 'property-value'\" [ngModel]=\"property.value | date:'yyyy-MM-ddTHH:mm'\" (ngModelChange)=\"formatDateTime(property, $event)\">\n        </div>\n      </div>\n    </div>\n  <div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVExRCxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUFZbEMsWUFBb0IsaUJBQW1DLEVBQ25DLFNBQW1CLEVBQ25CLGNBQTZCO1FBRjdCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQWJ4QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBTWQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFPL0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QyxD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O0lBQ3pDLGtEQUFtQzs7SUFDbkMseUNBQThEOztJQUM5RCxpREFBaUU7O0lBQ2pFLDRDQUFxRDs7SUFDckQsNENBQW1COzs7OztJQUVQLG9EQUEyQzs7Ozs7SUFDM0MsNENBQTJCOzs7OztJQUMzQixpREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4sIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQWNjb3JkaW9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vYWNjb3JkaW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtEYXRlUGlwZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRmlsZVByb3BlcnR5TW9kZWwgfSBmcm9tICcuLi8uLi9tZXRhZGF0YS1tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1hY2NvcmRpb24tZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBvcGVuZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgYWRkRGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFkZEhpZGRlbjogYm9vbGVhbjtcbiAgQElucHV0KCkgcHJvcGVydGllczogRmlsZVByb3BlcnR5TW9kZWxbXTtcbiAgQElucHV0KCkgcHJvcGVydGllc05hbWVzOiBzdHJpbmdbXTtcbiAgQE91dHB1dCgpIHRvZ2dsZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHJlbW92ZVByb3BlcnR5ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlUHJvcGVydHlNb2RlbD4oKTtcbiAgQFZpZXdDaGlsZHJlbigndGV4dGlucHV0JykgdGV4dGlucHV0OiBRdWVyeUxpc3Q8YW55PjtcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FjY29yZGlvblNlcnZpY2U6IEFjY29yZGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2RhdGVQaXBlOiBEYXRlUGlwZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSkge1xuICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgX3dpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XG4gICAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMudGV4dGlucHV0LmNoYW5nZXMuc3Vic2NyaWJlKChpOiBRdWVyeUxpc3Q8YW55Pik9PntcbiAgICAgIGlmIChpLmxlbmd0aCkge1xuICAgICAgICBpLmZpcnN0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgfSk7XG4gIH1cblxuICByZXNldFByb3BlcnRpZXMob25seUVkaXRpbmc6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmICghb25seUVkaXRpbmcpIHtcbiAgICAgIHRoaXMucHJvcGVydGllcy5mb3JFYWNoKHAgPT4gcC5zZWxlY3RlZCA9IGZhbHNlKTtcbiAgICB9XG4gICAgdGhpcy5wcm9wZXJ0aWVzLmZvckVhY2gocCA9PiBwLmVkaXRpbmcgPSBmYWxzZSk7XG4gIH1cblxuICBhZGRQcm9wZXJ0eSgkZXZlbnQ6IEV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy5yZXNldFByb3BlcnRpZXMoKTtcblxuICAgIGlmICghdGhpcy5hZGREaXNhYmxlZCkge1xuICAgICAgY29uc3QgYWRkZWRQcm9wZXJ0eSA9IG5ldyBGaWxlUHJvcGVydHlNb2RlbCgpO1xuICAgICAgYWRkZWRQcm9wZXJ0eS5vcmlnaW5hbCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWNjb3JkaW9uU2VydmljZS5hZGRQcm9wZXJ0eShhZGRlZFByb3BlcnR5KTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RQcm9wZXJ0eShwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpe1xuICAgIGlmIChwcm9wZXJ0eS5jYXRlZ29yeSA9PT0gMCAmJiAhcHJvcGVydHkuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKHRydWUpO1xuXG4gICAgICBjb25zdCBzZWxlY3RlZFByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzLmZpbHRlcihwID0+IHAubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBwcm9wZXJ0eS5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkpWzBdO1xuICAgICAgc2VsZWN0ZWRQcm9wZXJ0eS5zZWxlY3RlZCA9ICFzZWxlY3RlZFByb3BlcnR5LnNlbGVjdGVkO1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzLmZpbHRlcihwID0+IHAubmFtZSA9PT0gcHJvcGVydHkubmFtZSlbMF0uc2VsZWN0ZWQgPSBzZWxlY3RlZFByb3BlcnR5LnNlbGVjdGVkO1xuICAgIH1cbiAgfVxuXG4gIGVkaXRQcm9wZXJ0eShwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpe1xuICAgIC8vIHdlIGNhbiBlZGl0IG9ubHkgZmlyc3QgZ3JvdXAgcHJvcHNcbiAgICBpZiAocHJvcGVydHkuY2F0ZWdvcnkgPT09IDAgJiYgIXByb3BlcnR5LmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnJlc2V0UHJvcGVydGllcygpO1xuXG4gICAgICBjb25zdCBzZWxlY3RlZFByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzLmZpbHRlcihwID0+IHAubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBwcm9wZXJ0eS5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkpWzBdO1xuICAgICAgc2VsZWN0ZWRQcm9wZXJ0eS5lZGl0aW5nID0gIXNlbGVjdGVkUHJvcGVydHkuZWRpdGluZztcbiAgICAgIHRoaXMucHJvcGVydGllcy5maWx0ZXIocCA9PiBwLm5hbWUgPT09IHByb3BlcnR5Lm5hbWUpWzBdLmVkaXRpbmcgPSBzZWxlY3RlZFByb3BlcnR5LmVkaXRpbmc7XG4gICAgICB0aGlzLnByb3BlcnRpZXMuZmlsdGVyKHAgPT4gcC5uYW1lID09PSBwcm9wZXJ0eS5uYW1lKVswXS5lZGl0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZSgkZXZlbnQ6IEV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXMuZmlsdGVyKHAgPT4gcC5zZWxlY3RlZClbMF07XG4gICAgdGhpcy5yZW1vdmVQcm9wZXJ0eS5lbWl0KHNlbGVjdGVkUHJvcGVydHkpO1xuICB9XG5cbiAgd2FzU2VsZWN0ZWQoKSB7XG4gICAgaWYgKHRoaXMucHJvcGVydGllcyAmJiB0aGlzLnByb3BlcnRpZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcGVydGllcy5maWx0ZXIocCA9PiBwLnNlbGVjdGVkKS5sZW5ndGggPT09IDE7XG4gICAgfVxuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2VsZWN0UHJvcE5hbWUoJGV2ZW50OiBhbnksIHByb3BlcnR5OiBGaWxlUHJvcGVydHlNb2RlbCkge1xuICAgIHByb3BlcnR5LnR5cGUgPSAkZXZlbnQudHlwZTtcbiAgICBwcm9wZXJ0eS5uYW1lID0gJGV2ZW50Lm5hbWU7XG4gICAgaWYgKCRldmVudC50eXBlID09PSAzKSB7XG4gICAgICBwcm9wZXJ0eS52YWx1ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxOSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcGVydHkudmFsdWUgPSBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdERhdGVUaW1lKHByb3BlcnR5OiBGaWxlUHJvcGVydHlNb2RlbCwgdmFsdWU6IHN0cmluZyl7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgIHByb3BlcnR5LnZhbHVlID0gZGF0ZVRpbWUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxOSk7XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0VmFsdWUocHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsKXtcbiAgICBzd2l0Y2ggKHByb3BlcnR5LnR5cGUpIHtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNEZXNrdG9wID8gdGhpcy5fZGF0ZVBpcGUudHJhbnNmb3JtKG5ldyBEYXRlKHByb3BlcnR5LnZhbHVlKSwgJ01NL2RkL3l5LCBoOm1tOnNzIGEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9kYXRlUGlwZS50cmFuc2Zvcm0obmV3IERhdGUocHJvcGVydHkudmFsdWUpLCAnTU0vZGQveXksIGg6bW0gYScpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5LnZhbHVlO1xuICAgIH1cbiAgfVxufSJdfQ==