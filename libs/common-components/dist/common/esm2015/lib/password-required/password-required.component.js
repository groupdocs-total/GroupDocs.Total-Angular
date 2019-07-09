import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ExceptionMessageService } from "../exception-message.service";
import { PasswordService } from "../password.service";
let PasswordRequiredComponent = class PasswordRequiredComponent {
    constructor(messageService, _passwordService) {
        this._passwordService = _passwordService;
        messageService.messageChange.subscribe(message => this.message = message);
    }
    ngOnInit() {
    }
    setPassword(value) {
        this._passwordService.setPassword(value);
    }
};
PasswordRequiredComponent = tslib_1.__decorate([
    Component({
        selector: 'gd-password-required',
        template: "<gd-modal id=\"gd-password-required\" [title]=\"'Password required'\">\n  <section id=\"gd-password-section\" class=\"tab-slider-body\">\n    <div class=\"inner-addon left-addon btn gd-password-wrap\" id=\"gd-password-wrap\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Enter password\" #pass\n             (keyup.enter)=\"setPassword(pass.value)\">\n      <button class=\"btn btn-primary gd-password-submit\" (click)=\"setPassword(pass.value)\">Submit</button>\n      <span class=\"gd-password-error\">{{message}}</span>\n    </div>\n  </section>\n</gd-modal>\n",
        styles: [".gd-password-wrap{position:relative}.gd-password-wrap>input{padding-left:12px;width:454px;height:32px;color:#585858;float:left}.gd-password-submit{color:#fff;background-color:#3e4d59;padding:7px 16px 6px;font-size:12px;cursor:pointer;float:left}.gd-password-error{color:red;padding-top:10px;float:left}@media (max-width:1025px){.gd-password-wrap>input{width:50%}}"]
    }),
    tslib_1.__metadata("design:paramtypes", [ExceptionMessageService, PasswordService])
], PasswordRequiredComponent);
export { PasswordRequiredComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtcmVxdWlyZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Bhc3N3b3JkLXJlcXVpcmVkL3Bhc3N3b3JkLXJlcXVpcmVkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFPcEQsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUFHcEMsWUFBWSxjQUF1QyxFQUFVLGdCQUFpQztRQUFqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQzVGLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBYTtRQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRixDQUFBO0FBYlkseUJBQXlCO0lBTHJDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxzQkFBc0I7UUFDaEMsdWxCQUFpRDs7S0FFbEQsQ0FBQzs2Q0FJNEIsdUJBQXVCLEVBQTRCLGVBQWU7R0FIbkYseUJBQXlCLENBYXJDO1NBYlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0V4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vZXhjZXB0aW9uLW1lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtQYXNzd29yZFNlcnZpY2V9IGZyb20gXCIuLi9wYXNzd29yZC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXBhc3N3b3JkLXJlcXVpcmVkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Bhc3N3b3JkLXJlcXVpcmVkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFzc3dvcmQtcmVxdWlyZWQuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYXNzd29yZFJlcXVpcmVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2VTZXJ2aWNlOiBFeGNlcHRpb25NZXNzYWdlU2VydmljZSwgcHJpdmF0ZSBfcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UpIHtcbiAgICBtZXNzYWdlU2VydmljZS5tZXNzYWdlQ2hhbmdlLnN1YnNjcmliZShtZXNzYWdlID0+IHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBzZXRQYXNzd29yZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGFzc3dvcmRTZXJ2aWNlLnNldFBhc3N3b3JkKHZhbHVlKTtcbiAgfVxufVxuIl19