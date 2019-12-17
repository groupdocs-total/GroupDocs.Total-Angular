/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ExcelPageService } from '../excel-page.service';
export class ExcelPageComponent {
    /**
     * @param {?} _excelPageService
     */
    constructor(_excelPageService) {
        this._excelPageService = _excelPageService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const isIE = /*@cc_on!@*/ false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
        if (isIE && this.number === 0) {
            this.editable = false;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
        // which leads to undesired spaces on the top of the docs pages
        this.data = this.data !== null ? this.data.replace(/>\s+</g, '><').replace(/\uFEFF/g, "") : null;
        /** @type {?} */
        const dataImagePngBase64 = 'data:image/png;base64,';
        this.imgData = dataImagePngBase64;
        if (!this.isHtml) {
            this.imgData += this.data;
        }
        this.data = this.data !== null ? this._excelPageService.getUpdatedPage(this.data) : null;
    }
}
ExcelPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-excel-page',
                template: "<div id=\"page-{{number}}\" gdHostDynamic [ident]=\"number\">\r\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\" [contentEditable]=\"(editable) ? true : false\"\r\n      gdEditor [text]=\"data\"></div>\r\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\r\n       alt=\"\"\r\n       *ngIf=\"data && !isHtml\">\r\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\r\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\r\n    &nbsp;Loading... Please wait.\r\n  </div>\r\n</div>\r\n",
                styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper div{width:100%}/deep/ .gd-highlight{background-color:#ff0}/deep/ .gd-highlight-select{background-color:#ff9b00}/deep/ th{color:#959da5;background-color:#f4f4f4;font-weight:unset;border:1px solid #e7e7e7!important;text-transform:uppercase;font-size:14px;overflow:hidden}/deep/ td{border:1px solid #e7e7e7!important;vertical-align:middle!important}/deep/ tr td.excel:first-child{color:#959da5;background-color:#f4f4f4;font-weight:unset;width:1%;text-align:center}/deep/ tr td.excel:first-child div{width:80px}/deep/ tr th.excel:first-child{background-color:#f4f4f4;width:1%}/deep/ tr th.excel:first-child div{width:80px}.gd-page-image{height:100%!important;width:100%!important}"]
            }] }
];
/** @nocollapse */
ExcelPageComponent.ctorParameters = () => [
    { type: ExcelPageService }
];
ExcelPageComponent.propDecorators = {
    angle: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    number: [{ type: Input }],
    data: [{ type: Input }],
    isHtml: [{ type: Input }],
    editable: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZXhjZWwtcGFnZS9leGNlbC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBT3pELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFXN0IsWUFBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFDdkQsQ0FBQzs7OztJQUVELFFBQVE7O2NBQ0EsSUFBSSxHQUFHLFlBQVksQ0FBQSxLQUFLLElBQUksQ0FBQyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQ3hGLElBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsMkVBQTJFO1FBQzNFLCtEQUErRDtRQUMvRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOztjQUN6RixrQkFBa0IsR0FBRyx3QkFBd0I7UUFDbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzNGLENBQUM7OztZQXJDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHVuQkFBMEM7O2FBRTNDOzs7O1lBTlEsZ0JBQWdCOzs7b0JBU3RCLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7Ozs7SUFOTixtQ0FBdUI7O0lBQ3ZCLG1DQUF1Qjs7SUFDdkIsb0NBQXdCOztJQUN4QixvQ0FBd0I7O0lBQ3hCLGtDQUFzQjs7SUFDdEIsb0NBQXlCOztJQUN6QixzQ0FBMkI7O0lBQzNCLHFDQUFnQjs7Ozs7SUFFSiwrQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXhjZWxQYWdlU2VydmljZSB9IGZyb20gJy4uL2V4Y2VsLXBhZ2Uuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWV4Y2VsLXBhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9leGNlbC1wYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9leGNlbC1wYWdlLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEV4Y2VsUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgYW5nbGU6IG51bWJlcjtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG51bWJlcjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRhdGE6IHN0cmluZztcclxuICBASW5wdXQoKSBpc0h0bWw6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZWRpdGFibGU6IGJvb2xlYW47XHJcbiAgaW1nRGF0YTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9leGNlbFBhZ2VTZXJ2aWNlOiBFeGNlbFBhZ2VTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnN0IGlzSUUgPSAvKkBjY19vbiFAKi9mYWxzZSB8fCAhIS8oTVNJRXxUcmlkZW50XFwvfEVkZ2VcXC8pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgIGlmKGlzSUUgJiYgdGhpcy5udW1iZXIgPT09IDApe1xyXG4gICAgICB0aGlzLmVkaXRhYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAvLyBUT0RPOiB0aGlzIGlzIHRlbXBvcmFyeSBuZWVkZWQgdG8gcmVtb3ZlIHVubmVlZGVkIHNwYWNlcyBhbmQgQk9NIHN5bWJvbCBcclxuICAgIC8vIHdoaWNoIGxlYWRzIHRvIHVuZGVzaXJlZCBzcGFjZXMgb24gdGhlIHRvcCBvZiB0aGUgZG9jcyBwYWdlc1xyXG4gICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhICE9PSBudWxsID8gdGhpcy5kYXRhLnJlcGxhY2UoLz5cXHMrPC9nLCc+PCcpLnJlcGxhY2UoL1xcdUZFRkYvZyxcIlwiKSA6IG51bGw7XHJcbiAgICBjb25zdCBkYXRhSW1hZ2VQbmdCYXNlNjQgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCc7XHJcbiAgICB0aGlzLmltZ0RhdGEgPSBkYXRhSW1hZ2VQbmdCYXNlNjQ7XHJcbiAgICBpZiAoIXRoaXMuaXNIdG1sKSB7XHJcbiAgICAgIHRoaXMuaW1nRGF0YSArPSB0aGlzLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhICE9PSBudWxsID8gdGhpcy5fZXhjZWxQYWdlU2VydmljZS5nZXRVcGRhdGVkUGFnZSh0aGlzLmRhdGEpIDogbnVsbDtcclxuICB9XHJcbn0iXX0=