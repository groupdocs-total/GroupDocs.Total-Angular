import { EventEmitter, OnInit } from '@angular/core';
import { BrowseFilesModalComponent, UploadFilesService, ModalService } from '@groupdocs.examples.angular/common-components';
import { ConversionService } from '../conversion.service';
import { ExtendedFileModel } from "../models";
export interface Option {
    name: string;
    value: any;
    warning: boolean;
}
export declare class ConversionBrowseFilesModalComponent extends BrowseFilesModalComponent implements OnInit {
    private _conversionService;
    private _modalService;
    private _format;
    formats: any;
    files: ExtendedFileModel[];
    selectAll: EventEmitter<boolean>;
    dynamicOptions: Option[];
    constructor(_uploadService: UploadFilesService, _conversionService: ConversionService, _modalService: ModalService);
    selectAllItems(checked: boolean): void;
    selectSingleItem(checked: boolean, file: ExtendedFileModel): void;
    getLabelString(): string;
    prepareMultipleConversionTypes(): any[];
    selectFormat($event: any, file: ExtendedFileModel): void;
    createFormatOption(val: string): {
        value: string;
        name: string;
        icon: any;
    };
    formatOptions(formats: any): any[];
    anyItemSelected(): boolean;
    allItemsSelected(): boolean;
}
