import {Observable, Subject} from "rxjs";

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

  private createZoomOption(val: number, name: string = val + '%', sep: boolean = false) {
    return {value: val, name: name, separator: sep, prefix: "%"}
  }

  zoomOptions(width, height) {
    return [this.createZoomOption(25),
      this.createZoomOption(50),
      this.createZoomOption(100),
      this.createZoomOption(150),
      this.createZoomOption(200),
      this.createZoomOption(300),
      this.createZoomOption(0, '', true),
      this.createZoomOption(width, 'Fit Width'),
      this.createZoomOption(height, 'Fit Height')];
  }
}
