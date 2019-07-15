/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ButtonComponent {
    constructor() {
        this.disabled = false;
        this.toggle = false;
        this.showToolTip = false;
    }
    /**
     * @return {?}
     */
    onHovering() {
        this.showToolTip = true;
    }
    /**
     * @return {?}
     */
    onUnhovering() {
        this.showToolTip = false;
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-button',
                template: "<div class=\"button\" [ngClass]=\"toggle ? className + ' gd-edit active' : className\" (mouseenter)=\"onHovering()\" (mouseleave)=\"onUnhovering()\" gdDisabledCursor [dis]=\"disabled\">\n  <fa-icon [icon]=\"['fas',icon]\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\"></gd-tooltip>\n  <ng-content></ng-content>\n</div>\n",
                styles: [".button{margin:0 7px;font-size:14px;color:#959da5;cursor:pointer;display:flex;align-items:center;justify-content:center;width:37px;height:36px;text-align:center;position:relative}.button.inactive{cursor:not-allowed;color:#ccc}.button.active .ng-fa-icon{color:#fff}@media (max-width:1025px){.button{font-size:20px;margin:0 20px}.arrow-button{margin:5px}}"]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    disabled: [{ type: Input }],
    icon: [{ type: Input }],
    iconClass: [{ type: Input }],
    tooltip: [{ type: Input }],
    className: [{ type: Input }],
    toggle: [{ type: Input }]
};
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPL0MsTUFBTSxPQUFPLGVBQWU7SUFVMUI7UUFSUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBS2pCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFFSixDQUFDOzs7O0lBRWpCLFVBQVU7UUFDUixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7OztZQXZCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLG9YQUFzQzs7YUFFdkM7Ozs7O3VCQUdFLEtBQUs7bUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3NCQUNMLEtBQUs7d0JBQ0wsS0FBSztxQkFDTCxLQUFLOzs7O0lBTE4sbUNBQTBCOztJQUMxQiwrQkFBcUI7O0lBQ3JCLG9DQUEwQjs7SUFDMUIsa0NBQXdCOztJQUN4QixvQ0FBMkI7O0lBQzNCLGlDQUF3Qjs7SUFDeEIsc0NBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaWNvbjpzdHJpbmc7XG4gIEBJbnB1dCgpIGljb25DbGFzczpzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXA6c3RyaW5nO1xuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgdG9nZ2xlID0gZmFsc2U7XG4gIHNob3dUb29sVGlwID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBvbkhvdmVyaW5nKCkge1xuICAgIHRoaXMuc2hvd1Rvb2xUaXAgPSB0cnVlO1xuICB9XG5cbiAgb25VbmhvdmVyaW5nKCkge1xuICAgIHRoaXMuc2hvd1Rvb2xUaXAgPSBmYWxzZTtcbiAgfVxufVxuIl19