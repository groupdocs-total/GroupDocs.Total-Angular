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
                        _this.showErrorWindowModal(logFormat, exception);
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
    /**
     * @param {?} logFormat
     * @param {?} exception
     * @return {?}
     */
    ErrorInterceptorService.prototype.showErrorWindowModal = /**
     * @param {?} logFormat
     * @param {?} exception
     * @return {?}
     */
    function (logFormat, exception) {
        this._messageService.changeMessage(exception.error.message);
        this._modalService.open(CommonModals.ErrorMessage);
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9lcnJvci1pbnRlcmNlcHRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBdUQsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RyxPQUFPLEVBQWEsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxZQUFZLEVBQUUsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFFM0Q7SUFLRSxpQ0FBb0IsYUFBMkIsRUFBVSxlQUF3QztRQUE3RSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUF5QjtJQUNqRyxDQUFDOzs7Ozs7SUFFRCwyQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQXFCLEVBQUUsSUFBaUI7UUFBbEQsaUJBcUNDOztZQXBDTyxTQUFTLEdBQUcsa0NBQWtDO1FBRXBELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDcEIsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUk7WUFDVixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7UUFBQyxVQUFDLFNBQXlCO1lBQ25DLElBQUksU0FBUyxZQUFZLGlCQUFpQixFQUFFO2dCQUMxQyxRQUFRLFNBQVMsQ0FBQyxNQUFNLEVBQUU7b0JBRXhCLEtBQUssU0FBUyxDQUFDLFVBQVU7d0JBQ3ZCLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQy9DLE1BQU07b0JBQ1IsS0FBSyxTQUFTLENBQUMsWUFBWTt3QkFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDaEQsTUFBTTtvQkFDUixLQUFLLFNBQVMsQ0FBQyxRQUFRO3dCQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUM3QyxNQUFNO29CQUNSLEtBQUssU0FBUyxDQUFDLE9BQU87d0JBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQzNDLE1BQU07b0JBQ1IsS0FBSyxTQUFTLENBQUMsbUJBQW1CO3dCQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUMzQyxLQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUNoRCxNQUFNO29CQUVSLEtBQUssU0FBUyxDQUFDLFNBQVM7d0JBQ3RCLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQzdDLEtBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQzVELEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUN2RCxNQUFNO2lCQUNUO2FBQ0Y7WUFDRCxPQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7Ozs7O0lBRUQsc0RBQW9COzs7OztJQUFwQixVQUFxQixTQUFpQixFQUFFLFNBQVM7UUFDL0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBbERGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSnFCLFlBQVk7Z0JBRjFCLHVCQUF1Qjs7O2tDQUovQjtDQTJEQyxBQW5ERCxJQW1EQztTQWhEWSx1QkFBdUI7Ozs7OztJQUV0QixnREFBbUM7Ozs7O0lBQUUsa0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgdGhyb3dFcnJvcn0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQge0V4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9leGNlcHRpb24tbWVzc2FnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SHR0cEVycm9yfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb21tb25Nb2RhbHMsIE1vZGFsU2VydmljZX0gZnJvbSBcIi4vbW9kYWwuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSwgcHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgIGNvbnN0IGxvZ0Zvcm1hdCA9ICdiYWNrZ3JvdW5kOiBtYXJvb247IGNvbG9yOiB3aGl0ZSc7XHJcblxyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSlcclxuICAgICAgLnBpcGUobWFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoZXhjZXB0aW9uOiBIdHRwRXZlbnQ8YW55PikgPT4ge1xyXG4gICAgICAgICAgaWYgKGV4Y2VwdGlvbiBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXhjZXB0aW9uLnN0YXR1cykge1xyXG5cclxuICAgICAgICAgICAgICBjYXNlIEh0dHBFcnJvci5CYWRSZXF1ZXN0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignJWMgQmFkIFJlcXVlc3QgNDAwJywgbG9nRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgSHR0cEVycm9yLlVuYXV0aG9yaXplZDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyVjIFVuYXV0aG9yaXplZCA0MDEnLCBsb2dGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSBIdHRwRXJyb3IuTm90Rm91bmQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCclYyBOb3QgRm91bmQgNDA0JywgbG9nRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgSHR0cEVycm9yLlRpbWVPdXQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCclYyBUaW1lT3V0IDQwOCcsIGxvZ0Zvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlIEh0dHBFcnJvci5JbnRlcm5hbFNlcnZlckVycm9yOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignJWMgYmlnIGJhZCA1MDAnLCBsb2dGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JXaW5kb3dNb2RhbChsb2dGb3JtYXQsIGV4Y2VwdGlvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgY2FzZSBIdHRwRXJyb3IuRm9yYmlkZGVuOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignJWMgRm9yYmlkZGVuIDQwMycsIGxvZ0Zvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5jaGFuZ2VNZXNzYWdlKGV4Y2VwdGlvbi5lcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5QYXNzd29yZFJlcXVpcmVkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihleGNlcHRpb24pO1xyXG4gICAgICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHNob3dFcnJvcldpbmRvd01vZGFsKGxvZ0Zvcm1hdDogc3RyaW5nLCBleGNlcHRpb24pIHtcclxuICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmNoYW5nZU1lc3NhZ2UoZXhjZXB0aW9uLmVycm9yLm1lc3NhZ2UpO1xyXG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkVycm9yTWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==