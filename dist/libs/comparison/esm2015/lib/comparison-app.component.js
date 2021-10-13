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
const $ = jquery;
export class Files {
}
Files.FIRST = 'first';
Files.SECOND = 'second';
if (false) {
    /** @type {?} */
    Files.FIRST;
    /** @type {?} */
    Files.SECOND;
}
export class Highlight {
    constructor() {
        this.active = false;
    }
}
if (false) {
    /** @type {?} */
    Highlight.prototype.id;
    /** @type {?} */
    Highlight.prototype.active;
}
export class ComparisonAppComponent {
    /**
     * @param {?} _comparisonService
     * @param {?} configService
     * @param {?} uploadFilesService
     * @param {?} pagePreloadService
     * @param {?} _modalService
     * @param {?} _tabActivatorService
     * @param {?} _elementRef
     * @param {?} passwordService
     */
    constructor(_comparisonService, configService, uploadFilesService, pagePreloadService, _modalService, _tabActivatorService, _elementRef, passwordService) {
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
        (config) => {
            this.comparisonConfig = config;
        }));
        pagePreloadService.checkPreload.subscribe((/**
         * @param {?} page
         * @return {?}
         */
        (page) => {
            if (this.comparisonConfig.preloadResultPageCount !== 0) {
                this.checkPreload(this.first, page);
                this.checkPreload(this.second, page);
            }
        }));
        uploadFilesService.uploadsChange.subscribe((/**
         * @param {?} uploads
         * @return {?}
         */
        (uploads) => {
            /** @type {?} */
            const active = this.activePanel;
            this.setLoading(active, true);
            if (uploads) {
                /** @type {?} */
                let i;
                for (i = 0; i < uploads.length; i++) {
                    this._comparisonService.upload(uploads.item(i), '', this.rewriteConfig).subscribe((/**
                     * @param {?} obj
                     * @return {?}
                     */
                    (obj) => {
                        this.getFile(obj.guid, '', active);
                        this.selectDir('');
                    }));
                }
            }
        }));
        _tabActivatorService.activeTabChange.subscribe((/**
         * @param {?} tabId
         * @return {?}
         */
        (tabId) => {
            this.activeTab = tabId;
        }));
        passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        (pass) => {
            /** @type {?} */
            let activePanelFileGuid = "";
            if (this.credentials.get(this.first)) {
                activePanelFileGuid = this.credentials.get(this.first).guid;
            }
            else if (this.credentials.get(this.second)) {
                activePanelFileGuid = this.credentials.get(this.second).guid;
            }
            this.selectFile(activePanelFileGuid, pass, CommonModals.PasswordRequired, this.activePanel);
        }));
    }
    /**
     * @return {?}
     */
    get uploadConfig() {
        return this.comparisonConfig ? this.comparisonConfig.upload : true;
    }
    /**
     * @private
     * @param {?} panel
     * @param {?} flag
     * @return {?}
     */
    setLoading(panel, flag) {
        if (panel === this.first) {
            this.loadingFirstPanel = flag;
        }
        else {
            this.loadingSecondPanel = flag;
        }
    }
    /**
     * @return {?}
     */
    get rewriteConfig() {
        return this.comparisonConfig ? this.comparisonConfig.rewrite : true;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectDir($event) {
        this._comparisonService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        (files) => {
            /** @type {?} */
            let nameExt;
            if (this.credentials.get(this.first)) {
                nameExt = this.credentials.get(this.first).guid.split('.').pop();
            }
            else if (this.credentials.get(this.second)) {
                nameExt = this.credentials.get(this.second).guid.split('.').pop();
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
            this.files = files || [];
        }));
    }
    /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @param {?} param
     * @return {?}
     */
    selectFile($event, password, modalId, param) {
        this.setLoading(param, true);
        this.getFile($event, password, param);
        this.selectDir('');
        this._modalService.close(modalId);
        this.clearData(param);
    }
    /**
     * @private
     * @param {?} $event
     * @param {?} password
     * @param {?} param
     * @return {?}
     */
    getFile($event, password, param) {
        /** @type {?} */
        const credentials = { guid: $event, password: password };
        this.credentials.set(param, credentials);
        this._comparisonService.loadFile(credentials).subscribe((/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
            this.file.set(param, file);
            if (file) {
                /** @type {?} */
                const preloadResultPageCount = this.comparisonConfig.preloadResultPageCount;
                this.countPages = file.pages ? file.pages.length : 0;
                if (preloadResultPageCount > 0) {
                    this.preloadPages(param, 1, preloadResultPageCount > this.countPages ? this.countPages : preloadResultPageCount);
                }
            }
            this.updateFileNames();
            this.setLoading(param, false);
        }));
    }
    /**
     * @param {?} param
     * @return {?}
     */
    clearFile(param) {
        this.clearData(param);
        this.credentials.delete(param);
        this.result = null;
        this.resultTabDisabled = true;
        this._tabActivatorService.changeActiveTab(this.filesTab);
    }
    /**
     * @private
     * @param {?} param
     * @return {?}
     */
    clearData(param) {
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
    }
    /**
     * @param {?} param
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    preloadPages(param, start, end) {
        for (let i = start; i <= end; i++) {
            this._comparisonService.loadPage(this.credentials.get(param), i).subscribe((/**
             * @param {?} page
             * @return {?}
             */
            (page) => {
                this.file.get(param).pages[i - 1] = page;
            }));
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    upload($event) {
        /** @type {?} */
        const active = this.activePanel;
        this._comparisonService.upload(null, $event, this.rewriteConfig).subscribe((/**
         * @param {?} obj
         * @return {?}
         */
        (obj) => {
            this.getFile(obj.guid, '', active);
            this.selectDir('');
        }));
    }
    /**
     * @return {?}
     */
    updateFileNames() {
        this.firstFileName = this.getFirstFileName();
        this.secondFileName = this.getSecondFileName();
    }
    /**
     * @return {?}
     */
    getSecondFileName() {
        /** @type {?} */
        const fileCredentials = this.credentials ? this.credentials.get(this.second) : undefined;
        return fileCredentials ? fileCredentials.guid.replace(/^.*[\\\/]/, '') : '';
    }
    /**
     * @return {?}
     */
    getFirstFileName() {
        /** @type {?} */
        const fileCredentials = this.credentials ? this.credentials.get(this.first) : undefined;
        return fileCredentials ? fileCredentials.guid.replace(/^.*[\\\/]/, '') : '';
    }
    /**
     * @private
     * @param {?} panel
     * @param {?} page
     * @return {?}
     */
    checkPreload(panel, page) {
        if (!this.file.get(panel)) {
            return;
        }
        for (let i = page; i < page + 2; i++) {
            if (i > 0 && i <= this.countPages && !this.file.get(panel).pages[i - 1].data) {
                this.preloadPages(panel, i, i);
            }
        }
    }
    /**
     * @return {?}
     */
    compare() {
        if (this.credentials.size !== 2) {
            return;
        }
        this.resultTabDisabled = false;
        /** @type {?} */
        const arr = [];
        arr.push(this.credentials.get(this.first));
        arr.push(this.credentials.get(this.second));
        this._comparisonService.compare(arr).subscribe((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.result = result;
            /** @type {?} */
            const isZeroBasedPageId = this.result.changes.find((/**
             * @param {?} change
             * @return {?}
             */
            (change) => change.pageInfo.pageNumber === 0));
            this.result.changes.forEach((/**
             * @param {?} change
             * @return {?}
             */
            (change) => {
                change.id = this.generateRandomInteger();
                /** @type {?} */
                const zeroBasedId = isZeroBasedPageId ? change.pageInfo.pageNumber : change.pageInfo.pageNumber - 1;
                change.pageInfo.pageNumber = isZeroBasedPageId ? change.pageInfo.pageNumber : change.pageInfo.pageNumber - 1;
                if (!this.result.pages[zeroBasedId].changes) {
                    this.result.pages[zeroBasedId].changes = [];
                }
                this.result.pages[zeroBasedId].changes.push(change);
                change.normalized = {
                    x: this.pxToPt(change.box.x) * 100 / change.pageInfo.width,
                    y: this.pxToPt(change.box.y) * 100 / change.pageInfo.height,
                    width: this.pxToPt(change.box.width) * 100 / change.pageInfo.width,
                    height: this.pxToPt(change.box.height) * 100 / change.pageInfo.height,
                };
            }));
        }), ((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            this.resultTabDisabled = true;
            this._tabActivatorService.changeActiveTab(this.filesTab);
        })));
        this._tabActivatorService.changeActiveTab(this.resultTab);
    }
    /**
     * @param {?} px
     * @return {?}
     */
    pxToPt(px) {
        return px * 72 / 96;
    }
    /**
     * @return {?}
     */
    generateRandomInteger() {
        /**
         * @param {?} s
         * @return {?}
         */
        function _p8(s) {
            /** @type {?} */
            const p = (Math.random().toString(16) + "000000000").substr(2, 8);
            return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
        }
        return _p8(null) + _p8(true) + _p8(true) + _p8(null);
    }
    /**
     * @return {?}
     */
    download() {
        if (!this.result) {
            return;
        }
        /** @type {?} */
        const credentials = { 'guid': this.result.guid, 'password': '' };
        window.location.assign(this._comparisonService.getDownloadUrl(credentials));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    hideSidePanel($event) {
        this.activeTab = $event ? this.filesTab : this.resultTab;
        this._tabActivatorService.changeActiveTab(this.filesTab);
    }
}
ComparisonAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-comparison',
                template: "<!--<gd-loading-mask></gd-loading-mask>-->\r\n<div class=\"wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"column\">\r\n      <div class=\"top-panel\">\r\n        <gd-logo [logo]=\"'comparison'\" icon=\"copy\"></gd-logo>\r\n        <gd-top-toolbar class=\"toolbar-panel\">\r\n          <gd-button [icon]=\"'play'\" [tooltip]=\"'Compare'\" [disabled]=\"!file.get(first) || !file.get(second)\"\r\n                     (click)=\"compare()\"></gd-button>\r\n          <gd-button [icon]=\"'download'\" [tooltip]=\"'Download'\" [disabled]=\"!result\" (click)=\"download()\"></gd-button>\r\n          <div class=\"tabs-wrapper\">\r\n            <div class=\"tabs\">\r\n              <gd-tabs>\r\n                <gd-tab [id]=\"filesTab\" tabTitle=\"Documents\" [icon]=\"'copy'\" [active]=\"true\" [content]=\"false\">\r\n                </gd-tab>\r\n                <gd-tab [id]=\"resultTab\" tabTitle=\"Result\" [icon]=\"'poll'\" [disabled]=\"resultTabDisabled\" [content]=\"false\">\r\n                </gd-tab>\r\n              </gd-tabs>\r\n            </div>\r\n          </div>\r\n        </gd-top-toolbar>\r\n      </div>\r\n      <div class=\"files-panel\" *ngIf=\"activeTab === filesTab\">\r\n        <div class=\"upload-compare-file\">\r\n          <gd-add-file-panel class=\"compare-file\"\r\n                             [fileName]=\"firstFileName\"\r\n                             [panel]=\"first\"\r\n                             (active)=\"activePanel = $event\"\r\n                             (urlForUpload)=\"upload($event)\"\r\n                             (cleanPanel)=\"clearFile(first)\">\r\n          </gd-add-file-panel>\r\n          <gd-upload-file-panel\r\n                                [panel]=\"first\"\r\n                                (active)=\"activePanel = $event\"\r\n                                *ngIf=\"!firstFileName && !loadingFirstPanel\">\r\n          </gd-upload-file-panel>\r\n          <div *ngIf=\"loadingFirstPanel\" class=\"loader\">\r\n            <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\r\n            <span>Loading... Please wait.</span>\r\n          </div>\r\n          <gd-document class=\"gd-document\"\r\n                       *ngIf=\"file.get(first)\"\r\n                       [file]=\"file.get(first)\"\r\n                       [mode]=\"false\"\r\n                       [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\" gdRenderPrint\r\n                       [htmlMode]=\"false\"\r\n                       gdScrollable>\r\n          </gd-document>\r\n        </div>\r\n        <div class=\"upload-compare-file\">\r\n          <gd-add-file-panel class=\"compare-file\"\r\n                             [fileName]=\"secondFileName\"\r\n                             [panel]=\"second\"\r\n                             (active)=\"activePanel = $event\"\r\n                             (urlForUpload)=\"upload($event)\"\r\n                             (cleanPanel)=\"clearFile(second)\">\r\n          </gd-add-file-panel>\r\n          <gd-upload-file-panel [panel]=\"second\"\r\n                                (active)=\"activePanel = $event\"\r\n                                *ngIf=\"!secondFileName && !loadingSecondPanel\">\r\n          </gd-upload-file-panel>\r\n          <div *ngIf=\"loadingSecondPanel\" class=\"loader\">\r\n            <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\r\n            <span>Loading... Please wait.</span>\r\n          </div>\r\n          <gd-document class=\"gd-document\"\r\n                       *ngIf=\"file.get(second)\"\r\n                       [file]=\"file.get(second)\"\r\n                       [mode]=\"false\"\r\n                       [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\" gdRenderPrint\r\n                       [htmlMode]=\"false\"\r\n                       gdScrollable>\r\n          </gd-document>\r\n        </div>\r\n      </div>\r\n      <div class=\"result-panel\" *ngIf=\"activeTab === resultTab\">\r\n        <div  class=\"loader\" *ngIf=\"!result\">\r\n          <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\r\n          <span>Loading... Please wait.</span>\r\n        </div>\r\n        <gd-result-document\r\n          class=\"gd-document\"\r\n          *ngIf=\"result\"\r\n          [file]=\"result\"\r\n          [mode]=\"false\"\r\n          [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\"\r\n          gdRenderPrint\r\n          [htmlMode]=\"false\"\r\n          gdScrollable>\r\n        </gd-result-document>\r\n      </div>\r\n    </div>\r\n    <gd-side-panel (hideSidePanel)=\"hideSidePanel($event)\"\r\n                   *ngIf=\"result && activeTab === resultTab\"\r\n                   [title]=\"'Differences'\"\r\n                   [saveable]=\"false\"\r\n                   [icon]=\"'info-circle'\">\r\n      <gd-differences\r\n        [changes]=\"result.changes\">\r\n      </gd-differences>\r\n    </gd-side-panel>\r\n  </div>\r\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\"\r\n                         [files]=\"files\"\r\n                         (selectedDirectory)=\"selectDir($event)\"\r\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal, activePanel)\"\r\n                         [uploadConfig]=\"uploadConfig\">\r\n  </gd-browse-files-modal>\r\n  <gd-password-required></gd-password-required>\r\n  <gd-error-modal></gd-error-modal>\r\n</div>\r\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .tools .button{color:#fff!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .button.inactive{color:#959da5!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}::ng-deep .compare-file .icon-button{margin:0!important}::ng-deep .compare-file .icon-button .text{padding:0!important}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.loader{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%}.upload-compare-file{height:100%;width:50%;border-right:1px solid #ccc;display:-webkit-box;display:flex;align-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;text-align:center;-webkit-box-flex:0;flex-grow:0}.open-file-panel{display:-webkit-box;display:flex;width:100%}.files-panel{background-color:#e7e7e7;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%;height:100%}.result-panel{background-color:#e7e7e7;width:100%;height:100%;display:-webkit-box;display:flex;align-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;text-align:center}.doc-panel{display:-webkit-box;display:flex;height:inherit}.gd-document{width:100%;height:100%}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}.row{display:-webkit-box;display:flex;height:inherit}.column{width:100%}.tabs-wrapper{display:-webkit-box;display:flex;justify-self:flex-end;align-self:flex-end;width:100%;-webkit-box-pack:end;justify-content:flex-end}.tabs{display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:end;justify-content:flex-end}::ng-deep .button.brand fa-icon{color:#fff!important}@media (max-width:1037px){.files-panel{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:calc(100% - 60px)}.files-panel .upload-compare-file{width:100%;height:50%;border-bottom:1px solid #ccc}::ng-deep .gd-side-panel-wrapper{height:50%!important;top:inherit!important;bottom:0!important}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px!important;width:60px}::ng-deep .tabs-wrapper .gd-tab .icon{font-size:22px!important}}"]
            }] }
];
/** @nocollapse */
ComparisonAppComponent.ctorParameters = () => [
    { type: ComparisonService },
    { type: ComparisonConfigService },
    { type: UploadFilesService },
    { type: PagePreloadService },
    { type: ModalService },
    { type: TabActivatorService },
    { type: ElementRef },
    { type: PasswordService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyaXNvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvY29tcGFyaXNvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQ0wsWUFBWSxFQUlaLFlBQVksRUFBYSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQ3RHLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7O01BSWpELENBQUMsR0FBRyxNQUFNO0FBRWhCLE1BQU0sT0FBTyxLQUFLOztBQUNULFdBQUssR0FBRyxPQUFPLENBQUM7QUFDaEIsWUFBTSxHQUFHLFFBQVEsQ0FBQzs7O0lBRHpCLFlBQXVCOztJQUN2QixhQUF5Qjs7QUFHM0IsTUFBTSxPQUFPLFNBQVM7SUFBdEI7UUFFRSxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2pCLENBQUM7Q0FBQTs7O0lBRkMsdUJBQVc7O0lBQ1gsMkJBQWU7O0FBUWpCLE1BQU0sT0FBTyxzQkFBc0I7Ozs7Ozs7Ozs7O0lBb0JqQyxZQUFvQixrQkFBcUMsRUFDckMsYUFBc0MsRUFDOUMsa0JBQXNDLEVBQ3RDLGtCQUFzQyxFQUM5QixhQUEyQixFQUMzQixvQkFBeUMsRUFDekMsV0FBb0MsRUFDNUMsZUFBZ0M7UUFQeEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFHdEMsa0JBQWEsR0FBYixhQUFhLENB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Qzs7SUFDbEMsZ0RBQW1DOztJQUNuQyxtREFBMEI7O0lBQzFCLG9EQUEyQjs7SUFDM0IsNENBQWU7O0lBQ2Ysd0NBQXNCOztJQUN0QiwwQ0FBbUI7O0lBQ25CLDJDQUFxQjs7SUFDckIsMkNBQTBCOztJQUMxQixtREFBeUI7Ozs7O0lBRWIsb0RBQTZDOzs7OztJQUM3QywrQ0FBOEM7Ozs7O0lBRzlDLCtDQUFtQzs7Ozs7SUFDbkMsc0RBQWlEOzs7OztJQUNqRCw2Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQge1xyXG4gIENvbW1vbk1vZGFscyxcclxuICBGaWxlQ3JlZGVudGlhbHMsXHJcbiAgRmlsZURlc2NyaXB0aW9uLFxyXG4gIEZpbGVNb2RlbCxcclxuICBNb2RhbFNlcnZpY2UsIFBhZ2VNb2RlbCwgUGFnZVByZWxvYWRTZXJ2aWNlLCBUYWJBY3RpdmF0b3JTZXJ2aWNlLCBVcGxvYWRGaWxlc1NlcnZpY2UsIFBhc3N3b3JkU2VydmljZVxyXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtDb21wYXJpc29uQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vY29tcGFyaXNvbi1jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbXBhcmlzb25TZXJ2aWNlfSBmcm9tIFwiLi9jb21wYXJpc29uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb21wYXJpc29uQ29uZmlnfSBmcm9tIFwiLi9jb21wYXJpc29uLWNvbmZpZ1wiO1xyXG5pbXBvcnQge0NvbXBhcmVSZXN1bHR9IGZyb20gXCIuL21vZGVsc1wiO1xyXG5cclxuY29uc3QgJCA9IGpxdWVyeTtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlcyB7XHJcbiAgc3RhdGljIEZJUlNUID0gJ2ZpcnN0JztcclxuICBzdGF0aWMgU0VDT05EID0gJ3NlY29uZCc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHQge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgYWN0aXZlID0gZmFsc2U7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtY29tcGFyaXNvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBhcmlzb24tYXBwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb21wYXJpc29uLWFwcC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wYXJpc29uQXBwQ29tcG9uZW50IHtcclxuICBmaWxlczogRmlsZU1vZGVsW10gPSBbXTtcclxuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xyXG4gIGNyZWRlbnRpYWxzOiBNYXA8c3RyaW5nLCBGaWxlQ3JlZGVudGlhbHM+ID0gbmV3IE1hcDxzdHJpbmcsIEZpbGVDcmVkZW50aWFscz4oKTtcclxuICBmaWxlOiBNYXA8c3RyaW5nLCBGaWxlRGVzY3JpcHRpb24+ID0gbmV3IE1hcDxzdHJpbmcsIEZpbGVEZXNjcmlwdGlvbj4oKTtcclxuICBjb21wYXJpc29uQ29uZmlnOiBDb21wYXJpc29uQ29uZmlnO1xyXG4gIGFjdGl2ZVBhbmVsOiBzdHJpbmc7XHJcbiAgZmlyc3QgPSBGaWxlcy5GSVJTVDtcclxuICBzZWNvbmQgPSBGaWxlcy5TRUNPTkQ7XHJcbiAgZmlyc3RGaWxlTmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIHNlY29uZEZpbGVOYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgbG9hZGluZ0ZpcnN0UGFuZWwgPSBmYWxzZTtcclxuICBsb2FkaW5nU2Vjb25kUGFuZWwgPSBmYWxzZTtcclxuICBjb3VudFBhZ2VzID0gMDtcclxuICByZXN1bHQ6IENvbXBhcmVSZXN1bHQ7XHJcbiAgZmlsZXNUYWIgPSAnZmlsZXMnO1xyXG4gIHJlc3VsdFRhYiA9ICdyZXN1bHQnO1xyXG4gIGFjdGl2ZVRhYiA9IHRoaXMuZmlsZXNUYWI7XHJcbiAgcmVzdWx0VGFiRGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb21wYXJpc29uU2VydmljZTogQ29tcGFyaXNvblNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb21wYXJpc29uQ29uZmlnU2VydmljZSxcclxuICAgICAgICAgICAgICB1cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcclxuICAgICAgICAgICAgICBwYWdlUHJlbG9hZFNlcnZpY2U6IFBhZ2VQcmVsb2FkU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF90YWJBY3RpdmF0b3JTZXJ2aWNlOiBUYWJBY3RpdmF0b3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgICAgICAgICAgIHBhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlKSB7XHJcbiAgICBjb25maWdTZXJ2aWNlLnVwZGF0ZWRDb25maWcuc3Vic2NyaWJlKChjb25maWcpID0+IHtcclxuICAgICAgdGhpcy5jb21wYXJpc29uQ29uZmlnID0gY29uZmlnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcGFnZVByZWxvYWRTZXJ2aWNlLmNoZWNrUHJlbG9hZC5zdWJzY3JpYmUoKHBhZ2U6IG51bWJlcikgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jb21wYXJpc29uQ29uZmlnLnByZWxvYWRSZXN1bHRQYWdlQ291bnQgIT09IDApIHtcclxuICAgICAgICB0aGlzLmNoZWNrUHJlbG9hZCh0aGlzLmZpcnN0LCBwYWdlKTtcclxuICAgICAgICB0aGlzLmNoZWNrUHJlbG9hZCh0aGlzLnNlY29uZCwgcGFnZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xyXG4gICAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmFjdGl2ZVBhbmVsO1xyXG4gICAgICB0aGlzLnNldExvYWRpbmcoYWN0aXZlLCB0cnVlKTtcclxuICAgICAgaWYgKHVwbG9hZHMpIHtcclxuICAgICAgICBsZXQgaTogbnVtYmVyO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB1cGxvYWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB0aGlzLl9jb21wYXJpc29uU2VydmljZS51cGxvYWQodXBsb2Fkcy5pdGVtKGkpLCAnJywgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0RmlsZShvYmouZ3VpZCwgJycsIGFjdGl2ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgX3RhYkFjdGl2YXRvclNlcnZpY2UuYWN0aXZlVGFiQ2hhbmdlLnN1YnNjcmliZSgodGFiSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9IHRhYklkO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcGFzc3dvcmRTZXJ2aWNlLnBhc3NDaGFuZ2Uuc3Vic2NyaWJlKChwYXNzOiBzdHJpbmcpID0+IHtcclxuICAgICAgbGV0IGFjdGl2ZVBhbmVsRmlsZUd1aWQgPSBcIlwiO1xyXG4gICAgICBpZiAodGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5maXJzdCkpIHtcclxuICAgICAgICBhY3RpdmVQYW5lbEZpbGVHdWlkID0gdGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5maXJzdCkuZ3VpZDtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLnNlY29uZCkpIHtcclxuICAgICAgICBhY3RpdmVQYW5lbEZpbGVHdWlkID0gdGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5zZWNvbmQpLmd1aWQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWxlY3RGaWxlKGFjdGl2ZVBhbmVsRmlsZUd1aWQsIHBhc3MsIENvbW1vbk1vZGFscy5QYXNzd29yZFJlcXVpcmVkLCB0aGlzLmFjdGl2ZVBhbmVsKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb25Db25maWcgPyB0aGlzLmNvbXBhcmlzb25Db25maWcudXBsb2FkIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0TG9hZGluZyhwYW5lbDogc3RyaW5nLCBmbGFnOiBib29sZWFuKSB7XHJcbiAgICBpZiAocGFuZWwgPT09IHRoaXMuZmlyc3QpIHtcclxuICAgICAgdGhpcy5sb2FkaW5nRmlyc3RQYW5lbCA9IGZsYWc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxvYWRpbmdTZWNvbmRQYW5lbCA9IGZsYWc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgcmV3cml0ZUNvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb25Db25maWcgPyB0aGlzLmNvbXBhcmlzb25Db25maWcucmV3cml0ZSA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbXBhcmlzb25TZXJ2aWNlLmxvYWRGaWxlcygkZXZlbnQpLnN1YnNjcmliZSgoZmlsZXM6IEZpbGVNb2RlbFtdKSA9PiB7XHJcbiAgICAgIGxldCBuYW1lRXh0OiBzdHJpbmc7XHJcbiAgICAgIGlmICh0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLmZpcnN0KSkge1xyXG4gICAgICAgIG5hbWVFeHQgPSB0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLmZpcnN0KS5ndWlkLnNwbGl0KCcuJykucG9wKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5zZWNvbmQpKSB7XHJcbiAgICAgICAgbmFtZUV4dCA9IHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuc2Vjb25kKS5ndWlkLnNwbGl0KCcuJykucG9wKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChuYW1lRXh0KSB7XHJcbiAgICAgICAgZmlsZXMgPSBmaWxlcy5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICByZXR1cm4gdmFsdWUuZGlyZWN0b3J5IHx8IHZhbHVlLmd1aWQuc3BsaXQoJy4nKS5wb3AoKSA9PT0gbmFtZUV4dDtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW107XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEZpbGUoJGV2ZW50OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG1vZGFsSWQ6IHN0cmluZywgcGFyYW06IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXRMb2FkaW5nKHBhcmFtLCB0cnVlKTtcclxuICAgIHRoaXMuZ2V0RmlsZSgkZXZlbnQsIHBhc3N3b3JkLCBwYXJhbSk7XHJcbiAgICB0aGlzLnNlbGVjdERpcignJyk7XHJcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UobW9kYWxJZCk7XHJcbiAgICB0aGlzLmNsZWFyRGF0YShwYXJhbSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpbGUoJGV2ZW50OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIHBhcmFtOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGNyZWRlbnRpYWxzID0ge2d1aWQ6ICRldmVudCwgcGFzc3dvcmQ6IHBhc3N3b3JkfTtcclxuICAgIHRoaXMuY3JlZGVudGlhbHMuc2V0KHBhcmFtLCBjcmVkZW50aWFscyk7XHJcbiAgICB0aGlzLl9jb21wYXJpc29uU2VydmljZS5sb2FkRmlsZShjcmVkZW50aWFscykuc3Vic2NyaWJlKChmaWxlOiBGaWxlRGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICB0aGlzLmZpbGUuc2V0KHBhcmFtLCBmaWxlKTtcclxuICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgY29uc3QgcHJlbG9hZFJlc3VsdFBhZ2VDb3VudCA9IHRoaXMuY29tcGFyaXNvbkNvbmZpZy5wcmVsb2FkUmVzdWx0UGFnZUNvdW50O1xyXG4gICAgICAgICAgdGhpcy5jb3VudFBhZ2VzID0gZmlsZS5wYWdlcyA/IGZpbGUucGFnZXMubGVuZ3RoIDogMDtcclxuICAgICAgICAgIGlmIChwcmVsb2FkUmVzdWx0UGFnZUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnByZWxvYWRQYWdlcyhwYXJhbSwgMSwgcHJlbG9hZFJlc3VsdFBhZ2VDb3VudCA+IHRoaXMuY291bnRQYWdlcyA/IHRoaXMuY291bnRQYWdlcyA6IHByZWxvYWRSZXN1bHRQYWdlQ291bnQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUZpbGVOYW1lcygpO1xyXG4gICAgICAgIHRoaXMuc2V0TG9hZGluZyhwYXJhbSwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJGaWxlKHBhcmFtOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY2xlYXJEYXRhKHBhcmFtKTtcclxuICAgIHRoaXMuY3JlZGVudGlhbHMuZGVsZXRlKHBhcmFtKTtcclxuICAgIHRoaXMucmVzdWx0ID0gbnVsbDtcclxuICAgIHRoaXMucmVzdWx0VGFiRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5fdGFiQWN0aXZhdG9yU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIodGhpcy5maWxlc1RhYik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyRGF0YShwYXJhbSkge1xyXG4gICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5zaXplKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZmlsZS5kZWxldGUocGFyYW0pO1xyXG4gICAgaWYgKHBhcmFtID09PSB0aGlzLmZpcnN0KSB7XHJcbiAgICAgIHRoaXMuZmlyc3RGaWxlTmFtZSA9IHVuZGVmaW5lZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2Vjb25kRmlsZU5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmVsb2FkUGFnZXMocGFyYW06IHN0cmluZywgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcclxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xyXG4gICAgICB0aGlzLl9jb21wYXJpc29uU2VydmljZS5sb2FkUGFnZSh0aGlzLmNyZWRlbnRpYWxzLmdldChwYXJhbSksIGkpLnN1YnNjcmliZSgocGFnZTogUGFnZU1vZGVsKSA9PiB7XHJcbiAgICAgICAgdGhpcy5maWxlLmdldChwYXJhbSkucGFnZXNbaSAtIDFdID0gcGFnZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlUGFuZWw7XHJcbiAgICB0aGlzLl9jb21wYXJpc29uU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcclxuICAgICAgdGhpcy5nZXRGaWxlKG9iai5ndWlkLCAnJywgYWN0aXZlKTtcclxuICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVGaWxlTmFtZXMoKSB7XHJcbiAgICB0aGlzLmZpcnN0RmlsZU5hbWUgPSB0aGlzLmdldEZpcnN0RmlsZU5hbWUoKTtcclxuICAgIHRoaXMuc2Vjb25kRmlsZU5hbWUgPSB0aGlzLmdldFNlY29uZEZpbGVOYW1lKCk7XHJcbiAgfVxyXG5cclxuICBnZXRTZWNvbmRGaWxlTmFtZSgpIHtcclxuICAgIGNvbnN0IGZpbGVDcmVkZW50aWFscyA9IHRoaXMuY3JlZGVudGlhbHMgPyB0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLnNlY29uZCkgOiB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gZmlsZUNyZWRlbnRpYWxzID8gZmlsZUNyZWRlbnRpYWxzLmd1aWQucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpIDogJyc7XHJcbiAgfVxyXG5cclxuICBnZXRGaXJzdEZpbGVOYW1lKCkge1xyXG4gICAgY29uc3QgZmlsZUNyZWRlbnRpYWxzID0gdGhpcy5jcmVkZW50aWFscyA/IHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuZmlyc3QpIDogdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuIGZpbGVDcmVkZW50aWFscyA/IGZpbGVDcmVkZW50aWFscy5ndWlkLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKSA6ICcnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja1ByZWxvYWQocGFuZWw6IHN0cmluZywgcGFnZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuZmlsZS5nZXQocGFuZWwpKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IHBhZ2U7IGkgPCBwYWdlICsgMjsgaSsrKSB7XHJcbiAgICAgIGlmIChpID4gMCAmJiBpIDw9IHRoaXMuY291bnRQYWdlcyAmJiAhdGhpcy5maWxlLmdldChwYW5lbCkucGFnZXNbaSAtIDFdLmRhdGEpIHtcclxuICAgICAgICB0aGlzLnByZWxvYWRQYWdlcyhwYW5lbCwgaSwgaSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBhcmUoKSB7XHJcbiAgICBpZiAodGhpcy5jcmVkZW50aWFscy5zaXplICE9PSAyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMucmVzdWx0VGFiRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgYXJyLnB1c2godGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5maXJzdCkpO1xyXG4gICAgYXJyLnB1c2godGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5zZWNvbmQpKTtcclxuICAgIHRoaXMuX2NvbXBhcmlzb25TZXJ2aWNlLmNvbXBhcmUoYXJyKS5zdWJzY3JpYmUoKHJlc3VsdDogQ29tcGFyZVJlc3VsdCkgPT4ge1xyXG4gICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcclxuXHJcbiAgICAgIGNvbnN0IGlzWmVyb0Jhc2VkUGFnZUlkID0gdGhpcy5yZXN1bHQuY2hhbmdlcy5maW5kKChjaGFuZ2UpID0+IGNoYW5nZS5wYWdlSW5mby5wYWdlTnVtYmVyID09PSAwKTtcclxuXHJcbiAgICAgIHRoaXMucmVzdWx0LmNoYW5nZXMuZm9yRWFjaCggKGNoYW5nZSkgPT4ge1xyXG4gICAgICAgIGNoYW5nZS5pZCA9IHRoaXMuZ2VuZXJhdGVSYW5kb21JbnRlZ2VyKCk7XHJcbiAgICAgICAgY29uc3QgemVyb0Jhc2VkSWQgPSBpc1plcm9CYXNlZFBhZ2VJZCA/IGNoYW5nZS5wYWdlSW5mby5wYWdlTnVtYmVyIDogY2hhbmdlLnBhZ2VJbmZvLnBhZ2VOdW1iZXIgLSAxO1xyXG4gICAgICAgIGNoYW5nZS5wYWdlSW5mby5wYWdlTnVtYmVyID0gaXNaZXJvQmFzZWRQYWdlSWQgPyBjaGFuZ2UucGFnZUluZm8ucGFnZU51bWJlciA6IGNoYW5nZS5wYWdlSW5mby5wYWdlTnVtYmVyIC0gMTtcclxuICAgICAgICBpZighdGhpcy5yZXN1bHQucGFnZXNbemVyb0Jhc2VkSWRdLmNoYW5nZXMpe1xyXG4gICAgICAgICAgdGhpcy5yZXN1bHQucGFnZXNbemVyb0Jhc2VkSWRdLmNoYW5nZXMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXN1bHQucGFnZXNbemVyb0Jhc2VkSWRdLmNoYW5nZXMucHVzaChjaGFuZ2UpO1xyXG4gICAgICAgIGNoYW5nZS5ub3JtYWxpemVkID0ge1xyXG4gICAgICAgICAgeCA6IHRoaXMucHhUb1B0KGNoYW5nZS5ib3gueCkgKiAxMDAgLyBjaGFuZ2UucGFnZUluZm8ud2lkdGgsXHJcbiAgICAgICAgICB5IDogdGhpcy5weFRvUHQoY2hhbmdlLmJveC55KSAqIDEwMCAvIGNoYW5nZS5wYWdlSW5mby5oZWlnaHQsXHJcbiAgICAgICAgICB3aWR0aDogdGhpcy5weFRvUHQoY2hhbmdlLmJveC53aWR0aCkgKiAxMDAgLyBjaGFuZ2UucGFnZUluZm8ud2lkdGgsXHJcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMucHhUb1B0KGNoYW5nZS5ib3guaGVpZ2h0KSAqIDEwMCAvIGNoYW5nZS5wYWdlSW5mby5oZWlnaHQsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICB9LCAoZXJyID0+IHtcclxuICAgICAgdGhpcy5yZXN1bHRUYWJEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuX3RhYkFjdGl2YXRvclNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKHRoaXMuZmlsZXNUYWIpO1xyXG4gICAgfSkpO1xyXG4gICAgdGhpcy5fdGFiQWN0aXZhdG9yU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIodGhpcy5yZXN1bHRUYWIpO1xyXG4gIH1cclxuXHJcbiAgcHhUb1B0KHB4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBweCAqIDcyIC8gOTY7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZVJhbmRvbUludGVnZXIoKSB7XHJcbiAgICBmdW5jdGlvbiBfcDgocykge1xyXG4gICAgICAgIGNvbnN0IHAgPSAoTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikgKyBcIjAwMDAwMDAwMFwiKS5zdWJzdHIoMiwgOCk7XHJcbiAgICAgICAgcmV0dXJuIHMgPyBcIi1cIiArIHAuc3Vic3RyKDAsIDQpICsgXCItXCIgKyBwLnN1YnN0cig0LCA0KSA6IHA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX3A4KG51bGwpICsgX3A4KHRydWUpICsgX3A4KHRydWUpICsgX3A4KG51bGwpO1xyXG4gIH1cclxuXHJcbiAgZG93bmxvYWQoKSB7XHJcbiAgICBpZiAoIXRoaXMucmVzdWx0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGNyZWRlbnRpYWxzID0geydndWlkJzogdGhpcy5yZXN1bHQuZ3VpZCwgJ3Bhc3N3b3JkJzogJyd9O1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLl9jb21wYXJpc29uU2VydmljZS5nZXREb3dubG9hZFVybChjcmVkZW50aWFscykpO1xyXG4gIH1cclxuXHJcbiAgaGlkZVNpZGVQYW5lbCgkZXZlbnQpIHtcclxuICAgIHRoaXMuYWN0aXZlVGFiID0gJGV2ZW50ID8gdGhpcy5maWxlc1RhYiA6IHRoaXMucmVzdWx0VGFiO1xyXG4gICAgdGhpcy5fdGFiQWN0aXZhdG9yU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIodGhpcy5maWxlc1RhYik7XHJcbiAgfVxyXG59XHJcbiJdfQ==