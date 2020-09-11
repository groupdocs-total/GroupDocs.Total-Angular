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
} from "./search-models";

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
              configService: SearchConfigService,
              uploadFilesService: UploadFilesService,
              passwordService: PasswordService,
              private _windowService: WindowService,
              private _loadingMaskService: LoadingMaskService) {

    configService.updatedConfig.subscribe((searchConfig) => {
      this.searchConfig = searchConfig;
    });

    uploadFilesService.uploadsChange.subscribe((uploads) => {
      if (uploads) {
        let i: number;
        for (i = 0; i < uploads.length; i++) {
          this._searchService.upload(uploads.item(i), '', this.searchConfig.rewrite).subscribe((obj: FileCredentials) => {
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
      this._searchService.addFilesToIndex([passwordRequiredFile]).subscribe(() => {
        this.loadIndexedFiles(true);
      });
    });

    this.isDesktop = _windowService.isDesktop();
    _windowService.onResize.subscribe((w) => {
      this.isDesktop = _windowService.isDesktop();
    });

    _searchService.itemToRemove.subscribe(file => {
      if (file) {
        this._searchService.removeFile(file).subscribe(() => {
          this.removeFileFromList(file);
        });
      }
    });
  }

  ngOnInit() {
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

  clearSearchResult() {
    this.appState = AppState.Search;
    this.searchResult = null;
  }

  goBack() {
    switch(this.appState) {
      case AppState.Search: {
        this.appState = AppState.Default;
        break;
      }
      case AppState.SearchResult: {
        this.appState = AppState.Search;
        this.searchResult = null;
        break;
      }
      case AppState.IndexedList: {
        this.appState = AppState.Default;
        break;
      }
    }
  }

  openSearch() {
    this.appState = AppState.Search;
  }

  openIndexedList() {
    this.appState = AppState.IndexedList;
    this.loadIndexedFiles(true);
  }

  openModal(id: string) {
    this._modalService.open(id);
  }

  closeModal(id: string) {
    this._modalService.close(id);
  }

  selectDir($event: string) {
    this._searchService.loadFiles($event).subscribe((files: ExtendedFileModel[]) => this.files = files || []);
  }

  selectAllItems(checked: boolean) {
    this.files.forEach( (f) => {
      if (!f.isDirectory && !f.directory) f.selected = checked;
    });
  }

  loadIndexedFiles($event) {
    if (!$event) return;

    this._searchService.loadFiles(this.searchConfig.indexedFilesDirectory).subscribe((indexingFiles: IndexedFileModel[]) => 
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
    this._searchService.upload(null, $event, this.rewriteConfig).subscribe(() => {
      this.selectDir('');
    });
  }

  fileDropped($event, reloadFiles = false) {
    this.fileWasDropped = $event;

    if (reloadFiles)
    {
      this._searchService.loadFiles('').subscribe((files: ExtendedFileModel[]) => this.files = files || []);
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
    this._searchService.search(creds, $event).subscribe((result: SearchResult) => {
      this.searchResult = result;
    });
  }
}
