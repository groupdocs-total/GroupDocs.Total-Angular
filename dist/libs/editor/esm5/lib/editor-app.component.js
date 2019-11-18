/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EditorService } from "./editor.service";
import { FileDescription, ModalService, UploadFilesService, PasswordService, FileCredentials, CommonModals, PageModel, FormattingService, Formatting, BackFormattingService, OnCloseService, SaveFile, SelectionService, EditHtmlService, RenderPrintService, WindowService, LoadingMaskService } from '@groupdocs.examples.angular/common-components';
import { EditorConfigService } from "./editor-config.service";
import * as jquery from 'jquery';
/** @type {?} */
var $ = jquery;
var EditorAppComponent = /** @class */ (function () {
    function EditorAppComponent(_editorService, _modalService, configService, uploadFilesService, passwordService, _windowService, _formattingService, _backFormattingService, _onCloseService, _selectionService, _htmlService, _renderPrintService, _loadingMaskService) {
        var _this = this;
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
        this.isIE = /*@cc_on!@*/ false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
        configService.updatedConfig.subscribe((/**
         * @param {?} editorConfig
         * @return {?}
         */
        function (editorConfig) {
            _this.editorConfig = editorConfig;
        }));
        uploadFilesService.uploadsChange.subscribe((/**
         * @param {?} uploads
         * @return {?}
         */
        function (uploads) {
            if (uploads) {
                /** @type {?} */
                var i = void 0;
                for (i = 0; i < uploads.length; i++) {
                    _this._editorService.upload(uploads.item(i), '', _this.editorConfig.rewrite).subscribe((/**
                     * @param {?} obj
                     * @return {?}
                     */
                    function (obj) {
                        _this.fileWasDropped ? _this.selectFile(obj.guid, '', '') : _this.selectDir('');
                    }));
                }
            }
        }));
        passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        function (pass) {
            _this.selectFile(_this.credentials.guid, pass, CommonModals.PasswordRequired);
        }));
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            _this.isDesktop = _windowService.isDesktop();
        }));
        this._backFormattingService.formatBoldChange.subscribe((/**
         * @param {?} bold
         * @return {?}
         */
        function (bold) {
            _this.formatting.bold = bold;
        }));
        this._backFormattingService.formatItalicChange.subscribe((/**
         * @param {?} italic
         * @return {?}
         */
        function (italic) {
            _this.formatting.italic = italic;
        }));
        this._backFormattingService.formatUnderlineChange.subscribe((/**
         * @param {?} underline
         * @return {?}
         */
        function (underline) {
            _this.formatting.underline = underline;
        }));
        this._backFormattingService.formatColorChange.subscribe((/**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            _this.formatting.color = color;
        }));
        this._backFormattingService.formatBgColorChange.subscribe((/**
         * @param {?} bgcolor
         * @return {?}
         */
        function (bgcolor) {
            _this.formatting.bgColor = bgcolor;
        }));
        this._backFormattingService.formatFontSizeChange.subscribe((/**
         * @param {?} fontSize
         * @return {?}
         */
        function (fontSize) {
            _this.formatting.fontSize = fontSize;
        }));
        this._backFormattingService.formatFontChange.subscribe((/**
         * @param {?} font
         * @return {?}
         */
        function (font) {
            _this.formatting.font = font;
        }));
        this._backFormattingService.formatStrikeoutChange.subscribe((/**
         * @param {?} strikeout
         * @return {?}
         */
        function (strikeout) {
            _this.formatting.strikeout = strikeout;
        }));
        this._backFormattingService.formatAlignChange.subscribe((/**
         * @param {?} align
         * @return {?}
         */
        function (align) {
            _this.formatting.align = align;
        }));
        this._backFormattingService.formatListChange.subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            _this.formatting.list = list;
        }));
        this._formattingService.formatBoldChange.subscribe((/**
         * @param {?} bold
         * @return {?}
         */
        function (bold) {
            _this.formatting.bold = bold;
        }));
        this._formattingService.formatItalicChange.subscribe((/**
         * @param {?} italic
         * @return {?}
         */
        function (italic) {
            _this.formatting.italic = italic;
        }));
        this._formattingService.formatUnderlineChange.subscribe((/**
         * @param {?} underline
         * @return {?}
         */
        function (underline) {
            _this.formatting.underline = underline;
        }));
        this._formattingService.formatColorChange.subscribe((/**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            _this.formatting.color = color;
        }));
        this._formattingService.formatBgColorChange.subscribe((/**
         * @param {?} bgcolor
         * @return {?}
         */
        function (bgcolor) {
            _this.formatting.bgColor = bgcolor;
        }));
        this._formattingService.formatFontSizeChange.subscribe((/**
         * @param {?} fontSize
         * @return {?}
         */
        function (fontSize) {
            _this.formatting.fontSize = fontSize;
        }));
        this._formattingService.formatFontChange.subscribe((/**
         * @param {?} font
         * @return {?}
         */
        function (font) {
            _this.formatting.font = font;
        }));
        this._formattingService.formatStrikeoutChange.subscribe((/**
         * @param {?} strikeout
         * @return {?}
         */
        function (strikeout) {
            _this.formatting.strikeout = strikeout;
        }));
        this._formattingService.formatAlignChange.subscribe((/**
         * @param {?} align
         * @return {?}
         */
        function (align) {
            _this.formatting.align = align;
        }));
        this._formattingService.formatListChange.subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            _this.formatting.list = list;
        }));
        this._htmlService.htmlContent.subscribe((/**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            if (_this.file && _this.file.pages) {
                _this.textBackup = text;
            }
        }));
    }
    /**
     * @return {?}
     */
    EditorAppComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.editorConfig.defaultDocument !== "") {
            this.isLoading = true;
            this.selectFile(this.editorConfig.defaultDocument, "", "");
        }
    };
    /**
     * @return {?}
     */
    EditorAppComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._loadingMaskService
            .onLoadingChanged
            .subscribe((/**
         * @param {?} loading
         * @return {?}
         */
        function (loading) { return _this.isLoading = loading; }));
    };
    Object.defineProperty(EditorAppComponent.prototype, "rewriteConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.editorConfig ? this.editorConfig.rewrite : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorAppComponent.prototype, "downloadConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.editorConfig ? this.editorConfig.download : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorAppComponent.prototype, "uploadConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.editorConfig ? this.editorConfig.upload : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorAppComponent.prototype, "printConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.editorConfig ? this.editorConfig.print : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorAppComponent.prototype, "browseConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.editorConfig ? this.editorConfig.browse : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorAppComponent.prototype, "enableRightClickConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.editorConfig ? this.editorConfig.enableRightClick : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorAppComponent.prototype, "pageSelectorConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.editorConfig ? this.editorConfig.pageSelector : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorAppComponent.prototype, "createNewFileConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.editorConfig ? this.editorConfig.createNewFile : true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} id
     * @return {?}
     */
    EditorAppComponent.prototype.openModal = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (this.file) {
            this.file.pages[0].editable = false;
        }
        this._modalService.open(id);
    };
    /**
     * @return {?}
     */
    EditorAppComponent.prototype.openSave = /**
     * @return {?}
     */
    function () {
        if (!this.formatDisabled) {
            this.openModal(CommonModals.CreateDocument);
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    EditorAppComponent.prototype.selectDir = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        this._editorService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        function (files) { return _this.files = files || []; }));
    };
    /**
     * @private
     * @param {?} pt
     * @return {?}
     */
    EditorAppComponent.prototype.ptToPx = /**
     * @private
     * @param {?} pt
     * @return {?}
     */
    function (pt) {
        //pt * 96 / 72 = px.
        return pt * 96 / 72;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    EditorAppComponent.prototype.onRightClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        return this.enableRightClickConfig;
    };
    /**
     * @return {?}
     */
    EditorAppComponent.prototype.createFile = /**
     * @return {?}
     */
    function () {
        this.file = new FileDescription();
        /** @type {?} */
        var page = new PageModel;
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
    };
    /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @return {?}
     */
    EditorAppComponent.prototype.selectFile = /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @return {?}
     */
    function ($event, password, modalId) {
        var _this = this;
        this.credentials = new FileCredentials($event, password);
        this._editorService.loadFile(this.credentials).subscribe((/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            _this.loadFile(file);
            /** @type {?} */
            var isIE = /*@cc_on!@*/ false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
            if (isIE) {
                /** @type {?} */
                var observer_1 = new MutationObserver((/**
                 * @param {?} mutations
                 * @return {?}
                 */
                function (mutations) {
                    if ($(".documentMainContent").length > 0) {
                        $(".documentMainContent").attr("contentEditable", "true");
                        observer_1.disconnect();
                    }
                }));
                observer_1.observe(document, { attributes: false, childList: true, characterData: false, subtree: true });
            }
        }));
        this.clearData();
        this._modalService.close(modalId);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    EditorAppComponent.prototype.fileDropped = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.fileWasDropped = $event;
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    EditorAppComponent.prototype.loadFile = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.file = file;
        if (this.file && this.file.pages[0]) {
            this.file.pages[0].editable = true;
            this.file.pages[0].width = 595;
            this.file.pages[0].height = 842;
            this.textBackup = this.file.pages[0].data;
        }
        this.formatDisabled = !this.file;
        this.downloadDisabled = false;
    };
    /**
     * @private
     * @return {?}
     */
    EditorAppComponent.prototype.clearData = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        if (!this.file || !this.file.pages) {
            return;
        }
        try {
            for (var _b = tslib_1.__values(this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                var page = _c.value;
                page.data = null;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    EditorAppComponent.prototype.upload = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        this._editorService.upload(null, $event, this.rewriteConfig).subscribe((/**
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
    EditorAppComponent.prototype.selectFontSize = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
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
        function () {
            /** @type {?} */
            var fontElements = document.getElementsByTagName("font");
            for (var i = 0, len = fontElements.length; i < len; ++i) {
                if (fontElements[i].getAttribute('size') === "7") {
                    fontElements[i].removeAttribute("size");
                    fontElements[i].style.fontSize = $event + "px";
                }
            }
        }));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    EditorAppComponent.prototype.selectFont = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.formatDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        if (this.isIE) {
            this._selectionService.restoreSelection();
            this._selectionService.captureSelection();
        }
        this._formattingService.changeFormatFont($event.value);
    };
    /**
     * @param {?} bg
     * @return {?}
     */
    EditorAppComponent.prototype.toggleColorPicker = /**
     * @param {?} bg
     * @return {?}
     */
    function (bg) {
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
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    EditorAppComponent.prototype.selectColor = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    EditorAppComponent.prototype.toggleBold = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.formatDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        if (this.isIE) {
            this._selectionService.restoreSelection();
            this._selectionService.captureSelection();
        }
        this._formattingService.changeFormatBold(!this.formatting.bold);
    };
    /**
     * @return {?}
     */
    EditorAppComponent.prototype.toggleUndo = /**
     * @return {?}
     */
    function () {
        if (this.formatDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        this._formattingService.Undo();
    };
    /**
     * @return {?}
     */
    EditorAppComponent.prototype.toggleRedo = /**
     * @return {?}
     */
    function () {
        if (this.formatDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        this._formattingService.Redo();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    EditorAppComponent.prototype.toggleItalic = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.formatDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        if (this.isIE) {
            this._selectionService.restoreSelection();
            this._selectionService.captureSelection();
        }
        this._formattingService.changeFormatItalic(!this.formatting.italic);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    EditorAppComponent.prototype.toggleUnderline = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.formatDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        if (this.isIE) {
            this._selectionService.restoreSelection();
            this._selectionService.captureSelection();
        }
        this._formattingService.changeFormatUnderline(!this.formatting.underline);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    EditorAppComponent.prototype.hideAll = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    EditorAppComponent.prototype.toggleStrikeout = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.formatDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        if (this.isIE) {
            this._selectionService.restoreSelection();
            this._selectionService.captureSelection();
        }
        this._formattingService.changeFormatStrikeout(!this.formatting.strikeout);
    };
    /**
     * @param {?} align
     * @return {?}
     */
    EditorAppComponent.prototype.toggleAlign = /**
     * @param {?} align
     * @return {?}
     */
    function (align) {
        if (this.formatDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        if (align === this.formatting.align) {
            align = 'full';
        }
        this._formattingService.changeFormatAlign(align);
        this.formatting.align = align;
    };
    /**
     * @param {?} list
     * @return {?}
     */
    EditorAppComponent.prototype.toggleList = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
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
    };
    /**
     * @return {?}
     */
    EditorAppComponent.prototype.downloadFile = /**
     * @return {?}
     */
    function () {
        if (this.downloadDisabled)
            return;
        window.location.assign(this._editorService.getDownloadUrl(this.credentials));
    };
    /**
     * @return {?}
     */
    EditorAppComponent.prototype.save = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} credentials
     * @return {?}
     */
    EditorAppComponent.prototype.saveFile = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        var _this = this;
        if (!this.file || !this.file.pages)
            return;
        /** @type {?} */
        var saveFile = new SaveFile(credentials.guid, credentials.password, this.textBackup);
        this._editorService.save(saveFile).subscribe((/**
         * @param {?} loadFile
         * @return {?}
         */
        function (loadFile) {
            _this.loadFile(loadFile);
            _this.credentials = new FileCredentials(loadFile.guid, credentials.password);
            _this._modalService.open(CommonModals.OperationSuccess);
        }));
    };
    /**
     * @return {?}
     */
    EditorAppComponent.prototype.printFile = /**
     * @return {?}
     */
    function () {
        if (this.formatDisabled)
            return;
        if (this.file.pages) {
            /** @type {?} */
            var page = new PageModel;
            page.width = 595;
            page.height = 842;
            // using of the replace is required to fix issue with padding for intire print content
            page.data = this.textBackup.replace('</style>', 'body { padding: 96px; } </style>');
            /** @type {?} */
            var printHtml = [page];
            this._renderPrintService.changePages(printHtml);
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    EditorAppComponent.prototype.onCloseModal = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.file && $event) {
            if (this.isIE) {
                $(".documentMainContent").attr("contentEditable", "true");
            }
            else {
                this.file.pages[0].editable = true;
            }
            this._selectionService.restoreSelection();
        }
    };
    EditorAppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-editor-angular-root',
                    template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\" (click)=\"hideAll($event)\">\n  <gd-tabbed-toolbars [logo]=\"'editor'\" [icon]=\"'pen-square'\">\n    <gd-tabs>\n      <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'file'\" [tooltip]=\"'Create document'\" (click)=\"createFile()\"\n                     *ngIf=\"createNewFileConfig\"></gd-button>\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                     *ngIf=\"browseConfig\"></gd-button>\n          <gd-button [disabled]=\"downloadDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                     (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                     *ngIf=\"printConfig\" ></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save File'\" (click)=\"save()\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'pencil-alt'\" [iconClass]=\"'save-as-button-icon'\" [tooltip]=\"'Save File As'\" (click)=\"openSave()\">\n            <fa-icon [icon]=\"['fas','save']\" class=\"save-button\" size=\"xs\"></fa-icon>\n          </gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab [tabTitle]=\"'Formatting'\" [icon]=\"'edit'\" [id]=\"'2'\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Undo'\"\n                     (click)=\"toggleUndo()\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Redo'\"\n                     (click)=\"toggleRedo()\"></gd-button>\n          <gd-select class=\"format-select\" [disabled]=\"formatDisabled\" [options]=\"fontOptions\"\n                     (selected)=\"selectFont($event)\"\n                     [showSelected]=\"{name : formatting.font, value : formatting.font}\"></gd-select>\n          <gd-select class=\"format-select\" [disabled]=\"formatDisabled\" [options]=\"fontSizeOptions\"\n                     (selected)=\"selectFontSize($event)\"\n                     [showSelected]=\"{name : formatting.fontSize + 'px', value : formatting.fontSize}\"></gd-select>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'bold'\" [tooltip]=\"'Bold'\"\n                     (click)=\"toggleBold($event)\" [toggle]=\"formatting.bold\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'italic'\" [tooltip]=\"'Italic'\"\n                     (click)=\"toggleItalic($event)\" [toggle]=\"formatting.italic\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'underline'\" [tooltip]=\"'Underline'\"\n                     (click)=\"toggleUnderline($event)\" [toggle]=\"formatting.underline\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'strikethrough'\" [tooltip]=\"'Strike out'\"\n                     (click)=\"toggleStrikeout($event)\" [toggle]=\"formatting.strikeout\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-center'\" [tooltip]=\"'Align center'\"\n                     (click)=\"toggleAlign('center')\" [toggle]=\"formatting.align == 'center' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-justify'\" [tooltip]=\"'Align full'\"\n                     (click)=\"toggleAlign('full')\" [toggle]=\"formatting.align == 'full' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-right'\" [tooltip]=\"'Align right'\"\n                     (click)=\"toggleAlign('right')\" [toggle]=\"formatting.align == 'right' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-left'\" [tooltip]=\"'Align left'\"\n                     (click)=\"toggleAlign('left')\" [toggle]=\"formatting.align == 'left' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ul'\" [tooltip]=\"'Add Unordered List'\"\n                     (click)=\"toggleList('unordered')\" [toggle]=\"formatting.list == 'unordered' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ol'\" [tooltip]=\"'Add Ordered List'\"\n                     (click)=\"toggleList('ordered')\" [toggle]=\"formatting.list == 'ordered' ? true : false\"></gd-button>\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'fill'\" [tooltip]=\"'Background color'\"\n                     (click)=\"toggleColorPicker(true)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.bgColor\"></div>\n          </gd-button>\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'font'\" [tooltip]=\"'Color'\" (click)=\"toggleColorPicker(false)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.color\"></div>\n          </gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n    </gd-tabs>\n  </gd-tabbed-toolbars>\n  <gd-color-picker *ngIf=\"bgColorPickerShow || colorPickerShow\"\n                   [className]=\"'palette ' + (bgColorPickerShow ? 'background-color-picker' : 'color-picker')\"\n                   (selectedColor)=\"selectColor($event)\"></gd-color-picker>\n  <div class=\"doc-panel\" *ngIf=\"file\">\n    <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"true\" [htmlMode]=\"true\"\n                 [preloadPageCount]=\"0\" gdFormatting gdRenderPrint gdScrollable>\n    </gd-document>\n  </div>\n  <gd-init-state [icon]=\"'pen-square'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n      Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n      Or drop file here\n  </gd-init-state>\n  <gd-browse-files-modal\n    (closing)=\"onCloseModal($event)\"\n    (urlForUpload)=\"upload($event)\"\n    [files]=\"files\"\n    (selectedDirectory)=\"selectDir($event)\"\n    (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n    [uploadConfig]=\"uploadConfig\"\n  ></gd-browse-files-modal>\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-create-document-modal (closing)=\"onCloseModal($event)\" [file]=\"credentials\" (savingFile)=\"saveFile($event)\"></gd-create-document-modal>\n  <gd-success-modal></gd-success-modal>\n</div>\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.current-page-number{margin:0 15px;font-size:14px;color:#959da5}*{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:text}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:flex;height:inherit}.gd-document{width:100%;height:calc(100% - 90px)}.top-panel{display:flex;align-items:center;width:100%}.toolbar-panel{width:100%}/deep/ .gd-wrapper{padding:96px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;outline:0}/deep/ .dropdown-menu{min-width:unset!important}.format-select{margin:0 15px}.palette{position:absolute;top:90px;z-index:100}.background-color-picker{left:700px}.color-picker{left:750px}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}/deep/ .button.inactive{color:#ccc!important}/deep/ .tab-content .button .tooltip{margin-top:45px;margin-left:-36px}/deep/ .gd-edit.active{background-color:#7e8991;border-radius:5px}/deep/ .gd-edit.active i{color:#fff}/deep/ .page{width:800px}/deep/ .save-as-button-icon{font-size:11px;left:22px!important;top:13px!important}.save-button{position:absolute;top:-5px;left:21px}@media (max-width:1037px){/deep/ .panzoom{zoom:.4;margin-top:160px}}"]
                }] }
    ];
    /** @nocollapse */
    EditorAppComponent.ctorParameters = function () { return [
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
    ]; };
    return EditorAppComponent;
}());
export { EditorAppComponent };
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
    /** @type {?} */
    EditorAppComponent.prototype.fileWasDropped;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxlQUFlLEVBRWYsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixlQUFlLEVBQ2YsZUFBZSxFQUNmLFlBQVksRUFDWixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixxQkFBcUIsRUFDckIsY0FBYyxFQUNkLFFBQVEsRUFDUixnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixhQUFhLEVBQ2Isa0JBQWtCLEVBQ25CLE1BQU0sK0NBQStDLENBQUM7QUFFdkQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O0lBQzNCLENBQUMsR0FBRyxNQUFNO0FBRWhCO0lBMEJFLDRCQUFvQixjQUE2QixFQUM3QixhQUEyQixFQUNuQyxhQUFrQyxFQUNsQyxrQkFBc0MsRUFDdEMsZUFBZ0MsRUFDeEIsY0FBNkIsRUFDN0Isa0JBQXFDLEVBQ3JDLHNCQUE2QyxFQUM3QyxlQUErQixFQUMvQixpQkFBbUMsRUFDbkMsWUFBNkIsRUFDN0IsbUJBQXVDLEVBQ3ZDLG1CQUF1QztRQVozRCxpQkFrSEM7UUFsSG1CLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBSTNCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsMkJBQXNCLEdBQXRC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LHlDQUE2Qjs7SUFDN0IsOENBQTRDOztJQUM1Qyx1Q0FBbUI7O0lBQ25CLHdDQUE4Qzs7SUFDOUMsNkNBQXlEOztJQUN6RCx5Q0FBaUQ7O0lBQ2pELCtDQUEwQjs7SUFDMUIsNkNBQXdCOztJQUN4QixvQ0FBZTs7Ozs7SUFDZix3Q0FBMkI7Ozs7O0lBQzNCLGtDQUFxQjs7SUFDckIsdUNBQW1COztJQUNuQiw0Q0FBc0I7Ozs7O0lBRVYsNENBQXFDOzs7OztJQUNyQywyQ0FBbUM7Ozs7O0lBSW5DLDRDQUFxQzs7Ozs7SUFDckMsZ0RBQTZDOzs7OztJQUM3QyxvREFBcUQ7Ozs7O0lBQ3JELDZDQUF1Qzs7Ozs7SUFDdkMsK0NBQTJDOzs7OztJQUMzQywwQ0FBcUM7Ozs7O0lBQ3JDLGlEQUErQzs7Ozs7SUFDL0MsaURBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0VkaXRvclNlcnZpY2V9IGZyb20gXCIuL2VkaXRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuICBGaWxlRGVzY3JpcHRpb24sXG4gIEZpbGVNb2RlbCxcbiAgTW9kYWxTZXJ2aWNlLFxuICBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gIFBhc3N3b3JkU2VydmljZSxcbiAgRmlsZUNyZWRlbnRpYWxzLFxuICBDb21tb25Nb2RhbHMsXG4gIFBhZ2VNb2RlbCxcbiAgRm9ybWF0dGluZ1NlcnZpY2UsXG4gIEZvcm1hdHRpbmcsXG4gIEJhY2tGb3JtYXR0aW5nU2VydmljZSxcbiAgT25DbG9zZVNlcnZpY2UsXG4gIFNhdmVGaWxlLFxuICBTZWxlY3Rpb25TZXJ2aWNlLFxuICBFZGl0SHRtbFNlcnZpY2UsXG4gIFJlbmRlclByaW50U2VydmljZSxcbiAgV2luZG93U2VydmljZSxcbiAgTG9hZGluZ01hc2tTZXJ2aWNlLCBPcHRpb25cbn0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcbmltcG9ydCB7RWRpdG9yQ29uZmlnfSBmcm9tIFwiLi9lZGl0b3ItY29uZmlnXCI7XG5pbXBvcnQge0VkaXRvckNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL2VkaXRvci1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1lZGl0b3ItYW5ndWxhci1yb290JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXRvci1hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lZGl0b3ItYXBwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgRWRpdG9yQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0ICB7XG4gIHRpdGxlID0gJ2VkaXRvcic7XG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xuICBmaWxlOiBGaWxlRGVzY3JpcHRpb247XG4gIGVkaXRvckNvbmZpZzogRWRpdG9yQ29uZmlnO1xuICBmb3JtYXREaXNhYmxlZCA9ICF0aGlzLmZpbGU7XG4gIGRvd25sb2FkRGlzYWJsZWQgPSB0cnVlO1xuICBjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzO1xuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xuICBpc0Rlc2t0b3A6IGJvb2xlYW47XG4gIGZvcm1hdHRpbmc6IEZvcm1hdHRpbmcgPSBGb3JtYXR0aW5nLmRlZmF1bHQoKTtcbiAgZm9udFNpemVPcHRpb25zID0gRm9ybWF0dGluZ1NlcnZpY2UuZ2V0Rm9udFNpemVPcHRpb25zKCk7XG4gIGZvbnRPcHRpb25zID0gRm9ybWF0dGluZ1NlcnZpY2UuZ2V0Rm9udE9wdGlvbnMoKTtcbiAgYmdDb2xvclBpY2tlclNob3cgPSBmYWxzZTtcbiAgY29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gIGFjdGl2ZSA9IGZhbHNlO1xuICBwcml2YXRlIHRleHRCYWNrdXA6IHN0cmluZztcbiAgcHJpdmF0ZSBpc0lFID0gZmFsc2U7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgZmlsZVdhc0Ryb3BwZWQ6IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VkaXRvclNlcnZpY2U6IEVkaXRvclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgICBjb25maWdTZXJ2aWNlOiBFZGl0b3JDb25maWdTZXJ2aWNlLFxuICAgICAgICAgICAgICB1cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcbiAgICAgICAgICAgICAgcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2Zvcm1hdHRpbmdTZXJ2aWNlOiBGb3JtYXR0aW5nU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYmFja0Zvcm1hdHRpbmdTZXJ2aWNlOiBCYWNrRm9ybWF0dGluZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX29uQ2xvc2VTZXJ2aWNlOiBPbkNsb3NlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2VsZWN0aW9uU2VydmljZTogU2VsZWN0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfaHRtbFNlcnZpY2U6IEVkaXRIdG1sU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyUHJpbnRTZXJ2aWNlOiBSZW5kZXJQcmludFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2xvYWRpbmdNYXNrU2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLmlzSUUgPSAvKkBjY19vbiFAKi9mYWxzZSB8fCAhIS8oTVNJRXxUcmlkZW50XFwvfEVkZ2VcXC8pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICBjb25maWdTZXJ2aWNlLnVwZGF0ZWRDb25maWcuc3Vic2NyaWJlKChlZGl0b3JDb25maWcpID0+IHtcbiAgICAgIHRoaXMuZWRpdG9yQ29uZmlnID0gZWRpdG9yQ29uZmlnO1xuICAgIH0pO1xuXG4gICAgdXBsb2FkRmlsZXNTZXJ2aWNlLnVwbG9hZHNDaGFuZ2Uuc3Vic2NyaWJlKCh1cGxvYWRzKSA9PiB7XG4gICAgICBpZiAodXBsb2Fkcykge1xuICAgICAgICBsZXQgaTogbnVtYmVyO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXBsb2Fkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuX2VkaXRvclNlcnZpY2UudXBsb2FkKHVwbG9hZHMuaXRlbShpKSwgJycsIHRoaXMuZWRpdG9yQ29uZmlnLnJld3JpdGUpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPyB0aGlzLnNlbGVjdEZpbGUob2JqLmd1aWQsICcnLCAnJykgOiB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhc3N3b3JkU2VydmljZS5wYXNzQ2hhbmdlLnN1YnNjcmliZSgocGFzczogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5jcmVkZW50aWFscy5ndWlkLCBwYXNzLCBDb21tb25Nb2RhbHMuUGFzc3dvcmRSZXF1aXJlZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xuICAgICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRCb2xkQ2hhbmdlLnN1YnNjcmliZSgoYm9sZDogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmJvbGQgPSBib2xkO1xuICAgIH0pO1xuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRJdGFsaWNDaGFuZ2Uuc3Vic2NyaWJlKChpdGFsaWM6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5pdGFsaWMgPSBpdGFsaWM7XG4gICAgfSk7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdFVuZGVybGluZUNoYW5nZS5zdWJzY3JpYmUoKHVuZGVybGluZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLnVuZGVybGluZSA9IHVuZGVybGluZTtcbiAgICB9KTtcbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Q29sb3JDaGFuZ2Uuc3Vic2NyaWJlKChjb2xvcjogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuY29sb3IgPSBjb2xvcjtcbiAgICB9KTtcbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0QmdDb2xvckNoYW5nZS5zdWJzY3JpYmUoKGJnY29sb3I6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmJnQ29sb3IgPSBiZ2NvbG9yO1xuICAgIH0pO1xuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRGb250U2l6ZUNoYW5nZS5zdWJzY3JpYmUoKGZvbnRTaXplOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEZvbnRDaGFuZ2Uuc3Vic2NyaWJlKChmb250OiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5mb250ID0gZm9udDtcbiAgICB9KTtcblxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRTdHJpa2VvdXRDaGFuZ2Uuc3Vic2NyaWJlKChzdHJpa2VvdXQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5zdHJpa2VvdXQgPSBzdHJpa2VvdXQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0QWxpZ25DaGFuZ2Uuc3Vic2NyaWJlKChhbGlnbjogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuYWxpZ24gPSBhbGlnbjtcbiAgICB9KTtcblxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRMaXN0Q2hhbmdlLnN1YnNjcmliZSgobGlzdDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcubGlzdCA9IGxpc3Q7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRCb2xkQ2hhbmdlLnN1YnNjcmliZSgoYm9sZDogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmJvbGQgPSBib2xkO1xuICAgIH0pO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEl0YWxpY0NoYW5nZS5zdWJzY3JpYmUoKGl0YWxpYzogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLml0YWxpYyA9IGl0YWxpYztcbiAgICB9KTtcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRVbmRlcmxpbmVDaGFuZ2Uuc3Vic2NyaWJlKCh1bmRlcmxpbmU6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy51bmRlcmxpbmUgPSB1bmRlcmxpbmU7XG4gICAgfSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Q29sb3JDaGFuZ2Uuc3Vic2NyaWJlKChjb2xvcjogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuY29sb3IgPSBjb2xvcjtcbiAgICB9KTtcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRCZ0NvbG9yQ2hhbmdlLnN1YnNjcmliZSgoYmdjb2xvcjogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuYmdDb2xvciA9IGJnY29sb3I7XG4gICAgfSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Rm9udFNpemVDaGFuZ2Uuc3Vic2NyaWJlKChmb250U2l6ZTogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuZm9udFNpemUgPSBmb250U2l6ZTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEZvbnRDaGFuZ2Uuc3Vic2NyaWJlKChmb250OiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5mb250ID0gZm9udDtcbiAgICB9KTtcblxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdFN0cmlrZW91dENoYW5nZS5zdWJzY3JpYmUoKHN0cmlrZW91dDogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLnN0cmlrZW91dCA9IHN0cmlrZW91dDtcbiAgICB9KTtcblxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEFsaWduQ2hhbmdlLnN1YnNjcmliZSgoYWxpZ246IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmFsaWduID0gYWxpZ247XG4gICAgfSk7XG5cbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRMaXN0Q2hhbmdlLnN1YnNjcmliZSgobGlzdDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcubGlzdCA9IGxpc3Q7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9odG1sU2VydmljZS5odG1sQ29udGVudC5zdWJzY3JpYmUoKHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHRoaXMuZmlsZSAmJiB0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgICAgdGhpcy50ZXh0QmFja3VwID0gdGV4dDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmVkaXRvckNvbmZpZy5kZWZhdWx0RG9jdW1lbnQgIT09IFwiXCIpe1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuZWRpdG9yQ29uZmlnLmRlZmF1bHREb2N1bWVudCwgXCJcIiwgXCJcIik7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2xvYWRpbmdNYXNrU2VydmljZVxuICAgIC5vbkxvYWRpbmdDaGFuZ2VkXG4gICAgLnN1YnNjcmliZSgobG9hZGluZzogYm9vbGVhbikgPT4gdGhpcy5pc0xvYWRpbmcgPSBsb2FkaW5nKTtcbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVkaXRvckNvbmZpZyA/IHRoaXMuZWRpdG9yQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGRvd25sb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVkaXRvckNvbmZpZyA/IHRoaXMuZWRpdG9yQ29uZmlnLmRvd25sb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB1cGxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yQ29uZmlnID8gdGhpcy5lZGl0b3JDb25maWcudXBsb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBwcmludENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JDb25maWcgPyB0aGlzLmVkaXRvckNvbmZpZy5wcmludCA6IHRydWU7XG4gIH1cblxuICBnZXQgYnJvd3NlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVkaXRvckNvbmZpZyA/IHRoaXMuZWRpdG9yQ29uZmlnLmJyb3dzZSA6IHRydWU7XG4gIH1cblxuICBnZXQgZW5hYmxlUmlnaHRDbGlja0NvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JDb25maWcgPyB0aGlzLmVkaXRvckNvbmZpZy5lbmFibGVSaWdodENsaWNrIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBwYWdlU2VsZWN0b3JDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yQ29uZmlnID8gdGhpcy5lZGl0b3JDb25maWcucGFnZVNlbGVjdG9yIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBjcmVhdGVOZXdGaWxlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVkaXRvckNvbmZpZyA/IHRoaXMuZWRpdG9yQ29uZmlnLmNyZWF0ZU5ld0ZpbGUgOiB0cnVlO1xuICB9XG5cbiAgb3Blbk1vZGFsKGlkOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5maWxlKSB7XG4gICAgICB0aGlzLmZpbGUucGFnZXNbMF0uZWRpdGFibGUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oaWQpO1xuICB9XG5cbiAgb3BlblNhdmUoKSB7XG4gICAgaWYgKCF0aGlzLmZvcm1hdERpc2FibGVkKSB7XG4gICAgICB0aGlzLm9wZW5Nb2RhbChDb21tb25Nb2RhbHMuQ3JlYXRlRG9jdW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdERpcigkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX2VkaXRvclNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRmlsZU1vZGVsW10pID0+IHRoaXMuZmlsZXMgPSBmaWxlcyB8fCBbXSk7XG4gIH1cblxuICBwcml2YXRlIHB0VG9QeChwdDogbnVtYmVyKSB7XG4gICAgLy9wdCAqIDk2IC8gNzIgPSBweC5cbiAgICByZXR1cm4gcHQgKiA5NiAvIDcyO1xuICB9XG5cbiAgb25SaWdodENsaWNrKCRldmVudDogTW91c2VFdmVudCkge1xuICAgIHJldHVybiB0aGlzLmVuYWJsZVJpZ2h0Q2xpY2tDb25maWc7XG4gIH1cblxuICBjcmVhdGVGaWxlKCkge1xuICAgIHRoaXMuZmlsZSA9IG5ldyBGaWxlRGVzY3JpcHRpb24oKTtcbiAgICBjb25zdCBwYWdlID0gbmV3IFBhZ2VNb2RlbDtcbiAgICBwYWdlLndpZHRoID0gNTk1O1xuICAgIHBhZ2UuaGVpZ2h0ID0gODQyO1xuICAgIHBhZ2UuZGF0YSA9ICc8IURPQ1RZUEUgSFRNTD48aHRtbD48aGVhZD48bWV0YSBodHRwLWVxdWl2PVwiY29udGVudC10eXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiPjwvaGVhZD48Ym9keT48L2JvZHk+PC9odG1sPic7XG4gICAgcGFnZS5udW1iZXIgPSAxO1xuICAgIHBhZ2UuZWRpdGFibGUgPSB0cnVlO1xuICAgIHRoaXMuZmlsZS5wYWdlcyA9IFtdO1xuICAgIHRoaXMuZmlsZS5wYWdlcy5wdXNoKHBhZ2UpO1xuICAgIHRoaXMuZmlsZS5ndWlkID0gXCJuZXcgZG9jdW1lbnQuZG9jeFwiO1xuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBuZXcgRmlsZUNyZWRlbnRpYWxzKFwibmV3IGRvY3VtZW50LmRvY3hcIiwgXCJcIik7XG4gICAgdGhpcy5mb3JtYXREaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZG93bmxvYWREaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBzZWxlY3RGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBtb2RhbElkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gbmV3IEZpbGVDcmVkZW50aWFscygkZXZlbnQsIHBhc3N3b3JkKTtcbiAgICB0aGlzLl9lZGl0b3JTZXJ2aWNlLmxvYWRGaWxlKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZmlsZTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZEZpbGUoZmlsZSk7XG4gICAgICAgIGNvbnN0IGlzSUUgPSAvKkBjY19vbiFAKi9mYWxzZSB8fCAhIS8oTVNJRXxUcmlkZW50XFwvfEVkZ2VcXC8pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgICAgaWYoaXNJRSkge1xuICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgaWYoJChcIi5kb2N1bWVudE1haW5Db250ZW50XCIpLmxlbmd0aCA+IDAgKXtcbiAgICAgICAgICAgICAgJChcIi5kb2N1bWVudE1haW5Db250ZW50XCIpLmF0dHIoXCJjb250ZW50RWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCwge2F0dHJpYnV0ZXM6IGZhbHNlLCBjaGlsZExpc3Q6IHRydWUsIGNoYXJhY3RlckRhdGE6IGZhbHNlLCBzdWJ0cmVlOiB0cnVlfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuY2xlYXJEYXRhKCk7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKG1vZGFsSWQpO1xuICB9XG5cbiAgZmlsZURyb3BwZWQoJGV2ZW50KXtcbiAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID0gJGV2ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkRmlsZShmaWxlOiBGaWxlRGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgIGlmICh0aGlzLmZpbGUgJiYgdGhpcy5maWxlLnBhZ2VzWzBdKSB7XG4gICAgICB0aGlzLmZpbGUucGFnZXNbMF0uZWRpdGFibGUgPSB0cnVlO1xuICAgICAgdGhpcy5maWxlLnBhZ2VzWzBdLndpZHRoID0gNTk1O1xuICAgICAgdGhpcy5maWxlLnBhZ2VzWzBdLmhlaWdodCA9IDg0MjtcbiAgICAgIHRoaXMudGV4dEJhY2t1cCA9IHRoaXMuZmlsZS5wYWdlc1swXS5kYXRhO1xuICAgIH1cbiAgICB0aGlzLmZvcm1hdERpc2FibGVkID0gIXRoaXMuZmlsZTtcbiAgICB0aGlzLmRvd25sb2FkRGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJEYXRhKCkge1xuICAgIGlmICghdGhpcy5maWxlIHx8ICF0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwYWdlIG9mIHRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgcGFnZS5kYXRhID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lZGl0b3JTZXJ2aWNlLnVwbG9hZChudWxsLCAkZXZlbnQsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdEZvbnRTaXplKCRldmVudDogT3B0aW9uKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgJChcIi5nZC13cmFwcGVyXCIpLm9mZihcImtleXVwXCIpO1xuICAgIGlmKHRoaXMuaXNJRSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0Rm9udFNpemUoJGV2ZW50LnZhbHVlKTtcbiAgICAkKFwiLmdkLXdyYXBwZXJcIikub24oXCJrZXl1cFwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBmb250RWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImZvbnRcIik7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gZm9udEVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIGlmIChmb250RWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKCdzaXplJykgPT09IFwiN1wiKSB7XG4gICAgICAgICAgZm9udEVsZW1lbnRzW2ldLnJlbW92ZUF0dHJpYnV0ZShcInNpemVcIik7XG4gICAgICAgICAgZm9udEVsZW1lbnRzW2ldLnN0eWxlLmZvbnRTaXplID0gJGV2ZW50ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RGb250KCRldmVudDogT3B0aW9uKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZih0aGlzLmlzSUUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEZvbnQoJGV2ZW50LnZhbHVlKTtcbiAgfVxuXG4gIHRvZ2dsZUNvbG9yUGlja2VyKGJnOiBib29sZWFuKSB7XG5cbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZih0aGlzLmlzSUUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIGlmIChiZykge1xuICAgICAgdGhpcy5iZ0NvbG9yUGlja2VyU2hvdyA9ICF0aGlzLmJnQ29sb3JQaWNrZXJTaG93O1xuICAgICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSAhdGhpcy5jb2xvclBpY2tlclNob3c7XG4gICAgICB0aGlzLmJnQ29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0Q29sb3IoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICBpZih0aGlzLmlzSUUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmJnQ29sb3JQaWNrZXJTaG93KSB7XG4gICAgICB0aGlzLmJnQ29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gICAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRCZ0NvbG9yKCRldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gICAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRDb2xvcigkZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUJvbGQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmKHRoaXMuaXNJRSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0Qm9sZCghdGhpcy5mb3JtYXR0aW5nLmJvbGQpO1xuICB9XG5cbiAgdG9nZ2xlVW5kbygpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLlVuZG8oKTtcbiAgfVxuXG4gIHRvZ2dsZVJlZG8oKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5SZWRvKCk7XG4gIH1cblxuICB0b2dnbGVJdGFsaWMoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmKHRoaXMuaXNJRSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0SXRhbGljKCF0aGlzLmZvcm1hdHRpbmcuaXRhbGljKTtcbiAgfVxuXG4gIHRvZ2dsZVVuZGVybGluZShldmVudCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYodGhpcy5pc0lFKSB7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKTtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRVbmRlcmxpbmUoIXRoaXMuZm9ybWF0dGluZy51bmRlcmxpbmUpO1xuICB9XG5cbiAgaGlkZUFsbCgkZXZlbnQpIHtcbiAgICBpZiAoKCRldmVudC50YXJnZXQucGFyZW50RWxlbWVudCAmJiAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddICYmXG4gICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddLnZhbHVlID09PSAnYnV0dG9uJykgfHxcbiAgICAgICgkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJlxuICAgICAgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddICYmXG4gICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10udmFsdWUgPT09ICdidXR0b24nKSkge1xuXG4gICAgICB0aGlzLl9vbkNsb3NlU2VydmljZS5jbG9zZSh0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSBmYWxzZTtcbiAgICB0aGlzLmJnQ29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gICAgdGhpcy5fb25DbG9zZVNlcnZpY2UuY2xvc2UodHJ1ZSk7XG4gIH1cblxuICB0b2dnbGVTdHJpa2VvdXQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmKHRoaXMuaXNJRSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0U3RyaWtlb3V0KCF0aGlzLmZvcm1hdHRpbmcuc3RyaWtlb3V0KTtcbiAgfVxuXG4gIHRvZ2dsZUFsaWduKGFsaWduOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChhbGlnbiA9PT0gdGhpcy5mb3JtYXR0aW5nLmFsaWduKSB7XG4gICAgICBhbGlnbiA9ICdmdWxsJztcbiAgICB9XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0QWxpZ24oYWxpZ24pO1xuICAgIHRoaXMuZm9ybWF0dGluZy5hbGlnbiA9IGFsaWduO1xuICB9XG5cbiAgdG9nZ2xlTGlzdChsaXN0OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKGxpc3QgPT09IHRoaXMuZm9ybWF0dGluZy5saXN0KSB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcubGlzdCA9IFwiXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5saXN0ID0gbGlzdDtcbiAgICB9XG4gICAgaWYodGhpcy5pc0lFKSB7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKTtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRMaXN0KGxpc3QpO1xuICB9XG5cbiAgZG93bmxvYWRGaWxlKCkge1xuICAgIGlmICh0aGlzLmRvd25sb2FkRGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLl9lZGl0b3JTZXJ2aWNlLmdldERvd25sb2FkVXJsKHRoaXMuY3JlZGVudGlhbHMpKTtcbiAgfVxuXG4gIHNhdmUoKXtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBpZih0aGlzLmNyZWRlbnRpYWxzKSB7XG4gICAgICBpZiAodGhpcy5maWxlLmd1aWQgPT09IFwibmV3IGRvY3VtZW50LmRvY3hcIikge1xuICAgICAgICB0aGlzLm9wZW5Nb2RhbChDb21tb25Nb2RhbHMuQ3JlYXRlRG9jdW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zYXZlRmlsZSh0aGlzLmNyZWRlbnRpYWxzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuIHNhdmVGaWxlKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcbiAgICBpZiAoIXRoaXMuZmlsZSB8fCAhdGhpcy5maWxlLnBhZ2VzKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHNhdmVGaWxlID0gbmV3IFNhdmVGaWxlKGNyZWRlbnRpYWxzLmd1aWQsIGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB0aGlzLnRleHRCYWNrdXApO1xuICAgIHRoaXMuX2VkaXRvclNlcnZpY2Uuc2F2ZShzYXZlRmlsZSkuc3Vic2NyaWJlKChsb2FkRmlsZTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICB0aGlzLmxvYWRGaWxlKGxvYWRGaWxlKTtcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBuZXcgRmlsZUNyZWRlbnRpYWxzKGxvYWRGaWxlLmd1aWQsIGNyZWRlbnRpYWxzLnBhc3N3b3JkKTtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5PcGVyYXRpb25TdWNjZXNzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaW50RmlsZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBpZih0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgIGNvbnN0IHBhZ2UgPSBuZXcgUGFnZU1vZGVsO1xuICAgICAgcGFnZS53aWR0aCA9IDU5NTtcbiAgICAgIHBhZ2UuaGVpZ2h0ID0gODQyO1xuICAgICAgLy8gdXNpbmcgb2YgdGhlIHJlcGxhY2UgaXMgcmVxdWlyZWQgdG8gZml4IGlzc3VlIHdpdGggcGFkZGluZyBmb3IgaW50aXJlIHByaW50IGNvbnRlbnRcbiAgICAgIHBhZ2UuZGF0YSA9IHRoaXMudGV4dEJhY2t1cC5yZXBsYWNlKCc8L3N0eWxlPicsICdib2R5IHsgcGFkZGluZzogOTZweDsgfSA8L3N0eWxlPicpO1xuICAgICAgY29uc3QgcHJpbnRIdG1sID0gW3BhZ2VdO1xuICAgICAgdGhpcy5fcmVuZGVyUHJpbnRTZXJ2aWNlLmNoYW5nZVBhZ2VzKHByaW50SHRtbCk7XG4gICAgfVxuICB9XG5cbiAgb25DbG9zZU1vZGFsKCRldmVudCkge1xuICAgIGlmICh0aGlzLmZpbGUgJiYgJGV2ZW50KSB7XG4gICAgICBpZih0aGlzLmlzSUUpIHtcbiAgICAgICAgJChcIi5kb2N1bWVudE1haW5Db250ZW50XCIpLmF0dHIoXCJjb250ZW50RWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5maWxlLnBhZ2VzWzBdLmVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgfVxufVxuIl19