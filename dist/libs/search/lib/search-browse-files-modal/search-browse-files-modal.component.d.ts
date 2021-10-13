import { EventEmitter, OnInit } from '@angular/core';
import { BrowseFilesModalComponent, UploadFilesService, ModalService } from '@groupdocs.examples.angular/common-components';
import { SearchService } from '../search.service';
import { ExtendedFileModel } from "../search-models";
export interface Option {
    name: string;
    value: any;
    warning: boolean;
}
export declare class SearchBrowseFilesModalComponent extends BrowseFilesModalComponent implements OnInit {
    private _searchService;
    private _modalService;
    files: ExtendedFileModel[];
    selectAll: EventEmitter<boolean>;
    filesAddedToIndex: EventEmitter<boolean>;
    fileDropped: EventEmitter<boolean>;
    constructor(_uploadService: UploadFilesService, _searchService: SearchService, _modalService: ModalService);
    selectAllItems(checked: boolean): void;
    selectSingleItem(checked: boolean, file: ExtendedFileModel): void;
    getLabelString(): string;
    anyItemSelected(): boolean;
    allItemsSelected(): boolean;
    addSelectedToIndex(): void;
    dropped($event: any): void;
}
