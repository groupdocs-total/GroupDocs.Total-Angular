import { BrowserModule } from '@angular/platform-browser';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, Input, EventEmitter, Output, ViewChildren, Directive, ElementRef, HostListener, ViewChild, NgModule, APP_INITIALIZER } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Api, ConfigService, FileDescription, CommonModals, ModalService, UploadFilesService, NavigateService, ZoomService, PasswordService, LoadingMaskService, WindowService, ModalComponent, ButtonComponent, LoadingMaskInterceptorService, CommonComponentsModule, ErrorInterceptorService } from '@groupdocs.examples.angular/common-components';
import { BehaviorSubject } from 'rxjs';
import { __extends } from 'tslib';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as moment_ from 'moment';
import { NgModel, FormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MetadataService = /** @class */ (function () {
    function MetadataService(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    MetadataService.prototype.loadFiles = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    MetadataService.prototype.loadFile = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    MetadataService.prototype.loadProperties = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_DOCUMENT_PROPERTIES, credentials, Api.httpOptionsJson);
    };
    /**
     * @param {?} metadataFile
     * @return {?}
     */
    MetadataService.prototype.saveProperty = /**
     * @param {?} metadataFile
     * @return {?}
     */
    function (metadataFile) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.SAVE_PROPERTY, metadataFile, Api.httpOptionsJson);
    };
    /**
     * @param {?} metadataFile
     * @return {?}
     */
    MetadataService.prototype.removeProperty = /**
     * @param {?} metadataFile
     * @return {?}
     */
    function (metadataFile) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.REMOVE_PROPERTY, metadataFile, Api.httpOptionsJson);
    };
    /**
     * @param {?} metadataFile
     * @return {?}
     */
    MetadataService.prototype.cleanMetadata = /**
     * @param {?} metadataFile
     * @return {?}
     */
    function (metadataFile) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.CLEAN_METADATA, metadataFile, Api.httpOptionsJson);
    };
    /**
     * @param {?} file
     * @param {?} url
     * @param {?} rewrite
     * @return {?}
     */
    MetadataService.prototype.upload = /**
     * @param {?} file
     * @param {?} url
     * @param {?} rewrite
     * @return {?}
     */
    function (file, url, rewrite) {
        /** @type {?} */
        var formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    };
    /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    MetadataService.prototype.loadPage = /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    function (credentials, page) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'page': page
        }, Api.httpOptionsJson);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    MetadataService.prototype.getDownloadUrl = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._config.getMetadataApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    MetadataService.prototype.exportProperties = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.EXPORT_METADATA, credentials, Api.httpOptionsJsonResponseTypeBlob);
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    MetadataService.prototype.loadPrint = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        return this._http.post(this._config.getMetadataApiEndpoint() + Api.LOAD_PRINT, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, Api.httpOptionsJson);
    };
    MetadataService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MetadataService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ MetadataService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MetadataService_Factory() { return new MetadataService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: MetadataService, providedIn: "root" });
    return MetadataService;
}());
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
var MetadataFileDescription = /** @class */ (function () {
    function MetadataFileDescription() {
    }
    return MetadataFileDescription;
}());
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
var MetadataConfig = /** @class */ (function () {
    function MetadataConfig() {
    }
    return MetadataConfig;
}());
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
var MetadataConfigService = /** @class */ (function () {
    function MetadataConfigService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._metadataConfig = new BehaviorSubject(new MetadataConfig());
        this._updatedConfig = this._metadataConfig.asObservable();
    }
    Object.defineProperty(MetadataConfigService.prototype, "updatedConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this._updatedConfig;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MetadataConfigService.prototype.load = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var configEndpoint = _this._config.getConfigEndpoint(Api.METADATA_APP);
            _this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var metadataConfig = (/** @type {?} */ (response));
                _this._metadataConfig.next(metadataConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                reject("Could not load metadata config: " + JSON.stringify(response));
            }));
        }));
    };
    MetadataConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MetadataConfigService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ MetadataConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MetadataConfigService_Factory() { return new MetadataConfigService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: MetadataConfigService, providedIn: "root" });
    return MetadataConfigService;
}());
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

