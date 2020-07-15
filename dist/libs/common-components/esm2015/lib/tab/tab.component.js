/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TabActivatorService } from "../tab-activator.service";
export class TabComponent {
    /**
     * @param {?} _tabActivatorService
     */
    constructor(_tabActivatorService) {
        this._tabActivatorService = _tabActivatorService;
        this.disabled = false;
        this.active = false;
        this.content = true;
        this._tabActivatorService.activeTabChange.subscribe((/**
         * @param {?} tabId
         * @return {?}
         */
        (tabId) => {
            this.activation(tabId);
        }));
    }
    /**
     * @private
     * @param {?} tabId
     * @return {?}
     */
    activation(tabId) {
        if (this.id === tabId) {
            this.active = true;
        }
        else {
            this.active = false;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    selectTab() {
        if (this.disabled) {
            return;
        }
        this._tabActivatorService.changeActiveTab(this.id);
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-tab',
                template: "<div [ngClass]=\"(active) ? 'gd-tab active' : 'gd-tab'\" (mousedown)=\"selectTab()\">\r\n  <div class=\"title\" *ngIf=\"tabTitle\">{{tabTitle}}</div>\r\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n</div>\r\n<div *ngIf=\"content\" [ngClass]=\"(active) ? 'tab-content active' : 'tab-content'\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                styles: [".tab-content{height:60px;position:absolute;background-color:#fff;width:100%;left:0;line-height:60px;display:none;z-index:9}.tab-content ::ng-deep .toolbar-panel{height:60px}.tab-content.active{display:flex}.gd-tab{text-align:center;font-size:11px;color:#e5e5e5;height:30px;line-height:30px;cursor:pointer;display:flex;align-items:center;justify-content:center}.gd-tab .icon{display:none;font-size:14px;margin:auto 23px}.gd-tab .title{margin:auto 23px}.gd-tab.active{background-color:#fff;color:#3e4e5a;font-weight:700}@media (max-width:1037px){.gd-tab{height:60px;line-height:60px}.gd-tab .title{display:none}.gd-tab .icon{display:block;font-size:22px}}"]
            }] }
];
/** @nocollapse */
TabComponent.ctorParameters = () => [
    { type: TabActivatorService }
];
TabComponent.propDecorators = {
    id: [{ type: Input }],
    tabTitle: [{ type: Input }],
    icon: [{ type: Input }],
    disabled: [{ type: Input }],
    active: [{ type: Input }],
    content: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TabComponent.prototype.id;
    /** @type {?} */
    TabComponent.prototype.tabTitle;
    /** @type {?} */
    TabComponent.prototype.icon;
    /** @type {?} */
    TabComponent.prototype.disabled;
    /** @type {?} */
    TabComponent.prototype.active;
    /** @type {?} */
    TabComponent.prototype.content;
    /**
     * @type {?}
     * @private
     */
    TabComponent.prototype._tabActivatorService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90YWIvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFPN0QsTUFBTSxPQUFPLFlBQVk7Ozs7SUFRdkIsWUFBb0Isb0JBQXlDO1FBQXpDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFKcEQsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLElBQUksQ0FBQztRQUd0QixJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQ3BFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxVQUFVLENBQUMsS0FBYTtRQUM5QixJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssS0FBSyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsK1lBQW1DOzthQUVwQzs7OztZQU5PLG1CQUFtQjs7O2lCQVF4QixLQUFLO3VCQUNMLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7OztJQUxOLDBCQUFvQjs7SUFDcEIsZ0NBQTBCOztJQUMxQiw0QkFBc0I7O0lBQ3RCLGdDQUEwQjs7SUFDMUIsOEJBQXdCOztJQUN4QiwrQkFBd0I7Ozs7O0lBRVosNENBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1RhYkFjdGl2YXRvclNlcnZpY2V9IGZyb20gXCIuLi90YWItYWN0aXZhdG9yLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtdGFiJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWIuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRhYlRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY29udGVudCA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RhYkFjdGl2YXRvclNlcnZpY2U6IFRhYkFjdGl2YXRvclNlcnZpY2UpIHtcclxuICAgIHRoaXMuX3RhYkFjdGl2YXRvclNlcnZpY2UuYWN0aXZlVGFiQ2hhbmdlLnN1YnNjcmliZSgodGFiSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLmFjdGl2YXRpb24odGFiSWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFjdGl2YXRpb24odGFiSWQ6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuaWQgPT09IHRhYklkKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIHNlbGVjdFRhYigpIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX3RhYkFjdGl2YXRvclNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKHRoaXMuaWQpO1xyXG4gIH1cclxufVxyXG4iXX0=