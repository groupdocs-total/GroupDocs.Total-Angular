import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Api, ConfigService} from "@groupdocs.examples.angular/common-components";
import {WatermarkConfig} from "./watermark-config";

@Injectable({
  providedIn: 'root'
})
export class WatermarkConfigService {

  private _watermarkConfig: BehaviorSubject<WatermarkConfig> = new BehaviorSubject(new WatermarkConfig());
  private _updatedConfig: Observable<WatermarkConfig> = this._watermarkConfig.asObservable();

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  get updatedConfig() {
    return this._updatedConfig;
  }

  load() {
    return new Promise<void>((resolve, reject) => {
      const configEndpoint = this._config.getConfigEndpoint(Api.WATERMARK_APP);
      this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((response: WatermarkConfig) => {
        const watermarkConfig = <WatermarkConfig>response;
        this._watermarkConfig.next(watermarkConfig);
        resolve();
      }).catch((response: any) => {
        reject(`Could not load watermark config: ${JSON.stringify(response)}`);
      });
    });
  }
}
