import { EventEmitter } from '@angular/core';
export declare class SidePanelComponent {
    title: string;
    icon: string;
    hideSidePanel: EventEmitter<boolean>;
    onlyTitle: boolean;
    constructor();
    openSidePanel(): void;
    toggleTitleMode(): void;
}
