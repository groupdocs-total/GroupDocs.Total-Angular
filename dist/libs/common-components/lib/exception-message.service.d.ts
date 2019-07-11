import { Observable } from "rxjs";
export declare class ExceptionMessageService {
    private _observer;
    private _messageChange;
    constructor();
    readonly messageChange: Observable<string>;
    changeMessage(message: string): void;
}
