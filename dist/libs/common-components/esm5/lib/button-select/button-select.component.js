/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { OnCloseService } from "../on-close.service";
import { SelectComponent } from "../select/select.component";
var ButtonSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonSelectComponent, _super);
    function ButtonSelectComponent(_onCloseService) {
        var _this = _super.call(this, _onCloseService) || this;
        _this.showToolTip = false;
        return _this;
    }
    ButtonSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-button-select',
                    template: "<div class=\"select\"\n     (click)=\"toggle($event)\"\n     gdOutside\n     [clickOutsideEnabled]=\"isOpen\"\n     (clickOutside)=\"onClickOutside($event)\"\n     gdTooltip\n     (showToolTip)=\"showToolTip = $event\"\n     gdDisabledCursor [dis]=\"disabled\">\n  <fa-icon [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\"></gd-tooltip>\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\"></span>\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\n    <div *ngFor=\"let option of options\">\n      <div *ngIf=\"!option.separator\" (click)=\"select($event, option)\" class=\"option\">{{option.name}}</div>\n      <div *ngIf=\"option.separator\" role=\"separator\" class=\"dropdown-menu-separator\"></div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".select{min-width:50px;color:#959da5}.select.inactive{cursor:not-allowed;opacity:.4}.select.active .ng-fa-icon{color:#ccd0d4}.nav-caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent;cursor:pointer}.nav-caret.inactive{cursor:not-allowed}.dropdown-menu{position:absolute;top:49px;z-index:1000;float:left;min-width:160px;padding:5px 0;list-style:none;font-size:13px;text-align:left;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box}.dropdown-menu .option{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;white-space:nowrap;cursor:pointer}.dropdown-menu .option:hover{background-color:#25c2d4;color:#fff}.dropdown-menu-separator{height:1px;margin:8px 0;overflow:hidden;background-color:#e5e5e5;padding:0!important}"]
                }] }
    ];
    /** @nocollapse */
    ButtonSelectComponent.ctorParameters = function () { return [
        { type: OnCloseService }
    ]; };
    ButtonSelectComponent.propDecorators = {
        icon: [{ type: Input }],
        tooltip: [{ type: Input }]
    };
    return ButtonSelectComponent;
}(SelectComponent));
export { ButtonSelectComponent };
if (false) {
    /** @type {?} */
    ButtonSelectComponent.prototype.icon;
    /** @type {?} */
    ButtonSelectComponent.prototype.tooltip;
    /** @type {?} */
    ButtonSelectComponent.prototype.showToolTip;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvYnV0dG9uLXNlbGVjdC9idXR0b24tc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFM0Q7SUFLMkMsaURBQWU7SUFLeEQsK0JBQVksZUFBK0I7UUFBM0MsWUFDRSxrQkFBTSxlQUFlLENBQUMsU0FDdkI7UUFKRCxpQkFBVyxHQUFHLEtBQUssQ0FBQzs7SUFJcEIsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLG0xQkFBNkM7O2lCQUU5Qzs7OztnQkFQTyxjQUFjOzs7dUJBU25CLEtBQUs7MEJBQ0wsS0FBSzs7SUFNUiw0QkFBQztDQUFBLEFBYkQsQ0FLMkMsZUFBZSxHQVF6RDtTQVJZLHFCQUFxQjs7O0lBQ2hDLHFDQUFzQjs7SUFDdEIsd0NBQXlCOztJQUN6Qiw0Q0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPbkNsb3NlU2VydmljZX0gZnJvbSBcIi4uL29uLWNsb3NlLnNlcnZpY2VcIjtcbmltcG9ydCB7U2VsZWN0Q29tcG9uZW50fSBmcm9tIFwiLi4vc2VsZWN0L3NlbGVjdC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtYnV0dG9uLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLXNlbGVjdC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvblNlbGVjdENvbXBvbmVudCBleHRlbmRzIFNlbGVjdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xuICBzaG93VG9vbFRpcCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKF9vbkNsb3NlU2VydmljZTogT25DbG9zZVNlcnZpY2UpIHtcbiAgICBzdXBlcihfb25DbG9zZVNlcnZpY2UpO1xuICB9XG59XG4iXX0=