var _a;
/** @enum {number} */
var AccessLevels = {
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
var MetadataPropertyType = {
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
var MetadataType = {
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
var FilePropertyModel = /** @class */ (function () {
    function FilePropertyModel() {
    }
    return FilePropertyModel;
}());
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
var KnownPropertyModel = /** @class */ (function () {
    function KnownPropertyModel() {
    }
    return KnownPropertyModel;
}());
if (false) {
    /** @type {?} */
    KnownPropertyModel.prototype.name;
    /** @type {?} */
    KnownPropertyModel.prototype.type;
    /** @type {?} */
    KnownPropertyModel.prototype.accessLevel;
}
var PackageModel = /** @class */ (function () {
    function PackageModel() {
    }
    return PackageModel;
}());
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
var RemovePropertyModel = /** @class */ (function () {
    function RemovePropertyModel() {
    }
    return RemovePropertyModel;
}());
if (false) {
    /** @type {?} */
    RemovePropertyModel.prototype.packageId;
    /** @type {?} */
    RemovePropertyModel.prototype.property;
}
var ChangedPackageModel = /** @class */ (function () {
    function ChangedPackageModel() {
    }
    return ChangedPackageModel;
}());
if (false) {
    /** @type {?} */
    ChangedPackageModel.prototype.id;
    /** @type {?} */
    ChangedPackageModel.prototype.properties;
}
var FilePreview = /** @class */ (function (_super) {
    __extends(FilePreview, _super);
    function FilePreview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FilePreview;
}(FileDescription));
if (false) {
    /** @type {?} */
    FilePreview.prototype.timeLimitExceeded;
}
/** @type {?} */
var PackageNameByMetadataType = (_a = {},
    _a[MetadataType.WordProcessing] = "Document Properties",
    _a[MetadataType.Spreadsheet] = "Workbook Properties",
    _a[MetadataType.Presentation] = "Presentation Properties",
    _a[MetadataType.ProjectManagement] = "Project Properties",
    _a[MetadataType.Diagram] = "Diagram Properties",
    _a[MetadataType.Note] = "Note Properties",
    _a[MetadataType.Pdf] = "PDF Properties",
    _a[MetadataType.FileFormat] = "File Format Info",
    _a[MetadataType.DocumentStatistics] = "Document Statistics",
    _a[MetadataType.DublinCore] = "Dublin Core Properties",
    _a[MetadataType.ImageResourceBlock] = "Image Resources",
    _a[MetadataType.MpegAudio] = "Mpeg Audio Properties",
    _a[MetadataType.DigitalSignature] = "Digital Signature Properties",
    _a);
/** @type {?} */
var PackageNameByOriginalName = {
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
var PreviewStatus = {
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
        var savingFile = new MetadataFileDescription();
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
                function (p) { return p.added || p.edited; })) };
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
     * @param {?} propertyInfo
     * @return {?}
     */
    MetadataAppComponent.prototype.removeProperty = /**
     * @param {?} propertyInfo
     * @return {?}
     */
    function (propertyInfo) {
        var _this = this;
        /** @type {?} */
        var metadataFile = new MetadataFileDescription();
        metadataFile.guid = this.credentials.guid;
        metadataFile.password = this.credentials.password;
        metadataFile.packages = [{ id: propertyInfo.packageId, properties: [propertyInfo.property] }];
        this.metadataService.removeProperty(metadataFile).subscribe((/**
         * @return {?}
         */
        function () {
            _this.loadProperties(false, true);
        }));
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
                    template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"column\" [ngClass]=\"{'document-loaded': isFileLoaded()}\">\n      <div class=\"top-panel\">\n        <a class=\"logo-link\" [href]=\"returnUrl\"><gd-logo [logo]=\"'metadata'\" icon=\"clipboard-list\"></gd-logo></a>\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal, false)\"\n                    *ngIf=\"browseConfig\" ></gd-button>\n          <gd-button [disabled]=\"!isFileLoaded()\" [icon]=\"'trash'\" [tooltip]=\"'Clean Metadata'\" (click)=\"openModal(confirmCleanModalId, true)\">\n                    </gd-button>\n          <gd-button [disabled]=\"!isFileLoaded()\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"openModal(confirmSaveModalId, true)\">\n                    </gd-button>\n          <gd-button [hidden] =\"isDesktop\" [disabled]=\"!isFileLoaded()\" [icon]=\"'file-export'\" [tooltip]=\"'Attributes'\" (click)=\"loadProperties()\">\n                    </gd-button>\n          <gd-button [disabled]=\"!isFileLoaded()\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                    (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n          <gd-button [disabled]=\"!isFileLoaded()\" [icon]=\"'file-excel'\" [tooltip]=\"'Export Properties'\"\n                    (click)=\"exportProperties()\" ></gd-button>\n        </gd-top-toolbar>\n      </div>\n      <gd-init-state [icon]=\"'clipboard-list'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!isFileLoaded() && uploadConfig && !isPreviewLoaded()\" (fileDropped)=\"fileDropped($event)\">\n        Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n        Or drop file here\n      </gd-init-state>\n      <gd-preview-status [status]=\"previewStatus\"></gd-preview-status>\n      <div class=\"doc-panel\" *ngIf=\"preview\" #docPanel>\n        <gd-document class=\"gd-document\" *ngIf=\"preview\" [file]=\"preview\" [mode]=\"false\" gdScrollable\n                    [preloadPageCount]=\"metadataConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"false\"></gd-document>\n      </div>\n    </div>\n    <gd-side-panel *ngIf=\"isFileLoaded() && showSidePanel\"\n      (hideSidePanel)=\"hideSidePanel($event)\"\n      (saveInSidePanel)=\"save()\"\n      [closable]=\"isDesktop ? false : true\"\n      [saveable]=\"isDesktop ? false : true\"\n      [title]=\"'Metadata'\"\n      [icon]=\"'clipboard-list'\">\n      <gd-accordion>\n        <gd-accordion-group *ngFor=\"let package of packages\" [title]=\"getPackageName(package)\" [addDisabled]=\"false\" [addHidden]=\"false\" [properties]=\"package.properties\" [knownProperties]=\"package.knownProperties\" [packageId]=\"package.id\" (removeProperty)=\"removeProperty($event)\"></gd-accordion-group>\n      </gd-accordion>\n    </gd-side-panel>\n  </div>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n  <gd-confirm-modal [id]=\"confirmCleanModalId\" [text]=\"'Are you sure, you want to clean metadata in this file?'\" (confirm)=\"cleanMetadata()\"></gd-confirm-modal>\n  <gd-confirm-modal [id]=\"confirmSaveModalId\" [text]=\"'Do you want to save the changes?'\" (confirm)=\"save()\"></gd-confirm-modal>\n  \n</div>\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.logo-link{color:inherit;text-decoration:inherit}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}::ng-deep .tools .button{color:#fff!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .button.inactive{color:#959da5!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}.row{display:-webkit-box;display:flex}.column{width:100%;height:100vh;background-color:#e7e7e7;overflow:hidden}::ng-deep .gd-side-panel-body{background-color:#f4f4f4}::ng-deep .gd-side-panel-wrapper{width:464px!important}::ng-deep .page.excel{overflow:unset!important}@media (max-width:1037px){::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .gd-side-panel-wrapper{width:375px!important}}"]
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
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
    }
    /**
     * @return {?}
     */
    AccordionComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
    };
    AccordionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-accordion',
                    template: "\n    <ng-content></ng-content>\n",
                    styles: [""]
                }] }
    ];
    return AccordionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment = moment_;
