import {Observable, Observer, Subject} from "rxjs";

export class ZoomService {
  private _observer: Subject<number> = new Subject();
  private readonly _zoomChange: Observable<number> = this._observer.asObservable();
  private _zoom: number;

  constructor() {
  }

  get zoom(): number {
    return this._zoom;
  }

  get zoomChange(): Observable<number> {
    return this._zoomChange;
  }

  changeZoom(zoom: number) {
    this._zoom = zoom;
    this._observer.next(zoom);
  }
}
