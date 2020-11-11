/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Input, Component } from '@angular/core';
import { MetadataService, MetadataFileDescription } from "./metadata.service";
import { ModalService, ZoomService, UploadFilesService, NavigateService, PasswordService, CommonModals, LoadingMaskService } from "@groupdocs.examples.angular/common-components";
import { MetadataConfigService } from "./metadata-config.service";
import { WindowService } from "@groupdocs.examples.angular/common-components";
import { PackageNameByMetadataType, PackageNameByOriginalName, MetadataType } from './metadata-models';
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
        this.formatDisabled = true;
        this.browseFilesModal = CommonModals.BrowseFiles;
        this.previewZoom = 100;
        this.fileWasDropped = false;
        this.disabled = false;
        this.showSidePanel = true;
        this.confirmCleanModalId = "confirm-clean";
        this.confirmSaveModalId = "confirm-save";
    }
    /**
     * @return {?}
     */
    MetadataAppComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
            if (uploads) {
                /** @type {?} */
                var i = void 0;
                for (i = 0; i < uploads.length; i++) {
                    _this.metadataService.upload(uploads.item(i), '', _this.metadataConfig.rewrite).subscribe((/**
                     * @param {?} obj
                     * @return {?}
                     */
                    function (obj) {
                        _this.fileWasDropped ? _this.selectFile(obj.guid, '', '') : _this.selectDir('');
                    }));
                }
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
        if (this.initialFile) {
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
        if (fileShouldBeLoaded && this.formatDisabled)
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
        this.metadataService.loadFile(this.credentials).subscribe((/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            _this.file = file;
            _this.formatDisabled = !_this.file;
            if (file) {
                if (file.pages && file.pages[0]) {
                    _this.pageHeight = file.pages[0].height;
                    _this.pageWidth = file.pages[0].width;
                    _this.options = _this.zoomOptions();
                    _this.refreshZoom();
                }
                /** @type {?} */
                var countPages = file.pages ? file.pages.length : 0;
                _this.navigateService.countPages = countPages;
                _this.navigateService.currentPage = 1;
                _this.countPages = countPages;
                _this.loadProperties();
            }
        }));
        if (modalId) {
            this.modalService.close(modalId);
        }
        this.clearData();
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
        if (this.formatDisabled)
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
        if (this.formatDisabled)
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
        /** @type {?} */
        var savingFile = new MetadataFileDescription();
        savingFile.guid = this.file.guid;
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
                function (p) { return p.added || p.edited; })) };
        }))
            .filter((/**
         * @param {?} updatedPackage
         * @return {?}
         */
        function (updatedPackage) { return updatedPackage.properties.length > 0; }));
        if (savingFile.packages.length > 0) {
            this.metadataService.saveProperty(savingFile).subscribe((/**
             * @param {?} loadFile
             * @return {?}
             */
            function (loadFile) {
                _this.loadProperties();
                _this.disabled = false;
                _this.modalService.open(CommonModals.OperationSuccess);
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
            _this.loadProperties();
            _this.disabled = false;
            _this.modalService.open(CommonModals.OperationSuccess);
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
        if (!this.file)
            return;
        this.metadataService.loadProperties(this.credentials).subscribe((/**
         * @param {?} packages
         * @return {?}
         */
        function (packages) {
            _this.packages = packages;
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
     * @param {?} propertyInfo
     * @return {?}
     */
    MetadataAppComponent.prototype.removeProperty = /**
     * @param {?} propertyInfo
     * @return {?}
     */
    function (propertyInfo) {
        var _this = this;
        if (this.file) {
            /** @type {?} */
            var metadataFile = new MetadataFileDescription();
            metadataFile.guid = this.file.guid;
            metadataFile.password = this.credentials.password;
            metadataFile.packages = [{ id: propertyInfo.packageId, properties: [propertyInfo.property] }];
            this.metadataService.removeProperty(metadataFile).subscribe((/**
             * @return {?}
             */
            function () {
                _this.loadProperties();
                _this.modalService.open(CommonModals.OperationSuccess);
            }));
        }
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
                    template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\r\n<div class=\"wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"column\" [ngClass]=\"{'document-loaded': !formatDisabled}\">\r\n      <div class=\"top-panel\">\r\n        <a class=\"logo-link\" [href]=\"returnUrl\"><gd-logo [logo]=\"'metadata'\" icon=\"clipboard-list\"></gd-logo></a>\r\n        <gd-top-toolbar class=\"toolbar-panel\">\r\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal, false)\"\r\n                    *ngIf=\"browseConfig\" ></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'trash'\" [tooltip]=\"'Clean Metadata'\" (click)=\"openModal(confirmCleanModalId, true)\">\r\n                    </gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"openModal(confirmSaveModalId, true)\">\r\n                    </gd-button>\r\n          <gd-button [hidden] =\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'file-export'\" [tooltip]=\"'Attributes'\" (click)=\"loadProperties()\">\r\n                    </gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\r\n                    (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'file-excel'\" [tooltip]=\"'Export Properties'\"\r\n                    (click)=\"exportProperties()\" ></gd-button>\r\n        </gd-top-toolbar>\r\n      </div>\r\n      <div class=\"doc-panel\" *ngIf=\"file\" #docPanel>\r\n        <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"false\" gdScrollable\r\n                    [preloadPageCount]=\"metadataConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"false\"></gd-document>\r\n      </div>\r\n    </div>\r\n    <gd-side-panel *ngIf=\"file && showSidePanel\"\r\n      (hideSidePanel)=\"hideSidePanel($event)\"\r\n      (saveInSidePanel)=\"save()\"\r\n      [closable]=\"isDesktop ? false : true\"\r\n      [saveable]=\"isDesktop ? false : true\"\r\n      [title]=\"'Metadata'\"\r\n      [icon]=\"'clipboard-list'\">\r\n      <gd-accordion>\r\n        <gd-accordion-group *ngFor=\"let package of packages\" [title]=\"getPackageName(package)\" [addDisabled]=\"false\" [addHidden]=\"false\" [properties]=\"package.properties\" [knownProperties]=\"package.knownProperties\" [packageId]=\"package.id\" (removeProperty)=\"removeProperty($event)\"></gd-accordion-group>\r\n      </gd-accordion>\r\n    </gd-side-panel>\r\n  </div>\r\n  <gd-init-state [icon]=\"'clipboard-list'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file && uploadConfig\" (fileDropped)=\"fileDropped($event)\">\r\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\r\n    Or drop file here\r\n  </gd-init-state>\r\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\r\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\r\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\r\n\r\n  <gd-error-modal></gd-error-modal>\r\n  <gd-password-required></gd-password-required>\r\n  <gd-success-modal></gd-success-modal>\r\n  <gd-confirm-modal [id]=\"confirmCleanModalId\" [text]=\"'Are you sure, you want to clean metadata in this file?'\" (confirm)=\"cleanMetadata()\"></gd-confirm-modal>\r\n  <gd-confirm-modal [id]=\"confirmSaveModalId\" [text]=\"'Do you want to save the changes?'\" (confirm)=\"save()\"></gd-confirm-modal>\r\n  \r\n</div>\r\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.logo-link{color:inherit;text-decoration:inherit}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}::ng-deep .tools .button{color:#fff!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .button.inactive{color:#959da5!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}.row{display:-webkit-box;display:flex}.column{width:100%;background-color:#e7e7e7}.document-loaded{overflow:hidden}::ng-deep .gd-side-panel-body{background-color:#f4f4f4}::ng-deep .gd-side-panel-wrapper{width:464px!important}::ng-deep .page.excel{overflow:unset!important}@media (max-width:1037px){::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .gd-side-panel-wrapper{width:375px!important}}"]
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
    MetadataAppComponent.prototype.disabled;
    /** @type {?} */
    MetadataAppComponent.prototype.isDesktop;
    /** @type {?} */
    MetadataAppComponent.prototype.showSidePanel;
    /** @type {?} */
    MetadataAppComponent.prototype.confirmCleanModalId;
    /** @type {?} */
    MetadataAppComponent.prototype.confirmSaveModalId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZXRhZGF0YS1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFnQixLQUFLLEVBQUUsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxlQUFlLEVBQUUsdUJBQXVCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RSxPQUFPLEVBR0wsWUFBWSxFQUNaLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGVBQWUsRUFDRSxZQUFZLEVBQUUsa0JBQWtCLEVBQ2xELE1BQU0sK0NBQStDLENBQUM7QUFFdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzlFLE9BQU8sRUFBcUMseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFMUk7SUErQkUsOEJBQW9CLGVBQWdDLEVBQ2hDLFlBQTBCLEVBQzFCLGFBQW9DLEVBQ3BDLGtCQUFzQyxFQUN0QyxlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixlQUFnQyxFQUNoQyxrQkFBc0MsRUFDdEMsYUFBNEI7UUFSNUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQUNwQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFv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O2lCQUU3Qzs7OztnQkFwQk8sZUFBZTtnQkFJckIsWUFBWTtnQkFRTCxxQkFBcUI7Z0JBTjVCLGtCQUFrQjtnQkFDbEIsZUFBZTtnQkFGZixXQUFXO2dCQUdYLGVBQWU7Z0JBQ2dCLGtCQUFrQjtnQkFJMUMsYUFBYTs7OzhCQVVuQixLQUFLOzRCQUNMLEtBQUs7O0lBaVRSLDJCQUFDO0NBQUEsQUF6VEQsSUF5VEM7U0FuVFksb0JBQW9COzs7SUFDL0IsMkNBQTZCOztJQUM3Qix5Q0FBa0Q7O0lBQ2xELHFDQUFtQjs7SUFDbkIscUNBQXdCOztJQUN4QixvQ0FBc0I7O0lBQ3RCLDhDQUErQjs7SUFDL0IsMENBQWU7O0lBQ2YsOENBQXNCOztJQUN0QiwyQ0FBNkI7O0lBQzdCLGdEQUE0Qzs7SUFDNUMseUNBQW1COztJQUVuQiwyQ0FBa0I7O0lBQ2xCLHlDQUFrQjs7SUFDbEIsMENBQW1COztJQUNuQix1Q0FBUTs7SUFDUiw4Q0FBdUI7O0lBQ3ZCLHdDQUFnQzs7SUFDaEMsd0NBQWlCOztJQUNqQix5Q0FBbUI7O0lBQ25CLDZDQUFxQjs7SUFDckIsbURBQXNDOztJQUN0QyxrREFBb0M7Ozs7O0lBRXhCLCtDQUF3Qzs7Ozs7SUFDeEMsNENBQWtDOzs7OztJQUNsQyw2Q0FBNEM7Ozs7O0lBQzVDLGtEQUE4Qzs7Ozs7SUFDOUMsK0NBQXdDOzs7OztJQUN4QywyQ0FBZ0M7Ozs7O0lBQ2hDLCtDQUF3Qzs7Ozs7SUFDeEMsa0RBQThDOzs7OztJQUM5Qyw2Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIElucHV0LCBDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWV0YWRhdGFTZXJ2aWNlLCBNZXRhZGF0YUZpbGVEZXNjcmlwdGlvbn0gZnJvbSBcIi4vbWV0YWRhdGEuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG4gIEZpbGVEZXNjcmlwdGlvbixcclxuICBGaWxlTW9kZWwsXHJcbiAgTW9kYWxTZXJ2aWNlLFxyXG4gIFpvb21TZXJ2aWNlLFxyXG4gIFVwbG9hZEZpbGVzU2VydmljZSxcclxuICBOYXZpZ2F0ZVNlcnZpY2UsXHJcbiAgUGFzc3dvcmRTZXJ2aWNlLFxyXG4gIEZpbGVDcmVkZW50aWFscywgQ29tbW9uTW9kYWxzLCBMb2FkaW5nTWFza1NlcnZpY2VcclxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IE1ldGFkYXRhQ29uZmlnIH0gZnJvbSBcIi4vbWV0YWRhdGEtY29uZmlnXCI7XHJcbmltcG9ydCB7IE1ldGFkYXRhQ29uZmlnU2VydmljZSB9IGZyb20gXCIuL21ldGFkYXRhLWNvbmZpZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IFJlbW92ZVByb3BlcnR5TW9kZWwsIFBhY2thZ2VNb2RlbCwgUGFja2FnZU5hbWVCeU1ldGFkYXRhVHlwZSwgUGFja2FnZU5hbWVCeU9yaWdpbmFsTmFtZSwgTWV0YWRhdGFUeXBlIH0gZnJvbSAnLi9tZXRhZGF0YS1tb2RlbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1tZXRhZGF0YScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21ldGFkYXRhLWFwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWV0YWRhdGEtYXBwLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXRhZGF0YUFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgaW5pdGlhbEZpbGU6IHN0cmluZztcclxuICBASW5wdXQoKSByZXR1cm5Vcmw6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gIHRpdGxlID0gJ21ldGFkYXRhJztcclxuICBmaWxlczogRmlsZU1vZGVsW10gPSBbXTtcclxuICBmaWxlOiBGaWxlRGVzY3JpcHRpb247XHJcbiAgbWV0YWRhdGFDb25maWc6IE1ldGFkYXRhQ29uZmlnO1xyXG4gIGNvdW50UGFnZXMgPSAwO1xyXG4gIGZvcm1hdERpc2FibGVkID0gdHJ1ZTtcclxuICBjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzO1xyXG4gIGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XHJcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG5cclxuICBwcmV2aWV3Wm9vbSA9IDEwMDtcclxuICBwYWdlV2lkdGg6IG51bWJlcjtcclxuICBwYWdlSGVpZ2h0OiBudW1iZXI7XHJcbiAgb3B0aW9ucztcclxuICBmaWxlV2FzRHJvcHBlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBwYWNrYWdlczogUGFja2FnZU1vZGVsW107XHJcbiAgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBpc0Rlc2t0b3A6IGJvb2xlYW47XHJcbiAgc2hvd1NpZGVQYW5lbCA9IHRydWU7XHJcbiAgY29uZmlybUNsZWFuTW9kYWxJZCA9IFwiY29uZmlybS1jbGVhblwiO1xyXG4gIGNvbmZpcm1TYXZlTW9kYWxJZCA9IFwiY29uZmlybS1zYXZlXCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWV0YWRhdGFTZXJ2aWNlOiBNZXRhZGF0YVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IE1ldGFkYXRhQ29uZmlnU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHVwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSB6b29tU2VydmljZTogWm9vbVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGxvYWRpbmdNYXNrU2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgd2luZG93U2VydmljZTogV2luZG93U2VydmljZSkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSB0aGlzLndpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XHJcbiAgICB0aGlzLndpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XHJcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gdGhpcy53aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hab29tKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbmZpZ1NlcnZpY2UudXBkYXRlZENvbmZpZy5zdWJzY3JpYmUoKG1ldGFkYXRhQ29uZmlnKSA9PiB7XHJcbiAgICAgIHRoaXMubWV0YWRhdGFDb25maWcgPSBtZXRhZGF0YUNvbmZpZztcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudXBsb2FkRmlsZXNTZXJ2aWNlLnVwbG9hZHNDaGFuZ2Uuc3Vic2NyaWJlKCh1cGxvYWRzKSA9PiB7XHJcbiAgICAgIGlmICh1cGxvYWRzKSB7XHJcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXBsb2Fkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdGhpcy5tZXRhZGF0YVNlcnZpY2UudXBsb2FkKHVwbG9hZHMuaXRlbShpKSwgJycsIHRoaXMubWV0YWRhdGFDb25maWcucmV3cml0ZSkuc3Vic2NyaWJlKChvYmo6IEZpbGVDcmVkZW50aWFscykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID8gdGhpcy5zZWxlY3RGaWxlKG9iai5ndWlkLCAnJywgJycpIDogdGhpcy5zZWxlY3REaXIoJycpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnBhc3N3b3JkU2VydmljZS5wYXNzQ2hhbmdlLnN1YnNjcmliZSgocGFzczogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLmNyZWRlbnRpYWxzLmd1aWQsIHBhc3MsIENvbW1vbk1vZGFscy5QYXNzd29yZFJlcXVpcmVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLm1ldGFkYXRhQ29uZmlnLmRlZmF1bHREb2N1bWVudCAhPT0gXCJcIil7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMubWV0YWRhdGFDb25maWcuZGVmYXVsdERvY3VtZW50LCBcIlwiLCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbml0aWFsRmlsZSkge1xyXG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5pbml0aWFsRmlsZSwgbnVsbCwgbnVsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmxvYWRpbmdNYXNrU2VydmljZVxyXG4gICAgLm9uTG9hZGluZ0NoYW5nZWRcclxuICAgIC5zdWJzY3JpYmUoKGxvYWRpbmc6IGJvb2xlYW4pID0+IHRoaXMuaXNMb2FkaW5nID0gbG9hZGluZyk7XHJcblxyXG4gICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJld3JpdGVDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXRhZGF0YUNvbmZpZyA/IHRoaXMubWV0YWRhdGFDb25maWcucmV3cml0ZSA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgZG93bmxvYWRDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXRhZGF0YUNvbmZpZyA/IHRoaXMubWV0YWRhdGFDb25maWcuZG93bmxvYWQgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1ldGFkYXRhQ29uZmlnID8gdGhpcy5tZXRhZGF0YUNvbmZpZy51cGxvYWQgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1ldGFkYXRhQ29uZmlnID8gdGhpcy5tZXRhZGF0YUNvbmZpZy5icm93c2UgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1vZGFsKGlkOiBzdHJpbmcsIGZpbGVTaG91bGRCZUxvYWRlZDogYm9vbGVhbikge1xyXG4gICAgaWYgKGZpbGVTaG91bGRCZUxvYWRlZCAmJiB0aGlzLmZvcm1hdERpc2FibGVkKSByZXR1cm47XHJcbiAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKGlkKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdERpcigkZXZlbnQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5tZXRhZGF0YVNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRmlsZU1vZGVsW10pID0+IHRoaXMuZmlsZXMgPSBmaWxlcyB8fCBbXSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBtb2RhbElkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSB7Z3VpZDogJGV2ZW50LCBwYXNzd29yZDogcGFzc3dvcmR9O1xyXG4gICAgdGhpcy5maWxlID0gbnVsbDtcclxuICAgIHRoaXMubWV0YWRhdGFTZXJ2aWNlLmxvYWRGaWxlKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZmlsZTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgICAgdGhpcy5maWxlID0gZmlsZTtcclxuICAgICAgICB0aGlzLmZvcm1hdERpc2FibGVkID0gIXRoaXMuZmlsZTtcclxuICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgaWYgKGZpbGUucGFnZXMgJiYgZmlsZS5wYWdlc1swXSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VIZWlnaHQgPSBmaWxlLnBhZ2VzWzBdLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5wYWdlV2lkdGggPSBmaWxlLnBhZ2VzWzBdLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnpvb21PcHRpb25zKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFpvb20oKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zdCBjb3VudFBhZ2VzID0gZmlsZS5wYWdlcyA/IGZpbGUucGFnZXMubGVuZ3RoIDogMDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdGhpcy5uYXZpZ2F0ZVNlcnZpY2UuY291bnRQYWdlcyA9IGNvdW50UGFnZXM7XHJcbiAgICAgICAgICB0aGlzLm5hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICAgICAgICB0aGlzLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xyXG5cclxuICAgICAgICAgIHRoaXMubG9hZFByb3BlcnRpZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBpZiAobW9kYWxJZCkge1xyXG4gICAgICB0aGlzLm1vZGFsU2VydmljZS5jbG9zZShtb2RhbElkKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2xlYXJEYXRhKCk7XHJcbiAgfVxyXG5cclxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMubWV0YWRhdGFTZXJ2aWNlLnVwbG9hZChudWxsLCAkZXZlbnQsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmaWxlRHJvcHBlZCgkZXZlbnQpe1xyXG4gICAgdGhpcy5maWxlV2FzRHJvcHBlZCA9ICRldmVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHRUb1B4KHB0OiBudW1iZXIpIHtcclxuICAgIC8vcHQgKiA5NiAvIDcyID0gcHguXHJcbiAgICByZXR1cm4gcHQgKiA5NiAvIDcyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGaXRUb1dpZHRoKCkge1xyXG4gICAgLy8gSW1hZ2VzIGFuZCBFeGNlbC1yZWxhdGVkIGZpbGVzIHJlY2VpdmluZyBkaW1lbnNpb25zIGluIHB4IGZyb20gc2VydmVyXHJcbiAgICBjb25zdCBwYWdlV2lkdGggPSB0aGlzLnB0VG9QeCh0aGlzLnBhZ2VXaWR0aCk7XHJcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5wdFRvUHgodGhpcy5wYWdlSGVpZ2h0KTtcclxuICAgIGNvbnN0IG9mZnNldFdpZHRoID0gcGFnZVdpZHRoID8gcGFnZVdpZHRoIDogd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICAgcmV0dXJuIChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoICYmIE1hdGgucm91bmQob2Zmc2V0V2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgPCAyKSA/IDIwMCAtIE1hdGgucm91bmQob2Zmc2V0V2lkdGggKiAxMDAgLyB3aW5kb3cuaW5uZXJXaWR0aCkgOiBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lcldpZHRoICogMTAwIC8gb2Zmc2V0V2lkdGgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGaXRUb0hlaWdodCgpIHtcclxuICAgIGNvbnN0IHBhZ2VXaWR0aCA9IHRoaXMucHRUb1B4KHRoaXMucGFnZVdpZHRoKTtcclxuICAgIGNvbnN0IHBhZ2VIZWlnaHQgPSB0aGlzLnB0VG9QeCh0aGlzLnBhZ2VIZWlnaHQpO1xyXG4gICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gKHBhZ2VIZWlnaHQgPiBwYWdlV2lkdGgpID8gd2luZG93LmlubmVySGVpZ2h0IC0gMTAwIDogd2luZG93LmlubmVySGVpZ2h0ICsgMTAwO1xyXG4gICAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gcGFnZUhlaWdodCA/IHBhZ2VIZWlnaHQgOiB3aW5kb3dIZWlnaHQ7XHJcblxyXG4gICAgcmV0dXJuIChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoKSA/IE1hdGgucm91bmQod2luZG93SGVpZ2h0ICogMTAwIC8gb2Zmc2V0SGVpZ2h0KSA6IE1hdGgucm91bmQob2Zmc2V0SGVpZ2h0ICogMTAwIC8gd2luZG93SGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHpvb21PcHRpb25zKCkge1xyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldEZpdFRvV2lkdGgoKTtcclxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0Rml0VG9IZWlnaHQoKTtcclxuICAgIHJldHVybiB0aGlzLnpvb21TZXJ2aWNlLnpvb21PcHRpb25zKHdpZHRoLCBoZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgc2V0IHpvb20oem9vbSkge1xyXG4gICAgdGhpcy5wcmV2aWV3Wm9vbSA9IHpvb207XHJcbiAgICB0aGlzLnpvb21TZXJ2aWNlLmNoYW5nZVpvb20odGhpcy5wcmV2aWV3Wm9vbSk7XHJcbiAgfVxyXG5cclxuICBnZXQgem9vbSgpIHtcclxuICAgIHJldHVybiB0aGlzLnByZXZpZXdab29tO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWZyZXNoWm9vbSgpIHtcclxuICAgIHRoaXMuem9vbSA9IHRoaXMud2luZG93U2VydmljZS5pc0Rlc2t0b3AoKSA/IDEwMCA6IHRoaXMuZ2V0Rml0VG9XaWR0aCgpO1xyXG4gIH1cclxuXHJcbiAgZG93bmxvYWRGaWxlKCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odGhpcy5tZXRhZGF0YVNlcnZpY2UuZ2V0RG93bmxvYWRVcmwodGhpcy5jcmVkZW50aWFscykpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0UHJvcGVydGllcygpIHtcclxuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKSByZXR1cm47XHJcbiAgICB0aGlzLm1ldGFkYXRhU2VydmljZS5leHBvcnRQcm9wZXJ0aWVzKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZXhwb3J0ZWRGaWxlOiBCbG9iKSA9PiBcclxuICAgICAgdGhpcy5zYXZlQmxvYihleHBvcnRlZEZpbGUsIFwiRXhwb3J0ZWRQcm9wZXJ0aWVzLnhsc3hcIiwgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldFwiKSk7IFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckRhdGEoKSB7XHJcbiAgICBpZiAoIXRoaXMuZmlsZSB8fCAhdGhpcy5maWxlLnBhZ2VzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgcGFnZSBvZiB0aGlzLmZpbGUucGFnZXMpIHtcclxuICAgICAgcGFnZS5kYXRhID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzRGlzYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuZmlsZSB8fCB0aGlzLmRpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIGNvbnN0IHNhdmluZ0ZpbGUgPSBuZXcgTWV0YWRhdGFGaWxlRGVzY3JpcHRpb24oKTtcclxuICAgIHNhdmluZ0ZpbGUuZ3VpZCA9IHRoaXMuZmlsZS5ndWlkO1xyXG4gICAgc2F2aW5nRmlsZS5wYXNzd29yZCA9IHRoaXMuY3JlZGVudGlhbHMucGFzc3dvcmQ7XHJcbiAgICBzYXZpbmdGaWxlLnBhY2thZ2VzID0gdGhpcy5wYWNrYWdlc1xyXG4gICAgICAubWFwKHVwZGF0ZWRQYWNrYWdlID0+IHsgXHJcbiAgICAgICAgcmV0dXJuIHsgaWQ6IHVwZGF0ZWRQYWNrYWdlLmlkLCBwcm9wZXJ0aWVzOiB1cGRhdGVkUGFja2FnZS5wcm9wZXJ0aWVzLmZpbHRlcihwID0+IHAuYWRkZWQgfHwgcC5lZGl0ZWQpfTsgXHJcbiAgICAgIH0pXHJcbiAgICAgIC5maWx0ZXIodXBkYXRlZFBhY2thZ2UgPT4gdXBkYXRlZFBhY2thZ2UucHJvcGVydGllcy5sZW5ndGggPiAwKTtcclxuXHJcbiAgICBpZiAoc2F2aW5nRmlsZS5wYWNrYWdlcy5sZW5ndGggPiAwKVxyXG4gICAge1xyXG4gICAgICB0aGlzLm1ldGFkYXRhU2VydmljZS5zYXZlUHJvcGVydHkoc2F2aW5nRmlsZSkuc3Vic2NyaWJlKChsb2FkRmlsZTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkUHJvcGVydGllcygpO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5PcGVyYXRpb25TdWNjZXNzKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGVhbk1ldGFkYXRhKCkge1xyXG4gICAgdGhpcy5tZXRhZGF0YVNlcnZpY2UuY2xlYW5NZXRhZGF0YSh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRQcm9wZXJ0aWVzKCk7XHJcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuT3BlcmF0aW9uU3VjY2Vzcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRQcm9wZXJ0aWVzKCkge1xyXG4gICAgaWYgKCF0aGlzLmZpbGUpIHJldHVybjtcclxuICAgIHRoaXMubWV0YWRhdGFTZXJ2aWNlLmxvYWRQcm9wZXJ0aWVzKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgocGFja2FnZXM6IFBhY2thZ2VNb2RlbFtdKSA9PiB7XHJcbiAgICAgIHRoaXMucGFja2FnZXMgPSBwYWNrYWdlcztcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdGhpcy5zaG93U2lkZVBhbmVsKSB7XHJcbiAgICAgIHRoaXMuc2hvd1NpZGVQYW5lbCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaWRlU2lkZVBhbmVsKCRldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMuc2hvd1NpZGVQYW5lbCA9ICF0aGlzLnNob3dTaWRlUGFuZWw7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eUluZm86IFJlbW92ZVByb3BlcnR5TW9kZWwpIHtcclxuICAgIGlmICh0aGlzLmZpbGUpIHtcclxuICAgICAgY29uc3QgbWV0YWRhdGFGaWxlID0gbmV3IE1ldGFkYXRhRmlsZURlc2NyaXB0aW9uKCk7XHJcbiAgICAgIG1ldGFkYXRhRmlsZS5ndWlkID0gdGhpcy5maWxlLmd1aWQ7XHJcbiAgICAgIG1ldGFkYXRhRmlsZS5wYXNzd29yZCA9IHRoaXMuY3JlZGVudGlhbHMucGFzc3dvcmQ7XHJcbiAgICAgIG1ldGFkYXRhRmlsZS5wYWNrYWdlcyA9IFt7aWQ6IHByb3BlcnR5SW5mby5wYWNrYWdlSWQsIHByb3BlcnRpZXM6IFtwcm9wZXJ0eUluZm8ucHJvcGVydHldIH1dO1xyXG4gICAgICB0aGlzLm1ldGFkYXRhU2VydmljZS5yZW1vdmVQcm9wZXJ0eShtZXRhZGF0YUZpbGUpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkUHJvcGVydGllcygpO1xyXG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLk9wZXJhdGlvblN1Y2Nlc3MpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFBhY2thZ2VOYW1lKHBhY2thZ2VJbmZvOiBQYWNrYWdlTW9kZWwpIHtcclxuICAgIGlmIChwYWNrYWdlSW5mby5uYW1lIGluIFBhY2thZ2VOYW1lQnlPcmlnaW5hbE5hbWUpIHtcclxuICAgICAgaWYocGFja2FnZUluZm8uaW5kZXggPj0gMCkge1xyXG4gICAgICAgIHJldHVybiBQYWNrYWdlTmFtZUJ5T3JpZ2luYWxOYW1lW3BhY2thZ2VJbmZvLm5hbWVdLmNvbmNhdChcIiBcIiwgKHBhY2thZ2VJbmZvLmluZGV4ICsgMSkudG9TdHJpbmcoMTApKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gUGFja2FnZU5hbWVCeU9yaWdpbmFsTmFtZVtwYWNrYWdlSW5mby5uYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFja2FnZUluZm8udHlwZSBpbiBQYWNrYWdlTmFtZUJ5TWV0YWRhdGFUeXBlKSB7XHJcbiAgICAgIHJldHVybiBQYWNrYWdlTmFtZUJ5TWV0YWRhdGFUeXBlW3BhY2thZ2VJbmZvLnR5cGVdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChNZXRhZGF0YVR5cGVbcGFja2FnZUluZm8udHlwZV0pLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNhdmVCbG9iKGJsb2I6IEJsb2IsIGZpbGVOYW1lOiBzdHJpbmcsIG1pbWVUeXBlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG5ld0Jsb2IgPSBuZXcgQmxvYihbYmxvYl0sIHsgdHlwZTogbWltZVR5cGUgfSk7XHJcblxyXG4gICAgLy8gSUVcclxuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xyXG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihuZXdCbG9iKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBkYXRhID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwobmV3QmxvYik7XHJcblxyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGxpbmsuaHJlZiA9IGRhdGE7XHJcbiAgICBsaW5rLmRvd25sb2FkID0gZmlsZU5hbWU7XHJcbiAgICAvLyBGaXJlZm94XHJcbiAgICBsaW5rLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlLCB2aWV3OiB3aW5kb3cgfSkpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEZpcmVmb3hcclxuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTChkYXRhKTtcclxuICAgICAgICBsaW5rLnJlbW92ZSgpO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcbn1cclxuIl19