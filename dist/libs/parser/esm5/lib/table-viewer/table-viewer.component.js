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
                    selector: 'app-table-viewer',
                    template: "<gd-modal #modal [id]=\"'TableViewer'\" [title]=\"'Table Viewer'\">\r\n    <div class=\"window\" *ngIf=\"table\">\r\n        <table>\r\n            <tr *ngFor=\"let r of table.rows\">\r\n                <td *ngFor=\"let c of r\">{{c}}</td>\r\n            </tr>\r\n        </table>\r\n\r\n    </div>\r\n</gd-modal>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvdGFibGUtdmlld2VyL3RhYmxlLXZpZXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3pEO0lBUUU7SUFBZ0IsQ0FBQzs7OztJQUVqQix1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIscVVBQTRDOztpQkFFN0M7Ozs7SUFTRCwyQkFBQztDQUFBLEFBYkQsSUFhQztTQVJZLG9CQUFvQjs7O0lBQy9CLHFDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWJsZVZhbHVlIH0gZnJvbSAnLi4vYXBwLW1vZGVscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC10YWJsZS12aWV3ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS12aWV3ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLXZpZXdlci5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZVZpZXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdGFibGUgOiBUYWJsZVZhbHVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==