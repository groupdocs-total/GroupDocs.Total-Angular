/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TabActivatorService } from "../tab-activator.service";
var TabComponent = /** @class */ (function () {
    function TabComponent(_tabActivatorService) {
        var _this = this;
        this._tabActivatorService = _tabActivatorService;
        this.disabled = false;
        this.active = false;
        this.content = true;
        this._tabActivatorService.activeTabChange.subscribe((/**
         * @param {?} tabId
         * @return {?}
         */
        function (tabId) {
            _this.activation(tabId);
        }));
    }
    /**
     * @private
     * @param {?} tabId
     * @return {?}
     */
    TabComponent.prototype.activation = /**
     * @private
     * @param {?} tabId
     * @return {?}
     */
    function (tabId) {
        if (this.id === tabId) {
            this.active = true;
        }
        else {
            this.active = false;
        }
    };
    /**
     * @return {?}
     */
    TabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    TabComponent.prototype.selectTab = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        this._tabActivatorService.changeActiveTab(this.id);
    };
    TabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-tab',
                    template: "<div [ngClass]=\"(active) ? 'gd-tab active' : 'gd-tab'\" (mousedown)=\"selectTab()\">\r\n  <div class=\"smp-tab-title\" *ngIf=\"tabTitle\">{{tabTitle}}</div>\r\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n</div>\r\n<div *ngIf=\"content\" [ngClass]=\"(active) ? 'tab-content active' : 'tab-content'\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    styles: [".tab-content{height:60px;position:absolute;background-color:#fff;width:100%;left:0;line-height:60px;display:none;z-index:9}.tab-content ::ng-deep .toolbar-panel{height:60px}.tab-content.active{display:-webkit-box;display:flex}.gd-tab{text-align:center;font-size:11px;color:#e5e5e5;height:30px;line-height:30px;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.gd-tab .icon{display:none;font-size:14px}.gd-tab .smp-tab-title{margin:auto 23px}.gd-tab.active{background-color:#fff;color:#3e4e5a;font-weight:700}@media (max-width:1037px){.gd-tab{height:60px;line-height:60px;width:60px}.gd-tab .smp-tab-title{display:none}.gd-tab .icon{display:block;font-size:22px}}"]
                }] }
    ];
    /** @nocollapse */
    TabComponent.ctorParameters = function () { return [
        { type: TabActivatorService }
    ]; };
    TabComponent.propDecorators = {
        id: [{ type: Input }],
        tabTitle: [{ type: Input }],
        icon: [{ type: Input }],
        disabled: [{ type: Input }],
        active: [{ type: Input }],
        content: [{ type: Input }]
    };
    return TabComponent;
}());
export { TabComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90YWIvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFFN0Q7SUFhRSxzQkFBb0Isb0JBQXlDO1FBQTdELGlCQUlDO1FBSm1CLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFKcEQsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLElBQUksQ0FBQztRQUd0QixJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWE7WUFDaEUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLGlDQUFVOzs7OztJQUFsQixVQUFtQixLQUFhO1FBQzlCLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxLQUFLLEVBQUU7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7OztJQUVELCtCQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxnQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBbkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsdVpBQW1DOztpQkFFcEM7Ozs7Z0JBTk8sbUJBQW1COzs7cUJBUXhCLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOztJQXlCUixtQkFBQztDQUFBLEFBcENELElBb0NDO1NBL0JZLFlBQVk7OztJQUN2QiwwQkFBb0I7O0lBQ3BCLGdDQUEwQjs7SUFDMUIsNEJBQXNCOztJQUN0QixnQ0FBMEI7O0lBQzFCLDhCQUF3Qjs7SUFDeEIsK0JBQXdCOzs7OztJQUVaLDRDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtUYWJBY3RpdmF0b3JTZXJ2aWNlfSBmcm9tIFwiLi4vdGFiLWFjdGl2YXRvci5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXRhYicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSB0YWJUaXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNvbnRlbnQgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90YWJBY3RpdmF0b3JTZXJ2aWNlOiBUYWJBY3RpdmF0b3JTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLl90YWJBY3RpdmF0b3JTZXJ2aWNlLmFjdGl2ZVRhYkNoYW5nZS5zdWJzY3JpYmUoKHRhYklkOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5hY3RpdmF0aW9uKHRhYklkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmF0aW9uKHRhYklkOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmlkID09PSB0YWJJZCkge1xyXG4gICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RUYWIoKSB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl90YWJBY3RpdmF0b3JTZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYih0aGlzLmlkKTtcclxuICB9XHJcbn1cclxuIl19