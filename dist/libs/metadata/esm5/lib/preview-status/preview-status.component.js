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
                    template: "<div *ngIf=\"status != previewStatus.Undefined && status != previewStatus.Loaded\" class=\"wrapper\">\n    <div *ngIf=\"status == previewStatus.InProgress\" class=\"status-wrapper\">\n      <fa-icon class=\"status-icon\" [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      <span class=\"status-text\">File preview is being created</span>\n    </div>\n    <div *ngIf=\"status == previewStatus.Timeout\" class=\"status-wrapper\">\n      <fa-icon class=\"status-icon\" [icon]=\"['fas','stopwatch']\"></fa-icon>\n      <span class=\"status-text\">Preview generation process dropped due to timeout. We are sorry</span>\n    </div>\n    <div *ngIf=\"status == previewStatus.Unavailable\" class=\"status-wrapper\">\n      <fa-icon class=\"status-icon\" [icon]=\"['fas','eye-slash']\"></fa-icon>\n      <span class=\"status-text\">Preview is unavailable for the uploaded file</span>\n    </div>\n  </div>",
                    styles: [".wrapper{color:#959da5;background-color:#e7e7e7;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;width:100%;height:100%}.status-icon{font-size:65px;margin-bottom:30px;display:-webkit-box;display:flex;color:#959da5}.status-text{font-size:15px;text-align:center;color:#959da5}.status-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:300px;height:250px;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;top:-60px;position:relative}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy1zdGF0dXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL21ldGFkYXRhLyIsInNvdXJjZXMiOlsibGliL3ByZXZpZXctc3RhdHVzL3ByZXZpZXctc3RhdHVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpEO0lBU0U7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsNDVCQUE4Qzs7aUJBRS9DOzs7Ozt5QkFFRSxLQUFLOztJQU1SLDZCQUFDO0NBQUEsQUFaRCxJQVlDO1NBUFksc0JBQXNCOzs7SUFDakMsd0NBQStCOztJQUMvQiwrQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcmV2aWV3U3RhdHVzIH0gZnJvbSAnLi9wcmV2aWV3LW1vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXByZXZpZXctc3RhdHVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ByZXZpZXctc3RhdHVzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJldmlldy1zdGF0dXMuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcmV2aWV3U3RhdHVzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgc3RhdHVzOiBQcmV2aWV3U3RhdHVzOyAgXG4gIHByZXZpZXdTdGF0dXM6IHR5cGVvZiBQcmV2aWV3U3RhdHVzO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5wcmV2aWV3U3RhdHVzID0gUHJldmlld1N0YXR1cztcbiAgfSAgXG59XG4iXX0=