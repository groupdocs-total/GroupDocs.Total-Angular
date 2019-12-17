import { ElementRef, OnInit, QueryList, AfterViewInit } from '@angular/core';
import { DocumentComponent } from '../document/document.component';
import { WindowService } from '../window.service';
import { NavigateService } from '../navigate.service';
import { ZoomService } from '../zoom.service';
import { ExcelPageComponent } from '../excel-page/excel-page.component';
export declare class ExcelDocumentComponent extends DocumentComponent implements OnInit, AfterViewInit {
    private _navigateService;
    pages: QueryList<ExcelPageComponent>;
    currentPageNo: number;
    panzoom: any;
    constructor(_elementRef: ElementRef<HTMLElement>, zoomService: ZoomService, windowService: WindowService, _navigateService: NavigateService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    refreshExcelDocHeight(): void;
    selectSheet(number: any): void;
}
