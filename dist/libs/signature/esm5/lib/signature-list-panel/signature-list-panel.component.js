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
                    template: "<div class=\"gd-signature-list-wrapper\">\n  <div class=\"gd-signature-list-scroll\" *ngIf=\"signatures\">\n    <div class=\"gd-signature-list\" *ngIf=\"signatures\">\n      <div class=\"gd-signature\" *ngFor=\"let signature of signatures\">\n        <div class=\"gd-signature-item\" [draggable]=\"isDigital() ? false : true\"\n             (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\n             (dragleave)=\"dragLeave($event, signature.guid)\" (drop)=\"drop($event)\">\n          <div class=\"gd-signature-thumbnail\" *ngIf=\"isDigital()\" (click)=\"select(signature.guid)\">\n            <fa-icon [icon]=\"['fa','fingerprint']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n          </div>\n          <div class=\"gd-signature-thumbnail\" *ngIf=\"signature.image\">\n            <img [ngClass]=\"'gd-signature-thumbnail-' + signatureType\"\n                 [attr.src]=\"getImage(signature.image) | safeResourceHtml\"\n                 alt=\"\" [draggable]=\"false\" (click)=\"select(signature.guid)\">\n          </div>\n          <div class=\"gd-signature-title\" [ngClass]=\"signatureType\" (click)=\"select(signature.guid)\">\n            <label class=\"gd-signature-name\" [style.color]=\"signature.fontColor\">\n              {{signature.text ? signature.text : signature.name}}</label>\n          </div>\n          <div class=\"gd-signature-trash-icon\">\n            <fa-icon [icon]=\"['fas','trash']\" [class]=\"'ng-fa-icon icon'\"\n                     (click)=\"deleteSign(signature.guid)\"></fa-icon>\n          </div>\n        </div>\n        <div class=\"gd-digital-inputs\" *ngIf=\"showDigitalInputs && digitalId === signature.guid\">\n          <div class=\"gd-digital-input-wrapper\">\n            <fa-icon [icon]=\"['fas','comment']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input #reason (input)=\"digitalProps.reason = reason.value\" type=\"text\" placeholder=\"Reason\">\n          </div>\n          <div class=\"gd-digital-input-wrapper\" *ngIf=\"isPdf\">\n            <fa-icon [icon]=\"['fas','envelope']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input #contact (input)=\"digitalProps.contact = contact.value\" type=\"text\" placeholder=\"Contact\">\n          </div>\n          <div class=\"gd-digital-input-wrapper\" *ngIf=\"isPdf\">\n            <fa-icon [icon]=\"['fas','map-marker-alt']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input #address (input)=\"digitalProps.address = address.value\" type=\"text\" placeholder=\"Location\">\n          </div>\n          <div class=\"gd-digital-input-wrapper\">\n            <fa-icon [icon]=\"['fas','key']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input #password (input)=\"digitalProps.signaturePassword = password.value\" type=\"password\"\n                   placeholder=\"Password\">\n          </div>\n          <div class=\"gd-digital-input-wrapper\">\n            <fa-icon [icon]=\"['fas','calendar']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input type=\"date\" #date (input)=\"digitalProps.date=parseDate(date.value)\" placeholder=\"Date\">\n          </div>\n          <div class=\"gd-sign-digital\" [ngClass]=\"isActive(signature.guid) ? 'active' : ''\"\n               (click)=\"selectDigital(signature.guid)\">\n            <fa-icon [icon]=\"['fas','save']\"></fa-icon>\n            <span class=\"digital-apply\">Apply</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"gd-signature-empty-list\" *ngIf=\"empty()\">\n    <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    <span class=\"gd-empty-list-text\">There is no entries yet</span>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLWxpc3QtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9zaWduYXR1cmUtbGlzdC1wYW5lbC9zaWduYXR1cmUtbGlzdC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUMsV0FBVyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBYSxhQUFhLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDOUUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBR3JFO0lBaUJFLHFDQUFvQixnQkFBaUMsRUFDakMsdUJBQStDLEVBQy9DLHFCQUEyQyxFQUMzQyxTQUFtQixFQUNuQix3QkFBaUQ7UUFKakQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXdCO1FBQy9DLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7UUFDM0MsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO1FBVDNELHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDNUQsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGlCQUFZLEdBQUcsSUFB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MkNBQXNCOztJQUN0QixvREFBK0I7O0lBQy9CLDRDQUF3Qjs7SUFDeEIsOENBQTBCOztJQUMxQiwyREFBNEQ7O0lBQzVELHdEQUEwQjs7SUFDMUIsbURBQWlDOztJQUNqQyxnREFBa0I7Ozs7O0lBRU4sdURBQXlDOzs7OztJQUN6Qyw4REFBdUQ7Ozs7O0lBQ3ZELDREQUFtRDs7Ozs7SUFDbkQsZ0RBQTJCOzs7OztJQUMzQiwrREFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpZ2l0YWxTaWduLCBEcmFnZ2FibGVTaWduYXR1cmUsIFBvc2l0aW9uLCBTaWduYXR1cmUsIFNpZ25hdHVyZVR5cGV9IGZyb20gXCIuLi9zaWduYXR1cmUtbW9kZWxzXCI7XG5pbXBvcnQge05hdmlnYXRlU2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtTZWxlY3RTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi4vc2VsZWN0LXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0RyYWdTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi4vZHJhZy1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtEYXRlUGlwZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtTaWduYXR1cmVzSG9sZGVyU2VydmljZX0gZnJvbSBcIi4uL3NpZ25hdHVyZXMtaG9sZGVyLnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1zaWduYXR1cmUtbGlzdC1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWduYXR1cmUtbGlzdC1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZ25hdHVyZS1saXN0LXBhbmVsLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlTGlzdFBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIHNpZ25hdHVyZXM6IFNpZ25hdHVyZVtdO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpZ25hdHVyZVR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgaXNQZGY6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxvYWRpbmc6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSByZW1vdmVTaWduYXR1cmVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBzaG93RGlnaXRhbElucHV0cyA9IGZhbHNlO1xuICBkaWdpdGFsUHJvcHMgPSBuZXcgRGlnaXRhbFNpZ24oKTtcbiAgZGlnaXRhbElkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NlbGVjdFNpZ25hdHVyZVNlcnZpY2U6IFNlbGVjdFNpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2RyYWdTaWduYXR1cmVTZXJ2aWNlOiBEcmFnU2lnbmF0dXJlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZGF0ZVBpcGU6IERhdGVQaXBlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zaWduYXR1cmVzSG9sZGVyU2VydmljZTogU2lnbmF0dXJlc0hvbGRlclNlcnZpY2UpIHtcbiAgICB0aGlzLmRpZ2l0YWxQcm9wcy5kYXRlID0gdGhpcy5fZGF0ZVBpcGUudHJhbnNmb3JtKG5ldyBEYXRlKCksICdkZC1NTS15eXl5Jyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGdldEltYWdlKGRhdGE6IHN0cmluZykge1xuICAgIGNvbnN0IGRhdGFJbWFnZVBuZ0Jhc2U2NCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJztcbiAgICByZXR1cm4gZGF0YUltYWdlUG5nQmFzZTY0ICsgZGF0YTtcbiAgfVxuXG4gIGRlbGV0ZVNpZ24oZ3VpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5yZW1vdmVTaWduYXR1cmVFdmVudC5lbWl0KGd1aWQpO1xuICB9XG5cbiAgaXNEaWdpdGFsKCkge1xuICAgIHJldHVybiBTaWduYXR1cmVUeXBlLkRJR0lUQUwuaWQgPT09IHRoaXMuc2lnbmF0dXJlVHlwZTtcbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0U2lnbmF0dXJlKHNpZ246IERyYWdnYWJsZVNpZ25hdHVyZSkge1xuICAgIHRoaXMuX3NlbGVjdFNpZ25hdHVyZVNlcnZpY2Uuc2VsZWN0KHNpZ24pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTaWduKGd1aWQ6IHN0cmluZyk6IERyYWdnYWJsZVNpZ25hdHVyZSB7XG4gICAgY29uc3Qgc2lnbiA9IG5ldyBEcmFnZ2FibGVTaWduYXR1cmUoKTtcbiAgICBzaWduLnR5cGUgPSB0aGlzLnNpZ25hdHVyZVR5cGU7XG4gICAgc2lnbi5ndWlkID0gZ3VpZDtcbiAgICBzaWduLnBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKDAsIDApO1xuICAgIHNpZ24ucGFnZU51bWJlciA9IHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZTtcbiAgICByZXR1cm4gc2lnbjtcbiAgfVxuXG4gIHNlbGVjdChndWlkOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5zaWduYXR1cmVUeXBlID09PSBTaWduYXR1cmVUeXBlLkRJR0lUQUwuaWQpIHtcbiAgICAgIHRoaXMuc2hvd0RpZ2l0YWxJbnB1dHMgPSB0aGlzLmRpZ2l0YWxJZCAhPT0gZ3VpZDtcbiAgICAgIHRoaXMuZGlnaXRhbElkID0gdGhpcy5kaWdpdGFsSWQgPT09IGd1aWQgPyBudWxsIDogZ3VpZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2lnbiA9IHRoaXMuZ2V0U2lnbihndWlkKTtcbiAgICAgIHRoaXMuc2VsZWN0U2lnbmF0dXJlKHNpZ24pO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdPdmVyKCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgZHJhZ0xlYXZlKCRldmVudDogRHJhZ0V2ZW50LCBndWlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kcmFnU2lnbmF0dXJlU2VydmljZS5zaWduID0gdGhpcy5nZXRTaWduKGd1aWQpO1xuICB9XG5cbiAgc2VsZWN0RGlnaXRhbChndWlkOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUoZ3VpZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2lnbiA9IHRoaXMuZ2V0U2lnbihndWlkKTtcbiAgICBzaWduLmRpZ2l0YWxQcm9wcyA9IHRoaXMuZGlnaXRhbFByb3BzO1xuICAgIHRoaXMuc2VsZWN0U2lnbmF0dXJlKHNpZ24pO1xuICB9XG5cbiAgcGFyc2VEYXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgJ2RkLU1NLXl5eXknKTtcbiAgfVxuXG4gIGlzQWN0aXZlKGd1aWQ6IHN0cmluZykge1xuICAgIHJldHVybiAhdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UuaGFzKGd1aWQpO1xuICB9XG5cbiAgZHJhZ1N0YXJ0KCRldmVudDogRHJhZ0V2ZW50KSB7IC8vIGZvciBmZlxuICAgICRldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdmb28nKTtcbiAgfVxuXG4gIGVtcHR5KCkge1xuICAgIHJldHVybiAhdGhpcy5sb2FkaW5nICYmICghdGhpcy5zaWduYXR1cmVzIHx8IHRoaXMuc2lnbmF0dXJlcy5sZW5ndGggPT09IDApO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3dEaWdpdGFsSW5wdXRzKSB7XG4gICAgICB0aGlzLnNob3dEaWdpdGFsSW5wdXRzID0gdGhpcy5zaWduYXR1cmVUeXBlID09PSBTaWduYXR1cmVUeXBlLkRJR0lUQUwuaWQ7XG4gICAgfVxuICB9XG5cbiAgZHJvcCgkZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuIl19