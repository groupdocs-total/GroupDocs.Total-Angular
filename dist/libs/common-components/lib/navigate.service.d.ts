import { Observable } from "rxjs";
import { PagePreloadService } from "./page-preload.service";
export declare class NavigateService {
    private _pagePreloadService;
    private _currentPage;
    private _countPages;
    private readonly _navigate;
    private _observer;
    constructor(_pagePreloadService: PagePreloadService);
    readonly navigate: Observable<number>;
    countPages: number;
    currentPage: number;
    nextPage(): void;
    prevPage(): void;
    toLastPage(): void;
    toFirstPage(): void;
    navigateTo(page: number): void;
}
