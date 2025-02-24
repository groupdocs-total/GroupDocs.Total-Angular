import { Injectable } from '@angular/core';
import { ParserConfig } from "./parser-config";
import { Api, ConfigService } from "@groupdocs.examples.angular/common-components";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class ParserConfigService {
  private readonly SHOW_HELP = "parser.show-help";

  private _parserConfig: BehaviorSubject<ParserConfig> = new BehaviorSubject(new ParserConfig());
  private _updatedConfig: Observable<ParserConfig> = this._parserConfig.asObservable();

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  get updatedConfig() {
    return this._updatedConfig;
  }

  get showHelpAtStart(): boolean {
    return localStorage.getItem(this.SHOW_HELP) !== false.toString();
  }

  set showHelpAtStart(value: boolean) {
    if (!value) {
      localStorage.setItem(this.SHOW_HELP, false.toString());
    }
    else {
      localStorage.removeItem(this.SHOW_HELP);
    }
  }

  load() {
    return new Promise<void>((resolve, reject) => {
      const configEndpoint = this._config.getConfigEndpoint(Api.PARSER_APP);
      this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((response: ParserConfig) => {
        const parserConfig = <ParserConfig>response;
        this._parserConfig.next(parserConfig);
        resolve();
      }).catch((response: any) => {
        reject(`Could not load parser config: ${JSON.stringify(response)}`);
      });
    });
  }
}