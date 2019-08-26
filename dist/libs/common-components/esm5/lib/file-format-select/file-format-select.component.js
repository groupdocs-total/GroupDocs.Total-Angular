/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnCloseService } from "../on-close.service";
/**
 * @record
 */
export function Option() { }
if (false) {
    /** @type {?} */
    Option.prototype.name;
    /** @type {?} */
    Option.prototype.value;
}
var FileFormatSelectComponent = /** @class */ (function () {
    function FileFormatSelectComponent(_onCloseService) {
        var _this = this;
        this._onCloseService = _onCloseService;
        this.disabled = false;
        this.isMulti = false;
        this.selected = new EventEmitter();
        this.isOpen = false;
        _onCloseService.onClose.subscribe((/**
         * @return {?}
         */
        function () {
            _this.close();
        }));
    }
    /**
     * @return {?}
     */
    FileFormatSelectComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.isOpen = true;
        }
    };
    /**
     * @return {?}
     */
    FileFormatSelectComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.isOpen = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileFormatSelectComponent.prototype.onClickOutside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event && event['value'] === true) {
            this.close();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    FileFormatSelectComponent.prototype.toggle = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
        }
    };
    /**
     * @param {?} $event
     * @param {?} value
     * @return {?}
     */
    FileFormatSelectComponent.prototype.select = /**
     * @param {?} $event
     * @param {?} value
     * @return {?}
     */
    function ($event, value) {
        $event.preventDefault();
        $event.stopPropagation();
        this.selected.emit(value);
        this.close();
    };
    FileFormatSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-file-format-select',
                    template: "<div class=\"select\" [ngClass]=\"{'single': !isMulti}\"\n     (click)=\"toggle($event)\"\n     gdOutside\n     [clickOutsideEnabled]=\"isOpen\"\n     (clickOutside)=\"onClickOutside($event)\">\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\">\n    <fa-icon [ngClass]=\"{'multi-select': isMulti}\" [icon]=\"['fas','plus']\"></fa-icon>\n    <label *ngIf=\"isMulti\">{{label}}</label>\n  </span>\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\n    <div *ngFor=\"let option of options\">\n      <div (click)=\"select($event, option)\" class=\"option\">\n        <fa-icon [icon]=\"['far', option.icon]\"></fa-icon>\n        <div class=\"gd-type\">{{option.name}}</div>\n        <div *ngIf=\"option.warning\" class=\"gd-type-warning\" title=\"1 selected file(s) can\u2019t be converted to {{option.name}} format\">\n          <fa-icon [icon]=\"['fas','exclamation-triangle']\"></fa-icon>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".single{color:#959da5;min-width:50px}.nav-caret{vertical-align:-webkit-baseline-middle;cursor:pointer}.nav-caret.inactive{cursor:not-allowed;color:#ccc}.dropdown-menu{position:absolute;z-index:1000;float:left;min-width:160px;padding:5px 0;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;max-height:300px;overflow-y:auto}.gd-type-warning{display:inline-block;margin-left:65px}.dropdown-menu .option{color:#959da5;height:25px;display:flex;cursor:pointer}.dropdown-menu .option fa-icon{margin:6px 10px;color:#959da5;font-size:12px;height:12px}.dropdown-menu .option:hover .gd-type-warning fa-icon{color:#f2fa23}.dropdown-menu .option:hover{background-color:#25c2d4;color:#fff}.dropdown-menu-separator{height:1px;margin:8px 0;overflow:hidden;background-color:#e5e5e5;padding:0!important}.multi-select{margin:8px 12px 7px 8px}.select label{font-size:13px;line-height:36px;position:absolute}.gd-type{font-size:13px;line-height:26px;width:27px}"]
                }] }
    ];
    /** @nocollapse */
    FileFormatSelectComponent.ctorParameters = function () { return [
        { type: OnCloseService }
    ]; };
    FileFormatSelectComponent.propDecorators = {
        options: [{ type: Input }],
        disabled: [{ type: Input }],
        isMulti: [{ type: Input }],
        label: [{ type: Input }],
        selected: [{ type: Output }]
    };
    return FileFormatSelectComponent;
}());
export { FileFormatSelectComponent };
if (false) {
    /** @type {?} */
    FileFormatSelectComponent.prototype.options;
    /** @type {?} */
    FileFormatSelectComponent.prototype.disabled;
    /** @type {?} */
    FileFormatSelectComponent.prototype.isMulti;
    /** @type {?} */
    FileFormatSelectComponent.prototype.label;
    /** @type {?} */
    FileFormatSelectComponent.prototype.selected;
    /** @type {?} */
    FileFormatSelectComponent.prototype.isOpen;
    /**
     * @type {?}
     * @private
     */
    FileFormatSelectComponent.prototype._onCloseService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1mb3JtYXQtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9maWxlLWZvcm1hdC1zZWxlY3QvZmlsZS1mb3JtYXQtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFFbkQsNEJBR0M7OztJQUZDLHNCQUFhOztJQUNiLHVCQUFXOztBQUdiO0lBYUUsbUNBQW9CLGVBQStCO1FBQW5ELGlCQUlDO1FBSm1CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQU4xQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFZixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0QsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUdiLGVBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUzs7O1FBQUM7WUFDaEMsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsd0NBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7O0lBRUQseUNBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxrREFBYzs7OztJQUFkLFVBQWUsS0FBYTtRQUMxQixJQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ25DLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7Ozs7SUFFRCwwQ0FBTTs7OztJQUFOLFVBQU8sTUFBTTtRQUNYLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7Ozs7SUFFRCwwQ0FBTTs7Ozs7SUFBTixVQUFPLE1BQU0sRUFBRSxLQUFhO1FBQzFCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7Z0JBaERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQywrOEJBQWtEOztpQkFFbkQ7Ozs7Z0JBWE8sY0FBYzs7OzBCQWFuQixLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLE1BQU07O0lBdUNULGdDQUFDO0NBQUEsQUFqREQsSUFpREM7U0E1Q1kseUJBQXlCOzs7SUFDcEMsNENBQTJCOztJQUMzQiw2Q0FBMEI7O0lBQzFCLDRDQUF5Qjs7SUFDekIsMENBQXVCOztJQUN2Qiw2Q0FBMkQ7O0lBQzNELDJDQUFlOzs7OztJQUVILG9EQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPbkNsb3NlU2VydmljZX0gZnJvbSBcIi4uL29uLWNsb3NlLnNlcnZpY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBPcHRpb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHZhbHVlOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWZpbGUtZm9ybWF0LXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLWZvcm1hdC1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWxlLWZvcm1hdC1zZWxlY3QuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGaWxlRm9ybWF0U2VsZWN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgb3B0aW9uczogT3B0aW9uW107XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzTXVsdGkgPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgaXNPcGVuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb25DbG9zZVNlcnZpY2U6IE9uQ2xvc2VTZXJ2aWNlKSB7XG4gICAgX29uQ2xvc2VTZXJ2aWNlLm9uQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIG9uQ2xpY2tPdXRzaWRlKGV2ZW50IDogRXZlbnQpe1xuICAgIGlmKGV2ZW50ICYmIGV2ZW50Wyd2YWx1ZSddID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKCRldmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdCgkZXZlbnQsIHZhbHVlOiBPcHRpb24pIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5zZWxlY3RlZC5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==