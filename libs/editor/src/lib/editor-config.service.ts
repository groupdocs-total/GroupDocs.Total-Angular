import {Injectable} from '@angular/core';
import {EditorConfig} from "./editor-config";
import {Api, ConfigService} from "@groupdocs.examples.angular/common-components";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EditorConfigService {
  private _editorConfig: BehaviorSubject<EditorConfig> = new BehaviorSubject(new EditorConfig());
  private _updatedConfig: Observable<EditorConfig> = this._editorConfig.asObservable();

  constructor(private _http: HttpClient, private _config: ConfigService) {

  }

  get updatedConfig() {
    return this._updatedConfig;
  }

  load() {
    return new Promise<void>((resolve, reject) => {
      const configEndpoint = this._config.getConfigEndpoint(Api.EDITOR_APP);
      this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((response: EditorConfig) => {
        const editorConfig = <EditorConfig>response;
        this._editorConfig.next(editorConfig);
        resolve();
      }).catch((response: any) => {
        reject(`Could not load editor config: ${JSON.stringify(response)}`);
      });
    });
  }

}
