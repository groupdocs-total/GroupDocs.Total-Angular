/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SignatureType } from "../signature-models";
import { SignatureService } from "../signature.service";
var SignatureLeftPanelComponent = /** @class */ (function () {
    function SignatureLeftPanelComponent(_signatureService) {
        var _this = this;
        this._signatureService = _signatureService;
        this.newSignatureEvent = new EventEmitter();
        this.showNewCode = false;
        this.showUpload = false;
        this.loading = false;
        _signatureService.getRefreshSignatures.subscribe((/**
         * @return {?}
         */
        function () {
            _this.getSignatures(_this.id);
        }));
    }
    /**
     * @param {?} tabId
     * @return {?}
     */
    SignatureLeftPanelComponent.prototype.getSignatures = /**
     * @param {?} tabId
     * @return {?}
     */
    function (tabId) {
        var _this = this;
        if (!this.loading) {
            this.loading = true;
            this._signatureService.getSignatures('', tabId).subscribe((/**
             * @param {?} signatures
             * @return {?}
             */
            function (signatures) {
                _this.signatures = signatures || [];
                _this.loading = false;
            }));
        }
    };
    /**
     * @return {?}
     */
    SignatureLeftPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.init();
    };
    /**
     * @private
     * @return {?}
     */
    SignatureLeftPanelComponent.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        this.signatures = [];
        this.getSignatures(this.id);
        this.showNewCode = false;
        this.showUpload = false;
    };
    /**
     * @return {?}
     */
    SignatureLeftPanelComponent.prototype.getTitleIcon = /**
     * @return {?}
     */
    function () {
        return this.showUpload || this.showNewCode ? 'times' : 'plus';
    };
    /**
     * @return {?}
     */
    SignatureLeftPanelComponent.prototype.getTitle = /**
     * @return {?}
     */
    function () {
        if (!this.id) {
            return "";
        }
        /** @type {?} */
        var signatureType = SignatureType.getSignatureType(this.id);
        return (this.showUpload || this.showNewCode) ? signatureType.title : signatureType.name;
    };
    /**
     * @return {?}
     */
    SignatureLeftPanelComponent.prototype.getName = /**
     * @return {?}
     */
    function () {
        if (!this.id) {
            return "";
        }
        /** @type {?} */
        var signatureType = SignatureType.getSignatureType(this.id);
        return signatureType.name;
    };
    /**
     * @param {?} $event
     * @param {?} type
     * @return {?}
     */
    SignatureLeftPanelComponent.prototype.removeSignature = /**
     * @param {?} $event
     * @param {?} type
     * @return {?}
     */
    function ($event, type) {
        var _this = this;
        this._signatureService.removeSignatures($event, type).subscribe((/**
         * @return {?}
         */
        function () { return _this.getSignatures(type); }));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SignatureLeftPanelComponent.prototype.closeUploadPanel = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.showUpload = !$event;
        this.getSignatures(this.id);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SignatureLeftPanelComponent.prototype.closeCodePanel = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.showNewCode = !$event;
        this.getSignatures(this.id);
    };
    /**
     * @return {?}
     */
    SignatureLeftPanelComponent.prototype.getCodeName = /**
     * @return {?}
     */
    function () {
        if (!this.id) {
            return "";
        }
        return SignatureType.QR_CODE.id === this.id ? 'Qr Code' : (SignatureType.BAR_CODE.id === this.id ? 'Bar Code' : '');
    };
    /**
     * @return {?}
     */
    SignatureLeftPanelComponent.prototype.icon = /**
     * @return {?}
     */
    function () {
        if (!this.id) {
            return "";
        }
        return SignatureType.getSignatureType(this.id).icon;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SignatureLeftPanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.init();
    };
    /**
     * @return {?}
     */
    SignatureLeftPanelComponent.prototype.closeNewSignature = /**
     * @return {?}
     */
    function () {
        if (SignatureType.DIGITAL.id === this.id || SignatureType.IMAGE.id === this.id) {
            this.showUpload = false;
        }
        else if (SignatureType.BAR_CODE.id === this.id || SignatureType.QR_CODE.id === this.id) {
            this.showNewCode = false;
        }
    };
    /**
     * @return {?}
     */
    SignatureLeftPanelComponent.prototype.openNewSignature = /**
     * @return {?}
     */
    function () {
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
    };
    SignatureLeftPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-signature-left-panel',
                    template: "<gd-left-side-bar [showSpinner]=\"loading\">\n  <div class=\"tab-content\">\n    <div class=\"gd-signature-context-panel\">\n      <div class=\"gd-signature-context-pane-wrapper\">\n        <div class=\"signature-title-block\"> <!--for safari-->\n          <div class=\"gd-signature-list-title\" *ngIf=\"showNewCode || showUpload\">\n            <div class=\"gd-signature-context-panel-title\">{{getTitle()}}</div>\n            <div class=\"gd-signature-title-icon\">\n              <fa-icon [icon]=\"['fa','times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"closeNewSignature()\"></fa-icon>\n            </div>\n          </div>\n        </div>\n        <gd-upload-signature (closePanel)=\"closeUploadPanel($event)\" [rewrite]=\"rewrite\" [signatureType]=\"id\"\n                             *ngIf=\"showUpload\"></gd-upload-signature>\n        <gd-new-bar-qr-code (closePanel)=\"closeCodePanel($event)\" [type]=\"id\" [icon]=\"icon()\" [name]=\"getCodeName()\"\n                            *ngIf=\"showNewCode\"></gd-new-bar-qr-code>\n        <div class=\"signature-title-block\"> <!--for safari-->\n          <div class=\"gd-signature-list-title\">\n            <div class=\"gd-signature-context-panel-title\">{{getName()}}</div>\n            <div class=\"gd-signature-title-icon\">\n              <fa-icon [icon]=\"['fa','plus']\" [class]=\"'ng-fa-icon icon'\"\n                       [ngClass]=\"showNewCode || showUpload ? 'disabled' : ''\"\n                       (click)=\"openNewSignature()\"></fa-icon>\n            </div>\n          </div>\n        </div>\n        <gd-signature-list-panel class=\"gd-signatures-scroll\" [icon]=\"icon()\" [signatureType]=\"id\"\n                                 [signatures]=\"signatures\"\n                                 (removeSignatureEvent)=\"removeSignature($event, id)\"\n                                 [isPdf]=\"isPdf\" [loading]=\"loading\"></gd-signature-list-panel>\n      </div>\n    </div>\n  </div>\n</gd-left-side-bar>\n",
                    styles: ["::ng-deep .left-panel{width:350px;height:calc(100% - 90px)}::ng-deep .gd-left-bar-fade{width:350px!important}.gd-signatures-scroll{height:calc(100% - 60px)}.tab-content{height:calc(100% - 90px);line-height:unset;position:absolute;background-color:#fff}.gd-signature-context-panel{background-color:#f3f3f3;width:350px;height:100%;position:absolute}.gd-signature-context-panel-title,.gd-signature-context-upload-title{color:#aaa;font-size:12px;font-family:Helvetica;font-weight:700;margin:5px 12px}.signature-title-block{display:block}.gd-signature-list-title{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;height:70px}.gd-signature-list-title .gd-signature-title-icon{-webkit-box-flex:0;flex:0 0 70px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.gd-signature-list-title .gd-signature-title-icon .icon{color:#707070;cursor:pointer;font-size:12px}.gd-signature-list-title .gd-signature-title-icon .icon.disabled{color:#959da5}.gd-signature-list-title .gd-signature-context-panel-title{-webkit-box-flex:1;flex:1;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}.gd-signature-context-pane-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:inherit;overflow:auto}@media (max-width:1037px){.tab-content{width:100%;height:calc(100% - 120px)!important}::ng-deep .left-panel{width:100%!important;overflow:auto!important;height:calc(100% - 120px)}.gd-signature-context-panel{left:0;right:0;width:auto}.gd-signature-context-panel-title{font-size:12px;line-height:18px;margin:16px 0 14px 12px}.gd-signature-context-panel-title,.gd-signature-context-upload-title{width:unset}}"]
                }] }
    ];
    /** @nocollapse */
    SignatureLeftPanelComponent.ctorParameters = function () { return [
        { type: SignatureService }
    ]; };
    SignatureLeftPanelComponent.propDecorators = {
        rewrite: [{ type: Input }],
        isPdf: [{ type: Input }],
        id: [{ type: Input }],
        newSignatureEvent: [{ type: Output }]
    };
    return SignatureLeftPanelComponent;
}());
export { SignatureLeftPanelComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLWxlZnQtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9zaWduYXR1cmUtbGVmdC1wYW5lbC9zaWduYXR1cmUtbGVmdC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQVksYUFBYSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQ7SUFlRSxxQ0FBb0IsaUJBQW1DO1FBQXZELGlCQUlDO1FBSm1CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFON0Msc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNsRCxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRTFCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHZCxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTOzs7UUFBQztZQUMvQyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsbURBQWE7Ozs7SUFBYixVQUFjLEtBQWE7UUFBM0IsaUJBUUM7UUFQQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxVQUF1QjtnQkFDaEYsS0FBSSxD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QUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7O2dCQWpIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsMDhEQUFvRDs7aUJBRXJEOzs7O2dCQU5PLGdCQUFnQjs7OzBCQVFyQixLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSztvQ0FDTCxNQUFNOztJQXlHVCxrQ0FBQztDQUFBLEFBbEhELElBa0hDO1NBN0dZLDJCQUEyQjs7O0lBQ3RDLDhDQUEwQjs7SUFDMUIsNENBQXdCOztJQUN4Qix5Q0FBb0I7O0lBQ3BCLHdEQUF5RDs7SUFDekQsa0RBQTJCOztJQUMzQixpREFBMEI7O0lBQzFCLGlEQUF3Qjs7SUFDeEIsOENBQWdCOzs7OztJQUVKLHdEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2lnbmF0dXJlLCBTaWduYXR1cmVUeXBlfSBmcm9tIFwiLi4vc2lnbmF0dXJlLW1vZGVsc1wiO1xuaW1wb3J0IHtTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi4vc2lnbmF0dXJlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2Qtc2lnbmF0dXJlLWxlZnQtcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbmF0dXJlLWxlZnQtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWduYXR1cmUtbGVmdC1wYW5lbC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZUxlZnRQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgcmV3cml0ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNQZGY6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBuZXdTaWduYXR1cmVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBwdWJsaWMgc2hvd05ld0NvZGUgPSBmYWxzZTtcbiAgcHVibGljIHNob3dVcGxvYWQgPSBmYWxzZTtcbiAgc2lnbmF0dXJlczogU2lnbmF0dXJlW107XG4gIGxvYWRpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaWduYXR1cmVTZXJ2aWNlOiBTaWduYXR1cmVTZXJ2aWNlKSB7XG4gICAgX3NpZ25hdHVyZVNlcnZpY2UuZ2V0UmVmcmVzaFNpZ25hdHVyZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZ2V0U2lnbmF0dXJlcyh0aGlzLmlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFNpZ25hdHVyZXModGFiSWQ6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5sb2FkaW5nKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS5nZXRTaWduYXR1cmVzKCcnLCB0YWJJZCkuc3Vic2NyaWJlKChzaWduYXR1cmVzOiBTaWduYXR1cmVbXSkgPT4ge1xuICAgICAgICB0aGlzLnNpZ25hdHVyZXMgPSBzaWduYXR1cmVzIHx8IFtdO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIHRoaXMuc2lnbmF0dXJlcyA9IFtdO1xuICAgIHRoaXMuZ2V0U2lnbmF0dXJlcyh0aGlzLmlkKTtcbiAgICB0aGlzLnNob3dOZXdDb2RlID0gZmFsc2U7XG4gICAgdGhpcy5zaG93VXBsb2FkID0gZmFsc2U7XG4gIH1cblxuICBnZXRUaXRsZUljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hvd1VwbG9hZCB8fCB0aGlzLnNob3dOZXdDb2RlID8gJ3RpbWVzJyA6ICdwbHVzJztcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGlmICghdGhpcy5pZCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGNvbnN0IHNpZ25hdHVyZVR5cGUgPSBTaWduYXR1cmVUeXBlLmdldFNpZ25hdHVyZVR5cGUodGhpcy5pZCk7XG4gICAgcmV0dXJuICh0aGlzLnNob3dVcGxvYWQgfHwgdGhpcy5zaG93TmV3Q29kZSkgPyBzaWduYXR1cmVUeXBlLnRpdGxlIDogc2lnbmF0dXJlVHlwZS5uYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICBpZiAoIXRoaXMuaWQpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBjb25zdCBzaWduYXR1cmVUeXBlID0gU2lnbmF0dXJlVHlwZS5nZXRTaWduYXR1cmVUeXBlKHRoaXMuaWQpO1xuICAgIHJldHVybiBzaWduYXR1cmVUeXBlLm5hbWU7XG4gIH1cblxuICByZW1vdmVTaWduYXR1cmUoJGV2ZW50OiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2UucmVtb3ZlU2lnbmF0dXJlcygkZXZlbnQsIHR5cGUpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmdldFNpZ25hdHVyZXModHlwZSkpO1xuICB9XG5cbiAgY2xvc2VVcGxvYWRQYW5lbCgkZXZlbnQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNob3dVcGxvYWQgPSAhJGV2ZW50O1xuICAgIHRoaXMuZ2V0U2lnbmF0dXJlcyh0aGlzLmlkKTtcbiAgfVxuXG4gIGNsb3NlQ29kZVBhbmVsKCRldmVudDogYm9vbGVhbikge1xuICAgIHRoaXMuc2hvd05ld0NvZGUgPSAhJGV2ZW50O1xuICAgIHRoaXMuZ2V0U2lnbmF0dXJlcyh0aGlzLmlkKTtcbiAgfVxuXG4gIGdldENvZGVOYW1lKCkge1xuICAgIGlmICghdGhpcy5pZCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBTaWduYXR1cmVUeXBlLlFSX0NPREUuaWQgPT09IHRoaXMuaWQgPyAnUXIgQ29kZScgOiAoU2lnbmF0dXJlVHlwZS5CQVJfQ09ERS5pZCA9PT0gdGhpcy5pZCA/ICdCYXIgQ29kZScgOiAnJyk7XG4gIH1cblxuICBpY29uKCkge1xuICAgIGlmICghdGhpcy5pZCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBTaWduYXR1cmVUeXBlLmdldFNpZ25hdHVyZVR5cGUodGhpcy5pZCkuaWNvbjtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGNsb3NlTmV3U2lnbmF0dXJlKCkge1xuICAgIGlmIChTaWduYXR1cmVUeXBlLkRJR0lUQUwuaWQgPT09IHRoaXMuaWQgfHwgU2lnbmF0dXJlVHlwZS5JTUFHRS5pZCA9PT0gdGhpcy5pZCkge1xuICAgICAgdGhpcy5zaG93VXBsb2FkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChTaWduYXR1cmVUeXBlLkJBUl9DT0RFLmlkID09PSB0aGlzLmlkIHx8IFNpZ25hdHVyZVR5cGUuUVJfQ09ERS5pZCA9PT0gdGhpcy5pZCkge1xuICAgICAgdGhpcy5zaG93TmV3Q29kZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5OZXdTaWduYXR1cmUoKSB7XG4gICAgaWYgKHRoaXMuc2hvd1VwbG9hZCB8fCB0aGlzLnNob3dOZXdDb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChTaWduYXR1cmVUeXBlLkRJR0lUQUwuaWQgPT09IHRoaXMuaWQgfHwgU2lnbmF0dXJlVHlwZS5JTUFHRS5pZCA9PT0gdGhpcy5pZCkge1xuICAgICAgdGhpcy5zaG93VXBsb2FkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKFNpZ25hdHVyZVR5cGUuQkFSX0NPREUuaWQgPT09IHRoaXMuaWQgfHwgU2lnbmF0dXJlVHlwZS5RUl9DT0RFLmlkID09PSB0aGlzLmlkKSB7XG4gICAgICB0aGlzLnNob3dOZXdDb2RlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uZXdTaWduYXR1cmVFdmVudC5lbWl0KHRoaXMuaWQpO1xuICAgIH1cbiAgfVxufVxuIl19