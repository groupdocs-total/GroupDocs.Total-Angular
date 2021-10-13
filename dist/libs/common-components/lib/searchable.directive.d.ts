import { ElementRef } from '@angular/core';
import { SearchService } from "./search.service";
import { HighlightSearchPipe } from "./pipes";
import { ZoomService } from "./zoom.service";
export declare class SearchableDirective {
    private _elementRef;
    private _searchService;
    private _highlight;
    private _zoomService;
    text: string;
    current: number;
    total: number;
    private zoom;
    constructor(_elementRef: ElementRef<HTMLElement>, _searchService: SearchService, _highlight: HighlightSearchPipe, _zoomService: ZoomService);
    private highlightSearch;
    private moveToCurrent;
    private highlightEl;
    private cleanHighlight;
    private getZoom;
}
