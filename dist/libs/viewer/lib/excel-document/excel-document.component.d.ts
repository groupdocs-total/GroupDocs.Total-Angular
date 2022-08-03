import { ElementRef, OnInit, QueryList, AfterViewInit, Renderer2 } from '@angular/core';
import { DocumentComponent, WindowService, NavigateService } from '@groupdocs.examples.angular/common-components';
import { ZoomService } from '@groupdocs.examples.angular/common-components';
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
    selectSheet(number: any): void;
}
