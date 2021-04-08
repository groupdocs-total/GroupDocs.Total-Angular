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
const CurrentWindowView = {
    ReportErrorView: 0,
    SuccessPostView: 1,
    PostFailedView: 2,
};
CurrentWindowView[CurrentWindowView.ReportErrorView] = 'ReportErrorView';
CurrentWindowView[CurrentWindowView.SuccessPostView] = 'SuccessPostView';
CurrentWindowView[CurrentWindowView.PostFailedView] = 'PostFailedView';
export class ErrorReportModalComponent {
    /**
     * @param {?} messageService
     * @param {?} viewerService
     */
    constructor(messageService, viewerService) {
        this.viewerService = viewerService;
        this.currentWindowMode = CurrentWindowView.ReportErrorView;
        this.PostIsPrivate = true;
        this.WindowTitle = "Error occured";
        this.windowView = CurrentWindowView;
        messageService.httpEventChange.subscribe((/**
         * @param {?} httpEvent
         * @return {?}
         */
        httpEvent => {
            this.httpEvent = httpEvent;
            if (this.httpEvent instanceof HttpErrorResponse) {
                this.message = this.httpEvent.message;
            }
        }));
    }
    /**
     * @return {?}
     */
    emailIsValid() {
        /** @type {?} */
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.Email).toLowerCase());
    }
    /**
     * @return {?}
     */
    reportError() {
        if (this.emailIsValid()) {
            /** @type {?} */
            const queryString = window.location.search;
            /** @type {?} */
            const urlParams = new URLSearchParams(queryString);
            /** @type {?} */
            let request = new ForumPostRequest();
            request.CategoryId = ForumCategory.Viewer;
            request.Email = this.Email;
            request.IsPrivatePost = this.PostIsPrivate;
            request.UserName = this.Email.split('@')[0];
            request.IsSendNotification = true;
            /** @type {?} */
            let fileParam = urlParams.get('file');
            if (fileParam) {
                request.FolderPath = urlParams.get('file');
                ;
            }
            if (this.httpEvent instanceof HttpErrorResponse) {
                /** @type {?} */
                let httpErrorResponse = ((/** @type {?} */ (this.httpEvent)));
                request.Message = request.ExceptionMessage = httpErrorResponse.error.exceptionMessage;
                request.InnerExceptionMessage = httpErrorResponse.error.innerExceptionMessage;
                request.OriginalUrl = httpErrorResponse.url;
                if (httpErrorResponse.error.exceptionMessage === undefined) {
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
            (data) => {
                if (data === undefined || data === null) {
                    this.PostError = "Unknown error";
                    this.currentWindowMode = CurrentWindowView.PostFailedView;
                }
                else if ((data.error !== "" && data.error !== null)) {
                    this.PostError = data.error;
                    this.currentWindowMode = CurrentWindowView.PostFailedView;
                }
                else if (data.url !== "" && data.url !== null) {
                    this.TopicLink = data.url;
                    this.WindowTitle = "Error reported!";
                    this.currentWindowMode = CurrentWindowView.SuccessPostView;
                }
                else {
                    this.PostError = "Unknown error";
                    this.currentWindowMode = CurrentWindowView.PostFailedView;
                }
            }));
        }
    }
}
ErrorReportModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-error-report-window',
                template: "<gd-modal id=\"gd-error-report-window\" [title]=\"WindowTitle\">\r\n    <section id=\"gd-error-section\">\r\n      <div *ngIf=\"currentWindowMode == windowView.ReportErrorView\">\r\n        <fa-icon [icon]=\"['fas', 'exclamation-triangle']\"></fa-icon>\r\n        <div class=\"gd-modal-error\">\r\n          <div class=\"gd-modal-error-title\">Something went wrong</div>\r\n          <div class=\"gd-modal-error-message\">{{message ? message : 'Server is not available'}}</div>\r\n        </div>\r\n        <div class=\"gd-error-report-body\">\r\n          <div class='email-row'><input type=\"text\" placeholder=\"E-mail\" class='email-input'  [(ngModel)]=\"Email\" /></div>\r\n          <div class='email-row-validation' *ngIf=\"!emailIsValid()\">Please enter your E-mail address.</div>\r\n            <div>\r\n              <input type=\"checkbox\" [(ngModel)]=\"PostIsPrivate\" title=\"Make this forum private, so that it will only be accessable to you and our developers.\" />&nbsp;Make this forum private, so that it will only be accessable to you and our developers.\r\n            </div>\r\n            <button ng-disabled=\"!emailIsValid()\" class=\"btn-report\" (click)=\"reportError()\"><fa-icon [icon]=\"['fas', 'flag']\"></fa-icon>Report error</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"currentWindowMode == windowView.SuccessPostView\">\r\n      <fa-icon [icon]=\"['fas', 'check-circle']\" [styles]=\"{'color': 'green'}\" ></fa-icon>\r\n      <div class=\"gd-modal-error\">\r\n        <div class=\"gd-modal-error-title\">Error reported successfully!</div>\r\n      </div>\r\n      <div class=\"gd-error-report-body\">\r\n          You have successfully reported the error, You will get the notification email when error is fixed, <a href='{{TopicLink}}'>click here</a> to visit the forums.\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"currentWindowMode == windowView.PostFailedView\">\r\n      <fa-icon [icon]=\"['fas', 'times']\"></fa-icon>\r\n      <div class=\"gd-modal-error\">\r\n        <div class=\"gd-modal-error-title\">Post to forums failed</div>\r\n      </div>\r\n      <div class=\"gd-error-report-body\">\r\n          {{PostError}}\r\n      </div>\r\n    </div>\r\n\r\n    </section>\r\n  </gd-modal>\r\n  ",
                styles: [".gd-modal-error{display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex:1}.gd-modal-error .gd-modal-error-message{font-size:12px;margin:0 24px 24px 0;word-break:break-word;max-width:320px}.gd-modal-error .gd-modal-error-title{font-size:16px;font-weight:700;margin:14px 0 10px}#gd-error-section{max-width:468px;margin:20px}#gd-error-section fa-icon{-webkit-box-flex:1;flex:1;color:#e04e4e;font-size:40px;margin:13px 23px 90px;text-align:center;max-width:46px}.email-input{height:30px;width:267px;font-size:14px;color:#6e6e6e;border:1px solid #25c2d4;margin:7px 0 7px 7px;box-sizing:border-box;padding:6px 0 5px 9px}.email-row{margin-bottom:10px}.email-row input{margin-left:5px;width:300px}.email-row-validation{color:red;margin-top:1px;margin-left:5px;margin-bottom:10px}.btn-report{margin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;border:1px solid;border-radius:5px;padding:0 10px!important;min-width:37px;height:37px;text-align:center;cursor:pointer}.btn-report .ng-fa-icon{font-size:14px!important;margin:7px!important}.btn-report:focus{outline:0!important;border:0!important}.btn:hover{background-color:#4169e1}"]
            }] }
];
/** @nocollapse */
ErrorReportModalComponent.ctorParameters = () => [
    { type: ExceptionMessageService },
    { type: ViewerService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItcmVwb3J0LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvZXJyb3ItcmVwb3J0LW1vZGFsL2Vycm9yLXJlcG9ydC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBYSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0lBTXRELGtCQUFlO0lBQ2Ysa0JBQWU7SUFDZixpQkFBYzs7Ozs7QUFRaEIsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7SUFjcEMsWUFBWSxjQUF1QyxFQUFVLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBVnpGLHNCQUFpQixHQUFzQixpQkFBaUIsQ0FBQyxlQUFlLENBQUM7UUFLekUsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxlQUFlLENBQUM7UUFFdkIsZUFBVSxHQUE2QixpQkFBaUIsQ0FBQztRQUk5RCxjQUFjLENBQUMsZUFBZSxDQUFDLFNBQVM7Ozs7UUFBQyxTQUFTLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUUzQixJQUFJLElBQUksQ0FBQyxTQUFTLFlBQVksaUJBQWlCLEVBQy9DO2dCQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENB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SUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDNUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDLGNBQWMsQ0FBQztpQkFDM0Q7cUJBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFHLEVBQUUsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksRUFDNUM7b0JBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO29CQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDO29CQUNyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUMsZUFBZSxDQUFDO2lCQUM1RDtxQkFDRDtvQkFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztvQkFDakMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDLGNBQWMsQ0FBQztpQkFDM0Q7WUFDTCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7O1lBcEdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxxdUVBQWtEOzthQUVuRDs7OztZQWxCUSx1QkFBdUI7WUFDdkIsYUFBYTs7OztJQW9CcEIsOENBQTBCOztJQUMxQiw0Q0FBZ0I7O0lBQ2hCLHNEQUF5RTs7SUFFekUsMENBQWM7O0lBQ2QsOENBQWtCOztJQUNsQiw4Q0FBa0I7O0lBQ2xCLGtEQUFxQjs7SUFDckIsZ0RBQThCOztJQUU5QiwrQ0FBZ0U7Ozs7O0lBRVgsa0RBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgVmlld2VyU2VydmljZSB9IGZyb20gJy4uL3ZpZXdlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ydW1DYXRlZ29yeSB9IGZyb20gJy4vZm9ydW0tY2F0ZWdvcnknO1xyXG5pbXBvcnQgeyBGb3J1bVBvc3RSZXF1ZXN0IH0gZnJvbSAnLi9mb3J1bS1wb3N0LXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBGb3J1bVBvc3RSZXNwb25zZSB9IGZyb20gJy4vZm9ydW0tcG9zdC1yZXNwb25zZSc7XHJcblxyXG4vLyBDdXJyZW50IHdpbmRvdyB2aWV3ICAtIHJlcG9ydCBlcnJvciB2aWV3IChkZWZhdWx0KSwgIGlmIHBvc3Qgc3VjY2VzcyAtIHN1Y2Nlc3Nwcm90XHJcbmVudW0gQ3VycmVudFdpbmRvd1ZpZXdcclxue1xyXG4gIFJlcG9ydEVycm9yVmlldyxcclxuICBTdWNjZXNzUG9zdFZpZXcsXHJcbiAgUG9zdEZhaWxlZFZpZXcgICAgXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtZXJyb3ItcmVwb3J0LXdpbmRvdycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Vycm9yLXJlcG9ydC1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZXJyb3ItcmVwb3J0LW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEVycm9yUmVwb3J0TW9kYWxDb21wb25lbnQgXHJcbntcclxuICBodHRwRXZlbnQ6IEh0dHBFdmVudDxhbnk+O1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBjdXJyZW50V2luZG93TW9kZTogQ3VycmVudFdpbmRvd1ZpZXcgPSBDdXJyZW50V2luZG93Vmlldy5SZXBvcnRFcnJvclZpZXc7XHJcbiAgXHJcbiAgRW1haWw6IHN0cmluZztcclxuICBUb3BpY0xpbms6IHN0cmluZztcclxuICBQb3N0RXJyb3I6IHN0cmluZztcclxuICBQb3N0SXNQcml2YXRlID0gdHJ1ZTtcclxuICBXaW5kb3dUaXRsZSA9IFwiRXJyb3Igb2NjdXJlZFwiO1xyXG4gIFxyXG4gIHB1YmxpYyB3aW5kb3dWaWV3OiB0eXBlb2YgQ3VycmVudFdpbmRvd1ZpZXcgPSBDdXJyZW50V2luZG93VmlldztcclxuXHJcbiAgY29uc3RydWN0b3IobWVzc2FnZVNlcnZpY2U6IEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlLCBwcml2YXRlIHZpZXdlclNlcnZpY2U6IFZpZXdlclNlcnZpY2UpIHtcclxuXHJcbiAgICBtZXNzYWdlU2VydmljZS5odHRwRXZlbnRDaGFuZ2Uuc3Vic2NyaWJlKGh0dHBFdmVudCA9PiB7XHJcbiAgICAgICAgICB0aGlzLmh0dHBFdmVudCA9IGh0dHBFdmVudDtcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5odHRwRXZlbnQgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSlcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmh0dHBFdmVudC5tZXNzYWdlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIGVtYWlsSXNWYWxpZCgpOmJvb2xlYW5cclxuICB7XHJcbiAgICBjb25zdCByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgIHJldHVybiByZS50ZXN0KFN0cmluZyh0aGlzLkVtYWlsKS50b0xvd2VyQ2FzZSgpKTtcclxuICB9XHJcbiAgIFxyXG4gIHJlcG9ydEVycm9yKClcclxuICB7XHJcbiAgICBpZiAodGhpcy5lbWFpbElzVmFsaWQoKSlcclxuICAgIHtcclxuXHJcbiAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XHJcblxyXG4gICAgICBsZXQgcmVxdWVzdCA9IG5ldyBGb3J1bVBvc3RSZXF1ZXN0KCk7XHJcbiAgICAgIHJlcXVlc3QuQ2F0ZWdvcnlJZCA9IEZvcnVtQ2F0ZWdvcnkuVmlld2VyO1xyXG4gICAgICByZXF1ZXN0LkVtYWlsID0gdGhpcy5FbWFpbDtcclxuICAgICAgcmVxdWVzdC5Jc1ByaXZhdGVQb3N0ID0gdGhpcy5Qb3N0SXNQcml2YXRlO1xyXG4gICAgICByZXF1ZXN0LlVzZXJOYW1lID0gdGhpcy5FbWFpbC5zcGxpdCgnQCcpWzBdO1xyXG4gICAgICByZXF1ZXN0LklzU2VuZE5vdGlmaWNhdGlvbiA9IHRydWU7XHJcblxyXG4gICAgICBsZXQgZmlsZVBhcmFtID0gdXJsUGFyYW1zLmdldCgnZmlsZScpO1xyXG5cclxuICAgICAgaWYgKGZpbGVQYXJhbSkgXHJcbiAgICAgIHtcclxuICAgICAgICByZXF1ZXN0LkZvbGRlclBhdGggPSB1cmxQYXJhbXMuZ2V0KCdmaWxlJyk7O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5odHRwRXZlbnQgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSlcclxuICAgICAge1xyXG4gICAgICAgIGxldCBodHRwRXJyb3JSZXNwb25zZSA9ICh0aGlzLmh0dHBFdmVudCBhcyBIdHRwRXJyb3JSZXNwb25zZSk7XHJcblxyXG4gICAgICAgIHJlcXVlc3QuTWVzc2FnZSA9ICByZXF1ZXN0LkV4Y2VwdGlvbk1lc3NhZ2UgPSBodHRwRXJyb3JSZXNwb25zZS5lcnJvci5leGNlcHRpb25NZXNzYWdlO1xyXG4gICAgICAgIHJlcXVlc3QuSW5uZXJFeGNlcHRpb25NZXNzYWdlID0gaHR0cEVycm9yUmVzcG9uc2UuZXJyb3IuaW5uZXJFeGNlcHRpb25NZXNzYWdlO1xyXG4gICAgICAgIHJlcXVlc3QuT3JpZ2luYWxVcmwgPSBodHRwRXJyb3JSZXNwb25zZS51cmw7XHJcblxyXG4gICAgICAgIGlmIChodHRwRXJyb3JSZXNwb25zZS5lcnJvci5leGNlcHRpb25NZXNzYWdlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVxdWVzdC5NZXNzYWdlID0gIHJlcXVlc3QuRXhjZXB0aW9uTWVzc2FnZSA9IGh0dHBFcnJvclJlc3BvbnNlLmVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfWVsc2VcclxuICAgICAge1xyXG4gICAgICAgIHJlcXVlc3QuTWVzc2FnZSA9IFwiVW5rbm93biBlcnJvciBcIiAgKyAodGhpcy5odHRwRXZlbnQgPT0gbnVsbCA/IFwiXCIgOiB0aGlzLmh0dHBFdmVudC50eXBlLnRvU3RyaW5nKCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXF1ZXN0LlRpdGxlID0gXCJWaWV3ZXIgaXNzdWUgLSBcIiArIHJlcXVlc3QuTWVzc2FnZSArIFwiIFwiKyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMudmlld2VyU2VydmljZS5yZXBvcnRFcnJvcihyZXF1ZXN0KS5zdWJzY3JpYmUoKGRhdGE6IEZvcnVtUG9zdFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkIHx8IGRhdGEgPT09IG51bGwpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuUG9zdEVycm9yID0gXCJVbmtub3duIGVycm9yXCI7ICBcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50V2luZG93TW9kZSA9IEN1cnJlbnRXaW5kb3dWaWV3LlBvc3RGYWlsZWRWaWV3O1xyXG4gICAgICAgICAgfWVsc2UgaWYgKChkYXRhLmVycm9yIT09XCJcIiAmJiBkYXRhLmVycm9yICE9PSBudWxsKSlcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Qb3N0RXJyb3IgPSBkYXRhLmVycm9yOyAgXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFdpbmRvd01vZGUgPSBDdXJyZW50V2luZG93Vmlldy5Qb3N0RmFpbGVkVmlldztcclxuICAgICAgICAgIH1lbHNlIGlmIChkYXRhLnVybCE9PVwiXCIgJiYgZGF0YS51cmwgIT09IG51bGwpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuVG9waWNMaW5rID0gZGF0YS51cmw7XHJcbiAgICAgICAgICAgIHRoaXMuV2luZG93VGl0bGUgPSBcIkVycm9yIHJlcG9ydGVkIVwiO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRXaW5kb3dNb2RlID0gQ3VycmVudFdpbmRvd1ZpZXcuU3VjY2Vzc1Bvc3RWaWV3O1xyXG4gICAgICAgICAgfWVsc2VcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Qb3N0RXJyb3IgPSBcIlVua25vd24gZXJyb3JcIjsgIFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRXaW5kb3dNb2RlID0gQ3VycmVudFdpbmRvd1ZpZXcuUG9zdEZhaWxlZFZpZXc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=