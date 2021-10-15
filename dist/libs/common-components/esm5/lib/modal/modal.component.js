/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from "../modal.service";
var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.visible = new EventEmitter();
        this.cancel = new EventEmitter();
        this.visibility = false;
        this.element = el.nativeElement;
    }
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        document.body.appendChild(this.element);
        this.modalService.add(this);
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.visibility = true;
        this.visible.emit(true);
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        event.preventDefault();
        event.stopPropagation();
        this.visibility = false;
        this.visible.emit(false);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ModalComponent.prototype.onClose = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.stopPropagation();
        if ($event && $event.target && ((/** @type {?} */ ($event.target))).id === 'modalDialog') {
            this.close();
        }
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.cancelClose = /**
     * @return {?}
     */
    function () {
        this.cancel.emit(false);
        this.close();
    };
    ModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-modal',
                    template: "<div class=\"gd-modal fade\" id=\"modalDialog\" (click)=\"onClose($event);\" *ngIf=\"visibility\">\r\n</div>\r\n<div class=\"gd-modal-dialog\" *ngIf=\"visibility\">\r\n  <div class=\"gd-modal-content\" id=\"gd-modal-content\">\r\n\r\n    <div class=\"gd-modal-header\">\r\n      <div class=\"gd-modal-close\" (click)=\"cancelClose();\"><span>&times;</span></div>\r\n      <h4 class=\"gd-modal-title\">{{title}}</h4>\r\n    </div>\r\n\r\n    <div class=\"gd-modal-body\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n\r\n    <div class=\"gd-modal-footer\">\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.gd-modal{overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0;background-color:rgba(0,0,0,.5)}.gd-modal-dialog{box-shadow:#0005 0 0 10px;position:fixed;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:1051}.gd-modal-dialog ::ng-deep .button{-webkit-box-orient:unset!important;-webkit-box-direction:unset!important;flex-direction:unset!important}.gd-modal-content{background-color:#fff;height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.gd-modal-header{height:60px;padding:0 12px 0 24px;background-color:#3e4e5a}.gd-modal-close{position:absolute;right:12px;top:12px;cursor:pointer;color:#fff;width:37px;height:37px;text-align:center}.gd-modal-close span{font-size:18px;font-weight:900;height:19px;width:10px;line-height:36px}.gd-modal-title{font-size:16px;font-weight:400;padding-top:17px;padding-bottom:22px;margin:0;color:#fff}.gd-modal-body{background-color:#fff;overflow:hidden;overflow-y:auto;height:calc(100% - 75px)}.gd-modal-footer{height:auto}.gd-modal-footer>.btn{float:right;margin:20px 15px;padding:10px 20px;cursor:pointer;font-size:12px}@media (max-width:1037px){.gd-modal-dialog{width:100%;height:100%}.gd-modal-body{height:100%}}"]
                }] }
    ];
    /** @nocollapse */
    ModalComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: ElementRef }
    ]; };
    ModalComponent.propDecorators = {
        id: [{ type: Input }],
        title: [{ type: Input }],
        visible: [{ type: Output }],
        cancel: [{ type: Output }]
    };
    return ModalComponent;
}());
export { ModalComponent };
if (false) {
    /** @type {?} */
    ModalComponent.prototype.id;
    /** @type {?} */
    ModalComponent.prototype.title;
    /** @type {?} */
    ModalComponent.prototype.visible;
    /** @type {?} */
    ModalComponent.prototype.cancel;
    /** @type {?} */
    ModalComponent.prototype.visibility;
    /**
     * @type {?}
     * @private
     */
    ModalComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    ModalComponent.prototype.modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL21vZGFsL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUU5QztJQWFFLHdCQUFvQixZQUEwQixFQUFFLEVBQWM7UUFBMUMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFMcEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDdEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDL0MsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUlqQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELGlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU87U0FDUjtRQUVELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsb0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELDZCQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCw4QkFBSzs7O0lBQUw7UUFDRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsZ0NBQU87Ozs7SUFBUCxVQUFRLE1BQWtCO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsbUJBQVMsTUFBTSxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsRUFBRSxLQUFLLGFBQWEsRUFBRTtZQUM1RSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDOztnQkF2REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixrbkJBQXFDOztpQkFFdEM7Ozs7Z0JBTk8sWUFBWTtnQkFERCxVQUFVOzs7cUJBUzFCLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxNQUFNO3lCQUNOLE1BQU07O0lBK0NULHFCQUFDO0NBQUEsQUF4REQsSUF3REM7U0FuRFksY0FBYzs7O0lBQ3pCLDRCQUFvQjs7SUFDcEIsK0JBQXVCOztJQUN2QixpQ0FBZ0Q7O0lBQ2hELGdDQUErQzs7SUFDL0Msb0NBQW1COzs7OztJQUNuQixpQ0FBcUI7Ozs7O0lBRVQsc0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01vZGFsU2VydmljZX0gZnJvbSBcIi4uL21vZGFsLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtbW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbW9kYWwuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSB2aXNpYmxlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBjYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgdmlzaWJpbGl0eSA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZWxlbWVudDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLCBlbDogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWwubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlkKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ21vZGFsIG11c3QgaGF2ZSBhbiBpZCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLmFkZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5tb2RhbFNlcnZpY2UucmVtb3ZlKHRoaXMuaWQpO1xyXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaWJpbGl0eSA9IHRydWU7XHJcbiAgICB0aGlzLnZpc2libGUuZW1pdCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy52aXNpYmlsaXR5ID0gZmFsc2U7XHJcbiAgICB0aGlzLnZpc2libGUuZW1pdChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBvbkNsb3NlKCRldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKCRldmVudCAmJiAkZXZlbnQudGFyZ2V0ICYmICg8RWxlbWVudD4kZXZlbnQudGFyZ2V0KS5pZCA9PT0gJ21vZGFsRGlhbG9nJykge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYW5jZWxDbG9zZSgpIHtcclxuICAgIHRoaXMuY2FuY2VsLmVtaXQoZmFsc2UpO1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=