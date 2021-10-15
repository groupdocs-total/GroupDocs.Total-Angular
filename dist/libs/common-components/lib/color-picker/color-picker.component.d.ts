import { EventEmitter, OnInit } from '@angular/core';
export declare class ColorPickerComponent implements OnInit {
    isOpen: boolean;
    selectedColor: EventEmitter<string>;
    closeOutside: EventEmitter<boolean>;
    colors: any;
    white: string;
    constructor();
    ngOnInit(): void;
    select($event: any, color: string): void;
    close(): void;
}
