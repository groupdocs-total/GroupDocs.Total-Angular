/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input, Component } from '@angular/core';
import { MetadataService, MetadataFileDescription } from "./metadata.service";
import { ModalService, ZoomService, UploadFilesService, NavigateService, PasswordService, CommonModals, LoadingMaskService } from "@groupdocs.examples.angular/common-components";
import { MetadataConfigService } from "./metadata-config.service";
import { WindowService, Api } from "@groupdocs.examples.angular/common-components";
import { PackageNameByMetadataType, PackageNameByOriginalName, MetadataType } from './metadata-models';
import { PreviewStatus } from './preview-status/preview-models';
export class MetadataAppComponent {
    /**
     * @param {?} metadataService
     * @param {?} modalService
     * @param {?} configService
     * @param {?} uploadFilesService
     * @param {?} navigateService
     * @param {?} zoomService
     * @param {?} passwordService
     * @param {?} loadingMaskService
     * @param {?} windowService
     */
    constructor(metadataService, modalService, configService, uploadFilesService, navigateService, zoomService, passwordService, loadingMaskService, windowService) {
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
    ngOnInit() {
        this.loadingMaskService.addStopUrl(Api.LOAD_DOCUMENT_DESCRIPTION);
        this.isDesktop = this.windowService.isDesktop();
        this.windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.isDesktop = this.windowService.isDesktop();
            this.refreshZoom();
        }));
        this.configService.updatedConfig.subscribe((/**
         * @param {?} metadataConfig
         * @return {?}
         */
        (metadataConfig) => {
            this.metadataConfig = metadataConfig;
        }));
        this.uploadFilesService.uploadsChange.subscribe((/**
         * @param {?} uploads
         * @return {?}
         */
        (uploads) => {
            if (uploads && uploads.length > 0) {
                this.metadataService.upload(uploads.item(0), '', this.metadataConfig.rewrite).subscribe((/**
                 * @param {?} obj
                 * @return {?}
                 */
                (obj) => {
                    this.fileWasDropped ? this.selectFile(obj.guid, '', '') : this.selectDir('');
                }));
            }
        }));
        this.passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        (pass) => {
            this.selectFile(this.credentials.guid, pass, CommonModals.PasswordRequired);
        }));
        if (this.metadataConfig.defaultDocument !== "") {
            this.isLoading = true;
            this.selectFile(this.metadataConfig.defaultDocument, "", "");
        }
        else if (this.initialFile) {
            this.isLoading = true;
            this.selectFile(this.initialFile, null, null);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.loadingMaskService
            .onLoadingChanged
            .subscribe((/**
         * @param {?} loading
         * @return {?}
         */
        (loading) => this.isLoading = loading));
        this.refreshZoom();
    }
    /**
     * @return {?}
     */
    get rewriteConfig() {
        return this.metadataConfig ? this.metadataConfig.rewrite : true;
    }
    /**
     * @return {?}
     */
    get downloadConfig() {
        return this.metadataConfig ? this.metadataConfig.download : true;
    }
    /**
     * @return {?}
     */
    get uploadConfig() {
        return this.metadataConfig ? this.metadataConfig.upload : true;
    }
    /**
     * @return {?}
     */
    get browseConfig() {
        return this.metadataConfig ? this.metadataConfig.browse : true;
    }
    /**
     * @param {?} id
     * @param {?} fileShouldBeLoaded
     * @return {?}
     */
    openModal(id, fileShouldBeLoaded) {
        if (fileShouldBeLoaded && !this.isFileLoaded())
            return;
        this.modalService.open(id);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectDir($event) {
        this.metadataService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        (files) => this.files = files || []));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    upload($event) {
        this.metadataService.upload(null, $event, this.rewriteConfig).subscribe((/**
         * @return {?}
         */
        () => {
            this.selectDir('');
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    fileDropped($event) {
        this.fileWasDropped = $event;
    }
    /**
     * @private
     * @param {?} pt
     * @return {?}
     */
    ptToPx(pt) {
        //pt * 96 / 72 = px.
        return pt * 96 / 72;
    }
    /**
     * @private
     * @return {?}
     */
    getFitToWidth() {
        // Images and Excel-related files receiving dimensions in px from server
        /** @type {?} */
        const pageWidth = this.ptToPx(this.pageWidth);
        /** @type {?} */
        const pageHeight = this.ptToPx(this.pageHeight);
        /** @type {?} */
        const offsetWidth = pageWidth ? pageWidth : window.innerWidth;
        return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / window.innerWidth) : Math.round(window.innerWidth * 100 / offsetWidth);
    }
    /**
     * @private
     * @return {?}
     */
    getFitToHeight() {
        /** @type {?} */
        const pageWidth = this.ptToPx(this.pageWidth);
        /** @type {?} */
        const pageHeight = this.ptToPx(this.pageHeight);
        /** @type {?} */
        const windowHeight = (pageHeight > pageWidth) ? window.innerHeight - 100 : window.innerHeight + 100;
        /** @type {?} */
        const offsetHeight = pageHeight ? pageHeight : windowHeight;
        return (pageHeight > pageWidth) ? Math.round(windowHeight * 100 / offsetHeight) : Math.round(offsetHeight * 100 / windowHeight);
    }
    /**
     * @return {?}
     */
    zoomOptions() {
        /** @type {?} */
        const width = this.getFitToWidth();
        /** @type {?} */
        const height = this.getFitToHeight();
        return this.zoomService.zoomOptions(width, height);
    }
    /**
     * @param {?} zoom
     * @return {?}
     */
    set zoom(zoom) {
        this.previewZoom = zoom;
        this.zoomService.changeZoom(this.previewZoom);
    }
    /**
     * @return {?}
     */
    get zoom() {
        return this.previewZoom;
    }
    /**
     * @private
     * @return {?}
     */
    refreshZoom() {
        this.zoom = this.windowService.isDesktop() ? 100 : this.getFitToWidth();
    }
    /**
     * @return {?}
     */
    downloadFile() {
        if (!this.isFileLoaded())
            return;
        window.location.assign(this.metadataService.getDownloadUrl(this.credentials));
    }
    /**
     * @return {?}
     */
    exportProperties() {
        if (!this.isFileLoaded())
            return;
        this.metadataService.exportProperties(this.credentials).subscribe((/**
         * @param {?} exportedFile
         * @return {?}
         */
        (exportedFile) => this.saveBlob(exportedFile, "ExportedProperties.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")));
    }
    /**
     * @return {?}
     */
    save() {
        /** @type {?} */
        const savingFile = new MetadataFileDescription();
        savingFile.guid = this.credentials.guid;
        savingFile.password = this.credentials.password;
        savingFile.packages = this.packages
            .map((/**
         * @param {?} updatedPackage
         * @return {?}
         */
        updatedPackage => {
            return { id: updatedPackage.id, properties: updatedPackage.properties.filter((/**
                 * @param {?} p
                 * @return {?}
                 */
                p => p.added || p.edited)) };
        }))
            .filter((/**
         * @param {?} updatedPackage
         * @return {?}
         */
        updatedPackage => updatedPackage.properties.length > 0));
        if (savingFile.packages.length > 0) {
            this.metadataService.saveProperty(savingFile).subscribe((/**
             * @return {?}
             */
            () => {
                this.loadProperties(false, true);
            }));
        }
    }
    /**
     * @return {?}
     */
    cleanMetadata() {
        this.metadataService.cleanMetadata(this.credentials).subscribe((/**
         * @return {?}
         */
        () => {
            this.loadProperties(false, true);
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    hideSidePanel($event) {
        this.showSidePanel = !this.showSidePanel;
    }
    /**
     * @param {?} propertyInfo
     * @return {?}
     */
    removeProperty(propertyInfo) {
        /** @type {?} */
        const metadataFile = new MetadataFileDescription();
        metadataFile.guid = this.credentials.guid;
        metadataFile.password = this.credentials.password;
        metadataFile.packages = [{ id: propertyInfo.packageId, properties: [propertyInfo.property] }];
        this.metadataService.removeProperty(metadataFile).subscribe((/**
         * @return {?}
         */
        () => {
            this.loadProperties(false, true);
        }));
    }
    /**
     * @param {?} packageInfo
     * @return {?}
     */
    getPackageName(packageInfo) {
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
    }
    /**
     * @param {?=} loadPreview
     * @param {?=} showSuccessModal
     * @return {?}
     */
    loadProperties(loadPreview = false, showSuccessModal = false) {
        this.metadataService.loadProperties(this.credentials).subscribe((/**
         * @param {?} packages
         * @return {?}
         */
        (packages) => {
            this.packages = packages;
            if (!this.showSidePanel) {
                this.showSidePanel = true;
            }
            if (loadPreview) {
                if (this.documentPreviewSubscription && !this.documentPreviewSubscription.closed) {
                    this.documentPreviewSubscription.unsubscribe();
                }
                this.preview = null;
                this.previewStatus = PreviewStatus.InProgress;
                this.documentPreviewSubscription = this.metadataService.loadFile(this.credentials).subscribe((/**
                 * @param {?} preview
                 * @return {?}
                 */
                (preview) => {
                    if (preview.pages && preview.pages.length > 0) {
                        this.preview = preview;
                        this.pageHeight = preview.pages[0].height;
                        this.pageWidth = preview.pages[0].width;
                        this.options = this.zoomOptions();
                        this.refreshZoom();
                        this.previewStatus = PreviewStatus.Loaded;
                    }
                    else {
                        if (preview.timeLimitExceeded) {
                            this.previewStatus = PreviewStatus.Timeout;
                        }
                        else {
                            this.previewStatus = PreviewStatus.Unavailable;
                        }
                    }
                    /** @type {?} */
                    const countPages = preview.pages ? preview.pages.length : 0;
                    this.navigateService.countPages = countPages;
                    this.navigateService.currentPage = 1;
                    this.countPages = countPages;
                }), (/**
                 * @return {?}
                 */
                () => { this.previewStatus = PreviewStatus.Unavailable; }));
            }
            if (showSuccessModal) {
                this.modalService.open(CommonModals.OperationSuccess);
            }
        }));
    }
    /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @return {?}
     */
    selectFile($event, password, modalId) {
        this.credentials = { guid: $event, password: password };
        this.loadProperties(true);
        if (modalId) {
            this.modalService.close(modalId);
        }
    }
    /**
     * @return {?}
     */
    isFileLoaded() {
        return this.packages != null && this.packages.length > 0;
    }
    /**
     * @return {?}
     */
    isPreviewLoaded() {
        return this.previewStatus !== PreviewStatus.Undefined;
    }
    /**
     * @private
     * @param {?} blob
     * @param {?} fileName
     * @param {?} mimeType
     * @return {?}
     */
    saveBlob(blob, fileName, mimeType) {
        /** @type {?} */
        const newBlob = new Blob([blob], { type: mimeType });
        // IE
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(newBlob);
            return;
        }
        /** @type {?} */
        const data = window.URL.createObjectURL(newBlob);
        /** @type {?} */
        const link = document.createElement('a');
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
    }
}
MetadataAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-metadata',
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\r\n<div class=\"wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"column\" [ngClass]=\"{'document-loaded': isFileLoaded()}\">\r\n      <div class=\"top-panel\">\r\n        <a class=\"logo-link\" [href]=\"returnUrl\"><gd-logo [logo]=\"'metadata'\" icon=\"clipboard-list\"></gd-logo></a>\r\n        <gd-top-toolbar class=\"toolbar-panel\">\r\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal, false)\"\r\n                    *ngIf=\"browseConfig\" ></gd-button>\r\n          <gd-button [disabled]=\"!isFileLoaded()\" [icon]=\"'trash'\" [tooltip]=\"'Clean Metadata'\" (click)=\"openModal(confirmCleanModalId, true)\">\r\n                    </gd-button>\r\n          <gd-button [disabled]=\"!isFileLoaded()\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"openModal(confirmSaveModalId, true)\">\r\n                    </gd-button>\r\n          <gd-button [hidden] =\"isDesktop\" [disabled]=\"!isFileLoaded()\" [icon]=\"'file-export'\" [tooltip]=\"'Attributes'\" (click)=\"loadProperties()\">\r\n                    </gd-button>\r\n          <gd-button [disabled]=\"!isFileLoaded()\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\r\n                    (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\r\n          <gd-button [disabled]=\"!isFileLoaded()\" [icon]=\"'file-excel'\" [tooltip]=\"'Export Properties'\"\r\n                    (click)=\"exportProperties()\" ></gd-button>\r\n        </gd-top-toolbar>\r\n      </div>\r\n      <gd-init-state [icon]=\"'clipboard-list'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!isFileLoaded() && uploadConfig && !isPreviewLoaded()\" (fileDropped)=\"fileDropped($event)\">\r\n        Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\r\n        Or drop file here\r\n      </gd-init-state>\r\n      <gd-preview-status [status]=\"previewStatus\"></gd-preview-status>\r\n      <div class=\"doc-panel\" *ngIf=\"preview\" #docPanel>\r\n        <gd-document class=\"gd-document\" *ngIf=\"preview\" [file]=\"preview\" [mode]=\"false\" gdScrollable\r\n                    [preloadPageCount]=\"metadataConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"false\"></gd-document>\r\n      </div>\r\n    </div>\r\n    <gd-side-panel *ngIf=\"isFileLoaded() && showSidePanel\"\r\n      (hideSidePanel)=\"hideSidePanel($event)\"\r\n      (saveInSidePanel)=\"save()\"\r\n      [closable]=\"isDesktop ? false : true\"\r\n      [saveable]=\"isDesktop ? false : true\"\r\n      [title]=\"'Metadata'\"\r\n      [icon]=\"'clipboard-list'\">\r\n      <gd-accordion>\r\n        <gd-accordion-group *ngFor=\"let package of packages\" [title]=\"getPackageName(package)\" [addDisabled]=\"false\" [addHidden]=\"false\" [properties]=\"package.properties\" [knownProperties]=\"package.knownProperties\" [packageId]=\"package.id\" (removeProperty)=\"removeProperty($event)\"></gd-accordion-group>\r\n      </gd-accordion>\r\n    </gd-side-panel>\r\n  </div>\r\n\r\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\r\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\r\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\r\n\r\n  <gd-error-modal></gd-error-modal>\r\n  <gd-password-required></gd-password-required>\r\n  <gd-success-modal></gd-success-modal>\r\n  <gd-confirm-modal [id]=\"confirmCleanModalId\" [text]=\"'Are you sure, you want to clean metadata in this file?'\" (confirm)=\"cleanMetadata()\"></gd-confirm-modal>\r\n  <gd-confirm-modal [id]=\"confirmSaveModalId\" [text]=\"'Do you want to save the changes?'\" (confirm)=\"save()\"></gd-confirm-modal>\r\n  \r\n</div>\r\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.logo-link{color:inherit;text-decoration:inherit}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}::ng-deep .tools .button{color:#fff!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .button.inactive{color:#959da5!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}.row{display:-webkit-box;display:flex}.column{width:100%;height:100vh;background-color:#e7e7e7;overflow:hidden}::ng-deep .gd-side-panel-body{background-color:#f4f4f4}::ng-deep .gd-side-panel-wrapper{width:464px!important}::ng-deep .page.excel{overflow:unset!important}@media (max-width:1037px){::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .gd-side-panel-wrapper{width:375px!important}}"]
            }] }
];
/** @nocollapse */
MetadataAppComponent.ctorParameters = () => [
    { type: MetadataService },
    { type: ModalService },
    { type: MetadataConfigService },
    { type: UploadFilesService },
    { type: NavigateService },
    { type: ZoomService },
    { type: PasswordService },
    { type: LoadingMaskService },
    { type: WindowService }
];
MetadataAppComponent.propDecorators = {
    initialFile: [{ type: Input }],
    returnUrl: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZXRhZGF0YS1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLEtBQUssRUFBRSxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFDLGVBQWUsRUFBRSx1QkFBdUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzVFLE9BQU8sRUFFTCxZQUFZLEVBQ1osV0FBVyxFQUNYLGtCQUFrQixFQUNsQixlQUFlLEVBQ2YsZUFBZSxFQUNFLFlBQVksRUFBRSxrQkFBa0IsRUFDbEQsTUFBTSwrQ0FBK0MsQ0FBQztBQUV2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ25GLE9BQU8sRUFBcUMseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUsWUFBWSxFQUFlLE1BQU0sbUJBQW1CLENBQUM7QUFFdkosT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBUWhFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7Ozs7OztJQXdCL0IsWUFBb0IsZUFBZ0MsRUFDaEMsWUFBMEIsRUFDMUIsYUFBb0MsRUFDcEMsa0JBQXNDLEVBQ3RDLGVBQWdDLEVBQ2hDLFdBQXdCLEVBQ3hCLGVBQWdDLEVBQ2hDLGtCQUFzQyxFQUN0QyxhQUE0QjtRQVI1QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBQ3BDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hD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O1lBSTFDLGFBQWE7OzswQkFZbkIsS0FBSzt3QkFDTCxLQUFLOzs7O0lBRE4sMkNBQTZCOztJQUM3Qix5Q0FBa0Q7O0lBQ2xELHFDQUFtQjs7SUFDbkIscUNBQXdCOztJQUN4Qix1Q0FBcUI7O0lBQ3JCLDhDQUErQjs7SUFDL0IsMENBQWU7O0lBQ2YsMkNBQTZCOztJQUM3QixnREFBNEM7O0lBQzVDLHlDQUFtQjs7SUFDbkIsMkNBQWtCOztJQUNsQix5Q0FBa0I7O0lBQ2xCLDBDQUFtQjs7SUFDbkIsdUNBQVE7O0lBQ1IsOENBQXVCOztJQUN2Qix3Q0FBZ0M7O0lBQ2hDLHlDQUFtQjs7SUFDbkIsNkNBQXFCOztJQUNyQixtREFBc0M7O0lBQ3RDLGtEQUFvQzs7SUFDcEMsNkNBQXVEOzs7OztJQUN2RCwyREFBa0Q7Ozs7O0lBRXRDLCtDQUF3Qzs7Ozs7SUFDeEMsNENBQWtDOzs7OztJQUNsQyw2Q0FBNEM7Ozs7O0lBQzVDLGtEQUE4Qzs7Ozs7SUFDOUMsK0NBQXdDOzs7OztJQUN4QywyQ0FBZ0M7Ozs7O0lBQ2hDLCtDQUF3Qzs7Ozs7SUFDeEMsa0RBQThDOzs7OztJQUM5Qyw2Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIElucHV0LCBDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWV0YWRhdGFTZXJ2aWNlLCBNZXRhZGF0YUZpbGVEZXNjcmlwdGlvbn0gZnJvbSBcIi4vbWV0YWRhdGEuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG4gIEZpbGVNb2RlbCxcclxuICBNb2RhbFNlcnZpY2UsXHJcbiAgWm9vbVNlcnZpY2UsXHJcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlLFxyXG4gIE5hdmlnYXRlU2VydmljZSxcclxuICBQYXNzd29yZFNlcnZpY2UsXHJcbiAgRmlsZUNyZWRlbnRpYWxzLCBDb21tb25Nb2RhbHMsIExvYWRpbmdNYXNrU2VydmljZVxyXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTWV0YWRhdGFDb25maWcgfSBmcm9tIFwiLi9tZXRhZGF0YS1jb25maWdcIjtcclxuaW1wb3J0IHsgTWV0YWRhdGFDb25maWdTZXJ2aWNlIH0gZnJvbSBcIi4vbWV0YWRhdGEtY29uZmlnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2luZG93U2VydmljZSwgQXBpIH0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBSZW1vdmVQcm9wZXJ0eU1vZGVsLCBQYWNrYWdlTW9kZWwsIFBhY2thZ2VOYW1lQnlNZXRhZGF0YVR5cGUsIFBhY2thZ2VOYW1lQnlPcmlnaW5hbE5hbWUsIE1ldGFkYXRhVHlwZSwgRmlsZVByZXZpZXcgfSBmcm9tICcuL21ldGFkYXRhLW1vZGVscyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBQcmV2aWV3U3RhdHVzIH0gZnJvbSAnLi9wcmV2aWV3LXN0YXR1cy9wcmV2aWV3LW1vZGVscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLW1ldGFkYXRhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWV0YWRhdGEtYXBwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tZXRhZGF0YS1hcHAuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBpbml0aWFsRmlsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJldHVyblVybDogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgdGl0bGUgPSAnbWV0YWRhdGEnO1xyXG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xyXG4gIHByZXZpZXc6IEZpbGVQcmV2aWV3O1xyXG4gIG1ldGFkYXRhQ29uZmlnOiBNZXRhZGF0YUNvbmZpZztcclxuICBjb3VudFBhZ2VzID0gMDtcclxuICBjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzO1xyXG4gIGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XHJcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG4gIHByZXZpZXdab29tID0gMTAwO1xyXG4gIHBhZ2VXaWR0aDogbnVtYmVyO1xyXG4gIHBhZ2VIZWlnaHQ6IG51bWJlcjtcclxuICBvcHRpb25zO1xyXG4gIGZpbGVXYXNEcm9wcGVkID0gZmFsc2U7XHJcbiAgcHVibGljIHBhY2thZ2VzOiBQYWNrYWdlTW9kZWxbXTtcclxuICBpc0Rlc2t0b3A6IGJvb2xlYW47XHJcbiAgc2hvd1NpZGVQYW5lbCA9IHRydWU7XHJcbiAgY29uZmlybUNsZWFuTW9kYWxJZCA9IFwiY29uZmlybS1jbGVhblwiO1xyXG4gIGNvbmZpcm1TYXZlTW9kYWxJZCA9IFwiY29uZmlybS1zYXZlXCI7XHJcbiAgcHJldmlld1N0YXR1czogUHJldmlld1N0YXR1cyA9IFByZXZpZXdTdGF0dXMuVW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgZG9jdW1lbnRQcmV2aWV3U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWV0YWRhdGFTZXJ2aWNlOiBNZXRhZGF0YVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IE1ldGFkYXRhQ29uZmlnU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHVwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSB6b29tU2VydmljZTogWm9vbVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGxvYWRpbmdNYXNrU2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgd2luZG93U2VydmljZTogV2luZG93U2VydmljZSkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5sb2FkaW5nTWFza1NlcnZpY2UuYWRkU3RvcFVybChBcGkuTE9BRF9ET0NVTUVOVF9ERVNDUklQVElPTik7XHJcbiAgICB0aGlzLmlzRGVza3RvcCA9IHRoaXMud2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcclxuICAgIHRoaXMud2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcclxuICAgICAgdGhpcy5pc0Rlc2t0b3AgPSB0aGlzLndpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XHJcbiAgICAgIHRoaXMucmVmcmVzaFpvb20oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29uZmlnU2VydmljZS51cGRhdGVkQ29uZmlnLnN1YnNjcmliZSgobWV0YWRhdGFDb25maWcpID0+IHtcclxuICAgICAgdGhpcy5tZXRhZGF0YUNvbmZpZyA9IG1ldGFkYXRhQ29uZmlnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51cGxvYWRGaWxlc1NlcnZpY2UudXBsb2Fkc0NoYW5nZS5zdWJzY3JpYmUoKHVwbG9hZHMpID0+IHtcclxuICAgICAgaWYgKHVwbG9hZHMgJiYgdXBsb2Fkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLm1ldGFkYXRhU2VydmljZS51cGxvYWQodXBsb2Fkcy5pdGVtKDApLCAnJywgdGhpcy5tZXRhZGF0YUNvbmZpZy5yZXdyaXRlKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPyB0aGlzLnNlbGVjdEZpbGUob2JqLmd1aWQsICcnLCAnJykgOiB0aGlzLnNlbGVjdERpcignJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5wYXNzd29yZFNlcnZpY2UucGFzc0NoYW5nZS5zdWJzY3JpYmUoKHBhc3M6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5jcmVkZW50aWFscy5ndWlkLCBwYXNzLCBDb21tb25Nb2RhbHMuUGFzc3dvcmRSZXF1aXJlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5tZXRhZGF0YUNvbmZpZy5kZWZhdWx0RG9jdW1lbnQgIT09IFwiXCIpe1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLm1ldGFkYXRhQ29uZmlnLmRlZmF1bHREb2N1bWVudCwgXCJcIiwgXCJcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmluaXRpYWxGaWxlKSB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuaW5pdGlhbEZpbGUsIG51bGwsIG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5sb2FkaW5nTWFza1NlcnZpY2VcclxuICAgIC5vbkxvYWRpbmdDaGFuZ2VkXHJcbiAgICAuc3Vic2NyaWJlKChsb2FkaW5nOiBib29sZWFuKSA9PiB0aGlzLmlzTG9hZGluZyA9IGxvYWRpbmcpO1xyXG5cclxuICAgIHRoaXMucmVmcmVzaFpvb20oKTtcclxuICB9XHJcblxyXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubWV0YWRhdGFDb25maWcgPyB0aGlzLm1ldGFkYXRhQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRvd25sb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubWV0YWRhdGFDb25maWcgPyB0aGlzLm1ldGFkYXRhQ29uZmlnLmRvd25sb2FkIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCB1cGxvYWRDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXRhZGF0YUNvbmZpZyA/IHRoaXMubWV0YWRhdGFDb25maWcudXBsb2FkIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBicm93c2VDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXRhZGF0YUNvbmZpZyA/IHRoaXMubWV0YWRhdGFDb25maWcuYnJvd3NlIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9wZW5Nb2RhbChpZDogc3RyaW5nLCBmaWxlU2hvdWxkQmVMb2FkZWQ6IGJvb2xlYW4pIHtcclxuICAgIGlmIChmaWxlU2hvdWxkQmVMb2FkZWQgJiYgIXRoaXMuaXNGaWxlTG9hZGVkKCkpIHJldHVybjtcclxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oaWQpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm1ldGFkYXRhU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBGaWxlTW9kZWxbXSkgPT4gdGhpcy5maWxlcyA9IGZpbGVzIHx8IFtdKTtcclxuICB9XHJcblxyXG4gIHVwbG9hZCgkZXZlbnQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5tZXRhZGF0YVNlcnZpY2UudXBsb2FkKG51bGwsICRldmVudCwgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNlbGVjdERpcignJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZpbGVEcm9wcGVkKCRldmVudCl7XHJcbiAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID0gJGV2ZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwdFRvUHgocHQ6IG51bWJlcikge1xyXG4gICAgLy9wdCAqIDk2IC8gNzIgPSBweC5cclxuICAgIHJldHVybiBwdCAqIDk2IC8gNzI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpdFRvV2lkdGgoKSB7XHJcbiAgICAvLyBJbWFnZXMgYW5kIEV4Y2VsLXJlbGF0ZWQgZmlsZXMgcmVjZWl2aW5nIGRpbWVuc2lvbnMgaW4gcHggZnJvbSBzZXJ2ZXJcclxuICAgIGNvbnN0IHBhZ2VXaWR0aCA9IHRoaXMucHRUb1B4KHRoaXMucGFnZVdpZHRoKTtcclxuICAgIGNvbnN0IHBhZ2VIZWlnaHQgPSB0aGlzLnB0VG9QeCh0aGlzLnBhZ2VIZWlnaHQpO1xyXG4gICAgY29uc3Qgb2Zmc2V0V2lkdGggPSBwYWdlV2lkdGggPyBwYWdlV2lkdGggOiB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgICByZXR1cm4gKHBhZ2VIZWlnaHQgPiBwYWdlV2lkdGggJiYgTWF0aC5yb3VuZChvZmZzZXRXaWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSA8IDIpID8gMjAwIC0gTWF0aC5yb3VuZChvZmZzZXRXaWR0aCAqIDEwMCAvIHdpbmRvdy5pbm5lcldpZHRoKSA6IE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggKiAxMDAgLyBvZmZzZXRXaWR0aCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpdFRvSGVpZ2h0KCkge1xyXG4gICAgY29uc3QgcGFnZVdpZHRoID0gdGhpcy5wdFRvUHgodGhpcy5wYWdlV2lkdGgpO1xyXG4gICAgY29uc3QgcGFnZUhlaWdodCA9IHRoaXMucHRUb1B4KHRoaXMucGFnZUhlaWdodCk7XHJcbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCkgPyB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMDAgOiB3aW5kb3cuaW5uZXJIZWlnaHQgKyAxMDA7XHJcbiAgICBjb25zdCBvZmZzZXRIZWlnaHQgPSBwYWdlSGVpZ2h0ID8gcGFnZUhlaWdodCA6IHdpbmRvd0hlaWdodDtcclxuXHJcbiAgICByZXR1cm4gKHBhZ2VIZWlnaHQgPiBwYWdlV2lkdGgpID8gTWF0aC5yb3VuZCh3aW5kb3dIZWlnaHQgKiAxMDAgLyBvZmZzZXRIZWlnaHQpIDogTWF0aC5yb3VuZChvZmZzZXRIZWlnaHQgKiAxMDAgLyB3aW5kb3dIZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgem9vbU9wdGlvbnMoKSB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0Rml0VG9XaWR0aCgpO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRGaXRUb0hlaWdodCgpO1xyXG4gICAgcmV0dXJuIHRoaXMuem9vbVNlcnZpY2Uuem9vbU9wdGlvbnMod2lkdGgsIGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBzZXQgem9vbSh6b29tKSB7XHJcbiAgICB0aGlzLnByZXZpZXdab29tID0gem9vbTtcclxuICAgIHRoaXMuem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLnByZXZpZXdab29tKTtcclxuICB9XHJcblxyXG4gIGdldCB6b29tKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJldmlld1pvb207XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZnJlc2hab29tKCkge1xyXG4gICAgdGhpcy56b29tID0gdGhpcy53aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpID8gMTAwIDogdGhpcy5nZXRGaXRUb1dpZHRoKCk7XHJcbiAgfVxyXG5cclxuICBkb3dubG9hZEZpbGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNGaWxlTG9hZGVkKCkpXHJcbiAgICAgIHJldHVybjtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odGhpcy5tZXRhZGF0YVNlcnZpY2UuZ2V0RG93bmxvYWRVcmwodGhpcy5jcmVkZW50aWFscykpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0UHJvcGVydGllcygpIHtcclxuICAgIGlmICghdGhpcy5pc0ZpbGVMb2FkZWQoKSkgcmV0dXJuO1xyXG4gICAgdGhpcy5tZXRhZGF0YVNlcnZpY2UuZXhwb3J0UHJvcGVydGllcyh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGV4cG9ydGVkRmlsZTogQmxvYikgPT4gXHJcbiAgICAgIHRoaXMuc2F2ZUJsb2IoZXhwb3J0ZWRGaWxlLCBcIkV4cG9ydGVkUHJvcGVydGllcy54bHN4XCIsIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXRcIikpOyBcclxuICB9XHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICBjb25zdCBzYXZpbmdGaWxlID0gbmV3IE1ldGFkYXRhRmlsZURlc2NyaXB0aW9uKCk7XHJcbiAgICBzYXZpbmdGaWxlLmd1aWQgPSB0aGlzLmNyZWRlbnRpYWxzLmd1aWQ7XHJcbiAgICBzYXZpbmdGaWxlLnBhc3N3b3JkID0gdGhpcy5jcmVkZW50aWFscy5wYXNzd29yZDtcclxuICAgIHNhdmluZ0ZpbGUucGFja2FnZXMgPSB0aGlzLnBhY2thZ2VzXHJcbiAgICAgIC5tYXAodXBkYXRlZFBhY2thZ2UgPT4geyBcclxuICAgICAgICByZXR1cm4geyBpZDogdXBkYXRlZFBhY2thZ2UuaWQsIHByb3BlcnRpZXM6IHVwZGF0ZWRQYWNrYWdlLnByb3BlcnRpZXMuZmlsdGVyKHAgPT4gcC5hZGRlZCB8fCBwLmVkaXRlZCl9OyBcclxuICAgICAgfSlcclxuICAgICAgLmZpbHRlcih1cGRhdGVkUGFja2FnZSA9PiB1cGRhdGVkUGFja2FnZS5wcm9wZXJ0aWVzLmxlbmd0aCA+IDApO1xyXG5cclxuICAgIGlmIChzYXZpbmdGaWxlLnBhY2thZ2VzLmxlbmd0aCA+IDApXHJcbiAgICB7XHJcbiAgICAgIHRoaXMubWV0YWRhdGFTZXJ2aWNlLnNhdmVQcm9wZXJ0eShzYXZpbmdGaWxlKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZFByb3BlcnRpZXMoZmFsc2UsIHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsZWFuTWV0YWRhdGEoKSB7XHJcbiAgICB0aGlzLm1ldGFkYXRhU2VydmljZS5jbGVhbk1ldGFkYXRhKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZFByb3BlcnRpZXMoZmFsc2UsIHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoaWRlU2lkZVBhbmVsKCRldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMuc2hvd1NpZGVQYW5lbCA9ICF0aGlzLnNob3dTaWRlUGFuZWw7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eUluZm86IFJlbW92ZVByb3BlcnR5TW9kZWwpIHtcclxuICAgICAgY29uc3QgbWV0YWRhdGFGaWxlID0gbmV3IE1ldGFkYXRhRmlsZURlc2NyaXB0aW9uKCk7XHJcbiAgICAgIG1ldGFkYXRhRmlsZS5ndWlkID0gdGhpcy5jcmVkZW50aWFscy5ndWlkO1xyXG4gICAgICBtZXRhZGF0YUZpbGUucGFzc3dvcmQgPSB0aGlzLmNyZWRlbnRpYWxzLnBhc3N3b3JkO1xyXG4gICAgICBtZXRhZGF0YUZpbGUucGFja2FnZXMgPSBbe2lkOiBwcm9wZXJ0eUluZm8ucGFja2FnZUlkLCBwcm9wZXJ0aWVzOiBbcHJvcGVydHlJbmZvLnByb3BlcnR5XSB9XTtcclxuICAgICAgdGhpcy5tZXRhZGF0YVNlcnZpY2UucmVtb3ZlUHJvcGVydHkobWV0YWRhdGFGaWxlKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZFByb3BlcnRpZXMoZmFsc2UsIHRydWUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFBhY2thZ2VOYW1lKHBhY2thZ2VJbmZvOiBQYWNrYWdlTW9kZWwpIHtcclxuICAgIGlmIChwYWNrYWdlSW5mby5uYW1lIGluIFBhY2thZ2VOYW1lQnlPcmlnaW5hbE5hbWUpIHtcclxuICAgICAgaWYocGFja2FnZUluZm8uaW5kZXggPj0gMCkge1xyXG4gICAgICAgIHJldHVybiBQYWNrYWdlTmFtZUJ5T3JpZ2luYWxOYW1lW3BhY2thZ2VJbmZvLm5hbWVdLmNvbmNhdChcIiBcIiwgKHBhY2thZ2VJbmZvLmluZGV4ICsgMSkudG9TdHJpbmcoMTApKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gUGFja2FnZU5hbWVCeU9yaWdpbmFsTmFtZVtwYWNrYWdlSW5mby5uYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFja2FnZUluZm8udHlwZSBpbiBQYWNrYWdlTmFtZUJ5TWV0YWRhdGFUeXBlKSB7XHJcbiAgICAgIHJldHVybiBQYWNrYWdlTmFtZUJ5TWV0YWRhdGFUeXBlW3BhY2thZ2VJbmZvLnR5cGVdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChNZXRhZGF0YVR5cGVbcGFja2FnZUluZm8udHlwZV0pLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkUHJvcGVydGllcyhsb2FkUHJldmlldzogYm9vbGVhbiA9IGZhbHNlLCBzaG93U3VjY2Vzc01vZGFsID0gZmFsc2UpIHtcclxuICAgIHRoaXMubWV0YWRhdGFTZXJ2aWNlLmxvYWRQcm9wZXJ0aWVzKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgocGFja2FnZXM6IFBhY2thZ2VNb2RlbFtdKSA9PiB7XHJcbiAgICAgIHRoaXMucGFja2FnZXMgPSBwYWNrYWdlcztcclxuICAgICAgaWYgKCF0aGlzLnNob3dTaWRlUGFuZWwpIHtcclxuICAgICAgICB0aGlzLnNob3dTaWRlUGFuZWwgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobG9hZFByZXZpZXcpIHtcclxuICAgICAgICBpZiAodGhpcy5kb2N1bWVudFByZXZpZXdTdWJzY3JpcHRpb24gJiYgIXRoaXMuZG9jdW1lbnRQcmV2aWV3U3Vic2NyaXB0aW9uLmNsb3NlZCkge1xyXG4gICAgICAgICAgdGhpcy5kb2N1bWVudFByZXZpZXdTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcmV2aWV3ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByZXZpZXdTdGF0dXMgPSBQcmV2aWV3U3RhdHVzLkluUHJvZ3Jlc3M7XHJcbiAgICAgICAgdGhpcy5kb2N1bWVudFByZXZpZXdTdWJzY3JpcHRpb24gPSB0aGlzLm1ldGFkYXRhU2VydmljZS5sb2FkRmlsZSh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKHByZXZpZXc6IEZpbGVQcmV2aWV3KSA9PiB7XHJcbiAgICAgICAgaWYgKHByZXZpZXcucGFnZXMgJiYgcHJldmlldy5wYWdlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLnByZXZpZXcgPSBwcmV2aWV3O1xyXG4gICAgICAgICAgdGhpcy5wYWdlSGVpZ2h0ID0gcHJldmlldy5wYWdlc1swXS5oZWlnaHQ7XHJcbiAgICAgICAgICB0aGlzLnBhZ2VXaWR0aCA9IHByZXZpZXcucGFnZXNbMF0ud2lkdGg7XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnpvb21PcHRpb25zKCk7XHJcbiAgICAgICAgICB0aGlzLnJlZnJlc2hab29tKCk7XHJcbiAgICAgICAgICB0aGlzLnByZXZpZXdTdGF0dXMgPSBQcmV2aWV3U3RhdHVzLkxvYWRlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBpZiAocHJldmlldy50aW1lTGltaXRFeGNlZWRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpZXdTdGF0dXMgPSBQcmV2aWV3U3RhdHVzLlRpbWVvdXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aWV3U3RhdHVzID0gUHJldmlld1N0YXR1cy5VbmF2YWlsYWJsZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvdW50UGFnZXMgPSBwcmV2aWV3LnBhZ2VzID8gcHJldmlldy5wYWdlcy5sZW5ndGggOiAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubmF2aWdhdGVTZXJ2aWNlLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xyXG4gICAgICAgIHRoaXMubmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gMTtcclxuICAgICAgICB0aGlzLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xyXG4gICAgICAgfSwgKCkgPT4geyB0aGlzLnByZXZpZXdTdGF0dXMgPSBQcmV2aWV3U3RhdHVzLlVuYXZhaWxhYmxlOyB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHNob3dTdWNjZXNzTW9kYWwpIHtcclxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5PcGVyYXRpb25TdWNjZXNzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBtb2RhbElkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSB7IGd1aWQ6ICRldmVudCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XHJcbiAgICB0aGlzLmxvYWRQcm9wZXJ0aWVzKHRydWUpO1xyXG4gICAgaWYgKG1vZGFsSWQpIHtcclxuICAgICAgdGhpcy5tb2RhbFNlcnZpY2UuY2xvc2UobW9kYWxJZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0ZpbGVMb2FkZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWNrYWdlcyAhPSBudWxsICYmIHRoaXMucGFja2FnZXMubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIGlzUHJldmlld0xvYWRlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnByZXZpZXdTdGF0dXMgIT09IFByZXZpZXdTdGF0dXMuVW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzYXZlQmxvYihibG9iOiBCbG9iLCBmaWxlTmFtZTogc3RyaW5nLCBtaW1lVHlwZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBuZXdCbG9iID0gbmV3IEJsb2IoW2Jsb2JdLCB7IHR5cGU6IG1pbWVUeXBlIH0pO1xyXG5cclxuICAgIC8vIElFXHJcbiAgICBpZiAod2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcclxuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IobmV3QmxvYik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBkYXRhID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwobmV3QmxvYik7XHJcblxyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGxpbmsuaHJlZiA9IGRhdGE7XHJcbiAgICBsaW5rLmRvd25sb2FkID0gZmlsZU5hbWU7XHJcbiAgICAvLyBGaXJlZm94XHJcbiAgICBsaW5rLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlLCB2aWV3OiB3aW5kb3cgfSkpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEZpcmVmb3hcclxuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTChkYXRhKTtcclxuICAgICAgICBsaW5rLnJlbW92ZSgpO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcbn1cclxuIl19