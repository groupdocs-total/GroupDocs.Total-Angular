import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  Api, ConfigService, FileCredentials, SaveFile, FileModel
} from "@groupdocs.examples.angular/common-components";
import {Observable, BehaviorSubject, Observer} from "rxjs";
import {ConversionItemModel} from "./models";

@Injectable({
  providedIn: 'root'
})

export class ConversionService {
  private _selectedFormat: BehaviorSubject<ConversionItemModel> = new BehaviorSubject(new ConversionItemModel());
  private _selectFormat: Observable<ConversionItemModel> = this._selectedFormat.asObservable();

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  get selectedItem() {
    return this._selectFormat;
  }

  selectItem(fileToConvert: ConversionItemModel) {
    this._selectedFormat.next(fileToConvert);
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
}
