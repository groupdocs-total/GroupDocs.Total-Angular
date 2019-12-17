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
        // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
        // which leads to undesired spaces on the top of the docs pages
        this.data = this.data !== null ? this.data.replace(/>\s+</g, '><').replace(/\uFEFF/g, "") : null;
        /** @type {?} */
        var dataImagePngBase64 = 'data:image/png;base64,';
        this.imgData = dataImagePngBase64;
        if (!this.isHtml) {
            this.imgData += this.data;
        }
        this.data = this.data !== null ? this._excelPageService.getUpdatedPage(this.data) : null;
    };
    ExcelPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-excel-page',
                    template: "<div id=\"page-{{number}}\" gdHostDynamic [ident]=\"number\">\r\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\" [contentEditable]=\"(editable) ? true : false\"\r\n      gdEditor [text]=\"data\"></div>\r\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\r\n       alt=\"\"\r\n       *ngIf=\"data && !isHtml\">\r\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\r\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\r\n    &nbsp;Loading... Please wait.\r\n  </div>\r\n</div>\r\n",
                    styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper div{width:100%}/deep/ .gd-highlight{background-color:#ff0}/deep/ .gd-highlight-select{background-color:#ff9b00}/deep/ th{color:#959da5;background-color:#f4f4f4;font-weight:unset;border:1px solid #e7e7e7!important;text-transform:uppercase;font-size:14px;overflow:hidden}/deep/ td{border:1px solid #e7e7e7!important;vertical-align:middle!important}/deep/ tr td.excel:first-child{color:#959da5;background-color:#f4f4f4;font-weight:unset;width:1%;text-align:center}/deep/ tr td.excel:first-child div{width:80px}/deep/ tr th.excel:first-child{background-color:#f4f4f4;width:1%}/deep/ tr th.excel:first-child div{width:80px}.gd-page-image{height:100%!important;width:100%!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZXhjZWwtcGFnZS9leGNlbC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXpEO0lBZ0JFLDRCQUFvQixpQkFBbUM7UUFBbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtJQUN2RCxDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSOztZQUNRLElBQUksR0FBRyxZQUFZLENBQUEsS0FBSyxJQUFJLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztRQUN4RixJQUFHLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBQztZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7O0lBRUQsd0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLDJFQUEyRTtRQUMzRSwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7WUFDekYsa0JBQWtCLEdBQUcsd0JBQXdCO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQzNCO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMzRixDQUFDOztnQkFyQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qix1bkJBQTBDOztpQkFFM0M7Ozs7Z0JBTlEsZ0JBQWdCOzs7d0JBU3RCLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7O0lBeUJSLHlCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FqQ1ksa0JBQWtCOzs7SUFFN0IsbUNBQXVCOztJQUN2QixtQ0FBdUI7O0lBQ3ZCLG9DQUF3Qjs7SUFDeEIsb0NBQXdCOztJQUN4QixrQ0FBc0I7O0lBQ3RCLG9DQUF5Qjs7SUFDekIsc0NBQTJCOztJQUMzQixxQ0FBZ0I7Ozs7O0lBRUosK0NBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEV4Y2VsUGFnZVNlcnZpY2UgfSBmcm9tICcuLi9leGNlbC1wYWdlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1leGNlbC1wYWdlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZXhjZWwtcGFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZXhjZWwtcGFnZS5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeGNlbFBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIGFuZ2xlOiBudW1iZXI7XHJcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBudW1iZXI6IG51bWJlcjtcclxuICBASW5wdXQoKSBkYXRhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaXNIdG1sOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGVkaXRhYmxlOiBib29sZWFuO1xyXG4gIGltZ0RhdGE6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZXhjZWxQYWdlU2VydmljZTogRXhjZWxQYWdlU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zdCBpc0lFID0gLypAY2Nfb24hQCovZmFsc2UgfHwgISEvKE1TSUV8VHJpZGVudFxcL3xFZGdlXFwvKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICBpZihpc0lFICYmIHRoaXMubnVtYmVyID09PSAwKXtcclxuICAgICAgdGhpcy5lZGl0YWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgLy8gVE9ETzogdGhpcyBpcyB0ZW1wb3JhcnkgbmVlZGVkIHRvIHJlbW92ZSB1bm5lZWRlZCBzcGFjZXMgYW5kIEJPTSBzeW1ib2wgXHJcbiAgICAvLyB3aGljaCBsZWFkcyB0byB1bmRlc2lyZWQgc3BhY2VzIG9uIHRoZSB0b3Agb2YgdGhlIGRvY3MgcGFnZXNcclxuICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YSAhPT0gbnVsbCA/IHRoaXMuZGF0YS5yZXBsYWNlKC8+XFxzKzwvZywnPjwnKS5yZXBsYWNlKC9cXHVGRUZGL2csXCJcIikgOiBudWxsO1xyXG4gICAgY29uc3QgZGF0YUltYWdlUG5nQmFzZTY0ID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnO1xyXG4gICAgdGhpcy5pbWdEYXRhID0gZGF0YUltYWdlUG5nQmFzZTY0O1xyXG4gICAgaWYgKCF0aGlzLmlzSHRtbCkge1xyXG4gICAgICB0aGlzLmltZ0RhdGEgKz0gdGhpcy5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YSAhPT0gbnVsbCA/IHRoaXMuX2V4Y2VsUGFnZVNlcnZpY2UuZ2V0VXBkYXRlZFBhZ2UodGhpcy5kYXRhKSA6IG51bGw7XHJcbiAgfVxyXG59Il19