/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModals, ModalService, UploadFilesService } from "@groupdocs.examples.angular/common-components";
var UploadFilePanelComponent = /** @class */ (function () {
    function UploadFilePanelComponent(_uploadService, _modalService) {
        this._uploadService = _uploadService;
        this._modalService = _modalService;
        this.active = new EventEmitter();
        this.showUploadFile = false;
    }
    /**
     * @return {?}
     */
    UploadFilePanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UploadFilePanelComponent.prototype.openModal = /**
     * @return {?}
     */
    function () {
        this.active.emit(this.panel);
        this._modalService.open(CommonModals.BrowseFiles);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    UploadFilePanelComponent.prototype.dropped = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event) {
            this.active.emit(this.panel);
            this.showUploadFile = false;
        }
    };
    UploadFilePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-upload-file-panel',
                    template: "<div class=\"wrapper gd-drag-n-drop-wrap\" gdDnd (dropped)=\"dropped($event)\" (opening)=\"showUploadFile=$event\" (click)=\"openModal()\">\r\n  <div class=\"init-state-wrapper\">\r\n    <fa-icon class=\"icon\" [icon]=\"['fas', 'folder-open']\"></fa-icon>\r\n    <span class=\"start\">\r\n        Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\r\n        Or drop file here\r\n    </span>\r\n  </div>\r\n  <div *ngIf=\"showUploadFile\" class=\"init-state-dnd-wrapper\">\r\n    <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\r\n    <span class=\"text\">Drop file here to upload</span>\r\n  </div>\r\n</div>\r\n",
                    styles: [":host{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;align-content:center;height:100%;border-bottom:1px solid #ccc}.wrapper{color:#959da5;background-color:#e7e7e7;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;width:100%;height:100%}.icon{font-size:65px;margin-bottom:43px;display:-webkit-box;display:flex;color:#959da5}.start{font-size:15px;text-align:center;color:#959da5}.gd-drag-n-drop-wrap.active{background-color:#fff;position:fixed;top:60px;width:50%;background:rgba(255,255,255,.8)}.gd-drag-n-drop-wrap.active .init-state-wrapper{position:absolute;opacity:.2;top:unset;margin-top:-11px}.gd-drag-n-drop-wrap.active .init-state-dnd-wrapper{top:0;z-index:999;margin-top:-11px}.gd-drag-n-drop-wrap.active .init-state-dnd-wrapper .icon{width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}.gd-drag-n-drop-wrap.active .text{color:#6e6e6e;font-size:14px}.init-state-dnd-wrapper,.init-state-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:250px;height:250px;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.init-state-wrapper{top:-30px;position:relative}"]
                }] }
    ];
    /** @nocollapse */
    UploadFilePanelComponent.ctorParameters = function () { return [
        { type: UploadFilesService },
        { type: ModalService }
    ]; };
    UploadFilePanelComponent.propDecorators = {
        panel: [{ type: Input }],
        active: [{ type: Output }]
    };
    return UploadFilePanelComponent;
}());
export { UploadFilePanelComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWZpbGUtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvdXBsb2FkLWZpbGUtcGFuZWwvdXBsb2FkLWZpbGUtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFFN0c7SUFXRSxrQ0FBb0IsY0FBa0MsRUFDbEMsYUFBMkI7UUFEM0IsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBSnJDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzlDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBSXZCLENBQUM7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsNENBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVELDBDQUFPOzs7O0lBQVAsVUFBUSxNQUFNO1FBQ1osSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7U0FDN0I7SUFDSCxDQUFDOztnQkE1QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLDJyQkFBaUQ7O2lCQUVsRDs7OztnQkFObUMsa0JBQWtCO2dCQUFoQyxZQUFZOzs7d0JBUy9CLEtBQUs7eUJBQ0wsTUFBTTs7SUFxQlQsK0JBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQXhCWSx3QkFBd0I7OztJQUVuQyx5Q0FBdUI7O0lBQ3ZCLDBDQUE4Qzs7SUFDOUMsa0RBQXVCOzs7OztJQUVYLGtEQUEwQzs7Ozs7SUFDMUMsaURBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb21tb25Nb2RhbHMsIE1vZGFsU2VydmljZSwgVXBsb2FkRmlsZXNTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXVwbG9hZC1maWxlLXBhbmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdXBsb2FkLWZpbGUtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3VwbG9hZC1maWxlLXBhbmVsLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFVwbG9hZEZpbGVQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHBhbmVsOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIGFjdGl2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIHNob3dVcGxvYWRGaWxlID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3VwbG9hZFNlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBvcGVuTW9kYWwoKSB7XHJcbiAgICB0aGlzLmFjdGl2ZS5lbWl0KHRoaXMucGFuZWwpO1xyXG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzKTtcclxuICB9XHJcblxyXG4gIGRyb3BwZWQoJGV2ZW50KSB7XHJcbiAgICBpZiAoJGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlLmVtaXQodGhpcy5wYW5lbCk7XHJcbiAgICAgIHRoaXMuc2hvd1VwbG9hZEZpbGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19