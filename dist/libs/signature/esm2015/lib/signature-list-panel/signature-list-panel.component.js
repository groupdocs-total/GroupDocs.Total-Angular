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
export class SignatureListPanelComponent {
    /**
     * @param {?} _navigateService
     * @param {?} _selectSignatureService
     * @param {?} _dragSignatureService
     * @param {?} _datePipe
     * @param {?} _signaturesHolderService
     */
    constructor(_navigateService, _selectSignatureService, _dragSignatureService, _datePipe, _signaturesHolderService) {
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
    ngOnInit() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getImage(data) {
        /** @type {?} */
        const dataImagePngBase64 = 'data:image/png;base64,';
        return dataImagePngBase64 + data;
    }
    /**
     * @param {?} guid
     * @return {?}
     */
    deleteSign(guid) {
        this.removeSignatureEvent.emit(guid);
    }
    /**
     * @return {?}
     */
    isDigital() {
        return SignatureType.DIGITAL.id === this.signatureType;
    }
    /**
     * @private
     * @param {?} sign
     * @return {?}
     */
    selectSignature(sign) {
        this._selectSignatureService.select(sign);
    }
    /**
     * @private
     * @param {?} guid
     * @return {?}
     */
    getSign(guid) {
        /** @type {?} */
        const sign = new DraggableSignature();
        sign.type = this.signatureType;
        sign.guid = guid;
        sign.position = new Position(0, 0);
        sign.pageNumber = this._navigateService.currentPage;
        return sign;
    }
    /**
     * @param {?} guid
     * @return {?}
     */
    select(guid) {
        if (this.signatureType === SignatureType.DIGITAL.id) {
            this.showDigitalInputs = this.digitalId !== guid;
            this.digitalId = this.digitalId === guid ? null : guid;
        }
        else {
            /** @type {?} */
            const sign = this.getSign(guid);
            this.selectSignature(sign);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    dragOver($event) {
        $event.preventDefault();
        $event.stopPropagation();
    }
    /**
     * @param {?} $event
     * @param {?} guid
     * @return {?}
     */
    dragLeave($event, guid) {
        this._dragSignatureService.sign = this.getSign(guid);
    }
    /**
     * @param {?} guid
     * @return {?}
     */
    selectDigital(guid) {
        if (!this.isActive(guid)) {
            return;
        }
        /** @type {?} */
        const sign = this.getSign(guid);
        sign.digitalProps = this.digitalProps;
        this.selectSignature(sign);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    parseDate(value) {
        return this._datePipe.transform(value, 'dd-MM-yyyy');
    }
    /**
     * @param {?} guid
     * @return {?}
     */
    isActive(guid) {
        return !this._signaturesHolderService.has(guid);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    dragStart($event) {
        $event.dataTransfer.setData('text', 'foo');
    }
    /**
     * @return {?}
     */
    empty() {
        return !this.loading && (!this.signatures || this.signatures.length === 0);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.showDigitalInputs) {
            this.showDigitalInputs = this.signatureType === SignatureType.DIGITAL.id;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    drop($event) {
        $event.preventDefault();
        $event.stopPropagation();
    }
}
SignatureListPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-signature-list-panel',
                template: "<div class=\"gd-signature-list-wrapper\">\r\n  <div class=\"gd-signature-list-scroll\" *ngIf=\"signatures\">\r\n    <div class=\"gd-signature-list\" *ngIf=\"signatures\">\r\n      <div class=\"gd-signature\" *ngFor=\"let signature of signatures\">\r\n        <div class=\"gd-signature-item\" [draggable]=\"isDigital() ? false : true\"\r\n             (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\r\n             (dragleave)=\"dragLeave($event, signature.guid)\" (drop)=\"drop($event)\">\r\n          <div class=\"gd-signature-thumbnail\" *ngIf=\"isDigital()\" (click)=\"select(signature.guid)\">\r\n            <fa-icon [icon]=\"['fa','fingerprint']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n          </div>\r\n          <div class=\"gd-signature-thumbnail\" *ngIf=\"signature.image\">\r\n            <img [ngClass]=\"'gd-signature-thumbnail-' + signatureType\"\r\n                 [attr.src]=\"getImage(signature.image) | safeResourceHtml\"\r\n                 alt=\"\" [draggable]=\"false\" (click)=\"select(signature.guid)\">\r\n          </div>\r\n          <div class=\"gd-signature-title\" [ngClass]=\"signatureType\" (click)=\"select(signature.guid)\">\r\n            <label class=\"gd-signature-name\" [style.color]=\"signature.fontColor\">\r\n              {{signature.text ? signature.text : signature.name}}</label>\r\n          </div>\r\n          <div class=\"gd-signature-trash-icon\">\r\n            <fa-icon [icon]=\"['fas','trash']\" [class]=\"'ng-fa-icon icon'\"\r\n                     (click)=\"deleteSign(signature.guid)\"></fa-icon>\r\n          </div>\r\n        </div>\r\n        <div class=\"gd-digital-inputs\" *ngIf=\"showDigitalInputs && digitalId === signature.guid\">\r\n          <div class=\"gd-digital-input-wrapper\">\r\n            <fa-icon [icon]=\"['fas','comment']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n            <input #reason (input)=\"digitalProps.reason = reason.value\" type=\"text\" placeholder=\"Reason\">\r\n          </div>\r\n          <div class=\"gd-digital-input-wrapper\" *ngIf=\"isPdf\">\r\n            <fa-icon [icon]=\"['fas','envelope']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n            <input #contact (input)=\"digitalProps.contact = contact.value\" type=\"text\" placeholder=\"Contact\">\r\n          </div>\r\n          <div class=\"gd-digital-input-wrapper\" *ngIf=\"isPdf\">\r\n            <fa-icon [icon]=\"['fas','map-marker-alt']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n            <input #address (input)=\"digitalProps.address = address.value\" type=\"text\" placeholder=\"Location\">\r\n          </div>\r\n          <div class=\"gd-digital-input-wrapper\">\r\n            <fa-icon [icon]=\"['fas','key']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n            <input #password (input)=\"digitalProps.signaturePassword = password.value\" type=\"password\"\r\n                   placeholder=\"Password\">\r\n          </div>\r\n          <div class=\"gd-digital-input-wrapper\">\r\n            <fa-icon [icon]=\"['fas','calendar']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n            <input type=\"date\" #date (input)=\"digitalProps.date=parseDate(date.value)\" placeholder=\"Date\">\r\n          </div>\r\n          <div class=\"gd-sign-digital\" [ngClass]=\"isActive(signature.guid) ? 'active' : ''\"\r\n               (click)=\"selectDigital(signature.guid)\">\r\n            <fa-icon [icon]=\"['fas','save']\"></fa-icon>\r\n            <span class=\"digital-apply\">Apply</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"gd-signature-empty-list\" *ngIf=\"empty()\">\r\n    <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n    <span class=\"gd-empty-list-text\">There is no entries yet</span>\r\n  </div>\r\n</div>\r\n",
                styles: [".gd-signature-list-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex:1;overflow:auto;height:100%}.gd-signature-list-scroll{display:block;overflow-x:hidden;overflow-y:auto!important;height:inherit}.gd-signature-item{width:100%;cursor:pointer;position:relative;min-height:68px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;background-color:rgba(255,255,255)}.gd-signature-item .icon{font-size:15px;color:#676767;cursor:pointer}.gd-signature-item .gd-signature-trash-icon{-webkit-box-flex:0;flex:0 0 70px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.gd-signature-item .gd-signature-name{max-width:130px;font-size:13px;color:rgba(0,0,0,.36);cursor:pointer;text-overflow:ellipsis;white-space:nowrap;display:block;overflow:hidden}.gd-signature-item .gd-signature-thumbnail{-webkit-box-flex:0;flex:0 0 70px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;width:auto}.gd-signature-item .gd-signature-thumbnail .icon{font-size:30px;padding:0;margin:0;opacity:.25}.gd-signature-item .gd-signature-title{-webkit-box-flex:1;flex:1;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start;padding-left:7px}.gd-signature-item .gd-signature-thumbnail-hand,.gd-signature-item .gd-signature-thumbnail-image,.gd-signature-item .gd-signature-thumbnail-text{max-width:70px;height:41px}.gd-signature-item .gd-signature-thumbnail-image{min-width:41px;max-width:70px}.gd-signature-item .gd-signature-thumbnail-barCode,.gd-signature-item .gd-signature-thumbnail-qrCode{max-width:70px;height:44px}.gd-signature-item .gd-signature-thumbnail-stamp{max-width:70px;height:48px}.gd-signature-item .gd-signature-title.text{padding-left:16px}.gd-signature-list{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:inherit;background-color:#e7e7e7}.gd-signature{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;background-color:rgba(255,255,255,.75);margin-bottom:2px}.gd-signature-empty-list{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;text-align:center;color:#acacac;-webkit-box-pack:center;justify-content:center;height:250px}.gd-signature-empty-list .icon{font-size:60px}.gd-signature-empty-list i{font-size:60px;padding:87px 97px 0}.gd-empty-list-text{padding:18px 38px 0;font-size:12px}.gd-digital-input-wrapper{margin:9px 8px 7px;display:-webkit-box;display:flex;border:5px #ddd}.gd-sign-digital{height:27px;background-color:#969696;margin:9px 8px 7px;display:-webkit-box;display:flex;color:#fff;font-size:13px;box-shadow:0 0 3px #ddd;cursor:pointer;padding-top:5px;padding-left:10px}.digital-apply{padding-left:10px}.gd-sign-digital.active{background-color:#25c2d4}.gd-digital-inputs input{width:100%;height:27px;padding-left:28px}.gd-digital-inputs .icon{position:absolute;font-size:12px;margin:7px 0 7px 7px;color:#ccc!important}@media (max-width:1037px){.gd-signature-item .gd-signature-name{font-size:13px}.gd-signature-item .icon{font-size:15px}.gd-signature-thumbnail-hand,.gd-signature-thumbnail-image,.gd-signature-thumbnail-text{margin:0}.gd-signature-thumbnail-image{width:44px;height:44px}.gd-signature-thumbnail-digital .icon{font-size:30px!important}.gd-digital-inputs .icon{font-size:13px}.gd-signature-list{padding:5px;height:inherit}}"]
            }] }
];
/** @nocollapse */
SignatureListPanelComponent.ctorParameters = () => [
    { type: NavigateService },
    { type: SelectSignatureService },
    { type: DragSignatureService },
    { type: DatePipe },
    { type: SignaturesHolderService }
];
SignatureListPanelComponent.propDecorators = {
    signatures: [{ type: Input }],
    icon: [{ type: Input }],
    signatureType: [{ type: Input }],
    isPdf: [{ type: Input }],
    loading: [{ type: Input }],
    removeSignatureEvent: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLWxpc3QtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9zaWduYXR1cmUtbGlzdC1wYW5lbC9zaWduYXR1cmUtbGlzdC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUMsV0FBVyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBYSxhQUFhLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDOUUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBUXJFLE1BQU0sT0FBTywyQkFBMkI7Ozs7Ozs7O0lBWXRDLFlBQW9CLGdCQUFpQyxFQUNqQyx1QkFBK0MsRUFDL0MscUJBQTJDLEVBQzNDLFNBQW1CLEVBQ25CLHdCQUFpRDtRQUpqRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBd0I7UUFDL0MsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFzQjtRQUMzQyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBeUI7UUFUM0QseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM1RCxzQkFBaUIsR0FBRyxLQUFLLENB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Ozs7SUFDM0IsK0RBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RpZ2l0YWxTaWduLCBEcmFnZ2FibGVTaWduYXR1cmUsIFBvc2l0aW9uLCBTaWduYXR1cmUsIFNpZ25hdHVyZVR5cGV9IGZyb20gXCIuLi9zaWduYXR1cmUtbW9kZWxzXCI7XHJcbmltcG9ydCB7TmF2aWdhdGVTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7U2VsZWN0U2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4uL3NlbGVjdC1zaWduYXR1cmUuc2VydmljZVwiO1xyXG5pbXBvcnQge0RyYWdTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi4vZHJhZy1zaWduYXR1cmUuc2VydmljZVwiO1xyXG5pbXBvcnQge0RhdGVQaXBlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7U2lnbmF0dXJlc0hvbGRlclNlcnZpY2V9IGZyb20gXCIuLi9zaWduYXR1cmVzLWhvbGRlci5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1zaWduYXR1cmUtbGlzdC1wYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZ25hdHVyZS1saXN0LXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWduYXR1cmUtbGlzdC1wYW5lbC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduYXR1cmVMaXN0UGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIHNpZ25hdHVyZXM6IFNpZ25hdHVyZVtdO1xyXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuICBASW5wdXQoKSBzaWduYXR1cmVUeXBlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaXNQZGY6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbG9hZGluZzogYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgcmVtb3ZlU2lnbmF0dXJlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBzaG93RGlnaXRhbElucHV0cyA9IGZhbHNlO1xyXG4gIGRpZ2l0YWxQcm9wcyA9IG5ldyBEaWdpdGFsU2lnbigpO1xyXG4gIGRpZ2l0YWxJZDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9zZWxlY3RTaWduYXR1cmVTZXJ2aWNlOiBTZWxlY3RTaWduYXR1cmVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2RyYWdTaWduYXR1cmVTZXJ2aWNlOiBEcmFnU2lnbmF0dXJlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9kYXRlUGlwZTogRGF0ZVBpcGUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2lnbmF0dXJlc0hvbGRlclNlcnZpY2U6IFNpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmRpZ2l0YWxQcm9wcy5kYXRlID0gdGhpcy5fZGF0ZVBpcGUudHJhbnNmb3JtKG5ldyBEYXRlKCksICdkZC1NTS15eXl5Jyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGdldEltYWdlKGRhdGE6IHN0cmluZykge1xyXG4gICAgY29uc3QgZGF0YUltYWdlUG5nQmFzZTY0ID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnO1xyXG4gICAgcmV0dXJuIGRhdGFJbWFnZVBuZ0Jhc2U2NCArIGRhdGE7XHJcbiAgfVxyXG5cclxuICBkZWxldGVTaWduKGd1aWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5yZW1vdmVTaWduYXR1cmVFdmVudC5lbWl0KGd1aWQpO1xyXG4gIH1cclxuXHJcbiAgaXNEaWdpdGFsKCkge1xyXG4gICAgcmV0dXJuIFNpZ25hdHVyZVR5cGUuRElHSVRBTC5pZCA9PT0gdGhpcy5zaWduYXR1cmVUeXBlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3RTaWduYXR1cmUoc2lnbjogRHJhZ2dhYmxlU2lnbmF0dXJlKSB7XHJcbiAgICB0aGlzLl9zZWxlY3RTaWduYXR1cmVTZXJ2aWNlLnNlbGVjdChzaWduKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U2lnbihndWlkOiBzdHJpbmcpOiBEcmFnZ2FibGVTaWduYXR1cmUge1xyXG4gICAgY29uc3Qgc2lnbiA9IG5ldyBEcmFnZ2FibGVTaWduYXR1cmUoKTtcclxuICAgIHNpZ24udHlwZSA9IHRoaXMuc2lnbmF0dXJlVHlwZTtcclxuICAgIHNpZ24uZ3VpZCA9IGd1aWQ7XHJcbiAgICBzaWduLnBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKDAsIDApO1xyXG4gICAgc2lnbi5wYWdlTnVtYmVyID0gdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlO1xyXG4gICAgcmV0dXJuIHNpZ247XHJcbiAgfVxyXG5cclxuICBzZWxlY3QoZ3VpZDogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5zaWduYXR1cmVUeXBlID09PSBTaWduYXR1cmVUeXBlLkRJR0lUQUwuaWQpIHtcclxuICAgICAgdGhpcy5zaG93RGlnaXRhbElucHV0cyA9IHRoaXMuZGlnaXRhbElkICE9PSBndWlkO1xyXG4gICAgICB0aGlzLmRpZ2l0YWxJZCA9IHRoaXMuZGlnaXRhbElkID09PSBndWlkID8gbnVsbCA6IGd1aWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBzaWduID0gdGhpcy5nZXRTaWduKGd1aWQpO1xyXG4gICAgICB0aGlzLnNlbGVjdFNpZ25hdHVyZShzaWduKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYWdPdmVyKCRldmVudDogRHJhZ0V2ZW50KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIGRyYWdMZWF2ZSgkZXZlbnQ6IERyYWdFdmVudCwgZ3VpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9kcmFnU2lnbmF0dXJlU2VydmljZS5zaWduID0gdGhpcy5nZXRTaWduKGd1aWQpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0RGlnaXRhbChndWlkOiBzdHJpbmcpIHtcclxuICAgIGlmICghdGhpcy5pc0FjdGl2ZShndWlkKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaWduID0gdGhpcy5nZXRTaWduKGd1aWQpO1xyXG4gICAgc2lnbi5kaWdpdGFsUHJvcHMgPSB0aGlzLmRpZ2l0YWxQcm9wcztcclxuICAgIHRoaXMuc2VsZWN0U2lnbmF0dXJlKHNpZ24pO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VEYXRlKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0ZVBpcGUudHJhbnNmb3JtKHZhbHVlLCAnZGQtTU0teXl5eScpO1xyXG4gIH1cclxuXHJcbiAgaXNBY3RpdmUoZ3VpZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLmhhcyhndWlkKTtcclxuICB9XHJcblxyXG4gIGRyYWdTdGFydCgkZXZlbnQ6IERyYWdFdmVudCkgeyAvLyBmb3IgZmZcclxuICAgICRldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdmb28nKTtcclxuICB9XHJcblxyXG4gIGVtcHR5KCkge1xyXG4gICAgcmV0dXJuICF0aGlzLmxvYWRpbmcgJiYgKCF0aGlzLnNpZ25hdHVyZXMgfHwgdGhpcy5zaWduYXR1cmVzLmxlbmd0aCA9PT0gMCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zaG93RGlnaXRhbElucHV0cykge1xyXG4gICAgICB0aGlzLnNob3dEaWdpdGFsSW5wdXRzID0gdGhpcy5zaWduYXR1cmVUeXBlID09PSBTaWduYXR1cmVUeXBlLkRJR0lUQUwuaWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcm9wKCRldmVudDogRHJhZ0V2ZW50KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcbn1cclxuIl19