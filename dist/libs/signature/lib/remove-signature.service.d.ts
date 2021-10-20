import { Observable } from "rxjs";
import { RemoveSign } from "./signature-models";
export declare class RemoveSignatureService {
    private _observer;
    private readonly _removeSignature;
    constructor();
    readonly removeSignature: Observable<RemoveSign>;
    remove(id: RemoveSign): void;
}
