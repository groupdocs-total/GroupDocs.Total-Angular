import { BrowserModule } from '@angular/platform-browser';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, ElementRef, EventEmitter, Input, Output, NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import * as jquery from 'jquery';
import { Api, ConfigService, CommonModals, UploadFilesService, PagePreloadService, ModalService, TabActivatorService, PasswordService, FileUtil, ExceptionMessageService, PageModel, ZoomService, ZoomDirective, WindowService, NavigateService, DocumentComponent, LoadingMaskInterceptorService, CommonComponentsModule, ErrorInterceptorService, LoadingMaskService } from '@groupdocs.examples.angular/common-components';
import { BehaviorSubject } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { __extends } from 'tslib';
import { ClickOutsideModule } from 'ng-click-outside';
import { TranslateModule } from '@ngx-translate/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComparisonConfig = /** @class */ (function () {
    function ComparisonConfig() {
    }
    return ComparisonConfig;
}());
if (false) {
    /** @type {?} */
    ComparisonConfig.prototype.rewrite;
    /** @type {?} */
    ComparisonConfig.prototype.pageSelector;
    /** @type {?} */
    ComparisonConfig.prototype.download;
    /** @type {?} */
    ComparisonConfig.prototype.upload;
    /** @type {?} */
    ComparisonConfig.prototype.print;
    /** @type {?} */
    ComparisonConfig.prototype.browse;
    /** @type {?} */
    ComparisonConfig.prototype.enableRightClick;
    /** @type {?} */
    ComparisonConfig.prototype.filesDirectory;
    /** @type {?} */
    ComparisonConfig.prototype.fontsDirectory;
    /** @type {?} */
    ComparisonConfig.prototype.defaultDocument;
    /** @type {?} */
    ComparisonConfig.prototype.preloadResultPageCount;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComparisonConfigService = /** @class */ (function () {
    function ComparisonConfigService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._comparisonConfig = new BehaviorSubject(new ComparisonConfig());
        this._updatedConfig = this._comparisonConfig.asObservable();
    }
    Object.defineProperty(ComparisonConfigService.prototype, "updatedConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this._updatedConfig;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ComparisonConfigService.prototype.load = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var configEndpoint = _this._config.getConfigEndpoint(Api.COMPARISON_APP);
            _this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var comparisonConfig = (/** @type {?} */ (response));
                _this._comparisonConfig.next(comparisonConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                reject("Could not load comparison config: " + JSON.stringify(response));
            }));
        }));
    };
    ComparisonConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ComparisonConfigService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ ComparisonConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ComparisonConfigService_Factory() { return new ComparisonConfigService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: ComparisonConfigService, providedIn: "root" });
    return ComparisonConfigService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComparisonConfigService.prototype._comparisonConfig;
    /**
     * @type {?}
     * @private
     */
    ComparisonConfigService.prototype._updatedConfig;
    /**
     * @type {?}
     * @private
     */
    ComparisonConfigService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ComparisonConfigService.prototype._config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComparisonService = /** @class */ (function () {
    function ComparisonService(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    ComparisonService.prototype.loadFiles = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this._http.post(this._config.getComparisonApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
    };
    /**
     * @return {?}
     */
    ComparisonService.prototype.getFormats = /**
     * @return {?}
     */
    function () {
        return this._http.get(this._config.getComparisonApiEndpoint() + Api.LOAD_FORMATS, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    ComparisonService.prototype.loadFile = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._http.post(this._config.getComparisonApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
    };
    /**
     * @param {?} file
     * @param {?} url
     * @param {?} rewrite
     * @return {?}
     */
    ComparisonService.prototype.upload = /**
     * @param {?} file
     * @param {?} url
     * @param {?} rewrite
     * @return {?}
     */
    function (file, url, rewrite) {
        /** @type {?} */
        var formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getComparisonApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ComparisonService.prototype.save = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return this._http.post(this._config.getComparisonApiEndpoint() + Api.SAVE_FILE, file, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    ComparisonService.prototype.getDownloadUrl = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._config.getComparisonApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?guid=' + credentials.guid;
    };
    /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    ComparisonService.prototype.loadPage = /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    function (credentials, page) {
        return this._http.post(this._config.getComparisonApiEndpoint() + Api.LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'page': page
        }, Api.httpOptionsJson);
    };
    /**
     * @param {?} arr
     * @return {?}
     */
    ComparisonService.prototype.compare = /**
     * @param {?} arr
     * @return {?}
     */
    function (arr) {
        return this._http.post(this._config.getComparisonApiEndpoint() + Api.COMPARE_FILES, { 'guids': arr }, Api.httpOptionsJson);
    };
    ComparisonService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ComparisonService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ ComparisonService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ComparisonService_Factory() { return new ComparisonService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: ComparisonService, providedIn: "root" });
    return ComparisonService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComparisonService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ComparisonService.prototype._config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $ = jquery;
var Files = /** @class */ (function () {
    function Files() {
    }
    Files.FIRST = 'first';
    Files.SECOND = 'second';
    return Files;
}());
if (false) {
    /** @type {?} */
    Files.FIRST;
    /** @type {?} */
    Files.SECOND;
}
var Highlight = /** @class */ (function () {
    function Highlight() {
        this.active = false;
    }
    return Highlight;
}());
if (false) {
    /** @type {?} */
    Highlight.prototype.id;
    /** @type {?} */
    Highlight.prototype.active;
}
var ComparisonAppComponent = /** @class */ (function () {
    function ComparisonAppComponent(_comparisonService, configService, uploadFilesService, pagePreloadService, _modalService, _tabActivatorService, _elementRef, passwordService) {
        var _this = this;
        this._comparisonService = _comparisonService;
        this.configService = configService;
        this._modalService = _modalService;
        this._tabActivatorService = _tabActivatorService;
        this._elementRef = _elementRef;
        this.files = [];
        this.browseFilesModal = CommonModals.BrowseFiles;
        this.credentials = new Map();
        this.file = new Map();
        this.first = Files.FIRST;
        this.second = Files.SECOND;
        this.firstFileName = undefined;
        this.secondFileName = undefined;
        this.loadingFirstPanel = false;
        this.loadingSecondPanel = false;
        this.countPages = 0;
        this.filesTab = 'files';
        this.resultTab = 'result';
        this.activeTab = this.filesTab;
        this.resultTabDisabled = true;
        configService.updatedConfig.subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            _this.comparisonConfig = config;
        }));
        pagePreloadService.checkPreload.subscribe((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            if (_this.comparisonConfig.preloadResultPageCount !== 0) {
                _this.checkPreload(_this.first, page);
                _this.checkPreload(_this.second, page);
            }
        }));
        uploadFilesService.uploadsChange.subscribe((/**
         * @param {?} uploads
         * @return {?}
         */
        function (uploads) {
            /** @type {?} */
            var active = _this.activePanel;
            _this.setLoading(active, true);
            if (uploads) {
                /** @type {?} */
                var i = void 0;
                for (i = 0; i < uploads.length; i++) {
                    _this._comparisonService.upload(uploads.item(i), '', _this.rewriteConfig).subscribe((/**
                     * @param {?} obj
                     * @return {?}
                     */
                    function (obj) {
                        _this.getFile(obj.guid, '', active);
                        _this.selectDir('');
                    }));
                }
            }
        }));
        _tabActivatorService.activeTabChange.subscribe((/**
         * @param {?} tabId
         * @return {?}
         */
        function (tabId) {
            _this.activeTab = tabId;
        }));
        passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        function (pass) {
            /** @type {?} */
            var activePanelFileGuid = "";
            if (_this.credentials.get(_this.first)) {
                activePanelFileGuid = _this.credentials.get(_this.first).guid;
            }
            else if (_this.credentials.get(_this.second)) {
                activePanelFileGuid = _this.credentials.get(_this.second).guid;
            }
            _this.selectFile(activePanelFileGuid, pass, CommonModals.PasswordRequired, _this.activePanel);
        }));
    }
    Object.defineProperty(ComparisonAppComponent.prototype, "uploadConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.comparisonConfig ? this.comparisonConfig.upload : true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} panel
     * @param {?} flag
     * @return {?}
     */
    ComparisonAppComponent.prototype.setLoading = /**
     * @private
     * @param {?} panel
     * @param {?} flag
     * @return {?}
     */
    function (panel, flag) {
        if (panel === this.first) {
            this.loadingFirstPanel = flag;
        }
        else {
            this.loadingSecondPanel = flag;
        }
    };
    Object.defineProperty(ComparisonAppComponent.prototype, "rewriteConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.comparisonConfig ? this.comparisonConfig.rewrite : true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} $event
     * @return {?}
     */
    ComparisonAppComponent.prototype.selectDir = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        this._comparisonService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        function (files) {
            /** @type {?} */
            var nameExt;
            if (_this.credentials.get(_this.first)) {
                nameExt = _this.credentials.get(_this.first).guid.split('.').pop();
            }
            else if (_this.credentials.get(_this.second)) {
                nameExt = _this.credentials.get(_this.second).guid.split('.').pop();
            }
            if (nameExt) {
                files = files.filter((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    return value.directory || value.guid.split('.').pop() === nameExt;
                }));
            }
            _this.files = files || [];
        }));
    };
    /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @param {?} param
     * @return {?}
     */
    ComparisonAppComponent.prototype.selectFile = /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @param {?} param
     * @return {?}
     */
    function ($event, password, modalId, param) {
        this.setLoading(param, true);
        this.getFile($event, password, param);
        this.selectDir('');
        this._modalService.close(modalId);
        this.clearData(param);
    };
    /**
     * @private
     * @param {?} $event
     * @param {?} password
     * @param {?} param
     * @return {?}
     */
    ComparisonAppComponent.prototype.getFile = /**
     * @private
     * @param {?} $event
     * @param {?} password
     * @param {?} param
     * @return {?}
     */
    function ($event, password, param) {
        var _this = this;
        /** @type {?} */
        var credentials = { guid: $event, password: password };
        this.credentials.set(param, credentials);
        this._comparisonService.loadFile(credentials).subscribe((/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            _this.file.set(param, file);
            if (file) {
                /** @type {?} */
                var preloadResultPageCount = _this.comparisonConfig.preloadResultPageCount;
                _this.countPages = file.pages ? file.pages.length : 0;
                if (preloadResultPageCount > 0) {
                    _this.preloadPages(param, 1, preloadResultPageCount > _this.countPages ? _this.countPages : preloadResultPageCount);
                }
            }
            _this.updateFileNames();
            _this.setLoading(param, false);
        }));
    };
    /**
     * @param {?} param
     * @return {?}
     */
    ComparisonAppComponent.prototype.clearFile = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        this.clearData(param);
        this.credentials.delete(param);
        this.result = null;
        this.resultTabDisabled = true;
        this._tabActivatorService.changeActiveTab(this.filesTab);
    };
    /**
     * @private
     * @param {?} param
     * @return {?}
     */
    ComparisonAppComponent.prototype.clearData = /**
     * @private
     * @param {?} param
     * @return {?}
     */
    function (param) {
        if (!this.file || !this.file.size) {
            return;
        }
        this.file.delete(param);
        if (param === this.first) {
            this.firstFileName = undefined;
        }
        else {
            this.secondFileName = undefined;
        }
    };
    /**
     * @param {?} param
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    ComparisonAppComponent.prototype.preloadPages = /**
     * @param {?} param
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (param, start, end) {
        var _this = this;
        var _loop_1 = function (i) {
            this_1._comparisonService.loadPage(this_1.credentials.get(param), i).subscribe((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                _this.file.get(param).pages[i - 1] = page;
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
    ComparisonAppComponent.prototype.upload = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        /** @type {?} */
        var active = this.activePanel;
        this._comparisonService.upload(null, $event, this.rewriteConfig).subscribe((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            _this.getFile(obj.guid, '', active);
            _this.selectDir('');
        }));
    };
    /**
     * @return {?}
     */
    ComparisonAppComponent.prototype.updateFileNames = /**
     * @return {?}
     */
    function () {
        this.firstFileName = this.getFirstFileName();
        this.secondFileName = this.getSecondFileName();
    };
    /**
     * @return {?}
     */
    ComparisonAppComponent.prototype.getSecondFileName = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var fileCredentials = this.credentials ? this.credentials.get(this.second) : undefined;
        return fileCredentials ? fileCredentials.guid.replace(/^.*[\\\/]/, '') : '';
    };
    /**
     * @return {?}
     */
    ComparisonAppComponent.prototype.getFirstFileName = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var fileCredentials = this.credentials ? this.credentials.get(this.first) : undefined;
        return fileCredentials ? fileCredentials.guid.replace(/^.*[\\\/]/, '') : '';
    };
    /**
     * @private
     * @param {?} panel
     * @param {?} page
     * @return {?}
     */
    ComparisonAppComponent.prototype.checkPreload = /**
     * @private
     * @param {?} panel
     * @param {?} page
     * @return {?}
     */
    function (panel, page) {
        if (!this.file.get(panel)) {
            return;
        }
        for (var i = page; i < page + 2; i++) {
            if (i > 0 && i <= this.countPages && !this.file.get(panel).pages[i - 1].data) {
                this.preloadPages(panel, i, i);
            }
        }
    };
    /**
     * @return {?}
     */
    ComparisonAppComponent.prototype.compare = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.credentials.size !== 2) {
            return;
        }
        this.resultTabDisabled = false;
        /** @type {?} */
        var arr = [];
        arr.push(this.credentials.get(this.first));
        arr.push(this.credentials.get(this.second));
        this._comparisonService.compare(arr).subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.result = result;
            /** @type {?} */
            var isZeroBasedPageId = _this.result.changes.find((/**
             * @param {?} change
             * @return {?}
             */
            function (change) { return change.pageInfo.pageNumber === 0; }));
            _this.result.changes.forEach((/**
             * @param {?} change
             * @return {?}
             */
            function (change) {
                change.id = _this.generateRandomInteger();
                /** @type {?} */
                var zeroBasedId = isZeroBasedPageId ? change.pageInfo.pageNumber : change.pageInfo.pageNumber - 1;
                change.pageInfo.pageNumber = isZeroBasedPageId ? change.pageInfo.pageNumber : change.pageInfo.pageNumber - 1;
                if (!_this.result.pages[zeroBasedId].changes) {
                    _this.result.pages[zeroBasedId].changes = [];
                }
                _this.result.pages[zeroBasedId].changes.push(change);
                change.normalized = {
                    x: _this.pxToPt(change.box.x) * 100 / change.pageInfo.width,
                    y: _this.pxToPt(change.box.y) * 100 / change.pageInfo.height,
                    width: _this.pxToPt(change.box.width) * 100 / change.pageInfo.width,
                    height: _this.pxToPt(change.box.height) * 100 / change.pageInfo.height,
                };
            }));
        }), ((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            _this.resultTabDisabled = true;
            _this._tabActivatorService.changeActiveTab(_this.filesTab);
        })));
        this._tabActivatorService.changeActiveTab(this.resultTab);
    };
    /**
     * @param {?} px
     * @return {?}
     */
    ComparisonAppComponent.prototype.pxToPt = /**
     * @param {?} px
     * @return {?}
     */
    function (px) {
        return px * 72 / 96;
    };
    /**
     * @return {?}
     */
    ComparisonAppComponent.prototype.generateRandomInteger = /**
     * @return {?}
     */
    function () {
        /**
         * @param {?} s
         * @return {?}
         */
        function _p8(s) {
            /** @type {?} */
            var p = (Math.random().toString(16) + "000000000").substr(2, 8);
            return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
        }
        return _p8(null) + _p8(true) + _p8(true) + _p8(null);
    };
    /**
     * @return {?}
     */
    ComparisonAppComponent.prototype.download = /**
     * @return {?}
     */
    function () {
        if (!this.result) {
            return;
        }
        /** @type {?} */
        var credentials = { 'guid': this.result.guid, 'password': '' };
        window.location.assign(this._comparisonService.getDownloadUrl(credentials));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ComparisonAppComponent.prototype.hideSidePanel = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.activeTab = $event ? this.filesTab : this.resultTab;
        this._tabActivatorService.changeActiveTab(this.filesTab);
    };
    ComparisonAppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-comparison',
                    template: "<!--<gd-loading-mask></gd-loading-mask>-->\r\n<div class=\"wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"column\">\r\n      <div class=\"top-panel\">\r\n        <gd-logo [logo]=\"'comparison'\" icon=\"copy\"></gd-logo>\r\n        <gd-top-toolbar class=\"toolbar-panel\">\r\n          <gd-button [icon]=\"'play'\" [tooltip]=\"'Compare'\" [disabled]=\"!file.get(first) || !file.get(second)\"\r\n                     (click)=\"compare()\"></gd-button>\r\n          <gd-button [icon]=\"'download'\" [tooltip]=\"'Download'\" [disabled]=\"!result\" (click)=\"download()\"></gd-button>\r\n          <div class=\"tabs-wrapper\">\r\n            <div class=\"tabs\">\r\n              <gd-tabs>\r\n                <gd-tab [id]=\"filesTab\" tabTitle=\"Documents\" [icon]=\"'copy'\" [active]=\"true\" [content]=\"false\">\r\n                </gd-tab>\r\n                <gd-tab [id]=\"resultTab\" tabTitle=\"Result\" [icon]=\"'poll'\" [disabled]=\"resultTabDisabled\" [content]=\"false\">\r\n                </gd-tab>\r\n              </gd-tabs>\r\n            </div>\r\n          </div>\r\n        </gd-top-toolbar>\r\n      </div>\r\n      <div class=\"files-panel\" *ngIf=\"activeTab === filesTab\">\r\n        <div class=\"upload-compare-file\">\r\n          <gd-add-file-panel class=\"compare-file\"\r\n                             [fileName]=\"firstFileName\"\r\n                             [panel]=\"first\"\r\n                             (active)=\"activePanel = $event\"\r\n                             (urlForUpload)=\"upload($event)\"\r\n                             (cleanPanel)=\"clearFile(first)\">\r\n          </gd-add-file-panel>\r\n          <gd-upload-file-panel\r\n                                [panel]=\"first\"\r\n                                (active)=\"activePanel = $event\"\r\n                                *ngIf=\"!firstFileName && !loadingFirstPanel\">\r\n          </gd-upload-file-panel>\r\n          <div *ngIf=\"loadingFirstPanel\" class=\"loader\">\r\n            <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\r\n            <span>Loading... Please wait.</span>\r\n          </div>\r\n          <gd-document class=\"gd-document\"\r\n                       *ngIf=\"file.get(first)\"\r\n                       [file]=\"file.get(first)\"\r\n                       [mode]=\"false\"\r\n                       [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\" gdRenderPrint\r\n                       [htmlMode]=\"false\"\r\n                       gdScrollable>\r\n          </gd-document>\r\n        </div>\r\n        <div class=\"upload-compare-file\">\r\n          <gd-add-file-panel class=\"compare-file\"\r\n                             [fileName]=\"secondFileName\"\r\n                             [panel]=\"second\"\r\n                             (active)=\"activePanel = $event\"\r\n                             (urlForUpload)=\"upload($event)\"\r\n                             (cleanPanel)=\"clearFile(second)\">\r\n          </gd-add-file-panel>\r\n          <gd-upload-file-panel [panel]=\"second\"\r\n                                (active)=\"activePanel = $event\"\r\n                                *ngIf=\"!secondFileName && !loadingSecondPanel\">\r\n          </gd-upload-file-panel>\r\n          <div *ngIf=\"loadingSecondPanel\" class=\"loader\">\r\n            <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\r\n            <span>Loading... Please wait.</span>\r\n          </div>\r\n          <gd-document class=\"gd-document\"\r\n                       *ngIf=\"file.get(second)\"\r\n                       [file]=\"file.get(second)\"\r\n                       [mode]=\"false\"\r\n                       [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\" gdRenderPrint\r\n                       [htmlMode]=\"false\"\r\n                       gdScrollable>\r\n          </gd-document>\r\n        </div>\r\n      </div>\r\n      <div class=\"result-panel\" *ngIf=\"activeTab === resultTab\">\r\n        <div  class=\"loader\" *ngIf=\"!result\">\r\n          <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\r\n          <span>Loading... Please wait.</span>\r\n        </div>\r\n        <gd-result-document\r\n          class=\"gd-document\"\r\n          *ngIf=\"result\"\r\n          [file]=\"result\"\r\n          [mode]=\"false\"\r\n          [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\"\r\n          gdRenderPrint\r\n          [htmlMode]=\"false\"\r\n          gdScrollable>\r\n        </gd-result-document>\r\n      </div>\r\n    </div>\r\n    <gd-side-panel (hideSidePanel)=\"hideSidePanel($event)\"\r\n                   *ngIf=\"result && activeTab === resultTab\"\r\n                   [title]=\"'Differences'\"\r\n                   [saveable]=\"false\"\r\n                   [icon]=\"'info-circle'\">\r\n      <gd-differences\r\n        [changes]=\"result.changes\">\r\n      </gd-differences>\r\n    </gd-side-panel>\r\n  </div>\r\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\"\r\n                         [files]=\"files\"\r\n                         (selectedDirectory)=\"selectDir($event)\"\r\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal, activePanel)\"\r\n                         [uploadConfig]=\"uploadConfig\">\r\n  </gd-browse-files-modal>\r\n  <gd-password-required></gd-password-required>\r\n  <gd-error-modal></gd-error-modal>\r\n</div>\r\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .tools .button{color:#fff!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .button.inactive{color:#959da5!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}::ng-deep .compare-file .icon-button{margin:0!important}::ng-deep .compare-file .icon-button .text{padding:0!important}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.loader{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%}.upload-compare-file{height:100%;width:50%;border-right:1px solid #ccc;display:-webkit-box;display:flex;align-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;text-align:center;-webkit-box-flex:0;flex-grow:0}.open-file-panel{display:-webkit-box;display:flex;width:100%}.files-panel{background-color:#e7e7e7;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%;height:100%}.result-panel{background-color:#e7e7e7;width:100%;height:100%;display:-webkit-box;display:flex;align-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;text-align:center}.doc-panel{display:-webkit-box;display:flex;height:inherit}.gd-document{width:100%;height:100%}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}.row{display:-webkit-box;display:flex;height:inherit}.column{width:100%}.tabs-wrapper{display:-webkit-box;display:flex;justify-self:flex-end;align-self:flex-end;width:100%;-webkit-box-pack:end;justify-content:flex-end}.tabs{display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:end;justify-content:flex-end}::ng-deep .button.brand fa-icon{color:#fff!important}@media (max-width:1037px){.files-panel{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:calc(100% - 60px)}.files-panel .upload-compare-file{width:100%;height:50%;border-bottom:1px solid #ccc}::ng-deep .gd-side-panel-wrapper{height:50%!important;top:inherit!important;bottom:0!important}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px!important;width:60px}::ng-deep .tabs-wrapper .gd-tab .icon{font-size:22px!important}}"]
                }] }
    ];
    /** @nocollapse */
    ComparisonAppComponent.ctorParameters = function () { return [
        { type: ComparisonService },
        { type: ComparisonConfigService },
        { type: UploadFilesService },
        { type: PagePreloadService },
        { type: ModalService },
        { type: TabActivatorService },
        { type: ElementRef },
        { type: PasswordService }
    ]; };
    return ComparisonAppComponent;
}());
if (false) {
    /** @type {?} */
    ComparisonAppComponent.prototype.files;
    /** @type {?} */
    ComparisonAppComponent.prototype.browseFilesModal;
    /** @type {?} */
    ComparisonAppComponent.prototype.credentials;
    /** @type {?} */
    ComparisonAppComponent.prototype.file;
    /** @type {?} */
    ComparisonAppComponent.prototype.comparisonConfig;
    /** @type {?} */
    ComparisonAppComponent.prototype.activePanel;
    /** @type {?} */
    ComparisonAppComponent.prototype.first;
    /** @type {?} */
    ComparisonAppComponent.prototype.second;
    /** @type {?} */
    ComparisonAppComponent.prototype.firstFileName;
    /** @type {?} */
    ComparisonAppComponent.prototype.secondFileName;
    /** @type {?} */
    ComparisonAppComponent.prototype.loadingFirstPanel;
    /** @type {?} */
    ComparisonAppComponent.prototype.loadingSecondPanel;
    /** @type {?} */
    ComparisonAppComponent.prototype.countPages;
    /** @type {?} */
    ComparisonAppComponent.prototype.result;
    /** @type {?} */
    ComparisonAppComponent.prototype.filesTab;
    /** @type {?} */
    ComparisonAppComponent.prototype.resultTab;
    /** @type {?} */
    ComparisonAppComponent.prototype.activeTab;
    /** @type {?} */
    ComparisonAppComponent.prototype.resultTabDisabled;
    /**
     * @type {?}
     * @private
     */
    ComparisonAppComponent.prototype._comparisonService;
    /**
     * @type {?}
     * @private
     */
    ComparisonAppComponent.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    ComparisonAppComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    ComparisonAppComponent.prototype._tabActivatorService;
    /**
     * @type {?}
     * @private
     */
    ComparisonAppComponent.prototype._elementRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var States = /** @class */ (function () {
    function States() {
    }
    States.Empty = 'empty';
    States.Opened = 'opened';
    return States;
}());
if (false) {
    /** @type {?} */
    States.Empty;
    /** @type {?} */
    States.Opened;
}
var AddFilePanelComponent = /** @class */ (function () {
    function AddFilePanelComponent(_modalService, _excMessageService) {
        this._modalService = _modalService;
        this._excMessageService = _excMessageService;
        this.active = new EventEmitter();
        this.urlForUpload = new EventEmitter();
        this.cleanPanel = new EventEmitter();
        this.state = States.Empty;
        this.uploadDisabled = true;
    }
    /**
     * @return {?}
     */
    AddFilePanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AddFilePanelComponent.prototype.getFormatIcon = /**
     * @return {?}
     */
    function () {
        return FileUtil.find(this.fileName, false).icon;
    };
    /**
     * @return {?}
     */
    AddFilePanelComponent.prototype.openModal = /**
     * @return {?}
     */
    function () {
        this.active.emit(this.panel);
        this._modalService.open(CommonModals.BrowseFiles);
    };
    /**
     * @return {?}
     */
    AddFilePanelComponent.prototype.isEmpty = /**
     * @return {?}
     */
    function () {
        return this.state === States.Empty;
    };
    /**
     * @return {?}
     */
    AddFilePanelComponent.prototype.cleanFile = /**
     * @return {?}
     */
    function () {
        this.active.emit(this.panel);
        this.cleanPanel.emit(true);
    };
    /**
     * @param {?} url
     * @return {?}
     */
    AddFilePanelComponent.prototype.uploadUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        if (this.uploadDisabled) {
            return;
        }
        if (url && (url.startsWith('http') || url.startsWith('file') || url.startsWith('ftp'))) {
            this.active.emit(this.panel);
            this.urlForUpload.emit(url);
        }
        else {
            this._modalService.open(CommonModals.ErrorMessage);
            this._excMessageService.changeMessage("Wrong url");
        }
    };
    /**
     * @param {?} url
     * @return {?}
     */
    AddFilePanelComponent.prototype.checkDisabled = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.uploadDisabled = url ? url.length === 0 : true;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AddFilePanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.fileName) {
            this.state = States.Opened;
        }
        else {
            this.state = States.Empty;
        }
    };
    AddFilePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-add-file-panel',
                    template: "<div class=\"wrapper\">\r\n  <div class=\"upload-wrapper\" *ngIf=\"isEmpty()\">\r\n    <gd-button [icon]=\"'arrow-right'\" [tooltip]=\"'Upload file'\" (click)=\"uploadUrl(url.value)\" [disabled]=\"uploadDisabled\" ></gd-button>\r\n    <input class=\"url-input\" #url (keyup)=\"checkDisabled(url.value)\" (keyup.enter)=\"uploadUrl(url.value)\" placeholder=\"https://\">\r\n  </div>\r\n  <fa-icon *ngIf=\"!isEmpty()\" [icon]=\"['fas',getFormatIcon()]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon()\"></fa-icon>\r\n  <span *ngIf=\"!isEmpty()\" class=\"compare-file-name\">{{fileName}}</span>\r\n  <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Open file'\" (click)=\"openModal()\" *ngIf=\"isEmpty()\"></gd-button>\r\n  <gd-button [icon]=\"'times'\" [tooltip]=\"'Close file'\" (click)=\"cleanFile()\" *ngIf=\"!isEmpty()\"></gd-button>\r\n</div>\r\n",
                    styles: [":host{border-bottom:1px solid #ccc}:host ::ng-deep gd-button .button{font-size:14px!important}.wrapper{height:37px;background-color:#fff;display:-webkit-box;display:flex}.upload-wrapper{display:-webkit-box;display:flex;width:100%}.url-input{border:0;height:37px;width:100%;padding-left:5px;margin:0;padding-top:0;padding-bottom:0;outline:0;color:#959da5;opacity:.5;font-style:italic}.compare-file-name{color:#6e6e6e;margin:8px 8px 8px 0;width:100%;text-align:left;font-size:13px;opacity:.5}.ng-fa-icon{color:#959da5;margin:9px 15px 0 13px;font-size:14px}.compare-file{width:100%;border-right:2px solid #ddd}.wrapper .ng-fa-icon.fa-file-pdf{color:#e04e4e}.wrapper .ng-fa-icon.fa-file-word{color:#539cf0}.wrapper .ng-fa-icon.fa-file-powerpoint{color:#e29e1e}.wrapper .ng-fa-icon.fa-file-excel{color:#7cbc46}.wrapper .ng-fa-icon.fa-file-image{color:#c375ed}.wrapper .ng-fa-icon.fa-file,.wrapper .ng-fa-icon.fa-file-alt,.wrapper .ng-fa-icon.fa-file-text .fa-folder{color:#4b566c}.wrapper ::ng-deep gd-button .button fa-icon{color:#6e6e6e}::ng-deep gd-tab .gd-tab .title{font-size:13px;font-weight:700;color:#959da5;opacity:.4}::ng-deep gd-tab .gd-tab.active .title{color:#3e4e5a!important;opacity:1}"]
                }] }
    ];
    /** @nocollapse */
    AddFilePanelComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: ExceptionMessageService }
    ]; };
    AddFilePanelComponent.propDecorators = {
        panel: [{ type: Input }],
        active: [{ type: Output }],
        urlForUpload: [{ type: Output }],
        cleanPanel: [{ type: Output }],
        fileName: [{ type: Input }]
    };
    return AddFilePanelComponent;
}());
if (false) {
    /** @type {?} */
    AddFilePanelComponent.prototype.panel;
    /** @type {?} */
    AddFilePanelComponent.prototype.active;
    /** @type {?} */
    AddFilePanelComponent.prototype.urlForUpload;
    /** @type {?} */
    AddFilePanelComponent.prototype.cleanPanel;
    /** @type {?} */
    AddFilePanelComponent.prototype.state;
    /** @type {?} */
    AddFilePanelComponent.prototype.fileName;
    /** @type {?} */
    AddFilePanelComponent.prototype.uploadDisabled;
    /**
     * @type {?}
     * @private
     */
    AddFilePanelComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    AddFilePanelComponent.prototype._excMessageService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UploadFilePanelComponent = /** @class */ (function () {
    function UploadFilePanelComponent(_uploadService, _modalService) {
        this._uploadService = _uploadService;
        this._modalService = _modalService;
        this.active = new EventEmitter();
        this.showUploadFile = false;
    }
    /**
     * @return {?}
     */
    UploadFilePanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UploadFilePanelComponent.prototype.openModal = /**
     * @return {?}
     */
    function () {
        this.active.emit(this.panel);
        this._modalService.open(CommonModals.BrowseFiles);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    UploadFilePanelComponent.prototype.dropped = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event) {
            this.active.emit(this.panel);
            this.showUploadFile = false;
        }
    };
    UploadFilePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-upload-file-panel',
                    template: "<div class=\"wrapper gd-drag-n-drop-wrap\" gdDnd (dropped)=\"dropped($event)\" (opening)=\"showUploadFile=$event\" (click)=\"openModal()\">\r\n  <div class=\"init-state-wrapper\">\r\n    <fa-icon class=\"icon\" [icon]=\"['fas', 'folder-open']\"></fa-icon>\r\n    <span class=\"start\">\r\n        Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\r\n        Or drop file here\r\n    </span>\r\n  </div>\r\n  <div *ngIf=\"showUploadFile\" class=\"init-state-dnd-wrapper\">\r\n    <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\r\n    <span class=\"text\">Drop file here to upload</span>\r\n  </div>\r\n</div>\r\n",
                    styles: [":host{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;align-content:center;height:100%;border-bottom:1px solid #ccc}.wrapper{color:#959da5;background-color:#e7e7e7;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;width:100%;height:100%}.icon{font-size:65px;margin-bottom:43px;display:-webkit-box;display:flex;color:#959da5}.start{font-size:15px;text-align:center;color:#959da5}.gd-drag-n-drop-wrap.active{background-color:#fff;position:fixed;top:60px;width:50%;background:rgba(255,255,255,.8)}.gd-drag-n-drop-wrap.active .init-state-wrapper{position:absolute;opacity:.2;top:unset;margin-top:-11px}.gd-drag-n-drop-wrap.active .init-state-dnd-wrapper{top:0;z-index:999;margin-top:-11px}.gd-drag-n-drop-wrap.active .init-state-dnd-wrapper .icon{width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}.gd-drag-n-drop-wrap.active .text{color:#6e6e6e;font-size:14px}.init-state-dnd-wrapper,.init-state-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:250px;height:250px;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.init-state-wrapper{top:-30px;position:relative}"]
                }] }
    ];
    /** @nocollapse */
    UploadFilePanelComponent.ctorParameters = function () { return [
        { type: UploadFilesService },
        { type: ModalService }
    ]; };
    UploadFilePanelComponent.propDecorators = {
        panel: [{ type: Input }],
        active: [{ type: Output }]
    };
    return UploadFilePanelComponent;
}());
if (false) {
    /** @type {?} */
    UploadFilePanelComponent.prototype.panel;
    /** @type {?} */
    UploadFilePanelComponent.prototype.active;
    /** @type {?} */
    UploadFilePanelComponent.prototype.showUploadFile;
    /**
     * @type {?}
     * @private
     */
    UploadFilePanelComponent.prototype._uploadService;
    /**
     * @type {?}
     * @private
     */
    UploadFilePanelComponent.prototype._modalService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComparedPageModel = /** @class */ (function (_super) {
    __extends(ComparedPageModel, _super);
    function ComparedPageModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ComparedPageModel;
}(PageModel));
if (false) {
    /** @type {?} */
    ComparedPageModel.prototype.changes;
}
var CompareResult = /** @class */ (function () {
    function CompareResult() {
    }
    return CompareResult;
}());
if (false) {
    /** @type {?} */
    CompareResult.prototype.changes;
    /** @type {?} */
    CompareResult.prototype.pages;
    /** @type {?} */
    CompareResult.prototype.guid;
}
var ChangeInfo = /** @class */ (function () {
    function ChangeInfo() {
    }
    return ChangeInfo;
}());
if (false) {
    /** @type {?} */
    ChangeInfo.prototype.pageInfo;
    /** @type {?} */
    ChangeInfo.prototype.text;
    /** @type {?} */
    ChangeInfo.prototype.type;
    /** @type {?} */
    ChangeInfo.prototype.box;
    /** @type {?} */
    ChangeInfo.prototype.id;
    /** @type {?} */
    ChangeInfo.prototype.styleChanges;
    /** @type {?} */
    ChangeInfo.prototype.normalized;
    /** @type {?} */
    ChangeInfo.prototype.active;
}
var StyleChange = /** @class */ (function () {
    function StyleChange() {
    }
    return StyleChange;
}());
if (false) {
    /** @type {?} */
    StyleChange.prototype.changedProperty;
    /** @type {?} */
    StyleChange.prototype.newValue;
    /** @type {?} */
    StyleChange.prototype.oldValue;
}
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    return Rectangle;
}());
if (false) {
    /** @type {?} */
    Rectangle.prototype.x;
    /** @type {?} */
    Rectangle.prototype.y;
    /** @type {?} */
    Rectangle.prototype.width;
    /** @type {?} */
    Rectangle.prototype.height;
}
var PageInfo = /** @class */ (function () {
    function PageInfo() {
    }
    return PageInfo;
}());
if (false) {
    /** @type {?} */
    PageInfo.prototype.width;
    /** @type {?} */
    PageInfo.prototype.height;
    /** @type {?} */
    PageInfo.prototype.changes;
    /** @type {?} */
    PageInfo.prototype.pageNumber;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DifferencesService = /** @class */ (function () {
    function DifferencesService() {
        this._activeChange = new BehaviorSubject(null);
        this.activeChange = this._activeChange.asObservable();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    DifferencesService.prototype.setActiveChange = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this._activeChange.next(id);
    };
    DifferencesService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DifferencesService.ctorParameters = function () { return []; };
    /** @nocollapse */ DifferencesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DifferencesService_Factory() { return new DifferencesService(); }, token: DifferencesService, providedIn: "root" });
    return DifferencesService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DifferencesService.prototype._activeChange;
    /** @type {?} */
    DifferencesService.prototype.activeChange;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DifferenceComponent = /** @class */ (function () {
    function DifferenceComponent(changeService) {
        this.changesService = changeService;
    }
    /**
     * @return {?}
     */
    DifferenceComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.changesService.activeChange.subscribe((/**
         * @param {?} activeID
         * @return {?}
         */
        function (activeID) { return _this.active = _this.change.id === activeID; }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DifferenceComponent.prototype.getRgbaColor = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return "rgba(" + value.red + "," + value.green + "," + value.blue + "," + value.alpha + ")";
    };
    DifferenceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-comparison-difference',
                    template: "<div  class=\"gd-difference\" [ngClass]=\"{'active': active}\">\r\n  <div [ngSwitch]=\"change.type\" class=\"gd-difference-title-wrapper\">\r\n    <ng-container *ngSwitchCase='1'>\r\n      <fa-icon class=\"fas fa-pencil-alt\" [icon]=\"['fas','pencil-alt']\"></fa-icon>\r\n      <div class=\"gd-difference-body\">\r\n        <div class=\"gd-difference-title\">Text edited</div>\r\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase='2'>\r\n      <fa-icon class=\"fas fa-arrow-right\" [icon]=\"['fas','arrow-right']\"></fa-icon>\r\n      <div class=\"gd-difference-body\">\r\n        <div class=\"gd-difference-title\">Text added</div>\r\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase='3'>\r\n      <fa-icon class=\"fas fa-times\" [icon]=\"['fas','trash']\"></fa-icon>\r\n      <div class=\"gd-difference-body\">\r\n        <div class=\"gd-difference-title\">Text deleted</div>\r\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase='4'>\r\n      <fa-icon class=\"fas fa-arrow-right\" [icon]=\"['fas','arrow-right']\"></fa-icon>\r\n      <div class=\"gd-difference-body\">\r\n        <div class=\"gd-difference-title\">Text added</div>\r\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase='6'>\r\n      <fa-icon class=\"fas fa-pencil-alt\" [icon]=\"['fas','pencil-alt']\"></fa-icon>\r\n      <div class=\"gd-difference-body\">\r\n        <div class=\"gd-difference-title\">Style changed</div>\r\n        <div class=\"gd-differentce-comment\">\r\n          <ng-container *ngFor=\"let style of change.styleChanges\" [ngSwitch]=\"style.changedProperty\">\r\n            <div *ngSwitchCase=\"'HighlightColor'\">\r\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.oldValue)\"></span>\r\n              &rarr;\r\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.newValue)\"></span>\r\n              <span class=\"property\">Highlight Color</span>\r\n            </div>\r\n            <div *ngSwitchCase=\"'Color'\">\r\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.oldValue)\"></span>\r\n              &rarr;\r\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.newValue)\"></span>\r\n              <span class=\"property\">Color</span>\r\n            </div>\r\n            <div *ngSwitchCase=\"'Size'\">\r\n              {{style.oldValue}} &rarr; {{style.newValue}}\r\n              <span class=\"property\">Font size</span>\r\n            </div>\r\n            <div *ngSwitchCase=\"'Bold'\">\r\n              <span [style.fontWeight]=\"style.oldValue ? 'bold' : ''\">{{change.text}}</span> &rarr; <span [style.fontWeight]=\"style.newValue ? 'bold' : ''\">{{change.text}}</span>\r\n              <span class=\"property\">Bold</span>\r\n            </div>\r\n            <div *ngSwitchCase=\"'Italic'\">\r\n              <span [style.fontStyle]=\"style.oldValue ? 'italic' : ''\">{{change.text}}</span> &rarr; <span [style.fontStyle]=\"style.newValue ? 'italic' : ''\">{{change.text}}</span>\r\n              <span class=\"property\">Italic</span>\r\n            </div>\r\n            <div *ngSwitchCase=\"'cS'\">\r\n              <span [style.textDecoration]=\"style.oldValue === 'SINGLE' ? 'underline' : ''\">{{change.text}}</span> &rarr; <span [style.textDecoration]=\"style.newValue === 'SINGLE' ? 'underline' : ''\">{{change.text}}</span>\r\n              <span class=\"property\">Underline</span>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n    <div class=\"gd-difference-page\">Page {{change.pageInfo.pageNumber + 1}}</div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".gd-difference{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;border-bottom:1px solid #eee;cursor:pointer}.gd-difference.active{background-color:#f2f2f2}.gd-difference:hover{background-color:#e5e5e5}.gd-difference .gd-difference-title-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;align-content:stretch;padding:14px 21px 17px 24px}.gd-difference .gd-difference-title-wrapper fa-icon{font-size:14px}.gd-difference .gd-difference-title-wrapper .fa-arrow-right{color:#16b901}.gd-difference .gd-difference-title-wrapper .fa-pencil-alt{color:#ced600}.gd-difference .gd-difference-title-wrapper .fa-times{color:#b96401}.gd-difference .gd-difference-title-wrapper .gd-difference-body{width:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding-left:24.6px}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-difference-title{color:#222e35;font-size:13px;font-weight:700}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-differentce-comment{color:#959da5;font-size:13px;padding-top:10px;overflow:hidden;text-overflow:ellipsis}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-differentce-comment .color{vertical-align:text-bottom;width:14px;height:14px;display:inline-block;border:1px solid #ccc;border-radius:100%}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-differentce-comment .property{padding-left:1em}.gd-difference .gd-difference-title-wrapper .gd-difference-page{color:rgba(149,157,165,.48);font-size:11px;white-space:nowrap}"]
                }] }
    ];
    /** @nocollapse */
    DifferenceComponent.ctorParameters = function () { return [
        { type: DifferencesService }
    ]; };
    DifferenceComponent.propDecorators = {
        change: [{ type: Input }]
    };
    return DifferenceComponent;
}());
if (false) {
    /** @type {?} */
    DifferenceComponent.prototype.change;
    /** @type {?} */
    DifferenceComponent.prototype.active;
    /**
     * @type {?}
     * @private
     */
    DifferenceComponent.prototype.changesService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $$1 = jquery;
var DifferenceHighlightComponent = /** @class */ (function () {
    function DifferenceHighlightComponent(changeService) {
        this.changesService = changeService;
    }
    /**
     * @return {?}
     */
    DifferenceHighlightComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.changesService.activeChange.subscribe((/**
         * @param {?} activeID
         * @return {?}
         */
        function (activeID) { return _this.active = _this.change.id === activeID; }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DifferenceHighlightComponent.prototype.close = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.changesService.setActiveChange(null);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DifferenceHighlightComponent.prototype.highlight = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.changesService.setActiveChange(id);
    };
    DifferenceHighlightComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-difference-highlight',
                    template: "<div\r\n  class=\"gd-difference-{{change.type}} highlight-difference\"\r\n  (clickOutside)=\"close($event)\"\r\n  [clickOutsideEnabled]=\"active\"\r\n  (click)=\"highlight(change.id)\"\r\n  [ngClass]=\"{'active': active}\"\r\n  [ngStyle]=\"{\r\n    width: change.normalized.width + '%',\r\n    height: change.normalized.height + '%',\r\n    left: change.normalized.x + '%',\r\n    top: change.normalized.y + '%'\r\n  }\"\r\n  data-id=\"{{change.id}}\">\r\n\r\n</div>\r\n\r\n",
                    styles: [".highlight-difference{position:absolute;cursor:pointer;z-index:1}.gd-difference.active,.highlight-difference.active{box-shadow:0 0 0 9999px rgba(0,0,0,.5);z-index:999}.gd-difference-1{background-color:rgba(0,122,255,.4)}.gd-difference-2,.gd-difference-4{background-color:rgba(46,237,0,.4)}.gd-difference-3{background-color:rgba(237,0,0,.4)}.gd-difference-6{background-color:rgba(215,224,0,.4)}"]
                }] }
    ];
    /** @nocollapse */
    DifferenceHighlightComponent.ctorParameters = function () { return [
        { type: DifferencesService }
    ]; };
    DifferenceHighlightComponent.propDecorators = {
        change: [{ type: Input }],
        active: [{ type: Input }]
    };
    return DifferenceHighlightComponent;
}());
if (false) {
    /** @type {?} */
    DifferenceHighlightComponent.prototype.change;
    /** @type {?} */
    DifferenceHighlightComponent.prototype.active;
    /**
     * @type {?}
     * @private
     */
    DifferenceHighlightComponent.prototype.changesService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $$2 = jquery;
var ResultDocumentComponent = /** @class */ (function (_super) {
    __extends(ResultDocumentComponent, _super);
    function ResultDocumentComponent(_elementRef, zoomService, changeService, windowService, navigateService) {
        var _this = _super.call(this, _elementRef, zoomService, windowService, navigateService) || this;
        _this.changesService = changeService;
        return _this;
    }
    /**
     * @return {?}
     */
    ResultDocumentComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.changesService.setActiveChange(null);
    };
    /**
     * @return {?}
     */
    ResultDocumentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ResultDocumentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-result-document',
                    template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\r\n<div id=\"document\" class=\"document\">\r\n  <div class=\"panzoom\">\r\n    <div [ngClass]=\"'page'\" *ngFor=\"let page of file?.pages\"\r\n         [style.height]=\"getDimensionWithUnit(page.height, page.number)\"\r\n         [style.width]=\"getDimensionWithUnit(page.width, page.number)\"\r\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\r\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\r\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\r\n      <div class=\"highlights\">\r\n        <gd-difference-highlight\r\n          *ngFor=\"let change of page?.changes\"\r\n          [change]=\"change\">\r\n        </gd-difference-highlight>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    // @TODO: this is replicated from base component until styles inheritance supported added to angular
                    providers: [ZoomService],
                    viewProviders: [ZoomDirective],
                    styles: [":host{overflow:scroll}.document{background-color:#e7e7e7;width:100%;height:100%;-webkit-transition:.4s;transition:.4s;padding:0;margin:0;position:relative}.page{position:relative;display:inline-block;background-color:#fff;margin:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);-webkit-transition:.3s;transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{-webkit-transform:none;transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}@media (max-width:1037px){.panzoom{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
                }] }
    ];
    /** @nocollapse */
    ResultDocumentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ZoomService },
        { type: DifferencesService },
        { type: WindowService },
        { type: NavigateService }
    ]; };
    return ResultDocumentComponent;
}(DocumentComponent));
if (false) {
    /**
     * @type {?}
     * @private
     */
    ResultDocumentComponent.prototype.changesService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DifferencesComponent = /** @class */ (function () {
    function DifferencesComponent(changeService, navigateService) {
        this.changes = [];
        this.changesService = changeService;
        this.navigateService = navigateService;
    }
    /**
     * @return {?}
     */
    DifferencesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} id
     * @param {?} page
     * @param {?} event
     * @return {?}
     */
    DifferencesComponent.prototype.highlightDifference = /**
     * @param {?} id
     * @param {?} page
     * @param {?} event
     * @return {?}
     */
    function (id, page, event) {
        event.stopPropagation();
        this.changesService.setActiveChange(id);
        this.navigateService.navigateTo(page + 1);
    };
    DifferencesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-differences',
                    template: "<div *ngFor=\"let change of changes; let i = index\" data-id=\"{{i}}\" (click)=\"highlightDifference(change.id,change.pageInfo.pageNumber,$event)\">\r\n  <gd-comparison-difference [change]=\"change\"></gd-comparison-difference>\r\n</div>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DifferencesComponent.ctorParameters = function () { return [
        { type: DifferencesService },
        { type: NavigateService }
    ]; };
    DifferencesComponent.propDecorators = {
        changes: [{ type: Input }]
    };
    return DifferencesComponent;
}());
if (false) {
    /** @type {?} */
    DifferencesComponent.prototype.changes;
    /**
     * @type {?}
     * @private
     */
    DifferencesComponent.prototype.changesService;
    /**
     * @type {?}
     * @private
     */
    DifferencesComponent.prototype.navigateService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} comparisonConfigService
 * @return {?}
 */
