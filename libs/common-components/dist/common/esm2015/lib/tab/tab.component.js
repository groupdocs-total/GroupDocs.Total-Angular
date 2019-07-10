import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { TabsComponent } from "../tabs/tabs.component";
let TabComponent = class TabComponent {
    constructor(tabs) {
        tabs.addTab(this);
    }
    ngOnInit() {
    }
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
export { TabComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90YWIvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBT3JELElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFNdkIsWUFBWSxJQUFtQjtRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ25CLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztDQUVGLENBQUE7QUFYVTtJQUFSLEtBQUssRUFBRTs7OENBQVU7QUFDVDtJQUFSLEtBQUssRUFBRTs7MENBQU07QUFISCxZQUFZO0lBTHhCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLGtJQUFtQzs7S0FFcEMsQ0FBQzs2Q0FPa0IsYUFBYTtHQU5wQixZQUFZLENBYXhCO1NBYlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFic0NvbXBvbmVudH0gZnJvbSBcIi4uL3RhYnMvdGFicy5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtdGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYi5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdGFiVGl0bGU7XG4gIEBJbnB1dCgpIGljb247XG4gIGFjdGl2ZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcih0YWJzOiBUYWJzQ29tcG9uZW50KSB7XG4gICAgdGFicy5hZGRUYWIodGhpcylcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==