import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from "../modal.service";
let ModalComponent = class ModalComponent {
    constructor(modalService, el) {
        this.modalService = modalService;
        this.visible = new EventEmitter();
        this.visibility = false;
        this.element = el.nativeElement;
    }
    ngOnInit() {
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        document.body.appendChild(this.element);
        this.modalService.add(this);
    }
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    open() {
        this.visibility = true;
        this.visible.emit(true);
    }
    close() {
        this.visibility = false;
        this.visible.emit(false);
    }
    onClose($event) {
        if ($event && $event.target && $event.target.id === 'modalDialog') {
            this.close();
        }
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
export { ModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL21vZGFsL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQU85QyxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBT3pCLFlBQW9CLFlBQTBCLEVBQUUsRUFBYztRQUExQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUpwQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNoRCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSWpCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUNsQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU87U0FDUjtRQUVELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsT0FBTyxDQUFDLE1BQWtCO1FBQ3hCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQWMsTUFBTSxDQUFDLE1BQU8sQ0FBQyxFQUFFLEtBQUssYUFBYSxFQUFFO1lBQzVFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUF6Q1U7SUFBUixLQUFLLEVBQUU7OzBDQUFZO0FBQ1g7SUFBUixLQUFLLEVBQUU7OzZDQUFlO0FBQ2I7SUFBVCxNQUFNLEVBQUU7OytDQUF1QztBQUhyQyxjQUFjO0lBTDFCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLHVvQkFBcUM7O0tBRXRDLENBQUM7NkNBUWtDLFlBQVksRUFBTSxVQUFVO0dBUG5ELGNBQWMsQ0EwQzFCO1NBMUNZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01vZGFsU2VydmljZX0gZnJvbSBcIi4uL21vZGFsLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tb2RhbC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBAT3V0cHV0KCkgdmlzaWJsZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgdmlzaWJpbGl0eSA9IGZhbHNlO1xuICBwcml2YXRlIGVsZW1lbnQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLCBlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ21vZGFsIG11c3QgaGF2ZSBhbiBpZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcblxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLmFkZCh0aGlzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLnJlbW92ZSh0aGlzLmlkKTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMudmlzaWJpbGl0eSA9IHRydWU7XG4gICAgdGhpcy52aXNpYmxlLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2liaWxpdHkgPSBmYWxzZTtcbiAgICB0aGlzLnZpc2libGUuZW1pdChmYWxzZSk7XG4gIH1cblxuICBvbkNsb3NlKCRldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICgkZXZlbnQgJiYgJGV2ZW50LnRhcmdldCAmJiAoPEVsZW1lbnQ+JGV2ZW50LnRhcmdldCkuaWQgPT09ICdtb2RhbERpYWxvZycpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==