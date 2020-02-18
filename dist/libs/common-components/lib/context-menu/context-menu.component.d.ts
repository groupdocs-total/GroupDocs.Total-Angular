import { EventEmitter, OnInit } from '@angular/core';
import { Formatting } from "../formatting.service";
import { WindowService } from "../window.service";
export declare class MenuType {
    static FOR_SIGNATURE: string;
    static FOR_ANNOTATION: string;
}
export declare class ContextMenuComponent implements OnInit {
    private _windowService;
    formatting: Formatting;
    textMenu: boolean;
    topPosition: number;
    lock: boolean;
    translation: number;
    menuType: string;
    changeFormatting: EventEmitter<Formatting>;
    removeItem: EventEmitter<boolean>;
    copySign: EventEmitter<boolean>;
    lockOut: EventEmitter<boolean>;
    comment: EventEmitter<boolean>;
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
    deleteItem(): void;
    toggleLock(): void;
    onCopySign(): void;
    isSignature(): boolean;
    isAnnotation(): boolean;
    addComment(): void;
}
