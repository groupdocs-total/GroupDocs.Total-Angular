import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { StampCanvasProps } from "../signature-models";
import { ActiveCanvasService } from "../active-canvas.service";
import { RemoveCanvasService } from "../remove-canvas.service";
import { OnCloseService } from "@groupdocs.examples.angular/common-components";
export declare class StampCanvasComponent implements OnInit, AfterViewInit {
    private _activeCanvasService;
    private _removeCanvas;
    private _onCloseService;
    id: number;
    theFirst: boolean;
    active: boolean;
    props: StampCanvasProps;
    width: number;
    height: number;
    _ctx: CanvasRenderingContext2D;
    canvas: ElementRef;
    colorPickerBG: boolean;
    colorPickerC: boolean;
    borderWidth: any[];
    constructor(_activeCanvasService: ActiveCanvasService, _removeCanvas: RemoveCanvasService, _onCloseService: OnCloseService);
    readonly ctx: CanvasRenderingContext2D;
    activation(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    redrawCanvas(): void;
    private fontDecoration;
    private makeTextUnderline;
    private drawCircle;
    private drawTextCircle;
    private refreshRadius;
    toggleColorPicker($event: any, bg: boolean): void;
    selectColor(bg: boolean, $event: any): void;
    selectBorderWidth($event: any): void;
    deleteCanvas(): void;
    getLeft(): number;
    getTop(): number;
    resize($event: any): void;
    closeColorPickerBG($event: any): void;
    closeColorPickerC($event: any): void;
}
