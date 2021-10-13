/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SearchResultItemModel } from '../search-models';
import { FileUtil } from "@groupdocs.examples.angular/common-components";
export class SearchResultItemComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
     * @param {?} file
     * @return {?}
     */
    getFormatIcon(file) {
        return FileUtil.find(file.name, file.directory).icon;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    getFormatName(file) {
        return FileUtil.find(file.name, file.directory).format;
    }
    /**
     * @param {?} occurrences
     * @return {?}
     */
    getOccurrencesMessage(occurrences) {
        return "Found <b>" + occurrences + "</b> occurrences";
    }
    /**
     * @param {?} item
     * @return {?}
     */
    togglePhrases(item) {
        item.showPhrases = !item.showPhrases;
    }
}
SearchResultItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-search-result-item',
                template: "<div *ngIf=\"item\" class=\"gd-search-result-item\">\r\n  <div class=\"gd-found-file-name\">\r\n    <fa-icon [icon]=\"['fas', getFormatIcon(item)]\" [class]=\"'ng-fa-icon'\" [ngClass]=\"['fa-' + getFormatIcon(item)]\"></fa-icon>\r\n    <div class=\"gd-file-name gd-search-result-name\">{{item.name}}\r\n      <div class=\"gd-file-format\">{{getFormatName(item)}}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"gd-file-occurrences gd-search-result-size\">\r\n    <span class=\"gd-search-result-occurrences\" [innerHTML]=\"getOccurrencesMessage(item.occurrences)\" (click)=\"togglePhrases(item)\"></span>\r\n  </div>\r\n  <div class=\"gd-file-size gd-search-result-size\">{{getSizeString(item.size)}}</div>\r\n</div>\r\n<div class=\"gd-found-phrases-wrapper\" *ngIf=\"item?.showPhrases\">\r\n  <div class=\"gd-vertical-bar\"></div>\r\n  <div class=\"gd-found-phrases-content-wrapper\">\r\n    <div *ngIf=\"item\" class=\"gd-found-phrases-title\">\r\n      <div class=\"gd-found-file-name\">Found phrases</div>\r\n      <gd-button class=\"gd-close-btn\" [icon]=\"'times'\" [tooltip]=\"'Close'\" (click)=\"togglePhrases(item)\"></gd-button>\r\n    </div>\r\n    <div *ngFor=\"let phrase of item.foundPhrases\" class=\"gd-search-result-phrase\">\r\n      <div [innerHTML]=\"phrase\"></div>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [".gd-search-result-item{display:-webkit-box;display:flex;width:100%;height:98px;border-bottom:1px solid #e7e7e7;background-color:#fff;-webkit-box-align:center;align-items:center;position:relative}.gd-search-result-phrase{display:-webkit-box;display:flex;width:100%;height:40px;border-bottom:1px solid #e7e7e7;background-color:#fff;-webkit-box-align:center;align-items:center;font-size:13px;padding-left:17px;overflow:hidden}.gd-search-result-phrase ::ng-deep span{font-weight:700}.gd-found-phrases-title{display:-webkit-box;display:flex;font-size:13px;text-transform:uppercase;color:#3e4e5a;width:calc(100% + 17px);height:60px;background-color:#f4f4f4;font-weight:700;-webkit-box-align:center;align-items:center;position:relative}.gd-found-phrases-title .gd-close-btn{position:absolute;right:30px}.gd-vertical-bar{width:17px;background-color:#3e4e5a}.gd-found-phrases-content-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:calc(100% - 34px)}.gd-found-phrases-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.gd-found-file-name{display:-webkit-box;display:flex;width:253px;padding-left:17px}.gd-search-result-name{text-align:left;cursor:default;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}.gd-search-result-size{text-align:left;font-size:12px}.gd-file-size{width:60px;color:#777;position:absolute;right:65px}.gd-file-format{font-size:10px;color:#acacac;padding-top:4px}.gd-file-format.mobile{display:none}.gd-file-occurrences{color:#777}.gd-search-result-item .ng-fa-icon.fa-file-pdf{color:#e21717}.gd-search-result-item .ng-fa-icon.fa-file-word{color:#6979b9}.gd-search-result-item .ng-fa-icon.fa-file-powerpoint{color:#e29417}.gd-search-result-item .ng-fa-icon.fa-file-excel{color:#3fa300}.gd-search-result-item .ng-fa-icon.fa-file-image{color:#e217da}.gd-search-result-item .ng-fa-icon.fa-file-text .fa-folder{color:#5d6a75}.gd-found-file-name .ng-fa-icon{font-size:33px}.gd-found-file-name fa-icon{font-size:32px;margin:0 11px 0 0}.gd-search-result-occurrences{text-decoration:underline;cursor:pointer}@media (max-width:1037px){.gd-file-size{display:none}.gd-file-format.mobile{display:block}.gd-file-format.mobile>fa-icon{color:#bebebe}.gd-file-format.mobile fa-icon{font-size:10px;margin-right:2.1px}.gd-file-format.mobile fa-icon:nth-child(1){margin-right:6px}.gd-file-format{font-size:11px}.gd-found-file-name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}.gd-file-occurrences{width:94px;position:absolute;right:15px}}"]
            }] }
];
/** @nocollapse */
SearchResultItemComponent.ctorParameters = () => [];
SearchResultItemComponent.propDecorators = {
    item: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SearchResultItemComponent.prototype.item;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zZWFyY2gvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLXJlc3VsdC1pdGVtL3NlYXJjaC1yZXN1bHQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pELE9BQU8sRUFBYSxRQUFRLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQVFwRixNQUFNLE9BQU8seUJBQXlCO0lBR3BDO0lBQ0EsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxJQUFZOztjQUNsQixFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJO1FBQzdCLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDN0M7YUFBTTs7a0JBQ0MsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJO1lBQ3RCLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDVixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQzdDO1NBQ0Y7UUFDRCxPQUFPLElBQUksR0FBRyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsSUFBZTtRQUMzQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLElBQWU7UUFDM0IsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELHFCQUFxQixDQUFDLFdBQW1CO1FBQ3ZDLE9BQU8sV0FBVyxHQUFHLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQTtJQUN2RCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7OztZQTFDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsdXpDQUFrRDs7YUFFbkQ7Ozs7O21CQUdFLEtBQUs7Ozs7SUFBTix5Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0SXRlbU1vZGVsIH0gZnJvbSAnLi4vc2VhcmNoLW1vZGVscyc7XHJcbmltcG9ydCB7IEZpbGVNb2RlbCwgRmlsZVV0aWwgfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXNlYXJjaC1yZXN1bHQtaXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1yZXN1bHQtaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLXJlc3VsdC1pdGVtLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hSZXN1bHRJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpdGVtOiBTZWFyY2hSZXN1bHRJdGVtTW9kZWw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuICBcclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIGdldFNpemVTdHJpbmcoc2l6ZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBtYiA9IHNpemUgLyAxMDI0IC8gMTAyNDtcclxuICAgIGlmIChtYiA+IDEpIHtcclxuICAgICAgcmV0dXJuIChNYXRoLnJvdW5kKG1iICogMTAwKSAvIDEwMCkgKyAnIE1CJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGtiID0gc2l6ZSAvIDEwMjQ7XHJcbiAgICAgIGlmIChrYiA+IDEpIHtcclxuICAgICAgICByZXR1cm4gKE1hdGgucm91bmQoa2IgKiAxMDApIC8gMTAwKSArICcgS0InO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2l6ZSArICcgQnl0ZXMnO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rm9ybWF0SWNvbihmaWxlOiBGaWxlTW9kZWwpIHtcclxuICAgIHJldHVybiBGaWxlVXRpbC5maW5kKGZpbGUubmFtZSwgZmlsZS5kaXJlY3RvcnkpLmljb247XHJcbiAgfVxyXG5cclxuICBnZXRGb3JtYXROYW1lKGZpbGU6IEZpbGVNb2RlbCkge1xyXG4gICAgcmV0dXJuIEZpbGVVdGlsLmZpbmQoZmlsZS5uYW1lLCBmaWxlLmRpcmVjdG9yeSkuZm9ybWF0O1xyXG4gIH1cclxuXHJcbiAgZ2V0T2NjdXJyZW5jZXNNZXNzYWdlKG9jY3VycmVuY2VzOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBcIkZvdW5kIDxiPlwiICsgb2NjdXJyZW5jZXMgKyBcIjwvYj4gb2NjdXJyZW5jZXNcIlxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUGhyYXNlcyhpdGVtKSB7XHJcbiAgICBpdGVtLnNob3dQaHJhc2VzID0gIWl0ZW0uc2hvd1BocmFzZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==