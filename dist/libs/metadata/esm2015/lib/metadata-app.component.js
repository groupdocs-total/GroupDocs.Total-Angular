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
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"column\" [ngClass]=\"{'document-loaded': isFileLoaded()}\">\n      <div class=\"top-panel\">\n        <a class=\"logo-link\" [href]=\"returnUrl\"><gd-logo [logo]=\"'metadata'\" icon=\"clipboard-list\"></gd-logo></a>\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal, false)\"\n                    *ngIf=\"browseConfig\" ></gd-button>\n          <gd-button [disabled]=\"!isFileLoaded()\" [icon]=\"'trash'\" [tooltip]=\"'Clean Metadata'\" (click)=\"openModal(confirmCleanModalId, true)\">\n                    </gd-button>\n          <gd-button [disabled]=\"!isFileLoaded()\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"openModal(confirmSaveModalId, true)\">\n                    </gd-button>\n          <gd-button [hidden] =\"isDesktop\" [disabled]=\"!isFileLoaded()\" [icon]=\"'file-export'\" [tooltip]=\"'Attributes'\" (click)=\"loadProperties()\">\n                    </gd-button>\n          <gd-button [disabled]=\"!isFileLoaded()\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                    (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n          <gd-button [disabled]=\"!isFileLoaded()\" [icon]=\"'file-excel'\" [tooltip]=\"'Export Properties'\"\n                    (click)=\"exportProperties()\" ></gd-button>\n        </gd-top-toolbar>\n      </div>\n      <gd-init-state [icon]=\"'clipboard-list'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!isFileLoaded() && uploadConfig && !isPreviewLoaded()\" (fileDropped)=\"fileDropped($event)\">\n        Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n        Or drop file here\n      </gd-init-state>\n      <gd-preview-status [status]=\"previewStatus\"></gd-preview-status>\n      <div class=\"doc-panel\" *ngIf=\"preview\" #docPanel>\n        <gd-document class=\"gd-document\" *ngIf=\"preview\" [file]=\"preview\" [mode]=\"false\" gdScrollable\n                    [preloadPageCount]=\"metadataConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"false\"></gd-document>\n      </div>\n    </div>\n    <gd-side-panel *ngIf=\"isFileLoaded() && showSidePanel\"\n      (hideSidePanel)=\"hideSidePanel($event)\"\n      (saveInSidePanel)=\"save()\"\n      [closable]=\"isDesktop ? false : true\"\n      [saveable]=\"isDesktop ? false : true\"\n      [title]=\"'Metadata'\"\n      [icon]=\"'clipboard-list'\">\n      <gd-accordion>\n        <gd-accordion-group *ngFor=\"let package of packages\" [title]=\"getPackageName(package)\" [addDisabled]=\"false\" [addHidden]=\"false\" [properties]=\"package.properties\" [knownProperties]=\"package.knownProperties\" [packageId]=\"package.id\" (removeProperty)=\"removeProperty($event)\"></gd-accordion-group>\n      </gd-accordion>\n    </gd-side-panel>\n  </div>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n  <gd-confirm-modal [id]=\"confirmCleanModalId\" [text]=\"'Are you sure, you want to clean metadata in this file?'\" (confirm)=\"cleanMetadata()\"></gd-confirm-modal>\n  <gd-confirm-modal [id]=\"confirmSaveModalId\" [text]=\"'Do you want to save the changes?'\" (confirm)=\"save()\"></gd-confirm-modal>\n  \n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZXRhZGF0YS1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLEtBQUssRUFBRSxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFDLGVBQWUsRUFBRSx1QkFBdUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzVFLE9BQU8sRUFFTCxZQUFZLEVBQ1osV0FBVyxFQUNYLGtCQUFrQixFQUNsQixlQUFlLEVBQ2YsZUFBZSxFQUNFLFlBQVksRUFBRSxrQkFBa0IsRUFDbEQsTUFBTSwrQ0FBK0MsQ0FBQztBQUV2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ25GLE9BQU8sRUFBcUMseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUsWUFBWSxFQUFlLE1BQU0sbUJBQW1CLENBQUM7QUFFdkosT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBUWhFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7Ozs7OztJQXdCL0IsWUFBb0IsZUFBZ0MsRUFDaEMsWUFBMEIsRUFDMUIsYUFBb0MsRUFDcEMsa0JBQXNDLEVBQ3RDLGVBQWdDLEVBQ2hDLFdBQXdCLEVBQ3hCLGVBQWdDLEVBQ2hDLGtCQUFzQyxFQUN0QyxhQUE0QjtRQVI1QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBQ3BDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hD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O1lBSTFDLGFBQWE7OzswQkFZbkIsS0FBSzt3QkFDTCxLQUFLOzs7O0lBRE4sMkNBQTZCOztJQUM3Qix5Q0FBa0Q7O0lBQ2xELHFDQUFtQjs7SUFDbkIscUNBQXdCOztJQUN4Qix1Q0FBcUI7O0lBQ3JCLDhDQUErQjs7SUFDL0IsMENBQWU7O0lBQ2YsMkNBQTZCOztJQUM3QixnREFBNEM7O0lBQzVDLHlDQUFtQjs7SUFDbkIsMkNBQWtCOztJQUNsQix5Q0FBa0I7O0lBQ2xCLDBDQUFtQjs7SUFDbkIsdUNBQVE7O0lBQ1IsOENBQXVCOztJQUN2Qix3Q0FBZ0M7O0lBQ2hDLHlDQUFtQjs7SUFDbkIsNkNBQXFCOztJQUNyQixtREFBc0M7O0lBQ3RDLGtEQUFvQzs7SUFDcEMsNkNBQXVEOzs7OztJQUN2RCwyREFBa0Q7Ozs7O0lBRXRDLCtDQUF3Qzs7Ozs7SUFDeEMsNENBQWtDOzs7OztJQUNsQyw2Q0FBNEM7Ozs7O0lBQzVDLGtEQUE4Qzs7Ozs7SUFDOUMsK0NBQXdDOzs7OztJQUN4QywyQ0FBZ0M7Ozs7O0lBQ2hDLCtDQUF3Qzs7Ozs7SUFDeEMsa0RBQThDOzs7OztJQUM5Qyw2Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIElucHV0LCBDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01ldGFkYXRhU2VydmljZSwgTWV0YWRhdGFGaWxlRGVzY3JpcHRpb259IGZyb20gXCIuL21ldGFkYXRhLnNlcnZpY2VcIjtcbmltcG9ydCB7XG4gIEZpbGVNb2RlbCxcbiAgTW9kYWxTZXJ2aWNlLFxuICBab29tU2VydmljZSxcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICBOYXZpZ2F0ZVNlcnZpY2UsXG4gIFBhc3N3b3JkU2VydmljZSxcbiAgRmlsZUNyZWRlbnRpYWxzLCBDb21tb25Nb2RhbHMsIExvYWRpbmdNYXNrU2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBNZXRhZGF0YUNvbmZpZyB9IGZyb20gXCIuL21ldGFkYXRhLWNvbmZpZ1wiO1xuaW1wb3J0IHsgTWV0YWRhdGFDb25maWdTZXJ2aWNlIH0gZnJvbSBcIi4vbWV0YWRhdGEtY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UsIEFwaSB9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFJlbW92ZVByb3BlcnR5TW9kZWwsIFBhY2thZ2VNb2RlbCwgUGFja2FnZU5hbWVCeU1ldGFkYXRhVHlwZSwgUGFja2FnZU5hbWVCeU9yaWdpbmFsTmFtZSwgTWV0YWRhdGFUeXBlLCBGaWxlUHJldmlldyB9IGZyb20gJy4vbWV0YWRhdGEtbW9kZWxzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJldmlld1N0YXR1cyB9IGZyb20gJy4vcHJldmlldy1zdGF0dXMvcHJldmlldy1tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1tZXRhZGF0YScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXRhZGF0YS1hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZXRhZGF0YS1hcHAuY29tcG9uZW50Lmxlc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgaW5pdGlhbEZpbGU6IHN0cmluZztcbiAgQElucHV0KCkgcmV0dXJuVXJsOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgdGl0bGUgPSAnbWV0YWRhdGEnO1xuICBmaWxlczogRmlsZU1vZGVsW10gPSBbXTtcbiAgcHJldmlldzogRmlsZVByZXZpZXc7XG4gIG1ldGFkYXRhQ29uZmlnOiBNZXRhZGF0YUNvbmZpZztcbiAgY291bnRQYWdlcyA9IDA7XG4gIGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHM7XG4gIGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgcHJldmlld1pvb20gPSAxMDA7XG4gIHBhZ2VXaWR0aDogbnVtYmVyO1xuICBwYWdlSGVpZ2h0OiBudW1iZXI7XG4gIG9wdGlvbnM7XG4gIGZpbGVXYXNEcm9wcGVkID0gZmFsc2U7XG4gIHB1YmxpYyBwYWNrYWdlczogUGFja2FnZU1vZGVsW107XG4gIGlzRGVza3RvcDogYm9vbGVhbjtcbiAgc2hvd1NpZGVQYW5lbCA9IHRydWU7XG4gIGNvbmZpcm1DbGVhbk1vZGFsSWQgPSBcImNvbmZpcm0tY2xlYW5cIjtcbiAgY29uZmlybVNhdmVNb2RhbElkID0gXCJjb25maXJtLXNhdmVcIjtcbiAgcHJldmlld1N0YXR1czogUHJldmlld1N0YXR1cyA9IFByZXZpZXdTdGF0dXMuVW5kZWZpbmVkO1xuICBwcml2YXRlIGRvY3VtZW50UHJldmlld1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWV0YWRhdGFTZXJ2aWNlOiBNZXRhZGF0YVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY29uZmlnU2VydmljZTogTWV0YWRhdGFDb25maWdTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHVwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIG5hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHpvb21TZXJ2aWNlOiBab29tU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsb2FkaW5nTWFza1NlcnZpY2U6IExvYWRpbmdNYXNrU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB3aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZGluZ01hc2tTZXJ2aWNlLmFkZFN0b3BVcmwoQXBpLkxPQURfRE9DVU1FTlRfREVTQ1JJUFRJT04pO1xuICAgIHRoaXMuaXNEZXNrdG9wID0gdGhpcy53aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIHRoaXMud2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gdGhpcy53aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb25maWdTZXJ2aWNlLnVwZGF0ZWRDb25maWcuc3Vic2NyaWJlKChtZXRhZGF0YUNvbmZpZykgPT4ge1xuICAgICAgdGhpcy5tZXRhZGF0YUNvbmZpZyA9IG1ldGFkYXRhQ29uZmlnO1xuICAgIH0pO1xuXG4gICAgdGhpcy51cGxvYWRGaWxlc1NlcnZpY2UudXBsb2Fkc0NoYW5nZS5zdWJzY3JpYmUoKHVwbG9hZHMpID0+IHtcbiAgICAgIGlmICh1cGxvYWRzICYmIHVwbG9hZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMubWV0YWRhdGFTZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oMCksICcnLCB0aGlzLm1ldGFkYXRhQ29uZmlnLnJld3JpdGUpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPyB0aGlzLnNlbGVjdEZpbGUob2JqLmd1aWQsICcnLCAnJykgOiB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnBhc3N3b3JkU2VydmljZS5wYXNzQ2hhbmdlLnN1YnNjcmliZSgocGFzczogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5jcmVkZW50aWFscy5ndWlkLCBwYXNzLCBDb21tb25Nb2RhbHMuUGFzc3dvcmRSZXF1aXJlZCk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5tZXRhZGF0YUNvbmZpZy5kZWZhdWx0RG9jdW1lbnQgIT09IFwiXCIpe1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMubWV0YWRhdGFDb25maWcuZGVmYXVsdERvY3VtZW50LCBcIlwiLCBcIlwiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5pbml0aWFsRmlsZSkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuaW5pdGlhbEZpbGUsIG51bGwsIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmxvYWRpbmdNYXNrU2VydmljZVxuICAgIC5vbkxvYWRpbmdDaGFuZ2VkXG4gICAgLnN1YnNjcmliZSgobG9hZGluZzogYm9vbGVhbikgPT4gdGhpcy5pc0xvYWRpbmcgPSBsb2FkaW5nKTtcblxuICAgIHRoaXMucmVmcmVzaFpvb20oKTtcbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1ldGFkYXRhQ29uZmlnID8gdGhpcy5tZXRhZGF0YUNvbmZpZy5yZXdyaXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBkb3dubG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhZGF0YUNvbmZpZyA/IHRoaXMubWV0YWRhdGFDb25maWcuZG93bmxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhZGF0YUNvbmZpZyA/IHRoaXMubWV0YWRhdGFDb25maWcudXBsb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBicm93c2VDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWV0YWRhdGFDb25maWcgPyB0aGlzLm1ldGFkYXRhQ29uZmlnLmJyb3dzZSA6IHRydWU7XG4gIH1cblxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZywgZmlsZVNob3VsZEJlTG9hZGVkOiBib29sZWFuKSB7XG4gICAgaWYgKGZpbGVTaG91bGRCZUxvYWRlZCAmJiAhdGhpcy5pc0ZpbGVMb2FkZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oaWQpO1xuICB9XG5cbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5tZXRhZGF0YVNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRmlsZU1vZGVsW10pID0+IHRoaXMuZmlsZXMgPSBmaWxlcyB8fCBbXSk7XG4gIH1cblxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLm1ldGFkYXRhU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgfSk7XG4gIH1cblxuICBmaWxlRHJvcHBlZCgkZXZlbnQpe1xuICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPSAkZXZlbnQ7XG4gIH1cblxuICBwcml2YXRlIHB0VG9QeChwdDogbnVtYmVyKSB7XG4gICAgLy9wdCAqIDk2IC8gNzIgPSBweC5cbiAgICByZXR1cm4gcHQgKiA5NiAvIDcyO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaXRUb1dpZHRoKCkge1xuICAgIC8vIEltYWdlcyBhbmQgRXhjZWwtcmVsYXRlZCBmaWxlcyByZWNlaXZpbmcgZGltZW5zaW9ucyBpbiBweCBmcm9tIHNlcnZlclxuICAgIGNvbnN0IHBhZ2VXaWR0aCA9IHRoaXMucHRUb1B4KHRoaXMucGFnZVdpZHRoKTtcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5wdFRvUHgodGhpcy5wYWdlSGVpZ2h0KTtcbiAgICBjb25zdCBvZmZzZXRXaWR0aCA9IHBhZ2VXaWR0aCA/IHBhZ2VXaWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgcmV0dXJuIChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoICYmIE1hdGgucm91bmQob2Zmc2V0V2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgPCAyKSA/IDIwMCAtIE1hdGgucm91bmQob2Zmc2V0V2lkdGggKiAxMDAgLyB3aW5kb3cuaW5uZXJXaWR0aCkgOiBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lcldpZHRoICogMTAwIC8gb2Zmc2V0V2lkdGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaXRUb0hlaWdodCgpIHtcbiAgICBjb25zdCBwYWdlV2lkdGggPSB0aGlzLnB0VG9QeCh0aGlzLnBhZ2VXaWR0aCk7XG4gICAgY29uc3QgcGFnZUhlaWdodCA9IHRoaXMucHRUb1B4KHRoaXMucGFnZUhlaWdodCk7XG4gICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gKHBhZ2VIZWlnaHQgPiBwYWdlV2lkdGgpID8gd2luZG93LmlubmVySGVpZ2h0IC0gMTAwIDogd2luZG93LmlubmVySGVpZ2h0ICsgMTAwO1xuICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IHBhZ2VIZWlnaHQgPyBwYWdlSGVpZ2h0IDogd2luZG93SGVpZ2h0O1xuXG4gICAgcmV0dXJuIChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoKSA/IE1hdGgucm91bmQod2luZG93SGVpZ2h0ICogMTAwIC8gb2Zmc2V0SGVpZ2h0KSA6IE1hdGgucm91bmQob2Zmc2V0SGVpZ2h0ICogMTAwIC8gd2luZG93SGVpZ2h0KTtcbiAgfVxuXG4gIHpvb21PcHRpb25zKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRGaXRUb1dpZHRoKCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRGaXRUb0hlaWdodCgpO1xuICAgIHJldHVybiB0aGlzLnpvb21TZXJ2aWNlLnpvb21PcHRpb25zKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgc2V0IHpvb20oem9vbSkge1xuICAgIHRoaXMucHJldmlld1pvb20gPSB6b29tO1xuICAgIHRoaXMuem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLnByZXZpZXdab29tKTtcbiAgfVxuXG4gIGdldCB6b29tKCkge1xuICAgIHJldHVybiB0aGlzLnByZXZpZXdab29tO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoWm9vbSgpIHtcbiAgICB0aGlzLnpvb20gPSB0aGlzLndpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCkgPyAxMDAgOiB0aGlzLmdldEZpdFRvV2lkdGgoKTtcbiAgfVxuXG4gIGRvd25sb2FkRmlsZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNGaWxlTG9hZGVkKCkpXG4gICAgICByZXR1cm47XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLm1ldGFkYXRhU2VydmljZS5nZXREb3dubG9hZFVybCh0aGlzLmNyZWRlbnRpYWxzKSk7XG4gIH1cblxuICBleHBvcnRQcm9wZXJ0aWVzKCkge1xuICAgIGlmICghdGhpcy5pc0ZpbGVMb2FkZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMubWV0YWRhdGFTZXJ2aWNlLmV4cG9ydFByb3BlcnRpZXModGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKChleHBvcnRlZEZpbGU6IEJsb2IpID0+IFxuICAgICAgdGhpcy5zYXZlQmxvYihleHBvcnRlZEZpbGUsIFwiRXhwb3J0ZWRQcm9wZXJ0aWVzLnhsc3hcIiwgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldFwiKSk7IFxuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBjb25zdCBzYXZpbmdGaWxlID0gbmV3IE1ldGFkYXRhRmlsZURlc2NyaXB0aW9uKCk7XG4gICAgc2F2aW5nRmlsZS5ndWlkID0gdGhpcy5jcmVkZW50aWFscy5ndWlkO1xuICAgIHNhdmluZ0ZpbGUucGFzc3dvcmQgPSB0aGlzLmNyZWRlbnRpYWxzLnBhc3N3b3JkO1xuICAgIHNhdmluZ0ZpbGUucGFja2FnZXMgPSB0aGlzLnBhY2thZ2VzXG4gICAgICAubWFwKHVwZGF0ZWRQYWNrYWdlID0+IHsgXG4gICAgICAgIHJldHVybiB7IGlkOiB1cGRhdGVkUGFja2FnZS5pZCwgcHJvcGVydGllczogdXBkYXRlZFBhY2thZ2UucHJvcGVydGllcy5maWx0ZXIocCA9PiBwLmFkZGVkIHx8IHAuZWRpdGVkKX07IFxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIodXBkYXRlZFBhY2thZ2UgPT4gdXBkYXRlZFBhY2thZ2UucHJvcGVydGllcy5sZW5ndGggPiAwKTtcblxuICAgIGlmIChzYXZpbmdGaWxlLnBhY2thZ2VzLmxlbmd0aCA+IDApXG4gICAge1xuICAgICAgdGhpcy5tZXRhZGF0YVNlcnZpY2Uuc2F2ZVByb3BlcnR5KHNhdmluZ0ZpbGUpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZFByb3BlcnRpZXMoZmFsc2UsIHRydWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYW5NZXRhZGF0YSgpIHtcbiAgICB0aGlzLm1ldGFkYXRhU2VydmljZS5jbGVhbk1ldGFkYXRhKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRQcm9wZXJ0aWVzKGZhbHNlLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGhpZGVTaWRlUGFuZWwoJGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMuc2hvd1NpZGVQYW5lbCA9ICF0aGlzLnNob3dTaWRlUGFuZWw7XG4gIH1cblxuICByZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eUluZm86IFJlbW92ZVByb3BlcnR5TW9kZWwpIHtcbiAgICAgIGNvbnN0IG1ldGFkYXRhRmlsZSA9IG5ldyBNZXRhZGF0YUZpbGVEZXNjcmlwdGlvbigpO1xuICAgICAgbWV0YWRhdGFGaWxlLmd1aWQgPSB0aGlzLmNyZWRlbnRpYWxzLmd1aWQ7XG4gICAgICBtZXRhZGF0YUZpbGUucGFzc3dvcmQgPSB0aGlzLmNyZWRlbnRpYWxzLnBhc3N3b3JkO1xuICAgICAgbWV0YWRhdGFGaWxlLnBhY2thZ2VzID0gW3tpZDogcHJvcGVydHlJbmZvLnBhY2thZ2VJZCwgcHJvcGVydGllczogW3Byb3BlcnR5SW5mby5wcm9wZXJ0eV0gfV07XG4gICAgICB0aGlzLm1ldGFkYXRhU2VydmljZS5yZW1vdmVQcm9wZXJ0eShtZXRhZGF0YUZpbGUpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZFByb3BlcnRpZXMoZmFsc2UsIHRydWUpO1xuICAgICAgfSk7XG4gIH1cblxuICBnZXRQYWNrYWdlTmFtZShwYWNrYWdlSW5mbzogUGFja2FnZU1vZGVsKSB7XG4gICAgaWYgKHBhY2thZ2VJbmZvLm5hbWUgaW4gUGFja2FnZU5hbWVCeU9yaWdpbmFsTmFtZSkge1xuICAgICAgaWYocGFja2FnZUluZm8uaW5kZXggPj0gMCkge1xuICAgICAgICByZXR1cm4gUGFja2FnZU5hbWVCeU9yaWdpbmFsTmFtZVtwYWNrYWdlSW5mby5uYW1lXS5jb25jYXQoXCIgXCIsIChwYWNrYWdlSW5mby5pbmRleCArIDEpLnRvU3RyaW5nKDEwKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUGFja2FnZU5hbWVCeU9yaWdpbmFsTmFtZVtwYWNrYWdlSW5mby5uYW1lXTtcbiAgICB9XG5cbiAgICBpZiAocGFja2FnZUluZm8udHlwZSBpbiBQYWNrYWdlTmFtZUJ5TWV0YWRhdGFUeXBlKSB7XG4gICAgICByZXR1cm4gUGFja2FnZU5hbWVCeU1ldGFkYXRhVHlwZVtwYWNrYWdlSW5mby50eXBlXTtcbiAgICB9XG4gICAgcmV0dXJuIChNZXRhZGF0YVR5cGVbcGFja2FnZUluZm8udHlwZV0pLnRvU3RyaW5nKCk7XG4gIH1cblxuICBsb2FkUHJvcGVydGllcyhsb2FkUHJldmlldzogYm9vbGVhbiA9IGZhbHNlLCBzaG93U3VjY2Vzc01vZGFsID0gZmFsc2UpIHtcbiAgICB0aGlzLm1ldGFkYXRhU2VydmljZS5sb2FkUHJvcGVydGllcyh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKHBhY2thZ2VzOiBQYWNrYWdlTW9kZWxbXSkgPT4ge1xuICAgICAgdGhpcy5wYWNrYWdlcyA9IHBhY2thZ2VzO1xuICAgICAgaWYgKCF0aGlzLnNob3dTaWRlUGFuZWwpIHtcbiAgICAgICAgdGhpcy5zaG93U2lkZVBhbmVsID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxvYWRQcmV2aWV3KSB7XG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50UHJldmlld1N1YnNjcmlwdGlvbiAmJiAhdGhpcy5kb2N1bWVudFByZXZpZXdTdWJzY3JpcHRpb24uY2xvc2VkKSB7XG4gICAgICAgICAgdGhpcy5kb2N1bWVudFByZXZpZXdTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXZpZXcgPSBudWxsO1xuICAgICAgICB0aGlzLnByZXZpZXdTdGF0dXMgPSBQcmV2aWV3U3RhdHVzLkluUHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMuZG9jdW1lbnRQcmV2aWV3U3Vic2NyaXB0aW9uID0gdGhpcy5tZXRhZGF0YVNlcnZpY2UubG9hZEZpbGUodGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKChwcmV2aWV3OiBGaWxlUHJldmlldykgPT4ge1xuICAgICAgICBpZiAocHJldmlldy5wYWdlcyAmJiBwcmV2aWV3LnBhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLnByZXZpZXcgPSBwcmV2aWV3O1xuICAgICAgICAgIHRoaXMucGFnZUhlaWdodCA9IHByZXZpZXcucGFnZXNbMF0uaGVpZ2h0O1xuICAgICAgICAgIHRoaXMucGFnZVdpZHRoID0gcHJldmlldy5wYWdlc1swXS53aWR0aDtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnpvb21PcHRpb25zKCk7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xuICAgICAgICAgIHRoaXMucHJldmlld1N0YXR1cyA9IFByZXZpZXdTdGF0dXMuTG9hZGVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmIChwcmV2aWV3LnRpbWVMaW1pdEV4Y2VlZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpZXdTdGF0dXMgPSBQcmV2aWV3U3RhdHVzLlRpbWVvdXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3U3RhdHVzID0gUHJldmlld1N0YXR1cy5VbmF2YWlsYWJsZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb3VudFBhZ2VzID0gcHJldmlldy5wYWdlcyA/IHByZXZpZXcucGFnZXMubGVuZ3RoIDogMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubmF2aWdhdGVTZXJ2aWNlLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xuICAgICAgICB0aGlzLm5hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9IDE7XG4gICAgICAgIHRoaXMuY291bnRQYWdlcyA9IGNvdW50UGFnZXM7XG4gICAgICAgfSwgKCkgPT4geyB0aGlzLnByZXZpZXdTdGF0dXMgPSBQcmV2aWV3U3RhdHVzLlVuYXZhaWxhYmxlOyB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNob3dTdWNjZXNzTW9kYWwpIHtcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuT3BlcmF0aW9uU3VjY2Vzcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBtb2RhbElkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0geyBndWlkOiAkZXZlbnQsIHBhc3N3b3JkOiBwYXNzd29yZCB9O1xuICAgIHRoaXMubG9hZFByb3BlcnRpZXModHJ1ZSk7XG4gICAgaWYgKG1vZGFsSWQpIHtcbiAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLmNsb3NlKG1vZGFsSWQpO1xuICAgIH1cbiAgfVxuXG4gIGlzRmlsZUxvYWRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYWNrYWdlcyAhPSBudWxsICYmIHRoaXMucGFja2FnZXMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGlzUHJldmlld0xvYWRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmV2aWV3U3RhdHVzICE9PSBQcmV2aWV3U3RhdHVzLlVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgc2F2ZUJsb2IoYmxvYjogQmxvYiwgZmlsZU5hbWU6IHN0cmluZywgbWltZVR5cGU6IHN0cmluZykge1xuICAgIGNvbnN0IG5ld0Jsb2IgPSBuZXcgQmxvYihbYmxvYl0sIHsgdHlwZTogbWltZVR5cGUgfSk7XG5cbiAgICAvLyBJRVxuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IobmV3QmxvYik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZGF0YSA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG5ld0Jsb2IpO1xuXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rLmhyZWYgPSBkYXRhO1xuICAgIGxpbmsuZG93bmxvYWQgPSBmaWxlTmFtZTtcbiAgICAvLyBGaXJlZm94XG4gICAgbGluay5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KCdjbGljaycsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSwgdmlldzogd2luZG93IH0pKTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKGRhdGEpO1xuICAgICAgICBsaW5rLnJlbW92ZSgpO1xuICAgIH0sIDEwMCk7XG4gIH1cbn1cbiJdfQ==