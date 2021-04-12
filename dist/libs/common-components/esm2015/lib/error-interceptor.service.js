/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ExceptionMessageService } from "./exception-message.service";
import { HttpError } from "./file.service";
import { CommonModals, ModalService } from "./modal.service";
import * as i0 from "@angular/core";
import * as i1 from "./modal.service";
import * as i2 from "./exception-message.service";
export class ErrorInterceptorService {
    /**
     * @param {?} _modalService
     * @param {?} _messageService
     */
    constructor(_modalService, _messageService) {
        this._modalService = _modalService;
        this._messageService = _messageService;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        /** @type {?} */
        const logFormat = 'background: maroon; color: white';
        return next.handle(req)
            .pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            return data;
        })), catchError((/**
         * @param {?} exception
         * @return {?}
         */
        (exception) => {
            if (exception instanceof HttpErrorResponse) {
                switch (exception.status) {
                    case HttpError.BadRequest:
                        console.error('%c Bad Request 400', logFormat);
                        break;
                    case HttpError.Unauthorized:
                        console.error('%c Unauthorized 401', logFormat);
                        break;
                    case HttpError.NotFound:
                        console.error('%c Not Found 404', logFormat);
                        break;
                    case HttpError.TimeOut:
                        console.error('%c TimeOut 408', logFormat);
                        break;
                    case HttpError.InternalServerError:
                        console.error('%c big bad 500', logFormat);
                        this._messageService.changeMessage(exception.error.message);
                        this._messageService.changeHttpEvent(exception);
                        this._modalService.open(ErrorInterceptorService.ErrorMessageWindowName);
                        break;
                    case HttpError.Forbidden:
                        console.error('%c Forbidden 403', logFormat);
                        this._messageService.changeMessage(exception.error.message);
                        this._modalService.open(CommonModals.PasswordRequired);
                        break;
                }
            }
            return throwError(exception);
        })));
    }
}
ErrorInterceptorService.ErrorMessageWindowName = CommonModals.ErrorMessage;
ErrorInterceptorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ErrorInterceptorService.ctorParameters = () => [
    { type: ModalService },
    { type: ExceptionMessageService }
];
/** @nocollapse */ ErrorInterceptorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ErrorInterceptorService_Factory() { return new ErrorInterceptorService(i0.ɵɵinject(i1.ModalService), i0.ɵɵinject(i2.ExceptionMessageService)); }, token: ErrorInterceptorService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ErrorInterceptorService.ErrorMessageWindowName;
    /**
     * @type {?}
     * @private
     */
    ErrorInterceptorService.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    ErrorInterceptorService.prototype._messageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9lcnJvci1pbnRlcmNlcHRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBdUQsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RyxPQUFPLEVBQWEsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxZQUFZLEVBQUUsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFLM0QsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFJbEMsWUFBb0IsYUFBMkIsRUFBVSxlQUF3QztRQUE3RSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUF5QjtJQUNqRyxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjs7Y0FDMUMsU0FBUyxHQUFHLGtDQUFrQztRQUVwRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ3BCLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7UUFBQyxDQUFDLFNBQXlCLEVBQUUsRUFBRTtZQUN2QyxJQUFJLFNBQVMsWUFBWSxpQkFBaUIsRUFBRTtnQkFDMUMsUUFBUSxTQUFTLENBQUMsTUFBTSxFQUFFO29CQUV4QixLQUFLLFNBQVMsQ0FBQyxVQUFVO3dCQUN2QixPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUMvQyxNQUFNO29CQUNSLEtBQUssU0FBUyxDQUFDLFlBQVk7d0JBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQ2hELE1BQU07b0JBQ1IsS0FBSyxTQUFTLENBQUMsUUFBUTt3QkFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDN0MsTUFBTTtvQkFDUixLQUFLLFNBQVMsQ0FBQyxPQUFPO3dCQUNwQixPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUMzQyxNQUFNO29CQUNSLEtBQUssU0FBUyxDQUFDLG1CQUFtQjt3QkFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDNUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLHNCQUFzQixDQUFDLENBQUM7d0JBQ3hFLE1BQU07b0JBRVIsS0FBSyxTQUFTLENBQUMsU0FBUzt3QkFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDNUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7d0JBQ3ZELE1BQU07aUJBQ1Q7YUFDRjtZQUNELE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDVixDQUFDOztBQTVDYSw4Q0FBc0IsR0FBVSxZQUFZLENBQUMsWUFBWSxDQUFDOztZQUx6RSxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKcUIsWUFBWTtZQUYxQix1QkFBdUI7Ozs7O0lBUzdCLCtDQUF3RTs7Ozs7SUFFNUQsZ0RBQW1DOzs7OztJQUFFLGtEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cEVycm9yUmVzcG9uc2UsIEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3R9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQge09ic2VydmFibGUsIHRocm93RXJyb3J9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHtFeGNlcHRpb25NZXNzYWdlU2VydmljZX0gZnJvbSBcIi4vZXhjZXB0aW9uLW1lc3NhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge0h0dHBFcnJvcn0gZnJvbSBcIi4vZmlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29tbW9uTW9kYWxzLCBNb2RhbFNlcnZpY2V9IGZyb20gXCIuL21vZGFsLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBFcnJvck1lc3NhZ2VXaW5kb3dOYW1lOnN0cmluZyA9IENvbW1vbk1vZGFscy5FcnJvck1lc3NhZ2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLCBwcml2YXRlIF9tZXNzYWdlU2VydmljZTogRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgY29uc3QgbG9nRm9ybWF0ID0gJ2JhY2tncm91bmQ6IG1hcm9vbjsgY29sb3I6IHdoaXRlJztcclxuXHJcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKVxyXG4gICAgICAucGlwZShtYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBjYXRjaEVycm9yKChleGNlcHRpb246IEh0dHBFdmVudDxhbnk+KSA9PiB7XHJcbiAgICAgICAgICBpZiAoZXhjZXB0aW9uIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChleGNlcHRpb24uc3RhdHVzKSB7XHJcblxyXG4gICAgICAgICAgICAgIGNhc2UgSHR0cEVycm9yLkJhZFJlcXVlc3Q6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCclYyBCYWQgUmVxdWVzdCA0MDAnLCBsb2dGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSBIdHRwRXJyb3IuVW5hdXRob3JpemVkOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignJWMgVW5hdXRob3JpemVkIDQwMScsIGxvZ0Zvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlIEh0dHBFcnJvci5Ob3RGb3VuZDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyVjIE5vdCBGb3VuZCA0MDQnLCBsb2dGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSBIdHRwRXJyb3IuVGltZU91dDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyVjIFRpbWVPdXQgNDA4JywgbG9nRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgSHR0cEVycm9yLkludGVybmFsU2VydmVyRXJyb3I6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCclYyBiaWcgYmFkIDUwMCcsIGxvZ0Zvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5jaGFuZ2VNZXNzYWdlKGV4Y2VwdGlvbi5lcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmNoYW5nZUh0dHBFdmVudChleGNlcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UuRXJyb3JNZXNzYWdlV2luZG93TmFtZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgY2FzZSBIdHRwRXJyb3IuRm9yYmlkZGVuOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignJWMgRm9yYmlkZGVuIDQwMycsIGxvZ0Zvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5jaGFuZ2VNZXNzYWdlKGV4Y2VwdGlvbi5lcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5QYXNzd29yZFJlcXVpcmVkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihleGNlcHRpb24pO1xyXG4gICAgICAgIH0pKTtcclxuICB9XHJcbn1cclxuIl19