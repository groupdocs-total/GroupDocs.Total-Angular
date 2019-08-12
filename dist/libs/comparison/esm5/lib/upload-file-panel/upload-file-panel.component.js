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
        }
    };
    UploadFilePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-upload-file-panel',
                    template: "<div class=\"gd-drag-n-drop-wrap\" id=\"gd-dropZone\" gdDnd (dropped)=\"dropped($event)\">\n  <div class=\"gd-drag-n-drop-icon\">\n    <fa-icon [icon]=\"['far','folder-open']\" size=\"5x\" (click)=\"openModal()\"></fa-icon>\n  </div>\n  <h2>Drop your document here or click to select a file</h2>\n</div>\n",
                    styles: [".gd-drag-n-drop-wrap{height:100%;width:100%;background-color:#e7e7e7;text-align:center;cursor:default;left:1px;display:flex;align-content:center;flex-direction:column;justify-content:center;opacity:.9;z-index:1}.active{background-color:#bababa}.gd-drag-n-drop-wrap h2{color:#959da5;font-size:15px;margin-top:38px}.gd-drag-n-drop-icon{color:#959da5;cursor:pointer}:host{display:flex;justify-content:center;align-items:center;flex-direction:column;align-content:center;height:100%;border-bottom:1px solid #ccc}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWZpbGUtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvdXBsb2FkLWZpbGUtcGFuZWwvdXBsb2FkLWZpbGUtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFFN0c7SUFVRSxrQ0FBb0IsY0FBa0MsRUFDbEMsYUFBMkI7UUFEM0IsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBSHJDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBSTlDLENBQUM7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsNENBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVELDBDQUFPOzs7O0lBQVAsVUFBUSxNQUFNO1FBQ1osSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDOztnQkExQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLDZUQUFpRDs7aUJBRWxEOzs7O2dCQU5tQyxrQkFBa0I7Z0JBQWhDLFlBQVk7Ozt3QkFTL0IsS0FBSzt5QkFDTCxNQUFNOztJQW1CVCwrQkFBQztDQUFBLEFBM0JELElBMkJDO1NBdEJZLHdCQUF3Qjs7O0lBRW5DLHlDQUF1Qjs7SUFDdkIsMENBQThDOzs7OztJQUVsQyxrREFBMEM7Ozs7O0lBQzFDLGlEQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZGFscywgTW9kYWxTZXJ2aWNlLCBVcGxvYWRGaWxlc1NlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtdXBsb2FkLWZpbGUtcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBsb2FkLWZpbGUtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91cGxvYWQtZmlsZS1wYW5lbC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZEZpbGVQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcGFuZWw6IHN0cmluZztcbiAgQE91dHB1dCgpIGFjdGl2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3VwbG9hZFNlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb3Blbk1vZGFsKCkge1xuICAgIHRoaXMuYWN0aXZlLmVtaXQodGhpcy5wYW5lbCk7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzKTtcbiAgfVxuXG4gIGRyb3BwZWQoJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudCkge1xuICAgICAgdGhpcy5hY3RpdmUuZW1pdCh0aGlzLnBhbmVsKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==