import {Injectable} from '@angular/core';
import {MetadataConfig} from "./metadata-config";
import {Api, ConfigService} from "@groupdocs.examples.angular/common-components";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MetadataConfigService {
  private _metadataConfig: BehaviorSubject<MetadataConfig> = new BehaviorSubject(new MetadataConfig());
  private _updatedConfig: Observable<MetadataConfig> = this._metadataConfig.asObservable();

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  get updatedConfig() {
    return this._updatedConfig;
  }

  load() {
    return new Promise<void>((resolve, reject) => {
      const configEndpoint = this._config.getConfigEndpoint(Api.METADATA_APP);
      this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((response: MetadataConfig) => {
        const metadataConfig = <MetadataConfig>response;
        this._metadataConfig.next(metadataConfig);
        resolve();
      }).catch((response: any) => {
        reject(`Could not load metadata config: ${JSON.stringify(response)}`);
      });
    });
  }
}
