import { AfterViewChecked, ElementRef, OnInit } from '@angular/core';
import { FileDescription } from "../file.service";
import { ZoomService } from "../zoom.service";
export declare class DocumentComponent implements OnInit, AfterViewChecked {
    private _elementRef;
    mode: boolean;
    preloadPageCount: number;
    file: FileDescription;
    wait: boolean;
    zoom: number;
    constructor(_elementRef: ElementRef<HTMLElement>, zoomService: ZoomService);
    ngOnInit(): void;
    getDimensionWithUnit(value: number): any;
    ngAfterViewChecked(): void;
}
