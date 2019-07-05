import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var InitStateComponent = /** @class */ (function () {
    function InitStateComponent() {
    }
    InitStateComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], InitStateComponent.prototype, "icon", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], InitStateComponent.prototype, "text", void 0);
    InitStateComponent = tslib_1.__decorate([
        Component({
            selector: 'gd-init-state',
            template: "<div class=\"wrapper\">\n  <i class=\"icon\" fa [name]=\"icon\"></i>\n  <span class=\"text\">{{text}}</span>\n  <span class=\"start\">Click <i fa [name]=\"'folder-open'\"></i> to open file</span>\n</div>\n",
            styles: [".wrapper{color:#959da5;background-color:#e7e7e7;display:flex;flex-direction:column;justify-content:center;align-content:center;width:100%;height:100%}.icon{font-size:65px;text-align:center;margin-bottom:38px}.start,.text{font-size:15px;text-align:center}"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], InitStateComponent);
    return InitStateComponent;
}());
export { InitStateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1zdGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvaW5pdC1zdGF0ZS9pbml0LXN0YXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFPdkQ7SUFJRTtJQUNBLENBQUM7SUFFRCxxQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQVBRO1FBQVIsS0FBSyxFQUFFOztvREFBYztJQUNiO1FBQVIsS0FBSyxFQUFFOztvREFBYztJQUZYLGtCQUFrQjtRQUw5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6Qix5TkFBMEM7O1NBRTNDLENBQUM7O09BQ1csa0JBQWtCLENBVTlCO0lBQUQseUJBQUM7Q0FBQSxBQVZELElBVUM7U0FWWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWluaXQtc3RhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5pdC1zdGF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2luaXQtc3RhdGUuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbml0U3RhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==