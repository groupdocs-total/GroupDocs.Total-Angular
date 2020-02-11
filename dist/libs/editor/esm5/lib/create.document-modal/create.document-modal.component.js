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
            _this._format = "Docx";
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
        this._format = $event.value;
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
        return { value: val, name: val };
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
            fileName = name + "." + this._format;
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
                    template: "<gd-modal id=\"gd-create-document\" [title]=\"'Save document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-create-document-section\" class=\"tab-slider-body\">\n    <div class=\"gd-create-wrap\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" [value]=\"!file ? '' : file.guid.replace(FILE_NAME_REGEX, '').split('.')[0]\" #name autofocus/>\n      <label for=\"format\">Format</label>\n      <gd-select id=\"format\" [disabled]=\"false\" [options]=\"formats\" (selected)=\"selectFormat($event)\" [showSelected]=\"{name : format, value : format}\" class=\"gd-select-format\"></gd-select>\n      <gd-button [icon]=\"'save'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"save(name.value)\">Save</gd-button>\n    </div>\n  </section>\n</gd-modal>\n",
                    styles: [".gd-create-wrap{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:24px}.gd-create-wrap label{font-size:14px;color:#acacac;padding-bottom:12px}.gd-create-wrap input{margin-bottom:20px;border:1px solid #6e6e6e!important;padding:9px 0 9px 10px;font-size:14px}.gd-create-wrap gd-button{align-self:flex-end}.gd-create-wrap ::ng-deep .button ::ng-deep .text{font-size:10px!important}#gd-create-document-section{width:468px}::ng-deep .gd-select-format .dropdown-menu{height:167px;overflow:hidden;overflow-y:auto;top:239px!important;min-width:0!important;width:65px;border:none!important}::ng-deep .gd-select-format .dropdown-menu .option{font-size:10px;color:#6e6e6e}::ng-deep .gd-select-format .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .select{height:35px;width:63px;border:1px solid #6e6e6e;color:#6e6e6e!important;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}::ng-deep .select .selected-value{padding:9px 0 9px 8px}::ng-deep .select .nav-caret{margin-right:8px}@media (max-width:1037px){#gd-create-document-section{width:100%}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmRvY3VtZW50LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvY3JlYXRlLmRvY3VtZW50LW1vZGFsL2NyZWF0ZS5kb2N1bWVudC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUNMLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsZUFBZSxFQUNmLFlBQVksRUFDYixNQUFNLCtDQUErQyxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRDtJQWFFLHNDQUFvQixjQUE2QixFQUM3QixhQUEyQixFQUMzQixrQkFBMkM7UUFGM0MsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUF5QjtRQVJyRCxlQUFVLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ2hGLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBR2hELG9CQUFlLEdBQUcsV0FBVyxDQUFDO0lBSzlCLENBQUM7SUFFRCxzQkFBSSxnREFBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBOzs7O0lBRUQsK0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxrREFBVzs7O0lBQVg7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsT0FBaUI7WUFDekQsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxtREFBWTs7OztJQUFaLFVBQWEsTUFBVztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCx5REFBa0I7Ozs7SUFBbEIsVUFBbUIsR0FBVztRQUM1QixPQUFPLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDLENBQUE7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxvREFBYTs7OztJQUFiLFVBQWMsT0FBTzs7WUFDYixRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQUU7UUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsMkNBQUk7Ozs7SUFBSixVQUFLLElBQVk7O1lBQ1gsUUFBUSxHQUFHLEVBQUU7UUFDakIsSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUN2QixRQUFRLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3RDO2FBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUM3RDtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQzs7WUFDaEQsSUFBSSxHQUFHLFFBQVEsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJOztZQUNsRCxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFlLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7SUFFRCw4Q0FBTzs7OztJQUFQLFVBQVEsTUFBZTtRQUNyQixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDOztnQkFwRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLHl6QkFBcUQ7O2lCQUV0RDs7OztnQkFOTyxhQUFhO2dCQUZuQixZQUFZO2dCQUZaLHVCQUF1Qjs7O3VCQVl0QixLQUFLOzZCQUNMLE1BQU07MEJBQ04sTUFBTTs7SUE2RFQsbUNBQUM7Q0FBQSxBQXJFRCxJQXFFQztTQWhFWSw0QkFBNEI7OztJQUN2Qyw0Q0FBK0I7O0lBQy9CLGtEQUEwRjs7SUFDMUYsK0NBQWdEOzs7OztJQUNoRCwrQ0FBd0I7O0lBQ3hCLCtDQUFROztJQUNSLHVEQUE4Qjs7Ozs7SUFFbEIsc0RBQXFDOzs7OztJQUNyQyxxREFBbUM7Ozs7O0lBQ25DLDBEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb21tb25Nb2RhbHMsXG4gIEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlLFxuICBGaWxlQ3JlZGVudGlhbHMsXG4gIE1vZGFsU2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge0VkaXRvclNlcnZpY2V9IGZyb20gXCIuLi9lZGl0b3Iuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1jcmVhdGUtZG9jdW1lbnQtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3JlYXRlLmRvY3VtZW50LW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3JlYXRlLmRvY3VtZW50LW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlRG9jdW1lbnRNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZpbGU6IEZpbGVDcmVkZW50aWFscztcbiAgQE91dHB1dCgpIHNhdmluZ0ZpbGU6IEV2ZW50RW1pdHRlcjxGaWxlQ3JlZGVudGlhbHM+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlQ3JlZGVudGlhbHM+KCk7XG4gIEBPdXRwdXQoKSBjbG9zaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBwcml2YXRlIF9mb3JtYXQ6IHN0cmluZztcbiAgZm9ybWF0cztcbiAgRklMRV9OQU1FX1JFR0VYID0gL14uKltcXFxcXFwvXS87XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWRpdG9yU2VydmljZTogRWRpdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2V4Y01lc3NhZ2VTZXJ2aWNlOiBFeGNlcHRpb25NZXNzYWdlU2VydmljZSkge1xuICB9XG5cbiAgZ2V0IGZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkRm9ybWF0cygpO1xuICB9XG5cbiAgbG9hZEZvcm1hdHMoKSB7XG4gICAgdGhpcy5fZWRpdG9yU2VydmljZS5nZXRGb3JtYXRzKCkuc3Vic2NyaWJlKChmb3JtYXRzOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgICB0aGlzLmZvcm1hdHMgPSB0aGlzLmZvcm1hdE9wdGlvbnMoZm9ybWF0cyk7XG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9IFwiRG9jeFwiO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBzZWxlY3RGb3JtYXQoJGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLl9mb3JtYXQgPSAkZXZlbnQudmFsdWU7XG4gIH1cblxuICBjcmVhdGVGb3JtYXRPcHRpb24odmFsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4ge3ZhbHVlOiB2YWwsIG5hbWU6IHZhbH1cbiAgfVxuXG4gIGZvcm1hdE9wdGlvbnMoZm9ybWF0cykge1xuICAgIGNvbnN0IGFsbFR5cGVzID0gbmV3IEFycmF5KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtYXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhbGxUeXBlcy5wdXNoKHRoaXMuY3JlYXRlRm9ybWF0T3B0aW9uKGZvcm1hdHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGFsbFR5cGVzO1xuICB9XG5cbiAgc2F2ZShuYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgZmlsZU5hbWUgPSBcIlwiO1xuICAgIGlmIChuYW1lICYmIG5hbWUgIT09IFwiXCIpIHtcbiAgICAgIGZpbGVOYW1lID0gbmFtZSArIFwiLlwiICsgdGhpcy5fZm9ybWF0O1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuZmlsZSkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkVycm9yTWVzc2FnZSk7XG4gICAgICB0aGlzLl9leGNNZXNzYWdlU2VydmljZS5jaGFuZ2VNZXNzYWdlKFwiRmlsZSBuYW1lIGlzIGVtcHR5XCIpO1xuICAgIH1cbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoQ29tbW9uTW9kYWxzLkNyZWF0ZURvY3VtZW50KTtcbiAgICBjb25zdCBndWlkID0gZmlsZU5hbWUgIT09IFwiXCIgPyBmaWxlTmFtZSA6IHRoaXMuZmlsZS5ndWlkO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5maWxlID8gdGhpcy5maWxlLnBhc3N3b3JkIDogJyc7XG4gICAgdGhpcy5zYXZpbmdGaWxlLmVtaXQobmV3IEZpbGVDcmVkZW50aWFscyhndWlkLCBwYXNzd29yZCkpO1xuICB9XG5cbiAgcmVmcmVzaCgkZXZlbnQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoISRldmVudCkge1xuICAgICAgdGhpcy5jbG9zaW5nLmVtaXQodHJ1ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=