import {Component} from '@angular/core';
import * as jquery from 'jquery';
import {
  CommonModals,
  FileCredentials,
  FileDescription,
  FileModel,
  ModalService, PageModel, PagePreloadService, TabActivatorService, UploadFilesService
} from "@groupdocs.examples.angular/common-components";
import {ComparisonConfigService} from "./comparison-config.service";
import {ComparisonService} from "./comparison.service";
import {ComparisonConfig} from "./comparison-config";
import {first} from "rxjs/operators";
import {CompareResult} from "./models";

const $ = jquery;

export class Files {
  static FIRST = 'first';
  static SECOND = 'second';
}

export class Highlight {
  id: string;
  hidden = true;
}

@Component({
  selector: 'gd-comparison',
  templateUrl: './comparison-app.component.html',
  styleUrls: ['./comparison-app.component.less']
})
export class ComparisonAppComponent {
  files: FileModel[] = [];
  browseFilesModal = CommonModals.BrowseFiles;
  private credentials: Map<string, FileCredentials> = new Map<string, FileCredentials>();
  private file: Map<string, FileDescription> = new Map<string, FileDescription>();
  private comparisonConfig: ComparisonConfig;
  activePanel: string;
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
  highlights: Highlight[] = [];

  constructor(private _comparisonService: ComparisonService,
              private configService: ComparisonConfigService,
              uploadFilesService: UploadFilesService,
              pagePreloadService: PagePreloadService,
              private _modalService: ModalService,
              private _tabActivatorService: TabActivatorService) {
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
    this._comparisonService.loadFile(credentials).subscribe((file: FileDescription) => {
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
      this.result.changes.forEach(function (change) {
        change.id = this.generateRandomInteger();
        this.highlights.push({id: change.id, hidden: true});
      }, this);
    }, (err => {
      this.resultTabDisabled = true;
      this._tabActivatorService.changeActiveTab(this.filesTab);
    }));
    this._tabActivatorService.changeActiveTab(this.resultTab);
  }

  generateRandomInteger() {
    function _p8(s) {
        const p = (Math.random().toString(16) + "000000000").substr(2, 8);
        return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
    }
    return _p8(null) + _p8(true) + _p8(true) + _p8(null);
  }

  hidden(id: string){
    return this.highlights.find(h => h.id === id) && this.highlights.find(h => h.id === id).hidden;
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

  highlightDifference(id: string){
    const highlight = this.highlights.find(h => h.id === id);
    // TODO: in assumption that all highlights are hidden by default
    highlight.hidden = false;
    this.highlights.forEach(h => {
      if (h.id !== id){
        h.hidden = true;
      }
    });
  }
}
