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
var ErrorInterceptorService = /** @class */ (function () {
    function ErrorInterceptorService(_modalService, _messageService) {
        this._modalService = _modalService;
        this._messageService = _messageService;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    ErrorInterceptorService.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        var _this = this;
        /** @type {?} */
        var logFormat = 'background: maroon; color: white';
        return next.handle(req)
            .pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return data;
        })), catchError((/**
         * @param {?} exception
         * @return {?}
         */
        function (exception) {
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
                        _this._messageService.changeMessage(exception.error.message);
                        _this._messageService.changeHttpEvent(exception);
                        _this._modalService.open(ErrorInterceptorService.ErrorMessageWindowName);
                        break;
                    case HttpError.Forbidden:
                        console.error('%c Forbidden 403', logFormat);
                        _this._messageService.changeMessage(exception.error.message);
                        _this._modalService.open(CommonModals.PasswordRequired);
                        break;
                }
            }
            return throwError(exception);
        })));
    };
    ErrorInterceptorService.ErrorMessageWindowName = CommonModals.ErrorMessage;
    ErrorInterceptorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ErrorInterceptorService.ctorParameters = function () { return [
        { type: ModalService },
        { type: ExceptionMessageService }
    ]; };
    /** @nocollapse */ ErrorInterceptorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ErrorInterceptorService_Factory() { return new ErrorInterceptorService(i0.ɵɵinject(i1.ModalService), i0.ɵɵinject(i2.ExceptionMessageService)); }, token: ErrorInterceptorService, providedIn: "root" });
    return ErrorInterceptorService;
}());
export { ErrorInterceptorService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9lcnJvci1pbnRlcmNlcHRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBdUQsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RyxPQUFPLEVBQWEsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxZQUFZLEVBQUUsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFFM0Q7SUFPRSxpQ0FBb0IsYUFBMkIsRUFBVSxlQUF3QztRQUE3RSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUF5QjtJQUNqRyxDQUFDOzs7Ozs7SUFFRCwyQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQXFCLEVBQUUsSUFBaUI7UUFBbEQsaUJBdUNDOztZQXRDTyxTQUFTLEdBQUcsa0NBQWtDO1FBRXBELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDcEIsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUk7WUFDVixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7UUFBQyxVQUFDLFNBQXlCO1lBQ25DLElBQUksU0FBUyxZQUFZLGlCQUFpQixFQUFFO2dCQUMxQyxRQUFRLFNBQVMsQ0FBQyxNQUFNLEVBQUU7b0JBRXhCLEtBQUssU0FBUyxDQUFDLFVBQVU7d0JBQ3ZCLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQy9DLE1BQU07b0JBQ1IsS0FBSyxTQUFTLENBQUMsWUFBWTt3QkFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDaEQsTUFBTTtvQkFDUixLQUFLLFNBQVMsQ0FBQyxRQUFRO3dCQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUM3QyxNQUFNO29CQUNSLEtBQUssU0FBUyxDQUFDLE9BQU87d0JBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQzNDLE1BQU07b0JBQ1IsS0FBSyxTQUFTLENBQUMsbUJBQW1CO3dCQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUMzQyxLQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUM1RCxLQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDaEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsc0JBQXNCLENBQUMsQ0FBQzt3QkFDeEUsTUFBTTtvQkFFUixLQUFLLFNBQVMsQ0FBQyxTQUFTO3dCQUN0QixPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUM3QyxLQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUM1RCxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt3QkFDdkQsTUFBTTtpQkFDVDthQUNGO1lBQ0QsT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUE1Q2EsOENBQXNCLEdBQVUsWUFBWSxDQUFDLFlBQVksQ0FBQzs7Z0JBTHpFLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSnFCLFlBQVk7Z0JBRjFCLHVCQUF1Qjs7O2tDQUovQjtDQTBEQyxBQWxERCxJQWtEQztTQS9DWSx1QkFBdUI7OztJQUVsQywrQ0FBd0U7Ozs7O0lBRTVELGdEQUFtQzs7Ozs7SUFBRSxrREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHBFcnJvclJlc3BvbnNlLCBIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlLCB0aHJvd0Vycm9yfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQge2NhdGNoRXJyb3IsIG1hcH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7RXhjZXB0aW9uTWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL2V4Y2VwdGlvbi1tZXNzYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIdHRwRXJyb3J9IGZyb20gXCIuL2ZpbGUuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbW1vbk1vZGFscywgTW9kYWxTZXJ2aWNlfSBmcm9tIFwiLi9tb2RhbC5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFcnJvckludGVyY2VwdG9yU2VydmljZSBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgRXJyb3JNZXNzYWdlV2luZG93TmFtZTpzdHJpbmcgPSBDb21tb25Nb2RhbHMuRXJyb3JNZXNzYWdlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSwgcHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgIGNvbnN0IGxvZ0Zvcm1hdCA9ICdiYWNrZ3JvdW5kOiBtYXJvb247IGNvbG9yOiB3aGl0ZSc7XHJcblxyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSlcclxuICAgICAgLnBpcGUobWFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoZXhjZXB0aW9uOiBIdHRwRXZlbnQ8YW55PikgPT4ge1xyXG4gICAgICAgICAgaWYgKGV4Y2VwdGlvbiBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXhjZXB0aW9uLnN0YXR1cykge1xyXG5cclxuICAgICAgICAgICAgICBjYXNlIEh0dHBFcnJvci5CYWRSZXF1ZXN0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignJWMgQmFkIFJlcXVlc3QgNDAwJywgbG9nRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgSHR0cEVycm9yLlVuYXV0aG9yaXplZDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyVjIFVuYXV0aG9yaXplZCA0MDEnLCBsb2dGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSBIdHRwRXJyb3IuTm90Rm91bmQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCclYyBOb3QgRm91bmQgNDA0JywgbG9nRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgSHR0cEVycm9yLlRpbWVPdXQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCclYyBUaW1lT3V0IDQwOCcsIGxvZ0Zvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlIEh0dHBFcnJvci5JbnRlcm5hbFNlcnZlckVycm9yOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignJWMgYmlnIGJhZCA1MDAnLCBsb2dGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuY2hhbmdlTWVzc2FnZShleGNlcHRpb24uZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5jaGFuZ2VIdHRwRXZlbnQoZXhjZXB0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLkVycm9yTWVzc2FnZVdpbmRvd05hbWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgIGNhc2UgSHR0cEVycm9yLkZvcmJpZGRlbjpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyVjIEZvcmJpZGRlbiA0MDMnLCBsb2dGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuY2hhbmdlTWVzc2FnZShleGNlcHRpb24uZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuUGFzc3dvcmRSZXF1aXJlZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXhjZXB0aW9uKTtcclxuICAgICAgICB9KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==