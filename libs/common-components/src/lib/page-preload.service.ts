import {Observable, Observer} from "rxjs";

export class PagePreloadService {
  private readonly _checkPreload: Observable<number>;
  private _observer: Observer<number>;

  constructor() {
    this._checkPreload = new Observable(observer =>
      this._observer = observer);
  }

  get checkPreload(): Observable<number> {
    return this._checkPreload;
  }

  changeLastPageInView(page: number) {
    this._observer.next(page);
  }
}
