import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Api, ConfigService, FileCredentials, FileModel } from "@groupdocs.examples.angular/common-components";
import { BehaviorSubject } from 'rxjs';
import { AddToIndexRequest, AlphabetUpdateRequest, CharacterReplacementsUpdateRequest, DocumentPasswordsUpdateRequest, FilesDeleteRequest, FileStatusGetRequest, GetDocumentPageRequest, HighlightRequest, HomophonesUpdateRequest, IndexedFileModel, PrepareDocumentRequest, SearchApi, SearchAppInfo, SearchBaseRequest, SpellingCorrectorUpdateRequest, StopWordsUpdateRequest, SynonymsUpdateRequest } from './search-models';
import { SearchOptionsService } from './search-options.service';

@Injectable()
export class SearchService {
  private _itemToRemove = new BehaviorSubject<FileModel>(null);
  itemToRemove = this._itemToRemove.asObservable();

  constructor(private _http: HttpClient,
              private _config: ConfigService,
              private _searchOptionsService: SearchOptionsService) {
  }

  addFilesToIndex(request: AddToIndexRequest) {
    return this._http.post(this._config.apiEndpoint + Api.ADD_FILES_TO_INDEX, request, Api.httpOptionsJson);
  }

  deleteFiles(request: FilesDeleteRequest) {
    return this._http.post(this._config.apiEndpoint + SearchApi.DELETE_FILES, request, Api.httpOptionsJson);
  }

  downloadAndAddToIndex(request: AddToIndexRequest) {
    return this._http.post(this._config.apiEndpoint + SearchApi.DOWNLOAD_AND_ADD_TO_INDEX, request, Api.httpOptionsJson);
  }

  getUploadedFiles(request: SearchBaseRequest) {
    return this._http.post(this._config.apiEndpoint + SearchApi.GET_UPLOADED_FILES, request, Api.httpOptionsJson);
  }

  getIndexedFiles(request: SearchBaseRequest) {
    return this._http.post(this._config.apiEndpoint + SearchApi.GET_INDEXED_FILES, request, Api.httpOptionsJson);
  }

  loadFile(credentials: FileCredentials) {
    return this._http.post(this._config.apiEndpoint + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
  }

  upload(file: File, url: string, folderName: string, indexAfterUpload: boolean, recognizeTextInImages: boolean) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append('folderName', folderName);
    formData.append('indexAfterUpload', indexAfterUpload ? 'true' : 'false');
    formData.append('recognizeTextInImages', recognizeTextInImages ? 'true' : 'false');
    if (url) {
      formData.append("url", url);
    }

    return this._http.post(this._config.apiEndpoint + Api.UPLOAD_DOCUMENTS, formData);
  }

  search(credentials: FileCredentials[], query: string, folderName: string) {
    const body = {
      FolderName: folderName,
      Query: query,
      SearchType: this._searchOptionsService.SearchType,
      CaseSensitiveSearch: this._searchOptionsService.CaseSensitiveSearch,
      FuzzySearch: this._searchOptionsService.FuzzySearch,
      FuzzySearchMistakeCount: this._searchOptionsService.FuzzySearchMistakeCount,
      FuzzySearchOnlyBestResults: this._searchOptionsService.FuzzySearchOnlyBestResults,
      KeyboardLayoutCorrection: this._searchOptionsService.KeyboardLayoutCorrection,
      SynonymSearch: this._searchOptionsService.SynonymSearch,
      HomophoneSearch: this._searchOptionsService.HomophoneSearch,
      WordFormsSearch: this._searchOptionsService.WordFormsSearch,
      SpellingCorrection: this._searchOptionsService.SpellingCorrection,
      SpellingCorrectionMistakeCount: this._searchOptionsService.SpellingCorrectionMistakeCount,
      SpellingCorrectionOnlyBestResults: this._searchOptionsService.SpellingCorrectionOnlyBestResults,
    };
    return this._http.post(this._config.apiEndpoint + Api.SEARCH, body, Api.httpOptionsJson);
  }

  getReport(id: string) {
    const url = this._config.apiEndpoint + SearchApi.GET_REPORT + "?id=" + id;
    return this._http.get(url, { responseType: 'blob' as 'json' });
  }

  requestReindex(request: SearchBaseRequest) {
    const url = this._config.apiEndpoint + SearchApi.REQUEST_REINDEX;
    return this._http.post(url, request, Api.httpOptionsJson);
  }

  prepareDocument(request: PrepareDocumentRequest) {
    return this._http.post(this._config.apiEndpoint + SearchApi.PREPARE_DOCUMENT, request, Api.httpOptionsJson);
  }

  getDocumentPage(request: GetDocumentPageRequest) {
    return this._http.post(this._config.apiEndpoint + SearchApi.GET_DOCUMENT_PAGE, request, Api.httpOptionsJson);
  }

  highlight(request: HighlightRequest) {
    return this._http.post(this._config.apiEndpoint + SearchApi.HIGHLIGHT, request, { responseType: 'text' });
  }

