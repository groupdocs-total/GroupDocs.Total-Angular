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
                /** @type {?} */
                var preloadPageCount = _this.getPreloadPageCount();
                /** @type {?} */
                var countPages = file.pages ? file.pages.length : 0;
                if (preloadPageCount > 0) {
                    _this.file.thumbnails = file.pages.slice();
                    _this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                }
                else {
                    _this.preloadPages(1, countPages);
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3ZpZXdlci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQVUsWUFBWSxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBR0wsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixlQUFlLEVBQ2Ysa0JBQWtCLEVBRWxCLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLGVBQWUsRUFHZixZQUFZLEVBQ1osa0JBQWtCLEVBQ25CLE1BQU0sK0NBQStDLENBQUM7QUFFdkQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGFBQWEsRUFBUyxNQUFNLCtDQUErQyxDQUFDO0FBRXBGLE9BQU8sRUFBQyxTQUFTLEVBQVcsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFckQ7SUFrRUUsNEJBQW9CLGNBQTZCLEVBQzdCLGFBQTJCLEVBQ25DLGFBQWtDLEVBQ2xDLGtCQUFzQyxFQUM5QixnQkFBaUMsRUFDekMsV0FBd0IsRUFDeEIsa0JBQXNDLEVBQzlCLG1CQUF1QyxFQUMvQyxlQUFnQyxFQUN4QixjQUE2QixFQUM3QixtQkFBdUMsRUFDdkMsR0FBc0IsRUFDdkIsU0FBMkI7UUFaOUMsaUJBd0RDO1FBeERtQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUczQixxQkFBZ0IsR0FB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bUNBQWlCOztJQUNqQixtQ0FBd0I7O0lBQ3hCLGtDQUFzQjs7SUFDdEIsMENBQTJCOztJQUMzQix3Q0FBZTs7SUFDZiw0Q0FBc0I7O0lBQ3RCLDRDQUF1Qjs7SUFDdkIseUNBQWtDOztJQUNsQyw4Q0FBNEM7O0lBQzVDLHdDQUFtQjs7SUFDbkIsdUNBQW1COztJQUNuQix1Q0FBbUI7O0lBQ25CLDRDQUE4Qjs7SUFFOUIsbUNBQVk7O0lBQ1osd0NBQW1COztJQUNuQix5Q0FBb0I7O0lBQ3BCLHFDQUFROztJQUNSLDBDQUFhOztJQUNiLDBDQUFxQjs7SUFDckIsMkNBQTZCOztJQUM3QiwrQ0FBMEI7O0lBQzFCLHlDQUFvQjs7SUFDcEIsNENBQXVCOztJQUN2Qix3Q0FBbUI7O0lBRW5CLHVDQUFrQjs7SUFDbEIsMkNBQXNCOztJQUN0QixzQ0FBaUI7O0lBQ2pCLCtDQUFnQzs7SUFDaEMsZ0RBQTJCOztJQUMzQiw2Q0FBeUI7O0lBQ3pCLDBDQUFzQjs7SUFDdEIsNkNBQXdCOztJQUN4QiwyQ0FBc0I7O0lBRXRCLGdEQUE2Qjs7SUFDN0IsOENBQXlCOztJQUV6QixtRUFJRTs7SUFFRiwwREFJRTs7SUFFRix5Q0FBeUI7Ozs7O0lBU2IsNENBQXFDOzs7OztJQUNyQywyQ0FBbUM7Ozs7O0lBR25DLDhDQUF5Qzs7Ozs7SUFHekMsaURBQStDOzs7OztJQUUvQyw0Q0FBcUM7Ozs7O0lBQ3JDLGlEQUErQzs7Ozs7SUFDL0MsaUNBQThCOztJQUM5Qix1Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgT25Jbml0LCBIb3N0TGlzdGVuZXIsIENoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Vmlld2VyU2VydmljZX0gZnJvbSBcIi4vdmlld2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7XG4gIEZpbGVEZXNjcmlwdGlvbixcbiAgRmlsZU1vZGVsLFxuICBNb2RhbFNlcnZpY2UsXG4gIFVwbG9hZEZpbGVzU2VydmljZSxcbiAgTmF2aWdhdGVTZXJ2aWNlLFxuICBQYWdlUHJlbG9hZFNlcnZpY2UsXG4gIFBhZ2VNb2RlbCxcbiAgWm9vbVNlcnZpY2UsXG4gIFJlbmRlclByaW50U2VydmljZSxcbiAgRmlsZVV0aWwsXG4gIFBhc3N3b3JkU2VydmljZSxcbiAgRmlsZUNyZWRlbnRpYWxzLFxuICBUeXBlZEZpbGVDcmVkZW50aWFscyxcbiAgQ29tbW9uTW9kYWxzLFxuICBMb2FkaW5nTWFza1NlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtWaWV3ZXJDb25maWd9IGZyb20gXCIuL3ZpZXdlci1jb25maWdcIjtcbmltcG9ydCB7Vmlld2VyQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vdmlld2VyLWNvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQge1dpbmRvd1NlcnZpY2UsIE9wdGlvbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtDb25zdGFudHMsIExhbmd1YWdlfSBmcm9tICcuL3ZpZXdlci5jb25zdGFudHMnO1xuaW1wb3J0IHtJbnRlcnZhbFRpbWVyfSBmcm9tICcuL2ludGVydmFsLXRpbWVyJztcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXZpZXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3ZXItYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmlld2VyLWFwcC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlckFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHRpdGxlID0gJ3ZpZXdlcic7XG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xuICBmaWxlOiBGaWxlRGVzY3JpcHRpb247XG4gIHZpZXdlckNvbmZpZzogVmlld2VyQ29uZmlnO1xuICBjb3VudFBhZ2VzID0gMDtcbiAgZm9ybWF0RGlzYWJsZWQgPSB0cnVlO1xuICBzaG93VGh1bWJuYWlscyA9IGZhbHNlO1xuICBjcmVkZW50aWFsczogVHlwZWRGaWxlQ3JlZGVudGlhbHM7XG4gIGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XG4gIHNob3dTZWFyY2ggPSBmYWxzZTtcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIHBhZ2VzVG9QcmVsb2FkOiBudW1iZXJbXSA9IFtdO1xuXG4gIF96b29tID0gMTAwO1xuICBfcGFnZVdpZHRoOiBudW1iZXI7XG4gIF9wYWdlSGVpZ2h0OiBudW1iZXI7XG4gIG9wdGlvbnM7XG4gIHRpbWVyT3B0aW9ucztcbiAgaW50ZXJ2YWxUaW1lOiBudW1iZXI7XG4gIGludGVydmFsVGltZXI6IEludGVydmFsVGltZXI7XG4gIGNvdW50RG93bkludGVydmFsOiBudW1iZXI7XG4gIHNlY29uZHNMZWZ0OiBudW1iZXI7XG4gIGZpbGVXYXNEcm9wcGVkID0gZmFsc2U7XG4gIGZvcm1hdEljb246IHN0cmluZztcblxuICBmaWxlUGFyYW06IHN0cmluZztcbiAgZmlsZVR5cGVQYXJhbTogc3RyaW5nO1xuICB1cmxQYXJhbTogc3RyaW5nO1xuICBxdWVyeVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBzZWxlY3RlZFBhZ2VOdW1iZXI6IG51bWJlcjtcbiAgcnVuUHJlc2VudGF0aW9uOiBib29sZWFuO1xuICBpc0Z1bGxTY3JlZW46IGJvb2xlYW47XG4gIHN0YXJ0U2Nyb2xsVGltZTogbnVtYmVyO1xuICBlbmRTY3JvbGxUaW1lOiBudW1iZXI7XG5cbiAgc3VwcG9ydGVkTGFuZ3VhZ2VzOiBPcHRpb25bXTtcbiAgc2VsZWN0ZWRMYW5ndWFnZTogT3B0aW9uO1xuXG4gIGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQgJiB7XG4gICAgbW96UmVxdWVzdEZ1bGxTY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgICB3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICAgIG1zUmVxdWVzdEZ1bGxzY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgfTtcblxuICBkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zID0gZG9jdW1lbnQgYXMgRG9jdW1lbnQgJiB7XG4gICAgbW96Q2FuY2VsRnVsbFNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHdlYmtpdEV4aXRGdWxsc2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gICAgbXNFeGl0RnVsbHNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICB9O1xuXG4gIHpvb21TZXJ2aWNlOiBab29tU2VydmljZTtcblxuICBASG9zdExpc3RlbmVyKFwiZG9jdW1lbnQ6ZnVsbHNjcmVlbmNoYW5nZVwiLCBbXSlcbiAgZnVsbFNjcmVlbigpIHtcbiAgICBpZiAoIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XG4gICAgICB0aGlzLmNsb3NlRnVsbFNjcmVlbigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdlclNlcnZpY2U6IFZpZXdlclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgICBjb25maWdTZXJ2aWNlOiBWaWV3ZXJDb25maWdTZXJ2aWNlLFxuICAgICAgICAgICAgICB1cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHpvb21TZXJ2aWNlOiBab29tU2VydmljZSxcbiAgICAgICAgICAgICAgcGFnZVByZWxvYWRTZXJ2aWNlOiBQYWdlUHJlbG9hZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlclByaW50U2VydmljZTogUmVuZGVyUHJpbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbG9hZGluZ01hc2tTZXJ2aWNlOiBMb2FkaW5nTWFza1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHVibGljIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkge1xuXG4gICAgdGhpcy56b29tU2VydmljZSA9IHpvb21TZXJ2aWNlO1xuICAgIHRoaXMuc3RhcnRTY3JvbGxUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLmVuZFNjcm9sbFRpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgY29uZmlnU2VydmljZS51cGRhdGVkQ29uZmlnLnN1YnNjcmliZSgodmlld2VyQ29uZmlnKSA9PiB7XG4gICAgICB0aGlzLnZpZXdlckNvbmZpZyA9IHZpZXdlckNvbmZpZztcbiAgICB9KTtcblxuICAgIHVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xuICAgICAgaWYgKHVwbG9hZHMpIHtcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHVwbG9hZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oaSksICcnLCB0aGlzLnZpZXdlckNvbmZpZy5yZXdyaXRlKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID8gdGhpcy5zZWxlY3RGaWxlKG9iai5ndWlkLCAnJywgJycsICcnKSA6IHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGFnZVByZWxvYWRTZXJ2aWNlLmNoZWNrUHJlbG9hZC5zdWJzY3JpYmUoKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgICAgaWYodGhpcy5maWxlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXdlckNvbmZpZy5wcmVsb2FkUGFnZUNvdW50ICE9PSAwKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IHBhZ2U7IGkgPCBwYWdlICsgMjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDAgJiYgaSA8PSB0aGlzLmZpbGUucGFnZXMubGVuZ3RoICYmICF0aGlzLmZpbGUucGFnZXNbaSAtIDFdLmRhdGEpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcmVsb2FkUGFnZXMoaSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYXNzd29yZFNlcnZpY2UucGFzc0NoYW5nZS5zdWJzY3JpYmUoKHBhc3M6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuY3JlZGVudGlhbHMuZ3VpZCwgcGFzcywgQ29tbW9uTW9kYWxzLlBhc3N3b3JkUmVxdWlyZWQsIHRoaXMuY3JlZGVudGlhbHMuZmlsZVR5cGUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICAgIGlmICghdGhpcy5ydW5QcmVzZW50YXRpb24pIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMudmlld2VyQ29uZmlnLmRlZmF1bHREb2N1bWVudCAhPT0gJycgJiYgdGhpcy52aWV3ZXJDb25maWcuZGVmYXVsdERvY3VtZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy52aWV3ZXJDb25maWcuZGVmYXVsdERvY3VtZW50LCAnJywgJycsICcnKTtcbiAgICAgIHRoaXMuc2VsZWN0Q3VycmVudE9yRmlyc3RQYWdlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdExhbmd1YWdlID0gdGhpcy5kZWZhdWx0TGFuZ3VhZ2VDb25maWc7XG4gICAgY29uc3Qgc3VwcG9ydGVkTGFuZ3VhZ2VzID0gdGhpcy5zdXBwb3J0ZWRMYW5ndWFnZXNDb25maWdcbiAgICAgIC5tYXAobGFuZ3VhZ2UgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWU6IGxhbmd1YWdlLm5hbWUsXG4gICAgICAgICAgdmFsdWU6IGxhbmd1YWdlLmNvZGUsXG4gICAgICAgICAgc2VwYXJhdG9yOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICB0aGlzLnN1cHBvcnRlZExhbmd1YWdlcyA9IHN1cHBvcnRlZExhbmd1YWdlcztcbiAgICB0aGlzLnNlbGVjdGVkTGFuZ3VhZ2UgPSBzdXBwb3J0ZWRMYW5ndWFnZXMuZmluZChsYW5nID0+IGxhbmcudmFsdWUgPT09IGRlZmF1bHRMYW5ndWFnZS5jb2RlKTtcbiAgICB0aGlzLnRyYW5zbGF0ZS51c2UoZGVmYXVsdExhbmd1YWdlLmNvZGUpO1xuXG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgIGlmIChxdWVyeVN0cmluZykge1xuICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XG5cbiAgICAgIHRoaXMuZmlsZVBhcmFtID0gdXJsUGFyYW1zLmdldCgnZmlsZScpO1xuICAgICAgdGhpcy5maWxlVHlwZVBhcmFtID0gdXJsUGFyYW1zLmdldCgnZmlsZVR5cGUnKTtcbiAgICAgIGlmKHRoaXMuZmlsZVBhcmFtKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuZmlsZVBhcmFtLCAnJywgJycsIHRoaXMuZmlsZVR5cGVQYXJhbSk7XG4gICAgICAgIHRoaXMuc2VsZWN0Q3VycmVudE9yRmlyc3RQYWdlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cmxQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ3VybCcpO1xuICAgICAgaWYodGhpcy51cmxQYXJhbSkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMudXBsb2FkKHRoaXMudXJsUGFyYW0pO1xuICAgICAgICB0aGlzLnNlbGVjdEN1cnJlbnRPckZpcnN0UGFnZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9sb2FkaW5nTWFza1NlcnZpY2VcbiAgICAub25Mb2FkaW5nQ2hhbmdlZFxuICAgIC5zdWJzY3JpYmUoKGxvYWRpbmc6IGJvb2xlYW4pID0+IHRoaXMuaXNMb2FkaW5nID0gbG9hZGluZyk7XG5cbiAgICB0aGlzLnJlZnJlc2hab29tKCk7XG4gIH1cblxuICBnZXQgcmV3cml0ZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5yZXdyaXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB6b29tQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnpvb20gOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHBhZ2VTZWxlY3RvckNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5wYWdlU2VsZWN0b3IgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHNlYXJjaENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5zZWFyY2ggOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHRodW1ibmFpbHNDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcudGh1bWJuYWlscyA6IHRydWU7XG4gIH1cblxuICBnZXQgcm90YXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnJvdGF0ZSA6IHRydWU7XG4gIH1cblxuICBnZXQgZG93bmxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcuZG93bmxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy51cGxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHByaW50Q29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnByaW50IDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBicm93c2VDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcuYnJvd3NlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBodG1sTW9kZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5odG1sTW9kZSA6IHRydWU7XG4gIH1cblxuICBnZXQgc2F2ZVJvdGF0ZVN0YXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnNhdmVSb3RhdGVTdGF0ZSA6IHRydWU7XG4gIH1cblxuICBnZXQgZW5hYmxlUmlnaHRDbGlja0NvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5lbmFibGVSaWdodENsaWNrIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBjdXJyZW50UGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2U7XG4gIH1cblxuICBnZXQgc2hvd0xhbmd1YWdlTWVudSgpOiBib29sZWFuIHtcbiAgICBpZih0aGlzLnZpZXdlckNvbmZpZyAhPT0gdW5kZWZpbmVkICYmIHRoaXMudmlld2VyQ29uZmlnLnNob3dMYW5ndWFnZU1lbnUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnLnNob3dMYW5ndWFnZU1lbnU7XG4gICAgfVxuICAgIHJldHVybiBDb25zdGFudHMuZGVmYXVsdFNob3dMYW5ndWFnZU1lbnU7XG4gIH1cblxuICBnZXQgc3VwcG9ydGVkTGFuZ3VhZ2VzQ29uZmlnKCk6IExhbmd1YWdlW10ge1xuICAgIGlmKHRoaXMudmlld2VyQ29uZmlnICYmIHRoaXMudmlld2VyQ29uZmlnLnN1cHBvcnRlZExhbmd1YWdlcykge1xuICAgICAgY29uc3Qgc3VwcG9ydGVkTGFuZ3VhZ2VzID0gdGhpcy52aWV3ZXJDb25maWcuc3VwcG9ydGVkTGFuZ3VhZ2VzO1xuICAgICAgcmV0dXJuIENvbnN0YW50cy5kZWZhdWx0U3VwcG9ydGVkTGFuZ3VhZ2VzXG4gICAgICAgIC5maWx0ZXIobGFuZyA9PlxuICAgICAgICAgIHN1cHBvcnRlZExhbmd1YWdlcy5pbmRleE9mKGxhbmcuY29kZSkgIT09IC0xIHx8IHN1cHBvcnRlZExhbmd1YWdlcy5pbmRleE9mKGxhbmcuYWx0ZXJuYXRlQ29kZSkgIT09IC0xKTtcbiAgICB9XG5cbiAgICByZXR1cm4gQ29uc3RhbnRzLmRlZmF1bHRTdXBwb3J0ZWRMYW5ndWFnZXM7XG4gIH1cblxuICBnZXQgZGVmYXVsdExhbmd1YWdlQ29uZmlnKCk6IExhbmd1YWdlIHtcbiAgICBpZih0aGlzLnZpZXdlckNvbmZpZyAmJiB0aGlzLnZpZXdlckNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2UpIHtcbiAgICAgIHJldHVybiB0aGlzLnN1cHBvcnRlZExhbmd1YWdlc0NvbmZpZ1xuICAgICAgICAuZmluZChsYW5nID0+IGxhbmcuaXModGhpcy52aWV3ZXJDb25maWcuZGVmYXVsdExhbmd1YWdlKSlcbiAgICB9XG5cbiAgICBjb25zdCBwYXRobmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICBpZiAocGF0aG5hbWUpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKTtcbiAgICAgIGZvciAoY29uc3QgcGFydCBvZiBwYXJ0cykge1xuICAgICAgICBpZihwYXJ0ID09PSBcIlwiKVxuICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IGxhbmdPck5vdGhpbmcgPSB0aGlzLnN1cHBvcnRlZExhbmd1YWdlc0NvbmZpZ1xuICAgICAgICAgIC5maWx0ZXIoc3VwcG9ydGVkID0+IHN1cHBvcnRlZC5pcyhwYXJ0KSlcbiAgICAgICAgICAuc2hpZnQoKTtcblxuICAgICAgICBpZihsYW5nT3JOb3RoaW5nKVxuICAgICAgICAgIHJldHVybiBsYW5nT3JOb3RoaW5nO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICBpZiAocXVlcnlTdHJpbmcpIHtcbiAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xuICAgICAgY29uc3QgY2FuZGlkYXRlID0gdXJsUGFyYW1zLmdldCgnbGFuZycpO1xuICAgICAgaWYoY2FuZGlkYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1cHBvcnRlZExhbmd1YWdlc0NvbmZpZ1xuICAgICAgICAgIC5maW5kKGxhbmcgPT4gbGFuZy5pcyhjYW5kaWRhdGUpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBDb25zdGFudHMuZGVmYXVsdExhbmd1YWdlO1xuICB9XG5cbiAgaWZQcmVzZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZSA/IEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5mb3JtYXQgPT09IFwiTWljcm9zb2Z0IFBvd2VyUG9pbnRcIiA6IGZhbHNlO1xuICB9XG5cbiAgaWZFeGNlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlID8gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmZvcm1hdCA9PT0gXCJNaWNyb3NvZnQgRXhjZWxcIiA6IGZhbHNlO1xuICB9XG5cbiAgaWZJbWFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlID8gdGhpcy5mb3JtYXRJY29uID09PSBcImZpbGUtaW1hZ2VcIiA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0RmlsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZS5ndWlkLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgfVxuXG4gIG9wZW5Nb2RhbChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oaWQpO1xuICB9XG5cbiAgY2xvc2VNb2RhbChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKGlkKTtcbiAgfVxuXG4gIHNlbGVjdERpcigkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRmlsZU1vZGVsW10pID0+IHRoaXMuZmlsZXMgPSBmaWxlcyB8fCBbXSk7XG4gIH1cblxuICBzZWxlY3RDdXJyZW50T3JGaXJzdFBhZ2UoKSB7XG4gICAgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgPSB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgIT09IDAgPyB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgOiAxO1xuICB9XG5cbiAgZ2V0UHJlbG9hZFBhZ2VDb3VudCgpIHtcbiAgICBjb25zdCBtaW5QcmVzZW50YXRpb25QYWdlc1RvUHJlbG9hZCA9IDM7XG4gICAgY29uc3QgcHJlbG9hZFBhZ2VDb3VudCA9ICF0aGlzLmlmUHJlc2VudGF0aW9uKClcbiAgICAgID8gdGhpcy52aWV3ZXJDb25maWcucHJlbG9hZFBhZ2VDb3VudFxuICAgICAgOiB0aGlzLnZpZXdlckNvbmZpZy5wcmVsb2FkUGFnZUNvdW50ICE9PSAwICYmIHRoaXMudmlld2VyQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgPCBtaW5QcmVzZW50YXRpb25QYWdlc1RvUHJlbG9hZFxuICAgICAgICA/IG1pblByZXNlbnRhdGlvblBhZ2VzVG9QcmVsb2FkXG4gICAgICAgIDogdGhpcy52aWV3ZXJDb25maWcucHJlbG9hZFBhZ2VDb3VudDtcblxuICAgIHJldHVybiBwcmVsb2FkUGFnZUNvdW50O1xuICB9XG5cbiAgc2VsZWN0RmlsZSgkZXZlbnQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgbW9kYWxJZDogc3RyaW5nLCBmaWxlVHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IHtndWlkOiAkZXZlbnQsIGZpbGVUeXBlOiBmaWxlVHlwZSwgcGFzc3dvcmQ6IHBhc3N3b3JkfTtcbiAgICB0aGlzLmZpbGUgPSBudWxsO1xuICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UubG9hZEZpbGUodGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKChmaWxlOiBGaWxlRGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICAgICAgdGhpcy5mb3JtYXREaXNhYmxlZCA9ICF0aGlzLmZpbGU7XG4gICAgICAgIHRoaXMucGFnZXNUb1ByZWxvYWQgPSBbXTtcbiAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICB0aGlzLmNyZWRlbnRpYWxzLmZpbGVUeXBlID0gZmlsZS5maWxlVHlwZTtcbiAgICAgICAgICB0aGlzLmZvcm1hdEljb24gPSB0aGlzLmZpbGUgPyBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkuaWNvbiA6IG51bGw7XG4gICAgICAgICAgaWYgKGZpbGUucGFnZXMgJiYgZmlsZS5wYWdlc1swXSkge1xuICAgICAgICAgICAgdGhpcy5fcGFnZUhlaWdodCA9IGZpbGUucGFnZXNbMF0uaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5fcGFnZVdpZHRoID0gZmlsZS5wYWdlc1swXS53aWR0aDtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuem9vbU9wdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMudGltZXJPcHRpb25zID0gdGhpcy5nZXRUaW1lck9wdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFpvb20oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwcmVsb2FkUGFnZUNvdW50ID0gdGhpcy5nZXRQcmVsb2FkUGFnZUNvdW50KCk7XG4gICAgICAgICAgY29uc3QgY291bnRQYWdlcyA9IGZpbGUucGFnZXMgPyBmaWxlLnBhZ2VzLmxlbmd0aCA6IDA7XG5cbiAgICAgICAgICBpZiAocHJlbG9hZFBhZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlsZS50aHVtYm5haWxzID0gZmlsZS5wYWdlcy5zbGljZSgpO1xuICAgICAgICAgICAgdGhpcy5wcmVsb2FkUGFnZXMoMSwgcHJlbG9hZFBhZ2VDb3VudCA+IGNvdW50UGFnZXMgPyBjb3VudFBhZ2VzIDogcHJlbG9hZFBhZ2VDb3VudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKDEsIGNvdW50UGFnZXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyID0gMTtcbiAgICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY291bnRQYWdlcyA9IGNvdW50UGFnZXM7XG4gICAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXI7XG4gICAgICAgICAgdGhpcy5jb3VudFBhZ2VzID0gY291bnRQYWdlcztcbiAgICAgICAgICB0aGlzLnNob3dUaHVtYm5haWxzID0gdGhpcy5pZlByZXNlbnRhdGlvbigpO1xuICAgICAgICAgIHRoaXMucnVuUHJlc2VudGF0aW9uID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfVxuICAgICk7XG4gICAgaWYgKG1vZGFsSWQpIHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShtb2RhbElkKTtcbiAgICB9XG4gICAgdGhpcy5jbGVhckRhdGEoKTtcbiAgfVxuXG4gIHByZWxvYWRQYWdlcyhzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuICAgIGZvciAobGV0IHBhZ2VOdW1iZXIgPSBzdGFydDsgcGFnZU51bWJlciA8PSBlbmQ7IHBhZ2VOdW1iZXIrKykge1xuICAgICAgaWYodGhpcy5wYWdlc1RvUHJlbG9hZC5pbmRleE9mKHBhZ2VOdW1iZXIpICE9PSAtMSl7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnBhZ2VzVG9QcmVsb2FkLnB1c2gocGFnZU51bWJlcik7XG5cbiAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UubG9hZFBhZ2UodGhpcy5jcmVkZW50aWFscywgcGFnZU51bWJlcikuc3Vic2NyaWJlKChwYWdlOiBQYWdlTW9kZWwpID0+IHtcbiAgICAgICAgaWYocGFnZS5kYXRhKSB7XG4gICAgICAgICAgcGFnZS5kYXRhID0gcGFnZS5kYXRhLnJlcGxhY2UoLz5cXHMrPC9nLCAnPjwnKS5yZXBsYWNlKC9cXHVGRUZGL2csICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmlsZS5wYWdlc1twYWdlTnVtYmVyIC0gMV0uZGF0YSA9IHBhZ2UuZGF0YTtcblxuICAgICAgICBpZiAodGhpcy5maWxlLnRodW1ibmFpbHMpIHtcbiAgICAgICAgICB0aGlzLmZpbGUudGh1bWJuYWlsc1twYWdlTnVtYmVyIC0gMV0uZGF0YSA9IHBhZ2UuZGF0YTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmlld2VyU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgodXBsb2FkZWREb2N1bWVudDogYW55KSA9PiB7XG4gICAgICBpZiAodGhpcy5maWxlUGFyYW0gIT09ICcnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0RmlsZSh1cGxvYWRlZERvY3VtZW50Lmd1aWQsICcnLCAnJywgJycpO1xuICAgICAgICB0aGlzLmZpbGVQYXJhbSA9ICcnO1xuICAgICAgICB0aGlzLmZpbGVUeXBlUGFyYW0gPSAnJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZXh0UGFnZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBpZiAodGhpcy5pbnRlcnZhbFRpbWVyICYmIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSArIDEgPiB0aGlzLmNvdW50UGFnZXMpIHtcbiAgICAgIHRoaXMuaW50ZXJ2YWxUaW1lci5zdG9wKCk7XG4gICAgICB0aGlzLmludGVydmFsVGltZSA9IDA7XG4gICAgfVxuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5uZXh0UGFnZSgpO1xuICB9XG5cbiAgcHJldlBhZ2UoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLnByZXZQYWdlKCk7XG4gIH1cblxuICB0b0xhc3RQYWdlKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS50b0xhc3RQYWdlKCk7XG4gIH1cblxuICB0b0ZpcnN0UGFnZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UudG9GaXJzdFBhZ2UoKTtcbiAgfVxuXG4gIHpvb21JbigpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBpZiAodGhpcy5fem9vbSA8IDQ5MCkge1xuICAgICAgdGhpcy56b29tID0gdGhpcy5fem9vbSArIDEwO1xuICAgIH1cbiAgfVxuXG4gIHpvb21PdXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRoaXMuX3pvb20gPiAzMCkge1xuICAgICAgdGhpcy56b29tID0gdGhpcy5fem9vbSAtIDEwO1xuICAgIH1cbiAgfVxuXG4gIGZpbGVEcm9wcGVkKCRldmVudCl7XG4gICAgdGhpcy5maWxlV2FzRHJvcHBlZCA9ICRldmVudDtcbiAgfVxuXG4gIHByaXZhdGUgcHRUb1B4KHB0OiBudW1iZXIpIHtcbiAgICAvL3B0ICogOTYgLyA3MiA9IHB4LlxuICAgIHJldHVybiBwdCAqIDk2IC8gNzI7XG4gIH1cblxuICBnZXRGaXRUb1dpZHRoKCkge1xuICAgIC8vIEltYWdlcyBhbmQgRXhjZWwtcmVsYXRlZCBmaWxlcyByZWNlaXZpbmcgZGltZW5zaW9ucyBpbiBweCBmcm9tIHNlcnZlclxuICAgIGNvbnN0IHBhZ2VXaWR0aCA9IHRoaXMuZm9ybWF0SWNvbiAmJiAodGhpcy5pZkV4Y2VsKCkgfHwgdGhpcy5pZkltYWdlKCkpID8gdGhpcy5fcGFnZVdpZHRoIDogdGhpcy5wdFRvUHgodGhpcy5fcGFnZVdpZHRoKTtcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5mb3JtYXRJY29uICYmICh0aGlzLmlmRXhjZWwoKSB8fCB0aGlzLmlmSW1hZ2UoKSkgPyB0aGlzLl9wYWdlSGVpZ2h0IDogdGhpcy5wdFRvUHgodGhpcy5fcGFnZUhlaWdodCk7XG4gICAgY29uc3Qgb2Zmc2V0V2lkdGggPSBwYWdlV2lkdGggPyBwYWdlV2lkdGggOiB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIGNvbnN0IHByZXNlbnRhdGlvblRodW1ibmFpbHMgPSB0aGlzLmlzRGVza3RvcCAmJiB0aGlzLmlmUHJlc2VudGF0aW9uKCkgJiYgIXRoaXMucnVuUHJlc2VudGF0aW9uO1xuXG4gICAgaWYgKCF0aGlzLnJ1blByZXNlbnRhdGlvbikge1xuICAgICAgcmV0dXJuIChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoICYmIE1hdGgucm91bmQob2Zmc2V0V2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgPCAyKSA/IDIwMCAtIE1hdGgucm91bmQob2Zmc2V0V2lkdGggKiAxMDAgLyAocHJlc2VudGF0aW9uVGh1bWJuYWlscyA/IHdpbmRvdy5pbm5lcldpZHRoIC0gQ29uc3RhbnRzLnRodW1ibmFpbHNXaWR0aCAtIENvbnN0YW50cy5zY3JvbGxXaWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoKSlcbiAgICAgICAgOiAoIXRoaXMuaXNEZXNrdG9wID8gTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAqIDEwMCAvIG9mZnNldFdpZHRoKVxuICAgICAgICAgIDogTWF0aC5yb3VuZCgoKHByZXNlbnRhdGlvblRodW1ibmFpbHMgPyB3aW5kb3cuaW5uZXJXaWR0aCAtIENvbnN0YW50cy50aHVtYm5haWxzV2lkdGggLSBDb25zdGFudHMuc2Nyb2xsV2lkdGhcbiAgICAgICAgICAgIDogd2luZG93LmlubmVySGVpZ2h0KSAvIG9mZnNldFdpZHRoKSAqIDEwMCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lcldpZHRoICogMTAwIC8gb2Zmc2V0V2lkdGgpO1xuICAgIH1cbiAgfVxuXG4gIGdldEZpdFRvSGVpZ2h0KCkge1xuICAgIGNvbnN0IHBhZ2VXaWR0aCA9IHRoaXMuZm9ybWF0SWNvbiAmJiAodGhpcy5pZkV4Y2VsKCkgfHwgdGhpcy5pZkltYWdlKCkpID8gdGhpcy5fcGFnZVdpZHRoIDogdGhpcy5wdFRvUHgodGhpcy5fcGFnZVdpZHRoKTtcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5mb3JtYXRJY29uICYmICh0aGlzLmlmRXhjZWwoKSB8fCB0aGlzLmlmSW1hZ2UoKSkgPyB0aGlzLl9wYWdlSGVpZ2h0IDogdGhpcy5wdFRvUHgodGhpcy5fcGFnZUhlaWdodCk7XG4gICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gKHBhZ2VIZWlnaHQgPiBwYWdlV2lkdGgpID8gd2luZG93LmlubmVySGVpZ2h0IC0gMTAwIDogd2luZG93LmlubmVySGVpZ2h0ICsgMTAwO1xuICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IHBhZ2VIZWlnaHQgPyBwYWdlSGVpZ2h0IDogd2luZG93SGVpZ2h0O1xuXG4gICAgaWYgKCF0aGlzLmlmUHJlc2VudGF0aW9uKCkgJiYgISh0aGlzLmlmSW1hZ2UoKSkpIHtcbiAgICAgIHJldHVybiAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCkgPyBNYXRoLnJvdW5kKHdpbmRvd0hlaWdodCAqIDEwMCAvIG9mZnNldEhlaWdodCkgOiBNYXRoLnJvdW5kKG9mZnNldEhlaWdodCAqIDEwMCAvIHdpbmRvd0hlaWdodCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlmUHJlc2VudGF0aW9uKCkpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKCh3aW5kb3cuaW5uZXJIZWlnaHQgLSBDb25zdGFudHMudG9wYmFyV2lkdGgpICogMTAwIC8gKCF0aGlzLnJ1blByZXNlbnRhdGlvbiA/IG9mZnNldEhlaWdodCArIENvbnN0YW50cy5kb2N1bWVudE1hcmdpbiAqIDIgKyBDb25zdGFudHMuc2Nyb2xsV2lkdGhcbiAgICAgICAgOiBvZmZzZXRIZWlnaHQpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaWZJbWFnZSgpKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigod2luZG93LmlubmVySGVpZ2h0IC0gQ29uc3RhbnRzLnRvcGJhcldpZHRoKSAqIDEwMCAvIChvZmZzZXRIZWlnaHQgKyBDb25zdGFudHMuZG9jdW1lbnRNYXJnaW4gKiAyICsgQ29uc3RhbnRzLnNjcm9sbFdpZHRoKSk7XG4gICAgfVxuICB9XG5cbiAgem9vbU9wdGlvbnMoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldEZpdFRvV2lkdGgoKTtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEZpdFRvSGVpZ2h0KCk7XG4gICAgcmV0dXJuIHRoaXMuem9vbVNlcnZpY2Uuem9vbU9wdGlvbnMod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBnZXRUaW1lck9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIFt7dmFsdWU6IDAsIG5hbWU6ICdOb25lJywgc2VwYXJhdG9yOiBmYWxzZX0sXG4gICAgICB7dmFsdWU6IDUsIG5hbWU6ICc1IHNlYycsIHNlcGFyYXRvcjogZmFsc2V9LFxuICAgICAge3ZhbHVlOiAxMCwgbmFtZTogJzEwIHNlYycsIHNlcGFyYXRvcjogZmFsc2V9LFxuICAgICAge3ZhbHVlOiAxNSwgbmFtZTogJzE1IHNlYycsIHNlcGFyYXRvcjogZmFsc2V9LFxuICAgICAge3ZhbHVlOiAzMCwgbmFtZTogJzMwIHNlYycsIHNlcGFyYXRvcjogZmFsc2V9XTtcbiAgfVxuXG4gIHNldCB6b29tKHpvb20pIHtcbiAgICB0aGlzLl96b29tID0gem9vbTtcbiAgICB0aGlzLnpvb21TZXJ2aWNlLmNoYW5nZVpvb20odGhpcy5fem9vbSk7XG4gIH1cblxuICBnZXQgem9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fem9vbTtcbiAgfVxuXG4gIHNlbGVjdFpvb20oJGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnpvb20gPSAkZXZlbnQudmFsdWU7XG4gIH1cblxuICByb3RhdGUoZGVnOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlO1xuICAgIGNvbnN0IHBhZ2VNb2RlbCA9IHRoaXMuZmlsZS5wYWdlc1twYWdlTnVtYmVyIC0gMV07XG5cbiAgICBpZiAodGhpcy5zYXZlUm90YXRlU3RhdGVDb25maWcgJiYgdGhpcy5maWxlKSB7XG4gICAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLnJvdGF0ZSh0aGlzLmNyZWRlbnRpYWxzLCBkZWcsIHBhZ2VOdW1iZXIpLnN1YnNjcmliZSgocGFnZTogUGFnZU1vZGVsKSA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWREYXRhID0gcGFnZS5kYXRhLnJlcGxhY2UoLz5cXHMrPC9nLCc+PCcpXG4gICAgICAgICAgLnJlcGxhY2UoL1xcdUZFRkYvZyxcIlwiKTtcbiAgICAgICAgcGFnZS5kYXRhID0gdXBkYXRlZERhdGE7XG4gICAgICAgIHRoaXMuZmlsZS5wYWdlc1twYWdlTnVtYmVyIC0gMV0gPSBwYWdlO1xuXG4gICAgICAgIGlmICh0aGlzLmZpbGUgJiYgdGhpcy5maWxlLnBhZ2VzICYmIHBhZ2VNb2RlbCkge1xuICAgICAgICAgIGNvbnN0IGFuZ2xlID0gcGFnZU1vZGVsLmFuZ2xlICsgZGVnO1xuICAgICAgICAgIGlmIChhbmdsZSA+IDM2MCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBbmdsZShwYWdlTW9kZWwsIDkwKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGFuZ2xlIDwgLTM2MCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBbmdsZShwYWdlTW9kZWwsIC05MCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQW5nbGUocGFnZU1vZGVsLCBhbmdsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlQW5nbGUocGFnZTogUGFnZU1vZGVsLCBhbmdsZTogbnVtYmVyKSB7XG4gICAgcGFnZS5hbmdsZSA9IGFuZ2xlO1xuICB9XG5cbiAgZG93bmxvYWRGaWxlKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odGhpcy5fdmlld2VyU2VydmljZS5nZXREb3dubG9hZFVybCh0aGlzLmNyZWRlbnRpYWxzKSk7XG4gIH1cblxuICBwcmludEZpbGUoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG5cbiAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLmxvYWRQcmludFBkZih0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGRhdGE6IEJsb2IpID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlclByaW50U2VydmljZS5jaGFuZ2VCbG9iKGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlblRodW1ibmFpbHMoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG5cbiAgICBpZiAodGhpcy5zaG93VGh1bWJuYWlscykge1xuICAgICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucnVuUHJlc2VudGF0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRGF0YSgpIHtcbiAgICBpZiAoIXRoaXMuZmlsZSB8fCAhdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGFnZSBvZiB0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgIHBhZ2UuZGF0YSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25SaWdodENsaWNrKCkge1xuICAgIHJldHVybiB0aGlzLmVuYWJsZVJpZ2h0Q2xpY2tDb25maWc7XG4gIH1cblxuICBvcGVuU2VhcmNoKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIHRoaXMuc2hvd1NlYXJjaCA9ICF0aGlzLnNob3dTZWFyY2g7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hab29tKCkge1xuICAgIGlmICh0aGlzLmZpbGUpIHtcbiAgICAgIHRoaXMuZm9ybWF0SWNvbiA9IEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5pY29uO1xuICAgICAgdGhpcy56b29tID0gdGhpcy5fd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKSAmJiAhKHRoaXMuaWZJbWFnZSgpIHx8IHRoaXMuaWZQcmVzZW50YXRpb24oKSkgPyAxMDBcbiAgICAgICAgOiAodGhpcy5pZkltYWdlKCkgPyB0aGlzLmdldEZpdFRvSGVpZ2h0KClcbiAgICAgICAgICA6IHRoaXMuZ2V0Rml0VG9XaWR0aCgpKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RDdXJyZW50UGFnZShwYWdlTnVtYmVyKVxuICB7XG4gICAgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9IHBhZ2VOdW1iZXI7XG4gICAgaWYgKHRoaXMucnVuUHJlc2VudGF0aW9uICYmIHRoaXMuaW50ZXJ2YWxUaW1lID4gMCAmJiB0aGlzLmludGVydmFsVGltZXIuc3RhdGUgIT09IDMpIHtcbiAgICAgIHRoaXMucmVzZXRJbnRlcnZhbCgpO1xuICAgICAgaWYgKHRoaXMuc2xpZGVJblJhbmdlKCkpIHtcbiAgICAgICAgdGhpcy5zdGFydENvdW50RG93bih0aGlzLmludGVydmFsVGltZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZVdoZWVsVXAoKVxuICB7XG4gICAgdGhpcy5zdGFydFNjcm9sbFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGlmICh0aGlzLmlmUHJlc2VudGF0aW9uKCkgJiYgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgIT09IDEpIHtcbiAgICAgIGlmICh0aGlzLnN0YXJ0U2Nyb2xsVGltZSAtIHRoaXMuZW5kU2Nyb2xsVGltZSA+IDMwMCAmJiB0aGlzLnZlcnRTY3JvbGxFbmRlZCh0cnVlKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciA9IHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyIC0gMTtcbiAgICAgICAgdGhpcy5lbmRTY3JvbGxUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk1vdXNlV2hlZWxEb3duKClcbiAge1xuICAgIHRoaXMuc3RhcnRTY3JvbGxUaW1lID0gRGF0ZS5ub3coKTtcbiAgICBpZiAodGhpcy5pZlByZXNlbnRhdGlvbigpICYmIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyICE9PSB0aGlzLmZpbGUucGFnZXMubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5zdGFydFNjcm9sbFRpbWUgLSB0aGlzLmVuZFNjcm9sbFRpbWUgPiAzMDAgJiYgdGhpcy52ZXJ0U2Nyb2xsRW5kZWQoZmFsc2UpKSB7XG4gICAgICAgIHRoaXMuc3RhcnRTY3JvbGxUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKHRoaXMuZmlsZS5wYWdlc1t0aGlzLnNlbGVjdGVkUGFnZU51bWJlcl0gJiYgIXRoaXMuZmlsZS5wYWdlc1t0aGlzLnNlbGVjdGVkUGFnZU51bWJlcl0uZGF0YSkge1xuICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyLCB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciArIDEpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyID0gdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlTnVtYmVyID0gdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgKyAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5kU2Nyb2xsVGltZSA9IERhdGUubm93KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmVydFNjcm9sbEVuZGVkKG9uVG9wOiBib29sZWFuKSB7XG4gICAgY29uc3QgZ2REb2N1bWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dkLWRvY3VtZW50JylbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKG9uVG9wKVxuICAgIHtcbiAgICAgIHJldHVybiBnZERvY3VtZW50LnNjcm9sbFRvcCA9PT0gMDtcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gZ2REb2N1bWVudC5vZmZzZXRIZWlnaHQgKyBnZERvY3VtZW50LnNjcm9sbFRvcCA+PSBnZERvY3VtZW50LnNjcm9sbEhlaWdodDtcbiAgfVxuXG4gIHRvZ2dsZVRpbWVyKCRldmVudCl7XG4gICAgdGhpcy5pbnRlcnZhbFRpbWUgPSAkZXZlbnQudmFsdWU7XG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxUaW1lICE9PSAwKSB7XG4gICAgICBpZiAodGhpcy5pbnRlcnZhbFRpbWVyICYmIHRoaXMuaW50ZXJ2YWxUaW1lci5zdGF0ZSA9PT0gMSkge1xuICAgICAgICB0aGlzLmludGVydmFsVGltZXIuc3RvcCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGFydENvdW50RG93bih0aGlzLmludGVydmFsVGltZSk7XG4gICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwodGhpcy5pbnRlcnZhbFRpbWUpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgdGhpcy5pbnRlcnZhbFRpbWVyLnN0b3AoKTtcbiAgICB9XG4gIH1cblxuICBzaG93Q291bnREb3duKCkge1xuICAgIHJldHVybiB0aGlzLmludGVydmFsVGltZSA+IDAgJiYgKHRoaXMuc2xpZGVJblJhbmdlKCkpXG4gIH1cblxuICBzdGFydENvdW50RG93bihzZWNvbmRzOiBudW1iZXIsIHJlc2V0OiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuY291bnREb3duSW50ZXJ2YWwpO1xuICAgIGlmIChzZWNvbmRzID4gMCkge1xuICAgICAgdGhpcy5zZWNvbmRzTGVmdCA9IHNlY29uZHM7XG4gICAgICBzZWNvbmRzLS07XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNlY29uZHNMZWZ0ID0gc2Vjb25kcztcbiAgICAgICAgICBzZWNvbmRzLS07XG4gICAgICAgICAgaWYgKHNlY29uZHMgPT09IDApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgIH1cbiAgICAgIH0sIDEwMDApO1xuXG4gICAgICB0aGlzLmNvdW50RG93bkludGVydmFsID0gaW50ZXJ2YWw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGFydEludGVydmFsKGludGVydmFsVGltZTogbnVtYmVyKSB7XG4gICAgdGhpcy5pbnRlcnZhbFRpbWVyID0gbmV3IEludGVydmFsVGltZXIoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2xpZGVJblJhbmdlKCkpIHtcbiAgICAgICAgdGhpcy5uZXh0UGFnZSgpO1xuICAgICAgICBpZiAodGhpcy5zbGlkZUluUmFuZ2UoKSkge1xuICAgICAgICAgIHRoaXMuc3RhcnRDb3VudERvd24oaW50ZXJ2YWxUaW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICB0aGlzLmludGVydmFsVGltZXIuc3RvcCgpO1xuICAgICAgfVxuICAgIH0sIGludGVydmFsVGltZSAqIDEwMDApO1xuICB9XG5cbiAgcHJpdmF0ZSBzbGlkZUluUmFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSArIDEgPD0gdGhpcy5jb3VudFBhZ2VzO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldEludGVydmFsKCkge1xuICAgIHRoaXMuaW50ZXJ2YWxUaW1lci5zdG9wKCk7XG4gICAgdGhpcy5zdGFydEludGVydmFsKHRoaXMuaW50ZXJ2YWxUaW1lKTtcbiAgfVxuXG4gIHBhdXNlUHJlc2VudGluZygpIHtcbiAgICB0aGlzLmludGVydmFsVGltZXIucGF1c2UoKTtcbiAgICB0aGlzLnN0YXJ0Q291bnREb3duKDAsIHRydWUpO1xuICB9XG5cbiAgcmVzdW1lUHJlc2VudGluZygpIHtcbiAgICB0aGlzLmludGVydmFsVGltZXIucmVzdW1lKCk7XG4gICAgY29uc3Qgc2Vjb25kc1JlbWFpbmluZyA9IE1hdGgucm91bmQodGhpcy5pbnRlcnZhbFRpbWVyLnJlbWFpbmluZy8xMDAwKTtcbiAgICB0aGlzLnN0YXJ0Q291bnREb3duKHNlY29uZHNSZW1haW5pbmcpO1xuICB9XG5cbiAgcHJlc2VudGF0aW9uUnVubmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnZhbFRpbWVyICYmIHRoaXMuaW50ZXJ2YWxUaW1lci5zdGF0ZSA9PT0gMSAmJiB0aGlzLnNsaWRlSW5SYW5nZSgpO1xuICB9XG5cbiAgcHJlc2VudGF0aW9uUGF1c2VkKCkge1xuICAgIHJldHVybiB0aGlzLmludGVydmFsVGltZXIgJiYgdGhpcy5pbnRlcnZhbFRpbWVyLnN0YXRlID09PSAyICYmIHRoaXMuc2xpZGVJblJhbmdlKCk7XG4gIH1cblxuICBzdGFydFByZXNlbnRhdGlvbigpIHtcbiAgICB0aGlzLnNob3dUaHVtYm5haWxzID0gZmFsc2U7XG4gICAgdGhpcy5vcGVuRnVsbFNjcmVlbigpO1xuICAgIHRoaXMucnVuUHJlc2VudGF0aW9uID0gIXRoaXMucnVuUHJlc2VudGF0aW9uO1xuXG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChzY3JlZW4uaGVpZ2h0ID09PSB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgc2NyZWVuLndpZHRoID09PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgdGhpcy56b29tU2VydmljZS5jaGFuZ2Vab29tKHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0IDwgMS43ICYmIHRoaXMuX3BhZ2VXaWR0aCAvIHRoaXMuX3BhZ2VIZWlnaHQgPiAxLjdcbiAgICAgICAgPyB0aGlzLmdldEZpdFRvV2lkdGgoKSA6IHRoaXMuZ2V0Rml0VG9IZWlnaHQoKSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICB9XG4gICAgfSwgNTApO1xuICB9XG5cbiAgb3BlbkZ1bGxTY3JlZW4oKSB7XG4gICAgY29uc3QgZG9jRWxtV2l0aEJyb3dzZXJzRnVsbFNjcmVlbkZ1bmN0aW9ucyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCBhcyBIVE1MRWxlbWVudCAmIHtcbiAgICAgIG1velJlcXVlc3RGdWxsU2NyZWVuKCk6IFByb21pc2U8dm9pZD47XG4gICAgICB3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICAgICAgbXNSZXF1ZXN0RnVsbHNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICAgIH07XG5cbiAgICBpZiAoZG9jRWxtV2l0aEJyb3dzZXJzRnVsbFNjcmVlbkZ1bmN0aW9ucy5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgZG9jRWxtV2l0aEJyb3dzZXJzRnVsbFNjcmVlbkZ1bmN0aW9ucy5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgIH0gZWxzZSBpZiAoZG9jRWxtV2l0aEJyb3dzZXJzRnVsbFNjcmVlbkZ1bmN0aW9ucy5tb3pSZXF1ZXN0RnVsbFNjcmVlbikgeyAvKiBGaXJlZm94ICovXG4gICAgICBkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gICAgfSBlbHNlIGlmIChkb2NFbG1XaXRoQnJvd3NlcnNGdWxsU2NyZWVuRnVuY3Rpb25zLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7IC8qIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xuICAgICAgZG9jRWxtV2l0aEJyb3dzZXJzRnVsbFNjcmVlbkZ1bmN0aW9ucy53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgIH0gZWxzZSBpZiAoZG9jRWxtV2l0aEJyb3dzZXJzRnVsbFNjcmVlbkZ1bmN0aW9ucy5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7IC8qIElFL0VkZ2UgKi9cbiAgICAgIGRvY0VsbVdpdGhCcm93c2Vyc0Z1bGxTY3JlZW5GdW5jdGlvbnMubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgIH1cbiAgICB0aGlzLmlzRnVsbFNjcmVlbiA9IHRydWU7XG4gIH1cblxuICBjbG9zZUZ1bGxTY3JlZW4oYnlCdXR0b246IGJvb2xlYW4gPSBmYWxzZSl7XG4gICAgaWYgKGJ5QnV0dG9uKSB7XG4gICAgICBjb25zdCBkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zID0gZG9jdW1lbnQgYXMgRG9jdW1lbnQgJiB7XG4gICAgICAgIG1vekNhbmNlbEZ1bGxTY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgICAgICAgd2Via2l0RXhpdEZ1bGxzY3JlZW4oKTogUHJvbWlzZTx2b2lkPjtcbiAgICAgICAgbXNFeGl0RnVsbHNjcmVlbigpOiBQcm9taXNlPHZvaWQ+O1xuICAgICAgfTtcbiAgICAgIGlmIChkb2NXaXRoQnJvd3NlcnNFeGl0RnVuY3Rpb25zLmV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgIGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7IC8qIEZpcmVmb3ggKi9cbiAgICAgICAgZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy5tb3pDYW5jZWxGdWxsU2NyZWVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHsgLyogQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXG4gICAgICAgIGRvY1dpdGhCcm93c2Vyc0V4aXRGdW5jdGlvbnMud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy5tc0V4aXRGdWxsc2NyZWVuKSB7IC8qIElFL0VkZ2UgKi9cbiAgICAgICAgZG9jV2l0aEJyb3dzZXJzRXhpdEZ1bmN0aW9ucy5tc0V4aXRGdWxsc2NyZWVuKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxUaW1lcikge1xuICAgICAgdGhpcy5pbnRlcnZhbFRpbWVyLnN0b3AoKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzRnVsbFNjcmVlbiA9IGZhbHNlO1xuICAgIHRoaXMucnVuUHJlc2VudGF0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IHRydWU7XG4gICAgdGhpcy5pbnRlcnZhbFRpbWUgPSAwO1xuICAgIHRoaXMuc3RhcnRDb3VudERvd24oMCk7XG4gICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xuICB9XG5cbiAgc2VsZWN0TGFuZ3VhZ2Uoc2VsZWN0ZWRMYW5ndWFnZTogT3B0aW9uKSB7XG4gICAgdGhpcy5zZWxlY3RlZExhbmd1YWdlID0gc2VsZWN0ZWRMYW5ndWFnZTtcbiAgICB0aGlzLnRyYW5zbGF0ZS51c2Uoc2VsZWN0ZWRMYW5ndWFnZS52YWx1ZSk7XG4gIH1cbn1cbiJdfQ==