var AccordionGroupComponent = /** @class */ (function () {
    function AccordionGroupComponent(windowService) {
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
    AccordionGroupComponent.prototype.ngOnInit = /**
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
        }));
        this.knownPropertyDictionary = this.toDictionary(this.knownProperties);
        this.updateNotAddedProperties();
        this.metadataPropertyType = MetadataPropertyType;
    };
    /**
     * @return {?}
     */
    AccordionGroupComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.textinput.changes.subscribe((/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            if (i.length) {
                i.first.nativeElement.focus();
            }
        }));
    };
    /**
     * @return {?}
     */
    AccordionGroupComponent.prototype.resetProperties = /**
     * @return {?}
     */
    function () {
        this.properties.forEach((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { p.selected = false; p.editing = false; }));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AccordionGroupComponent.prototype.toggle = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.opened = !this.opened;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AccordionGroupComponent.prototype.addProperty = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.resetProperties();
        if (this.isAddAvailable()) {
            /** @type {?} */
            var addedProperty = new FilePropertyModel();
            addedProperty.added = true;
            addedProperty.editing = true;
            addedProperty.name = "Select property";
            addedProperty.type = 1;
            this.properties.push(addedProperty);
        }
    };
    /**
     * @param {?} property
     * @return {?}
     */
    AccordionGroupComponent.prototype.selectProperty = /**
     * @param {?} property
     * @return {?}
     */
    function (property) {
        this.resetProperties();
        property.selected = !property.selected;
    };
    /**
     * @param {?} property
     * @return {?}
     */
    AccordionGroupComponent.prototype.editProperty = /**
     * @param {?} property
     * @return {?}
     */
    function (property) {
        if (this.isEditable(property)) {
            this.resetProperties();
            property.editing = !property.editing;
            property.edited = true;
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AccordionGroupComponent.prototype.delete = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        /** @type {?} */
        var selectedProperty = this.properties.filter((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return p.selected; }))[0];
        this.removeProperty.emit({ packageId: this.packageId, property: selectedProperty });
    };
    /**
     * @return {?}
     */
    AccordionGroupComponent.prototype.isRemoveAvailable = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.properties && this.properties.filter((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return p.selected && _this.isRemovable(p); })).length === 1;
    };
    /**
     * @return {?}
     */
    AccordionGroupComponent.prototype.isAddAvailable = /**
     * @return {?}
     */
    function () {
        return !this.addDisabled && this.notAddedProperties.length > 0;
    };
    /**
     * @param {?} $event
     * @param {?} property
     * @return {?}
     */
    AccordionGroupComponent.prototype.selectPropName = /**
     * @param {?} $event
     * @param {?} property
     * @return {?}
     */
    function ($event, property) {
        property.type = $event.type;
        property.name = $event.name;
        if ($event.type === MetadataPropertyType.DateTime) {
            property.value = moment().toISOString();
        }
        else {
            property.value = "";
        }
        this.updateNotAddedProperties();
    };
    /**
     * @param {?} property
     * @return {?}
     */
    AccordionGroupComponent.prototype.formatValue = /**
     * @param {?} property
     * @return {?}
     */
    function (property) {
        switch (property.type) {
            case MetadataPropertyType.DateTime:
                return this.dateToPicker(property.value);
            default:
                return property.value;
        }
    };
    /**
     * @return {?}
     */
    AccordionGroupComponent.prototype.updateNotAddedProperties = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var propertyDictionary = this.toDictionary(this.properties);
        // tslint:disable-next-line:no-bitwise
        this.notAddedProperties = this.knownProperties.filter((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return (p.accessLevel & AccessLevels.Add) !== 0 && !(p.name in propertyDictionary); }));
    };
    /**
     * @param {?} property
     * @return {?}
     */
    AccordionGroupComponent.prototype.isEditable = /**
     * @param {?} property
     * @return {?}
     */
    function (property) {
        if (this.editableTypes.has(property.type)) {
            return this.hasAccessTo(property, AccessLevels.Update);
        }
    };
    /**
     * @param {?} property
     * @return {?}
     */
    AccordionGroupComponent.prototype.isRemovable = /**
     * @param {?} property
     * @return {?}
     */
    function (property) {
        return this.hasAccessTo(property, AccessLevels.Remove);
    };
    /**
     * @param {?} property
     * @param {?} accessLevel
     * @return {?}
     */
    AccordionGroupComponent.prototype.hasAccessTo = /**
     * @param {?} property
     * @param {?} accessLevel
     * @return {?}
     */
    function (property, accessLevel) {
        // tslint:disable-next-line:no-bitwise
        return property.name in this.knownPropertyDictionary && (this.knownPropertyDictionary[property.name].accessLevel & accessLevel) !== 0;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AccordionGroupComponent.prototype.dateToPicker = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            return moment.utc(value).local().format(this.datePickerConfig.format);
        }
        return null;
    };
    /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    AccordionGroupComponent.prototype.dateFromPicker = /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    function (property, value) {
        if (value) {
            /** @type {?} */
            var dateTime = moment(value, this.datePickerConfig.format);
            property.value = dateTime.toISOString();
        }
    };
    /**
     * @param {?} array
     * @return {?}
     */
    AccordionGroupComponent.prototype.toDictionary = /**
     * @param {?} array
     * @return {?}
     */
    function (array) {
        return array.reduce((/**
         * @param {?} obj
         * @param {?} item
         * @return {?}
         */
        function (obj, item) {
            obj[item.name] = item;
            return obj;
        }), {});
    };
    AccordionGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-accordion-group',
                    template: "<div class=\"accordion-wrapper\">\n    <div class=\"title\" (click)=\"toggle($event)\">\n      <fa-icon *ngIf=\"!opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-down']\"></fa-icon>\n      <fa-icon *ngIf=\"opened\" class=\"chevron\" [icon]=\"['fas', 'chevron-up']\"></fa-icon>\n      <div class=\"text\">{{title}}</div>\n      <fa-icon class=\"trash\" *ngIf=\"isRemoveAvailable()\" [icon]=\"['fas', 'trash']\" (click)=\"delete($event)\"></fa-icon>\n      <gd-button class=\"plus\" [icon]=\"['plus']\" [hidden]=\"addHidden\" [disabled]=\"!isAddAvailable()\" (click)=\"addProperty($event)\"></gd-button>\n    </div>\n    <div class=\"body\" [ngClass]=\"{'hidden': !opened}\">\n      <div *ngFor=\"let property of properties\" class=\"property-wrapper\">\n          <div *ngIf=\"!property.added\" [ngClass]=\"{'selected': property.selected, 'disabled': !isEditable(property)}\" (click)=\"selectProperty(property)\" class=\"property-name property-name-simple\" title=\"{{property.name}}\">{{property.name}}</div>\n          <gd-select  class=\"property-name\" *ngIf=\"property.added\" id=\"propertiesNames\" [disabled]=\"false\" [options]=\"notAddedProperties\" (selected)=\"selectPropName($event, property)\" [showSelected]=\"{name : property.name, value : property.name}\"></gd-select>\n          <div *ngIf=\"!property.editing\" [ngClass]=\"{'selected': property.selected}\" (click)=\"editProperty(property)\" class=\"property-value\" title=\"{{property.value}}\">{{formatValue(property)}}</div>\n          <div *ngIf=\"property.editing\" class=\"input-wrapper\">\n            <input #textinput *ngIf=\"property.type == metadataPropertyType.String\" class=\"property-value\" [(ngModel)]=\"property.value\" />\n            <input *ngIf=\"property.type == metadataPropertyType.Integer || property.type == metadataPropertyType.Long\" type=\"text\" class=\"property-value\" [(ngModel)]=\"property.value\" gdInteger />\n            <input *ngIf=\"property.type == metadataPropertyType.Double\" type=\"number\" class=\"property-value\" [(ngModel)]=\"property.value\" />\n            <input *ngIf=\"property.type == metadataPropertyType.Boolean\" type=\"checkbox\" class=\"property-value\" [(ngModel)]=\"property.value\" />\n            <dp-date-picker *ngIf=\"property.type == metadataPropertyType.DateTime\" [mode]=\"'daytime'\" [theme]=\"'dp-material dp-main'\" [config]=\"datePickerConfig\" [ngModel]=\"dateToPicker(property.value)\" (ngModelChange)=\"dateFromPicker(property, $event)\" ></dp-date-picker>\n        </div>\n      </div>\n    </div>\n  <div>",
                    styles: [".accordion-wrapper{background-color:#fff}.accordion-wrapper .title{width:100%;cursor:pointer;border-bottom:1px solid #6e6e6e;background-color:#539cf0;color:#f4f4f4;font-weight:700;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;height:37px;line-height:37px;font-size:13px}.accordion-wrapper .title .text{width:100%}.chevron{padding:0 16px 0 15px}.plus{margin-left:auto}::ng-deep .title .button{color:#fff!important;display:block!important;margin-right:0!important}::ng-deep .title .button.active fa-icon{color:#fff!important}.accordion-wrapper .body.hidden,.trash.hidden{display:none}.property-wrapper{display:-webkit-box;display:flex;height:35px;font-size:12px;border-bottom:1px solid #e7e7e7;line-height:35px}.property-wrapper.disabled{cursor:not-allowed;color:#acacac}.property-name{width:216px;text-transform:uppercase;font-weight:700;padding-left:15px;border-right:1px solid #e7e7e7;text-overflow:ellipsis;word-wrap:break-word}.property-name.disabled{color:#acacac}.property-name ::ng-deep .select{height:35px;line-height:37px;text-align:center;-webkit-box-pack:unset;justify-content:unset;position:relative}.property-name ::ng-deep .select .nav-caret{display:none}.property-name ::ng-deep .select .selected-value{max-width:none;font-size:unset;text-transform:none;font-weight:400}.property-name ::ng-deep .select .dropdown-menu{width:216px;margin-left:-15px;top:36px}.property-name-simple{overflow-x:hidden;word-wrap:normal}.property-value{font-family:'Courier New',Courier,monospace;padding-left:12px;text-overflow:ellipsis;width:216px;white-space:nowrap;overflow:hidden;word-wrap:break-word;display:inline-block}.property-value.desktop-hide{display:none}::ng-deep dp-date-picker.dp-material .dp-picker-input,::ng-deep dp-day-time-calendar *{font-family:'Courier New',Courier,monospace}.input-wrapper input{height:30px;border:0;font-size:12px}.input-wrapper input.hidden{display:none}.input-wrapper input[type=datetime-local]::-webkit-clear-button,.input-wrapper input[type=datetime-local]::-webkit-inner-spin-button{-webkit-appearance:none;display:none}.selected{background-color:#3e4e5a;color:#fff}::ng-deep .default .property-name{color:#acacac}@media (max-width:1037px){.property-value{width:194px!important}.property-name{width:150px!important}.property-value.mobile-hide{display:none}.input-wrapper{width:185px!important}}"]
                }] }
    ];
    /** @nocollapse */
    AccordionGroupComponent.ctorParameters = function () { return [
        { type: WindowService }
    ]; };
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
    return AccordionGroupComponent;
}());
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
var AccordionService = /** @class */ (function () {
    function AccordionService() {
        this._addingObserver = new BehaviorSubject(null);
        this._addedProperty = this._addingObserver.asObservable();
    }
    Object.defineProperty(AccordionService.prototype, "addedProperty", {
        get: /**
         * @return {?}
         */
        function () {
            return this._addedProperty;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} addedProperty
     * @return {?}
     */
    AccordionService.prototype.addProperty = /**
     * @param {?} addedProperty
     * @return {?}
     */
    function (addedProperty) {
        this._addingObserver.next(addedProperty);
    };
    AccordionService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AccordionService.ctorParameters = function () { return []; };
    /** @nocollapse */ AccordionService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AccordionService_Factory() { return new AccordionService(); }, token: AccordionService, providedIn: "root" });
    return AccordionService;
}());
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
var GdIntegerDirective = /** @class */ (function () {
    function GdIntegerDirective(ngModel, element) {
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
    GdIntegerDirective.prototype.isInteger = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return String(value).match(new RegExp(/^(\-){0,1}\d*$/));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    GdIntegerDirective.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        /** @type {?} */
        var current = this.element.nativeElement.value;
        /** @type {?} */
        var position = this.element.nativeElement.selectionStart;
        /** @type {?} */
        var next = [current.slice(0, position), event.key, current.slice(position)].join('');
        if (next && !this.isInteger(next)) {
            event.preventDefault();
        }
    };
    /**
     * @return {?}
     */
    GdIntegerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngModel.control.valueChanges.subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var value = _this.element.nativeElement.value;
            if (!value)
                return;
            _this.ngModel.control.setValue(value === "-" ? 0 : parseInt(value, 10), { emitModelToViewChange: false, emitViewToModelChange: true, emitEvent: false });
        }));
    };
    GdIntegerDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[gdInteger]"
                },] }
    ];
    /** @nocollapse */
    GdIntegerDirective.ctorParameters = function () { return [
        { type: NgModel },
        { type: ElementRef }
    ]; };
    GdIntegerDirective.propDecorators = {
        onKeyDown: [{ type: HostListener, args: ["keydown", ["$event"],] }]
    };
    return GdIntegerDirective;
}());
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
var ConfirmModalComponent = /** @class */ (function () {
    function ConfirmModalComponent() {
        this.confirm = new EventEmitter();
        this.cancel = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    ConfirmModalComponent.prototype.onConfirm = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.cleanUpAndClose($event);
        this.confirm.emit();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ConfirmModalComponent.prototype.onCancel = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.cleanUpAndClose($event);
        this.cancel.emit();
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    ConfirmModalComponent.prototype.cleanUpAndClose = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.stopPropagation();
        this.buttons.forEach((/**
         * @param {?} button
         * @return {?}
         */
        function (button) { return button.onUnhovering(); }));
        this.modal.close();
    };
    ConfirmModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-confirm-modal',
                    template: "<gd-modal [id]=\"id\" [title]=\"'Confirm action'\">\n    <section id=\"gd-confirm-section\">\n        <div class=\"gd-confirm-wrap\">\n          <span class=\"gd-confirm-text\">{{text}}</span>\n          <div class=\"gd-confirm-button-wrap\">\n            <gd-button id=\"cancel-button\" [icon]=\"'times'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"onCancel($event)\">\n                Cancel\n            </gd-button>\n            <gd-button id=\"confirm-button\" [icon]=\"'check'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"onConfirm($event)\">\n                Confirm\n            </gd-button>\n        </div>\n        </div>\n      </section>\n</gd-modal>",
                    styles: ["#gd-confirm-section{width:375px}.gd-confirm-wrap{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:24px}.gd-confirm-wrap ::ng-deep .button{height:37px;width:75px;padding:0;-webkit-box-pack:center;justify-content:center}.gd-confirm-wrap ::ng-deep .button ::ng-deep .text{font-size:10px!important}.gd-confirm-text{color:#000;padding:10px 0 45px;height:20px;font-size:16px}.gd-confirm-button-wrap{height:40px}.gd-confirm-button-wrap gd-button{float:right;padding-left:15px}@media (max-width:1037px){#gd-confirm-section{max-width:375px}}"]
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
    return ConfirmModalComponent;
}());
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
var PreviewStatusComponent = /** @class */ (function () {
    function PreviewStatusComponent() {
        this.previewStatus = PreviewStatus;
    }
    PreviewStatusComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-preview-status',
                    template: "<div *ngIf=\"status != previewStatus.Undefined && status != previewStatus.Loaded\" class=\"wrapper\">\n    <div *ngIf=\"status == previewStatus.InProgress\" class=\"status-wrapper\">\n      <fa-icon class=\"status-icon\" [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      <span class=\"status-text\">File preview is being created</span>\n    </div>\n    <div *ngIf=\"status == previewStatus.Timeout\" class=\"status-wrapper\">\n      <fa-icon class=\"status-icon\" [icon]=\"['fas','stopwatch']\"></fa-icon>\n      <span class=\"status-text\">Preview generation process dropped due to timeout. We are sorry</span>\n    </div>\n    <div *ngIf=\"status == previewStatus.Unavailable\" class=\"status-wrapper\">\n      <fa-icon class=\"status-icon\" [icon]=\"['fas','eye-slash']\"></fa-icon>\n      <span class=\"status-text\">Preview is unavailable for the uploaded file</span>\n    </div>\n  </div>",
                    styles: [".wrapper{color:#959da5;background-color:#e7e7e7;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;width:100%;height:100%}.status-icon{font-size:65px;margin-bottom:30px;display:-webkit-box;display:flex;color:#959da5}.status-text{font-size:15px;text-align:center;color:#959da5}.status-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:300px;height:250px;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;top:-60px;position:relative}"]
                }] }
    ];
    /** @nocollapse */
    PreviewStatusComponent.ctorParameters = function () { return []; };
    PreviewStatusComponent.propDecorators = {
        status: [{ type: Input }]
    };
    return PreviewStatusComponent;
}());
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
    var result = (/**
     * @return {?}
     */
    function () { return metadataConfigService.load(); });
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
var MetadataModule = /** @class */ (function () {
    function MetadataModule() {
    }
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    MetadataModule.forRoot = /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    function (apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: MetadataModule
        };
    };
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
    return MetadataModule;
}());

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
