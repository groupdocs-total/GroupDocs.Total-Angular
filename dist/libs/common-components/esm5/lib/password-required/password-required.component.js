/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output } from '@angular/core';
import { ExceptionMessageService } from "../exception-message.service";
import { PasswordService } from "../password.service";
import * as jquery from "jquery";
/** @type {?} */
var $ = jquery;
var PasswordRequiredComponent = /** @class */ (function () {
    function PasswordRequiredComponent(messageService, _passwordService) {
        var _this = this;
        this._passwordService = _passwordService;
        this.cancelEvent = new EventEmitter();
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
    /**
     * @param {?} $event
     * @return {?}
     */
    PasswordRequiredComponent.prototype.onCloseOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var element = $("#password");
                if (element) {
                    element.focus();
                }
            }), 100);
        }
        else {
            $("#password").val("");
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    PasswordRequiredComponent.prototype.cancel = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $("#password").val("");
        this.cancelEvent.emit(true);
    };
    PasswordRequiredComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-password-required',
                    template: "<gd-modal id=\"gd-password-required\" [title]=\"'Password protected document'\" (cancel)=\"cancel($event)\" (visible)=\"onCloseOpen($event)\">\n  <section id=\"gd-password-section\">\n    <div class=\"gd-password-wrap\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" [ngClass]=\"{'error': message}\" id=\"password\" #pass\n             (keyup.enter)=\"setPassword(pass.value)\">\n      <span class=\"gd-password-error\">{{message}}</span>\n      <gd-button [icon]=\"'key'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"setPassword(pass.value)\">\n          Open\n      </gd-button>\n    </div>\n  </section>\n</gd-modal>\n",
                    styles: ["#gd-password-section{width:375px;height:164px}.gd-password-wrap{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:24px}.gd-password-wrap label{font-size:14px;color:#acacac;padding-bottom:12px}.gd-password-wrap input{height:30px;border:1px solid #25c2d4}.gd-password-wrap input.error{border-color:#e04e4e}.gd-password-wrap gd-button{align-self:flex-end}.gd-password-wrap ::ng-deep .button{height:37px;width:72px;padding:0;-webkit-box-pack:center;justify-content:center}.gd-password-wrap ::ng-deep .button ::ng-deep .text{font-size:10px!important}.gd-password-error{color:#e04e4e;padding:10px 0 12px;height:12px;line-height:12px;font-size:12px}@media (max-width:1037px){#gd-password-section{min-width:375px}}"]
                }] }
    ];
    /** @nocollapse */
    PasswordRequiredComponent.ctorParameters = function () { return [
        { type: ExceptionMessageService },
        { type: PasswordService }
    ]; };
    PasswordRequiredComponent.propDecorators = {
        cancelEvent: [{ type: Output }]
    };
    return PasswordRequiredComponent;
}());
export { PasswordRequiredComponent };
if (false) {
    /** @type {?} */
    PasswordRequiredComponent.prototype.message;
    /** @type {?} */
    PasswordRequiredComponent.prototype.cancelEvent;
    /**
     * @type {?}
     * @private
     */
    PasswordRequiredComponent.prototype._passwordService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtcmVxdWlyZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Bhc3N3b3JkLXJlcXVpcmVkL3Bhc3N3b3JkLXJlcXVpcmVkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7SUFFM0IsQ0FBQyxHQUFHLE1BQU07QUFFaEI7SUFTRSxtQ0FBWSxjQUF1QyxFQUFVLGdCQUFpQztRQUE5RixpQkFFQztRQUY0RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBRnBGLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd6QyxjQUFjLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUF0QixDQUFzQixFQUFDLENBQUM7SUFDNUUsQ0FBQzs7OztJQUVELDRDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7O0lBRUQsK0NBQVc7Ozs7SUFBWCxVQUFZLEtBQWE7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELCtDQUFXOzs7O0lBQVgsVUFBWSxNQUFlO1FBQ3pCLElBQUksTUFBTSxFQUFFO1lBQ1YsVUFBVTs7O1lBQUM7O29CQUNILE9BQU8sR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDO2dCQUM5QixJQUFJLE9BQU8sRUFBRTtvQkFDWCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2pCO1lBQ0gsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNMLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7OztJQUVELDBDQUFNOzs7O0lBQU4sVUFBTyxNQUFlO1FBQ3BCLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBcENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQywwckJBQWlEOztpQkFFbEQ7Ozs7Z0JBVk8sdUJBQXVCO2dCQUN2QixlQUFlOzs7OEJBWXBCLE1BQU07O0lBOEJULGdDQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FoQ1kseUJBQXlCOzs7SUFDcEMsNENBQWdCOztJQUNoQixnREFBMkM7Ozs7O0lBRVUscURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFeGNlcHRpb25NZXNzYWdlU2VydmljZX0gZnJvbSBcIi4uL2V4Y2VwdGlvbi1tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7UGFzc3dvcmRTZXJ2aWNlfSBmcm9tIFwiLi4vcGFzc3dvcmQuc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcblxuY29uc3QgJCA9IGpxdWVyeTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtcGFzc3dvcmQtcmVxdWlyZWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFzc3dvcmQtcmVxdWlyZWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXNzd29yZC1yZXF1aXJlZC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkUmVxdWlyZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBjYW5jZWxFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihtZXNzYWdlU2VydmljZTogRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UsIHByaXZhdGUgX3Bhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlKSB7XG4gICAgbWVzc2FnZVNlcnZpY2UubWVzc2FnZUNoYW5nZS5zdWJzY3JpYmUobWVzc2FnZSA9PiB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgc2V0UGFzc3dvcmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Bhc3N3b3JkU2VydmljZS5zZXRQYXNzd29yZCh2YWx1ZSk7XG4gIH1cblxuICBvbkNsb3NlT3BlbigkZXZlbnQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoJGV2ZW50KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9ICQoXCIjcGFzc3dvcmRcIik7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKFwiI3Bhc3N3b3JkXCIpLnZhbChcIlwiKTtcbiAgICB9XG4gIH1cblxuICBjYW5jZWwoJGV2ZW50OiBib29sZWFuKSB7XG4gICAgJChcIiNwYXNzd29yZFwiKS52YWwoXCJcIik7XG4gICAgdGhpcy5jYW5jZWxFdmVudC5lbWl0KHRydWUpO1xuICB9XG59XG4iXX0=