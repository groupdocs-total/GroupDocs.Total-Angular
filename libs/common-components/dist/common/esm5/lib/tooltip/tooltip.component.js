import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
        this.visibility = 'hidden';
    }
    Object.defineProperty(TooltipComponent.prototype, "show", {
        set: function (value) {
            this.visibility = value ? 'shown' : 'hidden';
        },
        enumerable: true,
        configurable: true
    });
    TooltipComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TooltipComponent.prototype, "text", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], TooltipComponent.prototype, "show", null);
    TooltipComponent = tslib_1.__decorate([
        Component({
            selector: 'gd-tooltip',
            template: "<span class=\"tooltip\" [ngClass]=\"visibility\" [innerHTML]=\"text\"></span>\n",
            styles: [".tooltip{position:absolute;margin-top:37px;width:120px;background-color:#000;color:#fff;text-align:center;border-radius:0;padding:5px 0;z-index:1;margin-left:-66px;font-size:10px}.tooltip.hidden{visibility:hidden}.tooltip.shown{visibility:visible}.shown:after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border:5px solid transparent;border-bottom-color:#000}"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TooltipComponent);
    return TooltipComponent;
}());
export { TooltipComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFPdkQ7SUFLRTtRQUZBLGVBQVUsR0FBRyxRQUFRLENBQUM7SUFHdEIsQ0FBQztJQUdELHNCQUFJLGtDQUFJO2FBQVIsVUFBUyxLQUFjO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUVELG1DQUFRLEdBQVI7SUFDQSxDQUFDO0lBWlE7UUFBUixLQUFLLEVBQUU7O2tEQUFhO0lBT3JCO1FBREMsS0FBSyxFQUFFOzs7Z0RBR1A7SUFYVSxnQkFBZ0I7UUFMNUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsMkZBQXVDOztTQUV4QyxDQUFDOztPQUNXLGdCQUFnQixDQWdCNUI7SUFBRCx1QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBaEJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtdG9vbHRpcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sdGlwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9vbHRpcC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHRleHQ6c3RyaW5nO1xuICB2aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc2hvdyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMudmlzaWJpbGl0eSA9IHZhbHVlID8gJ3Nob3duJyA6ICdoaWRkZW4nO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19