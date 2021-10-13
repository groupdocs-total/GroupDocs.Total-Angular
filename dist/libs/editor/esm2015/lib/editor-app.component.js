/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Renderer2 } from '@angular/core';
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
     * @param {?} _renderer
     */
    constructor(_editorService, _modalService, configService, uploadFilesService, passwordService, _windowService, _formattingService, _backFormattingService, _onCloseService, _selectionService, _htmlService, _renderPrintService, _loadingMaskService, _renderer) {
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
        this._renderer = _renderer;
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
        // adding listeners on inputs if present on existing page
        /** @type {?} */
        let count = 0;
        /** @type {?} */
        const timerId = setInterval((/**
         * @return {?}
         */
        () => {
            count++;
            /** @type {?} */
            const page = document.querySelectorAll('.page');
            if (page) {
                this.initControlsListeners();
                clearInterval(timerId);
            }
            if (count === 20)
                clearInterval();
        }), 100);
    }
    /**
     * @private
     * @return {?}
     */
    initControlsListeners() {
        /** @type {?} */
        const inputs = document.querySelectorAll('input');
        inputs.forEach((/**
         * @param {?} input
         * @return {?}
         */
        input => {
            this._renderer.listen(input, 'keyup', (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                input.setAttribute('value', input.value);
            }));
        }));
        /** @type {?} */
        const selects = document.querySelectorAll('select');
        selects.forEach((/**
         * @param {?} select
         * @return {?}
         */
        select => {
            this._renderer.listen(select, 'change', (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                selects.forEach((/**
                 * @param {?} s
                 * @return {?}
                 */
                s => {
                    for (let i = s.options.length - 1; i >= 0; i--) {
                        s.options[i].removeAttribute('selected');
                    }
                }));
                select.options[select.selectedIndex].setAttribute('selected', 'selected');
            }));
        }));
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
        // we try to save the changes on any click outside
        if (document.querySelectorAll('.gd-wrapper')[0]) {
            this.textBackup = document.querySelectorAll('.gd-wrapper')[0].innerHTML.toString();
        }
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
        let resultData = data;
        if (!data.startsWith("<html><head>") && !data.endsWith("</body></html>")) {
            resultData = "<html><head>" + data + "</body></html>";
        }
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
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\r\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\" (click)=\"hideAll($event)\">\r\n  <gd-tabbed-toolbars [logo]=\"'editor'\" [icon]=\"'pen-square'\">\r\n    <gd-tabs>\r\n      <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\r\n        <gd-top-toolbar class=\"toolbar-panel\">\r\n          <gd-button [icon]=\"'file'\" [tooltip]=\"'Create document'\" (click)=\"createFile()\"\r\n                     *ngIf=\"createNewFileConfig\"></gd-button>\r\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\r\n                     *ngIf=\"browseConfig\"></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save File'\" (click)=\"save()\"></gd-button>\r\n          <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'pencil-alt'\" [iconClass]=\"'save-as-button-icon'\" [tooltip]=\"'Save File As'\" (click)=\"openSave()\">\r\n            <fa-icon [icon]=\"['fas','save']\" class=\"save-button\" size=\"xs\"></fa-icon></gd-button>\r\n          <gd-button [disabled]=\"downloadDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\r\n                     (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\r\n          <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\r\n                     *ngIf=\"printConfig\" ></gd-button>\r\n          <gd-button *ngIf=\"!isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Undo'\"\r\n                     (click)=\"toggleUndo()\"></gd-button>\r\n          <gd-button *ngIf=\"!isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Redo'\"\r\n                     (click)=\"toggleRedo()\"></gd-button>\r\n        </gd-top-toolbar>\r\n      </gd-tab>\r\n      <gd-tab id=\"formatting-tab\" [tabTitle]=\"'Formatting'\" [icon]=\"'edit'\" [id]=\"'2'\">\r\n        <gd-top-toolbar class=\"toolbar-panel\">\r\n          <gd-button *ngIf=\"isDesktop\"  [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Undo'\"\r\n                     (click)=\"toggleUndo()\"></gd-button>\r\n          <gd-button *ngIf=\"isDesktop\"  [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Redo'\"\r\n                     (click)=\"toggleRedo()\"></gd-button>\r\n          <gd-select class=\"format-select mobile-hide\" [disabled]=\"formatDisabled\" [options]=\"fontOptions\"\r\n                     [isOpen]=\"selectFontShow\" (selected)=\"selectFont($event)\" (opened)=\"toggleFontSelect($event, true)\"\r\n                     [showSelected]=\"{name : formatting.font, value : formatting.font}\"></gd-select>\r\n          <gd-select class=\"format-select mobile-hide\" [disabled]=\"formatDisabled\" [options]=\"fontSizeOptions\"\r\n                     [isOpen]=\"selectFontSizeShow\" (selected)=\"selectFontSize($event)\" (opened)=\"toggleFontSelect($event, false)\"\r\n                     [showSelected]=\"{name : formatting.fontSize + 'px', value : formatting.fontSize}\"></gd-select>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'bold'\" [tooltip]=\"'Bold'\"\r\n                     (click)=\"toggleBold($event)\" [toggle]=\"formatting.bold\"></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'italic'\" [tooltip]=\"'Italic'\"\r\n                     (click)=\"toggleItalic($event)\" [toggle]=\"formatting.italic\"></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'underline'\" [tooltip]=\"'Underline'\"\r\n                     (click)=\"toggleUnderline($event)\" [toggle]=\"formatting.underline\"></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'strikethrough'\" [tooltip]=\"'Strike out'\"\r\n                     (click)=\"toggleStrikeout($event)\" [toggle]=\"formatting.strikeout\"></gd-button>\r\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'align-center'\" [tooltip]=\"'Align center'\"\r\n                     (click)=\"toggleAlign('center')\" [toggle]=\"formatting.align == 'center' ? true : false\"></gd-button>\r\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'align-justify'\" [tooltip]=\"'Align full'\"\r\n                     (click)=\"toggleAlign('full')\" [toggle]=\"formatting.align == 'full' ? true : false\"></gd-button>\r\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'align-right'\" [tooltip]=\"'Align right'\"\r\n                     (click)=\"toggleAlign('right')\" [toggle]=\"formatting.align == 'right' ? true : false\"></gd-button>\r\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'align-left'\" [tooltip]=\"'Align left'\"\r\n                     (click)=\"toggleAlign('left')\" [toggle]=\"formatting.align == 'left' ? true : false\"></gd-button>\r\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'list-ul'\" [tooltip]=\"'Add Unordered List'\"\r\n                     (click)=\"toggleList('unordered')\" [toggle]=\"formatting.list == 'unordered' ? true : false\"></gd-button>\r\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'list-ol'\" [tooltip]=\"'Add Ordered List'\"\r\n                     (click)=\"toggleList('ordered')\" [toggle]=\"formatting.list == 'ordered' ? true : false\"></gd-button>\r\n          <gd-button *ngIf=\"isDesktop\" name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'fill'\" [tooltip]=\"'Background color'\"\r\n                     (click)=\"toggleColorPicker($event, true)\">\r\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.bgColor\"></div>\r\n          </gd-button>\r\n          <gd-button *ngIf=\"isDesktop\" name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'font'\" [tooltip]=\"'Color'\" \r\n                     (click)=\"toggleColorPicker($event, false)\">\r\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.color\"></div>\r\n          </gd-button>\r\n        </gd-top-toolbar>\r\n      </gd-tab>\r\n      <gd-tab class=\"desktop-hide\" [tabTitle]=\"'Font'\" [icon]=\"'font'\" [id]=\"'3'\">\r\n        <gd-top-toolbar class=\"toolbar-panel\">\r\n          <gd-select class=\"format-select font-type\" [disabled]=\"formatDisabled\" [options]=\"fontOptions\"\r\n                      [isOpen]=\"selectFontShow\" (selected)=\"selectFont($event)\" (click)=\"toggleFontSelect($event, true)\"\r\n                      [showSelected]=\"{name : formatting.font, value : formatting.font}\"></gd-select>\r\n          <gd-select class=\"format-select font-size\" [disabled]=\"formatDisabled\" [options]=\"fontSizeOptions\"\r\n                      [isOpen]=\"selectFontSizeShow\" (selected)=\"selectFontSize($event)\" (click)=\"toggleFontSelect($event, false)\"\r\n                      [showSelected]=\"{name : formatting.fontSize + 'px', value : formatting.fontSize}\"></gd-select>\r\n        </gd-top-toolbar>\r\n      </gd-tab>\r\n      <gd-tab id=\"paragraph-tab\" class=\"desktop-hide\" [tabTitle]=\"'Paragraph'\" [icon]=\"'paragraph'\" [id]=\"'4'\">\r\n        <gd-top-toolbar class=\"toolbar-panel\">\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-center'\" [tooltip]=\"'Align center'\"\r\n                     (click)=\"toggleAlign('center')\" [toggle]=\"formatting.align == 'center' ? true : false\"></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-justify'\" [tooltip]=\"'Align full'\"\r\n                     (click)=\"toggleAlign('full')\" [toggle]=\"formatting.align == 'full' ? true : false\"></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-right'\" [tooltip]=\"'Align right'\"\r\n                     (click)=\"toggleAlign('right')\" [toggle]=\"formatting.align == 'right' ? true : false\"></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-left'\" [tooltip]=\"'Align left'\"\r\n                     (click)=\"toggleAlign('left')\" [toggle]=\"formatting.align == 'left' ? true : false\"></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ul'\" [tooltip]=\"'Add Unordered List'\"\r\n                     (click)=\"toggleList('unordered')\" [toggle]=\"formatting.list == 'unordered' ? true : false\"></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ol'\" [tooltip]=\"'Add Ordered List'\"\r\n                     (click)=\"toggleList('ordered')\" [toggle]=\"formatting.list == 'ordered' ? true : false\"></gd-button>\r\n        </gd-top-toolbar>\r\n      </gd-tab>\r\n      <gd-tab class=\"desktop-hide\" [tabTitle]=\"'Palette'\" [icon]=\"'palette'\" [id]=\"'5'\">\r\n        <gd-top-toolbar class=\"toolbar-panel\">\r\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'fill'\" [tooltip]=\"'Background color'\"\r\n                    (click)=\"toggleColorPicker($event, true)\">\r\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.bgColor\"></div>\r\n          </gd-button>\r\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'font'\" [tooltip]=\"'Color'\" \r\n                    (click)=\"toggleColorPicker($event, false)\">\r\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.color\"></div>\r\n          </gd-button>\r\n        </gd-top-toolbar>\r\n      </gd-tab>\r\n    </gd-tabs>\r\n  </gd-tabbed-toolbars>\r\n  <gd-color-picker [isOpen]=\"bgColorPickerShow || colorPickerShow\"\r\n                   [className]=\"'palette ' + (bgColorPickerShow ? 'background-color-picker' : 'color-picker')\"\r\n                   (selectedColor)=\"selectColor($event)\"></gd-color-picker>\r\n  <div class=\"doc-panel\" *ngIf=\"file\">\r\n    <gd-document class=\"gd-document\" *ngIf=\"file\" [ngClass]=\"{'new-file': newFile}\" [file]=\"file\" [mode]=\"true\" [htmlMode]=\"true\"\r\n                 [preloadPageCount]=\"0\" gdFormatting gdRenderPrint gdScrollable>\r\n    </gd-document>\r\n  </div>\r\n  <gd-init-state [icon]=\"'pen-square'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\r\n      Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\r\n      Or drop file here\r\n  </gd-init-state>\r\n  <gd-browse-files-modal\r\n    (closing)=\"onCloseModal($event)\"\r\n    (urlForUpload)=\"upload($event)\"\r\n    [files]=\"files\"\r\n    (selectedDirectory)=\"selectDir($event)\"\r\n    (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\r\n    [uploadConfig]=\"uploadConfig\"\r\n  ></gd-browse-files-modal>\r\n  <gd-error-modal></gd-error-modal>\r\n  <gd-password-required></gd-password-required>\r\n  <gd-create-document-modal (closing)=\"onCloseModal($event)\" [file]=\"credentials\" (savingFile)=\"saveNewFile($event)\"></gd-create-document-modal>\r\n  <gd-success-modal></gd-success-modal>\r\n</div>\r\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.current-page-number{margin:0 15px;font-size:14px;color:#959da5}*{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:text}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}::ng-deep .gd-drag-n-drop-wrap.active{z-index:999}::ng-deep .gd-drag-n-drop-wrap.active .init-state-wrapper{top:unset!important}::ng-deep .init-state-wrapper{top:-90px!important}.doc-panel{display:-webkit-box;display:flex;height:inherit}.gd-document{width:100%;height:calc(100% - 90px)}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{width:100%}::ng-deep .gd-wrapper{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;outline:0;position:relative}::ng-deep .dropdown-menu{min-width:unset!important}.palette{position:absolute;top:90px;z-index:100}.background-color-picker{left:700px}.color-picker{left:750px}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}::ng-deep .tools .button{color:#3e4e5a!important}::ng-deep .tools .button .text{padding:0!important}::ng-deep .tools .button.inactive{color:#959da5!important;opacity:.4}::ng-deep .tools .dropdown-menu .option{min-width:61px;color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}::ng-deep .tools .select{width:65px;height:37px;margin-left:7px;line-height:37px;text-align:center;border:none!important}::ng-deep .tools .select .nav-caret{margin:0 0 0 4px!important}::ng-deep .gd-select-format .select{-webkit-box-pack:justify!important;justify-content:space-between!important}::ng-deep .tab-content .button .tooltip{margin-top:45px;margin-left:-36px}::ng-deep .gd-edit.active{background-color:#7e8991}::ng-deep .gd-edit.active i{color:#fff}::ng-deep .page{width:auto!important;height:auto!important}::ng-deep .page ::ng-deep .gd-document .page{width:auto!important;height:auto!important}::ng-deep .documentMainContent.newfile{width:595px!important;height:842px!important}::ng-deep .gd-document.new-file .page{width:595pt!important;height:842pt!important}::ng-deep .slide{margin:0!important}::ng-deep #page-0{height:calc(100% - 2 * 20px)}::ng-deep .save-as-button-icon{font-size:11px;left:22px!important;top:13px!important}::ng-deep .documentMainContent .section{margin:0!important}::ng-deep .documentMainContent>div{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:end;justify-content:flex-end}::ng-deep .documentMainContent>div .footer-1{position:absolute;bottom:0;width:calc(100% - 2 * 96px);display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}::ng-deep .documentMainContent>div .footer-1 .Normal{margin:0 0 0 auto}::ng-deep .documentMainContent>div .footer-1 p{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}::ng-deep .documentMainContent>div .header-0{padding-bottom:10px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}::ng-deep .documentMainContent>div .header-0 .Header,::ng-deep .documentMainContent>div .header-0 .Normal{margin:0 0 0 auto}::ng-deep .documentMainContent>div .header-0 p{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}::ng-deep .documentMainContent>div .header-0 p:last-of-type{margin:0!important}.save-button{position:absolute;top:-5px;left:21px}gd-tab.desktop-hide{display:none}::ng-deep .documentMainContent .page8marker{width:100%;border-bottom:2px dotted rgba(54,95,145,.7);position:absolute;right:0}@media (max-width:1037px){::ng-deep .panzoom{zoom:.45;margin-top:130px}::ng-deep .gd-tab fa-icon{height:60px;width:60px;font-size:22px!important;margin:unset!important}gd-tab.desktop-hide{display:block}.mobile-hide{display:none}::ng-deep .tools{overflow-x:unset!important}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0!important}::ng-deep .tools .icon-button{height:60px!important;width:60px;margin:0!important}::ng-deep .bg-color-pic{height:13px!important;width:13px!important;right:9px!important;bottom:11px!important}::ng-deep .palette{position:absolute;top:130px!important;z-index:100}::ng-deep .background-color-picker{left:0!important}::ng-deep .color-picker{left:60px!important}::ng-deep .format-select.font-type{width:109px}::ng-deep .format-select.font-type ::ng-deep .dropdown-menu{width:109px!important;top:60px!important;left:0!important}::ng-deep .format-select.font-size{width:81px}::ng-deep .format-select.font-size ::ng-deep .dropdown-menu{width:81px!important;top:60px!important;left:109px!important}::ng-deep .format-select .select{width:unset!important;height:60px!important;line-height:60px}::ng-deep .init-state-wrapper{position:unset!important}::ng-deep .gd-document{height:calc(100% - 60px)!important}}"]
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
    { type: LoadingMaskService },
    { type: Renderer2 }
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
    /**
     * @type {?}
     * @private
     */
    EditorAppComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUF5QixTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxlQUFlLEVBRWYsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixlQUFlLEVBQ2YsZUFBZSxFQUNmLFlBQVksRUFDWixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixxQkFBcUIsRUFDckIsY0FBYyxFQUNkLFFBQVEsRUFDUixnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixhQUFhLEVBQ2Isa0JBQWtCLEVBQ25CLE1BQU0sK0NBQStDLENBQUM7QUFFdkQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O01BQzNCLENBQUMsR0FBRyxNQUFNO0FBT2hCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBd0I3QixZQUFvQixjQUE2QixFQUM3QixhQUEyQixFQUNuQyxhQUFrQyxFQUNsQyxrQkFBc0MsRUFDdEMsZUFBZ0MsRUFDeEIsY0FBNkIsRUFDN0Isa0JBQXFDLEVBQ3JDLHNCQUE2QyxFQUM3QyxlQUErQixFQUMvQixpQkFBbUMsRUFDbkMsWUFBNkIsRUFDN0IsbUJBQXVDLEVBQ3ZDLG1CQUF1QyxFQUN2QyxTQUFvQjtRQWJwQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUkzQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3Qix1QkFB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RCwrQ0FBMEI7O0lBQzFCLDZDQUF3Qjs7SUFDeEIsb0NBQWU7O0lBQ2Ysd0NBQTBCOzs7OztJQUMxQixrQ0FBcUI7O0lBQ3JCLHVDQUFtQjs7SUFDbkIsNENBQXNCOztJQUN0Qiw0Q0FBdUI7O0lBQ3ZCLGdEQUEyQjs7SUFDM0IscUNBQWdCOzs7OztJQUVKLDRDQUFxQzs7Ozs7SUFDckMsMkNBQW1DOzs7OztJQUluQyw0Q0FBcUM7Ozs7O0lBQ3JDLGdEQUE2Qzs7Ozs7SUFDN0Msb0RBQXFEOzs7OztJQUNyRCw2Q0FBdUM7Ozs7O0lBQ3ZDLCtDQUEyQzs7Ozs7SUFDM0MsMENBQXFDOzs7OztJQUNyQyxpREFBK0M7Ozs7O0lBQy9DLGlEQUErQzs7Ozs7SUFDL0MsdUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtFZGl0b3JTZXJ2aWNlfSBmcm9tIFwiLi9lZGl0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG4gIEZpbGVEZXNjcmlwdGlvbixcclxuICBGaWxlTW9kZWwsXHJcbiAgTW9kYWxTZXJ2aWNlLFxyXG4gIFVwbG9hZEZpbGVzU2VydmljZSxcclxuICBQYXNzd29yZFNlcnZpY2UsXHJcbiAgRmlsZUNyZWRlbnRpYWxzLFxyXG4gIENvbW1vbk1vZGFscyxcclxuICBQYWdlTW9kZWwsXHJcbiAgRm9ybWF0dGluZ1NlcnZpY2UsXHJcbiAgRm9ybWF0dGluZyxcclxuICBCYWNrRm9ybWF0dGluZ1NlcnZpY2UsXHJcbiAgT25DbG9zZVNlcnZpY2UsXHJcbiAgU2F2ZUZpbGUsXHJcbiAgU2VsZWN0aW9uU2VydmljZSxcclxuICBFZGl0SHRtbFNlcnZpY2UsXHJcbiAgUmVuZGVyUHJpbnRTZXJ2aWNlLFxyXG4gIFdpbmRvd1NlcnZpY2UsXHJcbiAgTG9hZGluZ01hc2tTZXJ2aWNlLCBPcHRpb25cclxufSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge0VkaXRvckNvbmZpZ30gZnJvbSBcIi4vZWRpdG9yLWNvbmZpZ1wiO1xyXG5pbXBvcnQge0VkaXRvckNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL2VkaXRvci1jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuY29uc3QgJCA9IGpxdWVyeTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtZWRpdG9yLWFuZ3VsYXItcm9vdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXRvci1hcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2VkaXRvci1hcHAuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdG9yQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICB0aXRsZSA9ICdlZGl0b3InO1xyXG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xyXG4gIGZpbGU6IEZpbGVEZXNjcmlwdGlvbjtcclxuICBlZGl0b3JDb25maWc6IEVkaXRvckNvbmZpZztcclxuICBmb3JtYXREaXNhYmxlZCA9ICF0aGlzLmZpbGU7XHJcbiAgZG93bmxvYWREaXNhYmxlZCA9IHRydWU7XHJcbiAgY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscztcclxuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xyXG4gIGlzRGVza3RvcDogYm9vbGVhbjtcclxuICBmb3JtYXR0aW5nOiBGb3JtYXR0aW5nID0gRm9ybWF0dGluZy5kZWZhdWx0KCk7XHJcbiAgZm9udFNpemVPcHRpb25zID0gRm9ybWF0dGluZ1NlcnZpY2UuZ2V0Rm9udFNpemVPcHRpb25zKCk7XHJcbiAgZm9udE9wdGlvbnMgPSBGb3JtYXR0aW5nU2VydmljZS5nZXRGb250T3B0aW9ucygpO1xyXG4gIGJnQ29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XHJcbiAgY29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XHJcbiAgYWN0aXZlID0gZmFsc2U7XHJcbiAgcHVibGljIHRleHRCYWNrdXA6IHN0cmluZztcclxuICBwcml2YXRlIGlzSUUgPSBmYWxzZTtcclxuICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgZmlsZVdhc0Ryb3BwZWQ6IGZhbHNlO1xyXG4gIHNlbGVjdEZvbnRTaG93ID0gZmFsc2U7XHJcbiAgc2VsZWN0Rm9udFNpemVTaG93ID0gZmFsc2U7XHJcbiAgbmV3RmlsZSA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lZGl0b3JTZXJ2aWNlOiBFZGl0b3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIGNvbmZpZ1NlcnZpY2U6IEVkaXRvckNvbmZpZ1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9mb3JtYXR0aW5nU2VydmljZTogRm9ybWF0dGluZ1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYmFja0Zvcm1hdHRpbmdTZXJ2aWNlOiBCYWNrRm9ybWF0dGluZ1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb25DbG9zZVNlcnZpY2U6IE9uQ2xvc2VTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NlbGVjdGlvblNlcnZpY2U6IFNlbGVjdGlvblNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfaHRtbFNlcnZpY2U6IEVkaXRIdG1sU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJQcmludFNlcnZpY2U6IFJlbmRlclByaW50U2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2FkaW5nTWFza1NlcnZpY2U6IExvYWRpbmdNYXNrU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlzSUUgPSAvKkBjY19vbiFAKi9mYWxzZSB8fCAhIS8oTVNJRXxUcmlkZW50XFwvfEVkZ2VcXC8pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgIGNvbmZpZ1NlcnZpY2UudXBkYXRlZENvbmZpZy5zdWJzY3JpYmUoKGVkaXRvckNvbmZpZykgPT4ge1xyXG4gICAgICB0aGlzLmVkaXRvckNvbmZpZyA9IGVkaXRvckNvbmZpZztcclxuICAgIH0pO1xyXG5cclxuICAgIHVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xyXG4gICAgICBpZiAodXBsb2Fkcykge1xyXG4gICAgICAgIGxldCBpOiBudW1iZXI7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHVwbG9hZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHRoaXMuX2VkaXRvclNlcnZpY2UudXBsb2FkKHVwbG9hZHMuaXRlbShpKSwgJycsIHRoaXMuZWRpdG9yQ29uZmlnLnJld3JpdGUpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5maWxlV2FzRHJvcHBlZCA/IHRoaXMuc2VsZWN0RmlsZShvYmouZ3VpZCwgJycsICcnKSA6IHRoaXMuc2VsZWN0RGlyKCcnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcGFzc3dvcmRTZXJ2aWNlLnBhc3NDaGFuZ2Uuc3Vic2NyaWJlKChwYXNzOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuY3JlZGVudGlhbHMuZ3VpZCwgcGFzcywgQ29tbW9uTW9kYWxzLlBhc3N3b3JkUmVxdWlyZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcclxuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xyXG4gICAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEJvbGRDaGFuZ2Uuc3Vic2NyaWJlKChib2xkOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5ib2xkID0gYm9sZDtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEl0YWxpY0NoYW5nZS5zdWJzY3JpYmUoKGl0YWxpYzogYm9vbGVhbikgPT4ge1xyXG4gICAgICB0aGlzLmZvcm1hdHRpbmcuaXRhbGljID0gaXRhbGljO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0VW5kZXJsaW5lQ2hhbmdlLnN1YnNjcmliZSgodW5kZXJsaW5lOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybWF0dGluZy51bmRlcmxpbmUgPSB1bmRlcmxpbmU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRDb2xvckNoYW5nZS5zdWJzY3JpYmUoKGNvbG9yOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5mb3JtYXR0aW5nLmNvbG9yID0gY29sb3I7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRCZ0NvbG9yQ2hhbmdlLnN1YnNjcmliZSgoYmdjb2xvcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5iZ0NvbG9yID0gYmdjb2xvcjtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEZvbnRTaXplQ2hhbmdlLnN1YnNjcmliZSgoZm9udFNpemU6IG51bWJlcikgPT4ge1xyXG4gICAgICB0aGlzLmZvcm1hdHRpbmcuZm9udFNpemUgPSBmb250U2l6ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRGb250Q2hhbmdlLnN1YnNjcmliZSgoZm9udDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5mb250ID0gZm9udDtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRTdHJpa2VvdXRDaGFuZ2Uuc3Vic2NyaWJlKChzdHJpa2VvdXQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy5mb3JtYXR0aW5nLnN0cmlrZW91dCA9IHN0cmlrZW91dDtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRBbGlnbkNoYW5nZS5zdWJzY3JpYmUoKGFsaWduOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5mb3JtYXR0aW5nLmFsaWduID0gYWxpZ247XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0TGlzdENoYW5nZS5zdWJzY3JpYmUoKGxpc3Q6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLmZvcm1hdHRpbmcubGlzdCA9IGxpc3Q7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRCb2xkQ2hhbmdlLnN1YnNjcmliZSgoYm9sZDogYm9vbGVhbikgPT4ge1xyXG4gICAgICB0aGlzLmZvcm1hdHRpbmcuYm9sZCA9IGJvbGQ7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEl0YWxpY0NoYW5nZS5zdWJzY3JpYmUoKGl0YWxpYzogYm9vbGVhbikgPT4ge1xyXG4gICAgICB0aGlzLmZvcm1hdHRpbmcuaXRhbGljID0gaXRhbGljO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRVbmRlcmxpbmVDaGFuZ2Uuc3Vic2NyaWJlKCh1bmRlcmxpbmU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy5mb3JtYXR0aW5nLnVuZGVybGluZSA9IHVuZGVybGluZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Q29sb3JDaGFuZ2Uuc3Vic2NyaWJlKChjb2xvcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5jb2xvciA9IGNvbG9yO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRCZ0NvbG9yQ2hhbmdlLnN1YnNjcmliZSgoYmdjb2xvcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5iZ0NvbG9yID0gYmdjb2xvcjtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Rm9udFNpemVDaGFuZ2Uuc3Vic2NyaWJlKChmb250U2l6ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Rm9udENoYW5nZS5zdWJzY3JpYmUoKGZvbnQ6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLmZvcm1hdHRpbmcuZm9udCA9IGZvbnQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRTdHJpa2VvdXRDaGFuZ2Uuc3Vic2NyaWJlKChzdHJpa2VvdXQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy5mb3JtYXR0aW5nLnN0cmlrZW91dCA9IHN0cmlrZW91dDtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEFsaWduQ2hhbmdlLnN1YnNjcmliZSgoYWxpZ246IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLmZvcm1hdHRpbmcuYWxpZ24gPSBhbGlnbjtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdExpc3RDaGFuZ2Uuc3Vic2NyaWJlKChsaXN0OiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5mb3JtYXR0aW5nLmxpc3QgPSBsaXN0O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5faHRtbFNlcnZpY2UuaHRtbENvbnRlbnQuc3Vic2NyaWJlKCh0ZXh0OiBzdHJpbmcpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZmlsZSAmJiB0aGlzLmZpbGUucGFnZXMpIHtcclxuICAgICAgICB0aGlzLnRleHRCYWNrdXAgPSB0ZXh0O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuZWRpdG9yQ29uZmlnLmRlZmF1bHREb2N1bWVudCAhPT0gXCJcIil7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuZWRpdG9yQ29uZmlnLmRlZmF1bHREb2N1bWVudCwgXCJcIiwgXCJcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLl9sb2FkaW5nTWFza1NlcnZpY2VcclxuICAgIC5vbkxvYWRpbmdDaGFuZ2VkXHJcbiAgICAuc3Vic2NyaWJlKChsb2FkaW5nOiBib29sZWFuKSA9PiB0aGlzLmlzTG9hZGluZyA9IGxvYWRpbmcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJld3JpdGVDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JDb25maWcgPyB0aGlzLmVkaXRvckNvbmZpZy5yZXdyaXRlIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBkb3dubG9hZENvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmVkaXRvckNvbmZpZyA/IHRoaXMuZWRpdG9yQ29uZmlnLmRvd25sb2FkIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCB1cGxvYWRDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JDb25maWcgPyB0aGlzLmVkaXRvckNvbmZpZy51cGxvYWQgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByaW50Q29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yQ29uZmlnID8gdGhpcy5lZGl0b3JDb25maWcucHJpbnQgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmVkaXRvckNvbmZpZyA/IHRoaXMuZWRpdG9yQ29uZmlnLmJyb3dzZSA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgZW5hYmxlUmlnaHRDbGlja0NvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmVkaXRvckNvbmZpZyA/IHRoaXMuZWRpdG9yQ29uZmlnLmVuYWJsZVJpZ2h0Q2xpY2sgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhZ2VTZWxlY3RvckNvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmVkaXRvckNvbmZpZyA/IHRoaXMuZWRpdG9yQ29uZmlnLnBhZ2VTZWxlY3RvciA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgY3JlYXRlTmV3RmlsZUNvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmVkaXRvckNvbmZpZyA/IHRoaXMuZWRpdG9yQ29uZmlnLmNyZWF0ZU5ld0ZpbGUgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1vZGFsKGlkOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmZpbGUpIHtcclxuICAgICAgdGhpcy5maWxlLnBhZ2VzWzBdLmVkaXRhYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihpZCk7XHJcbiAgfVxyXG5cclxuICBvcGVuU2F2ZSgpIHtcclxuICAgIGlmICghdGhpcy5mb3JtYXREaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLm9wZW5Nb2RhbChDb21tb25Nb2RhbHMuQ3JlYXRlRG9jdW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9lZGl0b3JTZXJ2aWNlLmxvYWRGaWxlcygkZXZlbnQpLnN1YnNjcmliZSgoZmlsZXM6IEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwdFRvUHgocHQ6IG51bWJlcikge1xyXG4gICAgLy9wdCAqIDk2IC8gNzIgPSBweC5cclxuICAgIHJldHVybiBwdCAqIDk2IC8gNzI7XHJcbiAgfVxyXG5cclxuICBvblJpZ2h0Q2xpY2soJGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbmFibGVSaWdodENsaWNrQ29uZmlnO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRmlsZSgpIHtcclxuICAgIHRoaXMubmV3RmlsZSA9IHRydWU7XHJcbiAgICB0aGlzLmZpbGUgPSBuZXcgRmlsZURlc2NyaXB0aW9uKCk7XHJcbiAgICBjb25zdCBwYWdlID0gbmV3IFBhZ2VNb2RlbDtcclxuICAgIHBhZ2Uud2lkdGggPSA1OTU7XHJcbiAgICBwYWdlLmhlaWdodCA9IDg0MjtcclxuICAgIHBhZ2UuZGF0YSA9ICc8IURPQ1RZUEUgSFRNTD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PC9ib2R5PjwvaHRtbD4nO1xyXG4gICAgcGFnZS5udW1iZXIgPSAxO1xyXG4gICAgcGFnZS5lZGl0YWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLmZpbGUucGFnZXMgPSBbXTtcclxuICAgIHRoaXMuZmlsZS5wYWdlcy5wdXNoKHBhZ2UpO1xyXG4gICAgdGhpcy5maWxlLmd1aWQgPSBcIm5ldyBkb2N1bWVudC5kb2N4XCI7XHJcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gbmV3IEZpbGVDcmVkZW50aWFscyhcIm5ldyBkb2N1bWVudC5kb2N4XCIsIFwiXCIpO1xyXG4gICAgdGhpcy5mb3JtYXREaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kb3dubG9hZERpc2FibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEZpbGUoJGV2ZW50OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG1vZGFsSWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG5ldyBGaWxlQ3JlZGVudGlhbHMoJGV2ZW50LCBwYXNzd29yZCk7XHJcbiAgICB0aGlzLl9lZGl0b3JTZXJ2aWNlLmxvYWRGaWxlKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZmlsZTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkRmlsZShmaWxlKTtcclxuICAgICAgICBjb25zdCBpc0lFID0gLypAY2Nfb24hQCovZmFsc2UgfHwgISEvKE1TSUV8VHJpZGVudFxcL3xFZGdlXFwvKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICAgICAgaWYoaXNJRSkge1xyXG4gICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmKCQoXCIuZG9jdW1lbnRNYWluQ29udGVudFwiKS5sZW5ndGggPiAwICl7XHJcbiAgICAgICAgICAgICAgJChcIi5kb2N1bWVudE1haW5Db250ZW50XCIpLmF0dHIoXCJjb250ZW50RWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7YXR0cmlidXRlczogZmFsc2UsIGNoaWxkTGlzdDogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogZmFsc2UsIHN1YnRyZWU6IHRydWV9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICB0aGlzLmNsZWFyRGF0YSgpO1xyXG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKG1vZGFsSWQpO1xyXG4gIH1cclxuXHJcbiAgZmlsZURyb3BwZWQoJGV2ZW50KXtcclxuICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPSAkZXZlbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRGaWxlKGZpbGU6IEZpbGVEZXNjcmlwdGlvbikge1xyXG4gICAgdGhpcy5maWxlID0gZmlsZTtcclxuICAgIGlmICh0aGlzLmZpbGUgJiYgdGhpcy5maWxlLnBhZ2VzWzBdKSB7XHJcbiAgICAgIHRoaXMuZmlsZS5wYWdlc1swXS5lZGl0YWJsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuZmlsZS5wYWdlc1swXS53aWR0aCA9IDU5NTtcclxuICAgICAgdGhpcy5maWxlLnBhZ2VzWzBdLmhlaWdodCA9IDg0MjtcclxuICAgICAgdGhpcy50ZXh0QmFja3VwID0gdGhpcy5maWxlLnBhZ2VzWzBdLmRhdGE7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvcm1hdERpc2FibGVkID0gIXRoaXMuZmlsZTtcclxuICAgIHRoaXMuZG93bmxvYWREaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8vIGFkZGluZyBsaXN0ZW5lcnMgb24gaW5wdXRzIGlmIHByZXNlbnQgb24gZXhpc3RpbmcgcGFnZVxyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGNvbnN0IHRpbWVySWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7IFxyXG4gICAgICBjb3VudCsrO1xyXG4gICAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2UnKTtcclxuICAgICAgaWYgKHBhZ2UpXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLmluaXRDb250cm9sc0xpc3RlbmVycygpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJZCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvdW50ID09PSAyMCkgY2xlYXJJbnRlcnZhbCgpO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdENvbnRyb2xzTGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIubGlzdGVuKGlucHV0LCAna2V5dXAnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaW5wdXQudmFsdWUpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcclxuICAgIHNlbGVjdHMuZm9yRWFjaChzZWxlY3QgPT4ge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5saXN0ZW4oc2VsZWN0LCAnY2hhbmdlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2VsZWN0cy5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IHMub3B0aW9ucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBzLm9wdGlvbnNbaV0ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckRhdGEoKSB7XHJcbiAgICBpZiAoIXRoaXMuZmlsZSB8fCAhdGhpcy5maWxlLnBhZ2VzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgcGFnZSBvZiB0aGlzLmZpbGUucGFnZXMpIHtcclxuICAgICAgcGFnZS5kYXRhID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwbG9hZCgkZXZlbnQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fZWRpdG9yU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Rm9udFNpemUoJGV2ZW50OiBPcHRpb24pIHtcclxuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxyXG4gICAgICByZXR1cm47XHJcbiAgICAkKFwiLmdkLXdyYXBwZXJcIikub2ZmKFwia2V5dXBcIik7XHJcbiAgICBpZih0aGlzLmlzSUUpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0Rm9udFNpemUoJGV2ZW50LnZhbHVlKTtcclxuICAgICQoXCIuZ2Qtd3JhcHBlclwiKS5vbihcImtleXVwXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgZm9udEVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb250XCIpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gZm9udEVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgaWYgKGZvbnRFbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ3NpemUnKSA9PT0gXCI3XCIpIHtcclxuICAgICAgICAgIGZvbnRFbGVtZW50c1tpXS5yZW1vdmVBdHRyaWJ1dGUoXCJzaXplXCIpO1xyXG4gICAgICAgICAgZm9udEVsZW1lbnRzW2ldLnN0eWxlLmZvbnRTaXplID0gJGV2ZW50ICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RGb250KCRldmVudDogT3B0aW9uKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYodGhpcy5pc0lFKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xyXG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEZvbnQoJGV2ZW50LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUNvbG9yUGlja2VyKCRldmVudCwgYmc6IGJvb2xlYW4pIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5pc0lFKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xyXG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcclxuICAgIH1cclxuICAgIGlmIChiZykge1xyXG4gICAgICB0aGlzLmJnQ29sb3JQaWNrZXJTaG93ID0gIXRoaXMuYmdDb2xvclBpY2tlclNob3c7XHJcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbG9yUGlja2VyU2hvdyA9ICF0aGlzLmNvbG9yUGlja2VyU2hvdztcclxuICAgICAgdGhpcy5iZ0NvbG9yUGlja2VyU2hvdyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRm9udFNlbGVjdCgkZXZlbnQsIGlzRm9udE5hbWU6IGJvb2xlYW4pIHtcclxuICAgIGlmIChpc0ZvbnROYW1lKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0Rm9udFNob3cgPSAhdGhpcy5zZWxlY3RGb250U2hvdztcclxuICAgICAgdGhpcy5zZWxlY3RGb250U2l6ZVNob3cgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0Rm9udFNpemVTaG93ID0gIXRoaXMuc2VsZWN0Rm9udFNpemVTaG93O1xyXG4gICAgICB0aGlzLnNlbGVjdEZvbnRTaG93ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RDb2xvcigkZXZlbnQ6IHN0cmluZykge1xyXG4gICAgaWYodGhpcy5pc0lFKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xyXG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJnQ29sb3JQaWNrZXJTaG93KSB7XHJcbiAgICAgIHRoaXMuYmdDb2xvclBpY2tlclNob3cgPSBmYWxzZTtcclxuICAgICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0QmdDb2xvcigkZXZlbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSBmYWxzZTtcclxuICAgICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0Q29sb3IoJGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUJvbGQoZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZih0aGlzLmlzSUUpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0Qm9sZCghdGhpcy5mb3JtYXR0aW5nLmJvbGQpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlVW5kbygpIHtcclxuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5VbmRvKCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVSZWRvKCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLlJlZG8oKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUl0YWxpYyhldmVudCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmKHRoaXMuaXNJRSkge1xyXG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKTtcclxuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRJdGFsaWMoIXRoaXMuZm9ybWF0dGluZy5pdGFsaWMpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlVW5kZXJsaW5lKGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYodGhpcy5pc0lFKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xyXG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdFVuZGVybGluZSghdGhpcy5mb3JtYXR0aW5nLnVuZGVybGluZSk7XHJcbiAgfVxyXG5cclxuICBoaWRlQWxsKCRldmVudCkge1xyXG4gICAgaWYgKCgkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgJiYgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXNbJ25hbWUnXSAmJlxyXG4gICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddLnZhbHVlID09PSAnYnV0dG9uJykgfHxcclxuICAgICAgKCRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmXHJcbiAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXNbJ25hbWUnXSAmJlxyXG4gICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10udmFsdWUgPT09ICdidXR0b24nKSkge1xyXG5cclxuICAgICAgdGhpcy5fb25DbG9zZVNlcnZpY2UuY2xvc2UodHJ1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XHJcbiAgICB0aGlzLmJnQ29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XHJcbiAgICB0aGlzLl9vbkNsb3NlU2VydmljZS5jbG9zZSh0cnVlKTtcclxuXHJcbiAgICAvLyB3ZSB0cnkgdG8gc2F2ZSB0aGUgY2hhbmdlcyBvbiBhbnkgY2xpY2sgb3V0c2lkZVxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC13cmFwcGVyJylbMF0pIHtcclxuICAgICAgdGhpcy50ZXh0QmFja3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdkLXdyYXBwZXInKVswXS5pbm5lckhUTUwudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZVN0cmlrZW91dChldmVudCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmKHRoaXMuaXNJRSkge1xyXG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKTtcclxuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRTdHJpa2VvdXQoIXRoaXMuZm9ybWF0dGluZy5zdHJpa2VvdXQpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQWxpZ24oYWxpZ246IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmIChhbGlnbiA9PT0gdGhpcy5mb3JtYXR0aW5nLmFsaWduKSB7XHJcbiAgICAgIGFsaWduID0gJ2Z1bGwnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0QWxpZ24oYWxpZ24pO1xyXG4gICAgdGhpcy5mb3JtYXR0aW5nLmFsaWduID0gYWxpZ247XHJcbiAgfVxyXG5cclxuICB0b2dnbGVMaXN0KGxpc3Q6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBpZiAobGlzdCA9PT0gdGhpcy5mb3JtYXR0aW5nLmxpc3QpIHtcclxuICAgICAgdGhpcy5mb3JtYXR0aW5nLmxpc3QgPSBcIlwiO1xyXG4gICAgICAvLyB0byB0cmlnZ2VyIGNoYW5nZXMgaW4gY29udGVudEVkaXRhYmxlXHJcbiAgICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdExpc3QobGlzdCk7XHJcbiAgICAgIC8vIHRvIGNsZWFyIHRoZSB0b2dnbGUgc3RhdHVzIG9mIHRoZSBidXR0b24gb25seVxyXG4gICAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRMaXN0KFwiXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mb3JtYXR0aW5nLmxpc3QgPSBsaXN0O1xyXG4gICAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRMaXN0KGxpc3QpO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5pc0lFKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xyXG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvd25sb2FkRmlsZSgpIHtcclxuICAgIGlmICh0aGlzLmRvd25sb2FkRGlzYWJsZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odGhpcy5fZWRpdG9yU2VydmljZS5nZXREb3dubG9hZFVybCh0aGlzLmNyZWRlbnRpYWxzKSk7XHJcbiAgfVxyXG5cclxuICBzYXZlKCl7XHJcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgaWYodGhpcy5jcmVkZW50aWFscykge1xyXG4gICAgICBpZiAodGhpcy5maWxlLmd1aWQgPT09IFwibmV3IGRvY3VtZW50LmRvY3hcIikge1xyXG4gICAgICAgIHRoaXMub3Blbk1vZGFsKENvbW1vbk1vZGFscy5DcmVhdGVEb2N1bWVudCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zYXZlRmlsZSh0aGlzLmNyZWRlbnRpYWxzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiBzYXZlRmlsZShjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XHJcbiAgICBpZiAoIXRoaXMuZmlsZSB8fCAhdGhpcy5maWxlLnBhZ2VzKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdGhpcy50ZXh0QmFja3VwID0gdGhpcy5nZXRQYWdlV2l0aFJvb3RUYWdzKHRoaXMudGV4dEJhY2t1cCwgY3JlZGVudGlhbHMuZ3VpZCk7XHJcblxyXG4gICAgY29uc3Qgc2F2ZUZpbGUgPSBuZXcgU2F2ZUZpbGUoY3JlZGVudGlhbHMuZ3VpZCwgY3JlZGVudGlhbHMucGFzc3dvcmQsIHRoaXMudGV4dEJhY2t1cCk7XHJcbiAgICB0aGlzLl9lZGl0b3JTZXJ2aWNlLnNhdmUoc2F2ZUZpbGUpLnN1YnNjcmliZSgobG9hZEZpbGU6IEZpbGVEZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRGaWxlKGxvYWRGaWxlKTtcclxuICAgICAgdGhpcy5jcmVkZW50aWFscyA9IG5ldyBGaWxlQ3JlZGVudGlhbHMobG9hZEZpbGUuZ3VpZCwgY3JlZGVudGlhbHMucGFzc3dvcmQpO1xyXG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuT3BlcmF0aW9uU3VjY2Vzcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNhdmVOZXdGaWxlKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcclxuICAgIGlmICghdGhpcy5maWxlIHx8ICF0aGlzLmZpbGUucGFnZXMpXHJcbiAgICB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRleHRCYWNrdXAgPSB0aGlzLmdldFBhZ2VXaXRoUm9vdFRhZ3ModGhpcy50ZXh0QmFja3VwLCBjcmVkZW50aWFscy5ndWlkKTtcclxuXHJcbiAgICBjb25zdCBzYXZlRmlsZSA9IG5ldyBTYXZlRmlsZShjcmVkZW50aWFscy5ndWlkLCBjcmVkZW50aWFscy5wYXNzd29yZCwgdGhpcy50ZXh0QmFja3VwKTtcclxuICAgIHRoaXMuX2VkaXRvclNlcnZpY2UuY3JlYXRlKHNhdmVGaWxlKS5zdWJzY3JpYmUoKGxvYWRGaWxlOiBGaWxlRGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgdGhpcy5sb2FkRmlsZShsb2FkRmlsZSk7XHJcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBuZXcgRmlsZUNyZWRlbnRpYWxzKGxvYWRGaWxlLmd1aWQsIGNyZWRlbnRpYWxzLnBhc3N3b3JkKTtcclxuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLk9wZXJhdGlvblN1Y2Nlc3MpO1xyXG4gICAgICB0aGlzLm5ld0ZpbGUgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gUmV0dXJucyByb290LXRhZ3MgaW4gdGhlIEhUTUwtbWFya3VwIHdoaWNoIHByZXZpb3VzbHkgd2VyZSByZW1vdmVkIGJ5IGlubmVySFRNTC5cclxuICBnZXRQYWdlV2l0aFJvb3RUYWdzKGRhdGEsIGd1aWQpIHtcclxuICAgIGNvbnN0IHBwdEZvcm1hdHMgPSBbXCJwcHRcIiwgXCJwcHR4XCIsIFwicHB0bVwiLCBcInBwc1wiLCBcInBwc3hcIiwgXCJwcHNtXCIsIFwicG90XCIsIFwicG90eFwiLCBcInBvdG1cIiwgXCJvZHBcIiwgXCJvdHBcIl07XHJcbiAgICBsZXQgcmVzdWx0RGF0YSA9IGRhdGE7XHJcblxyXG4gICAgaWYgKCFkYXRhLnN0YXJ0c1dpdGgoXCI8aHRtbD48aGVhZD5cIikgJiYgIWRhdGEuZW5kc1dpdGgoXCI8L2JvZHk+PC9odG1sPlwiKSkge1xyXG4gICAgICByZXN1bHREYXRhID0gXCI8aHRtbD48aGVhZD5cIiArIGRhdGEgKyBcIjwvYm9keT48L2h0bWw+XCI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICh0aGlzLm5ld0ZpbGUpXHJcbiAgICB7XHJcbiAgICAgIHJlc3VsdERhdGEgPSByZXN1bHREYXRhLnJlcGxhY2UoJzxoZWFkPicsICc8aGVhZD48bWV0YSBodHRwLWVxdWl2PVwiY29udGVudC10eXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiPjwvaGVhZD48Ym9keT4nKTtcclxuICAgICAgaWYgKHBwdEZvcm1hdHMuaW5jbHVkZXMoZ3VpZC5zcGxpdCgnLicpLnBvcCgpKSlcclxuICAgICAge1xyXG4gICAgICAgIHJlc3VsdERhdGEgPSByZXN1bHREYXRhLnJlcGxhY2UoJzxib2R5PicsICc8Ym9keT48ZGl2IGNsYXNzPVwic2xpZGVcIj4nKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVzdWx0RGF0YSA9IHJlc3VsdERhdGEucmVwbGFjZSgnPGJvZHk+JywgJzxib2R5PjxkaXYgY2xhc3M9XCJkb2N1bWVudE1haW5Db250ZW50XCI+Jyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlc3VsdERhdGEgPSByZXN1bHREYXRhLnJlcGxhY2UoJzwvYm9keT4nLCAnPC9kaXY+PC9ib2R5PicpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBcclxuICAgIHtcclxuICAgICAgLy8gZm9yIFdvcmQgZmlsZXNcclxuICAgICAgcmVzdWx0RGF0YSA9IHJlc3VsdERhdGEucmVwbGFjZSgnPGRpdiBjbGFzcz1cImRvY3VtZW50TWFpbkNvbnRlbnRcIj4nLCAnPC9oZWFkPjxib2R5PjxkaXYgY2xhc3M9XCJkb2N1bWVudE1haW5Db250ZW50XCI+Jyk7XHJcbiAgICAgIC8vIGZvciBQcmVzZW50YXRpb25zIGZpbGVzXHJcbiAgICAgIHJlc3VsdERhdGEgPSByZXN1bHREYXRhLnJlcGxhY2UoJzxkaXYgY2xhc3M9XCJzbGlkZVwiJywgJzwvaGVhZD48Ym9keT48ZGl2IGNsYXNzPVwic2xpZGVcIicpO1xyXG4gICAgICAvLyBmb3IgRXhjZWwgZmlsZXNcclxuICAgICAgcmVzdWx0RGF0YSA9IHJlc3VsdERhdGEucmVwbGFjZSgnPC9zdHlsZT48dGFibGUnLCAnPC9zdHlsZT48L2hlYWQ+PGJvZHk+PHRhYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdWx0RGF0YSA9IHJlc3VsdERhdGEucmVwbGFjZSgnPG1haW4gY2xhc3M9XCJkb2N1bWVudE1haW5Db250ZW50XCI+JywgJzwvaGVhZD48Ym9keT48bWFpbiBjbGFzcz1cImRvY3VtZW50TWFpbkNvbnRlbnRcIj4nKTtcclxuICAgIHJldHVybiByZXN1bHREYXRhO1xyXG4gIH1cclxuXHJcbiAgcHJpbnRGaWxlKCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGlmKHRoaXMuZmlsZS5wYWdlcykge1xyXG4gICAgICBjb25zdCBwYWdlID0gbmV3IFBhZ2VNb2RlbDtcclxuICAgICAgcGFnZS53aWR0aCA9IDU5NTtcclxuICAgICAgcGFnZS5oZWlnaHQgPSA4NDI7XHJcbiAgICAgIC8vIHVzaW5nIG9mIHRoZSByZXBsYWNlIGlzIHJlcXVpcmVkIHRvIGZpeCBpc3N1ZSB3aXRoIHBhZGRpbmcgZm9yIGludGlyZSBwcmludCBjb250ZW50XHJcbiAgICAgIHBhZ2UuZGF0YSA9IHRoaXMudGV4dEJhY2t1cC5yZXBsYWNlKCc8L3N0eWxlPicsICdib2R5IHsgcGFkZGluZzogOTZweDsgfSA8L3N0eWxlPicpO1xyXG4gICAgICBjb25zdCBwcmludEh0bWwgPSBbcGFnZV07XHJcbiAgICAgIHRoaXMuX3JlbmRlclByaW50U2VydmljZS5jaGFuZ2VQYWdlcyhwcmludEh0bWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbG9zZU1vZGFsKCRldmVudCkge1xyXG4gICAgaWYgKHRoaXMuZmlsZSAmJiAkZXZlbnQpIHtcclxuICAgICAgaWYodGhpcy5pc0lFKSB7XHJcbiAgICAgICAgJChcIi5kb2N1bWVudE1haW5Db250ZW50XCIpLmF0dHIoXCJjb250ZW50RWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZmlsZS5wYWdlc1swXS5lZGl0YWJsZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==