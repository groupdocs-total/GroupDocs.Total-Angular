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
                template: "<div class=\"left-panel\">\r\n  <div class=\"gd-left-bar-fade\" *ngIf=\"showSpinner\">\r\n    <div class=\"gd-left-bar-spinner\"><i class=\"fa fa-circle-o-notch fa-spin\"></i> &nbsp;Loading...\r\n    </div>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                styles: [".left-panel{border-radius:0;float:left}.gd-left-bar-fade{margin:auto;overflow:hidden;-webkit-overflow-scrolling:touch;transition:transform .3s ease-out;width:100%;height:100%;display:flex;justify-content:center;align-items:center;position:fixed;z-index:1000}@media (max-width:1037px){.gd-left-bar-fade{top:100px;right:0}.gd-left-bar-spinner{top:20%}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVmdC1zaWRlLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbGVmdC1zaWRlLWJhci9sZWZ0LXNpZGUtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFPdkQsTUFBTSxPQUFPLG9CQUFvQjtJQUcvQjtRQUZTLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBRzdCLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLG1SQUE2Qzs7YUFFOUM7Ozs7OzBCQUVFLEtBQUs7Ozs7SUFBTiwyQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWxlZnQtc2lkZS1iYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sZWZ0LXNpZGUtYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sZWZ0LXNpZGUtYmFyLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExlZnRTaWRlQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBzaG93U3Bpbm5lciA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19