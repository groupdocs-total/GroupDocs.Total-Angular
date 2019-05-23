import {Observable, Subject} from "rxjs";

export class SearchService {
  private _observer: Subject<string> = new Subject();
  private readonly _textChange: Observable<string> = this._observer.asObservable();

  private _observerCurrent: Subject<number> = new Subject();
  private readonly _currentChange: Observable<number> = this._observerCurrent.asObservable();

  private _observerTotal: Subject<number> = new Subject();
  private readonly _totalChange: Observable<number> = this._observerTotal.asObservable();

  constructor() {
  }

  get textChange(): Observable<string> {
    return this._textChange;
  }

  setText(text: string) {
    this._observer.next(text);
  }

  get currentChange(): Observable<number> {
    return this._currentChange;
  }

  get totalChange(): Observable<number> {
    return this._totalChange;
  }

  setCurrent(current: number) {
    this._observerCurrent.next(current);
  }

  setTotal(total: number) {
    this._observerTotal.next(total);
  }
}
