/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ErrorInterceptorService, ModalService, ExceptionMessageService } from '@groupdocs.examples.angular/common-components';
import * as i0 from "@angular/core";
import * as i1 from "@groupdocs.examples.angular/common-components";
var ViewerErrorInterceptorService = /** @class */ (function (_super) {
    tslib_1.__extends(ViewerErrorInterceptorService, _super);
    function ViewerErrorInterceptorService(_viewerModalService, _viewerMessageService) {
        var _this = _super.call(this, _viewerModalService, _viewerMessageService) || this;
        _this._viewerModalService = _viewerModalService;
        _this._viewerMessageService = _viewerMessageService;
        return _this;
    }
    /**
     * @param {?} logFormat
     * @param {?} exception
     * @return {?}
     */
    ViewerErrorInterceptorService.prototype.showErrorWindowModal = /**
     * @param {?} logFormat
     * @param {?} exception
     * @return {?}
     */
    function (logFormat, exception) {
        this._viewerMessageService.changeHttpEvent(exception);
        this._viewerModalService.open("gd-error-report-window");
    };
    ViewerErrorInterceptorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ViewerErrorInterceptorService.ctorParameters = function () { return [
        { type: ModalService },
        { type: ExceptionMessageService }
    ]; };
    /** @nocollapse */ ViewerErrorInterceptorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ViewerErrorInterceptorService_Factory() { return new ViewerErrorInterceptorService(i0.ɵɵinject(i1.ModalService), i0.ɵɵinject(i1.ExceptionMessageService)); }, token: ViewerErrorInterceptorService, providedIn: "root" });
    return ViewerErrorInterceptorService;
}(ErrorInterceptorService));
export { ViewerErrorInterceptorService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld2VyRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL1ZpZXdlckVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUl6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxFQUFDLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7OztBQUU5SDtJQUdtRCx5REFBdUI7SUFFdEUsdUNBQW9CLG1CQUFpQyxFQUFVLHFCQUE4QztRQUE3RyxZQUNJLGtCQUFNLG1CQUFtQixFQUFDLHFCQUFxQixDQUFDLFNBQ25EO1FBRm1CLHlCQUFtQixHQUFuQixtQkFBbUIsQ0FBYztRQUFVLDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBeUI7O0lBRTdHLENBQUM7Ozs7OztJQUVELDREQUFvQjs7Ozs7SUFBcEIsVUFBcUIsU0FBaUIsRUFBRSxTQUFTO1FBQzdDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzVELENBQUM7O2dCQVpKLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSmlDLFlBQVk7Z0JBQUMsdUJBQXVCOzs7d0NBSnRFO0NBbUJDLEFBYkQsQ0FHbUQsdUJBQXVCLEdBVXpFO1NBVlksNkJBQTZCOzs7Ozs7SUFFMUIsNERBQXlDOzs7OztJQUFFLDhEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cEVycm9yUmVzcG9uc2UsIEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3R9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQge09ic2VydmFibGUsIHRocm93RXJyb3J9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsIE1vZGFsU2VydmljZSxFeGNlcHRpb25NZXNzYWdlU2VydmljZSB9IGZyb20gJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWaWV3ZXJFcnJvckludGVyY2VwdG9yU2VydmljZSBleHRlbmRzIEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlIHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld2VyTW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsIHByaXZhdGUgX3ZpZXdlck1lc3NhZ2VTZXJ2aWNlOiBFeGNlcHRpb25NZXNzYWdlU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKF92aWV3ZXJNb2RhbFNlcnZpY2UsX3ZpZXdlck1lc3NhZ2VTZXJ2aWNlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2hvd0Vycm9yV2luZG93TW9kYWwobG9nRm9ybWF0OiBzdHJpbmcsIGV4Y2VwdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3ZpZXdlck1lc3NhZ2VTZXJ2aWNlLmNoYW5nZUh0dHBFdmVudChleGNlcHRpb24pO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdlck1vZGFsU2VydmljZS5vcGVuKFwiZ2QtZXJyb3ItcmVwb3J0LXdpbmRvd1wiKTtcclxuICAgIH1cclxufSJdfQ==