/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ExceptionMessageService } from "../exception-message.service";
import { PasswordService } from "../password.service";
export class PasswordRequiredComponent {
    /**
     * @param {?} messageService
     * @param {?} _passwordService
     */
    constructor(messageService, _passwordService) {
        this._passwordService = _passwordService;
        messageService.messageChange.subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => this.message = message));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setPassword(value) {
        this._passwordService.setPassword(value);
    }
}
PasswordRequiredComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-password-required',
                template: "<gd-modal id=\"gd-password-required\" [title]=\"'Password required'\">\n  <section id=\"gd-password-section\" class=\"tab-slider-body\">\n    <div class=\"inner-addon left-addon btn gd-password-wrap\" id=\"gd-password-wrap\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Enter password\" #pass\n             (keyup.enter)=\"setPassword(pass.value)\">\n      <button class=\"btn btn-primary gd-password-submit\" (click)=\"setPassword(pass.value)\">Submit</button>\n      <span class=\"gd-password-error\">{{message}}</span>\n    </div>\n  </section>\n</gd-modal>\n",
                styles: [".gd-password-wrap{position:relative;margin-left:-18px;margin-top:118px}.gd-password-wrap>input{padding-left:12px;margin-left:35px;width:454px;height:32px;color:#585858}.gd-password-submit{position:absolute;top:0;color:#fff;background-color:#3e4d59;padding:7px 16px 6px;font-size:12px;cursor:pointer}.gd-password-error{position:absolute;top:38px;left:35px;color:red}@media (max-width:1025px){.gd-password-wrap>input{width:50%}}"]
            }] }
];
/** @nocollapse */
PasswordRequiredComponent.ctorParameters = () => [
    { type: ExceptionMessageService },
    { type: PasswordService }
];
if (false) {
    /** @type {?} */
    PasswordRequiredComponent.prototype.message;
    /**
     * @type {?}
     * @private
     */
    PasswordRequiredComponent.prototype._passwordService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtcmVxdWlyZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Bhc3N3b3JkLXJlcXVpcmVkL3Bhc3N3b3JkLXJlcXVpcmVkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFPcEQsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7SUFHcEMsWUFBWSxjQUF1QyxFQUFVLGdCQUFpQztRQUFqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQzVGLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQUMsQ0FBQztJQUM1RSxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQWE7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLHVsQkFBaUQ7O2FBRWxEOzs7O1lBUE8sdUJBQXVCO1lBQ3ZCLGVBQWU7Ozs7SUFRckIsNENBQWdCOzs7OztJQUVxQyxxREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RXhjZXB0aW9uTWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuLi9leGNlcHRpb24tbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1Bhc3N3b3JkU2VydmljZX0gZnJvbSBcIi4uL3Bhc3N3b3JkLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtcGFzc3dvcmQtcmVxdWlyZWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFzc3dvcmQtcmVxdWlyZWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXNzd29yZC1yZXF1aXJlZC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkUmVxdWlyZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IobWVzc2FnZVNlcnZpY2U6IEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlLCBwcml2YXRlIF9wYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSkge1xuICAgIG1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VDaGFuZ2Uuc3Vic2NyaWJlKG1lc3NhZ2UgPT4gdGhpcy5tZXNzYWdlID0gbWVzc2FnZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNldFBhc3N3b3JkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXNzd29yZFNlcnZpY2Uuc2V0UGFzc3dvcmQodmFsdWUpO1xuICB9XG59XG4iXX0=