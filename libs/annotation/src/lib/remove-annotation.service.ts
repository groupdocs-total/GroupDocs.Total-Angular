import {Observable, Subject} from "rxjs";
import {RemoveAnnotation} from "./annotation-models";

export class RemoveAnnotationService {
  private _observer: Subject<RemoveAnnotation> = new Subject();
  private readonly _removeAnnotation: Observable<RemoveAnnotation> = this._observer.asObservable();

  constructor() {
  }

  get removeAnnotation(): Observable<RemoveAnnotation> {
    return this._removeAnnotation;
  }

  remove(id: RemoveAnnotation): void {
    this._observer.next(id);
  }
}
