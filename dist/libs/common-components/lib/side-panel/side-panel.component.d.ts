import { EventEmitter } from '@angular/core';
export declare class SidePanelComponent {
    title: string;
    icon: string;
    closable: boolean;
    hideSidePanel: EventEmitter<boolean>;
    onlyTitle: boolean;
    constructor();
    closeSidePanel(): void;
    toggleTitleMode(): void;
}
