import {Injectable} from '@angular/core';
import {SearchConfig} from "./search-config";
import {Api, ConfigService} from "@groupdocs.examples.angular/common-components";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchConfigService {
  private _searchConfig: BehaviorSubject<SearchConfig> = new BehaviorSubject(new SearchConfig());
  private _updatedConfig: Observable<SearchConfig> = this._searchConfig.asObservable();

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  get updatedConfig() {
    return this._updatedConfig;
  }

  load() {
    return new Promise<void>((resolve, reject) => {
      const configEndpoint = this._config.getConfigEndpoint(Api.SEARCH_APP);
      this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((response: SearchConfig) => {
        const searchConfig = <SearchConfig>response;
        this._searchConfig.next(searchConfig);
        resolve();
      }).catch((response: any) => {
        reject(`Could not load search config: ${JSON.stringify(response)}`);
      });
    });
  }

}
