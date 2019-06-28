import { EventEmitter } from '@angular/core';
export interface Option {
    name: string;
    value: any;
    separator: boolean;
}
export declare class SelectComponent {
    options: Option[];
    disabled: boolean;
    showSelected: any;
    selected: EventEmitter<any>;
    isOpen: boolean;
    constructor();
    open(): void;
    close(): void;
    toggle(): void;
    select(value: any): void;
}
