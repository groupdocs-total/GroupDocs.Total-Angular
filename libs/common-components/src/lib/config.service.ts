import {HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

export class Api {
  public static VIEWER_APP = '/viewer';
  public static EDITOR_APP = '/editor';
  public static COMPARISON_APP = '/comparison';
  public static DEFAULT_API_ENDPOINT = window.location.href;
  public static LOAD_FILE_TREE = '/loadFileTree';
  public static LOAD_CONFIG = '/loadConfig';
  public static LOAD_DOCUMENT_DESCRIPTION = '/loadDocumentDescription';
  public static LOAD_DOCUMENT_PAGE = '/loadDocumentPage';
  public static ROTATE_DOCUMENT_PAGE = '/rotateDocumentPages';
  public static UPLOAD_DOCUMENTS = '/uploadDocument';
  public static DOWNLOAD_DOCUMENTS = '/downloadDocument';
  public static LOAD_PRINT = '/loadPrint';
  public static LOAD_PRINT_PDF = '/printPdf';
  public static LOAD_THUMBNAILS = '/loadThumbnails';
  public static LOAD_FORMATS = '/loadFormats';
  public static SAVE_FILE = '/saveFile';
  public static COMPARE_FILES = '/compare';

  public static httpOptionsJson = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  public static httpOptionsJsonResponseTypeBlob = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    responseType: 'blob' as 'blob'
  };
}

@Injectable()
export class ConfigService {

  private _apiEndpoint = Api.DEFAULT_API_ENDPOINT;

  constructor() {
  }

  set apiEndpoint(url: string) {
    this._apiEndpoint = url && url.trim().endsWith('/') ? url.substring(0, url.length - 1) : url;
  }

  getConfigEndpoint(app) {
    return (this.apiEndpoint.endsWith(app) ? this.apiEndpoint : this.apiEndpoint + app) + Api.LOAD_CONFIG;
  }

  getViewerApiEndpoint() {
    return this._apiEndpoint.endsWith(Api.VIEWER_APP) ? this._apiEndpoint : this._apiEndpoint + Api.VIEWER_APP;
  }

  getEditorApiEndpoint() {
    return this._apiEndpoint.trim().endsWith(Api.EDITOR_APP) ? this._apiEndpoint : this._apiEndpoint + Api.EDITOR_APP;
  }

  getComparisonApiEndpoint() {
    return this._apiEndpoint.trim().endsWith(Api.COMPARISON_APP) ? this._apiEndpoint : this._apiEndpoint + Api.COMPARISON_APP;
  }

  get apiEndpoint() {
    return this._apiEndpoint;
  }
}
