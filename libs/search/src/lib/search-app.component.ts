import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SearchService} from "./search.service";
import {
  FileModel,
  ModalService,
  UploadFilesService,
  PasswordService,
  FileCredentials, CommonModals, LoadingMaskService
} from "@groupdocs.examples.angular/common-components";
import {SearchConfig} from "./search-config";
import {SearchConfigService} from "./search-config.service";
import {WindowService} from "@groupdocs.examples.angular/common-components";
import {
  IndexedFileModel,
  SearchResult,
  SearchResultItemModel,
  ExtendedFileModel,
  FileIndexingStatus,
  AppState,
  SearchBaseRequest,
  AddToIndexRequest,
} from "./search-models";
import { CommandsService } from './commands.service';

@Component({
  selector: 'gd-search-app',
  templateUrl: './search-app.component.html',
  styleUrls: ['./search-app.component.less'],
})
export class SearchAppComponent implements OnInit, AfterViewInit {
  title = 'search';
  appState = AppState.Default;
  files: ExtendedFileModel[] = [];
  searchResultItems: SearchResultItemModel[] = [];
  indexedFiles: IndexedFileModel[] = [];
  searchConfig: SearchConfig;
  credentials: FileCredentials;
  browseFilesModal = CommonModals.BrowseFiles;
  isDesktop: boolean;
  isLoading: boolean;
  skipPasswordProtected: boolean;
  searchResult: SearchResult;
  fileWasDropped = false;

  constructor(private _searchService: SearchService,
              private _modalService: ModalService,
              public configService: SearchConfigService,
              uploadFilesService: UploadFilesService,
              passwordService: PasswordService,
              private _commandsService: CommandsService,
              private _windowService: WindowService,
              private _loadingMaskService: LoadingMaskService) {

    configService.updatedConfig.subscribe((searchConfig) => {
      this.searchConfig = searchConfig;
    });

    uploadFilesService.uploadsChange.subscribe((uploads) => {
      if (uploads) {
        let i: number;
        for (i = 0; i < uploads.length; i++) {
          this._searchService.upload(uploads.item(i), '', this.configService.folderName).subscribe((obj: FileCredentials) => {
            if (!this.fileWasDropped) 
            {
              this.selectDir('');
            }
          });
        }
      }
    });

    passwordService.passChange.subscribe((pass: string) => {
      this.closeModal(CommonModals.PasswordRequired);

      const passwordRequiredFile = this.indexedFiles.filter(f => f.documentStatus === FileIndexingStatus.PasswordRequired)[0];
      passwordRequiredFile.password = pass;
      const request = new AddToIndexRequest();
      request.FolderName = this.configService.folderName;
      request.Files = [passwordRequiredFile];
      this._searchService.addFilesToIndex(request).subscribe(() => {
        this.loadIndexedFiles(true);
      });
    });

    this.isDesktop = _windowService.isDesktop();
    _windowService.onResize.subscribe((w) => {
      this.isDesktop = _windowService.isDesktop();
    });

    _searchService.itemToRemove.subscribe(file => {
      if (file) {
        this._searchService.removeFile(file, this.configService.folderName).subscribe(() => {
          this.removeFileFromList(file);
        });
      }
    });
  }

  ngOnInit() {
    const queryString = window.location.search;
    this.initParameters(queryString);
  }

  private initParameters(queryString: string) {
    if (queryString) {
      const urlParams = new URLSearchParams(queryString);
      this.configService.folderName = urlParams.get('FolderName');
      this.configService.isAdmin = urlParams.get('IsAdmin') === "true";

      const fileName = urlParams.get('FileName');
      if (this.configService.folderName && fileName) {
        const file = new FileModel();
        file.guid = fileName;
        const request = new AddToIndexRequest();
        request.FolderName = this.configService.folderName;
        request.Files = [file];
        this._searchService.addFilesToIndex(request).subscribe(() => {
          this.loadIndexedFiles(true);
        });
      }
    }
  }

  ngAfterViewInit() {
    this._loadingMaskService
      .onLoadingChanged
      .subscribe((loading: boolean) => this.isLoading = loading);
  }

  get rewriteConfig(): boolean {
    return this.searchConfig ? this.searchConfig.rewrite : true;
  }

  get uploadConfig(): boolean {
    return this.searchConfig ? this.searchConfig.upload : true;
  }

  get browseConfig(): boolean {
    return this.searchConfig ? this.searchConfig.browse : true;
  }

  private setDefaultAppState() {
    this.appState = AppState.Default;
  }

