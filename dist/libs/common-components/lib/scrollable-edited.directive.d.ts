import { AfterViewInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { NavigateService } from "./navigate.service";
import { PagePreloadService } from "./page-preload.service";
import { ZoomService } from "./zoom.service";
import { WindowService } from "./window.service";
import { ViewportService } from "./viewport.service";
export declare class ScrollableEditedDirective implements AfterViewInit, OnChanges {
    private _elementRef;
    private _navigateService;
    private _pagePreloadService;
    private _zoomService;
    private _windowService;
    private _viewportService;
    isPresentation: boolean;
    private currentPage;
    private loadedPagesSet;
    constructor(_elementRef: ElementRef<HTMLElement>, _navigateService: NavigateService, _pagePreloadService: PagePreloadService, _zoomService: ZoomService, _windowService: WindowService, _viewportService: ViewportService);
    ngAfterViewInit(): void;
    scrollToPage(pageNumber: number): void;
    private getChildren;
    private calculateOffset;
    refresh(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
