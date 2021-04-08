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
                        this.showErrorWindowModal(logFormat, exception);
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
    /**
     * @param {?} logFormat
     * @param {?} exception
     * @return {?}
     */
    showErrorWindowModal(logFormat, exception) {
        this._messageService.changeMessage(exception.error.message);
        this._modalService.open(CommonModals.ErrorMessage);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9lcnJvci1pbnRlcmNlcHRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBdUQsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RyxPQUFPLEVBQWEsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxZQUFZLEVBQUUsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFLM0QsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFFbEMsWUFBb0IsYUFBMkIsRUFBVSxlQUF3QztRQUE3RSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUF5QjtJQUNqRyxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjs7Y0FDMUMsU0FBUyxHQUFHLGtDQUFrQztRQUVwRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ3BCLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7UUFBQyxDQUFDLFNBQXlCLEVBQUUsRUFBRTtZQUN2QyxJQUFJLFNBQVMsWUFBWSxpQkFBaUIsRUFBRTtnQkFDMUMsUUFBUSxTQUFTLENBQUMsTUFBTSxFQUFFO29CQUV4QixLQUFLLFNBQVMsQ0FBQyxVQUFVO3dCQUN2QixPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUMvQyxNQUFNO29CQUNSLEtBQUssU0FBUyxDQUFDLFlBQVk7d0JBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQ2hELE1BQU07b0JBQ1IsS0FBSyxTQUFTLENBQUMsUUFBUTt3QkFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDN0MsTUFBTTtvQkFDUixLQUFLLFNBQVMsQ0FBQyxPQUFPO3dCQUNwQixPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUMzQyxNQUFNO29CQUNSLEtBQUssU0FBUyxDQUFDLG1CQUFtQjt3QkFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDaEQsTUFBTTtvQkFFUixLQUFLLFNBQVMsQ0FBQyxTQUFTO3dCQUN0QixPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUM3QyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUM1RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt3QkFDdkQsTUFBTTtpQkFDVDthQUNGO1lBQ0QsT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7Ozs7OztJQUVELG9CQUFvQixDQUFDLFNBQWlCLEVBQUUsU0FBUztRQUMvQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7WUFsREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSnFCLFlBQVk7WUFGMUIsdUJBQXVCOzs7Ozs7OztJQVNqQixnREFBbUM7Ozs7O0lBQUUsa0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgdGhyb3dFcnJvcn0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQge0V4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9leGNlcHRpb24tbWVzc2FnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SHR0cEVycm9yfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb21tb25Nb2RhbHMsIE1vZGFsU2VydmljZX0gZnJvbSBcIi4vbW9kYWwuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSwgcHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgIGNvbnN0IGxvZ0Zvcm1hdCA9ICdiYWNrZ3JvdW5kOiBtYXJvb247IGNvbG9yOiB3aGl0ZSc7XHJcblxyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSlcclxuICAgICAgLnBpcGUobWFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoZXhjZXB0aW9uOiBIdHRwRXZlbnQ8YW55PikgPT4ge1xyXG4gICAgICAgICAgaWYgKGV4Y2VwdGlvbiBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXhjZXB0aW9uLnN0YXR1cykge1xyXG5cclxuICAgICAgICAgICAgICBjYXNlIEh0dHBFcnJvci5CYWRSZXF1ZXN0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignJWMgQmFkIFJlcXVlc3QgNDAwJywgbG9nRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgSHR0cEVycm9yLlVuYXV0aG9yaXplZDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyVjIFVuYXV0aG9yaXplZCA0MDEnLCBsb2dGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSBIdHRwRXJyb3IuTm90Rm91bmQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCclYyBOb3QgRm91bmQgNDA0JywgbG9nRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgSHR0cEVycm9yLlRpbWVPdXQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCclYyBUaW1lT3V0IDQwOCcsIGxvZ0Zvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlIEh0dHBFcnJvci5JbnRlcm5hbFNlcnZlckVycm9yOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignJWMgYmlnIGJhZCA1MDAnLCBsb2dGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JXaW5kb3dNb2RhbChsb2dGb3JtYXQsIGV4Y2VwdGlvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgY2FzZSBIdHRwRXJyb3IuRm9yYmlkZGVuOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignJWMgRm9yYmlkZGVuIDQwMycsIGxvZ0Zvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5jaGFuZ2VNZXNzYWdlKGV4Y2VwdGlvbi5lcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5QYXNzd29yZFJlcXVpcmVkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihleGNlcHRpb24pO1xyXG4gICAgICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHNob3dFcnJvcldpbmRvd01vZGFsKGxvZ0Zvcm1hdDogc3RyaW5nLCBleGNlcHRpb24pIHtcclxuICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmNoYW5nZU1lc3NhZ2UoZXhjZXB0aW9uLmVycm9yLm1lc3NhZ2UpO1xyXG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkVycm9yTWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==