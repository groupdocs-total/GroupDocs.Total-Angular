/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { PreviewStatus } from './preview-models';
var PreviewStatusComponent = /** @class */ (function () {
    function PreviewStatusComponent() {
        this.previewStatus = PreviewStatus;
    }
    PreviewStatusComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-preview-status',
                    template: "<div *ngIf=\"status != previewStatus.Undefined && status != previewStatus.Loaded\" class=\"wrapper\">\r\n    <div *ngIf=\"status == previewStatus.InProgress\" class=\"status-wrapper\">\r\n      <fa-icon class=\"status-icon\" [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\r\n      <span class=\"status-text\">File preview is being created</span>\r\n    </div>\r\n    <div *ngIf=\"status == previewStatus.Timeout\" class=\"status-wrapper\">\r\n      <fa-icon class=\"status-icon\" [icon]=\"['fas','stopwatch']\"></fa-icon>\r\n      <span class=\"status-text\">Preview generation process dropped due to timeout. We are sorry</span>\r\n    </div>\r\n    <div *ngIf=\"status == previewStatus.Unavailable\" class=\"status-wrapper\">\r\n      <fa-icon class=\"status-icon\" [icon]=\"['fas','eye-slash']\"></fa-icon>\r\n      <span class=\"status-text\">Preview is unavailable for the uploaded file</span>\r\n    </div>\r\n  </div>",
                    styles: [".wrapper{color:#959da5;background-color:#e7e7e7;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%}.status-icon{font-size:65px;margin-bottom:30px;display:flex;color:#959da5}.status-text{font-size:15px;text-align:center;color:#959da5}.status-wrapper{display:flex;flex-direction:column;width:300px;height:250px;align-items:center;justify-content:center;top:-60px;position:relative}"]
                }] }
    ];
    /** @nocollapse */
    PreviewStatusComponent.ctorParameters = function () { return []; };
    PreviewStatusComponent.propDecorators = {
        status: [{ type: Input }]
    };
    return PreviewStatusComponent;
}());
export { PreviewStatusComponent };
if (false) {
    /** @type {?} */
    PreviewStatusComponent.prototype.status;
    /** @type {?} */
    PreviewStatusComponent.prototype.previewStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy1zdGF0dXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL21ldGFkYXRhLyIsInNvdXJjZXMiOlsibGliL3ByZXZpZXctc3RhdHVzL3ByZXZpZXctc3RhdHVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpEO0lBU0U7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsczdCQUE4Qzs7aUJBRS9DOzs7Ozt5QkFFRSxLQUFLOztJQU1SLDZCQUFDO0NBQUEsQUFaRCxJQVlDO1NBUFksc0JBQXNCOzs7SUFDakMsd0NBQStCOztJQUMvQiwrQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByZXZpZXdTdGF0dXMgfSBmcm9tICcuL3ByZXZpZXctbW9kZWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtcHJldmlldy1zdGF0dXMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wcmV2aWV3LXN0YXR1cy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcHJldmlldy1zdGF0dXMuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJldmlld1N0YXR1c0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgc3RhdHVzOiBQcmV2aWV3U3RhdHVzOyAgXHJcbiAgcHJldmlld1N0YXR1czogdHlwZW9mIFByZXZpZXdTdGF0dXM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICB0aGlzLnByZXZpZXdTdGF0dXMgPSBQcmV2aWV3U3RhdHVzO1xyXG4gIH0gIFxyXG59XHJcbiJdfQ==