import {Observable, Observer} from "rxjs";
import {PageModel} from "./file.service";

export class RenderPrintService {
  private _render: Observable<PageModel[]>;
  private _observer: Observer<PageModel[]>;
  private _renderBlob: Observable<Blob>;
  private _observerBlob: Observer<Blob>;

  constructor() {
    this._render = new Observable(observer =>
      this._observer = observer);
    this._renderBlob = new Observable(observer =>
      this._observerBlob = observer);
  }

  get renderPrint(): Observable<PageModel[]> {
    return this._render;
  }

  changePages(pages: PageModel[]) {
    this._observer.next(pages);
  }

  get renderPrintBlob(): Observable<Blob> {
    return this._renderBlob;
  }

  changeBlob(file: Blob) {
    this._observerBlob.next(file);
  }
}
