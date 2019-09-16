import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  Api, ConfigService, FileCredentials, SaveFile, FileModel
} from "@groupdocs.examples.angular/common-components";
import {Observable, BehaviorSubject, Observer} from "rxjs";
import { ConversionItemModel, ConversionRequestModel } from './models';

@Injectable({
  providedIn: 'root'
})

export class ConversionService {
  private _selectedFormat: BehaviorSubject<ConversionItemModel[]> = new BehaviorSubject(new Array<ConversionItemModel>());
  private _selectFormats: Observable<ConversionItemModel[]> = this._selectedFormat.asObservable();

  private _itemToConvert = new BehaviorSubject<ConversionItemModel>(null);
  itemToConvert = this._itemToConvert.asObservable();

  private _itemToRemove = new BehaviorSubject<ConversionItemModel>(null);
  itemToRemove = this._itemToRemove.asObservable();

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  get selectedItems() {
    return this._selectFormats;
  }

  selectItems(filesToConvert: ConversionItemModel[]) {
    this._selectedFormat.next(filesToConvert);
  }

  loadFiles(path: string) {
    return this._http.post(this._config.getConversionApiEndpoint() + Api.LOAD_FILE_TREE, {'path': path}, Api.httpOptionsJson);
  }

  upload(file: File, url: string, rewrite: boolean) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append('rewrite', String(rewrite));
    if (url) {
      formData.append("url", url);
    }

    return this._http.post(this._config.getConversionApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
  }

  convert(file: ConversionItemModel) {
    const req = new ConversionRequestModel();
    req.added = true;
    req.destinationType = file.destinationType;
    req.guid = file.guid;
    req.size = file.size;
    return this._http.post(this._config.getConversionApiEndpoint() + Api.CONVERT_FILE, req);
  }

  getDownloadUrl(guid: string) {
    return this._config.getConversionApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?path=' + guid;
  }

  selectedItemToConvert(item: ConversionItemModel) {
    this._itemToConvert.next(item);
  }

  selectedItemToRemove(item: ConversionItemModel) {
    this._itemToRemove.next(item);
  }
}
