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
                    template: "<div id=\"page-{{number}}\">\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\" [contentEditable]=\"(editable) ? true : false\"></div>\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\n       alt=\"\"\n       *ngIf=\"data && !isHtml\">\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n    &nbsp;Loading... Please wait.\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL2V4Y2VsLXBhZ2UvZXhjZWwtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV6RDtJQWdCRSw0QkFBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFDdkQsQ0FBQzs7OztJQUVELHFDQUFROzs7SUFBUjs7WUFDUSxJQUFJLEdBQUcsWUFBWSxDQUFBLEtBQUssSUFBSSxDQUFDLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7UUFDeEYsSUFBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZCwyRUFBMkU7WUFDM0UsK0RBQStEO1lBQy9ELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7Z0JBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDO3FCQUNqQyxPQUFPLENBQUMsU0FBUyxFQUFDLEVBQUUsQ0FBQztxQkFDckIsT0FBTyxDQUFDLGlCQUFpQixFQUFFLG9DQUFvQyxDQUFDO3FCQUNoRSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsbUNBQW1DLENBQUM7cUJBQzlELE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxvQ0FBb0MsQ0FBQztnQkFDbkUsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUNSO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLHdCQUF3QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDckQ7SUFDSCxDQUFDOztnQkF4Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixnaUJBQTBDOztpQkFFM0M7Ozs7Z0JBTlEsZ0JBQWdCOzs7d0JBU3RCLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7O0lBNEJSLHlCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0FwQ1ksa0JBQWtCOzs7SUFFN0IsbUNBQXVCOztJQUN2QixtQ0FBdUI7O0lBQ3ZCLG9DQUF3Qjs7SUFDeEIsb0NBQXdCOztJQUN4QixrQ0FBc0I7O0lBQ3RCLG9DQUF5Qjs7SUFDekIsc0NBQTJCOztJQUMzQixxQ0FBZ0I7Ozs7O0lBRUosK0NBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFeGNlbFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vZXhjZWwtcGFnZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtZXhjZWwtcGFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9leGNlbC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhjZWwtcGFnZS5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEV4Y2VsUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBhbmdsZTogbnVtYmVyO1xuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgbnVtYmVyOiBudW1iZXI7XG4gIEBJbnB1dCgpIGRhdGE6IHN0cmluZztcbiAgQElucHV0KCkgaXNIdG1sOiBib29sZWFuO1xuICBASW5wdXQoKSBlZGl0YWJsZTogYm9vbGVhbjtcbiAgaW1nRGF0YTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2V4Y2VsUGFnZVNlcnZpY2U6IEV4Y2VsUGFnZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGlzSUUgPSAvKkBjY19vbiFAKi9mYWxzZSB8fCAhIS8oTVNJRXxUcmlkZW50XFwvfEVkZ2VcXC8pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICBpZihpc0lFICYmIHRoaXMubnVtYmVyID09PSAwKXtcbiAgICAgIHRoaXMuZWRpdGFibGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYodGhpcy5pc0h0bWwpIHtcbiAgICAgIC8vIFRPRE86IHRoaXMgaXMgdGVtcG9yYXJ5IG5lZWRlZCB0byByZW1vdmUgdW5uZWVkZWQgc3BhY2VzIGFuZCBCT00gc3ltYm9sIFxuICAgICAgLy8gd2hpY2ggbGVhZHMgdG8gdW5kZXNpcmVkIHNwYWNlcyBvbiB0aGUgdG9wIG9mIHRoZSBkb2NzIHBhZ2VzXG4gICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEgXG4gICAgICAgID8gdGhpcy5kYXRhLnJlcGxhY2UoLz5cXHMrPC9nLCc+PCcpXG4gICAgICAgIC5yZXBsYWNlKC9cXHVGRUZGL2csXCJcIilcbiAgICAgICAgLnJlcGxhY2UoL2hyZWY9XCJcXC92aWV3ZXIvZywgJ2hyZWY9XCJodHRwOi8vbG9jYWxob3N0OjgwODAvdmlld2VyJylcbiAgICAgICAgLnJlcGxhY2UoL3NyYz1cIlxcL3ZpZXdlci9nLCAnc3JjPVwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3ZpZXdlcicpXG4gICAgICAgIC5yZXBsYWNlKC9kYXRhPVwiXFwvdmlld2VyL2csICdkYXRhPVwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3ZpZXdlcicpXG4gICAgICA6IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW1nRGF0YSA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHRoaXMuZGF0YTtcbiAgICB9XG4gIH1cbn0iXX0=