import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentPageService {

  private _activePageChangedSubject = new Subject<number>();
  private _activePage: number = null;

  constructor() { }

  readonly activePageChanged = this._activePageChangedSubject.asObservable();

  get activePage(): number {
    return this._activePage;
  }

  setActivePage(activePage: number) {
    this._activePage = activePage;
    this._activePageChangedSubject.next(activePage);
  }
}
