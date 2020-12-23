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
                        _this._modalService.open(CommonModals.ErrorMessage);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9lcnJvci1pbnRlcmNlcHRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBdUQsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RyxPQUFPLEVBQWEsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxZQUFZLEVBQUUsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFFM0Q7SUFLRSxpQ0FBb0IsYUFBMkIsRUFBVSxlQUF3QztRQUE3RSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUF5QjtJQUNqRyxDQUFDOzs7Ozs7SUFFRCwyQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQXFCLEVBQUUsSUFBaUI7UUFBbEQsaUJBc0NDOztZQXJDTyxTQUFTLEdBQUcsa0NBQWtDO1FBRXBELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDcEIsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUk7WUFDVixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7UUFBQyxVQUFDLFNBQXlCO1lBQ25DLElBQUksU0FBUyxZQUFZLGlCQUFpQixFQUFFO2dCQUMxQyxRQUFRLFNBQVMsQ0FBQyxNQUFNLEVBQUU7b0JBRXhCLEtBQUssU0FBUyxDQUFDLFVBQVU7d0JBQ3ZCLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQy9DLE1BQU07b0JBQ1IsS0FBSyxTQUFTLENBQUMsWUFBWTt3QkFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDaEQsTUFBTTtvQkFDUixLQUFLLFNBQVMsQ0FBQyxRQUFRO3dCQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUM3QyxNQUFNO29CQUNSLEtBQUssU0FBUyxDQUFDLE9BQU87d0JBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQzNDLE1BQU07b0JBQ1IsS0FBSyxTQUFTLENBQUMsbUJBQW1CO3dCQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUMzQyxLQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUM1RCxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQ25ELE1BQU07b0JBRVIsS0FBSyxTQUFTLENBQUMsU0FBUzt3QkFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDN0MsS0FBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDNUQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7d0JBQ3ZELE1BQU07aUJBQ1Q7YUFDRjtZQUNELE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDVixDQUFDOztnQkE5Q0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKcUIsWUFBWTtnQkFGMUIsdUJBQXVCOzs7a0NBSi9CO0NBdURDLEFBL0NELElBK0NDO1NBNUNZLHVCQUF1Qjs7Ozs7O0lBRXRCLGdEQUFtQzs7Ozs7SUFBRSxrREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge09ic2VydmFibGUsIHRocm93RXJyb3J9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge2NhdGNoRXJyb3IsIG1hcH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQge0V4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9leGNlcHRpb24tbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0h0dHBFcnJvcn0gZnJvbSBcIi4vZmlsZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbW1vbk1vZGFscywgTW9kYWxTZXJ2aWNlfSBmcm9tIFwiLi9tb2RhbC5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSwgcHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlKSB7XG4gIH1cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBjb25zdCBsb2dGb3JtYXQgPSAnYmFja2dyb3VuZDogbWFyb29uOyBjb2xvcjogd2hpdGUnO1xuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSlcbiAgICAgIC5waXBlKG1hcChkYXRhID0+IHtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoKGV4Y2VwdGlvbjogSHR0cEV2ZW50PGFueT4pID0+IHtcbiAgICAgICAgICBpZiAoZXhjZXB0aW9uIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXhjZXB0aW9uLnN0YXR1cykge1xuXG4gICAgICAgICAgICAgIGNhc2UgSHR0cEVycm9yLkJhZFJlcXVlc3Q6XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignJWMgQmFkIFJlcXVlc3QgNDAwJywgbG9nRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBIdHRwRXJyb3IuVW5hdXRob3JpemVkOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyVjIFVuYXV0aG9yaXplZCA0MDEnLCBsb2dGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIEh0dHBFcnJvci5Ob3RGb3VuZDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCclYyBOb3QgRm91bmQgNDA0JywgbG9nRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBIdHRwRXJyb3IuVGltZU91dDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCclYyBUaW1lT3V0IDQwOCcsIGxvZ0Zvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgSHR0cEVycm9yLkludGVybmFsU2VydmVyRXJyb3I6XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignJWMgYmlnIGJhZCA1MDAnLCBsb2dGb3JtYXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmNoYW5nZU1lc3NhZ2UoZXhjZXB0aW9uLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5FcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgSHR0cEVycm9yLkZvcmJpZGRlbjpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCclYyBGb3JiaWRkZW4gNDAzJywgbG9nRm9ybWF0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5jaGFuZ2VNZXNzYWdlKGV4Y2VwdGlvbi5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuUGFzc3dvcmRSZXF1aXJlZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGV4Y2VwdGlvbik7XG4gICAgICAgIH0pKTtcbiAgfVxufVxuIl19