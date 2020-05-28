/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class PageComponent {
    constructor() {
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
    }
}
PageComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-page',
                template: "<div id=\"page-{{number}}\" gdHostDynamic [ident]=\"number\">\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\" [contentEditable]=\"(editable) ? true : false\"\n      gdEditor [text]=\"data\"></div>\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\n       alt=\"\"\n       *ngIf=\"data && !isHtml\">\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n    &nbsp;Loading... Please wait.\n  </div>\n</div>\n",
                styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper div{width:100%}::ng-deep .gd-highlight{background-color:#ff0}::ng-deep .gd-highlight-select{background-color:#ff9b00}"]
            }] }
];
/** @nocollapse */
PageComponent.ctorParameters = () => [];
PageComponent.propDecorators = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcGFnZS9wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBT2pGLE1BQU0sT0FBTyxhQUFhO0lBV3hCO0lBQ0EsQ0FBQzs7OztJQUVELFFBQVE7O2NBQ0EsSUFBSSxHQUFHLFlBQVksQ0FBQSxLQUFLLElBQUksQ0FBQyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQ3hGLElBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsMkVBQTJFO1FBQzNFLCtEQUErRDtRQUMvRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOztjQUN6RixrQkFBa0IsR0FBRyx3QkFBd0I7UUFDbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixpbUJBQW9DOzthQUVyQzs7Ozs7b0JBR0UsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSzttQkFDTCxLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7OztJQU5OLDhCQUF1Qjs7SUFDdkIsOEJBQXVCOztJQUN2QiwrQkFBd0I7O0lBQ3hCLCtCQUF3Qjs7SUFDeEIsNkJBQXNCOztJQUN0QiwrQkFBeUI7O0lBQ3pCLGlDQUEyQjs7SUFDM0IsZ0NBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhZ2UuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGFuZ2xlOiBudW1iZXI7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSBudW1iZXI6IG51bWJlcjtcbiAgQElucHV0KCkgZGF0YTogc3RyaW5nO1xuICBASW5wdXQoKSBpc0h0bWw6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGVkaXRhYmxlOiBib29sZWFuO1xuICBpbWdEYXRhOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBpc0lFID0gLypAY2Nfb24hQCovZmFsc2UgfHwgISEvKE1TSUV8VHJpZGVudFxcL3xFZGdlXFwvKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgaWYoaXNJRSAmJiB0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgICB0aGlzLmVkaXRhYmxlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIC8vIFRPRE86IHRoaXMgaXMgdGVtcG9yYXJ5IG5lZWRlZCB0byByZW1vdmUgdW5uZWVkZWQgc3BhY2VzIGFuZCBCT00gc3ltYm9sIFxuICAgIC8vIHdoaWNoIGxlYWRzIHRvIHVuZGVzaXJlZCBzcGFjZXMgb24gdGhlIHRvcCBvZiB0aGUgZG9jcyBwYWdlc1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YSAhPT0gbnVsbCA/IHRoaXMuZGF0YS5yZXBsYWNlKC8+XFxzKzwvZywnPjwnKS5yZXBsYWNlKC9cXHVGRUZGL2csXCJcIikgOiBudWxsO1xuICAgIGNvbnN0IGRhdGFJbWFnZVBuZ0Jhc2U2NCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJztcbiAgICB0aGlzLmltZ0RhdGEgPSBkYXRhSW1hZ2VQbmdCYXNlNjQ7XG4gICAgaWYgKCF0aGlzLmlzSHRtbCkge1xuICAgICAgdGhpcy5pbWdEYXRhICs9IHRoaXMuZGF0YTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==