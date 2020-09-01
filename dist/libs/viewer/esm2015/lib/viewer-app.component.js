/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ViewerService } from "./viewer.service";
import { ModalService, UploadFilesService, NavigateService, PagePreloadService, ZoomService, RenderPrintService, FileUtil, PasswordService, CommonModals, LoadingMaskService } from "@groupdocs.examples.angular/common-components";
import { ViewerConfigService } from "./viewer-config.service";
import { WindowService } from "@groupdocs.examples.angular/common-components";
import { ActivatedRoute } from '@angular/router';
//import * as Hammer from 'hammerjs';
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
     * @param {?} route
     */
    constructor(_viewerService, _modalService, configService, uploadFilesService, _navigateService, _zoomService, pagePreloadService, _renderPrintService, passwordService, _windowService, _loadingMaskService, route) {
        this._viewerService = _viewerService;
        this._modalService = _modalService;
        this._navigateService = _navigateService;
        this._zoomService = _zoomService;
        this._renderPrintService = _renderPrintService;
        this._windowService = _windowService;
        this._loadingMaskService = _loadingMaskService;
        this.route = route;
        this.title = 'viewer';
        this.files = [];
        this.countPages = 0;
        this.formatDisabled = !this.file;
        this.showThumbnails = false;
        this.browseFilesModal = CommonModals.BrowseFiles;
        this.showSearch = false;
        this._zoom = 100;
        //@ViewChildren('docPanel') docPanelComponent: QueryList<ElementRef>;
        this.fileWasDropped = false;
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
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.isDesktop = _windowService.isDesktop();
            this.refreshZoom();
        }));
        this.querySubscription = route.queryParams.subscribe((/**
         * @param {?} queryParam
         * @return {?}
         */
        (queryParam) => {
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
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.viewerConfig.defaultDocument !== "") {
            this.isLoading = true;
            this.selectFile(this.viewerConfig.defaultDocument, "", "");
        }
        this.selectedPageNumber = 1;
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
        // this.docPanelComponent.changes.subscribe((comps: QueryList<ElementRef>) =>
        // {
        //   comps.toArray().forEach((item) => {
        //     const hammer = new Hammer(item.nativeElement);
        //     hammer.get('pinch').set({ enable: true });
        //   });
        // });
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
                if (file.pages && file.pages[0]) {
                    this._pageHeight = file.pages[0].height;
                    this._pageWidth = file.pages[0].width;
                    this.options = this.zoomOptions();
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
                this._navigateService.currentPage = 1;
                this.countPages = countPages;
                if (this.ifPresentation()) {
                    this.showThumbnails = true;
                }
                else {
                    this.showThumbnails = false;
                }
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
        return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / window.innerWidth) : Math.round(window.innerWidth * 100 / offsetWidth);
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
        return (pageHeight > pageWidth) ? Math.round(windowHeight * 100 / offsetHeight) : Math.round(offsetHeight * 100 / windowHeight);
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
        if (this.viewerConfig.preloadPageCount !== 0) {
            this._viewerService.loadPrint(this.credentials).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.file.pages = data.pages;
                this._renderPrintService.changePages(this.file.pages);
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
     * @param {?} $event
     * @return {?}
     */
    onRightClick($event) {
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
    // onPinchIn($event){
    //   this.zoomOut();
    // }
    // onPinchOut($event){
    //   this.zoomIn();
    // }
    /**
     * @private
     * @return {?}
     */
    refreshZoom() {
        this.formatIcon = this.file ? FileUtil.find(this.file.guid, false).icon : null;
        this.zoom = this._windowService.isDesktop() ? 100 : this.getFitToWidth();
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    selectCurrentPage(pageNumber) {
        this.selectedPageNumber = pageNumber;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onMouseWheelUp($event) {
        if (this.ifPresentation() && this.selectedPageNumber !== 1) {
            this.selectedPageNumber = this.selectedPageNumber - 1;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onMouseWheelDown($event) {
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
}
ViewerAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-viewer',
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'viewer'\" icon=\"eye\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-select class=\"mobile-hide\" [disabled]=\"formatDisabled\" [options]=\"options\" (selected)=\"selectZoom($event)\"\n                 [showSelected]=\"{ name: zoom+'%', value : zoom}\" *ngIf=\"zoomConfig\" ></gd-select>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"\n                 *ngIf=\"zoomConfig\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\"\n                 (click)=\"zoomOut()\" *ngIf=\"zoomConfig\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-left'\" [tooltip]=\"'First Page'\"\n                 (click)=\"toFirstPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" [tooltip]=\"'Previous Page'\"\n                 (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <div class=\"current-page-number\" [ngClass]=\"{'active': !formatDisabled}\" *ngIf=\"formatIcon !== 'file-excel'\">{{currentPage}}/{{countPages}}</div>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" [tooltip]=\"'Next Page'\"\n                 (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-right'\" [tooltip]=\"'Last Page'\"\n                 (click)=\"toLastPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Rotate CCW'\" (click)=\"rotate(-90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Rotate CW'\" (click)=\"rotate(90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                 (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                 *ngIf=\"printConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search'\" [tooltip]=\"'Search'\" (click)=\"openSearch()\"\n                 *ngIf=\"searchConfig\" ></gd-button>\n      <gd-search (hidePanel)=\"showSearch = !$event\" *ngIf=\"showSearch\" ></gd-search>\n\n      <gd-button class=\"thumbnails-button\" [disabled]=\"formatDisabled\" [icon]=\"'th-large'\" [tooltip]=\"'Thumbnails'\"\n                 (click)=\"openThumbnails()\" *ngIf=\"thumbnailsConfig && isDesktop && formatIcon !== 'file-excel' && formatIcon !== 'file-powerpoint'\"></gd-button>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"doc-panel\" *ngIf=\"file\" #docPanel>\n    <gd-thumbnails *ngIf=\"showThumbnails && !ifPresentation()\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\" (selectedPage)=\"selectCurrentPage($event)\"></gd-thumbnails>\n    <gd-thumbnails *ngIf=\"showThumbnails && ifPresentation()\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\" (selectedPage)=\"selectCurrentPage($event)\" gdScrollable></gd-thumbnails>\n\n    <gd-document class=\"gd-document\" *ngIf=\"(file && formatIcon !== 'file-excel') || (formatIcon === 'file-excel' && !htmlModeConfig)\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" [selectedPage]=\"selectedPageNumber\" gdRenderPrint [htmlMode]=\"htmlModeConfig\" gdMouseWheel (mouseWheelUp)=\"onMouseWheelUp($event)\" (mouseWheelDown)=\"onMouseWheelDown($event)\"></gd-document>\n    <gd-excel-document class=\"gd-document\" *ngIf=\"file && formatIcon === 'file-excel' && htmlModeConfig\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-excel-document>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n    Or drop file here\n  </gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.current-page-number{margin-left:7px;font-size:14px;color:#959da5;width:37px;height:37px;line-height:37px;text-align:center}.current-page-number.active{color:#fff}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.thumbnails-button{position:absolute;right:3px}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}::ng-deep .tools .button,::ng-deep .tools .nav-caret,::ng-deep .tools .selected-value{color:#fff!important}::ng-deep .tools .button.inactive,::ng-deep .tools .nav-caret.inactive,::ng-deep .tools .selected-value.inactive{color:#959da5!important}::ng-deep .tools .button{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .dropdown-menu .option{color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}::ng-deep .tools .select{width:65px;height:37px;margin-left:7px;line-height:37px;text-align:center}@media (max-width:1037px){.current-page-number,.mobile-hide{display:none}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .tools .gd-nav-search-btn .icon-button{height:37px;width:37px}::ng-deep .tools .gd-nav-search-btn .button{font-size:14px}}"]
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
    { type: ActivatedRoute }
];
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
    ViewerAppComponent.prototype.fileWasDropped;
    /** @type {?} */
    ViewerAppComponent.prototype.formatIcon;
    /** @type {?} */
    ViewerAppComponent.prototype.fileParam;
    /** @type {?} */
    ViewerAppComponent.prototype.querySubscription;
    /** @type {?} */
    ViewerAppComponent.prototype.selectedPageNumber;
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
    /**
     * @type {?}
     * @private
     */
    ViewerAppComponent.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3ZpZXdlci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBOEMsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFHTCxZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixrQkFBa0IsRUFFbEIsV0FBVyxFQUVYLGtCQUFrQixFQUNsQixRQUFRLEVBQ1IsZUFBZSxFQUNFLFlBQVksRUFBRSxrQkFBa0IsRUFDbEQsTUFBTSwrQ0FBK0MsQ0FBQztBQUV2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFFNUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQVFqRCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7SUEwQjdCLFlBQW9CLGNBQTZCLEVBQzdCLGFBQTJCLEVBQ25DLGFBQWtDLEVBQ2xDLGtCQUFzQyxFQUM5QixnQkFBaUMsRUFDakMsWUFBeUIsRUFDakMsa0JBQXNDLEVBQzlCLG1CQUF1QyxFQUMvQyxlQUFnQyxFQUN4QixjQUE2QixFQUM3QixtQkFBdUMsRUFDdkMsS0FBcUI7UUFYckIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFHM0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUV6Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBRXZDLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FB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OztJQUUvQyw0Q0FBcUM7Ozs7O0lBQ3JDLGlEQUErQzs7Ozs7SUFDL0MsbUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtWaWV3ZXJTZXJ2aWNlfSBmcm9tIFwiLi92aWV3ZXIuc2VydmljZVwiO1xuaW1wb3J0IHtcbiAgRmlsZURlc2NyaXB0aW9uLFxuICBGaWxlTW9kZWwsXG4gIE1vZGFsU2VydmljZSxcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICBOYXZpZ2F0ZVNlcnZpY2UsXG4gIFBhZ2VQcmVsb2FkU2VydmljZSxcbiAgUGFnZU1vZGVsLFxuICBab29tU2VydmljZSxcbiAgUm90YXRlZFBhZ2UsXG4gIFJlbmRlclByaW50U2VydmljZSxcbiAgRmlsZVV0aWwsXG4gIFBhc3N3b3JkU2VydmljZSxcbiAgRmlsZUNyZWRlbnRpYWxzLCBDb21tb25Nb2RhbHMsIExvYWRpbmdNYXNrU2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge1ZpZXdlckNvbmZpZ30gZnJvbSBcIi4vdmlld2VyLWNvbmZpZ1wiO1xuaW1wb3J0IHtWaWV3ZXJDb25maWdTZXJ2aWNlfSBmcm9tIFwiLi92aWV3ZXItY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vL2ltcG9ydCAqIGFzIEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXZpZXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3ZXItYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmlld2VyLWFwcC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlckFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHRpdGxlID0gJ3ZpZXdlcic7XG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xuICBmaWxlOiBGaWxlRGVzY3JpcHRpb247XG4gIHZpZXdlckNvbmZpZzogVmlld2VyQ29uZmlnO1xuICBjb3VudFBhZ2VzID0gMDtcbiAgZm9ybWF0RGlzYWJsZWQgPSAhdGhpcy5maWxlO1xuICBzaG93VGh1bWJuYWlscyA9IGZhbHNlO1xuICBjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzO1xuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xuICBzaG93U2VhcmNoID0gZmFsc2U7XG4gIGlzRGVza3RvcDogYm9vbGVhbjtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuXG4gIF96b29tID0gMTAwO1xuICBfcGFnZVdpZHRoOiBudW1iZXI7XG4gIF9wYWdlSGVpZ2h0OiBudW1iZXI7XG4gIG9wdGlvbnM7XG4gIC8vQFZpZXdDaGlsZHJlbignZG9jUGFuZWwnKSBkb2NQYW5lbENvbXBvbmVudDogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuICBmaWxlV2FzRHJvcHBlZCA9IGZhbHNlO1xuICBmb3JtYXRJY29uOiBzdHJpbmc7XG5cbiAgZmlsZVBhcmFtOiBzdHJpbmc7XG4gIHF1ZXJ5U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHNlbGVjdGVkUGFnZU51bWJlcjogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdlclNlcnZpY2U6IFZpZXdlclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgICBjb25maWdTZXJ2aWNlOiBWaWV3ZXJDb25maWdTZXJ2aWNlLFxuICAgICAgICAgICAgICB1cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcbiAgICAgICAgICAgICAgcGFnZVByZWxvYWRTZXJ2aWNlOiBQYWdlUHJlbG9hZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlclByaW50U2VydmljZTogUmVuZGVyUHJpbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbG9hZGluZ01hc2tTZXJ2aWNlOiBMb2FkaW5nTWFza1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG5cbiAgICBjb25maWdTZXJ2aWNlLnVwZGF0ZWRDb25maWcuc3Vic2NyaWJlKCh2aWV3ZXJDb25maWcpID0+IHtcbiAgICAgIHRoaXMudmlld2VyQ29uZmlnID0gdmlld2VyQ29uZmlnO1xuICAgIH0pO1xuXG4gICAgdXBsb2FkRmlsZXNTZXJ2aWNlLnVwbG9hZHNDaGFuZ2Uuc3Vic2NyaWJlKCh1cGxvYWRzKSA9PiB7XG4gICAgICBpZiAodXBsb2Fkcykge1xuICAgICAgICBsZXQgaTogbnVtYmVyO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXBsb2Fkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UudXBsb2FkKHVwbG9hZHMuaXRlbShpKSwgJycsIHRoaXMudmlld2VyQ29uZmlnLnJld3JpdGUpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPyB0aGlzLnNlbGVjdEZpbGUob2JqLmd1aWQsICcnLCAnJykgOiB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhZ2VQcmVsb2FkU2VydmljZS5jaGVja1ByZWxvYWQuc3Vic2NyaWJlKChwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLnZpZXdlckNvbmZpZy5wcmVsb2FkUGFnZUNvdW50ICE9PSAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBwYWdlOyBpIDwgcGFnZSArIDI7IGkrKykge1xuICAgICAgICAgIGlmIChpID4gMCAmJiBpIDw9IHRoaXMuY291bnRQYWdlcyAmJiAhdGhpcy5maWxlLnBhZ2VzW2kgLSAxXS5kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnByZWxvYWRQYWdlcyhpLCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhc3N3b3JkU2VydmljZS5wYXNzQ2hhbmdlLnN1YnNjcmliZSgocGFzczogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5jcmVkZW50aWFscy5ndWlkLCBwYXNzLCBDb21tb25Nb2RhbHMuUGFzc3dvcmRSZXF1aXJlZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xuICAgICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICAgIHRoaXMucmVmcmVzaFpvb20oKTtcbiAgICB9KTtcblxuICAgIHRoaXMucXVlcnlTdWJzY3JpcHRpb24gPSByb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoXG4gICAgICAocXVlcnlQYXJhbTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZVBhcmFtID0gcXVlcnlQYXJhbVsnZmlsZSddO1xuICAgICAgICBpZiAodGhpcy5maWxlUGFyYW0pIHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgaWYgKHRoaXMudmFsaWRVUkwodGhpcy5maWxlUGFyYW0pKSB7XG4gICAgICAgICAgICB0aGlzLnVwbG9hZCh0aGlzLmZpbGVQYXJhbSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuZmlsZVBhcmFtLCAnJywgJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy52aWV3ZXJDb25maWcuZGVmYXVsdERvY3VtZW50ICE9PSBcIlwiKXtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLnZpZXdlckNvbmZpZy5kZWZhdWx0RG9jdW1lbnQsIFwiXCIsIFwiXCIpO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyID0gMTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9sb2FkaW5nTWFza1NlcnZpY2VcbiAgICAub25Mb2FkaW5nQ2hhbmdlZFxuICAgIC5zdWJzY3JpYmUoKGxvYWRpbmc6IGJvb2xlYW4pID0+IHRoaXMuaXNMb2FkaW5nID0gbG9hZGluZyk7XG5cbiAgICB0aGlzLnJlZnJlc2hab29tKCk7XG5cbiAgICAvLyB0aGlzLmRvY1BhbmVsQ29tcG9uZW50LmNoYW5nZXMuc3Vic2NyaWJlKChjb21wczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+KSA9PlxuICAgIC8vIHtcbiAgICAvLyAgIGNvbXBzLnRvQXJyYXkoKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGhhbW1lciA9IG5ldyBIYW1tZXIoaXRlbS5uYXRpdmVFbGVtZW50KTtcbiAgICAvLyAgICAgaGFtbWVyLmdldCgncGluY2gnKS5zZXQoeyBlbmFibGU6IHRydWUgfSk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHpvb21Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcuem9vbSA6IHRydWU7XG4gIH1cblxuICBnZXQgcGFnZVNlbGVjdG9yQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnBhZ2VTZWxlY3RvciA6IHRydWU7XG4gIH1cblxuICBnZXQgc2VhcmNoQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnNlYXJjaCA6IHRydWU7XG4gIH1cblxuICBnZXQgdGh1bWJuYWlsc0NvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy50aHVtYm5haWxzIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCByb3RhdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcucm90YXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBkb3dubG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5kb3dubG9hZCA6IHRydWU7XG4gIH1cblxuICBnZXQgdXBsb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnVwbG9hZCA6IHRydWU7XG4gIH1cblxuICBnZXQgcHJpbnRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcucHJpbnQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5icm93c2UgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGh0bWxNb2RlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLmh0bWxNb2RlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBzYXZlUm90YXRlU3RhdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcuc2F2ZVJvdGF0ZVN0YXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBlbmFibGVSaWdodENsaWNrQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLmVuYWJsZVJpZ2h0Q2xpY2sgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZTtcbiAgfVxuXG4gIGlmUHJlc2VudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUgPyBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkuZm9ybWF0ID09PSBcIk1pY3Jvc29mdCBQb3dlclBvaW50XCIgOiBmYWxzZTtcbiAgfVxuXG4gIHZhbGlkVVJMKHN0cikge1xuICAgIGNvbnN0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKCdeKGh0dHBzPzpcXFxcL1xcXFwvKT8nKyAvLyBwcm90b2NvbFxuICAgICAgJygoKFthLXpcXFxcZF0oW2EtelxcXFxkLV0qW2EtelxcXFxkXSkqKVxcXFwuKStbYS16XXsyLH18JysgLy8gZG9tYWluIG5hbWVcbiAgICAgICcoKFxcXFxkezEsM31cXFxcLil7M31cXFxcZHsxLDN9KSknKyAvLyBPUiBpcCAodjQpIGFkZHJlc3NcbiAgICAgICcoXFxcXDpcXFxcZCspPyhcXFxcL1stYS16XFxcXGQlXy5+K10qKSonKyAvLyBwb3J0IGFuZCBwYXRoXG4gICAgICAnKFxcXFw/WzsmYS16XFxcXGQlXy5+Kz0tXSopPycrIC8vIHF1ZXJ5IHN0cmluZ1xuICAgICAgJyhcXFxcI1stYS16XFxcXGRfXSopPyQnLCdpJyk7IC8vIGZyYWdtZW50IGxvY2F0b3JcbiAgICByZXR1cm4gISFwYXR0ZXJuLnRlc3Qoc3RyKTtcbiAgfVxuXG4gIG9wZW5Nb2RhbChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oaWQpO1xuICB9XG5cbiAgY2xvc2VNb2RhbChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKGlkKTtcbiAgfVxuXG4gIHNlbGVjdERpcigkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRmlsZU1vZGVsW10pID0+IHRoaXMuZmlsZXMgPSBmaWxlcyB8fCBbXSk7XG4gIH1cblxuICBzZWxlY3RGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBtb2RhbElkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0ge2d1aWQ6ICRldmVudCwgcGFzc3dvcmQ6IHBhc3N3b3JkfTtcbiAgICB0aGlzLmZpbGUgPSBudWxsO1xuICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UubG9hZEZpbGUodGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKChmaWxlOiBGaWxlRGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICAgICAgdGhpcy5mb3JtYXREaXNhYmxlZCA9ICF0aGlzLmZpbGU7XG4gICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgaWYgKGZpbGUucGFnZXMgJiYgZmlsZS5wYWdlc1swXSkge1xuICAgICAgICAgICAgdGhpcy5fcGFnZUhlaWdodCA9IGZpbGUucGFnZXNbMF0uaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5fcGFnZVdpZHRoID0gZmlsZS5wYWdlc1swXS53aWR0aDtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuem9vbU9wdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFpvb20oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcHJlbG9hZFBhZ2VDb3VudCA9ICF0aGlzLmlmUHJlc2VudGF0aW9uKCkgPyB0aGlzLnZpZXdlckNvbmZpZy5wcmVsb2FkUGFnZUNvdW50IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHRoaXMudmlld2VyQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgIT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnZpZXdlckNvbmZpZy5wcmVsb2FkUGFnZUNvdW50IDwgMyA/IDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnZpZXdlckNvbmZpZy5wcmVsb2FkUGFnZUNvdW50KTtcbiAgICAgICAgICBjb25zdCBjb3VudFBhZ2VzID0gZmlsZS5wYWdlcyA/IGZpbGUucGFnZXMubGVuZ3RoIDogMDtcbiAgICAgICAgICBpZiAocHJlbG9hZFBhZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlmUHJlc2VudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5maWxlLnRodW1ibmFpbHMgPSBmaWxlLnBhZ2VzLnNsaWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByZWxvYWRQYWdlcygxLCBwcmVsb2FkUGFnZUNvdW50ID4gY291bnRQYWdlcyA/IGNvdW50UGFnZXMgOiBwcmVsb2FkUGFnZUNvdW50KTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmlmUHJlc2VudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fdmlld2VyU2VydmljZS5sb2FkVGh1bWJuYWlscyh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGRhdGE6IEZpbGVEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZS50aHVtYm5haWxzID0gZGF0YS5wYWdlcztcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xuICAgICAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9IDE7XG4gICAgICAgICAgdGhpcy5jb3VudFBhZ2VzID0gY291bnRQYWdlcztcblxuICAgICAgICAgIGlmICh0aGlzLmlmUHJlc2VudGF0aW9uKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RodW1ibmFpbHMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RodW1ibmFpbHMgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICAgIGlmIChtb2RhbElkKSB7XG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UobW9kYWxJZCk7XG4gICAgfVxuICAgIHRoaXMuY2xlYXJEYXRhKCk7XG4gIH1cblxuICBwcmVsb2FkUGFnZXMoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UubG9hZFBhZ2UodGhpcy5jcmVkZW50aWFscywgaSkuc3Vic2NyaWJlKChwYWdlOiBQYWdlTW9kZWwpID0+IHtcbiAgICAgICAgdGhpcy5maWxlLnBhZ2VzW2kgLSAxXSA9IHBhZ2U7XG4gICAgICAgIGlmICh0aGlzLmlmUHJlc2VudGF0aW9uKCkgJiYgdGhpcy5maWxlLnRodW1ibmFpbHMgJiYgIXRoaXMuZmlsZS50aHVtYm5haWxzW2kgLSAxXS5kYXRhKSB7XG4gICAgICAgICAgaWYgKHBhZ2UuZGF0YSkge1xuICAgICAgICAgICAgcGFnZS5kYXRhID0gcGFnZS5kYXRhLnJlcGxhY2UoLz5cXHMrPC9nLCAnPjwnKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvXFx1RkVGRi9nLCBcIlwiKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvaHJlZj1cIlxcL3ZpZXdlci9nLCAnaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC92aWV3ZXInKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvc3JjPVwiXFwvdmlld2VyL2csICdzcmM9XCJodHRwOi8vbG9jYWxob3N0OjgwODAvdmlld2VyJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL2RhdGE9XCJcXC92aWV3ZXIvZywgJ2RhdGE9XCJodHRwOi8vbG9jYWxob3N0OjgwODAvdmlld2VyJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZmlsZS50aHVtYm5haWxzW2kgLSAxXS5kYXRhID0gcGFnZS5kYXRhO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLnVwbG9hZChudWxsLCAkZXZlbnQsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKCh1cGxvYWRlZERvY3VtZW50OiBhbnkpID0+IHtcbiAgICAgIGlmICh0aGlzLmZpbGVQYXJhbSAhPT0gJycpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RGaWxlKHVwbG9hZGVkRG9jdW1lbnQuZ3VpZCwgJycsICcnKTtcbiAgICAgICAgdGhpcy5maWxlUGFyYW0gPSAnJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZXh0UGFnZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmV4dFBhZ2UoKTtcbiAgfVxuXG4gIHByZXZQYWdlKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5wcmV2UGFnZSgpO1xuICB9XG5cbiAgdG9MYXN0UGFnZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UudG9MYXN0UGFnZSgpO1xuICB9XG5cbiAgdG9GaXJzdFBhZ2UoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLnRvRmlyc3RQYWdlKCk7XG4gIH1cblxuICBuYXZpZ2F0ZVRvUGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmF2aWdhdGVUbyhwYWdlKTtcbiAgfVxuXG4gIHpvb21JbigpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBpZiAodGhpcy5fem9vbSA8IDQ5MCkge1xuICAgICAgdGhpcy56b29tID0gdGhpcy5fem9vbSArIDEwO1xuICAgIH1cbiAgfVxuXG4gIHpvb21PdXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRoaXMuX3pvb20gPiAzMCkge1xuICAgICAgdGhpcy56b29tID0gdGhpcy5fem9vbSAtIDEwO1xuICAgIH1cbiAgfVxuXG4gIGZpbGVEcm9wcGVkKCRldmVudCl7XG4gICAgdGhpcy5maWxlV2FzRHJvcHBlZCA9ICRldmVudDtcbiAgfVxuXG4gIHByaXZhdGUgcHRUb1B4KHB0OiBudW1iZXIpIHtcbiAgICAvL3B0ICogOTYgLyA3MiA9IHB4LlxuICAgIHJldHVybiBwdCAqIDk2IC8gNzI7XG4gIH1cblxuICBwcml2YXRlIGdldEZpdFRvV2lkdGgoKSB7XG4gICAgLy8gSW1hZ2VzIGFuZCBFeGNlbC1yZWxhdGVkIGZpbGVzIHJlY2VpdmluZyBkaW1lbnNpb25zIGluIHB4IGZyb20gc2VydmVyXG4gICAgY29uc3QgcGFnZVdpZHRoID0gdGhpcy5mb3JtYXRJY29uICYmICh0aGlzLmZvcm1hdEljb24gPT09IFwiZmlsZS1leGNlbFwiIHx8IHRoaXMuZm9ybWF0SWNvbiA9PT0gXCJmaWxlLWltYWdlXCIpID8gdGhpcy5fcGFnZVdpZHRoIDogdGhpcy5wdFRvUHgodGhpcy5fcGFnZVdpZHRoKTtcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5mb3JtYXRJY29uICYmICh0aGlzLmZvcm1hdEljb24gPT09IFwiZmlsZS1leGNlbFwiIHx8IHRoaXMuZm9ybWF0SWNvbiA9PT0gXCJmaWxlLWltYWdlXCIpID8gdGhpcy5fcGFnZUhlaWdodCA6IHRoaXMucHRUb1B4KHRoaXMuX3BhZ2VIZWlnaHQpO1xuICAgIGNvbnN0IG9mZnNldFdpZHRoID0gcGFnZVdpZHRoID8gcGFnZVdpZHRoIDogd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICByZXR1cm4gKHBhZ2VIZWlnaHQgPiBwYWdlV2lkdGggJiYgTWF0aC5yb3VuZChvZmZzZXRXaWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSA8IDIpID8gMjAwIC0gTWF0aC5yb3VuZChvZmZzZXRXaWR0aCAqIDEwMCAvIHdpbmRvdy5pbm5lcldpZHRoKSA6IE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggKiAxMDAgLyBvZmZzZXRXaWR0aCk7XG4gIH1cblxuICBwcml2YXRlIGdldEZpdFRvSGVpZ2h0KCkge1xuICAgIGNvbnN0IHBhZ2VXaWR0aCA9IHRoaXMuZm9ybWF0SWNvbiAmJiAodGhpcy5mb3JtYXRJY29uID09PSBcImZpbGUtZXhjZWxcIiB8fCB0aGlzLmZvcm1hdEljb24gPT09IFwiZmlsZS1pbWFnZVwiKSA/IHRoaXMuX3BhZ2VXaWR0aCA6IHRoaXMucHRUb1B4KHRoaXMuX3BhZ2VXaWR0aCk7XG4gICAgY29uc3QgcGFnZUhlaWdodCA9IHRoaXMuZm9ybWF0SWNvbiAmJiAodGhpcy5mb3JtYXRJY29uID09PSBcImZpbGUtZXhjZWxcIiB8fCB0aGlzLmZvcm1hdEljb24gPT09IFwiZmlsZS1pbWFnZVwiKSA/IHRoaXMuX3BhZ2VIZWlnaHQgOiB0aGlzLnB0VG9QeCh0aGlzLl9wYWdlSGVpZ2h0KTtcbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCkgPyB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMDAgOiB3aW5kb3cuaW5uZXJIZWlnaHQgKyAxMDA7XG4gICAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gcGFnZUhlaWdodCA/IHBhZ2VIZWlnaHQgOiB3aW5kb3dIZWlnaHQ7XG5cbiAgICByZXR1cm4gKHBhZ2VIZWlnaHQgPiBwYWdlV2lkdGgpID8gTWF0aC5yb3VuZCh3aW5kb3dIZWlnaHQgKiAxMDAgLyBvZmZzZXRIZWlnaHQpIDogTWF0aC5yb3VuZChvZmZzZXRIZWlnaHQgKiAxMDAgLyB3aW5kb3dIZWlnaHQpO1xuICB9XG5cbiAgem9vbU9wdGlvbnMoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldEZpdFRvV2lkdGgoKTtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEZpdFRvSGVpZ2h0KCk7XG4gICAgcmV0dXJuIHRoaXMuX3pvb21TZXJ2aWNlLnpvb21PcHRpb25zKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgc2V0IHpvb20oem9vbSkge1xuICAgIHRoaXMuX3pvb20gPSB6b29tO1xuICAgIHRoaXMuX3pvb21TZXJ2aWNlLmNoYW5nZVpvb20odGhpcy5fem9vbSk7XG4gIH1cblxuICBnZXQgem9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fem9vbTtcbiAgfVxuXG4gIHNlbGVjdFpvb20oJGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnpvb20gPSAkZXZlbnQudmFsdWU7XG4gIH1cblxuICByb3RhdGUoZGVnOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlO1xuICAgIGNvbnN0IHBhZ2VNb2RlbCA9IHRoaXMuZmlsZS5wYWdlc1twYWdlTnVtYmVyIC0gMV07XG5cbiAgICBpZiAodGhpcy5zYXZlUm90YXRlU3RhdGVDb25maWcgJiYgdGhpcy5maWxlKSB7XG4gICAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLnJvdGF0ZSh0aGlzLmNyZWRlbnRpYWxzLCBkZWcsIHBhZ2VOdW1iZXIpLnN1YnNjcmliZSgocGFnZTogUGFnZU1vZGVsKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZS5wYWdlc1twYWdlTnVtYmVyIC0gMV0gPSBwYWdlO1xuXG4gICAgICAgIGlmICh0aGlzLmZpbGUgJiYgdGhpcy5maWxlLnBhZ2VzICYmIHBhZ2VNb2RlbCkge1xuICAgICAgICAgIGNvbnN0IGFuZ2xlID0gcGFnZU1vZGVsLmFuZ2xlICsgZGVnO1xuICAgICAgICAgIGlmIChhbmdsZSA+IDM2MCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBbmdsZShwYWdlTW9kZWwsIDkwKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGFuZ2xlIDwgLTM2MCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBbmdsZShwYWdlTW9kZWwsIC05MCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQW5nbGUocGFnZU1vZGVsLCBhbmdsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlQW5nbGUocGFnZTogUGFnZU1vZGVsLCBhbmdsZTogbnVtYmVyKSB7XG4gICAgcGFnZS5hbmdsZSA9IGFuZ2xlO1xuICB9XG5cbiAgZG93bmxvYWRGaWxlKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odGhpcy5fdmlld2VyU2VydmljZS5nZXREb3dubG9hZFVybCh0aGlzLmNyZWRlbnRpYWxzKSk7XG4gIH1cblxuICBwcmludEZpbGUoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRoaXMudmlld2VyQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgIT09IDApIHtcbiAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UubG9hZFByaW50KHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZGF0YTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZS5wYWdlcyA9IGRhdGEucGFnZXM7XG4gICAgICAgIHRoaXMuX3JlbmRlclByaW50U2VydmljZS5jaGFuZ2VQYWdlcyh0aGlzLmZpbGUucGFnZXMpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlclByaW50U2VydmljZS5jaGFuZ2VQYWdlcyh0aGlzLmZpbGUucGFnZXMpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5UaHVtYm5haWxzKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuc2hvd1RodW1ibmFpbHMpIHtcbiAgICAgIHRoaXMuc2hvd1RodW1ibmFpbHMgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy52aWV3ZXJDb25maWcucHJlbG9hZFBhZ2VDb3VudCA9PT0gMCkge1xuICAgICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmZpbGUudGh1bWJuYWlscy5maWx0ZXIodCA9PiAhdC5kYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UubG9hZFRodW1ibmFpbHModGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKChkYXRhOiBGaWxlRGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGUudGh1bWJuYWlscyA9IGRhdGEucGFnZXM7XG4gICAgICAgICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckRhdGEoKSB7XG4gICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICBwYWdlLmRhdGEgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG9uUmlnaHRDbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5lbmFibGVSaWdodENsaWNrQ29uZmlnO1xuICB9XG5cbiAgb3BlblNlYXJjaCgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLnNob3dTZWFyY2ggPSAhdGhpcy5zaG93U2VhcmNoO1xuICB9XG5cbiAgLy8gb25QaW5jaEluKCRldmVudCl7XG4gIC8vICAgdGhpcy56b29tT3V0KCk7XG4gIC8vIH1cblxuICAvLyBvblBpbmNoT3V0KCRldmVudCl7XG4gIC8vICAgdGhpcy56b29tSW4oKTtcbiAgLy8gfVxuXG4gIHByaXZhdGUgcmVmcmVzaFpvb20oKSB7XG4gICAgdGhpcy5mb3JtYXRJY29uID0gdGhpcy5maWxlID8gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmljb24gOiBudWxsO1xuICAgIHRoaXMuem9vbSA9IHRoaXMuX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCkgPyAxMDAgOiB0aGlzLmdldEZpdFRvV2lkdGgoKTtcbiAgfVxuXG4gIHNlbGVjdEN1cnJlbnRQYWdlKHBhZ2VOdW1iZXIpXG4gIHtcbiAgICB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciA9IHBhZ2VOdW1iZXI7XG4gIH1cblxuICBvbk1vdXNlV2hlZWxVcCgkZXZlbnQpXG4gIHtcbiAgICBpZiAodGhpcy5pZlByZXNlbnRhdGlvbigpICYmIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyICE9PSAxKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciA9IHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyIC0gMTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlV2hlZWxEb3duKCRldmVudClcbiAge1xuICAgIGlmICh0aGlzLmlmUHJlc2VudGF0aW9uKCkgJiYgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgIT09IHRoaXMuZmlsZS5wYWdlcy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLmZpbGUucGFnZXNbdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXJdICYmICF0aGlzLmZpbGUucGFnZXNbdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXJdLmRhdGEpIHtcbiAgICAgICAgdGhpcy5wcmVsb2FkUGFnZXModGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIsIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyICsgMSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyID0gdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgKyAxO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyID0gdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgKyAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19