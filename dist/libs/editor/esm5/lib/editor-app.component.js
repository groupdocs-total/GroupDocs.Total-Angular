/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Renderer2 } from '@angular/core';
import { EditorService } from "./editor.service";
import { FileDescription, ModalService, UploadFilesService, PasswordService, FileCredentials, CommonModals, PageModel, FormattingService, Formatting, BackFormattingService, OnCloseService, SaveFile, SelectionService, EditHtmlService, RenderPrintService, WindowService, LoadingMaskService } from '@groupdocs.examples.angular/common-components';
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
            this.file.pages[0].editable = true;
            this.file.pages[0].width = 595;
            this.file.pages[0].height = 842;
            this.textBackup = this.file.pages[0].data;
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
        var saveFile = new SaveFile(credentials.guid, credentials.password, this.textBackup);
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
                    template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\r\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\" (click)=\"hideAll($event)\">\r\n  <gd-tabbed-toolbars [logo]=\"'editor'\" [icon]=\"'pen-square'\">\r\n    <gd-tabs>\r\n      <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\r\n        <gd-top-toolbar class=\"toolbar-panel\">\r\n          <gd-button [icon]=\"'file'\" [tooltip]=\"'Create document'\" (click)=\"createFile()\"\r\n                     *ngIf=\"createNewFileConfig\"></gd-button>\r\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\r\n                     *ngIf=\"browseConfig\"></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save File'\" (click)=\"save()\"></gd-button>\r\n          <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'pencil-alt'\" [iconClass]=\"'save-as-button-icon'\" [tooltip]=\"'Save File As'\" (click)=\"openSave()\">\r\n            <fa-icon [icon]=\"['fas','save']\" class=\"save-button\" size=\"xs\"></fa-icon></gd-button>\r\n          <gd-button [disabled]=\"downloadDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\r\n                     (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\r\n          <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\r\n                     *ngIf=\"printConfig\" ></gd-button>\r\n          <gd-button *ngIf=\"!isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Undo'\"\r\n                     (click)=\"toggleUndo()\"></gd-button>\r\n          <gd-button *ngIf=\"!isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Redo'\"\r\n                     (click)=\"toggleRedo()\"></gd-button>\r\n        </gd-top-toolbar>\r\n      </gd-tab>\r\n      <gd-tab id=\"formatting-tab\" [tabTitle]=\"'Formatting'\" [icon]=\"'edit'\" [id]=\"'2'\">\r\n        <gd-top-toolbar class=\"toolbar-panel\">\r\n          <gd-button *ngIf=\"isDesktop\"  [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Undo'\"\r\n                     (click)=\"toggleUndo()\"></gd-button>\r\n          <gd-button *ngIf=\"isDesktop\"  [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Redo'\"\r\n                     (click)=\"toggleRedo()\"></gd-button>\r\n          <gd-select class=\"format-select mobile-hide\" [disabled]=\"formatDisabled\" [options]=\"fontOptions\"\r\n                     [isOpen]=\"selectFontShow\" (selected)=\"selectFont($event)\" (opened)=\"toggleFontSelect($event, true)\"\r\n                     [showSelected]=\"{name : formatting.font, value : formatting.font}\"></gd-select>\r\n          <gd-select class=\"format-select mobile-hide\" [disabled]=\"formatDisabled\" [options]=\"fontSizeOptions\"\r\n                     [isOpen]=\"selectFontSizeShow\" (selected)=\"selectFontSize($event)\" (opened)=\"toggleFontSelect($event, false)\"\r\n                     [showSelected]=\"{name : formatting.fontSize + 'px', value : formatting.fontSize}\"></gd-select>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'bold'\" [tooltip]=\"'Bold'\"\r\n                     (click)=\"toggleBold($event)\" [toggle]=\"formatting.bold\"></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'italic'\" [tooltip]=\"'Italic'\"\r\n                     (click)=\"toggleItalic($event)\" [toggle]=\"formatting.italic\"></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'underline'\" [tooltip]=\"'Underline'\"\r\n                     (click)=\"toggleUnderline($event)\" [toggle]=\"formatting.underline\"></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'strikethrough'\" [tooltip]=\"'Strike out'\"\r\n                     (click)=\"toggleStrikeout($event)\" [toggle]=\"formatting.strikeout\"></gd-button>\r\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'align-center'\" [tooltip]=\"'Align center'\"\r\n                     (click)=\"toggleAlign('center')\" [toggle]=\"formatting.align == 'center' ? true : false\"></gd-button>\r\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'align-justify'\" [tooltip]=\"'Align full'\"\r\n                     (click)=\"toggleAlign('full')\" [toggle]=\"formatting.align == 'full' ? true : false\"></gd-button>\r\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'align-right'\" [tooltip]=\"'Align right'\"\r\n                     (click)=\"toggleAlign('right')\" [toggle]=\"formatting.align == 'right' ? true : false\"></gd-button>\r\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'align-left'\" [tooltip]=\"'Align left'\"\r\n                     (click)=\"toggleAlign('left')\" [toggle]=\"formatting.align == 'left' ? true : false\"></gd-button>\r\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'list-ul'\" [tooltip]=\"'Add Unordered List'\"\r\n                     (click)=\"toggleList('unordered')\" [toggle]=\"formatting.list == 'unordered' ? true : false\"></gd-button>\r\n          <gd-button *ngIf=\"isDesktop\" [disabled]=\"formatDisabled\" [icon]=\"'list-ol'\" [tooltip]=\"'Add Ordered List'\"\r\n                     (click)=\"toggleList('ordered')\" [toggle]=\"formatting.list == 'ordered' ? true : false\"></gd-button>\r\n          <gd-button *ngIf=\"isDesktop\" name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'fill'\" [tooltip]=\"'Background color'\"\r\n                     (click)=\"toggleColorPicker($event, true)\">\r\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.bgColor\"></div>\r\n          </gd-button>\r\n          <gd-button *ngIf=\"isDesktop\" name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'font'\" [tooltip]=\"'Color'\" \r\n                     (click)=\"toggleColorPicker($event, false)\">\r\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.color\"></div>\r\n          </gd-button>\r\n        </gd-top-toolbar>\r\n      </gd-tab>\r\n      <gd-tab class=\"desktop-hide\" [tabTitle]=\"'Font'\" [icon]=\"'font'\" [id]=\"'3'\">\r\n        <gd-top-toolbar class=\"toolbar-panel\">\r\n          <gd-select class=\"format-select font-type\" [disabled]=\"formatDisabled\" [options]=\"fontOptions\"\r\n                      [isOpen]=\"selectFontShow\" (selected)=\"selectFont($event)\" (click)=\"toggleFontSelect($event, true)\"\r\n                      [showSelected]=\"{name : formatting.font, value : formatting.font}\"></gd-select>\r\n          <gd-select class=\"format-select font-size\" [disabled]=\"formatDisabled\" [options]=\"fontSizeOptions\"\r\n                      [isOpen]=\"selectFontSizeShow\" (selected)=\"selectFontSize($event)\" (click)=\"toggleFontSelect($event, false)\"\r\n                      [showSelected]=\"{name : formatting.fontSize + 'px', value : formatting.fontSize}\"></gd-select>\r\n        </gd-top-toolbar>\r\n      </gd-tab>\r\n      <gd-tab id=\"paragraph-tab\" class=\"desktop-hide\" [tabTitle]=\"'Paragraph'\" [icon]=\"'paragraph'\" [id]=\"'4'\">\r\n        <gd-top-toolbar class=\"toolbar-panel\">\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-center'\" [tooltip]=\"'Align center'\"\r\n                     (click)=\"toggleAlign('center')\" [toggle]=\"formatting.align == 'center' ? true : false\"></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-justify'\" [tooltip]=\"'Align full'\"\r\n                     (click)=\"toggleAlign('full')\" [toggle]=\"formatting.align == 'full' ? true : false\"></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-right'\" [tooltip]=\"'Align right'\"\r\n                     (click)=\"toggleAlign('right')\" [toggle]=\"formatting.align == 'right' ? true : false\"></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-left'\" [tooltip]=\"'Align left'\"\r\n                     (click)=\"toggleAlign('left')\" [toggle]=\"formatting.align == 'left' ? true : false\"></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ul'\" [tooltip]=\"'Add Unordered List'\"\r\n                     (click)=\"toggleList('unordered')\" [toggle]=\"formatting.list == 'unordered' ? true : false\"></gd-button>\r\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ol'\" [tooltip]=\"'Add Ordered List'\"\r\n                     (click)=\"toggleList('ordered')\" [toggle]=\"formatting.list == 'ordered' ? true : false\"></gd-button>\r\n        </gd-top-toolbar>\r\n      </gd-tab>\r\n      <gd-tab class=\"desktop-hide\" [tabTitle]=\"'Palette'\" [icon]=\"'palette'\" [id]=\"'5'\">\r\n        <gd-top-toolbar class=\"toolbar-panel\">\r\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'fill'\" [tooltip]=\"'Background color'\"\r\n                    (click)=\"toggleColorPicker($event, true)\">\r\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.bgColor\"></div>\r\n          </gd-button>\r\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'font'\" [tooltip]=\"'Color'\" \r\n                    (click)=\"toggleColorPicker($event, false)\">\r\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.color\"></div>\r\n          </gd-button>\r\n        </gd-top-toolbar>\r\n      </gd-tab>\r\n    </gd-tabs>\r\n  </gd-tabbed-toolbars>\r\n  <gd-color-picker [isOpen]=\"bgColorPickerShow || colorPickerShow\"\r\n                   [className]=\"'palette ' + (bgColorPickerShow ? 'background-color-picker' : 'color-picker')\"\r\n                   (selectedColor)=\"selectColor($event)\"></gd-color-picker>\r\n  <div class=\"doc-panel\" *ngIf=\"file\">\r\n    <gd-document class=\"gd-document\" *ngIf=\"file\" [ngClass]=\"{'new-file': newFile}\" [file]=\"file\" [mode]=\"true\" [htmlMode]=\"true\"\r\n                 [preloadPageCount]=\"0\" gdFormatting gdRenderPrint gdScrollable>\r\n    </gd-document>\r\n  </div>\r\n  <gd-init-state [icon]=\"'pen-square'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\r\n      Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\r\n      Or drop file here\r\n  </gd-init-state>\r\n  <gd-browse-files-modal\r\n    (closing)=\"onCloseModal($event)\"\r\n    (urlForUpload)=\"upload($event)\"\r\n    [files]=\"files\"\r\n    (selectedDirectory)=\"selectDir($event)\"\r\n    (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\r\n    [uploadConfig]=\"uploadConfig\"\r\n  ></gd-browse-files-modal>\r\n  <gd-error-modal></gd-error-modal>\r\n  <gd-password-required></gd-password-required>\r\n  <gd-create-document-modal (closing)=\"onCloseModal($event)\" [file]=\"credentials\" (savingFile)=\"saveNewFile($event)\"></gd-create-document-modal>\r\n  <gd-success-modal></gd-success-modal>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBeUIsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsZUFBZSxFQUVmLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGVBQWUsRUFDZixZQUFZLEVBQ1osU0FBUyxFQUNULGlCQUFpQixFQUNqQixVQUFVLEVBQ1YscUJBQXFCLEVBQ3JCLGNBQWMsRUFDZCxRQUFRLEVBQ1IsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsYUFBYSxFQUNiLGtCQUFrQixFQUNuQixNQUFNLCtDQUErQyxDQUFDO0FBRXZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztJQUMzQixDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQTZCRSw0QkFBb0IsY0FBNkIsRUFDN0IsYUFBMkIsRUFDbkMsYUFBa0MsRUFDbEMsa0JBQXNDLEVBQ3RDLGVBQWdDLEVBQ3hCLGNBQTZCLEVBQzdCLGtCQUFxQyxFQUNyQyxzQkFBNkMsRUFDN0MsZUFBK0IsRUFDL0IsaUJBQW1DLEVBQ25DLFlBQTZCLEVBQzdCLG1CQUF1QyxFQUN2QyxtQkFBdUMsRUFDdkMsU0FBb0I7UUFieEMsaUJBbUhDO1FBbkhtQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUkzQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBdUI7UUFDN0Msb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBQzdCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFDdkMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUN2QyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBcEN4QyxVQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ2pCLFVBQUssR0FBZ0IsRUFBRSxDQUFDO1FBR3hCLG1CQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUV4QixxQkFBZ0IsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO1FBRTVDLGVBQVUsR0FBZSxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUMsb0JBQWUsR0FBRyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3pELGdCQUFXLEdBQUcsaUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakQsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFUCxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBR3JCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUMzQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBaUJkLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFBLEtBQUssSUFBSSxDQUFDLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RixhQUFhLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLFlBQVk7WUFDakQsS0FBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDbkMsQ0FBQyxFQUFDLENBQUM7UUFFSCxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsT0FBTztZQUNqRCxJQUFJLE9BQU8sRUFBRTs7b0JBQ1AsQ0FBQyxTQUFRO2dCQUNiLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDbkMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTOzs7O29CQUFDLFVBQUMsR0FBb0I7d0JBQ3hHLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQy9FLENBQUMsRUFBQyxDQUFDO2lCQUNKO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILGVBQWUsQ0FBQyxVQUFVLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsSUFBWTtZQUNoRCxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5RSxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QyxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxJQUFhO1lBQ25FLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxNQUFlO1lBQ3ZFLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNsQyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxTQUFrQjtZQUM3RSxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsS0FBYTtZQUNwRSxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsT0FBZTtZQUN4RSxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDcEMsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsc0JBQXNCLENBQUMsb0JBQW9CLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsUUFBZ0I7WUFDMUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQVk7WUFDbEUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLHNCQUFzQixDQUFDLHFCQUFxQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLFNBQWtCO1lBQzdFLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFhO1lBQ3BFLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxJQUFZO1lBQ2xFLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxJQUFhO1lBQy9ELEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxNQUFlO1lBQ25FLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNsQyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxTQUFrQjtZQUN6RSxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsS0FBYTtZQUNoRSxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsT0FBZTtZQUNwRSxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDcEMsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsUUFBZ0I7WUFDdEUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQVk7WUFDOUQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLFNBQWtCO1lBQ3pFLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFhO1lBQ2hFLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxJQUFZO1lBQzlELEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQVk7WUFDbkQsSUFBSSxLQUFJLENBQUMsSUFBSSxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNoQyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUN4QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHFDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEtBQUssRUFBRSxFQUFDO1lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQzs7OztJQUVELDRDQUFlOzs7SUFBZjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLG1CQUFtQjthQUN2QixnQkFBZ0I7YUFDaEIsU0FBUzs7OztRQUFDLFVBQUMsT0FBZ0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxFQUF4QixDQUF3QixFQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELHNCQUFJLDZDQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzlELENBQUM7OztPQUFBO0lBRUQsc0JBQUksOENBQWM7Ozs7UUFBbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDL0QsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFXOzs7O1FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDNUQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHNEQUFzQjs7OztRQUExQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3ZFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0RBQWtCOzs7O1FBQXRCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25FLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbURBQW1COzs7O1FBQXZCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3BFLENBQUM7OztPQUFBOzs7OztJQUVELHNDQUFTOzs7O0lBQVQsVUFBVSxFQUFVO1FBQ2xCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDckM7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDOzs7OztJQUVELHNDQUFTOzs7O0lBQVQsVUFBVSxNQUFjO1FBQXhCLGlCQUVDO1FBREMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsRUFBeEIsQ0FBd0IsRUFBQyxDQUFDO0lBQ3BHLENBQUM7Ozs7OztJQUVPLG1DQUFNOzs7OztJQUFkLFVBQWUsRUFBVTtRQUN2QixvQkFBb0I7UUFDcEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELHlDQUFZOzs7O0lBQVosVUFBYSxNQUFrQjtRQUM3QixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsdUNBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDOztZQUM1QixJQUFJLEdBQUcsSUFBSSxTQUFTO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsd0RBQXdELENBQUM7UUFDckUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBbUIsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZUFBZSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQzs7Ozs7OztJQUVELHVDQUFVOzs7Ozs7SUFBVixVQUFXLE1BQWMsRUFBRSxRQUFnQixFQUFFLE9BQWU7UUFBNUQsaUJBa0JDO1FBakJDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxJQUFxQjtZQUMzRSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOztnQkFDZCxJQUFJLEdBQUcsWUFBWSxDQUFBLEtBQUssSUFBSSxDQUFDLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7WUFDeEYsSUFBRyxJQUFJLEVBQUU7O29CQUNELFVBQVEsR0FBRyxJQUFJLGdCQUFnQjs7OztnQkFBQyxVQUFVLFNBQVM7b0JBQ3ZELElBQUcsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDdkMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO3dCQUMxRCxVQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7cUJBQ3ZCO2dCQUNILENBQUMsRUFBQztnQkFDRixVQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO2FBQ3ZHO1FBQ0gsQ0FBQyxFQUNGLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksTUFBTTtRQUNoQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFTyxxQ0FBUTs7Ozs7SUFBaEIsVUFBaUIsSUFBcUI7UUFBdEMsaUJBdUJDO1FBdEJDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUMzQztRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7OztZQUcxQixLQUFLLEdBQUcsQ0FBQzs7WUFDUCxPQUFPLEdBQUcsV0FBVzs7O1FBQUM7WUFDMUIsS0FBSyxFQUFFLENBQUM7O2dCQUNGLElBQUksR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO1lBQy9DLElBQUksSUFBSSxFQUNSO2dCQUNFLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2dCQUM3QixhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDeEI7WUFDRCxJQUFJLEtBQUssS0FBSyxFQUFFO2dCQUFFLGFBQWEsRUFBRSxDQUFDO1FBQ3BDLENBQUMsR0FBRSxHQUFHLENBQUM7SUFDVCxDQUFDOzs7OztJQUVPLGtEQUFxQjs7OztJQUE3QjtRQUFBLGlCQW9CQzs7WUFuQk8sTUFBTSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7UUFDakQsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEtBQUs7WUFDbEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU87Ozs7WUFBRSxVQUFDLEtBQUs7Z0JBQzFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDOztZQUVHLE9BQU8sR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ3BCLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFROzs7O1lBQUUsVUFBQyxLQUFLO2dCQUM1QyxPQUFPLENBQUMsT0FBTzs7OztnQkFBQyxVQUFBLENBQUM7b0JBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDOUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQzFDO2dCQUNILENBQUMsRUFBQyxDQUFDO2dCQUVILE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDNUUsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sc0NBQVM7Ozs7SUFBakI7O1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNsQyxPQUFPO1NBQ1I7O1lBQ0QsS0FBbUIsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFBLGdCQUFBLDRCQUFFO2dCQUEvQixJQUFNLElBQUksV0FBQTtnQkFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzthQUNsQjs7Ozs7Ozs7O0lBQ0gsQ0FBQzs7Ozs7SUFFRCxtQ0FBTTs7OztJQUFOLFVBQU8sTUFBYztRQUFyQixpQkFJQztRQUhDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVM7OztRQUFDO1lBQ3JFLEtBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELDJDQUFjOzs7O0lBQWQsVUFBZSxNQUFjO1FBQzNCLElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTztRQUNULENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTzs7O1FBQUU7O2dCQUNyQixZQUFZLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztZQUMxRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUN2RCxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFO29CQUNoRCxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUNoRDthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELHVDQUFVOzs7O0lBQVYsVUFBVyxNQUFjO1FBQ3ZCLElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTztRQUNULEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7OztJQUVELDhDQUFpQjs7Ozs7SUFBakIsVUFBa0IsTUFBTSxFQUFFLEVBQVc7UUFDbkMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsT0FBTztTQUNSO1FBQ0QsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7UUFDRCxJQUFJLEVBQUUsRUFBRTtZQUNOLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDN0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztTQUNoQztJQUNILENBQUM7Ozs7OztJQUVELDZDQUFnQjs7Ozs7SUFBaEIsVUFBaUIsTUFBTSxFQUFFLFVBQW1CO1FBQzFDLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDM0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztTQUNqQzthQUFNO1lBQ0wsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQ25ELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksTUFBYztRQUN4QixJQUFHLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQztRQUNELElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDTCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDOzs7OztJQUVELHVDQUFVOzs7O0lBQVYsVUFBVyxLQUFLO1FBQ2QsSUFBSSxJQUFJLENBQUMsY0FBYztZQUNyQixPQUFPO1FBQ1QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFHLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQztRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7OztJQUVELHVDQUFVOzs7SUFBVjtRQUNFLElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTztRQUNULEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCx1Q0FBVTs7O0lBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQ3JCLE9BQU87UUFDVCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELHlDQUFZOzs7O0lBQVosVUFBYSxLQUFLO1FBQ2hCLElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTztRQUNULEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7O0lBRUQsNENBQWU7Ozs7SUFBZixVQUFnQixLQUFLO1FBQ25CLElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTztRQUNULEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7O0lBRUQsb0NBQU87Ozs7SUFBUCxVQUFRLE1BQU07UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUNoRixNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQztZQUNsRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWE7Z0JBQzFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUM1RCxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsRUFBRTtZQUVsRixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpDLGtEQUFrRDtRQUNsRCxJQUFJLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDcEY7SUFDSCxDQUFDOzs7OztJQUVELDRDQUFlOzs7O0lBQWYsVUFBZ0IsS0FBSztRQUNuQixJQUFJLElBQUksQ0FBQyxjQUFjO1lBQ3JCLE9BQU87UUFDVCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUcsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxLQUFhO1FBQ3ZCLElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTztRQUNULEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUU7WUFDbkMsS0FBSyxHQUFHLE1BQU0sQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCx1Q0FBVTs7OztJQUFWLFVBQVcsSUFBWTtRQUNyQixJQUFJLElBQUksQ0FBQyxjQUFjO1lBQ3JCLE9BQU87UUFDVCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUMxQix3Q0FBd0M7WUFDeEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLGdEQUFnRDtZQUNoRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDOUM7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFHLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQztJQUNILENBQUM7Ozs7SUFFRCx5Q0FBWTs7O0lBQVo7UUFDRSxJQUFJLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkIsT0FBTztRQUNULE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7SUFFRCxpQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQ3JCLE9BQU87UUFDVCxJQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxtQkFBbUIsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDN0M7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDakM7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUYscUNBQVE7Ozs7SUFBUixVQUFTLFdBQTRCO1FBQXJDLGlCQVlFO1FBWEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDaEMsT0FBTztRQUVULElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUV4RSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsUUFBeUI7WUFDckUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVFLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksV0FBNEI7UUFBeEMsaUJBZUM7UUFkQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUNsQztZQUNFLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUV4RSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsUUFBeUI7WUFDdkUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVFLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3ZELEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1GQUFtRjs7Ozs7OztJQUNuRixnREFBbUI7Ozs7Ozs7SUFBbkIsVUFBb0IsSUFBSSxFQUFFLElBQUk7O1lBQ3RCLFVBQVUsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7O1lBQ2xHLFVBQVUsR0FBRyxJQUFJO1FBRXJCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ3hFLFVBQVUsR0FBRyxjQUFjLEdBQUcsSUFBSSxHQUFHLGdCQUFnQixDQUFDO1NBQ3ZEO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUNoQjtZQUNFLFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSx3RkFBd0YsQ0FBQyxDQUFDO1lBQ3BJLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQzlDO2dCQUNFLFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO2FBQ3hFO2lCQUVEO2dCQUNFLFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSx5Q0FBeUMsQ0FBQyxDQUFDO2FBQ3RGO1lBRUQsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQzdEO2FBRUQ7WUFDRSxpQkFBaUI7WUFDakIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsbUNBQW1DLEVBQUUsZ0RBQWdELENBQUMsQ0FBQztZQUN2SCwwQkFBMEI7WUFDMUIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztZQUN6RixrQkFBa0I7WUFDbEIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztTQUNsRjtRQUVELFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLG9DQUFvQyxFQUFFLGlEQUFpRCxDQUFDLENBQUM7UUFDekgsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELHNDQUFTOzs7SUFBVDtRQUNFLElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTztRQUNULElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7O2dCQUNaLElBQUksR0FBRyxJQUFJLFNBQVM7WUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDbEIsc0ZBQXNGO1lBQ3RGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLGtDQUFrQyxDQUFDLENBQUM7O2dCQUM5RSxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7Ozs7O0lBRUQseUNBQVk7Ozs7SUFBWixVQUFhLE1BQU07UUFDakIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sRUFBRTtZQUN2QixJQUFHLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1osQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzNEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDcEM7WUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQztJQUNILENBQUM7O2dCQTltQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLDg0VkFBMEM7O2lCQUUzQzs7OztnQkE5Qk8sYUFBYTtnQkFJbkIsWUFBWTtnQkFrQk4sbUJBQW1CO2dCQWpCekIsa0JBQWtCO2dCQUNsQixlQUFlO2dCQVlmLGFBQWE7Z0JBUmIsaUJBQWlCO2dCQUVqQixxQkFBcUI7Z0JBQ3JCLGNBQWM7Z0JBRWQsZ0JBQWdCO2dCQUNoQixlQUFlO2dCQUNmLGtCQUFrQjtnQkFFbEIsa0JBQWtCO2dCQXBCc0IsU0FBUzs7SUEwb0JuRCx5QkFBQztDQUFBLEFBL21CRCxJQSttQkM7U0ExbUJZLGtCQUFrQjs7O0lBQzdCLG1DQUFpQjs7SUFDakIsbUNBQXdCOztJQUN4QixrQ0FBc0I7O0lBQ3RCLDBDQUEyQjs7SUFDM0IsNENBQTRCOztJQUM1Qiw4Q0FBd0I7O0lBQ3hCLHlDQUE2Qjs7SUFDN0IsOENBQTRDOztJQUM1Qyx1Q0FBbUI7O0lBQ25CLHdDQUE4Qzs7SUFDOUMsNkNBQXlEOztJQUN6RCx5Q0FBaUQ7O0lBQ2pELCtDQUEwQjs7SUFDMUIsNkNBQXdCOztJQUN4QixvQ0FBZTs7SUFDZix3Q0FBMEI7Ozs7O0lBQzFCLGtDQUFxQjs7SUFDckIsdUNBQW1COztJQUNuQiw0Q0FBc0I7O0lBQ3RCLDRDQUF1Qjs7SUFDdkIsZ0RBQTJCOztJQUMzQixxQ0FBZ0I7Ozs7O0lBRUosNENBQXFDOzs7OztJQUNyQywyQ0FBbUM7Ozs7O0lBSW5DLDRDQUFxQzs7Ozs7SUFDckMsZ0RBQTZDOzs7OztJQUM3QyxvREFBcUQ7Ozs7O0lBQ3JELDZDQUF1Qzs7Ozs7SUFDdkMsK0NBQTJDOzs7OztJQUMzQywwQ0FBcUM7Ozs7O0lBQ3JDLGlEQUErQzs7Ozs7SUFDL0MsaURBQStDOzs7OztJQUMvQyx1Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0VkaXRvclNlcnZpY2V9IGZyb20gXCIuL2VkaXRvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgRmlsZURlc2NyaXB0aW9uLFxyXG4gIEZpbGVNb2RlbCxcclxuICBNb2RhbFNlcnZpY2UsXHJcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlLFxyXG4gIFBhc3N3b3JkU2VydmljZSxcclxuICBGaWxlQ3JlZGVudGlhbHMsXHJcbiAgQ29tbW9uTW9kYWxzLFxyXG4gIFBhZ2VNb2RlbCxcclxuICBGb3JtYXR0aW5nU2VydmljZSxcclxuICBGb3JtYXR0aW5nLFxyXG4gIEJhY2tGb3JtYXR0aW5nU2VydmljZSxcclxuICBPbkNsb3NlU2VydmljZSxcclxuICBTYXZlRmlsZSxcclxuICBTZWxlY3Rpb25TZXJ2aWNlLFxyXG4gIEVkaXRIdG1sU2VydmljZSxcclxuICBSZW5kZXJQcmludFNlcnZpY2UsXHJcbiAgV2luZG93U2VydmljZSxcclxuICBMb2FkaW5nTWFza1NlcnZpY2UsIE9wdGlvblxyXG59IGZyb20gJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XHJcbmltcG9ydCB7RWRpdG9yQ29uZmlnfSBmcm9tIFwiLi9lZGl0b3ItY29uZmlnXCI7XHJcbmltcG9ydCB7RWRpdG9yQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vZWRpdG9yLWNvbmZpZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xyXG5jb25zdCAkID0ganF1ZXJ5O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1lZGl0b3ItYW5ndWxhci1yb290JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdG9yLWFwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZWRpdG9yLWFwcC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIHRpdGxlID0gJ2VkaXRvcic7XHJcbiAgZmlsZXM6IEZpbGVNb2RlbFtdID0gW107XHJcbiAgZmlsZTogRmlsZURlc2NyaXB0aW9uO1xyXG4gIGVkaXRvckNvbmZpZzogRWRpdG9yQ29uZmlnO1xyXG4gIGZvcm1hdERpc2FibGVkID0gIXRoaXMuZmlsZTtcclxuICBkb3dubG9hZERpc2FibGVkID0gdHJ1ZTtcclxuICBjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzO1xyXG4gIGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XHJcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xyXG4gIGZvcm1hdHRpbmc6IEZvcm1hdHRpbmcgPSBGb3JtYXR0aW5nLmRlZmF1bHQoKTtcclxuICBmb250U2l6ZU9wdGlvbnMgPSBGb3JtYXR0aW5nU2VydmljZS5nZXRGb250U2l6ZU9wdGlvbnMoKTtcclxuICBmb250T3B0aW9ucyA9IEZvcm1hdHRpbmdTZXJ2aWNlLmdldEZvbnRPcHRpb25zKCk7XHJcbiAgYmdDb2xvclBpY2tlclNob3cgPSBmYWxzZTtcclxuICBjb2xvclBpY2tlclNob3cgPSBmYWxzZTtcclxuICBhY3RpdmUgPSBmYWxzZTtcclxuICBwdWJsaWMgdGV4dEJhY2t1cDogc3RyaW5nO1xyXG4gIHByaXZhdGUgaXNJRSA9IGZhbHNlO1xyXG4gIGlzTG9hZGluZzogYm9vbGVhbjtcclxuICBmaWxlV2FzRHJvcHBlZDogZmFsc2U7XHJcbiAgc2VsZWN0Rm9udFNob3cgPSBmYWxzZTtcclxuICBzZWxlY3RGb250U2l6ZVNob3cgPSBmYWxzZTtcclxuICBuZXdGaWxlID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VkaXRvclNlcnZpY2U6IEVkaXRvclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgY29uZmlnU2VydmljZTogRWRpdG9yQ29uZmlnU2VydmljZSxcclxuICAgICAgICAgICAgICB1cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcclxuICAgICAgICAgICAgICBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2Zvcm1hdHRpbmdTZXJ2aWNlOiBGb3JtYXR0aW5nU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9iYWNrRm9ybWF0dGluZ1NlcnZpY2U6IEJhY2tGb3JtYXR0aW5nU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9vbkNsb3NlU2VydmljZTogT25DbG9zZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2VsZWN0aW9uU2VydmljZTogU2VsZWN0aW9uU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9odG1sU2VydmljZTogRWRpdEh0bWxTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlclByaW50U2VydmljZTogUmVuZGVyUHJpbnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2xvYWRpbmdNYXNrU2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHRoaXMuaXNJRSA9IC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhLyhNU0lFfFRyaWRlbnRcXC98RWRnZVxcLykvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgY29uZmlnU2VydmljZS51cGRhdGVkQ29uZmlnLnN1YnNjcmliZSgoZWRpdG9yQ29uZmlnKSA9PiB7XHJcbiAgICAgIHRoaXMuZWRpdG9yQ29uZmlnID0gZWRpdG9yQ29uZmlnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdXBsb2FkRmlsZXNTZXJ2aWNlLnVwbG9hZHNDaGFuZ2Uuc3Vic2NyaWJlKCh1cGxvYWRzKSA9PiB7XHJcbiAgICAgIGlmICh1cGxvYWRzKSB7XHJcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXBsb2Fkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdGhpcy5fZWRpdG9yU2VydmljZS51cGxvYWQodXBsb2Fkcy5pdGVtKGkpLCAnJywgdGhpcy5lZGl0b3JDb25maWcucmV3cml0ZSkuc3Vic2NyaWJlKChvYmo6IEZpbGVDcmVkZW50aWFscykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID8gdGhpcy5zZWxlY3RGaWxlKG9iai5ndWlkLCAnJywgJycpIDogdGhpcy5zZWxlY3REaXIoJycpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwYXNzd29yZFNlcnZpY2UucGFzc0NoYW5nZS5zdWJzY3JpYmUoKHBhc3M6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5jcmVkZW50aWFscy5ndWlkLCBwYXNzLCBDb21tb25Nb2RhbHMuUGFzc3dvcmRSZXF1aXJlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xyXG4gICAgX3dpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XHJcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Qm9sZENoYW5nZS5zdWJzY3JpYmUoKGJvbGQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy5mb3JtYXR0aW5nLmJvbGQgPSBib2xkO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0SXRhbGljQ2hhbmdlLnN1YnNjcmliZSgoaXRhbGljOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5pdGFsaWMgPSBpdGFsaWM7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRVbmRlcmxpbmVDaGFuZ2Uuc3Vic2NyaWJlKCh1bmRlcmxpbmU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy5mb3JtYXR0aW5nLnVuZGVybGluZSA9IHVuZGVybGluZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdENvbG9yQ2hhbmdlLnN1YnNjcmliZSgoY29sb3I6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLmZvcm1hdHRpbmcuY29sb3IgPSBjb2xvcjtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEJnQ29sb3JDaGFuZ2Uuc3Vic2NyaWJlKChiZ2NvbG9yOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5mb3JtYXR0aW5nLmJnQ29sb3IgPSBiZ2NvbG9yO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Rm9udFNpemVDaGFuZ2Uuc3Vic2NyaWJlKChmb250U2l6ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEZvbnRDaGFuZ2Uuc3Vic2NyaWJlKChmb250OiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5mb3JtYXR0aW5nLmZvbnQgPSBmb250O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdFN0cmlrZW91dENoYW5nZS5zdWJzY3JpYmUoKHN0cmlrZW91dDogYm9vbGVhbikgPT4ge1xyXG4gICAgICB0aGlzLmZvcm1hdHRpbmcuc3RyaWtlb3V0ID0gc3RyaWtlb3V0O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEFsaWduQ2hhbmdlLnN1YnNjcmliZSgoYWxpZ246IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLmZvcm1hdHRpbmcuYWxpZ24gPSBhbGlnbjtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5mb3JtYXRMaXN0Q2hhbmdlLnN1YnNjcmliZSgobGlzdDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5saXN0ID0gbGlzdDtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEJvbGRDaGFuZ2Uuc3Vic2NyaWJlKChib2xkOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5ib2xkID0gYm9sZDtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0SXRhbGljQ2hhbmdlLnN1YnNjcmliZSgoaXRhbGljOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5pdGFsaWMgPSBpdGFsaWM7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdFVuZGVybGluZUNoYW5nZS5zdWJzY3JpYmUoKHVuZGVybGluZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICB0aGlzLmZvcm1hdHRpbmcudW5kZXJsaW5lID0gdW5kZXJsaW5lO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRDb2xvckNoYW5nZS5zdWJzY3JpYmUoKGNvbG9yOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5mb3JtYXR0aW5nLmNvbG9yID0gY29sb3I7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEJnQ29sb3JDaGFuZ2Uuc3Vic2NyaWJlKChiZ2NvbG9yOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5mb3JtYXR0aW5nLmJnQ29sb3IgPSBiZ2NvbG9yO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRGb250U2l6ZUNoYW5nZS5zdWJzY3JpYmUoKGZvbnRTaXplOiBudW1iZXIpID0+IHtcclxuICAgICAgdGhpcy5mb3JtYXR0aW5nLmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRGb250Q2hhbmdlLnN1YnNjcmliZSgoZm9udDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5mb250ID0gZm9udDtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdFN0cmlrZW91dENoYW5nZS5zdWJzY3JpYmUoKHN0cmlrZW91dDogYm9vbGVhbikgPT4ge1xyXG4gICAgICB0aGlzLmZvcm1hdHRpbmcuc3RyaWtlb3V0ID0gc3RyaWtlb3V0O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0QWxpZ25DaGFuZ2Uuc3Vic2NyaWJlKChhbGlnbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybWF0dGluZy5hbGlnbiA9IGFsaWduO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0TGlzdENoYW5nZS5zdWJzY3JpYmUoKGxpc3Q6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLmZvcm1hdHRpbmcubGlzdCA9IGxpc3Q7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9odG1sU2VydmljZS5odG1sQ29udGVudC5zdWJzY3JpYmUoKHRleHQ6IHN0cmluZykgPT4ge1xyXG4gICAgICBpZiAodGhpcy5maWxlICYmIHRoaXMuZmlsZS5wYWdlcykge1xyXG4gICAgICAgIHRoaXMudGV4dEJhY2t1cCA9IHRleHQ7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5lZGl0b3JDb25maWcuZGVmYXVsdERvY3VtZW50ICE9PSBcIlwiKXtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5lZGl0b3JDb25maWcuZGVmYXVsdERvY3VtZW50LCBcIlwiLCBcIlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuX2xvYWRpbmdNYXNrU2VydmljZVxyXG4gICAgLm9uTG9hZGluZ0NoYW5nZWRcclxuICAgIC5zdWJzY3JpYmUoKGxvYWRpbmc6IGJvb2xlYW4pID0+IHRoaXMuaXNMb2FkaW5nID0gbG9hZGluZyk7XHJcbiAgfVxyXG5cclxuICBnZXQgcmV3cml0ZUNvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmVkaXRvckNvbmZpZyA/IHRoaXMuZWRpdG9yQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRvd25sb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yQ29uZmlnID8gdGhpcy5lZGl0b3JDb25maWcuZG93bmxvYWQgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmVkaXRvckNvbmZpZyA/IHRoaXMuZWRpdG9yQ29uZmlnLnVwbG9hZCA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJpbnRDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JDb25maWcgPyB0aGlzLmVkaXRvckNvbmZpZy5wcmludCA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgYnJvd3NlQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yQ29uZmlnID8gdGhpcy5lZGl0b3JDb25maWcuYnJvd3NlIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBlbmFibGVSaWdodENsaWNrQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yQ29uZmlnID8gdGhpcy5lZGl0b3JDb25maWcuZW5hYmxlUmlnaHRDbGljayA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgcGFnZVNlbGVjdG9yQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yQ29uZmlnID8gdGhpcy5lZGl0b3JDb25maWcucGFnZVNlbGVjdG9yIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBjcmVhdGVOZXdGaWxlQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yQ29uZmlnID8gdGhpcy5lZGl0b3JDb25maWcuY3JlYXRlTmV3RmlsZSA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuZmlsZSkge1xyXG4gICAgICB0aGlzLmZpbGUucGFnZXNbMF0uZWRpdGFibGUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKGlkKTtcclxuICB9XHJcblxyXG4gIG9wZW5TYXZlKCkge1xyXG4gICAgaWYgKCF0aGlzLmZvcm1hdERpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMub3Blbk1vZGFsKENvbW1vbk1vZGFscy5DcmVhdGVEb2N1bWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2VkaXRvclNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRmlsZU1vZGVsW10pID0+IHRoaXMuZmlsZXMgPSBmaWxlcyB8fCBbXSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHB0VG9QeChwdDogbnVtYmVyKSB7XHJcbiAgICAvL3B0ICogOTYgLyA3MiA9IHB4LlxyXG4gICAgcmV0dXJuIHB0ICogOTYgLyA3MjtcclxuICB9XHJcblxyXG4gIG9uUmlnaHRDbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIHJldHVybiB0aGlzLmVuYWJsZVJpZ2h0Q2xpY2tDb25maWc7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVGaWxlKCkge1xyXG4gICAgdGhpcy5uZXdGaWxlID0gdHJ1ZTtcclxuICAgIHRoaXMuZmlsZSA9IG5ldyBGaWxlRGVzY3JpcHRpb24oKTtcclxuICAgIGNvbnN0IHBhZ2UgPSBuZXcgUGFnZU1vZGVsO1xyXG4gICAgcGFnZS53aWR0aCA9IDU5NTtcclxuICAgIHBhZ2UuaGVpZ2h0ID0gODQyO1xyXG4gICAgcGFnZS5kYXRhID0gJzwhRE9DVFlQRSBIVE1MPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48L2JvZHk+PC9odG1sPic7XHJcbiAgICBwYWdlLm51bWJlciA9IDE7XHJcbiAgICBwYWdlLmVkaXRhYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMuZmlsZS5wYWdlcyA9IFtdO1xyXG4gICAgdGhpcy5maWxlLnBhZ2VzLnB1c2gocGFnZSk7XHJcbiAgICB0aGlzLmZpbGUuZ3VpZCA9IFwibmV3IGRvY3VtZW50LmRvY3hcIjtcclxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBuZXcgRmlsZUNyZWRlbnRpYWxzKFwibmV3IGRvY3VtZW50LmRvY3hcIiwgXCJcIik7XHJcbiAgICB0aGlzLmZvcm1hdERpc2FibGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmRvd25sb2FkRGlzYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0RmlsZSgkZXZlbnQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgbW9kYWxJZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gbmV3IEZpbGVDcmVkZW50aWFscygkZXZlbnQsIHBhc3N3b3JkKTtcclxuICAgIHRoaXMuX2VkaXRvclNlcnZpY2UubG9hZEZpbGUodGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKChmaWxlOiBGaWxlRGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRGaWxlKGZpbGUpO1xyXG4gICAgICAgIGNvbnN0IGlzSUUgPSAvKkBjY19vbiFAKi9mYWxzZSB8fCAhIS8oTVNJRXxUcmlkZW50XFwvfEVkZ2VcXC8pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgICAgICBpZihpc0lFKSB7XHJcbiAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYoJChcIi5kb2N1bWVudE1haW5Db250ZW50XCIpLmxlbmd0aCA+IDAgKXtcclxuICAgICAgICAgICAgICAkKFwiLmRvY3VtZW50TWFpbkNvbnRlbnRcIikuYXR0cihcImNvbnRlbnRFZGl0YWJsZVwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIHthdHRyaWJ1dGVzOiBmYWxzZSwgY2hpbGRMaXN0OiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiBmYWxzZSwgc3VidHJlZTogdHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHRoaXMuY2xlYXJEYXRhKCk7XHJcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UobW9kYWxJZCk7XHJcbiAgfVxyXG5cclxuICBmaWxlRHJvcHBlZCgkZXZlbnQpe1xyXG4gICAgdGhpcy5maWxlV2FzRHJvcHBlZCA9ICRldmVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZEZpbGUoZmlsZTogRmlsZURlc2NyaXB0aW9uKSB7XHJcbiAgICB0aGlzLmZpbGUgPSBmaWxlO1xyXG4gICAgaWYgKHRoaXMuZmlsZSAmJiB0aGlzLmZpbGUucGFnZXNbMF0pIHtcclxuICAgICAgdGhpcy5maWxlLnBhZ2VzWzBdLmVkaXRhYmxlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5maWxlLnBhZ2VzWzBdLndpZHRoID0gNTk1O1xyXG4gICAgICB0aGlzLmZpbGUucGFnZXNbMF0uaGVpZ2h0ID0gODQyO1xyXG4gICAgICB0aGlzLnRleHRCYWNrdXAgPSB0aGlzLmZpbGUucGFnZXNbMF0uZGF0YTtcclxuICAgIH1cclxuICAgIHRoaXMuZm9ybWF0RGlzYWJsZWQgPSAhdGhpcy5maWxlO1xyXG4gICAgdGhpcy5kb3dubG9hZERpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgLy8gYWRkaW5nIGxpc3RlbmVycyBvbiBpbnB1dHMgaWYgcHJlc2VudCBvbiBleGlzdGluZyBwYWdlXHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgY29uc3QgdGltZXJJZCA9IHNldEludGVydmFsKCgpID0+IHsgXHJcbiAgICAgIGNvdW50Kys7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFnZScpO1xyXG4gICAgICBpZiAocGFnZSlcclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuaW5pdENvbnRyb2xzTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcklkKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY291bnQgPT09IDIwKSBjbGVhckludGVydmFsKCk7XHJcbiAgICB9LCAxMDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0Q29udHJvbHNMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5saXN0ZW4oaW5wdXQsICdrZXl1cCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpbnB1dC52YWx1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xyXG4gICAgc2VsZWN0cy5mb3JFYWNoKHNlbGVjdCA9PiB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmxpc3RlbihzZWxlY3QsICdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZWxlY3RzLmZvckVhY2gocyA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gcy5vcHRpb25zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHMub3B0aW9uc1tpXS5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyRGF0YSgpIHtcclxuICAgIGlmICghdGhpcy5maWxlIHx8ICF0aGlzLmZpbGUucGFnZXMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBwYWdlIG9mIHRoaXMuZmlsZS5wYWdlcykge1xyXG4gICAgICBwYWdlLmRhdGEgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9lZGl0b3JTZXJ2aWNlLnVwbG9hZChudWxsLCAkZXZlbnQsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RGb250U2l6ZSgkZXZlbnQ6IE9wdGlvbikge1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgICQoXCIuZ2Qtd3JhcHBlclwiKS5vZmYoXCJrZXl1cFwiKTtcclxuICAgIGlmKHRoaXMuaXNJRSkge1xyXG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKTtcclxuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRGb250U2l6ZSgkZXZlbnQudmFsdWUpO1xyXG4gICAgJChcIi5nZC13cmFwcGVyXCIpLm9uKFwia2V5dXBcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCBmb250RWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImZvbnRcIik7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBmb250RWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICBpZiAoZm9udEVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZSgnc2l6ZScpID09PSBcIjdcIikge1xyXG4gICAgICAgICAgZm9udEVsZW1lbnRzW2ldLnJlbW92ZUF0dHJpYnV0ZShcInNpemVcIik7XHJcbiAgICAgICAgICBmb250RWxlbWVudHNbaV0uc3R5bGUuZm9udFNpemUgPSAkZXZlbnQgKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEZvbnQoJGV2ZW50OiBPcHRpb24pIHtcclxuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZih0aGlzLmlzSUUpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0Rm9udCgkZXZlbnQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQ29sb3JQaWNrZXIoJGV2ZW50LCBiZzogYm9vbGVhbikge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmlzSUUpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xyXG4gICAgfVxyXG4gICAgaWYgKGJnKSB7XHJcbiAgICAgIHRoaXMuYmdDb2xvclBpY2tlclNob3cgPSAhdGhpcy5iZ0NvbG9yUGlja2VyU2hvdztcclxuICAgICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJTaG93ID0gIXRoaXMuY29sb3JQaWNrZXJTaG93O1xyXG4gICAgICB0aGlzLmJnQ29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVGb250U2VsZWN0KCRldmVudCwgaXNGb250TmFtZTogYm9vbGVhbikge1xyXG4gICAgaWYgKGlzRm9udE5hbWUpIHtcclxuICAgICAgdGhpcy5zZWxlY3RGb250U2hvdyA9ICF0aGlzLnNlbGVjdEZvbnRTaG93O1xyXG4gICAgICB0aGlzLnNlbGVjdEZvbnRTaXplU2hvdyA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RGb250U2l6ZVNob3cgPSAhdGhpcy5zZWxlY3RGb250U2l6ZVNob3c7XHJcbiAgICAgIHRoaXMuc2VsZWN0Rm9udFNob3cgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdENvbG9yKCRldmVudDogc3RyaW5nKSB7XHJcbiAgICBpZih0aGlzLmlzSUUpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYmdDb2xvclBpY2tlclNob3cpIHtcclxuICAgICAgdGhpcy5iZ0NvbG9yUGlja2VyU2hvdyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRCZ0NvbG9yKCRldmVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbG9yUGlja2VyU2hvdyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRDb2xvcigkZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQm9sZChldmVudCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmKHRoaXMuaXNJRSkge1xyXG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKTtcclxuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRCb2xkKCF0aGlzLmZvcm1hdHRpbmcuYm9sZCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVVbmRvKCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLlVuZG8oKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVJlZG8oKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuUmVkbygpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlSXRhbGljKGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYodGhpcy5pc0lFKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xyXG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEl0YWxpYyghdGhpcy5mb3JtYXR0aW5nLml0YWxpYyk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVVbmRlcmxpbmUoZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZih0aGlzLmlzSUUpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0VW5kZXJsaW5lKCF0aGlzLmZvcm1hdHRpbmcudW5kZXJsaW5lKTtcclxuICB9XHJcblxyXG4gIGhpZGVBbGwoJGV2ZW50KSB7XHJcbiAgICBpZiAoKCRldmVudC50YXJnZXQucGFyZW50RWxlbWVudCAmJiAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddICYmXHJcbiAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10udmFsdWUgPT09ICdidXR0b24nKSB8fFxyXG4gICAgICAoJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgJiZcclxuICAgICAgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddICYmXHJcbiAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXNbJ25hbWUnXS52YWx1ZSA9PT0gJ2J1dHRvbicpKSB7XHJcblxyXG4gICAgICB0aGlzLl9vbkNsb3NlU2VydmljZS5jbG9zZSh0cnVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSBmYWxzZTtcclxuICAgIHRoaXMuYmdDb2xvclBpY2tlclNob3cgPSBmYWxzZTtcclxuICAgIHRoaXMuX29uQ2xvc2VTZXJ2aWNlLmNsb3NlKHRydWUpO1xyXG5cclxuICAgIC8vIHdlIHRyeSB0byBzYXZlIHRoZSBjaGFuZ2VzIG9uIGFueSBjbGljayBvdXRzaWRlXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdkLXdyYXBwZXInKVswXSkge1xyXG4gICAgICB0aGlzLnRleHRCYWNrdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2Qtd3JhcHBlcicpWzBdLmlubmVySFRNTC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU3RyaWtlb3V0KGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYodGhpcy5pc0lFKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xyXG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdFN0cmlrZW91dCghdGhpcy5mb3JtYXR0aW5nLnN0cmlrZW91dCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVBbGlnbihhbGlnbjogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKGFsaWduID09PSB0aGlzLmZvcm1hdHRpbmcuYWxpZ24pIHtcclxuICAgICAgYWxpZ24gPSAnZnVsbCc7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRBbGlnbihhbGlnbik7XHJcbiAgICB0aGlzLmZvcm1hdHRpbmcuYWxpZ24gPSBhbGlnbjtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUxpc3QobGlzdDogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIGlmIChsaXN0ID09PSB0aGlzLmZvcm1hdHRpbmcubGlzdCkge1xyXG4gICAgICB0aGlzLmZvcm1hdHRpbmcubGlzdCA9IFwiXCI7XHJcbiAgICAgIC8vIHRvIHRyaWdnZXIgY2hhbmdlcyBpbiBjb250ZW50RWRpdGFibGVcclxuICAgICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0TGlzdChsaXN0KTtcclxuICAgICAgLy8gdG8gY2xlYXIgdGhlIHRvZ2dsZSBzdGF0dXMgb2YgdGhlIGJ1dHRvbiBvbmx5XHJcbiAgICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdExpc3QoXCJcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZvcm1hdHRpbmcubGlzdCA9IGxpc3Q7XHJcbiAgICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdExpc3QobGlzdCk7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmlzSUUpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKCk7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG93bmxvYWRGaWxlKCkge1xyXG4gICAgaWYgKHRoaXMuZG93bmxvYWREaXNhYmxlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLl9lZGl0b3JTZXJ2aWNlLmdldERvd25sb2FkVXJsKHRoaXMuY3JlZGVudGlhbHMpKTtcclxuICB9XHJcblxyXG4gIHNhdmUoKXtcclxuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBpZih0aGlzLmNyZWRlbnRpYWxzKSB7XHJcbiAgICAgIGlmICh0aGlzLmZpbGUuZ3VpZCA9PT0gXCJuZXcgZG9jdW1lbnQuZG9jeFwiKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuTW9kYWwoQ29tbW9uTW9kYWxzLkNyZWF0ZURvY3VtZW50KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNhdmVGaWxlKHRoaXMuY3JlZGVudGlhbHMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIHNhdmVGaWxlKGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHMpIHtcclxuICAgIGlmICghdGhpcy5maWxlIHx8ICF0aGlzLmZpbGUucGFnZXMpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnRleHRCYWNrdXAgPSB0aGlzLmdldFBhZ2VXaXRoUm9vdFRhZ3ModGhpcy50ZXh0QmFja3VwLCBjcmVkZW50aWFscy5ndWlkKTtcclxuXHJcbiAgICBjb25zdCBzYXZlRmlsZSA9IG5ldyBTYXZlRmlsZShjcmVkZW50aWFscy5ndWlkLCBjcmVkZW50aWFscy5wYXNzd29yZCwgdGhpcy50ZXh0QmFja3VwKTtcclxuICAgIHRoaXMuX2VkaXRvclNlcnZpY2Uuc2F2ZShzYXZlRmlsZSkuc3Vic2NyaWJlKChsb2FkRmlsZTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZEZpbGUobG9hZEZpbGUpO1xyXG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gbmV3IEZpbGVDcmVkZW50aWFscyhsb2FkRmlsZS5ndWlkLCBjcmVkZW50aWFscy5wYXNzd29yZCk7XHJcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5PcGVyYXRpb25TdWNjZXNzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZU5ld0ZpbGUoY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscykge1xyXG4gICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5wYWdlcylcclxuICAgIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGV4dEJhY2t1cCA9IHRoaXMuZ2V0UGFnZVdpdGhSb290VGFncyh0aGlzLnRleHRCYWNrdXAsIGNyZWRlbnRpYWxzLmd1aWQpO1xyXG5cclxuICAgIGNvbnN0IHNhdmVGaWxlID0gbmV3IFNhdmVGaWxlKGNyZWRlbnRpYWxzLmd1aWQsIGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB0aGlzLnRleHRCYWNrdXApO1xyXG4gICAgdGhpcy5fZWRpdG9yU2VydmljZS5jcmVhdGUoc2F2ZUZpbGUpLnN1YnNjcmliZSgobG9hZEZpbGU6IEZpbGVEZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRGaWxlKGxvYWRGaWxlKTtcclxuICAgICAgdGhpcy5jcmVkZW50aWFscyA9IG5ldyBGaWxlQ3JlZGVudGlhbHMobG9hZEZpbGUuZ3VpZCwgY3JlZGVudGlhbHMucGFzc3dvcmQpO1xyXG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuT3BlcmF0aW9uU3VjY2Vzcyk7XHJcbiAgICAgIHRoaXMubmV3RmlsZSA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBSZXR1cm5zIHJvb3QtdGFncyBpbiB0aGUgSFRNTC1tYXJrdXAgd2hpY2ggcHJldmlvdXNseSB3ZXJlIHJlbW92ZWQgYnkgaW5uZXJIVE1MLlxyXG4gIGdldFBhZ2VXaXRoUm9vdFRhZ3MoZGF0YSwgZ3VpZCkge1xyXG4gICAgY29uc3QgcHB0Rm9ybWF0cyA9IFtcInBwdFwiLCBcInBwdHhcIiwgXCJwcHRtXCIsIFwicHBzXCIsIFwicHBzeFwiLCBcInBwc21cIiwgXCJwb3RcIiwgXCJwb3R4XCIsIFwicG90bVwiLCBcIm9kcFwiLCBcIm90cFwiXTtcclxuICAgIGxldCByZXN1bHREYXRhID0gZGF0YTtcclxuXHJcbiAgICBpZiAoIWRhdGEuc3RhcnRzV2l0aChcIjxodG1sPjxoZWFkPlwiKSAmJiAhZGF0YS5lbmRzV2l0aChcIjwvYm9keT48L2h0bWw+XCIpKSB7XHJcbiAgICAgIHJlc3VsdERhdGEgPSBcIjxodG1sPjxoZWFkPlwiICsgZGF0YSArIFwiPC9ib2R5PjwvaHRtbD5cIjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHRoaXMubmV3RmlsZSlcclxuICAgIHtcclxuICAgICAgcmVzdWx0RGF0YSA9IHJlc3VsdERhdGEucmVwbGFjZSgnPGhlYWQ+JywgJzxoZWFkPjxtZXRhIGh0dHAtZXF1aXY9XCJjb250ZW50LXR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCI+PC9oZWFkPjxib2R5PicpO1xyXG4gICAgICBpZiAocHB0Rm9ybWF0cy5pbmNsdWRlcyhndWlkLnNwbGl0KCcuJykucG9wKCkpKVxyXG4gICAgICB7XHJcbiAgICAgICAgcmVzdWx0RGF0YSA9IHJlc3VsdERhdGEucmVwbGFjZSgnPGJvZHk+JywgJzxib2R5PjxkaXYgY2xhc3M9XCJzbGlkZVwiPicpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgXHJcbiAgICAgIHtcclxuICAgICAgICByZXN1bHREYXRhID0gcmVzdWx0RGF0YS5yZXBsYWNlKCc8Ym9keT4nLCAnPGJvZHk+PGRpdiBjbGFzcz1cImRvY3VtZW50TWFpbkNvbnRlbnRcIj4nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVzdWx0RGF0YSA9IHJlc3VsdERhdGEucmVwbGFjZSgnPC9ib2R5PicsICc8L2Rpdj48L2JvZHk+Jyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIFxyXG4gICAge1xyXG4gICAgICAvLyBmb3IgV29yZCBmaWxlc1xyXG4gICAgICByZXN1bHREYXRhID0gcmVzdWx0RGF0YS5yZXBsYWNlKCc8ZGl2IGNsYXNzPVwiZG9jdW1lbnRNYWluQ29udGVudFwiPicsICc8L2hlYWQ+PGJvZHk+PGRpdiBjbGFzcz1cImRvY3VtZW50TWFpbkNvbnRlbnRcIj4nKTtcclxuICAgICAgLy8gZm9yIFByZXNlbnRhdGlvbnMgZmlsZXNcclxuICAgICAgcmVzdWx0RGF0YSA9IHJlc3VsdERhdGEucmVwbGFjZSgnPGRpdiBjbGFzcz1cInNsaWRlXCInLCAnPC9oZWFkPjxib2R5PjxkaXYgY2xhc3M9XCJzbGlkZVwiJyk7XHJcbiAgICAgIC8vIGZvciBFeGNlbCBmaWxlc1xyXG4gICAgICByZXN1bHREYXRhID0gcmVzdWx0RGF0YS5yZXBsYWNlKCc8L3N0eWxlPjx0YWJsZScsICc8L3N0eWxlPjwvaGVhZD48Ym9keT48dGFibGUnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHREYXRhID0gcmVzdWx0RGF0YS5yZXBsYWNlKCc8bWFpbiBjbGFzcz1cImRvY3VtZW50TWFpbkNvbnRlbnRcIj4nLCAnPC9oZWFkPjxib2R5PjxtYWluIGNsYXNzPVwiZG9jdW1lbnRNYWluQ29udGVudFwiPicpO1xyXG4gICAgcmV0dXJuIHJlc3VsdERhdGE7XHJcbiAgfVxyXG5cclxuICBwcmludEZpbGUoKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgaWYodGhpcy5maWxlLnBhZ2VzKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBuZXcgUGFnZU1vZGVsO1xyXG4gICAgICBwYWdlLndpZHRoID0gNTk1O1xyXG4gICAgICBwYWdlLmhlaWdodCA9IDg0MjtcclxuICAgICAgLy8gdXNpbmcgb2YgdGhlIHJlcGxhY2UgaXMgcmVxdWlyZWQgdG8gZml4IGlzc3VlIHdpdGggcGFkZGluZyBmb3IgaW50aXJlIHByaW50IGNvbnRlbnRcclxuICAgICAgcGFnZS5kYXRhID0gdGhpcy50ZXh0QmFja3VwLnJlcGxhY2UoJzwvc3R5bGU+JywgJ2JvZHkgeyBwYWRkaW5nOiA5NnB4OyB9IDwvc3R5bGU+Jyk7XHJcbiAgICAgIGNvbnN0IHByaW50SHRtbCA9IFtwYWdlXTtcclxuICAgICAgdGhpcy5fcmVuZGVyUHJpbnRTZXJ2aWNlLmNoYW5nZVBhZ2VzKHByaW50SHRtbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsb3NlTW9kYWwoJGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5maWxlICYmICRldmVudCkge1xyXG4gICAgICBpZih0aGlzLmlzSUUpIHtcclxuICAgICAgICAkKFwiLmRvY3VtZW50TWFpbkNvbnRlbnRcIikuYXR0cihcImNvbnRlbnRFZGl0YWJsZVwiLCBcInRydWVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5maWxlLnBhZ2VzWzBdLmVkaXRhYmxlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19