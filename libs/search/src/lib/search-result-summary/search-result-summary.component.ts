import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { SearchResultItemModel, SearchResult } from '../search-models';

@Component({
  selector: 'gd-search-result-summary',
  templateUrl: './search-result-summary.component.html',
  styleUrls: ['./search-result-summary.component.less']
})

export class SearchResultSummaryComponent implements OnInit {
  @Input() searchResult: SearchResult;

  constructor() {
  }
  
  ngOnInit(): void {
  }

  getTotalOccurrencesMessage() {
    if (this.searchResult.totalOccurences === 0)
    {
      return "Nothing found";
    }

    return "Found <b>" + this.searchResult.totalOccurences + "</b> occurrences <b>" + this.searchResult.totalFiles + "</b> files";
  }

  getIndexedFilesMessage() {
    return "<b>" + this.searchResult.indexedFiles + "</b> files indexed"
  }
}
