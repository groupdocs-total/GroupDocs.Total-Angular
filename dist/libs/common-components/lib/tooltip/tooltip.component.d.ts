import { OnInit } from '@angular/core';
export declare class TooltipComponent implements OnInit {
    text: string;
    position: number;
    visibility: string;
    constructor();
    getClass(): string;
    show: boolean;
    ngOnInit(): void;
}
