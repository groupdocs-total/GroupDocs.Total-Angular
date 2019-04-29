import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

export class Api {
  public static DEFAULT_API_ENDPOINT = 'http://localhost:8080/';
  public static LOAD_FILE_TREE = 'loadFileTree';
  public static LOAD_CONFIG = 'loadConfig';
  public static LOAD_DOCUMENT_DESCRIPTION = 'loadDocumentDescription';
  public static LOAD_DOCUMENT_PAGE = 'loadDocumentPage';
  public static ROTATE_DOCUMENT_PAGE = 'rotateDocumentPages';
  public static UPLOAD_DOCUMENTS = 'uploadDocument';

  public static httpOptionsJson = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
}

export class ApiConfig {
  apiEndpoint:string;
  configEndpoint: string;
}

@Injectable()
export class ConfigService {

  private _apiEndpoint = Api.DEFAULT_API_ENDPOINT;
  private _configEndpoint:string;
  private loaded: boolean;

  constructor(private http: HttpClient) {
    this.loaded = false;
  }

  getConfigEndpoint() {
    return this._configEndpoint ? this._configEndpoint : (this.getApiEndpoint() + Api.LOAD_CONFIG);
  }

  getApiEndpoint() {
    return this._apiEndpoint;
  }

  load(environmentName) {
    if (this.loaded)
      return;

    const jsonFile = `assets/config/config.${environmentName}.json`;
    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then((response : ApiConfig) => {
        this._apiEndpoint = (<ApiConfig>response).apiEndpoint;
        this._configEndpoint = (<ApiConfig>response).configEndpoint;
        this.loaded = true;
        resolve();
      }).catch((response: any) => {
        reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
      });
    });
  }
}
