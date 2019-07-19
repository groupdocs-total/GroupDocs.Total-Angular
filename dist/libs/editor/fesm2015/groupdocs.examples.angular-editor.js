import { BrowserModule } from '@angular/platform-browser';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, EventEmitter, Input, Output, NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Api, ConfigService, CommonModals, Formatting, FormattingService, FileDescription, PageModel, FileCredentials, SaveFile, ModalService, UploadFilesService, PasswordService, WindowService, BackFormattingService, OnCloseService, SelectionService, EditHtmlService, RenderPrintService, LoadingMaskService, ExceptionMessageService, LoadingMaskInterceptorService, CommonComponentsModule, ErrorInterceptorService } from '@groupdocs.examples.angular/common-components';
import { BehaviorSubject } from 'rxjs';
import * as jquery from 'jquery';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EditorService {
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
        return this._http.post(this._config.getEditorApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
    }
    /**
     * @return {?}
     */
    getFormats() {
        return this._http.get(this._config.getEditorApiEndpoint() + Api.LOAD_FORMATS, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadFile(credentials) {
        return this._http.post(this._config.getEditorApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
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
        return this._http.post(this._config.getEditorApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    save(file) {
        return this._http.post(this._config.getEditorApiEndpoint() + Api.SAVE_FILE, file, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    getDownloadUrl(credentials) {
        return this._config.getEditorApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
    }
}
EditorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EditorService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ EditorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function EditorService_Factory() { return new EditorService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: EditorService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EditorConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/** @type {?} */
const environment = {
    production: false,
    name: 'dev',
    apiUrl: 'http://localhost:8080',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EditorConfigService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._editorConfig = new BehaviorSubject(new EditorConfig());
        this._updatedConfig = this._editorConfig.asObservable();
        _config.apiEndpoint = environment.apiUrl;
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
            const configEndpoint = this._config.getConfigEndpoint(Api.EDITOR_APP);
            this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                /** @type {?} */
                const editorConfig = (/** @type {?} */ (response));
                this._editorConfig.next(editorConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                reject(`Could not load editor config: ${JSON.stringify(response)}`);
            }));
        }));
    }
}
EditorConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EditorConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ EditorConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function EditorConfigService_Factory() { return new EditorConfigService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: EditorConfigService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const $ = jquery;
class EditorAppComponent {
    /**
     * @param {?} _editorService
     * @param {?} _modalService
     * @param {?} configService
     * @param {?} uploadFilesService
     * @param {?} passwordService
     * @param {?} _windowService
     * @param {?} _formattingService
     * @param {?} _backFormattingService
     * @param {?} _onCloseService
     * @param {?} _selectionService
     * @param {?} _htmlService
     * @param {?} _renderPrintService
     * @param {?} _loadingMaskService
     */
    constructor(_editorService, _modalService, configService, uploadFilesService, passwordService, _windowService, _formattingService, _backFormattingService, _onCloseService, _selectionService, _htmlService, _renderPrintService, _loadingMaskService) {
        this._editorService = _editorService;
        this._modalService = _modalService;
        this._windowService = _windowService;
        this._formattingService = _formattingService;
        this._backFormattingService = _backFormattingService;
        this._onCloseService = _onCloseService;
        this._selectionService = _selectionService;
        this._htmlService = _htmlService;
        this._renderPrintService = _renderPrintService;
        this._loadingMaskService = _loadingMaskService;
        this.title = 'editor';
        this.files = [];
        this.formatDisabled = !this.file;
        this.downloadDisabled = true;
        this.browseFilesModal = CommonModals.BrowseFiles;
        this.formatting = Formatting.DEFAULT;
        this.fontSizeOptions = FormattingService.getFontSizeOptions();
        this.fontOptions = FormattingService.getFontOptions();
        this.bgColorPickerShow = false;
        this.colorPickerShow = false;
        this.active = false;
        this.isIE = false;
        this.isIE = /*@cc_on!@*/  !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
        configService.updatedConfig.subscribe((/**
         * @param {?} editorConfig
         * @return {?}
         */
        (editorConfig) => {
            this.editorConfig = editorConfig;
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
                    this._editorService.upload(uploads.item(i), '', this.editorConfig.rewrite).subscribe((/**
                     * @return {?}
                     */
                    () => {
                        this.selectDir('');
                    }));
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
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.isDesktop = _windowService.isDesktop();
        }));
        this._backFormattingService.formatBoldChange.subscribe((/**
         * @param {?} bold
         * @return {?}
         */
        (bold) => {
            this.formatting.bold = bold;
        }));
        this._backFormattingService.formatItalicChange.subscribe((/**
         * @param {?} italic
         * @return {?}
         */
        (italic) => {
            this.formatting.italic = italic;
        }));
        this._backFormattingService.formatUnderlineChange.subscribe((/**
         * @param {?} underline
         * @return {?}
         */
        (underline) => {
            this.formatting.underline = underline;
        }));
        this._backFormattingService.formatColorChange.subscribe((/**
         * @param {?} color
         * @return {?}
         */
        (color) => {
            this.formatting.color = color;
        }));
        this._backFormattingService.formatBgColorChange.subscribe((/**
         * @param {?} bgcolor
         * @return {?}
         */
        (bgcolor) => {
            this.formatting.bgColor = bgcolor;
        }));
        this._backFormattingService.formatFontSizeChange.subscribe((/**
         * @param {?} fontSize
         * @return {?}
         */
        (fontSize) => {
            this.formatting.fontSize = fontSize;
        }));
        this._backFormattingService.formatFontChange.subscribe((/**
         * @param {?} font
         * @return {?}
         */
        (font) => {
            this.formatting.font = font;
        }));
        this._backFormattingService.formatStrikeoutChange.subscribe((/**
         * @param {?} strikeout
         * @return {?}
         */
        (strikeout) => {
            this.formatting.strikeout = strikeout;
        }));
        this._backFormattingService.formatAlignChange.subscribe((/**
         * @param {?} align
         * @return {?}
         */
        (align) => {
            this.formatting.align = align;
        }));
        this._backFormattingService.formatListChange.subscribe((/**
         * @param {?} list
         * @return {?}
         */
        (list) => {
            this.formatting.list = list;
        }));
        this._formattingService.formatBoldChange.subscribe((/**
         * @param {?} bold
         * @return {?}
         */
        (bold) => {
            this.formatting.bold = bold;
        }));
        this._formattingService.formatItalicChange.subscribe((/**
         * @param {?} italic
         * @return {?}
         */
        (italic) => {
            this.formatting.italic = italic;
        }));
        this._formattingService.formatUnderlineChange.subscribe((/**
         * @param {?} underline
         * @return {?}
         */
        (underline) => {
            this.formatting.underline = underline;
        }));
        this._formattingService.formatColorChange.subscribe((/**
         * @param {?} color
         * @return {?}
         */
        (color) => {
            this.formatting.color = color;
        }));
        this._formattingService.formatBgColorChange.subscribe((/**
         * @param {?} bgcolor
         * @return {?}
         */
        (bgcolor) => {
            this.formatting.bgColor = bgcolor;
        }));
        this._formattingService.formatFontSizeChange.subscribe((/**
         * @param {?} fontSize
         * @return {?}
         */
        (fontSize) => {
            this.formatting.fontSize = fontSize;
        }));
        this._formattingService.formatFontChange.subscribe((/**
         * @param {?} font
         * @return {?}
         */
        (font) => {
            this.formatting.font = font;
        }));
        this._formattingService.formatStrikeoutChange.subscribe((/**
         * @param {?} strikeout
         * @return {?}
         */
        (strikeout) => {
            this.formatting.strikeout = strikeout;
        }));
        this._formattingService.formatAlignChange.subscribe((/**
         * @param {?} align
         * @return {?}
         */
        (align) => {
            this.formatting.align = align;
        }));
        this._formattingService.formatListChange.subscribe((/**
         * @param {?} list
         * @return {?}
         */
        (list) => {
            this.formatting.list = list;
        }));
        this._htmlService.htmlContent.subscribe((/**
         * @param {?} text
         * @return {?}
         */
        (text) => {
            if (this.file && this.file.pages) {
                this.textBackup = text;
            }
        }));
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
    }
    /**
     * @return {?}
     */
    get rewriteConfig() {
        return this.editorConfig ? this.editorConfig.rewrite : true;
    }
    /**
     * @return {?}
     */
    get downloadConfig() {
        return this.editorConfig ? this.editorConfig.download : true;
    }
    /**
     * @return {?}
     */
    get uploadConfig() {
        return this.editorConfig ? this.editorConfig.upload : true;
    }
    /**
     * @return {?}
     */
    get printConfig() {
        return this.editorConfig ? this.editorConfig.print : true;
    }
    /**
     * @return {?}
     */
    get browseConfig() {
        return this.editorConfig ? this.editorConfig.browse : true;
    }
    /**
     * @return {?}
     */
    get enableRightClickConfig() {
        return this.editorConfig ? this.editorConfig.enableRightClick : true;
    }
    /**
     * @return {?}
     */
    get pageSelectorConfig() {
        return this.editorConfig ? this.editorConfig.pageSelector : true;
    }
    /**
     * @return {?}
     */
    get createNewFileConfig() {
        return this.editorConfig ? this.editorConfig.createNewFile : true;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    openModal(id) {
        if (this.file) {
            this.file.pages[0].editable = false;
        }
        this._modalService.open(id);
    }
    /**
     * @return {?}
     */
    openSave() {
        if (!this.formatDisabled) {
            this.openModal(CommonModals.CreateDocument);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectDir($event) {
        this._editorService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        (files) => this.files = files || []));
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
     * @param {?} $event
     * @return {?}
     */
    onRightClick($event) {
        return this.enableRightClickConfig;
    }
    /**
     * @return {?}
     */
    createFile() {
        this.file = new FileDescription();
        /** @type {?} */
        const page = new PageModel;
        page.width = 595;
        page.height = 842;
        page.data = '<!DOCTYPE HTML><html><head><meta http-equiv="content-type" content="text/html; charset=utf-8"></head><body></body></html>';
        page.number = 1;
        page.editable = true;
        this.file.pages = [];
        this.file.pages.push(page);
        this.file.guid = "new document.docx";
        this.credentials = new FileCredentials("new document.docx", "");
        this.formatDisabled = false;
        this.downloadDisabled = true;
    }
    /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @return {?}
     */
    selectFile($event, password, modalId) {
        this.credentials = new FileCredentials($event, password);
        this._editorService.loadFile(this.credentials).subscribe((/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
            this.loadFile(file);
            /** @type {?} */
            const isIE = /*@cc_on!@*/  !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
            if (isIE) {
                /** @type {?} */
                const observer = new MutationObserver((/**
                 * @param {?} mutations
                 * @return {?}
                 */
                function (mutations) {
                    if ($(".documentMainContent").length > 0) {
                        $(".documentMainContent").attr("contentEditable", "true");
                        observer.disconnect();
                    }
                }));
                observer.observe(document, { attributes: false, childList: true, characterData: false, subtree: true });
            }
        }));
        this.clearData();
        this._modalService.close(modalId);
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    loadFile(file) {
        this.file = file;
        if (this.file && this.file.pages[0]) {
            this.file.pages[0].editable = true;
            this.file.pages[0].width = 595;
            this.file.pages[0].height = 842;
            this.textBackup = this.file.pages[0].data;
        }
        this.formatDisabled = !this.file;
        this.downloadDisabled = false;
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
     * @param {?} $event
     * @return {?}
     */
    upload($event) {
        this._editorService.upload(null, $event, this.rewriteConfig).subscribe((/**
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
    selectFontSize($event) {
        if (this.formatDisabled)
            return;
        $(".gd-wrapper").off("keyup");
        if (this.isIE) {
            this._selectionService.restoreSelection();
            this._selectionService.captureSelection();
        }
        this._formattingService.changeFormatFontSize($event);
        $(".gd-wrapper").on("keyup", (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const fontElements = document.getElementsByTagName("font");
            for (let i = 0, len = fontElements.length; i < len; ++i) {
                if (fontElements[i].getAttribute('size') === "7") {
                    fontElements[i].removeAttribute("size");
                    fontElements[i].style.fontSize = $event + "px";
                }
            }
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectFont($event) {
        if (this.formatDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        if (this.isIE) {
            this._selectionService.restoreSelection();
            this._selectionService.captureSelection();
        }
        this._formattingService.changeFormatFont($event);
    }
    /**
     * @param {?} bg
     * @return {?}
     */
    toggleColorPicker(bg) {
        if (this.formatDisabled) {
            return;
        }
        if (this.isIE) {
            this._selectionService.restoreSelection();
            this._selectionService.captureSelection();
        }
        if (bg) {
            this.bgColorPickerShow = !this.bgColorPickerShow;
            this.colorPickerShow = false;
        }
        else {
            this.colorPickerShow = !this.colorPickerShow;
            this.bgColorPickerShow = false;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectColor($event) {
        if (this.isIE) {
            this._selectionService.restoreSelection();
            this._selectionService.captureSelection();
        }
        if (this.bgColorPickerShow) {
            this.bgColorPickerShow = false;
            this._formattingService.changeFormatBgColor($event);
        }
        else {
            this.colorPickerShow = false;
            this._formattingService.changeFormatColor($event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleBold(event) {
        if (this.formatDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        if (this.isIE) {
            this._selectionService.restoreSelection();
            this._selectionService.captureSelection();
        }
        this._formattingService.changeFormatBold(!this.formatting.bold);
    }
    /**
     * @return {?}
     */
    toggleUndo() {
        if (this.formatDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        this._formattingService.Undo();
    }
    /**
     * @return {?}
     */
    toggleRedo() {
        if (this.formatDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        this._formattingService.Redo();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleItalic(event) {
        if (this.formatDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        if (this.isIE) {
            this._selectionService.restoreSelection();
            this._selectionService.captureSelection();
        }
        this._formattingService.changeFormatItalic(!this.formatting.italic);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleUnderline(event) {
        if (this.formatDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        if (this.isIE) {
            this._selectionService.restoreSelection();
            this._selectionService.captureSelection();
        }
        this._formattingService.changeFormatUnderline(!this.formatting.underline);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    hideAll($event) {
        if (($event.target.parentElement && $event.target.parentElement.attributes['name'] &&
            $event.target.parentElement.attributes['name'].value === 'button') ||
            ($event.target.parentElement.parentElement &&
                $event.target.parentElement.parentElement.attributes['name'] &&
                $event.target.parentElement.parentElement.attributes['name'].value === 'button')) {
            this._onCloseService.close(true);
            return;
        }
        this.colorPickerShow = false;
        this.bgColorPickerShow = false;
        this._onCloseService.close(true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleStrikeout(event) {
        if (this.formatDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        if (this.isIE) {
            this._selectionService.restoreSelection();
            this._selectionService.captureSelection();
        }
        this._formattingService.changeFormatStrikeout(!this.formatting.strikeout);
    }
    /**
     * @param {?} align
     * @return {?}
     */
    toggleAlign(align) {
        if (this.formatDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        if (align === this.formatting.align) {
            align = 'full';
        }
        this._formattingService.changeFormatAlign(align);
        this.formatting.align = align;
    }
    /**
     * @param {?} list
     * @return {?}
     */
    toggleList(list) {
        if (this.formatDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        if (list === this.formatting.list) {
            this.formatting.list = "";
        }
        else {
            this.formatting.list = list;
        }
        if (this.isIE) {
            this._selectionService.restoreSelection();
            this._selectionService.captureSelection();
        }
        this._formattingService.changeFormatList(list);
    }
    /**
     * @return {?}
     */
    downloadFile() {
        if (this.downloadDisabled)
            return;
        window.location.assign(this._editorService.getDownloadUrl(this.credentials));
    }
    /**
     * @return {?}
     */
    save() {
        if (this.formatDisabled)
            return;
        if (this.credentials) {
            if (this.file.guid === "new document.docx") {
                this.openModal(CommonModals.CreateDocument);
            }
            else {
                this.saveFile(this.credentials);
            }
        }
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    saveFile(credentials) {
        if (!this.file || !this.file.pages)
            return;
        /** @type {?} */
        const saveFile = new SaveFile(credentials.guid, credentials.password, this.textBackup);
        this._editorService.save(saveFile).subscribe((/**
         * @param {?} loadFile
         * @return {?}
         */
        (loadFile) => {
            this.loadFile(loadFile);
            this.credentials = new FileCredentials(loadFile.guid, credentials.password);
            this._modalService.open(CommonModals.OperationSuccess);
        }));
    }
    /**
     * @return {?}
     */
    printFile() {
        if (this.formatDisabled)
            return;
        if (this.file.pages) {
            /** @type {?} */
            const page = new PageModel;
            page.width = 595;
            page.height = 842;
            // using of the replace is required to fix issue with padding for intire print content
            page.data = this.textBackup.replace('</style>', 'body { padding: 96px; } </style>');
            /** @type {?} */
            const printHtml = [page];
            this._renderPrintService.changePages(printHtml);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onCloseModal($event) {
        if (this.file && $event) {
            if (this.isIE) {
                $(".documentMainContent").attr("contentEditable", "true");
            }
            else {
                this.file.pages[0].editable = true;
            }
            this._selectionService.restoreSelection();
        }
    }
}
EditorAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-editor-angular-root',
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\" (click)=\"hideAll($event)\">\n  <gd-tabbed-toolbars>\n    <gd-tabs>\n      <gd-tab tabTitle=\"File\" [icon]=\"'folder-open'\">\n        <gd-top-toolbar class=\"toolbar-panel\" [leftOffset]=\"false\">\n          <gd-button [icon]=\"'file'\" [tooltip]=\"'Create document'\" (click)=\"createFile()\"\n                     *ngIf=\"createNewFileConfig\"></gd-button>\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                     *ngIf=\"browseConfig\"></gd-button>\n          <gd-button [disabled]=\"downloadDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                     (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                     *ngIf=\"printConfig\" ></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save File'\" (click)=\"save()\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'pencil-alt'\" [iconClass]=\"'save-as-button-icon'\" [tooltip]=\"'Save File As'\" (click)=\"openSave()\">\n            <fa-icon [icon]=\"['fas','save']\" class=\"save-button\" size=\"xs\"></fa-icon>\n          </gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab tabTitle=\"Formatting\" [icon]=\"'edit'\">\n        <gd-top-toolbar class=\"toolbar-panel\" [leftOffset]=\"false\">\n\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Undo'\"\n                     (click)=\"toggleUndo()\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Redo'\"\n                     (click)=\"toggleRedo()\"></gd-button>\n          <gd-select class=\"format-select\" [disabled]=\"formatDisabled\" [options]=\"fontOptions\"\n                     (selected)=\"selectFont($event)\"\n                     [showSelected]=\"formatting.font\"></gd-select>\n          <gd-select class=\"format-select\" [disabled]=\"formatDisabled\" [options]=\"fontSizeOptions\"\n                     (selected)=\"selectFontSize($event)\"\n                     [showSelected]=\"formatting.fontSize + 'px'\"></gd-select>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'bold'\" [tooltip]=\"'Bold'\"\n                     (click)=\"toggleBold($event)\" [toggle]=\"formatting.bold\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'italic'\" [tooltip]=\"'Italic'\"\n                     (click)=\"toggleItalic($event)\" [toggle]=\"formatting.italic\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'underline'\" [tooltip]=\"'Underline'\"\n                     (click)=\"toggleUnderline($event)\" [toggle]=\"formatting.underline\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'strikethrough'\" [tooltip]=\"'Strike out'\"\n                     (click)=\"toggleStrikeout($event)\" [toggle]=\"formatting.strikeout\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-center'\" [tooltip]=\"'Align center'\"\n                     (click)=\"toggleAlign('center')\" [toggle]=\"formatting.align == 'center' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-justify'\" [tooltip]=\"'Align full'\"\n                     (click)=\"toggleAlign('full')\" [toggle]=\"formatting.align == 'full' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-right'\" [tooltip]=\"'Align right'\"\n                     (click)=\"toggleAlign('right')\" [toggle]=\"formatting.align == 'right' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-left'\" [tooltip]=\"'Align left'\"\n                     (click)=\"toggleAlign('left')\" [toggle]=\"formatting.align == 'left' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ul'\" [tooltip]=\"'Add Unordered List'\"\n                     (click)=\"toggleList('unordered')\" [toggle]=\"formatting.list == 'unordered' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ol'\" [tooltip]=\"'Add Ordered List'\"\n                     (click)=\"toggleList('ordered')\" [toggle]=\"formatting.list == 'ordered' ? true : false\"></gd-button>\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'fill'\" [tooltip]=\"'Background color'\"\n                     (click)=\"toggleColorPicker(true)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.bgColor\"></div>\n          </gd-button>\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'font'\" [tooltip]=\"'Color'\" (click)=\"toggleColorPicker(false)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.color\"></div>\n          </gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n    </gd-tabs>\n  </gd-tabbed-toolbars>\n  <gd-color-picker *ngIf=\"bgColorPickerShow || colorPickerShow\"\n                   [className]=\"'palette ' + (bgColorPickerShow ? 'background-color-picker' : 'color-picker')\"\n                   (selectedColor)=\"selectColor($event)\"></gd-color-picker>\n  <div class=\"doc-panel\" *ngIf=\"file\">\n\n    <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"true\" [htmlMode]=\"true\"\n                 [preloadPageCount]=\"0\" gdFormatting gdRenderPrint>\n\n    </gd-document>\n\n  </div>\n  <gd-init-state [icon]=\"'pen'\" [text]=\"''\" *ngIf=\"!file\"></gd-init-state>\n  <gd-browse-files-modal\n    (closing)=\"onCloseModal($event)\"\n    (urlForUpload)=\"upload($event)\"\n    [files]=\"files\"\n    (selectedDirectory)=\"selectDir($event)\"\n    (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n    [uploadConfig]=\"uploadConfig\"\n  ></gd-browse-files-modal>\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-create-document-modal (closing)=\"onCloseModal($event)\" [file]=\"credentials\" (savingFile)=\"saveFile($event)\"></gd-create-document-modal>\n  <gd-success-modal></gd-success-modal>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.current-page-number{margin:0 15px;font-size:14px;color:#959da5}*{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:text}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:flex;height:inherit}.gd-document{width:100%;height:calc(100% - 90px)}.top-panel{display:flex;align-items:center;width:100%}.toolbar-panel{width:100%}/deep/ .gd-wrapper{padding:96px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;outline:0}/deep/ .dropdown-menu{min-width:unset!important}.format-select{margin:0 15px}.palette{position:absolute;top:90px;z-index:100}.background-color-picker{left:700px}.color-picker{left:750px}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}/deep/ .gd-editor-buttons .button .tooltip{margin-top:45px;margin-left:-36px}/deep/ .gd-edit.active{background-color:#7e8991;border-radius:5px}/deep/ .gd-edit.active i{color:#fff}/deep/ .page{width:800px}/deep/ .save-as-button-icon{font-size:11px;left:22px!important;top:13px!important}.save-button{position:absolute;top:-5px;left:21px}"]
            }] }
];
/** @nocollapse */
EditorAppComponent.ctorParameters = () => [
    { type: EditorService },
    { type: ModalService },
    { type: EditorConfigService },
    { type: UploadFilesService },
    { type: PasswordService },
    { type: WindowService },
    { type: FormattingService },
    { type: BackFormattingService },
    { type: OnCloseService },
    { type: SelectionService },
    { type: EditHtmlService },
    { type: RenderPrintService },
    { type: LoadingMaskService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CreateDocumentModalComponent {
    /**
     * @param {?} _editorService
     * @param {?} _modalService
     * @param {?} _excMessageService
     */
    constructor(_editorService, _modalService, _excMessageService) {
        this._editorService = _editorService;
        this._modalService = _modalService;
        this._excMessageService = _excMessageService;
        this.savingFile = new EventEmitter();
        this.closing = new EventEmitter();
        this.FILE_NAME_REGEX = /^.*[\\\/]/;
    }
    /**
     * @return {?}
     */
    get format() {
        return this._format;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loadFormats();
    }
    /**
     * @return {?}
     */
    loadFormats() {
        this._editorService.getFormats().subscribe((/**
         * @param {?} formats
         * @return {?}
         */
        (formats) => {
            this.formats = this.formatOptions(formats);
            this._format = "Docx";
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectFormat($event) {
        this._format = $event;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    createFormatOption(val) {
        return { value: val, name: val };
    }
    /**
     * @param {?} formats
     * @return {?}
     */
    formatOptions(formats) {
        /** @type {?} */
        const allTypes = new Array();
        for (let i = 0; i < formats.length; i++) {
            allTypes.push(this.createFormatOption(formats[i]));
        }
        return allTypes;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    save(name) {
        /** @type {?} */
        let fileName = "";
        if (name && name !== "") {
            fileName = name + "." + this._format;
        }
        else if (!this.file) {
            this._modalService.open(CommonModals.ErrorMessage);
            this._excMessageService.changeMessage("File name is empty");
        }
        this._modalService.close(CommonModals.CreateDocument);
        /** @type {?} */
        const guid = fileName !== "" ? fileName : this.file.guid;
        /** @type {?} */
        const password = this.file ? this.file.password : '';
        this.savingFile.emit(new FileCredentials(guid, password));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    refresh($event) {
        if (!$event) {
            this.closing.emit(true);
        }
    }
}
CreateDocumentModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-create-document-modal',
                template: "<gd-modal id=\"gd-create-document\" [title]=\"'Save document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-create-document-section\" class=\"tab-slider-body\">\n    <div class=\"inner-addon left-addon btn gd-create-wrap\" id=\"gd-create-wrap\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter file name without extension\" [value]=\"!file ? '' : file.guid.replace(FILE_NAME_REGEX, '').split('.')[0]\" #name autofocus/>\n      <span>\n        Select file type\n      </span>\n      <gd-select [disabled]=\"false\" [options]=\"formats\" (selected)=\"selectFormat($event)\" [showSelected]=\"format\" class=\"gd-select-format\"></gd-select>\n      <button class=\"btn btn-primary gd-create-submit\" (click)=\"save(name.value)\">Save</button>\n    </div>\n  </section>\n</gd-modal>\n",
                styles: [".gd-create-wrap{display:flex;padding:20px}.gd-create-wrap div{display:flex}.gd-create-wrap input{width:204px}span{margin-left:15px;margin-right:15px}/deep/ .gd-select-format .dropdown-menu{height:150px;overflow:hidden;overflow-y:auto;top:89px!important;left:356px;min-width:0!important;width:90px}.gd-create-submit{margin-left:10px;width:49px;height:24px;color:#fff;background-color:#25c2d4;border:0}"]
            }] }
];
/** @nocollapse */
CreateDocumentModalComponent.ctorParameters = () => [
    { type: EditorService },
    { type: ModalService },
    { type: ExceptionMessageService }
];
CreateDocumentModalComponent.propDecorators = {
    file: [{ type: Input }],
    savingFile: [{ type: Output }],
    closing: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} editorConfigService
 * @return {?}
 */
function initializeApp(editorConfigService) {
    /** @type {?} */
    const result = (/**
     * @return {?}
     */
    () => editorConfigService.load());
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
class EditorModule {
    constructor() {
        library.add(fas, far);
    }
}
EditorModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EditorAppComponent, CreateDocumentModalComponent],
                imports: [
                    BrowserModule,
                    CommonComponentsModule,
                    HttpClientModule,
                    FontAwesomeModule
                ],
                exports: [
                    CreateDocumentModalComponent,
                    EditorAppComponent,
                    CommonComponentsModule
                ],
                providers: [
                    EditorService,
                    ConfigService,
                    EditorConfigService,
                    {
                        provide: APP_INITIALIZER,
                        useFactory: initializeApp,
                        deps: [EditorConfigService],
                        multi: true
                    },
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: ErrorInterceptorService,
                        multi: true
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
/** @nocollapse */
EditorModule.ctorParameters = () => [];

export { CreateDocumentModalComponent, EditorAppComponent, EditorConfig, EditorConfigService, EditorModule, EditorService, initializeApp, setupLoadingInterceptor };
//# sourceMappingURL=groupdocs.examples.angular-editor.js.map
