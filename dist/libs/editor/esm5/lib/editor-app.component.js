/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Renderer2 } from '@angular/core';
import { EditorService } from "./editor.service";
import { FileDescription, ModalService, UploadFilesService, PasswordService, FileCredentials, CommonModals, PageModel, FormattingService, Formatting, BackFormattingService, OnCloseService, SaveFile, SelectionService, EditHtmlService, RenderPrintService, WindowService, LoadingMaskService, FileUtil } from '@groupdocs.examples.angular/common-components';
import { EditorConfigService } from "./editor-config.service";
import * as jquery from 'jquery';
/** @type {?} */
var $ = jquery;
var EditorAppComponent = /** @class */ (function () {
    function EditorAppComponent(_editorService, _modalService, configService, uploadFilesService, passwordService, _windowService, _formattingService, _backFormattingService, _onCloseService, _selectionService, _htmlService, _renderPrintService, _loadingMaskService, _renderer) {
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
        this.pagesData = new Map();
        this.isIE = false;
        this.selectFontShow = false;
        this.selectFontSizeShow = false;
        this.newFile = false;
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
                if (_this.ifPresentation()) {
                    _this.pagesData.set(_this.selectedPageNumber - 1, text);
                }
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
        this.selectedPageNumber = 1;
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
     * @return {?}
     */
    EditorAppComponent.prototype.ifPresentation = /**
     * @return {?}
     */
    function () {
        return this.file ? FileUtil.find(this.file.guid, false).format === "Microsoft PowerPoint" : false;
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    EditorAppComponent.prototype.selectCurrentPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        this.selectedPageNumber = pageNumber;
        if (this.ifPresentation() && this.pagesData.size > 0 && this.pagesData.get(pageNumber - 1)) {
            this.file.pages[pageNumber - 1].data = this.pagesData.get(pageNumber - 1);
        }
    };
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
        this.newFile = true;
        this.file = new FileDescription();
        /** @type {?} */
        var page = new PageModel;
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
        var _this = this;
        this.file = file;
        if (this.file && this.file.pages[0]) {
            this.file.pages.forEach((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                page.editable = true;
                if (page.width === 0)
                    page.width = _this.ifPresentation() ? 960 : 595;
                if (page.height === 0)
                    page.height = _this.ifPresentation() ? 540 : 842;
            }));
            if (this.pagesData.size === 0) {
                this.textBackup = this.file.pages[0].data;
            }
        }
        this.formatDisabled = !this.file;
        this.downloadDisabled = false;
        // adding listeners on inputs if present on existing page
        /** @type {?} */
        var count = 0;
        /** @type {?} */
        var timerId = setInterval((/**
         * @return {?}
         */
        function () {
            count++;
            /** @type {?} */
            var page = document.querySelectorAll('.page');
            if (page) {
                _this.initControlsListeners();
                clearInterval(timerId);
            }
            if (count === 20)
                clearInterval();
        }), 100);
    };
    /**
     * @private
     * @return {?}
     */
    EditorAppComponent.prototype.initControlsListeners = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var inputs = document.querySelectorAll('input');
        inputs.forEach((/**
         * @param {?} input
         * @return {?}
         */
        function (input) {
            _this._renderer.listen(input, 'keyup', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                input.setAttribute('value', input.value);
            }));
        }));
        /** @type {?} */
        var selects = document.querySelectorAll('select');
        selects.forEach((/**
         * @param {?} select
         * @return {?}
         */
        function (select) {
            _this._renderer.listen(select, 'change', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                selects.forEach((/**
                 * @param {?} s
                 * @return {?}
                 */
                function (s) {
                    for (var i = s.options.length - 1; i >= 0; i--) {
                        s.options[i].removeAttribute('selected');
                    }
                }));
                select.options[select.selectedIndex].setAttribute('selected', 'selected');
            }));
        }));
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
     * @param {?} $event
     * @param {?} bg
     * @return {?}
     */
    EditorAppComponent.prototype.toggleColorPicker = /**
     * @param {?} $event
     * @param {?} bg
     * @return {?}
     */
    function ($event, bg) {
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
    };
    /**
     * @param {?} $event
     * @param {?} isFontName
     * @return {?}
     */
    EditorAppComponent.prototype.toggleFontSelect = /**
     * @param {?} $event
     * @param {?} isFontName
     * @return {?}
     */
    function ($event, isFontName) {
        if (isFontName) {
            this.selectFontShow = !this.selectFontShow;
            this.selectFontSizeShow = false;
        }
        else {
            this.selectFontSizeShow = !this.selectFontSizeShow;
            this.selectFontShow = false;
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
        // we try to save the changes on any click outside
        if (document.querySelectorAll('.gd-wrapper')[0]) {
            this.textBackup = document.querySelectorAll('.gd-wrapper')[0].innerHTML.toString();
        }
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
        this.textBackup = this.getPageWithRootTags(this.textBackup, credentials.guid);
        /** @type {?} */
        var saveFile = new SaveFile(credentials.guid, credentials.password, this.textBackup, this.selectedPageNumber - 1);
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
     * @param {?} credentials
     * @return {?}
     */
    EditorAppComponent.prototype.saveNewFile = /**
     * @param {?} credentials
     * @return {?}
     */
    function (credentials) {
        var _this = this;
        if (!this.file || !this.file.pages) {
            return;
        }
        this.textBackup = this.getPageWithRootTags(this.textBackup, credentials.guid);
        /** @type {?} */
        var saveFile = new SaveFile(credentials.guid, credentials.password, this.textBackup, 0);
        this._editorService.create(saveFile).subscribe((/**
         * @param {?} loadFile
         * @return {?}
         */
        function (loadFile) {
            _this.loadFile(loadFile);
            _this.credentials = new FileCredentials(loadFile.guid, credentials.password);
            _this._modalService.open(CommonModals.OperationSuccess);
            _this.newFile = false;
        }));
    };
    // Returns root-tags in the HTML-markup which previously were removed by innerHTML.
    // Returns root-tags in the HTML-markup which previously were removed by innerHTML.
    /**
     * @param {?} data
     * @param {?} guid
     * @return {?}
     */
    EditorAppComponent.prototype.getPageWithRootTags = 
    // Returns root-tags in the HTML-markup which previously were removed by innerHTML.
    /**
     * @param {?} data
     * @param {?} guid
     * @return {?}
     */
    function (data, guid) {
        /** @type {?} */
        var pptFormats = ["ppt", "pptx", "pptm", "pps", "ppsx", "ppsm", "pot", "potx", "potm", "odp", "otp"];
        /** @type {?} */
        var resultData = data;
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
                    template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\" (click)=\"hideAll($event)\">\n  <gd-tabbed-toolbars [logo]=\"'editor'\" [icon]=\"'pen-square'\">\n    <gd-tabs>\n      <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'file'\" [tooltip]=\"'Create document'\" (click)=\"createFile()\"\n                     *ngIf=\"createNewFileConfig\"></gd-button>\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                     *ngIf=\"browseConfig\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save File'\" (click)=\"save()\"></gd-button>\n          <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'pencil-alt'\" [iconClass]=\"'save-as-button-icon'\" [tooltip]=\"'Save File As'\" (click)=\"openSave()\">\n            <fa-icon [icon]=\"['fas','save']\" class=\"save-button\" size=\"xs\"></fa-icon></gd-button>\n          <gd-button [disabled]=\"downloadDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                     (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n          <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                     *ngIf=\"printConfig\" ></gd-button>\n          <gd-button *ngIf=\"!isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Undo'\"\n                     (click)=\"toggleUndo()\"></gd-button>\n          <gd-button *ngIf=\"!isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Redo'\"\n                     (click)=\"toggleRedo()\"></gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab id=\"formatting-tab\" [tabTitle]=\"'Formatting'\" [icon]=\"'edit'\" [id]=\"'2'\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button *ngIf=\"isDesktop\"  [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Undo'\"\n                     (click)=\"toggleUndo()\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\"  [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Redo'\"\n                     (click)=\"toggleRedo()\"></gd-button>\n          <gd-select class=\"format-select mobile-hide\" [disabled]=\"formatDisabled\" [options]=\"fontOptions\"\n                     [isOpen]=\"selectFontShow\" (selected)=\"selectFont($event)\" (opened)=\"toggleFontSelect($event, true)\"\n                     [showSelected]=\"{name : formatting.font, value : formatting.font}\"></gd-select>\n          <gd-select class=\"format-select mobile-hide\" [disabled]=\"formatDisabled\" [options]=\"fontSizeOptions\"\n                     [isOpen]=\"selectFontSizeShow\" (selected)=\"selectFontSize($event)\" (opened)=\"toggleFontSelect($event, false)\"\n                     [showSelected]=\"{name : formatting.fontSize + 'px', value : formatting.fontSize}\"></gd-select>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'bold'\" [tooltip]=\"'Bold'\"\n                     (click)=\"toggleBold($event)\" [toggle]=\"formatting.bold\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'italic'\" [tooltip]=\"'Italic'\"\n                     (click)=\"toggleItalic($event)\" [toggle]=\"formatting.italic\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'underline'\" [tooltip]=\"'Underline'\"\n                     (click)=\"toggleUnderline($event)\" [toggle]=\"formatting.underline\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'strikethrough'\" [tooltip]=\"'Strike out'\"\n                     (click)=\"toggleStrikeout($event)\" [toggle]=\"formatting.strikeout\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'align-center'\" [tooltip]=\"'Align center'\"\n                     (click)=\"toggleAlign('center')\" [toggle]=\"formatting.align == 'center' ? true : false\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'align-justify'\" [tooltip]=\"'Align full'\"\n                     (click)=\"toggleAlign('full')\" [toggle]=\"formatting.align == 'full' ? true : false\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'align-right'\" [tooltip]=\"'Align right'\"\n                     (click)=\"toggleAlign('right')\" [toggle]=\"formatting.align == 'right' ? true : false\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'align-left'\" [tooltip]=\"'Align left'\"\n                     (click)=\"toggleAlign('left')\" [toggle]=\"formatting.align == 'left' ? true : false\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'list-ul'\" [tooltip]=\"'Add Unordered List'\"\n                     (click)=\"toggleList('unordered')\" [toggle]=\"formatting.list == 'unordered' ? true : false\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'list-ol'\" [tooltip]=\"'Add Ordered List'\"\n                     (click)=\"toggleList('ordered')\" [toggle]=\"formatting.list == 'ordered' ? true : false\"></gd-button>\n          <gd-button *ngIf=\"isDesktop\" name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'fill'\" [tooltip]=\"'Background color'\"\n                     (click)=\"toggleColorPicker($event, true)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.bgColor\"></div>\n          </gd-button>\n          <gd-button *ngIf=\"isDesktop\" name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'font'\" [tooltip]=\"'Color'\" \n                     (click)=\"toggleColorPicker($event, false)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.color\"></div>\n          </gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab class=\"desktop-hide\" [tabTitle]=\"'Font'\" [icon]=\"'font'\" [id]=\"'3'\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-select class=\"format-select font-type\" [disabled]=\"formatDisabled\" [options]=\"fontOptions\"\n                      [isOpen]=\"selectFontShow\" (selected)=\"selectFont($event)\" (click)=\"toggleFontSelect($event, true)\"\n                      [showSelected]=\"{name : formatting.font, value : formatting.font}\"></gd-select>\n          <gd-select class=\"format-select font-size\" [disabled]=\"formatDisabled\" [options]=\"fontSizeOptions\"\n                      [isOpen]=\"selectFontSizeShow\" (selected)=\"selectFontSize($event)\" (click)=\"toggleFontSelect($event, false)\"\n                      [showSelected]=\"{name : formatting.fontSize + 'px', value : formatting.fontSize}\"></gd-select>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab id=\"paragraph-tab\" class=\"desktop-hide\" [tabTitle]=\"'Paragraph'\" [icon]=\"'paragraph'\" [id]=\"'4'\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-center'\" [tooltip]=\"'Align center'\"\n                     (click)=\"toggleAlign('center')\" [toggle]=\"formatting.align == 'center' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-justify'\" [tooltip]=\"'Align full'\"\n                     (click)=\"toggleAlign('full')\" [toggle]=\"formatting.align == 'full' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-right'\" [tooltip]=\"'Align right'\"\n                     (click)=\"toggleAlign('right')\" [toggle]=\"formatting.align == 'right' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-left'\" [tooltip]=\"'Align left'\"\n                     (click)=\"toggleAlign('left')\" [toggle]=\"formatting.align == 'left' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ul'\" [tooltip]=\"'Add Unordered List'\"\n                     (click)=\"toggleList('unordered')\" [toggle]=\"formatting.list == 'unordered' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ol'\" [tooltip]=\"'Add Ordered List'\"\n                     (click)=\"toggleList('ordered')\" [toggle]=\"formatting.list == 'ordered' ? true : false\"></gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab class=\"desktop-hide\" [tabTitle]=\"'Palette'\" [icon]=\"'palette'\" [id]=\"'5'\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'fill'\" [tooltip]=\"'Background color'\"\n                    (click)=\"toggleColorPicker($event, true)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.bgColor\"></div>\n          </gd-button>\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'font'\" [tooltip]=\"'Color'\" \n                    (click)=\"toggleColorPicker($event, false)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.color\"></div>\n          </gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n    </gd-tabs>\n  </gd-tabbed-toolbars>\n  <gd-color-picker [isOpen]=\"bgColorPickerShow || colorPickerShow\"\n                   [className]=\"'palette ' + (bgColorPickerShow ? 'background-color-picker' : 'color-picker')\"\n                   (selectedColor)=\"selectColor($event)\"></gd-color-picker>\n  <div class=\"doc-panel\" *ngIf=\"file\">\n    <gd-thumbnails *ngIf=\"ifPresentation()\" [pages]=\"file.pages\" [isHtmlMode]=\"true\" [guid]=\"file.guid\"\n      [mode]=\"true\" (selectedPage)=\"selectCurrentPage($event)\" gdScrollable></gd-thumbnails>\n    <gd-document class=\"gd-document\" *ngIf=\"file\" [ngClass]=\"{'new-file': newFile}\" [file]=\"file\" [mode]=\"true\"\n      [htmlMode]=\"true\" [preloadPageCount]=\"0\" [showActiveSlide]=\"true\" gdFormatting gdRenderPrint gdScrollable>\n    </gd-document>\n  </div>\n  <gd-init-state [icon]=\"'pen-square'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n      Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n      Or drop file here\n  </gd-init-state>\n  <gd-browse-files-modal\n    (closing)=\"onCloseModal($event)\"\n    (urlForUpload)=\"upload($event)\"\n    [files]=\"files\"\n    (selectedDirectory)=\"selectDir($event)\"\n    (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n    [uploadConfig]=\"uploadConfig\"\n  ></gd-browse-files-modal>\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-create-document-modal (closing)=\"onCloseModal($event)\" [file]=\"credentials\" (savingFile)=\"saveNewFile($event)\"></gd-create-document-modal>\n  <gd-success-modal></gd-success-modal>\n</div>\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.current-page-number{margin:0 15px;font-size:14px;color:#959da5}*{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:text}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}::ng-deep .gd-drag-n-drop-wrap.active{z-index:999}::ng-deep .gd-drag-n-drop-wrap.active .init-state-wrapper{top:unset!important}::ng-deep .init-state-wrapper{top:-90px!important}.doc-panel{display:-webkit-box;display:flex;height:inherit}.gd-document{width:100%;height:calc(100% - 90px)}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{width:100%}::ng-deep .gd-wrapper{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;outline:0;position:relative}::ng-deep .dropdown-menu{min-width:unset!important}.palette{position:absolute;top:90px;z-index:100}.background-color-picker{left:700px}.color-picker{left:750px}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}::ng-deep .tools .button{color:#3e4e5a!important}::ng-deep .tools .button .text{padding:0!important}::ng-deep .tools .button.inactive{color:#959da5!important;opacity:.4}::ng-deep .tools .dropdown-menu .option{min-width:61px;color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}::ng-deep .tools .select{width:65px;height:37px;margin-left:7px;line-height:37px;text-align:center;border:none!important}::ng-deep .tools .select .nav-caret{margin:0 0 0 4px!important}::ng-deep .gd-select-format .select{-webkit-box-pack:justify!important;justify-content:space-between!important}::ng-deep .tab-content .button .tooltip{margin-top:45px;margin-left:-36px}::ng-deep .gd-edit.active{background-color:#7e8991}::ng-deep .gd-edit.active i{color:#fff}::ng-deep .page{width:auto!important;height:auto!important}::ng-deep .page ::ng-deep .gd-document .page{width:auto!important;height:auto!important}::ng-deep .documentMainContent.newfile{width:595px!important;height:842px!important}::ng-deep .gd-document.new-file .page{width:595pt!important;height:842pt!important}::ng-deep .slide{margin:0!important}::ng-deep #page-0{height:calc(100% - 2 * 20px)}::ng-deep .save-as-button-icon{font-size:11px;left:22px!important;top:13px!important}::ng-deep .documentMainContent .section{margin:0!important}::ng-deep .documentMainContent>div{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:end;justify-content:flex-end}::ng-deep .documentMainContent>div .footer-1{position:absolute;bottom:0;width:calc(100% - 2 * 96px);display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}::ng-deep .documentMainContent>div .footer-1 .Normal{margin:0 0 0 auto}::ng-deep .documentMainContent>div .footer-1 p{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}::ng-deep .documentMainContent>div .header-0{padding-bottom:10px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}::ng-deep .documentMainContent>div .header-0 .Header,::ng-deep .documentMainContent>div .header-0 .Normal{margin:0 0 0 auto}::ng-deep .documentMainContent>div .header-0 p{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}::ng-deep .documentMainContent>div .header-0 p:last-of-type{margin:0!important}.save-button{position:absolute;top:-5px;left:21px}gd-tab.desktop-hide{display:none}::ng-deep .documentMainContent .page8marker{width:100%;border-bottom:2px dotted rgba(54,95,145,.7);position:absolute;right:0}@media (max-width:1037px){::ng-deep .panzoom{zoom:.45;margin-top:130px}::ng-deep .gd-tab fa-icon{height:60px;width:60px;font-size:22px!important;margin:unset!important}gd-tab.desktop-hide{display:block}.mobile-hide{display:none}::ng-deep .tools{overflow-x:unset!important}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0!important}::ng-deep .tools .icon-button{height:60px!important;width:60px;margin:0!important}::ng-deep .bg-color-pic{height:13px!important;width:13px!important;right:9px!important;bottom:11px!important}::ng-deep .palette{position:absolute;top:130px!important;z-index:100}::ng-deep .background-color-picker{left:0!important}::ng-deep .color-picker{left:60px!important}::ng-deep .format-select.font-type{width:109px}::ng-deep .format-select.font-type ::ng-deep .dropdown-menu{width:109px!important;top:60px!important;left:0!important}::ng-deep .format-select.font-size{width:81px}::ng-deep .format-select.font-size ::ng-deep .dropdown-menu{width:81px!important;top:60px!important;left:109px!important}::ng-deep .format-select .select{width:unset!important;height:60px!important;line-height:60px}::ng-deep .init-state-wrapper{position:unset!important}::ng-deep .gd-document{height:calc(100% - 60px)!important}}"]
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
        { type: LoadingMaskService },
        { type: Renderer2 }
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
    /** @type {?} */
    EditorAppComponent.prototype.textBackup;
    /** @type {?} */
    EditorAppComponent.prototype.pagesData;
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
    /** @type {?} */
    EditorAppComponent.prototype.selectedPageNumber;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBeUIsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsZUFBZSxFQUVmLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGVBQWUsRUFDZixZQUFZLEVBQ1osU0FBUyxFQUNULGlCQUFpQixFQUNqQixVQUFVLEVBQ1YscUJBQXFCLEVBQ3JCLGNBQWMsRUFDZCxRQUFRLEVBQ1IsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsYUFBYSxFQUNiLGtCQUFrQixFQUFVLFFBQVEsRUFDckMsTUFBTSwrQ0FBK0MsQ0FBQztBQUV2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7SUFDM0IsQ0FBQyxHQUFHLE1BQU07QUFFaEI7SUErQkUsNEJBQW9CLGNBQTZCLEVBQzdCLGFBQTJCLEVBQ25DLGFBQWtDLEVBQ2xDLGtCQUFzQyxFQUN0QyxlQUFnQyxFQUN4QixjQUE2QixFQUM3QixrQkFBcUMsRUFDckMsc0JBQTZDLEVBQzdDLGVBQStCLEVBQy9CLGlCQUFtQyxFQUNuQyxZQUE2QixFQUM3QixtQkFBdUMsRUFDdkMsbUJBQXVDLEVBQ3ZDLFNBQW9CO1FBYnhDLGlCQXNIQztRQXRIbUIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFJM0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXVCO1FBQzdDLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQUM3Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQ3ZDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFDdkMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQXRDeEMsVUFBSyxHQUFHLFFBQVEsQ0FBQztRQUNqQixVQUFLLEdBQWdCLEVBQUUsQ0FBQztRQUd4QixtQkFBYyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFFeEIscUJBQWdCLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQztRQUU1QyxlQUFVLEdBQWUsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlDLG9CQUFlLEdBQUcsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN6RCxnQkFBVyxHQUFHLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2pELHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsY0FBUyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQzlCLFNBQUksR0FBRyxLQUFLLENBQUM7UUFHckIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFrQmQsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUEsS0FBSyxJQUFJLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hGLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsWUFBWTtZQUNqRCxLQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNuQyxDQUFDLEVBQUMsQ0FBQztRQUVILGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxPQUFPO1lBQ2pELElBQUksT0FBTyxFQUFFOztvQkFDUCxDQUFDLFNBQVE7Z0JBQ2IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNuQyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVM7Ozs7b0JBQUMsVUFBQyxHQUFvQjt3QkFDeEcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDL0UsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsZUFBZSxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxJQUFZO1lBQ2hELEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlFLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlDLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQWE7WUFDbkUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQWU7WUFDdkUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2xDLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHNCQUFzQixDQUFDLHFCQUFxQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLFNBQWtCO1lBQzdFLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFhO1lBQ3BFLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxPQUFlO1lBQ3hFLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUNwQyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxRQUFnQjtZQUMxRSxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsSUFBWTtZQUNsRSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDOUIsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsc0JBQXNCLENBQUMscUJBQXFCLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsU0FBa0I7WUFDN0UsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWE7WUFDcEUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQVk7WUFDbEUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQWE7WUFDL0QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQWU7WUFDbkUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2xDLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLFNBQWtCO1lBQ3pFLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFhO1lBQ2hFLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxPQUFlO1lBQ3BFLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUNwQyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxRQUFnQjtZQUN0RSxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsSUFBWTtZQUM5RCxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDOUIsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsU0FBa0I7WUFDekUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWE7WUFDaEUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQVk7WUFDOUQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsSUFBWTtZQUNuRCxJQUFJLEtBQUksQ0FBQyxJQUFJLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hDLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLEtBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtvQkFDekIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDdkQ7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHFDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEtBQUssRUFBRSxFQUFDO1lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzVEO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsNENBQWU7OztJQUFmO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsbUJBQW1CO2FBQ3ZCLGdCQUFnQjthQUNoQixTQUFTOzs7O1FBQUMsVUFBQyxPQUFnQixJQUFLLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLEVBQXhCLENBQXdCLEVBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsc0JBQUksNkNBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDOUQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw4Q0FBYzs7OztRQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMvRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRDQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdELENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkNBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM1RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRDQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdELENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0RBQXNCOzs7O1FBQTFCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdkUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrREFBa0I7Ozs7UUFBdEI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtREFBbUI7Ozs7UUFBdkI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDcEUsQ0FBQzs7O09BQUE7Ozs7SUFFRCwyQ0FBYzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDcEcsQ0FBQzs7Ozs7SUFFRCw4Q0FBaUI7Ozs7SUFBakIsVUFBa0IsVUFBVTtRQUUxQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxDQUFDO1FBQ3JDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDMUYsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0U7SUFDSCxDQUFDOzs7OztJQUVELHNDQUFTOzs7O0lBQVQsVUFBVSxFQUFVO1FBQ2xCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDckM7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDOzs7OztJQUVELHNDQUFTOzs7O0lBQVQsVUFBVSxNQUFjO1FBQXhCLGlCQUVDO1FBREMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsRUFBeEIsQ0FBd0IsRUFBQyxDQUFDO0lBQ3BHLENBQUM7Ozs7OztJQUVPLG1DQUFNOzs7OztJQUFkLFVBQWUsRUFBVTtRQUN2QixvQkFBb0I7UUFDcEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELHlDQUFZOzs7O0lBQVosVUFBYSxNQUFrQjtRQUM3QixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsdUNBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDOztZQUM1QixJQUFJLEdBQUcsSUFBSSxTQUFTO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsd0RBQXdELENBQUM7UUFDckUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBbUIsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZUFBZSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQzs7Ozs7OztJQUVELHVDQUFVOzs7Ozs7SUFBVixVQUFXLE1BQWMsRUFBRSxRQUFnQixFQUFFLE9BQWU7UUFBNUQsaUJBa0JDO1FBakJDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxJQUFxQjtZQUMzRSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOztnQkFDZCxJQUFJLEdBQUcsWUFBWSxDQUFBLEtBQUssSUFBSSxDQUFDLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7WUFDeEYsSUFBRyxJQUFJLEVBQUU7O29CQUNELFVBQVEsR0FBRyxJQUFJLGdCQUFnQjs7OztnQkFBQyxVQUFVLFNBQVM7b0JBQ3ZELElBQUcsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDdkMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO3dCQUMxRCxVQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7cUJBQ3ZCO2dCQUNILENBQUMsRUFBQztnQkFDRixVQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO2FBQ3ZHO1FBQ0gsQ0FBQyxFQUNGLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksTUFBTTtRQUNoQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFTyxxQ0FBUTs7Ozs7SUFBaEIsVUFBaUIsSUFBcUI7UUFBdEMsaUJBMkJDO1FBMUJDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxJQUFJO2dCQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUM7b0JBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUNyRSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztvQkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDekUsQ0FBQyxFQUFDLENBQUM7WUFDSCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDM0M7U0FDRjtRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7OztZQUcxQixLQUFLLEdBQUcsQ0FBQzs7WUFDUCxPQUFPLEdBQUcsV0FBVzs7O1FBQUM7WUFDMUIsS0FBSyxFQUFFLENBQUM7O2dCQUNGLElBQUksR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO1lBQy9DLElBQUksSUFBSSxFQUNSO2dCQUNFLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2dCQUM3QixhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDeEI7WUFDRCxJQUFJLEtBQUssS0FBSyxFQUFFO2dCQUFFLGFBQWEsRUFBRSxDQUFDO1FBQ3BDLENBQUMsR0FBRSxHQUFHLENBQUM7SUFDVCxDQUFDOzs7OztJQUVPLGtEQUFxQjs7OztJQUE3QjtRQUFBLGlCQW9CQzs7WUFuQk8sTUFBTSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7UUFDakQsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEtBQUs7WUFDbEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU87Ozs7WUFBRSxVQUFDLEtBQUs7Z0JBQzFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDOztZQUVHLE9BQU8sR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ3BCLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFROzs7O1lBQUUsVUFBQyxLQUFLO2dCQUM1QyxPQUFPLENBQUMsT0FBTzs7OztnQkFBQyxVQUFBLENBQUM7b0JBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDOUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQzFDO2dCQUNILENBQUMsRUFBQyxDQUFDO2dCQUVILE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDNUUsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sc0NBQVM7Ozs7SUFBakI7O1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNsQyxPQUFPO1NBQ1I7O1lBQ0QsS0FBbUIsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFBLGdCQUFBLDRCQUFFO2dCQUEvQixJQUFNLElBQUksV0FBQTtnQkFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzthQUNsQjs7Ozs7Ozs7O0lBQ0gsQ0FBQzs7Ozs7SUFFRCxtQ0FBTTs7OztJQUFOLFVBQU8sTUFBYztRQUFyQixpQkFJQztRQUhDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVM7OztRQUFDO1lBQ3JFLEtBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELDJDQUFjOzs7O0lBQWQsVUFBZSxNQUFjO1FBQzNCLElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTztRQUNULENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTzs7O1FBQUU7O2dCQUNyQixZQUFZLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztZQUMxRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUN2RCxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFO29CQUNoRCxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUNoRDthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELHVDQUFVOzs7O0lBQVYsVUFBVyxNQUFjO1FBQ3ZCLElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTztRQUNULEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7OztJQUVELDhDQUFpQjs7Ozs7SUFBakIsVUFBa0IsTUFBTSxFQUFFLEVBQVc7UUFDbkMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsT0FBTztTQUNSO1FBQ0QsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7UUFDRCxJQUFJLEVBQUUsRUFBRTtZQUNOLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDN0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztTQUNoQztJQUNILENBQUM7Ozs7OztJQUVELDZDQUFnQjs7Ozs7SUFBaEIsVUFBaUIsTUFBTSxFQUFFLFVBQW1CO1FBQzFDLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDM0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztTQUNqQzthQUFNO1lBQ0wsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQ25ELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksTUFBYztRQUN4QixJQUFHLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQztRQUNELElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDTCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDOzs7OztJQUVELHVDQUFVOzs7O0lBQVYsVUFBVyxLQUFLO1FBQ2QsSUFBSSxJQUFJLENBQUMsY0FBYztZQUNyQixPQUFPO1FBQ1QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFHLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQztRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7OztJQUVELHVDQUFVOzs7SUFBVjtRQUNFLElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTztRQUNULEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCx1Q0FBVTs7O0lBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQ3JCLE9BQU87UUFDVCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELHlDQUFZOzs7O0lBQVosVUFBYSxLQUFLO1FBQ2hCLElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTztRQUNULEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7O0lBRUQsNENBQWU7Ozs7SUFBZixVQUFnQixLQUFLO1FBQ25CLElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTztRQUNULEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7O0lBRUQsb0NBQU87Ozs7SUFBUCxVQUFRLE1BQU07UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUNoRixNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQztZQUNsRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWE7Z0JBQzFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUM1RCxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsRUFBRTtZQUVsRixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpDLGtEQUFrRDtRQUNsRCxJQUFJLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDcEY7SUFDSCxDQUFDOzs7OztJQUVELDRDQUFlOzs7O0lBQWYsVUFBZ0IsS0FBSztRQUNuQixJQUFJLElBQUksQ0FBQyxjQUFjO1lBQ3JCLE9BQU87UUFDVCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUcsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxLQUFhO1FBQ3ZCLElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTztRQUNULEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUU7WUFDbkMsS0FBSyxHQUFHLE1BQU0sQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCx1Q0FBVTs7OztJQUFWLFVBQVcsSUFBWTtRQUNyQixJQUFJLElBQUksQ0FBQyxjQUFjO1lBQ3JCLE9BQU87UUFDVCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUMxQix3Q0FBd0M7WUFDeEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLGdEQUFnRDtZQUNoRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDOUM7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFHLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQztJQUNILENBQUM7Ozs7SUFFRCx5Q0FBWTs7O0lBQVo7UUFDRSxJQUFJLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkIsT0FBTztRQUNULE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7SUFFRCxpQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQ3JCLE9BQU87UUFDVCxJQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxtQkFBbUIsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDN0M7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDakM7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUYscUNBQVE7Ozs7SUFBUixVQUFTLFdBQTRCO1FBQXJDLGlCQVlFO1FBWEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDaEMsT0FBTztRQUVULElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUV4RSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztRQUNuSCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxRQUF5QjtZQUNyRSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxXQUE0QjtRQUF4QyxpQkFlQztRQWRDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQ2xDO1lBQ0UsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBRXhFLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsUUFBeUI7WUFDdkUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVFLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3ZELEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1GQUFtRjs7Ozs7OztJQUNuRixnREFBbUI7Ozs7Ozs7SUFBbkIsVUFBb0IsSUFBSSxFQUFFLElBQUk7O1lBQ3RCLFVBQVUsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7O1lBQ2xHLFVBQVUsR0FBRyxJQUFJO1FBRXJCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ3hFLFVBQVUsR0FBRyxjQUFjLEdBQUcsSUFBSSxHQUFHLGdCQUFnQixDQUFDO1NBQ3ZEO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUNoQjtZQUNFLFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSx3RkFBd0YsQ0FBQyxDQUFDO1lBQ3BJLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQzlDO2dCQUNFLFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO2FBQ3hFO2lCQUVEO2dCQUNFLFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSx5Q0FBeUMsQ0FBQyxDQUFDO2FBQ3RGO1lBRUQsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQzdEO2FBRUQ7WUFDRSxpQkFBaUI7WUFDakIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsbUNBQW1DLEVBQUUsZ0RBQWdELENBQUMsQ0FBQztZQUN2SCwwQkFBMEI7WUFDMUIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztZQUN6RixrQkFBa0I7WUFDbEIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztTQUNsRjtRQUVELFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLG9DQUFvQyxFQUFFLGlEQUFpRCxDQUFDLENBQUM7UUFDekgsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELHNDQUFTOzs7SUFBVDtRQUNFLElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTztRQUNULElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7O2dCQUNaLElBQUksR0FBRyxJQUFJLFNBQVM7WUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDbEIsc0ZBQXNGO1lBQ3RGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLGtDQUFrQyxDQUFDLENBQUM7O2dCQUM5RSxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7Ozs7O0lBRUQseUNBQVk7Ozs7SUFBWixVQUFhLE1BQU07UUFDakIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sRUFBRTtZQUN2QixJQUFHLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1osQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzNEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDcEM7WUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQztJQUNILENBQUM7O2dCQXJvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLDYyVkFBMEM7O2lCQUUzQzs7OztnQkE5Qk8sYUFBYTtnQkFJbkIsWUFBWTtnQkFrQk4sbUJBQW1CO2dCQWpCekIsa0JBQWtCO2dCQUNsQixlQUFlO2dCQVlmLGFBQWE7Z0JBUmIsaUJBQWlCO2dCQUVqQixxQkFBcUI7Z0JBQ3JCLGNBQWM7Z0JBRWQsZ0JBQWdCO2dCQUNoQixlQUFlO2dCQUNmLGtCQUFrQjtnQkFFbEIsa0JBQWtCO2dCQXBCc0IsU0FBUzs7SUFpcUJuRCx5QkFBQztDQUFBLEFBdG9CRCxJQXNvQkM7U0Fqb0JZLGtCQUFrQjs7O0lBQzdCLG1DQUFpQjs7SUFDakIsbUNBQXdCOztJQUN4QixrQ0FBc0I7O0lBQ3RCLDBDQUEyQjs7SUFDM0IsNENBQTRCOztJQUM1Qiw4Q0FBd0I7O0lBQ3hCLHlDQUE2Qjs7SUFDN0IsOENBQTRDOztJQUM1Qyx1Q0FBbUI7O0lBQ25CLHdDQUE4Qzs7SUFDOUMsNkNBQXlEOztJQUN6RCx5Q0FBaUQ7O0lBQ2pELCtDQUEwQjs7SUFDMUIsNkNBQXdCOztJQUN4QixvQ0FBZTs7SUFDZix3Q0FBMEI7O0lBQzFCLHVDQUFzQzs7Ozs7SUFDdEMsa0NBQXFCOztJQUNyQix1Q0FBbUI7O0lBQ25CLDRDQUFzQjs7SUFDdEIsNENBQXVCOztJQUN2QixnREFBMkI7O0lBQzNCLHFDQUFnQjs7SUFDaEIsZ0RBQTJCOzs7OztJQUVmLDRDQUFxQzs7Ozs7SUFDckMsMkNBQW1DOzs7OztJQUluQyw0Q0FBcUM7Ozs7O0lBQ3JDLGdEQUE2Qzs7Ozs7SUFDN0Msb0RBQXFEOzs7OztJQUNyRCw2Q0FBdUM7Ozs7O0lBQ3ZDLCtDQUEyQzs7Ozs7SUFDM0MsMENBQXFDOzs7OztJQUNyQyxpREFBK0M7Ozs7O0lBQy9DLGlEQUErQzs7Ozs7SUFDL0MsdUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RWRpdG9yU2VydmljZX0gZnJvbSBcIi4vZWRpdG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7XG4gIEZpbGVEZXNjcmlwdGlvbixcbiAgRmlsZU1vZGVsLFxuICBNb2RhbFNlcnZpY2UsXG4gIFVwbG9hZEZpbGVzU2VydmljZSxcbiAgUGFzc3dvcmRTZXJ2aWNlLFxuICBGaWxlQ3JlZGVudGlhbHMsXG4gIENvbW1vbk1vZGFscyxcbiAgUGFnZU1vZGVsLFxuICBGb3JtYXR0aW5nU2VydmljZSxcbiAgRm9ybWF0dGluZyxcbiAgQmFja0Zvcm1hdHRpbmdTZXJ2aWNlLFxuICBPbkNsb3NlU2VydmljZSxcbiAgU2F2ZUZpbGUsXG4gIFNlbGVjdGlvblNlcnZpY2UsXG4gIEVkaXRIdG1sU2VydmljZSxcbiAgUmVuZGVyUHJpbnRTZXJ2aWNlLFxuICBXaW5kb3dTZXJ2aWNlLFxuICBMb2FkaW5nTWFza1NlcnZpY2UsIE9wdGlvbiwgRmlsZVV0aWxcbn0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcbmltcG9ydCB7RWRpdG9yQ29uZmlnfSBmcm9tIFwiLi9lZGl0b3ItY29uZmlnXCI7XG5pbXBvcnQge0VkaXRvckNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL2VkaXRvci1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1lZGl0b3ItYW5ndWxhci1yb290JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXRvci1hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lZGl0b3ItYXBwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgRWRpdG9yQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgdGl0bGUgPSAnZWRpdG9yJztcbiAgZmlsZXM6IEZpbGVNb2RlbFtdID0gW107XG4gIGZpbGU6IEZpbGVEZXNjcmlwdGlvbjtcbiAgZWRpdG9yQ29uZmlnOiBFZGl0b3JDb25maWc7XG4gIGZvcm1hdERpc2FibGVkID0gIXRoaXMuZmlsZTtcbiAgZG93bmxvYWREaXNhYmxlZCA9IHRydWU7XG4gIGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHM7XG4gIGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XG4gIGlzRGVza3RvcDogYm9vbGVhbjtcbiAgZm9ybWF0dGluZzogRm9ybWF0dGluZyA9IEZvcm1hdHRpbmcuZGVmYXVsdCgpO1xuICBmb250U2l6ZU9wdGlvbnMgPSBGb3JtYXR0aW5nU2VydmljZS5nZXRGb250U2l6ZU9wdGlvbnMoKTtcbiAgZm9udE9wdGlvbnMgPSBGb3JtYXR0aW5nU2VydmljZS5nZXRGb250T3B0aW9ucygpO1xuICBiZ0NvbG9yUGlja2VyU2hvdyA9IGZhbHNlO1xuICBjb2xvclBpY2tlclNob3cgPSBmYWxzZTtcbiAgYWN0aXZlID0gZmFsc2U7XG4gIHB1YmxpYyB0ZXh0QmFja3VwOiBzdHJpbmc7XG4gIHBhZ2VzRGF0YSA9IG5ldyBNYXA8bnVtYmVyLCBzdHJpbmc+KCk7XG4gIHByaXZhdGUgaXNJRSA9IGZhbHNlO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIGZpbGVXYXNEcm9wcGVkOiBmYWxzZTtcbiAgc2VsZWN0Rm9udFNob3cgPSBmYWxzZTtcbiAgc2VsZWN0Rm9udFNpemVTaG93ID0gZmFsc2U7XG4gIG5ld0ZpbGUgPSBmYWxzZTtcbiAgc2VsZWN0ZWRQYWdlTnVtYmVyOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWRpdG9yU2VydmljZTogRWRpdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICAgIGNvbmZpZ1NlcnZpY2U6IEVkaXRvckNvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHVwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZm9ybWF0dGluZ1NlcnZpY2U6IEZvcm1hdHRpbmdTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9iYWNrRm9ybWF0dGluZ1NlcnZpY2U6IEJhY2tGb3JtYXR0aW5nU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb25DbG9zZVNlcnZpY2U6IE9uQ2xvc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zZWxlY3Rpb25TZXJ2aWNlOiBTZWxlY3Rpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9odG1sU2VydmljZTogRWRpdEh0bWxTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJQcmludFNlcnZpY2U6IFJlbmRlclByaW50U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbG9hZGluZ01hc2tTZXJ2aWNlOiBMb2FkaW5nTWFza1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy5pc0lFID0gLypAY2Nfb24hQCovZmFsc2UgfHwgISEvKE1TSUV8VHJpZGVudFxcL3xFZGdlXFwvKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgY29uZmlnU2VydmljZS51cGRhdGVkQ29uZmlnLnN1YnNjcmliZSgoZWRpdG9yQ29uZmlnKSA9PiB7XG4gICAgICB0aGlzLmVkaXRvckNvbmZpZyA9IGVkaXRvckNvbmZpZztcbiAgICB9KTtcblxuICAgIHVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xuICAgICAgaWYgKHVwbG9hZHMpIHtcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHVwbG9hZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLl9lZGl0b3JTZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oaSksICcnLCB0aGlzLmVkaXRvckNvbmZpZy5yZXdyaXRlKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID8gdGhpcy5zZWxlY3RGaWxlKG9iai5ndWlkLCAnJywgJycpIDogdGhpcy5zZWxlY3REaXIoJycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYXNzd29yZFNlcnZpY2UucGFzc0NoYW5nZS5zdWJzY3JpYmUoKHBhc3M6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuY3JlZGVudGlhbHMuZ3VpZCwgcGFzcywgQ29tbW9uTW9kYWxzLlBhc3N3b3JkUmVxdWlyZWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Qm9sZENoYW5nZS5zdWJzY3JpYmUoKGJvbGQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5ib2xkID0gYm9sZDtcbiAgICB9KTtcbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0SXRhbGljQ2hhbmdlLnN1YnNjcmliZSgoaXRhbGljOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuaXRhbGljID0gaXRhbGljO1xuICAgIH0pO1xuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRVbmRlcmxpbmVDaGFuZ2Uuc3Vic2NyaWJlKCh1bmRlcmxpbmU6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy51bmRlcmxpbmUgPSB1bmRlcmxpbmU7XG4gICAgfSk7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdENvbG9yQ2hhbmdlLnN1YnNjcmliZSgoY29sb3I6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmNvbG9yID0gY29sb3I7XG4gICAgfSk7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEJnQ29sb3JDaGFuZ2Uuc3Vic2NyaWJlKChiZ2NvbG9yOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5iZ0NvbG9yID0gYmdjb2xvcjtcbiAgICB9KTtcbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Rm9udFNpemVDaGFuZ2Uuc3Vic2NyaWJlKChmb250U2l6ZTogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuZm9udFNpemUgPSBmb250U2l6ZTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRGb250Q2hhbmdlLnN1YnNjcmliZSgoZm9udDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuZm9udCA9IGZvbnQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0U3RyaWtlb3V0Q2hhbmdlLnN1YnNjcmliZSgoc3RyaWtlb3V0OiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuc3RyaWtlb3V0ID0gc3RyaWtlb3V0O1xuICAgIH0pO1xuXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEFsaWduQ2hhbmdlLnN1YnNjcmliZSgoYWxpZ246IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmFsaWduID0gYWxpZ247XG4gICAgfSk7XG5cbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0TGlzdENoYW5nZS5zdWJzY3JpYmUoKGxpc3Q6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmxpc3QgPSBsaXN0O1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Qm9sZENoYW5nZS5zdWJzY3JpYmUoKGJvbGQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5ib2xkID0gYm9sZDtcbiAgICB9KTtcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRJdGFsaWNDaGFuZ2Uuc3Vic2NyaWJlKChpdGFsaWM6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5pdGFsaWMgPSBpdGFsaWM7XG4gICAgfSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0VW5kZXJsaW5lQ2hhbmdlLnN1YnNjcmliZSgodW5kZXJsaW5lOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcudW5kZXJsaW5lID0gdW5kZXJsaW5lO1xuICAgIH0pO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdENvbG9yQ2hhbmdlLnN1YnNjcmliZSgoY29sb3I6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmNvbG9yID0gY29sb3I7XG4gICAgfSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0QmdDb2xvckNoYW5nZS5zdWJzY3JpYmUoKGJnY29sb3I6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmJnQ29sb3IgPSBiZ2NvbG9yO1xuICAgIH0pO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEZvbnRTaXplQ2hhbmdlLnN1YnNjcmliZSgoZm9udFNpemU6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRGb250Q2hhbmdlLnN1YnNjcmliZSgoZm9udDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmZvcm1hdHRpbmcuZm9udCA9IGZvbnQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRTdHJpa2VvdXRDaGFuZ2Uuc3Vic2NyaWJlKChzdHJpa2VvdXQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5zdHJpa2VvdXQgPSBzdHJpa2VvdXQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRBbGlnbkNoYW5nZS5zdWJzY3JpYmUoKGFsaWduOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5hbGlnbiA9IGFsaWduO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0TGlzdENoYW5nZS5zdWJzY3JpYmUoKGxpc3Q6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmxpc3QgPSBsaXN0O1xuICAgIH0pO1xuXG4gICAgdGhpcy5faHRtbFNlcnZpY2UuaHRtbENvbnRlbnQuc3Vic2NyaWJlKCh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh0aGlzLmZpbGUgJiYgdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICAgIHRoaXMudGV4dEJhY2t1cCA9IHRleHQ7XG4gICAgICAgIGlmICh0aGlzLmlmUHJlc2VudGF0aW9uKCkpIHtcbiAgICAgICAgICB0aGlzLnBhZ2VzRGF0YS5zZXQodGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgLSAxLCB0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZWRpdG9yQ29uZmlnLmRlZmF1bHREb2N1bWVudCAhPT0gXCJcIil7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5lZGl0b3JDb25maWcuZGVmYXVsdERvY3VtZW50LCBcIlwiLCBcIlwiKTtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkUGFnZU51bWJlciA9IDE7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fbG9hZGluZ01hc2tTZXJ2aWNlXG4gICAgLm9uTG9hZGluZ0NoYW5nZWRcbiAgICAuc3Vic2NyaWJlKChsb2FkaW5nOiBib29sZWFuKSA9PiB0aGlzLmlzTG9hZGluZyA9IGxvYWRpbmcpO1xuICB9XG5cbiAgZ2V0IHJld3JpdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yQ29uZmlnID8gdGhpcy5lZGl0b3JDb25maWcucmV3cml0ZSA6IHRydWU7XG4gIH1cblxuICBnZXQgZG93bmxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yQ29uZmlnID8gdGhpcy5lZGl0b3JDb25maWcuZG93bmxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JDb25maWcgPyB0aGlzLmVkaXRvckNvbmZpZy51cGxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHByaW50Q29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVkaXRvckNvbmZpZyA/IHRoaXMuZWRpdG9yQ29uZmlnLnByaW50IDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBicm93c2VDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yQ29uZmlnID8gdGhpcy5lZGl0b3JDb25maWcuYnJvd3NlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBlbmFibGVSaWdodENsaWNrQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVkaXRvckNvbmZpZyA/IHRoaXMuZWRpdG9yQ29uZmlnLmVuYWJsZVJpZ2h0Q2xpY2sgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHBhZ2VTZWxlY3RvckNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JDb25maWcgPyB0aGlzLmVkaXRvckNvbmZpZy5wYWdlU2VsZWN0b3IgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGNyZWF0ZU5ld0ZpbGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yQ29uZmlnID8gdGhpcy5lZGl0b3JDb25maWcuY3JlYXRlTmV3RmlsZSA6IHRydWU7XG4gIH1cblxuICBpZlByZXNlbnRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlID8gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmZvcm1hdCA9PT0gXCJNaWNyb3NvZnQgUG93ZXJQb2ludFwiIDogZmFsc2U7XG4gIH1cblxuICBzZWxlY3RDdXJyZW50UGFnZShwYWdlTnVtYmVyKVxuICB7XG4gICAgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xuICAgIGlmICh0aGlzLmlmUHJlc2VudGF0aW9uKCkgJiYgdGhpcy5wYWdlc0RhdGEuc2l6ZSA+IDAgJiYgdGhpcy5wYWdlc0RhdGEuZ2V0KHBhZ2VOdW1iZXIgLSAxKSkge1xuICAgICAgdGhpcy5maWxlLnBhZ2VzW3BhZ2VOdW1iZXIgLSAxXS5kYXRhID0gdGhpcy5wYWdlc0RhdGEuZ2V0KHBhZ2VOdW1iZXIgLSAxKTtcbiAgICB9XG4gIH1cblxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmZpbGUpIHtcbiAgICAgIHRoaXMuZmlsZS5wYWdlc1swXS5lZGl0YWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihpZCk7XG4gIH1cblxuICBvcGVuU2F2ZSgpIHtcbiAgICBpZiAoIXRoaXMuZm9ybWF0RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMub3Blbk1vZGFsKENvbW1vbk1vZGFscy5DcmVhdGVEb2N1bWVudCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fZWRpdG9yU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBGaWxlTW9kZWxbXSkgPT4gdGhpcy5maWxlcyA9IGZpbGVzIHx8IFtdKTtcbiAgfVxuXG4gIHByaXZhdGUgcHRUb1B4KHB0OiBudW1iZXIpIHtcbiAgICAvL3B0ICogOTYgLyA3MiA9IHB4LlxuICAgIHJldHVybiBwdCAqIDk2IC8gNzI7XG4gIH1cblxuICBvblJpZ2h0Q2xpY2soJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuZW5hYmxlUmlnaHRDbGlja0NvbmZpZztcbiAgfVxuXG4gIGNyZWF0ZUZpbGUoKSB7XG4gICAgdGhpcy5uZXdGaWxlID0gdHJ1ZTtcbiAgICB0aGlzLmZpbGUgPSBuZXcgRmlsZURlc2NyaXB0aW9uKCk7XG4gICAgY29uc3QgcGFnZSA9IG5ldyBQYWdlTW9kZWw7XG4gICAgcGFnZS53aWR0aCA9IDU5NTtcbiAgICBwYWdlLmhlaWdodCA9IDg0MjtcbiAgICBwYWdlLmRhdGEgPSAnPCFET0NUWVBFIEhUTUw+PGh0bWw+PGhlYWQ+PC9oZWFkPjxib2R5PjwvYm9keT48L2h0bWw+JztcbiAgICBwYWdlLm51bWJlciA9IDE7XG4gICAgcGFnZS5lZGl0YWJsZSA9IHRydWU7XG4gICAgdGhpcy5maWxlLnBhZ2VzID0gW107XG4gICAgdGhpcy5maWxlLnBhZ2VzLnB1c2gocGFnZSk7XG4gICAgdGhpcy5maWxlLmd1aWQgPSBcIm5ldyBkb2N1bWVudC5kb2N4XCI7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG5ldyBGaWxlQ3JlZGVudGlhbHMoXCJuZXcgZG9jdW1lbnQuZG9jeFwiLCBcIlwiKTtcbiAgICB0aGlzLmZvcm1hdERpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5kb3dubG9hZERpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHNlbGVjdEZpbGUoJGV2ZW50OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG1vZGFsSWQ6IHN0cmluZykge1xuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBuZXcgRmlsZUNyZWRlbnRpYWxzKCRldmVudCwgcGFzc3dvcmQpO1xuICAgIHRoaXMuX2VkaXRvclNlcnZpY2UubG9hZEZpbGUodGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKChmaWxlOiBGaWxlRGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgdGhpcy5sb2FkRmlsZShmaWxlKTtcbiAgICAgICAgY29uc3QgaXNJRSA9IC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhLyhNU0lFfFRyaWRlbnRcXC98RWRnZVxcLykvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgICBpZihpc0lFKSB7XG4gICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICBpZigkKFwiLmRvY3VtZW50TWFpbkNvbnRlbnRcIikubGVuZ3RoID4gMCApe1xuICAgICAgICAgICAgICAkKFwiLmRvY3VtZW50TWFpbkNvbnRlbnRcIikuYXR0cihcImNvbnRlbnRFZGl0YWJsZVwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7YXR0cmlidXRlczogZmFsc2UsIGNoaWxkTGlzdDogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogZmFsc2UsIHN1YnRyZWU6IHRydWV9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy5jbGVhckRhdGEoKTtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UobW9kYWxJZCk7XG4gIH1cblxuICBmaWxlRHJvcHBlZCgkZXZlbnQpe1xuICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPSAkZXZlbnQ7XG4gIH1cblxuICBwcml2YXRlIGxvYWRGaWxlKGZpbGU6IEZpbGVEZXNjcmlwdGlvbikge1xuICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgaWYgKHRoaXMuZmlsZSAmJiB0aGlzLmZpbGUucGFnZXNbMF0pIHtcbiAgICAgIHRoaXMuZmlsZS5wYWdlcy5mb3JFYWNoKChwYWdlKSA9PiB7XG4gICAgICAgIHBhZ2UuZWRpdGFibGUgPSB0cnVlO1xuICAgICAgICBpZiAocGFnZS53aWR0aCA9PT0gMCkgcGFnZS53aWR0aCA9IHRoaXMuaWZQcmVzZW50YXRpb24oKSA/IDk2MCA6IDU5NTtcbiAgICAgICAgaWYgKHBhZ2UuaGVpZ2h0ID09PSAwKSBwYWdlLmhlaWdodCA9IHRoaXMuaWZQcmVzZW50YXRpb24oKSA/IDU0MCA6IDg0MjtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMucGFnZXNEYXRhLnNpemUgPT09IDApIHtcbiAgICAgICAgdGhpcy50ZXh0QmFja3VwID0gdGhpcy5maWxlLnBhZ2VzWzBdLmRhdGE7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZm9ybWF0RGlzYWJsZWQgPSAhdGhpcy5maWxlO1xuICAgIHRoaXMuZG93bmxvYWREaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLy8gYWRkaW5nIGxpc3RlbmVycyBvbiBpbnB1dHMgaWYgcHJlc2VudCBvbiBleGlzdGluZyBwYWdlXG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBjb25zdCB0aW1lcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4geyBcbiAgICAgIGNvdW50Kys7XG4gICAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2UnKTtcbiAgICAgIGlmIChwYWdlKVxuICAgICAge1xuICAgICAgICB0aGlzLmluaXRDb250cm9sc0xpc3RlbmVycygpO1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVySWQpO1xuICAgICAgfVxuICAgICAgaWYgKGNvdW50ID09PSAyMCkgY2xlYXJJbnRlcnZhbCgpO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRDb250cm9sc0xpc3RlbmVycygpIHtcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmxpc3RlbihpbnB1dCwgJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpbnB1dC52YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNlbGVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcbiAgICBzZWxlY3RzLmZvckVhY2goc2VsZWN0ID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmxpc3RlbihzZWxlY3QsICdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgc2VsZWN0cy5mb3JFYWNoKHMgPT4ge1xuICAgICAgICAgIGZvciAobGV0IGkgPSBzLm9wdGlvbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHMub3B0aW9uc1tpXS5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRGF0YSgpIHtcbiAgICBpZiAoIXRoaXMuZmlsZSB8fCAhdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGFnZSBvZiB0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgIHBhZ2UuZGF0YSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fZWRpdG9yU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RGb250U2l6ZSgkZXZlbnQ6IE9wdGlvbikge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgICQoXCIuZ2Qtd3JhcHBlclwiKS5vZmYoXCJrZXl1cFwiKTtcbiAgICBpZih0aGlzLmlzSUUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEZvbnRTaXplKCRldmVudC52YWx1ZSk7XG4gICAgJChcIi5nZC13cmFwcGVyXCIpLm9uKFwia2V5dXBcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgZm9udEVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb250XCIpO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGZvbnRFbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICBpZiAoZm9udEVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZSgnc2l6ZScpID09PSBcIjdcIikge1xuICAgICAgICAgIGZvbnRFbGVtZW50c1tpXS5yZW1vdmVBdHRyaWJ1dGUoXCJzaXplXCIpO1xuICAgICAgICAgIGZvbnRFbGVtZW50c1tpXS5zdHlsZS5mb250U2l6ZSA9ICRldmVudCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0Rm9udCgkZXZlbnQ6IE9wdGlvbikge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYodGhpcy5pc0lFKSB7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKTtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRGb250KCRldmVudC52YWx1ZSk7XG4gIH1cblxuICB0b2dnbGVDb2xvclBpY2tlcigkZXZlbnQsIGJnOiBib29sZWFuKSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKHRoaXMuaXNJRSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgaWYgKGJnKSB7XG4gICAgICB0aGlzLmJnQ29sb3JQaWNrZXJTaG93ID0gIXRoaXMuYmdDb2xvclBpY2tlclNob3c7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyU2hvdyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyU2hvdyA9ICF0aGlzLmNvbG9yUGlja2VyU2hvdztcbiAgICAgIHRoaXMuYmdDb2xvclBpY2tlclNob3cgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVGb250U2VsZWN0KCRldmVudCwgaXNGb250TmFtZTogYm9vbGVhbikge1xuICAgIGlmIChpc0ZvbnROYW1lKSB7XG4gICAgICB0aGlzLnNlbGVjdEZvbnRTaG93ID0gIXRoaXMuc2VsZWN0Rm9udFNob3c7XG4gICAgICB0aGlzLnNlbGVjdEZvbnRTaXplU2hvdyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdEZvbnRTaXplU2hvdyA9ICF0aGlzLnNlbGVjdEZvbnRTaXplU2hvdztcbiAgICAgIHRoaXMuc2VsZWN0Rm9udFNob3cgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RDb2xvcigkZXZlbnQ6IHN0cmluZykge1xuICAgIGlmKHRoaXMuaXNJRSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYmdDb2xvclBpY2tlclNob3cpIHtcbiAgICAgIHRoaXMuYmdDb2xvclBpY2tlclNob3cgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEJnQ29sb3IoJGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdENvbG9yKCRldmVudCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQm9sZChldmVudCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYodGhpcy5pc0lFKSB7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKTtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRCb2xkKCF0aGlzLmZvcm1hdHRpbmcuYm9sZCk7XG4gIH1cblxuICB0b2dnbGVVbmRvKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuVW5kbygpO1xuICB9XG5cbiAgdG9nZ2xlUmVkbygpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLlJlZG8oKTtcbiAgfVxuXG4gIHRvZ2dsZUl0YWxpYyhldmVudCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYodGhpcy5pc0lFKSB7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKTtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRJdGFsaWMoIXRoaXMuZm9ybWF0dGluZy5pdGFsaWMpO1xuICB9XG5cbiAgdG9nZ2xlVW5kZXJsaW5lKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZih0aGlzLmlzSUUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdFVuZGVybGluZSghdGhpcy5mb3JtYXR0aW5nLnVuZGVybGluZSk7XG4gIH1cblxuICBoaWRlQWxsKCRldmVudCkge1xuICAgIGlmICgoJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50ICYmICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10gJiZcbiAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10udmFsdWUgPT09ICdidXR0b24nKSB8fFxuICAgICAgKCRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10gJiZcbiAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXNbJ25hbWUnXS52YWx1ZSA9PT0gJ2J1dHRvbicpKSB7XG5cbiAgICAgIHRoaXMuX29uQ2xvc2VTZXJ2aWNlLmNsb3NlKHRydWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNvbG9yUGlja2VyU2hvdyA9IGZhbHNlO1xuICAgIHRoaXMuYmdDb2xvclBpY2tlclNob3cgPSBmYWxzZTtcbiAgICB0aGlzLl9vbkNsb3NlU2VydmljZS5jbG9zZSh0cnVlKTtcblxuICAgIC8vIHdlIHRyeSB0byBzYXZlIHRoZSBjaGFuZ2VzIG9uIGFueSBjbGljayBvdXRzaWRlXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC13cmFwcGVyJylbMF0pIHtcbiAgICAgIHRoaXMudGV4dEJhY2t1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC13cmFwcGVyJylbMF0uaW5uZXJIVE1MLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlU3RyaWtlb3V0KGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZih0aGlzLmlzSUUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdFN0cmlrZW91dCghdGhpcy5mb3JtYXR0aW5nLnN0cmlrZW91dCk7XG4gIH1cblxuICB0b2dnbGVBbGlnbihhbGlnbjogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoYWxpZ24gPT09IHRoaXMuZm9ybWF0dGluZy5hbGlnbikge1xuICAgICAgYWxpZ24gPSAnZnVsbCc7XG4gICAgfVxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEFsaWduKGFsaWduKTtcbiAgICB0aGlzLmZvcm1hdHRpbmcuYWxpZ24gPSBhbGlnbjtcbiAgfVxuXG4gIHRvZ2dsZUxpc3QobGlzdDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmIChsaXN0ID09PSB0aGlzLmZvcm1hdHRpbmcubGlzdCkge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmxpc3QgPSBcIlwiO1xuICAgICAgLy8gdG8gdHJpZ2dlciBjaGFuZ2VzIGluIGNvbnRlbnRFZGl0YWJsZVxuICAgICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0TGlzdChsaXN0KTtcbiAgICAgIC8vIHRvIGNsZWFyIHRoZSB0b2dnbGUgc3RhdHVzIG9mIHRoZSBidXR0b24gb25seVxuICAgICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0TGlzdChcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtYXR0aW5nLmxpc3QgPSBsaXN0O1xuICAgICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0TGlzdChsaXN0KTtcbiAgICB9XG4gICAgaWYodGhpcy5pc0lFKSB7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKTtcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGRvd25sb2FkRmlsZSgpIHtcbiAgICBpZiAodGhpcy5kb3dubG9hZERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odGhpcy5fZWRpdG9yU2VydmljZS5nZXREb3dubG9hZFVybCh0aGlzLmNyZWRlbnRpYWxzKSk7XG4gIH1cblxuICBzYXZlKCl7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYodGhpcy5jcmVkZW50aWFscykge1xuICAgICAgaWYgKHRoaXMuZmlsZS5ndWlkID09PSBcIm5ldyBkb2N1bWVudC5kb2N4XCIpIHtcbiAgICAgICAgdGhpcy5vcGVuTW9kYWwoQ29tbW9uTW9kYWxzLkNyZWF0ZURvY3VtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2F2ZUZpbGUodGhpcy5jcmVkZW50aWFscyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiBzYXZlRmlsZShjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XG4gICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5wYWdlcylcbiAgICAgIHJldHVybjtcblxuICAgIHRoaXMudGV4dEJhY2t1cCA9IHRoaXMuZ2V0UGFnZVdpdGhSb290VGFncyh0aGlzLnRleHRCYWNrdXAsIGNyZWRlbnRpYWxzLmd1aWQpO1xuXG4gICAgY29uc3Qgc2F2ZUZpbGUgPSBuZXcgU2F2ZUZpbGUoY3JlZGVudGlhbHMuZ3VpZCwgY3JlZGVudGlhbHMucGFzc3dvcmQsIHRoaXMudGV4dEJhY2t1cCwgdGhpcy5zZWxlY3RlZFBhZ2VOdW1iZXIgLSAxKTtcbiAgICB0aGlzLl9lZGl0b3JTZXJ2aWNlLnNhdmUoc2F2ZUZpbGUpLnN1YnNjcmliZSgobG9hZEZpbGU6IEZpbGVEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgdGhpcy5sb2FkRmlsZShsb2FkRmlsZSk7XG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gbmV3IEZpbGVDcmVkZW50aWFscyhsb2FkRmlsZS5ndWlkLCBjcmVkZW50aWFscy5wYXNzd29yZCk7XG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuT3BlcmF0aW9uU3VjY2Vzcyk7XG4gICAgfSk7XG4gIH1cblxuICBzYXZlTmV3RmlsZShjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzKSB7XG4gICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5wYWdlcylcbiAgICB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0QmFja3VwID0gdGhpcy5nZXRQYWdlV2l0aFJvb3RUYWdzKHRoaXMudGV4dEJhY2t1cCwgY3JlZGVudGlhbHMuZ3VpZCk7XG5cbiAgICBjb25zdCBzYXZlRmlsZSA9IG5ldyBTYXZlRmlsZShjcmVkZW50aWFscy5ndWlkLCBjcmVkZW50aWFscy5wYXNzd29yZCwgdGhpcy50ZXh0QmFja3VwLCAwKTtcbiAgICB0aGlzLl9lZGl0b3JTZXJ2aWNlLmNyZWF0ZShzYXZlRmlsZSkuc3Vic2NyaWJlKChsb2FkRmlsZTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICB0aGlzLmxvYWRGaWxlKGxvYWRGaWxlKTtcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBuZXcgRmlsZUNyZWRlbnRpYWxzKGxvYWRGaWxlLmd1aWQsIGNyZWRlbnRpYWxzLnBhc3N3b3JkKTtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5PcGVyYXRpb25TdWNjZXNzKTtcbiAgICAgIHRoaXMubmV3RmlsZSA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gUmV0dXJucyByb290LXRhZ3MgaW4gdGhlIEhUTUwtbWFya3VwIHdoaWNoIHByZXZpb3VzbHkgd2VyZSByZW1vdmVkIGJ5IGlubmVySFRNTC5cbiAgZ2V0UGFnZVdpdGhSb290VGFncyhkYXRhLCBndWlkKSB7XG4gICAgY29uc3QgcHB0Rm9ybWF0cyA9IFtcInBwdFwiLCBcInBwdHhcIiwgXCJwcHRtXCIsIFwicHBzXCIsIFwicHBzeFwiLCBcInBwc21cIiwgXCJwb3RcIiwgXCJwb3R4XCIsIFwicG90bVwiLCBcIm9kcFwiLCBcIm90cFwiXTtcbiAgICBsZXQgcmVzdWx0RGF0YSA9IGRhdGE7XG5cbiAgICBpZiAoIWRhdGEuc3RhcnRzV2l0aChcIjxodG1sPjxoZWFkPlwiKSAmJiAhZGF0YS5lbmRzV2l0aChcIjwvYm9keT48L2h0bWw+XCIpKSB7XG4gICAgICByZXN1bHREYXRhID0gXCI8aHRtbD48aGVhZD5cIiArIGRhdGEgKyBcIjwvYm9keT48L2h0bWw+XCI7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLm5ld0ZpbGUpXG4gICAge1xuICAgICAgcmVzdWx0RGF0YSA9IHJlc3VsdERhdGEucmVwbGFjZSgnPGhlYWQ+JywgJzxoZWFkPjxtZXRhIGh0dHAtZXF1aXY9XCJjb250ZW50LXR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCI+PC9oZWFkPjxib2R5PicpO1xuICAgICAgaWYgKHBwdEZvcm1hdHMuaW5jbHVkZXMoZ3VpZC5zcGxpdCgnLicpLnBvcCgpKSlcbiAgICAgIHtcbiAgICAgICAgcmVzdWx0RGF0YSA9IHJlc3VsdERhdGEucmVwbGFjZSgnPGJvZHk+JywgJzxib2R5PjxkaXYgY2xhc3M9XCJzbGlkZVwiPicpO1xuICAgICAgfVxuICAgICAgZWxzZSBcbiAgICAgIHtcbiAgICAgICAgcmVzdWx0RGF0YSA9IHJlc3VsdERhdGEucmVwbGFjZSgnPGJvZHk+JywgJzxib2R5PjxkaXYgY2xhc3M9XCJkb2N1bWVudE1haW5Db250ZW50XCI+Jyk7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdERhdGEgPSByZXN1bHREYXRhLnJlcGxhY2UoJzwvYm9keT4nLCAnPC9kaXY+PC9ib2R5PicpO1xuICAgIH1cbiAgICBlbHNlIFxuICAgIHtcbiAgICAgIC8vIGZvciBXb3JkIGZpbGVzXG4gICAgICByZXN1bHREYXRhID0gcmVzdWx0RGF0YS5yZXBsYWNlKCc8ZGl2IGNsYXNzPVwiZG9jdW1lbnRNYWluQ29udGVudFwiPicsICc8L2hlYWQ+PGJvZHk+PGRpdiBjbGFzcz1cImRvY3VtZW50TWFpbkNvbnRlbnRcIj4nKTtcbiAgICAgIC8vIGZvciBQcmVzZW50YXRpb25zIGZpbGVzXG4gICAgICByZXN1bHREYXRhID0gcmVzdWx0RGF0YS5yZXBsYWNlKCc8ZGl2IGNsYXNzPVwic2xpZGVcIicsICc8L2hlYWQ+PGJvZHk+PGRpdiBjbGFzcz1cInNsaWRlXCInKTtcbiAgICAgIC8vIGZvciBFeGNlbCBmaWxlc1xuICAgICAgcmVzdWx0RGF0YSA9IHJlc3VsdERhdGEucmVwbGFjZSgnPC9zdHlsZT48dGFibGUnLCAnPC9zdHlsZT48L2hlYWQ+PGJvZHk+PHRhYmxlJyk7XG4gICAgfVxuXG4gICAgcmVzdWx0RGF0YSA9IHJlc3VsdERhdGEucmVwbGFjZSgnPG1haW4gY2xhc3M9XCJkb2N1bWVudE1haW5Db250ZW50XCI+JywgJzwvaGVhZD48Ym9keT48bWFpbiBjbGFzcz1cImRvY3VtZW50TWFpbkNvbnRlbnRcIj4nKTtcbiAgICByZXR1cm4gcmVzdWx0RGF0YTtcbiAgfVxuXG4gIHByaW50RmlsZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBpZih0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgIGNvbnN0IHBhZ2UgPSBuZXcgUGFnZU1vZGVsO1xuICAgICAgcGFnZS53aWR0aCA9IDU5NTtcbiAgICAgIHBhZ2UuaGVpZ2h0ID0gODQyO1xuICAgICAgLy8gdXNpbmcgb2YgdGhlIHJlcGxhY2UgaXMgcmVxdWlyZWQgdG8gZml4IGlzc3VlIHdpdGggcGFkZGluZyBmb3IgaW50aXJlIHByaW50IGNvbnRlbnRcbiAgICAgIHBhZ2UuZGF0YSA9IHRoaXMudGV4dEJhY2t1cC5yZXBsYWNlKCc8L3N0eWxlPicsICdib2R5IHsgcGFkZGluZzogOTZweDsgfSA8L3N0eWxlPicpO1xuICAgICAgY29uc3QgcHJpbnRIdG1sID0gW3BhZ2VdO1xuICAgICAgdGhpcy5fcmVuZGVyUHJpbnRTZXJ2aWNlLmNoYW5nZVBhZ2VzKHByaW50SHRtbCk7XG4gICAgfVxuICB9XG5cbiAgb25DbG9zZU1vZGFsKCRldmVudCkge1xuICAgIGlmICh0aGlzLmZpbGUgJiYgJGV2ZW50KSB7XG4gICAgICBpZih0aGlzLmlzSUUpIHtcbiAgICAgICAgJChcIi5kb2N1bWVudE1haW5Db250ZW50XCIpLmF0dHIoXCJjb250ZW50RWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5maWxlLnBhZ2VzWzBdLmVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgfVxufVxuIl19