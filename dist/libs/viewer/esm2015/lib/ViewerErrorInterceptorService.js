/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ErrorInterceptorService, ModalService, ExceptionMessageService } from '@groupdocs.examples.angular/common-components';
import * as i0 from "@angular/core";
import * as i1 from "@groupdocs.examples.angular/common-components";
export class ViewerErrorInterceptorService extends ErrorInterceptorService {
    /**
     * @param {?} _viewerModalService
     * @param {?} _viewerMessageService
     */
    constructor(_viewerModalService, _viewerMessageService) {
        super(_viewerModalService, _viewerMessageService);
        this._viewerModalService = _viewerModalService;
        this._viewerMessageService = _viewerMessageService;
    }
    /**
     * @param {?} logFormat
     * @param {?} exception
     * @return {?}
     */
    showErrorWindowModal(logFormat, exception) {
        this._viewerMessageService.changeHttpEvent(exception);
        this._viewerModalService.open("gd-error-report-window");
    }
}
ViewerErrorInterceptorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ViewerErrorInterceptorService.ctorParameters = () => [
    { type: ModalService },
    { type: ExceptionMessageService }
];
/** @nocollapse */ ViewerErrorInterceptorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ViewerErrorInterceptorService_Factory() { return new ViewerErrorInterceptorService(i0.ɵɵinject(i1.ModalService), i0.ɵɵinject(i1.ExceptionMessageService)); }, token: ViewerErrorInterceptorService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ViewerErrorInterceptorService.prototype._viewerModalService;
    /**
     * @type {?}
     * @private
     */
    ViewerErrorInterceptorService.prototype._viewerMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld2VyRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL1ZpZXdlckVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBSXpDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxZQUFZLEVBQUMsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7O0FBSzlILE1BQU0sT0FBTyw2QkFBOEIsU0FBUSx1QkFBdUI7Ozs7O0lBRXRFLFlBQW9CLG1CQUFpQyxFQUFVLHFCQUE4QztRQUN6RyxLQUFLLENBQUMsbUJBQW1CLEVBQUMscUJBQXFCLENBQUMsQ0FBQztRQURqQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQWM7UUFBVSwwQkFBcUIsR0FBckIscUJBQXFCLENBQXlCO0lBRTdHLENBQUM7Ozs7OztJQUVELG9CQUFvQixDQUFDLFNBQWlCLEVBQUUsU0FBUztRQUM3QyxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7WUFaSixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKaUMsWUFBWTtZQUFDLHVCQUF1Qjs7Ozs7Ozs7SUFPdEQsNERBQXlDOzs7OztJQUFFLDhEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cEVycm9yUmVzcG9uc2UsIEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3R9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQge09ic2VydmFibGUsIHRocm93RXJyb3J9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsIE1vZGFsU2VydmljZSxFeGNlcHRpb25NZXNzYWdlU2VydmljZSB9IGZyb20gJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWaWV3ZXJFcnJvckludGVyY2VwdG9yU2VydmljZSBleHRlbmRzIEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlIHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld2VyTW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsIHByaXZhdGUgX3ZpZXdlck1lc3NhZ2VTZXJ2aWNlOiBFeGNlcHRpb25NZXNzYWdlU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKF92aWV3ZXJNb2RhbFNlcnZpY2UsX3ZpZXdlck1lc3NhZ2VTZXJ2aWNlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2hvd0Vycm9yV2luZG93TW9kYWwobG9nRm9ybWF0OiBzdHJpbmcsIGV4Y2VwdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3ZpZXdlck1lc3NhZ2VTZXJ2aWNlLmNoYW5nZUh0dHBFdmVudChleGNlcHRpb24pO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdlck1vZGFsU2VydmljZS5vcGVuKFwiZ2QtZXJyb3ItcmVwb3J0LXdpbmRvd1wiKTtcclxuICAgIH1cclxufSJdfQ==