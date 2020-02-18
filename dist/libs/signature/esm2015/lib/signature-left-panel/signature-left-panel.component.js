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
                template: "<gd-left-side-bar [showSpinner]=\"loading\">\n  <div class=\"tab-content\">\n    <div class=\"gd-signature-context-panel\">\n      <div class=\"gd-signature-context-pane-wrapper\">\n        <div class=\"signature-title-block\"> <!--for safari-->\n          <div class=\"gd-signature-list-title\" *ngIf=\"showNewCode || showUpload\">\n            <div class=\"gd-signature-context-panel-title\">{{getTitle()}}</div>\n            <div class=\"gd-signature-title-icon\">\n              <fa-icon [icon]=\"['fa','times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"closeNewSignature()\"></fa-icon>\n            </div>\n          </div>\n        </div>\n        <gd-upload-signature (closePanel)=\"closeUploadPanel($event)\" [rewrite]=\"rewrite\" [signatureType]=\"id\"\n                             *ngIf=\"showUpload\"></gd-upload-signature>\n        <gd-new-bar-qr-code (closePanel)=\"closeCodePanel($event)\" [type]=\"id\" [icon]=\"icon()\" [name]=\"getCodeName()\"\n                            *ngIf=\"showNewCode\"></gd-new-bar-qr-code>\n        <div class=\"signature-title-block\"> <!--for safari-->\n          <div class=\"gd-signature-list-title\">\n            <div class=\"gd-signature-context-panel-title\">{{getName()}}</div>\n            <div class=\"gd-signature-title-icon\">\n              <fa-icon [icon]=\"['fa','plus']\" [class]=\"'ng-fa-icon icon'\"\n                       [ngClass]=\"showNewCode || showUpload ? 'disabled' : ''\"\n                       (click)=\"openNewSignature()\"></fa-icon>\n            </div>\n          </div>\n        </div>\n        <gd-signature-list-panel class=\"gd-signatures-scroll\" [icon]=\"icon()\" [signatureType]=\"id\"\n                                 [signatures]=\"signatures\"\n                                 (removeSignatureEvent)=\"removeSignature($event, id)\"\n                                 [isPdf]=\"isPdf\" [loading]=\"loading\"></gd-signature-list-panel>\n      </div>\n    </div>\n  </div>\n</gd-left-side-bar>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLWxlZnQtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9zaWduYXR1cmUtbGVmdC1wYW5lbC9zaWduYXR1cmUtbGVmdC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQVksYUFBYSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFPdEQsTUFBTSxPQUFPLDJCQUEyQjs7OztJQVV0QyxZQUFvQixpQkFBbUM7UUFBbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQU43QyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ2xELGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFMUIsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUdoQixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLFVBQXVCLEVBQUUsRUFBRTtnQkFDcEYsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLElBQUksRUFBRSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUN2QixDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVE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QzNCLGlEQUEwQjs7SUFDMUIsaURBQXdCOztJQUN4Qiw4Q0FBZ0I7Ozs7O0lBRUosd0RBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTaWduYXR1cmUsIFNpZ25hdHVyZVR5cGV9IGZyb20gXCIuLi9zaWduYXR1cmUtbW9kZWxzXCI7XG5pbXBvcnQge1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuLi9zaWduYXR1cmUuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1zaWduYXR1cmUtbGVmdC1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWduYXR1cmUtbGVmdC1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZ25hdHVyZS1sZWZ0LXBhbmVsLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlTGVmdFBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSByZXdyaXRlOiBib29sZWFuO1xuICBASW5wdXQoKSBpc1BkZjogYm9vbGVhbjtcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQE91dHB1dCgpIG5ld1NpZ25hdHVyZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIHB1YmxpYyBzaG93TmV3Q29kZSA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd1VwbG9hZCA9IGZhbHNlO1xuICBzaWduYXR1cmVzOiBTaWduYXR1cmVbXTtcbiAgbG9hZGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NpZ25hdHVyZVNlcnZpY2U6IFNpZ25hdHVyZVNlcnZpY2UpIHtcbiAgfVxuXG4gIGdldFNpZ25hdHVyZXModGFiSWQ6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5sb2FkaW5nKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS5nZXRTaWduYXR1cmVzKCcnLCB0YWJJZCkuc3Vic2NyaWJlKChzaWduYXR1cmVzOiBTaWduYXR1cmVbXSkgPT4ge1xuICAgICAgICB0aGlzLnNpZ25hdHVyZXMgPSBzaWduYXR1cmVzIHx8IFtdO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIHRoaXMuc2lnbmF0dXJlcyA9IFtdO1xuICAgIHRoaXMuZ2V0U2lnbmF0dXJlcyh0aGlzLmlkKTtcbiAgICB0aGlzLnNob3dOZXdDb2RlID0gZmFsc2U7XG4gICAgdGhpcy5zaG93VXBsb2FkID0gZmFsc2U7XG4gIH1cblxuICBnZXRUaXRsZUljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hvd1VwbG9hZCB8fCB0aGlzLnNob3dOZXdDb2RlID8gJ3RpbWVzJyA6ICdwbHVzJztcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGlmICghdGhpcy5pZCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGNvbnN0IHNpZ25hdHVyZVR5cGUgPSBTaWduYXR1cmVUeXBlLmdldFNpZ25hdHVyZVR5cGUodGhpcy5pZCk7XG4gICAgcmV0dXJuICh0aGlzLnNob3dVcGxvYWQgfHwgdGhpcy5zaG93TmV3Q29kZSkgPyBzaWduYXR1cmVUeXBlLnRpdGxlIDogc2lnbmF0dXJlVHlwZS5uYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICBpZiAoIXRoaXMuaWQpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBjb25zdCBzaWduYXR1cmVUeXBlID0gU2lnbmF0dXJlVHlwZS5nZXRTaWduYXR1cmVUeXBlKHRoaXMuaWQpO1xuICAgIHJldHVybiBzaWduYXR1cmVUeXBlLm5hbWU7XG4gIH1cblxuICByZW1vdmVTaWduYXR1cmUoJGV2ZW50OiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2UucmVtb3ZlU2lnbmF0dXJlcygkZXZlbnQsIHR5cGUpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmdldFNpZ25hdHVyZXModHlwZSkpO1xuICB9XG5cbiAgY2xvc2VVcGxvYWRQYW5lbCgkZXZlbnQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNob3dVcGxvYWQgPSAhJGV2ZW50O1xuICAgIHRoaXMuZ2V0U2lnbmF0dXJlcyh0aGlzLmlkKTtcbiAgfVxuXG4gIGNsb3NlQ29kZVBhbmVsKCRldmVudDogYm9vbGVhbikge1xuICAgIHRoaXMuc2hvd05ld0NvZGUgPSAhJGV2ZW50O1xuICAgIHRoaXMuZ2V0U2lnbmF0dXJlcyh0aGlzLmlkKTtcbiAgfVxuXG4gIGdldENvZGVOYW1lKCkge1xuICAgIGlmICghdGhpcy5pZCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBTaWduYXR1cmVUeXBlLlFSX0NPREUuaWQgPT09IHRoaXMuaWQgPyAnUXIgQ29kZScgOiAoU2lnbmF0dXJlVHlwZS5CQVJfQ09ERS5pZCA9PT0gdGhpcy5pZCA/ICdCYXIgQ29kZScgOiAnJyk7XG4gIH1cblxuICBpY29uKCkge1xuICAgIGlmICghdGhpcy5pZCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBTaWduYXR1cmVUeXBlLmdldFNpZ25hdHVyZVR5cGUodGhpcy5pZCkuaWNvbjtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGNsb3NlTmV3U2lnbmF0dXJlKCkge1xuICAgIGlmIChTaWduYXR1cmVUeXBlLkRJR0lUQUwuaWQgPT09IHRoaXMuaWQgfHwgU2lnbmF0dXJlVHlwZS5JTUFHRS5pZCA9PT0gdGhpcy5pZCkge1xuICAgICAgdGhpcy5zaG93VXBsb2FkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChTaWduYXR1cmVUeXBlLkJBUl9DT0RFLmlkID09PSB0aGlzLmlkIHx8IFNpZ25hdHVyZVR5cGUuUVJfQ09ERS5pZCA9PT0gdGhpcy5pZCkge1xuICAgICAgdGhpcy5zaG93TmV3Q29kZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5OZXdTaWduYXR1cmUoKSB7XG4gICAgaWYgKHRoaXMuc2hvd1VwbG9hZCB8fCB0aGlzLnNob3dOZXdDb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChTaWduYXR1cmVUeXBlLkRJR0lUQUwuaWQgPT09IHRoaXMuaWQgfHwgU2lnbmF0dXJlVHlwZS5JTUFHRS5pZCA9PT0gdGhpcy5pZCkge1xuICAgICAgdGhpcy5zaG93VXBsb2FkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKFNpZ25hdHVyZVR5cGUuQkFSX0NPREUuaWQgPT09IHRoaXMuaWQgfHwgU2lnbmF0dXJlVHlwZS5RUl9DT0RFLmlkID09PSB0aGlzLmlkKSB7XG4gICAgICB0aGlzLnNob3dOZXdDb2RlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uZXdTaWduYXR1cmVFdmVudC5lbWl0KHRoaXMuaWQpO1xuICAgIH1cbiAgfVxufVxuIl19