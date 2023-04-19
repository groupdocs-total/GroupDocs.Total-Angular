/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ViewerService } from "./viewer.service";
import { ModalService, UploadFilesService, NavigateService, PagePreloadService, ZoomService, RenderPrintService, FileUtil, PasswordService, CommonModals, LoadingMaskService, SearchComponent } from "@groupdocs.examples.angular/common-components";
import { ViewerConfigService } from "./viewer-config.service";
import { WindowService } from "@groupdocs.examples.angular/common-components";
import { Constants } from './viewer.constants';
import { IntervalTimer } from './interval-timer';
import { TranslateService } from '@ngx-translate/core';
export class ViewerAppComponent {
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
     * @param {?} cdr
     * @param {?} translate
     */
    constructor(_viewerService, _modalService, configService, uploadFilesService, _navigateService, zoomService, pagePreloadService, _renderPrintService, passwordService, _windowService, _loadingMaskService, cdr, translate) {
        this._viewerService = _viewerService;
        this._modalService = _modalService;
        this._navigateService = _navigateService;
        this._renderPrintService = _renderPrintService;
        this._windowService = _windowService;
        this._loadingMaskService = _loadingMaskService;
        this.cdr = cdr;
        this.translate = translate;
        this.title = 'viewer';
        this.files = [];
        this.countPages = 0;
        this.formatDisabled = true;
        this.showThumbnails = false;
        this.browseFilesModal = CommonModals.BrowseFiles;
        this.showSearch = false;
        this.pagesToPreload = [];
        this._zoom = 100;
        this.fileWasDropped = false;
        this._searchTermFromGetQuery = false;
        this.docElmWithBrowsersFullScreenFunctions = (/** @type {?} */ (document.documentElement));
        this.docWithBrowsersExitFunctions = (/** @type {?} */ (document));
        this.zoomService = zoomService;
        this.startScrollTime = Date.now();
        this.endScrollTime = Date.now();
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
                        this.fileWasDropped ? this.selectFile(obj.guid, '', '', '') : this.selectDir('');
                    }));
                }
            }
        }));
        pagePreloadService.checkPreload.subscribe((/**
         * @param {?} page
         * @return {?}
         */
        (page) => {
            if (this.file) {
                if (this.viewerConfig.preloadPageCount !== 0) {
                    for (let i = page; i < page + 2; i++) {
                        if (i > 0 && i <= this.file.pages.length && !this.file.pages[i - 1].data) {
                            this.preloadPages(i, i);
                        }
                    }
                }
            }
        }));
        passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        (pass) => {
            this.selectFile(this.credentials.guid, pass, CommonModals.PasswordRequired, this.credentials.fileType);
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
     * @param {?} content
     * @return {?}
     */
    set content(content) {
        if (content) {
            this._searchElement = content;
        }
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
        if (this.viewerConfig.defaultDocument !== '' && this.viewerConfig.defaultDocument !== null) {
            this.isLoading = true;
            this.selectFile(this.viewerConfig.defaultDocument, '', '', '');
            this.selectCurrentOrFirstPage();
            return;
        }
        /** @type {?} */
        const defaultLanguage = this.defaultLanguageConfig;
        /** @type {?} */
        const supportedLanguages = this.supportedLanguagesConfig
            .map((/**
         * @param {?} language
         * @return {?}
         */
        language => {
            return {
                name: language.name,
                value: language.code,
                separator: false
            };
        }));
        this.supportedLanguages = supportedLanguages;
        this.selectedLanguage = supportedLanguages.find((/**
         * @param {?} lang
         * @return {?}
         */
        lang => lang.value === defaultLanguage.code));
        this.translate.use(defaultLanguage.code);
        /** @type {?} */
        const queryString = window.location.search;
        if (queryString) {
            /** @type {?} */
            const urlParams = new URLSearchParams(queryString);
            this.fileParam = urlParams.get('file');
            this.fileTypeParam = urlParams.get('fileType');
            if (this.fileParam) {
                /** @type {?} */
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
    get showLanguageMenu() {
        if (this.viewerConfig !== undefined && this.viewerConfig.showLanguageMenu !== undefined) {
            return this.viewerConfig.showLanguageMenu;
        }
        return Constants.defaultShowLanguageMenu;
    }
    /**
     * @return {?}
     */
    get supportedLanguagesConfig() {
        if (this.viewerConfig && this.viewerConfig.supportedLanguages) {
            /** @type {?} */
            const supportedLanguages = this.viewerConfig.supportedLanguages;
            return Constants.defaultSupportedLanguages
                .filter((/**
             * @param {?} lang
             * @return {?}
             */
            lang => supportedLanguages.indexOf(lang.code) !== -1 || supportedLanguages.indexOf(lang.alternateCode) !== -1));
        }
        return Constants.defaultSupportedLanguages;
    }
    /**
     * @return {?}
     */
    get defaultLanguageConfig() {
        if (this.viewerConfig && this.viewerConfig.defaultLanguage) {
            return this.supportedLanguagesConfig
                .find((/**
             * @param {?} lang
             * @return {?}
             */
            lang => lang.is(this.viewerConfig.defaultLanguage)));
        }
        /** @type {?} */
        const pathname = window.location.pathname;
        if (pathname) {
            /** @type {?} */
            const parts = pathname.split('/');
            for (const part of parts) {
                if (part === "")
                    continue;
                /** @type {?} */
                const langOrNothing = this.supportedLanguagesConfig
                    .filter((/**
                 * @param {?} supported
                 * @return {?}
                 */
                supported => supported.is(part)))
                    .shift();
                if (langOrNothing)
                    return langOrNothing;
            }
        }
        /** @type {?} */
        const queryString = window.location.search;
        if (queryString) {
            /** @type {?} */
            const urlParams = new URLSearchParams(queryString);
            /** @type {?} */
            const candidate = urlParams.get('lang');
            if (candidate) {
                return this.supportedLanguagesConfig
                    .find((/**
                 * @param {?} lang
                 * @return {?}
                 */
                lang => lang.is(candidate)));
            }
        }
        return Constants.defaultLanguage;
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
     * @return {?}
     */
    selectCurrentOrFirstPage() {
        this.selectedPageNumber = this._navigateService.currentPage !== 0 ? this._navigateService.currentPage : 1;
    }
    /**
     * @return {?}
     */
    getPreloadPageCount() {
        /** @type {?} */
        const minPresentationPagesToPreload = 3;
        /** @type {?} */
        const preloadPageCount = !this.ifPresentation()
            ? this.viewerConfig.preloadPageCount
            : this.viewerConfig.preloadPageCount !== 0 && this.viewerConfig.preloadPageCount < minPresentationPagesToPreload
                ? minPresentationPagesToPreload
                : this.viewerConfig.preloadPageCount;
        return preloadPageCount;
    }
    /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @param {?} fileType
     * @return {?}
     */
    selectFile($event, password, modalId, fileType) {
        this.credentials = { guid: $event, fileType: fileType, password: password };
        this.file = null;
        this._viewerService.loadFile(this.credentials).subscribe((/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
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
                /** @type {?} */
                const countPagesToPreload = this.getPreloadPageCount();
                /** @type {?} */
                const countPages = file.pages ? file.pages.length : 0;
                /** @type {?} */
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
        for (let pageNumber = start; pageNumber <= end; pageNumber++) {
            if (this.pagesToPreload.indexOf(pageNumber) !== -1) {
                continue;
            }
            /** @type {?} */
            const page = this.file.pages.find((/**
             * @param {?} p
             * @return {?}
             */
            p => p.number === pageNumber));
            if (page && page.data) {
                continue;
            }
            this.pagesToPreload.push(pageNumber);
            this._viewerService.loadPage(this.credentials, pageNumber).subscribe((/**
             * @param {?} model
             * @return {?}
             */
            (model) => {
                if (model.data) {
                    model.data = model.data.replace(/>\s+</g, '><').replace(/\uFEFF/g, '');
                }
                this.file.pages[pageNumber - 1].data = model.data;
                if (this.file.thumbnails) {
                    this.file.thumbnails[pageNumber - 1].data = model.data;
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
                this.selectFile(uploadedDocument.guid, '', '', '');
                this.fileParam = '';
                this.fileTypeParam = '';
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
                    .replace(/\uFEFF/g, "");
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
        this._viewerService.loadPrintPdf(this.credentials).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this._renderPrintService.changeBlob(data);
        }));
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
        this.runPresentation = false;
        this.showThumbnails = true;
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
     * @param {?=} show
     * @return {?}
     */
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
    /**
     * @private
     * @return {?}
     */
    refreshZoom() {
        if (this.file) {
            this.formatIcon = FileUtil.find(this.file.guid, false).icon;
            this.zoom = this._windowService.isDesktop() && !(this.ifImage() || this.ifPresentation()) ? 100
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
        this.startScrollTime = Date.now();
        if (this.ifPresentation() && this.selectedPageNumber !== 1) {
            if (this.startScrollTime - this.endScrollTime > 300 && this.vertScrollEnded(true)) {
                this.selectedPageNumber = this.selectedPageNumber - 1;
                this.endScrollTime = Date.now();
            }
        }
    }
    /**
     * @return {?}
     */
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
    /**
     * @param {?} onTop
     * @return {?}
     */
    vertScrollEnded(onTop) {
        /** @type {?} */
        const gdDocument = (/** @type {?} */ (document.getElementsByClassName('gd-document')[0]));
        if (onTop) {
            return gdDocument.scrollTop === 0;
        }
        else
            return gdDocument.offsetHeight + gdDocument.scrollTop >= gdDocument.scrollHeight;
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
        const intervalId = setInterval((/**
         * @return {?}
         */
        () => {
            if (screen.height === window.innerHeight && screen.width === window.innerWidth) {
                this.zoomService.changeZoom(window.innerWidth / window.innerHeight < 1.7 && this._pageWidth / this._pageHeight > 1.7
                    ? this.getFitToWidth() : this.getFitToHeight());
                clearInterval(intervalId);
            }
        }), 50);
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
    /**
     * @param {?} selectedLanguage
     * @return {?}
     */
    selectLanguage(selectedLanguage) {
        this.selectedLanguage = selectedLanguage;
        this.translate.use(selectedLanguage.value);
    }
}
ViewerAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-viewer',
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick()\">\n  <div class=\"top-panel\" *ngIf=\"!runPresentation\">\n    <gd-logo [logo]=\"'viewer'\" icon=\"eye\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" title=\"{{'Browse files' | translate}}\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-select class=\"mobile-hide select-left noselect\" [disabled]=\"formatDisabled\" [options]=\"options\" (selected)=\"selectZoom($event)\"\n                 [showSelected]=\"{ name: zoom+'%', value : zoom}\" *ngIf=\"zoomConfig\" ></gd-select>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" title=\"{{'Zoom In' | translate}}\" (click)=\"zoomIn()\"\n                 *ngIf=\"zoomConfig\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" title=\"{{'Zoom Out' | translate}}\"\n                 (click)=\"zoomOut()\" *ngIf=\"zoomConfig\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-left'\" title=\"{{'First Page' | translate }}\"\n                 (click)=\"toFirstPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" title=\"{{'Previous Page' | translate}}\"\n                 (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <div class=\"current-page-number noselect\" [ngClass]=\"{'active': !formatDisabled}\" *ngIf=\"formatIcon !== 'file-excel'\">{{currentPage}}/{{countPages}}</div>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" title=\"{{'Next Page' | translate }}\"\n                 (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-right'\" title=\"{{'Last Page' | translate }}\"\n                 (click)=\"toLastPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'undo'\" title=\"{{'Rotate CCW' | translate}}\" (click)=\"rotate(-90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'redo'\" title=\"{{'Rotate CW' | translate}}\"  (click)=\"rotate(90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" title=\"{{'Download' | translate}}\"\n                 (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" title=\"{{'Print' | translate}}\" (click)=\"printFile()\"\n                 *ngIf=\"printConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search'\" title=\"{{'Search' | translate}}\" (click)=\"openSearch()\"\n                 *ngIf=\"searchConfig && !ifPresentation()\" ></gd-button>\n      <gd-search (hidePanel)=\"openSearch(false)\" #search [hidden]=\"!showSearch\" ></gd-search>\n\n      <div class=\"toolbar-panel-right\">\n        <div class=\"language-menu mobile-hide\" *ngIf=\"showLanguageMenu\">\n          <gd-select class=\"select-language-menu noselect\" [disabled]=\"false\" [options]=\"supportedLanguages\"\n            (selected)=\"selectLanguage($event)\" [showSelected]=\"selectedLanguage\"></gd-select>\n        </div>\n\n        <gd-button class=\"thumbnails-button btn-right\" [disabled]=\"formatDisabled\" [icon]=\"'th-large'\" title=\"{{'Thumbnails' | translate}}\"\n                   (click)=\"openThumbnails()\" *ngIf=\"thumbnailsConfig && isDesktop && formatIcon !== 'file-excel' && (!ifPresentation() ||\n                   ifPresentation() && runPresentation)\"></gd-button>\n        <gd-button class=\"thumbnails-button mobile-hide btn-right smp-start-stop\" [disabled]=\"formatDisabled\" [icon]=\"'play'\" title=\"{{'Run presentation' | translate}}\"\n                   (click)=\"startPresentation()\" *ngIf=\"ifPresentation() && !runPresentation\">{{'Present' | translate}}</gd-button>\n      </div>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"top-panel\" *ngIf=\"runPresentation\">\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <div class=\"slides-title\">Viewer</div>\n      <div class=\"slides-filename\">{{getFileName()}}</div>\n      <div class=\"slides-buttons\">\n        <gd-select class=\"mobile-hide select-right\" [disabled]=\"formatDisabled\" [options]=\"timerOptions\" (selected)=\"toggleTimer($event)\"\n        [icon]=\"'clock'\" *ngIf=\"zoomConfig\" ></gd-select>\n        <gd-button class=\"mobile-hide\" *ngIf=\"presentationRunning()\" [disabled]=\"formatDisabled\" [icon]=\"'pause'\" title=\"{{'Pause presenting' | translate}}\"\n        (click)=\"pausePresenting()\"></gd-button>\n        <gd-button class=\"mobile-hide\" *ngIf=\"presentationPaused()\" [disabled]=\"formatDisabled\" [icon]=\"'step-forward'\" title=\"{{'Resume presenting' | translate}}\"\n        (click)=\"resumePresenting()\"></gd-button>\n        <gd-button class=\"mobile-hide btn-right smp-start-stop\" [disabled]=\"formatDisabled\" [icon]=\"'stop'\" title=\"{{'Stop presenting' | translate}}\"\n        (click)=\"closeFullScreen(true)\">{{'Stop' | translate}} </gd-button>\n      </div>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"doc-panel\" *ngIf=\"file\" #docPanel>\n    <gd-thumbnails *ngIf=\"showThumbnails && !ifPresentation() && isDesktop\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\" (selectedPage)=\"selectCurrentPage($event)\"></gd-thumbnails>\n    <gd-thumbnails *ngIf=\"showThumbnails && ifPresentation() && !runPresentation && isDesktop\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\" (selectedPage)=\"selectCurrentPage($event)\" gdScrollable [isPresentation]=\"ifPresentation()\"></gd-thumbnails>\n\n    <gd-document class=\"gd-document\" *ngIf=\"(file &&\n                                            (ifExcel() && !htmlModeConfig) ||\n                                            (ifPresentation() && isDesktop && !runPresentation) ||\n                                            (!ifExcel() && !ifPresentation()))\" [file]=\"file\" [mode]=\"htmlModeConfig\" [showActiveSlide]=\"true\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" [selectedPage]=\"selectedPageNumber\" gdRenderPrint [htmlMode]=\"htmlModeConfig\" gdMouseWheel (mouseWheelUp)=\"onMouseWheelUp()\" (mouseWheelDown)=\"onMouseWheelDown()\"></gd-document>\n    <gd-excel-document class=\"gd-document\" *ngIf=\"file && ifExcel() && htmlModeConfig\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-excel-document>\n    <gd-run-presentation class=\"gd-document\" *ngIf=\"(file && ifPresentation() && runPresentation) ||\n                                                    (file && ifPresentation() && !isDesktop)\" [file]=\"file\" [currentPage]=\"currentPage\" [mode]=\"htmlModeConfig\"\n                                                    (selectedPage)=\"selectCurrentPage($event)\"\n                 [preloadPageCount]=\"0\"></gd-run-presentation>\n    <div class=\"slides-nav\" *ngIf=\"runPresentation\">\n      <div class=\"timer\" *ngIf=\"showCountDown()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon><span [ngClass]=\"secondsLeft >= 10 ? 'seconds-remaining two-digits' : 'seconds-remaining'\">{{secondsLeft}}</span>\n      </div>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\"\n      (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\"\n      (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n    </div>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n    {{'Click' | translate}} <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> {{'to open file' | translate}}<br>\n    {{'Or drop file here' | translate}}\n  </gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal, null)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.noselect{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.current-page-number{margin-left:7px;font-size:14px;color:#959da5;width:37px;height:37px;line-height:37px;text-align:center}.current-page-number.active{color:#fff}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}.toolbar-panel-right{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1;place-content:flex-end}.btn-right{margin-right:7px}.smp-start-stop ::ng-deep .button{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;border:1px solid;border-radius:5px;padding:0 10px!important}.language-menu{margin-right:15px}.select-language-menu ::ng-deep .select{width:100%}.select-language-menu ::ng-deep .select ::ng-deep .dropdown-menu{overflow-y:scroll;max-height:90%}.select-language-menu ::ng-deep .selected-value{max-width:100%}.thumbnails-button ::ng-deep .button{margin-left:0!important}::ng-deep .tools .button,::ng-deep .tools .nav-caret,::ng-deep .tools .selected-value{color:#fff!important}::ng-deep .tools .button.inactive,::ng-deep .tools .nav-caret.inactive,::ng-deep .tools .selected-value.inactive{color:#959da5!important}::ng-deep .tools .button{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .select-left .select{position:relative}::ng-deep .tools .select-left .dropdown-menu{top:40px;left:0}::ng-deep .tools .select-right .select{position:relative}::ng-deep .tools .select-right .dropdown-menu{top:40px;right:0}::ng-deep .tools .dropdown-menu .option{color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 15px!important}::ng-deep .tools .select{width:37px;height:37px;margin-left:7px;line-height:37px;text-align:center}::ng-deep .tools .slides-title{color:#fff;padding-left:12px;font-size:18px}::ng-deep .tools .slides-filename{-webkit-box-flex:1;flex-grow:1;text-align:center;color:#fff;text-overflow:ellipsis;white-space:nowrap;padding-left:20px;overflow:hidden}::ng-deep .tools .slides-buttons{display:-webkit-box;display:flex}::ng-deep .tools .slides-buttons ::ng-deep .select{color:#fff;cursor:pointer}::ng-deep .tools ::ng-deep .gd-nav-search-container .icon-button{margin:0 0 0 7px!important}.slides-nav{position:absolute;right:30px;bottom:30px;display:-webkit-box;display:flex}.slides-nav ::ng-deep .button{font-size:37px;background-color:#edf0f2;border-radius:3px}.slides-nav ::ng-deep .timer{font-size:42px;line-height:6px;color:#959da5;position:relative}.slides-nav ::ng-deep .timer .seconds-remaining{position:absolute;margin-left:5px;font-size:16px;top:18px;left:12px}.slides-nav ::ng-deep .timer .seconds-remaining.two-digits{left:6px!important}::ng-deep .page.presentation .gd-wrapper{pointer-events:none}@media (max-width:1037px){.current-page-number,.mobile-hide{display:none}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .tools .gd-nav-search-btn .icon-button{height:37px;width:37px}::ng-deep .tools .gd-nav-search-btn .button{font-size:14px}::ng-deep .tools .gd-nav-search-container{top:59px!important}}"]
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
    { type: LoadingMaskService },
    { type: ChangeDetectorRef },
    { type: TranslateService }
];
ViewerAppComponent.propDecorators = {
    content: [{ type: ViewChild, args: ['search', { static: false },] }],
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
    ViewerAppComponent.prototype.pagesToPreload;
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
    ViewerAppComponent.prototype.fileTypeParam;
    /** @type {?} */
    ViewerAppComponent.prototype.urlParam;
    /** @type {?} */
    ViewerAppComponent.prototype.querySubscription;
    /** @type {?} */
    ViewerAppComponent.prototype.selectedPageNumber;
    /** @type {?} */
    ViewerAppComponent.prototype.runPresentation;
    /** @type {?} */
    ViewerAppComponent.prototype.isFullScreen;
    /** @type {?} */
    ViewerAppComponent.prototype.startScrollTime;
    /** @type {?} */
    ViewerAppComponent.prototype.endScrollTime;
    /** @type {?} */
    ViewerAppComponent.prototype.supportedLanguages;
    /** @type {?} */
    ViewerAppComponent.prototype.selectedLanguage;
    /** @type {?} */
    ViewerAppComponent.prototype._searchTermForBackgroundService;
    /** @type {?} */
    ViewerAppComponent.prototype._searchTermFromGetQuery;
    /** @type {?} */
    ViewerAppComponent.prototype._searchElement;
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
    /**
     * @type {?}
     * @private
     */
    ViewerAppComponent.prototype.cdr;
    /** @type {?} */
    ViewerAppComponent.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3ZpZXdlci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBVSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBR0wsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixlQUFlLEVBQ2Ysa0JBQWtCLEVBRWxCLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLGVBQWUsRUFHZixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGVBQWUsRUFDaEIsTUFBTSwrQ0FBK0MsQ0FBQztBQUV2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsYUFBYSxFQUFTLE1BQU0sK0NBQStDLENBQUM7QUFFcEYsT0FBTyxFQUFDLFNBQVMsRUFBVyxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQU9yRCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7O0lBd0U3QixZQUFvQixjQUE2QixFQUM3QixhQUEyQixFQUNuQyxhQUFrQyxFQUNsQyxrQkFBc0MsRUFDOUIsZ0JBQWlDLEVBQ3pDLFdBQXdCLEVBQ3hCLGtCQUFzQyxFQUM5QixtQkFBdUMsRUFDL0MsZUFBZ0MsRUFDeEIsY0FBNkIsRUFDN0IsbUJBQXVDLEVBQ3ZDLEdBQXNCLEVBQ3ZCLFNBQTJCO1FBWjFCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdC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O0lBaEU3QyxtQ0FBaUI7O0lBQ2pCLG1DQUF3Qjs7SUFDeEIsa0NBQXNCOztJQUN0QiwwQ0FBMkI7O0lBQzNCLHdDQUFlOztJQUNmLDRDQUFzQjs7SUFDdEIsNENBQXVCOztJQUN2Qix5Q0FBa0M7O0lBQ2xDLDhDQUE0Qzs7SUFDNUMsd0NBQW1COztJQUNuQix1Q0FBbUI7O0lBQ25CLHVDQUFtQjs7SUFDbkIsNENBQThCOztJQUU5QixtQ0FBWTs7SUFDWix3Q0FBbUI7O0lBQ25CLHlDQUFvQjs7SUFDcEIscUNBQVE7O0lBQ1IsMENBQWE7O0lBQ2IsMENBQXFCOztJQUNyQiwyQ0FBNkI7O0lBQzdCLCtDQUEwQjs7SUFDMUIseUNBQW9COztJQUNwQiw0Q0FBdUI7O0lBQ3ZCLHdDQUFtQjs7SUFFbkIsdUNBQWtCOztJQUNsQiwyQ0FBc0I7O0lBQ3RCLHNDQUFpQjs7SUFDakIsK0NBQWdDOztJQUNoQyxnREFBMkI7O0lBQzNCLDZDQUF5Qjs7SUFDekIsMENBQXNCOztJQUN0Qiw2Q0FBd0I7O0lBQ3hCLDJDQUFzQjs7SUFFdEIsZ0RBQTZCOztJQUM3Qiw4Q0FBeUI7O0lBRXpCLDZEQUF3Qzs7SUFDeEMscURBQWdDOztJQUVoQyw0Q0FBZ0M7O0lBUWhDLG1FQUlFOztJQUVGLDBEQUlFOztJQUVGLHlDQUF5Qjs7Ozs7SUFTYiw0Q0FBcUM7Ozs7O0lBQ3JDLDJDQUFtQzs7Ozs7SUFHbkMsOENBQXlDOzs7OztJQUd6QyxpREFBK0M7Ozs7O0lBRS9DLDRDQUFxQzs7Ozs7SUFDckMsaURBQStDOzs7OztJQUMvQyxpQ0FBOEI7O0lBQzlCLHVDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1ZpZXdlclNlcnZpY2V9IGZyb20gXCIuL3ZpZXdlci5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuICBGaWxlRGVzY3JpcHRpb24sXG4gIEZpbGVNb2RlbCxcbiAgTW9kYWxTZXJ2aWNlLFxuICBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gIE5hdmlnYXRlU2VydmljZSxcbiAgUGFnZVByZWxvYWRTZXJ2aWNlLFxuICBQYWdlTW9kZWwsXG4gIFpvb21TZXJ2aWNlLFxuICBSZW5kZXJQcmludFNlcnZpY2UsXG4gIEZpbGVVdGlsLFxuICBQYXNzd29yZFNlcnZpY2UsXG4gIEZpbGVDcmVkZW50aWFscyxcbiAgVHlwZWRGaWxlQ3JlZGVudGlhbHMsXG4gIENvbW1vbk1vZGFscyxcbiAgTG9hZGluZ01hc2tTZXJ2aWNlLFxuICBTZWFyY2hDb21wb25lbnRcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtWaWV3ZXJDb25maWd9IGZyb20gXCIuL3ZpZXdlci1jb25maWdcIjtcbmltcG9ydCB7Vmlld2VyQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vdmlld2VyLWNvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQge1dpbmRvd1NlcnZpY2UsIE9wdGlvbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtDb25zdGFudHMsIExhbmd1YWdlfSBmcm9tICcuL3ZpZXdlci5jb25zdGFudHMnO1xuaW1wb3J0IHtJbnRlcnZhbFRpbWVyfSBmcm9tICcuL2ludGVydmFsLXRpbWVyJztcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXZpZXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3ZXItYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmlld2VyLWFwcC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlckFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHRpdGxlID0gJ3ZpZXdlcic7XG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xuICBmaWxlOiBGaWxlRGVzY3JpcHRpb247XG4gIHZpZXdlckNvbmZpZzogVmlld2VyQ29uZmlnO1xuICBjb3VudFBhZ2VzID0gMDtcbiAgZm9ybWF0RGlzYWJsZWQgPSB0cnVlO1xuICBzaG93VGh1bWJuYWlscyA9IGZhbHNlO1xuICBjcmVkZW50aWFsczogVHlwZWRGaWxlQ3JlZGVudGlhbHM7XG4gIGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XG4gIHNob3dTZWFyY2ggPSBmYWxzZTtcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIHBhZ2VzVG9QcmVsb2FkOiBudW1iZXJbXSA9IFtdO1xuXG4gIF96b29tID0gMTAwO1xuICBfcGFnZVdpZHRoOiBudW1iZXI7XG4gIF9wYWdlSGVpZ2h0OiBudW1iZXI7XG4gIG9wdGlvbnM7XG4gIHRpbWVyT3B0aW9ucztcbiAgaW50ZXJ2YWxUaW1lOiBudW1iZXI7XG4gIGludGVydmFsVGltZXI6IEludGVydmFsVGltZXI7XG4gIGNvdW50RG93bkludGVydmFsOiBudW1iZXI7XG4gIHNlY29uZHNMZWZ0OiBudW1iZXI7XG4gIGZpbGVXYXNEcm9wcGVkID0gZmFsc2U7XG4gIGZvcm1hdEljb246IHN0cmluZztcblxuICBmaWxlUGFyYW06IHN0cmluZztcbiAgZmlsZVR5cGVQYXJhbTogc3RyaW5nO1xuICB1cmxQYXJhbTogc3RyaW5nO1xuICBxdWVyeVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBzZWxlY3RlZFBhZ2VOdW1iZXI6IG51bWJlcjtcbiAgcnVuUHJlc2VudGF0aW9uOiBib29sZWFuO1xuICBpc0Z1bGxTY3JlZW46IGJvb2xlYW47XG4gIHN0YXJ0U2Nyb2xsVGltZTogbnVtYmVyO1xuICBlbmRTY3JvbGxUaW1lOiBudW1iZXI7XG5cbiAgc3VwcG9ydGVkTGFuZ3VhZ2VzOiBPcHRpb25bXTtcbiAgc2VsZWN0ZWRMYW5ndWFnZTogT3B0aW9uO1xuXG4gIF9zZWFyY2hUZXJtRm9yQmFja2dyb3VuZFNlcnZpY2U6IHN0cmluZztcbiAgX3NlYXJjaFRlcm1Gcm9tR2V0UXVlcnkgPSBmYWxzZTtcblxuICBfc2VhcmNoRWxlbWVudDogU2VhcmNoQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdzZWFyY2gnLCB7IHN0YXRpYzogZmFsc2V9KVxuICBzZXQgY29udGVudChjb250ZW50OiBTZWFyY2hDb21wb25lbnQpIHtcbiAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICB0aGlzLl9zZWFyY2hFbGVtZW50ID0gY29udGVudDtcbiAgICAgfVxuICB9XG4gIFxuICBkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50ICYge1xuICAgIG1velJlcXVlc3RGdWxsU2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gICAgd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgICBtc1JlcXVlc3RGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gIH07XG5cbiAgZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucyA9IGRvY3VtZW50IGFzIERvY3VtZW50ICYge1xuICAgIG1vekNhbmNlbEZ1bGxTY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgICB3ZWJraXRFeGl0RnVsbHNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICAgIG1zRXhpdEZ1bGxzY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgfTtcblxuICB6b29tU2VydmljZTogWm9vbVNlcnZpY2U7XG5cbiAgQEhvc3RMaXN0ZW5lcihcImRvY3VtZW50OmZ1bGxzY3JlZW5jaGFuZ2VcIiwgW10pXG4gIGZ1bGxTY3JlZW4oKSB7XG4gICAgaWYgKCFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xuICAgICAgdGhpcy5jbG9zZUZ1bGxTY3JlZW4oKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3ZXJTZXJ2aWNlOiBWaWV3ZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgY29uZmlnU2VydmljZTogVmlld2VyQ29uZmlnU2VydmljZSxcbiAgICAgICAgICAgICAgdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICB6b29tU2VydmljZTogWm9vbVNlcnZpY2UsXG4gICAgICAgICAgICAgIHBhZ2VQcmVsb2FkU2VydmljZTogUGFnZVByZWxvYWRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJQcmludFNlcnZpY2U6IFJlbmRlclByaW50U2VydmljZSxcbiAgICAgICAgICAgICAgcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2xvYWRpbmdNYXNrU2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHB1YmxpYyB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcblxuICAgIHRoaXMuem9vbVNlcnZpY2UgPSB6b29tU2VydmljZTtcbiAgICB0aGlzLnN0YXJ0U2Nyb2xsVGltZSA9IERhdGUubm93KCk7XG4gICAgdGhpcy5lbmRTY3JvbGxUaW1lID0gRGF0ZS5ub3coKTtcblxuICAgIGNvbmZpZ1NlcnZpY2UudXBkYXRlZENvbmZpZy5zdWJzY3JpYmUoKHZpZXdlckNvbmZpZykgPT4ge1xuICAgICAgdGhpcy52aWV3ZXJDb25maWcgPSB2aWV3ZXJDb25maWc7XG4gICAgfSk7XG5cbiAgICB1cGxvYWRGaWxlc1NlcnZpY2UudXBsb2Fkc0NoYW5nZS5zdWJzY3JpYmUoKHVwbG9hZHMpID0+IHtcbiAgICAgIGlmICh1cGxvYWRzKSB7XG4gICAgICAgIGxldCBpOiBudW1iZXI7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB1cGxvYWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5fdmlld2VyU2VydmljZS51cGxvYWQodXBsb2Fkcy5pdGVtKGkpLCAnJywgdGhpcy52aWV3ZXJDb25maWcucmV3cml0ZSkuc3Vic2NyaWJlKChvYmo6IEZpbGVDcmVkZW50aWFscykgPT4ge1xuICAgICAgICAgICAgdGhpcy5maWxlV2FzRHJvcHBlZCA/IHRoaXMuc2VsZWN0RmlsZShvYmouZ3VpZCwgJycsICcnLCAnJykgOiB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhZ2VQcmVsb2FkU2VydmljZS5jaGVja1ByZWxvYWQuc3Vic2NyaWJlKChwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgIGlmKHRoaXMuZmlsZSkge1xuICAgICAgICBpZiAodGhpcy52aWV3ZXJDb25maWcucHJlbG9hZFBhZ2VDb3VudCAhPT0gMCkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSBwYWdlOyBpIDwgcGFnZSArIDI7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPiAwICYmIGkgPD0gdGhpcy5maWxlLnBhZ2VzLmxlbmd0aCAmJiAhdGhpcy5maWxlLnBhZ2VzW2kgLSAxXS5kYXRhKSB7XG4gICAgICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKGksIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGFzc3dvcmRTZXJ2aWNlLnBhc3NDaGFuZ2Uuc3Vic2NyaWJlKChwYXNzOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLmNyZWRlbnRpYWxzLmd1aWQsIHBhc3MsIENvbW1vbk1vZGFscy5QYXNzd29yZFJlcXVpcmVkLCB0aGlzLmNyZWRlbnRpYWxzLmZpbGVUeXBlKTtcbiAgICB9KTtcblxuICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgX3dpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgICBpZiAoIXRoaXMucnVuUHJlc2VudGF0aW9uKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaFpvb20oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnZpZXdlckNvbmZpZy5kZWZhdWx0RG9jdW1lbnQgIT09ICcnICYmIHRoaXMudmlld2VyQ29uZmlnLmRlZmF1bHREb2N1bWVudCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMudmlld2VyQ29uZmlnLmRlZmF1bHREb2N1bWVudCwgJycsICcnLCAnJyk7XG4gICAgICB0aGlzLnNlbGVjdEN1cnJlbnRPckZpcnN0UGFnZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRMYW5ndWFnZSA9IHRoaXMuZGVmYXVsdExhbmd1YWdlQ29uZmlnO1xuICAgIGNvbnN0IHN1cHBvcnRlZExhbmd1YWdlcyA9IHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VzQ29uZmlnXG4gICAgICAubWFwKGxhbmd1YWdlID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiBsYW5ndWFnZS5uYW1lLFxuICAgICAgICAgIHZhbHVlOiBsYW5ndWFnZS5jb2RlLFxuICAgICAgICAgIHNlcGFyYXRvcjogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5zdXBwb3J0ZWRMYW5ndWFnZXMgPSBzdXBwb3J0ZWRMYW5ndWFnZXM7XG4gICAgdGhpcy5zZWxlY3RlZExhbmd1YWdlID0gc3VwcG9ydGVkTGFuZ3VhZ2VzLmZpbmQobGFuZyA9PiBsYW5nLnZhbHVlID09PSBkZWZhdWx0TGFuZ3VhZ2UuY29kZSk7XG4gICAgdGhpcy50cmFuc2xhdGUudXNlKGRlZmF1bHRMYW5ndWFnZS5jb2RlKTtcblxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICBpZiAocXVlcnlTdHJpbmcpIHtcbiAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xuXG4gICAgICB0aGlzLmZpbGVQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ2ZpbGUnKTtcbiAgICAgIHRoaXMuZmlsZVR5cGVQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ2ZpbGVUeXBlJyk7XG4gICAgICBpZih0aGlzLmZpbGVQYXJhbSkge1xuICAgICAgICBjb25zdCBzVGVybSA9IHVybFBhcmFtcy5nZXQoJ3NlYXJjaCcpO1xuICAgICAgICBpZiAoc1Rlcm0gJiYgc1Rlcm0gIT09IG51bGwgJiYgc1Rlcm0gIT09ICcnKSB7XG4gICAgICAgICAgdGhpcy5fc2VhcmNoVGVybUZvckJhY2tncm91bmRTZXJ2aWNlID0gc1Rlcm07XG4gICAgICAgICAgdGhpcy5fc2VhcmNoVGVybUZyb21HZXRRdWVyeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5maWxlUGFyYW0sICcnLCAnJywgdGhpcy5maWxlVHlwZVBhcmFtKTtcbiAgICAgICAgdGhpcy5zZWxlY3RDdXJyZW50T3JGaXJzdFBhZ2UoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVybFBhcmFtID0gdXJsUGFyYW1zLmdldCgndXJsJyk7XG4gICAgICBpZih0aGlzLnVybFBhcmFtKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51cGxvYWQodGhpcy51cmxQYXJhbSk7XG4gICAgICAgIHRoaXMuc2VsZWN0Q3VycmVudE9yRmlyc3RQYWdlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2xvYWRpbmdNYXNrU2VydmljZVxuICAgIC5vbkxvYWRpbmdDaGFuZ2VkXG4gICAgLnN1YnNjcmliZSgobG9hZGluZzogYm9vbGVhbikgPT4gdGhpcy5pc0xvYWRpbmcgPSBsb2FkaW5nKTtcblxuICAgIHRoaXMucmVmcmVzaFpvb20oKTtcbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHpvb21Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcuem9vbSA6IHRydWU7XG4gIH1cblxuICBnZXQgcGFnZVNlbGVjdG9yQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnBhZ2VTZWxlY3RvciA6IHRydWU7XG4gIH1cblxuICBnZXQgc2VhcmNoQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnNlYXJjaCA6IHRydWU7XG4gIH1cblxuICBnZXQgdGh1bWJuYWlsc0NvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy50aHVtYm5haWxzIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCByb3RhdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcucm90YXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBkb3dubG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5kb3dubG9hZCA6IHRydWU7XG4gIH1cblxuICBnZXQgdXBsb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnVwbG9hZCA6IHRydWU7XG4gIH1cblxuICBnZXQgcHJpbnRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcucHJpbnQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5icm93c2UgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGh0bWxNb2RlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLmh0bWxNb2RlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBzYXZlUm90YXRlU3RhdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcuc2F2ZVJvdGF0ZVN0YXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBlbmFibGVSaWdodENsaWNrQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLmVuYWJsZVJpZ2h0Q2xpY2sgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZTtcbiAgfVxuXG4gIGdldCBzaG93TGFuZ3VhZ2VNZW51KCk6IGJvb2xlYW4ge1xuICAgIGlmKHRoaXMudmlld2VyQ29uZmlnICE9PSB1bmRlZmluZWQgJiYgdGhpcy52aWV3ZXJDb25maWcuc2hvd0xhbmd1YWdlTWVudSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcuc2hvd0xhbmd1YWdlTWVudTtcbiAgICB9XG4gICAgcmV0dXJuIENvbnN0YW50cy5kZWZhdWx0U2hvd0xhbmd1YWdlTWVudTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0ZWRMYW5ndWFnZXNDb25maWcoKTogTGFuZ3VhZ2VbXSB7XG4gICAgaWYodGhpcy52aWV3ZXJDb25maWcgJiYgdGhpcy52aWV3ZXJDb25maWcuc3VwcG9ydGVkTGFuZ3VhZ2VzKSB7XG4gICAgICBjb25zdCBzdXBwb3J0ZWRMYW5ndWFnZXMgPSB0aGlzLnZpZXdlckNvbmZpZy5zdXBwb3J0ZWRMYW5ndWFnZXM7XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLmRlZmF1bHRTdXBwb3J0ZWRMYW5ndWFnZXNcbiAgICAgICAgLmZpbHRlcihsYW5nID0+XG4gICAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzLmluZGV4T2YobGFuZy5jb2RlKSAhPT0gLTEgfHwgc3VwcG9ydGVkTGFuZ3VhZ2VzLmluZGV4T2YobGFuZy5hbHRlcm5hdGVDb2RlKSAhPT0gLTEpO1xuICAgIH1cblxuICAgIHJldHVybiBDb25zdGFudHMuZGVmYXVsdFN1cHBvcnRlZExhbmd1YWdlcztcbiAgfVxuXG4gIGdldCBkZWZhdWx0TGFuZ3VhZ2VDb25maWcoKTogTGFuZ3VhZ2Uge1xuICAgIGlmKHRoaXMudmlld2VyQ29uZmlnICYmIHRoaXMudmlld2VyQ29uZmlnLmRlZmF1bHRMYW5ndWFnZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VzQ29uZmlnXG4gICAgICAgIC5maW5kKGxhbmcgPT4gbGFuZy5pcyh0aGlzLnZpZXdlckNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2UpKVxuICAgIH1cblxuICAgIGNvbnN0IHBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGlmIChwYXRobmFtZSkge1xuICAgICAgY29uc3QgcGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpO1xuICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHBhcnRzKSB7XG4gICAgICAgIGlmKHBhcnQgPT09IFwiXCIpXG4gICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgY29uc3QgbGFuZ09yTm90aGluZyA9IHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VzQ29uZmlnXG4gICAgICAgICAgLmZpbHRlcihzdXBwb3J0ZWQgPT4gc3VwcG9ydGVkLmlzKHBhcnQpKVxuICAgICAgICAgIC5zaGlmdCgpO1xuXG4gICAgICAgIGlmKGxhbmdPck5vdGhpbmcpXG4gICAgICAgICAgcmV0dXJuIGxhbmdPck5vdGhpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgIGlmIChxdWVyeVN0cmluZykge1xuICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XG4gICAgICBjb25zdCBjYW5kaWRhdGUgPSB1cmxQYXJhbXMuZ2V0KCdsYW5nJyk7XG4gICAgICBpZihjYW5kaWRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VzQ29uZmlnXG4gICAgICAgICAgLmZpbmQobGFuZyA9PiBsYW5nLmlzKGNhbmRpZGF0ZSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIENvbnN0YW50cy5kZWZhdWx0TGFuZ3VhZ2U7XG4gIH1cblxuICBpZlByZXNlbnRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlID8gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmZvcm1hdCA9PT0gXCJNaWNyb3NvZnQgUG93ZXJQb2ludFwiIDogZmFsc2U7XG4gIH1cblxuICBpZkV4Y2VsKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUgPyBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkuZm9ybWF0ID09PSBcIk1pY3Jvc29mdCBFeGNlbFwiIDogZmFsc2U7XG4gIH1cblxuICBpZkltYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUgPyB0aGlzLmZvcm1hdEljb24gPT09IFwiZmlsZS1pbWFnZVwiIDogZmFsc2U7XG4gIH1cblxuICBnZXRGaWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlLmd1aWQucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICB9XG5cbiAgb3Blbk1vZGFsKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihpZCk7XG4gIH1cblxuICBjbG9zZU1vZGFsKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoaWQpO1xuICB9XG5cbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmlld2VyU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBGaWxlTW9kZWxbXSkgPT4gdGhpcy5maWxlcyA9IGZpbGVzIHx8IFtdKTtcbiAgfVxuXG4gIHNlbGVjdEN1cnJlbnRPckZpcnN0UGFnZSgpIHtcbiAgICB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciA9IHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSAhPT0gMCA/IHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA6IDE7XG4gIH1cblxuICBnZXRQcmVsb2FkUGFnZUNvdW50KCkge1xuICAgIGNvbnN0IG1pblByZXNlbnRhdGlvblBhZ2VzVG9QcmVsb2FkID0gMztcbiAgICBjb25zdCBwcmVsb2FkUGFnZUNvdW50ID0gIXRoaXMuaWZQcmVzZW50YXRpb24oKVxuICAgICAgPyB0aGlzLnZpZXdlckNvbmZpZy5wcmVsb2FkUGFnZUNvdW50XG4gICAgICA6IHRoaXMudmlld2VyQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgIT09IDAgJiYgdGhpcy52aWV3ZXJDb25maWcucHJlbG9hZFBhZ2VDb3VudCA8IG1pblByZXNlbnRhdGlvblBhZ2VzVG9QcmVsb2FkXG4gICAgICAgID8gbWluUHJlc2VudGF0aW9uUGFnZXNUb1ByZWxvYWRcbiAgICAgICAgOiB0aGlzLnZpZXdlckNvbmZpZy5wcmVsb2FkUGFnZUNvdW50O1xuXG4gICAgcmV0dXJuIHByZWxvYWRQYWdlQ291bnQ7XG4gIH1cblxuICBzZWxlY3RGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBtb2RhbElkOiBzdHJpbmcsIGZpbGVUeXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0ge2d1aWQ6ICRldmVudCwgZmlsZVR5cGU6IGZpbGVUeXBlLCBwYXNzd29yZDogcGFzc3dvcmR9O1xuICAgIHRoaXMuZmlsZSA9IG51bGw7XG4gICAgdGhpcy5fdmlld2VyU2VydmljZS5sb2FkRmlsZSh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGZpbGU6IEZpbGVEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgICAgICB0aGlzLmZvcm1hdERpc2FibGVkID0gIXRoaXMuZmlsZTtcbiAgICAgICAgdGhpcy5wYWdlc1RvUHJlbG9hZCA9IFtdO1xuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgIHRoaXMuY3JlZGVudGlhbHMuZmlsZVR5cGUgPSBmaWxlLmZpbGVUeXBlO1xuICAgICAgICAgIHRoaXMuZm9ybWF0SWNvbiA9IHRoaXMuZmlsZSA/IEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5pY29uIDogbnVsbDtcbiAgICAgICAgICBpZiAoZmlsZS5wYWdlcyAmJiBmaWxlLnBhZ2VzWzBdKSB7XG4gICAgICAgICAgICB0aGlzLl9wYWdlSGVpZ2h0ID0gZmlsZS5wYWdlc1swXS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9wYWdlV2lkdGggPSBmaWxlLnBhZ2VzWzBdLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy56b29tT3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy50aW1lck9wdGlvbnMgPSB0aGlzLmdldFRpbWVyT3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vY29weSBwYWdlcyB0byB0aHVtYm5haWxzXG4gICAgICAgICAgdGhpcy5maWxlLnRodW1ibmFpbHMgPSBmaWxlLnBhZ2VzLnNsaWNlKCk7XG5cbiAgICAgICAgICBjb25zdCBjb3VudFBhZ2VzVG9QcmVsb2FkID0gdGhpcy5nZXRQcmVsb2FkUGFnZUNvdW50KCk7XG4gICAgICAgICAgY29uc3QgY291bnRQYWdlcyA9IGZpbGUucGFnZXMgPyBmaWxlLnBhZ2VzLmxlbmd0aCA6IDA7XG4gICAgICAgICAgY29uc3QgY291bnRQYWdlc1RvTG9hZCA9IGNvdW50UGFnZXNUb1ByZWxvYWQgPT09IDBcbiAgICAgICAgICAgID8gY291bnRQYWdlcyA6IGNvdW50UGFnZXNUb1ByZWxvYWQgPiBjb3VudFBhZ2VzXG4gICAgICAgICAgICAgID8gY291bnRQYWdlc1xuICAgICAgICAgICAgICA6IGNvdW50UGFnZXNUb1ByZWxvYWQ7XG5cbiAgICAgICAgICAvL3JldHJpZXZlIGFsbCBwYWdlcyBvciBudW1iZXIgb2YgcGFnZXMgdG8gcHJlbG9hZFxuICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKDEsIGNvdW50UGFnZXNUb0xvYWQpO1xuXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgPSAxO1xuICAgICAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jb3VudFBhZ2VzID0gY291bnRQYWdlcztcbiAgICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgPSB0aGlzLnNlbGVjdGVkUGFnZU51bWJlcjtcbiAgICAgICAgICB0aGlzLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xuICAgICAgICAgIHRoaXMuc2hvd1RodW1ibmFpbHMgPSB0aGlzLmlmUHJlc2VudGF0aW9uKCk7XG4gICAgICAgICAgdGhpcy5ydW5QcmVzZW50YXRpb24gPSBmYWxzZTtcbiAgICAgICAgICBpZiAoIXRoaXMuX3NlYXJjaFRlcm1Gcm9tR2V0UXVlcnkpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlYXJjaFRlcm1Gb3JCYWNrZ3JvdW5kU2VydmljZSA9IGZpbGUuc2VhcmNoVGVybTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3NlYXJjaFRlcm1Gb3JCYWNrZ3JvdW5kU2VydmljZSBcbiAgICAgICAgICAgICAgJiYgdGhpcy5fc2VhcmNoVGVybUZvckJhY2tncm91bmRTZXJ2aWNlICE9PSBudWxsIFxuICAgICAgICAgICAgICAgICAmJiB0aGlzLl9zZWFyY2hUZXJtRm9yQmFja2dyb3VuZFNlcnZpY2UgIT09ICcnKSB7XG4gICAgICAgICAgIFxuICAgICAgICAgICBpZih0aGlzLl9zZWFyY2hFbGVtZW50KSB7XG4gICAgICAgICAgICAgdGhpcy5fc2VhcmNoRWxlbWVudC5zZXRUZXh0KHRoaXMuX3NlYXJjaFRlcm1Gb3JCYWNrZ3JvdW5kU2VydmljZSk7XG4gICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICApO1xuICAgIGlmIChtb2RhbElkKSB7XG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UobW9kYWxJZCk7XG4gICAgfVxuICAgIHRoaXMuY2xlYXJEYXRhKCk7XG4gIH1cblxuICBwcmVsb2FkUGFnZXMoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcbiAgICBmb3IgKGxldCBwYWdlTnVtYmVyID0gc3RhcnQ7IHBhZ2VOdW1iZXIgPD0gZW5kOyBwYWdlTnVtYmVyKyspIHtcbiAgICAgIGlmKHRoaXMucGFnZXNUb1ByZWxvYWQuaW5kZXhPZihwYWdlTnVtYmVyKSAhPT0gLTEpe1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFnZSA9IHRoaXMuZmlsZS5wYWdlcy5maW5kKHAgPT4gcC5udW1iZXIgPT09IHBhZ2VOdW1iZXIpO1xuICAgICAgaWYocGFnZSAmJiBwYWdlLmRhdGEpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucGFnZXNUb1ByZWxvYWQucHVzaChwYWdlTnVtYmVyKTtcblxuICAgICAgdGhpcy5fdmlld2VyU2VydmljZS5sb2FkUGFnZSh0aGlzLmNyZWRlbnRpYWxzLCBwYWdlTnVtYmVyKS5zdWJzY3JpYmUoKG1vZGVsOiBQYWdlTW9kZWwpID0+IHtcbiAgICAgICAgaWYobW9kZWwuZGF0YSkge1xuICAgICAgICAgIG1vZGVsLmRhdGEgPSBtb2RlbC5kYXRhLnJlcGxhY2UoLz5cXHMrPC9nLCAnPjwnKS5yZXBsYWNlKC9cXHVGRUZGL2csICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmlsZS5wYWdlc1twYWdlTnVtYmVyIC0gMV0uZGF0YSA9IG1vZGVsLmRhdGE7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsZS50aHVtYm5haWxzKSB7XG4gICAgICAgICAgdGhpcy5maWxlLnRodW1ibmFpbHNbcGFnZU51bWJlciAtIDFdLmRhdGEgPSBtb2RlbC5kYXRhO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLnVwbG9hZChudWxsLCAkZXZlbnQsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKCh1cGxvYWRlZERvY3VtZW50OiBhbnkpID0+IHtcbiAgICAgIGlmICh0aGlzLmZpbGVQYXJhbSAhPT0gJycpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RGaWxlKHVwbG9hZGVkRG9jdW1lbnQuZ3VpZCwgJycsICcnLCAnJyk7XG4gICAgICAgIHRoaXMuZmlsZVBhcmFtID0gJyc7XG4gICAgICAgIHRoaXMuZmlsZVR5cGVQYXJhbSA9ICcnO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5leHRQYWdlKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGlmICh0aGlzLmludGVydmFsVGltZXIgJiYgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlICsgMSA+IHRoaXMuY291bnRQYWdlcykge1xuICAgICAgdGhpcy5pbnRlcnZhbFRpbWVyLnN0b3AoKTtcbiAgICAgIHRoaXMuaW50ZXJ2YWxUaW1lID0gMDtcbiAgICB9XG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLm5leHRQYWdlKCk7XG4gIH1cblxuICBwcmV2UGFnZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UucHJldlBhZ2UoKTtcbiAgfVxuXG4gIHRvTGFzdFBhZ2UoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLnRvTGFzdFBhZ2UoKTtcbiAgfVxuXG4gIHRvRmlyc3RQYWdlKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS50b0ZpcnN0UGFnZSgpO1xuICB9XG5cbiAgem9vbUluKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGlmICh0aGlzLl96b29tIDwgNDkwKSB7XG4gICAgICB0aGlzLnpvb20gPSB0aGlzLl96b29tICsgMTA7XG4gICAgfVxuICB9XG5cbiAgem9vbU91dCgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBpZiAodGhpcy5fem9vbSA+IDMwKSB7XG4gICAgICB0aGlzLnpvb20gPSB0aGlzLl96b29tIC0gMTA7XG4gICAgfVxuICB9XG5cbiAgZmlsZURyb3BwZWQoJGV2ZW50KXtcbiAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID0gJGV2ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBwdFRvUHgocHQ6IG51bWJlcikge1xuICAgIC8vcHQgKiA5NiAvIDcyID0gcHguXG4gICAgcmV0dXJuIHB0ICogOTYgLyA3MjtcbiAgfVxuXG4gIGdldEZpdFRvV2lkdGgoKSB7XG4gICAgLy8gSW1hZ2VzIGFuZCBFeGNlbC1yZWxhdGVkIGZpbGVzIHJlY2VpdmluZyBkaW1lbnNpb25zIGluIHB4IGZyb20gc2VydmVyXG4gICAgY29uc3QgcGFnZVdpZHRoID0gdGhpcy5mb3JtYXRJY29uICYmICh0aGlzLmlmRXhjZWwoKSB8fCB0aGlzLmlmSW1hZ2UoKSkgPyB0aGlzLl9wYWdlV2lkdGggOiB0aGlzLnB0VG9QeCh0aGlzLl9wYWdlV2lkdGgpO1xuICAgIGNvbnN0IHBhZ2VIZWlnaHQgPSB0aGlzLmZvcm1hdEljb24gJiYgKHRoaXMuaWZFeGNlbCgpIHx8IHRoaXMuaWZJbWFnZSgpKSA/IHRoaXMuX3BhZ2VIZWlnaHQgOiB0aGlzLnB0VG9QeCh0aGlzLl9wYWdlSGVpZ2h0KTtcbiAgICBjb25zdCBvZmZzZXRXaWR0aCA9IHBhZ2VXaWR0aCA/IHBhZ2VXaWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgY29uc3QgcHJlc2VudGF0aW9uVGh1bWJuYWlscyA9IHRoaXMuaXNEZXNrdG9wICYmIHRoaXMuaWZQcmVzZW50YXRpb24oKSAmJiAhdGhpcy5ydW5QcmVzZW50YXRpb247XG5cbiAgICBpZiAoIXRoaXMucnVuUHJlc2VudGF0aW9uKSB7XG4gICAgICByZXR1cm4gKHBhZ2VIZWlnaHQgPiBwYWdlV2lkdGggJiYgTWF0aC5yb3VuZChvZmZzZXRXaWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSA8IDIpID8gMjAwIC0gTWF0aC5yb3VuZChvZmZzZXRXaWR0aCAqIDEwMCAvIChwcmVzZW50YXRpb25UaHVtYm5haWxzID8gd2luZG93LmlubmVyV2lkdGggLSBDb25zdGFudHMudGh1bWJuYWlsc1dpZHRoIC0gQ29uc3RhbnRzLnNjcm9sbFdpZHRoIDogd2luZG93LmlubmVyV2lkdGgpKVxuICAgICAgICA6ICghdGhpcy5pc0Rlc2t0b3AgPyBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lcldpZHRoICogMTAwIC8gb2Zmc2V0V2lkdGgpXG4gICAgICAgICAgOiBNYXRoLnJvdW5kKCgocHJlc2VudGF0aW9uVGh1bWJuYWlscyA/IHdpbmRvdy5pbm5lcldpZHRoIC0gQ29uc3RhbnRzLnRodW1ibmFpbHNXaWR0aCAtIENvbnN0YW50cy5zY3JvbGxXaWR0aFxuICAgICAgICAgICAgOiB3aW5kb3cuaW5uZXJIZWlnaHQpIC8gb2Zmc2V0V2lkdGgpICogMTAwKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggKiAxMDAgLyBvZmZzZXRXaWR0aCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Rml0VG9IZWlnaHQoKSB7XG4gICAgY29uc3QgcGFnZVdpZHRoID0gdGhpcy5mb3JtYXRJY29uICYmICh0aGlzLmlmRXhjZWwoKSB8fCB0aGlzLmlmSW1hZ2UoKSkgPyB0aGlzLl9wYWdlV2lkdGggOiB0aGlzLnB0VG9QeCh0aGlzLl9wYWdlV2lkdGgpO1xuICAgIGNvbnN0IHBhZ2VIZWlnaHQgPSB0aGlzLmZvcm1hdEljb24gJiYgKHRoaXMuaWZFeGNlbCgpIHx8IHRoaXMuaWZJbWFnZSgpKSA/IHRoaXMuX3BhZ2VIZWlnaHQgOiB0aGlzLnB0VG9QeCh0aGlzLl9wYWdlSGVpZ2h0KTtcbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCkgPyB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMDAgOiB3aW5kb3cuaW5uZXJIZWlnaHQgKyAxMDA7XG4gICAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gcGFnZUhlaWdodCA/IHBhZ2VIZWlnaHQgOiB3aW5kb3dIZWlnaHQ7XG5cbiAgICBpZiAoIXRoaXMuaWZQcmVzZW50YXRpb24oKSAmJiAhKHRoaXMuaWZJbWFnZSgpKSkge1xuICAgICAgcmV0dXJuIChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoKSA/IE1hdGgucm91bmQod2luZG93SGVpZ2h0ICogMTAwIC8gb2Zmc2V0SGVpZ2h0KSA6IE1hdGgucm91bmQob2Zmc2V0SGVpZ2h0ICogMTAwIC8gd2luZG93SGVpZ2h0KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaWZQcmVzZW50YXRpb24oKSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKHdpbmRvdy5pbm5lckhlaWdodCAtIENvbnN0YW50cy50b3BiYXJXaWR0aCkgKiAxMDAgLyAoIXRoaXMucnVuUHJlc2VudGF0aW9uID8gb2Zmc2V0SGVpZ2h0ICsgQ29uc3RhbnRzLmRvY3VtZW50TWFyZ2luICogMiArIENvbnN0YW50cy5zY3JvbGxXaWR0aFxuICAgICAgICA6IG9mZnNldEhlaWdodCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pZkltYWdlKCkpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKCh3aW5kb3cuaW5uZXJIZWlnaHQgLSBDb25zdGFudHMudG9wYmFyV2lkdGgpICogMTAwIC8gKG9mZnNldEhlaWdodCArIENvbnN0YW50cy5kb2N1bWVudE1hcmdpbiAqIDIgKyBDb25zdGFudHMuc2Nyb2xsV2lkdGgpKTtcbiAgICB9XG4gIH1cblxuICB6b29tT3B0aW9ucygpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0Rml0VG9XaWR0aCgpO1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0Rml0VG9IZWlnaHQoKTtcbiAgICByZXR1cm4gdGhpcy56b29tU2VydmljZS56b29tT3B0aW9ucyh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGdldFRpbWVyT3B0aW9ucygpIHtcbiAgICByZXR1cm4gW3t2YWx1ZTogMCwgbmFtZTogJ05vbmUnLCBzZXBhcmF0b3I6IGZhbHNlfSxcbiAgICAgIHt2YWx1ZTogNSwgbmFtZTogJzUgc2VjJywgc2VwYXJhdG9yOiBmYWxzZX0sXG4gICAgICB7dmFsdWU6IDEwLCBuYW1lOiAnMTAgc2VjJywgc2VwYXJhdG9yOiBmYWxzZX0sXG4gICAgICB7dmFsdWU6IDE1LCBuYW1lOiAnMTUgc2VjJywgc2VwYXJhdG9yOiBmYWxzZX0sXG4gICAgICB7dmFsdWU6IDMwLCBuYW1lOiAnMzAgc2VjJywgc2VwYXJhdG9yOiBmYWxzZX1dO1xuICB9XG5cbiAgc2V0IHpvb20oem9vbSkge1xuICAgIHRoaXMuX3pvb20gPSB6b29tO1xuICAgIHRoaXMuem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLl96b29tKTtcbiAgfVxuXG4gIGdldCB6b29tKCkge1xuICAgIHJldHVybiB0aGlzLl96b29tO1xuICB9XG5cbiAgc2VsZWN0Wm9vbSgkZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuem9vbSA9ICRldmVudC52YWx1ZTtcbiAgfVxuXG4gIHJvdGF0ZShkZWc6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2U7XG4gICAgY29uc3QgcGFnZU1vZGVsID0gdGhpcy5maWxlLnBhZ2VzW3BhZ2VOdW1iZXIgLSAxXTtcblxuICAgIGlmICh0aGlzLnNhdmVSb3RhdGVTdGF0ZUNvbmZpZyAmJiB0aGlzLmZpbGUpIHtcbiAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2Uucm90YXRlKHRoaXMuY3JlZGVudGlhbHMsIGRlZywgcGFnZU51bWJlcikuc3Vic2NyaWJlKChwYWdlOiBQYWdlTW9kZWwpID0+IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZERhdGEgPSBwYWdlLmRhdGEucmVwbGFjZSgvPlxccys8L2csJz48JylcbiAgICAgICAgICAucmVwbGFjZSgvXFx1RkVGRi9nLFwiXCIpO1xuICAgICAgICBwYWdlLmRhdGEgPSB1cGRhdGVkRGF0YTtcbiAgICAgICAgdGhpcy5maWxlLnBhZ2VzW3BhZ2VOdW1iZXIgLSAxXSA9IHBhZ2U7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsZSAmJiB0aGlzLmZpbGUucGFnZXMgJiYgcGFnZU1vZGVsKSB7XG4gICAgICAgICAgY29uc3QgYW5nbGUgPSBwYWdlTW9kZWwuYW5nbGUgKyBkZWc7XG4gICAgICAgICAgaWYgKGFuZ2xlID4gMzYwKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUFuZ2xlKHBhZ2VNb2RlbCwgOTApO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYW5nbGUgPCAtMzYwKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUFuZ2xlKHBhZ2VNb2RlbCwgLTkwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBbmdsZShwYWdlTW9kZWwsIGFuZ2xlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VBbmdsZShwYWdlOiBQYWdlTW9kZWwsIGFuZ2xlOiBudW1iZXIpIHtcbiAgICBwYWdlLmFuZ2xlID0gYW5nbGU7XG4gIH1cblxuICBkb3dubG9hZEZpbGUoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLl92aWV3ZXJTZXJ2aWNlLmdldERvd25sb2FkVXJsKHRoaXMuY3JlZGVudGlhbHMpKTtcbiAgfVxuXG4gIHByaW50RmlsZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcblxuICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UubG9hZFByaW50UGRmKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZGF0YTogQmxvYikgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyUHJpbnRTZXJ2aWNlLmNoYW5nZUJsb2IoZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuVGh1bWJuYWlscygpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcblxuICAgIGlmICh0aGlzLnNob3dUaHVtYm5haWxzKSB7XG4gICAgICB0aGlzLnNob3dUaHVtYm5haWxzID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5ydW5QcmVzZW50YXRpb24gPSBmYWxzZTtcbiAgICB0aGlzLnNob3dUaHVtYm5haWxzID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJEYXRhKCkge1xuICAgIGlmICghdGhpcy5maWxlIHx8ICF0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwYWdlIG9mIHRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgcGFnZS5kYXRhID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBvblJpZ2h0Q2xpY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5hYmxlUmlnaHRDbGlja0NvbmZpZztcbiAgfVxuXG4gIG9wZW5TZWFyY2goc2hvdyA9IHRydWUpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBpZiAoc2hvdykge1xuICAgICAgdGhpcy5zaG93U2VhcmNoID0gIXRoaXMuc2hvd1NlYXJjaDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNob3dTZWFyY2ggPSBzaG93O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaFpvb20oKSB7XG4gICAgaWYgKHRoaXMuZmlsZSkge1xuICAgICAgdGhpcy5mb3JtYXRJY29uID0gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmljb247XG4gICAgICB0aGlzLnpvb20gPSB0aGlzLl93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpICYmICEodGhpcy5pZkltYWdlKCkgfHwgdGhpcy5pZlByZXNlbnRhdGlvbigpKSA/IDEwMFxuICAgICAgICA6ICh0aGlzLmlmSW1hZ2UoKSA/IHRoaXMuZ2V0Rml0VG9IZWlnaHQoKVxuICAgICAgICAgIDogdGhpcy5nZXRGaXRUb1dpZHRoKCkpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEN1cnJlbnRQYWdlKHBhZ2VOdW1iZXIpXG4gIHtcbiAgICB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciA9IHBhZ2VOdW1iZXI7XG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gcGFnZU51bWJlcjtcbiAgICBpZiAodGhpcy5ydW5QcmVzZW50YXRpb24gJiYgdGhpcy5pbnRlcnZhbFRpbWUgPiAwICYmIHRoaXMuaW50ZXJ2YWxUaW1lci5zdGF0ZSAhPT0gMykge1xuICAgICAgdGhpcy5yZXNldEludGVydmFsKCk7XG4gICAgICBpZiAodGhpcy5zbGlkZUluUmFuZ2UoKSkge1xuICAgICAgICB0aGlzLnN0YXJ0Q291bnREb3duKHRoaXMuaW50ZXJ2YWxUaW1lLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk1vdXNlV2hlZWxVcCgpXG4gIHtcbiAgICB0aGlzLnN0YXJ0U2Nyb2xsVGltZSA9IERhdGUubm93KCk7XG4gICAgaWYgKHRoaXMuaWZQcmVzZW50YXRpb24oKSAmJiB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciAhPT0gMSkge1xuICAgICAgaWYgKHRoaXMuc3RhcnRTY3JvbGxUaW1lIC0gdGhpcy5lbmRTY3JvbGxUaW1lID4gMzAwICYmIHRoaXMudmVydFNjcm9sbEVuZGVkKHRydWUpKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyID0gdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgLSAxO1xuICAgICAgICB0aGlzLmVuZFNjcm9sbFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VXaGVlbERvd24oKVxuICB7XG4gICAgdGhpcy5zdGFydFNjcm9sbFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGlmICh0aGlzLmlmUHJlc2VudGF0aW9uKCkgJiYgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgIT09IHRoaXMuZmlsZS5wYWdlcy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXJ0U2Nyb2xsVGltZSAtIHRoaXMuZW5kU2Nyb2xsVGltZSA+IDMwMCAmJiB0aGlzLnZlcnRTY3JvbGxFbmRlZChmYWxzZSkpIHtcbiAgICAgICAgdGhpcy5zdGFydFNjcm9sbFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBpZiAodGhpcy5maWxlLnBhZ2VzW3RoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyXSAmJiAhdGhpcy5maWxlLnBhZ2VzW3RoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyXS5kYXRhKSB7XG4gICAgICAgICAgdGhpcy5wcmVsb2FkUGFnZXModGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIsIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyICsgMSk7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgPSB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgPSB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciArIDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmRTY3JvbGxUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2ZXJ0U2Nyb2xsRW5kZWQob25Ub3A6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBnZERvY3VtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2QtZG9jdW1lbnQnKVswXSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAob25Ub3ApXG4gICAge1xuICAgICAgcmV0dXJuIGdkRG9jdW1lbnQuc2Nyb2xsVG9wID09PSAwO1xuICAgIH1cbiAgICBlbHNlIHJldHVybiBnZERvY3VtZW50Lm9mZnNldEhlaWdodCArIGdkRG9jdW1lbnQuc2Nyb2xsVG9wID49IGdkRG9jdW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICB9XG5cbiAgdG9nZ2xlVGltZXIoJGV2ZW50KXtcbiAgICB0aGlzLmludGVydmFsVGltZSA9ICRldmVudC52YWx1ZTtcbiAgICBpZiAodGhpcy5pbnRlcnZhbFRpbWUgIT09IDApIHtcbiAgICAgIGlmICh0aGlzLmludGVydmFsVGltZXIgJiYgdGhpcy5pbnRlcnZhbFRpbWVyLnN0YXRlID09PSAxKSB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxUaW1lci5zdG9wKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXJ0Q291bnREb3duKHRoaXMuaW50ZXJ2YWxUaW1lKTtcbiAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCh0aGlzLmludGVydmFsVGltZSk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICB0aGlzLmludGVydmFsVGltZXIuc3RvcCgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dDb3VudERvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJ2YWxUaW1lID4gMCAmJiAodGhpcy5zbGlkZUluUmFuZ2UoKSlcbiAgfVxuXG4gIHN0YXJ0Q291bnREb3duKHNlY29uZHM6IG51bWJlciwgcmVzZXQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5jb3VudERvd25JbnRlcnZhbCk7XG4gICAgaWYgKHNlY29uZHMgPiAwKSB7XG4gICAgICB0aGlzLnNlY29uZHNMZWZ0ID0gc2Vjb25kcztcbiAgICAgIHNlY29uZHMtLTtcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2Vjb25kc0xlZnQgPSBzZWNvbmRzO1xuICAgICAgICAgIHNlY29uZHMtLTtcbiAgICAgICAgICBpZiAoc2Vjb25kcyA9PT0gMCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgfVxuICAgICAgfSwgMTAwMCk7XG5cbiAgICAgIHRoaXMuY291bnREb3duSW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0SW50ZXJ2YWwoaW50ZXJ2YWxUaW1lOiBudW1iZXIpIHtcbiAgICB0aGlzLmludGVydmFsVGltZXIgPSBuZXcgSW50ZXJ2YWxUaW1lcigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zbGlkZUluUmFuZ2UoKSkge1xuICAgICAgICB0aGlzLm5leHRQYWdlKCk7XG4gICAgICAgIGlmICh0aGlzLnNsaWRlSW5SYW5nZSgpKSB7XG4gICAgICAgICAgdGhpcy5zdGFydENvdW50RG93bihpbnRlcnZhbFRpbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxUaW1lci5zdG9wKCk7XG4gICAgICB9XG4gICAgfSwgaW50ZXJ2YWxUaW1lICogMTAwMCk7XG4gIH1cblxuICBwcml2YXRlIHNsaWRlSW5SYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlICsgMSA8PSB0aGlzLmNvdW50UGFnZXM7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0SW50ZXJ2YWwoKSB7XG4gICAgdGhpcy5pbnRlcnZhbFRpbWVyLnN0b3AoKTtcbiAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwodGhpcy5pbnRlcnZhbFRpbWUpO1xuICB9XG5cbiAgcGF1c2VQcmVzZW50aW5nKCkge1xuICAgIHRoaXMuaW50ZXJ2YWxUaW1lci5wYXVzZSgpO1xuICAgIHRoaXMuc3RhcnRDb3VudERvd24oMCwgdHJ1ZSk7XG4gIH1cblxuICByZXN1bWVQcmVzZW50aW5nKCkge1xuICAgIHRoaXMuaW50ZXJ2YWxUaW1lci5yZXN1bWUoKTtcbiAgICBjb25zdCBzZWNvbmRzUmVtYWluaW5nID0gTWF0aC5yb3VuZCh0aGlzLmludGVydmFsVGltZXIucmVtYWluaW5nLzEwMDApO1xuICAgIHRoaXMuc3RhcnRDb3VudERvd24oc2Vjb25kc1JlbWFpbmluZyk7XG4gIH1cblxuICBwcmVzZW50YXRpb25SdW5uaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmludGVydmFsVGltZXIgJiYgdGhpcy5pbnRlcnZhbFRpbWVyLnN0YXRlID09PSAxICYmIHRoaXMuc2xpZGVJblJhbmdlKCk7XG4gIH1cblxuICBwcmVzZW50YXRpb25QYXVzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJ2YWxUaW1lciAmJiB0aGlzLmludGVydmFsVGltZXIuc3RhdGUgPT09IDIgJiYgdGhpcy5zbGlkZUluUmFuZ2UoKTtcbiAgfVxuXG4gIHN0YXJ0UHJlc2VudGF0aW9uKCkge1xuICAgIHRoaXMuc2hvd1RodW1ibmFpbHMgPSBmYWxzZTtcbiAgICB0aGlzLm9wZW5GdWxsU2NyZWVuKCk7XG4gICAgdGhpcy5ydW5QcmVzZW50YXRpb24gPSAhdGhpcy5ydW5QcmVzZW50YXRpb247XG5cbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHNjcmVlbi5oZWlnaHQgPT09IHdpbmRvdy5pbm5lckhlaWdodCAmJiBzY3JlZW4ud2lkdGggPT09IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICB0aGlzLnpvb21TZXJ2aWNlLmNoYW5nZVpvb20od2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQgPCAxLjcgJiYgdGhpcy5fcGFnZVdpZHRoIC8gdGhpcy5fcGFnZUhlaWdodCA+IDEuN1xuICAgICAgICA/IHRoaXMuZ2V0Rml0VG9XaWR0aCgpIDogdGhpcy5nZXRGaXRUb0hlaWdodCgpKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgIH1cbiAgICB9LCA1MCk7XG4gIH1cblxuICBvcGVuRnVsbFNjcmVlbigpIHtcbiAgICBjb25zdCBkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50ICYge1xuICAgICAgbW96UmVxdWVzdEZ1bGxTY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgICAgIHdlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gICAgICBtc1JlcXVlc3RGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gICAgfTtcblxuICAgIGlmIChkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zLnJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICBkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zLnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgfSBlbHNlIGlmIChkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zLm1velJlcXVlc3RGdWxsU2NyZWVuKSB7IC8qIEZpcmVmb3ggKi9cbiAgICAgIGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHsgLyogQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXG4gICAgICBkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgfSBlbHNlIGlmIChkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zLm1zUmVxdWVzdEZ1bGxzY3JlZW4pIHsgLyogSUUvRWRnZSAqL1xuICAgICAgZG9jRWxtV2l0aEJyb3dzZXJzRnVsbFNjcmVlbkZ1bmN0aW9ucy5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgfVxuICAgIHRoaXMuaXNGdWxsU2NyZWVuID0gdHJ1ZTtcbiAgfVxuXG4gIGNsb3NlRnVsbFNjcmVlbihieUJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlKXtcbiAgICBpZiAoYnlCdXR0b24pIHtcbiAgICAgIGNvbnN0IGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMgPSBkb2N1bWVudCBhcyBEb2N1bWVudCAmIHtcbiAgICAgICAgbW96Q2FuY2VsRnVsbFNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICAgICAgICB3ZWJraXRFeGl0RnVsbHNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICAgICAgICBtc0V4aXRGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gICAgICB9O1xuICAgICAgaWYgKGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMuZXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zLm1vekNhbmNlbEZ1bGxTY3JlZW4pIHsgLyogRmlyZWZveCAqL1xuICAgICAgICBkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zLm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy53ZWJraXRFeGl0RnVsbHNjcmVlbikgeyAvKiBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cbiAgICAgICAgZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zLm1zRXhpdEZ1bGxzY3JlZW4pIHsgLyogSUUvRWRnZSAqL1xuICAgICAgICBkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zLm1zRXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbnRlcnZhbFRpbWVyKSB7XG4gICAgICB0aGlzLmludGVydmFsVGltZXIuc3RvcCgpO1xuICAgIH1cblxuICAgIHRoaXMuaXNGdWxsU2NyZWVuID0gZmFsc2U7XG4gICAgdGhpcy5ydW5QcmVzZW50YXRpb24gPSBmYWxzZTtcbiAgICB0aGlzLnNob3dUaHVtYm5haWxzID0gdHJ1ZTtcbiAgICB0aGlzLmludGVydmFsVGltZSA9IDA7XG4gICAgdGhpcy5zdGFydENvdW50RG93bigwKTtcbiAgICB0aGlzLnJlZnJlc2hab29tKCk7XG4gIH1cblxuICBzZWxlY3RMYW5ndWFnZShzZWxlY3RlZExhbmd1YWdlOiBPcHRpb24pIHtcbiAgICB0aGlzLnNlbGVjdGVkTGFuZ3VhZ2UgPSBzZWxlY3RlZExhbmd1YWdlO1xuICAgIHRoaXMudHJhbnNsYXRlLnVzZShzZWxlY3RlZExhbmd1YWdlLnZhbHVlKTtcbiAgfVxufVxuIl19