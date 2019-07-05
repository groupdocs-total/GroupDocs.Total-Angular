import {Injectable} from '@angular/core';
import {ViewerConfig} from "./viewer-config";
import {Api, ConfigService} from "@groupdocs.examples.angular/common-components";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ViewerConfigService {
  private _viewerConfig: BehaviorSubject<ViewerConfig> = new BehaviorSubject(new ViewerConfig());
  private _updatedConfig: Observable<ViewerConfig> = this._viewerConfig.asObservable();

  constructor(private _http: HttpClient, private _config: ConfigService) {
    _config.apiEndpoint = environment.apiUrl;
  }

  get updatedConfig() {
    return this._updatedConfig;
  }

  load() {
    return new Promise<void>((resolve, reject) => {
      const configEndpoint = this._config.getConfigEndpoint(Api.VIEWER_APP);
      this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((response: ViewerConfig) => {
        const viewerConfig = <ViewerConfig>response;
        this._viewerConfig.next(viewerConfig);
        resolve();
      }).catch((response: any) => {
        reject(`Could not load viewer config: ${JSON.stringify(response)}`);
      });
    });
  }

}
