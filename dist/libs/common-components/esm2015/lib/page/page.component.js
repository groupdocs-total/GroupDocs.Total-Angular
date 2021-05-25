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
        if (this.isHtml) {
            // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
            // which leads to undesired spaces on the top of the docs pages
            this.data = this.data
                ? this.data.replace(/>\s+</g, '><')
                    .replace(/\uFEFF/g, "")
                : null;
        }
        else {
            this.imgData = 'data:image/png;base64,' + this.data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcGFnZS9wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBT2pGLE1BQU0sT0FBTyxhQUFhO0lBV3hCO0lBQ0EsQ0FBQzs7OztJQUVELFFBQVE7O2NBQ0EsSUFBSSxHQUFHLFlBQVksQ0FBQSxLQUFLLElBQUksQ0FBQyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQ3hGLElBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsMkVBQTJFO1lBQzNFLCtEQUErRDtZQUMvRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO2dCQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQztxQkFDakMsT0FBTyxDQUFDLFNBQVMsRUFBQyxFQUFFLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDUjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzs7O1lBckNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsaW1CQUFvQzs7YUFFckM7Ozs7O29CQUdFLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7Ozs7SUFOTiw4QkFBdUI7O0lBQ3ZCLDhCQUF1Qjs7SUFDdkIsK0JBQXdCOztJQUN4QiwrQkFBd0I7O0lBQ3hCLDZCQUFzQjs7SUFDdEIsK0JBQXlCOztJQUN6QixpQ0FBMkI7O0lBQzNCLGdDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1wYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYWdlLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBhbmdsZTogbnVtYmVyO1xuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgbnVtYmVyOiBudW1iZXI7XG4gIEBJbnB1dCgpIGRhdGE6IHN0cmluZztcbiAgQElucHV0KCkgaXNIdG1sOiBib29sZWFuO1xuICBASW5wdXQoKSBlZGl0YWJsZTogYm9vbGVhbjtcbiAgaW1nRGF0YTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgaXNJRSA9IC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhLyhNU0lFfFRyaWRlbnRcXC98RWRnZVxcLykvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIGlmKGlzSUUgJiYgdGhpcy5udW1iZXIgPT09IDApe1xuICAgICAgdGhpcy5lZGl0YWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZih0aGlzLmlzSHRtbCkge1xuICAgICAgLy8gVE9ETzogdGhpcyBpcyB0ZW1wb3JhcnkgbmVlZGVkIHRvIHJlbW92ZSB1bm5lZWRlZCBzcGFjZXMgYW5kIEJPTSBzeW1ib2wgXG4gICAgICAvLyB3aGljaCBsZWFkcyB0byB1bmRlc2lyZWQgc3BhY2VzIG9uIHRoZSB0b3Agb2YgdGhlIGRvY3MgcGFnZXNcbiAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YSBcbiAgICAgICAgPyB0aGlzLmRhdGEucmVwbGFjZSgvPlxccys8L2csJz48JylcbiAgICAgICAgLnJlcGxhY2UoL1xcdUZFRkYvZyxcIlwiKVxuICAgICAgOiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmltZ0RhdGEgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyB0aGlzLmRhdGE7XG4gICAgfVxuICB9XG59XG4iXX0=