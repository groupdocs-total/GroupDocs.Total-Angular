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
export class SelectComponent {
    /**
     * @param {?} _onCloseService
     */
    constructor(_onCloseService) {
        this._onCloseService = _onCloseService;
        this.disabled = false;
        this.selected = new EventEmitter();
        this.isOpen = false;
        _onCloseService.onClose.subscribe((/**
         * @return {?}
         */
        () => {
            this.close();
        }));
    }
    /**
     * @return {?}
     */
    open() {
        if (!this.disabled) {
            this.isOpen = true;
        }
    }
    /**
     * @return {?}
     */
    close() {
        this.isOpen = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickOutside(event) {
        this.close();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggle($event) {
        // TODO: following lines are commented as a part of possible solution
        // for hiding one select after opening another one
        //$event.preventDefault();
        //$event.stopPropagation();
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
        }
    }
    /**
     * @param {?} $event
     * @param {?} value
     * @return {?}
     */
    select($event, value) {
        $event.preventDefault();
        $event.stopPropagation();
        this.selected.emit(value);
        this.close();
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-select',
                template: "<div class=\"select\"\r\n     (click)=\"toggle($event)\"\r\n     (clickOutside)=\"onClickOutside($event)\"\r\n     [clickOutsideEnabled]=\"isOpen\">\r\n  <div class=\"selected-value\" gdDisabledCursor [dis]=\"disabled\">\r\n    {{showSelected?.name}}\r\n  </div>\r\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\"></span>\r\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\r\n    <div *ngFor=\"let option of options\">\r\n      <div *ngIf=\"!option.separator\" (click)=\"select($event, option)\" class=\"option\">{{option.name}}</div>\r\n      <div *ngIf=\"option.separator\" role=\"separator\" class=\"dropdown-menu-separator\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".select{min-width:50px;display:flex;flex-direction:row;justify-content:center;align-items:center;color:#959da5}.selected-value{font-size:14px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:clip;max-width:70px}.selected-value.inactive{cursor:not-allowed;color:#ccc}.nav-caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent;cursor:pointer}.nav-caret.inactive{cursor:not-allowed;color:#ccc}.dropdown-menu{position:absolute;top:49px;z-index:1000;float:left;min-width:96px;list-style:none;font-size:13px;text-align:left;background-color:#fff;box-shadow:0 3px 6px rgba(0,0,0,.3);background-clip:padding-box}.dropdown-menu .option{display:block;padding:7px 0 7px 7px;clear:both;font-weight:400;line-height:1.42857143;white-space:nowrap;cursor:pointer;font-size:10px}.dropdown-menu .option:hover{background-color:#25c2d4;color:#fff!important}.dropdown-menu-separator{height:1px;overflow:hidden;background-color:#f4f4f4;padding:0!important}"]
            }] }
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [
    { type: OnCloseService }
];
SelectComponent.propDecorators = {
    options: [{ type: Input }],
    disabled: [{ type: Input }],
    showSelected: [{ type: Input }],
    selected: [{ type: Output }],
    isOpen: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFFbkQsNEJBSUM7OztJQUhDLHNCQUFhOztJQUNiLHVCQUFXOztJQUNYLDJCQUFtQjs7QUFRckIsTUFBTSxPQUFPLGVBQWU7Ozs7SUFRMUIsWUFBc0IsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBTDVDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFaEIsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xELFdBQU0sR0FBRyxLQUFLLENBQUM7UUFHdEIsZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDckMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxLQUFhO1FBQzFCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQU07UUFDWCxxRUFBcUU7UUFDckUsa0RBQWtEO1FBQ2xELDBCQUEwQjtRQUMxQiwyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQWE7UUFDMUIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDOzs7WUFoREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixnc0JBQXNDOzthQUV2Qzs7OztZQVpPLGNBQWM7OztzQkFlbkIsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsTUFBTTtxQkFDTixLQUFLOzs7O0lBSk4sa0NBQTJCOztJQUMzQixtQ0FBMEI7O0lBQzFCLHVDQUE4Qjs7SUFDOUIsbUNBQTJEOztJQUMzRCxpQ0FBd0I7Ozs7O0lBRVosMENBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T25DbG9zZVNlcnZpY2V9IGZyb20gXCIuLi9vbi1jbG9zZS5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbiB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHZhbHVlOiBhbnk7XHJcbiAgc2VwYXJhdG9yOiBib29sZWFuO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2VsZWN0LmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IE9wdGlvbltdO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd1NlbGVjdGVkOiBPcHRpb247XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASW5wdXQoKSBpc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9vbkNsb3NlU2VydmljZTogT25DbG9zZVNlcnZpY2UpIHtcclxuICAgIF9vbkNsb3NlU2VydmljZS5vbkNsb3NlLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrT3V0c2lkZShldmVudCA6IEV2ZW50KXtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZSgkZXZlbnQpIHtcclxuICAgIC8vIFRPRE86IGZvbGxvd2luZyBsaW5lcyBhcmUgY29tbWVudGVkIGFzIGEgcGFydCBvZiBwb3NzaWJsZSBzb2x1dGlvblxyXG4gICAgLy8gZm9yIGhpZGluZyBvbmUgc2VsZWN0IGFmdGVyIG9wZW5pbmcgYW5vdGhlciBvbmVcclxuICAgIC8vJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdCgkZXZlbnQsIHZhbHVlOiBPcHRpb24pIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5zZWxlY3RlZC5lbWl0KHZhbHVlKTtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl19