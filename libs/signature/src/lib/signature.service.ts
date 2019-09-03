import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Api, ConfigService, FileCredentials, FileUtil} from "@groupdocs.examples.angular/common-components";
import {AddedSignature, DraggableSignature, FileListWithParams, SignatureProps} from "./signature-models";
import {map} from "rxjs/operators";

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
    }, Api.httpOptionsJson).pipe(
      map((props: AddedSignature) => {
        props.guid = sign.guid;
        return props;
      }));
  }

  saveTextSignature(data: AddedSignature) {
    const properties = data.props;
    properties.fontColor = this.toRgb(properties.fontColor);
    return this._http.post(this._config.getSignatureApiEndpoint() + Api.SAVE_TEXT, {
      'properties': properties
    }, Api.httpOptionsJson).pipe(
      map((props: SignatureProps) => {
        props.fontColor = this.toHex(props.fontColor);
        return props;
      }));
  }

  private toRgb(color: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return result ? 'rgb(' + r + ',' + g + ',' + b + ')' : '';
  }

  private toHex(color: string) {
    // check if color is standard hex value
    if (color.match(/[0-9A-F]{6}|[0-9A-F]{3}$/i)) {
      return (color.charAt(0) === "#") ? color : ("#" + color);
      // check if color is RGB value -> convert to hex
    } else if (color.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/)) {
      const c = ([parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10), parseInt(RegExp.$3, 10)]),
        pad = function (str) {
          if (str.length < 2) {
            for (let i = 0, len = 2 - str.length; i < len; i++) {
              str = '0' + str;
            }
          }
          return str;
        };
      if (c.length === 3) {
        const r = pad(c[0].toString(16)),
          g = pad(c[1].toString(16)),
          b = pad(c[2].toString(16));
        return '#' + r + g + b;
      }
      // else do nothing
    } else {
      return '';
    }
  }

  saveImage(img: string) {
    return this._http.post(this._config.getSignatureApiEndpoint() + Api.SAVE_IMAGE, {
      'image': img
    }, Api.httpOptionsJson);
  }

  saveStamp(img: string, props: any[]) {
    return this._http.post(this._config.getSignatureApiEndpoint() + Api.SAVE_STAMP, {
      'image': img,
      'stampData': props
    }, Api.httpOptionsJson);
  }

  sign(credentials: FileCredentials, signatures: any[]) {
    const docType = FileUtil.find(credentials.guid, false).format;
    return this._http.post(this._config.getSignatureApiEndpoint() + Api.SIGN, {
      guid: credentials.guid,
      password: credentials.password ? credentials.password : "",
      signaturesData: signatures,
      documentType: docType
    }, Api.httpOptionsJson);
  }

  downloadSigned(credentials: FileCredentials, signatures: any[]) {
    const docType = FileUtil.find(credentials.guid, false).format;
    return this._http.post(this._config.getSignatureApiEndpoint() + Api.DOWNLOAD_SIGNED, {
      guid: credentials.guid,
      password: credentials.password,
      signaturesData: signatures,
      documentType: docType
    }, Api.httpOptionsJsonResponseTypeBlob);
  }
}
