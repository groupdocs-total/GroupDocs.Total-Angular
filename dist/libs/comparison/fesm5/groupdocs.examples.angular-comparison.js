import { BrowserModule } from '@angular/platform-browser';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, ElementRef, Input, Output, EventEmitter, NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import 'jquery';
import { Api, ConfigService, UploadFilesService, PagePreloadService, ModalService, TabActivatorService, CommonModals, FileUtil, ExceptionMessageService, PageModel, ZoomService, ZoomDirective, WindowService, DocumentComponent, NavigateService, LoadingMaskInterceptorService, CommonComponentsModule, ErrorInterceptorService, LoadingMaskService } from '@groupdocs.examples.angular/common-components';
import { BehaviorSubject } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { __extends } from 'tslib';
import { ClickOutsideModule } from 'ng-click-outside';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComparisonConfig = /** @class */ (function () {
    function ComparisonConfig() {
    }
    return ComparisonConfig;
}());

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Files = /** @class */ (function () {
    function Files() {
    }
    Files.FIRST = 'first';
    Files.SECOND = 'second';
    return Files;
}());
var Highlight = /** @class */ (function () {
    function Highlight() {
        this.active = false;
    }
    return Highlight;
}());
var ComparisonAppComponent = /** @class */ (function () {
    function ComparisonAppComponent(_comparisonService, configService, uploadFilesService, pagePreloadService, _modalService, _tabActivatorService, _elementRef) {
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
    }
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
            function (change) { return change.pageInfo.id === 0; }));
            _this.result.changes.forEach((/**
             * @param {?} change
             * @return {?}
             */
            function (change) {
                change.id = _this.generateRandomInteger();
                /** @type {?} */
                var zeroBasedId = isZeroBasedPageId ? change.pageInfo.id : change.pageInfo.id - 1;
                change.pageInfo.id = isZeroBasedPageId ? change.pageInfo.id : change.pageInfo.id - 1;
                if (!_this.result.pages[zeroBasedId].changes) {
                    _this.result.pages[zeroBasedId].changes = [];
                }
                _this.result.pages[zeroBasedId].changes.push(change);
                change.normalized = {
                    x: change.box.x * 100 / change.pageInfo.width,
                    y: change.box.y * 100 / change.pageInfo.height,
                    width: change.box.width * 100 / change.pageInfo.width,
                    height: change.box.height * 100 / change.pageInfo.height,
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
                    template: "<!--<gd-loading-mask></gd-loading-mask>-->\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"column\">\n      <div class=\"top-panel\">\n        <gd-logo [logo]=\"'comparison'\" icon=\"copy\"></gd-logo>\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'play'\" [tooltip]=\"'Compare'\" [disabled]=\"!file.get(first) || !file.get(second)\"\n                     (click)=\"compare()\"></gd-button>\n          <gd-button [icon]=\"'download'\" [tooltip]=\"'Download'\" [disabled]=\"!result\" (click)=\"download()\"></gd-button>\n          <div class=\"tabs-wrapper\">\n            <div class=\"tabs\">\n              <gd-tabs>\n                <gd-tab [id]=\"filesTab\" tabTitle=\"Documents\" [icon]=\"'copy'\" [active]=\"true\" [content]=\"false\">\n                </gd-tab>\n                <gd-tab [id]=\"resultTab\" tabTitle=\"Result\" [icon]=\"'poll'\" [disabled]=\"resultTabDisabled\" [content]=\"false\">\n                </gd-tab>\n              </gd-tabs>\n            </div>\n          </div>\n        </gd-top-toolbar>\n      </div>\n      <div class=\"files-panel\" *ngIf=\"activeTab === filesTab\">\n        <div class=\"upload-compare-file\">\n          <gd-add-file-panel class=\"compare-file\"\n                             [fileName]=\"firstFileName\"\n                             [panel]=\"first\"\n                             (active)=\"activePanel = $event\"\n                             (urlForUpload)=\"upload($event)\"\n                             (cleanPanel)=\"clearFile(first)\">\n          </gd-add-file-panel>\n          <gd-upload-file-panel\n                                [panel]=\"first\"\n                                (active)=\"activePanel = $event\"\n                                *ngIf=\"!firstFileName && !loadingFirstPanel\">\n          </gd-upload-file-panel>\n          <div *ngIf=\"loadingFirstPanel\" class=\"loader\">\n            <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n            <span>Loading... Please wait.</span>\n          </div>\n          <gd-document class=\"gd-document\"\n                       *ngIf=\"file.get(first)\"\n                       [file]=\"file.get(first)\"\n                       [mode]=\"false\"\n                       [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\" gdRenderPrint\n                       [htmlMode]=\"false\">\n          </gd-document>\n        </div>\n        <div class=\"upload-compare-file\">\n          <gd-add-file-panel class=\"compare-file\"\n                             [fileName]=\"secondFileName\"\n                             [panel]=\"second\"\n                             (active)=\"activePanel = $event\"\n                             (urlForUpload)=\"upload($event)\"\n                             (cleanPanel)=\"clearFile(second)\">\n          </gd-add-file-panel>\n          <gd-upload-file-panel [panel]=\"second\"\n                                (active)=\"activePanel = $event\"\n                                *ngIf=\"!secondFileName && !loadingSecondPanel\">\n          </gd-upload-file-panel>\n          <div *ngIf=\"loadingSecondPanel\" class=\"loader\">\n            <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n            <span>Loading... Please wait.</span>\n          </div>\n          <gd-document class=\"gd-document\"\n                       *ngIf=\"file.get(second)\"\n                       [file]=\"file.get(second)\"\n                       [mode]=\"false\"\n                       [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\" gdRenderPrint\n                       [htmlMode]=\"false\">\n          </gd-document>\n        </div>\n      </div>\n      <div class=\"result-panel\" *ngIf=\"activeTab === resultTab\">\n        <div  class=\"loader\" *ngIf=\"!result\">\n          <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n          <span>Loading... Please wait.</span>\n        </div>\n        <gd-result-document\n          class=\"gd-document\"\n          *ngIf=\"result\"\n          [file]=\"result\"\n          [mode]=\"false\"\n          [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\"\n          gdRenderPrint\n          [htmlMode]=\"false\"\n          gdScrollable>\n        </gd-result-document>\n      </div>\n    </div>\n    <gd-side-panel (hideSidePanel)=\"hideSidePanel($event)\"\n                   *ngIf=\"result && activeTab === resultTab\"\n                   [title]=\"'Differences'\"\n                   [icon]=\"'info-circle'\">\n      <gd-differences\n        [changes]=\"result.changes\">\n      </gd-differences>\n    </gd-side-panel>\n  </div>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\"\n                         [files]=\"files\"\n                         (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal, activePanel)\">\n  </gd-browse-files-modal>\n  <gd-error-modal></gd-error-modal>\n</div>\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.loader{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.upload-compare-file{height:100%;width:50%;border-right:1px solid #ccc;display:flex;align-content:center;flex-direction:column;text-align:center;flex-grow:0}.open-file-panel{display:flex;width:100%}.files-panel{background-color:#e7e7e7;display:flex;flex-direction:row;width:100%;height:100%}.result-panel{background-color:#e7e7e7;width:100%;height:100%;display:flex;align-content:center;flex-direction:column;justify-content:center;text-align:center}.doc-panel{display:flex;height:inherit}.gd-document{width:100%;height:100%}.top-panel{display:flex;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}.row{display:flex;height:inherit}.column{width:100%}.tabs-wrapper{display:flex;justify-self:flex-end;align-self:flex-end;width:100%;justify-content:flex-end}.tabs{display:flex;margin-right:30px;align-items:flex-end;justify-content:flex-end}@media (max-width:1037px){.files-panel{flex-direction:column}.files-panel .upload-compare-file{width:100%;border-bottom:1px solid #ccc}/deep/ .gd-side-panel-wrapper{height:50%!important;top:inherit!important;bottom:0!important}}"]
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
        { type: ElementRef }
    ]; };
    return ComparisonAppComponent;
}());

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
                    template: "<div class=\"wrapper\">\n  <div class=\"upload-wrapper\" *ngIf=\"isEmpty()\">\n    <gd-button [icon]=\"'arrow-right'\" [tooltip]=\"'Upload file'\" (click)=\"uploadUrl(url.value)\" [disabled]=\"uploadDisabled\" ></gd-button>\n    <input class=\"url-input\" #url (keyup)=\"checkDisabled(url.value)\" (keyup.enter)=\"uploadUrl(url.value)\" placeholder=\"http://\">\n  </div>\n  <fa-icon *ngIf=\"!isEmpty()\" [icon]=\"['fas',getFormatIcon()]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon()\"></fa-icon>\n  <span *ngIf=\"!isEmpty()\" class=\"compare-file-name\">{{fileName}}</span>\n  <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Open file'\" (click)=\"openModal()\" *ngIf=\"isEmpty()\"></gd-button>\n  <gd-button [icon]=\"'times'\" [tooltip]=\"'Close file'\" (click)=\"cleanFile()\" *ngIf=\"!isEmpty()\"></gd-button>\n</div>\n",
                    styles: [":host{border-bottom:1px solid #ccc}.wrapper{height:37px;background-color:#fff;display:flex}.upload-wrapper{display:flex;width:100%}.url-input{border:0;height:37px;width:100%;padding-left:5px;margin:0;padding-top:0;padding-bottom:0;outline:0}.compare-file-name{color:#959da5;margin:8px;width:100%;text-align:left}.ng-fa-icon{color:#959da5;margin:9px 15px 0 13px;font-size:14px}.compare-file{width:100%;border-right:2px solid #ddd}"]
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UploadFilePanelComponent = /** @class */ (function () {
    function UploadFilePanelComponent(_uploadService, _modalService) {
        this._uploadService = _uploadService;
        this._modalService = _modalService;
        this.active = new EventEmitter();
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
        }
    };
    UploadFilePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-upload-file-panel',
                    template: "<div class=\"gd-drag-n-drop-wrap\" id=\"gd-dropZone\" gdDnd (dropped)=\"dropped($event)\">\n  <div class=\"gd-drag-n-drop-icon\">\n    <fa-icon [icon]=\"['far','folder-open']\" size=\"5x\" (click)=\"openModal()\"></fa-icon>\n  </div>\n  <h2>Drop your document here or click to select a file</h2>\n</div>\n",
                    styles: [".gd-drag-n-drop-wrap{height:100%;width:100%;background-color:#e7e7e7;text-align:center;cursor:default;left:1px;display:flex;align-content:center;flex-direction:column;justify-content:center;opacity:.9;z-index:1}.active{background-color:#bababa}.gd-drag-n-drop-wrap h2{color:#959da5;font-size:15px;margin-top:38px}.gd-drag-n-drop-icon{color:#959da5;cursor:pointer}:host{display:flex;justify-content:center;align-items:center;flex-direction:column;align-content:center;height:100%;border-bottom:1px solid #ccc}"]
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
var CompareResult = /** @class */ (function () {
    function CompareResult() {
    }
    return CompareResult;
}());
var ChangeInfo = /** @class */ (function () {
    function ChangeInfo() {
    }
    return ChangeInfo;
}());
var StyleChange = /** @class */ (function () {
    function StyleChange() {
    }
    return StyleChange;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    return Rectangle;
}());
var PageInfo = /** @class */ (function () {
    function PageInfo() {
    }
    return PageInfo;
}());

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
                    template: "<div  class=\"gd-difference\" [ngClass]=\"{'active': active}\">\n  <div [ngSwitch]=\"change.type\" class=\"gd-difference-title-wrapper\">\n    <ng-container *ngSwitchCase='1'>\n      <fa-icon class=\"fas fa-pencil-alt\" [icon]=\"['fas','pencil-alt']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text edited</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='2'>\n      <fa-icon class=\"fas fa-arrow-right\" [icon]=\"['fas','arrow-right']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text added</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='3'>\n      <fa-icon class=\"fas fa-times\" [icon]=\"['fas','trash']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text deleted</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='4'>\n      <fa-icon class=\"fas fa-arrow-right\" [icon]=\"['fas','arrow-right']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text added</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='6'>\n      <fa-icon class=\"fas fa-pencil-alt\" [icon]=\"['fas','pencil-alt']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Style changed</div>\n        <div class=\"gd-differentce-comment\">\n          <ng-container *ngFor=\"let style of change.styleChanges\" [ngSwitch]=\"style.changedProperty\">\n            <div *ngSwitchCase=\"'HighlightColor'\">\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.oldValue)\"></span>\n              &rarr;\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.newValue)\"></span>\n              <span class=\"property\">Highlight Color</span>\n            </div>\n            <div *ngSwitchCase=\"'Color'\">\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.oldValue)\"></span>\n              &rarr;\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.newValue)\"></span>\n              <span class=\"property\">Color</span>\n            </div>\n            <div *ngSwitchCase=\"'Size'\">\n              {{style.oldValue}} &rarr; {{style.newValue}}\n              <span class=\"property\">Font size</span>\n            </div>\n            <div *ngSwitchCase=\"'Bold'\">\n              <span [style.fontWeight]=\"style.oldValue ? 'bold' : ''\">{{change.text}}</span> &rarr; <span [style.fontWeight]=\"style.newValue ? 'bold' : ''\">{{change.text}}</span>\n              <span class=\"property\">Bold</span>\n            </div>\n            <div *ngSwitchCase=\"'Italic'\">\n              <span [style.fontStyle]=\"style.oldValue ? 'italic' : ''\">{{change.text}}</span> &rarr; <span [style.fontStyle]=\"style.newValue ? 'italic' : ''\">{{change.text}}</span>\n              <span class=\"property\">Italic</span>\n            </div>\n            <div *ngSwitchCase=\"'cS'\">\n              <span [style.textDecoration]=\"style.oldValue === 'SINGLE' ? 'underline' : ''\">{{change.text}}</span> &rarr; <span [style.textDecoration]=\"style.newValue === 'SINGLE' ? 'underline' : ''\">{{change.text}}</span>\n              <span class=\"property\">Underline</span>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </ng-container>\n    <div class=\"gd-difference-page\">Page {{change.pageInfo.id + 1}}</div>\n  </div>\n</div>\n",
                    styles: [".gd-difference{flex-flow:row wrap;border-bottom:1px solid #eee;cursor:pointer}.gd-difference.active{background-color:#f2f2f2}.gd-difference:hover{background-color:#e5e5e5}.gd-difference .gd-difference-title-wrapper{display:flex;flex-direction:row;align-content:stretch;padding:15px 15px 20px 20px}.gd-difference .gd-difference-title-wrapper fa-icon{font-size:14px}.gd-difference .gd-difference-title-wrapper .fa-arrow-right{color:#16b901}.gd-difference .gd-difference-title-wrapper .fa-pencil-alt{color:#ced600}.gd-difference .gd-difference-title-wrapper .fa-times{color:#b96401}.gd-difference .gd-difference-title-wrapper .gd-difference-body{width:100%;display:flex;flex-direction:column;padding-left:15px}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-difference-title{color:#222e35;font-size:13px;font-weight:700}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-differentce-comment{color:#959da5;font-size:13px;padding-top:10px;overflow:hidden;text-overflow:ellipsis}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-differentce-comment .color{vertical-align:text-bottom;width:14px;height:14px;display:inline-block;border:1px solid #ccc;border-radius:100%}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-differentce-comment .property{padding-left:1em}.gd-difference .gd-difference-title-wrapper .gd-difference-page{color:rgba(149,157,165,.48);font-size:11px;white-space:nowrap}"]
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
                    template: "<div\n  class=\"gd-difference-{{change.type}} highlight-difference\"\n  (clickOutside)=\"close($event)\"\n  [clickOutsideEnabled]=\"active\"\n  (click)=\"highlight(change.id)\"\n  [ngClass]=\"{'active': active}\"\n  [ngStyle]=\"{\n    width: change.normalized.width + '%',\n    height: change.normalized.height + '%',\n    left: change.normalized.x + '%',\n    top: change.normalized.y + '%'\n  }\"\n  data-id=\"{{change.id}}\">\n\n</div>\n\n",
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ResultDocumentComponent = /** @class */ (function (_super) {
    __extends(ResultDocumentComponent, _super);
    function ResultDocumentComponent(_elementRef, zoomService, changeService, windowService) {
        var _this = _super.call(this, _elementRef, zoomService, windowService) || this;
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
                    template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\">\n  <div class=\"panzoom\">\n    <div [ngClass]=\"'page'\" *ngFor=\"let page of file?.pages\"\n         [style.height]=\"getDimensionWithUnit(page.height)\"\n         [style.width]=\"getDimensionWithUnit(page.width)\"\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\n      <div class=\"highlights\">\n        <gd-difference-highlight\n          *ngFor=\"let change of page?.changes\"\n          [change]=\"change\">\n        </gd-difference-highlight>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    // @TODO: this is replicated from base component until styles inheritance supported added to angular
                    providers: [ZoomService],
                    viewProviders: [ZoomDirective],
                    styles: [":host{overflow:scroll}.document{background-color:#e7e7e7;width:100%;height:100%;transition:.4s;padding:0;margin:0;position:relative}.page{position:relative;display:inline-block;background-color:#fff;margin:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:50% 50% 0;display:flex;justify-content:center;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}@media (max-width:1037px){.document{overflow-x:auto!important}.panzoom{flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
                }] }
    ];
    /** @nocollapse */
    ResultDocumentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ZoomService },
        { type: DifferencesService },
        { type: WindowService }
    ]; };
    return ResultDocumentComponent;
}(DocumentComponent));

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
                    template: "<div *ngFor=\"let change of changes; let i = index\" data-id=\"{{i}}\" (click)=\"highlightDifference(change.id,change.pageInfo.id,$event)\">\n  <gd-comparison-difference [change]=\"change\"></gd-comparison-difference>\n</div>\n",
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
                        ClickOutsideModule
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

export { ChangeInfo, CompareResult, ComparedPageModel, ComparisonAppComponent, ComparisonConfig, ComparisonConfigService, ComparisonModule, ComparisonService, Files, Highlight, PageInfo, Rectangle, StyleChange, initializeApp, setupLoadingInterceptor, AddFilePanelComponent as ɵa, UploadFilePanelComponent as ɵb, DifferenceComponent as ɵc, DifferencesService as ɵd, DifferenceHighlightComponent as ɵe, ResultDocumentComponent as ɵf, DifferencesComponent as ɵg };
//# sourceMappingURL=groupdocs.examples.angular-comparison.js.map
