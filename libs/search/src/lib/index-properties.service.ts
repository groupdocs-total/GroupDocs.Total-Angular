import { Injectable } from '@angular/core';
import { IndexPropertiesResponse } from './search-models';
import { SearchService } from './search.service';

@Injectable()
export class IndexPropertiesService {
  properties: IndexPropertiesResponse = new IndexPropertiesResponse();

  constructor(private _searchService: SearchService) {
    this.load();
  }

  private load() {
    this._searchService.getIndexProperties().subscribe((result: IndexPropertiesResponse) => {
      this.properties = result;
    });
  }
}
