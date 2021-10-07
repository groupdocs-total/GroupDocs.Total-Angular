import { Observable } from "rxjs";
export declare class OnCloseService {
    private _observer;
    private readonly _onClose;
    constructor();
    readonly onClose: Observable<boolean>;
    close(close: boolean): void;
}
