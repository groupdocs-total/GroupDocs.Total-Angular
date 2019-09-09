import { AfterViewInit, EventEmitter, OnInit } from '@angular/core';
export declare class ResizingComponent implements OnInit, AfterViewInit {
    id: number;
    se: boolean;
    ne: boolean;
    sw: boolean;
    nw: boolean;
    SE: string;
    NE: string;
    SW: string;
    NW: string;
    offsetX: EventEmitter<number>;
    offsetY: EventEmitter<number>;
    offsetTop: EventEmitter<number>;
    offsetLeft: EventEmitter<number>;
    release: EventEmitter<boolean>;
    private grab;
    private oldPosition;
    constructor();
    ngAfterViewInit(): void;
    ngOnInit(): void;
    catchUp($event: DragEvent): void;
    resize($event: DragEvent, el: string): void;
    private setOffsets;
    end($event: DragEvent, el: string): void;
    start($event: DragEvent): void;
    drop($event: DragEvent): void;
    private getElementId;
}
