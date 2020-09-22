import { OnInit, OnDestroy, AfterViewInit, OnChanges, EventEmitter } from '@angular/core';
import { NavigateService } from '../navigate.service';
import { PageModel } from '../file.service';
import { ZoomService } from '../zoom.service';
export declare class ThumbnailsComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private _navigateService;
    private _zoomService;
    pages: PageModel[];
    guid: string;
    mode: boolean;
    isHtmlMode: boolean;
    selectedPage: EventEmitter<number>;
    constructor(_navigateService: NavigateService, _zoomService: ZoomService);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    imgData(data: string): string;
    getScale(x: number, y: number): number;
    openPage(pageNumber: number): void;
    getDimensionWithUnit(value: number): any;
}
