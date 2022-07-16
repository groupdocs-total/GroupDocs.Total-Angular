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
import { TranslateService } from '@ngx-translate/core';
var ViewerAppComponent = /** @class */ (function () {
    function ViewerAppComponent(_viewerService, _modalService, configService, uploadFilesService, _navigateService, zoomService, pagePreloadService, _renderPrintService, passwordService, _windowService, _loadingMaskService, cdr, translate) {
        var _this = this;
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
                        _this.fileWasDropped ? _this.selectFile(obj.guid, '', '', '') : _this.selectDir('');
                    }));
                }
            }
        }));
        pagePreloadService.checkPreload.subscribe((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            if (_this.file) {
                if (_this.viewerConfig.preloadPageCount !== 0) {
                    for (var i = page; i < page + 2; i++) {
                        if (i > 0 && i <= _this.file.pages.length && !_this.file.pages[i - 1].data) {
                            _this.preloadPages(i, i);
                        }
                    }
                }
            }
        }));
        passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        function (pass) {
            _this.selectFile(_this.credentials.guid, pass, CommonModals.PasswordRequired, _this.credentials.fileType);
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
        if (this.viewerConfig.defaultDocument !== '' && this.viewerConfig.defaultDocument !== null) {
            this.isLoading = true;
            this.selectFile(this.viewerConfig.defaultDocument, '', '', '');
            this.selectCurrentOrFirstPage();
            return;
        }
        /** @type {?} */
        var defaultLanguage = this.defaultLanguageConfig;
        /** @type {?} */
        var supportedLanguages = this.supportedLanguagesConfig
            .map((/**
         * @param {?} language
         * @return {?}
         */
        function (language) {
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
        function (lang) { return lang.value === defaultLanguage.code; }));
        this.translate.use(defaultLanguage.code);
        /** @type {?} */
        var queryString = window.location.search;
        if (queryString) {
            /** @type {?} */
            var urlParams = new URLSearchParams(queryString);
            this.fileParam = urlParams.get('file');
            this.fileTypeParam = urlParams.get('fileType');
            if (this.fileParam) {
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
    Object.defineProperty(ViewerAppComponent.prototype, "showLanguageMenu", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.viewerConfig !== undefined && this.viewerConfig.showLanguageMenu !== undefined) {
                return this.viewerConfig.showLanguageMenu;
            }
            return Constants.defaultShowLanguageMenu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "supportedLanguagesConfig", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.viewerConfig && this.viewerConfig.supportedLanguages) {
                /** @type {?} */
                var supportedLanguages_1 = this.viewerConfig.supportedLanguages;
                return Constants.defaultSupportedLanguages
                    .filter((/**
                 * @param {?} lang
                 * @return {?}
                 */
                function (lang) {
                    return supportedLanguages_1.indexOf(lang.code) !== -1 || supportedLanguages_1.indexOf(lang.alternateCode) !== -1;
                }));
            }
            return Constants.defaultSupportedLanguages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "defaultLanguageConfig", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            var e_1, _a;
            if (this.viewerConfig && this.viewerConfig.defaultLanguage) {
                return this.supportedLanguagesConfig
                    .find((/**
                 * @param {?} lang
                 * @return {?}
                 */
                function (lang) { return lang.is(_this.viewerConfig.defaultLanguage); }));
            }
            /** @type {?} */
            var pathname = window.location.pathname;
            if (pathname) {
                /** @type {?} */
                var parts = pathname.split('/');
                var _loop_1 = function (part) {
                    if (part === "")
                        return "continue";
                    /** @type {?} */
                    var langOrNothing = this_1.supportedLanguagesConfig
                        .filter((/**
                     * @param {?} supported
                     * @return {?}
                     */
                    function (supported) { return supported.is(part); }))
                        .shift();
                    if (langOrNothing)
                        return { value: langOrNothing };
                };
                var this_1 = this;
                try {
                    for (var parts_1 = tslib_1.__values(parts), parts_1_1 = parts_1.next(); !parts_1_1.done; parts_1_1 = parts_1.next()) {
                        var part = parts_1_1.value;
                        var state_1 = _loop_1(part);
                        if (typeof state_1 === "object")
                            return state_1.value;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (parts_1_1 && !parts_1_1.done && (_a = parts_1.return)) _a.call(parts_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            /** @type {?} */
            var queryString = window.location.search;
            if (queryString) {
                /** @type {?} */
                var urlParams = new URLSearchParams(queryString);
                /** @type {?} */
                var candidate_1 = urlParams.get('lang');
                if (candidate_1) {
                    return this.supportedLanguagesConfig
                        .find((/**
                     * @param {?} lang
                     * @return {?}
                     */
                    function (lang) { return lang.is(candidate_1); }));
                }
            }
            return Constants.defaultLanguage;
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
     * @return {?}
     */
    ViewerAppComponent.prototype.getPreloadPageCount = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var minPresentationPagesToPreload = 3;
        /** @type {?} */
        var preloadPageCount = !this.ifPresentation()
            ? this.viewerConfig.preloadPageCount
            : this.viewerConfig.preloadPageCount !== 0 && this.viewerConfig.preloadPageCount < minPresentationPagesToPreload
                ? minPresentationPagesToPreload
                : this.viewerConfig.preloadPageCount;
        return preloadPageCount;
    };
    /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @param {?} fileType
     * @return {?}
     */
    ViewerAppComponent.prototype.selectFile = /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @param {?} fileType
     * @return {?}
     */
    function ($event, password, modalId, fileType) {
        var _this = this;
        this.credentials = { guid: $event, fileType: fileType, password: password };
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
                _this.credentials.fileType = file.fileType;
                _this.formatIcon = _this.file ? FileUtil.find(_this.file.guid, false).icon : null;
                if (file.pages && file.pages[0]) {
                    _this._pageHeight = file.pages[0].height;
                    _this._pageWidth = file.pages[0].width;
                    _this.options = _this.zoomOptions();
                    _this.timerOptions = _this.getTimerOptions();
                    _this.refreshZoom();
                }
                //copy pages to thumbnails
                _this.file.thumbnails = file.pages.slice();
                /** @type {?} */
                var countPagesToPreload = _this.getPreloadPageCount();
                /** @type {?} */
                var countPages = file.pages ? file.pages.length : 0;
                /** @type {?} */
                var countPagesToLoad = countPagesToPreload === 0
                    ? countPages : countPagesToPreload > countPages
                    ? countPages
                    : countPagesToPreload;
                //retrieve all pages or number of pages to preload
                _this.preloadPages(1, countPagesToLoad);
                _this.selectedPageNumber = 1;
                _this._navigateService.countPages = countPages;
                _this._navigateService.currentPage = _this.selectedPageNumber;
                _this.countPages = countPages;
                _this.showThumbnails = _this.ifPresentation();
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
        var _loop_2 = function (pageNumber) {
            if (this_2.pagesToPreload.indexOf(pageNumber) !== -1) {
                return "continue";
            }
            this_2.pagesToPreload.push(pageNumber);
            this_2._viewerService.loadPage(this_2.credentials, pageNumber).subscribe((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                if (page.data) {
                    page.data = page.data.replace(/>\s+</g, '><').replace(/\uFEFF/g, '');
                }
                _this.file.pages[pageNumber - 1].data = page.data;
                if (_this.file.thumbnails) {
                    _this.file.thumbnails[pageNumber - 1].data = page.data;
                }
            }));
        };
        var this_2 = this;
        for (var pageNumber = start; pageNumber <= end; pageNumber++) {
            _loop_2(pageNumber);
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
                _this.selectFile(uploadedDocument.guid, '', '', '');
                _this.fileParam = '';
                _this.fileTypeParam = '';
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
        this._viewerService.loadPrintPdf(this.credentials).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this._renderPrintService.changeBlob(data);
        }));
    };
    /**
     * @return {?}
     */
    ViewerAppComponent.prototype.openThumbnails = /**
     * @return {?}
     */
    function () {
        if (this.formatDisabled)
            return;
        if (this.showThumbnails) {
            this.showThumbnails = false;
            return;
        }
        this.runPresentation = false;
        this.showThumbnails = true;
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
        var e_2, _a;
        if (!this.file || !this.file.pages) {
            return;
        }
        try {
            for (var _b = tslib_1.__values(this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                var page = _c.value;
                page.data = null;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
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
    /**
     * @param {?} selectedLanguage
     * @return {?}
     */
    ViewerAppComponent.prototype.selectLanguage = /**
     * @param {?} selectedLanguage
     * @return {?}
     */
    function (selectedLanguage) {
        this.selectedLanguage = selectedLanguage;
        this.translate.use(selectedLanguage.value);
    };
    ViewerAppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-viewer',
                    template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick()\">\n  <div class=\"top-panel\" *ngIf=\"!runPresentation\">\n    <gd-logo [logo]=\"'viewer'\" icon=\"eye\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" title=\"{{'Browse files' | translate}}\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-select class=\"mobile-hide select-left noselect\" [disabled]=\"formatDisabled\" [options]=\"options\" (selected)=\"selectZoom($event)\"\n                 [showSelected]=\"{ name: zoom+'%', value : zoom}\" *ngIf=\"zoomConfig\" ></gd-select>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" title=\"{{'Zoom In' | translate}}\" (click)=\"zoomIn()\"\n                 *ngIf=\"zoomConfig\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" title=\"{{'Zoom Out' | translate}}\"\n                 (click)=\"zoomOut()\" *ngIf=\"zoomConfig\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-left'\" title=\"{{'First Page' | translate }}\"\n                 (click)=\"toFirstPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" title=\"{{'Previous Page' | translate}}\"\n                 (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <div class=\"current-page-number noselect\" [ngClass]=\"{'active': !formatDisabled}\" *ngIf=\"formatIcon !== 'file-excel'\">{{currentPage}}/{{countPages}}</div>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" title=\"{{'Next Page' | translate }}\"\n                 (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-right'\" title=\"{{'Last Page' | translate }}\"\n                 (click)=\"toLastPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'undo'\" title=\"{{'Rotate CCW' | translate}}\" (click)=\"rotate(-90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'redo'\" title=\"{{'Rotate CW' | translate}}\"  (click)=\"rotate(90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" title=\"{{'Download' | translate}}\"\n                 (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" title=\"{{'Print' | translate}}\" (click)=\"printFile()\"\n                 *ngIf=\"printConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search'\" title=\"{{'Search' | translate}}\" (click)=\"openSearch()\"\n                 *ngIf=\"searchConfig && !ifPresentation()\" ></gd-button>\n      <gd-search (hidePanel)=\"showSearch = !$event\" *ngIf=\"showSearch\" ></gd-search>\n\n      <div class=\"toolbar-panel-right\">\n        <div class=\"language-menu mobile-hide\" *ngIf=\"showLanguageMenu\">\n          <gd-select class=\"select-language-menu noselect\" [disabled]=\"false\" [options]=\"supportedLanguages\"\n            (selected)=\"selectLanguage($event)\" [showSelected]=\"selectedLanguage\"></gd-select>\n        </div>\n\n        <gd-button class=\"thumbnails-button btn-right\" [disabled]=\"formatDisabled\" [icon]=\"'th-large'\" title=\"{{'Thumbnails' | translate}}\"\n                   (click)=\"openThumbnails()\" *ngIf=\"thumbnailsConfig && isDesktop && formatIcon !== 'file-excel' && (!ifPresentation() ||\n                   ifPresentation() && runPresentation)\"></gd-button>\n        <gd-button class=\"thumbnails-button mobile-hide btn-right smp-start-stop\" [disabled]=\"formatDisabled\" [icon]=\"'play'\" title=\"{{'Run presentation' | translate}}\"\n                   (click)=\"startPresentation()\" *ngIf=\"ifPresentation() && !runPresentation\">{{'Present' | translate}}</gd-button>\n      </div>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"top-panel\" *ngIf=\"runPresentation\">\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <div class=\"slides-title\">Viewer</div>\n      <div class=\"slides-filename\">{{getFileName()}}</div>\n      <div class=\"slides-buttons\">\n        <gd-select class=\"mobile-hide select-right\" [disabled]=\"formatDisabled\" [options]=\"timerOptions\" (selected)=\"toggleTimer($event)\"\n        [icon]=\"'clock'\" *ngIf=\"zoomConfig\" ></gd-select>\n        <gd-button class=\"mobile-hide\" *ngIf=\"presentationRunning()\" [disabled]=\"formatDisabled\" [icon]=\"'pause'\" title=\"{{'Pause presenting' | translate}}\"\n        (click)=\"pausePresenting()\"></gd-button>\n        <gd-button class=\"mobile-hide\" *ngIf=\"presentationPaused()\" [disabled]=\"formatDisabled\" [icon]=\"'step-forward'\" title=\"{{'Resume presenting' | translate}}\"\n        (click)=\"resumePresenting()\"></gd-button>\n        <gd-button class=\"mobile-hide btn-right smp-start-stop\" [disabled]=\"formatDisabled\" [icon]=\"'stop'\" title=\"{{'Stop presenting' | translate}}\"\n        (click)=\"closeFullScreen(true)\">{{'Stop' | translate}} </gd-button>\n      </div>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"doc-panel\" *ngIf=\"file\" #docPanel>\n    <gd-thumbnails *ngIf=\"showThumbnails && !ifPresentation() && isDesktop\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\" (selectedPage)=\"selectCurrentPage($event)\"></gd-thumbnails>\n    <gd-thumbnails *ngIf=\"showThumbnails && ifPresentation() && !runPresentation && isDesktop\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\" (selectedPage)=\"selectCurrentPage($event)\" gdScrollable [isPresentation]=\"ifPresentation()\"></gd-thumbnails>\n\n    <gd-document class=\"gd-document\" *ngIf=\"(file &&\n                                            (ifExcel() && !htmlModeConfig) ||\n                                            (ifPresentation() && isDesktop && !runPresentation) ||\n                                            (!ifExcel() && !ifPresentation()))\" [file]=\"file\" [mode]=\"htmlModeConfig\" [showActiveSlide]=\"true\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" [selectedPage]=\"selectedPageNumber\" gdRenderPrint [htmlMode]=\"htmlModeConfig\" gdMouseWheel (mouseWheelUp)=\"onMouseWheelUp()\" (mouseWheelDown)=\"onMouseWheelDown()\"></gd-document>\n    <gd-excel-document class=\"gd-document\" *ngIf=\"file && ifExcel() && htmlModeConfig\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-excel-document>\n    <gd-run-presentation class=\"gd-document\" *ngIf=\"(file && ifPresentation() && runPresentation) ||\n                                                    (file && ifPresentation() && !isDesktop)\" [file]=\"file\" [currentPage]=\"currentPage\" [mode]=\"htmlModeConfig\"\n                                                    (selectedPage)=\"selectCurrentPage($event)\"\n                 [preloadPageCount]=\"0\"></gd-run-presentation>\n    <div class=\"slides-nav\" *ngIf=\"runPresentation\">\n      <div class=\"timer\" *ngIf=\"showCountDown()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon><span [ngClass]=\"secondsLeft >= 10 ? 'seconds-remaining two-digits' : 'seconds-remaining'\">{{secondsLeft}}</span>\n      </div>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\"\n      (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\"\n      (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n    </div>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n    {{'Click' | translate}} <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> {{'to open file' | translate}}<br>\n    {{'Or drop file here' | translate}}\n  </gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal, null)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.noselect{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.current-page-number{margin-left:7px;font-size:14px;color:#959da5;width:37px;height:37px;line-height:37px;text-align:center}.current-page-number.active{color:#fff}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}.toolbar-panel-right{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1;place-content:flex-end}.btn-right{margin-right:7px}.smp-start-stop ::ng-deep .button{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;border:1px solid;border-radius:5px;padding:0 10px!important}.language-menu{margin-right:15px}.select-language-menu ::ng-deep .select{width:100%}.select-language-menu ::ng-deep .select ::ng-deep .dropdown-menu{overflow-y:scroll;max-height:90%}.select-language-menu ::ng-deep .selected-value{max-width:100%}.thumbnails-button ::ng-deep .button{margin-left:0!important}::ng-deep .tools .button,::ng-deep .tools .nav-caret,::ng-deep .tools .selected-value{color:#fff!important}::ng-deep .tools .button.inactive,::ng-deep .tools .nav-caret.inactive,::ng-deep .tools .selected-value.inactive{color:#959da5!important}::ng-deep .tools .button{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .select-left .select{position:relative}::ng-deep .tools .select-left .dropdown-menu{top:40px;left:0}::ng-deep .tools .select-right .select{position:relative}::ng-deep .tools .select-right .dropdown-menu{top:40px;right:0}::ng-deep .tools .dropdown-menu .option{color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 15px!important}::ng-deep .tools .select{width:37px;height:37px;margin-left:7px;line-height:37px;text-align:center}::ng-deep .tools .slides-title{color:#fff;padding-left:12px;font-size:18px}::ng-deep .tools .slides-filename{-webkit-box-flex:1;flex-grow:1;text-align:center;color:#fff;text-overflow:ellipsis;white-space:nowrap;padding-left:20px;overflow:hidden}::ng-deep .tools .slides-buttons{display:-webkit-box;display:flex}::ng-deep .tools .slides-buttons ::ng-deep .select{color:#fff;cursor:pointer}::ng-deep .tools ::ng-deep .gd-nav-search-container .icon-button{margin:0 0 0 7px!important}.slides-nav{position:absolute;right:30px;bottom:30px;display:-webkit-box;display:flex}.slides-nav ::ng-deep .button{font-size:37px;background-color:#edf0f2;border-radius:3px}.slides-nav ::ng-deep .timer{font-size:42px;line-height:6px;color:#959da5;position:relative}.slides-nav ::ng-deep .timer .seconds-remaining{position:absolute;margin-left:5px;font-size:16px;top:18px;left:12px}.slides-nav ::ng-deep .timer .seconds-remaining.two-digits{left:6px!important}::ng-deep .page.presentation .gd-wrapper{pointer-events:none}@media (max-width:1037px){.current-page-number,.mobile-hide{display:none}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .tools .gd-nav-search-btn .icon-button{height:37px;width:37px}::ng-deep .tools .gd-nav-search-btn .button{font-size:14px}::ng-deep .tools .gd-nav-search-container{top:59px!important}}"]
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
        { type: ChangeDetectorRef },
        { type: TranslateService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3ZpZXdlci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQVUsWUFBWSxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBR0wsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixlQUFlLEVBQ2Ysa0JBQWtCLEVBRWxCLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLGVBQWUsRUFHZixZQUFZLEVBQ1osa0JBQWtCLEVBQ25CLE1BQU0sK0NBQStDLENBQUM7QUFFdkQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGFBQWEsRUFBUyxNQUFNLCtDQUErQyxDQUFDO0FBRXBGLE9BQU8sRUFBQyxTQUFTLEVBQVcsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFckQ7SUFrRUUsNEJBQW9CLGNBQTZCLEVBQzdCLGFBQTJCLEVBQ25DLGFBQWtDLEVBQ2xDLGtCQUFzQyxFQUM5QixnQkFBaUMsRUFDekMsV0FBd0IsRUFDeEIsa0JBQXNDLEVBQzlCLG1CQUF1QyxFQUMvQyxlQUFnQyxFQUN4QixjQUE2QixFQUM3QixtQkFBdUMsRUFDdkMsR0FBc0IsRUFDdkIsU0FBMkI7UUFaOUMsaUJBd0RDO1FBeERtQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUczQixxQkFBZ0IsR0FB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OztJQUM3QixtQ0FBaUI7O0lBQ2pCLG1DQUF3Qjs7SUFDeEIsa0NBQXNCOztJQUN0QiwwQ0FBMkI7O0lBQzNCLHdDQUFlOztJQUNmLDRDQUFzQjs7SUFDdEIsNENBQXVCOztJQUN2Qix5Q0FBa0M7O0lBQ2xDLDhDQUE0Qzs7SUFDNUMsd0NBQW1COztJQUNuQix1Q0FBbUI7O0lBQ25CLHVDQUFtQjs7SUFDbkIsNENBQThCOztJQUU5QixtQ0FBWTs7SUFDWix3Q0FBbUI7O0lBQ25CLHlDQUFvQjs7SUFDcEIscUNBQVE7O0lBQ1IsMENBQWE7O0lBQ2IsMENBQXFCOztJQUNyQiwyQ0FBNkI7O0lBQzdCLCtDQUEwQjs7SUFDMUIseUNBQW9COztJQUNwQiw0Q0FBdUI7O0lBQ3ZCLHdDQUFtQjs7SUFFbkIsdUNBQWtCOztJQUNsQiwyQ0FBc0I7O0lBQ3RCLHNDQUFpQjs7SUFDakIsK0NBQWdDOztJQUNoQyxnREFBMkI7O0lBQzNCLDZDQUF5Qjs7SUFDekIsMENBQXNCOztJQUN0Qiw2Q0FBd0I7O0lBQ3hCLDJDQUFzQjs7SUFFdEIsZ0RBQTZCOztJQUM3Qiw4Q0FBeUI7O0lBRXpCLG1FQUlFOztJQUVGLDBEQUlFOztJQUVGLHlDQUF5Qjs7Ozs7SUFTYiw0Q0FBcUM7Ozs7O0lBQ3JDLDJDQUFtQzs7Ozs7SUFHbkMsOENBQXlDOzs7OztJQUd6QyxpREFBK0M7Ozs7O0lBRS9DLDRDQUFxQzs7Ozs7SUFDckMsaURBQStDOzs7OztJQUMvQyxpQ0FBOEI7O0lBQzlCLHVDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgQ2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtWaWV3ZXJTZXJ2aWNlfSBmcm9tIFwiLi92aWV3ZXIuc2VydmljZVwiO1xuaW1wb3J0IHtcbiAgRmlsZURlc2NyaXB0aW9uLFxuICBGaWxlTW9kZWwsXG4gIE1vZGFsU2VydmljZSxcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICBOYXZpZ2F0ZVNlcnZpY2UsXG4gIFBhZ2VQcmVsb2FkU2VydmljZSxcbiAgUGFnZU1vZGVsLFxuICBab29tU2VydmljZSxcbiAgUmVuZGVyUHJpbnRTZXJ2aWNlLFxuICBGaWxlVXRpbCxcbiAgUGFzc3dvcmRTZXJ2aWNlLFxuICBGaWxlQ3JlZGVudGlhbHMsXG4gIFR5cGVkRmlsZUNyZWRlbnRpYWxzLFxuICBDb21tb25Nb2RhbHMsXG4gIExvYWRpbmdNYXNrU2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge1ZpZXdlckNvbmZpZ30gZnJvbSBcIi4vdmlld2VyLWNvbmZpZ1wiO1xuaW1wb3J0IHtWaWV3ZXJDb25maWdTZXJ2aWNlfSBmcm9tIFwiLi92aWV3ZXItY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7V2luZG93U2VydmljZSwgT3B0aW9ufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0NvbnN0YW50cywgTGFuZ3VhZ2V9IGZyb20gJy4vdmlld2VyLmNvbnN0YW50cyc7XG5pbXBvcnQge0ludGVydmFsVGltZXJ9IGZyb20gJy4vaW50ZXJ2YWwtdGltZXInO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2Qtdmlld2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdlci1hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi92aWV3ZXItYXBwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVmlld2VyQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgdGl0bGUgPSAndmlld2VyJztcbiAgZmlsZXM6IEZpbGVNb2RlbFtdID0gW107XG4gIGZpbGU6IEZpbGVEZXNjcmlwdGlvbjtcbiAgdmlld2VyQ29uZmlnOiBWaWV3ZXJDb25maWc7XG4gIGNvdW50UGFnZXMgPSAwO1xuICBmb3JtYXREaXNhYmxlZCA9IHRydWU7XG4gIHNob3dUaHVtYm5haWxzID0gZmFsc2U7XG4gIGNyZWRlbnRpYWxzOiBUeXBlZEZpbGVDcmVkZW50aWFscztcbiAgYnJvd3NlRmlsZXNNb2RhbCA9IENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcztcbiAgc2hvd1NlYXJjaCA9IGZhbHNlO1xuICBpc0Rlc2t0b3A6IGJvb2xlYW47XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgcGFnZXNUb1ByZWxvYWQ6IG51bWJlcltdID0gW107XG5cbiAgX3pvb20gPSAxMDA7XG4gIF9wYWdlV2lkdGg6IG51bWJlcjtcbiAgX3BhZ2VIZWlnaHQ6IG51bWJlcjtcbiAgb3B0aW9ucztcbiAgdGltZXJPcHRpb25zO1xuICBpbnRlcnZhbFRpbWU6IG51bWJlcjtcbiAgaW50ZXJ2YWxUaW1lcjogSW50ZXJ2YWxUaW1lcjtcbiAgY291bnREb3duSW50ZXJ2YWw6IG51bWJlcjtcbiAgc2Vjb25kc0xlZnQ6IG51bWJlcjtcbiAgZmlsZVdhc0Ryb3BwZWQgPSBmYWxzZTtcbiAgZm9ybWF0SWNvbjogc3RyaW5nO1xuXG4gIGZpbGVQYXJhbTogc3RyaW5nO1xuICBmaWxlVHlwZVBhcmFtOiBzdHJpbmc7XG4gIHVybFBhcmFtOiBzdHJpbmc7XG4gIHF1ZXJ5U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHNlbGVjdGVkUGFnZU51bWJlcjogbnVtYmVyO1xuICBydW5QcmVzZW50YXRpb246IGJvb2xlYW47XG4gIGlzRnVsbFNjcmVlbjogYm9vbGVhbjtcbiAgc3RhcnRTY3JvbGxUaW1lOiBudW1iZXI7XG4gIGVuZFNjcm9sbFRpbWU6IG51bWJlcjtcblxuICBzdXBwb3J0ZWRMYW5ndWFnZXM6IE9wdGlvbltdO1xuICBzZWxlY3RlZExhbmd1YWdlOiBPcHRpb247XG5cbiAgZG9jRWxtV2l0aEJyb3dzZXJzRnVsbFNjcmVlbkZ1bmN0aW9ucyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCBhcyBIVE1MRWxlbWVudCAmIHtcbiAgICBtb3pSZXF1ZXN0RnVsbFNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHdlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gICAgbXNSZXF1ZXN0RnVsbHNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICB9O1xuXG4gIGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMgPSBkb2N1bWVudCBhcyBEb2N1bWVudCAmIHtcbiAgICBtb3pDYW5jZWxGdWxsU2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gICAgd2Via2l0RXhpdEZ1bGxzY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgICBtc0V4aXRGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gIH07XG5cbiAgem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlO1xuXG4gIEBIb3N0TGlzdGVuZXIoXCJkb2N1bWVudDpmdWxsc2NyZWVuY2hhbmdlXCIsIFtdKVxuICBmdWxsU2NyZWVuKCkge1xuICAgIGlmICghZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIHtcbiAgICAgIHRoaXMuY2xvc2VGdWxsU2NyZWVuKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld2VyU2VydmljZTogVmlld2VyU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICAgIGNvbmZpZ1NlcnZpY2U6IFZpZXdlckNvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHVwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcbiAgICAgICAgICAgICAgem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxuICAgICAgICAgICAgICBwYWdlUHJlbG9hZFNlcnZpY2U6IFBhZ2VQcmVsb2FkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyUHJpbnRTZXJ2aWNlOiBSZW5kZXJQcmludFNlcnZpY2UsXG4gICAgICAgICAgICAgIHBhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2FkaW5nTWFza1NlcnZpY2U6IExvYWRpbmdNYXNrU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwdWJsaWMgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLnpvb21TZXJ2aWNlID0gem9vbVNlcnZpY2U7XG4gICAgdGhpcy5zdGFydFNjcm9sbFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuZW5kU2Nyb2xsVGltZSA9IERhdGUubm93KCk7XG5cbiAgICBjb25maWdTZXJ2aWNlLnVwZGF0ZWRDb25maWcuc3Vic2NyaWJlKCh2aWV3ZXJDb25maWcpID0+IHtcbiAgICAgIHRoaXMudmlld2VyQ29uZmlnID0gdmlld2VyQ29uZmlnO1xuICAgIH0pO1xuXG4gICAgdXBsb2FkRmlsZXNTZXJ2aWNlLnVwbG9hZHNDaGFuZ2Uuc3Vic2NyaWJlKCh1cGxvYWRzKSA9PiB7XG4gICAgICBpZiAodXBsb2Fkcykge1xuICAgICAgICBsZXQgaTogbnVtYmVyO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXBsb2Fkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UudXBsb2FkKHVwbG9hZHMuaXRlbShpKSwgJycsIHRoaXMudmlld2VyQ29uZmlnLnJld3JpdGUpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPyB0aGlzLnNlbGVjdEZpbGUob2JqLmd1aWQsICcnLCAnJywgJycpIDogdGhpcy5zZWxlY3REaXIoJycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYWdlUHJlbG9hZFNlcnZpY2UuY2hlY2tQcmVsb2FkLnN1YnNjcmliZSgocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgICBpZih0aGlzLmZpbGUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlld2VyQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgIT09IDApIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gcGFnZTsgaSA8IHBhZ2UgKyAyOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID4gMCAmJiBpIDw9IHRoaXMuZmlsZS5wYWdlcy5sZW5ndGggJiYgIXRoaXMuZmlsZS5wYWdlc1tpIC0gMV0uZGF0YSkge1xuICAgICAgICAgICAgICB0aGlzLnByZWxvYWRQYWdlcyhpLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhc3N3b3JkU2VydmljZS5wYXNzQ2hhbmdlLnN1YnNjcmliZSgocGFzczogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5jcmVkZW50aWFscy5ndWlkLCBwYXNzLCBDb21tb25Nb2RhbHMuUGFzc3dvcmRSZXF1aXJlZCwgdGhpcy5jcmVkZW50aWFscy5maWxlVHlwZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgICAgaWYgKCF0aGlzLnJ1blByZXNlbnRhdGlvbikge1xuICAgICAgICB0aGlzLnJlZnJlc2hab29tKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy52aWV3ZXJDb25maWcuZGVmYXVsdERvY3VtZW50ICE9PSAnJyAmJiB0aGlzLnZpZXdlckNvbmZpZy5kZWZhdWx0RG9jdW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLnZpZXdlckNvbmZpZy5kZWZhdWx0RG9jdW1lbnQsICcnLCAnJywgJycpO1xuICAgICAgdGhpcy5zZWxlY3RDdXJyZW50T3JGaXJzdFBhZ2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0TGFuZ3VhZ2UgPSB0aGlzLmRlZmF1bHRMYW5ndWFnZUNvbmZpZztcbiAgICBjb25zdCBzdXBwb3J0ZWRMYW5ndWFnZXMgPSB0aGlzLnN1cHBvcnRlZExhbmd1YWdlc0NvbmZpZ1xuICAgICAgLm1hcChsYW5ndWFnZSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogbGFuZ3VhZ2UubmFtZSxcbiAgICAgICAgICB2YWx1ZTogbGFuZ3VhZ2UuY29kZSxcbiAgICAgICAgICBzZXBhcmF0b3I6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgIHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VzID0gc3VwcG9ydGVkTGFuZ3VhZ2VzO1xuICAgIHRoaXMuc2VsZWN0ZWRMYW5ndWFnZSA9IHN1cHBvcnRlZExhbmd1YWdlcy5maW5kKGxhbmcgPT4gbGFuZy52YWx1ZSA9PT0gZGVmYXVsdExhbmd1YWdlLmNvZGUpO1xuICAgIHRoaXMudHJhbnNsYXRlLnVzZShkZWZhdWx0TGFuZ3VhZ2UuY29kZSk7XG5cbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgaWYgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcblxuICAgICAgdGhpcy5maWxlUGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdmaWxlJyk7XG4gICAgICB0aGlzLmZpbGVUeXBlUGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdmaWxlVHlwZScpO1xuICAgICAgaWYodGhpcy5maWxlUGFyYW0pIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5maWxlUGFyYW0sICcnLCAnJywgdGhpcy5maWxlVHlwZVBhcmFtKTtcbiAgICAgICAgdGhpcy5zZWxlY3RDdXJyZW50T3JGaXJzdFBhZ2UoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVybFBhcmFtID0gdXJsUGFyYW1zLmdldCgndXJsJyk7XG4gICAgICBpZih0aGlzLnVybFBhcmFtKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51cGxvYWQodGhpcy51cmxQYXJhbSk7XG4gICAgICAgIHRoaXMuc2VsZWN0Q3VycmVudE9yRmlyc3RQYWdlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2xvYWRpbmdNYXNrU2VydmljZVxuICAgIC5vbkxvYWRpbmdDaGFuZ2VkXG4gICAgLnN1YnNjcmliZSgobG9hZGluZzogYm9vbGVhbikgPT4gdGhpcy5pc0xvYWRpbmcgPSBsb2FkaW5nKTtcblxuICAgIHRoaXMucmVmcmVzaFpvb20oKTtcbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHpvb21Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcuem9vbSA6IHRydWU7XG4gIH1cblxuICBnZXQgcGFnZVNlbGVjdG9yQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnBhZ2VTZWxlY3RvciA6IHRydWU7XG4gIH1cblxuICBnZXQgc2VhcmNoQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnNlYXJjaCA6IHRydWU7XG4gIH1cblxuICBnZXQgdGh1bWJuYWlsc0NvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy50aHVtYm5haWxzIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCByb3RhdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcucm90YXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBkb3dubG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5kb3dubG9hZCA6IHRydWU7XG4gIH1cblxuICBnZXQgdXBsb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnVwbG9hZCA6IHRydWU7XG4gIH1cblxuICBnZXQgcHJpbnRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcucHJpbnQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5icm93c2UgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGh0bWxNb2RlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLmh0bWxNb2RlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBzYXZlUm90YXRlU3RhdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcuc2F2ZVJvdGF0ZVN0YXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBlbmFibGVSaWdodENsaWNrQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLmVuYWJsZVJpZ2h0Q2xpY2sgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZTtcbiAgfVxuXG4gIGdldCBzaG93TGFuZ3VhZ2VNZW51KCk6IGJvb2xlYW4ge1xuICAgIGlmKHRoaXMudmlld2VyQ29uZmlnICE9PSB1bmRlZmluZWQgJiYgdGhpcy52aWV3ZXJDb25maWcuc2hvd0xhbmd1YWdlTWVudSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcuc2hvd0xhbmd1YWdlTWVudTtcbiAgICB9XG4gICAgcmV0dXJuIENvbnN0YW50cy5kZWZhdWx0U2hvd0xhbmd1YWdlTWVudTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0ZWRMYW5ndWFnZXNDb25maWcoKTogTGFuZ3VhZ2VbXSB7XG4gICAgaWYodGhpcy52aWV3ZXJDb25maWcgJiYgdGhpcy52aWV3ZXJDb25maWcuc3VwcG9ydGVkTGFuZ3VhZ2VzKSB7XG4gICAgICBjb25zdCBzdXBwb3J0ZWRMYW5ndWFnZXMgPSB0aGlzLnZpZXdlckNvbmZpZy5zdXBwb3J0ZWRMYW5ndWFnZXM7XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLmRlZmF1bHRTdXBwb3J0ZWRMYW5ndWFnZXNcbiAgICAgICAgLmZpbHRlcihsYW5nID0+XG4gICAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzLmluZGV4T2YobGFuZy5jb2RlKSAhPT0gLTEgfHwgc3VwcG9ydGVkTGFuZ3VhZ2VzLmluZGV4T2YobGFuZy5hbHRlcm5hdGVDb2RlKSAhPT0gLTEpO1xuICAgIH1cblxuICAgIHJldHVybiBDb25zdGFudHMuZGVmYXVsdFN1cHBvcnRlZExhbmd1YWdlcztcbiAgfVxuXG4gIGdldCBkZWZhdWx0TGFuZ3VhZ2VDb25maWcoKTogTGFuZ3VhZ2Uge1xuICAgIGlmKHRoaXMudmlld2VyQ29uZmlnICYmIHRoaXMudmlld2VyQ29uZmlnLmRlZmF1bHRMYW5ndWFnZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VzQ29uZmlnXG4gICAgICAgIC5maW5kKGxhbmcgPT4gbGFuZy5pcyh0aGlzLnZpZXdlckNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2UpKVxuICAgIH1cblxuICAgIGNvbnN0IHBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGlmIChwYXRobmFtZSkge1xuICAgICAgY29uc3QgcGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpO1xuICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHBhcnRzKSB7XG4gICAgICAgIGlmKHBhcnQgPT09IFwiXCIpXG4gICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgY29uc3QgbGFuZ09yTm90aGluZyA9IHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VzQ29uZmlnXG4gICAgICAgICAgLmZpbHRlcihzdXBwb3J0ZWQgPT4gc3VwcG9ydGVkLmlzKHBhcnQpKVxuICAgICAgICAgIC5zaGlmdCgpO1xuXG4gICAgICAgIGlmKGxhbmdPck5vdGhpbmcpXG4gICAgICAgICAgcmV0dXJuIGxhbmdPck5vdGhpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgIGlmIChxdWVyeVN0cmluZykge1xuICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XG4gICAgICBjb25zdCBjYW5kaWRhdGUgPSB1cmxQYXJhbXMuZ2V0KCdsYW5nJyk7XG4gICAgICBpZihjYW5kaWRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VzQ29uZmlnXG4gICAgICAgICAgLmZpbmQobGFuZyA9PiBsYW5nLmlzKGNhbmRpZGF0ZSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIENvbnN0YW50cy5kZWZhdWx0TGFuZ3VhZ2U7XG4gIH1cblxuICBpZlByZXNlbnRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlID8gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmZvcm1hdCA9PT0gXCJNaWNyb3NvZnQgUG93ZXJQb2ludFwiIDogZmFsc2U7XG4gIH1cblxuICBpZkV4Y2VsKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUgPyBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkuZm9ybWF0ID09PSBcIk1pY3Jvc29mdCBFeGNlbFwiIDogZmFsc2U7XG4gIH1cblxuICBpZkltYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUgPyB0aGlzLmZvcm1hdEljb24gPT09IFwiZmlsZS1pbWFnZVwiIDogZmFsc2U7XG4gIH1cblxuICBnZXRGaWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlLmd1aWQucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICB9XG5cbiAgb3Blbk1vZGFsKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihpZCk7XG4gIH1cblxuICBjbG9zZU1vZGFsKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoaWQpO1xuICB9XG5cbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmlld2VyU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBGaWxlTW9kZWxbXSkgPT4gdGhpcy5maWxlcyA9IGZpbGVzIHx8IFtdKTtcbiAgfVxuXG4gIHNlbGVjdEN1cnJlbnRPckZpcnN0UGFnZSgpIHtcbiAgICB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciA9IHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSAhPT0gMCA/IHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA6IDE7XG4gIH1cblxuICBnZXRQcmVsb2FkUGFnZUNvdW50KCkge1xuICAgIGNvbnN0IG1pblByZXNlbnRhdGlvblBhZ2VzVG9QcmVsb2FkID0gMztcbiAgICBjb25zdCBwcmVsb2FkUGFnZUNvdW50ID0gIXRoaXMuaWZQcmVzZW50YXRpb24oKVxuICAgICAgPyB0aGlzLnZpZXdlckNvbmZpZy5wcmVsb2FkUGFnZUNvdW50XG4gICAgICA6IHRoaXMudmlld2VyQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgIT09IDAgJiYgdGhpcy52aWV3ZXJDb25maWcucHJlbG9hZFBhZ2VDb3VudCA8IG1pblByZXNlbnRhdGlvblBhZ2VzVG9QcmVsb2FkXG4gICAgICAgID8gbWluUHJlc2VudGF0aW9uUGFnZXNUb1ByZWxvYWRcbiAgICAgICAgOiB0aGlzLnZpZXdlckNvbmZpZy5wcmVsb2FkUGFnZUNvdW50O1xuXG4gICAgcmV0dXJuIHByZWxvYWRQYWdlQ291bnQ7XG4gIH1cblxuICBzZWxlY3RGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBtb2RhbElkOiBzdHJpbmcsIGZpbGVUeXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0ge2d1aWQ6ICRldmVudCwgZmlsZVR5cGU6IGZpbGVUeXBlLCBwYXNzd29yZDogcGFzc3dvcmR9O1xuICAgIHRoaXMuZmlsZSA9IG51bGw7XG4gICAgdGhpcy5fdmlld2VyU2VydmljZS5sb2FkRmlsZSh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGZpbGU6IEZpbGVEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgICAgICB0aGlzLmZvcm1hdERpc2FibGVkID0gIXRoaXMuZmlsZTtcbiAgICAgICAgdGhpcy5wYWdlc1RvUHJlbG9hZCA9IFtdO1xuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgIHRoaXMuY3JlZGVudGlhbHMuZmlsZVR5cGUgPSBmaWxlLmZpbGVUeXBlO1xuICAgICAgICAgIHRoaXMuZm9ybWF0SWNvbiA9IHRoaXMuZmlsZSA/IEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5pY29uIDogbnVsbDtcbiAgICAgICAgICBpZiAoZmlsZS5wYWdlcyAmJiBmaWxlLnBhZ2VzWzBdKSB7XG4gICAgICAgICAgICB0aGlzLl9wYWdlSGVpZ2h0ID0gZmlsZS5wYWdlc1swXS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9wYWdlV2lkdGggPSBmaWxlLnBhZ2VzWzBdLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy56b29tT3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy50aW1lck9wdGlvbnMgPSB0aGlzLmdldFRpbWVyT3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vY29weSBwYWdlcyB0byB0aHVtYm5haWxzXG4gICAgICAgICAgdGhpcy5maWxlLnRodW1ibmFpbHMgPSBmaWxlLnBhZ2VzLnNsaWNlKCk7XG5cbiAgICAgICAgICBjb25zdCBjb3VudFBhZ2VzVG9QcmVsb2FkID0gdGhpcy5nZXRQcmVsb2FkUGFnZUNvdW50KCk7XG4gICAgICAgICAgY29uc3QgY291bnRQYWdlcyA9IGZpbGUucGFnZXMgPyBmaWxlLnBhZ2VzLmxlbmd0aCA6IDA7XG4gICAgICAgICAgY29uc3QgY291bnRQYWdlc1RvTG9hZCA9IGNvdW50UGFnZXNUb1ByZWxvYWQgPT09IDBcbiAgICAgICAgICAgID8gY291bnRQYWdlcyA6IGNvdW50UGFnZXNUb1ByZWxvYWQgPiBjb3VudFBhZ2VzXG4gICAgICAgICAgICAgID8gY291bnRQYWdlc1xuICAgICAgICAgICAgICA6IGNvdW50UGFnZXNUb1ByZWxvYWQ7XG5cbiAgICAgICAgICAvL3JldHJpZXZlIGFsbCBwYWdlcyBvciBudW1iZXIgb2YgcGFnZXMgdG8gcHJlbG9hZFxuICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKDEsIGNvdW50UGFnZXNUb0xvYWQpO1xuXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgPSAxO1xuICAgICAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jb3VudFBhZ2VzID0gY291bnRQYWdlcztcbiAgICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgPSB0aGlzLnNlbGVjdGVkUGFnZU51bWJlcjtcbiAgICAgICAgICB0aGlzLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xuICAgICAgICAgIHRoaXMuc2hvd1RodW1ibmFpbHMgPSB0aGlzLmlmUHJlc2VudGF0aW9uKCk7XG4gICAgICAgICAgdGhpcy5ydW5QcmVzZW50YXRpb24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgKTtcbiAgICBpZiAobW9kYWxJZCkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKG1vZGFsSWQpO1xuICAgIH1cbiAgICB0aGlzLmNsZWFyRGF0YSgpO1xuICB9XG5cbiAgcHJlbG9hZFBhZ2VzKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG4gICAgZm9yIChsZXQgcGFnZU51bWJlciA9IHN0YXJ0OyBwYWdlTnVtYmVyIDw9IGVuZDsgcGFnZU51bWJlcisrKSB7XG4gICAgICBpZih0aGlzLnBhZ2VzVG9QcmVsb2FkLmluZGV4T2YocGFnZU51bWJlcikgIT09IC0xKXtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucGFnZXNUb1ByZWxvYWQucHVzaChwYWdlTnVtYmVyKTtcblxuICAgICAgdGhpcy5fdmlld2VyU2VydmljZS5sb2FkUGFnZSh0aGlzLmNyZWRlbnRpYWxzLCBwYWdlTnVtYmVyKS5zdWJzY3JpYmUoKHBhZ2U6IFBhZ2VNb2RlbCkgPT4ge1xuICAgICAgICBpZihwYWdlLmRhdGEpIHtcbiAgICAgICAgICBwYWdlLmRhdGEgPSBwYWdlLmRhdGEucmVwbGFjZSgvPlxccys8L2csICc+PCcpLnJlcGxhY2UoL1xcdUZFRkYvZywgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWxlLnBhZ2VzW3BhZ2VOdW1iZXIgLSAxXS5kYXRhID0gcGFnZS5kYXRhO1xuXG4gICAgICAgIGlmICh0aGlzLmZpbGUudGh1bWJuYWlscykge1xuICAgICAgICAgIHRoaXMuZmlsZS50aHVtYm5haWxzW3BhZ2VOdW1iZXIgLSAxXS5kYXRhID0gcGFnZS5kYXRhO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLnVwbG9hZChudWxsLCAkZXZlbnQsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKCh1cGxvYWRlZERvY3VtZW50OiBhbnkpID0+IHtcbiAgICAgIGlmICh0aGlzLmZpbGVQYXJhbSAhPT0gJycpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RGaWxlKHVwbG9hZGVkRG9jdW1lbnQuZ3VpZCwgJycsICcnLCAnJyk7XG4gICAgICAgIHRoaXMuZmlsZVBhcmFtID0gJyc7XG4gICAgICAgIHRoaXMuZmlsZVR5cGVQYXJhbSA9ICcnO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5leHRQYWdlKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGlmICh0aGlzLmludGVydmFsVGltZXIgJiYgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlICsgMSA+IHRoaXMuY291bnRQYWdlcykge1xuICAgICAgdGhpcy5pbnRlcnZhbFRpbWVyLnN0b3AoKTtcbiAgICAgIHRoaXMuaW50ZXJ2YWxUaW1lID0gMDtcbiAgICB9XG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLm5leHRQYWdlKCk7XG4gIH1cblxuICBwcmV2UGFnZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UucHJldlBhZ2UoKTtcbiAgfVxuXG4gIHRvTGFzdFBhZ2UoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLnRvTGFzdFBhZ2UoKTtcbiAgfVxuXG4gIHRvRmlyc3RQYWdlKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS50b0ZpcnN0UGFnZSgpO1xuICB9XG5cbiAgem9vbUluKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGlmICh0aGlzLl96b29tIDwgNDkwKSB7XG4gICAgICB0aGlzLnpvb20gPSB0aGlzLl96b29tICsgMTA7XG4gICAgfVxuICB9XG5cbiAgem9vbU91dCgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBpZiAodGhpcy5fem9vbSA+IDMwKSB7XG4gICAgICB0aGlzLnpvb20gPSB0aGlzLl96b29tIC0gMTA7XG4gICAgfVxuICB9XG5cbiAgZmlsZURyb3BwZWQoJGV2ZW50KXtcbiAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID0gJGV2ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBwdFRvUHgocHQ6IG51bWJlcikge1xuICAgIC8vcHQgKiA5NiAvIDcyID0gcHguXG4gICAgcmV0dXJuIHB0ICogOTYgLyA3MjtcbiAgfVxuXG4gIGdldEZpdFRvV2lkdGgoKSB7XG4gICAgLy8gSW1hZ2VzIGFuZCBFeGNlbC1yZWxhdGVkIGZpbGVzIHJlY2VpdmluZyBkaW1lbnNpb25zIGluIHB4IGZyb20gc2VydmVyXG4gICAgY29uc3QgcGFnZVdpZHRoID0gdGhpcy5mb3JtYXRJY29uICYmICh0aGlzLmlmRXhjZWwoKSB8fCB0aGlzLmlmSW1hZ2UoKSkgPyB0aGlzLl9wYWdlV2lkdGggOiB0aGlzLnB0VG9QeCh0aGlzLl9wYWdlV2lkdGgpO1xuICAgIGNvbnN0IHBhZ2VIZWlnaHQgPSB0aGlzLmZvcm1hdEljb24gJiYgKHRoaXMuaWZFeGNlbCgpIHx8IHRoaXMuaWZJbWFnZSgpKSA/IHRoaXMuX3BhZ2VIZWlnaHQgOiB0aGlzLnB0VG9QeCh0aGlzLl9wYWdlSGVpZ2h0KTtcbiAgICBjb25zdCBvZmZzZXRXaWR0aCA9IHBhZ2VXaWR0aCA/IHBhZ2VXaWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgY29uc3QgcHJlc2VudGF0aW9uVGh1bWJuYWlscyA9IHRoaXMuaXNEZXNrdG9wICYmIHRoaXMuaWZQcmVzZW50YXRpb24oKSAmJiAhdGhpcy5ydW5QcmVzZW50YXRpb247XG5cbiAgICBpZiAoIXRoaXMucnVuUHJlc2VudGF0aW9uKSB7XG4gICAgICByZXR1cm4gKHBhZ2VIZWlnaHQgPiBwYWdlV2lkdGggJiYgTWF0aC5yb3VuZChvZmZzZXRXaWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSA8IDIpID8gMjAwIC0gTWF0aC5yb3VuZChvZmZzZXRXaWR0aCAqIDEwMCAvIChwcmVzZW50YXRpb25UaHVtYm5haWxzID8gd2luZG93LmlubmVyV2lkdGggLSBDb25zdGFudHMudGh1bWJuYWlsc1dpZHRoIC0gQ29uc3RhbnRzLnNjcm9sbFdpZHRoIDogd2luZG93LmlubmVyV2lkdGgpKVxuICAgICAgICA6ICghdGhpcy5pc0Rlc2t0b3AgPyBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lcldpZHRoICogMTAwIC8gb2Zmc2V0V2lkdGgpXG4gICAgICAgICAgOiBNYXRoLnJvdW5kKCgocHJlc2VudGF0aW9uVGh1bWJuYWlscyA/IHdpbmRvdy5pbm5lcldpZHRoIC0gQ29uc3RhbnRzLnRodW1ibmFpbHNXaWR0aCAtIENvbnN0YW50cy5zY3JvbGxXaWR0aFxuICAgICAgICAgICAgOiB3aW5kb3cuaW5uZXJIZWlnaHQpIC8gb2Zmc2V0V2lkdGgpICogMTAwKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggKiAxMDAgLyBvZmZzZXRXaWR0aCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Rml0VG9IZWlnaHQoKSB7XG4gICAgY29uc3QgcGFnZVdpZHRoID0gdGhpcy5mb3JtYXRJY29uICYmICh0aGlzLmlmRXhjZWwoKSB8fCB0aGlzLmlmSW1hZ2UoKSkgPyB0aGlzLl9wYWdlV2lkdGggOiB0aGlzLnB0VG9QeCh0aGlzLl9wYWdlV2lkdGgpO1xuICAgIGNvbnN0IHBhZ2VIZWlnaHQgPSB0aGlzLmZvcm1hdEljb24gJiYgKHRoaXMuaWZFeGNlbCgpIHx8IHRoaXMuaWZJbWFnZSgpKSA/IHRoaXMuX3BhZ2VIZWlnaHQgOiB0aGlzLnB0VG9QeCh0aGlzLl9wYWdlSGVpZ2h0KTtcbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCkgPyB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMDAgOiB3aW5kb3cuaW5uZXJIZWlnaHQgKyAxMDA7XG4gICAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gcGFnZUhlaWdodCA/IHBhZ2VIZWlnaHQgOiB3aW5kb3dIZWlnaHQ7XG5cbiAgICBpZiAoIXRoaXMuaWZQcmVzZW50YXRpb24oKSAmJiAhKHRoaXMuaWZJbWFnZSgpKSkge1xuICAgICAgcmV0dXJuIChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoKSA/IE1hdGgucm91bmQod2luZG93SGVpZ2h0ICogMTAwIC8gb2Zmc2V0SGVpZ2h0KSA6IE1hdGgucm91bmQob2Zmc2V0SGVpZ2h0ICogMTAwIC8gd2luZG93SGVpZ2h0KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaWZQcmVzZW50YXRpb24oKSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKHdpbmRvdy5pbm5lckhlaWdodCAtIENvbnN0YW50cy50b3BiYXJXaWR0aCkgKiAxMDAgLyAoIXRoaXMucnVuUHJlc2VudGF0aW9uID8gb2Zmc2V0SGVpZ2h0ICsgQ29uc3RhbnRzLmRvY3VtZW50TWFyZ2luICogMiArIENvbnN0YW50cy5zY3JvbGxXaWR0aFxuICAgICAgICA6IG9mZnNldEhlaWdodCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pZkltYWdlKCkpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKCh3aW5kb3cuaW5uZXJIZWlnaHQgLSBDb25zdGFudHMudG9wYmFyV2lkdGgpICogMTAwIC8gKG9mZnNldEhlaWdodCArIENvbnN0YW50cy5kb2N1bWVudE1hcmdpbiAqIDIgKyBDb25zdGFudHMuc2Nyb2xsV2lkdGgpKTtcbiAgICB9XG4gIH1cblxuICB6b29tT3B0aW9ucygpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0Rml0VG9XaWR0aCgpO1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0Rml0VG9IZWlnaHQoKTtcbiAgICByZXR1cm4gdGhpcy56b29tU2VydmljZS56b29tT3B0aW9ucyh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGdldFRpbWVyT3B0aW9ucygpIHtcbiAgICByZXR1cm4gW3t2YWx1ZTogMCwgbmFtZTogJ05vbmUnLCBzZXBhcmF0b3I6IGZhbHNlfSxcbiAgICAgIHt2YWx1ZTogNSwgbmFtZTogJzUgc2VjJywgc2VwYXJhdG9yOiBmYWxzZX0sXG4gICAgICB7dmFsdWU6IDEwLCBuYW1lOiAnMTAgc2VjJywgc2VwYXJhdG9yOiBmYWxzZX0sXG4gICAgICB7dmFsdWU6IDE1LCBuYW1lOiAnMTUgc2VjJywgc2VwYXJhdG9yOiBmYWxzZX0sXG4gICAgICB7dmFsdWU6IDMwLCBuYW1lOiAnMzAgc2VjJywgc2VwYXJhdG9yOiBmYWxzZX1dO1xuICB9XG5cbiAgc2V0IHpvb20oem9vbSkge1xuICAgIHRoaXMuX3pvb20gPSB6b29tO1xuICAgIHRoaXMuem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLl96b29tKTtcbiAgfVxuXG4gIGdldCB6b29tKCkge1xuICAgIHJldHVybiB0aGlzLl96b29tO1xuICB9XG5cbiAgc2VsZWN0Wm9vbSgkZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuem9vbSA9ICRldmVudC52YWx1ZTtcbiAgfVxuXG4gIHJvdGF0ZShkZWc6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2U7XG4gICAgY29uc3QgcGFnZU1vZGVsID0gdGhpcy5maWxlLnBhZ2VzW3BhZ2VOdW1iZXIgLSAxXTtcblxuICAgIGlmICh0aGlzLnNhdmVSb3RhdGVTdGF0ZUNvbmZpZyAmJiB0aGlzLmZpbGUpIHtcbiAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2Uucm90YXRlKHRoaXMuY3JlZGVudGlhbHMsIGRlZywgcGFnZU51bWJlcikuc3Vic2NyaWJlKChwYWdlOiBQYWdlTW9kZWwpID0+IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZERhdGEgPSBwYWdlLmRhdGEucmVwbGFjZSgvPlxccys8L2csJz48JylcbiAgICAgICAgICAucmVwbGFjZSgvXFx1RkVGRi9nLFwiXCIpO1xuICAgICAgICBwYWdlLmRhdGEgPSB1cGRhdGVkRGF0YTtcbiAgICAgICAgdGhpcy5maWxlLnBhZ2VzW3BhZ2VOdW1iZXIgLSAxXSA9IHBhZ2U7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsZSAmJiB0aGlzLmZpbGUucGFnZXMgJiYgcGFnZU1vZGVsKSB7XG4gICAgICAgICAgY29uc3QgYW5nbGUgPSBwYWdlTW9kZWwuYW5nbGUgKyBkZWc7XG4gICAgICAgICAgaWYgKGFuZ2xlID4gMzYwKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUFuZ2xlKHBhZ2VNb2RlbCwgOTApO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYW5nbGUgPCAtMzYwKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUFuZ2xlKHBhZ2VNb2RlbCwgLTkwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBbmdsZShwYWdlTW9kZWwsIGFuZ2xlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VBbmdsZShwYWdlOiBQYWdlTW9kZWwsIGFuZ2xlOiBudW1iZXIpIHtcbiAgICBwYWdlLmFuZ2xlID0gYW5nbGU7XG4gIH1cblxuICBkb3dubG9hZEZpbGUoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLl92aWV3ZXJTZXJ2aWNlLmdldERvd25sb2FkVXJsKHRoaXMuY3JlZGVudGlhbHMpKTtcbiAgfVxuXG4gIHByaW50RmlsZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcblxuICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UubG9hZFByaW50UGRmKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZGF0YTogQmxvYikgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyUHJpbnRTZXJ2aWNlLmNoYW5nZUJsb2IoZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuVGh1bWJuYWlscygpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcblxuICAgIGlmICh0aGlzLnNob3dUaHVtYm5haWxzKSB7XG4gICAgICB0aGlzLnNob3dUaHVtYm5haWxzID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5ydW5QcmVzZW50YXRpb24gPSBmYWxzZTtcbiAgICB0aGlzLnNob3dUaHVtYm5haWxzID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJEYXRhKCkge1xuICAgIGlmICghdGhpcy5maWxlIHx8ICF0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwYWdlIG9mIHRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgcGFnZS5kYXRhID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBvblJpZ2h0Q2xpY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5hYmxlUmlnaHRDbGlja0NvbmZpZztcbiAgfVxuXG4gIG9wZW5TZWFyY2goKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgdGhpcy5zaG93U2VhcmNoID0gIXRoaXMuc2hvd1NlYXJjaDtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaFpvb20oKSB7XG4gICAgaWYgKHRoaXMuZmlsZSkge1xuICAgICAgdGhpcy5mb3JtYXRJY29uID0gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmljb247XG4gICAgICB0aGlzLnpvb20gPSB0aGlzLl93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpICYmICEodGhpcy5pZkltYWdlKCkgfHwgdGhpcy5pZlByZXNlbnRhdGlvbigpKSA/IDEwMFxuICAgICAgICA6ICh0aGlzLmlmSW1hZ2UoKSA/IHRoaXMuZ2V0Rml0VG9IZWlnaHQoKVxuICAgICAgICAgIDogdGhpcy5nZXRGaXRUb1dpZHRoKCkpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEN1cnJlbnRQYWdlKHBhZ2VOdW1iZXIpXG4gIHtcbiAgICB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciA9IHBhZ2VOdW1iZXI7XG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gcGFnZU51bWJlcjtcbiAgICBpZiAodGhpcy5ydW5QcmVzZW50YXRpb24gJiYgdGhpcy5pbnRlcnZhbFRpbWUgPiAwICYmIHRoaXMuaW50ZXJ2YWxUaW1lci5zdGF0ZSAhPT0gMykge1xuICAgICAgdGhpcy5yZXNldEludGVydmFsKCk7XG4gICAgICBpZiAodGhpcy5zbGlkZUluUmFuZ2UoKSkge1xuICAgICAgICB0aGlzLnN0YXJ0Q291bnREb3duKHRoaXMuaW50ZXJ2YWxUaW1lLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk1vdXNlV2hlZWxVcCgpXG4gIHtcbiAgICB0aGlzLnN0YXJ0U2Nyb2xsVGltZSA9IERhdGUubm93KCk7XG4gICAgaWYgKHRoaXMuaWZQcmVzZW50YXRpb24oKSAmJiB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciAhPT0gMSkge1xuICAgICAgaWYgKHRoaXMuc3RhcnRTY3JvbGxUaW1lIC0gdGhpcy5lbmRTY3JvbGxUaW1lID4gMzAwICYmIHRoaXMudmVydFNjcm9sbEVuZGVkKHRydWUpKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyID0gdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgLSAxO1xuICAgICAgICB0aGlzLmVuZFNjcm9sbFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VXaGVlbERvd24oKVxuICB7XG4gICAgdGhpcy5zdGFydFNjcm9sbFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGlmICh0aGlzLmlmUHJlc2VudGF0aW9uKCkgJiYgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgIT09IHRoaXMuZmlsZS5wYWdlcy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXJ0U2Nyb2xsVGltZSAtIHRoaXMuZW5kU2Nyb2xsVGltZSA+IDMwMCAmJiB0aGlzLnZlcnRTY3JvbGxFbmRlZChmYWxzZSkpIHtcbiAgICAgICAgdGhpcy5zdGFydFNjcm9sbFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBpZiAodGhpcy5maWxlLnBhZ2VzW3RoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyXSAmJiAhdGhpcy5maWxlLnBhZ2VzW3RoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyXS5kYXRhKSB7XG4gICAgICAgICAgdGhpcy5wcmVsb2FkUGFnZXModGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIsIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyICsgMSk7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgPSB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgPSB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciArIDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmRTY3JvbGxUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2ZXJ0U2Nyb2xsRW5kZWQob25Ub3A6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBnZERvY3VtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2QtZG9jdW1lbnQnKVswXSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAob25Ub3ApXG4gICAge1xuICAgICAgcmV0dXJuIGdkRG9jdW1lbnQuc2Nyb2xsVG9wID09PSAwO1xuICAgIH1cbiAgICBlbHNlIHJldHVybiBnZERvY3VtZW50Lm9mZnNldEhlaWdodCArIGdkRG9jdW1lbnQuc2Nyb2xsVG9wID49IGdkRG9jdW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICB9XG5cbiAgdG9nZ2xlVGltZXIoJGV2ZW50KXtcbiAgICB0aGlzLmludGVydmFsVGltZSA9ICRldmVudC52YWx1ZTtcbiAgICBpZiAodGhpcy5pbnRlcnZhbFRpbWUgIT09IDApIHtcbiAgICAgIGlmICh0aGlzLmludGVydmFsVGltZXIgJiYgdGhpcy5pbnRlcnZhbFRpbWVyLnN0YXRlID09PSAxKSB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxUaW1lci5zdG9wKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXJ0Q291bnREb3duKHRoaXMuaW50ZXJ2YWxUaW1lKTtcbiAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCh0aGlzLmludGVydmFsVGltZSk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICB0aGlzLmludGVydmFsVGltZXIuc3RvcCgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dDb3VudERvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJ2YWxUaW1lID4gMCAmJiAodGhpcy5zbGlkZUluUmFuZ2UoKSlcbiAgfVxuXG4gIHN0YXJ0Q291bnREb3duKHNlY29uZHM6IG51bWJlciwgcmVzZXQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5jb3VudERvd25JbnRlcnZhbCk7XG4gICAgaWYgKHNlY29uZHMgPiAwKSB7XG4gICAgICB0aGlzLnNlY29uZHNMZWZ0ID0gc2Vjb25kcztcbiAgICAgIHNlY29uZHMtLTtcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2Vjb25kc0xlZnQgPSBzZWNvbmRzO1xuICAgICAgICAgIHNlY29uZHMtLTtcbiAgICAgICAgICBpZiAoc2Vjb25kcyA9PT0gMCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgfVxuICAgICAgfSwgMTAwMCk7XG5cbiAgICAgIHRoaXMuY291bnREb3duSW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0SW50ZXJ2YWwoaW50ZXJ2YWxUaW1lOiBudW1iZXIpIHtcbiAgICB0aGlzLmludGVydmFsVGltZXIgPSBuZXcgSW50ZXJ2YWxUaW1lcigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zbGlkZUluUmFuZ2UoKSkge1xuICAgICAgICB0aGlzLm5leHRQYWdlKCk7XG4gICAgICAgIGlmICh0aGlzLnNsaWRlSW5SYW5nZSgpKSB7XG4gICAgICAgICAgdGhpcy5zdGFydENvdW50RG93bihpbnRlcnZhbFRpbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxUaW1lci5zdG9wKCk7XG4gICAgICB9XG4gICAgfSwgaW50ZXJ2YWxUaW1lICogMTAwMCk7XG4gIH1cblxuICBwcml2YXRlIHNsaWRlSW5SYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlICsgMSA8PSB0aGlzLmNvdW50UGFnZXM7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0SW50ZXJ2YWwoKSB7XG4gICAgdGhpcy5pbnRlcnZhbFRpbWVyLnN0b3AoKTtcbiAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwodGhpcy5pbnRlcnZhbFRpbWUpO1xuICB9XG5cbiAgcGF1c2VQcmVzZW50aW5nKCkge1xuICAgIHRoaXMuaW50ZXJ2YWxUaW1lci5wYXVzZSgpO1xuICAgIHRoaXMuc3RhcnRDb3VudERvd24oMCwgdHJ1ZSk7XG4gIH1cblxuICByZXN1bWVQcmVzZW50aW5nKCkge1xuICAgIHRoaXMuaW50ZXJ2YWxUaW1lci5yZXN1bWUoKTtcbiAgICBjb25zdCBzZWNvbmRzUmVtYWluaW5nID0gTWF0aC5yb3VuZCh0aGlzLmludGVydmFsVGltZXIucmVtYWluaW5nLzEwMDApO1xuICAgIHRoaXMuc3RhcnRDb3VudERvd24oc2Vjb25kc1JlbWFpbmluZyk7XG4gIH1cblxuICBwcmVzZW50YXRpb25SdW5uaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmludGVydmFsVGltZXIgJiYgdGhpcy5pbnRlcnZhbFRpbWVyLnN0YXRlID09PSAxICYmIHRoaXMuc2xpZGVJblJhbmdlKCk7XG4gIH1cblxuICBwcmVzZW50YXRpb25QYXVzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJ2YWxUaW1lciAmJiB0aGlzLmludGVydmFsVGltZXIuc3RhdGUgPT09IDIgJiYgdGhpcy5zbGlkZUluUmFuZ2UoKTtcbiAgfVxuXG4gIHN0YXJ0UHJlc2VudGF0aW9uKCkge1xuICAgIHRoaXMuc2hvd1RodW1ibmFpbHMgPSBmYWxzZTtcbiAgICB0aGlzLm9wZW5GdWxsU2NyZWVuKCk7XG4gICAgdGhpcy5ydW5QcmVzZW50YXRpb24gPSAhdGhpcy5ydW5QcmVzZW50YXRpb247XG5cbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHNjcmVlbi5oZWlnaHQgPT09IHdpbmRvdy5pbm5lckhlaWdodCAmJiBzY3JlZW4ud2lkdGggPT09IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICB0aGlzLnpvb21TZXJ2aWNlLmNoYW5nZVpvb20od2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQgPCAxLjcgJiYgdGhpcy5fcGFnZVdpZHRoIC8gdGhpcy5fcGFnZUhlaWdodCA+IDEuN1xuICAgICAgICA/IHRoaXMuZ2V0Rml0VG9XaWR0aCgpIDogdGhpcy5nZXRGaXRUb0hlaWdodCgpKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgIH1cbiAgICB9LCA1MCk7XG4gIH1cblxuICBvcGVuRnVsbFNjcmVlbigpIHtcbiAgICBjb25zdCBkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50ICYge1xuICAgICAgbW96UmVxdWVzdEZ1bGxTY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgICAgIHdlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gICAgICBtc1JlcXVlc3RGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gICAgfTtcblxuICAgIGlmIChkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zLnJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICBkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zLnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgfSBlbHNlIGlmIChkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zLm1velJlcXVlc3RGdWxsU2NyZWVuKSB7IC8qIEZpcmVmb3ggKi9cbiAgICAgIGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHsgLyogQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXG4gICAgICBkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgfSBlbHNlIGlmIChkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zLm1zUmVxdWVzdEZ1bGxzY3JlZW4pIHsgLyogSUUvRWRnZSAqL1xuICAgICAgZG9jRWxtV2l0aEJyb3dzZXJzRnVsbFNjcmVlbkZ1bmN0aW9ucy5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgfVxuICAgIHRoaXMuaXNGdWxsU2NyZWVuID0gdHJ1ZTtcbiAgfVxuXG4gIGNsb3NlRnVsbFNjcmVlbihieUJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlKXtcbiAgICBpZiAoYnlCdXR0b24pIHtcbiAgICAgIGNvbnN0IGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMgPSBkb2N1bWVudCBhcyBEb2N1bWVudCAmIHtcbiAgICAgICAgbW96Q2FuY2VsRnVsbFNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICAgICAgICB3ZWJraXRFeGl0RnVsbHNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICAgICAgICBtc0V4aXRGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gICAgICB9O1xuICAgICAgaWYgKGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMuZXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zLm1vekNhbmNlbEZ1bGxTY3JlZW4pIHsgLyogRmlyZWZveCAqL1xuICAgICAgICBkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zLm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy53ZWJraXRFeGl0RnVsbHNjcmVlbikgeyAvKiBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cbiAgICAgICAgZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zLm1zRXhpdEZ1bGxzY3JlZW4pIHsgLyogSUUvRWRnZSAqL1xuICAgICAgICBkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zLm1zRXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbnRlcnZhbFRpbWVyKSB7XG4gICAgICB0aGlzLmludGVydmFsVGltZXIuc3RvcCgpO1xuICAgIH1cblxuICAgIHRoaXMuaXNGdWxsU2NyZWVuID0gZmFsc2U7XG4gICAgdGhpcy5ydW5QcmVzZW50YXRpb24gPSBmYWxzZTtcbiAgICB0aGlzLnNob3dUaHVtYm5haWxzID0gdHJ1ZTtcbiAgICB0aGlzLmludGVydmFsVGltZSA9IDA7XG4gICAgdGhpcy5zdGFydENvdW50RG93bigwKTtcbiAgICB0aGlzLnJlZnJlc2hab29tKCk7XG4gIH1cblxuICBzZWxlY3RMYW5ndWFnZShzZWxlY3RlZExhbmd1YWdlOiBPcHRpb24pIHtcbiAgICB0aGlzLnNlbGVjdGVkTGFuZ3VhZ2UgPSBzZWxlY3RlZExhbmd1YWdlO1xuICAgIHRoaXMudHJhbnNsYXRlLnVzZShzZWxlY3RlZExhbmd1YWdlLnZhbHVlKTtcbiAgfVxufVxuIl19