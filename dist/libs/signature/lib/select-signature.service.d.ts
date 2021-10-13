import { Observable } from "rxjs";
import { DraggableSignature } from "./signature-models";
export declare class SelectSignatureService {
    private _observer;
    private readonly _selectSignature;
    constructor();
    readonly selectSignature: Observable<DraggableSignature>;
    select(sign: DraggableSignature): void;
}
