/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var LeftSideBarComponent = /** @class */ (function () {
    function LeftSideBarComponent() {
        this.showSpinner = false;
    }
    /**
     * @return {?}
     */
    LeftSideBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    LeftSideBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-left-side-bar',
                    template: "<div class=\"left-panel\">\n  <div class=\"gd-left-bar-fade\" *ngIf=\"showSpinner\">\n    <div class=\"gd-left-bar-spinner\"><i class=\"fa fa-circle-o-notch fa-spin\"></i> &nbsp;Loading...\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                    styles: [".left-panel{position:absolute;top:60px;left:0;bottom:0;height:100%;background:#fff;border-radius:0;float:left;z-index:1;display:flex;flex-direction:column}.gd-left-bar-fade{position:fixed;margin:auto;display:none;overflow:hidden;top:50px;width:315px;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0;background-color:rgba(255,255,255,.5)}.gd-left-bar-spinner{left:30%;top:50%;position:absolute}@media (max-width:480px){.gd-left-bar-fade{top:100px;right:0}.gd-left-bar-spinner{top:20%}}"]
                }] }
    ];
    /** @nocollapse */
    LeftSideBarComponent.ctorParameters = function () { return []; };
    LeftSideBarComponent.propDecorators = {
        showSpinner: [{ type: Input }]
    };
    return LeftSideBarComponent;
}());
export { LeftSideBarComponent };
if (false) {
    /** @type {?} */
    LeftSideBarComponent.prototype.showSpinner;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVmdC1zaWRlLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbGVmdC1zaWRlLWJhci9sZWZ0LXNpZGUtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFdkQ7SUFRRTtRQUZTLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBRzdCLENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIscVFBQTZDOztpQkFFOUM7Ozs7OzhCQUVFLEtBQUs7O0lBUVIsMkJBQUM7Q0FBQSxBQWRELElBY0M7U0FUWSxvQkFBb0I7OztJQUMvQiwyQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWxlZnQtc2lkZS1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbGVmdC1zaWRlLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xlZnQtc2lkZS1iYXIuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMZWZ0U2lkZUJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNob3dTcGlubmVyID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=