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
                    template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"column\" [ngClass]=\"{'document-loaded': !formatDisabled}\">\n      <div class=\"top-panel\">\n        <a class=\"logo-link\" [href]=\"returnUrl\"><gd-logo [logo]=\"'metadata'\" icon=\"clipboard-list\"></gd-logo></a>\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal, false)\"\n                    *ngIf=\"browseConfig\" ></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'trash'\" [tooltip]=\"'Clean Metadata'\" (click)=\"openModal(confirmCleanModalId, true)\">\n                    </gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"openModal(confirmSaveModalId, true)\">\n                    </gd-button>\n          <gd-button [hidden] =\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'file-export'\" [tooltip]=\"'Attributes'\" (click)=\"loadProperties()\">\n                    </gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                    (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'file-excel'\" [tooltip]=\"'Export Properties'\"\n                    (click)=\"exportProperties()\" ></gd-button>\n        </gd-top-toolbar>\n      </div>\n      <div class=\"doc-panel\" *ngIf=\"file\" #docPanel>\n        <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"false\" gdScrollable\n                    [preloadPageCount]=\"metadataConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"false\"></gd-document>\n      </div>\n    </div>\n    <gd-side-panel *ngIf=\"file && showSidePanel\"\n      (hideSidePanel)=\"hideSidePanel($event)\"\n      (saveInSidePanel)=\"save()\"\n      [closable]=\"isDesktop ? false : true\"\n      [saveable]=\"isDesktop ? false : true\"\n      [title]=\"'Metadata'\"\n      [icon]=\"'clipboard-list'\">\n      <gd-accordion>\n        <gd-accordion-group *ngFor=\"let package of packages\" [title]=\"getPackageName(package)\" [addDisabled]=\"false\" [addHidden]=\"false\" [properties]=\"package.properties\" [knownProperties]=\"package.knownProperties\" [packageId]=\"package.id\" (removeProperty)=\"removeProperty($event)\"></gd-accordion-group>\n      </gd-accordion>\n    </gd-side-panel>\n  </div>\n  <gd-init-state [icon]=\"'clipboard-list'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file && uploadConfig\" (fileDropped)=\"fileDropped($event)\">\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n    Or drop file here\n  </gd-init-state>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n  <gd-confirm-modal [id]=\"confirmCleanModalId\" [text]=\"'Are you sure, you want to clean metadata in this file?'\" (confirm)=\"cleanMetadata()\"></gd-confirm-modal>\n  <gd-confirm-modal [id]=\"confirmSaveModalId\" [text]=\"'Do you want to save the changes?'\" (confirm)=\"save()\"></gd-confirm-modal>\n  \n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZXRhZGF0YS1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFnQixLQUFLLEVBQUUsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxlQUFlLEVBQUUsdUJBQXVCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RSxPQUFPLEVBR0wsWUFBWSxFQUNaLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGVBQWUsRUFDRSxZQUFZLEVBQUUsa0JBQWtCLEVBQ2xELE1BQU0sK0NBQStDLENBQUM7QUFFdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzlFLE9BQU8sRUFBcUMseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFMUk7SUErQkUsOEJBQW9CLGVBQWdDLEVBQ2hDLFlBQTBCLEVBQzFCLGFBQW9DLEVBQ3BDLGtCQUFzQyxFQUN0QyxlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixlQUFnQyxFQUNoQyxrQkFBc0MsRUFDdEMsYUFBNEI7UUFSNUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQUNwQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFv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b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLHcvR0FBNEM7O2lCQUU3Qzs7OztnQkFwQk8sZUFBZTtnQkFJckIsWUFBWTtnQkFRTCxxQkFBcUI7Z0JBTjVCLGtCQUFrQjtnQkFDbEIsZUFBZTtnQkFGZixXQUFXO2dCQUdYLGVBQWU7Z0JBQ2dCLGtCQUFrQjtnQkFJMUMsYUFBYTs7OzhCQVVuQixLQUFLOzRCQUNMLEtBQUs7O0lBZ1RSLDJCQUFDO0NBQUEsQUF4VEQsSUF3VEM7U0FsVFksb0JBQW9COzs7SUFDL0IsMkNBQTZCOztJQUM3Qix5Q0FBa0Q7O0lBQ2xELHFDQUFtQjs7SUFDbkIscUNBQXdCOztJQUN4QixvQ0FBc0I7O0lBQ3RCLDhDQUErQjs7SUFDL0IsMENBQWU7O0lBQ2YsOENBQXNCOztJQUN0QiwyQ0FBNkI7O0lBQzdCLGdEQUE0Qzs7SUFDNUMseUNBQW1COztJQUVuQiwyQ0FBa0I7O0lBQ2xCLHlDQUFrQjs7SUFDbEIsMENBQW1COztJQUNuQix1Q0FBUTs7SUFDUiw4Q0FBdUI7O0lBQ3ZCLHdDQUFnQzs7SUFDaEMsd0NBQWlCOztJQUNqQix5Q0FBbUI7O0lBQ25CLDZDQUFxQjs7SUFDckIsbURBQXNDOztJQUN0QyxrREFBb0M7Ozs7O0lBRXhCLCtDQUF3Qzs7Ozs7SUFDeEMsNENBQWtDOzs7OztJQUNsQyw2Q0FBNEM7Ozs7O0lBQzVDLGtEQUE4Qzs7Ozs7SUFDOUMsK0NBQXdDOzs7OztJQUN4QywyQ0FBZ0M7Ozs7O0lBQ2hDLCtDQUF3Qzs7Ozs7SUFDeEMsa0RBQThDOzs7OztJQUM5Qyw2Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIElucHV0LCBDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01ldGFkYXRhU2VydmljZSwgTWV0YWRhdGFGaWxlRGVzY3JpcHRpb259IGZyb20gXCIuL21ldGFkYXRhLnNlcnZpY2VcIjtcbmltcG9ydCB7XG4gIEZpbGVEZXNjcmlwdGlvbixcbiAgRmlsZU1vZGVsLFxuICBNb2RhbFNlcnZpY2UsXG4gIFpvb21TZXJ2aWNlLFxuICBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gIE5hdmlnYXRlU2VydmljZSxcbiAgUGFzc3dvcmRTZXJ2aWNlLFxuICBGaWxlQ3JlZGVudGlhbHMsIENvbW1vbk1vZGFscywgTG9hZGluZ01hc2tTZXJ2aWNlXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IE1ldGFkYXRhQ29uZmlnIH0gZnJvbSBcIi4vbWV0YWRhdGEtY29uZmlnXCI7XG5pbXBvcnQgeyBNZXRhZGF0YUNvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi9tZXRhZGF0YS1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFJlbW92ZVByb3BlcnR5TW9kZWwsIFBhY2thZ2VNb2RlbCwgUGFja2FnZU5hbWVCeU1ldGFkYXRhVHlwZSwgUGFja2FnZU5hbWVCeU9yaWdpbmFsTmFtZSwgTWV0YWRhdGFUeXBlIH0gZnJvbSAnLi9tZXRhZGF0YS1tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1tZXRhZGF0YScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXRhZGF0YS1hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZXRhZGF0YS1hcHAuY29tcG9uZW50Lmxlc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgaW5pdGlhbEZpbGU6IHN0cmluZztcbiAgQElucHV0KCkgcmV0dXJuVXJsOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgdGl0bGUgPSAnbWV0YWRhdGEnO1xuICBmaWxlczogRmlsZU1vZGVsW10gPSBbXTtcbiAgZmlsZTogRmlsZURlc2NyaXB0aW9uO1xuICBtZXRhZGF0YUNvbmZpZzogTWV0YWRhdGFDb25maWc7XG4gIGNvdW50UGFnZXMgPSAwO1xuICBmb3JtYXREaXNhYmxlZCA9IHRydWU7XG4gIGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHM7XG4gIGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcblxuICBwcmV2aWV3Wm9vbSA9IDEwMDtcbiAgcGFnZVdpZHRoOiBudW1iZXI7XG4gIHBhZ2VIZWlnaHQ6IG51bWJlcjtcbiAgb3B0aW9ucztcbiAgZmlsZVdhc0Ryb3BwZWQgPSBmYWxzZTtcbiAgcHVibGljIHBhY2thZ2VzOiBQYWNrYWdlTW9kZWxbXTtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xuICBzaG93U2lkZVBhbmVsID0gdHJ1ZTtcbiAgY29uZmlybUNsZWFuTW9kYWxJZCA9IFwiY29uZmlybS1jbGVhblwiO1xuICBjb25maXJtU2F2ZU1vZGFsSWQgPSBcImNvbmZpcm0tc2F2ZVwiO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWV0YWRhdGFTZXJ2aWNlOiBNZXRhZGF0YVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY29uZmlnU2VydmljZTogTWV0YWRhdGFDb25maWdTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHVwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIG5hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHpvb21TZXJ2aWNlOiBab29tU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsb2FkaW5nTWFza1NlcnZpY2U6IExvYWRpbmdNYXNrU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB3aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNEZXNrdG9wID0gdGhpcy53aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIHRoaXMud2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gdGhpcy53aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb25maWdTZXJ2aWNlLnVwZGF0ZWRDb25maWcuc3Vic2NyaWJlKChtZXRhZGF0YUNvbmZpZykgPT4ge1xuICAgICAgdGhpcy5tZXRhZGF0YUNvbmZpZyA9IG1ldGFkYXRhQ29uZmlnO1xuICAgIH0pO1xuXG4gICAgdGhpcy51cGxvYWRGaWxlc1NlcnZpY2UudXBsb2Fkc0NoYW5nZS5zdWJzY3JpYmUoKHVwbG9hZHMpID0+IHtcbiAgICAgIGlmICh1cGxvYWRzKSB7XG4gICAgICAgIGxldCBpOiBudW1iZXI7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB1cGxvYWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5tZXRhZGF0YVNlcnZpY2UudXBsb2FkKHVwbG9hZHMuaXRlbShpKSwgJycsIHRoaXMubWV0YWRhdGFDb25maWcucmV3cml0ZSkuc3Vic2NyaWJlKChvYmo6IEZpbGVDcmVkZW50aWFscykgPT4ge1xuICAgICAgICAgICAgdGhpcy5maWxlV2FzRHJvcHBlZCA/IHRoaXMuc2VsZWN0RmlsZShvYmouZ3VpZCwgJycsICcnKSA6IHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5wYXNzd29yZFNlcnZpY2UucGFzc0NoYW5nZS5zdWJzY3JpYmUoKHBhc3M6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuY3JlZGVudGlhbHMuZ3VpZCwgcGFzcywgQ29tbW9uTW9kYWxzLlBhc3N3b3JkUmVxdWlyZWQpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubWV0YWRhdGFDb25maWcuZGVmYXVsdERvY3VtZW50ICE9PSBcIlwiKXtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLm1ldGFkYXRhQ29uZmlnLmRlZmF1bHREb2N1bWVudCwgXCJcIiwgXCJcIik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuaW5pdGlhbEZpbGUpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLmluaXRpYWxGaWxlLCBudWxsLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5sb2FkaW5nTWFza1NlcnZpY2VcbiAgICAub25Mb2FkaW5nQ2hhbmdlZFxuICAgIC5zdWJzY3JpYmUoKGxvYWRpbmc6IGJvb2xlYW4pID0+IHRoaXMuaXNMb2FkaW5nID0gbG9hZGluZyk7XG5cbiAgICB0aGlzLnJlZnJlc2hab29tKCk7XG4gIH1cblxuICBnZXQgcmV3cml0ZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhZGF0YUNvbmZpZyA/IHRoaXMubWV0YWRhdGFDb25maWcucmV3cml0ZSA6IHRydWU7XG4gIH1cblxuICBnZXQgZG93bmxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWV0YWRhdGFDb25maWcgPyB0aGlzLm1ldGFkYXRhQ29uZmlnLmRvd25sb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB1cGxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWV0YWRhdGFDb25maWcgPyB0aGlzLm1ldGFkYXRhQ29uZmlnLnVwbG9hZCA6IHRydWU7XG4gIH1cblxuICBnZXQgYnJvd3NlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1ldGFkYXRhQ29uZmlnID8gdGhpcy5tZXRhZGF0YUNvbmZpZy5icm93c2UgOiB0cnVlO1xuICB9XG5cbiAgb3Blbk1vZGFsKGlkOiBzdHJpbmcsIGZpbGVTaG91bGRCZUxvYWRlZDogYm9vbGVhbikge1xuICAgIGlmIChmaWxlU2hvdWxkQmVMb2FkZWQgJiYgdGhpcy5mb3JtYXREaXNhYmxlZCkgcmV0dXJuO1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oaWQpO1xuICB9XG5cbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5tZXRhZGF0YVNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRmlsZU1vZGVsW10pID0+IHRoaXMuZmlsZXMgPSBmaWxlcyB8fCBbXSk7XG4gIH1cblxuICBzZWxlY3RGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBtb2RhbElkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0ge2d1aWQ6ICRldmVudCwgcGFzc3dvcmQ6IHBhc3N3b3JkfTtcbiAgICB0aGlzLmZpbGUgPSBudWxsO1xuICAgIHRoaXMubWV0YWRhdGFTZXJ2aWNlLmxvYWRGaWxlKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZmlsZTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgICAgIHRoaXMuZm9ybWF0RGlzYWJsZWQgPSAhdGhpcy5maWxlO1xuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgIGlmIChmaWxlLnBhZ2VzICYmIGZpbGUucGFnZXNbMF0pIHtcbiAgICAgICAgICAgIHRoaXMucGFnZUhlaWdodCA9IGZpbGUucGFnZXNbMF0uaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5wYWdlV2lkdGggPSBmaWxlLnBhZ2VzWzBdLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy56b29tT3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGNvdW50UGFnZXMgPSBmaWxlLnBhZ2VzID8gZmlsZS5wYWdlcy5sZW5ndGggOiAwO1xuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMubmF2aWdhdGVTZXJ2aWNlLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xuICAgICAgICAgIHRoaXMubmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgICAgICB0aGlzLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xuXG4gICAgICAgICAgdGhpcy5sb2FkUHJvcGVydGllcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgICBpZiAobW9kYWxJZCkge1xuICAgICAgdGhpcy5tb2RhbFNlcnZpY2UuY2xvc2UobW9kYWxJZCk7XG4gICAgfVxuICAgIHRoaXMuY2xlYXJEYXRhKCk7XG4gIH1cblxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLm1ldGFkYXRhU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgfSk7XG4gIH1cblxuICBmaWxlRHJvcHBlZCgkZXZlbnQpe1xuICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPSAkZXZlbnQ7XG4gIH1cblxuICBwcml2YXRlIHB0VG9QeChwdDogbnVtYmVyKSB7XG4gICAgLy9wdCAqIDk2IC8gNzIgPSBweC5cbiAgICByZXR1cm4gcHQgKiA5NiAvIDcyO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaXRUb1dpZHRoKCkge1xuICAgIC8vIEltYWdlcyBhbmQgRXhjZWwtcmVsYXRlZCBmaWxlcyByZWNlaXZpbmcgZGltZW5zaW9ucyBpbiBweCBmcm9tIHNlcnZlclxuICAgIGNvbnN0IHBhZ2VXaWR0aCA9IHRoaXMucHRUb1B4KHRoaXMucGFnZVdpZHRoKTtcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5wdFRvUHgodGhpcy5wYWdlSGVpZ2h0KTtcbiAgICBjb25zdCBvZmZzZXRXaWR0aCA9IHBhZ2VXaWR0aCA/IHBhZ2VXaWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgcmV0dXJuIChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoICYmIE1hdGgucm91bmQob2Zmc2V0V2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgPCAyKSA/IDIwMCAtIE1hdGgucm91bmQob2Zmc2V0V2lkdGggKiAxMDAgLyB3aW5kb3cuaW5uZXJXaWR0aCkgOiBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lcldpZHRoICogMTAwIC8gb2Zmc2V0V2lkdGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaXRUb0hlaWdodCgpIHtcbiAgICBjb25zdCBwYWdlV2lkdGggPSB0aGlzLnB0VG9QeCh0aGlzLnBhZ2VXaWR0aCk7XG4gICAgY29uc3QgcGFnZUhlaWdodCA9IHRoaXMucHRUb1B4KHRoaXMucGFnZUhlaWdodCk7XG4gICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gKHBhZ2VIZWlnaHQgPiBwYWdlV2lkdGgpID8gd2luZG93LmlubmVySGVpZ2h0IC0gMTAwIDogd2luZG93LmlubmVySGVpZ2h0ICsgMTAwO1xuICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IHBhZ2VIZWlnaHQgPyBwYWdlSGVpZ2h0IDogd2luZG93SGVpZ2h0O1xuXG4gICAgcmV0dXJuIChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoKSA/IE1hdGgucm91bmQod2luZG93SGVpZ2h0ICogMTAwIC8gb2Zmc2V0SGVpZ2h0KSA6IE1hdGgucm91bmQob2Zmc2V0SGVpZ2h0ICogMTAwIC8gd2luZG93SGVpZ2h0KTtcbiAgfVxuXG4gIHpvb21PcHRpb25zKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRGaXRUb1dpZHRoKCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRGaXRUb0hlaWdodCgpO1xuICAgIHJldHVybiB0aGlzLnpvb21TZXJ2aWNlLnpvb21PcHRpb25zKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgc2V0IHpvb20oem9vbSkge1xuICAgIHRoaXMucHJldmlld1pvb20gPSB6b29tO1xuICAgIHRoaXMuem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLnByZXZpZXdab29tKTtcbiAgfVxuXG4gIGdldCB6b29tKCkge1xuICAgIHJldHVybiB0aGlzLnByZXZpZXdab29tO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoWm9vbSgpIHtcbiAgICB0aGlzLnpvb20gPSB0aGlzLndpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCkgPyAxMDAgOiB0aGlzLmdldEZpdFRvV2lkdGgoKTtcbiAgfVxuXG4gIGRvd25sb2FkRmlsZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHRoaXMubWV0YWRhdGFTZXJ2aWNlLmdldERvd25sb2FkVXJsKHRoaXMuY3JlZGVudGlhbHMpKTtcbiAgfVxuXG4gIGV4cG9ydFByb3BlcnRpZXMoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpIHJldHVybjtcbiAgICB0aGlzLm1ldGFkYXRhU2VydmljZS5leHBvcnRQcm9wZXJ0aWVzKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZXhwb3J0ZWRGaWxlOiBCbG9iKSA9PiBcbiAgICAgIHRoaXMuc2F2ZUJsb2IoZXhwb3J0ZWRGaWxlLCBcIkV4cG9ydGVkUHJvcGVydGllcy54bHN4XCIsIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXRcIikpOyBcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJEYXRhKCkge1xuICAgIGlmICghdGhpcy5maWxlIHx8ICF0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwYWdlIG9mIHRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgcGFnZS5kYXRhID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiAhdGhpcy5maWxlIHx8IHRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIGNvbnN0IHNhdmluZ0ZpbGUgPSBuZXcgTWV0YWRhdGFGaWxlRGVzY3JpcHRpb24oKTtcbiAgICBzYXZpbmdGaWxlLmd1aWQgPSB0aGlzLmZpbGUuZ3VpZDtcbiAgICBzYXZpbmdGaWxlLnBhc3N3b3JkID0gdGhpcy5jcmVkZW50aWFscy5wYXNzd29yZDtcbiAgICBzYXZpbmdGaWxlLnBhY2thZ2VzID0gdGhpcy5wYWNrYWdlc1xuICAgICAgLm1hcCh1cGRhdGVkUGFja2FnZSA9PiB7IFxuICAgICAgICByZXR1cm4geyBpZDogdXBkYXRlZFBhY2thZ2UuaWQsIHByb3BlcnRpZXM6IHVwZGF0ZWRQYWNrYWdlLnByb3BlcnRpZXMuZmlsdGVyKHAgPT4gcC5hZGRlZCB8fCBwLmVkaXRlZCl9OyBcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKHVwZGF0ZWRQYWNrYWdlID0+IHVwZGF0ZWRQYWNrYWdlLnByb3BlcnRpZXMubGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoc2F2aW5nRmlsZS5wYWNrYWdlcy5sZW5ndGggPiAwKVxuICAgIHtcbiAgICAgIHRoaXMubWV0YWRhdGFTZXJ2aWNlLnNhdmVQcm9wZXJ0eShzYXZpbmdGaWxlKS5zdWJzY3JpYmUoKGxvYWRGaWxlOiBGaWxlRGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgdGhpcy5sb2FkUHJvcGVydGllcygpO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLk9wZXJhdGlvblN1Y2Nlc3MpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYW5NZXRhZGF0YSgpIHtcbiAgICB0aGlzLm1ldGFkYXRhU2VydmljZS5jbGVhbk1ldGFkYXRhKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRQcm9wZXJ0aWVzKCk7XG4gICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5PcGVyYXRpb25TdWNjZXNzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRQcm9wZXJ0aWVzKCkge1xuICAgIGlmICghdGhpcy5maWxlKSByZXR1cm47XG4gICAgdGhpcy5tZXRhZGF0YVNlcnZpY2UubG9hZFByb3BlcnRpZXModGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKChwYWNrYWdlczogUGFja2FnZU1vZGVsW10pID0+IHtcbiAgICAgIHRoaXMucGFja2FnZXMgPSBwYWNrYWdlcztcbiAgICB9KTtcblxuICAgIGlmICghdGhpcy5zaG93U2lkZVBhbmVsKSB7XG4gICAgICB0aGlzLnNob3dTaWRlUGFuZWwgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGhpZGVTaWRlUGFuZWwoJGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMuc2hvd1NpZGVQYW5lbCA9ICF0aGlzLnNob3dTaWRlUGFuZWw7XG4gIH1cblxuICByZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eUluZm86IFJlbW92ZVByb3BlcnR5TW9kZWwpIHtcbiAgICBpZiAodGhpcy5maWxlKSB7XG4gICAgICBjb25zdCBtZXRhZGF0YUZpbGUgPSBuZXcgTWV0YWRhdGFGaWxlRGVzY3JpcHRpb24oKTtcbiAgICAgIG1ldGFkYXRhRmlsZS5ndWlkID0gdGhpcy5maWxlLmd1aWQ7XG4gICAgICBtZXRhZGF0YUZpbGUucGFzc3dvcmQgPSB0aGlzLmNyZWRlbnRpYWxzLnBhc3N3b3JkO1xuICAgICAgbWV0YWRhdGFGaWxlLnBhY2thZ2VzID0gW3tpZDogcHJvcGVydHlJbmZvLnBhY2thZ2VJZCwgcHJvcGVydGllczogW3Byb3BlcnR5SW5mby5wcm9wZXJ0eV0gfV07XG4gICAgICB0aGlzLm1ldGFkYXRhU2VydmljZS5yZW1vdmVQcm9wZXJ0eShtZXRhZGF0YUZpbGUpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZFByb3BlcnRpZXMoKTtcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuT3BlcmF0aW9uU3VjY2Vzcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRQYWNrYWdlTmFtZShwYWNrYWdlSW5mbzogUGFja2FnZU1vZGVsKSB7XG4gICAgaWYgKHBhY2thZ2VJbmZvLm5hbWUgaW4gUGFja2FnZU5hbWVCeU9yaWdpbmFsTmFtZSkge1xuICAgICAgaWYocGFja2FnZUluZm8uaW5kZXggPj0gMCkge1xuICAgICAgICByZXR1cm4gUGFja2FnZU5hbWVCeU9yaWdpbmFsTmFtZVtwYWNrYWdlSW5mby5uYW1lXS5jb25jYXQoXCIgXCIsIChwYWNrYWdlSW5mby5pbmRleCArIDEpLnRvU3RyaW5nKDEwKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUGFja2FnZU5hbWVCeU9yaWdpbmFsTmFtZVtwYWNrYWdlSW5mby5uYW1lXTtcbiAgICB9XG5cbiAgICBpZiAocGFja2FnZUluZm8udHlwZSBpbiBQYWNrYWdlTmFtZUJ5TWV0YWRhdGFUeXBlKSB7XG4gICAgICByZXR1cm4gUGFja2FnZU5hbWVCeU1ldGFkYXRhVHlwZVtwYWNrYWdlSW5mby50eXBlXTtcbiAgICB9XG4gICAgcmV0dXJuIChNZXRhZGF0YVR5cGVbcGFja2FnZUluZm8udHlwZV0pLnRvU3RyaW5nKCk7XG4gIH1cblxuICBwcml2YXRlIHNhdmVCbG9iKGJsb2I6IEJsb2IsIGZpbGVOYW1lOiBzdHJpbmcsIG1pbWVUeXBlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXdCbG9iID0gbmV3IEJsb2IoW2Jsb2JdLCB7IHR5cGU6IG1pbWVUeXBlIH0pO1xuXG4gICAgLy8gSUVcbiAgICBpZiAod2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKG5ld0Jsb2IpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGRhdGEgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChuZXdCbG9iKTtcblxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluay5ocmVmID0gZGF0YTtcbiAgICBsaW5rLmRvd25sb2FkID0gZmlsZU5hbWU7XG4gICAgLy8gRmlyZWZveFxuICAgIGxpbmsuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudCgnY2xpY2snLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIHZpZXc6IHdpbmRvdyB9KSk7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTChkYXRhKTtcbiAgICAgICAgbGluay5yZW1vdmUoKTtcbiAgICB9LCAxMDApO1xuICB9XG59XG4iXX0=