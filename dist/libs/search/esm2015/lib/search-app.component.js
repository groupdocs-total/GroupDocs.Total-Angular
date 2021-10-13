/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { SearchService } from "./search.service";
import { ModalService, UploadFilesService, PasswordService, CommonModals, LoadingMaskService } from "@groupdocs.examples.angular/common-components";
import { SearchConfigService } from "./search-config.service";
import { WindowService } from "@groupdocs.examples.angular/common-components";
import { FileIndexingStatus } from "./search-models";
export class SearchAppComponent {
    /**
     * @param {?} _searchService
     * @param {?} _modalService
     * @param {?} configService
     * @param {?} uploadFilesService
     * @param {?} passwordService
     * @param {?} _windowService
     * @param {?} _loadingMaskService
     */
    constructor(_searchService, _modalService, configService, uploadFilesService, passwordService, _windowService, _loadingMaskService) {
        this._searchService = _searchService;
        this._modalService = _modalService;
        this._windowService = _windowService;
        this._loadingMaskService = _loadingMaskService;
        this.title = 'search';
        this.files = [];
        this.searchResultItems = [];
        this.indexedFiles = [];
        this.browseFilesModal = CommonModals.BrowseFiles;
        this.fileWasDropped = false;
        configService.updatedConfig.subscribe((/**
         * @param {?} searchConfig
         * @return {?}
         */
        (searchConfig) => {
            this.searchConfig = searchConfig;
        }));
        uploadFilesService.uploadsChange.subscribe((/**
         * @param {?} uploads
         * @return {?}
         */
        (uploads) => {
            if (uploads) {
                /** @type {?} */
                let i;
                for (i = 0; i < uploads.length; i++) {
                    this._searchService.upload(uploads.item(i), '', this.searchConfig.rewrite).subscribe((/**
                     * @param {?} obj
                     * @return {?}
                     */
                    (obj) => {
                        if (!this.fileWasDropped) {
                            this.selectDir('');
                        }
                    }));
                }
            }
        }));
        passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        (pass) => {
            this.closeModal(CommonModals.PasswordRequired);
            /** @type {?} */
            const passwordRequiredFile = this.indexedFiles.filter((/**
             * @param {?} f
             * @return {?}
             */
            f => f.documentStatus === FileIndexingStatus.PasswordRequired))[0];
            passwordRequiredFile.password = pass;
            this._searchService.addFilesToIndex([passwordRequiredFile]).subscribe((/**
             * @return {?}
             */
            () => {
                this.loadIndexedFiles(true);
            }));
        }));
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.isDesktop = _windowService.isDesktop();
        }));
        _searchService.itemToRemove.subscribe((/**
         * @param {?} file
         * @return {?}
         */
        file => {
            if (file) {
                this._searchService.removeFile(file).subscribe((/**
                 * @return {?}
                 */
                () => {
                    this.removeFileFromList(file);
                }));
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._loadingMaskService
            .onLoadingChanged
            .subscribe((/**
         * @param {?} loading
         * @return {?}
         */
        (loading) => this.isLoading = loading));
    }
    /**
     * @return {?}
     */
    get rewriteConfig() {
        return this.searchConfig ? this.searchConfig.rewrite : true;
    }
    /**
     * @return {?}
     */
    get uploadConfig() {
        return this.searchConfig ? this.searchConfig.upload : true;
    }
    /**
     * @return {?}
     */
    get browseConfig() {
        return this.searchConfig ? this.searchConfig.browse : true;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    openModal(id) {
        this._modalService.open(id);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    closeModal(id) {
        this._modalService.close(id);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectDir($event) {
        this._searchService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        (files) => this.files = files || []));
    }
    /**
     * @return {?}
     */
    clearSearchResult() {
        this.searchResult = null;
        if (this.firstSearchPerformed && this.indexedFiles.length === 0) {
            this.loadIndexedFiles(true);
        }
    }
    /**
     * @param {?} checked
     * @return {?}
     */
    selectAllItems(checked) {
        this.files.forEach((/**
         * @param {?} f
         * @return {?}
         */
        (f) => {
            if (!f.isDirectory && !f.directory)
                f.selected = checked;
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    loadIndexedFiles($event) {
        if (!$event)
            return;
        this._searchService.loadFiles(this.searchConfig.indexedFilesDirectory).subscribe((/**
         * @param {?} indexingFiles
         * @return {?}
         */
        (indexingFiles) => {
            if (indexingFiles && this.skipPasswordProtected && indexingFiles.filter((/**
             * @param {?} f
             * @return {?}
             */
            f => f.documentStatus === FileIndexingStatus.PasswordRequired)).length > 0) {
                indexingFiles.filter((/**
                 * @param {?} f
                 * @return {?}
                 */
                f => f.documentStatus === FileIndexingStatus.PasswordRequired))[0].documentStatus = FileIndexingStatus.Skipped;
            }
            this.indexedFiles = indexingFiles || [];
            if (this.indexedFiles.filter((/**
             * @param {?} f
             * @return {?}
             */
            f => f.documentStatus === FileIndexingStatus.Indexing)).length > 0 ||
                (!this.skipPasswordProtected && this.indexedFiles.filter((/**
                 * @param {?} f
                 * @return {?}
                 */
                f => f.documentStatus === FileIndexingStatus.PasswordRequired)).length > 0)) {
                /** @type {?} */
                const timerId = setInterval((/**
                 * @return {?}
                 */
                () => {
                    this._searchService.getDocumentStatus(this.indexedFiles.filter((/**
                     * @param {?} f
                     * @return {?}
                     */
                    f => f.documentStatus === FileIndexingStatus.Indexing ||
                        (!this.skipPasswordProtected && f.documentStatus === FileIndexingStatus.PasswordRequired)))).toPromise().then((/**
                     * @param {?} searchIndexFiles
                     * @return {?}
                     */
                    (searchIndexFiles) => {
                        searchIndexFiles.forEach((/**
                         * @param {?} searchFile
                         * @return {?}
                         */
                        (searchFile) => {
                            if (searchFile.documentStatus !== FileIndexingStatus.Indexing) {
                                this.indexedFiles.filter((/**
                                 * @param {?} f
                                 * @return {?}
                                 */
                                f => f.guid === searchFile.guid))[0].documentStatus = searchFile.documentStatus;
                            }
                        }));
                        if (this.indexedFiles.filter((/**
                         * @param {?} f
                         * @return {?}
                         */
                        f => f.documentStatus === FileIndexingStatus.Indexing)).length === 0) {
                            clearInterval(timerId);
                        }
                    })).catch((/**
                     * @param {?} response
                     * @return {?}
                     */
                    (response) => {
                        clearInterval(timerId);
                    }));
                }), 1000);
            }
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    cancel($event) {
        this.indexedFiles.filter((/**
         * @param {?} f
         * @return {?}
         */
        f => f.documentStatus === FileIndexingStatus.PasswordRequired))[0].documentStatus = FileIndexingStatus.Skipped;
        this.skipPasswordProtected = true;
        this.loadIndexedFiles(true);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    upload($event) {
        this._searchService.upload(null, $event, this.rewriteConfig).subscribe((/**
         * @return {?}
         */
        () => {
            this.selectDir('');
        }));
    }
    /**
     * @param {?} $event
     * @param {?=} reloadFiles
     * @return {?}
     */
    fileDropped($event, reloadFiles = false) {
        this.fileWasDropped = $event;
        if (reloadFiles) {
            this._searchService.loadFiles('').subscribe((/**
             * @param {?} files
             * @return {?}
             */
            (files) => this.files = files || []));
        }
    }
    /**
     * @param {?} file
     * @return {?}
     */
    removeFileFromList(file) {
        if (this.indexedFiles.length > 0) {
            this.indexedFiles.forEach((/**
             * @param {?} f
             * @param {?} index
             * @return {?}
             */
            (f, index) => {
                if (f.guid === file.guid)
                    this.indexedFiles.splice(index, 1);
            }));
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    search($event) {
        if ($event === "")
            return;
        /** @type {?} */
        const creds = [];
        creds.push(this.credentials);
        this._searchService.search(creds, $event).subscribe((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.searchResult = result;
            this.firstSearchPerformed = true;
        }));
    }
}
SearchAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-search-app',
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\r\n<div class=\"wrapper\">\r\n  <div class=\"top-panel\">\r\n    <gd-logo [logo]=\"'search'\" icon=\"search\"></gd-logo>\r\n    <gd-top-toolbar class=\"toolbar-panel\">\r\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\r\n                 *ngIf=\"browseConfig\" ></gd-button>\r\n    </gd-top-toolbar>\r\n    <gd-search-panel (searchText)=\"search($event)\" (clearQuery)=\"clearSearchResult()\"></gd-search-panel>\r\n  </div>\r\n\r\n  <gd-init-state [icon]=\"'eye'\" [text]=\"'Drop file here to upload'\" *ngIf=\"indexedFiles.length === 0\" (fileDropped)=\"fileDropped($event)\">\r\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\r\n    Or drop file here\r\n  </gd-init-state>\r\n\r\n  <gd-indexed-files-list [files]=\"indexedFiles\" *ngIf=\"indexedFiles.length > 0 && !searchResult\"></gd-indexed-files-list>\r\n\r\n  <gd-search-result-summary [searchResult]=\"searchResult\" *ngIf=\"searchResult\"></gd-search-result-summary>\r\n\r\n  <gd-search-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\r\n                         [uploadConfig]=\"uploadConfig\" (selectAll)=\"selectAllItems($event)\" (fileDropped)=\"fileDropped($event, true)\"\r\n                         (filesAddedToIndex)=\"loadIndexedFiles($event)\"></gd-search-browse-files-modal>\r\n\r\n  <gd-error-modal></gd-error-modal>\r\n  <gd-password-required (cancelEvent)=\"cancel($event)\"></gd-password-required>\r\n</div>\r\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.gd-document,/deep/ .document{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important}.current-page-number{margin-left:7px;font-size:14px;color:#959da5;width:37px;height:37px;line-height:37px;text-align:center}.current-page-number.active{color:#fff}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.thumbnails-button{position:absolute;right:3px}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}::ng-deep .tools .button,::ng-deep .tools .nav-caret,::ng-deep .tools .selected-value{color:#fff!important}::ng-deep .tools .button.inactive,::ng-deep .tools .nav-caret.inactive,::ng-deep .tools .selected-value.inactive{color:#959da5!important}::ng-deep .tools .button{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .dropdown-menu .option{color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}::ng-deep .tools .select{width:65px;height:37px;margin-left:7px;line-height:37px;text-align:center}@media (max-width:1037px){.current-page-number,.mobile-hide{display:none}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .tools .gd-nav-search-btn .icon-button{height:37px;width:37px}::ng-deep .tools .gd-nav-search-btn .button{font-size:14px}}"]
            }] }
];
/** @nocollapse */
SearchAppComponent.ctorParameters = () => [
    { type: SearchService },
    { type: ModalService },
    { type: SearchConfigService },
    { type: UploadFilesService },
    { type: PasswordService },
    { type: WindowService },
    { type: LoadingMaskService }
];
if (false) {
    /** @type {?} */
    SearchAppComponent.prototype.title;
    /** @type {?} */
    SearchAppComponent.prototype.files;
    /** @type {?} */
    SearchAppComponent.prototype.searchResultItems;
    /** @type {?} */
    SearchAppComponent.prototype.indexedFiles;
    /** @type {?} */
    SearchAppComponent.prototype.searchConfig;
    /** @type {?} */
    SearchAppComponent.prototype.credentials;
    /** @type {?} */
    SearchAppComponent.prototype.browseFilesModal;
    /** @type {?} */
    SearchAppComponent.prototype.isDesktop;
    /** @type {?} */
    SearchAppComponent.prototype.isLoading;
    /** @type {?} */
    SearchAppComponent.prototype.skipPasswordProtected;
    /** @type {?} */
    SearchAppComponent.prototype.firstSearchPerformed;
    /** @type {?} */
    SearchAppComponent.prototype.searchResult;
    /** @type {?} */
    SearchAppComponent.prototype.fileWasDropped;
    /**
     * @type {?}
     * @private
     */
    SearchAppComponent.prototype._searchService;
    /**
     * @type {?}
     * @private
     */
    SearchAppComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    SearchAppComponent.prototype._windowService;
    /**
     * @type {?}
     * @private
     */
    SearchAppComponent.prototype._loadingMaskService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2VhcmNoLyIsInNvdXJjZXMiOlsibGliL3NlYXJjaC1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUVMLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsZUFBZSxFQUNFLFlBQVksRUFBRSxrQkFBa0IsRUFDbEQsTUFBTSwrQ0FBK0MsQ0FBQztBQUV2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDNUUsT0FBTyxFQUtMLGtCQUFrQixFQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBT3pCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7Ozs7SUFnQjdCLFlBQW9CLGNBQTZCLEVBQzdCLGFBQTJCLEVBQ25DLGFBQWtDLEVBQ2xDLGtCQUFzQyxFQUN0QyxlQUFnQyxFQUN4QixjQUE2QixFQUM3QixtQkFBdUM7UUFOdkMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFJM0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQXJCM0QsVUFBSyxHQUFHLFFBQVEsQ0FBQztRQUNqQixVQUFLLEdBQXdCLEVBQUUsQ0FBQztRQUNoQyxzQkFBaUIsR0FBNEIsRUFBRSxDQUFDO1FBQ2hELGlCQUFZLEdBQXVCLEVBQUUsQ0FBQztRQUd0QyxxQkFBZ0IsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO1FBTzVDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBVXJCLGFB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LENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlELENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFjO1FBQ25CLElBQUksTUFBTSxLQUFLLEVBQUU7WUFBRSxPQUFPOztjQUNwQixLQUFLLEdBQUcsRUFBRTtRQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsTUFBb0IsRUFBRSxFQUFFO1lBQzNFLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1lBQzNCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDbkMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFqTUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6Qix5bERBQTBDOzthQUUzQzs7OztZQXZCTyxhQUFhO1lBR25CLFlBQVk7WUFNTixtQkFBbUI7WUFMekIsa0JBQWtCO1lBQ2xCLGVBQWU7WUFLVCxhQUFhO1lBSlksa0JBQWtCOzs7O0lBbUJqRCxtQ0FBaUI7O0lBQ2pCLG1DQUFnQzs7SUFDaEMsK0NBQWdEOztJQUNoRCwwQ0FBc0M7O0lBQ3RDLDBDQUEyQjs7SUFDM0IseUNBQTZCOztJQUM3Qiw4Q0FBNEM7O0lBQzVDLHVDQUFtQjs7SUFDbkIsdUNBQW1COztJQUNuQixtREFBK0I7O0lBQy9CLGtEQUE4Qjs7SUFDOUIsMENBQTJCOztJQUUzQiw0Q0FBdUI7Ozs7O0lBRVgsNENBQXFDOzs7OztJQUNyQywyQ0FBbUM7Ozs7O0lBSW5DLDRDQUFxQzs7Ozs7SUFDckMsaURBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7U2VhcmNoU2VydmljZX0gZnJvbSBcIi4vc2VhcmNoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuICBGaWxlTW9kZWwsXHJcbiAgTW9kYWxTZXJ2aWNlLFxyXG4gIFVwbG9hZEZpbGVzU2VydmljZSxcclxuICBQYXNzd29yZFNlcnZpY2UsXHJcbiAgRmlsZUNyZWRlbnRpYWxzLCBDb21tb25Nb2RhbHMsIExvYWRpbmdNYXNrU2VydmljZVxyXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtTZWFyY2hDb25maWd9IGZyb20gXCIuL3NlYXJjaC1jb25maWdcIjtcclxuaW1wb3J0IHtTZWFyY2hDb25maWdTZXJ2aWNlfSBmcm9tIFwiLi9zZWFyY2gtY29uZmlnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgSW5kZXhlZEZpbGVNb2RlbCxcclxuICBTZWFyY2hSZXN1bHQsXHJcbiAgU2VhcmNoUmVzdWx0SXRlbU1vZGVsLFxyXG4gIEV4dGVuZGVkRmlsZU1vZGVsLFxyXG4gIEZpbGVJbmRleGluZ1N0YXR1c1xyXG59IGZyb20gXCIuL3NlYXJjaC1tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2Qtc2VhcmNoLWFwcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1hcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1hcHAuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICB0aXRsZSA9ICdzZWFyY2gnO1xyXG4gIGZpbGVzOiBFeHRlbmRlZEZpbGVNb2RlbFtdID0gW107XHJcbiAgc2VhcmNoUmVzdWx0SXRlbXM6IFNlYXJjaFJlc3VsdEl0ZW1Nb2RlbFtdID0gW107XHJcbiAgaW5kZXhlZEZpbGVzOiBJbmRleGVkRmlsZU1vZGVsW10gPSBbXTtcclxuICBzZWFyY2hDb25maWc6IFNlYXJjaENvbmZpZztcclxuICBjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzO1xyXG4gIGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XHJcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xyXG4gIGlzTG9hZGluZzogYm9vbGVhbjtcclxuICBza2lwUGFzc3dvcmRQcm90ZWN0ZWQ6IGJvb2xlYW47XHJcbiAgZmlyc3RTZWFyY2hQZXJmb3JtZWQ6IGJvb2xlYW47XHJcbiAgc2VhcmNoUmVzdWx0OiBTZWFyY2hSZXN1bHQ7XHJcblxyXG4gIGZpbGVXYXNEcm9wcGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlYXJjaFNlcnZpY2U6IFNlYXJjaFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgY29uZmlnU2VydmljZTogU2VhcmNoQ29uZmlnU2VydmljZSxcclxuICAgICAgICAgICAgICB1cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcclxuICAgICAgICAgICAgICBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2xvYWRpbmdNYXNrU2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlKSB7XHJcblxyXG4gICAgY29uZmlnU2VydmljZS51cGRhdGVkQ29uZmlnLnN1YnNjcmliZSgoc2VhcmNoQ29uZmlnKSA9PiB7XHJcbiAgICAgIHRoaXMuc2VhcmNoQ29uZmlnID0gc2VhcmNoQ29uZmlnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdXBsb2FkRmlsZXNTZXJ2aWNlLnVwbG9hZHNDaGFuZ2Uuc3Vic2NyaWJlKCh1cGxvYWRzKSA9PiB7XHJcbiAgICAgIGlmICh1cGxvYWRzKSB7XHJcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXBsb2Fkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdGhpcy5fc2VhcmNoU2VydmljZS51cGxvYWQodXBsb2Fkcy5pdGVtKGkpLCAnJywgdGhpcy5zZWFyY2hDb25maWcucmV3cml0ZSkuc3Vic2NyaWJlKChvYmo6IEZpbGVDcmVkZW50aWFscykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZmlsZVdhc0Ryb3BwZWQpIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHBhc3N3b3JkU2VydmljZS5wYXNzQ2hhbmdlLnN1YnNjcmliZSgocGFzczogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xvc2VNb2RhbChDb21tb25Nb2RhbHMuUGFzc3dvcmRSZXF1aXJlZCk7XHJcblxyXG4gICAgICBjb25zdCBwYXNzd29yZFJlcXVpcmVkRmlsZSA9IHRoaXMuaW5kZXhlZEZpbGVzLmZpbHRlcihmID0+IGYuZG9jdW1lbnRTdGF0dXMgPT09IEZpbGVJbmRleGluZ1N0YXR1cy5QYXNzd29yZFJlcXVpcmVkKVswXTtcclxuICAgICAgcGFzc3dvcmRSZXF1aXJlZEZpbGUucGFzc3dvcmQgPSBwYXNzO1xyXG4gICAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLmFkZEZpbGVzVG9JbmRleChbcGFzc3dvcmRSZXF1aXJlZEZpbGVdKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZEluZGV4ZWRGaWxlcyh0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xyXG4gICAgX3dpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XHJcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfc2VhcmNoU2VydmljZS5pdGVtVG9SZW1vdmUuc3Vic2NyaWJlKGZpbGUgPT4ge1xyXG4gICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgIHRoaXMuX3NlYXJjaFNlcnZpY2UucmVtb3ZlRmlsZShmaWxlKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVGaWxlRnJvbUxpc3QoZmlsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLl9sb2FkaW5nTWFza1NlcnZpY2VcclxuICAgICAgLm9uTG9hZGluZ0NoYW5nZWRcclxuICAgICAgLnN1YnNjcmliZSgobG9hZGluZzogYm9vbGVhbikgPT4gdGhpcy5pc0xvYWRpbmcgPSBsb2FkaW5nKTtcclxuICB9XHJcblxyXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoQ29uZmlnID8gdGhpcy5zZWFyY2hDb25maWcucmV3cml0ZSA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgdXBsb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoQ29uZmlnID8gdGhpcy5zZWFyY2hDb25maWcudXBsb2FkIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBicm93c2VDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hDb25maWcgPyB0aGlzLnNlYXJjaENvbmZpZy5icm93c2UgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1vZGFsKGlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKGlkKTtcclxuICB9XHJcblxyXG4gIGNsb3NlTW9kYWwoaWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKGlkKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdERpcigkZXZlbnQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc2VhcmNoU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBFeHRlbmRlZEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJTZWFyY2hSZXN1bHQoKSB7XHJcbiAgICB0aGlzLnNlYXJjaFJlc3VsdCA9IG51bGw7XHJcblxyXG4gICAgaWYgKHRoaXMuZmlyc3RTZWFyY2hQZXJmb3JtZWQgJiYgdGhpcy5pbmRleGVkRmlsZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMubG9hZEluZGV4ZWRGaWxlcyh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdEFsbEl0ZW1zKGNoZWNrZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZmlsZXMuZm9yRWFjaCggKGYpID0+IHtcclxuICAgICAgaWYgKCFmLmlzRGlyZWN0b3J5ICYmICFmLmRpcmVjdG9yeSkgZi5zZWxlY3RlZCA9IGNoZWNrZWQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRJbmRleGVkRmlsZXMoJGV2ZW50KSB7XHJcbiAgICBpZiAoISRldmVudCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuX3NlYXJjaFNlcnZpY2UubG9hZEZpbGVzKHRoaXMuc2VhcmNoQ29uZmlnLmluZGV4ZWRGaWxlc0RpcmVjdG9yeSkuc3Vic2NyaWJlKChpbmRleGluZ0ZpbGVzOiBJbmRleGVkRmlsZU1vZGVsW10pID0+IFxyXG4gICAge1xyXG4gICAgICBpZiAoaW5kZXhpbmdGaWxlcyAmJiB0aGlzLnNraXBQYXNzd29yZFByb3RlY3RlZCAmJiBpbmRleGluZ0ZpbGVzLmZpbHRlcihmID0+IGYuZG9jdW1lbnRTdGF0dXMgPT09IEZpbGVJbmRleGluZ1N0YXR1cy5QYXNzd29yZFJlcXVpcmVkKS5sZW5ndGggPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgaW5kZXhpbmdGaWxlcy5maWx0ZXIoZiA9PiBmLmRvY3VtZW50U3RhdHVzID09PSBGaWxlSW5kZXhpbmdTdGF0dXMuUGFzc3dvcmRSZXF1aXJlZClbMF0uZG9jdW1lbnRTdGF0dXMgPSBGaWxlSW5kZXhpbmdTdGF0dXMuU2tpcHBlZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5pbmRleGVkRmlsZXMgPSBpbmRleGluZ0ZpbGVzIHx8IFtdO1xyXG4gICAgICBpZiAodGhpcy5pbmRleGVkRmlsZXMuZmlsdGVyKGYgPT4gZi5kb2N1bWVudFN0YXR1cyA9PT0gRmlsZUluZGV4aW5nU3RhdHVzLkluZGV4aW5nKS5sZW5ndGggPiAwIHx8XHJcbiAgICAgICAgICAoIXRoaXMuc2tpcFBhc3N3b3JkUHJvdGVjdGVkICYmIHRoaXMuaW5kZXhlZEZpbGVzLmZpbHRlcihmID0+IGYuZG9jdW1lbnRTdGF0dXMgPT09IEZpbGVJbmRleGluZ1N0YXR1cy5QYXNzd29yZFJlcXVpcmVkKS5sZW5ndGggPiAwKSlcclxuICAgICAge1xyXG4gICAgICAgIGNvbnN0IHRpbWVySWQgPSBzZXRJbnRlcnZhbCgoKSA9PiBcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLmdldERvY3VtZW50U3RhdHVzKHRoaXMuaW5kZXhlZEZpbGVzLmZpbHRlcihmID0+IGYuZG9jdW1lbnRTdGF0dXMgPT09IEZpbGVJbmRleGluZ1N0YXR1cy5JbmRleGluZyB8fFxyXG4gICAgICAgICAgICAoIXRoaXMuc2tpcFBhc3N3b3JkUHJvdGVjdGVkICYmIGYuZG9jdW1lbnRTdGF0dXMgPT09IEZpbGVJbmRleGluZ1N0YXR1cy5QYXNzd29yZFJlcXVpcmVkKSkpLnRvUHJvbWlzZSgpLnRoZW4oKHNlYXJjaEluZGV4RmlsZXM6IEluZGV4ZWRGaWxlTW9kZWxbXSkgPT4gXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlYXJjaEluZGV4RmlsZXMuZm9yRWFjaCgoc2VhcmNoRmlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChzZWFyY2hGaWxlLmRvY3VtZW50U3RhdHVzICE9PSBGaWxlSW5kZXhpbmdTdGF0dXMuSW5kZXhpbmcpXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleGVkRmlsZXMuZmlsdGVyKGYgPT4gZi5ndWlkID09PSBzZWFyY2hGaWxlLmd1aWQpWzBdLmRvY3VtZW50U3RhdHVzID0gc2VhcmNoRmlsZS5kb2N1bWVudFN0YXR1cztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXhlZEZpbGVzLmZpbHRlcihmID0+IGYuZG9jdW1lbnRTdGF0dXMgPT09IEZpbGVJbmRleGluZ1N0YXR1cy5JbmRleGluZykubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcklkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNhbmNlbCgkZXZlbnQpIHtcclxuICAgIHRoaXMuaW5kZXhlZEZpbGVzLmZpbHRlcihmID0+IGYuZG9jdW1lbnRTdGF0dXMgPT09IEZpbGVJbmRleGluZ1N0YXR1cy5QYXNzd29yZFJlcXVpcmVkKVswXS5kb2N1bWVudFN0YXR1cyA9IEZpbGVJbmRleGluZ1N0YXR1cy5Ta2lwcGVkO1xyXG4gICAgdGhpcy5za2lwUGFzc3dvcmRQcm90ZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5sb2FkSW5kZXhlZEZpbGVzKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLnVwbG9hZChudWxsLCAkZXZlbnQsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmaWxlRHJvcHBlZCgkZXZlbnQsIHJlbG9hZEZpbGVzID0gZmFsc2UpIHtcclxuICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPSAkZXZlbnQ7XHJcblxyXG4gICAgaWYgKHJlbG9hZEZpbGVzKVxyXG4gICAge1xyXG4gICAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLmxvYWRGaWxlcygnJykuc3Vic2NyaWJlKChmaWxlczogRXh0ZW5kZWRGaWxlTW9kZWxbXSkgPT4gdGhpcy5maWxlcyA9IGZpbGVzIHx8IFtdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUZpbGVGcm9tTGlzdChmaWxlOiBGaWxlTW9kZWwpIHtcclxuICAgIGlmICh0aGlzLmluZGV4ZWRGaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuaW5kZXhlZEZpbGVzLmZvckVhY2goIChmLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmKGYuZ3VpZCA9PT0gZmlsZS5ndWlkKSB0aGlzLmluZGV4ZWRGaWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlYXJjaCgkZXZlbnQ6IHN0cmluZykge1xyXG4gICAgaWYgKCRldmVudCA9PT0gXCJcIikgcmV0dXJuO1xyXG4gICAgY29uc3QgY3JlZHMgPSBbXTtcclxuICAgIGNyZWRzLnB1c2godGhpcy5jcmVkZW50aWFscyk7XHJcbiAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLnNlYXJjaChjcmVkcywgJGV2ZW50KS5zdWJzY3JpYmUoKHJlc3VsdDogU2VhcmNoUmVzdWx0KSA9PiB7XHJcbiAgICAgIHRoaXMuc2VhcmNoUmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICB0aGlzLmZpcnN0U2VhcmNoUGVyZm9ybWVkID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=