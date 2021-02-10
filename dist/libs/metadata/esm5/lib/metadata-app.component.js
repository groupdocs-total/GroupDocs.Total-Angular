/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input, Component } from '@angular/core';
import { MetadataService } from "./metadata.service";
import { ModalService, ZoomService, UploadFilesService, NavigateService, PasswordService, CommonModals, LoadingMaskService } from "@groupdocs.examples.angular/common-components";
import { MetadataConfigService } from "./metadata-config.service";
import { WindowService, Api } from "@groupdocs.examples.angular/common-components";
import { PackageNameByMetadataType, PackageNameByOriginalName, MetadataType, ChangedFileModel } from './metadata-models';
import { PreviewStatus } from './preview-status/preview-models';
var MetadataAppComponent = /** @class */ (function () {
    function MetadataAppComponent(metadataService, modalService, configService, uploadFilesService, navigateService, zoomService, passwordService, loadingMaskService, windowService) {
        this.metadataService = metadataService;
        this.modalService = modalService;
        this.configService = configService;
        this.uploadFilesService = uploadFilesService;
        this.navigateService = navigateService;
        this.zoomService = zoomService;
        this.passwordService = passwordService;
        this.loadingMaskService = loadingMaskService;
        this.windowService = windowService;
        this.returnUrl = window.location.href;
        this.title = 'metadata';
        this.files = [];
        this.countPages = 0;
        this.browseFilesModal = CommonModals.BrowseFiles;
        this.previewZoom = 100;
        this.fileWasDropped = false;
        this.showSidePanel = true;
        this.confirmCleanModalId = "confirm-clean";
        this.confirmSaveModalId = "confirm-save";
        this.previewStatus = PreviewStatus.Undefined;
    }
    /**
     * @return {?}
     */
    MetadataAppComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loadingMaskService.addStopUrl(Api.LOAD_DOCUMENT_DESCRIPTION);
        this.isDesktop = this.windowService.isDesktop();
        this.windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            _this.isDesktop = _this.windowService.isDesktop();
            _this.refreshZoom();
        }));
        this.configService.updatedConfig.subscribe((/**
         * @param {?} metadataConfig
         * @return {?}
         */
        function (metadataConfig) {
            _this.metadataConfig = metadataConfig;
        }));
        this.uploadFilesService.uploadsChange.subscribe((/**
         * @param {?} uploads
         * @return {?}
         */
        function (uploads) {
            if (uploads && uploads.length > 0) {
                _this.metadataService.upload(uploads.item(0), '', _this.metadataConfig.rewrite).subscribe((/**
                 * @param {?} obj
                 * @return {?}
                 */
                function (obj) {
                    _this.fileWasDropped ? _this.selectFile(obj.guid, '', '') : _this.selectDir('');
                }));
            }
        }));
        this.passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        function (pass) {
            _this.selectFile(_this.credentials.guid, pass, CommonModals.PasswordRequired);
        }));
        if (this.metadataConfig.defaultDocument !== "") {
            this.isLoading = true;
            this.selectFile(this.metadataConfig.defaultDocument, "", "");
        }
        else if (this.initialFile) {
            this.isLoading = true;
            this.selectFile(this.initialFile, null, null);
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
        this.loadingMaskService
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
     * @param {?} fileShouldBeLoaded
     * @return {?}
     */
    MetadataAppComponent.prototype.openModal = /**
     * @param {?} id
     * @param {?} fileShouldBeLoaded
     * @return {?}
     */
    function (id, fileShouldBeLoaded) {
        if (fileShouldBeLoaded && !this.isFileLoaded())
            return;
        this.modalService.open(id);
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
        this.metadataService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        function (files) { return _this.files = files || []; }));
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
        this.metadataService.upload(null, $event, this.rewriteConfig).subscribe((/**
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
        var pageWidth = this.ptToPx(this.pageWidth);
        /** @type {?} */
        var pageHeight = this.ptToPx(this.pageHeight);
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
        var pageWidth = this.ptToPx(this.pageWidth);
        /** @type {?} */
        var pageHeight = this.ptToPx(this.pageHeight);
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
        return this.zoomService.zoomOptions(width, height);
    };
    Object.defineProperty(MetadataAppComponent.prototype, "zoom", {
        get: /**
         * @return {?}
         */
        function () {
            return this.previewZoom;
        },
        set: /**
         * @param {?} zoom
         * @return {?}
         */
        function (zoom) {
            this.previewZoom = zoom;
            this.zoomService.changeZoom(this.previewZoom);
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
        this.zoom = this.windowService.isDesktop() ? 100 : this.getFitToWidth();
    };
    /**
     * @return {?}
     */
    MetadataAppComponent.prototype.downloadFile = /**
     * @return {?}
     */
    function () {
        if (!this.isFileLoaded())
            return;
        window.location.assign(this.metadataService.getDownloadUrl(this.credentials));
    };
    /**
     * @return {?}
     */
    MetadataAppComponent.prototype.exportProperties = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isFileLoaded())
            return;
        this.metadataService.exportProperties(this.credentials).subscribe((/**
         * @param {?} exportedFile
         * @return {?}
         */
        function (exportedFile) {
            return _this.saveBlob(exportedFile, "ExportedProperties.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        }));
    };
    /**
     * @return {?}
     */
    MetadataAppComponent.prototype.save = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var savingFile = new ChangedFileModel();
        savingFile.guid = this.credentials.guid;
        savingFile.password = this.credentials.password;
        savingFile.packages = this.packages
            .map((/**
         * @param {?} updatedPackage
         * @return {?}
         */
        function (updatedPackage) {
            return { id: updatedPackage.id, properties: updatedPackage.properties.filter((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) { return p.state; })) };
        }))
            .filter((/**
         * @param {?} updatedPackage
         * @return {?}
         */
        function (updatedPackage) { return updatedPackage.properties.length > 0; }));
        if (savingFile.packages.length > 0) {
            this.metadataService.saveProperty(savingFile).subscribe((/**
             * @return {?}
             */
            function () {
                _this.loadProperties(false, true);
            }));
        }
    };
    /**
     * @return {?}
     */
    MetadataAppComponent.prototype.cleanMetadata = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.metadataService.cleanMetadata(this.credentials).subscribe((/**
         * @return {?}
         */
        function () {
            _this.loadProperties(false, true);
        }));
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
     * @param {?} packageInfo
     * @return {?}
     */
    MetadataAppComponent.prototype.getPackageName = /**
     * @param {?} packageInfo
     * @return {?}
     */
    function (packageInfo) {
        if (packageInfo.name in PackageNameByOriginalName) {
            if (packageInfo.index >= 0) {
                return PackageNameByOriginalName[packageInfo.name].concat(" ", (packageInfo.index + 1).toString(10));
            }
            return PackageNameByOriginalName[packageInfo.name];
        }
        if (packageInfo.type in PackageNameByMetadataType) {
            return PackageNameByMetadataType[packageInfo.type];
        }
        return (MetadataType[packageInfo.type]).toString();
    };
    /**
     * @param {?=} loadPreview
     * @param {?=} showSuccessModal
     * @return {?}
     */
    MetadataAppComponent.prototype.loadProperties = /**
     * @param {?=} loadPreview
     * @param {?=} showSuccessModal
     * @return {?}
     */
    function (loadPreview, showSuccessModal) {
        var _this = this;
        if (loadPreview === void 0) { loadPreview = false; }
        if (showSuccessModal === void 0) { showSuccessModal = false; }
        this.metadataService.loadProperties(this.credentials).subscribe((/**
         * @param {?} packages
         * @return {?}
         */
        function (packages) {
            _this.packages = packages;
            if (!_this.showSidePanel) {
                _this.showSidePanel = true;
            }
            if (loadPreview) {
                if (_this.documentPreviewSubscription && !_this.documentPreviewSubscription.closed) {
                    _this.documentPreviewSubscription.unsubscribe();
                }
                _this.preview = null;
                _this.previewStatus = PreviewStatus.InProgress;
                _this.documentPreviewSubscription = _this.metadataService.loadFile(_this.credentials).subscribe((/**
                 * @param {?} preview
                 * @return {?}
                 */
                function (preview) {
                    if (preview.pages && preview.pages.length > 0) {
                        _this.preview = preview;
                        _this.pageHeight = preview.pages[0].height;
                        _this.pageWidth = preview.pages[0].width;
                        _this.options = _this.zoomOptions();
                        _this.refreshZoom();
                        _this.previewStatus = PreviewStatus.Loaded;
                    }
                    else {
                        if (preview.timeLimitExceeded) {
                            _this.previewStatus = PreviewStatus.Timeout;
                        }
                        else {
                            _this.previewStatus = PreviewStatus.Unavailable;
                        }
                    }
                    /** @type {?} */
                    var countPages = preview.pages ? preview.pages.length : 0;
                    _this.navigateService.countPages = countPages;
                    _this.navigateService.currentPage = 1;
                    _this.countPages = countPages;
                }), (/**
                 * @return {?}
                 */
                function () { _this.previewStatus = PreviewStatus.Unavailable; }));
            }
            if (showSuccessModal) {
                _this.modalService.open(CommonModals.OperationSuccess);
            }
        }));
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
        this.credentials = { guid: $event, password: password };
        this.loadProperties(true);
        if (modalId) {
            this.modalService.close(modalId);
        }
    };
    /**
     * @return {?}
     */
    MetadataAppComponent.prototype.isFileLoaded = /**
     * @return {?}
     */
    function () {
        return this.packages != null && this.packages.length > 0;
    };
    /**
     * @return {?}
     */
    MetadataAppComponent.prototype.isPreviewLoaded = /**
     * @return {?}
     */
    function () {
        return this.previewStatus !== PreviewStatus.Undefined;
    };
    /**
     * @private
     * @param {?} blob
     * @param {?} fileName
     * @param {?} mimeType
     * @return {?}
     */
    MetadataAppComponent.prototype.saveBlob = /**
     * @private
     * @param {?} blob
     * @param {?} fileName
     * @param {?} mimeType
     * @return {?}
     */
    function (blob, fileName, mimeType) {
        /** @type {?} */
        var newBlob = new Blob([blob], { type: mimeType });
        // IE
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(newBlob);
            return;
        }
        /** @type {?} */
        var data = window.URL.createObjectURL(newBlob);
        /** @type {?} */
        var link = document.createElement('a');
        link.href = data;
        link.download = fileName;
        // Firefox
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
        setTimeout((/**
         * @return {?}
         */
        function () {
            // Firefox
            window.URL.revokeObjectURL(data);
            link.remove();
        }), 100);
    };
    MetadataAppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-metadata',
                    template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\r\n<div class=\"wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"column\" [ngClass]=\"{'document-loaded': isFileLoaded()}\">\r\n      <div class=\"top-panel\">\r\n        <a class=\"logo-link\" [href]=\"returnUrl\"><gd-logo [logo]=\"'metadata'\" icon=\"clipboard-list\"></gd-logo></a>\r\n        <gd-top-toolbar class=\"toolbar-panel\">\r\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal, false)\"\r\n                    *ngIf=\"browseConfig\" ></gd-button>\r\n          <gd-button [disabled]=\"!isFileLoaded()\" [icon]=\"'trash'\" [tooltip]=\"'Clean Metadata'\" (click)=\"openModal(confirmCleanModalId, true)\">\r\n                    </gd-button>\r\n          <gd-button [disabled]=\"!isFileLoaded()\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"openModal(confirmSaveModalId, true)\">\r\n                    </gd-button>\r\n          <gd-button [hidden] =\"isDesktop\" [disabled]=\"!isFileLoaded()\" [icon]=\"'file-export'\" [tooltip]=\"'Attributes'\" (click)=\"loadProperties()\">\r\n                    </gd-button>\r\n          <gd-button [disabled]=\"!isFileLoaded()\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\r\n                    (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\r\n          <gd-button [disabled]=\"!isFileLoaded()\" [icon]=\"'file-excel'\" [tooltip]=\"'Export Properties'\"\r\n                    (click)=\"exportProperties()\" ></gd-button>\r\n        </gd-top-toolbar>\r\n      </div>\r\n      <gd-init-state [icon]=\"'clipboard-list'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!isFileLoaded() && uploadConfig && !isPreviewLoaded()\" (fileDropped)=\"fileDropped($event)\">\r\n        Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\r\n        Or drop file here\r\n      </gd-init-state>\r\n      <gd-preview-status [status]=\"previewStatus\"></gd-preview-status>\r\n      <div class=\"doc-panel\" *ngIf=\"preview\" #docPanel>\r\n        <gd-document class=\"gd-document\" *ngIf=\"preview\" [file]=\"preview\" [mode]=\"false\" gdScrollable\r\n                    [preloadPageCount]=\"metadataConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"false\"></gd-document>\r\n      </div>\r\n    </div>\r\n    <gd-side-panel *ngIf=\"isFileLoaded() && showSidePanel\"\r\n      (hideSidePanel)=\"hideSidePanel($event)\"\r\n      (saveInSidePanel)=\"save()\"\r\n      [closable]=\"isDesktop ? false : true\"\r\n      [saveable]=\"isDesktop ? false : true\"\r\n      [title]=\"'Metadata'\"\r\n      [icon]=\"'clipboard-list'\">\r\n      <gd-accordion>\r\n        <gd-accordion-group *ngFor=\"let package of packages\" [title]=\"getPackageName(package)\" [addDisabled]=\"false\" [addHidden]=\"false\" [properties]=\"package.properties\" [knownProperties]=\"package.knownProperties\" [packageId]=\"package.id\"></gd-accordion-group>\r\n      </gd-accordion>\r\n    </gd-side-panel>\r\n  </div>\r\n\r\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\r\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\r\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\r\n\r\n  <gd-error-modal></gd-error-modal>\r\n  <gd-password-required></gd-password-required>\r\n  <gd-success-modal></gd-success-modal>\r\n  <gd-confirm-modal [id]=\"confirmCleanModalId\" [text]=\"'Are you sure, you want to clean metadata in this file?'\" (confirm)=\"cleanMetadata()\"></gd-confirm-modal>\r\n  <gd-confirm-modal [id]=\"confirmSaveModalId\" [text]=\"'Do you want to save the changes?'\" (confirm)=\"save()\"></gd-confirm-modal>\r\n  \r\n</div>\r\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.logo-link{color:inherit;text-decoration:inherit}.doc-panel{display:flex;height:calc(100vh - 60px);flex-direction:row}.top-panel{display:flex;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}::ng-deep .tools .button{color:#fff!important;flex-flow:column}::ng-deep .tools .button.inactive{color:#959da5!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}.row{display:flex}.column{width:100%;height:100vh;background-color:#e7e7e7;overflow:hidden}::ng-deep .gd-side-panel-body{background-color:#f4f4f4}::ng-deep .gd-side-panel-wrapper{width:464px!important}::ng-deep .page.excel{overflow:unset!important}@media (max-width:1037px){::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .gd-side-panel-wrapper{width:375px!important}}"]
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
        { type: PasswordService },
        { type: LoadingMaskService },
        { type: WindowService }
    ]; };
    MetadataAppComponent.propDecorators = {
        initialFile: [{ type: Input }],
        returnUrl: [{ type: Input }]
    };
    return MetadataAppComponent;
}());
export { MetadataAppComponent };
if (false) {
    /** @type {?} */
    MetadataAppComponent.prototype.initialFile;
    /** @type {?} */
    MetadataAppComponent.prototype.returnUrl;
    /** @type {?} */
    MetadataAppComponent.prototype.title;
    /** @type {?} */
    MetadataAppComponent.prototype.files;
    /** @type {?} */
    MetadataAppComponent.prototype.preview;
    /** @type {?} */
    MetadataAppComponent.prototype.metadataConfig;
    /** @type {?} */
    MetadataAppComponent.prototype.countPages;
    /** @type {?} */
    MetadataAppComponent.prototype.credentials;
    /** @type {?} */
    MetadataAppComponent.prototype.browseFilesModal;
    /** @type {?} */
    MetadataAppComponent.prototype.isLoading;
    /** @type {?} */
    MetadataAppComponent.prototype.previewZoom;
    /** @type {?} */
    MetadataAppComponent.prototype.pageWidth;
    /** @type {?} */
    MetadataAppComponent.prototype.pageHeight;
    /** @type {?} */
    MetadataAppComponent.prototype.options;
    /** @type {?} */
    MetadataAppComponent.prototype.fileWasDropped;
    /** @type {?} */
    MetadataAppComponent.prototype.packages;
    /** @type {?} */
    MetadataAppComponent.prototype.isDesktop;
    /** @type {?} */
    MetadataAppComponent.prototype.showSidePanel;
    /** @type {?} */
    MetadataAppComponent.prototype.confirmCleanModalId;
    /** @type {?} */
    MetadataAppComponent.prototype.confirmSaveModalId;
    /** @type {?} */
    MetadataAppComponent.prototype.previewStatus;
    /**
     * @type {?}
     * @private
     */
    MetadataAppComponent.prototype.documentPreviewSubscription;
    /**
     * @type {?}
     * @private
     */
    MetadataAppComponent.prototype.metadataService;
    /**
     * @type {?}
     * @private
     */
    MetadataAppComponent.prototype.modalService;
    /**
     * @type {?}
     * @private
     */
    MetadataAppComponent.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    MetadataAppComponent.prototype.uploadFilesService;
    /**
     * @type {?}
     * @private
     */
    MetadataAppComponent.prototype.navigateService;
    /**
     * @type {?}
     * @private
     */
    MetadataAppComponent.prototype.zoomService;
    /**
     * @type {?}
     * @private
     */
    MetadataAppComponent.prototype.passwordService;
    /**
     * @type {?}
     * @private
     */
    MetadataAppComponent.prototype.loadingMaskService;
    /**
     * @type {?}
     * @private
     */
    MetadataAppComponent.prototype.windowService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZXRhZGF0YS1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLEtBQUssRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFFTCxZQUFZLEVBQ1osV0FBVyxFQUNYLGtCQUFrQixFQUNsQixlQUFlLEVBQ2YsZUFBZSxFQUNFLFlBQVksRUFBRSxrQkFBa0IsRUFDbEQsTUFBTSwrQ0FBK0MsQ0FBQztBQUV2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ25GLE9BQU8sRUFBZ0IseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUsWUFBWSxFQUFlLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFcEosT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRWhFO0lBOEJFLDhCQUFvQixlQUFnQyxFQUNoQyxZQUEwQixFQUMxQixhQUFvQyxFQUNwQyxrQkFBc0MsRUFDdEMsZUFBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsa0JBQXNDLEVBQ3RDLGFBQTRCO1FBUjVCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUFDcEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIs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OztJQUMvQiwwQ0FBZTs7SUFDZiwyQ0FBNkI7O0lBQzdCLGdEQUE0Qzs7SUFDNUMseUNBQW1COztJQUNuQiwyQ0FBa0I7O0lBQ2xCLHlDQUFrQjs7SUFDbEIsMENBQW1COztJQUNuQix1Q0FBUTs7SUFDUiw4Q0FBdUI7O0lBQ3ZCLHdDQUFnQzs7SUFDaEMseUNBQW1COztJQUNuQiw2Q0FBcUI7O0lBQ3JCLG1EQUFzQzs7SUFDdEMsa0RBQW9DOztJQUNwQyw2Q0FBdUQ7Ozs7O0lBQ3ZELDJEQUFrRDs7Ozs7SUFFdEMsK0NBQXdDOzs7OztJQUN4Qyw0Q0FBa0M7Ozs7O0lBQ2xDLDZDQUE0Qzs7Ozs7SUFDNUMsa0RBQThDOzs7OztJQUM5QywrQ0FBd0M7Ozs7O0lBQ3hDLDJDQUFnQzs7Ozs7SUFDaEMsK0NBQXdDOzs7OztJQUN4QyxrREFBOEM7Ozs7O0lBQzlDLDZDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIElucHV0LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNZXRhZGF0YVNlcnZpY2UgfSBmcm9tIFwiLi9tZXRhZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgRmlsZU1vZGVsLFxyXG4gIE1vZGFsU2VydmljZSxcclxuICBab29tU2VydmljZSxcclxuICBVcGxvYWRGaWxlc1NlcnZpY2UsXHJcbiAgTmF2aWdhdGVTZXJ2aWNlLFxyXG4gIFBhc3N3b3JkU2VydmljZSxcclxuICBGaWxlQ3JlZGVudGlhbHMsIENvbW1vbk1vZGFscywgTG9hZGluZ01hc2tTZXJ2aWNlXHJcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBNZXRhZGF0YUNvbmZpZyB9IGZyb20gXCIuL21ldGFkYXRhLWNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBNZXRhZGF0YUNvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi9tZXRhZGF0YS1jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlLCBBcGkgfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IFBhY2thZ2VNb2RlbCwgUGFja2FnZU5hbWVCeU1ldGFkYXRhVHlwZSwgUGFja2FnZU5hbWVCeU9yaWdpbmFsTmFtZSwgTWV0YWRhdGFUeXBlLCBGaWxlUHJldmlldywgQ2hhbmdlZEZpbGVNb2RlbCB9IGZyb20gJy4vbWV0YWRhdGEtbW9kZWxzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFByZXZpZXdTdGF0dXMgfSBmcm9tICcuL3ByZXZpZXctc3RhdHVzL3ByZXZpZXctbW9kZWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtbWV0YWRhdGEnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXRhZGF0YS1hcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21ldGFkYXRhLWFwcC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWV0YWRhdGFBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGluaXRpYWxGaWxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmV0dXJuVXJsOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICB0aXRsZSA9ICdtZXRhZGF0YSc7XHJcbiAgZmlsZXM6IEZpbGVNb2RlbFtdID0gW107XHJcbiAgcHJldmlldzogRmlsZVByZXZpZXc7XHJcbiAgbWV0YWRhdGFDb25maWc6IE1ldGFkYXRhQ29uZmlnO1xyXG4gIGNvdW50UGFnZXMgPSAwO1xyXG4gIGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHM7XHJcbiAgYnJvd3NlRmlsZXNNb2RhbCA9IENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcztcclxuICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgcHJldmlld1pvb20gPSAxMDA7XHJcbiAgcGFnZVdpZHRoOiBudW1iZXI7XHJcbiAgcGFnZUhlaWdodDogbnVtYmVyO1xyXG4gIG9wdGlvbnM7XHJcbiAgZmlsZVdhc0Ryb3BwZWQgPSBmYWxzZTtcclxuICBwdWJsaWMgcGFja2FnZXM6IFBhY2thZ2VNb2RlbFtdO1xyXG4gIGlzRGVza3RvcDogYm9vbGVhbjtcclxuICBzaG93U2lkZVBhbmVsID0gdHJ1ZTtcclxuICBjb25maXJtQ2xlYW5Nb2RhbElkID0gXCJjb25maXJtLWNsZWFuXCI7XHJcbiAgY29uZmlybVNhdmVNb2RhbElkID0gXCJjb25maXJtLXNhdmVcIjtcclxuICBwcmV2aWV3U3RhdHVzOiBQcmV2aWV3U3RhdHVzID0gUHJldmlld1N0YXR1cy5VbmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBkb2N1bWVudFByZXZpZXdTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXRhZGF0YVNlcnZpY2U6IE1ldGFkYXRhU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY29uZmlnU2VydmljZTogTWV0YWRhdGFDb25maWdTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBuYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHpvb21TZXJ2aWNlOiBab29tU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHBhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbG9hZGluZ01hc2tTZXJ2aWNlOiBMb2FkaW5nTWFza1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSB3aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmxvYWRpbmdNYXNrU2VydmljZS5hZGRTdG9wVXJsKEFwaS5MT0FEX0RPQ1VNRU5UX0RFU0NSSVBUSU9OKTtcclxuICAgIHRoaXMuaXNEZXNrdG9wID0gdGhpcy53aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xyXG4gICAgdGhpcy53aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xyXG4gICAgICB0aGlzLmlzRGVza3RvcCA9IHRoaXMud2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcclxuICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb25maWdTZXJ2aWNlLnVwZGF0ZWRDb25maWcuc3Vic2NyaWJlKChtZXRhZGF0YUNvbmZpZykgPT4ge1xyXG4gICAgICB0aGlzLm1ldGFkYXRhQ29uZmlnID0gbWV0YWRhdGFDb25maWc7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xyXG4gICAgICBpZiAodXBsb2FkcyAmJiB1cGxvYWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRoaXMubWV0YWRhdGFTZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oMCksICcnLCB0aGlzLm1ldGFkYXRhQ29uZmlnLnJld3JpdGUpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5maWxlV2FzRHJvcHBlZCA/IHRoaXMuc2VsZWN0RmlsZShvYmouZ3VpZCwgJycsICcnKSA6IHRoaXMuc2VsZWN0RGlyKCcnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnBhc3N3b3JkU2VydmljZS5wYXNzQ2hhbmdlLnN1YnNjcmliZSgocGFzczogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLmNyZWRlbnRpYWxzLmd1aWQsIHBhc3MsIENvbW1vbk1vZGFscy5QYXNzd29yZFJlcXVpcmVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLm1ldGFkYXRhQ29uZmlnLmRlZmF1bHREb2N1bWVudCAhPT0gXCJcIil7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMubWV0YWRhdGFDb25maWcuZGVmYXVsdERvY3VtZW50LCBcIlwiLCBcIlwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuaW5pdGlhbEZpbGUpIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5pbml0aWFsRmlsZSwgbnVsbCwgbnVsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmxvYWRpbmdNYXNrU2VydmljZVxyXG4gICAgLm9uTG9hZGluZ0NoYW5nZWRcclxuICAgIC5zdWJzY3JpYmUoKGxvYWRpbmc6IGJvb2xlYW4pID0+IHRoaXMuaXNMb2FkaW5nID0gbG9hZGluZyk7XHJcblxyXG4gICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJld3JpdGVDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXRhZGF0YUNvbmZpZyA/IHRoaXMubWV0YWRhdGFDb25maWcucmV3cml0ZSA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgZG93bmxvYWRDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXRhZGF0YUNvbmZpZyA/IHRoaXMubWV0YWRhdGFDb25maWcuZG93bmxvYWQgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1ldGFkYXRhQ29uZmlnID8gdGhpcy5tZXRhZGF0YUNvbmZpZy51cGxvYWQgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1ldGFkYXRhQ29uZmlnID8gdGhpcy5tZXRhZGF0YUNvbmZpZy5icm93c2UgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1vZGFsKGlkOiBzdHJpbmcsIGZpbGVTaG91bGRCZUxvYWRlZDogYm9vbGVhbikge1xyXG4gICAgaWYgKGZpbGVTaG91bGRCZUxvYWRlZCAmJiAhdGhpcy5pc0ZpbGVMb2FkZWQoKSkgcmV0dXJuO1xyXG4gICAgdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihpZCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMubWV0YWRhdGFTZXJ2aWNlLmxvYWRGaWxlcygkZXZlbnQpLnN1YnNjcmliZSgoZmlsZXM6IEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm1ldGFkYXRhU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZmlsZURyb3BwZWQoJGV2ZW50KXtcclxuICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPSAkZXZlbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHB0VG9QeChwdDogbnVtYmVyKSB7XHJcbiAgICAvL3B0ICogOTYgLyA3MiA9IHB4LlxyXG4gICAgcmV0dXJuIHB0ICogOTYgLyA3MjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Rml0VG9XaWR0aCgpIHtcclxuICAgIC8vIEltYWdlcyBhbmQgRXhjZWwtcmVsYXRlZCBmaWxlcyByZWNlaXZpbmcgZGltZW5zaW9ucyBpbiBweCBmcm9tIHNlcnZlclxyXG4gICAgY29uc3QgcGFnZVdpZHRoID0gdGhpcy5wdFRvUHgodGhpcy5wYWdlV2lkdGgpO1xyXG4gICAgY29uc3QgcGFnZUhlaWdodCA9IHRoaXMucHRUb1B4KHRoaXMucGFnZUhlaWdodCk7XHJcbiAgICBjb25zdCBvZmZzZXRXaWR0aCA9IHBhZ2VXaWR0aCA/IHBhZ2VXaWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgIHJldHVybiAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCAmJiBNYXRoLnJvdW5kKG9mZnNldFdpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpIDwgMikgPyAyMDAgLSBNYXRoLnJvdW5kKG9mZnNldFdpZHRoICogMTAwIC8gd2luZG93LmlubmVyV2lkdGgpIDogTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAqIDEwMCAvIG9mZnNldFdpZHRoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Rml0VG9IZWlnaHQoKSB7XHJcbiAgICBjb25zdCBwYWdlV2lkdGggPSB0aGlzLnB0VG9QeCh0aGlzLnBhZ2VXaWR0aCk7XHJcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5wdFRvUHgodGhpcy5wYWdlSGVpZ2h0KTtcclxuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoKSA/IHdpbmRvdy5pbm5lckhlaWdodCAtIDEwMCA6IHdpbmRvdy5pbm5lckhlaWdodCArIDEwMDtcclxuICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IHBhZ2VIZWlnaHQgPyBwYWdlSGVpZ2h0IDogd2luZG93SGVpZ2h0O1xyXG5cclxuICAgIHJldHVybiAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCkgPyBNYXRoLnJvdW5kKHdpbmRvd0hlaWdodCAqIDEwMCAvIG9mZnNldEhlaWdodCkgOiBNYXRoLnJvdW5kKG9mZnNldEhlaWdodCAqIDEwMCAvIHdpbmRvd0hlaWdodCk7XHJcbiAgfVxyXG5cclxuICB6b29tT3B0aW9ucygpIHtcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRGaXRUb1dpZHRoKCk7XHJcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEZpdFRvSGVpZ2h0KCk7XHJcbiAgICByZXR1cm4gdGhpcy56b29tU2VydmljZS56b29tT3B0aW9ucyh3aWR0aCwgaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHNldCB6b29tKHpvb20pIHtcclxuICAgIHRoaXMucHJldmlld1pvb20gPSB6b29tO1xyXG4gICAgdGhpcy56b29tU2VydmljZS5jaGFuZ2Vab29tKHRoaXMucHJldmlld1pvb20pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHpvb20oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmV2aWV3Wm9vbTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVmcmVzaFpvb20oKSB7XHJcbiAgICB0aGlzLnpvb20gPSB0aGlzLndpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCkgPyAxMDAgOiB0aGlzLmdldEZpdFRvV2lkdGgoKTtcclxuICB9XHJcblxyXG4gIGRvd25sb2FkRmlsZSgpIHtcclxuICAgIGlmICghdGhpcy5pc0ZpbGVMb2FkZWQoKSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLm1ldGFkYXRhU2VydmljZS5nZXREb3dubG9hZFVybCh0aGlzLmNyZWRlbnRpYWxzKSk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRQcm9wZXJ0aWVzKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzRmlsZUxvYWRlZCgpKSByZXR1cm47XHJcbiAgICB0aGlzLm1ldGFkYXRhU2VydmljZS5leHBvcnRQcm9wZXJ0aWVzKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZXhwb3J0ZWRGaWxlOiBCbG9iKSA9PiBcclxuICAgICAgdGhpcy5zYXZlQmxvYihleHBvcnRlZEZpbGUsIFwiRXhwb3J0ZWRQcm9wZXJ0aWVzLnhsc3hcIiwgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldFwiKSk7IFxyXG4gIH1cclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIGNvbnN0IHNhdmluZ0ZpbGUgPSBuZXcgQ2hhbmdlZEZpbGVNb2RlbCgpO1xyXG4gICAgc2F2aW5nRmlsZS5ndWlkID0gdGhpcy5jcmVkZW50aWFscy5ndWlkO1xyXG4gICAgc2F2aW5nRmlsZS5wYXNzd29yZCA9IHRoaXMuY3JlZGVudGlhbHMucGFzc3dvcmQ7XHJcbiAgICBzYXZpbmdGaWxlLnBhY2thZ2VzID0gdGhpcy5wYWNrYWdlc1xyXG4gICAgICAubWFwKHVwZGF0ZWRQYWNrYWdlID0+IHsgXHJcbiAgICAgICAgcmV0dXJuIHsgaWQ6IHVwZGF0ZWRQYWNrYWdlLmlkLCBwcm9wZXJ0aWVzOiB1cGRhdGVkUGFja2FnZS5wcm9wZXJ0aWVzLmZpbHRlcihwID0+IHAuc3RhdGUpfTsgXHJcbiAgICAgIH0pXHJcbiAgICAgIC5maWx0ZXIodXBkYXRlZFBhY2thZ2UgPT4gdXBkYXRlZFBhY2thZ2UucHJvcGVydGllcy5sZW5ndGggPiAwKTtcclxuICAgIGlmIChzYXZpbmdGaWxlLnBhY2thZ2VzLmxlbmd0aCA+IDApXHJcbiAgICB7XHJcbiAgICAgIHRoaXMubWV0YWRhdGFTZXJ2aWNlLnNhdmVQcm9wZXJ0eShzYXZpbmdGaWxlKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZFByb3BlcnRpZXMoZmFsc2UsIHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsZWFuTWV0YWRhdGEoKSB7XHJcbiAgICB0aGlzLm1ldGFkYXRhU2VydmljZS5jbGVhbk1ldGFkYXRhKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZFByb3BlcnRpZXMoZmFsc2UsIHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoaWRlU2lkZVBhbmVsKCRldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMuc2hvd1NpZGVQYW5lbCA9ICF0aGlzLnNob3dTaWRlUGFuZWw7XHJcbiAgfVxyXG5cclxuICBnZXRQYWNrYWdlTmFtZShwYWNrYWdlSW5mbzogUGFja2FnZU1vZGVsKSB7XHJcbiAgICBpZiAocGFja2FnZUluZm8ubmFtZSBpbiBQYWNrYWdlTmFtZUJ5T3JpZ2luYWxOYW1lKSB7XHJcbiAgICAgIGlmKHBhY2thZ2VJbmZvLmluZGV4ID49IDApIHtcclxuICAgICAgICByZXR1cm4gUGFja2FnZU5hbWVCeU9yaWdpbmFsTmFtZVtwYWNrYWdlSW5mby5uYW1lXS5jb25jYXQoXCIgXCIsIChwYWNrYWdlSW5mby5pbmRleCArIDEpLnRvU3RyaW5nKDEwKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFBhY2thZ2VOYW1lQnlPcmlnaW5hbE5hbWVbcGFja2FnZUluZm8ubmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhY2thZ2VJbmZvLnR5cGUgaW4gUGFja2FnZU5hbWVCeU1ldGFkYXRhVHlwZSkge1xyXG4gICAgICByZXR1cm4gUGFja2FnZU5hbWVCeU1ldGFkYXRhVHlwZVtwYWNrYWdlSW5mby50eXBlXTtcclxuICAgIH1cclxuICAgIHJldHVybiAoTWV0YWRhdGFUeXBlW3BhY2thZ2VJbmZvLnR5cGVdKS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFByb3BlcnRpZXMobG9hZFByZXZpZXc6IGJvb2xlYW4gPSBmYWxzZSwgc2hvd1N1Y2Nlc3NNb2RhbCA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLm1ldGFkYXRhU2VydmljZS5sb2FkUHJvcGVydGllcyh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKHBhY2thZ2VzOiBQYWNrYWdlTW9kZWxbXSkgPT4ge1xyXG4gICAgICB0aGlzLnBhY2thZ2VzID0gcGFja2FnZXM7XHJcbiAgICAgIGlmICghdGhpcy5zaG93U2lkZVBhbmVsKSB7XHJcbiAgICAgICAgdGhpcy5zaG93U2lkZVBhbmVsID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGxvYWRQcmV2aWV3KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRQcmV2aWV3U3Vic2NyaXB0aW9uICYmICF0aGlzLmRvY3VtZW50UHJldmlld1N1YnNjcmlwdGlvbi5jbG9zZWQpIHtcclxuICAgICAgICAgIHRoaXMuZG9jdW1lbnRQcmV2aWV3U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJldmlldyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmV2aWV3U3RhdHVzID0gUHJldmlld1N0YXR1cy5JblByb2dyZXNzO1xyXG4gICAgICAgIHRoaXMuZG9jdW1lbnRQcmV2aWV3U3Vic2NyaXB0aW9uID0gdGhpcy5tZXRhZGF0YVNlcnZpY2UubG9hZEZpbGUodGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKChwcmV2aWV3OiBGaWxlUHJldmlldykgPT4ge1xyXG4gICAgICAgIGlmIChwcmV2aWV3LnBhZ2VzICYmIHByZXZpZXcucGFnZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdGhpcy5wcmV2aWV3ID0gcHJldmlldztcclxuICAgICAgICAgIHRoaXMucGFnZUhlaWdodCA9IHByZXZpZXcucGFnZXNbMF0uaGVpZ2h0O1xyXG4gICAgICAgICAgdGhpcy5wYWdlV2lkdGggPSBwcmV2aWV3LnBhZ2VzWzBdLndpZHRoO1xyXG4gICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy56b29tT3B0aW9ucygpO1xyXG4gICAgICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xyXG4gICAgICAgICAgdGhpcy5wcmV2aWV3U3RhdHVzID0gUHJldmlld1N0YXR1cy5Mb2FkZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHByZXZpZXcudGltZUxpbWl0RXhjZWVkZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aWV3U3RhdHVzID0gUHJldmlld1N0YXR1cy5UaW1lb3V0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlld1N0YXR1cyA9IFByZXZpZXdTdGF0dXMuVW5hdmFpbGFibGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb3VudFBhZ2VzID0gcHJldmlldy5wYWdlcyA/IHByZXZpZXcucGFnZXMubGVuZ3RoIDogMDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm5hdmlnYXRlU2VydmljZS5jb3VudFBhZ2VzID0gY291bnRQYWdlcztcclxuICAgICAgICB0aGlzLm5hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICAgICAgdGhpcy5jb3VudFBhZ2VzID0gY291bnRQYWdlcztcclxuICAgICAgIH0sICgpID0+IHsgdGhpcy5wcmV2aWV3U3RhdHVzID0gUHJldmlld1N0YXR1cy5VbmF2YWlsYWJsZTsgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzaG93U3VjY2Vzc01vZGFsKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuT3BlcmF0aW9uU3VjY2Vzcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0RmlsZSgkZXZlbnQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgbW9kYWxJZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0geyBndWlkOiAkZXZlbnQsIHBhc3N3b3JkOiBwYXNzd29yZCB9O1xyXG4gICAgdGhpcy5sb2FkUHJvcGVydGllcyh0cnVlKTtcclxuICAgIGlmIChtb2RhbElkKSB7XHJcbiAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLmNsb3NlKG1vZGFsSWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNGaWxlTG9hZGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFja2FnZXMgIT0gbnVsbCAmJiB0aGlzLnBhY2thZ2VzLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICBpc1ByZXZpZXdMb2FkZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmV2aWV3U3RhdHVzICE9PSBQcmV2aWV3U3RhdHVzLlVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2F2ZUJsb2IoYmxvYjogQmxvYiwgZmlsZU5hbWU6IHN0cmluZywgbWltZVR5cGU6IHN0cmluZykge1xyXG4gICAgY29uc3QgbmV3QmxvYiA9IG5ldyBCbG9iKFtibG9iXSwgeyB0eXBlOiBtaW1lVHlwZSB9KTtcclxuXHJcbiAgICAvLyBJRVxyXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XHJcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKG5ld0Jsb2IpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgZGF0YSA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG5ld0Jsb2IpO1xyXG5cclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBsaW5rLmhyZWYgPSBkYXRhO1xyXG4gICAgbGluay5kb3dubG9hZCA9IGZpbGVOYW1lO1xyXG4gICAgLy8gRmlyZWZveFxyXG4gICAgbGluay5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KCdjbGljaycsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSwgdmlldzogd2luZG93IH0pKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBGaXJlZm94XHJcbiAgICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwoZGF0YSk7XHJcbiAgICAgICAgbGluay5yZW1vdmUoKTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==