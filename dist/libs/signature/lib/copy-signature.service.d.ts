import { Observable } from "rxjs";
import { CopyChanges, CopySign } from "./signature-models";
export declare class CopySignatureService {
    private _observer;
    private readonly _copySignature;
    private _observerChanges;
    private readonly _changesSignature;
    constructor();
    readonly copySignature: Observable<CopySign>;
    copy(copySign: CopySign): void;
    readonly changesSignature: Observable<CopyChanges>;
    notifyChanges(changes: CopyChanges): void;
}
