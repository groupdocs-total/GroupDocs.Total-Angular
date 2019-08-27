import { EventEmitter } from '@angular/core';
/**
 *  DropDownToggleComponent
 */
export declare class DropDownToggleComponent {
    dropdown: any;
    click: (event: any) => any;
    constructor(dropdown: any);
}
/**
 *  DropDownItemsComponent
 */
export declare class DropDownItemsComponent {
    dropdown: any;
    readonly isOpen: any;
    constructor(dropdown: any);
    onClickOutside(event: Event): void;
}
/**
 *  DropDownItemComponent
 */
export declare class DropDownItemComponent {
    dropdown: any;
    class: string;
    select: EventEmitter<{}>;
    click: () => void;
    constructor(dropdown: any);
    selectEntry(): void;
}
/**
 *  DropDownDirective
 */
export declare class DropDownDirective {
    _open: boolean;
    class: string;
    close(): void;
    toggle(event: MouseEvent): void;
}
