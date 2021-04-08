import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import { ErrorInterceptorService, ModalService,ExceptionMessageService } from '@groupdocs.examples.angular/common-components';

@Injectable({
  providedIn: 'root'
})
export class ViewerErrorInterceptorService extends ErrorInterceptorService {
    
    constructor(private _viewerModalService: ModalService, private _viewerMessageService: ExceptionMessageService) {
        super(_viewerModalService,_viewerMessageService);
    }
    
    showErrorWindowModal(logFormat: string, exception) {
        this._viewerMessageService.changeHttpEvent(exception);
        this._viewerModalService.open("gd-error-report-window");
    }
}