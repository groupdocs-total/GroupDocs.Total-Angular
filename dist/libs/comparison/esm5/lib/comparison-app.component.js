/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef } from '@angular/core';
import * as jquery from 'jquery';
import { CommonModals, ModalService, PagePreloadService, PasswordService, TabActivatorService, UploadFilesService } from "@groupdocs.examples.angular/common-components";
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
    function ComparisonAppComponent(_comparisonService, configService, uploadFilesService, pagePreloadService, _modalService, _tabActivatorService, passwordService, _elementRef) {
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
            _this.selectFile(_this.credentials.get(_this.activePanel).guid, pass, CommonModals.PasswordRequired, _this.activePanel);
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
    /**
     * @param {?} $event
     * @return {?}
     */
    ComparisonAppComponent.prototype.cancelOpeningFile = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.setLoading(this.activePanel, false);
    };
    ComparisonAppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-comparison',
                    template: "<!--<gd-loading-mask></gd-loading-mask>-->\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"column\">\n      <div class=\"top-panel\">\n        <gd-logo [logo]=\"'comparison'\" icon=\"copy\"></gd-logo>\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'play'\" [tooltip]=\"'Compare'\" [disabled]=\"!file.get(first) || !file.get(second)\"\n                     (click)=\"compare()\"></gd-button>\n          <gd-button [icon]=\"'download'\" [tooltip]=\"'Download'\" [disabled]=\"!result\" (click)=\"download()\"></gd-button>\n          <div class=\"tabs-wrapper\">\n            <div class=\"tabs\">\n              <gd-tabs>\n                <gd-tab [id]=\"filesTab\" tabTitle=\"Documents\" [icon]=\"'copy'\" [active]=\"true\" [content]=\"false\">\n                </gd-tab>\n                <gd-tab [id]=\"resultTab\" tabTitle=\"Result\" [icon]=\"'poll'\" [disabled]=\"resultTabDisabled\" [content]=\"false\">\n                </gd-tab>\n              </gd-tabs>\n            </div>\n          </div>\n        </gd-top-toolbar>\n      </div>\n      <div class=\"files-panel\" *ngIf=\"activeTab === filesTab\">\n        <div class=\"upload-compare-file\">\n          <gd-add-file-panel class=\"compare-file\"\n                             [fileName]=\"firstFileName\"\n                             [panel]=\"first\"\n                             (active)=\"activePanel = $event\"\n                             (urlForUpload)=\"upload($event)\"\n                             (cleanPanel)=\"clearFile(first)\">\n          </gd-add-file-panel>\n          <gd-upload-file-panel\n                                [panel]=\"first\"\n                                (active)=\"activePanel = $event\"\n                                *ngIf=\"!firstFileName && !loadingFirstPanel\">\n          </gd-upload-file-panel>\n          <div *ngIf=\"loadingFirstPanel\" class=\"loader\">\n            <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n            <span>Loading... Please wait.</span>\n          </div>\n          <gd-document class=\"gd-document\"\n                       *ngIf=\"file.get(first)\"\n                       [file]=\"file.get(first)\"\n                       [mode]=\"false\"\n                       [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\" gdRenderPrint\n                       [htmlMode]=\"false\">\n          </gd-document>\n        </div>\n        <div class=\"upload-compare-file\">\n          <gd-add-file-panel class=\"compare-file\"\n                             [fileName]=\"secondFileName\"\n                             [panel]=\"second\"\n                             (active)=\"activePanel = $event\"\n                             (urlForUpload)=\"upload($event)\"\n                             (cleanPanel)=\"clearFile(second)\">\n          </gd-add-file-panel>\n          <gd-upload-file-panel [panel]=\"second\"\n                                (active)=\"activePanel = $event\"\n                                *ngIf=\"!secondFileName && !loadingSecondPanel\">\n          </gd-upload-file-panel>\n          <div *ngIf=\"loadingSecondPanel\" class=\"loader\">\n            <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n            <span>Loading... Please wait.</span>\n          </div>\n          <gd-document class=\"gd-document\"\n                       *ngIf=\"file.get(second)\"\n                       [file]=\"file.get(second)\"\n                       [mode]=\"false\"\n                       [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\" gdRenderPrint\n                       [htmlMode]=\"false\">\n          </gd-document>\n        </div>\n      </div>\n      <div class=\"result-panel\" *ngIf=\"activeTab === resultTab\">\n        <div  class=\"loader\" *ngIf=\"!result\">\n          <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n          <span>Loading... Please wait.</span>\n        </div>\n        <gd-result-document\n          class=\"gd-document\"\n          *ngIf=\"result\"\n          [file]=\"result\"\n          [mode]=\"false\"\n          [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\"\n          gdRenderPrint\n          [htmlMode]=\"false\"\n          gdScrollable>\n        </gd-result-document>\n      </div>\n    </div>\n    <gd-side-panel (hideSidePanel)=\"hideSidePanel($event)\"\n                   *ngIf=\"result && activeTab === resultTab\"\n                   [title]=\"'Differences'\"\n                   [icon]=\"'info-circle'\">\n      <gd-differences\n        [changes]=\"result.changes\">\n      </gd-differences>\n    </gd-side-panel>\n  </div>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\"\n                         [files]=\"files\"\n                         (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal, activePanel)\">\n  </gd-browse-files-modal>\n  <gd-password-required (cancelEvent)=\"cancelOpeningFile($event)\"></gd-password-required>\n  <gd-error-modal></gd-error-modal>\n</div>\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.loader{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.upload-compare-file{height:100%;width:50%;border-right:1px solid #ccc;display:flex;align-content:center;flex-direction:column;text-align:center;flex-grow:0}.open-file-panel{display:flex;width:100%}.files-panel{background-color:#e7e7e7;display:flex;flex-direction:row;width:100%;height:100%}.result-panel{background-color:#e7e7e7;width:100%;height:100%;display:flex;align-content:center;flex-direction:column;justify-content:center;text-align:center}.doc-panel{display:flex;height:inherit}.gd-document{width:100%;height:100%}.top-panel{display:flex;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}.row{display:flex;height:inherit}.column{width:100%}.tabs-wrapper{display:flex;justify-self:flex-end;align-self:flex-end;width:100%;justify-content:flex-end}.tabs{display:flex;margin-right:30px;align-items:flex-end;justify-content:flex-end}::ng-deep .gd-page-image{height:100%!important;width:100%!important}@media (max-width:1037px){.files-panel{flex-direction:column}.files-panel .upload-compare-file{width:100%;border-bottom:1px solid #ccc}/deep/ .gd-side-panel-wrapper{height:50%!important;top:inherit!important;bottom:0!important}}"]
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
        { type: PasswordService },
        { type: ElementRef }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyaXNvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvY29tcGFyaXNvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQ0wsWUFBWSxFQUlaLFlBQVksRUFBYSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQ3RHLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7O0lBSWpELENBQUMsR0FBRyxNQUFNO0FBRWhCO0lBQUE7SUFHQSxDQUFDO0lBRlEsV0FBSyxHQUFHLE9BQU8sQ0FBQztJQUNoQixZQUFNLEdBQUcsUUFBUSxDQUFDO0lBQzNCLFlBQUM7Q0FBQSxBQUhELElBR0M7U0FIWSxLQUFLOzs7SUFDaEIsWUFBdUI7O0lBQ3ZCLGFBQXlCOztBQUczQjtJQUFBO1FBRUUsV0FBTSxHQUFHLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLHVCQUFXOztJQUNYLDJCQUFlOztBQUdqQjtJQXlCRSxnQ0FBb0Isa0JBQXFDLEVBQ3JDLGFBQXNDLEVBQzlDLGtCQUFzQyxFQUN0QyxrQkFBc0MsRUFDOUIsYUFBMkIsRUFDM0Isb0JBQXlDLEVBQ2pELGVBQWdDLEVBQ3hCLFdBQW9DO1FBUHhELGlCQXdDQztRQXhDbUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFHdEMsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQUV6QyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUExQnhELFVBQUssR0FBZ0IsRUFBRSxDQUFDO1FBQ3hCLHFCQUFnQixHQUFHLFlBQVksQ0FBQyxXQUFXLENBQUM7UUFDNUMsZ0JBQVcsR0FBaUMsSUFBSSxHQUFHLEVBQTJCLENBQUM7UUFDL0UsU0FBSSxHQUFpQyxJQUFJLEdBQUcsRUFBMkIsQ0FBQztRQUd4RSxVQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixXQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN0QixrQkFBYSxHQUFXLFNBQVMsQ0FBQztRQUNsQyxtQkFBYyxHQUFXLFNBQVMsQ0FBQztRQUNuQyxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFFZixhQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxRQUFRLENBQUM7UUFDckIsY0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDMUIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBVXZCLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsTUFBTTtZQUMzQyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQVk7WUFDckQsSUFBSSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLEtBQUssQ0FBQyxFQUFFO2dCQUN0RCxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzthQUN0QztRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQU87O2dCQUMzQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFdBQVc7WUFDL0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUIsSUFBSSxPQUFPLEVBQUU7O29CQUNQLENBQUMsU0FBUTtnQkFDYixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ25DLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVM7Ozs7b0JBQUMsVUFBQyxHQUFvQjt3QkFDckcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDbkMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDckIsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsb0JBQW9CLENBQUMsZUFBZSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWE7WUFDM0QsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQUM7UUFFSCxlQUFlLENBQUMsVUFBVSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQVk7WUFDaEQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVPLDJDQUFVOzs7Ozs7SUFBbEIsVUFBbUIsS0FBYSxFQUFFLElBQWE7UUFDN0MsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN4QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1NBQy9CO2FBQU07WUFDTCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVELHNCQUFJLGlEQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN0RSxDQUFDOzs7T0FBQTs7Ozs7SUFFRCwwQ0FBUzs7OztJQUFULFVBQVUsTUFBYztRQUF4QixpQkFnQkM7UUFmQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWtCOztnQkFDakUsT0FBZTtZQUNuQixJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEMsT0FBTyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2xFO2lCQUFNLElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM1QyxPQUFPLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDbkU7WUFFRCxJQUFJLE9BQU8sRUFBRTtnQkFDWCxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU07Ozs7Z0JBQUMsVUFBVSxLQUFLO29CQUNsQyxPQUFPLEtBQUssQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssT0FBTyxDQUFDO2dCQUNwRSxDQUFDLEVBQUMsQ0FBQzthQUNKO1lBQ0QsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7SUFFRCwyQ0FBVTs7Ozs7OztJQUFWLFVBQVcsTUFBYyxFQUFFLFFBQWdCLEVBQUUsT0FBZSxFQUFFLEtBQWE7UUFDekUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7Ozs7OztJQUVPLHdDQUFPOzs7Ozs7O0lBQWYsVUFBZ0IsTUFBYyxFQUFFLFFBQWdCLEVBQUUsS0FBYTtRQUEvRCxpQkFnQkM7O1lBZk8sV0FBVyxHQUFHLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDO1FBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQXFCO1lBQzFFLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzQixJQUFJLElBQUksRUFBRTs7b0JBQ0Ysc0JBQXNCLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQjtnQkFDM0UsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLHNCQUFzQixHQUFHLENBQUMsRUFBRTtvQkFDOUIsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLHNCQUFzQixHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUM7aUJBQ2xIO2FBQ0Y7WUFDRCxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVELDBDQUFTOzs7O0lBQVQsVUFBVSxLQUFhO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7SUFFTywwQ0FBUzs7Ozs7SUFBakIsVUFBa0IsS0FBSztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7U0FDaEM7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Ozs7OztJQUVELDZDQUFZOzs7Ozs7SUFBWixVQUFhLEtBQWEsRUFBRSxLQUFhLEVBQUUsR0FBVztRQUF0RCxpQkFNQztnQ0FMVSxDQUFDO1lBQ1IsT0FBSyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsT0FBSyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFDLElBQWU7Z0JBQ3pGLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzNDLENBQUMsRUFBQyxDQUFDOzs7UUFITCxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRTtvQkFBeEIsQ0FBQztTQUlUO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx1Q0FBTTs7OztJQUFOLFVBQU8sTUFBYztRQUFyQixpQkFNQzs7WUFMTyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVc7UUFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxHQUFvQjtZQUM5RixLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsZ0RBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxrREFBaUI7OztJQUFqQjs7WUFDUSxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQ3hGLE9BQU8sZUFBZSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5RSxDQUFDOzs7O0lBRUQsaURBQWdCOzs7SUFBaEI7O1lBQ1EsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUN2RixPQUFPLGVBQWUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUUsQ0FBQzs7Ozs7OztJQUVPLDZDQUFZOzs7Ozs7SUFBcEIsVUFBcUIsS0FBYSxFQUFFLElBQVk7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLE9BQU07U0FDUDtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO2dCQUM1RSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDaEM7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCx3Q0FBTzs7O0lBQVA7UUFBQSxpQkFpQ0M7UUFoQ0MsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDL0IsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQzs7WUFDekIsR0FBRyxHQUFHLEVBQUU7UUFDZCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxNQUFxQjtZQUNuRSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7Z0JBRWYsaUJBQWlCLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUF4QixDQUF3QixFQUFDO1lBRXhGLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7WUFBRSxVQUFDLE1BQU07Z0JBQ2xDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O29CQUNuQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDO2dCQUNuRixNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDckYsSUFBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sRUFBQztvQkFDekMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztpQkFDN0M7Z0JBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEQsTUFBTSxDQUFDLFVBQVUsR0FBRztvQkFDbEIsQ0FBQyxFQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUs7b0JBQzlDLENBQUMsRUFBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNO29CQUMvQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSztvQkFDckQsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU07aUJBQ3pELENBQUM7WUFDSixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsR0FBRTs7OztRQUFDLFVBQUEsR0FBRztZQUNMLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7WUFDOUIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0QsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCxzREFBcUI7OztJQUFyQjs7Ozs7UUFDRSxTQUFTLEdBQUcsQ0FBQyxDQUFDOztnQkFDSixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUNELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPO1NBQ1I7O1lBQ0ssV0FBVyxHQUFHLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUM7UUFDOUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7O0lBRUQsOENBQWE7Ozs7SUFBYixVQUFjLE1BQU07UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDekQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFHRCxrREFBaUI7Ozs7SUFBakIsVUFBa0IsTUFBTTtRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Z0JBcFBGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsNGlLQUE4Qzs7aUJBRS9DOzs7O2dCQXBCTyxpQkFBaUI7Z0JBRGpCLHVCQUF1QjtnQkFGc0Qsa0JBQWtCO2dCQUE1RSxrQkFBa0I7Z0JBQTNDLFlBQVk7Z0JBQWtELG1CQUFtQjtnQkFBcEMsZUFBZTtnQkFQM0MsVUFBVTs7SUErUTdCLDZCQUFDO0NBQUEsQUFyUEQsSUFxUEM7U0FoUFksc0JBQXNCOzs7SUFDakMsdUNBQXdCOztJQUN4QixrREFBNEM7O0lBQzVDLDZDQUErRTs7SUFDL0Usc0NBQXdFOztJQUN4RSxrREFBbUM7O0lBQ25DLDZDQUFvQjs7SUFDcEIsdUNBQW9COztJQUNwQix3Q0FBc0I7O0lBQ3RCLCtDQUFrQzs7SUFDbEMsZ0RBQW1DOztJQUNuQyxtREFBMEI7O0lBQzFCLG9EQUEyQjs7SUFDM0IsNENBQWU7O0lBQ2Ysd0NBQXNCOztJQUN0QiwwQ0FBbUI7O0lBQ25CLDJDQUFxQjs7SUFDckIsMkNBQTBCOztJQUMxQixtREFBeUI7Ozs7O0lBRWIsb0RBQTZDOzs7OztJQUM3QywrQ0FBOEM7Ozs7O0lBRzlDLCtDQUFtQzs7Ozs7SUFDbkMsc0RBQWlEOzs7OztJQUVqRCw2Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7XG4gIENvbW1vbk1vZGFscyxcbiAgRmlsZUNyZWRlbnRpYWxzLFxuICBGaWxlRGVzY3JpcHRpb24sXG4gIEZpbGVNb2RlbCxcbiAgTW9kYWxTZXJ2aWNlLCBQYWdlTW9kZWwsIFBhZ2VQcmVsb2FkU2VydmljZSwgUGFzc3dvcmRTZXJ2aWNlLCBUYWJBY3RpdmF0b3JTZXJ2aWNlLCBVcGxvYWRGaWxlc1NlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtDb21wYXJpc29uQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vY29tcGFyaXNvbi1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtDb21wYXJpc29uU2VydmljZX0gZnJvbSBcIi4vY29tcGFyaXNvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbXBhcmlzb25Db25maWd9IGZyb20gXCIuL2NvbXBhcmlzb24tY29uZmlnXCI7XG5pbXBvcnQge0NvbXBhcmVSZXN1bHR9IGZyb20gXCIuL21vZGVsc1wiO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5leHBvcnQgY2xhc3MgRmlsZXMge1xuICBzdGF0aWMgRklSU1QgPSAnZmlyc3QnO1xuICBzdGF0aWMgU0VDT05EID0gJ3NlY29uZCc7XG59XG5cbmV4cG9ydCBjbGFzcyBIaWdobGlnaHQge1xuICBpZDogc3RyaW5nO1xuICBhY3RpdmUgPSBmYWxzZTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtY29tcGFyaXNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wYXJpc29uLWFwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbXBhcmlzb24tYXBwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tcGFyaXNvbkFwcENvbXBvbmVudCB7XG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xuICBjcmVkZW50aWFsczogTWFwPHN0cmluZywgRmlsZUNyZWRlbnRpYWxzPiA9IG5ldyBNYXA8c3RyaW5nLCBGaWxlQ3JlZGVudGlhbHM+KCk7XG4gIGZpbGU6IE1hcDxzdHJpbmcsIEZpbGVEZXNjcmlwdGlvbj4gPSBuZXcgTWFwPHN0cmluZywgRmlsZURlc2NyaXB0aW9uPigpO1xuICBjb21wYXJpc29uQ29uZmlnOiBDb21wYXJpc29uQ29uZmlnO1xuICBhY3RpdmVQYW5lbDogc3RyaW5nO1xuICBmaXJzdCA9IEZpbGVzLkZJUlNUO1xuICBzZWNvbmQgPSBGaWxlcy5TRUNPTkQ7XG4gIGZpcnN0RmlsZU5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgc2Vjb25kRmlsZU5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgbG9hZGluZ0ZpcnN0UGFuZWwgPSBmYWxzZTtcbiAgbG9hZGluZ1NlY29uZFBhbmVsID0gZmFsc2U7XG4gIGNvdW50UGFnZXMgPSAwO1xuICByZXN1bHQ6IENvbXBhcmVSZXN1bHQ7XG4gIGZpbGVzVGFiID0gJ2ZpbGVzJztcbiAgcmVzdWx0VGFiID0gJ3Jlc3VsdCc7XG4gIGFjdGl2ZVRhYiA9IHRoaXMuZmlsZXNUYWI7XG4gIHJlc3VsdFRhYkRpc2FibGVkID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb21wYXJpc29uU2VydmljZTogQ29tcGFyaXNvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY29uZmlnU2VydmljZTogQ29tcGFyaXNvbkNvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHVwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwYWdlUHJlbG9hZFNlcnZpY2U6IFBhZ2VQcmVsb2FkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3RhYkFjdGl2YXRvclNlcnZpY2U6IFRhYkFjdGl2YXRvclNlcnZpY2UsXG4gICAgICAgICAgICAgIHBhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuICAgIGNvbmZpZ1NlcnZpY2UudXBkYXRlZENvbmZpZy5zdWJzY3JpYmUoKGNvbmZpZykgPT4ge1xuICAgICAgdGhpcy5jb21wYXJpc29uQ29uZmlnID0gY29uZmlnO1xuICAgIH0pO1xuXG4gICAgcGFnZVByZWxvYWRTZXJ2aWNlLmNoZWNrUHJlbG9hZC5zdWJzY3JpYmUoKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRoaXMuY29tcGFyaXNvbkNvbmZpZy5wcmVsb2FkUmVzdWx0UGFnZUNvdW50ICE9PSAwKSB7XG4gICAgICAgIHRoaXMuY2hlY2tQcmVsb2FkKHRoaXMuZmlyc3QsIHBhZ2UpO1xuICAgICAgICB0aGlzLmNoZWNrUHJlbG9hZCh0aGlzLnNlY29uZCwgcGFnZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB1cGxvYWRGaWxlc1NlcnZpY2UudXBsb2Fkc0NoYW5nZS5zdWJzY3JpYmUoKHVwbG9hZHMpID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlUGFuZWw7XG4gICAgICB0aGlzLnNldExvYWRpbmcoYWN0aXZlLCB0cnVlKTtcbiAgICAgIGlmICh1cGxvYWRzKSB7XG4gICAgICAgIGxldCBpOiBudW1iZXI7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB1cGxvYWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5fY29tcGFyaXNvblNlcnZpY2UudXBsb2FkKHVwbG9hZHMuaXRlbShpKSwgJycsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKChvYmo6IEZpbGVDcmVkZW50aWFscykgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXRGaWxlKG9iai5ndWlkLCAnJywgYWN0aXZlKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX3RhYkFjdGl2YXRvclNlcnZpY2UuYWN0aXZlVGFiQ2hhbmdlLnN1YnNjcmliZSgodGFiSWQ6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVUYWIgPSB0YWJJZDtcbiAgICB9KTtcblxuICAgIHBhc3N3b3JkU2VydmljZS5wYXNzQ2hhbmdlLnN1YnNjcmliZSgocGFzczogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5hY3RpdmVQYW5lbCkuZ3VpZCwgcGFzcywgQ29tbW9uTW9kYWxzLlBhc3N3b3JkUmVxdWlyZWQsIHRoaXMuYWN0aXZlUGFuZWwpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRMb2FkaW5nKHBhbmVsOiBzdHJpbmcsIGZsYWc6IGJvb2xlYW4pIHtcbiAgICBpZiAocGFuZWwgPT09IHRoaXMuZmlyc3QpIHtcbiAgICAgIHRoaXMubG9hZGluZ0ZpcnN0UGFuZWwgPSBmbGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRpbmdTZWNvbmRQYW5lbCA9IGZsYWc7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHJld3JpdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyaXNvbkNvbmZpZyA/IHRoaXMuY29tcGFyaXNvbkNvbmZpZy5yZXdyaXRlIDogdHJ1ZTtcbiAgfVxuXG4gIHNlbGVjdERpcigkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbXBhcmlzb25TZXJ2aWNlLmxvYWRGaWxlcygkZXZlbnQpLnN1YnNjcmliZSgoZmlsZXM6IEZpbGVNb2RlbFtdKSA9PiB7XG4gICAgICBsZXQgbmFtZUV4dDogc3RyaW5nO1xuICAgICAgaWYgKHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuZmlyc3QpKSB7XG4gICAgICAgIG5hbWVFeHQgPSB0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLmZpcnN0KS5ndWlkLnNwbGl0KCcuJykucG9wKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuc2Vjb25kKSkge1xuICAgICAgICBuYW1lRXh0ID0gdGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5zZWNvbmQpLmd1aWQuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWVFeHQpIHtcbiAgICAgICAgZmlsZXMgPSBmaWxlcy5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLmRpcmVjdG9yeSB8fCB2YWx1ZS5ndWlkLnNwbGl0KCcuJykucG9wKCkgPT09IG5hbWVFeHQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5maWxlcyA9IGZpbGVzIHx8IFtdO1xuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0RmlsZSgkZXZlbnQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgbW9kYWxJZDogc3RyaW5nLCBwYXJhbTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRMb2FkaW5nKHBhcmFtLCB0cnVlKTtcbiAgICB0aGlzLmdldEZpbGUoJGV2ZW50LCBwYXNzd29yZCwgcGFyYW0pO1xuICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UobW9kYWxJZCk7XG4gICAgdGhpcy5jbGVhckRhdGEocGFyYW0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBwYXJhbTogc3RyaW5nKSB7XG4gICAgY29uc3QgY3JlZGVudGlhbHMgPSB7Z3VpZDogJGV2ZW50LCBwYXNzd29yZDogcGFzc3dvcmR9O1xuICAgIHRoaXMuY3JlZGVudGlhbHMuc2V0KHBhcmFtLCBjcmVkZW50aWFscyk7XG4gICAgdGhpcy5fY29tcGFyaXNvblNlcnZpY2UubG9hZEZpbGUoY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZmlsZTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZS5zZXQocGFyYW0sIGZpbGUpO1xuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgIGNvbnN0IHByZWxvYWRSZXN1bHRQYWdlQ291bnQgPSB0aGlzLmNvbXBhcmlzb25Db25maWcucHJlbG9hZFJlc3VsdFBhZ2VDb3VudDtcbiAgICAgICAgICB0aGlzLmNvdW50UGFnZXMgPSBmaWxlLnBhZ2VzID8gZmlsZS5wYWdlcy5sZW5ndGggOiAwO1xuICAgICAgICAgIGlmIChwcmVsb2FkUmVzdWx0UGFnZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5wcmVsb2FkUGFnZXMocGFyYW0sIDEsIHByZWxvYWRSZXN1bHRQYWdlQ291bnQgPiB0aGlzLmNvdW50UGFnZXMgPyB0aGlzLmNvdW50UGFnZXMgOiBwcmVsb2FkUmVzdWx0UGFnZUNvdW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVGaWxlTmFtZXMoKTtcbiAgICAgICAgdGhpcy5zZXRMb2FkaW5nKHBhcmFtLCBmYWxzZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGNsZWFyRmlsZShwYXJhbTogc3RyaW5nKSB7XG4gICAgdGhpcy5jbGVhckRhdGEocGFyYW0pO1xuICAgIHRoaXMuY3JlZGVudGlhbHMuZGVsZXRlKHBhcmFtKTtcbiAgICB0aGlzLnJlc3VsdCA9IG51bGw7XG4gICAgdGhpcy5yZXN1bHRUYWJEaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5fdGFiQWN0aXZhdG9yU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIodGhpcy5maWxlc1RhYik7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRGF0YShwYXJhbSkge1xuICAgIGlmICghdGhpcy5maWxlIHx8ICF0aGlzLmZpbGUuc2l6ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmZpbGUuZGVsZXRlKHBhcmFtKTtcbiAgICBpZiAocGFyYW0gPT09IHRoaXMuZmlyc3QpIHtcbiAgICAgIHRoaXMuZmlyc3RGaWxlTmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWNvbmRGaWxlTmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcmVsb2FkUGFnZXMocGFyYW06IHN0cmluZywgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICAgIHRoaXMuX2NvbXBhcmlzb25TZXJ2aWNlLmxvYWRQYWdlKHRoaXMuY3JlZGVudGlhbHMuZ2V0KHBhcmFtKSwgaSkuc3Vic2NyaWJlKChwYWdlOiBQYWdlTW9kZWwpID0+IHtcbiAgICAgICAgdGhpcy5maWxlLmdldChwYXJhbSkucGFnZXNbaSAtIDFdID0gcGFnZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVwbG9hZCgkZXZlbnQ6IHN0cmluZykge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlUGFuZWw7XG4gICAgdGhpcy5fY29tcGFyaXNvblNlcnZpY2UudXBsb2FkKG51bGwsICRldmVudCwgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICB0aGlzLmdldEZpbGUob2JqLmd1aWQsICcnLCBhY3RpdmUpO1xuICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlRmlsZU5hbWVzKCkge1xuICAgIHRoaXMuZmlyc3RGaWxlTmFtZSA9IHRoaXMuZ2V0Rmlyc3RGaWxlTmFtZSgpO1xuICAgIHRoaXMuc2Vjb25kRmlsZU5hbWUgPSB0aGlzLmdldFNlY29uZEZpbGVOYW1lKCk7XG4gIH1cblxuICBnZXRTZWNvbmRGaWxlTmFtZSgpIHtcbiAgICBjb25zdCBmaWxlQ3JlZGVudGlhbHMgPSB0aGlzLmNyZWRlbnRpYWxzID8gdGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5zZWNvbmQpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBmaWxlQ3JlZGVudGlhbHMgPyBmaWxlQ3JlZGVudGlhbHMuZ3VpZC5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJykgOiAnJztcbiAgfVxuXG4gIGdldEZpcnN0RmlsZU5hbWUoKSB7XG4gICAgY29uc3QgZmlsZUNyZWRlbnRpYWxzID0gdGhpcy5jcmVkZW50aWFscyA/IHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuZmlyc3QpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBmaWxlQ3JlZGVudGlhbHMgPyBmaWxlQ3JlZGVudGlhbHMuZ3VpZC5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJykgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tQcmVsb2FkKHBhbmVsOiBzdHJpbmcsIHBhZ2U6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5maWxlLmdldChwYW5lbCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gcGFnZTsgaSA8IHBhZ2UgKyAyOyBpKyspIHtcbiAgICAgIGlmIChpID4gMCAmJiBpIDw9IHRoaXMuY291bnRQYWdlcyAmJiAhdGhpcy5maWxlLmdldChwYW5lbCkucGFnZXNbaSAtIDFdLmRhdGEpIHtcbiAgICAgICAgdGhpcy5wcmVsb2FkUGFnZXMocGFuZWwsIGksIGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBhcmUoKSB7XG4gICAgaWYgKHRoaXMuY3JlZGVudGlhbHMuc2l6ZSAhPT0gMikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJlc3VsdFRhYkRpc2FibGVkID0gZmFsc2U7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgYXJyLnB1c2godGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5maXJzdCkpO1xuICAgIGFyci5wdXNoKHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuc2Vjb25kKSk7XG4gICAgdGhpcy5fY29tcGFyaXNvblNlcnZpY2UuY29tcGFyZShhcnIpLnN1YnNjcmliZSgocmVzdWx0OiBDb21wYXJlUmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcblxuICAgICAgY29uc3QgaXNaZXJvQmFzZWRQYWdlSWQgPSB0aGlzLnJlc3VsdC5jaGFuZ2VzLmZpbmQoKGNoYW5nZSkgPT4gY2hhbmdlLnBhZ2VJbmZvLmlkID09PSAwKTtcblxuICAgICAgdGhpcy5yZXN1bHQuY2hhbmdlcy5mb3JFYWNoKCAoY2hhbmdlKSA9PiB7XG4gICAgICAgIGNoYW5nZS5pZCA9IHRoaXMuZ2VuZXJhdGVSYW5kb21JbnRlZ2VyKCk7XG4gICAgICAgIGNvbnN0IHplcm9CYXNlZElkID0gaXNaZXJvQmFzZWRQYWdlSWQgPyBjaGFuZ2UucGFnZUluZm8uaWQgOiBjaGFuZ2UucGFnZUluZm8uaWQgLSAxO1xuICAgICAgICBjaGFuZ2UucGFnZUluZm8uaWQgPSBpc1plcm9CYXNlZFBhZ2VJZCA/IGNoYW5nZS5wYWdlSW5mby5pZCA6IGNoYW5nZS5wYWdlSW5mby5pZCAtIDE7XG4gICAgICAgIGlmKCF0aGlzLnJlc3VsdC5wYWdlc1t6ZXJvQmFzZWRJZF0uY2hhbmdlcyl7XG4gICAgICAgICAgdGhpcy5yZXN1bHQucGFnZXNbemVyb0Jhc2VkSWRdLmNoYW5nZXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdC5wYWdlc1t6ZXJvQmFzZWRJZF0uY2hhbmdlcy5wdXNoKGNoYW5nZSk7XG4gICAgICAgIGNoYW5nZS5ub3JtYWxpemVkID0ge1xuICAgICAgICAgIHggOiBjaGFuZ2UuYm94LnggKiAxMDAgLyBjaGFuZ2UucGFnZUluZm8ud2lkdGgsXG4gICAgICAgICAgeSA6IGNoYW5nZS5ib3gueSAqIDEwMCAvIGNoYW5nZS5wYWdlSW5mby5oZWlnaHQsXG4gICAgICAgICAgd2lkdGg6IGNoYW5nZS5ib3gud2lkdGggKiAxMDAgLyBjaGFuZ2UucGFnZUluZm8ud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBjaGFuZ2UuYm94LmhlaWdodCAqIDEwMCAvIGNoYW5nZS5wYWdlSW5mby5oZWlnaHQsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9LCAoZXJyID0+IHtcbiAgICAgIHRoaXMucmVzdWx0VGFiRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fdGFiQWN0aXZhdG9yU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIodGhpcy5maWxlc1RhYik7XG4gICAgfSkpO1xuICAgIHRoaXMuX3RhYkFjdGl2YXRvclNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKHRoaXMucmVzdWx0VGFiKTtcbiAgfVxuXG4gIGdlbmVyYXRlUmFuZG9tSW50ZWdlcigpIHtcbiAgICBmdW5jdGlvbiBfcDgocykge1xuICAgICAgICBjb25zdCBwID0gKE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpICsgXCIwMDAwMDAwMDBcIikuc3Vic3RyKDIsIDgpO1xuICAgICAgICByZXR1cm4gcyA/IFwiLVwiICsgcC5zdWJzdHIoMCwgNCkgKyBcIi1cIiArIHAuc3Vic3RyKDQsIDQpIDogcDtcbiAgICB9XG4gICAgcmV0dXJuIF9wOChudWxsKSArIF9wOCh0cnVlKSArIF9wOCh0cnVlKSArIF9wOChudWxsKTtcbiAgfVxuXG4gIGRvd25sb2FkKCkge1xuICAgIGlmICghdGhpcy5yZXN1bHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3JlZGVudGlhbHMgPSB7J2d1aWQnOiB0aGlzLnJlc3VsdC5ndWlkLCAncGFzc3dvcmQnOiAnJ307XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLl9jb21wYXJpc29uU2VydmljZS5nZXREb3dubG9hZFVybChjcmVkZW50aWFscykpO1xuICB9XG5cbiAgaGlkZVNpZGVQYW5lbCgkZXZlbnQpIHtcbiAgICB0aGlzLmFjdGl2ZVRhYiA9ICRldmVudCA/IHRoaXMuZmlsZXNUYWIgOiB0aGlzLnJlc3VsdFRhYjtcbiAgICB0aGlzLl90YWJBY3RpdmF0b3JTZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYih0aGlzLmZpbGVzVGFiKTtcbiAgfVxuXG5cbiAgY2FuY2VsT3BlbmluZ0ZpbGUoJGV2ZW50KSB7XG4gICAgdGhpcy5zZXRMb2FkaW5nKHRoaXMuYWN0aXZlUGFuZWwsIGZhbHNlKTtcbiAgfVxufVxuIl19