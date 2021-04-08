import { HttpErrorResponse, HttpEvent } from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

export class ExceptionMessageService {
  private _observer: BehaviorSubject<string> = new BehaviorSubject('Server is not available');
  private _messageChange: Observable<string> = this._observer.asObservable();
  private _httpEventObserver: BehaviorSubject<HttpEvent<any>> = new BehaviorSubject<HttpEvent<any>>(null);
  private _httpEventChange: Observable<HttpEvent<any>> = this._httpEventObserver.asObservable();

  constructor() {
  }

  get httpEventChange(): Observable<HttpEvent<any>> {
    return this._httpEventChange;
  }

  get messageChange(): Observable<string> {
    return this._messageChange;
  }

  changeHttpEvent(httpEvent: HttpEvent<any>) {
    this._httpEventObserver.next(httpEvent);
  }

  changeMessage(message: string) {
    this._observer.next(message);
  }
}
