import * as tslib_1 from "tslib";
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
let ErrorInterceptorService = class ErrorInterceptorService {
    constructor(_modalService, _messageService) {
        this._modalService = _modalService;
        this._messageService = _messageService;
    }
    intercept(req, next) {
        const logFormat = 'background: maroon; color: white';
        return next.handle(req)
            .pipe(map(data => {
            return data;
        }), catchError((exception) => {
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
                        this._modalService.open(CommonModals.ErrorMessage);
                        break;
                    case HttpError.Forbidden:
                        console.error('%c Forbidden 403', logFormat);
                        this._messageService.changeMessage(exception.error.message);
                        this._modalService.open(CommonModals.PasswordRequired);
                        break;
                }
            }
            return throwError(exception);
        }));
    }
};
ErrorInterceptorService.ngInjectableDef = i0.defineInjectable({ factory: function ErrorInterceptorService_Factory() { return new ErrorInterceptorService(i0.inject(i1.ModalService), i0.inject(i2.ExceptionMessageService)); }, token: ErrorInterceptorService, providedIn: "root" });
ErrorInterceptorService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [ModalService, ExceptionMessageService])
], ErrorInterceptorService);
export { ErrorInterceptorService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9lcnJvci1pbnRlcmNlcHRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBdUQsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RyxPQUFPLEVBQWEsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxZQUFZLEVBQUUsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFLM0QsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFFbEMsWUFBb0IsYUFBMkIsRUFBVSxlQUF3QztRQUE3RSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUF5QjtJQUNqRyxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7UUFDaEQsTUFBTSxTQUFTLEdBQUcsa0NBQWtDLENBQUM7UUFFckQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsQ0FBQyxTQUF5QixFQUFFLEVBQUU7WUFDdkMsSUFBSSxTQUFTLFlBQVksaUJBQWlCLEVBQUU7Z0JBQzFDLFFBQVEsU0FBUyxDQUFDLE1BQU0sRUFBRTtvQkFFeEIsS0FBSyxTQUFTLENBQUMsVUFBVTt3QkFDdkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDL0MsTUFBTTtvQkFDUixLQUFLLFNBQVMsQ0FBQyxZQUFZO3dCQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUNoRCxNQUFNO29CQUNSLEtBQUssU0FBUyxDQUFDLFFBQVE7d0JBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQzdDLE1BQU07b0JBQ1IsS0FBSyxTQUFTLENBQUMsT0FBTzt3QkFDcEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDM0MsTUFBTTtvQkFDUixLQUFLLFNBQVMsQ0FBQyxtQkFBbUI7d0JBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQzNDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQzVELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDbkQsTUFBTTtvQkFFUixLQUFLLFNBQVMsQ0FBQyxTQUFTO3dCQUN0QixPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUM3QyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUM1RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt3QkFDdkQsTUFBTTtpQkFDVDthQUNGO1lBQ0QsT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7Q0FDRixDQUFBOztBQTVDWSx1QkFBdUI7SUFIbkMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQzs2Q0FHbUMsWUFBWSxFQUEyQix1QkFBdUI7R0FGdEYsdUJBQXVCLENBNENuQztTQTVDWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge09ic2VydmFibGUsIHRocm93RXJyb3J9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge2NhdGNoRXJyb3IsIG1hcH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQge0V4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9leGNlcHRpb24tbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0h0dHBFcnJvcn0gZnJvbSBcIi4vZmlsZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbW1vbk1vZGFscywgTW9kYWxTZXJ2aWNlfSBmcm9tIFwiLi9tb2RhbC5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSwgcHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlKSB7XG4gIH1cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBjb25zdCBsb2dGb3JtYXQgPSAnYmFja2dyb3VuZDogbWFyb29uOyBjb2xvcjogd2hpdGUnO1xuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSlcbiAgICAgIC5waXBlKG1hcChkYXRhID0+IHtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoKGV4Y2VwdGlvbjogSHR0cEV2ZW50PGFueT4pID0+IHtcbiAgICAgICAgICBpZiAoZXhjZXB0aW9uIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXhjZXB0aW9uLnN0YXR1cykge1xuXG4gICAgICAgICAgICAgIGNhc2UgSHR0cEVycm9yLkJhZFJlcXVlc3Q6XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignJWMgQmFkIFJlcXVlc3QgNDAwJywgbG9nRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBIdHRwRXJyb3IuVW5hdXRob3JpemVkOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyVjIFVuYXV0aG9yaXplZCA0MDEnLCBsb2dGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIEh0dHBFcnJvci5Ob3RGb3VuZDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCclYyBOb3QgRm91bmQgNDA0JywgbG9nRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBIdHRwRXJyb3IuVGltZU91dDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCclYyBUaW1lT3V0IDQwOCcsIGxvZ0Zvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgSHR0cEVycm9yLkludGVybmFsU2VydmVyRXJyb3I6XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignJWMgYmlnIGJhZCA1MDAnLCBsb2dGb3JtYXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmNoYW5nZU1lc3NhZ2UoZXhjZXB0aW9uLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5FcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgSHR0cEVycm9yLkZvcmJpZGRlbjpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCclYyBGb3JiaWRkZW4gNDAzJywgbG9nRm9ybWF0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5jaGFuZ2VNZXNzYWdlKGV4Y2VwdGlvbi5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuUGFzc3dvcmRSZXF1aXJlZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGV4Y2VwdGlvbik7XG4gICAgICAgIH0pKTtcbiAgfVxufVxuIl19