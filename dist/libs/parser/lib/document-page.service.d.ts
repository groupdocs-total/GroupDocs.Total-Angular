export declare class DocumentPageService {
    private _activePageChangedSubject;
    private _activePage;
    constructor();
    readonly activePageChanged: import("rxjs").Observable<number>;
    readonly activePage: number;
    setActivePage(activePage: number): void;
}
