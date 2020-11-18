import { AfterViewInit, OnDestroy, OnInit, ElementRef, OnChanges } from '@angular/core';
import { ZoomService } from "./zoom.service";
import { WindowService } from './window.service';
export declare class EditHeaderFooterDirective implements OnInit, OnDestroy, AfterViewInit, OnChanges {
    private _zoomService;
    private _windowService;
    el: ElementRef<any>;
    footerRef: any;
    headerRef: any;
    constructor(_zoomService: ZoomService, _windowService: WindowService, el: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(): void;
    ngOnInit(): void;
    dblclickEvent(event: any): void;
    clickEvent(event: any): void;
}
