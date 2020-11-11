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
     * @return {?}
     */
    MetadataAppComponent.prototype.openModal = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (this.formatDisabled)
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
                    template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\r\n<div class=\"wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"column\" [ngClass]=\"{'document-loaded': !formatDisabled}\">\r\n      <div class=\"top-panel\">\r\n        <a class=\"logo-link\" [href]=\"returnUrl\"><gd-logo [logo]=\"'metadata'\" icon=\"clipboard-list\"></gd-logo></a>\r\n        <gd-top-toolbar class=\"toolbar-panel\">\r\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\r\n                    *ngIf=\"browseConfig\" ></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'trash'\" [tooltip]=\"'Clean Metadata'\" (click)=\"openModal(confirmCleanModalId)\">\r\n                    </gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"openModal(confirmSaveModalId)\">\r\n                    </gd-button>\r\n          <gd-button [hidden] =\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'file-export'\" [tooltip]=\"'Attributes'\" (click)=\"loadProperties()\">\r\n                    </gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\r\n                    (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'file-excel'\" [tooltip]=\"'Export Properties'\"\r\n                    (click)=\"exportProperties()\" ></gd-button>\r\n        </gd-top-toolbar>\r\n      </div>\r\n      <div class=\"doc-panel\" *ngIf=\"file\" #docPanel>\r\n        <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"false\" gdScrollable\r\n                    [preloadPageCount]=\"metadataConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"false\"></gd-document>\r\n      </div>\r\n    </div>\r\n    <gd-side-panel *ngIf=\"file && showSidePanel\"\r\n      (hideSidePanel)=\"hideSidePanel($event)\"\r\n      (saveInSidePanel)=\"save()\"\r\n      [closable]=\"isDesktop ? false : true\"\r\n      [saveable]=\"isDesktop ? false : true\"\r\n      [title]=\"'Metadata'\"\r\n      [icon]=\"'clipboard-list'\">\r\n      <gd-accordion>\r\n        <gd-accordion-group *ngFor=\"let package of packages\" [title]=\"getPackageName(package)\" [addDisabled]=\"false\" [addHidden]=\"false\" [properties]=\"package.properties\" [knownProperties]=\"package.knownProperties\" [packageId]=\"package.id\" (removeProperty)=\"removeProperty($event)\"></gd-accordion-group>\r\n      </gd-accordion>\r\n    </gd-side-panel>\r\n  </div>\r\n  <gd-init-state [icon]=\"'clipboard-list'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file && uploadConfig\" (fileDropped)=\"fileDropped($event)\">\r\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\r\n    Or drop file here\r\n  </gd-init-state>\r\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\r\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\r\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\r\n\r\n  <gd-error-modal></gd-error-modal>\r\n  <gd-password-required></gd-password-required>\r\n  <gd-success-modal></gd-success-modal>\r\n  <gd-confirm-modal [id]=\"confirmCleanModalId\" [text]=\"'Are you sure, you want to clean metadata in this file?'\" (confirm)=\"cleanMetadata()\"></gd-confirm-modal>\r\n  <gd-confirm-modal [id]=\"confirmSaveModalId\" [text]=\"'Do you want to save the changes?'\" (confirm)=\"save()\"></gd-confirm-modal>\r\n  \r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZXRhZGF0YS1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFnQixLQUFLLEVBQUUsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxlQUFlLEVBQUUsdUJBQXVCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RSxPQUFPLEVBR0wsWUFBWSxFQUNaLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGVBQWUsRUFDRSxZQUFZLEVBQUUsa0JBQWtCLEVBQ2xELE1BQU0sK0NBQStDLENBQUM7QUFFdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzlFLE9BQU8sRUFBcUMseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFMUk7SUErQkUsOEJBQW9CLGVBQWdDLEVBQ2hDLFlBQTBCLEVBQzFCLGFBQW9DLEVBQ3BDLGtCQUFzQyxFQUN0QyxlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixlQUFnQyxFQUNoQyxrQkFBc0MsRUFDdEMsYUFBNEI7UUFSNUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQUNwQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFv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SXJCLFlBQVk7Z0JBUUwscUJBQXFCO2dCQU41QixrQkFBa0I7Z0JBQ2xCLGVBQWU7Z0JBRmYsV0FBVztnQkFHWCxlQUFlO2dCQUNnQixrQkFBa0I7Z0JBSTFDLGFBQWE7Ozs4QkFVbkIsS0FBSzs0QkFDTCxLQUFLOztJQWlUUiwyQkFBQztDQUFBLEFBelRELElBeVRDO1NBblRZLG9CQUFvQjs7O0lBQy9CLDJDQUE2Qjs7SUFDN0IseUNBQWtEOztJQUNsRCxxQ0FBbUI7O0lBQ25CLHFDQUF3Qjs7SUFDeEIsb0NBQXNCOztJQUN0Qiw4Q0FBK0I7O0lBQy9CLDBDQUFlOztJQUNmLDhDQUFzQjs7SUFDdEIsMkNBQTZCOztJQUM3QixnREFBNEM7O0lBQzVDLHlDQUFtQjs7SUFFbkIsMkNBQWtCOztJQUNsQix5Q0FBa0I7O0lBQ2xCLDBDQUFtQjs7SUFDbkIsdUNBQVE7O0lBQ1IsOENBQXVCOztJQUN2Qix3Q0FBZ0M7O0lBQ2hDLHdDQUFpQjs7SUFDakIseUNBQW1COztJQUNuQiw2Q0FBcUI7O0lBQ3JCLG1EQUFzQzs7SUFDdEMsa0RBQW9DOzs7OztJQUV4QiwrQ0FBd0M7Ozs7O0lBQ3hDLDRDQUFrQzs7Ozs7SUFDbEMsNkNBQTRDOzs7OztJQUM1QyxrREFBOEM7Ozs7O0lBQzlDLCtDQUF3Qzs7Ozs7SUFDeEMsMkNBQWdDOzs7OztJQUNoQywrQ0FBd0M7Ozs7O0lBQ3hDLGtEQUE4Qzs7Ozs7SUFDOUMsNkNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBJbnB1dCwgQ29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01ldGFkYXRhU2VydmljZSwgTWV0YWRhdGFGaWxlRGVzY3JpcHRpb259IGZyb20gXCIuL21ldGFkYXRhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuICBGaWxlRGVzY3JpcHRpb24sXHJcbiAgRmlsZU1vZGVsLFxyXG4gIE1vZGFsU2VydmljZSxcclxuICBab29tU2VydmljZSxcclxuICBVcGxvYWRGaWxlc1NlcnZpY2UsXHJcbiAgTmF2aWdhdGVTZXJ2aWNlLFxyXG4gIFBhc3N3b3JkU2VydmljZSxcclxuICBGaWxlQ3JlZGVudGlhbHMsIENvbW1vbk1vZGFscywgTG9hZGluZ01hc2tTZXJ2aWNlXHJcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBNZXRhZGF0YUNvbmZpZyB9IGZyb20gXCIuL21ldGFkYXRhLWNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBNZXRhZGF0YUNvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi9tZXRhZGF0YS1jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBSZW1vdmVQcm9wZXJ0eU1vZGVsLCBQYWNrYWdlTW9kZWwsIFBhY2thZ2VOYW1lQnlNZXRhZGF0YVR5cGUsIFBhY2thZ2VOYW1lQnlPcmlnaW5hbE5hbWUsIE1ldGFkYXRhVHlwZSB9IGZyb20gJy4vbWV0YWRhdGEtbW9kZWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtbWV0YWRhdGEnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXRhZGF0YS1hcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21ldGFkYXRhLWFwcC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWV0YWRhdGFBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGluaXRpYWxGaWxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmV0dXJuVXJsOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICB0aXRsZSA9ICdtZXRhZGF0YSc7XHJcbiAgZmlsZXM6IEZpbGVNb2RlbFtdID0gW107XHJcbiAgZmlsZTogRmlsZURlc2NyaXB0aW9uO1xyXG4gIG1ldGFkYXRhQ29uZmlnOiBNZXRhZGF0YUNvbmZpZztcclxuICBjb3VudFBhZ2VzID0gMDtcclxuICBmb3JtYXREaXNhYmxlZCA9IHRydWU7XHJcbiAgY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscztcclxuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xyXG4gIGlzTG9hZGluZzogYm9vbGVhbjtcclxuXHJcbiAgcHJldmlld1pvb20gPSAxMDA7XHJcbiAgcGFnZVdpZHRoOiBudW1iZXI7XHJcbiAgcGFnZUhlaWdodDogbnVtYmVyO1xyXG4gIG9wdGlvbnM7XHJcbiAgZmlsZVdhc0Ryb3BwZWQgPSBmYWxzZTtcclxuICBwdWJsaWMgcGFja2FnZXM6IFBhY2thZ2VNb2RlbFtdO1xyXG4gIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xyXG4gIHNob3dTaWRlUGFuZWwgPSB0cnVlO1xyXG4gIGNvbmZpcm1DbGVhbk1vZGFsSWQgPSBcImNvbmZpcm0tY2xlYW5cIjtcclxuICBjb25maXJtU2F2ZU1vZGFsSWQgPSBcImNvbmZpcm0tc2F2ZVwiO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1ldGFkYXRhU2VydmljZTogTWV0YWRhdGFTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBNZXRhZGF0YUNvbmZpZ1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSB1cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG5hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsb2FkaW5nTWFza1NlcnZpY2U6IExvYWRpbmdNYXNrU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHdpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UpIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaXNEZXNrdG9wID0gdGhpcy53aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xyXG4gICAgdGhpcy53aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xyXG4gICAgICB0aGlzLmlzRGVza3RvcCA9IHRoaXMud2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcclxuICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb25maWdTZXJ2aWNlLnVwZGF0ZWRDb25maWcuc3Vic2NyaWJlKChtZXRhZGF0YUNvbmZpZykgPT4ge1xyXG4gICAgICB0aGlzLm1ldGFkYXRhQ29uZmlnID0gbWV0YWRhdGFDb25maWc7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xyXG4gICAgICBpZiAodXBsb2Fkcykge1xyXG4gICAgICAgIGxldCBpOiBudW1iZXI7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHVwbG9hZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHRoaXMubWV0YWRhdGFTZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oaSksICcnLCB0aGlzLm1ldGFkYXRhQ29uZmlnLnJld3JpdGUpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5maWxlV2FzRHJvcHBlZCA/IHRoaXMuc2VsZWN0RmlsZShvYmouZ3VpZCwgJycsICcnKSA6IHRoaXMuc2VsZWN0RGlyKCcnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5wYXNzd29yZFNlcnZpY2UucGFzc0NoYW5nZS5zdWJzY3JpYmUoKHBhc3M6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5jcmVkZW50aWFscy5ndWlkLCBwYXNzLCBDb21tb25Nb2RhbHMuUGFzc3dvcmRSZXF1aXJlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5tZXRhZGF0YUNvbmZpZy5kZWZhdWx0RG9jdW1lbnQgIT09IFwiXCIpe1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLm1ldGFkYXRhQ29uZmlnLmRlZmF1bHREb2N1bWVudCwgXCJcIiwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW5pdGlhbEZpbGUpIHtcclxuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuaW5pdGlhbEZpbGUsIG51bGwsIG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5sb2FkaW5nTWFza1NlcnZpY2VcclxuICAgIC5vbkxvYWRpbmdDaGFuZ2VkXHJcbiAgICAuc3Vic2NyaWJlKChsb2FkaW5nOiBib29sZWFuKSA9PiB0aGlzLmlzTG9hZGluZyA9IGxvYWRpbmcpO1xyXG5cclxuICAgIHRoaXMucmVmcmVzaFpvb20oKTtcclxuICB9XHJcblxyXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubWV0YWRhdGFDb25maWcgPyB0aGlzLm1ldGFkYXRhQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRvd25sb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubWV0YWRhdGFDb25maWcgPyB0aGlzLm1ldGFkYXRhQ29uZmlnLmRvd25sb2FkIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCB1cGxvYWRDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXRhZGF0YUNvbmZpZyA/IHRoaXMubWV0YWRhdGFDb25maWcudXBsb2FkIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBicm93c2VDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXRhZGF0YUNvbmZpZyA/IHRoaXMubWV0YWRhdGFDb25maWcuYnJvd3NlIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9wZW5Nb2RhbChpZDogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihpZCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMubWV0YWRhdGFTZXJ2aWNlLmxvYWRGaWxlcygkZXZlbnQpLnN1YnNjcmliZSgoZmlsZXM6IEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0RmlsZSgkZXZlbnQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgbW9kYWxJZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0ge2d1aWQ6ICRldmVudCwgcGFzc3dvcmQ6IHBhc3N3b3JkfTtcclxuICAgIHRoaXMuZmlsZSA9IG51bGw7XHJcbiAgICB0aGlzLm1ldGFkYXRhU2VydmljZS5sb2FkRmlsZSh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGZpbGU6IEZpbGVEZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XHJcbiAgICAgICAgdGhpcy5mb3JtYXREaXNhYmxlZCA9ICF0aGlzLmZpbGU7XHJcbiAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgIGlmIChmaWxlLnBhZ2VzICYmIGZpbGUucGFnZXNbMF0pIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlSGVpZ2h0ID0gZmlsZS5wYWdlc1swXS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVdpZHRoID0gZmlsZS5wYWdlc1swXS53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy56b29tT3B0aW9ucygpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hab29tKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgY291bnRQYWdlcyA9IGZpbGUucGFnZXMgPyBmaWxlLnBhZ2VzLmxlbmd0aCA6IDA7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRoaXMubmF2aWdhdGVTZXJ2aWNlLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xyXG4gICAgICAgICAgdGhpcy5uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgICAgdGhpcy5jb3VudFBhZ2VzID0gY291bnRQYWdlcztcclxuXHJcbiAgICAgICAgICB0aGlzLmxvYWRQcm9wZXJ0aWVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgaWYgKG1vZGFsSWQpIHtcclxuICAgICAgdGhpcy5tb2RhbFNlcnZpY2UuY2xvc2UobW9kYWxJZCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsZWFyRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm1ldGFkYXRhU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZmlsZURyb3BwZWQoJGV2ZW50KXtcclxuICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPSAkZXZlbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHB0VG9QeChwdDogbnVtYmVyKSB7XHJcbiAgICAvL3B0ICogOTYgLyA3MiA9IHB4LlxyXG4gICAgcmV0dXJuIHB0ICogOTYgLyA3MjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Rml0VG9XaWR0aCgpIHtcclxuICAgIC8vIEltYWdlcyBhbmQgRXhjZWwtcmVsYXRlZCBmaWxlcyByZWNlaXZpbmcgZGltZW5zaW9ucyBpbiBweCBmcm9tIHNlcnZlclxyXG4gICAgY29uc3QgcGFnZVdpZHRoID0gdGhpcy5wdFRvUHgodGhpcy5wYWdlV2lkdGgpO1xyXG4gICAgY29uc3QgcGFnZUhlaWdodCA9IHRoaXMucHRUb1B4KHRoaXMucGFnZUhlaWdodCk7XHJcbiAgICBjb25zdCBvZmZzZXRXaWR0aCA9IHBhZ2VXaWR0aCA/IHBhZ2VXaWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgIHJldHVybiAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCAmJiBNYXRoLnJvdW5kKG9mZnNldFdpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpIDwgMikgPyAyMDAgLSBNYXRoLnJvdW5kKG9mZnNldFdpZHRoICogMTAwIC8gd2luZG93LmlubmVyV2lkdGgpIDogTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAqIDEwMCAvIG9mZnNldFdpZHRoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Rml0VG9IZWlnaHQoKSB7XHJcbiAgICBjb25zdCBwYWdlV2lkdGggPSB0aGlzLnB0VG9QeCh0aGlzLnBhZ2VXaWR0aCk7XHJcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5wdFRvUHgodGhpcy5wYWdlSGVpZ2h0KTtcclxuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoKSA/IHdpbmRvdy5pbm5lckhlaWdodCAtIDEwMCA6IHdpbmRvdy5pbm5lckhlaWdodCArIDEwMDtcclxuICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IHBhZ2VIZWlnaHQgPyBwYWdlSGVpZ2h0IDogd2luZG93SGVpZ2h0O1xyXG5cclxuICAgIHJldHVybiAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCkgPyBNYXRoLnJvdW5kKHdpbmRvd0hlaWdodCAqIDEwMCAvIG9mZnNldEhlaWdodCkgOiBNYXRoLnJvdW5kKG9mZnNldEhlaWdodCAqIDEwMCAvIHdpbmRvd0hlaWdodCk7XHJcbiAgfVxyXG5cclxuICB6b29tT3B0aW9ucygpIHtcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRGaXRUb1dpZHRoKCk7XHJcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEZpdFRvSGVpZ2h0KCk7XHJcbiAgICByZXR1cm4gdGhpcy56b29tU2VydmljZS56b29tT3B0aW9ucyh3aWR0aCwgaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHNldCB6b29tKHpvb20pIHtcclxuICAgIHRoaXMucHJldmlld1pvb20gPSB6b29tO1xyXG4gICAgdGhpcy56b29tU2VydmljZS5jaGFuZ2Vab29tKHRoaXMucHJldmlld1pvb20pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHpvb20oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmV2aWV3Wm9vbTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVmcmVzaFpvb20oKSB7XHJcbiAgICB0aGlzLnpvb20gPSB0aGlzLndpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCkgPyAxMDAgOiB0aGlzLmdldEZpdFRvV2lkdGgoKTtcclxuICB9XHJcblxyXG4gIGRvd25sb2FkRmlsZSgpIHtcclxuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHRoaXMubWV0YWRhdGFTZXJ2aWNlLmdldERvd25sb2FkVXJsKHRoaXMuY3JlZGVudGlhbHMpKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydFByb3BlcnRpZXMoKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5tZXRhZGF0YVNlcnZpY2UuZXhwb3J0UHJvcGVydGllcyh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGV4cG9ydGVkRmlsZTogQmxvYikgPT4gXHJcbiAgICAgIHRoaXMuc2F2ZUJsb2IoZXhwb3J0ZWRGaWxlLCBcIkV4cG9ydGVkUHJvcGVydGllcy54bHN4XCIsIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXRcIikpOyBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJEYXRhKCkge1xyXG4gICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5wYWdlcykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgdGhpcy5maWxlLnBhZ2VzKSB7XHJcbiAgICAgIHBhZ2UuZGF0YSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0Rpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuICF0aGlzLmZpbGUgfHwgdGhpcy5kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICBjb25zdCBzYXZpbmdGaWxlID0gbmV3IE1ldGFkYXRhRmlsZURlc2NyaXB0aW9uKCk7XHJcbiAgICBzYXZpbmdGaWxlLmd1aWQgPSB0aGlzLmZpbGUuZ3VpZDtcclxuICAgIHNhdmluZ0ZpbGUucGFzc3dvcmQgPSB0aGlzLmNyZWRlbnRpYWxzLnBhc3N3b3JkO1xyXG4gICAgc2F2aW5nRmlsZS5wYWNrYWdlcyA9IHRoaXMucGFja2FnZXNcclxuICAgICAgLm1hcCh1cGRhdGVkUGFja2FnZSA9PiB7IFxyXG4gICAgICAgIHJldHVybiB7IGlkOiB1cGRhdGVkUGFja2FnZS5pZCwgcHJvcGVydGllczogdXBkYXRlZFBhY2thZ2UucHJvcGVydGllcy5maWx0ZXIocCA9PiBwLmFkZGVkIHx8IHAuZWRpdGVkKX07IFxyXG4gICAgICB9KVxyXG4gICAgICAuZmlsdGVyKHVwZGF0ZWRQYWNrYWdlID0+IHVwZGF0ZWRQYWNrYWdlLnByb3BlcnRpZXMubGVuZ3RoID4gMCk7XHJcblxyXG4gICAgaWYgKHNhdmluZ0ZpbGUucGFja2FnZXMubGVuZ3RoID4gMClcclxuICAgIHtcclxuICAgICAgdGhpcy5tZXRhZGF0YVNlcnZpY2Uuc2F2ZVByb3BlcnR5KHNhdmluZ0ZpbGUpLnN1YnNjcmliZSgobG9hZEZpbGU6IEZpbGVEZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZFByb3BlcnRpZXMoKTtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuT3BlcmF0aW9uU3VjY2Vzcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xlYW5NZXRhZGF0YSgpIHtcclxuICAgIHRoaXMubWV0YWRhdGFTZXJ2aWNlLmNsZWFuTWV0YWRhdGEodGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2FkUHJvcGVydGllcygpO1xyXG4gICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLk9wZXJhdGlvblN1Y2Nlc3MpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkUHJvcGVydGllcygpIHtcclxuICAgIGlmICghdGhpcy5maWxlKSByZXR1cm47XHJcbiAgICB0aGlzLm1ldGFkYXRhU2VydmljZS5sb2FkUHJvcGVydGllcyh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKHBhY2thZ2VzOiBQYWNrYWdlTW9kZWxbXSkgPT4ge1xyXG4gICAgICB0aGlzLnBhY2thZ2VzID0gcGFja2FnZXM7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXRoaXMuc2hvd1NpZGVQYW5lbCkge1xyXG4gICAgICB0aGlzLnNob3dTaWRlUGFuZWwgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZVNpZGVQYW5lbCgkZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICB0aGlzLnNob3dTaWRlUGFuZWwgPSAhdGhpcy5zaG93U2lkZVBhbmVsO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUHJvcGVydHkocHJvcGVydHlJbmZvOiBSZW1vdmVQcm9wZXJ0eU1vZGVsKSB7XHJcbiAgICBpZiAodGhpcy5maWxlKSB7XHJcbiAgICAgIGNvbnN0IG1ldGFkYXRhRmlsZSA9IG5ldyBNZXRhZGF0YUZpbGVEZXNjcmlwdGlvbigpO1xyXG4gICAgICBtZXRhZGF0YUZpbGUuZ3VpZCA9IHRoaXMuZmlsZS5ndWlkO1xyXG4gICAgICBtZXRhZGF0YUZpbGUucGFzc3dvcmQgPSB0aGlzLmNyZWRlbnRpYWxzLnBhc3N3b3JkO1xyXG4gICAgICBtZXRhZGF0YUZpbGUucGFja2FnZXMgPSBbe2lkOiBwcm9wZXJ0eUluZm8ucGFja2FnZUlkLCBwcm9wZXJ0aWVzOiBbcHJvcGVydHlJbmZvLnByb3BlcnR5XSB9XTtcclxuICAgICAgdGhpcy5tZXRhZGF0YVNlcnZpY2UucmVtb3ZlUHJvcGVydHkobWV0YWRhdGFGaWxlKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZFByb3BlcnRpZXMoKTtcclxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5PcGVyYXRpb25TdWNjZXNzKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQYWNrYWdlTmFtZShwYWNrYWdlSW5mbzogUGFja2FnZU1vZGVsKSB7XHJcbiAgICBpZiAocGFja2FnZUluZm8ubmFtZSBpbiBQYWNrYWdlTmFtZUJ5T3JpZ2luYWxOYW1lKSB7XHJcbiAgICAgIGlmKHBhY2thZ2VJbmZvLmluZGV4ID49IDApIHtcclxuICAgICAgICByZXR1cm4gUGFja2FnZU5hbWVCeU9yaWdpbmFsTmFtZVtwYWNrYWdlSW5mby5uYW1lXS5jb25jYXQoXCIgXCIsIChwYWNrYWdlSW5mby5pbmRleCArIDEpLnRvU3RyaW5nKDEwKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFBhY2thZ2VOYW1lQnlPcmlnaW5hbE5hbWVbcGFja2FnZUluZm8ubmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhY2thZ2VJbmZvLnR5cGUgaW4gUGFja2FnZU5hbWVCeU1ldGFkYXRhVHlwZSkge1xyXG4gICAgICByZXR1cm4gUGFja2FnZU5hbWVCeU1ldGFkYXRhVHlwZVtwYWNrYWdlSW5mby50eXBlXTtcclxuICAgIH1cclxuICAgIHJldHVybiAoTWV0YWRhdGFUeXBlW3BhY2thZ2VJbmZvLnR5cGVdKS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzYXZlQmxvYihibG9iOiBCbG9iLCBmaWxlTmFtZTogc3RyaW5nLCBtaW1lVHlwZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBuZXdCbG9iID0gbmV3IEJsb2IoW2Jsb2JdLCB7IHR5cGU6IG1pbWVUeXBlIH0pO1xyXG5cclxuICAgIC8vIElFXHJcbiAgICBpZiAod2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcclxuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IobmV3QmxvYik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgY29uc3QgZGF0YSA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG5ld0Jsb2IpO1xyXG5cclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBsaW5rLmhyZWYgPSBkYXRhO1xyXG4gICAgbGluay5kb3dubG9hZCA9IGZpbGVOYW1lO1xyXG4gICAgLy8gRmlyZWZveFxyXG4gICAgbGluay5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KCdjbGljaycsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSwgdmlldzogd2luZG93IH0pKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBGaXJlZm94XHJcbiAgICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwoZGF0YSk7XHJcbiAgICAgICAgbGluay5yZW1vdmUoKTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==