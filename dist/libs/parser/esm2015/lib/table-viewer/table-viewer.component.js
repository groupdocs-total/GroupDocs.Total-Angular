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
                selector: 'gd-table-viewer',
                template: "<gd-modal #modal [id]=\"'TableViewer'\" [title]=\"'Table Viewer'\">\n    <div class=\"window\" *ngIf=\"table\">\n        <table>\n            <tr *ngFor=\"let r of table.rows\">\n                <td *ngFor=\"let c of r\">{{c}}</td>\n            </tr>\n        </table>\n\n    </div>\n</gd-modal>",
                styles: [".window{min-width:400px;min-height:auto;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:24px}table{border-collapse:collapse;border:1px solid #e5e5e5}td{border:1px solid #e5e5e5;padding:5px}tr:nth-of-type(odd){background-color:#f4f4f4}tr:hover{background-color:#e5e5e5}"]
            }] }
];
/** @nocollapse */
TableViewerComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    TableViewerComponent.prototype.table;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvdGFibGUtdmlld2VyL3RhYmxlLXZpZXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBUXpELE1BQU0sT0FBTyxvQkFBb0I7SUFHL0IsZ0JBQWdCLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQVhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixtVEFBNEM7O2FBRTdDOzs7Ozs7SUFFQyxxQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYmxlVmFsdWUgfSBmcm9tICcuLi9hcHAtbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtdGFibGUtdmlld2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLXZpZXdlci5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlVmlld2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGFibGUgOiBUYWJsZVZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19