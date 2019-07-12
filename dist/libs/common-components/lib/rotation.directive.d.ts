import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class RotationDirective implements OnInit, OnChanges {
    angle: number;
    isHtmlMode: boolean;
    width: number;
    height: number;
    withMargin: boolean;
    animation: string;
    transition: string;
    transform: string;
    margin: string;
    constructor();
    private updateCursor;
    isLandscape(): boolean;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
