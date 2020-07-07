import {Observable, Subject} from "rxjs";
import {DraggableWatermark} from "./watermark-models";

export class SelectWatermarkService {
  private _observer: Subject<DraggableWatermark> = new Subject();
  private readonly _selectWatermark: Observable<DraggableWatermark> = this._observer.asObservable();

  constructor() {
  }

  get selectWatermark(): Observable<DraggableWatermark> {
    return this._selectWatermark;
  }

  select(watermark: DraggableWatermark): void {
    this._observer.next(watermark);
  }
}
