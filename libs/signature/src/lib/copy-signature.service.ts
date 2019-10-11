import {Observable, Subject} from "rxjs";
import {CopyChanges, CopySign} from "./signature-models";

export class CopySignatureService {
  private _observer: Subject<CopySign> = new Subject();
  private readonly _copySignature: Observable<CopySign> = this._observer.asObservable();
  private _observerChanges: Subject<CopyChanges> = new Subject();
  private readonly _changesSignature: Observable<CopyChanges> = this._observerChanges.asObservable();

  constructor() {
  }

  get copySignature(): Observable<CopySign> {
    return this._copySignature;
  }

  copy(copySign: CopySign): void {
    this._observer.next(copySign);
  }

  get changesSignature(): Observable<CopyChanges> {
    return this._changesSignature;
  }

  notifyChanges(changes: CopyChanges): void {
    this._observerChanges.next(changes);
  }
}
