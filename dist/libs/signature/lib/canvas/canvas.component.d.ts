import { ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WindowService } from "@groupdocs.examples.angular/common-components";
export declare class CanvasComponent implements OnInit, OnChanges {
    private _windowService;
    color: string;
    _ctx: CanvasRenderingContext2D;
    _isDragged: boolean;
    private isDesktop;
    canvas: ElementRef;
    constructor(_windowService: WindowService);
    ngOnInit(): void;
    onMouseDown(e: any): void;
    onMouseUp(e: any): void;
    onMouseMove(e: any): void;
    setColor(color: any): void;
    getImage(): string;
    clear(): void;
    ngOnChanges(changes: SimpleChanges): void;
    getWidth(): number;
    getHeight(): number;
}
