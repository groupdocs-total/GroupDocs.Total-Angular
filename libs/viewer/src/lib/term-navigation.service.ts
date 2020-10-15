import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class TermNavigationService {
  total: number;
  current: number;

  private _observerCurrent: Subject<number> = new Subject();
  private readonly _currentChanged: Observable<number> = this._observerCurrent.asObservable();

  private _observerDeleteNavigation: Subject<void> = new Subject();
  private readonly _deleteNavigationRequested: Observable<void> = this._observerDeleteNavigation.asObservable();

  constructor() {
  }

  get currentChanged(): Observable<number> {
    return this._currentChanged;
  }

  get deleteNavigationRequested(): Observable<void> {
    return this._deleteNavigationRequested;
  }

  setTotal(value: number) {
    this.total = value;
    if (value > 0) {
      this.current = 1;
    }
    else {
      this.current = 0;
    }
  }

  navigatePrevious() {
    if (this.current > 1) {
      this.current--;
      this._observerCurrent.next(this.current);
    }
  }

  navigateNext() {
    if (this.current < this.total) {
      this.current++;
      this._observerCurrent.next(this.current);
    }
  }

  deleteNavigation() {
    this.total = 0;
    this.current = 0;
    this._observerDeleteNavigation.next();
  }
}
