/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from "../modal.service";
export class ModalComponent {
    /**
     * @param {?} modalService
     * @param {?} el
     */
    constructor(modalService, el) {
        this.modalService = modalService;
        this.visible = new EventEmitter();
        this.cancel = new EventEmitter();
        this.visibility = false;
        this.element = el.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        document.body.appendChild(this.element);
        this.modalService.add(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    /**
     * @return {?}
     */
    open() {
        this.visibility = true;
        this.visible.emit(true);
    }
    /**
     * @return {?}
     */
    close() {
        event.preventDefault();
        event.stopPropagation();
        this.visibility = false;
        this.visible.emit(false);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onClose($event) {
        $event.stopPropagation();
        if ($event && $event.target && ((/** @type {?} */ ($event.target))).id === 'modalDialog') {
            this.close();
        }
    }
    /**
     * @return {?}
     */
    cancelClose() {
        this.cancel.emit(false);
        this.close();
    }
}
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-modal',
                template: "<div class=\"gd-modal fade\" id=\"modalDialog\" (click)=\"onClose($event);\" *ngIf=\"visibility\">\r\n</div>\r\n<div class=\"gd-modal-dialog\" *ngIf=\"visibility\">\r\n  <div class=\"gd-modal-content\" id=\"gd-modal-content\">\r\n\r\n    <div class=\"gd-modal-header\">\r\n      <div class=\"gd-modal-close\" (click)=\"cancelClose();\"><span>&times;</span></div>\r\n      <h4 class=\"gd-modal-title\">{{title}}</h4>\r\n    </div>\r\n\r\n    <div class=\"gd-modal-body\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n\r\n    <div class=\"gd-modal-footer\">\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.gd-modal{overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0;background-color:rgba(0,0,0,.5)}.gd-modal-dialog{box-shadow:#0005 0 0 10px;position:fixed;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:1051}.gd-modal-dialog ::ng-deep .button{-webkit-box-orient:unset!important;-webkit-box-direction:unset!important;flex-direction:unset!important}.gd-modal-content{background-color:#fff;height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.gd-modal-header{height:60px;padding:0 12px 0 24px;background-color:#3e4e5a}.gd-modal-close{position:absolute;right:12px;top:12px;cursor:pointer;color:#fff;width:37px;height:37px;text-align:center}.gd-modal-close span{font-size:18px;font-weight:900;height:19px;width:10px;line-height:36px}.gd-modal-title{font-size:16px;font-weight:400;padding-top:17px;padding-bottom:22px;margin:0;color:#fff}.gd-modal-body{background-color:#fff;overflow:hidden;overflow-y:auto;height:calc(100% - 75px)}.gd-modal-footer{height:auto}.gd-modal-footer>.btn{float:right;margin:20px 15px;padding:10px 20px;cursor:pointer;font-size:12px}@media (max-width:1037px){.gd-modal-dialog{width:100%;height:100%}.gd-modal-body{height:100%}}"]
            }] }
];
/** @nocollapse */
ModalComponent.ctorParameters = () => [
    { type: ModalService },
    { type: ElementRef }
];
ModalComponent.propDecorators = {
    id: [{ type: Input }],
    title: [{ type: Input }],
    visible: [{ type: Output }],
    cancel: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL21vZGFsL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQU85QyxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFRekIsWUFBb0IsWUFBMEIsRUFBRSxFQUFjO1FBQTFDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBTHBDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3RDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQy9DLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFJakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDdkMsT0FBTztTQUNSO1FBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsS0FBSztRQUNILEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsTUFBa0I7UUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxtQkFBUyxNQUFNLENBQUMsTUFBTSxFQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssYUFBYSxFQUFFO1lBQzVFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDOzs7WUF2REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixrbkJBQXFDOzthQUV0Qzs7OztZQU5PLFlBQVk7WUFERCxVQUFVOzs7aUJBUzFCLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxNQUFNO3FCQUNOLE1BQU07Ozs7SUFIUCw0QkFBb0I7O0lBQ3BCLCtCQUF1Qjs7SUFDdkIsaUNBQWdEOztJQUNoRCxnQ0FBK0M7O0lBQy9DLG9DQUFtQjs7Ozs7SUFDbkIsaUNBQXFCOzs7OztJQUVULHNDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNb2RhbFNlcnZpY2V9IGZyb20gXCIuLi9tb2RhbC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21vZGFsLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBAT3V0cHV0KCkgdmlzaWJsZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgY2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIHZpc2liaWxpdHkgPSBmYWxzZTtcclxuICBwcml2YXRlIGVsZW1lbnQ6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSwgZWw6IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pZCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdtb2RhbCBtdXN0IGhhdmUgYW4gaWQnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLm1vZGFsU2VydmljZS5hZGQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLnJlbW92ZSh0aGlzLmlkKTtcclxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIG9wZW4oKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2liaWxpdHkgPSB0cnVlO1xyXG4gICAgdGhpcy52aXNpYmxlLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMudmlzaWJpbGl0eSA9IGZhbHNlO1xyXG4gICAgdGhpcy52aXNpYmxlLmVtaXQoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgb25DbG9zZSgkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICgkZXZlbnQgJiYgJGV2ZW50LnRhcmdldCAmJiAoPEVsZW1lbnQ+JGV2ZW50LnRhcmdldCkuaWQgPT09ICdtb2RhbERpYWxvZycpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FuY2VsQ2xvc2UoKSB7XHJcbiAgICB0aGlzLmNhbmNlbC5lbWl0KGZhbHNlKTtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl19