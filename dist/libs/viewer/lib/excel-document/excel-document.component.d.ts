import { ElementRef, OnInit } from '@angular/core';
import { DocumentComponent, WindowService } from '@groupdocs.examples.angular/common-components';
import { ZoomService } from '@groupdocs.examples.angular/common-components';
export declare class ExcelDocumentComponent extends DocumentComponent implements OnInit {
    currentPageNo: number;
    constructor(_elementRef: ElementRef<HTMLElement>, zoomService: ZoomService, windowService: WindowService);
    ngOnInit(): void;
    selectSheet(number: any): void;
}
