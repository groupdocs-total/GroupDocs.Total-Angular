import { ElementRef } from '@angular/core';
import { SearchService } from "./search.service";
import { ZoomService } from "./zoom.service";
import { Observable } from "rxjs";
export declare class SearchableDirective {
    private _elementRef;
    private _searchService;
    private _zoomService;
    text: string;
    prevText: string;
    current: number;
    total: number;
    private zoom;
    private _searchingObserver;
    private readonly _searching;
    private _searchingFlag;
    constructor(_elementRef: ElementRef<HTMLElement>, _searchService: SearchService, _zoomService: ZoomService);
    readonly searching: Observable<boolean>;
    setSearching(searching: boolean): void;
    private highlightSearch;
    private moveToCurrent;
    private highlightEl;
    private cleanHighlight;
    private getZoom;
}
