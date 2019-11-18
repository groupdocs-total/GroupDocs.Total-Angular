import { EventEmitter, OnInit } from '@angular/core';
import { Formatting, WindowService } from "@groupdocs.examples.angular/common-components";
export declare class ContextMenuComponent implements OnInit {
    private _windowService;
    formatting: Formatting;
    textMenu: boolean;
    topPosition: number;
    lock: boolean;
    translation: number;
    changeFormatting: EventEmitter<Formatting>;
    removeSign: EventEmitter<boolean>;
    copySign: EventEmitter<boolean>;
    lockOut: EventEmitter<boolean>;
    isMobile: boolean;
    constructor(_windowService: WindowService);
    ngOnInit(): void;
    saveChanges(): void;
    selectFontSize($event: number): void;
    selectFont($event: string): void;
    selectColor($event: string): void;
    toggleBold($event: any): void;
    toggleItalic($event: any): void;
    toggleUnderline($event: any): void;
    deleteSign(): void;
    toggleLock(): void;
    onCopySign(): void;
}
