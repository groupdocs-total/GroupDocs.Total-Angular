import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Api, ConfigService, FileCredentials, FileModel } from "@groupdocs.examples.angular/common-components";
import { BehaviorSubject } from 'rxjs';
import { IndexedFileModel } from './search-models';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  private _itemToRemove = new BehaviorSubject<FileModel>(null);
  itemToRemove = this._itemToRemove.asObservable();

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  addFilesToIndex(filesToIndex: FileModel[]) {
    return this._http.post(this._config.getSearchApiEndpoint() + Api.ADD_FILES_TO_INDEX, filesToIndex, Api.httpOptionsJson);
  }

  loadFiles(path: string) {
    return this._http.post(this._config.getSearchApiEndpoint() + Api.LOAD_FILE_TREE, {'path': path}, Api.httpOptionsJson);
  }

  loadFile(credentials: FileCredentials) {
    return this._http.post(this._config.getSearchApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
  }

  upload(file: File, url: string, rewrite: boolean) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append('rewrite', String(rewrite));
    if (url) {
      formData.append("url", url);
    }

    return this._http.post(this._config.getSearchApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
  }

  search(credentials: FileCredentials[], query: string) {
    return this._http.post(this._config.getSearchApiEndpoint() + Api.SEARCH, {
      'query': query
    }, Api.httpOptionsJson);
  }

  removeFile(file: FileModel) {
    return this._http.post(this._config.getSearchApiEndpoint() + Api.REMOVE_FROM_INDEX, file, Api.httpOptionsJson);
  }

  selectedItemToRemove(file: FileModel) {
    this._itemToRemove.next(file);
  }

  getDocumentStatus(files: IndexedFileModel[]) {
    return this._http.post(this._config.getSearchApiEndpoint() + Api.GET_FILE_STATUS, files, Api.httpOptionsJson);
  }
}
