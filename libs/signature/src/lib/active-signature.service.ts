import {Observable, Subject} from "rxjs";

export class ActiveSignatureService {
  private _observer: Subject<number> = new Subject();
  private readonly _activeChange: Observable<number> = this._observer.asObservable();

  constructor() {
  }

  get activeChange(): Observable<number> {
    return this._activeChange;
  }

  changeActive(signId: number) {
    this._observer.next(signId);
  }
}
