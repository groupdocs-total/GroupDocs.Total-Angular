/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ExceptionMessageService } from '@groupdocs.examples.angular/common-components';
import { ViewerService } from '../viewer.service';
import { ForumCategory } from './forum-category';
import { ForumPostRequest } from './forum-post-request';
/** @enum {number} */
var CurrentWindowView = {
    ReportErrorView: 0,
    SuccessPostView: 1,
    PostFailedView: 2,
};
CurrentWindowView[CurrentWindowView.ReportErrorView] = 'ReportErrorView';
CurrentWindowView[CurrentWindowView.SuccessPostView] = 'SuccessPostView';
CurrentWindowView[CurrentWindowView.PostFailedView] = 'PostFailedView';
var ErrorReportModalComponent = /** @class */ (function () {
    function ErrorReportModalComponent(messageService, viewerService) {
        var _this = this;
        this.viewerService = viewerService;
        this.currentWindowMode = CurrentWindowView.ReportErrorView;
        this.PostIsPrivate = true;
        this.WindowTitle = "Error occured";
        this.windowView = CurrentWindowView;
        messageService.httpEventChange.subscribe((/**
         * @param {?} httpEvent
         * @return {?}
         */
        function (httpEvent) {
            _this.httpEvent = httpEvent;
            if (_this.httpEvent instanceof HttpErrorResponse) {
                _this.message = _this.httpEvent.message;
            }
        }));
    }
    /**
     * @return {?}
     */
    ErrorReportModalComponent.prototype.emailIsValid = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.Email).toLowerCase());
    };
    /**
     * @return {?}
     */
    ErrorReportModalComponent.prototype.reportError = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.emailIsValid()) {
            /** @type {?} */
            var queryString = window.location.search;
            /** @type {?} */
            var urlParams = new URLSearchParams(queryString);
            /** @type {?} */
            var request = new ForumPostRequest();
            request.CategoryId = ForumCategory.Viewer;
            request.Email = this.Email;
            request.IsPrivatePost = this.PostIsPrivate;
            request.UserName = this.Email.split('@')[0];
            request.IsSendNotification = true;
            /** @type {?} */
            var fileParam = urlParams.get('file');
            if (fileParam) {
                request.FolderPath = urlParams.get('file');
                ;
            }
            if (this.httpEvent instanceof HttpErrorResponse) {
                /** @type {?} */
                var httpErrorResponse = ((/** @type {?} */ (this.httpEvent)));
                request.Message = request.ExceptionMessage = httpErrorResponse.error.exceptionMessage;
                request.InnerExceptionMessage = httpErrorResponse.error.innerExceptionMessage;
                request.OriginalUrl = httpErrorResponse.url;
                if (httpErrorResponse.error.exceptionMessage == undefined) {
                    request.Message = request.ExceptionMessage = httpErrorResponse.error.message;
                }
            }
            else {
                request.Message = "Unknown error " + (this.httpEvent == null ? "" : this.httpEvent.type.toString());
            }
            request.Title = "Viewer issue - " + request.Message + " " + new Date().toISOString();
            this.viewerService.reportError(request).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (data == undefined || data == null) {
                    _this.PostError = "Unknown error";
                    _this.currentWindowMode = CurrentWindowView.PostFailedView;
                }
                else if ((data.error != "" && data.error != null)) {
                    _this.PostError = data.error;
                    _this.currentWindowMode = CurrentWindowView.PostFailedView;
                }
                else if (data.url != "" && data.url != null) {
                    _this.TopicLink = data.url;
                    _this.WindowTitle = "Error reported!";
                    _this.currentWindowMode = CurrentWindowView.SuccessPostView;
                }
                else {
                    _this.PostError = "Unknown error";
                    _this.currentWindowMode = CurrentWindowView.PostFailedView;
                }
            }));
        }
    };
    ErrorReportModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-error-report-window',
                    template: "<gd-modal id=\"gd-error-report-window\" [title]=\"WindowTitle\">\r\n    <section id=\"gd-error-section\">\r\n      <div *ngIf=\"currentWindowMode == windowView.ReportErrorView\">\r\n        <fa-icon [icon]=\"['fas', 'exclamation-triangle']\"></fa-icon>\r\n        <div class=\"gd-modal-error\">\r\n          <div class=\"gd-modal-error-title\">Something went wrong</div>\r\n          <div class=\"gd-modal-error-message\">{{message ? message : 'Server is not available'}}</div>\r\n        </div>\r\n        <div class=\"gd-error-report-body\">\r\n          <div class='email-row'><input type=\"text\" placeholder=\"E-mail\" class='email-input'  [(ngModel)]=\"Email\" /></div>\r\n          <div class='email-row-validation' *ngIf=\"!emailIsValid()\">Please enter your E-mail address.</div>\r\n            <div>\r\n              <input type=\"checkbox\" [(ngModel)]=\"PostIsPrivate\" title=\"Make this forum private, so that it will only be accessable to you and our developers.\" />&nbsp;Make this forum private, so that it will only be accessable to you and our developers.\r\n            </div>\r\n            <button ng-disabled=\"!emailIsValid()\" class=\"btn-report\" (click)=\"reportError()\"><fa-icon [icon]=\"['fas', 'flag']\"></fa-icon>Report error</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"currentWindowMode == windowView.SuccessPostView\">\r\n      <fa-icon [icon]=\"['fas', 'check-circle']\" [styles]=\"{'color': 'green'}\" ></fa-icon>\r\n      <div class=\"gd-modal-error\">\r\n        <div class=\"gd-modal-error-title\">Error reported successfully!</div>\r\n      </div>\r\n      <div class=\"gd-error-report-body\">\r\n          You have successfully reported the error, You will get the notification email when error is fixed, <a href='{{TopicLink}}'>click here</a> to visit the forums.\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"currentWindowMode == windowView.PostFailedView\">\r\n      <fa-icon [icon]=\"['fas', 'times']\"></fa-icon>\r\n      <div class=\"gd-modal-error\">\r\n        <div class=\"gd-modal-error-title\">Post to forums failed</div>\r\n      </div>\r\n      <div class=\"gd-error-report-body\">\r\n          {{PostError}}\r\n      </div>\r\n    </div>\r\n\r\n    </section>\r\n  </gd-modal>\r\n  ",
                    styles: [".gd-modal-error{display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex:1}.gd-modal-error .gd-modal-error-message{font-size:12px;margin:0 24px 24px 0;word-break:break-word;max-width:320px}.gd-modal-error .gd-modal-error-title{font-size:16px;font-weight:700;margin:14px 0 10px}#gd-error-section{max-width:468px;margin:20px}#gd-error-section fa-icon{-webkit-box-flex:1;flex:1;color:#e04e4e;font-size:40px;margin:13px 23px 90px;text-align:center;max-width:46px}.email-input{height:30px;width:267px;font-size:14px;color:#6e6e6e;border:1px solid #25c2d4;margin:7px 0 7px 7px;box-sizing:border-box;padding:6px 0 5px 9px}.email-row{margin-bottom:10px}.email-row input{margin-left:5px;width:300px}.email-row-validation{color:red;margin-top:1px;margin-left:5px;margin-bottom:10px}.btn-report{margin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;border:1px solid;border-radius:5px;padding:0 10px!important;min-width:37px;height:37px;text-align:center;cursor:pointer}.btn-report .ng-fa-icon{font-size:14px!important;margin:7px!important}.btn-report:focus{outline:0!important;border:0!important}.btn:hover{background-color:#4169e1}"]
                }] }
    ];
    /** @nocollapse */
    ErrorReportModalComponent.ctorParameters = function () { return [
        { type: ExceptionMessageService },
        { type: ViewerService }
    ]; };
    return ErrorReportModalComponent;
}());
export { ErrorReportModalComponent };
if (false) {
    /** @type {?} */
    ErrorReportModalComponent.prototype.httpEvent;
    /** @type {?} */
    ErrorReportModalComponent.prototype.message;
    /** @type {?} */
    ErrorReportModalComponent.prototype.currentWindowMode;
    /** @type {?} */
    ErrorReportModalComponent.prototype.Email;
    /** @type {?} */
    ErrorReportModalComponent.prototype.TopicLink;
    /** @type {?} */
    ErrorReportModalComponent.prototype.PostError;
    /** @type {?} */
    ErrorReportModalComponent.prototype.PostIsPrivate;
    /** @type {?} */
    ErrorReportModalComponent.prototype.WindowTitle;
    /** @type {?} */
    ErrorReportModalComponent.prototype.windowView;
    /**
     * @type {?}
     * @private
     */
    ErrorReportModalComponent.prototype.viewerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItcmVwb3J0LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvZXJyb3ItcmVwb3J0LW1vZGFsL2Vycm9yLXJlcG9ydC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBYSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0lBTXRELGtCQUFlO0lBQ2Ysa0JBQWU7SUFDZixpQkFBYzs7Ozs7QUFHaEI7SUFtQkUsbUNBQVksY0FBdUMsRUFBVSxhQUE0QjtRQUF6RixpQkFXQztRQVg0RCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVZ6RixzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsZUFBZSxDQUFDO1FBS3pFLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGdCQUFXLEdBQVcsZUFBZSxDQUFDO1FBRS9CLGVBQVUsR0FBNkIsaUJBQWlCLENBQUM7UUFJOUQsY0FBYyxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxTQUFTO1lBQzVDLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBRTNCLElBQUksS0FBSSxDQUFDLFNBQVMsWUFBWSxpQkFBaUIsRUFDL0M7Z0JBQ0ksS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQzthQUN6QztRQUNI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LEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDNUIsS0FBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDLGNBQWMsQ0FBQztpQkFDM0Q7cUJBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFFLEVBQUUsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFDMUM7b0JBQ0UsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO29CQUMxQixLQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDO29CQUNyQyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUMsZUFBZSxDQUFDO2lCQUM1RDtxQkFDRDtvQkFDRSxLQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztvQkFDakMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDLGNBQWMsQ0FBQztpQkFDM0Q7WUFDTCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Z0JBcEdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxxdUVBQWtEOztpQkFFbkQ7Ozs7Z0JBbEJRLHVCQUF1QjtnQkFDdkIsYUFBYTs7SUFrSHRCLGdDQUFDO0NBQUEsQUFyR0QsSUFxR0M7U0FoR1kseUJBQXlCOzs7SUFFcEMsOENBQTBCOztJQUMxQiw0Q0FBZ0I7O0lBQ2hCLHNEQUF5RTs7SUFFekUsMENBQWM7O0lBQ2QsOENBQWtCOztJQUNsQiw4Q0FBa0I7O0lBQ2xCLGtEQUE4Qjs7SUFDOUIsZ0RBQXNDOztJQUV0QywrQ0FBZ0U7Ozs7O0lBRVgsa0RBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgVmlld2VyU2VydmljZSB9IGZyb20gJy4uL3ZpZXdlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ydW1DYXRlZ29yeSB9IGZyb20gJy4vZm9ydW0tY2F0ZWdvcnknO1xyXG5pbXBvcnQgeyBGb3J1bVBvc3RSZXF1ZXN0IH0gZnJvbSAnLi9mb3J1bS1wb3N0LXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBGb3J1bVBvc3RSZXNwb25zZSB9IGZyb20gJy4vZm9ydW0tcG9zdC1yZXNwb25zZSc7XHJcblxyXG4vLyBDdXJyZW50IHdpbmRvdyB2aWV3ICAtIHJlcG9ydCBlcnJvciB2aWV3IChkZWZhdWx0KSwgIGlmIHBvc3Qgc3VjY2VzcyAtIHN1Y2Nlc3Nwcm90XHJcbmVudW0gQ3VycmVudFdpbmRvd1ZpZXdcclxue1xyXG4gIFJlcG9ydEVycm9yVmlldyxcclxuICBTdWNjZXNzUG9zdFZpZXcsXHJcbiAgUG9zdEZhaWxlZFZpZXcgICAgXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtZXJyb3ItcmVwb3J0LXdpbmRvdycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Vycm9yLXJlcG9ydC1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZXJyb3ItcmVwb3J0LW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEVycm9yUmVwb3J0TW9kYWxDb21wb25lbnQgXHJcbntcclxuICBodHRwRXZlbnQ6IEh0dHBFdmVudDxhbnk+O1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBjdXJyZW50V2luZG93TW9kZTogQ3VycmVudFdpbmRvd1ZpZXcgPSBDdXJyZW50V2luZG93Vmlldy5SZXBvcnRFcnJvclZpZXc7XHJcbiAgXHJcbiAgRW1haWw6IHN0cmluZztcclxuICBUb3BpY0xpbms6IHN0cmluZztcclxuICBQb3N0RXJyb3I6IHN0cmluZztcclxuICBQb3N0SXNQcml2YXRlOiBib29sZWFuID0gdHJ1ZTtcclxuICBXaW5kb3dUaXRsZTogc3RyaW5nID0gXCJFcnJvciBvY2N1cmVkXCI7XHJcbiAgXHJcbiAgcHVibGljIHdpbmRvd1ZpZXc6IHR5cGVvZiBDdXJyZW50V2luZG93VmlldyA9IEN1cnJlbnRXaW5kb3dWaWV3O1xyXG5cclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlU2VydmljZTogRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UsIHByaXZhdGUgdmlld2VyU2VydmljZTogVmlld2VyU2VydmljZSkge1xyXG5cclxuICAgIG1lc3NhZ2VTZXJ2aWNlLmh0dHBFdmVudENoYW5nZS5zdWJzY3JpYmUoaHR0cEV2ZW50ID0+IHtcclxuICAgICAgICAgIHRoaXMuaHR0cEV2ZW50ID0gaHR0cEV2ZW50O1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLmh0dHBFdmVudCBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuaHR0cEV2ZW50Lm1lc3NhZ2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgZW1haWxJc1ZhbGlkKCk6Ym9vbGVhblxyXG4gIHtcclxuICAgIGNvbnN0IHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgcmV0dXJuIHJlLnRlc3QoU3RyaW5nKHRoaXMuRW1haWwpLnRvTG93ZXJDYXNlKCkpO1xyXG4gIH1cclxuICAgXHJcbiAgcmVwb3J0RXJyb3IoKVxyXG4gIHtcclxuICAgIGlmICh0aGlzLmVtYWlsSXNWYWxpZCgpKVxyXG4gICAge1xyXG5cclxuICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG4gICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcclxuXHJcbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IEZvcnVtUG9zdFJlcXVlc3QoKTtcclxuICAgICAgcmVxdWVzdC5DYXRlZ29yeUlkID0gRm9ydW1DYXRlZ29yeS5WaWV3ZXI7XHJcbiAgICAgIHJlcXVlc3QuRW1haWwgPSB0aGlzLkVtYWlsO1xyXG4gICAgICByZXF1ZXN0LklzUHJpdmF0ZVBvc3QgPSB0aGlzLlBvc3RJc1ByaXZhdGU7XHJcbiAgICAgIHJlcXVlc3QuVXNlck5hbWUgPSB0aGlzLkVtYWlsLnNwbGl0KCdAJylbMF07XHJcbiAgICAgIHJlcXVlc3QuSXNTZW5kTm90aWZpY2F0aW9uID0gdHJ1ZTtcclxuXHJcbiAgICAgIHZhciBmaWxlUGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdmaWxlJyk7XHJcblxyXG4gICAgICBpZiAoZmlsZVBhcmFtKSBcclxuICAgICAge1xyXG4gICAgICAgIHJlcXVlc3QuRm9sZGVyUGF0aCA9IHVybFBhcmFtcy5nZXQoJ2ZpbGUnKTs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmh0dHBFdmVudCBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKVxyXG4gICAgICB7XHJcbiAgICAgICAgdmFyIGh0dHBFcnJvclJlc3BvbnNlID0gKHRoaXMuaHR0cEV2ZW50IGFzIEh0dHBFcnJvclJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgcmVxdWVzdC5NZXNzYWdlID0gIHJlcXVlc3QuRXhjZXB0aW9uTWVzc2FnZSA9IGh0dHBFcnJvclJlc3BvbnNlLmVycm9yLmV4Y2VwdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgcmVxdWVzdC5Jbm5lckV4Y2VwdGlvbk1lc3NhZ2UgPSBodHRwRXJyb3JSZXNwb25zZS5lcnJvci5pbm5lckV4Y2VwdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgcmVxdWVzdC5PcmlnaW5hbFVybCA9IGh0dHBFcnJvclJlc3BvbnNlLnVybDtcclxuXHJcbiAgICAgICAgaWYgKGh0dHBFcnJvclJlc3BvbnNlLmVycm9yLmV4Y2VwdGlvbk1lc3NhZ2UgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlcXVlc3QuTWVzc2FnZSA9ICByZXF1ZXN0LkV4Y2VwdGlvbk1lc3NhZ2UgPSBodHRwRXJyb3JSZXNwb25zZS5lcnJvci5tZXNzYWdlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1lbHNlXHJcbiAgICAgIHtcclxuICAgICAgICByZXF1ZXN0Lk1lc3NhZ2UgPSBcIlVua25vd24gZXJyb3IgXCIgICsgKHRoaXMuaHR0cEV2ZW50ID09IG51bGwgPyBcIlwiIDogdGhpcy5odHRwRXZlbnQudHlwZS50b1N0cmluZygpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVxdWVzdC5UaXRsZSA9IFwiVmlld2VyIGlzc3VlIC0gXCIgKyByZXF1ZXN0Lk1lc3NhZ2UgKyBcIiBcIisgbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xyXG4gICAgICB0aGlzLnZpZXdlclNlcnZpY2UucmVwb3J0RXJyb3IocmVxdWVzdCkuc3Vic2NyaWJlKChkYXRhOiBGb3J1bVBvc3RSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGEgPT0gdW5kZWZpbmVkIHx8IGRhdGEgPT0gbnVsbClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Qb3N0RXJyb3IgPSBcIlVua25vd24gZXJyb3JcIjsgIFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRXaW5kb3dNb2RlID0gQ3VycmVudFdpbmRvd1ZpZXcuUG9zdEZhaWxlZFZpZXc7XHJcbiAgICAgICAgICB9ZWxzZSBpZiAoKGRhdGEuZXJyb3IhPVwiXCIgJiYgZGF0YS5lcnJvciAhPSBudWxsKSlcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Qb3N0RXJyb3IgPSBkYXRhLmVycm9yOyAgXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFdpbmRvd01vZGUgPSBDdXJyZW50V2luZG93Vmlldy5Qb3N0RmFpbGVkVmlldztcclxuICAgICAgICAgIH1lbHNlIGlmIChkYXRhLnVybCE9XCJcIiAmJiBkYXRhLnVybCAhPSBudWxsKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLlRvcGljTGluayA9IGRhdGEudXJsO1xyXG4gICAgICAgICAgICB0aGlzLldpbmRvd1RpdGxlID0gXCJFcnJvciByZXBvcnRlZCFcIjtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50V2luZG93TW9kZSA9IEN1cnJlbnRXaW5kb3dWaWV3LlN1Y2Nlc3NQb3N0VmlldztcclxuICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuUG9zdEVycm9yID0gXCJVbmtub3duIGVycm9yXCI7ICBcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50V2luZG93TW9kZSA9IEN1cnJlbnRXaW5kb3dWaWV3LlBvc3RGYWlsZWRWaWV3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19