import { ElementRef, OnInit } from '@angular/core';
import { DocumentComponent, WindowService } from '@groupdocs.examples.angular/common-components';
import { ZoomService } from '@groupdocs.examples.angular/common-components';
import { DifferencesService } from '../differences.service';
export declare class ResultDocumentComponent extends DocumentComponent implements OnInit {
    private changesService;
    constructor(_elementRef: ElementRef<HTMLElement>, zoomService: ZoomService, changeService: DifferencesService, windowService: WindowService);
    close(): void;
    ngOnInit(): void;
}
