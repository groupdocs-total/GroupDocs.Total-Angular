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
export class FileFormatSelectComponent {
    /**
     * @param {?} _onCloseService
     */
    constructor(_onCloseService) {
        this._onCloseService = _onCloseService;
        this.disabled = false;
        this.isMulti = false;
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
        if (event && event['value'] === true) {
            this.close();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggle($event) {
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
FileFormatSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-file-format-select',
                template: "<div class=\"select\"\r\n     (click)=\"toggle($event)\"\r\n     gdOutside\r\n     [clickOutsideEnabled]=\"isOpen\"\r\n     (clickOutside)=\"onClickOutside($event)\">\r\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\">\r\n    <fa-icon [ngClass]=\"{'multi-select': isMulti}\" [icon]=\"['fas','plus']\"></fa-icon>\r\n    <span class=\"label\" *ngIf=\"isMulti\">{{label}}</span>\r\n  </span>\r\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\r\n    <div *ngFor=\"let option of options\">\r\n      <div (click)=\"select($event, option)\" class=\"option\">\r\n        <fa-icon [icon]=\"['far', option.icon]\"></fa-icon>\r\n        <div class=\"gd-type\">{{option.name}}</div>\r\n        <div *ngIf=\"option.warning\" class=\"gd-type-warning\" title=\"1 selected file(s) can\u2019t be converted to {{option.name}} format\">\r\n          <fa-icon [icon]=\"['fas','exclamation-triangle']\"></fa-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".nav-caret{cursor:pointer}.nav-caret fa-icon{margin:0;font-size:15px;cursor:pointer;color:#2b2a2a;opacity:.43}.nav-caret fa-icon.multi-select{margin:8px;color:#fff;opacity:1!important}.nav-caret.inactive{cursor:not-allowed;color:#ccc}.dropdown-menu{position:absolute;z-index:1000;float:left;min-width:160px;padding:5px 0;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;max-height:300px;overflow-y:auto}.gd-type-warning{display:inline-block;margin-left:65px}.dropdown-menu .option{color:#959da5;height:25px;display:flex;cursor:pointer}.dropdown-menu .option fa-icon{margin:6px 10px;color:#959da5;font-size:12px;height:12px}.dropdown-menu .option:hover .gd-type-warning fa-icon{color:#f2fa23}.dropdown-menu .option:hover{background-color:#25c2d4;color:#fff}.dropdown-menu-separator{height:1px;margin:8px 0;overflow:hidden;background-color:#e5e5e5;padding:0!important}.select .label{font-size:13px;line-height:36px}.gd-type{font-size:13px;line-height:26px;width:27px}"]
            }] }
];
/** @nocollapse */
FileFormatSelectComponent.ctorParameters = () => [
    { type: OnCloseService }
];
FileFormatSelectComponent.propDecorators = {
    options: [{ type: Input }],
    disabled: [{ type: Input }],
    isMulti: [{ type: Input }],
    label: [{ type: Input }],
    selected: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1mb3JtYXQtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9maWxlLWZvcm1hdC1zZWxlY3QvZmlsZS1mb3JtYXQtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFFbkQsNEJBR0M7OztJQUZDLHNCQUFhOztJQUNiLHVCQUFXOztBQVFiLE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFRcEMsWUFBb0IsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBTjFDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVmLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzRCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR2IsZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDckMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxLQUFhO1FBQzFCLElBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDbkMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFNO1FBQ1gsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBYTtRQUMxQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsbytCQUFrRDs7YUFFbkQ7Ozs7WUFYTyxjQUFjOzs7c0JBYW5CLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsTUFBTTs7OztJQUpQLDRDQUEyQjs7SUFDM0IsNkNBQTBCOztJQUMxQiw0Q0FBeUI7O0lBQ3pCLDBDQUF1Qjs7SUFDdkIsNkNBQTJEOztJQUMzRCwyQ0FBZTs7Ozs7SUFFSCxvREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPbkNsb3NlU2VydmljZX0gZnJvbSBcIi4uL29uLWNsb3NlLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdmFsdWU6IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1maWxlLWZvcm1hdC1zZWxlY3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLWZvcm1hdC1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtZm9ybWF0LXNlbGVjdC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlRm9ybWF0U2VsZWN0Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBvcHRpb25zOiBPcHRpb25bXTtcclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlzTXVsdGkgPSBmYWxzZTtcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX29uQ2xvc2VTZXJ2aWNlOiBPbkNsb3NlU2VydmljZSkge1xyXG4gICAgX29uQ2xvc2VTZXJ2aWNlLm9uQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tPdXRzaWRlKGV2ZW50IDogRXZlbnQpe1xyXG4gICAgaWYoZXZlbnQgJiYgZXZlbnRbJ3ZhbHVlJ10gPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKCRldmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3QoJGV2ZW50LCB2YWx1ZTogT3B0aW9uKSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCh2YWx1ZSk7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==