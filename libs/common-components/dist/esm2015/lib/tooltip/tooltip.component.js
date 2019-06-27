import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let TooltipComponent = class TooltipComponent {
    constructor() {
        this.visibility = 'hidden';
    }
    set show(value) {
        this.visibility = value ? 'shown' : 'hidden';
    }
    ngOnInit() {
    }
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
        styles: [".tooltip{position:absolute;margin-top:37px;width:120px;background-color:#000;color:#fff;text-align:center;border-radius:0;padding:5px 0;z-index:1;margin-left:-66px;font-size:10px}.tooltip.hidden{visibility:hidden}.tooltip.shown{visibility:visible}.shown:after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #000}"]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TooltipComponent);
export { TooltipComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFPdkQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFLM0I7UUFGQSxlQUFVLEdBQUcsUUFBUSxDQUFDO0lBR3RCLENBQUM7SUFHRCxJQUFJLElBQUksQ0FBQyxLQUFjO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUMvQyxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7Q0FFRixDQUFBO0FBZFU7SUFBUixLQUFLLEVBQUU7OzhDQUFhO0FBT3JCO0lBREMsS0FBSyxFQUFFOzs7NENBR1A7QUFYVSxnQkFBZ0I7SUFMNUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsMkZBQXVDOztLQUV4QyxDQUFDOztHQUNXLGdCQUFnQixDQWdCNUI7U0FoQlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC10b29sdGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b29sdGlwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdGV4dDpzdHJpbmc7XG4gIHZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzaG93KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy52aXNpYmlsaXR5ID0gdmFsdWUgPyAnc2hvd24nIDogJ2hpZGRlbic7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=