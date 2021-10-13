import { OnInit } from '@angular/core';
import { SearchResultItemModel } from '../search-models';
import { FileModel } from "@groupdocs.examples.angular/common-components";
export declare class SearchResultItemComponent implements OnInit {
    item: SearchResultItemModel;
    constructor();
    ngOnInit(): void;
    getSizeString(size: number): string;
    getFormatIcon(file: FileModel): any;
    getFormatName(file: FileModel): any;
    getOccurrencesMessage(occurrences: number): string;
    togglePhrases(item: any): void;
}
