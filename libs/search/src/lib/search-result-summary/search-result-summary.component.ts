import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { SearchResultItemModel } from '../search-models';

@Component({
  selector: 'gd-search-result-summary',
  templateUrl: './search-result-summary.component.html',
  styleUrls: ['./search-result-summary.component.less']
})

export class SearchResultSummaryComponent implements OnInit {
  @Input() items: SearchResultItemModel[] = [];

  constructor() {
  }
  
  ngOnInit(): void {
  }
}
