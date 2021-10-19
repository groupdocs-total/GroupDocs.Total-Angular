import { Injectable } from '@angular/core';
import { LoadingMaskService } from '@groupdocs.examples.angular/common-components';
import { SearchConfigService } from './search-config.service';
import { SearchApi, SearchAppInfo, SearchBaseRequest } from './search-models';
import { SearchService } from './search.service';

@Injectable()
export class StateMonitorService {
  private _enabled: boolean;
  response: SearchAppInfo;

  constructor(
    private _searchService: SearchService,
    private _configService: SearchConfigService,
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
    const request = new SearchBaseRequest();
    request.FolderName = this._configService.folderName;
    this._searchService.getInfo(request).subscribe((response: SearchAppInfo) => {
      this.response = response;

      if (this._enabled) {
        setTimeout(() => {this.update()}, 200);
      }
    });
  }
}
