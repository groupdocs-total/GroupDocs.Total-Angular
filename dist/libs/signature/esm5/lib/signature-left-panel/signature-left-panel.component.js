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
                    template: "<gd-left-side-bar [showSpinner]=\"loading\">\r\n  <div class=\"tab-content\">\r\n    <div class=\"gd-signature-context-panel\">\r\n      <div class=\"gd-signature-context-pane-wrapper\">\r\n        <div class=\"signature-title-block\"> <!--for safari-->\r\n          <div class=\"gd-signature-list-title\" *ngIf=\"showNewCode || showUpload\">\r\n            <div class=\"gd-signature-context-panel-title\">{{getTitle()}}</div>\r\n            <div class=\"gd-signature-title-icon\">\r\n              <fa-icon [icon]=\"['fa','times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"closeNewSignature()\"></fa-icon>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <gd-upload-signature (closePanel)=\"closeUploadPanel($event)\" [rewrite]=\"rewrite\" [signatureType]=\"id\"\r\n                             *ngIf=\"showUpload\"></gd-upload-signature>\r\n        <gd-new-bar-qr-code (closePanel)=\"closeCodePanel($event)\" [type]=\"id\" [icon]=\"icon()\" [name]=\"getCodeName()\"\r\n                            *ngIf=\"showNewCode\"></gd-new-bar-qr-code>\r\n        <div class=\"signature-title-block\"> <!--for safari-->\r\n          <div class=\"gd-signature-list-title\">\r\n            <div class=\"gd-signature-context-panel-title\">{{getName()}}</div>\r\n            <div class=\"gd-signature-title-icon\">\r\n              <fa-icon [icon]=\"['fa','plus']\" [class]=\"'ng-fa-icon icon'\"\r\n                       [ngClass]=\"showNewCode || showUpload ? 'disabled' : ''\"\r\n                       (click)=\"openNewSignature()\"></fa-icon>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <gd-signature-list-panel class=\"gd-signatures-scroll\" [icon]=\"icon()\" [signatureType]=\"id\"\r\n                                 [signatures]=\"signatures\"\r\n                                 (removeSignatureEvent)=\"removeSignature($event, id)\"\r\n                                 [isPdf]=\"isPdf\" [loading]=\"loading\"></gd-signature-list-panel>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</gd-left-side-bar>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLWxlZnQtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9zaWduYXR1cmUtbGVmdC1wYW5lbC9zaWduYXR1cmUtbGVmdC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQVksYUFBYSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQ7SUFlRSxxQ0FBb0IsaUJBQW1DO1FBQXZELGlCQUlDO1FBSm1CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFON0Msc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNsRCxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRTFCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHZCxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTOzs7UUFBQztZQUMvQyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsbURBQWE7Ozs7SUFBYixVQUFjLEtBQWE7UUFBM0IsaUJBUUM7UUFQQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxVQUF1QjtnQkFDaEYsS0FBSSxD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QUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7O2dCQWpIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsOGdFQUFvRDs7aUJBRXJEOzs7O2dCQU5PLGdCQUFnQjs7OzBCQVFyQixLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSztvQ0FDTCxNQUFNOztJQXlHVCxrQ0FBQztDQUFBLEFBbEhELElBa0hDO1NBN0dZLDJCQUEyQjs7O0lBQ3RDLDhDQUEwQjs7SUFDMUIsNENBQXdCOztJQUN4Qix5Q0FBb0I7O0lBQ3BCLHdEQUF5RDs7SUFDekQsa0RBQTJCOztJQUMzQixpREFBMEI7O0lBQzFCLGlEQUF3Qjs7SUFDeEIsOENBQWdCOzs7OztJQUVKLHdEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtTaWduYXR1cmUsIFNpZ25hdHVyZVR5cGV9IGZyb20gXCIuLi9zaWduYXR1cmUtbW9kZWxzXCI7XHJcbmltcG9ydCB7U2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4uL3NpZ25hdHVyZS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXNpZ25hdHVyZS1sZWZ0LXBhbmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbmF0dXJlLWxlZnQtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZ25hdHVyZS1sZWZ0LXBhbmVsLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZUxlZnRQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSByZXdyaXRlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGlzUGRmOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIG5ld1NpZ25hdHVyZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgcHVibGljIHNob3dOZXdDb2RlID0gZmFsc2U7XHJcbiAgcHVibGljIHNob3dVcGxvYWQgPSBmYWxzZTtcclxuICBzaWduYXR1cmVzOiBTaWduYXR1cmVbXTtcclxuICBsb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NpZ25hdHVyZVNlcnZpY2U6IFNpZ25hdHVyZVNlcnZpY2UpIHtcclxuICAgIF9zaWduYXR1cmVTZXJ2aWNlLmdldFJlZnJlc2hTaWduYXR1cmVzLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZ2V0U2lnbmF0dXJlcyh0aGlzLmlkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2lnbmF0dXJlcyh0YWJJZDogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXRoaXMubG9hZGluZykge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLmdldFNpZ25hdHVyZXMoJycsIHRhYklkKS5zdWJzY3JpYmUoKHNpZ25hdHVyZXM6IFNpZ25hdHVyZVtdKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zaWduYXR1cmVzID0gc2lnbmF0dXJlcyB8fCBbXTtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0KCkge1xyXG4gICAgdGhpcy5zaWduYXR1cmVzID0gW107XHJcbiAgICB0aGlzLmdldFNpZ25hdHVyZXModGhpcy5pZCk7XHJcbiAgICB0aGlzLnNob3dOZXdDb2RlID0gZmFsc2U7XHJcbiAgICB0aGlzLnNob3dVcGxvYWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdldFRpdGxlSWNvbigpIHtcclxuICAgIHJldHVybiB0aGlzLnNob3dVcGxvYWQgfHwgdGhpcy5zaG93TmV3Q29kZSA/ICd0aW1lcycgOiAncGx1cyc7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpIHtcclxuICAgIGlmICghdGhpcy5pZCkge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IHNpZ25hdHVyZVR5cGUgPSBTaWduYXR1cmVUeXBlLmdldFNpZ25hdHVyZVR5cGUodGhpcy5pZCk7XHJcbiAgICByZXR1cm4gKHRoaXMuc2hvd1VwbG9hZCB8fCB0aGlzLnNob3dOZXdDb2RlKSA/IHNpZ25hdHVyZVR5cGUudGl0bGUgOiBzaWduYXR1cmVUeXBlLm5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXROYW1lKCkge1xyXG4gICAgaWYgKCF0aGlzLmlkKSB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2lnbmF0dXJlVHlwZSA9IFNpZ25hdHVyZVR5cGUuZ2V0U2lnbmF0dXJlVHlwZSh0aGlzLmlkKTtcclxuICAgIHJldHVybiBzaWduYXR1cmVUeXBlLm5hbWU7XHJcbiAgfVxyXG5cclxuICByZW1vdmVTaWduYXR1cmUoJGV2ZW50OiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS5yZW1vdmVTaWduYXR1cmVzKCRldmVudCwgdHlwZSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuZ2V0U2lnbmF0dXJlcyh0eXBlKSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZVVwbG9hZFBhbmVsKCRldmVudDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5zaG93VXBsb2FkID0gISRldmVudDtcclxuICAgIHRoaXMuZ2V0U2lnbmF0dXJlcyh0aGlzLmlkKTtcclxuICB9XHJcblxyXG4gIGNsb3NlQ29kZVBhbmVsKCRldmVudDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5zaG93TmV3Q29kZSA9ICEkZXZlbnQ7XHJcbiAgICB0aGlzLmdldFNpZ25hdHVyZXModGhpcy5pZCk7XHJcbiAgfVxyXG5cclxuICBnZXRDb2RlTmFtZSgpIHtcclxuICAgIGlmICghdGhpcy5pZCkge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBTaWduYXR1cmVUeXBlLlFSX0NPREUuaWQgPT09IHRoaXMuaWQgPyAnUXIgQ29kZScgOiAoU2lnbmF0dXJlVHlwZS5CQVJfQ09ERS5pZCA9PT0gdGhpcy5pZCA/ICdCYXIgQ29kZScgOiAnJyk7XHJcbiAgfVxyXG5cclxuICBpY29uKCkge1xyXG4gICAgaWYgKCF0aGlzLmlkKSB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFNpZ25hdHVyZVR5cGUuZ2V0U2lnbmF0dXJlVHlwZSh0aGlzLmlkKS5pY29uO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZU5ld1NpZ25hdHVyZSgpIHtcclxuICAgIGlmIChTaWduYXR1cmVUeXBlLkRJR0lUQUwuaWQgPT09IHRoaXMuaWQgfHwgU2lnbmF0dXJlVHlwZS5JTUFHRS5pZCA9PT0gdGhpcy5pZCkge1xyXG4gICAgICB0aGlzLnNob3dVcGxvYWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoU2lnbmF0dXJlVHlwZS5CQVJfQ09ERS5pZCA9PT0gdGhpcy5pZCB8fCBTaWduYXR1cmVUeXBlLlFSX0NPREUuaWQgPT09IHRoaXMuaWQpIHtcclxuICAgICAgdGhpcy5zaG93TmV3Q29kZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3Blbk5ld1NpZ25hdHVyZSgpIHtcclxuICAgIGlmICh0aGlzLnNob3dVcGxvYWQgfHwgdGhpcy5zaG93TmV3Q29kZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkID09PSB0aGlzLmlkIHx8IFNpZ25hdHVyZVR5cGUuSU1BR0UuaWQgPT09IHRoaXMuaWQpIHtcclxuICAgICAgdGhpcy5zaG93VXBsb2FkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAoU2lnbmF0dXJlVHlwZS5CQVJfQ09ERS5pZCA9PT0gdGhpcy5pZCB8fCBTaWduYXR1cmVUeXBlLlFSX0NPREUuaWQgPT09IHRoaXMuaWQpIHtcclxuICAgICAgdGhpcy5zaG93TmV3Q29kZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm5ld1NpZ25hdHVyZUV2ZW50LmVtaXQodGhpcy5pZCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==