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
  ZoomService,
  RotatedPage,
  RenderPrintService,
  FileUtil,
  PasswordService,
  FileCredentials, CommonModals
} from "@groupdocs-total-angular/common-components";
import {ViewerConfig} from "./viewer-config";
import {ViewerConfigService} from "./viewer-config.service";
import {WindowService} from "@groupdocs-total-angular/common-components";

@Component({
  selector: 'gd-viewer-angular-root',
  templateUrl: './viewer-app.component.html',
  styleUrls: ['./viewer-app.component.less']
})
export class ViewerAppComponent {
  title = 'viewer';
  files: FileModel[] = [];
  file: FileDescription;
  viewerConfig: ViewerConfig;
  countPages: number = 0;
  formatDisabled = !this.file;
  showThumbnails: boolean = false;
  credentials: FileCredentials;
  browseFilesModal = CommonModals.BrowseFiles;
  showSearch: boolean = false;
  isDesktop: boolean;

  _zoom: number = 100;
  _pageWidth: number;
  _pageHeight: number;

  constructor(private _viewerService: ViewerService,
              private _modalService: ModalService,
              configService: ViewerConfigService,
              uploadFilesService: UploadFilesService,
              private _navigateService: NavigateService,
              private _zoomService: ZoomService,
              pagePreloadService: PagePreloadService,
              private _renderPrintService: RenderPrintService,
              passwordService: PasswordService,
              windowService: WindowService) {

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

    passwordService.passChange.subscribe((pass: string) => {
      this.selectFile(this.credentials.guid, pass, CommonModals.PasswordRequired);
    });

    this.isDesktop = windowService.isDesktop();
    windowService.onResize.subscribe((w) => {
      this.isDesktop = windowService.isDesktop();
    });
  }

  get rewriteConfig(): boolean {
    return this.viewerConfig ? this.viewerConfig.rewrite : true;
  }

  get zoomConfig(): boolean {
    return this.viewerConfig ? this.viewerConfig.zoom : true;
  }

  get pageSelectorConfig(): boolean {
    return this.viewerConfig ? this.viewerConfig.pageSelector : true;
  }

  get searchConfig(): boolean {
    return this.viewerConfig ? this.viewerConfig.search : true;
  }

  get thumbnailsConfig(): boolean {
    return this.viewerConfig ? this.viewerConfig.thumbnails : true;
  }

  get rotateConfig(): boolean {
    return this.viewerConfig ? this.viewerConfig.rotate : true;
  }

  get downloadConfig(): boolean {
    return this.viewerConfig ? this.viewerConfig.download : true;
  }

  get uploadConfig(): boolean {
    return this.viewerConfig ? this.viewerConfig.upload : true;
  }

  get printConfig(): boolean {
    return this.viewerConfig ? this.viewerConfig.print : true;
  }

  get browseConfig(): boolean {
    return this.viewerConfig ? this.viewerConfig.browse : true;
  }

  get htmlModeConfig(): boolean {
    return this.viewerConfig ? this.viewerConfig.htmlMode : true;
  }

  get saveRotateStateConfig(): boolean {
    return this.viewerConfig ? this.viewerConfig.saveRotateState : true;
  }

  get enableRightClickConfig(): boolean {
    return this.viewerConfig ? this.viewerConfig.enableRightClick : true;
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

  selectFile($event: string, password: string, modalId: string) {
    this.credentials = {guid: $event, password: password};
    this._viewerService.loadFile(this.credentials).subscribe((file: FileDescription) => {
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
    this.clearData();
  }

  preloadPages(start: number, end: number) {
    for (let i = start; i <= end; i++) {
      this._viewerService.loadPage(this.credentials, i).subscribe((page: PageModel) => {
        this.file.pages[i - 1] = page;
      });
    }
  }

  upload($event: string) {
    this._viewerService.upload(null, $event, this.rewriteConfig).subscribe(() => {
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

    const width = 200 - Math.round(offsetWidth * 100 / window.innerWidth);
    const height = Math.round(offsetHeight * 100 / window.innerHeight);
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

  rotate(deg: number) {
    if (this.formatDisabled)
      return;
    const pageNumber = this._navigateService.currentPage;

    if (this.saveRotateStateConfig && this.file) {
      this._viewerService.rotate(this.credentials, deg, pageNumber).subscribe((data: RotatedPage[]) => {
        for (let page of data) {
          const pageModel = this.file.pages[page.pageNumber - 1];
          if (this.file && this.file.pages && pageModel) {
            this.changeAngle(pageModel, page.angle);
          }
        }
      })
    } else {
      const pageModel = this.file.pages[pageNumber - 1];
      if (this.file && this.file.pages && pageModel) {
        let angle = pageModel.angle + deg;
        if (angle > 360) {
          this.changeAngle(pageModel, 90);
        } else if (angle < -360) {
          this.changeAngle(pageModel, -90);
        } else {
          this.changeAngle(pageModel, angle);
        }
      }
    }
  }

  private changeAngle(page: PageModel, angle: number) {
    page.angle = angle;
    let width = page.width;
    page.width = page.height;
    page.height = width;
  }

  downloadFile() {
    if (this.formatDisabled)
      return;
    window.location.assign(this._viewerService.getDownloadUrl(this.credentials));
  }

  printFile() {
    if (this.formatDisabled)
      return;
    if (this.viewerConfig.preloadPageCount != 0) {
      if (FileUtil.find(this.file.guid, false).format == "Portable Document Format") {
        this._viewerService.loadPrintPdf(this.credentials).subscribe(blob => {
          var file = new Blob([blob], {type: 'application/pdf'});
          this._renderPrintService.changeBlob(file);
        });
      } else {
        this._viewerService.loadPrint(this.credentials).subscribe((data: FileDescription) => {
          this.file.pages = data.pages;
          this._renderPrintService.changePages(this.file.pages);
        });
      }
    } else {
      this._renderPrintService.changePages(this.file.pages);
    }
  }

  openThumbnails() {
    if (this.formatDisabled)
      return;

    if (this.showThumbnails) {
      this.showThumbnails = false;
      return;
    }

    if (this.viewerConfig.preloadPageCount == 0) {
      this.showThumbnails = true;
    } else {
      this._viewerService.loadThumbnails(this.credentials).subscribe((data: FileDescription) => {
        this.file.pages = data.pages;
        this.showThumbnails = true;
      })
    }
  }

  private clearData() {
    if (!this.file || !this.file.pages) {
      return;
    }
    for (let page of this.file.pages) {
      page.data = null;
    }
  }

  onRightClick($event: MouseEvent) {
    return this.enableRightClickConfig;
  }

  openSearch() {
    if (this.formatDisabled)
      return;
    this.showSearch = !this.showSearch;
  }
}
