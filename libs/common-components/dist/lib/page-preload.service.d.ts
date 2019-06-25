import { Observable } from "rxjs";
export declare class PagePreloadService {
    private readonly _checkPreload;
    private _observer;
    constructor();
    readonly checkPreload: Observable<number>;
    changeLastPageInView(page: number): void;
}
