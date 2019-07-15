import { AfterViewChecked, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FileDescription } from "../file.service";
import { ZoomService } from "../zoom.service";
export declare class DocumentComponent implements OnInit, OnChanges, AfterViewChecked {
    private _elementRef;
    mode: boolean;
    preloadPageCount: number;
    file: FileDescription;
    wait: boolean;
    refreshView: boolean;
    zoom: number;
    constructor(_elementRef: ElementRef<HTMLElement>, zoomService: ZoomService);
    ngOnInit(): void;
    ifPdf(): boolean;
    ifImage(): boolean;
    ngOnChanges(changes: SimpleChanges): void;
    ifChromeOrFirefox(): boolean;
    ifFirefox(): boolean;
    ngAfterViewChecked(): void;
}
