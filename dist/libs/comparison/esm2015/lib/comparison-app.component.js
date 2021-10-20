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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyaXNvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvY29tcGFyaXNvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQ0wsWUFBWSxFQUlaLFlBQVksRUFBYSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQ3RHLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7O01BSWpELENBQUMsR0FBRyxNQUFNO0FBRWhCLE1BQU0sT0FBTyxLQUFLOztBQUNULFdBQUssR0FBRyxPQUFPLENBQUM7QUFDaEIsWUFBTSxHQUFHLFFBQVEsQ0FBQzs7O0lBRHpCLFlBQXVCOztJQUN2QixhQUF5Qjs7QUFHM0IsTUFBTSxPQUFPLFNBQVM7SUFBdEI7UUFFRSxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2pCLENBQUM7Q0FBQTs7O0lBRkMsdUJBQVc7O0lBQ1gsMkJBQWU7O0FBUWpCLE1BQU0sT0FBTyxzQkFBc0I7Ozs7Ozs7Ozs7O0lBb0JqQyxZQUFvQixrQkFBcUMsRUFDckMsYUFBc0MsRUFDOUMsa0JBQXNDLEVBQ3RDLGtCQUFzQyxFQUM5QixhQUEyQixFQUMzQixvQkFBeUMsRUFDekMsV0FBb0MsRUFDNUMsZUFBZ0M7UUFQeEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFHdEMsa0JBQWEsR0FBYixhQUFhLENB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Qzs7SUFDbEMsZ0RBQW1DOztJQUNuQyxtREFBMEI7O0lBQzFCLG9EQUEyQjs7SUFDM0IsNENBQWU7O0lBQ2Ysd0NBQXNCOztJQUN0QiwwQ0FBbUI7O0lBQ25CLDJDQUFxQjs7SUFDckIsMkNBQTBCOztJQUMxQixtREFBeUI7Ozs7O0lBRWIsb0RBQTZDOzs7OztJQUM3QywrQ0FBOEM7Ozs7O0lBRzlDLCtDQUFtQzs7Ozs7SUFDbkMsc0RBQWlEOzs7OztJQUNqRCw2Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7XG4gIENvbW1vbk1vZGFscyxcbiAgRmlsZUNyZWRlbnRpYWxzLFxuICBGaWxlRGVzY3JpcHRpb24sXG4gIEZpbGVNb2RlbCxcbiAgTW9kYWxTZXJ2aWNlLCBQYWdlTW9kZWwsIFBhZ2VQcmVsb2FkU2VydmljZSwgVGFiQWN0aXZhdG9yU2VydmljZSwgVXBsb2FkRmlsZXNTZXJ2aWNlLCBQYXNzd29yZFNlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtDb21wYXJpc29uQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vY29tcGFyaXNvbi1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtDb21wYXJpc29uU2VydmljZX0gZnJvbSBcIi4vY29tcGFyaXNvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbXBhcmlzb25Db25maWd9IGZyb20gXCIuL2NvbXBhcmlzb24tY29uZmlnXCI7XG5pbXBvcnQge0NvbXBhcmVSZXN1bHR9IGZyb20gXCIuL21vZGVsc1wiO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5leHBvcnQgY2xhc3MgRmlsZXMge1xuICBzdGF0aWMgRklSU1QgPSAnZmlyc3QnO1xuICBzdGF0aWMgU0VDT05EID0gJ3NlY29uZCc7XG59XG5cbmV4cG9ydCBjbGFzcyBIaWdobGlnaHQge1xuICBpZDogc3RyaW5nO1xuICBhY3RpdmUgPSBmYWxzZTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtY29tcGFyaXNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wYXJpc29uLWFwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbXBhcmlzb24tYXBwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tcGFyaXNvbkFwcENvbXBvbmVudCB7XG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xuICBjcmVkZW50aWFsczogTWFwPHN0cmluZywgRmlsZUNyZWRlbnRpYWxzPiA9IG5ldyBNYXA8c3RyaW5nLCBGaWxlQ3JlZGVudGlhbHM+KCk7XG4gIGZpbGU6IE1hcDxzdHJpbmcsIEZpbGVEZXNjcmlwdGlvbj4gPSBuZXcgTWFwPHN0cmluZywgRmlsZURlc2NyaXB0aW9uPigpO1xuICBjb21wYXJpc29uQ29uZmlnOiBDb21wYXJpc29uQ29uZmlnO1xuICBhY3RpdmVQYW5lbDogc3RyaW5nO1xuICBmaXJzdCA9IEZpbGVzLkZJUlNUO1xuICBzZWNvbmQgPSBGaWxlcy5TRUNPTkQ7XG4gIGZpcnN0RmlsZU5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgc2Vjb25kRmlsZU5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgbG9hZGluZ0ZpcnN0UGFuZWwgPSBmYWxzZTtcbiAgbG9hZGluZ1NlY29uZFBhbmVsID0gZmFsc2U7XG4gIGNvdW50UGFnZXMgPSAwO1xuICByZXN1bHQ6IENvbXBhcmVSZXN1bHQ7XG4gIGZpbGVzVGFiID0gJ2ZpbGVzJztcbiAgcmVzdWx0VGFiID0gJ3Jlc3VsdCc7XG4gIGFjdGl2ZVRhYiA9IHRoaXMuZmlsZXNUYWI7XG4gIHJlc3VsdFRhYkRpc2FibGVkID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb21wYXJpc29uU2VydmljZTogQ29tcGFyaXNvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY29uZmlnU2VydmljZTogQ29tcGFyaXNvbkNvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHVwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwYWdlUHJlbG9hZFNlcnZpY2U6IFBhZ2VQcmVsb2FkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3RhYkFjdGl2YXRvclNlcnZpY2U6IFRhYkFjdGl2YXRvclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSkge1xuICAgIGNvbmZpZ1NlcnZpY2UudXBkYXRlZENvbmZpZy5zdWJzY3JpYmUoKGNvbmZpZykgPT4ge1xuICAgICAgdGhpcy5jb21wYXJpc29uQ29uZmlnID0gY29uZmlnO1xuICAgIH0pO1xuXG4gICAgcGFnZVByZWxvYWRTZXJ2aWNlLmNoZWNrUHJlbG9hZC5zdWJzY3JpYmUoKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRoaXMuY29tcGFyaXNvbkNvbmZpZy5wcmVsb2FkUmVzdWx0UGFnZUNvdW50ICE9PSAwKSB7XG4gICAgICAgIHRoaXMuY2hlY2tQcmVsb2FkKHRoaXMuZmlyc3QsIHBhZ2UpO1xuICAgICAgICB0aGlzLmNoZWNrUHJlbG9hZCh0aGlzLnNlY29uZCwgcGFnZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB1cGxvYWRGaWxlc1NlcnZpY2UudXBsb2Fkc0NoYW5nZS5zdWJzY3JpYmUoKHVwbG9hZHMpID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlUGFuZWw7XG4gICAgICB0aGlzLnNldExvYWRpbmcoYWN0aXZlLCB0cnVlKTtcbiAgICAgIGlmICh1cGxvYWRzKSB7XG4gICAgICAgIGxldCBpOiBudW1iZXI7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB1cGxvYWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5fY29tcGFyaXNvblNlcnZpY2UudXBsb2FkKHVwbG9hZHMuaXRlbShpKSwgJycsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKChvYmo6IEZpbGVDcmVkZW50aWFscykgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXRGaWxlKG9iai5ndWlkLCAnJywgYWN0aXZlKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX3RhYkFjdGl2YXRvclNlcnZpY2UuYWN0aXZlVGFiQ2hhbmdlLnN1YnNjcmliZSgodGFiSWQ6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVUYWIgPSB0YWJJZDtcbiAgICB9KTtcblxuICAgIHBhc3N3b3JkU2VydmljZS5wYXNzQ2hhbmdlLnN1YnNjcmliZSgocGFzczogc3RyaW5nKSA9PiB7XG4gICAgICBsZXQgYWN0aXZlUGFuZWxGaWxlR3VpZCA9IFwiXCI7XG4gICAgICBpZiAodGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5maXJzdCkpIHtcbiAgICAgICAgYWN0aXZlUGFuZWxGaWxlR3VpZCA9IHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuZmlyc3QpLmd1aWQ7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuc2Vjb25kKSkge1xuICAgICAgICBhY3RpdmVQYW5lbEZpbGVHdWlkID0gdGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5zZWNvbmQpLmd1aWQ7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdEZpbGUoYWN0aXZlUGFuZWxGaWxlR3VpZCwgcGFzcywgQ29tbW9uTW9kYWxzLlBhc3N3b3JkUmVxdWlyZWQsIHRoaXMuYWN0aXZlUGFuZWwpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJpc29uQ29uZmlnID8gdGhpcy5jb21wYXJpc29uQ29uZmlnLnVwbG9hZCA6IHRydWU7XG4gIH1cblxuICBwcml2YXRlIHNldExvYWRpbmcocGFuZWw6IHN0cmluZywgZmxhZzogYm9vbGVhbikge1xuICAgIGlmIChwYW5lbCA9PT0gdGhpcy5maXJzdCkge1xuICAgICAgdGhpcy5sb2FkaW5nRmlyc3RQYW5lbCA9IGZsYWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZGluZ1NlY29uZFBhbmVsID0gZmxhZztcbiAgICB9XG4gIH1cblxuICBnZXQgcmV3cml0ZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJpc29uQ29uZmlnID8gdGhpcy5jb21wYXJpc29uQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xuICB9XG5cbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29tcGFyaXNvblNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRmlsZU1vZGVsW10pID0+IHtcbiAgICAgIGxldCBuYW1lRXh0OiBzdHJpbmc7XG4gICAgICBpZiAodGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5maXJzdCkpIHtcbiAgICAgICAgbmFtZUV4dCA9IHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuZmlyc3QpLmd1aWQuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5zZWNvbmQpKSB7XG4gICAgICAgIG5hbWVFeHQgPSB0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLnNlY29uZCkuZ3VpZC5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmFtZUV4dCkge1xuICAgICAgICBmaWxlcyA9IGZpbGVzLmZpbHRlcihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUuZGlyZWN0b3J5IHx8IHZhbHVlLmd1aWQuc3BsaXQoJy4nKS5wb3AoKSA9PT0gbmFtZUV4dDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW107XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBtb2RhbElkOiBzdHJpbmcsIHBhcmFtOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNldExvYWRpbmcocGFyYW0sIHRydWUpO1xuICAgIHRoaXMuZ2V0RmlsZSgkZXZlbnQsIHBhc3N3b3JkLCBwYXJhbSk7XG4gICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShtb2RhbElkKTtcbiAgICB0aGlzLmNsZWFyRGF0YShwYXJhbSk7XG4gIH1cblxuICBwcml2YXRlIGdldEZpbGUoJGV2ZW50OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIHBhcmFtOiBzdHJpbmcpIHtcbiAgICBjb25zdCBjcmVkZW50aWFscyA9IHtndWlkOiAkZXZlbnQsIHBhc3N3b3JkOiBwYXNzd29yZH07XG4gICAgdGhpcy5jcmVkZW50aWFscy5zZXQocGFyYW0sIGNyZWRlbnRpYWxzKTtcbiAgICB0aGlzLl9jb21wYXJpc29uU2VydmljZS5sb2FkRmlsZShjcmVkZW50aWFscykuc3Vic2NyaWJlKChmaWxlOiBGaWxlRGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgdGhpcy5maWxlLnNldChwYXJhbSwgZmlsZSk7XG4gICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgY29uc3QgcHJlbG9hZFJlc3VsdFBhZ2VDb3VudCA9IHRoaXMuY29tcGFyaXNvbkNvbmZpZy5wcmVsb2FkUmVzdWx0UGFnZUNvdW50O1xuICAgICAgICAgIHRoaXMuY291bnRQYWdlcyA9IGZpbGUucGFnZXMgPyBmaWxlLnBhZ2VzLmxlbmd0aCA6IDA7XG4gICAgICAgICAgaWYgKHByZWxvYWRSZXN1bHRQYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnByZWxvYWRQYWdlcyhwYXJhbSwgMSwgcHJlbG9hZFJlc3VsdFBhZ2VDb3VudCA+IHRoaXMuY291bnRQYWdlcyA/IHRoaXMuY291bnRQYWdlcyA6IHByZWxvYWRSZXN1bHRQYWdlQ291bnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUZpbGVOYW1lcygpO1xuICAgICAgICB0aGlzLnNldExvYWRpbmcocGFyYW0sIGZhbHNlKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY2xlYXJGaWxlKHBhcmFtOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNsZWFyRGF0YShwYXJhbSk7XG4gICAgdGhpcy5jcmVkZW50aWFscy5kZWxldGUocGFyYW0pO1xuICAgIHRoaXMucmVzdWx0ID0gbnVsbDtcbiAgICB0aGlzLnJlc3VsdFRhYkRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLl90YWJBY3RpdmF0b3JTZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYih0aGlzLmZpbGVzVGFiKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJEYXRhKHBhcmFtKSB7XG4gICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5zaXplKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZmlsZS5kZWxldGUocGFyYW0pO1xuICAgIGlmIChwYXJhbSA9PT0gdGhpcy5maXJzdCkge1xuICAgICAgdGhpcy5maXJzdEZpbGVOYW1lID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlY29uZEZpbGVOYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByZWxvYWRQYWdlcyhwYXJhbTogc3RyaW5nLCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgdGhpcy5fY29tcGFyaXNvblNlcnZpY2UubG9hZFBhZ2UodGhpcy5jcmVkZW50aWFscy5nZXQocGFyYW0pLCBpKS5zdWJzY3JpYmUoKHBhZ2U6IFBhZ2VNb2RlbCkgPT4ge1xuICAgICAgICB0aGlzLmZpbGUuZ2V0KHBhcmFtKS5wYWdlc1tpIC0gMV0gPSBwYWdlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5hY3RpdmVQYW5lbDtcbiAgICB0aGlzLl9jb21wYXJpc29uU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcbiAgICAgIHRoaXMuZ2V0RmlsZShvYmouZ3VpZCwgJycsIGFjdGl2ZSk7XG4gICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVGaWxlTmFtZXMoKSB7XG4gICAgdGhpcy5maXJzdEZpbGVOYW1lID0gdGhpcy5nZXRGaXJzdEZpbGVOYW1lKCk7XG4gICAgdGhpcy5zZWNvbmRGaWxlTmFtZSA9IHRoaXMuZ2V0U2Vjb25kRmlsZU5hbWUoKTtcbiAgfVxuXG4gIGdldFNlY29uZEZpbGVOYW1lKCkge1xuICAgIGNvbnN0IGZpbGVDcmVkZW50aWFscyA9IHRoaXMuY3JlZGVudGlhbHMgPyB0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLnNlY29uZCkgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIGZpbGVDcmVkZW50aWFscyA/IGZpbGVDcmVkZW50aWFscy5ndWlkLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKSA6ICcnO1xuICB9XG5cbiAgZ2V0Rmlyc3RGaWxlTmFtZSgpIHtcbiAgICBjb25zdCBmaWxlQ3JlZGVudGlhbHMgPSB0aGlzLmNyZWRlbnRpYWxzID8gdGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5maXJzdCkgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIGZpbGVDcmVkZW50aWFscyA/IGZpbGVDcmVkZW50aWFscy5ndWlkLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKSA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1ByZWxvYWQocGFuZWw6IHN0cmluZywgcGFnZTogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLmZpbGUuZ2V0KHBhbmVsKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGZvciAobGV0IGkgPSBwYWdlOyBpIDwgcGFnZSArIDI7IGkrKykge1xuICAgICAgaWYgKGkgPiAwICYmIGkgPD0gdGhpcy5jb3VudFBhZ2VzICYmICF0aGlzLmZpbGUuZ2V0KHBhbmVsKS5wYWdlc1tpIC0gMV0uZGF0YSkge1xuICAgICAgICB0aGlzLnByZWxvYWRQYWdlcyhwYW5lbCwgaSwgaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcGFyZSgpIHtcbiAgICBpZiAodGhpcy5jcmVkZW50aWFscy5zaXplICE9PSAyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVzdWx0VGFiRGlzYWJsZWQgPSBmYWxzZTtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBhcnIucHVzaCh0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLmZpcnN0KSk7XG4gICAgYXJyLnB1c2godGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5zZWNvbmQpKTtcbiAgICB0aGlzLl9jb21wYXJpc29uU2VydmljZS5jb21wYXJlKGFycikuc3Vic2NyaWJlKChyZXN1bHQ6IENvbXBhcmVSZXN1bHQpID0+IHtcbiAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xuXG4gICAgICBjb25zdCBpc1plcm9CYXNlZFBhZ2VJZCA9IHRoaXMucmVzdWx0LmNoYW5nZXMuZmluZCgoY2hhbmdlKSA9PiBjaGFuZ2UucGFnZUluZm8ucGFnZU51bWJlciA9PT0gMCk7XG5cbiAgICAgIHRoaXMucmVzdWx0LmNoYW5nZXMuZm9yRWFjaCggKGNoYW5nZSkgPT4ge1xuICAgICAgICBjaGFuZ2UuaWQgPSB0aGlzLmdlbmVyYXRlUmFuZG9tSW50ZWdlcigpO1xuICAgICAgICBjb25zdCB6ZXJvQmFzZWRJZCA9IGlzWmVyb0Jhc2VkUGFnZUlkID8gY2hhbmdlLnBhZ2VJbmZvLnBhZ2VOdW1iZXIgOiBjaGFuZ2UucGFnZUluZm8ucGFnZU51bWJlciAtIDE7XG4gICAgICAgIGNoYW5nZS5wYWdlSW5mby5wYWdlTnVtYmVyID0gaXNaZXJvQmFzZWRQYWdlSWQgPyBjaGFuZ2UucGFnZUluZm8ucGFnZU51bWJlciA6IGNoYW5nZS5wYWdlSW5mby5wYWdlTnVtYmVyIC0gMTtcbiAgICAgICAgaWYoIXRoaXMucmVzdWx0LnBhZ2VzW3plcm9CYXNlZElkXS5jaGFuZ2VzKXtcbiAgICAgICAgICB0aGlzLnJlc3VsdC5wYWdlc1t6ZXJvQmFzZWRJZF0uY2hhbmdlcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0LnBhZ2VzW3plcm9CYXNlZElkXS5jaGFuZ2VzLnB1c2goY2hhbmdlKTtcbiAgICAgICAgY2hhbmdlLm5vcm1hbGl6ZWQgPSB7XG4gICAgICAgICAgeCA6IHRoaXMucHhUb1B0KGNoYW5nZS5ib3gueCkgKiAxMDAgLyBjaGFuZ2UucGFnZUluZm8ud2lkdGgsXG4gICAgICAgICAgeSA6IHRoaXMucHhUb1B0KGNoYW5nZS5ib3gueSkgKiAxMDAgLyBjaGFuZ2UucGFnZUluZm8uaGVpZ2h0LFxuICAgICAgICAgIHdpZHRoOiB0aGlzLnB4VG9QdChjaGFuZ2UuYm94LndpZHRoKSAqIDEwMCAvIGNoYW5nZS5wYWdlSW5mby53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMucHhUb1B0KGNoYW5nZS5ib3guaGVpZ2h0KSAqIDEwMCAvIGNoYW5nZS5wYWdlSW5mby5oZWlnaHQsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9LCAoZXJyID0+IHtcbiAgICAgIHRoaXMucmVzdWx0VGFiRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fdGFiQWN0aXZhdG9yU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIodGhpcy5maWxlc1RhYik7XG4gICAgfSkpO1xuICAgIHRoaXMuX3RhYkFjdGl2YXRvclNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKHRoaXMucmVzdWx0VGFiKTtcbiAgfVxuXG4gIHB4VG9QdChweDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHB4ICogNzIgLyA5NjtcbiAgfVxuXG4gIGdlbmVyYXRlUmFuZG9tSW50ZWdlcigpIHtcbiAgICBmdW5jdGlvbiBfcDgocykge1xuICAgICAgICBjb25zdCBwID0gKE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpICsgXCIwMDAwMDAwMDBcIikuc3Vic3RyKDIsIDgpO1xuICAgICAgICByZXR1cm4gcyA/IFwiLVwiICsgcC5zdWJzdHIoMCwgNCkgKyBcIi1cIiArIHAuc3Vic3RyKDQsIDQpIDogcDtcbiAgICB9XG4gICAgcmV0dXJuIF9wOChudWxsKSArIF9wOCh0cnVlKSArIF9wOCh0cnVlKSArIF9wOChudWxsKTtcbiAgfVxuXG4gIGRvd25sb2FkKCkge1xuICAgIGlmICghdGhpcy5yZXN1bHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3JlZGVudGlhbHMgPSB7J2d1aWQnOiB0aGlzLnJlc3VsdC5ndWlkLCAncGFzc3dvcmQnOiAnJ307XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLl9jb21wYXJpc29uU2VydmljZS5nZXREb3dubG9hZFVybChjcmVkZW50aWFscykpO1xuICB9XG5cbiAgaGlkZVNpZGVQYW5lbCgkZXZlbnQpIHtcbiAgICB0aGlzLmFjdGl2ZVRhYiA9ICRldmVudCA/IHRoaXMuZmlsZXNUYWIgOiB0aGlzLnJlc3VsdFRhYjtcbiAgICB0aGlzLl90YWJBY3RpdmF0b3JTZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYih0aGlzLmZpbGVzVGFiKTtcbiAgfVxufVxuIl19