import {Observable, Subject} from "rxjs";
import {CopySign} from "./signature-models";

export class CopySignatureService {
  private _observer: Subject<CopySign> = new Subject();
  private readonly _copySignature: Observable<CopySign> = this._observer.asObservable();

  constructor() {
  }

  get copySignature(): Observable<CopySign> {
    return this._copySignature;
  }

  copy(copySign: CopySign): void {
    this._observer.next(copySign);
  }
}
