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
        }
    }
}
UploadFilePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-upload-file-panel',
                template: "<div class=\"gd-drag-n-drop-wrap\" id=\"gd-dropZone\" gdDnd (dropped)=\"dropped($event)\">\n  <div class=\"gd-drag-n-drop-icon\">\n    <fa-icon [icon]=\"['far','folder-open']\" size=\"5x\" (click)=\"openModal()\"></fa-icon>\n  </div>\n  <h2>Drop your document here or click to select a file</h2>\n</div>\n",
                styles: [".gd-drag-n-drop-wrap{height:100%;width:100%;background-color:#e7e7e7;text-align:center;cursor:default;left:1px;display:flex;align-content:center;flex-direction:column;justify-content:center;opacity:.9;z-index:1}.active{background-color:#bababa}.gd-drag-n-drop-wrap h2{color:#959da5;font-size:15px;margin-top:38px}.gd-drag-n-drop-icon{color:#959da5;cursor:pointer}:host{display:flex;justify-content:center;align-items:center;flex-direction:column;align-content:center;height:100%;border-bottom:1px solid #ccc}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWZpbGUtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvdXBsb2FkLWZpbGUtcGFuZWwvdXBsb2FkLWZpbGUtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFPN0csTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUFLbkMsWUFBb0IsY0FBa0MsRUFDbEMsYUFBMkI7UUFEM0IsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBSHJDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBSTlDLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE1BQU07UUFDWixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7OztZQTFCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsNlRBQWlEOzthQUVsRDs7OztZQU5tQyxrQkFBa0I7WUFBaEMsWUFBWTs7O29CQVMvQixLQUFLO3FCQUNMLE1BQU07Ozs7SUFEUCx5Q0FBdUI7O0lBQ3ZCLDBDQUE4Qzs7Ozs7SUFFbEMsa0RBQTBDOzs7OztJQUMxQyxpREFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2RhbHMsIE1vZGFsU2VydmljZSwgVXBsb2FkRmlsZXNTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXVwbG9hZC1maWxlLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VwbG9hZC1maWxlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXBsb2FkLWZpbGUtcGFuZWwuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRGaWxlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHBhbmVsOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBhY3RpdmUgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91cGxvYWRTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9wZW5Nb2RhbCgpIHtcbiAgICB0aGlzLmFjdGl2ZS5lbWl0KHRoaXMucGFuZWwpO1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcyk7XG4gIH1cblxuICBkcm9wcGVkKCRldmVudCkge1xuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgIHRoaXMuYWN0aXZlLmVtaXQodGhpcy5wYW5lbCk7XG4gICAgfVxuICB9XG59XG4iXX0=