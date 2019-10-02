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
                    styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper img{width:inherit}.gd-wrapper div{width:100%}.gd-highlight{background-color:#ff0}.gd-highlight-select{background-color:#ff9b00}.gd-page-image{height:100%!important;width:100%!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcGFnZS9wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQXNELE1BQU0sZUFBZSxDQUFDO0FBRXBHO0lBZ0JFO0lBQ0EsQ0FBQzs7OztJQUVELGdDQUFROzs7SUFBUjs7WUFDUSxJQUFJLEdBQUcsWUFBWSxDQUFBLEtBQUssSUFBSSxDQUFDLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7UUFDeEYsSUFBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUVELG1DQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjs7WUFDMUIsa0JBQWtCLEdBQUcsd0JBQXdCO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsc2xCQUFvQzs7aUJBRXJDOzs7Ozt3QkFHRSxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQXFCUixvQkFBQztDQUFBLEFBbENELElBa0NDO1NBN0JZLGFBQWE7OztJQUV4Qiw4QkFBdUI7O0lBQ3ZCLDhCQUF1Qjs7SUFDdkIsK0JBQXdCOztJQUN4QiwrQkFBd0I7O0lBQ3hCLDZCQUFzQjs7SUFDdEIsK0JBQXlCOztJQUN6QixpQ0FBMkI7O0lBQzNCLGdDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtcGFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BhZ2UuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgYW5nbGU6IG51bWJlcjtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG51bWJlcjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRhdGE6IHN0cmluZztcclxuICBASW5wdXQoKSBpc0h0bWw6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZWRpdGFibGU6IGJvb2xlYW47XHJcbiAgaW1nRGF0YTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc3QgaXNJRSA9IC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhLyhNU0lFfFRyaWRlbnRcXC98RWRnZVxcLykvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgaWYoaXNJRSAmJiB0aGlzLm51bWJlciA9PT0gMCl7XHJcbiAgICAgIHRoaXMuZWRpdGFibGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRhdGFJbWFnZVBuZ0Jhc2U2NCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJztcclxuICAgIHRoaXMuaW1nRGF0YSA9IGRhdGFJbWFnZVBuZ0Jhc2U2NDtcclxuICAgIGlmICghdGhpcy5pc0h0bWwpIHtcclxuICAgICAgdGhpcy5pbWdEYXRhICs9IHRoaXMuZGF0YTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==