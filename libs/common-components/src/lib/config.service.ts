export class Api {
  public static DEFAULT_API_ENDPOINT = 'http://localhost:8080/viewer/';
  public static LOAD_FILE_TREE = 'loadFileTree';
  public static LOAD_DOCUMENT_DESCRIPTION = 'loadDocumentDescription';
}

export class ConfigService {

  private apiEndpoint = Api.DEFAULT_API_ENDPOINT;

  constructor() { }

  getApiEndpoint() {
    return this.apiEndpoint;
  }

  setApiEndpoint(endpoint: string) {
    this.apiEndpoint = endpoint;
  }
}
