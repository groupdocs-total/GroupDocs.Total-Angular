/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModals, ExceptionMessageService, ModalService } from "@groupdocs.examples.angular/common-components";
import { SignatureTabActivatorService } from "../signature-tab-activator.service";
export class SignatureTabComponent {
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
SignatureTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-signature-tab',
                template: "<div class=\"gd-tab\" (mousedown)=\"toggleTab()\" gdTooltip\n     (showToolTip)=\"showToolTip = $event\" [ngClass]=\"(active) ? 'active' : ''\">\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\"\n              *ngIf=\"tooltip\"></gd-tooltip>\n</div>\n",
                styles: [".gd-tab{font-size:14px;color:#3e4e5a;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;min-width:36px;height:36px;text-align:center;position:relative;white-space:nowrap;padding:0!important;margin:0 10px}.gd-tab.active{background-color:#acacac;color:#fff!important;font-weight:700}.gd-tab ::ng-deep .tooltip{font-size:12px;margin:20px -57px}.gd-tab .title{margin:auto 23px}@media (max-width:1037px){.gd-tab{font-size:20px}}"]
            }] }
];
/** @nocollapse */
SignatureTabComponent.ctorParameters = () => [
    { type: SignatureTabActivatorService },
    { type: ModalService },
    { type: ExceptionMessageService }
];
SignatureTabComponent.propDecorators = {
    id: [{ type: Input }],
    icon: [{ type: Input }],
    disabled: [{ type: Input }],
    tooltip: [{ type: Input }],
    activeTab: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL3NpZ25hdHVyZS10YWIvc2lnbmF0dXJlLXRhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUNMLFlBQVksRUFDWix1QkFBdUIsRUFBRSxZQUFZLEVBQ3RDLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFPaEYsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBU2hDLFlBQW9CLG9CQUFrRCxFQUNsRCxhQUEyQixFQUMzQixrQkFBMkM7UUFGM0MseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE4QjtRQUNsRCxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXlCO1FBUnRELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFaEIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDMUMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBS3pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsU0FBUzs7OztRQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDcEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLFVBQVUsQ0FBQyxLQUFhO1FBQzlCLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxLQUFLLEVBQUU7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM5QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN6QjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUNwRSxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7WUE3Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDBXQUE2Qzs7YUFFOUM7Ozs7WUFOTyw0QkFBNEI7WUFGVCxZQUFZO1lBQXJDLHVCQUF1Qjs7O2lCQVV0QixLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLO3dCQUNMLE1BQU07Ozs7SUFKUCxtQ0FBb0I7O0lBQ3BCLHFDQUFzQjs7SUFDdEIseUNBQTBCOztJQUMxQix3Q0FBeUI7O0lBQ3pCLDBDQUFpRDs7SUFDakQsdUNBQXNCOztJQUN0Qiw0Q0FBMkI7Ozs7O0lBRWYscURBQTBEOzs7OztJQUMxRCw4Q0FBbUM7Ozs7O0lBQ25DLG1EQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb21tb25Nb2RhbHMsXG4gIEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlLCBNb2RhbFNlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtTaWduYXR1cmVUYWJBY3RpdmF0b3JTZXJ2aWNlfSBmcm9tIFwiLi4vc2lnbmF0dXJlLXRhYi1hY3RpdmF0b3Iuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1zaWduYXR1cmUtdGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZ25hdHVyZS10YWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWduYXR1cmUtdGFiLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBhY3RpdmVUYWIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgcHVibGljIGFjdGl2ZSA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd1Rvb2xUaXAgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90YWJBY3RpdmF0b3JTZXJ2aWNlOiBTaWduYXR1cmVUYWJBY3RpdmF0b3JTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZXhjTWVzc2FnZVNlcnZpY2U6IEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlKSB7XG4gICAgdGhpcy5fdGFiQWN0aXZhdG9yU2VydmljZS5hY3RpdmVUYWJDaGFuZ2Uuc3Vic2NyaWJlKCh0YWJJZDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2YXRpb24odGFiSWQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhY3RpdmF0aW9uKHRhYklkOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5pZCA9PT0gdGFiSWQpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gIXRoaXMuYWN0aXZlO1xuICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFiLmVtaXQodGhpcy5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhYi5lbWl0KFwiXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgdG9nZ2xlVGFiKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuRXJyb3JNZXNzYWdlKTtcbiAgICAgIHRoaXMuX2V4Y01lc3NhZ2VTZXJ2aWNlLmNoYW5nZU1lc3NhZ2UoXCJQbGVhc2Ugb3BlbiBkb2N1bWVudCBmaXJzdFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fdGFiQWN0aXZhdG9yU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIodGhpcy5pZCk7XG4gIH1cblxufVxuIl19