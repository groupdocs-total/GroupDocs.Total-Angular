import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Api, ConfigService, FileCredentials, FileUtil, Utils} from "@groupdocs.examples.angular/common-components";
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FileListWithParams, DraggableWatermark, AddedWatermark, WatermarkProps } from './watermark-models';

@Injectable({
  providedIn: 'root'
})
export class WatermarkService {
  private _observer: Subject<any> = new Subject();
  private readonly _refreshWatermarks: Observable<any> = this._observer.asObservable();

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  get getRefreshWatermarks(): Observable<any> {
    return this._refreshWatermarks;
  }

  loadFiles(path: string) {
    return this._http.post(this._config.getWatermarkApiEndpoint() + Api.LOAD_FILE_TREE, {'path': path}, Api.httpOptionsJson);
  }

  loadFile(credentials: FileCredentials) {
    return this._http.post(this._config.getWatermarkApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
  }

  upload(file: File, url: string, rewrite: boolean, watermarkType: string) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append('rewrite', String(rewrite));
    if (watermarkType) {
      formData.append("watermarkType", watermarkType);
    }
    if (url) {
      formData.append("url", url);
    }

    return this._http.post(this._config.getWatermarkApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
  }

  uploadWatermark(data: FileListWithParams, rewrite: boolean) {
    if (data.fileList.length > 1) {
      for (let i = 0; i < data.fileList.length - 1; i++) {
        this.upload(data.fileList.item(i), '', rewrite, data.watermarkType);
      }
    }
    return this.upload(data.fileList.item(data.fileList.length - 1), '', rewrite, data.watermarkType);
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

  saveWatermark(credentials: FileCredentials, watermarksData: any) {
    const data = {
      'guid': credentials.guid,
      'password': credentials.password ? credentials.password : "",
      'watermarksData': watermarksData,
      'documentType': FileUtil.find(credentials.guid, false).format
    };
    return this._http.post(this._config.getWatermarkApiEndpoint() + Api.SAVE_WATERMARK, data, Api.httpOptionsJson);
  }

  getWatermarks(path: string, type: string) {
    return this._http.post(this._config.getWatermarkApiEndpoint() + Api.LOAD_FILE_TREE, {
      'path': path,
      'watermarkType': type
    }, Api.httpOptionsJson);
  }

  loadWatermarkImage(watermark: DraggableWatermark) {
    return this._http.post(this._config.getWatermarkApiEndpoint() + Api.LOAD_WATERMARK_IMAGE, {
      'guid': watermark.guid,
      'page': watermark.pageNumber,
      'watermarkType': watermark.type,
      'password': ''
    }, Api.httpOptionsJson).pipe(
      map((props: AddedWatermark) => {
        props.guid = watermark.guid;
        return props;
      }));
  }

  saveTextWatermark(data: AddedWatermark) {
    const properties = data.props;
    properties.fontColor = Utils.toRgb(properties.fontColor);
    return this._http.post(this._config.getWatermarkApiEndpoint() + Api.SAVE_TEXT, {
      'properties': properties
    }, Api.httpOptionsJson).pipe(
      map((props: WatermarkProps) => {
        props.fontColor = Utils.toHex(props.fontColor);
        return props;
      }));
  }

  removeWatermarks(guid: string, type: string) {
    return this._http.post(this._config.getWatermarkApiEndpoint() + Api.DELETE_WATERMARK_FILE, {
      'guid': guid,
      'watermarkType': type
    }, Api.httpOptionsJson);
  }

  refreshWatermarks() {
    this._observer.next();
  }
}
