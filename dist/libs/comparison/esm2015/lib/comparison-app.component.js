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
            this.result.changes.forEach((/**
             * @param {?} change
             * @return {?}
             */
            (change) => {
                change.id = this.generateRandomInteger();
                /** @type {?} */
                const zeroBasedId = change.pageInfo.id;
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
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.loader{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.upload-compare-file{height:100%;width:50%;border-right:1px solid #ccc;display:flex;align-content:center;flex-direction:column;text-align:center;flex-grow:0}.open-file-panel{display:flex;width:100%}.files-panel{background-color:#e7e7e7;display:flex;flex-direction:row;width:100%;height:100%}.result-panel{background-color:#e7e7e7;width:100%;height:100%;display:flex;align-content:center;flex-direction:column;justify-content:center;text-align:center}.doc-panel{display:flex;height:inherit}.gd-document{width:100%;height:100%}.top-panel{display:flex;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}.row{display:flex;height:inherit}.column{width:100%}.tabs-wrapper{display:flex;justify-self:flex-end;align-self:flex-end;width:100%;justify-content:flex-end}.tabs{display:flex;margin-right:30px;align-items:flex-end;justify-content:flex-end}@media (max-width:480px){.files-panel{flex-direction:column}.files-panel .upload-compare-file{width:100%;border-bottom:1px solid #ccc}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyaXNvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvY29tcGFyaXNvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQ0wsWUFBWSxFQUlaLFlBQVksRUFBYSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFDckYsTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7TUFJakQsQ0FBQyxHQUFHLE1BQU07QUFFaEIsTUFBTSxPQUFPLEtBQUs7O0FBQ1QsV0FBSyxHQUFHLE9BQU8sQ0FBQztBQUNoQixZQUFNLEdBQUcsUUFBUSxDQUFDOzs7SUFEekIsWUFBdUI7O0lBQ3ZCLGFBQXlCOztBQUczQixNQUFNLE9BQU8sU0FBUztJQUF0QjtRQUVFLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFDakIsQ0FBQztDQUFBOzs7SUFGQyx1QkFBVzs7SUFDWCwyQkFBZTs7QUFRakIsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7Ozs7OztJQW9CakMsWUFBb0Isa0JBQXFDLEVBQ3JDLGFBQXNDLEVBQzlDLGtCQUFzQyxFQUN0QyxrQkFBc0MsRUFDOUIsYUFBMkIsRUFDM0Isb0JBQXlDLEVBQ3pDLFdBQW9DO1FBTnBDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBR3RDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLHlCQUFvQixHQUFwQixv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QUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFDO1FBQzlELE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxNQUFNO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3pELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7OztZQXZPRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHU3SkFBOEM7O2FBRS9DOzs7O1lBcEJPLGlCQUFpQjtZQURqQix1QkFBdUI7WUFGcUMsa0JBQWtCO1lBQTNELGtCQUFrQjtZQUEzQyxZQUFZO1lBQWlDLG1CQUFtQjtZQVAvQyxVQUFVOzs7O0lBZ0MzQix1Q0FBd0I7O0lBQ3hCLGtEQUE0Qzs7SUFDNUMsNkNBQStFOztJQUMvRSxzQ0FBd0U7O0lBQ3hFLGtEQUFtQzs7SUFDbkMsNkNBQW9COztJQUNwQix1Q0FBb0I7O0lBQ3BCLHdDQUFzQjs7SUFDdEIsK0NBQWtDOztJQUNsQyxnREFBbUM7O0lBQ25DLG1EQUEwQjs7SUFDMUIsb0RBQTJCOztJQUMzQiw0Q0FBZTs7SUFDZix3Q0FBc0I7O0lBQ3RCLDBDQUFtQjs7SUFDbkIsMkNBQXFCOztJQUNyQiwyQ0FBMEI7O0lBQzFCLG1EQUF5Qjs7Ozs7SUFFYixvREFBNkM7Ozs7O0lBQzdDLCtDQUE4Qzs7Ozs7SUFHOUMsK0NBQW1DOzs7OztJQUNuQyxzREFBaUQ7Ozs7O0lBQ2pELDZDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHtcbiAgQ29tbW9uTW9kYWxzLFxuICBGaWxlQ3JlZGVudGlhbHMsXG4gIEZpbGVEZXNjcmlwdGlvbixcbiAgRmlsZU1vZGVsLFxuICBNb2RhbFNlcnZpY2UsIFBhZ2VNb2RlbCwgUGFnZVByZWxvYWRTZXJ2aWNlLCBUYWJBY3RpdmF0b3JTZXJ2aWNlLCBVcGxvYWRGaWxlc1NlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtDb21wYXJpc29uQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vY29tcGFyaXNvbi1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtDb21wYXJpc29uU2VydmljZX0gZnJvbSBcIi4vY29tcGFyaXNvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbXBhcmlzb25Db25maWd9IGZyb20gXCIuL2NvbXBhcmlzb24tY29uZmlnXCI7XG5pbXBvcnQge0NvbXBhcmVSZXN1bHR9IGZyb20gXCIuL21vZGVsc1wiO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5leHBvcnQgY2xhc3MgRmlsZXMge1xuICBzdGF0aWMgRklSU1QgPSAnZmlyc3QnO1xuICBzdGF0aWMgU0VDT05EID0gJ3NlY29uZCc7XG59XG5cbmV4cG9ydCBjbGFzcyBIaWdobGlnaHQge1xuICBpZDogc3RyaW5nO1xuICBhY3RpdmUgPSBmYWxzZTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtY29tcGFyaXNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wYXJpc29uLWFwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbXBhcmlzb24tYXBwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tcGFyaXNvbkFwcENvbXBvbmVudCB7XG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xuICBjcmVkZW50aWFsczogTWFwPHN0cmluZywgRmlsZUNyZWRlbnRpYWxzPiA9IG5ldyBNYXA8c3RyaW5nLCBGaWxlQ3JlZGVudGlhbHM+KCk7XG4gIGZpbGU6IE1hcDxzdHJpbmcsIEZpbGVEZXNjcmlwdGlvbj4gPSBuZXcgTWFwPHN0cmluZywgRmlsZURlc2NyaXB0aW9uPigpO1xuICBjb21wYXJpc29uQ29uZmlnOiBDb21wYXJpc29uQ29uZmlnO1xuICBhY3RpdmVQYW5lbDogc3RyaW5nO1xuICBmaXJzdCA9IEZpbGVzLkZJUlNUO1xuICBzZWNvbmQgPSBGaWxlcy5TRUNPTkQ7XG4gIGZpcnN0RmlsZU5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgc2Vjb25kRmlsZU5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgbG9hZGluZ0ZpcnN0UGFuZWwgPSBmYWxzZTtcbiAgbG9hZGluZ1NlY29uZFBhbmVsID0gZmFsc2U7XG4gIGNvdW50UGFnZXMgPSAwO1xuICByZXN1bHQ6IENvbXBhcmVSZXN1bHQ7XG4gIGZpbGVzVGFiID0gJ2ZpbGVzJztcbiAgcmVzdWx0VGFiID0gJ3Jlc3VsdCc7XG4gIGFjdGl2ZVRhYiA9IHRoaXMuZmlsZXNUYWI7XG4gIHJlc3VsdFRhYkRpc2FibGVkID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb21wYXJpc29uU2VydmljZTogQ29tcGFyaXNvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY29uZmlnU2VydmljZTogQ29tcGFyaXNvbkNvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHVwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwYWdlUHJlbG9hZFNlcnZpY2U6IFBhZ2VQcmVsb2FkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3RhYkFjdGl2YXRvclNlcnZpY2U6IFRhYkFjdGl2YXRvclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XG4gICAgY29uZmlnU2VydmljZS51cGRhdGVkQ29uZmlnLnN1YnNjcmliZSgoY29uZmlnKSA9PiB7XG4gICAgICB0aGlzLmNvbXBhcmlzb25Db25maWcgPSBjb25maWc7XG4gICAgfSk7XG5cbiAgICBwYWdlUHJlbG9hZFNlcnZpY2UuY2hlY2tQcmVsb2FkLnN1YnNjcmliZSgocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy5jb21wYXJpc29uQ29uZmlnLnByZWxvYWRSZXN1bHRQYWdlQ291bnQgIT09IDApIHtcbiAgICAgICAgdGhpcy5jaGVja1ByZWxvYWQodGhpcy5maXJzdCwgcGFnZSk7XG4gICAgICAgIHRoaXMuY2hlY2tQcmVsb2FkKHRoaXMuc2Vjb25kLCBwYWdlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlID0gdGhpcy5hY3RpdmVQYW5lbDtcbiAgICAgIHRoaXMuc2V0TG9hZGluZyhhY3RpdmUsIHRydWUpO1xuICAgICAgaWYgKHVwbG9hZHMpIHtcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHVwbG9hZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLl9jb21wYXJpc29uU2VydmljZS51cGxvYWQodXBsb2Fkcy5pdGVtKGkpLCAnJywgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdldEZpbGUob2JqLmd1aWQsICcnLCBhY3RpdmUpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfdGFiQWN0aXZhdG9yU2VydmljZS5hY3RpdmVUYWJDaGFuZ2Uuc3Vic2NyaWJlKCh0YWJJZDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9IHRhYklkO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRMb2FkaW5nKHBhbmVsOiBzdHJpbmcsIGZsYWc6IGJvb2xlYW4pIHtcbiAgICBpZiAocGFuZWwgPT09IHRoaXMuZmlyc3QpIHtcbiAgICAgIHRoaXMubG9hZGluZ0ZpcnN0UGFuZWwgPSBmbGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRpbmdTZWNvbmRQYW5lbCA9IGZsYWc7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHJld3JpdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyaXNvbkNvbmZpZyA/IHRoaXMuY29tcGFyaXNvbkNvbmZpZy5yZXdyaXRlIDogdHJ1ZTtcbiAgfVxuXG4gIHNlbGVjdERpcigkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbXBhcmlzb25TZXJ2aWNlLmxvYWRGaWxlcygkZXZlbnQpLnN1YnNjcmliZSgoZmlsZXM6IEZpbGVNb2RlbFtdKSA9PiB7XG4gICAgICBsZXQgbmFtZUV4dDogc3RyaW5nO1xuICAgICAgaWYgKHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuZmlyc3QpKSB7XG4gICAgICAgIG5hbWVFeHQgPSB0aGlzLmNyZWRlbnRpYWxzLmdldCh0aGlzLmZpcnN0KS5ndWlkLnNwbGl0KCcuJykucG9wKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuc2Vjb25kKSkge1xuICAgICAgICBuYW1lRXh0ID0gdGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5zZWNvbmQpLmd1aWQuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWVFeHQpIHtcbiAgICAgICAgZmlsZXMgPSBmaWxlcy5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLmRpcmVjdG9yeSB8fCB2YWx1ZS5ndWlkLnNwbGl0KCcuJykucG9wKCkgPT09IG5hbWVFeHQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5maWxlcyA9IGZpbGVzIHx8IFtdO1xuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0RmlsZSgkZXZlbnQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgbW9kYWxJZDogc3RyaW5nLCBwYXJhbTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRMb2FkaW5nKHBhcmFtLCB0cnVlKTtcbiAgICB0aGlzLmdldEZpbGUoJGV2ZW50LCBwYXNzd29yZCwgcGFyYW0pO1xuICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UobW9kYWxJZCk7XG4gICAgdGhpcy5jbGVhckRhdGEocGFyYW0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBwYXJhbTogc3RyaW5nKSB7XG4gICAgY29uc3QgY3JlZGVudGlhbHMgPSB7Z3VpZDogJGV2ZW50LCBwYXNzd29yZDogcGFzc3dvcmR9O1xuICAgIHRoaXMuY3JlZGVudGlhbHMuc2V0KHBhcmFtLCBjcmVkZW50aWFscyk7XG4gICAgdGhpcy5fY29tcGFyaXNvblNlcnZpY2UubG9hZEZpbGUoY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZmlsZTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZS5zZXQocGFyYW0sIGZpbGUpO1xuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgIGNvbnN0IHByZWxvYWRSZXN1bHRQYWdlQ291bnQgPSB0aGlzLmNvbXBhcmlzb25Db25maWcucHJlbG9hZFJlc3VsdFBhZ2VDb3VudDtcbiAgICAgICAgICB0aGlzLmNvdW50UGFnZXMgPSBmaWxlLnBhZ2VzID8gZmlsZS5wYWdlcy5sZW5ndGggOiAwO1xuICAgICAgICAgIGlmIChwcmVsb2FkUmVzdWx0UGFnZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5wcmVsb2FkUGFnZXMocGFyYW0sIDEsIHByZWxvYWRSZXN1bHRQYWdlQ291bnQgPiB0aGlzLmNvdW50UGFnZXMgPyB0aGlzLmNvdW50UGFnZXMgOiBwcmVsb2FkUmVzdWx0UGFnZUNvdW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVGaWxlTmFtZXMoKTtcbiAgICAgICAgdGhpcy5zZXRMb2FkaW5nKHBhcmFtLCBmYWxzZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGNsZWFyRmlsZShwYXJhbTogc3RyaW5nKSB7XG4gICAgdGhpcy5jbGVhckRhdGEocGFyYW0pO1xuICAgIHRoaXMuY3JlZGVudGlhbHMuZGVsZXRlKHBhcmFtKTtcbiAgICB0aGlzLnJlc3VsdCA9IG51bGw7XG4gICAgdGhpcy5yZXN1bHRUYWJEaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5fdGFiQWN0aXZhdG9yU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIodGhpcy5maWxlc1RhYik7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRGF0YShwYXJhbSkge1xuICAgIGlmICghdGhpcy5maWxlIHx8ICF0aGlzLmZpbGUuc2l6ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmZpbGUuZGVsZXRlKHBhcmFtKTtcbiAgICBpZiAocGFyYW0gPT09IHRoaXMuZmlyc3QpIHtcbiAgICAgIHRoaXMuZmlyc3RGaWxlTmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWNvbmRGaWxlTmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcmVsb2FkUGFnZXMocGFyYW06IHN0cmluZywgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICAgIHRoaXMuX2NvbXBhcmlzb25TZXJ2aWNlLmxvYWRQYWdlKHRoaXMuY3JlZGVudGlhbHMuZ2V0KHBhcmFtKSwgaSkuc3Vic2NyaWJlKChwYWdlOiBQYWdlTW9kZWwpID0+IHtcbiAgICAgICAgdGhpcy5maWxlLmdldChwYXJhbSkucGFnZXNbaSAtIDFdID0gcGFnZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVwbG9hZCgkZXZlbnQ6IHN0cmluZykge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlUGFuZWw7XG4gICAgdGhpcy5fY29tcGFyaXNvblNlcnZpY2UudXBsb2FkKG51bGwsICRldmVudCwgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICB0aGlzLmdldEZpbGUob2JqLmd1aWQsICcnLCBhY3RpdmUpO1xuICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlRmlsZU5hbWVzKCkge1xuICAgIHRoaXMuZmlyc3RGaWxlTmFtZSA9IHRoaXMuZ2V0Rmlyc3RGaWxlTmFtZSgpO1xuICAgIHRoaXMuc2Vjb25kRmlsZU5hbWUgPSB0aGlzLmdldFNlY29uZEZpbGVOYW1lKCk7XG4gIH1cblxuICBnZXRTZWNvbmRGaWxlTmFtZSgpIHtcbiAgICBjb25zdCBmaWxlQ3JlZGVudGlhbHMgPSB0aGlzLmNyZWRlbnRpYWxzID8gdGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5zZWNvbmQpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBmaWxlQ3JlZGVudGlhbHMgPyBmaWxlQ3JlZGVudGlhbHMuZ3VpZC5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJykgOiAnJztcbiAgfVxuXG4gIGdldEZpcnN0RmlsZU5hbWUoKSB7XG4gICAgY29uc3QgZmlsZUNyZWRlbnRpYWxzID0gdGhpcy5jcmVkZW50aWFscyA/IHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuZmlyc3QpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBmaWxlQ3JlZGVudGlhbHMgPyBmaWxlQ3JlZGVudGlhbHMuZ3VpZC5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJykgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tQcmVsb2FkKHBhbmVsOiBzdHJpbmcsIHBhZ2U6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5maWxlLmdldChwYW5lbCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gcGFnZTsgaSA8IHBhZ2UgKyAyOyBpKyspIHtcbiAgICAgIGlmIChpID4gMCAmJiBpIDw9IHRoaXMuY291bnRQYWdlcyAmJiAhdGhpcy5maWxlLmdldChwYW5lbCkucGFnZXNbaSAtIDFdLmRhdGEpIHtcbiAgICAgICAgdGhpcy5wcmVsb2FkUGFnZXMocGFuZWwsIGksIGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBhcmUoKSB7XG4gICAgaWYgKHRoaXMuY3JlZGVudGlhbHMuc2l6ZSAhPT0gMikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJlc3VsdFRhYkRpc2FibGVkID0gZmFsc2U7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgYXJyLnB1c2godGhpcy5jcmVkZW50aWFscy5nZXQodGhpcy5maXJzdCkpO1xuICAgIGFyci5wdXNoKHRoaXMuY3JlZGVudGlhbHMuZ2V0KHRoaXMuc2Vjb25kKSk7XG4gICAgdGhpcy5fY29tcGFyaXNvblNlcnZpY2UuY29tcGFyZShhcnIpLnN1YnNjcmliZSgocmVzdWx0OiBDb21wYXJlUmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcblxuICAgICAgdGhpcy5yZXN1bHQuY2hhbmdlcy5mb3JFYWNoKCAoY2hhbmdlKSA9PiB7XG4gICAgICAgIGNoYW5nZS5pZCA9IHRoaXMuZ2VuZXJhdGVSYW5kb21JbnRlZ2VyKCk7XG4gICAgICAgIGNvbnN0IHplcm9CYXNlZElkID0gY2hhbmdlLnBhZ2VJbmZvLmlkO1xuICAgICAgICBpZighdGhpcy5yZXN1bHQucGFnZXNbemVyb0Jhc2VkSWRdLmNoYW5nZXMpe1xuICAgICAgICAgIHRoaXMucmVzdWx0LnBhZ2VzW3plcm9CYXNlZElkXS5jaGFuZ2VzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHQucGFnZXNbemVyb0Jhc2VkSWRdLmNoYW5nZXMucHVzaChjaGFuZ2UpO1xuICAgICAgICBjaGFuZ2Uubm9ybWFsaXplZCA9IHtcbiAgICAgICAgICB4IDogY2hhbmdlLmJveC54ICogMTAwIC8gY2hhbmdlLnBhZ2VJbmZvLndpZHRoLFxuICAgICAgICAgIHkgOiBjaGFuZ2UuYm94LnkgKiAxMDAgLyBjaGFuZ2UucGFnZUluZm8uaGVpZ2h0LFxuICAgICAgICAgIHdpZHRoOiBjaGFuZ2UuYm94LndpZHRoICogMTAwIC8gY2hhbmdlLnBhZ2VJbmZvLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogY2hhbmdlLmJveC5oZWlnaHQgKiAxMDAgLyBjaGFuZ2UucGFnZUluZm8uaGVpZ2h0LFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSwgKGVyciA9PiB7XG4gICAgICB0aGlzLnJlc3VsdFRhYkRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3RhYkFjdGl2YXRvclNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKHRoaXMuZmlsZXNUYWIpO1xuICAgIH0pKTtcbiAgICB0aGlzLl90YWJBY3RpdmF0b3JTZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYih0aGlzLnJlc3VsdFRhYik7XG4gIH1cblxuICBnZW5lcmF0ZVJhbmRvbUludGVnZXIoKSB7XG4gICAgZnVuY3Rpb24gX3A4KHMpIHtcbiAgICAgICAgY29uc3QgcCA9IChNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KSArIFwiMDAwMDAwMDAwXCIpLnN1YnN0cigyLCA4KTtcbiAgICAgICAgcmV0dXJuIHMgPyBcIi1cIiArIHAuc3Vic3RyKDAsIDQpICsgXCItXCIgKyBwLnN1YnN0cig0LCA0KSA6IHA7XG4gICAgfVxuICAgIHJldHVybiBfcDgobnVsbCkgKyBfcDgodHJ1ZSkgKyBfcDgodHJ1ZSkgKyBfcDgobnVsbCk7XG4gIH1cblxuICBkb3dubG9hZCgpIHtcbiAgICBpZiAoIXRoaXMucmVzdWx0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNyZWRlbnRpYWxzID0geydndWlkJzogdGhpcy5yZXN1bHQuZ3VpZCwgJ3Bhc3N3b3JkJzogJyd9O1xuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odGhpcy5fY29tcGFyaXNvblNlcnZpY2UuZ2V0RG93bmxvYWRVcmwoY3JlZGVudGlhbHMpKTtcbiAgfVxuXG4gIGhpZGVTaWRlUGFuZWwoJGV2ZW50KSB7XG4gICAgdGhpcy5hY3RpdmVUYWIgPSAkZXZlbnQgPyB0aGlzLmZpbGVzVGFiIDogdGhpcy5yZXN1bHRUYWI7XG4gICAgdGhpcy5fdGFiQWN0aXZhdG9yU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIodGhpcy5maWxlc1RhYik7XG4gIH1cblxuXG5cbn1cbiJdfQ==