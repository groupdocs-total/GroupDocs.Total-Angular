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
    ngOnInit() {
        /** @type {?} */
        const queryString = window.location.search;
        if (queryString) {
            /** @type {?} */
            const urlParams = new URLSearchParams(queryString);
            /** @type {?} */
            const firstFile = urlParams.get(Files.FIRST);
            /** @type {?} */
            const secondFile = urlParams.get(Files.SECOND);
            if (firstFile && secondFile) {
                this.selectFile(firstFile, '', '', Files.FIRST);
                this.selectFile(secondFile, '', '', Files.SECOND);
                this.compare();
                return;
            }
        }
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
                template: "<!--<gd-loading-mask></gd-loading-mask>-->\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"column\">\n      <div class=\"top-panel\">\n        <gd-logo [logo]=\"'comparison'\" icon=\"copy\"></gd-logo>\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'play'\" [tooltip]=\"'Compare'\" [disabled]=\"!file.get(first) || !file.get(second)\"\n                     (click)=\"compare()\"></gd-button>\n          <gd-button [icon]=\"'download'\" [tooltip]=\"'Download'\" [disabled]=\"!result\" (click)=\"download()\"></gd-button>\n          <div class=\"tabs-wrapper\">\n            <div class=\"tabs\">\n              <gd-tabs>\n                <gd-tab [id]=\"filesTab\" tabTitle=\"Documents\" [icon]=\"'copy'\" [active]=\"true\" [content]=\"false\">\n                </gd-tab>\n                <gd-tab [id]=\"resultTab\" tabTitle=\"Result\" [icon]=\"'poll'\" [disabled]=\"resultTabDisabled\" [content]=\"false\">\n                </gd-tab>\n              </gd-tabs>\n            </div>\n          </div>\n        </gd-top-toolbar>\n      </div>\n      <div class=\"files-panel\" *ngIf=\"activeTab === filesTab\">\n        <div class=\"upload-compare-file\">\n          <gd-add-file-panel class=\"compare-file\"\n                             [fileName]=\"firstFileName\"\n                             [panel]=\"first\"\n                             (active)=\"activePanel = $event\"\n                             (urlForUpload)=\"upload($event)\"\n                             (cleanPanel)=\"clearFile(first)\">\n          </gd-add-file-panel>\n          <gd-upload-file-panel\n                                [panel]=\"first\"\n                                (active)=\"activePanel = $event\"\n                                *ngIf=\"!firstFileName && !loadingFirstPanel\">\n          </gd-upload-file-panel>\n          <div *ngIf=\"loadingFirstPanel\" class=\"loader\">\n            <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n            <span>Loading... Please wait.</span>\n          </div>\n          <gd-document class=\"gd-document\"\n                       *ngIf=\"file.get(first)\"\n                       [file]=\"file.get(first)\"\n                       [mode]=\"false\"\n                       [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\" gdRenderPrint\n                       [htmlMode]=\"false\"\n                       gdScrollable>\n          </gd-document>\n        </div>\n        <div class=\"upload-compare-file\">\n          <gd-add-file-panel class=\"compare-file\"\n                             [fileName]=\"secondFileName\"\n                             [panel]=\"second\"\n                             (active)=\"activePanel = $event\"\n                             (urlForUpload)=\"upload($event)\"\n                             (cleanPanel)=\"clearFile(second)\">\n          </gd-add-file-panel>\n          <gd-upload-file-panel [panel]=\"second\"\n                                (active)=\"activePanel = $event\"\n                                *ngIf=\"!secondFileName && !loadingSecondPanel\">\n          </gd-upload-file-panel>\n          <div *ngIf=\"loadingSecondPanel\" class=\"loader\">\n            <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n            <span>Loading... Please wait.</span>\n          </div>\n          <gd-document class=\"gd-document\"\n                       *ngIf=\"file.get(second)\"\n                       [file]=\"file.get(second)\"\n                       [mode]=\"false\"\n                       [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\" gdRenderPrint\n                       [htmlMode]=\"false\"\n                       gdScrollable>\n          </gd-document>\n        </div>\n      </div>\n      <div class=\"result-panel\" *ngIf=\"activeTab === resultTab\">\n        <div  class=\"loader\" *ngIf=\"!result\">\n          <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n          <span>Loading... Please wait.</span>\n        </div>\n        <gd-result-document\n          class=\"gd-document\"\n          *ngIf=\"result\"\n          [file]=\"result\"\n          [mode]=\"false\"\n          [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\"\n          gdRenderPrint\n          [htmlMode]=\"false\"\n          gdScrollable>\n        </gd-result-document>\n      </div>\n    </div>\n    <gd-side-panel (hideSidePanel)=\"hideSidePanel($event)\"\n                   *ngIf=\"result && activeTab === resultTab\"\n                   [title]=\"'Differences'\"\n                   [saveable]=\"false\"\n                   [icon]=\"'info-circle'\">\n      <gd-differences\n        [changes]=\"result.changes\">\n      </gd-differences>\n    </gd-side-panel>\n  </div>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\"\n                         [files]=\"files\"\n                         (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal, activePanel)\"\n                         [uploadConfig]=\"uploadConfig\">\n  </gd-browse-files-modal>\n  <gd-password-required></gd-password-required>\n  <gd-error-modal></gd-error-modal>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyaXNvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvY29tcGFyaXNvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQ0wsWUFBWSxFQUlaLFlBQVksRUFBYSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQ3RHLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7O01BSWpELENBQUMsR0FBRyxNQUFNO0FBRWhCLE1BQU0sT0FBTyxLQUFLOztBQUNULFdBQUssR0FBRyxPQUFPLENBQUM7QUFDaEIsWUFBTSxHQUFHLFFBQVEsQ0FBQzs7O0lBRHpCLFlBQXVCOztJQUN2QixhQUF5Qjs7QUFHM0IsTUFBTSxPQUFPLFNBQVM7SUFBdEI7UUFFRSxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2pCLENBQUM7Q0FBQTs7O0lBRkMsdUJBQVc7O0lBQ1gsMkJBQWU7O0FBUWpCLE1BQU0sT0FBTyxzQkFBc0I7Ozs7Ozs7Ozs7O0lBb0JqQyxZQUFvQixrQkFBcUMsRUFDckMsYUFBc0MsRUFDOUMsa0JBQXNDLEVBQ3RDLGtCQUFzQyxFQUM5QixhQUEyQixFQUMzQixvQkFBeUMsRUFDekMsV0FBb0MsRUFDNUMsZUFBZ0M7UUFQeEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFHdEMsa0JBQWEsR0FBYixhQUFhLENB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OUUsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsTUFBTTtRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN6RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7WUE3UUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6Qiw2cUtBQThDOzthQUUvQzs7OztZQXBCTyxpQkFBaUI7WUFEakIsdUJBQXVCO1lBRnFDLGtCQUFrQjtZQUEzRCxrQkFBa0I7WUFBM0MsWUFBWTtZQUFpQyxtQkFBbUI7WUFQL0MsVUFBVTtZQU8yRCxlQUFlOzs7O0lBeUJyRyx1Q0FBd0I7O0lBQ3hCLGtEQUE0Qzs7SUFDNUMsNkNBQStFOztJQUMvRSxzQ0FBd0U7O0lBQ3hFLGtEQUFtQzs7SUFDbkMsNkNBQW9COztJQUNwQix1Q0FBb0I7O0lBQ3BCLHdDQUFzQjs7SUFDdEIsK0NBQWtDOztJQUNsQyxnREFBbUM7O0lBQ25DLG1EQUEwQjs7SUFDMUIsb0RBQTJCOztJQUMzQiw0Q0FBZTs7SUFDZix3Q0FBc0I7O0lBQ3RCLDBDQUFtQjs7SUFDbkIsMkNBQXFCOztJQUNyQiwyQ0FBMEI7O0lBQzFCLG1EQUF5Qjs7Ozs7SUFFYixvREFBNkM7Ozs7O0lBQzdDLCtDQUE4Qzs7Ozs7SUFHOUMsK0NBQW1DOzs7OztJQUNuQyxzREFBaUQ7Ozs7O0lBQ2pELDZDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge1xuICBDb21tb25Nb2RhbHMsXG4gIEZpbGVDcmVkZW50aWFscyxcbiAgRmlsZURlc2NyaXB0aW9uLFxuICBGaWxlTW9kZWwsXG4gIE1vZGFsU2VydmljZSwgUGFnZU1vZGVsLCBQYWdlUHJlbG9hZFNlcnZpY2UsIFRhYkFjdGl2YXRvclNlcnZpY2UsIFVwbG9hZEZpbGVzU2VydmljZSwgUGFzc3dvcmRTZXJ2aWNlXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7Q29tcGFyaXNvbkNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL2NvbXBhcmlzb24tY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29tcGFyaXNvblNlcnZpY2V9IGZyb20gXCIuL2NvbXBhcmlzb24uc2VydmljZVwiO1xuaW1wb3J0IHtDb21wYXJpc29uQ29uZmlnfSBmcm9tIFwiLi9jb21wYXJpc29uLWNvbmZpZ1wiO1xuaW1wb3J0IHtDb21wYXJlUmVzdWx0fSBmcm9tIFwiLi9tb2RlbHNcIjtcblxuY29uc3QgJCA9IGpxdWVyeTtcblxuZXhwb3J0IGNsYXNzIEZpbGVzIHtcbiAgc3RhdGljIEZJUlNUID0gJ2ZpcnN0JztcbiAgc3RhdGljIFNFQ09ORCA9ICdzZWNvbmQnO1xufVxuXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0IHtcbiAgaWQ6IHN0cmluZztcbiAgYWN0aXZlID0gZmFsc2U7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWNvbXBhcmlzb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tcGFyaXNvbi1hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21wYXJpc29uLWFwcC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbXBhcmlzb25BcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmaWxlczogRmlsZU1vZGVsW10gPSBbXTtcbiAgYnJvd3NlRmlsZXNNb2RhbCA9IENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcztcbiAgY3JlZGVudGlhbHM6IE1hcDxzdHJpbmcsIEZpbGVDcmVkZW50aWFscz4gPSBuZXcgTWFwPHN0cmluZywgRmlsZUNyZWRlbnRpYWxzPigpO1xuICBmaWxlOiBNYXA8c3RyaW5nLCBGaWxlRGVzY3JpcHRpb24+ID0gbmV3IE1hcDxzdHJpbmcsIEZpbGVEZXNjcmlwdGlvbj4oKTtcbiAgY29tcGFyaXNvbkNvbmZpZzogQ29tcGFyaXNvbkNvbmZpZztcbiAgYWN0aXZlUGFuZWw6IHN0cmluZztcbiAgZmlyc3QgPSBGaWxlcy5GSVJTVDtcbiAgc2Vjb25kID0gRmlsZXMuU0VDT05EO1xuICBmaXJzdEZpbGVOYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIHNlY29uZEZpbGVOYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIGxvYWRpbmdGaXJzdFBhbmVsID0gZmFsc2U7XG4gIGxvYWRpbmdTZWNvbmRQYW5lbCA9IGZhbHNlO1xuICBjb3VudFBhZ2VzID0gMDtcbiAgcmVzdWx0OiBDb21wYXJlUmVzdWx0O1xuICBmaWxlc1RhYiA9ICdmaWxlcyc7XG4gIHJlc3VsdFRhYiA9ICdyZXN1bHQnO1xuICBhY3RpdmVUYWIgPSB0aGlzLmZpbGVzVGFiO1xuICByZXN1bHRUYWJEaXNhYmxlZCA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29tcGFyaXNvblNlcnZpY2U6IENvbXBhcmlzb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbXBhcmlzb25Db25maWdTZXJ2aWNlLFxuICAgICAgICAgICAgICB1cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcbiAgICAgICAgICAgICAgcGFnZVByZWxvYWRTZXJ2aWNlOiBQYWdlUHJlbG9hZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF90YWJBY3RpdmF0b3JTZXJ2aWNlOiBUYWJBY3RpdmF0b3JTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UpIHtcbiAgICBjb25maWdTZXJ2aWNlLnVwZGF0ZWRDb25maWcuc3Vic2NyaWJlKChjb25maWcpID0+IHtcbiAgICAgIHRoaXMuY29tcGFyaXNvbkNvbmZpZyA9IGNvbmZpZztcbiAgICB9KTtcblxuICAgIHBhZ2VQcmVsb2FkU2VydmljZS5jaGVja1ByZWxvYWQuc3Vic2NyaWJlKChwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLmNvbXBhcmlzb25Db25maWcucHJlbG9hZFJlc3VsdFBhZ2VDb3VudCAhPT0gMCkge1xuICAgICAgICB0aGlzLmNoZWNrUHJlbG9hZCh0aGlzLmZpcnN0LCBwYWdlKTtcbiAgICAgICAgdGhpcy5jaGVja1ByZWxvYWQodGhpcy5zZWNvbmQsIHBhZ2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdXBsb2FkRmlsZXNTZXJ2aWNlLnVwbG9hZHNDaGFuZ2Uuc3Vic2NyaWJlKCh1cGxvYWRzKSA9PiB7XG4gICAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmFjdGl2ZVBhbmVsO1xuICAgICAgdGhpcy5zZXRMb2FkaW5nKGFjdGl2ZSwgdHJ1ZSk7XG4gICAgICBpZiAodXBsb2Fkcykge1xuICAgICAgICBsZXQgaTogbnVtYmVyO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXBsb2Fkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuX2NvbXBhcmlzb25TZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oaSksICcnLCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0RmlsZShvYmouZ3VpZCwgJycsIGFjdGl2ZSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF90YWJBY3RpdmF0b3JTZXJ2aWNlLmFjdGl2ZVRhYkNoYW5nZS5zdWJzY3JpYmUoKHRhYklkOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gdGFiSWQ7XG4gICAgfSk7XG5cbiAgICBwYXNzd29yZFNlcnZpY2UucGFzc0NoYW5nZS5zdWJzY3JpYmUoKHBhc3M6IHN0cmluZykgPT4ge1xuICAgICAgbGV0IGFjdGl2ZVBhbmVsRmlsZUd1aWQgPSBcIlwiO1xuICAgICAgaWYgKHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuZmlyc3QpKSB7XG4gICAgICAgIGFjdGl2ZVBhbmVsRmlsZUd1aWQgPSB0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLmZpcnN0KS5ndWlkO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLnNlY29uZCkpIHtcbiAgICAgICAgYWN0aXZlUGFuZWxGaWxlR3VpZCA9IHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuc2Vjb25kKS5ndWlkO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RGaWxlKGFjdGl2ZVBhbmVsRmlsZUd1aWQsIHBhc3MsIENvbW1vbk1vZGFscy5QYXNzd29yZFJlcXVpcmVkLCB0aGlzLmFjdGl2ZVBhbmVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICBpZiAocXVlcnlTdHJpbmcpIHtcbiAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xuXG4gICAgICBjb25zdCBmaXJzdEZpbGUgPSB1cmxQYXJhbXMuZ2V0KEZpbGVzLkZJUlNUKTtcbiAgICAgIGNvbnN0IHNlY29uZEZpbGUgPSB1cmxQYXJhbXMuZ2V0KEZpbGVzLlNFQ09ORCk7XG4gICAgICBpZihmaXJzdEZpbGUgJiYgc2Vjb25kRmlsZSkge1xuICAgICAgICB0aGlzLnNlbGVjdEZpbGUoZmlyc3RGaWxlLCAnJywgJycsIEZpbGVzLkZJUlNUKTtcbiAgICAgICAgdGhpcy5zZWxlY3RGaWxlKHNlY29uZEZpbGUsICcnLCAnJywgRmlsZXMuU0VDT05EKTtcbiAgICAgICAgdGhpcy5jb21wYXJlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgdXBsb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb25Db25maWcgPyB0aGlzLmNvbXBhcmlzb25Db25maWcudXBsb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TG9hZGluZyhwYW5lbDogc3RyaW5nLCBmbGFnOiBib29sZWFuKSB7XG4gICAgaWYgKHBhbmVsID09PSB0aGlzLmZpcnN0KSB7XG4gICAgICB0aGlzLmxvYWRpbmdGaXJzdFBhbmVsID0gZmxhZztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkaW5nU2Vjb25kUGFuZWwgPSBmbGFnO1xuICAgIH1cbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb25Db25maWcgPyB0aGlzLmNvbXBhcmlzb25Db25maWcucmV3cml0ZSA6IHRydWU7XG4gIH1cblxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb21wYXJpc29uU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBGaWxlTW9kZWxbXSkgPT4ge1xuICAgICAgbGV0IG5hbWVFeHQ6IHN0cmluZztcbiAgICAgIGlmICh0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLmZpcnN0KSkge1xuICAgICAgICBuYW1lRXh0ID0gdGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5maXJzdCkuZ3VpZC5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLnNlY29uZCkpIHtcbiAgICAgICAgbmFtZUV4dCA9IHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuc2Vjb25kKS5ndWlkLnNwbGl0KCcuJykucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lRXh0KSB7XG4gICAgICAgIGZpbGVzID0gZmlsZXMuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZS5kaXJlY3RvcnkgfHwgdmFsdWUuZ3VpZC5zcGxpdCgnLicpLnBvcCgpID09PSBuYW1lRXh0O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsZXMgPSBmaWxlcyB8fCBbXTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdEZpbGUoJGV2ZW50OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG1vZGFsSWQ6IHN0cmluZywgcGFyYW06IHN0cmluZykge1xuICAgIHRoaXMuc2V0TG9hZGluZyhwYXJhbSwgdHJ1ZSk7XG4gICAgdGhpcy5nZXRGaWxlKCRldmVudCwgcGFzc3dvcmQsIHBhcmFtKTtcbiAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKG1vZGFsSWQpO1xuICAgIHRoaXMuY2xlYXJEYXRhKHBhcmFtKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmlsZSgkZXZlbnQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgcGFyYW06IHN0cmluZykge1xuICAgIGNvbnN0IGNyZWRlbnRpYWxzID0ge2d1aWQ6ICRldmVudCwgcGFzc3dvcmQ6IHBhc3N3b3JkfTtcbiAgICB0aGlzLmNyZWRlbnRpYWxzLnNldChwYXJhbSwgY3JlZGVudGlhbHMpO1xuICAgIHRoaXMuX2NvbXBhcmlzb25TZXJ2aWNlLmxvYWRGaWxlKGNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGZpbGU6IEZpbGVEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICB0aGlzLmZpbGUuc2V0KHBhcmFtLCBmaWxlKTtcbiAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICBjb25zdCBwcmVsb2FkUmVzdWx0UGFnZUNvdW50ID0gdGhpcy5jb21wYXJpc29uQ29uZmlnLnByZWxvYWRSZXN1bHRQYWdlQ291bnQ7XG4gICAgICAgICAgdGhpcy5jb3VudFBhZ2VzID0gZmlsZS5wYWdlcyA/IGZpbGUucGFnZXMubGVuZ3RoIDogMDtcbiAgICAgICAgICBpZiAocHJlbG9hZFJlc3VsdFBhZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKHBhcmFtLCAxLCBwcmVsb2FkUmVzdWx0UGFnZUNvdW50ID4gdGhpcy5jb3VudFBhZ2VzID8gdGhpcy5jb3VudFBhZ2VzIDogcHJlbG9hZFJlc3VsdFBhZ2VDb3VudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlRmlsZU5hbWVzKCk7XG4gICAgICAgIHRoaXMuc2V0TG9hZGluZyhwYXJhbSwgZmFsc2UpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBjbGVhckZpbGUocGFyYW06IHN0cmluZykge1xuICAgIHRoaXMuY2xlYXJEYXRhKHBhcmFtKTtcbiAgICB0aGlzLmNyZWRlbnRpYWxzLmRlbGV0ZShwYXJhbSk7XG4gICAgdGhpcy5yZXN1bHQgPSBudWxsO1xuICAgIHRoaXMucmVzdWx0VGFiRGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuX3RhYkFjdGl2YXRvclNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKHRoaXMuZmlsZXNUYWIpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckRhdGEocGFyYW0pIHtcbiAgICBpZiAoIXRoaXMuZmlsZSB8fCAhdGhpcy5maWxlLnNpemUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5maWxlLmRlbGV0ZShwYXJhbSk7XG4gICAgaWYgKHBhcmFtID09PSB0aGlzLmZpcnN0KSB7XG4gICAgICB0aGlzLmZpcnN0RmlsZU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2Vjb25kRmlsZU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJlbG9hZFBhZ2VzKHBhcmFtOiBzdHJpbmcsIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzLl9jb21wYXJpc29uU2VydmljZS5sb2FkUGFnZSh0aGlzLmNyZWRlbnRpYWxzLmdldChwYXJhbSksIGkpLnN1YnNjcmliZSgocGFnZTogUGFnZU1vZGVsKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZS5nZXQocGFyYW0pLnBhZ2VzW2kgLSAxXSA9IHBhZ2U7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmFjdGl2ZVBhbmVsO1xuICAgIHRoaXMuX2NvbXBhcmlzb25TZXJ2aWNlLnVwbG9hZChudWxsLCAkZXZlbnQsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKChvYmo6IEZpbGVDcmVkZW50aWFscykgPT4ge1xuICAgICAgdGhpcy5nZXRGaWxlKG9iai5ndWlkLCAnJywgYWN0aXZlKTtcbiAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUZpbGVOYW1lcygpIHtcbiAgICB0aGlzLmZpcnN0RmlsZU5hbWUgPSB0aGlzLmdldEZpcnN0RmlsZU5hbWUoKTtcbiAgICB0aGlzLnNlY29uZEZpbGVOYW1lID0gdGhpcy5nZXRTZWNvbmRGaWxlTmFtZSgpO1xuICB9XG5cbiAgZ2V0U2Vjb25kRmlsZU5hbWUoKSB7XG4gICAgY29uc3QgZmlsZUNyZWRlbnRpYWxzID0gdGhpcy5jcmVkZW50aWFscyA/IHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuc2Vjb25kKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gZmlsZUNyZWRlbnRpYWxzID8gZmlsZUNyZWRlbnRpYWxzLmd1aWQucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpIDogJyc7XG4gIH1cblxuICBnZXRGaXJzdEZpbGVOYW1lKCkge1xuICAgIGNvbnN0IGZpbGVDcmVkZW50aWFscyA9IHRoaXMuY3JlZGVudGlhbHMgPyB0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLmZpcnN0KSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gZmlsZUNyZWRlbnRpYWxzID8gZmlsZUNyZWRlbnRpYWxzLmd1aWQucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpIDogJyc7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrUHJlbG9hZChwYW5lbDogc3RyaW5nLCBwYWdlOiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuZmlsZS5nZXQocGFuZWwpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IHBhZ2U7IGkgPCBwYWdlICsgMjsgaSsrKSB7XG4gICAgICBpZiAoaSA+IDAgJiYgaSA8PSB0aGlzLmNvdW50UGFnZXMgJiYgIXRoaXMuZmlsZS5nZXQocGFuZWwpLnBhZ2VzW2kgLSAxXS5kYXRhKSB7XG4gICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKHBhbmVsLCBpLCBpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wYXJlKCkge1xuICAgIGlmICh0aGlzLmNyZWRlbnRpYWxzLnNpemUgIT09IDIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZXN1bHRUYWJEaXNhYmxlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIGFyci5wdXNoKHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuZmlyc3QpKTtcbiAgICBhcnIucHVzaCh0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLnNlY29uZCkpO1xuICAgIHRoaXMuX2NvbXBhcmlzb25TZXJ2aWNlLmNvbXBhcmUoYXJyKS5zdWJzY3JpYmUoKHJlc3VsdDogQ29tcGFyZVJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG5cbiAgICAgIGNvbnN0IGlzWmVyb0Jhc2VkUGFnZUlkID0gdGhpcy5yZXN1bHQuY2hhbmdlcy5maW5kKChjaGFuZ2UpID0+IGNoYW5nZS5wYWdlSW5mby5wYWdlTnVtYmVyID09PSAwKTtcblxuICAgICAgdGhpcy5yZXN1bHQuY2hhbmdlcy5mb3JFYWNoKCAoY2hhbmdlKSA9PiB7XG4gICAgICAgIGNoYW5nZS5pZCA9IHRoaXMuZ2VuZXJhdGVSYW5kb21JbnRlZ2VyKCk7XG4gICAgICAgIGNvbnN0IHplcm9CYXNlZElkID0gaXNaZXJvQmFzZWRQYWdlSWQgPyBjaGFuZ2UucGFnZUluZm8ucGFnZU51bWJlciA6IGNoYW5nZS5wYWdlSW5mby5wYWdlTnVtYmVyIC0gMTtcbiAgICAgICAgY2hhbmdlLnBhZ2VJbmZvLnBhZ2VOdW1iZXIgPSBpc1plcm9CYXNlZFBhZ2VJZCA/IGNoYW5nZS5wYWdlSW5mby5wYWdlTnVtYmVyIDogY2hhbmdlLnBhZ2VJbmZvLnBhZ2VOdW1iZXIgLSAxO1xuICAgICAgICBpZighdGhpcy5yZXN1bHQucGFnZXNbemVyb0Jhc2VkSWRdLmNoYW5nZXMpe1xuICAgICAgICAgIHRoaXMucmVzdWx0LnBhZ2VzW3plcm9CYXNlZElkXS5jaGFuZ2VzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHQucGFnZXNbemVyb0Jhc2VkSWRdLmNoYW5nZXMucHVzaChjaGFuZ2UpO1xuICAgICAgICBjaGFuZ2Uubm9ybWFsaXplZCA9IHtcbiAgICAgICAgICB4IDogdGhpcy5weFRvUHQoY2hhbmdlLmJveC54KSAqIDEwMCAvIGNoYW5nZS5wYWdlSW5mby53aWR0aCxcbiAgICAgICAgICB5IDogdGhpcy5weFRvUHQoY2hhbmdlLmJveC55KSAqIDEwMCAvIGNoYW5nZS5wYWdlSW5mby5oZWlnaHQsXG4gICAgICAgICAgd2lkdGg6IHRoaXMucHhUb1B0KGNoYW5nZS5ib3gud2lkdGgpICogMTAwIC8gY2hhbmdlLnBhZ2VJbmZvLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5weFRvUHQoY2hhbmdlLmJveC5oZWlnaHQpICogMTAwIC8gY2hhbmdlLnBhZ2VJbmZvLmhlaWdodCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0sIChlcnIgPT4ge1xuICAgICAgdGhpcy5yZXN1bHRUYWJEaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLl90YWJBY3RpdmF0b3JTZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYih0aGlzLmZpbGVzVGFiKTtcbiAgICB9KSk7XG4gICAgdGhpcy5fdGFiQWN0aXZhdG9yU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIodGhpcy5yZXN1bHRUYWIpO1xuICB9XG5cbiAgcHhUb1B0KHB4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gcHggKiA3MiAvIDk2O1xuICB9XG5cbiAgZ2VuZXJhdGVSYW5kb21JbnRlZ2VyKCkge1xuICAgIGZ1bmN0aW9uIF9wOChzKSB7XG4gICAgICAgIGNvbnN0IHAgPSAoTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikgKyBcIjAwMDAwMDAwMFwiKS5zdWJzdHIoMiwgOCk7XG4gICAgICAgIHJldHVybiBzID8gXCItXCIgKyBwLnN1YnN0cigwLCA0KSArIFwiLVwiICsgcC5zdWJzdHIoNCwgNCkgOiBwO1xuICAgIH1cbiAgICByZXR1cm4gX3A4KG51bGwpICsgX3A4KHRydWUpICsgX3A4KHRydWUpICsgX3A4KG51bGwpO1xuICB9XG5cbiAgZG93bmxvYWQoKSB7XG4gICAgaWYgKCF0aGlzLnJlc3VsdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjcmVkZW50aWFscyA9IHsnZ3VpZCc6IHRoaXMucmVzdWx0Lmd1aWQsICdwYXNzd29yZCc6ICcnfTtcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHRoaXMuX2NvbXBhcmlzb25TZXJ2aWNlLmdldERvd25sb2FkVXJsKGNyZWRlbnRpYWxzKSk7XG4gIH1cblxuICBoaWRlU2lkZVBhbmVsKCRldmVudCkge1xuICAgIHRoaXMuYWN0aXZlVGFiID0gJGV2ZW50ID8gdGhpcy5maWxlc1RhYiA6IHRoaXMucmVzdWx0VGFiO1xuICAgIHRoaXMuX3RhYkFjdGl2YXRvclNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKHRoaXMuZmlsZXNUYWIpO1xuICB9XG59XG4iXX0=