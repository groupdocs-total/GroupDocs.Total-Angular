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
        this.showToolTip = true;
    }
    /**
     * @return {?}
     */
    onUnhovering() {
        if (!this.disabled) {
            this.className = this.className.replace(' active', '');
        }
        this.showToolTip = false;
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-button',
                template: "<div class=\"button {{intent}} {{iconButtonClass()}}\" [ngClass]=\"toggle ? className + ' gd-edit active' : className\" (mouseenter)=\"onHovering()\"\r\n     (mouseleave)=\"onUnhovering()\" gdDisabledCursor [dis]=\"disabled\">\r\n  <fa-icon [icon]=\"['fas',icon]\"></fa-icon>\r\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\"></gd-tooltip>\r\n  <div class=\"text\"><ng-content></ng-content></div>\r\n</div>\r\n",
                styles: [".icon-button{padding:0!important;margin:0 10px}.button{padding:0 10px;font-size:14px;color:#959da5;cursor:pointer;display:flex;align-items:center;justify-content:center;min-width:37px;height:37px;text-align:center;position:relative;white-space:nowrap}.button.inactive{cursor:not-allowed;opacity:.4}.button.active *{color:#ccd0d4}.button.primary{background-color:#3e4e5a;color:#fff}.button.primary.active{color:#fff;background-color:#688296}.button.brand{background-color:#25c2d4;color:#fff}.button.brand.active{color:#fff;background-color:#688296}.button .text{font-size:13px;padding-left:10px}@media (max-width:1025px){.button{font-size:20px}.arrow-button{margin:5px}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBeUMsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3hGLE1BQU0sT0FBTyxlQUFlO0lBTDVCO1FBT0UsYUFBUSxHQUFHLElBQUksQ0FBQztRQUdoQixXQUFNLEdBQUcsU0FBUyxDQUFDO1FBR25CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFlakIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVmLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBbUJ0QixDQUFDOzs7O0lBakJDLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7O1lBaERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsaWNBQXNDOzthQUV2Qzs7O3VCQUVFLEtBQUs7cUJBR0wsS0FBSzt1QkFHTCxLQUFLO21CQUdMLEtBQUs7d0JBR0wsS0FBSztzQkFHTCxLQUFLO3dCQUdMLEtBQUs7cUJBR0wsS0FBSzs7OztJQXJCTixtQ0FDZ0I7O0lBRWhCLGlDQUNtQjs7SUFFbkIsbUNBQ2lCOztJQUVqQiwrQkFDYzs7SUFFZCxvQ0FDbUI7O0lBRW5CLGtDQUNpQjs7SUFFakIsb0NBQ2tCOztJQUVsQixpQ0FDZTs7SUFFZixzQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBpY29uT25seSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaW50ZW50ID0gJ2RlZmF1bHQnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaWNvbiA6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBpY29uQ2xhc3MgOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdG9vbHRpcCA6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBjbGFzc05hbWU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICB0b2dnbGUgPSBmYWxzZTtcclxuXHJcbiAgc2hvd1Rvb2xUaXAgPSBmYWxzZTtcclxuXHJcbiAgaWNvbkJ1dHRvbkNsYXNzKCl7XHJcbiAgICByZXR1cm4gdGhpcy5pY29uT25seSA/ICdpY29uLWJ1dHRvbicgOiAnJztcclxuICB9XHJcblxyXG4gIG9uSG92ZXJpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5jbGFzc05hbWUgKz0gJyBhY3RpdmUnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zaG93VG9vbFRpcCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvblVuaG92ZXJpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5jbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZS5yZXBsYWNlKCcgYWN0aXZlJywgJycpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zaG93VG9vbFRpcCA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=