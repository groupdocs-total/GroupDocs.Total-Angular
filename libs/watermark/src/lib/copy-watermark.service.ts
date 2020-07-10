import {Observable, Subject} from "rxjs";
import {CopyChanges, CopyWatermark} from "./watermark-models";

export class CopyWatermarkService {
  private _observer: Subject<CopyWatermark> = new Subject();
  private readonly _copyWatermark: Observable<CopyWatermark> = this._observer.asObservable();
  private _observerChanges: Subject<CopyChanges> = new Subject();
  private readonly _changesWatermark: Observable<CopyChanges> = this._observerChanges.asObservable();

  constructor() {
  }

  get copyWatermark(): Observable<CopyWatermark> {
    return this._copyWatermark;
  }

  copy(copyWatermark: CopyWatermark): void {
    this._observer.next(copyWatermark);
  }

  get changesWatermark(): Observable<CopyChanges> {
    return this._changesWatermark;
  }

  notifyChanges(changes: CopyChanges): void {
    this._observerChanges.next(changes);
  }
}
