/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ExceptionMessageService } from "../exception-message.service";
var ErrorModalComponent = /** @class */ (function () {
    function ErrorModalComponent(messageService) {
        var _this = this;
        messageService.messageChange.subscribe((/**
         * @param {?} message
         * @return {?}
         */
        function (message) { return _this.message = message; }));
    }
    /**
     * @return {?}
     */
    ErrorModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ErrorModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-error-modal',
                    template: "<gd-modal id=\"gd-error-message\" [title]=\"'Error'\">\r\n  <section id=\"gd-error-section\">\r\n    <fa-icon [icon]=\"['fas', 'exclamation-triangle']\"></fa-icon>\r\n    <div class=\"gd-modal-error\">{{message ? message : 'Server is not available'}}</div>\r\n  </section>\r\n</gd-modal>\r\n",
                    styles: [".gd-modal-error{background-color:#fff;font-size:12px;padding:14px 24px 24px 0}#gd-error-section{max-width:469px;max-height:204px;display:flex}#gd-error-section fa-icon{color:#e04e4e;font-size:40px;margin:13px 23px 90px}"]
                }] }
    ];
    /** @nocollapse */
    ErrorModalComponent.ctorParameters = function () { return [
        { type: ExceptionMessageService }
    ]; };
    return ErrorModalComponent;
}());
export { ErrorModalComponent };
if (false) {
    /** @type {?} */
    ErrorModalComponent.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Vycm9yLW1vZGFsL2Vycm9yLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUVyRTtJQVNFLDZCQUFZLGNBQXVDO1FBQW5ELGlCQUVDO1FBREMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBdEIsQ0FBc0IsRUFBQyxDQUFDO0lBQzVFLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsK1NBQTJDOztpQkFFNUM7Ozs7Z0JBTk8sdUJBQXVCOztJQWtCL0IsMEJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQVhZLG1CQUFtQjs7O0lBRTlCLHNDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0V4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vZXhjZXB0aW9uLW1lc3NhZ2Uuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1lcnJvci1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Vycm9yLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9lcnJvci1tb2RhbC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFcnJvck1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlU2VydmljZTogRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UpIHtcclxuICAgIG1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VDaGFuZ2Uuc3Vic2NyaWJlKG1lc3NhZ2UgPT4gdGhpcy5tZXNzYWdlID0gbWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==