import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TabsComponent = class TabsComponent {
    constructor() {
        this.tabs = [];
    }
    ngOnInit() {
    }
    addTab(tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }
    selectTab(tabComponent) {
        this.tabs.forEach((tab) => {
            tab.active = false;
        });
        tabComponent.active = true;
    }
};
TabsComponent = tslib_1.__decorate([
    Component({
        selector: 'gd-tabs',
        template: "<div class=\"gd-tabs\">\n  <div [ngClass]=\"(tab.active) ? 'gd-tab active' : 'gd-tab'\" *ngFor=\"let tab of tabs\" (mousedown)=\"selectTab(tab)\">\n    <div class=\"title\">{{tab.tabTitle}}</div>\n    <i fa class=\"icon\" [name]=\"tab.icon\"></i>\n  </div>\n</div>\n<ng-content></ng-content>\n",
        styles: [".gd-tabs{display:flex}.gd-tab{text-align:center;font-size:11px;color:#e5e5e5;height:30px;line-height:30px;cursor:pointer;display:flex;align-items:center;justify-content:center}.gd-tab .icon{display:none;font-size:14px;margin:auto 23px}.gd-tab .title{margin:auto 23px}.gd-tab.active{background-color:#fff;color:#3e4e5a;font-weight:700}@media (max-width:480px){.gd-tab{height:60px;line-height:60px}.gd-tab .title{display:none}.gd-tab .icon{display:block}}"]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TabsComponent);
export { TabsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdGFicy90YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQVFoRCxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBSXhCO1FBSEEsU0FBSSxHQUFtQixFQUFFLENBQUM7SUFLMUIsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQWlCO1FBQ3RCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzFCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELFNBQVMsQ0FBQyxZQUEyQjtRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3hCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztDQUVGLENBQUE7QUF6QlksYUFBYTtJQUx6QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsU0FBUztRQUNuQixpVEFBb0M7O0tBRXJDLENBQUM7O0dBQ1csYUFBYSxDQXlCekI7U0F6QlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJDb21wb25lbnR9IGZyb20gXCIuLi90YWIvdGFiLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC10YWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJzLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRhYnM6IFRhYkNvbXBvbmVudFtdID0gW107XG4gIGFjdGl2ZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBhZGRUYWIodGFiOiBUYWJDb21wb25lbnQpIHtcbiAgICBpZiAodGhpcy50YWJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGFiLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMudGFicy5wdXNoKHRhYik7XG4gIH1cblxuICBzZWxlY3RUYWIodGFiQ29tcG9uZW50OiBUYWJzQ29tcG9uZW50KSB7XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgdGFiLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHRhYkNvbXBvbmVudC5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbn1cbiJdfQ==