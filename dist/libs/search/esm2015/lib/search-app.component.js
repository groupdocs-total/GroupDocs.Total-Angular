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
                selector: 'gd-search',
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'search'\" icon=\"search\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n    </gd-top-toolbar>\n    <gd-search-panel (searchText)=\"search($event)\" (clearQuery)=\"clearSearchResult()\"></gd-search-panel>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"'Drop file here to upload'\" *ngIf=\"indexedFiles.length === 0\" (fileDropped)=\"fileDropped($event)\">\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n    Or drop file here\n  </gd-init-state>\n\n  <gd-indexed-files-list [files]=\"indexedFiles\" *ngIf=\"indexedFiles.length > 0 && !searchResult\"></gd-indexed-files-list>\n\n  <gd-search-result-summary [searchResult]=\"searchResult\" *ngIf=\"searchResult\"></gd-search-result-summary>\n\n  <gd-search-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         [uploadConfig]=\"uploadConfig\" (selectAll)=\"selectAllItems($event)\" (fileDropped)=\"fileDropped($event, true)\"\n                         (filesAddedToIndex)=\"loadIndexedFiles($event)\"></gd-search-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required (cancelEvent)=\"cancel($event)\"></gd-password-required>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2VhcmNoLyIsInNvdXJjZXMiOlsibGliL3NlYXJjaC1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUVMLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsZUFBZSxFQUNFLFlBQVksRUFBRSxrQkFBa0IsRUFDbEQsTUFBTSwrQ0FBK0MsQ0FBQztBQUV2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDNUUsT0FBTyxFQUtMLGtCQUFrQixFQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBT3pCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7Ozs7SUFnQjdCLFlBQW9CLGNBQTZCLEVBQzdCLGFBQTJCLEVBQ25DLGFBQWtDLEVBQ2xDLGtCQUFzQyxFQUN0QyxlQUFnQyxFQUN4QixjQUE2QixFQUM3QixtQkFBdUM7UUFOdkMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFJM0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQXJCM0QsVUFBSyxHQUFHLFFBQVEsQ0FBQztRQUNqQixVQUFLLEdBQXdCLEVBQUUsQ0FBQztRQUNoQyxzQkFBaUIsR0FBNEIsRUFBRSxDQUFDO1FBQ2hELGlCQUFZLEdBQXVCLEVBQUUsQ0FBQztRQUd0QyxxQkFBZ0IsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO1FBTzVDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBVXJCLGFB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LENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlELENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFjO1FBQ25CLElBQUksTUFBTSxLQUFLLEVBQUU7WUFBRSxPQUFPOztjQUNwQixLQUFLLEdBQUcsRUFBRTtRQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsTUFBb0IsRUFBRSxFQUFFO1lBQzNFLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1lBQzNCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDbkMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFqTUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixtaURBQTBDOzthQUUzQzs7OztZQXZCTyxhQUFhO1lBR25CLFlBQVk7WUFNTixtQkFBbUI7WUFMekIsa0JBQWtCO1lBQ2xCLGVBQWU7WUFLVCxhQUFhO1lBSlksa0JBQWtCOzs7O0lBbUJqRCxtQ0FBaUI7O0lBQ2pCLG1DQUFnQzs7SUFDaEMsK0NBQWdEOztJQUNoRCwwQ0FBc0M7O0lBQ3RDLDBDQUEyQjs7SUFDM0IseUNBQTZCOztJQUM3Qiw4Q0FBNEM7O0lBQzVDLHVDQUFtQjs7SUFDbkIsdUNBQW1COztJQUNuQixtREFBK0I7O0lBQy9CLGtEQUE4Qjs7SUFDOUIsMENBQTJCOztJQUUzQiw0Q0FBdUI7Ozs7O0lBRVgsNENBQXFDOzs7OztJQUNyQywyQ0FBbUM7Ozs7O0lBSW5DLDRDQUFxQzs7Ozs7SUFDckMsaURBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NlYXJjaFNlcnZpY2V9IGZyb20gXCIuL3NlYXJjaC5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuICBGaWxlTW9kZWwsXG4gIE1vZGFsU2VydmljZSxcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICBQYXNzd29yZFNlcnZpY2UsXG4gIEZpbGVDcmVkZW50aWFscywgQ29tbW9uTW9kYWxzLCBMb2FkaW5nTWFza1NlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtTZWFyY2hDb25maWd9IGZyb20gXCIuL3NlYXJjaC1jb25maWdcIjtcbmltcG9ydCB7U2VhcmNoQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vc2VhcmNoLWNvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQge1dpbmRvd1NlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7XG4gIEluZGV4ZWRGaWxlTW9kZWwsXG4gIFNlYXJjaFJlc3VsdCxcbiAgU2VhcmNoUmVzdWx0SXRlbU1vZGVsLFxuICBFeHRlbmRlZEZpbGVNb2RlbCxcbiAgRmlsZUluZGV4aW5nU3RhdHVzXG59IGZyb20gXCIuL3NlYXJjaC1tb2RlbHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2Qtc2VhcmNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtYXBwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgdGl0bGUgPSAnc2VhcmNoJztcbiAgZmlsZXM6IEV4dGVuZGVkRmlsZU1vZGVsW10gPSBbXTtcbiAgc2VhcmNoUmVzdWx0SXRlbXM6IFNlYXJjaFJlc3VsdEl0ZW1Nb2RlbFtdID0gW107XG4gIGluZGV4ZWRGaWxlczogSW5kZXhlZEZpbGVNb2RlbFtdID0gW107XG4gIHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnO1xuICBjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzO1xuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xuICBpc0Rlc2t0b3A6IGJvb2xlYW47XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgc2tpcFBhc3N3b3JkUHJvdGVjdGVkOiBib29sZWFuO1xuICBmaXJzdFNlYXJjaFBlcmZvcm1lZDogYm9vbGVhbjtcbiAgc2VhcmNoUmVzdWx0OiBTZWFyY2hSZXN1bHQ7XG5cbiAgZmlsZVdhc0Ryb3BwZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZWFyY2hTZXJ2aWNlOiBTZWFyY2hTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgY29uZmlnU2VydmljZTogU2VhcmNoQ29uZmlnU2VydmljZSxcbiAgICAgICAgICAgICAgdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHBhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2FkaW5nTWFza1NlcnZpY2U6IExvYWRpbmdNYXNrU2VydmljZSkge1xuXG4gICAgY29uZmlnU2VydmljZS51cGRhdGVkQ29uZmlnLnN1YnNjcmliZSgoc2VhcmNoQ29uZmlnKSA9PiB7XG4gICAgICB0aGlzLnNlYXJjaENvbmZpZyA9IHNlYXJjaENvbmZpZztcbiAgICB9KTtcblxuICAgIHVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xuICAgICAgaWYgKHVwbG9hZHMpIHtcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHVwbG9hZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oaSksICcnLCB0aGlzLnNlYXJjaENvbmZpZy5yZXdyaXRlKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZmlsZVdhc0Ryb3BwZWQpIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhc3N3b3JkU2VydmljZS5wYXNzQ2hhbmdlLnN1YnNjcmliZSgocGFzczogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoQ29tbW9uTW9kYWxzLlBhc3N3b3JkUmVxdWlyZWQpO1xuXG4gICAgICBjb25zdCBwYXNzd29yZFJlcXVpcmVkRmlsZSA9IHRoaXMuaW5kZXhlZEZpbGVzLmZpbHRlcihmID0+IGYuZG9jdW1lbnRTdGF0dXMgPT09IEZpbGVJbmRleGluZ1N0YXR1cy5QYXNzd29yZFJlcXVpcmVkKVswXTtcbiAgICAgIHBhc3N3b3JkUmVxdWlyZWRGaWxlLnBhc3N3b3JkID0gcGFzcztcbiAgICAgIHRoaXMuX3NlYXJjaFNlcnZpY2UuYWRkRmlsZXNUb0luZGV4KFtwYXNzd29yZFJlcXVpcmVkRmlsZV0pLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZEluZGV4ZWRGaWxlcyh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgfSk7XG5cbiAgICBfc2VhcmNoU2VydmljZS5pdGVtVG9SZW1vdmUuc3Vic2NyaWJlKGZpbGUgPT4ge1xuICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgdGhpcy5fc2VhcmNoU2VydmljZS5yZW1vdmVGaWxlKGZpbGUpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVGaWxlRnJvbUxpc3QoZmlsZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fbG9hZGluZ01hc2tTZXJ2aWNlXG4gICAgICAub25Mb2FkaW5nQ2hhbmdlZFxuICAgICAgLnN1YnNjcmliZSgobG9hZGluZzogYm9vbGVhbikgPT4gdGhpcy5pc0xvYWRpbmcgPSBsb2FkaW5nKTtcbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaENvbmZpZyA/IHRoaXMuc2VhcmNoQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hDb25maWcgPyB0aGlzLnNlYXJjaENvbmZpZy51cGxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hDb25maWcgPyB0aGlzLnNlYXJjaENvbmZpZy5icm93c2UgOiB0cnVlO1xuICB9XG5cbiAgb3Blbk1vZGFsKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihpZCk7XG4gIH1cblxuICBjbG9zZU1vZGFsKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoaWQpO1xuICB9XG5cbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VhcmNoU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBFeHRlbmRlZEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xuICB9XG5cbiAgY2xlYXJTZWFyY2hSZXN1bHQoKSB7XG4gICAgdGhpcy5zZWFyY2hSZXN1bHQgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuZmlyc3RTZWFyY2hQZXJmb3JtZWQgJiYgdGhpcy5pbmRleGVkRmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmxvYWRJbmRleGVkRmlsZXModHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0QWxsSXRlbXMoY2hlY2tlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZmlsZXMuZm9yRWFjaCggKGYpID0+IHtcbiAgICAgIGlmICghZi5pc0RpcmVjdG9yeSAmJiAhZi5kaXJlY3RvcnkpIGYuc2VsZWN0ZWQgPSBjaGVja2VkO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZEluZGV4ZWRGaWxlcygkZXZlbnQpIHtcbiAgICBpZiAoISRldmVudCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fc2VhcmNoU2VydmljZS5sb2FkRmlsZXModGhpcy5zZWFyY2hDb25maWcuaW5kZXhlZEZpbGVzRGlyZWN0b3J5KS5zdWJzY3JpYmUoKGluZGV4aW5nRmlsZXM6IEluZGV4ZWRGaWxlTW9kZWxbXSkgPT4gXG4gICAge1xuICAgICAgaWYgKGluZGV4aW5nRmlsZXMgJiYgdGhpcy5za2lwUGFzc3dvcmRQcm90ZWN0ZWQgJiYgaW5kZXhpbmdGaWxlcy5maWx0ZXIoZiA9PiBmLmRvY3VtZW50U3RhdHVzID09PSBGaWxlSW5kZXhpbmdTdGF0dXMuUGFzc3dvcmRSZXF1aXJlZCkubGVuZ3RoID4gMClcbiAgICAgIHtcbiAgICAgICAgaW5kZXhpbmdGaWxlcy5maWx0ZXIoZiA9PiBmLmRvY3VtZW50U3RhdHVzID09PSBGaWxlSW5kZXhpbmdTdGF0dXMuUGFzc3dvcmRSZXF1aXJlZClbMF0uZG9jdW1lbnRTdGF0dXMgPSBGaWxlSW5kZXhpbmdTdGF0dXMuU2tpcHBlZDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbmRleGVkRmlsZXMgPSBpbmRleGluZ0ZpbGVzIHx8IFtdO1xuICAgICAgaWYgKHRoaXMuaW5kZXhlZEZpbGVzLmZpbHRlcihmID0+IGYuZG9jdW1lbnRTdGF0dXMgPT09IEZpbGVJbmRleGluZ1N0YXR1cy5JbmRleGluZykubGVuZ3RoID4gMCB8fFxuICAgICAgICAgICghdGhpcy5za2lwUGFzc3dvcmRQcm90ZWN0ZWQgJiYgdGhpcy5pbmRleGVkRmlsZXMuZmlsdGVyKGYgPT4gZi5kb2N1bWVudFN0YXR1cyA9PT0gRmlsZUluZGV4aW5nU3RhdHVzLlBhc3N3b3JkUmVxdWlyZWQpLmxlbmd0aCA+IDApKVxuICAgICAge1xuICAgICAgICBjb25zdCB0aW1lcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4gXG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLmdldERvY3VtZW50U3RhdHVzKHRoaXMuaW5kZXhlZEZpbGVzLmZpbHRlcihmID0+IGYuZG9jdW1lbnRTdGF0dXMgPT09IEZpbGVJbmRleGluZ1N0YXR1cy5JbmRleGluZyB8fFxuICAgICAgICAgICAgKCF0aGlzLnNraXBQYXNzd29yZFByb3RlY3RlZCAmJiBmLmRvY3VtZW50U3RhdHVzID09PSBGaWxlSW5kZXhpbmdTdGF0dXMuUGFzc3dvcmRSZXF1aXJlZCkpKS50b1Byb21pc2UoKS50aGVuKChzZWFyY2hJbmRleEZpbGVzOiBJbmRleGVkRmlsZU1vZGVsW10pID0+IFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlYXJjaEluZGV4RmlsZXMuZm9yRWFjaCgoc2VhcmNoRmlsZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoc2VhcmNoRmlsZS5kb2N1bWVudFN0YXR1cyAhPT0gRmlsZUluZGV4aW5nU3RhdHVzLkluZGV4aW5nKVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleGVkRmlsZXMuZmlsdGVyKGYgPT4gZi5ndWlkID09PSBzZWFyY2hGaWxlLmd1aWQpWzBdLmRvY3VtZW50U3RhdHVzID0gc2VhcmNoRmlsZS5kb2N1bWVudFN0YXR1cztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4ZWRGaWxlcy5maWx0ZXIoZiA9PiBmLmRvY3VtZW50U3RhdHVzID09PSBGaWxlSW5kZXhpbmdTdGF0dXMuSW5kZXhpbmcpLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjYW5jZWwoJGV2ZW50KSB7XG4gICAgdGhpcy5pbmRleGVkRmlsZXMuZmlsdGVyKGYgPT4gZi5kb2N1bWVudFN0YXR1cyA9PT0gRmlsZUluZGV4aW5nU3RhdHVzLlBhc3N3b3JkUmVxdWlyZWQpWzBdLmRvY3VtZW50U3RhdHVzID0gRmlsZUluZGV4aW5nU3RhdHVzLlNraXBwZWQ7XG4gICAgdGhpcy5za2lwUGFzc3dvcmRQcm90ZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMubG9hZEluZGV4ZWRGaWxlcyh0cnVlKTtcbiAgfVxuXG4gIHVwbG9hZCgkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX3NlYXJjaFNlcnZpY2UudXBsb2FkKG51bGwsICRldmVudCwgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsZURyb3BwZWQoJGV2ZW50LCByZWxvYWRGaWxlcyA9IGZhbHNlKSB7XG4gICAgdGhpcy5maWxlV2FzRHJvcHBlZCA9ICRldmVudDtcblxuICAgIGlmIChyZWxvYWRGaWxlcylcbiAgICB7XG4gICAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLmxvYWRGaWxlcygnJykuc3Vic2NyaWJlKChmaWxlczogRXh0ZW5kZWRGaWxlTW9kZWxbXSkgPT4gdGhpcy5maWxlcyA9IGZpbGVzIHx8IFtdKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVGaWxlRnJvbUxpc3QoZmlsZTogRmlsZU1vZGVsKSB7XG4gICAgaWYgKHRoaXMuaW5kZXhlZEZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuaW5kZXhlZEZpbGVzLmZvckVhY2goIChmLCBpbmRleCkgPT4ge1xuICAgICAgICBpZihmLmd1aWQgPT09IGZpbGUuZ3VpZCkgdGhpcy5pbmRleGVkRmlsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaCgkZXZlbnQ6IHN0cmluZykge1xuICAgIGlmICgkZXZlbnQgPT09IFwiXCIpIHJldHVybjtcbiAgICBjb25zdCBjcmVkcyA9IFtdO1xuICAgIGNyZWRzLnB1c2godGhpcy5jcmVkZW50aWFscyk7XG4gICAgdGhpcy5fc2VhcmNoU2VydmljZS5zZWFyY2goY3JlZHMsICRldmVudCkuc3Vic2NyaWJlKChyZXN1bHQ6IFNlYXJjaFJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5zZWFyY2hSZXN1bHQgPSByZXN1bHQ7XG4gICAgICB0aGlzLmZpcnN0U2VhcmNoUGVyZm9ybWVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxufVxuIl19