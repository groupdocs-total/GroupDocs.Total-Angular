import { AfterViewInit, OnDestroy, OnInit, ElementRef, OnChanges } from '@angular/core';
import { ZoomService } from "./zoom.service";
import { WindowService } from './window.service';
export declare class ZoomDirective implements OnInit, OnDestroy, AfterViewInit, OnChanges {
    private _zoomService;
    private _windowService;
    zoomActive: boolean;
    file: any;
    zoomInt: number;
    transform: string;
    transformOrigin: string;
    width: string;
    minWidth: string;
    el: ElementRef<any>;
    constructor(_zoomService: ZoomService, _windowService: WindowService, el: ElementRef);
    ngOnDestroy(): void;
    ngOnChanges(): void;
    ngOnInit(): void;
    private setStyles;
    private getScrollWidth;
    private resizePages;
    ngAfterViewInit(): void;
}
