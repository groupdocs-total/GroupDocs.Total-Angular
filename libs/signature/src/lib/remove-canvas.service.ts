import {Observable, Subject} from "rxjs";

export class RemoveCanvasService {
  private _observer: Subject<number> = new Subject();
  private readonly _removeCanvas: Observable<number> = this._observer.asObservable();

  constructor() {
  }

  get removeCanvas(): Observable<number> {
    return this._removeCanvas;
  }

  remove(id: number): void {
    this._observer.next(id);
  }
}
