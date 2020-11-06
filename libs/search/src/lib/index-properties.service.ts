import { Injectable } from '@angular/core';
import { IndexProperties } from './search-models';
import { SearchService } from './search.service';

@Injectable()
export class IndexPropertiesService {
  properties: IndexProperties = new IndexProperties();

  constructor(private _searchService: SearchService) {
  }

  load() {
    this._searchService.getIndexProperties().subscribe((result: IndexProperties) => {
      this.properties = result;
    });
  }
}
