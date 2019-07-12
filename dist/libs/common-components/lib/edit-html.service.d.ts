import { Observable, Subject } from "rxjs";
export declare class EditHtmlService {
    private _observer;
    private readonly _htmlContent;
    constructor();
    readonly observer: Subject<string>;
    readonly htmlContent: Observable<string>;
}
