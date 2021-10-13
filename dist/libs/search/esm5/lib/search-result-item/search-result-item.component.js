/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SearchResultItemModel } from '../search-models';
import { FileUtil } from "@groupdocs.examples.angular/common-components";
var SearchResultItemComponent = /** @class */ (function () {
    function SearchResultItemComponent() {
    }
    /**
     * @return {?}
     */
    SearchResultItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} size
     * @return {?}
     */
    SearchResultItemComponent.prototype.getSizeString = /**
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
     * @param {?} file
     * @return {?}
     */
    SearchResultItemComponent.prototype.getFormatIcon = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return FileUtil.find(file.name, file.directory).icon;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    SearchResultItemComponent.prototype.getFormatName = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return FileUtil.find(file.name, file.directory).format;
    };
    /**
     * @param {?} occurrences
     * @return {?}
     */
    SearchResultItemComponent.prototype.getOccurrencesMessage = /**
     * @param {?} occurrences
     * @return {?}
     */
    function (occurrences) {
        return "Found <b>" + occurrences + "</b> occurrences";
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SearchResultItemComponent.prototype.togglePhrases = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        item.showPhrases = !item.showPhrases;
    };
    SearchResultItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-search-result-item',
                    template: "<div *ngIf=\"item\" class=\"gd-search-result-item\">\r\n  <div class=\"gd-found-file-name\">\r\n    <fa-icon [icon]=\"['fas', getFormatIcon(item)]\" [class]=\"'ng-fa-icon'\" [ngClass]=\"['fa-' + getFormatIcon(item)]\"></fa-icon>\r\n    <div class=\"gd-file-name gd-search-result-name\">{{item.name}}\r\n      <div class=\"gd-file-format\">{{getFormatName(item)}}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"gd-file-occurrences gd-search-result-size\">\r\n    <span class=\"gd-search-result-occurrences\" [innerHTML]=\"getOccurrencesMessage(item.occurrences)\" (click)=\"togglePhrases(item)\"></span>\r\n  </div>\r\n  <div class=\"gd-file-size gd-search-result-size\">{{getSizeString(item.size)}}</div>\r\n</div>\r\n<div class=\"gd-found-phrases-wrapper\" *ngIf=\"item?.showPhrases\">\r\n  <div class=\"gd-vertical-bar\"></div>\r\n  <div class=\"gd-found-phrases-content-wrapper\">\r\n    <div *ngIf=\"item\" class=\"gd-found-phrases-title\">\r\n      <div class=\"gd-found-file-name\">Found phrases</div>\r\n      <gd-button class=\"gd-close-btn\" [icon]=\"'times'\" [tooltip]=\"'Close'\" (click)=\"togglePhrases(item)\"></gd-button>\r\n    </div>\r\n    <div *ngFor=\"let phrase of item.foundPhrases\" class=\"gd-search-result-phrase\">\r\n      <div [innerHTML]=\"phrase\"></div>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [".gd-search-result-item{display:-webkit-box;display:flex;width:100%;height:98px;border-bottom:1px solid #e7e7e7;background-color:#fff;-webkit-box-align:center;align-items:center;position:relative}.gd-search-result-phrase{display:-webkit-box;display:flex;width:100%;height:40px;border-bottom:1px solid #e7e7e7;background-color:#fff;-webkit-box-align:center;align-items:center;font-size:13px;padding-left:17px;overflow:hidden}.gd-search-result-phrase ::ng-deep span{font-weight:700}.gd-found-phrases-title{display:-webkit-box;display:flex;font-size:13px;text-transform:uppercase;color:#3e4e5a;width:calc(100% + 17px);height:60px;background-color:#f4f4f4;font-weight:700;-webkit-box-align:center;align-items:center;position:relative}.gd-found-phrases-title .gd-close-btn{position:absolute;right:30px}.gd-vertical-bar{width:17px;background-color:#3e4e5a}.gd-found-phrases-content-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:calc(100% - 34px)}.gd-found-phrases-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.gd-found-file-name{display:-webkit-box;display:flex;width:253px;padding-left:17px}.gd-search-result-name{text-align:left;cursor:default;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}.gd-search-result-size{text-align:left;font-size:12px}.gd-file-size{width:60px;color:#777;position:absolute;right:65px}.gd-file-format{font-size:10px;color:#acacac;padding-top:4px}.gd-file-format.mobile{display:none}.gd-file-occurrences{color:#777}.gd-search-result-item .ng-fa-icon.fa-file-pdf{color:#e21717}.gd-search-result-item .ng-fa-icon.fa-file-word{color:#6979b9}.gd-search-result-item .ng-fa-icon.fa-file-powerpoint{color:#e29417}.gd-search-result-item .ng-fa-icon.fa-file-excel{color:#3fa300}.gd-search-result-item .ng-fa-icon.fa-file-image{color:#e217da}.gd-search-result-item .ng-fa-icon.fa-file-text .fa-folder{color:#5d6a75}.gd-found-file-name .ng-fa-icon{font-size:33px}.gd-found-file-name fa-icon{font-size:32px;margin:0 11px 0 0}.gd-search-result-occurrences{text-decoration:underline;cursor:pointer}@media (max-width:1037px){.gd-file-size{display:none}.gd-file-format.mobile{display:block}.gd-file-format.mobile>fa-icon{color:#bebebe}.gd-file-format.mobile fa-icon{font-size:10px;margin-right:2.1px}.gd-file-format.mobile fa-icon:nth-child(1){margin-right:6px}.gd-file-format{font-size:11px}.gd-found-file-name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}.gd-file-occurrences{width:94px;position:absolute;right:15px}}"]
                }] }
    ];
    /** @nocollapse */
    SearchResultItemComponent.ctorParameters = function () { return []; };
    SearchResultItemComponent.propDecorators = {
        item: [{ type: Input }]
    };
    return SearchResultItemComponent;
}());
export { SearchResultItemComponent };
if (false) {
    /** @type {?} */
    SearchResultItemComponent.prototype.item;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zZWFyY2gvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLXJlc3VsdC1pdGVtL3NlYXJjaC1yZXN1bHQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pELE9BQU8sRUFBYSxRQUFRLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUVwRjtJQVNFO0lBQ0EsQ0FBQzs7OztJQUVELDRDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7O0lBRUQsaURBQWE7Ozs7SUFBYixVQUFjLElBQVk7O1lBQ2xCLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUk7UUFDN0IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUM3QzthQUFNOztnQkFDQyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUk7WUFDdEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDN0M7U0FDRjtRQUNELE9BQU8sSUFBSSxHQUFHLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELGlEQUFhOzs7O0lBQWIsVUFBYyxJQUFlO1FBQzNCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdkQsQ0FBQzs7Ozs7SUFFRCxpREFBYTs7OztJQUFiLFVBQWMsSUFBZTtRQUMzQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQseURBQXFCOzs7O0lBQXJCLFVBQXNCLFdBQW1CO1FBQ3ZDLE9BQU8sV0FBVyxHQUFHLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQTtJQUN2RCxDQUFDOzs7OztJQUVELGlEQUFhOzs7O0lBQWIsVUFBYyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7O2dCQTFDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsdXpDQUFrRDs7aUJBRW5EOzs7Ozt1QkFHRSxLQUFLOztJQW9DUixnQ0FBQztDQUFBLEFBM0NELElBMkNDO1NBckNZLHlCQUF5Qjs7O0lBQ3BDLHlDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRJdGVtTW9kZWwgfSBmcm9tICcuLi9zZWFyY2gtbW9kZWxzJztcclxuaW1wb3J0IHsgRmlsZU1vZGVsLCBGaWxlVXRpbCB9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2Qtc2VhcmNoLXJlc3VsdC1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLXJlc3VsdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtcmVzdWx0LWl0ZW0uY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaFJlc3VsdEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGl0ZW06IFNlYXJjaFJlc3VsdEl0ZW1Nb2RlbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG4gIFxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgZ2V0U2l6ZVN0cmluZyhzaXplOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IG1iID0gc2l6ZSAvIDEwMjQgLyAxMDI0O1xyXG4gICAgaWYgKG1iID4gMSkge1xyXG4gICAgICByZXR1cm4gKE1hdGgucm91bmQobWIgKiAxMDApIC8gMTAwKSArICcgTUInO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qga2IgPSBzaXplIC8gMTAyNDtcclxuICAgICAgaWYgKGtiID4gMSkge1xyXG4gICAgICAgIHJldHVybiAoTWF0aC5yb3VuZChrYiAqIDEwMCkgLyAxMDApICsgJyBLQic7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzaXplICsgJyBCeXRlcyc7XHJcbiAgfVxyXG5cclxuICBnZXRGb3JtYXRJY29uKGZpbGU6IEZpbGVNb2RlbCkge1xyXG4gICAgcmV0dXJuIEZpbGVVdGlsLmZpbmQoZmlsZS5uYW1lLCBmaWxlLmRpcmVjdG9yeSkuaWNvbjtcclxuICB9XHJcblxyXG4gIGdldEZvcm1hdE5hbWUoZmlsZTogRmlsZU1vZGVsKSB7XHJcbiAgICByZXR1cm4gRmlsZVV0aWwuZmluZChmaWxlLm5hbWUsIGZpbGUuZGlyZWN0b3J5KS5mb3JtYXQ7XHJcbiAgfVxyXG5cclxuICBnZXRPY2N1cnJlbmNlc01lc3NhZ2Uob2NjdXJyZW5jZXM6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIFwiRm91bmQgPGI+XCIgKyBvY2N1cnJlbmNlcyArIFwiPC9iPiBvY2N1cnJlbmNlc1wiXHJcbiAgfVxyXG5cclxuICB0b2dnbGVQaHJhc2VzKGl0ZW0pIHtcclxuICAgIGl0ZW0uc2hvd1BocmFzZXMgPSAhaXRlbS5zaG93UGhyYXNlcztcclxuICB9XHJcbn1cclxuIl19