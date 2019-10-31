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
                    template: "<div class=\"select\"\n     (click)=\"toggle($event)\"\n     (clickOutside)=\"onClickOutside($event)\"\n     [clickOutsideEnabled]=\"isOpen\"\n     >\n  <span class=\"selected-value\" gdDisabledCursor [dis]=\"disabled\">\n    {{showSelected?.name}}\n  </span>\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\"></span>\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\n    <div *ngFor=\"let option of options\">\n      <div *ngIf=\"!option.separator\" (click)=\"select($event, option)\" class=\"option\">{{option.name}}</div>\n      <div *ngIf=\"option.separator\" role=\"separator\" class=\"dropdown-menu-separator\"></div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".select{min-width:50px;color:#959da5}.selected-value{font-size:14px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:clip}.selected-value.inactive{cursor:not-allowed;color:#ccc}.nav-caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent;cursor:pointer}.nav-caret.inactive{cursor:not-allowed;color:#ccc}.dropdown-menu{position:absolute;top:49px;z-index:1000;float:left;min-width:96px;list-style:none;font-size:13px;text-align:left;background-color:#fff;box-shadow:0 3px 6px rgba(0,0,0,.3);background-clip:padding-box}.dropdown-menu .option{display:block;padding:7px 0 7px 7px;clear:both;font-weight:400;line-height:1.42857143;white-space:nowrap;cursor:pointer;font-size:10px}.dropdown-menu .option:hover{background-color:#25c2d4;color:#fff!important}.dropdown-menu-separator{height:1px;overflow:hidden;background-color:#f4f4f4;padding:0!important}"]
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
        selected: [{ type: Output }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFFbkQsNEJBSUM7OztJQUhDLHNCQUFhOztJQUNiLHVCQUFXOztJQUNYLDJCQUFtQjs7QUFHckI7SUFhRSx5QkFBc0IsZUFBK0I7UUFBckQsaUJBSUM7UUFKcUIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBTDVDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFaEIsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNELFdBQU0sR0FBRyxLQUFLLENBQUM7UUFHYixlQUFlLENBQUMsT0FBTyxDQUFDLFNBQVM7OztRQUFDO1lBQ2hDLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDhCQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7OztJQUVELCtCQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsd0NBQWM7Ozs7SUFBZCxVQUFlLEtBQWE7UUFDMUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCxnQ0FBTTs7OztJQUFOLFVBQU8sTUFBTTtRQUNYLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7Ozs7SUFFRCxnQ0FBTTs7Ozs7SUFBTixVQUFPLE1BQU0sRUFBRSxLQUFhO1FBQzFCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7Z0JBOUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsMnFCQUFzQzs7aUJBRXZDOzs7O2dCQVpPLGNBQWM7OzswQkFlbkIsS0FBSzsyQkFDTCxLQUFLOytCQUNMLEtBQUs7MkJBQ0wsTUFBTTs7SUFzQ1Qsc0JBQUM7Q0FBQSxBQWhERCxJQWdEQztTQTNDWSxlQUFlOzs7SUFFMUIsa0NBQTJCOztJQUMzQixtQ0FBMEI7O0lBQzFCLHVDQUE4Qjs7SUFDOUIsbUNBQTJEOztJQUMzRCxpQ0FBZTs7Ozs7SUFFSCwwQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T25DbG9zZVNlcnZpY2V9IGZyb20gXCIuLi9vbi1jbG9zZS5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xuICBzZXBhcmF0b3I6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWxlY3QuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIG9wdGlvbnM6IE9wdGlvbltdO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93U2VsZWN0ZWQ6IE9wdGlvbjtcbiAgQE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgaXNPcGVuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9vbkNsb3NlU2VydmljZTogT25DbG9zZVNlcnZpY2UpIHtcbiAgICBfb25DbG9zZVNlcnZpY2Uub25DbG9zZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgb25DbGlja091dHNpZGUoZXZlbnQgOiBFdmVudCl7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgdG9nZ2xlKCRldmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdCgkZXZlbnQsIHZhbHVlOiBPcHRpb24pIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5zZWxlY3RlZC5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxufVxuIl19