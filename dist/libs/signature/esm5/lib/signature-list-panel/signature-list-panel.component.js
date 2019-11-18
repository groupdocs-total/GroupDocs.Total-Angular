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
    SignatureListPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-signature-list-panel',
                    template: "<div class=\"gd-signature-list-wrapper\">\n  <div class=\"gd-signature-list-scroll\" *ngIf=\"signatures\">\n    <div class=\"gd-signature-list\" *ngIf=\"signatures\">\n      <div class=\"gd-signature\" *ngFor=\"let signature of signatures\">\n        <div class=\"gd-signature-item\" [draggable]=\"isDigital() ? false : true\"\n             (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\n             (dragleave)=\"dragLeave($event, signature.guid)\">\n          <div class=\"gd-signature-thumbnail\" *ngIf=\"isDigital()\" (click)=\"select(signature.guid)\">\n            <fa-icon [icon]=\"['fa','fingerprint']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n          </div>\n          <div class=\"gd-signature-thumbnail\" *ngIf=\"signature.image\">\n            <img [ngClass]=\"'gd-signature-thumbnail-' + signatureType\"\n                 [attr.src]=\"getImage(signature.image) | safeResourceHtml\"\n                 alt=\"\" [draggable]=\"false\" (click)=\"select(signature.guid)\">\n          </div>\n          <div class=\"gd-signature-title\" [ngClass]=\"signatureType\" (click)=\"select(signature.guid)\">\n            <label class=\"gd-signature-name\" [style.color]=\"signature.fontColor\">\n              {{signature.text ? signature.text : signature.name}}</label>\n          </div>\n          <div class=\"gd-signature-trash-icon\">\n            <fa-icon [icon]=\"['fas','trash']\" [class]=\"'ng-fa-icon icon'\"\n                     (click)=\"deleteSign(signature.guid)\"></fa-icon>\n          </div>\n        </div>\n        <div class=\"gd-digital-inputs\" *ngIf=\"showDigitalInputs && digitalId === signature.guid\">\n          <div class=\"gd-digital-input-wrapper\">\n            <fa-icon [icon]=\"['fas','comment']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input #reason (input)=\"digitalProps.reason = reason.value\" type=\"text\" placeholder=\"Reason\">\n          </div>\n          <div class=\"gd-digital-input-wrapper\" *ngIf=\"isPdf\">\n            <fa-icon [icon]=\"['fas','envelope']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input #contact (input)=\"digitalProps.contact = contact.value\" type=\"text\" placeholder=\"Contact\">\n          </div>\n          <div class=\"gd-digital-input-wrapper\" *ngIf=\"isPdf\">\n            <fa-icon [icon]=\"['fas','map-marker-alt']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input #address (input)=\"digitalProps.address = address.value\" type=\"text\" placeholder=\"Location\">\n          </div>\n          <div class=\"gd-digital-input-wrapper\">\n            <fa-icon [icon]=\"['fas','key']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input #password (input)=\"digitalProps.signaturePassword = password.value\" type=\"password\"\n                   placeholder=\"Password\">\n          </div>\n          <div class=\"gd-digital-input-wrapper\">\n            <fa-icon [icon]=\"['fas','calendar']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input type=\"date\" #date (input)=\"digitalProps.date=parseDate(date.value)\" placeholder=\"Date\">\n          </div>\n          <div class=\"gd-sign-digital\" [ngClass]=\"isActive(signature.guid) ? 'active' : ''\"\n               (click)=\"selectDigital(signature.guid)\">\n            <fa-icon [icon]=\"['fas','save']\"></fa-icon>\n            <span class=\"digital-apply\">Apply</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"gd-signature-empty-list\" *ngIf=\"empty()\">\n    <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    <span class=\"gd-empty-list-text\">There is no entries yet</span>\n  </div>\n</div>\n",
                    styles: [".gd-signature-list-wrapper{display:flex;flex-direction:column;flex:1;overflow:auto;height:100%}.gd-signature-list-scroll{display:block;overflow-x:hidden;overflow-y:auto!important}.gd-signature-item{width:100%;cursor:pointer;position:relative;min-height:68px;display:flex;flex-direction:row;background-color:rgba(255,255,255)}.gd-signature-item .icon{font-size:15px;color:#676767;cursor:pointer}.gd-signature-item .gd-signature-trash-icon{flex:0 0 70px;display:flex;align-items:center;justify-content:center}.gd-signature-item .gd-signature-name{max-width:130px;font-size:13px;color:rgba(0,0,0,.36);cursor:pointer;text-overflow:ellipsis;white-space:nowrap;display:block;overflow:hidden}.gd-signature-item .gd-signature-thumbnail{flex:0 0 70px;display:flex;align-items:center;justify-content:center;width:auto}.gd-signature-item .gd-signature-thumbnail .icon{font-size:30px;padding:0;margin:0;opacity:.25}.gd-signature-item .gd-signature-title{flex:1;display:flex;align-items:center;justify-content:flex-start;padding-left:7px}.gd-signature-item .gd-signature-thumbnail-hand,.gd-signature-item .gd-signature-thumbnail-image,.gd-signature-item .gd-signature-thumbnail-text{max-width:70px;height:41px}.gd-signature-item .gd-signature-thumbnail-image{min-width:41px;max-width:70px}.gd-signature-item .gd-signature-thumbnail-barCode,.gd-signature-item .gd-signature-thumbnail-qrCode{max-width:70px;height:44px}.gd-signature-item .gd-signature-thumbnail-stamp{max-width:70px;height:48px}.gd-signature-item .gd-signature-title.text{padding-left:16px}.gd-signature-list{display:flex;flex-direction:column;width:inherit;background-color:#e7e7e7}.gd-signature{display:flex;flex-direction:column;width:100%;background-color:rgba(255,255,255,.75);margin-bottom:2px}.gd-signature-empty-list{display:flex;flex-direction:column;text-align:center;color:#acacac;justify-content:center;width:350px;height:250px}.gd-signature-empty-list .icon{font-size:60px}.gd-signature-empty-list i{font-size:60px;padding:87px 97px 0}.gd-empty-list-text{padding:18px 38px 0;font-size:12px}.gd-digital-input-wrapper{margin:9px 8px 7px;display:flex;border:5px #ddd}.gd-sign-digital{height:27px;background-color:#969696;margin:9px 8px 7px;display:flex;color:#fff;font-size:13px;box-shadow:0 0 3px #ddd;cursor:pointer;padding-top:5px;padding-left:10px}.digital-apply{padding-left:10px}.gd-sign-digital.active{background-color:#25c2d4}.gd-digital-inputs input{width:100%;height:27px;padding-left:28px}.gd-digital-inputs .icon{position:absolute;font-size:12px;margin:7px 0 7px 7px;color:#ccc!important}@media (max-width:1037px){.gd-signature-item .gd-signature-name{font-size:13px}.gd-signature-item .icon{font-size:15px}.gd-signature-thumbnail-hand,.gd-signature-thumbnail-image,.gd-signature-thumbnail-text{margin:0}.gd-signature-thumbnail-image{width:44px;height:44px}.gd-signature-thumbnail-digital .icon{font-size:30px!important}.gd-digital-inputs .icon{font-size:13px}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLWxpc3QtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9zaWduYXR1cmUtbGlzdC1wYW5lbC9zaWduYXR1cmUtbGlzdC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUMsV0FBVyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBYSxhQUFhLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDOUUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBR3JFO0lBaUJFLHFDQUFvQixnQkFBaUMsRUFDakMsdUJBQStDLEVBQy9DLHFCQUEyQyxFQUMzQyxTQUFtQixFQUNuQix3QkFBaUQ7UUFKakQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXdCO1FBQy9DLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7UUFDM0MsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO1FBVDNELHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDNUQsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGlCQUFZLEdBQUcsSUFB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OztJQUVOLHVEQUF5Qzs7Ozs7SUFDekMsOERBQXVEOzs7OztJQUN2RCw0REFBbUQ7Ozs7O0lBQ25ELGdEQUEyQjs7Ozs7SUFDM0IsK0RBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEaWdpdGFsU2lnbiwgRHJhZ2dhYmxlU2lnbmF0dXJlLCBQb3NpdGlvbiwgU2lnbmF0dXJlLCBTaWduYXR1cmVUeXBlfSBmcm9tIFwiLi4vc2lnbmF0dXJlLW1vZGVsc1wiO1xuaW1wb3J0IHtOYXZpZ2F0ZVNlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7U2VsZWN0U2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4uL3NlbGVjdC1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtEcmFnU2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4uL2RyYWctc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7RGF0ZVBpcGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7U2lnbmF0dXJlc0hvbGRlclNlcnZpY2V9IGZyb20gXCIuLi9zaWduYXR1cmVzLWhvbGRlci5zZXJ2aWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2Qtc2lnbmF0dXJlLWxpc3QtcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbmF0dXJlLWxpc3QtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWduYXR1cmUtbGlzdC1wYW5lbC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZUxpc3RQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBzaWduYXR1cmVzOiBTaWduYXR1cmVbXTtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBzaWduYXR1cmVUeXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlzUGRmOiBib29sZWFuO1xuICBASW5wdXQoKSBsb2FkaW5nOiBib29sZWFuO1xuICBAT3V0cHV0KCkgcmVtb3ZlU2lnbmF0dXJlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgc2hvd0RpZ2l0YWxJbnB1dHMgPSBmYWxzZTtcbiAgZGlnaXRhbFByb3BzID0gbmV3IERpZ2l0YWxTaWduKCk7XG4gIGRpZ2l0YWxJZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zZWxlY3RTaWduYXR1cmVTZXJ2aWNlOiBTZWxlY3RTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9kcmFnU2lnbmF0dXJlU2VydmljZTogRHJhZ1NpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2RhdGVQaXBlOiBEYXRlUGlwZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2lnbmF0dXJlc0hvbGRlclNlcnZpY2U6IFNpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5kaWdpdGFsUHJvcHMuZGF0ZSA9IHRoaXMuX2RhdGVQaXBlLnRyYW5zZm9ybShuZXcgRGF0ZSgpLCAnZGQtTU0teXl5eScpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBnZXRJbWFnZShkYXRhOiBzdHJpbmcpIHtcbiAgICBjb25zdCBkYXRhSW1hZ2VQbmdCYXNlNjQgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCc7XG4gICAgcmV0dXJuIGRhdGFJbWFnZVBuZ0Jhc2U2NCArIGRhdGE7XG4gIH1cblxuICBkZWxldGVTaWduKGd1aWQ6IHN0cmluZykge1xuICAgIHRoaXMucmVtb3ZlU2lnbmF0dXJlRXZlbnQuZW1pdChndWlkKTtcbiAgfVxuXG4gIGlzRGlnaXRhbCgpIHtcbiAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkID09PSB0aGlzLnNpZ25hdHVyZVR5cGU7XG4gIH1cblxuICBwcml2YXRlIHNlbGVjdFNpZ25hdHVyZShzaWduOiBEcmFnZ2FibGVTaWduYXR1cmUpIHtcbiAgICB0aGlzLl9zZWxlY3RTaWduYXR1cmVTZXJ2aWNlLnNlbGVjdChzaWduKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2lnbihndWlkOiBzdHJpbmcpOiBEcmFnZ2FibGVTaWduYXR1cmUge1xuICAgIGNvbnN0IHNpZ24gPSBuZXcgRHJhZ2dhYmxlU2lnbmF0dXJlKCk7XG4gICAgc2lnbi50eXBlID0gdGhpcy5zaWduYXR1cmVUeXBlO1xuICAgIHNpZ24uZ3VpZCA9IGd1aWQ7XG4gICAgc2lnbi5wb3NpdGlvbiA9IG5ldyBQb3NpdGlvbigwLCAwKTtcbiAgICBzaWduLnBhZ2VOdW1iZXIgPSB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2U7XG4gICAgcmV0dXJuIHNpZ247XG4gIH1cblxuICBzZWxlY3QoZ3VpZDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuc2lnbmF0dXJlVHlwZSA9PT0gU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkKSB7XG4gICAgICB0aGlzLnNob3dEaWdpdGFsSW5wdXRzID0gdGhpcy5kaWdpdGFsSWQgIT09IGd1aWQ7XG4gICAgICB0aGlzLmRpZ2l0YWxJZCA9IHRoaXMuZGlnaXRhbElkID09PSBndWlkID8gbnVsbCA6IGd1aWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNpZ24gPSB0aGlzLmdldFNpZ24oZ3VpZCk7XG4gICAgICB0aGlzLnNlbGVjdFNpZ25hdHVyZShzaWduKTtcbiAgICB9XG4gIH1cblxuICBkcmFnT3ZlcigkZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGRyYWdMZWF2ZSgkZXZlbnQ6IERyYWdFdmVudCwgZ3VpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fZHJhZ1NpZ25hdHVyZVNlcnZpY2Uuc2lnbiA9IHRoaXMuZ2V0U2lnbihndWlkKTtcbiAgfVxuXG4gIHNlbGVjdERpZ2l0YWwoZ3VpZDogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKGd1aWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNpZ24gPSB0aGlzLmdldFNpZ24oZ3VpZCk7XG4gICAgc2lnbi5kaWdpdGFsUHJvcHMgPSB0aGlzLmRpZ2l0YWxQcm9wcztcbiAgICB0aGlzLnNlbGVjdFNpZ25hdHVyZShzaWduKTtcbiAgfVxuXG4gIHBhcnNlRGF0ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLl9kYXRlUGlwZS50cmFuc2Zvcm0odmFsdWUsICdkZC1NTS15eXl5Jyk7XG4gIH1cblxuICBpc0FjdGl2ZShndWlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gIXRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLmhhcyhndWlkKTtcbiAgfVxuXG4gIGRyYWdTdGFydCgkZXZlbnQ6IERyYWdFdmVudCkgeyAvLyBmb3IgZmZcbiAgICAkZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnZm9vJyk7XG4gIH1cblxuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gIXRoaXMubG9hZGluZyAmJiAoIXRoaXMuc2lnbmF0dXJlcyB8fCB0aGlzLnNpZ25hdHVyZXMubGVuZ3RoID09PSAwKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG93RGlnaXRhbElucHV0cykge1xuICAgICAgdGhpcy5zaG93RGlnaXRhbElucHV0cyA9IHRoaXMuc2lnbmF0dXJlVHlwZSA9PT0gU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkO1xuICAgIH1cbiAgfVxufVxuIl19