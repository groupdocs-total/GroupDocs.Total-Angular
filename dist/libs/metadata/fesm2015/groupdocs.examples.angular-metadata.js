import { BrowserModule } from '@angular/platform-browser';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, EventEmitter, Input, Output, ViewChildren, ContentChildren, NgModule, APP_INITIALIZER } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Api, ConfigService, CommonModals, FilePropertyCategory, ModalService, UploadFilesService, NavigateService, ZoomService, PagePreloadService, PasswordService, LoadingMaskService, WindowService, FilePropertyModel, LoadingMaskInterceptorService, CommonComponentsModule, ErrorInterceptorService } from '@groupdocs.examples.angular/common-components';
import { BehaviorSubject } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MetadataService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    loadFiles(path) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadFile(credentials) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadProperties(credentials) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_DOCUMENT_PROPERTIES, credentials, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadPropertiesNames(credentials) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_DOCUMENT_PROPERTIES_NAMES, credentials, Api.httpOptionsJson);
    }
    /**
     * @param {?} metadataFile
     * @return {?}
     */
    saveProperty(metadataFile) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.SAVE_PROPERTY, metadataFile, Api.httpOptionsJson);
    }
    /**
     * @param {?} metadataFile
     * @return {?}
     */
    removeProperty(metadataFile) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.REMOVE_PROPERTY, metadataFile, Api.httpOptionsJson);
    }
    /**
     * @param {?} file
     * @param {?} url
     * @param {?} rewrite
     * @return {?}
     */
    upload(file, url, rewrite) {
        /** @type {?} */
        const formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    }
    /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    loadPage(credentials, page) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'page': page
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    getDownloadUrl(credentials) {
        return this._config.getMetadataApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadPrint(credentials) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_PRINT, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, Api.httpOptionsJson);
    }
}
MetadataService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MetadataService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ MetadataService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MetadataService_Factory() { return new MetadataService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: MetadataService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    MetadataService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    MetadataService.prototype._config;
}
class MetadataFileDescription {
}
if (false) {
    /** @type {?} */
    MetadataFileDescription.prototype.guid;
    /** @type {?} */
    MetadataFileDescription.prototype.properties;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MetadataConfig {
}
if (false) {
    /** @type {?} */
    MetadataConfig.prototype.rewrite;
    /** @type {?} */
    MetadataConfig.prototype.download;
    /** @type {?} */
    MetadataConfig.prototype.upload;
    /** @type {?} */
    MetadataConfig.prototype.browse;
    /** @type {?} */
    MetadataConfig.prototype.filesDirectory;
    /** @type {?} */
    MetadataConfig.prototype.defaultDocument;
    /** @type {?} */
    MetadataConfig.prototype.preloadPageCount;
    /** @type {?} */
    MetadataConfig.prototype.cache;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MetadataConfigService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._metadataConfig = new BehaviorSubject(new MetadataConfig());
        this._updatedConfig = this._metadataConfig.asObservable();
    }
    /**
     * @return {?}
     */
    get updatedConfig() {
        return this._updatedConfig;
    }
    /**
     * @return {?}
     */
    load() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const configEndpoint = this._config.getConfigEndpoint(Api.METADATA_APP);
            this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                /** @type {?} */
                const metadataConfig = (/** @type {?} */ (response));
                this._metadataConfig.next(metadataConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                reject(`Could not load metadata config: ${JSON.stringify(response)}`);
            }));
        }));
    }
}
MetadataConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MetadataConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ MetadataConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MetadataConfigService_Factory() { return new MetadataConfigService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: MetadataConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    MetadataConfigService.prototype._metadataConfig;
    /**
     * @type {?}
     * @private
     */
    MetadataConfigService.prototype._updatedConfig;
    /**
     * @type {?}
     * @private
     */
    MetadataConfigService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    MetadataConfigService.prototype._config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccordionService {
    constructor() {
        this._addingObserver = new BehaviorSubject(null);
        this._removingObserver = new BehaviorSubject(null);
        this._addedProperty = this._addingObserver.asObservable();
        this._removedProperty = this._removingObserver.asObservable();
    }
    /**
     * @return {?}
     */
    get addedProperty() {
        return this._addedProperty;
    }
    /**
     * @return {?}
     */
    get removedProperty() {
        return this._removedProperty;
    }
    /**
     * @param {?} addedProperty
     * @return {?}
     */
    addProperty(addedProperty) {
        this._addingObserver.next(addedProperty);
    }
    /**
     * @param {?} removedProperty
     * @return {?}
     */
    removeProperty(removedProperty) {
        this._removingObserver.next(removedProperty);
    }
}
AccordionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AccordionService.ctorParameters = () => [];
/** @nocollapse */ AccordionService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AccordionService_Factory() { return new AccordionService(); }, token: AccordionService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AccordionService.prototype._addingObserver;
    /**
     * @type {?}
     * @private
     */
    AccordionService.prototype._removingObserver;
    /**
     * @type {?}
     * @private
     */
    AccordionService.prototype._addedProperty;
    /**
     * @type {?}
     * @private
     */
    AccordionService.prototype._removedProperty;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MetadataAppComponent {
    /**
     * @param {?} _metadataService
     * @param {?} _modalService
     * @param {?} configService
     * @param {?} uploadFilesService
     * @param {?} _navigateService
     * @param {?} _zoomService
     * @param {?} pagePreloadService
     * @param {?} passwordService
     * @param {?} _loadingMaskService
     * @param {?} _accrodionService
     * @param {?} _windowService
     */
    constructor(_metadataService, _modalService, configService, uploadFilesService, _navigateService, _zoomService, pagePreloadService, passwordService, _loadingMaskService, _accrodionService, _windowService) {
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
        (w) => {
            this.isDesktop = _windowService.isDesktop();
            this.refreshZoom();
        }));
        configService.updatedConfig.subscribe((/**
         * @param {?} metadataConfig
         * @return {?}
         */
        (metadataConfig) => {
            this.metadataConfig = metadataConfig;
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
                    this._metadataService.upload(uploads.item(i), '', this.metadataConfig.rewrite).subscribe((/**
                     * @param {?} obj
                     * @return {?}
                     */
                    (obj) => {
                        this.fileWasDropped ? this.selectFile(obj.guid, '', '') : this.selectDir('');
                    }));
                }
            }
        }));
        pagePreloadService.checkPreload.subscribe((/**
         * @param {?} page
         * @return {?}
         */
        (page) => {
            if (this.metadataConfig.preloadPageCount !== 0) {
                for (let i = page; i < page + 2; i++) {
                    if (i > 0 && i <= this.countPages && !this.file.pages[i - 1].data) {
                        this.preloadPages(i, i);
                    }
                }
            }
        }));
        passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        (pass) => {
            this.selectFile(this.credentials.guid, pass, CommonModals.PasswordRequired);
        }));
        _accrodionService.addedProperty.subscribe((/**
         * @param {?} addedProperty
         * @return {?}
         */
        addedProperty => {
            if (addedProperty) {
                this.addedProperty = addedProperty;
                /** @type {?} */
                const propObject = {
                    original: addedProperty.original,
                    name: "",
                    value: "",
                    category: 0,
                    type: 1,
                    selected: false,
                    editing: false,
                    disabled: false
                };
                if (this.buildInProperties) {
                    this.buildInProperties.push(propObject);
                }
            }
        }));
        _accrodionService.removedProperty.subscribe((/**
         * @param {?} removedProperty
         * @return {?}
         */
        removedProperty => {
            if (this.file) {
                /** @type {?} */
                const metadataFile = new MetadataFileDescription();
                metadataFile.guid = this.file.guid;
                metadataFile.properties = [removedProperty];
                this._metadataService.removeProperty(metadataFile).subscribe((/**
                 * @param {?} loadFile
                 * @return {?}
                 */
                (loadFile) => {
                    this.loadProperties();
                    this._modalService.open(CommonModals.OperationSuccess);
                }));
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.metadataConfig.defaultDocument !== "") {
            this.isLoading = true;
            this.selectFile(this.metadataConfig.defaultDocument, "", "");
        }
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
        this._metadataService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        (files) => this.files = files || []));
    }
    /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @return {?}
     */
    selectFile($event, password, modalId) {
        this.credentials = { guid: $event, password: password };
        this.file = null;
        this._metadataService.loadFile(this.credentials).subscribe((/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
            this.file = file;
            this.formatDisabled = !this.file;
            if (file) {
                if (file.pages && file.pages[0]) {
                    this._pageHeight = file.pages[0].height;
                    this._pageWidth = file.pages[0].width;
                    this.options = this.zoomOptions();
                    this.refreshZoom();
                }
                /** @type {?} */
                const preloadPageCount = this.metadataConfig.preloadPageCount;
                /** @type {?} */
                const countPages = file.pages ? file.pages.length : 0;
                if (preloadPageCount > 0) {
                    this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                }
                this._navigateService.countPages = countPages;
                this._navigateService.currentPage = 1;
                this.countPages = countPages;
                this.loadProperties();
            }
        }));
        if (modalId) {
            this._modalService.close(modalId);
        }
        this.clearData();
    }
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    preloadPages(start, end) {
        for (let i = start; i <= end; i++) {
            this._metadataService.loadPage(this.credentials, i).subscribe((/**
             * @param {?} page
             * @return {?}
             */
            (page) => {
                this.file.pages[i - 1] = page;
            }));
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    upload($event) {
        this._metadataService.upload(null, $event, this.rewriteConfig).subscribe((/**
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
        const pageWidth = this.ptToPx(this._pageWidth);
        /** @type {?} */
        const pageHeight = this.ptToPx(this._pageHeight);
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
        const pageWidth = this.ptToPx(this._pageWidth);
        /** @type {?} */
        const pageHeight = this.ptToPx(this._pageHeight);
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
        return this._zoomService.zoomOptions(width, height);
    }
    /**
     * @param {?} zoom
     * @return {?}
     */
    set zoom(zoom) {
        this._zoom = zoom;
        this._zoomService.changeZoom(this._zoom);
    }
    /**
     * @return {?}
     */
    get zoom() {
        return this._zoom;
    }
    /**
     * @private
     * @return {?}
     */
    refreshZoom() {
        this.zoom = this._windowService.isDesktop() ? 100 : this.getFitToWidth();
    }
    /**
     * @return {?}
     */
    downloadFile() {
        if (this.formatDisabled)
            return;
        window.location.assign(this._metadataService.getDownloadUrl(this.credentials));
    }
    /**
     * @private
     * @return {?}
     */
    clearData() {
        if (!this.file || !this.file.pages) {
            return;
        }
        for (const page of this.file.pages) {
            page.data = null;
        }
    }
    /**
     * @return {?}
     */
    isDisabled() {
        return !this.file || this.disabled || (this.buildInProperties && this.buildInProperties.filter((/**
         * @param {?} p
         * @return {?}
         */
        p => p.original === false)).length > 0);
    }
    /**
     * @return {?}
     */
    save() {
        if (!this.file || !this.file.pages)
            return;
        /** @type {?} */
        const savingProperty = this.buildInProperties.filter((/**
         * @param {?} p
         * @return {?}
         */
        p => !p.original || p.editing));
        /** @type {?} */
        const savingFile = new MetadataFileDescription();
        savingFile.guid = this.file.guid;
        savingFile.properties = savingProperty;
        this._metadataService.saveProperty(savingFile).subscribe((/**
         * @param {?} loadFile
         * @return {?}
         */
        (loadFile) => {
            this.loadProperties();
            this.disabled = false;
            this._modalService.open(CommonModals.OperationSuccess);
        }));
    }
    /**
     * @return {?}
     */
    loadProperties() {
        this._metadataService.loadProperties(this.credentials).subscribe((/**
         * @param {?} fileProperties
         * @return {?}
         */
        (fileProperties) => {
            this.buildInProperties = fileProperties.filter((/**
             * @param {?} p
             * @return {?}
             */
            p => p.category === FilePropertyCategory.BuildIn));
            this.buildInProperties.forEach((/**
             * @param {?} p
             * @return {?}
             */
            p => {
                if (this.disabledProperties.some((/**
                 * @param {?} dp
                 * @return {?}
                 */
                dp => dp === p.name.toLowerCase()))) {
                    p.disabled = true;
                }
            }));
            this.defaultProperties = fileProperties.filter((/**
             * @param {?} p
             * @return {?}
             */
            p => p.category === FilePropertyCategory.Default));
            this._metadataService.loadPropertiesNames(this.credentials).subscribe((/**
             * @param {?} filePropertiesNames
             * @return {?}
             */
            (filePropertiesNames) => {
                this.filePropertiesNames = filePropertiesNames;
            }));
        }));
        if (!this.showSidePanel) {
            this.showSidePanel = true;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    hideSidePanel($event) {
        this.showSidePanel = !this.showSidePanel;
    }
}
MetadataAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-metadata',
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"column\">\n      <div class=\"top-panel\">\n        <gd-logo [logo]=\"'metadata'\" icon=\"clipboard-list\"></gd-logo>\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                    *ngIf=\"browseConfig\" ></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"save()\">\n                    </gd-button>\n          <gd-button [hidden] =\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'file-export'\" [tooltip]=\"'Attributes'\" (click)=\"loadProperties()\">\n                    </gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                    (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n        </gd-top-toolbar>\n      </div>\n      <div class=\"doc-panel\" *ngIf=\"file\" #docPanel>\n        <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"false\" gdScrollable\n                    [preloadPageCount]=\"metadataConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"false\"></gd-document>\n      </div>\n    </div>\n    <gd-side-panel *ngIf=\"file && showSidePanel\"\n      (hideSidePanel)=\"hideSidePanel($event)\"\n      (saveInSidePanel)=\"save()\"\n      [closable]=\"isDesktop ? false : true\"\n      [saveable]=\"isDesktop ? false : true\"\n      [title]=\"'Metadata'\"\n      [icon]=\"'clipboard-list'\">\n      <gd-accordion>\n        <gd-accordion-group title=\"Build-in properties\" [addDisabled]=\"isDisabled()\" [addHidden]=\"false\" [properties]=\"buildInProperties\" [propertiesNames]=\"filePropertiesNames\"></gd-accordion-group>\n        <gd-accordion-group class=\"default\" title=\"Default properties\" [addDisabled]=\"true\" [addHidden]=\"true\" [properties]=\"defaultProperties\"></gd-accordion-group>\n      </gd-accordion>\n    </gd-side-panel>\n  </div>\n  <gd-init-state [icon]=\"'clipboard-list'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n    Or drop file here\n  </gd-init-state>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}::ng-deep .tools .button{color:#fff!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .button.inactive{color:#959da5!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}.row{display:-webkit-box;display:flex}.column{width:100%}::ng-deep .gd-side-panel-body{background-color:#f4f4f4}::ng-deep .gd-side-panel-wrapper{width:464px!important}::ng-deep .page.excel{overflow:unset!important}@media (max-width:1037px){::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .gd-side-panel-wrapper{width:375px!important}}"]
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
    { type: PagePreloadService },
    { type: PasswordService },
    { type: LoadingMaskService },
    { type: AccordionService },
    { type: WindowService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccordionGroupComponent {
    /**
     * @param {?} _accordionService
     * @param {?} _datePipe
     * @param {?} _windowService
     */
    constructor(_accordionService, _datePipe, _windowService) {
        this._accordionService = _accordionService;
        this._datePipe = _datePipe;
        this._windowService = _windowService;
        this.opened = false;
        this.toggle = new EventEmitter();
        this._selectedPropName = "Select property";
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.isDesktop = _windowService.isDesktop();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.textinput.changes.subscribe((/**
         * @param {?} i
         * @return {?}
         */
        (i) => {
            if (i.length) {
                i.first.nativeElement.focus();
            }
        }));
    }
    /**
     * @return {?}
     */
    get selectedPropName() {
        return this._selectedPropName;
    }
    /**
     * @param {?=} onlyEditing
     * @return {?}
     */
    resetProperties(onlyEditing = false) {
        // for the moment we are working only with a single property
        if (!onlyEditing) {
            this.properties.forEach((/**
             * @param {?} p
             * @return {?}
             */
            p => p.selected = false));
        }
        this.properties.forEach((/**
         * @param {?} p
         * @return {?}
         */
        p => p.editing = false));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    addProperty($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this._selectedPropName = "Select property";
        this.resetProperties();
        if (!this.addDisabled) {
            /** @type {?} */
            const addedProperty = new FilePropertyModel();
            addedProperty.original = false;
            this._accordionService.addProperty(addedProperty);
        }
    }
    /**
     * @param {?} property
     * @return {?}
     */
    selectProperty(property) {
        if (property.category === 0 && !property.disabled) {
            this.resetProperties(true);
            /** @type {?} */
            const selectedProperty = this.properties.filter((/**
             * @param {?} p
             * @return {?}
             */
            p => p.name.toLocaleLowerCase() === property.name.toLocaleLowerCase()))[0];
            selectedProperty.selected = !selectedProperty.selected;
            this.properties.filter((/**
             * @param {?} p
             * @return {?}
             */
            p => p.name === property.name))[0].selected = selectedProperty.selected;
        }
    }
    /**
     * @param {?} property
     * @return {?}
     */
    editProperty(property) {
        // we can edit only first group props
        if (property.category === 0 && !property.disabled) {
            this.resetProperties();
            /** @type {?} */
            const selectedProperty = this.properties.filter((/**
             * @param {?} p
             * @return {?}
             */
            p => p.name.toLocaleLowerCase() === property.name.toLocaleLowerCase()))[0];
            selectedProperty.editing = !selectedProperty.editing;
            this.properties.filter((/**
             * @param {?} p
             * @return {?}
             */
            p => p.name === property.name))[0].editing = selectedProperty.editing;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    delete($event) {
        $event.preventDefault();
        $event.stopPropagation();
        /** @type {?} */
        const selectedProperty = this.properties.filter((/**
         * @param {?} p
         * @return {?}
         */
        p => p.selected))[0];
        this._accordionService.removeProperty(selectedProperty);
    }
    /**
     * @return {?}
     */
    wasSelected() {
        if (this.properties && this.properties.length > 0) {
            return this.properties.filter((/**
             * @param {?} p
             * @return {?}
             */
            p => p.selected)).length === 1;
        }
        else
            return false;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectPropName($event) {
        this._selectedPropName = $event.name;
        /** @type {?} */
        const editingProperty = this.properties.filter((/**
         * @param {?} p
         * @return {?}
         */
        p => !p.original))[0];
        editingProperty.type = $event.type;
        editingProperty.name = $event.name;
        if ($event.type === 3) {
            editingProperty.value = new Date().toISOString().slice(0, 19);
        }
        else {
            editingProperty.value = "";
        }
    }
    /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    formatDateTime(property, value) {
        if (value) {
            /** @type {?} */
            const dateTime = new Date(value);
            property.value = dateTime.toISOString().slice(0, 19);
        }
    }
    /**
     * @param {?} property
     * @return {?}
     */
    formatValue(property) {
        switch (property.type) {
            case 3:
                return this.isDesktop ? this._datePipe.transform(new Date(property.value), 'MM/dd/yy, h:mm:ss a')
                    : this._datePipe.transform(new Date(property.value), 'MM/dd/yy, h:mm a');
            default:
                return property.value;
        }
    }
}
AccordionGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-accordion-group',
                template: "<div class=\"accordion-wrapper\">\n    <div class=\"title\" (click)=\"toggle.emit($event)\">\n      <fa-icon *ngIf=\"!opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-down']\"></fa-icon>\n      <fa-icon *ngIf=\"opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-up']\"></fa-icon>\n      <div class=\"text\">{{title}}</div>\n      <fa-icon class=\"trash\" *ngIf=\"wasSelected()\" [icon]=\"['fas', 'trash']\" (click)=\"delete($event)\"></fa-icon>\n      <gd-button class=\"plus\" [icon]=\"['plus']\" [hidden]=\"addHidden\" [disabled]=\"addDisabled\" (click)=\"addProperty($event)\"></gd-button>\n    </div>\n    <div class=\"body\" [ngClass]=\"{'hidden': !opened}\">\n      <div *ngFor=\"let property of properties\" class=\"property-wrapper\" [ngClass]=\"{'disabled': property.disabled}\">\n          <div *ngIf=\"property.original\" [ngClass]=\"{'selected': property.selected}\" (click)=\"selectProperty(property)\" class=\"property-name\" title=\"{{property.name}}\">{{property.name}}</div>\n          <gd-select  class=\"property-name\" *ngIf=\"!property.original\" id=\"propertiesNames\" [disabled]=\"false\" [options]=\"propertiesNames\" (selected)=\"selectPropName($event)\" [showSelected]=\"{name : selectedPropName, value : selectedPropName}\"></gd-select>\n          <div *ngIf=\"property.original && !property.editing\" [ngClass]=\"{'selected': property.selected}\" (click)=\"editProperty(property)\" class=\"property-value\" title=\"{{property.value}}\">{{formatValue(property)}}</div>\n          <div *ngIf=\"!property.original || property.editing\" class=\"input-wrapper\">\n            <input #textinput *ngIf=\"property.type == 1 || property.type == 5\" class=\"property-value\" [(ngModel)]=\"property.value\">\n            <input *ngIf=\"property.type == 3\" type=\"datetime-local\" step=\"1\" [ngClass]=\"isDesktop ? 'property-value' : 'property-value mobile-hide'\" [ngModel]=\"property.value | date:'yyyy-MM-ddTHH:mm:ss'\" (ngModelChange)=\"formatDateTime(property, $event)\">\n            <input *ngIf=\"property.type == 3\" type=\"datetime-local\" [ngClass]=\"isDesktop ? 'property-value desktop-hide' : 'property-value'\" [ngModel]=\"property.value | date:'yyyy-MM-ddTHH:mm'\" (ngModelChange)=\"formatDateTime(property, $event)\">\n        </div>\n      </div>\n    </div>\n  <div>",
                styles: [".accordion-wrapper{background-color:#fff}.accordion-wrapper .title{width:100%;cursor:pointer;border-bottom:1px solid #6e6e6e;background-color:#539cf0;color:#f4f4f4;font-weight:700;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;height:37px;line-height:37px;font-size:13px}.accordion-wrapper .title .text{width:100%}.chevron{padding:0 16px 0 15px}.plus{margin-left:auto}::ng-deep .title .button{color:#fff!important;display:block!important;margin-right:0!important}::ng-deep .title .button.active fa-icon{color:#fff!important}.accordion-wrapper .body.hidden,.trash.hidden{display:none}.property-wrapper{display:-webkit-box;display:flex;height:35px;font-size:12px;border-bottom:1px solid #e7e7e7;line-height:35px}.property-wrapper.disabled{cursor:not-allowed;color:#acacac}.property-name{width:216px;text-transform:uppercase;font-weight:700;padding-left:15px;border-right:1px solid #e7e7e7;text-overflow:ellipsis;word-wrap:break-word}.property-name ::ng-deep .select{height:35px;line-height:37px;text-align:center;-webkit-box-pack:unset;justify-content:unset;position:relative}.property-name ::ng-deep .select .nav-caret{display:none}.property-name ::ng-deep .select .selected-value{max-width:none;font-size:unset;text-transform:none;font-weight:400}.property-name ::ng-deep .select .dropdown-menu{width:216px;margin-left:-15px;top:36px}.property-value{font-family:'Courier New',Courier,monospace;padding-left:12px;text-overflow:ellipsis;width:216px;white-space:nowrap;overflow:hidden;word-wrap:break-word;display:inline-block}.property-value.desktop-hide{display:none}.input-wrapper input{height:30px;border:0;font-size:12px}.input-wrapper input.hidden{display:none}.input-wrapper input[type=datetime-local]::-webkit-clear-button,.input-wrapper input[type=datetime-local]::-webkit-inner-spin-button{-webkit-appearance:none;display:none}.selected{background-color:#3e4e5a;color:#fff}::ng-deep .default .property-name{color:#acacac}@media (max-width:1037px){.property-value{width:194px!important}.property-name{width:150px!important}.property-value.mobile-hide{display:none}.input-wrapper{width:185px!important}}"]
            }] }
];
/** @nocollapse */
AccordionGroupComponent.ctorParameters = () => [
    { type: AccordionService },
    { type: DatePipe },
    { type: WindowService }
];
AccordionGroupComponent.propDecorators = {
    opened: [{ type: Input }],
    title: [{ type: Input }],
    addDisabled: [{ type: Input }],
    addHidden: [{ type: Input }],
    properties: [{ type: Input }],
    propertiesNames: [{ type: Input }],
    toggle: [{ type: Output }],
    textinput: [{ type: ViewChildren, args: ['textinput',] }]
};
if (false) {
    /** @type {?} */
    AccordionGroupComponent.prototype.opened;
    /** @type {?} */
    AccordionGroupComponent.prototype.title;
    /** @type {?} */
    AccordionGroupComponent.prototype.addDisabled;
    /** @type {?} */
    AccordionGroupComponent.prototype.addHidden;
    /** @type {?} */
    AccordionGroupComponent.prototype.properties;
    /** @type {?} */
    AccordionGroupComponent.prototype.propertiesNames;
    /** @type {?} */
    AccordionGroupComponent.prototype.toggle;
    /** @type {?} */
    AccordionGroupComponent.prototype.textinput;
    /** @type {?} */
    AccordionGroupComponent.prototype._selectedPropName;
    /** @type {?} */
    AccordionGroupComponent.prototype.isDesktop;
    /**
     * @type {?}
     * @private
     */
    AccordionGroupComponent.prototype._accordionService;
    /**
     * @type {?}
     * @private
     */
    AccordionGroupComponent.prototype._datePipe;
    /**
     * @type {?}
     * @private
     */
    AccordionGroupComponent.prototype._windowService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccordionComponent {
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.groups.toArray().forEach((/**
         * @param {?} group
         * @return {?}
         */
        (group) => {
            group.opened = true;
            group.toggle.subscribe((/**
             * @param {?} $event
             * @return {?}
             */
            ($event) => {
                $event.preventDefault();
                $event.stopPropagation();
                this.openGroup(group);
            }));
        }));
    }
    /**
     * @param {?} group
     * @return {?}
     */
    openGroup(group) {
        group.opened = !group.opened;
    }
}
AccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-accordion',
                template: `
    <ng-content></ng-content>
`,
                styles: [""]
            }] }
];
AccordionComponent.propDecorators = {
    groups: [{ type: ContentChildren, args: [AccordionGroupComponent,] }]
};
if (false) {
    /** @type {?} */
    AccordionComponent.prototype.groups;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} metadataConfigService
 * @return {?}
 */
function initializeApp(metadataConfigService) {
    /** @type {?} */
    const result = (/**
     * @return {?}
     */
    () => metadataConfigService.load());
    return result;
}
// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
/**
 * @param {?} service
 * @return {?}
 */
function setupLoadingInterceptor(service) {
    return new LoadingMaskInterceptorService(service);
}
class MetadataModule {
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    static forRoot(apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: MetadataModule
        };
    }
}
MetadataModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MetadataAppComponent,
                    AccordionComponent,
                    AccordionGroupComponent
                ],
                imports: [
                    BrowserModule,
                    CommonComponentsModule,
                    HttpClientModule,
                    FontAwesomeModule,
                    FormsModule
                ],
                exports: [
                    MetadataAppComponent,
                    CommonComponentsModule,
                    AccordionComponent,
                    AccordionGroupComponent
                ],
                providers: [
                    MetadataService,
                    AccordionService,
                    ConfigService,
                    DatePipe,
                    MetadataConfigService,
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: ErrorInterceptorService,
                        multi: true
                    },
                    {
                        provide: APP_INITIALIZER,
                        useFactory: initializeApp,
                        deps: [MetadataConfigService], multi: true
                    },
                    LoadingMaskService,
                    {
                        provide: HTTP_INTERCEPTORS,
                        useFactory: setupLoadingInterceptor,
                        multi: true,
                        deps: [LoadingMaskService]
                    }
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MetadataAppComponent, MetadataConfigService, MetadataFileDescription, MetadataModule, MetadataService, initializeApp, setupLoadingInterceptor, AccordionService as ɵa, AccordionComponent as ɵb, AccordionGroupComponent as ɵc };
//# sourceMappingURL=groupdocs.examples.angular-metadata.js.map
