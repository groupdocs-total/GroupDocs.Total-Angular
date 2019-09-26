import { EventEmitter } from '@angular/core';
import { OnCloseService } from "../on-close.service";
export interface Option {
    name: string;
    value: any;
    separator: boolean;
}
export declare class SelectComponent {
    protected _onCloseService: OnCloseService;
    options: Option[];
    disabled: boolean;
    showSelected: Option;
    selected: EventEmitter<any>;
    isOpen: boolean;
    constructor(_onCloseService: OnCloseService);
    open(): void;
    close(): void;
    onClickOutside(event: Event): void;
    toggle($event: any): void;
    select($event: any, value: Option): void;
}
