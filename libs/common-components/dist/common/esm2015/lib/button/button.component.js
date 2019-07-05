import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let ButtonComponent = class ButtonComponent {
    constructor() {
        this.disabled = false;
        this.showToolTip = false;
    }
    onHovering() {
        this.showToolTip = true;
    }
    onUnhovering() {
        this.showToolTip = false;
    }
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
], ButtonComponent.prototype, "tooltip", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ButtonComponent.prototype, "className", void 0);
ButtonComponent = tslib_1.__decorate([
    Component({
        selector: 'gd-button',
        template: "<div class=\"button\" [ngClass]=\"className\" (mouseenter)=\"onHovering()\" (mouseleave)=\"onUnhovering()\" gdDisabledCursor [dis]=\"disabled\">\n  <i fa [name]=\"icon\"></i>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\"></gd-tooltip>\n</div>\n",
        styles: [".button{margin:0 15px;font-size:14px;color:#959da5;cursor:pointer}@media (max-width:1025px){.button{font-size:20px;margin:0 20px}.arrow-button{margin:5px}}"]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ButtonComponent);
export { ButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPL0MsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQVExQjtRQU5TLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFJMUIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFFSixDQUFDO0lBRWpCLFVBQVU7UUFDUixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7Q0FDRixDQUFBO0FBZlU7SUFBUixLQUFLLEVBQUU7O2lEQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTs7NkNBQWE7QUFDWjtJQUFSLEtBQUssRUFBRTs7Z0RBQWdCO0FBQ2Y7SUFBUixLQUFLLEVBQUU7O2tEQUFtQjtBQUxoQixlQUFlO0lBTDNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLDZSQUFzQzs7S0FFdkMsQ0FBQzs7R0FDVyxlQUFlLENBaUIzQjtTQWpCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaWNvbjpzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXA6c3RyaW5nO1xuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZztcbiAgc2hvd1Rvb2xUaXAgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG9uSG92ZXJpbmcoKSB7XG4gICAgdGhpcy5zaG93VG9vbFRpcCA9IHRydWU7XG4gIH1cblxuICBvblVuaG92ZXJpbmcoKSB7XG4gICAgdGhpcy5zaG93VG9vbFRpcCA9IGZhbHNlO1xuICB9XG59XG4iXX0=