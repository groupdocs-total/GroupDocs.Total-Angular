import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from "../modal.service";
var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.visible = new EventEmitter();
        this.visibility = false;
        this.element = el.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        document.body.appendChild(this.element);
        this.modalService.add(this);
    };
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    ModalComponent.prototype.open = function () {
        this.visibility = true;
        this.visible.emit(true);
    };
    ModalComponent.prototype.close = function () {
        this.visibility = false;
        this.visible.emit(false);
    };
    ModalComponent.prototype.onClose = function ($event) {
        if ($event && $event.target && $event.target.id === 'modalDialog') {
            this.close();
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ModalComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ModalComponent.prototype, "visible", void 0);
    ModalComponent = tslib_1.__decorate([
        Component({
            selector: 'gd-modal',
            template: "<div class=\"gd-modal fade\" id=\"modalDialog\" (click)=\"onClose($event);\" *ngIf=\"visibility\">\n  <div class=\"gd-modal-dialog\">\n    <div class=\"gd-modal-content\" id=\"gd-modal-content\"> \n\n      <div class=\"gd-modal-header\"> \n        <div class=\"gd-modal-close\" (click)=\"close();\"><span>&times;</span></div>\n        <h4 class=\"gd-modal-title\">{{title}}</h4>\n        </div> \n\n      <div class=\"gd-modal-body\">\n        <ng-content></ng-content>\n        </div> \n\n      <div class=\"gd-modal-footer\"> \n\n        </div> \n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog --> \n  </div>\n\n",
            styles: [".gd-modal{overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0;background-color:rgba(0,0,0,.5)}.gd-modal-dialog{box-shadow:#0005 0 0 10px;position:absolute;width:1024px;height:728px;top:calc(50% - 364px);left:calc(50% - 512px)}.gd-modal-content{background-color:#fff;height:100%;display:flex;flex-direction:column}.gd-modal-header{padding:1px 20px;background-color:#3e4e5a}.gd-modal-close{position:absolute;right:20px;top:13px;font-size:21px;cursor:pointer;color:#959da5}.gd-modal-title{font-size:16px;font-weight:400;padding-top:16px;padding-bottom:16px;margin:0;color:#fff}.gd-modal-body{background-color:#fff;padding:20px 0;overflow:hidden;overflow-y:auto;height:calc(100% - 75px)}.gd-modal-footer{height:25px}.gd-modal-footer>.btn{float:right;margin:20px 15px;padding:10px 20px;cursor:pointer;font-size:12px}@media (max-width:1025px){.gd-modal-dialog{width:100%;height:100%;top:0;left:0}}"]
        }),
        tslib_1.__metadata("design:paramtypes", [ModalService, ElementRef])
    ], ModalComponent);
    return ModalComponent;
}());
export { ModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL21vZGFsL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQU85QztJQU9FLHdCQUFvQixZQUEwQixFQUFFLEVBQWM7UUFBMUMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFKcEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDaEQsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUlqQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDbEMsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUN2QyxPQUFPO1NBQ1I7UUFFRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsNkJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxNQUFrQjtRQUN4QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFjLE1BQU0sQ0FBQyxNQUFPLENBQUMsRUFBRSxLQUFLLGFBQWEsRUFBRTtZQUM1RSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7SUF4Q1E7UUFBUixLQUFLLEVBQUU7OzhDQUFZO0lBQ1g7UUFBUixLQUFLLEVBQUU7O2lEQUFlO0lBQ2I7UUFBVCxNQUFNLEVBQUU7O21EQUF1QztJQUhyQyxjQUFjO1FBTDFCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLHVvQkFBcUM7O1NBRXRDLENBQUM7aURBUWtDLFlBQVksRUFBTSxVQUFVO09BUG5ELGNBQWMsQ0EwQzFCO0lBQUQscUJBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQTFDWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb2RhbFNlcnZpY2V9IGZyb20gXCIuLi9tb2RhbC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbW9kYWwuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQE91dHB1dCgpIHZpc2libGUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIHZpc2liaWxpdHkgPSBmYWxzZTtcbiAgcHJpdmF0ZSBlbGVtZW50OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSwgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdtb2RhbCBtdXN0IGhhdmUgYW4gaWQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG5cbiAgICB0aGlzLm1vZGFsU2VydmljZS5hZGQodGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsU2VydmljZS5yZW1vdmUodGhpcy5pZCk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgb3BlbigpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2liaWxpdHkgPSB0cnVlO1xuICAgIHRoaXMudmlzaWJsZS5lbWl0KHRydWUpO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy52aXNpYmlsaXR5ID0gZmFsc2U7XG4gICAgdGhpcy52aXNpYmxlLmVtaXQoZmFsc2UpO1xuICB9XG5cbiAgb25DbG9zZSgkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoJGV2ZW50ICYmICRldmVudC50YXJnZXQgJiYgKDxFbGVtZW50PiRldmVudC50YXJnZXQpLmlkID09PSAnbW9kYWxEaWFsb2cnKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=