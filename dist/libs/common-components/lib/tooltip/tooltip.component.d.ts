import { OnInit } from '@angular/core';
export declare class TooltipComponent implements OnInit {
    text: string;
    first: boolean;
    visibility: string;
    constructor();
    getClass(): "tooltip first-element" | "tooltip";
    show: boolean;
    ngOnInit(): void;
}