  pushCommand(name: string) {
    this._commandsService.pushCommand(name);
  }

  clearSearchResult() {
    this.appState = AppState.Default;
    this.searchResult = null;
  }

  goBack() {
    switch(this.appState) {
      case AppState.SearchResult: {
        this.appState = AppState.Default;
        this.searchResult = null;
        break;
      }
      case AppState.IndexedList: {
        this.setDefaultAppState();
        break;
      }
      default: {
        this.setDefaultAppState();
        break;
      }
    }
  }

  openIndexedList() {
    this.appState = AppState.IndexedList;
    this.loadIndexedFiles(true);
  }

  selectDictionary() {
    this.appState = AppState.DictionaryList;
  }

  onDictionarySelected(state: AppState) {
    this.appState = state;
  }

  openModal(id: string) {
    this._modalService.open(id);
  }

  closeModal(id: string) {
    this._modalService.close(id);
  }

  selectDir($event: string) {
    const request = new SearchBaseRequest();
    request.FolderName = this.configService.folderName;
    this._searchService.getUploadedFiles(request).subscribe((files: ExtendedFileModel[]) => this.files = files || []);
  }

  selectAllItems(checked: boolean) {
    this.files.forEach( (f) => {
      if (!f.isDirectory && !f.directory) f.selected = checked;
    });
  }

  loadIndexedFiles($event) {
    if (!$event) return;

    const request = new SearchBaseRequest();
    request.FolderName = this.configService.folderName;
    this._searchService.getIndexedFiles(request).subscribe((indexingFiles: IndexedFileModel[]) => 
    {
      if (indexingFiles && this.skipPasswordProtected && indexingFiles.filter(f => f.documentStatus === FileIndexingStatus.PasswordRequired).length > 0)
      {
        indexingFiles.filter(f => f.documentStatus === FileIndexingStatus.PasswordRequired)[0].documentStatus = FileIndexingStatus.Skipped;
      }

      this.indexedFiles = indexingFiles || [];
      if (this.indexedFiles.filter(f => f.documentStatus === FileIndexingStatus.Indexing).length > 0 ||
          (!this.skipPasswordProtected && this.indexedFiles.filter(f => f.documentStatus === FileIndexingStatus.PasswordRequired).length > 0))
      {
        const timerId = setInterval(() => 
        {
          this._searchService.getDocumentStatus(this.indexedFiles.filter(f => f.documentStatus === FileIndexingStatus.Indexing ||
            (!this.skipPasswordProtected && f.documentStatus === FileIndexingStatus.PasswordRequired))).toPromise().then((searchIndexFiles: IndexedFileModel[]) => 
          {
            searchIndexFiles.forEach((searchFile) => {
              if (searchFile.documentStatus !== FileIndexingStatus.Indexing)
              {
                this.indexedFiles.filter(f => f.guid === searchFile.guid)[0].documentStatus = searchFile.documentStatus;
              }
            });

            if (this.indexedFiles.filter(f => f.documentStatus === FileIndexingStatus.Indexing).length === 0)
            {
              clearInterval(timerId);
            }
        }).catch((response: any) => {
          clearInterval(timerId);
        });
        }, 1000);
      }
    });
  }

  cancel($event) {
    this.indexedFiles.filter(f => f.documentStatus === FileIndexingStatus.PasswordRequired)[0].documentStatus = FileIndexingStatus.Skipped;
    this.skipPasswordProtected = true;
    this.loadIndexedFiles(true);
  }

  upload($event: string) {
    this._searchService.upload(null, $event, this.configService.folderName).subscribe(() => {
      this.selectDir('');
    });
  }

  fileDropped($event, reloadFiles = false) {
    this.fileWasDropped = $event;

    if (reloadFiles)
    {
      const request = new SearchBaseRequest();
      request.FolderName = this.configService.folderName;
      this._searchService.getUploadedFiles(request).subscribe((files: ExtendedFileModel[]) => this.files = files || []);
    }
  }

  removeFileFromList(file: FileModel) {
    if (this.indexedFiles.length > 0) {
      this.indexedFiles.forEach( (f, index) => {
        if(f.guid === file.guid) this.indexedFiles.splice(index, 1);
      });
    }
  }

  search($event: string) {
    if ($event === "") return;

    this.appState = AppState.SearchResult;
    const creds = [];
    creds.push(this.credentials);
    this._searchService.search(creds, $event, this.configService.folderName).subscribe((result: SearchResult) => {
      this.searchResult = result;
    });
  }
}
