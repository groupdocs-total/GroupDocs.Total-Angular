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
                template: "<div [ngClass]=\"(active) ? 'gd-tab active' : 'gd-tab'\" (mousedown)=\"selectTab()\">\n  <div class=\"title\">{{tabTitle}}</div>\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n</div>\n<div *ngIf=\"content\" [ngClass]=\"(active) ? 'gd-editor-buttons active' : 'gd-editor-buttons'\">\n  <ng-content></ng-content>\n</div>\n\n",
                styles: [".gd-editor-buttons{height:60px;position:absolute;background-color:#fff;width:100%;left:0;line-height:60px;display:none}.gd-editor-buttons ::ng-deep .toolbar-panel{height:60px}.gd-editor-buttons.active{display:flex}.gd-tab{text-align:center;font-size:11px;color:#e5e5e5;height:30px;line-height:30px;cursor:pointer;display:flex;align-items:center;justify-content:center}.gd-tab .icon{display:none;font-size:14px;margin:auto 23px}.gd-tab .title{margin:auto 23px}.gd-tab.active{background-color:#fff;color:#3e4e5a;font-weight:700}@media (max-width:480px){.gd-tab{height:60px;line-height:60px}.gd-tab .title{display:none}.gd-tab .icon{display:block}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90YWIvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFPN0QsTUFBTSxPQUFPLFlBQVk7Ozs7SUFRdkIsWUFBb0Isb0JBQXlDO1FBQXpDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFKcEQsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLElBQUksQ0FBQztRQUd0QixJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQ3BFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxVQUFVLENBQUMsS0FBYTtRQUM5QixJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssS0FBSyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsNFhBQW1DOzthQUVwQzs7OztZQU5PLG1CQUFtQjs7O2lCQVF4QixLQUFLO3VCQUNMLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7OztJQUxOLDBCQUFvQjs7SUFDcEIsZ0NBQTBCOztJQUMxQiw0QkFBc0I7O0lBQ3RCLGdDQUEwQjs7SUFDMUIsOEJBQXdCOztJQUN4QiwrQkFBd0I7Ozs7O0lBRVosNENBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJBY3RpdmF0b3JTZXJ2aWNlfSBmcm9tIFwiLi4vdGFiLWFjdGl2YXRvci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXRhYicsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWIuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSB0YWJUaXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBjb250ZW50ID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90YWJBY3RpdmF0b3JTZXJ2aWNlOiBUYWJBY3RpdmF0b3JTZXJ2aWNlKSB7XG4gICAgdGhpcy5fdGFiQWN0aXZhdG9yU2VydmljZS5hY3RpdmVUYWJDaGFuZ2Uuc3Vic2NyaWJlKCh0YWJJZDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2YXRpb24odGFiSWQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhY3RpdmF0aW9uKHRhYklkOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5pZCA9PT0gdGFiSWQpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNlbGVjdFRhYigpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl90YWJBY3RpdmF0b3JTZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYih0aGlzLmlkKTtcbiAgfVxufVxuIl19