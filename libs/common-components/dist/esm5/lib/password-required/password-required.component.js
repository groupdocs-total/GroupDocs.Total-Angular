import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ExceptionMessageService } from "../exception-message.service";
import { PasswordService } from "../password.service";
var PasswordRequiredComponent = /** @class */ (function () {
    function PasswordRequiredComponent(messageService, _passwordService) {
        var _this = this;
        this._passwordService = _passwordService;
        messageService.messageChange.subscribe(function (message) { return _this.message = message; });
    }
    PasswordRequiredComponent.prototype.ngOnInit = function () {
    };
    PasswordRequiredComponent.prototype.setPassword = function (value) {
        this._passwordService.setPassword(value);
    };
    PasswordRequiredComponent = tslib_1.__decorate([
        Component({
            selector: 'gd-password-required',
            template: "<gd-modal id=\"gd-password-required\" [title]=\"'Password required'\">\n  <section id=\"gd-password-section\" class=\"tab-slider-body\">\n    <div class=\"inner-addon left-addon btn gd-password-wrap\" id=\"gd-password-wrap\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Enter password\" #pass\n             (keyup.enter)=\"setPassword(pass.value)\">\n      <button class=\"btn btn-primary gd-password-submit\" (click)=\"setPassword(pass.value)\">Submit</button>\n      <span class=\"gd-password-error\">{{message}}</span>\n    </div>\n  </section>\n</gd-modal>\n",
            styles: [".gd-password-wrap{position:relative;margin-left:-18px;margin-top:118px}.gd-password-wrap>input{padding-left:12px;margin-left:35px;width:454px;height:32px;color:#585858}.gd-password-submit{position:absolute;top:0;color:#fff;background-color:#3e4d59;padding:7px 16px 6px;font-size:12px;cursor:pointer}.gd-password-error{position:absolute;top:38px;left:35px;color:red}@media (max-width:1025px){.gd-password-wrap>input{width:50%}}"]
        }),
        tslib_1.__metadata("design:paramtypes", [ExceptionMessageService, PasswordService])
    ], PasswordRequiredComponent);
    return PasswordRequiredComponent;
}());
export { PasswordRequiredComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtcmVxdWlyZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Bhc3N3b3JkLXJlcXVpcmVkL3Bhc3N3b3JkLXJlcXVpcmVkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFPcEQ7SUFHRSxtQ0FBWSxjQUF1QyxFQUFVLGdCQUFpQztRQUE5RixpQkFFQztRQUY0RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQzVGLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQXRCLENBQXNCLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsNENBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCwrQ0FBVyxHQUFYLFVBQVksS0FBYTtRQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFaVSx5QkFBeUI7UUFMckMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyx1bEJBQWlEOztTQUVsRCxDQUFDO2lEQUk0Qix1QkFBdUIsRUFBNEIsZUFBZTtPQUhuRix5QkFBeUIsQ0FhckM7SUFBRCxnQ0FBQztDQUFBLEFBYkQsSUFhQztTQWJZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFeGNlcHRpb25NZXNzYWdlU2VydmljZX0gZnJvbSBcIi4uL2V4Y2VwdGlvbi1tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7UGFzc3dvcmRTZXJ2aWNlfSBmcm9tIFwiLi4vcGFzc3dvcmQuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1wYXNzd29yZC1yZXF1aXJlZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXNzd29yZC1yZXF1aXJlZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Bhc3N3b3JkLXJlcXVpcmVkLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRSZXF1aXJlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1lc3NhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihtZXNzYWdlU2VydmljZTogRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UsIHByaXZhdGUgX3Bhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlKSB7XG4gICAgbWVzc2FnZVNlcnZpY2UubWVzc2FnZUNoYW5nZS5zdWJzY3JpYmUobWVzc2FnZSA9PiB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgc2V0UGFzc3dvcmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Bhc3N3b3JkU2VydmljZS5zZXRQYXNzd29yZCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==