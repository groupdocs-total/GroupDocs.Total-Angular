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
            this._format = "Docx";
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectFormat($event) {
        this._format = $event;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    createFormatOption(val) {
        return { value: val, name: val };
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
            fileName = name + "." + this._format;
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
                template: "<gd-modal id=\"gd-create-document\" [title]=\"'Save document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-create-document-section\" class=\"tab-slider-body\">\n    <div class=\"inner-addon left-addon btn gd-create-wrap\" id=\"gd-create-wrap\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter file name without extension\" [value]=\"!file ? '' : file.guid.replace(FILE_NAME_REGEX, '').split('.')[0]\" #name autofocus/>\n      <span>\n        Select file type\n      </span>\n      <gd-select [disabled]=\"false\" [options]=\"formats\" (selected)=\"selectFormat($event)\" [showSelected]=\"format\" class=\"gd-select-format\"></gd-select>\n      <button class=\"btn btn-primary gd-create-submit\" (click)=\"save(name.value)\">Save</button>\n    </div>\n  </section>\n</gd-modal>\n",
                styles: [".gd-create-wrap{display:flex;padding:20px}.gd-create-wrap div{display:flex}.gd-create-wrap input{width:204px}span{margin-left:15px;margin-right:15px}/deep/ .gd-select-format .dropdown-menu{height:150px;overflow:hidden;overflow-y:auto;top:89px!important;left:356px;min-width:0!important;width:90px}.gd-create-submit{margin-left:10px;width:49px;height:24px;color:#fff;background-color:#25c2d4;border:0}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmRvY3VtZW50LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvY3JlYXRlLmRvY3VtZW50LW1vZGFsL2NyZWF0ZS5kb2N1bWVudC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUNMLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsZUFBZSxFQUNmLFlBQVksRUFDYixNQUFNLCtDQUErQyxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQU9oRCxNQUFNLE9BQU8sNEJBQTRCOzs7Ozs7SUFRdkMsWUFBb0IsY0FBNkIsRUFDN0IsYUFBMkIsRUFDM0Isa0JBQTJDO1FBRjNDLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBeUI7UUFSckQsZUFBVSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUNoRixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUdoRCxvQkFBZSxHQUFHLFdBQVcsQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxPQUFpQixFQUFFLEVBQUU7WUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsTUFBVztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLEdBQVc7UUFDNUIsT0FBTyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBQyxDQUFBO0lBQ2hDLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQU87O2NBQ2IsUUFBUSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxJQUFZOztZQUNYLFFBQVEsR0FBRyxFQUFFO1FBQ2pCLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7WUFDdkIsUUFBUSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN0QzthQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDN0Q7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7O2NBQ2hELElBQUksR0FBRyxRQUFRLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTs7Y0FDbEQsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksZUFBZSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE1BQWU7UUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7O1lBcEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxxekJBQXFEOzthQUV0RDs7OztZQU5PLGFBQWE7WUFGbkIsWUFBWTtZQUZaLHVCQUF1Qjs7O21CQVl0QixLQUFLO3lCQUNMLE1BQU07c0JBQ04sTUFBTTs7OztJQUZQLDRDQUErQjs7SUFDL0Isa0RBQTBGOztJQUMxRiwrQ0FBZ0Q7Ozs7O0lBQ2hELCtDQUF3Qjs7SUFDeEIsK0NBQVE7O0lBQ1IsdURBQThCOzs7OztJQUVsQixzREFBcUM7Ozs7O0lBQ3JDLHFEQUFtQzs7Ozs7SUFDbkMsMERBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbW1vbk1vZGFscyxcbiAgRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UsXG4gIEZpbGVDcmVkZW50aWFscyxcbiAgTW9kYWxTZXJ2aWNlXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7RWRpdG9yU2VydmljZX0gZnJvbSBcIi4uL2VkaXRvci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWNyZWF0ZS1kb2N1bWVudC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jcmVhdGUuZG9jdW1lbnQtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jcmVhdGUuZG9jdW1lbnQtbW9kYWwuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVEb2N1bWVudE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZmlsZTogRmlsZUNyZWRlbnRpYWxzO1xuICBAT3V0cHV0KCkgc2F2aW5nRmlsZTogRXZlbnRFbWl0dGVyPEZpbGVDcmVkZW50aWFscz4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVDcmVkZW50aWFscz4oKTtcbiAgQE91dHB1dCgpIGNsb3NpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgX2Zvcm1hdDogc3RyaW5nO1xuICBmb3JtYXRzO1xuICBGSUxFX05BTUVfUkVHRVggPSAvXi4qW1xcXFxcXC9dLztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lZGl0b3JTZXJ2aWNlOiBFZGl0b3JTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZXhjTWVzc2FnZVNlcnZpY2U6IEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlKSB7XG4gIH1cblxuICBnZXQgZm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRGb3JtYXRzKCk7XG4gIH1cblxuICBsb2FkRm9ybWF0cygpIHtcbiAgICB0aGlzLl9lZGl0b3JTZXJ2aWNlLmdldEZvcm1hdHMoKS5zdWJzY3JpYmUoKGZvcm1hdHM6IHN0cmluZ1tdKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybWF0cyA9IHRoaXMuZm9ybWF0T3B0aW9ucyhmb3JtYXRzKTtcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gXCJEb2N4XCI7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHNlbGVjdEZvcm1hdCgkZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuX2Zvcm1hdCA9ICRldmVudDtcbiAgfVxuXG4gIGNyZWF0ZUZvcm1hdE9wdGlvbih2YWw6IHN0cmluZykge1xuICAgIHJldHVybiB7dmFsdWU6IHZhbCwgbmFtZTogdmFsfVxuICB9XG5cbiAgZm9ybWF0T3B0aW9ucyhmb3JtYXRzKSB7XG4gICAgY29uc3QgYWxsVHlwZXMgPSBuZXcgQXJyYXkoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1hdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFsbFR5cGVzLnB1c2godGhpcy5jcmVhdGVGb3JtYXRPcHRpb24oZm9ybWF0c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gYWxsVHlwZXM7XG4gIH1cblxuICBzYXZlKG5hbWU6IHN0cmluZykge1xuICAgIGxldCBmaWxlTmFtZSA9IFwiXCI7XG4gICAgaWYgKG5hbWUgJiYgbmFtZSAhPT0gXCJcIikge1xuICAgICAgZmlsZU5hbWUgPSBuYW1lICsgXCIuXCIgKyB0aGlzLl9mb3JtYXQ7XG4gICAgfSBlbHNlIGlmICghdGhpcy5maWxlKSB7XG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuRXJyb3JNZXNzYWdlKTtcbiAgICAgIHRoaXMuX2V4Y01lc3NhZ2VTZXJ2aWNlLmNoYW5nZU1lc3NhZ2UoXCJGaWxlIG5hbWUgaXMgZW1wdHlcIik7XG4gICAgfVxuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShDb21tb25Nb2RhbHMuQ3JlYXRlRG9jdW1lbnQpO1xuICAgIGNvbnN0IGd1aWQgPSBmaWxlTmFtZSAhPT0gXCJcIiA/IGZpbGVOYW1lIDogdGhpcy5maWxlLmd1aWQ7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLmZpbGUgPyB0aGlzLmZpbGUucGFzc3dvcmQgOiAnJztcbiAgICB0aGlzLnNhdmluZ0ZpbGUuZW1pdChuZXcgRmlsZUNyZWRlbnRpYWxzKGd1aWQsIHBhc3N3b3JkKSk7XG4gIH1cblxuICByZWZyZXNoKCRldmVudDogYm9vbGVhbikge1xuICAgIGlmICghJGV2ZW50KSB7XG4gICAgICB0aGlzLmNsb3NpbmcuZW1pdCh0cnVlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==