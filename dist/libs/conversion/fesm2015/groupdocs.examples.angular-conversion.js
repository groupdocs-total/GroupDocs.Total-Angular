import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, EventEmitter, Input, Output, NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api, ConfigService, CommonModals, ModalService, UploadFilesService, BrowseFilesModalComponent, CommonComponentsModule, ErrorInterceptorService } from '@groupdocs.examples.angular/common-components';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConversionRequestModel {
}
class ConversionItemModel {
}
class ExtendedFileModel {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConversionService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._selectedFormat = new BehaviorSubject(new Array());
        this._selectFormats = this._selectedFormat.asObservable();
        this._itemToConvert = new BehaviorSubject(null);
        this.itemToConvert = this._itemToConvert.asObservable();
        this._itemToRemove = new BehaviorSubject(null);
        this.itemToRemove = this._itemToRemove.asObservable();
    }
    /**
     * @return {?}
     */
    get selectedItems() {
        return this._selectFormats;
    }
    /**
     * @param {?} filesToConvert
     * @return {?}
     */
    selectItems(filesToConvert) {
        this._selectedFormat.next(filesToConvert);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    loadFiles(path) {
        return this._http.post(this._config.getConversionApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
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
        return this._http.post(this._config.getConversionApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    convert(file) {
        /** @type {?} */
        const req = new ConversionRequestModel();
        req.added = true;
        req.destinationType = file.destinationType;
        req.guid = file.guid;
        req.size = file.size;
        return this._http.post(this._config.getConversionApiEndpoint() + Api.CONVERT_FILE, req);
    }
    /**
     * @param {?} guid
     * @return {?}
     */
    getDownloadUrl(guid) {
        return this._config.getConversionApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?path=' + guid;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectedItemToConvert(item) {
        this._itemToConvert.next(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectedItemToRemove(item) {
        this._itemToRemove.next(item);
    }
}
ConversionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ConversionService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ ConversionService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConversionService_Factory() { return new ConversionService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: ConversionService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConversionConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConversionConfigService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._conversionConfig = new BehaviorSubject(new ConversionConfig());
        this._updatedConfig = this._conversionConfig.asObservable();
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
            const configEndpoint = this._config.getConfigEndpoint(Api.CONVERSION_APP);
            this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                /** @type {?} */
                const conversionConfig = (/** @type {?} */ (response));
                this._conversionConfig.next(conversionConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                reject(`Could not load conversion config: ${JSON.stringify(response)}`);
            }));
        }));
    }
}
ConversionConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ConversionConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ ConversionConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConversionConfigService_Factory() { return new ConversionConfigService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: ConversionConfigService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConversionAppComponent {
    /**
     * @param {?} _modalService
     * @param {?} _conversionService
     * @param {?} configService
     * @param {?} uploadFilesService
     */
    constructor(_modalService, _conversionService, configService, uploadFilesService) {
        this._modalService = _modalService;
        this._conversionService = _conversionService;
        this.title = 'conversion';
        this.files = [];
        this.conversionItems = [];
        this.browseFilesModal = CommonModals.BrowseFiles;
        this.leftBarOpen = false;
        configService.updatedConfig.subscribe((/**
         * @param {?} config
         * @return {?}
         */
        (config) => {
            this.conversionConfig = config;
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
                    this._conversionService.upload(uploads.item(i), '', this.conversionConfig.rewrite).subscribe((/**
                     * @return {?}
                     */
                    () => {
                        this.selectDir('');
                    }));
                }
            }
        }));
        _conversionService.selectedItems.subscribe((/**
         * @param {?} selectedFormats
         * @return {?}
         */
        (selectedFormats) => {
            selectedFormats.forEach((/**
             * @param {?} selectedFormat
             * @return {?}
             */
            (selectedFormat) => {
                if (Object.keys(selectedFormat).length > 0 && !this.itemAlreadyAdded(selectedFormat)) {
                    this.conversionItems.push((/** @type {?} */ (selectedFormat)));
                }
            }));
        }));
        _conversionService.itemToConvert.subscribe((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item)
                this.convertSingleItem(item);
        }));
        _conversionService.itemToRemove.subscribe((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item)
                this.removeItemFromQueue(item);
        }));
    }
    /**
     * @return {?}
     */
    get rewriteConfig() {
        return this.conversionConfig ? this.conversionConfig.rewrite : true;
    }
    /**
     * @return {?}
     */
    get browseConfig() {
        return this.conversionConfig ? this.conversionConfig.browse : true;
    }
    /**
     * @return {?}
     */
    get uploadConfig() {
        return this.conversionConfig ? this.conversionConfig.upload : true;
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
    upload($event) {
        this._conversionService.upload(null, $event, this.rewriteConfig).subscribe((/**
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
    selectDir($event) {
        this._conversionService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        (files) => this.files = files || []));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    convertSingleItem(item) {
        /** @type {?} */
        const workItem = this.conversionItems.find((/**
         * @param {?} x
         * @return {?}
         */
        x => x.guid === item.guid));
        workItem.converting = true;
        this._conversionService.convert(item).subscribe((/**
         * @return {?}
         */
        () => {
            workItem.converting = false;
            workItem.converted = true;
        }), ((/**
         * @return {?}
         */
        () => {
            // TODO: add error handling?
            workItem.converting = false;
        })));
    }
    /**
     * @return {?}
     */
    convertAll() {
        this.conversionItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            this.convertSingleItem(item);
        }));
    }
    /**
     * @return {?}
     */
    convertAllUnavailable() {
        return this.conversionItems.length === 0 || this.conversionItems.filter((/**
         * @param {?} ci
         * @return {?}
         */
        ci => ci.converted !== true)).length === 0;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    removeItemFromQueue(item) {
        if (this.conversionItems.length > 0) {
            this.conversionItems.forEach((/**
             * @param {?} ci
             * @param {?} index
             * @return {?}
             */
            (ci, index) => {
                if (ci.guid === item.guid && ci.destinationType === item.destinationType)
                    this.conversionItems.splice(index, 1);
            }));
        }
    }
    /**
     * @param {?} checked
     * @return {?}
     */
    selectAllItems(checked) {
        this.files.forEach((/**
         * @param {?} f
         * @return {?}
         */
        (f) => {
            if (!f.isDirectory && !f.directory)
                f.selected = checked;
        }));
    }
    /**
     * @param {?} selectedFormat
     * @return {?}
     */
    itemAlreadyAdded(selectedFormat) {
        return this.conversionItems.filter((/**
         * @param {?} ci
         * @return {?}
         */
        ci => ci.destinationType === selectedFormat.destinationType
            && ci.guid === selectedFormat.guid)).length === 1;
    }
    /**
     * @return {?}
     */
    isLeftBarOpen() {
        return this.isDesktop ? true : this.leftBarOpen;
    }
}
ConversionAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-conversion',
                template: "<div class=\"wrapper\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'conversion'\" [icon]=\"'exchange-alt'\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-button [icon]=\"'exchange-alt'\" [tooltip]=\"'Convert'\" [disabled]=\"convertAllUnavailable()\"\n      (click)=\"convertAll()\"></gd-button>\n\n    </gd-top-toolbar>\n  </div>\n\n  <gd-dnd-init-state [icon]=\"'exchange-alt'\" *ngIf=\"conversionItems.length == 0\"></gd-dnd-init-state>\n\n  <gd-conversion-queue [items]=\"conversionItems\" (selectedItemToConvert)=\"convertSingleItem($event)\"></gd-conversion-queue>\n\n  <gd-conversion-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                                    [uploadConfig]=\"uploadConfig\" (selectAll)=\"selectAllItems($event)\"></gd-conversion-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:flex;height:inherit}.gd-document{width:100%;height:100%}.top-panel{display:flex;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}"]
            }] }
];
/** @nocollapse */
ConversionAppComponent.ctorParameters = () => [
    { type: ModalService },
    { type: ConversionService },
    { type: ConversionConfigService },
    { type: UploadFilesService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConversionBrowseFilesModalComponent extends BrowseFilesModalComponent {
    /**
     * @param {?} _uploadService
     * @param {?} _conversionService
     * @param {?} _modalService
     */
    constructor(_uploadService, _conversionService, _modalService) {
        super(_uploadService);
        this._conversionService = _conversionService;
        this._modalService = _modalService;
        this.selectAll = new EventEmitter();
        this.dynamicOptions = [];
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    selectDD(entry) {
        console.log('SELECTED DD', entry);
    }
    /**
     * @param {?} checked
     * @return {?}
     */
    selectAllItems(checked) {
        this.selectAll.emit(checked);
        this.dynamicOptions = this.prepareMultipleConversionTypes();
    }
    /**
     * @param {?} checked
     * @param {?} file
     * @return {?}
     */
    selectSingleItem(checked, file) {
        // TODO: refactor?
        /** @type {?} */
        const selectedFiles = this.files.filter((/**
         * @param {?} f
         * @return {?}
         */
        f => f.guid === file.guid));
        if (selectedFiles.length === 1) {
            selectedFiles[0].selected = checked;
        }
        this.dynamicOptions = this.prepareMultipleConversionTypes();
    }
    /**
     * @return {?}
     */
    getLabelString() {
        if (this.files && this.files.length > 0) {
            /** @type {?} */
            const selectedCount = this.files.filter((/**
             * @param {?} file
             * @return {?}
             */
            file => file.selected)).length;
            if (selectedCount > 0) {
                return 'Add ' + selectedCount + ' selected';
            }
            else {
                return 'Add selected';
            }
        }
    }
    /**
     * @return {?}
     */
    prepareMultipleConversionTypes() {
        /** @type {?} */
        const allTypes = [];
        this.files.filter((/**
         * @param {?} file
         * @return {?}
         */
        file => file.selected)).forEach((/**
         * @param {?} f
         * @return {?}
         */
        (f) => {
            if (f.conversionTypes.length > 0) {
                /** @type {?} */
                const types = Object.assign([], f.conversionTypes);
                allTypes.push(types);
            }
        }));
        /** @type {?} */
        let longestArray = [];
        allTypes.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (item.length >= longestArray.length) {
                longestArray = item;
            }
        }));
        //add warnings
        allTypes.forEach((/**
         * @param {?} typesArr
         * @return {?}
         */
        typesArr => {
            for (let i = 0; i < longestArray.length; i++) {
                /** @type {?} */
                const type = (longestArray[i].value) ? longestArray[i].value : longestArray[i];
                // TODO: reconsider second check
                if (typesArr.indexOf(type) === -1 && typesArr.filter((/**
                 * @param {?} t
                 * @return {?}
                 */
                t => t.name === type)).length === 0) {
                    longestArray[i] = {
                        value: type,
                        name: type,
                        warning: true,
                        icon: this.getFormatIcon((/** @type {?} */ ({ name: 'dummyName.' + type, directory: false })))
                    };
                }
                else {
                    if (!longestArray[i].warning) {
                        longestArray[i] = {
                            value: type,
                            name: type,
                            warning: false,
                            icon: this.getFormatIcon((/** @type {?} */ ({ name: 'dummyName.' + type, directory: false })))
                        };
                    }
                }
            }
        }));
        return longestArray;
    }
    /**
     * @param {?} $event
     * @param {?} file
     * @return {?}
     */
    selectFormat($event, file) {
        // the case when we selecting format inline on the single file
        if (file) {
            this.selectAll.emit(false);
            file.selected = true;
        }
        this._format = $event.value;
        /** @type {?} */
        const conversionItems = new Array();
        this.files.forEach((/**
         * @param {?} f
         * @return {?}
         */
        (f) => {
            if (f.selected && !f.isDirectory && !f.directory) {
                /** @type {?} */
                const extension = f.guid.replace(/^.*\./, '');
                /** @type {?} */
                const destinationGuid = f.guid.replace(extension, this._format);
                /** @type {?} */
                const destinationFileName = destinationGuid.replace(/^.*[\\\/]/, '');
                /** @type {?} */
                const conversionItem = {
                    guid: f.guid,
                    directory: f.directory,
                    size: f.size,
                    name: f.name,
                    destinationType: $event.value,
                    isDirectory: f.isDirectory,
                    sizeString: this.getSize(f.size),
                    sourceIcon: this.getFormatIcon(f),
                    sourceFormatName: this.getFormatName(f),
                    destinationFileName: destinationFileName,
                    destinationFormatName: this.getFormatName((/** @type {?} */ ({ name: destinationFileName, directory: false }))),
                    destinationIcon: this.getFormatIcon((/** @type {?} */ ({ name: destinationFileName, directory: false }))),
                    converted: false,
                    // TODO: maybe there is a more beauty way?
                    converting: false
                };
                conversionItems.push(conversionItem);
            }
        }));
        this._conversionService.selectItems(conversionItems);
        this._modalService.close(CommonModals.BrowseFiles);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    createFormatOption(val) {
        return {
            value: val,
            name: val,
            icon: this.getFormatIcon((/** @type {?} */ ({ name: 'dummyName.' + val, directory: false })))
        };
    }
    /**
     * @param {?} formats
     * @return {?}
     */
    formatOptions(formats) {
        if (formats) {
            /** @type {?} */
            const allTypes = new Array();
            for (let i = 0; i < formats.length; i++) {
                allTypes.push(this.createFormatOption(formats[i]));
            }
            return allTypes;
        }
    }
    /**
     * @return {?}
     */
    anyItemSelected() {
        // TODO: reconsider such checks
        if (this.files && this.files.length > 0) {
            return this.files.filter((/**
             * @param {?} file
             * @return {?}
             */
            file => file.selected)).length > 0;
        }
        else
            return false;
    }
    /**
     * @return {?}
     */
    allItemsSelected() {
        if (this.files && this.files.filter((/**
         * @param {?} file
         * @return {?}
         */
        file => !file.isDirectory && !file.directory)).length > 0 && this.files.length > 0) {
            return this.files.filter((/**
             * @param {?} file
             * @return {?}
             */
            file => !file.isDirectory && !file.directory && file.selected)).length
                === this.files.filter((/**
                 * @param {?} file
                 * @return {?}
                 */
                file => !file.isDirectory && !file.directory)).length;
        }
        else
            return false;
    }
}
ConversionBrowseFilesModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-conversion-browse-files-modal',
                template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\n      <div class=\"gd-drag-n-drop-icon\">\n        <fa-icon [icon]=\"['fas','cloud-download-alt']\" size=\"5x\" aria-hidden=\"true\"></fa-icon>\n      </div>\n      <h2>Drag &amp; Drop your files here</h2>\n    </div>\n\n    <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\n             (change)=\"handleFileInput($event.target.files)\">\n\n      <div class=\"select-all\">\n        <input type=\"checkbox\" class=\"gd-select-all gd-checkbox\" [checked]=\"allItemsSelected()\"\n               (change)=\"selectAllItems($event.target.checked);\">\n      </div>\n      <div class=\"context\">\n        <div class=\"context-actions\">\n          <gd-drop-down>\n            <gd-drop-down-toggle>\n              <gd-button [icon]=\"'plus'\" [disabled]=\"!anyItemSelected()\" [intent]=\"'primary'\" [iconOnly]=\"false\">\n                {{getLabelString()}}\n              </gd-button>\n            </gd-drop-down-toggle>\n            <gd-drop-down-items>\n              <gd-drop-down-item (selected)=\"selectFormat(item, null)\" *ngFor=\"let item of dynamicOptions\">\n                <fa-icon [icon]=\"['far', item.icon]\"></fa-icon>\n                <div class=\"text\">{{item.name}}</div>\n                <div *ngIf=\"item.warning\" class=\"gd-type-warning\"\n                     title=\"1 selected file(s) can\u2019t be converted to {{item.name}} format\">\n                  <fa-icon [icon]=\"['fas','exclamation-triangle']\"></fa-icon>\n                </div>\n              </gd-drop-down-item>\n            </gd-drop-down-items>\n          </gd-drop-down>\n\n          <gd-drop-down>\n            <gd-drop-down-toggle>\n              <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\n                Upload file\n              </gd-button>\n            </gd-drop-down-toggle>\n            <gd-drop-down-items>\n              <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\n                <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\n                <div class=\"text\">{{item.name}}</div>\n              </gd-drop-down-item>\n            </gd-drop-down-items>\n          </gd-drop-down>\n        </div>\n        <div class=\"context-panel\">\n          <div class=\"upload-url\" *ngIf=\"showUploadUrl\">\n            <input class=\"url-input\" placeholder=\"http://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n            <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n              <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-header\">\n        <div class=\"header-name\">Document</div>\n        <div class=\"header-size\">Size</div>\n      </div>\n      <div class=\"list-files-body\">\n        <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n            <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n          </div>\n          <div class=\"go-up-dots\">...</div>\n        </div>\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n          <div class=\"gd-file-checkbox\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\n            <input type=\"checkbox\" *ngIf=\"file && !file.isDirectory && !file.directory\" [checked]=\"file.selected\"\n                   (change)=\"selectSingleItem($event.target.checked, file);\" class=\"gd-checkbox gd-checkbox-single\">\n          </div>\n          <div class=\"file-description\">\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n            <div class=\"file-name-format\">\n              <div class=\"file-name\" [ngClass]=\"{'gd-folder-name' : file.isDirectory || file.directory}\">\n                {{file?.name}}\n              </div>\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\n            </div>\n          </div>\n          <div class=\"file-size\">\n            {{getSize(file?.size)}}\n          </div>\n          <div class=\"file-format-select\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\n            <gd-drop-down *ngIf=\"!(file.isDirectory || file.directory)\" [placement]=\"{h:'left',v:'center'}\">\n              <gd-drop-down-toggle>\n                <gd-button [icon]=\"'plus'\">\n                </gd-button>\n              </gd-drop-down-toggle>\n              <gd-drop-down-items>\n                <gd-drop-down-item (selected)=\"selectFormat(item, file)\" *ngFor=\"let item of formatOptions(file.conversionTypes)\">\n                  <fa-icon [icon]=\"['far', item.icon]\"></fa-icon>\n                  <div class=\"text\">{{item.name}}</div>\n                </gd-drop-down-item>\n              </gd-drop-down-items>\n            </gd-drop-down>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n      <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
                styles: [".gd-modal-table{width:100%;text-align:left;padding-top:20px}#gd-browse-section{width:1024px;height:628px}.list-files-header{display:flex;width:100%;color:#acacac;font-size:13px;flex-direction:row}.header-name{padding-left:70px}.header-size{padding-left:707px}.file-size{margin-top:20px;width:112px;color:#777}.file-description fa-icon{cursor:pointer;height:32px;font-size:32px;margin:10px 13px 22px 0}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{cursor:pointer;display:flex;font-size:16px;padding-left:70px;height:19px;margin:8px 0 10px}.upload-panel{display:flex;position:relative;width:100%}.upload-panel .select-all{width:16px;padding:22px 23px 0 25px}.upload-panel .context{display:flex;flex-direction:column;width:100%;margin-top:20px;margin-right:20px}.upload-panel .context .context-actions{display:flex;flex-direction:row;width:100%}.upload-panel .context .context-actions :last-child{margin-right:0}.upload-panel .context .context-panel{display:flex;flex-direction:row;width:100%;margin-top:20px}.upload-panel .context .context-panel .upload-url{display:flex;flex-direction:row;width:100%}.upload-panel .context .context-panel .upload-url .url-input{width:100%;height:27px;border:1px solid #25c2d4}.upload-panel .context .context-panel .upload-url .url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.upload-panel .context .context-panel .upload-url .url-check .ng-fa-icon{display:block;padding:8px}.upload-panel gd-drop-down{margin-right:10px}.file-description{cursor:pointer;overflow:hidden;display:flex;width:inherit}.file-description .ng-fa-icon.fa-file-pdf{color:#e21717}.file-description .ng-fa-icon.fa-file-word{color:#6979b9}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29417}.file-description .ng-fa-icon.fa-file-excel{color:#3fa300}.file-description .ng-fa-icon.fa-file-image{color:#e217da}.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#5d6a75}.go-up-dots{font-size:16px;margin:0 0 0 12px;height:19px}.go-up-icon{width:30px;height:30px}.file-name{font-size:16px;color:#6e6e6e}.file-name-format{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:16px;display:flex;flex-direction:column;margin-top:16px;cursor:pointer;color:#6e6e6e}.file-format{font-size:10px}.list-files-lines{border-top:1px solid #ccc;display:flex;flex-direction:row;width:100%;height:65px}.list-files-lines:hover{background-color:#e5e5e5}.gd-dnd-wrap{background-color:#fff;cursor:default;position:absolute;width:inherit;height:inherit;opacity:.9;z-index:1;display:flex;text-align:center;justify-content:center;align-content:center;flex-direction:column}.gd-dnd-wrap h2{color:#959da5;font-size:15px;font-weight:300}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-file-checkbox{height:20px;margin:22px 23px 0 25px}.gd-file-checkbox.empty{width:25px}.file-format-select{display:flex;align-items:center;padding:5px;width:46px;margin-right:20px}.file-format-select ::ng-deep .button{padding:0;width:36px}.file-format-select ::ng-deep .show .button{background-color:#25c2d4;color:#fff}.gd-checkbox{width:19px;height:19px;margin:0}.gd-checkbox:before{position:relative;display:flex;width:17px;height:17px;border:1px solid #707070;content:\"\";background:#fff;cursor:pointer}.gd-checkbox:after{position:relative;display:flex;left:1px;top:-18px;width:16px;height:16px;content:\"\";cursor:pointer}.gd-checkbox:checked:after{font-family:\"Font Awesome 5 Free\";content:\"\\f00c\";font-weight:900;font-size:16px;color:#6e6e6e}.gd-select-all{position:relative;top:6px;margin-right:20px}.gd-add-selected.active{cursor:pointer;opacity:1}.gd-add-selected{width:140px;height:36px;background-color:#3e4e5a;color:#fff;margin:0 8px 0 0;border:0;cursor:not-allowed;opacity:.43}.gd-folder-name{margin-top:8px}@media (max-width:1025px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}#gd-browse-section{width:100%}.file-size,.list-files-header{display:none}.context-actions{justify-content:space-between}}"]
            }] }
];
/** @nocollapse */
ConversionBrowseFilesModalComponent.ctorParameters = () => [
    { type: UploadFilesService },
    { type: ConversionService },
    { type: ModalService }
];
ConversionBrowseFilesModalComponent.propDecorators = {
    files: [{ type: Input }],
    selectAll: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConversionQueueComponent {
    constructor() {
        this.items = [];
        this.selectedItemToConvert = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    convertSingleItem($event) {
        this.selectedItemToConvert.emit($event);
    }
}
ConversionQueueComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-conversion-queue',
                template: "<div id=\"gd-convert-queue\">\n  <div class=\"gd-queue-header\">\n    <div class=\"gd-placeholder\"></div>\n    <div>Source</div>\n    <div>Size</div>\n    <div>State</div>\n    <div>Target</div>\n    <div class=\"gd-queue-last-placeholder\"></div>\n  </div>\n  <div *ngFor=\"let item of items\">\n      <gd-conversion-item [item]=\"item\"></gd-conversion-item>\n  </div>\n</div>",
                styles: ["#gd-convert-queue{flex-direction:column;height:100%;padding-top:5px;background-color:#e7e7e7}.gd-queue-header{display:flex;font-size:11px;color:#acacac;width:100%;height:17px}.gd-placeholder{margin:0 27px 0 35px}.gd-queue-header div:nth-child(2){width:671px;text-align:left;display:flex}.gd-queue-header div:nth-child(4){margin:0 122px 0 99px;width:32px}.gd-queue-header div:nth-child(3){width:121px;text-align:left}.gd-queue-header div:nth-child(5){width:671px;text-align:left}.gd-queue-last-placeholder{margin:0 52px}@media (max-width:480px){.gd-queue-header{display:none}}"]
            }] }
];
/** @nocollapse */
ConversionQueueComponent.ctorParameters = () => [];
ConversionQueueComponent.propDecorators = {
    items: [{ type: Input }],
    selectedItemToConvert: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConversionItemComponent {
    /**
     * @param {?} _conversionService
     */
    constructor(_conversionService) {
        this._conversionService = _conversionService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    convert($event, item) {
        $event.preventDefault();
        $event.stopPropagation();
        this._conversionService.selectedItemToConvert(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    downloadFile(item) {
        window.location.assign(this._conversionService.getDownloadUrl(item.destinationFileName));
    }
    /**
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    removeItemFromQueue($event, item) {
        $event.preventDefault();
        $event.stopPropagation();
        this._conversionService.selectedItemToRemove(item);
    }
}
ConversionItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-conversion-item',
                template: "<div class=\"gd-convert-item\">\n  <div class=\"gd-convert-remove\" (click)=\"removeItemFromQueue($event, item)\">\n    <span>&times;</span>\n  </div>\n  <div class=\"gd-filequeue-name disabled\">\n    <fa-icon [icon]=\"['far', item.sourceIcon]\" [class]=\"'ng-fa-icon'\"></fa-icon>\n    <div class=\"gd-file-name gd-queue-name\">{{item.name}}\n      <div class=\"gd-file-format\">{{item.sourceFormatName}}</div>\n      <div class=\"gd-file-format mobile\">\n        <fa-icon [icon]=\"['fas','arrow-right']\"></fa-icon> \n        <fa-icon [icon]=\"['fas', item.destinationIcon]\" [class]=\"'ng-fa-icon'\" [ngClass]=\"['fa-' + item.destinationIcon]\"></fa-icon>{{item.destinationFileName}}\n      </div>\n    </div>\n  </div>\n  <div class=\"gd-file-size gd-queue-size\">{{item.sizeString}}</div>\n  <div class=\"gd-convert-status\">\n      <fa-icon class=\"gd-conversion-pending\" [icon]=\"['far','clock']\" [hidden]=\"item.converted || item.converting\"></fa-icon>\n      <fa-icon class=\"gd-conversion-progress\" [icon]=\"['fas','circle-notch']\" [spin]=\"true\" [hidden]=\"!item.converting\"></fa-icon>\n      <fa-icon class=\"gd-conversion-complete\" [icon]=\"['fas','check']\" [hidden]=\"!item.converted || item.converting\"></fa-icon>\n  </div>\n  <div class=\"gd-filequeue-name disabled gd-destination-file\">\n      <fa-icon [icon]=\"['far', item.destinationIcon]\" [class]=\"'ng-fa-icon'\" [ngClass]=\"[item.converted ? 'fa-' + item.destinationIcon : '']\"></fa-icon>\n    <div class=\"gd-file-name gd-queue-name\">{{item.destinationFileName}}<div class=\"gd-file-format\">{{item.destinationFormatName}}</div></div>\n  </div>\n  <div (click)=\"convert($event, item)\" class=\"gd-convert-single\" \n      [ngClass]=\"{'disabled': item.converting}\" [hidden]=\"item.converted\">\n      <fa-icon [icon]=\"['fas','exchange-alt']\"></fa-icon>\n  </div>\n  <div (click)=\"convert($event, item)\" class=\"gd-convert-single mobile\" \n    [ngClass]=\"{'disabled': item.converting}\" *ngIf=\"!item.converted && !item.converting\">\n    <fa-icon [icon]=\"['fas','exchange-alt']\"></fa-icon>\n  </div>\n  <fa-icon class=\"gd-conversion-progress mobile\" [icon]=\"['fas','circle-notch']\" [spin]=\"true\" *ngIf=\"item.converting\"></fa-icon>\n  <div (click)=\"downloadFile(item)\" class=\"gd-download-single\" [hidden]=\"!item.converted\">\n    <fa-icon [icon]=\"['fas','download']\"></fa-icon>\n  </div>\n</div>",
                styles: [".gd-convert-item{display:flex;width:100%;height:72px;border-bottom:1px solid #ccc}.gd-convert-remove{font-size:21px;color:#6e6e6e;margin:23px 27px 0 21px;cursor:pointer}.gd-filequeue-name{display:flex;width:671px}.gd-filequeue-name.disabled fa-icon{color:#6e6e6e}.gd-queue-name{text-align:left;margin-top:16px;cursor:default}.gd-queue-size{text-align:left;font-size:14px;margin-top:23px}.gd-destination-file{cursor:not-allowed}.gd-destination-file .gd-queue-name{cursor:inherit}.gd-convert-status{font-size:32px;color:#dbdbdb;margin:16px 122px 0 111px}.gd-conversion-complete{color:#62a529;margin-left:5px}.gd-conversion-progress{position:inherit;width:32px;height:32px;font-size:32px!important;margin-top:-5px;color:#007aff}.gd-conversion-progress.mobile{display:none}.gd-convert-single,.gd-download-single{font-size:16px;color:grey;margin:29px 52px;cursor:pointer}.gd-convert-single.mobile,.gd-download-single.mobile{display:none}.gd-file-format{font-size:11px}.gd-file-format.mobile{display:none}.gd-file-size{width:112px;color:#777}.disabled{cursor:not-allowed!important}.gd-convert-item .ng-fa-icon.fa-file-pdf{color:#e21717}.gd-convert-item .ng-fa-icon.fa-file-word{color:#6979b9}.gd-convert-item .ng-fa-icon.fa-file-powerpoint{color:#e29417}.gd-convert-item .ng-fa-icon.fa-file-excel{color:#3fa300}.gd-convert-item .ng-fa-icon.fa-file-image{color:#e217da}.gd-convert-item .ng-fa-icon.fa-file-text .fa-folder{color:#5d6a75}.gd-convert-status .ng-fa-icon,.gd-destination-file .ng-fa-icon,.gd-filequeue-name .ng-fa-icon{font-size:32px}.gd-filequeue-name fa-icon{font-size:32px;margin:16px 21px 0 0}@media (max-width:480px){.gd-convert-status,.gd-destination-file,.gd-file-size{display:none}.gd-conversion-progress.mobile{display:block;margin:16px 45px}.gd-convert-single.mobile{display:block}.gd-convert-single:not(.mobile){display:none}.gd-file-format.mobile{display:block}.gd-file-format.mobile>fa-icon{color:#bebebe}.gd-file-format.mobile fa-icon{font-size:11px;margin-right:6px}.gd-file-format{font-size:11px}.gd-file-format:not(.mobile){display:none}.gd-filequeue-name{white-space:nowrap;overflow:hidden}}"]
            }] }
];
/** @nocollapse */
ConversionItemComponent.ctorParameters = () => [
    { type: ConversionService }
];
ConversionItemComponent.propDecorators = {
    item: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DndInitStateComponent {
    /**
     * @param {?} _modalService
     */
    constructor(_modalService) {
        this._modalService = _modalService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    dropped($event) {
        if ($event) {
            this._modalService.open(CommonModals.BrowseFiles);
        }
    }
}
DndInitStateComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-dnd-init-state',
                template: "<div class=\"wrapper\" gdDnd (dropped)=\"dropped($event)\">\n  <fa-icon class=\"icon\" [icon]=\"['fas',icon]\"></fa-icon>\n  <span class=\"text\">Conversion queue is empty</span>\n  <span class=\"start\">Drag your document here or click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file</span>\n</div>\n",
                styles: [".wrapper{color:#959da5;background-color:#e7e7e7;display:flex;flex-direction:column;justify-content:center;align-content:center;width:100%;height:100%}.icon{font-size:65px;text-align:center;margin-bottom:38px}.start,.text{font-size:15px;text-align:center}.active{background-color:#bababa}"]
            }] }
];
/** @nocollapse */
DndInitStateComponent.ctorParameters = () => [
    { type: ModalService }
];
DndInitStateComponent.propDecorators = {
    icon: [{ type: Input }],
    text: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} conversionConfigService
 * @return {?}
 */
function initializeApp(conversionConfigService) {
    /** @type {?} */
    const result = (/**
     * @return {?}
     */
    () => conversionConfigService.load());
    return result;
}
class ConversionModule {
    constructor() {
        library.add(fas, far);
    }
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    static forRoot(apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: ConversionModule
        };
    }
}
ConversionModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ConversionAppComponent, ConversionBrowseFilesModalComponent, ConversionQueueComponent, ConversionItemComponent, DndInitStateComponent],
                exports: [ConversionAppComponent, ConversionBrowseFilesModalComponent, ConversionQueueComponent],
                imports: [CommonModule,
                    CommonComponentsModule,
                    HttpClientModule,
                    FontAwesomeModule],
                providers: [
                    ConversionService,
                    ConfigService,
                    ConversionConfigService,
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: ErrorInterceptorService,
                        multi: true
                    },
                    {
                        provide: APP_INITIALIZER,
                        useFactory: initializeApp,
                        deps: [ConversionConfigService], multi: true
                    }
                ]
            },] }
];
/** @nocollapse */
ConversionModule.ctorParameters = () => [];

export { ConversionAppComponent, ConversionConfigService, ConversionItemModel, ConversionModule, ConversionRequestModel, ConversionService, ExtendedFileModel, initializeApp, ConversionBrowseFilesModalComponent as ɵa, ConversionQueueComponent as ɵb, ConversionItemComponent as ɵc, DndInitStateComponent as ɵd };
//# sourceMappingURL=groupdocs.examples.angular-conversion.js.map
