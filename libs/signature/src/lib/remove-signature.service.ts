import {Observable, Subject} from "rxjs";

export class RemoveSignatureService {
  private _observer: Subject<number> = new Subject();
  private readonly _removeSignature: Observable<number> = this._observer.asObservable();

  constructor() {
  }

  get removeSignature(): Observable<number> {
    return this._removeSignature;
  }

  remove(id: number): void {
    this._observer.next(id);
  }
}
