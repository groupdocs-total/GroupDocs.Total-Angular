/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModals, ExceptionMessageService, FileCredentials, ModalService } from "@groupdocs.examples.angular/common-components";
import { EditorService } from "../editor.service";
var CreateDocumentModalComponent = /** @class */ (function () {
    function CreateDocumentModalComponent(_editorService, _modalService, _excMessageService) {
        this._editorService = _editorService;
        this._modalService = _modalService;
        this._excMessageService = _excMessageService;
        this.savingFile = new EventEmitter();
        this.closing = new EventEmitter();
        this.FILE_NAME_REGEX = /^.*[\\\/]/;
    }
    Object.defineProperty(CreateDocumentModalComponent.prototype, "format", {
        get: /**
         * @return {?}
         */
        function () {
            return this._format;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CreateDocumentModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.loadFormats();
    };
    /**
     * @return {?}
     */
    CreateDocumentModalComponent.prototype.loadFormats = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._editorService.getFormats().subscribe((/**
         * @param {?} formats
         * @return {?}
         */
        function (formats) {
            _this.formats = _this.formatOptions(formats);
            _this._format = "DOCX";
        }));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    CreateDocumentModalComponent.prototype.selectFormat = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this._format = $event.name;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CreateDocumentModalComponent.prototype.createFormatOption = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return { value: val, name: val.toUpperCase() };
    };
    /**
     * @param {?} formats
     * @return {?}
     */
    CreateDocumentModalComponent.prototype.formatOptions = /**
     * @param {?} formats
     * @return {?}
     */
    function (formats) {
        /** @type {?} */
        var allTypes = new Array();
        for (var i = 0; i < formats.length; i++) {
            allTypes.push(this.createFormatOption(formats[i]));
        }
        return allTypes;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    CreateDocumentModalComponent.prototype.save = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var fileName = "";
        if (name && name !== "") {
            fileName = name + "." + this._format.toLowerCase();
        }
        else if (!this.file) {
            this._modalService.open(CommonModals.ErrorMessage);
            this._excMessageService.changeMessage("File name is empty");
        }
        this._modalService.close(CommonModals.CreateDocument);
        /** @type {?} */
        var guid = fileName !== "" ? fileName : this.file.guid;
        /** @type {?} */
        var password = this.file ? this.file.password : '';
        this.savingFile.emit(new FileCredentials(guid, password));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    CreateDocumentModalComponent.prototype.refresh = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!$event) {
            this.closing.emit(true);
        }
    };
    CreateDocumentModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-create-document-modal',
                    template: "<gd-modal id=\"gd-create-document\" [title]=\"'Save document'\" (visible)=\"refresh($event)\">\r\n  <section id=\"gd-create-document-section\" class=\"tab-slider-body\">\r\n    <div class=\"gd-create-wrap\">\r\n      <label for=\"name\">Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" [value]=\"!file ? '' : file.guid.replace(FILE_NAME_REGEX, '').split('.')[0]\" #name autofocus/>\r\n      <label for=\"format\">Format</label>\r\n      <gd-select id=\"format\" [disabled]=\"false\" [options]=\"formats\" (selected)=\"selectFormat($event)\" [showSelected]=\"{name : format, value : format}\" class=\"gd-select-format\"></gd-select>\r\n      <gd-button [icon]=\"'save'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"save(name.value)\">Save</gd-button>\r\n    </div>\r\n  </section>\r\n</gd-modal>\r\n",
                    styles: [".gd-create-wrap{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:24px}.gd-create-wrap label{font-size:14px;color:#acacac;padding-bottom:12px}.gd-create-wrap input{margin-bottom:20px;border:1px solid #6e6e6e!important;padding:9px 0 9px 10px;font-size:14px}.gd-create-wrap gd-button{align-self:flex-end}.gd-create-wrap ::ng-deep .button ::ng-deep .text{font-size:10px!important}#gd-create-document-section{width:468px}::ng-deep .gd-select-format .dropdown-menu{height:167px;overflow:hidden;overflow-y:auto;top:241px!important;min-width:0!important;width:70px;border:none!important}::ng-deep .gd-select-format .dropdown-menu .option{font-size:10px;color:#6e6e6e}::ng-deep .gd-select-format .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .select{height:37px;width:70px;border:1px solid #6e6e6e;color:#6e6e6e!important;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}::ng-deep .select .selected-value{padding:9px 0 9px 8px}::ng-deep .select .nav-caret{margin-right:8px}@media (max-width:1037px){#gd-create-document-section{width:100%}}"]
                }] }
    ];
    /** @nocollapse */
    CreateDocumentModalComponent.ctorParameters = function () { return [
        { type: EditorService },
        { type: ModalService },
        { type: ExceptionMessageService }
    ]; };
    CreateDocumentModalComponent.propDecorators = {
        file: [{ type: Input }],
        savingFile: [{ type: Output }],
        closing: [{ type: Output }]
    };
    return CreateDocumentModalComponent;
}());
export { CreateDocumentModalComponent };
if (false) {
    /** @type {?} */
    CreateDocumentModalComponent.prototype.file;
    /** @type {?} */
    CreateDocumentModalComponent.prototype.savingFile;
    /** @type {?} */
    CreateDocumentModalComponent.prototype.closing;
    /**
     * @type {?}
     * @private
     */
    CreateDocumentModalComponent.prototype._format;
    /** @type {?} */
    CreateDocumentModalComponent.prototype.formats;
    /** @type {?} */
    CreateDocumentModalComponent.prototype.FILE_NAME_REGEX;
    /**
     * @type {?}
     * @private
     */
    CreateDocumentModalComponent.prototype._editorService;
    /**
     * @type {?}
     * @private
     */
    CreateDocumentModalComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    CreateDocumentModalComponent.prototype._excMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmRvY3VtZW50LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvY3JlYXRlLmRvY3VtZW50LW1vZGFsL2NyZWF0ZS5kb2N1bWVudC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUNMLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsZUFBZSxFQUNmLFlBQVksRUFDYixNQUFNLCtDQUErQyxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRDtJQWFFLHNDQUFvQixjQUE2QixFQUM3QixhQUEyQixFQUMzQixrQkFBMkM7UUFGM0MsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUF5QjtRQVJyRCxlQUFVLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ2hGLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBR2hELG9CQUFlLEdBQUcsV0FBVyxDQUFDO0lBSzlCLENBQUM7SUFFRCxzQkFBSSxnREFBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBOzs7O0lBRUQsK0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxrREFBVzs7O0lBQVg7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsT0FBaUI7WUFDekQsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxtREFBWTs7OztJQUFaLFVBQWEsTUFBVztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCx5REFBa0I7Ozs7SUFBbEIsVUFBbUIsR0FBVztRQUM1QixPQUFPLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFDLENBQUE7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxvREFBYTs7OztJQUFiLFVBQWMsT0FBTzs7WUFDYixRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQUU7UUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsMkNBQUk7Ozs7SUFBSixVQUFLLElBQVk7O1lBQ1gsUUFBUSxHQUFHLEVBQUU7UUFDakIsSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUN2QixRQUFRLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BEO2FBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUM3RDtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQzs7WUFDaEQsSUFBSSxHQUFHLFFBQVEsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJOztZQUNsRCxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFlLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7SUFFRCw4Q0FBTzs7OztJQUFQLFVBQVEsTUFBZTtRQUNyQixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDOztnQkFwRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLCswQkFBcUQ7O2lCQUV0RDs7OztnQkFOTyxhQUFhO2dCQUZuQixZQUFZO2dCQUZaLHVCQUF1Qjs7O3VCQVl0QixLQUFLOzZCQUNMLE1BQU07MEJBQ04sTUFBTTs7SUE2RFQsbUNBQUM7Q0FBQSxBQXJFRCxJQXFFQztTQWhFWSw0QkFBNEI7OztJQUN2Qyw0Q0FBK0I7O0lBQy9CLGtEQUEwRjs7SUFDMUYsK0NBQWdEOzs7OztJQUNoRCwrQ0FBd0I7O0lBQ3hCLCtDQUFROztJQUNSLHVEQUE4Qjs7Ozs7SUFFbEIsc0RBQXFDOzs7OztJQUNyQyxxREFBbUM7Ozs7O0lBQ25DLDBEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ29tbW9uTW9kYWxzLFxyXG4gIEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlLFxyXG4gIEZpbGVDcmVkZW50aWFscyxcclxuICBNb2RhbFNlcnZpY2VcclxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7RWRpdG9yU2VydmljZX0gZnJvbSBcIi4uL2VkaXRvci5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWNyZWF0ZS1kb2N1bWVudC1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NyZWF0ZS5kb2N1bWVudC1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY3JlYXRlLmRvY3VtZW50LW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENyZWF0ZURvY3VtZW50TW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGZpbGU6IEZpbGVDcmVkZW50aWFscztcclxuICBAT3V0cHV0KCkgc2F2aW5nRmlsZTogRXZlbnRFbWl0dGVyPEZpbGVDcmVkZW50aWFscz4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVDcmVkZW50aWFscz4oKTtcclxuICBAT3V0cHV0KCkgY2xvc2luZyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBwcml2YXRlIF9mb3JtYXQ6IHN0cmluZztcclxuICBmb3JtYXRzO1xyXG4gIEZJTEVfTkFNRV9SRUdFWCA9IC9eLipbXFxcXFxcL10vO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lZGl0b3JTZXJ2aWNlOiBFZGl0b3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2V4Y01lc3NhZ2VTZXJ2aWNlOiBFeGNlcHRpb25NZXNzYWdlU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZvcm1hdCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9mb3JtYXQ7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubG9hZEZvcm1hdHMoKTtcclxuICB9XHJcblxyXG4gIGxvYWRGb3JtYXRzKCkge1xyXG4gICAgdGhpcy5fZWRpdG9yU2VydmljZS5nZXRGb3JtYXRzKCkuc3Vic2NyaWJlKChmb3JtYXRzOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZm9ybWF0cyA9IHRoaXMuZm9ybWF0T3B0aW9ucyhmb3JtYXRzKTtcclxuICAgICAgICB0aGlzLl9mb3JtYXQgPSBcIkRPQ1hcIjtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEZvcm1hdCgkZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5fZm9ybWF0ID0gJGV2ZW50Lm5hbWU7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVGb3JtYXRPcHRpb24odmFsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB7dmFsdWU6IHZhbCwgbmFtZTogdmFsLnRvVXBwZXJDYXNlKCl9XHJcbiAgfVxyXG5cclxuICBmb3JtYXRPcHRpb25zKGZvcm1hdHMpIHtcclxuICAgIGNvbnN0IGFsbFR5cGVzID0gbmV3IEFycmF5KCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1hdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYWxsVHlwZXMucHVzaCh0aGlzLmNyZWF0ZUZvcm1hdE9wdGlvbihmb3JtYXRzW2ldKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWxsVHlwZXM7XHJcbiAgfVxyXG5cclxuICBzYXZlKG5hbWU6IHN0cmluZykge1xyXG4gICAgbGV0IGZpbGVOYW1lID0gXCJcIjtcclxuICAgIGlmIChuYW1lICYmIG5hbWUgIT09IFwiXCIpIHtcclxuICAgICAgZmlsZU5hbWUgPSBuYW1lICsgXCIuXCIgKyB0aGlzLl9mb3JtYXQudG9Mb3dlckNhc2UoKTtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMuZmlsZSkge1xyXG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuRXJyb3JNZXNzYWdlKTtcclxuICAgICAgdGhpcy5fZXhjTWVzc2FnZVNlcnZpY2UuY2hhbmdlTWVzc2FnZShcIkZpbGUgbmFtZSBpcyBlbXB0eVwiKTtcclxuICAgIH1cclxuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShDb21tb25Nb2RhbHMuQ3JlYXRlRG9jdW1lbnQpO1xyXG4gICAgY29uc3QgZ3VpZCA9IGZpbGVOYW1lICE9PSBcIlwiID8gZmlsZU5hbWUgOiB0aGlzLmZpbGUuZ3VpZDtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5maWxlID8gdGhpcy5maWxlLnBhc3N3b3JkIDogJyc7XHJcbiAgICB0aGlzLnNhdmluZ0ZpbGUuZW1pdChuZXcgRmlsZUNyZWRlbnRpYWxzKGd1aWQsIHBhc3N3b3JkKSk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoKCRldmVudDogYm9vbGVhbikge1xyXG4gICAgaWYgKCEkZXZlbnQpIHtcclxuICAgICAgdGhpcy5jbG9zaW5nLmVtaXQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==