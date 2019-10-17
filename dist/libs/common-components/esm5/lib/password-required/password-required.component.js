/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ExceptionMessageService } from "../exception-message.service";
import { PasswordService } from "../password.service";
var PasswordRequiredComponent = /** @class */ (function () {
    function PasswordRequiredComponent(messageService, _passwordService) {
        var _this = this;
        this._passwordService = _passwordService;
        messageService.messageChange.subscribe((/**
         * @param {?} message
         * @return {?}
         */
        function (message) { return _this.message = message; }));
    }
    /**
     * @return {?}
     */
    PasswordRequiredComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PasswordRequiredComponent.prototype.setPassword = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._passwordService.setPassword(value);
    };
    PasswordRequiredComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-password-required',
                    template: "<gd-modal id=\"gd-password-required\" [title]=\"'Password protected document'\">\n  <section id=\"gd-password-section\">\n    <div class=\"gd-password-wrap\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" [ngClass]=\"{'error': message}\" id=\"password\" #pass\n             (keyup.enter)=\"setPassword(pass.value)\">\n      <span class=\"gd-password-error\">{{message}}</span>\n      <gd-button [icon]=\"'key'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"setPassword(pass.value)\">\n          Open\n      </gd-button>\n    </div>\n  </section>\n</gd-modal>\n",
                    styles: ["#gd-password-section{width:468px;height:164px}.gd-password-wrap{display:flex;flex-direction:column;margin:24px}.gd-password-wrap label{font-size:14px;color:#acacac;padding-bottom:12px}.gd-password-wrap input{height:30px;border:1px solid #25c2d4}.gd-password-wrap input.error{border-color:#e04e4e}.gd-password-wrap gd-button{align-self:flex-end}.gd-password-wrap ::ng-deep .button{height:37px;width:72px;padding:0;justify-content:center}.gd-password-wrap ::ng-deep .button ::ng-deep .text{font-size:10px!important}.gd-password-error{color:#e04e4e;padding:10px 0 12px;height:12px;line-height:12px;font-size:12px}@media (max-width:1037px){#gd-password-section{min-width:375px}}"]
                }] }
    ];
    /** @nocollapse */
    PasswordRequiredComponent.ctorParameters = function () { return [
        { type: ExceptionMessageService },
        { type: PasswordService }
    ]; };
    return PasswordRequiredComponent;
}());
export { PasswordRequiredComponent };
if (false) {
    /** @type {?} */
    PasswordRequiredComponent.prototype.message;
    /**
     * @type {?}
     * @private
     */
    PasswordRequiredComponent.prototype._passwordService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtcmVxdWlyZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Bhc3N3b3JkLXJlcXVpcmVkL3Bhc3N3b3JkLXJlcXVpcmVkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFcEQ7SUFRRSxtQ0FBWSxjQUF1QyxFQUFVLGdCQUFpQztRQUE5RixpQkFFQztRQUY0RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQzVGLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQXRCLENBQXNCLEVBQUMsQ0FBQztJQUM1RSxDQUFDOzs7O0lBRUQsNENBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7SUFFRCwrQ0FBVzs7OztJQUFYLFVBQVksS0FBYTtRQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsNG5CQUFpRDs7aUJBRWxEOzs7O2dCQVBPLHVCQUF1QjtnQkFDdkIsZUFBZTs7SUFvQnZCLGdDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FiWSx5QkFBeUI7OztJQUNwQyw0Q0FBZ0I7Ozs7O0lBRXFDLHFEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFeGNlcHRpb25NZXNzYWdlU2VydmljZX0gZnJvbSBcIi4uL2V4Y2VwdGlvbi1tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7UGFzc3dvcmRTZXJ2aWNlfSBmcm9tIFwiLi4vcGFzc3dvcmQuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1wYXNzd29yZC1yZXF1aXJlZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXNzd29yZC1yZXF1aXJlZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Bhc3N3b3JkLXJlcXVpcmVkLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRSZXF1aXJlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1lc3NhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihtZXNzYWdlU2VydmljZTogRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UsIHByaXZhdGUgX3Bhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlKSB7XG4gICAgbWVzc2FnZVNlcnZpY2UubWVzc2FnZUNoYW5nZS5zdWJzY3JpYmUobWVzc2FnZSA9PiB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgc2V0UGFzc3dvcmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Bhc3N3b3JkU2VydmljZS5zZXRQYXNzd29yZCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==