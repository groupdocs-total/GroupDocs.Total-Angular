import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {finalize} from 'rxjs/operators'
import {LoadingMaskService} from "./loading-mask.service";

@Injectable({
  providedIn: 'root'
})
export class LoadingMaskInterceptorService implements HttpInterceptor {

  constructor(private _loadingMaskService: LoadingMaskService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loadingMaskService.onRequestStart(req);
    return next.handle(req).pipe( finalize( () => this._loadingMaskService.onRequestFinish(req)));
  }
}
