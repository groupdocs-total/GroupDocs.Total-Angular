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
}
SignatureListPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-signature-list-panel',
                template: "<div class=\"gd-signature-list-wrapper\">\n  <div class=\"gd-signature-list-scroll\" *ngIf=\"signatures\">\n    <div class=\"gd-signature-list\" *ngIf=\"signatures\">\n      <div class=\"gd-signature\" *ngFor=\"let signature of signatures\">\n        <div class=\"gd-signature-item\" [draggable]=\"isDigital() ? false : true\"\n             (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\n             (dragleave)=\"dragLeave($event, signature.guid)\">\n          <div class=\"gd-signature-thumbnail\" *ngIf=\"isDigital()\" (click)=\"select(signature.guid)\">\n            <fa-icon [icon]=\"['fa','fingerprint']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n          </div>\n          <div class=\"gd-signature-thumbnail\" *ngIf=\"signature.image\">\n            <img [ngClass]=\"'gd-signature-thumbnail-' + signatureType\"\n                 [attr.src]=\"getImage(signature.image) | safeResourceHtml\"\n                 alt=\"\" [draggable]=\"false\" (click)=\"select(signature.guid)\">\n          </div>\n          <div class=\"gd-signature-title\" [ngClass]=\"signatureType\" (click)=\"select(signature.guid)\">\n            <label class=\"gd-signature-name\" [style.color]=\"signature.fontColor\">\n              {{signature.text ? signature.text : signature.name}}</label>\n          </div>\n          <div class=\"gd-signature-trash-icon\">\n            <fa-icon [icon]=\"['fas','trash']\" [class]=\"'ng-fa-icon icon'\"\n                     (click)=\"deleteSign(signature.guid)\"></fa-icon>\n          </div>\n        </div>\n        <div class=\"gd-digital-inputs\" *ngIf=\"showDigitalInputs && digitalId === signature.guid\">\n          <div class=\"gd-digital-input-wrapper\">\n            <fa-icon [icon]=\"['fas','comment']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input #reason (input)=\"digitalProps.reason = reason.value\" type=\"text\" placeholder=\"Reason\">\n          </div>\n          <div class=\"gd-digital-input-wrapper\" *ngIf=\"isPdf\">\n            <fa-icon [icon]=\"['fas','envelope']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input #contact (input)=\"digitalProps.contact = contact.value\" type=\"text\" placeholder=\"Contact\">\n          </div>\n          <div class=\"gd-digital-input-wrapper\" *ngIf=\"isPdf\">\n            <fa-icon [icon]=\"['fas','map-marker-alt']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input #address (input)=\"digitalProps.address = address.value\" type=\"text\" placeholder=\"Location\">\n          </div>\n          <div class=\"gd-digital-input-wrapper\">\n            <fa-icon [icon]=\"['fas','key']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input #password (input)=\"digitalProps.signaturePassword = password.value\" type=\"password\"\n                   placeholder=\"Password\">\n          </div>\n          <div class=\"gd-digital-input-wrapper\">\n            <fa-icon [icon]=\"['fas','calendar']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input type=\"date\" #date (input)=\"digitalProps.date=parseDate(date.value)\" placeholder=\"Date\">\n          </div>\n          <div class=\"gd-sign-digital\" [ngClass]=\"isActive(signature.guid) ? 'active' : ''\"\n               (click)=\"selectDigital(signature.guid)\">\n            <fa-icon [icon]=\"['fas','save']\"></fa-icon>\n            <span class=\"digital-apply\">Apply</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"gd-signature-empty-list\" *ngIf=\"empty()\">\n    <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    <span class=\"gd-empty-list-text\">There is no entries yet</span>\n  </div>\n</div>\n",
                styles: [".gd-signature-list-wrapper{display:flex;flex-direction:column;flex:1;overflow:auto;height:100%}.gd-signature-list-scroll{display:block;overflow-x:hidden;overflow-y:auto!important}.gd-signature-item{width:100%;cursor:pointer;position:relative;min-height:68px;display:flex;flex-direction:row;background-color:rgba(255,255,255)}.gd-signature-item .icon{font-size:15px;color:#676767;cursor:pointer}.gd-signature-item .gd-signature-trash-icon{flex:0 0 70px;display:flex;align-items:center;justify-content:center}.gd-signature-item .gd-signature-name{max-width:130px;font-size:13px;color:rgba(0,0,0,.36);cursor:pointer;text-overflow:ellipsis;white-space:nowrap;display:block;overflow:hidden}.gd-signature-item .gd-signature-thumbnail{flex:0 0 70px;display:flex;align-items:center;justify-content:center;width:auto}.gd-signature-item .gd-signature-thumbnail .icon{font-size:30px;padding:0;margin:0;opacity:.25}.gd-signature-item .gd-signature-title{flex:1;display:flex;align-items:center;justify-content:flex-start;padding-left:7px}.gd-signature-item .gd-signature-thumbnail-hand,.gd-signature-item .gd-signature-thumbnail-image,.gd-signature-item .gd-signature-thumbnail-text{max-width:70px;height:41px}.gd-signature-item .gd-signature-thumbnail-image{min-width:41px;max-width:70px}.gd-signature-item .gd-signature-thumbnail-barCode,.gd-signature-item .gd-signature-thumbnail-qrCode{max-width:70px;height:44px}.gd-signature-item .gd-signature-thumbnail-stamp{max-width:70px;height:48px}.gd-signature-item .gd-signature-title.text{padding-left:16px}.gd-signature-list{display:flex;flex-direction:column;width:inherit;background-color:#e7e7e7}.gd-signature{display:flex;flex-direction:column;width:100%;background-color:rgba(255,255,255,.75);margin-bottom:2px}.gd-signature-empty-list{display:flex;flex-direction:column;text-align:center;color:#acacac;justify-content:center;width:350px;height:250px}.gd-signature-empty-list .icon{font-size:60px}.gd-signature-empty-list i{font-size:60px;padding:87px 97px 0}.gd-empty-list-text{padding:18px 38px 0;font-size:12px}.gd-digital-input-wrapper{margin:9px 8px 7px;display:flex;border:5px #ddd}.gd-sign-digital{height:27px;background-color:#969696;margin:9px 8px 7px;display:flex;color:#fff;font-size:13px;box-shadow:0 0 3px #ddd;cursor:pointer;padding-top:5px;padding-left:10px}.digital-apply{padding-left:10px}.gd-sign-digital.active{background-color:#25c2d4}.gd-digital-inputs input{width:100%;height:27px;padding-left:28px}.gd-digital-inputs .icon{position:absolute;font-size:12px;margin:7px 0 7px 7px;color:#ccc!important}@media (max-width:1037px){.gd-signature-item .gd-signature-name{font-size:13px}.gd-signature-item .icon{font-size:15px}.gd-signature-thumbnail-hand,.gd-signature-thumbnail-image,.gd-signature-thumbnail-text{margin:0}.gd-signature-thumbnail-image{width:44px;height:44px}.gd-signature-thumbnail-digital .icon{font-size:30px!important}.gd-digital-inputs .icon{font-size:13px}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLWxpc3QtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9zaWduYXR1cmUtbGlzdC1wYW5lbC9zaWduYXR1cmUtbGlzdC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUMsV0FBVyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBYSxhQUFhLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDOUUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBUXJFLE1BQU0sT0FBTywyQkFBMkI7Ozs7Ozs7O0lBWXRDLFlBQW9CLGdCQUFpQyxFQUNqQyx1QkFBK0MsRUFDL0MscUJBQTJDLEVBQzNDLFNBQW1CLEVBQ25CLHdCQUFpRDtRQUpqRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBd0I7UUFDL0MsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFzQjtRQUMzQyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBeUI7UUFUM0QseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM1RCxzQkFBaUIsR0FBRyxLQUFLLENB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Q0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFpQjtRQUN6QixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsS0FBSyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztTQUMxRTtJQUNILENBQUM7OztZQXRHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsaW9IQUFvRDs7YUFFckQ7Ozs7WUFYTyxlQUFlO1lBQ2Ysc0JBQXNCO1lBQ3RCLG9CQUFvQjtZQUNwQixRQUFRO1lBQ1IsdUJBQXVCOzs7eUJBVTVCLEtBQUs7bUJBQ0wsS0FBSzs0QkFDTCxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSzttQ0FDTCxNQUFNOzs7O0lBTFAsaURBQWlDOztJQUNqQywyQ0FBc0I7O0lBQ3RCLG9EQUErQjs7SUFDL0IsNENBQXdCOztJQUN4Qiw4Q0FBMEI7O0lBQzFCLDJEQUE0RDs7SUFDNUQsd0RBQTBCOztJQUMxQixtREFBaUM7O0lBQ2pDLGdEQUFrQjs7Ozs7SUFFTix1REFBeUM7Ozs7O0lBQ3pDLDhEQUF1RDs7Ozs7SUFDdkQsNERBQW1EOzs7OztJQUNuRCxnREFBMkI7Ozs7O0lBQzNCLCtEQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlnaXRhbFNpZ24sIERyYWdnYWJsZVNpZ25hdHVyZSwgUG9zaXRpb24sIFNpZ25hdHVyZSwgU2lnbmF0dXJlVHlwZX0gZnJvbSBcIi4uL3NpZ25hdHVyZS1tb2RlbHNcIjtcbmltcG9ydCB7TmF2aWdhdGVTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge1NlbGVjdFNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuLi9zZWxlY3Qtc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7RHJhZ1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuLi9kcmFnLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0RhdGVQaXBlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge1NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlfSBmcm9tIFwiLi4vc2lnbmF0dXJlcy1ob2xkZXIuc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXNpZ25hdHVyZS1saXN0LXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZ25hdHVyZS1saXN0LXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lnbmF0dXJlLWxpc3QtcGFuZWwuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWduYXR1cmVMaXN0UGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgc2lnbmF0dXJlczogU2lnbmF0dXJlW107XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgc2lnbmF0dXJlVHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBpc1BkZjogYm9vbGVhbjtcbiAgQElucHV0KCkgbG9hZGluZzogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHJlbW92ZVNpZ25hdHVyZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIHNob3dEaWdpdGFsSW5wdXRzID0gZmFsc2U7XG4gIGRpZ2l0YWxQcm9wcyA9IG5ldyBEaWdpdGFsU2lnbigpO1xuICBkaWdpdGFsSWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2VsZWN0U2lnbmF0dXJlU2VydmljZTogU2VsZWN0U2lnbmF0dXJlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZHJhZ1NpZ25hdHVyZVNlcnZpY2U6IERyYWdTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9kYXRlUGlwZTogRGF0ZVBpcGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlOiBTaWduYXR1cmVzSG9sZGVyU2VydmljZSkge1xuICAgIHRoaXMuZGlnaXRhbFByb3BzLmRhdGUgPSB0aGlzLl9kYXRlUGlwZS50cmFuc2Zvcm0obmV3IERhdGUoKSwgJ2RkLU1NLXl5eXknKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZ2V0SW1hZ2UoZGF0YTogc3RyaW5nKSB7XG4gICAgY29uc3QgZGF0YUltYWdlUG5nQmFzZTY0ID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnO1xuICAgIHJldHVybiBkYXRhSW1hZ2VQbmdCYXNlNjQgKyBkYXRhO1xuICB9XG5cbiAgZGVsZXRlU2lnbihndWlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlbW92ZVNpZ25hdHVyZUV2ZW50LmVtaXQoZ3VpZCk7XG4gIH1cblxuICBpc0RpZ2l0YWwoKSB7XG4gICAgcmV0dXJuIFNpZ25hdHVyZVR5cGUuRElHSVRBTC5pZCA9PT0gdGhpcy5zaWduYXR1cmVUeXBlO1xuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RTaWduYXR1cmUoc2lnbjogRHJhZ2dhYmxlU2lnbmF0dXJlKSB7XG4gICAgdGhpcy5fc2VsZWN0U2lnbmF0dXJlU2VydmljZS5zZWxlY3Qoc2lnbik7XG4gIH1cblxuICBwcml2YXRlIGdldFNpZ24oZ3VpZDogc3RyaW5nKTogRHJhZ2dhYmxlU2lnbmF0dXJlIHtcbiAgICBjb25zdCBzaWduID0gbmV3IERyYWdnYWJsZVNpZ25hdHVyZSgpO1xuICAgIHNpZ24udHlwZSA9IHRoaXMuc2lnbmF0dXJlVHlwZTtcbiAgICBzaWduLmd1aWQgPSBndWlkO1xuICAgIHNpZ24ucG9zaXRpb24gPSBuZXcgUG9zaXRpb24oMCwgMCk7XG4gICAgc2lnbi5wYWdlTnVtYmVyID0gdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlO1xuICAgIHJldHVybiBzaWduO1xuICB9XG5cbiAgc2VsZWN0KGd1aWQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnNpZ25hdHVyZVR5cGUgPT09IFNpZ25hdHVyZVR5cGUuRElHSVRBTC5pZCkge1xuICAgICAgdGhpcy5zaG93RGlnaXRhbElucHV0cyA9IHRoaXMuZGlnaXRhbElkICE9PSBndWlkO1xuICAgICAgdGhpcy5kaWdpdGFsSWQgPSB0aGlzLmRpZ2l0YWxJZCA9PT0gZ3VpZCA/IG51bGwgOiBndWlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzaWduID0gdGhpcy5nZXRTaWduKGd1aWQpO1xuICAgICAgdGhpcy5zZWxlY3RTaWduYXR1cmUoc2lnbik7XG4gICAgfVxuICB9XG5cbiAgZHJhZ092ZXIoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBkcmFnTGVhdmUoJGV2ZW50OiBEcmFnRXZlbnQsIGd1aWQ6IHN0cmluZykge1xuICAgIHRoaXMuX2RyYWdTaWduYXR1cmVTZXJ2aWNlLnNpZ24gPSB0aGlzLmdldFNpZ24oZ3VpZCk7XG4gIH1cblxuICBzZWxlY3REaWdpdGFsKGd1aWQ6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZShndWlkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzaWduID0gdGhpcy5nZXRTaWduKGd1aWQpO1xuICAgIHNpZ24uZGlnaXRhbFByb3BzID0gdGhpcy5kaWdpdGFsUHJvcHM7XG4gICAgdGhpcy5zZWxlY3RTaWduYXR1cmUoc2lnbik7XG4gIH1cblxuICBwYXJzZURhdGUodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZVBpcGUudHJhbnNmb3JtKHZhbHVlLCAnZGQtTU0teXl5eScpO1xuICB9XG5cbiAgaXNBY3RpdmUoZ3VpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuICF0aGlzLl9zaWduYXR1cmVzSG9sZGVyU2VydmljZS5oYXMoZ3VpZCk7XG4gIH1cblxuICBkcmFnU3RhcnQoJGV2ZW50OiBEcmFnRXZlbnQpIHsgLy8gZm9yIGZmXG4gICAgJGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ2ZvbycpO1xuICB9XG5cbiAgZW1wdHkoKSB7XG4gICAgcmV0dXJuICF0aGlzLmxvYWRpbmcgJiYgKCF0aGlzLnNpZ25hdHVyZXMgfHwgdGhpcy5zaWduYXR1cmVzLmxlbmd0aCA9PT0gMCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvd0RpZ2l0YWxJbnB1dHMpIHtcbiAgICAgIHRoaXMuc2hvd0RpZ2l0YWxJbnB1dHMgPSB0aGlzLnNpZ25hdHVyZVR5cGUgPT09IFNpZ25hdHVyZVR5cGUuRElHSVRBTC5pZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==