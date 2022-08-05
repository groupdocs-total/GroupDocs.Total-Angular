import { EventEmitter, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Formatting } from "../formatting.service";
import { WindowService } from "../window.service";
import { ZoomService } from '../zoom.service';
export declare class MenuType {
    static FOR_SIGNATURE: string;
    static FOR_TEXT_SIGNATURE: string;
    static FOR_ANNOTATION: string;
}
export declare class ContextMenuComponent implements OnInit {
    private _windowService;
    private _zoomService;
    protected _elementRef: ElementRef<HTMLElement>;
    private renderer;
    formatting: Formatting;
    textMenu: boolean;
    topPosition: number;
    lock: boolean;
    translation: number;
    menuType: string;
    changeFormatting: EventEmitter<Formatting>;
    removeItem: EventEmitter<boolean>;
    saveItemEmitter: EventEmitter<boolean>;
    copySign: EventEmitter<boolean>;
    lockOut: EventEmitter<boolean>;
    comment: EventEmitter<boolean>;
    isMobile: boolean;
    constructor(_windowService: WindowService, _zoomService: ZoomService, _elementRef: ElementRef<HTMLElement>, renderer: Renderer2);
    ngOnInit(): void;
    changeScale(val: number): void;
    saveChanges(): void;
    selectFontSize($event: number): void;
    selectFont($event: string): void;
    selectColor($event: string): void;
    toggleBold($event: any): void;
    toggleItalic($event: any): void;
    toggleUnderline($event: any): void;
    deleteItem(): void;
    saveItem($event: any): void;
    toggleLock(): void;
    onCopySign(): void;
    isSignature(): boolean;
    isTextSignature(): boolean;
    isAnnotation(): boolean;
    addComment(): void;
}
