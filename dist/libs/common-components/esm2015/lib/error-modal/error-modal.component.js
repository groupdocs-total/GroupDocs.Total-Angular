/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ExceptionMessageService } from "../exception-message.service";
export class ErrorModalComponent {
    /**
     * @param {?} messageService
     */
    constructor(messageService) {
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
}
ErrorModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-error-modal',
                template: "<gd-modal id=\"gd-error-message\" [title]=\"'Error'\">\n  <section id=\"gd-error-section\">\n    <fa-icon [icon]=\"['fas', 'exclamation-triangle']\"></fa-icon>\n    <div class=\"gd-modal-error\">{{message ? message : 'Server is not available'}}</div>\n  </section>\n</gd-modal>\n",
                styles: [".gd-modal-error{background-color:#fff;font-size:12px;padding:14px 24px 24px 0}#gd-error-section{max-width:469px;max-height:204px;display:flex}#gd-error-section fa-icon{color:#e04e4e;font-size:40px;margin:13px 23px 90px}"]
            }] }
];
/** @nocollapse */
ErrorModalComponent.ctorParameters = () => [
    { type: ExceptionMessageService }
];
if (false) {
    /** @type {?} */
    ErrorModalComponent.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Vycm9yLW1vZGFsL2Vycm9yLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQU9yRSxNQUFNLE9BQU8sbUJBQW1COzs7O0lBSTlCLFlBQVksY0FBdUM7UUFDakQsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBQyxDQUFDO0lBQzVFLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLG1TQUEyQzs7YUFFNUM7Ozs7WUFOTyx1QkFBdUI7Ozs7SUFTN0Isc0NBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0V4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vZXhjZXB0aW9uLW1lc3NhZ2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1lcnJvci1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9lcnJvci1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Vycm9yLW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgRXJyb3JNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2VTZXJ2aWNlOiBFeGNlcHRpb25NZXNzYWdlU2VydmljZSkge1xuICAgIG1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VDaGFuZ2Uuc3Vic2NyaWJlKG1lc3NhZ2UgPT4gdGhpcy5tZXNzYWdlID0gbWVzc2FnZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=