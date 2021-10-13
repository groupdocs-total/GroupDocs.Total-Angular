/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModalComponent } from "@groupdocs.examples.angular/common-components";
export class ConfirmationModalComponent {
    constructor() {
        this.acceptEvent = new EventEmitter();
        this.cancelEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    acceptClick() {
        this.acceptEvent.emit(this.operationId);
    }
    /**
     * @return {?}
     */
    cancelClick() {
        if (this.modalElement) {
            this.modalElement.cancelClose();
        }
    }
}
ConfirmationModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-confirmation-modal',
                template: "<gd-modal #modal [id]=\"id\" [title]=\"title\">\r\n  <div class=\"window\">\r\n    <div class=\"prompt\" [innerHTML]=\"promptText\"></div>\r\n\r\n    <div class=\"buttons\">      \r\n      <div class=\"btn\" (click)=\"acceptClick()\">{{ acceptText }}</div>\r\n      <div class=\"btn\" (click)=\"cancelClick()\">Cancel</div>\r\n    </div>\r\n  </div>\r\n  </gd-modal>\r\n",
                styles: [".btn{padding:5px 20px;background-color:#25c2d4;cursor:pointer;color:#fff!important}.btn:hover{background-color:#688296;color:#ccd0d4!important}.image-btn{text-align:center;color:#fff;cursor:pointer;margin:1px}.image-btn:hover{color:#688296!important}.image-btn>fa-icon{padding:5px;font-size:16px}.list-item:nth-of-type(even){background-color:#f4f4f4}.list-item:hover{background-color:#e5e5e5}.window{min-width:400px;min-height:auto;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:24px}.buttons{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;margin-left:auto;margin-top:20px}.buttons>div{margin-left:10px}"]
            }] }
];
/** @nocollapse */
ConfirmationModalComponent.ctorParameters = () => [];
ConfirmationModalComponent.propDecorators = {
    id: [{ type: Input }],
    title: [{ type: Input }],
    promptText: [{ type: Input }],
    acceptText: [{ type: Input }],
    operationId: [{ type: Input }],
    acceptEvent: [{ type: Output }],
    cancelEvent: [{ type: Output }],
    modalElement: [{ type: ViewChild, args: ['modal', { static: true },] }]
};
if (false) {
    /** @type {?} */
    ConfirmationModalComponent.prototype.id;
    /** @type {?} */
    ConfirmationModalComponent.prototype.title;
    /** @type {?} */
    ConfirmationModalComponent.prototype.promptText;
    /** @type {?} */
    ConfirmationModalComponent.prototype.acceptText;
    /** @type {?} */
    ConfirmationModalComponent.prototype.operationId;
    /** @type {?} */
    ConfirmationModalComponent.prototype.acceptEvent;
    /** @type {?} */
    ConfirmationModalComponent.prototype.cancelEvent;
    /** @type {?} */
    ConfirmationModalComponent.prototype.modalElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvY29uZmlybWF0aW9uLW1vZGFsL2NvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFDTCxjQUFjLEVBQ2YsTUFBTSwrQ0FBK0MsQ0FBQztBQU92RCxNQUFNLE9BQU8sMEJBQTBCO0lBYXJDO1FBTFUsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUkzQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyw4WEFBa0Q7O2FBRW5EOzs7OztpQkFFRSxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUVMLEtBQUs7MEJBRUwsTUFBTTswQkFDTixNQUFNOzJCQUVOLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBVnBDLHdDQUFvQjs7SUFDcEIsMkNBQXVCOztJQUN2QixnREFBNEI7O0lBQzVCLGdEQUE0Qjs7SUFFNUIsaURBQTZCOztJQUU3QixpREFBMkM7O0lBQzNDLGlEQUEyQzs7SUFFM0Msa0RBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgTW9kYWxDb21wb25lbnRcclxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1jb25maXJtYXRpb24tbW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtYXRpb24tbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25Nb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaWQ6IFN0cmluZztcclxuICBASW5wdXQoKSB0aXRsZTogU3RyaW5nO1xyXG4gIEBJbnB1dCgpIHByb21wdFRleHQ6IFN0cmluZztcclxuICBASW5wdXQoKSBhY2NlcHRUZXh0OiBTdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIG9wZXJhdGlvbklkOiBTdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBhY2NlcHRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgY2FuY2VsRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ21vZGFsJywgeyBzdGF0aWM6IHRydWUgfSkgbW9kYWxFbGVtZW50OiBNb2RhbENvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBhY2NlcHRDbGljaygpIHtcclxuICAgICAgdGhpcy5hY2NlcHRFdmVudC5lbWl0KHRoaXMub3BlcmF0aW9uSWQpO1xyXG4gIH1cclxuXHJcbiAgY2FuY2VsQ2xpY2soKSB7XHJcbiAgICBpZiAodGhpcy5tb2RhbEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5tb2RhbEVsZW1lbnQuY2FuY2VsQ2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==