/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModals, ExceptionMessageService, FileUtil, ModalService } from "@groupdocs.examples.angular/common-components";
var States = /** @class */ (function () {
    function States() {
    }
    States.Empty = 'empty';
    States.Opened = 'opened';
    return States;
}());
export { States };
if (false) {
    /** @type {?} */
    States.Empty;
    /** @type {?} */
    States.Opened;
}
var AddFilePanelComponent = /** @class */ (function () {
    function AddFilePanelComponent(_modalService, _excMessageService) {
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
    AddFilePanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AddFilePanelComponent.prototype.getFormatIcon = /**
     * @return {?}
     */
    function () {
        return FileUtil.find(this.fileName, false).icon;
    };
    /**
     * @return {?}
     */
    AddFilePanelComponent.prototype.openModal = /**
     * @return {?}
     */
    function () {
        this.active.emit(this.panel);
        this._modalService.open(CommonModals.BrowseFiles);
    };
    /**
     * @return {?}
     */
    AddFilePanelComponent.prototype.isEmpty = /**
     * @return {?}
     */
    function () {
        return this.state === States.Empty;
    };
    /**
     * @return {?}
     */
    AddFilePanelComponent.prototype.cleanFile = /**
     * @return {?}
     */
    function () {
        this.active.emit(this.panel);
        this.cleanPanel.emit(true);
    };
    /**
     * @param {?} url
     * @return {?}
     */
    AddFilePanelComponent.prototype.uploadUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
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
    };
    /**
     * @param {?} url
     * @return {?}
     */
    AddFilePanelComponent.prototype.checkDisabled = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.uploadDisabled = url ? url.length === 0 : true;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AddFilePanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.fileName) {
            this.state = States.Opened;
        }
        else {
            this.state = States.Empty;
        }
    };
    AddFilePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-add-file-panel',
                    template: "<div class=\"wrapper\">\r\n  <div class=\"upload-wrapper\" *ngIf=\"isEmpty()\">\r\n    <gd-button [icon]=\"'arrow-right'\" [tooltip]=\"'Upload file'\" (click)=\"uploadUrl(url.value)\" [disabled]=\"uploadDisabled\" ></gd-button>\r\n    <input class=\"url-input\" #url (keyup)=\"checkDisabled(url.value)\" (keyup.enter)=\"uploadUrl(url.value)\" placeholder=\"https://\">\r\n  </div>\r\n  <fa-icon *ngIf=\"!isEmpty()\" [icon]=\"['fas',getFormatIcon()]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon()\"></fa-icon>\r\n  <span *ngIf=\"!isEmpty()\" class=\"compare-file-name\">{{fileName}}</span>\r\n  <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Open file'\" (click)=\"openModal()\" *ngIf=\"isEmpty()\"></gd-button>\r\n  <gd-button [icon]=\"'times'\" [tooltip]=\"'Close file'\" (click)=\"cleanFile()\" *ngIf=\"!isEmpty()\"></gd-button>\r\n</div>\r\n",
                    styles: [":host{border-bottom:1px solid #ccc}:host ::ng-deep gd-button .button{font-size:14px!important}.wrapper{height:37px;background-color:#fff;display:-webkit-box;display:flex}.upload-wrapper{display:-webkit-box;display:flex;width:100%}.url-input{border:0;height:37px;width:100%;padding-left:5px;margin:0;padding-top:0;padding-bottom:0;outline:0;color:#959da5;opacity:.5;font-style:italic}.compare-file-name{color:#6e6e6e;margin:8px 8px 8px 0;width:100%;text-align:left;font-size:13px;opacity:.5}.ng-fa-icon{color:#959da5;margin:9px 15px 0 13px;font-size:14px}.compare-file{width:100%;border-right:2px solid #ddd}.wrapper .ng-fa-icon.fa-file-pdf{color:#e04e4e}.wrapper .ng-fa-icon.fa-file-word{color:#539cf0}.wrapper .ng-fa-icon.fa-file-powerpoint{color:#e29e1e}.wrapper .ng-fa-icon.fa-file-excel{color:#7cbc46}.wrapper .ng-fa-icon.fa-file-image{color:#c375ed}.wrapper .ng-fa-icon.fa-file,.wrapper .ng-fa-icon.fa-file-alt,.wrapper .ng-fa-icon.fa-file-text .fa-folder{color:#4b566c}.wrapper ::ng-deep gd-button .button fa-icon{color:#6e6e6e}::ng-deep gd-tab .gd-tab .title{font-size:13px;font-weight:700;color:#959da5;opacity:.4}::ng-deep gd-tab .gd-tab.active .title{color:#3e4e5a!important;opacity:1}"]
                }] }
    ];
    /** @nocollapse */
    AddFilePanelComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: ExceptionMessageService }
    ]; };
    AddFilePanelComponent.propDecorators = {
        panel: [{ type: Input }],
        active: [{ type: Output }],
        urlForUpload: [{ type: Output }],
        cleanPanel: [{ type: Output }],
        fileName: [{ type: Input }]
    };
    return AddFilePanelComponent;
}());
export { AddFilePanelComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWZpbGUtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvYWRkLWZpbGUtcGFuZWwvYWRkLWZpbGUtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUNMLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsUUFBUSxFQUNSLFlBQVksRUFDYixNQUFNLCtDQUErQyxDQUFDO0FBRXZEO0lBQUE7SUFHQSxDQUFDO0lBRlEsWUFBSyxHQUFHLE9BQU8sQ0FBQztJQUNoQixhQUFNLEdBQUcsUUFBUSxDQUFDO0lBQzNCLGFBQUM7Q0FBQSxBQUhELElBR0M7U0FIWSxNQUFNOzs7SUFDakIsYUFBdUI7O0lBQ3ZCLGNBQXlCOztBQUczQjtJQWNFLCtCQUFvQixhQUEyQixFQUMzQixrQkFBMkM7UUFEM0Msa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUF5QjtRQVJyRCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNwQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDMUMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDbkQsVUFBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFckIsbUJBQWMsR0FBRyxJQUFJLENBQUM7SUFJdEIsQ0FBQzs7OztJQUVELHdDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCw2Q0FBYTs7O0lBQWI7UUFDRSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELHlDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELHVDQUFPOzs7SUFBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCx5Q0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCx5Q0FBUzs7OztJQUFULFVBQVUsR0FBVztRQUNuQixJQUFHLElBQUksQ0FBQyxjQUFjLEVBQUM7WUFDckIsT0FBTTtTQUNQO1FBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3RGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDOzs7OztJQUVELDZDQUFhOzs7O0lBQWIsVUFBYyxHQUFXO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRUQsMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDNUI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUMzQjtJQUNILENBQUM7O2dCQTlERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsMDFCQUE4Qzs7aUJBRS9DOzs7O2dCQVpDLFlBQVk7Z0JBRlosdUJBQXVCOzs7d0JBZ0J0QixLQUFLO3lCQUNMLE1BQU07K0JBQ04sTUFBTTs2QkFDTixNQUFNOzJCQUVOLEtBQUs7O0lBb0RSLDRCQUFDO0NBQUEsQUEvREQsSUErREM7U0ExRFkscUJBQXFCOzs7SUFDaEMsc0NBQXVCOztJQUN2Qix1Q0FBOEM7O0lBQzlDLDZDQUFvRDs7SUFDcEQsMkNBQW1EOztJQUNuRCxzQ0FBcUI7O0lBQ3JCLHlDQUEwQjs7SUFDMUIsK0NBQXNCOzs7OztJQUVWLDhDQUFtQzs7Ozs7SUFDbkMsbURBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENvbW1vbk1vZGFscyxcclxuICBFeGNlcHRpb25NZXNzYWdlU2VydmljZSxcclxuICBGaWxlVXRpbCxcclxuICBNb2RhbFNlcnZpY2VcclxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGVzIHtcclxuICBzdGF0aWMgRW1wdHkgPSAnZW1wdHknO1xyXG4gIHN0YXRpYyBPcGVuZWQgPSAnb3BlbmVkJztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1hZGQtZmlsZS1wYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1maWxlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hZGQtZmlsZS1wYW5lbC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRGaWxlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgcGFuZWw6IHN0cmluZztcclxuICBAT3V0cHV0KCkgYWN0aXZlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIHVybEZvclVwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSBjbGVhblBhbmVsID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIHN0YXRlID0gU3RhdGVzLkVtcHR5O1xyXG4gIEBJbnB1dCgpIGZpbGVOYW1lOiBzdHJpbmc7XHJcbiAgdXBsb2FkRGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9leGNNZXNzYWdlU2VydmljZTogRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgZ2V0Rm9ybWF0SWNvbigpIHtcclxuICAgIHJldHVybiBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZU5hbWUsIGZhbHNlKS5pY29uO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1vZGFsKCkge1xyXG4gICAgdGhpcy5hY3RpdmUuZW1pdCh0aGlzLnBhbmVsKTtcclxuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcyk7XHJcbiAgfVxyXG5cclxuICBpc0VtcHR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFN0YXRlcy5FbXB0eTtcclxuICB9XHJcblxyXG4gIGNsZWFuRmlsZSgpIHtcclxuICAgIHRoaXMuYWN0aXZlLmVtaXQodGhpcy5wYW5lbCk7XHJcbiAgICB0aGlzLmNsZWFuUGFuZWwuZW1pdCh0cnVlKTtcclxuICB9XHJcblxyXG4gIHVwbG9hZFVybCh1cmw6IHN0cmluZykge1xyXG4gICAgaWYodGhpcy51cGxvYWREaXNhYmxlZCl7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKHVybCAmJiAodXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSB8fCB1cmwuc3RhcnRzV2l0aCgnZmlsZScpIHx8IHVybC5zdGFydHNXaXRoKCdmdHAnKSkpIHtcclxuICAgICAgdGhpcy5hY3RpdmUuZW1pdCh0aGlzLnBhbmVsKTtcclxuICAgICAgdGhpcy51cmxGb3JVcGxvYWQuZW1pdCh1cmwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkVycm9yTWVzc2FnZSk7XHJcbiAgICAgIHRoaXMuX2V4Y01lc3NhZ2VTZXJ2aWNlLmNoYW5nZU1lc3NhZ2UoXCJXcm9uZyB1cmxcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0Rpc2FibGVkKHVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnVwbG9hZERpc2FibGVkID0gdXJsID8gdXJsLmxlbmd0aCA9PT0gMCA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5maWxlTmFtZSkge1xyXG4gICAgICB0aGlzLnN0YXRlID0gU3RhdGVzLk9wZW5lZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZXMuRW1wdHk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==