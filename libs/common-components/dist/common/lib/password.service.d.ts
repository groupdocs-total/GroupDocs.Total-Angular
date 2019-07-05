import { Observable } from "rxjs";
export declare class PasswordService {
    private _observer;
    private readonly _passChange;
    constructor();
    readonly passChange: Observable<string>;
    setPassword(pass: string): void;
}
