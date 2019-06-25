import { Observable } from "rxjs";
export declare class SearchService {
    private _observer;
    private readonly _textChange;
    private _observerCurrent;
    private readonly _currentChange;
    private _observerTotal;
    private readonly _totalChange;
    constructor();
    readonly textChange: Observable<string>;
    setText(text: string): void;
    readonly currentChange: Observable<number>;
    readonly totalChange: Observable<number>;
    setCurrent(current: number): void;
    setTotal(total: number): void;
}
