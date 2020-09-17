/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModals, ExceptionMessageService, FileCredentials, ModalService } from "@groupdocs.examples.angular/common-components";
import { EditorService } from "../editor.service";
export class CreateDocumentModalComponent {
    /**
     * @param {?} _editorService
     * @param {?} _modalService
     * @param {?} _excMessageService
     */
    constructor(_editorService, _modalService, _excMessageService) {
        this._editorService = _editorService;
        this._modalService = _modalService;
        this._excMessageService = _excMessageService;
        this.savingFile = new EventEmitter();
        this.closing = new EventEmitter();
        this.FILE_NAME_REGEX = /^.*[\\\/]/;
    }
    /**
     * @return {?}
     */
    get format() {
        return this._format;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loadFormats();
    }
    /**
     * @return {?}
     */
    loadFormats() {
        this._editorService.getFormats().subscribe((/**
         * @param {?} formats
         * @return {?}
         */
        (formats) => {
            this.formats = this.formatOptions(formats);
            this._format = "DOCX";
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectFormat($event) {
        this._format = $event.name;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    createFormatOption(val) {
        return { value: val, name: val.toUpperCase() };
    }
    /**
     * @param {?} formats
     * @return {?}
     */
    formatOptions(formats) {
        /** @type {?} */
        const allTypes = new Array();
        for (let i = 0; i < formats.length; i++) {
            allTypes.push(this.createFormatOption(formats[i]));
        }
        return allTypes;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    save(name) {
        /** @type {?} */
        let fileName = "";
        if (name && name !== "") {
            fileName = name + "." + this._format.toLowerCase();
        }
        else if (!this.file) {
            this._modalService.open(CommonModals.ErrorMessage);
            this._excMessageService.changeMessage("File name is empty");
        }
        this._modalService.close(CommonModals.CreateDocument);
        /** @type {?} */
        const guid = fileName !== "" ? fileName : this.file.guid;
        /** @type {?} */
        const password = this.file ? this.file.password : '';
        this.savingFile.emit(new FileCredentials(guid, password));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    refresh($event) {
        if (!$event) {
            this.closing.emit(true);
        }
    }
}
CreateDocumentModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-create-document-modal',
                template: "<gd-modal id=\"gd-create-document\" [title]=\"'Save document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-create-document-section\" class=\"tab-slider-body\">\n    <div class=\"gd-create-wrap\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" [value]=\"!file ? '' : file.guid.replace(FILE_NAME_REGEX, '').split('.')[0]\" #name autofocus/>\n      <label for=\"format\">Format</label>\n      <gd-select id=\"format\" [disabled]=\"false\" [options]=\"formats\" (selected)=\"selectFormat($event)\" [showSelected]=\"{name : format, value : format}\" class=\"gd-select-format\"></gd-select>\n      <gd-button [icon]=\"'save'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"save(name.value)\">Save</gd-button>\n    </div>\n  </section>\n</gd-modal>\n",
                styles: [".gd-create-wrap{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:24px}.gd-create-wrap label{font-size:14px;color:#acacac;padding-bottom:12px}.gd-create-wrap input{margin-bottom:20px;border:1px solid #6e6e6e!important;padding:9px 0 9px 10px;font-size:14px}.gd-create-wrap gd-button{align-self:flex-end}.gd-create-wrap ::ng-deep .button ::ng-deep .text{font-size:10px!important}#gd-create-document-section{width:468px}::ng-deep .gd-select-format .dropdown-menu{height:167px;overflow:hidden;overflow-y:auto;top:241px!important;min-width:0!important;width:70px;border:none!important}::ng-deep .gd-select-format .dropdown-menu .option{font-size:10px;color:#6e6e6e}::ng-deep .gd-select-format .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .select{height:37px;width:70px;border:1px solid #6e6e6e;color:#6e6e6e!important;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}::ng-deep .select .selected-value{padding:9px 0 9px 8px}::ng-deep .select .nav-caret{margin-right:8px}@media (max-width:1037px){#gd-create-document-section{width:100%}}"]
            }] }
];
/** @nocollapse */
CreateDocumentModalComponent.ctorParameters = () => [
    { type: EditorService },
    { type: ModalService },
    { type: ExceptionMessageService }
];
CreateDocumentModalComponent.propDecorators = {
    file: [{ type: Input }],
    savingFile: [{ type: Output }],
    closing: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmRvY3VtZW50LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvY3JlYXRlLmRvY3VtZW50LW1vZGFsL2NyZWF0ZS5kb2N1bWVudC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUNMLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsZUFBZSxFQUNmLFlBQVksRUFDYixNQUFNLCtDQUErQyxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQU9oRCxNQUFNLE9BQU8sNEJBQTRCOzs7Ozs7SUFRdkMsWUFBb0IsY0FBNkIsRUFDN0IsYUFBMkIsRUFDM0Isa0JBQTJDO1FBRjNDLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBeUI7UUFSckQsZUFBVSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUNoRixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUdoRCxvQkFBZSxHQUFHLFdBQVcsQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxPQUFpQixFQUFFLEVBQUU7WUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsTUFBVztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxHQUFXO1FBQzVCLE9BQU8sRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQTtJQUM5QyxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxPQUFPOztjQUNiLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBRTtRQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsSUFBWTs7WUFDWCxRQUFRLEdBQUcsRUFBRTtRQUNqQixJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ3ZCLFFBQVEsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEQ7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDOztjQUNoRCxJQUFJLEdBQUcsUUFBUSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7O2NBQ2xELFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxNQUFlO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7OztZQXBFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMseXpCQUFxRDs7YUFFdEQ7Ozs7WUFOTyxhQUFhO1lBRm5CLFlBQVk7WUFGWix1QkFBdUI7OzttQkFZdEIsS0FBSzt5QkFDTCxNQUFNO3NCQUNOLE1BQU07Ozs7SUFGUCw0Q0FBK0I7O0lBQy9CLGtEQUEwRjs7SUFDMUYsK0NBQWdEOzs7OztJQUNoRCwrQ0FBd0I7O0lBQ3hCLCtDQUFROztJQUNSLHVEQUE4Qjs7Ozs7SUFFbEIsc0RBQXFDOzs7OztJQUNyQyxxREFBbUM7Ozs7O0lBQ25DLDBEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb21tb25Nb2RhbHMsXG4gIEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlLFxuICBGaWxlQ3JlZGVudGlhbHMsXG4gIE1vZGFsU2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge0VkaXRvclNlcnZpY2V9IGZyb20gXCIuLi9lZGl0b3Iuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1jcmVhdGUtZG9jdW1lbnQtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3JlYXRlLmRvY3VtZW50LW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3JlYXRlLmRvY3VtZW50LW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlRG9jdW1lbnRNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZpbGU6IEZpbGVDcmVkZW50aWFscztcbiAgQE91dHB1dCgpIHNhdmluZ0ZpbGU6IEV2ZW50RW1pdHRlcjxGaWxlQ3JlZGVudGlhbHM+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlQ3JlZGVudGlhbHM+KCk7XG4gIEBPdXRwdXQoKSBjbG9zaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBwcml2YXRlIF9mb3JtYXQ6IHN0cmluZztcbiAgZm9ybWF0cztcbiAgRklMRV9OQU1FX1JFR0VYID0gL14uKltcXFxcXFwvXS87XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWRpdG9yU2VydmljZTogRWRpdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2V4Y01lc3NhZ2VTZXJ2aWNlOiBFeGNlcHRpb25NZXNzYWdlU2VydmljZSkge1xuICB9XG5cbiAgZ2V0IGZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkRm9ybWF0cygpO1xuICB9XG5cbiAgbG9hZEZvcm1hdHMoKSB7XG4gICAgdGhpcy5fZWRpdG9yU2VydmljZS5nZXRGb3JtYXRzKCkuc3Vic2NyaWJlKChmb3JtYXRzOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgICB0aGlzLmZvcm1hdHMgPSB0aGlzLmZvcm1hdE9wdGlvbnMoZm9ybWF0cyk7XG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9IFwiRE9DWFwiO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBzZWxlY3RGb3JtYXQoJGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLl9mb3JtYXQgPSAkZXZlbnQubmFtZTtcbiAgfVxuXG4gIGNyZWF0ZUZvcm1hdE9wdGlvbih2YWw6IHN0cmluZykge1xuICAgIHJldHVybiB7dmFsdWU6IHZhbCwgbmFtZTogdmFsLnRvVXBwZXJDYXNlKCl9XG4gIH1cblxuICBmb3JtYXRPcHRpb25zKGZvcm1hdHMpIHtcbiAgICBjb25zdCBhbGxUeXBlcyA9IG5ldyBBcnJheSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybWF0cy5sZW5ndGg7IGkrKykge1xuICAgICAgYWxsVHlwZXMucHVzaCh0aGlzLmNyZWF0ZUZvcm1hdE9wdGlvbihmb3JtYXRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBhbGxUeXBlcztcbiAgfVxuXG4gIHNhdmUobmFtZTogc3RyaW5nKSB7XG4gICAgbGV0IGZpbGVOYW1lID0gXCJcIjtcbiAgICBpZiAobmFtZSAmJiBuYW1lICE9PSBcIlwiKSB7XG4gICAgICBmaWxlTmFtZSA9IG5hbWUgKyBcIi5cIiArIHRoaXMuX2Zvcm1hdC50b0xvd2VyQ2FzZSgpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuZmlsZSkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkVycm9yTWVzc2FnZSk7XG4gICAgICB0aGlzLl9leGNNZXNzYWdlU2VydmljZS5jaGFuZ2VNZXNzYWdlKFwiRmlsZSBuYW1lIGlzIGVtcHR5XCIpO1xuICAgIH1cbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoQ29tbW9uTW9kYWxzLkNyZWF0ZURvY3VtZW50KTtcbiAgICBjb25zdCBndWlkID0gZmlsZU5hbWUgIT09IFwiXCIgPyBmaWxlTmFtZSA6IHRoaXMuZmlsZS5ndWlkO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5maWxlID8gdGhpcy5maWxlLnBhc3N3b3JkIDogJyc7XG4gICAgdGhpcy5zYXZpbmdGaWxlLmVtaXQobmV3IEZpbGVDcmVkZW50aWFscyhndWlkLCBwYXNzd29yZCkpO1xuICB9XG5cbiAgcmVmcmVzaCgkZXZlbnQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoISRldmVudCkge1xuICAgICAgdGhpcy5jbG9zaW5nLmVtaXQodHJ1ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=