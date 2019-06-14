import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OnCloseService {
  private _observer: Subject<boolean> = new Subject();
  private readonly _onClose: Observable<boolean> = this._observer.asObservable();

  constructor() {
  }

  get onClose() {
    return this._onClose;
  }

  close(close: boolean) {
    this._observer.next(close)
  }
}
