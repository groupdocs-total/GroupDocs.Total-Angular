/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class IndexedFilesListComponent {
    constructor() {
        this.files = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
IndexedFilesListComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-indexed-files-list',
                template: "<div id=\"gd-indexed-files-list\">\n  <div class=\"gd-indexed-files-list-header\">\n    <div class=\"gd-placeholder\"></div>\n    <div>File</div>\n    <div class=\"gd-indexed-files-size\">Size</div>\n    <div>State</div>\n  </div>\n  <div class=\"gd-indexed-files-list-body\">\n    <div class=\"gd-indexed-file-wrapper\" *ngFor=\"let file of files\">\n        <gd-indexed-file [file]=\"file\"></gd-indexed-file>\n    </div>\n  </div>\n</div>",
                styles: ["#gd-indexed-files-list{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%;background-color:#e7e7e7;top:120px;position:absolute;width:100%}.gd-indexed-files-list-header{display:-webkit-box;display:flex;font-size:13px;text-transform:uppercase;color:#6e6e6e;width:100%;height:60px;background-color:#f4f4f4;font-weight:700;-webkit-box-align:center;align-items:center}.gd-placeholder{margin:0 42px}.gd-indexed-files-list-header div:nth-child(2){text-align:left;display:-webkit-box;display:flex}.gd-indexed-files-list-header div:nth-child(3){position:absolute;right:325px}.gd-indexed-files-list-header div:nth-child(4){position:absolute;right:153px}.gd-indexed-files-list-body{overflow-y:scroll;height:calc(100% - 180px)}.gd-last-placeholder{margin:0 52px}@media (max-width:1037px){.gd-indexed-files-size{display:none}.gd-placeholder{margin:0 34px}.gd-indexed-files-list-header div:nth-child(4){right:30px}.gd-indexed-file-wrapper{padding:5px 5px 0}}"]
            }] }
];
/** @nocollapse */
IndexedFilesListComponent.ctorParameters = () => [];
IndexedFilesListComponent.propDecorators = {
    files: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    IndexedFilesListComponent.prototype.files;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhlZC1maWxlcy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zZWFyY2gvIiwic291cmNlcyI6WyJsaWIvaW5kZXhlZC1maWxlcy1saXN0L2luZGV4ZWQtZmlsZXMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBU3pELE1BQU0sT0FBTyx5QkFBeUI7SUFHcEM7UUFGUyxVQUFLLEdBQWdCLEVBQUUsQ0FBQztJQUdqQyxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxxY0FBa0Q7O2FBRW5EOzs7OztvQkFHRSxLQUFLOzs7O0lBQU4sMENBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWxlTW9kZWwgfSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1pbmRleGVkLWZpbGVzLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5kZXhlZC1maWxlcy1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5kZXhlZC1maWxlcy1saXN0LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBJbmRleGVkRmlsZXNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZmlsZXM6IEZpbGVNb2RlbFtdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG59Il19