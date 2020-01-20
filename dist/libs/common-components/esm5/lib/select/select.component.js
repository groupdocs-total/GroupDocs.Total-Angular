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
    /** @type {?} */
    Option.prototype.separator;
}
var SelectComponent = /** @class */ (function () {
    function SelectComponent(_onCloseService) {
        var _this = this;
        this._onCloseService = _onCloseService;
        this.disabled = false;
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
    SelectComponent.prototype.open = /**
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
    SelectComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.isOpen = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onClickOutside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.close();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SelectComponent.prototype.toggle = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        // TODO: following lines were uncommented due to needness in signature app
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
    SelectComponent.prototype.select = /**
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
    SelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-select',
                    template: "<div class=\"select\"\r\n     (click)=\"toggle($event)\"\r\n     (clickOutside)=\"onClickOutside($event)\"\r\n     [clickOutsideEnabled]=\"isOpen\">\r\n  <div class=\"selected-value\" gdDisabledCursor [dis]=\"disabled\">\r\n    {{showSelected?.name}}\r\n  </div>\r\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\"></span>\r\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\r\n    <div *ngFor=\"let option of options\">\r\n      <div *ngIf=\"!option.separator\" (click)=\"select($event, option)\" class=\"option\">{{option.name}}</div>\r\n      <div *ngIf=\"option.separator\" role=\"separator\" class=\"dropdown-menu-separator\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".select{min-width:50px;display:flex;flex-direction:row;justify-content:center;align-items:center;color:#959da5}.selected-value{font-size:14px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:clip;max-width:70px}.selected-value.inactive{cursor:not-allowed;color:#ccc}.nav-caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent;cursor:pointer}.nav-caret.inactive{cursor:not-allowed;color:#ccc}.dropdown-menu{position:absolute;top:49px;z-index:1000;float:left;min-width:96px;list-style:none;font-size:13px;text-align:left;background-color:#fff;box-shadow:0 3px 6px rgba(0,0,0,.3);background-clip:padding-box}.dropdown-menu .option{display:block;padding:7px 0 7px 7px;clear:both;font-weight:400;line-height:1.42857143;white-space:nowrap;cursor:pointer;font-size:10px}.dropdown-menu .option:hover{background-color:#25c2d4;color:#fff!important}.dropdown-menu-separator{height:1px;overflow:hidden;background-color:#f4f4f4;padding:0!important}"]
                }] }
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: OnCloseService }
    ]; };
    SelectComponent.propDecorators = {
        options: [{ type: Input }],
        disabled: [{ type: Input }],
        showSelected: [{ type: Input }],
        selected: [{ type: Output }],
        isOpen: [{ type: Input }]
    };
    return SelectComponent;
}());
export { SelectComponent };
if (false) {
    /** @type {?} */
    SelectComponent.prototype.options;
    /** @type {?} */
    SelectComponent.prototype.disabled;
    /** @type {?} */
    SelectComponent.prototype.showSelected;
    /** @type {?} */
    SelectComponent.prototype.selected;
    /** @type {?} */
    SelectComponent.prototype.isOpen;
    /**
     * @type {?}
     * @protected
     */
    SelectComponent.prototype._onCloseService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFFbkQsNEJBSUM7OztJQUhDLHNCQUFhOztJQUNiLHVCQUFXOztJQUNYLDJCQUFtQjs7QUFHckI7SUFhRSx5QkFBc0IsZUFBK0I7UUFBckQsaUJBSUM7UUFKcUIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBTDVDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFaEIsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xELFdBQU0sR0FBRyxLQUFLLENBQUM7UUFHdEIsZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7UUFBQztZQUNoQyxLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCw4QkFBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7SUFFRCwrQkFBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELHdDQUFjOzs7O0lBQWQsVUFBZSxLQUFhO1FBQzFCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7Ozs7O0lBRUQsZ0NBQU07Ozs7SUFBTixVQUFPLE1BQU07UUFDWCwwRUFBMEU7UUFDMUUsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7OztJQUVELGdDQUFNOzs7OztJQUFOLFVBQU8sTUFBTSxFQUFFLEtBQWE7UUFDMUIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDOztnQkEvQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixnc0JBQXNDOztpQkFFdkM7Ozs7Z0JBWk8sY0FBYzs7OzBCQWVuQixLQUFLOzJCQUNMLEtBQUs7K0JBQ0wsS0FBSzsyQkFDTCxNQUFNO3lCQUNOLEtBQUs7O0lBcUNSLHNCQUFDO0NBQUEsQUFoREQsSUFnREM7U0EzQ1ksZUFBZTs7O0lBRTFCLGtDQUEyQjs7SUFDM0IsbUNBQTBCOztJQUMxQix1Q0FBOEI7O0lBQzlCLG1DQUEyRDs7SUFDM0QsaUNBQXdCOzs7OztJQUVaLDBDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09uQ2xvc2VTZXJ2aWNlfSBmcm9tIFwiLi4vb24tY2xvc2Uuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcHRpb24ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB2YWx1ZTogYW55O1xyXG4gIHNlcGFyYXRvcjogYm9vbGVhbjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1zZWxlY3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NlbGVjdC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBvcHRpb25zOiBPcHRpb25bXTtcclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dTZWxlY3RlZDogT3B0aW9uO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCkgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfb25DbG9zZVNlcnZpY2U6IE9uQ2xvc2VTZXJ2aWNlKSB7XHJcbiAgICBfb25DbG9zZVNlcnZpY2Uub25DbG9zZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja091dHNpZGUoZXZlbnQgOiBFdmVudCl7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoJGV2ZW50KSB7XHJcbiAgICAvLyBUT0RPOiBmb2xsb3dpbmcgbGluZXMgd2VyZSB1bmNvbW1lbnRlZCBkdWUgdG8gbmVlZG5lc3MgaW4gc2lnbmF0dXJlIGFwcFxyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3QoJGV2ZW50LCB2YWx1ZTogT3B0aW9uKSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCh2YWx1ZSk7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==