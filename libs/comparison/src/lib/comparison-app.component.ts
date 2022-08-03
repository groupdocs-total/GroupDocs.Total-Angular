import {Component, ElementRef, OnInit} from '@angular/core';
import * as jquery from 'jquery';
import {
  CommonModals,
  FileCredentials,
  FileDescription,
  FileModel,
  ModalService, PageModel, PagePreloadService, TabActivatorService, UploadFilesService, PasswordService
} from "@groupdocs.examples.angular/common-components";
import {ComparisonConfigService} from "./comparison-config.service";
import {ComparisonService} from "./comparison.service";
import {ComparisonConfig} from "./comparison-config";
import {CompareResult} from "./models";
import { forkJoin } from 'rxjs';

const $ = jquery;

export class Files {
  static FIRST = 'first';
  static SECOND = 'second';
}

export class Highlight {
  id: string;
  active = false;
}

@Component({
  selector: 'gd-comparison',
  templateUrl: './comparison-app.component.html',
  styleUrls: ['./comparison-app.component.less']
})
export class ComparisonAppComponent implements OnInit {
  files: FileModel[] = [];
  browseFilesModal = CommonModals.BrowseFiles;
  credentials: Map<string, FileCredentials> = new Map<string, FileCredentials>();
  file: Map<string, FileDescription> = new Map<string, FileDescription>();
  comparisonConfig: ComparisonConfig;
  activePanel: string;
  firstFile: string = undefined;
  secondFile: string = undefined;
  first = Files.FIRST;
  second = Files.SECOND;
  firstFileName: string = undefined;
  secondFileName: string = undefined;
  loadingFirstPanel = false;
  loadingSecondPanel = false;
  countPages = 0;
  result: CompareResult;
  filesTab = 'files';
  resultTab = 'result';
  activeTab = this.filesTab;
  resultTabDisabled = true;

  constructor(private _comparisonService: ComparisonService,
              private configService: ComparisonConfigService,
              uploadFilesService: UploadFilesService,
              pagePreloadService: PagePreloadService,
              private _modalService: ModalService,
              private _tabActivatorService: TabActivatorService,
              private _elementRef: ElementRef<HTMLElement>,
              passwordService: PasswordService) {
    configService.updatedConfig.subscribe((config) => {
      this.comparisonConfig = config;
    });

    pagePreloadService.checkPreload.subscribe((page: number) => {
      if (this.comparisonConfig.preloadResultPageCount !== 0) {
        this.checkPreload(this.first, page);
        this.checkPreload(this.second, page);
      }
    });

    uploadFilesService.uploadsChange.subscribe((uploads) => {
      const active = this.activePanel;
      this.setLoading(active, true);
      if (uploads) {
        let i: number;
        for (i = 0; i < uploads.length; i++) {
          this._comparisonService.upload(uploads.item(i), '', this.rewriteConfig).subscribe((obj: FileCredentials) => {
            this.getFile(obj.guid, '', active);
            this.selectDir('');
          });
        }
      }
    });

    _tabActivatorService.activeTabChange.subscribe((tabId: string) => {
      this.activeTab = tabId;
    });

    passwordService.passChange.subscribe((pass: string) => {
      let activePanelFileGuid = "";
      if (this.credentials.get(this.first)) {
        activePanelFileGuid = this.credentials.get(this.first).guid;
      } else if (this.credentials.get(this.second)) {
        activePanelFileGuid = this.credentials.get(this.second).guid;
      }
      this.selectFile(activePanelFileGuid, pass, CommonModals.PasswordRequired, this.activePanel);
    });
  }

  ngOnInit() {
    if(this.firstFile && this.secondFile) {
      this.compareFiles();
      return;
    }

    if (window.location.search) {
      const urlParams = new URLSearchParams(window.location.search);

      this.firstFile = urlParams.get(Files.FIRST);
      this.secondFile = urlParams.get(Files.SECOND);
      if(this.firstFile && this.secondFile) {
        this.compareFiles();
      }
    }
  }

  compareFiles() {
    const first = this.selectFirstDefaultFile(this.firstFile, '');
    const second = this.selectSecondDefaultFile(this.secondFile, '');

    forkJoin([first, second]).subscribe(() => {
      this.compare();
    });
  }

  get uploadConfig(): boolean {
    return this.comparisonConfig ? this.comparisonConfig.upload : true;
  }

  private setLoading(panel: string, flag: boolean) {
    if (panel === this.first) {
      this.loadingFirstPanel = flag;
    } else {
      this.loadingSecondPanel = flag;
    }
  }

  get rewriteConfig(): boolean {
    return this.comparisonConfig ? this.comparisonConfig.rewrite : true;
  }

  selectDir($event: string) {
    this._comparisonService.loadFiles($event).subscribe((files: FileModel[]) => {
      let nameExt: string;
      if (this.credentials.get(this.first)) {
        nameExt = this.credentials.get(this.first).guid.split('.').pop();
      } else if (this.credentials.get(this.second)) {
        nameExt = this.credentials.get(this.second).guid.split('.').pop();
      }

      if (nameExt) {
        files = files.filter(function (value) {
          return value.directory || value.guid.split('.').pop() === nameExt;
        });
      }
      this.files = files || [];
    });
  }

  selectFirstDefaultFile($event: string, password: string) {
    this.setLoading(Files.FIRST, true);
    return this.getFile($event, password, Files.FIRST);
  }

