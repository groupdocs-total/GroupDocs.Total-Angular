import { Injectable } from '@angular/core';
import { LoadingMaskService } from '@groupdocs.examples.angular/common-components';
import { GetStatusResponse, SearchApi, SearchBaseRequest } from './search-models';
import { SearchService } from './search.service';

@Injectable()
export class IndexingStatusService {
  private _timerId: number;
  private _request: SearchBaseRequest;
  indexing = 0;
  pending = 0;
  indexed = 0;

  constructor(private _searchService: SearchService,
              _loadingMaskService: LoadingMaskService) {
    _loadingMaskService['stopList'].push(SearchApi.GET_STATUS);
  }

  start(folderName: string) {
    this._request = new SearchBaseRequest();
    this._request.FolderName = folderName;
    this._timerId = setInterval(() => {
      this.update(); 
    }, 1000);
  }

  stop() {
    if (this._timerId) {
      clearInterval(this._timerId);
    }
  }

  private update() {
    this._searchService.getStatus(this._request).subscribe((response: GetStatusResponse) => {
      this.indexing = response.indexing;
      this.pending = response.pending;
      this.indexed = response.indexed;
    });
  }
}
