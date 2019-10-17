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
        // TODO: this is needed for test purpose to reduce unneeded top-margin
        this.data = this.data !== null ? this.data.replace(/>\s+</g, '><') : null;
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
                    template: "<div id=\"page-{{number}}\" gdHostDynamic [ident]=\"number\">\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\" [contentEditable]=\"(editable) ? true : false\"\n      gdEditor [text]=\"data\"></div>\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\n       alt=\"\"\n       *ngIf=\"data && !isHtml\">\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n    &nbsp;Loading... Please wait.\n  </div>\n</div>\n",
                    styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper img{width:inherit}.gd-wrapper div{width:100%}.gd-highlight{background-color:#ff0}/deep/ .gd-highlight-select{background-color:#ff9b00}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcGFnZS9wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBRWpGO0lBZ0JFO0lBQ0EsQ0FBQzs7OztJQUVELGdDQUFROzs7SUFBUjs7WUFDUSxJQUFJLEdBQUcsWUFBWSxDQUFBLEtBQUssSUFBSSxDQUFDLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7UUFDeEYsSUFBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUVELG1DQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxzRUFBc0U7UUFDdEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7O1lBQ25FLGtCQUFrQixHQUFHLHdCQUF3QjtRQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLGtCQUFrQixDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztTQUMzQjtJQUNILENBQUM7O2dCQWxDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLGltQkFBb0M7O2lCQUVyQzs7Ozs7d0JBR0UsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzs7SUFzQlIsb0JBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQTlCWSxhQUFhOzs7SUFFeEIsOEJBQXVCOztJQUN2Qiw4QkFBdUI7O0lBQ3ZCLCtCQUF3Qjs7SUFDeEIsK0JBQXdCOztJQUN4Qiw2QkFBc0I7O0lBQ3RCLCtCQUF5Qjs7SUFDekIsaUNBQTJCOztJQUMzQixnQ0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtcGFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnZS5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgYW5nbGU6IG51bWJlcjtcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIG51bWJlcjogbnVtYmVyO1xuICBASW5wdXQoKSBkYXRhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlzSHRtbDogYm9vbGVhbjtcbiAgQElucHV0KCkgZWRpdGFibGU6IGJvb2xlYW47XG4gIGltZ0RhdGE6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGlzSUUgPSAvKkBjY19vbiFAKi9mYWxzZSB8fCAhIS8oTVNJRXxUcmlkZW50XFwvfEVkZ2VcXC8pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICBpZihpc0lFICYmIHRoaXMubnVtYmVyID09PSAwKXtcbiAgICAgIHRoaXMuZWRpdGFibGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgLy8gVE9ETzogdGhpcyBpcyBuZWVkZWQgZm9yIHRlc3QgcHVycG9zZSB0byByZWR1Y2UgdW5uZWVkZWQgdG9wLW1hcmdpblxuICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YSAhPT0gbnVsbCA/IHRoaXMuZGF0YS5yZXBsYWNlKC8+XFxzKzwvZywnPjwnKSA6IG51bGw7XG4gICAgY29uc3QgZGF0YUltYWdlUG5nQmFzZTY0ID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnO1xuICAgIHRoaXMuaW1nRGF0YSA9IGRhdGFJbWFnZVBuZ0Jhc2U2NDtcbiAgICBpZiAoIXRoaXMuaXNIdG1sKSB7XG4gICAgICB0aGlzLmltZ0RhdGEgKz0gdGhpcy5kYXRhO1xuICAgIH1cbiAgfVxufVxuIl19