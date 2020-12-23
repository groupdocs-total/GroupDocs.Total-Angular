/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { PreviewStatus } from './preview-models';
export class PreviewStatusComponent {
    constructor() {
        this.previewStatus = PreviewStatus;
    }
}
PreviewStatusComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-preview-status',
                template: "<div *ngIf=\"status != previewStatus.Undefined && status != previewStatus.Loaded\" class=\"wrapper\">\r\n    <div *ngIf=\"status == previewStatus.InProgress\" class=\"status-wrapper\">\r\n      <fa-icon class=\"status-icon\" [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\r\n      <span class=\"status-text\">File preview is being created</span>\r\n    </div>\r\n    <div *ngIf=\"status == previewStatus.Timeout\" class=\"status-wrapper\">\r\n      <fa-icon class=\"status-icon\" [icon]=\"['fas','stopwatch']\"></fa-icon>\r\n      <span class=\"status-text\">Preview generation process dropped due to timeout. We are sorry</span>\r\n    </div>\r\n    <div *ngIf=\"status == previewStatus.Unavailable\" class=\"status-wrapper\">\r\n      <fa-icon class=\"status-icon\" [icon]=\"['fas','eye-slash']\"></fa-icon>\r\n      <span class=\"status-text\">Preview is unavailable for the uploaded file</span>\r\n    </div>\r\n  </div>",
                styles: [".wrapper{color:#959da5;background-color:#e7e7e7;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%}.status-icon{font-size:65px;margin-bottom:30px;display:flex;color:#959da5}.status-text{font-size:15px;text-align:center;color:#959da5}.status-wrapper{display:flex;flex-direction:column;width:300px;height:250px;align-items:center;justify-content:center;top:-60px;position:relative}"]
            }] }
];
/** @nocollapse */
PreviewStatusComponent.ctorParameters = () => [];
PreviewStatusComponent.propDecorators = {
    status: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PreviewStatusComponent.prototype.status;
    /** @type {?} */
    PreviewStatusComponent.prototype.previewStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy1zdGF0dXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL21ldGFkYXRhLyIsInNvdXJjZXMiOlsibGliL3ByZXZpZXctc3RhdHVzL3ByZXZpZXctc3RhdHVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBT2pELE1BQU0sT0FBTyxzQkFBc0I7SUFJakM7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDOzs7WUFYRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsczdCQUE4Qzs7YUFFL0M7Ozs7O3FCQUVFLEtBQUs7Ozs7SUFBTix3Q0FBK0I7O0lBQy9CLCtDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHJldmlld1N0YXR1cyB9IGZyb20gJy4vcHJldmlldy1tb2RlbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1wcmV2aWV3LXN0YXR1cycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3ByZXZpZXctc3RhdHVzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wcmV2aWV3LXN0YXR1cy5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcmV2aWV3U3RhdHVzQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBzdGF0dXM6IFByZXZpZXdTdGF0dXM7ICBcclxuICBwcmV2aWV3U3RhdHVzOiB0eXBlb2YgUHJldmlld1N0YXR1cztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMucHJldmlld1N0YXR1cyA9IFByZXZpZXdTdGF0dXM7XHJcbiAgfSAgXHJcbn1cclxuIl19