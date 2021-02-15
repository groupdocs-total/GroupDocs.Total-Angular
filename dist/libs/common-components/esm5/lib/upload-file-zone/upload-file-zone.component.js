/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output } from '@angular/core';
import { UploadFilesService } from "../upload-files.service";
var UploadFileZoneComponent = /** @class */ (function () {
    function UploadFileZoneComponent(_uploadService) {
        this._uploadService = _uploadService;
        this.closeUpload = new EventEmitter();
    }
    /**
     * @return {?}
     */
    UploadFileZoneComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} files
     * @return {?}
     */
    UploadFileZoneComponent.prototype.handleFileInput = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this._uploadService.changeFilesList(files);
        this.onCloseUpload();
    };
    /**
     * @return {?}
     */
    UploadFileZoneComponent.prototype.onCloseUpload = /**
     * @return {?}
     */
    function () {
        this.closeUpload.emit(true);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    UploadFileZoneComponent.prototype.close = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event.target.id === 'gd-dropZone') {
            this.onCloseUpload();
        }
    };
    UploadFileZoneComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-upload-file-zone',
                    template: "<div class=\"gd-drag-n-drop-wrap\" id=\"gd-dropZone\" gdDnd (closing)=\"onCloseUpload()\" (click)=\"close($event)\">\r\n  <div class=\"gd-drag-n-drop-icon\">\r\n    <fa-icon [icon]=\"['fas','cloud-download-alt']\" size=\"5x\"></fa-icon>\r\n  </div>\r\n  <h2>Drag &amp; Drop your files here</h2>\r\n  <h4>OR</h4>\r\n  <div class=\"gd-drag-n-drop-buttons\">\r\n    <label class=\"btn btn-primary\"> \r\n      <fa-icon [icon]=\"['fas','file']\"></fa-icon>\r\n      SELECT FILE\r\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\r\n      </label>\r\n  </div>\r\n</div>\r\n",
                    styles: [".gd-drag-n-drop-wrap{border:2px dashed #ccc;background-color:#f8f8f8;text-align:center;cursor:default;position:absolute;width:-webkit-fill-available;left:1px;display:flex;align-content:center;flex-direction:column;justify-content:center;opacity:.9;z-index:1}.gd-drag-n-drop-wrap h2{color:#959da5;margin:5px 0;font-size:15px;font-weight:300}.gd-drag-n-drop-wrap h4{color:#cacaca;font-weight:300;font-size:12px;margin:10px 0 15px}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-drag-n-drop-buttons i{margin-right:5px}.gd-drag-n-drop-buttons .btn{width:134px;height:35px;margin:0 10px;font-size:12px;font-weight:400}.gd-drag-n-drop-wrap.hover{background:#ddd;border-color:#aaa}"]
                }] }
    ];
    /** @nocollapse */
    UploadFileZoneComponent.ctorParameters = function () { return [
        { type: UploadFilesService }
    ]; };
    UploadFileZoneComponent.propDecorators = {
        closeUpload: [{ type: Output }]
    };
    return UploadFileZoneComponent;
}());
export { UploadFileZoneComponent };
if (false) {
    /** @type {?} */
    UploadFileZoneComponent.prototype.closeUpload;
    /**
     * @type {?}
     * @private
     */
    UploadFileZoneComponent.prototype._uploadService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWZpbGUtem9uZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdXBsb2FkLWZpbGUtem9uZS91cGxvYWQtZmlsZS16b25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRTNEO0lBU0UsaUNBQW9CLGNBQWtDO1FBQWxDLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQUY1QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFFTSxDQUFDOzs7O0lBRTNELDBDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7O0lBRUQsaURBQWU7Ozs7SUFBZixVQUFnQixLQUFlO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsK0NBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCx1Q0FBSzs7OztJQUFMLFVBQU0sTUFBTTtRQUNWLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssYUFBYSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsMnBCQUFnRDs7aUJBRWpEOzs7O2dCQU5PLGtCQUFrQjs7OzhCQVN2QixNQUFNOztJQXFCVCw4QkFBQztDQUFBLEFBNUJELElBNEJDO1NBdkJZLHVCQUF1Qjs7O0lBRWxDLDhDQUFvRDs7Ozs7SUFFeEMsaURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1VwbG9hZEZpbGVzU2VydmljZX0gZnJvbSBcIi4uL3VwbG9hZC1maWxlcy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXVwbG9hZC1maWxlLXpvbmUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi91cGxvYWQtZmlsZS16b25lLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi91cGxvYWQtZmlsZS16b25lLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFVwbG9hZEZpbGVab25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQE91dHB1dCgpIGNsb3NlVXBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91cGxvYWRTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGhhbmRsZUZpbGVJbnB1dChmaWxlczogRmlsZUxpc3QpIHtcclxuICAgIHRoaXMuX3VwbG9hZFNlcnZpY2UuY2hhbmdlRmlsZXNMaXN0KGZpbGVzKTtcclxuICAgIHRoaXMub25DbG9zZVVwbG9hZCgpO1xyXG4gIH1cclxuXHJcbiAgb25DbG9zZVVwbG9hZCgpIHtcclxuICAgIHRoaXMuY2xvc2VVcGxvYWQuZW1pdCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCRldmVudCkge1xyXG4gICAgaWYgKCRldmVudC50YXJnZXQuaWQgPT09ICdnZC1kcm9wWm9uZScpIHtcclxuICAgICAgdGhpcy5vbkNsb3NlVXBsb2FkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==