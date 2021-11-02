import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class PageComponent implements OnInit, OnChanges {
    angle: number;
    width: number;
    height: number;
    number: number;
    data: string;
    isHtml: boolean;
    editable: boolean;
    imgData: string;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
