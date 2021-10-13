/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class TableViewerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TableViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-table-viewer',
                template: "<gd-modal #modal [id]=\"'TableViewer'\" [title]=\"'Table Viewer'\">\r\n    <div class=\"window\" *ngIf=\"table\">\r\n        <table>\r\n            <tr *ngFor=\"let r of table.rows\">\r\n                <td *ngFor=\"let c of r\">{{c}}</td>\r\n            </tr>\r\n        </table>\r\n\r\n    </div>\r\n</gd-modal>",
                styles: [".window{min-width:400px;min-height:auto;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:24px}table{border-collapse:collapse;border:1px solid #e5e5e5}td{border:1px solid #e5e5e5;padding:5px}tr:nth-of-type(odd){background-color:#f4f4f4}tr:hover{background-color:#e5e5e5}"]
            }] }
];
/** @nocollapse */
TableViewerComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    TableViewerComponent.prototype.table;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvdGFibGUtdmlld2VyL3RhYmxlLXZpZXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBUXpELE1BQU0sT0FBTyxvQkFBb0I7SUFHL0IsZ0JBQWdCLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQVhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixxVUFBNEM7O2FBRTdDOzs7Ozs7SUFFQyxxQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGFibGVWYWx1ZSB9IGZyb20gJy4uL2FwcC1tb2RlbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtdGFibGUtdmlld2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUtdmlld2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWJsZS12aWV3ZXIuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVWaWV3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHRhYmxlIDogVGFibGVWYWx1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=