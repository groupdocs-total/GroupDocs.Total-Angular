import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Api, ConfigService} from "@groupdocs.examples.angular/common-components";
import {SignatureConfig} from "./signature-config";

@Injectable({
  providedIn: 'root'
})
export class SignatureConfigService {

  private _signatureConfig: BehaviorSubject<SignatureConfig> = new BehaviorSubject(new SignatureConfig());
  private _updatedConfig: Observable<SignatureConfig> = this._signatureConfig.asObservable();

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  get updatedConfig() {
    return this._updatedConfig;
  }

  load() {
    return new Promise<void>((resolve, reject) => {
      const configEndpoint = this._config.getConfigEndpoint(Api.SIGNATURE_APP);
      this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((response: SignatureConfig) => {
        const signatureConfig = <SignatureConfig>response;
        this._signatureConfig.next(signatureConfig);
        resolve();
      }).catch((response: any) => {
        reject(`Could not load signature config: ${JSON.stringify(response)}`);
      });
    });
  }
}
