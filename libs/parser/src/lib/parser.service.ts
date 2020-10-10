import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { FileCredentials, FileUtil } from "@groupdocs.examples.angular/common-components";
import { ConfigService } from "../../../common-components/src/lib/config.service";
import { Template } from './app-models';


@Injectable({
  providedIn: 'root'
})
export class ParserService {

  constructor(private _http: HttpClient, private _config: ConfigService) { }

  loadFiles(path: string) {
    return this._http.post(this._config.getParserApiEndpoint() + Api.LOAD_FILE_TREE, {'path': path}, Api.httpOptionsJson);
  }

  loadFile(credentials: FileCredentials) {
    return this._http.post(this._config.getParserApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
  }

  upload(file: File, url: string, rewrite: boolean) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append('rewrite', String(rewrite));
    if (url) {
      formData.append("url", url);
    }

    return this._http.post(this._config.getParserApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
  }

  parseByTemplate(documentGuid : string, template : Template){
    const formData = new FormData();
    formData.append("documentGuid", documentGuid);

    const txt = JSON.stringify(template.getFields());

    return this._http.post(this._config.getParserApiEndpoint() + Api.PARSE_BY_TEMPLATE, { guid: documentGuid, fields: template.getFields() }, Api.httpOptionsJson);
  }
}

class Api {
  public static VIEWER_APP = '/viewer';
  public static SIGNATURE_APP = '/signature';
  public static ANNOTATION_APP = '/annotation';
  public static SEARCH_APP = '/search';
  public static EDITOR_APP = '/editor';
  public static COMPARISON_APP = '/comparison';
  public static CONVERSION_APP = '/conversion';
  public static METADATA_APP = '/metadata';
  public static PARSER_APP = '/parser';
  public static DEFAULT_API_ENDPOINT = window.location.href;
  public static LOAD_FILE_TREE = '/loadFileTree';
  public static LOAD_CONFIG = '/loadConfig';
  public static LOAD_DOCUMENT_DESCRIPTION = '/loadDocumentDescription';
  public static LOAD_DOCUMENT_PAGE = '/loadDocumentPage';
  public static LOAD_DOCUMENT_PROPERTIES = '/loadProperties';
  public static LOAD_DOCUMENT_PROPERTIES_NAMES = '/loadPropertiesNames';
  public static SAVE_PROPERTY = '/saveProperty';
  public static REMOVE_PROPERTY = '/removeProperty';
  public static ROTATE_DOCUMENT_PAGE = '/rotateDocumentPages';
  public static UPLOAD_DOCUMENTS = '/uploadDocument';
  public static DOWNLOAD_DOCUMENTS = '/downloadDocument';
  public static LOAD_PRINT = '/loadPrint';
  public static LOAD_PRINT_PDF = '/printPdf';
  public static LOAD_THUMBNAILS = '/loadThumbnails';
  public static LOAD_FORMATS = '/loadFormats';
  public static SAVE_FILE = '/saveFile';
  public static CREATE_FILE = '/createFile';
  public static COMPARE_FILES = '/compare';
  public static CONVERT_FILE = '/convert';
  public static DELETE_SIGNATURE_FILE = '/deleteSignatureFile';
  public static REMOVE_FROM_INDEX = '/removeFromIndex';
  public static GET_FILE_STATUS = '/getFileStatus';
  public static SAVE_OPTICAL_CODE = '/saveOpticalCode';
  public static SAVE_TEXT = '/saveText';
  public static SAVE_IMAGE = '/saveImage';
  public static SAVE_STAMP = '/saveStamp';
  public static SIGN = '/sign';
  public static DOWNLOAD_SIGNED = '/downloadSigned';
  public static LOAD_SIGNATURE_IMAGE = '/loadSignatureImage';
  public static ANNOTATE = '/annotate';
  public static SEARCH = '/search';
  public static ADD_FILES_TO_INDEX = '/addFilesToIndex';
  public static PARSE_BY_TEMPLATE = '/parseByTemplate';

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
