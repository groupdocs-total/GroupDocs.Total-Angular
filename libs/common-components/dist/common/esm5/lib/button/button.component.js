import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.disabled = false;
        this.toggle = false;
        this.showToolTip = false;
    }
    ButtonComponent.prototype.onHovering = function () {
        this.showToolTip = true;
    };
    ButtonComponent.prototype.onUnhovering = function () {
        this.showToolTip = false;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ButtonComponent.prototype, "disabled", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ButtonComponent.prototype, "icon", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ButtonComponent.prototype, "iconClass", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ButtonComponent.prototype, "tooltip", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ButtonComponent.prototype, "className", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ButtonComponent.prototype, "toggle", void 0);
    ButtonComponent = tslib_1.__decorate([
        Component({
            selector: 'gd-button',
            template: "<div class=\"button\" [ngClass]=\"toggle ? className + ' gd-edit active' : className\" (mouseenter)=\"onHovering()\" (mouseleave)=\"onUnhovering()\" gdDisabledCursor [dis]=\"disabled\">\n  <i fa [name]=\"icon\" [ngClass]=\"iconClass\"></i>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\"></gd-tooltip>\n  <ng-content></ng-content>\n</div>\n",
            styles: [".button{margin:0 7px;font-size:14px;color:#959da5;cursor:pointer;width:37px;height:36px;text-align:center;position:relative}.button i{position:absolute;top:11px;left:14px}@media (max-width:1025px){.button{font-size:20px;margin:0 20px}.arrow-button{margin:5px}}"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());
export { ButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPL0M7SUFVRTtRQVJTLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFLakIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUVKLENBQUM7SUFFakIsb0NBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQWhCUTtRQUFSLEtBQUssRUFBRTs7cURBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFOztpREFBYTtJQUNaO1FBQVIsS0FBSyxFQUFFOztzREFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7O29EQUFnQjtJQUNmO1FBQVIsS0FBSyxFQUFFOztzREFBbUI7SUFDbEI7UUFBUixLQUFLLEVBQUU7O21EQUFnQjtJQVBiLGVBQWU7UUFMM0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsMlhBQXNDOztTQUV2QyxDQUFDOztPQUNXLGVBQWUsQ0FtQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQW5CWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaWNvbjpzdHJpbmc7XG4gIEBJbnB1dCgpIGljb25DbGFzczpzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXA6c3RyaW5nO1xuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgdG9nZ2xlID0gZmFsc2U7XG4gIHNob3dUb29sVGlwID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBvbkhvdmVyaW5nKCkge1xuICAgIHRoaXMuc2hvd1Rvb2xUaXAgPSB0cnVlO1xuICB9XG5cbiAgb25VbmhvdmVyaW5nKCkge1xuICAgIHRoaXMuc2hvd1Rvb2xUaXAgPSBmYWxzZTtcbiAgfVxufVxuIl19