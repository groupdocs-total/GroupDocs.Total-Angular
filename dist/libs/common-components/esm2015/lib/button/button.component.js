/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ButtonComponent {
    constructor() {
        this.iconOnly = true;
        this.intent = 'default';
        this.disabled = false;
        this.toggle = false;
        this.showToolTip = false;
    }
    /**
     * @return {?}
     */
    iconButtonClass() {
        return this.iconOnly ? 'icon-button' : '';
    }
    /**
     * @return {?}
     */
    onHovering() {
        if (!this.disabled) {
            this.className += ' active';
        }
    }
    /**
     * @return {?}
     */
    onUnhovering() {
        if (!this.disabled) {
            this.className = this.className.replace(' active', '');
        }
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-button',
                template: "<div class=\"button {{intent}} {{iconButtonClass()}}\" [ngClass]=\"toggle ? className + ' gd-edit active' : className\"\n     gdTooltip (showToolTip)=\"showToolTip = $event\" (mouseenter)=\"onHovering()\"\n     (mouseleave)=\"onUnhovering()\" gdDisabledCursor [dis]=\"disabled\">\n  <fa-icon [icon]=\"['fas',icon]\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\"></gd-tooltip>\n  <div class=\"text\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                styles: [".icon-button{padding:0!important;margin:0 10px}.button{padding:0 10px;font-size:14px;color:#959da5;cursor:pointer;display:flex;align-items:center;justify-content:center;min-width:37px;height:37px;text-align:center;position:relative;white-space:nowrap}.button.inactive{cursor:not-allowed;opacity:.4}.button.active *{color:#ccd0d4}.button.primary{background-color:#3e4e5a;color:#fff}.button.primary.active{color:#fff;background-color:#688296}.button.brand{background-color:#25c2d4;color:#fff}.button.brand.active{color:#fff;background-color:#688296}.button .text{font-size:13px;padding-left:10px}@media (max-width:1025px){.button{font-size:20px}.arrow-button{margin:5px}}"]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    iconOnly: [{ type: Input }],
    intent: [{ type: Input }],
    disabled: [{ type: Input }],
    icon: [{ type: Input }],
    iconClass: [{ type: Input }],
    tooltip: [{ type: Input }],
    className: [{ type: Input }],
    toggle: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.iconOnly;
    /** @type {?} */
    ButtonComponent.prototype.intent;
    /** @type {?} */
    ButtonComponent.prototype.disabled;
    /** @type {?} */
    ButtonComponent.prototype.icon;
    /** @type {?} */
    ButtonComponent.prototype.iconClass;
    /** @type {?} */
    ButtonComponent.prototype.tooltip;
    /** @type {?} */
    ButtonComponent.prototype.className;
    /** @type {?} */
    ButtonComponent.prototype.toggle;
    /** @type {?} */
    ButtonComponent.prototype.showToolTip;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPL0MsTUFBTSxPQUFPLGVBQWU7SUFZMUI7UUFYUyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxTQUFTLENBQUM7UUFDbkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUtqQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXhCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBR3BCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN4RDtJQUNILENBQUM7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHNmQUFzQzs7YUFFdkM7Ozs7O3VCQUVFLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLO21CQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSzs7OztJQVBOLG1DQUF5Qjs7SUFDekIsaUNBQTRCOztJQUM1QixtQ0FBMEI7O0lBQzFCLCtCQUFzQjs7SUFDdEIsb0NBQTJCOztJQUMzQixrQ0FBeUI7O0lBQ3pCLG9DQUEyQjs7SUFDM0IsaUNBQXdCOztJQUV4QixzQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaWNvbk9ubHkgPSB0cnVlO1xuICBASW5wdXQoKSBpbnRlbnQgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgaWNvbkNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvZ2dsZSA9IGZhbHNlO1xuXG4gIHNob3dUb29sVGlwID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBpY29uQnV0dG9uQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbk9ubHkgPyAnaWNvbi1idXR0b24nIDogJyc7XG4gIH1cblxuICBvbkhvdmVyaW5nKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jbGFzc05hbWUgKz0gJyBhY3RpdmUnO1xuICAgIH1cbiAgfVxuXG4gIG9uVW5ob3ZlcmluZygpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUucmVwbGFjZSgnIGFjdGl2ZScsICcnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==