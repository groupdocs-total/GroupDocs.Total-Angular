import {AfterViewInit, Component, OnInit, HostListener} from '@angular/core';
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
  RenderPrintService,
  FileUtil,
  PasswordService,
  FileCredentials, CommonModals, LoadingMaskService
} from "@groupdocs.examples.angular/common-components";
import {ViewerConfig} from "./viewer-config";
import {ViewerConfigService} from "./viewer-config.service";
import {WindowService} from "@groupdocs.examples.angular/common-components";
import { Subscription } from 'rxjs';
import { Constants } from './viewer.constants';
import { IntervalTimer } from './interval-timer';
import { TermNavigationService } from './term-navigation.service';

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
  timerOptions;
  intervalTime: number;
  intervalTimer: IntervalTimer;
  countDownInterval: number;
  secondsLeft: number;
  fileWasDropped = false;
  formatIcon: string;

  fileParam: string;
  termParams: string[];
  caseSensitiveParam: boolean;
  querySubscription: Subscription;
  selectedPageNumber: number;
  runPresentation: boolean;
  isFullScreen: boolean;

  docElmWithBrowsersFullScreenFunctions = document.documentElement as HTMLElement & {
    mozRequestFullScreen(): Promise<void>;
    webkitRequestFullscreen(): Promise<void>;
    msRequestFullscreen(): Promise<void>;
  };
  
  docWithBrowsersExitFunctions = document as Document & {
    mozCancelFullScreen(): Promise<void>;
    webkitExitFullscreen(): Promise<void>;
    msExitFullscreen(): Promise<void>;
  };

  @HostListener("document:fullscreenchange", [])
  fullScreen() {
    if (!document.fullscreenElement) {
      this.closeFullScreen();
    }
  }

  constructor(private _viewerService: ViewerService,
              public termNavigation: TermNavigationService,
              private _modalService: ModalService,
              configService: ViewerConfigService,
              uploadFilesService: UploadFilesService,
              private _navigateService: NavigateService,
              private _zoomService: ZoomService,
              pagePreloadService: PagePreloadService,
              private _renderPrintService: RenderPrintService,
              passwordService: PasswordService,
              private _windowService: WindowService,
              private _loadingMaskService: LoadingMaskService) {

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
    _windowService.onResize.subscribe(() => {
      this.isDesktop = _windowService.isDesktop();
      if (!this.runPresentation) {
        this.refreshZoom();
      }
    });
  }

  ngOnInit() {
    if (this.viewerConfig.defaultDocument !== ""){
      this.isLoading = true;
      this.selectFile(this.viewerConfig.defaultDocument, "", "");
    }

    const queryString = window.location.search;
    if (queryString) {
      this.TryOpenFileByUrl(queryString);
    }

    this.selectedPageNumber = this._navigateService.currentPage !== 0 ? this._navigateService.currentPage : 1;
  }

  ngAfterViewInit() {
    this._loadingMaskService
    .onLoadingChanged
    .subscribe((loading: boolean) => this.isLoading = loading);

    this.refreshZoom();
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

  ifExcel() {
    return this.file ? FileUtil.find(this.file.guid, false).format === "Microsoft Excel" : false;
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

  getFileName() {
    return this.file.guid.replace(/^.*[\\\/]/, '');
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
    this._viewerService.loadFile(this.credentials, this.termParams, this.caseSensitiveParam).subscribe((file: FileDescription) => {
        this.file = file;
        this.formatDisabled = !this.file;
        if (file) {
          this.formatIcon = this.file ? FileUtil.find(this.file.guid, false).icon : null;
          if (file.pages && file.pages[0]) {
            this._pageHeight = file.pages[0].height;
            this._pageWidth = file.pages[0].width;
            this.options = this.zoomOptions();
            this.timerOptions = this.getTimerOptions();
            this.refreshZoom();
          }
          const preloadPageCount = !this.ifPresentation() ? this.viewerConfig.preloadPageCount 
                                                          : (this.viewerConfig.preloadPageCount !== 0
                                                             && this.viewerConfig.preloadPageCount < 3 ? 3
                                                              : this.viewerConfig.preloadPageCount);
          const countPages = file.pages ? file.pages.length : 0;
          if (preloadPageCount > 0) {
            if (this.ifPresentation()) {
              this.file.thumbnails = file.pages.slice();
            }
            this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);

            if (!this.ifPresentation()) {
              this._viewerService.loadThumbnails(this.credentials).subscribe((data: FileDescription) => {
                this.file.thumbnails = data.pages;
              })
            }
          }
          this._navigateService.countPages = countPages;
          this._navigateService.currentPage = this.selectedPageNumber;
          this.countPages = countPages;

          if (this.ifPresentation()) {
            this.showThumbnails = true;
          }
          else {
            this.showThumbnails = false;
          }
          this.runPresentation = false;
        }

        this.termNavigation.updateTotal();
      }
    );
    if (modalId) {
      this._modalService.close(modalId);
    }
    this.clearData();
  }

  preloadPages(start: number, end: number) {
    for (let i = start; i <= end; i++) {
      this._viewerService.loadPage(this.credentials, i, this.termParams, this.caseSensitiveParam).subscribe((page: PageModel) => {
        this.file.pages[i - 1] = page;
        if (this.ifPresentation() && this.file.thumbnails && !this.file.thumbnails[i - 1].data) {
          if (page.data) {
            page.data = page.data.replace(/>\s+</g, '><')
              .replace(/\uFEFF/g, "")
              .replace(/href="\/viewer/g, 'href="http://localhost:8080/viewer')
              .replace(/src="\/viewer/g, 'src="http://localhost:8080/viewer')
              .replace(/data="\/viewer/g, 'data="http://localhost:8080/viewer');
          }
          this.file.thumbnails[i - 1].data = page.data;
        }

        this.termNavigation.updateTotal();
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
    if (this._navigateService.currentPage + 1 > this.countPages) {
      this.intervalTimer.stop();
      this.intervalTime = 0;
    }
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

    const presentationThumbnails = this.isDesktop && this.ifPresentation() && !this.runPresentation;

    return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / (presentationThumbnails ? window.innerWidth - Constants.thumbnailsWidth - Constants.scrollWidth : window.innerWidth))
                                                                                       : (!this.isDesktop ? Math.round(window.innerWidth * 100 / offsetWidth) 
                                                                                                          : Math.round(((presentationThumbnails ? window.innerWidth - Constants.thumbnailsWidth - Constants.scrollWidth 
                                                                                                                                                : window.innerHeight) / offsetWidth) * 100));
  }

  private getFitToHeight() {
    const pageWidth = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageWidth : this.ptToPx(this._pageWidth);
    const pageHeight = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageHeight : this.ptToPx(this._pageHeight);
    const windowHeight = (pageHeight > pageWidth) ? window.innerHeight - 100 : window.innerHeight + 100;
    const offsetHeight = pageHeight ? pageHeight : windowHeight;
    
    if (!this.ifPresentation()) {
      return (pageHeight > pageWidth) ? Math.round(windowHeight * 100 / offsetHeight) : Math.round(offsetHeight * 100 / windowHeight);
    }
    else return Math.round((window.innerHeight - Constants.topbarWidth) * 100 / (!this.runPresentation ? offsetHeight + Constants.documentMargin*2 + Constants.scrollWidth 
                                                                                                       : offsetHeight))
  }

  zoomOptions() {
    const width = this.getFitToWidth();
    const height = this.getFitToHeight();
    return this._zoomService.zoomOptions(width, height);
  }

  getTimerOptions() {
    return [{value: 0, name: 'None', separator: false},
      {value: 5, name: '5 sec', separator: false},
      {value: 10, name: '10 sec', separator: false},
      {value: 15, name: '15 sec', separator: false},
      {value: 30, name: '30 sec', separator: false}];
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
        const updatedData = page.data.replace(/>\s+</g,'><')
          .replace(/\uFEFF/g,"")
          .replace(/href="\/viewer/g, 'href="http://localhost:8080/viewer')
          .replace(/src="\/viewer/g, 'src="http://localhost:8080/viewer')
          .replace(/data="\/viewer/g, 'data="http://localhost:8080/viewer');
        page.data = updatedData;
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
    if (this.viewerConfig.htmlMode) {
      this._viewerService.loadPrint(this.credentials).subscribe((data: FileDescription) => {
        this._renderPrintService.changePages(data.pages);
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
      this.runPresentation = false;
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

  onRightClick() {
    return this.enableRightClickConfig;
  }

  openSearch() {
    if (this.formatDisabled)
      return;
    this.showSearch = !this.showSearch;
  }

  private refreshZoom() {
    if (this.file) {
      this.formatIcon = FileUtil.find(this.file.guid, false).icon;
      this.zoom = this._windowService.isDesktop() ? 100 : this.getFitToWidth();
    }
  }

  selectCurrentPage(pageNumber)
  {
    this.selectedPageNumber = pageNumber;
    this._navigateService.currentPage = pageNumber;
    if (this.runPresentation && this.intervalTime > 0 && this.intervalTimer.state !== 3) {
      this.resetInterval();
      if (this.slideInRange()) {
        this.startCountDown(this.intervalTime, true);
      }
    }
  }

  onMouseWheelUp()
  {
    if (this.ifPresentation() && this.selectedPageNumber !== 1) {
      this.selectedPageNumber = this.selectedPageNumber - 1;
    }
  }

  onMouseWheelDown()
  {
    if (this.ifPresentation() && this.selectedPageNumber !== this.file.pages.length) {
      if (this.file.pages[this.selectedPageNumber] && !this.file.pages[this.selectedPageNumber].data) {
        this.preloadPages(this.selectedPageNumber, this.selectedPageNumber + 1);
        this.selectedPageNumber = this.selectedPageNumber + 1;
      }
      else {
        this.selectedPageNumber = this.selectedPageNumber + 1;
      }
    }
  }

  private TryOpenFileByUrl(queryString: string) {
    const urlParams = new URLSearchParams(queryString);
    this.fileParam = urlParams.get('file');
    this.termParams = urlParams.getAll('term');
    this.caseSensitiveParam = urlParams.get('caseSensitive') === "true";

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

  toggleTimer($event){
    this.intervalTime = $event.value;
    if (this.intervalTime !== 0) {
      if (this.intervalTimer && this.intervalTimer.state === 1) {
        this.intervalTimer.stop();
      }
      this.startCountDown(this.intervalTime);
      this.startInterval(this.intervalTime);
    }
    else{
      this.intervalTimer.stop();
    }
  }

  showCountDown() {
    return this.intervalTime > 0 && (this.slideInRange())
  }

  startCountDown(seconds: number, reset: boolean = false) {
    clearInterval(this.countDownInterval);
    if (seconds > 0) {
      this.secondsLeft = seconds;
      seconds--;
      const interval = setInterval(() => {
          this.secondsLeft = seconds;
          seconds--;
          if (seconds === 0) {
            clearInterval(interval);
          }
      }, 1000);

      this.countDownInterval = interval;
    }
  }

  private startInterval(intervalTime: number) {
    this.intervalTimer = new IntervalTimer(() => {
      if (this.slideInRange()) {
        this.nextPage();
        if (this.slideInRange()) {
          this.startCountDown(intervalTime);
        }
      }
      else
      {
        this.intervalTimer.stop();
      }
    }, intervalTime * 1000);
  }

  private slideInRange() {
    return this._navigateService.currentPage + 1 <= this.countPages;
  }

  private resetInterval() {
    this.intervalTimer.stop();
    this.startInterval(this.intervalTime);
  }

  pausePresenting() {
    this.intervalTimer.pause();
    this.startCountDown(0, true);
  }

  resumePresenting() {
    this.intervalTimer.resume();
    const secondsRemaining = Math.round(this.intervalTimer.remaining/1000);
    this.startCountDown(secondsRemaining);
  }

  presentationRunning() {
    return this.intervalTimer && this.intervalTimer.state === 1 && this.slideInRange();
  }

  presentationPaused() {
    return this.intervalTimer && this.intervalTimer.state === 2 && this.slideInRange();
  }

  startPresentation() {
    this.showThumbnails = false;
    this.openFullScreen();
    this.runPresentation = !this.runPresentation;
    setTimeout(() => {
      this._zoomService.changeZoom(this.getFitToHeight());
    }, 100);
  }

  openFullScreen() {
    const docElmWithBrowsersFullScreenFunctions = document.documentElement as HTMLElement & {
      mozRequestFullScreen(): Promise<void>;
      webkitRequestFullscreen(): Promise<void>;
      msRequestFullscreen(): Promise<void>;
    };
  
    if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
      docElmWithBrowsersFullScreenFunctions.requestFullscreen();
    } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
      docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
    } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
    } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
      docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
    }
    this.isFullScreen = true;
  }
  
  closeFullScreen(byButton: boolean = false){
    if (byButton) {
      const docWithBrowsersExitFunctions = document as Document & {
        mozCancelFullScreen(): Promise<void>;
        webkitExitFullscreen(): Promise<void>;
        msExitFullscreen(): Promise<void>;
      };
      if (docWithBrowsersExitFunctions.exitFullscreen) {
        docWithBrowsersExitFunctions.exitFullscreen();
      } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */
        docWithBrowsersExitFunctions.mozCancelFullScreen();
      } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        docWithBrowsersExitFunctions.webkitExitFullscreen();
      } else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */
        docWithBrowsersExitFunctions.msExitFullscreen();
      }
    }

    if (this.intervalTimer) {
      this.intervalTimer.stop();
    }

    this.isFullScreen = false;
    this.runPresentation = false;
    this.showThumbnails = true;
    this.intervalTime = 0;
    this.startCountDown(0);
  }
}
