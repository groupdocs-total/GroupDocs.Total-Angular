import { Observable } from "rxjs";
export declare class ActiveSignatureService {
    private _observer;
    private readonly _activeChange;
    constructor();
    readonly activeChange: Observable<number>;
    changeActive(signId: number): void;
}
