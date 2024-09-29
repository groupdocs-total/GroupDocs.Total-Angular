import { AfterViewInit, Component, OnInit, HostListener, ChangeDetectorRef, ViewChild, Renderer2, ElementRef, OnDestroy } from '@angular/core';
import { ViewerService } from "./viewer.service";
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
  FileCredentials,
  TypedFileCredentials,
  CommonModals,
  LoadingMaskService,
  SearchComponent
} from "@groupdocs.examples.angular/common-components";
import { ViewerConfig } from "./viewer-config";
import { ViewerConfigService } from "./viewer-config.service";
import { WindowService, Option } from "@groupdocs.examples.angular/common-components";
import { Subscription } from 'rxjs';
import { Constants, Language } from './viewer.constants';
import { IntervalTimer } from './interval-timer';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'gd-viewer',
  templateUrl: './viewer-app.component.html',
  styleUrls: ['./viewer-app.component.less']
})
export class ViewerAppComponent implements OnInit, OnDestroy, AfterViewInit {
  title = 'viewer';
  files: FileModel[] = [];
  file: FileDescription;
  viewerConfig: ViewerConfig;
  countPages = 0;
  formatDisabled = true;
  showThumbnails = false;
  credentials: TypedFileCredentials;
  browseFilesModal = CommonModals.BrowseFiles;
  showSearch = false;
  isDesktop: boolean;
  isLoading: boolean;
  pagesToPreload: number[] = [];

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
  fileTypeParam: string;
  urlParam: string;
  querySubscription: Subscription;
  selectedPageNumber: number;
  runPresentation: boolean;
  isFullScreen: boolean;
  startScrollTime: number;
  endScrollTime: number;

  supportedLanguages: Option[];
  selectedLanguage: Option;

  private unlisten: () => void;

  _searchTermForBackgroundService: string;
  _searchTermFromGetQuery = false;

  _searchElement: SearchComponent;
  @ViewChild('search', { static: false })
  set content(content: SearchComponent) {
    if (content) {
      this._searchElement = content;
    }
  }

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

  zoomService: ZoomService;

  @HostListener("document:fullscreenchange", [])
  fullScreen() {
    if (!document.fullscreenElement) {
      this.closeFullScreen();
    }
  }

  constructor(private _viewerService: ViewerService,
    private _modalService: ModalService,
    configService: ViewerConfigService,
    uploadFilesService: UploadFilesService,
    private _navigateService: NavigateService,
    zoomService: ZoomService,
    pagePreloadService: PagePreloadService,
    private _renderPrintService: RenderPrintService,
    passwordService: PasswordService,
    private _windowService: WindowService,
    private _loadingMaskService: LoadingMaskService,
    private cdr: ChangeDetectorRef,
    public translate: TranslateService,
    private renderer: Renderer2,
    private elRef: ElementRef
  ) {

    this.zoomService = zoomService;
    this.startScrollTime = Date.now();
    this.endScrollTime = Date.now();

    configService.updatedConfig.subscribe((viewerConfig) => {
      this.viewerConfig = viewerConfig;
    });

    uploadFilesService.uploadsChange.subscribe((uploads) => {
      if (uploads) {
        let i: number;
        for (i = 0; i < uploads.length; i++) {
          this._viewerService.upload(uploads.item(i), '', this.viewerConfig.rewrite).subscribe((obj: FileCredentials) => {
            this.fileWasDropped ? this.selectFile(obj.guid, '', '', '') : this.selectDir('');
          });
        }
      }
    });

    pagePreloadService.checkPreload.subscribe((page: number) => {
      if (this.file) {
        if (this.viewerConfig.preloadPageCount !== 0) {
          for (let i = page; i < page + 2; i++) {
            if (i > 0 && i <= this.file.pages.length && !this.file.pages[i - 1].data) {
              this.preloadPages(i, i);
            }
          }
        }
      }
    });

    passwordService.passChange.subscribe((pass: string) => {
      this.selectFile(this.credentials.guid, pass, CommonModals.PasswordRequired, this.credentials.fileType);
    });

    this.isDesktop = _windowService.isDesktop();
    _windowService.onResize.subscribe(() => {
      this.isDesktop = _windowService.isDesktop();
      if (!this.runPresentation) {
        this.refreshZoom();
      }
    });

    if(this.viewerConfig.preventLinkClick) {
      // Listen for 'click' events inside the root element of 'gd-viewer'
      this.unlisten = this.renderer.listen(this.elRef.nativeElement, 'click', (event: Event) => {
        const targetElement = event.target as HTMLElement;

        // Check if the clicked element is inside or is an <a> tag
        const anchorElement = targetElement.closest('a');
        if (anchorElement) {
          // Check if the <a> tag is a child of an element with class 'gd-document'
          const parentWithClass = anchorElement.closest('.gd-document');
          if (parentWithClass) {
            event.preventDefault(); // Prevent the default action of the link
          }
        }
      });
    }
  }

