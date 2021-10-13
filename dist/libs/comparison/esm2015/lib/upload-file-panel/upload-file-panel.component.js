/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModals, ModalService, UploadFilesService } from "@groupdocs.examples.angular/common-components";
export class UploadFilePanelComponent {
    /**
     * @param {?} _uploadService
     * @param {?} _modalService
     */
    constructor(_uploadService, _modalService) {
        this._uploadService = _uploadService;
        this._modalService = _modalService;
        this.active = new EventEmitter();
        this.showUploadFile = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    openModal() {
        this.active.emit(this.panel);
        this._modalService.open(CommonModals.BrowseFiles);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    dropped($event) {
        if ($event) {
            this.active.emit(this.panel);
            this.showUploadFile = false;
        }
    }
}
UploadFilePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-upload-file-panel',
                template: "<div class=\"wrapper gd-drag-n-drop-wrap\" gdDnd (dropped)=\"dropped($event)\" (opening)=\"showUploadFile=$event\" (click)=\"openModal()\">\r\n  <div class=\"init-state-wrapper\">\r\n    <fa-icon class=\"icon\" [icon]=\"['fas', 'folder-open']\"></fa-icon>\r\n    <span class=\"start\">\r\n        Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\r\n        Or drop file here\r\n    </span>\r\n  </div>\r\n  <div *ngIf=\"showUploadFile\" class=\"init-state-dnd-wrapper\">\r\n    <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\r\n    <span class=\"text\">Drop file here to upload</span>\r\n  </div>\r\n</div>\r\n",
                styles: [":host{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;align-content:center;height:100%;border-bottom:1px solid #ccc}.wrapper{color:#959da5;background-color:#e7e7e7;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;width:100%;height:100%}.icon{font-size:65px;margin-bottom:43px;display:-webkit-box;display:flex;color:#959da5}.start{font-size:15px;text-align:center;color:#959da5}.gd-drag-n-drop-wrap.active{background-color:#fff;position:fixed;top:60px;width:50%;background:rgba(255,255,255,.8)}.gd-drag-n-drop-wrap.active .init-state-wrapper{position:absolute;opacity:.2;top:unset;margin-top:-11px}.gd-drag-n-drop-wrap.active .init-state-dnd-wrapper{top:0;z-index:999;margin-top:-11px}.gd-drag-n-drop-wrap.active .init-state-dnd-wrapper .icon{width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}.gd-drag-n-drop-wrap.active .text{color:#6e6e6e;font-size:14px}.init-state-dnd-wrapper,.init-state-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:250px;height:250px;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.init-state-wrapper{top:-30px;position:relative}"]
            }] }
];
/** @nocollapse */
UploadFilePanelComponent.ctorParameters = () => [
    { type: UploadFilesService },
    { type: ModalService }
];
UploadFilePanelComponent.propDecorators = {
    panel: [{ type: Input }],
    active: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UploadFilePanelComponent.prototype.panel;
    /** @type {?} */
    UploadFilePanelComponent.prototype.active;
    /** @type {?} */
    UploadFilePanelComponent.prototype.showUploadFile;
    /**
     * @type {?}
     * @private
     */
    UploadFilePanelComponent.prototype._uploadService;
    /**
     * @type {?}
     * @private
     */
    UploadFilePanelComponent.prototype._modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWZpbGUtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvdXBsb2FkLWZpbGUtcGFuZWwvdXBsb2FkLWZpbGUtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFPN0csTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUFNbkMsWUFBb0IsY0FBa0MsRUFDbEMsYUFBMkI7UUFEM0IsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBSnJDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzlDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBSXZCLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE1BQU07UUFDWixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztTQUM3QjtJQUNILENBQUM7OztZQTVCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsMnJCQUFpRDs7YUFFbEQ7Ozs7WUFObUMsa0JBQWtCO1lBQWhDLFlBQVk7OztvQkFTL0IsS0FBSztxQkFDTCxNQUFNOzs7O0lBRFAseUNBQXVCOztJQUN2QiwwQ0FBOEM7O0lBQzlDLGtEQUF1Qjs7Ozs7SUFFWCxrREFBMEM7Ozs7O0lBQzFDLGlEQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kYWxzLCBNb2RhbFNlcnZpY2UsIFVwbG9hZEZpbGVzU2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC11cGxvYWQtZmlsZS1wYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3VwbG9hZC1maWxlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi91cGxvYWQtZmlsZS1wYW5lbC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVcGxvYWRGaWxlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBwYW5lbDogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBhY3RpdmUgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBzaG93VXBsb2FkRmlsZSA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91cGxvYWRTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgb3Blbk1vZGFsKCkge1xyXG4gICAgdGhpcy5hY3RpdmUuZW1pdCh0aGlzLnBhbmVsKTtcclxuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcyk7XHJcbiAgfVxyXG5cclxuICBkcm9wcGVkKCRldmVudCkge1xyXG4gICAgaWYgKCRldmVudCkge1xyXG4gICAgICB0aGlzLmFjdGl2ZS5lbWl0KHRoaXMucGFuZWwpO1xyXG4gICAgICB0aGlzLnNob3dVcGxvYWRGaWxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==