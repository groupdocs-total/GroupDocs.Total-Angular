import {Observable, Subject} from "rxjs";
import {RemoveWatermark} from "./watermark-models";

export class RemoveWatermarkService {
  private _observer: Subject<RemoveWatermark> = new Subject();
  private readonly _removeWatermark: Observable<RemoveWatermark> = this._observer.asObservable();

  constructor() {
  }

  get removeWatermark(): Observable<RemoveWatermark> {
    return this._removeWatermark;
  }

  remove(id: RemoveWatermark): void {
    this._observer.next(id);
  }
}
