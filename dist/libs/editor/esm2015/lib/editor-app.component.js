/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { EditorService } from "./editor.service";
import { FileDescription, ModalService, UploadFilesService, PasswordService, FileCredentials, CommonModals, PageModel, FormattingService, Formatting, BackFormattingService, OnCloseService, SaveFile, SelectionService, EditHtmlService, RenderPrintService, WindowService, LoadingMaskService } from '@groupdocs.examples.angular/common-components';
import { EditorConfigService } from "./editor-config.service";
import * as jquery from 'jquery';
/** @type {?} */
const $ = jquery;
export class EditorAppComponent {
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
        this.formatting = Formatting.default();
        this.fontSizeOptions = FormattingService.getFontSizeOptions();
        this.fontOptions = FormattingService.getFontOptions();
        this.bgColorPickerShow = false;
        this.colorPickerShow = false;
        this.active = false;
        this.isIE = false;
        this.selectFontShow = false;
        this.selectFontSizeShow = false;
        this.newFile = false;
        this.isIE = /*@cc_on!@*/ false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
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
                     * @param {?} obj
                     * @return {?}
                     */
                    (obj) => {
                        this.fileWasDropped ? this.selectFile(obj.guid, '', '') : this.selectDir('');
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
    ngOnInit() {
        if (this.editorConfig.defaultDocument !== "") {
            this.isLoading = true;
            this.selectFile(this.editorConfig.defaultDocument, "", "");
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
        this.newFile = true;
        this.file = new FileDescription();
        /** @type {?} */
        const page = new PageModel;
        page.width = 595;
        page.height = 842;
        page.data = '<!DOCTYPE HTML><html><head></head><body></body></html>';
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
            const isIE = /*@cc_on!@*/ false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
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
     * @param {?} $event
     * @return {?}
     */
    fileDropped($event) {
        this.fileWasDropped = $event;
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
        this._formattingService.changeFormatFontSize($event.value);
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
        this._formattingService.changeFormatFont($event.value);
    }
    /**
     * @param {?} $event
     * @param {?} bg
     * @return {?}
     */
    toggleColorPicker($event, bg) {
        $event.preventDefault();
        $event.stopPropagation();
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
     * @param {?} isFontName
     * @return {?}
     */
    toggleFontSelect($event, isFontName) {
        $event.preventDefault();
        $event.stopPropagation();
        if (isFontName) {
            this.selectFontShow = !this.selectFontShow;
            this.selectFontSizeShow = false;
        }
        else {
            this.selectFontSizeShow = !this.selectFontSizeShow;
            this.selectFontShow = false;
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
            // to trigger changes in contentEditable
            this._formattingService.changeFormatList(list);
            // to clear the toggle status of the button only
            this._formattingService.changeFormatList("");
        }
        else {
            this.formatting.list = list;
            this._formattingService.changeFormatList(list);
        }
        if (this.isIE) {
            this._selectionService.restoreSelection();
            this._selectionService.captureSelection();
        }
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
        this.textBackup = this.getPageWithRootTags(this.textBackup, credentials.guid);
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
     * @param {?} credentials
     * @return {?}
     */
    saveNewFile(credentials) {
        if (!this.file || !this.file.pages) {
            return;
        }
        this.textBackup = this.getPageWithRootTags(this.textBackup, credentials.guid);
        /** @type {?} */
        const saveFile = new SaveFile(credentials.guid, credentials.password, this.textBackup);
        this._editorService.create(saveFile).subscribe((/**
         * @param {?} loadFile
         * @return {?}
         */
        (loadFile) => {
            this.loadFile(loadFile);
            this.credentials = new FileCredentials(loadFile.guid, credentials.password);
            this._modalService.open(CommonModals.OperationSuccess);
            this.newFile = false;
        }));
    }
    // Returns root-tags in the HTML-markup which previously were removed by innerHTML.
    /**
     * @param {?} data
     * @param {?} guid
     * @return {?}
     */
    getPageWithRootTags(data, guid) {
        /** @type {?} */
        const pptFormats = ["ppt", "pptx", "pptm", "pps", "ppsx", "ppsm", "pot", "potx", "potm", "odp", "otp"];
        /** @type {?} */
        let resultData = "<html><head>" + data + "</body></html>";
        if (this.newFile) {
            resultData = resultData.replace('<head>', '<head><meta http-equiv="content-type" content="text/html; charset=utf-8"></head><body>');
            if (pptFormats.includes(guid.split('.').pop())) {
                resultData = resultData.replace('<body>', '<body><div class="slide">');
            }
            else {
                resultData = resultData.replace('<body>', '<body><div class="documentMainContent">');
            }
            resultData = resultData.replace('</body>', '</div></body>');
        }
        else {
            // for Word files
            resultData = resultData.replace('<div class="documentMainContent">', '</head><body><div class="documentMainContent">');
            // for Presentations files
            resultData = resultData.replace('<div class="slide"', '</head><body><div class="slide"');
            // for Excel files
            resultData = resultData.replace('</style><table', '</style></head><body><table');
        }
        resultData = resultData.replace('<main class="documentMainContent">', '</head><body><main class="documentMainContent">');
        return resultData;
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
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\" (click)=\"hideAll($event)\">\n  <gd-tabbed-toolbars [logo]=\"'editor'\" [icon]=\"'pen-square'\">\n    <gd-tabs>\n      <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'file'\" [tooltip]=\"'Create document'\" (click)=\"createFile()\"\n                     *ngIf=\"createNewFileConfig\"></gd-button>\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                     *ngIf=\"browseConfig\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save File'\" (click)=\"save()\"></gd-button>\n          <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'pencil-alt'\" [iconClass]=\"'save-as-button-icon'\" [tooltip]=\"'Save File As'\" (click)=\"openSave()\">\n            <fa-icon [icon]=\"['fas','save']\" class=\"save-button\" size=\"xs\"></fa-icon></gd-button>\n          <gd-button [disabled]=\"downloadDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                     (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n          <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                     *ngIf=\"printConfig\" ></gd-button>\n          <gd-button *ngIf=\"!isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Undo'\"\n                     (click)=\"toggleUndo()\"></gd-button>\n          <gd-button *ngIf=\"!isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Redo'\"\n                     (click)=\"toggleRedo()\"></gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab id=\"formatting-tab\" [tabTitle]=\"'Formatting'\" [icon]=\"'edit'\" [id]=\"'2'\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button *ngIf=\"isDesktop\"  [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Undo'\"\n                     (click)=\"toggleUndo()\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\"  [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Redo'\"\n                     (click)=\"toggleRedo()\"></gd-button>\n          <gd-select class=\"format-select mobile-hide\" [disabled]=\"formatDisabled\" [options]=\"fontOptions\"\n                     [isOpen]=\"selectFontShow\" (selected)=\"selectFont($event)\" (click)=\"toggleFontSelect($event, true)\"\n                     [showSelected]=\"{name : formatting.font, value : formatting.font}\"></gd-select>\n          <gd-select class=\"format-select mobile-hide\" [disabled]=\"formatDisabled\" [options]=\"fontSizeOptions\"\n                     [isOpen]=\"selectFontSizeShow\" (selected)=\"selectFontSize($event)\" (click)=\"toggleFontSelect($event, false)\"\n                     [showSelected]=\"{name : formatting.fontSize + 'px', value : formatting.fontSize}\"></gd-select>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'bold'\" [tooltip]=\"'Bold'\"\n                     (click)=\"toggleBold($event)\" [toggle]=\"formatting.bold\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'italic'\" [tooltip]=\"'Italic'\"\n                     (click)=\"toggleItalic($event)\" [toggle]=\"formatting.italic\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'underline'\" [tooltip]=\"'Underline'\"\n                     (click)=\"toggleUnderline($event)\" [toggle]=\"formatting.underline\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'strikethrough'\" [tooltip]=\"'Strike out'\"\n                     (click)=\"toggleStrikeout($event)\" [toggle]=\"formatting.strikeout\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'align-center'\" [tooltip]=\"'Align center'\"\n                     (click)=\"toggleAlign('center')\" [toggle]=\"formatting.align == 'center' ? true : false\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'align-justify'\" [tooltip]=\"'Align full'\"\n                     (click)=\"toggleAlign('full')\" [toggle]=\"formatting.align == 'full' ? true : false\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'align-right'\" [tooltip]=\"'Align right'\"\n                     (click)=\"toggleAlign('right')\" [toggle]=\"formatting.align == 'right' ? true : false\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'align-left'\" [tooltip]=\"'Align left'\"\n                     (click)=\"toggleAlign('left')\" [toggle]=\"formatting.align == 'left' ? true : false\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'list-ul'\" [tooltip]=\"'Add Unordered List'\"\n                     (click)=\"toggleList('unordered')\" [toggle]=\"formatting.list == 'unordered' ? true : false\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'list-ol'\" [tooltip]=\"'Add Ordered List'\"\n                     (click)=\"toggleList('ordered')\" [toggle]=\"formatting.list == 'ordered' ? true : false\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\" name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'fill'\" [tooltip]=\"'Background color'\"\n                     (click)=\"toggleColorPicker($event, true)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.bgColor\"></div>\n          </gd-button>\n          <gd-button *ngIf=\"isDesktop\" name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'font'\" [tooltip]=\"'Color'\" \n                     (click)=\"toggleColorPicker($event, false)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.color\"></div>\n          </gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab class=\"desktop-hide\" [tabTitle]=\"'Font'\" [icon]=\"'font'\" [id]=\"'3'\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-select class=\"format-select font-type\" [disabled]=\"formatDisabled\" [options]=\"fontOptions\"\n                      [isOpen]=\"selectFontShow\" (selected)=\"selectFont($event)\" (click)=\"toggleFontSelect($event, true)\"\n                      [showSelected]=\"{name : formatting.font, value : formatting.font}\"></gd-select>\n          <gd-select class=\"format-select font-size\" [disabled]=\"formatDisabled\" [options]=\"fontSizeOptions\"\n                      [isOpen]=\"selectFontSizeShow\" (selected)=\"selectFontSize($event)\" (click)=\"toggleFontSelect($event, false)\"\n                      [showSelected]=\"{name : formatting.fontSize + 'px', value : formatting.fontSize}\"></gd-select>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab id=\"paragraph-tab\" class=\"desktop-hide\" [tabTitle]=\"'Paragraph'\" [icon]=\"'paragraph'\" [id]=\"'4'\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-center'\" [tooltip]=\"'Align center'\"\n                     (click)=\"toggleAlign('center')\" [toggle]=\"formatting.align == 'center' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-justify'\" [tooltip]=\"'Align full'\"\n                     (click)=\"toggleAlign('full')\" [toggle]=\"formatting.align == 'full' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-right'\" [tooltip]=\"'Align right'\"\n                     (click)=\"toggleAlign('right')\" [toggle]=\"formatting.align == 'right' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-left'\" [tooltip]=\"'Align left'\"\n                     (click)=\"toggleAlign('left')\" [toggle]=\"formatting.align == 'left' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ul'\" [tooltip]=\"'Add Unordered List'\"\n                     (click)=\"toggleList('unordered')\" [toggle]=\"formatting.list == 'unordered' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ol'\" [tooltip]=\"'Add Ordered List'\"\n                     (click)=\"toggleList('ordered')\" [toggle]=\"formatting.list == 'ordered' ? true : false\"></gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab class=\"desktop-hide\" [tabTitle]=\"'Palette'\" [icon]=\"'palette'\" [id]=\"'5'\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'fill'\" [tooltip]=\"'Background color'\"\n                    (click)=\"toggleColorPicker($event, true)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.bgColor\"></div>\n          </gd-button>\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'font'\" [tooltip]=\"'Color'\" \n                    (click)=\"toggleColorPicker($event, false)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.color\"></div>\n          </gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n    </gd-tabs>\n  </gd-tabbed-toolbars>\n  <gd-color-picker [isOpen]=\"bgColorPickerShow || colorPickerShow\"\n                   [className]=\"'palette ' + (bgColorPickerShow ? 'background-color-picker' : 'color-picker')\"\n                   (selectedColor)=\"selectColor($event)\"></gd-color-picker>\n  <div class=\"doc-panel\" *ngIf=\"file\">\n    <gd-document class=\"gd-document\" *ngIf=\"file\" [ngClass]=\"{'new-file': newFile}\" [file]=\"file\" [mode]=\"true\" [htmlMode]=\"true\"\n                 [preloadPageCount]=\"0\" gdFormatting gdRenderPrint gdScrollable>\n    </gd-document>\n  </div>\n  <gd-init-state [icon]=\"'pen-square'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n      Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n      Or drop file here\n  </gd-init-state>\n  <gd-browse-files-modal\n    (closing)=\"onCloseModal($event)\"\n    (urlForUpload)=\"upload($event)\"\n    [files]=\"files\"\n    (selectedDirectory)=\"selectDir($event)\"\n    (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n    [uploadConfig]=\"uploadConfig\"\n  ></gd-browse-files-modal>\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-create-document-modal (closing)=\"onCloseModal($event)\" [file]=\"credentials\" (savingFile)=\"saveNewFile($event)\"></gd-create-document-modal>\n  <gd-success-modal></gd-success-modal>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.current-page-number{margin:0 15px;font-size:14px;color:#959da5}*{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:text}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}::ng-deep .gd-drag-n-drop-wrap.active{z-index:999}::ng-deep .gd-drag-n-drop-wrap.active .init-state-wrapper{top:unset!important}::ng-deep .init-state-wrapper{top:-90px!important}.doc-panel{display:-webkit-box;display:flex;height:inherit}.gd-document{width:100%;height:calc(100% - 90px)}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{width:100%}::ng-deep .gd-wrapper{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;outline:0;position:relative}::ng-deep .dropdown-menu{min-width:unset!important}.palette{position:absolute;top:90px;z-index:100}.background-color-picker{left:700px}.color-picker{left:750px}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}::ng-deep .tools .button{color:#3e4e5a!important}::ng-deep .tools .button .text{padding:0!important}::ng-deep .tools .button.inactive{color:#959da5!important;opacity:.4}::ng-deep .tools .dropdown-menu .option{min-width:61px;color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}::ng-deep .tools .select{width:65px;height:37px;margin-left:7px;line-height:37px;text-align:center;border:none!important}::ng-deep .tools .select .nav-caret{margin:0 0 0 4px!important}::ng-deep .gd-select-format .select{-webkit-box-pack:justify!important;justify-content:space-between!important}::ng-deep .tab-content .button .tooltip{margin-top:45px;margin-left:-36px}::ng-deep .gd-edit.active{background-color:#7e8991}::ng-deep .gd-edit.active i{color:#fff}::ng-deep .page{width:auto!important;height:auto!important}::ng-deep .page ::ng-deep .gd-document .page{width:auto!important;height:auto!important}::ng-deep .documentMainContent.newfile{width:595px!important;height:842px!important}::ng-deep .gd-document.new-file .page{width:595pt!important;height:842pt!important}::ng-deep .slide{margin:0!important}::ng-deep #page-0{height:calc(100% - 2 * 20px)}::ng-deep .save-as-button-icon{font-size:11px;left:22px!important;top:13px!important}::ng-deep .documentMainContent .section{margin:0!important}::ng-deep .documentMainContent>div{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:end;justify-content:flex-end}::ng-deep .documentMainContent>div .footer-1{position:absolute;bottom:0;width:calc(100% - 2 * 96px);display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}::ng-deep .documentMainContent>div .footer-1 .Normal{margin:0 0 0 auto}::ng-deep .documentMainContent>div .footer-1 p{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}::ng-deep .documentMainContent>div .header-0{padding-bottom:10px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}::ng-deep .documentMainContent>div .header-0 .Header,::ng-deep .documentMainContent>div .header-0 .Normal{margin:0 0 0 auto}::ng-deep .documentMainContent>div .header-0 p{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}::ng-deep .documentMainContent>div .header-0 p:last-of-type{margin:0!important}.save-button{position:absolute;top:-5px;left:21px}gd-tab.desktop-hide{display:none}@media (max-width:1037px){::ng-deep .panzoom{zoom:.45;margin-top:130px}::ng-deep .gd-tab fa-icon{height:60px;width:60px;font-size:22px!important;margin:unset!important}gd-tab.desktop-hide{display:block}.mobile-hide{display:none}::ng-deep .tools{overflow-x:unset!important}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0!important}::ng-deep .tools .icon-button{height:60px!important;width:60px}::ng-deep #formatting-tab ::ng-deep .tools .icon-button,::ng-deep #paragraph-tab ::ng-deep .tools .icon-button{margin:0!important}::ng-deep .bg-color-pic{height:13px!important;width:13px!important;right:9px!important;bottom:11px!important}::ng-deep .palette{position:absolute;top:130px!important;z-index:100}::ng-deep .background-color-picker{left:0!important}::ng-deep .color-picker{left:60px!important}::ng-deep .format-select.font-type{width:109px}::ng-deep .format-select.font-type ::ng-deep .dropdown-menu{width:109px!important;top:60px!important;left:0!important}::ng-deep .format-select.font-size{width:81px}::ng-deep .format-select.font-size ::ng-deep .dropdown-menu{width:81px!important;top:60px!important;left:109px!important}::ng-deep .format-select .select{width:unset!important;height:60px!important;line-height:60px}::ng-deep .init-state-wrapper{position:unset!important}}"]
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
if (false) {
    /** @type {?} */
    EditorAppComponent.prototype.title;
    /** @type {?} */
    EditorAppComponent.prototype.files;
    /** @type {?} */
    EditorAppComponent.prototype.file;
    /** @type {?} */
    EditorAppComponent.prototype.editorConfig;
    /** @type {?} */
    EditorAppComponent.prototype.formatDisabled;
    /** @type {?} */
    EditorAppComponent.prototype.downloadDisabled;
    /** @type {?} */
    EditorAppComponent.prototype.credentials;
    /** @type {?} */
    EditorAppComponent.prototype.browseFilesModal;
    /** @type {?} */
    EditorAppComponent.prototype.isDesktop;
    /** @type {?} */
    EditorAppComponent.prototype.formatting;
    /** @type {?} */
    EditorAppComponent.prototype.fontSizeOptions;
    /** @type {?} */
    EditorAppComponent.prototype.fontOptions;
    /** @type {?} */
    EditorAppComponent.prototype.bgColorPickerShow;
    /** @type {?} */
    EditorAppComponent.prototype.colorPickerShow;
    /** @type {?} */
    EditorAppComponent.prototype.active;
    /** @type {?} */
    EditorAppComponent.prototype.textBackup;
    /**
     * @type {?}
     * @private
     */
    EditorAppComponent.prototype.isIE;
    /** @type {?} */
    EditorAppComponent.prototype.isLoading;
    /** @type {?} */
    EditorAppComponent.prototype.fileWasDropped;
    /** @type {?} */
    EditorAppComponent.prototype.selectFontShow;
    /** @type {?} */
    EditorAppComponent.prototype.selectFontSizeShow;
    /** @type {?} */
    EditorAppComponent.prototype.newFile;
    /**
     * @type {?}
     * @private
     */
    EditorAppComponent.prototype._editorService;
    /**
     * @type {?}
     * @private
     */
    EditorAppComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    EditorAppComponent.prototype._windowService;
    /**
     * @type {?}
     * @private
     */
    EditorAppComponent.prototype._formattingService;
    /**
     * @type {?}
     * @private
     */
    EditorAppComponent.prototype._backFormattingService;
    /**
     * @type {?}
     * @private
     */
    EditorAppComponent.prototype._onCloseService;
    /**
     * @type {?}
     * @private
     */
    EditorAppComponent.prototype._selectionService;
    /**
     * @type {?}
     * @private
     */
    EditorAppComponent.prototype._htmlService;
    /**
     * @type {?}
     * @private
     */
    EditorAppComponent.prototype._renderPrintService;
    /**
     * @type {?}
     * @private
     */
    EditorAppComponent.prototype._loadingMaskService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUNMLGVBQWUsRUFFZixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixlQUFlLEVBQ2YsWUFBWSxFQUNaLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsVUFBVSxFQUNWLHFCQUFxQixFQUNyQixjQUFjLEVBQ2QsUUFBUSxFQUNSLGdCQUFnQixFQUNoQixlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLGFBQWEsRUFDYixrQkFBa0IsRUFDbkIsTUFBTSwrQ0FBK0MsQ0FBQztBQUV2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7TUFDM0IsQ0FBQyxHQUFHLE1BQU07QUFPaEIsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7OztJQXdCN0IsWUFBb0IsY0FBNkIsRUFDN0IsYUFBMkIsRUFDbkMsYUFBa0MsRUFDbEMsa0JBQXNDLEVBQ3RDLGVBQWdDLEVBQ3hCLGNBQTZCLEVBQzdCLGtCQUFxQyxFQUNyQyxzQkFBNkMsRUFDN0MsZUFBK0IsRUFDL0IsaUJBQW1DLEVBQ25DLFlBQTZCLEVBQzdCLG1CQUF1QyxFQUN2QyxtQkFBdUM7UUFadkMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFJM0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtR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QjtnQkFDbEMsd29WQUEwQzs7YUFFM0M7Ozs7WUE5Qk8sYUFBYTtZQUluQixZQUFZO1lBa0JOLG1CQUFtQjtZQWpCekIsa0JBQWtCO1lBQ2xCLGVBQWU7WUFZZixhQUFhO1lBUmIsaUJBQWlCO1lBRWpCLHFCQUFxQjtZQUNyQixjQUFjO1lBRWQsZ0JBQWdCO1lBQ2hCLGVBQWU7WUFDZixrQkFBa0I7WUFFbEIsa0JBQWtCOzs7O0lBYWxCLG1DQUFpQjs7SUFDakIsbUNBQXdCOztJQUN4QixrQ0FBc0I7O0lBQ3RCLDBDQUEyQjs7SUFDM0IsNENBQTRCOztJQUM1Qiw4Q0FBd0I7O0lBQ3hCLHlDQUE2Qjs7SUFDN0IsOENBQTRDOztJQUM1Qyx1Q0FBbUI7O0lBQ25CLHdDQUE4Qzs7SUFDOUMsNkNBQXlEOztJQUN6RCx5Q0FBaUQ7O0lBQ2pELCtDQUEwQjs7SUFDMUIsNkNBQXdCOztJQUN4QixvQ0FBZTs7SUFDZix3Q0FBMEI7Ozs7O0lBQzFCLGtDQUFxQjs7SUFDckIsdUNBQW1COztJQUNuQiw0Q0FBc0I7O0lBQ3RCLDRDQUF1Qjs7SUFDdkIsZ0RBQTJCOztJQUMzQixxQ0FBZ0I7Ozs7O0lBRUosNENBQXFDOzs7OztJQUNyQywyQ0FBbUM7Ozs7O0lBSW5DLDRDQUFxQzs7Ozs7SUFDckMsZ0RBQTZDOzs7OztJQUM3QyxvREFBcUQ7Ozs7O0lBQ3JELDZDQUF1Qzs7Ozs7SUFDdkMsK0NBQTJDOzs7OztJQUMzQywwQ0FBcUM7Ozs7O0lBQ3JDLGlEQUErQzs7Ozs7SUFDL0MsaURBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0VkaXRvclNlcnZpY2V9IGZyb20gXCIuL2VkaXRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuICBGaWxlRGVzY3JpcHRpb24sXG4gIEZpbGVNb2RlbCxcbiAgTW9kYWxTZXJ2aWNlLFxuICBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gIFBhc3N3b3JkU2VydmljZSxcbiAgRmlsZUNyZWRlbnRpYWxzLFxuICBDb21tb25Nb2RhbHMsXG4gIFBhZ2VNb2RlbCxcbiAgRm9ybWF0dGluZ1NlcnZpY2UsXG4gIEZvcm1hdHRpbmcsXG4gIEJhY2tGb3JtYXR0aW5nU2VydmljZSxcbiAgT25DbG9zZVNlcnZpY2UsXG4gIFNhdmVGaWxlLFxuICBTZWxlY3Rpb25TZXJ2aWNlLFxuICBFZGl0SHRtbFNlcnZpY2UsXG4gIFJlbmRlclByaW50U2VydmljZSxcbiAgV2luZG93U2VydmljZSxcbiAgTG9hZGluZ01hc2tTZXJ2aWNlLCBPcHRpb25cbn0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcbmltcG9ydCB7RWRpdG9yQ29uZmlnfSBmcm9tIFwiLi9lZGl0b3ItY29uZmlnXCI7XG5pbXBvcnQge0VkaXRvckNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL2VkaXRvci1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1lZGl0b3ItYW5ndWxhci1yb290JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXRvci1hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lZGl0b3ItYXBwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgRWRpdG9yQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0ICB7XG4gIHRpdGxlID0gJ2VkaXRvcic7XG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xuICBmaWxlOiBGaWxlRGVzY3JpcHRpb247XG4gIGVkaXRvckNvbmZpZzogRWRpdG9yQ29uZmlnO1xuICBmb3JtYXREaXNhYmxlZCA9ICF0aGlzLmZpbGU7XG4gIGRvd25sb2FkRGlzYWJsZWQgPSB0cnVlO1xuICBjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzO1xuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xuICBpc0Rlc2t0b3A6IGJvb2xlYW47XG4gIGZvcm1hdHRpbmc6IEZvcm1hdHRpbmcgPSBGb3JtYXR0aW5nLmRlZmF1bHQoKTtcbiAgZm9udFNpemVPcHRpb25zID0gRm9ybWF0dGluZ1NlcnZpY2UuZ2V0Rm9udFNpemVPcHRpb25zKCk7XG4gIGZvbnRPcHRpb25zID0gRm9ybWF0dGluZ1NlcnZpY2UuZ2V0Rm9udE9wdGlvbnMoKTtcbiAgYmdDb2xvclBpY2tlclNob3cgPSBmYWxzZTtcbiAgY29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gIGFjdGl2ZSA9IGZhbHNlO1xuICBwdWJsaWMgdGV4dEJhY2t1cDogc3RyaW5nO1xuICBwcml2YXRlIGlzSUUgPSBmYWxzZTtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBmaWxlV2FzRHJvcHBlZDogZmFsc2U7XG4gIHNlbGVjdEZvbnRTaG93ID0gZmFsc2U7XG4gIHNlbGVjdEZvbnRTaXplU2hvdyA9IGZhbHNlO1xuICBuZXdGaWxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWRpdG9yU2VydmljZTogRWRpdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICAgIGNvbmZpZ1NlcnZpY2U6IEVkaXRvckNvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHVwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZm9ybWF0dGluZ1NlcnZpY2U6IEZvcm1hdHRpbmdTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9iYWNrRm9ybWF0dGluZ1NlcnZpY2U6IEJhY2tGb3JtYXR0aW5nU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb25DbG9zZVNlcnZpY2U6IE9uQ2xvc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zZWxlY3Rpb25TZXJ2aWNlOiBTZWxlY3Rpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9odG1sU2VydmljZTogRWRpdEh0bWxTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJQcmludFNlcnZpY2U6IFJlbmRlclByaW50U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbG9hZGluZ01hc2tTZXJ2aWNlOiBMb2FkaW5nTWFza1NlcnZpY2UsXG4gICkge1xuICAgIHRoaXMuaXNJRSA9IC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhLyhNU0lFfFRyaWRlbnRcXC98RWRnZVxcLykvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIGNvbmZpZ1NlcnZpY2UudXBkYXRlZENvbmZpZy5zdWJzY3JpYmUoKGVkaXRvckNvbmZpZykgPT4ge1xuICAgICAgdGhpcy5lZGl0b3JDb25maWcgPSBlZGl0b3JDb25maWc7XG4gICAgfSk7XG5cbiAgICB1cGxvYWRGaWxlc1NlcnZpY2UudXBsb2Fkc0NoYW5nZS5zdWJzY3JpYmUoKHVwbG9hZHMpID0+IHtcbiAgICAgIGlmICh1cGxvYWRzKSB7XG4gICAgICAgIGxldCBpOiBudW1iZXI7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB1cGxvYWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5fZWRpdG9yU2VydmljZS51cGxvYWQodXBsb2Fkcy5pdGVtKGkpLCAnJywgdGhpcy5lZGl0b3JDb25maWcucmV3cml0ZSkuc3Vic2NyaWJlKChvYmo6IEZpbGVDcmVkZW50aWFscykgPT4ge1xuICAgICAgICAgICAgdGhpcy5maWxlV2FzRHJvcHBlZCA/IHRoaXMuc2VsZWN0RmlsZShvYmouZ3VpZCwgJycsICcnKSA6IHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGFzc3dvcmRTZXJ2aWNlLnBhc3NDaGFuZ2Uuc3Vic2NyaWJlKChwYXNzOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLmNyZWRlbnRpYWxzLmd1aWQsIHBhc3MsIENvbW1vbk1vZGFscy5QYXNzd29yZFJlcXVpcmVkKTtcbiAgICB9KTtcblxuICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgX3dpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XG4gICAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEJvbGRDaGFuZ2Uuc3Vic2NyaWJlKChib2xkOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuYm9sZCA9IGJvbGQ7XG4gICAgfSk7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEl0YWxpY0NoYW5nZS5zdWJzY3JpYmUoKGl0YWxpYzogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLml0YWxpYyA9IGl0YWxpYztcbiAgICB9KTtcbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0VW5kZXJsaW5lQ2hhbmdlLnN1YnNjcmliZSgodW5kZXJsaW5lOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcudW5kZXJsaW5lID0gdW5kZXJsaW5lO1xuICAgIH0pO1xuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRDb2xvckNoYW5nZS5zdWJzY3JpYmUoKGNvbG9yOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5jb2xvciA9IGNvbG9yO1xuICAgIH0pO1xuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRCZ0NvbG9yQ2hhbmdlLnN1YnNjcmliZSgoYmdjb2xvcjogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuYmdDb2xvciA9IGJnY29sb3I7XG4gICAgfSk7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEZvbnRTaXplQ2hhbmdlLnN1YnNjcmliZSgoZm9udFNpemU6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Rm9udENoYW5nZS5zdWJzY3JpYmUoKGZvbnQ6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmZvbnQgPSBmb250O1xuICAgIH0pO1xuXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdFN0cmlrZW91dENoYW5nZS5zdWJzY3JpYmUoKHN0cmlrZW91dDogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLnN0cmlrZW91dCA9IHN0cmlrZW91dDtcbiAgICB9KTtcblxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRBbGlnbkNoYW5nZS5zdWJzY3JpYmUoKGFsaWduOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5hbGlnbiA9IGFsaWduO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdExpc3RDaGFuZ2Uuc3Vic2NyaWJlKChsaXN0OiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5saXN0ID0gbGlzdDtcbiAgICB9KTtcblxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEJvbGRDaGFuZ2Uuc3Vic2NyaWJlKChib2xkOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuYm9sZCA9IGJvbGQ7XG4gICAgfSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0SXRhbGljQ2hhbmdlLnN1YnNjcmliZSgoaXRhbGljOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuaXRhbGljID0gaXRhbGljO1xuICAgIH0pO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdFVuZGVybGluZUNoYW5nZS5zdWJzY3JpYmUoKHVuZGVybGluZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLnVuZGVybGluZSA9IHVuZGVybGluZTtcbiAgICB9KTtcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRDb2xvckNoYW5nZS5zdWJzY3JpYmUoKGNvbG9yOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5jb2xvciA9IGNvbG9yO1xuICAgIH0pO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEJnQ29sb3JDaGFuZ2Uuc3Vic2NyaWJlKChiZ2NvbG9yOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5iZ0NvbG9yID0gYmdjb2xvcjtcbiAgICB9KTtcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRGb250U2l6ZUNoYW5nZS5zdWJzY3JpYmUoKGZvbnRTaXplOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Rm9udENoYW5nZS5zdWJzY3JpYmUoKGZvbnQ6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmZvbnQgPSBmb250O1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0U3RyaWtlb3V0Q2hhbmdlLnN1YnNjcmliZSgoc3RyaWtlb3V0OiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuc3RyaWtlb3V0ID0gc3RyaWtlb3V0O1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0QWxpZ25DaGFuZ2Uuc3Vic2NyaWJlKChhbGlnbjogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuYWxpZ24gPSBhbGlnbjtcbiAgICB9KTtcblxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdExpc3RDaGFuZ2Uuc3Vic2NyaWJlKChsaXN0OiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5saXN0ID0gbGlzdDtcbiAgICB9KTtcblxuICAgIHRoaXMuX2h0bWxTZXJ2aWNlLmh0bWxDb250ZW50LnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodGhpcy5maWxlICYmIHRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgICB0aGlzLnRleHRCYWNrdXAgPSB0ZXh0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZWRpdG9yQ29uZmlnLmRlZmF1bHREb2N1bWVudCAhPT0gXCJcIil7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5lZGl0b3JDb25maWcuZGVmYXVsdERvY3VtZW50LCBcIlwiLCBcIlwiKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fbG9hZGluZ01hc2tTZXJ2aWNlXG4gICAgLm9uTG9hZGluZ0NoYW5nZWRcbiAgICAuc3Vic2NyaWJlKChsb2FkaW5nOiBib29sZWFuKSA9PiB0aGlzLmlzTG9hZGluZyA9IGxvYWRpbmcpO1xuICB9XG5cbiAgZ2V0IHJld3JpdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yQ29uZmlnID8gdGhpcy5lZGl0b3JDb25maWcucmV3cml0ZSA6IHRydWU7XG4gIH1cblxuICBnZXQgZG93bmxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yQ29uZmlnID8gdGhpcy5lZGl0b3JDb25maWcuZG93bmxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JDb25maWcgPyB0aGlzLmVkaXRvckNvbmZpZy51cGxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHByaW50Q29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVkaXRvckNvbmZpZyA/IHRoaXMuZWRpdG9yQ29uZmlnLnByaW50IDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBicm93c2VDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yQ29uZmlnID8gdGhpcy5lZGl0b3JDb25maWcuYnJvd3NlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBlbmFibGVSaWdodENsaWNrQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVkaXRvckNvbmZpZyA/IHRoaXMuZWRpdG9yQ29uZmlnLmVuYWJsZVJpZ2h0Q2xpY2sgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHBhZ2VTZWxlY3RvckNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JDb25maWcgPyB0aGlzLmVkaXRvckNvbmZpZy5wYWdlU2VsZWN0b3IgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGNyZWF0ZU5ld0ZpbGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yQ29uZmlnID8gdGhpcy5lZGl0b3JDb25maWcuY3JlYXRlTmV3RmlsZSA6IHRydWU7XG4gIH1cblxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmZpbGUpIHtcbiAgICAgIHRoaXMuZmlsZS5wYWdlc1swXS5lZGl0YWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihpZCk7XG4gIH1cblxuICBvcGVuU2F2ZSgpIHtcbiAgICBpZiAoIXRoaXMuZm9ybWF0RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMub3Blbk1vZGFsKENvbW1vbk1vZGFscy5DcmVhdGVEb2N1bWVudCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fZWRpdG9yU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBGaWxlTW9kZWxbXSkgPT4gdGhpcy5maWxlcyA9IGZpbGVzIHx8IFtdKTtcbiAgfVxuXG4gIHByaXZhdGUgcHRUb1B4KHB0OiBudW1iZXIpIHtcbiAgICAvL3B0ICogOTYgLyA3MiA9IHB4LlxuICAgIHJldHVybiBwdCAqIDk2IC8gNzI7XG4gIH1cblxuICBvblJpZ2h0Q2xpY2soJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuZW5hYmxlUmlnaHRDbGlja0NvbmZpZztcbiAgfVxuXG4gIGNyZWF0ZUZpbGUoKSB7XG4gICAgdGhpcy5uZXdGaWxlID0gdHJ1ZTtcbiAgICB0aGlzLmZpbGUgPSBuZXcgRmlsZURlc2NyaXB0aW9uKCk7XG4gICAgY29uc3QgcGFnZSA9IG5ldyBQYWdlTW9kZWw7XG4gICAgcGFnZS53aWR0aCA9IDU5NTtcbiAgICBwYWdlLmhlaWdodCA9IDg0MjtcbiAgICBwYWdlLmRhdGEgPSAnPCFET0NUWVBFIEhUTUw+PGh0bWw+PGhlYWQ+PC9oZWFkPjxib2R5PjwvYm9keT48L2h0bWw+JztcbiAgICBwYWdlLm51bWJlciA9IDE7XG4gICAgcGFnZS5lZGl0YWJsZSA9IHRydWU7XG4gICAgdGhpcy5maWxlLnBhZ2VzID0gW107XG4gICAgdGhpcy5maWxlLnBhZ2VzLnB1c2gocGFnZSk7XG4gICAgdGhpcy5maWxlLmd1aWQgPSBcIm5ldyBkb2N1bWVudC5kb2N4XCI7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG5ldyBGaWxlQ3JlZGVudGlhbHMoXCJuZXcgZG9jdW1lbnQuZG9jeFwiLCBcIlwiKTtcbiAgICB0aGlzLmZvcm1hdERpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5kb3dubG9hZERpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHNlbGVjdEZpbGUoJGV2ZW50OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG1vZGFsSWQ6IHN0cmluZykge1xuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBuZXcgRmlsZUNyZWRlbnRpYWxzKCRldmVudCwgcGFzc3dvcmQpO1xuICAgIHRoaXMuX2VkaXRvclNlcnZpY2UubG9hZEZpbGUodGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKChmaWxlOiBGaWxlRGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgdGhpcy5sb2FkRmlsZShmaWxlKTtcbiAgICAgICAgY29uc3QgaXNJRSA9IC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhLyhNU0lFfFRyaWRlbnRcXC98RWRnZVxcLykvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgICBpZihpc0lFKSB7XG4gICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICBpZigkKFwiLmRvY3VtZW50TWFpbkNvbnRlbnRcIikubGVuZ3RoID4gMCApe1xuICAgICAgICAgICAgICAkKFwiLmRvY3VtZW50TWFpbkNvbnRlbnRcIikuYXR0cihcImNvbnRlbnRFZGl0YWJsZVwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7YXR0cmlidXRlczogZmFsc2UsIGNoaWxkTGlzdDogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogZmFsc2UsIHN1YnRyZWU6IHRydWV9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy5jbGVhckRhdGEoKTtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UobW9kYWxJZCk7XG4gIH1cblxuICBmaWxlRHJvcHBlZCgkZXZlbnQpe1xuICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPSAkZXZlbnQ7XG4gIH1cblxuICBwcml2YXRlIGxvYWRGaWxlKGZpbGU6IEZpbGVEZXNjcmlwdGlvbikge1xuICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgaWYgKHRoaXMuZmlsZSAmJiB0aGlzLmZpbGUucGFnZXNbMF0pIHtcbiAgICAgIHRoaXMuZmlsZS5wYWdlc1swXS5lZGl0YWJsZSA9IHRydWU7XG4gICAgICB0aGlzLmZpbGUucGFnZXNbMF0ud2lkdGggPSA1OTU7XG4gICAgICB0aGlzLmZpbGUucGFnZXNbMF0uaGVpZ2h0ID0gODQyO1xuICAgICAgdGhpcy50ZXh0QmFja3VwID0gdGhpcy5maWxlLnBhZ2VzWzBdLmRhdGE7XG4gICAgfVxuICAgIHRoaXMuZm9ybWF0RGlzYWJsZWQgPSAhdGhpcy5maWxlO1xuICAgIHRoaXMuZG93bmxvYWREaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckRhdGEoKSB7XG4gICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICBwYWdlLmRhdGEgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHVwbG9hZCgkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX2VkaXRvclNlcnZpY2UudXBsb2FkKG51bGwsICRldmVudCwgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0Rm9udFNpemUoJGV2ZW50OiBPcHRpb24pIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICAkKFwiLmdkLXdyYXBwZXJcIikub2ZmKFwia2V5dXBcIik7XG4gICAgaWYodGhpcy5pc0lFKSB7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKTtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRGb250U2l6ZSgkZXZlbnQudmFsdWUpO1xuICAgICQoXCIuZ2Qtd3JhcHBlclwiKS5vbihcImtleXVwXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGZvbnRFbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9udFwiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBmb250RWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgaWYgKGZvbnRFbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ3NpemUnKSA9PT0gXCI3XCIpIHtcbiAgICAgICAgICBmb250RWxlbWVudHNbaV0ucmVtb3ZlQXR0cmlidXRlKFwic2l6ZVwiKTtcbiAgICAgICAgICBmb250RWxlbWVudHNbaV0uc3R5bGUuZm9udFNpemUgPSAkZXZlbnQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdEZvbnQoJGV2ZW50OiBPcHRpb24pIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmKHRoaXMuaXNJRSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0Rm9udCgkZXZlbnQudmFsdWUpO1xuICB9XG5cbiAgdG9nZ2xlQ29sb3JQaWNrZXIoJGV2ZW50LCBiZzogYm9vbGVhbikge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZih0aGlzLmlzSUUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIGlmIChiZykge1xuICAgICAgdGhpcy5iZ0NvbG9yUGlja2VyU2hvdyA9ICF0aGlzLmJnQ29sb3JQaWNrZXJTaG93O1xuICAgICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSAhdGhpcy5jb2xvclBpY2tlclNob3c7XG4gICAgICB0aGlzLmJnQ29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRm9udFNlbGVjdCgkZXZlbnQsIGlzRm9udE5hbWU6IGJvb2xlYW4pIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKGlzRm9udE5hbWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0Rm9udFNob3cgPSAhdGhpcy5zZWxlY3RGb250U2hvdztcbiAgICAgIHRoaXMuc2VsZWN0Rm9udFNpemVTaG93ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0Rm9udFNpemVTaG93ID0gIXRoaXMuc2VsZWN0Rm9udFNpemVTaG93O1xuICAgICAgdGhpcy5zZWxlY3RGb250U2hvdyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdENvbG9yKCRldmVudDogc3RyaW5nKSB7XG4gICAgaWYodGhpcy5pc0lFKSB7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKTtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgICBpZiAodGhpcy5iZ0NvbG9yUGlja2VyU2hvdykge1xuICAgICAgdGhpcy5iZ0NvbG9yUGlja2VyU2hvdyA9IGZhbHNlO1xuICAgICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0QmdDb2xvcigkZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyU2hvdyA9IGZhbHNlO1xuICAgICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0Q29sb3IoJGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVCb2xkKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZih0aGlzLmlzSUUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEJvbGQoIXRoaXMuZm9ybWF0dGluZy5ib2xkKTtcbiAgfVxuXG4gIHRvZ2dsZVVuZG8oKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5VbmRvKCk7XG4gIH1cblxuICB0b2dnbGVSZWRvKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuUmVkbygpO1xuICB9XG5cbiAgdG9nZ2xlSXRhbGljKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZih0aGlzLmlzSUUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEl0YWxpYyghdGhpcy5mb3JtYXR0aW5nLml0YWxpYyk7XG4gIH1cblxuICB0b2dnbGVVbmRlcmxpbmUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmKHRoaXMuaXNJRSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0VW5kZXJsaW5lKCF0aGlzLmZvcm1hdHRpbmcudW5kZXJsaW5lKTtcbiAgfVxuXG4gIGhpZGVBbGwoJGV2ZW50KSB7XG4gICAgaWYgKCgkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgJiYgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXNbJ25hbWUnXSAmJlxuICAgICAgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXNbJ25hbWUnXS52YWx1ZSA9PT0gJ2J1dHRvbicpIHx8XG4gICAgICAoJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgJiZcbiAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXNbJ25hbWUnXSAmJlxuICAgICAgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddLnZhbHVlID09PSAnYnV0dG9uJykpIHtcblxuICAgICAgdGhpcy5fb25DbG9zZVNlcnZpY2UuY2xvc2UodHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gICAgdGhpcy5iZ0NvbG9yUGlja2VyU2hvdyA9IGZhbHNlO1xuICAgIHRoaXMuX29uQ2xvc2VTZXJ2aWNlLmNsb3NlKHRydWUpO1xuICB9XG5cbiAgdG9nZ2xlU3RyaWtlb3V0KGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZih0aGlzLmlzSUUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdFN0cmlrZW91dCghdGhpcy5mb3JtYXR0aW5nLnN0cmlrZW91dCk7XG4gIH1cblxuICB0b2dnbGVBbGlnbihhbGlnbjogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoYWxpZ24gPT09IHRoaXMuZm9ybWF0dGluZy5hbGlnbikge1xuICAgICAgYWxpZ24gPSAnZnVsbCc7XG4gICAgfVxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEFsaWduKGFsaWduKTtcbiAgICB0aGlzLmZvcm1hdHRpbmcuYWxpZ24gPSBhbGlnbjtcbiAgfVxuXG4gIHRvZ2dsZUxpc3QobGlzdDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmIChsaXN0ID09PSB0aGlzLmZvcm1hdHRpbmcubGlzdCkge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmxpc3QgPSBcIlwiO1xuICAgICAgLy8gdG8gdHJpZ2dlciBjaGFuZ2VzIGluIGNvbnRlbnRFZGl0YWJsZVxuICAgICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0TGlzdChsaXN0KTtcbiAgICAgIC8vIHRvIGNsZWFyIHRoZSB0b2dnbGUgc3RhdHVzIG9mIHRoZSBidXR0b24gb25seVxuICAgICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0TGlzdChcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmxpc3QgPSBsaXN0O1xuICAgICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0TGlzdChsaXN0KTtcbiAgICB9XG4gICAgaWYodGhpcy5pc0lFKSB7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKTtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGRvd25sb2FkRmlsZSgpIHtcbiAgICBpZiAodGhpcy5kb3dubG9hZERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odGhpcy5fZWRpdG9yU2VydmljZS5nZXREb3dubG9hZFVybCh0aGlzLmNyZWRlbnRpYWxzKSk7XG4gIH1cblxuICBzYXZlKCl7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYodGhpcy5jcmVkZW50aWFscykge1xuICAgICAgaWYgKHRoaXMuZmlsZS5ndWlkID09PSBcIm5ldyBkb2N1bWVudC5kb2N4XCIpIHtcbiAgICAgICAgdGhpcy5vcGVuTW9kYWwoQ29tbW9uTW9kYWxzLkNyZWF0ZURvY3VtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2F2ZUZpbGUodGhpcy5jcmVkZW50aWFscyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiBzYXZlRmlsZShjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XG4gICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5wYWdlcylcbiAgICAgIHJldHVybjtcbiAgICAgIFxuICAgIHRoaXMudGV4dEJhY2t1cCA9IHRoaXMuZ2V0UGFnZVdpdGhSb290VGFncyh0aGlzLnRleHRCYWNrdXAsIGNyZWRlbnRpYWxzLmd1aWQpO1xuXG4gICAgY29uc3Qgc2F2ZUZpbGUgPSBuZXcgU2F2ZUZpbGUoY3JlZGVudGlhbHMuZ3VpZCwgY3JlZGVudGlhbHMucGFzc3dvcmQsIHRoaXMudGV4dEJhY2t1cCk7XG4gICAgdGhpcy5fZWRpdG9yU2VydmljZS5zYXZlKHNhdmVGaWxlKS5zdWJzY3JpYmUoKGxvYWRGaWxlOiBGaWxlRGVzY3JpcHRpb24pID0+IHtcbiAgICAgIHRoaXMubG9hZEZpbGUobG9hZEZpbGUpO1xuICAgICAgdGhpcy5jcmVkZW50aWFscyA9IG5ldyBGaWxlQ3JlZGVudGlhbHMobG9hZEZpbGUuZ3VpZCwgY3JlZGVudGlhbHMucGFzc3dvcmQpO1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLk9wZXJhdGlvblN1Y2Nlc3MpO1xuICAgIH0pO1xuICB9XG5cbiAgc2F2ZU5ld0ZpbGUoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscykge1xuICAgIGlmICghdGhpcy5maWxlIHx8ICF0aGlzLmZpbGUucGFnZXMpXG4gICAge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGV4dEJhY2t1cCA9IHRoaXMuZ2V0UGFnZVdpdGhSb290VGFncyh0aGlzLnRleHRCYWNrdXAsIGNyZWRlbnRpYWxzLmd1aWQpO1xuXG4gICAgY29uc3Qgc2F2ZUZpbGUgPSBuZXcgU2F2ZUZpbGUoY3JlZGVudGlhbHMuZ3VpZCwgY3JlZGVudGlhbHMucGFzc3dvcmQsIHRoaXMudGV4dEJhY2t1cCk7XG4gICAgdGhpcy5fZWRpdG9yU2VydmljZS5jcmVhdGUoc2F2ZUZpbGUpLnN1YnNjcmliZSgobG9hZEZpbGU6IEZpbGVEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgdGhpcy5sb2FkRmlsZShsb2FkRmlsZSk7XG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gbmV3IEZpbGVDcmVkZW50aWFscyhsb2FkRmlsZS5ndWlkLCBjcmVkZW50aWFscy5wYXNzd29yZCk7XG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuT3BlcmF0aW9uU3VjY2Vzcyk7XG4gICAgICB0aGlzLm5ld0ZpbGUgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFJldHVybnMgcm9vdC10YWdzIGluIHRoZSBIVE1MLW1hcmt1cCB3aGljaCBwcmV2aW91c2x5IHdlcmUgcmVtb3ZlZCBieSBpbm5lckhUTUwuXG4gIGdldFBhZ2VXaXRoUm9vdFRhZ3MoZGF0YSwgZ3VpZCkge1xuICAgIGNvbnN0IHBwdEZvcm1hdHMgPSBbXCJwcHRcIiwgXCJwcHR4XCIsIFwicHB0bVwiLCBcInBwc1wiLCBcInBwc3hcIiwgXCJwcHNtXCIsIFwicG90XCIsIFwicG90eFwiLCBcInBvdG1cIiwgXCJvZHBcIiwgXCJvdHBcIl07XG4gICAgbGV0IHJlc3VsdERhdGEgPSBcIjxodG1sPjxoZWFkPlwiICsgZGF0YSArIFwiPC9ib2R5PjwvaHRtbD5cIjtcbiAgICBcbiAgICBpZiAodGhpcy5uZXdGaWxlKVxuICAgIHtcbiAgICAgIHJlc3VsdERhdGEgPSByZXN1bHREYXRhLnJlcGxhY2UoJzxoZWFkPicsICc8aGVhZD48bWV0YSBodHRwLWVxdWl2PVwiY29udGVudC10eXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiPjwvaGVhZD48Ym9keT4nKTtcbiAgICAgIGlmIChwcHRGb3JtYXRzLmluY2x1ZGVzKGd1aWQuc3BsaXQoJy4nKS5wb3AoKSkpXG4gICAgICB7XG4gICAgICAgIHJlc3VsdERhdGEgPSByZXN1bHREYXRhLnJlcGxhY2UoJzxib2R5PicsICc8Ym9keT48ZGl2IGNsYXNzPVwic2xpZGVcIj4nKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgXG4gICAgICB7XG4gICAgICAgIHJlc3VsdERhdGEgPSByZXN1bHREYXRhLnJlcGxhY2UoJzxib2R5PicsICc8Ym9keT48ZGl2IGNsYXNzPVwiZG9jdW1lbnRNYWluQ29udGVudFwiPicpO1xuICAgICAgfVxuXG4gICAgICByZXN1bHREYXRhID0gcmVzdWx0RGF0YS5yZXBsYWNlKCc8L2JvZHk+JywgJzwvZGl2PjwvYm9keT4nKTtcbiAgICB9XG4gICAgZWxzZSBcbiAgICB7XG4gICAgICAvLyBmb3IgV29yZCBmaWxlc1xuICAgICAgcmVzdWx0RGF0YSA9IHJlc3VsdERhdGEucmVwbGFjZSgnPGRpdiBjbGFzcz1cImRvY3VtZW50TWFpbkNvbnRlbnRcIj4nLCAnPC9oZWFkPjxib2R5PjxkaXYgY2xhc3M9XCJkb2N1bWVudE1haW5Db250ZW50XCI+Jyk7XG4gICAgICAvLyBmb3IgUHJlc2VudGF0aW9ucyBmaWxlc1xuICAgICAgcmVzdWx0RGF0YSA9IHJlc3VsdERhdGEucmVwbGFjZSgnPGRpdiBjbGFzcz1cInNsaWRlXCInLCAnPC9oZWFkPjxib2R5PjxkaXYgY2xhc3M9XCJzbGlkZVwiJyk7XG4gICAgICAvLyBmb3IgRXhjZWwgZmlsZXNcbiAgICAgIHJlc3VsdERhdGEgPSByZXN1bHREYXRhLnJlcGxhY2UoJzwvc3R5bGU+PHRhYmxlJywgJzwvc3R5bGU+PC9oZWFkPjxib2R5Pjx0YWJsZScpO1xuICAgIH1cblxuICAgIHJlc3VsdERhdGEgPSByZXN1bHREYXRhLnJlcGxhY2UoJzxtYWluIGNsYXNzPVwiZG9jdW1lbnRNYWluQ29udGVudFwiPicsICc8L2hlYWQ+PGJvZHk+PG1haW4gY2xhc3M9XCJkb2N1bWVudE1haW5Db250ZW50XCI+Jyk7XG4gICAgcmV0dXJuIHJlc3VsdERhdGE7XG4gIH1cblxuICBwcmludEZpbGUoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYodGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICBjb25zdCBwYWdlID0gbmV3IFBhZ2VNb2RlbDtcbiAgICAgIHBhZ2Uud2lkdGggPSA1OTU7XG4gICAgICBwYWdlLmhlaWdodCA9IDg0MjtcbiAgICAgIC8vIHVzaW5nIG9mIHRoZSByZXBsYWNlIGlzIHJlcXVpcmVkIHRvIGZpeCBpc3N1ZSB3aXRoIHBhZGRpbmcgZm9yIGludGlyZSBwcmludCBjb250ZW50XG4gICAgICBwYWdlLmRhdGEgPSB0aGlzLnRleHRCYWNrdXAucmVwbGFjZSgnPC9zdHlsZT4nLCAnYm9keSB7IHBhZGRpbmc6IDk2cHg7IH0gPC9zdHlsZT4nKTtcbiAgICAgIGNvbnN0IHByaW50SHRtbCA9IFtwYWdlXTtcbiAgICAgIHRoaXMuX3JlbmRlclByaW50U2VydmljZS5jaGFuZ2VQYWdlcyhwcmludEh0bWwpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xvc2VNb2RhbCgkZXZlbnQpIHtcbiAgICBpZiAodGhpcy5maWxlICYmICRldmVudCkge1xuICAgICAgaWYodGhpcy5pc0lFKSB7XG4gICAgICAgICQoXCIuZG9jdW1lbnRNYWluQ29udGVudFwiKS5hdHRyKFwiY29udGVudEVkaXRhYmxlXCIsIFwidHJ1ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmlsZS5wYWdlc1swXS5lZGl0YWJsZSA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==