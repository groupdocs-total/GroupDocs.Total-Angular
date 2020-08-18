import {AfterViewInit, Component, ElementRef, ViewChildren, QueryList, OnInit} from '@angular/core';
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
  FileCredentials, CommonModals, LoadingMaskService
} from "@groupdocs.examples.angular/common-components";
import {ViewerConfig} from "./viewer-config";
import {ViewerConfigService} from "./viewer-config.service";
import {WindowService} from "@groupdocs.examples.angular/common-components";
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
//import * as Hammer from 'hammerjs';

@Component({
  selector: 'gd-viewer',
  templateUrl: './viewer-app.component.html',
  styleUrls: ['./viewer-app.component.less']
})
export class ViewerAppComponent implements OnInit, AfterViewInit {
  title = 'viewer';
  files: FileModel[] = [];
  file: FileDescription;
  viewerConfig: ViewerConfig;
  countPages = 0;
  formatDisabled = !this.file;
  showThumbnails = false;
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

  fileParam: string;
  querySubscription: Subscription;

  constructor(private _viewerService: ViewerService,
              private _modalService: ModalService,
              configService: ViewerConfigService,
              uploadFilesService: UploadFilesService,
              private _navigateService: NavigateService,
              private _zoomService: ZoomService,
              pagePreloadService: PagePreloadService,
              private _renderPrintService: RenderPrintService,
              passwordService: PasswordService,
              private _windowService: WindowService,
              private _loadingMaskService: LoadingMaskService,
              private route: ActivatedRoute) {

    configService.updatedConfig.subscribe((viewerConfig) => {
      this.viewerConfig = viewerConfig;
    });

    uploadFilesService.uploadsChange.subscribe((uploads) => {
      if (uploads) {
        let i: number;
        for (i = 0; i < uploads.length; i++) {
          this._viewerService.upload(uploads.item(i), '', this.viewerConfig.rewrite).subscribe((obj: FileCredentials) => {
            this.fileWasDropped ? this.selectFile(obj.guid, '', '') : this.selectDir('');
          });
        }
      }
    });

    pagePreloadService.checkPreload.subscribe((page: number) => {
      if (this.viewerConfig.preloadPageCount !== 0) {
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

    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.fileParam = queryParam['file'];
        if (this.fileParam) {
          this.isLoading = true;
          if (this.validURL(this.fileParam)) {
            this.upload(this.fileParam);
          }
          else {
            this.selectFile(this.fileParam, '', '');
          }
        }
      }
    );
  }

  ngOnInit() {
    if (this.viewerConfig.defaultDocument !== ""){
      this.isLoading = true;
      this.selectFile(this.viewerConfig.defaultDocument, "", "");
    }
  }

  ngAfterViewInit() {
    this._loadingMaskService
    .onLoadingChanged
    .subscribe((loading: boolean) => this.isLoading = loading);

    this.refreshZoom();

    // this.docPanelComponent.changes.subscribe((comps: QueryList<ElementRef>) =>
    // {
    //   comps.toArray().forEach((item) => {
    //     const hammer = new Hammer(item.nativeElement);
    //     hammer.get('pinch').set({ enable: true });
    //   });
    // });
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

  ifPresentation() {
    return this.file ? FileUtil.find(this.file.guid, false).format === "Microsoft PowerPoint" : false;
  }

  validURL(str) {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
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
    this.file = null;
    this._viewerService.loadFile(this.credentials).subscribe((file: FileDescription) => {
        this.file = file;
        this.formatDisabled = !this.file;
        if (file) {
          if (file.pages && file.pages[0]) {
            this._pageHeight = file.pages[0].height;
            this._pageWidth = file.pages[0].width;
            this.options = this.zoomOptions();
            this.refreshZoom();
          }
          const preloadPageCount = this.viewerConfig.preloadPageCount;
          const countPages = file.pages ? file.pages.length : 0;
          if (preloadPageCount > 0) {
            this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);

            this._viewerService.loadThumbnails(this.credentials).subscribe((data: FileDescription) => {
              this.file.thumbnails = data.pages;
            })
          }
          this._navigateService.countPages = countPages;
          this._navigateService.currentPage = 1;
          this.countPages = countPages;

          if (this.ifPresentation()) {
            this.showThumbnails = true;
          }
          else {
            this.showThumbnails = false;
          }
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
      this._viewerService.loadPage(this.credentials, i).subscribe((page: PageModel) => {
        this.file.pages[i - 1] = page;
      });
    }
  }

  upload($event: string) {
    this._viewerService.upload(null, $event, this.rewriteConfig).subscribe((uploadedDocument: any) => {
      if (this.fileParam !== '') {
        this.selectFile(uploadedDocument.guid, '', '');
        this.fileParam = '';
      }
      else {
        this.selectDir('');
      }
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

  get zoom() {
    return this._zoom;
  }

  selectZoom($event: any) {
    this.zoom = $event.value;
  }

  rotate(deg: number) {
    if (this.formatDisabled)
      return;
    const pageNumber = this._navigateService.currentPage;
    const pageModel = this.file.pages[pageNumber - 1];

    if (this.saveRotateStateConfig && this.file) {
      this._viewerService.rotate(this.credentials, deg, pageNumber).subscribe((page: PageModel) => {
        this.file.pages[pageNumber - 1] = page;

        if (this.file && this.file.pages && pageModel) {
          const angle = pageModel.angle + deg;
          if (angle > 360) {
            this.changeAngle(pageModel, 90);
          } else if (angle < -360) {
            this.changeAngle(pageModel, -90);
          } else {
            this.changeAngle(pageModel, angle);
          }
        }
      })
    }
  }

  private changeAngle(page: PageModel, angle: number) {
    page.angle = angle;
  }

  downloadFile() {
    if (this.formatDisabled)
      return;
    window.location.assign(this._viewerService.getDownloadUrl(this.credentials));
  }

  printFile() {
    if (this.formatDisabled)
      return;
    if (this.viewerConfig.preloadPageCount !== 0) {
      this._viewerService.loadPrint(this.credentials).subscribe((data: FileDescription) => {
        this.file.pages = data.pages;
        this._renderPrintService.changePages(this.file.pages);
      });
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

    if (this.viewerConfig.preloadPageCount === 0) {
      this.showThumbnails = true;
    } else {
      if (this.file.thumbnails.filter(t => !t.data).length > 0) {
        this._viewerService.loadThumbnails(this.credentials).subscribe((data: FileDescription) => {
          this.file.thumbnails = data.pages;
          this.showThumbnails = true;
        })
      }
      else {
        this.showThumbnails = true;
      }
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

  // onPinchIn($event){
  //   this.zoomOut();
  // }

  // onPinchOut($event){
  //   this.zoomIn();
  // }

  private refreshZoom() {
    this.formatIcon = this.file ? FileUtil.find(this.file.guid, false).icon : null;
    this.zoom = this._windowService.isDesktop() ? 100 : this.getFitToWidth();
  }
}