  downloadSourceFile(request: HighlightRequest) {
    return this._http.post(this._config.apiEndpoint + SearchApi.DOWNLOAD_SOURCE_FILE, request, { responseType: 'blob' as 'json' });
  }

  downloadExtractedText(request: HighlightRequest) {
    return this._http.post(this._config.apiEndpoint + SearchApi.DOWNLOAD_EXTRACTED_TEXT, request, { responseType: 'blob' as 'json' });
  }

  removeFile(file: FileModel, folderName: string) {
    const data = {
      guid: file.guid,
      FolderName: folderName,
    };
    return this._http.post(this._config.apiEndpoint + Api.REMOVE_FROM_INDEX, data, Api.httpOptionsJson);
  }

  selectedItemToRemove(file: FileModel) {
    this._itemToRemove.next(file);
  }

  getStatus(request: SearchBaseRequest) {
    return this._http.post(this._config.apiEndpoint + SearchApi.GET_STATUS, request, Api.httpOptionsJson);
  }

  getDocumentStatus(request: FileStatusGetRequest) {
    return this._http.post(this._config.apiEndpoint + Api.GET_FILE_STATUS, request, Api.httpOptionsJson);
  }

  getIndexProperties(request: SearchBaseRequest) {
    const url = this._config.apiEndpoint + SearchApi.GET_INDEX_PROPERTIES;
    return this._http.post(url, request, Api.httpOptionsJson);
  }

  getInfo() {
    return this._http.post(this._config.apiEndpoint + SearchApi.GET_INFO, null, Api.httpOptionsJson);
  }

  getAlphabetDictionary() {
    const url = this._config.apiEndpoint + SearchApi.GET_ALPHABET_DICTIONARY;
    return this._http.post(url, Api.httpOptionsJson);
  }

  setAlphabetDictionary(data: AlphabetUpdateRequest) {
    const url = this._config.apiEndpoint + SearchApi.SET_ALPHABET_DICTIONARY;
    return this._http.post(url, data, Api.httpOptionsJson);
  }

  getStopWordDictionary() {
    const url = this._config.apiEndpoint + SearchApi.GET_STOP_WORD_DICTIONARY;
    return this._http.post(url, Api.httpOptionsJson);
  }

  setStopWordDictionary(data: StopWordsUpdateRequest) {
    const url = this._config.apiEndpoint + SearchApi.SET_STOP_WORD_DICTIONARY;
    return this._http.post(url, data, Api.httpOptionsJson);
  }

  getSynonymDictionary() {
    const url = this._config.apiEndpoint + SearchApi.GET_SYNONYM_DICTIONARY;
    return this._http.post(url, Api.httpOptionsJson);
  }

  setSynonymDictionary(data: SynonymsUpdateRequest) {
    const url = this._config.apiEndpoint + SearchApi.SET_SYNONYM_DICTIONARY;
    return this._http.post(url, data, Api.httpOptionsJson);
  }

  getHomophoneDictionary() {
    const url = this._config.apiEndpoint + SearchApi.GET_HOMOPHONE_DICTIONARY;
    return this._http.post(url, Api.httpOptionsJson);
  }

  setHomophoneDictionary(data: HomophonesUpdateRequest) {
    const url = this._config.apiEndpoint + SearchApi.SET_HOMOPHONE_DICTIONARY;
    return this._http.post(url, data, Api.httpOptionsJson);
  }

  getSpellingCorrectorDictionary() {
    const url = this._config.apiEndpoint + SearchApi.GET_SPELLING_CORRECTOR_DICTIONARY;
    return this._http.post(url, Api.httpOptionsJson);
  }

  setSpellingCorrectorDictionary(data: SpellingCorrectorUpdateRequest) {
    const url = this._config.apiEndpoint + SearchApi.SET_SPELLING_CORRECTOR_DICTIONARY;
    return this._http.post(url, data, Api.httpOptionsJson);
  }

  getCharacterReplacementDictionary() {
    const url = this._config.apiEndpoint + SearchApi.GET_CHARACTER_REPLACEMENT_DICTIONARY;
    return this._http.post(url, Api.httpOptionsJson);
  }

  setCharacterReplacementDictionary(data: CharacterReplacementsUpdateRequest) {
    const url = this._config.apiEndpoint + SearchApi.SET_CHARACTER_REPLACEMENT_DICTIONARY;
    return this._http.post(url, data, Api.httpOptionsJson);
  }

  getDocumentPasswordDictionary() {
    const url = this._config.apiEndpoint + SearchApi.GET_DOCUMENT_PASSWORD_DICTIONARY;
    return this._http.post(url, Api.httpOptionsJson);
  }

  setDocumentPasswordDictionary(data: DocumentPasswordsUpdateRequest) {
    const url = this._config.apiEndpoint + SearchApi.SET_DOCUMENT_PASSWORD_DICTIONARY;
    return this._http.post(url, data, Api.httpOptionsJson);
  }
}
