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
    }
}
ExcelPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-excel-page',
                template: "<div id=\"page-{{number}}\">\r\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\" [contentEditable]=\"(editable) ? true : false\"></div>\r\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\r\n       alt=\"\"\r\n       *ngIf=\"data && !isHtml\">\r\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\r\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\r\n    &nbsp;Loading... Please wait.\r\n  </div>\r\n</div>\r\n",
                styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper div{width:100%}::ng-deep .gd-highlight{background-color:#ff0}::ng-deep .gd-highlight-select{background-color:#ff9b00}::ng-deep th{color:#959da5;background-color:#f4f4f4;font-weight:unset;border:1px solid #e7e7e7!important;text-transform:uppercase;font-size:14px;overflow:hidden}::ng-deep td{vertical-align:middle!important}::ng-deep .page-grid-lines td{border:1px solid #e7e7e7!important}::ng-deep .page td:nth-child(1){border:1px solid #e7e7e7!important}::ng-deep tr td.excel:first-child{color:#959da5;background-color:#f4f4f4;font-weight:unset;width:1%;text-align:center}::ng-deep tr td.excel:first-child div{width:80px}::ng-deep tr th.excel:first-child{background-color:#f4f4f4;width:1%}::ng-deep tr th.excel:first-child div{width:80px}.gd-page-image{height:100%!important;width:100%!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL2V4Y2VsLXBhZ2UvZXhjZWwtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU96RCxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBVzdCLFlBQW9CLGlCQUFtQztRQUFuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO0lBQ3ZELENBQUM7Ozs7SUFFRCxRQUFROztjQUNBLElBQUksR0FBRyxZQUFZLENBQUEsS0FBSyxJQUFJLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztRQUN4RixJQUFHLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBQztZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLDJFQUEyRTtZQUMzRSwrREFBK0Q7WUFDL0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTtnQkFDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUM7cUJBQ2pDLE9BQU8sQ0FBQyxTQUFTLEVBQUMsRUFBRSxDQUFDO3FCQUNyQixPQUFPLENBQUMsaUJBQWlCLEVBQUUsb0NBQW9DLENBQUM7cUJBQ2hFLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxtQ0FBbUMsQ0FBQztxQkFDOUQsT0FBTyxDQUFDLGlCQUFpQixFQUFFLG9DQUFvQyxDQUFDO2dCQUNuRSxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQ1I7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNyRDtJQUNILENBQUM7OztZQXhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLG9qQkFBMEM7O2FBRTNDOzs7O1lBTlEsZ0JBQWdCOzs7b0JBU3RCLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7Ozs7SUFOTixtQ0FBdUI7O0lBQ3ZCLG1DQUF1Qjs7SUFDdkIsb0NBQXdCOztJQUN4QixvQ0FBd0I7O0lBQ3hCLGtDQUFzQjs7SUFDdEIsb0NBQXlCOztJQUN6QixzQ0FBMkI7O0lBQzNCLHFDQUFnQjs7Ozs7SUFFSiwrQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXhjZWxQYWdlU2VydmljZSB9IGZyb20gJy4uL2V4Y2VsLXBhZ2Uuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWV4Y2VsLXBhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9leGNlbC1wYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9leGNlbC1wYWdlLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEV4Y2VsUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgYW5nbGU6IG51bWJlcjtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG51bWJlcjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRhdGE6IHN0cmluZztcclxuICBASW5wdXQoKSBpc0h0bWw6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZWRpdGFibGU6IGJvb2xlYW47XHJcbiAgaW1nRGF0YTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9leGNlbFBhZ2VTZXJ2aWNlOiBFeGNlbFBhZ2VTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnN0IGlzSUUgPSAvKkBjY19vbiFAKi9mYWxzZSB8fCAhIS8oTVNJRXxUcmlkZW50XFwvfEVkZ2VcXC8pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgIGlmKGlzSUUgJiYgdGhpcy5udW1iZXIgPT09IDApe1xyXG4gICAgICB0aGlzLmVkaXRhYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZih0aGlzLmlzSHRtbCkge1xyXG4gICAgICAvLyBUT0RPOiB0aGlzIGlzIHRlbXBvcmFyeSBuZWVkZWQgdG8gcmVtb3ZlIHVubmVlZGVkIHNwYWNlcyBhbmQgQk9NIHN5bWJvbCBcclxuICAgICAgLy8gd2hpY2ggbGVhZHMgdG8gdW5kZXNpcmVkIHNwYWNlcyBvbiB0aGUgdG9wIG9mIHRoZSBkb2NzIHBhZ2VzXHJcbiAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YSBcclxuICAgICAgICA/IHRoaXMuZGF0YS5yZXBsYWNlKC8+XFxzKzwvZywnPjwnKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXHVGRUZGL2csXCJcIilcclxuICAgICAgICAucmVwbGFjZSgvaHJlZj1cIlxcL3ZpZXdlci9nLCAnaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC92aWV3ZXInKVxyXG4gICAgICAgIC5yZXBsYWNlKC9zcmM9XCJcXC92aWV3ZXIvZywgJ3NyYz1cImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC92aWV3ZXInKVxyXG4gICAgICAgIC5yZXBsYWNlKC9kYXRhPVwiXFwvdmlld2VyL2csICdkYXRhPVwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3ZpZXdlcicpXHJcbiAgICAgIDogbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW1nRGF0YSA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHRoaXMuZGF0YTtcclxuICAgIH1cclxuICB9XHJcbn0iXX0=