import {Injectable} from '@angular/core';
import {ComparisonConfig} from "./comparison-config";
import {Api, ConfigService} from "@groupdocs.examples.angular/common-components";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComparisonConfigService {
  private _comparisonConfig: BehaviorSubject<ComparisonConfig> = new BehaviorSubject(new ComparisonConfig());
  private _updatedConfig: Observable<ComparisonConfig> = this._comparisonConfig.asObservable();

  constructor(private _http: HttpClient, private _config: ConfigService) {
    _config.apiEndpoint = environment.apiUrl;
  }

  get updatedConfig() {
    return this._updatedConfig;
  }

  load() {
    return new Promise<void>((resolve, reject) => {
      const configEndpoint = this._config.getConfigEndpoint(Api.COMPARISON_APP);
      this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((response: ComparisonConfig) => {
        const comparisonConfig = <ComparisonConfig>response;
        this._comparisonConfig.next(comparisonConfig);
        resolve();
      }).catch((response: any) => {
        reject(`Could not load comparison config: ${JSON.stringify(response)}`);
      });
    });
  }

}
