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
        this.elementPosition = 0;
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
                template: "<div class=\"button {{intent}} {{iconButtonClass()}}\" [ngClass]=\"toggle ? className + ' gd-edit active' : className\"\r\n     gdTooltip (showToolTip)=\"showToolTip = $event\" (mouseenter)=\"onHovering()\"\r\n     (mouseleave)=\"onUnhovering()\" gdDisabledCursor [dis]=\"disabled\">\r\n  <fa-icon *ngIf=\"icon\" [icon]=\"[iconRegular ? 'far' : 'fas',icon]\" [size]=\"iconSize\"></fa-icon>\r\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\" [position]=\"elementPosition\" class=\"button-tooltip\"></gd-tooltip>\r\n  <div class=\"text\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
                styles: [".icon-button{padding:0!important;margin:0 7px}.button{padding:0 10px;font-size:14px;color:#959da5;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;align-content:center;-webkit-box-pack:center;justify-content:center;min-width:37px;height:37px;text-align:center;position:relative;white-space:nowrap}.button.inactive{cursor:not-allowed;opacity:.4}.button.active *{color:#ccd0d4}.button.primary{background-color:#3e4e5a;color:#fff}.button.primary.active{color:#fff;background-color:#688296}.button.brand{background-color:#25c2d4;color:#fff}.button.brand.active{color:#fff;background-color:#688296}.button .text{font-size:13px;padding-left:10px}.button .button-tooltip{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}@media (max-width:1037px){.button{font-size:22px}.arrow-button{margin:5px}}"]
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
    iconRegular: [{ type: Input }],
    elementPosition: [{ type: Input }]
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
    ButtonComponent.prototype.elementPosition;
    /** @type {?} */
    ButtonComponent.prototype.showToolTip;
    /**
     * @type {?}
     * @private
     */
    ButtonComponent.prototype.isDesktop;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBT2hELE1BQU0sT0FBTyxlQUFlOzs7O0lBZ0IxQixZQUFZLGFBQTRCO1FBZi9CLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsV0FBTSxHQUFHLFNBQVMsQ0FBQztRQUNuQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBS2pCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFZixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixvQkFBZSxHQUFHLENBQUMsQ0FBQztRQUU3QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUlsQixJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMzQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNwQyxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUMzRDtJQUNILENBQUM7Ozs7Ozs7SUFFTyxRQUFRLENBQUMsR0FBVyxFQUFFLEdBQVc7UUFDdkMsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNyQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDNUI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7OztZQWpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHluQkFBc0M7O2FBRXZDOzs7O1lBTk8sYUFBYTs7O3VCQVFsQixLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsS0FBSzttQkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLOzhCQUNMLEtBQUs7Ozs7SUFWTixtQ0FBeUI7O0lBQ3pCLGlDQUE0Qjs7SUFDNUIsbUNBQTBCOztJQUMxQiwrQkFBc0I7O0lBQ3RCLG9DQUEyQjs7SUFDM0Isa0NBQXlCOztJQUN6QixvQ0FBMkI7O0lBQzNCLGlDQUF3Qjs7SUFDeEIsbUNBQTBCOztJQUMxQixzQ0FBNkI7O0lBQzdCLDBDQUE2Qjs7SUFFN0Isc0NBQW9COzs7OztJQUNwQixvQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1dpbmRvd1NlcnZpY2V9IGZyb20gXCIuLi93aW5kb3cuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1idXR0b24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGljb25Pbmx5ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBpbnRlbnQgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvbkNsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRvZ2dsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGljb25TaXplOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvblJlZ3VsYXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBlbGVtZW50UG9zaXRpb24gPSAwO1xyXG5cclxuICBzaG93VG9vbFRpcCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaXNEZXNrdG9wOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih3aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmlzRGVza3RvcCA9IHdpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XHJcbiAgICB3aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xyXG4gICAgICB0aGlzLmlzRGVza3RvcCA9IHdpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGljb25CdXR0b25DbGFzcygpIHtcclxuICAgIHJldHVybiB0aGlzLmljb25Pbmx5ID8gJ2ljb24tYnV0dG9uJyA6ICcnO1xyXG4gIH1cclxuXHJcbiAgb25Ib3ZlcmluZygpIHtcclxuICAgIGlmICh0aGlzLmlzRGVza3RvcCAmJiAhdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmNsYXNzTmFtZSArPSAnIGFjdGl2ZSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblVuaG92ZXJpbmcoKSB7XHJcbiAgICBpZiAodGhpcy5pc0Rlc2t0b3AgJiYgIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5jbGFzc05hbWUgPSB0aGlzLmNsZWFuQWxsKHRoaXMuY2xhc3NOYW1lLCAnIGFjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhbkFsbChzdHI6IHN0cmluZywgdmFsOiBzdHJpbmcpIHtcclxuICAgIHdoaWxlIChzdHIgJiYgc3RyLmluZGV4T2YodmFsKSAhPT0gLTEpIHtcclxuICAgICAgc3RyID0gc3RyLnJlcGxhY2UodmFsLCAnJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH1cclxufVxyXG4iXX0=