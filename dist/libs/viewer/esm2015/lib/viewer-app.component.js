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
        if (this._navigateService.currentPage + 1 > this.countPages) {
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
        const pageWidth = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageWidth : this.ptToPx(this._pageWidth);
        /** @type {?} */
        const pageHeight = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageHeight : this.ptToPx(this._pageHeight);
        /** @type {?} */
        const offsetWidth = pageWidth ? pageWidth : window.innerWidth;
        /** @type {?} */
        const presentationThumbnails = this.isDesktop && this.ifPresentation() && !this.runPresentation;
        return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / (presentationThumbnails ? window.innerWidth - Constants.thumbnailsWidth - Constants.scrollWidth : window.innerWidth))
            : (!this.isDesktop ? Math.round(window.innerWidth * 100 / offsetWidth)
                : Math.round(((presentationThumbnails ? window.innerWidth - Constants.thumbnailsWidth - Constants.scrollWidth
                    : window.innerHeight) / offsetWidth) * 100));
    }
    /**
     * @private
     * @return {?}
     */
    getFitToHeight() {
        /** @type {?} */
        const pageWidth = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageWidth : this.ptToPx(this._pageWidth);
        /** @type {?} */
        const pageHeight = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageHeight : this.ptToPx(this._pageHeight);
        /** @type {?} */
        const windowHeight = (pageHeight > pageWidth) ? window.innerHeight - 100 : window.innerHeight + 100;
        /** @type {?} */
        const offsetHeight = pageHeight ? pageHeight : windowHeight;
        if (!this.ifPresentation()) {
            return (pageHeight > pageWidth) ? Math.round(windowHeight * 100 / offsetHeight) : Math.round(offsetHeight * 100 / windowHeight);
        }
        else
            return Math.round((window.innerHeight - Constants.topbarWidth) * 100 / (!this.runPresentation ? offsetHeight + Constants.documentMargin * 2 + Constants.scrollWidth
                : offsetHeight));
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
            this.zoom = this._windowService.isDesktop() ? 100 : this.getFitToWidth();
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
            this._zoomService.changeZoom(this.getFitToHeight());
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
    }
}
ViewerAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-viewer',
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick()\">\n  <div class=\"top-panel\" *ngIf=\"!runPresentation\">\n    <gd-logo [logo]=\"'viewer'\" icon=\"eye\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-select class=\"mobile-hide\" [disabled]=\"formatDisabled\" [options]=\"options\" (selected)=\"selectZoom($event)\"\n                 [showSelected]=\"{ name: zoom+'%', value : zoom}\" *ngIf=\"zoomConfig\" ></gd-select>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"\n                 *ngIf=\"zoomConfig\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\"\n                 (click)=\"zoomOut()\" *ngIf=\"zoomConfig\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-left'\" [tooltip]=\"'First Page'\"\n                 (click)=\"toFirstPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" [tooltip]=\"'Previous Page'\"\n                 (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <div class=\"current-page-number\" [ngClass]=\"{'active': !formatDisabled}\" *ngIf=\"formatIcon !== 'file-excel'\">{{currentPage}}/{{countPages}}</div>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" [tooltip]=\"'Next Page'\"\n                 (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-right'\" [tooltip]=\"'Last Page'\"\n                 (click)=\"toLastPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Rotate CCW'\" (click)=\"rotate(-90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Rotate CW'\" (click)=\"rotate(90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                 (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                 *ngIf=\"printConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search'\" [tooltip]=\"'Search'\" (click)=\"openSearch()\"\n                 *ngIf=\"searchConfig && !ifPresentation()\" ></gd-button>\n      <gd-search (hidePanel)=\"showSearch = !$event\" *ngIf=\"showSearch\" ></gd-search>\n\n      <gd-button class=\"thumbnails-button\" [disabled]=\"formatDisabled\" [icon]=\"'th-large'\" [tooltip]=\"'Thumbnails'\"\n                 (click)=\"openThumbnails()\" *ngIf=\"thumbnailsConfig && isDesktop && formatIcon !== 'file-excel' && ((formatIcon !== 'file-powerpoint') ||\n                 formatIcon === 'file-powerpoint' && runPresentation)\"></gd-button>\n      <gd-button class=\"thumbnails-button mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'play'\" [tooltip]=\"'Run presentation'\"\n                 (click)=\"startPresentation()\" *ngIf=\"formatIcon === 'file-powerpoint' && !runPresentation\"></gd-button>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"top-panel\" *ngIf=\"runPresentation\">\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <div class=\"slides-title\">Viewer</div>\n      <div class=\"slides-filename\">{{getFileName()}}</div>\n      <div class=\"slides-buttons\">\n        <gd-select class=\"mobile-hide\" [disabled]=\"formatDisabled\" [options]=\"timerOptions\" (selected)=\"toggleTimer($event)\"\n        [icon]=\"'clock'\" *ngIf=\"zoomConfig\" ></gd-select>\n        <gd-button class=\"mobile-hide\" *ngIf=\"presentationRunning()\" [disabled]=\"formatDisabled\" [icon]=\"'pause'\" [tooltip]=\"'Pause presenting'\"\n        (click)=\"pausePresenting()\"></gd-button>\n        <gd-button class=\"mobile-hide\" *ngIf=\"presentationPaused()\" [disabled]=\"formatDisabled\" [icon]=\"'step-forward'\" [tooltip]=\"'Resume presenting'\"\n        (click)=\"resumePresenting()\"></gd-button>\n        <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'stop'\" [tooltip]=\"'Stop presenting'\"\n        (click)=\"closeFullScreen(true)\"></gd-button>\n      </div>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"doc-panel\" *ngIf=\"file\" #docPanel>\n    <gd-thumbnails *ngIf=\"showThumbnails && !ifPresentation() && isDesktop\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\" (selectedPage)=\"selectCurrentPage($event)\"></gd-thumbnails>\n    <gd-thumbnails *ngIf=\"showThumbnails && ifPresentation() && !runPresentation && isDesktop\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\" (selectedPage)=\"selectCurrentPage($event)\" gdScrollable></gd-thumbnails>\n\n    <gd-document class=\"gd-document\" *ngIf=\"(file &&\n                                            (ifExcel() && !htmlModeConfig) ||\n                                            (ifPresentation() && isDesktop && !runPresentation) ||\n                                            (!ifExcel() && !ifPresentation()))\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" [selectedPage]=\"selectedPageNumber\" gdRenderPrint [htmlMode]=\"htmlModeConfig\" gdMouseWheel (mouseWheelUp)=\"onMouseWheelUp()\" (mouseWheelDown)=\"onMouseWheelDown()\"></gd-document>\n    <gd-excel-document class=\"gd-document\" *ngIf=\"file && formatIcon === 'file-excel' && htmlModeConfig\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-excel-document>\n    <gd-run-presentation class=\"gd-document\" *ngIf=\"(file && ifPresentation() && runPresentation) ||\n                                                    (file && ifPresentation() && !isDesktop)\" [file]=\"file\" [currentPage]=\"currentPage\" [mode]=\"htmlModeConfig\"\n                                                    (selectedPage)=\"selectCurrentPage($event)\"\n                 [preloadPageCount]=\"0\"></gd-run-presentation>\n    <div class=\"slides-nav\" *ngIf=\"runPresentation\">\n      <div class=\"timer\" *ngIf=\"showCountDown()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon><span [ngClass]=\"secondsLeft >= 10 ? 'seconds-remaining two-digits' : 'seconds-remaining'\">{{secondsLeft}}</span>\n      </div>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" [tooltip]=\"'Previous Page'\"\n      (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" [tooltip]=\"'Next Page'\"\n      (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n    </div>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n    Or drop file here\n  </gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.current-page-number{margin-left:7px;font-size:14px;color:#959da5;width:37px;height:37px;line-height:37px;text-align:center}.current-page-number.active{color:#fff}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.thumbnails-button{position:absolute;right:3px}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}::ng-deep .tools .button,::ng-deep .tools .nav-caret,::ng-deep .tools .selected-value{color:#fff!important}::ng-deep .tools .button.inactive,::ng-deep .tools .nav-caret.inactive,::ng-deep .tools .selected-value.inactive{color:#959da5!important}::ng-deep .tools .button{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .dropdown-menu .option{color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}::ng-deep .tools .select{width:37px;height:37px;margin-left:7px;line-height:37px;text-align:center}::ng-deep .tools .slides-title{color:#fff;padding-left:12px;font-size:18px}::ng-deep .tools .slides-filename{-webkit-box-flex:1;flex-grow:1;text-align:center;color:#fff}::ng-deep .tools .slides-buttons{display:-webkit-box;display:flex}::ng-deep .tools .slides-buttons ::ng-deep .select{color:#fff;cursor:pointer}.slides-nav{position:absolute;right:30px;bottom:30px;display:-webkit-box;display:flex}.slides-nav ::ng-deep .button{font-size:37px}.slides-nav ::ng-deep .timer{font-size:42px;line-height:6px;color:#959da5;position:relative}.slides-nav ::ng-deep .timer .seconds-remaining{position:absolute;margin-left:5px;font-size:16px;top:18px;left:12px}.slides-nav ::ng-deep .timer .seconds-remaining.two-digits{left:6px!important}@media (max-width:1037px){.current-page-number,.mobile-hide{display:none}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .tools .gd-nav-search-btn .icon-button{height:37px;width:37px}::ng-deep .tools .gd-nav-search-btn .button{font-size:14px}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3ZpZXdlci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBVSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFHTCxZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixrQkFBa0IsRUFFbEIsV0FBVyxFQUNYLGtCQUFrQixFQUNsQixRQUFRLEVBQ1IsZUFBZSxFQUNFLFlBQVksRUFBRSxrQkFBa0IsRUFDbEQsTUFBTSwrQ0FBK0MsQ0FBQztBQUV2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFFNUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU9qRCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7Ozs7Ozs7OztJQW1EN0IsWUFBb0IsY0FBNkIsRUFDN0IsYUFBMkIsRUFDbkMsYUFBa0MsRUFDbEMsa0JBQXNDLEVBQzlCLGdCQUFpQyxFQUNqQyxZQUF5QixFQUNqQyxrQkFBc0MsRUFDOUIsbUJBQXVDLEVBQy9DLGVBQWdDLEVBQ3hCLGNBQTZCLEVBQzdCLG1CQUF1QztRQVZ2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUczQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRXpCLHdCQUFtQixHQUFuQixtQkFB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WUF4ckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsbTVRQUEwQzs7YUFFM0M7Ozs7WUExQk8sYUFBYTtZQUluQixZQUFZO1lBWU4sbUJBQW1CO1lBWHpCLGtCQUFrQjtZQUNsQixlQUFlO1lBR2YsV0FBVztZQUZYLGtCQUFrQjtZQUdsQixrQkFBa0I7WUFFbEIsZUFBZTtZQUtULGFBQWE7WUFKWSxrQkFBa0I7Ozt5QkEwRGhELFlBQVksU0FBQywyQkFBMkIsRUFBRSxFQUFFOzs7O0lBM0M3QyxtQ0FBaUI7O0lBQ2pCLG1DQUF3Qjs7SUFDeEIsa0NBQXNCOztJQUN0QiwwQ0FBMkI7O0lBQzNCLHdDQUFlOztJQUNmLDRDQUE0Qjs7SUFDNUIsNENBQXVCOztJQUN2Qix5Q0FBNkI7O0lBQzdCLDhDQUE0Qzs7SUFDNUMsd0NBQW1COztJQUNuQix1Q0FBbUI7O0lBQ25CLHVDQUFtQjs7SUFFbkIsbUNBQVk7O0lBQ1osd0NBQW1COztJQUNuQix5Q0FBb0I7O0lBQ3BCLHFDQUFROztJQUNSLDBDQUFhOztJQUNiLDBDQUFxQjs7SUFDckIsMkNBQTZCOztJQUM3QiwrQ0FBMEI7O0lBQzFCLHlDQUFvQjs7SUFDcEIsNENBQXVCOztJQUN2Qix3Q0FBbUI7O0lBRW5CLHVDQUFrQjs7SUFDbEIsK0NBQWdDOztJQUNoQyxnREFBMkI7O0lBQzNCLDZDQUF5Qjs7SUFDekIsMENBQXNCOztJQUV0QixtRUFJRTs7SUFFRiwwREFJRTs7Ozs7SUFTVSw0Q0FBcUM7Ozs7O0lBQ3JDLDJDQUFtQzs7Ozs7SUFHbkMsOENBQXlDOzs7OztJQUN6QywwQ0FBaUM7Ozs7O0lBRWpDLGlEQUErQzs7Ozs7SUFFL0MsNENBQXFDOzs7OztJQUNyQyxpREFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgT25Jbml0LCBIb3N0TGlzdGVuZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtWaWV3ZXJTZXJ2aWNlfSBmcm9tIFwiLi92aWV3ZXIuc2VydmljZVwiO1xuaW1wb3J0IHtcbiAgRmlsZURlc2NyaXB0aW9uLFxuICBGaWxlTW9kZWwsXG4gIE1vZGFsU2VydmljZSxcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICBOYXZpZ2F0ZVNlcnZpY2UsXG4gIFBhZ2VQcmVsb2FkU2VydmljZSxcbiAgUGFnZU1vZGVsLFxuICBab29tU2VydmljZSxcbiAgUmVuZGVyUHJpbnRTZXJ2aWNlLFxuICBGaWxlVXRpbCxcbiAgUGFzc3dvcmRTZXJ2aWNlLFxuICBGaWxlQ3JlZGVudGlhbHMsIENvbW1vbk1vZGFscywgTG9hZGluZ01hc2tTZXJ2aWNlXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7Vmlld2VyQ29uZmlnfSBmcm9tIFwiLi92aWV3ZXItY29uZmlnXCI7XG5pbXBvcnQge1ZpZXdlckNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL3ZpZXdlci1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4vdmlld2VyLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBJbnRlcnZhbFRpbWVyIH0gZnJvbSAnLi9pbnRlcnZhbC10aW1lcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXZpZXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3ZXItYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmlld2VyLWFwcC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlckFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHRpdGxlID0gJ3ZpZXdlcic7XG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xuICBmaWxlOiBGaWxlRGVzY3JpcHRpb247XG4gIHZpZXdlckNvbmZpZzogVmlld2VyQ29uZmlnO1xuICBjb3VudFBhZ2VzID0gMDtcbiAgZm9ybWF0RGlzYWJsZWQgPSAhdGhpcy5maWxlO1xuICBzaG93VGh1bWJuYWlscyA9IGZhbHNlO1xuICBjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzO1xuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xuICBzaG93U2VhcmNoID0gZmFsc2U7XG4gIGlzRGVza3RvcDogYm9vbGVhbjtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuXG4gIF96b29tID0gMTAwO1xuICBfcGFnZVdpZHRoOiBudW1iZXI7XG4gIF9wYWdlSGVpZ2h0OiBudW1iZXI7XG4gIG9wdGlvbnM7XG4gIHRpbWVyT3B0aW9ucztcbiAgaW50ZXJ2YWxUaW1lOiBudW1iZXI7XG4gIGludGVydmFsVGltZXI6IEludGVydmFsVGltZXI7XG4gIGNvdW50RG93bkludGVydmFsOiBudW1iZXI7XG4gIHNlY29uZHNMZWZ0OiBudW1iZXI7XG4gIGZpbGVXYXNEcm9wcGVkID0gZmFsc2U7XG4gIGZvcm1hdEljb246IHN0cmluZztcblxuICBmaWxlUGFyYW06IHN0cmluZztcbiAgcXVlcnlTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgc2VsZWN0ZWRQYWdlTnVtYmVyOiBudW1iZXI7XG4gIHJ1blByZXNlbnRhdGlvbjogYm9vbGVhbjtcbiAgaXNGdWxsU2NyZWVuOiBib29sZWFuO1xuXG4gIGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQgJiB7XG4gICAgbW96UmVxdWVzdEZ1bGxTY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgICB3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICAgIG1zUmVxdWVzdEZ1bGxzY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgfTtcbiAgXG4gIGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMgPSBkb2N1bWVudCBhcyBEb2N1bWVudCAmIHtcbiAgICBtb3pDYW5jZWxGdWxsU2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gICAgd2Via2l0RXhpdEZ1bGxzY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgICBtc0V4aXRGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gIH07XG5cbiAgQEhvc3RMaXN0ZW5lcihcImRvY3VtZW50OmZ1bGxzY3JlZW5jaGFuZ2VcIiwgW10pXG4gIGZ1bGxTY3JlZW4oKSB7XG4gICAgaWYgKCFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xuICAgICAgdGhpcy5jbG9zZUZ1bGxTY3JlZW4oKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3ZXJTZXJ2aWNlOiBWaWV3ZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgY29uZmlnU2VydmljZTogVmlld2VyQ29uZmlnU2VydmljZSxcbiAgICAgICAgICAgICAgdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXG4gICAgICAgICAgICAgIHBhZ2VQcmVsb2FkU2VydmljZTogUGFnZVByZWxvYWRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJQcmludFNlcnZpY2U6IFJlbmRlclByaW50U2VydmljZSxcbiAgICAgICAgICAgICAgcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2xvYWRpbmdNYXNrU2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlKSB7XG5cbiAgICBjb25maWdTZXJ2aWNlLnVwZGF0ZWRDb25maWcuc3Vic2NyaWJlKCh2aWV3ZXJDb25maWcpID0+IHtcbiAgICAgIHRoaXMudmlld2VyQ29uZmlnID0gdmlld2VyQ29uZmlnO1xuICAgIH0pO1xuXG4gICAgdXBsb2FkRmlsZXNTZXJ2aWNlLnVwbG9hZHNDaGFuZ2Uuc3Vic2NyaWJlKCh1cGxvYWRzKSA9PiB7XG4gICAgICBpZiAodXBsb2Fkcykge1xuICAgICAgICBsZXQgaTogbnVtYmVyO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXBsb2Fkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UudXBsb2FkKHVwbG9hZHMuaXRlbShpKSwgJycsIHRoaXMudmlld2VyQ29uZmlnLnJld3JpdGUpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPyB0aGlzLnNlbGVjdEZpbGUob2JqLmd1aWQsICcnLCAnJykgOiB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhZ2VQcmVsb2FkU2VydmljZS5jaGVja1ByZWxvYWQuc3Vic2NyaWJlKChwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLnZpZXdlckNvbmZpZy5wcmVsb2FkUGFnZUNvdW50ICE9PSAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBwYWdlOyBpIDwgcGFnZSArIDI7IGkrKykge1xuICAgICAgICAgIGlmIChpID4gMCAmJiBpIDw9IHRoaXMuY291bnRQYWdlcyAmJiAhdGhpcy5maWxlLnBhZ2VzW2kgLSAxXS5kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnByZWxvYWRQYWdlcyhpLCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhc3N3b3JkU2VydmljZS5wYXNzQ2hhbmdlLnN1YnNjcmliZSgocGFzczogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5jcmVkZW50aWFscy5ndWlkLCBwYXNzLCBDb21tb25Nb2RhbHMuUGFzc3dvcmRSZXF1aXJlZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgICAgaWYgKCF0aGlzLnJ1blByZXNlbnRhdGlvbikge1xuICAgICAgICB0aGlzLnJlZnJlc2hab29tKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy52aWV3ZXJDb25maWcuZGVmYXVsdERvY3VtZW50ICE9PSBcIlwiKXtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLnZpZXdlckNvbmZpZy5kZWZhdWx0RG9jdW1lbnQsIFwiXCIsIFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICBpZiAocXVlcnlTdHJpbmcpIHtcbiAgICAgIHRoaXMuVHJ5T3BlbkZpbGVCeVVybChxdWVyeVN0cmluZyk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgPSB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgIT09IDAgPyB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgOiAxO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2xvYWRpbmdNYXNrU2VydmljZVxuICAgIC5vbkxvYWRpbmdDaGFuZ2VkXG4gICAgLnN1YnNjcmliZSgobG9hZGluZzogYm9vbGVhbikgPT4gdGhpcy5pc0xvYWRpbmcgPSBsb2FkaW5nKTtcblxuICAgIHRoaXMucmVmcmVzaFpvb20oKTtcbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHpvb21Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcuem9vbSA6IHRydWU7XG4gIH1cblxuICBnZXQgcGFnZVNlbGVjdG9yQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnBhZ2VTZWxlY3RvciA6IHRydWU7XG4gIH1cblxuICBnZXQgc2VhcmNoQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnNlYXJjaCA6IHRydWU7XG4gIH1cblxuICBnZXQgdGh1bWJuYWlsc0NvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy50aHVtYm5haWxzIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCByb3RhdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcucm90YXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBkb3dubG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5kb3dubG9hZCA6IHRydWU7XG4gIH1cblxuICBnZXQgdXBsb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnVwbG9hZCA6IHRydWU7XG4gIH1cblxuICBnZXQgcHJpbnRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcucHJpbnQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5icm93c2UgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGh0bWxNb2RlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLmh0bWxNb2RlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBzYXZlUm90YXRlU3RhdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcuc2F2ZVJvdGF0ZVN0YXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBlbmFibGVSaWdodENsaWNrQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLmVuYWJsZVJpZ2h0Q2xpY2sgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZTtcbiAgfVxuXG4gIGlmUHJlc2VudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUgPyBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkuZm9ybWF0ID09PSBcIk1pY3Jvc29mdCBQb3dlclBvaW50XCIgOiBmYWxzZTtcbiAgfVxuXG4gIGlmRXhjZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZSA/IEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5mb3JtYXQgPT09IFwiTWljcm9zb2Z0IEV4Y2VsXCIgOiBmYWxzZTtcbiAgfVxuXG4gIHZhbGlkVVJMKHN0cikge1xuICAgIGNvbnN0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKCdeKGh0dHBzPzpcXFxcL1xcXFwvKT8nKyAvLyBwcm90b2NvbFxuICAgICAgJygoKFthLXpcXFxcZF0oW2EtelxcXFxkLV0qW2EtelxcXFxkXSkqKVxcXFwuKStbYS16XXsyLH18JysgLy8gZG9tYWluIG5hbWVcbiAgICAgICcoKFxcXFxkezEsM31cXFxcLil7M31cXFxcZHsxLDN9KSknKyAvLyBPUiBpcCAodjQpIGFkZHJlc3NcbiAgICAgICcoXFxcXDpcXFxcZCspPyhcXFxcL1stYS16XFxcXGQlXy5+K10qKSonKyAvLyBwb3J0IGFuZCBwYXRoXG4gICAgICAnKFxcXFw/WzsmYS16XFxcXGQlXy5+Kz0tXSopPycrIC8vIHF1ZXJ5IHN0cmluZ1xuICAgICAgJyhcXFxcI1stYS16XFxcXGRfXSopPyQnLCdpJyk7IC8vIGZyYWdtZW50IGxvY2F0b3JcbiAgICByZXR1cm4gISFwYXR0ZXJuLnRlc3Qoc3RyKTtcbiAgfVxuXG4gIGdldEZpbGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUuZ3VpZC5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gIH1cblxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKGlkKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShpZCk7XG4gIH1cblxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLmxvYWRGaWxlcygkZXZlbnQpLnN1YnNjcmliZSgoZmlsZXM6IEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xuICB9XG5cbiAgc2VsZWN0RmlsZSgkZXZlbnQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgbW9kYWxJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IHtndWlkOiAkZXZlbnQsIHBhc3N3b3JkOiBwYXNzd29yZH07XG4gICAgdGhpcy5maWxlID0gbnVsbDtcbiAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLmxvYWRGaWxlKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZmlsZTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgICAgIHRoaXMuZm9ybWF0RGlzYWJsZWQgPSAhdGhpcy5maWxlO1xuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgIHRoaXMuZm9ybWF0SWNvbiA9IHRoaXMuZmlsZSA/IEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5pY29uIDogbnVsbDtcbiAgICAgICAgICBpZiAoZmlsZS5wYWdlcyAmJiBmaWxlLnBhZ2VzWzBdKSB7XG4gICAgICAgICAgICB0aGlzLl9wYWdlSGVpZ2h0ID0gZmlsZS5wYWdlc1swXS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9wYWdlV2lkdGggPSBmaWxlLnBhZ2VzWzBdLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy56b29tT3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy50aW1lck9wdGlvbnMgPSB0aGlzLmdldFRpbWVyT3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBwcmVsb2FkUGFnZUNvdW50ID0gIXRoaXMuaWZQcmVzZW50YXRpb24oKSA/IHRoaXMudmlld2VyQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAodGhpcy52aWV3ZXJDb25maWcucHJlbG9hZFBhZ2VDb3VudCAhPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMudmlld2VyQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgPCAzID8gM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMudmlld2VyQ29uZmlnLnByZWxvYWRQYWdlQ291bnQpO1xuICAgICAgICAgIGNvbnN0IGNvdW50UGFnZXMgPSBmaWxlLnBhZ2VzID8gZmlsZS5wYWdlcy5sZW5ndGggOiAwO1xuICAgICAgICAgIGlmIChwcmVsb2FkUGFnZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaWZQcmVzZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICB0aGlzLmZpbGUudGh1bWJuYWlscyA9IGZpbGUucGFnZXMuc2xpY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKDEsIHByZWxvYWRQYWdlQ291bnQgPiBjb3VudFBhZ2VzID8gY291bnRQYWdlcyA6IHByZWxvYWRQYWdlQ291bnQpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuaWZQcmVzZW50YXRpb24oKSkge1xuICAgICAgICAgICAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLmxvYWRUaHVtYm5haWxzKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZGF0YTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlLnRodW1ibmFpbHMgPSBkYXRhLnBhZ2VzO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY291bnRQYWdlcyA9IGNvdW50UGFnZXM7XG4gICAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXI7XG4gICAgICAgICAgdGhpcy5jb3VudFBhZ2VzID0gY291bnRQYWdlcztcblxuICAgICAgICAgIGlmICh0aGlzLmlmUHJlc2VudGF0aW9uKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RodW1ibmFpbHMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RodW1ibmFpbHMgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5ydW5QcmVzZW50YXRpb24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gICAgaWYgKG1vZGFsSWQpIHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShtb2RhbElkKTtcbiAgICB9XG4gICAgdGhpcy5jbGVhckRhdGEoKTtcbiAgfVxuXG4gIHByZWxvYWRQYWdlcyhzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgdGhpcy5fdmlld2VyU2VydmljZS5sb2FkUGFnZSh0aGlzLmNyZWRlbnRpYWxzLCBpKS5zdWJzY3JpYmUoKHBhZ2U6IFBhZ2VNb2RlbCkgPT4ge1xuICAgICAgICB0aGlzLmZpbGUucGFnZXNbaSAtIDFdID0gcGFnZTtcbiAgICAgICAgaWYgKHRoaXMuaWZQcmVzZW50YXRpb24oKSAmJiB0aGlzLmZpbGUudGh1bWJuYWlscyAmJiAhdGhpcy5maWxlLnRodW1ibmFpbHNbaSAtIDFdLmRhdGEpIHtcbiAgICAgICAgICBpZiAocGFnZS5kYXRhKSB7XG4gICAgICAgICAgICBwYWdlLmRhdGEgPSBwYWdlLmRhdGEucmVwbGFjZSgvPlxccys8L2csICc+PCcpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHVGRUZGL2csIFwiXCIpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9ocmVmPVwiXFwvdmlld2VyL2csICdocmVmPVwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3ZpZXdlcicpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9zcmM9XCJcXC92aWV3ZXIvZywgJ3NyYz1cImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC92aWV3ZXInKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvZGF0YT1cIlxcL3ZpZXdlci9nLCAnZGF0YT1cImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC92aWV3ZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5maWxlLnRodW1ibmFpbHNbaSAtIDFdLmRhdGEgPSBwYWdlLmRhdGE7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVwbG9hZCgkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UudXBsb2FkKG51bGwsICRldmVudCwgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKHVwbG9hZGVkRG9jdW1lbnQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZmlsZVBhcmFtICE9PSAnJykge1xuICAgICAgICB0aGlzLnNlbGVjdEZpbGUodXBsb2FkZWREb2N1bWVudC5ndWlkLCAnJywgJycpO1xuICAgICAgICB0aGlzLmZpbGVQYXJhbSA9ICcnO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5leHRQYWdlKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGlmICh0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgKyAxID4gdGhpcy5jb3VudFBhZ2VzKSB7XG4gICAgICB0aGlzLmludGVydmFsVGltZXIuc3RvcCgpO1xuICAgICAgdGhpcy5pbnRlcnZhbFRpbWUgPSAwO1xuICAgIH1cbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmV4dFBhZ2UoKTtcbiAgfVxuXG4gIHByZXZQYWdlKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5wcmV2UGFnZSgpO1xuICB9XG5cbiAgdG9MYXN0UGFnZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UudG9MYXN0UGFnZSgpO1xuICB9XG5cbiAgdG9GaXJzdFBhZ2UoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLnRvRmlyc3RQYWdlKCk7XG4gIH1cblxuICBuYXZpZ2F0ZVRvUGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmF2aWdhdGVUbyhwYWdlKTtcbiAgfVxuXG4gIHpvb21JbigpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBpZiAodGhpcy5fem9vbSA8IDQ5MCkge1xuICAgICAgdGhpcy56b29tID0gdGhpcy5fem9vbSArIDEwO1xuICAgIH1cbiAgfVxuXG4gIHpvb21PdXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRoaXMuX3pvb20gPiAzMCkge1xuICAgICAgdGhpcy56b29tID0gdGhpcy5fem9vbSAtIDEwO1xuICAgIH1cbiAgfVxuXG4gIGZpbGVEcm9wcGVkKCRldmVudCl7XG4gICAgdGhpcy5maWxlV2FzRHJvcHBlZCA9ICRldmVudDtcbiAgfVxuXG4gIHByaXZhdGUgcHRUb1B4KHB0OiBudW1iZXIpIHtcbiAgICAvL3B0ICogOTYgLyA3MiA9IHB4LlxuICAgIHJldHVybiBwdCAqIDk2IC8gNzI7XG4gIH1cblxuICBwcml2YXRlIGdldEZpdFRvV2lkdGgoKSB7XG4gICAgLy8gSW1hZ2VzIGFuZCBFeGNlbC1yZWxhdGVkIGZpbGVzIHJlY2VpdmluZyBkaW1lbnNpb25zIGluIHB4IGZyb20gc2VydmVyXG4gICAgY29uc3QgcGFnZVdpZHRoID0gdGhpcy5mb3JtYXRJY29uICYmICh0aGlzLmZvcm1hdEljb24gPT09IFwiZmlsZS1leGNlbFwiIHx8IHRoaXMuZm9ybWF0SWNvbiA9PT0gXCJmaWxlLWltYWdlXCIpID8gdGhpcy5fcGFnZVdpZHRoIDogdGhpcy5wdFRvUHgodGhpcy5fcGFnZVdpZHRoKTtcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5mb3JtYXRJY29uICYmICh0aGlzLmZvcm1hdEljb24gPT09IFwiZmlsZS1leGNlbFwiIHx8IHRoaXMuZm9ybWF0SWNvbiA9PT0gXCJmaWxlLWltYWdlXCIpID8gdGhpcy5fcGFnZUhlaWdodCA6IHRoaXMucHRUb1B4KHRoaXMuX3BhZ2VIZWlnaHQpO1xuICAgIGNvbnN0IG9mZnNldFdpZHRoID0gcGFnZVdpZHRoID8gcGFnZVdpZHRoIDogd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICBjb25zdCBwcmVzZW50YXRpb25UaHVtYm5haWxzID0gdGhpcy5pc0Rlc2t0b3AgJiYgdGhpcy5pZlByZXNlbnRhdGlvbigpICYmICF0aGlzLnJ1blByZXNlbnRhdGlvbjtcblxuICAgIHJldHVybiAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCAmJiBNYXRoLnJvdW5kKG9mZnNldFdpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpIDwgMikgPyAyMDAgLSBNYXRoLnJvdW5kKG9mZnNldFdpZHRoICogMTAwIC8gKHByZXNlbnRhdGlvblRodW1ibmFpbHMgPyB3aW5kb3cuaW5uZXJXaWR0aCAtIENvbnN0YW50cy50aHVtYm5haWxzV2lkdGggLSBDb25zdGFudHMuc2Nyb2xsV2lkdGggOiB3aW5kb3cuaW5uZXJXaWR0aCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICghdGhpcy5pc0Rlc2t0b3AgPyBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lcldpZHRoICogMTAwIC8gb2Zmc2V0V2lkdGgpIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogTWF0aC5yb3VuZCgoKHByZXNlbnRhdGlvblRodW1ibmFpbHMgPyB3aW5kb3cuaW5uZXJXaWR0aCAtIENvbnN0YW50cy50aHVtYm5haWxzV2lkdGggLSBDb25zdGFudHMuc2Nyb2xsV2lkdGggXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHdpbmRvdy5pbm5lckhlaWdodCkgLyBvZmZzZXRXaWR0aCkgKiAxMDApKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rml0VG9IZWlnaHQoKSB7XG4gICAgY29uc3QgcGFnZVdpZHRoID0gdGhpcy5mb3JtYXRJY29uICYmICh0aGlzLmZvcm1hdEljb24gPT09IFwiZmlsZS1leGNlbFwiIHx8IHRoaXMuZm9ybWF0SWNvbiA9PT0gXCJmaWxlLWltYWdlXCIpID8gdGhpcy5fcGFnZVdpZHRoIDogdGhpcy5wdFRvUHgodGhpcy5fcGFnZVdpZHRoKTtcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5mb3JtYXRJY29uICYmICh0aGlzLmZvcm1hdEljb24gPT09IFwiZmlsZS1leGNlbFwiIHx8IHRoaXMuZm9ybWF0SWNvbiA9PT0gXCJmaWxlLWltYWdlXCIpID8gdGhpcy5fcGFnZUhlaWdodCA6IHRoaXMucHRUb1B4KHRoaXMuX3BhZ2VIZWlnaHQpO1xuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoKSA/IHdpbmRvdy5pbm5lckhlaWdodCAtIDEwMCA6IHdpbmRvdy5pbm5lckhlaWdodCArIDEwMDtcbiAgICBjb25zdCBvZmZzZXRIZWlnaHQgPSBwYWdlSGVpZ2h0ID8gcGFnZUhlaWdodCA6IHdpbmRvd0hlaWdodDtcbiAgICBcbiAgICBpZiAoIXRoaXMuaWZQcmVzZW50YXRpb24oKSkge1xuICAgICAgcmV0dXJuIChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoKSA/IE1hdGgucm91bmQod2luZG93SGVpZ2h0ICogMTAwIC8gb2Zmc2V0SGVpZ2h0KSA6IE1hdGgucm91bmQob2Zmc2V0SGVpZ2h0ICogMTAwIC8gd2luZG93SGVpZ2h0KTtcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gTWF0aC5yb3VuZCgod2luZG93LmlubmVySGVpZ2h0IC0gQ29uc3RhbnRzLnRvcGJhcldpZHRoKSAqIDEwMCAvICghdGhpcy5ydW5QcmVzZW50YXRpb24gPyBvZmZzZXRIZWlnaHQgKyBDb25zdGFudHMuZG9jdW1lbnRNYXJnaW4qMiArIENvbnN0YW50cy5zY3JvbGxXaWR0aCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG9mZnNldEhlaWdodCkpXG4gIH1cblxuICB6b29tT3B0aW9ucygpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0Rml0VG9XaWR0aCgpO1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0Rml0VG9IZWlnaHQoKTtcbiAgICByZXR1cm4gdGhpcy5fem9vbVNlcnZpY2Uuem9vbU9wdGlvbnMod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBnZXRUaW1lck9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIFt7dmFsdWU6IDAsIG5hbWU6ICdOb25lJywgc2VwYXJhdG9yOiBmYWxzZX0sXG4gICAgICB7dmFsdWU6IDUsIG5hbWU6ICc1IHNlYycsIHNlcGFyYXRvcjogZmFsc2V9LFxuICAgICAge3ZhbHVlOiAxMCwgbmFtZTogJzEwIHNlYycsIHNlcGFyYXRvcjogZmFsc2V9LFxuICAgICAge3ZhbHVlOiAxNSwgbmFtZTogJzE1IHNlYycsIHNlcGFyYXRvcjogZmFsc2V9LFxuICAgICAge3ZhbHVlOiAzMCwgbmFtZTogJzMwIHNlYycsIHNlcGFyYXRvcjogZmFsc2V9XTtcbiAgfVxuXG4gIHNldCB6b29tKHpvb20pIHtcbiAgICB0aGlzLl96b29tID0gem9vbTtcbiAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHRoaXMuX3pvb20pO1xuICB9XG5cbiAgZ2V0IHpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3pvb207XG4gIH1cblxuICBzZWxlY3Rab29tKCRldmVudDogYW55KSB7XG4gICAgdGhpcy56b29tID0gJGV2ZW50LnZhbHVlO1xuICB9XG5cbiAgcm90YXRlKGRlZzogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgY29uc3QgcGFnZU51bWJlciA9IHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZTtcbiAgICBjb25zdCBwYWdlTW9kZWwgPSB0aGlzLmZpbGUucGFnZXNbcGFnZU51bWJlciAtIDFdO1xuXG4gICAgaWYgKHRoaXMuc2F2ZVJvdGF0ZVN0YXRlQ29uZmlnICYmIHRoaXMuZmlsZSkge1xuICAgICAgdGhpcy5fdmlld2VyU2VydmljZS5yb3RhdGUodGhpcy5jcmVkZW50aWFscywgZGVnLCBwYWdlTnVtYmVyKS5zdWJzY3JpYmUoKHBhZ2U6IFBhZ2VNb2RlbCkgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVkRGF0YSA9IHBhZ2UuZGF0YS5yZXBsYWNlKC8+XFxzKzwvZywnPjwnKVxuICAgICAgICAgIC5yZXBsYWNlKC9cXHVGRUZGL2csXCJcIilcbiAgICAgICAgICAucmVwbGFjZSgvaHJlZj1cIlxcL3ZpZXdlci9nLCAnaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC92aWV3ZXInKVxuICAgICAgICAgIC5yZXBsYWNlKC9zcmM9XCJcXC92aWV3ZXIvZywgJ3NyYz1cImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC92aWV3ZXInKVxuICAgICAgICAgIC5yZXBsYWNlKC9kYXRhPVwiXFwvdmlld2VyL2csICdkYXRhPVwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3ZpZXdlcicpO1xuICAgICAgICBwYWdlLmRhdGEgPSB1cGRhdGVkRGF0YTtcbiAgICAgICAgdGhpcy5maWxlLnBhZ2VzW3BhZ2VOdW1iZXIgLSAxXSA9IHBhZ2U7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsZSAmJiB0aGlzLmZpbGUucGFnZXMgJiYgcGFnZU1vZGVsKSB7XG4gICAgICAgICAgY29uc3QgYW5nbGUgPSBwYWdlTW9kZWwuYW5nbGUgKyBkZWc7XG4gICAgICAgICAgaWYgKGFuZ2xlID4gMzYwKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUFuZ2xlKHBhZ2VNb2RlbCwgOTApO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYW5nbGUgPCAtMzYwKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUFuZ2xlKHBhZ2VNb2RlbCwgLTkwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBbmdsZShwYWdlTW9kZWwsIGFuZ2xlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VBbmdsZShwYWdlOiBQYWdlTW9kZWwsIGFuZ2xlOiBudW1iZXIpIHtcbiAgICBwYWdlLmFuZ2xlID0gYW5nbGU7XG4gIH1cblxuICBkb3dubG9hZEZpbGUoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLl92aWV3ZXJTZXJ2aWNlLmdldERvd25sb2FkVXJsKHRoaXMuY3JlZGVudGlhbHMpKTtcbiAgfVxuXG4gIHByaW50RmlsZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBpZiAodGhpcy52aWV3ZXJDb25maWcuaHRtbE1vZGUpIHtcbiAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UubG9hZFByaW50KHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZGF0YTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlbmRlclByaW50U2VydmljZS5jaGFuZ2VQYWdlcyhkYXRhLnBhZ2VzKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJQcmludFNlcnZpY2UuY2hhbmdlUGFnZXModGhpcy5maWxlLnBhZ2VzKTtcbiAgICB9XG4gIH1cblxuICBvcGVuVGh1bWJuYWlscygpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcblxuICAgIGlmICh0aGlzLnNob3dUaHVtYm5haWxzKSB7XG4gICAgICB0aGlzLnNob3dUaHVtYm5haWxzID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudmlld2VyQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgPT09IDApIHtcbiAgICAgIHRoaXMucnVuUHJlc2VudGF0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLnNob3dUaHVtYm5haWxzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZmlsZS50aHVtYm5haWxzLmZpbHRlcih0ID0+ICF0LmRhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5fdmlld2VyU2VydmljZS5sb2FkVGh1bWJuYWlscyh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGRhdGE6IEZpbGVEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsZS50aHVtYm5haWxzID0gZGF0YS5wYWdlcztcbiAgICAgICAgICB0aGlzLnNob3dUaHVtYm5haWxzID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNob3dUaHVtYm5haWxzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRGF0YSgpIHtcbiAgICBpZiAoIXRoaXMuZmlsZSB8fCAhdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGFnZSBvZiB0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgIHBhZ2UuZGF0YSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25SaWdodENsaWNrKCkge1xuICAgIHJldHVybiB0aGlzLmVuYWJsZVJpZ2h0Q2xpY2tDb25maWc7XG4gIH1cblxuICBvcGVuU2VhcmNoKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIHRoaXMuc2hvd1NlYXJjaCA9ICF0aGlzLnNob3dTZWFyY2g7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hab29tKCkge1xuICAgIGlmICh0aGlzLmZpbGUpIHtcbiAgICAgIHRoaXMuZm9ybWF0SWNvbiA9IEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5pY29uO1xuICAgICAgdGhpcy56b29tID0gdGhpcy5fd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKSA/IDEwMCA6IHRoaXMuZ2V0Rml0VG9XaWR0aCgpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEN1cnJlbnRQYWdlKHBhZ2VOdW1iZXIpXG4gIHtcbiAgICB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciA9IHBhZ2VOdW1iZXI7XG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gcGFnZU51bWJlcjtcbiAgICBpZiAodGhpcy5ydW5QcmVzZW50YXRpb24gJiYgdGhpcy5pbnRlcnZhbFRpbWUgPiAwICYmIHRoaXMuaW50ZXJ2YWxUaW1lci5zdGF0ZSAhPT0gMykge1xuICAgICAgdGhpcy5yZXNldEludGVydmFsKCk7XG4gICAgICBpZiAodGhpcy5zbGlkZUluUmFuZ2UoKSkge1xuICAgICAgICB0aGlzLnN0YXJ0Q291bnREb3duKHRoaXMuaW50ZXJ2YWxUaW1lLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk1vdXNlV2hlZWxVcCgpXG4gIHtcbiAgICBpZiAodGhpcy5pZlByZXNlbnRhdGlvbigpICYmIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyICE9PSAxKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciA9IHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyIC0gMTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlV2hlZWxEb3duKClcbiAge1xuICAgIGlmICh0aGlzLmlmUHJlc2VudGF0aW9uKCkgJiYgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgIT09IHRoaXMuZmlsZS5wYWdlcy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLmZpbGUucGFnZXNbdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXJdICYmICF0aGlzLmZpbGUucGFnZXNbdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXJdLmRhdGEpIHtcbiAgICAgICAgdGhpcy5wcmVsb2FkUGFnZXModGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIsIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyICsgMSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyID0gdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgKyAxO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyID0gdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgKyAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgVHJ5T3BlbkZpbGVCeVVybChxdWVyeVN0cmluZzogc3RyaW5nKSB7XG4gICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XG4gICAgdGhpcy5maWxlUGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdmaWxlJyk7XG5cbiAgICBpZiAodGhpcy5maWxlUGFyYW0pIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLnZhbGlkVVJMKHRoaXMuZmlsZVBhcmFtKSkge1xuICAgICAgICB0aGlzLnVwbG9hZCh0aGlzLmZpbGVQYXJhbSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuZmlsZVBhcmFtLCAnJywgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVRpbWVyKCRldmVudCl7XG4gICAgdGhpcy5pbnRlcnZhbFRpbWUgPSAkZXZlbnQudmFsdWU7XG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxUaW1lICE9PSAwKSB7XG4gICAgICBpZiAodGhpcy5pbnRlcnZhbFRpbWVyICYmIHRoaXMuaW50ZXJ2YWxUaW1lci5zdGF0ZSA9PT0gMSkge1xuICAgICAgICB0aGlzLmludGVydmFsVGltZXIuc3RvcCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGFydENvdW50RG93bih0aGlzLmludGVydmFsVGltZSk7XG4gICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwodGhpcy5pbnRlcnZhbFRpbWUpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgdGhpcy5pbnRlcnZhbFRpbWVyLnN0b3AoKTtcbiAgICB9XG4gIH1cblxuICBzaG93Q291bnREb3duKCkge1xuICAgIHJldHVybiB0aGlzLmludGVydmFsVGltZSA+IDAgJiYgKHRoaXMuc2xpZGVJblJhbmdlKCkpXG4gIH1cblxuICBzdGFydENvdW50RG93bihzZWNvbmRzOiBudW1iZXIsIHJlc2V0OiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuY291bnREb3duSW50ZXJ2YWwpO1xuICAgIGlmIChzZWNvbmRzID4gMCkge1xuICAgICAgdGhpcy5zZWNvbmRzTGVmdCA9IHNlY29uZHM7XG4gICAgICBzZWNvbmRzLS07XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNlY29uZHNMZWZ0ID0gc2Vjb25kcztcbiAgICAgICAgICBzZWNvbmRzLS07XG4gICAgICAgICAgaWYgKHNlY29uZHMgPT09IDApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgIH1cbiAgICAgIH0sIDEwMDApO1xuXG4gICAgICB0aGlzLmNvdW50RG93bkludGVydmFsID0gaW50ZXJ2YWw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGFydEludGVydmFsKGludGVydmFsVGltZTogbnVtYmVyKSB7XG4gICAgdGhpcy5pbnRlcnZhbFRpbWVyID0gbmV3IEludGVydmFsVGltZXIoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2xpZGVJblJhbmdlKCkpIHtcbiAgICAgICAgdGhpcy5uZXh0UGFnZSgpO1xuICAgICAgICBpZiAodGhpcy5zbGlkZUluUmFuZ2UoKSkge1xuICAgICAgICAgIHRoaXMuc3RhcnRDb3VudERvd24oaW50ZXJ2YWxUaW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICB0aGlzLmludGVydmFsVGltZXIuc3RvcCgpO1xuICAgICAgfVxuICAgIH0sIGludGVydmFsVGltZSAqIDEwMDApO1xuICB9XG5cbiAgcHJpdmF0ZSBzbGlkZUluUmFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSArIDEgPD0gdGhpcy5jb3VudFBhZ2VzO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldEludGVydmFsKCkge1xuICAgIHRoaXMuaW50ZXJ2YWxUaW1lci5zdG9wKCk7XG4gICAgdGhpcy5zdGFydEludGVydmFsKHRoaXMuaW50ZXJ2YWxUaW1lKTtcbiAgfVxuXG4gIHBhdXNlUHJlc2VudGluZygpIHtcbiAgICB0aGlzLmludGVydmFsVGltZXIucGF1c2UoKTtcbiAgICB0aGlzLnN0YXJ0Q291bnREb3duKDAsIHRydWUpO1xuICB9XG5cbiAgcmVzdW1lUHJlc2VudGluZygpIHtcbiAgICB0aGlzLmludGVydmFsVGltZXIucmVzdW1lKCk7XG4gICAgY29uc3Qgc2Vjb25kc1JlbWFpbmluZyA9IE1hdGgucm91bmQodGhpcy5pbnRlcnZhbFRpbWVyLnJlbWFpbmluZy8xMDAwKTtcbiAgICB0aGlzLnN0YXJ0Q291bnREb3duKHNlY29uZHNSZW1haW5pbmcpO1xuICB9XG5cbiAgcHJlc2VudGF0aW9uUnVubmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnZhbFRpbWVyICYmIHRoaXMuaW50ZXJ2YWxUaW1lci5zdGF0ZSA9PT0gMSAmJiB0aGlzLnNsaWRlSW5SYW5nZSgpO1xuICB9XG5cbiAgcHJlc2VudGF0aW9uUGF1c2VkKCkge1xuICAgIHJldHVybiB0aGlzLmludGVydmFsVGltZXIgJiYgdGhpcy5pbnRlcnZhbFRpbWVyLnN0YXRlID09PSAyICYmIHRoaXMuc2xpZGVJblJhbmdlKCk7XG4gIH1cblxuICBzdGFydFByZXNlbnRhdGlvbigpIHtcbiAgICB0aGlzLnNob3dUaHVtYm5haWxzID0gZmFsc2U7XG4gICAgdGhpcy5vcGVuRnVsbFNjcmVlbigpO1xuICAgIHRoaXMucnVuUHJlc2VudGF0aW9uID0gIXRoaXMucnVuUHJlc2VudGF0aW9uO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLmdldEZpdFRvSGVpZ2h0KCkpO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBvcGVuRnVsbFNjcmVlbigpIHtcbiAgICBjb25zdCBkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50ICYge1xuICAgICAgbW96UmVxdWVzdEZ1bGxTY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgICAgIHdlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gICAgICBtc1JlcXVlc3RGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gICAgfTtcbiAgXG4gICAgaWYgKGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgIGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHsgLyogRmlyZWZveCAqL1xuICAgICAgZG9jRWxtV2l0aEJyb3dzZXJzRnVsbFNjcmVlbkZ1bmN0aW9ucy5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgIH0gZWxzZSBpZiAoZG9jRWxtV2l0aEJyb3dzZXJzRnVsbFNjcmVlbkZ1bmN0aW9ucy53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikgeyAvKiBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cbiAgICAgIGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMubXNSZXF1ZXN0RnVsbHNjcmVlbikgeyAvKiBJRS9FZGdlICovXG4gICAgICBkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICB9XG4gICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSB0cnVlO1xuICB9XG4gIFxuICBjbG9zZUZ1bGxTY3JlZW4oYnlCdXR0b246IGJvb2xlYW4gPSBmYWxzZSl7XG4gICAgaWYgKGJ5QnV0dG9uKSB7XG4gICAgICBjb25zdCBkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zID0gZG9jdW1lbnQgYXMgRG9jdW1lbnQgJiB7XG4gICAgICAgIG1vekNhbmNlbEZ1bGxTY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgICAgICAgd2Via2l0RXhpdEZ1bGxzY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgICAgICAgbXNFeGl0RnVsbHNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICAgICAgfTtcbiAgICAgIGlmIChkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zLmV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgIGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7IC8qIEZpcmVmb3ggKi9cbiAgICAgICAgZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy5tb3pDYW5jZWxGdWxsU2NyZWVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHsgLyogQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXG4gICAgICAgIGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy5tc0V4aXRGdWxsc2NyZWVuKSB7IC8qIElFL0VkZ2UgKi9cbiAgICAgICAgZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy5tc0V4aXRGdWxsc2NyZWVuKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxUaW1lcikge1xuICAgICAgdGhpcy5pbnRlcnZhbFRpbWVyLnN0b3AoKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzRnVsbFNjcmVlbiA9IGZhbHNlO1xuICAgIHRoaXMucnVuUHJlc2VudGF0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IHRydWU7XG4gICAgdGhpcy5pbnRlcnZhbFRpbWUgPSAwO1xuICAgIHRoaXMuc3RhcnRDb3VudERvd24oMCk7XG4gIH1cbn1cbiJdfQ==