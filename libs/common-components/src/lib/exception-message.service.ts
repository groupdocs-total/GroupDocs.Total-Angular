import { HttpEvent } from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

export class ExceptionMessageService {
  private _observer: BehaviorSubject<string> = new BehaviorSubject('Server is not available');
  private _messageChange: Observable<string> = this._observer.asObservable();

  private _observerHttpEvent: BehaviorSubject<HttpEvent<any>> = new BehaviorSubject(null);
  private _httpEventChange: Observable<HttpEvent<any>> = this._observerHttpEvent.asObservable();

  constructor() {
  }

  get messageChange(): Observable<string> {
    return this._messageChange;
  }

  get httpEventChange(): Observable<HttpEvent<any>> {
    return this._httpEventChange;
  }

  changeMessage(message: string) {
    this._observer.next(message);
  }

  changeHttpEvent(httpEvent:HttpEvent<any>) {
    this._observerHttpEvent.next(httpEvent);
  }
}
