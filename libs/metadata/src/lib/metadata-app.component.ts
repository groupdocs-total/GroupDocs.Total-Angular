import {AfterViewInit, Component, ElementRef, ViewChildren, QueryList, OnInit} from '@angular/core';
import {MetadataService} from "./metadata.service";
import {
  FileDescription,
  FileModel,
  FilePropertyModel,
  ModalService,
  UploadFilesService,
  NavigateService,
  PagePreloadService,
  PageModel,
  ZoomService,
  RenderPrintService,
  FileUtil,
  PasswordService,
  FileCredentials, CommonModals, LoadingMaskService
} from "@groupdocs.examples.angular/common-components";
import {MetadataConfig} from "./metadata-config";
import {MetadataConfigService} from "./metadata-config.service";
import {WindowService} from "@groupdocs.examples.angular/common-components";
//import * as Hammer from 'hammerjs';

@Component({
  selector: 'gd-metadata',
  templateUrl: './metadata-app.component.html',
  styleUrls: ['./metadata-app.component.less']
})
export class MetadataAppComponent implements OnInit, AfterViewInit {
  title = 'metadata';
  files: FileModel[] = [];
  file: FileDescription;
  metadataConfig: MetadataConfig;
  countPages = 0;
  formatDisabled = !this.file;
  credentials: FileCredentials;
  browseFilesModal = CommonModals.BrowseFiles;
  showSearch = false;
  isDesktop: boolean;
  isLoading: boolean;

  _zoom = 100;
  _pageWidth: number;
  _pageHeight: number;
  options;
  //@ViewChildren('docPanel') docPanelComponent: QueryList<ElementRef>;
  fileWasDropped = false;
  formatIcon: string;
  fileProperties: FilePropertyModel[];

