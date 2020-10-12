import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Api, ConfigService, FileCredentials} from "@groupdocs.examples.angular/common-components";

@Injectable({
  providedIn: 'root'
})
export class ViewerService {

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  loadFiles(path: string) {
    return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_FILE_TREE, {'path': path}, Api.httpOptionsJson);
  }

  loadFile(credentials: FileCredentials, terms: string[]) {
    return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, {
      'guid': credentials.guid,
      'password': credentials.password,
      'terms': terms,
    }, Api.httpOptionsJson);
  }

  upload(file: File, url: string, rewrite: boolean) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append('rewrite', String(rewrite));
    if (url) {
      formData.append("url", url);
    }

    return this._http.post(this._config.getViewerApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
  }

  loadPage(credentials: FileCredentials, page: number, terms: string[]) {
    return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_DOCUMENT_PAGE, {
      'guid': credentials.guid,
      'password': credentials.password,
      'page': page,
      'terms': terms,
    }, Api.httpOptionsJson);
  }

  rotate(credentials: FileCredentials, angle: number, page: number) {
    return this._http.post(this._config.getViewerApiEndpoint() + Api.ROTATE_DOCUMENT_PAGE, {
      'guid': credentials.guid,
      'password': credentials.password,
      'pages': [page],
      'angle': angle
    }, Api.httpOptionsJson);
  }

  getDownloadUrl(credentials: FileCredentials) {
    return this._config.getViewerApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
  }

  loadPrint(credentials: FileCredentials) {
    return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_PRINT, {
      'guid': credentials.guid,
      'password': credentials.password,
    }, Api.httpOptionsJson);
  }

  loadPrintPdf(credentials: FileCredentials) {
    return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_PRINT_PDF, {
      'guid': credentials.guid,
      'password': credentials.password,
    }, Api.httpOptionsJsonResponseTypeBlob);
  }

  loadThumbnails(credentials: FileCredentials) {
    return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_THUMBNAILS, {
      'guid': credentials.guid,
      'password': credentials.password,
    }, Api.httpOptionsJson);
  }
}
