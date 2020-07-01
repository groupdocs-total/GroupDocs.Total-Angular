/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SearchService } from "../search.service";
import { FileUtil } from '@groupdocs.examples.angular/common-components';
import { IndexedFileModel, FileIndexingStatus } from '../search-models';
export class IndexedFileComponent {
    /**
     * @param {?} _searchService
     */
    constructor(_searchService) {
        this._searchService = _searchService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} $event
     * @param {?} file
     * @return {?}
     */
    removeFile($event, file) {
        $event.preventDefault();
        $event.stopPropagation();
        this._searchService.selectedItemToRemove(file);
    }
    /**
     * @param {?} size
     * @return {?}
     */
    getSizeString(size) {
        /** @type {?} */
        const mb = size / 1024 / 1024;
        if (mb > 1) {
            return (Math.round(mb * 100) / 100) + ' MB';
        }
        else {
            /** @type {?} */
            const kb = size / 1024;
            if (kb > 1) {
                return (Math.round(kb * 100) / 100) + ' KB';
            }
        }
        return size + ' Bytes';
    }
    /**
     * @return {?}
     */
    getFormatIcon() {
        return FileUtil.find(this.file.name, this.file.directory).icon;
    }
    /**
     * @return {?}
     */
    getFormatName() {
        return FileUtil.find(this.file.name, this.file.directory).format;
    }
    /**
     * @return {?}
     */
    getStatusIcon() {
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
    }
    /**
     * @return {?}
     */
    getStatusTitle() {
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
    }
}
IndexedFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-indexed-file',
                template: "<div *ngIf=\"file\" class=\"gd-indexed-file\">\n  <div class=\"gd-indexed-file-remove\" (click)=\"removeFile($event, file)\">\n    <span>&times;</span>\n  </div>\n  <div class=\"gd-indexed-file-name disabled\">\n    <fa-icon [icon]=\"['fas', getFormatIcon()]\" [class]=\"'ng-fa-icon'\" [ngClass]=\"['fa-' + getFormatIcon()]\"></fa-icon>\n    <div class=\"gd-file-name\">{{file.name}}\n      <div class=\"gd-file-format\">{{getFormatName()}}</div>\n    </div>\n  </div>\n  <div class=\"gd-file-size gd-indexed-file-size\">{{getSizeString(file.size)}}</div>\n  <div class=\"gd-indexed-file-status-wrapper\">\n    <div class=\"gd-indexed-file-status\">\n      <fa-icon class=\"gd-indexed-file-successful\" [icon]=\"['fas',getStatusIcon()]\" [spin]=\"getStatusIcon() === 'circle-notch'\"></fa-icon>\n      <span>{{getStatusTitle()}}</span>\n    </div>\n  </div>\n</div>",
                styles: [".gd-indexed-file{display:-webkit-box;display:flex;width:100%;height:98px;border-bottom:1px solid #e7e7e7;background-color:#fff;-webkit-box-align:center;align-items:center;position:relative}.gd-indexed-file-remove{font-size:18px;color:#6e6e6e;margin:0 24px;cursor:pointer}.gd-indexed-file-remove span{width:37px;height:37px;display:block;line-height:37px;text-align:center;font-weight:700}.gd-indexed-file-remove.disabled{color:#959da5;opacity:.4}.gd-indexed-file-name{display:-webkit-box;display:flex}.gd-indexed-file-name.disabled fa-icon{color:#6e6e6e}.gd-file-name{text-align:left;cursor:default}.gd-indexed-file-size{width:70px;color:#777;text-align:left;font-size:12px;right:265px;position:absolute}.gd-indexed-file-status-wrapper{color:#777;font-size:12px;right:104px;position:absolute;width:70px}.gd-indexed-file-status{display:-webkit-box;display:flex}.gd-indexed-file-status fa-icon{padding-right:7px}.gd-file-format{font-size:10px;color:#acacac;padding-top:4px}.gd-file-format.mobile{display:none}.disabled{cursor:not-allowed!important}.gd-indexed-file .ng-fa-icon.fa-file-pdf{color:#e21717}.gd-indexed-file .ng-fa-icon.fa-file-word{color:#6979b9}.gd-indexed-file .ng-fa-icon.fa-file-powerpoint{color:#e29417}.gd-indexed-file .ng-fa-icon.fa-file-excel{color:#3fa300}.gd-indexed-file .ng-fa-icon.fa-file-image{color:#e217da}.gd-indexed-file .ng-fa-icon.fa-file-text .fa-folder{color:#5d6a75}.gd-indexed-file-name .ng-fa-icon{font-size:33px}.gd-indexed-file-name fa-icon{font-size:32px;margin:0 11px 0 0}@media (max-width:1037px){.gd-indexed-file-size{display:none}.gd-file-format.mobile{display:block}.gd-file-format.mobile>fa-icon{color:#bebebe}.gd-file-format.mobile fa-icon{font-size:10px;margin-right:2.1px}.gd-file-format.mobile fa-icon:nth-child(1){margin-right:6px}.gd-file-format{font-size:11px}.gd-indexed-file-name{white-space:nowrap;overflow:hidden}.gd-indexed-file-status-wrapper{right:20px}.gd-indexed-file-remove{margin:0 16px 0 15px}}"]
            }] }
];
/** @nocollapse */
IndexedFileComponent.ctorParameters = () => [
    { type: SearchService }
];
IndexedFileComponent.propDecorators = {
    file: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    IndexedFileComponent.prototype.file;
    /**
     * @type {?}
     * @private
     */
    IndexedFileComponent.prototype._searchService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhlZC1maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zZWFyY2gvIiwic291cmNlcyI6WyJsaWIvaW5kZXhlZC1maWxlL2luZGV4ZWQtZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQWEsUUFBUSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFReEUsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUcvQixZQUFvQixjQUE2QjtRQUE3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtJQUNqRCxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBZTtRQUNoQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsSUFBWTs7Y0FDbEIsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSTtRQUM3QixJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQzdDO2FBQU07O2tCQUNDLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSTtZQUN0QixJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUM3QztTQUNGO1FBQ0QsT0FBTyxJQUFJLEdBQUcsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNoQyxLQUFLLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztZQUNqQyxLQUFLLGtCQUFrQixDQUFDLGdCQUFnQjtnQkFDdEMsT0FBTyxjQUFjLENBQUM7WUFDeEIsS0FBSyxrQkFBa0IsQ0FBQyxxQkFBcUI7Z0JBQzNDLE9BQU8sT0FBTyxDQUFDO1lBQ2pCLEtBQUssa0JBQWtCLENBQUMsa0JBQWtCO2dCQUN4QyxPQUFPLE9BQU8sQ0FBQztZQUNqQixLQUFLLGtCQUFrQixDQUFDLE9BQU87Z0JBQzdCLE9BQU8sU0FBUyxDQUFDO1lBQ25CO2dCQUNFLE9BQU8sT0FBTyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ2hDLEtBQUssa0JBQWtCLENBQUMsUUFBUSxDQUFDO1lBQ2pDLEtBQUssa0JBQWtCLENBQUMsZ0JBQWdCO2dCQUN0QyxPQUFPLFVBQVUsQ0FBQztZQUNwQixLQUFLLGtCQUFrQixDQUFDLHFCQUFxQjtnQkFDM0MsT0FBTyxTQUFTLENBQUM7WUFDbkIsS0FBSyxrQkFBa0IsQ0FBQyxrQkFBa0I7Z0JBQ3hDLE9BQU8sT0FBTyxDQUFBO1lBQ2hCLEtBQUssa0JBQWtCLENBQUMsT0FBTztnQkFDN0IsT0FBTyxTQUFTLENBQUM7WUFDbkI7Z0JBQ0UsT0FBTyxPQUFPLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7WUF4RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDYyQkFBNEM7O2FBRTdDOzs7O1lBUlEsYUFBYTs7O21CQVduQixLQUFLOzs7O0lBQU4sb0NBQWdDOzs7OztJQUVwQiw4Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlYXJjaFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VhcmNoLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpbGVNb2RlbCwgRmlsZVV0aWwgfSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgSW5kZXhlZEZpbGVNb2RlbCwgRmlsZUluZGV4aW5nU3RhdHVzIH0gZnJvbSAnLi4vc2VhcmNoLW1vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWluZGV4ZWQtZmlsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbmRleGVkLWZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbmRleGVkLWZpbGUuY29tcG9uZW50Lmxlc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEluZGV4ZWRGaWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZmlsZTogSW5kZXhlZEZpbGVNb2RlbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZWFyY2hTZXJ2aWNlOiBTZWFyY2hTZXJ2aWNlKSB7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgcmVtb3ZlRmlsZSgkZXZlbnQsIGZpbGU6IEZpbGVNb2RlbCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLnNlbGVjdGVkSXRlbVRvUmVtb3ZlKGZpbGUpO1xuICB9XG5cbiAgZ2V0U2l6ZVN0cmluZyhzaXplOiBudW1iZXIpIHtcbiAgICBjb25zdCBtYiA9IHNpemUgLyAxMDI0IC8gMTAyNDtcbiAgICBpZiAobWIgPiAxKSB7XG4gICAgICByZXR1cm4gKE1hdGgucm91bmQobWIgKiAxMDApIC8gMTAwKSArICcgTUInO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBrYiA9IHNpemUgLyAxMDI0O1xuICAgICAgaWYgKGtiID4gMSkge1xuICAgICAgICByZXR1cm4gKE1hdGgucm91bmQoa2IgKiAxMDApIC8gMTAwKSArICcgS0InO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2l6ZSArICcgQnl0ZXMnO1xuICB9XG5cbiAgZ2V0Rm9ybWF0SWNvbigpIHtcbiAgICByZXR1cm4gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUubmFtZSwgdGhpcy5maWxlLmRpcmVjdG9yeSkuaWNvbjtcbiAgfVxuXG4gIGdldEZvcm1hdE5hbWUoKSB7XG4gICAgcmV0dXJuIEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLm5hbWUsIHRoaXMuZmlsZS5kaXJlY3RvcnkpLmZvcm1hdDtcbiAgfVxuXG4gIGdldFN0YXR1c0ljb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLmZpbGUuZG9jdW1lbnRTdGF0dXMpIHtcbiAgICAgIGNhc2UgRmlsZUluZGV4aW5nU3RhdHVzLkluZGV4aW5nOlxuICAgICAgY2FzZSBGaWxlSW5kZXhpbmdTdGF0dXMuUGFzc3dvcmRSZXF1aXJlZDpcbiAgICAgICAgcmV0dXJuIFwiY2lyY2xlLW5vdGNoXCI7XG4gICAgICBjYXNlIEZpbGVJbmRleGluZ1N0YXR1cy5TdWNjZXNzZnVsbHlQcm9jZXNzZWQ6XG4gICAgICAgIHJldHVybiBcImNoZWNrXCI7XG4gICAgICBjYXNlIEZpbGVJbmRleGluZ1N0YXR1cy5Qcm9jZXNzZWRXaXRoRXJyb3I6XG4gICAgICAgIHJldHVybiBcInRpbWVzXCI7XG4gICAgICBjYXNlIEZpbGVJbmRleGluZ1N0YXR1cy5Ta2lwcGVkOlxuICAgICAgICByZXR1cm4gXCJmb3J3YXJkXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJ0aW1lc1wiO1xuICAgIH1cbiAgfVxuXG4gIGdldFN0YXR1c1RpdGxlKCkge1xuICAgIHN3aXRjaCAodGhpcy5maWxlLmRvY3VtZW50U3RhdHVzKSB7XG4gICAgICBjYXNlIEZpbGVJbmRleGluZ1N0YXR1cy5JbmRleGluZzpcbiAgICAgIGNhc2UgRmlsZUluZGV4aW5nU3RhdHVzLlBhc3N3b3JkUmVxdWlyZWQ6XG4gICAgICAgIHJldHVybiBcIkluZGV4aW5nXCI7XG4gICAgICBjYXNlIEZpbGVJbmRleGluZ1N0YXR1cy5TdWNjZXNzZnVsbHlQcm9jZXNzZWQ6XG4gICAgICAgIHJldHVybiBcIkluZGV4ZWRcIjtcbiAgICAgIGNhc2UgRmlsZUluZGV4aW5nU3RhdHVzLlByb2Nlc3NlZFdpdGhFcnJvcjpcbiAgICAgICAgcmV0dXJuIFwiRXJyb3JcIlxuICAgICAgY2FzZSBGaWxlSW5kZXhpbmdTdGF0dXMuU2tpcHBlZDpcbiAgICAgICAgcmV0dXJuIFwiU2tpcHBlZFwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwidGltZXNcIjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==