import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Api, ConfigService, FileCredentials} from "@groupdocs.examples.angular/common-components";
import {AddedSignature, DraggableSignature, FileListWithParams} from "./signature-models";

@Injectable({
  providedIn: 'root'
})
export class SignatureService {

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  loadFiles(path: string) {
    return this._http.post(this._config.getSignatureApiEndpoint() + Api.LOAD_FILE_TREE, {'path': path}, Api.httpOptionsJson);
  }

  loadFile(credentials: FileCredentials) {
    return this._http.post(this._config.getSignatureApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
  }

  upload(file: File, url: string, rewrite: boolean, signType: string) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append('rewrite', String(rewrite));
    if (signType) {
      formData.append("signatureType", signType);
    }
    if (url) {
      formData.append("url", url);
    }

    return this._http.post(this._config.getSignatureApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
  }

  loadPage(credentials: FileCredentials, page: number) {
    return this._http.post(this._config.getSignatureApiEndpoint() + Api.LOAD_DOCUMENT_PAGE, {
      'guid': credentials.guid,
      'password': credentials.password,
      'page': page
    }, Api.httpOptionsJson);
  }

  getDownloadUrl(credentials: FileCredentials) {
    return this._config.getSignatureApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
  }

  loadPrint(credentials: FileCredentials) {
    return this._http.post(this._config.getSignatureApiEndpoint() + Api.LOAD_PRINT, {
      'guid': credentials.guid,
      'password': credentials.password,
    }, Api.httpOptionsJson);
  }

  loadPrintPdf(credentials: FileCredentials) {
    return this._http.post(this._config.getSignatureApiEndpoint() + Api.LOAD_PRINT_PDF, {
      'guid': credentials.guid,
      'password': credentials.password,
    }, Api.httpOptionsJsonResponseTypeBlob);
  }

  getSignatures(path: string, type: string) {
    return this._http.post(this._config.getSignatureApiEndpoint() + Api.LOAD_FILE_TREE, {
      'path': path,
      'signatureType': type
    }, Api.httpOptionsJson);
  }

  removeSignatures(guid: string, type: string) {
    return this._http.post(this._config.getSignatureApiEndpoint() + Api.DELETE_SIGNATURE_FILE, {
      'guid': guid,
      'signatureType': type
    }, Api.httpOptionsJson);
  }

  uploadSignature(data: FileListWithParams, rewrite: boolean) {
    if (data.fileList.length > 1) {
      for (let i = 0; i < data.fileList.length - 1; i++) {
        this.upload(data.fileList.item(i), '', rewrite, data.signType);
      }
    }
    return this.upload(data.fileList.item(data.fileList.length - 1), '', rewrite, data.signType);
  }

  getCode(text: string, temp: boolean, type: string) {
    return this._http.post(this._config.getSignatureApiEndpoint() + Api.SAVE_OPTICAL_CODE, {
      'properties': {'text': text, 'temp': temp},
      'signatureType': type
    }, Api.httpOptionsJson);
  }

  loadSignatureImage(sign: DraggableSignature) {
    return this._http.post(this._config.getSignatureApiEndpoint() + Api.LOAD_SIGNATURE_IMAGE, {
      'guid': sign.guid,
      'page': sign.pageNumber,
      'signatureType': sign.type,
      'password': ''
    }, Api.httpOptionsJson);
  }

  saveTextSignature(data: AddedSignature) {
    return this._http.post(this._config.getSignatureApiEndpoint() + Api.SAVE_TEXT, {
      'properties': data.props
    }, Api.httpOptionsJson);
  }

  saveImage(img: string) {
    return this._http.post(this._config.getSignatureApiEndpoint() + Api.SAVE_IMAGE, {
      'image': img
    }, Api.httpOptionsJson);
  }
}
