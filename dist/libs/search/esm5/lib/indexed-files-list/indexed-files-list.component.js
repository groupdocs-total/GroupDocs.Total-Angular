/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var IndexedFilesListComponent = /** @class */ (function () {
    function IndexedFilesListComponent() {
        this.files = [];
    }
    /**
     * @return {?}
     */
    IndexedFilesListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    IndexedFilesListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-indexed-files-list',
                    template: "<div id=\"gd-indexed-files-list\">\r\n  <div class=\"gd-indexed-files-list-header\">\r\n    <div class=\"gd-placeholder\"></div>\r\n    <div>File</div>\r\n    <div class=\"gd-indexed-files-size\">Size</div>\r\n    <div>State</div>\r\n  </div>\r\n  <div class=\"gd-indexed-files-list-body\">\r\n    <div class=\"gd-indexed-file-wrapper\" *ngFor=\"let file of files\">\r\n        <gd-indexed-file [file]=\"file\"></gd-indexed-file>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: ["#gd-indexed-files-list{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%;background-color:#e7e7e7;top:120px;position:absolute;width:100%}.gd-indexed-files-list-header{display:-webkit-box;display:flex;font-size:13px;text-transform:uppercase;color:#6e6e6e;width:100%;height:60px;background-color:#f4f4f4;font-weight:700;-webkit-box-align:center;align-items:center}.gd-placeholder{margin:0 42px}.gd-indexed-files-list-header div:nth-child(2){text-align:left;display:-webkit-box;display:flex}.gd-indexed-files-list-header div:nth-child(3){position:absolute;right:325px}.gd-indexed-files-list-header div:nth-child(4){position:absolute;right:153px}.gd-indexed-files-list-body{overflow-y:scroll;height:calc(100% - 180px)}.gd-last-placeholder{margin:0 52px}@media (max-width:1037px){.gd-indexed-files-size{display:none}.gd-placeholder{margin:0 34px}.gd-indexed-files-list-header div:nth-child(4){right:30px}.gd-indexed-file-wrapper{padding:5px 5px 0}}"]
                }] }
    ];
    /** @nocollapse */
    IndexedFilesListComponent.ctorParameters = function () { return []; };
    IndexedFilesListComponent.propDecorators = {
        files: [{ type: Input }]
    };
    return IndexedFilesListComponent;
}());
export { IndexedFilesListComponent };
if (false) {
    /** @type {?} */
    IndexedFilesListComponent.prototype.files;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhlZC1maWxlcy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zZWFyY2gvIiwic291cmNlcyI6WyJsaWIvaW5kZXhlZC1maWxlcy1saXN0L2luZGV4ZWQtZmlsZXMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR3pEO0lBU0U7UUFGUyxVQUFLLEdBQWdCLEVBQUUsQ0FBQztJQUdqQyxDQUFDOzs7O0lBRUQsNENBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLDZkQUFrRDs7aUJBRW5EOzs7Ozt3QkFHRSxLQUFLOztJQU9SLGdDQUFDO0NBQUEsQUFkRCxJQWNDO1NBUlkseUJBQXlCOzs7SUFDcEMsMENBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVNb2RlbCB9IGZyb20gJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWluZGV4ZWQtZmlsZXMtbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2luZGV4ZWQtZmlsZXMtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW5kZXhlZC1maWxlcy1saXN0LmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbmRleGVkRmlsZXNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBmaWxlczogRmlsZU1vZGVsW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG4gIFxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxufSJdfQ==