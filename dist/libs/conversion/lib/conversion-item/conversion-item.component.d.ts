import { OnInit } from '@angular/core';
import { ConversionItemModel } from '../models';
import { ConversionService } from "../conversion.service";
export declare class ConversionItemComponent implements OnInit {
    private _conversionService;
    item: ConversionItemModel;
    constructor(_conversionService: ConversionService);
    ngOnInit(): void;
    convert($event: any, item: ConversionItemModel): void;
    downloadFile(item: ConversionItemModel): void;
    removeItemFromQueue($event: any, item: ConversionItemModel): void;
}
