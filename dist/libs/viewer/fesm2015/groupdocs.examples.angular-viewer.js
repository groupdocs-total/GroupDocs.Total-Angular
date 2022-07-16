import { BrowserModule } from '@angular/platform-browser';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, ChangeDetectorRef, HostListener, EventEmitter, Input, Output, ElementRef, Renderer2, ViewChildren, NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Api, ConfigService, CommonModals, FileUtil, ModalService, UploadFilesService, NavigateService, ZoomService, PagePreloadService, RenderPrintService, PasswordService, WindowService, LoadingMaskService, DocumentComponent, CommonTranslateLoader, LoadingMaskInterceptorService, CommonComponentsModule, ErrorInterceptorService } from '@groupdocs.examples.angular/common-components';
import { BehaviorSubject, Subject } from 'rxjs';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as Hammer from 'hammerjs';
import * as jquery from 'jquery';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewerService {
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
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadFile(credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
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
        return this._http.post(this._config.getViewerApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    }
    /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    loadPage(credentials, page) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'fileType': credentials.fileType,
            'password': credentials.password,
            'page': page
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @param {?} angle
     * @param {?} page
     * @return {?}
     */
    rotate(credentials, angle, page) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.ROTATE_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'fileType': credentials.fileType,
            'password': credentials.password,
            'pages': [page],
            'angle': angle
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    getDownloadUrl(credentials) {
        return this._config.getViewerApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadPrint(credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_PRINT, {
            'guid': credentials.guid,
            'fileType': credentials.fileType,
            'password': credentials.password,
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadPrintPdf(credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_PRINT_PDF, {
            'guid': credentials.guid,
            'fileType': credentials.fileType,
            'password': credentials.password,
        }, Api.httpOptionsJsonResponseTypeBlob);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadThumbnails(credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + Api.LOAD_THUMBNAILS, {
            'guid': credentials.guid,
            'fileType': credentials.fileType,
            'password': credentials.password,
        }, Api.httpOptionsJson);
    }
}
ViewerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ViewerService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ ViewerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ViewerService_Factory() { return new ViewerService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: ViewerService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ViewerService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ViewerService.prototype._config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewerConfig {
}
if (false) {
    /** @type {?} */
    ViewerConfig.prototype.rewrite;
    /** @type {?} */
    ViewerConfig.prototype.pageSelector;
    /** @type {?} */
    ViewerConfig.prototype.download;
    /** @type {?} */
    ViewerConfig.prototype.upload;
    /** @type {?} */
    ViewerConfig.prototype.print;
    /** @type {?} */
    ViewerConfig.prototype.browse;
    /** @type {?} */
    ViewerConfig.prototype.enableRightClick;
    /** @type {?} */
    ViewerConfig.prototype.filesDirectory;
    /** @type {?} */
    ViewerConfig.prototype.fontsDirectory;
    /** @type {?} */
    ViewerConfig.prototype.defaultDocument;
    /** @type {?} */
    ViewerConfig.prototype.htmlMode;
    /** @type {?} */
    ViewerConfig.prototype.preloadPageCount;
    /** @type {?} */
    ViewerConfig.prototype.zoom;
    /** @type {?} */
    ViewerConfig.prototype.search;
    /** @type {?} */
    ViewerConfig.prototype.thumbnails;
    /** @type {?} */
    ViewerConfig.prototype.rotate;
    /** @type {?} */
    ViewerConfig.prototype.cache;
    /** @type {?} */
    ViewerConfig.prototype.saveRotateState;
    /** @type {?} */
    ViewerConfig.prototype.watermarkText;
    /** @type {?} */
    ViewerConfig.prototype.printAllowed;
    /** @type {?} */
    ViewerConfig.prototype.showGridLines;
    /** @type {?} */
    ViewerConfig.prototype.showLanguageMenu;
    /** @type {?} */
    ViewerConfig.prototype.defaultLanguage;
    /** @type {?} */
    ViewerConfig.prototype.supportedLanguages;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewerConfigService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._viewerConfig = new BehaviorSubject(new ViewerConfig());
        this._updatedConfig = this._viewerConfig.asObservable();
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
            const configEndpoint = this._config.getConfigEndpoint(Api.VIEWER_APP);
            this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                /** @type {?} */
                const viewerConfig = (/** @type {?} */ (response));
                this._viewerConfig.next(viewerConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                reject(`Could not load viewer config: ${JSON.stringify(response)}`);
            }));
        }));
    }
}
ViewerConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ViewerConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ ViewerConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ViewerConfigService_Factory() { return new ViewerConfigService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: ViewerConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ViewerConfigService.prototype._viewerConfig;
    /**
     * @type {?}
     * @private
     */
    ViewerConfigService.prototype._updatedConfig;
    /**
     * @type {?}
     * @private
     */
    ViewerConfigService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ViewerConfigService.prototype._config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Language {
    /**
     * @param {?} code
     * @param {?} alternateCode
     * @param {?} name
     */
    constructor(code, alternateCode, name) {
        this.code = code;
        this.alternateCode = alternateCode;
        this.name = name;
    }
    /**
     * @param {?} code
     * @return {?}
     */
    is(code) {
        /** @type {?} */
        const codeUpperCase = code.toUpperCase();
        return this.code.toUpperCase() === codeUpperCase
            || this.alternateCode.toUpperCase() === codeUpperCase;
    }
}
if (false) {
    /** @type {?} */
    Language.prototype.code;
    /** @type {?} */
    Language.prototype.alternateCode;
    /** @type {?} */
    Language.prototype.name;
}
class Constants {
}
Constants.thumbnailsWidth = 300;
Constants.scrollWidth = 17;
Constants.topbarWidth = 60;
Constants.documentMargin = 20;
Constants.defaultShowLanguageMenu = true;
Constants.defaultLanguage = new Language("en", "en-us", "English");
Constants.defaultSupportedLanguages = [
    new Language("ar", "ar", "العربية"),
    new Language("ca", "ca-es", "Català"),
    new Language("cs", "cs-cz", "Čeština"),
    new Language("da", "da-dk", "Dansk"),
    new Language("de", "de-de", "Deutsch"),
    new Language("el", "el-gr", "Ελληνικά"),
    new Language("en", "en-us", "English"),
    new Language("es", "es-es", "Español"),
    new Language("fil", "fil-ph", "Filipino"),
    new Language("fr", "fr-fr", "Français"),
    new Language("he", "he-il", "עברית"),
    new Language("hi", "hi-in", "हिन्दी"),
    new Language("id", "id-id", "Indonesia"),
    new Language("it", "it-it", "Italiano"),
    new Language("ja", "ja-jp", "日本語"),
    new Language("kk", "kk-kz", "Қазақ Тілі"),
    new Language("ko", "ko-kr", "한국어"),
    new Language("ms", "ms-my", "Melayu"),
    new Language("nl", "nl-nl", "Nederlands"),
    new Language("pl", "pl-pl", "Polski"),
    new Language("pt", "pt-pt", "Português"),
    new Language("ro", "ro-ro", "Română"),
    new Language("ru", "ru-ru", "Русский"),
    new Language("sv", "sv-se", "Svenska"),
    new Language("vi", "vi-vn", "Tiếng Việt"),
    new Language("th", "th-th", "ไทย"),
    new Language("tr", "tr-tr", "Türkçe"),
    new Language("uk", "uk-ua", "Українська"),
    new Language("zh-hans", "zh", "中文(简体)"),
    new Language("zh-hant", "zh-hant", "中文(繁體)"),
];
if (false) {
    /** @type {?} */
    Constants.thumbnailsWidth;
    /** @type {?} */
    Constants.scrollWidth;
    /** @type {?} */
    Constants.topbarWidth;
    /** @type {?} */
    Constants.documentMargin;
    /** @type {?} */
    Constants.defaultShowLanguageMenu;
    /** @type {?} */
    Constants.defaultLanguage;
    /** @type {?} */
    Constants.defaultSupportedLanguages;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IntervalTimer {
    //  0 = idle, 1 = running, 2 = paused, 3= resumed
    /**
     * @param {?} callback
     * @param {?} interval
     */
    constructor(callback, interval) {
        this.remaining = 0;
        this.state = 0; //  0 = idle, 1 = running, 2 = paused, 3= resumed
        this.callback = callback;
        this.interval = interval;
        this.startTime = new Date().getTime();
        /** @type {?} */
        const _this = this;
        this.timerId = setInterval((/**
         * @return {?}
         */
        () => {
            this.callback();
            _this.startTime = new Date().getTime();
        }), this.interval);
        this.state = 1;
    }
    /**
     * @return {?}
     */
    pause() {
        if (this.state !== 1)
            return;
        this.remaining = this.interval - (new Date().getTime() - this.startTime);
        clearInterval(this.timerId);
        this.state = 2;
    }
    ;
    /**
     * @return {?}
     */
    resume() {
        if (this.state !== 2)
            return;
        this.state = 3;
        setTimeout((/**
         * @return {?}
         */
        () => this.timeoutCallback()), this.remaining);
    }
    ;
    /**
     * @return {?}
     */
    stop() {
        this.state = 0;
        clearInterval(this.timerId);
    }
    /**
     * @return {?}
     */
    timeoutCallback() {
        if (this.state !== 3)
            return;
        this.callback();
        this.startTime = new Date().getTime();
        this.timerId = setInterval(this.callback, this.interval);
        this.state = 1;
    }
    ;
}
if (false) {
    /** @type {?} */
    IntervalTimer.prototype.callback;
    /** @type {?} */
    IntervalTimer.prototype.interval;
    /** @type {?} */
    IntervalTimer.prototype.timerId;
    /** @type {?} */
    IntervalTimer.prototype.startTime;
    /** @type {?} */
    IntervalTimer.prototype.remaining;
    /** @type {?} */
    IntervalTimer.prototype.state;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewerAppComponent {
    /**
     * @param {?} _viewerService
     * @param {?} _modalService
     * @param {?} configService
     * @param {?} uploadFilesService
     * @param {?} _navigateService
     * @param {?} zoomService
     * @param {?} pagePreloadService
     * @param {?} _renderPrintService
     * @param {?} passwordService
     * @param {?} _windowService
     * @param {?} _loadingMaskService
     * @param {?} cdr
     * @param {?} translate
     */
    constructor(_viewerService, _modalService, configService, uploadFilesService, _navigateService, zoomService, pagePreloadService, _renderPrintService, passwordService, _windowService, _loadingMaskService, cdr, translate) {
        this._viewerService = _viewerService;
        this._modalService = _modalService;
        this._navigateService = _navigateService;
        this._renderPrintService = _renderPrintService;
        this._windowService = _windowService;
        this._loadingMaskService = _loadingMaskService;
        this.cdr = cdr;
        this.translate = translate;
        this.title = 'viewer';
        this.files = [];
        this.countPages = 0;
        this.formatDisabled = true;
        this.showThumbnails = false;
        this.browseFilesModal = CommonModals.BrowseFiles;
        this.showSearch = false;
        this.pagesToPreload = [];
        this._zoom = 100;
        this.fileWasDropped = false;
        this.docElmWithBrowsersFullScreenFunctions = (/** @type {?} */ (document.documentElement));
        this.docWithBrowsersExitFunctions = (/** @type {?} */ (document));
        this.zoomService = zoomService;
        this.startScrollTime = Date.now();
        this.endScrollTime = Date.now();
        configService.updatedConfig.subscribe((/**
         * @param {?} viewerConfig
         * @return {?}
         */
        (viewerConfig) => {
            this.viewerConfig = viewerConfig;
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
                    this._viewerService.upload(uploads.item(i), '', this.viewerConfig.rewrite).subscribe((/**
                     * @param {?} obj
                     * @return {?}
                     */
                    (obj) => {
                        this.fileWasDropped ? this.selectFile(obj.guid, '', '', '') : this.selectDir('');
                    }));
                }
            }
        }));
        pagePreloadService.checkPreload.subscribe((/**
         * @param {?} page
         * @return {?}
         */
        (page) => {
            if (this.file) {
                if (this.viewerConfig.preloadPageCount !== 0) {
                    for (let i = page; i < page + 2; i++) {
                        if (i > 0 && i <= this.file.pages.length && !this.file.pages[i - 1].data) {
                            this.preloadPages(i, i);
                        }
                    }
                }
            }
        }));
        passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        (pass) => {
            this.selectFile(this.credentials.guid, pass, CommonModals.PasswordRequired, this.credentials.fileType);
        }));
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @return {?}
         */
        () => {
            this.isDesktop = _windowService.isDesktop();
            if (!this.runPresentation) {
                this.refreshZoom();
            }
        }));
    }
    /**
     * @return {?}
     */
    fullScreen() {
        if (!document.fullscreenElement) {
            this.closeFullScreen();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.viewerConfig.defaultDocument !== '' && this.viewerConfig.defaultDocument !== null) {
            this.isLoading = true;
            this.selectFile(this.viewerConfig.defaultDocument, '', '', '');
            this.selectCurrentOrFirstPage();
            return;
        }
        /** @type {?} */
        const defaultLanguage = this.defaultLanguageConfig;
        /** @type {?} */
        const supportedLanguages = this.supportedLanguagesConfig
            .map((/**
         * @param {?} language
         * @return {?}
         */
        language => {
            return {
                name: language.name,
                value: language.code,
                separator: false
            };
        }));
        this.supportedLanguages = supportedLanguages;
        this.selectedLanguage = supportedLanguages.find((/**
         * @param {?} lang
         * @return {?}
         */
        lang => lang.value === defaultLanguage.code));
        this.translate.use(defaultLanguage.code);
        /** @type {?} */
        const queryString = window.location.search;
        if (queryString) {
            /** @type {?} */
            const urlParams = new URLSearchParams(queryString);
            this.fileParam = urlParams.get('file');
            this.fileTypeParam = urlParams.get('fileType');
            if (this.fileParam) {
                this.isLoading = true;
                this.selectFile(this.fileParam, '', '', this.fileTypeParam);
                this.selectCurrentOrFirstPage();
                return;
            }
            this.urlParam = urlParams.get('url');
            if (this.urlParam) {
                this.isLoading = true;
                this.upload(this.urlParam);
                this.selectCurrentOrFirstPage();
            }
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
        return this.viewerConfig ? this.viewerConfig.rewrite : true;
    }
    /**
     * @return {?}
     */
    get zoomConfig() {
        return this.viewerConfig ? this.viewerConfig.zoom : true;
    }
    /**
     * @return {?}
     */
    get pageSelectorConfig() {
        return this.viewerConfig ? this.viewerConfig.pageSelector : true;
    }
    /**
     * @return {?}
     */
    get searchConfig() {
        return this.viewerConfig ? this.viewerConfig.search : true;
    }
    /**
     * @return {?}
     */
    get thumbnailsConfig() {
        return this.viewerConfig ? this.viewerConfig.thumbnails : true;
    }
    /**
     * @return {?}
     */
    get rotateConfig() {
        return this.viewerConfig ? this.viewerConfig.rotate : true;
    }
    /**
     * @return {?}
     */
    get downloadConfig() {
        return this.viewerConfig ? this.viewerConfig.download : true;
    }
    /**
     * @return {?}
     */
    get uploadConfig() {
        return this.viewerConfig ? this.viewerConfig.upload : true;
    }
    /**
     * @return {?}
     */
    get printConfig() {
        return this.viewerConfig ? this.viewerConfig.print : true;
    }
    /**
     * @return {?}
     */
    get browseConfig() {
        return this.viewerConfig ? this.viewerConfig.browse : true;
    }
    /**
     * @return {?}
     */
    get htmlModeConfig() {
        return this.viewerConfig ? this.viewerConfig.htmlMode : true;
    }
    /**
     * @return {?}
     */
    get saveRotateStateConfig() {
        return this.viewerConfig ? this.viewerConfig.saveRotateState : true;
    }
    /**
     * @return {?}
     */
    get enableRightClickConfig() {
        return this.viewerConfig ? this.viewerConfig.enableRightClick : true;
    }
    /**
     * @return {?}
     */
    get currentPage() {
        return this._navigateService.currentPage;
    }
    /**
     * @return {?}
     */
    get showLanguageMenu() {
        if (this.viewerConfig !== undefined && this.viewerConfig.showLanguageMenu !== undefined) {
            return this.viewerConfig.showLanguageMenu;
        }
        return Constants.defaultShowLanguageMenu;
    }
    /**
     * @return {?}
     */
    get supportedLanguagesConfig() {
        if (this.viewerConfig && this.viewerConfig.supportedLanguages) {
            /** @type {?} */
            const supportedLanguages = this.viewerConfig.supportedLanguages;
            return Constants.defaultSupportedLanguages
                .filter((/**
             * @param {?} lang
             * @return {?}
             */
            lang => supportedLanguages.indexOf(lang.code) !== -1 || supportedLanguages.indexOf(lang.alternateCode) !== -1));
        }
        return Constants.defaultSupportedLanguages;
    }
    /**
     * @return {?}
     */
    get defaultLanguageConfig() {
        if (this.viewerConfig && this.viewerConfig.defaultLanguage) {
            return this.supportedLanguagesConfig
                .find((/**
             * @param {?} lang
             * @return {?}
             */
            lang => lang.is(this.viewerConfig.defaultLanguage)));
        }
        /** @type {?} */
        const pathname = window.location.pathname;
        if (pathname) {
            /** @type {?} */
            const parts = pathname.split('/');
            for (const part of parts) {
                if (part === "")
                    continue;
                /** @type {?} */
                const langOrNothing = this.supportedLanguagesConfig
                    .filter((/**
                 * @param {?} supported
                 * @return {?}
                 */
                supported => supported.is(part)))
                    .shift();
                if (langOrNothing)
                    return langOrNothing;
            }
        }
        /** @type {?} */
        const queryString = window.location.search;
        if (queryString) {
            /** @type {?} */
            const urlParams = new URLSearchParams(queryString);
            /** @type {?} */
            const candidate = urlParams.get('lang');
            if (candidate) {
                return this.supportedLanguagesConfig
                    .find((/**
                 * @param {?} lang
                 * @return {?}
                 */
                lang => lang.is(candidate)));
            }
        }
        return Constants.defaultLanguage;
    }
    /**
     * @return {?}
     */
    ifPresentation() {
        return this.file ? FileUtil.find(this.file.guid, false).format === "Microsoft PowerPoint" : false;
    }
    /**
     * @return {?}
     */
    ifExcel() {
        return this.file ? FileUtil.find(this.file.guid, false).format === "Microsoft Excel" : false;
    }
    /**
     * @return {?}
     */
    ifImage() {
        return this.file ? this.formatIcon === "file-image" : false;
    }
    /**
     * @return {?}
     */
    getFileName() {
        return this.file.guid.replace(/^.*[\\\/]/, '');
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
        this._viewerService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        (files) => this.files = files || []));
    }
    /**
     * @return {?}
     */
    selectCurrentOrFirstPage() {
        this.selectedPageNumber = this._navigateService.currentPage !== 0 ? this._navigateService.currentPage : 1;
    }
    /**
     * @return {?}
     */
    getPreloadPageCount() {
        /** @type {?} */
        const minPresentationPagesToPreload = 3;
        /** @type {?} */
        const preloadPageCount = !this.ifPresentation()
            ? this.viewerConfig.preloadPageCount
            : this.viewerConfig.preloadPageCount !== 0 && this.viewerConfig.preloadPageCount < minPresentationPagesToPreload
                ? minPresentationPagesToPreload
                : this.viewerConfig.preloadPageCount;
        return preloadPageCount;
    }
    /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @param {?} fileType
     * @return {?}
     */
    selectFile($event, password, modalId, fileType) {
        this.credentials = { guid: $event, fileType: fileType, password: password };
        this.file = null;
        this._viewerService.loadFile(this.credentials).subscribe((/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
            this.file = file;
            this.formatDisabled = !this.file;
            this.pagesToPreload = [];
            if (file) {
                this.credentials.fileType = file.fileType;
                this.formatIcon = this.file ? FileUtil.find(this.file.guid, false).icon : null;
                if (file.pages && file.pages[0]) {
                    this._pageHeight = file.pages[0].height;
                    this._pageWidth = file.pages[0].width;
                    this.options = this.zoomOptions();
                    this.timerOptions = this.getTimerOptions();
                    this.refreshZoom();
                }
                /** @type {?} */
                const preloadPageCount = this.getPreloadPageCount();
                /** @type {?} */
                const countPages = file.pages ? file.pages.length : 0;
                if (preloadPageCount > 0) {
                    this.file.thumbnails = file.pages.slice();
                    this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                }
                else {
                    this.preloadPages(1, countPages);
                }
                this.selectedPageNumber = 1;
                this._navigateService.countPages = countPages;
                this._navigateService.currentPage = this.selectedPageNumber;
                this.countPages = countPages;
                this.showThumbnails = this.ifPresentation();
                this.runPresentation = false;
            }
            this.cdr.detectChanges();
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
        for (let pageNumber = start; pageNumber <= end; pageNumber++) {
            if (this.pagesToPreload.indexOf(pageNumber) !== -1) {
                continue;
            }
            this.pagesToPreload.push(pageNumber);
            this._viewerService.loadPage(this.credentials, pageNumber).subscribe((/**
             * @param {?} page
             * @return {?}
             */
            (page) => {
                if (page.data) {
                    page.data = page.data.replace(/>\s+</g, '><').replace(/\uFEFF/g, '');
                }
                this.file.pages[pageNumber - 1].data = page.data;
                if (this.file.thumbnails) {
                    this.file.thumbnails[pageNumber - 1].data = page.data;
                }
            }));
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    upload($event) {
        this._viewerService.upload(null, $event, this.rewriteConfig).subscribe((/**
         * @param {?} uploadedDocument
         * @return {?}
         */
        (uploadedDocument) => {
            if (this.fileParam !== '') {
                this.selectFile(uploadedDocument.guid, '', '', '');
                this.fileParam = '';
                this.fileTypeParam = '';
            }
            else {
                this.selectDir('');
            }
        }));
    }
    /**
     * @return {?}
     */
    nextPage() {
        if (this.formatDisabled)
            return;
        if (this.intervalTimer && this._navigateService.currentPage + 1 > this.countPages) {
            this.intervalTimer.stop();
            this.intervalTime = 0;
        }
        this._navigateService.nextPage();
    }
    /**
     * @return {?}
     */
    prevPage() {
        if (this.formatDisabled)
            return;
        this._navigateService.prevPage();
    }
    /**
     * @return {?}
     */
    toLastPage() {
        if (this.formatDisabled)
            return;
        this._navigateService.toLastPage();
    }
    /**
     * @return {?}
     */
    toFirstPage() {
        if (this.formatDisabled)
            return;
        this._navigateService.toFirstPage();
    }
    /**
     * @return {?}
     */
    zoomIn() {
        if (this.formatDisabled)
            return;
        if (this._zoom < 490) {
            this.zoom = this._zoom + 10;
        }
    }
    /**
     * @return {?}
     */
    zoomOut() {
        if (this.formatDisabled)
            return;
        if (this._zoom > 30) {
            this.zoom = this._zoom - 10;
        }
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
     * @return {?}
     */
    getFitToWidth() {
        // Images and Excel-related files receiving dimensions in px from server
        /** @type {?} */
        const pageWidth = this.formatIcon && (this.ifExcel() || this.ifImage()) ? this._pageWidth : this.ptToPx(this._pageWidth);
        /** @type {?} */
        const pageHeight = this.formatIcon && (this.ifExcel() || this.ifImage()) ? this._pageHeight : this.ptToPx(this._pageHeight);
        /** @type {?} */
        const offsetWidth = pageWidth ? pageWidth : window.innerWidth;
        /** @type {?} */
        const presentationThumbnails = this.isDesktop && this.ifPresentation() && !this.runPresentation;
        if (!this.runPresentation) {
            return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / (presentationThumbnails ? window.innerWidth - Constants.thumbnailsWidth - Constants.scrollWidth : window.innerWidth))
                : (!this.isDesktop ? Math.round(window.innerWidth * 100 / offsetWidth)
                    : Math.round(((presentationThumbnails ? window.innerWidth - Constants.thumbnailsWidth - Constants.scrollWidth
                        : window.innerHeight) / offsetWidth) * 100));
        }
        else {
            return Math.round(window.innerWidth * 100 / offsetWidth);
        }
    }
    /**
     * @return {?}
     */
    getFitToHeight() {
        /** @type {?} */
        const pageWidth = this.formatIcon && (this.ifExcel() || this.ifImage()) ? this._pageWidth : this.ptToPx(this._pageWidth);
        /** @type {?} */
        const pageHeight = this.formatIcon && (this.ifExcel() || this.ifImage()) ? this._pageHeight : this.ptToPx(this._pageHeight);
        /** @type {?} */
        const windowHeight = (pageHeight > pageWidth) ? window.innerHeight - 100 : window.innerHeight + 100;
        /** @type {?} */
        const offsetHeight = pageHeight ? pageHeight : windowHeight;
        if (!this.ifPresentation() && !(this.ifImage())) {
            return (pageHeight > pageWidth) ? Math.round(windowHeight * 100 / offsetHeight) : Math.round(offsetHeight * 100 / windowHeight);
        }
        if (this.ifPresentation()) {
            return Math.floor((window.innerHeight - Constants.topbarWidth) * 100 / (!this.runPresentation ? offsetHeight + Constants.documentMargin * 2 + Constants.scrollWidth
                : offsetHeight));
        }
        if (this.ifImage()) {
            return Math.floor((window.innerHeight - Constants.topbarWidth) * 100 / (offsetHeight + Constants.documentMargin * 2 + Constants.scrollWidth));
        }
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
     * @return {?}
     */
    getTimerOptions() {
        return [{ value: 0, name: 'None', separator: false },
            { value: 5, name: '5 sec', separator: false },
            { value: 10, name: '10 sec', separator: false },
            { value: 15, name: '15 sec', separator: false },
            { value: 30, name: '30 sec', separator: false }];
    }
    /**
     * @param {?} zoom
     * @return {?}
     */
    set zoom(zoom) {
        this._zoom = zoom;
        this.zoomService.changeZoom(this._zoom);
    }
    /**
     * @return {?}
     */
    get zoom() {
        return this._zoom;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectZoom($event) {
        this.zoom = $event.value;
    }
    /**
     * @param {?} deg
     * @return {?}
     */
    rotate(deg) {
        if (this.formatDisabled)
            return;
        /** @type {?} */
        const pageNumber = this._navigateService.currentPage;
        /** @type {?} */
        const pageModel = this.file.pages[pageNumber - 1];
        if (this.saveRotateStateConfig && this.file) {
            this._viewerService.rotate(this.credentials, deg, pageNumber).subscribe((/**
             * @param {?} page
             * @return {?}
             */
            (page) => {
                /** @type {?} */
                const updatedData = page.data.replace(/>\s+</g, '><')
                    .replace(/\uFEFF/g, "");
                page.data = updatedData;
                this.file.pages[pageNumber - 1] = page;
                if (this.file && this.file.pages && pageModel) {
                    /** @type {?} */
                    const angle = pageModel.angle + deg;
                    if (angle > 360) {
                        this.changeAngle(pageModel, 90);
                    }
                    else if (angle < -360) {
                        this.changeAngle(pageModel, -90);
                    }
                    else {
                        this.changeAngle(pageModel, angle);
                    }
                }
            }));
        }
    }
    /**
     * @private
     * @param {?} page
     * @param {?} angle
     * @return {?}
     */
    changeAngle(page, angle) {
        page.angle = angle;
    }
    /**
     * @return {?}
     */
    downloadFile() {
        if (this.formatDisabled)
            return;
        window.location.assign(this._viewerService.getDownloadUrl(this.credentials));
    }
    /**
     * @return {?}
     */
    printFile() {
        if (this.formatDisabled)
            return;
        this._viewerService.loadPrintPdf(this.credentials).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this._renderPrintService.changeBlob(data);
        }));
    }
    /**
     * @return {?}
     */
    openThumbnails() {
        if (this.formatDisabled)
            return;
        if (this.showThumbnails) {
            this.showThumbnails = false;
            return;
        }
        this.runPresentation = false;
        this.showThumbnails = true;
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
    onRightClick() {
        return this.enableRightClickConfig;
    }
    /**
     * @return {?}
     */
    openSearch() {
        if (this.formatDisabled)
            return;
        this.showSearch = !this.showSearch;
    }
    /**
     * @private
     * @return {?}
     */
    refreshZoom() {
        if (this.file) {
            this.formatIcon = FileUtil.find(this.file.guid, false).icon;
            this.zoom = this._windowService.isDesktop() && !(this.ifImage() || this.ifPresentation()) ? 100
                : (this.ifImage() ? this.getFitToHeight()
                    : this.getFitToWidth());
        }
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    selectCurrentPage(pageNumber) {
        this.selectedPageNumber = pageNumber;
        this._navigateService.currentPage = pageNumber;
        if (this.runPresentation && this.intervalTime > 0 && this.intervalTimer.state !== 3) {
            this.resetInterval();
            if (this.slideInRange()) {
                this.startCountDown(this.intervalTime, true);
            }
        }
    }
    /**
     * @return {?}
     */
    onMouseWheelUp() {
        this.startScrollTime = Date.now();
        if (this.ifPresentation() && this.selectedPageNumber !== 1) {
            if (this.startScrollTime - this.endScrollTime > 300 && this.vertScrollEnded(true)) {
                this.selectedPageNumber = this.selectedPageNumber - 1;
                this.endScrollTime = Date.now();
            }
        }
    }
    /**
     * @return {?}
     */
    onMouseWheelDown() {
        this.startScrollTime = Date.now();
        if (this.ifPresentation() && this.selectedPageNumber !== this.file.pages.length) {
            if (this.startScrollTime - this.endScrollTime > 300 && this.vertScrollEnded(false)) {
                this.startScrollTime = Date.now();
                if (this.file.pages[this.selectedPageNumber] && !this.file.pages[this.selectedPageNumber].data) {
                    this.preloadPages(this.selectedPageNumber, this.selectedPageNumber + 1);
                    this.selectedPageNumber = this.selectedPageNumber + 1;
                }
                else {
                    this.selectedPageNumber = this.selectedPageNumber + 1;
                }
                this.endScrollTime = Date.now();
            }
        }
    }
    /**
     * @param {?} onTop
     * @return {?}
     */
    vertScrollEnded(onTop) {
        /** @type {?} */
        const gdDocument = (/** @type {?} */ (document.getElementsByClassName('gd-document')[0]));
        if (onTop) {
            return gdDocument.scrollTop === 0;
        }
        else
            return gdDocument.offsetHeight + gdDocument.scrollTop >= gdDocument.scrollHeight;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleTimer($event) {
        this.intervalTime = $event.value;
        if (this.intervalTime !== 0) {
            if (this.intervalTimer && this.intervalTimer.state === 1) {
                this.intervalTimer.stop();
            }
            this.startCountDown(this.intervalTime);
            this.startInterval(this.intervalTime);
        }
        else {
            this.intervalTimer.stop();
        }
    }
    /**
     * @return {?}
     */
    showCountDown() {
        return this.intervalTime > 0 && (this.slideInRange());
    }
    /**
     * @param {?} seconds
     * @param {?=} reset
     * @return {?}
     */
    startCountDown(seconds, reset = false) {
        clearInterval(this.countDownInterval);
        if (seconds > 0) {
            this.secondsLeft = seconds;
            seconds--;
            /** @type {?} */
            const interval = setInterval((/**
             * @return {?}
             */
            () => {
                this.secondsLeft = seconds;
                seconds--;
                if (seconds === 0) {
                    clearInterval(interval);
                }
            }), 1000);
            this.countDownInterval = interval;
        }
    }
    /**
     * @private
     * @param {?} intervalTime
     * @return {?}
     */
    startInterval(intervalTime) {
        this.intervalTimer = new IntervalTimer((/**
         * @return {?}
         */
        () => {
            if (this.slideInRange()) {
                this.nextPage();
                if (this.slideInRange()) {
                    this.startCountDown(intervalTime);
                }
            }
            else {
                this.intervalTimer.stop();
            }
        }), intervalTime * 1000);
    }
    /**
     * @private
     * @return {?}
     */
    slideInRange() {
        return this._navigateService.currentPage + 1 <= this.countPages;
    }
    /**
     * @private
     * @return {?}
     */
    resetInterval() {
        this.intervalTimer.stop();
        this.startInterval(this.intervalTime);
    }
    /**
     * @return {?}
     */
    pausePresenting() {
        this.intervalTimer.pause();
        this.startCountDown(0, true);
    }
    /**
     * @return {?}
     */
    resumePresenting() {
        this.intervalTimer.resume();
        /** @type {?} */
        const secondsRemaining = Math.round(this.intervalTimer.remaining / 1000);
        this.startCountDown(secondsRemaining);
    }
    /**
     * @return {?}
     */
    presentationRunning() {
        return this.intervalTimer && this.intervalTimer.state === 1 && this.slideInRange();
    }
    /**
     * @return {?}
     */
    presentationPaused() {
        return this.intervalTimer && this.intervalTimer.state === 2 && this.slideInRange();
    }
    /**
     * @return {?}
     */
    startPresentation() {
        this.showThumbnails = false;
        this.openFullScreen();
        this.runPresentation = !this.runPresentation;
        /** @type {?} */
        const intervalId = setInterval((/**
         * @return {?}
         */
        () => {
            if (screen.height === window.innerHeight && screen.width === window.innerWidth) {
                this.zoomService.changeZoom(window.innerWidth / window.innerHeight < 1.7 && this._pageWidth / this._pageHeight > 1.7
                    ? this.getFitToWidth() : this.getFitToHeight());
                clearInterval(intervalId);
            }
        }), 50);
    }
    /**
     * @return {?}
     */
    openFullScreen() {
        /** @type {?} */
        const docElmWithBrowsersFullScreenFunctions = (/** @type {?} */ (document.documentElement));
        if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
            docElmWithBrowsersFullScreenFunctions.requestFullscreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
            docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
            docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
        }
        this.isFullScreen = true;
    }
    /**
     * @param {?=} byButton
     * @return {?}
     */
    closeFullScreen(byButton = false) {
        if (byButton) {
            /** @type {?} */
            const docWithBrowsersExitFunctions = (/** @type {?} */ (document));
            if (docWithBrowsersExitFunctions.exitFullscreen) {
                docWithBrowsersExitFunctions.exitFullscreen();
            }
            else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */
                docWithBrowsersExitFunctions.mozCancelFullScreen();
            }
            else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                docWithBrowsersExitFunctions.webkitExitFullscreen();
            }
            else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */
                docWithBrowsersExitFunctions.msExitFullscreen();
            }
        }
        if (this.intervalTimer) {
            this.intervalTimer.stop();
        }
        this.isFullScreen = false;
        this.runPresentation = false;
        this.showThumbnails = true;
        this.intervalTime = 0;
        this.startCountDown(0);
        this.refreshZoom();
    }
    /**
     * @param {?} selectedLanguage
     * @return {?}
     */
    selectLanguage(selectedLanguage) {
        this.selectedLanguage = selectedLanguage;
        this.translate.use(selectedLanguage.value);
    }
}
ViewerAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-viewer',
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick()\">\n  <div class=\"top-panel\" *ngIf=\"!runPresentation\">\n    <gd-logo [logo]=\"'viewer'\" icon=\"eye\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" title=\"{{'Browse files' | translate}}\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-select class=\"mobile-hide select-left noselect\" [disabled]=\"formatDisabled\" [options]=\"options\" (selected)=\"selectZoom($event)\"\n                 [showSelected]=\"{ name: zoom+'%', value : zoom}\" *ngIf=\"zoomConfig\" ></gd-select>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" title=\"{{'Zoom In' | translate}}\" (click)=\"zoomIn()\"\n                 *ngIf=\"zoomConfig\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" title=\"{{'Zoom Out' | translate}}\"\n                 (click)=\"zoomOut()\" *ngIf=\"zoomConfig\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-left'\" title=\"{{'First Page' | translate }}\"\n                 (click)=\"toFirstPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" title=\"{{'Previous Page' | translate}}\"\n                 (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <div class=\"current-page-number noselect\" [ngClass]=\"{'active': !formatDisabled}\" *ngIf=\"formatIcon !== 'file-excel'\">{{currentPage}}/{{countPages}}</div>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" title=\"{{'Next Page' | translate }}\"\n                 (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-right'\" title=\"{{'Last Page' | translate }}\"\n                 (click)=\"toLastPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'undo'\" title=\"{{'Rotate CCW' | translate}}\" (click)=\"rotate(-90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'redo'\" title=\"{{'Rotate CW' | translate}}\"  (click)=\"rotate(90)\"\n                 *ngIf=\"rotateConfig && formatIcon !== 'file-excel'\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" title=\"{{'Download' | translate}}\"\n                 (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" title=\"{{'Print' | translate}}\" (click)=\"printFile()\"\n                 *ngIf=\"printConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search'\" title=\"{{'Search' | translate}}\" (click)=\"openSearch()\"\n                 *ngIf=\"searchConfig && !ifPresentation()\" ></gd-button>\n      <gd-search (hidePanel)=\"showSearch = !$event\" *ngIf=\"showSearch\" ></gd-search>\n\n      <div class=\"toolbar-panel-right\">\n        <div class=\"language-menu mobile-hide\" *ngIf=\"showLanguageMenu\">\n          <gd-select class=\"select-language-menu noselect\" [disabled]=\"false\" [options]=\"supportedLanguages\"\n            (selected)=\"selectLanguage($event)\" [showSelected]=\"selectedLanguage\"></gd-select>\n        </div>\n\n        <gd-button class=\"thumbnails-button btn-right\" [disabled]=\"formatDisabled\" [icon]=\"'th-large'\" title=\"{{'Thumbnails' | translate}}\"\n                   (click)=\"openThumbnails()\" *ngIf=\"thumbnailsConfig && isDesktop && formatIcon !== 'file-excel' && (!ifPresentation() ||\n                   ifPresentation() && runPresentation)\"></gd-button>\n        <gd-button class=\"thumbnails-button mobile-hide btn-right smp-start-stop\" [disabled]=\"formatDisabled\" [icon]=\"'play'\" title=\"{{'Run presentation' | translate}}\"\n                   (click)=\"startPresentation()\" *ngIf=\"ifPresentation() && !runPresentation\">{{'Present' | translate}}</gd-button>\n      </div>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"top-panel\" *ngIf=\"runPresentation\">\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <div class=\"slides-title\">Viewer</div>\n      <div class=\"slides-filename\">{{getFileName()}}</div>\n      <div class=\"slides-buttons\">\n        <gd-select class=\"mobile-hide select-right\" [disabled]=\"formatDisabled\" [options]=\"timerOptions\" (selected)=\"toggleTimer($event)\"\n        [icon]=\"'clock'\" *ngIf=\"zoomConfig\" ></gd-select>\n        <gd-button class=\"mobile-hide\" *ngIf=\"presentationRunning()\" [disabled]=\"formatDisabled\" [icon]=\"'pause'\" title=\"{{'Pause presenting' | translate}}\"\n        (click)=\"pausePresenting()\"></gd-button>\n        <gd-button class=\"mobile-hide\" *ngIf=\"presentationPaused()\" [disabled]=\"formatDisabled\" [icon]=\"'step-forward'\" title=\"{{'Resume presenting' | translate}}\"\n        (click)=\"resumePresenting()\"></gd-button>\n        <gd-button class=\"mobile-hide btn-right smp-start-stop\" [disabled]=\"formatDisabled\" [icon]=\"'stop'\" title=\"{{'Stop presenting' | translate}}\"\n        (click)=\"closeFullScreen(true)\">{{'Stop' | translate}} </gd-button>\n      </div>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"doc-panel\" *ngIf=\"file\" #docPanel>\n    <gd-thumbnails *ngIf=\"showThumbnails && !ifPresentation() && isDesktop\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\" (selectedPage)=\"selectCurrentPage($event)\"></gd-thumbnails>\n    <gd-thumbnails *ngIf=\"showThumbnails && ifPresentation() && !runPresentation && isDesktop\" [pages]=\"viewerConfig?.preloadPageCount == 0 ? file.pages : file.thumbnails\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\" (selectedPage)=\"selectCurrentPage($event)\" gdScrollable [isPresentation]=\"ifPresentation()\"></gd-thumbnails>\n\n    <gd-document class=\"gd-document\" *ngIf=\"(file &&\n                                            (ifExcel() && !htmlModeConfig) ||\n                                            (ifPresentation() && isDesktop && !runPresentation) ||\n                                            (!ifExcel() && !ifPresentation()))\" [file]=\"file\" [mode]=\"htmlModeConfig\" [showActiveSlide]=\"true\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" [selectedPage]=\"selectedPageNumber\" gdRenderPrint [htmlMode]=\"htmlModeConfig\" gdMouseWheel (mouseWheelUp)=\"onMouseWheelUp()\" (mouseWheelDown)=\"onMouseWheelDown()\"></gd-document>\n    <gd-excel-document class=\"gd-document\" *ngIf=\"file && ifExcel() && htmlModeConfig\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-excel-document>\n    <gd-run-presentation class=\"gd-document\" *ngIf=\"(file && ifPresentation() && runPresentation) ||\n                                                    (file && ifPresentation() && !isDesktop)\" [file]=\"file\" [currentPage]=\"currentPage\" [mode]=\"htmlModeConfig\"\n                                                    (selectedPage)=\"selectCurrentPage($event)\"\n                 [preloadPageCount]=\"0\"></gd-run-presentation>\n    <div class=\"slides-nav\" *ngIf=\"runPresentation\">\n      <div class=\"timer\" *ngIf=\"showCountDown()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon><span [ngClass]=\"secondsLeft >= 10 ? 'seconds-remaining two-digits' : 'seconds-remaining'\">{{secondsLeft}}</span>\n      </div>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\"\n      (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\"\n      (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig && formatIcon !== 'file-excel'\" ></gd-button>\n    </div>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n    {{'Click' | translate}} <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> {{'to open file' | translate}}<br>\n    {{'Or drop file here' | translate}}\n  </gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal, null)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.noselect{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.current-page-number{margin-left:7px;font-size:14px;color:#959da5;width:37px;height:37px;line-height:37px;text-align:center}.current-page-number.active{color:#fff}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}.toolbar-panel-right{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1;place-content:flex-end}.btn-right{margin-right:7px}.smp-start-stop ::ng-deep .button{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;border:1px solid;border-radius:5px;padding:0 10px!important}.language-menu{margin-right:15px}.select-language-menu ::ng-deep .select{width:100%}.select-language-menu ::ng-deep .select ::ng-deep .dropdown-menu{overflow-y:scroll;max-height:90%}.select-language-menu ::ng-deep .selected-value{max-width:100%}.thumbnails-button ::ng-deep .button{margin-left:0!important}::ng-deep .tools .button,::ng-deep .tools .nav-caret,::ng-deep .tools .selected-value{color:#fff!important}::ng-deep .tools .button.inactive,::ng-deep .tools .nav-caret.inactive,::ng-deep .tools .selected-value.inactive{color:#959da5!important}::ng-deep .tools .button{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .select-left .select{position:relative}::ng-deep .tools .select-left .dropdown-menu{top:40px;left:0}::ng-deep .tools .select-right .select{position:relative}::ng-deep .tools .select-right .dropdown-menu{top:40px;right:0}::ng-deep .tools .dropdown-menu .option{color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 15px!important}::ng-deep .tools .select{width:37px;height:37px;margin-left:7px;line-height:37px;text-align:center}::ng-deep .tools .slides-title{color:#fff;padding-left:12px;font-size:18px}::ng-deep .tools .slides-filename{-webkit-box-flex:1;flex-grow:1;text-align:center;color:#fff;text-overflow:ellipsis;white-space:nowrap;padding-left:20px;overflow:hidden}::ng-deep .tools .slides-buttons{display:-webkit-box;display:flex}::ng-deep .tools .slides-buttons ::ng-deep .select{color:#fff;cursor:pointer}::ng-deep .tools ::ng-deep .gd-nav-search-container .icon-button{margin:0 0 0 7px!important}.slides-nav{position:absolute;right:30px;bottom:30px;display:-webkit-box;display:flex}.slides-nav ::ng-deep .button{font-size:37px;background-color:#edf0f2;border-radius:3px}.slides-nav ::ng-deep .timer{font-size:42px;line-height:6px;color:#959da5;position:relative}.slides-nav ::ng-deep .timer .seconds-remaining{position:absolute;margin-left:5px;font-size:16px;top:18px;left:12px}.slides-nav ::ng-deep .timer .seconds-remaining.two-digits{left:6px!important}::ng-deep .page.presentation .gd-wrapper{pointer-events:none}@media (max-width:1037px){.current-page-number,.mobile-hide{display:none}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .tools .gd-nav-search-btn .icon-button{height:37px;width:37px}::ng-deep .tools .gd-nav-search-btn .button{font-size:14px}::ng-deep .tools .gd-nav-search-container{top:59px!important}}"]
            }] }
];
/** @nocollapse */
ViewerAppComponent.ctorParameters = () => [
    { type: ViewerService },
    { type: ModalService },
    { type: ViewerConfigService },
    { type: UploadFilesService },
    { type: NavigateService },
    { type: ZoomService },
    { type: PagePreloadService },
    { type: RenderPrintService },
    { type: PasswordService },
    { type: WindowService },
    { type: LoadingMaskService },
    { type: ChangeDetectorRef },
    { type: TranslateService }
];
ViewerAppComponent.propDecorators = {
    fullScreen: [{ type: HostListener, args: ["document:fullscreenchange", [],] }]
};
if (false) {
    /** @type {?} */
    ViewerAppComponent.prototype.title;
    /** @type {?} */
    ViewerAppComponent.prototype.files;
    /** @type {?} */
    ViewerAppComponent.prototype.file;
    /** @type {?} */
    ViewerAppComponent.prototype.viewerConfig;
    /** @type {?} */
    ViewerAppComponent.prototype.countPages;
    /** @type {?} */
    ViewerAppComponent.prototype.formatDisabled;
    /** @type {?} */
    ViewerAppComponent.prototype.showThumbnails;
    /** @type {?} */
    ViewerAppComponent.prototype.credentials;
    /** @type {?} */
    ViewerAppComponent.prototype.browseFilesModal;
    /** @type {?} */
    ViewerAppComponent.prototype.showSearch;
    /** @type {?} */
    ViewerAppComponent.prototype.isDesktop;
    /** @type {?} */
    ViewerAppComponent.prototype.isLoading;
    /** @type {?} */
    ViewerAppComponent.prototype.pagesToPreload;
    /** @type {?} */
    ViewerAppComponent.prototype._zoom;
    /** @type {?} */
    ViewerAppComponent.prototype._pageWidth;
    /** @type {?} */
    ViewerAppComponent.prototype._pageHeight;
    /** @type {?} */
    ViewerAppComponent.prototype.options;
    /** @type {?} */
    ViewerAppComponent.prototype.timerOptions;
    /** @type {?} */
    ViewerAppComponent.prototype.intervalTime;
    /** @type {?} */
    ViewerAppComponent.prototype.intervalTimer;
    /** @type {?} */
    ViewerAppComponent.prototype.countDownInterval;
    /** @type {?} */
    ViewerAppComponent.prototype.secondsLeft;
    /** @type {?} */
    ViewerAppComponent.prototype.fileWasDropped;
    /** @type {?} */
    ViewerAppComponent.prototype.formatIcon;
    /** @type {?} */
    ViewerAppComponent.prototype.fileParam;
    /** @type {?} */
    ViewerAppComponent.prototype.fileTypeParam;
    /** @type {?} */
    ViewerAppComponent.prototype.urlParam;
    /** @type {?} */
    ViewerAppComponent.prototype.querySubscription;
    /** @type {?} */
    ViewerAppComponent.prototype.selectedPageNumber;
    /** @type {?} */
    ViewerAppComponent.prototype.runPresentation;
    /** @type {?} */
    ViewerAppComponent.prototype.isFullScreen;
    /** @type {?} */
    ViewerAppComponent.prototype.startScrollTime;
    /** @type {?} */
    ViewerAppComponent.prototype.endScrollTime;
    /** @type {?} */
    ViewerAppComponent.prototype.supportedLanguages;
    /** @type {?} */
    ViewerAppComponent.prototype.selectedLanguage;
    /** @type {?} */
    ViewerAppComponent.prototype.docElmWithBrowsersFullScreenFunctions;
    /** @type {?} */
    ViewerAppComponent.prototype.docWithBrowsersExitFunctions;
    /** @type {?} */
    ViewerAppComponent.prototype.zoomService;
    /**
     * @type {?}
     * @private
     */
    ViewerAppComponent.prototype._viewerService;
    /**
     * @type {?}
     * @private
     */
    ViewerAppComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    ViewerAppComponent.prototype._navigateService;
    /**
     * @type {?}
     * @private
     */
    ViewerAppComponent.prototype._renderPrintService;
    /**
     * @type {?}
     * @private
     */
    ViewerAppComponent.prototype._windowService;
    /**
     * @type {?}
     * @private
     */
    ViewerAppComponent.prototype._loadingMaskService;
    /**
     * @type {?}
     * @private
     */
    ViewerAppComponent.prototype.cdr;
    /** @type {?} */
    ViewerAppComponent.prototype.translate;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ThumbnailsComponent {
    /**
     * @param {?} _navigateService
     * @param {?} _zoomService
     */
    constructor(_navigateService, _zoomService) {
        this._navigateService = _navigateService;
        this._zoomService = _zoomService;
        this.selectedPage = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
        // which leads to undesired spaces on the top of the docs pages
        if (this.pages) {
            this.pages.forEach((/**
             * @param {?} page
             * @return {?}
             */
            page => {
                if (page.data) {
                    page.data = page.data.replace(/>\s+</g, '><')
                        .replace(/\uFEFF/g, "");
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._zoomService.changeZoom(this._zoomService.zoom);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._zoomService.changeZoom(this._zoomService.zoom);
        }), 100);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    imgData(data) {
        if (data) {
            return data.startsWith('data:image')
                ? data
                : 'data:image/png;base64,' + data;
        }
        return null;
    }
    /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    getScale(x, y) {
        return Math.min(190 / x, 190 / y);
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    openPage(pageNumber) {
        this.selectedPage.emit(pageNumber);
        this._navigateService.navigateTo(pageNumber);
    }
    // TODO: consider placing in one service
    /**
     * @param {?} value
     * @return {?}
     */
    getDimensionWithUnit(value) {
        return value + FileUtil.find(this.guid, false).unit;
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    emptyThumbData(pageNumber) {
        return `<div style="height:100%;display:grid;color:#bfbfbf"><div style="font-size:10vw;margin:auto;text-align:center;">${pageNumber}</div></div>`;
    }
}
ThumbnailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-thumbnails',
                template: "<div class=\"gd-thumbnails\">\n  <div class=\"gd-thumbnails-panzoom\">\n    <div *ngFor=\"let page of pages\" id=\"gd-thumbnails-page-{{page.number}}\" class=\"gd-page\"\n         (click)=\"openPage(page.number)\" gdRotation [withMargin]=\"false\"\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <div class=\"gd-wrapper\"\n           [style.height]=\"getDimensionWithUnit(page.height)\"\n           [style.width]=\"getDimensionWithUnit(page.width)\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && isHtmlMode\"\n           [innerHTML]=\"page.data | safeHtml\"></div>\n      <div class=\"gd-wrapper\" \n           [style.height]=\"getDimensionWithUnit(page.height)\"\n           [style.width]=\"getDimensionWithUnit(page.width)\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && !isHtmlMode\">\n           <img style=\"width: inherit !important\" class=\"gd-page-image\" [attr.src]=\"imgData(page.data) | safeResourceHtml\"\n             alt/>\n      </div>\n      <div class=\"gd-wrapper\"\n           [style.height]=\"getDimensionWithUnit(800)\"\n           [style.width]=\"getDimensionWithUnit(800)\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(800, 800)+')'}\"\n           *ngIf=\"!page.data\"\n           [innerHTML]=\"emptyThumbData(page.number) | safeHtml\">\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [":host{-webkit-box-flex:0;flex:0 0 300px;background:#f5f5f5;color:#fff;overflow-y:auto;display:block;-webkit-transition:margin-left .2s;transition:margin-left .2s;height:100%}.gd-page{width:272px;height:272px;-webkit-transition:.3s;transition:.3s;background-color:#e7e7e7;cursor:pointer;margin:14px 14px 0}.gd-page:hover{background-color:silver}.gd-wrapper{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);left:50%;top:50%;position:relative;background-color:#fff;box-shadow:0 4px 12px -4px rgba(0,0,0,.38);pointer-events:none}.gd-wrapper ::ng-deep img{width:inherit}.gd-thumbnails::-webkit-scrollbar{width:0;background-color:#f5f5f5}.gd-thumbnails-panzoom>.gd-thumbnails-landscape{margin:-134px 0 -1px 12px}.gd-thumbnails .gd-page-image{height:inherit}.gd-thumbnails-landscape-image{margin:-90px 0 -23px!important}.gd-thumbnails-landscape-image-rotated{margin:126px 0 -3px -104px!important}"]
            }] }
];
/** @nocollapse */
ThumbnailsComponent.ctorParameters = () => [
    { type: NavigateService },
    { type: ZoomService }
];
ThumbnailsComponent.propDecorators = {
    pages: [{ type: Input }],
    guid: [{ type: Input }],
    mode: [{ type: Input }],
    isHtmlMode: [{ type: Input }],
    selectedPage: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ThumbnailsComponent.prototype.pages;
    /** @type {?} */
    ThumbnailsComponent.prototype.guid;
    /** @type {?} */
    ThumbnailsComponent.prototype.mode;
    /** @type {?} */
    ThumbnailsComponent.prototype.isHtmlMode;
    /** @type {?} */
    ThumbnailsComponent.prototype.selectedPage;
    /**
     * @type {?}
     * @private
     */
    ThumbnailsComponent.prototype._navigateService;
    /**
     * @type {?}
     * @private
     */
    ThumbnailsComponent.prototype._zoomService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExcelPageService {
    constructor() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getUpdatedPage(data) {
        /** @type {?} */
        const doc = new DOMParser().parseFromString(data, "text/html");
        /** @type {?} */
        const table = doc.querySelector('table');
        /** @type {?} */
        let numCellsInFirstRow = 0;
        /** @type {?} */
        const cellsFromFirstRow = doc.querySelectorAll('table > tbody > tr:first-child td');
        cellsFromFirstRow.forEach((/**
         * @param {?} elm
         * @return {?}
         */
        elm => {
            numCellsInFirstRow += elm.attributes['colspan'] ? parseInt(elm.attributes['colspan'].value, 10) : 1;
        }));
        /** @type {?} */
        const newTable = this.createHeader(numCellsInFirstRow, table);
        doc.querySelector('table').replaceWith(newTable);
        /** @type {?} */
        const resultData = new XMLSerializer().serializeToString(doc)
        // work-around for FF which is adds a0 namespace during serialization
        ;
        // work-around for FF which is adds a0 namespace during serialization
        return resultData.replace(/a0:/g, "").replace(/:a0/g, "");
    }
    /**
     * @param {?} numCols
     * @param {?} table
     * @return {?}
     */
    createHeader(numCols, table) {
        /** @type {?} */
        const header = document.createElement('thead');
        header.append(document.createElement('tr'));
        for (let i = 0; i < numCols; ++i) {
            /** @type {?} */
            const th = document.createElement('th');
            th.innerText = this.colName(i);
            header.querySelector("tr").append(th);
        }
        /** @type {?} */
        const colgroup = table.querySelector('colgroup');
        /** @type {?} */
        const col = document.createElement('col');
        col.width = '80px';
        colgroup.prepend(col);
        table.prepend(header);
        /** @type {?} */
        let cnt = 0;
        table.querySelectorAll('tr').forEach((/**
         * @param {?} row
         * @return {?}
         */
        row => {
            /** @type {?} */
            const div = document.createElement('div');
            if (cnt !== 0) {
                /** @type {?} */
                const td = document.createElement('td');
                td.className = "excel";
                td.append(div);
                div.innerText = cnt.toString();
                row.prepend(td);
            }
            else {
                /** @type {?} */
                const th = document.createElement('th');
                th.append(div);
                row.prepend(th);
            }
            cnt++;
        }));
        return table;
    }
    /**
     * @param {?} n
     * @return {?}
     */
    colName(n) {
        /** @type {?} */
        const ordA = 'a'.charCodeAt(0);
        /** @type {?} */
        const ordZ = 'z'.charCodeAt(0);
        /** @type {?} */
        const len = ordZ - ordA + 1;
        /** @type {?} */
        let s = "";
        while (n >= 0) {
            s = String.fromCharCode(n % len + ordA) + s;
            n = Math.floor(n / len) - 1;
        }
        return s;
    }
}
ExcelPageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ExcelPageService.ctorParameters = () => [];
/** @nocollapse */ ExcelPageService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ExcelPageService_Factory() { return new ExcelPageService(); }, token: ExcelPageService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExcelPageComponent {
    /**
     * @param {?} _excelPageService
     */
    constructor(_excelPageService) {
        this._excelPageService = _excelPageService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const isIE = /*@cc_on!@*/ false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
        if (isIE && this.number === 0) {
            this.editable = false;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isHtml) {
            // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
            // which leads to undesired spaces on the top of the docs pages
            this.data = this.data
                ? this.data.replace(/>\s+</g, '><')
                    .replace(/\uFEFF/g, "")
                : null;
        }
        else {
            if (this.data) {
                this.imgData = this.data.startsWith('data:image')
                    ? this.data
                    : 'data:image/png;base64,' + this.data;
            }
        }
    }
}
ExcelPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-excel-page',
                template: "<div id=\"page-{{number}}\">\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\" [contentEditable]=\"(editable) ? true : false\"></div>\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\n       alt=\"\"\n       *ngIf=\"data && !isHtml\">\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n    &nbsp;Loading... Please wait.\n  </div>\n</div>\n",
                styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper div{width:100%}::ng-deep .gd-highlight{background-color:#ff0}::ng-deep .gd-highlight-select{background-color:#ff9b00}::ng-deep .page-grid-lines td{border:1px solid #e7e7e7!important}::ng-deep tr td.excel:first-child{color:#959da5;background-color:#f4f4f4;font-weight:unset;width:1%;text-align:center}::ng-deep tr td.excel:first-child div{width:80px}::ng-deep tr th.excel:first-child{background-color:#f4f4f4;width:1%}::ng-deep tr th.excel:first-child div{width:80px}.gd-page-image{height:100%!important;width:100%!important}"]
            }] }
];
/** @nocollapse */
ExcelPageComponent.ctorParameters = () => [
    { type: ExcelPageService }
];
ExcelPageComponent.propDecorators = {
    angle: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    number: [{ type: Input }],
    data: [{ type: Input }],
    isHtml: [{ type: Input }],
    editable: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ExcelPageComponent.prototype.angle;
    /** @type {?} */
    ExcelPageComponent.prototype.width;
    /** @type {?} */
    ExcelPageComponent.prototype.height;
    /** @type {?} */
    ExcelPageComponent.prototype.number;
    /** @type {?} */
    ExcelPageComponent.prototype.data;
    /** @type {?} */
    ExcelPageComponent.prototype.isHtml;
    /** @type {?} */
    ExcelPageComponent.prototype.editable;
    /** @type {?} */
    ExcelPageComponent.prototype.imgData;
    /**
     * @type {?}
     * @private
     */
    ExcelPageComponent.prototype._excelPageService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExcelDocumentComponent extends DocumentComponent {
    /**
     * @param {?} _elementRef
     * @param {?} zoomService
     * @param {?} windowService
     * @param {?} navigateService
     * @param {?} renderer
     */
    constructor(_elementRef, zoomService, windowService, navigateService, renderer) {
        super(_elementRef, zoomService, windowService, navigateService);
        this.renderer = renderer;
        this.panzoom = null;
        this.navigateService = navigateService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.currentPageNo = 1;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.navigateService.navigate.subscribe((((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (value) {
                this.selectSheet(value);
            }
        }))));
        /** @type {?} */
        const scrollbarWidth = this.getScrollBarWidth();
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.sheets'), 'right', this.getScrollBarWidth() + 'px');
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.sheets'), 'bottom', this.getScrollBarWidth() + 'px');
        if (scrollbarWidth === 0) {
            this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.sheets'), 'padding-right', '17px');
        }
    }
    /**
     * @return {?}
     */
    getScrollBarWidth() {
        /** @type {?} */
        const documentBox = (/** @type {?} */ (document.querySelector('.gd-document')));
        /** @type {?} */
        const scrollbarWidth = documentBox.offsetWidth - documentBox.clientWidth;
        return scrollbarWidth;
    }
    /**
     * @param {?} number
     * @return {?}
     */
    selectSheet(number) {
        this.currentPageNo = number;
    }
}
ExcelDocumentComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-excel-document',
                template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" style=\"height: 100%\">\n  <div [ngClass]=\"isDesktop ? 'panzoom auto-height' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\n    <div [ngClass]=\"file.showGridLines ? 'page-grid-lines' : 'page'\" *ngFor=\"let page of file?.pages\"\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\">\n      <gd-excel-page *ngIf=\"currentPageNo == page.number\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-excel-page>\n    </div>\n  </div>\n</div>\n<div class=\"sheets\">\n  <div class=\"sheets-wrapper\">\n    <div *ngFor=\"let page of file?.pages\">\n      <gd-button [icon]=\"'eye'\" [ngClass]=\"{'active': currentPageNo == page.number }\" (click)=\"selectSheet(page.number)\">{{page.sheetName}}</gd-button>\n    </div>\n  </div>\n</div>\n",
                styles: [":host{overflow:scroll;width:100%;background-color:#e7e7e7}.document{width:100%;-webkit-transition:.4s;transition:.4s;padding:0;margin:0;position:relative}.sheets{background-color:#fff;display:-webkit-box;display:flex;border-top:1px solid #e7e7e7;position:fixed;width:100%}.sheets ::ng-deep gd-button.active .text{background-color:#272727;border-radius:10px;color:#eee}.sheets ::ng-deep gd-button .text{padding:1px 12px;color:#000}.sheets ::ng-deep gd-button fa-icon{display:none}.sheets-wrapper{margin-left:29px;display:-webkit-box;display:flex}.page{position:relative;display:inline-block;background-color:#fff;-webkit-transition:.3s;transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom.auto-height{-webkit-transform:none;transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;display:-webkit-box;display:flex;flex-wrap:wrap;height:auto!important}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}.page-grid-lines{background-color:#fff}@media (max-width:1037px){.document{overflow-x:auto!important}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
            }] }
];
/** @nocollapse */
ExcelDocumentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ZoomService },
    { type: WindowService },
    { type: NavigateService },
    { type: Renderer2 }
];
ExcelDocumentComponent.propDecorators = {
    pages: [{ type: ViewChildren, args: [ExcelPageComponent,] }]
};
if (false) {
    /** @type {?} */
    ExcelDocumentComponent.prototype.pages;
    /** @type {?} */
    ExcelDocumentComponent.prototype.currentPageNo;
    /** @type {?} */
    ExcelDocumentComponent.prototype.panzoom;
    /** @type {?} */
    ExcelDocumentComponent.prototype.navigateService;
    /**
     * @type {?}
     * @private
     */
    ExcelDocumentComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const $ = jquery;
class RunPresentationComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _zoomService
     * @param {?} _windowService
     * @param {?} _navigateService
     */
    constructor(_elementRef, _zoomService, _windowService, _navigateService) {
        this._elementRef = _elementRef;
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this._navigateService = _navigateService;
        this.selectedPage = new EventEmitter();
        this.wait = false;
        this.container = null;
        this.doc = null;
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            this.zoom = val;
            if (val !== 100) {
                if (this.currentPage !== 1) {
                    this.scrollTo(this.currentPage, true, false);
                }
            }
        }));
        this.isDesktop = _windowService.isDesktop();
        this._navigateService.navigate.subscribe(((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.scrollTo(value, value > this.lastCurrentPage);
            this.lastCurrentPage = value;
        })));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.lastCurrentPage = this._navigateService.currentPage;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // For current iteration we take .panzoom as a document
        this.doc = this._elementRef.nativeElement.children.item(0).children.item(0);
        // For current iteration we take .gd-document as a container
        this.container = this._elementRef.nativeElement;
        /** @type {?} */
        const hammer = new Hammer(this.container);
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        /** @type {?} */
        const elementNodeListOf = this._elementRef.nativeElement.querySelectorAll('.gd-wrapper');
        /** @type {?} */
        const element = elementNodeListOf.item(0);
        if (element) {
            $(element).trigger('focus');
        }
    }
    /**
     * @param {?} pageNumber
     * @param {?} onRight
     * @param {?=} animate
     * @return {?}
     */
    scrollTo(pageNumber, onRight, animate = true) {
        /** @type {?} */
        const pagesWidth = this._elementRef.nativeElement.offsetWidth * (pageNumber - 1);
        /** @type {?} */
        const startingX = onRight ? pagesWidth - this._elementRef.nativeElement.offsetWidth : pagesWidth + this._elementRef.nativeElement.offsetWidth;
        this.doScrolling(pagesWidth, startingX, 500, new Subject(), this._elementRef, animate);
        this.selectedPage.emit(pageNumber);
    }
    /**
     * @private
     * @param {?} elementX
     * @param {?} startingX
     * @param {?} duration
     * @param {?} subject
     * @param {?} _elementRef
     * @param {?=} animate
     * @return {?}
     */
    doScrolling(elementX, startingX, duration, subject, _elementRef, animate = true) {
        /** @type {?} */
        const diff = elementX - startingX;
        /** @type {?} */
        let start;
        if (!animate) {
            _elementRef.nativeElement.scrollTo({ left: startingX + diff });
        }
        else {
            window.requestAnimationFrame((/**
             * @param {?} timestamp
             * @return {?}
             */
            function step(timestamp) {
                start = (!start) ? timestamp : start;
                /** @type {?} */
                const time = timestamp - start;
                /** @type {?} */
                const percent = Math.min(time / duration, 1);
                _elementRef.nativeElement.scrollTo({ left: startingX + diff * percent });
                if (time < duration) {
                    window.requestAnimationFrame(step);
                    subject.next({});
                }
                else {
                    subject.complete();
                }
            }));
        }
    }
    /**
     * @param {?} value
     * @param {?} pageNumber
     * @return {?}
     */
    getDimensionWithUnit(value, pageNumber) {
        return value + (this.mode ? FileUtil.find(this.file.guid, false).unit : 'px');
    }
    /**
     * @param {?} page
     * @return {?}
     */
    isVertical(page) {
        return page.height > page.width;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPanLeft($event) {
        if ($event.isFinal) {
            this._navigateService.nextPage();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPanRight($event) {
        if ($event.isFinal) {
            this._navigateService.prevPage();
        }
    }
}
RunPresentationComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-run-presentation',
                template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" (panleft)=\"onPanLeft($event)\" (panright)=\"onPanRight($event)\">\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\n    <div [ngClass]=\"isVertical(page) ? 'page presentation vertical' : 'page presentation'\" *ngFor=\"let page of file?.pages\"\n      [style.height]=\"getDimensionWithUnit(page.height, page.number)\" [style.width]=\"getDimensionWithUnit(page.width, page.number)\" gdRotation\n      [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\" [width]=\"page.width\"\n        [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                styles: [":host{-webkit-box-flex:1;flex:1;-webkit-transition:.4s;transition:.4s;background-color:#e7e7e7;height:100%;overflow-y:hidden;touch-action:auto!important;overflow-x:hidden}:host .document{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important;touch-action:auto!important}.page{display:inline-block;margin:20px;-webkit-transition:.3s;transition:.3s}.page ::ng-deep gd-page{box-shadow:0 3px 6px rgba(0,0,0,.16);background-color:#fff}.page.presentation{-webkit-transition:unset;transition:unset;margin:0;width:100%!important;display:-webkit-box!important;display:flex!important;-webkit-box-pack:center!important;justify-content:center!important}.page.presentation.vertical{margin:0;width:100%!important;display:-webkit-box!important;display:flex!important;-webkit-box-pack:center!important;justify-content:center!important}.page.presentation.vertical ::ng-deep [class*=\"-rotate\"]{position:unset!important;margin-right:-240px}.page.presentation.vertical ::ng-deep gd-page{height:960pt;width:540pt}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;flex-wrap:wrap;align-content:flex-start}@media (max-width:1037px){:host{overflow-y:unset}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}.page ::ng-deep .gd-wrapper{pointer-events:none}}"]
            }] }
];
/** @nocollapse */
RunPresentationComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ZoomService },
    { type: WindowService },
    { type: NavigateService }
];
RunPresentationComponent.propDecorators = {
    mode: [{ type: Input }],
    preloadPageCount: [{ type: Input }],
    file: [{ type: Input }],
    currentPage: [{ type: Input }],
    selectedPage: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    RunPresentationComponent.prototype.mode;
    /** @type {?} */
    RunPresentationComponent.prototype.preloadPageCount;
    /** @type {?} */
    RunPresentationComponent.prototype.file;
    /** @type {?} */
    RunPresentationComponent.prototype.currentPage;
    /** @type {?} */
    RunPresentationComponent.prototype.selectedPage;
    /** @type {?} */
    RunPresentationComponent.prototype.wait;
    /** @type {?} */
    RunPresentationComponent.prototype.zoom;
    /** @type {?} */
    RunPresentationComponent.prototype.container;
    /** @type {?} */
    RunPresentationComponent.prototype.doc;
    /** @type {?} */
    RunPresentationComponent.prototype.isDesktop;
    /** @type {?} */
    RunPresentationComponent.prototype.lastCurrentPage;
    /**
     * @type {?}
     * @protected
     */
    RunPresentationComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    RunPresentationComponent.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    RunPresentationComponent.prototype._windowService;
    /**
     * @type {?}
     * @private
     */
    RunPresentationComponent.prototype._navigateService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const AR = {
    "Click": "انقر",
    "to open file": "لفتح الملف",
    "Or drop file here": "أو قم بإسقاط الملف هنا",
    "Browse files": "تصفح ملفات",
    "Zoom In": "تكبير",
    "Zoom Out": "تصغير",
    "First Page": "الصفحة الأولى",
    "Previous Page": "الصفحة السابقة",
    "Next Page": "الصفحة التالية",
    "Last Page": "آخر صفحة",
    "Rotate CCW": "تدوير CCW",
    "Rotate CW": "تدوير CW",
    "Download": "تحميل",
    "Print": "مطبعة",
    "Search": "بحث",
    "Run presentation": "تشغيل العرض التقديمي",
    "Present": "الحالي",
    "Stop": "قف",
    "Stop presenting": "توقف عن التقديم",
    "Resume presenting": "استئناف التقديم",
    "Pause presenting": "توقف مؤقتًا عن التقديم",
    "None": "لا أحد",
    "5 sec": "5 ثوانى",
    "10 sec": "10 ثوانى",
    "15 sec": "15 ثانية",
    "30 sec": "30 ثانية",
    "Thumbnails": "المصغرات"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CA = {
    "Click": "Feu clic a",
    "to open file": "per obrir el fitxer",
    "Or drop file here": "O deixeu anar el fitxer aquí",
    "Browse files": "Cercar fitxers",
    "Zoom In": "Apropar",
    "Zoom Out": "Disminuir el zoom",
    "First Page": "Primera pàgina",
    "Previous Page": "Pàgina anterior",
    "Next Page": "Pàgina següent",
    "Last Page": "Darrera pàgina",
    "Rotate CCW": "Gira CCW",
    "Rotate CW": "Gira CW",
    "Download": "descarregar",
    "Print": "Imprimir",
    "Search": "Cerca",
    "Run presentation": "Executa la presentació",
    "Present": "Present",
    "Stop": "Atura",
    "Stop presenting": "Deixa de presentar-te",
    "Resume presenting": "Reprèn la presentació",
    "Pause presenting": "Posa en pausa la presentació",
    "None": "Cap",
    "5 sec": "5 seg",
    "10 sec": "10 seg",
    "15 sec": "15 seg",
    "30 sec": "30 seg",
    "Thumbnails": "Miniatures"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CS = {
    "Click": "Klikněte",
    "to open file": "k otevření souboru",
    "Or drop file here": "Nebo sem přetáhněte soubor",
    "Browse files": "Procházet soubory",
    "Zoom In": "Přiblížit",
    "Zoom Out": "Oddálit",
    "First Page": "První strana",
    "Previous Page": "Předchozí stránka",
    "Next Page": "Další strana",
    "Last Page": "Poslední strana",
    "Rotate CCW": "Otočit CCW",
    "Rotate CW": "Otočit CW",
    "Download": "Stažení",
    "Print": "Tisk",
    "Search": "Vyhledávání",
    "Run presentation": "Spustit prezentaci",
    "Present": "Současnost, dárek",
    "Stop": "Stop",
    "Stop presenting": "Přestaňte prezentovat",
    "Resume presenting": "Obnovte prezentaci",
    "Pause presenting": "Pozastavit prezentaci",
    "None": "Žádný",
    "5 sec": "5 s",
    "10 sec": "10 s",
    "15 sec": "15 s",
    "30 sec": "30 s",
    "Thumbnails": "Miniatury"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DA = {
    "Click": "Klik på",
    "to open file": "for at åbne filen",
    "Or drop file here": "Eller slip filen her",
    "Browse files": "Gennemse filer",
    "Zoom In": "Zoom ind",
    "Zoom Out": "Zoome ud",
    "First Page": "Første side",
    "Previous Page": "Forrige side",
    "Next Page": "Næste side",
    "Last Page": "Sidste side",
    "Rotate CCW": "Drej CCW",
    "Rotate CW": "Drej CW",
    "Download": "Hent",
    "Print": "Print",
    "Search": "Søg",
    "Run presentation": "Kør præsentation",
    "Present": "Til stede",
    "Stop": "Hold op",
    "Stop presenting": "Stop med at præsentere",
    "Resume presenting": "Genoptag præsentationen",
    "Pause presenting": "Hold pause med præsentationen",
    "None": "Ingen",
    "5 sec": "5 sek",
    "10 sec": "10 sek",
    "15 sec": "15 sek",
    "30 sec": "30 sek",
    "Thumbnails": "Miniaturebilleder"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DE = {
    "Click": "Klicken",
    "to open file": "Datei öffnen",
    "Or drop file here": "Oder Datei hier ablegen",
    "Browse files": "Dateien durchsuchen",
    "Zoom In": "Hineinzoomen",
    "Zoom Out": "Rauszoomen",
    "First Page": "Erste Seite",
    "Previous Page": "Vorherige Seite",
    "Next Page": "Nächste Seite",
    "Last Page": "Letzte Seite",
    "Rotate CCW": "Gegen den Uhrzeigersinn drehen",
    "Rotate CW": "Im Uhrzeigersinn drehen",
    "Download": "Herunterladen",
    "Print": "Drucken",
    "Search": "Suche",
    "Run presentation": "Präsentation ausführen",
    "Present": "Gegenwärtig",
    "Stop": "Halt",
    "Stop presenting": "Hör auf zu präsentieren",
    "Resume presenting": "Präsentation fortsetzen",
    "Pause presenting": "Präsentation unterbrechen",
    "None": "Keiner",
    "5 sec": "5 Sek.",
    "10 sec": "10 Sek.",
    "15 sec": "15 Sek.",
    "30 sec": "30 Sekunden",
    "Thumbnails": "Miniaturansichten"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EL = {
    "Click": "Κάντε κλικ",
    "to open file": "για άνοιγμα αρχείου",
    "Or drop file here": "Or ρίξτε το αρχείο εδώ",
    "Browse files": "ΕΞΕΡΕΥΝΗΣΗ ΑΡΧΕΙΩΝ",
    "Zoom In": "Μεγέθυνση",
    "Zoom Out": "Σμίκρυνση",
    "First Page": "Πρώτη σελίδα",
    "Previous Page": "Προηγούμενη σελίδα",
    "Next Page": "Επόμενη σελίδα",
    "Last Page": "Τελευταία σελίδα",
    "Rotate CCW": "Περιστροφή CCW",
    "Rotate CW": "Περιστροφή CW",
    "Download": "Κατεβάστε",
    "Print": "Τυπώνω",
    "Search": "Αναζήτηση",
    "Run presentation": "Εκτέλεση παρουσίασης",
    "Present": "Παρόν",
    "Stop": "Να σταματήσει",
    "Stop presenting": "Σταματήστε να παρουσιάζετε",
    "Resume presenting": "Συνέχιση παρουσίασης",
    "Pause presenting": "Παύση παρουσίασης",
    "None": "Κανένας",
    "5 sec": "5 δευτ",
    "10 sec": "10 δευτ",
    "15 sec": "15 δευτ",
    "30 sec": "30 δευτ",
    "Thumbnails": "Μικρογραφίες"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EN = {
    "Click": "Click",
    "to open file": "to open file",
    "Or drop file here": "Or drop file here",
    "Browse files": "Browse files",
    "Zoom In": "Zoom In",
    "Zoom Out": "Zoom Out",
    "First Page": "First Page",
    "Previous Page": "Previous Page",
    "Next Page": "Next Page",
    "Last Page": "Last Page",
    "Rotate CCW": "Rotate CCW",
    "Rotate CW": "Rotate CW",
    "Download": "Download",
    "Print": "Print",
    "Search": "Search",
    "Run presentation": "Run presentation",
    "Present": "Present",
    "Stop": "Stop",
    "Stop presenting": "Stop presenting",
    "Resume presenting": "Resume presenting",
    "Pause presenting": "Pause presenting",
    "None": "None",
    "5 sec": "5 sec",
    "10 sec": "10 sec",
    "15 sec": "15 sec",
    "30 sec": "30 sec",
    "Thumbnails": "Thumbnails"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ES = {
    "Click": "Hacer clic",
    "to open file": "abrir archivo",
    "Or drop file here": "O suelte el archivo aquí",
    "Browse files": "Búsqueda de archivos",
    "Zoom In": "Acercarse",
    "Zoom Out": "Disminuir el zoom",
    "First Page": "Primera página",
    "Previous Page": "Pagina anterior",
    "Next Page": "Siguiente página",
    "Last Page": "Última página",
    "Rotate CCW": "Girar CCW",
    "Rotate CW": "Girar CW",
    "Download": "Descargar",
    "Print": "Impresión",
    "Search": "Buscar",
    "Run presentation": "Ejecutar presentación",
    "Present": "Regalo",
    "Stop": "Parada",
    "Stop presenting": "Deja de presentar",
    "Resume presenting": "Reanudar la presentación",
    "Pause presenting": "Pausar presentación",
    "None": "Ninguno",
    "5 sec": "5 segundos",
    "10 sec": "10 segundos",
    "15 sec": "15 segundos",
    "30 sec": "30 segundos",
    "Thumbnails": "Miniaturas"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const FIL = {
    "Click": "Mag-click",
    "to open file": "upang buksan ang file",
    "Or drop file here": "O ihulog ang file dito",
    "Browse files": "Mag-browse ng Mga file",
    "Zoom In": "Palakihin",
    "Zoom Out": "Mag-zoom Out",
    "First Page": "Unang pahina",
    "Previous Page": "Nakaraang pahina",
    "Next Page": "Susunod na pahina",
    "Last Page": "Huling pahina",
    "Rotate CCW": "Paikutin ang CCW",
    "Rotate CW": "Paikutin ang CW",
    "Download": "Mag-download",
    "Print": "I-print",
    "Search": "Maghanap",
    "Run presentation": "Patakbuhin ang pagtatanghal",
    "Present": "Kasalukuyan",
    "Stop": "Tigilan mo na",
    "Stop presenting": "Huwag nang iharap",
    "Resume presenting": "Ipagpatuloy ang pagtatanghal",
    "Pause presenting": "I-pause ang pagtatanghal",
    "None": "Wala",
    "5 sec": "5 sec",
    "10 sec": "10 sec",
    "15 sec": "15 sec",
    "30 sec": "30 sec",
    "Thumbnails": "Mga Thumbnail"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const FR = {
    "Click": "Cliquez sur",
    "to open file": "ouvrir le fichier",
    "Or drop file here": "Ou déposez le fichier ici",
    "Browse files": "Parcourir les fichiers",
    "Zoom In": "Agrandir",
    "Zoom Out": "Dézoomer",
    "First Page": "Première page",
    "Previous Page": "Page précédente",
    "Next Page": "Page suivante",
    "Last Page": "Dernière page",
    "Rotate CCW": "Rotation dans le sens antihoraire",
    "Rotate CW": "Rotation CW",
    "Download": "Télécharger",
    "Print": "Imprimer",
    "Search": "Chercher",
    "Run presentation": "Exécuter la présentation",
    "Present": "Présent",
    "Stop": "Arrêter",
    "Stop presenting": "Arrêter de présenter",
    "Resume presenting": "Reprendre la présentation",
    "Pause presenting": "Suspendre la présentation",
    "None": "Rien",
    "5 sec": "5 secondes",
    "10 sec": "10 secondes",
    "15 sec": "15 secondes",
    "30 sec": "30 secondes",
    "Thumbnails": "Vignettes"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const HE = {
    "Click": "נְקִישָׁה",
    "to open file": "לפתיחת הקובץ",
    "Or drop file here": "או שחרר קובץ כאן",
    "Browse files": "עיון בקבצים",
    "Zoom In": "לְהִתְמַקֵד",
    "Zoom Out": "להקטין את התצוגה",
    "First Page": "עמוד ראשון",
    "Previous Page": "עמוד קודם",
    "Next Page": "עמוד הבא",
    "Last Page": "עמוד אחרון",
    "Rotate CCW": "סובב CCW",
    "Rotate CW": "סובב את CW",
    "Download": "הורד",
    "Print": "הדפס",
    "Search": "לחפש",
    "Run presentation": "הפעל מצגת",
    "Present": "מתנה",
    "Stop": "תפסיק",
    "Stop presenting": "תפסיק להציג",
    "Resume presenting": "המשך להציג",
    "Pause presenting": "השהה את ההצגה",
    "None": "אף אחד",
    "5 sec": "5 שניות",
    "10 sec": "10 שניות",
    "15 sec": "15 שניות",
    "30 sec": "30 שניות",
    "Thumbnails": "תמונות ממוזערות"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const HI = {
    "Click": "क्लिक",
    "to open file": "फ़ाइल खोलने के लिए",
    "Or drop file here": "या फ़ाइल यहाँ छोड़ें",
    "Browse files": "फाइलों में खोजें",
    "Zoom In": "ज़ूम इन",
    "Zoom Out": "ज़ूम आउट",
    "First Page": "पहला पन्ना",
    "Previous Page": "पिछला पृष्ठ",
    "Next Page": "अगला पृष्ठ",
    "Last Page": "अंतिम पृष्ठ",
    "Rotate CCW": "सीसीडब्ल्यू घुमाएँ",
    "Rotate CW": "सीडब्ल्यू घुमाएँ",
    "Download": "डाउनलोड",
    "Print": "छाप",
    "Search": "खोज",
    "Run presentation": "प्रस्तुति चलाएं",
    "Present": "वर्तमान",
    "Stop": "विराम",
    "Stop presenting": "प्रस्तुत करना बंद करें",
    "Resume presenting": "प्रस्तुत करना फिर से शुरू करें",
    "Pause presenting": "प्रस्तुत करना रोकें",
    "None": "कोई नहीं",
    "5 sec": "5 सेकंड",
    "10 sec": "10 सेकंड",
    "15 sec": "१५ सेकंड",
    "30 sec": "३० सेकंड",
    "Thumbnails": "थंबनेल"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ID = {
    "Click": "Klik",
    "to open file": "untuk membuka file",
    "Or drop file here": "Atau letakkan file di sini",
    "Browse files": "Mencari berkas",
    "Zoom In": "Perbesar",
    "Zoom Out": "Perkecil",
    "First Page": "Halaman pertama",
    "Previous Page": "Halaman sebelumnya",
    "Next Page": "Halaman selanjutnya",
    "Last Page": "Halaman terakhir",
    "Rotate CCW": "Putar CCW",
    "Rotate CW": "Putar CW",
    "Download": "Unduh",
    "Print": "Mencetak",
    "Search": "Mencari",
    "Run presentation": "Jalankan presentasi",
    "Present": "Hadiah",
    "Stop": "Berhenti",
    "Stop presenting": "Berhenti menyajikan",
    "Resume presenting": "Lanjutkan presentasi",
    "Pause presenting": "Jeda presentasi",
    "None": "Tidak ada",
    "5 sec": "5 detik",
    "10 sec": "10 detik",
    "15 sec": "15 detik",
    "30 sec": "30 detik",
    "Thumbnails": "Gambar kecil"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const IT = {
    "Click": "Clic",
    "to open file": "per aprire il file",
    "Or drop file here": "Oppure trascina il file qui",
    "Browse files": "Sfoglia i file",
    "Zoom In": "Ingrandire",
    "Zoom Out": "Rimpicciolisci",
    "First Page": "Prima pagina",
    "Previous Page": "Pagina precedente",
    "Next Page": "Pagina successiva",
    "Last Page": "Ultima pagina",
    "Rotate CCW": "Ruota in senso antiorario",
    "Rotate CW": "Ruota in senso orario",
    "Download": "Scarica",
    "Print": "Stampa",
    "Search": "Ricerca",
    "Run presentation": "Esegui presentazione",
    "Present": "Regalo",
    "Stop": "Fermare",
    "Stop presenting": "Smettila di presentare",
    "Resume presenting": "Riprendi a presentare",
    "Pause presenting": "Metti in pausa la presentazione",
    "None": "Nessuno",
    "5 sec": "5 secondi",
    "10 sec": "10 secondi",
    "15 sec": "15 secondi",
    "30 sec": "30 secondi",
    "Thumbnails": "Miniature"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const JA = {
    "Click": "クリック",
    "to open file": "ファイルを開く",
    "Or drop file here": "または、ここにファイルをドロップします",
    "Browse files": "ブラウズファイル",
    "Zoom In": "ズームイン",
    "Zoom Out": "ズームアウトする",
    "First Page": "先頭ページ",
    "Previous Page": "前のページ",
    "Next Page": "次のページ",
    "Last Page": "最後のページ",
    "Rotate CCW": "CCWを回転させる",
    "Rotate CW": "CWを回転させる",
    "Download": "ダウンロード",
    "Print": "印刷",
    "Search": "検索",
    "Run presentation": "プレゼンテーションを実行する",
    "Present": "現在",
    "Stop": "やめる",
    "Stop presenting": "提示を停止します",
    "Resume presenting": "発表を再開する",
    "Pause presenting": "提示を一時停止",
    "None": "なし",
    "5 sec": "5秒",
    "10 sec": "10秒",
    "15 sec": "15秒",
    "30 sec": "30秒",
    "Thumbnails": "サムネイル"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const KK = {
    "Click": "Шертіңіз",
    "to open file": "файлды ашу үшін",
    "Or drop file here": "Немесе файлды осында тастаңыз",
    "Browse files": "Файлдарды шолу",
    "Zoom In": "Үлкейту",
    "Zoom Out": "Кішірейту",
    "First Page": "Бірінші бет",
    "Previous Page": "Алдыңғы бет",
    "Next Page": "Келесі бет",
    "Last Page": "Соңғы бет",
    "Rotate CCW": "CCW айналдыру",
    "Rotate CW": "CW айналдыру",
    "Download": "Жүктеу",
    "Print": "Басып шығару",
    "Search": "Іздеу",
    "Run presentation": "Презентацияны іске қосыңыз",
    "Present": "Ұсыну",
    "Stop": "Тоқта",
    "Stop presenting": "Көрсетуді тоқтатыңыз",
    "Resume presenting": "Ұсынуды жалғастыру",
    "Pause presenting": "Ұсынуды кідірту",
    "None": "Ешқайсысы",
    "5 sec": "5 сек",
    "10 sec": "10 сек",
    "15 sec": "15 сек",
    "30 sec": "30 сек",
    "Thumbnails": "Нобайлар"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const KO = {
    "Click": "딸깍 하는 소리",
    "to open file": "파일을 열다",
    "Or drop file here": "또는 여기에 파일을 드롭",
    "Browse files": "파일 찾아보기",
    "Zoom In": "확대",
    "Zoom Out": "축소",
    "First Page": "첫 페이지",
    "Previous Page": "이전 페이지",
    "Next Page": "다음 페이지",
    "Last Page": "마지막 페이지",
    "Rotate CCW": "시계 반대 방향으로 회전",
    "Rotate CW": "시계 방향으로 회전",
    "Download": "다운로드",
    "Print": "인쇄",
    "Search": "찾다",
    "Run presentation": "프레젠테이션 실행",
    "Present": "현재의",
    "Stop": "중지",
    "Stop presenting": "발표 중지",
    "Resume presenting": "프레젠테이션 재개",
    "Pause presenting": "발표 일시중지",
    "None": "없음",
    "5 sec": "5초",
    "10 sec": "10초",
    "15 sec": "15초",
    "30 sec": "30초",
    "Thumbnails": "썸네일"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MS = {
    "Click": "Klik",
    "to open file": "untuk membuka fail",
    "Or drop file here": "Atau jatuhkan fail di sini",
    "Browse files": "Semak imbas fail",
    "Zoom In": "Mengezum masuk",
    "Zoom Out": "Zum keluar",
    "First Page": "Muka surat pertama",
    "Previous Page": "Halaman sebelumnya",
    "Next Page": "Muka surat seterusnya",
    "Last Page": "Muka surat terakhir",
    "Rotate CCW": "Putar CCW",
    "Rotate CW": "Putar CW",
    "Download": "Muat turun",
    "Print": "Cetak",
    "Search": "Cari",
    "Run presentation": "Jalankan persembahan",
    "Present": "Hadir",
    "Stop": "Berhenti",
    "Stop presenting": "Berhenti membentangkan",
    "Resume presenting": "Sambung semula pembentangan",
    "Pause presenting": "Jeda pembentangan",
    "None": "Tiada",
    "5 sec": "5 saat",
    "10 sec": "10 saat",
    "15 sec": "15 saat",
    "30 sec": "30 saat",
    "Thumbnails": "Gambar kecil"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NL = {
    "Click": "Klik",
    "to open file": "bestand openen",
    "Or drop file here": "Of zet het bestand hier neer",
    "Browse files": "Bestanden doorbladeren",
    "Zoom In": "In zoomen",
    "Zoom Out": "Uitzoomen",
    "First Page": "Eerste pagina",
    "Previous Page": "Vorige pagina",
    "Next Page": "Volgende bladzijde",
    "Last Page": "Laatste pagina",
    "Rotate CCW": "Linksom draaien",
    "Rotate CW": "Draai CW",
    "Download": "Downloaden",
    "Print": "Afdrukken",
    "Search": "Zoeken",
    "Run presentation": "Presentatie uitvoeren",
    "Present": "Cadeau",
    "Stop": "Stop",
    "Stop presenting": "Stop met presenteren",
    "Resume presenting": "Presentatie hervatten",
    "Pause presenting": "Presentatie pauzeren",
    "None": "Geen",
    "5 sec": "5 seconden",
    "10 sec": "10 seconden",
    "15 sec": "15 seconden",
    "30 sec": "30 seconden",
    "Thumbnails": "Miniaturen"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PL = {
    "Click": "Kliknij",
    "to open file": "otworzyć plik",
    "Or drop file here": "Lub upuść plik tutaj",
    "Browse files": "Przeglądaj pliki",
    "Zoom In": "Zbliżenie",
    "Zoom Out": "Pomniejsz",
    "First Page": "Pierwsza strona",
    "Previous Page": "Poprzednia strona",
    "Next Page": "Następna strona",
    "Last Page": "Ostatnia strona",
    "Rotate CCW": "Obróć w lewo",
    "Rotate CW": "Obróć w prawo",
    "Download": "Pobierać",
    "Print": "Wydrukować",
    "Search": "Szukaj",
    "Run presentation": "Uruchom prezentację",
    "Present": "Obecny",
    "Stop": "Zatrzymać",
    "Stop presenting": "Zatrzymaj prezentację",
    "Resume presenting": "Wznów prezentację",
    "Pause presenting": "Wstrzymaj prezentację",
    "None": "Nic",
    "5 sec": "5 sekund",
    "10 sec": "10 sekund",
    "15 sec": "15 sekund",
    "30 sec": "30 sekund",
    "Thumbnails": "Miniatury"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PT = {
    "Click": "Clique",
    "to open file": "para abrir arquivo",
    "Or drop file here": "Ou solte o arquivo aqui",
    "Browse files": "Navegar nos arquivos",
    "Zoom In": "Mais Zoom",
    "Zoom Out": "Reduzir o zoom",
    "First Page": "Primeira página",
    "Previous Page": "Página anterior",
    "Next Page": "Próxima página",
    "Last Page": "Última página",
    "Rotate CCW": "Girar no sentido anti-horário",
    "Rotate CW": "Girar no sentido horário",
    "Download": "Download",
    "Print": "Imprimir",
    "Search": "Procurar",
    "Run presentation": "Executar apresentação",
    "Present": "Presente",
    "Stop": "Pare",
    "Stop presenting": "Pare de apresentar",
    "Resume presenting": "Retomar apresentação",
    "Pause presenting": "Pausar apresentação",
    "None": "Nenhum",
    "5 sec": "5 s",
    "10 sec": "10 s",
    "15 sec": "15 s",
    "30 sec": "30 s",
    "Thumbnails": "Miniaturas"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const RO = {
    "Click": "Clic",
    "to open file": "pentru a deschide fișierul",
    "Or drop file here": "Sau aruncați fișierul aici",
    "Browse files": "Cauta fisiere",
    "Zoom In": "Mareste",
    "Zoom Out": "A micsora",
    "First Page": "Prima pagina",
    "Previous Page": "Pagina precedentă",
    "Next Page": "Pagina următoare",
    "Last Page": "Ultima pagina",
    "Rotate CCW": "Rotiți CCW",
    "Rotate CW": "Rotiți CW",
    "Download": "Descarca",
    "Print": "Imprimare",
    "Search": "Căutare",
    "Run presentation": "Rulați prezentarea",
    "Present": "Prezent",
    "Stop": "Stop",
    "Stop presenting": "Nu mai prezenta",
    "Resume presenting": "Reluați prezentarea",
    "Pause presenting": "Pauză prezentare",
    "None": "Nici unul",
    "5 sec": "5 sec",
    "10 sec": "10 sec",
    "15 sec": "15 sec",
    "30 sec": "30 sec",
    "Thumbnails": "Miniaturi"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const RU = {
    "Click": "Нажмите",
    "to open file": "чтобы открыть файл",
    "Or drop file here": "Или перетащите файл сюда",
    "Browse files": "Просмотр файлов",
    "Zoom In": "Увеличить",
    "Zoom Out": "Уменьшить",
    "First Page": "Первая страница",
    "Previous Page": "Предыдущая страница",
    "Next Page": "Следующая Страница",
    "Last Page": "Последняя страница",
    "Rotate CCW": "Повернуть против часовой стрелки",
    "Rotate CW": "Повернуть по часовой стрелке",
    "Download": "Скачать",
    "Print": "Распечатать",
    "Search": "Поиск",
    "Run presentation": "Запустить презентацию",
    "Present": "Запустить презентацию",
    "Stop": "Стоп",
    "Stop presenting": "Остановить презентацию",
    "Resume presenting": "Возобновить презентацию",
    "Pause presenting": "Приостановить презентацию",
    "None": "-",
    "5 sec": "5 сек.",
    "10 sec": "10 сек.",
    "15 sec": "15 сек.",
    "30 sec": "30 сек.",
    "Thumbnails": "Миниатюры"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SV = {
    "Click": "Klick",
    "to open file": "för att öppna filen",
    "Or drop file here": "Eller släpp filen här",
    "Browse files": "Bläddra bland filer",
    "Zoom In": "Zooma in",
    "Zoom Out": "Zooma ut",
    "First Page": "Första sidan",
    "Previous Page": "Föregående sida",
    "Next Page": "Nästa sida",
    "Last Page": "Sista sidan",
    "Rotate CCW": "Vrid CCW",
    "Rotate CW": "Rotera CW",
    "Download": "Ladda ner",
    "Print": "Skriva ut",
    "Search": "Sök",
    "Run presentation": "Kör presentationen",
    "Present": "Närvarande",
    "Stop": "Sluta",
    "Stop presenting": "Sluta presentera",
    "Resume presenting": "Återuppta presentationen",
    "Pause presenting": "Pausa presentationen",
    "None": "Ingen",
    "5 sec": "5 sek",
    "10 sec": "10 sek",
    "15 sec": "15 sek",
    "30 sec": "30 sek",
    "Thumbnails": "Miniatyrer"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TH = {
    "Click": "คลิก",
    "to open file": "เพื่อเปิดไฟล์",
    "Or drop file here": "หรือวางไฟล์ที่นี่",
    "Browse files": "เรียกดูไฟล์",
    "Zoom In": "ขยายเข้า",
    "Zoom Out": "ซูมออก",
    "First Page": "หน้าแรก",
    "Previous Page": "หน้าก่อน",
    "Next Page": "หน้าต่อไป",
    "Last Page": "หน้าสุดท้าย",
    "Rotate CCW": "หมุนทวนเข็มนาฬิกา",
    "Rotate CW": "หมุน CW",
    "Download": "ดาวน์โหลด",
    "Print": "พิมพ์",
    "Search": "ค้นหา",
    "Run presentation": "เรียกใช้การนำเสนอ",
    "Present": "ปัจจุบัน",
    "Stop": "หยุด",
    "Stop presenting": "หยุดนำเสนอ",
    "Resume presenting": "นำเสนอต่อ",
    "Pause presenting": "หยุดการนำเสนอชั่วคราว",
    "None": "ไม่มี",
    "5 sec": "5 วินาที",
    "10 sec": "10 วินาที",
    "15 sec": "15 วินาที",
    "30 sec": "30 วินาที",
    "Thumbnails": "รูปขนาดย่อ"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TR = {
    "Click": "Tıklamak",
    "to open file": "dosyayı açmak için",
    "Or drop file here": "Veya dosyayı buraya bırakın",
    "Browse files": "Dosyalara göz atın",
    "Zoom In": "Yakınlaştır",
    "Zoom Out": "Uzaklaştırmak",
    "First Page": "İlk sayfa",
    "Previous Page": "Önceki sayfa",
    "Next Page": "Sonraki Sayfa",
    "Last Page": "Son Sayfa",
    "Rotate CCW": "CCW'yi döndür",
    "Rotate CW": "CW'yi döndür",
    "Download": "İndirmek",
    "Print": "Yazdır",
    "Search": "Arama",
    "Run presentation": "Sunuyu çalıştır",
    "Present": "Sunmak",
    "Stop": "Durmak",
    "Stop presenting": "Sunmayı durdur",
    "Resume presenting": "Sunuma devam et",
    "Pause presenting": "Sunumu duraklat",
    "None": "Hiçbiri",
    "5 sec": "5 saniye",
    "10 sec": "10 saniye",
    "15 sec": "15 saniye",
    "30 sec": "30 saniye",
    "Thumbnails": "küçük resimler"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const UK = {
    "Click": "Клікніть",
    "to open file": "щоб відкрити файл",
    "Or drop file here": "Або перетягніть файл у цю область",
    "Browse files": "Переглянути файли",
    "Zoom In": "Збільшити",
    "Zoom Out": "Зменшити",
    "First Page": "Перша сторінка",
    "Previous Page": "Попередня сторінка",
    "Next Page": "Наступна сторінка",
    "Last Page": "Остання сторінка",
    "Rotate CCW": "Повернути проти годинникової стрілки",
    "Rotate CW": "Повернути за годинниковою стрілкою",
    "Download": "Завантажити",
    "Print": "Друк",
    "Search": "Пошук",
    "Run presentation": "Запустити презентацію",
    "Present": "Запустити презентацію",
    "Stop": "Зупинити",
    "Stop presenting": "Зупинити презентацію",
    "Resume presenting": "Продовжити презентацію",
    "Pause presenting": "Призупинити презентацію",
    "None": "-",
    "5 sec": "5 секунд",
    "10 sec": "10 секунд",
    "15 sec": "15 секунд",
    "30 sec": "30 секунд",
    "Thumbnails": "Ескізи",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const VI = {
    "Click": "Nhấp chuột",
    "to open file": "để mở tệp",
    "Or drop file here": "Hoặc thả tệp vào đây",
    "Browse files": "Duyệt qua các tệp",
    "Zoom In": "Phóng to",
    "Zoom Out": "Thu nhỏ",
    "First Page": "Trang đầu tiên",
    "Previous Page": "Trang trước",
    "Next Page": "Trang tiếp theo",
    "Last Page": "Trang cuối",
    "Rotate CCW": "Xoay CCW",
    "Rotate CW": "Xoay CW",
    "Download": "Tải xuống",
    "Print": "In",
    "Search": "Tìm kiếm",
    "Run presentation": "Chạy bản trình bày",
    "Present": "Món quà",
    "Stop": "Ngừng lại",
    "Stop presenting": "Dừng trình bày",
    "Resume presenting": "Tiếp tục trình bày",
    "Pause presenting": "Tạm dừng trình bày",
    "None": "Không có",
    "5 sec": "5 giây",
    "10 sec": "10 giây",
    "15 sec": "15 giây",
    "30 sec": "30 giây",
    "Thumbnails": "Hình thu nhỏ"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ZHHANS = {
    "Click": "点击",
    "to open file": "打开文件",
    "Or drop file here": "或将文件拖放到此处",
    "Browse files": "浏览文件",
    "Zoom In": "放大",
    "Zoom Out": "缩小",
    "First Page": "第一页",
    "Previous Page": "上一页",
    "Next Page": "下一页",
    "Last Page": "最后一页",
    "Rotate CCW": "逆时针旋转",
    "Rotate CW": "顺时针旋转",
    "Download": "下载",
    "Print": "打印",
    "Search": "搜索",
    "Run presentation": "运行演示",
    "Present": "展示",
    "Stop": "停止",
    "Stop presenting": "停止展示",
    "Resume presenting": "简历展示",
    "Pause presenting": "暂停演示",
    "None": "没有任何",
    "5 sec": "5 秒",
    "10 sec": "10 秒",
    "15 sec": "15 秒",
    "30 sec": "30 秒",
    "Thumbnails": "缩略图"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ZHHANT = {
    "Click": "點擊",
    "to open file": "打開文件",
    "Or drop file here": "或將文件拖放到此處",
    "Browse files": "瀏覽文件",
    "Zoom In": "放大",
    "Zoom Out": "縮小",
    "First Page": "第一頁",
    "Previous Page": "上一頁",
    "Next Page": "下一頁",
    "Last Page": "最後一頁",
    "Rotate CCW": "逆時針旋轉",
    "Rotate CW": "順時針旋轉",
    "Download": "下載",
    "Print": "打印",
    "Search": "搜索",
    "Run presentation": "運行演示",
    "Present": "展示",
    "Stop": "停止",
    "Stop presenting": "停止展示",
    "Resume presenting": "簡歷展示",
    "Pause presenting": "暫停演示",
    "None": "沒有任何",
    "5 sec": "5 秒",
    "10 sec": "10 秒",
    "15 sec": "15 秒",
    "30 sec": "30 秒",
    "Thumbnails": "縮略圖"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewerTranslateLoader extends CommonTranslateLoader {
    /**
     * @param {?=} translations
     */
    constructor(translations = {}) {
        super({
            'ar': Object.assign({}, AR, translations['ar']),
            'ca': Object.assign({}, CA, translations['ca']),
            'cs': Object.assign({}, CS, translations['cs']),
            'da': Object.assign({}, DA, translations['da']),
            'de': Object.assign({}, DE, translations['de']),
            'el': Object.assign({}, EL, translations['el']),
            'en': Object.assign({}, EN, translations['en']),
            'es': Object.assign({}, ES, translations['es']),
            'fil': Object.assign({}, FIL, translations['fil']),
            'fr': Object.assign({}, FR, translations['fr']),
            'he': Object.assign({}, HE, translations['he']),
            'hi': Object.assign({}, HI, translations['hi']),
            'id': Object.assign({}, ID, translations['id']),
            'it': Object.assign({}, IT, translations['it']),
            'ja': Object.assign({}, JA, translations['ja']),
            'kk': Object.assign({}, KK, translations['kk']),
            'ko': Object.assign({}, KO, translations['ko']),
            'ms': Object.assign({}, MS, translations['ms']),
            'nl': Object.assign({}, NL, translations['nl']),
            'pl': Object.assign({}, PL, translations['pl']),
            'pt': Object.assign({}, PT, translations['pt']),
            'ro': Object.assign({}, RO, translations['ro']),
            'ru': Object.assign({}, RU, translations['ru']),
            'sv': Object.assign({}, SV, translations['sv']),
            'th': Object.assign({}, TH, translations['th']),
            'tr': Object.assign({}, TR, translations['tr']),
            'uk': Object.assign({}, UK, translations['uk']),
            'vi': Object.assign({}, VI, translations['vi']),
            'zh-hans': Object.assign({}, ZHHANS, translations['zh-hans']),
            'zh-hant': Object.assign({}, ZHHANT, translations['zh-hant']),
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} viewerConfigService
 * @return {?}
 */
function initializeApp(viewerConfigService) {
    /** @type {?} */
    const result = (/**
     * @return {?}
     */
    () => viewerConfigService.load());
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
// AoT requires an exported function for factories
/**
 * @return {?}
 */
function translateLoaderFactory() {
    return new ViewerTranslateLoader();
}
class ViewerModule {
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    static forRoot(apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: ViewerModule
        };
    }
}
ViewerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ViewerAppComponent,
                    ThumbnailsComponent,
                    RunPresentationComponent,
                    ExcelDocumentComponent,
                    ExcelPageComponent
                ],
                imports: [
                    BrowserModule,
                    CommonComponentsModule,
                    HttpClientModule,
                    FontAwesomeModule,
                    TranslateModule.forRoot({
                        loader: {
                            provide: TranslateLoader,
                            useFactory: translateLoaderFactory
                        }
                    })
                ],
                exports: [
                    ViewerAppComponent,
                    ThumbnailsComponent,
                    RunPresentationComponent,
                    ExcelDocumentComponent,
                    ExcelPageComponent,
                    CommonComponentsModule
                ],
                providers: [
                    ViewerService,
                    ConfigService,
                    ViewerConfigService,
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: ErrorInterceptorService,
                        multi: true
                    },
                    {
                        provide: APP_INITIALIZER,
                        useFactory: initializeApp,
                        deps: [ViewerConfigService], multi: true
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

export { ViewerAppComponent, ViewerConfigService, ViewerModule, ViewerService, ViewerTranslateLoader, initializeApp, setupLoadingInterceptor, translateLoaderFactory, ThumbnailsComponent as ɵa, RunPresentationComponent as ɵb, ExcelDocumentComponent as ɵc, ExcelPageComponent as ɵd, ExcelPageService as ɵe };
//# sourceMappingURL=groupdocs.examples.angular-viewer.js.map
