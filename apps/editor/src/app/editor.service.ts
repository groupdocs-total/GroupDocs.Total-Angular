import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Api, ConfigService, FileCredentials} from "@groupdocs-total-angular/common-components";

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  loadFiles(path: string) {
    return this._http.post(this._config.getEditorApiEndpoint() + Api.LOAD_FILE_TREE, {'path': path}, Api.httpOptionsJson);
  }

  createDocument() {
    return this._http.post(this._config.getEditorApiEndpoint() + Api.CREATE_DOCUMENT, Api.httpOptionsJson);
  }
}
