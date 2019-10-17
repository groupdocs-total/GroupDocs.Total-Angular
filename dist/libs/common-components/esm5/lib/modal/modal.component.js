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
    ModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-modal',
                    template: "<div class=\"gd-modal fade\" id=\"modalDialog\" (click)=\"onClose($event);\" *ngIf=\"visibility\">\n</div>\n<div class=\"gd-modal-dialog\" *ngIf=\"visibility\">\n  <div class=\"gd-modal-content\" id=\"gd-modal-content\">\n\n    <div class=\"gd-modal-header\">\n      <div class=\"gd-modal-close\" (click)=\"close();\"><span>&times;</span></div>\n      <h4 class=\"gd-modal-title\">{{title}}</h4>\n    </div>\n\n    <div class=\"gd-modal-body\">\n      <ng-content></ng-content>\n    </div>\n\n    <div class=\"gd-modal-footer\">\n\n    </div>\n  </div>\n</div>\n\n\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.gd-modal{overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0;background-color:rgba(0,0,0,.5)}.gd-modal-dialog{box-shadow:#0005 0 0 10px;position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:1051}.gd-modal-content{background-color:#fff;height:100%;display:flex;flex-direction:column}.gd-modal-header{height:60px;padding:0 12px 0 24px;background-color:#3e4e5a}.gd-modal-close{position:absolute;right:12px;top:12px;cursor:pointer;color:#fff;width:37px;height:37px;text-align:center}.gd-modal-close span{font-size:18px;font-weight:900;height:19px;width:10px;line-height:36px}.gd-modal-title{font-size:16px;font-weight:400;padding-top:17px;padding-bottom:22px;margin:0;color:#fff}.gd-modal-body{background-color:#fff;overflow:hidden;overflow-y:auto;height:calc(100% - 75px)}.gd-modal-footer{height:auto}.gd-modal-footer>.btn{float:right;margin:20px 15px;padding:10px 20px;cursor:pointer;font-size:12px}@media (max-width:1037px){.gd-modal-dialog{width:100%;height:100%}.gd-modal-body{height:100%}}"]
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
        visible: [{ type: Output }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL21vZGFsL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUU5QztJQVlFLHdCQUFvQixZQUEwQixFQUFFLEVBQWM7UUFBMUMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFKcEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDaEQsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUlqQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELGlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU87U0FDUjtRQUVELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsb0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELDZCQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCw4QkFBSzs7O0lBQUw7UUFDRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsZ0NBQU87Ozs7SUFBUCxVQUFRLE1BQWtCO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsbUJBQVMsTUFBTSxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsRUFBRSxLQUFLLGFBQWEsRUFBRTtZQUM1RSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7O2dCQWpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLGtrQkFBcUM7O2lCQUV0Qzs7OztnQkFOTyxZQUFZO2dCQURELFVBQVU7OztxQkFTMUIsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLE1BQU07O0lBMENULHFCQUFDO0NBQUEsQUFsREQsSUFrREM7U0E3Q1ksY0FBYzs7O0lBQ3pCLDRCQUFvQjs7SUFDcEIsK0JBQXVCOztJQUN2QixpQ0FBZ0Q7O0lBQ2hELG9DQUFtQjs7Ozs7SUFDbkIsaUNBQXFCOzs7OztJQUVULHNDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TW9kYWxTZXJ2aWNlfSBmcm9tIFwiLi4vbW9kYWwuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21vZGFsLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSB2aXNpYmxlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICB2aXNpYmlsaXR5ID0gZmFsc2U7XG4gIHByaXZhdGUgZWxlbWVudDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pZCkge1xuICAgICAgY29uc29sZS5lcnJvcignbW9kYWwgbXVzdCBoYXZlIGFuIGlkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuXG4gICAgdGhpcy5tb2RhbFNlcnZpY2UuYWRkKHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5tb2RhbFNlcnZpY2UucmVtb3ZlKHRoaXMuaWQpO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgdGhpcy52aXNpYmlsaXR5ID0gdHJ1ZTtcbiAgICB0aGlzLnZpc2libGUuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy52aXNpYmlsaXR5ID0gZmFsc2U7XG4gICAgdGhpcy52aXNpYmxlLmVtaXQoZmFsc2UpO1xuICB9XG5cbiAgb25DbG9zZSgkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCRldmVudCAmJiAkZXZlbnQudGFyZ2V0ICYmICg8RWxlbWVudD4kZXZlbnQudGFyZ2V0KS5pZCA9PT0gJ21vZGFsRGlhbG9nJykge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxufVxuIl19