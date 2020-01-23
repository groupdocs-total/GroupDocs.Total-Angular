/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { WindowService } from "../window.service";
export class ButtonComponent {
    /**
     * @param {?} windowService
     */
    constructor(windowService) {
        this.iconOnly = true;
        this.intent = 'default';
        this.disabled = false;
        this.toggle = false;
        this.iconRegular = false;
        this.showToolTip = false;
        this.isDesktop = windowService.isDesktop();
        windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.isDesktop = windowService.isDesktop();
        }));
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
        if (this.isDesktop && !this.disabled) {
            this.className += ' active';
        }
    }
    /**
     * @return {?}
     */
    onUnhovering() {
        if (this.isDesktop && !this.disabled) {
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
                styles: [".icon-button{padding:0!important;margin:0 7px}.button{padding:0 10px;font-size:14px;color:#959da5;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;min-width:37px;height:37px;text-align:center;position:relative;white-space:nowrap}.button.inactive{cursor:not-allowed;opacity:.4}.button.active *{color:#ccd0d4}.button.primary{background-color:#3e4e5a;color:#fff}.button.primary.active{color:#fff;background-color:#688296}.button.brand{background-color:#25c2d4;color:#fff}.button.brand.active{color:#fff;background-color:#688296}.button .text{font-size:13px;padding-left:10px}@media (max-width:1037px){.button{font-size:22px}.arrow-button{margin:5px}}"]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [
    { type: WindowService }
];
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
    /**
     * @type {?}
     * @private
     */
    ButtonComponent.prototype.isDesktop;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBT2hELE1BQU0sT0FBTyxlQUFlOzs7O0lBZTFCLFlBQVksYUFBNEI7UUFkL0IsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixXQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ25CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFLakIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVmLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBRTdCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBSWxCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzNDLGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0MsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLFFBQVEsQ0FBQyxHQUFXLEVBQUUsR0FBVztRQUN2QyxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3JDLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7O1lBaERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsZ2lCQUFzQzs7YUFFdkM7Ozs7WUFOTyxhQUFhOzs7dUJBUWxCLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLO21CQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7Ozs7SUFUTixtQ0FBeUI7O0lBQ3pCLGlDQUE0Qjs7SUFDNUIsbUNBQTBCOztJQUMxQiwrQkFBc0I7O0lBQ3RCLG9DQUEyQjs7SUFDM0Isa0NBQXlCOztJQUN6QixvQ0FBMkI7O0lBQzNCLGlDQUF3Qjs7SUFDeEIsbUNBQTBCOztJQUMxQixzQ0FBNkI7O0lBRTdCLHNDQUFvQjs7Ozs7SUFDcEIsb0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSBcIi4uL3dpbmRvdy5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKSBpY29uT25seSA9IHRydWU7XG4gIEBJbnB1dCgpIGludGVudCA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgdG9nZ2xlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGljb25TaXplOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb25SZWd1bGFyID0gZmFsc2U7XG5cbiAgc2hvd1Rvb2xUaXAgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpc0Rlc2t0b3A6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3Iod2luZG93U2VydmljZTogV2luZG93U2VydmljZSkge1xuICAgIHRoaXMuaXNEZXNrdG9wID0gd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICB3aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xuICAgICAgdGhpcy5pc0Rlc2t0b3AgPSB3aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIH0pO1xuICB9XG5cbiAgaWNvbkJ1dHRvbkNsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLmljb25Pbmx5ID8gJ2ljb24tYnV0dG9uJyA6ICcnO1xuICB9XG5cbiAgb25Ib3ZlcmluZygpIHtcbiAgICBpZiAodGhpcy5pc0Rlc2t0b3AgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xhc3NOYW1lICs9ICcgYWN0aXZlJztcbiAgICB9XG4gIH1cblxuICBvblVuaG92ZXJpbmcoKSB7XG4gICAgaWYgKHRoaXMuaXNEZXNrdG9wICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNsYXNzTmFtZSA9IHRoaXMuY2xlYW5BbGwodGhpcy5jbGFzc05hbWUsICcgYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhbkFsbChzdHI6IHN0cmluZywgdmFsOiBzdHJpbmcpIHtcbiAgICB3aGlsZSAoc3RyICYmIHN0ci5pbmRleE9mKHZhbCkgIT09IC0xKSB7XG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSh2YWwsICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuIl19