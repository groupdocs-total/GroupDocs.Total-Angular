import { EventEmitter } from '@angular/core';
export declare class SidePanelComponent {
    title: string;
    icon: string;
    closable: boolean;
    saveable: boolean;
    hideSidePanel: EventEmitter<boolean>;
    saveInSidePanel: EventEmitter<boolean>;
    onlyTitle: boolean;
    constructor();
    closeSidePanel(): void;
    saveBySidePanel(): void;
    toggleTitleMode(): void;
}
