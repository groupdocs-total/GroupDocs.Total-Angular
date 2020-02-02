/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModals, ExceptionMessageService, ModalService } from "@groupdocs.examples.angular/common-components";
import { SignatureTabActivatorService } from "../signature-tab-activator.service";
var SignatureTabComponent = /** @class */ (function () {
    function SignatureTabComponent(_tabActivatorService, _modalService, _excMessageService) {
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
        }));
    }
    /**
     * @private
     * @param {?} tabId
     * @return {?}
     */
    SignatureTabComponent.prototype.activation = /**
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
    SignatureTabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SignatureTabComponent.prototype.toggleTab = /**
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
    SignatureTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-signature-tab',
                    template: "<div class=\"gd-tab\" (mousedown)=\"toggleTab()\" gdTooltip\n     (showToolTip)=\"showToolTip = $event\" [ngClass]=\"(active) ? 'active' : ''\">\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\"\n              *ngIf=\"tooltip\"></gd-tooltip>\n</div>\n",
                    styles: [".gd-tab{font-size:14px;color:#3e4e5a;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;min-width:36px;height:36px;text-align:center;position:relative;white-space:nowrap;padding:0!important;margin:0 10px}.gd-tab.active{background-color:#acacac;color:#fff!important;font-weight:700}.gd-tab ::ng-deep .tooltip{font-size:12px;margin:20px -57px}.gd-tab .title{margin:auto 23px}@media (max-width:1037px){.gd-tab{font-size:20px}}"]
                }] }
    ];
    /** @nocollapse */
    SignatureTabComponent.ctorParameters = function () { return [
        { type: SignatureTabActivatorService },
        { type: ModalService },
        { type: ExceptionMessageService }
    ]; };
    SignatureTabComponent.propDecorators = {
        id: [{ type: Input }],
        icon: [{ type: Input }],
        disabled: [{ type: Input }],
        tooltip: [{ type: Input }],
        activeTab: [{ type: Output }]
    };
    return SignatureTabComponent;
}());
export { SignatureTabComponent };
if (false) {
    /** @type {?} */
    SignatureTabComponent.prototype.id;
    /** @type {?} */
    SignatureTabComponent.prototype.icon;
    /** @type {?} */
    SignatureTabComponent.prototype.disabled;
    /** @type {?} */
    SignatureTabComponent.prototype.tooltip;
    /** @type {?} */
    SignatureTabComponent.prototype.activeTab;
    /** @type {?} */
    SignatureTabComponent.prototype.active;
    /** @type {?} */
    SignatureTabComponent.prototype.showToolTip;
    /**
     * @type {?}
     * @private
     */
    SignatureTabComponent.prototype._tabActivatorService;
    /**
     * @type {?}
     * @private
     */
    SignatureTabComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    SignatureTabComponent.prototype._excMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL3NpZ25hdHVyZS10YWIvc2lnbmF0dXJlLXRhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUNMLFlBQVksRUFDWix1QkFBdUIsRUFBRSxZQUFZLEVBQ3RDLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFFaEY7SUFjRSwrQkFBb0Isb0JBQWtELEVBQ2xELGFBQTJCLEVBQzNCLGtCQUEyQztRQUYvRCxpQkFNQztRQU5tQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQThCO1FBQ2xELGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBeUI7UUFSdEQsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVoQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMxQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFLekIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFhO1lBQ2hFLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTywwQ0FBVTs7Ozs7SUFBbEIsVUFBbUIsS0FBYTtRQUM5QixJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssS0FBSyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDekI7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7O0lBRUQsd0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUVELHlDQUFTOzs7SUFBVDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBQ3BFLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQTdDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsMFdBQTZDOztpQkFFOUM7Ozs7Z0JBTk8sNEJBQTRCO2dCQUZULFlBQVk7Z0JBQXJDLHVCQUF1Qjs7O3FCQVV0QixLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLE1BQU07O0lBcUNULDRCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0ExQ1kscUJBQXFCOzs7SUFDaEMsbUNBQW9COztJQUNwQixxQ0FBc0I7O0lBQ3RCLHlDQUEwQjs7SUFDMUIsd0NBQXlCOztJQUN6QiwwQ0FBaUQ7O0lBQ2pELHVDQUFzQjs7SUFDdEIsNENBQTJCOzs7OztJQUVmLHFEQUEwRDs7Ozs7SUFDMUQsOENBQW1DOzs7OztJQUNuQyxtREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29tbW9uTW9kYWxzLFxuICBFeGNlcHRpb25NZXNzYWdlU2VydmljZSwgTW9kYWxTZXJ2aWNlXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7U2lnbmF0dXJlVGFiQWN0aXZhdG9yU2VydmljZX0gZnJvbSBcIi4uL3NpZ25hdHVyZS10YWItYWN0aXZhdG9yLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2Qtc2lnbmF0dXJlLXRhYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWduYXR1cmUtdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lnbmF0dXJlLXRhYi5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZVRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xuICBAT3V0cHV0KCkgYWN0aXZlVGFiID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIHB1YmxpYyBhY3RpdmUgPSBmYWxzZTtcbiAgcHVibGljIHNob3dUb29sVGlwID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGFiQWN0aXZhdG9yU2VydmljZTogU2lnbmF0dXJlVGFiQWN0aXZhdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2V4Y01lc3NhZ2VTZXJ2aWNlOiBFeGNlcHRpb25NZXNzYWdlU2VydmljZSkge1xuICAgIHRoaXMuX3RhYkFjdGl2YXRvclNlcnZpY2UuYWN0aXZlVGFiQ2hhbmdlLnN1YnNjcmliZSgodGFiSWQ6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0aW9uKHRhYklkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYWN0aXZhdGlvbih0YWJJZDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuaWQgPT09IHRhYklkKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZTtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhYi5lbWl0KHRoaXMuaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWIuZW1pdChcIlwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHRvZ2dsZVRhYigpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkVycm9yTWVzc2FnZSk7XG4gICAgICB0aGlzLl9leGNNZXNzYWdlU2VydmljZS5jaGFuZ2VNZXNzYWdlKFwiUGxlYXNlIG9wZW4gZG9jdW1lbnQgZmlyc3RcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3RhYkFjdGl2YXRvclNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKHRoaXMuaWQpO1xuICB9XG5cbn1cbiJdfQ==