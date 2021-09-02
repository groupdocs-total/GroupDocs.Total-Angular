import { Injectable } from '@angular/core';
import { LoadingMaskService } from '@groupdocs.examples.angular/common-components';
import { SearchApi, SearchAppInfo } from './search-models';
import { SearchService } from './search.service';

@Injectable()
export class StateMonitorService {
  private _enabled: boolean;
  response: SearchAppInfo;

  constructor(private _searchService: SearchService,
              _loadingMaskService: LoadingMaskService) {
    _loadingMaskService['stopList'].push(SearchApi.GET_INFO);
  }

  public start() {
    this._enabled = true;
    this.update();
  }

  public stop() {
    this._enabled = false;
  }

  private update() {
    this._searchService.getInfo().subscribe((response: SearchAppInfo) => {
      this.response = response;

      if (this._enabled) {
        setTimeout(() => {this.update()}, 200);
      }
    });
  }
}
