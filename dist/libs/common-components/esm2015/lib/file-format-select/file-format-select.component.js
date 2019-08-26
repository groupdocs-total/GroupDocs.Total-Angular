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
                template: "<div class=\"select\" [ngClass]=\"{'single': !isMulti}\"\n     (click)=\"toggle($event)\"\n     gdOutside\n     [clickOutsideEnabled]=\"isOpen\"\n     (clickOutside)=\"onClickOutside($event)\">\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\">\n    <fa-icon [ngClass]=\"{'multi-select': isMulti}\" [icon]=\"['fas','plus']\"></fa-icon>\n    <label *ngIf=\"isMulti\">{{label}}</label>\n  </span>\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\n    <div *ngFor=\"let option of options\">\n      <div (click)=\"select($event, option)\" class=\"option\">\n        <fa-icon [icon]=\"['far', option.icon]\"></fa-icon>\n        <div class=\"gd-type\">{{option.name}}</div>\n        <div *ngIf=\"option.warning\" class=\"gd-type-warning\" title=\"1 selected file(s) can\u2019t be converted to {{option.name}} format\">\n          <fa-icon [icon]=\"['fas','exclamation-triangle']\"></fa-icon>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".single{color:#959da5;min-width:50px}.nav-caret{vertical-align:-webkit-baseline-middle;cursor:pointer}.nav-caret.inactive{cursor:not-allowed;color:#ccc}.dropdown-menu{position:absolute;z-index:1000;float:left;min-width:160px;padding:5px 0;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;max-height:300px;overflow-y:auto}.gd-type-warning{display:inline-block;margin-left:65px}.dropdown-menu .option{color:#959da5;height:25px;display:flex;cursor:pointer}.dropdown-menu .option fa-icon{margin:6px 10px;color:#959da5;font-size:12px;height:12px}.dropdown-menu .option:hover .gd-type-warning fa-icon{color:#f2fa23}.dropdown-menu .option:hover{background-color:#25c2d4;color:#fff}.dropdown-menu-separator{height:1px;margin:8px 0;overflow:hidden;background-color:#e5e5e5;padding:0!important}.multi-select{margin:8px 12px 7px 8px}.select label{font-size:13px;line-height:36px;position:absolute}.gd-type{font-size:13px;line-height:26px;width:27px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1mb3JtYXQtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9maWxlLWZvcm1hdC1zZWxlY3QvZmlsZS1mb3JtYXQtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFFbkQsNEJBR0M7OztJQUZDLHNCQUFhOztJQUNiLHVCQUFXOztBQVFiLE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFRcEMsWUFBb0IsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBTjFDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVmLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzRCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR2IsZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDckMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxLQUFhO1FBQzFCLElBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDbkMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFNO1FBQ1gsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBYTtRQUMxQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsKzhCQUFrRDs7YUFFbkQ7Ozs7WUFYTyxjQUFjOzs7c0JBYW5CLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsTUFBTTs7OztJQUpQLDRDQUEyQjs7SUFDM0IsNkNBQTBCOztJQUMxQiw0Q0FBeUI7O0lBQ3pCLDBDQUF1Qjs7SUFDdkIsNkNBQTJEOztJQUMzRCwyQ0FBZTs7Ozs7SUFFSCxvREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T25DbG9zZVNlcnZpY2V9IGZyb20gXCIuLi9vbi1jbG9zZS5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1maWxlLWZvcm1hdC1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS1mb3JtYXQtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS1mb3JtYXQtc2VsZWN0LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmlsZUZvcm1hdFNlbGVjdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IE9wdGlvbltdO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBpc011bHRpID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGlzT3BlbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX29uQ2xvc2VTZXJ2aWNlOiBPbkNsb3NlU2VydmljZSkge1xuICAgIF9vbkNsb3NlU2VydmljZS5vbkNsb3NlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gIH1cblxuICBvbkNsaWNrT3V0c2lkZShldmVudCA6IEV2ZW50KXtcbiAgICBpZihldmVudCAmJiBldmVudFsndmFsdWUnXSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZSgkZXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICB9XG4gIH1cblxuICBzZWxlY3QoJGV2ZW50LCB2YWx1ZTogT3B0aW9uKSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCh2YWx1ZSk7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG59XG4iXX0=