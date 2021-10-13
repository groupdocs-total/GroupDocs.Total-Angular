import { Injectable, NgModuleFactoryLoader } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Api, FileCredentials, FileUtil } from "@groupdocs.examples.angular/common-components";
import { ConfigService } from "../../../common-components/src/lib/config.service";
import { DocumentDescription, ParseByTemplateResponse, SourceFile, Template } from './app-models';
import { timeout } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ParserService {

  constructor(private _http: HttpClient, private _config: ConfigService) { }

  loadFiles(path: string) {
    return this._http.post(this._config.getParserApiEndpoint() + Api.LOAD_FILE_TREE, {'path': path}, Api.httpOptionsJson);
  }

  upload(file: File, url: string, rewrite: boolean) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append('rewrite', String(rewrite));
    if (url) {
      // formData.append("url", url);
    }

    return this._http.post(this._config.getParserApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
  }

  loadDocumentDescription(sourceFile: SourceFile): Observable<DocumentDescription> {
    let subject = new Subject<DocumentDescription>();

    const observer = {
      next: (response: DocumentDescription) => subject.next(response),
      complete: () => subject.complete(),
      error: (err: any) => {
        this.logToServer(err);
        console.error(err);
        subject.error(err);
      }
    };

    this._http.post(
      this._config.getParserApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION,
      sourceFile,
      Api.httpOptionsJson)
      .pipe(timeout(25000))
      .subscribe(observer);

    return subject;
  }

  parseByTemplate(sourceFile: SourceFile, password: string, template: Template): Observable<ParseByTemplateResponse> {
    let subject = new Subject<ParseByTemplateResponse>();

    const observer = {
      next: (response: ParseByTemplateResponse) => subject.next(response),
      complete: () => subject.complete(),
      error: (err: any) => {
        this.logToServer(err);
        console.error(err);
        subject.error(err);
      }
    };

    this._http.post(
      this._config.getParserApiEndpoint() + Api.PARSE,
      {
        guid: sourceFile.guid,
        password: sourceFile.password,
        fields: template.fields
      },
      Api.httpOptionsJson)
      .pipe(timeout(25000))
      .subscribe(observer);

    return subject;
  }

  // checkApiHealth(): Observable<boolean> {
  //   let subject = new Subject<boolean>();

  //   const observer = {
  //     next: response => subject.next(response == "Healthy"),
  //     complete: () => subject.complete(),
  //     error: () => {
  //       subject.next(false)
  //       subject.complete();
  //     }
  //   };

  //   let url = Api.apiEndPoint.endsWith("v1/")
  //     ? Api.apiEndPoint.substring(0, Api.apiEndPoint.length - "v1/".length)
  //     : Api.apiEndPoint;

  //   this._http.get(url + Api.health, { responseType: 'text' })
  //     .pipe(timeout(25000))
  //     .subscribe(observer);

  //   return subject;
  // }

  getErrorMessage(err: any): string {
    let text: string;

    if (err.status == 404) {
      text = "The requested file was not found."
    } else if (err.error && typeof err.error.title == "string") {
      text = err.error.title;
    } else if (typeof err.error == "string") {
      text = err.error;
    } else if (typeof err.title == "string") {
      text = err.title;
    } else {
      text = "The error occured while opening the file."
    }

    return text;
  }

  private logToServer(error: any) {
    const errorMessage = { error: JSON.stringify(error) };
    const url = localStorage.getItem("parser.logclienterror");
    if (url) {
      this._http.post(url, errorMessage, Api.httpOptionsJson).subscribe({
        next: () => console.log("Sent to server"),
        error: () => console.log("Can't send to server")
      });
    }
  }
}

// class Api {
//   // TODO: add configurable IP
//   public static apiEndPoint: string = window['GROUPDOCS_PARSER_API_BASE'] != null ? window['GROUPDOCS_PARSER_API_BASE'] : 'https://localhost:44333/v1/';

//   public static loadDocumentDescription = "loadDocumentDescription";

//   public static parseByTemplate = "parseByTemplate";

//   public static health = "health";


//   public static httpOptionsJson = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//     })
//   };
// }
