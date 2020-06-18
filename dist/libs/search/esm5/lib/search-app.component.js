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
var SearchAppComponent = /** @class */ (function () {
    function SearchAppComponent(_searchService, _modalService, configService, uploadFilesService, passwordService, _windowService, _loadingMaskService) {
        var _this = this;
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
        function (searchConfig) {
            _this.searchConfig = searchConfig;
        }));
        uploadFilesService.uploadsChange.subscribe((/**
         * @param {?} uploads
         * @return {?}
         */
        function (uploads) {
            if (uploads) {
                /** @type {?} */
                var i = void 0;
                for (i = 0; i < uploads.length; i++) {
                    _this._searchService.upload(uploads.item(i), '', _this.searchConfig.rewrite).subscribe((/**
                     * @param {?} obj
                     * @return {?}
                     */
                    function (obj) {
                        if (!_this.fileWasDropped) {
                            _this.selectDir('');
                        }
                    }));
                }
            }
        }));
        passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        function (pass) {
            _this.closeModal(CommonModals.PasswordRequired);
            /** @type {?} */
            var passwordRequiredFile = _this.indexedFiles.filter((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return f.documentStatus === FileIndexingStatus.PasswordRequired; }))[0];
            passwordRequiredFile.password = pass;
            _this._searchService.addFilesToIndex([passwordRequiredFile]).subscribe((/**
             * @return {?}
             */
            function () {
                _this.loadIndexedFiles(true);
            }));
        }));
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            _this.isDesktop = _windowService.isDesktop();
        }));
        _searchService.itemToRemove.subscribe((/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            if (file) {
                _this._searchService.removeFile(file).subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.removeFileFromList(file);
                }));
            }
        }));
    }
    /**
     * @return {?}
     */
    SearchAppComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SearchAppComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._loadingMaskService
            .onLoadingChanged
            .subscribe((/**
         * @param {?} loading
         * @return {?}
         */
        function (loading) { return _this.isLoading = loading; }));
    };
    Object.defineProperty(SearchAppComponent.prototype, "rewriteConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.searchConfig ? this.searchConfig.rewrite : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchAppComponent.prototype, "uploadConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.searchConfig ? this.searchConfig.upload : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchAppComponent.prototype, "browseConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.searchConfig ? this.searchConfig.browse : true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} id
     * @return {?}
     */
    SearchAppComponent.prototype.openModal = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this._modalService.open(id);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    SearchAppComponent.prototype.closeModal = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this._modalService.close(id);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SearchAppComponent.prototype.selectDir = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        this._searchService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        function (files) { return _this.files = files || []; }));
    };
    /**
     * @return {?}
     */
    SearchAppComponent.prototype.clearSearchResult = /**
     * @return {?}
     */
    function () {
        this.searchResult = null;
        if (this.firstSearchPerformed && this.indexedFiles.length === 0) {
            this.loadIndexedFiles(true);
        }
    };
    /**
     * @param {?} checked
     * @return {?}
     */
    SearchAppComponent.prototype.selectAllItems = /**
     * @param {?} checked
     * @return {?}
     */
    function (checked) {
        this.files.forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            if (!f.isDirectory && !f.directory)
                f.selected = checked;
        }));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SearchAppComponent.prototype.loadIndexedFiles = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        if (!$event)
            return;
        this._searchService.loadFiles(this.searchConfig.indexedFilesDirectory).subscribe((/**
         * @param {?} indexingFiles
         * @return {?}
         */
        function (indexingFiles) {
            if (indexingFiles && _this.skipPasswordProtected && indexingFiles.filter((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return f.documentStatus === FileIndexingStatus.PasswordRequired; })).length > 0) {
                indexingFiles.filter((/**
                 * @param {?} f
                 * @return {?}
                 */
                function (f) { return f.documentStatus === FileIndexingStatus.PasswordRequired; }))[0].documentStatus = FileIndexingStatus.Skipped;
            }
            _this.indexedFiles = indexingFiles || [];
            if (_this.indexedFiles.filter((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return f.documentStatus === FileIndexingStatus.Indexing; })).length > 0 ||
                (!_this.skipPasswordProtected && _this.indexedFiles.filter((/**
                 * @param {?} f
                 * @return {?}
                 */
                function (f) { return f.documentStatus === FileIndexingStatus.PasswordRequired; })).length > 0)) {
                /** @type {?} */
                var timerId_1 = setInterval((/**
                 * @return {?}
                 */
                function () {
                    _this._searchService.getDocumentStatus(_this.indexedFiles.filter((/**
                     * @param {?} f
                     * @return {?}
                     */
                    function (f) { return f.documentStatus === FileIndexingStatus.Indexing ||
                        (!_this.skipPasswordProtected && f.documentStatus === FileIndexingStatus.PasswordRequired); }))).toPromise().then((/**
                     * @param {?} searchIndexFiles
                     * @return {?}
                     */
                    function (searchIndexFiles) {
                        searchIndexFiles.forEach((/**
                         * @param {?} searchFile
                         * @return {?}
                         */
                        function (searchFile) {
                            if (searchFile.documentStatus !== FileIndexingStatus.Indexing) {
                                _this.indexedFiles.filter((/**
                                 * @param {?} f
                                 * @return {?}
                                 */
                                function (f) { return f.guid === searchFile.guid; }))[0].documentStatus = searchFile.documentStatus;
                            }
                        }));
                        if (_this.indexedFiles.filter((/**
                         * @param {?} f
                         * @return {?}
                         */
                        function (f) { return f.documentStatus === FileIndexingStatus.Indexing; })).length === 0) {
                            clearInterval(timerId_1);
                        }
                    })).catch((/**
                     * @param {?} response
                     * @return {?}
                     */
                    function (response) {
                        clearInterval(timerId_1);
                    }));
                }), 1000);
            }
        }));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SearchAppComponent.prototype.cancel = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.indexedFiles.filter((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f.documentStatus === FileIndexingStatus.PasswordRequired; }))[0].documentStatus = FileIndexingStatus.Skipped;
        this.skipPasswordProtected = true;
        this.loadIndexedFiles(true);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SearchAppComponent.prototype.upload = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        this._searchService.upload(null, $event, this.rewriteConfig).subscribe((/**
         * @return {?}
         */
        function () {
            _this.selectDir('');
        }));
    };
    /**
     * @param {?} $event
     * @param {?=} reloadFiles
     * @return {?}
     */
    SearchAppComponent.prototype.fileDropped = /**
     * @param {?} $event
     * @param {?=} reloadFiles
     * @return {?}
     */
    function ($event, reloadFiles) {
        var _this = this;
        if (reloadFiles === void 0) { reloadFiles = false; }
        this.fileWasDropped = $event;
        if (reloadFiles) {
            this._searchService.loadFiles('').subscribe((/**
             * @param {?} files
             * @return {?}
             */
            function (files) { return _this.files = files || []; }));
        }
    };
    /**
     * @param {?} file
     * @return {?}
     */
    SearchAppComponent.prototype.removeFileFromList = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var _this = this;
        if (this.indexedFiles.length > 0) {
            this.indexedFiles.forEach((/**
             * @param {?} f
             * @param {?} index
             * @return {?}
             */
            function (f, index) {
                if (f.guid === file.guid)
                    _this.indexedFiles.splice(index, 1);
            }));
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SearchAppComponent.prototype.search = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        if ($event === "")
            return;
        /** @type {?} */
        var creds = [];
        creds.push(this.credentials);
        this._searchService.search(creds, $event).subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.searchResult = result;
            _this.firstSearchPerformed = true;
        }));
    };
    SearchAppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-search',
                    template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'search'\" icon=\"search\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n    </gd-top-toolbar>\n    <gd-search-panel (searchText)=\"search($event)\" (clearQuery)=\"clearSearchResult()\"></gd-search-panel>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"'Drop file here to upload'\" *ngIf=\"indexedFiles.length === 0\" (fileDropped)=\"fileDropped($event)\">\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n    Or drop file here\n  </gd-init-state>\n\n  <gd-indexed-files-list [files]=\"indexedFiles\" *ngIf=\"indexedFiles.length > 0 && !searchResult\"></gd-indexed-files-list>\n\n  <gd-search-result-summary [searchResult]=\"searchResult\" *ngIf=\"searchResult\"></gd-search-result-summary>\n\n  <gd-search-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         [uploadConfig]=\"uploadConfig\" (selectAll)=\"selectAllItems($event)\" (fileDropped)=\"fileDropped($event, true)\"\n                         (filesAddedToIndex)=\"loadIndexedFiles($event)\"></gd-search-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required (cancelEvent)=\"cancel($event)\"></gd-password-required>\n</div>\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.gd-document,/deep/ .document{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important}.current-page-number{margin-left:7px;font-size:14px;color:#959da5;width:37px;height:37px;line-height:37px;text-align:center}.current-page-number.active{color:#fff}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.thumbnails-button{position:absolute;right:3px}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}::ng-deep .tools .button,::ng-deep .tools .nav-caret,::ng-deep .tools .selected-value{color:#fff!important}::ng-deep .tools .button.inactive,::ng-deep .tools .nav-caret.inactive,::ng-deep .tools .selected-value.inactive{color:#959da5!important}::ng-deep .tools .button{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .dropdown-menu .option{color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}::ng-deep .tools .select{width:65px;height:37px;margin-left:7px;line-height:37px;text-align:center}@media (max-width:1037px){.current-page-number,.mobile-hide{display:none}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .tools .gd-nav-search-btn .icon-button{height:37px;width:37px}::ng-deep .tools .gd-nav-search-btn .button{font-size:14px}}"]
                }] }
    ];
    /** @nocollapse */
    SearchAppComponent.ctorParameters = function () { return [
        { type: SearchService },
        { type: ModalService },
        { type: SearchConfigService },
        { type: UploadFilesService },
        { type: PasswordService },
        { type: WindowService },
        { type: LoadingMaskService }
    ]; };
    return SearchAppComponent;
}());
export { SearchAppComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2VhcmNoLyIsInNvdXJjZXMiOlsibGliL3NlYXJjaC1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUVMLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsZUFBZSxFQUNFLFlBQVksRUFBRSxrQkFBa0IsRUFDbEQsTUFBTSwrQ0FBK0MsQ0FBQztBQUV2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDNUUsT0FBTyxFQUtMLGtCQUFrQixFQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCO0lBcUJFLDRCQUFvQixjQUE2QixFQUM3QixhQUEyQixFQUNuQyxhQUFrQyxFQUNsQyxrQkFBc0MsRUFDdEMsZUFBZ0MsRUFDeEIsY0FBNkIsRUFDN0IsbUJBQXVDO1FBTjNELGlCQWdEQztRQWhEbUIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFJM0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQXJCM0QsVUFBSyxHQUFHLFFBQVEsQ0FBQztRQUNqQixVQUFLLEdBQXdCLEVBQUUsQ0FBQztRQUNoQyxzQkFBaUIsR0FBNEIsRUFBRSxDQUFDO1FBQ2hELGlCQUFZLEdBQXVCLEVBQUUsQ0FBQztRQUd0QyxxQkFBZ0IsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO1FBTzVDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBVXJCLGFBQWEsQ0FBQyxhQUFh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Qiw4Q0FBNEM7O0lBQzVDLHVDQUFtQjs7SUFDbkIsdUNBQW1COztJQUNuQixtREFBK0I7O0lBQy9CLGtEQUE4Qjs7SUFDOUIsMENBQTJCOztJQUUzQiw0Q0FBdUI7Ozs7O0lBRVgsNENBQXFDOzs7OztJQUNyQywyQ0FBbUM7Ozs7O0lBSW5DLDRDQUFxQzs7Ozs7SUFDckMsaURBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NlYXJjaFNlcnZpY2V9IGZyb20gXCIuL3NlYXJjaC5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuICBGaWxlTW9kZWwsXG4gIE1vZGFsU2VydmljZSxcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICBQYXNzd29yZFNlcnZpY2UsXG4gIEZpbGVDcmVkZW50aWFscywgQ29tbW9uTW9kYWxzLCBMb2FkaW5nTWFza1NlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtTZWFyY2hDb25maWd9IGZyb20gXCIuL3NlYXJjaC1jb25maWdcIjtcbmltcG9ydCB7U2VhcmNoQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vc2VhcmNoLWNvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQge1dpbmRvd1NlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7XG4gIEluZGV4ZWRGaWxlTW9kZWwsXG4gIFNlYXJjaFJlc3VsdCxcbiAgU2VhcmNoUmVzdWx0SXRlbU1vZGVsLFxuICBFeHRlbmRlZEZpbGVNb2RlbCxcbiAgRmlsZUluZGV4aW5nU3RhdHVzXG59IGZyb20gXCIuL3NlYXJjaC1tb2RlbHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2Qtc2VhcmNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtYXBwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgdGl0bGUgPSAnc2VhcmNoJztcbiAgZmlsZXM6IEV4dGVuZGVkRmlsZU1vZGVsW10gPSBbXTtcbiAgc2VhcmNoUmVzdWx0SXRlbXM6IFNlYXJjaFJlc3VsdEl0ZW1Nb2RlbFtdID0gW107XG4gIGluZGV4ZWRGaWxlczogSW5kZXhlZEZpbGVNb2RlbFtdID0gW107XG4gIHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnO1xuICBjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzO1xuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xuICBpc0Rlc2t0b3A6IGJvb2xlYW47XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgc2tpcFBhc3N3b3JkUHJvdGVjdGVkOiBib29sZWFuO1xuICBmaXJzdFNlYXJjaFBlcmZvcm1lZDogYm9vbGVhbjtcbiAgc2VhcmNoUmVzdWx0OiBTZWFyY2hSZXN1bHQ7XG5cbiAgZmlsZVdhc0Ryb3BwZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZWFyY2hTZXJ2aWNlOiBTZWFyY2hTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgY29uZmlnU2VydmljZTogU2VhcmNoQ29uZmlnU2VydmljZSxcbiAgICAgICAgICAgICAgdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHBhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2FkaW5nTWFza1NlcnZpY2U6IExvYWRpbmdNYXNrU2VydmljZSkge1xuXG4gICAgY29uZmlnU2VydmljZS51cGRhdGVkQ29uZmlnLnN1YnNjcmliZSgoc2VhcmNoQ29uZmlnKSA9PiB7XG4gICAgICB0aGlzLnNlYXJjaENvbmZpZyA9IHNlYXJjaENvbmZpZztcbiAgICB9KTtcblxuICAgIHVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xuICAgICAgaWYgKHVwbG9hZHMpIHtcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHVwbG9hZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oaSksICcnLCB0aGlzLnNlYXJjaENvbmZpZy5yZXdyaXRlKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZmlsZVdhc0Ryb3BwZWQpIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhc3N3b3JkU2VydmljZS5wYXNzQ2hhbmdlLnN1YnNjcmliZSgocGFzczogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoQ29tbW9uTW9kYWxzLlBhc3N3b3JkUmVxdWlyZWQpO1xuXG4gICAgICBjb25zdCBwYXNzd29yZFJlcXVpcmVkRmlsZSA9IHRoaXMuaW5kZXhlZEZpbGVzLmZpbHRlcihmID0+IGYuZG9jdW1lbnRTdGF0dXMgPT09IEZpbGVJbmRleGluZ1N0YXR1cy5QYXNzd29yZFJlcXVpcmVkKVswXTtcbiAgICAgIHBhc3N3b3JkUmVxdWlyZWRGaWxlLnBhc3N3b3JkID0gcGFzcztcbiAgICAgIHRoaXMuX3NlYXJjaFNlcnZpY2UuYWRkRmlsZXNUb0luZGV4KFtwYXNzd29yZFJlcXVpcmVkRmlsZV0pLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZEluZGV4ZWRGaWxlcyh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgfSk7XG5cbiAgICBfc2VhcmNoU2VydmljZS5pdGVtVG9SZW1vdmUuc3Vic2NyaWJlKGZpbGUgPT4ge1xuICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgdGhpcy5fc2VhcmNoU2VydmljZS5yZW1vdmVGaWxlKGZpbGUpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVGaWxlRnJvbUxpc3QoZmlsZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fbG9hZGluZ01hc2tTZXJ2aWNlXG4gICAgICAub25Mb2FkaW5nQ2hhbmdlZFxuICAgICAgLnN1YnNjcmliZSgobG9hZGluZzogYm9vbGVhbikgPT4gdGhpcy5pc0xvYWRpbmcgPSBsb2FkaW5nKTtcbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaENvbmZpZyA/IHRoaXMuc2VhcmNoQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hDb25maWcgPyB0aGlzLnNlYXJjaENvbmZpZy51cGxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hDb25maWcgPyB0aGlzLnNlYXJjaENvbmZpZy5icm93c2UgOiB0cnVlO1xuICB9XG5cbiAgb3Blbk1vZGFsKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihpZCk7XG4gIH1cblxuICBjbG9zZU1vZGFsKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoaWQpO1xuICB9XG5cbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VhcmNoU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBFeHRlbmRlZEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xuICB9XG5cbiAgY2xlYXJTZWFyY2hSZXN1bHQoKSB7XG4gICAgdGhpcy5zZWFyY2hSZXN1bHQgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuZmlyc3RTZWFyY2hQZXJmb3JtZWQgJiYgdGhpcy5pbmRleGVkRmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmxvYWRJbmRleGVkRmlsZXModHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0QWxsSXRlbXMoY2hlY2tlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZmlsZXMuZm9yRWFjaCggKGYpID0+IHtcbiAgICAgIGlmICghZi5pc0RpcmVjdG9yeSAmJiAhZi5kaXJlY3RvcnkpIGYuc2VsZWN0ZWQgPSBjaGVja2VkO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZEluZGV4ZWRGaWxlcygkZXZlbnQpIHtcbiAgICBpZiAoISRldmVudCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fc2VhcmNoU2VydmljZS5sb2FkRmlsZXModGhpcy5zZWFyY2hDb25maWcuaW5kZXhlZEZpbGVzRGlyZWN0b3J5KS5zdWJzY3JpYmUoKGluZGV4aW5nRmlsZXM6IEluZGV4ZWRGaWxlTW9kZWxbXSkgPT4gXG4gICAge1xuICAgICAgaWYgKGluZGV4aW5nRmlsZXMgJiYgdGhpcy5za2lwUGFzc3dvcmRQcm90ZWN0ZWQgJiYgaW5kZXhpbmdGaWxlcy5maWx0ZXIoZiA9PiBmLmRvY3VtZW50U3RhdHVzID09PSBGaWxlSW5kZXhpbmdTdGF0dXMuUGFzc3dvcmRSZXF1aXJlZCkubGVuZ3RoID4gMClcbiAgICAgIHtcbiAgICAgICAgaW5kZXhpbmdGaWxlcy5maWx0ZXIoZiA9PiBmLmRvY3VtZW50U3RhdHVzID09PSBGaWxlSW5kZXhpbmdTdGF0dXMuUGFzc3dvcmRSZXF1aXJlZClbMF0uZG9jdW1lbnRTdGF0dXMgPSBGaWxlSW5kZXhpbmdTdGF0dXMuU2tpcHBlZDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbmRleGVkRmlsZXMgPSBpbmRleGluZ0ZpbGVzIHx8IFtdO1xuICAgICAgaWYgKHRoaXMuaW5kZXhlZEZpbGVzLmZpbHRlcihmID0+IGYuZG9jdW1lbnRTdGF0dXMgPT09IEZpbGVJbmRleGluZ1N0YXR1cy5JbmRleGluZykubGVuZ3RoID4gMCB8fFxuICAgICAgICAgICghdGhpcy5za2lwUGFzc3dvcmRQcm90ZWN0ZWQgJiYgdGhpcy5pbmRleGVkRmlsZXMuZmlsdGVyKGYgPT4gZi5kb2N1bWVudFN0YXR1cyA9PT0gRmlsZUluZGV4aW5nU3RhdHVzLlBhc3N3b3JkUmVxdWlyZWQpLmxlbmd0aCA+IDApKVxuICAgICAge1xuICAgICAgICBjb25zdCB0aW1lcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4gXG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLmdldERvY3VtZW50U3RhdHVzKHRoaXMuaW5kZXhlZEZpbGVzLmZpbHRlcihmID0+IGYuZG9jdW1lbnRTdGF0dXMgPT09IEZpbGVJbmRleGluZ1N0YXR1cy5JbmRleGluZyB8fFxuICAgICAgICAgICAgKCF0aGlzLnNraXBQYXNzd29yZFByb3RlY3RlZCAmJiBmLmRvY3VtZW50U3RhdHVzID09PSBGaWxlSW5kZXhpbmdTdGF0dXMuUGFzc3dvcmRSZXF1aXJlZCkpKS50b1Byb21pc2UoKS50aGVuKChzZWFyY2hJbmRleEZpbGVzOiBJbmRleGVkRmlsZU1vZGVsW10pID0+IFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlYXJjaEluZGV4RmlsZXMuZm9yRWFjaCgoc2VhcmNoRmlsZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoc2VhcmNoRmlsZS5kb2N1bWVudFN0YXR1cyAhPT0gRmlsZUluZGV4aW5nU3RhdHVzLkluZGV4aW5nKVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleGVkRmlsZXMuZmlsdGVyKGYgPT4gZi5ndWlkID09PSBzZWFyY2hGaWxlLmd1aWQpWzBdLmRvY3VtZW50U3RhdHVzID0gc2VhcmNoRmlsZS5kb2N1bWVudFN0YXR1cztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4ZWRGaWxlcy5maWx0ZXIoZiA9PiBmLmRvY3VtZW50U3RhdHVzID09PSBGaWxlSW5kZXhpbmdTdGF0dXMuSW5kZXhpbmcpLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjYW5jZWwoJGV2ZW50KSB7XG4gICAgdGhpcy5pbmRleGVkRmlsZXMuZmlsdGVyKGYgPT4gZi5kb2N1bWVudFN0YXR1cyA9PT0gRmlsZUluZGV4aW5nU3RhdHVzLlBhc3N3b3JkUmVxdWlyZWQpWzBdLmRvY3VtZW50U3RhdHVzID0gRmlsZUluZGV4aW5nU3RhdHVzLlNraXBwZWQ7XG4gICAgdGhpcy5za2lwUGFzc3dvcmRQcm90ZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMubG9hZEluZGV4ZWRGaWxlcyh0cnVlKTtcbiAgfVxuXG4gIHVwbG9hZCgkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX3NlYXJjaFNlcnZpY2UudXBsb2FkKG51bGwsICRldmVudCwgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsZURyb3BwZWQoJGV2ZW50LCByZWxvYWRGaWxlcyA9IGZhbHNlKSB7XG4gICAgdGhpcy5maWxlV2FzRHJvcHBlZCA9ICRldmVudDtcblxuICAgIGlmIChyZWxvYWRGaWxlcylcbiAgICB7XG4gICAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLmxvYWRGaWxlcygnJykuc3Vic2NyaWJlKChmaWxlczogRXh0ZW5kZWRGaWxlTW9kZWxbXSkgPT4gdGhpcy5maWxlcyA9IGZpbGVzIHx8IFtdKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVGaWxlRnJvbUxpc3QoZmlsZTogRmlsZU1vZGVsKSB7XG4gICAgaWYgKHRoaXMuaW5kZXhlZEZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuaW5kZXhlZEZpbGVzLmZvckVhY2goIChmLCBpbmRleCkgPT4ge1xuICAgICAgICBpZihmLmd1aWQgPT09IGZpbGUuZ3VpZCkgdGhpcy5pbmRleGVkRmlsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaCgkZXZlbnQ6IHN0cmluZykge1xuICAgIGlmICgkZXZlbnQgPT09IFwiXCIpIHJldHVybjtcbiAgICBjb25zdCBjcmVkcyA9IFtdO1xuICAgIGNyZWRzLnB1c2godGhpcy5jcmVkZW50aWFscyk7XG4gICAgdGhpcy5fc2VhcmNoU2VydmljZS5zZWFyY2goY3JlZHMsICRldmVudCkuc3Vic2NyaWJlKChyZXN1bHQ6IFNlYXJjaFJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5zZWFyY2hSZXN1bHQgPSByZXN1bHQ7XG4gICAgICB0aGlzLmZpcnN0U2VhcmNoUGVyZm9ybWVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxufVxuIl19