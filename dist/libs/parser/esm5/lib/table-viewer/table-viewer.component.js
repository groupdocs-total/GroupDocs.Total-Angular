/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var TableViewerComponent = /** @class */ (function () {
    function TableViewerComponent() {
    }
    /**
     * @return {?}
     */
    TableViewerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TableViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-table-viewer',
                    template: "<gd-modal #modal [id]=\"'TableViewer'\" [title]=\"'Table Viewer'\">\n    <div class=\"window\" *ngIf=\"table\">\n        <table>\n            <tr *ngFor=\"let r of table.rows\">\n                <td *ngFor=\"let c of r\">{{c}}</td>\n            </tr>\n        </table>\n\n    </div>\n</gd-modal>",
                    styles: [".window{min-width:400px;min-height:auto;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:24px}table{border-collapse:collapse;border:1px solid #e5e5e5}td{border:1px solid #e5e5e5;padding:5px}tr:nth-of-type(odd){background-color:#f4f4f4}tr:hover{background-color:#e5e5e5}"]
                }] }
    ];
    /** @nocollapse */
    TableViewerComponent.ctorParameters = function () { return []; };
    return TableViewerComponent;
}());
export { TableViewerComponent };
if (false) {
    /** @type {?} */
    TableViewerComponent.prototype.table;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvdGFibGUtdmlld2VyL3RhYmxlLXZpZXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3pEO0lBUUU7SUFBZ0IsQ0FBQzs7OztJQUVqQix1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsbVRBQTRDOztpQkFFN0M7Ozs7SUFTRCwyQkFBQztDQUFBLEFBYkQsSUFhQztTQVJZLG9CQUFvQjs7O0lBQy9CLHFDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFibGVWYWx1ZSB9IGZyb20gJy4uL2FwcC1tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC10YWJsZS12aWV3ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUtdmlld2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUtdmlld2VyLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVWaWV3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0YWJsZSA6IFRhYmxlVmFsdWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=