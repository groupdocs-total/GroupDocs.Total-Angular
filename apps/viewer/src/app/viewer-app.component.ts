import {Component} from '@angular/core';
import {ViewerService} from "./viewer.service";
import {
  FileDescription,
  FileModel,
  ModalService,
  UploadFilesService,
  NavigateService,
  PagePreloadService,
  PageModel,
  ZoomService
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
  _zoom: number = 100;
  formatDisabled = !this.file;

  _pageWidth: number;
  _pageHeight: number;

  constructor(private _viewerService: ViewerService,
              private _modalService: ModalService,
              configService: ViewerConfigService,
              uploadFilesService: UploadFilesService,
              private _navigateService: NavigateService,
              private _zoomService: ZoomService,
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
        for (let i = page; i < page + 2; i++) {
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
        this.formatDisabled = !this.file;
        if (file && file.pages && file.pages[0]) {
          this._pageHeight = file.pages[0].height;
          this._pageWidth = file.pages[0].width;
        }
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
    if (this.formatDisabled)
      return;
    this._navigateService.nextPage();
  }

  prevPage() {
    if (this.formatDisabled)
      return;
    this._navigateService.prevPage();
  }

  toLastPage() {
    if (this.formatDisabled)
      return;
    this._navigateService.toLastPage();
  }

  toFirstPage() {
    if (this.formatDisabled)
      return;
    this._navigateService.toFirstPage();
  }

  navigateToPage(page: number) {
    if (this.formatDisabled)
      return;
    this._navigateService.navigateTo(page);
  }

  zoomIn() {
    if (this.formatDisabled)
      return;
    if (this._zoom < 490) {
      this.zoom = this._zoom + 10;
    }
  }

  zoomOut() {
    if (this.formatDisabled)
      return;
    if (this._zoom > 30) {
      this.zoom = this._zoom - 10;
    }
  }

  zoomOptions() {
    const offsetWidth = this._pageWidth ? this._pageWidth : window.innerWidth;
    const offsetHeight = this._pageHeight ? this._pageHeight : window.innerHeight;

    const width = 200 - Math.round(offsetWidth  * 100 / window.innerWidth);
    const height = Math.round(window.innerHeight  * 100 / offsetHeight);
    return ZoomService.zoomOptions(width, height);
  }

  set zoom(zoom: number) {
    this._zoom = zoom;
    this._zoomService.changeZoom(this._zoom);
  }

  get zoom() {
    return this._zoom;
  }

  selectZoom($event: any) {
    this.zoom = $event;
  }
}
