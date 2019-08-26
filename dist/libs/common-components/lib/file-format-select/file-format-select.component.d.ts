import { EventEmitter } from '@angular/core';
import { OnCloseService } from "../on-close.service";
export interface Option {
    name: string;
    value: any;
}
export declare class FileFormatSelectComponent {
    private _onCloseService;
    options: Option[];
    disabled: boolean;
    isMulti: boolean;
    label: string;
    selected: EventEmitter<any>;
    isOpen: boolean;
    constructor(_onCloseService: OnCloseService);
    open(): void;
    close(): void;
    onClickOutside(event: Event): void;
    toggle($event: any): void;
    select($event: any, value: Option): void;
}