  ngOnInit() {
    if (this.viewerConfig.defaultDocument !== '' && this.viewerConfig.defaultDocument !== null) {
      this.isLoading = true;
      this.selectFile(this.viewerConfig.defaultDocument, '', '', '');
      this.selectCurrentOrFirstPage();
      return;
    }

    const defaultLanguage = this.defaultLanguageConfig;
    const supportedLanguages = this.supportedLanguagesConfig
      .map(language => {
        return {
          name: language.name,
          value: language.code,
          separator: false
        };
      });

    this.supportedLanguages = supportedLanguages;
    this.selectedLanguage = supportedLanguages.find(lang => lang.value === defaultLanguage.code);
    this.translate.use(defaultLanguage.code);

    const queryString = window.location.search;
    if (queryString) {
      const urlParams = new URLSearchParams(queryString);

      this.fileParam = urlParams.get('file');
      this.fileTypeParam = urlParams.get('fileType');
      if (this.fileParam) {
        const sTerm = urlParams.get('search');
        if (sTerm && sTerm !== null && sTerm !== '') {
          this._searchTermForBackgroundService = sTerm;
          this._searchTermFromGetQuery = true;
        }
        this.isLoading = true;
        this.selectFile(this.fileParam, '', '', this.fileTypeParam);
        this.selectCurrentOrFirstPage();
        return;
      }

      this.urlParam = urlParams.get('url');
      if (this.urlParam) {
        this.isLoading = true;
        this.upload(this.urlParam);
        this.selectCurrentOrFirstPage();
      }
    }
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

  get showLanguageMenu(): boolean {
    if (this.viewerConfig !== undefined && this.viewerConfig.showLanguageMenu !== undefined) {
      return this.viewerConfig.showLanguageMenu;
    }
    return Constants.defaultShowLanguageMenu;
  }

  get showToolBar(): boolean {
    if (this.viewerConfig !== undefined && this.viewerConfig.showToolBar !== undefined) {
      return this.viewerConfig.showToolBar;
    }
    return Constants.defaultShowToolBar
  }

  get supportedLanguagesConfig(): Language[] {
    if (this.viewerConfig && this.viewerConfig.supportedLanguages) {
      const supportedLanguages = this.viewerConfig.supportedLanguages;
      return Constants.defaultSupportedLanguages
        .filter(lang =>
          supportedLanguages.indexOf(lang.code) !== -1 || supportedLanguages.indexOf(lang.alternateCode) !== -1);
    }

    return Constants.defaultSupportedLanguages;
  }

  get defaultLanguageConfig(): Language {
    if (this.viewerConfig && this.viewerConfig.defaultLanguage) {
      return this.supportedLanguagesConfig
        .find(lang => lang.is(this.viewerConfig.defaultLanguage))
    }

    const pathname = window.location.pathname;
    if (pathname) {
      const parts = pathname.split('/');
      for (const part of parts) {
        if (part === "")
          continue;

        const langOrNothing = this.supportedLanguagesConfig
          .filter(supported => supported.is(part))
          .shift();

        if (langOrNothing)
          return langOrNothing;
      }
    }

    const queryString = window.location.search;
    if (queryString) {
      const urlParams = new URLSearchParams(queryString);
      const candidate = urlParams.get('lang');
      if (candidate) {
        return this.supportedLanguagesConfig
          .find(lang => lang.is(candidate))
      }
    }

    return Constants.defaultLanguage;
  }

  ifPresentation() {
    return this.file ? FileUtil.find(this.file.guid, false).format === "Microsoft PowerPoint" : false;
  }

  ifExcel() {
    return this.file ? FileUtil.find(this.file.guid, false).format === "Microsoft Excel" : false;
  }

  ifImage() {
    return this.file ? this.formatIcon === "file-image" : false;
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

  selectCurrentOrFirstPage() {
    this.selectedPageNumber = this._navigateService.currentPage !== 0 ? this._navigateService.currentPage : 1;
  }

  getPreloadPageCount() {
    const minPresentationPagesToPreload = 3;
    const preloadPageCount = !this.ifPresentation()
      ? this.viewerConfig.preloadPageCount
      : this.viewerConfig.preloadPageCount !== 0 && this.viewerConfig.preloadPageCount < minPresentationPagesToPreload
        ? minPresentationPagesToPreload
        : this.viewerConfig.preloadPageCount;

    return preloadPageCount;
  }

  selectFile($event: string, password: string, modalId: string, fileType: string) {
    this.credentials = { guid: $event, fileType: fileType, password: password };
    this.file = null;
    this._viewerService.loadFile(this.credentials).subscribe((file: FileDescription) => {
      this.file = file;
      this.formatDisabled = !this.file;
      this.pagesToPreload = [];
      if (file) {
        this.credentials.fileType = file.fileType;
        this.formatIcon = this.file ? FileUtil.find(this.file.guid, false).icon : null;
        if (file.pages && file.pages[0]) {
          this._pageHeight = file.pages[0].height;
          this._pageWidth = file.pages[0].width;
          this.options = this.zoomOptions();
          this.timerOptions = this.getTimerOptions();
          this.refreshZoom();
        }

        //copy pages to thumbnails
        this.file.thumbnails = file.pages.slice();

        const countPagesToPreload = this.getPreloadPageCount();
        const countPages = file.pages ? file.pages.length : 0;
        const countPagesToLoad = countPagesToPreload === 0
          ? countPages : countPagesToPreload > countPages
            ? countPages
            : countPagesToPreload;

        //retrieve all pages or number of pages to preload
        this.preloadPages(1, countPagesToLoad);

        this.selectedPageNumber = 1;
        this._navigateService.countPages = countPages;
        this._navigateService.currentPage = this.selectedPageNumber;
        this.countPages = countPages;
        this.showThumbnails = this.ifPresentation();
        this.runPresentation = false;
        if (!this._searchTermFromGetQuery) {
          this._searchTermForBackgroundService = file.searchTerm;
        }
      }
      if (this._searchTermForBackgroundService
        && this._searchTermForBackgroundService !== null
        && this._searchTermForBackgroundService !== '') {

        if (this._searchElement) {
          this._searchElement.setText(this._searchTermForBackgroundService);
        }

      }
      this.cdr.detectChanges();
    }
    );
    if (modalId) {
      this._modalService.close(modalId);
    }
    this.clearData();
  }

  preloadPages(start: number, end: number) {
    for (let pageNumber = start; pageNumber <= end; pageNumber++) {
      if (this.pagesToPreload.indexOf(pageNumber) !== -1) {
        continue;
      }

      const page = this.file.pages.find(p => p.number === pageNumber);
      if (page && page.data) {
        continue;
      }

      this.pagesToPreload.push(pageNumber);

      this._viewerService.loadPage(this.credentials, pageNumber).subscribe((model: PageModel) => {
        if (model.data) {
          model.data = model.data.replace(/>\s+</g, '><').replace(/\uFEFF/g, '');
        }

        this.file.pages[pageNumber - 1].data = model.data;

        if (this.file.thumbnails) {
          this.file.thumbnails[pageNumber - 1].data = model.data;
        }
      });
    }
  }

  upload($event: string) {
    this._viewerService.upload(null, $event, this.rewriteConfig).subscribe((uploadedDocument: any) => {
      if (this.fileParam !== '') {
        this.selectFile(uploadedDocument.guid, '', '', '');
        this.fileParam = '';
        this.fileTypeParam = '';
      }
      else {
        this.selectDir('');
      }
    });
  }

  nextPage() {
    if (this.formatDisabled)
      return;
    if (this.intervalTimer && this._navigateService.currentPage + 1 > this.countPages) {
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

  fileDropped($event) {
    this.fileWasDropped = $event;
  }

  private ptToPx(pt: number) {
    //pt * 96 / 72 = px.
    return pt * 96 / 72;
  }

  getFitToWidth() {
    // Images and Excel-related files receiving dimensions in px from server
    const pageWidth = this.formatIcon && (this.ifExcel() || this.ifImage()) ? this._pageWidth : this.ptToPx(this._pageWidth);
    const pageHeight = this.formatIcon && (this.ifExcel() || this.ifImage()) ? this._pageHeight : this.ptToPx(this._pageHeight);
    const offsetWidth = pageWidth ? pageWidth : window.innerWidth;

    const presentationThumbnails = this.isDesktop && this.ifPresentation() && !this.runPresentation;

    if (!this.runPresentation) {
      return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / (presentationThumbnails ? window.innerWidth - Constants.thumbnailsWidth - Constants.scrollWidth : window.innerWidth))
        : (!this.isDesktop ? Math.round(window.innerWidth * 100 / offsetWidth)
          : Math.round(((presentationThumbnails ? window.innerWidth - Constants.thumbnailsWidth - Constants.scrollWidth
            : window.innerHeight) / offsetWidth) * 100));
    }
    else {
      return Math.round(window.innerWidth * 100 / offsetWidth);
    }
  }

  getFitToHeight() {
    const pageWidth = this.formatIcon && (this.ifExcel() || this.ifImage()) ? this._pageWidth : this.ptToPx(this._pageWidth);
    const pageHeight = this.formatIcon && (this.ifExcel() || this.ifImage()) ? this._pageHeight : this.ptToPx(this._pageHeight);
    const windowHeight = (pageHeight > pageWidth) ? window.innerHeight - 100 : window.innerHeight + 100;
    const offsetHeight = pageHeight ? pageHeight : windowHeight;

    if (!this.ifPresentation() && !(this.ifImage())) {
      return (pageHeight > pageWidth) ? Math.round(windowHeight * 100 / offsetHeight) : Math.round(offsetHeight * 100 / windowHeight);
    }
    if (this.ifPresentation()) {
      return Math.floor((window.innerHeight - Constants.topbarWidth) * 100 / (!this.runPresentation ? offsetHeight + Constants.documentMargin * 2 + Constants.scrollWidth
        : offsetHeight));
    }
    if (this.ifImage()) {
      return Math.floor((window.innerHeight - Constants.topbarWidth) * 100 / (offsetHeight + Constants.documentMargin * 2 + Constants.scrollWidth));
    }
  }

  zoomOptions() {
    const width = this.getFitToWidth();
    const height = this.getFitToHeight();
    return this.zoomService.zoomOptions(width, height);
  }

  getTimerOptions() {
    return [{ value: 0, name: 'None', separator: false },
    { value: 5, name: '5 sec', separator: false },
    { value: 10, name: '10 sec', separator: false },
    { value: 15, name: '15 sec', separator: false },
    { value: 30, name: '30 sec', separator: false }];
  }

  set zoom(zoom) {
    this._zoom = zoom;
    this.zoomService.changeZoom(this._zoom);
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
        const updatedData = page.data.replace(/>\s+</g, '><')
          .replace(/\uFEFF/g, "");
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

    this._viewerService.loadPrintPdf(this.credentials).subscribe((data: Blob) => {
      this._renderPrintService.changeBlob(data);
    });
  }

  openThumbnails() {
    if (this.formatDisabled)
      return;

    if (this.showThumbnails) {
      this.showThumbnails = false;
      return;
    }

    this.runPresentation = false;
    this.showThumbnails = true;
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

  openSearch(show = true) {
    if (this.formatDisabled)
      return;
    if (show) {
      this.showSearch = !this.showSearch;
    }
    else {
      this.showSearch = show;
    }
  }

  private refreshZoom() {
    if (this.file) {
      this.formatIcon = FileUtil.find(this.file.guid, false).icon;
      this.zoom = this._windowService.isDesktop() && !(this.ifImage() || this.ifPresentation()) ? 100
        : (this.ifImage() ? this.getFitToHeight()
          : this.getFitToWidth());
    }
  }

  selectCurrentPage(pageNumber) {
    this.selectedPageNumber = pageNumber;
    this._navigateService.currentPage = pageNumber;
    if (this.runPresentation && this.intervalTime > 0 && this.intervalTimer.state !== 3) {
      this.resetInterval();
      if (this.slideInRange()) {
        this.startCountDown(this.intervalTime, true);
      }
    }
  }

  onMouseWheelUp() {
    this.startScrollTime = Date.now();
    if (this.ifPresentation() && this.selectedPageNumber !== 1) {
      if (this.startScrollTime - this.endScrollTime > 300 && this.vertScrollEnded(true)) {
        this.selectedPageNumber = this.selectedPageNumber - 1;
        this.endScrollTime = Date.now();
      }
    }
  }

  onMouseWheelDown() {
    this.startScrollTime = Date.now();
    if (this.ifPresentation() && this.selectedPageNumber !== this.file.pages.length) {
      if (this.startScrollTime - this.endScrollTime > 300 && this.vertScrollEnded(false)) {
        this.startScrollTime = Date.now();
        if (this.file.pages[this.selectedPageNumber] && !this.file.pages[this.selectedPageNumber].data) {
          this.preloadPages(this.selectedPageNumber, this.selectedPageNumber + 1);
          this.selectedPageNumber = this.selectedPageNumber + 1;
        }
        else {
          this.selectedPageNumber = this.selectedPageNumber + 1;
        }
        this.endScrollTime = Date.now();
      }
    }
  }

  vertScrollEnded(onTop: boolean) {
    const gdDocument = document.getElementsByClassName('gd-document')[0] as HTMLElement;
    if (onTop) {
      return gdDocument.scrollTop === 0;
    }
    else return gdDocument.offsetHeight + gdDocument.scrollTop >= gdDocument.scrollHeight;
  }

  toggleTimer($event) {
    this.intervalTime = $event.value;
    if (this.intervalTime !== 0) {
      if (this.intervalTimer && this.intervalTimer.state === 1) {
        this.intervalTimer.stop();
      }
      this.startCountDown(this.intervalTime);
      this.startInterval(this.intervalTime);
    }
    else {
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
      else {
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
    const secondsRemaining = Math.round(this.intervalTimer.remaining / 1000);
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

    const intervalId = setInterval(() => {
      if (screen.height === window.innerHeight && screen.width === window.innerWidth) {
        this.zoomService.changeZoom(window.innerWidth / window.innerHeight < 1.7 && this._pageWidth / this._pageHeight > 1.7
          ? this.getFitToWidth() : this.getFitToHeight());
        clearInterval(intervalId);
      }
    }, 50);
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

  closeFullScreen(byButton: boolean = false) {
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
    this.refreshZoom();
  }

  selectLanguage(selectedLanguage: Option) {
    this.selectedLanguage = selectedLanguage;
    this.translate.use(selectedLanguage.value);
  }

  ngOnDestroy() {
    // Remove the event listener to prevent memory leaks
    if (this.unlisten) {
      this.unlisten();
    }
  }
}
