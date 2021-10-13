import { EventEmitter, OnInit } from '@angular/core';
import { ConversionItemModel } from '../models';
export declare class ConversionQueueComponent implements OnInit {
    items: ConversionItemModel[];
    selectedItemToConvert: EventEmitter<ConversionItemModel>;
    constructor();
    ngOnInit(): void;
    convertSingleItem($event: ConversionItemModel): void;
}
