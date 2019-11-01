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
                    template: "<gd-modal id=\"gd-error-message\" [title]=\"'Error'\">\n  <section id=\"gd-error-section\">\n    <fa-icon [icon]=\"['fas', 'exclamation-triangle']\"></fa-icon>\n    <div class=\"gd-modal-error\">\n      <div class=\"gd-modal-error-title\">Something went wrong</div>\n      <div class=\"gd-modal-error-message\">{{message ? message : 'Server is not available'}}</div>\n    </div>\n  </section>\n</gd-modal>\n",
                    styles: [".gd-modal-error{display:inline-flex;flex-direction:column;flex:1}.gd-modal-error .gd-modal-error-message{font-size:12px;margin:0 24px 24px 0;word-break:break-word}.gd-modal-error .gd-modal-error-title{font-size:16px;font-weight:700;margin:14px 0 10px}#gd-error-section{max-width:468px;max-height:204px;display:flex}#gd-error-section fa-icon{flex:1;color:#e04e4e;font-size:40px;margin:13px 23px 90px;text-align:center;max-width:46px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Vycm9yLW1vZGFsL2Vycm9yLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUVyRTtJQVNFLDZCQUFZLGNBQXVDO1FBQW5ELGlCQUVDO1FBREMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBdEIsQ0FBc0IsRUFBQyxDQUFDO0lBQzVFLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsbWFBQTJDOztpQkFFNUM7Ozs7Z0JBTk8sdUJBQXVCOztJQWtCL0IsMEJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQVhZLG1CQUFtQjs7O0lBRTlCLHNDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFeGNlcHRpb25NZXNzYWdlU2VydmljZX0gZnJvbSBcIi4uL2V4Y2VwdGlvbi1tZXNzYWdlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtZXJyb3ItbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZXJyb3ItbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lcnJvci1tb2RhbC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG1lc3NhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihtZXNzYWdlU2VydmljZTogRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UpIHtcbiAgICBtZXNzYWdlU2VydmljZS5tZXNzYWdlQ2hhbmdlLnN1YnNjcmliZShtZXNzYWdlID0+IHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19