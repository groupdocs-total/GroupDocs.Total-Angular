/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ExcelPageService } from '../excel-page.service';
var ExcelPageComponent = /** @class */ (function () {
    function ExcelPageComponent(_excelPageService) {
        this._excelPageService = _excelPageService;
    }
    /**
     * @return {?}
     */
    ExcelPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isIE = /*@cc_on!@*/ false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
        if (isIE && this.number === 0) {
            this.editable = false;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ExcelPageComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isHtml) {
            // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
            // which leads to undesired spaces on the top of the docs pages
            this.data = this.data
                ? this.data.replace(/>\s+</g, '><')
                    .replace(/\uFEFF/g, "")
                    .replace(/href="\/viewer/g, 'href="http://localhost:8080/viewer')
                    .replace(/src="\/viewer/g, 'src="http://localhost:8080/viewer')
                    .replace(/data="\/viewer/g, 'data="http://localhost:8080/viewer')
                : null;
        }
        else {
            this.imgData = 'data:image/png;base64,' + this.data;
        }
    };
    ExcelPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-excel-page',
                    template: "<div id=\"page-{{number}}\">\r\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\" [contentEditable]=\"(editable) ? true : false\"></div>\r\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\r\n       alt=\"\"\r\n       *ngIf=\"data && !isHtml\">\r\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\r\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\r\n    &nbsp;Loading... Please wait.\r\n  </div>\r\n</div>\r\n",
                    styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper div{width:100%}::ng-deep .gd-highlight{background-color:#ff0}::ng-deep .gd-highlight-select{background-color:#ff9b00}::ng-deep th{color:#959da5;background-color:#f4f4f4;font-weight:unset;border:1px solid #e7e7e7!important;text-transform:uppercase;font-size:14px;overflow:hidden}::ng-deep td{vertical-align:middle!important}::ng-deep .page-grid-lines td{border:1px solid #e7e7e7!important}::ng-deep .page td:nth-child(1){border:1px solid #e7e7e7!important}::ng-deep tr td.excel:first-child{color:#959da5;background-color:#f4f4f4;font-weight:unset;width:1%;text-align:center}::ng-deep tr td.excel:first-child div{width:80px}::ng-deep tr th.excel:first-child{background-color:#f4f4f4;width:1%}::ng-deep tr th.excel:first-child div{width:80px}.gd-page-image{height:100%!important;width:100%!important}"]
                }] }
    ];
    /** @nocollapse */
    ExcelPageComponent.ctorParameters = function () { return [
        { type: ExcelPageService }
    ]; };
    ExcelPageComponent.propDecorators = {
        angle: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        number: [{ type: Input }],
        data: [{ type: Input }],
        isHtml: [{ type: Input }],
        editable: [{ type: Input }]
    };
    return ExcelPageComponent;
}());
export { ExcelPageComponent };
if (false) {
    /** @type {?} */
    ExcelPageComponent.prototype.angle;
    /** @type {?} */
    ExcelPageComponent.prototype.width;
    /** @type {?} */
    ExcelPageComponent.prototype.height;
    /** @type {?} */
    ExcelPageComponent.prototype.number;
    /** @type {?} */
    ExcelPageComponent.prototype.data;
    /** @type {?} */
    ExcelPageComponent.prototype.isHtml;
    /** @type {?} */
    ExcelPageComponent.prototype.editable;
    /** @type {?} */
    ExcelPageComponent.prototype.imgData;
    /**
     * @type {?}
     * @private
     */
    ExcelPageComponent.prototype._excelPageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL2V4Y2VsLXBhZ2UvZXhjZWwtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV6RDtJQWdCRSw0QkFBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFDdkQsQ0FBQzs7OztJQUVELHFDQUFROzs7SUFBUjs7WUFDUSxJQUFJLEdBQUcsWUFBWSxDQUFBLEtBQUssSUFBSSxDQUFDLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7UUFDeEYsSUFBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZCwyRUFBMkU7WUFDM0UsK0RBQStEO1lBQy9ELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7Z0JBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDO3FCQUNqQyxPQUFPLENBQUMsU0FBUyxFQUFDLEVBQUUsQ0FBQztxQkFDckIsT0FBTyxDQUFDLGlCQUFpQixFQUFFLG9DQUFvQyxDQUFDO3FCQUNoRSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsbUNBQW1DLENBQUM7cUJBQzlELE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxvQ0FBb0MsQ0FBQztnQkFDbkUsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUNSO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLHdCQUF3QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDckQ7SUFDSCxDQUFDOztnQkF4Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixvakJBQTBDOztpQkFFM0M7Ozs7Z0JBTlEsZ0JBQWdCOzs7d0JBU3RCLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7O0lBNEJSLHlCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0FwQ1ksa0JBQWtCOzs7SUFFN0IsbUNBQXVCOztJQUN2QixtQ0FBdUI7O0lBQ3ZCLG9DQUF3Qjs7SUFDeEIsb0NBQXdCOztJQUN4QixrQ0FBc0I7O0lBQ3RCLG9DQUF5Qjs7SUFDekIsc0NBQTJCOztJQUMzQixxQ0FBZ0I7Ozs7O0lBRUosK0NBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEV4Y2VsUGFnZVNlcnZpY2UgfSBmcm9tICcuLi9leGNlbC1wYWdlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1leGNlbC1wYWdlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZXhjZWwtcGFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZXhjZWwtcGFnZS5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeGNlbFBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIGFuZ2xlOiBudW1iZXI7XHJcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBudW1iZXI6IG51bWJlcjtcclxuICBASW5wdXQoKSBkYXRhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaXNIdG1sOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGVkaXRhYmxlOiBib29sZWFuO1xyXG4gIGltZ0RhdGE6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZXhjZWxQYWdlU2VydmljZTogRXhjZWxQYWdlU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zdCBpc0lFID0gLypAY2Nfb24hQCovZmFsc2UgfHwgISEvKE1TSUV8VHJpZGVudFxcL3xFZGdlXFwvKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICBpZihpc0lFICYmIHRoaXMubnVtYmVyID09PSAwKXtcclxuICAgICAgdGhpcy5lZGl0YWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYodGhpcy5pc0h0bWwpIHtcclxuICAgICAgLy8gVE9ETzogdGhpcyBpcyB0ZW1wb3JhcnkgbmVlZGVkIHRvIHJlbW92ZSB1bm5lZWRlZCBzcGFjZXMgYW5kIEJPTSBzeW1ib2wgXHJcbiAgICAgIC8vIHdoaWNoIGxlYWRzIHRvIHVuZGVzaXJlZCBzcGFjZXMgb24gdGhlIHRvcCBvZiB0aGUgZG9jcyBwYWdlc1xyXG4gICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEgXHJcbiAgICAgICAgPyB0aGlzLmRhdGEucmVwbGFjZSgvPlxccys8L2csJz48JylcclxuICAgICAgICAucmVwbGFjZSgvXFx1RkVGRi9nLFwiXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL2hyZWY9XCJcXC92aWV3ZXIvZywgJ2hyZWY9XCJodHRwOi8vbG9jYWxob3N0OjgwODAvdmlld2VyJylcclxuICAgICAgICAucmVwbGFjZSgvc3JjPVwiXFwvdmlld2VyL2csICdzcmM9XCJodHRwOi8vbG9jYWxob3N0OjgwODAvdmlld2VyJylcclxuICAgICAgICAucmVwbGFjZSgvZGF0YT1cIlxcL3ZpZXdlci9nLCAnZGF0YT1cImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC92aWV3ZXInKVxyXG4gICAgICA6IG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmltZ0RhdGEgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyB0aGlzLmRhdGE7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19