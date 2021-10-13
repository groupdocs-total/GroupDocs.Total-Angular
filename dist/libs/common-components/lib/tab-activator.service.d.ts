import { Observable } from "rxjs";
export declare class TabActivatorService {
    private _observer;
    private readonly _activeTabChange;
    constructor();
    readonly activeTabChange: Observable<string>;
    changeActiveTab(tabId: string): void;
}
