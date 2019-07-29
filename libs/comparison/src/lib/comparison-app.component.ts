import {Component} from '@angular/core';
import * as jquery from 'jquery';
import {
  CommonModals,
  FileCredentials,
  FileDescription,
  FileModel,
  ModalService, PageModel, PagePreloadService, UploadFilesService
} from "@groupdocs.examples.angular/common-components";
import {ComparisonConfigService} from "./comparison-config.service";
import {ComparisonService} from "./comparison.service";
import {ComparisonConfig} from "./comparison-config";
import {first} from "rxjs/operators";

const $ = jquery;

export class Files {
  static FIRST = 'first';
  static SECOND = 'second';
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

  constructor(private _comparisonService: ComparisonService,
              private configService: ComparisonConfigService,
              uploadFilesService: UploadFilesService,
              pagePreloadService: PagePreloadService,
              private _modalService: ModalService) {
    configService.updatedConfig.subscribe((config) => {
      this.comparisonConfig = config;
    });

    pagePreloadService.checkPreload.subscribe((page: number) => {
      if (this.comparisonConfig.preloadPageCount !== 0) {
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
          return value.directory || value.guid.split('.').pop() == nameExt;
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
          const preloadPageCount = this.comparisonConfig.preloadPageCount;
          this.countPages = file.pages ? file.pages.length : 0;
          if (preloadPageCount > 0) {
            this.preloadPages(param, 1, preloadPageCount > this.countPages ? this.countPages : preloadPageCount);
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
}
