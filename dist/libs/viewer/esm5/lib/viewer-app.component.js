/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewerService } from "./viewer.service";
import { ModalService, UploadFilesService, NavigateService, PagePreloadService, ZoomService, RenderPrintService, FileUtil, PasswordService, CommonModals, LoadingMaskService } from "@groupdocs.examples.angular/common-components";
import { ViewerConfigService } from "./viewer-config.service";
import { WindowService } from "@groupdocs.examples.angular/common-components";
//import * as Hammer from 'hammerjs';
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
        //@ViewChildren('docPanel') docPanelComponent: QueryList<ElementRef>;
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
    ViewerAppComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.viewerConfig.defaultDocument !== "") {
            this.isLoading = true;
            this.selectFile(this.viewerConfig.defaultDocument, "", "");
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
        // this.docPanelComponent.changes.subscribe((comps: QueryList<ElementRef>) =>
        // {
        //   comps.toArray().forEach((item) => {
        //     const hammer = new Hammer(item.nativeElement);
        //     hammer.get('pinch').set({ enable: true });
        //   });
        // });
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
        this.file = null;
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
                    _this._viewerService.loadThumbnails(_this.credentials).subscribe((/**
                     * @param {?} data
                     * @return {?}
                     */
                    function (data) {
                        _this.file.thumbnails = data.pages;
                    }));
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
        // Images and Excel-related files receiving dimensions in px from server
        /** @type {?} */
        var pageWidth = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageWidth : this.ptToPx(this._pageWidth);
        /** @type {?} */
        var pageHeight = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageHeight : this.ptToPx(this._pageHeight);
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
        var pageWidth = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageWidth : this.ptToPx(this._pageWidth);
        /** @type {?} */
        var pageHeight = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageHeight : this.ptToPx(this._pageHeight);
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
        /** @type {?} */
        var pageModel = this.file.pages[pageNumber - 1];
        if (this.saveRotateStateConfig && this.file) {
            this._viewerService.rotate(this.credentials, deg, pageNumber).subscribe((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
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
        if (this.viewerConfig.preloadPageCount !== 0) {
            this._viewerService.loadPrint(this.credentials).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.file.pages = data.pages;
                _this._renderPrintService.changePages(_this.file.pages);
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
    // onPinchIn($event){
    //   this.zoomOut();
    // }
    // onPinchOut($event){
    //   this.zoomIn();
    // }
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
    ViewerAppComponent.prototype.refreshZoom = 
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
    function () {
        this.formatIcon = this.file ? FileUtil.find(this.file.guid, false).icon : null;
        this.zoom = this._windowService.isDesktop() ? 100 : this.getFitToWidth();
    };
    ViewerAppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-viewer',
                    template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'viewer'\" icon=\"eye\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-select class=\"mobile-hide\" [disabled]=\"formatDisabled\" [options]=\"options\" (selected)=\"selectZoom($event)\"\n                 [showSelected]=\"{ name: zoom+'%', value : zoom}\" *ngIf=\"zoomConfig\" ></gd-select>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"\n                 *ngIf=\"zoomConfig\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\"\n                 (click)=\"zoomOut()\" *ngIf=\"zoomConfig\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-left'\" [tooltip]=\"'First Page'\"\n                 (click)=\"toFirstPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" [tooltip]=\"'Previous Page'\"\n                 (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <div class=\"current-page-number\" [ngClass]=\"{'active': !formatDisabled}\" *ngIf=\"formatIcon !== 'file-excel'\">{{currentPage}}/{{countPages}}</div>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" [tooltip]=\"'Next Page'\"\n                 (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-right'\" [tooltip]=\"'Last Page'\"\n                 (click)=\"toLastPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Rotate CCW'\" (click)=\"rotate(-90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Rotate CW'\" (click)=\"rotate(90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                 (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                 *ngIf=\"printConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search'\" [tooltip]=\"'Search'\" (click)=\"openSearch()\"\n                 *ngIf=\"searchConfig\" ></gd-button>\n      <gd-search (hidePanel)=\"showSearch = !$event\" *ngIf=\"showSearch\" ></gd-search>\n\n      <gd-button class=\"thumbnails-button\" [disabled]=\"formatDisabled\" [icon]=\"'th-large'\" [tooltip]=\"'Thumbnails'\"\n                 (click)=\"openThumbnails()\" *ngIf=\"thumbnailsConfig && isDesktop && formatIcon !== 'file-excel'\"></gd-button>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"doc-panel\" *ngIf=\"file\" #docPanel>\n    <gd-thumbnails *ngIf=\"showThumbnails\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\"></gd-thumbnails>\n\n    <gd-document class=\"gd-document\" *ngIf=\"(file && formatIcon !== 'file-excel') || (formatIcon === 'file-excel' && !htmlModeConfig)\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-document>\n    <gd-excel-document class=\"gd-document\" *ngIf=\"file && formatIcon === 'file-excel' && htmlModeConfig\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-excel-document>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n    Or drop file here\n  </gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.current-page-number{margin-left:7px;font-size:14px;color:#959da5;width:37px;height:37px;line-height:37px;text-align:center}.current-page-number.active{color:#fff}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.thumbnails-button{position:absolute;right:3px}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}::ng-deep .tools .button,::ng-deep .tools .nav-caret,::ng-deep .tools .selected-value{color:#fff!important}::ng-deep .tools .button.inactive,::ng-deep .tools .nav-caret.inactive,::ng-deep .tools .selected-value.inactive{color:#959da5!important}::ng-deep .tools .button{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .dropdown-menu .option{color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}::ng-deep .tools .select{width:65px;height:37px;margin-left:7px;line-height:37px;text-align:center}@media (max-width:1037px){.current-page-number,.mobile-hide{display:none}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .tools .gd-nav-search-btn .icon-button{height:37px;width:37px}::ng-deep .tools .gd-nav-search-btn .button{font-size:14px}}"]
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
    ViewerAppComponent.prototype.fileWasDropped;
    /** @type {?} */
    ViewerAppComponent.prototype.formatIcon;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3ZpZXdlci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQThDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBR0wsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixlQUFlLEVBQ2Ysa0JBQWtCLEVBRWxCLFdBQVcsRUFFWCxrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLGVBQWUsRUFDRSxZQUFZLEVBQUUsa0JBQWtCLEVBQ2xELE1BQU0sK0NBQStDLENBQUM7QUFFdkQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLCtDQUErQyxDQUFDOztBQUc1RTtJQTJCRSw0QkFBb0IsY0FBNkIsRUFDN0IsYUFBMkIsRUFDbkMsYUFBa0MsRUFDbEMsa0JBQXNDLEVBQzlCLGdCQUFpQyxFQUNqQyxZQUF5QixFQUNqQyxrQkFBc0MsRUFDOUIsbUJBQXVDLEVBQy9DLGVBQWdDLEVBQ3hCLGNBQTZCLEVBQzdCLG1CQUF1QztRQVYzRCxpQkE4Q0M7UUE5Q21CLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBRzNCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFFekIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUV2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBL0IzRCxVQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ2pCLFVBQUssR0FB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WkQsSUF3WkM7U0FuWlksa0JBQWtCOzs7SUFDN0IsbUNBQWlCOztJQUNqQixtQ0FBd0I7O0lBQ3hCLGtDQUFzQjs7SUFDdEIsMENBQTJCOztJQUMzQix3Q0FBZTs7SUFDZiw0Q0FBNEI7O0lBQzVCLDRDQUF1Qjs7SUFDdkIseUNBQTZCOztJQUM3Qiw4Q0FBNEM7O0lBQzVDLHdDQUFtQjs7SUFDbkIsdUNBQW1COztJQUNuQix1Q0FBbUI7O0lBRW5CLG1DQUFZOztJQUNaLHdDQUFtQjs7SUFDbkIseUNBQW9COztJQUNwQixxQ0FBUTs7SUFFUiw0Q0FBdUI7O0lBQ3ZCLHdDQUFtQjs7Ozs7SUFFUCw0Q0FBcUM7Ozs7O0lBQ3JDLDJDQUFtQzs7Ozs7SUFHbkMsOENBQXlDOzs7OztJQUN6QywwQ0FBaUM7Ozs7O0lBRWpDLGlEQUErQzs7Ozs7SUFFL0MsNENBQXFDOzs7OztJQUNyQyxpREFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1ZpZXdlclNlcnZpY2V9IGZyb20gXCIuL3ZpZXdlci5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuICBGaWxlRGVzY3JpcHRpb24sXG4gIEZpbGVNb2RlbCxcbiAgTW9kYWxTZXJ2aWNlLFxuICBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gIE5hdmlnYXRlU2VydmljZSxcbiAgUGFnZVByZWxvYWRTZXJ2aWNlLFxuICBQYWdlTW9kZWwsXG4gIFpvb21TZXJ2aWNlLFxuICBSb3RhdGVkUGFnZSxcbiAgUmVuZGVyUHJpbnRTZXJ2aWNlLFxuICBGaWxlVXRpbCxcbiAgUGFzc3dvcmRTZXJ2aWNlLFxuICBGaWxlQ3JlZGVudGlhbHMsIENvbW1vbk1vZGFscywgTG9hZGluZ01hc2tTZXJ2aWNlXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7Vmlld2VyQ29uZmlnfSBmcm9tIFwiLi92aWV3ZXItY29uZmlnXCI7XG5pbXBvcnQge1ZpZXdlckNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL3ZpZXdlci1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG4vL2ltcG9ydCAqIGFzIEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXZpZXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3ZXItYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmlld2VyLWFwcC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlckFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHRpdGxlID0gJ3ZpZXdlcic7XG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xuICBmaWxlOiBGaWxlRGVzY3JpcHRpb247XG4gIHZpZXdlckNvbmZpZzogVmlld2VyQ29uZmlnO1xuICBjb3VudFBhZ2VzID0gMDtcbiAgZm9ybWF0RGlzYWJsZWQgPSAhdGhpcy5maWxlO1xuICBzaG93VGh1bWJuYWlscyA9IGZhbHNlO1xuICBjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzO1xuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xuICBzaG93U2VhcmNoID0gZmFsc2U7XG4gIGlzRGVza3RvcDogYm9vbGVhbjtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuXG4gIF96b29tID0gMTAwO1xuICBfcGFnZVdpZHRoOiBudW1iZXI7XG4gIF9wYWdlSGVpZ2h0OiBudW1iZXI7XG4gIG9wdGlvbnM7XG4gIC8vQFZpZXdDaGlsZHJlbignZG9jUGFuZWwnKSBkb2NQYW5lbENvbXBvbmVudDogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuICBmaWxlV2FzRHJvcHBlZCA9IGZhbHNlO1xuICBmb3JtYXRJY29uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld2VyU2VydmljZTogVmlld2VyU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICAgIGNvbmZpZ1NlcnZpY2U6IFZpZXdlckNvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHVwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxuICAgICAgICAgICAgICBwYWdlUHJlbG9hZFNlcnZpY2U6IFBhZ2VQcmVsb2FkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyUHJpbnRTZXJ2aWNlOiBSZW5kZXJQcmludFNlcnZpY2UsXG4gICAgICAgICAgICAgIHBhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2FkaW5nTWFza1NlcnZpY2U6IExvYWRpbmdNYXNrU2VydmljZSkge1xuXG4gICAgY29uZmlnU2VydmljZS51cGRhdGVkQ29uZmlnLnN1YnNjcmliZSgodmlld2VyQ29uZmlnKSA9PiB7XG4gICAgICB0aGlzLnZpZXdlckNvbmZpZyA9IHZpZXdlckNvbmZpZztcbiAgICB9KTtcblxuICAgIHVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xuICAgICAgaWYgKHVwbG9hZHMpIHtcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHVwbG9hZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oaSksICcnLCB0aGlzLnZpZXdlckNvbmZpZy5yZXdyaXRlKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID8gdGhpcy5zZWxlY3RGaWxlKG9iai5ndWlkLCAnJywgJycpIDogdGhpcy5zZWxlY3REaXIoJycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYWdlUHJlbG9hZFNlcnZpY2UuY2hlY2tQcmVsb2FkLnN1YnNjcmliZSgocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy52aWV3ZXJDb25maWcucHJlbG9hZFBhZ2VDb3VudCAhPT0gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gcGFnZTsgaSA8IHBhZ2UgKyAyOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSA+IDAgJiYgaSA8PSB0aGlzLmNvdW50UGFnZXMgJiYgIXRoaXMuZmlsZS5wYWdlc1tpIC0gMV0uZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5wcmVsb2FkUGFnZXMoaSwgaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYXNzd29yZFNlcnZpY2UucGFzc0NoYW5nZS5zdWJzY3JpYmUoKHBhc3M6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuY3JlZGVudGlhbHMuZ3VpZCwgcGFzcywgQ29tbW9uTW9kYWxzLlBhc3N3b3JkUmVxdWlyZWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgICB0aGlzLnJlZnJlc2hab29tKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy52aWV3ZXJDb25maWcuZGVmYXVsdERvY3VtZW50ICE9PSBcIlwiKXtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLnZpZXdlckNvbmZpZy5kZWZhdWx0RG9jdW1lbnQsIFwiXCIsIFwiXCIpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9sb2FkaW5nTWFza1NlcnZpY2VcbiAgICAub25Mb2FkaW5nQ2hhbmdlZFxuICAgIC5zdWJzY3JpYmUoKGxvYWRpbmc6IGJvb2xlYW4pID0+IHRoaXMuaXNMb2FkaW5nID0gbG9hZGluZyk7XG5cbiAgICB0aGlzLnJlZnJlc2hab29tKCk7XG5cbiAgICAvLyB0aGlzLmRvY1BhbmVsQ29tcG9uZW50LmNoYW5nZXMuc3Vic2NyaWJlKChjb21wczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+KSA9PlxuICAgIC8vIHtcbiAgICAvLyAgIGNvbXBzLnRvQXJyYXkoKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGhhbW1lciA9IG5ldyBIYW1tZXIoaXRlbS5uYXRpdmVFbGVtZW50KTtcbiAgICAvLyAgICAgaGFtbWVyLmdldCgncGluY2gnKS5zZXQoeyBlbmFibGU6IHRydWUgfSk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHpvb21Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcuem9vbSA6IHRydWU7XG4gIH1cblxuICBnZXQgcGFnZVNlbGVjdG9yQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnBhZ2VTZWxlY3RvciA6IHRydWU7XG4gIH1cblxuICBnZXQgc2VhcmNoQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnNlYXJjaCA6IHRydWU7XG4gIH1cblxuICBnZXQgdGh1bWJuYWlsc0NvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy50aHVtYm5haWxzIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCByb3RhdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcucm90YXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBkb3dubG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5kb3dubG9hZCA6IHRydWU7XG4gIH1cblxuICBnZXQgdXBsb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLnVwbG9hZCA6IHRydWU7XG4gIH1cblxuICBnZXQgcHJpbnRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcucHJpbnQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXJDb25maWcgPyB0aGlzLnZpZXdlckNvbmZpZy5icm93c2UgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGh0bWxNb2RlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLmh0bWxNb2RlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBzYXZlUm90YXRlU3RhdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyQ29uZmlnID8gdGhpcy52aWV3ZXJDb25maWcuc2F2ZVJvdGF0ZVN0YXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBlbmFibGVSaWdodENsaWNrQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdlckNvbmZpZyA/IHRoaXMudmlld2VyQ29uZmlnLmVuYWJsZVJpZ2h0Q2xpY2sgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZTtcbiAgfVxuXG4gIG9wZW5Nb2RhbChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oaWQpO1xuICB9XG5cbiAgY2xvc2VNb2RhbChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKGlkKTtcbiAgfVxuXG4gIHNlbGVjdERpcigkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRmlsZU1vZGVsW10pID0+IHRoaXMuZmlsZXMgPSBmaWxlcyB8fCBbXSk7XG4gIH1cblxuICBzZWxlY3RGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBtb2RhbElkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0ge2d1aWQ6ICRldmVudCwgcGFzc3dvcmQ6IHBhc3N3b3JkfTtcbiAgICB0aGlzLmZpbGUgPSBudWxsO1xuICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UubG9hZEZpbGUodGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKChmaWxlOiBGaWxlRGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICAgICAgdGhpcy5mb3JtYXREaXNhYmxlZCA9ICF0aGlzLmZpbGU7XG4gICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgaWYgKGZpbGUucGFnZXMgJiYgZmlsZS5wYWdlc1swXSkge1xuICAgICAgICAgICAgdGhpcy5fcGFnZUhlaWdodCA9IGZpbGUucGFnZXNbMF0uaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5fcGFnZVdpZHRoID0gZmlsZS5wYWdlc1swXS53aWR0aDtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuem9vbU9wdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFpvb20oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcHJlbG9hZFBhZ2VDb3VudCA9IHRoaXMudmlld2VyQ29uZmlnLnByZWxvYWRQYWdlQ291bnQ7XG4gICAgICAgICAgY29uc3QgY291bnRQYWdlcyA9IGZpbGUucGFnZXMgPyBmaWxlLnBhZ2VzLmxlbmd0aCA6IDA7XG4gICAgICAgICAgaWYgKHByZWxvYWRQYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnByZWxvYWRQYWdlcygxLCBwcmVsb2FkUGFnZUNvdW50ID4gY291bnRQYWdlcyA/IGNvdW50UGFnZXMgOiBwcmVsb2FkUGFnZUNvdW50KTtcblxuICAgICAgICAgICAgdGhpcy5fdmlld2VyU2VydmljZS5sb2FkVGh1bWJuYWlscyh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGRhdGE6IEZpbGVEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmZpbGUudGh1bWJuYWlscyA9IGRhdGEucGFnZXM7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY291bnRQYWdlcyA9IGNvdW50UGFnZXM7XG4gICAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgICAgICB0aGlzLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgICBpZiAobW9kYWxJZCkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKG1vZGFsSWQpO1xuICAgIH1cbiAgICB0aGlzLmNsZWFyRGF0YSgpO1xuICB9XG5cbiAgcHJlbG9hZFBhZ2VzKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLmxvYWRQYWdlKHRoaXMuY3JlZGVudGlhbHMsIGkpLnN1YnNjcmliZSgocGFnZTogUGFnZU1vZGVsKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZS5wYWdlc1tpIC0gMV0gPSBwYWdlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmlld2VyU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgfSk7XG4gIH1cblxuICBuZXh0UGFnZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmV4dFBhZ2UoKTtcbiAgfVxuXG4gIHByZXZQYWdlKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5wcmV2UGFnZSgpO1xuICB9XG5cbiAgdG9MYXN0UGFnZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UudG9MYXN0UGFnZSgpO1xuICB9XG5cbiAgdG9GaXJzdFBhZ2UoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLnRvRmlyc3RQYWdlKCk7XG4gIH1cblxuICBuYXZpZ2F0ZVRvUGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmF2aWdhdGVUbyhwYWdlKTtcbiAgfVxuXG4gIHpvb21JbigpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBpZiAodGhpcy5fem9vbSA8IDQ5MCkge1xuICAgICAgdGhpcy56b29tID0gdGhpcy5fem9vbSArIDEwO1xuICAgIH1cbiAgfVxuXG4gIHpvb21PdXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRoaXMuX3pvb20gPiAzMCkge1xuICAgICAgdGhpcy56b29tID0gdGhpcy5fem9vbSAtIDEwO1xuICAgIH1cbiAgfVxuXG4gIGZpbGVEcm9wcGVkKCRldmVudCl7XG4gICAgdGhpcy5maWxlV2FzRHJvcHBlZCA9ICRldmVudDtcbiAgfVxuXG4gIHByaXZhdGUgcHRUb1B4KHB0OiBudW1iZXIpIHtcbiAgICAvL3B0ICogOTYgLyA3MiA9IHB4LlxuICAgIHJldHVybiBwdCAqIDk2IC8gNzI7XG4gIH1cblxuICBwcml2YXRlIGdldEZpdFRvV2lkdGgoKSB7XG4gICAgLy8gSW1hZ2VzIGFuZCBFeGNlbC1yZWxhdGVkIGZpbGVzIHJlY2VpdmluZyBkaW1lbnNpb25zIGluIHB4IGZyb20gc2VydmVyXG4gICAgY29uc3QgcGFnZVdpZHRoID0gdGhpcy5mb3JtYXRJY29uICYmICh0aGlzLmZvcm1hdEljb24gPT09IFwiZmlsZS1leGNlbFwiIHx8IHRoaXMuZm9ybWF0SWNvbiA9PT0gXCJmaWxlLWltYWdlXCIpID8gdGhpcy5fcGFnZVdpZHRoIDogdGhpcy5wdFRvUHgodGhpcy5fcGFnZVdpZHRoKTtcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5mb3JtYXRJY29uICYmICh0aGlzLmZvcm1hdEljb24gPT09IFwiZmlsZS1leGNlbFwiIHx8IHRoaXMuZm9ybWF0SWNvbiA9PT0gXCJmaWxlLWltYWdlXCIpID8gdGhpcy5fcGFnZUhlaWdodCA6IHRoaXMucHRUb1B4KHRoaXMuX3BhZ2VIZWlnaHQpO1xuICAgIGNvbnN0IG9mZnNldFdpZHRoID0gcGFnZVdpZHRoID8gcGFnZVdpZHRoIDogd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICByZXR1cm4gKHBhZ2VIZWlnaHQgPiBwYWdlV2lkdGggJiYgTWF0aC5yb3VuZChvZmZzZXRXaWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSA8IDIpID8gMjAwIC0gTWF0aC5yb3VuZChvZmZzZXRXaWR0aCAqIDEwMCAvIHdpbmRvdy5pbm5lcldpZHRoKSA6IE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggKiAxMDAgLyBvZmZzZXRXaWR0aCk7XG4gIH1cblxuICBwcml2YXRlIGdldEZpdFRvSGVpZ2h0KCkge1xuICAgIGNvbnN0IHBhZ2VXaWR0aCA9IHRoaXMuZm9ybWF0SWNvbiAmJiAodGhpcy5mb3JtYXRJY29uID09PSBcImZpbGUtZXhjZWxcIiB8fCB0aGlzLmZvcm1hdEljb24gPT09IFwiZmlsZS1pbWFnZVwiKSA/IHRoaXMuX3BhZ2VXaWR0aCA6IHRoaXMucHRUb1B4KHRoaXMuX3BhZ2VXaWR0aCk7XG4gICAgY29uc3QgcGFnZUhlaWdodCA9IHRoaXMuZm9ybWF0SWNvbiAmJiAodGhpcy5mb3JtYXRJY29uID09PSBcImZpbGUtZXhjZWxcIiB8fCB0aGlzLmZvcm1hdEljb24gPT09IFwiZmlsZS1pbWFnZVwiKSA/IHRoaXMuX3BhZ2VIZWlnaHQgOiB0aGlzLnB0VG9QeCh0aGlzLl9wYWdlSGVpZ2h0KTtcbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCkgPyB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMDAgOiB3aW5kb3cuaW5uZXJIZWlnaHQgKyAxMDA7XG4gICAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gcGFnZUhlaWdodCA/IHBhZ2VIZWlnaHQgOiB3aW5kb3dIZWlnaHQ7XG5cbiAgICByZXR1cm4gKHBhZ2VIZWlnaHQgPiBwYWdlV2lkdGgpID8gTWF0aC5yb3VuZCh3aW5kb3dIZWlnaHQgKiAxMDAgLyBvZmZzZXRIZWlnaHQpIDogTWF0aC5yb3VuZChvZmZzZXRIZWlnaHQgKiAxMDAgLyB3aW5kb3dIZWlnaHQpO1xuICB9XG5cbiAgem9vbU9wdGlvbnMoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldEZpdFRvV2lkdGgoKTtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEZpdFRvSGVpZ2h0KCk7XG4gICAgcmV0dXJuIHRoaXMuX3pvb21TZXJ2aWNlLnpvb21PcHRpb25zKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgc2V0IHpvb20oem9vbSkge1xuICAgIHRoaXMuX3pvb20gPSB6b29tO1xuICAgIHRoaXMuX3pvb21TZXJ2aWNlLmNoYW5nZVpvb20odGhpcy5fem9vbSk7XG4gIH1cblxuICBnZXQgem9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fem9vbTtcbiAgfVxuXG4gIHNlbGVjdFpvb20oJGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnpvb20gPSAkZXZlbnQudmFsdWU7XG4gIH1cblxuICByb3RhdGUoZGVnOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlO1xuICAgIGNvbnN0IHBhZ2VNb2RlbCA9IHRoaXMuZmlsZS5wYWdlc1twYWdlTnVtYmVyIC0gMV07XG5cbiAgICBpZiAodGhpcy5zYXZlUm90YXRlU3RhdGVDb25maWcgJiYgdGhpcy5maWxlKSB7XG4gICAgICB0aGlzLl92aWV3ZXJTZXJ2aWNlLnJvdGF0ZSh0aGlzLmNyZWRlbnRpYWxzLCBkZWcsIHBhZ2VOdW1iZXIpLnN1YnNjcmliZSgocGFnZTogUGFnZU1vZGVsKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZS5wYWdlc1twYWdlTnVtYmVyIC0gMV0gPSBwYWdlO1xuXG4gICAgICAgIGlmICh0aGlzLmZpbGUgJiYgdGhpcy5maWxlLnBhZ2VzICYmIHBhZ2VNb2RlbCkge1xuICAgICAgICAgIGNvbnN0IGFuZ2xlID0gcGFnZU1vZGVsLmFuZ2xlICsgZGVnO1xuICAgICAgICAgIGlmIChhbmdsZSA+IDM2MCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBbmdsZShwYWdlTW9kZWwsIDkwKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGFuZ2xlIDwgLTM2MCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBbmdsZShwYWdlTW9kZWwsIC05MCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQW5nbGUocGFnZU1vZGVsLCBhbmdsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlQW5nbGUocGFnZTogUGFnZU1vZGVsLCBhbmdsZTogbnVtYmVyKSB7XG4gICAgcGFnZS5hbmdsZSA9IGFuZ2xlO1xuICB9XG5cbiAgZG93bmxvYWRGaWxlKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odGhpcy5fdmlld2VyU2VydmljZS5nZXREb3dubG9hZFVybCh0aGlzLmNyZWRlbnRpYWxzKSk7XG4gIH1cblxuICBwcmludEZpbGUoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRoaXMudmlld2VyQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgIT09IDApIHtcbiAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UubG9hZFByaW50KHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZGF0YTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZS5wYWdlcyA9IGRhdGEucGFnZXM7XG4gICAgICAgIHRoaXMuX3JlbmRlclByaW50U2VydmljZS5jaGFuZ2VQYWdlcyh0aGlzLmZpbGUucGFnZXMpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlclByaW50U2VydmljZS5jaGFuZ2VQYWdlcyh0aGlzLmZpbGUucGFnZXMpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5UaHVtYm5haWxzKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuc2hvd1RodW1ibmFpbHMpIHtcbiAgICAgIHRoaXMuc2hvd1RodW1ibmFpbHMgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy52aWV3ZXJDb25maWcucHJlbG9hZFBhZ2VDb3VudCA9PT0gMCkge1xuICAgICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmZpbGUudGh1bWJuYWlscy5maWx0ZXIodCA9PiAhdC5kYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuX3ZpZXdlclNlcnZpY2UubG9hZFRodW1ibmFpbHModGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKChkYXRhOiBGaWxlRGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGUudGh1bWJuYWlscyA9IGRhdGEucGFnZXM7XG4gICAgICAgICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93VGh1bWJuYWlscyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckRhdGEoKSB7XG4gICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICBwYWdlLmRhdGEgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG9uUmlnaHRDbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5lbmFibGVSaWdodENsaWNrQ29uZmlnO1xuICB9XG5cbiAgb3BlblNlYXJjaCgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLnNob3dTZWFyY2ggPSAhdGhpcy5zaG93U2VhcmNoO1xuICB9XG5cbiAgLy8gb25QaW5jaEluKCRldmVudCl7XG4gIC8vICAgdGhpcy56b29tT3V0KCk7XG4gIC8vIH1cblxuICAvLyBvblBpbmNoT3V0KCRldmVudCl7XG4gIC8vICAgdGhpcy56b29tSW4oKTtcbiAgLy8gfVxuXG4gIHByaXZhdGUgcmVmcmVzaFpvb20oKSB7XG4gICAgdGhpcy5mb3JtYXRJY29uID0gdGhpcy5maWxlID8gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmljb24gOiBudWxsO1xuICAgIHRoaXMuem9vbSA9IHRoaXMuX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCkgPyAxMDAgOiB0aGlzLmdldEZpdFRvV2lkdGgoKTtcbiAgfVxufVxuIl19