import { OnInit } from '@angular/core';
import { SearchResult } from '../search-models';
export declare class SearchResultSummaryComponent implements OnInit {
    searchResult: SearchResult;
    constructor();
    ngOnInit(): void;
    getTotalOccurrencesMessage(): string;
    getIndexedFilesMessage(): string;
    getSearchDuration(): string;
}
