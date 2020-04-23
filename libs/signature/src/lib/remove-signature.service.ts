import {Observable, Subject} from "rxjs";
import {RemoveSign} from "./signature-models";

export class RemoveSignatureService {
  private _observer: Subject<RemoveSign> = new Subject();
  private readonly _removeSignature: Observable<RemoveSign> = this._observer.asObservable();

  constructor() {
  }

  get removeSignature(): Observable<RemoveSign> {
    return this._removeSignature;
  }

  remove(id: RemoveSign): void {
    this._observer.next(id);
  }
}
