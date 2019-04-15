import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Api, ConfigService} from "@groupdocs-total-angular/common-components";

@Injectable({
  providedIn: 'root'
})
export class ViewerService {

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  loadFiles(path: string) {
    return this._http.post(this._config.getApiEndpoint() + Api.LOAD_FILE_TREE, {'path': path}, Api.httpOptionsJson);
  }

  loadFile(guid: string) {
    return this._http.post(this._config.getApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, {'guid': guid}, Api.httpOptionsJson);
  }
}
