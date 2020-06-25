/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MetadataService, MetadataFileDescription } from "./metadata.service";
import { ModalService, ZoomService, UploadFilesService, NavigateService, PagePreloadService, PasswordService, CommonModals, LoadingMaskService } from "@groupdocs.examples.angular/common-components";
import { MetadataConfigService } from "./metadata-config.service";
import { WindowService } from "@groupdocs.examples.angular/common-components";
import { AccordionService } from './accordion.service';
import { FilePropertyCategory } from './metadata-models';
var MetadataAppComponent = /** @class */ (function () {
    function MetadataAppComponent(_metadataService, _modalService, configService, uploadFilesService, _navigateService, _zoomService, pagePreloadService, passwordService, _loadingMaskService, _accrodionService, _windowService) {
        var _this = this;
        this._metadataService = _metadataService;
        this._modalService = _modalService;
        this._navigateService = _navigateService;
        this._zoomService = _zoomService;
        this._loadingMaskService = _loadingMaskService;
        this._accrodionService = _accrodionService;
        this._windowService = _windowService;
        this.title = 'metadata';
        this.files = [];
        this.countPages = 0;
        this.formatDisabled = !this.file;
        this.browseFilesModal = CommonModals.BrowseFiles;
        this._zoom = 100;
        this.fileWasDropped = false;
        this.disabled = false;
        this.showSidePanel = true;
        this.disabledProperties = ["generator", "producer", "creator"];
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            _this.isDesktop = _windowService.isDesktop();
            _this.refreshZoom();
        }));
        configService.updatedConfig.subscribe((/**
         * @param {?} metadataConfig
         * @return {?}
         */
        function (metadataConfig) {
            _this.metadataConfig = metadataConfig;
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
                    _this._metadataService.upload(uploads.item(i), '', _this.metadataConfig.rewrite).subscribe((/**
                     * @param {?} obj
                     * @return {?}
                     */
                    function (obj) {
                        _this.fileWasDropped ? _this.selectFile(obj.guid, '', '') : _this.selectDir('');
                    }));
                }
            }
        }));
        pagePreloadService.checkPreload.subscribe((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            if (_this.metadataConfig.preloadPageCount !== 0) {
                for (var i = page; i < page + 2; i++) {
                    if (i > 0 && i <= _this.countPages && !_this.file.pages[i - 1].data) {
                        _this.preloadPages(i, i);
                    }
                }
            }
        }));
        passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        function (pass) {
            _this.selectFile(_this.credentials.guid, pass, CommonModals.PasswordRequired);
        }));
        _accrodionService.addedProperty.subscribe((/**
         * @param {?} addedProperty
         * @return {?}
         */
        function (addedProperty) {
            if (addedProperty) {
                _this.addedProperty = addedProperty;
                /** @type {?} */
                var propObject = {
                    original: addedProperty.original,
                    name: "Select property",
                    value: "",
                    category: 0,
                    type: 1,
                    selected: false,
                    editing: false,
                    edited: false,
                    disabled: false
                };
                if (_this.buildInProperties) {
                    _this.buildInProperties.push(propObject);
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    MetadataAppComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.metadataConfig.defaultDocument !== "") {
            this.isLoading = true;
            this.selectFile(this.metadataConfig.defaultDocument, "", "");
        }
    };
    /**
     * @return {?}
     */
    MetadataAppComponent.prototype.ngAfterViewInit = /**
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
        this.refreshZoom();
    };
    Object.defineProperty(MetadataAppComponent.prototype, "rewriteConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.metadataConfig ? this.metadataConfig.rewrite : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MetadataAppComponent.prototype, "downloadConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.metadataConfig ? this.metadataConfig.download : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MetadataAppComponent.prototype, "uploadConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.metadataConfig ? this.metadataConfig.upload : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MetadataAppComponent.prototype, "browseConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.metadataConfig ? this.metadataConfig.browse : true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} id
     * @return {?}
     */
    MetadataAppComponent.prototype.openModal = /**
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
    MetadataAppComponent.prototype.closeModal = /**
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
    MetadataAppComponent.prototype.selectDir = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        this._metadataService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        function (files) { return _this.files = files || []; }));
    };
    /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @return {?}
     */
    MetadataAppComponent.prototype.selectFile = /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @return {?}
     */
    function ($event, password, modalId) {
        var _this = this;
        this.credentials = { guid: $event, password: password };
        this.file = null;
        this._metadataService.loadFile(this.credentials).subscribe((/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            _this.file = file;
            _this.formatDisabled = !_this.file;
            if (file) {
                if (file.pages && file.pages[0]) {
                    _this._pageHeight = file.pages[0].height;
                    _this._pageWidth = file.pages[0].width;
                    _this.options = _this.zoomOptions();
                    _this.refreshZoom();
                }
                /** @type {?} */
                var preloadPageCount = _this.metadataConfig.preloadPageCount;
                /** @type {?} */
                var countPages = file.pages ? file.pages.length : 0;
                if (preloadPageCount > 0) {
                    _this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                }
                _this._navigateService.countPages = countPages;
                _this._navigateService.currentPage = 1;
                _this.countPages = countPages;
                _this.loadProperties();
            }
        }));
        if (modalId) {
            this._modalService.close(modalId);
        }
        this.clearData();
    };
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    MetadataAppComponent.prototype.preloadPages = /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (start, end) {
        var _this = this;
        var _loop_1 = function (i) {
            this_1._metadataService.loadPage(this_1.credentials, i).subscribe((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                _this.file.pages[i - 1] = page;
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
    MetadataAppComponent.prototype.upload = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        this._metadataService.upload(null, $event, this.rewriteConfig).subscribe((/**
         * @return {?}
         */
        function () {
            _this.selectDir('');
        }));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    MetadataAppComponent.prototype.fileDropped = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.fileWasDropped = $event;
    };
    /**
     * @private
     * @param {?} pt
     * @return {?}
     */
    MetadataAppComponent.prototype.ptToPx = /**
     * @private
     * @param {?} pt
     * @return {?}
     */
    function (pt) {
        //pt * 96 / 72 = px.
        return pt * 96 / 72;
    };
    /**
     * @private
     * @return {?}
     */
    MetadataAppComponent.prototype.getFitToWidth = /**
     * @private
     * @return {?}
     */
    function () {
        // Images and Excel-related files receiving dimensions in px from server
        /** @type {?} */
        var pageWidth = this.ptToPx(this._pageWidth);
        /** @type {?} */
        var pageHeight = this.ptToPx(this._pageHeight);
        /** @type {?} */
        var offsetWidth = pageWidth ? pageWidth : window.innerWidth;
        return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / window.innerWidth) : Math.round(window.innerWidth * 100 / offsetWidth);
    };
    /**
     * @private
     * @return {?}
     */
    MetadataAppComponent.prototype.getFitToHeight = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pageWidth = this.ptToPx(this._pageWidth);
        /** @type {?} */
        var pageHeight = this.ptToPx(this._pageHeight);
        /** @type {?} */
        var windowHeight = (pageHeight > pageWidth) ? window.innerHeight - 100 : window.innerHeight + 100;
        /** @type {?} */
        var offsetHeight = pageHeight ? pageHeight : windowHeight;
        return (pageHeight > pageWidth) ? Math.round(windowHeight * 100 / offsetHeight) : Math.round(offsetHeight * 100 / windowHeight);
    };
    /**
     * @return {?}
     */
    MetadataAppComponent.prototype.zoomOptions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var width = this.getFitToWidth();
        /** @type {?} */
        var height = this.getFitToHeight();
        return this._zoomService.zoomOptions(width, height);
    };
    Object.defineProperty(MetadataAppComponent.prototype, "zoom", {
        get: /**
         * @return {?}
         */
        function () {
            return this._zoom;
        },
        set: /**
         * @param {?} zoom
         * @return {?}
         */
        function (zoom) {
            this._zoom = zoom;
            this._zoomService.changeZoom(this._zoom);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    MetadataAppComponent.prototype.refreshZoom = /**
     * @private
     * @return {?}
     */
    function () {
        this.zoom = this._windowService.isDesktop() ? 100 : this.getFitToWidth();
    };
    /**
     * @return {?}
     */
    MetadataAppComponent.prototype.downloadFile = /**
     * @return {?}
     */
    function () {
        if (this.formatDisabled)
            return;
        window.location.assign(this._metadataService.getDownloadUrl(this.credentials));
    };
    /**
     * @private
     * @return {?}
     */
    MetadataAppComponent.prototype.clearData = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        if (!this.file || !this.file.pages) {
            return;
        }
        try {
            for (var _b = tslib_1.__values(this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                var page = _c.value;
                page.data = null;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @return {?}
     */
    MetadataAppComponent.prototype.isDisabled = /**
     * @return {?}
     */
    function () {
        return !this.file || this.disabled;
    };
    /**
     * @return {?}
     */
    MetadataAppComponent.prototype.save = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.file || !this.file.pages)
            return;
        /** @type {?} */
        var savingProperty = this.buildInProperties.filter((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return !p.original || p.edited; }));
        /** @type {?} */
        var savingFile = new MetadataFileDescription();
        savingFile.guid = this.file.guid;
        savingFile.properties = savingProperty;
        this._metadataService.saveProperty(savingFile).subscribe((/**
         * @param {?} loadFile
         * @return {?}
         */
        function (loadFile) {
            _this.loadProperties();
            _this.disabled = false;
            _this._modalService.open(CommonModals.OperationSuccess);
        }));
    };
    /**
     * @return {?}
     */
    MetadataAppComponent.prototype.loadProperties = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._metadataService.loadProperties(this.credentials).subscribe((/**
         * @param {?} fileProperties
         * @return {?}
         */
        function (fileProperties) {
            _this.buildInProperties = fileProperties.filter((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return p.category === FilePropertyCategory.BuildIn; }));
            _this.buildInProperties.forEach((/**
             * @param {?} p
             * @return {?}
             */
            function (p) {
                if (_this.disabledProperties.some((/**
                 * @param {?} dp
                 * @return {?}
                 */
                function (dp) { return dp === p.name.toLowerCase(); }))) {
                    p.disabled = true;
                }
            }));
            _this.defaultProperties = fileProperties.filter((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return p.category === FilePropertyCategory.Default; }));
            _this._metadataService.loadPropertiesNames(_this.credentials).subscribe((/**
             * @param {?} filePropertiesNames
             * @return {?}
             */
            function (filePropertiesNames) {
                _this.filePropertiesNames = filePropertiesNames;
            }));
        }));
        if (!this.showSidePanel) {
            this.showSidePanel = true;
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    MetadataAppComponent.prototype.hideSidePanel = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.showSidePanel = !this.showSidePanel;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    MetadataAppComponent.prototype.removeProperty = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        /** @type {?} */
        var removedProperty = $event;
        if (this.file) {
            /** @type {?} */
            var metadataFile = new MetadataFileDescription();
            metadataFile.guid = this.file.guid;
            metadataFile.properties = [removedProperty];
            this._metadataService.removeProperty(metadataFile).subscribe((/**
             * @return {?}
             */
            function () {
                _this.loadProperties();
                _this._modalService.open(CommonModals.OperationSuccess);
            }));
        }
    };
    MetadataAppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-metadata',
                    template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"column\">\n      <div class=\"top-panel\">\n        <gd-logo [logo]=\"'metadata'\" icon=\"clipboard-list\"></gd-logo>\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                    *ngIf=\"browseConfig\" ></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"save()\">\n                    </gd-button>\n          <gd-button [hidden] =\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'file-export'\" [tooltip]=\"'Attributes'\" (click)=\"loadProperties()\">\n                    </gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                    (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n        </gd-top-toolbar>\n      </div>\n      <div class=\"doc-panel\" *ngIf=\"file\" #docPanel>\n        <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"false\" gdScrollable\n                    [preloadPageCount]=\"metadataConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"false\"></gd-document>\n      </div>\n    </div>\n    <gd-side-panel *ngIf=\"file && showSidePanel\"\n      (hideSidePanel)=\"hideSidePanel($event)\"\n      (saveInSidePanel)=\"save()\"\n      [closable]=\"isDesktop ? false : true\"\n      [saveable]=\"isDesktop ? false : true\"\n      [title]=\"'Metadata'\"\n      [icon]=\"'clipboard-list'\">\n      <gd-accordion>\n        <gd-accordion-group title=\"Build-in properties\" [addDisabled]=\"isDisabled()\" [addHidden]=\"false\" [properties]=\"buildInProperties\" [propertiesNames]=\"filePropertiesNames\" (removeProperty)=\"removeProperty($event)\"></gd-accordion-group>\n        <gd-accordion-group class=\"default\" title=\"Default properties\" [addDisabled]=\"true\" [addHidden]=\"true\" [properties]=\"defaultProperties\"></gd-accordion-group>\n      </gd-accordion>\n    </gd-side-panel>\n  </div>\n  <gd-init-state [icon]=\"'clipboard-list'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n    Or drop file here\n  </gd-init-state>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n</div>\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}::ng-deep .tools .button{color:#fff!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .button.inactive{color:#959da5!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}.row{display:-webkit-box;display:flex}.column{width:100%}::ng-deep .gd-side-panel-body{background-color:#f4f4f4}::ng-deep .gd-side-panel-wrapper{width:464px!important}::ng-deep .page.excel{overflow:unset!important}@media (max-width:1037px){::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .gd-side-panel-wrapper{width:375px!important}}"]
                }] }
    ];
    /** @nocollapse */
    MetadataAppComponent.ctorParameters = function () { return [
        { type: MetadataService },
        { type: ModalService },
        { type: MetadataConfigService },
        { type: UploadFilesService },
        { type: NavigateService },
        { type: ZoomService },
        { type: PagePreloadService },
        { type: PasswordService },
        { type: LoadingMaskService },
        { type: AccordionService },
        { type: WindowService }
    ]; };
    return MetadataAppComponent;
}());
export { MetadataAppComponent };
if (false) {
    /** @type {?} */
    MetadataAppComponent.prototype.title;
    /** @type {?} */
    MetadataAppComponent.prototype.files;
    /** @type {?} */
    MetadataAppComponent.prototype.file;
    /** @type {?} */
    MetadataAppComponent.prototype.metadataConfig;
    /** @type {?} */
    MetadataAppComponent.prototype.countPages;
    /** @type {?} */
    MetadataAppComponent.prototype.formatDisabled;
    /** @type {?} */
    MetadataAppComponent.prototype.credentials;
    /** @type {?} */
    MetadataAppComponent.prototype.browseFilesModal;
    /** @type {?} */
    MetadataAppComponent.prototype.isLoading;
    /** @type {?} */
    MetadataAppComponent.prototype._zoom;
    /** @type {?} */
    MetadataAppComponent.prototype._pageWidth;
    /** @type {?} */
    MetadataAppComponent.prototype._pageHeight;
    /** @type {?} */
    MetadataAppComponent.prototype.options;
    /** @type {?} */
    MetadataAppComponent.prototype.fileWasDropped;
    /** @type {?} */
    MetadataAppComponent.prototype.buildInProperties;
    /** @type {?} */
    MetadataAppComponent.prototype.defaultProperties;
    /** @type {?} */
    MetadataAppComponent.prototype.addedProperty;
    /** @type {?} */
    MetadataAppComponent.prototype.removedProperty;
    /** @type {?} */
    MetadataAppComponent.prototype.filePropertiesNames;
    /** @type {?} */
    MetadataAppComponent.prototype.disabled;
    /** @type {?} */
    MetadataAppComponent.prototype.isDesktop;
    /** @type {?} */
    MetadataAppComponent.prototype.showSidePanel;
    /** @type {?} */
    MetadataAppComponent.prototype.disabledProperties;
    /**
     * @type {?}
     * @private
     */
    MetadataAppComponent.prototype._metadataService;
    /**
     * @type {?}
     * @private
     */
    MetadataAppComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    MetadataAppComponent.prototype._navigateService;
    /**
     * @type {?}
     * @private
     */
    MetadataAppComponent.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    MetadataAppComponent.prototype._loadingMaskService;
    /**
     * @type {?}
     * @private
     */
    MetadataAppComponent.prototype._accrodionService;
    /**
     * @type {?}
     * @private
     */
    MetadataAppComponent.prototype._windowService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZXRhZGF0YS1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFDLGVBQWUsRUFBRSx1QkFBdUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzVFLE9BQU8sRUFHTCxZQUFZLEVBQ1osV0FBVyxFQUNYLGtCQUFrQixFQUNsQixlQUFlLEVBQ2Ysa0JBQWtCLEVBRWxCLGVBQWUsRUFDRSxZQUFZLEVBQUUsa0JBQWtCLEVBQ2xELE1BQU0sK0NBQStDLENBQUM7QUFFdkQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBcUIsb0JBQW9CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU1RTtJQWdDRSw4QkFBb0IsZ0JBQWlDLEVBQ2pDLGFBQTJCLEVBQ25DLGFBQW9DLEVBQ3BDLGtCQUFzQyxFQUM5QixnQkFBaUMsRUFDakMsWUFBeUIsRUFDakMsa0JBQXNDLEVBQ3RDLGVBQWdDLEVBQ3hCLG1CQUF1QyxFQUN2QyxpQkFBbUMsRUFDbkMsY0FBNkI7UUFWakQsaUJBa0VDO1FBbEVtQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBRzNCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFHekIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUN2QyxzQkFB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QUFlOztJQUNmLDhDQUE0Qjs7SUFDNUIsMkNBQTZCOztJQUM3QixnREFBNEM7O0lBQzVDLHlDQUFtQjs7SUFFbkIscUNBQVk7O0lBQ1osMENBQW1COztJQUNuQiwyQ0FBb0I7O0lBQ3BCLHVDQUFROztJQUNSLDhDQUF1Qjs7SUFDdkIsaURBQThDOztJQUM5QyxpREFBOEM7O0lBQzlDLDZDQUF3Qzs7SUFDeEMsK0NBQTBDOztJQUMxQyxtREFBcUM7O0lBQ3JDLHdDQUFpQjs7SUFDakIseUNBQW1COztJQUNuQiw2Q0FBcUI7O0lBQ3JCLGtEQUFvRTs7Ozs7SUFFeEQsZ0RBQXlDOzs7OztJQUN6Qyw2Q0FBbUM7Ozs7O0lBR25DLGdEQUF5Qzs7Ozs7SUFDekMsNENBQWlDOzs7OztJQUdqQyxtREFBK0M7Ozs7O0lBQy9DLGlEQUEyQzs7Ozs7SUFDM0MsOENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01ldGFkYXRhU2VydmljZSwgTWV0YWRhdGFGaWxlRGVzY3JpcHRpb259IGZyb20gXCIuL21ldGFkYXRhLnNlcnZpY2VcIjtcbmltcG9ydCB7XG4gIEZpbGVEZXNjcmlwdGlvbixcbiAgRmlsZU1vZGVsLFxuICBNb2RhbFNlcnZpY2UsXG4gIFpvb21TZXJ2aWNlLFxuICBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gIE5hdmlnYXRlU2VydmljZSxcbiAgUGFnZVByZWxvYWRTZXJ2aWNlLFxuICBQYWdlTW9kZWwsXG4gIFBhc3N3b3JkU2VydmljZSxcbiAgRmlsZUNyZWRlbnRpYWxzLCBDb21tb25Nb2RhbHMsIExvYWRpbmdNYXNrU2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge01ldGFkYXRhQ29uZmlnfSBmcm9tIFwiLi9tZXRhZGF0YS1jb25maWdcIjtcbmltcG9ydCB7TWV0YWRhdGFDb25maWdTZXJ2aWNlfSBmcm9tIFwiLi9tZXRhZGF0YS1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBBY2NvcmRpb25TZXJ2aWNlIH0gZnJvbSAnLi9hY2NvcmRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBGaWxlUHJvcGVydHlNb2RlbCwgRmlsZVByb3BlcnR5Q2F0ZWdvcnkgfSBmcm9tICcuL21ldGFkYXRhLW1vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLW1ldGFkYXRhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21ldGFkYXRhLWFwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21ldGFkYXRhLWFwcC5jb21wb25lbnQubGVzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTWV0YWRhdGFBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICB0aXRsZSA9ICdtZXRhZGF0YSc7XG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xuICBmaWxlOiBGaWxlRGVzY3JpcHRpb247XG4gIG1ldGFkYXRhQ29uZmlnOiBNZXRhZGF0YUNvbmZpZztcbiAgY291bnRQYWdlcyA9IDA7XG4gIGZvcm1hdERpc2FibGVkID0gIXRoaXMuZmlsZTtcbiAgY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscztcbiAgYnJvd3NlRmlsZXNNb2RhbCA9IENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcztcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuXG4gIF96b29tID0gMTAwO1xuICBfcGFnZVdpZHRoOiBudW1iZXI7XG4gIF9wYWdlSGVpZ2h0OiBudW1iZXI7XG4gIG9wdGlvbnM7XG4gIGZpbGVXYXNEcm9wcGVkID0gZmFsc2U7XG4gIHB1YmxpYyBidWlsZEluUHJvcGVydGllczogRmlsZVByb3BlcnR5TW9kZWxbXTtcbiAgcHVibGljIGRlZmF1bHRQcm9wZXJ0aWVzOiBGaWxlUHJvcGVydHlNb2RlbFtdO1xuICBwdWJsaWMgYWRkZWRQcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWw7XG4gIHB1YmxpYyByZW1vdmVkUHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsO1xuICBwdWJsaWMgZmlsZVByb3BlcnRpZXNOYW1lczogc3RyaW5nW107XG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIGlzRGVza3RvcDogYm9vbGVhbjtcbiAgc2hvd1NpZGVQYW5lbCA9IHRydWU7XG4gIGRpc2FibGVkUHJvcGVydGllczogc3RyaW5nW10gPSBbXCJnZW5lcmF0b3JcIiwgXCJwcm9kdWNlclwiLCBcImNyZWF0b3JcIl07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWV0YWRhdGFTZXJ2aWNlOiBNZXRhZGF0YVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgICBjb25maWdTZXJ2aWNlOiBNZXRhZGF0YUNvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHVwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxuICAgICAgICAgICAgICBwYWdlUHJlbG9hZFNlcnZpY2U6IFBhZ2VQcmVsb2FkU2VydmljZSxcbiAgICAgICAgICAgICAgcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2xvYWRpbmdNYXNrU2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hY2Nyb2Rpb25TZXJ2aWNlOiBBY2NvcmRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xuICAgICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICAgIHRoaXMucmVmcmVzaFpvb20oKTtcbiAgICB9KTtcblxuICAgIGNvbmZpZ1NlcnZpY2UudXBkYXRlZENvbmZpZy5zdWJzY3JpYmUoKG1ldGFkYXRhQ29uZmlnKSA9PiB7XG4gICAgICB0aGlzLm1ldGFkYXRhQ29uZmlnID0gbWV0YWRhdGFDb25maWc7XG4gICAgfSk7XG5cbiAgICB1cGxvYWRGaWxlc1NlcnZpY2UudXBsb2Fkc0NoYW5nZS5zdWJzY3JpYmUoKHVwbG9hZHMpID0+IHtcbiAgICAgIGlmICh1cGxvYWRzKSB7XG4gICAgICAgIGxldCBpOiBudW1iZXI7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB1cGxvYWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oaSksICcnLCB0aGlzLm1ldGFkYXRhQ29uZmlnLnJld3JpdGUpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPyB0aGlzLnNlbGVjdEZpbGUob2JqLmd1aWQsICcnLCAnJykgOiB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhZ2VQcmVsb2FkU2VydmljZS5jaGVja1ByZWxvYWQuc3Vic2NyaWJlKChwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLm1ldGFkYXRhQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgIT09IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHBhZ2U7IGkgPCBwYWdlICsgMjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGkgPiAwICYmIGkgPD0gdGhpcy5jb3VudFBhZ2VzICYmICF0aGlzLmZpbGUucGFnZXNbaSAtIDFdLmRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKGksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGFzc3dvcmRTZXJ2aWNlLnBhc3NDaGFuZ2Uuc3Vic2NyaWJlKChwYXNzOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLmNyZWRlbnRpYWxzLmd1aWQsIHBhc3MsIENvbW1vbk1vZGFscy5QYXNzd29yZFJlcXVpcmVkKTtcbiAgICB9KTtcblxuICAgIF9hY2Nyb2Rpb25TZXJ2aWNlLmFkZGVkUHJvcGVydHkuc3Vic2NyaWJlKGFkZGVkUHJvcGVydHkgPT4ge1xuICAgICAgaWYgKGFkZGVkUHJvcGVydHkpIHtcbiAgICAgICAgdGhpcy5hZGRlZFByb3BlcnR5ID0gYWRkZWRQcm9wZXJ0eTtcbiAgICAgICAgY29uc3QgcHJvcE9iamVjdCA9IHtcbiAgICAgICAgICBvcmlnaW5hbDogYWRkZWRQcm9wZXJ0eS5vcmlnaW5hbCxcbiAgICAgICAgICBuYW1lOiBcIlNlbGVjdCBwcm9wZXJ0eVwiLFxuICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgIGNhdGVnb3J5OiAwLFxuICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGVkaXRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVkaXRlZDogZmFsc2UsXG4gICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLmJ1aWxkSW5Qcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgdGhpcy5idWlsZEluUHJvcGVydGllcy5wdXNoKHByb3BPYmplY3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5tZXRhZGF0YUNvbmZpZy5kZWZhdWx0RG9jdW1lbnQgIT09IFwiXCIpe1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMubWV0YWRhdGFDb25maWcuZGVmYXVsdERvY3VtZW50LCBcIlwiLCBcIlwiKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fbG9hZGluZ01hc2tTZXJ2aWNlXG4gICAgLm9uTG9hZGluZ0NoYW5nZWRcbiAgICAuc3Vic2NyaWJlKChsb2FkaW5nOiBib29sZWFuKSA9PiB0aGlzLmlzTG9hZGluZyA9IGxvYWRpbmcpO1xuXG4gICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xuICB9XG5cbiAgZ2V0IHJld3JpdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWV0YWRhdGFDb25maWcgPyB0aGlzLm1ldGFkYXRhQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGRvd25sb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1ldGFkYXRhQ29uZmlnID8gdGhpcy5tZXRhZGF0YUNvbmZpZy5kb3dubG9hZCA6IHRydWU7XG4gIH1cblxuICBnZXQgdXBsb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1ldGFkYXRhQ29uZmlnID8gdGhpcy5tZXRhZGF0YUNvbmZpZy51cGxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhZGF0YUNvbmZpZyA/IHRoaXMubWV0YWRhdGFDb25maWcuYnJvd3NlIDogdHJ1ZTtcbiAgfVxuXG4gIG9wZW5Nb2RhbChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oaWQpO1xuICB9XG5cbiAgY2xvc2VNb2RhbChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKGlkKTtcbiAgfVxuXG4gIHNlbGVjdERpcigkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX21ldGFkYXRhU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBGaWxlTW9kZWxbXSkgPT4gdGhpcy5maWxlcyA9IGZpbGVzIHx8IFtdKTtcbiAgfVxuXG4gIHNlbGVjdEZpbGUoJGV2ZW50OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG1vZGFsSWQ6IHN0cmluZykge1xuICAgIHRoaXMuY3JlZGVudGlhbHMgPSB7Z3VpZDogJGV2ZW50LCBwYXNzd29yZDogcGFzc3dvcmR9O1xuICAgIHRoaXMuZmlsZSA9IG51bGw7XG4gICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmxvYWRGaWxlKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZmlsZTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgICAgIHRoaXMuZm9ybWF0RGlzYWJsZWQgPSAhdGhpcy5maWxlO1xuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgIGlmIChmaWxlLnBhZ2VzICYmIGZpbGUucGFnZXNbMF0pIHtcbiAgICAgICAgICAgIHRoaXMuX3BhZ2VIZWlnaHQgPSBmaWxlLnBhZ2VzWzBdLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuX3BhZ2VXaWR0aCA9IGZpbGUucGFnZXNbMF0ud2lkdGg7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnpvb21PcHRpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hab29tKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHByZWxvYWRQYWdlQ291bnQgPSB0aGlzLm1ldGFkYXRhQ29uZmlnLnByZWxvYWRQYWdlQ291bnQ7XG4gICAgICAgICAgY29uc3QgY291bnRQYWdlcyA9IGZpbGUucGFnZXMgPyBmaWxlLnBhZ2VzLmxlbmd0aCA6IDA7XG4gICAgICAgICAgaWYgKHByZWxvYWRQYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnByZWxvYWRQYWdlcygxLCBwcmVsb2FkUGFnZUNvdW50ID4gY291bnRQYWdlcyA/IGNvdW50UGFnZXMgOiBwcmVsb2FkUGFnZUNvdW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xuICAgICAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9IDE7XG4gICAgICAgICAgdGhpcy5jb3VudFBhZ2VzID0gY291bnRQYWdlcztcblxuICAgICAgICAgIHRoaXMubG9hZFByb3BlcnRpZXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gICAgaWYgKG1vZGFsSWQpIHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShtb2RhbElkKTtcbiAgICB9XG4gICAgdGhpcy5jbGVhckRhdGEoKTtcbiAgfVxuXG4gIHByZWxvYWRQYWdlcyhzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmxvYWRQYWdlKHRoaXMuY3JlZGVudGlhbHMsIGkpLnN1YnNjcmliZSgocGFnZTogUGFnZU1vZGVsKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZS5wYWdlc1tpIC0gMV0gPSBwYWdlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLnVwbG9hZChudWxsLCAkZXZlbnQsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbGVEcm9wcGVkKCRldmVudCl7XG4gICAgdGhpcy5maWxlV2FzRHJvcHBlZCA9ICRldmVudDtcbiAgfVxuXG4gIHByaXZhdGUgcHRUb1B4KHB0OiBudW1iZXIpIHtcbiAgICAvL3B0ICogOTYgLyA3MiA9IHB4LlxuICAgIHJldHVybiBwdCAqIDk2IC8gNzI7XG4gIH1cblxuICBwcml2YXRlIGdldEZpdFRvV2lkdGgoKSB7XG4gICAgLy8gSW1hZ2VzIGFuZCBFeGNlbC1yZWxhdGVkIGZpbGVzIHJlY2VpdmluZyBkaW1lbnNpb25zIGluIHB4IGZyb20gc2VydmVyXG4gICAgY29uc3QgcGFnZVdpZHRoID0gdGhpcy5wdFRvUHgodGhpcy5fcGFnZVdpZHRoKTtcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5wdFRvUHgodGhpcy5fcGFnZUhlaWdodCk7XG4gICAgY29uc3Qgb2Zmc2V0V2lkdGggPSBwYWdlV2lkdGggPyBwYWdlV2lkdGggOiB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIHJldHVybiAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCAmJiBNYXRoLnJvdW5kKG9mZnNldFdpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpIDwgMikgPyAyMDAgLSBNYXRoLnJvdW5kKG9mZnNldFdpZHRoICogMTAwIC8gd2luZG93LmlubmVyV2lkdGgpIDogTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAqIDEwMCAvIG9mZnNldFdpZHRoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rml0VG9IZWlnaHQoKSB7XG4gICAgY29uc3QgcGFnZVdpZHRoID0gdGhpcy5wdFRvUHgodGhpcy5fcGFnZVdpZHRoKTtcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5wdFRvUHgodGhpcy5fcGFnZUhlaWdodCk7XG4gICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gKHBhZ2VIZWlnaHQgPiBwYWdlV2lkdGgpID8gd2luZG93LmlubmVySGVpZ2h0IC0gMTAwIDogd2luZG93LmlubmVySGVpZ2h0ICsgMTAwO1xuICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IHBhZ2VIZWlnaHQgPyBwYWdlSGVpZ2h0IDogd2luZG93SGVpZ2h0O1xuXG4gICAgcmV0dXJuIChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoKSA/IE1hdGgucm91bmQod2luZG93SGVpZ2h0ICogMTAwIC8gb2Zmc2V0SGVpZ2h0KSA6IE1hdGgucm91bmQob2Zmc2V0SGVpZ2h0ICogMTAwIC8gd2luZG93SGVpZ2h0KTtcbiAgfVxuXG4gIHpvb21PcHRpb25zKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRGaXRUb1dpZHRoKCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRGaXRUb0hlaWdodCgpO1xuICAgIHJldHVybiB0aGlzLl96b29tU2VydmljZS56b29tT3B0aW9ucyh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHNldCB6b29tKHpvb20pIHtcbiAgICB0aGlzLl96b29tID0gem9vbTtcbiAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHRoaXMuX3pvb20pO1xuICB9XG5cbiAgZ2V0IHpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3pvb207XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hab29tKCkge1xuICAgIHRoaXMuem9vbSA9IHRoaXMuX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCkgPyAxMDAgOiB0aGlzLmdldEZpdFRvV2lkdGgoKTtcbiAgfVxuXG4gIGRvd25sb2FkRmlsZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXREb3dubG9hZFVybCh0aGlzLmNyZWRlbnRpYWxzKSk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRGF0YSgpIHtcbiAgICBpZiAoIXRoaXMuZmlsZSB8fCAhdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGFnZSBvZiB0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgIHBhZ2UuZGF0YSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gIXRoaXMuZmlsZSB8fCB0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBpZiAoIXRoaXMuZmlsZSB8fCAhdGhpcy5maWxlLnBhZ2VzKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHNhdmluZ1Byb3BlcnR5ID0gdGhpcy5idWlsZEluUHJvcGVydGllcy5maWx0ZXIocCA9PiAhcC5vcmlnaW5hbCB8fCBwLmVkaXRlZCk7XG4gICAgY29uc3Qgc2F2aW5nRmlsZSA9IG5ldyBNZXRhZGF0YUZpbGVEZXNjcmlwdGlvbigpO1xuICAgIHNhdmluZ0ZpbGUuZ3VpZCA9IHRoaXMuZmlsZS5ndWlkO1xuICAgIHNhdmluZ0ZpbGUucHJvcGVydGllcyA9IHNhdmluZ1Byb3BlcnR5O1xuICAgIHRoaXMuX21ldGFkYXRhU2VydmljZS5zYXZlUHJvcGVydHkoc2F2aW5nRmlsZSkuc3Vic2NyaWJlKChsb2FkRmlsZTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICB0aGlzLmxvYWRQcm9wZXJ0aWVzKCk7XG4gICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuT3BlcmF0aW9uU3VjY2Vzcyk7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkUHJvcGVydGllcygpIHtcbiAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UubG9hZFByb3BlcnRpZXModGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKChmaWxlUHJvcGVydGllczogRmlsZVByb3BlcnR5TW9kZWxbXSkgPT4ge1xuICAgICAgdGhpcy5idWlsZEluUHJvcGVydGllcyA9IGZpbGVQcm9wZXJ0aWVzLmZpbHRlcihwID0+IHAuY2F0ZWdvcnkgPT09IEZpbGVQcm9wZXJ0eUNhdGVnb3J5LkJ1aWxkSW4pO1xuICAgICAgdGhpcy5idWlsZEluUHJvcGVydGllcy5mb3JFYWNoKHAgPT4gXG4gICAgICAgIHtcbiAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZFByb3BlcnRpZXMuc29tZShkcCA9PiBkcCA9PT0gcC5uYW1lLnRvTG93ZXJDYXNlKCkpKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHAuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHRoaXMuZGVmYXVsdFByb3BlcnRpZXMgPSBmaWxlUHJvcGVydGllcy5maWx0ZXIocCA9PiBwLmNhdGVnb3J5ID09PSBGaWxlUHJvcGVydHlDYXRlZ29yeS5EZWZhdWx0KTtcblxuICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmxvYWRQcm9wZXJ0aWVzTmFtZXModGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKChmaWxlUHJvcGVydGllc05hbWVzOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgICB0aGlzLmZpbGVQcm9wZXJ0aWVzTmFtZXMgPSBmaWxlUHJvcGVydGllc05hbWVzO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoIXRoaXMuc2hvd1NpZGVQYW5lbCkge1xuICAgICAgdGhpcy5zaG93U2lkZVBhbmVsID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBoaWRlU2lkZVBhbmVsKCRldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnNob3dTaWRlUGFuZWwgPSAhdGhpcy5zaG93U2lkZVBhbmVsO1xuICB9XG5cbiAgcmVtb3ZlUHJvcGVydHkoJGV2ZW50OiBGaWxlUHJvcGVydHlNb2RlbCkge1xuICAgIGNvbnN0IHJlbW92ZWRQcm9wZXJ0eSA9ICRldmVudDtcblxuICAgIGlmICh0aGlzLmZpbGUpIHtcbiAgICAgIGNvbnN0IG1ldGFkYXRhRmlsZSA9IG5ldyBNZXRhZGF0YUZpbGVEZXNjcmlwdGlvbigpO1xuICAgICAgbWV0YWRhdGFGaWxlLmd1aWQgPSB0aGlzLmZpbGUuZ3VpZDtcbiAgICAgIG1ldGFkYXRhRmlsZS5wcm9wZXJ0aWVzID0gW3JlbW92ZWRQcm9wZXJ0eV07XG4gICAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UucmVtb3ZlUHJvcGVydHkobWV0YWRhdGFGaWxlKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRQcm9wZXJ0aWVzKCk7XG4gICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5PcGVyYXRpb25TdWNjZXNzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19