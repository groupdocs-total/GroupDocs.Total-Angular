import { EventEmitter } from '@angular/core';
import { OnCloseService } from "../on-close.service";
export interface Option {
    name: string;
    value: any;
    separator: boolean;
}
export declare class SelectComponent {
    private _onCloseService;
    options: Option[];
    disabled: boolean;
    showSelected: Option;
    selected: EventEmitter<any>;
    isOpen: boolean;
    constructor(_onCloseService: OnCloseService);
    open(): void;
    close(): void;
    toggle($event: any): void;
    select($event: any, value: Option): void;
}
