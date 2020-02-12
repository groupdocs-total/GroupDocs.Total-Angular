/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExceptionMessageService } from "../exception-message.service";
import { TopTabActivatorService } from "../top-tab-activator.service";
import { ModalService, CommonModals } from "../modal.service";
export class TopTabComponent {
    /**
     * @param {?} _tabActivatorService
     * @param {?} _modalService
     * @param {?} _excMessageService
     */
    constructor(_tabActivatorService, _modalService, _excMessageService) {
        this._tabActivatorService = _tabActivatorService;
        this._modalService = _modalService;
        this._excMessageService = _excMessageService;
        this.disabled = false;
        this.activeTab = new EventEmitter();
        this.active = false;
        this.showToolTip = false;
        this._tabActivatorService.activeTabChange.subscribe((/**
         * @param {?} tabId
         * @return {?}
         */
        (tabId) => {
            this.activation(tabId);
            if (tabId === null) {
                this.activeTab.emit("");
            }
        }));
    }
    /**
     * @private
     * @param {?} tabId
     * @return {?}
     */
    activation(tabId) {
        if (this.id === tabId) {
            this.active = !this.active;
            if (this.active) {
                this.activeTab.emit(this.id);
            }
            else {
                this.activeTab.emit("");
            }
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
    toggleTab() {
        if (this.disabled) {
            this._modalService.open(CommonModals.ErrorMessage);
            this._excMessageService.changeMessage("Please open document first");
            return;
        }
        this._tabActivatorService.changeActiveTab(this.id);
    }
}
TopTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-top-tab',
                template: "<div class=\"gd-tab\" (mousedown)=\"toggleTab()\" gdTooltip (showToolTip)=\"showToolTip = $event\"\n     [ngClass]=\"(active) ? ((disabled) ? 'active disabled' : 'active') : ((disabled) ? 'disabled' : '')\">\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\"\n              *ngIf=\"tooltip\"></gd-tooltip>\n</div>\n",
                styles: [".gd-tab{font-size:14px;color:#3e4e5a;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;min-width:36px;height:36px;text-align:center;position:relative;white-space:nowrap;padding:0!important;margin:0 10px}.gd-tab.active{background-color:#acacac;color:#fff!important;font-weight:700}.gd-tab.disabled{cursor:not-allowed;opacity:.4}.gd-tab ::ng-deep .tooltip{font-size:12px;margin:20px -57px}.gd-tab .title{margin:auto 23px}@media (max-width:1037px){.gd-tab{font-size:20px}}"]
            }] }
];
/** @nocollapse */
TopTabComponent.ctorParameters = () => [
    { type: TopTabActivatorService },
    { type: ModalService },
    { type: ExceptionMessageService }
];
TopTabComponent.propDecorators = {
    id: [{ type: Input }],
    icon: [{ type: Input }],
    disabled: [{ type: Input }],
    tooltip: [{ type: Input }],
    activeTab: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TopTabComponent.prototype.id;
    /** @type {?} */
    TopTabComponent.prototype.icon;
    /** @type {?} */
    TopTabComponent.prototype.disabled;
    /** @type {?} */
    TopTabComponent.prototype.tooltip;
    /** @type {?} */
    TopTabComponent.prototype.activeTab;
    /** @type {?} */
    TopTabComponent.prototype.active;
    /** @type {?} */
    TopTabComponent.prototype.showToolTip;
    /**
     * @type {?}
     * @private
     */
    TopTabComponent.prototype._tabActivatorService;
    /**
     * @type {?}
     * @private
     */
    TopTabComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    TopTabComponent.prototype._excMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdG9wLXRhYi90b3AtdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNwRSxPQUFPLEVBQUMsWUFBWSxFQUFFLFlBQVksRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBTzVELE1BQU0sT0FBTyxlQUFlOzs7Ozs7SUFTMUIsWUFBb0Isb0JBQTRDLEVBQzVDLGFBQTJCLEVBQzNCLGtCQUEyQztRQUYzQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXdCO1FBQzVDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBeUI7UUFSdEQsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVoQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMxQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFLekIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUNwRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDekI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLFVBQVUsQ0FBQyxLQUFhO1FBQzlCLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxLQUFLLEVBQUU7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM5QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN6QjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUNwRSxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7WUFoREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0Qix5YUFBdUM7O2FBRXhDOzs7O1lBUE8sc0JBQXNCO1lBQ3RCLFlBQVk7WUFGWix1QkFBdUI7OztpQkFVNUIsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxNQUFNOzs7O0lBSlAsNkJBQW9COztJQUNwQiwrQkFBc0I7O0lBQ3RCLG1DQUEwQjs7SUFDMUIsa0NBQXlCOztJQUN6QixvQ0FBaUQ7O0lBQ2pELGlDQUFzQjs7SUFDdEIsc0NBQTJCOzs7OztJQUVmLCtDQUFvRDs7Ozs7SUFDcEQsd0NBQW1DOzs7OztJQUNuQyw2Q0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFeGNlcHRpb25NZXNzYWdlU2VydmljZX0gZnJvbSBcIi4uL2V4Y2VwdGlvbi1tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7VG9wVGFiQWN0aXZhdG9yU2VydmljZX0gZnJvbSBcIi4uL3RvcC10YWItYWN0aXZhdG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7TW9kYWxTZXJ2aWNlLCBDb21tb25Nb2RhbHN9IGZyb20gXCIuLi9tb2RhbC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXRvcC10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9wLXRhYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvcC10YWIuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUb3BUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZztcbiAgQE91dHB1dCgpIGFjdGl2ZVRhYiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBwdWJsaWMgYWN0aXZlID0gZmFsc2U7XG4gIHB1YmxpYyBzaG93VG9vbFRpcCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RhYkFjdGl2YXRvclNlcnZpY2U6IFRvcFRhYkFjdGl2YXRvclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9leGNNZXNzYWdlU2VydmljZTogRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UpIHtcbiAgICB0aGlzLl90YWJBY3RpdmF0b3JTZXJ2aWNlLmFjdGl2ZVRhYkNoYW5nZS5zdWJzY3JpYmUoKHRhYklkOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZhdGlvbih0YWJJZCk7XG4gICAgICBpZiAodGFiSWQgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWIuZW1pdChcIlwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYWN0aXZhdGlvbih0YWJJZDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuaWQgPT09IHRhYklkKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZTtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhYi5lbWl0KHRoaXMuaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWIuZW1pdChcIlwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHRvZ2dsZVRhYigpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkVycm9yTWVzc2FnZSk7XG4gICAgICB0aGlzLl9leGNNZXNzYWdlU2VydmljZS5jaGFuZ2VNZXNzYWdlKFwiUGxlYXNlIG9wZW4gZG9jdW1lbnQgZmlyc3RcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3RhYkFjdGl2YXRvclNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKHRoaXMuaWQpO1xuICB9XG5cbn1cbiJdfQ==