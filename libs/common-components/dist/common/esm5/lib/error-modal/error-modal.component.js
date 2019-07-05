import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ExceptionMessageService } from "../exception-message.service";
var ErrorModalComponent = /** @class */ (function () {
    function ErrorModalComponent(messageService) {
        var _this = this;
        messageService.messageChange.subscribe(function (message) { return _this.message = message; });
    }
    ErrorModalComponent.prototype.ngOnInit = function () {
    };
    ErrorModalComponent = tslib_1.__decorate([
        Component({
            selector: 'gd-error-modal',
            template: "<gd-modal id=\"gd-error-message\" [title]=\"'Error message'\">\n  <div class=\"gd-modal-error\">{{message ? message : 'Server is not available'}}</div>\n</gd-modal>\n",
            styles: [".gd-modal-error{position:absolute;background-color:#fff;font-size:13px;padding:20px}"]
        }),
        tslib_1.__metadata("design:paramtypes", [ExceptionMessageService])
    ], ErrorModalComponent);
    return ErrorModalComponent;
}());
export { ErrorModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Vycm9yLW1vZGFsL2Vycm9yLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQU9yRTtJQUlFLDZCQUFZLGNBQXVDO1FBQW5ELGlCQUVDO1FBREMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxzQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQVRVLG1CQUFtQjtRQUwvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLGtMQUEyQzs7U0FFNUMsQ0FBQztpREFLNEIsdUJBQXVCO09BSnhDLG1CQUFtQixDQVcvQjtJQUFELDBCQUFDO0NBQUEsQUFYRCxJQVdDO1NBWFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0V4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vZXhjZXB0aW9uLW1lc3NhZ2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1lcnJvci1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9lcnJvci1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Vycm9yLW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgRXJyb3JNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2VTZXJ2aWNlOiBFeGNlcHRpb25NZXNzYWdlU2VydmljZSkge1xuICAgIG1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VDaGFuZ2Uuc3Vic2NyaWJlKG1lc3NhZ2UgPT4gdGhpcy5tZXNzYWdlID0gbWVzc2FnZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=