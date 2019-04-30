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

  upload(file: File, url: string, rewrite: boolean) {
    var formData = new FormData();
    formData.append("file", file);
    formData.append('rewrite', String(rewrite));
    if (url) {
      formData.append("url", url);
    }

    return this._http.post(this._config.getApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
  }

  loadPage(guid: string, page: number) {
    return this._http.post(this._config.getApiEndpoint() + Api.LOAD_DOCUMENT_PAGE, {'guid': guid, 'page': page}, Api.httpOptionsJson);
  }

  rotate(guid: string, angle: number, page: number) {
    return this._http.post(this._config.getApiEndpoint() + Api.ROTATE_DOCUMENT_PAGE, {'guid': guid, 'pages': [page], 'angle': angle}, Api.httpOptionsJson);
  }

  getDownloadUrl(guid: string) {
    return this._config.getApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?path=' + guid;
  }
}
