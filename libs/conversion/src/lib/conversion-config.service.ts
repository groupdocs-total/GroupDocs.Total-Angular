import {Injectable} from '@angular/core';
import {ConversionConfig} from "./conversion-config";
import {Api, ConfigService} from "@groupdocs.examples.angular/common-components";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConversionConfigService {
  private _conversionConfig: BehaviorSubject<ConversionConfig> = new BehaviorSubject(new ConversionConfig());
  private _updatedConfig: Observable<ConversionConfig> = this._conversionConfig.asObservable();

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  get updatedConfig() {
    return this._updatedConfig;
  }

  load() {
    return new Promise<void>((resolve, reject) => {
      const configEndpoint = this._config.getConfigEndpoint(Api.CONVERSION_APP);
      this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((response: ConversionConfig) => {
        const conversionConfig = <ConversionConfig>response;
        this._conversionConfig.next(conversionConfig);
        resolve();
      }).catch((response: any) => {
        reject(`Could not load conversion config: ${JSON.stringify(response)}`);
      });
    });
  }

}
