/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef } from '@angular/core';
import * as jquery from 'jquery';
import { CommonModals, ModalService, PagePreloadService, TabActivatorService, UploadFilesService, PasswordService } from "@groupdocs.examples.angular/common-components";
import { ComparisonConfigService } from "./comparison-config.service";
import { ComparisonService } from "./comparison.service";
/** @type {?} */
var $ = jquery;
var Files = /** @class */ (function () {
    function Files() {
    }
    Files.FIRST = 'first';
    Files.SECOND = 'second';
    return Files;
}());
export { Files };
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
export { Highlight };
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
    /**
     * @return {?}
     */
    ComparisonAppComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var queryString = window.location.search;
        if (queryString) {
            /** @type {?} */
            var urlParams = new URLSearchParams(queryString);
            /** @type {?} */
            var firstFile = urlParams.get(Files.FIRST);
            /** @type {?} */
            var secondFile = urlParams.get(Files.SECOND);
            if (firstFile && secondFile) {
                this.selectFile(firstFile, '', '', Files.FIRST);
                this.selectFile(secondFile, '', '', Files.SECOND);
                this.compare();
                return;
            }
        }
    };
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
                    template: "<!--<gd-loading-mask></gd-loading-mask>-->\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"column\">\n      <div class=\"top-panel\">\n        <gd-logo [logo]=\"'comparison'\" icon=\"copy\"></gd-logo>\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'play'\" [tooltip]=\"'Compare'\" [disabled]=\"!file.get(first) || !file.get(second)\"\n                     (click)=\"compare()\"></gd-button>\n          <gd-button [icon]=\"'download'\" [tooltip]=\"'Download'\" [disabled]=\"!result\" (click)=\"download()\"></gd-button>\n          <div class=\"tabs-wrapper\">\n            <div class=\"tabs\">\n              <gd-tabs>\n                <gd-tab [id]=\"filesTab\" tabTitle=\"Documents\" [icon]=\"'copy'\" [active]=\"true\" [content]=\"false\">\n                </gd-tab>\n                <gd-tab [id]=\"resultTab\" tabTitle=\"Result\" [icon]=\"'poll'\" [disabled]=\"resultTabDisabled\" [content]=\"false\">\n                </gd-tab>\n              </gd-tabs>\n            </div>\n          </div>\n        </gd-top-toolbar>\n      </div>\n      <div class=\"files-panel\" *ngIf=\"activeTab === filesTab\">\n        <div class=\"upload-compare-file\">\n          <gd-add-file-panel class=\"compare-file\"\n                             [fileName]=\"firstFileName\"\n                             [panel]=\"first\"\n                             (active)=\"activePanel = $event\"\n                             (urlForUpload)=\"upload($event)\"\n                             (cleanPanel)=\"clearFile(first)\">\n          </gd-add-file-panel>\n          <gd-upload-file-panel\n                                [panel]=\"first\"\n                                (active)=\"activePanel = $event\"\n                                *ngIf=\"!firstFileName && !loadingFirstPanel\">\n          </gd-upload-file-panel>\n          <div *ngIf=\"loadingFirstPanel\" class=\"loader\">\n            <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n            <span>Loading... Please wait.</span>\n          </div>\n          <gd-document class=\"gd-document\"\n                       *ngIf=\"file.get(first)\"\n                       [file]=\"file.get(first)\"\n                       [mode]=\"false\"\n                       [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\" gdRenderPrint\n                       [htmlMode]=\"false\"\n                       gdScrollable>\n          </gd-document>\n        </div>\n        <div class=\"upload-compare-file\">\n          <gd-add-file-panel class=\"compare-file\"\n                             [fileName]=\"secondFileName\"\n                             [panel]=\"second\"\n                             (active)=\"activePanel = $event\"\n                             (urlForUpload)=\"upload($event)\"\n                             (cleanPanel)=\"clearFile(second)\">\n          </gd-add-file-panel>\n          <gd-upload-file-panel [panel]=\"second\"\n                                (active)=\"activePanel = $event\"\n                                *ngIf=\"!secondFileName && !loadingSecondPanel\">\n          </gd-upload-file-panel>\n          <div *ngIf=\"loadingSecondPanel\" class=\"loader\">\n            <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n            <span>Loading... Please wait.</span>\n          </div>\n          <gd-document class=\"gd-document\"\n                       *ngIf=\"file.get(second)\"\n                       [file]=\"file.get(second)\"\n                       [mode]=\"false\"\n                       [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\" gdRenderPrint\n                       [htmlMode]=\"false\"\n                       gdScrollable>\n          </gd-document>\n        </div>\n      </div>\n      <div class=\"result-panel\" *ngIf=\"activeTab === resultTab\">\n        <div  class=\"loader\" *ngIf=\"!result\">\n          <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n          <span>Loading... Please wait.</span>\n        </div>\n        <gd-result-document\n          class=\"gd-document\"\n          *ngIf=\"result\"\n          [file]=\"result\"\n          [mode]=\"false\"\n          [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\"\n          gdRenderPrint\n          [htmlMode]=\"false\"\n          gdScrollable>\n        </gd-result-document>\n      </div>\n    </div>\n    <gd-side-panel (hideSidePanel)=\"hideSidePanel($event)\"\n                   *ngIf=\"result && activeTab === resultTab\"\n                   [title]=\"'Differences'\"\n                   [saveable]=\"false\"\n                   [icon]=\"'info-circle'\">\n      <gd-differences\n        [changes]=\"result.changes\">\n      </gd-differences>\n    </gd-side-panel>\n  </div>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\"\n                         [files]=\"files\"\n                         (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal, activePanel)\"\n                         [uploadConfig]=\"uploadConfig\">\n  </gd-browse-files-modal>\n  <gd-password-required></gd-password-required>\n  <gd-error-modal></gd-error-modal>\n</div>\n",
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
export { ComparisonAppComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyaXNvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvY29tcGFyaXNvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQ0wsWUFBWSxFQUlaLFlBQVksRUFBYSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQ3RHLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7O0lBSWpELENBQUMsR0FBRyxNQUFNO0FBRWhCO0lBQUE7SUFHQSxDQUFDO0lBRlEsV0FBSyxHQUFHLE9BQU8sQ0FBQztJQUNoQixZQUFNLEdBQUcsUUFBUSxDQUFDO0lBQzNCLFlBQUM7Q0FBQSxBQUhELElBR0M7U0FIWSxLQUFLOzs7SUFDaEIsWUFBdUI7O0lBQ3ZCLGFBQXlCOztBQUczQjtJQUFBO1FBRUUsV0FBTSxHQUFHLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLHVCQUFXOztJQUNYLDJCQUFlOztBQUdqQjtJQXlCRSxnQ0FBb0Isa0JBQXFDLEVBQ3JDLGFBQXNDLEVBQzlDLGtCQUFzQyxFQUN0QyxrQkFBc0MsRUFDOUIsYUFBMkIsRUFDM0Isb0JBQXlDLEVBQ3pDLFdBQW9DLEVBQzVDLGVBQWdDO1FBUDVDLGlCQThDQztRQTlDbUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxrQkFBYSxHQUFiLGFB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RzlDLCtDQUFtQzs7Ozs7SUFDbkMsc0RBQWlEOzs7OztJQUNqRCw2Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHtcbiAgQ29tbW9uTW9kYWxzLFxuICBGaWxlQ3JlZGVudGlhbHMsXG4gIEZpbGVEZXNjcmlwdGlvbixcbiAgRmlsZU1vZGVsLFxuICBNb2RhbFNlcnZpY2UsIFBhZ2VNb2RlbCwgUGFnZVByZWxvYWRTZXJ2aWNlLCBUYWJBY3RpdmF0b3JTZXJ2aWNlLCBVcGxvYWRGaWxlc1NlcnZpY2UsIFBhc3N3b3JkU2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge0NvbXBhcmlzb25Db25maWdTZXJ2aWNlfSBmcm9tIFwiLi9jb21wYXJpc29uLWNvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbXBhcmlzb25TZXJ2aWNlfSBmcm9tIFwiLi9jb21wYXJpc29uLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29tcGFyaXNvbkNvbmZpZ30gZnJvbSBcIi4vY29tcGFyaXNvbi1jb25maWdcIjtcbmltcG9ydCB7Q29tcGFyZVJlc3VsdH0gZnJvbSBcIi4vbW9kZWxzXCI7XG5cbmNvbnN0ICQgPSBqcXVlcnk7XG5cbmV4cG9ydCBjbGFzcyBGaWxlcyB7XG4gIHN0YXRpYyBGSVJTVCA9ICdmaXJzdCc7XG4gIHN0YXRpYyBTRUNPTkQgPSAnc2Vjb25kJztcbn1cblxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodCB7XG4gIGlkOiBzdHJpbmc7XG4gIGFjdGl2ZSA9IGZhbHNlO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1jb21wYXJpc29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBhcmlzb24tYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tcGFyaXNvbi1hcHAuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb21wYXJpc29uQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZmlsZXM6IEZpbGVNb2RlbFtdID0gW107XG4gIGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XG4gIGNyZWRlbnRpYWxzOiBNYXA8c3RyaW5nLCBGaWxlQ3JlZGVudGlhbHM+ID0gbmV3IE1hcDxzdHJpbmcsIEZpbGVDcmVkZW50aWFscz4oKTtcbiAgZmlsZTogTWFwPHN0cmluZywgRmlsZURlc2NyaXB0aW9uPiA9IG5ldyBNYXA8c3RyaW5nLCBGaWxlRGVzY3JpcHRpb24+KCk7XG4gIGNvbXBhcmlzb25Db25maWc6IENvbXBhcmlzb25Db25maWc7XG4gIGFjdGl2ZVBhbmVsOiBzdHJpbmc7XG4gIGZpcnN0ID0gRmlsZXMuRklSU1Q7XG4gIHNlY29uZCA9IEZpbGVzLlNFQ09ORDtcbiAgZmlyc3RGaWxlTmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBzZWNvbmRGaWxlTmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBsb2FkaW5nRmlyc3RQYW5lbCA9IGZhbHNlO1xuICBsb2FkaW5nU2Vjb25kUGFuZWwgPSBmYWxzZTtcbiAgY291bnRQYWdlcyA9IDA7XG4gIHJlc3VsdDogQ29tcGFyZVJlc3VsdDtcbiAgZmlsZXNUYWIgPSAnZmlsZXMnO1xuICByZXN1bHRUYWIgPSAncmVzdWx0JztcbiAgYWN0aXZlVGFiID0gdGhpcy5maWxlc1RhYjtcbiAgcmVzdWx0VGFiRGlzYWJsZWQgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbXBhcmlzb25TZXJ2aWNlOiBDb21wYXJpc29uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb21wYXJpc29uQ29uZmlnU2VydmljZSxcbiAgICAgICAgICAgICAgdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHBhZ2VQcmVsb2FkU2VydmljZTogUGFnZVByZWxvYWRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdGFiQWN0aXZhdG9yU2VydmljZTogVGFiQWN0aXZhdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHBhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlKSB7XG4gICAgY29uZmlnU2VydmljZS51cGRhdGVkQ29uZmlnLnN1YnNjcmliZSgoY29uZmlnKSA9PiB7XG4gICAgICB0aGlzLmNvbXBhcmlzb25Db25maWcgPSBjb25maWc7XG4gICAgfSk7XG5cbiAgICBwYWdlUHJlbG9hZFNlcnZpY2UuY2hlY2tQcmVsb2FkLnN1YnNjcmliZSgocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy5jb21wYXJpc29uQ29uZmlnLnByZWxvYWRSZXN1bHRQYWdlQ291bnQgIT09IDApIHtcbiAgICAgICAgdGhpcy5jaGVja1ByZWxvYWQodGhpcy5maXJzdCwgcGFnZSk7XG4gICAgICAgIHRoaXMuY2hlY2tQcmVsb2FkKHRoaXMuc2Vjb25kLCBwYWdlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlID0gdGhpcy5hY3RpdmVQYW5lbDtcbiAgICAgIHRoaXMuc2V0TG9hZGluZyhhY3RpdmUsIHRydWUpO1xuICAgICAgaWYgKHVwbG9hZHMpIHtcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHVwbG9hZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLl9jb21wYXJpc29uU2VydmljZS51cGxvYWQodXBsb2Fkcy5pdGVtKGkpLCAnJywgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdldEZpbGUob2JqLmd1aWQsICcnLCBhY3RpdmUpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfdGFiQWN0aXZhdG9yU2VydmljZS5hY3RpdmVUYWJDaGFuZ2Uuc3Vic2NyaWJlKCh0YWJJZDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9IHRhYklkO1xuICAgIH0pO1xuXG4gICAgcGFzc3dvcmRTZXJ2aWNlLnBhc3NDaGFuZ2Uuc3Vic2NyaWJlKChwYXNzOiBzdHJpbmcpID0+IHtcbiAgICAgIGxldCBhY3RpdmVQYW5lbEZpbGVHdWlkID0gXCJcIjtcbiAgICAgIGlmICh0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLmZpcnN0KSkge1xuICAgICAgICBhY3RpdmVQYW5lbEZpbGVHdWlkID0gdGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5maXJzdCkuZ3VpZDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5zZWNvbmQpKSB7XG4gICAgICAgIGFjdGl2ZVBhbmVsRmlsZUd1aWQgPSB0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLnNlY29uZCkuZ3VpZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0RmlsZShhY3RpdmVQYW5lbEZpbGVHdWlkLCBwYXNzLCBDb21tb25Nb2RhbHMuUGFzc3dvcmRSZXF1aXJlZCwgdGhpcy5hY3RpdmVQYW5lbCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgaWYgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcblxuICAgICAgY29uc3QgZmlyc3RGaWxlID0gdXJsUGFyYW1zLmdldChGaWxlcy5GSVJTVCk7XG4gICAgICBjb25zdCBzZWNvbmRGaWxlID0gdXJsUGFyYW1zLmdldChGaWxlcy5TRUNPTkQpO1xuICAgICAgaWYoZmlyc3RGaWxlICYmIHNlY29uZEZpbGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RGaWxlKGZpcnN0RmlsZSwgJycsICcnLCBGaWxlcy5GSVJTVCk7XG4gICAgICAgIHRoaXMuc2VsZWN0RmlsZShzZWNvbmRGaWxlLCAnJywgJycsIEZpbGVzLlNFQ09ORCk7XG4gICAgICAgIHRoaXMuY29tcGFyZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJpc29uQ29uZmlnID8gdGhpcy5jb21wYXJpc29uQ29uZmlnLnVwbG9hZCA6IHRydWU7XG4gIH1cblxuICBwcml2YXRlIHNldExvYWRpbmcocGFuZWw6IHN0cmluZywgZmxhZzogYm9vbGVhbikge1xuICAgIGlmIChwYW5lbCA9PT0gdGhpcy5maXJzdCkge1xuICAgICAgdGhpcy5sb2FkaW5nRmlyc3RQYW5lbCA9IGZsYWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZGluZ1NlY29uZFBhbmVsID0gZmxhZztcbiAgICB9XG4gIH1cblxuICBnZXQgcmV3cml0ZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJpc29uQ29uZmlnID8gdGhpcy5jb21wYXJpc29uQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xuICB9XG5cbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29tcGFyaXNvblNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRmlsZU1vZGVsW10pID0+IHtcbiAgICAgIGxldCBuYW1lRXh0OiBzdHJpbmc7XG4gICAgICBpZiAodGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5maXJzdCkpIHtcbiAgICAgICAgbmFtZUV4dCA9IHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuZmlyc3QpLmd1aWQuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5zZWNvbmQpKSB7XG4gICAgICAgIG5hbWVFeHQgPSB0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLnNlY29uZCkuZ3VpZC5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmFtZUV4dCkge1xuICAgICAgICBmaWxlcyA9IGZpbGVzLmZpbHRlcihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUuZGlyZWN0b3J5IHx8IHZhbHVlLmd1aWQuc3BsaXQoJy4nKS5wb3AoKSA9PT0gbmFtZUV4dDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW107XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBtb2RhbElkOiBzdHJpbmcsIHBhcmFtOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNldExvYWRpbmcocGFyYW0sIHRydWUpO1xuICAgIHRoaXMuZ2V0RmlsZSgkZXZlbnQsIHBhc3N3b3JkLCBwYXJhbSk7XG4gICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShtb2RhbElkKTtcbiAgICB0aGlzLmNsZWFyRGF0YShwYXJhbSk7XG4gIH1cblxuICBwcml2YXRlIGdldEZpbGUoJGV2ZW50OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIHBhcmFtOiBzdHJpbmcpIHtcbiAgICBjb25zdCBjcmVkZW50aWFscyA9IHtndWlkOiAkZXZlbnQsIHBhc3N3b3JkOiBwYXNzd29yZH07XG4gICAgdGhpcy5jcmVkZW50aWFscy5zZXQocGFyYW0sIGNyZWRlbnRpYWxzKTtcbiAgICB0aGlzLl9jb21wYXJpc29uU2VydmljZS5sb2FkRmlsZShjcmVkZW50aWFscykuc3Vic2NyaWJlKChmaWxlOiBGaWxlRGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgdGhpcy5maWxlLnNldChwYXJhbSwgZmlsZSk7XG4gICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgY29uc3QgcHJlbG9hZFJlc3VsdFBhZ2VDb3VudCA9IHRoaXMuY29tcGFyaXNvbkNvbmZpZy5wcmVsb2FkUmVzdWx0UGFnZUNvdW50O1xuICAgICAgICAgIHRoaXMuY291bnRQYWdlcyA9IGZpbGUucGFnZXMgPyBmaWxlLnBhZ2VzLmxlbmd0aCA6IDA7XG4gICAgICAgICAgaWYgKHByZWxvYWRSZXN1bHRQYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnByZWxvYWRQYWdlcyhwYXJhbSwgMSwgcHJlbG9hZFJlc3VsdFBhZ2VDb3VudCA+IHRoaXMuY291bnRQYWdlcyA/IHRoaXMuY291bnRQYWdlcyA6IHByZWxvYWRSZXN1bHRQYWdlQ291bnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUZpbGVOYW1lcygpO1xuICAgICAgICB0aGlzLnNldExvYWRpbmcocGFyYW0sIGZhbHNlKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY2xlYXJGaWxlKHBhcmFtOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNsZWFyRGF0YShwYXJhbSk7XG4gICAgdGhpcy5jcmVkZW50aWFscy5kZWxldGUocGFyYW0pO1xuICAgIHRoaXMucmVzdWx0ID0gbnVsbDtcbiAgICB0aGlzLnJlc3VsdFRhYkRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLl90YWJBY3RpdmF0b3JTZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYih0aGlzLmZpbGVzVGFiKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJEYXRhKHBhcmFtKSB7XG4gICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5zaXplKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZmlsZS5kZWxldGUocGFyYW0pO1xuICAgIGlmIChwYXJhbSA9PT0gdGhpcy5maXJzdCkge1xuICAgICAgdGhpcy5maXJzdEZpbGVOYW1lID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlY29uZEZpbGVOYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByZWxvYWRQYWdlcyhwYXJhbTogc3RyaW5nLCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgdGhpcy5fY29tcGFyaXNvblNlcnZpY2UubG9hZFBhZ2UodGhpcy5jcmVkZW50aWFscy5nZXQocGFyYW0pLCBpKS5zdWJzY3JpYmUoKHBhZ2U6IFBhZ2VNb2RlbCkgPT4ge1xuICAgICAgICB0aGlzLmZpbGUuZ2V0KHBhcmFtKS5wYWdlc1tpIC0gMV0gPSBwYWdlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5hY3RpdmVQYW5lbDtcbiAgICB0aGlzLl9jb21wYXJpc29uU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcbiAgICAgIHRoaXMuZ2V0RmlsZShvYmouZ3VpZCwgJycsIGFjdGl2ZSk7XG4gICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVGaWxlTmFtZXMoKSB7XG4gICAgdGhpcy5maXJzdEZpbGVOYW1lID0gdGhpcy5nZXRGaXJzdEZpbGVOYW1lKCk7XG4gICAgdGhpcy5zZWNvbmRGaWxlTmFtZSA9IHRoaXMuZ2V0U2Vjb25kRmlsZU5hbWUoKTtcbiAgfVxuXG4gIGdldFNlY29uZEZpbGVOYW1lKCkge1xuICAgIGNvbnN0IGZpbGVDcmVkZW50aWFscyA9IHRoaXMuY3JlZGVudGlhbHMgPyB0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLnNlY29uZCkgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIGZpbGVDcmVkZW50aWFscyA/IGZpbGVDcmVkZW50aWFscy5ndWlkLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKSA6ICcnO1xuICB9XG5cbiAgZ2V0Rmlyc3RGaWxlTmFtZSgpIHtcbiAgICBjb25zdCBmaWxlQ3JlZGVudGlhbHMgPSB0aGlzLmNyZWRlbnRpYWxzID8gdGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5maXJzdCkgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIGZpbGVDcmVkZW50aWFscyA/IGZpbGVDcmVkZW50aWFscy5ndWlkLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKSA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1ByZWxvYWQocGFuZWw6IHN0cmluZywgcGFnZTogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLmZpbGUuZ2V0KHBhbmVsKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGZvciAobGV0IGkgPSBwYWdlOyBpIDwgcGFnZSArIDI7IGkrKykge1xuICAgICAgaWYgKGkgPiAwICYmIGkgPD0gdGhpcy5jb3VudFBhZ2VzICYmICF0aGlzLmZpbGUuZ2V0KHBhbmVsKS5wYWdlc1tpIC0gMV0uZGF0YSkge1xuICAgICAgICB0aGlzLnByZWxvYWRQYWdlcyhwYW5lbCwgaSwgaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcGFyZSgpIHtcbiAgICBpZiAodGhpcy5jcmVkZW50aWFscy5zaXplICE9PSAyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVzdWx0VGFiRGlzYWJsZWQgPSBmYWxzZTtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBhcnIucHVzaCh0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLmZpcnN0KSk7XG4gICAgYXJyLnB1c2godGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5zZWNvbmQpKTtcbiAgICB0aGlzLl9jb21wYXJpc29uU2VydmljZS5jb21wYXJlKGFycikuc3Vic2NyaWJlKChyZXN1bHQ6IENvbXBhcmVSZXN1bHQpID0+IHtcbiAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xuXG4gICAgICBjb25zdCBpc1plcm9CYXNlZFBhZ2VJZCA9IHRoaXMucmVzdWx0LmNoYW5nZXMuZmluZCgoY2hhbmdlKSA9PiBjaGFuZ2UucGFnZUluZm8ucGFnZU51bWJlciA9PT0gMCk7XG5cbiAgICAgIHRoaXMucmVzdWx0LmNoYW5nZXMuZm9yRWFjaCggKGNoYW5nZSkgPT4ge1xuICAgICAgICBjaGFuZ2UuaWQgPSB0aGlzLmdlbmVyYXRlUmFuZG9tSW50ZWdlcigpO1xuICAgICAgICBjb25zdCB6ZXJvQmFzZWRJZCA9IGlzWmVyb0Jhc2VkUGFnZUlkID8gY2hhbmdlLnBhZ2VJbmZvLnBhZ2VOdW1iZXIgOiBjaGFuZ2UucGFnZUluZm8ucGFnZU51bWJlciAtIDE7XG4gICAgICAgIGNoYW5nZS5wYWdlSW5mby5wYWdlTnVtYmVyID0gaXNaZXJvQmFzZWRQYWdlSWQgPyBjaGFuZ2UucGFnZUluZm8ucGFnZU51bWJlciA6IGNoYW5nZS5wYWdlSW5mby5wYWdlTnVtYmVyIC0gMTtcbiAgICAgICAgaWYoIXRoaXMucmVzdWx0LnBhZ2VzW3plcm9CYXNlZElkXS5jaGFuZ2VzKXtcbiAgICAgICAgICB0aGlzLnJlc3VsdC5wYWdlc1t6ZXJvQmFzZWRJZF0uY2hhbmdlcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0LnBhZ2VzW3plcm9CYXNlZElkXS5jaGFuZ2VzLnB1c2goY2hhbmdlKTtcbiAgICAgICAgY2hhbmdlLm5vcm1hbGl6ZWQgPSB7XG4gICAgICAgICAgeCA6IHRoaXMucHhUb1B0KGNoYW5nZS5ib3gueCkgKiAxMDAgLyBjaGFuZ2UucGFnZUluZm8ud2lkdGgsXG4gICAgICAgICAgeSA6IHRoaXMucHhUb1B0KGNoYW5nZS5ib3gueSkgKiAxMDAgLyBjaGFuZ2UucGFnZUluZm8uaGVpZ2h0LFxuICAgICAgICAgIHdpZHRoOiB0aGlzLnB4VG9QdChjaGFuZ2UuYm94LndpZHRoKSAqIDEwMCAvIGNoYW5nZS5wYWdlSW5mby53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMucHhUb1B0KGNoYW5nZS5ib3guaGVpZ2h0KSAqIDEwMCAvIGNoYW5nZS5wYWdlSW5mby5oZWlnaHQsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9LCAoZXJyID0+IHtcbiAgICAgIHRoaXMucmVzdWx0VGFiRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fdGFiQWN0aXZhdG9yU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIodGhpcy5maWxlc1RhYik7XG4gICAgfSkpO1xuICAgIHRoaXMuX3RhYkFjdGl2YXRvclNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKHRoaXMucmVzdWx0VGFiKTtcbiAgfVxuXG4gIHB4VG9QdChweDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHB4ICogNzIgLyA5NjtcbiAgfVxuXG4gIGdlbmVyYXRlUmFuZG9tSW50ZWdlcigpIHtcbiAgICBmdW5jdGlvbiBfcDgocykge1xuICAgICAgICBjb25zdCBwID0gKE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpICsgXCIwMDAwMDAwMDBcIikuc3Vic3RyKDIsIDgpO1xuICAgICAgICByZXR1cm4gcyA/IFwiLVwiICsgcC5zdWJzdHIoMCwgNCkgKyBcIi1cIiArIHAuc3Vic3RyKDQsIDQpIDogcDtcbiAgICB9XG4gICAgcmV0dXJuIF9wOChudWxsKSArIF9wOCh0cnVlKSArIF9wOCh0cnVlKSArIF9wOChudWxsKTtcbiAgfVxuXG4gIGRvd25sb2FkKCkge1xuICAgIGlmICghdGhpcy5yZXN1bHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3JlZGVudGlhbHMgPSB7J2d1aWQnOiB0aGlzLnJlc3VsdC5ndWlkLCAncGFzc3dvcmQnOiAnJ307XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLl9jb21wYXJpc29uU2VydmljZS5nZXREb3dubG9hZFVybChjcmVkZW50aWFscykpO1xuICB9XG5cbiAgaGlkZVNpZGVQYW5lbCgkZXZlbnQpIHtcbiAgICB0aGlzLmFjdGl2ZVRhYiA9ICRldmVudCA/IHRoaXMuZmlsZXNUYWIgOiB0aGlzLnJlc3VsdFRhYjtcbiAgICB0aGlzLl90YWJBY3RpdmF0b3JTZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYih0aGlzLmZpbGVzVGFiKTtcbiAgfVxufVxuIl19