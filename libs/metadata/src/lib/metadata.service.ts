import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Api, ConfigService, FileCredentials} from "@groupdocs.examples.angular/common-components";
import { ChangedPackageModel } from './metadata-models';

@Injectable({
  providedIn: 'root'
})

export class MetadataService {

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  loadFiles(path: string) {
    return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_FILE_TREE, {'path': path}, Api.httpOptionsJson);
  }

  loadFile(credentials: FileCredentials) {
    return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
  }

  loadProperties(credentials: FileCredentials) {
    return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_DOCUMENT_PROPERTIES, credentials, Api.httpOptionsJson);
  }

  loadPropertiesNames(credentials: FileCredentials) {
    return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_DOCUMENT_PROPERTIES_NAMES, credentials, Api.httpOptionsJson);
  }

  saveProperty(metadataFile: MetadataFileDescription) {
    return this._http.post(this._config.getMetadataApiEndpoint() + Api.SAVE_PROPERTY, metadataFile, Api.httpOptionsJson);
  }

  removeProperty(metadataFile: MetadataFileDescription) {
    return this._http.post(this._config.getMetadataApiEndpoint() + Api.REMOVE_PROPERTY, metadataFile, Api.httpOptionsJson);
  }

  cleanMetadata(metadataFile: FileCredentials) {
    return this._http.post(this._config.getMetadataApiEndpoint() + Api.CLEAN_METADATA, metadataFile, Api.httpOptionsJson);
  }

  upload(file: File, url: string, rewrite: boolean) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append('rewrite', String(rewrite));
    if (url) {
      formData.append("url", url);
    }

    return this._http.post(this._config.getMetadataApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
  }

  loadPage(credentials: FileCredentials, page: number) {
    return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_DOCUMENT_PAGE, {
      'guid': credentials.guid,
      'password': credentials.password,
      'page': page
    }, Api.httpOptionsJson);
  }

  getDownloadUrl(credentials: FileCredentials) {
    return this._config.getMetadataApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
  }

  exportProperties(credentials: FileCredentials) {
    return this._http.post(this._config.getMetadataApiEndpoint() + Api.EXPORT_METADATA, credentials, Api.httpOptionsJsonResponseTypeBlob);
  }

  loadPrint(credentials: FileCredentials) {
    return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_PRINT, {
      'guid': credentials.guid,
      'password': credentials.password,
    }, Api.httpOptionsJson);
  }
}

export class MetadataFileDescription {
  guid: string;
  password: string;
  packages: ChangedPackageModel[];
}
