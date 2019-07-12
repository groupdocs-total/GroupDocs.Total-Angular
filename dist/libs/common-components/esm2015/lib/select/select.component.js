/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * @record
 */
export function Option() { }
if (false) {
    /** @type {?} */
    Option.prototype.name;
    /** @type {?} */
    Option.prototype.value;
    /** @type {?} */
    Option.prototype.separator;
}
export class SelectComponent {
    constructor() {
        this.disabled = false;
        this.selected = new EventEmitter();
        this.isOpen = false;
    }
    /**
     * @return {?}
     */
    open() {
        if (!this.disabled) {
            this.isOpen = true;
        }
    }
    /**
     * @return {?}
     */
    close() {
        this.isOpen = false;
    }
    /**
     * @return {?}
     */
    toggle() {
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    select(value) {
        this.selected.emit(value);
        this.close();
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-select',
                template: "<div class=\"select\">\n  <span class=\"selected-value\" gdDisabledCursor [dis]=\"disabled\" (click)=\"toggle()\">{{showSelected}}%</span>\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\" (click)=\"toggle()\"></span>\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\n    <div *ngFor=\"let option of options\">\n      <div *ngIf=\"!option.separator\" (click)=\"select(option.value)\" class=\"option\">{{option.name}}</div>\n      <div *ngIf=\"option.separator\" role=\"separator\" class=\"dropdown-menu-separator\"></div>\n    </div>\n  </div>\n</div>\n",
                styles: [".select{min-width:50px;color:#959da5}.selected-value{font-size:14px;cursor:pointer}.nav-caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent;cursor:pointer}.dropdown-menu{position:absolute;top:49px;z-index:1000;float:left;min-width:160px;padding:5px 0;list-style:none;font-size:13px;text-align:left;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box}.dropdown-menu .option{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;white-space:nowrap;cursor:pointer}.dropdown-menu-separator{height:1px;margin:8px 0;overflow:hidden;background-color:#e5e5e5;padding:0!important}"]
            }] }
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [];
SelectComponent.propDecorators = {
    options: [{ type: Input }],
    disabled: [{ type: Input }],
    showSelected: [{ type: Input }],
    selected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SelectComponent.prototype.options;
    /** @type {?} */
    SelectComponent.prototype.disabled;
    /** @type {?} */
    SelectComponent.prototype.showSelected;
    /** @type {?} */
    SelectComponent.prototype.selected;
    /** @type {?} */
    SelectComponent.prototype.isOpen;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUVyRSw0QkFJQzs7O0lBSEMsc0JBQWE7O0lBQ2IsdUJBQVc7O0lBQ1gsMkJBQW1COztBQVFyQixNQUFNLE9BQU8sZUFBZTtJQVExQjtRQUxTLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFaEIsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNELFdBQU0sR0FBRyxLQUFLLENBQUM7SUFHZixDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBVTtRQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7OztZQW5DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHFrQkFBc0M7O2FBRXZDOzs7OztzQkFHRSxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxNQUFNOzs7O0lBSFAsa0NBQTJCOztJQUMzQixtQ0FBMEI7O0lBQzFCLHVDQUEyQjs7SUFDM0IsbUNBQTJEOztJQUMzRCxpQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgdmFsdWU6IGFueTtcbiAgc2VwYXJhdG9yOiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VsZWN0LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IHtcblxuICBASW5wdXQoKSBvcHRpb25zOiBPcHRpb25bXTtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd1NlbGVjdGVkOiBhbnk7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGlzT3BlbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnNlbGVjdGVkLmVtaXQodmFsdWUpO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG59XG4iXX0=