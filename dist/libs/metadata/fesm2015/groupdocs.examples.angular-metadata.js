import { BrowserModule } from '@angular/platform-browser';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, Input, EventEmitter, Output, ViewChildren, Directive, ElementRef, HostListener, ViewChild, NgModule, APP_INITIALIZER } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Api, ConfigService, FileDescription, CommonModals, ModalService, UploadFilesService, NavigateService, ZoomService, PasswordService, LoadingMaskService, WindowService, ModalComponent, ButtonComponent, LoadingMaskInterceptorService, CommonComponentsModule, ErrorInterceptorService } from '@groupdocs.examples.angular/common-components';
import { BehaviorSubject } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as moment_ from 'moment';
import { NgModel, FormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';

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
     * @param {?} metadataFile
     * @return {?}
     */
    cleanMetadata(metadataFile) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.CLEAN_METADATA, metadataFile, Api.httpOptionsJson);
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
    exportProperties(credentials) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.EXPORT_METADATA, credentials, Api.httpOptionsJsonResponseTypeBlob);
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
    MetadataFileDescription.prototype.password;
    /** @type {?} */
    MetadataFileDescription.prototype.packages;
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
/** @enum {number} */
const AccessLevels = {
    Read: 0,
    Update: 1,
    Remove: 2,
    Add: 4,
    AddOrUpdate: 5,
    Full: 7,
};
AccessLevels[AccessLevels.Read] = 'Read';
AccessLevels[AccessLevels.Update] = 'Update';
AccessLevels[AccessLevels.Remove] = 'Remove';
AccessLevels[AccessLevels.Add] = 'Add';
AccessLevels[AccessLevels.AddOrUpdate] = 'AddOrUpdate';
AccessLevels[AccessLevels.Full] = 'Full';
/** @enum {number} */
const MetadataPropertyType = {
    Empty: 0,
    String: 1,
    Boolean: 2,
    DateTime: 3,
    TimeSpan: 4,
    Integer: 5,
    Long: 6,
    Double: 7,
    StringArray: 8,
    ByteArray: 9,
    DoubleArray: 10,
    IntegerArray: 11,
    LongArray: 12,
    Metadata: 13,
    MetadataArray: 14,
    Guid: 15,
    PropertyValueArray: 16,
};
MetadataPropertyType[MetadataPropertyType.Empty] = 'Empty';
MetadataPropertyType[MetadataPropertyType.String] = 'String';
MetadataPropertyType[MetadataPropertyType.Boolean] = 'Boolean';
MetadataPropertyType[MetadataPropertyType.DateTime] = 'DateTime';
MetadataPropertyType[MetadataPropertyType.TimeSpan] = 'TimeSpan';
MetadataPropertyType[MetadataPropertyType.Integer] = 'Integer';
MetadataPropertyType[MetadataPropertyType.Long] = 'Long';
MetadataPropertyType[MetadataPropertyType.Double] = 'Double';
MetadataPropertyType[MetadataPropertyType.StringArray] = 'StringArray';
MetadataPropertyType[MetadataPropertyType.ByteArray] = 'ByteArray';
MetadataPropertyType[MetadataPropertyType.DoubleArray] = 'DoubleArray';
MetadataPropertyType[MetadataPropertyType.IntegerArray] = 'IntegerArray';
MetadataPropertyType[MetadataPropertyType.LongArray] = 'LongArray';
MetadataPropertyType[MetadataPropertyType.Metadata] = 'Metadata';
MetadataPropertyType[MetadataPropertyType.MetadataArray] = 'MetadataArray';
MetadataPropertyType[MetadataPropertyType.Guid] = 'Guid';
MetadataPropertyType[MetadataPropertyType.PropertyValueArray] = 'PropertyValueArray';
/** @enum {number} */
const MetadataType = {
    Undefined: 0,
    Root: 1,
    Xmp: 2,
    Exif: 3,
    Iptc: 4,
    DublinCore: 5,
    ImageResourceBlock: 6,
    FileFormat: 7,
    DigitalSignature: 8,
    Presentation: 9,
    Spreadsheet: 10,
    WordProcessing: 11,
    Diagram: 12,
    Note: 13,
    ProjectManagement: 14,
    Pdf: 15,
    DocumentStatistics: 16,
    Psd: 17,
    Jpeg2000: 18,
    Dicom: 19,
    Bmp: 20,
    Wav: 21,
    ID3V1: 22,
    ID3V2: 23,
    MpegAudio: 24,
    Lyrics3: 25,
    ApeV2: 26,
    Avi: 27,
    Flv: 28,
    Asf: 29,
    Mov: 30,
    Matroska: 31,
    Zip: 32,
    VCard: 33,
    Epub: 34,
    OpenType: 35,
    Cad: 36,
    Eml: 37,
    Msg: 38,
    Torrent: 39,
};
MetadataType[MetadataType.Undefined] = 'Undefined';
MetadataType[MetadataType.Root] = 'Root';
MetadataType[MetadataType.Xmp] = 'Xmp';
MetadataType[MetadataType.Exif] = 'Exif';
MetadataType[MetadataType.Iptc] = 'Iptc';
MetadataType[MetadataType.DublinCore] = 'DublinCore';
MetadataType[MetadataType.ImageResourceBlock] = 'ImageResourceBlock';
MetadataType[MetadataType.FileFormat] = 'FileFormat';
MetadataType[MetadataType.DigitalSignature] = 'DigitalSignature';
MetadataType[MetadataType.Presentation] = 'Presentation';
MetadataType[MetadataType.Spreadsheet] = 'Spreadsheet';
MetadataType[MetadataType.WordProcessing] = 'WordProcessing';
MetadataType[MetadataType.Diagram] = 'Diagram';
MetadataType[MetadataType.Note] = 'Note';
MetadataType[MetadataType.ProjectManagement] = 'ProjectManagement';
MetadataType[MetadataType.Pdf] = 'Pdf';
MetadataType[MetadataType.DocumentStatistics] = 'DocumentStatistics';
MetadataType[MetadataType.Psd] = 'Psd';
MetadataType[MetadataType.Jpeg2000] = 'Jpeg2000';
MetadataType[MetadataType.Dicom] = 'Dicom';
MetadataType[MetadataType.Bmp] = 'Bmp';
MetadataType[MetadataType.Wav] = 'Wav';
MetadataType[MetadataType.ID3V1] = 'ID3V1';
MetadataType[MetadataType.ID3V2] = 'ID3V2';
MetadataType[MetadataType.MpegAudio] = 'MpegAudio';
MetadataType[MetadataType.Lyrics3] = 'Lyrics3';
MetadataType[MetadataType.ApeV2] = 'ApeV2';
MetadataType[MetadataType.Avi] = 'Avi';
MetadataType[MetadataType.Flv] = 'Flv';
MetadataType[MetadataType.Asf] = 'Asf';
MetadataType[MetadataType.Mov] = 'Mov';
MetadataType[MetadataType.Matroska] = 'Matroska';
MetadataType[MetadataType.Zip] = 'Zip';
MetadataType[MetadataType.VCard] = 'VCard';
MetadataType[MetadataType.Epub] = 'Epub';
MetadataType[MetadataType.OpenType] = 'OpenType';
MetadataType[MetadataType.Cad] = 'Cad';
MetadataType[MetadataType.Eml] = 'Eml';
MetadataType[MetadataType.Msg] = 'Msg';
MetadataType[MetadataType.Torrent] = 'Torrent';
class FilePropertyModel {
}
if (false) {
    /** @type {?} */
    FilePropertyModel.prototype.name;
    /** @type {?} */
    FilePropertyModel.prototype.value;
    /** @type {?} */
    FilePropertyModel.prototype.type;
    /** @type {?} */
    FilePropertyModel.prototype.added;
    /** @type {?} */
    FilePropertyModel.prototype.selected;
    /** @type {?} */
    FilePropertyModel.prototype.editing;
    /** @type {?} */
    FilePropertyModel.prototype.edited;
}
class KnownPropertyModel {
}
if (false) {
    /** @type {?} */
    KnownPropertyModel.prototype.name;
    /** @type {?} */
    KnownPropertyModel.prototype.type;
    /** @type {?} */
    KnownPropertyModel.prototype.accessLevel;
}
class PackageModel {
}
if (false) {
    /** @type {?} */
    PackageModel.prototype.id;
    /** @type {?} */
    PackageModel.prototype.name;
    /** @type {?} */
    PackageModel.prototype.index;
    /** @type {?} */
    PackageModel.prototype.type;
    /** @type {?} */
    PackageModel.prototype.properties;
    /** @type {?} */
    PackageModel.prototype.knownProperties;
}
class RemovePropertyModel {
}
if (false) {
    /** @type {?} */
    RemovePropertyModel.prototype.packageId;
    /** @type {?} */
    RemovePropertyModel.prototype.property;
}
class ChangedPackageModel {
}
if (false) {
    /** @type {?} */
    ChangedPackageModel.prototype.id;
    /** @type {?} */
    ChangedPackageModel.prototype.properties;
}
class FilePreview extends FileDescription {
}
if (false) {
    /** @type {?} */
    FilePreview.prototype.timeLimitExceeded;
}
/** @type {?} */
const PackageNameByMetadataType = {
    [MetadataType.WordProcessing]: "Document Properties",
    [MetadataType.Spreadsheet]: "Workbook Properties",
    [MetadataType.Presentation]: "Presentation Properties",
    [MetadataType.ProjectManagement]: "Project Properties",
    [MetadataType.Diagram]: "Diagram Properties",
    [MetadataType.Note]: "Note Properties",
    [MetadataType.Pdf]: "PDF Properties",
    [MetadataType.FileFormat]: "File Format Info",
    [MetadataType.DocumentStatistics]: "Document Statistics",
    [MetadataType.DublinCore]: "Dublin Core Properties",
    [MetadataType.ImageResourceBlock]: "Image Resources",
    [MetadataType.MpegAudio]: "Mpeg Audio Properties",
    [MetadataType.DigitalSignature]: "Digital Signature Properties",
};
/** @type {?} */
const PackageNameByOriginalName = {
    "NotePage": "Page",
    "ZipFile": "Archived File",
    "TorrentSharedFilePackage": "Shared File",
    "MovAtom": "Atom",
    "CanonMakerNotePackage": "Canon Makernote",
    "NikonMakerNotePackage": "Nikon Makernote",
    "PanasonicMakerNotePackage": "Panasonic Makernote",
    "SonyMakerNotePackage": "Sony Makernote",
    "MatroskaSegment": "Segment",
    "MatroskaAudioTrack": "Track",
    "MatroskaSubtitleTrack": "Track",
    "MatroskaVideoTrack": "Track",
    "MatroskaTrack": "Track",
    "MatroskaTag": "Tag",
    "MatroskaEbmlHeader": "Header",
    "VCardCard": "Card",
    "AsfCodec": "Codec",
    "AsfBaseStreamProperty": "Stream",
    "AsfAudioStreamProperty": "Stream",
    "AsfVideoStreamProperty": "Stream",
    "AsfMetadataDescriptorCollection": "Descriptors",
    "OpenTypeFont": "Font",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const PreviewStatus = {
    Undefined: 0,
    InProgress: 1,
    Timeout: 2,
    Unavailable: 3,
    Loaded: 4,
};
PreviewStatus[PreviewStatus.Undefined] = 'Undefined';
PreviewStatus[PreviewStatus.InProgress] = 'InProgress';
PreviewStatus[PreviewStatus.Timeout] = 'Timeout';
PreviewStatus[PreviewStatus.Unavailable] = 'Unavailable';
PreviewStatus[PreviewStatus.Loaded] = 'Loaded';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MetadataAppComponent {
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
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.logo-link{color:inherit;text-decoration:inherit}.doc-panel{display:flex;height:calc(100vh - 60px);flex-direction:row}.top-panel{display:flex;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}::ng-deep .tools .button{color:#fff!important;flex-flow:column}::ng-deep .tools .button.inactive{color:#959da5!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}.row{display:flex}.column{width:100%;height:100vh;background-color:#e7e7e7;overflow:hidden}::ng-deep .gd-side-panel-body{background-color:#f4f4f4}::ng-deep .gd-side-panel-wrapper{width:464px!important}::ng-deep .page.excel{overflow:unset!important}@media (max-width:1037px){::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .gd-side-panel-wrapper{width:375px!important}}"]
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccordionComponent {
    /**
     * @return {?}
     */
    ngAfterContentInit() {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const moment = moment_;
class AccordionGroupComponent {
    /**
     * @param {?} windowService
     */
    constructor(windowService) {
        this.windowService = windowService;
        this.opened = true;
        this.removeProperty = new EventEmitter();
        this.datePickerConfig = {
            format: 'DD-MM-YYYY HH:mm:ss'
        };
        this.editableTypes = new Set([
            MetadataPropertyType.String,
            MetadataPropertyType.Integer,
            MetadataPropertyType.Long,
            MetadataPropertyType.Double,
            MetadataPropertyType.Boolean,
            MetadataPropertyType.DateTime
        ]);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isDesktop = this.windowService.isDesktop();
        this.windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.isDesktop = this.windowService.isDesktop();
        }));
        this.knownPropertyDictionary = this.toDictionary(this.knownProperties);
        this.updateNotAddedProperties();
        this.metadataPropertyType = MetadataPropertyType;
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
    resetProperties() {
        this.properties.forEach((/**
         * @param {?} p
         * @return {?}
         */
        p => { p.selected = false; p.editing = false; }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggle($event) {
        this.opened = !this.opened;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    addProperty($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.resetProperties();
        if (this.isAddAvailable()) {
            /** @type {?} */
            const addedProperty = new FilePropertyModel();
            addedProperty.added = true;
            addedProperty.editing = true;
            addedProperty.name = "Select property";
            addedProperty.type = 1;
            this.properties.push(addedProperty);
        }
    }
    /**
     * @param {?} property
     * @return {?}
     */
    selectProperty(property) {
        this.resetProperties();
        property.selected = !property.selected;
    }
    /**
     * @param {?} property
     * @return {?}
     */
    editProperty(property) {
        if (this.isEditable(property)) {
            this.resetProperties();
            property.editing = !property.editing;
            property.edited = true;
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
        this.removeProperty.emit({ packageId: this.packageId, property: selectedProperty });
    }
    /**
     * @return {?}
     */
    isRemoveAvailable() {
        return this.properties && this.properties.filter((/**
         * @param {?} p
         * @return {?}
         */
        p => p.selected && this.isRemovable(p))).length === 1;
    }
    /**
     * @return {?}
     */
    isAddAvailable() {
        return !this.addDisabled && this.notAddedProperties.length > 0;
    }
    /**
     * @param {?} $event
     * @param {?} property
     * @return {?}
     */
    selectPropName($event, property) {
        property.type = $event.type;
        property.name = $event.name;
        if ($event.type === MetadataPropertyType.DateTime) {
            property.value = moment().toISOString();
        }
        else {
            property.value = "";
        }
        this.updateNotAddedProperties();
    }
    /**
     * @param {?} property
     * @return {?}
     */
    formatValue(property) {
        switch (property.type) {
            case MetadataPropertyType.DateTime:
                return this.dateToPicker(property.value);
            default:
                return property.value;
        }
    }
    /**
     * @return {?}
     */
    updateNotAddedProperties() {
        /** @type {?} */
        const propertyDictionary = this.toDictionary(this.properties);
        // tslint:disable-next-line:no-bitwise
        this.notAddedProperties = this.knownProperties.filter((/**
         * @param {?} p
         * @return {?}
         */
        p => (p.accessLevel & AccessLevels.Add) !== 0 && !(p.name in propertyDictionary)));
    }
    /**
     * @param {?} property
     * @return {?}
     */
    isEditable(property) {
        if (this.editableTypes.has(property.type)) {
            return this.hasAccessTo(property, AccessLevels.Update);
        }
    }
    /**
     * @param {?} property
     * @return {?}
     */
    isRemovable(property) {
        return this.hasAccessTo(property, AccessLevels.Remove);
    }
    /**
     * @param {?} property
     * @param {?} accessLevel
     * @return {?}
     */
    hasAccessTo(property, accessLevel) {
        // tslint:disable-next-line:no-bitwise
        return property.name in this.knownPropertyDictionary && (this.knownPropertyDictionary[property.name].accessLevel & accessLevel) !== 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    dateToPicker(value) {
        if (value) {
            return moment.utc(value).local().format(this.datePickerConfig.format);
        }
        return null;
    }
    /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    dateFromPicker(property, value) {
        if (value) {
            /** @type {?} */
            const dateTime = moment(value, this.datePickerConfig.format);
            property.value = dateTime.toISOString();
        }
    }
    /**
     * @param {?} array
     * @return {?}
     */
    toDictionary(array) {
        return array.reduce((/**
         * @param {?} obj
         * @param {?} item
         * @return {?}
         */
        (obj, item) => {
            obj[item.name] = item;
            return obj;
        }), {});
    }
}
AccordionGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-accordion-group',
                template: "<div class=\"accordion-wrapper\">\r\n    <div class=\"title\" (click)=\"toggle($event)\">\r\n      <fa-icon *ngIf=\"!opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-down']\"></fa-icon>\r\n      <fa-icon *ngIf=\"opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-up']\"></fa-icon>\r\n      <div class=\"text\">{{title}}</div>\r\n      <fa-icon class=\"trash\" *ngIf=\"isRemoveAvailable()\" [icon]=\"['fas', 'trash']\" (click)=\"delete($event)\"></fa-icon>\r\n      <gd-button class=\"plus\" [icon]=\"['plus']\" [hidden]=\"addHidden\" [disabled]=\"!isAddAvailable()\" (click)=\"addProperty($event)\"></gd-button>\r\n    </div>\r\n    <div class=\"body\" [ngClass]=\"{'hidden': !opened}\">\r\n      <div *ngFor=\"let property of properties\" class=\"property-wrapper\">\r\n          <div *ngIf=\"!property.added\" [ngClass]=\"{'selected': property.selected, 'disabled': !isEditable(property)}\" (click)=\"selectProperty(property)\" class=\"property-name property-name-simple\" title=\"{{property.name}}\">{{property.name}}</div>\r\n          <gd-select  class=\"property-name\" *ngIf=\"property.added\" id=\"propertiesNames\" [disabled]=\"false\" [options]=\"notAddedProperties\" (selected)=\"selectPropName($event, property)\" [showSelected]=\"{name : property.name, value : property.name}\"></gd-select>\r\n          <div *ngIf=\"!property.editing\" [ngClass]=\"{'selected': property.selected}\" (click)=\"editProperty(property)\" class=\"property-value\" title=\"{{property.value}}\">{{formatValue(property)}}</div>\r\n          <div *ngIf=\"property.editing\" class=\"input-wrapper\">\r\n            <input #textinput *ngIf=\"property.type == metadataPropertyType.String\" class=\"property-value\" [(ngModel)]=\"property.value\" />\r\n            <input *ngIf=\"property.type == metadataPropertyType.Integer || property.type == metadataPropertyType.Long\" type=\"text\" class=\"property-value\" [(ngModel)]=\"property.value\" gdInteger />\r\n            <input *ngIf=\"property.type == metadataPropertyType.Double\" type=\"number\" class=\"property-value\" [(ngModel)]=\"property.value\" />\r\n            <input *ngIf=\"property.type == metadataPropertyType.Boolean\" type=\"checkbox\" class=\"property-value\" [(ngModel)]=\"property.value\" />\r\n            <dp-date-picker *ngIf=\"property.type == metadataPropertyType.DateTime\" [mode]=\"'daytime'\" [theme]=\"'dp-material dp-main'\" [config]=\"datePickerConfig\" [ngModel]=\"dateToPicker(property.value)\" (ngModelChange)=\"dateFromPicker(property, $event)\" ></dp-date-picker>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <div>",
                styles: [".accordion-wrapper{background-color:#fff}.accordion-wrapper .title{width:100%;cursor:pointer;border-bottom:1px solid #6e6e6e;background-color:#539cf0;color:#f4f4f4;font-weight:700;display:flex;flex-direction:row;height:37px;line-height:37px;font-size:13px}.accordion-wrapper .title .text{width:100%}.chevron{padding:0 16px 0 15px}.plus{margin-left:auto}::ng-deep .title .button{color:#fff!important;display:block!important;margin-right:0!important}::ng-deep .title .button.active fa-icon{color:#fff!important}.accordion-wrapper .body.hidden,.trash.hidden{display:none}.property-wrapper{display:flex;height:35px;font-size:12px;border-bottom:1px solid #e7e7e7;line-height:35px}.property-wrapper.disabled{cursor:not-allowed;color:#acacac}.property-name{width:216px;text-transform:uppercase;font-weight:700;padding-left:15px;border-right:1px solid #e7e7e7;text-overflow:ellipsis;word-wrap:break-word}.property-name.disabled{color:#acacac}.property-name ::ng-deep .select{height:35px;line-height:37px;text-align:center;justify-content:unset;position:relative}.property-name ::ng-deep .select .nav-caret{display:none}.property-name ::ng-deep .select .selected-value{max-width:none;font-size:unset;text-transform:none;font-weight:400}.property-name ::ng-deep .select .dropdown-menu{width:216px;margin-left:-15px;top:36px}.property-name-simple{overflow-x:hidden;word-wrap:normal}.property-value{font-family:'Courier New',Courier,monospace;padding-left:12px;text-overflow:ellipsis;width:216px;white-space:nowrap;overflow:hidden;word-wrap:break-word;display:inline-block}.property-value.desktop-hide{display:none}::ng-deep dp-date-picker.dp-material .dp-picker-input,::ng-deep dp-day-time-calendar *{font-family:'Courier New',Courier,monospace}.input-wrapper input{height:30px;border:0;font-size:12px}.input-wrapper input.hidden{display:none}.input-wrapper input[type=datetime-local]::-webkit-clear-button,.input-wrapper input[type=datetime-local]::-webkit-inner-spin-button{-webkit-appearance:none;display:none}.selected{background-color:#3e4e5a;color:#fff}::ng-deep .default .property-name{color:#acacac}@media (max-width:1037px){.property-value{width:194px!important}.property-name{width:150px!important}.property-value.mobile-hide{display:none}.input-wrapper{width:185px!important}}"]
            }] }
];
/** @nocollapse */
AccordionGroupComponent.ctorParameters = () => [
    { type: WindowService }
];
AccordionGroupComponent.propDecorators = {
    knownProperties: [{ type: Input }],
    opened: [{ type: Input }],
    title: [{ type: Input }],
    packageId: [{ type: Input }],
    addDisabled: [{ type: Input }],
    addHidden: [{ type: Input }],
    properties: [{ type: Input }],
    removeProperty: [{ type: Output }],
    textinput: [{ type: ViewChildren, args: ['textinput',] }]
};
if (false) {
    /** @type {?} */
    AccordionGroupComponent.prototype.knownProperties;
    /** @type {?} */
    AccordionGroupComponent.prototype.opened;
    /** @type {?} */
    AccordionGroupComponent.prototype.title;
    /** @type {?} */
    AccordionGroupComponent.prototype.packageId;
    /** @type {?} */
    AccordionGroupComponent.prototype.addDisabled;
    /** @type {?} */
    AccordionGroupComponent.prototype.addHidden;
    /** @type {?} */
    AccordionGroupComponent.prototype.properties;
    /** @type {?} */
    AccordionGroupComponent.prototype.removeProperty;
    /** @type {?} */
    AccordionGroupComponent.prototype.knownPropertyDictionary;
    /** @type {?} */
    AccordionGroupComponent.prototype.notAddedProperties;
    /** @type {?} */
    AccordionGroupComponent.prototype.metadataPropertyType;
    /** @type {?} */
    AccordionGroupComponent.prototype.textinput;
    /** @type {?} */
    AccordionGroupComponent.prototype.isDesktop;
    /** @type {?} */
    AccordionGroupComponent.prototype.datePickerConfig;
    /** @type {?} */
    AccordionGroupComponent.prototype.editableTypes;
    /**
     * @type {?}
     * @private
     */
    AccordionGroupComponent.prototype.windowService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccordionService {
    constructor() {
        this._addingObserver = new BehaviorSubject(null);
        this._addedProperty = this._addingObserver.asObservable();
    }
    /**
     * @return {?}
     */
    get addedProperty() {
        return this._addedProperty;
    }
    /**
     * @param {?} addedProperty
     * @return {?}
     */
    addProperty(addedProperty) {
        this._addingObserver.next(addedProperty);
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
    AccordionService.prototype._addedProperty;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GdIntegerDirective {
    /**
     * @param {?} ngModel
     * @param {?} element
     */
    constructor(ngModel, element) {
        this.ngModel = ngModel;
        this.element = element;
        this.specialKeys = [
            'Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'
        ];
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isInteger(value) {
        return String(value).match(new RegExp(/^(\-){0,1}\d*$/));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        /** @type {?} */
        const current = this.element.nativeElement.value;
        /** @type {?} */
        const position = this.element.nativeElement.selectionStart;
        /** @type {?} */
        const next = [current.slice(0, position), event.key, current.slice(position)].join('');
        if (next && !this.isInteger(next)) {
            event.preventDefault();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ngModel.control.valueChanges.subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const value = this.element.nativeElement.value;
            if (!value)
                return;
            this.ngModel.control.setValue(value === "-" ? 0 : parseInt(value, 10), { emitModelToViewChange: false, emitViewToModelChange: true, emitEvent: false });
        }));
    }
}
GdIntegerDirective.decorators = [
    { type: Directive, args: [{
                selector: "[gdInteger]"
            },] }
];
/** @nocollapse */
GdIntegerDirective.ctorParameters = () => [
    { type: NgModel },
    { type: ElementRef }
];
GdIntegerDirective.propDecorators = {
    onKeyDown: [{ type: HostListener, args: ["keydown", ["$event"],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    GdIntegerDirective.prototype.specialKeys;
    /**
     * @type {?}
     * @private
     */
    GdIntegerDirective.prototype.ngModel;
    /**
     * @type {?}
     * @private
     */
    GdIntegerDirective.prototype.element;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfirmModalComponent {
    constructor() {
        this.confirm = new EventEmitter();
        this.cancel = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onConfirm($event) {
        this.cleanUpAndClose($event);
        this.confirm.emit();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onCancel($event) {
        this.cleanUpAndClose($event);
        this.cancel.emit();
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    cleanUpAndClose($event) {
        $event.stopPropagation();
        this.buttons.forEach((/**
         * @param {?} button
         * @return {?}
         */
        button => button.onUnhovering()));
        this.modal.close();
    }
}
ConfirmModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-confirm-modal',
                template: "<gd-modal [id]=\"id\" [title]=\"'Confirm action'\">\r\n    <section id=\"gd-confirm-section\">\r\n        <div class=\"gd-confirm-wrap\">\r\n          <span class=\"gd-confirm-text\">{{text}}</span>\r\n          <div class=\"gd-confirm-button-wrap\">\r\n            <gd-button id=\"cancel-button\" [icon]=\"'times'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"onCancel($event)\">\r\n                Cancel\r\n            </gd-button>\r\n            <gd-button id=\"confirm-button\" [icon]=\"'check'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"onConfirm($event)\">\r\n                Confirm\r\n            </gd-button>\r\n        </div>\r\n        </div>\r\n      </section>\r\n</gd-modal>",
                styles: ["#gd-confirm-section{width:375px}.gd-confirm-wrap{display:flex;flex-direction:column;margin:24px}.gd-confirm-wrap ::ng-deep .button{height:37px;width:75px;padding:0;justify-content:center}.gd-confirm-wrap ::ng-deep .button ::ng-deep .text{font-size:10px!important}.gd-confirm-text{color:#000;padding:10px 0 45px;height:20px;font-size:16px}.gd-confirm-button-wrap{height:40px}.gd-confirm-button-wrap gd-button{float:right;padding-left:15px}@media (max-width:1037px){#gd-confirm-section{max-width:375px}}"]
            }] }
];
ConfirmModalComponent.propDecorators = {
    id: [{ type: Input }],
    text: [{ type: Input }],
    confirm: [{ type: Output }],
    cancel: [{ type: Output }],
    modal: [{ type: ViewChild, args: [ModalComponent, { static: false },] }],
    buttons: [{ type: ViewChildren, args: [ButtonComponent,] }]
};
if (false) {
    /** @type {?} */
    ConfirmModalComponent.prototype.id;
    /** @type {?} */
    ConfirmModalComponent.prototype.text;
    /** @type {?} */
    ConfirmModalComponent.prototype.confirm;
    /** @type {?} */
    ConfirmModalComponent.prototype.cancel;
    /** @type {?} */
    ConfirmModalComponent.prototype.modal;
    /** @type {?} */
    ConfirmModalComponent.prototype.buttons;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PreviewStatusComponent {
    constructor() {
        this.previewStatus = PreviewStatus;
    }
}
PreviewStatusComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-preview-status',
                template: "<div *ngIf=\"status != previewStatus.Undefined && status != previewStatus.Loaded\" class=\"wrapper\">\r\n    <div *ngIf=\"status == previewStatus.InProgress\" class=\"status-wrapper\">\r\n      <fa-icon class=\"status-icon\" [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\r\n      <span class=\"status-text\">File preview is being created</span>\r\n    </div>\r\n    <div *ngIf=\"status == previewStatus.Timeout\" class=\"status-wrapper\">\r\n      <fa-icon class=\"status-icon\" [icon]=\"['fas','stopwatch']\"></fa-icon>\r\n      <span class=\"status-text\">Preview generation process dropped due to timeout. We are sorry</span>\r\n    </div>\r\n    <div *ngIf=\"status == previewStatus.Unavailable\" class=\"status-wrapper\">\r\n      <fa-icon class=\"status-icon\" [icon]=\"['fas','eye-slash']\"></fa-icon>\r\n      <span class=\"status-text\">Preview is unavailable for the uploaded file</span>\r\n    </div>\r\n  </div>",
                styles: [".wrapper{color:#959da5;background-color:#e7e7e7;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%}.status-icon{font-size:65px;margin-bottom:30px;display:flex;color:#959da5}.status-text{font-size:15px;text-align:center;color:#959da5}.status-wrapper{display:flex;flex-direction:column;width:300px;height:250px;align-items:center;justify-content:center;top:-60px;position:relative}"]
            }] }
];
/** @nocollapse */
PreviewStatusComponent.ctorParameters = () => [];
PreviewStatusComponent.propDecorators = {
    status: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PreviewStatusComponent.prototype.status;
    /** @type {?} */
    PreviewStatusComponent.prototype.previewStatus;
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
                    AccordionGroupComponent,
                    GdIntegerDirective,
                    ConfirmModalComponent,
                    PreviewStatusComponent
                ],
                imports: [
                    BrowserModule,
                    CommonComponentsModule,
                    HttpClientModule,
                    FontAwesomeModule,
                    FormsModule,
                    DpDatePickerModule
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

export { AccessLevels, AccordionService, ChangedPackageModel, FilePreview, FilePropertyModel, KnownPropertyModel, MetadataAppComponent, MetadataConfigService, MetadataFileDescription, MetadataModule, MetadataPropertyType, MetadataService, MetadataType, PackageModel, PackageNameByMetadataType, PackageNameByOriginalName, RemovePropertyModel, initializeApp, setupLoadingInterceptor, AccordionComponent as ɵa, AccordionGroupComponent as ɵb, GdIntegerDirective as ɵc, ConfirmModalComponent as ɵd, PreviewStatusComponent as ɵe };
//# sourceMappingURL=groupdocs.examples.angular-metadata.js.map
