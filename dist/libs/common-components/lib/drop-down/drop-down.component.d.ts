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
    readonly horizontalAlign: any;
    readonly verticalAlign: any;
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
    selected: EventEmitter<{}>;
    click: () => void;
    constructor(dropdown: any);
    selectEntry(): void;
}
/**
 *  DropDownComponent
 */
export declare class DropDownComponent {
    placement: {
        h: string;
        v: string;
    };
    open: boolean;
    class: string;
    close(): void;
    toggle(event: MouseEvent): void;
    getPlacement(): {
        h: string;
        v: string;
    };
}
