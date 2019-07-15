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
                    template: "<div class=\"gd-drag-n-drop-wrap\" id=\"gd-dropZone\" gdDnd (closing)=\"onCloseUpload()\" (click)=\"close($event)\">\n  <div class=\"gd-drag-n-drop-icon\">\n    <fa-icon [icon]=\"['fas','cloud-download-alt']\" size=\"5x\"></fa-icon>\n  </div>\n  <h2>Drag &amp; Drop your files here</h2> \n  <h4>OR</h4> \n  <div class=\"gd-drag-n-drop-buttons\"> \n    <label class=\"btn btn-primary\"> \n      <fa-icon [icon]=\"['fas','file']\"></fa-icon>\n      SELECT FILE \n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      </label>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWZpbGUtem9uZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdXBsb2FkLWZpbGUtem9uZS91cGxvYWQtZmlsZS16b25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRTNEO0lBU0UsaUNBQW9CLGNBQWtDO1FBQWxDLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQUY1QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFFTSxDQUFDOzs7O0lBRTNELDBDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7O0lBRUQsaURBQWU7Ozs7SUFBZixVQUFnQixLQUFlO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsK0NBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCx1Q0FBSzs7OztJQUFMLFVBQU0sTUFBTTtRQUNWLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssYUFBYSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsbW9CQUFnRDs7aUJBRWpEOzs7O2dCQU5PLGtCQUFrQjs7OzhCQVN2QixNQUFNOztJQXFCVCw4QkFBQztDQUFBLEFBNUJELElBNEJDO1NBdkJZLHVCQUF1Qjs7O0lBRWxDLDhDQUFvRDs7Ozs7SUFFeEMsaURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtVcGxvYWRGaWxlc1NlcnZpY2V9IGZyb20gXCIuLi91cGxvYWQtZmlsZXMuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC11cGxvYWQtZmlsZS16b25lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VwbG9hZC1maWxlLXpvbmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91cGxvYWQtZmlsZS16b25lLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkRmlsZVpvbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBPdXRwdXQoKSBjbG9zZVVwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91cGxvYWRTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgaGFuZGxlRmlsZUlucHV0KGZpbGVzOiBGaWxlTGlzdCkge1xuICAgIHRoaXMuX3VwbG9hZFNlcnZpY2UuY2hhbmdlRmlsZXNMaXN0KGZpbGVzKTtcbiAgICB0aGlzLm9uQ2xvc2VVcGxvYWQoKTtcbiAgfVxuXG4gIG9uQ2xvc2VVcGxvYWQoKSB7XG4gICAgdGhpcy5jbG9zZVVwbG9hZC5lbWl0KHRydWUpO1xuICB9XG5cbiAgY2xvc2UoJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudC50YXJnZXQuaWQgPT09ICdnZC1kcm9wWm9uZScpIHtcbiAgICAgIHRoaXMub25DbG9zZVVwbG9hZCgpO1xuICAgIH1cbiAgfVxufVxuIl19