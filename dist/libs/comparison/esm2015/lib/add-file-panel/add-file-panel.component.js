/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModals, ExceptionMessageService, FileUtil, ModalService } from "@groupdocs.examples.angular/common-components";
export class States {
}
States.Empty = 'empty';
States.Opened = 'opened';
if (false) {
    /** @type {?} */
    States.Empty;
    /** @type {?} */
    States.Opened;
}
export class AddFilePanelComponent {
    /**
     * @param {?} _modalService
     * @param {?} _excMessageService
     */
    constructor(_modalService, _excMessageService) {
        this._modalService = _modalService;
        this._excMessageService = _excMessageService;
        this.active = new EventEmitter();
        this.urlForUpload = new EventEmitter();
        this.cleanPanel = new EventEmitter();
        this.state = States.Empty;
        this.uploadDisabled = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    getFormatIcon() {
        return FileUtil.find(this.fileName, false).icon;
    }
    /**
     * @return {?}
     */
    openModal() {
        this.active.emit(this.panel);
        this._modalService.open(CommonModals.BrowseFiles);
    }
    /**
     * @return {?}
     */
    isEmpty() {
        return this.state === States.Empty;
    }
    /**
     * @return {?}
     */
    cleanFile() {
        this.active.emit(this.panel);
        this.cleanPanel.emit(true);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    uploadUrl(url) {
        if (this.uploadDisabled) {
            return;
        }
        if (url && (url.startsWith('http') || url.startsWith('file') || url.startsWith('ftp'))) {
            this.active.emit(this.panel);
            this.urlForUpload.emit(url);
        }
        else {
            this._modalService.open(CommonModals.ErrorMessage);
            this._excMessageService.changeMessage("Wrong url");
        }
    }
    /**
     * @param {?} url
     * @return {?}
     */
    checkDisabled(url) {
        this.uploadDisabled = url ? url.length === 0 : true;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.fileName) {
            this.state = States.Opened;
        }
        else {
            this.state = States.Empty;
        }
    }
}
AddFilePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-add-file-panel',
                template: "<div class=\"wrapper\">\n  <div class=\"upload-wrapper\" *ngIf=\"isEmpty()\">\n    <gd-button [icon]=\"'arrow-right'\" [tooltip]=\"'Upload file'\" (click)=\"uploadUrl(url.value)\" [disabled]=\"uploadDisabled\" ></gd-button>\n    <input class=\"url-input\" #url (keyup)=\"checkDisabled(url.value)\" (keyup.enter)=\"uploadUrl(url.value)\" placeholder=\"https://\">\n  </div>\n  <fa-icon *ngIf=\"!isEmpty()\" [icon]=\"['fas',getFormatIcon()]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon()\"></fa-icon>\n  <span *ngIf=\"!isEmpty()\" class=\"compare-file-name\">{{fileName}}</span>\n  <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Open file'\" (click)=\"openModal()\" *ngIf=\"isEmpty()\"></gd-button>\n  <gd-button [icon]=\"'times'\" [tooltip]=\"'Close file'\" (click)=\"cleanFile()\" *ngIf=\"!isEmpty()\"></gd-button>\n</div>\n",
                styles: [":host{border-bottom:1px solid #ccc}:host ::ng-deep gd-button .button{font-size:14px!important}.wrapper{height:37px;background-color:#fff;display:-webkit-box;display:flex}.upload-wrapper{display:-webkit-box;display:flex;width:100%}.url-input{border:0;height:37px;width:100%;padding-left:5px;margin:0;padding-top:0;padding-bottom:0;outline:0;color:#959da5;opacity:.5;font-style:italic}.compare-file-name{color:#6e6e6e;margin:8px 8px 8px 0;width:100%;text-align:left;font-size:13px;opacity:.5}.ng-fa-icon{color:#959da5;margin:9px 15px 0 13px;font-size:14px}.compare-file{width:100%;border-right:2px solid #ddd}.wrapper .ng-fa-icon.fa-file-pdf{color:#e04e4e}.wrapper .ng-fa-icon.fa-file-word{color:#539cf0}.wrapper .ng-fa-icon.fa-file-powerpoint{color:#e29e1e}.wrapper .ng-fa-icon.fa-file-excel{color:#7cbc46}.wrapper .ng-fa-icon.fa-file-image{color:#c375ed}.wrapper .ng-fa-icon.fa-file,.wrapper .ng-fa-icon.fa-file-alt,.wrapper .ng-fa-icon.fa-file-text .fa-folder{color:#4b566c}.wrapper ::ng-deep gd-button .button fa-icon{color:#6e6e6e}::ng-deep gd-tab .gd-tab .title{font-size:13px;font-weight:700;color:#959da5;opacity:.4}::ng-deep gd-tab .gd-tab.active .title{color:#3e4e5a!important;opacity:1}"]
            }] }
];
/** @nocollapse */
AddFilePanelComponent.ctorParameters = () => [
    { type: ModalService },
    { type: ExceptionMessageService }
];
AddFilePanelComponent.propDecorators = {
    panel: [{ type: Input }],
    active: [{ type: Output }],
    urlForUpload: [{ type: Output }],
    cleanPanel: [{ type: Output }],
    fileName: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AddFilePanelComponent.prototype.panel;
    /** @type {?} */
    AddFilePanelComponent.prototype.active;
    /** @type {?} */
    AddFilePanelComponent.prototype.urlForUpload;
    /** @type {?} */
    AddFilePanelComponent.prototype.cleanPanel;
    /** @type {?} */
    AddFilePanelComponent.prototype.state;
    /** @type {?} */
    AddFilePanelComponent.prototype.fileName;
    /** @type {?} */
    AddFilePanelComponent.prototype.uploadDisabled;
    /**
     * @type {?}
     * @private
     */
    AddFilePanelComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    AddFilePanelComponent.prototype._excMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWZpbGUtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvYWRkLWZpbGUtcGFuZWwvYWRkLWZpbGUtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUNMLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsUUFBUSxFQUNSLFlBQVksRUFDYixNQUFNLCtDQUErQyxDQUFDO0FBRXZELE1BQU0sT0FBTyxNQUFNOztBQUNWLFlBQUssR0FBRyxPQUFPLENBQUM7QUFDaEIsYUFBTSxHQUFHLFFBQVEsQ0FBQzs7O0lBRHpCLGFBQXVCOztJQUN2QixjQUF5Qjs7QUFRM0IsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFTaEMsWUFBb0IsYUFBMkIsRUFDM0Isa0JBQTJDO1FBRDNDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBeUI7UUFSckQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDcEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzFDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ25ELFVBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBRXJCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO0lBSXRCLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBVztRQUNuQixJQUFHLElBQUksQ0FBQyxjQUFjLEVBQUM7WUFDckIsT0FBTTtTQUNQO1FBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3RGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxHQUFXO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDNUI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUMzQjtJQUNILENBQUM7OztZQTlERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsczBCQUE4Qzs7YUFFL0M7Ozs7WUFaQyxZQUFZO1lBRlosdUJBQXVCOzs7b0JBZ0J0QixLQUFLO3FCQUNMLE1BQU07MkJBQ04sTUFBTTt5QkFDTixNQUFNO3VCQUVOLEtBQUs7Ozs7SUFMTixzQ0FBdUI7O0lBQ3ZCLHVDQUE4Qzs7SUFDOUMsNkNBQW9EOztJQUNwRCwyQ0FBbUQ7O0lBQ25ELHNDQUFxQjs7SUFDckIseUNBQTBCOztJQUMxQiwrQ0FBc0I7Ozs7O0lBRVYsOENBQW1DOzs7OztJQUNuQyxtREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb21tb25Nb2RhbHMsXG4gIEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlLFxuICBGaWxlVXRpbCxcbiAgTW9kYWxTZXJ2aWNlXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXRlcyB7XG4gIHN0YXRpYyBFbXB0eSA9ICdlbXB0eSc7XG4gIHN0YXRpYyBPcGVuZWQgPSAnb3BlbmVkJztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtYWRkLWZpbGUtcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLWZpbGUtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGQtZmlsZS1wYW5lbC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFkZEZpbGVQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgcGFuZWw6IHN0cmluZztcbiAgQE91dHB1dCgpIGFjdGl2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgdXJsRm9yVXBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBjbGVhblBhbmVsID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBzdGF0ZSA9IFN0YXRlcy5FbXB0eTtcbiAgQElucHV0KCkgZmlsZU5hbWU6IHN0cmluZztcbiAgdXBsb2FkRGlzYWJsZWQgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9leGNNZXNzYWdlU2VydmljZTogRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZ2V0Rm9ybWF0SWNvbigpIHtcbiAgICByZXR1cm4gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGVOYW1lLCBmYWxzZSkuaWNvbjtcbiAgfVxuXG4gIG9wZW5Nb2RhbCgpIHtcbiAgICB0aGlzLmFjdGl2ZS5lbWl0KHRoaXMucGFuZWwpO1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcyk7XG4gIH1cblxuICBpc0VtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBTdGF0ZXMuRW1wdHk7XG4gIH1cblxuICBjbGVhbkZpbGUoKSB7XG4gICAgdGhpcy5hY3RpdmUuZW1pdCh0aGlzLnBhbmVsKTtcbiAgICB0aGlzLmNsZWFuUGFuZWwuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIHVwbG9hZFVybCh1cmw6IHN0cmluZykge1xuICAgIGlmKHRoaXMudXBsb2FkRGlzYWJsZWQpe1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh1cmwgJiYgKHVybC5zdGFydHNXaXRoKCdodHRwJykgfHwgdXJsLnN0YXJ0c1dpdGgoJ2ZpbGUnKSB8fCB1cmwuc3RhcnRzV2l0aCgnZnRwJykpKSB7XG4gICAgICB0aGlzLmFjdGl2ZS5lbWl0KHRoaXMucGFuZWwpO1xuICAgICAgdGhpcy51cmxGb3JVcGxvYWQuZW1pdCh1cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuRXJyb3JNZXNzYWdlKTtcbiAgICAgIHRoaXMuX2V4Y01lc3NhZ2VTZXJ2aWNlLmNoYW5nZU1lc3NhZ2UoXCJXcm9uZyB1cmxcIik7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tEaXNhYmxlZCh1cmw6IHN0cmluZykge1xuICAgIHRoaXMudXBsb2FkRGlzYWJsZWQgPSB1cmwgPyB1cmwubGVuZ3RoID09PSAwIDogdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maWxlTmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlcy5PcGVuZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZXMuRW1wdHk7XG4gICAgfVxuICB9XG59XG4iXX0=