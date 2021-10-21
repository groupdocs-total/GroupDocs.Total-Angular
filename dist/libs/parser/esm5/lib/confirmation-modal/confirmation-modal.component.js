/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModalComponent } from "@groupdocs.examples.angular/common-components";
var ConfirmationModalComponent = /** @class */ (function () {
    function ConfirmationModalComponent() {
        this.acceptEvent = new EventEmitter();
        this.cancelEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ConfirmationModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ConfirmationModalComponent.prototype.acceptClick = /**
     * @return {?}
     */
    function () {
        this.acceptEvent.emit(this.operationId);
    };
    /**
     * @return {?}
     */
    ConfirmationModalComponent.prototype.cancelClick = /**
     * @return {?}
     */
    function () {
        if (this.modalElement) {
            this.modalElement.cancelClose();
        }
    };
    ConfirmationModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-confirmation-modal',
                    template: "<gd-modal #modal [id]=\"id\" [title]=\"title\">\r\n  <div class=\"window\">\r\n    <div class=\"prompt\" [innerHTML]=\"promptText\"></div>\r\n\r\n    <div class=\"buttons\">      \r\n      <div class=\"btn\" (click)=\"acceptClick()\">{{ acceptText }}</div>\r\n      <div class=\"btn\" (click)=\"cancelClick()\">Cancel</div>\r\n    </div>\r\n  </div>\r\n</gd-modal>\r\n",
                    styles: [".btn{padding:5px 20px;background-color:#25c2d4;cursor:pointer;color:#fff!important}.btn:hover{background-color:#688296;color:#ccd0d4!important}.image-btn{text-align:center;color:#fff;cursor:pointer;margin:1px}.image-btn:hover{color:#688296!important}.image-btn>fa-icon{padding:5px;font-size:16px}.list-item:nth-of-type(even){background-color:#f4f4f4}.list-item:hover{background-color:#e5e5e5}.window{min-width:400px;min-height:auto;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:24px}.buttons{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;margin-left:auto;margin-top:20px}.buttons>div{margin-left:10px}"]
                }] }
    ];
    /** @nocollapse */
    ConfirmationModalComponent.ctorParameters = function () { return []; };
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
    return ConfirmationModalComponent;
}());
export { ConfirmationModalComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvY29uZmlybWF0aW9uLW1vZGFsL2NvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFDTCxjQUFjLEVBQ2YsTUFBTSwrQ0FBK0MsQ0FBQztBQUV2RDtJQWtCRTtRQUxVLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFJM0IsQ0FBQzs7OztJQUVqQiw2Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsZ0RBQVc7OztJQUFYO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxnREFBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsNFhBQWtEOztpQkFFbkQ7Ozs7O3FCQUVFLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBRUwsS0FBSzs4QkFFTCxNQUFNOzhCQUNOLE1BQU07K0JBRU4sU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBaUJ0QyxpQ0FBQztDQUFBLEFBakNELElBaUNDO1NBNUJZLDBCQUEwQjs7O0lBQ3JDLHdDQUFvQjs7SUFDcEIsMkNBQXVCOztJQUN2QixnREFBNEI7O0lBQzVCLGdEQUE0Qjs7SUFFNUIsaURBQTZCOztJQUU3QixpREFBMkM7O0lBQzNDLGlEQUEyQzs7SUFFM0Msa0RBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgTW9kYWxDb21wb25lbnRcclxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWNvbmZpcm1hdGlvbi1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29uZmlybWF0aW9uLW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvbk1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpZDogU3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBTdHJpbmc7XHJcbiAgQElucHV0KCkgcHJvbXB0VGV4dDogU3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFjY2VwdFRleHQ6IFN0cmluZztcclxuXHJcbiAgQElucHV0KCkgb3BlcmF0aW9uSWQ6IFN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpIGFjY2VwdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBjYW5jZWxFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnbW9kYWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBtb2RhbEVsZW1lbnQ6IE1vZGFsQ29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGFjY2VwdENsaWNrKCkge1xyXG4gICAgICB0aGlzLmFjY2VwdEV2ZW50LmVtaXQodGhpcy5vcGVyYXRpb25JZCk7XHJcbiAgfVxyXG5cclxuICBjYW5jZWxDbGljaygpIHtcclxuICAgIGlmICh0aGlzLm1vZGFsRWxlbWVudCkge1xyXG4gICAgICB0aGlzLm1vZGFsRWxlbWVudC5jYW5jZWxDbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19