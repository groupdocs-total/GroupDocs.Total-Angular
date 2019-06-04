import {BehaviorSubject, Observable} from "rxjs";

export class ExceptionMessageService {
  private _observer: BehaviorSubject<string> = new BehaviorSubject('Server is not available');
  private _messageChange: Observable<string> = this._observer.asObservable();

  constructor() {
  }

  get messageChange(): Observable<string> {
    return this._messageChange;
  }

  changeMessage(message: string) {
    this._observer.next(message);
  }
}
