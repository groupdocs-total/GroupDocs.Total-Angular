import { AfterViewChecked, ElementRef, OnInit, AfterViewInit, OnChanges, EventEmitter } from '@angular/core';
import { FileDescription, PageModel } from "@groupdocs.examples.angular/common-components";
import { ZoomService } from "@groupdocs.examples.angular/common-components";
import { WindowService } from "@groupdocs.examples.angular/common-components";
import { NavigateService } from "@groupdocs.examples.angular/common-components";
export declare class RunPresentationComponent implements OnInit, AfterViewChecked, AfterViewInit, OnChanges {
    protected _elementRef: ElementRef<HTMLElement>;
    private _zoomService;
    private _windowService;
    private _navigateService;
    mode: boolean;
    preloadPageCount: number;
    file: FileDescription;
    currentPage: number;
    selectedPage: EventEmitter<number>;
    wait: boolean;
    zoom: number;
    container: any;
    doc: any;
    isDesktop: boolean;
    lastCurrentPage: number;
    constructor(_elementRef: ElementRef<HTMLElement>, _zoomService: ZoomService, _windowService: WindowService, _navigateService: NavigateService);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    scrollTo(pageNumber: number, onRight: boolean, animate?: boolean): void;
    private doScrolling;
    getDimensionWithUnit(value: number, pageNumber: number): any;
    isVertical(page: PageModel): boolean;
    onPanLeft($event: any): void;
    onPanRight($event: any): void;
}
