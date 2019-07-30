import { EventEmitter } from '@angular/core';
export declare class SidePanelComponent {
    title: string;
    icon: string;
    hideSidePanel: EventEmitter<boolean>;
    constructor();
    openSidePanel(): void;
}
