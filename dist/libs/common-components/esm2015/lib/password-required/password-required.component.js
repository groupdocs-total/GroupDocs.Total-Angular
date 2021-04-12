/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output } from '@angular/core';
import { ExceptionMessageService } from "../exception-message.service";
import { PasswordService } from "../password.service";
import * as jquery from "jquery";
/** @type {?} */
const $ = jquery;
export class PasswordRequiredComponent {
    /**
     * @param {?} messageService
     * @param {?} _passwordService
     */
    constructor(messageService, _passwordService) {
        this._passwordService = _passwordService;
        this.cancelEvent = new EventEmitter();
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
    /**
     * @param {?} $event
     * @return {?}
     */
    onCloseOpen($event) {
        if ($event) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const element = $("#password");
                if (element) {
                    element.focus();
                }
            }), 100);
        }
        else {
            $("#password").val("");
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    cancel($event) {
        $("#password").val("");
        this.cancelEvent.emit(true);
    }
}
PasswordRequiredComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-password-required',
                template: "<gd-modal id=\"gd-password-required\" [title]=\"'Password protected document'\" (cancel)=\"cancel($event)\" (visible)=\"onCloseOpen($event)\">\n  <section id=\"gd-password-section\">\n    <div class=\"gd-password-wrap\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" [ngClass]=\"{'error': message}\" id=\"password\" #pass\n             (keyup.enter)=\"setPassword(pass.value)\">\n      <span class=\"gd-password-error\">{{message}}</span>\n      <gd-button [icon]=\"'key'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"setPassword(pass.value)\">\n          Open\n      </gd-button>\n    </div>\n  </section>\n</gd-modal>\n",
                styles: ["#gd-password-section{width:375px;height:164px}.gd-password-wrap{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:24px}.gd-password-wrap label{font-size:14px;color:#acacac;padding-bottom:12px}.gd-password-wrap input{height:30px;border:1px solid #25c2d4}.gd-password-wrap input.error{border-color:#e04e4e}.gd-password-wrap gd-button{align-self:flex-end}.gd-password-wrap ::ng-deep .button{height:37px;width:72px;padding:0;-webkit-box-pack:center;justify-content:center}.gd-password-wrap ::ng-deep .button ::ng-deep .text{font-size:10px!important}.gd-password-error{color:#e04e4e;padding:10px 0 12px;height:12px;line-height:12px;font-size:12px}@media (max-width:1037px){#gd-password-section{min-width:375px}}"]
            }] }
];
/** @nocollapse */
PasswordRequiredComponent.ctorParameters = () => [
    { type: ExceptionMessageService },
    { type: PasswordService }
];
PasswordRequiredComponent.propDecorators = {
    cancelEvent: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtcmVxdWlyZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Bhc3N3b3JkLXJlcXVpcmVkL3Bhc3N3b3JkLXJlcXVpcmVkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7TUFFM0IsQ0FBQyxHQUFHLE1BQU07QUFPaEIsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7SUFJcEMsWUFBWSxjQUF1QyxFQUFVLGdCQUFpQztRQUFqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBRnBGLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd6QyxjQUFjLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUFDLENBQUM7SUFDNUUsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsTUFBZTtRQUN6QixJQUFJLE1BQU0sRUFBRTtZQUNWLFVBQVU7OztZQUFDLEdBQUcsRUFBRTs7c0JBQ1IsT0FBTyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUM7Z0JBQzlCLElBQUksT0FBTyxFQUFFO29CQUNYLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDakI7WUFDSCxDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ0wsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQWU7UUFDcEIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFwQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDByQkFBaUQ7O2FBRWxEOzs7O1lBVk8sdUJBQXVCO1lBQ3ZCLGVBQWU7OzswQkFZcEIsTUFBTTs7OztJQURQLDRDQUFnQjs7SUFDaEIsZ0RBQTJDOzs7OztJQUVVLHFEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RXhjZXB0aW9uTWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuLi9leGNlcHRpb24tbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1Bhc3N3b3JkU2VydmljZX0gZnJvbSBcIi4uL3Bhc3N3b3JkLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5cbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXBhc3N3b3JkLXJlcXVpcmVkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Bhc3N3b3JkLXJlcXVpcmVkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFzc3dvcmQtcmVxdWlyZWQuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYXNzd29yZFJlcXVpcmVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBAT3V0cHV0KCkgY2FuY2VsRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IobWVzc2FnZVNlcnZpY2U6IEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlLCBwcml2YXRlIF9wYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSkge1xuICAgIG1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VDaGFuZ2Uuc3Vic2NyaWJlKG1lc3NhZ2UgPT4gdGhpcy5tZXNzYWdlID0gbWVzc2FnZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNldFBhc3N3b3JkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXNzd29yZFNlcnZpY2Uuc2V0UGFzc3dvcmQodmFsdWUpO1xuICB9XG5cbiAgb25DbG9zZU9wZW4oJGV2ZW50OiBib29sZWFuKSB7XG4gICAgaWYgKCRldmVudCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSAkKFwiI3Bhc3N3b3JkXCIpO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcIiNwYXNzd29yZFwiKS52YWwoXCJcIik7XG4gICAgfVxuICB9XG5cbiAgY2FuY2VsKCRldmVudDogYm9vbGVhbikge1xuICAgICQoXCIjcGFzc3dvcmRcIikudmFsKFwiXCIpO1xuICAgIHRoaXMuY2FuY2VsRXZlbnQuZW1pdCh0cnVlKTtcbiAgfVxufVxuIl19