import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { UploadFilesService } from "../upload-files.service";
let UploadFileZoneComponent = class UploadFileZoneComponent {
    constructor(_uploadService) {
        this._uploadService = _uploadService;
        this.closeUpload = new EventEmitter();
    }
    ngOnInit() {
    }
    handleFileInput(files) {
        this._uploadService.changeFilesList(files);
        this.onCloseUpload();
    }
    onCloseUpload() {
        this.closeUpload.emit(true);
    }
    close($event) {
        if ($event.target.id === 'gd-dropZone') {
            this.onCloseUpload();
        }
    }
};
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], UploadFileZoneComponent.prototype, "closeUpload", void 0);
UploadFileZoneComponent = tslib_1.__decorate([
    Component({
        selector: 'gd-upload-file-zone',
        template: "<div class=\"gd-drag-n-drop-wrap\" id=\"gd-dropZone\" gdDnd (close)=\"onCloseUpload()\" (click)=\"close($event)\">\n  <div class=\"gd-drag-n-drop-icon\"><i class=\"fa fa-cloud-download-alt fa-5x\" aria-hidden=\"true\"></i></div>\n  <h2>Drag &amp; Drop your files here</h2> \n  <h4>OR</h4> \n  <div class=\"gd-drag-n-drop-buttons\"> \n    <label class=\"btn btn-primary\"> \n      <i class=\"fa fa-file\"></i> \n      SELECT FILE \n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      </label>\n  </div>\n</div>\n",
        styles: [".gd-drag-n-drop-wrap{border:2px dashed #ccc;background-color:#f8f8f8;text-align:center;cursor:default;position:absolute;width:983px;height:626px;left:2px;display:flex;align-content:center;flex-direction:column;justify-content:center;opacity:.9;z-index:1}.gd-drag-n-drop-wrap h2{color:#959da5;margin:5px 0;font-size:15px;font-weight:300}.gd-drag-n-drop-wrap h4{color:#cacaca;font-weight:300;font-size:12px;margin:10px 0 15px}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-drag-n-drop-buttons i{margin-right:5px}.gd-drag-n-drop-buttons .btn{width:134px;height:35px;margin:0 10px;font-size:12px;font-weight:400}.gd-drag-n-drop-wrap.hover{background:#ddd;border-color:#aaa}"]
    }),
    tslib_1.__metadata("design:paramtypes", [UploadFilesService])
], UploadFileZoneComponent);
export { UploadFileZoneComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWZpbGUtem9uZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdXBsb2FkLWZpbGUtem9uZS91cGxvYWQtZmlsZS16b25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBTzNELElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBSWxDLFlBQW9CLGNBQWtDO1FBQWxDLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQUY1QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFFTSxDQUFDO0lBRTNELFFBQVE7SUFDUixDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQWU7UUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNO1FBQ1YsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxhQUFhLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFyQlc7SUFBVCxNQUFNLEVBQUU7OzREQUEyQztBQUZ6Qyx1QkFBdUI7SUFMbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixxbUJBQWdEOztLQUVqRCxDQUFDOzZDQUtvQyxrQkFBa0I7R0FKM0MsdUJBQXVCLENBdUJuQztTQXZCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VwbG9hZEZpbGVzU2VydmljZX0gZnJvbSBcIi4uL3VwbG9hZC1maWxlcy5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXVwbG9hZC1maWxlLXpvbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBsb2FkLWZpbGUtem9uZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VwbG9hZC1maWxlLXpvbmUuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRGaWxlWm9uZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQE91dHB1dCgpIGNsb3NlVXBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3VwbG9hZFNlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBoYW5kbGVGaWxlSW5wdXQoZmlsZXM6IEZpbGVMaXN0KSB7XG4gICAgdGhpcy5fdXBsb2FkU2VydmljZS5jaGFuZ2VGaWxlc0xpc3QoZmlsZXMpO1xuICAgIHRoaXMub25DbG9zZVVwbG9hZCgpO1xuICB9XG5cbiAgb25DbG9zZVVwbG9hZCgpIHtcbiAgICB0aGlzLmNsb3NlVXBsb2FkLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBjbG9zZSgkZXZlbnQpIHtcbiAgICBpZiAoJGV2ZW50LnRhcmdldC5pZCA9PT0gJ2dkLWRyb3Bab25lJykge1xuICAgICAgdGhpcy5vbkNsb3NlVXBsb2FkKCk7XG4gICAgfVxuICB9XG59XG4iXX0=