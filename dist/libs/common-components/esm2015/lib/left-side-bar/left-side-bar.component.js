/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class LeftSideBarComponent {
    constructor() {
        this.showSpinner = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LeftSideBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-left-side-bar',
                template: "<div class=\"left-panel\">\n  <div class=\"gd-left-bar-fade\" *ngIf=\"showSpinner\">\n    <div class=\"gd-left-bar-spinner\"><i class=\"fa fa-circle-o-notch fa-spin\"></i> &nbsp;Loading...\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                styles: [".left-panel{height:100%;border-radius:0;float:left}.gd-left-bar-fade{margin:auto;overflow:hidden;-webkit-overflow-scrolling:touch;transition:transform .3s ease-out;width:100%;height:100%;display:flex;justify-content:center;align-items:center;position:fixed;z-index:1000}@media (max-width:480px),screen and (max-width:1024px) and (orientation:landscape){.gd-left-bar-fade{top:100px;right:0}.gd-left-bar-spinner{top:20%}}"]
            }] }
];
/** @nocollapse */
LeftSideBarComponent.ctorParameters = () => [];
LeftSideBarComponent.propDecorators = {
    showSpinner: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LeftSideBarComponent.prototype.showSpinner;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVmdC1zaWRlLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbGVmdC1zaWRlLWJhci9sZWZ0LXNpZGUtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFPdkQsTUFBTSxPQUFPLG9CQUFvQjtJQUcvQjtRQUZTLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBRzdCLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHFRQUE2Qzs7YUFFOUM7Ozs7OzBCQUVFLEtBQUs7Ozs7SUFBTiwyQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWxlZnQtc2lkZS1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbGVmdC1zaWRlLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xlZnQtc2lkZS1iYXIuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMZWZ0U2lkZUJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNob3dTcGlubmVyID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=