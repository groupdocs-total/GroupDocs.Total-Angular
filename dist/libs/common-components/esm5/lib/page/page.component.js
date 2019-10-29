/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var PageComponent = /** @class */ (function () {
    function PageComponent() {
    }
    /**
     * @return {?}
     */
    PageComponent.prototype.ngOnInit = /**
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
    PageComponent.prototype.ngOnChanges = /**
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
    };
    PageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-page',
                    template: "<div id=\"page-{{number}}\">\r\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\" [contentEditable]=\"(editable) ? true : false\"\r\n      gdEditor [text]=\"data\"></div>\r\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\r\n       alt=\"\"\r\n       *ngIf=\"data && !isHtml\">\r\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\r\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\r\n    &nbsp;Loading... Please wait.\r\n  </div>\r\n</div>\r\n",
                    styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper div{width:100%}/deep/ .gd-highlight{background-color:#ff0}/deep/ .gd-highlight-select{background-color:#ff9b00}.gd-page-image{height:100%!important;width:100%!important}"]
                }] }
    ];
    /** @nocollapse */
    PageComponent.ctorParameters = function () { return []; };
    PageComponent.propDecorators = {
        angle: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        number: [{ type: Input }],
        data: [{ type: Input }],
        isHtml: [{ type: Input }],
        editable: [{ type: Input }]
    };
    return PageComponent;
}());
export { PageComponent };
if (false) {
    /** @type {?} */
    PageComponent.prototype.angle;
    /** @type {?} */
    PageComponent.prototype.width;
    /** @type {?} */
    PageComponent.prototype.height;
    /** @type {?} */
    PageComponent.prototype.number;
    /** @type {?} */
    PageComponent.prototype.data;
    /** @type {?} */
    PageComponent.prototype.isHtml;
    /** @type {?} */
    PageComponent.prototype.editable;
    /** @type {?} */
    PageComponent.prototype.imgData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcGFnZS9wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBRWpGO0lBZ0JFO0lBQ0EsQ0FBQzs7OztJQUVELGdDQUFROzs7SUFBUjs7WUFDUSxJQUFJLEdBQUcsWUFBWSxDQUFBLEtBQUssSUFBSSxDQUFDLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7UUFDeEYsSUFBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUVELG1DQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQywyRUFBMkU7UUFDM0UsK0RBQStEO1FBQy9ELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7O1lBQ3pGLGtCQUFrQixHQUFHLHdCQUF3QjtRQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLGtCQUFrQixDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztTQUMzQjtJQUNILENBQUM7O2dCQW5DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLHNsQkFBb0M7O2lCQUVyQzs7Ozs7d0JBR0UsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzs7SUF1QlIsb0JBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQS9CWSxhQUFhOzs7SUFFeEIsOEJBQXVCOztJQUN2Qiw4QkFBdUI7O0lBQ3ZCLCtCQUF3Qjs7SUFDeEIsK0JBQXdCOztJQUN4Qiw2QkFBc0I7O0lBQ3RCLCtCQUF5Qjs7SUFDekIsaUNBQTJCOztJQUMzQixnQ0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtcGFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BhZ2UuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgYW5nbGU6IG51bWJlcjtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG51bWJlcjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRhdGE6IHN0cmluZztcclxuICBASW5wdXQoKSBpc0h0bWw6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZWRpdGFibGU6IGJvb2xlYW47XHJcbiAgaW1nRGF0YTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc3QgaXNJRSA9IC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhLyhNU0lFfFRyaWRlbnRcXC98RWRnZVxcLykvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgaWYoaXNJRSAmJiB0aGlzLm51bWJlciA9PT0gMCl7XHJcbiAgICAgIHRoaXMuZWRpdGFibGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIC8vIFRPRE86IHRoaXMgaXMgdGVtcG9yYXJ5IG5lZWRlZCB0byByZW1vdmUgdW5uZWVkZWQgc3BhY2VzIGFuZCBCT00gc3ltYm9sIFxyXG4gICAgLy8gd2hpY2ggbGVhZHMgdG8gdW5kZXNpcmVkIHNwYWNlcyBvbiB0aGUgdG9wIG9mIHRoZSBkb2NzIHBhZ2VzXHJcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEgIT09IG51bGwgPyB0aGlzLmRhdGEucmVwbGFjZSgvPlxccys8L2csJz48JykucmVwbGFjZSgvXFx1RkVGRi9nLFwiXCIpIDogbnVsbDtcclxuICAgIGNvbnN0IGRhdGFJbWFnZVBuZ0Jhc2U2NCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJztcclxuICAgIHRoaXMuaW1nRGF0YSA9IGRhdGFJbWFnZVBuZ0Jhc2U2NDtcclxuICAgIGlmICghdGhpcy5pc0h0bWwpIHtcclxuICAgICAgdGhpcy5pbWdEYXRhICs9IHRoaXMuZGF0YTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19