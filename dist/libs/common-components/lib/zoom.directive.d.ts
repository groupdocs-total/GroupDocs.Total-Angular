import { AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { ZoomService } from "./zoom.service";
import { DomSanitizer } from "@angular/platform-browser";
export declare class ZoomDirective implements OnInit, OnDestroy, AfterViewInit {
    private _zoomService;
    private _sanitizer;
    zoomActive: boolean;
    ifPdf: boolean;
    ifChrome: boolean;
    ifFirefox: boolean;
    ifEdge: boolean;
    zoomInt: number;
    transform: string;
    transformOrigin: string;
    constructor(_zoomService: ZoomService, _sanitizer: DomSanitizer);
    ngOnDestroy(): void;
    ngOnChanges(): void;
    ngOnInit(): void;
    private setStyles;
    ngAfterViewInit(): void;
}
