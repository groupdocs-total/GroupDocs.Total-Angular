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

  createDocument(name: string) {
    return this._http.post(this._config.getEditorApiEndpoint() + Api.CREATE_DOCUMENT, {'path': name }, Api.httpOptionsJson);
  }

  getFormats() {
    return this._http.get(this._config.getEditorApiEndpoint() + Api.LOAD_FORMATS, Api.httpOptionsJson);
  }

  loadFile(credentials: FileCredentials) {
    return this._http.post(this._config.getEditorApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
  }

  upload(file: File, url: string, rewrite: boolean) {
    var formData = new FormData();
    formData.append("file", file);
    formData.append('rewrite', String(rewrite));
    if (url) {
      formData.append("url", url);
    }

    return this._http.post(this._config.getEditorApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
  }
}
