/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, ChangeDetectorRef } from '@angular/core';
import { ViewerService } from "./viewer.service";
import { ModalService, UploadFilesService, NavigateService, PagePreloadService, PageModel, ZoomService, RenderPrintService, FileUtil, PasswordService, CommonModals, LoadingMaskService } from "@groupdocs.examples.angular/common-components";
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
            if (this.fileParam) {
                this.isLoading = true;
                this.selectFile(this.fileParam, '', '');
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
     * @param {?} pages
     * @return {?}
     */
    copyThumbnails(pages) {
        /** @type {?} */
        const thumbnails = pages.slice();
        for (let thumbIndex = 0; thumbIndex < thumbnails.length; thumbIndex++) {
            /** @type {?} */
            const thumb = thumbnails[thumbIndex];
            if (!thumb.data) {
                /** @type {?} */
                const emptyThumb = new PageModel();
                emptyThumb.number = thumb.number;
                emptyThumb.data = `<div style="height:100%;display:grid;color:#bfbfbf"><div style="font-size:10vw;margin:auto;text-align:center;">${thumb.number}</div></div>`;
                emptyThumb.width = 800;
                emptyThumb.height = 800;
                thumbnails[thumbIndex] = emptyThumb;
            }
        }
        return thumbnails;
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
            this.pagesToPreload = [];
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
                const preloadPageCount = this.getPreloadPageCount();
                /** @type {?} */
                const countPages = file.pages ? file.pages.length : 0;
                if (preloadPageCount > 0) {
                    this.file.thumbnails = this.copyThumbnails(file.pages);
                    this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                }
                this.selectedPageNumber = 1;
                this._navigateService.countPages = countPages;
                this._navigateService.currentPage = this.selectedPageNumber;
                this.countPages = countPages;
                this.showThumbnails = this.ifPresentation();
                this.runPresentation = false;
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
            this.pagesToPreload.push(pageNumber);
            this._viewerService.loadPage(this.credentials, pageNumber).subscribe((/**
             * @param {?} page
             * @return {?}
             */
            (page) => {
                if (page.data) {
                    page.data = page.data.replace(/>\s+</g, '><').replace(/\uFEFF/g, '');
                }
                this.file.pages[pageNumber - 1] = page;
                if (this.file.thumbnails) {
                    this.file.thumbnails[pageNumber - 1] = page;
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
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\r\n<div class=\"wrapper\" (contextmenu)=\"onRightClick()\">\r\n  <div class=\"top-panel\" *ngIf=\"!runPresentation\">\r\n    <gd-logo [logo]=\"'viewer'\" icon=\"eye\"></gd-logo>\r\n    <gd-top-toolbar class=\"toolbar-panel\">\r\n      <gd-button [icon]=\"'folder-open'\" title=\"{{'Browse files' | translate}}\" (click)=\"openModal(browseFilesModal)\"\r\n                 *ngIf=\"browseConfig\" ></gd-button>\r\n\r\n      <gd-select class=\"mobile-hide select-left\" [disabled]=\"formatDisabled\" [options]=\"options\" (selected)=\"selectZoom($event)\"\r\n                 [showSelected]=\"{ name: zoom+'%', value : zoom}\" *ngIf=\"zoomConfig\" ></gd-select>\r\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" title=\"{{'Zoom In' | translate}}\" (click)=\"zoomIn()\"\r\n                 *ngIf=\"zoomConfig\" ></gd-button>\r\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" title=\"{{'Zoom Out' | translate}}\"\r\n                 (click)=\"zoomOut()\" *ngIf=\"zoomConfig\" ></gd-button>\r\n\r\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-left'\" title=\"{{'First Page' | translate }}\"\r\n                 (click)=\"toFirstPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\r\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" title=\"{{'Previous Page' | translate}}\"\r\n                 (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\r\n      <div class=\"current-page-number\" [ngClass]=\"{'active': !formatDisabled}\" *ngIf=\"formatIcon !== 'file-excel'\">{{currentPage}}/{{countPages}}</div>\r\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" title=\"{{'Next Page' | translate }}\"\r\n                 (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\r\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-right'\" title=\"{{'Last Page' | translate }}\"\r\n                 (click)=\"toLastPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\r\n\r\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'undo'\" title=\"{{'Rotate CCW' | translate}}\" (click)=\"rotate(-90)\"\r\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\r\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'redo'\" title=\"{{'Rotate CW' | translate}}\"  (click)=\"rotate(90)\"\r\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\r\n\r\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" title=\"{{'Download' | translate}}\"\r\n                 (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\r\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" title=\"{{'Print' | translate}}\" (click)=\"printFile()\"\r\n                 *ngIf=\"printConfig\" ></gd-button>\r\n\r\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search'\" title=\"{{'Search' | translate}}\" (click)=\"openSearch()\"\r\n                 *ngIf=\"searchConfig && !ifPresentation()\" ></gd-button>\r\n      <gd-search (hidePanel)=\"showSearch = !$event\" *ngIf=\"showSearch\" ></gd-search>\r\n\r\n      <div class=\"toolbar-panel-right\">\r\n        <div class=\"language-menu mobile-hide\" *ngIf=\"showLanguageMenu\">\r\n          <gd-select class=\"select-language-menu\" [disabled]=\"false\" [options]=\"supportedLanguages\"\r\n            (selected)=\"selectLanguage($event)\" [showSelected]=\"selectedLanguage\"></gd-select>\r\n        </div>\r\n\r\n        <gd-button class=\"thumbnails-button btn-right\" [disabled]=\"formatDisabled\" [icon]=\"'th-large'\" title=\"{{'Thumbnails' | translate}}\"\r\n                   (click)=\"openThumbnails()\" *ngIf=\"thumbnailsConfig && isDesktop && formatIcon !== 'file-excel' && (!ifPresentation() ||\r\n                   ifPresentation() && runPresentation)\"></gd-button>\r\n        <gd-button class=\"thumbnails-button mobile-hide btn-right smp-start-stop\" [disabled]=\"formatDisabled\" [icon]=\"'play'\" title=\"{{'Run presentation' | translate}}\"\r\n                   (click)=\"startPresentation()\" *ngIf=\"ifPresentation() && !runPresentation\">{{'Present' | translate}}</gd-button>\r\n      </div>\r\n    </gd-top-toolbar>\r\n  </div>\r\n  <div class=\"top-panel\" *ngIf=\"runPresentation\">\r\n    <gd-top-toolbar class=\"toolbar-panel\">\r\n      <div class=\"slides-title\">Viewer</div>\r\n      <div class=\"slides-filename\">{{getFileName()}}</div>\r\n      <div class=\"slides-buttons\">\r\n        <gd-select class=\"mobile-hide select-right\" [disabled]=\"formatDisabled\" [options]=\"timerOptions\" (selected)=\"toggleTimer($event)\"\r\n        [icon]=\"'clock'\" *ngIf=\"zoomConfig\" ></gd-select>\r\n        <gd-button class=\"mobile-hide\" *ngIf=\"presentationRunning()\" [disabled]=\"formatDisabled\" [icon]=\"'pause'\" title=\"{{'Pause presenting' | translate}}\"\r\n        (click)=\"pausePresenting()\"></gd-button>\r\n        <gd-button class=\"mobile-hide\" *ngIf=\"presentationPaused()\" [disabled]=\"formatDisabled\" [icon]=\"'step-forward'\" title=\"{{'Resume presenting' | translate}}\"\r\n        (click)=\"resumePresenting()\"></gd-button>\r\n        <gd-button class=\"mobile-hide btn-right smp-start-stop\" [disabled]=\"formatDisabled\" [icon]=\"'stop'\" title=\"{{'Stop presenting' | translate}}\"\r\n        (click)=\"closeFullScreen(true)\">{{'Stop' | translate}} </gd-button>\r\n      </div>\r\n    </gd-top-toolbar>\r\n  </div>\r\n  <div class=\"doc-panel\" *ngIf=\"file\" #docPanel>\r\n    <gd-thumbnails *ngIf=\"showThumbnails && !ifPresentation() && isDesktop\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\r\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\" (selectedPage)=\"selectCurrentPage($event)\"></gd-thumbnails>\r\n    <gd-thumbnails *ngIf=\"showThumbnails && ifPresentation() && !runPresentation && isDesktop\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\r\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\" (selectedPage)=\"selectCurrentPage($event)\" gdScrollable [isPresentation]=\"ifPresentation()\"></gd-thumbnails>\r\n\r\n    <gd-document class=\"gd-document\" *ngIf=\"(file &&\r\n                                            (ifExcel() && !htmlModeConfig) ||\r\n                                            (ifPresentation() && isDesktop && !runPresentation) ||\r\n                                            (!ifExcel() && !ifPresentation()))\" [file]=\"file\" [mode]=\"htmlModeConfig\" [showActiveSlide]=\"true\" gdScrollable\r\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" [selectedPage]=\"selectedPageNumber\" gdRenderPrint [htmlMode]=\"htmlModeConfig\" gdMouseWheel (mouseWheelUp)=\"onMouseWheelUp()\" (mouseWheelDown)=\"onMouseWheelDown()\"></gd-document>\r\n    <gd-excel-document class=\"gd-document\" *ngIf=\"file && ifExcel() && htmlModeConfig\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\r\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-excel-document>\r\n    <gd-run-presentation class=\"gd-document\" *ngIf=\"(file && ifPresentation() && runPresentation) ||\r\n                                                    (file && ifPresentation() && !isDesktop)\" [file]=\"file\" [currentPage]=\"currentPage\" [mode]=\"htmlModeConfig\"\r\n                                                    (selectedPage)=\"selectCurrentPage($event)\"\r\n                 [preloadPageCount]=\"0\"></gd-run-presentation>\r\n    <div class=\"slides-nav\" *ngIf=\"runPresentation\">\r\n      <div class=\"timer\" *ngIf=\"showCountDown()\">\r\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon><span [ngClass]=\"secondsLeft >= 10 ? 'seconds-remaining two-digits' : 'seconds-remaining'\">{{secondsLeft}}</span>\r\n      </div>\r\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\"\r\n      (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\r\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\"\r\n      (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\r\n    </div>\r\n  </div>\r\n\r\n  <gd-init-state [icon]=\"'eye'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\r\n    {{'Click' | translate}} <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> {{'to open file' | translate}}<br>\r\n    {{'Or drop file here' | translate}}\r\n  </gd-init-state>\r\n\r\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\r\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\r\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\r\n\r\n  <gd-error-modal></gd-error-modal>\r\n  <gd-password-required></gd-password-required>\r\n</div>\r\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.current-page-number{margin-left:7px;font-size:14px;color:#959da5;width:37px;height:37px;line-height:37px;text-align:center}.current-page-number.active{color:#fff}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}.toolbar-panel-right{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1;place-content:flex-end}.btn-right{margin-right:7px}.smp-start-stop ::ng-deep .button{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;border:1px solid;border-radius:5px;padding:0 10px!important}.language-menu{margin-right:15px}.select-language-menu ::ng-deep .select{width:100%}.select-language-menu ::ng-deep .select ::ng-deep .dropdown-menu{overflow-y:scroll;height:90%}.select-language-menu ::ng-deep .selected-value{max-width:100%}.thumbnails-button ::ng-deep .button{margin-left:0!important}::ng-deep .tools .button,::ng-deep .tools .nav-caret,::ng-deep .tools .selected-value{color:#fff!important}::ng-deep .tools .button.inactive,::ng-deep .tools .nav-caret.inactive,::ng-deep .tools .selected-value.inactive{color:#959da5!important}::ng-deep .tools .button{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .select-left .select{position:relative}::ng-deep .tools .select-left .dropdown-menu{top:40px;left:0}::ng-deep .tools .select-right .select{position:relative}::ng-deep .tools .select-right .dropdown-menu{top:40px;right:0}::ng-deep .tools .dropdown-menu .option{color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 15px!important}::ng-deep .tools .select{width:37px;height:37px;margin-left:7px;line-height:37px;text-align:center}::ng-deep .tools .slides-title{color:#fff;padding-left:12px;font-size:18px}::ng-deep .tools .slides-filename{-webkit-box-flex:1;flex-grow:1;text-align:center;color:#fff;text-overflow:ellipsis;white-space:nowrap;padding-left:20px;overflow:hidden}::ng-deep .tools .slides-buttons{display:-webkit-box;display:flex}::ng-deep .tools .slides-buttons ::ng-deep .select{color:#fff;cursor:pointer}::ng-deep .tools ::ng-deep .gd-nav-search-container .icon-button{margin:0 0 0 7px!important}.slides-nav{position:absolute;right:30px;bottom:30px;display:-webkit-box;display:flex}.slides-nav ::ng-deep .button{font-size:37px;background-color:#edf0f2;border-radius:3px}.slides-nav ::ng-deep .timer{font-size:42px;line-height:6px;color:#959da5;position:relative}.slides-nav ::ng-deep .timer .seconds-remaining{position:absolute;margin-left:5px;font-size:16px;top:18px;left:12px}.slides-nav ::ng-deep .timer .seconds-remaining.two-digits{left:6px!important}::ng-deep .page.presentation .gd-wrapper{pointer-events:none}@media (max-width:1037px){.current-page-number,.mobile-hide{display:none}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .tools .gd-nav-search-btn .icon-button{height:37px;width:37px}::ng-deep .tools .gd-nav-search-btn .button{font-size:14px}::ng-deep .tools .gd-nav-search-container{top:59px!important}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3ZpZXdlci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBVSxZQUFZLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFHTCxZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsU0FBUyxFQUNULFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLGVBQWUsRUFDRSxZQUFZLEVBQUUsa0JBQWtCLEVBQ2xELE1BQU0sK0NBQStDLENBQUM7QUFFdkQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGFBQWEsRUFBUyxNQUFNLCtDQUErQyxDQUFDO0FBRXBGLE9BQU8sRUFBQyxTQUFTLEVBQVcsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFPckQsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7OztJQTREN0IsWUFBb0IsY0FBNkIsRUFDN0IsYUFBMkIsRUFDbkMsYUFBa0MsRUFDbEMsa0JBQXNDLEVBQzlCLGdCQUFpQyxFQUN6QyxXQUF3QixFQUN4QixrQkFBc0MsRUFDOUIsbUJBQXVDLEVBQy9DLGVBQWdDLEVBQ3hCLGNBQTZCLEVBQzdCLG1CQUF1QyxFQUN2QyxHQUFzQixFQUN2QixTQUEyQjtRQVoxQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixrQkFBYSxHQUFi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QUFpQjs7SUFDakIsbUNBQXdCOztJQUN4QixrQ0FBc0I7O0lBQ3RCLDBDQUEyQjs7SUFDM0Isd0NBQWU7O0lBQ2YsNENBQXNCOztJQUN0Qiw0Q0FBdUI7O0lBQ3ZCLHlDQUE2Qjs7SUFDN0IsOENBQTRDOztJQUM1Qyx3Q0FBbUI7O0lBQ25CLHVDQUFtQjs7SUFDbkIsdUNBQW1COztJQUNuQiw0Q0FBOEI7O0lBRTlCLG1DQUFZOztJQUNaLHdDQUFtQjs7SUFDbkIseUNBQW9COztJQUNwQixxQ0FBUTs7SUFDUiwwQ0FBYTs7SUFDYiwwQ0FBcUI7O0lBQ3JCLDJDQUE2Qjs7SUFDN0IsK0NBQTBCOztJQUMxQix5Q0FBb0I7O0lBQ3BCLDRDQUF1Qjs7SUFDdkIsd0NBQW1COztJQUVuQix1Q0FBa0I7O0lBQ2xCLHNDQUFpQjs7SUFDakIsK0NBQWdDOztJQUNoQyxnREFBMkI7O0lBQzNCLDZDQUF5Qjs7SUFDekIsMENBQXNCOztJQUN0Qiw2Q0FBd0I7O0lBQ3hCLDJDQUFzQjs7SUFFdEIsZ0RBQTZCOztJQUM3Qiw4Q0FBeUI7O0lBRXpCLG1FQUlFOztJQUVGLDBEQUlFOztJQUVGLHlDQUF5Qjs7Ozs7SUFTYiw0Q0FBcUM7Ozs7O0lBQ3JDLDJDQUFtQzs7Ozs7SUFHbkMsOENBQXlDOzs7OztJQUd6QyxpREFBK0M7Ozs7O0lBRS9DLDRDQUFxQzs7Ozs7SUFDckMsaURBQStDOzs7OztJQUMvQyxpQ0FBOEI7O0lBQzlCLHVDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgQ2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1ZpZXdlclNlcnZpY2V9IGZyb20gXCIuL3ZpZXdlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgRmlsZURlc2NyaXB0aW9uLFxyXG4gIEZpbGVNb2RlbCxcclxuICBNb2RhbFNlcnZpY2UsXHJcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlLFxyXG4gIE5hdmlnYXRlU2VydmljZSxcclxuICBQYWdlUHJlbG9hZFNlcnZpY2UsXHJcbiAgUGFnZU1vZGVsLFxyXG4gIFpvb21TZXJ2aWNlLFxyXG4gIFJlbmRlclByaW50U2VydmljZSxcclxuICBGaWxlVXRpbCxcclxuICBQYXNzd29yZFNlcnZpY2UsXHJcbiAgRmlsZUNyZWRlbnRpYWxzLCBDb21tb25Nb2RhbHMsIExvYWRpbmdNYXNrU2VydmljZVxyXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtWaWV3ZXJDb25maWd9IGZyb20gXCIuL3ZpZXdlci1jb25maWdcIjtcclxuaW1wb3J0IHtWaWV3ZXJDb25maWdTZXJ2aWNlfSBmcm9tIFwiLi92aWV3ZXItY29uZmlnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlLCBPcHRpb259IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge0NvbnN0YW50cywgTGFuZ3VhZ2V9IGZyb20gJy4vdmlld2VyLmNvbnN0YW50cyc7XHJcbmltcG9ydCB7SW50ZXJ2YWxUaW1lcn0gZnJvbSAnLi9pbnRlcnZhbC10aW1lcic7XHJcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXZpZXdlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdlci1hcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3ZpZXdlci1hcHAuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmlld2VyQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICB0aXRsZSA9ICd2aWV3ZXInO1xyXG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xyXG4gIGZpbGU6IEZpbGVEZXNjcmlwdGlvbjtcclxuICB2aWV3ZXJDb25maWc6IFZpZXdlckNvbmZpZztcclxuICBjb3VudFBhZ2VzID0gMDtcclxuICBmb3JtYXREaXNhYmxlZCA9IHRydWU7XHJcbiAgc2hvd1RodW1ibmFpbHMgPSBmYWxzZTtcclxuICBjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzO1xyXG4gIGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XHJcbiAgc2hvd1NlYXJjaCA9IGZhbHNlO1xyXG4gIGlzRGVza3RvcDogYm9vbGVhbjtcclxuICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgcGFnZXNUb1ByZWxvYWQ6IG51bWJlcltdID0gW107XHJcblxyXG4gIF96b29tID0gMTAwO1xyXG4gIF9wYWdlV2lkdGg6IG51bWJlcjtcclxuICBfcGFnZUhlaWdodDogbnVtYmVyO1xyXG4gIG9wdGlvbnM7XHJcbiAgdGltZXJPcHRpb25zO1xyXG4gIGludGVydmFsVGltZTogbnVtYmVyO1xyXG4gIGludGVydmFsVGltZXI6IEludGVydmFsVGltZXI7XHJcbiAgY291bnREb3duSW50ZXJ2YWw6IG51bWJlcjtcclxuICBzZWNvbmRzTGVmdDogbnVtYmVyO1xyXG4gIGZpbGVXYXNEcm9wcGVkID0gZmFsc2U7XHJcbiAgZm9ybWF0SWNvbjogc3RyaW5nO1xyXG5cclxuICBmaWxlUGFyYW06IHN0cmluZztcclxuICB1cmxQYXJhbTogc3RyaW5nO1xyXG4gIHF1ZXJ5U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgc2VsZWN0ZWRQYWdlTnVtYmVyOiBudW1iZXI7XHJcbiAgcnVuUHJlc2VudGF0aW9uOiBib29sZWFuO1xyXG4gIGlzRnVsbFNjcmVlbjogYm9vbGVhbjtcclxuICBzdGFydFNjcm9sbFRpbWU6IG51bWJlcjtcclxuICBlbmRTY3JvbGxUaW1lOiBudW1iZXI7XHJcbiAgXHJcbiAgc3VwcG9ydGVkTGFuZ3VhZ2VzOiBPcHRpb25bXTtcclxuICBzZWxlY3RlZExhbmd1YWdlOiBPcHRpb247XHJcblxyXG4gIGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQgJiB7XHJcbiAgICBtb3pSZXF1ZXN0RnVsbFNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIG1zUmVxdWVzdEZ1bGxzY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcclxuICB9O1xyXG4gIFxyXG4gIGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMgPSBkb2N1bWVudCBhcyBEb2N1bWVudCAmIHtcclxuICAgIG1vekNhbmNlbEZ1bGxTY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHdlYmtpdEV4aXRGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XHJcbiAgICBtc0V4aXRGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XHJcbiAgfTtcclxuXHJcbiAgem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlO1xyXG5cclxuICBASG9zdExpc3RlbmVyKFwiZG9jdW1lbnQ6ZnVsbHNjcmVlbmNoYW5nZVwiLCBbXSlcclxuICBmdWxsU2NyZWVuKCkge1xyXG4gICAgaWYgKCFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmNsb3NlRnVsbFNjcmVlbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld2VyU2VydmljZTogVmlld2VyU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuICAgICAgICAgICAgICBjb25maWdTZXJ2aWNlOiBWaWV3ZXJDb25maWdTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHVwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHpvb21TZXJ2aWNlOiBab29tU2VydmljZSxcclxuICAgICAgICAgICAgICBwYWdlUHJlbG9hZFNlcnZpY2U6IFBhZ2VQcmVsb2FkU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJQcmludFNlcnZpY2U6IFJlbmRlclByaW50U2VydmljZSxcclxuICAgICAgICAgICAgICBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2xvYWRpbmdNYXNrU2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICBwdWJsaWMgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XHJcblxyXG4gICAgdGhpcy56b29tU2VydmljZSA9IHpvb21TZXJ2aWNlO1xyXG4gICAgdGhpcy5zdGFydFNjcm9sbFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgdGhpcy5lbmRTY3JvbGxUaW1lID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICBjb25maWdTZXJ2aWNlLnVwZGF0ZWRDb25maWcuc3Vic2NyaWJlKCh2aWV3ZXJDb25maWcpID0+IHtcclxuICAgICAgdGhpcy52aWV3ZXJDb25maWcgPSB2aWV3ZXJDb25maWc7XHJcbiAgICB9KTtcclxuXHJcbiAgICB1cGxvYWRGaWxlc1NlcnZpY2UudXBsb2Fkc0NoYW5nZS5zdWJzY3JpYmUoKHVwbG9hZHMpID0+IHtcclxuICAgICAgaWYgKHVwbG9hZHMpIHtcclxuICAgICAgICBsZXQgaTogbnVtYmVyO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB1cGxvYWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oaSksICcnLCB0aGlzLnZpZXdlckNvbmZpZy5yZXdyaXRlKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPyB0aGlzLnNlbGVjdEZpbGUob2JqLmd1aWQsICcnLCAnJykgOiB0aGlzLnNlbGVjdERpcignJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHBhZ2VQcmVsb2FkU2VydmljZS5jaGVja1ByZWxvYWQuc3Vic2NyaWJlKChwYWdlOiBudW1iZXIpID0+IHtcclxuICAgICAgaWYgKHRoaXMudmlld2VyQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgIT09IDApIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gcGFnZTsgaSA8IHBhZ2UgKyAyOyBpKyspIHtcclxuICAgICAgICAgIGlmIChpID4gMCAmJiBpIDw9IHRoaXMuY291bnRQYWdlcyAmJiAhdGhpcy5maWxlLnBhZ2VzW2kgLSAxXS5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKGksIGkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcGFzc3dvcmRTZXJ2aWNlLnBhc3NDaGFuZ2Uuc3Vic2NyaWJlKChwYXNzOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuY3JlZGVudGlhbHMuZ3VpZCwgcGFzcywgQ29tbW9uTW9kYWxzLlBhc3N3b3JkUmVxdWlyZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcclxuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XHJcbiAgICAgIGlmICghdGhpcy5ydW5QcmVzZW50YXRpb24pIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hab29tKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy52aWV3ZXJDb25maWcuZGVmYXVsdERvY3VtZW50ICE9PSBcIlwiKSB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMudmlld2VyQ29uZmlnLmRlZmF1bHREb2N1bWVudCwgXCJcIiwgXCJcIik7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q3VycmVudE9yRmlyc3RQYWdlKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWZhdWx0TGFuZ3VhZ2UgPSB0aGlzLmRlZmF1bHRMYW5ndWFnZUNvbmZpZztcclxuICAgIGNvbnN0IHN1cHBvcnRlZExhbmd1YWdlcyA9IHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VzQ29uZmlnXHJcbiAgICAgIC5tYXAobGFuZ3VhZ2UgPT4geyBcclxuICAgICAgICByZXR1cm4geyBcclxuICAgICAgICAgIG5hbWU6IGxhbmd1YWdlLm5hbWUsIFxyXG4gICAgICAgICAgdmFsdWU6IGxhbmd1YWdlLmNvZGUsIFxyXG4gICAgICAgICAgc2VwYXJhdG9yOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VzID0gc3VwcG9ydGVkTGFuZ3VhZ2VzO1xyXG4gICAgdGhpcy5zZWxlY3RlZExhbmd1YWdlID0gc3VwcG9ydGVkTGFuZ3VhZ2VzLmZpbmQobGFuZyA9PiBsYW5nLnZhbHVlID09PSBkZWZhdWx0TGFuZ3VhZ2UuY29kZSk7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZS51c2UoZGVmYXVsdExhbmd1YWdlLmNvZGUpO1xyXG5cclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIGlmIChxdWVyeVN0cmluZykge1xyXG4gICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcclxuXHJcbiAgICAgIHRoaXMuZmlsZVBhcmFtID0gdXJsUGFyYW1zLmdldCgnZmlsZScpO1xyXG4gICAgICBpZih0aGlzLmZpbGVQYXJhbSkge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5maWxlUGFyYW0sICcnLCAnJyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RDdXJyZW50T3JGaXJzdFBhZ2UoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudXJsUGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCd1cmwnKTtcclxuICAgICAgaWYodGhpcy51cmxQYXJhbSkge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwbG9hZCh0aGlzLnVybFBhcmFtKTtcclxuICAgICAgICB0aGlzLnNlbGVjdEN1cnJlbnRPckZpcnN0UGFnZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLl9sb2FkaW5nTWFza1NlcnZpY2VcclxuICAgIC5vbkxvYWRpbmdDaGFuZ2VkXHJcbiAgICAuc3Vic2NyaWJlKChsb2FkaW5nOiBib29sZWFuKSA9PiB0aGlzLmlzTG9hZGluZyA9IGxvYWRpbmcpO1xyXG5cclxuICAgIHRoaXMucmVmcmVzaFpvb20oKTtcclxuICB9XHJcblxyXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcucmV3cml0ZSA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgem9vbUNvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnpvb20gOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhZ2VTZWxlY3RvckNvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnBhZ2VTZWxlY3RvciA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcuc2VhcmNoIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCB0aHVtYm5haWxzQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcudGh1bWJuYWlscyA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgcm90YXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcucm90YXRlIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBkb3dubG9hZENvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLmRvd25sb2FkIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCB1cGxvYWRDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy51cGxvYWQgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByaW50Q29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcucHJpbnQgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLmJyb3dzZSA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgaHRtbE1vZGVDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5odG1sTW9kZSA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgc2F2ZVJvdGF0ZVN0YXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcuc2F2ZVJvdGF0ZVN0YXRlIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBlbmFibGVSaWdodENsaWNrQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcuZW5hYmxlUmlnaHRDbGljayA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgY3VycmVudFBhZ2UoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2U7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd0xhbmd1YWdlTWVudSgpOiBib29sZWFuIHtcclxuICAgIGlmKHRoaXMudmlld2VyQ29uZmlnICE9PSB1bmRlZmluZWQgJiYgdGhpcy52aWV3ZXJDb25maWcuc2hvd0xhbmd1YWdlTWVudSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZy5zaG93TGFuZ3VhZ2VNZW51O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIENvbnN0YW50cy5kZWZhdWx0U2hvd0xhbmd1YWdlTWVudTtcclxuICB9XHJcblxyXG4gIGdldCBzdXBwb3J0ZWRMYW5ndWFnZXNDb25maWcoKTogTGFuZ3VhZ2VbXSB7XHJcbiAgICBpZih0aGlzLnZpZXdlckNvbmZpZyAmJiB0aGlzLnZpZXdlckNvbmZpZy5zdXBwb3J0ZWRMYW5ndWFnZXMpIHtcclxuICAgICAgY29uc3Qgc3VwcG9ydGVkTGFuZ3VhZ2VzID0gdGhpcy52aWV3ZXJDb25maWcuc3VwcG9ydGVkTGFuZ3VhZ2VzO1xyXG4gICAgICByZXR1cm4gQ29uc3RhbnRzLmRlZmF1bHRTdXBwb3J0ZWRMYW5ndWFnZXNcclxuICAgICAgICAuZmlsdGVyKGxhbmcgPT4gXHJcbiAgICAgICAgICBzdXBwb3J0ZWRMYW5ndWFnZXMuaW5kZXhPZihsYW5nLmNvZGUpICE9PSAtMSB8fCBzdXBwb3J0ZWRMYW5ndWFnZXMuaW5kZXhPZihsYW5nLmFsdGVybmF0ZUNvZGUpICE9PSAtMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIENvbnN0YW50cy5kZWZhdWx0U3VwcG9ydGVkTGFuZ3VhZ2VzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlZmF1bHRMYW5ndWFnZUNvbmZpZygpOiBMYW5ndWFnZSB7XHJcbiAgICBpZih0aGlzLnZpZXdlckNvbmZpZyAmJiB0aGlzLnZpZXdlckNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VzQ29uZmlnXHJcbiAgICAgICAgLmZpbmQobGFuZyA9PiBsYW5nLmlzKHRoaXMudmlld2VyQ29uZmlnLmRlZmF1bHRMYW5ndWFnZSkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICBpZiAocGF0aG5hbWUpIHtcclxuICAgICAgY29uc3QgcGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpO1xyXG4gICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgcGFydHMpIHtcclxuICAgICAgICBpZihwYXJ0ID09PSBcIlwiKVxyXG4gICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGxhbmdPck5vdGhpbmcgPSB0aGlzLnN1cHBvcnRlZExhbmd1YWdlc0NvbmZpZ1xyXG4gICAgICAgICAgLmZpbHRlcihzdXBwb3J0ZWQgPT4gc3VwcG9ydGVkLmlzKHBhcnQpKVxyXG4gICAgICAgICAgLnNoaWZ0KCk7XHJcblxyXG4gICAgICAgIGlmKGxhbmdPck5vdGhpbmcpXHJcbiAgICAgICAgICByZXR1cm4gbGFuZ09yTm90aGluZztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIGlmIChxdWVyeVN0cmluZykge1xyXG4gICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcclxuICAgICAgY29uc3QgY2FuZGlkYXRlID0gdXJsUGFyYW1zLmdldCgnbGFuZycpO1xyXG4gICAgICBpZihjYW5kaWRhdGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdXBwb3J0ZWRMYW5ndWFnZXNDb25maWdcclxuICAgICAgICAgIC5maW5kKGxhbmcgPT4gbGFuZy5pcyhjYW5kaWRhdGUpKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIENvbnN0YW50cy5kZWZhdWx0TGFuZ3VhZ2U7XHJcbiAgfVxyXG5cclxuICBpZlByZXNlbnRhdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmZpbGUgPyBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkuZm9ybWF0ID09PSBcIk1pY3Jvc29mdCBQb3dlclBvaW50XCIgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmRXhjZWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5maWxlID8gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmZvcm1hdCA9PT0gXCJNaWNyb3NvZnQgRXhjZWxcIiA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWZJbWFnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmZpbGUgPyB0aGlzLmZvcm1hdEljb24gPT09IFwiZmlsZS1pbWFnZVwiIDogZmFsc2U7XHJcbiAgfVxyXG4gIFxyXG4gIGdldEZpbGVOYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmlsZS5ndWlkLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcclxuICB9XHJcblxyXG4gIG9wZW5Nb2RhbChpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihpZCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZU1vZGFsKGlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShpZCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRmlsZU1vZGVsW10pID0+IHRoaXMuZmlsZXMgPSBmaWxlcyB8fCBbXSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RDdXJyZW50T3JGaXJzdFBhZ2UoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciA9IHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSAhPT0gMCA/IHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA6IDE7XHJcbiAgfVxyXG5cclxuICBnZXRQcmVsb2FkUGFnZUNvdW50KCkge1xyXG4gICAgY29uc3QgbWluUHJlc2VudGF0aW9uUGFnZXNUb1ByZWxvYWQgPSAzO1xyXG4gICAgY29uc3QgcHJlbG9hZFBhZ2VDb3VudCA9ICF0aGlzLmlmUHJlc2VudGF0aW9uKCkgXHJcbiAgICAgID8gdGhpcy52aWV3ZXJDb25maWcucHJlbG9hZFBhZ2VDb3VudCBcclxuICAgICAgOiB0aGlzLnZpZXdlckNvbmZpZy5wcmVsb2FkUGFnZUNvdW50ICE9PSAwICYmIHRoaXMudmlld2VyQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgPCBtaW5QcmVzZW50YXRpb25QYWdlc1RvUHJlbG9hZCBcclxuICAgICAgICA/IG1pblByZXNlbnRhdGlvblBhZ2VzVG9QcmVsb2FkXHJcbiAgICAgICAgOiB0aGlzLnZpZXdlckNvbmZpZy5wcmVsb2FkUGFnZUNvdW50O1xyXG5cclxuICAgIHJldHVybiBwcmVsb2FkUGFnZUNvdW50O1xyXG4gIH1cclxuXHJcbiAgY29weVRodW1ibmFpbHMocGFnZXM6IFBhZ2VNb2RlbFtdKSB7XHJcbiAgICBjb25zdCB0aHVtYm5haWxzID0gcGFnZXMuc2xpY2UoKTtcclxuXHJcbiAgICBmb3IgKGxldCB0aHVtYkluZGV4ID0gMDsgdGh1bWJJbmRleCA8IHRodW1ibmFpbHMubGVuZ3RoOyB0aHVtYkluZGV4KyspIHtcclxuICAgICAgY29uc3QgdGh1bWIgPSB0aHVtYm5haWxzW3RodW1iSW5kZXhdO1xyXG4gICAgICBpZighdGh1bWIuZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGVtcHR5VGh1bWIgPSBuZXcgUGFnZU1vZGVsKCk7XHJcbiAgICAgICAgZW1wdHlUaHVtYi5udW1iZXIgPSB0aHVtYi5udW1iZXI7XHJcbiAgICAgICAgZW1wdHlUaHVtYi5kYXRhID0gYDxkaXYgc3R5bGU9XCJoZWlnaHQ6MTAwJTtkaXNwbGF5OmdyaWQ7Y29sb3I6I2JmYmZiZlwiPjxkaXYgc3R5bGU9XCJmb250LXNpemU6MTB2dzttYXJnaW46YXV0bzt0ZXh0LWFsaWduOmNlbnRlcjtcIj4ke3RodW1iLm51bWJlcn08L2Rpdj48L2Rpdj5gXHJcbiAgICAgICAgZW1wdHlUaHVtYi53aWR0aCA9IDgwMDtcclxuICAgICAgICBlbXB0eVRodW1iLmhlaWdodCA9IDgwMDtcclxuICAgICAgICBcclxuICAgICAgICB0aHVtYm5haWxzW3RodW1iSW5kZXhdID0gZW1wdHlUaHVtYjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aHVtYm5haWxzO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0RmlsZSgkZXZlbnQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgbW9kYWxJZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0ge2d1aWQ6ICRldmVudCwgcGFzc3dvcmQ6IHBhc3N3b3JkfTtcclxuICAgIHRoaXMuZmlsZSA9IG51bGw7XHJcbiAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLmxvYWRGaWxlKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZmlsZTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgICAgdGhpcy5maWxlID0gZmlsZTtcclxuICAgICAgICB0aGlzLmZvcm1hdERpc2FibGVkID0gIXRoaXMuZmlsZTtcclxuICAgICAgICB0aGlzLnBhZ2VzVG9QcmVsb2FkID0gW107XHJcbiAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgIHRoaXMuZm9ybWF0SWNvbiA9IHRoaXMuZmlsZSA/IEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5pY29uIDogbnVsbDtcclxuICAgICAgICAgIGlmIChmaWxlLnBhZ2VzICYmIGZpbGUucGFnZXNbMF0pIHtcclxuICAgICAgICAgICAgdGhpcy5fcGFnZUhlaWdodCA9IGZpbGUucGFnZXNbMF0uaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLl9wYWdlV2lkdGggPSBmaWxlLnBhZ2VzWzBdLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnpvb21PcHRpb25zKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXJPcHRpb25zID0gdGhpcy5nZXRUaW1lck9wdGlvbnMoKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IHByZWxvYWRQYWdlQ291bnQgPSB0aGlzLmdldFByZWxvYWRQYWdlQ291bnQoKTtcclxuICAgICAgICAgIGNvbnN0IGNvdW50UGFnZXMgPSBmaWxlLnBhZ2VzID8gZmlsZS5wYWdlcy5sZW5ndGggOiAwO1xyXG5cclxuICAgICAgICAgIGlmIChwcmVsb2FkUGFnZUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGUudGh1bWJuYWlscyA9IHRoaXMuY29weVRodW1ibmFpbHMoZmlsZS5wYWdlcyk7XHJcbiAgICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKDEsIHByZWxvYWRQYWdlQ291bnQgPiBjb3VudFBhZ2VzID8gY291bnRQYWdlcyA6IHByZWxvYWRQYWdlQ291bnQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyID0gMTtcclxuICAgICAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jb3VudFBhZ2VzID0gY291bnRQYWdlcztcclxuICAgICAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9IHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyO1xyXG4gICAgICAgICAgdGhpcy5jb3VudFBhZ2VzID0gY291bnRQYWdlcztcclxuICAgICAgICAgIHRoaXMuc2hvd1RodW1ibmFpbHMgPSB0aGlzLmlmUHJlc2VudGF0aW9uKCk7XHJcbiAgICAgICAgICB0aGlzLnJ1blByZXNlbnRhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBpZiAobW9kYWxJZCkge1xyXG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UobW9kYWxJZCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsZWFyRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgcHJlbG9hZFBhZ2VzKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XHJcbiAgICBmb3IgKGxldCBwYWdlTnVtYmVyID0gc3RhcnQ7IHBhZ2VOdW1iZXIgPD0gZW5kOyBwYWdlTnVtYmVyKyspIHtcclxuICAgICAgaWYodGhpcy5wYWdlc1RvUHJlbG9hZC5pbmRleE9mKHBhZ2VOdW1iZXIpICE9PSAtMSl7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucGFnZXNUb1ByZWxvYWQucHVzaChwYWdlTnVtYmVyKTtcclxuXHJcbiAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UubG9hZFBhZ2UodGhpcy5jcmVkZW50aWFscywgcGFnZU51bWJlcikuc3Vic2NyaWJlKChwYWdlOiBQYWdlTW9kZWwpID0+IHtcclxuICAgICAgICBpZihwYWdlLmRhdGEpIHtcclxuICAgICAgICAgIHBhZ2UuZGF0YSA9IHBhZ2UuZGF0YS5yZXBsYWNlKC8+XFxzKzwvZywgJz48JykucmVwbGFjZSgvXFx1RkVGRi9nLCAnJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpbGUucGFnZXNbcGFnZU51bWJlciAtIDFdID0gcGFnZTtcclxuICAgICAgICBpZiAodGhpcy5maWxlLnRodW1ibmFpbHMpIHtcclxuICAgICAgICAgIHRoaXMuZmlsZS50aHVtYm5haWxzW3BhZ2VOdW1iZXIgLSAxXSA9IHBhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwbG9hZCgkZXZlbnQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdmlld2VyU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgodXBsb2FkZWREb2N1bWVudDogYW55KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmZpbGVQYXJhbSAhPT0gJycpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEZpbGUodXBsb2FkZWREb2N1bWVudC5ndWlkLCAnJywgJycpO1xyXG4gICAgICAgIHRoaXMuZmlsZVBhcmFtID0gJyc7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5leHRQYWdlKCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGlmICh0aGlzLmludGVydmFsVGltZXIgJiYgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlICsgMSA+IHRoaXMuY291bnRQYWdlcykge1xyXG4gICAgICB0aGlzLmludGVydmFsVGltZXIuc3RvcCgpO1xyXG4gICAgICB0aGlzLmludGVydmFsVGltZSA9IDA7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmV4dFBhZ2UoKTtcclxuICB9XHJcblxyXG4gIHByZXZQYWdlKCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5wcmV2UGFnZSgpO1xyXG4gIH1cclxuXHJcbiAgdG9MYXN0UGFnZSgpIHtcclxuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UudG9MYXN0UGFnZSgpO1xyXG4gIH1cclxuXHJcbiAgdG9GaXJzdFBhZ2UoKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLnRvRmlyc3RQYWdlKCk7XHJcbiAgfVxyXG5cclxuICB6b29tSW4oKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgaWYgKHRoaXMuX3pvb20gPCA0OTApIHtcclxuICAgICAgdGhpcy56b29tID0gdGhpcy5fem9vbSArIDEwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgem9vbU91dCgpIHtcclxuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBpZiAodGhpcy5fem9vbSA+IDMwKSB7XHJcbiAgICAgIHRoaXMuem9vbSA9IHRoaXMuX3pvb20gLSAxMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbGVEcm9wcGVkKCRldmVudCl7XHJcbiAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID0gJGV2ZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwdFRvUHgocHQ6IG51bWJlcikge1xyXG4gICAgLy9wdCAqIDk2IC8gNzIgPSBweC5cclxuICAgIHJldHVybiBwdCAqIDk2IC8gNzI7XHJcbiAgfVxyXG5cclxuICBnZXRGaXRUb1dpZHRoKCkge1xyXG4gICAgLy8gSW1hZ2VzIGFuZCBFeGNlbC1yZWxhdGVkIGZpbGVzIHJlY2VpdmluZyBkaW1lbnNpb25zIGluIHB4IGZyb20gc2VydmVyXHJcbiAgICBjb25zdCBwYWdlV2lkdGggPSB0aGlzLmZvcm1hdEljb24gJiYgKHRoaXMuaWZFeGNlbCgpIHx8IHRoaXMuaWZJbWFnZSgpKSA/IHRoaXMuX3BhZ2VXaWR0aCA6IHRoaXMucHRUb1B4KHRoaXMuX3BhZ2VXaWR0aCk7XHJcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5mb3JtYXRJY29uICYmICh0aGlzLmlmRXhjZWwoKSB8fCB0aGlzLmlmSW1hZ2UoKSkgPyB0aGlzLl9wYWdlSGVpZ2h0IDogdGhpcy5wdFRvUHgodGhpcy5fcGFnZUhlaWdodCk7XHJcbiAgICBjb25zdCBvZmZzZXRXaWR0aCA9IHBhZ2VXaWR0aCA/IHBhZ2VXaWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgIGNvbnN0IHByZXNlbnRhdGlvblRodW1ibmFpbHMgPSB0aGlzLmlzRGVza3RvcCAmJiB0aGlzLmlmUHJlc2VudGF0aW9uKCkgJiYgIXRoaXMucnVuUHJlc2VudGF0aW9uO1xyXG5cclxuICAgIGlmICghdGhpcy5ydW5QcmVzZW50YXRpb24pIHtcclxuICAgICAgcmV0dXJuIChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoICYmIE1hdGgucm91bmQob2Zmc2V0V2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgPCAyKSA/IDIwMCAtIE1hdGgucm91bmQob2Zmc2V0V2lkdGggKiAxMDAgLyAocHJlc2VudGF0aW9uVGh1bWJuYWlscyA/IHdpbmRvdy5pbm5lcldpZHRoIC0gQ29uc3RhbnRzLnRodW1ibmFpbHNXaWR0aCAtIENvbnN0YW50cy5zY3JvbGxXaWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoKSlcclxuICAgICAgICA6ICghdGhpcy5pc0Rlc2t0b3AgPyBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lcldpZHRoICogMTAwIC8gb2Zmc2V0V2lkdGgpXHJcbiAgICAgICAgICA6IE1hdGgucm91bmQoKChwcmVzZW50YXRpb25UaHVtYm5haWxzID8gd2luZG93LmlubmVyV2lkdGggLSBDb25zdGFudHMudGh1bWJuYWlsc1dpZHRoIC0gQ29uc3RhbnRzLnNjcm9sbFdpZHRoXHJcbiAgICAgICAgICAgIDogd2luZG93LmlubmVySGVpZ2h0KSAvIG9mZnNldFdpZHRoKSAqIDEwMCkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lcldpZHRoICogMTAwIC8gb2Zmc2V0V2lkdGgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Rml0VG9IZWlnaHQoKSB7XHJcbiAgICBjb25zdCBwYWdlV2lkdGggPSB0aGlzLmZvcm1hdEljb24gJiYgKHRoaXMuaWZFeGNlbCgpIHx8IHRoaXMuaWZJbWFnZSgpKSA/IHRoaXMuX3BhZ2VXaWR0aCA6IHRoaXMucHRUb1B4KHRoaXMuX3BhZ2VXaWR0aCk7XHJcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5mb3JtYXRJY29uICYmICh0aGlzLmlmRXhjZWwoKSB8fCB0aGlzLmlmSW1hZ2UoKSkgPyB0aGlzLl9wYWdlSGVpZ2h0IDogdGhpcy5wdFRvUHgodGhpcy5fcGFnZUhlaWdodCk7XHJcbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCkgPyB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMDAgOiB3aW5kb3cuaW5uZXJIZWlnaHQgKyAxMDA7XHJcbiAgICBjb25zdCBvZmZzZXRIZWlnaHQgPSBwYWdlSGVpZ2h0ID8gcGFnZUhlaWdodCA6IHdpbmRvd0hlaWdodDtcclxuICAgIFxyXG4gICAgaWYgKCF0aGlzLmlmUHJlc2VudGF0aW9uKCkgJiYgISh0aGlzLmlmSW1hZ2UoKSkpIHtcclxuICAgICAgcmV0dXJuIChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoKSA/IE1hdGgucm91bmQod2luZG93SGVpZ2h0ICogMTAwIC8gb2Zmc2V0SGVpZ2h0KSA6IE1hdGgucm91bmQob2Zmc2V0SGVpZ2h0ICogMTAwIC8gd2luZG93SGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlmUHJlc2VudGF0aW9uKCkpIHtcclxuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKHdpbmRvdy5pbm5lckhlaWdodCAtIENvbnN0YW50cy50b3BiYXJXaWR0aCkgKiAxMDAgLyAoIXRoaXMucnVuUHJlc2VudGF0aW9uID8gb2Zmc2V0SGVpZ2h0ICsgQ29uc3RhbnRzLmRvY3VtZW50TWFyZ2luICogMiArIENvbnN0YW50cy5zY3JvbGxXaWR0aFxyXG4gICAgICAgIDogb2Zmc2V0SGVpZ2h0KSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pZkltYWdlKCkpIHtcclxuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKHdpbmRvdy5pbm5lckhlaWdodCAtIENvbnN0YW50cy50b3BiYXJXaWR0aCkgKiAxMDAgLyAob2Zmc2V0SGVpZ2h0ICsgQ29uc3RhbnRzLmRvY3VtZW50TWFyZ2luICogMiArIENvbnN0YW50cy5zY3JvbGxXaWR0aCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgem9vbU9wdGlvbnMoKSB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0Rml0VG9XaWR0aCgpO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRGaXRUb0hlaWdodCgpO1xyXG4gICAgcmV0dXJuIHRoaXMuem9vbVNlcnZpY2Uuem9vbU9wdGlvbnMod2lkdGgsIGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBnZXRUaW1lck9wdGlvbnMoKSB7XHJcbiAgICByZXR1cm4gW3t2YWx1ZTogMCwgbmFtZTogJ05vbmUnLCBzZXBhcmF0b3I6IGZhbHNlfSxcclxuICAgICAge3ZhbHVlOiA1LCBuYW1lOiAnNSBzZWMnLCBzZXBhcmF0b3I6IGZhbHNlfSxcclxuICAgICAge3ZhbHVlOiAxMCwgbmFtZTogJzEwIHNlYycsIHNlcGFyYXRvcjogZmFsc2V9LFxyXG4gICAgICB7dmFsdWU6IDE1LCBuYW1lOiAnMTUgc2VjJywgc2VwYXJhdG9yOiBmYWxzZX0sXHJcbiAgICAgIHt2YWx1ZTogMzAsIG5hbWU6ICczMCBzZWMnLCBzZXBhcmF0b3I6IGZhbHNlfV07XHJcbiAgfVxyXG5cclxuICBzZXQgem9vbSh6b29tKSB7XHJcbiAgICB0aGlzLl96b29tID0gem9vbTtcclxuICAgIHRoaXMuem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLl96b29tKTtcclxuICB9XHJcblxyXG4gIGdldCB6b29tKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3pvb207XHJcbiAgfVxyXG5cclxuICBzZWxlY3Rab29tKCRldmVudDogYW55KSB7XHJcbiAgICB0aGlzLnpvb20gPSAkZXZlbnQudmFsdWU7XHJcbiAgfVxyXG5cclxuICByb3RhdGUoZGVnOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlO1xyXG4gICAgY29uc3QgcGFnZU1vZGVsID0gdGhpcy5maWxlLnBhZ2VzW3BhZ2VOdW1iZXIgLSAxXTtcclxuXHJcbiAgICBpZiAodGhpcy5zYXZlUm90YXRlU3RhdGVDb25maWcgJiYgdGhpcy5maWxlKSB7XHJcbiAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2Uucm90YXRlKHRoaXMuY3JlZGVudGlhbHMsIGRlZywgcGFnZU51bWJlcikuc3Vic2NyaWJlKChwYWdlOiBQYWdlTW9kZWwpID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRGF0YSA9IHBhZ2UuZGF0YS5yZXBsYWNlKC8+XFxzKzwvZywnPjwnKVxyXG4gICAgICAgICAgLnJlcGxhY2UoL1xcdUZFRkYvZyxcIlwiKTtcclxuICAgICAgICBwYWdlLmRhdGEgPSB1cGRhdGVkRGF0YTtcclxuICAgICAgICB0aGlzLmZpbGUucGFnZXNbcGFnZU51bWJlciAtIDFdID0gcGFnZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZmlsZSAmJiB0aGlzLmZpbGUucGFnZXMgJiYgcGFnZU1vZGVsKSB7XHJcbiAgICAgICAgICBjb25zdCBhbmdsZSA9IHBhZ2VNb2RlbC5hbmdsZSArIGRlZztcclxuICAgICAgICAgIGlmIChhbmdsZSA+IDM2MCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUFuZ2xlKHBhZ2VNb2RlbCwgOTApO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChhbmdsZSA8IC0zNjApIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBbmdsZShwYWdlTW9kZWwsIC05MCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUFuZ2xlKHBhZ2VNb2RlbCwgYW5nbGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhbmdlQW5nbGUocGFnZTogUGFnZU1vZGVsLCBhbmdsZTogbnVtYmVyKSB7XHJcbiAgICBwYWdlLmFuZ2xlID0gYW5nbGU7XHJcbiAgfVxyXG5cclxuICBkb3dubG9hZEZpbGUoKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLl92aWV3ZXJTZXJ2aWNlLmdldERvd25sb2FkVXJsKHRoaXMuY3JlZGVudGlhbHMpKTtcclxuICB9XHJcblxyXG4gIHByaW50RmlsZSgpIHtcclxuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdGhpcy5fdmlld2VyU2VydmljZS5sb2FkUHJpbnRQZGYodGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKChkYXRhOiBCbG9iKSA9PiB7XHJcbiAgICAgIHRoaXMuX3JlbmRlclByaW50U2VydmljZS5jaGFuZ2VCbG9iKGRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvcGVuVGh1bWJuYWlscygpIHtcclxuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgaWYgKHRoaXMuc2hvd1RodW1ibmFpbHMpIHtcclxuICAgICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IGZhbHNlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ydW5QcmVzZW50YXRpb24gPSBmYWxzZTtcclxuICAgIHRoaXMuc2hvd1RodW1ibmFpbHMgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckRhdGEoKSB7XHJcbiAgICBpZiAoIXRoaXMuZmlsZSB8fCAhdGhpcy5maWxlLnBhZ2VzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgcGFnZSBvZiB0aGlzLmZpbGUucGFnZXMpIHtcclxuICAgICAgcGFnZS5kYXRhID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUmlnaHRDbGljaygpIHtcclxuICAgIHJldHVybiB0aGlzLmVuYWJsZVJpZ2h0Q2xpY2tDb25maWc7XHJcbiAgfVxyXG5cclxuICBvcGVuU2VhcmNoKCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIHRoaXMuc2hvd1NlYXJjaCA9ICF0aGlzLnNob3dTZWFyY2g7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZnJlc2hab29tKCkge1xyXG4gICAgaWYgKHRoaXMuZmlsZSkge1xyXG4gICAgICB0aGlzLmZvcm1hdEljb24gPSBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkuaWNvbjtcclxuICAgICAgdGhpcy56b29tID0gdGhpcy5fd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKSAmJiAhKHRoaXMuaWZJbWFnZSgpIHx8IHRoaXMuaWZQcmVzZW50YXRpb24oKSkgPyAxMDBcclxuICAgICAgICA6ICh0aGlzLmlmSW1hZ2UoKSA/IHRoaXMuZ2V0Rml0VG9IZWlnaHQoKVxyXG4gICAgICAgICAgOiB0aGlzLmdldEZpdFRvV2lkdGgoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RDdXJyZW50UGFnZShwYWdlTnVtYmVyKVxyXG4gIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyID0gcGFnZU51bWJlcjtcclxuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9IHBhZ2VOdW1iZXI7XHJcbiAgICBpZiAodGhpcy5ydW5QcmVzZW50YXRpb24gJiYgdGhpcy5pbnRlcnZhbFRpbWUgPiAwICYmIHRoaXMuaW50ZXJ2YWxUaW1lci5zdGF0ZSAhPT0gMykge1xyXG4gICAgICB0aGlzLnJlc2V0SW50ZXJ2YWwoKTtcclxuICAgICAgaWYgKHRoaXMuc2xpZGVJblJhbmdlKCkpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0Q291bnREb3duKHRoaXMuaW50ZXJ2YWxUaW1lLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Nb3VzZVdoZWVsVXAoKVxyXG4gIHtcclxuICAgIHRoaXMuc3RhcnRTY3JvbGxUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGlmICh0aGlzLmlmUHJlc2VudGF0aW9uKCkgJiYgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgIT09IDEpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhcnRTY3JvbGxUaW1lIC0gdGhpcy5lbmRTY3JvbGxUaW1lID4gMzAwICYmIHRoaXMudmVydFNjcm9sbEVuZGVkKHRydWUpKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgPSB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciAtIDE7XHJcbiAgICAgICAgdGhpcy5lbmRTY3JvbGxUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Nb3VzZVdoZWVsRG93bigpXHJcbiAge1xyXG4gICAgdGhpcy5zdGFydFNjcm9sbFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgaWYgKHRoaXMuaWZQcmVzZW50YXRpb24oKSAmJiB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciAhPT0gdGhpcy5maWxlLnBhZ2VzLmxlbmd0aCkge1xyXG4gICAgICBpZiAodGhpcy5zdGFydFNjcm9sbFRpbWUgLSB0aGlzLmVuZFNjcm9sbFRpbWUgPiAzMDAgJiYgdGhpcy52ZXJ0U2Nyb2xsRW5kZWQoZmFsc2UpKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFNjcm9sbFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGlmICh0aGlzLmZpbGUucGFnZXNbdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXJdICYmICF0aGlzLmZpbGUucGFnZXNbdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXJdLmRhdGEpIHtcclxuICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyLCB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciArIDEpO1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgPSB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgPSB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5kU2Nyb2xsVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZlcnRTY3JvbGxFbmRlZChvblRvcDogYm9vbGVhbikge1xyXG4gICAgY29uc3QgZ2REb2N1bWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dkLWRvY3VtZW50JylbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAob25Ub3ApXHJcbiAgICB7XHJcbiAgICAgIHJldHVybiBnZERvY3VtZW50LnNjcm9sbFRvcCA9PT0gMDtcclxuICAgIH1cclxuICAgIGVsc2UgcmV0dXJuIGdkRG9jdW1lbnQub2Zmc2V0SGVpZ2h0ICsgZ2REb2N1bWVudC5zY3JvbGxUb3AgPj0gZ2REb2N1bWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVUaW1lcigkZXZlbnQpe1xyXG4gICAgdGhpcy5pbnRlcnZhbFRpbWUgPSAkZXZlbnQudmFsdWU7XHJcbiAgICBpZiAodGhpcy5pbnRlcnZhbFRpbWUgIT09IDApIHtcclxuICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxUaW1lciAmJiB0aGlzLmludGVydmFsVGltZXIuc3RhdGUgPT09IDEpIHtcclxuICAgICAgICB0aGlzLmludGVydmFsVGltZXIuc3RvcCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RhcnRDb3VudERvd24odGhpcy5pbnRlcnZhbFRpbWUpO1xyXG4gICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwodGhpcy5pbnRlcnZhbFRpbWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgdGhpcy5pbnRlcnZhbFRpbWVyLnN0b3AoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dDb3VudERvd24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnRlcnZhbFRpbWUgPiAwICYmICh0aGlzLnNsaWRlSW5SYW5nZSgpKVxyXG4gIH1cclxuXHJcbiAgc3RhcnRDb3VudERvd24oc2Vjb25kczogbnVtYmVyLCByZXNldDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuY291bnREb3duSW50ZXJ2YWwpO1xyXG4gICAgaWYgKHNlY29uZHMgPiAwKSB7XHJcbiAgICAgIHRoaXMuc2Vjb25kc0xlZnQgPSBzZWNvbmRzO1xyXG4gICAgICBzZWNvbmRzLS07XHJcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZWNvbmRzTGVmdCA9IHNlY29uZHM7XHJcbiAgICAgICAgICBzZWNvbmRzLS07XHJcbiAgICAgICAgICBpZiAoc2Vjb25kcyA9PT0gMCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICB0aGlzLmNvdW50RG93bkludGVydmFsID0gaW50ZXJ2YWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0SW50ZXJ2YWwoaW50ZXJ2YWxUaW1lOiBudW1iZXIpIHtcclxuICAgIHRoaXMuaW50ZXJ2YWxUaW1lciA9IG5ldyBJbnRlcnZhbFRpbWVyKCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuc2xpZGVJblJhbmdlKCkpIHtcclxuICAgICAgICB0aGlzLm5leHRQYWdlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2xpZGVJblJhbmdlKCkpIHtcclxuICAgICAgICAgIHRoaXMuc3RhcnRDb3VudERvd24oaW50ZXJ2YWxUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbFRpbWVyLnN0b3AoKTtcclxuICAgICAgfVxyXG4gICAgfSwgaW50ZXJ2YWxUaW1lICogMTAwMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNsaWRlSW5SYW5nZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgKyAxIDw9IHRoaXMuY291bnRQYWdlcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXRJbnRlcnZhbCgpIHtcclxuICAgIHRoaXMuaW50ZXJ2YWxUaW1lci5zdG9wKCk7XHJcbiAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwodGhpcy5pbnRlcnZhbFRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcGF1c2VQcmVzZW50aW5nKCkge1xyXG4gICAgdGhpcy5pbnRlcnZhbFRpbWVyLnBhdXNlKCk7XHJcbiAgICB0aGlzLnN0YXJ0Q291bnREb3duKDAsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcmVzdW1lUHJlc2VudGluZygpIHtcclxuICAgIHRoaXMuaW50ZXJ2YWxUaW1lci5yZXN1bWUoKTtcclxuICAgIGNvbnN0IHNlY29uZHNSZW1haW5pbmcgPSBNYXRoLnJvdW5kKHRoaXMuaW50ZXJ2YWxUaW1lci5yZW1haW5pbmcvMTAwMCk7XHJcbiAgICB0aGlzLnN0YXJ0Q291bnREb3duKHNlY29uZHNSZW1haW5pbmcpO1xyXG4gIH1cclxuXHJcbiAgcHJlc2VudGF0aW9uUnVubmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLmludGVydmFsVGltZXIgJiYgdGhpcy5pbnRlcnZhbFRpbWVyLnN0YXRlID09PSAxICYmIHRoaXMuc2xpZGVJblJhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBwcmVzZW50YXRpb25QYXVzZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnRlcnZhbFRpbWVyICYmIHRoaXMuaW50ZXJ2YWxUaW1lci5zdGF0ZSA9PT0gMiAmJiB0aGlzLnNsaWRlSW5SYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRQcmVzZW50YXRpb24oKSB7XHJcbiAgICB0aGlzLnNob3dUaHVtYm5haWxzID0gZmFsc2U7XHJcbiAgICB0aGlzLm9wZW5GdWxsU2NyZWVuKCk7XHJcbiAgICB0aGlzLnJ1blByZXNlbnRhdGlvbiA9ICF0aGlzLnJ1blByZXNlbnRhdGlvbjtcclxuXHJcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpZiAoc2NyZWVuLmhlaWdodCA9PT0gd2luZG93LmlubmVySGVpZ2h0ICYmIHNjcmVlbi53aWR0aCA9PT0gd2luZG93LmlubmVyV2lkdGgpIHtcclxuICAgICAgdGhpcy56b29tU2VydmljZS5jaGFuZ2Vab29tKHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0IDwgMS43ICYmIHRoaXMuX3BhZ2VXaWR0aCAvIHRoaXMuX3BhZ2VIZWlnaHQgPiAxLjcgXHJcbiAgICAgICAgPyB0aGlzLmdldEZpdFRvV2lkdGgoKSA6IHRoaXMuZ2V0Rml0VG9IZWlnaHQoKSk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuICAgICAgfVxyXG4gICAgfSwgNTApO1xyXG4gIH1cclxuXHJcbiAgb3BlbkZ1bGxTY3JlZW4oKSB7XHJcbiAgICBjb25zdCBkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50ICYge1xyXG4gICAgICBtb3pSZXF1ZXN0RnVsbFNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgICB3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgICBtc1JlcXVlc3RGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgaWYgKGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMucmVxdWVzdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgZG9jRWxtV2l0aEJyb3dzZXJzRnVsbFNjcmVlbkZ1bmN0aW9ucy5yZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgfSBlbHNlIGlmIChkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zLm1velJlcXVlc3RGdWxsU2NyZWVuKSB7IC8qIEZpcmVmb3ggKi9cclxuICAgICAgZG9jRWxtV2l0aEJyb3dzZXJzRnVsbFNjcmVlbkZ1bmN0aW9ucy5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xyXG4gICAgfSBlbHNlIGlmIChkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7IC8qIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xyXG4gICAgICBkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgICB9IGVsc2UgaWYgKGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMubXNSZXF1ZXN0RnVsbHNjcmVlbikgeyAvKiBJRS9FZGdlICovXHJcbiAgICAgIGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSB0cnVlO1xyXG4gIH1cclxuICBcclxuICBjbG9zZUZ1bGxTY3JlZW4oYnlCdXR0b246IGJvb2xlYW4gPSBmYWxzZSl7XHJcbiAgICBpZiAoYnlCdXR0b24pIHtcclxuICAgICAgY29uc3QgZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucyA9IGRvY3VtZW50IGFzIERvY3VtZW50ICYge1xyXG4gICAgICAgIG1vekNhbmNlbEZ1bGxTY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcclxuICAgICAgICB3ZWJraXRFeGl0RnVsbHNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgICAgIG1zRXhpdEZ1bGxzY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcclxuICAgICAgfTtcclxuICAgICAgaWYgKGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMuZXhpdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICBkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zLmV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7IC8qIEZpcmVmb3ggKi9cclxuICAgICAgICBkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zLm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcclxuICAgICAgfSBlbHNlIGlmIChkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zLndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7IC8qIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xyXG4gICAgICAgIGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgfSBlbHNlIGlmIChkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zLm1zRXhpdEZ1bGxzY3JlZW4pIHsgLyogSUUvRWRnZSAqL1xyXG4gICAgICAgIGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMubXNFeGl0RnVsbHNjcmVlbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxUaW1lcikge1xyXG4gICAgICB0aGlzLmludGVydmFsVGltZXIuc3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNGdWxsU2NyZWVuID0gZmFsc2U7XHJcbiAgICB0aGlzLnJ1blByZXNlbnRhdGlvbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IHRydWU7XHJcbiAgICB0aGlzLmludGVydmFsVGltZSA9IDA7XHJcbiAgICB0aGlzLnN0YXJ0Q291bnREb3duKDApO1xyXG4gICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0TGFuZ3VhZ2Uoc2VsZWN0ZWRMYW5ndWFnZTogT3B0aW9uKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkTGFuZ3VhZ2UgPSBzZWxlY3RlZExhbmd1YWdlO1xyXG4gICAgdGhpcy50cmFuc2xhdGUudXNlKHNlbGVjdGVkTGFuZ3VhZ2UudmFsdWUpO1xyXG4gIH0gXHJcbn1cclxuIl19