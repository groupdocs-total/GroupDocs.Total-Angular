import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  Api, ConfigService, FileCredentials, SaveFile, FileModel
} from "@groupdocs.examples.angular/common-components";
import {Observable, BehaviorSubject, Observer} from "rxjs";
import {FileFormatModel} from "./models"

@Injectable({
  providedIn: 'root'
})

export class ConversionService {
  private _selectedFormat: BehaviorSubject<FileFormatModel> = new BehaviorSubject(new FileFormatModel());
  private _selectFormat: Observable<FileFormatModel> = this._selectedFormat.asObservable();

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  get selectedFormat() {
    return this._selectFormat;
  }

  selectFormat(value: any, file: FileModel) {
    let fileToConvert: FileFormatModel = {
      guid: file.guid,
      directory: file.directory,
      size: file.size,
      name: file.name,
      format: value
    };

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
