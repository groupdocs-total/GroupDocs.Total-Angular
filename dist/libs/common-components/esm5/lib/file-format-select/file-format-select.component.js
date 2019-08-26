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
                    template: "<div class=\"select\"\r\n     (click)=\"toggle($event)\"\r\n     gdOutside\r\n     [clickOutsideEnabled]=\"isOpen\"\r\n     (clickOutside)=\"onClickOutside($event)\">\r\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\">\r\n    <fa-icon [ngClass]=\"{'multi-select': isMulti}\" [icon]=\"['fas','plus']\"></fa-icon>\r\n    <span class=\"label\" *ngIf=\"isMulti\">{{label}}</span>\r\n  </span>\r\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\r\n    <div *ngFor=\"let option of options\">\r\n      <div (click)=\"select($event, option)\" class=\"option\">\r\n        <fa-icon [icon]=\"['far', option.icon]\"></fa-icon>\r\n        <div class=\"gd-type\">{{option.name}}</div>\r\n        <div *ngIf=\"option.warning\" class=\"gd-type-warning\" title=\"1 selected file(s) can\u2019t be converted to {{option.name}} format\">\r\n          <fa-icon [icon]=\"['fas','exclamation-triangle']\"></fa-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".nav-caret{cursor:pointer}.nav-caret fa-icon{margin:0;font-size:15px;cursor:pointer;color:#2b2a2a;opacity:.43}.nav-caret fa-icon.multi-select{margin:8px;color:#fff;opacity:1!important}.nav-caret.inactive{cursor:not-allowed;color:#ccc}.dropdown-menu{position:absolute;z-index:1000;float:left;min-width:160px;padding:5px 0;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;max-height:300px;overflow-y:auto}.gd-type-warning{display:inline-block;margin-left:65px}.dropdown-menu .option{color:#959da5;height:25px;display:flex;cursor:pointer}.dropdown-menu .option fa-icon{margin:6px 10px;color:#959da5;font-size:12px;height:12px}.dropdown-menu .option:hover .gd-type-warning fa-icon{color:#f2fa23}.dropdown-menu .option:hover{background-color:#25c2d4;color:#fff}.dropdown-menu-separator{height:1px;margin:8px 0;overflow:hidden;background-color:#e5e5e5;padding:0!important}.select .label{font-size:13px;line-height:36px}.gd-type{font-size:13px;line-height:26px;width:27px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1mb3JtYXQtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9maWxlLWZvcm1hdC1zZWxlY3QvZmlsZS1mb3JtYXQtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFFbkQsNEJBR0M7OztJQUZDLHNCQUFhOztJQUNiLHVCQUFXOztBQUdiO0lBYUUsbUNBQW9CLGVBQStCO1FBQW5ELGlCQUlDO1FBSm1CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQU4xQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFZixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0QsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUdiLGVBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUzs7O1FBQUM7WUFDaEMsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsd0NBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7O0lBRUQseUNBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxrREFBYzs7OztJQUFkLFVBQWUsS0FBYTtRQUMxQixJQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ25DLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7Ozs7SUFFRCwwQ0FBTTs7OztJQUFOLFVBQU8sTUFBTTtRQUNYLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7Ozs7SUFFRCwwQ0FBTTs7Ozs7SUFBTixVQUFPLE1BQU0sRUFBRSxLQUFhO1FBQzFCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7Z0JBaERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxvK0JBQWtEOztpQkFFbkQ7Ozs7Z0JBWE8sY0FBYzs7OzBCQWFuQixLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLE1BQU07O0lBdUNULGdDQUFDO0NBQUEsQUFqREQsSUFpREM7U0E1Q1kseUJBQXlCOzs7SUFDcEMsNENBQTJCOztJQUMzQiw2Q0FBMEI7O0lBQzFCLDRDQUF5Qjs7SUFDekIsMENBQXVCOztJQUN2Qiw2Q0FBMkQ7O0lBQzNELDJDQUFlOzs7OztJQUVILG9EQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09uQ2xvc2VTZXJ2aWNlfSBmcm9tIFwiLi4vb24tY2xvc2Uuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcHRpb24ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB2YWx1ZTogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWZpbGUtZm9ybWF0LXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUtZm9ybWF0LXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS1mb3JtYXQtc2VsZWN0LmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbGVGb3JtYXRTZWxlY3RDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IE9wdGlvbltdO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaXNNdWx0aSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBpc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb25DbG9zZVNlcnZpY2U6IE9uQ2xvc2VTZXJ2aWNlKSB7XHJcbiAgICBfb25DbG9zZVNlcnZpY2Uub25DbG9zZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja091dHNpZGUoZXZlbnQgOiBFdmVudCl7XHJcbiAgICBpZihldmVudCAmJiBldmVudFsndmFsdWUnXSA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoJGV2ZW50KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdCgkZXZlbnQsIHZhbHVlOiBPcHRpb24pIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5zZWxlY3RlZC5lbWl0KHZhbHVlKTtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl19