import { Injectable } from '@angular/core';
import { SearchConfigService } from './search-config.service';
import { IndexPropertiesResponse, SearchBaseRequest } from './search-models';
import { SearchService } from './search.service';

@Injectable()
export class IndexPropertiesService {
  properties: IndexPropertiesResponse = new IndexPropertiesResponse();

  constructor(private _searchService: SearchService,
              private _searchConfigService: SearchConfigService) {
    this.load();
  }

  private load() {
    const request = new SearchBaseRequest();
    request.FolderName = this._searchConfigService.folderName;
    this._searchService.getIndexProperties(request).subscribe((result: IndexPropertiesResponse) => {
      this.properties = result;
    });
  }
}
