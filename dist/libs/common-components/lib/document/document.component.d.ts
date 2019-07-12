import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FileDescription } from "../file.service";
import { ZoomService } from "../zoom.service";
export declare class DocumentComponent implements OnInit, OnChanges {
    mode: boolean;
    preloadPageCount: number;
    file: FileDescription;
    wait: boolean;
    refreshView: boolean;
    zoom: number;
    constructor(zoomService: ZoomService);
    ngOnInit(): void;
    ifPdf(): boolean;
    ifImage(): boolean;
    ngOnChanges(changes: SimpleChanges): void;
    ifChromeOrFirefox(): boolean;
    ifFirefox(): boolean;
}
