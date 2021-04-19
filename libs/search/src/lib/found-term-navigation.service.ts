import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class FoundTermNavigationService {
  enabled = false;
  element: HTMLElement;
  total = 0;
  current = 0;

  private _observerCurrent: Subject<number> = new Subject();
  private readonly _currentChanged: Observable<number> = this._observerCurrent.asObservable();

  constructor() {
  }

  get currentChanged(): Observable<number> {
    return this._currentChanged;
  }

  setElement(element: HTMLElement) {
    this.current = 0;
    this.total = 0;
    this.element = element;
  }

  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }

  updateTotal() {
    if (this.element === undefined) return;

    this.total = this.element.querySelectorAll('.counted-term').length;
  }

  navigateFirst() {
    this.current = 1;
    this._observerCurrent.next(this.current);
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

  navigateLast() {
    this.current = this.total;
    this._observerCurrent.next(this.current);
  }
}
