/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SignatureType } from "../signature-models";
import { SignatureService } from "../signature.service";
export class SignatureLeftPanelComponent {
    /**
     * @param {?} _signatureService
     */
    constructor(_signatureService) {
        this._signatureService = _signatureService;
        this.newSignatureEvent = new EventEmitter();
        this.showNewCode = false;
        this.showUpload = false;
        this.loading = false;
        _signatureService.getRefreshSignatures.subscribe((/**
         * @return {?}
         */
        () => {
            this.getSignatures(this.id);
        }));
    }
    /**
     * @param {?} tabId
     * @return {?}
     */
    getSignatures(tabId) {
        if (!this.loading) {
            this.loading = true;
            this._signatureService.getSignatures('', tabId).subscribe((/**
             * @param {?} signatures
             * @return {?}
             */
            (signatures) => {
                this.signatures = signatures || [];
                this.loading = false;
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        this.signatures = [];
        this.getSignatures(this.id);
        this.showNewCode = false;
        this.showUpload = false;
    }
    /**
     * @return {?}
     */
    getTitleIcon() {
        return this.showUpload || this.showNewCode ? 'times' : 'plus';
    }
    /**
     * @return {?}
     */
    getTitle() {
        if (!this.id) {
            return "";
        }
        /** @type {?} */
        const signatureType = SignatureType.getSignatureType(this.id);
        return (this.showUpload || this.showNewCode) ? signatureType.title : signatureType.name;
    }
    /**
     * @return {?}
     */
    getName() {
        if (!this.id) {
            return "";
        }
        /** @type {?} */
        const signatureType = SignatureType.getSignatureType(this.id);
        return signatureType.name;
    }
    /**
     * @param {?} $event
     * @param {?} type
     * @return {?}
     */
    removeSignature($event, type) {
        this._signatureService.removeSignatures($event, type).subscribe((/**
         * @return {?}
         */
        () => this.getSignatures(type)));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    closeUploadPanel($event) {
        this.showUpload = !$event;
        this.getSignatures(this.id);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    closeCodePanel($event) {
        this.showNewCode = !$event;
        this.getSignatures(this.id);
    }
    /**
     * @return {?}
     */
    getCodeName() {
        if (!this.id) {
            return "";
        }
        return SignatureType.QR_CODE.id === this.id ? 'Qr Code' : (SignatureType.BAR_CODE.id === this.id ? 'Bar Code' : '');
    }
    /**
     * @return {?}
     */
    icon() {
        if (!this.id) {
            return "";
        }
        return SignatureType.getSignatureType(this.id).icon;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.init();
    }
    /**
     * @return {?}
     */
    closeNewSignature() {
        if (SignatureType.DIGITAL.id === this.id || SignatureType.IMAGE.id === this.id) {
            this.showUpload = false;
        }
        else if (SignatureType.BAR_CODE.id === this.id || SignatureType.QR_CODE.id === this.id) {
            this.showNewCode = false;
        }
    }
    /**
     * @return {?}
     */
    openNewSignature() {
        if (this.showUpload || this.showNewCode) {
            return;
        }
        if (SignatureType.DIGITAL.id === this.id || SignatureType.IMAGE.id === this.id) {
            this.showUpload = true;
        }
        else if (SignatureType.BAR_CODE.id === this.id || SignatureType.QR_CODE.id === this.id) {
            this.showNewCode = true;
        }
        else {
            this.newSignatureEvent.emit(this.id);
        }
    }
}
SignatureLeftPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-signature-left-panel',
                template: "<gd-left-side-bar [showSpinner]=\"loading\">\r\n  <div class=\"tab-content\">\r\n    <div class=\"gd-signature-context-panel\">\r\n      <div class=\"gd-signature-context-pane-wrapper\">\r\n        <div class=\"signature-title-block\"> <!--for safari-->\r\n          <div class=\"gd-signature-list-title\" *ngIf=\"showNewCode || showUpload\">\r\n            <div class=\"gd-signature-context-panel-title\">{{getTitle()}}</div>\r\n            <div class=\"gd-signature-title-icon\">\r\n              <fa-icon [icon]=\"['fa','times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"closeNewSignature()\"></fa-icon>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <gd-upload-signature (closePanel)=\"closeUploadPanel($event)\" [rewrite]=\"rewrite\" [signatureType]=\"id\"\r\n                             *ngIf=\"showUpload\"></gd-upload-signature>\r\n        <gd-new-bar-qr-code (closePanel)=\"closeCodePanel($event)\" [type]=\"id\" [icon]=\"icon()\" [name]=\"getCodeName()\"\r\n                            *ngIf=\"showNewCode\"></gd-new-bar-qr-code>\r\n        <div class=\"signature-title-block\"> <!--for safari-->\r\n          <div class=\"gd-signature-list-title\">\r\n            <div class=\"gd-signature-context-panel-title\">{{getName()}}</div>\r\n            <div class=\"gd-signature-title-icon\">\r\n              <fa-icon [icon]=\"['fa','plus']\" [class]=\"'ng-fa-icon icon'\"\r\n                       [ngClass]=\"showNewCode || showUpload ? 'disabled' : ''\"\r\n                       (click)=\"openNewSignature()\"></fa-icon>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <gd-signature-list-panel class=\"gd-signatures-scroll\" [icon]=\"icon()\" [signatureType]=\"id\"\r\n                                 [signatures]=\"signatures\"\r\n                                 (removeSignatureEvent)=\"removeSignature($event, id)\"\r\n                                 [isPdf]=\"isPdf\" [loading]=\"loading\"></gd-signature-list-panel>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</gd-left-side-bar>\r\n",
                styles: ["::ng-deep .left-panel{width:350px;height:calc(100% - 90px)}::ng-deep .gd-left-bar-fade{width:350px!important}.gd-signatures-scroll{height:calc(100% - 60px)}.tab-content{height:calc(100% - 90px);line-height:unset;position:absolute;background-color:#fff}.gd-signature-context-panel{background-color:#f3f3f3;width:350px;height:100%;position:absolute}.gd-signature-context-panel-title,.gd-signature-context-upload-title{color:#aaa;font-size:12px;font-family:Helvetica;font-weight:700;margin:5px 12px}.signature-title-block{display:block}.gd-signature-list-title{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;height:70px}.gd-signature-list-title .gd-signature-title-icon{-webkit-box-flex:0;flex:0 0 70px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.gd-signature-list-title .gd-signature-title-icon .icon{color:#707070;cursor:pointer;font-size:12px}.gd-signature-list-title .gd-signature-title-icon .icon.disabled{color:#959da5}.gd-signature-list-title .gd-signature-context-panel-title{-webkit-box-flex:1;flex:1;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}.gd-signature-context-pane-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:inherit;overflow:auto}@media (max-width:1037px){.tab-content{width:100%;height:calc(100% - 120px)!important}::ng-deep .left-panel{width:100%!important;overflow:auto!important;height:calc(100% - 120px)}.gd-signature-context-panel{left:0;right:0;width:auto}.gd-signature-context-panel-title{font-size:12px;line-height:18px;margin:16px 0 14px 12px}.gd-signature-context-panel-title,.gd-signature-context-upload-title{width:unset}}"]
            }] }
];
/** @nocollapse */
SignatureLeftPanelComponent.ctorParameters = () => [
    { type: SignatureService }
];
SignatureLeftPanelComponent.propDecorators = {
    rewrite: [{ type: Input }],
    isPdf: [{ type: Input }],
    id: [{ type: Input }],
    newSignatureEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SignatureLeftPanelComponent.prototype.rewrite;
    /** @type {?} */
    SignatureLeftPanelComponent.prototype.isPdf;
    /** @type {?} */
    SignatureLeftPanelComponent.prototype.id;
    /** @type {?} */
    SignatureLeftPanelComponent.prototype.newSignatureEvent;
    /** @type {?} */
    SignatureLeftPanelComponent.prototype.showNewCode;
    /** @type {?} */
    SignatureLeftPanelComponent.prototype.showUpload;
    /** @type {?} */
    SignatureLeftPanelComponent.prototype.signatures;
    /** @type {?} */
    SignatureLeftPanelComponent.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    SignatureLeftPanelComponent.prototype._signatureService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLWxlZnQtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9zaWduYXR1cmUtbGVmdC1wYW5lbC9zaWduYXR1cmUtbGVmdC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQVksYUFBYSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFPdEQsTUFBTSxPQUFPLDJCQUEyQjs7OztJQVV0QyxZQUFvQixpQkFBbUM7UUFBbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQU43QyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ2xELGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFMUIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUdkLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsU0FBUzs7OztZQUFDLENBQUMsVUFBdUIsRUFBRSxFQUFFO2dCQUNw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Ozs7c0JBUXJCLEtBQUs7b0JBQ0wsS0FBSztpQkFDTCxLQUFLO2dDQUNMLE1BQU07Ozs7SUFIUCw4Q0FBMEI7O0lBQzFCLDRDQUF3Qjs7SUFDeEIseUNBQW9COztJQUNwQix3REFBeUQ7O0lBQ3pELGtEQUEyQjs7SUFDM0IsaURBQTBCOztJQUMxQixpREFBd0I7O0lBQ3hCLDhDQUFnQjs7Ozs7SUFFSix3REFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7U2lnbmF0dXJlLCBTaWduYXR1cmVUeXBlfSBmcm9tIFwiLi4vc2lnbmF0dXJlLW1vZGVsc1wiO1xyXG5pbXBvcnQge1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuLi9zaWduYXR1cmUuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1zaWduYXR1cmUtbGVmdC1wYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZ25hdHVyZS1sZWZ0LXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWduYXR1cmUtbGVmdC1wYW5lbC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduYXR1cmVMZWZ0UGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgcmV3cml0ZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpc1BkZjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBuZXdTaWduYXR1cmVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIHB1YmxpYyBzaG93TmV3Q29kZSA9IGZhbHNlO1xyXG4gIHB1YmxpYyBzaG93VXBsb2FkID0gZmFsc2U7XHJcbiAgc2lnbmF0dXJlczogU2lnbmF0dXJlW107XHJcbiAgbG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaWduYXR1cmVTZXJ2aWNlOiBTaWduYXR1cmVTZXJ2aWNlKSB7XHJcbiAgICBfc2lnbmF0dXJlU2VydmljZS5nZXRSZWZyZXNoU2lnbmF0dXJlcy5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmdldFNpZ25hdHVyZXModGhpcy5pZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFNpZ25hdHVyZXModGFiSWQ6IHN0cmluZykge1xyXG4gICAgaWYgKCF0aGlzLmxvYWRpbmcpIHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS5nZXRTaWduYXR1cmVzKCcnLCB0YWJJZCkuc3Vic2NyaWJlKChzaWduYXR1cmVzOiBTaWduYXR1cmVbXSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2lnbmF0dXJlcyA9IHNpZ25hdHVyZXMgfHwgW107XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdCgpIHtcclxuICAgIHRoaXMuc2lnbmF0dXJlcyA9IFtdO1xyXG4gICAgdGhpcy5nZXRTaWduYXR1cmVzKHRoaXMuaWQpO1xyXG4gICAgdGhpcy5zaG93TmV3Q29kZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5zaG93VXBsb2FkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZUljb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93VXBsb2FkIHx8IHRoaXMuc2hvd05ld0NvZGUgPyAndGltZXMnIDogJ3BsdXMnO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGl0bGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuaWQpIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaWduYXR1cmVUeXBlID0gU2lnbmF0dXJlVHlwZS5nZXRTaWduYXR1cmVUeXBlKHRoaXMuaWQpO1xyXG4gICAgcmV0dXJuICh0aGlzLnNob3dVcGxvYWQgfHwgdGhpcy5zaG93TmV3Q29kZSkgPyBzaWduYXR1cmVUeXBlLnRpdGxlIDogc2lnbmF0dXJlVHlwZS5uYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIGlmICghdGhpcy5pZCkge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IHNpZ25hdHVyZVR5cGUgPSBTaWduYXR1cmVUeXBlLmdldFNpZ25hdHVyZVR5cGUodGhpcy5pZCk7XHJcbiAgICByZXR1cm4gc2lnbmF0dXJlVHlwZS5uYW1lO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU2lnbmF0dXJlKCRldmVudDogc3RyaW5nLCB0eXBlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2UucmVtb3ZlU2lnbmF0dXJlcygkZXZlbnQsIHR5cGUpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmdldFNpZ25hdHVyZXModHlwZSkpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VVcGxvYWRQYW5lbCgkZXZlbnQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuc2hvd1VwbG9hZCA9ICEkZXZlbnQ7XHJcbiAgICB0aGlzLmdldFNpZ25hdHVyZXModGhpcy5pZCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZUNvZGVQYW5lbCgkZXZlbnQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuc2hvd05ld0NvZGUgPSAhJGV2ZW50O1xyXG4gICAgdGhpcy5nZXRTaWduYXR1cmVzKHRoaXMuaWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29kZU5hbWUoKSB7XHJcbiAgICBpZiAoIXRoaXMuaWQpIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5RUl9DT0RFLmlkID09PSB0aGlzLmlkID8gJ1FyIENvZGUnIDogKFNpZ25hdHVyZVR5cGUuQkFSX0NPREUuaWQgPT09IHRoaXMuaWQgPyAnQmFyIENvZGUnIDogJycpO1xyXG4gIH1cclxuXHJcbiAgaWNvbigpIHtcclxuICAgIGlmICghdGhpcy5pZCkge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBTaWduYXR1cmVUeXBlLmdldFNpZ25hdHVyZVR5cGUodGhpcy5pZCkuaWNvbjtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VOZXdTaWduYXR1cmUoKSB7XHJcbiAgICBpZiAoU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkID09PSB0aGlzLmlkIHx8IFNpZ25hdHVyZVR5cGUuSU1BR0UuaWQgPT09IHRoaXMuaWQpIHtcclxuICAgICAgdGhpcy5zaG93VXBsb2FkID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKFNpZ25hdHVyZVR5cGUuQkFSX0NPREUuaWQgPT09IHRoaXMuaWQgfHwgU2lnbmF0dXJlVHlwZS5RUl9DT0RFLmlkID09PSB0aGlzLmlkKSB7XHJcbiAgICAgIHRoaXMuc2hvd05ld0NvZGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5OZXdTaWduYXR1cmUoKSB7XHJcbiAgICBpZiAodGhpcy5zaG93VXBsb2FkIHx8IHRoaXMuc2hvd05ld0NvZGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKFNpZ25hdHVyZVR5cGUuRElHSVRBTC5pZCA9PT0gdGhpcy5pZCB8fCBTaWduYXR1cmVUeXBlLklNQUdFLmlkID09PSB0aGlzLmlkKSB7XHJcbiAgICAgIHRoaXMuc2hvd1VwbG9hZCA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKFNpZ25hdHVyZVR5cGUuQkFSX0NPREUuaWQgPT09IHRoaXMuaWQgfHwgU2lnbmF0dXJlVHlwZS5RUl9DT0RFLmlkID09PSB0aGlzLmlkKSB7XHJcbiAgICAgIHRoaXMuc2hvd05ld0NvZGUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uZXdTaWduYXR1cmVFdmVudC5lbWl0KHRoaXMuaWQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=