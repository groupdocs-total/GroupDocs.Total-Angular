/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { EditorService } from "./editor.service";
import { FileDescription, ModalService, UploadFilesService, PasswordService, FileCredentials, CommonModals, PageModel, FormattingService, Formatting, BackFormattingService, OnCloseService, SaveFile, SelectionService, EditHtmlService, RenderPrintService, WindowService, LoadingMaskService, } from "@groupdocs.examples.angular/common-components";
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
        this.formatting = Formatting.DEFAULT;
        this.fontSizeOptions = FormattingService.getFontSizeOptions();
        this.fontOptions = FormattingService.getFontOptions();
        this.bgColorPickerShow = false;
        this.colorPickerShow = false;
        this.active = false;
        this.isIE = false;
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
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\" (click)=\"hideAll($event)\">\n  <gd-tabbed-toolbars>\n    <gd-tabs>\n      <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\n        <gd-top-toolbar class=\"toolbar-panel\" [leftOffset]=\"false\">\n          <gd-button [icon]=\"'file'\" [tooltip]=\"'Create document'\" (click)=\"createFile()\"\n                     *ngIf=\"createNewFileConfig\"></gd-button>\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                     *ngIf=\"browseConfig\"></gd-button>\n          <gd-button [disabled]=\"downloadDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                     (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                     *ngIf=\"printConfig\" ></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save File'\" (click)=\"save()\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'pencil-alt'\" [iconClass]=\"'save-as-button-icon'\" [tooltip]=\"'Save File As'\" (click)=\"openSave()\">\n            <fa-icon [icon]=\"['fas','save']\" class=\"save-button\" size=\"xs\"></fa-icon>\n          </gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab [tabTitle]=\"'Formatting'\" [icon]=\"'edit'\" [id]=\"'2'\">\n        <gd-top-toolbar class=\"toolbar-panel\" [leftOffset]=\"false\">\n\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Undo'\"\n                     (click)=\"toggleUndo()\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Redo'\"\n                     (click)=\"toggleRedo()\"></gd-button>\n          <gd-select class=\"format-select\" [disabled]=\"formatDisabled\" [options]=\"fontOptions\"\n                     (selected)=\"selectFont($event)\"\n                     [showSelected]=\"formatting.font\"></gd-select>\n          <gd-select class=\"format-select\" [disabled]=\"formatDisabled\" [options]=\"fontSizeOptions\"\n                     (selected)=\"selectFontSize($event)\"\n                     [showSelected]=\"formatting.fontSize + 'px'\"></gd-select>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'bold'\" [tooltip]=\"'Bold'\"\n                     (click)=\"toggleBold($event)\" [toggle]=\"formatting.bold\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'italic'\" [tooltip]=\"'Italic'\"\n                     (click)=\"toggleItalic($event)\" [toggle]=\"formatting.italic\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'underline'\" [tooltip]=\"'Underline'\"\n                     (click)=\"toggleUnderline($event)\" [toggle]=\"formatting.underline\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'strikethrough'\" [tooltip]=\"'Strike out'\"\n                     (click)=\"toggleStrikeout($event)\" [toggle]=\"formatting.strikeout\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-center'\" [tooltip]=\"'Align center'\"\n                     (click)=\"toggleAlign('center')\" [toggle]=\"formatting.align == 'center' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-justify'\" [tooltip]=\"'Align full'\"\n                     (click)=\"toggleAlign('full')\" [toggle]=\"formatting.align == 'full' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-right'\" [tooltip]=\"'Align right'\"\n                     (click)=\"toggleAlign('right')\" [toggle]=\"formatting.align == 'right' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-left'\" [tooltip]=\"'Align left'\"\n                     (click)=\"toggleAlign('left')\" [toggle]=\"formatting.align == 'left' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ul'\" [tooltip]=\"'Add Unordered List'\"\n                     (click)=\"toggleList('unordered')\" [toggle]=\"formatting.list == 'unordered' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ol'\" [tooltip]=\"'Add Ordered List'\"\n                     (click)=\"toggleList('ordered')\" [toggle]=\"formatting.list == 'ordered' ? true : false\"></gd-button>\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'fill'\" [tooltip]=\"'Background color'\"\n                     (click)=\"toggleColorPicker(true)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.bgColor\"></div>\n          </gd-button>\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'font'\" [tooltip]=\"'Color'\" (click)=\"toggleColorPicker(false)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.color\"></div>\n          </gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n    </gd-tabs>\n  </gd-tabbed-toolbars>\n  <gd-color-picker *ngIf=\"bgColorPickerShow || colorPickerShow\"\n                   [className]=\"'palette ' + (bgColorPickerShow ? 'background-color-picker' : 'color-picker')\"\n                   (selectedColor)=\"selectColor($event)\"></gd-color-picker>\n  <div class=\"doc-panel\" *ngIf=\"file\">\n\n    <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"true\" [htmlMode]=\"true\"\n                 [preloadPageCount]=\"0\" gdFormatting gdRenderPrint>\n\n    </gd-document>\n\n  </div>\n  <gd-init-state [icon]=\"'pen'\" [text]=\"''\" *ngIf=\"!file\"></gd-init-state>\n  <gd-browse-files-modal\n    (closing)=\"onCloseModal($event)\"\n    (urlForUpload)=\"upload($event)\"\n    [files]=\"files\"\n    (selectedDirectory)=\"selectDir($event)\"\n    (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n    [uploadConfig]=\"uploadConfig\"\n  ></gd-browse-files-modal>\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-create-document-modal (closing)=\"onCloseModal($event)\" [file]=\"credentials\" (savingFile)=\"saveFile($event)\"></gd-create-document-modal>\n  <gd-success-modal></gd-success-modal>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.current-page-number{margin:0 15px;font-size:14px;color:#959da5}*{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:text}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:flex;height:inherit}.gd-document{width:100%;height:calc(100% - 90px)}.top-panel{display:flex;align-items:center;width:100%}.toolbar-panel{width:100%}/deep/ .gd-wrapper{padding:96px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;outline:0}/deep/ .dropdown-menu{min-width:unset!important}.format-select{margin:0 15px}.palette{position:absolute;top:90px;z-index:100}.background-color-picker{left:700px}.color-picker{left:750px}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}/deep/ .button.inactive{color:#ccc!important}/deep/ .gd-editor-buttons .button .tooltip{margin-top:45px;margin-left:-36px}/deep/ .gd-edit.active{background-color:#7e8991;border-radius:5px}/deep/ .gd-edit.active i{color:#fff}/deep/ .page{width:800px}/deep/ .save-as-button-icon{font-size:11px;left:22px!important;top:13px!important}.save-button{position:absolute;top:-5px;left:21px}@media (max-width:480px){/deep/ .panzoom{zoom:.4;margin-top:160px}}"]
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
    /**
     * @type {?}
     * @private
     */
    EditorAppComponent.prototype.textBackup;
    /**
     * @type {?}
     * @private
     */
    EditorAppComponent.prototype.isIE;
    /** @type {?} */
    EditorAppComponent.prototype.isLoading;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUNMLGVBQWUsRUFFZixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixlQUFlLEVBQ2YsWUFBWSxFQUNaLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsVUFBVSxFQUNWLHFCQUFxQixFQUNyQixjQUFjLEVBQ2QsUUFBUSxFQUNSLGdCQUFnQixFQUNoQixlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLGFBQWEsRUFDYixrQkFBa0IsR0FDbkIsTUFBTSwrQ0FBK0MsQ0FBQztBQUV2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7TUFDM0IsQ0FBQyxHQUFHLE1BQU07QUFPaEIsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7OztJQW9CN0IsWUFBb0IsY0FBNkIsRUFDN0IsYUFBMkIsRUFDbkMsYUFBa0MsRUFDbEMsa0JBQXNDLEVBQ3RDLGVBQWdDLEVBQ3hCLGNBQTZCLEVBQzdCLGtCQUFxQyxFQUNyQyxzQkFBNkMsRUFDN0MsZUFBK0IsRUFDL0IsaUJBQW1DLEVBQ25DLFlBQTZCLEVBQzdCLG1CQUF1QyxFQUN2QyxtQkFBdUM7UUFadkMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFJM0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtR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O1lBSW5CLFlBQVk7WUFrQk4sbUJBQW1CO1lBakJ6QixrQkFBa0I7WUFDbEIsZUFBZTtZQVlmLGFBQWE7WUFSYixpQkFBaUI7WUFFakIscUJBQXFCO1lBQ3JCLGNBQWM7WUFFZCxnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLGtCQUFrQjtZQUVsQixrQkFBa0I7Ozs7SUFhbEIsbUNBQWlCOztJQUNqQixtQ0FBd0I7O0lBQ3hCLGtDQUFzQjs7SUFDdEIsMENBQTJCOztJQUMzQiw0Q0FBNEI7O0lBQzVCLDhDQUF3Qjs7SUFDeEIseUNBQTZCOztJQUM3Qiw4Q0FBNEM7O0lBQzVDLHVDQUFtQjs7SUFDbkIsd0NBQTRDOztJQUM1Qyw2Q0FBeUQ7O0lBQ3pELHlDQUFpRDs7SUFDakQsK0NBQTBCOztJQUMxQiw2Q0FBd0I7O0lBQ3hCLG9DQUFlOzs7OztJQUNmLHdDQUEyQjs7Ozs7SUFDM0Isa0NBQXFCOztJQUNyQix1Q0FBbUI7Ozs7O0lBRVAsNENBQXFDOzs7OztJQUNyQywyQ0FBbUM7Ozs7O0lBSW5DLDRDQUFxQzs7Ozs7SUFDckMsZ0RBQTZDOzs7OztJQUM3QyxvREFBcUQ7Ozs7O0lBQ3JELDZDQUF1Qzs7Ozs7SUFDdkMsK0NBQTJDOzs7OztJQUMzQywwQ0FBcUM7Ozs7O0lBQ3JDLGlEQUErQzs7Ozs7SUFDL0MsaURBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEFmdGVyVmlld0luaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFZGl0b3JTZXJ2aWNlfSBmcm9tIFwiLi9lZGl0b3Iuc2VydmljZVwiO1xuaW1wb3J0IHtcbiAgRmlsZURlc2NyaXB0aW9uLFxuICBGaWxlTW9kZWwsXG4gIE1vZGFsU2VydmljZSxcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICBQYXNzd29yZFNlcnZpY2UsXG4gIEZpbGVDcmVkZW50aWFscyxcbiAgQ29tbW9uTW9kYWxzLFxuICBQYWdlTW9kZWwsXG4gIEZvcm1hdHRpbmdTZXJ2aWNlLFxuICBGb3JtYXR0aW5nLFxuICBCYWNrRm9ybWF0dGluZ1NlcnZpY2UsXG4gIE9uQ2xvc2VTZXJ2aWNlLFxuICBTYXZlRmlsZSxcbiAgU2VsZWN0aW9uU2VydmljZSxcbiAgRWRpdEh0bWxTZXJ2aWNlLFxuICBSZW5kZXJQcmludFNlcnZpY2UsXG4gIFdpbmRvd1NlcnZpY2UsXG4gIExvYWRpbmdNYXNrU2VydmljZSxcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtFZGl0b3JDb25maWd9IGZyb20gXCIuL2VkaXRvci1jb25maWdcIjtcbmltcG9ydCB7RWRpdG9yQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vZWRpdG9yLWNvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWVkaXRvci1hbmd1bGFyLXJvb3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdG9yLWFwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VkaXRvci1hcHAuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFZGl0b3JBcHBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0ICB7XG4gIHRpdGxlID0gJ2VkaXRvcic7XG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xuICBmaWxlOiBGaWxlRGVzY3JpcHRpb247XG4gIGVkaXRvckNvbmZpZzogRWRpdG9yQ29uZmlnO1xuICBmb3JtYXREaXNhYmxlZCA9ICF0aGlzLmZpbGU7XG4gIGRvd25sb2FkRGlzYWJsZWQgPSB0cnVlO1xuICBjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzO1xuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xuICBpc0Rlc2t0b3A6IGJvb2xlYW47XG4gIGZvcm1hdHRpbmc6IEZvcm1hdHRpbmcgPSBGb3JtYXR0aW5nLkRFRkFVTFQ7XG4gIGZvbnRTaXplT3B0aW9ucyA9IEZvcm1hdHRpbmdTZXJ2aWNlLmdldEZvbnRTaXplT3B0aW9ucygpO1xuICBmb250T3B0aW9ucyA9IEZvcm1hdHRpbmdTZXJ2aWNlLmdldEZvbnRPcHRpb25zKCk7XG4gIGJnQ29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gIGNvbG9yUGlja2VyU2hvdyA9IGZhbHNlO1xuICBhY3RpdmUgPSBmYWxzZTtcbiAgcHJpdmF0ZSB0ZXh0QmFja3VwOiBzdHJpbmc7XG4gIHByaXZhdGUgaXNJRSA9IGZhbHNlO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWRpdG9yU2VydmljZTogRWRpdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICAgIGNvbmZpZ1NlcnZpY2U6IEVkaXRvckNvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHVwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZm9ybWF0dGluZ1NlcnZpY2U6IEZvcm1hdHRpbmdTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9iYWNrRm9ybWF0dGluZ1NlcnZpY2U6IEJhY2tGb3JtYXR0aW5nU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb25DbG9zZVNlcnZpY2U6IE9uQ2xvc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zZWxlY3Rpb25TZXJ2aWNlOiBTZWxlY3Rpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9odG1sU2VydmljZTogRWRpdEh0bWxTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJQcmludFNlcnZpY2U6IFJlbmRlclByaW50U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbG9hZGluZ01hc2tTZXJ2aWNlOiBMb2FkaW5nTWFza1NlcnZpY2UsXG4gICkge1xuICAgIHRoaXMuaXNJRSA9IC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhLyhNU0lFfFRyaWRlbnRcXC98RWRnZVxcLykvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIGNvbmZpZ1NlcnZpY2UudXBkYXRlZENvbmZpZy5zdWJzY3JpYmUoKGVkaXRvckNvbmZpZykgPT4ge1xuICAgICAgdGhpcy5lZGl0b3JDb25maWcgPSBlZGl0b3JDb25maWc7XG4gICAgfSk7XG5cbiAgICB1cGxvYWRGaWxlc1NlcnZpY2UudXBsb2Fkc0NoYW5nZS5zdWJzY3JpYmUoKHVwbG9hZHMpID0+IHtcbiAgICAgIGlmICh1cGxvYWRzKSB7XG4gICAgICAgIGxldCBpOiBudW1iZXI7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB1cGxvYWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5fZWRpdG9yU2VydmljZS51cGxvYWQodXBsb2Fkcy5pdGVtKGkpLCAnJywgdGhpcy5lZGl0b3JDb25maWcucmV3cml0ZSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGFzc3dvcmRTZXJ2aWNlLnBhc3NDaGFuZ2Uuc3Vic2NyaWJlKChwYXNzOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLmNyZWRlbnRpYWxzLmd1aWQsIHBhc3MsIENvbW1vbk1vZGFscy5QYXNzd29yZFJlcXVpcmVkKTtcbiAgICB9KTtcblxuICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgX3dpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XG4gICAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEJvbGRDaGFuZ2Uuc3Vic2NyaWJlKChib2xkOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuYm9sZCA9IGJvbGQ7XG4gICAgfSk7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEl0YWxpY0NoYW5nZS5zdWJzY3JpYmUoKGl0YWxpYzogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLml0YWxpYyA9IGl0YWxpYztcbiAgICB9KTtcbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0VW5kZXJsaW5lQ2hhbmdlLnN1YnNjcmliZSgodW5kZXJsaW5lOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcudW5kZXJsaW5lID0gdW5kZXJsaW5lO1xuICAgIH0pO1xuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRDb2xvckNoYW5nZS5zdWJzY3JpYmUoKGNvbG9yOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5jb2xvciA9IGNvbG9yO1xuICAgIH0pO1xuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRCZ0NvbG9yQ2hhbmdlLnN1YnNjcmliZSgoYmdjb2xvcjogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuYmdDb2xvciA9IGJnY29sb3I7XG4gICAgfSk7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEZvbnRTaXplQ2hhbmdlLnN1YnNjcmliZSgoZm9udFNpemU6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Rm9udENoYW5nZS5zdWJzY3JpYmUoKGZvbnQ6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmZvbnQgPSBmb250O1xuICAgIH0pO1xuXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdFN0cmlrZW91dENoYW5nZS5zdWJzY3JpYmUoKHN0cmlrZW91dDogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLnN0cmlrZW91dCA9IHN0cmlrZW91dDtcbiAgICB9KTtcblxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRBbGlnbkNoYW5nZS5zdWJzY3JpYmUoKGFsaWduOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5hbGlnbiA9IGFsaWduO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdExpc3RDaGFuZ2Uuc3Vic2NyaWJlKChsaXN0OiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5saXN0ID0gbGlzdDtcbiAgICB9KTtcblxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEJvbGRDaGFuZ2Uuc3Vic2NyaWJlKChib2xkOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuYm9sZCA9IGJvbGQ7XG4gICAgfSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0SXRhbGljQ2hhbmdlLnN1YnNjcmliZSgoaXRhbGljOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuaXRhbGljID0gaXRhbGljO1xuICAgIH0pO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdFVuZGVybGluZUNoYW5nZS5zdWJzY3JpYmUoKHVuZGVybGluZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLnVuZGVybGluZSA9IHVuZGVybGluZTtcbiAgICB9KTtcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRDb2xvckNoYW5nZS5zdWJzY3JpYmUoKGNvbG9yOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5jb2xvciA9IGNvbG9yO1xuICAgIH0pO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEJnQ29sb3JDaGFuZ2Uuc3Vic2NyaWJlKChiZ2NvbG9yOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5iZ0NvbG9yID0gYmdjb2xvcjtcbiAgICB9KTtcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRGb250U2l6ZUNoYW5nZS5zdWJzY3JpYmUoKGZvbnRTaXplOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Rm9udENoYW5nZS5zdWJzY3JpYmUoKGZvbnQ6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmZvbnQgPSBmb250O1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0U3RyaWtlb3V0Q2hhbmdlLnN1YnNjcmliZSgoc3RyaWtlb3V0OiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuc3RyaWtlb3V0ID0gc3RyaWtlb3V0O1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0QWxpZ25DaGFuZ2Uuc3Vic2NyaWJlKChhbGlnbjogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuYWxpZ24gPSBhbGlnbjtcbiAgICB9KTtcblxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdExpc3RDaGFuZ2Uuc3Vic2NyaWJlKChsaXN0OiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5saXN0ID0gbGlzdDtcbiAgICB9KTtcblxuICAgIHRoaXMuX2h0bWxTZXJ2aWNlLmh0bWxDb250ZW50LnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodGhpcy5maWxlICYmIHRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgICB0aGlzLnRleHRCYWNrdXAgPSB0ZXh0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2xvYWRpbmdNYXNrU2VydmljZVxuICAgIC5vbkxvYWRpbmdDaGFuZ2VkXG4gICAgLnN1YnNjcmliZSgobG9hZGluZzogYm9vbGVhbikgPT4gdGhpcy5pc0xvYWRpbmcgPSBsb2FkaW5nKTtcbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVkaXRvckNvbmZpZyA/IHRoaXMuZWRpdG9yQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGRvd25sb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVkaXRvckNvbmZpZyA/IHRoaXMuZWRpdG9yQ29uZmlnLmRvd25sb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB1cGxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yQ29uZmlnID8gdGhpcy5lZGl0b3JDb25maWcudXBsb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBwcmludENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JDb25maWcgPyB0aGlzLmVkaXRvckNvbmZpZy5wcmludCA6IHRydWU7XG4gIH1cblxuICBnZXQgYnJvd3NlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVkaXRvckNvbmZpZyA/IHRoaXMuZWRpdG9yQ29uZmlnLmJyb3dzZSA6IHRydWU7XG4gIH1cblxuICBnZXQgZW5hYmxlUmlnaHRDbGlja0NvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JDb25maWcgPyB0aGlzLmVkaXRvckNvbmZpZy5lbmFibGVSaWdodENsaWNrIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBwYWdlU2VsZWN0b3JDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yQ29uZmlnID8gdGhpcy5lZGl0b3JDb25maWcucGFnZVNlbGVjdG9yIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBjcmVhdGVOZXdGaWxlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVkaXRvckNvbmZpZyA/IHRoaXMuZWRpdG9yQ29uZmlnLmNyZWF0ZU5ld0ZpbGUgOiB0cnVlO1xuICB9XG5cbiAgb3Blbk1vZGFsKGlkOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5maWxlKSB7XG4gICAgICB0aGlzLmZpbGUucGFnZXNbMF0uZWRpdGFibGUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oaWQpO1xuICB9XG5cbiAgb3BlblNhdmUoKSB7XG4gICAgaWYgKCF0aGlzLmZvcm1hdERpc2FibGVkKSB7XG4gICAgICB0aGlzLm9wZW5Nb2RhbChDb21tb25Nb2RhbHMuQ3JlYXRlRG9jdW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdERpcigkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX2VkaXRvclNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRmlsZU1vZGVsW10pID0+IHRoaXMuZmlsZXMgPSBmaWxlcyB8fCBbXSk7XG4gIH1cblxuICBwcml2YXRlIHB0VG9QeChwdDogbnVtYmVyKSB7XG4gICAgLy9wdCAqIDk2IC8gNzIgPSBweC5cbiAgICByZXR1cm4gcHQgKiA5NiAvIDcyO1xuICB9XG5cbiAgb25SaWdodENsaWNrKCRldmVudDogTW91c2VFdmVudCkge1xuICAgIHJldHVybiB0aGlzLmVuYWJsZVJpZ2h0Q2xpY2tDb25maWc7XG4gIH1cblxuICBjcmVhdGVGaWxlKCkge1xuICAgIHRoaXMuZmlsZSA9IG5ldyBGaWxlRGVzY3JpcHRpb24oKTtcbiAgICBjb25zdCBwYWdlID0gbmV3IFBhZ2VNb2RlbDtcbiAgICBwYWdlLndpZHRoID0gNTk1O1xuICAgIHBhZ2UuaGVpZ2h0ID0gODQyO1xuICAgIHBhZ2UuZGF0YSA9ICc8IURPQ1RZUEUgSFRNTD48aHRtbD48aGVhZD48bWV0YSBodHRwLWVxdWl2PVwiY29udGVudC10eXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiPjwvaGVhZD48Ym9keT48L2JvZHk+PC9odG1sPic7XG4gICAgcGFnZS5udW1iZXIgPSAxO1xuICAgIHBhZ2UuZWRpdGFibGUgPSB0cnVlO1xuICAgIHRoaXMuZmlsZS5wYWdlcyA9IFtdO1xuICAgIHRoaXMuZmlsZS5wYWdlcy5wdXNoKHBhZ2UpO1xuICAgIHRoaXMuZmlsZS5ndWlkID0gXCJuZXcgZG9jdW1lbnQuZG9jeFwiO1xuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBuZXcgRmlsZUNyZWRlbnRpYWxzKFwibmV3IGRvY3VtZW50LmRvY3hcIiwgXCJcIik7XG4gICAgdGhpcy5mb3JtYXREaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZG93bmxvYWREaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBzZWxlY3RGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBtb2RhbElkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gbmV3IEZpbGVDcmVkZW50aWFscygkZXZlbnQsIHBhc3N3b3JkKTtcbiAgICB0aGlzLl9lZGl0b3JTZXJ2aWNlLmxvYWRGaWxlKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZmlsZTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZEZpbGUoZmlsZSk7XG4gICAgICAgIGNvbnN0IGlzSUUgPSAvKkBjY19vbiFAKi9mYWxzZSB8fCAhIS8oTVNJRXxUcmlkZW50XFwvfEVkZ2VcXC8pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgICAgaWYoaXNJRSkge1xuICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgaWYoJChcIi5kb2N1bWVudE1haW5Db250ZW50XCIpLmxlbmd0aCA+IDAgKXtcbiAgICAgICAgICAgICAgJChcIi5kb2N1bWVudE1haW5Db250ZW50XCIpLmF0dHIoXCJjb250ZW50RWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCwge2F0dHJpYnV0ZXM6IGZhbHNlLCBjaGlsZExpc3Q6IHRydWUsIGNoYXJhY3RlckRhdGE6IGZhbHNlLCBzdWJ0cmVlOiB0cnVlfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuY2xlYXJEYXRhKCk7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKG1vZGFsSWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkRmlsZShmaWxlOiBGaWxlRGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgIGlmICh0aGlzLmZpbGUgJiYgdGhpcy5maWxlLnBhZ2VzWzBdKSB7XG4gICAgICB0aGlzLmZpbGUucGFnZXNbMF0uZWRpdGFibGUgPSB0cnVlO1xuICAgICAgdGhpcy5maWxlLnBhZ2VzWzBdLndpZHRoID0gNTk1O1xuICAgICAgdGhpcy5maWxlLnBhZ2VzWzBdLmhlaWdodCA9IDg0MjtcbiAgICAgIHRoaXMudGV4dEJhY2t1cCA9IHRoaXMuZmlsZS5wYWdlc1swXS5kYXRhO1xuICAgIH1cbiAgICB0aGlzLmZvcm1hdERpc2FibGVkID0gIXRoaXMuZmlsZTtcbiAgICB0aGlzLmRvd25sb2FkRGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJEYXRhKCkge1xuICAgIGlmICghdGhpcy5maWxlIHx8ICF0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwYWdlIG9mIHRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgcGFnZS5kYXRhID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lZGl0b3JTZXJ2aWNlLnVwbG9hZChudWxsLCAkZXZlbnQsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdEZvbnRTaXplKCRldmVudDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgJChcIi5nZC13cmFwcGVyXCIpLm9mZihcImtleXVwXCIpO1xuICAgIGlmKHRoaXMuaXNJRSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0Rm9udFNpemUoJGV2ZW50KTtcbiAgICAkKFwiLmdkLXdyYXBwZXJcIikub24oXCJrZXl1cFwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBmb250RWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImZvbnRcIik7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gZm9udEVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIGlmIChmb250RWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKCdzaXplJykgPT09IFwiN1wiKSB7XG4gICAgICAgICAgZm9udEVsZW1lbnRzW2ldLnJlbW92ZUF0dHJpYnV0ZShcInNpemVcIik7XG4gICAgICAgICAgZm9udEVsZW1lbnRzW2ldLnN0eWxlLmZvbnRTaXplID0gJGV2ZW50ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RGb250KCRldmVudDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZih0aGlzLmlzSUUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEZvbnQoJGV2ZW50KTtcbiAgfVxuXG4gIHRvZ2dsZUNvbG9yUGlja2VyKGJnOiBib29sZWFuKSB7XG5cbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZih0aGlzLmlzSUUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIGlmIChiZykge1xuICAgICAgdGhpcy5iZ0NvbG9yUGlja2VyU2hvdyA9ICF0aGlzLmJnQ29sb3JQaWNrZXJTaG93O1xuICAgICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSAhdGhpcy5jb2xvclBpY2tlclNob3c7XG4gICAgICB0aGlzLmJnQ29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0Q29sb3IoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICBpZih0aGlzLmlzSUUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmJnQ29sb3JQaWNrZXJTaG93KSB7XG4gICAgICB0aGlzLmJnQ29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gICAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRCZ0NvbG9yKCRldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gICAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRDb2xvcigkZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUJvbGQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmKHRoaXMuaXNJRSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0Qm9sZCghdGhpcy5mb3JtYXR0aW5nLmJvbGQpO1xuICB9XG5cbiAgdG9nZ2xlVW5kbygpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLlVuZG8oKTtcbiAgfVxuXG4gIHRvZ2dsZVJlZG8oKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5SZWRvKCk7XG4gIH1cblxuICB0b2dnbGVJdGFsaWMoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmKHRoaXMuaXNJRSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0SXRhbGljKCF0aGlzLmZvcm1hdHRpbmcuaXRhbGljKTtcbiAgfVxuXG4gIHRvZ2dsZVVuZGVybGluZShldmVudCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYodGhpcy5pc0lFKSB7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKTtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRVbmRlcmxpbmUoIXRoaXMuZm9ybWF0dGluZy51bmRlcmxpbmUpO1xuICB9XG5cbiAgaGlkZUFsbCgkZXZlbnQpIHtcbiAgICBpZiAoKCRldmVudC50YXJnZXQucGFyZW50RWxlbWVudCAmJiAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddICYmXG4gICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddLnZhbHVlID09PSAnYnV0dG9uJykgfHxcbiAgICAgICgkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJlxuICAgICAgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddICYmXG4gICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10udmFsdWUgPT09ICdidXR0b24nKSkge1xuXG4gICAgICB0aGlzLl9vbkNsb3NlU2VydmljZS5jbG9zZSh0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSBmYWxzZTtcbiAgICB0aGlzLmJnQ29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gICAgdGhpcy5fb25DbG9zZVNlcnZpY2UuY2xvc2UodHJ1ZSk7XG4gIH1cblxuICB0b2dnbGVTdHJpa2VvdXQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmKHRoaXMuaXNJRSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0U3RyaWtlb3V0KCF0aGlzLmZvcm1hdHRpbmcuc3RyaWtlb3V0KTtcbiAgfVxuXG4gIHRvZ2dsZUFsaWduKGFsaWduOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChhbGlnbiA9PT0gdGhpcy5mb3JtYXR0aW5nLmFsaWduKSB7XG4gICAgICBhbGlnbiA9ICdmdWxsJztcbiAgICB9XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0QWxpZ24oYWxpZ24pO1xuICAgIHRoaXMuZm9ybWF0dGluZy5hbGlnbiA9IGFsaWduO1xuICB9XG5cbiAgdG9nZ2xlTGlzdChsaXN0OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKGxpc3QgPT09IHRoaXMuZm9ybWF0dGluZy5saXN0KSB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcubGlzdCA9IFwiXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5saXN0ID0gbGlzdDtcbiAgICB9XG4gICAgaWYodGhpcy5pc0lFKSB7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKTtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRMaXN0KGxpc3QpO1xuICB9XG5cbiAgZG93bmxvYWRGaWxlKCkge1xuICAgIGlmICh0aGlzLmRvd25sb2FkRGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLl9lZGl0b3JTZXJ2aWNlLmdldERvd25sb2FkVXJsKHRoaXMuY3JlZGVudGlhbHMpKTtcbiAgfVxuXG4gIHNhdmUoKXtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBpZih0aGlzLmNyZWRlbnRpYWxzKSB7XG4gICAgICBpZiAodGhpcy5maWxlLmd1aWQgPT09IFwibmV3IGRvY3VtZW50LmRvY3hcIikge1xuICAgICAgICB0aGlzLm9wZW5Nb2RhbChDb21tb25Nb2RhbHMuQ3JlYXRlRG9jdW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zYXZlRmlsZSh0aGlzLmNyZWRlbnRpYWxzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuIHNhdmVGaWxlKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcbiAgICBpZiAoIXRoaXMuZmlsZSB8fCAhdGhpcy5maWxlLnBhZ2VzKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHNhdmVGaWxlID0gbmV3IFNhdmVGaWxlKGNyZWRlbnRpYWxzLmd1aWQsIGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB0aGlzLnRleHRCYWNrdXApO1xuICAgIHRoaXMuX2VkaXRvclNlcnZpY2Uuc2F2ZShzYXZlRmlsZSkuc3Vic2NyaWJlKChsb2FkRmlsZTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICB0aGlzLmxvYWRGaWxlKGxvYWRGaWxlKTtcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBuZXcgRmlsZUNyZWRlbnRpYWxzKGxvYWRGaWxlLmd1aWQsIGNyZWRlbnRpYWxzLnBhc3N3b3JkKTtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5PcGVyYXRpb25TdWNjZXNzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaW50RmlsZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBpZih0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgIGNvbnN0IHBhZ2UgPSBuZXcgUGFnZU1vZGVsO1xuICAgICAgcGFnZS53aWR0aCA9IDU5NTtcbiAgICAgIHBhZ2UuaGVpZ2h0ID0gODQyO1xuICAgICAgLy8gdXNpbmcgb2YgdGhlIHJlcGxhY2UgaXMgcmVxdWlyZWQgdG8gZml4IGlzc3VlIHdpdGggcGFkZGluZyBmb3IgaW50aXJlIHByaW50IGNvbnRlbnRcbiAgICAgIHBhZ2UuZGF0YSA9IHRoaXMudGV4dEJhY2t1cC5yZXBsYWNlKCc8L3N0eWxlPicsICdib2R5IHsgcGFkZGluZzogOTZweDsgfSA8L3N0eWxlPicpO1xuICAgICAgY29uc3QgcHJpbnRIdG1sID0gW3BhZ2VdO1xuICAgICAgdGhpcy5fcmVuZGVyUHJpbnRTZXJ2aWNlLmNoYW5nZVBhZ2VzKHByaW50SHRtbCk7XG4gICAgfVxuICB9XG5cbiAgb25DbG9zZU1vZGFsKCRldmVudCkge1xuICAgIGlmICh0aGlzLmZpbGUgJiYgJGV2ZW50KSB7XG4gICAgICBpZih0aGlzLmlzSUUpIHtcbiAgICAgICAgJChcIi5kb2N1bWVudE1haW5Db250ZW50XCIpLmF0dHIoXCJjb250ZW50RWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5maWxlLnBhZ2VzWzBdLmVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgfVxufVxuIl19