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
        this.textBackup = this.getPageWithRootTags(this.textBackup);
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
     * @param {?} data
     * @return {?}
     */
    getPageWithRootTags(data) {
        /** @type {?} */
        let resultData = "<html><head>" + data + "</body></html>";
        resultData = resultData.replace('<div class="documentMainContent">', '</head><body><div class="documentMainContent">');
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
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\" (click)=\"hideAll($event)\">\n  <gd-tabbed-toolbars [logo]=\"'editor'\" [icon]=\"'pen-square'\">\n    <gd-tabs>\n      <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'file'\" [tooltip]=\"'Create document'\" (click)=\"createFile()\"\n                     *ngIf=\"createNewFileConfig\"></gd-button>\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                     *ngIf=\"browseConfig\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save File'\" (click)=\"save()\"></gd-button>\n          <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'pencil-alt'\" [iconClass]=\"'save-as-button-icon'\" [tooltip]=\"'Save File As'\" (click)=\"openSave()\">\n            <fa-icon [icon]=\"['fas','save']\" class=\"save-button\" size=\"xs\"></fa-icon></gd-button>\n          <gd-button [disabled]=\"downloadDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                     (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n          <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                     *ngIf=\"printConfig\" ></gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab id=\"formatting-tab\" [tabTitle]=\"'Formatting'\" [icon]=\"'edit'\" [id]=\"'2'\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Undo'\"\n                     (click)=\"toggleUndo()\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Redo'\"\n                     (click)=\"toggleRedo()\"></gd-button>\n          <gd-select class=\"format-select mobile-hide\" [disabled]=\"formatDisabled\" [options]=\"fontOptions\"\n                     [isOpen]=\"selectFontShow\" (selected)=\"selectFont($event)\" (click)=\"toggleFontSelect($event, true)\"\n                     [showSelected]=\"{name : formatting.font, value : formatting.font}\"></gd-select>\n          <gd-select class=\"format-select mobile-hide\" [disabled]=\"formatDisabled\" [options]=\"fontSizeOptions\"\n                     [isOpen]=\"selectFontSizeShow\" (selected)=\"selectFontSize($event)\" (click)=\"toggleFontSelect($event, false)\"\n                     [showSelected]=\"{name : formatting.fontSize + 'px', value : formatting.fontSize}\"></gd-select>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'bold'\" [tooltip]=\"'Bold'\"\n                     (click)=\"toggleBold($event)\" [toggle]=\"formatting.bold\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'italic'\" [tooltip]=\"'Italic'\"\n                     (click)=\"toggleItalic($event)\" [toggle]=\"formatting.italic\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'underline'\" [tooltip]=\"'Underline'\"\n                     (click)=\"toggleUnderline($event)\" [toggle]=\"formatting.underline\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'strikethrough'\" [tooltip]=\"'Strike out'\"\n                     (click)=\"toggleStrikeout($event)\" [toggle]=\"formatting.strikeout\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-center'\" [tooltip]=\"'Align center'\"\n                     (click)=\"toggleAlign('center')\" [toggle]=\"formatting.align == 'center' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-justify'\" [tooltip]=\"'Align full'\"\n                     (click)=\"toggleAlign('full')\" [toggle]=\"formatting.align == 'full' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-right'\" [tooltip]=\"'Align right'\"\n                     (click)=\"toggleAlign('right')\" [toggle]=\"formatting.align == 'right' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-left'\" [tooltip]=\"'Align left'\"\n                     (click)=\"toggleAlign('left')\" [toggle]=\"formatting.align == 'left' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ul'\" [tooltip]=\"'Add Unordered List'\"\n                     (click)=\"toggleList('unordered')\" [toggle]=\"formatting.list == 'unordered' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ol'\" [tooltip]=\"'Add Ordered List'\"\n                     (click)=\"toggleList('ordered')\" [toggle]=\"formatting.list == 'ordered' ? true : false\"></gd-button>\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'fill'\" [tooltip]=\"'Background color'\"\n                     (click)=\"toggleColorPicker($event, true)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.bgColor\"></div>\n          </gd-button>\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'font'\" [tooltip]=\"'Color'\" \n                     (click)=\"toggleColorPicker($event, false)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.color\"></div>\n          </gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab class=\"desktop-hide\" [tabTitle]=\"'Font'\" [icon]=\"'font'\" [id]=\"'3'\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-select class=\"format-select font-type\" [disabled]=\"formatDisabled\" [options]=\"fontOptions\"\n                      [isOpen]=\"selectFontShow\" (selected)=\"selectFont($event)\" (click)=\"toggleFontSelect($event, true)\"\n                      [showSelected]=\"{name : formatting.font, value : formatting.font}\"></gd-select>\n          <gd-select class=\"format-select font-size\" [disabled]=\"formatDisabled\" [options]=\"fontSizeOptions\"\n                      [isOpen]=\"selectFontSizeShow\" (selected)=\"selectFontSize($event)\" (click)=\"toggleFontSelect($event, false)\"\n                      [showSelected]=\"{name : formatting.fontSize + 'px', value : formatting.fontSize}\"></gd-select>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab id=\"paragraph-tab\" class=\"desktop-hide\" [tabTitle]=\"'Paragraph'\" [icon]=\"'paragraph'\" [id]=\"'4'\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-center'\" [tooltip]=\"'Align center'\"\n                     (click)=\"toggleAlign('center')\" [toggle]=\"formatting.align == 'center' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-justify'\" [tooltip]=\"'Align full'\"\n                     (click)=\"toggleAlign('full')\" [toggle]=\"formatting.align == 'full' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-right'\" [tooltip]=\"'Align right'\"\n                     (click)=\"toggleAlign('right')\" [toggle]=\"formatting.align == 'right' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-left'\" [tooltip]=\"'Align left'\"\n                     (click)=\"toggleAlign('left')\" [toggle]=\"formatting.align == 'left' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ul'\" [tooltip]=\"'Add Unordered List'\"\n                     (click)=\"toggleList('unordered')\" [toggle]=\"formatting.list == 'unordered' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ol'\" [tooltip]=\"'Add Ordered List'\"\n                     (click)=\"toggleList('ordered')\" [toggle]=\"formatting.list == 'ordered' ? true : false\"></gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab class=\"desktop-hide\" [tabTitle]=\"'Palette'\" [icon]=\"'palette'\" [id]=\"'5'\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'fill'\" [tooltip]=\"'Background color'\"\n                    (click)=\"toggleColorPicker($event, true)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.bgColor\"></div>\n          </gd-button>\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'font'\" [tooltip]=\"'Color'\" \n                    (click)=\"toggleColorPicker($event, false)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.color\"></div>\n          </gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n    </gd-tabs>\n  </gd-tabbed-toolbars>\n  <gd-color-picker [isOpen]=\"bgColorPickerShow || colorPickerShow\"\n                   [className]=\"'palette ' + (bgColorPickerShow ? 'background-color-picker' : 'color-picker')\"\n                   (selectedColor)=\"selectColor($event)\"></gd-color-picker>\n  <div class=\"doc-panel\" *ngIf=\"file\">\n    <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"true\" [htmlMode]=\"true\"\n                 [preloadPageCount]=\"0\" gdFormatting gdRenderPrint gdScrollable>\n    </gd-document>\n  </div>\n  <gd-init-state [icon]=\"'pen-square'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n      Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n      Or drop file here\n  </gd-init-state>\n  <gd-browse-files-modal\n    (closing)=\"onCloseModal($event)\"\n    (urlForUpload)=\"upload($event)\"\n    [files]=\"files\"\n    (selectedDirectory)=\"selectDir($event)\"\n    (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n    [uploadConfig]=\"uploadConfig\"\n  ></gd-browse-files-modal>\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-create-document-modal (closing)=\"onCloseModal($event)\" [file]=\"credentials\" (savingFile)=\"saveFile($event)\"></gd-create-document-modal>\n  <gd-success-modal></gd-success-modal>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.current-page-number{margin:0 15px;font-size:14px;color:#959da5}*{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:text}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}::ng-deep .gd-drag-n-drop-wrap.active{z-index:999}::ng-deep .gd-drag-n-drop-wrap.active .init-state-wrapper{top:unset!important}::ng-deep .init-state-wrapper{top:-90px!important}.doc-panel{display:-webkit-box;display:flex;height:inherit}.gd-document{width:100%;height:calc(100% - 90px)}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{width:100%}::ng-deep .gd-wrapper{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;outline:0;position:relative}::ng-deep .dropdown-menu{min-width:unset!important}.palette{position:absolute;top:90px;z-index:100}.background-color-picker{left:700px}.color-picker{left:750px}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}::ng-deep .tools .button{color:#3e4e5a!important}::ng-deep .tools .button .text{padding:0!important}::ng-deep .tools .button.inactive{color:#959da5!important;opacity:.4}::ng-deep .tools .dropdown-menu .option{min-width:61px;color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}::ng-deep .tools .select{width:65px;height:37px;margin-left:7px;line-height:37px;text-align:center;border:none!important}::ng-deep .tools .select .nav-caret{margin:0 0 0 4px!important}::ng-deep .gd-select-format .select{-webkit-box-pack:justify!important;justify-content:space-between!important}::ng-deep .tab-content .button .tooltip{margin-top:45px;margin-left:-36px}::ng-deep .gd-edit.active{background-color:#7e8991}::ng-deep .gd-edit.active i{color:#fff}::ng-deep .page{width:800px;height:auto!important;min-height:842pt!important}::ng-deep #page-0{height:calc(100% - 2 * 20px)}::ng-deep .save-as-button-icon{font-size:11px;left:22px!important;top:13px!important}::ng-deep .documentMainContent .section{margin:0!important}::ng-deep .documentMainContent>div{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:end;justify-content:flex-end}::ng-deep .documentMainContent>div .footer-1{position:absolute;bottom:0;width:calc(100% - 2 * 96px);display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}::ng-deep .documentMainContent>div .footer-1 .Normal{margin:0 0 0 auto}::ng-deep .documentMainContent>div .footer-1 p{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}::ng-deep .documentMainContent>div .header-0{padding-bottom:10px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}::ng-deep .documentMainContent>div .header-0 .Header,::ng-deep .documentMainContent>div .header-0 .Normal{margin:0 0 0 auto}::ng-deep .documentMainContent>div .header-0 p{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}::ng-deep .documentMainContent>div .header-0 p:last-of-type{margin:0!important}.save-button{position:absolute;top:-5px;left:21px}gd-tab.desktop-hide{display:none}@media (max-width:1037px){::ng-deep .panzoom{zoom:.45;margin-top:130px}::ng-deep .gd-tab fa-icon{height:60px;width:60px;font-size:22px!important;margin:unset!important}gd-tab.desktop-hide{display:block}.mobile-hide{display:none}::ng-deep .tools{overflow-x:unset!important}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0!important}::ng-deep .tools .icon-button{height:60px!important;width:60px}::ng-deep #formatting-tab ::ng-deep .tools .icon-button,::ng-deep #paragraph-tab ::ng-deep .tools .icon-button{margin:0!important}::ng-deep .bg-color-pic{height:13px!important;width:13px!important;right:9px!important;bottom:11px!important}::ng-deep .palette{position:absolute;top:130px!important;z-index:100}::ng-deep .background-color-picker{left:0!important}::ng-deep .color-picker{left:60px!important}::ng-deep .format-select.font-type{width:109px}::ng-deep .format-select.font-type ::ng-deep .dropdown-menu{width:109px!important;top:60px!important;left:0!important}::ng-deep .format-select.font-size{width:81px}::ng-deep .format-select.font-size ::ng-deep .dropdown-menu{width:81px!important;top:60px!important;left:109px!important}::ng-deep .format-select .select{width:unset!important;height:60px!important;line-height:60px}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUNMLGVBQWUsRUFFZixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixlQUFlLEVBQ2YsWUFBWSxFQUNaLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsVUFBVSxFQUNWLHFCQUFxQixFQUNyQixjQUFjLEVBQ2QsUUFBUSxFQUNSLGdCQUFnQixFQUNoQixlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLGFBQWEsRUFDYixrQkFBa0IsRUFDbkIsTUFBTSwrQ0FBK0MsQ0FBQztBQUV2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7TUFDM0IsQ0FBQyxHQUFHLE1BQU07QUFPaEIsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7OztJQXVCN0IsWUFBb0IsY0FBNkIsRUFDN0IsYUFBMkIsRUFDbkMsYUFBa0MsRUFDbEMsa0JBQXNDLEVBQ3RDLGVBQWdDLEVBQ3hCLGNBQTZCLEVBQzdCLGtCQUFxQyxFQUNyQyxzQkFBNkMsRUFDN0MsZUFBK0IsRUFDL0IsaUJBQW1DLEVBQ25DLFlBQTZCLEVBQzdCLG1CQUF1QyxFQUN2QyxtQkFBdUM7UUFadkMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFJM0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtR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Ozs7SUFDM0MsMENBQXFDOzs7OztJQUNyQyxpREFBK0M7Ozs7O0lBQy9DLGlEQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFZGl0b3JTZXJ2aWNlfSBmcm9tIFwiLi9lZGl0b3Iuc2VydmljZVwiO1xuaW1wb3J0IHtcbiAgRmlsZURlc2NyaXB0aW9uLFxuICBGaWxlTW9kZWwsXG4gIE1vZGFsU2VydmljZSxcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICBQYXNzd29yZFNlcnZpY2UsXG4gIEZpbGVDcmVkZW50aWFscyxcbiAgQ29tbW9uTW9kYWxzLFxuICBQYWdlTW9kZWwsXG4gIEZvcm1hdHRpbmdTZXJ2aWNlLFxuICBGb3JtYXR0aW5nLFxuICBCYWNrRm9ybWF0dGluZ1NlcnZpY2UsXG4gIE9uQ2xvc2VTZXJ2aWNlLFxuICBTYXZlRmlsZSxcbiAgU2VsZWN0aW9uU2VydmljZSxcbiAgRWRpdEh0bWxTZXJ2aWNlLFxuICBSZW5kZXJQcmludFNlcnZpY2UsXG4gIFdpbmRvd1NlcnZpY2UsXG4gIExvYWRpbmdNYXNrU2VydmljZSwgT3B0aW9uXG59IGZyb20gJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XG5pbXBvcnQge0VkaXRvckNvbmZpZ30gZnJvbSBcIi4vZWRpdG9yLWNvbmZpZ1wiO1xuaW1wb3J0IHtFZGl0b3JDb25maWdTZXJ2aWNlfSBmcm9tIFwiLi9lZGl0b3ItY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xuY29uc3QgJCA9IGpxdWVyeTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtZWRpdG9yLWFuZ3VsYXItcm9vdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0b3ItYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZWRpdG9yLWFwcC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRvckFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCAge1xuICB0aXRsZSA9ICdlZGl0b3InO1xuICBmaWxlczogRmlsZU1vZGVsW10gPSBbXTtcbiAgZmlsZTogRmlsZURlc2NyaXB0aW9uO1xuICBlZGl0b3JDb25maWc6IEVkaXRvckNvbmZpZztcbiAgZm9ybWF0RGlzYWJsZWQgPSAhdGhpcy5maWxlO1xuICBkb3dubG9hZERpc2FibGVkID0gdHJ1ZTtcbiAgY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscztcbiAgYnJvd3NlRmlsZXNNb2RhbCA9IENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcztcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xuICBmb3JtYXR0aW5nOiBGb3JtYXR0aW5nID0gRm9ybWF0dGluZy5kZWZhdWx0KCk7XG4gIGZvbnRTaXplT3B0aW9ucyA9IEZvcm1hdHRpbmdTZXJ2aWNlLmdldEZvbnRTaXplT3B0aW9ucygpO1xuICBmb250T3B0aW9ucyA9IEZvcm1hdHRpbmdTZXJ2aWNlLmdldEZvbnRPcHRpb25zKCk7XG4gIGJnQ29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gIGNvbG9yUGlja2VyU2hvdyA9IGZhbHNlO1xuICBhY3RpdmUgPSBmYWxzZTtcbiAgcHVibGljIHRleHRCYWNrdXA6IHN0cmluZztcbiAgcHJpdmF0ZSBpc0lFID0gZmFsc2U7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgZmlsZVdhc0Ryb3BwZWQ6IGZhbHNlO1xuICBzZWxlY3RGb250U2hvdyA9IGZhbHNlO1xuICBzZWxlY3RGb250U2l6ZVNob3cgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lZGl0b3JTZXJ2aWNlOiBFZGl0b3JTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgY29uZmlnU2VydmljZTogRWRpdG9yQ29uZmlnU2VydmljZSxcbiAgICAgICAgICAgICAgdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHBhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9mb3JtYXR0aW5nU2VydmljZTogRm9ybWF0dGluZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2JhY2tGb3JtYXR0aW5nU2VydmljZTogQmFja0Zvcm1hdHRpbmdTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9vbkNsb3NlU2VydmljZTogT25DbG9zZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NlbGVjdGlvblNlcnZpY2U6IFNlbGVjdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2h0bWxTZXJ2aWNlOiBFZGl0SHRtbFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlclByaW50U2VydmljZTogUmVuZGVyUHJpbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2FkaW5nTWFza1NlcnZpY2U6IExvYWRpbmdNYXNrU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5pc0lFID0gLypAY2Nfb24hQCovZmFsc2UgfHwgISEvKE1TSUV8VHJpZGVudFxcL3xFZGdlXFwvKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgY29uZmlnU2VydmljZS51cGRhdGVkQ29uZmlnLnN1YnNjcmliZSgoZWRpdG9yQ29uZmlnKSA9PiB7XG4gICAgICB0aGlzLmVkaXRvckNvbmZpZyA9IGVkaXRvckNvbmZpZztcbiAgICB9KTtcblxuICAgIHVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xuICAgICAgaWYgKHVwbG9hZHMpIHtcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHVwbG9hZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLl9lZGl0b3JTZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oaSksICcnLCB0aGlzLmVkaXRvckNvbmZpZy5yZXdyaXRlKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID8gdGhpcy5zZWxlY3RGaWxlKG9iai5ndWlkLCAnJywgJycpIDogdGhpcy5zZWxlY3REaXIoJycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYXNzd29yZFNlcnZpY2UucGFzc0NoYW5nZS5zdWJzY3JpYmUoKHBhc3M6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuY3JlZGVudGlhbHMuZ3VpZCwgcGFzcywgQ29tbW9uTW9kYWxzLlBhc3N3b3JkUmVxdWlyZWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Qm9sZENoYW5nZS5zdWJzY3JpYmUoKGJvbGQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5ib2xkID0gYm9sZDtcbiAgICB9KTtcbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0SXRhbGljQ2hhbmdlLnN1YnNjcmliZSgoaXRhbGljOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuaXRhbGljID0gaXRhbGljO1xuICAgIH0pO1xuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRVbmRlcmxpbmVDaGFuZ2Uuc3Vic2NyaWJlKCh1bmRlcmxpbmU6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy51bmRlcmxpbmUgPSB1bmRlcmxpbmU7XG4gICAgfSk7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdENvbG9yQ2hhbmdlLnN1YnNjcmliZSgoY29sb3I6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmNvbG9yID0gY29sb3I7XG4gICAgfSk7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEJnQ29sb3JDaGFuZ2Uuc3Vic2NyaWJlKChiZ2NvbG9yOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5iZ0NvbG9yID0gYmdjb2xvcjtcbiAgICB9KTtcbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Rm9udFNpemVDaGFuZ2Uuc3Vic2NyaWJlKChmb250U2l6ZTogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuZm9udFNpemUgPSBmb250U2l6ZTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRGb250Q2hhbmdlLnN1YnNjcmliZSgoZm9udDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuZm9udCA9IGZvbnQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0U3RyaWtlb3V0Q2hhbmdlLnN1YnNjcmliZSgoc3RyaWtlb3V0OiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuc3RyaWtlb3V0ID0gc3RyaWtlb3V0O1xuICAgIH0pO1xuXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEFsaWduQ2hhbmdlLnN1YnNjcmliZSgoYWxpZ246IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmFsaWduID0gYWxpZ247XG4gICAgfSk7XG5cbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0TGlzdENoYW5nZS5zdWJzY3JpYmUoKGxpc3Q6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmxpc3QgPSBsaXN0O1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Qm9sZENoYW5nZS5zdWJzY3JpYmUoKGJvbGQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5ib2xkID0gYm9sZDtcbiAgICB9KTtcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRJdGFsaWNDaGFuZ2Uuc3Vic2NyaWJlKChpdGFsaWM6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5pdGFsaWMgPSBpdGFsaWM7XG4gICAgfSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0VW5kZXJsaW5lQ2hhbmdlLnN1YnNjcmliZSgodW5kZXJsaW5lOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcudW5kZXJsaW5lID0gdW5kZXJsaW5lO1xuICAgIH0pO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdENvbG9yQ2hhbmdlLnN1YnNjcmliZSgoY29sb3I6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmNvbG9yID0gY29sb3I7XG4gICAgfSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0QmdDb2xvckNoYW5nZS5zdWJzY3JpYmUoKGJnY29sb3I6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmJnQ29sb3IgPSBiZ2NvbG9yO1xuICAgIH0pO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEZvbnRTaXplQ2hhbmdlLnN1YnNjcmliZSgoZm9udFNpemU6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRGb250Q2hhbmdlLnN1YnNjcmliZSgoZm9udDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuZm9udCA9IGZvbnQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRTdHJpa2VvdXRDaGFuZ2Uuc3Vic2NyaWJlKChzdHJpa2VvdXQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5zdHJpa2VvdXQgPSBzdHJpa2VvdXQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRBbGlnbkNoYW5nZS5zdWJzY3JpYmUoKGFsaWduOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5hbGlnbiA9IGFsaWduO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0TGlzdENoYW5nZS5zdWJzY3JpYmUoKGxpc3Q6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmxpc3QgPSBsaXN0O1xuICAgIH0pO1xuXG4gICAgdGhpcy5faHRtbFNlcnZpY2UuaHRtbENvbnRlbnQuc3Vic2NyaWJlKCh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh0aGlzLmZpbGUgJiYgdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICAgIHRoaXMudGV4dEJhY2t1cCA9IHRleHQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5lZGl0b3JDb25maWcuZGVmYXVsdERvY3VtZW50ICE9PSBcIlwiKXtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLmVkaXRvckNvbmZpZy5kZWZhdWx0RG9jdW1lbnQsIFwiXCIsIFwiXCIpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9sb2FkaW5nTWFza1NlcnZpY2VcbiAgICAub25Mb2FkaW5nQ2hhbmdlZFxuICAgIC5zdWJzY3JpYmUoKGxvYWRpbmc6IGJvb2xlYW4pID0+IHRoaXMuaXNMb2FkaW5nID0gbG9hZGluZyk7XG4gIH1cblxuICBnZXQgcmV3cml0ZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JDb25maWcgPyB0aGlzLmVkaXRvckNvbmZpZy5yZXdyaXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBkb3dubG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JDb25maWcgPyB0aGlzLmVkaXRvckNvbmZpZy5kb3dubG9hZCA6IHRydWU7XG4gIH1cblxuICBnZXQgdXBsb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVkaXRvckNvbmZpZyA/IHRoaXMuZWRpdG9yQ29uZmlnLnVwbG9hZCA6IHRydWU7XG4gIH1cblxuICBnZXQgcHJpbnRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yQ29uZmlnID8gdGhpcy5lZGl0b3JDb25maWcucHJpbnQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JDb25maWcgPyB0aGlzLmVkaXRvckNvbmZpZy5icm93c2UgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGVuYWJsZVJpZ2h0Q2xpY2tDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yQ29uZmlnID8gdGhpcy5lZGl0b3JDb25maWcuZW5hYmxlUmlnaHRDbGljayA6IHRydWU7XG4gIH1cblxuICBnZXQgcGFnZVNlbGVjdG9yQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVkaXRvckNvbmZpZyA/IHRoaXMuZWRpdG9yQ29uZmlnLnBhZ2VTZWxlY3RvciA6IHRydWU7XG4gIH1cblxuICBnZXQgY3JlYXRlTmV3RmlsZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JDb25maWcgPyB0aGlzLmVkaXRvckNvbmZpZy5jcmVhdGVOZXdGaWxlIDogdHJ1ZTtcbiAgfVxuXG4gIG9wZW5Nb2RhbChpZDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZmlsZSkge1xuICAgICAgdGhpcy5maWxlLnBhZ2VzWzBdLmVkaXRhYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKGlkKTtcbiAgfVxuXG4gIG9wZW5TYXZlKCkge1xuICAgIGlmICghdGhpcy5mb3JtYXREaXNhYmxlZCkge1xuICAgICAgdGhpcy5vcGVuTW9kYWwoQ29tbW9uTW9kYWxzLkNyZWF0ZURvY3VtZW50KTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lZGl0b3JTZXJ2aWNlLmxvYWRGaWxlcygkZXZlbnQpLnN1YnNjcmliZSgoZmlsZXM6IEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xuICB9XG5cbiAgcHJpdmF0ZSBwdFRvUHgocHQ6IG51bWJlcikge1xuICAgIC8vcHQgKiA5NiAvIDcyID0gcHguXG4gICAgcmV0dXJuIHB0ICogOTYgLyA3MjtcbiAgfVxuXG4gIG9uUmlnaHRDbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5lbmFibGVSaWdodENsaWNrQ29uZmlnO1xuICB9XG5cbiAgY3JlYXRlRmlsZSgpIHtcbiAgICB0aGlzLmZpbGUgPSBuZXcgRmlsZURlc2NyaXB0aW9uKCk7XG4gICAgY29uc3QgcGFnZSA9IG5ldyBQYWdlTW9kZWw7XG4gICAgcGFnZS53aWR0aCA9IDU5NTtcbiAgICBwYWdlLmhlaWdodCA9IDg0MjtcbiAgICBwYWdlLmRhdGEgPSAnPCFET0NUWVBFIEhUTUw+PGh0bWw+PGhlYWQ+PG1ldGEgaHR0cC1lcXVpdj1cImNvbnRlbnQtdHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIj48L2hlYWQ+PGJvZHk+PC9ib2R5PjwvaHRtbD4nO1xuICAgIHBhZ2UubnVtYmVyID0gMTtcbiAgICBwYWdlLmVkaXRhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmZpbGUucGFnZXMgPSBbXTtcbiAgICB0aGlzLmZpbGUucGFnZXMucHVzaChwYWdlKTtcbiAgICB0aGlzLmZpbGUuZ3VpZCA9IFwibmV3IGRvY3VtZW50LmRvY3hcIjtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gbmV3IEZpbGVDcmVkZW50aWFscyhcIm5ldyBkb2N1bWVudC5kb2N4XCIsIFwiXCIpO1xuICAgIHRoaXMuZm9ybWF0RGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRvd25sb2FkRGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgc2VsZWN0RmlsZSgkZXZlbnQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgbW9kYWxJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG5ldyBGaWxlQ3JlZGVudGlhbHMoJGV2ZW50LCBwYXNzd29yZCk7XG4gICAgdGhpcy5fZWRpdG9yU2VydmljZS5sb2FkRmlsZSh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGZpbGU6IEZpbGVEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICB0aGlzLmxvYWRGaWxlKGZpbGUpO1xuICAgICAgICBjb25zdCBpc0lFID0gLypAY2Nfb24hQCovZmFsc2UgfHwgISEvKE1TSUV8VHJpZGVudFxcL3xFZGdlXFwvKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICAgIGlmKGlzSUUpIHtcbiAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgIGlmKCQoXCIuZG9jdW1lbnRNYWluQ29udGVudFwiKS5sZW5ndGggPiAwICl7XG4gICAgICAgICAgICAgICQoXCIuZG9jdW1lbnRNYWluQ29udGVudFwiKS5hdHRyKFwiY29udGVudEVkaXRhYmxlXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIHthdHRyaWJ1dGVzOiBmYWxzZSwgY2hpbGRMaXN0OiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiBmYWxzZSwgc3VidHJlZTogdHJ1ZX0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLmNsZWFyRGF0YSgpO1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShtb2RhbElkKTtcbiAgfVxuXG4gIGZpbGVEcm9wcGVkKCRldmVudCl7XG4gICAgdGhpcy5maWxlV2FzRHJvcHBlZCA9ICRldmVudDtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZEZpbGUoZmlsZTogRmlsZURlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICBpZiAodGhpcy5maWxlICYmIHRoaXMuZmlsZS5wYWdlc1swXSkge1xuICAgICAgdGhpcy5maWxlLnBhZ2VzWzBdLmVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZmlsZS5wYWdlc1swXS53aWR0aCA9IDU5NTtcbiAgICAgIHRoaXMuZmlsZS5wYWdlc1swXS5oZWlnaHQgPSA4NDI7XG4gICAgICB0aGlzLnRleHRCYWNrdXAgPSB0aGlzLmZpbGUucGFnZXNbMF0uZGF0YTtcbiAgICB9XG4gICAgdGhpcy5mb3JtYXREaXNhYmxlZCA9ICF0aGlzLmZpbGU7XG4gICAgdGhpcy5kb3dubG9hZERpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRGF0YSgpIHtcbiAgICBpZiAoIXRoaXMuZmlsZSB8fCAhdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGFnZSBvZiB0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgIHBhZ2UuZGF0YSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fZWRpdG9yU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RGb250U2l6ZSgkZXZlbnQ6IE9wdGlvbikge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgICQoXCIuZ2Qtd3JhcHBlclwiKS5vZmYoXCJrZXl1cFwiKTtcbiAgICBpZih0aGlzLmlzSUUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEZvbnRTaXplKCRldmVudC52YWx1ZSk7XG4gICAgJChcIi5nZC13cmFwcGVyXCIpLm9uKFwia2V5dXBcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgZm9udEVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb250XCIpO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGZvbnRFbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICBpZiAoZm9udEVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZSgnc2l6ZScpID09PSBcIjdcIikge1xuICAgICAgICAgIGZvbnRFbGVtZW50c1tpXS5yZW1vdmVBdHRyaWJ1dGUoXCJzaXplXCIpO1xuICAgICAgICAgIGZvbnRFbGVtZW50c1tpXS5zdHlsZS5mb250U2l6ZSA9ICRldmVudCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0Rm9udCgkZXZlbnQ6IE9wdGlvbikge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYodGhpcy5pc0lFKSB7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKTtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRGb250KCRldmVudC52YWx1ZSk7XG4gIH1cblxuICB0b2dnbGVDb2xvclBpY2tlcigkZXZlbnQsIGJnOiBib29sZWFuKSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKHRoaXMuaXNJRSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgaWYgKGJnKSB7XG4gICAgICB0aGlzLmJnQ29sb3JQaWNrZXJTaG93ID0gIXRoaXMuYmdDb2xvclBpY2tlclNob3c7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyU2hvdyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyU2hvdyA9ICF0aGlzLmNvbG9yUGlja2VyU2hvdztcbiAgICAgIHRoaXMuYmdDb2xvclBpY2tlclNob3cgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVGb250U2VsZWN0KCRldmVudCwgaXNGb250TmFtZTogYm9vbGVhbikge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoaXNGb250TmFtZSkge1xuICAgICAgdGhpcy5zZWxlY3RGb250U2hvdyA9ICF0aGlzLnNlbGVjdEZvbnRTaG93O1xuICAgICAgdGhpcy5zZWxlY3RGb250U2l6ZVNob3cgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RGb250U2l6ZVNob3cgPSAhdGhpcy5zZWxlY3RGb250U2l6ZVNob3c7XG4gICAgICB0aGlzLnNlbGVjdEZvbnRTaG93ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0Q29sb3IoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICBpZih0aGlzLmlzSUUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmJnQ29sb3JQaWNrZXJTaG93KSB7XG4gICAgICB0aGlzLmJnQ29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gICAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRCZ0NvbG9yKCRldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gICAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRDb2xvcigkZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUJvbGQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmKHRoaXMuaXNJRSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0Qm9sZCghdGhpcy5mb3JtYXR0aW5nLmJvbGQpO1xuICB9XG5cbiAgdG9nZ2xlVW5kbygpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLlVuZG8oKTtcbiAgfVxuXG4gIHRvZ2dsZVJlZG8oKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5SZWRvKCk7XG4gIH1cblxuICB0b2dnbGVJdGFsaWMoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmKHRoaXMuaXNJRSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0SXRhbGljKCF0aGlzLmZvcm1hdHRpbmcuaXRhbGljKTtcbiAgfVxuXG4gIHRvZ2dsZVVuZGVybGluZShldmVudCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYodGhpcy5pc0lFKSB7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKTtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRVbmRlcmxpbmUoIXRoaXMuZm9ybWF0dGluZy51bmRlcmxpbmUpO1xuICB9XG5cbiAgaGlkZUFsbCgkZXZlbnQpIHtcbiAgICBpZiAoKCRldmVudC50YXJnZXQucGFyZW50RWxlbWVudCAmJiAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddICYmXG4gICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddLnZhbHVlID09PSAnYnV0dG9uJykgfHxcbiAgICAgICgkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJlxuICAgICAgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddICYmXG4gICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10udmFsdWUgPT09ICdidXR0b24nKSkge1xuXG4gICAgICB0aGlzLl9vbkNsb3NlU2VydmljZS5jbG9zZSh0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSBmYWxzZTtcbiAgICB0aGlzLmJnQ29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gICAgdGhpcy5fb25DbG9zZVNlcnZpY2UuY2xvc2UodHJ1ZSk7XG4gIH1cblxuICB0b2dnbGVTdHJpa2VvdXQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmKHRoaXMuaXNJRSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0U3RyaWtlb3V0KCF0aGlzLmZvcm1hdHRpbmcuc3RyaWtlb3V0KTtcbiAgfVxuXG4gIHRvZ2dsZUFsaWduKGFsaWduOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChhbGlnbiA9PT0gdGhpcy5mb3JtYXR0aW5nLmFsaWduKSB7XG4gICAgICBhbGlnbiA9ICdmdWxsJztcbiAgICB9XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0QWxpZ24oYWxpZ24pO1xuICAgIHRoaXMuZm9ybWF0dGluZy5hbGlnbiA9IGFsaWduO1xuICB9XG5cbiAgdG9nZ2xlTGlzdChsaXN0OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKGxpc3QgPT09IHRoaXMuZm9ybWF0dGluZy5saXN0KSB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcubGlzdCA9IFwiXCI7XG4gICAgICAvLyB0byB0cmlnZ2VyIGNoYW5nZXMgaW4gY29udGVudEVkaXRhYmxlXG4gICAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRMaXN0KGxpc3QpO1xuICAgICAgLy8gdG8gY2xlYXIgdGhlIHRvZ2dsZSBzdGF0dXMgb2YgdGhlIGJ1dHRvbiBvbmx5XG4gICAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRMaXN0KFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcubGlzdCA9IGxpc3Q7XG4gICAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRMaXN0KGxpc3QpO1xuICAgIH1cbiAgICBpZih0aGlzLmlzSUUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgZG93bmxvYWRGaWxlKCkge1xuICAgIGlmICh0aGlzLmRvd25sb2FkRGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLl9lZGl0b3JTZXJ2aWNlLmdldERvd25sb2FkVXJsKHRoaXMuY3JlZGVudGlhbHMpKTtcbiAgfVxuXG4gIHNhdmUoKXtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBpZih0aGlzLmNyZWRlbnRpYWxzKSB7XG4gICAgICBpZiAodGhpcy5maWxlLmd1aWQgPT09IFwibmV3IGRvY3VtZW50LmRvY3hcIikge1xuICAgICAgICB0aGlzLm9wZW5Nb2RhbChDb21tb25Nb2RhbHMuQ3JlYXRlRG9jdW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zYXZlRmlsZSh0aGlzLmNyZWRlbnRpYWxzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuIHNhdmVGaWxlKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcbiAgICBpZiAoIXRoaXMuZmlsZSB8fCAhdGhpcy5maWxlLnBhZ2VzKVxuICAgICAgcmV0dXJuO1xuICAgICAgXG4gICAgdGhpcy50ZXh0QmFja3VwID0gdGhpcy5nZXRQYWdlV2l0aFJvb3RUYWdzKHRoaXMudGV4dEJhY2t1cCk7XG5cbiAgICBjb25zdCBzYXZlRmlsZSA9IG5ldyBTYXZlRmlsZShjcmVkZW50aWFscy5ndWlkLCBjcmVkZW50aWFscy5wYXNzd29yZCwgdGhpcy50ZXh0QmFja3VwKTtcbiAgICB0aGlzLl9lZGl0b3JTZXJ2aWNlLnNhdmUoc2F2ZUZpbGUpLnN1YnNjcmliZSgobG9hZEZpbGU6IEZpbGVEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgdGhpcy5sb2FkRmlsZShsb2FkRmlsZSk7XG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gbmV3IEZpbGVDcmVkZW50aWFscyhsb2FkRmlsZS5ndWlkLCBjcmVkZW50aWFscy5wYXNzd29yZCk7XG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuT3BlcmF0aW9uU3VjY2Vzcyk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRQYWdlV2l0aFJvb3RUYWdzKGRhdGEpIHtcbiAgICBsZXQgcmVzdWx0RGF0YSA9IFwiPGh0bWw+PGhlYWQ+XCIgKyBkYXRhICsgXCI8L2JvZHk+PC9odG1sPlwiO1xuICAgIHJlc3VsdERhdGEgPSByZXN1bHREYXRhLnJlcGxhY2UoJzxkaXYgY2xhc3M9XCJkb2N1bWVudE1haW5Db250ZW50XCI+JywgJzwvaGVhZD48Ym9keT48ZGl2IGNsYXNzPVwiZG9jdW1lbnRNYWluQ29udGVudFwiPicpO1xuICAgIHJldHVybiByZXN1bHREYXRhO1xuICB9XG5cbiAgcHJpbnRGaWxlKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGlmKHRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgY29uc3QgcGFnZSA9IG5ldyBQYWdlTW9kZWw7XG4gICAgICBwYWdlLndpZHRoID0gNTk1O1xuICAgICAgcGFnZS5oZWlnaHQgPSA4NDI7XG4gICAgICAvLyB1c2luZyBvZiB0aGUgcmVwbGFjZSBpcyByZXF1aXJlZCB0byBmaXggaXNzdWUgd2l0aCBwYWRkaW5nIGZvciBpbnRpcmUgcHJpbnQgY29udGVudFxuICAgICAgcGFnZS5kYXRhID0gdGhpcy50ZXh0QmFja3VwLnJlcGxhY2UoJzwvc3R5bGU+JywgJ2JvZHkgeyBwYWRkaW5nOiA5NnB4OyB9IDwvc3R5bGU+Jyk7XG4gICAgICBjb25zdCBwcmludEh0bWwgPSBbcGFnZV07XG4gICAgICB0aGlzLl9yZW5kZXJQcmludFNlcnZpY2UuY2hhbmdlUGFnZXMocHJpbnRIdG1sKTtcbiAgICB9XG4gIH1cblxuICBvbkNsb3NlTW9kYWwoJGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZmlsZSAmJiAkZXZlbnQpIHtcbiAgICAgIGlmKHRoaXMuaXNJRSkge1xuICAgICAgICAkKFwiLmRvY3VtZW50TWFpbkNvbnRlbnRcIikuYXR0cihcImNvbnRlbnRFZGl0YWJsZVwiLCBcInRydWVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZpbGUucGFnZXNbMF0uZWRpdGFibGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XG4gICAgfVxuICB9XG59XG4iXX0=