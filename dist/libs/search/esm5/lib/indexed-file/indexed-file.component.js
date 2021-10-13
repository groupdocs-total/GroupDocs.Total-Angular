/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SearchService } from "../search.service";
import { FileUtil } from '@groupdocs.examples.angular/common-components';
import { IndexedFileModel, FileIndexingStatus } from '../search-models';
var IndexedFileComponent = /** @class */ (function () {
    function IndexedFileComponent(_searchService) {
        this._searchService = _searchService;
    }
    /**
     * @return {?}
     */
    IndexedFileComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} $event
     * @param {?} file
     * @return {?}
     */
    IndexedFileComponent.prototype.removeFile = /**
     * @param {?} $event
     * @param {?} file
     * @return {?}
     */
    function ($event, file) {
        $event.preventDefault();
        $event.stopPropagation();
        this._searchService.selectedItemToRemove(file);
    };
    /**
     * @param {?} size
     * @return {?}
     */
    IndexedFileComponent.prototype.getSizeString = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        /** @type {?} */
        var mb = size / 1024 / 1024;
        if (mb > 1) {
            return (Math.round(mb * 100) / 100) + ' MB';
        }
        else {
            /** @type {?} */
            var kb = size / 1024;
            if (kb > 1) {
                return (Math.round(kb * 100) / 100) + ' KB';
            }
        }
        return size + ' Bytes';
    };
    /**
     * @return {?}
     */
    IndexedFileComponent.prototype.getFormatIcon = /**
     * @return {?}
     */
    function () {
        return FileUtil.find(this.file.name, this.file.directory).icon;
    };
    /**
     * @return {?}
     */
    IndexedFileComponent.prototype.getFormatName = /**
     * @return {?}
     */
    function () {
        return FileUtil.find(this.file.name, this.file.directory).format;
    };
    /**
     * @return {?}
     */
    IndexedFileComponent.prototype.getStatusIcon = /**
     * @return {?}
     */
    function () {
        switch (this.file.documentStatus) {
            case FileIndexingStatus.Indexing:
            case FileIndexingStatus.PasswordRequired:
                return "circle-notch";
            case FileIndexingStatus.SuccessfullyProcessed:
                return "check";
            case FileIndexingStatus.ProcessedWithError:
                return "times";
            case FileIndexingStatus.Skipped:
                return "forward";
            default:
                return "times";
        }
    };
    /**
     * @return {?}
     */
    IndexedFileComponent.prototype.getStatusTitle = /**
     * @return {?}
     */
    function () {
        switch (this.file.documentStatus) {
            case FileIndexingStatus.Indexing:
            case FileIndexingStatus.PasswordRequired:
                return "Indexing";
            case FileIndexingStatus.SuccessfullyProcessed:
                return "Indexed";
            case FileIndexingStatus.ProcessedWithError:
                return "Error";
            case FileIndexingStatus.Skipped:
                return "Skipped";
            default:
                return "times";
        }
    };
    IndexedFileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-indexed-file',
                    template: "<div *ngIf=\"file\" class=\"gd-indexed-file\">\r\n  <div class=\"gd-indexed-file-remove\" (click)=\"removeFile($event, file)\">\r\n    <span>&times;</span>\r\n  </div>\r\n  <div class=\"gd-indexed-file-name disabled\">\r\n    <fa-icon [icon]=\"['fas', getFormatIcon()]\" [class]=\"'ng-fa-icon'\" [ngClass]=\"['fa-' + getFormatIcon()]\"></fa-icon>\r\n    <div class=\"gd-file-name\">{{file.name}}\r\n      <div class=\"gd-file-format\">{{getFormatName()}}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"gd-file-size gd-indexed-file-size\">{{getSizeString(file.size)}}</div>\r\n  <div class=\"gd-indexed-file-status-wrapper\">\r\n    <div class=\"gd-indexed-file-status\">\r\n      <fa-icon class=\"gd-indexed-file-successful\" [icon]=\"['fas',getStatusIcon()]\" [spin]=\"getStatusIcon() === 'circle-notch'\"></fa-icon>\r\n      <span class=\"mobile-hide\">{{getStatusTitle()}}</span>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [".gd-indexed-file{display:-webkit-box;display:flex;width:100%;height:98px;border-bottom:1px solid #e7e7e7;background-color:#fff;-webkit-box-align:center;align-items:center;position:relative}.gd-indexed-file-remove{font-size:18px;color:#6e6e6e;margin:0 24px;cursor:pointer}.gd-indexed-file-remove span{width:37px;height:37px;display:block;line-height:37px;text-align:center;font-weight:700}.gd-indexed-file-remove.disabled{color:#959da5;opacity:.4}.gd-indexed-file-name{display:-webkit-box;display:flex}.gd-indexed-file-name.disabled fa-icon{color:#6e6e6e}.gd-file-name{text-align:left;cursor:default;overflow:hidden;text-overflow:ellipsis}.gd-indexed-file-size{width:70px;color:#777;text-align:left;font-size:12px;right:265px;position:absolute}.gd-indexed-file-status-wrapper{color:#777;font-size:12px;right:104px;position:absolute;width:70px}.gd-indexed-file-status{display:-webkit-box;display:flex}.gd-indexed-file-status fa-icon{padding-right:7px}.gd-file-format{font-size:10px;color:#acacac;padding-top:4px}.gd-file-format.mobile{display:none}.disabled{cursor:not-allowed!important}.gd-indexed-file .ng-fa-icon.fa-file-pdf{color:#e21717}.gd-indexed-file .ng-fa-icon.fa-file-word{color:#6979b9}.gd-indexed-file .ng-fa-icon.fa-file-powerpoint{color:#e29417}.gd-indexed-file .ng-fa-icon.fa-file-excel{color:#3fa300}.gd-indexed-file .ng-fa-icon.fa-file-image{color:#e217da}.gd-indexed-file .ng-fa-icon.fa-file-text .fa-folder{color:#5d6a75}.gd-indexed-file-name .ng-fa-icon{font-size:33px}.gd-indexed-file-name fa-icon{font-size:32px;margin:0 11px 0 0}@media (max-width:1037px){.gd-indexed-file-size{display:none}.gd-file-format.mobile{display:block}.gd-file-format.mobile>fa-icon{color:#bebebe}.gd-file-format.mobile fa-icon{font-size:10px;margin-right:2.1px}.gd-file-format.mobile fa-icon:nth-child(1){margin-right:6px}.gd-file-format{font-size:11px}.gd-indexed-file-name{white-space:nowrap;overflow:hidden;width:65%}.gd-indexed-file-status-wrapper{right:45px;width:unset}.gd-indexed-file-status-wrapper .gd-indexed-file-status fa-icon{padding-right:unset;font-size:16px}.gd-indexed-file-remove{margin:0 16px 0 15px;font-size:24px}.mobile-hide{display:none}.gd-indexed-file{height:85px}}"]
                }] }
    ];
    /** @nocollapse */
    IndexedFileComponent.ctorParameters = function () { return [
        { type: SearchService }
    ]; };
    IndexedFileComponent.propDecorators = {
        file: [{ type: Input }]
    };
    return IndexedFileComponent;
}());
export { IndexedFileComponent };
if (false) {
    /** @type {?} */
    IndexedFileComponent.prototype.file;
    /**
     * @type {?}
     * @private
     */
    IndexedFileComponent.prototype._searchService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhlZC1maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zZWFyY2gvIiwic291cmNlcyI6WyJsaWIvaW5kZXhlZC1maWxlL2luZGV4ZWQtZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQWEsUUFBUSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFeEU7SUFTRSw4QkFBb0IsY0FBNkI7UUFBN0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7SUFDakQsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7OztJQUVELHlDQUFVOzs7OztJQUFWLFVBQVcsTUFBTSxFQUFFLElBQWU7UUFDaEMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsNENBQWE7Ozs7SUFBYixVQUFjLElBQVk7O1lBQ2xCLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUk7UUFDN0IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUM3QzthQUFNOztnQkFDQyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUk7WUFDdEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDN0M7U0FDRjtRQUNELE9BQU8sSUFBSSxHQUFHLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsNENBQWE7OztJQUFiO1FBQ0UsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFFRCw0Q0FBYTs7O0lBQWI7UUFDRSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDbkUsQ0FBQzs7OztJQUVELDRDQUFhOzs7SUFBYjtRQUNFLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDaEMsS0FBSyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7WUFDakMsS0FBSyxrQkFBa0IsQ0FBQyxnQkFBZ0I7Z0JBQ3RDLE9BQU8sY0FBYyxDQUFDO1lBQ3hCLEtBQUssa0JBQWtCLENBQUMscUJBQXFCO2dCQUMzQyxPQUFPLE9BQU8sQ0FBQztZQUNqQixLQUFLLGtCQUFrQixDQUFDLGtCQUFrQjtnQkFDeEMsT0FBTyxPQUFPLENBQUM7WUFDakIsS0FBSyxrQkFBa0IsQ0FBQyxPQUFPO2dCQUM3QixPQUFPLFNBQVMsQ0FBQztZQUNuQjtnQkFDRSxPQUFPLE9BQU8sQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7SUFFRCw2Q0FBYzs7O0lBQWQ7UUFDRSxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ2hDLEtBQUssa0JBQWtCLENBQUMsUUFBUSxDQUFDO1lBQ2pDLEtBQUssa0JBQWtCLENBQUMsZ0JBQWdCO2dCQUN0QyxPQUFPLFVBQVUsQ0FBQztZQUNwQixLQUFLLGtCQUFrQixDQUFDLHFCQUFxQjtnQkFDM0MsT0FBTyxTQUFTLENBQUM7WUFDbkIsS0FBSyxrQkFBa0IsQ0FBQyxrQkFBa0I7Z0JBQ3hDLE9BQU8sT0FBTyxDQUFBO1lBQ2hCLEtBQUssa0JBQWtCLENBQUMsT0FBTztnQkFDN0IsT0FBTyxTQUFTLENBQUM7WUFDbkI7Z0JBQ0UsT0FBTyxPQUFPLENBQUM7U0FDbEI7SUFDSCxDQUFDOztnQkF4RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHE2QkFBNEM7O2lCQUU3Qzs7OztnQkFSUSxhQUFhOzs7dUJBV25CLEtBQUs7O0lBa0VSLDJCQUFDO0NBQUEsQUF6RUQsSUF5RUM7U0FuRVksb0JBQW9COzs7SUFDL0Isb0NBQWdDOzs7OztJQUVwQiw4Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2VhcmNoU2VydmljZSB9IGZyb20gXCIuLi9zZWFyY2guc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGaWxlTW9kZWwsIEZpbGVVdGlsIH0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgSW5kZXhlZEZpbGVNb2RlbCwgRmlsZUluZGV4aW5nU3RhdHVzIH0gZnJvbSAnLi4vc2VhcmNoLW1vZGVscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWluZGV4ZWQtZmlsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2luZGV4ZWQtZmlsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW5kZXhlZC1maWxlLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbmRleGVkRmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZmlsZTogSW5kZXhlZEZpbGVNb2RlbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VhcmNoU2VydmljZTogU2VhcmNoU2VydmljZSkge1xyXG4gIH1cclxuICBcclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIHJlbW92ZUZpbGUoJGV2ZW50LCBmaWxlOiBGaWxlTW9kZWwpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5fc2VhcmNoU2VydmljZS5zZWxlY3RlZEl0ZW1Ub1JlbW92ZShmaWxlKTtcclxuICB9XHJcblxyXG4gIGdldFNpemVTdHJpbmcoc2l6ZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBtYiA9IHNpemUgLyAxMDI0IC8gMTAyNDtcclxuICAgIGlmIChtYiA+IDEpIHtcclxuICAgICAgcmV0dXJuIChNYXRoLnJvdW5kKG1iICogMTAwKSAvIDEwMCkgKyAnIE1CJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGtiID0gc2l6ZSAvIDEwMjQ7XHJcbiAgICAgIGlmIChrYiA+IDEpIHtcclxuICAgICAgICByZXR1cm4gKE1hdGgucm91bmQoa2IgKiAxMDApIC8gMTAwKSArICcgS0InO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2l6ZSArICcgQnl0ZXMnO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rm9ybWF0SWNvbigpIHtcclxuICAgIHJldHVybiBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5uYW1lLCB0aGlzLmZpbGUuZGlyZWN0b3J5KS5pY29uO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rm9ybWF0TmFtZSgpIHtcclxuICAgIHJldHVybiBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5uYW1lLCB0aGlzLmZpbGUuZGlyZWN0b3J5KS5mb3JtYXQ7XHJcbiAgfVxyXG5cclxuICBnZXRTdGF0dXNJY29uKCkge1xyXG4gICAgc3dpdGNoICh0aGlzLmZpbGUuZG9jdW1lbnRTdGF0dXMpIHtcclxuICAgICAgY2FzZSBGaWxlSW5kZXhpbmdTdGF0dXMuSW5kZXhpbmc6XHJcbiAgICAgIGNhc2UgRmlsZUluZGV4aW5nU3RhdHVzLlBhc3N3b3JkUmVxdWlyZWQ6XHJcbiAgICAgICAgcmV0dXJuIFwiY2lyY2xlLW5vdGNoXCI7XHJcbiAgICAgIGNhc2UgRmlsZUluZGV4aW5nU3RhdHVzLlN1Y2Nlc3NmdWxseVByb2Nlc3NlZDpcclxuICAgICAgICByZXR1cm4gXCJjaGVja1wiO1xyXG4gICAgICBjYXNlIEZpbGVJbmRleGluZ1N0YXR1cy5Qcm9jZXNzZWRXaXRoRXJyb3I6XHJcbiAgICAgICAgcmV0dXJuIFwidGltZXNcIjtcclxuICAgICAgY2FzZSBGaWxlSW5kZXhpbmdTdGF0dXMuU2tpcHBlZDpcclxuICAgICAgICByZXR1cm4gXCJmb3J3YXJkXCI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFwidGltZXNcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFN0YXR1c1RpdGxlKCkge1xyXG4gICAgc3dpdGNoICh0aGlzLmZpbGUuZG9jdW1lbnRTdGF0dXMpIHtcclxuICAgICAgY2FzZSBGaWxlSW5kZXhpbmdTdGF0dXMuSW5kZXhpbmc6XHJcbiAgICAgIGNhc2UgRmlsZUluZGV4aW5nU3RhdHVzLlBhc3N3b3JkUmVxdWlyZWQ6XHJcbiAgICAgICAgcmV0dXJuIFwiSW5kZXhpbmdcIjtcclxuICAgICAgY2FzZSBGaWxlSW5kZXhpbmdTdGF0dXMuU3VjY2Vzc2Z1bGx5UHJvY2Vzc2VkOlxyXG4gICAgICAgIHJldHVybiBcIkluZGV4ZWRcIjtcclxuICAgICAgY2FzZSBGaWxlSW5kZXhpbmdTdGF0dXMuUHJvY2Vzc2VkV2l0aEVycm9yOlxyXG4gICAgICAgIHJldHVybiBcIkVycm9yXCJcclxuICAgICAgY2FzZSBGaWxlSW5kZXhpbmdTdGF0dXMuU2tpcHBlZDpcclxuICAgICAgICByZXR1cm4gXCJTa2lwcGVkXCI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFwidGltZXNcIjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19