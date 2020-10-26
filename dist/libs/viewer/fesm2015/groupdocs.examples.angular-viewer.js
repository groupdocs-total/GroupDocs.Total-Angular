import { BrowserModule } from '@angular/platform-browser';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, HostListener, EventEmitter, Input, Output, ElementRef, ViewChildren, NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Api, ConfigService, CommonModals, FileUtil, ModalService, UploadFilesService, NavigateService, ZoomService, PagePreloadService, RenderPrintService, PasswordService, WindowService, LoadingMaskService, DocumentComponent, LoadingMaskInterceptorService, CommonComponentsModule, ErrorInterceptorService } from '@groupdocs.examples.angular/common-components';
import { BehaviorSubject, Subject } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as Hammer from 'hammerjs';
import * as jquery from 'jquery';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewerService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    loadFiles(path) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadFile(credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
    }
    /**
     * @param {?} file
     * @param {?} url
     * @param {?} rewrite
     * @return {?}
     */
    upload(file, url, rewrite) {
        /** @type {?} */
        const formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getViewerApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    }
    /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    loadPage(credentials, page) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'page': page
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @param {?} angle
     * @param {?} page
     * @return {?}
     */
    rotate(credentials, angle, page) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.ROTATE_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'pages': [page],
            'angle': angle
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    getDownloadUrl(credentials) {
        return this._config.getViewerApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadPrint(credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_PRINT, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadPrintPdf(credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_PRINT_PDF, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, Api.httpOptionsJsonResponseTypeBlob);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadThumbnails(credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_THUMBNAILS, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, Api.httpOptionsJson);
    }
}
ViewerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ViewerService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ ViewerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ViewerService_Factory() { return new ViewerService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: ViewerService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ViewerService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ViewerService.prototype._config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewerConfig {
}
if (false) {
    /** @type {?} */
    ViewerConfig.prototype.rewrite;
    /** @type {?} */
    ViewerConfig.prototype.pageSelector;
    /** @type {?} */
    ViewerConfig.prototype.download;
    /** @type {?} */
    ViewerConfig.prototype.upload;
    /** @type {?} */
    ViewerConfig.prototype.print;
    /** @type {?} */
    ViewerConfig.prototype.browse;
    /** @type {?} */
    ViewerConfig.prototype.enableRightClick;
    /** @type {?} */
    ViewerConfig.prototype.filesDirectory;
    /** @type {?} */
    ViewerConfig.prototype.fontsDirectory;
    /** @type {?} */
    ViewerConfig.prototype.defaultDocument;
    /** @type {?} */
    ViewerConfig.prototype.htmlMode;
    /** @type {?} */
    ViewerConfig.prototype.preloadPageCount;
    /** @type {?} */
    ViewerConfig.prototype.zoom;
    /** @type {?} */
    ViewerConfig.prototype.search;
    /** @type {?} */
    ViewerConfig.prototype.thumbnails;
    /** @type {?} */
    ViewerConfig.prototype.rotate;
    /** @type {?} */
    ViewerConfig.prototype.cache;
    /** @type {?} */
    ViewerConfig.prototype.saveRotateState;
    /** @type {?} */
    ViewerConfig.prototype.watermarkText;
    /** @type {?} */
    ViewerConfig.prototype.printAllowed;
    /** @type {?} */
    ViewerConfig.prototype.showGridLines;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewerConfigService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._viewerConfig = new BehaviorSubject(new ViewerConfig());
        this._updatedConfig = this._viewerConfig.asObservable();
    }
    /**
     * @return {?}
     */
    get updatedConfig() {
        return this._updatedConfig;
    }
    /**
     * @return {?}
     */
    load() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const configEndpoint = this._config.getConfigEndpoint(Api.VIEWER_APP);
            this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                /** @type {?} */
                const viewerConfig = (/** @type {?} */ (response));
                this._viewerConfig.next(viewerConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                reject(`Could not load viewer config: ${JSON.stringify(response)}`);
            }));
        }));
    }
}
ViewerConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ViewerConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ ViewerConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ViewerConfigService_Factory() { return new ViewerConfigService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: ViewerConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ViewerConfigService.prototype._viewerConfig;
    /**
     * @type {?}
     * @private
     */
    ViewerConfigService.prototype._updatedConfig;
    /**
     * @type {?}
     * @private
     */
    ViewerConfigService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ViewerConfigService.prototype._config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Constants {
}
Constants.thumbnailsWidth = 300;
Constants.scrollWidth = 17;
Constants.topbarWidth = 60;
Constants.documentMargin = 20;
if (false) {
    /** @type {?} */
    Constants.thumbnailsWidth;
    /** @type {?} */
    Constants.scrollWidth;
    /** @type {?} */
    Constants.topbarWidth;
    /** @type {?} */
    Constants.documentMargin;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IntervalTimer {
    //  0 = idle, 1 = running, 2 = paused, 3= resumed
    /**
     * @param {?} callback
     * @param {?} interval
     */
    constructor(callback, interval) {
        this.remaining = 0;
        this.state = 0; //  0 = idle, 1 = running, 2 = paused, 3= resumed
        this.callback = callback;
        this.interval = interval;
        this.startTime = new Date().getTime();
        /** @type {?} */
        const _this = this;
        this.timerId = setInterval((/**
         * @return {?}
         */
        () => {
            this.callback();
            _this.startTime = new Date().getTime();
        }), this.interval);
        this.state = 1;
    }
    /**
     * @return {?}
     */
    pause() {
        if (this.state !== 1)
            return;
        this.remaining = this.interval - (new Date().getTime() - this.startTime);
        clearInterval(this.timerId);
        this.state = 2;
    }
    ;
    /**
     * @return {?}
     */
    resume() {
        if (this.state !== 2)
            return;
        this.state = 3;
        setTimeout((/**
         * @return {?}
         */
        () => this.timeoutCallback()), this.remaining);
    }
    ;
    /**
     * @return {?}
     */
    stop() {
        this.state = 0;
        clearInterval(this.timerId);
    }
    /**
     * @return {?}
     */
    timeoutCallback() {
        if (this.state !== 3)
            return;
        this.callback();
        this.startTime = new Date().getTime();
        this.timerId = setInterval(this.callback, this.interval);
        this.state = 1;
    }
    ;
}
if (false) {
    /** @type {?} */
    IntervalTimer.prototype.callback;
    /** @type {?} */
    IntervalTimer.prototype.interval;
    /** @type {?} */
    IntervalTimer.prototype.timerId;
    /** @type {?} */
    IntervalTimer.prototype.startTime;
    /** @type {?} */
    IntervalTimer.prototype.remaining;
    /** @type {?} */
    IntervalTimer.prototype.state;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewerAppComponent {
    /**
     * @param {?} _viewerService
     * @param {?} _modalService
     * @param {?} configService
     * @param {?} uploadFilesService
     * @param {?} _navigateService
     * @param {?} zoomService
     * @param {?} pagePreloadService
     * @param {?} _renderPrintService
     * @param {?} passwordService
     * @param {?} _windowService
     * @param {?} _loadingMaskService
     */
    constructor(_viewerService, _modalService, configService, uploadFilesService, _navigateService, zoomService, pagePreloadService, _renderPrintService, passwordService, _windowService, _loadingMaskService) {
        this._viewerService = _viewerService;
        this._modalService = _modalService;
        this._navigateService = _navigateService;
        this._renderPrintService = _renderPrintService;
        this._windowService = _windowService;
        this._loadingMaskService = _loadingMaskService;
        this.title = 'viewer';
        this.files = [];
        this.countPages = 0;
        this.formatDisabled = !this.file;
        this.showThumbnails = false;
        this.browseFilesModal = CommonModals.BrowseFiles;
        this.showSearch = false;
        this._zoom = 100;
        this.fileWasDropped = false;
        this.docElmWithBrowsersFullScreenFunctions = (/** @type {?} */ (document.documentElement));
        this.docWithBrowsersExitFunctions = (/** @type {?} */ (document));
        this.zoomService = zoomService;
        configService.updatedConfig.subscribe((/**
         * @param {?} viewerConfig
         * @return {?}
         */
        (viewerConfig) => {
            this.viewerConfig = viewerConfig;
        }));
        uploadFilesService.uploadsChange.subscribe((/**
         * @param {?} uploads
         * @return {?}
         */
        (uploads) => {
            if (uploads) {
                /** @type {?} */
                let i;
                for (i = 0; i < uploads.length; i++) {
                    this._viewerService.upload(uploads.item(i), '', this.viewerConfig.rewrite).subscribe((/**
                     * @param {?} obj
                     * @return {?}
                     */
                    (obj) => {
                        this.fileWasDropped ? this.selectFile(obj.guid, '', '') : this.selectDir('');
                    }));
                }
            }
        }));
        pagePreloadService.checkPreload.subscribe((/**
         * @param {?} page
         * @return {?}
         */
        (page) => {
            if (this.viewerConfig.preloadPageCount !== 0) {
                for (let i = page; i < page + 2; i++) {
                    if (i > 0 && i <= this.countPages && !this.file.pages[i - 1].data) {
                        this.preloadPages(i, i);
                    }
                }
            }
        }));
        passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        (pass) => {
            this.selectFile(this.credentials.guid, pass, CommonModals.PasswordRequired);
        }));
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @return {?}
         */
        () => {
            this.isDesktop = _windowService.isDesktop();
            if (!this.runPresentation) {
                this.refreshZoom();
            }
        }));
    }
    /**
     * @return {?}
     */
    fullScreen() {
        if (!document.fullscreenElement) {
            this.closeFullScreen();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.viewerConfig.defaultDocument !== "") {
            this.isLoading = true;
            this.selectFile(this.viewerConfig.defaultDocument, "", "");
        }
        /** @type {?} */
        const queryString = window.location.search;
        if (queryString) {
            this.TryOpenFileByUrl(queryString);
        }
        this.selectedPageNumber = this._navigateService.currentPage !== 0 ? this._navigateService.currentPage : 1;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._loadingMaskService
            .onLoadingChanged
            .subscribe((/**
         * @param {?} loading
         * @return {?}
         */
        (loading) => this.isLoading = loading));
        this.refreshZoom();
    }
    /**
     * @return {?}
     */
    get rewriteConfig() {
        return this.viewerConfig ? this.viewerConfig.rewrite : true;
    }
    /**
     * @return {?}
     */
    get zoomConfig() {
        return this.viewerConfig ? this.viewerConfig.zoom : true;
    }
    /**
     * @return {?}
     */
    get pageSelectorConfig() {
        return this.viewerConfig ? this.viewerConfig.pageSelector : true;
    }
    /**
     * @return {?}
     */
    get searchConfig() {
        return this.viewerConfig ? this.viewerConfig.search : true;
    }
    /**
     * @return {?}
     */
    get thumbnailsConfig() {
        return this.viewerConfig ? this.viewerConfig.thumbnails : true;
    }
    /**
     * @return {?}
     */
    get rotateConfig() {
        return this.viewerConfig ? this.viewerConfig.rotate : true;
    }
    /**
     * @return {?}
     */
    get downloadConfig() {
        return this.viewerConfig ? this.viewerConfig.download : true;
    }
    /**
     * @return {?}
     */
    get uploadConfig() {
        return this.viewerConfig ? this.viewerConfig.upload : true;
    }
    /**
     * @return {?}
     */
    get printConfig() {
        return this.viewerConfig ? this.viewerConfig.print : true;
    }
    /**
     * @return {?}
     */
    get browseConfig() {
        return this.viewerConfig ? this.viewerConfig.browse : true;
    }
    /**
     * @return {?}
     */
    get htmlModeConfig() {
        return this.viewerConfig ? this.viewerConfig.htmlMode : true;
    }
    /**
     * @return {?}
     */
    get saveRotateStateConfig() {
        return this.viewerConfig ? this.viewerConfig.saveRotateState : true;
    }
    /**
     * @return {?}
     */
    get enableRightClickConfig() {
        return this.viewerConfig ? this.viewerConfig.enableRightClick : true;
    }
    /**
     * @return {?}
     */
    get currentPage() {
        return this._navigateService.currentPage;
    }
    /**
     * @return {?}
     */
    ifPresentation() {
        return this.file ? FileUtil.find(this.file.guid, false).format === "Microsoft PowerPoint" : false;
    }
    /**
     * @return {?}
     */
    ifExcel() {
        return this.file ? FileUtil.find(this.file.guid, false).format === "Microsoft Excel" : false;
    }
    /**
     * @return {?}
     */
    ifImage() {
        return this.file ? this.formatIcon === "file-image" : false;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    validURL(str) {
        /** @type {?} */
        const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i');
        return !!pattern.test(str);
    }
    /**
     * @return {?}
     */
    getFileName() {
        return this.file.guid.replace(/^.*[\\\/]/, '');
    }
    /**
     * @param {?} id
     * @return {?}
     */
    openModal(id) {
        this._modalService.open(id);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    closeModal(id) {
        this._modalService.close(id);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectDir($event) {
        this._viewerService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        (files) => this.files = files || []));
    }
    /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @return {?}
     */
    selectFile($event, password, modalId) {
        this.credentials = { guid: $event, password: password };
        this.file = null;
        this._viewerService.loadFile(this.credentials).subscribe((/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
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
                /** @type {?} */
                const preloadPageCount = !this.ifPresentation() ? this.viewerConfig.preloadPageCount
                    : (this.viewerConfig.preloadPageCount !== 0
                        && this.viewerConfig.preloadPageCount < 3 ? 3
                        : this.viewerConfig.preloadPageCount);
                /** @type {?} */
                const countPages = file.pages ? file.pages.length : 0;
                if (preloadPageCount > 0) {
                    if (this.ifPresentation()) {
                        this.file.thumbnails = file.pages.slice();
                    }
                    this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                    if (!this.ifPresentation()) {
                        this._viewerService.loadThumbnails(this.credentials).subscribe((/**
                         * @param {?} data
                         * @return {?}
                         */
                        (data) => {
                            this.file.thumbnails = data.pages;
                        }));
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
        }));
        if (modalId) {
            this._modalService.close(modalId);
        }
        this.clearData();
    }
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    preloadPages(start, end) {
        for (let i = start; i <= end; i++) {
            this._viewerService.loadPage(this.credentials, i).subscribe((/**
             * @param {?} page
             * @return {?}
             */
            (page) => {
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
            }));
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    upload($event) {
        this._viewerService.upload(null, $event, this.rewriteConfig).subscribe((/**
         * @param {?} uploadedDocument
         * @return {?}
         */
        (uploadedDocument) => {
            if (this.fileParam !== '') {
                this.selectFile(uploadedDocument.guid, '', '');
                this.fileParam = '';
            }
            else {
                this.selectDir('');
            }
        }));
    }
    /**
     * @return {?}
     */
    nextPage() {
        if (this.formatDisabled)
            return;
        if (this.intervalTimer && this._navigateService.currentPage + 1 > this.countPages) {
            this.intervalTimer.stop();
            this.intervalTime = 0;
        }
        this._navigateService.nextPage();
    }
    /**
     * @return {?}
     */
    prevPage() {
        if (this.formatDisabled)
            return;
        this._navigateService.prevPage();
    }
    /**
     * @return {?}
     */
    toLastPage() {
        if (this.formatDisabled)
            return;
        this._navigateService.toLastPage();
    }
    /**
     * @return {?}
     */
    toFirstPage() {
        if (this.formatDisabled)
            return;
        this._navigateService.toFirstPage();
    }
    /**
     * @return {?}
     */
    zoomIn() {
        if (this.formatDisabled)
            return;
        if (this._zoom < 490) {
            this.zoom = this._zoom + 10;
        }
    }
    /**
     * @return {?}
     */
    zoomOut() {
        if (this.formatDisabled)
            return;
        if (this._zoom > 30) {
            this.zoom = this._zoom - 10;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    fileDropped($event) {
        this.fileWasDropped = $event;
    }
    /**
     * @private
     * @param {?} pt
     * @return {?}
     */
    ptToPx(pt) {
        //pt * 96 / 72 = px.
        return pt * 96 / 72;
    }
    /**
     * @return {?}
     */
    getFitToWidth() {
        // Images and Excel-related files receiving dimensions in px from server
        /** @type {?} */
        const pageWidth = this.formatIcon && (this.ifExcel() || this.ifImage()) ? this._pageWidth : this.ptToPx(this._pageWidth);
        /** @type {?} */
        const pageHeight = this.formatIcon && (this.ifExcel() || this.ifImage()) ? this._pageHeight : this.ptToPx(this._pageHeight);
        /** @type {?} */
        const offsetWidth = pageWidth ? pageWidth : window.innerWidth;
        /** @type {?} */
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
    /**
     * @return {?}
     */
    getFitToHeight() {
        /** @type {?} */
        const pageWidth = this.formatIcon && (this.ifExcel() || this.ifImage()) ? this._pageWidth : this.ptToPx(this._pageWidth);
        /** @type {?} */
        const pageHeight = this.formatIcon && (this.ifExcel() || this.ifImage()) ? this._pageHeight : this.ptToPx(this._pageHeight);
        /** @type {?} */
        const windowHeight = (pageHeight > pageWidth) ? window.innerHeight - 100 : window.innerHeight + 100;
        /** @type {?} */
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
    /**
     * @return {?}
     */
    zoomOptions() {
        /** @type {?} */
        const width = this.getFitToWidth();
        /** @type {?} */
        const height = this.getFitToHeight();
        return this.zoomService.zoomOptions(width, height);
    }
    /**
     * @return {?}
     */
    getTimerOptions() {
        return [{ value: 0, name: 'None', separator: false },
            { value: 5, name: '5 sec', separator: false },
            { value: 10, name: '10 sec', separator: false },
            { value: 15, name: '15 sec', separator: false },
            { value: 30, name: '30 sec', separator: false }];
    }
    /**
     * @param {?} zoom
     * @return {?}
     */
    set zoom(zoom) {
        this._zoom = zoom;
        this.zoomService.changeZoom(this._zoom);
    }
    /**
     * @return {?}
     */
    get zoom() {
        return this._zoom;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectZoom($event) {
        this.zoom = $event.value;
    }
    /**
     * @param {?} deg
     * @return {?}
     */
    rotate(deg) {
        if (this.formatDisabled)
            return;
        /** @type {?} */
        const pageNumber = this._navigateService.currentPage;
        /** @type {?} */
        const pageModel = this.file.pages[pageNumber - 1];
        if (this.saveRotateStateConfig && this.file) {
            this._viewerService.rotate(this.credentials, deg, pageNumber).subscribe((/**
             * @param {?} page
             * @return {?}
             */
            (page) => {
                /** @type {?} */
                const updatedData = page.data.replace(/>\s+</g, '><')
                    .replace(/\uFEFF/g, "")
                    .replace(/href="\/viewer/g, 'href="http://localhost:8080/viewer')
                    .replace(/src="\/viewer/g, 'src="http://localhost:8080/viewer')
                    .replace(/data="\/viewer/g, 'data="http://localhost:8080/viewer');
                page.data = updatedData;
                this.file.pages[pageNumber - 1] = page;
                if (this.file && this.file.pages && pageModel) {
                    /** @type {?} */
                    const angle = pageModel.angle + deg;
                    if (angle > 360) {
                        this.changeAngle(pageModel, 90);
                    }
                    else if (angle < -360) {
                        this.changeAngle(pageModel, -90);
                    }
                    else {
                        this.changeAngle(pageModel, angle);
                    }
                }
            }));
        }
    }
    /**
     * @private
     * @param {?} page
     * @param {?} angle
     * @return {?}
     */
    changeAngle(page, angle) {
        page.angle = angle;
    }
    /**
     * @return {?}
     */
    downloadFile() {
        if (this.formatDisabled)
            return;
        window.location.assign(this._viewerService.getDownloadUrl(this.credentials));
    }
    /**
     * @return {?}
     */
    printFile() {
        if (this.formatDisabled)
            return;
        if (this.viewerConfig.htmlMode) {
            this._viewerService.loadPrint(this.credentials).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this._renderPrintService.changePages(data.pages);
            }));
        }
        else {
            this._renderPrintService.changePages(this.file.pages);
        }
    }
    /**
     * @return {?}
     */
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
        }
        else {
            if (this.file.thumbnails.filter((/**
             * @param {?} t
             * @return {?}
             */
            t => !t.data)).length > 0) {
                this._viewerService.loadThumbnails(this.credentials).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                (data) => {
                    this.file.thumbnails = data.pages;
                    this.showThumbnails = true;
                }));
            }
            else {
                this.showThumbnails = true;
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearData() {
        if (!this.file || !this.file.pages) {
            return;
        }
        for (const page of this.file.pages) {
            page.data = null;
        }
    }
    /**
     * @return {?}
     */
    onRightClick() {
        return this.enableRightClickConfig;
    }
    /**
     * @return {?}
     */
    openSearch() {
        if (this.formatDisabled)
            return;
        this.showSearch = !this.showSearch;
    }
    /**
     * @private
     * @return {?}
     */
    refreshZoom() {
        if (this.file) {
            this.formatIcon = FileUtil.find(this.file.guid, false).icon;
            this.zoom = this._windowService.isDesktop() && !(this.ifImage()) ? 100
                : (this.ifImage() ? this.getFitToHeight()
                    : this.getFitToWidth());
        }
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    onMouseWheelUp() {
        if (this.ifPresentation() && this.selectedPageNumber !== 1) {
            this.selectedPageNumber = this.selectedPageNumber - 1;
        }
    }
    /**
     * @return {?}
     */
    onMouseWheelDown() {
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
    /**
     * @private
     * @param {?} queryString
     * @return {?}
     */
    TryOpenFileByUrl(queryString) {
        /** @type {?} */
        const urlParams = new URLSearchParams(queryString);
        this.fileParam = urlParams.get('file');
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
    /**
     * @param {?} $event
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    showCountDown() {
        return this.intervalTime > 0 && (this.slideInRange());
    }
    /**
     * @param {?} seconds
     * @param {?=} reset
     * @return {?}
     */
    startCountDown(seconds, reset = false) {
        clearInterval(this.countDownInterval);
        if (seconds > 0) {
            this.secondsLeft = seconds;
            seconds--;
            /** @type {?} */
            const interval = setInterval((/**
             * @return {?}
             */
            () => {
                this.secondsLeft = seconds;
                seconds--;
                if (seconds === 0) {
                    clearInterval(interval);
                }
            }), 1000);
            this.countDownInterval = interval;
        }
    }
    /**
     * @private
     * @param {?} intervalTime
     * @return {?}
     */
    startInterval(intervalTime) {
        this.intervalTimer = new IntervalTimer((/**
         * @return {?}
         */
        () => {
            if (this.slideInRange()) {
                this.nextPage();
                if (this.slideInRange()) {
                    this.startCountDown(intervalTime);
                }
            }
            else {
                this.intervalTimer.stop();
            }
        }), intervalTime * 1000);
    }
    /**
     * @private
     * @return {?}
     */
    slideInRange() {
        return this._navigateService.currentPage + 1 <= this.countPages;
    }
    /**
     * @private
     * @return {?}
     */
    resetInterval() {
        this.intervalTimer.stop();
        this.startInterval(this.intervalTime);
    }
    /**
     * @return {?}
     */
    pausePresenting() {
        this.intervalTimer.pause();
        this.startCountDown(0, true);
    }
    /**
     * @return {?}
     */
    resumePresenting() {
        this.intervalTimer.resume();
        /** @type {?} */
        const secondsRemaining = Math.round(this.intervalTimer.remaining / 1000);
        this.startCountDown(secondsRemaining);
    }
    /**
     * @return {?}
     */
    presentationRunning() {
        return this.intervalTimer && this.intervalTimer.state === 1 && this.slideInRange();
    }
    /**
     * @return {?}
     */
    presentationPaused() {
        return this.intervalTimer && this.intervalTimer.state === 2 && this.slideInRange();
    }
    /**
     * @return {?}
     */
    startPresentation() {
        this.showThumbnails = false;
        this.openFullScreen();
        this.runPresentation = !this.runPresentation;
        /** @type {?} */
        const screenAspectRatio = window.innerWidth / window.innerHeight;
        /** @type {?} */
        const pageAspectRatio = this._pageWidth / this._pageHeight;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.zoomService.changeZoom(screenAspectRatio < 1.7 && pageAspectRatio > 1.7 ? this.getFitToWidth() : this.getFitToHeight());
        }), 100);
    }
    /**
     * @return {?}
     */
    openFullScreen() {
        /** @type {?} */
        const docElmWithBrowsersFullScreenFunctions = (/** @type {?} */ (document.documentElement));
        if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
            docElmWithBrowsersFullScreenFunctions.requestFullscreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
            docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
            docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
        }
        this.isFullScreen = true;
    }
    /**
     * @param {?=} byButton
     * @return {?}
     */
    closeFullScreen(byButton = false) {
        if (byButton) {
            /** @type {?} */
            const docWithBrowsersExitFunctions = (/** @type {?} */ (document));
            if (docWithBrowsersExitFunctions.exitFullscreen) {
                docWithBrowsersExitFunctions.exitFullscreen();
            }
            else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */
                docWithBrowsersExitFunctions.mozCancelFullScreen();
            }
            else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                docWithBrowsersExitFunctions.webkitExitFullscreen();
            }
            else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */
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
}
ViewerAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-viewer',
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick()\">\n  <div class=\"top-panel\" *ngIf=\"!runPresentation\">\n    <gd-logo [logo]=\"'viewer'\" icon=\"eye\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" title=\"Browse files\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-select class=\"mobile-hide select-left\" [disabled]=\"formatDisabled\" [options]=\"options\" (selected)=\"selectZoom($event)\"\n                 [showSelected]=\"{ name: zoom+'%', value : zoom}\" *ngIf=\"zoomConfig\" ></gd-select>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" title=\"Zoom In\" (click)=\"zoomIn()\"\n                 *ngIf=\"zoomConfig\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" title=\"Zoom Out\"\n                 (click)=\"zoomOut()\" *ngIf=\"zoomConfig\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-left'\" title=\"First Page\"\n                 (click)=\"toFirstPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" title=\"Previous Page\"\n                 (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <div class=\"current-page-number\" [ngClass]=\"{'active': !formatDisabled}\" *ngIf=\"formatIcon !== 'file-excel'\">{{currentPage}}/{{countPages}}</div>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" title=\"Next Page\"\n                 (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-right'\" title=\"Last Page\"\n                 (click)=\"toLastPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'undo'\" title=\"Rotate CCW\" (click)=\"rotate(-90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'redo'\" title=\"Rotate CW\" (click)=\"rotate(90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" title=\"Download\"\n                 (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" title=\"Print\" (click)=\"printFile()\"\n                 *ngIf=\"printConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search'\" title=\"Search\" (click)=\"openSearch()\"\n                 *ngIf=\"searchConfig && !ifPresentation()\" ></gd-button>\n      <gd-search (hidePanel)=\"showSearch = !$event\" *ngIf=\"showSearch\" ></gd-search>\n\n      <gd-button class=\"thumbnails-button btn-right\" [disabled]=\"formatDisabled\" [icon]=\"'th-large'\" title=\"Thumbnails\"\n                 (click)=\"openThumbnails()\" *ngIf=\"thumbnailsConfig && isDesktop && formatIcon !== 'file-excel' && (!ifPresentation() ||\n                 ifPresentation() && runPresentation)\"></gd-button>\n      <gd-button class=\"thumbnails-button mobile-hide btn-right\" [disabled]=\"formatDisabled\" [icon]=\"'play'\" title=\"Run presentation\"\n                 (click)=\"startPresentation()\" *ngIf=\"ifPresentation() && !runPresentation\"></gd-button>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"top-panel\" *ngIf=\"runPresentation\">\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <div class=\"slides-title\">Viewer</div>\n      <div class=\"slides-filename\">{{getFileName()}}</div>\n      <div class=\"slides-buttons\">\n        <gd-select class=\"mobile-hide select-right\" [disabled]=\"formatDisabled\" [options]=\"timerOptions\" (selected)=\"toggleTimer($event)\"\n        [icon]=\"'clock'\" *ngIf=\"zoomConfig\" ></gd-select>\n        <gd-button class=\"mobile-hide\" *ngIf=\"presentationRunning()\" [disabled]=\"formatDisabled\" [icon]=\"'pause'\" title=\"Pause presenting\"\n        (click)=\"pausePresenting()\"></gd-button>\n        <gd-button class=\"mobile-hide\" *ngIf=\"presentationPaused()\" [disabled]=\"formatDisabled\" [icon]=\"'step-forward'\" title=\"Resume presenting\"\n        (click)=\"resumePresenting()\"></gd-button>\n        <gd-button class=\"mobile-hide btn-right\" [disabled]=\"formatDisabled\" [icon]=\"'stop'\" title=\"Stop presenting\"\n        (click)=\"closeFullScreen(true)\"></gd-button>\n      </div>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"doc-panel\" *ngIf=\"file\" #docPanel>\n    <gd-thumbnails *ngIf=\"showThumbnails && !ifPresentation() && isDesktop\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\" (selectedPage)=\"selectCurrentPage($event)\"></gd-thumbnails>\n    <gd-thumbnails *ngIf=\"showThumbnails && ifPresentation() && !runPresentation && isDesktop\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\" (selectedPage)=\"selectCurrentPage($event)\" gdScrollable></gd-thumbnails>\n\n    <gd-document class=\"gd-document\" *ngIf=\"(file &&\n                                            (ifExcel() && !htmlModeConfig) ||\n                                            (ifPresentation() && isDesktop && !runPresentation) ||\n                                            (!ifExcel() && !ifPresentation()))\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" [selectedPage]=\"selectedPageNumber\" gdRenderPrint [htmlMode]=\"htmlModeConfig\" gdMouseWheel (mouseWheelUp)=\"onMouseWheelUp()\" (mouseWheelDown)=\"onMouseWheelDown()\"></gd-document>\n    <gd-excel-document class=\"gd-document\" *ngIf=\"file && ifExcel() && htmlModeConfig\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-excel-document>\n    <gd-run-presentation class=\"gd-document\" *ngIf=\"(file && ifPresentation() && runPresentation) ||\n                                                    (file && ifPresentation() && !isDesktop)\" [file]=\"file\" [currentPage]=\"currentPage\" [mode]=\"htmlModeConfig\"\n                                                    (selectedPage)=\"selectCurrentPage($event)\"\n                 [preloadPageCount]=\"0\"></gd-run-presentation>\n    <div class=\"slides-nav\" *ngIf=\"runPresentation\">\n      <div class=\"timer\" *ngIf=\"showCountDown()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon><span [ngClass]=\"secondsLeft >= 10 ? 'seconds-remaining two-digits' : 'seconds-remaining'\">{{secondsLeft}}</span>\n      </div>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\"\n      (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\"\n      (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n    </div>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n    Or drop file here\n  </gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.current-page-number{margin-left:7px;font-size:14px;color:#959da5;width:37px;height:37px;line-height:37px;text-align:center}.current-page-number.active{color:#fff}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.thumbnails-button{position:absolute;right:3px}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}.btn-right{margin-right:7px}::ng-deep .tools .button,::ng-deep .tools .nav-caret,::ng-deep .tools .selected-value{color:#fff!important}::ng-deep .tools .button.inactive,::ng-deep .tools .nav-caret.inactive,::ng-deep .tools .selected-value.inactive{color:#959da5!important}::ng-deep .tools .button{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .select-left .select{position:relative}::ng-deep .tools .select-left .dropdown-menu{top:40px;left:0}::ng-deep .tools .select-right .select{position:relative}::ng-deep .tools .select-right .dropdown-menu{top:40px;right:0}::ng-deep .tools .dropdown-menu .option{color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 15px!important}::ng-deep .tools .select{width:37px;height:37px;margin-left:7px;line-height:37px;text-align:center}::ng-deep .tools .slides-title{color:#fff;padding-left:12px;font-size:18px}::ng-deep .tools .slides-filename{-webkit-box-flex:1;flex-grow:1;text-align:center;color:#fff;text-overflow:ellipsis;white-space:nowrap;padding-left:20px;overflow:hidden}::ng-deep .tools .slides-buttons{display:-webkit-box;display:flex}::ng-deep .tools .slides-buttons ::ng-deep .select{color:#fff;cursor:pointer}.slides-nav{position:absolute;right:30px;bottom:30px;display:-webkit-box;display:flex}.slides-nav ::ng-deep .button{font-size:37px;background-color:#edf0f2;border-radius:3px}.slides-nav ::ng-deep .timer{font-size:42px;line-height:6px;color:#959da5;position:relative}.slides-nav ::ng-deep .timer .seconds-remaining{position:absolute;margin-left:5px;font-size:16px;top:18px;left:12px}.slides-nav ::ng-deep .timer .seconds-remaining.two-digits{left:6px!important}@media (max-width:1037px){.current-page-number,.mobile-hide{display:none}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .tools .gd-nav-search-btn .icon-button{height:37px;width:37px}::ng-deep .tools .gd-nav-search-btn .button{font-size:14px}}"]
            }] }
];
/** @nocollapse */
ViewerAppComponent.ctorParameters = () => [
    { type: ViewerService },
    { type: ModalService },
    { type: ViewerConfigService },
    { type: UploadFilesService },
    { type: NavigateService },
    { type: ZoomService },
    { type: PagePreloadService },
    { type: RenderPrintService },
    { type: PasswordService },
    { type: WindowService },
    { type: LoadingMaskService }
];
ViewerAppComponent.propDecorators = {
    fullScreen: [{ type: HostListener, args: ["document:fullscreenchange", [],] }]
};
if (false) {
    /** @type {?} */
    ViewerAppComponent.prototype.title;
    /** @type {?} */
    ViewerAppComponent.prototype.files;
    /** @type {?} */
    ViewerAppComponent.prototype.file;
    /** @type {?} */
    ViewerAppComponent.prototype.viewerConfig;
    /** @type {?} */
    ViewerAppComponent.prototype.countPages;
    /** @type {?} */
    ViewerAppComponent.prototype.formatDisabled;
    /** @type {?} */
    ViewerAppComponent.prototype.showThumbnails;
    /** @type {?} */
    ViewerAppComponent.prototype.credentials;
    /** @type {?} */
    ViewerAppComponent.prototype.browseFilesModal;
    /** @type {?} */
    ViewerAppComponent.prototype.showSearch;
    /** @type {?} */
    ViewerAppComponent.prototype.isDesktop;
    /** @type {?} */
    ViewerAppComponent.prototype.isLoading;
    /** @type {?} */
    ViewerAppComponent.prototype._zoom;
    /** @type {?} */
    ViewerAppComponent.prototype._pageWidth;
    /** @type {?} */
    ViewerAppComponent.prototype._pageHeight;
    /** @type {?} */
    ViewerAppComponent.prototype.options;
    /** @type {?} */
    ViewerAppComponent.prototype.timerOptions;
    /** @type {?} */
    ViewerAppComponent.prototype.intervalTime;
    /** @type {?} */
    ViewerAppComponent.prototype.intervalTimer;
    /** @type {?} */
    ViewerAppComponent.prototype.countDownInterval;
    /** @type {?} */
    ViewerAppComponent.prototype.secondsLeft;
    /** @type {?} */
    ViewerAppComponent.prototype.fileWasDropped;
    /** @type {?} */
    ViewerAppComponent.prototype.formatIcon;
    /** @type {?} */
    ViewerAppComponent.prototype.fileParam;
    /** @type {?} */
    ViewerAppComponent.prototype.querySubscription;
    /** @type {?} */
    ViewerAppComponent.prototype.selectedPageNumber;
    /** @type {?} */
    ViewerAppComponent.prototype.runPresentation;
    /** @type {?} */
    ViewerAppComponent.prototype.isFullScreen;
    /** @type {?} */
    ViewerAppComponent.prototype.docElmWithBrowsersFullScreenFunctions;
    /** @type {?} */
    ViewerAppComponent.prototype.docWithBrowsersExitFunctions;
    /** @type {?} */
    ViewerAppComponent.prototype.zoomService;
    /**
     * @type {?}
     * @private
     */
    ViewerAppComponent.prototype._viewerService;
    /**
     * @type {?}
     * @private
     */
    ViewerAppComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    ViewerAppComponent.prototype._navigateService;
    /**
     * @type {?}
     * @private
     */
    ViewerAppComponent.prototype._renderPrintService;
    /**
     * @type {?}
     * @private
     */
    ViewerAppComponent.prototype._windowService;
    /**
     * @type {?}
     * @private
     */
    ViewerAppComponent.prototype._loadingMaskService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ThumbnailsComponent {
    /**
     * @param {?} _navigateService
     * @param {?} _zoomService
     */
    constructor(_navigateService, _zoomService) {
        this._navigateService = _navigateService;
        this._zoomService = _zoomService;
        this.selectedPage = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
        // which leads to undesired spaces on the top of the docs pages
        if (this.pages) {
            this.pages.forEach((/**
             * @param {?} page
             * @return {?}
             */
            page => {
                if (page.data) {
                    page.data = page.data.replace(/>\s+</g, '><')
                        .replace(/\uFEFF/g, "")
                        .replace(/href="\/viewer/g, 'href="http://localhost:8080/viewer')
                        .replace(/src="\/viewer/g, 'src="http://localhost:8080/viewer')
                        .replace(/data="\/viewer/g, 'data="http://localhost:8080/viewer');
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._zoomService.changeZoom(this._zoomService.zoom);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._zoomService.changeZoom(this._zoomService.zoom);
        }), 100);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    imgData(data) {
        /** @type {?} */
        const dataImagePngBase64 = 'data:image/png;base64,';
        if (!this.isHtmlMode) {
            return dataImagePngBase64 + data;
        }
        return dataImagePngBase64;
    }
    /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    getScale(x, y) {
        return Math.min(190 / x, 190 / y);
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    openPage(pageNumber) {
        this.selectedPage.emit(pageNumber);
        this._navigateService.navigateTo(pageNumber);
    }
    // TODO: consider placing in one service
    /**
     * @param {?} value
     * @return {?}
     */
    getDimensionWithUnit(value) {
        return value + FileUtil.find(this.guid, false).unit;
    }
}
ThumbnailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-thumbnails',
                template: "<div class=\"gd-thumbnails\">\n  <div class=\"gd-thumbnails-panzoom\">\n    <div *ngFor=\"let page of pages\" id=\"gd-thumbnails-page-{{page.number}}\" class=\"gd-page\"\n         (click)=\"openPage(page.number)\" gdRotation [withMargin]=\"false\"\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <div class=\"gd-wrapper\"\n           [style.height]=\"getDimensionWithUnit(page.height)\"\n           [style.width]=\"getDimensionWithUnit(page.width)\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && isHtmlMode\"\n           [innerHTML]=\"page.data | safeHtml\"></div>\n      <div class=\"gd-wrapper\" \n           [style.height]=\"getDimensionWithUnit(page.height)\"\n           [style.width]=\"getDimensionWithUnit(page.width)\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && !isHtmlMode\">\n           <img style=\"width: inherit !important\" class=\"gd-page-image\" [attr.src]=\"imgData(page.data) | safeResourceHtml\"\n             alt/>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [":host{-webkit-box-flex:0;flex:0 0 300px;background:#f5f5f5;color:#fff;overflow-y:auto;display:block;-webkit-transition:margin-left .2s;transition:margin-left .2s;height:100%}.gd-page{width:272px;height:272px;-webkit-transition:.3s;transition:.3s;background-color:#e7e7e7;cursor:pointer;margin:14px 14px 0}.gd-page:hover{background-color:silver}.gd-wrapper{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);left:50%;top:50%;position:relative;background-color:#fff;box-shadow:0 4px 12px -4px rgba(0,0,0,.38);pointer-events:none}.gd-wrapper ::ng-deep img{width:inherit}.gd-thumbnails::-webkit-scrollbar{width:0;background-color:#f5f5f5}.gd-thumbnails-panzoom>.gd-thumbnails-landscape{margin:-134px 0 -1px 12px}.gd-thumbnails .gd-page-image{height:inherit}.gd-thumbnails-landscape-image{margin:-90px 0 -23px!important}.gd-thumbnails-landscape-image-rotated{margin:126px 0 -3px -104px!important}"]
            }] }
];
/** @nocollapse */
ThumbnailsComponent.ctorParameters = () => [
    { type: NavigateService },
    { type: ZoomService }
];
ThumbnailsComponent.propDecorators = {
    pages: [{ type: Input }],
    guid: [{ type: Input }],
    mode: [{ type: Input }],
    isHtmlMode: [{ type: Input }],
    selectedPage: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ThumbnailsComponent.prototype.pages;
    /** @type {?} */
    ThumbnailsComponent.prototype.guid;
    /** @type {?} */
    ThumbnailsComponent.prototype.mode;
    /** @type {?} */
    ThumbnailsComponent.prototype.isHtmlMode;
    /** @type {?} */
    ThumbnailsComponent.prototype.selectedPage;
    /**
     * @type {?}
     * @private
     */
    ThumbnailsComponent.prototype._navigateService;
    /**
     * @type {?}
     * @private
     */
    ThumbnailsComponent.prototype._zoomService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExcelPageService {
    constructor() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getUpdatedPage(data) {
        /** @type {?} */
        const doc = new DOMParser().parseFromString(data, "text/html");
        /** @type {?} */
        const table = doc.querySelector('table');
        /** @type {?} */
        let numCellsInFirstRow = 0;
        /** @type {?} */
        const cellsFromFirstRow = doc.querySelectorAll('table > tbody > tr:first-child td');
        cellsFromFirstRow.forEach((/**
         * @param {?} elm
         * @return {?}
         */
        elm => {
            numCellsInFirstRow += elm.attributes['colspan'] ? parseInt(elm.attributes['colspan'].value, 10) : 1;
        }));
        /** @type {?} */
        const newTable = this.createHeader(numCellsInFirstRow, table);
        doc.querySelector('table').replaceWith(newTable);
        /** @type {?} */
        const resultData = new XMLSerializer().serializeToString(doc)
        // work-around for FF which is adds a0 namespace during serialization
        ;
        // work-around for FF which is adds a0 namespace during serialization
        return resultData.replace(/a0:/g, "").replace(/:a0/g, "");
    }
    /**
     * @param {?} numCols
     * @param {?} table
     * @return {?}
     */
    createHeader(numCols, table) {
        /** @type {?} */
        const header = document.createElement('thead');
        header.append(document.createElement('tr'));
        for (let i = 0; i < numCols; ++i) {
            /** @type {?} */
            const th = document.createElement('th');
            th.innerText = this.colName(i);
            header.querySelector("tr").append(th);
        }
        /** @type {?} */
        const colgroup = table.querySelector('colgroup');
        /** @type {?} */
        const col = document.createElement('col');
        col.width = '80px';
        colgroup.prepend(col);
        table.prepend(header);
        /** @type {?} */
        let cnt = 0;
        table.querySelectorAll('tr').forEach((/**
         * @param {?} row
         * @return {?}
         */
        row => {
            /** @type {?} */
            const div = document.createElement('div');
            if (cnt !== 0) {
                /** @type {?} */
                const td = document.createElement('td');
                td.className = "excel";
                td.append(div);
                div.innerText = cnt.toString();
                row.prepend(td);
            }
            else {
                /** @type {?} */
                const th = document.createElement('th');
                th.append(div);
                row.prepend(th);
            }
            cnt++;
        }));
        return table;
    }
    /**
     * @param {?} n
     * @return {?}
     */
    colName(n) {
        /** @type {?} */
        const ordA = 'a'.charCodeAt(0);
        /** @type {?} */
        const ordZ = 'z'.charCodeAt(0);
        /** @type {?} */
        const len = ordZ - ordA + 1;
        /** @type {?} */
        let s = "";
        while (n >= 0) {
            s = String.fromCharCode(n % len + ordA) + s;
            n = Math.floor(n / len) - 1;
        }
        return s;
    }
}
ExcelPageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ExcelPageService.ctorParameters = () => [];
/** @nocollapse */ ExcelPageService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ExcelPageService_Factory() { return new ExcelPageService(); }, token: ExcelPageService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExcelPageComponent {
    /**
     * @param {?} _excelPageService
     */
    constructor(_excelPageService) {
        this._excelPageService = _excelPageService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const isIE = /*@cc_on!@*/ false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
        if (isIE && this.number === 0) {
            this.editable = false;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
        // which leads to undesired spaces on the top of the docs pages
        this.data = this.data !== null ? this.data.replace(/>\s+</g, '><')
            .replace(/\uFEFF/g, "")
            .replace(/href="\/viewer/g, 'href="http://localhost:8080/viewer')
            .replace(/src="\/viewer/g, 'src="http://localhost:8080/viewer')
            .replace(/data="\/viewer/g, 'data="http://localhost:8080/viewer')
            : null;
        /** @type {?} */
        const dataImagePngBase64 = 'data:image/png;base64,';
        this.imgData = dataImagePngBase64;
        if (!this.isHtml) {
            this.imgData += this.data;
        }
        this.data = this.data !== null ? this._excelPageService.getUpdatedPage(this.data) : null;
    }
}
ExcelPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-excel-page',
                template: "<div id=\"page-{{number}}\">\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\" [contentEditable]=\"(editable) ? true : false\"></div>\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\n       alt=\"\"\n       *ngIf=\"data && !isHtml\">\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n    &nbsp;Loading... Please wait.\n  </div>\n</div>\n",
                styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper div{width:100%}::ng-deep .gd-highlight{background-color:#ff0}::ng-deep .gd-highlight-select{background-color:#ff9b00}::ng-deep th{color:#959da5;background-color:#f4f4f4;font-weight:unset;border:1px solid #e7e7e7!important;text-transform:uppercase;font-size:14px;overflow:hidden}::ng-deep td{vertical-align:middle!important}::ng-deep .page-grid-lines td{border:1px solid #e7e7e7!important}::ng-deep .page td:nth-child(1){border:1px solid #e7e7e7!important}::ng-deep tr td.excel:first-child{color:#959da5;background-color:#f4f4f4;font-weight:unset;width:1%;text-align:center}::ng-deep tr td.excel:first-child div{width:80px}::ng-deep tr th.excel:first-child{background-color:#f4f4f4;width:1%}::ng-deep tr th.excel:first-child div{width:80px}.gd-page-image{height:100%!important;width:100%!important}"]
            }] }
];
/** @nocollapse */
ExcelPageComponent.ctorParameters = () => [
    { type: ExcelPageService }
];
ExcelPageComponent.propDecorators = {
    angle: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    number: [{ type: Input }],
    data: [{ type: Input }],
    isHtml: [{ type: Input }],
    editable: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ExcelPageComponent.prototype.angle;
    /** @type {?} */
    ExcelPageComponent.prototype.width;
    /** @type {?} */
    ExcelPageComponent.prototype.height;
    /** @type {?} */
    ExcelPageComponent.prototype.number;
    /** @type {?} */
    ExcelPageComponent.prototype.data;
    /** @type {?} */
    ExcelPageComponent.prototype.isHtml;
    /** @type {?} */
    ExcelPageComponent.prototype.editable;
    /** @type {?} */
    ExcelPageComponent.prototype.imgData;
    /**
     * @type {?}
     * @private
     */
    ExcelPageComponent.prototype._excelPageService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExcelDocumentComponent extends DocumentComponent {
    /**
     * @param {?} _elementRef
     * @param {?} zoomService
     * @param {?} windowService
     * @param {?} navigateService
     */
    constructor(_elementRef, zoomService, windowService, navigateService) {
        super(_elementRef, zoomService, windowService, navigateService);
        this.panzoom = null;
        this.navigateService = navigateService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.currentPageNo = 1;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.refreshExcelDocHeight();
        this.pages.changes.subscribe((/**
         * @return {?}
         */
        () => {
            this.refreshExcelDocHeight();
        }));
        this.navigateService.navigate.subscribe((((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (value) {
                this.selectSheet(value);
            }
        }))));
    }
    /**
     * @return {?}
     */
    refreshExcelDocHeight() {
        // For current iteration we'll change actual height of .document
        this.doc = this._elementRef.nativeElement.children.item(0);
        this.panzoom = this._elementRef.nativeElement.children.item(0).children.item(0);
        // magic number 37 is the height of the bottom-bar with navigation between pages
        this.doc.style.height = this.panzoom.scrollHeight + 37 + "px";
    }
    /**
     * @param {?} number
     * @return {?}
     */
    selectSheet(number) {
        this.currentPageNo = number;
    }
}
ExcelDocumentComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-excel-document',
                template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\">\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\n    <div [ngClass]=\"file.showGridLines ? 'page-grid-lines' : 'page'\" *ngFor=\"let page of file?.pages\"\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\">\n      <gd-excel-page *ngIf=\"currentPageNo == page.number\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-excel-page>\n    </div>\n  </div>\n</div>\n<div class=\"sheets\">\n  <div class=\"sheets-wrapper\">\n    <div *ngFor=\"let page of file?.pages\">\n      <gd-button [icon]=\"'eye'\" [ngClass]=\"{'active': currentPageNo == page.number }\" (click)=\"selectSheet(page.number)\">Sheet {{page.number}}</gd-button>\n    </div>\n  </div>\n</div>\n",
                styles: [":host{overflow:scroll;width:100%;background-color:#e7e7e7}.document{width:100%;-webkit-transition:.4s;transition:.4s;padding:0;margin:0;position:relative}.sheets{background-color:#fff;display:-webkit-box;display:flex;border-top:1px solid #e7e7e7;position:fixed;bottom:17px;right:17px;width:100%}.sheets ::ng-deep gd-button.active .text{background-color:#272727;border-radius:10px;color:#eee}.sheets ::ng-deep gd-button .text{padding:1px 12px;color:#000}.sheets ::ng-deep gd-button fa-icon{display:none}.sheets-wrapper{margin-left:29px;display:-webkit-box;display:flex}.page{position:relative;display:inline-block;background-color:#fff;-webkit-transition:.3s;transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{-webkit-transform:none;transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;display:-webkit-box;display:flex;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}.page-grid-lines{background-color:#fff}@media (max-width:1037px){.document{overflow-x:auto!important}.panzoom{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
            }] }
];
/** @nocollapse */
ExcelDocumentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ZoomService },
    { type: WindowService },
    { type: NavigateService }
];
ExcelDocumentComponent.propDecorators = {
    pages: [{ type: ViewChildren, args: [ExcelPageComponent,] }]
};
if (false) {
    /** @type {?} */
    ExcelDocumentComponent.prototype.pages;
    /** @type {?} */
    ExcelDocumentComponent.prototype.currentPageNo;
    /** @type {?} */
    ExcelDocumentComponent.prototype.panzoom;
    /** @type {?} */
    ExcelDocumentComponent.prototype.navigateService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const $ = jquery;
class RunPresentationComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _zoomService
     * @param {?} _windowService
     * @param {?} _navigateService
     */
    constructor(_elementRef, _zoomService, _windowService, _navigateService) {
        this._elementRef = _elementRef;
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this._navigateService = _navigateService;
        this.selectedPage = new EventEmitter();
        this.wait = false;
        this.container = null;
        this.doc = null;
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            this.zoom = val;
        }));
        this.isDesktop = _windowService.isDesktop();
        this._navigateService.navigate.subscribe(((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.scrollTo(value, value > this.lastCurrentPage);
            this.lastCurrentPage = value;
        })));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.lastCurrentPage = this._navigateService.currentPage;
        this.offsetWidth = this._elementRef.nativeElement.offsetWidth;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // For current iteration we take .panzoom as a document
        this.doc = this._elementRef.nativeElement.children.item(0).children.item(0);
        // For current iteration we take .gd-document as a container
        this.container = this._elementRef.nativeElement;
        /** @type {?} */
        const hammer = new Hammer(this.container);
        /** @type {?} */
        const timerId = setInterval((/**
         * @return {?}
         */
        () => {
            if (this.currentPage !== 1) {
                if (this._elementRef.nativeElement.offsetWidth === this.offsetWidth) {
                    this.scrollTo(this.currentPage, true, false);
                    clearInterval(timerId);
                    this.alignVert();
                }
            }
            this.alignVert();
            clearInterval(timerId);
        }), 100);
    }
    /**
     * @return {?}
     */
    alignVert() {
        /** @type {?} */
        const presentationElements = this._elementRef.nativeElement.querySelectorAll('.presentation');
        /** @type {?} */
        const zoom = this._zoomService.zoom / 100;
        presentationElements.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => ((/** @type {?} */ (element))).style.marginTop = ((window.innerHeight - element.clientHeight * zoom - Constants.topbarWidth) / 2) / zoom + "px"));
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        /** @type {?} */
        const elementNodeListOf = this._elementRef.nativeElement.querySelectorAll('.gd-wrapper');
        /** @type {?} */
        const element = elementNodeListOf.item(0);
        if (element) {
            $(element).trigger('focus');
        }
    }
    /**
     * @param {?} pageNumber
     * @param {?} onRight
     * @param {?=} animate
     * @return {?}
     */
    scrollTo(pageNumber, onRight, animate = true) {
        /** @type {?} */
        const pagesWidth = this._elementRef.nativeElement.offsetWidth * (pageNumber - 1);
        /** @type {?} */
        const startingX = onRight ? pagesWidth - this._elementRef.nativeElement.offsetWidth : pagesWidth + this._elementRef.nativeElement.offsetWidth;
        this.doScrolling(pagesWidth, startingX, 500, new Subject(), this._elementRef, animate);
        this.selectedPage.emit(pageNumber);
    }
    /**
     * @private
     * @param {?} elementX
     * @param {?} startingX
     * @param {?} duration
     * @param {?} subject
     * @param {?} _elementRef
     * @param {?=} animate
     * @return {?}
     */
    doScrolling(elementX, startingX, duration, subject, _elementRef, animate = true) {
        /** @type {?} */
        const diff = elementX - startingX;
        /** @type {?} */
        let start;
        if (!animate) {
            _elementRef.nativeElement.scrollTo({ left: startingX + diff });
        }
        else {
            window.requestAnimationFrame((/**
             * @param {?} timestamp
             * @return {?}
             */
            function step(timestamp) {
                start = (!start) ? timestamp : start;
                /** @type {?} */
                const time = timestamp - start;
                /** @type {?} */
                const percent = Math.min(time / duration, 1);
                _elementRef.nativeElement.scrollTo({ left: startingX + diff * percent });
                if (time < duration) {
                    window.requestAnimationFrame(step);
                    subject.next({});
                }
                else {
                    subject.complete();
                }
            }));
        }
    }
    /**
     * @param {?} value
     * @param {?} pageNumber
     * @return {?}
     */
    getDimensionWithUnit(value, pageNumber) {
        return value + (this.mode ? FileUtil.find(this.file.guid, false).unit : 'px');
    }
    /**
     * @param {?} page
     * @return {?}
     */
    isVertical(page) {
        return page.height > page.width;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPanLeft($event) {
        if ($event.isFinal) {
            this._navigateService.nextPage();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPanRight($event) {
        if ($event.isFinal) {
            this._navigateService.prevPage();
        }
    }
}
RunPresentationComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-run-presentation',
                template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" (panleft)=\"onPanLeft($event)\" (panright)=\"onPanRight($event)\">\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\n    <div [ngClass]=\"isVertical(page) ? 'page presentation vertical' : 'page presentation'\" *ngFor=\"let page of file?.pages\"\n      [style.height]=\"getDimensionWithUnit(page.height, page.number)\" [style.width]=\"getDimensionWithUnit(page.width, page.number)\" gdRotation\n      [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\" [width]=\"page.width\"\n        [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                styles: [":host{-webkit-box-flex:1;flex:1;-webkit-transition:.4s;transition:.4s;background-color:#e7e7e7;height:100%;overflow-y:hidden;touch-action:auto!important;overflow-x:hidden}:host .document{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important;touch-action:auto!important}.page{display:inline-block;margin:20px;-webkit-transition:.3s;transition:.3s}.page ::ng-deep gd-page{box-shadow:0 3px 6px rgba(0,0,0,.16);background-color:#fff}.page.presentation{-webkit-transition:unset;transition:unset;margin:0;width:100%!important;display:-webkit-box!important;display:flex!important;-webkit-box-pack:center!important;justify-content:center!important}.page.presentation.vertical{margin:0;width:100%!important;display:-webkit-box!important;display:flex!important;-webkit-box-pack:center!important;justify-content:center!important}.page.presentation.vertical ::ng-deep [class*=\"-rotate\"]{position:unset!important;margin-right:-240px}.page.presentation.vertical ::ng-deep gd-page{height:960pt;width:540pt}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;flex-wrap:wrap;align-content:flex-start}@media (max-width:1037px){.page{min-width:unset!important;min-height:unset!important;margin:5px 0}.page ::ng-deep .gd-wrapper{pointer-events:none}}"]
            }] }
];
/** @nocollapse */
RunPresentationComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ZoomService },
    { type: WindowService },
    { type: NavigateService }
];
RunPresentationComponent.propDecorators = {
    mode: [{ type: Input }],
    preloadPageCount: [{ type: Input }],
    file: [{ type: Input }],
    currentPage: [{ type: Input }],
    selectedPage: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    RunPresentationComponent.prototype.mode;
    /** @type {?} */
    RunPresentationComponent.prototype.preloadPageCount;
    /** @type {?} */
    RunPresentationComponent.prototype.file;
    /** @type {?} */
    RunPresentationComponent.prototype.currentPage;
    /** @type {?} */
    RunPresentationComponent.prototype.selectedPage;
    /** @type {?} */
    RunPresentationComponent.prototype.wait;
    /** @type {?} */
    RunPresentationComponent.prototype.zoom;
    /** @type {?} */
    RunPresentationComponent.prototype.container;
    /** @type {?} */
    RunPresentationComponent.prototype.doc;
    /** @type {?} */
    RunPresentationComponent.prototype.isDesktop;
    /** @type {?} */
    RunPresentationComponent.prototype.lastCurrentPage;
    /** @type {?} */
    RunPresentationComponent.prototype.offsetWidth;
    /**
     * @type {?}
     * @protected
     */
    RunPresentationComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    RunPresentationComponent.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    RunPresentationComponent.prototype._windowService;
    /**
     * @type {?}
     * @private
     */
    RunPresentationComponent.prototype._navigateService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} viewerConfigService
 * @return {?}
 */