  constructor(private _metadataService: MetadataService,
              private _modalService: ModalService,
              configService: MetadataConfigService,
              uploadFilesService: UploadFilesService,
              private _navigateService: NavigateService,
              private _zoomService: ZoomService,
              pagePreloadService: PagePreloadService,
              private _renderPrintService: RenderPrintService,
              passwordService: PasswordService,
              private _windowService: WindowService,
              private _loadingMaskService: LoadingMaskService) {

    configService.updatedConfig.subscribe((metadataConfig) => {
      this.metadataConfig = metadataConfig;
    });

    uploadFilesService.uploadsChange.subscribe((uploads) => {
      if (uploads) {
        let i: number;
        for (i = 0; i < uploads.length; i++) {
          this._metadataService.upload(uploads.item(i), '', this.metadataConfig.rewrite).subscribe((obj: FileCredentials) => {
            this.fileWasDropped ? this.selectFile(obj.guid, '', '') : this.selectDir('');
          });
        }
      }
    });

    pagePreloadService.checkPreload.subscribe((page: number) => {
      if (this.metadataConfig.preloadPageCount !== 0) {
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

    this.isDesktop = _windowService.isDesktop();
    _windowService.onResize.subscribe((w) => {
      this.isDesktop = _windowService.isDesktop();
      this.refreshZoom();
    });
  }

  ngOnInit() {
    if (this.metadataConfig.defaultDocument !== ""){
      this.isLoading = true;
      this.selectFile(this.metadataConfig.defaultDocument, "", "");
    }
  }

  ngAfterViewInit() {
    this._loadingMaskService
    .onLoadingChanged
    .subscribe((loading: boolean) => this.isLoading = loading);

    this.refreshZoom();
  }

  get rewriteConfig(): boolean {
    return this.metadataConfig ? this.metadataConfig.rewrite : true;
  }

  get pageSelectorConfig(): boolean {
    return this.metadataConfig ? this.metadataConfig.pageSelector : true;
  }

  get downloadConfig(): boolean {
    return this.metadataConfig ? this.metadataConfig.download : true;
  }

  get uploadConfig(): boolean {
    return this.metadataConfig ? this.metadataConfig.upload : true;
  }

  get printConfig(): boolean {
    return this.metadataConfig ? this.metadataConfig.print : true;
  }

  get browseConfig(): boolean {
    return this.metadataConfig ? this.metadataConfig.browse : true;
  }

  get htmlModeConfig(): boolean {
    return this.metadataConfig ? this.metadataConfig.htmlMode : true;
  }

  get enableRightClickConfig(): boolean {
    return this.metadataConfig ? this.metadataConfig.enableRightClick : true;
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
    this._metadataService.loadFiles($event).subscribe((files: FileModel[]) => this.files = files || []);
  }

  selectFile($event: string, password: string, modalId: string) {
    this.credentials = {guid: $event, password: password};
    this.file = null;
    this._metadataService.loadFile(this.credentials).subscribe((file: FileDescription) => {
        this.file = file;
        this.formatDisabled = !this.file;
        if (file) {
          if (file.pages && file.pages[0]) {
            this._pageHeight = file.pages[0].height;
            this._pageWidth = file.pages[0].width;
            this.options = this.zoomOptions();
            this.refreshZoom();
          }
          const preloadPageCount = this.metadataConfig.preloadPageCount;
          const countPages = file.pages ? file.pages.length : 0;
          if (preloadPageCount > 0) {
            this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
          }
          this._navigateService.countPages = countPages;
          this._navigateService.currentPage = 1;
          this.countPages = countPages;

          this._metadataService.loadProperties(this.credentials).subscribe((fileProperties: FilePropertyModel[]) => {
            this.fileProperties = fileProperties;
          });
        }
      }
    );
    if (modalId) {
      this._modalService.close(modalId);
    }
    this.clearData();
  }

  preloadPages(start: number, end: number) {
    for (let i = start; i <= end; i++) {
      this._metadataService.loadPage(this.credentials, i).subscribe((page: PageModel) => {
        this.file.pages[i - 1] = page;
      });
    }
  }

  upload($event: string) {
    this._metadataService.upload(null, $event, this.rewriteConfig).subscribe(() => {
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

  fileDropped($event){
    this.fileWasDropped = $event;
  }

  private ptToPx(pt: number) {
    //pt * 96 / 72 = px.
    return pt * 96 / 72;
  }

  private getFitToWidth() {
    // Images and Excel-related files receiving dimensions in px from server
    const pageWidth = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageWidth : this.ptToPx(this._pageWidth);
    const pageHeight = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageHeight : this.ptToPx(this._pageHeight);
    const offsetWidth = pageWidth ? pageWidth : window.innerWidth;

    return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / window.innerWidth) : Math.round(window.innerWidth * 100 / offsetWidth);
  }

  private getFitToHeight() {
    const pageWidth = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageWidth : this.ptToPx(this._pageWidth);
    const pageHeight = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageHeight : this.ptToPx(this._pageHeight);
    const windowHeight = (pageHeight > pageWidth) ? window.innerHeight - 100 : window.innerHeight + 100;
    const offsetHeight = pageHeight ? pageHeight : windowHeight;

    return (pageHeight > pageWidth) ? Math.round(windowHeight * 100 / offsetHeight) : Math.round(offsetHeight * 100 / windowHeight);
  }

  zoomOptions() {
    const width = this.getFitToWidth();
    const height = this.getFitToHeight();
    return this._zoomService.zoomOptions(width, height);
  }

  set zoom(zoom) {
    this._zoom = zoom;
    this._zoomService.changeZoom(this._zoom);
  }

  downloadFile() {
    if (this.formatDisabled)
      return;
    window.location.assign(this._metadataService.getDownloadUrl(this.credentials));
  }

  printFile() {
    if (this.formatDisabled)
      return;
    if (this.metadataConfig.preloadPageCount !== 0) {
      if (FileUtil.find(this.file.guid, false).format === "Portable Document Format") {
        this._metadataService.loadPrintPdf(this.credentials).subscribe(blob => {
          const file = new Blob([blob], {type: 'application/pdf'});
          this._renderPrintService.changeBlob(file);
        });
      } else {
        this._metadataService.loadPrint(this.credentials).subscribe((data: FileDescription) => {
          this.file.pages = data.pages;
          this._renderPrintService.changePages(this.file.pages);
        });
      }
    } else {
      this._renderPrintService.changePages(this.file.pages);
    }
  }

  private clearData() {
    if (!this.file || !this.file.pages) {
      return;
    }
    for (const page of this.file.pages) {
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

  private refreshZoom() {
    this.formatIcon = this.file ? FileUtil.find(this.file.guid, false).icon : null;
    this.zoom = this._windowService.isDesktop() ? 100 : this.getFitToWidth();
  }
}
