import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Api, ConfigService} from "@groupdocs-total-angular/common-components";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ViewerService {

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  loadFiles(path: string) {
    return this._http.post(this._config.getApiEndpoint() + Api.LOAD_FILE_TREE, {'path': path}, httpOptions);
  }

  loadFile(guid: string) {
    return this._http.post(this._config.getApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, {'guid': guid}, httpOptions);
  }
}
