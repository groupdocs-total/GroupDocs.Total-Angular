import { AfterViewChecked, ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { ViewportService } from "../viewport.service";
export declare class TopToolbarComponent implements OnInit, AfterViewChecked {
    private _elementRef;
    private _viewportService;
    private _cdRef;
    showLeft: boolean;
    showRight: boolean;
    constructor(_elementRef: ElementRef<HTMLElement>, _viewportService: ViewportService, _cdRef: ChangeDetectorRef);
    ngOnInit(): void;
    moveLeft(): void;
    moveRight(): void;
    private getToolsElem;
    private canMoveTo;
    private getElem;
    private getChildren;
    private getLeftOffset;
    private refresh;
    ngAfterViewChecked(): void;
}
