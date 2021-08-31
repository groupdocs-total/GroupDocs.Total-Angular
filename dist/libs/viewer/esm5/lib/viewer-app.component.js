/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostListener, ChangeDetectorRef } from '@angular/core';
import { ViewerService } from "./viewer.service";
import { ModalService, UploadFilesService, NavigateService, PagePreloadService, ZoomService, RenderPrintService, FileUtil, PasswordService, CommonModals, LoadingMaskService } from "@groupdocs.examples.angular/common-components";
import { ViewerConfigService } from "./viewer-config.service";
import { WindowService } from "@groupdocs.examples.angular/common-components";
import { Constants } from './viewer.constants';
import { IntervalTimer } from './interval-timer';
var ViewerAppComponent = /** @class */ (function () {
    function ViewerAppComponent(_viewerService, _modalService, configService, uploadFilesService, _navigateService, zoomService, pagePreloadService, _renderPrintService, passwordService, _windowService, _loadingMaskService, cdr) {
        var _this = this;
        this._viewerService = _viewerService;
        this._modalService = _modalService;
        this._navigateService = _navigateService;
        this._renderPrintService = _renderPrintService;
        this._windowService = _windowService;
        this._loadingMaskService = _loadingMaskService;
        this.cdr = cdr;
        this.title = 'viewer';
        this.files = [];
        this.countPages = 0;
        this.formatDisabled = !this.file;
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
        function (viewerConfig) {
            _this.viewerConfig = viewerConfig;
        }));
        uploadFilesService.uploadsChange.subscribe((/**
         * @param {?} uploads
         * @return {?}
         */
        function (uploads) {
            if (uploads) {
                /** @type {?} */
                var i = void 0;
                for (i = 0; i < uploads.length; i++) {
                    _this._viewerService.upload(uploads.item(i), '', _this.viewerConfig.rewrite).subscribe((/**
                     * @param {?} obj
                     * @return {?}
                     */
                    function (obj) {
                        _this.fileWasDropped ? _this.selectFile(obj.guid, '', '') : _this.selectDir('');
                    }));
                }
            }
        }));
        pagePreloadService.checkPreload.subscribe((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            if (_this.viewerConfig.preloadPageCount !== 0) {
                for (var i = page; i < page + 2; i++) {
                    if (i > 0 && i <= _this.countPages && !_this.file.pages[i - 1].data) {
                        _this.preloadPages(i, i);
                    }
                }
            }
        }));
        passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        function (pass) {
            _this.selectFile(_this.credentials.guid, pass, CommonModals.PasswordRequired);
        }));
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @return {?}
         */
        function () {
            _this.isDesktop = _windowService.isDesktop();
            if (!_this.runPresentation) {
                _this.refreshZoom();
            }
        }));
    }
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.fullScreen = /**
     * @return {?}
     */
    function () {
        if (!document.fullscreenElement) {
            this.closeFullScreen();
        }
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.viewerConfig.defaultDocument !== "") {
            this.isLoading = true;
            this.selectFile(this.viewerConfig.defaultDocument, "", "");
            this.selectCurrentOrFirstPage();
            return;
        }
        /** @type {?} */
        var queryString = window.location.search;
        if (queryString) {
            /** @type {?} */
            var urlParams = new URLSearchParams(queryString);
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
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._loadingMaskService
            .onLoadingChanged
            .subscribe((/**
         * @param {?} loading
         * @return {?}
         */
        function (loading) { return _this.isLoading = loading; }));
        this.refreshZoom();
    };
    Object.defineProperty(ViewerAppComponent.prototype, "rewriteConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.viewerConfig ? this.viewerConfig.rewrite : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "zoomConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.viewerConfig ? this.viewerConfig.zoom : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "pageSelectorConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.viewerConfig ? this.viewerConfig.pageSelector : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "searchConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.viewerConfig ? this.viewerConfig.search : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "thumbnailsConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.viewerConfig ? this.viewerConfig.thumbnails : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "rotateConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.viewerConfig ? this.viewerConfig.rotate : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "downloadConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.viewerConfig ? this.viewerConfig.download : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "uploadConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.viewerConfig ? this.viewerConfig.upload : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "printConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.viewerConfig ? this.viewerConfig.print : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "browseConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.viewerConfig ? this.viewerConfig.browse : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "htmlModeConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.viewerConfig ? this.viewerConfig.htmlMode : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "saveRotateStateConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.viewerConfig ? this.viewerConfig.saveRotateState : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "enableRightClickConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.viewerConfig ? this.viewerConfig.enableRightClick : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "currentPage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._navigateService.currentPage;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.ifPresentation = /**
     * @return {?}
     */
    function () {
        return this.file ? FileUtil.find(this.file.guid, false).format === "Microsoft PowerPoint" : false;
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.ifExcel = /**
     * @return {?}
     */
    function () {
        return this.file ? FileUtil.find(this.file.guid, false).format === "Microsoft Excel" : false;
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.ifImage = /**
     * @return {?}
     */
    function () {
        return this.file ? this.formatIcon === "file-image" : false;
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.getFileName = /**
     * @return {?}
     */
    function () {
        return this.file.guid.replace(/^.*[\\\/]/, '');
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ViewerAppComponent.prototype.openModal = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this._modalService.open(id);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ViewerAppComponent.prototype.closeModal = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this._modalService.close(id);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ViewerAppComponent.prototype.selectDir = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        this._viewerService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        function (files) { return _this.files = files || []; }));
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.selectCurrentOrFirstPage = /**
     * @return {?}
     */
    function () {
        this.selectedPageNumber = this._navigateService.currentPage !== 0 ? this._navigateService.currentPage : 1;
    };
    /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @return {?}
     */
    ViewerAppComponent.prototype.selectFile = /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @return {?}
     */
    function ($event, password, modalId) {
        var _this = this;
        this.credentials = { guid: $event, password: password };
        this.file = null;
        this._viewerService.loadFile(this.credentials).subscribe((/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            _this.file = file;
            _this.formatDisabled = !_this.file;
            _this.pagesToPreload = [];
            if (file) {
                _this.formatIcon = _this.file ? FileUtil.find(_this.file.guid, false).icon : null;
                if (file.pages && file.pages[0]) {
                    _this._pageHeight = file.pages[0].height;
                    _this._pageWidth = file.pages[0].width;
                    _this.options = _this.zoomOptions();
                    _this.timerOptions = _this.getTimerOptions();
                    _this.refreshZoom();
                }
                /** @type {?} */
                var preloadPageCount = !_this.ifPresentation()
                    ? _this.viewerConfig.preloadPageCount
                    : _this.viewerConfig.preloadPageCount !== 0 && _this.viewerConfig.preloadPageCount < 3
                        ? 3
                        : _this.viewerConfig.preloadPageCount;
                /** @type {?} */
                var countPages = file.pages ? file.pages.length : 0;
                if (preloadPageCount > 0) {
                    if (_this.ifPresentation()) {
                        _this.file.thumbnails = file.pages.slice();
                    }
                    _this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                    if (!_this.ifPresentation()) {
                        _this._viewerService.loadThumbnails(_this.credentials).subscribe((/**
                         * @param {?} data
                         * @return {?}
                         */
                        function (data) {
                            _this.file.thumbnails = data.pages;
                        }));
                    }
                }
                _this.selectedPageNumber = _this.selectedPageNumber ? _this.selectedPageNumber : 1;
                _this._navigateService.countPages = countPages;
                _this._navigateService.currentPage = _this.selectedPageNumber;
                _this.countPages = countPages;
                if (_this.ifPresentation()) {
                    _this.showThumbnails = true;
                }
                else {
                    _this.showThumbnails = false;
                }
                _this.runPresentation = false;
            }
            _this.cdr.detectChanges();
        }));
        if (modalId) {
            this._modalService.close(modalId);
        }
        this.clearData();
    };
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    ViewerAppComponent.prototype.preloadPages = /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (start, end) {
        var _this = this;
        var _loop_1 = function (i) {
            if (this_1.pagesToPreload.indexOf(i) !== -1) {
                return "continue";
            }
            this_1.pagesToPreload.push(i);
            this_1._viewerService.loadPage(this_1.credentials, i).subscribe((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                _this.file.pages[i - 1] = page;
                if (_this.ifPresentation() && _this.file.thumbnails && !_this.file.thumbnails[i - 1].data) {
                    if (page.data) {
                        page.data = page.data.replace(/>\s+</g, '><')
                            .replace(/\uFEFF/g, "");
                    }
                    _this.file.thumbnails[i - 1].data = page.data;
                }
            }));
        };
        var this_1 = this;
        for (var i = start; i <= end; i++) {
            _loop_1(i);
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ViewerAppComponent.prototype.upload = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        this._viewerService.upload(null, $event, this.rewriteConfig).subscribe((/**
         * @param {?} uploadedDocument
         * @return {?}
         */
        function (uploadedDocument) {
            if (_this.fileParam !== '') {
                _this.selectFile(uploadedDocument.guid, '', '');
                _this.fileParam = '';
            }
            else {
                _this.selectDir('');
            }
        }));
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        if (this.formatDisabled)
            return;
        if (this.intervalTimer && this._navigateService.currentPage + 1 > this.countPages) {
            this.intervalTimer.stop();
            this.intervalTime = 0;
        }
        this._navigateService.nextPage();
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        if (this.formatDisabled)
            return;
        this._navigateService.prevPage();
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.toLastPage = /**
     * @return {?}
     */
    function () {
        if (this.formatDisabled)
            return;
        this._navigateService.toLastPage();
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.toFirstPage = /**
     * @return {?}
     */
    function () {
        if (this.formatDisabled)
            return;
        this._navigateService.toFirstPage();
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.zoomIn = /**
     * @return {?}
     */
    function () {
        if (this.formatDisabled)
            return;
        if (this._zoom < 490) {
            this.zoom = this._zoom + 10;
        }
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.zoomOut = /**
     * @return {?}
     */
    function () {
        if (this.formatDisabled)
            return;
        if (this._zoom > 30) {
            this.zoom = this._zoom - 10;
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ViewerAppComponent.prototype.fileDropped = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.fileWasDropped = $event;
    };
    /**
     * @private
     * @param {?} pt
     * @return {?}
     */
    ViewerAppComponent.prototype.ptToPx = /**
     * @private
     * @param {?} pt
     * @return {?}
     */
    function (pt) {
        //pt * 96 / 72 = px.
        return pt * 96 / 72;
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.getFitToWidth = /**
     * @return {?}
     */
    function () {
        // Images and Excel-related files receiving dimensions in px from server
        /** @type {?} */
        var pageWidth = this.formatIcon && (this.ifExcel() || this.ifImage()) ? this._pageWidth : this.ptToPx(this._pageWidth);
        /** @type {?} */
        var pageHeight = this.formatIcon && (this.ifExcel() || this.ifImage()) ? this._pageHeight : this.ptToPx(this._pageHeight);
        /** @type {?} */
        var offsetWidth = pageWidth ? pageWidth : window.innerWidth;
        /** @type {?} */
        var presentationThumbnails = this.isDesktop && this.ifPresentation() && !this.runPresentation;
        if (!this.runPresentation) {
            return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / (presentationThumbnails ? window.innerWidth - Constants.thumbnailsWidth - Constants.scrollWidth : window.innerWidth))
                : (!this.isDesktop ? Math.round(window.innerWidth * 100 / offsetWidth)
                    : Math.round(((presentationThumbnails ? window.innerWidth - Constants.thumbnailsWidth - Constants.scrollWidth
                        : window.innerHeight) / offsetWidth) * 100));
        }
        else {
            return Math.round(window.innerWidth * 100 / offsetWidth);
        }
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.getFitToHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pageWidth = this.formatIcon && (this.ifExcel() || this.ifImage()) ? this._pageWidth : this.ptToPx(this._pageWidth);
        /** @type {?} */
        var pageHeight = this.formatIcon && (this.ifExcel() || this.ifImage()) ? this._pageHeight : this.ptToPx(this._pageHeight);
        /** @type {?} */
        var windowHeight = (pageHeight > pageWidth) ? window.innerHeight - 100 : window.innerHeight + 100;
        /** @type {?} */
        var offsetHeight = pageHeight ? pageHeight : windowHeight;
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
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.zoomOptions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var width = this.getFitToWidth();
        /** @type {?} */
        var height = this.getFitToHeight();
        return this.zoomService.zoomOptions(width, height);
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.getTimerOptions = /**
     * @return {?}
     */
    function () {
        return [{ value: 0, name: 'None', separator: false },
            { value: 5, name: '5 sec', separator: false },
            { value: 10, name: '10 sec', separator: false },
            { value: 15, name: '15 sec', separator: false },
            { value: 30, name: '30 sec', separator: false }];
    };
    Object.defineProperty(ViewerAppComponent.prototype, "zoom", {
        get: /**
         * @return {?}
         */
        function () {
            return this._zoom;
        },
        set: /**
         * @param {?} zoom
         * @return {?}
         */
        function (zoom) {
            this._zoom = zoom;
            this.zoomService.changeZoom(this._zoom);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} $event
     * @return {?}
     */
    ViewerAppComponent.prototype.selectZoom = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.zoom = $event.value;
    };
    /**
     * @param {?} deg
     * @return {?}
     */
    ViewerAppComponent.prototype.rotate = /**
     * @param {?} deg
     * @return {?}
     */
    function (deg) {
        var _this = this;
        if (this.formatDisabled)
            return;
        /** @type {?} */
        var pageNumber = this._navigateService.currentPage;
        /** @type {?} */
        var pageModel = this.file.pages[pageNumber - 1];
        if (this.saveRotateStateConfig && this.file) {
            this._viewerService.rotate(this.credentials, deg, pageNumber).subscribe((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                /** @type {?} */
                var updatedData = page.data.replace(/>\s+</g, '><')
                    .replace(/\uFEFF/g, "");
                page.data = updatedData;
                _this.file.pages[pageNumber - 1] = page;
                if (_this.file && _this.file.pages && pageModel) {
                    /** @type {?} */
                    var angle = pageModel.angle + deg;
                    if (angle > 360) {
                        _this.changeAngle(pageModel, 90);
                    }
                    else if (angle < -360) {
                        _this.changeAngle(pageModel, -90);
                    }
                    else {
                        _this.changeAngle(pageModel, angle);
                    }
                }
            }));
        }
    };
    /**
     * @private
     * @param {?} page
     * @param {?} angle
     * @return {?}
     */
    ViewerAppComponent.prototype.changeAngle = /**
     * @private
     * @param {?} page
     * @param {?} angle
     * @return {?}
     */
    function (page, angle) {
        page.angle = angle;
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.downloadFile = /**
     * @return {?}
     */
    function () {
        if (this.formatDisabled)
            return;
        window.location.assign(this._viewerService.getDownloadUrl(this.credentials));
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.printFile = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.formatDisabled)
            return;
        if (this.viewerConfig.htmlMode) {
            this._viewerService.loadPrint(this.credentials).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this._renderPrintService.changePages(data.pages);
            }));
        }
        else {
            this._renderPrintService.changePages(this.file.pages);
        }
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.openThumbnails = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
            function (t) { return !t.data; })).length > 0) {
                this._viewerService.loadThumbnails(this.credentials).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    _this.file.thumbnails = data.pages;
                    _this.showThumbnails = true;
                }));
            }
            else {
                this.showThumbnails = true;
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    ViewerAppComponent.prototype.clearData = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        if (!this.file || !this.file.pages) {
            return;
        }
        try {
            for (var _b = tslib_1.__values(this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                var page = _c.value;
                page.data = null;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.onRightClick = /**
     * @return {?}
     */
    function () {
        return this.enableRightClickConfig;
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.openSearch = /**
     * @return {?}
     */
    function () {
        if (this.formatDisabled)
            return;
        this.showSearch = !this.showSearch;
    };
    /**
     * @private
     * @return {?}
     */
    ViewerAppComponent.prototype.refreshZoom = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.file) {
            this.formatIcon = FileUtil.find(this.file.guid, false).icon;
            this.zoom = this._windowService.isDesktop() && !(this.ifImage() || this.ifPresentation()) ? 100
                : (this.ifImage() ? this.getFitToHeight()
                    : this.getFitToWidth());
        }
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    ViewerAppComponent.prototype.selectCurrentPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        this.selectedPageNumber = pageNumber;
        this._navigateService.currentPage = pageNumber;
        if (this.runPresentation && this.intervalTime > 0 && this.intervalTimer.state !== 3) {
            this.resetInterval();
            if (this.slideInRange()) {
                this.startCountDown(this.intervalTime, true);
            }
        }
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.onMouseWheelUp = /**
     * @return {?}
     */
    function () {
        this.startScrollTime = Date.now();
        if (this.ifPresentation() && this.selectedPageNumber !== 1) {
            if (this.startScrollTime - this.endScrollTime > 300 && this.vertScrollEnded(true)) {
                this.selectedPageNumber = this.selectedPageNumber - 1;
                this.endScrollTime = Date.now();
            }
        }
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.onMouseWheelDown = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} onTop
     * @return {?}
     */
    ViewerAppComponent.prototype.vertScrollEnded = /**
     * @param {?} onTop
     * @return {?}
     */
    function (onTop) {
        /** @type {?} */
        var gdDocument = (/** @type {?} */ (document.getElementsByClassName('gd-document')[0]));
        if (onTop) {
            return gdDocument.scrollTop === 0;
        }
        else
            return gdDocument.offsetHeight + gdDocument.scrollTop >= gdDocument.scrollHeight;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ViewerAppComponent.prototype.toggleTimer = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
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
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.showCountDown = /**
     * @return {?}
     */
    function () {
        return this.intervalTime > 0 && (this.slideInRange());
    };
    /**
     * @param {?} seconds
     * @param {?=} reset
     * @return {?}
     */
    ViewerAppComponent.prototype.startCountDown = /**
     * @param {?} seconds
     * @param {?=} reset
     * @return {?}
     */
    function (seconds, reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        clearInterval(this.countDownInterval);
        if (seconds > 0) {
            this.secondsLeft = seconds;
            seconds--;
            /** @type {?} */
            var interval_1 = setInterval((/**
             * @return {?}
             */
            function () {
                _this.secondsLeft = seconds;
                seconds--;
                if (seconds === 0) {
                    clearInterval(interval_1);
                }
            }), 1000);
            this.countDownInterval = interval_1;
        }
    };
    /**
     * @private
     * @param {?} intervalTime
     * @return {?}
     */
    ViewerAppComponent.prototype.startInterval = /**
     * @private
     * @param {?} intervalTime
     * @return {?}
     */
    function (intervalTime) {
        var _this = this;
        this.intervalTimer = new IntervalTimer((/**
         * @return {?}
         */
        function () {
            if (_this.slideInRange()) {
                _this.nextPage();
                if (_this.slideInRange()) {
                    _this.startCountDown(intervalTime);
                }
            }
            else {
                _this.intervalTimer.stop();
            }
        }), intervalTime * 1000);
    };
    /**
     * @private
     * @return {?}
     */
    ViewerAppComponent.prototype.slideInRange = /**
     * @private
     * @return {?}
     */
    function () {
        return this._navigateService.currentPage + 1 <= this.countPages;
    };
    /**
     * @private
     * @return {?}
     */
    ViewerAppComponent.prototype.resetInterval = /**
     * @private
     * @return {?}
     */
    function () {
        this.intervalTimer.stop();
        this.startInterval(this.intervalTime);
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.pausePresenting = /**
     * @return {?}
     */
    function () {
        this.intervalTimer.pause();
        this.startCountDown(0, true);
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.resumePresenting = /**
     * @return {?}
     */
    function () {
        this.intervalTimer.resume();
        /** @type {?} */
        var secondsRemaining = Math.round(this.intervalTimer.remaining / 1000);
        this.startCountDown(secondsRemaining);
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.presentationRunning = /**
     * @return {?}
     */
    function () {
        return this.intervalTimer && this.intervalTimer.state === 1 && this.slideInRange();
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.presentationPaused = /**
     * @return {?}
     */
    function () {
        return this.intervalTimer && this.intervalTimer.state === 2 && this.slideInRange();
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.startPresentation = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.showThumbnails = false;
        this.openFullScreen();
        this.runPresentation = !this.runPresentation;
        /** @type {?} */
        var intervalId = setInterval((/**
         * @return {?}
         */
        function () {
            if (screen.height === window.innerHeight && screen.width === window.innerWidth) {
                _this.zoomService.changeZoom(window.innerWidth / window.innerHeight < 1.7 && _this._pageWidth / _this._pageHeight > 1.7
                    ? _this.getFitToWidth() : _this.getFitToHeight());
                clearInterval(intervalId);
            }
        }), 50);
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.openFullScreen = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var docElmWithBrowsersFullScreenFunctions = (/** @type {?} */ (document.documentElement));
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
    };
    /**
     * @param {?=} byButton
     * @return {?}
     */
    ViewerAppComponent.prototype.closeFullScreen = /**
     * @param {?=} byButton
     * @return {?}
     */
    function (byButton) {
        if (byButton === void 0) { byButton = false; }
        if (byButton) {
            /** @type {?} */
            var docWithBrowsersExitFunctions = (/** @type {?} */ (document));
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
    };
    ViewerAppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-viewer',
                    template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick()\">\n  <div class=\"top-panel\" *ngIf=\"!runPresentation\">\n    <gd-logo [logo]=\"'viewer'\" icon=\"eye\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" title=\"Browse files\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-select class=\"mobile-hide select-left\" [disabled]=\"formatDisabled\" [options]=\"options\" (selected)=\"selectZoom($event)\"\n                 [showSelected]=\"{ name: zoom+'%', value : zoom}\" *ngIf=\"zoomConfig\" ></gd-select>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" title=\"Zoom In\" (click)=\"zoomIn()\"\n                 *ngIf=\"zoomConfig\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" title=\"Zoom Out\"\n                 (click)=\"zoomOut()\" *ngIf=\"zoomConfig\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-left'\" title=\"First Page\"\n                 (click)=\"toFirstPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" title=\"Previous Page\"\n                 (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <div class=\"current-page-number\" [ngClass]=\"{'active': !formatDisabled}\" *ngIf=\"formatIcon !== 'file-excel'\">{{currentPage}}/{{countPages}}</div>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" title=\"Next Page\"\n                 (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-right'\" title=\"Last Page\"\n                 (click)=\"toLastPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'undo'\" title=\"Rotate CCW\" (click)=\"rotate(-90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'redo'\" title=\"Rotate CW\" (click)=\"rotate(90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" title=\"Download\"\n                 (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" title=\"Print\" (click)=\"printFile()\"\n                 *ngIf=\"printConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search'\" title=\"Search\" (click)=\"openSearch()\"\n                 *ngIf=\"searchConfig && !ifPresentation()\" ></gd-button>\n      <gd-search (hidePanel)=\"showSearch = !$event\" *ngIf=\"showSearch\" ></gd-search>\n\n      <gd-button class=\"thumbnails-button btn-right\" [disabled]=\"formatDisabled\" [icon]=\"'th-large'\" title=\"Thumbnails\"\n                 (click)=\"openThumbnails()\" *ngIf=\"thumbnailsConfig && isDesktop && formatIcon !== 'file-excel' && (!ifPresentation() ||\n                 ifPresentation() && runPresentation)\"></gd-button>\n      <gd-button class=\"thumbnails-button mobile-hide btn-right smp-start-stop\" [disabled]=\"formatDisabled\" [icon]=\"'play'\" title=\"Run presentation\"\n                 (click)=\"startPresentation()\" *ngIf=\"ifPresentation() && !runPresentation\">Present</gd-button>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"top-panel\" *ngIf=\"runPresentation\">\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <div class=\"slides-title\">Viewer</div>\n      <div class=\"slides-filename\">{{getFileName()}}</div>\n      <div class=\"slides-buttons\">\n        <gd-select class=\"mobile-hide select-right\" [disabled]=\"formatDisabled\" [options]=\"timerOptions\" (selected)=\"toggleTimer($event)\"\n        [icon]=\"'clock'\" *ngIf=\"zoomConfig\" ></gd-select>\n        <gd-button class=\"mobile-hide\" *ngIf=\"presentationRunning()\" [disabled]=\"formatDisabled\" [icon]=\"'pause'\" title=\"Pause presenting\"\n        (click)=\"pausePresenting()\"></gd-button>\n        <gd-button class=\"mobile-hide\" *ngIf=\"presentationPaused()\" [disabled]=\"formatDisabled\" [icon]=\"'step-forward'\" title=\"Resume presenting\"\n        (click)=\"resumePresenting()\"></gd-button>\n        <gd-button class=\"mobile-hide btn-right smp-start-stop\" [disabled]=\"formatDisabled\" [icon]=\"'stop'\" title=\"Stop presenting\"\n        (click)=\"closeFullScreen(true)\">Stop</gd-button>\n      </div>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"doc-panel\" *ngIf=\"file\" #docPanel>\n    <gd-thumbnails *ngIf=\"showThumbnails && !ifPresentation() && isDesktop\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\" (selectedPage)=\"selectCurrentPage($event)\"></gd-thumbnails>\n    <gd-thumbnails *ngIf=\"showThumbnails && ifPresentation() && !runPresentation && isDesktop\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\" (selectedPage)=\"selectCurrentPage($event)\" gdScrollable [isPresentation]=\"ifPresentation()\"></gd-thumbnails>\n\n    <gd-document class=\"gd-document\" *ngIf=\"(file &&\n                                            (ifExcel() && !htmlModeConfig) ||\n                                            (ifPresentation() && isDesktop && !runPresentation) ||\n                                            (!ifExcel() && !ifPresentation()))\" [file]=\"file\" [mode]=\"htmlModeConfig\" [showActiveSlide]=\"true\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" [selectedPage]=\"selectedPageNumber\" gdRenderPrint [htmlMode]=\"htmlModeConfig\" gdMouseWheel (mouseWheelUp)=\"onMouseWheelUp()\" (mouseWheelDown)=\"onMouseWheelDown()\"></gd-document>\n    <gd-excel-document class=\"gd-document\" *ngIf=\"file && ifExcel() && htmlModeConfig\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-excel-document>\n    <gd-run-presentation class=\"gd-document\" *ngIf=\"(file && ifPresentation() && runPresentation) ||\n                                                    (file && ifPresentation() && !isDesktop)\" [file]=\"file\" [currentPage]=\"currentPage\" [mode]=\"htmlModeConfig\"\n                                                    (selectedPage)=\"selectCurrentPage($event)\"\n                 [preloadPageCount]=\"0\"></gd-run-presentation>\n    <div class=\"slides-nav\" *ngIf=\"runPresentation\">\n      <div class=\"timer\" *ngIf=\"showCountDown()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon><span [ngClass]=\"secondsLeft >= 10 ? 'seconds-remaining two-digits' : 'seconds-remaining'\">{{secondsLeft}}</span>\n      </div>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\"\n      (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\"\n      (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n    </div>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n    Or drop file here\n  </gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.current-page-number{margin-left:7px;font-size:14px;color:#959da5;width:37px;height:37px;line-height:37px;text-align:center}.current-page-number.active{color:#fff}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.thumbnails-button{position:absolute;right:3px}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}.btn-right{margin-right:7px}.smp-start-stop ::ng-deep .button{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;border:1px solid;border-radius:5px;padding:0 10px!important}::ng-deep .tools .button,::ng-deep .tools .nav-caret,::ng-deep .tools .selected-value{color:#fff!important}::ng-deep .tools .button.inactive,::ng-deep .tools .nav-caret.inactive,::ng-deep .tools .selected-value.inactive{color:#959da5!important}::ng-deep .tools .button{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .select-left .select{position:relative}::ng-deep .tools .select-left .dropdown-menu{top:40px;left:0}::ng-deep .tools .select-right .select{position:relative}::ng-deep .tools .select-right .dropdown-menu{top:40px;right:0}::ng-deep .tools .dropdown-menu .option{color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 15px!important}::ng-deep .tools .select{width:37px;height:37px;margin-left:7px;line-height:37px;text-align:center}::ng-deep .tools .slides-title{color:#fff;padding-left:12px;font-size:18px}::ng-deep .tools .slides-filename{-webkit-box-flex:1;flex-grow:1;text-align:center;color:#fff;text-overflow:ellipsis;white-space:nowrap;padding-left:20px;overflow:hidden}::ng-deep .tools .slides-buttons{display:-webkit-box;display:flex}::ng-deep .tools .slides-buttons ::ng-deep .select{color:#fff;cursor:pointer}::ng-deep .tools ::ng-deep .gd-nav-search-container .icon-button{margin:0 0 0 7px!important}.slides-nav{position:absolute;right:30px;bottom:30px;display:-webkit-box;display:flex}.slides-nav ::ng-deep .button{font-size:37px;background-color:#edf0f2;border-radius:3px}.slides-nav ::ng-deep .timer{font-size:42px;line-height:6px;color:#959da5;position:relative}.slides-nav ::ng-deep .timer .seconds-remaining{position:absolute;margin-left:5px;font-size:16px;top:18px;left:12px}.slides-nav ::ng-deep .timer .seconds-remaining.two-digits{left:6px!important}::ng-deep .page.presentation .gd-wrapper{pointer-events:none}@media (max-width:1037px){.current-page-number,.mobile-hide{display:none}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .tools .gd-nav-search-btn .icon-button{height:37px;width:37px}::ng-deep .tools .gd-nav-search-btn .button{font-size:14px}::ng-deep .tools .gd-nav-search-container{top:59px!important}}"]
                }] }
    ];
    /** @nocollapse */
    ViewerAppComponent.ctorParameters = function () { return [
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
        { type: ChangeDetectorRef }
    ]; };
    ViewerAppComponent.propDecorators = {
        fullScreen: [{ type: HostListener, args: ["document:fullscreenchange", [],] }]
    };
    return ViewerAppComponent;
}());
export { ViewerAppComponent };
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3ZpZXdlci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQVUsWUFBWSxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBR0wsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixlQUFlLEVBQ2Ysa0JBQWtCLEVBRWxCLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLGVBQWUsRUFDRSxZQUFZLEVBQUUsa0JBQWtCLEVBQ2xELE1BQU0sK0NBQStDLENBQUM7QUFFdkQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRTVFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUE4REUsNEJBQW9CLGNBQTZCLEVBQzdCLGFBQTJCLEVBQ25DLGFBQWtDLEVBQ2xDLGtCQUFzQyxFQUM5QixnQkFBaUMsRUFDekMsV0FBd0IsRUFDeEIsa0JBQXNDLEVBQzlCLG1CQUF1QyxFQUMvQyxlQUFnQyxFQUN4QixjQUE2QixFQUM3QixtQkFBdUMsRUFDdkMsR0FBc0I7UUFYMUMsaUJBcURDO1FBckRtQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUczQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBR2pDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFFdkMsbUJB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LG1DQUFpQjs7SUFDakIsbUNBQXdCOztJQUN4QixrQ0FBc0I7O0lBQ3RCLDBDQUEyQjs7SUFDM0Isd0NBQWU7O0lBQ2YsNENBQTRCOztJQUM1Qiw0Q0FBdUI7O0lBQ3ZCLHlDQUE2Qjs7SUFDN0IsOENBQTRDOztJQUM1Qyx3Q0FBbUI7O0lBQ25CLHVDQUFtQjs7SUFDbkIsdUNBQW1COztJQUNuQiw0Q0FBOEI7O0lBRTlCLG1DQUFZOztJQUNaLHdDQUFtQjs7SUFDbkIseUNBQW9COztJQUNwQixxQ0FBUTs7SUFDUiwwQ0FBYTs7SUFDYiwwQ0FBcUI7O0lBQ3JCLDJDQUE2Qjs7SUFDN0IsK0NBQTBCOztJQUMxQix5Q0FBb0I7O0lBQ3BCLDRDQUF1Qjs7SUFDdkIsd0NBQW1COztJQUVuQix1Q0FBa0I7O0lBQ2xCLHNDQUFpQjs7SUFDakIsK0NBQWdDOztJQUNoQyxnREFBMkI7O0lBQzNCLDZDQUF5Qjs7SUFDekIsMENBQXNCOztJQUN0Qiw2Q0FBd0I7O0lBQ3hCLDJDQUFzQjs7SUFFdEIsbUVBSUU7O0lBRUYsMERBSUU7O0lBRUYseUNBQXlCOzs7OztJQVNiLDRDQUFxQzs7Ozs7SUFDckMsMkNBQW1DOzs7OztJQUduQyw4Q0FBeUM7Ozs7O0lBR3pDLGlEQUErQzs7Ozs7SUFFL0MsNENBQXFDOzs7OztJQUNyQyxpREFBK0M7Ozs7O0lBQy9DLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgQ2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtWaWV3ZXJTZXJ2aWNlfSBmcm9tIFwiLi92aWV3ZXIuc2VydmljZVwiO1xuaW1wb3J0IHtcbiAgRmlsZURlc2NyaXB0aW9uLFxuICBGaWxlTW9kZWwsXG4gIE1vZGFsU2VydmljZSxcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICBOYXZpZ2F0ZVNlcnZpY2UsXG4gIFBhZ2VQcmVsb2FkU2VydmljZSxcbiAgUGFnZU1vZGVsLFxuICBab29tU2VydmljZSxcbiAgUmVuZGVyUHJpbnRTZXJ2aWNlLFxuICBGaWxlVXRpbCxcbiAgUGFzc3dvcmRTZXJ2aWNlLFxuICBGaWxlQ3JlZGVudGlhbHMsIENvbW1vbk1vZGFscywgTG9hZGluZ01hc2tTZXJ2aWNlXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7Vmlld2VyQ29uZmlnfSBmcm9tIFwiLi92aWV3ZXItY29uZmlnXCI7XG5pbXBvcnQge1ZpZXdlckNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL3ZpZXdlci1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4vdmlld2VyLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBJbnRlcnZhbFRpbWVyIH0gZnJvbSAnLi9pbnRlcnZhbC10aW1lcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXZpZXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3ZXItYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmlld2VyLWFwcC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlckFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHRpdGxlID0gJ3ZpZXdlcic7XG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xuICBmaWxlOiBGaWxlRGVzY3JpcHRpb247XG4gIHZpZXdlckNvbmZpZzogVmlld2VyQ29uZmlnO1xuICBjb3VudFBhZ2VzID0gMDtcbiAgZm9ybWF0RGlzYWJsZWQgPSAhdGhpcy5maWxlO1xuICBzaG93VGh1bWJuYWlscyA9IGZhbHNlO1xuICBjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzO1xuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xuICBzaG93U2VhcmNoID0gZmFsc2U7XG4gIGlzRGVza3RvcDogYm9vbGVhbjtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBwYWdlc1RvUHJlbG9hZDogbnVtYmVyW10gPSBbXTtcblxuICBfem9vbSA9IDEwMDtcbiAgX3BhZ2VXaWR0aDogbnVtYmVyO1xuICBfcGFnZUhlaWdodDogbnVtYmVyO1xuICBvcHRpb25zO1xuICB0aW1lck9wdGlvbnM7XG4gIGludGVydmFsVGltZTogbnVtYmVyO1xuICBpbnRlcnZhbFRpbWVyOiBJbnRlcnZhbFRpbWVyO1xuICBjb3VudERvd25JbnRlcnZhbDogbnVtYmVyO1xuICBzZWNvbmRzTGVmdDogbnVtYmVyO1xuICBmaWxlV2FzRHJvcHBlZCA9IGZhbHNlO1xuICBmb3JtYXRJY29uOiBzdHJpbmc7XG5cbiAgZmlsZVBhcmFtOiBzdHJpbmc7XG4gIHVybFBhcmFtOiBzdHJpbmc7XG4gIHF1ZXJ5U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHNlbGVjdGVkUGFnZU51bWJlcjogbnVtYmVyO1xuICBydW5QcmVzZW50YXRpb246IGJvb2xlYW47XG4gIGlzRnVsbFNjcmVlbjogYm9vbGVhbjtcbiAgc3RhcnRTY3JvbGxUaW1lOiBudW1iZXI7XG4gIGVuZFNjcm9sbFRpbWU6IG51bWJlcjtcblxuICBkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50ICYge1xuICAgIG1velJlcXVlc3RGdWxsU2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gICAgd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgICBtc1JlcXVlc3RGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gIH07XG4gIFxuICBkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zID0gZG9jdW1lbnQgYXMgRG9jdW1lbnQgJiB7XG4gICAgbW96Q2FuY2VsRnVsbFNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHdlYmtpdEV4aXRGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gICAgbXNFeGl0RnVsbHNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICB9O1xuXG4gIHpvb21TZXJ2aWNlOiBab29tU2VydmljZTtcblxuICBASG9zdExpc3RlbmVyKFwiZG9jdW1lbnQ6ZnVsbHNjcmVlbmNoYW5nZVwiLCBbXSlcbiAgZnVsbFNjcmVlbigpIHtcbiAgICBpZiAoIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XG4gICAgICB0aGlzLmNsb3NlRnVsbFNjcmVlbigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdlclNlcnZpY2U6IFZpZXdlclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgICBjb25maWdTZXJ2aWNlOiBWaWV3ZXJDb25maWdTZXJ2aWNlLFxuICAgICAgICAgICAgICB1cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHpvb21TZXJ2aWNlOiBab29tU2VydmljZSxcbiAgICAgICAgICAgICAgcGFnZVByZWxvYWRTZXJ2aWNlOiBQYWdlUHJlbG9hZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlclByaW50U2VydmljZTogUmVuZGVyUHJpbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbG9hZGluZ01hc2tTZXJ2aWNlOiBMb2FkaW5nTWFza1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXG4gICAgdGhpcy56b29tU2VydmljZSA9IHpvb21TZXJ2aWNlO1xuICAgIHRoaXMuc3RhcnRTY3JvbGxUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLmVuZFNjcm9sbFRpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgY29uZmlnU2VydmljZS51cGRhdGVkQ29uZmlnLnN1YnNjcmliZSgodmlld2VyQ29uZmlnKSA9PiB7XG4gICAgICB0aGlzLnZpZXdlckNvbmZpZyA9IHZpZXdlckNvbmZpZztcbiAgICB9KTtcblxuICAgIHVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xuICAgICAgaWYgKHVwbG9hZHMpIHtcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHVwbG9hZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oaSksICcnLCB0aGlzLnZpZXdlckNvbmZpZy5yZXdyaXRlKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID8gdGhpcy5zZWxlY3RGaWxlKG9iai5ndWlkLCAnJywgJycpIDogdGhpcy5zZWxlY3REaXIoJycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYWdlUHJlbG9hZFNlcnZpY2UuY2hlY2tQcmVsb2FkLnN1YnNjcmliZSgocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy52aWV3ZXJDb25maWcucHJlbG9hZFBhZ2VDb3VudCAhPT0gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gcGFnZTsgaSA8IHBhZ2UgKyAyOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSA+IDAgJiYgaSA8PSB0aGlzLmNvdW50UGFnZXMgJiYgIXRoaXMuZmlsZS5wYWdlc1tpIC0gMV0uZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5wcmVsb2FkUGFnZXMoaSwgaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYXNzd29yZFNlcnZpY2UucGFzc0NoYW5nZS5zdWJzY3JpYmUoKHBhc3M6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuY3JlZGVudGlhbHMuZ3VpZCwgcGFzcywgQ29tbW9uTW9kYWxzLlBhc3N3b3JkUmVxdWlyZWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICAgIGlmICghdGhpcy5ydW5QcmVzZW50YXRpb24pIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMudmlld2VyQ29uZmlnLmRlZmF1bHREb2N1bWVudCAhPT0gXCJcIil7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy52aWV3ZXJDb25maWcuZGVmYXVsdERvY3VtZW50LCBcIlwiLCBcIlwiKTtcbiAgICAgIHRoaXMuc2VsZWN0Q3VycmVudE9yRmlyc3RQYWdlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgIGlmIChxdWVyeVN0cmluZykge1xuICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XG5cbiAgICAgIHRoaXMuZmlsZVBhcmFtID0gdXJsUGFyYW1zLmdldCgnZmlsZScpO1xuICAgICAgaWYodGhpcy5maWxlUGFyYW0pIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5maWxlUGFyYW0sICcnLCAnJyk7XG4gICAgICAgIHRoaXMuc2VsZWN0Q3VycmVudE9yRmlyc3RQYWdlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cmxQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ3VybCcpO1xuICAgICAgaWYodGhpcy51cmxQYXJhbSkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMudXBsb2FkKHRoaXMudXJsUGFyYW0pO1xuICAgICAgICB0aGlzLnNlbGVjdEN1cnJlbnRPckZpcnN0UGFnZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9sb2FkaW5nTWFza1NlcnZpY2VcbiAgICAub25Mb2FkaW5nQ2hhbmdlZFxuICAgIC5zdWJzY3JpYmUoKGxvYWRpbmc6IGJvb2xlYW4pID0+IHRoaXMuaXNMb2FkaW5nID0gbG9hZGluZyk7XG5cbiAgICB0aGlzLnJlZnJlc2hab29tKCk7XG4gIH1cblxuICBnZXQgcmV3cml0ZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5yZXdyaXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB6b29tQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnpvb20gOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHBhZ2VTZWxlY3RvckNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5wYWdlU2VsZWN0b3IgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHNlYXJjaENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5zZWFyY2ggOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHRodW1ibmFpbHNDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcudGh1bWJuYWlscyA6IHRydWU7XG4gIH1cblxuICBnZXQgcm90YXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnJvdGF0ZSA6IHRydWU7XG4gIH1cblxuICBnZXQgZG93bmxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcuZG93bmxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy51cGxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHByaW50Q29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnByaW50IDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBicm93c2VDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcuYnJvd3NlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBodG1sTW9kZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5odG1sTW9kZSA6IHRydWU7XG4gIH1cblxuICBnZXQgc2F2ZVJvdGF0ZVN0YXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnNhdmVSb3RhdGVTdGF0ZSA6IHRydWU7XG4gIH1cblxuICBnZXQgZW5hYmxlUmlnaHRDbGlja0NvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5lbmFibGVSaWdodENsaWNrIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBjdXJyZW50UGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2U7XG4gIH1cblxuICBpZlByZXNlbnRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlID8gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmZvcm1hdCA9PT0gXCJNaWNyb3NvZnQgUG93ZXJQb2ludFwiIDogZmFsc2U7XG4gIH1cblxuICBpZkV4Y2VsKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUgPyBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkuZm9ybWF0ID09PSBcIk1pY3Jvc29mdCBFeGNlbFwiIDogZmFsc2U7XG4gIH1cblxuICBpZkltYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUgPyB0aGlzLmZvcm1hdEljb24gPT09IFwiZmlsZS1pbWFnZVwiIDogZmFsc2U7XG4gIH1cbiAgXG4gIGdldEZpbGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUuZ3VpZC5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gIH1cblxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKGlkKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShpZCk7XG4gIH1cblxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLmxvYWRGaWxlcygkZXZlbnQpLnN1YnNjcmliZSgoZmlsZXM6IEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xuICB9XG5cbiAgc2VsZWN0Q3VycmVudE9yRmlyc3RQYWdlKCkge1xuICAgIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyID0gdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlICE9PSAwID8gdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlIDogMTtcbiAgfVxuXG4gIHNlbGVjdEZpbGUoJGV2ZW50OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG1vZGFsSWQ6IHN0cmluZykge1xuICAgIHRoaXMuY3JlZGVudGlhbHMgPSB7Z3VpZDogJGV2ZW50LCBwYXNzd29yZDogcGFzc3dvcmR9O1xuICAgIHRoaXMuZmlsZSA9IG51bGw7XG4gICAgdGhpcy5fdmlld2VyU2VydmljZS5sb2FkRmlsZSh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGZpbGU6IEZpbGVEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgICAgICB0aGlzLmZvcm1hdERpc2FibGVkID0gIXRoaXMuZmlsZTtcbiAgICAgICAgdGhpcy5wYWdlc1RvUHJlbG9hZCA9IFtdO1xuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgIHRoaXMuZm9ybWF0SWNvbiA9IHRoaXMuZmlsZSA/IEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5pY29uIDogbnVsbDtcbiAgICAgICAgICBpZiAoZmlsZS5wYWdlcyAmJiBmaWxlLnBhZ2VzWzBdKSB7XG4gICAgICAgICAgICB0aGlzLl9wYWdlSGVpZ2h0ID0gZmlsZS5wYWdlc1swXS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9wYWdlV2lkdGggPSBmaWxlLnBhZ2VzWzBdLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy56b29tT3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy50aW1lck9wdGlvbnMgPSB0aGlzLmdldFRpbWVyT3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBwcmVsb2FkUGFnZUNvdW50ID0gIXRoaXMuaWZQcmVzZW50YXRpb24oKSBcbiAgICAgICAgICAgID8gdGhpcy52aWV3ZXJDb25maWcucHJlbG9hZFBhZ2VDb3VudCBcbiAgICAgICAgICAgIDogdGhpcy52aWV3ZXJDb25maWcucHJlbG9hZFBhZ2VDb3VudCAhPT0gMCAmJiB0aGlzLnZpZXdlckNvbmZpZy5wcmVsb2FkUGFnZUNvdW50IDwgMyBcbiAgICAgICAgICAgICAgPyAzXG4gICAgICAgICAgICAgIDogdGhpcy52aWV3ZXJDb25maWcucHJlbG9hZFBhZ2VDb3VudDtcbiAgICAgICAgICBjb25zdCBjb3VudFBhZ2VzID0gZmlsZS5wYWdlcyA/IGZpbGUucGFnZXMubGVuZ3RoIDogMDtcbiAgICAgICAgICBpZiAocHJlbG9hZFBhZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlmUHJlc2VudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5maWxlLnRodW1ibmFpbHMgPSBmaWxlLnBhZ2VzLnNsaWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByZWxvYWRQYWdlcygxLCBwcmVsb2FkUGFnZUNvdW50ID4gY291bnRQYWdlcyA/IGNvdW50UGFnZXMgOiBwcmVsb2FkUGFnZUNvdW50KTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmlmUHJlc2VudGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fdmlld2VyU2VydmljZS5sb2FkVGh1bWJuYWlscyh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGRhdGE6IEZpbGVEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZS50aHVtYm5haWxzID0gZGF0YS5wYWdlcztcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciA9IHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyID8gdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgOiAxO1xuICAgICAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jb3VudFBhZ2VzID0gY291bnRQYWdlcztcbiAgICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgPSB0aGlzLnNlbGVjdGVkUGFnZU51bWJlcjtcbiAgICAgICAgICB0aGlzLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xuXG4gICAgICAgICAgaWYgKHRoaXMuaWZQcmVzZW50YXRpb24oKSkge1xuICAgICAgICAgICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJ1blByZXNlbnRhdGlvbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgKTtcbiAgICBpZiAobW9kYWxJZCkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKG1vZGFsSWQpO1xuICAgIH1cbiAgICB0aGlzLmNsZWFyRGF0YSgpO1xuICB9XG5cbiAgcHJlbG9hZFBhZ2VzKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICBpZih0aGlzLnBhZ2VzVG9QcmVsb2FkLmluZGV4T2YoaSkgIT09IC0xKXtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucGFnZXNUb1ByZWxvYWQucHVzaChpKTtcblxuICAgICAgdGhpcy5fdmlld2VyU2VydmljZS5sb2FkUGFnZSh0aGlzLmNyZWRlbnRpYWxzLCBpKS5zdWJzY3JpYmUoKHBhZ2U6IFBhZ2VNb2RlbCkgPT4ge1xuICAgICAgICB0aGlzLmZpbGUucGFnZXNbaSAtIDFdID0gcGFnZTtcbiAgICAgICAgaWYgKHRoaXMuaWZQcmVzZW50YXRpb24oKSAmJiB0aGlzLmZpbGUudGh1bWJuYWlscyAmJiAhdGhpcy5maWxlLnRodW1ibmFpbHNbaSAtIDFdLmRhdGEpIHtcbiAgICAgICAgICBpZiAocGFnZS5kYXRhKSB7XG4gICAgICAgICAgICBwYWdlLmRhdGEgPSBwYWdlLmRhdGEucmVwbGFjZSgvPlxccys8L2csICc+PCcpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHVGRUZGL2csIFwiXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmZpbGUudGh1bWJuYWlsc1tpIC0gMV0uZGF0YSA9IHBhZ2UuZGF0YTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmlld2VyU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgodXBsb2FkZWREb2N1bWVudDogYW55KSA9PiB7XG4gICAgICBpZiAodGhpcy5maWxlUGFyYW0gIT09ICcnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0RmlsZSh1cGxvYWRlZERvY3VtZW50Lmd1aWQsICcnLCAnJyk7XG4gICAgICAgIHRoaXMuZmlsZVBhcmFtID0gJyc7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmV4dFBhZ2UoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxUaW1lciAmJiB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgKyAxID4gdGhpcy5jb3VudFBhZ2VzKSB7XG4gICAgICB0aGlzLmludGVydmFsVGltZXIuc3RvcCgpO1xuICAgICAgdGhpcy5pbnRlcnZhbFRpbWUgPSAwO1xuICAgIH1cbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmV4dFBhZ2UoKTtcbiAgfVxuXG4gIHByZXZQYWdlKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5wcmV2UGFnZSgpO1xuICB9XG5cbiAgdG9MYXN0UGFnZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UudG9MYXN0UGFnZSgpO1xuICB9XG5cbiAgdG9GaXJzdFBhZ2UoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLnRvRmlyc3RQYWdlKCk7XG4gIH1cblxuICB6b29tSW4oKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRoaXMuX3pvb20gPCA0OTApIHtcbiAgICAgIHRoaXMuem9vbSA9IHRoaXMuX3pvb20gKyAxMDtcbiAgICB9XG4gIH1cblxuICB6b29tT3V0KCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGlmICh0aGlzLl96b29tID4gMzApIHtcbiAgICAgIHRoaXMuem9vbSA9IHRoaXMuX3pvb20gLSAxMDtcbiAgICB9XG4gIH1cblxuICBmaWxlRHJvcHBlZCgkZXZlbnQpe1xuICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPSAkZXZlbnQ7XG4gIH1cblxuICBwcml2YXRlIHB0VG9QeChwdDogbnVtYmVyKSB7XG4gICAgLy9wdCAqIDk2IC8gNzIgPSBweC5cbiAgICByZXR1cm4gcHQgKiA5NiAvIDcyO1xuICB9XG5cbiAgZ2V0Rml0VG9XaWR0aCgpIHtcbiAgICAvLyBJbWFnZXMgYW5kIEV4Y2VsLXJlbGF0ZWQgZmlsZXMgcmVjZWl2aW5nIGRpbWVuc2lvbnMgaW4gcHggZnJvbSBzZXJ2ZXJcbiAgICBjb25zdCBwYWdlV2lkdGggPSB0aGlzLmZvcm1hdEljb24gJiYgKHRoaXMuaWZFeGNlbCgpIHx8IHRoaXMuaWZJbWFnZSgpKSA/IHRoaXMuX3BhZ2VXaWR0aCA6IHRoaXMucHRUb1B4KHRoaXMuX3BhZ2VXaWR0aCk7XG4gICAgY29uc3QgcGFnZUhlaWdodCA9IHRoaXMuZm9ybWF0SWNvbiAmJiAodGhpcy5pZkV4Y2VsKCkgfHwgdGhpcy5pZkltYWdlKCkpID8gdGhpcy5fcGFnZUhlaWdodCA6IHRoaXMucHRUb1B4KHRoaXMuX3BhZ2VIZWlnaHQpO1xuICAgIGNvbnN0IG9mZnNldFdpZHRoID0gcGFnZVdpZHRoID8gcGFnZVdpZHRoIDogd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICBjb25zdCBwcmVzZW50YXRpb25UaHVtYm5haWxzID0gdGhpcy5pc0Rlc2t0b3AgJiYgdGhpcy5pZlByZXNlbnRhdGlvbigpICYmICF0aGlzLnJ1blByZXNlbnRhdGlvbjtcblxuICAgIGlmICghdGhpcy5ydW5QcmVzZW50YXRpb24pIHtcbiAgICAgIHJldHVybiAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCAmJiBNYXRoLnJvdW5kKG9mZnNldFdpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpIDwgMikgPyAyMDAgLSBNYXRoLnJvdW5kKG9mZnNldFdpZHRoICogMTAwIC8gKHByZXNlbnRhdGlvblRodW1ibmFpbHMgPyB3aW5kb3cuaW5uZXJXaWR0aCAtIENvbnN0YW50cy50aHVtYm5haWxzV2lkdGggLSBDb25zdGFudHMuc2Nyb2xsV2lkdGggOiB3aW5kb3cuaW5uZXJXaWR0aCkpXG4gICAgICAgIDogKCF0aGlzLmlzRGVza3RvcCA/IE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggKiAxMDAgLyBvZmZzZXRXaWR0aClcbiAgICAgICAgICA6IE1hdGgucm91bmQoKChwcmVzZW50YXRpb25UaHVtYm5haWxzID8gd2luZG93LmlubmVyV2lkdGggLSBDb25zdGFudHMudGh1bWJuYWlsc1dpZHRoIC0gQ29uc3RhbnRzLnNjcm9sbFdpZHRoXG4gICAgICAgICAgICA6IHdpbmRvdy5pbm5lckhlaWdodCkgLyBvZmZzZXRXaWR0aCkgKiAxMDApKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAqIDEwMCAvIG9mZnNldFdpZHRoKTtcbiAgICB9XG4gIH1cblxuICBnZXRGaXRUb0hlaWdodCgpIHtcbiAgICBjb25zdCBwYWdlV2lkdGggPSB0aGlzLmZvcm1hdEljb24gJiYgKHRoaXMuaWZFeGNlbCgpIHx8IHRoaXMuaWZJbWFnZSgpKSA/IHRoaXMuX3BhZ2VXaWR0aCA6IHRoaXMucHRUb1B4KHRoaXMuX3BhZ2VXaWR0aCk7XG4gICAgY29uc3QgcGFnZUhlaWdodCA9IHRoaXMuZm9ybWF0SWNvbiAmJiAodGhpcy5pZkV4Y2VsKCkgfHwgdGhpcy5pZkltYWdlKCkpID8gdGhpcy5fcGFnZUhlaWdodCA6IHRoaXMucHRUb1B4KHRoaXMuX3BhZ2VIZWlnaHQpO1xuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoKSA/IHdpbmRvdy5pbm5lckhlaWdodCAtIDEwMCA6IHdpbmRvdy5pbm5lckhlaWdodCArIDEwMDtcbiAgICBjb25zdCBvZmZzZXRIZWlnaHQgPSBwYWdlSGVpZ2h0ID8gcGFnZUhlaWdodCA6IHdpbmRvd0hlaWdodDtcbiAgICBcbiAgICBpZiAoIXRoaXMuaWZQcmVzZW50YXRpb24oKSAmJiAhKHRoaXMuaWZJbWFnZSgpKSkge1xuICAgICAgcmV0dXJuIChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoKSA/IE1hdGgucm91bmQod2luZG93SGVpZ2h0ICogMTAwIC8gb2Zmc2V0SGVpZ2h0KSA6IE1hdGgucm91bmQob2Zmc2V0SGVpZ2h0ICogMTAwIC8gd2luZG93SGVpZ2h0KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaWZQcmVzZW50YXRpb24oKSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKHdpbmRvdy5pbm5lckhlaWdodCAtIENvbnN0YW50cy50b3BiYXJXaWR0aCkgKiAxMDAgLyAoIXRoaXMucnVuUHJlc2VudGF0aW9uID8gb2Zmc2V0SGVpZ2h0ICsgQ29uc3RhbnRzLmRvY3VtZW50TWFyZ2luICogMiArIENvbnN0YW50cy5zY3JvbGxXaWR0aFxuICAgICAgICA6IG9mZnNldEhlaWdodCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pZkltYWdlKCkpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKCh3aW5kb3cuaW5uZXJIZWlnaHQgLSBDb25zdGFudHMudG9wYmFyV2lkdGgpICogMTAwIC8gKG9mZnNldEhlaWdodCArIENvbnN0YW50cy5kb2N1bWVudE1hcmdpbiAqIDIgKyBDb25zdGFudHMuc2Nyb2xsV2lkdGgpKTtcbiAgICB9XG4gIH1cblxuICB6b29tT3B0aW9ucygpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0Rml0VG9XaWR0aCgpO1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0Rml0VG9IZWlnaHQoKTtcbiAgICByZXR1cm4gdGhpcy56b29tU2VydmljZS56b29tT3B0aW9ucyh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGdldFRpbWVyT3B0aW9ucygpIHtcbiAgICByZXR1cm4gW3t2YWx1ZTogMCwgbmFtZTogJ05vbmUnLCBzZXBhcmF0b3I6IGZhbHNlfSxcbiAgICAgIHt2YWx1ZTogNSwgbmFtZTogJzUgc2VjJywgc2VwYXJhdG9yOiBmYWxzZX0sXG4gICAgICB7dmFsdWU6IDEwLCBuYW1lOiAnMTAgc2VjJywgc2VwYXJhdG9yOiBmYWxzZX0sXG4gICAgICB7dmFsdWU6IDE1LCBuYW1lOiAnMTUgc2VjJywgc2VwYXJhdG9yOiBmYWxzZX0sXG4gICAgICB7dmFsdWU6IDMwLCBuYW1lOiAnMzAgc2VjJywgc2VwYXJhdG9yOiBmYWxzZX1dO1xuICB9XG5cbiAgc2V0IHpvb20oem9vbSkge1xuICAgIHRoaXMuX3pvb20gPSB6b29tO1xuICAgIHRoaXMuem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLl96b29tKTtcbiAgfVxuXG4gIGdldCB6b29tKCkge1xuICAgIHJldHVybiB0aGlzLl96b29tO1xuICB9XG5cbiAgc2VsZWN0Wm9vbSgkZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuem9vbSA9ICRldmVudC52YWx1ZTtcbiAgfVxuXG4gIHJvdGF0ZShkZWc6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2U7XG4gICAgY29uc3QgcGFnZU1vZGVsID0gdGhpcy5maWxlLnBhZ2VzW3BhZ2VOdW1iZXIgLSAxXTtcblxuICAgIGlmICh0aGlzLnNhdmVSb3RhdGVTdGF0ZUNvbmZpZyAmJiB0aGlzLmZpbGUpIHtcbiAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2Uucm90YXRlKHRoaXMuY3JlZGVudGlhbHMsIGRlZywgcGFnZU51bWJlcikuc3Vic2NyaWJlKChwYWdlOiBQYWdlTW9kZWwpID0+IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZERhdGEgPSBwYWdlLmRhdGEucmVwbGFjZSgvPlxccys8L2csJz48JylcbiAgICAgICAgICAucmVwbGFjZSgvXFx1RkVGRi9nLFwiXCIpO1xuICAgICAgICBwYWdlLmRhdGEgPSB1cGRhdGVkRGF0YTtcbiAgICAgICAgdGhpcy5maWxlLnBhZ2VzW3BhZ2VOdW1iZXIgLSAxXSA9IHBhZ2U7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsZSAmJiB0aGlzLmZpbGUucGFnZXMgJiYgcGFnZU1vZGVsKSB7XG4gICAgICAgICAgY29uc3QgYW5nbGUgPSBwYWdlTW9kZWwuYW5nbGUgKyBkZWc7XG4gICAgICAgICAgaWYgKGFuZ2xlID4gMzYwKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUFuZ2xlKHBhZ2VNb2RlbCwgOTApO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYW5nbGUgPCAtMzYwKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUFuZ2xlKHBhZ2VNb2RlbCwgLTkwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBbmdsZShwYWdlTW9kZWwsIGFuZ2xlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VBbmdsZShwYWdlOiBQYWdlTW9kZWwsIGFuZ2xlOiBudW1iZXIpIHtcbiAgICBwYWdlLmFuZ2xlID0gYW5nbGU7XG4gIH1cblxuICBkb3dubG9hZEZpbGUoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLl92aWV3ZXJTZXJ2aWNlLmdldERvd25sb2FkVXJsKHRoaXMuY3JlZGVudGlhbHMpKTtcbiAgfVxuXG4gIHByaW50RmlsZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBpZiAodGhpcy52aWV3ZXJDb25maWcuaHRtbE1vZGUpIHtcbiAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UubG9hZFByaW50KHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZGF0YTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlbmRlclByaW50U2VydmljZS5jaGFuZ2VQYWdlcyhkYXRhLnBhZ2VzKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJQcmludFNlcnZpY2UuY2hhbmdlUGFnZXModGhpcy5maWxlLnBhZ2VzKTtcbiAgICB9XG4gIH1cblxuICBvcGVuVGh1bWJuYWlscygpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcblxuICAgIGlmICh0aGlzLnNob3dUaHVtYm5haWxzKSB7XG4gICAgICB0aGlzLnNob3dUaHVtYm5haWxzID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudmlld2VyQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgPT09IDApIHtcbiAgICAgIHRoaXMucnVuUHJlc2VudGF0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLnNob3dUaHVtYm5haWxzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZmlsZS50aHVtYm5haWxzLmZpbHRlcih0ID0+ICF0LmRhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5fdmlld2VyU2VydmljZS5sb2FkVGh1bWJuYWlscyh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGRhdGE6IEZpbGVEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsZS50aHVtYm5haWxzID0gZGF0YS5wYWdlcztcbiAgICAgICAgICB0aGlzLnNob3dUaHVtYm5haWxzID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNob3dUaHVtYm5haWxzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRGF0YSgpIHtcbiAgICBpZiAoIXRoaXMuZmlsZSB8fCAhdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGFnZSBvZiB0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgIHBhZ2UuZGF0YSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25SaWdodENsaWNrKCkge1xuICAgIHJldHVybiB0aGlzLmVuYWJsZVJpZ2h0Q2xpY2tDb25maWc7XG4gIH1cblxuICBvcGVuU2VhcmNoKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIHRoaXMuc2hvd1NlYXJjaCA9ICF0aGlzLnNob3dTZWFyY2g7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hab29tKCkge1xuICAgIGlmICh0aGlzLmZpbGUpIHtcbiAgICAgIHRoaXMuZm9ybWF0SWNvbiA9IEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5pY29uO1xuICAgICAgdGhpcy56b29tID0gdGhpcy5fd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKSAmJiAhKHRoaXMuaWZJbWFnZSgpIHx8IHRoaXMuaWZQcmVzZW50YXRpb24oKSkgPyAxMDBcbiAgICAgICAgOiAodGhpcy5pZkltYWdlKCkgPyB0aGlzLmdldEZpdFRvSGVpZ2h0KClcbiAgICAgICAgICA6IHRoaXMuZ2V0Rml0VG9XaWR0aCgpKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RDdXJyZW50UGFnZShwYWdlTnVtYmVyKVxuICB7XG4gICAgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9IHBhZ2VOdW1iZXI7XG4gICAgaWYgKHRoaXMucnVuUHJlc2VudGF0aW9uICYmIHRoaXMuaW50ZXJ2YWxUaW1lID4gMCAmJiB0aGlzLmludGVydmFsVGltZXIuc3RhdGUgIT09IDMpIHtcbiAgICAgIHRoaXMucmVzZXRJbnRlcnZhbCgpO1xuICAgICAgaWYgKHRoaXMuc2xpZGVJblJhbmdlKCkpIHtcbiAgICAgICAgdGhpcy5zdGFydENvdW50RG93bih0aGlzLmludGVydmFsVGltZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZVdoZWVsVXAoKVxuICB7XG4gICAgdGhpcy5zdGFydFNjcm9sbFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGlmICh0aGlzLmlmUHJlc2VudGF0aW9uKCkgJiYgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgIT09IDEpIHtcbiAgICAgIGlmICh0aGlzLnN0YXJ0U2Nyb2xsVGltZSAtIHRoaXMuZW5kU2Nyb2xsVGltZSA+IDMwMCAmJiB0aGlzLnZlcnRTY3JvbGxFbmRlZCh0cnVlKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciA9IHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyIC0gMTtcbiAgICAgICAgdGhpcy5lbmRTY3JvbGxUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk1vdXNlV2hlZWxEb3duKClcbiAge1xuICAgIHRoaXMuc3RhcnRTY3JvbGxUaW1lID0gRGF0ZS5ub3coKTtcbiAgICBpZiAodGhpcy5pZlByZXNlbnRhdGlvbigpICYmIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyICE9PSB0aGlzLmZpbGUucGFnZXMubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5zdGFydFNjcm9sbFRpbWUgLSB0aGlzLmVuZFNjcm9sbFRpbWUgPiAzMDAgJiYgdGhpcy52ZXJ0U2Nyb2xsRW5kZWQoZmFsc2UpKSB7XG4gICAgICAgIHRoaXMuc3RhcnRTY3JvbGxUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKHRoaXMuZmlsZS5wYWdlc1t0aGlzLnNlbGVjdGVkUGFnZU51bWJlcl0gJiYgIXRoaXMuZmlsZS5wYWdlc1t0aGlzLnNlbGVjdGVkUGFnZU51bWJlcl0uZGF0YSkge1xuICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyLCB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciArIDEpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyID0gdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyID0gdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgKyAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5kU2Nyb2xsVGltZSA9IERhdGUubm93KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmVydFNjcm9sbEVuZGVkKG9uVG9wOiBib29sZWFuKSB7XG4gICAgY29uc3QgZ2REb2N1bWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dkLWRvY3VtZW50JylbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKG9uVG9wKVxuICAgIHtcbiAgICAgIHJldHVybiBnZERvY3VtZW50LnNjcm9sbFRvcCA9PT0gMDtcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gZ2REb2N1bWVudC5vZmZzZXRIZWlnaHQgKyBnZERvY3VtZW50LnNjcm9sbFRvcCA+PSBnZERvY3VtZW50LnNjcm9sbEhlaWdodDtcbiAgfVxuXG4gIHRvZ2dsZVRpbWVyKCRldmVudCl7XG4gICAgdGhpcy5pbnRlcnZhbFRpbWUgPSAkZXZlbnQudmFsdWU7XG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxUaW1lICE9PSAwKSB7XG4gICAgICBpZiAodGhpcy5pbnRlcnZhbFRpbWVyICYmIHRoaXMuaW50ZXJ2YWxUaW1lci5zdGF0ZSA9PT0gMSkge1xuICAgICAgICB0aGlzLmludGVydmFsVGltZXIuc3RvcCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGFydENvdW50RG93bih0aGlzLmludGVydmFsVGltZSk7XG4gICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwodGhpcy5pbnRlcnZhbFRpbWUpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgdGhpcy5pbnRlcnZhbFRpbWVyLnN0b3AoKTtcbiAgICB9XG4gIH1cblxuICBzaG93Q291bnREb3duKCkge1xuICAgIHJldHVybiB0aGlzLmludGVydmFsVGltZSA+IDAgJiYgKHRoaXMuc2xpZGVJblJhbmdlKCkpXG4gIH1cblxuICBzdGFydENvdW50RG93bihzZWNvbmRzOiBudW1iZXIsIHJlc2V0OiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuY291bnREb3duSW50ZXJ2YWwpO1xuICAgIGlmIChzZWNvbmRzID4gMCkge1xuICAgICAgdGhpcy5zZWNvbmRzTGVmdCA9IHNlY29uZHM7XG4gICAgICBzZWNvbmRzLS07XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNlY29uZHNMZWZ0ID0gc2Vjb25kcztcbiAgICAgICAgICBzZWNvbmRzLS07XG4gICAgICAgICAgaWYgKHNlY29uZHMgPT09IDApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgIH1cbiAgICAgIH0sIDEwMDApO1xuXG4gICAgICB0aGlzLmNvdW50RG93bkludGVydmFsID0gaW50ZXJ2YWw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGFydEludGVydmFsKGludGVydmFsVGltZTogbnVtYmVyKSB7XG4gICAgdGhpcy5pbnRlcnZhbFRpbWVyID0gbmV3IEludGVydmFsVGltZXIoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2xpZGVJblJhbmdlKCkpIHtcbiAgICAgICAgdGhpcy5uZXh0UGFnZSgpO1xuICAgICAgICBpZiAodGhpcy5zbGlkZUluUmFuZ2UoKSkge1xuICAgICAgICAgIHRoaXMuc3RhcnRDb3VudERvd24oaW50ZXJ2YWxUaW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICB0aGlzLmludGVydmFsVGltZXIuc3RvcCgpO1xuICAgICAgfVxuICAgIH0sIGludGVydmFsVGltZSAqIDEwMDApO1xuICB9XG5cbiAgcHJpdmF0ZSBzbGlkZUluUmFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSArIDEgPD0gdGhpcy5jb3VudFBhZ2VzO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldEludGVydmFsKCkge1xuICAgIHRoaXMuaW50ZXJ2YWxUaW1lci5zdG9wKCk7XG4gICAgdGhpcy5zdGFydEludGVydmFsKHRoaXMuaW50ZXJ2YWxUaW1lKTtcbiAgfVxuXG4gIHBhdXNlUHJlc2VudGluZygpIHtcbiAgICB0aGlzLmludGVydmFsVGltZXIucGF1c2UoKTtcbiAgICB0aGlzLnN0YXJ0Q291bnREb3duKDAsIHRydWUpO1xuICB9XG5cbiAgcmVzdW1lUHJlc2VudGluZygpIHtcbiAgICB0aGlzLmludGVydmFsVGltZXIucmVzdW1lKCk7XG4gICAgY29uc3Qgc2Vjb25kc1JlbWFpbmluZyA9IE1hdGgucm91bmQodGhpcy5pbnRlcnZhbFRpbWVyLnJlbWFpbmluZy8xMDAwKTtcbiAgICB0aGlzLnN0YXJ0Q291bnREb3duKHNlY29uZHNSZW1haW5pbmcpO1xuICB9XG5cbiAgcHJlc2VudGF0aW9uUnVubmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnZhbFRpbWVyICYmIHRoaXMuaW50ZXJ2YWxUaW1lci5zdGF0ZSA9PT0gMSAmJiB0aGlzLnNsaWRlSW5SYW5nZSgpO1xuICB9XG5cbiAgcHJlc2VudGF0aW9uUGF1c2VkKCkge1xuICAgIHJldHVybiB0aGlzLmludGVydmFsVGltZXIgJiYgdGhpcy5pbnRlcnZhbFRpbWVyLnN0YXRlID09PSAyICYmIHRoaXMuc2xpZGVJblJhbmdlKCk7XG4gIH1cblxuICBzdGFydFByZXNlbnRhdGlvbigpIHtcbiAgICB0aGlzLnNob3dUaHVtYm5haWxzID0gZmFsc2U7XG4gICAgdGhpcy5vcGVuRnVsbFNjcmVlbigpO1xuICAgIHRoaXMucnVuUHJlc2VudGF0aW9uID0gIXRoaXMucnVuUHJlc2VudGF0aW9uO1xuXG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChzY3JlZW4uaGVpZ2h0ID09PSB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgc2NyZWVuLndpZHRoID09PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgdGhpcy56b29tU2VydmljZS5jaGFuZ2Vab29tKHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0IDwgMS43ICYmIHRoaXMuX3BhZ2VXaWR0aCAvIHRoaXMuX3BhZ2VIZWlnaHQgPiAxLjcgXG4gICAgICAgID8gdGhpcy5nZXRGaXRUb1dpZHRoKCkgOiB0aGlzLmdldEZpdFRvSGVpZ2h0KCkpO1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgfVxuICAgIH0sIDUwKTtcbiAgfVxuXG4gIG9wZW5GdWxsU2NyZWVuKCkge1xuICAgIGNvbnN0IGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQgJiB7XG4gICAgICBtb3pSZXF1ZXN0RnVsbFNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICAgICAgd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgICAgIG1zUmVxdWVzdEZ1bGxzY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgICB9O1xuICBcbiAgICBpZiAoZG9jRWxtV2l0aEJyb3dzZXJzRnVsbFNjcmVlbkZ1bmN0aW9ucy5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgZG9jRWxtV2l0aEJyb3dzZXJzRnVsbFNjcmVlbkZ1bmN0aW9ucy5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgIH0gZWxzZSBpZiAoZG9jRWxtV2l0aEJyb3dzZXJzRnVsbFNjcmVlbkZ1bmN0aW9ucy5tb3pSZXF1ZXN0RnVsbFNjcmVlbikgeyAvKiBGaXJlZm94ICovXG4gICAgICBkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gICAgfSBlbHNlIGlmIChkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7IC8qIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xuICAgICAgZG9jRWxtV2l0aEJyb3dzZXJzRnVsbFNjcmVlbkZ1bmN0aW9ucy53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgIH0gZWxzZSBpZiAoZG9jRWxtV2l0aEJyb3dzZXJzRnVsbFNjcmVlbkZ1bmN0aW9ucy5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7IC8qIElFL0VkZ2UgKi9cbiAgICAgIGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgIH1cbiAgICB0aGlzLmlzRnVsbFNjcmVlbiA9IHRydWU7XG4gIH1cbiAgXG4gIGNsb3NlRnVsbFNjcmVlbihieUJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlKXtcbiAgICBpZiAoYnlCdXR0b24pIHtcbiAgICAgIGNvbnN0IGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMgPSBkb2N1bWVudCBhcyBEb2N1bWVudCAmIHtcbiAgICAgICAgbW96Q2FuY2VsRnVsbFNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICAgICAgICB3ZWJraXRFeGl0RnVsbHNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICAgICAgICBtc0V4aXRGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gICAgICB9O1xuICAgICAgaWYgKGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMuZXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zLm1vekNhbmNlbEZ1bGxTY3JlZW4pIHsgLyogRmlyZWZveCAqL1xuICAgICAgICBkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zLm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy53ZWJraXRFeGl0RnVsbHNjcmVlbikgeyAvKiBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cbiAgICAgICAgZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zLm1zRXhpdEZ1bGxzY3JlZW4pIHsgLyogSUUvRWRnZSAqL1xuICAgICAgICBkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zLm1zRXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbnRlcnZhbFRpbWVyKSB7XG4gICAgICB0aGlzLmludGVydmFsVGltZXIuc3RvcCgpO1xuICAgIH1cblxuICAgIHRoaXMuaXNGdWxsU2NyZWVuID0gZmFsc2U7XG4gICAgdGhpcy5ydW5QcmVzZW50YXRpb24gPSBmYWxzZTtcbiAgICB0aGlzLnNob3dUaHVtYm5haWxzID0gdHJ1ZTtcbiAgICB0aGlzLmludGVydmFsVGltZSA9IDA7XG4gICAgdGhpcy5zdGFydENvdW50RG93bigwKTtcbiAgICB0aGlzLnJlZnJlc2hab29tKCk7XG4gIH1cbn1cbiJdfQ==