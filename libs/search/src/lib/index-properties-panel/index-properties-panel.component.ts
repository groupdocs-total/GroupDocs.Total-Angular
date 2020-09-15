import { Component, OnInit } from '@angular/core';
import { IndexPropertiesService } from '../index-properties.service';
import { IndexProperties } from '../search-models';
import { SearchService } from '../search.service';

@Component({
  selector: 'gd-index-properties-panel',
  templateUrl: './index-properties-panel.component.html',
  styleUrls: ['./index-properties-panel.component.less']
})
export class IndexPropertiesPanelComponent implements OnInit {

  constructor(private _searchService: SearchService,
              public properties: IndexPropertiesService) {
  }

  ngOnInit() {
    this._searchService.getIndexProperties().subscribe((result: IndexProperties) => {
      this.properties.properties = result;
    });
  }
}
