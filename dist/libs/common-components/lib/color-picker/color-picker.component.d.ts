import { EventEmitter, OnInit } from '@angular/core';
export declare class ColorPickerComponent implements OnInit {
    selectedColor: EventEmitter<string>;
    colors: any;
    constructor();
    ngOnInit(): void;
    select($event: any, color: string): void;
}
