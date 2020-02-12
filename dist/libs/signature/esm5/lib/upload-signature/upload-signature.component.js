/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileListWithParams } from "../signature-models";
import { SignatureService } from "../signature.service";
var UploadSignatureComponent = /** @class */ (function () {
    function UploadSignatureComponent(_signatureService) {
        this._signatureService = _signatureService;
        this.closePanel = new EventEmitter();
    }
    /**
     * @return {?}
     */
    UploadSignatureComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} files
     * @return {?}
     */
    UploadSignatureComponent.prototype.handleFileInput = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this.addFiles(files);
    };
    /**
     * @param {?} files
     * @return {?}
     */
    UploadSignatureComponent.prototype.addFiles = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var _this = this;
        /** @type {?} */
        var data = new FileListWithParams(files, this.signatureType);
        this._signatureService.uploadSignature(data, this.rewrite).subscribe((/**
         * @return {?}
         */
        function () {
            _this.closePanel.emit(true);
        }));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    UploadSignatureComponent.prototype.uploadFiles = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.addFiles($event);
    };
    UploadSignatureComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-upload-signature',
                    template: "<div class=\"gd-upload-signature\" gdDndSignature (files)=\"uploadFiles($event)\">\n  <div class=\"gd-upload-inputs\">\n    <input type=\"file\" (change)=\"handleFileInput($event.target.files)\"/>\n    <fa-icon [icon]=\"['fas','folder-open']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    <div class=\"gd-upload-title\">\n      <p class=\"text\">Click\n        <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon>\n        to open file\n      </p>\n      <p class=\"text\">Or drop file here</p>\n    </div>\n  </div>\n</div>\n",
                    styles: [".gd-upload-inputs{height:350px;text-align:center;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;align-content:center;background-color:#fff}.gd-upload-inputs .icon{font-size:52px;color:#959da5}.gd-upload-inputs input{opacity:0;position:absolute;cursor:pointer;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:203px}.gd-upload-title{color:#bababa;font-size:13px;margin:10px 0 0}.text{font-size:12px;text-align:center}@media (max-width:1037px){.gd-upload-inputs{width:-webkit-fill-available}.gd-upload-inputs input{width:-webkit-fill-available;height:201px}}"]
                }] }
    ];
    /** @nocollapse */
    UploadSignatureComponent.ctorParameters = function () { return [
        { type: SignatureService }
    ]; };
    UploadSignatureComponent.propDecorators = {
        signatureType: [{ type: Input }],
        rewrite: [{ type: Input }],
        closePanel: [{ type: Output }]
    };
    return UploadSignatureComponent;
}());
export { UploadSignatureComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLXNpZ25hdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL3VwbG9hZC1zaWduYXR1cmUvdXBsb2FkLXNpZ25hdHVyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQ7SUFVRSxrQ0FBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFGN0MsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFHbkQsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7O0lBRUQsa0RBQWU7Ozs7SUFBZixVQUFnQixLQUFlO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCwyQ0FBUTs7OztJQUFSLFVBQVMsS0FBSztRQUFkLGlCQUtDOztZQUpPLElBQUksR0FBRyxJQUFJLGtCQUFrQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTOzs7UUFBQztZQUNuRSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsOENBQVc7Ozs7SUFBWCxVQUFZLE1BQVc7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLDJoQkFBZ0Q7O2lCQUVqRDs7OztnQkFOTyxnQkFBZ0I7OztnQ0FRckIsS0FBSzswQkFDTCxLQUFLOzZCQUNMLE1BQU07O0lBc0JULCtCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0F6Qlksd0JBQXdCOzs7SUFDbkMsaURBQStCOztJQUMvQiwyQ0FBMEI7O0lBQzFCLDhDQUFtRDs7Ozs7SUFFdkMscURBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmlsZUxpc3RXaXRoUGFyYW1zfSBmcm9tIFwiLi4vc2lnbmF0dXJlLW1vZGVsc1wiO1xuaW1wb3J0IHtTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi4vc2lnbmF0dXJlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtdXBsb2FkLXNpZ25hdHVyZScsXG4gIHRlbXBsYXRlVXJsOiAnLi91cGxvYWQtc2lnbmF0dXJlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXBsb2FkLXNpZ25hdHVyZS5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZFNpZ25hdHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNpZ25hdHVyZVR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgcmV3cml0ZTogYm9vbGVhbjtcbiAgQE91dHB1dCgpIGNsb3NlUGFuZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2lnbmF0dXJlU2VydmljZTogU2lnbmF0dXJlU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBoYW5kbGVGaWxlSW5wdXQoZmlsZXM6IEZpbGVMaXN0KSB7XG4gICAgdGhpcy5hZGRGaWxlcyhmaWxlcyk7XG4gIH1cblxuICBhZGRGaWxlcyhmaWxlcykge1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRmlsZUxpc3RXaXRoUGFyYW1zKGZpbGVzLCB0aGlzLnNpZ25hdHVyZVR5cGUpO1xuICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2UudXBsb2FkU2lnbmF0dXJlKGRhdGEsIHRoaXMucmV3cml0ZSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2VQYW5lbC5lbWl0KHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBsb2FkRmlsZXMoJGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmFkZEZpbGVzKCRldmVudCk7XG4gIH1cbn1cbiJdfQ==