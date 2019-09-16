/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef } from '@angular/core';
import * as jquery from 'jquery';
import { CommonModals, ModalService, PagePreloadService, TabActivatorService, UploadFilesService } from "@groupdocs.examples.angular/common-components";
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
     */
    constructor(_comparisonService, configService, uploadFilesService, pagePreloadService, _modalService, _tabActivatorService, _elementRef) {
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
            (change) => change.pageInfo.id === 0));
            this.result.changes.forEach((/**
             * @param {?} change
             * @return {?}
             */
            (change) => {
                change.id = this.generateRandomInteger();
                /** @type {?} */
                const zeroBasedId = isZeroBasedPageId ? change.pageInfo.id : change.pageInfo.id - 1;
                change.pageInfo.id = isZeroBasedPageId ? change.pageInfo.id : change.pageInfo.id - 1;
                if (!this.result.pages[zeroBasedId].changes) {
                    this.result.pages[zeroBasedId].changes = [];
                }
                this.result.pages[zeroBasedId].changes.push(change);
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
        err => {
            this.resultTabDisabled = true;
            this._tabActivatorService.changeActiveTab(this.filesTab);
        })));
        this._tabActivatorService.changeActiveTab(this.resultTab);
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
                template: "<!--<gd-loading-mask></gd-loading-mask>-->\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"column\">\n      <div class=\"top-panel\">\n        <gd-logo [logo]=\"'comparison'\" icon=\"copy\"></gd-logo>\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'play'\" [tooltip]=\"'Compare'\" [disabled]=\"!file.get(first) || !file.get(second)\"\n                     (click)=\"compare()\"></gd-button>\n          <gd-button [icon]=\"'download'\" [tooltip]=\"'Download'\" [disabled]=\"!result\" (click)=\"download()\"></gd-button>\n          <div class=\"tabs-wrapper\">\n            <div class=\"tabs\">\n              <gd-tabs>\n                <gd-tab [id]=\"filesTab\" tabTitle=\"Documents\" [icon]=\"'copy'\" [active]=\"true\" [content]=\"false\">\n                </gd-tab>\n                <gd-tab [id]=\"resultTab\" tabTitle=\"Result\" [icon]=\"'poll'\" [disabled]=\"resultTabDisabled\" [content]=\"false\">\n                </gd-tab>\n              </gd-tabs>\n            </div>\n          </div>\n        </gd-top-toolbar>\n      </div>\n      <div class=\"files-panel\" *ngIf=\"activeTab === filesTab\">\n        <div class=\"upload-compare-file\">\n          <gd-add-file-panel class=\"compare-file\"\n                             [fileName]=\"firstFileName\"\n                             [panel]=\"first\"\n                             (active)=\"activePanel = $event\"\n                             (urlForUpload)=\"upload($event)\"\n                             (cleanPanel)=\"clearFile(first)\">\n          </gd-add-file-panel>\n          <gd-upload-file-panel\n                                [panel]=\"first\"\n                                (active)=\"activePanel = $event\"\n                                *ngIf=\"!firstFileName && !loadingFirstPanel\">\n          </gd-upload-file-panel>\n          <div *ngIf=\"loadingFirstPanel\" class=\"loader\">\n            <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n            <span>Loading... Please wait.</span>\n          </div>\n          <gd-document class=\"gd-document\"\n                       *ngIf=\"file.get(first)\"\n                       [file]=\"file.get(first)\"\n                       [mode]=\"false\"\n                       [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\" gdRenderPrint\n                       [htmlMode]=\"false\">\n          </gd-document>\n        </div>\n        <div class=\"upload-compare-file\">\n          <gd-add-file-panel class=\"compare-file\"\n                             [fileName]=\"secondFileName\"\n                             [panel]=\"second\"\n                             (active)=\"activePanel = $event\"\n                             (urlForUpload)=\"upload($event)\"\n                             (cleanPanel)=\"clearFile(second)\">\n          </gd-add-file-panel>\n          <gd-upload-file-panel [panel]=\"second\"\n                                (active)=\"activePanel = $event\"\n                                *ngIf=\"!secondFileName && !loadingSecondPanel\">\n          </gd-upload-file-panel>\n          <div *ngIf=\"loadingSecondPanel\" class=\"loader\">\n            <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n            <span>Loading... Please wait.</span>\n          </div>\n          <gd-document class=\"gd-document\"\n                       *ngIf=\"file.get(second)\"\n                       [file]=\"file.get(second)\"\n                       [mode]=\"false\"\n                       [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\" gdRenderPrint\n                       [htmlMode]=\"false\">\n          </gd-document>\n        </div>\n      </div>\n      <div class=\"result-panel\" *ngIf=\"activeTab === resultTab\">\n        <div  class=\"loader\" *ngIf=\"!result\">\n          <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n          <span>Loading... Please wait.</span>\n        </div>\n        <gd-result-document\n          class=\"gd-document\"\n          *ngIf=\"result\"\n          [file]=\"result\"\n          [mode]=\"false\"\n          [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\"\n          gdRenderPrint\n          [htmlMode]=\"false\">\n        </gd-result-document>\n      </div>\n    </div>\n    <gd-side-panel (hideSidePanel)=\"hideSidePanel($event)\"\n                   *ngIf=\"result && activeTab === resultTab\"\n                   [title]=\"'Differences'\"\n                   [icon]=\"'info-circle'\">\n      <gd-differences\n        [changes]=\"result.changes\">\n      </gd-differences>\n    </gd-side-panel>\n  </div>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\"\n                         [files]=\"files\"\n                         (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal, activePanel)\">\n  </gd-browse-files-modal>\n  <gd-error-modal></gd-error-modal>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.loader{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.upload-compare-file{height:100%;width:50%;border-right:1px solid #ccc;display:flex;align-content:center;flex-direction:column;text-align:center;flex-grow:0}.open-file-panel{display:flex;width:100%}.files-panel{background-color:#e7e7e7;display:flex;flex-direction:row;width:100%;height:100%}.result-panel{background-color:#e7e7e7;width:100%;height:100%;display:flex;align-content:center;flex-direction:column;justify-content:center;text-align:center}.doc-panel{display:flex;height:inherit}.gd-document{width:100%;height:100%}.top-panel{display:flex;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}.row{display:flex;height:inherit}.column{width:100%}.tabs-wrapper{display:flex;justify-self:flex-end;align-self:flex-end;width:100%;justify-content:flex-end}.tabs{display:flex;margin-right:30px;align-items:flex-end;justify-content:flex-end}@media (max-width:480px){.files-panel{flex-direction:column}.files-panel .upload-compare-file{width:100%;border-bottom:1px solid #ccc}/deep/ .gd-side-panel-wrapper{height:50%!important;top:inherit!important;bottom:0!important}}"]
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
    { type: ElementRef }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyaXNvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvY29tcGFyaXNvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQ0wsWUFBWSxFQUlaLFlBQVksRUFBYSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFDckYsTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7TUFJakQsQ0FBQyxHQUFHLE1BQU07QUFFaEIsTUFBTSxPQUFPLEtBQUs7O0FBQ1QsV0FBSyxHQUFHLE9BQU8sQ0FBQztBQUNoQixZQUFNLEdBQUcsUUFBUSxDQUFDOzs7SUFEekIsWUFBdUI7O0lBQ3ZCLGFBQXlCOztBQUczQixNQUFNLE9BQU8sU0FBUztJQUF0QjtRQUVFLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFDakIsQ0FBQztDQUFBOzs7SUFGQyx1QkFBVzs7SUFDWCwyQkFBZTs7QUFRakIsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7Ozs7OztJQW9CakMsWUFBb0Isa0JBQXFDLEVBQ3JDLGFBQXNDLEVBQzlDLGtCQUFzQyxFQUN0QyxrQkFBc0MsRUFDOUIsYUFBMkIsRUFDM0Isb0JBQXlDLEVBQ3pDLFdBQW9DO1FBTnBDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBR3RDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLHlCQUFvQixHQUFwQixv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QW1DOztJQUNuQyw2Q0FBb0I7O0lBQ3BCLHVDQUFvQjs7SUFDcEIsd0NBQXNCOztJQUN0QiwrQ0FBa0M7O0lBQ2xDLGdEQUFtQzs7SUFDbkMsbURBQTBCOztJQUMxQixvREFBMkI7O0lBQzNCLDRDQUFlOztJQUNmLHdDQUFzQjs7SUFDdEIsMENBQW1COztJQUNuQiwyQ0FBcUI7O0lBQ3JCLDJDQUEwQjs7SUFDMUIsbURBQXlCOzs7OztJQUViLG9EQUE2Qzs7Ozs7SUFDN0MsK0NBQThDOzs7OztJQUc5QywrQ0FBbUM7Ozs7O0lBQ25DLHNEQUFpRDs7Ozs7SUFDakQsNkNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge1xuICBDb21tb25Nb2RhbHMsXG4gIEZpbGVDcmVkZW50aWFscyxcbiAgRmlsZURlc2NyaXB0aW9uLFxuICBGaWxlTW9kZWwsXG4gIE1vZGFsU2VydmljZSwgUGFnZU1vZGVsLCBQYWdlUHJlbG9hZFNlcnZpY2UsIFRhYkFjdGl2YXRvclNlcnZpY2UsIFVwbG9hZEZpbGVzU2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge0NvbXBhcmlzb25Db25maWdTZXJ2aWNlfSBmcm9tIFwiLi9jb21wYXJpc29uLWNvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbXBhcmlzb25TZXJ2aWNlfSBmcm9tIFwiLi9jb21wYXJpc29uLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29tcGFyaXNvbkNvbmZpZ30gZnJvbSBcIi4vY29tcGFyaXNvbi1jb25maWdcIjtcbmltcG9ydCB7Q29tcGFyZVJlc3VsdH0gZnJvbSBcIi4vbW9kZWxzXCI7XG5cbmNvbnN0ICQgPSBqcXVlcnk7XG5cbmV4cG9ydCBjbGFzcyBGaWxlcyB7XG4gIHN0YXRpYyBGSVJTVCA9ICdmaXJzdCc7XG4gIHN0YXRpYyBTRUNPTkQgPSAnc2Vjb25kJztcbn1cblxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodCB7XG4gIGlkOiBzdHJpbmc7XG4gIGFjdGl2ZSA9IGZhbHNlO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1jb21wYXJpc29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBhcmlzb24tYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tcGFyaXNvbi1hcHAuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb21wYXJpc29uQXBwQ29tcG9uZW50IHtcbiAgZmlsZXM6IEZpbGVNb2RlbFtdID0gW107XG4gIGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XG4gIGNyZWRlbnRpYWxzOiBNYXA8c3RyaW5nLCBGaWxlQ3JlZGVudGlhbHM+ID0gbmV3IE1hcDxzdHJpbmcsIEZpbGVDcmVkZW50aWFscz4oKTtcbiAgZmlsZTogTWFwPHN0cmluZywgRmlsZURlc2NyaXB0aW9uPiA9IG5ldyBNYXA8c3RyaW5nLCBGaWxlRGVzY3JpcHRpb24+KCk7XG4gIGNvbXBhcmlzb25Db25maWc6IENvbXBhcmlzb25Db25maWc7XG4gIGFjdGl2ZVBhbmVsOiBzdHJpbmc7XG4gIGZpcnN0ID0gRmlsZXMuRklSU1Q7XG4gIHNlY29uZCA9IEZpbGVzLlNFQ09ORDtcbiAgZmlyc3RGaWxlTmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBzZWNvbmRGaWxlTmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBsb2FkaW5nRmlyc3RQYW5lbCA9IGZhbHNlO1xuICBsb2FkaW5nU2Vjb25kUGFuZWwgPSBmYWxzZTtcbiAgY291bnRQYWdlcyA9IDA7XG4gIHJlc3VsdDogQ29tcGFyZVJlc3VsdDtcbiAgZmlsZXNUYWIgPSAnZmlsZXMnO1xuICByZXN1bHRUYWIgPSAncmVzdWx0JztcbiAgYWN0aXZlVGFiID0gdGhpcy5maWxlc1RhYjtcbiAgcmVzdWx0VGFiRGlzYWJsZWQgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbXBhcmlzb25TZXJ2aWNlOiBDb21wYXJpc29uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb21wYXJpc29uQ29uZmlnU2VydmljZSxcbiAgICAgICAgICAgICAgdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHBhZ2VQcmVsb2FkU2VydmljZTogUGFnZVByZWxvYWRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdGFiQWN0aXZhdG9yU2VydmljZTogVGFiQWN0aXZhdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHtcbiAgICBjb25maWdTZXJ2aWNlLnVwZGF0ZWRDb25maWcuc3Vic2NyaWJlKChjb25maWcpID0+IHtcbiAgICAgIHRoaXMuY29tcGFyaXNvbkNvbmZpZyA9IGNvbmZpZztcbiAgICB9KTtcblxuICAgIHBhZ2VQcmVsb2FkU2VydmljZS5jaGVja1ByZWxvYWQuc3Vic2NyaWJlKChwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLmNvbXBhcmlzb25Db25maWcucHJlbG9hZFJlc3VsdFBhZ2VDb3VudCAhPT0gMCkge1xuICAgICAgICB0aGlzLmNoZWNrUHJlbG9hZCh0aGlzLmZpcnN0LCBwYWdlKTtcbiAgICAgICAgdGhpcy5jaGVja1ByZWxvYWQodGhpcy5zZWNvbmQsIHBhZ2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdXBsb2FkRmlsZXNTZXJ2aWNlLnVwbG9hZHNDaGFuZ2Uuc3Vic2NyaWJlKCh1cGxvYWRzKSA9PiB7XG4gICAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmFjdGl2ZVBhbmVsO1xuICAgICAgdGhpcy5zZXRMb2FkaW5nKGFjdGl2ZSwgdHJ1ZSk7XG4gICAgICBpZiAodXBsb2Fkcykge1xuICAgICAgICBsZXQgaTogbnVtYmVyO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXBsb2Fkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuX2NvbXBhcmlzb25TZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oaSksICcnLCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0RmlsZShvYmouZ3VpZCwgJycsIGFjdGl2ZSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF90YWJBY3RpdmF0b3JTZXJ2aWNlLmFjdGl2ZVRhYkNoYW5nZS5zdWJzY3JpYmUoKHRhYklkOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gdGFiSWQ7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldExvYWRpbmcocGFuZWw6IHN0cmluZywgZmxhZzogYm9vbGVhbikge1xuICAgIGlmIChwYW5lbCA9PT0gdGhpcy5maXJzdCkge1xuICAgICAgdGhpcy5sb2FkaW5nRmlyc3RQYW5lbCA9IGZsYWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZGluZ1NlY29uZFBhbmVsID0gZmxhZztcbiAgICB9XG4gIH1cblxuICBnZXQgcmV3cml0ZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJpc29uQ29uZmlnID8gdGhpcy5jb21wYXJpc29uQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xuICB9XG5cbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29tcGFyaXNvblNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRmlsZU1vZGVsW10pID0+IHtcbiAgICAgIGxldCBuYW1lRXh0OiBzdHJpbmc7XG4gICAgICBpZiAodGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5maXJzdCkpIHtcbiAgICAgICAgbmFtZUV4dCA9IHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuZmlyc3QpLmd1aWQuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5zZWNvbmQpKSB7XG4gICAgICAgIG5hbWVFeHQgPSB0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLnNlY29uZCkuZ3VpZC5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmFtZUV4dCkge1xuICAgICAgICBmaWxlcyA9IGZpbGVzLmZpbHRlcihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUuZGlyZWN0b3J5IHx8IHZhbHVlLmd1aWQuc3BsaXQoJy4nKS5wb3AoKSA9PT0gbmFtZUV4dDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW107XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBtb2RhbElkOiBzdHJpbmcsIHBhcmFtOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNldExvYWRpbmcocGFyYW0sIHRydWUpO1xuICAgIHRoaXMuZ2V0RmlsZSgkZXZlbnQsIHBhc3N3b3JkLCBwYXJhbSk7XG4gICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShtb2RhbElkKTtcbiAgICB0aGlzLmNsZWFyRGF0YShwYXJhbSk7XG4gIH1cblxuICBwcml2YXRlIGdldEZpbGUoJGV2ZW50OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIHBhcmFtOiBzdHJpbmcpIHtcbiAgICBjb25zdCBjcmVkZW50aWFscyA9IHtndWlkOiAkZXZlbnQsIHBhc3N3b3JkOiBwYXNzd29yZH07XG4gICAgdGhpcy5jcmVkZW50aWFscy5zZXQocGFyYW0sIGNyZWRlbnRpYWxzKTtcbiAgICB0aGlzLl9jb21wYXJpc29uU2VydmljZS5sb2FkRmlsZShjcmVkZW50aWFscykuc3Vic2NyaWJlKChmaWxlOiBGaWxlRGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgdGhpcy5maWxlLnNldChwYXJhbSwgZmlsZSk7XG4gICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgY29uc3QgcHJlbG9hZFJlc3VsdFBhZ2VDb3VudCA9IHRoaXMuY29tcGFyaXNvbkNvbmZpZy5wcmVsb2FkUmVzdWx0UGFnZUNvdW50O1xuICAgICAgICAgIHRoaXMuY291bnRQYWdlcyA9IGZpbGUucGFnZXMgPyBmaWxlLnBhZ2VzLmxlbmd0aCA6IDA7XG4gICAgICAgICAgaWYgKHByZWxvYWRSZXN1bHRQYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnByZWxvYWRQYWdlcyhwYXJhbSwgMSwgcHJlbG9hZFJlc3VsdFBhZ2VDb3VudCA+IHRoaXMuY291bnRQYWdlcyA/IHRoaXMuY291bnRQYWdlcyA6IHByZWxvYWRSZXN1bHRQYWdlQ291bnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUZpbGVOYW1lcygpO1xuICAgICAgICB0aGlzLnNldExvYWRpbmcocGFyYW0sIGZhbHNlKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY2xlYXJGaWxlKHBhcmFtOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNsZWFyRGF0YShwYXJhbSk7XG4gICAgdGhpcy5jcmVkZW50aWFscy5kZWxldGUocGFyYW0pO1xuICAgIHRoaXMucmVzdWx0ID0gbnVsbDtcbiAgICB0aGlzLnJlc3VsdFRhYkRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLl90YWJBY3RpdmF0b3JTZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYih0aGlzLmZpbGVzVGFiKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJEYXRhKHBhcmFtKSB7XG4gICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5zaXplKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZmlsZS5kZWxldGUocGFyYW0pO1xuICAgIGlmIChwYXJhbSA9PT0gdGhpcy5maXJzdCkge1xuICAgICAgdGhpcy5maXJzdEZpbGVOYW1lID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlY29uZEZpbGVOYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByZWxvYWRQYWdlcyhwYXJhbTogc3RyaW5nLCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgdGhpcy5fY29tcGFyaXNvblNlcnZpY2UubG9hZFBhZ2UodGhpcy5jcmVkZW50aWFscy5nZXQocGFyYW0pLCBpKS5zdWJzY3JpYmUoKHBhZ2U6IFBhZ2VNb2RlbCkgPT4ge1xuICAgICAgICB0aGlzLmZpbGUuZ2V0KHBhcmFtKS5wYWdlc1tpIC0gMV0gPSBwYWdlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5hY3RpdmVQYW5lbDtcbiAgICB0aGlzLl9jb21wYXJpc29uU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcbiAgICAgIHRoaXMuZ2V0RmlsZShvYmouZ3VpZCwgJycsIGFjdGl2ZSk7XG4gICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVGaWxlTmFtZXMoKSB7XG4gICAgdGhpcy5maXJzdEZpbGVOYW1lID0gdGhpcy5nZXRGaXJzdEZpbGVOYW1lKCk7XG4gICAgdGhpcy5zZWNvbmRGaWxlTmFtZSA9IHRoaXMuZ2V0U2Vjb25kRmlsZU5hbWUoKTtcbiAgfVxuXG4gIGdldFNlY29uZEZpbGVOYW1lKCkge1xuICAgIGNvbnN0IGZpbGVDcmVkZW50aWFscyA9IHRoaXMuY3JlZGVudGlhbHMgPyB0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLnNlY29uZCkgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIGZpbGVDcmVkZW50aWFscyA/IGZpbGVDcmVkZW50aWFscy5ndWlkLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKSA6ICcnO1xuICB9XG5cbiAgZ2V0Rmlyc3RGaWxlTmFtZSgpIHtcbiAgICBjb25zdCBmaWxlQ3JlZGVudGlhbHMgPSB0aGlzLmNyZWRlbnRpYWxzID8gdGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5maXJzdCkgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIGZpbGVDcmVkZW50aWFscyA/IGZpbGVDcmVkZW50aWFscy5ndWlkLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKSA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1ByZWxvYWQocGFuZWw6IHN0cmluZywgcGFnZTogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLmZpbGUuZ2V0KHBhbmVsKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGZvciAobGV0IGkgPSBwYWdlOyBpIDwgcGFnZSArIDI7IGkrKykge1xuICAgICAgaWYgKGkgPiAwICYmIGkgPD0gdGhpcy5jb3VudFBhZ2VzICYmICF0aGlzLmZpbGUuZ2V0KHBhbmVsKS5wYWdlc1tpIC0gMV0uZGF0YSkge1xuICAgICAgICB0aGlzLnByZWxvYWRQYWdlcyhwYW5lbCwgaSwgaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcGFyZSgpIHtcbiAgICBpZiAodGhpcy5jcmVkZW50aWFscy5zaXplICE9PSAyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVzdWx0VGFiRGlzYWJsZWQgPSBmYWxzZTtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBhcnIucHVzaCh0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLmZpcnN0KSk7XG4gICAgYXJyLnB1c2godGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5zZWNvbmQpKTtcbiAgICB0aGlzLl9jb21wYXJpc29uU2VydmljZS5jb21wYXJlKGFycikuc3Vic2NyaWJlKChyZXN1bHQ6IENvbXBhcmVSZXN1bHQpID0+IHtcbiAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xuXG4gICAgICBjb25zdCBpc1plcm9CYXNlZFBhZ2VJZCA9IHRoaXMucmVzdWx0LmNoYW5nZXMuZmluZCgoY2hhbmdlKSA9PiBjaGFuZ2UucGFnZUluZm8uaWQgPT09IDApO1xuXG4gICAgICB0aGlzLnJlc3VsdC5jaGFuZ2VzLmZvckVhY2goIChjaGFuZ2UpID0+IHtcbiAgICAgICAgY2hhbmdlLmlkID0gdGhpcy5nZW5lcmF0ZVJhbmRvbUludGVnZXIoKTtcbiAgICAgICAgY29uc3QgemVyb0Jhc2VkSWQgPSBpc1plcm9CYXNlZFBhZ2VJZCA/IGNoYW5nZS5wYWdlSW5mby5pZCA6IGNoYW5nZS5wYWdlSW5mby5pZCAtIDE7XG4gICAgICAgIGNoYW5nZS5wYWdlSW5mby5pZCA9IGlzWmVyb0Jhc2VkUGFnZUlkID8gY2hhbmdlLnBhZ2VJbmZvLmlkIDogY2hhbmdlLnBhZ2VJbmZvLmlkIC0gMTtcbiAgICAgICAgaWYoIXRoaXMucmVzdWx0LnBhZ2VzW3plcm9CYXNlZElkXS5jaGFuZ2VzKXtcbiAgICAgICAgICB0aGlzLnJlc3VsdC5wYWdlc1t6ZXJvQmFzZWRJZF0uY2hhbmdlcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0LnBhZ2VzW3plcm9CYXNlZElkXS5jaGFuZ2VzLnB1c2goY2hhbmdlKTtcbiAgICAgICAgY2hhbmdlLm5vcm1hbGl6ZWQgPSB7XG4gICAgICAgICAgeCA6IGNoYW5nZS5ib3gueCAqIDEwMCAvIGNoYW5nZS5wYWdlSW5mby53aWR0aCxcbiAgICAgICAgICB5IDogY2hhbmdlLmJveC55ICogMTAwIC8gY2hhbmdlLnBhZ2VJbmZvLmhlaWdodCxcbiAgICAgICAgICB3aWR0aDogY2hhbmdlLmJveC53aWR0aCAqIDEwMCAvIGNoYW5nZS5wYWdlSW5mby53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGNoYW5nZS5ib3guaGVpZ2h0ICogMTAwIC8gY2hhbmdlLnBhZ2VJbmZvLmhlaWdodCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0sIChlcnIgPT4ge1xuICAgICAgdGhpcy5yZXN1bHRUYWJEaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLl90YWJBY3RpdmF0b3JTZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYih0aGlzLmZpbGVzVGFiKTtcbiAgICB9KSk7XG4gICAgdGhpcy5fdGFiQWN0aXZhdG9yU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIodGhpcy5yZXN1bHRUYWIpO1xuICB9XG5cbiAgZ2VuZXJhdGVSYW5kb21JbnRlZ2VyKCkge1xuICAgIGZ1bmN0aW9uIF9wOChzKSB7XG4gICAgICAgIGNvbnN0IHAgPSAoTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikgKyBcIjAwMDAwMDAwMFwiKS5zdWJzdHIoMiwgOCk7XG4gICAgICAgIHJldHVybiBzID8gXCItXCIgKyBwLnN1YnN0cigwLCA0KSArIFwiLVwiICsgcC5zdWJzdHIoNCwgNCkgOiBwO1xuICAgIH1cbiAgICByZXR1cm4gX3A4KG51bGwpICsgX3A4KHRydWUpICsgX3A4KHRydWUpICsgX3A4KG51bGwpO1xuICB9XG5cbiAgZG93bmxvYWQoKSB7XG4gICAgaWYgKCF0aGlzLnJlc3VsdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjcmVkZW50aWFscyA9IHsnZ3VpZCc6IHRoaXMucmVzdWx0Lmd1aWQsICdwYXNzd29yZCc6ICcnfTtcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHRoaXMuX2NvbXBhcmlzb25TZXJ2aWNlLmdldERvd25sb2FkVXJsKGNyZWRlbnRpYWxzKSk7XG4gIH1cblxuICBoaWRlU2lkZVBhbmVsKCRldmVudCkge1xuICAgIHRoaXMuYWN0aXZlVGFiID0gJGV2ZW50ID8gdGhpcy5maWxlc1RhYiA6IHRoaXMucmVzdWx0VGFiO1xuICAgIHRoaXMuX3RhYkFjdGl2YXRvclNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKHRoaXMuZmlsZXNUYWIpO1xuICB9XG5cblxuXG59XG4iXX0=