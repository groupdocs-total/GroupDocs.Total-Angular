import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  Api, ConfigService, FileCredentials, SaveFile
} from "@groupdocs.examples.angular/common-components"

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  loadFiles(path: string) {
    return this._http.post(this._config.getEditorApiEndpoint() + Api.LOAD_FILE_TREE, {'path': path}, Api.httpOptionsJson);
  }

  getFormats() {
    return this._http.get(this._config.getEditorApiEndpoint() + Api.LOAD_FORMATS, Api.httpOptionsJson);
  }

  loadFile(credentials: FileCredentials) {
    return this._http.post(this._config.getEditorApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
  }

  upload(file: File, url: string, rewrite: boolean) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append('rewrite', String(rewrite));
    if (url) {
      formData.append("url", url);
    }

    return this._http.post(this._config.getEditorApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
  }

  save(file: SaveFile) {
    return this._http.post(this._config.getEditorApiEndpoint() + Api.SAVE_FILE, file, Api.httpOptionsJson);
  }

  create(file: SaveFile) {
    return this._http.post(this._config.getEditorApiEndpoint() + Api.CREATE_FILE, file, Api.httpOptionsJson);
  }

  getDownloadUrl(credentials: FileCredentials) {
    return this._config.getEditorApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
  }
}
