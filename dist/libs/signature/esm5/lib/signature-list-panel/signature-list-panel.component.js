/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DigitalSign, DraggableSignature, Position, SignatureType } from "../signature-models";
import { NavigateService } from "@groupdocs.examples.angular/common-components";
import { SelectSignatureService } from "../select-signature.service";
import { DragSignatureService } from "../drag-signature.service";
import { DatePipe } from "@angular/common";
import { SignaturesHolderService } from "../signatures-holder.service";
var SignatureListPanelComponent = /** @class */ (function () {
    function SignatureListPanelComponent(_navigateService, _selectSignatureService, _dragSignatureService, _datePipe, _signaturesHolderService) {
        this._navigateService = _navigateService;
        this._selectSignatureService = _selectSignatureService;
        this._dragSignatureService = _dragSignatureService;
        this._datePipe = _datePipe;
        this._signaturesHolderService = _signaturesHolderService;
        this.removeSignatureEvent = new EventEmitter();
        this.showDigitalInputs = false;
        this.digitalProps = new DigitalSign();
        this.digitalProps.date = this._datePipe.transform(new Date(), 'dd-MM-yyyy');
    }
    /**
     * @return {?}
     */
    SignatureListPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} data
     * @return {?}
     */
    SignatureListPanelComponent.prototype.getImage = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var dataImagePngBase64 = 'data:image/png;base64,';
        return dataImagePngBase64 + data;
    };
    /**
     * @param {?} guid
     * @return {?}
     */
    SignatureListPanelComponent.prototype.deleteSign = /**
     * @param {?} guid
     * @return {?}
     */
    function (guid) {
        this.removeSignatureEvent.emit(guid);
    };
    /**
     * @return {?}
     */
    SignatureListPanelComponent.prototype.isDigital = /**
     * @return {?}
     */
    function () {
        return SignatureType.DIGITAL.id === this.signatureType;
    };
    /**
     * @private
     * @param {?} sign
     * @return {?}
     */
    SignatureListPanelComponent.prototype.selectSignature = /**
     * @private
     * @param {?} sign
     * @return {?}
     */
    function (sign) {
        this._selectSignatureService.select(sign);
    };
    /**
     * @private
     * @param {?} guid
     * @return {?}
     */
    SignatureListPanelComponent.prototype.getSign = /**
     * @private
     * @param {?} guid
     * @return {?}
     */
    function (guid) {
        /** @type {?} */
        var sign = new DraggableSignature();
        sign.type = this.signatureType;
        sign.guid = guid;
        sign.position = new Position(0, 0);
        sign.pageNumber = this._navigateService.currentPage;
        return sign;
    };
    /**
     * @param {?} guid
     * @return {?}
     */
    SignatureListPanelComponent.prototype.select = /**
     * @param {?} guid
     * @return {?}
     */
    function (guid) {
        if (this.signatureType === SignatureType.DIGITAL.id) {
            this.showDigitalInputs = this.digitalId !== guid;
            this.digitalId = this.digitalId === guid ? null : guid;
        }
        else {
            /** @type {?} */
            var sign = this.getSign(guid);
            this.selectSignature(sign);
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SignatureListPanelComponent.prototype.dragOver = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
    };
    /**
     * @param {?} $event
     * @param {?} guid
     * @return {?}
     */
    SignatureListPanelComponent.prototype.dragLeave = /**
     * @param {?} $event
     * @param {?} guid
     * @return {?}
     */
    function ($event, guid) {
        this._dragSignatureService.sign = this.getSign(guid);
    };
    /**
     * @param {?} guid
     * @return {?}
     */
    SignatureListPanelComponent.prototype.selectDigital = /**
     * @param {?} guid
     * @return {?}
     */
    function (guid) {
        if (!this.isActive(guid)) {
            return;
        }
        /** @type {?} */
        var sign = this.getSign(guid);
        sign.digitalProps = this.digitalProps;
        this.selectSignature(sign);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SignatureListPanelComponent.prototype.parseDate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this._datePipe.transform(value, 'dd-MM-yyyy');
    };
    /**
     * @param {?} guid
     * @return {?}
     */
    SignatureListPanelComponent.prototype.isActive = /**
     * @param {?} guid
     * @return {?}
     */
    function (guid) {
        return !this._signaturesHolderService.has(guid);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SignatureListPanelComponent.prototype.dragStart = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.dataTransfer.setData('text', 'foo');
    };
    /**
     * @return {?}
     */
    SignatureListPanelComponent.prototype.empty = /**
     * @return {?}
     */
    function () {
        return !this.loading && (!this.signatures || this.signatures.length === 0);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SignatureListPanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.showDigitalInputs) {
            this.showDigitalInputs = this.signatureType === SignatureType.DIGITAL.id;
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SignatureListPanelComponent.prototype.drop = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
    };
    SignatureListPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-signature-list-panel',
                    template: "<div class=\"gd-signature-list-wrapper\">\r\n  <div class=\"gd-signature-list-scroll\" *ngIf=\"signatures\">\r\n    <div class=\"gd-signature-list\" *ngIf=\"signatures\">\r\n      <div class=\"gd-signature\" *ngFor=\"let signature of signatures\">\r\n        <div class=\"gd-signature-item\" [draggable]=\"isDigital() ? false : true\"\r\n             (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\r\n             (dragleave)=\"dragLeave($event, signature.guid)\" (drop)=\"drop($event)\">\r\n          <div class=\"gd-signature-thumbnail\" *ngIf=\"isDigital()\" (click)=\"select(signature.guid)\">\r\n            <fa-icon [icon]=\"['fa','fingerprint']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n          </div>\r\n          <div class=\"gd-signature-thumbnail\" *ngIf=\"signature.image\">\r\n            <img [ngClass]=\"'gd-signature-thumbnail-' + signatureType\"\r\n                 [attr.src]=\"getImage(signature.image) | safeResourceHtml\"\r\n                 alt=\"\" [draggable]=\"false\" (click)=\"select(signature.guid)\">\r\n          </div>\r\n          <div class=\"gd-signature-title\" [ngClass]=\"signatureType\" (click)=\"select(signature.guid)\">\r\n            <label class=\"gd-signature-name\" [style.color]=\"signature.fontColor\">\r\n              {{signature.text ? signature.text : signature.name}}</label>\r\n          </div>\r\n          <div class=\"gd-signature-trash-icon\">\r\n            <fa-icon [icon]=\"['fas','trash']\" [class]=\"'ng-fa-icon icon'\"\r\n                     (click)=\"deleteSign(signature.guid)\"></fa-icon>\r\n          </div>\r\n        </div>\r\n        <div class=\"gd-digital-inputs\" *ngIf=\"showDigitalInputs && digitalId === signature.guid\">\r\n          <div class=\"gd-digital-input-wrapper\">\r\n            <fa-icon [icon]=\"['fas','comment']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n            <input #reason (input)=\"digitalProps.reason = reason.value\" type=\"text\" placeholder=\"Reason\">\r\n          </div>\r\n          <div class=\"gd-digital-input-wrapper\" *ngIf=\"isPdf\">\r\n            <fa-icon [icon]=\"['fas','envelope']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n            <input #contact (input)=\"digitalProps.contact = contact.value\" type=\"text\" placeholder=\"Contact\">\r\n          </div>\r\n          <div class=\"gd-digital-input-wrapper\" *ngIf=\"isPdf\">\r\n            <fa-icon [icon]=\"['fas','map-marker-alt']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n            <input #address (input)=\"digitalProps.address = address.value\" type=\"text\" placeholder=\"Location\">\r\n          </div>\r\n          <div class=\"gd-digital-input-wrapper\">\r\n            <fa-icon [icon]=\"['fas','key']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n            <input #password (input)=\"digitalProps.signaturePassword = password.value\" type=\"password\"\r\n                   placeholder=\"Password\">\r\n          </div>\r\n          <div class=\"gd-digital-input-wrapper\">\r\n            <fa-icon [icon]=\"['fas','calendar']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n            <input type=\"date\" #date (input)=\"digitalProps.date=parseDate(date.value)\" placeholder=\"Date\">\r\n          </div>\r\n          <div class=\"gd-sign-digital\" [ngClass]=\"isActive(signature.guid) ? 'active' : ''\"\r\n               (click)=\"selectDigital(signature.guid)\">\r\n            <fa-icon [icon]=\"['fas','save']\"></fa-icon>\r\n            <span class=\"digital-apply\">Apply</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"gd-signature-empty-list\" *ngIf=\"empty()\">\r\n    <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n    <span class=\"gd-empty-list-text\">There is no entries yet</span>\r\n  </div>\r\n</div>\r\n",
                    styles: [".gd-signature-list-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex:1;overflow:auto;height:100%}.gd-signature-list-scroll{display:block;overflow-x:hidden;overflow-y:auto!important;height:inherit}.gd-signature-item{width:100%;cursor:pointer;position:relative;min-height:68px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;background-color:rgba(255,255,255)}.gd-signature-item .icon{font-size:15px;color:#676767;cursor:pointer}.gd-signature-item .gd-signature-trash-icon{-webkit-box-flex:0;flex:0 0 70px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.gd-signature-item .gd-signature-name{max-width:130px;font-size:13px;color:rgba(0,0,0,.36);cursor:pointer;text-overflow:ellipsis;white-space:nowrap;display:block;overflow:hidden}.gd-signature-item .gd-signature-thumbnail{-webkit-box-flex:0;flex:0 0 70px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;width:auto}.gd-signature-item .gd-signature-thumbnail .icon{font-size:30px;padding:0;margin:0;opacity:.25}.gd-signature-item .gd-signature-title{-webkit-box-flex:1;flex:1;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start;padding-left:7px}.gd-signature-item .gd-signature-thumbnail-hand,.gd-signature-item .gd-signature-thumbnail-image,.gd-signature-item .gd-signature-thumbnail-text{max-width:70px;height:41px}.gd-signature-item .gd-signature-thumbnail-image{min-width:41px;max-width:70px}.gd-signature-item .gd-signature-thumbnail-barCode,.gd-signature-item .gd-signature-thumbnail-qrCode{max-width:70px;height:44px}.gd-signature-item .gd-signature-thumbnail-stamp{max-width:70px;height:48px}.gd-signature-item .gd-signature-title.text{padding-left:16px}.gd-signature-list{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:inherit;background-color:#e7e7e7}.gd-signature{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;background-color:rgba(255,255,255,.75);margin-bottom:2px}.gd-signature-empty-list{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;text-align:center;color:#acacac;-webkit-box-pack:center;justify-content:center;height:250px}.gd-signature-empty-list .icon{font-size:60px}.gd-signature-empty-list i{font-size:60px;padding:87px 97px 0}.gd-empty-list-text{padding:18px 38px 0;font-size:12px}.gd-digital-input-wrapper{margin:9px 8px 7px;display:-webkit-box;display:flex;border:5px #ddd}.gd-sign-digital{height:27px;background-color:#969696;margin:9px 8px 7px;display:-webkit-box;display:flex;color:#fff;font-size:13px;box-shadow:0 0 3px #ddd;cursor:pointer;padding-top:5px;padding-left:10px}.digital-apply{padding-left:10px}.gd-sign-digital.active{background-color:#25c2d4}.gd-digital-inputs input{width:100%;height:27px;padding-left:28px}.gd-digital-inputs .icon{position:absolute;font-size:12px;margin:7px 0 7px 7px;color:#ccc!important}@media (max-width:1037px){.gd-signature-item .gd-signature-name{font-size:13px}.gd-signature-item .icon{font-size:15px}.gd-signature-thumbnail-hand,.gd-signature-thumbnail-image,.gd-signature-thumbnail-text{margin:0}.gd-signature-thumbnail-image{width:44px;height:44px}.gd-signature-thumbnail-digital .icon{font-size:30px!important}.gd-digital-inputs .icon{font-size:13px}.gd-signature-list{padding:5px;height:inherit}}"]
                }] }
    ];
    /** @nocollapse */
    SignatureListPanelComponent.ctorParameters = function () { return [
        { type: NavigateService },
        { type: SelectSignatureService },
        { type: DragSignatureService },
        { type: DatePipe },
        { type: SignaturesHolderService }
    ]; };
    SignatureListPanelComponent.propDecorators = {
        signatures: [{ type: Input }],
        icon: [{ type: Input }],
        signatureType: [{ type: Input }],
        isPdf: [{ type: Input }],
        loading: [{ type: Input }],
        removeSignatureEvent: [{ type: Output }]
    };
    return SignatureListPanelComponent;
}());
export { SignatureListPanelComponent };
if (false) {
    /** @type {?} */
    SignatureListPanelComponent.prototype.signatures;
    /** @type {?} */
    SignatureListPanelComponent.prototype.icon;
    /** @type {?} */
    SignatureListPanelComponent.prototype.signatureType;
    /** @type {?} */
    SignatureListPanelComponent.prototype.isPdf;
    /** @type {?} */
    SignatureListPanelComponent.prototype.loading;
    /** @type {?} */
    SignatureListPanelComponent.prototype.removeSignatureEvent;
    /** @type {?} */
    SignatureListPanelComponent.prototype.showDigitalInputs;
    /** @type {?} */
    SignatureListPanelComponent.prototype.digitalProps;
    /** @type {?} */
    SignatureListPanelComponent.prototype.digitalId;
    /**
     * @type {?}
     * @private
     */
    SignatureListPanelComponent.prototype._navigateService;
    /**
     * @type {?}
     * @private
     */
    SignatureListPanelComponent.prototype._selectSignatureService;
    /**
     * @type {?}
     * @private
     */
    SignatureListPanelComponent.prototype._dragSignatureService;
    /**
     * @type {?}
     * @private
     */
    SignatureListPanelComponent.prototype._datePipe;
    /**
     * @type {?}
     * @private
     */
    SignatureListPanelComponent.prototype._signaturesHolderService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLWxpc3QtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9zaWduYXR1cmUtbGlzdC1wYW5lbC9zaWduYXR1cmUtbGlzdC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUMsV0FBVyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBYSxhQUFhLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDOUUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBR3JFO0lBaUJFLHFDQUFvQixnQkFBaUMsRUFDakMsdUJBQStDLEVBQy9DLHFCQUEyQyxFQUMzQyxTQUFtQixFQUNuQix3QkFBaUQ7UUFKakQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXdCO1FBQy9DLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7UUFDM0MsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO1FBVDNELHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDNUQsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGlCQUFZLEdBQUcsSUFB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MkNBQXNCOztJQUN0QixvREFBK0I7O0lBQy9CLDRDQUF3Qjs7SUFDeEIsOENBQTBCOztJQUMxQiwyREFBNEQ7O0lBQzVELHdEQUEwQjs7SUFDMUIsbURBQWlDOztJQUNqQyxnREFBa0I7Ozs7O0lBRU4sdURBQXlDOzs7OztJQUN6Qyw4REFBdUQ7Ozs7O0lBQ3ZELDREQUFtRDs7Ozs7SUFDbkQsZ0RBQTJCOzs7OztJQUMzQiwrREFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RGlnaXRhbFNpZ24sIERyYWdnYWJsZVNpZ25hdHVyZSwgUG9zaXRpb24sIFNpZ25hdHVyZSwgU2lnbmF0dXJlVHlwZX0gZnJvbSBcIi4uL3NpZ25hdHVyZS1tb2RlbHNcIjtcclxuaW1wb3J0IHtOYXZpZ2F0ZVNlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtTZWxlY3RTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi4vc2VsZWN0LXNpZ25hdHVyZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RHJhZ1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuLi9kcmFnLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RGF0ZVBpcGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtTaWduYXR1cmVzSG9sZGVyU2VydmljZX0gZnJvbSBcIi4uL3NpZ25hdHVyZXMtaG9sZGVyLnNlcnZpY2VcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXNpZ25hdHVyZS1saXN0LXBhbmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbmF0dXJlLWxpc3QtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZ25hdHVyZS1saXN0LXBhbmVsLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZUxpc3RQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgc2lnbmF0dXJlczogU2lnbmF0dXJlW107XHJcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNpZ25hdHVyZVR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKSBpc1BkZjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBsb2FkaW5nOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSByZW1vdmVTaWduYXR1cmVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIHNob3dEaWdpdGFsSW5wdXRzID0gZmFsc2U7XHJcbiAgZGlnaXRhbFByb3BzID0gbmV3IERpZ2l0YWxTaWduKCk7XHJcbiAgZGlnaXRhbElkOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NlbGVjdFNpZ25hdHVyZVNlcnZpY2U6IFNlbGVjdFNpZ25hdHVyZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZHJhZ1NpZ25hdHVyZVNlcnZpY2U6IERyYWdTaWduYXR1cmVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2RhdGVQaXBlOiBEYXRlUGlwZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9zaWduYXR1cmVzSG9sZGVyU2VydmljZTogU2lnbmF0dXJlc0hvbGRlclNlcnZpY2UpIHtcclxuICAgIHRoaXMuZGlnaXRhbFByb3BzLmRhdGUgPSB0aGlzLl9kYXRlUGlwZS50cmFuc2Zvcm0obmV3IERhdGUoKSwgJ2RkLU1NLXl5eXknKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgZ2V0SW1hZ2UoZGF0YTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBkYXRhSW1hZ2VQbmdCYXNlNjQgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCc7XHJcbiAgICByZXR1cm4gZGF0YUltYWdlUG5nQmFzZTY0ICsgZGF0YTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVNpZ24oZ3VpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJlbW92ZVNpZ25hdHVyZUV2ZW50LmVtaXQoZ3VpZCk7XHJcbiAgfVxyXG5cclxuICBpc0RpZ2l0YWwoKSB7XHJcbiAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkID09PSB0aGlzLnNpZ25hdHVyZVR5cGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlbGVjdFNpZ25hdHVyZShzaWduOiBEcmFnZ2FibGVTaWduYXR1cmUpIHtcclxuICAgIHRoaXMuX3NlbGVjdFNpZ25hdHVyZVNlcnZpY2Uuc2VsZWN0KHNpZ24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTaWduKGd1aWQ6IHN0cmluZyk6IERyYWdnYWJsZVNpZ25hdHVyZSB7XHJcbiAgICBjb25zdCBzaWduID0gbmV3IERyYWdnYWJsZVNpZ25hdHVyZSgpO1xyXG4gICAgc2lnbi50eXBlID0gdGhpcy5zaWduYXR1cmVUeXBlO1xyXG4gICAgc2lnbi5ndWlkID0gZ3VpZDtcclxuICAgIHNpZ24ucG9zaXRpb24gPSBuZXcgUG9zaXRpb24oMCwgMCk7XHJcbiAgICBzaWduLnBhZ2VOdW1iZXIgPSB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2U7XHJcbiAgICByZXR1cm4gc2lnbjtcclxuICB9XHJcblxyXG4gIHNlbGVjdChndWlkOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLnNpZ25hdHVyZVR5cGUgPT09IFNpZ25hdHVyZVR5cGUuRElHSVRBTC5pZCkge1xyXG4gICAgICB0aGlzLnNob3dEaWdpdGFsSW5wdXRzID0gdGhpcy5kaWdpdGFsSWQgIT09IGd1aWQ7XHJcbiAgICAgIHRoaXMuZGlnaXRhbElkID0gdGhpcy5kaWdpdGFsSWQgPT09IGd1aWQgPyBudWxsIDogZ3VpZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHNpZ24gPSB0aGlzLmdldFNpZ24oZ3VpZCk7XHJcbiAgICAgIHRoaXMuc2VsZWN0U2lnbmF0dXJlKHNpZ24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhZ092ZXIoJGV2ZW50OiBEcmFnRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgZHJhZ0xlYXZlKCRldmVudDogRHJhZ0V2ZW50LCBndWlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2RyYWdTaWduYXR1cmVTZXJ2aWNlLnNpZ24gPSB0aGlzLmdldFNpZ24oZ3VpZCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3REaWdpdGFsKGd1aWQ6IHN0cmluZykge1xyXG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKGd1aWQpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHNpZ24gPSB0aGlzLmdldFNpZ24oZ3VpZCk7XHJcbiAgICBzaWduLmRpZ2l0YWxQcm9wcyA9IHRoaXMuZGlnaXRhbFByb3BzO1xyXG4gICAgdGhpcy5zZWxlY3RTaWduYXR1cmUoc2lnbik7XHJcbiAgfVxyXG5cclxuICBwYXJzZURhdGUodmFsdWUpIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRlUGlwZS50cmFuc2Zvcm0odmFsdWUsICdkZC1NTS15eXl5Jyk7XHJcbiAgfVxyXG5cclxuICBpc0FjdGl2ZShndWlkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAhdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UuaGFzKGd1aWQpO1xyXG4gIH1cclxuXHJcbiAgZHJhZ1N0YXJ0KCRldmVudDogRHJhZ0V2ZW50KSB7IC8vIGZvciBmZlxyXG4gICAgJGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ2ZvbycpO1xyXG4gIH1cclxuXHJcbiAgZW1wdHkoKSB7XHJcbiAgICByZXR1cm4gIXRoaXMubG9hZGluZyAmJiAoIXRoaXMuc2lnbmF0dXJlcyB8fCB0aGlzLnNpZ25hdHVyZXMubGVuZ3RoID09PSAwKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNob3dEaWdpdGFsSW5wdXRzKSB7XHJcbiAgICAgIHRoaXMuc2hvd0RpZ2l0YWxJbnB1dHMgPSB0aGlzLnNpZ25hdHVyZVR5cGUgPT09IFNpZ25hdHVyZVR5cGUuRElHSVRBTC5pZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyb3AoJGV2ZW50OiBEcmFnRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxufVxyXG4iXX0=