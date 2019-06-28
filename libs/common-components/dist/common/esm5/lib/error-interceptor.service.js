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
var ErrorInterceptorService = /** @class */ (function () {
    function ErrorInterceptorService(_modalService, _messageService) {
        this._modalService = _modalService;
        this._messageService = _messageService;
    }
    ErrorInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        var logFormat = 'background: maroon; color: white';
        return next.handle(req)
            .pipe(map(function (data) {
            return data;
        }), catchError(function (exception) {
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
        }));
    };
    ErrorInterceptorService.ngInjectableDef = i0.defineInjectable({ factory: function ErrorInterceptorService_Factory() { return new ErrorInterceptorService(i0.inject(i1.ModalService), i0.inject(i2.ExceptionMessageService)); }, token: ErrorInterceptorService, providedIn: "root" });
    ErrorInterceptorService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [ModalService, ExceptionMessageService])
    ], ErrorInterceptorService);
    return ErrorInterceptorService;
}());
export { ErrorInterceptorService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9lcnJvci1pbnRlcmNlcHRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBdUQsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RyxPQUFPLEVBQWEsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxZQUFZLEVBQUUsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFLM0Q7SUFFRSxpQ0FBb0IsYUFBMkIsRUFBVSxlQUF3QztRQUE3RSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUF5QjtJQUNqRyxDQUFDO0lBRUQsMkNBQVMsR0FBVCxVQUFVLEdBQXFCLEVBQUUsSUFBaUI7UUFBbEQsaUJBc0NDO1FBckNDLElBQU0sU0FBUyxHQUFHLGtDQUFrQyxDQUFDO1FBRXJELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDVixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFDLFNBQXlCO1lBQ25DLElBQUksU0FBUyxZQUFZLGlCQUFpQixFQUFFO2dCQUMxQyxRQUFRLFNBQVMsQ0FBQyxNQUFNLEVBQUU7b0JBRXhCLEtBQUssU0FBUyxDQUFDLFVBQVU7d0JBQ3ZCLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQy9DLE1BQU07b0JBQ1IsS0FBSyxTQUFTLENBQUMsWUFBWTt3QkFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDaEQsTUFBTTtvQkFDUixLQUFLLFNBQVMsQ0FBQyxRQUFRO3dCQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUM3QyxNQUFNO29CQUNSLEtBQUssU0FBUyxDQUFDLE9BQU87d0JBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQzNDLE1BQU07b0JBQ1IsS0FBSyxTQUFTLENBQUMsbUJBQW1CO3dCQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUMzQyxLQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUM1RCxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQ25ELE1BQU07b0JBRVIsS0FBSyxTQUFTLENBQUMsU0FBUzt3QkFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDN0MsS0FBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDNUQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7d0JBQ3ZELE1BQU07aUJBQ1Q7YUFDRjtZQUNELE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDOztJQTNDVSx1QkFBdUI7UUFIbkMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztpREFHbUMsWUFBWSxFQUEyQix1QkFBdUI7T0FGdEYsdUJBQXVCLENBNENuQztrQ0F2REQ7Q0F1REMsQUE1Q0QsSUE0Q0M7U0E1Q1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cEVycm9yUmVzcG9uc2UsIEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3R9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCB0aHJvd0Vycm9yfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtFeGNlcHRpb25NZXNzYWdlU2VydmljZX0gZnJvbSBcIi4vZXhjZXB0aW9uLW1lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtIdHRwRXJyb3J9IGZyb20gXCIuL2ZpbGUuc2VydmljZVwiO1xuaW1wb3J0IHtDb21tb25Nb2RhbHMsIE1vZGFsU2VydmljZX0gZnJvbSBcIi4vbW9kYWwuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFcnJvckludGVyY2VwdG9yU2VydmljZSBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsIHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBFeGNlcHRpb25NZXNzYWdlU2VydmljZSkge1xuICB9XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgY29uc3QgbG9nRm9ybWF0ID0gJ2JhY2tncm91bmQ6IG1hcm9vbjsgY29sb3I6IHdoaXRlJztcblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpXG4gICAgICAucGlwZShtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKChleGNlcHRpb246IEh0dHBFdmVudDxhbnk+KSA9PiB7XG4gICAgICAgICAgaWYgKGV4Y2VwdGlvbiBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGV4Y2VwdGlvbi5zdGF0dXMpIHtcblxuICAgICAgICAgICAgICBjYXNlIEh0dHBFcnJvci5CYWRSZXF1ZXN0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyVjIEJhZCBSZXF1ZXN0IDQwMCcsIGxvZ0Zvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgSHR0cEVycm9yLlVuYXV0aG9yaXplZDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCclYyBVbmF1dGhvcml6ZWQgNDAxJywgbG9nRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBIdHRwRXJyb3IuTm90Rm91bmQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignJWMgTm90IEZvdW5kIDQwNCcsIGxvZ0Zvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgSHR0cEVycm9yLlRpbWVPdXQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignJWMgVGltZU91dCA0MDgnLCBsb2dGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIEh0dHBFcnJvci5JbnRlcm5hbFNlcnZlckVycm9yOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyVjIGJpZyBiYWQgNTAwJywgbG9nRm9ybWF0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5jaGFuZ2VNZXNzYWdlKGV4Y2VwdGlvbi5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuRXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIEh0dHBFcnJvci5Gb3JiaWRkZW46XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignJWMgRm9yYmlkZGVuIDQwMycsIGxvZ0Zvcm1hdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuY2hhbmdlTWVzc2FnZShleGNlcHRpb24uZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLlBhc3N3b3JkUmVxdWlyZWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihleGNlcHRpb24pO1xuICAgICAgICB9KSk7XG4gIH1cbn1cbiJdfQ==