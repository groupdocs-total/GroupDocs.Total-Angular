import {Component} from '@angular/core';
import {ViewerService} from "./viewer.service";
import {
  FileDescription,
  FileModel,
  ModalService,
  UploadFilesService,
  NavigateService,
  PagePreloadService, PageModel
} from "@groupdocs-total-angular/common-components";
import {ViewerConfig} from "./viewer-config";
import {ViewerConfigService} from "./viewer-config.service";

@Component({
  selector: 'groupdocs-viewer-angular-root',
  templateUrl: './viewer-app.component.html',
  styleUrls: ['./viewer-app.component.less']
})
export class ViewerAppComponent {
  title = 'viewer';
  files: FileModel[] = [];
  file: FileDescription;
  viewerConfig: ViewerConfig;
  countPages: number = 0;

  constructor(private _viewerService: ViewerService,
              private _modalService: ModalService,
              configService: ViewerConfigService,
              uploadFilesService: UploadFilesService,
              private _navigateService: NavigateService,
              pagePreloadService: PagePreloadService) {

    configService.updatedConfig.subscribe((viewerConfig) => {
      this.viewerConfig = viewerConfig;
    });

    uploadFilesService.uploadsChange.subscribe((uploads) => {
      if (uploads) {
        var i: number;
        for (i = 0; i < uploads.length; i++) {
          this._viewerService.upload(uploads.item(i), '', this.viewerConfig.rewrite).subscribe(() => {
            this.selectDir('');
          });
        }
      }
    });

    pagePreloadService.checkPreload.subscribe((page: number) => {
      if (this.viewerConfig.preloadPageCount != 0) {
        for(let i = page; i < page + 2; i++) {
          if (i > 0 && i <= this.countPages && !this.file.pages[i - 1].data) {
            this.preloadPages(i, i);
          }
        }
      }
    });
  }

  get currentPage(): number {
    return this._navigateService.currentPage;
  }

  openModal(id: string) {
    this._modalService.open(id);
  }

  closeModal(id: string) {
    this._modalService.close(id);
  }

  selectDir($event: string) {
    this._viewerService.loadFiles($event).subscribe((files: FileModel[]) => this.files = files || []);
  }

  selectFile($event: string, modalId: string) {
    this._viewerService.loadFile($event).subscribe((file: FileDescription) => {
        this.file = file;
        const preloadPageCount = this.viewerConfig.preloadPageCount;
        const countPages = file.pages.length;
        if (preloadPageCount > 0) {
          this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
        }
        this._navigateService.countPages = countPages;
        this._navigateService.currentPage = 1;
        this.countPages = countPages;
      }
    );
    this._modalService.close(modalId);
  }

  preloadPages(start: number, end: number) {
    for (let i = start; i <= end; i++) {
      this._viewerService.loadPage(this.file.guid, i).subscribe((page: PageModel) => {
        this.file.pages[i - 1] = page;
      });
    }
  }

  upload($event: string) {
    this._viewerService.upload(null, $event, this.viewerConfig.rewrite).subscribe(() => {
      this.selectDir('');
    });
  }

  nextPage() {
    this._navigateService.nextPage();
  }

  prevPage() {
    this._navigateService.prevPage();
  }

  toLastPage() {
    this._navigateService.toLastPage();
  }

  toFirstPage() {
    this._navigateService.toFirstPage();
  }

  navigateToPage(page: number) {
    this._navigateService.navigateTo(page);
  }
}
