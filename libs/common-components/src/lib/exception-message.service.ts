import {Observable, Observer} from "rxjs";

export class ExceptionMessageService {
  private _messageChange: Observable<string>;
  private _observer: Observer<string>;

  constructor() {
    this._messageChange = new Observable(observer =>
      this._observer = observer);
  }

  get messageChange(): Observable<string> {
    return this._messageChange;
  }

  changeMessage(message: string) {
    this._observer.next(message);
  }
}
