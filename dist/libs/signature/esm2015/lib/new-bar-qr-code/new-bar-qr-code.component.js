/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { SignatureService } from "../signature.service";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
export class NewBarQrCodeComponent {
    /**
     * @param {?} _signatureService
     * @param {?} _elementRef
     */
    constructor(_signatureService, _elementRef) {
        this._signatureService = _signatureService;
        this._elementRef = _elementRef;
        this.closePanel = new EventEmitter();
        this.subject = new Subject();
        this.subject.pipe(debounceTime(500)).subscribe((/**
         * @param {?} text
         * @return {?}
         */
        text => {
            this.saveCode(text, true);
        }));
    }
    /**
     * @private
     * @param {?} text
     * @param {?} temp
     * @return {?}
     */
    saveCode(text, temp) {
        if (text) {
            this._signatureService.getCode(text, temp, this.type).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.encodedImage = data.encodedImage;
                if (!temp) {
                    this.closePanel.emit(true);
                }
            }));
        }
        else {
            this.clean();
        }
    }
    /**
     * @private
     * @return {?}
     */
    clean() {
        this.encodedImage = null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.clean();
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const element = this._elementRef.nativeElement.querySelector("#text-input");
            element.focus();
        }), 100);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    addSign(text) {
        this.saveCode(text, false);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    saveTemp(text) {
        this.subject.next(text);
    }
    /**
     * @return {?}
     */
    getData() {
        return 'data:image/png;base64,' + this.encodedImage;
    }
}
NewBarQrCodeComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-new-bar-qr-code',
                template: "<div class=\"gd-qr-container\">\r\n  <div class=\"gd-qr-preview-container\">\r\n    <img class=\"gd-signature-thumbnail-image\" [attr.src]=\"getData()\" alt *ngIf=\"encodedImage\">\r\n    <div class=\"gd-empty-code\" *ngIf=\"!encodedImage\">\r\n      <fa-icon [icon]=\"['fa',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n    </div>\r\n  </div>\r\n  <div class=\"new-signature-input-group\">\r\n    <input type=\"text\" class=\"gd-qr-property\" #text (keyup)=\"saveTemp(text.value)\" (keyup.enter)=\"addSign(text.value)\"\r\n           placeholder=\"{{name}}\" id=\"text-input\"/>\r\n    <div class=\"gd-add-optical\" [ngClass]=\"text.value ? 'active' : 'inactive'\" (click)=\"addSign(text.value)\">\r\n      <fa-icon [icon]=\"['fa','check']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".gd-sign-digital.active{background-color:#3787f5}.gd-sign-digital{height:27px;background-color:#969696;margin:9px 8px 7px;text-align:center;color:#fff;font-size:13px;box-shadow:0 0 3px #ddd;cursor:pointer;padding-top:5px}.gd-qr-container{font-family:\"Open Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;background-color:#e7e7e7}.gd-qr-container input:focus{border:2px solid #00c4d7;-webkit-transition:border-color .3s linear;transition:border-color .3s linear}.gd-qr-preview-container{text-align:center;background-color:#fff;margin-bottom:1px;height:350px}.gd-qr-preview-container .gd-empty-code{color:#ccc;font-size:60px;width:350px;height:350px;-webkit-box-pack:center;justify-content:center;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.gd-qr-preview-container .gd-signature-thumbnail-image{min-width:41px;width:100%;height:100%;margin:0}.new-signature-input-group{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;height:70px;background-color:#fff;-webkit-box-pack:center;justify-content:center}.gd-qr-property{font-size:12px;width:80%;border:2px solid #ddd;padding:5px;outline:0;color:#3a4e5b}.gd-add-optical{width:32px;height:29px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;background-color:#3787f5;cursor:pointer}.gd-add-optical .icon{color:#fff;line-height:28px}.gd-add-optical.active{background-color:#25c2d4}.gd-add-optical.inactive{background-color:#646464}.gd-add-optical:hover{box-shadow:transparent 0 0 3px}@media (max-width:1037px){.gd-qr-container{margin:0 13px 0 12px}}"]
            }] }
];
/** @nocollapse */
NewBarQrCodeComponent.ctorParameters = () => [
    { type: SignatureService },
    { type: ElementRef }
];
NewBarQrCodeComponent.propDecorators = {
    type: [{ type: Input }],
    icon: [{ type: Input }],
    name: [{ type: Input }],
    closePanel: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWJhci1xci1jb2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvbmV3LWJhci1xci1jb2RlL25ldy1iYXItcXItY29kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXRELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBTzVDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBU2hDLFlBQW9CLGlCQUFtQyxFQUNuQyxXQUF1QjtRQUR2QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBTmpDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRzNDLFlBQU8sR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUkvQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDZixZQUFZLENBQUMsR0FBRyxDQUFDLENBQ2xCLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVPLFFBQVEsQ0FBQyxJQUFZLEVBQUUsSUFBYTtRQUMxQyxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLENBQUMsSUFBc0IsRUFBRSxFQUFFO2dCQUN6RixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzVCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs7OztJQUVPLEtBQUs7UUFDWCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLFVBQVU7OztRQUFDLEdBQUcsRUFBRTs7a0JBQ1IsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7WUFDM0UsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xCLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQVk7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsSUFBWTtRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsT0FBTztRQUNMLE9BQU8sd0JBQXdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN0RCxDQUFDOzs7WUExREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLHkwQkFBK0M7O2FBRWhEOzs7O1lBVE8sZ0JBQWdCO1lBREwsVUFBVTs7O21CQVkxQixLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSzt5QkFDTCxNQUFNOzs7O0lBSFAscUNBQXNCOztJQUN0QixxQ0FBc0I7O0lBQ3RCLHFDQUFzQjs7SUFDdEIsMkNBQW1EOztJQUNuRCw2Q0FBcUI7Ozs7O0lBRXJCLHdDQUFpRDs7Ozs7SUFFckMsa0RBQTJDOzs7OztJQUMzQyw0Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuLi9zaWduYXR1cmUuc2VydmljZVwiO1xyXG5pbXBvcnQge09wdGljYWxDb2RlTW9kZWx9IGZyb20gXCIuLi9zaWduYXR1cmUtbW9kZWxzXCI7XHJcbmltcG9ydCB7U3ViamVjdH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtkZWJvdW5jZVRpbWV9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1uZXctYmFyLXFyLWNvZGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uZXctYmFyLXFyLWNvZGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25ldy1iYXItcXItY29kZS5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXdCYXJRckNvZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBjbG9zZVBhbmVsID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIGVuY29kZWRJbWFnZTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIHN1YmplY3Q6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NpZ25hdHVyZVNlcnZpY2U6IFNpZ25hdHVyZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5zdWJqZWN0LnBpcGUoXHJcbiAgICAgIGRlYm91bmNlVGltZSg1MDApXHJcbiAgICApLnN1YnNjcmliZSh0ZXh0ID0+IHtcclxuICAgICAgdGhpcy5zYXZlQ29kZSh0ZXh0LCB0cnVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzYXZlQ29kZSh0ZXh0OiBzdHJpbmcsIHRlbXA6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0ZXh0KSB7XHJcbiAgICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2UuZ2V0Q29kZSh0ZXh0LCB0ZW1wLCB0aGlzLnR5cGUpLnN1YnNjcmliZSgoZGF0YTogT3B0aWNhbENvZGVNb2RlbCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZW5jb2RlZEltYWdlID0gZGF0YS5lbmNvZGVkSW1hZ2U7XHJcbiAgICAgICAgaWYgKCF0ZW1wKSB7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlUGFuZWwuZW1pdCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jbGVhbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhbigpIHtcclxuICAgIHRoaXMuZW5jb2RlZEltYWdlID0gbnVsbDtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5jbGVhbigpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZXh0LWlucHV0XCIpO1xyXG4gICAgICBlbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9LCAxMDApO1xyXG4gIH1cclxuXHJcbiAgYWRkU2lnbih0ZXh0OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2F2ZUNvZGUodGV4dCwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVRlbXAodGV4dDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnN1YmplY3QubmV4dCh0ZXh0KTtcclxuICB9XHJcblxyXG4gIGdldERhdGEoKSB7XHJcbiAgICByZXR1cm4gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgdGhpcy5lbmNvZGVkSW1hZ2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==