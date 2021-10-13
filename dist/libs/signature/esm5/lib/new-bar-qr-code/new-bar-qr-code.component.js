/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { SignatureService } from "../signature.service";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
var NewBarQrCodeComponent = /** @class */ (function () {
    function NewBarQrCodeComponent(_signatureService, _elementRef) {
        var _this = this;
        this._signatureService = _signatureService;
        this._elementRef = _elementRef;
        this.closePanel = new EventEmitter();
        this.subject = new Subject();
        this.subject.pipe(debounceTime(500)).subscribe((/**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            _this.saveCode(text, true);
        }));
    }
    /**
     * @private
     * @param {?} text
     * @param {?} temp
     * @return {?}
     */
    NewBarQrCodeComponent.prototype.saveCode = /**
     * @private
     * @param {?} text
     * @param {?} temp
     * @return {?}
     */
    function (text, temp) {
        var _this = this;
        if (text) {
            this._signatureService.getCode(text, temp, this.type).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.encodedImage = data.encodedImage;
                if (!temp) {
                    _this.closePanel.emit(true);
                }
            }));
        }
        else {
            this.clean();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NewBarQrCodeComponent.prototype.clean = /**
     * @private
     * @return {?}
     */
    function () {
        this.encodedImage = null;
    };
    /**
     * @return {?}
     */
    NewBarQrCodeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.clean();
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var element = _this._elementRef.nativeElement.querySelector("#text-input");
            element.focus();
        }), 100);
    };
    /**
     * @param {?} text
     * @return {?}
     */
    NewBarQrCodeComponent.prototype.addSign = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this.saveCode(text, false);
    };
    /**
     * @param {?} text
     * @return {?}
     */
    NewBarQrCodeComponent.prototype.saveTemp = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this.subject.next(text);
    };
    /**
     * @return {?}
     */
    NewBarQrCodeComponent.prototype.getData = /**
     * @return {?}
     */
    function () {
        return 'data:image/png;base64,' + this.encodedImage;
    };
    NewBarQrCodeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-new-bar-qr-code',
                    template: "<div class=\"gd-qr-container\">\r\n  <div class=\"gd-qr-preview-container\">\r\n    <img class=\"gd-signature-thumbnail-image\" [attr.src]=\"getData()\" alt *ngIf=\"encodedImage\">\r\n    <div class=\"gd-empty-code\" *ngIf=\"!encodedImage\">\r\n      <fa-icon [icon]=\"['fa',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n    </div>\r\n  </div>\r\n  <div class=\"new-signature-input-group\">\r\n    <input type=\"text\" class=\"gd-qr-property\" #text (keyup)=\"saveTemp(text.value)\" (keyup.enter)=\"addSign(text.value)\"\r\n           placeholder=\"{{name}}\" id=\"text-input\"/>\r\n    <div class=\"gd-add-optical\" [ngClass]=\"text.value ? 'active' : 'inactive'\" (click)=\"addSign(text.value)\">\r\n      <fa-icon [icon]=\"['fa','check']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".gd-sign-digital.active{background-color:#3787f5}.gd-sign-digital{height:27px;background-color:#969696;margin:9px 8px 7px;text-align:center;color:#fff;font-size:13px;box-shadow:0 0 3px #ddd;cursor:pointer;padding-top:5px}.gd-qr-container{font-family:\"Open Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;background-color:#e7e7e7}.gd-qr-container input:focus{border:2px solid #00c4d7;-webkit-transition:border-color .3s linear;transition:border-color .3s linear}.gd-qr-preview-container{text-align:center;background-color:#fff;margin-bottom:1px;height:350px}.gd-qr-preview-container .gd-empty-code{color:#ccc;font-size:60px;width:350px;height:350px;-webkit-box-pack:center;justify-content:center;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.gd-qr-preview-container .gd-signature-thumbnail-image{min-width:41px;width:100%;height:100%;margin:0}.new-signature-input-group{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;height:70px;background-color:#fff;-webkit-box-pack:center;justify-content:center}.gd-qr-property{font-size:12px;width:80%;border:2px solid #ddd;padding:5px;outline:0;color:#3a4e5b}.gd-add-optical{width:32px;height:29px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;background-color:#3787f5;cursor:pointer}.gd-add-optical .icon{color:#fff;line-height:28px}.gd-add-optical.active{background-color:#25c2d4}.gd-add-optical.inactive{background-color:#646464}.gd-add-optical:hover{box-shadow:transparent 0 0 3px}@media (max-width:1037px){.gd-qr-container{margin:0 13px 0 12px}}"]
                }] }
    ];
    /** @nocollapse */
    NewBarQrCodeComponent.ctorParameters = function () { return [
        { type: SignatureService },
        { type: ElementRef }
    ]; };
    NewBarQrCodeComponent.propDecorators = {
        type: [{ type: Input }],
        icon: [{ type: Input }],
        name: [{ type: Input }],
        closePanel: [{ type: Output }]
    };
    return NewBarQrCodeComponent;
}());
export { NewBarQrCodeComponent };
if (false) {
    /** @type {?} */
    NewBarQrCodeComponent.prototype.type;
    /** @type {?} */
    NewBarQrCodeComponent.prototype.icon;
    /** @type {?} */
    NewBarQrCodeComponent.prototype.name;
    /** @type {?} */
    NewBarQrCodeComponent.prototype.closePanel;
    /** @type {?} */
    NewBarQrCodeComponent.prototype.encodedImage;
    /**
     * @type {?}
     * @private
     */
    NewBarQrCodeComponent.prototype.subject;
    /**
     * @type {?}
     * @private
     */
    NewBarQrCodeComponent.prototype._signatureService;
    /**
     * @type {?}
     * @private
     */
    NewBarQrCodeComponent.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWJhci1xci1jb2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvbmV3LWJhci1xci1jb2RlL25ldy1iYXItcXItY29kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXRELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTVDO0lBY0UsK0JBQW9CLGlCQUFtQyxFQUNuQyxXQUF1QjtRQUQzQyxpQkFPQztRQVBtQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBTmpDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRzNDLFlBQU8sR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUkvQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDZixZQUFZLENBQUMsR0FBRyxDQUFDLENBQ2xCLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsSUFBSTtZQUNkLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVPLHdDQUFROzs7Ozs7SUFBaEIsVUFBaUIsSUFBWSxFQUFFLElBQWE7UUFBNUMsaUJBV0M7UUFWQyxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsSUFBc0I7Z0JBQ3JGLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDdEMsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDVCxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDNUI7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7Ozs7O0lBRU8scUNBQUs7Ozs7SUFBYjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLFVBQVU7OztRQUFDOztnQkFDSCxPQUFPLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztZQUMzRSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEIsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7Ozs7SUFFRCx1Q0FBTzs7OztJQUFQLFVBQVEsSUFBWTtRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELHdDQUFROzs7O0lBQVIsVUFBUyxJQUFZO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCx1Q0FBTzs7O0lBQVA7UUFDRSxPQUFPLHdCQUF3QixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDdEQsQ0FBQzs7Z0JBMURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5Qix5MEJBQStDOztpQkFFaEQ7Ozs7Z0JBVE8sZ0JBQWdCO2dCQURMLFVBQVU7Ozt1QkFZMUIsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsTUFBTTs7SUFrRFQsNEJBQUM7Q0FBQSxBQTNERCxJQTJEQztTQXREWSxxQkFBcUI7OztJQUNoQyxxQ0FBc0I7O0lBQ3RCLHFDQUFzQjs7SUFDdEIscUNBQXNCOztJQUN0QiwyQ0FBbUQ7O0lBQ25ELDZDQUFxQjs7Ozs7SUFFckIsd0NBQWlEOzs7OztJQUVyQyxrREFBMkM7Ozs7O0lBQzNDLDRDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7U2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4uL3NpZ25hdHVyZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7T3B0aWNhbENvZGVNb2RlbH0gZnJvbSBcIi4uL3NpZ25hdHVyZS1tb2RlbHNcIjtcclxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQge2RlYm91bmNlVGltZX0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLW5ldy1iYXItcXItY29kZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25ldy1iYXItcXItY29kZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmV3LWJhci1xci1jb2RlLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5ld0JhclFyQ29kZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIGNsb3NlUGFuZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgZW5jb2RlZEltYWdlOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgc3ViamVjdDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2lnbmF0dXJlU2VydmljZTogU2lnbmF0dXJlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLnN1YmplY3QucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKDUwMClcclxuICAgICkuc3Vic2NyaWJlKHRleHQgPT4ge1xyXG4gICAgICB0aGlzLnNhdmVDb2RlKHRleHQsIHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNhdmVDb2RlKHRleHQ6IHN0cmluZywgdGVtcDogYm9vbGVhbikge1xyXG4gICAgaWYgKHRleHQpIHtcclxuICAgICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS5nZXRDb2RlKHRleHQsIHRlbXAsIHRoaXMudHlwZSkuc3Vic2NyaWJlKChkYXRhOiBPcHRpY2FsQ29kZU1vZGVsKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbmNvZGVkSW1hZ2UgPSBkYXRhLmVuY29kZWRJbWFnZTtcclxuICAgICAgICBpZiAoIXRlbXApIHtcclxuICAgICAgICAgIHRoaXMuY2xvc2VQYW5lbC5lbWl0KHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNsZWFuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFuKCkge1xyXG4gICAgdGhpcy5lbmNvZGVkSW1hZ2UgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNsZWFuKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3RleHQtaW5wdXRcIik7XHJcbiAgICAgIGVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG5cclxuICBhZGRTaWduKHRleHQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5zYXZlQ29kZSh0ZXh0LCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBzYXZlVGVtcCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc3ViamVjdC5uZXh0KHRleHQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YSgpIHtcclxuICAgIHJldHVybiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyB0aGlzLmVuY29kZWRJbWFnZTtcclxuICB9XHJcbn1cclxuIl19