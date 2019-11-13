/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.iconOnly = true;
        this.intent = 'default';
        this.disabled = false;
        this.toggle = false;
        this.showToolTip = false;
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.iconButtonClass = /**
     * @return {?}
     */
    function () {
        return this.iconOnly ? 'icon-button' : '';
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.onHovering = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.className += ' active';
        }
        this.showToolTip = true;
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.onUnhovering = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.className = this.className.replace(' active', '');
        }
        this.showToolTip = false;
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-button',
                    template: "<div class=\"button {{intent}} {{iconButtonClass()}}\" [ngClass]=\"toggle ? className + ' gd-edit active' : className\" (mouseenter)=\"onHovering()\"\r\n     (mouseleave)=\"onUnhovering()\" gdDisabledCursor [dis]=\"disabled\">\r\n  <fa-icon [icon]=\"['fas',icon]\"></fa-icon>\r\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\"></gd-tooltip>\r\n  <div class=\"text\"><ng-content></ng-content></div>\r\n</div>\r\n",
                    styles: [".icon-button{padding:0!important;margin:0 7px}.button{padding:0 10px;font-size:14px;color:#959da5;cursor:pointer;display:flex;align-items:center;justify-content:center;min-width:37px;height:37px;text-align:center;position:relative;white-space:nowrap}.button.inactive{cursor:not-allowed;opacity:.4}.button.active *{color:#ccd0d4}.button.primary{background-color:#3e4e5a;color:#fff}.button.primary.active{color:#fff;background-color:#688296}.button.brand{background-color:#25c2d4;color:#fff}.button.brand.active{color:#fff;background-color:#688296}.button .text{font-size:13px;padding-left:10px}@media (max-width:1037px){.button{font-size:22px}.arrow-button{margin:5px}}"]
                }] }
    ];
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
    return ButtonComponent;
}());
export { ButtonComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBeUMsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhGO0lBQUE7UUFPRSxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBR2hCLFdBQU0sR0FBRyxTQUFTLENBQUM7UUFHbkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQWVqQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFtQnRCLENBQUM7Ozs7SUFqQkMseUNBQWU7OztJQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsb0NBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsc0NBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDeEQ7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixpY0FBc0M7O2lCQUV2Qzs7OzJCQUVFLEtBQUs7eUJBR0wsS0FBSzsyQkFHTCxLQUFLO3VCQUdMLEtBQUs7NEJBR0wsS0FBSzswQkFHTCxLQUFLOzRCQUdMLEtBQUs7eUJBR0wsS0FBSzs7SUFzQlIsc0JBQUM7Q0FBQSxBQWpERCxJQWlEQztTQTVDWSxlQUFlOzs7SUFDMUIsbUNBQ2dCOztJQUVoQixpQ0FDbUI7O0lBRW5CLG1DQUNpQjs7SUFFakIsK0JBQ2M7O0lBRWQsb0NBQ21COztJQUVuQixrQ0FDaUI7O0lBRWpCLG9DQUNrQjs7SUFFbEIsaUNBQ2U7O0lBRWYsc0NBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1idXR0b24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpXHJcbiAgaWNvbk9ubHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGludGVudCA9ICdkZWZhdWx0JztcclxuXHJcbiAgQElucHV0KClcclxuICBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGljb24gOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaWNvbkNsYXNzIDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHRvb2x0aXAgOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdG9nZ2xlID0gZmFsc2U7XHJcblxyXG4gIHNob3dUb29sVGlwID0gZmFsc2U7XHJcblxyXG4gIGljb25CdXR0b25DbGFzcygpe1xyXG4gICAgcmV0dXJuIHRoaXMuaWNvbk9ubHkgPyAnaWNvbi1idXR0b24nIDogJyc7XHJcbiAgfVxyXG5cclxuICBvbkhvdmVyaW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuY2xhc3NOYW1lICs9ICcgYWN0aXZlJztcclxuICAgIH1cclxuICAgIHRoaXMuc2hvd1Rvb2xUaXAgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb25VbmhvdmVyaW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUucmVwbGFjZSgnIGFjdGl2ZScsICcnKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2hvd1Rvb2xUaXAgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19