  selectSecondDefaultFile($event: string, password: string) {
    this.setLoading(Files.SECOND, true);
    return this.getFile($event, password, Files.SECOND);
  }

  selectFile($event: string, password: string, modalId: string, param: string) {
    this.setLoading(param, true);
    this.getFile($event, password, param);
    this.selectDir('');
    this._modalService.close(modalId);
    this.clearData(param);
  }

  private getFile($event: string, password: string, param: string) {
    const credentials = {guid: $event, password: password};
    this.credentials.set(param, credentials);
    const observable = this._comparisonService.loadFile(credentials);
    observable.subscribe((file: FileDescription) => {
        this.file.set(param, file);
        if (file) {
          const preloadResultPageCount = this.comparisonConfig.preloadResultPageCount;
          this.countPages = file.pages ? file.pages.length : 0;
          if (preloadResultPageCount > 0) {
            this.preloadPages(param, 1, preloadResultPageCount > this.countPages ? this.countPages : preloadResultPageCount);
          }
        }
        this.updateFileNames();
        this.setLoading(param, false);
      }
    );
    return observable;
  }

  clearFile(param: string) {
    this.clearData(param);
    this.credentials.delete(param);
    this.result = null;
    this.resultTabDisabled = true;
    this._tabActivatorService.changeActiveTab(this.filesTab);
  }

  private clearData(param) {
    if (!this.file || !this.file.size) {
      return;
    }
    this.file.delete(param);
    if (param === this.first) {
      this.firstFileName = undefined;
    } else {
      this.secondFileName = undefined;
    }
  }

  preloadPages(param: string, start: number, end: number) {
    for (let i = start; i <= end; i++) {
      this._comparisonService.loadPage(this.credentials.get(param), i).subscribe((page: PageModel) => {
        this.file.get(param).pages[i - 1] = page;
      });
    }
  }

  upload($event: string) {
    const active = this.activePanel;
    this._comparisonService.upload(null, $event, this.rewriteConfig).subscribe((obj: FileCredentials) => {
      this.getFile(obj.guid, '', active);
      this.selectDir('');
    });
  }

  updateFileNames() {
    this.firstFileName = this.getFirstFileName();
    this.secondFileName = this.getSecondFileName();
  }

  getSecondFileName() {
    const fileCredentials = this.credentials ? this.credentials.get(this.second) : undefined;
    return fileCredentials ? fileCredentials.guid.replace(/^.*[\\\/]/, '') : '';
  }

  getFirstFileName() {
    const fileCredentials = this.credentials ? this.credentials.get(this.first) : undefined;
    return fileCredentials ? fileCredentials.guid.replace(/^.*[\\\/]/, '') : '';
  }

  private checkPreload(panel: string, page: number) {
    if (!this.file.get(panel)) {
      return
    }
    for (let i = page; i < page + 2; i++) {
      if (i > 0 && i <= this.countPages && !this.file.get(panel).pages[i - 1].data) {
        this.preloadPages(panel, i, i);
      }
    }
  }

  compare() {
    if (this.credentials.size !== 2) {
      return;
    }
    this.resultTabDisabled = false;
    const arr = [];
    arr.push(this.credentials.get(this.first));
    arr.push(this.credentials.get(this.second));
    this._comparisonService.compare(arr).subscribe((result: CompareResult) => {
      this.result = result;

      const isZeroBasedPageId = this.result.changes.find((change) => change.pageInfo.pageNumber === 0);

      this.result.changes.forEach( (change) => {
        change.id = this.generateRandomInteger();
        const zeroBasedId = isZeroBasedPageId ? change.pageInfo.pageNumber : change.pageInfo.pageNumber - 1;
        change.pageInfo.pageNumber = isZeroBasedPageId ? change.pageInfo.pageNumber : change.pageInfo.pageNumber - 1;
        if(!this.result.pages[zeroBasedId].changes){
          this.result.pages[zeroBasedId].changes = [];
        }
        this.result.pages[zeroBasedId].changes.push(change);
        change.normalized = {
          x : this.pxToPt(change.box.x) * 100 / change.pageInfo.width,
          y : this.pxToPt(change.box.y) * 100 / change.pageInfo.height,
          width: this.pxToPt(change.box.width) * 100 / change.pageInfo.width,
          height: this.pxToPt(change.box.height) * 100 / change.pageInfo.height,
        };
      });
    }, (err => {
      this.resultTabDisabled = true;
      this._tabActivatorService.changeActiveTab(this.filesTab);
    }));
    this._tabActivatorService.changeActiveTab(this.resultTab);
  }

  pxToPt(px: number) {
    return px * 72 / 96;
  }

  generateRandomInteger() {
    function _p8(s) {
        const p = (Math.random().toString(16) + "000000000").substr(2, 8);
        return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
    }
    return _p8(null) + _p8(true) + _p8(true) + _p8(null);
  }

  download() {
    if (!this.result) {
      return;
    }
    const credentials = {'guid': this.result.guid, 'password': ''};
    window.location.assign(this._comparisonService.getDownloadUrl(credentials));
  }

  hideSidePanel($event) {
    this.activeTab = $event ? this.filesTab : this.resultTab;
    this._tabActivatorService.changeActiveTab(this.filesTab);
  }
}
