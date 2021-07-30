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
        this.elementPosition = 0;
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
                template: "<div class=\"gd-tab\" (mousedown)=\"toggleTab()\" gdTooltip (showToolTip)=\"showToolTip = $event\"\n     [ngClass]=\"(active) ? ((disabled) ? 'active disabled' : 'active') : ((disabled) ? 'disabled' : '')\">\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" class=\"gd-tab-tooltip\"\n              *ngIf=\"tooltip\" [position]=\"elementPosition\"></gd-tooltip>\n</div>\n",
                styles: [".gd-tab{font-size:14px;color:#3e4e5a;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;align-content:center;-webkit-box-pack:center;justify-content:center;min-width:36px;height:36px;text-align:center;position:relative;white-space:nowrap;padding:0!important;margin:0 10px}.gd-tab .gd-tab-tooltip{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:0!important}.gd-tab.active{background-color:#acacac;color:#fff!important;font-weight:700}.gd-tab.disabled{cursor:not-allowed;opacity:.4}.gd-tab ::ng-deep .tooltip{font-size:12px;margin:20px -57px}.gd-tab .title{margin:auto 23px}@media (max-width:1037px){.gd-tab{font-size:20px}}"]
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
    activeTab: [{ type: Output }],
    elementPosition: [{ type: Input }]
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
    TopTabComponent.prototype.elementPosition;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdG9wLXRhYi90b3AtdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNwRSxPQUFPLEVBQUMsWUFBWSxFQUFFLFlBQVksRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBTzVELE1BQU0sT0FBTyxlQUFlOzs7Ozs7SUFVMUIsWUFBb0Isb0JBQTRDLEVBQzVDLGFBQTJCLEVBQzNCLGtCQUEyQztRQUYzQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXdCO1FBQzVDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBeUI7UUFUdEQsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVoQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN4QyxvQkFBZSxHQUFHLENBQUMsQ0FBQztRQUN0QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFLekIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUNwRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDekI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLFVBQVUsQ0FBQyxLQUFhO1FBQzlCLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxLQUFLLEVBQUU7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM5QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN6QjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUNwRSxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixpZUFBdUM7O2FBRXhDOzs7O1lBUE8sc0JBQXNCO1lBQ3RCLFlBQVk7WUFGWix1QkFBdUI7OztpQkFVNUIsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxNQUFNOzhCQUNOLEtBQUs7Ozs7SUFMTiw2QkFBb0I7O0lBQ3BCLCtCQUFzQjs7SUFDdEIsbUNBQTBCOztJQUMxQixrQ0FBeUI7O0lBQ3pCLG9DQUFpRDs7SUFDakQsMENBQTZCOztJQUM3QixpQ0FBc0I7O0lBQ3RCLHNDQUEyQjs7Ozs7SUFFZiwrQ0FBb0Q7Ozs7O0lBQ3BELHdDQUFtQzs7Ozs7SUFDbkMsNkNBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RXhjZXB0aW9uTWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuLi9leGNlcHRpb24tbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1RvcFRhYkFjdGl2YXRvclNlcnZpY2V9IGZyb20gXCIuLi90b3AtdGFiLWFjdGl2YXRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge01vZGFsU2VydmljZSwgQ29tbW9uTW9kYWxzfSBmcm9tIFwiLi4vbW9kYWwuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC10b3AtdGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvcC10YWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b3AtdGFiLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9wVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBhY3RpdmVUYWIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQElucHV0KCkgZWxlbWVudFBvc2l0aW9uID0gMDtcbiAgcHVibGljIGFjdGl2ZSA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd1Rvb2xUaXAgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90YWJBY3RpdmF0b3JTZXJ2aWNlOiBUb3BUYWJBY3RpdmF0b3JTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZXhjTWVzc2FnZVNlcnZpY2U6IEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlKSB7XG4gICAgdGhpcy5fdGFiQWN0aXZhdG9yU2VydmljZS5hY3RpdmVUYWJDaGFuZ2Uuc3Vic2NyaWJlKCh0YWJJZDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2YXRpb24odGFiSWQpO1xuICAgICAgaWYgKHRhYklkID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFiLmVtaXQoXCJcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFjdGl2YXRpb24odGFiSWQ6IHN0cmluZykgeyAgXG4gICAgaWYgKHRoaXMuaWQgPT09IHRhYklkKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZTtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhYi5lbWl0KHRoaXMuaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWIuZW1pdChcIlwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHRvZ2dsZVRhYigpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkVycm9yTWVzc2FnZSk7XG4gICAgICB0aGlzLl9leGNNZXNzYWdlU2VydmljZS5jaGFuZ2VNZXNzYWdlKFwiUGxlYXNlIG9wZW4gZG9jdW1lbnQgZmlyc3RcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3RhYkFjdGl2YXRvclNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKHRoaXMuaWQpO1xuICB9XG5cbn1cbiJdfQ==