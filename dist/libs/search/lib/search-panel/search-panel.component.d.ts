import { EventEmitter, OnInit, ElementRef } from '@angular/core';
export declare class SearchPanelComponent implements OnInit {
    textElement: ElementRef;
    private text;
    searchText: EventEmitter<{}>;
    clearQuery: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    search(): void;
    setText(value: string): void;
    clearQueryString(): void;
}
