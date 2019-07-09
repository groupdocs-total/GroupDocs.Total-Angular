import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { TabsComponent } from "../tabs/tabs.component";
var TabComponent = /** @class */ (function () {
    function TabComponent(tabs) {
        tabs.addTab(this);
    }
    TabComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TabComponent.prototype, "tabTitle", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TabComponent.prototype, "icon", void 0);
    TabComponent = tslib_1.__decorate([
        Component({
            selector: 'gd-tab',
            template: "<div [ngClass]=\"(active) ? 'gd-editor-buttons active' : 'gd-editor-buttons'\">\n  <ng-content></ng-content>\n</div>\n",
            styles: [".gd-editor-buttons{height:60px;position:absolute;background-color:#fff;width:100%;left:0;line-height:60px;display:none}.gd-editor-buttons ::ng-deep .toolbar-panel{height:60px}.gd-editor-buttons.active{display:flex}"]
        }),
        tslib_1.__metadata("design:paramtypes", [TabsComponent])
    ], TabComponent);
    return TabComponent;
}());
export { TabComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90YWIvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBT3JEO0lBTUUsc0JBQVksSUFBbUI7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNuQixDQUFDO0lBRUQsK0JBQVEsR0FBUjtJQUNBLENBQUM7SUFUUTtRQUFSLEtBQUssRUFBRTs7a0RBQVU7SUFDVDtRQUFSLEtBQUssRUFBRTs7OENBQU07SUFISCxZQUFZO1FBTHhCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLGtJQUFtQzs7U0FFcEMsQ0FBQztpREFPa0IsYUFBYTtPQU5wQixZQUFZLENBYXhCO0lBQUQsbUJBQUM7Q0FBQSxBQWJELElBYUM7U0FiWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJzQ29tcG9uZW50fSBmcm9tIFwiLi4vdGFicy90YWJzLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0YWJUaXRsZTtcbiAgQElucHV0KCkgaWNvbjtcbiAgYWN0aXZlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHRhYnM6IFRhYnNDb21wb25lbnQpIHtcbiAgICB0YWJzLmFkZFRhYih0aGlzKVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19