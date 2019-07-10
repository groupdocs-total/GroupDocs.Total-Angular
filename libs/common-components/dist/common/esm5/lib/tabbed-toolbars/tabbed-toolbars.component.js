import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var TabbedToolbarsComponent = /** @class */ (function () {
    function TabbedToolbarsComponent() {
    }
    TabbedToolbarsComponent.prototype.ngOnInit = function () {
    };
    TabbedToolbarsComponent = tslib_1.__decorate([
        Component({
            selector: 'gd-tabbed-toolbars',
            template: "<div class=\"top-panel\">\n  <gd-logo [logo]=\"'editor'\" [icon]=\"'pen-square'\"></gd-logo>\n  <ng-content></ng-content>\n</div>\n",
            styles: [".top-panel{background:#3e4e5a;display:flex;width:100%;height:90px}.top-panel ::ng-deep .logo{height:30px;font-size:16px}@media (max-width:480px){.top-panel{height:60px}.top-panel ::ng-deep .logo{height:60px}}"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TabbedToolbarsComponent);
    return TabbedToolbarsComponent;
}());
export { TabbedToolbarsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiYmVkLXRvb2xiYXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90YWJiZWQtdG9vbGJhcnMvdGFiYmVkLXRvb2xiYXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU9sRDtJQUVFO0lBQWdCLENBQUM7SUFFakIsMENBQVEsR0FBUjtJQUNBLENBQUM7SUFMVSx1QkFBdUI7UUFMbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QiwrSUFBK0M7O1NBRWhELENBQUM7O09BQ1csdUJBQXVCLENBT25DO0lBQUQsOEJBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC10YWJiZWQtdG9vbGJhcnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiYmVkLXRvb2xiYXJzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFiYmVkLXRvb2xiYXJzLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFiYmVkVG9vbGJhcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19