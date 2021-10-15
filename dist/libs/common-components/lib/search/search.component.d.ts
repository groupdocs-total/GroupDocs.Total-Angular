import { AfterViewInit, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { SearchService } from "../search.service";
export declare class SearchComponent implements OnInit, AfterViewInit {
    private _searchService;
    hidePanel: EventEmitter<boolean>;
    current: number;
    total: number;
    textElement: ElementRef;
    constructor(_searchService: SearchService);
    ngOnInit(): void;
    setText(text: string): void;
    hide(): void;
    prev(): void;
    next(): void;
    ngAfterViewInit(): void;
}
