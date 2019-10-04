import { AfterViewInit, OnDestroy, OnInit, ElementRef, OnChanges } from '@angular/core';
import { ZoomService } from "./zoom.service";
export declare class ZoomDirective implements OnInit, OnDestroy, AfterViewInit, OnChanges {
    private _zoomService;
    zoomActive: boolean;
    file: any;
    ifEdge: boolean;
    zoomInt: number;
    transform: string;
    transformOrigin: string;
    width: string;
    minWidth: string;
    el: ElementRef<any>;
    constructor(_zoomService: ZoomService, el: ElementRef);
    ngOnDestroy(): void;
    ngOnChanges(): void;
    ngOnInit(): void;
    private setStyles;
    private getScrollWidth;
    private resizePages;
    ngAfterViewInit(): void;
}
