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
                    selector: 'gd-search-app',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2VhcmNoLyIsInNvdXJjZXMiOlsibGliL3NlYXJjaC1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUVMLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsZUFBZSxFQUNFLFlBQVksRUFBRSxrQkFBa0IsRUFDbEQsTUFBTSwrQ0FBK0MsQ0FBQztBQUV2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDNUUsT0FBTyxFQUtMLGtCQUFrQixFQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCO0lBcUJFLDRCQUFvQixjQUE2QixFQUM3QixhQUEyQixFQUNuQyxhQUFrQyxFQUNsQyxrQkFBc0MsRUFDdEMsZUFBZ0MsRUFDeEIsY0FBNkIsRUFDN0IsbUJBQXVDO1FBTjNELGlCQWdEQztRQWhEbUIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFJM0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQXJCM0QsVUFBSyxHQUFHLFFBQVEsQ0FBQztRQUNqQixVQUFLLEdBQXdCLEVBQUUsQ0FBQztRQUNoQyxzQkFBaUIsR0FBNEIsRUFBRSxDQUFDO1FBQ2hELGlCQUFZLEdBQXVCLEVBQUUsQ0FBQztRQUd0QyxxQkFBZ0IsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO1FBTzVDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBVXJCLGFBQWEsQ0FBQyxhQUFh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Qiw4Q0FBNEM7O0lBQzVDLHVDQUFtQjs7SUFDbkIsdUNBQW1COztJQUNuQixtREFBK0I7O0lBQy9CLGtEQUE4Qjs7SUFDOUIsMENBQTJCOztJQUUzQiw0Q0FBdUI7Ozs7O0lBRVgsNENBQXFDOzs7OztJQUNyQywyQ0FBbUM7Ozs7O0lBSW5DLDRDQUFxQzs7Ozs7SUFDckMsaURBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NlYXJjaFNlcnZpY2V9IGZyb20gXCIuL3NlYXJjaC5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuICBGaWxlTW9kZWwsXG4gIE1vZGFsU2VydmljZSxcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICBQYXNzd29yZFNlcnZpY2UsXG4gIEZpbGVDcmVkZW50aWFscywgQ29tbW9uTW9kYWxzLCBMb2FkaW5nTWFza1NlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtTZWFyY2hDb25maWd9IGZyb20gXCIuL3NlYXJjaC1jb25maWdcIjtcbmltcG9ydCB7U2VhcmNoQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vc2VhcmNoLWNvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQge1dpbmRvd1NlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7XG4gIEluZGV4ZWRGaWxlTW9kZWwsXG4gIFNlYXJjaFJlc3VsdCxcbiAgU2VhcmNoUmVzdWx0SXRlbU1vZGVsLFxuICBFeHRlbmRlZEZpbGVNb2RlbCxcbiAgRmlsZUluZGV4aW5nU3RhdHVzXG59IGZyb20gXCIuL3NlYXJjaC1tb2RlbHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2Qtc2VhcmNoLWFwcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLWFwcC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHRpdGxlID0gJ3NlYXJjaCc7XG4gIGZpbGVzOiBFeHRlbmRlZEZpbGVNb2RlbFtdID0gW107XG4gIHNlYXJjaFJlc3VsdEl0ZW1zOiBTZWFyY2hSZXN1bHRJdGVtTW9kZWxbXSA9IFtdO1xuICBpbmRleGVkRmlsZXM6IEluZGV4ZWRGaWxlTW9kZWxbXSA9IFtdO1xuICBzZWFyY2hDb25maWc6IFNlYXJjaENvbmZpZztcbiAgY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscztcbiAgYnJvd3NlRmlsZXNNb2RhbCA9IENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcztcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIHNraXBQYXNzd29yZFByb3RlY3RlZDogYm9vbGVhbjtcbiAgZmlyc3RTZWFyY2hQZXJmb3JtZWQ6IGJvb2xlYW47XG4gIHNlYXJjaFJlc3VsdDogU2VhcmNoUmVzdWx0O1xuXG4gIGZpbGVXYXNEcm9wcGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VhcmNoU2VydmljZTogU2VhcmNoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICAgIGNvbmZpZ1NlcnZpY2U6IFNlYXJjaENvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHVwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbG9hZGluZ01hc2tTZXJ2aWNlOiBMb2FkaW5nTWFza1NlcnZpY2UpIHtcblxuICAgIGNvbmZpZ1NlcnZpY2UudXBkYXRlZENvbmZpZy5zdWJzY3JpYmUoKHNlYXJjaENvbmZpZykgPT4ge1xuICAgICAgdGhpcy5zZWFyY2hDb25maWcgPSBzZWFyY2hDb25maWc7XG4gICAgfSk7XG5cbiAgICB1cGxvYWRGaWxlc1NlcnZpY2UudXBsb2Fkc0NoYW5nZS5zdWJzY3JpYmUoKHVwbG9hZHMpID0+IHtcbiAgICAgIGlmICh1cGxvYWRzKSB7XG4gICAgICAgIGxldCBpOiBudW1iZXI7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB1cGxvYWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5fc2VhcmNoU2VydmljZS51cGxvYWQodXBsb2Fkcy5pdGVtKGkpLCAnJywgdGhpcy5zZWFyY2hDb25maWcucmV3cml0ZSkuc3Vic2NyaWJlKChvYmo6IEZpbGVDcmVkZW50aWFscykgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZpbGVXYXNEcm9wcGVkKSBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYXNzd29yZFNlcnZpY2UucGFzc0NoYW5nZS5zdWJzY3JpYmUoKHBhc3M6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5jbG9zZU1vZGFsKENvbW1vbk1vZGFscy5QYXNzd29yZFJlcXVpcmVkKTtcblxuICAgICAgY29uc3QgcGFzc3dvcmRSZXF1aXJlZEZpbGUgPSB0aGlzLmluZGV4ZWRGaWxlcy5maWx0ZXIoZiA9PiBmLmRvY3VtZW50U3RhdHVzID09PSBGaWxlSW5kZXhpbmdTdGF0dXMuUGFzc3dvcmRSZXF1aXJlZClbMF07XG4gICAgICBwYXNzd29yZFJlcXVpcmVkRmlsZS5wYXNzd29yZCA9IHBhc3M7XG4gICAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLmFkZEZpbGVzVG9JbmRleChbcGFzc3dvcmRSZXF1aXJlZEZpbGVdKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRJbmRleGVkRmlsZXModHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgX3dpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XG4gICAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIH0pO1xuXG4gICAgX3NlYXJjaFNlcnZpY2UuaXRlbVRvUmVtb3ZlLnN1YnNjcmliZShmaWxlID0+IHtcbiAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgIHRoaXMuX3NlYXJjaFNlcnZpY2UucmVtb3ZlRmlsZShmaWxlKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVtb3ZlRmlsZUZyb21MaXN0KGZpbGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2xvYWRpbmdNYXNrU2VydmljZVxuICAgICAgLm9uTG9hZGluZ0NoYW5nZWRcbiAgICAgIC5zdWJzY3JpYmUoKGxvYWRpbmc6IGJvb2xlYW4pID0+IHRoaXMuaXNMb2FkaW5nID0gbG9hZGluZyk7XG4gIH1cblxuICBnZXQgcmV3cml0ZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hDb25maWcgPyB0aGlzLnNlYXJjaENvbmZpZy5yZXdyaXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB1cGxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoQ29uZmlnID8gdGhpcy5zZWFyY2hDb25maWcudXBsb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBicm93c2VDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoQ29uZmlnID8gdGhpcy5zZWFyY2hDb25maWcuYnJvd3NlIDogdHJ1ZTtcbiAgfVxuXG4gIG9wZW5Nb2RhbChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oaWQpO1xuICB9XG5cbiAgY2xvc2VNb2RhbChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKGlkKTtcbiAgfVxuXG4gIHNlbGVjdERpcigkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX3NlYXJjaFNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRXh0ZW5kZWRGaWxlTW9kZWxbXSkgPT4gdGhpcy5maWxlcyA9IGZpbGVzIHx8IFtdKTtcbiAgfVxuXG4gIGNsZWFyU2VhcmNoUmVzdWx0KCkge1xuICAgIHRoaXMuc2VhcmNoUmVzdWx0ID0gbnVsbDtcblxuICAgIGlmICh0aGlzLmZpcnN0U2VhcmNoUGVyZm9ybWVkICYmIHRoaXMuaW5kZXhlZEZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5sb2FkSW5kZXhlZEZpbGVzKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEFsbEl0ZW1zKGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZpbGVzLmZvckVhY2goIChmKSA9PiB7XG4gICAgICBpZiAoIWYuaXNEaXJlY3RvcnkgJiYgIWYuZGlyZWN0b3J5KSBmLnNlbGVjdGVkID0gY2hlY2tlZDtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRJbmRleGVkRmlsZXMoJGV2ZW50KSB7XG4gICAgaWYgKCEkZXZlbnQpIHJldHVybjtcblxuICAgIHRoaXMuX3NlYXJjaFNlcnZpY2UubG9hZEZpbGVzKHRoaXMuc2VhcmNoQ29uZmlnLmluZGV4ZWRGaWxlc0RpcmVjdG9yeSkuc3Vic2NyaWJlKChpbmRleGluZ0ZpbGVzOiBJbmRleGVkRmlsZU1vZGVsW10pID0+IFxuICAgIHtcbiAgICAgIGlmIChpbmRleGluZ0ZpbGVzICYmIHRoaXMuc2tpcFBhc3N3b3JkUHJvdGVjdGVkICYmIGluZGV4aW5nRmlsZXMuZmlsdGVyKGYgPT4gZi5kb2N1bWVudFN0YXR1cyA9PT0gRmlsZUluZGV4aW5nU3RhdHVzLlBhc3N3b3JkUmVxdWlyZWQpLmxlbmd0aCA+IDApXG4gICAgICB7XG4gICAgICAgIGluZGV4aW5nRmlsZXMuZmlsdGVyKGYgPT4gZi5kb2N1bWVudFN0YXR1cyA9PT0gRmlsZUluZGV4aW5nU3RhdHVzLlBhc3N3b3JkUmVxdWlyZWQpWzBdLmRvY3VtZW50U3RhdHVzID0gRmlsZUluZGV4aW5nU3RhdHVzLlNraXBwZWQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5kZXhlZEZpbGVzID0gaW5kZXhpbmdGaWxlcyB8fCBbXTtcbiAgICAgIGlmICh0aGlzLmluZGV4ZWRGaWxlcy5maWx0ZXIoZiA9PiBmLmRvY3VtZW50U3RhdHVzID09PSBGaWxlSW5kZXhpbmdTdGF0dXMuSW5kZXhpbmcpLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgICAoIXRoaXMuc2tpcFBhc3N3b3JkUHJvdGVjdGVkICYmIHRoaXMuaW5kZXhlZEZpbGVzLmZpbHRlcihmID0+IGYuZG9jdW1lbnRTdGF0dXMgPT09IEZpbGVJbmRleGluZ1N0YXR1cy5QYXNzd29yZFJlcXVpcmVkKS5sZW5ndGggPiAwKSlcbiAgICAgIHtcbiAgICAgICAgY29uc3QgdGltZXJJZCA9IHNldEludGVydmFsKCgpID0+IFxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5fc2VhcmNoU2VydmljZS5nZXREb2N1bWVudFN0YXR1cyh0aGlzLmluZGV4ZWRGaWxlcy5maWx0ZXIoZiA9PiBmLmRvY3VtZW50U3RhdHVzID09PSBGaWxlSW5kZXhpbmdTdGF0dXMuSW5kZXhpbmcgfHxcbiAgICAgICAgICAgICghdGhpcy5za2lwUGFzc3dvcmRQcm90ZWN0ZWQgJiYgZi5kb2N1bWVudFN0YXR1cyA9PT0gRmlsZUluZGV4aW5nU3RhdHVzLlBhc3N3b3JkUmVxdWlyZWQpKSkudG9Qcm9taXNlKCkudGhlbigoc2VhcmNoSW5kZXhGaWxlczogSW5kZXhlZEZpbGVNb2RlbFtdKSA9PiBcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWFyY2hJbmRleEZpbGVzLmZvckVhY2goKHNlYXJjaEZpbGUpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHNlYXJjaEZpbGUuZG9jdW1lbnRTdGF0dXMgIT09IEZpbGVJbmRleGluZ1N0YXR1cy5JbmRleGluZylcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXhlZEZpbGVzLmZpbHRlcihmID0+IGYuZ3VpZCA9PT0gc2VhcmNoRmlsZS5ndWlkKVswXS5kb2N1bWVudFN0YXR1cyA9IHNlYXJjaEZpbGUuZG9jdW1lbnRTdGF0dXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbmRleGVkRmlsZXMuZmlsdGVyKGYgPT4gZi5kb2N1bWVudFN0YXR1cyA9PT0gRmlsZUluZGV4aW5nU3RhdHVzLkluZGV4aW5nKS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcklkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2FuY2VsKCRldmVudCkge1xuICAgIHRoaXMuaW5kZXhlZEZpbGVzLmZpbHRlcihmID0+IGYuZG9jdW1lbnRTdGF0dXMgPT09IEZpbGVJbmRleGluZ1N0YXR1cy5QYXNzd29yZFJlcXVpcmVkKVswXS5kb2N1bWVudFN0YXR1cyA9IEZpbGVJbmRleGluZ1N0YXR1cy5Ta2lwcGVkO1xuICAgIHRoaXMuc2tpcFBhc3N3b3JkUHJvdGVjdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmxvYWRJbmRleGVkRmlsZXModHJ1ZSk7XG4gIH1cblxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLnVwbG9hZChudWxsLCAkZXZlbnQsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbGVEcm9wcGVkKCRldmVudCwgcmVsb2FkRmlsZXMgPSBmYWxzZSkge1xuICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPSAkZXZlbnQ7XG5cbiAgICBpZiAocmVsb2FkRmlsZXMpXG4gICAge1xuICAgICAgdGhpcy5fc2VhcmNoU2VydmljZS5sb2FkRmlsZXMoJycpLnN1YnNjcmliZSgoZmlsZXM6IEV4dGVuZGVkRmlsZU1vZGVsW10pID0+IHRoaXMuZmlsZXMgPSBmaWxlcyB8fCBbXSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRmlsZUZyb21MaXN0KGZpbGU6IEZpbGVNb2RlbCkge1xuICAgIGlmICh0aGlzLmluZGV4ZWRGaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmluZGV4ZWRGaWxlcy5mb3JFYWNoKCAoZiwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYoZi5ndWlkID09PSBmaWxlLmd1aWQpIHRoaXMuaW5kZXhlZEZpbGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZWFyY2goJGV2ZW50OiBzdHJpbmcpIHtcbiAgICBpZiAoJGV2ZW50ID09PSBcIlwiKSByZXR1cm47XG4gICAgY29uc3QgY3JlZHMgPSBbXTtcbiAgICBjcmVkcy5wdXNoKHRoaXMuY3JlZGVudGlhbHMpO1xuICAgIHRoaXMuX3NlYXJjaFNlcnZpY2Uuc2VhcmNoKGNyZWRzLCAkZXZlbnQpLnN1YnNjcmliZSgocmVzdWx0OiBTZWFyY2hSZXN1bHQpID0+IHtcbiAgICAgIHRoaXMuc2VhcmNoUmVzdWx0ID0gcmVzdWx0O1xuICAgICAgdGhpcy5maXJzdFNlYXJjaFBlcmZvcm1lZCA9IHRydWU7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==