import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {ExceptionMessageService} from "./exception-message.service";
import {HttpError} from "./file.service";
import {CommonModals, ModalService} from "./modal.service";

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private _modalService: ModalService, private _messageService: ExceptionMessageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const logFormat = 'background: maroon; color: white';

    return next.handle(req)
      .pipe(map(data => {
          return data;
        }),
        catchError((exception: HttpEvent<any>) => {
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
}
