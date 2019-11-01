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
        this.iconRegular = false;
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
            this.className = this.cleanAll(this.className, ' active');
        }
    }
    /**
     * @private
     * @param {?} str
     * @param {?} val
     * @return {?}
     */
    cleanAll(str, val) {
        while (str && str.indexOf(val) !== -1) {
            str = str.replace(val, '');
        }
        return str;
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-button',
                template: "<div class=\"button {{intent}} {{iconButtonClass()}}\" [ngClass]=\"toggle ? className + ' gd-edit active' : className\"\n     gdTooltip (showToolTip)=\"showToolTip = $event\" (mouseenter)=\"onHovering()\"\n     (mouseleave)=\"onUnhovering()\" gdDisabledCursor [dis]=\"disabled\">\n  <fa-icon [icon]=\"[iconRegular ? 'far' : 'fas',icon]\" [size]=\"iconSize\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\"></gd-tooltip>\n  <div class=\"text\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                styles: [".icon-button{padding:0!important;margin:0 10px}.button{padding:0 10px;font-size:14px;color:#959da5;cursor:pointer;display:flex;align-items:center;justify-content:center;min-width:37px;height:37px;text-align:center;position:relative;white-space:nowrap}.button.inactive{cursor:not-allowed;opacity:.4}.button.active *{color:#ccd0d4}.button.primary{background-color:#3e4e5a;color:#fff}.button.primary.active{color:#fff;background-color:#688296}.button.brand{background-color:#25c2d4;color:#fff}.button.brand.active{color:#fff;background-color:#688296}.button .text{font-size:13px;padding-left:10px}@media (max-width:1037px){.button{font-size:22px}.arrow-button{margin:5px}}"]
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
    toggle: [{ type: Input }],
    iconSize: [{ type: Input }],
    iconRegular: [{ type: Input }]
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
    ButtonComponent.prototype.iconSize;
    /** @type {?} */
    ButtonComponent.prototype.iconRegular;
    /** @type {?} */
    ButtonComponent.prototype.showToolTip;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPL0MsTUFBTSxPQUFPLGVBQWU7SUFjMUI7UUFiUyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxTQUFTLENBQUM7UUFDbkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUtqQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFFN0IsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFHcEIsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLFFBQVEsQ0FBQyxHQUFXLEVBQUUsR0FBVztRQUN2QyxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3JDLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7O1lBM0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsZ2lCQUFzQzs7YUFFdkM7Ozs7O3VCQUVFLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLO21CQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7Ozs7SUFUTixtQ0FBeUI7O0lBQ3pCLGlDQUE0Qjs7SUFDNUIsbUNBQTBCOztJQUMxQiwrQkFBc0I7O0lBQ3RCLG9DQUEyQjs7SUFDM0Isa0NBQXlCOztJQUN6QixvQ0FBMkI7O0lBQzNCLGlDQUF3Qjs7SUFDeEIsbUNBQTBCOztJQUMxQixzQ0FBNkI7O0lBRTdCLHNDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKSBpY29uT25seSA9IHRydWU7XG4gIEBJbnB1dCgpIGludGVudCA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgdG9nZ2xlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGljb25TaXplOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb25SZWd1bGFyID0gZmFsc2U7XG5cbiAgc2hvd1Rvb2xUaXAgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGljb25CdXR0b25DbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5pY29uT25seSA/ICdpY29uLWJ1dHRvbicgOiAnJztcbiAgfVxuXG4gIG9uSG92ZXJpbmcoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNsYXNzTmFtZSArPSAnIGFjdGl2ZSc7XG4gICAgfVxuICB9XG5cbiAgb25VbmhvdmVyaW5nKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jbGFzc05hbWUgPSB0aGlzLmNsZWFuQWxsKHRoaXMuY2xhc3NOYW1lLCAnIGFjdGl2ZScpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5BbGwoc3RyOiBzdHJpbmcsIHZhbDogc3RyaW5nKSB7XG4gICAgd2hpbGUgKHN0ciAmJiBzdHIuaW5kZXhPZih2YWwpICE9PSAtMSkge1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UodmFsLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cbiJdfQ==