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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyaXNvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvY29tcGFyaXNvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQ0wsWUFBWSxFQUlaLFlBQVksRUFBYSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQ3RHLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7O0lBSWpELENBQUMsR0FBRyxNQUFNO0FBRWhCO0lBQUE7SUFHQSxDQUFDO0lBRlEsV0FBSyxHQUFHLE9BQU8sQ0FBQztJQUNoQixZQUFNLEdBQUcsUUFBUSxDQUFDO0lBQzNCLFlBQUM7Q0FBQSxBQUhELElBR0M7U0FIWSxLQUFLOzs7SUFDaEIsWUFBdUI7O0lBQ3ZCLGFBQXlCOztBQUczQjtJQUFBO1FBRUUsV0FBTSxHQUFHLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLHVCQUFXOztJQUNYLDJCQUFlOztBQUdqQjtJQXlCRSxnQ0FBb0Isa0JBQXFDLEVBQ3JDLGFBQXNDLEVBQzlDLGtCQUFzQyxFQUN0QyxrQkFBc0MsRUFDOUIsYUFBMkIsRUFDM0Isb0JBQXlDLEVBQ3pDLFdBQW9DLEVBQzVDLGVBQWdDO1FBUDVDLGlCQThDQztRQTlDbUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxrQkFBYSxHQUFiLGFB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a0I7Z0JBQTNELGtCQUFrQjtnQkFBM0MsWUFBWTtnQkFBaUMsbUJBQW1CO2dCQVAvQyxVQUFVO2dCQU8yRCxlQUFlOztJQWlSdkcsNkJBQUM7Q0FBQSxBQTlQRCxJQThQQztTQXpQWSxzQkFBc0I7OztJQUNqQyx1Q0FBd0I7O0lBQ3hCLGtEQUE0Qzs7SUFDNUMsNkNBQStFOztJQUMvRSxzQ0FBd0U7O0lBQ3hFLGtEQUFtQzs7SUFDbkMsNkNBQW9COztJQUNwQix1Q0FBb0I7O0lBQ3BCLHdDQUFzQjs7SUFDdEIsK0NBQWtDOztJQUNsQyxnREFBbUM7O0lBQ25DLG1EQUEwQjs7SUFDMUIsb0RBQTJCOztJQUMzQiw0Q0FBZTs7SUFDZix3Q0FBc0I7O0lBQ3RCLDBDQUFtQjs7SUFDbkIsMkNBQXFCOztJQUNyQiwyQ0FBMEI7O0lBQzFCLG1EQUF5Qjs7Ozs7SUFFYixvREFBNkM7Ozs7O0lBQzdDLCtDQUE4Qzs7Ozs7SUFHOUMsK0NBQW1DOzs7OztJQUNuQyxzREFBaUQ7Ozs7O0lBQ2pELDZDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHtcbiAgQ29tbW9uTW9kYWxzLFxuICBGaWxlQ3JlZGVudGlhbHMsXG4gIEZpbGVEZXNjcmlwdGlvbixcbiAgRmlsZU1vZGVsLFxuICBNb2RhbFNlcnZpY2UsIFBhZ2VNb2RlbCwgUGFnZVByZWxvYWRTZXJ2aWNlLCBUYWJBY3RpdmF0b3JTZXJ2aWNlLCBVcGxvYWRGaWxlc1NlcnZpY2UsIFBhc3N3b3JkU2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge0NvbXBhcmlzb25Db25maWdTZXJ2aWNlfSBmcm9tIFwiLi9jb21wYXJpc29uLWNvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbXBhcmlzb25TZXJ2aWNlfSBmcm9tIFwiLi9jb21wYXJpc29uLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29tcGFyaXNvbkNvbmZpZ30gZnJvbSBcIi4vY29tcGFyaXNvbi1jb25maWdcIjtcbmltcG9ydCB7Q29tcGFyZVJlc3VsdH0gZnJvbSBcIi4vbW9kZWxzXCI7XG5cbmNvbnN0ICQgPSBqcXVlcnk7XG5cbmV4cG9ydCBjbGFzcyBGaWxlcyB7XG4gIHN0YXRpYyBGSVJTVCA9ICdmaXJzdCc7XG4gIHN0YXRpYyBTRUNPTkQgPSAnc2Vjb25kJztcbn1cblxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodCB7XG4gIGlkOiBzdHJpbmc7XG4gIGFjdGl2ZSA9IGZhbHNlO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1jb21wYXJpc29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBhcmlzb24tYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tcGFyaXNvbi1hcHAuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb21wYXJpc29uQXBwQ29tcG9uZW50IHtcbiAgZmlsZXM6IEZpbGVNb2RlbFtdID0gW107XG4gIGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XG4gIGNyZWRlbnRpYWxzOiBNYXA8c3RyaW5nLCBGaWxlQ3JlZGVudGlhbHM+ID0gbmV3IE1hcDxzdHJpbmcsIEZpbGVDcmVkZW50aWFscz4oKTtcbiAgZmlsZTogTWFwPHN0cmluZywgRmlsZURlc2NyaXB0aW9uPiA9IG5ldyBNYXA8c3RyaW5nLCBGaWxlRGVzY3JpcHRpb24+KCk7XG4gIGNvbXBhcmlzb25Db25maWc6IENvbXBhcmlzb25Db25maWc7XG4gIGFjdGl2ZVBhbmVsOiBzdHJpbmc7XG4gIGZpcnN0ID0gRmlsZXMuRklSU1Q7XG4gIHNlY29uZCA9IEZpbGVzLlNFQ09ORDtcbiAgZmlyc3RGaWxlTmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBzZWNvbmRGaWxlTmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBsb2FkaW5nRmlyc3RQYW5lbCA9IGZhbHNlO1xuICBsb2FkaW5nU2Vjb25kUGFuZWwgPSBmYWxzZTtcbiAgY291bnRQYWdlcyA9IDA7XG4gIHJlc3VsdDogQ29tcGFyZVJlc3VsdDtcbiAgZmlsZXNUYWIgPSAnZmlsZXMnO1xuICByZXN1bHRUYWIgPSAncmVzdWx0JztcbiAgYWN0aXZlVGFiID0gdGhpcy5maWxlc1RhYjtcbiAgcmVzdWx0VGFiRGlzYWJsZWQgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbXBhcmlzb25TZXJ2aWNlOiBDb21wYXJpc29uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb21wYXJpc29uQ29uZmlnU2VydmljZSxcbiAgICAgICAgICAgICAgdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHBhZ2VQcmVsb2FkU2VydmljZTogUGFnZVByZWxvYWRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdGFiQWN0aXZhdG9yU2VydmljZTogVGFiQWN0aXZhdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHBhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlKSB7XG4gICAgY29uZmlnU2VydmljZS51cGRhdGVkQ29uZmlnLnN1YnNjcmliZSgoY29uZmlnKSA9PiB7XG4gICAgICB0aGlzLmNvbXBhcmlzb25Db25maWcgPSBjb25maWc7XG4gICAgfSk7XG5cbiAgICBwYWdlUHJlbG9hZFNlcnZpY2UuY2hlY2tQcmVsb2FkLnN1YnNjcmliZSgocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy5jb21wYXJpc29uQ29uZmlnLnByZWxvYWRSZXN1bHRQYWdlQ291bnQgIT09IDApIHtcbiAgICAgICAgdGhpcy5jaGVja1ByZWxvYWQodGhpcy5maXJzdCwgcGFnZSk7XG4gICAgICAgIHRoaXMuY2hlY2tQcmVsb2FkKHRoaXMuc2Vjb25kLCBwYWdlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlID0gdGhpcy5hY3RpdmVQYW5lbDtcbiAgICAgIHRoaXMuc2V0TG9hZGluZyhhY3RpdmUsIHRydWUpO1xuICAgICAgaWYgKHVwbG9hZHMpIHtcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHVwbG9hZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLl9jb21wYXJpc29uU2VydmljZS51cGxvYWQodXBsb2Fkcy5pdGVtKGkpLCAnJywgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdldEZpbGUob2JqLmd1aWQsICcnLCBhY3RpdmUpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfdGFiQWN0aXZhdG9yU2VydmljZS5hY3RpdmVUYWJDaGFuZ2Uuc3Vic2NyaWJlKCh0YWJJZDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9IHRhYklkO1xuICAgIH0pO1xuXG4gICAgcGFzc3dvcmRTZXJ2aWNlLnBhc3NDaGFuZ2Uuc3Vic2NyaWJlKChwYXNzOiBzdHJpbmcpID0+IHtcbiAgICAgIGxldCBhY3RpdmVQYW5lbEZpbGVHdWlkID0gXCJcIjtcbiAgICAgIGlmICh0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLmZpcnN0KSkge1xuICAgICAgICBhY3RpdmVQYW5lbEZpbGVHdWlkID0gdGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5maXJzdCkuZ3VpZDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5zZWNvbmQpKSB7XG4gICAgICAgIGFjdGl2ZVBhbmVsRmlsZUd1aWQgPSB0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLnNlY29uZCkuZ3VpZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0RmlsZShhY3RpdmVQYW5lbEZpbGVHdWlkLCBwYXNzLCBDb21tb25Nb2RhbHMuUGFzc3dvcmRSZXF1aXJlZCwgdGhpcy5hY3RpdmVQYW5lbCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgdXBsb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb25Db25maWcgPyB0aGlzLmNvbXBhcmlzb25Db25maWcudXBsb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TG9hZGluZyhwYW5lbDogc3RyaW5nLCBmbGFnOiBib29sZWFuKSB7XG4gICAgaWYgKHBhbmVsID09PSB0aGlzLmZpcnN0KSB7XG4gICAgICB0aGlzLmxvYWRpbmdGaXJzdFBhbmVsID0gZmxhZztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkaW5nU2Vjb25kUGFuZWwgPSBmbGFnO1xuICAgIH1cbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb25Db25maWcgPyB0aGlzLmNvbXBhcmlzb25Db25maWcucmV3cml0ZSA6IHRydWU7XG4gIH1cblxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb21wYXJpc29uU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBGaWxlTW9kZWxbXSkgPT4ge1xuICAgICAgbGV0IG5hbWVFeHQ6IHN0cmluZztcbiAgICAgIGlmICh0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLmZpcnN0KSkge1xuICAgICAgICBuYW1lRXh0ID0gdGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5maXJzdCkuZ3VpZC5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLnNlY29uZCkpIHtcbiAgICAgICAgbmFtZUV4dCA9IHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuc2Vjb25kKS5ndWlkLnNwbGl0KCcuJykucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lRXh0KSB7XG4gICAgICAgIGZpbGVzID0gZmlsZXMuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZS5kaXJlY3RvcnkgfHwgdmFsdWUuZ3VpZC5zcGxpdCgnLicpLnBvcCgpID09PSBuYW1lRXh0O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsZXMgPSBmaWxlcyB8fCBbXTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdEZpbGUoJGV2ZW50OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG1vZGFsSWQ6IHN0cmluZywgcGFyYW06IHN0cmluZykge1xuICAgIHRoaXMuc2V0TG9hZGluZyhwYXJhbSwgdHJ1ZSk7XG4gICAgdGhpcy5nZXRGaWxlKCRldmVudCwgcGFzc3dvcmQsIHBhcmFtKTtcbiAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKG1vZGFsSWQpO1xuICAgIHRoaXMuY2xlYXJEYXRhKHBhcmFtKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmlsZSgkZXZlbnQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgcGFyYW06IHN0cmluZykge1xuICAgIGNvbnN0IGNyZWRlbnRpYWxzID0ge2d1aWQ6ICRldmVudCwgcGFzc3dvcmQ6IHBhc3N3b3JkfTtcbiAgICB0aGlzLmNyZWRlbnRpYWxzLnNldChwYXJhbSwgY3JlZGVudGlhbHMpO1xuICAgIHRoaXMuX2NvbXBhcmlzb25TZXJ2aWNlLmxvYWRGaWxlKGNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGZpbGU6IEZpbGVEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICB0aGlzLmZpbGUuc2V0KHBhcmFtLCBmaWxlKTtcbiAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICBjb25zdCBwcmVsb2FkUmVzdWx0UGFnZUNvdW50ID0gdGhpcy5jb21wYXJpc29uQ29uZmlnLnByZWxvYWRSZXN1bHRQYWdlQ291bnQ7XG4gICAgICAgICAgdGhpcy5jb3VudFBhZ2VzID0gZmlsZS5wYWdlcyA/IGZpbGUucGFnZXMubGVuZ3RoIDogMDtcbiAgICAgICAgICBpZiAocHJlbG9hZFJlc3VsdFBhZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKHBhcmFtLCAxLCBwcmVsb2FkUmVzdWx0UGFnZUNvdW50ID4gdGhpcy5jb3VudFBhZ2VzID8gdGhpcy5jb3VudFBhZ2VzIDogcHJlbG9hZFJlc3VsdFBhZ2VDb3VudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlRmlsZU5hbWVzKCk7XG4gICAgICAgIHRoaXMuc2V0TG9hZGluZyhwYXJhbSwgZmFsc2UpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBjbGVhckZpbGUocGFyYW06IHN0cmluZykge1xuICAgIHRoaXMuY2xlYXJEYXRhKHBhcmFtKTtcbiAgICB0aGlzLmNyZWRlbnRpYWxzLmRlbGV0ZShwYXJhbSk7XG4gICAgdGhpcy5yZXN1bHQgPSBudWxsO1xuICAgIHRoaXMucmVzdWx0VGFiRGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuX3RhYkFjdGl2YXRvclNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKHRoaXMuZmlsZXNUYWIpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckRhdGEocGFyYW0pIHtcbiAgICBpZiAoIXRoaXMuZmlsZSB8fCAhdGhpcy5maWxlLnNpemUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5maWxlLmRlbGV0ZShwYXJhbSk7XG4gICAgaWYgKHBhcmFtID09PSB0aGlzLmZpcnN0KSB7XG4gICAgICB0aGlzLmZpcnN0RmlsZU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2Vjb25kRmlsZU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJlbG9hZFBhZ2VzKHBhcmFtOiBzdHJpbmcsIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzLl9jb21wYXJpc29uU2VydmljZS5sb2FkUGFnZSh0aGlzLmNyZWRlbnRpYWxzLmdldChwYXJhbSksIGkpLnN1YnNjcmliZSgocGFnZTogUGFnZU1vZGVsKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZS5nZXQocGFyYW0pLnBhZ2VzW2kgLSAxXSA9IHBhZ2U7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmFjdGl2ZVBhbmVsO1xuICAgIHRoaXMuX2NvbXBhcmlzb25TZXJ2aWNlLnVwbG9hZChudWxsLCAkZXZlbnQsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKChvYmo6IEZpbGVDcmVkZW50aWFscykgPT4ge1xuICAgICAgdGhpcy5nZXRGaWxlKG9iai5ndWlkLCAnJywgYWN0aXZlKTtcbiAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUZpbGVOYW1lcygpIHtcbiAgICB0aGlzLmZpcnN0RmlsZU5hbWUgPSB0aGlzLmdldEZpcnN0RmlsZU5hbWUoKTtcbiAgICB0aGlzLnNlY29uZEZpbGVOYW1lID0gdGhpcy5nZXRTZWNvbmRGaWxlTmFtZSgpO1xuICB9XG5cbiAgZ2V0U2Vjb25kRmlsZU5hbWUoKSB7XG4gICAgY29uc3QgZmlsZUNyZWRlbnRpYWxzID0gdGhpcy5jcmVkZW50aWFscyA/IHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuc2Vjb25kKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gZmlsZUNyZWRlbnRpYWxzID8gZmlsZUNyZWRlbnRpYWxzLmd1aWQucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpIDogJyc7XG4gIH1cblxuICBnZXRGaXJzdEZpbGVOYW1lKCkge1xuICAgIGNvbnN0IGZpbGVDcmVkZW50aWFscyA9IHRoaXMuY3JlZGVudGlhbHMgPyB0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLmZpcnN0KSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gZmlsZUNyZWRlbnRpYWxzID8gZmlsZUNyZWRlbnRpYWxzLmd1aWQucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpIDogJyc7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrUHJlbG9hZChwYW5lbDogc3RyaW5nLCBwYWdlOiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuZmlsZS5nZXQocGFuZWwpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IHBhZ2U7IGkgPCBwYWdlICsgMjsgaSsrKSB7XG4gICAgICBpZiAoaSA+IDAgJiYgaSA8PSB0aGlzLmNvdW50UGFnZXMgJiYgIXRoaXMuZmlsZS5nZXQocGFuZWwpLnBhZ2VzW2kgLSAxXS5kYXRhKSB7XG4gICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKHBhbmVsLCBpLCBpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wYXJlKCkge1xuICAgIGlmICh0aGlzLmNyZWRlbnRpYWxzLnNpemUgIT09IDIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZXN1bHRUYWJEaXNhYmxlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIGFyci5wdXNoKHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuZmlyc3QpKTtcbiAgICBhcnIucHVzaCh0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLnNlY29uZCkpO1xuICAgIHRoaXMuX2NvbXBhcmlzb25TZXJ2aWNlLmNvbXBhcmUoYXJyKS5zdWJzY3JpYmUoKHJlc3VsdDogQ29tcGFyZVJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG5cbiAgICAgIGNvbnN0IGlzWmVyb0Jhc2VkUGFnZUlkID0gdGhpcy5yZXN1bHQuY2hhbmdlcy5maW5kKChjaGFuZ2UpID0+IGNoYW5nZS5wYWdlSW5mby5wYWdlTnVtYmVyID09PSAwKTtcblxuICAgICAgdGhpcy5yZXN1bHQuY2hhbmdlcy5mb3JFYWNoKCAoY2hhbmdlKSA9PiB7XG4gICAgICAgIGNoYW5nZS5pZCA9IHRoaXMuZ2VuZXJhdGVSYW5kb21JbnRlZ2VyKCk7XG4gICAgICAgIGNvbnN0IHplcm9CYXNlZElkID0gaXNaZXJvQmFzZWRQYWdlSWQgPyBjaGFuZ2UucGFnZUluZm8ucGFnZU51bWJlciA6IGNoYW5nZS5wYWdlSW5mby5wYWdlTnVtYmVyIC0gMTtcbiAgICAgICAgY2hhbmdlLnBhZ2VJbmZvLnBhZ2VOdW1iZXIgPSBpc1plcm9CYXNlZFBhZ2VJZCA/IGNoYW5nZS5wYWdlSW5mby5wYWdlTnVtYmVyIDogY2hhbmdlLnBhZ2VJbmZvLnBhZ2VOdW1iZXIgLSAxO1xuICAgICAgICBpZighdGhpcy5yZXN1bHQucGFnZXNbemVyb0Jhc2VkSWRdLmNoYW5nZXMpe1xuICAgICAgICAgIHRoaXMucmVzdWx0LnBhZ2VzW3plcm9CYXNlZElkXS5jaGFuZ2VzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHQucGFnZXNbemVyb0Jhc2VkSWRdLmNoYW5nZXMucHVzaChjaGFuZ2UpO1xuICAgICAgICBjaGFuZ2Uubm9ybWFsaXplZCA9IHtcbiAgICAgICAgICB4IDogdGhpcy5weFRvUHQoY2hhbmdlLmJveC54KSAqIDEwMCAvIGNoYW5nZS5wYWdlSW5mby53aWR0aCxcbiAgICAgICAgICB5IDogdGhpcy5weFRvUHQoY2hhbmdlLmJveC55KSAqIDEwMCAvIGNoYW5nZS5wYWdlSW5mby5oZWlnaHQsXG4gICAgICAgICAgd2lkdGg6IHRoaXMucHhUb1B0KGNoYW5nZS5ib3gud2lkdGgpICogMTAwIC8gY2hhbmdlLnBhZ2VJbmZvLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5weFRvUHQoY2hhbmdlLmJveC5oZWlnaHQpICogMTAwIC8gY2hhbmdlLnBhZ2VJbmZvLmhlaWdodCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0sIChlcnIgPT4ge1xuICAgICAgdGhpcy5yZXN1bHRUYWJEaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLl90YWJBY3RpdmF0b3JTZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYih0aGlzLmZpbGVzVGFiKTtcbiAgICB9KSk7XG4gICAgdGhpcy5fdGFiQWN0aXZhdG9yU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIodGhpcy5yZXN1bHRUYWIpO1xuICB9XG5cbiAgcHhUb1B0KHB4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gcHggKiA3MiAvIDk2O1xuICB9XG5cbiAgZ2VuZXJhdGVSYW5kb21JbnRlZ2VyKCkge1xuICAgIGZ1bmN0aW9uIF9wOChzKSB7XG4gICAgICAgIGNvbnN0IHAgPSAoTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikgKyBcIjAwMDAwMDAwMFwiKS5zdWJzdHIoMiwgOCk7XG4gICAgICAgIHJldHVybiBzID8gXCItXCIgKyBwLnN1YnN0cigwLCA0KSArIFwiLVwiICsgcC5zdWJzdHIoNCwgNCkgOiBwO1xuICAgIH1cbiAgICByZXR1cm4gX3A4KG51bGwpICsgX3A4KHRydWUpICsgX3A4KHRydWUpICsgX3A4KG51bGwpO1xuICB9XG5cbiAgZG93bmxvYWQoKSB7XG4gICAgaWYgKCF0aGlzLnJlc3VsdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjcmVkZW50aWFscyA9IHsnZ3VpZCc6IHRoaXMucmVzdWx0Lmd1aWQsICdwYXNzd29yZCc6ICcnfTtcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHRoaXMuX2NvbXBhcmlzb25TZXJ2aWNlLmdldERvd25sb2FkVXJsKGNyZWRlbnRpYWxzKSk7XG4gIH1cblxuICBoaWRlU2lkZVBhbmVsKCRldmVudCkge1xuICAgIHRoaXMuYWN0aXZlVGFiID0gJGV2ZW50ID8gdGhpcy5maWxlc1RhYiA6IHRoaXMucmVzdWx0VGFiO1xuICAgIHRoaXMuX3RhYkFjdGl2YXRvclNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKHRoaXMuZmlsZXNUYWIpO1xuICB9XG59XG4iXX0=