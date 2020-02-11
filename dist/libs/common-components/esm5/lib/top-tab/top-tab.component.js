/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExceptionMessageService } from "../exception-message.service";
import { TopTabActivatorService } from "../top-tab-activator.service";
import { ModalService, CommonModals } from "../modal.service";
var TopTabComponent = /** @class */ (function () {
    function TopTabComponent(_tabActivatorService, _modalService, _excMessageService) {
        var _this = this;
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
        function (tabId) {
            _this.activation(tabId);
            if (tabId === null) {
                _this.activeTab.emit("");
            }
        }));
    }
    /**
     * @private
     * @param {?} tabId
     * @return {?}
     */
    TopTabComponent.prototype.activation = /**
     * @private
     * @param {?} tabId
     * @return {?}
     */
    function (tabId) {
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
    };
    /**
     * @return {?}
     */
    TopTabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    TopTabComponent.prototype.toggleTab = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            this._modalService.open(CommonModals.ErrorMessage);
            this._excMessageService.changeMessage("Please open document first");
            return;
        }
        this._tabActivatorService.changeActiveTab(this.id);
    };
    TopTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-top-tab',
                    template: "<div class=\"gd-tab\" (mousedown)=\"toggleTab()\" gdTooltip (showToolTip)=\"showToolTip = $event\"\n     [ngClass]=\"(active) ? ((disabled) ? 'active disabled' : 'active') : ((disabled) ? 'disabled' : '')\">\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\"\n              *ngIf=\"tooltip\"></gd-tooltip>\n</div>\n",
                    styles: [".gd-tab{font-size:14px;color:#3e4e5a;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;min-width:36px;height:36px;text-align:center;position:relative;white-space:nowrap;padding:0!important;margin:0 10px}.gd-tab.active{background-color:#acacac;color:#fff!important;font-weight:700}.gd-tab.disabled{cursor:not-allowed;opacity:.4}.gd-tab ::ng-deep .tooltip{font-size:12px;margin:20px -57px}.gd-tab .title{margin:auto 23px}@media (max-width:1037px){.gd-tab{font-size:20px}}"]
                }] }
    ];
    /** @nocollapse */
    TopTabComponent.ctorParameters = function () { return [
        { type: TopTabActivatorService },
        { type: ModalService },
        { type: ExceptionMessageService }
    ]; };
    TopTabComponent.propDecorators = {
        id: [{ type: Input }],
        icon: [{ type: Input }],
        disabled: [{ type: Input }],
        tooltip: [{ type: Input }],
        activeTab: [{ type: Output }]
    };
    return TopTabComponent;
}());
export { TopTabComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdG9wLXRhYi90b3AtdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNwRSxPQUFPLEVBQUMsWUFBWSxFQUFFLFlBQVksRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRTVEO0lBY0UseUJBQW9CLG9CQUE0QyxFQUM1QyxhQUEyQixFQUMzQixrQkFBMkM7UUFGL0QsaUJBU0M7UUFUbUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF3QjtRQUM1QyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXlCO1FBUnRELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFaEIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDMUMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBS3pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsS0FBYTtZQUNoRSxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtnQkFDbEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDekI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLG9DQUFVOzs7OztJQUFsQixVQUFtQixLQUFhO1FBQzlCLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxLQUFLLEVBQUU7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM5QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN6QjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsbUNBQVM7OztJQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDcEUsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBaERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIseWFBQXVDOztpQkFFeEM7Ozs7Z0JBUE8sc0JBQXNCO2dCQUN0QixZQUFZO2dCQUZaLHVCQUF1Qjs7O3FCQVU1QixLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLE1BQU07O0lBd0NULHNCQUFDO0NBQUEsQUFsREQsSUFrREM7U0E3Q1ksZUFBZTs7O0lBQzFCLDZCQUFvQjs7SUFDcEIsK0JBQXNCOztJQUN0QixtQ0FBMEI7O0lBQzFCLGtDQUF5Qjs7SUFDekIsb0NBQWlEOztJQUNqRCxpQ0FBc0I7O0lBQ3RCLHNDQUEyQjs7Ozs7SUFFZiwrQ0FBb0Q7Ozs7O0lBQ3BELHdDQUFtQzs7Ozs7SUFDbkMsNkNBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RXhjZXB0aW9uTWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuLi9leGNlcHRpb24tbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1RvcFRhYkFjdGl2YXRvclNlcnZpY2V9IGZyb20gXCIuLi90b3AtdGFiLWFjdGl2YXRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge01vZGFsU2VydmljZSwgQ29tbW9uTW9kYWxzfSBmcm9tIFwiLi4vbW9kYWwuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC10b3AtdGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvcC10YWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b3AtdGFiLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9wVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBhY3RpdmVUYWIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgcHVibGljIGFjdGl2ZSA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd1Rvb2xUaXAgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90YWJBY3RpdmF0b3JTZXJ2aWNlOiBUb3BUYWJBY3RpdmF0b3JTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZXhjTWVzc2FnZVNlcnZpY2U6IEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlKSB7XG4gICAgdGhpcy5fdGFiQWN0aXZhdG9yU2VydmljZS5hY3RpdmVUYWJDaGFuZ2Uuc3Vic2NyaWJlKCh0YWJJZDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2YXRpb24odGFiSWQpO1xuICAgICAgaWYgKHRhYklkID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFiLmVtaXQoXCJcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFjdGl2YXRpb24odGFiSWQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmlkID09PSB0YWJJZCkge1xuICAgICAgdGhpcy5hY3RpdmUgPSAhdGhpcy5hY3RpdmU7XG4gICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWIuZW1pdCh0aGlzLmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFiLmVtaXQoXCJcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICB0b2dnbGVUYWIoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5FcnJvck1lc3NhZ2UpO1xuICAgICAgdGhpcy5fZXhjTWVzc2FnZVNlcnZpY2UuY2hhbmdlTWVzc2FnZShcIlBsZWFzZSBvcGVuIGRvY3VtZW50IGZpcnN0XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl90YWJBY3RpdmF0b3JTZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYih0aGlzLmlkKTtcbiAgfVxuXG59XG4iXX0=