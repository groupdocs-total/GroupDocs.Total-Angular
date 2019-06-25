import { AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { ZoomService } from "./zoom.service";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";
export declare class ZoomDirective implements OnInit, OnDestroy, AfterViewInit {
    private _zoomService;
    private _sanitizer;
    zoomActive: boolean;
    zoomStr: string;
    zoomInt: number;
    mozTransform: string;
    mozTransformOrigin: string;
    webkitTransform: SafeStyle;
    msTransform: SafeStyle;
    oTransform: SafeStyle;
    constructor(_zoomService: ZoomService, _sanitizer: DomSanitizer);
    ngOnDestroy(): void;
    ngOnInit(): void;
    private setStyles;
    ngAfterViewInit(): void;
}
