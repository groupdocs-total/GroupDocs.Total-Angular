import { ElementRef, OnInit, QueryList, AfterViewInit, Renderer2 } from '@angular/core';
import { DocumentComponent } from '../document/document.component';
import { WindowService } from '../window.service';
import { NavigateService } from '../navigate.service';
import { ZoomService } from '../zoom.service';
import { ExcelPageComponent } from '../excel-page/excel-page.component';
export declare class ExcelDocumentComponent extends DocumentComponent implements OnInit, AfterViewInit {
    private renderer;
    pages: QueryList<ExcelPageComponent>;
    currentPageNo: number;
    panzoom: any;
    navigateService: NavigateService;
    constructor(_elementRef: ElementRef<HTMLElement>, zoomService: ZoomService, windowService: WindowService, navigateService: NavigateService, renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    getScrollBarWidth(): number;
    refreshExcelDocHeight(): void;
    selectSheet(number: any): void;
}
