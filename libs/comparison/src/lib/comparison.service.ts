import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  Api, ConfigService, FileCredentials, SaveFile
} from "@groupdocs.examples.angular/common-components"

@Injectable({
  providedIn: 'root'
})
export class ComparisonService {

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  loadFiles(path: string) {
    return this._http.post(this._config.getComparisonApiEndpoint() + Api.LOAD_FILE_TREE, {'path': path}, Api.httpOptionsJson);
  }

  getFormats() {
    return this._http.get(this._config.getComparisonApiEndpoint() + Api.LOAD_FORMATS, Api.httpOptionsJson);
  }

  loadFile(credentials: FileCredentials) {
    return this._http.post(this._config.getComparisonApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
  }

  upload(file: File, url: string, rewrite: boolean) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append('rewrite', String(rewrite));
    if (url) {
      formData.append("url", url);
    }

    return this._http.post(this._config.getComparisonApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
  }

  save(file: SaveFile) {
    return this._http.post(this._config.getComparisonApiEndpoint() + Api.SAVE_FILE, file, Api.httpOptionsJson);
  }

  getDownloadUrl(credentials: FileCredentials) {
    return this._config.getComparisonApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?guid=' + credentials.guid;
  }

  loadPage(credentials: FileCredentials, page: number) {
    return this._http.post(this._config.getComparisonApiEndpoint() + Api.LOAD_DOCUMENT_PAGE, {
      'guid': credentials.guid,
      'password': credentials.password,
      'page': page
    }, Api.httpOptionsJson);
  }

  compare(arr: FileCredentials[]) {
    return this._http.post(this._config.getComparisonApiEndpoint() + Api.COMPARE_FILES, {'guids': arr}, Api.httpOptionsJson);
  }
}
