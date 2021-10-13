import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ExcelPageService } from '../excel-page.service';
export declare class ExcelPageComponent implements OnInit, OnChanges {
    private _excelPageService;
    angle: number;
    width: number;
    height: number;
    number: number;
    data: string;
    isHtml: boolean;
    editable: boolean;
    imgData: string;
    constructor(_excelPageService: ExcelPageService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
