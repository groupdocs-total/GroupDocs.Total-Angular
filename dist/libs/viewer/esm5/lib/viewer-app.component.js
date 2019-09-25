/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChildren, QueryList } from '@angular/core';
import { ViewerService } from "./viewer.service";
import { ModalService, UploadFilesService, NavigateService, PagePreloadService, ZoomService, RenderPrintService, FileUtil, PasswordService, CommonModals, LoadingMaskService } from "@groupdocs.examples.angular/common-components";
import { ViewerConfigService } from "./viewer-config.service";
import { WindowService } from "@groupdocs.examples.angular/common-components";
import * as Hammer from 'hammerjs';
var ViewerAppComponent = /** @class */ (function () {
    function ViewerAppComponent(_viewerService, _modalService, configService, uploadFilesService, _navigateService, _zoomService, pagePreloadService, _renderPrintService, passwordService, _windowService, _loadingMaskService) {
        var _this = this;
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
         * @param {?} w
         * @return {?}
         */
        function (w) {
            _this.isDesktop = _windowService.isDesktop();
            _this.refreshZoom();
        }));
    }
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
        this.docPanelComponent.changes.subscribe((/**
         * @param {?} comps
         * @return {?}
         */
        function (comps) {
            comps.toArray().forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var hammer = new Hammer(item.nativeElement);
                hammer.get('pinch').set({ enable: true });
            }));
        }));
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
        this._viewerService.loadFile(this.credentials).subscribe((/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            _this.file = file;
            _this.formatDisabled = !_this.file;
            if (file) {
                if (file.pages && file.pages[0]) {
                    _this._pageHeight = file.pages[0].height;
                    _this._pageWidth = file.pages[0].width;
                    _this.options = _this.zoomOptions();
                    _this.refreshZoom();
                }
                /** @type {?} */
                var preloadPageCount = _this.viewerConfig.preloadPageCount;
                /** @type {?} */
                var countPages = file.pages ? file.pages.length : 0;
                if (preloadPageCount > 0) {
                    _this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                }
                _this._navigateService.countPages = countPages;
                _this._navigateService.currentPage = 1;
                _this.countPages = countPages;
            }
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
            this_1._viewerService.loadPage(this_1.credentials, i).subscribe((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                _this.file.pages[i - 1] = page;
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
         * @return {?}
         */
        function () {
            _this.selectDir('');
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
     * @param {?} page
     * @return {?}
     */
    ViewerAppComponent.prototype.navigateToPage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        if (this.formatDisabled)
            return;
        this._navigateService.navigateTo(page);
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
     * @private
     * @return {?}
     */
    ViewerAppComponent.prototype.getFitToWidth = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pageWidth = this.ptToPx(this._pageWidth);
        /** @type {?} */
        var pageHeight = this.ptToPx(this._pageHeight);
        /** @type {?} */
        var offsetWidth = pageWidth ? pageWidth : window.innerWidth;
        return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / window.innerWidth) : Math.round(window.innerWidth * 100 / offsetWidth);
    };
    /**
     * @private
     * @return {?}
     */
    ViewerAppComponent.prototype.getFitToHeight = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pageWidth = this.ptToPx(this._pageWidth);
        /** @type {?} */
        var pageHeight = this.ptToPx(this._pageHeight);
        /** @type {?} */
        var windowHeight = (pageHeight > pageWidth) ? window.innerHeight - 100 : window.innerHeight + 100;
        /** @type {?} */
        var offsetHeight = pageHeight ? pageHeight : windowHeight;
        return (pageHeight > pageWidth) ? Math.round(windowHeight * 100 / offsetHeight) : Math.round(offsetHeight * 100 / windowHeight);
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
        return this._zoomService.zoomOptions(width, height);
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
            this._zoomService.changeZoom(this._zoom);
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
        if (this.saveRotateStateConfig && this.file) {
            this._viewerService.rotate(this.credentials, deg, pageNumber).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                var e_1, _a;
                try {
                    for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                        var page = data_1_1.value;
                        /** @type {?} */
                        var pageModel = _this.file.pages[page.pageNumber - 1];
                        if (_this.file && _this.file.pages && pageModel) {
                            _this.changeAngle(pageModel, page.angle);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }));
        }
        else {
            /** @type {?} */
            var pageModel = this.file.pages[pageNumber - 1];
            if (this.file && this.file.pages && pageModel) {
                /** @type {?} */
                var angle = pageModel.angle + deg;
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
        if (this.viewerConfig.preloadPageCount !== 0) {
            if (FileUtil.find(this.file.guid, false).format === "Portable Document Format") {
                this._viewerService.loadPrintPdf(this.credentials).subscribe((/**
                 * @param {?} blob
                 * @return {?}
                 */
                function (blob) {
                    /** @type {?} */
                    var file = new Blob([blob], { type: 'application/pdf' });
                    _this._renderPrintService.changeBlob(file);
                }));
            }
            else {
                this._viewerService.loadPrint(this.credentials).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    _this.file.pages = data.pages;
                    _this._renderPrintService.changePages(_this.file.pages);
                }));
            }
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
            this.showThumbnails = true;
        }
        else {
            this._viewerService.loadThumbnails(this.credentials).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.file.pages = data.pages;
                _this.showThumbnails = true;
            }));
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
     * @param {?} $event
     * @return {?}
     */
    ViewerAppComponent.prototype.onRightClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
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
     * @param {?} $event
     * @return {?}
     */
    ViewerAppComponent.prototype.onPinchIn = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.zoomOut();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ViewerAppComponent.prototype.onPinchOut = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.zoomIn();
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
        this.zoom = this._windowService.isDesktop() ? 100 : this.getFitToWidth();
    };
    ViewerAppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-viewer',
                    template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'viewer'\" icon=\"eye\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-select [disabled]=\"formatDisabled\" [options]=\"options\" (selected)=\"selectZoom($event)\"\n                 [showSelected]=\"{ name: zoom+'%', value : zoom}\" *ngIf=\"zoomConfig\" ></gd-select>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"\n                 *ngIf=\"zoomConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\"\n                 (click)=\"zoomOut()\" *ngIf=\"zoomConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-double-left'\" [tooltip]=\"'First Page'\"\n                 (click)=\"toFirstPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" [tooltip]=\"'Previous Page'\"\n                 (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <div class=\"current-page-number\" [ngClass]=\"{'active': !formatDisabled}\">{{currentPage}}/{{countPages}}</div>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" [tooltip]=\"'Next Page'\"\n                 (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-double-right'\" [tooltip]=\"'Last Page'\"\n                 (click)=\"toLastPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Rotate CCW'\" (click)=\"rotate(-90)\"\n                 *ngIf=\"rotateConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Rotate CW'\" (click)=\"rotate(90)\"\n                 *ngIf=\"rotateConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                 (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                 *ngIf=\"printConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search'\" [tooltip]=\"'Search'\" (click)=\"openSearch()\"\n                 *ngIf=\"searchConfig\" ></gd-button>\n      <gd-search (hidePanel)=\"showSearch = !$event\" *ngIf=\"showSearch\" ></gd-search>\n\n      <gd-button class=\"thumbnails-button\" [disabled]=\"formatDisabled\" [icon]=\"'th-large'\" [tooltip]=\"'Thumbnails'\"\n                 (click)=\"openThumbnails()\" *ngIf=\"thumbnailsConfig && isDesktop\"></gd-button>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"doc-panel\" *ngIf=\"file\" #docPanel (pinchin)=\"onPinchIn($event)\" (pinchout)=\"onPinchOut($event)\">\n    <gd-thumbnails *ngIf=\"showThumbnails\" [pages]=\"file.pages\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\"></gd-thumbnails>\n\n    <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"htmlModeConfig\"\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-document>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n    Or drop file here\n  </gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.current-page-number{margin-left:7px;font-size:14px;color:#959da5;width:37px;height:37px;line-height:37px;text-align:center}.current-page-number.active{color:#fff}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:flex;height:inherit}.thumbnails-button{position:absolute;right:3px}.gd-document{width:100%;height:100%}.top-panel{display:flex;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}::ng-deep .tools .button,::ng-deep .tools .nav-caret,::ng-deep .tools .selected-value{color:#fff!important}::ng-deep .tools .button.inactive,::ng-deep .tools .nav-caret.inactive,::ng-deep .tools .selected-value.inactive{color:#959da5!important}::ng-deep .tools .button{flex-flow:column}::ng-deep .tools .dropdown-menu .option{color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}::ng-deep .tools .select{width:65px;height:37px;margin-left:7px;line-height:37px;text-align:center}"]
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
        { type: LoadingMaskService }
    ]; };
    ViewerAppComponent.propDecorators = {
        docPanelComponent: [{ type: ViewChildren, args: ['docPanel',] }]
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
    ViewerAppComponent.prototype._zoom;
    /** @type {?} */
    ViewerAppComponent.prototype._pageWidth;
    /** @type {?} */
    ViewerAppComponent.prototype._pageHeight;
    /** @type {?} */
    ViewerAppComponent.prototype.options;
    /** @type {?} */
    ViewerAppComponent.prototype.docPanelComponent;
    /** @type {?} */
    ViewerAppComponent.prototype.fileWasDropped;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3ZpZXdlci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQWMsWUFBWSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUdMLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGtCQUFrQixFQUVsQixXQUFXLEVBRVgsa0JBQWtCLEVBQ2xCLFFBQVEsRUFDUixlQUFlLEVBQ0UsWUFBWSxFQUFFLGtCQUFrQixFQUNsRCxNQUFNLCtDQUErQyxDQUFDO0FBRXZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEtBQUssTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUVuQztJQTBCRSw0QkFBb0IsY0FBNkIsRUFDN0IsYUFBMkIsRUFDbkMsYUFBa0MsRUFDbEMsa0JBQXNDLEVBQzlCLGdCQUFpQyxFQUNqQyxZQUF5QixFQUNqQyxrQkFBc0MsRUFDOUIsbUJBQXVDLEVBQy9DLGVBQWdDLEVBQ3hCLGNBQTZCLEVBQzdCLG1CQUF1QztRQVYzRCxpQkE4Q0M7UUE5Q21CLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBRzNCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFFekIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUV2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3Qix3QkFBbUIsR0FBbkIs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Ozs7O0lBR25DLDhDQUF5Qzs7Ozs7SUFDekMsMENBQWlDOzs7OztJQUVqQyxpREFBK0M7Ozs7O0lBRS9DLDRDQUFxQzs7Ozs7SUFDckMsaURBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Vmlld2VyU2VydmljZX0gZnJvbSBcIi4vdmlld2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7XG4gIEZpbGVEZXNjcmlwdGlvbixcbiAgRmlsZU1vZGVsLFxuICBNb2RhbFNlcnZpY2UsXG4gIFVwbG9hZEZpbGVzU2VydmljZSxcbiAgTmF2aWdhdGVTZXJ2aWNlLFxuICBQYWdlUHJlbG9hZFNlcnZpY2UsXG4gIFBhZ2VNb2RlbCxcbiAgWm9vbVNlcnZpY2UsXG4gIFJvdGF0ZWRQYWdlLFxuICBSZW5kZXJQcmludFNlcnZpY2UsXG4gIEZpbGVVdGlsLFxuICBQYXNzd29yZFNlcnZpY2UsXG4gIEZpbGVDcmVkZW50aWFscywgQ29tbW9uTW9kYWxzLCBMb2FkaW5nTWFza1NlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtWaWV3ZXJDb25maWd9IGZyb20gXCIuL3ZpZXdlci1jb25maWdcIjtcbmltcG9ydCB7Vmlld2VyQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vdmlld2VyLWNvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQge1dpbmRvd1NlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCAqIGFzIEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXZpZXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3ZXItYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmlld2VyLWFwcC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlckFwcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICB0aXRsZSA9ICd2aWV3ZXInO1xuICBmaWxlczogRmlsZU1vZGVsW10gPSBbXTtcbiAgZmlsZTogRmlsZURlc2NyaXB0aW9uO1xuICB2aWV3ZXJDb25maWc6IFZpZXdlckNvbmZpZztcbiAgY291bnRQYWdlcyA9IDA7XG4gIGZvcm1hdERpc2FibGVkID0gIXRoaXMuZmlsZTtcbiAgc2hvd1RodW1ibmFpbHMgPSBmYWxzZTtcbiAgY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscztcbiAgYnJvd3NlRmlsZXNNb2RhbCA9IENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcztcbiAgc2hvd1NlYXJjaCA9IGZhbHNlO1xuICBpc0Rlc2t0b3A6IGJvb2xlYW47XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcblxuICBfem9vbSA9IDEwMDtcbiAgX3BhZ2VXaWR0aDogbnVtYmVyO1xuICBfcGFnZUhlaWdodDogbnVtYmVyO1xuICBvcHRpb25zO1xuICBAVmlld0NoaWxkcmVuKCdkb2NQYW5lbCcpIGRvY1BhbmVsQ29tcG9uZW50OiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG4gIGZpbGVXYXNEcm9wcGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld2VyU2VydmljZTogVmlld2VyU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICAgIGNvbmZpZ1NlcnZpY2U6IFZpZXdlckNvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHVwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxuICAgICAgICAgICAgICBwYWdlUHJlbG9hZFNlcnZpY2U6IFBhZ2VQcmVsb2FkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyUHJpbnRTZXJ2aWNlOiBSZW5kZXJQcmludFNlcnZpY2UsXG4gICAgICAgICAgICAgIHBhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2FkaW5nTWFza1NlcnZpY2U6IExvYWRpbmdNYXNrU2VydmljZSkge1xuXG4gICAgY29uZmlnU2VydmljZS51cGRhdGVkQ29uZmlnLnN1YnNjcmliZSgodmlld2VyQ29uZmlnKSA9PiB7XG4gICAgICB0aGlzLnZpZXdlckNvbmZpZyA9IHZpZXdlckNvbmZpZztcbiAgICB9KTtcblxuICAgIHVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xuICAgICAgaWYgKHVwbG9hZHMpIHtcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHVwbG9hZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oaSksICcnLCB0aGlzLnZpZXdlckNvbmZpZy5yZXdyaXRlKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID8gdGhpcy5zZWxlY3RGaWxlKG9iai5ndWlkLCAnJywgJycpIDogdGhpcy5zZWxlY3REaXIoJycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYWdlUHJlbG9hZFNlcnZpY2UuY2hlY2tQcmVsb2FkLnN1YnNjcmliZSgocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy52aWV3ZXJDb25maWcucHJlbG9hZFBhZ2VDb3VudCAhPT0gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gcGFnZTsgaSA8IHBhZ2UgKyAyOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSA+IDAgJiYgaSA8PSB0aGlzLmNvdW50UGFnZXMgJiYgIXRoaXMuZmlsZS5wYWdlc1tpIC0gMV0uZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5wcmVsb2FkUGFnZXMoaSwgaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYXNzd29yZFNlcnZpY2UucGFzc0NoYW5nZS5zdWJzY3JpYmUoKHBhc3M6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuY3JlZGVudGlhbHMuZ3VpZCwgcGFzcywgQ29tbW9uTW9kYWxzLlBhc3N3b3JkUmVxdWlyZWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgICB0aGlzLnJlZnJlc2hab29tKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fbG9hZGluZ01hc2tTZXJ2aWNlXG4gICAgLm9uTG9hZGluZ0NoYW5nZWRcbiAgICAuc3Vic2NyaWJlKChsb2FkaW5nOiBib29sZWFuKSA9PiB0aGlzLmlzTG9hZGluZyA9IGxvYWRpbmcpO1xuXG4gICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xuXG4gICAgdGhpcy5kb2NQYW5lbENvbXBvbmVudC5jaGFuZ2VzLnN1YnNjcmliZSgoY29tcHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPikgPT5cbiAgICB7XG4gICAgICBjb21wcy50b0FycmF5KCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBoYW1tZXIgPSBuZXcgSGFtbWVyKGl0ZW0ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIGhhbW1lci5nZXQoJ3BpbmNoJykuc2V0KHsgZW5hYmxlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgcmV3cml0ZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5yZXdyaXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB6b29tQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnpvb20gOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHBhZ2VTZWxlY3RvckNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5wYWdlU2VsZWN0b3IgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHNlYXJjaENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5zZWFyY2ggOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHRodW1ibmFpbHNDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcudGh1bWJuYWlscyA6IHRydWU7XG4gIH1cblxuICBnZXQgcm90YXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnJvdGF0ZSA6IHRydWU7XG4gIH1cblxuICBnZXQgZG93bmxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcuZG93bmxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy51cGxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHByaW50Q29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnByaW50IDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBicm93c2VDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcuYnJvd3NlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBodG1sTW9kZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5odG1sTW9kZSA6IHRydWU7XG4gIH1cblxuICBnZXQgc2F2ZVJvdGF0ZVN0YXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnNhdmVSb3RhdGVTdGF0ZSA6IHRydWU7XG4gIH1cblxuICBnZXQgZW5hYmxlUmlnaHRDbGlja0NvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5lbmFibGVSaWdodENsaWNrIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBjdXJyZW50UGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2U7XG4gIH1cblxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKGlkKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShpZCk7XG4gIH1cblxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLmxvYWRGaWxlcygkZXZlbnQpLnN1YnNjcmliZSgoZmlsZXM6IEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xuICB9XG5cbiAgc2VsZWN0RmlsZSgkZXZlbnQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgbW9kYWxJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IHtndWlkOiAkZXZlbnQsIHBhc3N3b3JkOiBwYXNzd29yZH07XG4gICAgdGhpcy5fdmlld2VyU2VydmljZS5sb2FkRmlsZSh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGZpbGU6IEZpbGVEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgICAgICB0aGlzLmZvcm1hdERpc2FibGVkID0gIXRoaXMuZmlsZTtcbiAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICBpZiAoZmlsZS5wYWdlcyAmJiBmaWxlLnBhZ2VzWzBdKSB7XG4gICAgICAgICAgICB0aGlzLl9wYWdlSGVpZ2h0ID0gZmlsZS5wYWdlc1swXS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9wYWdlV2lkdGggPSBmaWxlLnBhZ2VzWzBdLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy56b29tT3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBwcmVsb2FkUGFnZUNvdW50ID0gdGhpcy52aWV3ZXJDb25maWcucHJlbG9hZFBhZ2VDb3VudDtcbiAgICAgICAgICBjb25zdCBjb3VudFBhZ2VzID0gZmlsZS5wYWdlcyA/IGZpbGUucGFnZXMubGVuZ3RoIDogMDtcbiAgICAgICAgICBpZiAocHJlbG9hZFBhZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKDEsIHByZWxvYWRQYWdlQ291bnQgPiBjb3VudFBhZ2VzID8gY291bnRQYWdlcyA6IHByZWxvYWRQYWdlQ291bnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY291bnRQYWdlcyA9IGNvdW50UGFnZXM7XG4gICAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgICAgICB0aGlzLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgICBpZiAobW9kYWxJZCkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKG1vZGFsSWQpO1xuICAgIH1cbiAgICB0aGlzLmNsZWFyRGF0YSgpO1xuICB9XG5cbiAgcHJlbG9hZFBhZ2VzKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLmxvYWRQYWdlKHRoaXMuY3JlZGVudGlhbHMsIGkpLnN1YnNjcmliZSgocGFnZTogUGFnZU1vZGVsKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZS5wYWdlc1tpIC0gMV0gPSBwYWdlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmlld2VyU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgfSk7XG4gIH1cblxuICBuZXh0UGFnZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmV4dFBhZ2UoKTtcbiAgfVxuXG4gIHByZXZQYWdlKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5wcmV2UGFnZSgpO1xuICB9XG5cbiAgdG9MYXN0UGFnZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UudG9MYXN0UGFnZSgpO1xuICB9XG5cbiAgdG9GaXJzdFBhZ2UoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLnRvRmlyc3RQYWdlKCk7XG4gIH1cblxuICBuYXZpZ2F0ZVRvUGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmF2aWdhdGVUbyhwYWdlKTtcbiAgfVxuXG4gIHpvb21JbigpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBpZiAodGhpcy5fem9vbSA8IDQ5MCkge1xuICAgICAgdGhpcy56b29tID0gdGhpcy5fem9vbSArIDEwO1xuICAgIH1cbiAgfVxuXG4gIHpvb21PdXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRoaXMuX3pvb20gPiAzMCkge1xuICAgICAgdGhpcy56b29tID0gdGhpcy5fem9vbSAtIDEwO1xuICAgIH1cbiAgfVxuXG4gIGZpbGVEcm9wcGVkKCRldmVudCl7XG4gICAgdGhpcy5maWxlV2FzRHJvcHBlZCA9ICRldmVudDtcbiAgfVxuXG4gIHByaXZhdGUgcHRUb1B4KHB0OiBudW1iZXIpIHtcbiAgICAvL3B0ICogOTYgLyA3MiA9IHB4LlxuICAgIHJldHVybiBwdCAqIDk2IC8gNzI7XG4gIH1cblxuICBwcml2YXRlIGdldEZpdFRvV2lkdGgoKSB7XG4gICAgY29uc3QgcGFnZVdpZHRoID0gdGhpcy5wdFRvUHgodGhpcy5fcGFnZVdpZHRoKTtcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5wdFRvUHgodGhpcy5fcGFnZUhlaWdodCk7XG4gICAgY29uc3Qgb2Zmc2V0V2lkdGggPSBwYWdlV2lkdGggPyBwYWdlV2lkdGggOiB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIHJldHVybiAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCAmJiBNYXRoLnJvdW5kKG9mZnNldFdpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpIDwgMikgPyAyMDAgLSBNYXRoLnJvdW5kKG9mZnNldFdpZHRoICogMTAwIC8gd2luZG93LmlubmVyV2lkdGgpIDogTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAqIDEwMCAvIG9mZnNldFdpZHRoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rml0VG9IZWlnaHQoKSB7XG4gICAgY29uc3QgcGFnZVdpZHRoID0gdGhpcy5wdFRvUHgodGhpcy5fcGFnZVdpZHRoKTtcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5wdFRvUHgodGhpcy5fcGFnZUhlaWdodCk7XG4gICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gKHBhZ2VIZWlnaHQgPiBwYWdlV2lkdGgpID8gd2luZG93LmlubmVySGVpZ2h0IC0gMTAwIDogd2luZG93LmlubmVySGVpZ2h0ICsgMTAwO1xuICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IHBhZ2VIZWlnaHQgPyBwYWdlSGVpZ2h0IDogd2luZG93SGVpZ2h0O1xuXG4gICAgcmV0dXJuIChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoKSA/IE1hdGgucm91bmQod2luZG93SGVpZ2h0ICogMTAwIC8gb2Zmc2V0SGVpZ2h0KSA6IE1hdGgucm91bmQob2Zmc2V0SGVpZ2h0ICogMTAwIC8gd2luZG93SGVpZ2h0KTtcbiAgfVxuXG4gIHpvb21PcHRpb25zKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRGaXRUb1dpZHRoKCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRGaXRUb0hlaWdodCgpO1xuICAgIHJldHVybiB0aGlzLl96b29tU2VydmljZS56b29tT3B0aW9ucyh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHNldCB6b29tKHpvb20pIHtcbiAgICB0aGlzLl96b29tID0gem9vbTtcbiAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHRoaXMuX3pvb20pO1xuICB9XG5cbiAgZ2V0IHpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3pvb207XG4gIH1cblxuICBzZWxlY3Rab29tKCRldmVudDogYW55KSB7XG4gICAgdGhpcy56b29tID0gJGV2ZW50LnZhbHVlO1xuICB9XG5cbiAgcm90YXRlKGRlZzogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgY29uc3QgcGFnZU51bWJlciA9IHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZTtcblxuICAgIGlmICh0aGlzLnNhdmVSb3RhdGVTdGF0ZUNvbmZpZyAmJiB0aGlzLmZpbGUpIHtcbiAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2Uucm90YXRlKHRoaXMuY3JlZGVudGlhbHMsIGRlZywgcGFnZU51bWJlcikuc3Vic2NyaWJlKChkYXRhOiBSb3RhdGVkUGFnZVtdKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgcGFnZSBvZiBkYXRhKSB7XG4gICAgICAgICAgY29uc3QgcGFnZU1vZGVsID0gdGhpcy5maWxlLnBhZ2VzW3BhZ2UucGFnZU51bWJlciAtIDFdO1xuICAgICAgICAgIGlmICh0aGlzLmZpbGUgJiYgdGhpcy5maWxlLnBhZ2VzICYmIHBhZ2VNb2RlbCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBbmdsZShwYWdlTW9kZWwsIHBhZ2UuYW5nbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcGFnZU1vZGVsID0gdGhpcy5maWxlLnBhZ2VzW3BhZ2VOdW1iZXIgLSAxXTtcbiAgICAgIGlmICh0aGlzLmZpbGUgJiYgdGhpcy5maWxlLnBhZ2VzICYmIHBhZ2VNb2RlbCkge1xuICAgICAgICBjb25zdCBhbmdsZSA9IHBhZ2VNb2RlbC5hbmdsZSArIGRlZztcbiAgICAgICAgaWYgKGFuZ2xlID4gMzYwKSB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VBbmdsZShwYWdlTW9kZWwsIDkwKTtcbiAgICAgICAgfSBlbHNlIGlmIChhbmdsZSA8IC0zNjApIHtcbiAgICAgICAgICB0aGlzLmNoYW5nZUFuZ2xlKHBhZ2VNb2RlbCwgLTkwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNoYW5nZUFuZ2xlKHBhZ2VNb2RlbCwgYW5nbGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VBbmdsZShwYWdlOiBQYWdlTW9kZWwsIGFuZ2xlOiBudW1iZXIpIHtcbiAgICBwYWdlLmFuZ2xlID0gYW5nbGU7XG4gIH1cblxuICBkb3dubG9hZEZpbGUoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLl92aWV3ZXJTZXJ2aWNlLmdldERvd25sb2FkVXJsKHRoaXMuY3JlZGVudGlhbHMpKTtcbiAgfVxuXG4gIHByaW50RmlsZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBpZiAodGhpcy52aWV3ZXJDb25maWcucHJlbG9hZFBhZ2VDb3VudCAhPT0gMCkge1xuICAgICAgaWYgKEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5mb3JtYXQgPT09IFwiUG9ydGFibGUgRG9jdW1lbnQgRm9ybWF0XCIpIHtcbiAgICAgICAgdGhpcy5fdmlld2VyU2VydmljZS5sb2FkUHJpbnRQZGYodGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKGJsb2IgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbGUgPSBuZXcgQmxvYihbYmxvYl0sIHt0eXBlOiAnYXBwbGljYXRpb24vcGRmJ30pO1xuICAgICAgICAgIHRoaXMuX3JlbmRlclByaW50U2VydmljZS5jaGFuZ2VCbG9iKGZpbGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UubG9hZFByaW50KHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZGF0YTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgICAgdGhpcy5maWxlLnBhZ2VzID0gZGF0YS5wYWdlcztcbiAgICAgICAgICB0aGlzLl9yZW5kZXJQcmludFNlcnZpY2UuY2hhbmdlUGFnZXModGhpcy5maWxlLnBhZ2VzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlclByaW50U2VydmljZS5jaGFuZ2VQYWdlcyh0aGlzLmZpbGUucGFnZXMpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5UaHVtYm5haWxzKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuc2hvd1RodW1ibmFpbHMpIHtcbiAgICAgIHRoaXMuc2hvd1RodW1ibmFpbHMgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy52aWV3ZXJDb25maWcucHJlbG9hZFBhZ2VDb3VudCA9PT0gMCkge1xuICAgICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UubG9hZFRodW1ibmFpbHModGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKChkYXRhOiBGaWxlRGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgdGhpcy5maWxlLnBhZ2VzID0gZGF0YS5wYWdlcztcbiAgICAgICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IHRydWU7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJEYXRhKCkge1xuICAgIGlmICghdGhpcy5maWxlIHx8ICF0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwYWdlIG9mIHRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgcGFnZS5kYXRhID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBvblJpZ2h0Q2xpY2soJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuZW5hYmxlUmlnaHRDbGlja0NvbmZpZztcbiAgfVxuXG4gIG9wZW5TZWFyY2goKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgdGhpcy5zaG93U2VhcmNoID0gIXRoaXMuc2hvd1NlYXJjaDtcbiAgfVxuXG4gIG9uUGluY2hJbigkZXZlbnQpe1xuICAgIHRoaXMuem9vbU91dCgpO1xuICB9XG5cbiAgb25QaW5jaE91dCgkZXZlbnQpe1xuICAgIHRoaXMuem9vbUluKCk7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hab29tKCkge1xuICAgIHRoaXMuem9vbSA9IHRoaXMuX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCkgPyAxMDAgOiB0aGlzLmdldEZpdFRvV2lkdGgoKTtcbiAgfVxufVxuIl19