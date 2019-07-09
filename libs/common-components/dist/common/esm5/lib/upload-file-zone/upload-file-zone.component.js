import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { UploadFilesService } from "../upload-files.service";
var UploadFileZoneComponent = /** @class */ (function () {
    function UploadFileZoneComponent(_uploadService) {
        this._uploadService = _uploadService;
        this.closeUpload = new EventEmitter();
    }
    UploadFileZoneComponent.prototype.ngOnInit = function () {
    };
    UploadFileZoneComponent.prototype.handleFileInput = function (files) {
        this._uploadService.changeFilesList(files);
        this.onCloseUpload();
    };
    UploadFileZoneComponent.prototype.onCloseUpload = function () {
        this.closeUpload.emit(true);
    };
    UploadFileZoneComponent.prototype.close = function ($event) {
        if ($event.target.id === 'gd-dropZone') {
            this.onCloseUpload();
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
            styles: [".gd-drag-n-drop-wrap{border:2px dashed #ccc;background-color:#f8f8f8;text-align:center;cursor:default;position:absolute;width:-webkit-fill-available;left:1px;display:flex;align-content:center;flex-direction:column;justify-content:center;opacity:.9;z-index:1}.gd-drag-n-drop-wrap h2{color:#959da5;margin:5px 0;font-size:15px;font-weight:300}.gd-drag-n-drop-wrap h4{color:#cacaca;font-weight:300;font-size:12px;margin:10px 0 15px}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-drag-n-drop-buttons i{margin-right:5px}.gd-drag-n-drop-buttons .btn{width:134px;height:35px;margin:0 10px;font-size:12px;font-weight:400}.gd-drag-n-drop-wrap.hover{background:#ddd;border-color:#aaa}"]
        }),
        tslib_1.__metadata("design:paramtypes", [UploadFilesService])
    ], UploadFileZoneComponent);
    return UploadFileZoneComponent;
}());
export { UploadFileZoneComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWZpbGUtem9uZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdXBsb2FkLWZpbGUtem9uZS91cGxvYWQtZmlsZS16b25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBTzNEO0lBSUUsaUNBQW9CLGNBQWtDO1FBQWxDLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQUY1QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFFTSxDQUFDO0lBRTNELDBDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsaURBQWUsR0FBZixVQUFnQixLQUFlO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsK0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCx1Q0FBSyxHQUFMLFVBQU0sTUFBTTtRQUNWLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssYUFBYSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFwQlM7UUFBVCxNQUFNLEVBQUU7O2dFQUEyQztJQUZ6Qyx1QkFBdUI7UUFMbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixxbUJBQWdEOztTQUVqRCxDQUFDO2lEQUtvQyxrQkFBa0I7T0FKM0MsdUJBQXVCLENBdUJuQztJQUFELDhCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0F2QlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtVcGxvYWRGaWxlc1NlcnZpY2V9IGZyb20gXCIuLi91cGxvYWQtZmlsZXMuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC11cGxvYWQtZmlsZS16b25lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VwbG9hZC1maWxlLXpvbmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91cGxvYWQtZmlsZS16b25lLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkRmlsZVpvbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBPdXRwdXQoKSBjbG9zZVVwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91cGxvYWRTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgaGFuZGxlRmlsZUlucHV0KGZpbGVzOiBGaWxlTGlzdCkge1xuICAgIHRoaXMuX3VwbG9hZFNlcnZpY2UuY2hhbmdlRmlsZXNMaXN0KGZpbGVzKTtcbiAgICB0aGlzLm9uQ2xvc2VVcGxvYWQoKTtcbiAgfVxuXG4gIG9uQ2xvc2VVcGxvYWQoKSB7XG4gICAgdGhpcy5jbG9zZVVwbG9hZC5lbWl0KHRydWUpO1xuICB9XG5cbiAgY2xvc2UoJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudC50YXJnZXQuaWQgPT09ICdnZC1kcm9wWm9uZScpIHtcbiAgICAgIHRoaXMub25DbG9zZVVwbG9hZCgpO1xuICAgIH1cbiAgfVxufVxuIl19