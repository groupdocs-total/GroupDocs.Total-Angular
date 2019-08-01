import {Observable, Subject} from "rxjs";

export class TabActivatorService {
  private _observer: Subject<string> = new Subject();
  private readonly _activeTabChange: Observable<string> = this._observer.asObservable();

  constructor() {
  }

  get activeTabChange(): Observable<string> {
    return this._activeTabChange;
  }

  changeActiveTab(tabId: string) {
    this._observer.next(tabId);
  }
}