function initializeApp(comparisonConfigService) {
    /** @type {?} */
    var result = (/**
     * @return {?}
     */
    function () { return comparisonConfigService.load(); });
    return result;
}
// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
/**
 * @param {?} service
 * @return {?}
 */
function setupLoadingInterceptor(service) {
    return new LoadingMaskInterceptorService(service);
}
var ComparisonModule = /** @class */ (function () {
    function ComparisonModule() {
        library.add(fas, far);
    }
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    ComparisonModule.forRoot = /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    function (apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: ComparisonModule
        };
    };
    ComparisonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ComparisonAppComponent, AddFilePanelComponent, UploadFilePanelComponent, DifferenceComponent, DifferenceHighlightComponent, ResultDocumentComponent, DifferencesComponent],
                    imports: [
                        BrowserModule,
                        CommonComponentsModule,
                        HttpClientModule,
                        FontAwesomeModule,
                        ClickOutsideModule,
                        TranslateModule.forRoot()
                    ],
                    exports: [
                        ComparisonAppComponent,
                        CommonComponentsModule,
                        ResultDocumentComponent,
                        DifferencesComponent
                    ],
                    providers: [
                        ComparisonService,
                        ConfigService,
                        DifferencesService,
                        ComparisonConfigService,
                        {
                            provide: APP_INITIALIZER,
                            useFactory: initializeApp,
                            deps: [ComparisonConfigService],
                            multi: true
                        },
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: ErrorInterceptorService,
                            multi: true
                        },
                        LoadingMaskService,
                        {
                            provide: HTTP_INTERCEPTORS,
                            useFactory: setupLoadingInterceptor,
                            multi: true,
                            deps: [LoadingMaskService]
                        }
                    ]
                },] }
    ];
    /** @nocollapse */
    ComparisonModule.ctorParameters = function () { return []; };
    return ComparisonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ChangeInfo, CompareResult, ComparedPageModel, ComparisonAppComponent, ComparisonConfig, ComparisonConfigService, ComparisonModule, ComparisonService, Files, Highlight, PageInfo, Rectangle, StyleChange, initializeApp, setupLoadingInterceptor, AddFilePanelComponent as ɵa, UploadFilePanelComponent as ɵb, DifferenceComponent as ɵc, DifferencesService as ɵd, DifferenceHighlightComponent as ɵe, ResultDocumentComponent as ɵf, DifferencesComponent as ɵg };
//# sourceMappingURL=groupdocs.examples.angular-comparison.js.map
