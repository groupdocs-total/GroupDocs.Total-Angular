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
                    template: "<gd-modal id=\"gd-password-required\" title=\"{{'Password protected document' | translate}}\" (cancel)=\"cancel($event)\" (visible)=\"onCloseOpen($event)\">\r\n  <section id=\"gd-password-section\">\r\n    <div class=\"gd-password-wrap\">\r\n      <label for=\"password\">{{'Password' | translate}}</label>\r\n      <input type=\"password\" class=\"form-control\" [ngClass]=\"{'error': message}\" id=\"password\" #pass\r\n             (keyup.enter)=\"setPassword(pass.value)\">\r\n      <span class=\"gd-password-error\">{{message | translate}}</span>\r\n      <gd-button [icon]=\"'key'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"setPassword(pass.value)\">\r\n        {{'Open' | translate}}\r\n      </gd-button>\r\n    </div>\r\n  </section>\r\n</gd-modal>\r\n",
                    styles: ["#gd-password-section{width:375px;height:164px}.gd-password-wrap{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:24px}.gd-password-wrap label{font-size:14px;color:#acacac;padding-bottom:12px}.gd-password-wrap input{height:30px;border:1px solid #25c2d4}.gd-password-wrap input.error{border-color:#e04e4e}.gd-password-wrap gd-button{align-self:flex-end}.gd-password-wrap ::ng-deep .button{height:37px;padding:0 10px;-webkit-box-pack:center;justify-content:center}.gd-password-wrap ::ng-deep .button ::ng-deep .text{font-size:10px!important}.gd-password-error{color:#e04e4e;padding:10px 0 12px;height:12px;line-height:12px;font-size:12px}@media (max-width:1037px){#gd-password-section{min-width:375px}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtcmVxdWlyZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Bhc3N3b3JkLXJlcXVpcmVkL3Bhc3N3b3JkLXJlcXVpcmVkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7SUFFM0IsQ0FBQyxHQUFHLE1BQU07QUFFaEI7SUFTRSxtQ0FBWSxjQUF1QyxFQUFVLGdCQUFpQztRQUE5RixpQkFFQztRQUY0RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBRnBGLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd6QyxjQUFjLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUF0QixDQUFzQixFQUFDLENBQUM7SUFDNUUsQ0FBQzs7OztJQUVELDRDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7O0lBRUQsK0NBQVc7Ozs7SUFBWCxVQUFZLEtBQWE7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELCtDQUFXOzs7O0lBQVgsVUFBWSxNQUFlO1FBQ3pCLElBQUksTUFBTSxFQUFFO1lBQ1YsVUFBVTs7O1lBQUM7O29CQUNILE9BQU8sR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDO2dCQUM5QixJQUFJLE9BQU8sRUFBRTtvQkFDWCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2pCO1lBQ0gsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNMLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7OztJQUVELDBDQUFNOzs7O0lBQU4sVUFBTyxNQUFlO1FBQ3BCLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBcENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxneEJBQWlEOztpQkFFbEQ7Ozs7Z0JBVk8sdUJBQXVCO2dCQUN2QixlQUFlOzs7OEJBWXBCLE1BQU07O0lBOEJULGdDQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FoQ1kseUJBQXlCOzs7SUFDcEMsNENBQWdCOztJQUNoQixnREFBMkM7Ozs7O0lBRVUscURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0V4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vZXhjZXB0aW9uLW1lc3NhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge1Bhc3N3b3JkU2VydmljZX0gZnJvbSBcIi4uL3Bhc3N3b3JkLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmNvbnN0ICQgPSBqcXVlcnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXBhc3N3b3JkLXJlcXVpcmVkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGFzc3dvcmQtcmVxdWlyZWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Bhc3N3b3JkLXJlcXVpcmVkLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkUmVxdWlyZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBAT3V0cHV0KCkgY2FuY2VsRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2VTZXJ2aWNlOiBFeGNlcHRpb25NZXNzYWdlU2VydmljZSwgcHJpdmF0ZSBfcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UpIHtcclxuICAgIG1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VDaGFuZ2Uuc3Vic2NyaWJlKG1lc3NhZ2UgPT4gdGhpcy5tZXNzYWdlID0gbWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIHNldFBhc3N3b3JkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3Bhc3N3b3JkU2VydmljZS5zZXRQYXNzd29yZCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvbkNsb3NlT3BlbigkZXZlbnQ6IGJvb2xlYW4pIHtcclxuICAgIGlmICgkZXZlbnQpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9ICQoXCIjcGFzc3dvcmRcIik7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiI3Bhc3N3b3JkXCIpLnZhbChcIlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbmNlbCgkZXZlbnQ6IGJvb2xlYW4pIHtcclxuICAgICQoXCIjcGFzc3dvcmRcIikudmFsKFwiXCIpO1xyXG4gICAgdGhpcy5jYW5jZWxFdmVudC5lbWl0KHRydWUpO1xyXG4gIH1cclxufVxyXG4iXX0=