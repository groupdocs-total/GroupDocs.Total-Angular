import { ElementRef, OnInit, QueryList, AfterViewInit } from '@angular/core';
import { DocumentComponent, WindowService, NavigateService } from '@groupdocs.examples.angular/common-components';
import { ZoomService } from '@groupdocs.examples.angular/common-components';
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
