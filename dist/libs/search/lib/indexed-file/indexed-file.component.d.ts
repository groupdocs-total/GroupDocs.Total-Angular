import { OnInit } from '@angular/core';
import { SearchService } from "../search.service";
import { FileModel } from '@groupdocs.examples.angular/common-components';
import { IndexedFileModel } from '../search-models';
export declare class IndexedFileComponent implements OnInit {
    private _searchService;
    file: IndexedFileModel;
    constructor(_searchService: SearchService);
    ngOnInit(): void;
    removeFile($event: any, file: FileModel): void;
    getSizeString(size: number): string;
    getFormatIcon(): any;
    getFormatName(): any;
    getStatusIcon(): "circle-notch" | "check" | "times" | "forward";
    getStatusTitle(): "times" | "Indexing" | "Indexed" | "Error" | "Skipped";
}
