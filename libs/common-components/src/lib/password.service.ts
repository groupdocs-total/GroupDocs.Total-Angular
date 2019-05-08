import {Observable, Subject} from "rxjs";

export class PasswordService {
  private _observer: Subject<string> = new Subject();
  private readonly _passChange: Observable<string> = this._observer.asObservable();

  constructor() {
  }

  get passChange(): Observable<string> {
    return this._passChange;
  }

  setPassword(pass: string) {
    this._observer.next(pass);
  }
}
