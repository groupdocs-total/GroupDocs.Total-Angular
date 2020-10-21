/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener } from '@angular/core';
import { ViewerService } from "./viewer.service";
import { ModalService, UploadFilesService, NavigateService, PagePreloadService, ZoomService, RenderPrintService, FileUtil, PasswordService, CommonModals, LoadingMaskService } from "@groupdocs.examples.angular/common-components";
import { ViewerConfigService } from "./viewer-config.service";
import { WindowService } from "@groupdocs.examples.angular/common-components";
import { Constants } from './viewer.constants';
import { IntervalTimer } from './interval-timer';
export class ViewerAppComponent {
    /**
     * @param {?} _viewerService
     * @param {?} _modalService
     * @param {?} configService
     * @param {?} uploadFilesService
     * @param {?} _navigateService
     * @param {?} _zoomService
     * @param {?} pagePreloadService
     * @param {?} _renderPrintService
     * @param {?} passwordService
     * @param {?} _windowService
     * @param {?} _loadingMaskService
     */
    constructor(_viewerService, _modalService, configService, uploadFilesService, _navigateService, _zoomService, pagePreloadService, _renderPrintService, passwordService, _windowService, _loadingMaskService) {
        this._viewerService = _viewerService;
        this._modalService = _modalService;
        this._navigateService = _navigateService;
        this._zoomService = _zoomService;
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
     * @param {?} page
     * @return {?}
     */
    navigateToPage(page) {
        if (this.formatDisabled)
            return;
        this._navigateService.navigateTo(page);
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
     * @private
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
     * @private
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
        return this._zoomService.zoomOptions(width, height);
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
        this._zoomService.changeZoom(this._zoom);
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
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._zoomService.changeZoom(window.innerWidth / window.innerHeight < 1.7 ? this.getFitToWidth() : this.getFitToHeight());
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
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick()\">\n  <div class=\"top-panel\" *ngIf=\"!runPresentation\">\n    <gd-logo [logo]=\"'viewer'\" icon=\"eye\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-select class=\"mobile-hide\" [disabled]=\"formatDisabled\" [options]=\"options\" (selected)=\"selectZoom($event)\"\n                 [showSelected]=\"{ name: zoom+'%', value : zoom}\" *ngIf=\"zoomConfig\" ></gd-select>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"\n                 *ngIf=\"zoomConfig\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\"\n                 (click)=\"zoomOut()\" *ngIf=\"zoomConfig\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-left'\" [tooltip]=\"'First Page'\"\n                 (click)=\"toFirstPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" [tooltip]=\"'Previous Page'\"\n                 (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <div class=\"current-page-number\" [ngClass]=\"{'active': !formatDisabled}\" *ngIf=\"formatIcon !== 'file-excel'\">{{currentPage}}/{{countPages}}</div>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" [tooltip]=\"'Next Page'\"\n                 (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-right'\" [tooltip]=\"'Last Page'\"\n                 (click)=\"toLastPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Rotate CCW'\" (click)=\"rotate(-90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Rotate CW'\" (click)=\"rotate(90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                 (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                 *ngIf=\"printConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search'\" [tooltip]=\"'Search'\" (click)=\"openSearch()\"\n                 *ngIf=\"searchConfig && !ifPresentation()\" ></gd-button>\n      <gd-search (hidePanel)=\"showSearch = !$event\" *ngIf=\"showSearch\" ></gd-search>\n\n      <gd-button class=\"thumbnails-button\" [disabled]=\"formatDisabled\" [icon]=\"'th-large'\" [tooltip]=\"'Thumbnails'\"\n                 (click)=\"openThumbnails()\" *ngIf=\"thumbnailsConfig && isDesktop && formatIcon !== 'file-excel' && (!ifPresentation() ||\n                 ifPresentation() && runPresentation)\"></gd-button>\n      <gd-button class=\"thumbnails-button mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'play'\" [tooltip]=\"'Run presentation'\"\n                 (click)=\"startPresentation()\" *ngIf=\"ifPresentation() && !runPresentation\"></gd-button>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"top-panel\" *ngIf=\"runPresentation\">\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <div class=\"slides-title\">Viewer</div>\n      <div class=\"slides-filename\">{{getFileName()}}</div>\n      <div class=\"slides-buttons\">\n        <gd-select class=\"mobile-hide\" [disabled]=\"formatDisabled\" [options]=\"timerOptions\" (selected)=\"toggleTimer($event)\"\n        [icon]=\"'clock'\" *ngIf=\"zoomConfig\" ></gd-select>\n        <gd-button class=\"mobile-hide\" *ngIf=\"presentationRunning()\" [disabled]=\"formatDisabled\" [icon]=\"'pause'\" [tooltip]=\"'Pause presenting'\"\n        (click)=\"pausePresenting()\"></gd-button>\n        <gd-button class=\"mobile-hide\" *ngIf=\"presentationPaused()\" [disabled]=\"formatDisabled\" [icon]=\"'step-forward'\" [tooltip]=\"'Resume presenting'\"\n        (click)=\"resumePresenting()\"></gd-button>\n        <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'stop'\" [tooltip]=\"'Stop presenting'\"\n        (click)=\"closeFullScreen(true)\"></gd-button>\n      </div>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"doc-panel\" *ngIf=\"file\" #docPanel>\n    <gd-thumbnails *ngIf=\"showThumbnails && !ifPresentation() && isDesktop\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\" (selectedPage)=\"selectCurrentPage($event)\"></gd-thumbnails>\n    <gd-thumbnails *ngIf=\"showThumbnails && ifPresentation() && !runPresentation && isDesktop\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\" (selectedPage)=\"selectCurrentPage($event)\" gdScrollable></gd-thumbnails>\n\n    <gd-document class=\"gd-document\" *ngIf=\"(file &&\n                                            (ifExcel() && !htmlModeConfig) ||\n                                            (ifPresentation() && isDesktop && !runPresentation) ||\n                                            (!ifExcel() && !ifPresentation()))\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" [selectedPage]=\"selectedPageNumber\" gdRenderPrint [htmlMode]=\"htmlModeConfig\" gdMouseWheel (mouseWheelUp)=\"onMouseWheelUp()\" (mouseWheelDown)=\"onMouseWheelDown()\"></gd-document>\n    <gd-excel-document class=\"gd-document\" *ngIf=\"file && ifExcel() && htmlModeConfig\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-excel-document>\n    <gd-run-presentation class=\"gd-document\" *ngIf=\"(file && ifPresentation() && runPresentation) ||\n                                                    (file && ifPresentation() && !isDesktop)\" [file]=\"file\" [currentPage]=\"currentPage\" [mode]=\"htmlModeConfig\"\n                                                    (selectedPage)=\"selectCurrentPage($event)\"\n                 [preloadPageCount]=\"0\"></gd-run-presentation>\n    <div class=\"slides-nav\" *ngIf=\"runPresentation\">\n      <div class=\"timer\" *ngIf=\"showCountDown()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon><span [ngClass]=\"secondsLeft >= 10 ? 'seconds-remaining two-digits' : 'seconds-remaining'\">{{secondsLeft}}</span>\n      </div>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\"\n      (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\"\n      (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n    </div>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n    Or drop file here\n  </gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.current-page-number{margin-left:7px;font-size:14px;color:#959da5;width:37px;height:37px;line-height:37px;text-align:center}.current-page-number.active{color:#fff}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.thumbnails-button{position:absolute;right:3px}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}::ng-deep .tools .button,::ng-deep .tools .nav-caret,::ng-deep .tools .selected-value{color:#fff!important}::ng-deep .tools .button.inactive,::ng-deep .tools .nav-caret.inactive,::ng-deep .tools .selected-value.inactive{color:#959da5!important}::ng-deep .tools .button{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .dropdown-menu .option{color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}::ng-deep .tools .select{width:37px;height:37px;margin-left:7px;line-height:37px;text-align:center}::ng-deep .tools .slides-title{color:#fff;padding-left:12px;font-size:18px}::ng-deep .tools .slides-filename{-webkit-box-flex:1;flex-grow:1;text-align:center;color:#fff}::ng-deep .tools .slides-buttons{display:-webkit-box;display:flex}::ng-deep .tools .slides-buttons ::ng-deep .select{color:#fff;cursor:pointer}.slides-nav{position:absolute;right:30px;bottom:30px;display:-webkit-box;display:flex}.slides-nav ::ng-deep .button{font-size:37px;background-color:#edf0f2;border-radius:3px}.slides-nav ::ng-deep .timer{font-size:42px;line-height:6px;color:#959da5;position:relative}.slides-nav ::ng-deep .timer .seconds-remaining{position:absolute;margin-left:5px;font-size:16px;top:18px;left:12px}.slides-nav ::ng-deep .timer .seconds-remaining.two-digits{left:6px!important}@media (max-width:1037px){.current-page-number,.mobile-hide{display:none}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .tools .gd-nav-search-btn .icon-button{height:37px;width:37px}::ng-deep .tools .gd-nav-search-btn .button{font-size:14px}}"]
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
    ViewerAppComponent.prototype._zoomService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3ZpZXdlci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBVSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFHTCxZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixrQkFBa0IsRUFFbEIsV0FBVyxFQUNYLGtCQUFrQixFQUNsQixRQUFRLEVBQ1IsZUFBZSxFQUNFLFlBQVksRUFBRSxrQkFBa0IsRUFDbEQsTUFBTSwrQ0FBK0MsQ0FBQztBQUV2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFFNUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU9qRCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7Ozs7Ozs7OztJQW1EN0IsWUFBb0IsY0FBNkIsRUFDN0IsYUFBMkIsRUFDbkMsYUFBa0MsRUFDbEMsa0JBQXNDLEVBQzlCLGdCQUFpQyxFQUNqQyxZQUF5QixFQUNqQyxrQkFBc0MsRUFDOUIsbUJBQXVDLEVBQy9DLGVBQWdDLEVBQ3hCLGNBQTZCLEVBQzdCLG1CQUF1QztRQVZ2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUczQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRXpCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFFdkMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQTVEM0QsVUFBSyxHQUFHLFFBQVEsQ0FBQztRQUNqQixVQUFLLEdBQWdCLEVBQUUsQ0FBQztRQUd4QixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsbUJBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDNUIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFFdkIscUJBQWdCLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQztRQUM1QyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSW5CLFVBQUssR0FBRyxHQUFHLENBQUM7UUFTWixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQVN2QiwwQ0FBcUMsR0FBRyxtQkFBQSxRQUFRLENBQUMsZUFBZSxFQUkvRCxDQUFDO1FBRUYsaUNBQTRCLEdBQUcsbUJBQUEsUUFBUSxFQUl0QyxDQUFDO1FBcUJBLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDbkMsQ0FBQyxFQUFDLENBQUM7UUFFSCxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDckQsSUFBSSxPQUFPLEVBQUU7O29CQUNQLENBQVM7Z0JBQ2IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVM7Ozs7b0JBQUMsQ0FBQyxHQUFvQixFQUFFLEVBQUU7d0JBQzVHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQy9FLENBQUMsRUFBQyxDQUFDO2lCQUNKO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILGtCQUFrQixDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRTtZQUN6RCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFO2dCQUM1QyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTt3QkFDakUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ3pCO2lCQUNGO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILGVBQWUsQ0FBQyxVQUFVLENBQUMsU0FBUzs7OztRQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7WUFDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUUsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM1QyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBdERELFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFO1lBQy9CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7Ozs7SUFvREQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEtBQUssRUFBRSxFQUFDO1lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzVEOztjQUVLLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU07UUFDMUMsSUFBSSxXQUFXLEVBQUU7WUFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDcEM7UUFFRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxtQkFBbUI7YUFDdkIsZ0JBQWdCO2FBQ2hCLFNBQVM7Ozs7UUFBQyxDQUFDLE9BQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxFQUFDLENBQUM7UUFFM0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDOUQsQ0FBQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMzRCxDQUFDOzs7O0lBRUQsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDN0QsQ0FBQzs7OztJQUVELElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNqRSxDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzdELENBQUM7Ozs7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQy9ELENBQUM7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDN0QsQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzdELENBQUM7Ozs7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQy9ELENBQUM7Ozs7SUFFRCxJQUFJLHFCQUFxQjtRQUN2QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEUsQ0FBQzs7OztJQUVELElBQUksc0JBQXNCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3ZFLENBQUM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDcEcsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDL0YsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsR0FBRzs7Y0FDSixPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsbUJBQW1CLEdBQUUsV0FBVztZQUN6RCxrREFBa0QsR0FBRSxjQUFjO1lBQ2xFLDZCQUE2QixHQUFFLHFCQUFxQjtZQUNwRCxpQ0FBaUMsR0FBRSxnQkFBZ0I7WUFDbkQsMEJBQTBCLEdBQUUsZUFBZTtZQUMzQyxvQkFBb0IsRUFBQyxHQUFHLENBQUM7UUFDM0IsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxFQUFVO1FBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEVBQVU7UUFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBYztRQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLEVBQUMsQ0FBQztJQUNwRyxDQUFDOzs7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQWMsRUFBRSxRQUFnQixFQUFFLE9BQWU7UUFDMUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFxQixFQUFFLEVBQUU7WUFDL0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDakMsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMvRSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUMzQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQ3BCOztzQkFDSyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0I7b0JBQ3BDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEtBQUssQ0FBQzsyQkFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzVDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDOztzQkFDbkYsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLGdCQUFnQixHQUFHLENBQUMsRUFBRTtvQkFDeEIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUU7d0JBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7cUJBQzNDO29CQUNELElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUVwRixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFO3dCQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUzs7Ozt3QkFBQyxDQUFDLElBQXFCLEVBQUUsRUFBRTs0QkFDdkYsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFDcEMsQ0FBQyxFQUFDLENBQUE7cUJBQ0g7aUJBQ0Y7Z0JBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2dCQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztnQkFFN0IsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2lCQUM1QjtxQkFDSTtvQkFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztpQkFDN0I7Z0JBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7YUFDOUI7UUFDSCxDQUFDLEVBQ0YsQ0FBQztRQUNGLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkM7UUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQWEsRUFBRSxHQUFXO1FBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxJQUFlLEVBQUUsRUFBRTtnQkFDOUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDOUIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO29CQUN0RixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDOzZCQUMxQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQzs2QkFDdEIsT0FBTyxDQUFDLGlCQUFpQixFQUFFLG9DQUFvQyxDQUFDOzZCQUNoRSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsbUNBQW1DLENBQUM7NkJBQzlELE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxvQ0FBb0MsQ0FBQyxDQUFDO3FCQUNyRTtvQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQzlDO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQWM7UUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsZ0JBQXFCLEVBQUUsRUFBRTtZQUMvRixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssRUFBRSxFQUFFO2dCQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2FBQ3JCO2lCQUNJO2dCQUNILElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDcEI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsY0FBYztZQUNyQixPQUFPO1FBQ1QsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztTQUN2QjtRQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxJQUFZO1FBQ3pCLElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxjQUFjO1lBQ3JCLE9BQU87UUFDVCxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTztRQUNULElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE1BQU07UUFDaEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRU8sTUFBTSxDQUFDLEVBQVU7UUFDdkIsb0JBQW9CO1FBQ3BCLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFTyxhQUFhOzs7Y0FFYixTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDOztjQUNsSCxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDOztjQUNySCxXQUFXLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVOztjQUV2RCxzQkFBc0IsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlO1FBRS9GLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM3TyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDO29CQUNwRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsV0FBVzt3QkFDM0csQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxXQUFXLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO2FBQ0k7WUFDSCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDOzs7OztJQUVPLGNBQWM7O2NBQ2QsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7Y0FDbEgsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7Y0FDckgsWUFBWSxHQUFHLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHOztjQUM3RixZQUFZLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFlBQVk7UUFFM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFDL0MsT0FBTyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDLENBQUM7U0FDakk7UUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUN6QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsY0FBYyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsV0FBVztnQkFDakssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7U0FDcEI7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLGNBQWMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDL0k7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVzs7Y0FDSCxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTs7Y0FDNUIsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDcEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBQztZQUNoRCxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDO1lBQzNDLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUM7WUFDN0MsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBQztZQUM3QyxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUVELElBQUksSUFBSSxDQUFDLElBQUk7UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxNQUFXO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxHQUFXO1FBQ2hCLElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTzs7Y0FDSCxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVc7O2NBQzlDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRWpELElBQUksSUFBSSxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLENBQUMsSUFBZSxFQUFFLEVBQUU7O3NCQUNwRixXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQztxQkFDakQsT0FBTyxDQUFDLFNBQVMsRUFBQyxFQUFFLENBQUM7cUJBQ3JCLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxvQ0FBb0MsQ0FBQztxQkFDaEUsT0FBTyxDQUFDLGdCQUFnQixFQUFFLG1DQUFtQyxDQUFDO3FCQUM5RCxPQUFPLENBQUMsaUJBQWlCLEVBQUUsb0NBQW9DLENBQUM7Z0JBQ25FLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUV2QyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxFQUFFOzswQkFDdkMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEdBQUcsR0FBRztvQkFDbkMsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO3dCQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO3FCQUNqQzt5QkFBTSxJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsRUFBRTt3QkFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDbEM7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7cUJBQ3BDO2lCQUNGO1lBQ0gsQ0FBQyxFQUFDLENBQUE7U0FDSDtJQUNILENBQUM7Ozs7Ozs7SUFFTyxXQUFXLENBQUMsSUFBZSxFQUFFLEtBQWE7UUFDaEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxjQUFjO1lBQ3JCLE9BQU87UUFDVCxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7O0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLElBQXFCLEVBQUUsRUFBRTtnQkFDbEYsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkQsQ0FBQyxFQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLElBQUksQ0FBQyxjQUFjO1lBQ3JCLE9BQU87UUFFVCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixLQUFLLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN4RCxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxDQUFDLElBQXFCLEVBQUUsRUFBRTtvQkFDdkYsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQzdCLENBQUMsRUFBQyxDQUFBO2FBQ0g7aUJBQ0k7Z0JBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7YUFDNUI7U0FDRjtJQUNILENBQUM7Ozs7O0lBRU8sU0FBUztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbEMsT0FBTztTQUNSO1FBQ0QsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLElBQUksQ0FBQyxjQUFjO1lBQ3JCLE9BQU87UUFDVCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVPLFdBQVc7UUFDakIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM1RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO2dCQUNwRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7b0JBQ3ZDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsVUFBVTtRQUUxQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDbkYsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO2dCQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDOUM7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCxjQUFjO1FBRVosSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksSUFBSSxDQUFDLGtCQUFrQixLQUFLLENBQUMsRUFBRTtZQUMxRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztTQUN2RDtJQUNILENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFFZCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQy9FLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLEVBQUU7Z0JBQzlGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDeEUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7YUFDdkQ7aUJBQ0k7Z0JBQ0gsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7YUFDdkQ7U0FDRjtJQUNILENBQUM7Ozs7OztJQUVPLGdCQUFnQixDQUFDLFdBQW1COztjQUNwQyxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsV0FBVyxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV2QyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDN0I7aUJBQ0k7Z0JBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUN6QztTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsTUFBTTtRQUNoQixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakMsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsRUFBRTtZQUMzQixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzNCO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdkM7YUFDRztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQTtJQUN2RCxDQUFDOzs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBZSxFQUFFLFFBQWlCLEtBQUs7UUFDcEQsYUFBYSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RDLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1lBQzNCLE9BQU8sRUFBRSxDQUFDOztrQkFDSixRQUFRLEdBQUcsV0FBVzs7O1lBQUMsR0FBRyxFQUFFO2dCQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztnQkFDM0IsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO29CQUNqQixhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3pCO1lBQ0wsQ0FBQyxHQUFFLElBQUksQ0FBQztZQUVSLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUM7U0FDbkM7SUFDSCxDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsWUFBb0I7UUFDeEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGFBQWE7OztRQUFDLEdBQUcsRUFBRTtZQUMxQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDbkM7YUFDRjtpQkFFRDtnQkFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzNCO1FBQ0gsQ0FBQyxHQUFFLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVPLFlBQVk7UUFDbEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRU8sYUFBYTtRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Y0FDdEIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUM7UUFDdEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckYsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyRixDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzdDLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDMUgsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7OztJQUVELGNBQWM7O2NBQ04scUNBQXFDLEdBQUcsbUJBQUEsUUFBUSxDQUFDLGVBQWUsRUFJckU7UUFFRCxJQUFJLHFDQUFxQyxDQUFDLGlCQUFpQixFQUFFO1lBQzNELHFDQUFxQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDM0Q7YUFBTSxJQUFJLHFDQUFxQyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsYUFBYTtZQUNwRixxQ0FBcUMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQzlEO2FBQU0sSUFBSSxxQ0FBcUMsQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLDhCQUE4QjtZQUN4RyxxQ0FBcUMsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1NBQ2pFO2FBQU0sSUFBSSxxQ0FBcUMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLGFBQWE7WUFDbkYscUNBQXFDLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM3RDtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLFdBQW9CLEtBQUs7UUFDdkMsSUFBSSxRQUFRLEVBQUU7O2tCQUNOLDRCQUE0QixHQUFHLG1CQUFBLFFBQVEsRUFJNUM7WUFDRCxJQUFJLDRCQUE0QixDQUFDLGNBQWMsRUFBRTtnQkFDL0MsNEJBQTRCLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDL0M7aUJBQU0sSUFBSSw0QkFBNEIsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLGFBQWE7Z0JBQzFFLDRCQUE0QixDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDcEQ7aUJBQU0sSUFBSSw0QkFBNEIsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLDhCQUE4QjtnQkFDNUYsNEJBQTRCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzthQUNyRDtpQkFBTSxJQUFJLDRCQUE0QixDQUFDLGdCQUFnQixFQUFFLEVBQUUsYUFBYTtnQkFDdkUsNEJBQTRCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUNqRDtTQUNGO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7WUF6c0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsd3hRQUEwQzs7YUFFM0M7Ozs7WUExQk8sYUFBYTtZQUluQixZQUFZO1lBWU4sbUJBQW1CO1lBWHpCLGtCQUFrQjtZQUNsQixlQUFlO1lBR2YsV0FBVztZQUZYLGtCQUFrQjtZQUdsQixrQkFBa0I7WUFFbEIsZUFBZTtZQUtULGFBQWE7WUFKWSxrQkFBa0I7Ozt5QkEwRGhELFlBQVksU0FBQywyQkFBMkIsRUFBRSxFQUFFOzs7O0lBM0M3QyxtQ0FBaUI7O0lBQ2pCLG1DQUF3Qjs7SUFDeEIsa0NBQXNCOztJQUN0QiwwQ0FBMkI7O0lBQzNCLHdDQUFlOztJQUNmLDRDQUE0Qjs7SUFDNUIsNENBQXVCOztJQUN2Qix5Q0FBNkI7O0lBQzdCLDhDQUE0Qzs7SUFDNUMsd0NBQW1COztJQUNuQix1Q0FBbUI7O0lBQ25CLHVDQUFtQjs7SUFFbkIsbUNBQVk7O0lBQ1osd0NBQW1COztJQUNuQix5Q0FBb0I7O0lBQ3BCLHFDQUFROztJQUNSLDBDQUFhOztJQUNiLDBDQUFxQjs7SUFDckIsMkNBQTZCOztJQUM3QiwrQ0FBMEI7O0lBQzFCLHlDQUFvQjs7SUFDcEIsNENBQXVCOztJQUN2Qix3Q0FBbUI7O0lBRW5CLHVDQUFrQjs7SUFDbEIsK0NBQWdDOztJQUNoQyxnREFBMkI7O0lBQzNCLDZDQUF5Qjs7SUFDekIsMENBQXNCOztJQUV0QixtRUFJRTs7SUFFRiwwREFJRTs7Ozs7SUFTVSw0Q0FBcUM7Ozs7O0lBQ3JDLDJDQUFtQzs7Ozs7SUFHbkMsOENBQXlDOzs7OztJQUN6QywwQ0FBaUM7Ozs7O0lBRWpDLGlEQUErQzs7Ozs7SUFFL0MsNENBQXFDOzs7OztJQUNyQyxpREFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgT25Jbml0LCBIb3N0TGlzdGVuZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtWaWV3ZXJTZXJ2aWNlfSBmcm9tIFwiLi92aWV3ZXIuc2VydmljZVwiO1xuaW1wb3J0IHtcbiAgRmlsZURlc2NyaXB0aW9uLFxuICBGaWxlTW9kZWwsXG4gIE1vZGFsU2VydmljZSxcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICBOYXZpZ2F0ZVNlcnZpY2UsXG4gIFBhZ2VQcmVsb2FkU2VydmljZSxcbiAgUGFnZU1vZGVsLFxuICBab29tU2VydmljZSxcbiAgUmVuZGVyUHJpbnRTZXJ2aWNlLFxuICBGaWxlVXRpbCxcbiAgUGFzc3dvcmRTZXJ2aWNlLFxuICBGaWxlQ3JlZGVudGlhbHMsIENvbW1vbk1vZGFscywgTG9hZGluZ01hc2tTZXJ2aWNlXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7Vmlld2VyQ29uZmlnfSBmcm9tIFwiLi92aWV3ZXItY29uZmlnXCI7XG5pbXBvcnQge1ZpZXdlckNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL3ZpZXdlci1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4vdmlld2VyLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBJbnRlcnZhbFRpbWVyIH0gZnJvbSAnLi9pbnRlcnZhbC10aW1lcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXZpZXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3ZXItYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmlld2VyLWFwcC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlckFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHRpdGxlID0gJ3ZpZXdlcic7XG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xuICBmaWxlOiBGaWxlRGVzY3JpcHRpb247XG4gIHZpZXdlckNvbmZpZzogVmlld2VyQ29uZmlnO1xuICBjb3VudFBhZ2VzID0gMDtcbiAgZm9ybWF0RGlzYWJsZWQgPSAhdGhpcy5maWxlO1xuICBzaG93VGh1bWJuYWlscyA9IGZhbHNlO1xuICBjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzO1xuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xuICBzaG93U2VhcmNoID0gZmFsc2U7XG4gIGlzRGVza3RvcDogYm9vbGVhbjtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuXG4gIF96b29tID0gMTAwO1xuICBfcGFnZVdpZHRoOiBudW1iZXI7XG4gIF9wYWdlSGVpZ2h0OiBudW1iZXI7XG4gIG9wdGlvbnM7XG4gIHRpbWVyT3B0aW9ucztcbiAgaW50ZXJ2YWxUaW1lOiBudW1iZXI7XG4gIGludGVydmFsVGltZXI6IEludGVydmFsVGltZXI7XG4gIGNvdW50RG93bkludGVydmFsOiBudW1iZXI7XG4gIHNlY29uZHNMZWZ0OiBudW1iZXI7XG4gIGZpbGVXYXNEcm9wcGVkID0gZmFsc2U7XG4gIGZvcm1hdEljb246IHN0cmluZztcblxuICBmaWxlUGFyYW06IHN0cmluZztcbiAgcXVlcnlTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgc2VsZWN0ZWRQYWdlTnVtYmVyOiBudW1iZXI7XG4gIHJ1blByZXNlbnRhdGlvbjogYm9vbGVhbjtcbiAgaXNGdWxsU2NyZWVuOiBib29sZWFuO1xuXG4gIGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQgJiB7XG4gICAgbW96UmVxdWVzdEZ1bGxTY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgICB3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICAgIG1zUmVxdWVzdEZ1bGxzY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgfTtcbiAgXG4gIGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMgPSBkb2N1bWVudCBhcyBEb2N1bWVudCAmIHtcbiAgICBtb3pDYW5jZWxGdWxsU2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gICAgd2Via2l0RXhpdEZ1bGxzY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgICBtc0V4aXRGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gIH07XG5cbiAgQEhvc3RMaXN0ZW5lcihcImRvY3VtZW50OmZ1bGxzY3JlZW5jaGFuZ2VcIiwgW10pXG4gIGZ1bGxTY3JlZW4oKSB7XG4gICAgaWYgKCFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xuICAgICAgdGhpcy5jbG9zZUZ1bGxTY3JlZW4oKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3ZXJTZXJ2aWNlOiBWaWV3ZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgY29uZmlnU2VydmljZTogVmlld2VyQ29uZmlnU2VydmljZSxcbiAgICAgICAgICAgICAgdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXG4gICAgICAgICAgICAgIHBhZ2VQcmVsb2FkU2VydmljZTogUGFnZVByZWxvYWRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJQcmludFNlcnZpY2U6IFJlbmRlclByaW50U2VydmljZSxcbiAgICAgICAgICAgICAgcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2xvYWRpbmdNYXNrU2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlKSB7XG5cbiAgICBjb25maWdTZXJ2aWNlLnVwZGF0ZWRDb25maWcuc3Vic2NyaWJlKCh2aWV3ZXJDb25maWcpID0+IHtcbiAgICAgIHRoaXMudmlld2VyQ29uZmlnID0gdmlld2VyQ29uZmlnO1xuICAgIH0pO1xuXG4gICAgdXBsb2FkRmlsZXNTZXJ2aWNlLnVwbG9hZHNDaGFuZ2Uuc3Vic2NyaWJlKCh1cGxvYWRzKSA9PiB7XG4gICAgICBpZiAodXBsb2Fkcykge1xuICAgICAgICBsZXQgaTogbnVtYmVyO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXBsb2Fkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UudXBsb2FkKHVwbG9hZHMuaXRlbShpKSwgJycsIHRoaXMudmlld2VyQ29uZmlnLnJld3JpdGUpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPyB0aGlzLnNlbGVjdEZpbGUob2JqLmd1aWQsICcnLCAnJykgOiB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhZ2VQcmVsb2FkU2VydmljZS5jaGVja1ByZWxvYWQuc3Vic2NyaWJlKChwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLnZpZXdlckNvbmZpZy5wcmVsb2FkUGFnZUNvdW50ICE9PSAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBwYWdlOyBpIDwgcGFnZSArIDI7IGkrKykge1xuICAgICAgICAgIGlmIChpID4gMCAmJiBpIDw9IHRoaXMuY291bnRQYWdlcyAmJiAhdGhpcy5maWxlLnBhZ2VzW2kgLSAxXS5kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnByZWxvYWRQYWdlcyhpLCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhc3N3b3JkU2VydmljZS5wYXNzQ2hhbmdlLnN1YnNjcmliZSgocGFzczogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5jcmVkZW50aWFscy5ndWlkLCBwYXNzLCBDb21tb25Nb2RhbHMuUGFzc3dvcmRSZXF1aXJlZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgICAgaWYgKCF0aGlzLnJ1blByZXNlbnRhdGlvbikge1xuICAgICAgICB0aGlzLnJlZnJlc2hab29tKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy52aWV3ZXJDb25maWcuZGVmYXVsdERvY3VtZW50ICE9PSBcIlwiKXtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLnZpZXdlckNvbmZpZy5kZWZhdWx0RG9jdW1lbnQsIFwiXCIsIFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICBpZiAocXVlcnlTdHJpbmcpIHtcbiAgICAgIHRoaXMuVHJ5T3BlbkZpbGVCeVVybChxdWVyeVN0cmluZyk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgPSB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgIT09IDAgPyB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgOiAxO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2xvYWRpbmdNYXNrU2VydmljZVxuICAgIC5vbkxvYWRpbmdDaGFuZ2VkXG4gICAgLnN1YnNjcmliZSgobG9hZGluZzogYm9vbGVhbikgPT4gdGhpcy5pc0xvYWRpbmcgPSBsb2FkaW5nKTtcblxuICAgIHRoaXMucmVmcmVzaFpvb20oKTtcbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHpvb21Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcuem9vbSA6IHRydWU7XG4gIH1cblxuICBnZXQgcGFnZVNlbGVjdG9yQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnBhZ2VTZWxlY3RvciA6IHRydWU7XG4gIH1cblxuICBnZXQgc2VhcmNoQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnNlYXJjaCA6IHRydWU7XG4gIH1cblxuICBnZXQgdGh1bWJuYWlsc0NvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy50aHVtYm5haWxzIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCByb3RhdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcucm90YXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBkb3dubG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5kb3dubG9hZCA6IHRydWU7XG4gIH1cblxuICBnZXQgdXBsb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnVwbG9hZCA6IHRydWU7XG4gIH1cblxuICBnZXQgcHJpbnRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcucHJpbnQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5icm93c2UgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGh0bWxNb2RlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLmh0bWxNb2RlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBzYXZlUm90YXRlU3RhdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcuc2F2ZVJvdGF0ZVN0YXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBlbmFibGVSaWdodENsaWNrQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLmVuYWJsZVJpZ2h0Q2xpY2sgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZTtcbiAgfVxuXG4gIGlmUHJlc2VudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUgPyBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkuZm9ybWF0ID09PSBcIk1pY3Jvc29mdCBQb3dlclBvaW50XCIgOiBmYWxzZTtcbiAgfVxuXG4gIGlmRXhjZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZSA/IEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5mb3JtYXQgPT09IFwiTWljcm9zb2Z0IEV4Y2VsXCIgOiBmYWxzZTtcbiAgfVxuXG4gIGlmSW1hZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZSA/IHRoaXMuZm9ybWF0SWNvbiA9PT0gXCJmaWxlLWltYWdlXCIgOiBmYWxzZTtcbiAgfVxuXG4gIHZhbGlkVVJMKHN0cikge1xuICAgIGNvbnN0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKCdeKGh0dHBzPzpcXFxcL1xcXFwvKT8nKyAvLyBwcm90b2NvbFxuICAgICAgJygoKFthLXpcXFxcZF0oW2EtelxcXFxkLV0qW2EtelxcXFxkXSkqKVxcXFwuKStbYS16XXsyLH18JysgLy8gZG9tYWluIG5hbWVcbiAgICAgICcoKFxcXFxkezEsM31cXFxcLil7M31cXFxcZHsxLDN9KSknKyAvLyBPUiBpcCAodjQpIGFkZHJlc3NcbiAgICAgICcoXFxcXDpcXFxcZCspPyhcXFxcL1stYS16XFxcXGQlXy5+K10qKSonKyAvLyBwb3J0IGFuZCBwYXRoXG4gICAgICAnKFxcXFw/WzsmYS16XFxcXGQlXy5+Kz0tXSopPycrIC8vIHF1ZXJ5IHN0cmluZ1xuICAgICAgJyhcXFxcI1stYS16XFxcXGRfXSopPyQnLCdpJyk7IC8vIGZyYWdtZW50IGxvY2F0b3JcbiAgICByZXR1cm4gISFwYXR0ZXJuLnRlc3Qoc3RyKTtcbiAgfVxuXG4gIGdldEZpbGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUuZ3VpZC5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gIH1cblxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKGlkKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShpZCk7XG4gIH1cblxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLmxvYWRGaWxlcygkZXZlbnQpLnN1YnNjcmliZSgoZmlsZXM6IEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xuICB9XG5cbiAgc2VsZWN0RmlsZSgkZXZlbnQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgbW9kYWxJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IHtndWlkOiAkZXZlbnQsIHBhc3N3b3JkOiBwYXNzd29yZH07XG4gICAgdGhpcy5maWxlID0gbnVsbDtcbiAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLmxvYWRGaWxlKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZmlsZTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgICAgIHRoaXMuZm9ybWF0RGlzYWJsZWQgPSAhdGhpcy5maWxlO1xuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgIHRoaXMuZm9ybWF0SWNvbiA9IHRoaXMuZmlsZSA/IEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5pY29uIDogbnVsbDtcbiAgICAgICAgICBpZiAoZmlsZS5wYWdlcyAmJiBmaWxlLnBhZ2VzWzBdKSB7XG4gICAgICAgICAgICB0aGlzLl9wYWdlSGVpZ2h0ID0gZmlsZS5wYWdlc1swXS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9wYWdlV2lkdGggPSBmaWxlLnBhZ2VzWzBdLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy56b29tT3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy50aW1lck9wdGlvbnMgPSB0aGlzLmdldFRpbWVyT3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBwcmVsb2FkUGFnZUNvdW50ID0gIXRoaXMuaWZQcmVzZW50YXRpb24oKSA/IHRoaXMudmlld2VyQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAodGhpcy52aWV3ZXJDb25maWcucHJlbG9hZFBhZ2VDb3VudCAhPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMudmlld2VyQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgPCAzID8gM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMudmlld2VyQ29uZmlnLnByZWxvYWRQYWdlQ291bnQpO1xuICAgICAgICAgIGNvbnN0IGNvdW50UGFnZXMgPSBmaWxlLnBhZ2VzID8gZmlsZS5wYWdlcy5sZW5ndGggOiAwO1xuICAgICAgICAgIGlmIChwcmVsb2FkUGFnZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaWZQcmVzZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICB0aGlzLmZpbGUudGh1bWJuYWlscyA9IGZpbGUucGFnZXMuc2xpY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKDEsIHByZWxvYWRQYWdlQ291bnQgPiBjb3VudFBhZ2VzID8gY291bnRQYWdlcyA6IHByZWxvYWRQYWdlQ291bnQpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuaWZQcmVzZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLmxvYWRUaHVtYm5haWxzKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZGF0YTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlLnRodW1ibmFpbHMgPSBkYXRhLnBhZ2VzO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY291bnRQYWdlcyA9IGNvdW50UGFnZXM7XG4gICAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXI7XG4gICAgICAgICAgdGhpcy5jb3VudFBhZ2VzID0gY291bnRQYWdlcztcblxuICAgICAgICAgIGlmICh0aGlzLmlmUHJlc2VudGF0aW9uKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RodW1ibmFpbHMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RodW1ibmFpbHMgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5ydW5QcmVzZW50YXRpb24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gICAgaWYgKG1vZGFsSWQpIHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShtb2RhbElkKTtcbiAgICB9XG4gICAgdGhpcy5jbGVhckRhdGEoKTtcbiAgfVxuXG4gIHByZWxvYWRQYWdlcyhzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgdGhpcy5fdmlld2VyU2VydmljZS5sb2FkUGFnZSh0aGlzLmNyZWRlbnRpYWxzLCBpKS5zdWJzY3JpYmUoKHBhZ2U6IFBhZ2VNb2RlbCkgPT4ge1xuICAgICAgICB0aGlzLmZpbGUucGFnZXNbaSAtIDFdID0gcGFnZTtcbiAgICAgICAgaWYgKHRoaXMuaWZQcmVzZW50YXRpb24oKSAmJiB0aGlzLmZpbGUudGh1bWJuYWlscyAmJiAhdGhpcy5maWxlLnRodW1ibmFpbHNbaSAtIDFdLmRhdGEpIHtcbiAgICAgICAgICBpZiAocGFnZS5kYXRhKSB7XG4gICAgICAgICAgICBwYWdlLmRhdGEgPSBwYWdlLmRhdGEucmVwbGFjZSgvPlxccys8L2csICc+PCcpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHVGRUZGL2csIFwiXCIpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9ocmVmPVwiXFwvdmlld2VyL2csICdocmVmPVwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3ZpZXdlcicpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9zcmM9XCJcXC92aWV3ZXIvZywgJ3NyYz1cImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC92aWV3ZXInKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvZGF0YT1cIlxcL3ZpZXdlci9nLCAnZGF0YT1cImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC92aWV3ZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5maWxlLnRodW1ibmFpbHNbaSAtIDFdLmRhdGEgPSBwYWdlLmRhdGE7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVwbG9hZCgkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UudXBsb2FkKG51bGwsICRldmVudCwgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKHVwbG9hZGVkRG9jdW1lbnQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZmlsZVBhcmFtICE9PSAnJykge1xuICAgICAgICB0aGlzLnNlbGVjdEZpbGUodXBsb2FkZWREb2N1bWVudC5ndWlkLCAnJywgJycpO1xuICAgICAgICB0aGlzLmZpbGVQYXJhbSA9ICcnO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5leHRQYWdlKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGlmICh0aGlzLmludGVydmFsVGltZXIgJiYgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlICsgMSA+IHRoaXMuY291bnRQYWdlcykge1xuICAgICAgdGhpcy5pbnRlcnZhbFRpbWVyLnN0b3AoKTtcbiAgICAgIHRoaXMuaW50ZXJ2YWxUaW1lID0gMDtcbiAgICB9XG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLm5leHRQYWdlKCk7XG4gIH1cblxuICBwcmV2UGFnZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UucHJldlBhZ2UoKTtcbiAgfVxuXG4gIHRvTGFzdFBhZ2UoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLnRvTGFzdFBhZ2UoKTtcbiAgfVxuXG4gIHRvRmlyc3RQYWdlKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS50b0ZpcnN0UGFnZSgpO1xuICB9XG5cbiAgbmF2aWdhdGVUb1BhZ2UocGFnZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLm5hdmlnYXRlVG8ocGFnZSk7XG4gIH1cblxuICB6b29tSW4oKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRoaXMuX3pvb20gPCA0OTApIHtcbiAgICAgIHRoaXMuem9vbSA9IHRoaXMuX3pvb20gKyAxMDtcbiAgICB9XG4gIH1cblxuICB6b29tT3V0KCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGlmICh0aGlzLl96b29tID4gMzApIHtcbiAgICAgIHRoaXMuem9vbSA9IHRoaXMuX3pvb20gLSAxMDtcbiAgICB9XG4gIH1cblxuICBmaWxlRHJvcHBlZCgkZXZlbnQpe1xuICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPSAkZXZlbnQ7XG4gIH1cblxuICBwcml2YXRlIHB0VG9QeChwdDogbnVtYmVyKSB7XG4gICAgLy9wdCAqIDk2IC8gNzIgPSBweC5cbiAgICByZXR1cm4gcHQgKiA5NiAvIDcyO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaXRUb1dpZHRoKCkge1xuICAgIC8vIEltYWdlcyBhbmQgRXhjZWwtcmVsYXRlZCBmaWxlcyByZWNlaXZpbmcgZGltZW5zaW9ucyBpbiBweCBmcm9tIHNlcnZlclxuICAgIGNvbnN0IHBhZ2VXaWR0aCA9IHRoaXMuZm9ybWF0SWNvbiAmJiAodGhpcy5pZkV4Y2VsKCkgfHwgdGhpcy5pZkltYWdlKCkpID8gdGhpcy5fcGFnZVdpZHRoIDogdGhpcy5wdFRvUHgodGhpcy5fcGFnZVdpZHRoKTtcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5mb3JtYXRJY29uICYmICh0aGlzLmlmRXhjZWwoKSB8fCB0aGlzLmlmSW1hZ2UoKSkgPyB0aGlzLl9wYWdlSGVpZ2h0IDogdGhpcy5wdFRvUHgodGhpcy5fcGFnZUhlaWdodCk7XG4gICAgY29uc3Qgb2Zmc2V0V2lkdGggPSBwYWdlV2lkdGggPyBwYWdlV2lkdGggOiB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIGNvbnN0IHByZXNlbnRhdGlvblRodW1ibmFpbHMgPSB0aGlzLmlzRGVza3RvcCAmJiB0aGlzLmlmUHJlc2VudGF0aW9uKCkgJiYgIXRoaXMucnVuUHJlc2VudGF0aW9uO1xuXG4gICAgaWYgKCF0aGlzLnJ1blByZXNlbnRhdGlvbikge1xuICAgICAgcmV0dXJuIChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoICYmIE1hdGgucm91bmQob2Zmc2V0V2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgPCAyKSA/IDIwMCAtIE1hdGgucm91bmQob2Zmc2V0V2lkdGggKiAxMDAgLyAocHJlc2VudGF0aW9uVGh1bWJuYWlscyA/IHdpbmRvdy5pbm5lcldpZHRoIC0gQ29uc3RhbnRzLnRodW1ibmFpbHNXaWR0aCAtIENvbnN0YW50cy5zY3JvbGxXaWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoKSlcbiAgICAgICAgOiAoIXRoaXMuaXNEZXNrdG9wID8gTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAqIDEwMCAvIG9mZnNldFdpZHRoKVxuICAgICAgICAgIDogTWF0aC5yb3VuZCgoKHByZXNlbnRhdGlvblRodW1ibmFpbHMgPyB3aW5kb3cuaW5uZXJXaWR0aCAtIENvbnN0YW50cy50aHVtYm5haWxzV2lkdGggLSBDb25zdGFudHMuc2Nyb2xsV2lkdGhcbiAgICAgICAgICAgIDogd2luZG93LmlubmVySGVpZ2h0KSAvIG9mZnNldFdpZHRoKSAqIDEwMCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lcldpZHRoICogMTAwIC8gb2Zmc2V0V2lkdGgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rml0VG9IZWlnaHQoKSB7XG4gICAgY29uc3QgcGFnZVdpZHRoID0gdGhpcy5mb3JtYXRJY29uICYmICh0aGlzLmlmRXhjZWwoKSB8fCB0aGlzLmlmSW1hZ2UoKSkgPyB0aGlzLl9wYWdlV2lkdGggOiB0aGlzLnB0VG9QeCh0aGlzLl9wYWdlV2lkdGgpO1xuICAgIGNvbnN0IHBhZ2VIZWlnaHQgPSB0aGlzLmZvcm1hdEljb24gJiYgKHRoaXMuaWZFeGNlbCgpIHx8IHRoaXMuaWZJbWFnZSgpKSA/IHRoaXMuX3BhZ2VIZWlnaHQgOiB0aGlzLnB0VG9QeCh0aGlzLl9wYWdlSGVpZ2h0KTtcbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCkgPyB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMDAgOiB3aW5kb3cuaW5uZXJIZWlnaHQgKyAxMDA7XG4gICAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gcGFnZUhlaWdodCA/IHBhZ2VIZWlnaHQgOiB3aW5kb3dIZWlnaHQ7XG4gICAgXG4gICAgaWYgKCF0aGlzLmlmUHJlc2VudGF0aW9uKCkgJiYgISh0aGlzLmlmSW1hZ2UoKSkpIHtcbiAgICAgIHJldHVybiAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCkgPyBNYXRoLnJvdW5kKHdpbmRvd0hlaWdodCAqIDEwMCAvIG9mZnNldEhlaWdodCkgOiBNYXRoLnJvdW5kKG9mZnNldEhlaWdodCAqIDEwMCAvIHdpbmRvd0hlaWdodCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlmUHJlc2VudGF0aW9uKCkpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKCh3aW5kb3cuaW5uZXJIZWlnaHQgLSBDb25zdGFudHMudG9wYmFyV2lkdGgpICogMTAwIC8gKCF0aGlzLnJ1blByZXNlbnRhdGlvbiA/IG9mZnNldEhlaWdodCArIENvbnN0YW50cy5kb2N1bWVudE1hcmdpbiAqIDIgKyBDb25zdGFudHMuc2Nyb2xsV2lkdGhcbiAgICAgICAgOiBvZmZzZXRIZWlnaHQpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaWZJbWFnZSgpKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigod2luZG93LmlubmVySGVpZ2h0IC0gQ29uc3RhbnRzLnRvcGJhcldpZHRoKSAqIDEwMCAvIChvZmZzZXRIZWlnaHQgKyBDb25zdGFudHMuZG9jdW1lbnRNYXJnaW4gKiAyICsgQ29uc3RhbnRzLnNjcm9sbFdpZHRoKSk7XG4gICAgfVxuICB9XG5cbiAgem9vbU9wdGlvbnMoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldEZpdFRvV2lkdGgoKTtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEZpdFRvSGVpZ2h0KCk7XG4gICAgcmV0dXJuIHRoaXMuX3pvb21TZXJ2aWNlLnpvb21PcHRpb25zKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgZ2V0VGltZXJPcHRpb25zKCkge1xuICAgIHJldHVybiBbe3ZhbHVlOiAwLCBuYW1lOiAnTm9uZScsIHNlcGFyYXRvcjogZmFsc2V9LFxuICAgICAge3ZhbHVlOiA1LCBuYW1lOiAnNSBzZWMnLCBzZXBhcmF0b3I6IGZhbHNlfSxcbiAgICAgIHt2YWx1ZTogMTAsIG5hbWU6ICcxMCBzZWMnLCBzZXBhcmF0b3I6IGZhbHNlfSxcbiAgICAgIHt2YWx1ZTogMTUsIG5hbWU6ICcxNSBzZWMnLCBzZXBhcmF0b3I6IGZhbHNlfSxcbiAgICAgIHt2YWx1ZTogMzAsIG5hbWU6ICczMCBzZWMnLCBzZXBhcmF0b3I6IGZhbHNlfV07XG4gIH1cblxuICBzZXQgem9vbSh6b29tKSB7XG4gICAgdGhpcy5fem9vbSA9IHpvb207XG4gICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLl96b29tKTtcbiAgfVxuXG4gIGdldCB6b29tKCkge1xuICAgIHJldHVybiB0aGlzLl96b29tO1xuICB9XG5cbiAgc2VsZWN0Wm9vbSgkZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuem9vbSA9ICRldmVudC52YWx1ZTtcbiAgfVxuXG4gIHJvdGF0ZShkZWc6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2U7XG4gICAgY29uc3QgcGFnZU1vZGVsID0gdGhpcy5maWxlLnBhZ2VzW3BhZ2VOdW1iZXIgLSAxXTtcblxuICAgIGlmICh0aGlzLnNhdmVSb3RhdGVTdGF0ZUNvbmZpZyAmJiB0aGlzLmZpbGUpIHtcbiAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2Uucm90YXRlKHRoaXMuY3JlZGVudGlhbHMsIGRlZywgcGFnZU51bWJlcikuc3Vic2NyaWJlKChwYWdlOiBQYWdlTW9kZWwpID0+IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZERhdGEgPSBwYWdlLmRhdGEucmVwbGFjZSgvPlxccys8L2csJz48JylcbiAgICAgICAgICAucmVwbGFjZSgvXFx1RkVGRi9nLFwiXCIpXG4gICAgICAgICAgLnJlcGxhY2UoL2hyZWY9XCJcXC92aWV3ZXIvZywgJ2hyZWY9XCJodHRwOi8vbG9jYWxob3N0OjgwODAvdmlld2VyJylcbiAgICAgICAgICAucmVwbGFjZSgvc3JjPVwiXFwvdmlld2VyL2csICdzcmM9XCJodHRwOi8vbG9jYWxob3N0OjgwODAvdmlld2VyJylcbiAgICAgICAgICAucmVwbGFjZSgvZGF0YT1cIlxcL3ZpZXdlci9nLCAnZGF0YT1cImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC92aWV3ZXInKTtcbiAgICAgICAgcGFnZS5kYXRhID0gdXBkYXRlZERhdGE7XG4gICAgICAgIHRoaXMuZmlsZS5wYWdlc1twYWdlTnVtYmVyIC0gMV0gPSBwYWdlO1xuXG4gICAgICAgIGlmICh0aGlzLmZpbGUgJiYgdGhpcy5maWxlLnBhZ2VzICYmIHBhZ2VNb2RlbCkge1xuICAgICAgICAgIGNvbnN0IGFuZ2xlID0gcGFnZU1vZGVsLmFuZ2xlICsgZGVnO1xuICAgICAgICAgIGlmIChhbmdsZSA+IDM2MCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBbmdsZShwYWdlTW9kZWwsIDkwKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGFuZ2xlIDwgLTM2MCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBbmdsZShwYWdlTW9kZWwsIC05MCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQW5nbGUocGFnZU1vZGVsLCBhbmdsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlQW5nbGUocGFnZTogUGFnZU1vZGVsLCBhbmdsZTogbnVtYmVyKSB7XG4gICAgcGFnZS5hbmdsZSA9IGFuZ2xlO1xuICB9XG5cbiAgZG93bmxvYWRGaWxlKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odGhpcy5fdmlld2VyU2VydmljZS5nZXREb3dubG9hZFVybCh0aGlzLmNyZWRlbnRpYWxzKSk7XG4gIH1cblxuICBwcmludEZpbGUoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRoaXMudmlld2VyQ29uZmlnLmh0bWxNb2RlKSB7XG4gICAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLmxvYWRQcmludCh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGRhdGE6IEZpbGVEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICB0aGlzLl9yZW5kZXJQcmludFNlcnZpY2UuY2hhbmdlUGFnZXMoZGF0YS5wYWdlcyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyUHJpbnRTZXJ2aWNlLmNoYW5nZVBhZ2VzKHRoaXMuZmlsZS5wYWdlcyk7XG4gICAgfVxuICB9XG5cbiAgb3BlblRodW1ibmFpbHMoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG5cbiAgICBpZiAodGhpcy5zaG93VGh1bWJuYWlscykge1xuICAgICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnZpZXdlckNvbmZpZy5wcmVsb2FkUGFnZUNvdW50ID09PSAwKSB7XG4gICAgICB0aGlzLnJ1blByZXNlbnRhdGlvbiA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmZpbGUudGh1bWJuYWlscy5maWx0ZXIodCA9PiAhdC5kYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UubG9hZFRodW1ibmFpbHModGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKChkYXRhOiBGaWxlRGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGUudGh1bWJuYWlscyA9IGRhdGEucGFnZXM7XG4gICAgICAgICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckRhdGEoKSB7XG4gICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICBwYWdlLmRhdGEgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG9uUmlnaHRDbGljaygpIHtcbiAgICByZXR1cm4gdGhpcy5lbmFibGVSaWdodENsaWNrQ29uZmlnO1xuICB9XG5cbiAgb3BlblNlYXJjaCgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLnNob3dTZWFyY2ggPSAhdGhpcy5zaG93U2VhcmNoO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoWm9vbSgpIHtcbiAgICBpZiAodGhpcy5maWxlKSB7XG4gICAgICB0aGlzLmZvcm1hdEljb24gPSBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkuaWNvbjtcbiAgICAgIHRoaXMuem9vbSA9IHRoaXMuX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCkgJiYgISh0aGlzLmlmSW1hZ2UoKSkgPyAxMDBcbiAgICAgICAgOiAodGhpcy5pZkltYWdlKCkgPyB0aGlzLmdldEZpdFRvSGVpZ2h0KClcbiAgICAgICAgICA6IHRoaXMuZ2V0Rml0VG9XaWR0aCgpKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RDdXJyZW50UGFnZShwYWdlTnVtYmVyKVxuICB7XG4gICAgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9IHBhZ2VOdW1iZXI7XG4gICAgaWYgKHRoaXMucnVuUHJlc2VudGF0aW9uICYmIHRoaXMuaW50ZXJ2YWxUaW1lID4gMCAmJiB0aGlzLmludGVydmFsVGltZXIuc3RhdGUgIT09IDMpIHtcbiAgICAgIHRoaXMucmVzZXRJbnRlcnZhbCgpO1xuICAgICAgaWYgKHRoaXMuc2xpZGVJblJhbmdlKCkpIHtcbiAgICAgICAgdGhpcy5zdGFydENvdW50RG93bih0aGlzLmludGVydmFsVGltZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZVdoZWVsVXAoKVxuICB7XG4gICAgaWYgKHRoaXMuaWZQcmVzZW50YXRpb24oKSAmJiB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciAhPT0gMSkge1xuICAgICAgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgPSB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciAtIDE7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZVdoZWVsRG93bigpXG4gIHtcbiAgICBpZiAodGhpcy5pZlByZXNlbnRhdGlvbigpICYmIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyICE9PSB0aGlzLmZpbGUucGFnZXMubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5maWxlLnBhZ2VzW3RoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyXSAmJiAhdGhpcy5maWxlLnBhZ2VzW3RoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyXS5kYXRhKSB7XG4gICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyLCB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciArIDEpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciA9IHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyICsgMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciA9IHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyICsgMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIFRyeU9wZW5GaWxlQnlVcmwocXVlcnlTdHJpbmc6IHN0cmluZykge1xuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xuICAgIHRoaXMuZmlsZVBhcmFtID0gdXJsUGFyYW1zLmdldCgnZmlsZScpO1xuXG4gICAgaWYgKHRoaXMuZmlsZVBhcmFtKSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICBpZiAodGhpcy52YWxpZFVSTCh0aGlzLmZpbGVQYXJhbSkpIHtcbiAgICAgICAgdGhpcy51cGxvYWQodGhpcy5maWxlUGFyYW0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLmZpbGVQYXJhbSwgJycsICcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0b2dnbGVUaW1lcigkZXZlbnQpe1xuICAgIHRoaXMuaW50ZXJ2YWxUaW1lID0gJGV2ZW50LnZhbHVlO1xuICAgIGlmICh0aGlzLmludGVydmFsVGltZSAhPT0gMCkge1xuICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxUaW1lciAmJiB0aGlzLmludGVydmFsVGltZXIuc3RhdGUgPT09IDEpIHtcbiAgICAgICAgdGhpcy5pbnRlcnZhbFRpbWVyLnN0b3AoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhcnRDb3VudERvd24odGhpcy5pbnRlcnZhbFRpbWUpO1xuICAgICAgdGhpcy5zdGFydEludGVydmFsKHRoaXMuaW50ZXJ2YWxUaW1lKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHRoaXMuaW50ZXJ2YWxUaW1lci5zdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0NvdW50RG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnZhbFRpbWUgPiAwICYmICh0aGlzLnNsaWRlSW5SYW5nZSgpKVxuICB9XG5cbiAgc3RhcnRDb3VudERvd24oc2Vjb25kczogbnVtYmVyLCByZXNldDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNvdW50RG93bkludGVydmFsKTtcbiAgICBpZiAoc2Vjb25kcyA+IDApIHtcbiAgICAgIHRoaXMuc2Vjb25kc0xlZnQgPSBzZWNvbmRzO1xuICAgICAgc2Vjb25kcy0tO1xuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZWNvbmRzTGVmdCA9IHNlY29uZHM7XG4gICAgICAgICAgc2Vjb25kcy0tO1xuICAgICAgICAgIGlmIChzZWNvbmRzID09PSAwKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICB9XG4gICAgICB9LCAxMDAwKTtcblxuICAgICAgdGhpcy5jb3VudERvd25JbnRlcnZhbCA9IGludGVydmFsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRJbnRlcnZhbChpbnRlcnZhbFRpbWU6IG51bWJlcikge1xuICAgIHRoaXMuaW50ZXJ2YWxUaW1lciA9IG5ldyBJbnRlcnZhbFRpbWVyKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnNsaWRlSW5SYW5nZSgpKSB7XG4gICAgICAgIHRoaXMubmV4dFBhZ2UoKTtcbiAgICAgICAgaWYgKHRoaXMuc2xpZGVJblJhbmdlKCkpIHtcbiAgICAgICAgICB0aGlzLnN0YXJ0Q291bnREb3duKGludGVydmFsVGltZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgdGhpcy5pbnRlcnZhbFRpbWVyLnN0b3AoKTtcbiAgICAgIH1cbiAgICB9LCBpbnRlcnZhbFRpbWUgKiAxMDAwKTtcbiAgfVxuXG4gIHByaXZhdGUgc2xpZGVJblJhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgKyAxIDw9IHRoaXMuY291bnRQYWdlcztcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRJbnRlcnZhbCgpIHtcbiAgICB0aGlzLmludGVydmFsVGltZXIuc3RvcCgpO1xuICAgIHRoaXMuc3RhcnRJbnRlcnZhbCh0aGlzLmludGVydmFsVGltZSk7XG4gIH1cblxuICBwYXVzZVByZXNlbnRpbmcoKSB7XG4gICAgdGhpcy5pbnRlcnZhbFRpbWVyLnBhdXNlKCk7XG4gICAgdGhpcy5zdGFydENvdW50RG93bigwLCB0cnVlKTtcbiAgfVxuXG4gIHJlc3VtZVByZXNlbnRpbmcoKSB7XG4gICAgdGhpcy5pbnRlcnZhbFRpbWVyLnJlc3VtZSgpO1xuICAgIGNvbnN0IHNlY29uZHNSZW1haW5pbmcgPSBNYXRoLnJvdW5kKHRoaXMuaW50ZXJ2YWxUaW1lci5yZW1haW5pbmcvMTAwMCk7XG4gICAgdGhpcy5zdGFydENvdW50RG93bihzZWNvbmRzUmVtYWluaW5nKTtcbiAgfVxuXG4gIHByZXNlbnRhdGlvblJ1bm5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJ2YWxUaW1lciAmJiB0aGlzLmludGVydmFsVGltZXIuc3RhdGUgPT09IDEgJiYgdGhpcy5zbGlkZUluUmFuZ2UoKTtcbiAgfVxuXG4gIHByZXNlbnRhdGlvblBhdXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnZhbFRpbWVyICYmIHRoaXMuaW50ZXJ2YWxUaW1lci5zdGF0ZSA9PT0gMiAmJiB0aGlzLnNsaWRlSW5SYW5nZSgpO1xuICB9XG5cbiAgc3RhcnRQcmVzZW50YXRpb24oKSB7XG4gICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IGZhbHNlO1xuICAgIHRoaXMub3BlbkZ1bGxTY3JlZW4oKTtcbiAgICB0aGlzLnJ1blByZXNlbnRhdGlvbiA9ICF0aGlzLnJ1blByZXNlbnRhdGlvbjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX3pvb21TZXJ2aWNlLmNoYW5nZVpvb20od2luZG93LmlubmVyV2lkdGgvd2luZG93LmlubmVySGVpZ2h0IDwgMS43ID8gdGhpcy5nZXRGaXRUb1dpZHRoKCkgOiB0aGlzLmdldEZpdFRvSGVpZ2h0KCkpO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBvcGVuRnVsbFNjcmVlbigpIHtcbiAgICBjb25zdCBkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50ICYge1xuICAgICAgbW96UmVxdWVzdEZ1bGxTY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgICAgIHdlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gICAgICBtc1JlcXVlc3RGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gICAgfTtcbiAgXG4gICAgaWYgKGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgIGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHsgLyogRmlyZWZveCAqL1xuICAgICAgZG9jRWxtV2l0aEJyb3dzZXJzRnVsbFNjcmVlbkZ1bmN0aW9ucy5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgIH0gZWxzZSBpZiAoZG9jRWxtV2l0aEJyb3dzZXJzRnVsbFNjcmVlbkZ1bmN0aW9ucy53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikgeyAvKiBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cbiAgICAgIGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMubXNSZXF1ZXN0RnVsbHNjcmVlbikgeyAvKiBJRS9FZGdlICovXG4gICAgICBkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICB9XG4gICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSB0cnVlO1xuICB9XG4gIFxuICBjbG9zZUZ1bGxTY3JlZW4oYnlCdXR0b246IGJvb2xlYW4gPSBmYWxzZSl7XG4gICAgaWYgKGJ5QnV0dG9uKSB7XG4gICAgICBjb25zdCBkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zID0gZG9jdW1lbnQgYXMgRG9jdW1lbnQgJiB7XG4gICAgICAgIG1vekNhbmNlbEZ1bGxTY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgICAgICAgd2Via2l0RXhpdEZ1bGxzY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgICAgICAgbXNFeGl0RnVsbHNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICAgICAgfTtcbiAgICAgIGlmIChkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zLmV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgIGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7IC8qIEZpcmVmb3ggKi9cbiAgICAgICAgZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy5tb3pDYW5jZWxGdWxsU2NyZWVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHsgLyogQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXG4gICAgICAgIGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy5tc0V4aXRGdWxsc2NyZWVuKSB7IC8qIElFL0VkZ2UgKi9cbiAgICAgICAgZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy5tc0V4aXRGdWxsc2NyZWVuKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxUaW1lcikge1xuICAgICAgdGhpcy5pbnRlcnZhbFRpbWVyLnN0b3AoKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzRnVsbFNjcmVlbiA9IGZhbHNlO1xuICAgIHRoaXMucnVuUHJlc2VudGF0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IHRydWU7XG4gICAgdGhpcy5pbnRlcnZhbFRpbWUgPSAwO1xuICAgIHRoaXMuc3RhcnRDb3VudERvd24oMCk7XG4gICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xuICB9XG59XG4iXX0=