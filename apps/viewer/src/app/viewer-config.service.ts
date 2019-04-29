import {Injectable} from '@angular/core';
import {ViewerConfig} from "./viewer-config";
import {Api, ConfigService} from "@groupdocs-total-angular/common-components";
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
  }

  get updatedConfig() {
    return this._updatedConfig;
  }

  load() {
    this._config.load('viewer.' + environment.name).then(() => {
        return new Promise<void>((resolve, reject) => {
          const configEndpoint = this._config.getConfigEndpoint();
          if (configEndpoint.startsWith("http")) {
            this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((response: ViewerConfig) => {
              const viewerConfig = <ViewerConfig>response;
              this._viewerConfig.next(viewerConfig);
              resolve();
            }).catch((response: any) => {
              reject(`Could not load viewer config: ${JSON.stringify(response)}`);
            });
          } else {
            this._http.get(configEndpoint).toPromise().then((response: ViewerConfig) => {
              const viewerConfig = <ViewerConfig>response;
              this._viewerConfig.next(viewerConfig);
              resolve();
            }).catch((response: any) => {
              reject(`Could not load viewer config: ${JSON.stringify(response)}`);
            });
          }
        });
      }
    );

  }
}
