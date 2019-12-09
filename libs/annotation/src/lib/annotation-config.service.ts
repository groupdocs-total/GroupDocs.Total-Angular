import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Api, ConfigService} from "@groupdocs.examples.angular/common-components";
import {AnnotationConfig} from "./annotation-config";

@Injectable({
  providedIn: 'root'
})
export class AnnotationConfigService {

  private _annotationConfig: BehaviorSubject<AnnotationConfig> = new BehaviorSubject(new AnnotationConfig());
  private _updatedConfig: Observable<AnnotationConfig> = this._annotationConfig.asObservable();

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  get updatedConfig() {
    return this._updatedConfig;
  }

  load() {
    return new Promise<void>((resolve, reject) => {
      const configEndpoint = this._config.getConfigEndpoint(Api.ANNOTATION_APP);
      this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((response: AnnotationConfig) => {
        const annotationConfig = <AnnotationConfig>response;
        this._annotationConfig.next(annotationConfig);
        resolve();
      }).catch((response: any) => {
        reject(`Could not load annotation config: ${JSON.stringify(response)}`);
      });
    });
  }
}
