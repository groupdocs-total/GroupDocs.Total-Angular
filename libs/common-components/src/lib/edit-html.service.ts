import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EditHtmlService {
  private _observer: Subject<string> = new Subject();
  private readonly _htmlContent: Observable<string> = this._observer.asObservable();

  constructor() {
  }

  get observer(): Subject<string> {
    return this._observer;
  }

  get htmlContent(): Observable<string> {
    return this._htmlContent;
  }

}
