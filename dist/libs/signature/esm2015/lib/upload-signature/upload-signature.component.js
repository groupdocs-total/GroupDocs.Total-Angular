/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileListWithParams } from "../signature-models";
import { SignatureService } from "../signature.service";
export class UploadSignatureComponent {
    /**
     * @param {?} _signatureService
     */
    constructor(_signatureService) {
        this._signatureService = _signatureService;
        this.closePanel = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} files
     * @return {?}
     */
    handleFileInput(files) {
        this.addFiles(files);
    }
    /**
     * @param {?} files
     * @return {?}
     */
    addFiles(files) {
        /** @type {?} */
        const data = new FileListWithParams(files, this.signatureType);
        this._signatureService.uploadSignature(data, this.rewrite).subscribe((/**
         * @return {?}
         */
        () => {
            this.closePanel.emit(true);
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    uploadFiles($event) {
        this.addFiles($event);
    }
}
UploadSignatureComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-upload-signature',
                template: "<div class=\"gd-upload-signature\" gdDndSignature (files)=\"uploadFiles($event)\">\r\n  <div class=\"gd-upload-inputs\">\r\n    <input type=\"file\" (change)=\"handleFileInput($event.target.files)\"/>\r\n    <fa-icon [icon]=\"['fas','folder-open']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n    <div class=\"gd-upload-title\">\r\n      <p class=\"text\">Click\r\n        <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon>\r\n        to open file\r\n      </p>\r\n      <p class=\"text\">Or drop file here</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".gd-upload-inputs{height:350px;text-align:center;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;align-content:center;background-color:#fff}.gd-upload-inputs .icon{font-size:52px;color:#959da5}.gd-upload-inputs input{opacity:0;position:absolute;cursor:pointer;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:203px}.gd-upload-title{color:#bababa;font-size:13px;margin:10px 0 0}.text{font-size:12px;text-align:center}@media (max-width:1037px){.gd-upload-inputs{width:-webkit-fill-available}.gd-upload-inputs input{width:-webkit-fill-available;height:201px}}"]
            }] }
];
/** @nocollapse */
UploadSignatureComponent.ctorParameters = () => [
    { type: SignatureService }
];
UploadSignatureComponent.propDecorators = {
    signatureType: [{ type: Input }],
    rewrite: [{ type: Input }],
    closePanel: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UploadSignatureComponent.prototype.signatureType;
    /** @type {?} */
    UploadSignatureComponent.prototype.rewrite;
    /** @type {?} */
    UploadSignatureComponent.prototype.closePanel;
    /**
     * @type {?}
     * @private
     */
    UploadSignatureComponent.prototype._signatureService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLXNpZ25hdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL3VwbG9hZC1zaWduYXR1cmUvdXBsb2FkLXNpZ25hdHVyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFPdEQsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQUtuQyxZQUFvQixpQkFBbUM7UUFBbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUY3QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUduRCxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLEtBQWU7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFLOztjQUNOLElBQUksR0FBRyxJQUFJLGtCQUFrQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDeEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxNQUFXO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7O1lBN0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixxakJBQWdEOzthQUVqRDs7OztZQU5PLGdCQUFnQjs7OzRCQVFyQixLQUFLO3NCQUNMLEtBQUs7eUJBQ0wsTUFBTTs7OztJQUZQLGlEQUErQjs7SUFDL0IsMkNBQTBCOztJQUMxQiw4Q0FBbUQ7Ozs7O0lBRXZDLHFEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RmlsZUxpc3RXaXRoUGFyYW1zfSBmcm9tIFwiLi4vc2lnbmF0dXJlLW1vZGVsc1wiO1xyXG5pbXBvcnQge1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuLi9zaWduYXR1cmUuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC11cGxvYWQtc2lnbmF0dXJlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdXBsb2FkLXNpZ25hdHVyZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdXBsb2FkLXNpZ25hdHVyZS5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVcGxvYWRTaWduYXR1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHNpZ25hdHVyZVR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKSByZXdyaXRlOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSBjbG9zZVBhbmVsID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaWduYXR1cmVTZXJ2aWNlOiBTaWduYXR1cmVTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGhhbmRsZUZpbGVJbnB1dChmaWxlczogRmlsZUxpc3QpIHtcclxuICAgIHRoaXMuYWRkRmlsZXMoZmlsZXMpO1xyXG4gIH1cclxuXHJcbiAgYWRkRmlsZXMoZmlsZXMpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBuZXcgRmlsZUxpc3RXaXRoUGFyYW1zKGZpbGVzLCB0aGlzLnNpZ25hdHVyZVR5cGUpO1xyXG4gICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS51cGxvYWRTaWduYXR1cmUoZGF0YSwgdGhpcy5yZXdyaXRlKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsb3NlUGFuZWwuZW1pdCh0cnVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkRmlsZXMoJGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuYWRkRmlsZXMoJGV2ZW50KTtcclxuICB9XHJcbn1cclxuIl19