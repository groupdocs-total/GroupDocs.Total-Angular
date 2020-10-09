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
        // TODO: following lines were uncommented due to needness in signature app
        $event.preventDefault();
        $event.stopPropagation();
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
                template: "<div class=\"select\"\n     (click)=\"toggle($event)\"\n     (touchstart)=\"toggle($event)\"\n     (clickOutside)=\"onClickOutside($event)\"\n     [clickOutsideEnabled]=\"isOpen\">\n  <div *ngIf=\"!icon\" class=\"selected-value\" gdDisabledCursor [dis]=\"disabled\">\n    {{showSelected?.name}}\n  </div>\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\"></fa-icon>\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\"></span>\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\n    <div *ngFor=\"let option of options\">\n      <div *ngIf=\"!option.separator\" (click)=\"select($event, option)\" (touchstart)=\"select($event, option)\"\n           class=\"option\">{{option.name}}</div>\n      <div *ngIf=\"option.separator\" role=\"separator\" class=\"dropdown-menu-separator\"></div>\n    </div>\n  </div>\n</div>\n",
                styles: [".select{min-width:50px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;color:#959da5}.selected-value{font-size:14px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:clip;max-width:70px}.selected-value.inactive{cursor:not-allowed;color:#ccc}.nav-caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent;cursor:pointer}.nav-caret.inactive{cursor:not-allowed;color:#ccc}.dropdown-menu{position:absolute;top:49px;z-index:1000;float:left;min-width:96px;list-style:none;font-size:13px;text-align:left;background-color:#fff;box-shadow:0 3px 6px rgba(0,0,0,.3);background-clip:padding-box}.dropdown-menu .option{display:block;padding:7px 0 7px 7px;clear:both;font-weight:400;line-height:1.42857143;white-space:nowrap;cursor:pointer;font-size:10px}.dropdown-menu .option:hover{background-color:#25c2d4;color:#fff!important}.dropdown-menu-separator{height:1px;overflow:hidden;background-color:#f4f4f4;padding:0!important}"]
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
    isOpen: [{ type: Input }],
    icon: [{ type: Input }]
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
    /** @type {?} */
    SelectComponent.prototype.icon;
    /**
     * @type {?}
     * @protected
     */
    SelectComponent.prototype._onCloseService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFFbkQsNEJBSUM7OztJQUhDLHNCQUFhOztJQUNiLHVCQUFXOztJQUNYLDJCQUFtQjs7QUFRckIsTUFBTSxPQUFPLGVBQWU7Ozs7SUFTMUIsWUFBc0IsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBTjVDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFaEIsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xELFdBQU0sR0FBRyxLQUFLLENBQUM7UUFJdEIsZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDckMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxLQUFhO1FBQzFCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQU07UUFDWCwwRUFBMEU7UUFDMUUsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBYTtRQUMxQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDAwQkFBc0M7O2FBRXZDOzs7O1lBWk8sY0FBYzs7O3NCQWVuQixLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxNQUFNO3FCQUNOLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUxOLGtDQUEyQjs7SUFDM0IsbUNBQTBCOztJQUMxQix1Q0FBOEI7O0lBQzlCLG1DQUEyRDs7SUFDM0QsaUNBQXdCOztJQUN4QiwrQkFBc0I7Ozs7O0lBRVYsMENBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09uQ2xvc2VTZXJ2aWNlfSBmcm9tIFwiLi4vb24tY2xvc2Uuc2VydmljZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgdmFsdWU6IGFueTtcbiAgc2VwYXJhdG9yOiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VsZWN0LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IHtcblxuICBASW5wdXQoKSBvcHRpb25zOiBPcHRpb25bXTtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd1NlbGVjdGVkOiBPcHRpb247XG4gIEBPdXRwdXQoKSBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGlzT3BlbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9vbkNsb3NlU2VydmljZTogT25DbG9zZVNlcnZpY2UpIHtcbiAgICBfb25DbG9zZVNlcnZpY2Uub25DbG9zZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgb25DbGlja091dHNpZGUoZXZlbnQgOiBFdmVudCl7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgdG9nZ2xlKCRldmVudCkge1xuICAgIC8vIFRPRE86IGZvbGxvd2luZyBsaW5lcyB3ZXJlIHVuY29tbWVudGVkIGR1ZSB0byBuZWVkbmVzcyBpbiBzaWduYXR1cmUgYXBwXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0KCRldmVudCwgdmFsdWU6IE9wdGlvbikge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnNlbGVjdGVkLmVtaXQodmFsdWUpO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxufVxuIl19