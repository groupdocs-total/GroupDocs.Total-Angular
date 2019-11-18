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
        this.loading = true;
    }
    /**
     * @param {?} tabId
     * @return {?}
     */
    getSignatures(tabId) {
        this._signatureService.getSignatures('', tabId).subscribe((/**
         * @param {?} signatures
         * @return {?}
         */
        (signatures) => {
            this.signatures = signatures || [];
            this.loading = false;
        }));
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
        this.loading = true;
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
                template: "<gd-left-side-bar [showSpinner]=\"loading\">\n  <div class=\"tab-content\">\n    <div class=\"gd-signature-context-panel\">\n      <div class=\"gd-signature-context-pane-wrapper\">\n        <div class=\"signature-title-block\"> <!--for safari-->\n          <div class=\"gd-signature-list-title\" *ngIf=\"showNewCode || showUpload\">\n            <div class=\"gd-signature-context-panel-title\">{{getTitle()}}</div>\n            <div class=\"gd-signature-title-icon\">\n              <fa-icon [icon]=\"['fa','times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"closeNewSignature()\"></fa-icon>\n            </div>\n          </div>\n        </div>\n        <gd-upload-signature (closePanel)=\"closeUploadPanel($event)\" [rewrite]=\"rewrite\" [signatureType]=\"id\"\n                             *ngIf=\"showUpload\"></gd-upload-signature>\n        <gd-new-bar-qr-code (closePanel)=\"closeCodePanel($event)\" [type]=\"id\" [icon]=\"icon()\" [name]=\"getCodeName()\"\n                            *ngIf=\"showNewCode\"></gd-new-bar-qr-code>\n        <div class=\"signature-title-block\"> <!--for safari-->\n          <div class=\"gd-signature-list-title\">\n            <div class=\"gd-signature-context-panel-title\">{{getName()}}</div>\n            <div class=\"gd-signature-title-icon\">\n              <fa-icon [icon]=\"['fa','plus']\" [class]=\"'ng-fa-icon icon'\"\n                       [ngClass]=\"showNewCode || showUpload ? 'disabled' : ''\"\n                       (click)=\"openNewSignature()\"></fa-icon>\n            </div>\n          </div>\n        </div>\n        <gd-signature-list-panel class=\"gd-signatures-scroll\" [icon]=\"icon()\" [signatureType]=\"id\"\n                                 [signatures]=\"signatures\"\n                                 (removeSignatureEvent)=\"removeSignature($event, id)\"\n                                 [isPdf]=\"isPdf\" [loading]=\"loading\"></gd-signature-list-panel>\n      </div>\n    </div>\n  </div>\n</gd-left-side-bar>\n",
                styles: ["::ng-deep .left-panel{width:350px;height:calc(100% - 90px)}::ng-deep .gd-left-bar-fade{width:350px!important}.gd-signatures-scroll{height:calc(100% - 60px)}.tab-content{height:calc(100% - 90px);line-height:unset;position:absolute;background-color:#fff}.gd-signature-context-panel{background-color:#f3f3f3;width:350px;height:100%;position:absolute}.gd-signature-context-panel-title,.gd-signature-context-upload-title{color:#aaa;font-size:12px;font-family:Helvetica;font-weight:700;margin:5px 12px}.signature-title-block{display:block}.gd-signature-list-title{display:flex;flex-direction:row;height:70px}.gd-signature-list-title .gd-signature-title-icon{flex:0 0 70px;display:flex;align-items:center;justify-content:center}.gd-signature-list-title .gd-signature-title-icon .icon{color:#707070;cursor:pointer;font-size:12px}.gd-signature-list-title .gd-signature-title-icon .icon.disabled{color:#959da5}.gd-signature-list-title .gd-signature-context-panel-title{flex:1;display:flex;align-items:center;justify-content:flex-start}.gd-signature-context-pane-wrapper{display:flex;flex-direction:column;height:inherit;overflow:auto}@media (max-width:1037px){.tab-content{width:100%}.gd-signature-context-panel{left:0;right:0;width:auto}.gd-signature-context-panel-title{font-size:12px;line-height:18px;margin:16px 0 14px 12px}.gd-signature-context-panel-title,.gd-signature-context-upload-title{width:unset}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLWxlZnQtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9zaWduYXR1cmUtbGVmdC1wYW5lbC9zaWduYXR1cmUtbGVmdC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQVksYUFBYSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFPdEQsTUFBTSxPQUFPLDJCQUEyQjs7OztJQVV0QyxZQUFvQixpQkFBbUM7UUFBbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQU43QyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ2xELGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFMUIsWUFBTyxHQUFHLElBQUksQ0FBQztJQUdmLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsVUFBdUIsRUFBRSxFQUFFO1lBQ3BGLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxJQUFJLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTyxJQUFJO1FBQ1YsSUFBSSxDQUFDLE9BQU8s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RUgsd0RBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTaWduYXR1cmUsIFNpZ25hdHVyZVR5cGV9IGZyb20gXCIuLi9zaWduYXR1cmUtbW9kZWxzXCI7XG5pbXBvcnQge1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuLi9zaWduYXR1cmUuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1zaWduYXR1cmUtbGVmdC1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWduYXR1cmUtbGVmdC1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZ25hdHVyZS1sZWZ0LXBhbmVsLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlTGVmdFBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSByZXdyaXRlOiBib29sZWFuO1xuICBASW5wdXQoKSBpc1BkZjogYm9vbGVhbjtcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQE91dHB1dCgpIG5ld1NpZ25hdHVyZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIHB1YmxpYyBzaG93TmV3Q29kZSA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd1VwbG9hZCA9IGZhbHNlO1xuICBzaWduYXR1cmVzOiBTaWduYXR1cmVbXTtcbiAgbG9hZGluZyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2lnbmF0dXJlU2VydmljZTogU2lnbmF0dXJlU2VydmljZSkge1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlcyh0YWJJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS5nZXRTaWduYXR1cmVzKCcnLCB0YWJJZCkuc3Vic2NyaWJlKChzaWduYXR1cmVzOiBTaWduYXR1cmVbXSkgPT4ge1xuICAgICAgdGhpcy5zaWduYXR1cmVzID0gc2lnbmF0dXJlcyB8fCBbXTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnNpZ25hdHVyZXMgPSBbXTtcbiAgICB0aGlzLmdldFNpZ25hdHVyZXModGhpcy5pZCk7XG4gICAgdGhpcy5zaG93TmV3Q29kZSA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd1VwbG9hZCA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0VGl0bGVJY29uKCkge1xuICAgIHJldHVybiB0aGlzLnNob3dVcGxvYWQgfHwgdGhpcy5zaG93TmV3Q29kZSA/ICd0aW1lcycgOiAncGx1cyc7XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICBpZiAoIXRoaXMuaWQpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBjb25zdCBzaWduYXR1cmVUeXBlID0gU2lnbmF0dXJlVHlwZS5nZXRTaWduYXR1cmVUeXBlKHRoaXMuaWQpO1xuICAgIHJldHVybiAodGhpcy5zaG93VXBsb2FkIHx8IHRoaXMuc2hvd05ld0NvZGUpID8gc2lnbmF0dXJlVHlwZS50aXRsZSA6IHNpZ25hdHVyZVR5cGUubmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgaWYgKCF0aGlzLmlkKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgY29uc3Qgc2lnbmF0dXJlVHlwZSA9IFNpZ25hdHVyZVR5cGUuZ2V0U2lnbmF0dXJlVHlwZSh0aGlzLmlkKTtcbiAgICByZXR1cm4gc2lnbmF0dXJlVHlwZS5uYW1lO1xuICB9XG5cbiAgcmVtb3ZlU2lnbmF0dXJlKCRldmVudDogc3RyaW5nLCB0eXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLnJlbW92ZVNpZ25hdHVyZXMoJGV2ZW50LCB0eXBlKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5nZXRTaWduYXR1cmVzKHR5cGUpKTtcbiAgfVxuXG4gIGNsb3NlVXBsb2FkUGFuZWwoJGV2ZW50OiBib29sZWFuKSB7XG4gICAgdGhpcy5zaG93VXBsb2FkID0gISRldmVudDtcbiAgICB0aGlzLmdldFNpZ25hdHVyZXModGhpcy5pZCk7XG4gIH1cblxuICBjbG9zZUNvZGVQYW5lbCgkZXZlbnQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNob3dOZXdDb2RlID0gISRldmVudDtcbiAgICB0aGlzLmdldFNpZ25hdHVyZXModGhpcy5pZCk7XG4gIH1cblxuICBnZXRDb2RlTmFtZSgpIHtcbiAgICBpZiAoIXRoaXMuaWQpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5RUl9DT0RFLmlkID09PSB0aGlzLmlkID8gJ1FyIENvZGUnIDogKFNpZ25hdHVyZVR5cGUuQkFSX0NPREUuaWQgPT09IHRoaXMuaWQgPyAnQmFyIENvZGUnIDogJycpO1xuICB9XG5cbiAgaWNvbigpIHtcbiAgICBpZiAoIXRoaXMuaWQpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5nZXRTaWduYXR1cmVUeXBlKHRoaXMuaWQpLmljb247XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBjbG9zZU5ld1NpZ25hdHVyZSgpIHtcbiAgICBpZiAoU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkID09PSB0aGlzLmlkIHx8IFNpZ25hdHVyZVR5cGUuSU1BR0UuaWQgPT09IHRoaXMuaWQpIHtcbiAgICAgIHRoaXMuc2hvd1VwbG9hZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoU2lnbmF0dXJlVHlwZS5CQVJfQ09ERS5pZCA9PT0gdGhpcy5pZCB8fCBTaWduYXR1cmVUeXBlLlFSX0NPREUuaWQgPT09IHRoaXMuaWQpIHtcbiAgICAgIHRoaXMuc2hvd05ld0NvZGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvcGVuTmV3U2lnbmF0dXJlKCkge1xuICAgIGlmICh0aGlzLnNob3dVcGxvYWQgfHwgdGhpcy5zaG93TmV3Q29kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkID09PSB0aGlzLmlkIHx8IFNpZ25hdHVyZVR5cGUuSU1BR0UuaWQgPT09IHRoaXMuaWQpIHtcbiAgICAgIHRoaXMuc2hvd1VwbG9hZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChTaWduYXR1cmVUeXBlLkJBUl9DT0RFLmlkID09PSB0aGlzLmlkIHx8IFNpZ25hdHVyZVR5cGUuUVJfQ09ERS5pZCA9PT0gdGhpcy5pZCkge1xuICAgICAgdGhpcy5zaG93TmV3Q29kZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmV3U2lnbmF0dXJlRXZlbnQuZW1pdCh0aGlzLmlkKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==