/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { OnCloseService } from "../on-close.service";
import { SelectComponent } from "../select/select.component";
export class ButtonSelectComponent extends SelectComponent {
    /**
     * @param {?} _onCloseService
     */
    constructor(_onCloseService) {
        super(_onCloseService);
        this.showToolTip = false;
    }
}
ButtonSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-button-select',
                template: "<div class=\"select\"\n     (click)=\"toggle($event)\"\n     gdOutside\n     [clickOutsideEnabled]=\"isOpen\"\n     (clickOutside)=\"onClickOutside($event)\"\n     gdTooltip\n     (showToolTip)=\"showToolTip = $event\"\n     gdDisabledCursor [dis]=\"disabled\">\n  <fa-icon [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\"></gd-tooltip>\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\"></span>\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\n    <div *ngFor=\"let option of options\">\n      <div *ngIf=\"!option.separator\" (click)=\"select($event, option)\" class=\"option\">{{option.name}}</div>\n      <div *ngIf=\"option.separator\" role=\"separator\" class=\"dropdown-menu-separator\"></div>\n    </div>\n  </div>\n</div>\n",
                styles: [".select{min-width:50px;color:#959da5}.select.inactive{cursor:not-allowed;opacity:.4}.select.active .ng-fa-icon{color:#ccd0d4}.nav-caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent;cursor:pointer}.nav-caret.inactive{cursor:not-allowed}.dropdown-menu{position:absolute;top:49px;z-index:1000;float:left;min-width:160px;padding:5px 0;list-style:none;font-size:13px;text-align:left;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box}.dropdown-menu .option{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;white-space:nowrap;cursor:pointer}.dropdown-menu .option:hover{background-color:#25c2d4;color:#fff}.dropdown-menu-separator{height:1px;margin:8px 0;overflow:hidden;background-color:#e5e5e5;padding:0!important}"]
            }] }
];
/** @nocollapse */
ButtonSelectComponent.ctorParameters = () => [
    { type: OnCloseService }
];
ButtonSelectComponent.propDecorators = {
    icon: [{ type: Input }],
    tooltip: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ButtonSelectComponent.prototype.icon;
    /** @type {?} */
    ButtonSelectComponent.prototype.tooltip;
    /** @type {?} */
    ButtonSelectComponent.prototype.showToolTip;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvYnV0dG9uLXNlbGVjdC9idXR0b24tc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQU8zRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsZUFBZTs7OztJQUt4RCxZQUFZLGVBQStCO1FBQ3pDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUh6QixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUlwQixDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsbTFCQUE2Qzs7YUFFOUM7Ozs7WUFQTyxjQUFjOzs7bUJBU25CLEtBQUs7c0JBQ0wsS0FBSzs7OztJQUROLHFDQUFzQjs7SUFDdEIsd0NBQXlCOztJQUN6Qiw0Q0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPbkNsb3NlU2VydmljZX0gZnJvbSBcIi4uL29uLWNsb3NlLnNlcnZpY2VcIjtcbmltcG9ydCB7U2VsZWN0Q29tcG9uZW50fSBmcm9tIFwiLi4vc2VsZWN0L3NlbGVjdC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtYnV0dG9uLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLXNlbGVjdC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvblNlbGVjdENvbXBvbmVudCBleHRlbmRzIFNlbGVjdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xuICBzaG93VG9vbFRpcCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKF9vbkNsb3NlU2VydmljZTogT25DbG9zZVNlcnZpY2UpIHtcbiAgICBzdXBlcihfb25DbG9zZVNlcnZpY2UpO1xuICB9XG59XG4iXX0=