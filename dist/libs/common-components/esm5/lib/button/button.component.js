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
        this.iconRegular = false;
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
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.onUnhovering = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.className = this.cleanAll(this.className, ' active');
        }
    };
    /**
     * @private
     * @param {?} str
     * @param {?} val
     * @return {?}
     */
    ButtonComponent.prototype.cleanAll = /**
     * @private
     * @param {?} str
     * @param {?} val
     * @return {?}
     */
    function (str, val) {
        while (str && str.indexOf(val) !== -1) {
            str = str.replace(val, '');
        }
        return str;
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-button',
                    template: "<div class=\"button {{intent}} {{iconButtonClass()}}\" [ngClass]=\"toggle ? className + ' gd-edit active' : className\"\n     gdTooltip (showToolTip)=\"showToolTip = $event\" (mouseenter)=\"onHovering()\"\n     (mouseleave)=\"onUnhovering()\" gdDisabledCursor [dis]=\"disabled\">\n  <fa-icon [icon]=\"[iconRegular ? 'far' : 'fas',icon]\" [size]=\"iconSize\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\"></gd-tooltip>\n  <div class=\"text\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: [".icon-button{padding:0!important;margin:0 10px}.button{padding:0 10px;font-size:14px;color:#959da5;cursor:pointer;display:flex;align-items:center;justify-content:center;min-width:37px;height:37px;text-align:center;position:relative;white-space:nowrap}.button.inactive{cursor:not-allowed;opacity:.4}.button.active *{color:#ccd0d4}.button.primary{background-color:#3e4e5a;color:#fff}.button.primary.active{color:#fff;background-color:#688296}.button.brand{background-color:#25c2d4;color:#fff}.button.brand.active{color:#fff;background-color:#688296}.button .text{font-size:13px;padding-left:10px}@media (max-width:1037px){.button{font-size:22px}.arrow-button{margin:5px}}"]
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
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
    ButtonComponent.prototype.iconSize;
    /** @type {?} */
    ButtonComponent.prototype.iconRegular;
    /** @type {?} */
    ButtonComponent.prototype.showToolTip;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFL0M7SUFtQkU7UUFiUyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxTQUFTLENBQUM7UUFDbkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUtqQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFFN0IsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFHcEIsQ0FBQzs7OztJQUVELHlDQUFlOzs7SUFBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELG9DQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7OztJQUVELHNDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLGtDQUFROzs7Ozs7SUFBaEIsVUFBaUIsR0FBVyxFQUFFLEdBQVc7UUFDdkMsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNyQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDNUI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O2dCQTNDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGdpQkFBc0M7O2lCQUV2Qzs7Ozs7MkJBRUUsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUE2QlIsc0JBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQXZDWSxlQUFlOzs7SUFDMUIsbUNBQXlCOztJQUN6QixpQ0FBNEI7O0lBQzVCLG1DQUEwQjs7SUFDMUIsK0JBQXNCOztJQUN0QixvQ0FBMkI7O0lBQzNCLGtDQUF5Qjs7SUFDekIsb0NBQTJCOztJQUMzQixpQ0FBd0I7O0lBQ3hCLG1DQUEwQjs7SUFDMUIsc0NBQTZCOztJQUU3QixzQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaWNvbk9ubHkgPSB0cnVlO1xuICBASW5wdXQoKSBpbnRlbnQgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgaWNvbkNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvZ2dsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBpY29uU2l6ZTogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uUmVndWxhciA9IGZhbHNlO1xuXG4gIHNob3dUb29sVGlwID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBpY29uQnV0dG9uQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbk9ubHkgPyAnaWNvbi1idXR0b24nIDogJyc7XG4gIH1cblxuICBvbkhvdmVyaW5nKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jbGFzc05hbWUgKz0gJyBhY3RpdmUnO1xuICAgIH1cbiAgfVxuXG4gIG9uVW5ob3ZlcmluZygpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xhc3NOYW1lID0gdGhpcy5jbGVhbkFsbCh0aGlzLmNsYXNzTmFtZSwgJyBhY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFuQWxsKHN0cjogc3RyaW5nLCB2YWw6IHN0cmluZykge1xuICAgIHdoaWxlIChzdHIgJiYgc3RyLmluZGV4T2YodmFsKSAhPT0gLTEpIHtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKHZhbCwgJycpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG4iXX0=