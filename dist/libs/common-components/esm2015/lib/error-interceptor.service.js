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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9lcnJvci1pbnRlcmNlcHRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBdUQsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RyxPQUFPLEVBQWEsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxZQUFZLEVBQUUsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFLM0QsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFJbEMsWUFBb0IsYUFBMkIsRUFBVSxlQUF3QztRQUE3RSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUF5QjtJQUNqRyxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjs7Y0FDMUMsU0FBUyxHQUFHLGtDQUFrQztRQUVwRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ3BCLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7UUFBQyxDQUFDLFNBQXlCLEVBQUUsRUFBRTtZQUN2QyxJQUFJLFNBQVMsWUFBWSxpQkFBaUIsRUFBRTtnQkFDMUMsUUFBUSxTQUFTLENBQUMsTUFBTSxFQUFFO29CQUV4QixLQUFLLFNBQVMsQ0FBQyxVQUFVO3dCQUN2QixPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUMvQyxNQUFNO29CQUNSLEtBQUssU0FBUyxDQUFDLFlBQVk7d0JBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQ2hELE1BQU07b0JBQ1IsS0FBSyxTQUFTLENBQUMsUUFBUTt3QkFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDN0MsTUFBTTtvQkFDUixLQUFLLFNBQVMsQ0FBQyxPQUFPO3dCQUNwQixPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUMzQyxNQUFNO29CQUNSLEtBQUssU0FBUyxDQUFDLG1CQUFtQjt3QkFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDNUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLHNCQUFzQixDQUFDLENBQUM7d0JBQ3hFLE1BQU07b0JBRVIsS0FBSyxTQUFTLENBQUMsU0FBUzt3QkFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDNUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7d0JBQ3ZELE1BQU07aUJBQ1Q7YUFDRjtZQUNELE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDVixDQUFDOztBQTVDYSw4Q0FBc0IsR0FBVSxZQUFZLENBQUMsWUFBWSxDQUFDOztZQUx6RSxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKcUIsWUFBWTtZQUYxQix1QkFBdUI7Ozs7O0lBUzdCLCtDQUF3RTs7Ozs7SUFFNUQsZ0RBQW1DOzs7OztJQUFFLGtEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBFcnJvclJlc3BvbnNlLCBIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgdGhyb3dFcnJvcn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7RXhjZXB0aW9uTWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL2V4Y2VwdGlvbi1tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7SHR0cEVycm9yfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29tbW9uTW9kYWxzLCBNb2RhbFNlcnZpY2V9IGZyb20gXCIuL21vZGFsLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gIHB1YmxpYyBzdGF0aWMgRXJyb3JNZXNzYWdlV2luZG93TmFtZTpzdHJpbmcgPSBDb21tb25Nb2RhbHMuRXJyb3JNZXNzYWdlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLCBwcml2YXRlIF9tZXNzYWdlU2VydmljZTogRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UpIHtcbiAgfVxuXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGNvbnN0IGxvZ0Zvcm1hdCA9ICdiYWNrZ3JvdW5kOiBtYXJvb247IGNvbG9yOiB3aGl0ZSc7XG5cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKVxuICAgICAgLnBpcGUobWFwKGRhdGEgPT4ge1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXhjZXB0aW9uOiBIdHRwRXZlbnQ8YW55PikgPT4ge1xuICAgICAgICAgIGlmIChleGNlcHRpb24gaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgICAgICAgc3dpdGNoIChleGNlcHRpb24uc3RhdHVzKSB7XG5cbiAgICAgICAgICAgICAgY2FzZSBIdHRwRXJyb3IuQmFkUmVxdWVzdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCclYyBCYWQgUmVxdWVzdCA0MDAnLCBsb2dGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIEh0dHBFcnJvci5VbmF1dGhvcml6ZWQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignJWMgVW5hdXRob3JpemVkIDQwMScsIGxvZ0Zvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgSHR0cEVycm9yLk5vdEZvdW5kOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyVjIE5vdCBGb3VuZCA0MDQnLCBsb2dGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIEh0dHBFcnJvci5UaW1lT3V0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyVjIFRpbWVPdXQgNDA4JywgbG9nRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBIdHRwRXJyb3IuSW50ZXJuYWxTZXJ2ZXJFcnJvcjpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCclYyBiaWcgYmFkIDUwMCcsIGxvZ0Zvcm1hdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuY2hhbmdlTWVzc2FnZShleGNlcHRpb24uZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuY2hhbmdlSHR0cEV2ZW50KGV4Y2VwdGlvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UuRXJyb3JNZXNzYWdlV2luZG93TmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSBIdHRwRXJyb3IuRm9yYmlkZGVuOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyVjIEZvcmJpZGRlbiA0MDMnLCBsb2dGb3JtYXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmNoYW5nZU1lc3NhZ2UoZXhjZXB0aW9uLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5QYXNzd29yZFJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXhjZXB0aW9uKTtcbiAgICAgICAgfSkpO1xuICB9XG59XG4iXX0=