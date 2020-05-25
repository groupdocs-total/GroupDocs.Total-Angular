import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Api, ConfigService, FileCredentials, FileUtil} from "@groupdocs.examples.angular/common-components";

@Injectable({
  providedIn: 'root'
})
export class WatermarkService {

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  loadFiles(path: string) {
    return this._http.post(this._config.getWatermarkApiEndpoint() + Api.LOAD_FILE_TREE, {'path': path}, Api.httpOptionsJson);
  }

  loadFile(credentials: FileCredentials) {
    return this._http.post(this._config.getWatermarkApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
  }

  upload(file: File, url: string, rewrite: boolean) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append('rewrite', String(rewrite));
    if (url) {
      formData.append("url", url);
    }

    return this._http.post(this._config.getWatermarkApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
  }

  loadPage(credentials: FileCredentials, page: number) {
    return this._http.post(this._config.getWatermarkApiEndpoint() + Api.LOAD_DOCUMENT_PAGE, {
      'guid': credentials.guid,
      'password': credentials.password,
      'page': page
    }, Api.httpOptionsJson);
  }

  getDownloadUrl(credentials: FileCredentials) {
    return this._config.getWatermarkApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
  }

  addWatermark(credentials: FileCredentials, watermarksData: any, print: boolean) {
    const data = {
      'guid': credentials.guid,
      'password': credentials.password,
      'watermarksData': watermarksData,
      'documentType': FileUtil.find(credentials.guid, false).format,
      'print': print
    };
    return this._http.post(this._config.getWatermarkApiEndpoint() + Api.ADD_WATERMARK, data, Api.httpOptionsJson);
  }
}
