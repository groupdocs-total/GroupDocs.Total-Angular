import { OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NavigateService, PageModel, ZoomService } from "@groupdocs.examples.angular/common-components";
export declare class ThumbnailsComponent implements OnInit, AfterViewInit, OnDestroy {
    private _navigateService;
    private _zoomService;
    pages: PageModel[];
    guid: string;
    mode: boolean;
    isHtmlMode: boolean;
    constructor(_navigateService: NavigateService, _zoomService: ZoomService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    imgData(data: string): string;
    getScale(x: number, y: number): number;
    openPage(pageNumber: number): void;
}