function initializeApp(viewerConfigService) {
    /** @type {?} */
    const result = (/**
     * @return {?}
     */
    () => viewerConfigService.load());
    return result;
}
/**
 * @return {?}
 */
function endPoint() {
    /** @type {?} */
    const config = new ConfigService();
    config.apiEndpoint = "http://localhost:8080";
    return config;
}
// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
/**
 * @param {?} service
 * @return {?}
 */
function setupLoadingInterceptor(service) {
    return new LoadingMaskInterceptorService(service);
}
class ViewerModule {
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    static forRoot(apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: ViewerModule
        };
    }
}
ViewerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ViewerAppComponent,
                    ThumbnailsComponent,
                    RunPresentationComponent,
                    ExcelDocumentComponent,
                    ExcelPageComponent
                ],
                imports: [
                    BrowserModule,
                    CommonComponentsModule,
                    HttpClientModule,
                    FontAwesomeModule
                ],
                exports: [
                    ViewerAppComponent,
                    ThumbnailsComponent,
                    RunPresentationComponent,
                    ExcelDocumentComponent,
                    ExcelPageComponent,
                    CommonComponentsModule
                ],
                providers: [
                    ViewerService,
                    {
                        provide: ConfigService,
                        useFactory: endPoint
                    },
                    ViewerConfigService,
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: ErrorInterceptorService,
                        multi: true
                    },
                    {
                        provide: APP_INITIALIZER,
                        useFactory: initializeApp,
                        deps: [ViewerConfigService], multi: true
                    },
                    LoadingMaskService,
                    {
                        provide: HTTP_INTERCEPTORS,
                        useFactory: setupLoadingInterceptor,
                        multi: true,
                        deps: [LoadingMaskService]
                    }
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ViewerAppComponent, ViewerConfigService, ViewerModule, ViewerService, endPoint, initializeApp, setupLoadingInterceptor, ThumbnailsComponent as ɵa, RunPresentationComponent as ɵb, ExcelDocumentComponent as ɵc, ExcelPageComponent as ɵd, ExcelPageService as ɵe };
//# sourceMappingURL=groupdocs.examples.angular-viewer.js.map
