import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

export class Api {
  public static DEFAULT_API_ENDPOINT = 'http://localhost:8080/';
  public static LOAD_FILE_TREE = 'loadFileTree';
  public static LOAD_CONFIG = 'loadConfig';
  public static LOAD_DOCUMENT_DESCRIPTION = 'loadDocumentDescription';
  public static UPLOAD_DOCUMENTS = 'uploadDocument';

  public static httpOptionsJson = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
}

export class ApiConfig {
  apiEndpoint:string;
}

@Injectable()
export class ConfigService {

  private apiEndpoint = Api.DEFAULT_API_ENDPOINT;
  private loaded: boolean;

  constructor(private http: HttpClient) {
    this.loaded = false;
  }

  getApiEndpoint() {
    return this.apiEndpoint;
  }

  load(environmentName) {
    if (this.loaded)
      return;

    const jsonFile = `assets/config/config.${environmentName}.json`;
    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then((response : ApiConfig) => {
        this.apiEndpoint = (<ApiConfig>response).apiEndpoint;
        this.loaded = true;
        resolve();
      }).catch((response: any) => {
        reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
      });
    });
  }
}
