(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js":
/*!****************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: AddDynamicComponentService, Api, BackFormattingService, BrowseFilesModalComponent, ButtonComponent, ColorPickerComponent, CommonComponentsModule, CommonModals, ConfigService, DisabledCursorDirective, DndDirective, DocumentComponent, DropDownComponent, DropDownItemComponent, DropDownItemsComponent, DropDownToggleComponent, EditHtmlService, EditorDirective, ErrorInterceptorService, ErrorModalComponent, ExceptionMessageService, FileCredentials, FileDescription, FileModel, FileService, FileUtil, Formatting, FormattingDirective, FormattingService, HighlightSearchPipe, HostDynamicDirective, HostingDynamicComponentService, HttpError, InitStateComponent, LeftSideBarComponent, LoadingMaskComponent, LoadingMaskInterceptorService, LoadingMaskService, LogoComponent, ModalComponent, ModalService, NavigateService, OnCloseService, PageComponent, PageModel, PagePreloadService, PasswordRequiredComponent, PasswordService, RenderPrintDirective, RenderPrintService, RotatedPage, RotationDirective, SanitizeHtmlPipe, SanitizeResourceHtmlPipe, SanitizeStylePipe, SaveFile, ScrollableDirective, SearchComponent, SearchService, SearchableDirective, SelectComponent, SelectionService, SidePanelComponent, SuccessModalComponent, TabActivatorService, TabComponent, TabbedToolbarsComponent, TooltipComponent, TopToolbarComponent, UploadFileZoneComponent, UploadFilesService, Utils, ViewportService, WindowService, ZoomDirective, ZoomService, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDynamicComponentService", function() { return AddDynamicComponentService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackFormattingService", function() { return BackFormattingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseFilesModalComponent", function() { return BrowseFilesModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return ColorPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponentsModule", function() { return CommonComponentsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonModals", function() { return CommonModals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabledCursorDirective", function() { return DisabledCursorDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DndDirective", function() { return DndDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownComponent", function() { return DropDownComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownItemComponent", function() { return DropDownItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownItemsComponent", function() { return DropDownItemsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownToggleComponent", function() { return DropDownToggleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditHtmlService", function() { return EditHtmlService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorDirective", function() { return EditorDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorService", function() { return ErrorInterceptorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModalComponent", function() { return ErrorModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionMessageService", function() { return ExceptionMessageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileCredentials", function() { return FileCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDescription", function() { return FileDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileModel", function() { return FileModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUtil", function() { return FileUtil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formatting", function() { return Formatting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattingDirective", function() { return FormattingDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattingService", function() { return FormattingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightSearchPipe", function() { return HighlightSearchPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostDynamicDirective", function() { return HostDynamicDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostingDynamicComponentService", function() { return HostingDynamicComponentService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return HttpError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitStateComponent", function() { return InitStateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSideBarComponent", function() { return LeftSideBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingMaskComponent", function() { return LoadingMaskComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingMaskInterceptorService", function() { return LoadingMaskInterceptorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingMaskService", function() { return LoadingMaskService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigateService", function() { return NavigateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnCloseService", function() { return OnCloseService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageModel", function() { return PageModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagePreloadService", function() { return PagePreloadService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordRequiredComponent", function() { return PasswordRequiredComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordService", function() { return PasswordService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPrintDirective", function() { return RenderPrintDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPrintService", function() { return RenderPrintService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotatedPage", function() { return RotatedPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotationDirective", function() { return RotationDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtmlPipe", function() { return SanitizeHtmlPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeResourceHtmlPipe", function() { return SanitizeResourceHtmlPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeStylePipe", function() { return SanitizeStylePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveFile", function() { return SaveFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollableDirective", function() { return ScrollableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchableDirective", function() { return SearchableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionService", function() { return SelectionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidePanelComponent", function() { return SidePanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessModalComponent", function() { return SuccessModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabActivatorService", function() { return TabActivatorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabbedToolbarsComponent", function() { return TabbedToolbarsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopToolbarComponent", function() { return TopToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileZoneComponent", function() { return UploadFileZoneComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFilesService", function() { return UploadFilesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportService", function() { return ViewportService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomDirective", function() { return ZoomDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomService", function() { return ZoomService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TabsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return TooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ResizingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "../../node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "../../node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! hammerjs */ "../../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-click-outside */ "../../node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_13__);















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TopToolbarComponent = /** @class */ (function () {
    function TopToolbarComponent() {
    }
    TopToolbarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-top-toolbar',
                    template: "<div class=\"top-toolbar\">\n  <div id=\"tools\" class=\"tools\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: [".top-toolbar{width:100%;height:60px;z-index:999;display:flex;align-items:center}.tools{width:100%;height:100%;display:flex;align-items:center}@media (max-width:1037px){.top-toolbar{height:60px}.tools{height:100%;overflow-x:auto;overflow-scrolling:touch;display:flex;align-items:center;transition:.3s ease-in-out;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.tools::-webkit-scrollbar{width:0;height:0;background-color:#3e4e5a}}"]
                }] }
    ];
    /** @nocollapse */
    TopToolbarComponent.ctorParameters = function () { return []; };
    return TopToolbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SidePanelComponent = /** @class */ (function () {
    function SidePanelComponent() {
        this.hideSidePanel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.openSidePanel = /**
     * @return {?}
     */
    function () {
        this.hideSidePanel.emit(true);
    };
    SidePanelComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-side-panel',
                    template: "<div class=\"gd-side-panel-wrapper\">\n  <div class=\"gd-side-panel-header\">\n    <fa-icon class=\"fas fa-info-circle icon\" [icon]=\"['fas',icon]\"></fa-icon>\n    <div class=\"title\">{{title}}</div>\n    <div class=\"close\">\n      <gd-button class=\"fas fa-times\" [icon]=\"'times'\" [tooltip]=\"'Close'\" (click)=\"openSidePanel()\"></gd-button>\n    </div>\n  </div>\n  <div class=\"gd-side-panel-body\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: [".gd-side-panel-wrapper{margin-right:0;width:334px;z-index:999;background-color:#fff;transition:margin-right .2s;display:flex;flex-flow:column;height:100vh}.gd-side-panel-wrapper .gd-side-panel-header{height:60px;background-color:#222e35;display:flex;flex-direction:row;flex-wrap:nowrap}.gd-side-panel-wrapper .gd-side-panel-header .icon{font-size:24px;color:#959da5;margin:12px 9px 18px 14px}.gd-side-panel-wrapper .gd-side-panel-header .title{font-size:14px;font-weight:700;color:rgba(237,240,242,.57);margin-top:20px;width:100%}.gd-side-panel-wrapper .gd-side-panel-header .close{font-size:24px!important;margin-top:12px}.gd-side-panel-wrapper .gd-side-panel-body{display:flex;flex-flow:column;overflow:visible;overflow-y:auto;overflow-x:hidden;height:100%}@media (max-width:1037px){.gd-side-panel-wrapper{width:100%;position:absolute;left:0;right:0;top:0;bottom:0}}"]
                }] }
    ];
    /** @nocollapse */
    SidePanelComponent.ctorParameters = function () { return []; };
    SidePanelComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hideSidePanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return SidePanelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.iconOnly = true;
        this.intent = 'default';
        this.disabled = false;
        this.toggle = false;
        this.iconRegular = false;
        this.showToolTip = false;
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.iconButtonClass = /**
     * @return {?}
     */
    function () {
        return this.iconOnly ? 'icon-button' : '';
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.onHovering = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.className += ' active';
        }
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.onUnhovering = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.className = this.className.replace(' active', '');
        }
    };
    ButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-button',
                    template: "<div class=\"button {{intent}} {{iconButtonClass()}}\" [ngClass]=\"toggle ? className + ' gd-edit active' : className\"\n     gdTooltip (showToolTip)=\"showToolTip = $event\" (mouseenter)=\"onHovering()\"\n     (mouseleave)=\"onUnhovering()\" gdDisabledCursor [dis]=\"disabled\">\n  <fa-icon [icon]=\"[iconRegular ? 'far' : 'fas',icon]\" [size]=\"iconSize\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\"></gd-tooltip>\n  <div class=\"text\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: [".icon-button{padding:0!important;margin:0 10px}.button{padding:0 10px;font-size:14px;color:#959da5;cursor:pointer;display:flex;align-items:center;justify-content:center;min-width:37px;height:37px;text-align:center;position:relative;white-space:nowrap}.button.inactive{cursor:not-allowed;opacity:.4}.button.active *{color:#ccd0d4}.button.primary{background-color:#3e4e5a;color:#fff}.button.primary.active{color:#fff;background-color:#688296}.button.brand{background-color:#25c2d4;color:#fff}.button.brand.active{color:#fff;background-color:#688296}.button .text{font-size:13px;padding-left:10px}@media (max-width:1037px){.button{font-size:22px}.arrow-button{margin:5px}}"]
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        iconOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        intent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        iconClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        className: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        iconSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        iconRegular: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    /**
     * @return {?}
     */
    LogoComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    LogoComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-logo',
                    template: "<div id=\"gd-header-logo\" class=\"logo\">\n  <span class=\"text\" [innerHTML]=\"logo\"></span>\n  <fa-icon [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n</div>\n\n",
                    styles: [".logo{background-color:#25c2d4;height:60px;display:flex;align-items:center;justify-content:center}.text{color:#fff;font-size:15px;text-transform:uppercase;margin:0 14px}.icon{display:none;font-size:32px;color:rgba(255,255,255,.5);margin:14px}@media (max-width:1037px){.logo{width:60px;height:60px}.logo .text{display:none}.logo .icon{display:block}}"]
                }] }
    ];
    /** @nocollapse */
    LogoComponent.ctorParameters = function () { return []; };
    LogoComponent.propDecorators = {
        logo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return LogoComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
        this.visibility = 'hidden';
    }
    Object.defineProperty(TooltipComponent.prototype, "show", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.visibility = value ? 'shown' : 'hidden';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TooltipComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-tooltip',
                    template: "<span class=\"tooltip\" [ngClass]=\"visibility\" [innerHTML]=\"text\"></span>\n",
                    styles: [".tooltip{position:absolute;margin-top:37px;width:100px;background-color:#000;color:#fff;text-align:center;border-radius:0;padding:5px 0;z-index:1;margin-left:-66px;font-size:10px;height:11px;line-height:11px}.tooltip.hidden{visibility:hidden}.tooltip.shown{visibility:visible}.shown:after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border:5px solid transparent;border-bottom-color:#000}"]
                }] }
    ];
    /** @nocollapse */
    TooltipComponent.ctorParameters = function () { return []; };
    TooltipComponent.propDecorators = {
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return TooltipComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Api = /** @class */ (function () {
    function Api() {
    }
    Api.VIEWER_APP = '/viewer';
    Api.SIGNATURE_APP = '/signature';
    Api.EDITOR_APP = '/editor';
    Api.COMPARISON_APP = '/comparison';
    Api.CONVERSION_APP = '/conversion';
    Api.DEFAULT_API_ENDPOINT = window.location.href;
    Api.LOAD_FILE_TREE = '/loadFileTree';
    Api.LOAD_CONFIG = '/loadConfig';
    Api.LOAD_DOCUMENT_DESCRIPTION = '/loadDocumentDescription';
    Api.LOAD_DOCUMENT_PAGE = '/loadDocumentPage';
    Api.ROTATE_DOCUMENT_PAGE = '/rotateDocumentPages';
    Api.UPLOAD_DOCUMENTS = '/uploadDocument';
    Api.DOWNLOAD_DOCUMENTS = '/downloadDocument';
    Api.LOAD_PRINT = '/loadPrint';
    Api.LOAD_PRINT_PDF = '/printPdf';
    Api.LOAD_THUMBNAILS = '/loadThumbnails';
    Api.LOAD_FORMATS = '/loadFormats';
    Api.SAVE_FILE = '/saveFile';
    Api.COMPARE_FILES = '/compare';
    Api.CONVERT_FILE = '/convert';
    Api.DELETE_SIGNATURE_FILE = '/deleteSignatureFile';
    Api.SAVE_OPTICAL_CODE = '/saveOpticalCode';
    Api.SAVE_TEXT = '/saveText';
    Api.SAVE_IMAGE = '/saveImage';
    Api.SAVE_STAMP = '/saveStamp';
    Api.SIGN = '/sign';
    Api.DOWNLOAD_SIGNED = '/downloadSigned';
    Api.LOAD_SIGNATURE_IMAGE = '/loadSignatureImage';
    Api.httpOptionsJson = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
            'Content-Type': 'application/json',
        })
    };
    Api.httpOptionsJsonResponseTypeBlob = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
            'Content-Type': 'application/json',
        }),
        responseType: (/** @type {?} */ ('blob'))
    };
    return Api;
}());
var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.apiEndpoint = Api.DEFAULT_API_ENDPOINT;
    }
    Object.defineProperty(ConfigService.prototype, "apiEndpoint", {
        get: /**
         * @return {?}
         */
        function () {
            return this._apiEndpoint;
        },
        set: /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            this._apiEndpoint = url && url.trim().endsWith('/') ? url.substring(0, url.length - 1) : url;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} app
     * @return {?}
     */
    ConfigService.prototype.getConfigEndpoint = /**
     * @param {?} app
     * @return {?}
     */
    function (app) {
        return (this.apiEndpoint.endsWith(app) ? this.apiEndpoint : this.apiEndpoint + app) + Api.LOAD_CONFIG;
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getViewerApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.endsWith(Api.VIEWER_APP) ? this._apiEndpoint : this._apiEndpoint + Api.VIEWER_APP;
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getEditorApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.trim().endsWith(Api.EDITOR_APP) ? this._apiEndpoint : this._apiEndpoint + Api.EDITOR_APP;
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getComparisonApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.trim().endsWith(Api.COMPARISON_APP) ? this._apiEndpoint : this._apiEndpoint + Api.COMPARISON_APP;
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getConversionApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.trim().endsWith(Api.CONVERSION_APP) ? this._apiEndpoint : this._apiEndpoint + Api.CONVERSION_APP;
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getSignatureApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.endsWith(Api.SIGNATURE_APP) ? this._apiEndpoint : this._apiEndpoint + Api.SIGNATURE_APP;
    };
    ConfigService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return []; };
    return ConfigService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CommonModals = /** @class */ (function () {
    function CommonModals() {
    }
    CommonModals.PasswordRequired = "gd-password-required";
    CommonModals.ErrorMessage = "gd-error-message";
    CommonModals.BrowseFiles = "gd-browse-files";
    CommonModals.CreateDocument = "gd-create-document";
    CommonModals.OperationSuccess = "gd-success-modal";
    CommonModals.DrawHandSignature = "gd-draw-hand-signature";
    CommonModals.DrawStampSignature = "gd-draw-stamp-signature";
    return CommonModals;
}());
var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    /**
     * @param {?} modal
     * @return {?}
     */
    ModalService.prototype.add = /**
     * @param {?} modal
     * @return {?}
     */
    function (modal) {
        this.modals.push(modal);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ModalService.prototype.remove = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.modals = this.modals.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id !== id; }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ModalService.prototype.open = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var modal = this.modals.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id === id; }))[0];
        if (modal) {
            modal.open();
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ModalService.prototype.close = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var modal = this.modals.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id === id; }))[0];
        if (modal) {
            modal.close();
        }
    };
    return ModalService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.visible = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visibility = false;
        this.element = el.nativeElement;
    }
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        document.body.appendChild(this.element);
        this.modalService.add(this);
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.visibility = true;
        this.visible.emit(true);
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        event.preventDefault();
        event.stopPropagation();
        this.visibility = false;
        this.visible.emit(false);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ModalComponent.prototype.onClose = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.stopPropagation();
        if ($event && $event.target && ((/** @type {?} */ ($event.target))).id === 'modalDialog') {
            this.close();
        }
    };
    ModalComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-modal',
                    template: "<div class=\"gd-modal fade\" id=\"modalDialog\" (click)=\"onClose($event);\" *ngIf=\"visibility\">\n</div>\n<div class=\"gd-modal-dialog\" *ngIf=\"visibility\">\n  <div class=\"gd-modal-content\" id=\"gd-modal-content\">\n\n    <div class=\"gd-modal-header\">\n      <div class=\"gd-modal-close\" (click)=\"close();\"><span>&times;</span></div>\n      <h4 class=\"gd-modal-title\">{{title}}</h4>\n    </div>\n\n    <div class=\"gd-modal-body\">\n      <ng-content></ng-content>\n    </div>\n\n    <div class=\"gd-modal-footer\">\n\n    </div>\n  </div>\n</div>\n\n\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.gd-modal{overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0;background-color:rgba(0,0,0,.5)}.gd-modal-dialog{box-shadow:#0005 0 0 10px;position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:1051}.gd-modal-content{background-color:#fff;height:100%;display:flex;flex-direction:column}.gd-modal-header{height:60px;padding:0 12px 0 24px;background-color:#3e4e5a}.gd-modal-close{position:absolute;right:12px;top:12px;cursor:pointer;color:#fff;width:37px;height:37px;text-align:center}.gd-modal-close span{font-size:18px;font-weight:900;height:19px;width:10px;line-height:36px}.gd-modal-title{font-size:16px;font-weight:400;padding-top:17px;padding-bottom:22px;margin:0;color:#fff}.gd-modal-body{background-color:#fff;overflow:hidden;overflow-y:auto;height:calc(100% - 75px)}.gd-modal-footer{height:auto}.gd-modal-footer>.btn{float:right;margin:20px 15px;padding:10px 20px;cursor:pointer;font-size:12px}@media (max-width:1037px){.gd-modal-dialog{width:100%;height:100%}.gd-modal-body{height:100%}}"]
                }] }
    ];
    /** @nocollapse */
    ModalComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    ModalComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ModalComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageModel = /** @class */ (function () {
    function PageModel() {
    }
    return PageModel;
}());
var RotatedPage = /** @class */ (function () {
    function RotatedPage() {
    }
    return RotatedPage;
}());
var FileCredentials = /** @class */ (function () {
    function FileCredentials(guid, password) {
        this.guid = guid;
        this.password = password;
    }
    return FileCredentials;
}());
var SaveFile = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(SaveFile, _super);
    function SaveFile(guid, password, content) {
        var _this = _super.call(this, guid, password) || this;
        _this.content = content;
        return _this;
    }
    return SaveFile;
}(FileCredentials));
var FileDescription = /** @class */ (function () {
    function FileDescription() {
        this.printAllowed = true;
    }
    return FileDescription;
}());
var FileModel = /** @class */ (function () {
    function FileModel() {
    }
    return FileModel;
}());
var HttpError = /** @class */ (function () {
    function HttpError() {
    }
    HttpError.BadRequest = 400;
    HttpError.Unauthorized = 401;
    HttpError.Forbidden = 403;
    HttpError.NotFound = 404;
    HttpError.TimeOut = 408;
    HttpError.Conflict = 409;
    HttpError.InternalServerError = 500;
    return HttpError;
}());
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    Utils.getMousePosition = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var mouse = {
            x: 0,
            y: 0
        };
        /** @type {?} */
        var wEvent = (/** @type {?} */ (window.event));
        /** @type {?} */
        var ev = event || wEvent;
        if (ev.pageX || wEvent.pageX || wEvent.screenX || (ev.touches && ev.touches[0] && ev.touches[0].pageX)) { //Moz
            //Moz
            /** @type {?} */
            var pageX = typeof ev.pageX !== "undefined" && ev.pageX !== 0 ? ev.pageX : wEvent.pageX;
            /** @type {?} */
            var pageY = typeof ev.pageY !== "undefined" && ev.pageY !== 0 ? ev.pageY : wEvent.pageY;
            /** @type {?} */
            var screenX_1 = typeof wEvent.screenX !== "undefined" && wEvent.screenY !== 0;
            /** @type {?} */
            var screenY_1 = typeof wEvent.screenY !== "undefined" && wEvent.screenY !== 0;
            mouse.x = pageX ? pageX : (screenX_1 ? wEvent.screenX : ev.touches[0].pageX);
            mouse.y = pageY ? pageY : (screenY_1 ? wEvent.screenY : ev.touches[0].pageY);
        }
        else if (ev.clientX) { //IE
            mouse.x = ev.clientX + document.body.scrollLeft;
            mouse.y = ev.clientY + document.body.scrollTop;
        }
        return mouse;
    };
    return Utils;
}());
var FileUtil = /** @class */ (function () {
    function FileUtil() {
    }
    /**
     * @param {?} filename
     * @param {?} isDirectory
     * @return {?}
     */
    FileUtil.find = /**
     * @param {?} filename
     * @param {?} isDirectory
     * @return {?}
     */
    function (filename, isDirectory) {
        if (filename && !isDirectory) {
            /** @type {?} */
            var strings = filename.split('.');
            /** @type {?} */
            var name_1 = strings.pop().toLowerCase();
            if (typeof FileUtil.map[name_1] === "undefined") {
                return strings.length > 0 ? FileUtil.map['unknown'] : FileUtil.map['folder'];
            }
            else {
                return FileUtil.map[name_1];
            }
        }
        else {
            return FileUtil.map['folder'];
        }
    };
    FileUtil.map = {
        'folder': { 'format': '', 'icon': 'folder' },
        'pdf': { 'format': 'Portable Document Format', 'icon': 'file-pdf', 'unit': 'pt' },
        'doc': { 'format': 'Microsoft Word', 'icon': 'file-word', 'unit': 'pt' },
        'docx': { 'format': 'Microsoft Word', 'icon': 'file-word', 'unit': 'pt' },
        'docm': { 'format': 'Microsoft Word', 'icon': 'file-word', 'unit': 'pt' },
        'dot': { 'format': 'Microsoft Word', 'icon': 'file-word', 'unit': 'pt' },
        'dotx': { 'format': 'Microsoft Word', 'icon': 'file-word', 'unit': 'pt' },
        'dotm': { 'format': 'Microsoft Word', 'icon': 'file-word', 'unit': 'pt' },
        'xls': { 'format': 'Microsoft Excel', 'icon': 'file-excel', 'unit': 'px' },
        'xlsx': { 'format': 'Microsoft Excel', 'icon': 'file-excel', 'unit': 'px' },
        'xlsm': { 'format': 'Microsoft Excel', 'icon': 'file-excel', 'unit': 'px' },
        'xlsb': { 'format': 'Microsoft Excel', 'icon': 'file-excel', 'unit': 'px' },
        'xls2003': { 'format': 'Microsoft Excel', 'icon': 'file-excel', 'unit': 'px' },
        'xltx': { 'format': 'Microsoft Excel', 'icon': 'file-excel', 'unit': 'px' },
        'xltm': { 'format': 'Microsoft Excel', 'icon': 'file-excel', 'unit': 'px' },
        'ppt': { 'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'pptx': { 'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'pps': { 'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'ppsx': { 'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'vsd': { 'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px' },
        'vdx': { 'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px' },
        'vss': { 'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px' },
        'vsx': { 'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px' },
        'vst': { 'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px' },
        'vtx': { 'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px' },
        'vsdx': { 'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px' },
        'vdw': { 'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px' },
        'vstx': { 'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px' },
        'vssx': { 'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px' },
        'mpp': { 'format': 'Microsoft Project', 'icon': 'file-alt', 'unit': 'pt' },
        'mpt': { 'format': 'Microsoft Project', 'icon': 'file-alt', 'unit': 'pt' },
        'msg': { 'format': 'Microsoft Outlook', 'icon': 'file-alt', 'unit': 'pt' },
        'eml': { 'format': 'Microsoft Outlook', 'icon': 'file-alt', 'unit': 'pt' },
        'emlx': { 'format': 'Microsoft Outlook', 'icon': 'file-alt', 'unit': 'pt' },
        'one': { 'format': 'Microsoft OneNote', 'icon': 'file-word', 'unit': 'pt' },
        'odt': { 'format': 'Open Document Text', 'icon': 'file-word', 'unit': 'pt' },
        'ott': { 'format': 'Open Document Text Template', 'icon': 'file-word', 'unit': 'pt' },
        'ods': { 'format': 'Open Document Spreadsheet', 'icon': 'file-excel', 'unit': 'px' },
        'odp': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'otp': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'ots': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'potx': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'potm': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'pptm': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'ppsm': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'rtf': { 'format': 'Rich Text Format', 'icon': 'file-alt', 'unit': 'pt' },
        'txt': { 'format': 'Plain Text File', 'icon': 'file-alt', 'unit': 'pt' },
        'csv': { 'format': 'Comma-Separated Values', 'icon': 'file-excel', 'unit': 'px' },
        'html': { 'format': 'HyperText Markup Language', 'icon': 'file-word', 'unit': 'pt' },
        'mht': { 'format': 'HyperText Markup Language', 'icon': 'file-word', 'unit': 'pt' },
        'mhtml': { 'format': 'HyperText Markup Language', 'icon': 'file-word', 'unit': 'pt' },
        'xml': { 'format': 'Extensible Markup Language', 'icon': 'file-word', 'unit': 'pt' },
        'xps': { 'format': 'XML Paper Specification', 'icon': 'file-word', 'unit': 'pt' },
        'dxf': { 'format': 'AutoCAD Drawing File Format', 'icon': 'file-image', 'unit': 'px' },
        'dwg': { 'format': 'AutoCAD Drawing File Format', 'icon': 'file-image', 'unit': 'px' },
        'bmp': { 'format': 'Bitmap Picture', 'icon': 'file-image', 'unit': 'px' },
        'gif': { 'format': 'Graphics Interchange Format', 'icon': 'file-image', 'unit': 'px' },
        'jpg': { 'format': 'Joint Photographic Experts Group', 'icon': 'file-image', 'unit': 'px' },
        'jpe': { 'format': 'Joint Photographic Experts Group', 'icon': 'file-image', 'unit': 'px' },
        'jpeg': { 'format': 'Joint Photographic Experts Group', 'icon': 'file-image', 'unit': 'px' },
        'jfif': { 'format': 'Joint Photographic Experts Group', 'icon': 'file-image', 'unit': 'px' },
        'png': { 'format': 'Portable Network Graphics', 'icon': 'file-image', 'unit': 'px' },
        'tiff': { 'format': 'Tagged Image File Format', 'icon': 'file-image', 'unit': 'px' },
        'tif': { 'format': 'Tagged Image File Format', 'icon': 'file-image', 'unit': 'px' },
        'psd': { 'format': 'Tagged Image File Format', 'icon': 'file-image', 'unit': 'px' },
        'svg': { 'format': 'Tagged Image File Format', 'icon': 'file-image', 'unit': 'px' },
        'jp2': { 'format': 'Tagged Image File Format', 'icon': 'file-image', 'unit': 'px' },
        'epub': { 'format': 'Electronic Publication', 'icon': 'file-pdf', 'unit': 'pt' },
        'ico': { 'format': 'Windows Icon', 'icon': 'file-image', 'unit': 'px' },
        'webp': { 'format': 'Compressed Image', 'icon': 'file-image', 'unit': 'px' },
        'mobi': { 'format': 'Mobipocket eBook', 'icon': 'file-pdf', 'unit': 'pt' },
        'tex': { 'format': 'LaTeX Source Document', 'icon': 'file-pdf', 'unit': 'pt' },
        'djvu': { 'format': 'Multi-Layer Raster Image', 'icon': 'file-alt', 'unit': 'pt' },
        'unknown': { 'format': 'This format is not supported', 'icon': 'file' },
    };
    return FileUtil;
}());
var FileService = /** @class */ (function () {
    function FileService() {
    }
    return FileService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UploadFilesService = /** @class */ (function () {
    function UploadFilesService() {
        var _this = this;
        this._uploadsChange = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            return _this._observer = observer;
        }));
    }
    Object.defineProperty(UploadFilesService.prototype, "uploadsChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._uploadsChange;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} filesList
     * @return {?}
     */
    UploadFilesService.prototype.changeFilesList = /**
     * @param {?} filesList
     * @return {?}
     */
    function (filesList) {
        this._observer.next(filesList);
    };
    return UploadFilesService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $ = jquery__WEBPACK_IMPORTED_MODULE_9__;
/** @type {?} */
var upload_disc = 'Disc';
/** @type {?} */
var upload_url = 'URL';
/** @type {?} */
var uploads_choices = [{ name: upload_disc, icon: 'hdd' }, { name: upload_url, icon: 'link' }];
var BrowseFilesModalComponent = /** @class */ (function () {
    function BrowseFilesModalComponent(_uploadService) {
        this._uploadService = _uploadService;
        this.uploads = uploads_choices;
        this.selectedFileGuid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedDirectory = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.urlForUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showUploadUrl = false;
        this.showUploadFile = false;
    }
    /**
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} size
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.getSize = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        /** @type {?} */
        var mb = size / 1024 / 1024;
        if (mb > 1) {
            return (Math.round(mb * 100) / 100) + ' MB';
        }
        else {
            /** @type {?} */
            var kb = size / 1024;
            if (kb > 1) {
                return (Math.round(kb * 100) / 100) + ' KB';
            }
        }
        return size + ' Bytes';
    };
    /**
     * @param {?} file
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.getFormatName = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return FileUtil.find(file.name, file.directory).format;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.getFormatIcon = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return FileUtil.find(file.name, file.directory).icon;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.choose = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.selectedFile = file;
        if (file.directory || file.isDirectory) {
            this.selectedDirectory.emit(file.name);
        }
        else {
            this.selectedFileGuid.emit(file.guid);
        }
    };
    /**
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.goUp = /**
     * @return {?}
     */
    function () {
        if (this.selectedFile) {
            /** @type {?} */
            var guid = this.selectedFile.guid;
            if (guid.length > 0 && guid.indexOf('/') === -1) {
                guid = '';
            }
            else {
                guid = guid.replace(/\/[^\/]+\/?$/, '');
            }
            this.selectedDirectory.emit(guid);
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.selectUpload = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (upload_url === $event) {
            this.showUploadUrl = true;
        }
        else {
            this.showUploadUrl = false;
            $("#gd-upload-input").trigger('click');
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.refresh = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event) {
            this.files = null;
            this.selectedDirectory.emit('');
            this.showUploadUrl = false;
            this.selectedFile = null;
        }
        else {
            this.closing.emit(true);
        }
    };
    /**
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.showSpinner = /**
     * @return {?}
     */
    function () {
        return !this.files;
    };
    /**
     * @param {?} url
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.uploadUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        if (url) {
            this.urlForUpload.emit(url);
            this.cleanUpload();
        }
    };
    /**
     * @param {?} files
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.handleFileInput = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this._uploadService.changeFilesList(files);
    };
    /**
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.cleanUpload = /**
     * @return {?}
     */
    function () {
        this.showUploadFile = false;
        this.showUploadUrl = false;
    };
    BrowseFilesModalComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-browse-files-modal',
                    template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\n    <div class=\"dnd-wrapper\">\n      <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\n      <span class=\"text\">Drop file here to upload</span>\n    </div>\n  </div>\n  <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n    <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\n            (change)=\"handleFileInput($event.target.files)\">\n    <div class=\"context\">\n      <div class=\"context-actions\">\n        <gd-drop-down>\n          <gd-drop-down-toggle>\n            <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\n              Upload file\n            </gd-button>\n          </gd-drop-down-toggle>\n          <gd-drop-down-items>\n            <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\n              <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\n              <div class=\"text\">{{item.name}}</div>\n            </gd-drop-down-item>\n          </gd-drop-down-items>\n        </gd-drop-down>\n      </div>\n      <div class=\"context-panel\" *ngIf=\"showUploadUrl\">\n        <div class=\"upload-url\">\n          <input class=\"url-input\" placeholder=\"http://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n          <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"list-files-header\" [ngClass]=\"{'upload-url': showUploadUrl}\">\n    <div class=\"header-name\">FILE</div>\n    <div class=\"header-size\">SIZE</div>\n  </div>\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-body\">\n        <div class=\"go-up\" (click)=\"goUp()\">\n            <div class=\"go-up-icon\">\n                <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n            </div>\n            <div class=\"go-up-dots\">..</div>\n        </div>\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n          <div class=\"file-description\">\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n            <div class=\"file-name-format\">\n              <div class=\"file-name\">{{file?.name}}</div>\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\n            </div>\n          </div>\n          <div class=\"file-size\">\n            {{getSize(file?.size)}}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
                    styles: [".gd-modal-table{width:100%;text-align:left}#gd-browse-section{width:1036px;height:561px;overflow-y:auto}.list-files-header{height:60px;color:#6e6e6e;font-size:13px;font-weight:700;background-color:#f4f4f4;margin-top:24px}.list-files-header.upload-url{margin-top:20px}.header-name{padding-left:24px;width:90%;line-height:60px}.header-size{padding-right:27px;line-height:60px}.file-size,.header-size{width:10%;color:#777;text-align:right}.file-description{display:flex;width:90%;padding:18px 0 18px 24px;font-size:14px;flex:1;cursor:pointer;overflow:hidden}.file-size{font-size:12px;padding:0 27px 0 0;width:10%;line-height:79px}.list-files-header,.list-files-lines{display:flex;width:100%;justify-content:space-between}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{display:flex;font-size:26px;cursor:pointer;color:#4b566c;height:79px}.go-up-dots{margin-left:20px;margin-top:22px;font-size:16px}.go-up-icon{display:block;padding:18px 0 18px 24px}.upload-panel{display:flex;position:relative;width:100%}.upload-panel .context{display:flex;flex-direction:column;width:100%;margin-left:24px;margin-top:24px;margin-right:24px}.upload-panel .context .context-actions{display:flex;flex-direction:row;width:100%}.upload-panel .context .context-actions :last-child{margin-right:0}.upload-panel .context .context-actions ::ng-deep .button{height:37px;width:96px;padding:0;justify-content:center}.upload-panel .context .context-actions ::ng-deep .button ::ng-deep .text{font-size:10px}.upload-panel .context .context-panel{display:flex;flex-direction:row;width:100%;margin-top:20px}.upload-panel .context .context-panel .upload-url{display:flex;flex-direction:row;width:100%}.upload-panel .context .context-panel .upload-url .url-input{width:100%;height:27px;border:1px solid #25c2d4;font-size:14px;padding-left:6px}.upload-panel .context .context-panel .upload-url .url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.upload-panel .context .context-panel .upload-url .url-check .ng-fa-icon{display:block;padding:8px}.upload-panel gd-drop-down{margin-right:10px}.file-description .ng-fa-icon.fa-file-pdf{color:#e04e4e}.file-description .ng-fa-icon.fa-file-word{color:#539cf0}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29e1e}.file-description .ng-fa-icon.fa-file-excel{color:#7cbc46}.file-description .ng-fa-icon.fa-file-image{color:#c375ed}.file-description .ng-fa-icon.fa-file,.file-description .ng-fa-icon.fa-file-alt,.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#4b566c}.file-description .ng-fa-icon{font-size:32px}.file-name{font-size:16px;color:#6e6e6e;overflow:hidden;text-overflow:ellipsis}.file-name-format{padding-left:11px;overflow:hidden}.file-format{font-size:10px;padding-top:3px;color:#acacac}.go-up,.list-files-lines{border-bottom:1px solid #e7e7e7}.list-files-lines:hover{background-color:#e5e5e5}.gd-dnd-wrap{background-color:#fff;cursor:default;position:absolute;width:100%;height:calc(100% - 60px);background:rgba(255,255,255,.7);z-index:1;display:flex;justify-content:center;align-items:center}.dnd-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;top:259px;position:absolute}.dnd-wrapper .text{color:#6e6e6e;font-size:14px}.dnd-wrapper .icon{display:flex;width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}@media (max-width:1037px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}#gd-browse-section{width:100%;height:calc(100% - 146px)}}"]
                }] }
    ];
    /** @nocollapse */
    BrowseFilesModalComponent.ctorParameters = function () { return [
        { type: UploadFilesService }
    ]; };
    BrowseFilesModalComponent.propDecorators = {
        files: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        uploadConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectedFileGuid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        selectedDirectory: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        urlForUpload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        closing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return BrowseFilesModalComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ZoomService = /** @class */ (function () {
    function ZoomService() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._zoomChange = this._observer.asObservable();
    }
    Object.defineProperty(ZoomService.prototype, "zoom", {
        get: /**
         * @return {?}
         */
        function () {
            return this._zoom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomService.prototype, "zoomChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._zoomChange;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} zoom
     * @return {?}
     */
    ZoomService.prototype.changeZoom = /**
     * @param {?} zoom
     * @return {?}
     */
    function (zoom) {
        this._zoom = zoom;
        this._observer.next(zoom);
    };
    /**
     * @private
     * @param {?} val
     * @param {?} name
     * @param {?=} sep
     * @return {?}
     */
    ZoomService.prototype.createZoomOption = /**
     * @private
     * @param {?} val
     * @param {?} name
     * @param {?=} sep
     * @return {?}
     */
    function (val, name, sep) {
        if (sep === void 0) { sep = false; }
        return { value: val, name: name, separator: sep };
    };
    /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    ZoomService.prototype.zoomOptions = /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (width, height) {
        return [this.createZoomOption(25, '25%'),
            this.createZoomOption(50, '50%'),
            this.createZoomOption(100, '100%'),
            this.createZoomOption(150, '150%'),
            this.createZoomOption(200, '200%'),
            this.createZoomOption(300, '300%'),
            this.createZoomOption(0, '', true),
            this.createZoomOption(width, 'Fit Width'),
            this.createZoomOption(height, 'Fit Height')];
    };
    return ZoomService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MOBILE_MAX_WIDTH = 425;
/** @type {?} */
var TABLET_MAX_WIDTH = 1024;
var WindowService = /** @class */ (function () {
    function WindowService() {
        var _this = this;
        this.resizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this._resize$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(window, 'resize')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])({ target: { innerWidth: window.innerWidth, innerHeight: window.innerHeight } }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.resizeSubject.next((/** @type {?} */ (event.target)));
            _this.width = ((/** @type {?} */ (event.target))).innerWidth;
            _this.height = ((/** @type {?} */ (event.target))).innerHeight;
        })));
        this._resize$.subscribe();
    }
    Object.defineProperty(WindowService.prototype, "onResize", {
        get: /**
         * @return {?}
         */
        function () {
            return this.resizeSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    WindowService.prototype.isMobile = /**
     * @return {?}
     */
    function () {
        return this.width <= MOBILE_MAX_WIDTH;
    };
    /**
     * @return {?}
     */
    WindowService.prototype.isTablet = /**
     * @return {?}
     */
    function () {
        return this.width <= TABLET_MAX_WIDTH;
    };
    /**
     * @return {?}
     */
    WindowService.prototype.isDesktop = /**
     * @return {?}
     */
    function () {
        return !this.isMobile() && !this.isTablet();
    };
    /**
     * @return {?}
     */
    WindowService.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        return this.width;
    };
    /**
     * @return {?}
     */
    WindowService.prototype.getHeight = /**
     * @return {?}
     */
    function () {
        return this.height;
    };
    /**
     * @return {?}
     */
    WindowService.prototype.isEdge = /**
     * @return {?}
     */
    function () {
        return window.navigator.userAgent.toLowerCase().indexOf('edge') > -1;
    };
    /**
     * @return {?}
     */
    WindowService.prototype.isFirefox = /**
     * @return {?}
     */
    function () {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    };
    return WindowService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $$1 = jquery__WEBPACK_IMPORTED_MODULE_9__;
var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(_elementRef, _zoomService, _windowService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this.wait = false;
        this.docWidth = null;
        this.docHeight = null;
        this.viewportWidth = null;
        this.viewportHeight = null;
        this.scale = null;
        this.lastScale = null;
        this.container = null;
        this.doc = null;
        this.x = 0;
        this.lastX = 0;
        this.y = 0;
        this.lastY = 0;
        this.pinchCenter = null;
        this.pinchCenterOffset = null;
        this.curWidth = 0;
        this.curHeight = 0;
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.zoom = val;
        }));
        this.isDesktop = _windowService.isDesktop();
    }
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var panzoom = this._elementRef.nativeElement.children.item(0).children.item(0);
        ((/** @type {?} */ (panzoom))).style.transform = '';
        // TODO: this intersects with zooming by zoom directive, but still needed
        // for flush previous settings before opening another file
        //this._zoomService.changeZoom(100);
        //this.scale = 1;
    };
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // For current iteration we take .panzoom as a document
        this.doc = this._elementRef.nativeElement.children.item(0).children.item(0);
        // For current iteration we take .gd-document as a container
        this.container = this._elementRef.nativeElement;
        this.docWidth = this.doc.clientWidth;
        this.docHeight = this.doc.clientHeight;
        this.viewportWidth = this.doc.offsetWidth;
        // For cases where we already have zoom defined we should include it
        this.scale = (this.viewportWidth / this.docWidth) * this._zoomService.zoom / 100;
        this.lastScale = this.scale;
        this.viewportHeight = this.container.offsetHeight;
        this.curWidth = this.docWidth * this.scale;
        this.curHeight = this.docHeight * this.scale;
        /** @type {?} */
        var hammer = new hammerjs__WEBPACK_IMPORTED_MODULE_10__(this.container);
    };
    // TODO: this temporary crutch for Excel files should be documented
    // TODO: this temporary crutch for Excel files should be documented
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ifExcel = 
    // TODO: this temporary crutch for Excel files should be documented
    /**
     * @return {?}
     */
    function () {
        return FileUtil.find(this.file.guid, false).format === "Microsoft Excel";
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DocumentComponent.prototype.getDimensionWithUnit = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value + (this.mode ? FileUtil.find(this.file.guid, false).unit : 'px');
    };
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var elementNodeListOf = this._elementRef.nativeElement.querySelectorAll('.gd-wrapper');
        /** @type {?} */
        var element = elementNodeListOf.item(0);
        if (element) {
            $$1(element).trigger('focus');
        }
    };
    /**
     * @param {?} el
     * @return {?}
     */
    DocumentComponent.prototype.absolutePosition = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var x = 0;
        /** @type {?} */
        var y = 0;
        while (el !== null) {
            x += el.offsetLeft;
            y += el.offsetTop;
            el = el.offsetParent;
        }
        return { x: x, y: y };
    };
    /**
     * @param {?} pos
     * @param {?} viewportDim
     * @param {?} docDim
     * @return {?}
     */
    DocumentComponent.prototype.restrictRawPos = /**
     * @param {?} pos
     * @param {?} viewportDim
     * @param {?} docDim
     * @return {?}
     */
    function (pos, viewportDim, docDim) {
        if (pos < viewportDim / this.scale - docDim) { // too far left/up?
            pos = viewportDim / this.scale - docDim;
        }
        else if (pos > 0) { // too far right/down?
            pos = 0;
        }
        return pos;
    };
    /**
     * @return {?}
     */
    DocumentComponent.prototype.updateLastPos = /**
     * @return {?}
     */
    function () {
        this.lastX = this.x;
        this.lastY = this.y;
    };
    /**
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    DocumentComponent.prototype.translate = /**
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    function (deltaX, deltaY) {
        // We restrict to the min of the viewport width/height or current width/height as the
        // current width/height may be smaller than the viewport width/height
        /** @type {?} */
        var newX = this.restrictRawPos(this.lastX + deltaX / this.scale, Math.min(this.viewportWidth, this.curWidth), this.docWidth);
        this.x = newX;
        // TODO: value here and in the similar line below changes to positive to take any effect
        this.container.scrollLeft = -Math.ceil(newX * this.scale);
        /** @type {?} */
        var newY = this.restrictRawPos(this.lastY + deltaY / this.scale, Math.min(this.viewportHeight, this.curHeight), this.docHeight);
        this.y = newY;
        this.container.scrollTop = -Math.ceil(newY * this.scale);
        this.doc.style.transform = 'scale(' + this.scale + ')';
    };
    /**
     * @param {?} scaleBy
     * @return {?}
     */
    DocumentComponent.prototype.startZoom = /**
     * @param {?} scaleBy
     * @return {?}
     */
    function (scaleBy) {
        this.scale = this.lastScale * scaleBy;
        this.curWidth = this.docWidth * this.scale;
        this.curHeight = this.docHeight * this.scale;
        // Adjust margins to make sure that we aren't out of bounds
        this.translate(0, 0);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DocumentComponent.prototype.rawCenter = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var pos = this.absolutePosition(this.container);
        // We need to account for the scroll position
        /** @type {?} */
        var scrollLeft = window.pageXOffset ? window.pageXOffset : document.body.scrollLeft;
        /** @type {?} */
        var scrollTop = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;
        /** @type {?} */
        var zoomX = -this.x + ($event.center.x - pos.x + scrollLeft) / this.scale;
        /** @type {?} */
        var zoomY = -this.y + ($event.center.y - pos.y + scrollTop) / this.scale;
        return { x: zoomX, y: zoomY };
    };
    /**
     * @return {?}
     */
    DocumentComponent.prototype.updateLastScale = /**
     * @return {?}
     */
    function () {
        this.lastScale = this.scale;
    };
    /**
     * @param {?} scaleBy
     * @param {?} rawZoomX
     * @param {?} rawZoomY
     * @param {?} doNotUpdateLast
     * @return {?}
     */
    DocumentComponent.prototype.zoomAround = /**
     * @param {?} scaleBy
     * @param {?} rawZoomX
     * @param {?} rawZoomY
     * @param {?} doNotUpdateLast
     * @return {?}
     */
    function (scaleBy, rawZoomX, rawZoomY, doNotUpdateLast) {
        // Zoom
        this.startZoom(scaleBy);
        // New raw center of viewport
        /** @type {?} */
        var rawCenterX = -this.x + Math.min(this.viewportWidth, this.curWidth) / 2 / this.scale;
        /** @type {?} */
        var rawCenterY = -this.y + Math.min(this.viewportHeight, this.curHeight) / 2 / this.scale;
        // Delta
        /** @type {?} */
        var deltaX = (rawCenterX - rawZoomX) * this.scale;
        /** @type {?} */
        var deltaY = (rawCenterY - rawZoomY) * this.scale;
        // Translate back to zoom center
        this.translate(deltaX, deltaY);
        if (!doNotUpdateLast) {
            this.updateLastScale();
            this.updateLastPos();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DocumentComponent.prototype.onPinch = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.pinchCenter === null) {
            this.pinchCenter = this.rawCenter($event);
            /** @type {?} */
            var offsetX = this.pinchCenter.x * this.scale - (-this.x * this.scale + Math.min(this.viewportWidth, this.curWidth) / 2);
            /** @type {?} */
            var offsetY = this.pinchCenter.y * this.scale - (-this.y * this.scale + Math.min(this.viewportHeight, this.curHeight) / 2);
            this.pinchCenterOffset = { x: offsetX, y: offsetY };
        }
        /** @type {?} */
        var newScale = this.scale * $event.scale;
        /** @type {?} */
        var zoomX = this.pinchCenter.x * newScale - this.pinchCenterOffset.x;
        /** @type {?} */
        var zoomY = this.pinchCenter.y * newScale - this.pinchCenterOffset.y;
        /** @type {?} */
        var zoomCenter = { x: zoomX / newScale, y: zoomY / newScale };
        this.zoomAround($event.scale, zoomCenter.x, zoomCenter.y, true);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DocumentComponent.prototype.onPinchEnd = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.updateLastScale();
        this.updateLastPos();
        this.pinchCenter = null;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DocumentComponent.prototype.onPan = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        // TODO: looks like native pan works better
        // if (!this.isDesktop) {
        //   this.translate($event.deltaX, $event.deltaY);
        // }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DocumentComponent.prototype.onPanEnd = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        // if (!this.isDesktop) {
        //   this.updateLastPos();
        // }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DocumentComponent.prototype.onDoubleTap = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this.isDesktop) {
            if ($event.tapCount === 2) {
                /** @type {?} */
                var c = this.rawCenter($event);
                this.zoomAround(2, c.x, c.y, false);
            }
        }
    };
    DocumentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-document',
                    template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" (tap)=\"onDoubleTap($event)\" (pinch)=\"onPinch($event)\" \n  (pinchend)=\"onPinchEnd($event)\" (pan)=\"onPan($event)\" (panend)=\"onPanEnd($event)\">\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\n    <div [ngClass]=\"ifExcel() ? 'page excel' : 'page'\" *ngFor=\"let page of file?.pages\"\n         [style.height]=\"getDimensionWithUnit(page.height)\"\n         [style.width]=\"getDimensionWithUnit(page.width)\"\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                    styles: [":host{flex:1;transition:.4s;background-color:#e7e7e7;height:100%;overflow:scroll}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);transition:.3s}.page.excel{overflow:auto}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:flex-start}.panzoom.mobile{overflow:scroll}@media (max-width:1037px){.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
                }] }
    ];
    /** @nocollapse */
    DocumentComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: ZoomService },
        { type: WindowService }
    ]; };
    DocumentComponent.propDecorators = {
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        preloadPageCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return DocumentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageComponent = /** @class */ (function () {
    function PageComponent() {
    }
    /**
     * @return {?}
     */
    PageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isIE = /*@cc_on!@*/  !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
        if (isIE && this.number === 0) {
            this.editable = false;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PageComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
        // which leads to undesired spaces on the top of the docs pages
        this.data = this.data !== null ? this.data.replace(/>\s+</g, '><').replace(/\uFEFF/g, "") : null;
        /** @type {?} */
        var dataImagePngBase64 = 'data:image/png;base64,';
        this.imgData = dataImagePngBase64;
        if (!this.isHtml) {
            this.imgData += this.data;
        }
    };
    PageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-page',
                    template: "<div id=\"page-{{number}}\" gdHostDynamic [ident]=\"number\">\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\" [contentEditable]=\"(editable) ? true : false\"\n      gdEditor [text]=\"data\"></div>\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\n       alt=\"\"\n       *ngIf=\"data && !isHtml\">\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n    &nbsp;Loading... Please wait.\n  </div>\n</div>\n",
                    styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper div{width:100%}.gd-highlight{background-color:#ff0}/deep/ .gd-highlight-select{background-color:#ff9b00}"]
                }] }
    ];
    /** @nocollapse */
    PageComponent.ctorParameters = function () { return []; };
    PageComponent.propDecorators = {
        angle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        number: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isHtml: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return PageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SanitizeHtmlPipe = /** @class */ (function () {
    function SanitizeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    SanitizeHtmlPipe.prototype.transform = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SanitizeHtmlPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'safeHtml' },] }
    ];
    /** @nocollapse */
    SanitizeHtmlPipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"] }
    ]; };
    return SanitizeHtmlPipe;
}());
var SanitizeResourceHtmlPipe = /** @class */ (function () {
    function SanitizeResourceHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    SanitizeResourceHtmlPipe.prototype.transform = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    };
    SanitizeResourceHtmlPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'safeResourceHtml' },] }
    ];
    /** @nocollapse */
    SanitizeResourceHtmlPipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"] }
    ]; };
    return SanitizeResourceHtmlPipe;
}());
var SanitizeStylePipe = /** @class */ (function () {
    function SanitizeStylePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    SanitizeStylePipe.prototype.transform = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        return this.sanitizer.bypassSecurityTrustStyle(html);
    };
    SanitizeStylePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'safeStyle' },] }
    ];
    /** @nocollapse */
    SanitizeStylePipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"] }
    ]; };
    return SanitizeStylePipe;
}());
var HighlightSearchPipe = /** @class */ (function () {
    function HighlightSearchPipe() {
    }
    /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    HighlightSearchPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    function (value, args) {
        if (!args) {
            return value;
        }
        /** @type {?} */
        var re = new RegExp(args, 'gi');
        return value.replace(re, "<span class='gd-highlight'>$&</span>");
    };
    HighlightSearchPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'highlight' },] }
    ];
    return HighlightSearchPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UploadFileZoneComponent = /** @class */ (function () {
    function UploadFileZoneComponent(_uploadService) {
        this._uploadService = _uploadService;
        this.closeUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    UploadFileZoneComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} files
     * @return {?}
     */
    UploadFileZoneComponent.prototype.handleFileInput = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this._uploadService.changeFilesList(files);
        this.onCloseUpload();
    };
    /**
     * @return {?}
     */
    UploadFileZoneComponent.prototype.onCloseUpload = /**
     * @return {?}
     */
    function () {
        this.closeUpload.emit(true);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    UploadFileZoneComponent.prototype.close = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event.target.id === 'gd-dropZone') {
            this.onCloseUpload();
        }
    };
    UploadFileZoneComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-upload-file-zone',
                    template: "<div class=\"gd-drag-n-drop-wrap\" id=\"gd-dropZone\" gdDnd (closing)=\"onCloseUpload()\" (click)=\"close($event)\">\n  <div class=\"gd-drag-n-drop-icon\">\n    <fa-icon [icon]=\"['fas','cloud-download-alt']\" size=\"5x\"></fa-icon>\n  </div>\n  <h2>Drag &amp; Drop your files here</h2>\n  <h4>OR</h4>\n  <div class=\"gd-drag-n-drop-buttons\">\n    <label class=\"btn btn-primary\"> \n      <fa-icon [icon]=\"['fas','file']\"></fa-icon>\n      SELECT FILE\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      </label>\n  </div>\n</div>\n",
                    styles: [".gd-drag-n-drop-wrap{border:2px dashed #ccc;background-color:#f8f8f8;text-align:center;cursor:default;position:absolute;width:-webkit-fill-available;left:1px;display:flex;align-content:center;flex-direction:column;justify-content:center;opacity:.9;z-index:1}.gd-drag-n-drop-wrap h2{color:#959da5;margin:5px 0;font-size:15px;font-weight:300}.gd-drag-n-drop-wrap h4{color:#cacaca;font-weight:300;font-size:12px;margin:10px 0 15px}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-drag-n-drop-buttons i{margin-right:5px}.gd-drag-n-drop-buttons .btn{width:134px;height:35px;margin:0 10px;font-size:12px;font-weight:400}.gd-drag-n-drop-wrap.hover{background:#ddd;border-color:#aaa}"]
                }] }
    ];
    /** @nocollapse */
    UploadFileZoneComponent.ctorParameters = function () { return [
        { type: UploadFilesService }
    ]; };
    UploadFileZoneComponent.propDecorators = {
        closeUpload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return UploadFileZoneComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DndDirective = /** @class */ (function () {
    function DndDirective(_uploadFilesService) {
        this._uploadFilesService = _uploadFilesService;
        this.closing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.opening = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.active = false;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    DndDirective.prototype.onDragOver = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.active = true;
        this.opening.emit(true);
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    DndDirective.prototype.onDragLeave = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.active = false;
        this.closeArea();
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    DndDirective.prototype.onDrop = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        /** @type {?} */
        var files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.active = false;
            this.dropped.emit(true);
            this._uploadFilesService.changeFilesList(files);
            this.closeArea();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DndDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.closeArea();
    };
    /**
     * @private
     * @return {?}
     */
    DndDirective.prototype.closeArea = /**
     * @private
     * @return {?}
     */
    function () {
        this.closing.emit(true);
        this.opening.emit(false);
    };
    DndDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[gdDnd]'
                },] }
    ];
    /** @nocollapse */
    DndDirective.ctorParameters = function () { return [
        { type: UploadFilesService }
    ]; };
    DndDirective.propDecorators = {
        closing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        opening: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }],
        onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragleave', ['$event'],] }],
        onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }]
    };
    return DndDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PagePreloadService = /** @class */ (function () {
    function PagePreloadService() {
        var _this = this;
        this._checkPreload = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            return _this._observer = observer;
        }));
    }
    Object.defineProperty(PagePreloadService.prototype, "checkPreload", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checkPreload;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} page
     * @return {?}
     */
    PagePreloadService.prototype.changeLastPageInView = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        if (this._observer) {
            this._observer.next(page);
        }
    };
    return PagePreloadService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavigateService = /** @class */ (function () {
    function NavigateService(_pagePreloadService) {
        var _this = this;
        this._pagePreloadService = _pagePreloadService;
        this._currentPage = 0;
        this._countPages = 0;
        this._navigate = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            return _this._observer = observer;
        }));
    }
    Object.defineProperty(NavigateService.prototype, "navigate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._navigate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigateService.prototype, "countPages", {
        get: /**
         * @return {?}
         */
        function () {
            return this._countPages;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._countPages = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigateService.prototype, "currentPage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentPage;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._currentPage = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NavigateService.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        if (this._currentPage < this._countPages) {
            this._currentPage++;
            this.navigateTo(this._currentPage);
        }
    };
    /**
     * @return {?}
     */
    NavigateService.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        if (this._currentPage > 1) {
            this._currentPage--;
            this.navigateTo(this._currentPage);
        }
    };
    /**
     * @return {?}
     */
    NavigateService.prototype.toLastPage = /**
     * @return {?}
     */
    function () {
        this._currentPage = this._countPages;
        this.navigateTo(this._currentPage);
    };
    /**
     * @return {?}
     */
    NavigateService.prototype.toFirstPage = /**
     * @return {?}
     */
    function () {
        this._currentPage = 1;
        this.navigateTo(this._currentPage);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    NavigateService.prototype.navigateTo = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.currentPage = page;
        this._pagePreloadService.changeLastPageInView(page);
        this._observer.next(page);
    };
    NavigateService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NavigateService.ctorParameters = function () { return [
        { type: PagePreloadService }
    ]; };
    /** @nocollapse */ NavigateService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NavigateService_Factory() { return new NavigateService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PagePreloadService)); }, token: NavigateService, providedIn: "root" });
    return NavigateService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $$2 = jquery__WEBPACK_IMPORTED_MODULE_9__;
var ViewportService = /** @class */ (function () {
    function ViewportService() {
    }
    /**
     * @param {?} el
     * @param {?=} zoom
     * @param {?=} leftOffset
     * @param {?=} deltaX
     * @return {?}
     */
    ViewportService.prototype.checkInViewport = /**
     * @param {?} el
     * @param {?=} zoom
     * @param {?=} leftOffset
     * @param {?=} deltaX
     * @return {?}
     */
    function (el, zoom, leftOffset, deltaX) {
        if (zoom === void 0) { zoom = 100; }
        if (leftOffset === void 0) { leftOffset = 0; }
        if (deltaX === void 0) { deltaX = 0.5; }
        if (!el) {
            return false;
        }
        /** @type {?} */
        var x = deltaX;
        /** @type {?} */
        var y = 0.5;
        /** @type {?} */
        var win = $$2(window);
        /** @type {?} */
        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft() + leftOffset,
            right: win.scrollLeft() + win.width() - 10,
            bottom: win.scrollTop() + win.height()
        };
        if (isNaN(zoom)) {
            zoom = 100;
        }
        /** @type {?} */
        var zoomN = zoom / 100;
        /** @type {?} */
        var height = $$2(el).outerHeight() * (zoomN);
        /** @type {?} */
        var width = $$2(el).outerWidth() * (zoomN);
        if (!width || !height) {
            return false;
        }
        /** @type {?} */
        var bounds = $$2(el).offset();
        /** @type {?} */
        var right = (bounds.left * (zoomN)) + width;
        /** @type {?} */
        var bottom = (bounds.top * (zoomN)) + height;
        /** @type {?} */
        var visible = (!(viewport.right < (bounds.left * (zoomN)) || viewport.left > right || viewport.bottom < (bounds.top * (zoomN)) || viewport.top > bottom));
        if (!visible) {
            return false;
        }
        /** @type {?} */
        var deltas = {
            top: parseFloat(Math.min(1, (bottom - viewport.top) / height).toFixed(2)),
            bottom: parseFloat(Math.min(1, (viewport.bottom - (bounds.top * (zoomN))) / height).toFixed(2)),
            left: parseFloat(Math.min(1, (right - viewport.left) / width).toFixed(2)),
            right: parseFloat(Math.min(1, (viewport.right - (bounds.left * (zoomN))) / width).toFixed(2))
        };
        return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;
    };
    ViewportService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ViewportService.ctorParameters = function () { return []; };
    /** @nocollapse */ ViewportService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ViewportService_Factory() { return new ViewportService(); }, token: ViewportService, providedIn: "root" });
    return ViewportService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $$3 = jquery__WEBPACK_IMPORTED_MODULE_9__;
var ScrollableDirective = /** @class */ (function () {
    function ScrollableDirective(_elementRef, _navigateService, _pagePreloadService, _zoomService, _windowService, _viewportService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._navigateService = _navigateService;
        this._pagePreloadService = _pagePreloadService;
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this._viewportService = _viewportService;
        this.zoom = 100;
        this.zoom = _zoomService.zoom ? _zoomService.zoom : this.zoom;
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.zoom = val ? val : _this.zoom;
            _this.refresh();
        }));
    }
    /**
     * @return {?}
     */
    ScrollableDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zoom = this._zoomService.zoom ? this._zoomService.zoom : this.zoom;
        this._navigateService.navigate.subscribe(((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.currentPage = value;
            _this.scrollToPage(value);
        })));
        this.refresh();
    };
    /**
     * @return {?}
     */
    ScrollableDirective.prototype.scrolling = /**
     * @return {?}
     */
    function () {
        this.refresh();
    };
    /**
     * @return {?}
     */
    ScrollableDirective.prototype.resizing = /**
     * @return {?}
     */
    function () {
        this.refresh();
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    ScrollableDirective.prototype.scrollToPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        /** @type {?} */
        var el = this._elementRef.nativeElement;
        /** @type {?} */
        var page = this.getPage(pageNumber);
        /** @type {?} */
        var prev = pageNumber > 0 ? this.getPage(pageNumber - 1) : null;
        /** @type {?} */
        var isSameTop = (prev && $$3(prev).offset().top === $$3(page).offset().top);
        if (this._viewportService.checkInViewport(page, this.zoom) && isSameTop) {
            return;
        }
        /** @type {?} */
        var pagesHeight = this.calculateOffset(pageNumber);
        /** @type {?} */
        var options = {
            left: 0,
            top: pagesHeight
        };
        if (el) {
            // using polyfill
            el.scroll(options);
        }
    };
    /**
     * @private
     * @return {?}
     */
    ScrollableDirective.prototype.getChildren = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            // here and in the similar line below we getting the document pages
            return el.children.item(0).children.item(0).children;
        }
    };
    /**
     * @private
     * @param {?} pageNumber
     * @return {?}
     */
    ScrollableDirective.prototype.getPage = /**
     * @private
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        /** @type {?} */
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            return el.children.item(0).children.item(0).children.item(pageNumber - 1);
        }
    };
    /**
     * @private
     * @param {?} pageNumber
     * @return {?}
     */
    ScrollableDirective.prototype.calculateOffset = /**
     * @private
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        /** @type {?} */
        var count = this._windowService.isFirefox() ? 1 : this.countPagesOnWidth();
        /** @type {?} */
        var margin = this._windowService.isDesktop() ? 40 : 10;
        /** @type {?} */
        var pagesHeight = 0;
        for (var i = 1; i < pageNumber / count; i++) {
            /** @type {?} */
            var item = this.getPage(i);
            /** @type {?} */
            var clientHeight = item ? item.clientHeight : 0;
            pagesHeight += clientHeight > 0 ? clientHeight * this.getZoom() + margin : 0;
        }
        return pagesHeight;
    };
    /**
     * @private
     * @return {?}
     */
    ScrollableDirective.prototype.countPagesOnWidth = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pageEl = this.getPage(1);
        /** @type {?} */
        var offset = 150;
        /** @type {?} */
        var count = Math.floor((this.getWidth() - offset) / (pageEl.getBoundingClientRect().width * this.getZoom()));
        return count === 0 ? 1 : count;
    };
    /**
     * @return {?}
     */
    ScrollableDirective.prototype.refresh = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var page;
        /** @type {?} */
        var currentPageSet = false;
        /** @type {?} */
        var pageElem = this.getPage(this.currentPage);
        /** @type {?} */
        var currentPageRect = this.currentPage && pageElem ? pageElem.getBoundingClientRect() : null;
        for (page = 1; page < this.getChildren().length + 1; page++) {
            /** @type {?} */
            var element = this.getPage(page);
            if (this._viewportService.checkInViewport(element, this.zoom)) {
                if (!currentPageSet) {
                    if (!this.currentPage || !pageElem || (this.currentPage && currentPageRect && element.getBoundingClientRect().top !== currentPageRect.top)) {
                        this.currentPage = page;
                        this._navigateService.currentPage = page;
                    }
                    currentPageSet = true;
                }
                this._pagePreloadService.changeLastPageInView(page);
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ScrollableDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.refresh();
    };
    /**
     * @return {?}
     */
    ScrollableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.zoom = this._zoomService.zoom ? this._zoomService.zoom : this.zoom;
    };
    /**
     * @private
     * @return {?}
     */
    ScrollableDirective.prototype.getWidth = /**
     * @private
     * @return {?}
     */
    function () {
        return this._elementRef ? this._elementRef.nativeElement.offsetWidth : window.innerWidth;
    };
    /**
     * @private
     * @return {?}
     */
    ScrollableDirective.prototype.getZoom = /**
     * @private
     * @return {?}
     */
    function () {
        return this.zoom / 100;
    };
    ScrollableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[gdScrollable]'
                },] }
    ];
    /** @nocollapse */
    ScrollableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: NavigateService },
        { type: PagePreloadService },
        { type: ZoomService },
        { type: WindowService },
        { type: ViewportService }
    ]; };
    ScrollableDirective.propDecorators = {
        scrolling: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['scroll',] }],
        resizing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize',] }]
    };
    return ScrollableDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ZoomDirective = /** @class */ (function () {
    function ZoomDirective(_zoomService, _windowService, el) {
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this.zoomActive = true;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ZoomDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ZoomDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setStyles(this._zoomService.zoom);
        this.resizePages(this._zoomService.zoom);
    };
    /**
     * @return {?}
     */
    ZoomDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.zoomActive) {
            return;
        }
        this.setStyles(this._zoomService.zoom);
        this._zoomService.zoomChange.subscribe((/**
         * @param {?} zoom
         * @return {?}
         */
        function (zoom) {
            _this.setStyles(zoom);
            _this.resizePages(zoom);
        }));
    };
    /**
     * @private
     * @param {?} zoom
     * @return {?}
     */
    ZoomDirective.prototype.setStyles = /**
     * @private
     * @param {?} zoom
     * @return {?}
     */
    function (zoom) {
        if (!this.zoomActive) {
            return;
        }
        /** @type {?} */
        var zoomInt = zoom === 100 ? 1 : zoom / 100;
        if (this._windowService.isEdge()) {
            this.zoomInt = zoomInt;
        }
        else {
            this.zoomInt = null;
        }
        if (!this._windowService.isEdge()) {
            this.transform = 'scale(' + zoomInt + ')';
            this.transformOrigin = 'top left';
        }
        else {
            this.transform = "";
            this.transformOrigin = "";
        }
        /** @type {?} */
        var maxWidth = 0;
        this.file.pages.forEach((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            {
                if (page.width > maxWidth) {
                    maxWidth = page.width;
                }
            }
        }));
        // Images and Excel-related files receiving dimensions in px from server
        this.minWidth = maxWidth + FileUtil.find(this.file.guid, false).unit;
    };
    /**
     * @private
     * @param {?} elm
     * @return {?}
     */
    ZoomDirective.prototype.getScrollWidth = /**
     * @private
     * @param {?} elm
     * @return {?}
     */
    function (elm) {
        return elm.offsetWidth - elm.clientWidth;
    };
    /**
     * @private
     * @param {?} zoom
     * @return {?}
     */
    ZoomDirective.prototype.resizePages = /**
     * @private
     * @param {?} zoom
     * @return {?}
     */
    function (zoom) {
        /** @type {?} */
        var zoomInt = zoom === 100 ? 1 : zoom / 100;
        /** @type {?} */
        var viewPortWidth = this.el.nativeElement.parentElement.offsetWidth;
        /** @type {?} */
        var scrollWidth = this.getScrollWidth(this.el.nativeElement.parentElement);
        this.width = (viewPortWidth / zoomInt - scrollWidth / zoomInt) + 'px';
    };
    /**
     * @return {?}
     */
    ZoomDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.setStyles(this._zoomService.zoom);
    };
    ZoomDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[gdZoom]'
                },] }
    ];
    /** @nocollapse */
    ZoomDirective.ctorParameters = function () { return [
        { type: ZoomService },
        { type: WindowService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    ZoomDirective.propDecorators = {
        zoomActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        zoomInt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.zoom',] }],
        transform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.transform',] }],
        transformOrigin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.transform-origin',] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }],
        minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.min-width',] }]
    };
    return ZoomDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OnCloseService = /** @class */ (function () {
    function OnCloseService() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._onClose = this._observer.asObservable();
    }
    Object.defineProperty(OnCloseService.prototype, "onClose", {
        get: /**
         * @return {?}
         */
        function () {
            return this._onClose;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} close
     * @return {?}
     */
    OnCloseService.prototype.close = /**
     * @param {?} close
     * @return {?}
     */
    function (close) {
        this._observer.next(close);
    };
    OnCloseService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    OnCloseService.ctorParameters = function () { return []; };
    /** @nocollapse */ OnCloseService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function OnCloseService_Factory() { return new OnCloseService(); }, token: OnCloseService, providedIn: "root" });
    return OnCloseService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectComponent = /** @class */ (function () {
    function SelectComponent(_onCloseService) {
        var _this = this;
        this._onCloseService = _onCloseService;
        this.disabled = false;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isOpen = false;
        _onCloseService.onClose.subscribe((/**
         * @return {?}
         */
        function () {
            _this.close();
        }));
    }
    /**
     * @return {?}
     */
    SelectComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.isOpen = true;
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.isOpen = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onClickOutside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.close();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SelectComponent.prototype.toggle = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
        }
    };
    /**
     * @param {?} $event
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.select = /**
     * @param {?} $event
     * @param {?} value
     * @return {?}
     */
    function ($event, value) {
        $event.preventDefault();
        $event.stopPropagation();
        this.selected.emit(value);
        this.close();
    };
    SelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-select',
                    template: "<div class=\"select\"\n     (click)=\"toggle($event)\"\n     (clickOutside)=\"onClickOutside($event)\"\n     [clickOutsideEnabled]=\"isOpen\"\n     >\n  <span class=\"selected-value\" gdDisabledCursor [dis]=\"disabled\">\n    {{showSelected?.name}}\n  </span>\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\"></span>\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\n    <div *ngFor=\"let option of options\">\n      <div *ngIf=\"!option.separator\" (click)=\"select($event, option)\" class=\"option\">{{option.name}}</div>\n      <div *ngIf=\"option.separator\" role=\"separator\" class=\"dropdown-menu-separator\"></div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".select{min-width:50px;color:#959da5}.selected-value{font-size:14px;cursor:pointer;white-space:nowrap}.selected-value.inactive{cursor:not-allowed;color:#ccc}.nav-caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent;cursor:pointer}.nav-caret.inactive{cursor:not-allowed;color:#ccc}.dropdown-menu{position:absolute;top:49px;z-index:1000;float:left;min-width:96px;list-style:none;font-size:13px;text-align:left;background-color:#fff;box-shadow:0 3px 6px rgba(0,0,0,.3);background-clip:padding-box}.dropdown-menu .option{display:block;padding:7px 0 7px 7px;clear:both;font-weight:400;line-height:1.42857143;white-space:nowrap;cursor:pointer;font-size:10px}.dropdown-menu .option:hover{background-color:#25c2d4;color:#fff!important}.dropdown-menu-separator{height:1px;overflow:hidden;background-color:#f4f4f4;padding:0!important}"]
                }] }
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: OnCloseService }
    ]; };
    SelectComponent.propDecorators = {
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return SelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DisabledCursorDirective = /** @class */ (function () {
    function DisabledCursorDirective() {
    }
    /**
     * @private
     * @return {?}
     */
    DisabledCursorDirective.prototype.updateCursor = /**
     * @private
     * @return {?}
     */
    function () {
        this.cursor = this.dis ? true : false;
    };
    /**
     * @return {?}
     */
    DisabledCursorDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateCursor();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DisabledCursorDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.updateCursor();
    };
    DisabledCursorDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[gdDisabledCursor]'
                },] }
    ];
    /** @nocollapse */
    DisabledCursorDirective.ctorParameters = function () { return []; };
    DisabledCursorDirective.propDecorators = {
        dis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cursor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.inactive',] }]
    };
    return DisabledCursorDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RotationDirective = /** @class */ (function () {
    function RotationDirective() {
        this.withMargin = true;
    }
    /**
     * @private
     * @return {?}
     */
    RotationDirective.prototype.updateCursor = /**
     * @private
     * @return {?}
     */
    function () {
        if (typeof this.angle === "string") {
            this.angle = parseInt(this.angle, 10);
        }
        if (this.angle) {
            this.animation = 'none';
            this.transition = 'none';
            this.transform = 'rotate(' + this.angle + 'deg)';
        }
        else if (this.angle === 0 && this.animation) {
            this.animation = null;
            this.transition = null;
            this.transform = null;
        }
        if (this.withMargin) {
            if (this.angle === 90 || this.angle === 270 || this.angle === -90 || this.angle === -270) {
                if (this.isHtmlMode) {
                    if (this.isLandscape()) {
                        this.margin = '164px 254px';
                    }
                    else {
                        this.margin = '-111px 254px';
                    }
                }
                else {
                    if (this.isLandscape()) {
                        this.margin = '129px 100px -79px';
                    }
                    else {
                        this.margin = '-72px 100px -79px';
                    }
                }
            }
            else if (this.angle === -180 || this.angle === 180) {
                this.margin = '280px';
            }
            else {
                this.margin = null;
            }
        }
    };
    /**
     * @return {?}
     */
    RotationDirective.prototype.isLandscape = /**
     * @return {?}
     */
    function () {
        return this.width > this.height;
    };
    /**
     * @return {?}
     */
    RotationDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateCursor();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    RotationDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.updateCursor();
    };
    RotationDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[gdRotation]'
                },] }
    ];
    /** @nocollapse */
    RotationDirective.ctorParameters = function () { return []; };
    RotationDirective.propDecorators = {
        angle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isHtmlMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        withMargin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.animation',] }],
        transition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.transition-property',] }],
        transform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.transform',] }],
        margin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.margin',] }]
    };
    return RotationDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InitStateComponent = /** @class */ (function () {
    function InitStateComponent() {
        this.fileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showUploadFile = false;
    }
    /**
     * @return {?}
     */
    InitStateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    InitStateComponent.prototype.dropped = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event) {
            this.fileDropped.emit($event);
            this.showUploadFile = false;
        }
    };
    InitStateComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-init-state',
                    template: "<div class=\"wrapper gd-drag-n-drop-wrap\" gdDnd (dropped)=\"dropped($event)\" (opening)=\"showUploadFile=$event\">\n  <div class=\"init-state-wrapper\">\n    <fa-icon class=\"icon\" [icon]=\"['fas',icon]\"></fa-icon>\n    <span class=\"start\">\n      <ng-content></ng-content>\n    </span>\n  </div>\n  <div *ngIf=\"showUploadFile\" class=\"init-state-dnd-wrapper\">\n    <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\n    <span class=\"text\">{{text}}</span>\n  </div>\n</div>\n",
                    styles: [".wrapper{color:#959da5;background-color:#e7e7e7;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%}.icon{font-size:65px;margin-bottom:43px;display:flex;color:#959da5}.start{font-size:15px;text-align:center;color:#959da5}.gd-drag-n-drop-wrap.active{background-color:#fff;position:fixed;top:0;background:rgba(255,255,255,.8)}.gd-drag-n-drop-wrap.active .init-state-wrapper{position:absolute;opacity:.2;top:unset}.gd-drag-n-drop-wrap.active .init-state-dnd-wrapper{top:0;z-index:999}.gd-drag-n-drop-wrap.active .init-state-dnd-wrapper .icon{width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}.gd-drag-n-drop-wrap.active .text{color:#6e6e6e;font-size:14px}.init-state-dnd-wrapper,.init-state-wrapper{display:flex;flex-direction:column;width:250px;height:250px;align-items:center;justify-content:center}.init-state-wrapper{top:-60px;position:relative}"]
                }] }
    ];
    /** @nocollapse */
    InitStateComponent.ctorParameters = function () { return []; };
    InitStateComponent.propDecorators = {
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fileDropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return InitStateComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RenderPrintService = /** @class */ (function () {
    function RenderPrintService() {
        var _this = this;
        this._render = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            return _this._observer = observer;
        }));
        this._renderBlob = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            return _this._observerBlob = observer;
        }));
    }
    Object.defineProperty(RenderPrintService.prototype, "renderPrint", {
        get: /**
         * @return {?}
         */
        function () {
            return this._render;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} pages
     * @return {?}
     */
    RenderPrintService.prototype.changePages = /**
     * @param {?} pages
     * @return {?}
     */
    function (pages) {
        this._observer.next(pages);
    };
    Object.defineProperty(RenderPrintService.prototype, "renderPrintBlob", {
        get: /**
         * @return {?}
         */
        function () {
            return this._renderBlob;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} file
     * @return {?}
     */
    RenderPrintService.prototype.changeBlob = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this._observerBlob.next(file);
    };
    return RenderPrintService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RenderPrintDirective = /** @class */ (function () {
    function RenderPrintDirective(_renderService) {
        var _this = this;
        this._renderService = _renderService;
        _renderService.renderPrint.subscribe((/**
         * @param {?} pages
         * @return {?}
         */
        function (pages) {
            _this.renderPrint(pages);
        }));
        _renderService.renderPrintBlob.subscribe((/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            _this.renderPrintBlob(file);
        }));
    }
    /**
     * @private
     * @param {?} pages
     * @return {?}
     */
    RenderPrintDirective.prototype.renderPrint = /**
     * @private
     * @param {?} pages
     * @return {?}
     */
    function (pages) {
        var e_1, _a, e_2, _b;
        /** @type {?} */
        var pagesHtml = '';
        if (this.htmlMode) {
            try {
                for (var pages_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__values"])(pages), pages_1_1 = pages_1.next(); !pages_1_1.done; pages_1_1 = pages_1.next()) {
                    var page = pages_1_1.value;
                    pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
                        '<div class="gd-wrapper">' + page.data + '</div>' +
                        '</div>';
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (pages_1_1 && !pages_1_1.done && (_a = pages_1.return)) _a.call(pages_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            try {
                for (var pages_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__values"])(pages), pages_2_1 = pages_2.next(); !pages_2_1.done; pages_2_1 = pages_2.next()) {
                    var page = pages_2_1.value;
                    pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
                        '<div class="gd-wrapper"><image style="width: inherit !important" class="gd-page-image" src="data:image/png;base64,' + page.data + '" alt></image></div>' +
                        '</div>';
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (pages_2_1 && !pages_2_1.done && (_b = pages_2.return)) _b.call(pages_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        this.openWindow(pagesHtml, pages[0].width, pages[0].height);
    };
    /**
     * @private
     * @param {?} pagesHtml
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    RenderPrintDirective.prototype.openWindow = /**
     * @private
     * @param {?} pagesHtml
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (pagesHtml, width, height) {
        /** @type {?} */
        var a4Height = 842;
        /** @type {?} */
        var a4Width = 595;
        /** @type {?} */
        var imageA4Adjusted = '';
        if (width > a4Width && height > a4Height) {
            /** @type {?} */
            var zoom = Math.round(height / a4Height) / 100;
            imageA4Adjusted = '.gd-page img { width: 100%; margin: 0; padding: 0;}';
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                imageA4Adjusted = '.gd-page img { transform: scale(' + zoom + ');}';
            }
        }
        /** @type {?} */
        var cssPrint = '<style>' +
            '.gd-page { display: block; page-break-after:always; page-break-inside: avoid; }' +
            ' .gd-page:last-child {page-break-after: auto;}' + imageA4Adjusted;
        cssPrint = cssPrint + '</style>';
        /** @type {?} */
        var windowObject = window.open('', "PrintWindow", "width=750,height=650,top=50,left=50,toolbars=yes,scrollbars=yes,status=yes,resizable=yes");
        windowObject.focus();
        windowObject.document.writeln(cssPrint);
        windowObject.document.writeln(pagesHtml);
        windowObject.document.close();
        windowObject.focus();
        windowObject.print();
        windowObject.close();
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    RenderPrintDirective.prototype.renderPrintBlob = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var fileURL = URL.createObjectURL(file);
        /** @type {?} */
        var windowObject = window.open(fileURL, "PrintWindow", "width=750,height=650,top=50,left=50,toolbars=yes,scrollbars=yes,status=yes,resizable=yes");
        windowObject.focus();
        windowObject.print();
        windowObject.close();
    };
    RenderPrintDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[gdRenderPrint]'
                },] }
    ];
    /** @nocollapse */
    RenderPrintDirective.ctorParameters = function () { return [
        { type: RenderPrintService }
    ]; };
    RenderPrintDirective.propDecorators = {
        htmlMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return RenderPrintDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ExceptionMessageService = /** @class */ (function () {
    function ExceptionMessageService() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('Server is not available');
        this._messageChange = this._observer.asObservable();
    }
    Object.defineProperty(ExceptionMessageService.prototype, "messageChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._messageChange;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} message
     * @return {?}
     */
    ExceptionMessageService.prototype.changeMessage = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this._observer.next(message);
    };
    return ExceptionMessageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ErrorModalComponent = /** @class */ (function () {
    function ErrorModalComponent(messageService) {
        var _this = this;
        messageService.messageChange.subscribe((/**
         * @param {?} message
         * @return {?}
         */
        function (message) { return _this.message = message; }));
    }
    /**
     * @return {?}
     */
    ErrorModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ErrorModalComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-error-modal',
                    template: "<gd-modal id=\"gd-error-message\" [title]=\"'Error'\">\n  <section id=\"gd-error-section\">\n    <fa-icon [icon]=\"['fas', 'exclamation-triangle']\"></fa-icon>\n    <div class=\"gd-modal-error\">\n      <div class=\"gd-modal-error-title\">Something went wrong</div>\n      <div class=\"gd-modal-error-message\">{{message ? message : 'Server is not available'}}</div>\n    </div>\n  </section>\n</gd-modal>\n",
                    styles: [".gd-modal-error{display:inline-flex;flex-direction:column;flex:1}.gd-modal-error .gd-modal-error-message{font-size:12px;margin:0 24px 24px 0}.gd-modal-error .gd-modal-error-title{font-size:16px;font-weight:700;margin:14px 0 10px}#gd-error-section{max-width:468px;max-height:204px;display:flex}#gd-error-section fa-icon{flex:1;color:#e04e4e;font-size:40px;margin:13px 23px 90px;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    ErrorModalComponent.ctorParameters = function () { return [
        { type: ExceptionMessageService }
    ]; };
    return ErrorModalComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PasswordService = /** @class */ (function () {
    function PasswordService() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._passChange = this._observer.asObservable();
    }
    Object.defineProperty(PasswordService.prototype, "passChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._passChange;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} pass
     * @return {?}
     */
    PasswordService.prototype.setPassword = /**
     * @param {?} pass
     * @return {?}
     */
    function (pass) {
        this._observer.next(pass);
    };
    return PasswordService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PasswordRequiredComponent = /** @class */ (function () {
    function PasswordRequiredComponent(messageService, _passwordService) {
        var _this = this;
        this._passwordService = _passwordService;
        messageService.messageChange.subscribe((/**
         * @param {?} message
         * @return {?}
         */
        function (message) { return _this.message = message; }));
    }
    /**
     * @return {?}
     */
    PasswordRequiredComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PasswordRequiredComponent.prototype.setPassword = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._passwordService.setPassword(value);
    };
    PasswordRequiredComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-password-required',
                    template: "<gd-modal id=\"gd-password-required\" [title]=\"'Password protected document'\">\n  <section id=\"gd-password-section\">\n    <div class=\"gd-password-wrap\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" [ngClass]=\"{'error': message}\" id=\"password\" #pass\n             (keyup.enter)=\"setPassword(pass.value)\">\n      <span class=\"gd-password-error\">{{message}}</span>\n      <gd-button [icon]=\"'key'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"setPassword(pass.value)\">\n          Open\n      </gd-button>\n    </div>\n  </section>\n</gd-modal>\n",
                    styles: ["#gd-password-section{width:468px;height:164px}.gd-password-wrap{display:flex;flex-direction:column;margin:24px}.gd-password-wrap label{font-size:14px;color:#acacac;padding-bottom:12px}.gd-password-wrap input{height:30px;border:1px solid #25c2d4}.gd-password-wrap input.error{border-color:#e04e4e}.gd-password-wrap gd-button{align-self:flex-end}.gd-password-wrap ::ng-deep .button{height:37px;width:72px;padding:0;justify-content:center}.gd-password-wrap ::ng-deep .button ::ng-deep .text{font-size:10px!important}.gd-password-error{color:#e04e4e;padding:10px 0 12px;height:12px;line-height:12px;font-size:12px}@media (max-width:1037px){#gd-password-section{min-width:375px}}"]
                }] }
    ];
    /** @nocollapse */
    PasswordRequiredComponent.ctorParameters = function () { return [
        { type: ExceptionMessageService },
        { type: PasswordService }
    ]; };
    return PasswordRequiredComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ErrorInterceptorService = /** @class */ (function () {
    function ErrorInterceptorService(_modalService, _messageService) {
        this._modalService = _modalService;
        this._messageService = _messageService;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    ErrorInterceptorService.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        var _this = this;
        /** @type {?} */
        var logFormat = 'background: maroon; color: white';
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return data;
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])((/**
         * @param {?} exception
         * @return {?}
         */
        function (exception) {
            if (exception instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"]) {
                switch (exception.status) {
                    case HttpError.BadRequest:
                        console.error('%c Bad Request 400', logFormat);
                        break;
                    case HttpError.Unauthorized:
                        console.error('%c Unauthorized 401', logFormat);
                        break;
                    case HttpError.NotFound:
                        console.error('%c Not Found 404', logFormat);
                        break;
                    case HttpError.TimeOut:
                        console.error('%c TimeOut 408', logFormat);
                        break;
                    case HttpError.InternalServerError:
                        console.error('%c big bad 500', logFormat);
                        _this._messageService.changeMessage(exception.error.message);
                        _this._modalService.open(CommonModals.ErrorMessage);
                        break;
                    case HttpError.Forbidden:
                        console.error('%c Forbidden 403', logFormat);
                        _this._messageService.changeMessage(exception.error.message);
                        _this._modalService.open(CommonModals.PasswordRequired);
                        break;
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])(exception);
        })));
    };
    ErrorInterceptorService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ErrorInterceptorService.ctorParameters = function () { return [
        { type: ModalService },
        { type: ExceptionMessageService }
    ]; };
    /** @nocollapse */ ErrorInterceptorService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ErrorInterceptorService_Factory() { return new ErrorInterceptorService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ModalService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ExceptionMessageService)); }, token: ErrorInterceptorService, providedIn: "root" });
    return ErrorInterceptorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchService = /** @class */ (function () {
    function SearchService() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._textChange = this._observer.asObservable();
        this._observerCurrent = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._currentChange = this._observerCurrent.asObservable();
        this._observerTotal = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._totalChange = this._observerTotal.asObservable();
    }
    Object.defineProperty(SearchService.prototype, "textChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._textChange;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} text
     * @return {?}
     */
    SearchService.prototype.setText = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this._observer.next(text);
    };
    Object.defineProperty(SearchService.prototype, "currentChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "totalChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._totalChange;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} current
     * @return {?}
     */
    SearchService.prototype.setCurrent = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        this._observerCurrent.next(current);
    };
    /**
     * @param {?} total
     * @return {?}
     */
    SearchService.prototype.setTotal = /**
     * @param {?} total
     * @return {?}
     */
    function (total) {
        this._observerTotal.next(total);
    };
    return SearchService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchComponent = /** @class */ (function () {
    function SearchComponent(_searchService) {
        var _this = this;
        this._searchService = _searchService;
        this.hidePanel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.current = 0;
        this.total = 0;
        _searchService.totalChange.subscribe((/**
         * @param {?} total
         * @return {?}
         */
        function (total) {
            _this.total = total;
            if (total !== 0) {
                _this.current = 1;
            }
            else {
                _this.current = 0;
            }
            _this._searchService.setCurrent(_this.current);
        }));
    }
    /**
     * @return {?}
     */
    SearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} text
     * @return {?}
     */
    SearchComponent.prototype.setText = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this._searchService.setText(text);
    };
    /**
     * @return {?}
     */
    SearchComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.setText('');
        this.hidePanel.emit(true);
    };
    /**
     * @return {?}
     */
    SearchComponent.prototype.prev = /**
     * @return {?}
     */
    function () {
        if (this.current > 1) {
            this.current--;
            this._searchService.setCurrent(this.current);
        }
    };
    /**
     * @return {?}
     */
    SearchComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        if (this.current < this.total) {
            this.current++;
            this._searchService.setCurrent(this.current);
        }
    };
    /**
     * @return {?}
     */
    SearchComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.textElement.nativeElement.focus();
    };
    SearchComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-search',
                    template: "<div class=\"gd-nav-search-container\">\n  <input type=\"text\" class=\"gd-search-input\" #text (input)=\"setText(text.value)\"/>\n  <div class=\"gd-search-count\">{{current}} of {{total}}</div>\n  <gd-button class=\"gd-nav-search-btn\" [icon]=\"'chevron-left'\" [disabled]=\"total == 0 || current == 1\" (click)=\"prev()\">\n  </gd-button>\n  <gd-button class=\"gd-nav-search-btn\" [icon]=\"'chevron-right'\" [disabled]=\"total == 0 || current == total\" (click)=\"next()\">\n  </gd-button>\n  <gd-button class=\"gd-nav-search-btn gd-nav-search-cancel\" [icon]=\"'times'\" (click)=\"hide()\">\n  </gd-button>\n</div>\n",
                    styles: [".gd-nav-search-btn{margin:3px 0 4px}.gd-nav-search-cancel{color:#fff;font-size:14px;width:37px}.gd-search-count{color:#959da5;font-size:12px;position:absolute;right:148px;top:14px}.gd-nav-search-container{background-color:#3e4e5a;width:410px;position:fixed;left:50%;top:60px;z-index:2;transform:translate(-50%,0);display:flex}.gd-search-input{float:left;height:30px;width:267px;font-size:14px;color:#6e6e6e;border:1px solid #25c2d4;margin:7px 0 7px 7px;box-sizing:border-box;padding:6px 0 5px 9px}input[type=text]::-ms-clear{display:none}@media (max-width:1037px){.gd-search-input{width:231px;height:30px;margin:7px 0 7px 5px}.gd-search-count{position:absolute;left:193px;top:15px}.gd-nav-search-container{width:100%}}"]
                }] }
    ];
    /** @nocollapse */
    SearchComponent.ctorParameters = function () { return [
        { type: SearchService }
    ]; };
    SearchComponent.propDecorators = {
        hidePanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        textElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['text', {
                        static: true
                    },] }]
    };
    return SearchComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $$4 = jquery__WEBPACK_IMPORTED_MODULE_9__;
var SearchableDirective = /** @class */ (function () {
    function SearchableDirective(_elementRef, _searchService, _highlight, _zoomService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._searchService = _searchService;
        this._highlight = _highlight;
        this._zoomService = _zoomService;
        this.current = 0;
        this.total = 0;
        this.zoom = 100;
        _searchService.currentChange.subscribe((/**
         * @param {?} current
         * @return {?}
         */
        function (current) {
            _this.current = current;
            if (_this.current !== 0) {
                _this.moveToCurrent();
            }
        }));
        _searchService.textChange.subscribe((/**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            _this.text = text;
            _this.highlightSearch();
        }));
        this.zoom = _zoomService.zoom ? _zoomService.zoom : this.zoom;
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.zoom = val ? val : _this.zoom;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    SearchableDirective.prototype.highlightSearch = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            this.cleanHighlight(el);
            if (this.text) {
                this.highlightEl(el);
                /** @type {?} */
                var count = el.querySelectorAll('.gd-highlight').length;
                this.total = count;
            }
            else {
                this.total = 0;
            }
            this._searchService.setTotal(this.total);
        }
    };
    /**
     * @private
     * @return {?}
     */
    SearchableDirective.prototype.moveToCurrent = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.current === 0) {
            return;
        }
        /** @type {?} */
        var currentZoom = this.getZoom();
        /** @type {?} */
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            el.querySelectorAll('.gd-highlight-select').forEach((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                $$4(value).removeClass('gd-highlight-select');
            }));
            /** @type {?} */
            var currentEl = el.querySelectorAll('.gd-highlight')[this.current - 1];
            $$4(currentEl).addClass('gd-highlight-select');
            if (currentEl) {
                /** @type {?} */
                var options = {
                    left: 0,
                    top: ($$4(currentEl).offset().top * currentZoom) + el.parentElement.scrollTop - 150,
                };
                // using polyfill
                el.parentElement.parentElement.scroll(options);
            }
        }
    };
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    SearchableDirective.prototype.highlightEl = /**
     * @private
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var textNodes = $$4(el).find('*').contents().filter((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var nodeName = this.parentElement.nodeName.toLowerCase();
            /** @type {?} */
            var checkClass = ((/** @type {?} */ (this))).classList ? !((/** @type {?} */ (this))).classList.contains('gd-highlight') : true;
            return this.nodeType === 3 &&
                this.textContent.trim().length !== 0 &&
                nodeName !== 'style' &&
                nodeName !== 'title' &&
                nodeName !== 'body' &&
                nodeName !== 'script' &&
                checkClass;
        }));
        /** @type {?} */
        var text = this.text;
        /** @type {?} */
        var highlight = this._highlight;
        textNodes.each((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var $this = $$4(this);
            /** @type {?} */
            var content = $this.text();
            content = highlight.transform(content, text);
            $this.replaceWith(content);
        }));
        el.normalize();
    };
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    SearchableDirective.prototype.cleanHighlight = /**
     * @private
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var nodeListOf = el.querySelectorAll('.gd-highlight');
        for (var i = 0; i < nodeListOf.length; i++) {
            /** @type {?} */
            var element = nodeListOf.item(i);
            element.replaceWith(((/** @type {?} */ (element))).innerText);
        }
        el.normalize();
    };
    /**
     * @private
     * @return {?}
     */
    SearchableDirective.prototype.getZoom = /**
     * @private
     * @return {?}
     */
    function () {
        return this.zoom / 100;
    };
    SearchableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[gdSearchable]'
                },] }
    ];
    /** @nocollapse */
    SearchableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: SearchService },
        { type: HighlightSearchPipe },
        { type: ZoomService }
    ]; };
    return SearchableDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabbedToolbarsComponent = /** @class */ (function () {
    function TabbedToolbarsComponent() {
    }
    /**
     * @return {?}
     */
    TabbedToolbarsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TabbedToolbarsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-tabbed-toolbars',
                    template: "<div class=\"top-panel\">\n  <gd-logo [logo]=\"logo\" [icon]=\"icon\"></gd-logo>\n  <ng-content></ng-content>\n</div>\n",
                    styles: [".top-panel{background:#3e4e5a;display:flex;width:100%;height:90px}.top-panel ::ng-deep .logo{height:30px;font-size:16px}@media (max-width:1037px){.top-panel{height:60px}.top-panel ::ng-deep .logo{height:60px}}"]
                }] }
    ];
    /** @nocollapse */
    TabbedToolbarsComponent.ctorParameters = function () { return []; };
    TabbedToolbarsComponent.propDecorators = {
        logo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return TabbedToolbarsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabActivatorService = /** @class */ (function () {
    function TabActivatorService() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._activeTabChange = this._observer.asObservable();
    }
    Object.defineProperty(TabActivatorService.prototype, "activeTabChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._activeTabChange;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} tabId
     * @return {?}
     */
    TabActivatorService.prototype.changeActiveTab = /**
     * @param {?} tabId
     * @return {?}
     */
    function (tabId) {
        this._observer.next(tabId);
    };
    return TabActivatorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabComponent = /** @class */ (function () {
    function TabComponent(_tabActivatorService) {
        var _this = this;
        this._tabActivatorService = _tabActivatorService;
        this.disabled = false;
        this.active = false;
        this.content = true;
        this._tabActivatorService.activeTabChange.subscribe((/**
         * @param {?} tabId
         * @return {?}
         */
        function (tabId) {
            _this.activation(tabId);
        }));
    }
    /**
     * @private
     * @param {?} tabId
     * @return {?}
     */
    TabComponent.prototype.activation = /**
     * @private
     * @param {?} tabId
     * @return {?}
     */
    function (tabId) {
        if (this.id === tabId) {
            this.active = true;
        }
        else {
            this.active = false;
        }
    };
    /**
     * @return {?}
     */
    TabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    TabComponent.prototype.selectTab = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        this._tabActivatorService.changeActiveTab(this.id);
    };
    TabComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-tab',
                    template: "<div [ngClass]=\"(active) ? 'gd-tab active' : 'gd-tab'\" (mousedown)=\"selectTab()\">\n  <div class=\"title\" *ngIf=\"tabTitle\">{{tabTitle}}</div>\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n</div>\n<div *ngIf=\"content\" [ngClass]=\"(active) ? 'tab-content active' : 'tab-content'\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: [".tab-content{height:60px;position:absolute;background-color:#fff;width:100%;left:0;line-height:60px;display:none;z-index:9}.tab-content ::ng-deep .toolbar-panel{height:60px}.tab-content.active{display:flex}.gd-tab{text-align:center;font-size:11px;color:#e5e5e5;height:30px;line-height:30px;cursor:pointer;display:flex;align-items:center;justify-content:center}.gd-tab .icon{display:none;font-size:14px;margin:auto 23px}.gd-tab .title{margin:auto 23px}.gd-tab.active{background-color:#fff;color:#3e4e5a;font-weight:700}@media (max-width:1037px){.gd-tab{height:60px;line-height:60px}.gd-tab .title{display:none}.gd-tab .icon{display:block}}"]
                }] }
    ];
    /** @nocollapse */
    TabComponent.ctorParameters = function () { return [
        { type: TabActivatorService }
    ]; };
    TabComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tabTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return TabComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-tabs',
                    template: "<div class=\"gd-tabs\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: [".gd-tabs{display:flex}"]
                }] }
    ];
    /** @nocollapse */
    TabsComponent.ctorParameters = function () { return []; };
    return TabsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Formatting = /** @class */ (function () {
    function Formatting(fontSize, color, bgColor, bold, italic, underline, font, strikeout, align, list) {
        this.fontSize = fontSize;
        this.color = color;
        this.bgColor = bgColor;
        this.bold = bold;
        this.italic = italic;
        this.underline = underline;
        this.font = font;
        this.strikeout = strikeout;
        this.align = align;
        this.list = list;
    }
    /**
     * @return {?}
     */
    Formatting.default = /**
     * @return {?}
     */
    function () {
        return new Formatting(10, '#000000', '#FFFFFF', false, false, false, 'Arial', false, "", "");
    };
    return Formatting;
}());
var FormattingService = /** @class */ (function () {
    function FormattingService() {
        this._observerBold = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._formatBoldChange = this._observerBold.asObservable();
        this._observerUnderline = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._formatUnderlineChange = this._observerUnderline.asObservable();
        this._observerUndo = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._undo = this._observerUndo.asObservable();
        this._observerRedo = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._redo = this._observerRedo.asObservable();
        this._observerItalic = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._formatItalicChange = this._observerItalic.asObservable();
        this._observerColor = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._formatColorChange = this._observerColor.asObservable();
        this._observerBgColor = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._formatBgColorChange = this._observerBgColor.asObservable();
        this._observerFontSize = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._formatFontSizeChange = this._observerFontSize.asObservable();
        this._observerFont = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._formatFontChange = this._observerFont.asObservable();
        this._observerStrikeout = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._formatStrikeoutChange = this._observerStrikeout.asObservable();
        this._observerAlign = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._formatAlignChange = this._observerAlign.asObservable();
        this._observerList = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._formatListChange = this._observerList.asObservable();
    }
    Object.defineProperty(FormattingService.prototype, "formatBoldChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formatBoldChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatUnderlineChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formatUnderlineChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatColorChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formatColorChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatBgColorChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formatBgColorChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatFontSizeChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formatFontSizeChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatFontChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formatFontChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "undo", {
        get: /**
         * @return {?}
         */
        function () {
            return this._undo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "redo", {
        get: /**
         * @return {?}
         */
        function () {
            return this._redo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatItalicChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formatItalicChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatStrikeoutChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formatStrikeoutChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatAlignChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formatAlignChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatListChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formatListChange;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} val
     * @return {?}
     */
    FormattingService.createFontSizeOption = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return { value: val, name: val + 'px', separator: false };
    };
    /**
     * @return {?}
     */
    FormattingService.getFontSizeOptions = /**
     * @return {?}
     */
    function () {
        return [
            FormattingService.createFontSizeOption(8),
            FormattingService.createFontSizeOption(10),
            FormattingService.createFontSizeOption(12),
            FormattingService.createFontSizeOption(14),
            FormattingService.createFontSizeOption(16),
            FormattingService.createFontSizeOption(18),
            FormattingService.createFontSizeOption(20),
            FormattingService.createFontSizeOption(22),
            FormattingService.createFontSizeOption(24),
        ];
    };
    /**
     * @param {?} val
     * @return {?}
     */
    FormattingService.createFontOption = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return { value: val, name: val, separator: false };
    };
    /**
     * @return {?}
     */
    FormattingService.getFontOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var fonts = ["Arial", "Calibri", "Century Gothic", "Comic Sans", "Consolas", "Courier", "Dejavu Sans", "Dejavu Serif", "Georgia", "Gill Sans", "Helvetica", "Impact", "Lucida Sans",
            "Myriad Pro", "Open Sans", "Palatino", "Tahoma", "Times New Roman", "Trebuchet"];
        /** @type {?} */
        var fontOptions = [];
        fonts.forEach((/**
         * @param {?} font
         * @return {?}
         */
        function (font) {
            fontOptions.push(_this.createFontOption(font));
        }));
        return fontOptions;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    FormattingService.prototype.changeFormatFontSize = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this._observerFontSize.next($event);
    };
    /**
     * @param {?} bold
     * @return {?}
     */
    FormattingService.prototype.changeFormatBold = /**
     * @param {?} bold
     * @return {?}
     */
    function (bold) {
        this._observerBold.next(bold);
    };
    /**
     * @param {?} underline
     * @return {?}
     */
    FormattingService.prototype.changeFormatUnderline = /**
     * @param {?} underline
     * @return {?}
     */
    function (underline) {
        this._observerUnderline.next(underline);
    };
    /**
     * @return {?}
     */
    FormattingService.prototype.Undo = /**
     * @return {?}
     */
    function () {
        this._observerUndo.next();
    };
    /**
     * @return {?}
     */
    FormattingService.prototype.Redo = /**
     * @return {?}
     */
    function () {
        this._observerRedo.next();
    };
    /**
     * @param {?} italic
     * @return {?}
     */
    FormattingService.prototype.changeFormatItalic = /**
     * @param {?} italic
     * @return {?}
     */
    function (italic) {
        this._observerItalic.next(italic);
    };
    /**
     * @param {?} color
     * @return {?}
     */
    FormattingService.prototype.changeFormatColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        this._observerColor.next(color);
    };
    /**
     * @param {?} bgcolor
     * @return {?}
     */
    FormattingService.prototype.changeFormatBgColor = /**
     * @param {?} bgcolor
     * @return {?}
     */
    function (bgcolor) {
        this._observerBgColor.next(bgcolor);
    };
    /**
     * @param {?} font
     * @return {?}
     */
    FormattingService.prototype.changeFormatFont = /**
     * @param {?} font
     * @return {?}
     */
    function (font) {
        this._observerFont.next(font);
    };
    /**
     * @param {?} strikeout
     * @return {?}
     */
    FormattingService.prototype.changeFormatStrikeout = /**
     * @param {?} strikeout
     * @return {?}
     */
    function (strikeout) {
        this._observerStrikeout.next(strikeout);
    };
    /**
     * @param {?} align
     * @return {?}
     */
    FormattingService.prototype.changeFormatAlign = /**
     * @param {?} align
     * @return {?}
     */
    function (align) {
        this._observerAlign.next(align);
    };
    /**
     * @param {?} list
     * @return {?}
     */
    FormattingService.prototype.changeFormatList = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        this._observerList.next(list);
    };
    return FormattingService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_COLORS = [
    '#000000', '#434343', '#666666', '#999999', '#B7B7B7', '#CCCCCC', '#D9D9D9', '#EFEFEF', '#F3F3F3', '#FFFFFF',
    '#980000', '#FF0000', '#FF9900', '#FFFF00', '#00FF00', '#00FFFF', '#4986E8', '#0000FF', '#9900FF', '#FF00FF',
    '#E6B8AF', '#F4CCCC', '#FDE5CD', '#FFF2CC', '#D9EAD3', '#D0E0E2', '#C9DAF8', '#CFE2F3', '#D9D2E9', '#EAD1DC',
    '#DD7E6B', '#EA9899', '#F9CB9C', '#FFE59A', '#B7D7A8', '#A2C4C9', '#A4C2F4', '#9FC5E8', '#B4A7D7', '#D5A6BD',
    '#CC4125', '#E06666', '#F6B26B', '#FFD966', '#92C47D', '#75A5AF', '#6D9EEB', '#6FA9DB', '#8E7CC3', '#C27BA0',
    '#A61C00', '#CC0000', '#E69138', '#F2C131', '#6AA84F', '#45818E', '#3C78D8', '#3C85C6', '#674EA7', '#A64D79',
    '#85200B', '#990000', '#B45F05', '#BF9000', '#37761D', '#144F5C', '#1254CC', '#0A5394', '#351C75', '#741B47',
    '#5B0F00', '#660000', '#783F03', '#7F6000', '#284E13', '#0B343D', '#1B4586', '#063763', '#20124D', '#4C1030',
];
var ColorPickerComponent = /** @class */ (function () {
    function ColorPickerComponent() {
        this.isOpen = false;
        this.selectedColor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.colors = DEFAULT_COLORS;
    }
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} $event
     * @param {?} color
     * @return {?}
     */
    ColorPickerComponent.prototype.select = /**
     * @param {?} $event
     * @param {?} color
     * @return {?}
     */
    function ($event, color) {
        $event.preventDefault();
        $event.stopPropagation();
        this.selectedColor.emit(color);
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.isOpen = false;
        this.closeOutside.emit(true);
    };
    ColorPickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-color-picker',
                    template: "<div class=\"bcPicker-picker\" (clickOutside)=\"close()\" *ngIf=\"isOpen\" [clickOutsideEnabled]=\"isOpen\">\n  <div class=\"bcPicker-palette\">\n    <div class=\"bcPicker-color\" *ngFor=\"let color of colors\" [style.background-color]=\"color\" (click)=\"select($event, color)\"></div>\n  </div>\n</div>\n",
                    styles: [".bcPicker-picker{border:1px;border-radius:100%}.bcPicker-palette{width:250px;border:1px solid #efefef;background-color:#fdfdfd;z-index:999;box-shadow:0 0 5px #efefef;display:flex;flex-wrap:wrap;padding-left:7px}.bcPicker-palette>.bcPicker-color{width:19px;height:19px;margin:2px;cursor:pointer;border:1px solid #707070}"]
                }] }
    ];
    /** @nocollapse */
    ColorPickerComponent.ctorParameters = function () { return []; };
    ColorPickerComponent.propDecorators = {
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectedColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        closeOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ColorPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BackFormattingService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(BackFormattingService, _super);
    function BackFormattingService() {
        return _super.call(this) || this;
    }
    BackFormattingService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BackFormattingService.ctorParameters = function () { return []; };
    /** @nocollapse */ BackFormattingService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function BackFormattingService_Factory() { return new BackFormattingService(); }, token: BackFormattingService, providedIn: "root" });
    return BackFormattingService;
}(FormattingService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectionService = /** @class */ (function () {
    function SelectionService() {
        this.isIE =  !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    }
    /**
     * @return {?}
     */
    SelectionService.prototype.restoreSelection = /**
     * @return {?}
     */
    function () {
        if (this.selection && !this.selection.collapsed || this.isIE) {
            this.putSelection(this.selection);
        }
    };
    /**
     * @return {?}
     */
    SelectionService.prototype.captureSelection = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selection = window.getSelection();
        if (selection.rangeCount > 0) {
            this.selection = selection.getRangeAt(0);
        }
    };
    /**
     * @private
     * @param {?} selection
     * @return {?}
     */
    SelectionService.prototype.putSelection = /**
     * @private
     * @param {?} selection
     * @return {?}
     */
    function (selection) {
        /** @type {?} */
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(selection.cloneRange());
    };
    /**
     * @return {?}
     */
    SelectionService.prototype.refreshSelection = /**
     * @return {?}
     */
    function () {
        this.captureSelection();
        this.restoreSelection();
    };
    SelectionService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ SelectionService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function SelectionService_Factory() { return new SelectionService(); }, token: SelectionService, providedIn: "root" });
    return SelectionService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $$5 = jquery__WEBPACK_IMPORTED_MODULE_9__;
var FormattingDirective = /** @class */ (function () {
    function FormattingDirective(_formattingService, _backFormattingService, _selectionService) {
        this._formattingService = _formattingService;
        this._backFormattingService = _backFormattingService;
        this._selectionService = _selectionService;
        this.bold = false;
        this.italic = false;
        this.underline = false;
        this.strikeout = false;
        this.isIE = false;
        this.isIE = /*@cc_on!@*/  !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    }
    /**
     * @return {?}
     */
    FormattingDirective.prototype.mouseup = /**
     * @return {?}
     */
    function () {
        this.bold = document.queryCommandState("bold");
        this.strikeout = document.queryCommandState("strikeThrough");
        this.italic = document.queryCommandState("italic");
        this.bgColor = document.queryCommandValue("backColor");
        this.underline = document.queryCommandState("underline");
        this.align = this.checkJustify();
        this.list = this.checkList();
        //fix required by FireFox to get correct background color
        if (this.bgColor === "transparent") {
            this.bgColor = $$5(window.getSelection().focusNode.parentNode).css('background-color').toString();
        }
        this.font = document.queryCommandValue("FontName").replace(/"/g, '');
        if (this.font.split(",").length > 1) {
            this.font = this.font.split(",")[0];
        }
        this.color = document.queryCommandValue("foreColor");
        this._backFormattingService.changeFormatBold(this.bold);
        this._backFormattingService.changeFormatUnderline(this.underline);
        this._backFormattingService.changeFormatItalic(this.italic);
        this._backFormattingService.changeFormatColor(this.color);
        this._backFormattingService.changeFormatBgColor(this.bgColor);
        this._backFormattingService.changeFormatFontSize(this.reportFontSize());
        this._backFormattingService.changeFormatFont(this.font);
        this._backFormattingService.changeFormatStrikeout(this.strikeout);
        this._backFormattingService.changeFormatAlign(this.align);
        this._backFormattingService.changeFormatList(this.list);
    };
    /**
     * @private
     * @return {?}
     */
    FormattingDirective.prototype.checkJustify = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var align = "";
        align = document.queryCommandState("justifyCenter") ? "center" : align;
        align = document.queryCommandState("justifyFull") ? "full" : align;
        align = document.queryCommandState("justifyLeft") ? "left" : align;
        align = document.queryCommandState("justifyRight") ? "right" : align;
        return align;
    };
    /**
     * @private
     * @return {?}
     */
    FormattingDirective.prototype.checkList = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var list = "";
        list = document.queryCommandState("insertUnorderedList") ? "unordered" : list;
        list = document.queryCommandState("insertOrderedList") ? "ordered" : list;
        return list;
    };
    /**
     * @return {?}
     */
    FormattingDirective.prototype.reportFontSize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var containerEl;
        /** @type {?} */
        var sel;
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.rangeCount) {
                containerEl = sel.getRangeAt(0).commonAncestorContainer;
                // Make sure we have an element rather than a text node
                if (containerEl.nodeType === 3) {
                    containerEl = containerEl.parentNode;
                }
            }
        }
        else if ((sel = document.getSelection()) && sel.type !== "Control") {
            containerEl = sel.createRange().parentElement();
        }
        if (containerEl) {
            return parseInt(this.getComputedStyleProperty(containerEl, "fontSize").replace("px", ""), 10);
        }
    };
    /**
     * @param {?} el
     * @param {?} propName
     * @return {?}
     */
    FormattingDirective.prototype.getComputedStyleProperty = /**
     * @param {?} el
     * @param {?} propName
     * @return {?}
     */
    function (el, propName) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(el, null)[propName];
        }
        else if (el.currentStyle) {
            return el.currentStyle[propName];
        }
    };
    /**
     * @return {?}
     */
    FormattingDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._formattingService.undo.subscribe((/**
         * @return {?}
         */
        function () {
            _this.toggleUndo();
        }));
        this._formattingService.redo.subscribe((/**
         * @return {?}
         */
        function () {
            _this.toggleRedo();
        }));
        this._formattingService.formatBoldChange.subscribe((/**
         * @param {?} bold
         * @return {?}
         */
        function (bold) {
            _this.bold = bold;
            _this.toggleBold();
        }));
        this._formattingService.formatUnderlineChange.subscribe((/**
         * @param {?} underline
         * @return {?}
         */
        function (underline) {
            _this.underline = underline;
            _this.toggleUnderline();
        }));
        this._formattingService.formatItalicChange.subscribe((/**
         * @param {?} italic
         * @return {?}
         */
        function (italic) {
            _this.italic = italic;
            _this.toggleItalic();
        }));
        this._formattingService.formatColorChange.subscribe(((/**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            _this.color = color;
            _this.setColor(color);
        })));
        this._formattingService.formatBgColorChange.subscribe(((/**
         * @param {?} bgcolor
         * @return {?}
         */
        function (bgcolor) {
            _this.bgColor = bgcolor;
            _this.setBgColor(bgcolor);
        })));
        this._formattingService.formatFontSizeChange.subscribe(((/**
         * @param {?} fontSize
         * @return {?}
         */
        function (fontSize) {
            _this.setFontSize(fontSize);
        })));
        this._formattingService.formatFontChange.subscribe(((/**
         * @param {?} font
         * @return {?}
         */
        function (font) {
            _this.font = font;
            _this.setFont(font);
        })));
        this._formattingService.formatStrikeoutChange.subscribe((/**
         * @param {?} strikeout
         * @return {?}
         */
        function (strikeout) {
            _this.strikeout = strikeout;
            _this.toggleStrikeout();
        }));
        this._formattingService.formatAlignChange.subscribe((/**
         * @param {?} align
         * @return {?}
         */
        function (align) {
            _this.align = align;
            _this.toggleAlign(_this.align);
        }));
        this._formattingService.formatListChange.subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            _this.list = list;
            _this.toggleList(_this.list);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    FormattingDirective.prototype.toggleBold = /**
     * @private
     * @return {?}
     */
    function () {
        document.execCommand("bold");
        this._selectionService.refreshSelection();
    };
    /**
     * @private
     * @return {?}
     */
    FormattingDirective.prototype.toggleUnderline = /**
     * @private
     * @return {?}
     */
    function () {
        document.execCommand("underline");
        this._selectionService.refreshSelection();
    };
    /**
     * @private
     * @return {?}
     */
    FormattingDirective.prototype.toggleItalic = /**
     * @private
     * @return {?}
     */
    function () {
        document.execCommand("italic");
        this._selectionService.refreshSelection();
    };
    /**
     * @private
     * @param {?} bgColor
     * @return {?}
     */
    FormattingDirective.prototype.setBgColor = /**
     * @private
     * @param {?} bgColor
     * @return {?}
     */
    function (bgColor) {
        document.execCommand("backColor", false, bgColor);
        this._selectionService.refreshSelection();
    };
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    FormattingDirective.prototype.setColor = /**
     * @private
     * @param {?} color
     * @return {?}
     */
    function (color) {
        document.execCommand("foreColor", false, color);
        this._selectionService.refreshSelection();
    };
    /**
     * @private
     * @param {?} fontSize
     * @return {?}
     */
    FormattingDirective.prototype.setFontSize = /**
     * @private
     * @param {?} fontSize
     * @return {?}
     */
    function (fontSize) {
        if (document.getSelection().toString()) {
            /** @type {?} */
            var spanString = "<span style='font-size: " + fontSize + "px; color: " + this.color + "; background-color: " + this.bgColor + "; font-family: " + this.font + "'>" +
                document.getSelection() + "</span>";
            if (this.bold) {
                spanString = "<b>" + spanString + "</b>";
            }
            if (this.italic) {
                spanString = "<i>" + spanString + "</i>";
            }
            if (this.underline) {
                spanString = "<u>" + spanString + "</u>";
            }
            if (this.strikeout) {
                spanString = "<strike>" + spanString + "</strike>";
            }
            document.execCommand('insertHTML', false, spanString);
        }
        else {
            document.execCommand("fontsize", false, "7");
        }
        this._selectionService.refreshSelection();
    };
    /**
     * @private
     * @return {?}
     */
    FormattingDirective.prototype.toggleUndo = /**
     * @private
     * @return {?}
     */
    function () {
        document.execCommand("undo");
    };
    /**
     * @private
     * @return {?}
     */
    FormattingDirective.prototype.toggleRedo = /**
     * @private
     * @return {?}
     */
    function () {
        document.execCommand("redo");
    };
    /**
     * @private
     * @param {?} font
     * @return {?}
     */
    FormattingDirective.prototype.setFont = /**
     * @private
     * @param {?} font
     * @return {?}
     */
    function (font) {
        document.execCommand("fontName", false, font);
        this._selectionService.refreshSelection();
    };
    /**
     * @private
     * @return {?}
     */
    FormattingDirective.prototype.toggleStrikeout = /**
     * @private
     * @return {?}
     */
    function () {
        document.execCommand("strikeThrough");
        this._selectionService.refreshSelection();
    };
    /**
     * @private
     * @param {?} align
     * @return {?}
     */
    FormattingDirective.prototype.toggleAlign = /**
     * @private
     * @param {?} align
     * @return {?}
     */
    function (align) {
        if (this.isIE) {
            this.toggleAlignIE(align);
            return;
        }
        document.execCommand("styleWithCSS", false, 'true');
        switch (align) {
            case 'center':
                document.execCommand('justifyCenter');
                break;
            case 'full':
                document.execCommand('justifyFull');
                break;
            case 'left':
                document.execCommand('justifyLeft');
                break;
            case 'right':
                document.execCommand('justifyRight');
                break;
        }
        this._selectionService.refreshSelection();
    };
    /**
     * @private
     * @param {?} align
     * @return {?}
     */
    FormattingDirective.prototype.toggleAlignIE = /**
     * @private
     * @param {?} align
     * @return {?}
     */
    function (align) {
        this._selectionService.restoreSelection();
        this._selectionService.captureSelection();
        /** @type {?} */
        var selection = window.getSelection().focusNode.parentNode.parentNode;
        if (align === "full") {
            align = "justify";
        }
        $$5(selection).css("text-align", align);
        this._selectionService.refreshSelection();
    };
    /**
     * @private
     * @param {?} list
     * @return {?}
     */
    FormattingDirective.prototype.toggleList = /**
     * @private
     * @param {?} list
     * @return {?}
     */
    function (list) {
        switch (list) {
            case 'unordered':
                document.execCommand('insertUnorderedList');
                break;
            case 'ordered':
                document.execCommand('insertOrderedList');
                break;
        }
        this._selectionService.refreshSelection();
    };
    FormattingDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[gdFormatting]'
                },] }
    ];
    /** @nocollapse */
    FormattingDirective.ctorParameters = function () { return [
        { type: FormattingService },
        { type: BackFormattingService },
        { type: SelectionService }
    ]; };
    FormattingDirective.propDecorators = {
        mouseup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseup',] }]
    };
    return FormattingDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SuccessModalComponent = /** @class */ (function () {
    function SuccessModalComponent() {
    }
    /**
     * @return {?}
     */
    SuccessModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SuccessModalComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-success-modal',
                    template: "<gd-modal id=\"gd-success-modal\" [title]=\"'Saved'\">\n<div id=\"gd-modal-success\"><div class=\"check_mark\">\n    <div class=\"sa-icon sa-success animate\">\n        <span class=\"sa-line sa-tip animateSuccessTip\"></span>\n        <span class=\"sa-line sa-long animateSuccessLong\"></span>\n        <div class=\"sa-placeholder\"></div>\n        <div class=\"sa-fix\"></div>\n      </div>\n  </div></div>\n  </gd-modal>\n",
                    styles: [".check_mark{margin:47px auto}.sa-icon{width:80px;height:80px;border:4px solid gray;border-radius:50%;padding:0;position:relative;box-sizing:content-box}#gd-modal-success{display:flex;overflow:hidden;width:469px;height:183px}.sa-icon.sa-success{border-color:#4caf50;transform:scale(1.18)}.sa-icon.sa-success::after,.sa-icon.sa-success::before{content:'';position:absolute;width:60px;height:120px;background:#fff}.sa-icon.sa-success::before{border-radius:120px 0 0 120px;top:-7px;left:-33px;transform:rotate(-45deg);transform-origin:60px 60px}.sa-icon.sa-success::after{border-radius:0 120px 120px 0;top:-11px;left:30px;transform:rotate(-45deg);transform-origin:0 60px}.sa-icon.sa-success .sa-placeholder{width:80px;height:80px;border:4px solid rgba(76,175,80,.5);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.sa-icon.sa-success .sa-fix{width:5px;height:90px;background-color:#fff;position:absolute;left:28px;top:8px;z-index:1;transform:rotate(-45deg)}.sa-icon.sa-success.animate::after{-webkit-animation:4.25s ease-in rotatePlaceholder;animation:4.25s ease-in rotatePlaceholder}.animateSuccessTip{-webkit-animation:.75s animateSuccessTip;animation:.75s animateSuccessTip}.animateSuccessLong{-webkit-animation:.75s animateSuccessLong;animation:.75s animateSuccessLong}@-webkit-keyframes animateSuccessLong{0%,65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}100%{width:47px;right:8px;top:38px}}@-webkit-keyframes animateSuccessTip{0%,54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}100%{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%,54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}100%{width:25px;left:14px;top:45px}}@keyframes animateSuccessLong{0%,65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}100%{width:47px;right:8px;top:38px}}.sa-icon.sa-success .sa-line{height:5px;background-color:#4caf50;display:block;border-radius:2px;position:absolute;z-index:2}.sa-icon.sa-success .sa-line.sa-tip{width:25px;left:14px;top:46px;transform:rotate(45deg)}.sa-icon.sa-success .sa-line.sa-long{width:47px;right:8px;top:38px;transform:rotate(-45deg)}@-webkit-keyframes rotatePlaceholder{0%,5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}100%,12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%,5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}100%,12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}@media (max-width:1037px){#gd-modal-success{left:50%;top:50%;position:relative;transform:translate(-50%,-50%)}}"]
                }] }
    ];
    /** @nocollapse */
    SuccessModalComponent.ctorParameters = function () { return []; };
    return SuccessModalComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EditHtmlService = /** @class */ (function () {
    function EditHtmlService() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._htmlContent = this._observer.asObservable();
    }
    Object.defineProperty(EditHtmlService.prototype, "observer", {
        get: /**
         * @return {?}
         */
        function () {
            return this._observer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditHtmlService.prototype, "htmlContent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._htmlContent;
        },
        enumerable: true,
        configurable: true
    });
    EditHtmlService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EditHtmlService.ctorParameters = function () { return []; };
    /** @nocollapse */ EditHtmlService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function EditHtmlService_Factory() { return new EditHtmlService(); }, token: EditHtmlService, providedIn: "root" });
    return EditHtmlService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EditorDirective = /** @class */ (function () {
    function EditorDirective(_selectionService, _htmlService) {
        this._selectionService = _selectionService;
        this._htmlService = _htmlService;
        this.isIE =  !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    EditorDirective.prototype.onInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.text = event.target;
        if (this.isIE) {
            if (this.text.innerHTML) {
                /** @type {?} */
                var html = this.text.innerHTML.toString();
                this._htmlService.observer.next(html);
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    EditorDirective.prototype.onMouseleave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._selectionService.captureSelection();
        // this code is required to fix IE11 issue - it doesn't trigger blur event, since that we need to save updated HTML here
        if (this.isIE) {
            this._htmlService.observer.next(event.target.innerHTML.toString());
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    EditorDirective.prototype.onBlur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this._selectionService.restoreSelection();
        if (this.text.innerHTML) {
            /** @type {?} */
            var html = this.text.innerHTML.toString();
            this._htmlService.observer.next(html);
        }
        else {
            this._htmlService.observer.next(event.target.innerHTML.toString());
        }
    };
    EditorDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[gdEditor]'
                },] }
    ];
    /** @nocollapse */
    EditorDirective.ctorParameters = function () { return [
        { type: SelectionService },
        { type: EditHtmlService }
    ]; };
    EditorDirective.propDecorators = {
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup', ['$event'],] }],
        onMouseleave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave', ['$event'],] }],
        onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur', ['$event'],] }]
    };
    return EditorDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingMaskService = /** @class */ (function () {
    function LoadingMaskService() {
        this.onLoadingChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stopList = [];
        this.requests = [];
        this.stopList.push(Api.SAVE_TEXT);
        this.stopList.push(Api.SAVE_OPTICAL_CODE);
    }
    /**
     * @param {?} req
     * @return {?}
     */
    LoadingMaskService.prototype.onRequestStart = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        /** @type {?} */
        var stop = this.stopList.find((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return req.url.includes(x); }));
        if (!stop) {
            this.requests.push(req);
            this.notify();
        }
    };
    /**
     * @param {?} req
     * @return {?}
     */
    LoadingMaskService.prototype.onRequestFinish = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        /** @type {?} */
        var index = this.requests.indexOf(req);
        if (index !== -1) {
            this.requests.splice(index, 1);
        }
        this.notify();
    };
    /**
     * @private
     * @return {?}
     */
    LoadingMaskService.prototype.notify = /**
     * @private
     * @return {?}
     */
    function () {
        this.onLoadingChanged.emit(this.requests.length !== 0);
    };
    LoadingMaskService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    LoadingMaskService.ctorParameters = function () { return []; };
    return LoadingMaskService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingMaskComponent = /** @class */ (function () {
    function LoadingMaskComponent(_loadingMaskService) {
        this._loadingMaskService = _loadingMaskService;
        this.loadingMask = false;
    }
    /**
     * @return {?}
     */
    LoadingMaskComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LoadingMaskComponent.prototype.ngAfterViewInit = /**
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
        function (loading) { return _this.loadingMask = loading; }));
    };
    LoadingMaskComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-loading-mask',
                    template: "<div class=\"loading-wrapper\" *ngIf=\"loadingMask\">\n    <div class=\"loading-message\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;Loading... Please wait.\n    </div>\n</div>\n",
                    styles: [".loading-wrapper{background:rgba(0,0,0,.5);width:100%;height:100%;font-size:14px;color:#fff;position:fixed;top:0;left:0;z-index:99999}.loading-message{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}"]
                }] }
    ];
    /** @nocollapse */
    LoadingMaskComponent.ctorParameters = function () { return [
        { type: LoadingMaskService }
    ]; };
    LoadingMaskComponent.propDecorators = {
        loadingMask: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return LoadingMaskComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingMaskInterceptorService = /** @class */ (function () {
    function LoadingMaskInterceptorService(_loadingMaskService) {
        this._loadingMaskService = _loadingMaskService;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    LoadingMaskInterceptorService.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        var _this = this;
        this._loadingMaskService.onRequestStart(req);
        /** @type {?} */
        var callback = (/**
         * @return {?}
         */
        function () { return _this._loadingMaskService.onRequestFinish(req); });
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(callback));
    };
    LoadingMaskInterceptorService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LoadingMaskInterceptorService.ctorParameters = function () { return [
        { type: LoadingMaskService }
    ]; };
    /** @nocollapse */ LoadingMaskInterceptorService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function LoadingMaskInterceptorService_Factory() { return new LoadingMaskInterceptorService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LoadingMaskService)); }, token: LoadingMaskInterceptorService, providedIn: "root" });
    return LoadingMaskInterceptorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var horizontalAlignment = {
    center: {
        right: 'auto'
    },
    left: {
        right: '100%'
    },
    right: {
        right: '-100%'
    }
};
/** @type {?} */
var verticalAlignment = {
    center: {
        top: '0px',
    },
    top: {
        top: '-100%',
        right: '100%'
    },
    bottom: {
        top: 'autos'
    }
};
/**
 *  DropDownToggleComponent
 */
var DropDownToggleComponent = /** @class */ (function () {
    function DropDownToggleComponent(dropdown) {
        var _this = this;
        this.dropdown = dropdown;
        this.click = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.dropdown.toggle(event); });
    }
    DropDownToggleComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-drop-down-toggle',
                    template: '<ng-content></ng-content>',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
                }] }
    ];
    /** @nocollapse */
    DropDownToggleComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                         * @return {?}
                         */
                        function () { return DropDownComponent; })),] }] }
    ]; };
    DropDownToggleComponent.propDecorators = {
        click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }]
    };
    return DropDownToggleComponent;
}());
/**
 *  DropDownItemsComponent
 */
var DropDownItemsComponent = /** @class */ (function () {
    function DropDownItemsComponent(dropdown) {
        this.dropdown = dropdown;
    }
    Object.defineProperty(DropDownItemsComponent.prototype, "horizontalAlign", {
        get: /**
         * @return {?}
         */
        function () {
            return horizontalAlignment[this.dropdown.getPlacement().h].right;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownItemsComponent.prototype, "verticalAlign", {
        get: /**
         * @return {?}
         */
        function () {
            return verticalAlignment[this.dropdown.getPlacement().v].top;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownItemsComponent.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dropdown.open;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    DropDownItemsComponent.prototype.onClickOutside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.dropdown.close();
    };
    DropDownItemsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-drop-down-items',
                    template: '<div class="drop-down-items" (clickOutside)="onClickOutside($event)" [clickOutsideEnabled]="isOpen" [style.right]="horizontalAlign" [style.top]="verticalAlign"><ng-content></ng-content></div>',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
                }] }
    ];
    /** @nocollapse */
    DropDownItemsComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                         * @return {?}
                         */
                        function () { return DropDownComponent; })),] }] }
    ]; };
    return DropDownItemsComponent;
}());
/**
 *  DropDownItemComponent
 */
var DropDownItemComponent = /** @class */ (function () {
    function DropDownItemComponent(dropdown) {
        var _this = this;
        this.dropdown = dropdown;
        this.class = 'drop-down-item';
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.click = (/**
         * @return {?}
         */
        function () { return _this.selectEntry(); });
    }
    /**
     * @return {?}
     */
    DropDownItemComponent.prototype.selectEntry = /**
     * @return {?}
     */
    function () {
        this.selected.next();
        this.dropdown.close();
    };
    DropDownItemComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-drop-down-item',
                    template: '<div class="drop-down-item"><ng-content></ng-content></div>',
                    styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
                }] }
    ];
    /** @nocollapse */
    DropDownItemComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                         * @return {?}
                         */
                        function () { return DropDownComponent; })),] }] }
    ]; };
    DropDownItemComponent.propDecorators = {
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
    };
    return DropDownItemComponent;
}());
/**
 *  DropDownComponent
 */
var DropDownComponent = /** @class */ (function () {
    function DropDownComponent() {
        this.placement = {
            h: "center",
            v: "bottom"
        };
        this.open = false;
        this.class = 'drop-down';
    }
    /**
     * @return {?}
     */
    DropDownComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.open = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DropDownComponent.prototype.toggle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.open = !this.open;
        document.body.click();
    };
    /**
     * @return {?}
     */
    DropDownComponent.prototype.getPlacement = /**
     * @return {?}
     */
    function () {
        return this.placement;
    };
    DropDownComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-drop-down',
                    template: '<div class="drop-down"><ng-content></ng-content></div>',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
                }] }
    ];
    DropDownComponent.propDecorators = {
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.show',] }],
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }]
    };
    return DropDownComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LeftSideBarComponent = /** @class */ (function () {
    function LeftSideBarComponent() {
        this.showSpinner = false;
    }
    /**
     * @return {?}
     */
    LeftSideBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    LeftSideBarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-left-side-bar',
                    template: "<div class=\"left-panel\">\n  <div class=\"gd-left-bar-fade\" *ngIf=\"showSpinner\">\n    <div class=\"gd-left-bar-spinner\"><i class=\"fa fa-circle-o-notch fa-spin\"></i> &nbsp;Loading...\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                    styles: [".left-panel{border-radius:0;float:left}.gd-left-bar-fade{margin:auto;overflow:hidden;-webkit-overflow-scrolling:touch;transition:transform .3s ease-out;width:100%;height:100%;display:flex;justify-content:center;align-items:center;position:fixed;z-index:1000}@media (max-width:1037px){.gd-left-bar-fade{top:100px;right:0}.gd-left-bar-spinner{top:20%}}"]
                }] }
    ];
    /** @nocollapse */
    LeftSideBarComponent.ctorParameters = function () { return []; };
    LeftSideBarComponent.propDecorators = {
        showSpinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return LeftSideBarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective() {
        this.showToolTip = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onHovering = /**
     * @return {?}
     */
    function () {
        this.showToolTip.emit(true);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onUnhovering = /**
     * @return {?}
     */
    function () {
        this.showToolTip.emit(false);
    };
    TooltipDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[gdTooltip]'
                },] }
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return []; };
    TooltipDirective.propDecorators = {
        showToolTip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onHovering: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter',] }],
        onUnhovering: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] }]
    };
    return TooltipDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddDynamicComponentService = /** @class */ (function () {
    function AddDynamicComponentService(_factoryResolver, _appRef) {
        this._factoryResolver = _factoryResolver;
        this._appRef = _appRef;
    }
    /**
     * @param {?} viewContainerRef
     * @param {?} component
     * @return {?}
     */
    AddDynamicComponentService.prototype.addDynamicComponent = /**
     * @param {?} viewContainerRef
     * @param {?} component
     * @return {?}
     */
    function (viewContainerRef, component) {
        var _this = this;
        /** @type {?} */
        var factory = this._factoryResolver.resolveComponentFactory(component);
        /** @type {?} */
        var componentRef = viewContainerRef.createComponent(factory);
        componentRef.onDestroy((/**
         * @return {?}
         */
        function () {
            _this._appRef.detachView(componentRef.hostView);
        }));
        return componentRef;
    };
    AddDynamicComponentService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AddDynamicComponentService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }
    ]; };
    /** @nocollapse */ AddDynamicComponentService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AddDynamicComponentService_Factory() { return new AddDynamicComponentService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"])); }, token: AddDynamicComponentService, providedIn: "root" });
    return AddDynamicComponentService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HostingDynamicComponentService = /** @class */ (function () {
    function HostingDynamicComponentService() {
        this.hosts = [];
    }
    /**
     * @param {?} host
     * @return {?}
     */
    HostingDynamicComponentService.prototype.add = /**
     * @param {?} host
     * @return {?}
     */
    function (host) {
        this.hosts = this.hosts.filter((/**
         * @param {?} h
         * @return {?}
         */
        function (h) {
            return h.ident !== host.ident;
        }));
        this.hosts.push(host);
    };
    /**
     * @param {?} host
     * @return {?}
     */
    HostingDynamicComponentService.prototype.remove = /**
     * @param {?} host
     * @return {?}
     */
    function (host) {
        this.hosts = this.hosts.filter((/**
         * @param {?} h
         * @return {?}
         */
        function (h) {
            return h.ident !== host.ident;
        }));
    };
    /**
     * @param {?} ident
     * @return {?}
     */
    HostingDynamicComponentService.prototype.find = /**
     * @param {?} ident
     * @return {?}
     */
    function (ident) {
        return this.hosts.find((/**
         * @param {?} h
         * @return {?}
         */
        function (h) {
            return h.ident === ident;
        }));
    };
    return HostingDynamicComponentService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HostDynamicDirective = /** @class */ (function () {
    function HostDynamicDirective(viewContainerRef, _hostingService) {
        this.viewContainerRef = viewContainerRef;
        this._hostingService = _hostingService;
    }
    /**
     * @return {?}
     */
    HostDynamicDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._hostingService.add(this);
    };
    /**
     * @return {?}
     */
    HostDynamicDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._hostingService.remove(this);
        this.viewContainerRef.clear();
    };
    HostDynamicDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[gdHostDynamic]'
                },] }
    ];
    /** @nocollapse */
    HostDynamicDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: HostingDynamicComponentService }
    ]; };
    HostDynamicDirective.propDecorators = {
        ident: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return HostDynamicDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $$6 = jquery__WEBPACK_IMPORTED_MODULE_9__;
var ResizingComponent = /** @class */ (function () {
    function ResizingComponent() {
        this.se = false;
        this.ne = false;
        this.sw = false;
        this.nw = false;
        this.SE = 'se';
        this.NE = 'ne';
        this.SW = 'sw';
        this.NW = 'nw';
        this.offsetX = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.offsetY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.offsetTop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.offsetLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.release = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.grab = false;
    }
    /**
     * @return {?}
     */
    ResizingComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var elSE = $$6(this.getElementId(this.SE));
        /** @type {?} */
        var elNW = $$6(this.getElementId(this.NW));
        if (this.init && elSE && elNW && elSE.offset() && elNW.offset()) {
            /** @type {?} */
            var width_1 = elSE.offset().left - elNW.offset().left;
            /** @type {?} */
            var height_1 = elSE.offset().top - elNW.offset().top;
            if (width_1 >= this.pageWidth) {
                width_1 = this.pageWidth / 2;
            }
            if (height_1 >= this.pageHeight) {
                height_1 = this.pageHeight / 2;
            }
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.offsetX.emit(width_1);
                _this.offsetY.emit(height_1);
            }), 100);
        }
    };
    /**
     * @return {?}
     */
    ResizingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ResizingComponent.prototype.catchUp = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        // ff
        $event.preventDefault();
        if ($event.dataTransfer) { // ff
            $event.dataTransfer.setData('text', 'foo');
        }
        this.grab = true;
        this.oldPosition = Utils.getMousePosition($event);
    };
    /**
     * @param {?} $event
     * @param {?} el
     * @return {?}
     */
    ResizingComponent.prototype.resize = /**
     * @param {?} $event
     * @param {?} el
     * @return {?}
     */
    function ($event, el) {
        if (!this.grab) {
            return;
        }
        /** @type {?} */
        var position = Utils.getMousePosition($event);
        if (position.x === 0 && position.y === 0) {
            return;
        }
        /** @type {?} */
        var notSW = this.NE === el || this.NW === el;
        /** @type {?} */
        var notNE = this.SW === el || this.NW === el;
        this.setOffsets(position, notNE, notSW);
        if (notSW) {
            this.offsetTop.emit(position.y - this.oldPosition.y);
        }
        if (notNE) {
            this.offsetLeft.emit(position.x - this.oldPosition.x);
        }
        this.oldPosition = position;
    };
    /**
     * @private
     * @param {?} position
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    ResizingComponent.prototype.setOffsets = /**
     * @private
     * @param {?} position
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (position, x, y) {
        /** @type {?} */
        var offsetX = x ? this.oldPosition.x - position.x : position.x - this.oldPosition.x;
        /** @type {?} */
        var offsetY = y ? this.oldPosition.y - position.y : position.y - this.oldPosition.y;
        this.offsetX.emit(offsetX);
        this.offsetY.emit(offsetY);
    };
    /**
     * @param {?} $event
     * @param {?} el
     * @return {?}
     */
    ResizingComponent.prototype.end = /**
     * @param {?} $event
     * @param {?} el
     * @return {?}
     */
    function ($event, el) {
        // ff
        this.resize($event, el);
        this.release.emit(true);
        this.grab = false;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ResizingComponent.prototype.start = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.drop($event);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ResizingComponent.prototype.drop = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
    };
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    ResizingComponent.prototype.getElementId = /**
     * @private
     * @param {?} el
     * @return {?}
     */
    function (el) {
        return "#" + el + "-" + this.id;
    };
    ResizingComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-resizing',
                    template: "<div class=\"ui-resizable-handle se-resize\" id=\"se-{{id}}\" *ngIf=\"se\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, SE)\" (dragend)=\"end($event, SE)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\n      (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, SE)\" (panend)=\"end($event, SE)\"></div>\n\n<div class=\"ui-resizable-handle ne-resize\" id=\"ne-{{id}}\" *ngIf=\"ne\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, NE)\" (dragend)=\"end($event, NE)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\n     (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, NE)\" (panend)=\"end($event, NE)\"></div>\n\n<div class=\"ui-resizable-handle sw-resize\" id=\"sw-{{id}}\" *ngIf=\"sw\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, SW)\" (dragend)=\"end($event, SW)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\n     (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, SW)\" (panend)=\"end($event, SW)\"></div>\n\n<div class=\"ui-resizable-handle nw-resize\" id=\"nw-{{id}}\" *ngIf=\"nw\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, NW)\" (dragend)=\"end($event, NW)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\n     (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, NW)\" (panend)=\"end($event, NW)\"></div>\n",
                    styles: [".ui-resizable-handle{background-color:#679ffa;width:8px;height:8px;border-radius:100%;position:absolute;font-size:.1px;display:block}.se-resize{bottom:-5px;right:-5px;cursor:se-resize}.ne-resize{top:-5px;right:-5px;cursor:ne-resize}.sw-resize{bottom:-5px;left:-5px;cursor:sw-resize}.nw-resize{top:-5px;left:-5px;cursor:nw-resize}"]
                }] }
    ];
    /** @nocollapse */
    ResizingComponent.ctorParameters = function () { return []; };
    ResizingComponent.propDecorators = {
        init: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        se: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ne: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sw: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        nw: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        offsetY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        offsetTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        offsetLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        release: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ResizingComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var providers = [ConfigService,
    Api,
    ModalService,
    FileService,
    FileModel,
    FileUtil,
    Utils,
    SanitizeHtmlPipe,
    SanitizeResourceHtmlPipe,
    SanitizeStylePipe,
    HighlightSearchPipe,
    UploadFilesService,
    RenderPrintService,
    NavigateService,
    PagePreloadService,
    ZoomService,
    ExceptionMessageService,
    PasswordService,
    ErrorInterceptorService,
    SearchService,
    WindowService,
    ViewportService,
    FormattingService,
    BackFormattingService,
    OnCloseService,
    LoadingMaskInterceptorService,
    LoadingMaskService,
    TabActivatorService,
    AddDynamicComponentService,
    HostingDynamicComponentService];
var CommonComponentsModule = /** @class */ (function () {
    function CommonComponentsModule() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["far"]);
    }
    CommonComponentsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_13__["ClickOutsideModule"]],
                    declarations: [
                        TopToolbarComponent,
                        SidePanelComponent,
                        ButtonComponent,
                        LogoComponent,
                        TooltipComponent,
                        ModalComponent,
                        BrowseFilesModalComponent,
                        DocumentComponent,
                        PageComponent,
                        SanitizeHtmlPipe,
                        SanitizeResourceHtmlPipe,
                        SanitizeStylePipe,
                        HighlightSearchPipe,
                        UploadFileZoneComponent,
                        DndDirective,
                        ScrollableDirective,
                        ZoomDirective,
                        SelectComponent,
                        DisabledCursorDirective,
                        RotationDirective,
                        InitStateComponent,
                        RenderPrintDirective,
                        ErrorModalComponent,
                        PasswordRequiredComponent,
                        SearchComponent,
                        SearchableDirective,
                        TabbedToolbarsComponent,
                        TabComponent,
                        TabsComponent,
                        ColorPickerComponent,
                        FormattingDirective,
                        SuccessModalComponent,
                        EditorDirective,
                        LoadingMaskComponent,
                        DropDownComponent,
                        DropDownItemComponent,
                        DropDownItemsComponent,
                        DropDownToggleComponent,
                        LeftSideBarComponent,
                        TooltipDirective,
                        HostDynamicDirective,
                        ResizingComponent
                    ],
                    exports: [
                        TopToolbarComponent,
                        SidePanelComponent,
                        ButtonComponent,
                        LogoComponent,
                        TooltipComponent,
                        ModalComponent,
                        BrowseFilesModalComponent,
                        DocumentComponent,
                        PageComponent,
                        SanitizeResourceHtmlPipe,
                        SanitizeStylePipe,
                        HighlightSearchPipe,
                        SanitizeHtmlPipe,
                        UploadFileZoneComponent,
                        ScrollableDirective,
                        SelectComponent,
                        RotationDirective,
                        InitStateComponent,
                        RenderPrintDirective,
                        ErrorModalComponent,
                        PasswordRequiredComponent,
                        SearchComponent,
                        SearchableDirective,
                        TabbedToolbarsComponent,
                        TabComponent,
                        TabsComponent,
                        ColorPickerComponent,
                        FormattingDirective,
                        SuccessModalComponent,
                        LoadingMaskComponent,
                        DndDirective,
                        DropDownComponent,
                        DropDownItemComponent,
                        DropDownItemsComponent,
                        DropDownToggleComponent,
                        LeftSideBarComponent,
                        TooltipDirective,
                        HostDynamicDirective,
                        ResizingComponent
                    ],
                    providers: providers
                },] }
    ];
    /** @nocollapse */
    CommonComponentsModule.ctorParameters = function () { return []; };
    return CommonComponentsModule;
}());


//# sourceMappingURL=groupdocs.examples.angular-common-components.js.map


/***/ }),

/***/ "../../libs/comparison/src/index.ts":
/*!***********************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/index.ts ***!
  \***********************************************************************************/
/*! exports provided: initializeApp, setupLoadingInterceptor, ComparisonModule, Files, Highlight, ComparisonAppComponent, ComparisonConfigService, ComparisonConfig, ComparisonService, ComparedPageModel, CompareResult, ChangeInfo, StyleChange, Rectangle, PageInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_comparison_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/comparison.module */ "../../libs/comparison/src/lib/comparison.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return _lib_comparison_module__WEBPACK_IMPORTED_MODULE_0__["initializeApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupLoadingInterceptor", function() { return _lib_comparison_module__WEBPACK_IMPORTED_MODULE_0__["setupLoadingInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComparisonModule", function() { return _lib_comparison_module__WEBPACK_IMPORTED_MODULE_0__["ComparisonModule"]; });

/* harmony import */ var _lib_comparison_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/comparison-app.component */ "../../libs/comparison/src/lib/comparison-app.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Files", function() { return _lib_comparison_app_component__WEBPACK_IMPORTED_MODULE_1__["Files"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Highlight", function() { return _lib_comparison_app_component__WEBPACK_IMPORTED_MODULE_1__["Highlight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComparisonAppComponent", function() { return _lib_comparison_app_component__WEBPACK_IMPORTED_MODULE_1__["ComparisonAppComponent"]; });

/* harmony import */ var _lib_comparison_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/comparison-config.service */ "../../libs/comparison/src/lib/comparison-config.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComparisonConfigService", function() { return _lib_comparison_config_service__WEBPACK_IMPORTED_MODULE_2__["ComparisonConfigService"]; });

/* harmony import */ var _lib_comparison_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/comparison-config */ "../../libs/comparison/src/lib/comparison-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComparisonConfig", function() { return _lib_comparison_config__WEBPACK_IMPORTED_MODULE_3__["ComparisonConfig"]; });

/* harmony import */ var _lib_comparison_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/comparison.service */ "../../libs/comparison/src/lib/comparison.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComparisonService", function() { return _lib_comparison_service__WEBPACK_IMPORTED_MODULE_4__["ComparisonService"]; });

/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/models */ "../../libs/comparison/src/lib/models.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComparedPageModel", function() { return _lib_models__WEBPACK_IMPORTED_MODULE_5__["ComparedPageModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompareResult", function() { return _lib_models__WEBPACK_IMPORTED_MODULE_5__["CompareResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangeInfo", function() { return _lib_models__WEBPACK_IMPORTED_MODULE_5__["ChangeInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleChange", function() { return _lib_models__WEBPACK_IMPORTED_MODULE_5__["StyleChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _lib_models__WEBPACK_IMPORTED_MODULE_5__["Rectangle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageInfo", function() { return _lib_models__WEBPACK_IMPORTED_MODULE_5__["PageInfo"]; });









/***/ }),

/***/ "../../libs/comparison/src/lib/add-file-panel/add-file-panel.component.less":
/*!***************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/add-file-panel/add-file-panel.component.less ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  border-bottom: 1px solid #CCC;\n}\n.wrapper {\n  height: 37px;\n  background-color: #FFFFFF;\n  display: flex;\n}\n.upload-wrapper {\n  display: flex;\n  width: 100%;\n}\n.url-input {\n  border: 0;\n  height: 37px;\n  width: 100%;\n  padding-left: 5px;\n  margin: 0px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  outline: none;\n}\n.compare-file-name {\n  color: #959da5;\n  margin: 8px;\n  width: 100%;\n  text-align: left;\n}\n.ng-fa-icon {\n  color: #959DA5;\n  margin: 9px 15px 0px 13px;\n  font-size: 14px;\n}\n.compare-file {\n  width: 100%;\n  border-right: 2px solid #ddd;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb21wYXJpc29uL3NyYy9saWIvYWRkLWZpbGUtcGFuZWwvYWRkLWZpbGUtcGFuZWwuY29tcG9uZW50Lmxlc3MiLCJsaWJzL2NvbXBhcmlzb24vc3JjL2xpYi9hZGQtZmlsZS1wYW5lbC9hZGQtZmlsZS1wYW5lbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0FDQ0Y7QURFQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNBRjtBREdBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNERjtBRElBO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNGRjtBRE1BO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNKRjtBRE9BO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0xGO0FEUUE7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7QUNORiIsImZpbGUiOiJsaWJzL2NvbXBhcmlzb24vc3JjL2xpYi9hZGQtZmlsZS1wYW5lbC9hZGQtZmlsZS1wYW5lbC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQztcbn1cblxuLndyYXBwZXIge1xuICBoZWlnaHQ6IDM3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi51cGxvYWQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udXJsLWlucHV0IHtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDM3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cblxuLmNvbXBhcmUtZmlsZS1uYW1lIHtcbiAgY29sb3I6ICM5NTlkYTU7XG4gIG1hcmdpbjogOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm5nLWZhLWljb24ge1xuICBjb2xvcjogIzk1OURBNTtcbiAgbWFyZ2luOiA5cHggMTVweCAwcHggMTNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29tcGFyZS1maWxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNkZGQ7XG59XG4iLCI6aG9zdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDO1xufVxuLndyYXBwZXIge1xuICBoZWlnaHQ6IDM3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udXBsb2FkLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi51cmwtaW5wdXQge1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMzdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5jb21wYXJlLWZpbGUtbmFtZSB7XG4gIGNvbG9yOiAjOTU5ZGE1O1xuICBtYXJnaW46IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubmctZmEtaWNvbiB7XG4gIGNvbG9yOiAjOTU5REE1O1xuICBtYXJnaW46IDlweCAxNXB4IDBweCAxM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY29tcGFyZS1maWxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNkZGQ7XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/comparison/src/lib/add-file-panel/add-file-panel.component.ts":
/*!*************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/add-file-panel/add-file-panel.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: States, AddFilePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "States", function() { return States; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFilePanelComponent", function() { return AddFilePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");



var States = /** @class */ (function () {
    function States() {
    }
    States.Empty = 'empty';
    States.Opened = 'opened';
    return States;
}());

var AddFilePanelComponent = /** @class */ (function () {
    function AddFilePanelComponent(_modalService, _excMessageService) {
        this._modalService = _modalService;
        this._excMessageService = _excMessageService;
        this.active = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.urlForUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cleanPanel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.state = States.Empty;
        this.uploadDisabled = true;
    }
    AddFilePanelComponent.prototype.ngOnInit = function () {
    };
    AddFilePanelComponent.prototype.getFormatIcon = function () {
        return _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["FileUtil"].find(this.fileName, false).icon;
    };
    AddFilePanelComponent.prototype.openModal = function () {
        this.active.emit(this.panel);
        this._modalService.open(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["CommonModals"].BrowseFiles);
    };
    AddFilePanelComponent.prototype.isEmpty = function () {
        return this.state === States.Empty;
    };
    AddFilePanelComponent.prototype.cleanFile = function () {
        this.active.emit(this.panel);
        this.cleanPanel.emit(true);
    };
    AddFilePanelComponent.prototype.uploadUrl = function (url) {
        if (this.uploadDisabled) {
            return;
        }
        if (url && (url.startsWith('http') || url.startsWith('file') || url.startsWith('ftp'))) {
            this.active.emit(this.panel);
            this.urlForUpload.emit(url);
        }
        else {
            this._modalService.open(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["CommonModals"].ErrorMessage);
            this._excMessageService.changeMessage("Wrong url");
        }
    };
    AddFilePanelComponent.prototype.checkDisabled = function (url) {
        this.uploadDisabled = url ? url.length === 0 : true;
    };
    AddFilePanelComponent.prototype.ngOnChanges = function (changes) {
        if (this.fileName) {
            this.state = States.Opened;
        }
        else {
            this.state = States.Empty;
        }
    };
    AddFilePanelComponent.ctorParameters = function () { return [
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ModalService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ExceptionMessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AddFilePanelComponent.prototype, "panel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddFilePanelComponent.prototype, "active", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddFilePanelComponent.prototype, "urlForUpload", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddFilePanelComponent.prototype, "cleanPanel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AddFilePanelComponent.prototype, "fileName", void 0);
    AddFilePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-add-file-panel',
            template: __webpack_require__(/*! raw-loader!./add-file-panel.component.html */ "../../node_modules/raw-loader/index.js!../../libs/comparison/src/lib/add-file-panel/add-file-panel.component.html"),
            styles: [__webpack_require__(/*! ./add-file-panel.component.less */ "../../libs/comparison/src/lib/add-file-panel/add-file-panel.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ModalService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ExceptionMessageService"]])
    ], AddFilePanelComponent);
    return AddFilePanelComponent;
}());



/***/ }),

/***/ "../../libs/comparison/src/lib/comparison-app.component.less":
/*!************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/comparison-app.component.less ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i&display=swap');\n:host * {\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n}\n.wrapper {\n  align-items: stretch;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.loader {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.upload-compare-file {\n  height: 100%;\n  width: 50%;\n  border-right: 1px solid #CCC;\n  display: flex;\n  align-content: center;\n  flex-direction: column;\n  text-align: center;\n  flex-grow: 0;\n}\n.open-file-panel {\n  display: flex;\n  width: 100%;\n}\n.files-panel {\n  background-color: #E7E7E7;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n}\n.result-panel {\n  background-color: #E7E7E7;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-content: center;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n.doc-panel {\n  display: flex;\n  height: inherit;\n}\n.gd-document {\n  width: 100%;\n  height: 100%;\n}\n.top-panel {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.toolbar-panel {\n  background-color: #3e4e5a;\n  width: 100%;\n}\n.row {\n  display: flex;\n  height: inherit;\n}\n.column {\n  width: 100%;\n}\n.tabs-wrapper {\n  display: flex;\n  justify-self: flex-end;\n  align-self: flex-end;\n  width: 100%;\n  justify-content: flex-end;\n}\n.tabs {\n  display: flex;\n  margin-right: 30px;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n::ng-deep .gd-page-image {\n  height: 100% !important;\n  width: 100% !important;\n}\n@media (max-width: 1037px) {\n  .files-panel {\n    flex-direction: column;\n  }\n  .files-panel .upload-compare-file {\n    width: 100%;\n    border-bottom: 1px solid #CCC;\n  }\n   /deep/ .gd-side-panel-wrapper {\n    height: 50% !important;\n    top: inherit !important;\n    bottom: 0px !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY29tcGFyaXNvbi9zcmMvbGliL2NvbXBhcmlzb24tYXBwLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL2VsZW5rby9wcm9qZWN0cy9Hcm91cERvY3MuVG90YWwtQW5ndWxhci9saWJzL2NvbXBhcmlzb24vc3JjL2xpYi9jb21wYXJpc29uLWFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrRkNDa0I7QUFFbEI7RUFDRSxzREFBQTtBRERGO0FDSUE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QURGRjtBQ0tBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QURIRjtBQ01BO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FESkY7QUNPQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FETEY7QUNRQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURORjtBQ1NBO0VBQ0UseUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBRFJGO0FDV0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBRFRGO0FDWUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRFZGO0FDYUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FEWEY7QUNjQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBRFpGO0FDZUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBRGJGO0FDZ0JBO0VBQ0UsV0FBQTtBRGRGO0FDaUJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QURmRjtBQ2tCQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QURoQkY7QUNtQkE7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0FEakJGO0FDb0JBO0VBQ0U7SUFDRSxzQkFBQTtFRGxCRjtFQ2lCQTtJQUdJLFdBQUE7SUFDQSw2QkFBQTtFRGpCSjtHQ3FCQTtJQUNJLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxzQkFBQTtFRG5CSjtBQUNGIiwiZmlsZSI6ImxpYnMvY29tcGFyaXNvbi9zcmMvbGliL2NvbXBhcmlzb24tYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDQwMGksNzAwLDcwMGkmZGlzcGxheT1zd2FwJyk7XG46aG9zdCAqIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuLndyYXBwZXIge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4ubG9hZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi51cGxvYWQtY29tcGFyZS1maWxlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTAlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQ0NDO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxleC1ncm93OiAwO1xufVxuLm9wZW4tZmlsZS1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZpbGVzLXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U3RTdFNztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5yZXN1bHQtcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFN0U3O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZG9jLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuLmdkLWRvY3VtZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi50b3AtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi50b29sYmFyLXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlNGU1YTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuLmNvbHVtbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRhYnMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi50YWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG46Om5nLWRlZXAgLmdkLXBhZ2UtaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDM3cHgpIHtcbiAgLmZpbGVzLXBhbmVsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5maWxlcy1wYW5lbCAudXBsb2FkLWNvbXBhcmUtZmlsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XG4gIH1cbiAgIC9kZWVwLyAuZ2Qtc2lkZS1wYW5lbC13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDUwJSAhaW1wb3J0YW50O1xuICAgIHRvcDogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9jb21tb24tY29tcG9uZW50cy9zcmMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCAoY3NzKSB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDQwMGksNzAwLDcwMGkmZGlzcGxheT1zd2FwJyk7XG5cbjpob3N0ICoge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi53cmFwcGVyIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubG9hZGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udXBsb2FkLWNvbXBhcmUtZmlsZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDUwJTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0NDQztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtZ3JvdzogMDtcbn1cblxuLm9wZW4tZmlsZS1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmlsZXMtcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFN0U3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmVzdWx0LXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U3RTdFNztcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZG9jLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uZ2QtZG9jdW1lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udG9wLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b29sYmFyLXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlNGU1YTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5jb2x1bW4ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRhYnMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnRhYnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuOjpuZy1kZWVwIC5nZC1wYWdlLWltYWdlIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBAcGhvbmUtZG93biB7XG4gIC5maWxlcy1wYW5lbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAudXBsb2FkLWNvbXBhcmUtZmlsZXtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XG4gICAgfVxuICB9XG5cbiAgL2RlZXAvIC5nZC1zaWRlLXBhbmVsLXdyYXBwZXJ7XG4gICAgICBoZWlnaHQ6IDUwJSAhaW1wb3J0YW50O1xuICAgICAgdG9wOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICBib3R0b206IDBweCAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/comparison/src/lib/comparison-app.component.ts":
/*!**********************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/comparison-app.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: Files, Highlight, ComparisonAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Files", function() { return Files; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Highlight", function() { return Highlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparisonAppComponent", function() { return ComparisonAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _comparison_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comparison-config.service */ "../../libs/comparison/src/lib/comparison-config.service.ts");
/* harmony import */ var _comparison_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comparison.service */ "../../libs/comparison/src/lib/comparison.service.ts");






var $ = jquery__WEBPACK_IMPORTED_MODULE_2__;
var Files = /** @class */ (function () {
    function Files() {
    }
    Files.FIRST = 'first';
    Files.SECOND = 'second';
    return Files;
}());

var Highlight = /** @class */ (function () {
    function Highlight() {
        this.active = false;
    }
    return Highlight;
}());

var ComparisonAppComponent = /** @class */ (function () {
    function ComparisonAppComponent(_comparisonService, configService, uploadFilesService, pagePreloadService, _modalService, _tabActivatorService, _elementRef) {
        var _this = this;
        this._comparisonService = _comparisonService;
        this.configService = configService;
        this._modalService = _modalService;
        this._tabActivatorService = _tabActivatorService;
        this._elementRef = _elementRef;
        this.files = [];
        this.browseFilesModal = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].BrowseFiles;
        this.credentials = new Map();
        this.file = new Map();
        this.first = Files.FIRST;
        this.second = Files.SECOND;
        this.firstFileName = undefined;
        this.secondFileName = undefined;
        this.loadingFirstPanel = false;
        this.loadingSecondPanel = false;
        this.countPages = 0;
        this.filesTab = 'files';
        this.resultTab = 'result';
        this.activeTab = this.filesTab;
        this.resultTabDisabled = true;
        configService.updatedConfig.subscribe(function (config) {
            _this.comparisonConfig = config;
        });
        pagePreloadService.checkPreload.subscribe(function (page) {
            if (_this.comparisonConfig.preloadResultPageCount !== 0) {
                _this.checkPreload(_this.first, page);
                _this.checkPreload(_this.second, page);
            }
        });
        uploadFilesService.uploadsChange.subscribe(function (uploads) {
            var active = _this.activePanel;
            _this.setLoading(active, true);
            if (uploads) {
                var i = void 0;
                for (i = 0; i < uploads.length; i++) {
                    _this._comparisonService.upload(uploads.item(i), '', _this.rewriteConfig).subscribe(function (obj) {
                        _this.getFile(obj.guid, '', active);
                        _this.selectDir('');
                    });
                }
            }
        });
        _tabActivatorService.activeTabChange.subscribe(function (tabId) {
            _this.activeTab = tabId;
        });
    }
    ComparisonAppComponent.prototype.setLoading = function (panel, flag) {
        if (panel === this.first) {
            this.loadingFirstPanel = flag;
        }
        else {
            this.loadingSecondPanel = flag;
        }
    };
    Object.defineProperty(ComparisonAppComponent.prototype, "rewriteConfig", {
        get: function () {
            return this.comparisonConfig ? this.comparisonConfig.rewrite : true;
        },
        enumerable: true,
        configurable: true
    });
    ComparisonAppComponent.prototype.selectDir = function ($event) {
        var _this = this;
        this._comparisonService.loadFiles($event).subscribe(function (files) {
            var nameExt;
            if (_this.credentials.get(_this.first)) {
                nameExt = _this.credentials.get(_this.first).guid.split('.').pop();
            }
            else if (_this.credentials.get(_this.second)) {
                nameExt = _this.credentials.get(_this.second).guid.split('.').pop();
            }
            if (nameExt) {
                files = files.filter(function (value) {
                    return value.directory || value.guid.split('.').pop() === nameExt;
                });
            }
            _this.files = files || [];
        });
    };
    ComparisonAppComponent.prototype.selectFile = function ($event, password, modalId, param) {
        this.setLoading(param, true);
        this.getFile($event, password, param);
        this.selectDir('');
        this._modalService.close(modalId);
        this.clearData(param);
    };
    ComparisonAppComponent.prototype.getFile = function ($event, password, param) {
        var _this = this;
        var credentials = { guid: $event, password: password };
        this.credentials.set(param, credentials);
        this._comparisonService.loadFile(credentials).subscribe(function (file) {
            _this.file.set(param, file);
            if (file) {
                var preloadResultPageCount = _this.comparisonConfig.preloadResultPageCount;
                _this.countPages = file.pages ? file.pages.length : 0;
                if (preloadResultPageCount > 0) {
                    _this.preloadPages(param, 1, preloadResultPageCount > _this.countPages ? _this.countPages : preloadResultPageCount);
                }
            }
            _this.updateFileNames();
            _this.setLoading(param, false);
        });
    };
    ComparisonAppComponent.prototype.clearFile = function (param) {
        this.clearData(param);
        this.credentials.delete(param);
        this.result = null;
        this.resultTabDisabled = true;
        this._tabActivatorService.changeActiveTab(this.filesTab);
    };
    ComparisonAppComponent.prototype.clearData = function (param) {
        if (!this.file || !this.file.size) {
            return;
        }
        this.file.delete(param);
        if (param === this.first) {
            this.firstFileName = undefined;
        }
        else {
            this.secondFileName = undefined;
        }
    };
    ComparisonAppComponent.prototype.preloadPages = function (param, start, end) {
        var _this = this;
        var _loop_1 = function (i) {
            this_1._comparisonService.loadPage(this_1.credentials.get(param), i).subscribe(function (page) {
                _this.file.get(param).pages[i - 1] = page;
            });
        };
        var this_1 = this;
        for (var i = start; i <= end; i++) {
            _loop_1(i);
        }
    };
    ComparisonAppComponent.prototype.upload = function ($event) {
        var _this = this;
        var active = this.activePanel;
        this._comparisonService.upload(null, $event, this.rewriteConfig).subscribe(function (obj) {
            _this.getFile(obj.guid, '', active);
            _this.selectDir('');
        });
    };
    ComparisonAppComponent.prototype.updateFileNames = function () {
        this.firstFileName = this.getFirstFileName();
        this.secondFileName = this.getSecondFileName();
    };
    ComparisonAppComponent.prototype.getSecondFileName = function () {
        var fileCredentials = this.credentials ? this.credentials.get(this.second) : undefined;
        return fileCredentials ? fileCredentials.guid.replace(/^.*[\\\/]/, '') : '';
    };
    ComparisonAppComponent.prototype.getFirstFileName = function () {
        var fileCredentials = this.credentials ? this.credentials.get(this.first) : undefined;
        return fileCredentials ? fileCredentials.guid.replace(/^.*[\\\/]/, '') : '';
    };
    ComparisonAppComponent.prototype.checkPreload = function (panel, page) {
        if (!this.file.get(panel)) {
            return;
        }
        for (var i = page; i < page + 2; i++) {
            if (i > 0 && i <= this.countPages && !this.file.get(panel).pages[i - 1].data) {
                this.preloadPages(panel, i, i);
            }
        }
    };
    ComparisonAppComponent.prototype.compare = function () {
        var _this = this;
        if (this.credentials.size !== 2) {
            return;
        }
        this.resultTabDisabled = false;
        var arr = [];
        arr.push(this.credentials.get(this.first));
        arr.push(this.credentials.get(this.second));
        this._comparisonService.compare(arr).subscribe(function (result) {
            _this.result = result;
            var isZeroBasedPageId = _this.result.changes.find(function (change) { return change.pageInfo.id === 0; });
            _this.result.changes.forEach(function (change) {
                change.id = _this.generateRandomInteger();
                var zeroBasedId = isZeroBasedPageId ? change.pageInfo.id : change.pageInfo.id - 1;
                change.pageInfo.id = isZeroBasedPageId ? change.pageInfo.id : change.pageInfo.id - 1;
                if (!_this.result.pages[zeroBasedId].changes) {
                    _this.result.pages[zeroBasedId].changes = [];
                }
                _this.result.pages[zeroBasedId].changes.push(change);
                change.normalized = {
                    x: change.box.x * 100 / change.pageInfo.width,
                    y: change.box.y * 100 / change.pageInfo.height,
                    width: change.box.width * 100 / change.pageInfo.width,
                    height: change.box.height * 100 / change.pageInfo.height,
                };
            });
        }, (function (err) {
            _this.resultTabDisabled = true;
            _this._tabActivatorService.changeActiveTab(_this.filesTab);
        }));
        this._tabActivatorService.changeActiveTab(this.resultTab);
    };
    ComparisonAppComponent.prototype.generateRandomInteger = function () {
        function _p8(s) {
            var p = (Math.random().toString(16) + "000000000").substr(2, 8);
            return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
        }
        return _p8(null) + _p8(true) + _p8(true) + _p8(null);
    };
    ComparisonAppComponent.prototype.download = function () {
        if (!this.result) {
            return;
        }
        var credentials = { 'guid': this.result.guid, 'password': '' };
        window.location.assign(this._comparisonService.getDownloadUrl(credentials));
    };
    ComparisonAppComponent.prototype.hideSidePanel = function ($event) {
        this.activeTab = $event ? this.filesTab : this.resultTab;
        this._tabActivatorService.changeActiveTab(this.filesTab);
    };
    ComparisonAppComponent.ctorParameters = function () { return [
        { type: _comparison_service__WEBPACK_IMPORTED_MODULE_5__["ComparisonService"] },
        { type: _comparison_config_service__WEBPACK_IMPORTED_MODULE_4__["ComparisonConfigService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["UploadFilesService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["PagePreloadService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ModalService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["TabActivatorService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    ComparisonAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-comparison',
            template: __webpack_require__(/*! raw-loader!./comparison-app.component.html */ "../../node_modules/raw-loader/index.js!../../libs/comparison/src/lib/comparison-app.component.html"),
            styles: [__webpack_require__(/*! ./comparison-app.component.less */ "../../libs/comparison/src/lib/comparison-app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_comparison_service__WEBPACK_IMPORTED_MODULE_5__["ComparisonService"],
            _comparison_config_service__WEBPACK_IMPORTED_MODULE_4__["ComparisonConfigService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["UploadFilesService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["PagePreloadService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ModalService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["TabActivatorService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ComparisonAppComponent);
    return ComparisonAppComponent;
}());



/***/ }),

/***/ "../../libs/comparison/src/lib/comparison-config.service.ts":
/*!***********************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/comparison-config.service.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ComparisonConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparisonConfigService", function() { return ComparisonConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _comparison_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comparison-config */ "../../libs/comparison/src/lib/comparison-config.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");






var ComparisonConfigService = /** @class */ (function () {
    function ComparisonConfigService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._comparisonConfig = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](new _comparison_config__WEBPACK_IMPORTED_MODULE_2__["ComparisonConfig"]());
        this._updatedConfig = this._comparisonConfig.asObservable();
    }
    Object.defineProperty(ComparisonConfigService.prototype, "updatedConfig", {
        get: function () {
            return this._updatedConfig;
        },
        enumerable: true,
        configurable: true
    });
    ComparisonConfigService.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var configEndpoint = _this._config.getConfigEndpoint(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].COMPARISON_APP);
            _this._http.get(configEndpoint, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson).toPromise().then(function (response) {
                var comparisonConfig = response;
                _this._comparisonConfig.next(comparisonConfig);
                resolve();
            }).catch(function (response) {
                reject("Could not load comparison config: " + JSON.stringify(response));
            });
        });
    };
    ComparisonConfigService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    ComparisonConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], ComparisonConfigService);
    return ComparisonConfigService;
}());



/***/ }),

/***/ "../../libs/comparison/src/lib/comparison-config.ts":
/*!***************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/comparison-config.ts ***!
  \***************************************************************************************************/
/*! exports provided: ComparisonConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparisonConfig", function() { return ComparisonConfig; });
var ComparisonConfig = /** @class */ (function () {
    function ComparisonConfig() {
    }
    return ComparisonConfig;
}());



/***/ }),

/***/ "../../libs/comparison/src/lib/comparison.module.ts":
/*!***************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/comparison.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: initializeApp, setupLoadingInterceptor, ComparisonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return initializeApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupLoadingInterceptor", function() { return setupLoadingInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparisonModule", function() { return ComparisonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _comparison_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comparison-app.component */ "../../libs/comparison/src/lib/comparison-app.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "../../node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "../../node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _comparison_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comparison.service */ "../../libs/comparison/src/lib/comparison.service.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _comparison_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comparison-config.service */ "../../libs/comparison/src/lib/comparison-config.service.ts");
/* harmony import */ var _add_file_panel_add_file_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-file-panel/add-file-panel.component */ "../../libs/comparison/src/lib/add-file-panel/add-file-panel.component.ts");
/* harmony import */ var _upload_file_panel_upload_file_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./upload-file-panel/upload-file-panel.component */ "../../libs/comparison/src/lib/upload-file-panel/upload-file-panel.component.ts");
/* harmony import */ var _difference_difference_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./difference/difference.component */ "../../libs/comparison/src/lib/difference/difference.component.ts");
/* harmony import */ var _difference_highlight_difference_highlight_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./difference-highlight/difference-highlight.component */ "../../libs/comparison/src/lib/difference-highlight/difference-highlight.component.ts");
/* harmony import */ var _result_document_result_document_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./result-document/result-document.component */ "../../libs/comparison/src/lib/result-document/result-document.component.ts");
/* harmony import */ var _differences_differences_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./differences/differences.component */ "../../libs/comparison/src/lib/differences/differences.component.ts");
/* harmony import */ var _differences_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./differences.service */ "../../libs/comparison/src/lib/differences.service.ts");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-click-outside */ "../../node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_19__);




















function initializeApp(comparisonConfigService) {
    var result = function () { return comparisonConfigService.load(); };
    return result;
}
// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
function setupLoadingInterceptor(service) {
    return new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_10__["LoadingMaskInterceptorService"](service);
}
var ComparisonModule = /** @class */ (function () {
    function ComparisonModule() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__["far"]);
    }
    ComparisonModule_1 = ComparisonModule;
    ComparisonModule.forRoot = function (apiEndpoint) {
        _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_10__["Api"].DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: ComparisonModule_1
        };
    };
    var ComparisonModule_1;
    ComparisonModule = ComparisonModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_comparison_app_component__WEBPACK_IMPORTED_MODULE_4__["ComparisonAppComponent"], _add_file_panel_add_file_panel_component__WEBPACK_IMPORTED_MODULE_12__["AddFilePanelComponent"], _upload_file_panel_upload_file_panel_component__WEBPACK_IMPORTED_MODULE_13__["UploadFilePanelComponent"], _difference_difference_component__WEBPACK_IMPORTED_MODULE_14__["DifferenceComponent"], _difference_highlight_difference_highlight_component__WEBPACK_IMPORTED_MODULE_15__["DifferenceHighlightComponent"], _result_document_result_document_component__WEBPACK_IMPORTED_MODULE_16__["ResultDocumentComponent"], _differences_differences_component__WEBPACK_IMPORTED_MODULE_17__["DifferencesComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_10__["CommonComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_19__["ClickOutsideModule"]
            ],
            exports: [
                _comparison_app_component__WEBPACK_IMPORTED_MODULE_4__["ComparisonAppComponent"],
                _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_10__["CommonComponentsModule"],
                _result_document_result_document_component__WEBPACK_IMPORTED_MODULE_16__["ResultDocumentComponent"],
                _differences_differences_component__WEBPACK_IMPORTED_MODULE_17__["DifferencesComponent"]
            ],
            providers: [
                _comparison_service__WEBPACK_IMPORTED_MODULE_9__["ComparisonService"],
                _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_10__["ConfigService"],
                _differences_service__WEBPACK_IMPORTED_MODULE_18__["DifferencesService"],
                _comparison_config_service__WEBPACK_IMPORTED_MODULE_11__["ComparisonConfigService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                    useFactory: initializeApp,
                    deps: [_comparison_config_service__WEBPACK_IMPORTED_MODULE_11__["ComparisonConfigService"]],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptorService"],
                    multi: true
                },
                _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_10__["LoadingMaskService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useFactory: setupLoadingInterceptor,
                    multi: true,
                    deps: [_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_10__["LoadingMaskService"]]
                }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ComparisonModule);
    return ComparisonModule;
}());



/***/ }),

/***/ "../../libs/comparison/src/lib/comparison.service.ts":
/*!****************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/comparison.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: ComparisonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparisonService", function() { return ComparisonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");




var ComparisonService = /** @class */ (function () {
    function ComparisonService(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    ComparisonService.prototype.loadFiles = function (path) {
        return this._http.post(this._config.getComparisonApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_FILE_TREE, { 'path': path }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    ComparisonService.prototype.getFormats = function () {
        return this._http.get(this._config.getComparisonApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_FORMATS, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    ComparisonService.prototype.loadFile = function (credentials) {
        return this._http.post(this._config.getComparisonApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_DOCUMENT_DESCRIPTION, credentials, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    ComparisonService.prototype.upload = function (file, url, rewrite) {
        var formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getComparisonApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].UPLOAD_DOCUMENTS, formData);
    };
    ComparisonService.prototype.save = function (file) {
        return this._http.post(this._config.getComparisonApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].SAVE_FILE, file, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    ComparisonService.prototype.getDownloadUrl = function (credentials) {
        return this._config.getComparisonApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].DOWNLOAD_DOCUMENTS + '/?guid=' + credentials.guid;
    };
    ComparisonService.prototype.loadPage = function (credentials, page) {
        return this._http.post(this._config.getComparisonApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'page': page
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    ComparisonService.prototype.compare = function (arr) {
        return this._http.post(this._config.getComparisonApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].COMPARE_FILES, { 'guids': arr }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    ComparisonService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    ComparisonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], ComparisonService);
    return ComparisonService;
}());



/***/ }),

/***/ "../../libs/comparison/src/lib/difference-highlight/difference-highlight.component.less":
/*!***************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/difference-highlight/difference-highlight.component.less ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".highlight-difference {\n  position: absolute;\n  cursor: pointer;\n  z-index: 1;\n}\n.highlight-difference.active {\n  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);\n  z-index: 999;\n}\n.gd-difference.active {\n  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);\n  z-index: 999;\n}\n.gd-difference-1 {\n  background-color: rgba(0, 122, 255, 0.4);\n}\n.gd-difference-2,\n.gd-difference-4 {\n  background-color: rgba(46, 237, 0, 0.4);\n}\n.gd-difference-3 {\n  background-color: rgba(237, 0, 0, 0.4);\n}\n.gd-difference-6 {\n  background-color: rgba(215, 224, 0, 0.4);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb21wYXJpc29uL3NyYy9saWIvZGlmZmVyZW5jZS1oaWdobGlnaHQvZGlmZmVyZW5jZS1oaWdobGlnaHQuY29tcG9uZW50Lmxlc3MiLCJsaWJzL2NvbXBhcmlzb24vc3JjL2xpYi9kaWZmZXJlbmNlLWhpZ2hsaWdodC9kaWZmZXJlbmNlLWhpZ2hsaWdodC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNGLFVBQUE7QUNDQTtBREVBO0VBQ0UsMkNBQUE7RUFDQSxZQUFBO0FDQUY7QURHQTtFQUNFLDJDQUFBO0VBQ0EsWUFBQTtBQ0RGO0FESUE7RUFDRSx3Q0FBQTtBQ0ZGO0FES0E7O0VBQ0UsdUNBQUE7QUNGRjtBREtBO0VBQ0Usc0NBQUE7QUNIRjtBRE1BO0VBQ0Usd0NBQUE7QUNKRiIsImZpbGUiOiJsaWJzL2NvbXBhcmlzb24vc3JjL2xpYi9kaWZmZXJlbmNlLWhpZ2hsaWdodC9kaWZmZXJlbmNlLWhpZ2hsaWdodC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWdobGlnaHQtZGlmZmVyZW5jZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuei1pbmRleDogMTtcbn1cblxuLmhpZ2hsaWdodC1kaWZmZXJlbmNlLmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDk5OTlweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmdkLWRpZmZlcmVuY2UuYWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgOTk5OXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uZ2QtZGlmZmVyZW5jZS0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjIsIDI1NSwgMC40KTtcbn1cblxuLmdkLWRpZmZlcmVuY2UtMiwgLmdkLWRpZmZlcmVuY2UtNCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDYsIDIzNywgMCwgMC40KTtcbn1cblxuLmdkLWRpZmZlcmVuY2UtMyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM3LCAwLCAwLCAwLjQpO1xufVxuXG4uZ2QtZGlmZmVyZW5jZS02IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTUsIDIyNCwgMCwgMC40KTtcbn1cbiIsIi5oaWdobGlnaHQtZGlmZmVyZW5jZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxO1xufVxuLmhpZ2hsaWdodC1kaWZmZXJlbmNlLmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDk5OTlweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDk5OTtcbn1cbi5nZC1kaWZmZXJlbmNlLmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDk5OTlweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDk5OTtcbn1cbi5nZC1kaWZmZXJlbmNlLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyMiwgMjU1LCAwLjQpO1xufVxuLmdkLWRpZmZlcmVuY2UtMixcbi5nZC1kaWZmZXJlbmNlLTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ2LCAyMzcsIDAsIDAuNCk7XG59XG4uZ2QtZGlmZmVyZW5jZS0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzcsIDAsIDAsIDAuNCk7XG59XG4uZ2QtZGlmZmVyZW5jZS02IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTUsIDIyNCwgMCwgMC40KTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "../../libs/comparison/src/lib/difference-highlight/difference-highlight.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/difference-highlight/difference-highlight.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: DifferenceHighlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DifferenceHighlightComponent", function() { return DifferenceHighlightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "../../libs/comparison/src/lib/models.ts");
/* harmony import */ var _differences_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differences.service */ "../../libs/comparison/src/lib/differences.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





var $ = jquery__WEBPACK_IMPORTED_MODULE_4__;
var DifferenceHighlightComponent = /** @class */ (function () {
    function DifferenceHighlightComponent(changeService) {
        this.changesService = changeService;
    }
    DifferenceHighlightComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changesService.activeChange.subscribe(function (activeID) { return _this.active = _this.change.id === activeID; });
    };
    DifferenceHighlightComponent.prototype.close = function (event) {
        this.changesService.setActiveChange(null);
    };
    DifferenceHighlightComponent.prototype.highlight = function (id) {
        this.changesService.setActiveChange(id);
    };
    DifferenceHighlightComponent.ctorParameters = function () { return [
        { type: _differences_service__WEBPACK_IMPORTED_MODULE_3__["DifferencesService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models__WEBPACK_IMPORTED_MODULE_2__["ChangeInfo"])
    ], DifferenceHighlightComponent.prototype, "change", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DifferenceHighlightComponent.prototype, "active", void 0);
    DifferenceHighlightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-difference-highlight',
            template: __webpack_require__(/*! raw-loader!./difference-highlight.component.html */ "../../node_modules/raw-loader/index.js!../../libs/comparison/src/lib/difference-highlight/difference-highlight.component.html"),
            styles: [__webpack_require__(/*! ./difference-highlight.component.less */ "../../libs/comparison/src/lib/difference-highlight/difference-highlight.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_differences_service__WEBPACK_IMPORTED_MODULE_3__["DifferencesService"]])
    ], DifferenceHighlightComponent);
    return DifferenceHighlightComponent;
}());



/***/ }),

/***/ "../../libs/comparison/src/lib/difference/difference.component.less":
/*!*******************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/difference/difference.component.less ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-difference {\n  flex-flow: row wrap;\n  border-bottom: 1px solid #eee;\n  cursor: pointer;\n}\n.gd-difference.active {\n  background-color: #f2f2f2;\n}\n.gd-difference:hover {\n  background-color: #e5e5e5;\n}\n.gd-difference .gd-difference-title-wrapper {\n  display: flex;\n  flex-direction: row;\n  align-content: stretch;\n  padding: 15px 15px 20px 20px;\n}\n.gd-difference .gd-difference-title-wrapper fa-icon {\n  font-size: 14px;\n}\n.gd-difference .gd-difference-title-wrapper .fa-arrow-right {\n  color: #16B901;\n}\n.gd-difference .gd-difference-title-wrapper .fa-pencil-alt {\n  color: #CED600;\n}\n.gd-difference .gd-difference-title-wrapper .fa-times {\n  color: #B96401;\n}\n.gd-difference .gd-difference-title-wrapper .gd-difference-body {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-left: 15px;\n}\n.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-difference-title {\n  color: #222E35;\n  font-size: 13px;\n  font-weight: bold;\n}\n.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-differentce-comment {\n  color: #959DA5;\n  font-size: 13px;\n  padding-top: 10px;\n  overflow: hidden;\n  /*prevent text from being shown outside the border */\n  text-overflow: ellipsis;\n}\n.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-differentce-comment .color {\n  vertical-align: text-bottom;\n  width: 14px;\n  height: 14px;\n  display: inline-block;\n  border: 1px solid #CCC;\n  border-radius: 100%;\n}\n.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-differentce-comment .property {\n  padding-left: 1em;\n}\n.gd-difference .gd-difference-title-wrapper .gd-difference-page {\n  color: rgba(149, 157, 165, 0.48);\n  font-size: 11px;\n  white-space: nowrap;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb21wYXJpc29uL3NyYy9saWIvZGlmZmVyZW5jZS9kaWZmZXJlbmNlLmNvbXBvbmVudC5sZXNzIiwibGlicy9jb21wYXJpc29uL3NyYy9saWIvZGlmZmVyZW5jZS9kaWZmZXJlbmNlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNDRjtBRENFO0VBQ0UseUJBQUE7QUNDSjtBREVFO0VBQ0UseUJBQUE7QUNBSjtBRFZBO0VBZUksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0ZKO0FEaEJBO0VBcUJNLGVBQUE7QUNGTjtBRG5CQTtFQXdCTSxjQUFBO0FDRk47QUR0QkE7RUEyQk0sY0FBQTtBQ0ZOO0FEekJBO0VBOEJNLGNBQUE7QUNGTjtBRDVCQTtFQWtDTSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNITjtBRGxDQTtFQXdDUSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDSFI7QUR2Q0E7RUE4Q1EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VDSk4sb0RBQW9EO0VESzlDLHVCQUFBO0FDSFI7QUQvQ0E7RUFxRFUsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0hWO0FEdkRBO0VBNkRVLGlCQUFBO0FDSFY7QUQxREE7RUFrRU0sZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNMTiIsImZpbGUiOiJsaWJzL2NvbXBhcmlzb24vc3JjL2xpYi9kaWZmZXJlbmNlL2RpZmZlcmVuY2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2QtZGlmZmVyZW5jZSB7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJi5hY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgfVxuXG4gICY6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbiAgfVxuXG5cbiAgLmdkLWRpZmZlcmVuY2UtdGl0bGUtd3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMjBweCAyMHB4O1xuXG4gICAgZmEtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5mYS1hcnJvdy1yaWdodCB7XG4gICAgICBjb2xvcjogIzE2QjkwMTtcbiAgICB9XG4gICAgLmZhLXBlbmNpbC1hbHQge1xuICAgICAgY29sb3I6ICNDRUQ2MDA7XG4gICAgfVxuICAgIC5mYS10aW1lcyB7XG4gICAgICBjb2xvcjogI0I5NjQwMTtcbiAgICB9XG5cbiAgICAuZ2QtZGlmZmVyZW5jZS1ib2R5e1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcblxuICAgICAgLmdkLWRpZmZlcmVuY2UtdGl0bGUge1xuICAgICAgICBjb2xvcjogIzIyMkUzNTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgLmdkLWRpZmZlcmVudGNlLWNvbW1lbnQge1xuICAgICAgICBjb2xvcjogIzk1OURBNTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgLypwcmV2ZW50IHRleHQgZnJvbSBiZWluZyBzaG93biBvdXRzaWRlIHRoZSBib3JkZXIgKi9cbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cbiAgICAgICAgLmNvbG9ye1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0M7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAucHJvcGVydHl7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmdkLWRpZmZlcmVuY2UtcGFnZSB7XG4gICAgICBjb2xvcjogcmdiYSgxNDksIDE1NywgMTY1LCAwLjQ4KTtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuICB9XG59XG5cblxuIiwiLmdkLWRpZmZlcmVuY2Uge1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmdkLWRpZmZlcmVuY2UuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cbi5nZC1kaWZmZXJlbmNlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbn1cbi5nZC1kaWZmZXJlbmNlIC5nZC1kaWZmZXJlbmNlLXRpdGxlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMjBweCAyMHB4O1xufVxuLmdkLWRpZmZlcmVuY2UgLmdkLWRpZmZlcmVuY2UtdGl0bGUtd3JhcHBlciBmYS1pY29uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmdkLWRpZmZlcmVuY2UgLmdkLWRpZmZlcmVuY2UtdGl0bGUtd3JhcHBlciAuZmEtYXJyb3ctcmlnaHQge1xuICBjb2xvcjogIzE2QjkwMTtcbn1cbi5nZC1kaWZmZXJlbmNlIC5nZC1kaWZmZXJlbmNlLXRpdGxlLXdyYXBwZXIgLmZhLXBlbmNpbC1hbHQge1xuICBjb2xvcjogI0NFRDYwMDtcbn1cbi5nZC1kaWZmZXJlbmNlIC5nZC1kaWZmZXJlbmNlLXRpdGxlLXdyYXBwZXIgLmZhLXRpbWVzIHtcbiAgY29sb3I6ICNCOTY0MDE7XG59XG4uZ2QtZGlmZmVyZW5jZSAuZ2QtZGlmZmVyZW5jZS10aXRsZS13cmFwcGVyIC5nZC1kaWZmZXJlbmNlLWJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLmdkLWRpZmZlcmVuY2UgLmdkLWRpZmZlcmVuY2UtdGl0bGUtd3JhcHBlciAuZ2QtZGlmZmVyZW5jZS1ib2R5IC5nZC1kaWZmZXJlbmNlLXRpdGxlIHtcbiAgY29sb3I6ICMyMjJFMzU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZ2QtZGlmZmVyZW5jZSAuZ2QtZGlmZmVyZW5jZS10aXRsZS13cmFwcGVyIC5nZC1kaWZmZXJlbmNlLWJvZHkgLmdkLWRpZmZlcmVudGNlLWNvbW1lbnQge1xuICBjb2xvcjogIzk1OURBNTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLypwcmV2ZW50IHRleHQgZnJvbSBiZWluZyBzaG93biBvdXRzaWRlIHRoZSBib3JkZXIgKi9cbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uZ2QtZGlmZmVyZW5jZSAuZ2QtZGlmZmVyZW5jZS10aXRsZS13cmFwcGVyIC5nZC1kaWZmZXJlbmNlLWJvZHkgLmdkLWRpZmZlcmVudGNlLWNvbW1lbnQgLmNvbG9yIHtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0M7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uZ2QtZGlmZmVyZW5jZSAuZ2QtZGlmZmVyZW5jZS10aXRsZS13cmFwcGVyIC5nZC1kaWZmZXJlbmNlLWJvZHkgLmdkLWRpZmZlcmVudGNlLWNvbW1lbnQgLnByb3BlcnR5IHtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG59XG4uZ2QtZGlmZmVyZW5jZSAuZ2QtZGlmZmVyZW5jZS10aXRsZS13cmFwcGVyIC5nZC1kaWZmZXJlbmNlLXBhZ2Uge1xuICBjb2xvcjogcmdiYSgxNDksIDE1NywgMTY1LCAwLjQ4KTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIl19 */"

/***/ }),

/***/ "../../libs/comparison/src/lib/difference/difference.component.ts":
/*!*****************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/difference/difference.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DifferenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DifferenceComponent", function() { return DifferenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "../../libs/comparison/src/lib/models.ts");
/* harmony import */ var _differences_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differences.service */ "../../libs/comparison/src/lib/differences.service.ts");




var DifferenceComponent = /** @class */ (function () {
    function DifferenceComponent(changeService) {
        this.changesService = changeService;
    }
    DifferenceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changesService.activeChange.subscribe(function (activeID) { return _this.active = _this.change.id === activeID; });
    };
    DifferenceComponent.prototype.getRgbaColor = function (value) {
        return "rgba(" + value.red + "," + value.green + "," + value.blue + "," + value.alpha + ")";
    };
    DifferenceComponent.ctorParameters = function () { return [
        { type: _differences_service__WEBPACK_IMPORTED_MODULE_3__["DifferencesService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models__WEBPACK_IMPORTED_MODULE_2__["ChangeInfo"])
    ], DifferenceComponent.prototype, "change", void 0);
    DifferenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-comparison-difference',
            template: __webpack_require__(/*! raw-loader!./difference.component.html */ "../../node_modules/raw-loader/index.js!../../libs/comparison/src/lib/difference/difference.component.html"),
            styles: [__webpack_require__(/*! ./difference.component.less */ "../../libs/comparison/src/lib/difference/difference.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_differences_service__WEBPACK_IMPORTED_MODULE_3__["DifferencesService"]])
    ], DifferenceComponent);
    return DifferenceComponent;
}());



/***/ }),

/***/ "../../libs/comparison/src/lib/differences.service.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/differences.service.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DifferencesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DifferencesService", function() { return DifferencesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");



var DifferencesService = /** @class */ (function () {
    function DifferencesService() {
        this._activeChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.activeChange = this._activeChange.asObservable();
    }
    DifferencesService.prototype.setActiveChange = function (id) {
        this._activeChange.next(id);
    };
    DifferencesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DifferencesService);
    return DifferencesService;
}());



/***/ }),

/***/ "../../libs/comparison/src/lib/differences/differences.component.less":
/*!*********************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/differences/differences.component.less ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2NvbXBhcmlzb24vc3JjL2xpYi9kaWZmZXJlbmNlcy9kaWZmZXJlbmNlcy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "../../libs/comparison/src/lib/differences/differences.component.ts":
/*!*******************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/differences/differences.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: DifferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DifferencesComponent", function() { return DifferencesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _differences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../differences.service */ "../../libs/comparison/src/lib/differences.service.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");




var DifferencesComponent = /** @class */ (function () {
    function DifferencesComponent(changeService, navigateService) {
        this.changes = [];
        this.changesService = changeService;
        this.navigateService = navigateService;
    }
    DifferencesComponent.prototype.ngOnInit = function () { };
    DifferencesComponent.prototype.highlightDifference = function (id, page, event) {
        event.stopPropagation();
        this.changesService.setActiveChange(id);
        this.navigateService.navigateTo(page + 1);
    };
    DifferencesComponent.ctorParameters = function () { return [
        { type: _differences_service__WEBPACK_IMPORTED_MODULE_2__["DifferencesService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["NavigateService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DifferencesComponent.prototype, "changes", void 0);
    DifferencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-differences',
            template: __webpack_require__(/*! raw-loader!./differences.component.html */ "../../node_modules/raw-loader/index.js!../../libs/comparison/src/lib/differences/differences.component.html"),
            styles: [__webpack_require__(/*! ./differences.component.less */ "../../libs/comparison/src/lib/differences/differences.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_differences_service__WEBPACK_IMPORTED_MODULE_2__["DifferencesService"], _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["NavigateService"]])
    ], DifferencesComponent);
    return DifferencesComponent;
}());



/***/ }),

/***/ "../../libs/comparison/src/lib/models.ts":
/*!****************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/models.ts ***!
  \****************************************************************************************/
/*! exports provided: ComparedPageModel, CompareResult, ChangeInfo, StyleChange, Rectangle, PageInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparedPageModel", function() { return ComparedPageModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareResult", function() { return CompareResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeInfo", function() { return ChangeInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleChange", function() { return StyleChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageInfo", function() { return PageInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");


var ComparedPageModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ComparedPageModel, _super);
    function ComparedPageModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ComparedPageModel;
}(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_1__["PageModel"]));

var CompareResult = /** @class */ (function () {
    function CompareResult() {
    }
    return CompareResult;
}());

var ChangeInfo = /** @class */ (function () {
    function ChangeInfo() {
    }
    return ChangeInfo;
}());

var StyleChange = /** @class */ (function () {
    function StyleChange() {
    }
    return StyleChange;
}());

var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    return Rectangle;
}());

var PageInfo = /** @class */ (function () {
    function PageInfo() {
    }
    return PageInfo;
}());



/***/ }),

/***/ "../../libs/comparison/src/lib/result-document/result-document.component.less":
/*!*****************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/result-document/result-document.component.less ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  overflow: scroll;\n}\n.document {\n  background-color: #e7e7e7;\n  width: 100%;\n  height: 100%;\n  transition: all 0.4s;\n  padding: 0px;\n  margin: 0px;\n  position: relative;\n}\n.page {\n  position: relative;\n  display: inline-block;\n  background-color: #ffffff;\n  margin: 20px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n  transition: all 0.3s;\n}\n.wait {\n  position: absolute;\n  top: 55px;\n  left: Calc(30%);\n}\n.panzoom {\n  transform: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform-origin: 50% 50% 0px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.gd-zoomed {\n  margin: 10px 98px;\n}\n.highlights {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px;\n}\n@media (max-width: 1037px) {\n  .document {\n    overflow-x: auto !important;\n  }\n  .panzoom {\n    flex-direction: column;\n  }\n  .page {\n    min-width: unset !important;\n    min-height: unset !important;\n    margin: 5px 0px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb21wYXJpc29uL3NyYy9saWIvcmVzdWx0LWRvY3VtZW50L3Jlc3VsdC1kb2N1bWVudC5jb21wb25lbnQubGVzcyIsImxpYnMvY29tcGFyaXNvbi9zcmMvbGliL3Jlc3VsdC1kb2N1bWVudC9yZXN1bHQtZG9jdW1lbnQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtBQ0RGO0FESUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRkY7QURLQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFHQSwyQ0FBQTtFQUNBLG9CQUFBO0FDSEY7QURNQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNKRjtBRE9BO0VBQ0UsZUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNMRjtBRFFBO0VBQ0UsaUJBQUE7QUNORjtBRFNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDUEY7QURVQTtFQUNFO0lBQ0UsMkJBQUE7RUNSRjtFRFdBO0lBQ0Usc0JBQUE7RUNURjtFRFlBO0lBQ0UsMkJBQUE7SUFDQSw0QkFBQTtJQUNBLGVBQUE7RUNWRjtBQUNGIiwiZmlsZSI6ImxpYnMvY29tcGFyaXNvbi9zcmMvbGliL3Jlc3VsdC1kb2N1bWVudC9yZXN1bHQtZG9jdW1lbnQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi9jb21tb24tY29tcG9uZW50cy9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5sZXNzXCI7XG5cbjpob3N0IHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLmRvY3VtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAyMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi53YWl0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU1cHg7XG4gIGxlZnQ6IENhbGMoNTAlIC0gMjBweCk7XG59XG5cbi5wYW56b29tIHtcbiAgdHJhbnNmb3JtOiBub25lO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCUgMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZ2Qtem9vbWVkIHtcbiAgbWFyZ2luOiAxMHB4IDk4cHg7XG59XG5cbi5oaWdobGlnaHRze1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMHB4O1xufVxuXG5AbWVkaWEgQHBob25lLWRvd24ge1xuICAuZG9jdW1lbnQge1xuICAgIG92ZXJmbG93LXg6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYW56b29tIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnBhZ2Uge1xuICAgIG1pbi13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNXB4IDBweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLmRvY3VtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogMjBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLndhaXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTVweDtcbiAgbGVmdDogQ2FsYygzMCUpO1xufVxuLnBhbnpvb20ge1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJSAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZ2Qtem9vbWVkIHtcbiAgbWFyZ2luOiAxMHB4IDk4cHg7XG59XG4uaGlnaGxpZ2h0cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAzN3B4KSB7XG4gIC5kb2N1bWVudCB7XG4gICAgb3ZlcmZsb3cteDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5wYW56b29tIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5wYWdlIHtcbiAgICBtaW4td2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "../../libs/comparison/src/lib/result-document/result-document.component.ts":
/*!***************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/result-document/result-document.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ResultDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultDocumentComponent", function() { return ResultDocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _differences_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../differences.service */ "../../libs/comparison/src/lib/differences.service.ts");






var $ = jquery__WEBPACK_IMPORTED_MODULE_3__;
var ResultDocumentComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ResultDocumentComponent, _super);
    function ResultDocumentComponent(_elementRef, zoomService, changeService, windowService) {
        var _this = _super.call(this, _elementRef, zoomService, windowService) || this;
        _this.changesService = changeService;
        return _this;
    }
    ResultDocumentComponent.prototype.close = function () {
        this.changesService.setActiveChange(null);
    };
    ResultDocumentComponent.prototype.ngOnInit = function () {
    };
    ResultDocumentComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ZoomService"] },
        { type: _differences_service__WEBPACK_IMPORTED_MODULE_4__["DifferencesService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["WindowService"] }
    ]; };
    ResultDocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-result-document',
            template: __webpack_require__(/*! raw-loader!./result-document.component.html */ "../../node_modules/raw-loader/index.js!../../libs/comparison/src/lib/result-document/result-document.component.html"),
            providers: [_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ZoomService"]],
            viewProviders: [_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ZoomDirective"]],
            styles: [__webpack_require__(/*! ./result-document.component.less */ "../../libs/comparison/src/lib/result-document/result-document.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ZoomService"],
            _differences_service__WEBPACK_IMPORTED_MODULE_4__["DifferencesService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["WindowService"]])
    ], ResultDocumentComponent);
    return ResultDocumentComponent;
}(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["DocumentComponent"]));



/***/ }),

/***/ "../../libs/comparison/src/lib/upload-file-panel/upload-file-panel.component.less":
/*!*********************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/upload-file-panel/upload-file-panel.component.less ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-drag-n-drop-wrap {\n  height: 100%;\n  width: 100%;\n  background-color: #E7E7E7;\n  text-align: center;\n  cursor: default;\n  left: 1px;\n  display: flex;\n  align-content: center;\n  flex-direction: column;\n  justify-content: center;\n  opacity: 0.9;\n  z-index: 1;\n}\n.active {\n  background-color: #bababa;\n}\n.gd-drag-n-drop-wrap h2 {\n  color: #959DA5;\n  font-size: 15px;\n  margin-top: 38px;\n}\n.gd-drag-n-drop-icon {\n  color: #959DA5;\n  cursor: pointer;\n}\n:host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  align-content: center;\n  height: 100%;\n  border-bottom: 1px solid #CCC;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb21wYXJpc29uL3NyYy9saWIvdXBsb2FkLWZpbGUtcGFuZWwvdXBsb2FkLWZpbGUtcGFuZWwuY29tcG9uZW50Lmxlc3MiLCJsaWJzL2NvbXBhcmlzb24vc3JjL2xpYi91cGxvYWQtZmlsZS1wYW5lbC91cGxvYWQtZmlsZS1wYW5lbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ0Y7QURFQTtFQUNFLHlCQUFBO0FDQUY7QURHQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNERjtBRElBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNGRjtBREtBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDSEYiLCJmaWxlIjoibGlicy9jb21wYXJpc29uL3NyYy9saWIvdXBsb2FkLWZpbGUtcGFuZWwvdXBsb2FkLWZpbGUtcGFuZWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2QtZHJhZy1uLWRyb3Atd3JhcCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFN0U3RTc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBsZWZ0OiAxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuOTtcbiAgei1pbmRleDogMTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWJhYmE7XG59XG5cbi5nZC1kcmFnLW4tZHJvcC13cmFwIGgyIHtcbiAgY29sb3I6ICM5NTlEQTU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogMzhweDtcbn1cblxuLmdkLWRyYWctbi1kcm9wLWljb24ge1xuICBjb2xvcjogIzk1OURBNTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46aG9zdHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQztcbn1cbiIsIi5nZC1kcmFnLW4tZHJvcC13cmFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U3RTdFNztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGxlZnQ6IDFweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3BhY2l0eTogMC45O1xuICB6LWluZGV4OiAxO1xufVxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWJhYmE7XG59XG4uZ2QtZHJhZy1uLWRyb3Atd3JhcCBoMiB7XG4gIGNvbG9yOiAjOTU5REE1O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDM4cHg7XG59XG4uZ2QtZHJhZy1uLWRyb3AtaWNvbiB7XG4gIGNvbG9yOiAjOTU5REE1O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/comparison/src/lib/upload-file-panel/upload-file-panel.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/upload-file-panel/upload-file-panel.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: UploadFilePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFilePanelComponent", function() { return UploadFilePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");



var UploadFilePanelComponent = /** @class */ (function () {
    function UploadFilePanelComponent(_uploadService, _modalService) {
        this._uploadService = _uploadService;
        this._modalService = _modalService;
        this.active = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UploadFilePanelComponent.prototype.ngOnInit = function () {
    };
    UploadFilePanelComponent.prototype.openModal = function () {
        this.active.emit(this.panel);
        this._modalService.open(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["CommonModals"].BrowseFiles);
    };
    UploadFilePanelComponent.prototype.dropped = function ($event) {
        if ($event) {
            this.active.emit(this.panel);
        }
    };
    UploadFilePanelComponent.ctorParameters = function () { return [
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["UploadFilesService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UploadFilePanelComponent.prototype, "panel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UploadFilePanelComponent.prototype, "active", void 0);
    UploadFilePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-upload-file-panel',
            template: __webpack_require__(/*! raw-loader!./upload-file-panel.component.html */ "../../node_modules/raw-loader/index.js!../../libs/comparison/src/lib/upload-file-panel/upload-file-panel.component.html"),
            styles: [__webpack_require__(/*! ./upload-file-panel.component.less */ "../../libs/comparison/src/lib/upload-file-panel/upload-file-panel.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["UploadFilesService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
    ], UploadFilePanelComponent);
    return UploadFilePanelComponent;
}());



/***/ }),

/***/ "../../libs/conversion/src/index.ts":
/*!***********************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/conversion/src/index.ts ***!
  \***********************************************************************************/
/*! exports provided: initializeApp, ConversionModule, ConversionAppComponent, ConversionService, ConversionConfigService, ConversionRequestModel, ConversionItemModel, ExtendedFileModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_conversion_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/conversion.module */ "../../libs/conversion/src/lib/conversion.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return _lib_conversion_module__WEBPACK_IMPORTED_MODULE_0__["initializeApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConversionModule", function() { return _lib_conversion_module__WEBPACK_IMPORTED_MODULE_0__["ConversionModule"]; });

/* harmony import */ var _lib_conversion_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/conversion-app.component */ "../../libs/conversion/src/lib/conversion-app.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConversionAppComponent", function() { return _lib_conversion_app_component__WEBPACK_IMPORTED_MODULE_1__["ConversionAppComponent"]; });

/* harmony import */ var _lib_conversion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/conversion.service */ "../../libs/conversion/src/lib/conversion.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConversionService", function() { return _lib_conversion_service__WEBPACK_IMPORTED_MODULE_2__["ConversionService"]; });

/* harmony import */ var _lib_conversion_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/conversion-config.service */ "../../libs/conversion/src/lib/conversion-config.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConversionConfigService", function() { return _lib_conversion_config_service__WEBPACK_IMPORTED_MODULE_3__["ConversionConfigService"]; });

/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/models */ "../../libs/conversion/src/lib/models.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConversionRequestModel", function() { return _lib_models__WEBPACK_IMPORTED_MODULE_4__["ConversionRequestModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConversionItemModel", function() { return _lib_models__WEBPACK_IMPORTED_MODULE_4__["ConversionItemModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtendedFileModel", function() { return _lib_models__WEBPACK_IMPORTED_MODULE_4__["ExtendedFileModel"]; });








/***/ }),

/***/ "../../libs/conversion/src/lib/conversion-app.component.less":
/*!************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/conversion/src/lib/conversion-app.component.less ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');\n:host * {\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n}\n.wrapper {\n  align-items: stretch;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.doc-panel {\n  display: flex;\n  height: inherit;\n}\n.gd-document {\n  width: 100%;\n  height: 100%;\n}\n.top-panel {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.toolbar-panel {\n  background-color: #3e4e5a;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY29udmVyc2lvbi9zcmMvbGliL2NvbnZlcnNpb24tYXBwLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL2VsZW5rby9wcm9qZWN0cy9Hcm91cERvY3MuVG90YWwtQW5ndWxhci9saWJzL2NvbnZlcnNpb24vc3JjL2xpYi9jb252ZXJzaW9uLWFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RUNBa0I7QUFFbEI7RUFDRSxzREFBQTtBREFGO0FDR0E7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QURERjtBQ0lBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QURGRjtBQ0tBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QURIRjtBQ01BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBREpGO0FDT0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QURMRiIsImZpbGUiOiJsaWJzL2NvbnZlcnNpb24vc3JjL2xpYi9jb252ZXJzaW9uLWFwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xuOmhvc3QgKiB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cbi53cmFwcGVyIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmRvYy1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cbi5nZC1kb2N1bWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udG9wLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4udG9vbGJhci1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTRlNWE7XG4gIHdpZHRoOiAxMDAlO1xufVxuIiwiQGltcG9ydCAoY3NzKSB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwJyk7XG5cbjpob3N0ICoge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi53cmFwcGVyIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uZG9jLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uZ2QtZG9jdW1lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udG9wLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b29sYmFyLXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlNGU1YTtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "../../libs/conversion/src/lib/conversion-app.component.ts":
/*!**********************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/conversion/src/lib/conversion-app.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ConversionAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversionAppComponent", function() { return ConversionAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _conversion_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conversion-config.service */ "../../libs/conversion/src/lib/conversion-config.service.ts");
/* harmony import */ var _conversion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conversion.service */ "../../libs/conversion/src/lib/conversion.service.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");





var ConversionAppComponent = /** @class */ (function () {
    function ConversionAppComponent(_modalService, _conversionService, configService, uploadFilesService) {
        var _this = this;
        this._modalService = _modalService;
        this._conversionService = _conversionService;
        this.title = 'conversion';
        this.files = [];
        this.conversionItems = [];
        this.browseFilesModal = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_4__["CommonModals"].BrowseFiles;
        this.leftBarOpen = false;
        configService.updatedConfig.subscribe(function (config) {
            _this.conversionConfig = config;
        });
        uploadFilesService.uploadsChange.subscribe(function (uploads) {
            if (uploads) {
                var i = void 0;
                for (i = 0; i < uploads.length; i++) {
                    _this._conversionService.upload(uploads.item(i), '', _this.conversionConfig.rewrite).subscribe(function () {
                        _this.selectDir('');
                    });
                }
            }
        });
        _conversionService.selectedItems.subscribe(function (selectedFormats) {
            selectedFormats.forEach(function (selectedFormat) {
                if (Object.keys(selectedFormat).length > 0 && !_this.itemAlreadyAdded(selectedFormat)) {
                    _this.conversionItems.push(selectedFormat);
                }
            });
        });
        _conversionService.itemToConvert.subscribe(function (item) {
            if (item)
                _this.convertSingleItem(item);
        });
        _conversionService.itemToRemove.subscribe(function (item) {
            if (item)
                _this.removeItemFromQueue(item);
        });
    }
    Object.defineProperty(ConversionAppComponent.prototype, "rewriteConfig", {
        get: function () {
            return this.conversionConfig ? this.conversionConfig.rewrite : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConversionAppComponent.prototype, "browseConfig", {
        get: function () {
            return this.conversionConfig ? this.conversionConfig.browse : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConversionAppComponent.prototype, "uploadConfig", {
        get: function () {
            return this.conversionConfig ? this.conversionConfig.upload : true;
        },
        enumerable: true,
        configurable: true
    });
    ConversionAppComponent.prototype.fileDropped = function ($event) {
        if ($event) {
            this._modalService.open(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_4__["CommonModals"].BrowseFiles);
        }
    };
    ConversionAppComponent.prototype.openModal = function (id) {
        this._modalService.open(id);
    };
    ConversionAppComponent.prototype.closeModal = function (id) {
        this._modalService.close(id);
    };
    ConversionAppComponent.prototype.upload = function ($event) {
        var _this = this;
        this._conversionService.upload(null, $event, this.rewriteConfig).subscribe(function () {
            _this.selectDir('');
        });
    };
    ConversionAppComponent.prototype.selectDir = function ($event) {
        var _this = this;
        this._conversionService.loadFiles($event).subscribe(function (files) { return _this.files = files || []; });
    };
    ConversionAppComponent.prototype.convertSingleItem = function (item) {
        var workItem = this.conversionItems.find(function (x) { return x.guid === item.guid; });
        workItem.converting = true;
        this._conversionService.convert(item).subscribe(function () {
            workItem.converting = false;
            workItem.converted = true;
        }, (function () {
            // TODO: add error handling?
            workItem.converting = false;
        }));
    };
    ConversionAppComponent.prototype.convertAll = function () {
        var _this = this;
        this.conversionItems.forEach(function (item) {
            _this.convertSingleItem(item);
        });
    };
    ConversionAppComponent.prototype.convertAllUnavailable = function () {
        return this.conversionItems.length === 0 || this.conversionItems.filter(function (ci) { return ci.converted !== true; }).length === 0;
    };
    ConversionAppComponent.prototype.removeItemFromQueue = function (item) {
        var _this = this;
        if (this.conversionItems.length > 0) {
            this.conversionItems.forEach(function (ci, index) {
                if (ci.guid === item.guid && ci.destinationType === item.destinationType)
                    _this.conversionItems.splice(index, 1);
            });
        }
    };
    ConversionAppComponent.prototype.selectAllItems = function (checked) {
        this.files.forEach(function (f) {
            if (!f.isDirectory && !f.directory)
                f.selected = checked;
        });
    };
    ConversionAppComponent.prototype.itemAlreadyAdded = function (selectedFormat) {
        return this.conversionItems.filter(function (ci) { return ci.destinationType === selectedFormat.destinationType
            && ci.guid === selectedFormat.guid; }).length === 1;
    };
    ConversionAppComponent.prototype.isLeftBarOpen = function () {
        return this.isDesktop ? true : this.leftBarOpen;
    };
    ConversionAppComponent.ctorParameters = function () { return [
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_4__["ModalService"] },
        { type: _conversion_service__WEBPACK_IMPORTED_MODULE_3__["ConversionService"] },
        { type: _conversion_config_service__WEBPACK_IMPORTED_MODULE_2__["ConversionConfigService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_4__["UploadFilesService"] }
    ]; };
    ConversionAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-conversion',
            template: __webpack_require__(/*! raw-loader!./conversion-app.component.html */ "../../node_modules/raw-loader/index.js!../../libs/conversion/src/lib/conversion-app.component.html"),
            styles: [__webpack_require__(/*! ./conversion-app.component.less */ "../../libs/conversion/src/lib/conversion-app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _conversion_service__WEBPACK_IMPORTED_MODULE_3__["ConversionService"],
            _conversion_config_service__WEBPACK_IMPORTED_MODULE_2__["ConversionConfigService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_4__["UploadFilesService"]])
    ], ConversionAppComponent);
    return ConversionAppComponent;
}());



/***/ }),

/***/ "../../libs/conversion/src/lib/conversion-browse-files-modal/conversion-browse-files-modal.component.less":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/conversion/src/lib/conversion-browse-files-modal/conversion-browse-files-modal.component.less ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-modal-table {\n  width: 100%;\n  text-align: left;\n  padding-top: 20px;\n}\n#gd-browse-section {\n  width: 1024px;\n  height: 628px;\n}\n.list-files-header {\n  display: flex;\n  width: 100%;\n  color: #ACACAC;\n  font-size: 13px;\n  flex-direction: row;\n}\n.header-name {\n  padding-left: 70px;\n}\n.header-size {\n  padding-left: 707px;\n}\n.file-size {\n  margin-top: 20px;\n  width: 112px;\n  color: #777777;\n}\n.file-description {\n  cursor: pointer;\n  overflow: hidden;\n}\n.file-description fa-icon {\n  cursor: pointer;\n  height: 32px;\n  font-size: 32px;\n  margin: 10px 13px 22px 0;\n}\n.gd-modal-spinner {\n  background-color: #ffffff;\n  width: 100%;\n  height: 20px;\n  text-align: center;\n  font-size: 16px;\n}\n.gd-cancel-button {\n  padding: 7px;\n  background: none;\n  width: 28px;\n  overflow: hidden;\n}\n.gd-cancel-button i {\n  font-size: 21px;\n}\n.gd-file-name {\n  white-space: nowrap;\n  overflow: hidden;\n  width: 100%;\n  text-overflow: ellipsis;\n}\n.go-up {\n  cursor: pointer;\n}\n.upload-panel {\n  display: flex;\n  position: relative;\n  width: 100%;\n}\n.upload-panel .select-all {\n  width: 16px;\n  padding: 22px 23px 0 25px;\n}\n.upload-panel .context {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 20px;\n  margin-right: 20px;\n}\n.upload-panel .context .context-actions {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n.upload-panel .context .context-actions *:last-child {\n  margin-right: 0px;\n}\n.upload-panel .context .context-panel {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin-top: 20px;\n}\n.upload-panel .context .context-panel .upload-url {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n.upload-panel .context .context-panel .upload-url .url-input {\n  width: 100%;\n  height: 27px;\n  border: 1px solid #25C2D4;\n}\n.upload-panel .context .context-panel .upload-url .url-check {\n  width: 31px;\n  height: 31px;\n  color: #FFFFFF;\n  font-size: 15px;\n  background-color: #25C2D4;\n}\n.upload-panel .context .context-panel .upload-url .url-check .ng-fa-icon {\n  display: block;\n  padding: 8px;\n}\n.upload-panel gd-drop-down {\n  margin-right: 10px;\n}\n.file-description {\n  display: flex;\n  width: inherit;\n}\n.file-description .ng-fa-icon.fa-file-pdf {\n  color: #E21717;\n}\n.file-description .ng-fa-icon.fa-file-word {\n  color: #6979B9;\n}\n.file-description .ng-fa-icon.fa-file-powerpoint {\n  color: #E29417;\n}\n.file-description .ng-fa-icon.fa-file-excel {\n  color: #3FA300;\n}\n.file-description .ng-fa-icon.fa-file-image {\n  color: #E217DA;\n}\n.file-description .ng-fa-icon.fa-file-text .fa-folder {\n  color: #5D6A75;\n}\n.go-up {\n  display: flex;\n  font-size: 16px;\n  padding-left: 70px;\n  height: 19px;\n  margin: 8px 0px 10px 0px;\n}\n.go-up-dots {\n  font-size: 16px;\n  margin: 0px 0px 0px 12px;\n  height: 19px;\n}\n.go-up-icon {\n  width: 30px;\n  height: 30px;\n}\n.file-name {\n  font-size: 16px;\n  color: #6E6E6E;\n}\n.file-name-format {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 16px;\n  display: flex;\n  flex-direction: column;\n  margin-top: 16px;\n  cursor: pointer;\n  color: #6E6E6E;\n}\n.file-format {\n  font-size: 10px;\n}\n.list-files-lines {\n  border-top: 1px solid #ccc;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 65px;\n}\n.list-files-lines:hover {\n  background-color: #E5E5E5;\n}\n.gd-dnd-wrap {\n  background-color: #FFF;\n  cursor: default;\n  position: absolute;\n  width: inherit;\n  height: inherit;\n  opacity: 0.9;\n  z-index: 1;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  flex-direction: column;\n}\n.gd-dnd-wrap h2 {\n  color: #959DA5;\n  font-size: 15px;\n  font-weight: 300;\n}\n.gd-drag-n-drop-icon .fa-cloud-download-alt {\n  color: #D1D1D1;\n  font-size: 110px;\n}\n.gd-file-checkbox {\n  height: 20px;\n  margin: 22px 23px 0 25px;\n}\n.gd-file-checkbox.empty {\n  width: 25px;\n}\n.file-format-select {\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  width: 46px;\n  margin-right: 20px;\n}\n.file-format-select ::ng-deep .button {\n  padding: 0px;\n  width: 36px;\n}\n.file-format-select ::ng-deep .show .button {\n  background-color: #25c2d4;\n  color: #FFF;\n}\n.gd-checkbox {\n  width: 19px;\n  height: 19px;\n  margin: 0px;\n}\n.gd-checkbox:before {\n  position: relative;\n  display: flex;\n  width: 17px;\n  height: 17px;\n  border: 1px solid #707070;\n  content: \"\";\n  background: #FFFFFF;\n  cursor: pointer;\n}\n.gd-checkbox:after {\n  position: relative;\n  display: flex;\n  left: 1px;\n  top: -18px;\n  width: 16px;\n  height: 16px;\n  content: \"\";\n  cursor: pointer;\n}\n.gd-checkbox:checked:after {\n  font-family: \"Font Awesome 5 Free\";\n  content: \"\\f00c\";\n  font-weight: 900;\n  font-size: 16px;\n  color: #6E6E6E;\n}\n.gd-select-all {\n  position: relative;\n  top: 6px;\n  margin-right: 20px;\n}\n.gd-add-selected.active {\n  cursor: pointer;\n  opacity: 1;\n}\n.gd-add-selected {\n  width: 140px;\n  height: 36px;\n  background-color: #3E4E5A;\n  color: #FFFFFF;\n  margin: 0px 8px 0px 0px;\n  border: 0;\n  cursor: not-allowed;\n  opacity: 0.43;\n}\n.gd-folder-name {\n  margin-top: 8px;\n}\n@media (max-width: 1037px) {\n  .header-size,\n  .file-size {\n    width: 18%;\n  }\n  .gd-dnd-wrap {\n    width: 95%;\n  }\n  #gd-browse-section {\n    width: 100%;\n  }\n  .list-files-header,\n  .file-size {\n    display: none;\n  }\n  .context-actions {\n    justify-content: space-between;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb252ZXJzaW9uL3NyYy9saWIvY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwvY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50Lmxlc3MiLCJsaWJzL2NvbnZlcnNpb24vc3JjL2xpYi9jb252ZXJzaW9uLWJyb3dzZS1maWxlcy1tb2RhbC9jb252ZXJzaW9uLWJyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDREY7QURJQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FDRkY7QURLQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0hGO0FETUE7RUFDRSxrQkFBQTtBQ0pGO0FET0E7RUFDRSxtQkFBQTtBQ0xGO0FEUUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDTkY7QURTQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ1BGO0FES0E7RUFJSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ05KO0FEVUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDUkY7QURXQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1RGO0FEWUE7RUFDRSxlQUFBO0FDVkY7QURhQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNYRjtBRGNBO0VBQ0UsZUFBQTtBQ1pGO0FEZUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDYkY7QURVQTtFQU1JLFdBQUE7RUFDQSx5QkFBQTtBQ2JKO0FETUE7RUFXSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2RKO0FEREE7RUFrQk0sYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ2ROO0FETkE7RUF1QlEsaUJBQUE7QUNkUjtBRFRBO0VBMkJNLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ2ZOO0FEZkE7RUFpQ1EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ2ZSO0FEcEJBO0VBdUNVLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNoQlY7QUR6QkE7RUE2Q1UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDakJWO0FEaENBO0VBcURVLGNBQUE7RUFDQSxZQUFBO0FDbEJWO0FEcENBO0VBOERJLGtCQUFBO0FDdkJKO0FEMkJBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUN6QkY7QUQ0QkE7RUFDRSxjQUFBO0FDMUJGO0FENkJBO0VBQ0UsY0FBQTtBQzNCRjtBRDhCQTtFQUNFLGNBQUE7QUM1QkY7QUQrQkE7RUFDRSxjQUFBO0FDN0JGO0FEZ0NBO0VBQ0UsY0FBQTtBQzlCRjtBRGlDQTtFQUNFLGNBQUE7QUMvQkY7QURrQ0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDaENGO0FEbUNBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQ2pDRjtBRG9DQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDbENGO0FEcUNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNuQ0Y7QURzQ0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ3BDRjtBRHVDQTtFQUNFLGVBQUE7QUNyQ0Y7QUQwQ0E7RUFDRSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDeENGO0FEeUNFO0VBQ0UseUJBQUE7QUN2Q0o7QUQyQ0E7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDMUNGO0FENkNBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDM0NGO0FEOENBO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0FDNUNGO0FEK0NBO0VBQ0UsV0FBQTtBQzdDRjtBRGdEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUM5Q0Y7QUR5Q0E7RUFRTSxZQUFBO0VBQ0EsV0FBQTtBQzlDTjtBRHFDQTtFQWFJLHlCQUFBO0VBQ0EsV0FBQTtBQy9DSjtBRG1EQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2pERjtBRGtERTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDaERKO0FEa0RFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDaERKO0FEbURJO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNqRE47QURzREE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ3BERjtBRHVEQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FDckRGO0FEd0RBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUN0REY7QUR5REE7RUFDRSxlQUFBO0FDdkRGO0FEMERBO0VBQ0U7O0lBQ0UsVUFBQTtFQ3ZERjtFRHlEQTtJQUNFLFVBQUE7RUN2REY7RUR5REE7SUFDRSxXQUFBO0VDdkRGO0VEeURBOztJQUNFLGFBQUE7RUN0REY7RUR3REE7SUFDRSw4QkFBQTtFQ3RERjtBQUNGIiwiZmlsZSI6ImxpYnMvY29udmVyc2lvbi9zcmMvbGliL2NvbnZlcnNpb24tYnJvd3NlLWZpbGVzLW1vZGFsL2NvbnZlcnNpb24tYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vY29tbW9uLWNvbXBvbmVudHMvc3JjL3N0eWxlcy92YXJpYWJsZXMubGVzc1wiO1xuXG4uZ2QtbW9kYWwtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbiNnZC1icm93c2Utc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDI0cHg7XG4gIGhlaWdodDogNjI4cHg7XG59XG5cbi5saXN0LWZpbGVzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI0FDQUNBQztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uaGVhZGVyLW5hbWUge1xuICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG59XG5cbi5oZWFkZXItc2l6ZSB7XG4gIHBhZGRpbmctbGVmdDogNzA3cHg7XG59XG5cbi5maWxlLXNpemUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTEycHg7XG4gIGNvbG9yOiAjNzc3Nzc3O1xufVxuXG4uZmlsZS1kZXNjcmlwdGlvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmEtaWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMzJweDtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgbWFyZ2luOiAxMHB4IDEzcHggMjJweCAwO1xuICB9XG59XG5cbi5nZC1tb2RhbC1zcGlubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5nZC1jYW5jZWwtYnV0dG9uIHtcbiAgcGFkZGluZzogN3B4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB3aWR0aDogMjhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmdkLWNhbmNlbC1idXR0b24gaSB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cblxuLmdkLWZpbGUtbmFtZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmdvLXVwIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udXBsb2FkLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcblxuICAuc2VsZWN0LWFsbHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBwYWRkaW5nOiAyMnB4IDIzcHggMCAyNXB4O1xuICB9XG5cbiAgLmNvbnRleHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuXG4gICAgLmNvbnRleHQtYWN0aW9uc3tcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICo6bGFzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5jb250ZXh0LXBhbmVse1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICAgIC51cGxvYWQtdXJsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cblxuICAgICAgICAudXJsLWlucHV0IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDI3cHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzI1QzJENDtcbiAgICAgICAgfVxuXG4gICAgICAgIC51cmwtY2hlY2sge1xuICAgICAgICAgIHdpZHRoOiAzMXB4O1xuICAgICAgICAgIGhlaWdodDogMzFweDtcbiAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI1QzJENDtcbiAgICAgICAgfVxuXG4gICAgICAgIC51cmwtY2hlY2sgLm5nLWZhLWljb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2QtZHJvcC1kb3due1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuXG4uZmlsZS1kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBpbmhlcml0O1xufVxuXG4uZmlsZS1kZXNjcmlwdGlvbiAubmctZmEtaWNvbi5mYS1maWxlLXBkZiB7XG4gIGNvbG9yOiAjRTIxNzE3O1xufVxuXG4uZmlsZS1kZXNjcmlwdGlvbiAubmctZmEtaWNvbi5mYS1maWxlLXdvcmQge1xuICBjb2xvcjogIzY5NzlCOTtcbn1cblxuLmZpbGUtZGVzY3JpcHRpb24gLm5nLWZhLWljb24uZmEtZmlsZS1wb3dlcnBvaW50IHtcbiAgY29sb3I6ICNFMjk0MTc7XG59XG5cbi5maWxlLWRlc2NyaXB0aW9uIC5uZy1mYS1pY29uLmZhLWZpbGUtZXhjZWwge1xuICBjb2xvcjogIzNGQTMwMDtcbn1cblxuLmZpbGUtZGVzY3JpcHRpb24gLm5nLWZhLWljb24uZmEtZmlsZS1pbWFnZSB7XG4gIGNvbG9yOiAjRTIxN0RBO1xufVxuXG4uZmlsZS1kZXNjcmlwdGlvbiAubmctZmEtaWNvbi5mYS1maWxlLXRleHQgLmZhLWZvbGRlciB7XG4gIGNvbG9yOiAjNUQ2QTc1O1xufVxuXG4uZ28tdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogNzBweDtcbiAgaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW46IDhweCAwcHggMTBweCAwcHg7XG59XG5cbi5nby11cC1kb3RzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDBweCAwcHggMHB4IDEycHg7XG4gIGhlaWdodDogMTlweDtcbn1cblxuLmdvLXVwLWljb24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uZmlsZS1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzZFNkU2RTtcbn1cblxuLmZpbGUtbmFtZS1mb3JtYXQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNkU2RTZFO1xufVxuXG4uZmlsZS1mb3JtYXQge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cblxuXG4ubGlzdC1maWxlcy1saW5lcyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NXB4O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbmF2LWFjY2VudC1iYWNrZ3JvdW5kO1xuICB9XG59XG5cbi5nZC1kbmQtd3JhcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvcGFjaXR5OiAwLjk7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmdkLWRuZC13cmFwIGgyIHtcbiAgY29sb3I6ICM5NTlEQTU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmdkLWRyYWctbi1kcm9wLWljb24gLmZhLWNsb3VkLWRvd25sb2FkLWFsdCB7XG4gIGNvbG9yOiAjRDFEMUQxO1xuICBmb250LXNpemU6IDExMHB4O1xufVxuXG4uZ2QtZmlsZS1jaGVja2JveCB7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAyMnB4IDIzcHggMCAyNXB4O1xufVxuXG4uZ2QtZmlsZS1jaGVja2JveC5lbXB0eSB7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4uZmlsZS1mb3JtYXQtc2VsZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDo0NnB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cbiAgOjpuZy1kZWVwIC5idXR0b257XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICB3aWR0aDogMzZweDtcbiAgfVxuXG4gIDo6bmctZGVlcCAuc2hvdyAuYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBicmFuZDtcbiAgICBjb2xvcjojRkZGO1xuICB9XG59XG5cbi5nZC1jaGVja2JveCB7XG4gIHdpZHRoOiAxOXB4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIG1hcmdpbjogMHB4O1xuICAmOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDE3cHg7XG4gICAgaGVpZ2h0OiAxN3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAmOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsZWZ0OiAxcHg7XG4gICAgdG9wOiAtMThweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgJjpjaGVja2VkIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgICAgIGNvbnRlbnQ6IFwiXFxmMDBjXCI7XG4gICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6ICM2RTZFNkU7XG4gICAgfVxuICB9XG59XG5cbi5nZC1zZWxlY3QtYWxsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDZweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uZ2QtYWRkLXNlbGVjdGVkLmFjdGl2ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmdkLWFkZC1zZWxlY3RlZCB7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U0RTVBO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luOiAwcHggOHB4IDBweCAwcHg7XG4gIGJvcmRlcjogMDtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgb3BhY2l0eTogMC40Mztcbn1cblxuLmdkLWZvbGRlci1uYW1lIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG5AbWVkaWEgQHBob25lLWRvd24ge1xuICAuaGVhZGVyLXNpemUsIC5maWxlLXNpemUge1xuICAgIHdpZHRoOiAxOCU7XG4gIH1cbiAgLmdkLWRuZC13cmFwIHtcbiAgICB3aWR0aDogOTUlO1xuICB9XG4gICNnZC1icm93c2Utc2VjdGlvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubGlzdC1maWxlcy1oZWFkZXIsIC5maWxlLXNpemV7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY29udGV4dC1hY3Rpb25ze1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxufVxuIiwiLmdkLW1vZGFsLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuI2dkLWJyb3dzZS1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMjRweDtcbiAgaGVpZ2h0OiA2MjhweDtcbn1cbi5saXN0LWZpbGVzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI0FDQUNBQztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmhlYWRlci1uYW1lIHtcbiAgcGFkZGluZy1sZWZ0OiA3MHB4O1xufVxuLmhlYWRlci1zaXplIHtcbiAgcGFkZGluZy1sZWZ0OiA3MDdweDtcbn1cbi5maWxlLXNpemUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTEycHg7XG4gIGNvbG9yOiAjNzc3Nzc3O1xufVxuLmZpbGUtZGVzY3JpcHRpb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZmlsZS1kZXNjcmlwdGlvbiBmYS1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbWFyZ2luOiAxMHB4IDEzcHggMjJweCAwO1xufVxuLmdkLW1vZGFsLXNwaW5uZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5nZC1jYW5jZWwtYnV0dG9uIHtcbiAgcGFkZGluZzogN3B4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB3aWR0aDogMjhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5nZC1jYW5jZWwtYnV0dG9uIGkge1xuICBmb250LXNpemU6IDIxcHg7XG59XG4uZ2QtZmlsZS1uYW1lIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmdvLXVwIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnVwbG9hZC1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4udXBsb2FkLXBhbmVsIC5zZWxlY3QtYWxsIHtcbiAgd2lkdGg6IDE2cHg7XG4gIHBhZGRpbmc6IDIycHggMjNweCAwIDI1cHg7XG59XG4udXBsb2FkLXBhbmVsIC5jb250ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi51cGxvYWQtcGFuZWwgLmNvbnRleHQgLmNvbnRleHQtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnVwbG9hZC1wYW5lbCAuY29udGV4dCAuY29udGV4dC1hY3Rpb25zICo6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuLnVwbG9hZC1wYW5lbCAuY29udGV4dCAuY29udGV4dC1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnVwbG9hZC1wYW5lbCAuY29udGV4dCAuY29udGV4dC1wYW5lbCAudXBsb2FkLXVybCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnVwbG9hZC1wYW5lbCAuY29udGV4dCAuY29udGV4dC1wYW5lbCAudXBsb2FkLXVybCAudXJsLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI1QzJENDtcbn1cbi51cGxvYWQtcGFuZWwgLmNvbnRleHQgLmNvbnRleHQtcGFuZWwgLnVwbG9hZC11cmwgLnVybC1jaGVjayB7XG4gIHdpZHRoOiAzMXB4O1xuICBoZWlnaHQ6IDMxcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNUMyRDQ7XG59XG4udXBsb2FkLXBhbmVsIC5jb250ZXh0IC5jb250ZXh0LXBhbmVsIC51cGxvYWQtdXJsIC51cmwtY2hlY2sgLm5nLWZhLWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogOHB4O1xufVxuLnVwbG9hZC1wYW5lbCBnZC1kcm9wLWRvd24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uZmlsZS1kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBpbmhlcml0O1xufVxuLmZpbGUtZGVzY3JpcHRpb24gLm5nLWZhLWljb24uZmEtZmlsZS1wZGYge1xuICBjb2xvcjogI0UyMTcxNztcbn1cbi5maWxlLWRlc2NyaXB0aW9uIC5uZy1mYS1pY29uLmZhLWZpbGUtd29yZCB7XG4gIGNvbG9yOiAjNjk3OUI5O1xufVxuLmZpbGUtZGVzY3JpcHRpb24gLm5nLWZhLWljb24uZmEtZmlsZS1wb3dlcnBvaW50IHtcbiAgY29sb3I6ICNFMjk0MTc7XG59XG4uZmlsZS1kZXNjcmlwdGlvbiAubmctZmEtaWNvbi5mYS1maWxlLWV4Y2VsIHtcbiAgY29sb3I6ICMzRkEzMDA7XG59XG4uZmlsZS1kZXNjcmlwdGlvbiAubmctZmEtaWNvbi5mYS1maWxlLWltYWdlIHtcbiAgY29sb3I6ICNFMjE3REE7XG59XG4uZmlsZS1kZXNjcmlwdGlvbiAubmctZmEtaWNvbi5mYS1maWxlLXRleHQgLmZhLWZvbGRlciB7XG4gIGNvbG9yOiAjNUQ2QTc1O1xufVxuLmdvLXVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG4gIGhlaWdodDogMTlweDtcbiAgbWFyZ2luOiA4cHggMHB4IDEwcHggMHB4O1xufVxuLmdvLXVwLWRvdHMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMTJweDtcbiAgaGVpZ2h0OiAxOXB4O1xufVxuLmdvLXVwLWljb24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLmZpbGUtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM2RTZFNkU7XG59XG4uZmlsZS1uYW1lLWZvcm1hdCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM2RTZFNkU7XG59XG4uZmlsZS1mb3JtYXQge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ubGlzdC1maWxlcy1saW5lcyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NXB4O1xufVxuLmxpc3QtZmlsZXMtbGluZXM6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xufVxuLmdkLWRuZC13cmFwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIG9wYWNpdHk6IDAuOTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmdkLWRuZC13cmFwIGgyIHtcbiAgY29sb3I6ICM5NTlEQTU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5nZC1kcmFnLW4tZHJvcC1pY29uIC5mYS1jbG91ZC1kb3dubG9hZC1hbHQge1xuICBjb2xvcjogI0QxRDFEMTtcbiAgZm9udC1zaXplOiAxMTBweDtcbn1cbi5nZC1maWxlLWNoZWNrYm94IHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDIycHggMjNweCAwIDI1cHg7XG59XG4uZ2QtZmlsZS1jaGVja2JveC5lbXB0eSB7XG4gIHdpZHRoOiAyNXB4O1xufVxuLmZpbGUtZm9ybWF0LXNlbGVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDQ2cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5maWxlLWZvcm1hdC1zZWxlY3QgOjpuZy1kZWVwIC5idXR0b24ge1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAzNnB4O1xufVxuLmZpbGUtZm9ybWF0LXNlbGVjdCA6Om5nLWRlZXAgLnNob3cgLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNWMyZDQ7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmdkLWNoZWNrYm94IHtcbiAgd2lkdGg6IDE5cHg7XG4gIGhlaWdodDogMTlweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uZ2QtY2hlY2tib3g6YmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTdweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZ2QtY2hlY2tib3g6YWZ0ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxlZnQ6IDFweDtcbiAgdG9wOiAtMThweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgY29udGVudDogXCJcIjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmdkLWNoZWNrYm94OmNoZWNrZWQ6YWZ0ZXIge1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGNvbnRlbnQ6IFwiXFxmMDBjXCI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM2RTZFNkU7XG59XG4uZ2Qtc2VsZWN0LWFsbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA2cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5nZC1hZGQtc2VsZWN0ZWQuYWN0aXZlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAxO1xufVxuLmdkLWFkZC1zZWxlY3RlZCB7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U0RTVBO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luOiAwcHggOHB4IDBweCAwcHg7XG4gIGJvcmRlcjogMDtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgb3BhY2l0eTogMC40Mztcbn1cbi5nZC1mb2xkZXItbmFtZSB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDM3cHgpIHtcbiAgLmhlYWRlci1zaXplLFxuICAuZmlsZS1zaXplIHtcbiAgICB3aWR0aDogMTglO1xuICB9XG4gIC5nZC1kbmQtd3JhcCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgfVxuICAjZ2QtYnJvd3NlLXNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5saXN0LWZpbGVzLWhlYWRlcixcbiAgLmZpbGUtc2l6ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY29udGV4dC1hY3Rpb25zIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "../../libs/conversion/src/lib/conversion-browse-files-modal/conversion-browse-files-modal.component.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/conversion/src/lib/conversion-browse-files-modal/conversion-browse-files-modal.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: ConversionBrowseFilesModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversionBrowseFilesModalComponent", function() { return ConversionBrowseFilesModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _conversion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../conversion.service */ "../../libs/conversion/src/lib/conversion.service.ts");




var ConversionBrowseFilesModalComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConversionBrowseFilesModalComponent, _super);
    function ConversionBrowseFilesModalComponent(_uploadService, _conversionService, _modalService) {
        var _this = _super.call(this, _uploadService) || this;
        _this._conversionService = _conversionService;
        _this._modalService = _modalService;
        _this.selectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.dynamicOptions = [];
        return _this;
    }
    ConversionBrowseFilesModalComponent.prototype.selectDD = function (entry) {
        console.log('SELECTED DD', entry);
    };
    ConversionBrowseFilesModalComponent.prototype.selectAllItems = function (checked) {
        this.selectAll.emit(checked);
        this.dynamicOptions = this.prepareMultipleConversionTypes();
    };
    ConversionBrowseFilesModalComponent.prototype.selectSingleItem = function (checked, file) {
        // TODO: refactor?
        var selectedFiles = this.files.filter(function (f) { return f.guid === file.guid; });
        if (selectedFiles.length === 1) {
            selectedFiles[0].selected = checked;
        }
        this.dynamicOptions = this.prepareMultipleConversionTypes();
    };
    ConversionBrowseFilesModalComponent.prototype.getLabelString = function () {
        if (this.files && this.files.length > 0) {
            var selectedCount = this.files.filter(function (file) { return file.selected; }).length;
            if (selectedCount > 0) {
                return 'Add ' + selectedCount + ' selected';
            }
            else {
                return 'Add selected';
            }
        }
    };
    ConversionBrowseFilesModalComponent.prototype.prepareMultipleConversionTypes = function () {
        var _this = this;
        var allTypes = [];
        this.files.filter(function (file) { return file.selected; }).forEach(function (f) {
            if (f.conversionTypes.length > 0) {
                var types = Object.assign([], f.conversionTypes);
                allTypes.push(types);
            }
        });
        var longestArray = [];
        allTypes.forEach(function (item) {
            if (item.length >= longestArray.length) {
                longestArray = item;
            }
        });
        //add warnings
        allTypes.forEach(function (typesArr) {
            var _loop_1 = function (i) {
                var type = (longestArray[i].value) ? longestArray[i].value : longestArray[i];
                // TODO: reconsider second check
                if (typesArr.indexOf(type) === -1 && typesArr.filter(function (t) { return t.name === type; }).length === 0) {
                    longestArray[i] = {
                        value: type,
                        name: type,
                        warning: true,
                        icon: _this.getFormatIcon({ name: 'dummyName.' + type, directory: false })
                    };
                }
                else {
                    if (!longestArray[i].warning) {
                        longestArray[i] = {
                            value: type,
                            name: type,
                            warning: false,
                            icon: _this.getFormatIcon({ name: 'dummyName.' + type, directory: false })
                        };
                    }
                }
            };
            for (var i = 0; i < longestArray.length; i++) {
                _loop_1(i);
            }
        });
        return longestArray;
    };
    ConversionBrowseFilesModalComponent.prototype.selectFormat = function ($event, file) {
        var _this = this;
        // the case when we selecting format inline on the single file
        if (file) {
            this.selectAll.emit(false);
            file.selected = true;
        }
        this._format = $event.value;
        var conversionItems = new Array();
        this.files.forEach(function (f) {
            if (f.selected && !f.isDirectory && !f.directory) {
                var extension = f.guid.replace(/^.*\./, '');
                var destinationGuid = f.guid.replace(extension, _this._format);
                var destinationFileName = destinationGuid.replace(/^.*[\\\/]/, '');
                var conversionItem = {
                    guid: f.guid,
                    directory: f.directory,
                    size: f.size,
                    name: f.name,
                    destinationType: $event.value,
                    isDirectory: f.isDirectory,
                    sizeString: _this.getSize(f.size),
                    sourceIcon: _this.getFormatIcon(f),
                    sourceFormatName: _this.getFormatName(f),
                    destinationFileName: destinationFileName,
                    destinationFormatName: _this.getFormatName({ name: destinationFileName, directory: false }),
                    destinationIcon: _this.getFormatIcon({ name: destinationFileName, directory: false }),
                    converted: false,
                    // TODO: maybe there is a more beauty way?
                    converting: false
                };
                conversionItems.push(conversionItem);
            }
        });
        this._conversionService.selectItems(conversionItems);
        this._modalService.close(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["CommonModals"].BrowseFiles);
    };
    ConversionBrowseFilesModalComponent.prototype.createFormatOption = function (val) {
        return {
            value: val,
            name: val,
            icon: this.getFormatIcon({ name: 'dummyName.' + val, directory: false })
        };
    };
    ConversionBrowseFilesModalComponent.prototype.formatOptions = function (formats) {
        if (formats) {
            var allTypes = new Array();
            for (var i = 0; i < formats.length; i++) {
                allTypes.push(this.createFormatOption(formats[i]));
            }
            return allTypes;
        }
    };
    ConversionBrowseFilesModalComponent.prototype.anyItemSelected = function () {
        // TODO: reconsider such checks
        if (this.files && this.files.length > 0) {
            return this.files.filter(function (file) { return file.selected; }).length > 0;
        }
        else
            return false;
    };
    ConversionBrowseFilesModalComponent.prototype.allItemsSelected = function () {
        if (this.files && this.files.filter(function (file) { return !file.isDirectory && !file.directory; }).length > 0 && this.files.length > 0) {
            return this.files.filter(function (file) { return !file.isDirectory && !file.directory && file.selected; }).length
                === this.files.filter(function (file) { return !file.isDirectory && !file.directory; }).length;
        }
        else
            return false;
    };
    ConversionBrowseFilesModalComponent.ctorParameters = function () { return [
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["UploadFilesService"] },
        { type: _conversion_service__WEBPACK_IMPORTED_MODULE_3__["ConversionService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ConversionBrowseFilesModalComponent.prototype, "files", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConversionBrowseFilesModalComponent.prototype, "selectAll", void 0);
    ConversionBrowseFilesModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-conversion-browse-files-modal',
            template: __webpack_require__(/*! raw-loader!./conversion-browse-files-modal.component.html */ "../../node_modules/raw-loader/index.js!../../libs/conversion/src/lib/conversion-browse-files-modal/conversion-browse-files-modal.component.html"),
            styles: [__webpack_require__(/*! ./conversion-browse-files-modal.component.less */ "../../libs/conversion/src/lib/conversion-browse-files-modal/conversion-browse-files-modal.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["UploadFilesService"],
            _conversion_service__WEBPACK_IMPORTED_MODULE_3__["ConversionService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
    ], ConversionBrowseFilesModalComponent);
    return ConversionBrowseFilesModalComponent;
}(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["BrowseFilesModalComponent"]));



/***/ }),

/***/ "../../libs/conversion/src/lib/conversion-config.service.ts":
/*!***********************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/conversion/src/lib/conversion-config.service.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ConversionConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversionConfigService", function() { return ConversionConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _conversion_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conversion-config */ "../../libs/conversion/src/lib/conversion-config.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");






var ConversionConfigService = /** @class */ (function () {
    function ConversionConfigService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._conversionConfig = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](new _conversion_config__WEBPACK_IMPORTED_MODULE_2__["ConversionConfig"]());
        this._updatedConfig = this._conversionConfig.asObservable();
    }
    Object.defineProperty(ConversionConfigService.prototype, "updatedConfig", {
        get: function () {
            return this._updatedConfig;
        },
        enumerable: true,
        configurable: true
    });
    ConversionConfigService.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var configEndpoint = _this._config.getConfigEndpoint(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].CONVERSION_APP);
            _this._http.get(configEndpoint, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson).toPromise().then(function (response) {
                var conversionConfig = response;
                _this._conversionConfig.next(conversionConfig);
                resolve();
            }).catch(function (response) {
                reject("Could not load conversion config: " + JSON.stringify(response));
            });
        });
    };
    ConversionConfigService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    ConversionConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], ConversionConfigService);
    return ConversionConfigService;
}());



/***/ }),

/***/ "../../libs/conversion/src/lib/conversion-config.ts":
/*!***************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/conversion/src/lib/conversion-config.ts ***!
  \***************************************************************************************************/
/*! exports provided: ConversionConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversionConfig", function() { return ConversionConfig; });
var ConversionConfig = /** @class */ (function () {
    function ConversionConfig() {
    }
    return ConversionConfig;
}());



/***/ }),

/***/ "../../libs/conversion/src/lib/conversion-item/conversion-item.component.less":
/*!*****************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/conversion/src/lib/conversion-item/conversion-item.component.less ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-convert-item {\n  display: flex;\n  width: 100%;\n  height: 72px;\n  border-bottom: 1px solid #cccccc;\n}\n.gd-convert-remove {\n  font-size: 21px;\n  color: #6E6E6E;\n  margin: 23px 27px 0 21px;\n  cursor: pointer;\n}\n.gd-filequeue-name {\n  display: flex;\n  width: 671px;\n}\n.gd-filequeue-name fa-icon {\n  font-size: 32px;\n  margin: 19px 21px 0 0;\n}\n.gd-filequeue-name.disabled fa-icon {\n  color: #6E6E6E;\n}\n.gd-queue-name {\n  text-align: left;\n  margin-top: 16px;\n  cursor: default;\n}\n.gd-queue-size {\n  text-align: left;\n  font-size: 14px;\n  margin-top: 23px;\n}\n.gd-destination-file {\n  cursor: not-allowed;\n}\n.gd-destination-file .gd-queue-name {\n  cursor: inherit;\n}\n.gd-convert-status {\n  font-size: 32px;\n  color: #DBDBDB;\n  margin: 16px 122px 0 111px;\n}\n.gd-conversion-complete {\n  color: #62A529;\n  margin-left: 5px;\n}\n.gd-conversion-progress {\n  position: inherit;\n  width: 32px;\n  height: 32px;\n  font-size: 32px !important;\n  margin-top: -5px;\n  color: #007aff;\n}\n.gd-conversion-progress.mobile {\n  display: none;\n}\n.gd-convert-single,\n.gd-download-single {\n  font-size: 16px;\n  color: #808080;\n  margin: 29px 52px;\n  cursor: pointer;\n}\n.gd-convert-single.mobile,\n.gd-download-single.mobile {\n  display: none;\n}\n.gd-file-format {\n  font-size: 11px;\n}\n.gd-file-format.mobile {\n  display: none;\n}\n.gd-file-size {\n  width: 112px;\n  color: #777777;\n}\n.disabled {\n  cursor: not-allowed !important;\n}\n.gd-convert-item .ng-fa-icon.fa-file-pdf {\n  color: #E21717;\n}\n.gd-convert-item .ng-fa-icon.fa-file-word {\n  color: #6979B9;\n}\n.gd-convert-item .ng-fa-icon.fa-file-powerpoint {\n  color: #E29417;\n}\n.gd-convert-item .ng-fa-icon.fa-file-excel {\n  color: #3FA300;\n}\n.gd-convert-item .ng-fa-icon.fa-file-image {\n  color: #E217DA;\n}\n.gd-convert-item .ng-fa-icon.fa-file-text .fa-folder {\n  color: #5D6A75;\n}\n.gd-filequeue-name .ng-fa-icon,\n.gd-convert-status .ng-fa-icon,\n.gd-destination-file .ng-fa-icon {\n  font-size: 32px;\n}\n.gd-filequeue-name fa-icon {\n  font-size: 32px;\n  margin: 16px 21px 0 0;\n}\n@media (max-width: 1037px) {\n  .gd-file-size,\n  .gd-convert-status,\n  .gd-destination-file {\n    display: none;\n  }\n  .gd-conversion-progress.mobile {\n    display: block;\n    margin: 16px 45px;\n  }\n  .gd-convert-single.mobile {\n    display: block;\n  }\n  .gd-convert-single:not(.mobile) {\n    display: none;\n  }\n  .gd-file-format {\n    font-size: 11px;\n  }\n  .gd-file-format.mobile {\n    display: block;\n  }\n  .gd-file-format.mobile > fa-icon {\n    color: #bebebe;\n  }\n  .gd-file-format.mobile fa-icon {\n    font-size: 11px;\n    margin-right: 6px;\n  }\n  .gd-file-format {\n    font-size: 11px;\n  }\n  .gd-file-format:not(.mobile) {\n    display: none;\n  }\n  .gd-filequeue-name {\n    white-space: nowrap;\n    overflow: hidden;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb252ZXJzaW9uL3NyYy9saWIvY29udmVyc2lvbi1pdGVtL2NvbnZlcnNpb24taXRlbS5jb21wb25lbnQubGVzcyIsImxpYnMvY29udmVyc2lvbi9zcmMvbGliL2NvbnZlcnNpb24taXRlbS9jb252ZXJzaW9uLWl0ZW0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQ0RGO0FESUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQ0ZGO0FES0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ0hGO0FETUE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUNKRjtBRE9BO0VBQ0UsY0FBQTtBQ0xGO0FEUUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ05GO0FEU0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1BGO0FEVUE7RUFDRSxtQkFBQTtBQ1JGO0FEV0E7RUFDRSxlQUFBO0FDVEY7QURZQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUNWRjtBRGFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDWEY7QURjQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1pGO0FEYUU7RUFDRSxhQUFBO0FDWEo7QURlQTs7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ1pGO0FEYUU7O0VBQ0UsYUFBQTtBQ1ZKO0FEY0E7RUFDRSxlQUFBO0FDWkY7QURhRTtFQUNFLGFBQUE7QUNYSjtBRGVBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNiRjtBRGdCQTtFQUNFLDhCQUFBO0FDZEY7QURpQkE7RUFDRSxjQUFBO0FDZkY7QURrQkE7RUFDRSxjQUFBO0FDaEJGO0FEbUJBO0VBQ0UsY0FBQTtBQ2pCRjtBRG9CQTtFQUNFLGNBQUE7QUNsQkY7QURxQkE7RUFDRSxjQUFBO0FDbkJGO0FEc0JBO0VBQ0UsY0FBQTtBQ3BCRjtBRHVCQTs7O0VBQ0UsZUFBQTtBQ25CRjtBRHNCQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQ3BCRjtBRHVCQTtFQUNFOzs7SUFDSSxhQUFBO0VDbkJKO0VEdUJFO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0VDckJKO0VEMEJFO0lBQ0UsY0FBQTtFQ3hCSjtFRDZCRTtJQUNFLGFBQUE7RUMzQko7RUQrQkE7SUFDRSxlQUFBO0VDN0JGO0VEOEJFO0lBQ0UsY0FBQTtFQzVCSjtFRDJCRTtJQUdJLGNBQUE7RUMzQk47RUR3QkU7SUFNSSxlQUFBO0lBQ0EsaUJBQUE7RUMzQk47RURnQ0E7SUFDRSxlQUFBO0VDOUJGO0VEK0JFO0lBQ0UsYUFBQTtFQzdCSjtFRGlDQTtJQUNFLG1CQUFBO0lBQ0EsZ0JBQUE7RUMvQkY7QUFDRiIsImZpbGUiOiJsaWJzL2NvbnZlcnNpb24vc3JjL2xpYi9jb252ZXJzaW9uLWl0ZW0vY29udmVyc2lvbi1pdGVtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbW1vbi1jb21wb25lbnRzL3NyYy9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi5nZC1jb252ZXJ0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcbn1cblxuLmdkLWNvbnZlcnQtcmVtb3ZlIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBjb2xvcjogIzZFNkU2RTtcbiAgbWFyZ2luOiAyM3B4IDI3cHggMCAyMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5nZC1maWxlcXVldWUtbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA2NzFweDtcbn1cblxuLmdkLWZpbGVxdWV1ZS1uYW1lIGZhLWljb24ge1xuICBmb250LXNpemU6IDMycHg7ICAgXG4gIG1hcmdpbjogMTlweCAyMXB4IDAgMDtcbn1cblxuLmdkLWZpbGVxdWV1ZS1uYW1lLmRpc2FibGVkIGZhLWljb24ge1xuICBjb2xvcjogIzZFNkU2RTtcbn1cblxuLmdkLXF1ZXVlLW5hbWUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5nZC1xdWV1ZS1zaXplIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAyM3B4O1xufVxuXG4uZ2QtZGVzdGluYXRpb24tZmlsZSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5nZC1kZXN0aW5hdGlvbi1maWxlIC5nZC1xdWV1ZS1uYW1lIHtcbiAgY3Vyc29yOiBpbmhlcml0O1xufVxuXG4uZ2QtY29udmVydC1zdGF0dXMge1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiAjREJEQkRCO1xuICBtYXJnaW46IDE2cHggMTIycHggMCAxMTFweDtcbn1cblxuLmdkLWNvbnZlcnNpb24tY29tcGxldGUge1xuICBjb2xvcjogIzYyQTUyOTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmdkLWNvbnZlcnNpb24tcHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAzMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGNvbG9yOiAjMDA3YWZmO1xuICAmLm1vYmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uZ2QtY29udmVydC1zaW5nbGUsIC5nZC1kb3dubG9hZC1zaW5nbGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBtYXJnaW46IDI5cHggNTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmLm1vYmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uZ2QtZmlsZS1mb3JtYXQge1xuICBmb250LXNpemU6IDExcHg7XG4gICYubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4gIFxuLmdkLWZpbGUtc2l6ZSB7XG4gIHdpZHRoOiAxMTJweDtcbiAgY29sb3I6ICM3Nzc3Nzc7XG59XG5cbi5kaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcbn1cblxuLmdkLWNvbnZlcnQtaXRlbSAubmctZmEtaWNvbi5mYS1maWxlLXBkZiB7XG4gIGNvbG9yOiAjRTIxNzE3O1xufVxuXG4uZ2QtY29udmVydC1pdGVtIC5uZy1mYS1pY29uLmZhLWZpbGUtd29yZCB7XG4gIGNvbG9yOiAjNjk3OUI5O1xufVxuXG4uZ2QtY29udmVydC1pdGVtIC5uZy1mYS1pY29uLmZhLWZpbGUtcG93ZXJwb2ludCB7XG4gIGNvbG9yOiAjRTI5NDE3O1xufVxuXG4uZ2QtY29udmVydC1pdGVtIC5uZy1mYS1pY29uLmZhLWZpbGUtZXhjZWwge1xuICBjb2xvcjogIzNGQTMwMDtcbn1cblxuLmdkLWNvbnZlcnQtaXRlbSAubmctZmEtaWNvbi5mYS1maWxlLWltYWdlIHtcbiAgY29sb3I6ICNFMjE3REE7XG59XG5cbi5nZC1jb252ZXJ0LWl0ZW0gLm5nLWZhLWljb24uZmEtZmlsZS10ZXh0IC5mYS1mb2xkZXIge1xuICBjb2xvcjogIzVENkE3NTtcbn1cblxuLmdkLWZpbGVxdWV1ZS1uYW1lIC5uZy1mYS1pY29uLCAuZ2QtY29udmVydC1zdGF0dXMgLm5nLWZhLWljb24sIC5nZC1kZXN0aW5hdGlvbi1maWxlIC5uZy1mYS1pY29ue1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbi5nZC1maWxlcXVldWUtbmFtZSBmYS1pY29uIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW46IDE2cHggMjFweCAwIDA7XG59XG5cbkBtZWRpYSBAcGhvbmUtZG93biB7XG4gIC5nZC1maWxlLXNpemUsIC5nZC1jb252ZXJ0LXN0YXR1cywgLmdkLWRlc3RpbmF0aW9uLWZpbGUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5nZC1jb252ZXJzaW9uLXByb2dyZXNzIHtcbiAgICAmLm1vYmlsZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogMTZweCA0NXB4O1xuICAgIH1cbiAgfVxuXG4gIC5nZC1jb252ZXJ0LXNpbmdsZSB7XG4gICAgJi5tb2JpbGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgLmdkLWNvbnZlcnQtc2luZ2xlIHtcbiAgICAmOm5vdCgubW9iaWxlKSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5nZC1maWxlLWZvcm1hdCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgICYubW9iaWxlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgPiBmYS1pY29ue1xuICAgICAgICBjb2xvcjogI2JlYmViZTtcbiAgICAgIH1cbiAgICAgIGZhLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5nZC1maWxlLWZvcm1hdCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgICY6bm90KC5tb2JpbGUpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLmdkLWZpbGVxdWV1ZS1uYW1lIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbn0iLCIuZ2QtY29udmVydC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7XG59XG4uZ2QtY29udmVydC1yZW1vdmUge1xuICBmb250LXNpemU6IDIxcHg7XG4gIGNvbG9yOiAjNkU2RTZFO1xuICBtYXJnaW46IDIzcHggMjdweCAwIDIxcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5nZC1maWxlcXVldWUtbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA2NzFweDtcbn1cbi5nZC1maWxlcXVldWUtbmFtZSBmYS1pY29uIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW46IDE5cHggMjFweCAwIDA7XG59XG4uZ2QtZmlsZXF1ZXVlLW5hbWUuZGlzYWJsZWQgZmEtaWNvbiB7XG4gIGNvbG9yOiAjNkU2RTZFO1xufVxuLmdkLXF1ZXVlLW5hbWUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uZ2QtcXVldWUtc2l6ZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMjNweDtcbn1cbi5nZC1kZXN0aW5hdGlvbi1maWxlIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5nZC1kZXN0aW5hdGlvbi1maWxlIC5nZC1xdWV1ZS1uYW1lIHtcbiAgY3Vyc29yOiBpbmhlcml0O1xufVxuLmdkLWNvbnZlcnQtc3RhdHVzIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogI0RCREJEQjtcbiAgbWFyZ2luOiAxNnB4IDEyMnB4IDAgMTExcHg7XG59XG4uZ2QtY29udmVyc2lvbi1jb21wbGV0ZSB7XG4gIGNvbG9yOiAjNjJBNTI5O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmdkLWNvbnZlcnNpb24tcHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAzMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGNvbG9yOiAjMDA3YWZmO1xufVxuLmdkLWNvbnZlcnNpb24tcHJvZ3Jlc3MubW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5nZC1jb252ZXJ0LXNpbmdsZSxcbi5nZC1kb3dubG9hZC1zaW5nbGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBtYXJnaW46IDI5cHggNTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmdkLWNvbnZlcnQtc2luZ2xlLm1vYmlsZSxcbi5nZC1kb3dubG9hZC1zaW5nbGUubW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5nZC1maWxlLWZvcm1hdCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5nZC1maWxlLWZvcm1hdC5tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmdkLWZpbGUtc2l6ZSB7XG4gIHdpZHRoOiAxMTJweDtcbiAgY29sb3I6ICM3Nzc3Nzc7XG59XG4uZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG59XG4uZ2QtY29udmVydC1pdGVtIC5uZy1mYS1pY29uLmZhLWZpbGUtcGRmIHtcbiAgY29sb3I6ICNFMjE3MTc7XG59XG4uZ2QtY29udmVydC1pdGVtIC5uZy1mYS1pY29uLmZhLWZpbGUtd29yZCB7XG4gIGNvbG9yOiAjNjk3OUI5O1xufVxuLmdkLWNvbnZlcnQtaXRlbSAubmctZmEtaWNvbi5mYS1maWxlLXBvd2VycG9pbnQge1xuICBjb2xvcjogI0UyOTQxNztcbn1cbi5nZC1jb252ZXJ0LWl0ZW0gLm5nLWZhLWljb24uZmEtZmlsZS1leGNlbCB7XG4gIGNvbG9yOiAjM0ZBMzAwO1xufVxuLmdkLWNvbnZlcnQtaXRlbSAubmctZmEtaWNvbi5mYS1maWxlLWltYWdlIHtcbiAgY29sb3I6ICNFMjE3REE7XG59XG4uZ2QtY29udmVydC1pdGVtIC5uZy1mYS1pY29uLmZhLWZpbGUtdGV4dCAuZmEtZm9sZGVyIHtcbiAgY29sb3I6ICM1RDZBNzU7XG59XG4uZ2QtZmlsZXF1ZXVlLW5hbWUgLm5nLWZhLWljb24sXG4uZ2QtY29udmVydC1zdGF0dXMgLm5nLWZhLWljb24sXG4uZ2QtZGVzdGluYXRpb24tZmlsZSAubmctZmEtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cbi5nZC1maWxlcXVldWUtbmFtZSBmYS1pY29uIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW46IDE2cHggMjFweCAwIDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAzN3B4KSB7XG4gIC5nZC1maWxlLXNpemUsXG4gIC5nZC1jb252ZXJ0LXN0YXR1cyxcbiAgLmdkLWRlc3RpbmF0aW9uLWZpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmdkLWNvbnZlcnNpb24tcHJvZ3Jlc3MubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDE2cHggNDVweDtcbiAgfVxuICAuZ2QtY29udmVydC1zaW5nbGUubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuZ2QtY29udmVydC1zaW5nbGU6bm90KC5tb2JpbGUpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5nZC1maWxlLWZvcm1hdCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG4gIC5nZC1maWxlLWZvcm1hdC5tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5nZC1maWxlLWZvcm1hdC5tb2JpbGUgPiBmYS1pY29uIHtcbiAgICBjb2xvcjogI2JlYmViZTtcbiAgfVxuICAuZ2QtZmlsZS1mb3JtYXQubW9iaWxlIGZhLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgfVxuICAuZ2QtZmlsZS1mb3JtYXQge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuICAuZ2QtZmlsZS1mb3JtYXQ6bm90KC5tb2JpbGUpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5nZC1maWxlcXVldWUtbmFtZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/conversion/src/lib/conversion-item/conversion-item.component.ts":
/*!***************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/conversion/src/lib/conversion-item/conversion-item.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ConversionItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversionItemComponent", function() { return ConversionItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "../../libs/conversion/src/lib/models.ts");
/* harmony import */ var _conversion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../conversion.service */ "../../libs/conversion/src/lib/conversion.service.ts");




var ConversionItemComponent = /** @class */ (function () {
    function ConversionItemComponent(_conversionService) {
        this._conversionService = _conversionService;
    }
    ConversionItemComponent.prototype.ngOnInit = function () {
    };
    ConversionItemComponent.prototype.convert = function ($event, item) {
        $event.preventDefault();
        $event.stopPropagation();
        this._conversionService.selectedItemToConvert(item);
    };
    ConversionItemComponent.prototype.downloadFile = function (item) {
        window.location.assign(this._conversionService.getDownloadUrl(item.destinationFileName));
    };
    ConversionItemComponent.prototype.removeItemFromQueue = function ($event, item) {
        $event.preventDefault();
        $event.stopPropagation();
        this._conversionService.selectedItemToRemove(item);
    };
    ConversionItemComponent.ctorParameters = function () { return [
        { type: _conversion_service__WEBPACK_IMPORTED_MODULE_3__["ConversionService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models__WEBPACK_IMPORTED_MODULE_2__["ConversionItemModel"])
    ], ConversionItemComponent.prototype, "item", void 0);
    ConversionItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-conversion-item',
            template: __webpack_require__(/*! raw-loader!./conversion-item.component.html */ "../../node_modules/raw-loader/index.js!../../libs/conversion/src/lib/conversion-item/conversion-item.component.html"),
            styles: [__webpack_require__(/*! ./conversion-item.component.less */ "../../libs/conversion/src/lib/conversion-item/conversion-item.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_conversion_service__WEBPACK_IMPORTED_MODULE_3__["ConversionService"]])
    ], ConversionItemComponent);
    return ConversionItemComponent;
}());



/***/ }),

/***/ "../../libs/conversion/src/lib/conversion-queue/conversion-queue.component.less":
/*!*******************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/conversion/src/lib/conversion-queue/conversion-queue.component.less ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#gd-convert-queue {\n  flex-direction: column;\n  height: 100%;\n  padding-top: 5px;\n  background-color: #e7e7e7;\n}\n.gd-queue-header {\n  display: flex;\n  font-size: 11px;\n  color: #ACACAC;\n  width: 100%;\n  height: 17px;\n}\n.gd-placeholder {\n  margin: 0px 27px 0 35px;\n}\n.gd-queue-header div:nth-child(2) {\n  width: 671px;\n  text-align: left;\n  display: flex;\n}\n.gd-queue-header div:nth-child(4) {\n  margin: 0px 122px 0 99px;\n  width: 32px;\n}\n.gd-queue-header div:nth-child(3) {\n  width: 121px;\n  text-align: left;\n}\n.gd-queue-header div:nth-child(5) {\n  width: 671px;\n  text-align: left;\n}\n.gd-queue-last-placeholder {\n  margin: 0px 52px;\n}\n@media (max-width: 1037px) {\n  .gd-queue-header {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb252ZXJzaW9uL3NyYy9saWIvY29udmVyc2lvbi1xdWV1ZS9jb252ZXJzaW9uLXF1ZXVlLmNvbXBvbmVudC5sZXNzIiwibGlicy9jb252ZXJzaW9uL3NyYy9saWIvY29udmVyc2lvbi1xdWV1ZS9jb252ZXJzaW9uLXF1ZXVlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0RBO0FESUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZBO0FES0E7RUFDQSx1QkFBQTtBQ0hBO0FETUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDSkE7QURPQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtBQ0xBO0FEUUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNOQTtBRFNBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDUEE7QURVQTtFQUNBLGdCQUFBO0FDUkE7QURXQTtFQUNJO0lBQ0ksYUFBQTtFQ1ROO0FBQ0YiLCJmaWxlIjoibGlicy9jb252ZXJzaW9uL3NyYy9saWIvY29udmVyc2lvbi1xdWV1ZS9jb252ZXJzaW9uLXF1ZXVlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbW1vbi1jb21wb25lbnRzL3NyYy9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbiNnZC1jb252ZXJ0LXF1ZXVlIHtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5oZWlnaHQ6IDEwMCU7XG5wYWRkaW5nLXRvcDogNXB4O1xuYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcbn1cblxuLmdkLXF1ZXVlLWhlYWRlciB7XG5kaXNwbGF5OiBmbGV4O1xuZm9udC1zaXplOiAxMXB4O1xuY29sb3I6ICNBQ0FDQUM7XG53aWR0aDogMTAwJTtcbmhlaWdodDogMTdweDtcbn1cblxuLmdkLXBsYWNlaG9sZGVyIHtcbm1hcmdpbjogMHB4IDI3cHggMCAzNXB4O1xufVxuXG4uZ2QtcXVldWUtaGVhZGVyIGRpdjpudGgtY2hpbGQoMikgeyAgIFxud2lkdGg6IDY3MXB4O1xudGV4dC1hbGlnbjogbGVmdDtcbmRpc3BsYXk6IGZsZXg7XG59XG5cbi5nZC1xdWV1ZS1oZWFkZXIgZGl2Om50aC1jaGlsZCg0KSB7XG5tYXJnaW46IDBweCAxMjJweCAwIDk5cHg7XG53aWR0aDogMzJweDtcbn1cblxuLmdkLXF1ZXVlLWhlYWRlciBkaXY6bnRoLWNoaWxkKDMpIHtcbndpZHRoOiAxMjFweDtcbnRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5nZC1xdWV1ZS1oZWFkZXIgZGl2Om50aC1jaGlsZCg1KXtcbndpZHRoOiA2NzFweDtcbnRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5nZC1xdWV1ZS1sYXN0LXBsYWNlaG9sZGVye1xubWFyZ2luOiAwcHggNTJweDtcbn1cblxuQG1lZGlhIEBwaG9uZS1kb3duIHtcbiAgICAuZ2QtcXVldWUtaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59IiwiI2dkLWNvbnZlcnQtcXVldWUge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XG59XG4uZ2QtcXVldWUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogI0FDQUNBQztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTdweDtcbn1cbi5nZC1wbGFjZWhvbGRlciB7XG4gIG1hcmdpbjogMHB4IDI3cHggMCAzNXB4O1xufVxuLmdkLXF1ZXVlLWhlYWRlciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgd2lkdGg6IDY3MXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmdkLXF1ZXVlLWhlYWRlciBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgbWFyZ2luOiAwcHggMTIycHggMCA5OXB4O1xuICB3aWR0aDogMzJweDtcbn1cbi5nZC1xdWV1ZS1oZWFkZXIgZGl2Om50aC1jaGlsZCgzKSB7XG4gIHdpZHRoOiAxMjFweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5nZC1xdWV1ZS1oZWFkZXIgZGl2Om50aC1jaGlsZCg1KSB7XG4gIHdpZHRoOiA2NzFweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5nZC1xdWV1ZS1sYXN0LXBsYWNlaG9sZGVyIHtcbiAgbWFyZ2luOiAwcHggNTJweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDM3cHgpIHtcbiAgLmdkLXF1ZXVlLWhlYWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "../../libs/conversion/src/lib/conversion-queue/conversion-queue.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/conversion/src/lib/conversion-queue/conversion-queue.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: ConversionQueueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversionQueueComponent", function() { return ConversionQueueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ConversionQueueComponent = /** @class */ (function () {
    function ConversionQueueComponent() {
        this.items = [];
        this.selectedItemToConvert = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ConversionQueueComponent.prototype.ngOnInit = function () {
    };
    ConversionQueueComponent.prototype.convertSingleItem = function ($event) {
        this.selectedItemToConvert.emit($event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ConversionQueueComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConversionQueueComponent.prototype, "selectedItemToConvert", void 0);
    ConversionQueueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-conversion-queue',
            template: __webpack_require__(/*! raw-loader!./conversion-queue.component.html */ "../../node_modules/raw-loader/index.js!../../libs/conversion/src/lib/conversion-queue/conversion-queue.component.html"),
            styles: [__webpack_require__(/*! ./conversion-queue.component.less */ "../../libs/conversion/src/lib/conversion-queue/conversion-queue.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConversionQueueComponent);
    return ConversionQueueComponent;
}());



/***/ }),

/***/ "../../libs/conversion/src/lib/conversion.module.ts":
/*!***************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/conversion/src/lib/conversion.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: initializeApp, ConversionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return initializeApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversionModule", function() { return ConversionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _conversion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conversion.service */ "../../libs/conversion/src/lib/conversion.service.ts");
/* harmony import */ var _conversion_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conversion-config.service */ "../../libs/conversion/src/lib/conversion-config.service.ts");
/* harmony import */ var _conversion_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./conversion-app.component */ "../../libs/conversion/src/lib/conversion-app.component.ts");
/* harmony import */ var _conversion_browse_files_modal_conversion_browse_files_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./conversion-browse-files-modal/conversion-browse-files-modal.component */ "../../libs/conversion/src/lib/conversion-browse-files-modal/conversion-browse-files-modal.component.ts");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "../../node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "../../node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _conversion_queue_conversion_queue_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./conversion-queue/conversion-queue.component */ "../../libs/conversion/src/lib/conversion-queue/conversion-queue.component.ts");
/* harmony import */ var _conversion_item_conversion_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./conversion-item/conversion-item.component */ "../../libs/conversion/src/lib/conversion-item/conversion-item.component.ts");















function initializeApp(conversionConfigService) {
    var result = function () { return conversionConfigService.load(); };
    return result;
}
var ConversionModule = /** @class */ (function () {
    function ConversionModule() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_11__["far"]);
    }
    ConversionModule_1 = ConversionModule;
    ConversionModule.forRoot = function (apiEndpoint) {
        _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: ConversionModule_1
        };
    };
    var ConversionModule_1;
    ConversionModule = ConversionModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_conversion_app_component__WEBPACK_IMPORTED_MODULE_7__["ConversionAppComponent"], _conversion_browse_files_modal_conversion_browse_files_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConversionBrowseFilesModalComponent"], _conversion_queue_conversion_queue_component__WEBPACK_IMPORTED_MODULE_13__["ConversionQueueComponent"], _conversion_item_conversion_item_component__WEBPACK_IMPORTED_MODULE_14__["ConversionItemComponent"]],
            exports: [_conversion_app_component__WEBPACK_IMPORTED_MODULE_7__["ConversionAppComponent"], _conversion_browse_files_modal_conversion_browse_files_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConversionBrowseFilesModalComponent"], _conversion_queue_conversion_queue_component__WEBPACK_IMPORTED_MODULE_13__["ConversionQueueComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"]],
            providers: [
                _conversion_service__WEBPACK_IMPORTED_MODULE_5__["ConversionService"],
                _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
                _conversion_config_service__WEBPACK_IMPORTED_MODULE_6__["ConversionConfigService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ErrorInterceptorService"],
                    multi: true
                },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    useFactory: initializeApp,
                    deps: [_conversion_config_service__WEBPACK_IMPORTED_MODULE_6__["ConversionConfigService"]], multi: true
                }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConversionModule);
    return ConversionModule;
}());



/***/ }),

/***/ "../../libs/conversion/src/lib/conversion.service.ts":
/*!****************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/conversion/src/lib/conversion.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: ConversionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversionService", function() { return ConversionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models */ "../../libs/conversion/src/lib/models.ts");






var ConversionService = /** @class */ (function () {
    function ConversionService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._selectedFormat = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](new Array());
        this._selectFormats = this._selectedFormat.asObservable();
        this._itemToConvert = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.itemToConvert = this._itemToConvert.asObservable();
        this._itemToRemove = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.itemToRemove = this._itemToRemove.asObservable();
    }
    Object.defineProperty(ConversionService.prototype, "selectedItems", {
        get: function () {
            return this._selectFormats;
        },
        enumerable: true,
        configurable: true
    });
    ConversionService.prototype.selectItems = function (filesToConvert) {
        this._selectedFormat.next(filesToConvert);
    };
    ConversionService.prototype.loadFiles = function (path) {
        return this._http.post(this._config.getConversionApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_FILE_TREE, { 'path': path }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    ConversionService.prototype.upload = function (file, url, rewrite) {
        var formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getConversionApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].UPLOAD_DOCUMENTS, formData);
    };
    ConversionService.prototype.convert = function (file) {
        var req = new _models__WEBPACK_IMPORTED_MODULE_5__["ConversionRequestModel"]();
        req.added = true;
        req.destinationType = file.destinationType;
        req.guid = file.guid;
        req.size = file.size;
        return this._http.post(this._config.getConversionApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].CONVERT_FILE, req);
    };
    ConversionService.prototype.getDownloadUrl = function (guid) {
        return this._config.getConversionApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].DOWNLOAD_DOCUMENTS + '/?path=' + guid;
    };
    ConversionService.prototype.selectedItemToConvert = function (item) {
        this._itemToConvert.next(item);
    };
    ConversionService.prototype.selectedItemToRemove = function (item) {
        this._itemToRemove.next(item);
    };
    ConversionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    ConversionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], ConversionService);
    return ConversionService;
}());



/***/ }),

/***/ "../../libs/conversion/src/lib/models.ts":
/*!****************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/conversion/src/lib/models.ts ***!
  \****************************************************************************************/
/*! exports provided: ConversionRequestModel, ConversionItemModel, ExtendedFileModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversionRequestModel", function() { return ConversionRequestModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversionItemModel", function() { return ConversionItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedFileModel", function() { return ExtendedFileModel; });
var ConversionRequestModel = /** @class */ (function () {
    function ConversionRequestModel() {
    }
    return ConversionRequestModel;
}());

var ConversionItemModel = /** @class */ (function () {
    function ConversionItemModel() {
    }
    return ConversionItemModel;
}());

var ExtendedFileModel = /** @class */ (function () {
    function ExtendedFileModel() {
    }
    return ExtendedFileModel;
}());



/***/ }),

/***/ "../../libs/editor/src/index.ts":
/*!*******************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/editor/src/index.ts ***!
  \*******************************************************************************/
/*! exports provided: initializeApp, setupLoadingInterceptor, EditorModule, EditorAppComponent, EditorConfigService, EditorConfig, EditorService, CreateDocumentModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_editor_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/editor.module */ "../../libs/editor/src/lib/editor.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return _lib_editor_module__WEBPACK_IMPORTED_MODULE_0__["initializeApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupLoadingInterceptor", function() { return _lib_editor_module__WEBPACK_IMPORTED_MODULE_0__["setupLoadingInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return _lib_editor_module__WEBPACK_IMPORTED_MODULE_0__["EditorModule"]; });

/* harmony import */ var _lib_editor_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/editor-app.component */ "../../libs/editor/src/lib/editor-app.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorAppComponent", function() { return _lib_editor_app_component__WEBPACK_IMPORTED_MODULE_1__["EditorAppComponent"]; });

/* harmony import */ var _lib_editor_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/editor-config.service */ "../../libs/editor/src/lib/editor-config.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorConfigService", function() { return _lib_editor_config_service__WEBPACK_IMPORTED_MODULE_2__["EditorConfigService"]; });

/* harmony import */ var _lib_editor_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/editor-config */ "../../libs/editor/src/lib/editor-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorConfig", function() { return _lib_editor_config__WEBPACK_IMPORTED_MODULE_3__["EditorConfig"]; });

/* harmony import */ var _lib_editor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/editor.service */ "../../libs/editor/src/lib/editor.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorService", function() { return _lib_editor_service__WEBPACK_IMPORTED_MODULE_4__["EditorService"]; });

/* harmony import */ var _lib_create_document_modal_create_document_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/create.document-modal/create.document-modal.component */ "../../libs/editor/src/lib/create.document-modal/create.document-modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateDocumentModalComponent", function() { return _lib_create_document_modal_create_document_modal_component__WEBPACK_IMPORTED_MODULE_5__["CreateDocumentModalComponent"]; });









/***/ }),

/***/ "../../libs/editor/src/lib/create.document-modal/create.document-modal.component.less":
/*!*************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/editor/src/lib/create.document-modal/create.document-modal.component.less ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-create-wrap {\n  display: flex;\n  flex-direction: column;\n  margin: 24px;\n}\n.gd-create-wrap label {\n  font-size: 14px;\n  color: #acacac;\n  padding-bottom: 12px;\n}\n.gd-create-wrap input {\n  margin-bottom: 20px;\n  border: 1px solid #6e6e6e !important;\n  padding: 9px 0px 9px 10px;\n  font-size: 14px;\n}\n.gd-create-wrap gd-button {\n  align-self: flex-end;\n}\n.gd-create-wrap ::ng-deep .button ::ng-deep .text {\n  font-size: 10px !important;\n}\n#gd-create-document-section {\n  width: 468px;\n}\n::ng-deep .gd-select-format .dropdown-menu {\n  height: 167px;\n  overflow: hidden;\n  overflow-y: auto;\n  top: 239px !important;\n  min-width: 0 !important;\n  width: 65px;\n  border: none !important;\n}\n::ng-deep .gd-select-format .dropdown-menu .option {\n  font-size: 10px;\n  color: #6e6e6e;\n}\n::ng-deep .gd-select-format .dropdown-menu .option:hover {\n  background-color: #4b566c !important;\n}\n::ng-deep .select {\n  height: 35px;\n  width: 63px;\n  border: 1px solid #6e6e6e;\n  color: #6e6e6e !important;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n::ng-deep .select .selected-value {\n  padding: 9px 0px 9px 8px;\n}\n::ng-deep .select .nav-caret {\n  margin-right: 8px;\n}\n@media (max-width: 1037px) {\n  #gd-create-document-section {\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9lZGl0b3Ivc3JjL2xpYi9jcmVhdGUuZG9jdW1lbnQtbW9kYWwvY3JlYXRlLmRvY3VtZW50LW1vZGFsLmNvbXBvbmVudC5sZXNzIiwibGlicy9lZGl0b3Ivc3JjL2xpYi9jcmVhdGUuZG9jdW1lbnQtbW9kYWwvY3JlYXRlLmRvY3VtZW50LW1vZGFsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0RGO0FERkE7RUFLSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDQUo7QURQQTtFQVVJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNBSjtBRGJBO0VBZ0JJLG9CQUFBO0FDQUo7QURoQkE7RUFvQk0sMEJBQUE7QUNETjtBRE1BO0VBQ0UsWUFBQTtBQ0pGO0FET0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBUUEsdUJBQUE7QUNaRjtBREZBO0VBUUksZUFBQTtFQUNBLGNBQUE7QUNISjtBRE5BO0VBWUksb0NBQUE7QUNISjtBRFFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNORjtBRERBO0VBU0ksd0JBQUE7QUNMSjtBREpBO0VBWUksaUJBQUE7QUNMSjtBRFNBO0VBQ0U7SUFDRSxXQUFBO0VDUEY7QUFDRiIsImZpbGUiOiJsaWJzL2VkaXRvci9zcmMvbGliL2NyZWF0ZS5kb2N1bWVudC1tb2RhbC9jcmVhdGUuZG9jdW1lbnQtbW9kYWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tbW9uLWNvbXBvbmVudHMvc3JjL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuLmdkLWNyZWF0ZS13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAyNHB4O1xuICBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiBAc2lsdmVyLWNoYWxpY2U7XG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIH1cbiAgaW5wdXQge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZlNmU2ZSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDlweCAwcHggOXB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIGdkLWJ1dHRvbiB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIH1cbiAgOjpuZy1kZWVwIC5idXR0b24ge1xuICAgIDo6bmctZGVlcCAudGV4dCB7XG4gICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuI2dkLWNyZWF0ZS1kb2N1bWVudC1zZWN0aW9uIHtcbiAgd2lkdGg6IDQ2OHB4O1xufVxuXG46Om5nLWRlZXAgLmdkLXNlbGVjdC1mb3JtYXQgLmRyb3Bkb3duLW1lbnUge1xuICBoZWlnaHQ6IDE2N3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB0b3A6IDIzOXB4ICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMCAhaW1wb3J0YW50O1xuICB3aWR0aDogNjVweDtcbiAgLm9wdGlvbiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiBAZG92ZS1ncmF5O1xuICB9XG4gIC5vcHRpb246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGZvbGRlciAhaW1wb3J0YW50O1xuICB9XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnNlbGVjdCB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDYzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIEBkb3ZlLWdyYXk7XG4gIGNvbG9yOiBAZG92ZS1ncmF5ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLnNlbGVjdGVkLXZhbHVlIHtcbiAgICBwYWRkaW5nOiA5cHggMHB4IDlweCA4cHg7XG4gIH1cbiAgLm5hdi1jYXJldCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cbn1cblxuQG1lZGlhIEBwaG9uZS1kb3duIHtcbiAgI2dkLWNyZWF0ZS1kb2N1bWVudC1zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIiwiLmdkLWNyZWF0ZS13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAyNHB4O1xufVxuLmdkLWNyZWF0ZS13cmFwIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2FjYWNhYztcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG4uZ2QtY3JlYXRlLXdyYXAgaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNmU2ZTZlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDlweCAwcHggOXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5nZC1jcmVhdGUtd3JhcCBnZC1idXR0b24ge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbi5nZC1jcmVhdGUtd3JhcCA6Om5nLWRlZXAgLmJ1dHRvbiA6Om5nLWRlZXAgLnRleHQge1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbiNnZC1jcmVhdGUtZG9jdW1lbnQtc2VjdGlvbiB7XG4gIHdpZHRoOiA0NjhweDtcbn1cbjo6bmctZGVlcCAuZ2Qtc2VsZWN0LWZvcm1hdCAuZHJvcGRvd24tbWVudSB7XG4gIGhlaWdodDogMTY3cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHRvcDogMjM5cHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA2NXB4O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuZ2Qtc2VsZWN0LWZvcm1hdCAuZHJvcGRvd24tbWVudSAub3B0aW9uIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzZlNmU2ZTtcbn1cbjo6bmctZGVlcCAuZ2Qtc2VsZWN0LWZvcm1hdCAuZHJvcGRvd24tbWVudSAub3B0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNTY2YyAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5zZWxlY3Qge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiA2M3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNmU2ZTZlO1xuICBjb2xvcjogIzZlNmU2ZSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG46Om5nLWRlZXAgLnNlbGVjdCAuc2VsZWN0ZWQtdmFsdWUge1xuICBwYWRkaW5nOiA5cHggMHB4IDlweCA4cHg7XG59XG46Om5nLWRlZXAgLnNlbGVjdCAubmF2LWNhcmV0IHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAzN3B4KSB7XG4gICNnZC1jcmVhdGUtZG9jdW1lbnQtc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "../../libs/editor/src/lib/create.document-modal/create.document-modal.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/editor/src/lib/create.document-modal/create.document-modal.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: CreateDocumentModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDocumentModalComponent", function() { return CreateDocumentModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editor.service */ "../../libs/editor/src/lib/editor.service.ts");




var CreateDocumentModalComponent = /** @class */ (function () {
    function CreateDocumentModalComponent(_editorService, _modalService, _excMessageService) {
        this._editorService = _editorService;
        this._modalService = _modalService;
        this._excMessageService = _excMessageService;
        this.savingFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.FILE_NAME_REGEX = /^.*[\\\/]/;
    }
    Object.defineProperty(CreateDocumentModalComponent.prototype, "format", {
        get: function () {
            return this._format;
        },
        enumerable: true,
        configurable: true
    });
    CreateDocumentModalComponent.prototype.ngOnInit = function () {
        this.loadFormats();
    };
    CreateDocumentModalComponent.prototype.loadFormats = function () {
        var _this = this;
        this._editorService.getFormats().subscribe(function (formats) {
            _this.formats = _this.formatOptions(formats);
            _this._format = "Docx";
        });
    };
    CreateDocumentModalComponent.prototype.selectFormat = function ($event) {
        this._format = $event.value;
    };
    CreateDocumentModalComponent.prototype.createFormatOption = function (val) {
        return { value: val, name: val };
    };
    CreateDocumentModalComponent.prototype.formatOptions = function (formats) {
        var allTypes = new Array();
        for (var i = 0; i < formats.length; i++) {
            allTypes.push(this.createFormatOption(formats[i]));
        }
        return allTypes;
    };
    CreateDocumentModalComponent.prototype.save = function (name) {
        var fileName = "";
        if (name && name !== "") {
            fileName = name + "." + this._format;
        }
        else if (!this.file) {
            this._modalService.open(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["CommonModals"].ErrorMessage);
            this._excMessageService.changeMessage("File name is empty");
        }
        this._modalService.close(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["CommonModals"].CreateDocument);
        var guid = fileName !== "" ? fileName : this.file.guid;
        var password = this.file ? this.file.password : '';
        this.savingFile.emit(new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["FileCredentials"](guid, password));
    };
    CreateDocumentModalComponent.prototype.refresh = function ($event) {
        if (!$event) {
            this.closing.emit(true);
        }
    };
    CreateDocumentModalComponent.ctorParameters = function () { return [
        { type: _editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ModalService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ExceptionMessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["FileCredentials"])
    ], CreateDocumentModalComponent.prototype, "file", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CreateDocumentModalComponent.prototype, "savingFile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateDocumentModalComponent.prototype, "closing", void 0);
    CreateDocumentModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-create-document-modal',
            template: __webpack_require__(/*! raw-loader!./create.document-modal.component.html */ "../../node_modules/raw-loader/index.js!../../libs/editor/src/lib/create.document-modal/create.document-modal.component.html"),
            styles: [__webpack_require__(/*! ./create.document-modal.component.less */ "../../libs/editor/src/lib/create.document-modal/create.document-modal.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ModalService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ExceptionMessageService"]])
    ], CreateDocumentModalComponent);
    return CreateDocumentModalComponent;
}());



/***/ }),

/***/ "../../libs/editor/src/lib/editor-app.component.less":
/*!****************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/editor/src/lib/editor-app.component.less ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');\n:host * {\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n}\n.current-page-number {\n  margin: 0px 15px;\n  font-size: 14px;\n  color: #959da5;\n}\n* {\n  -webkit-user-select: none;\n  /* Chrome all / Safari all */\n  -moz-user-select: none;\n  /* Firefox all */\n  -ms-user-select: none;\n  /* IE 10+ */\n  user-select: text;\n}\n.wrapper {\n  align-items: stretch;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.doc-panel {\n  display: flex;\n  height: inherit;\n}\n.gd-document {\n  width: 100%;\n  height: calc(100% - 90px);\n}\n.top-panel {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.toolbar-panel {\n  width: 100%;\n}\n/deep/ .gd-wrapper {\n  padding: 96px;\n  -webkit-user-select: text;\n  /* Chrome all / Safari all */\n  -moz-user-select: text;\n  /* Firefox all */\n  -ms-user-select: text;\n  /* IE 10+ */\n  user-select: text;\n  outline: none;\n}\n/deep/ .dropdown-menu {\n  min-width: unset !important;\n}\n.format-select {\n  margin: 0px 15px;\n}\n.palette {\n  position: absolute;\n  top: 90px;\n  z-index: 100;\n}\n.background-color-picker {\n  left: 700px;\n}\n.color-picker {\n  left: 750px;\n}\n.bg-color-pic {\n  border-radius: 100%;\n  border: 1px solid #CCC;\n  position: absolute;\n  height: 8px;\n  width: 8px;\n  right: 6px;\n  bottom: 6px;\n}\n/deep/ .button.inactive {\n  color: #CCC !important;\n}\n/deep/ .tab-content .button .tooltip {\n  margin-top: 45px;\n  margin-left: -36px;\n}\n/deep/ .gd-edit.active {\n  background-color: #7E8991;\n  border-radius: 5px;\n}\n/deep/ .gd-edit.active i {\n  color: #FFFFFF;\n}\n/deep/ .page {\n  width: 800px;\n}\n/deep/ .save-as-button-icon {\n  font-size: 11px;\n  left: 22px !important;\n  top: 13px !important;\n}\n.save-button {\n  position: absolute;\n  top: -5px;\n  left: 21px;\n}\n@media (max-width: 1037px) {\n   /deep/ .panzoom {\n    zoom: 0.4;\n    margin-top: 160px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvZWRpdG9yL3NyYy9saWIvZWRpdG9yLWFwcC5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9lZGl0b3Ivc3JjL2xpYi9lZGl0b3ItYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQ0NrQjtBQUNsQjtFQUNFLHNEQUFBO0FEQUY7QUNHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURERjtBQ0dBO0VBQ0UseUJBQUE7RUREQSw0QkFBNEI7RUNFNUIsc0JBQUE7RURBQSxnQkFBZ0I7RUNDaEIscUJBQUE7RURDQSxXQUFXO0VDQVgsaUJBQUE7QURFRjtBQ0FBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FERUY7QUNDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FEQ0Y7QUNFQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBREFGO0FDR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FEREY7QUNJQTtFQUNFLFdBQUE7QURGRjtBQ0tBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VESEEsNEJBQTRCO0VDSTVCLHNCQUFBO0VERkEsZ0JBQWdCO0VDR2hCLHFCQUFBO0VEREEsV0FBVztFQ0VYLGlCQUFBO0VBQ0EsYUFBQTtBREFGO0FDR0E7RUFDRSwyQkFBQTtBRERGO0FDSUE7RUFDRSxnQkFBQTtBREZGO0FDS0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FESEY7QUNNQTtFQUNFLFdBQUE7QURKRjtBQ09BO0VBQ0UsV0FBQTtBRExGO0FDUUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FETkY7QUNTQTtFQUNFLHNCQUFBO0FEUEY7QUNVQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QURSRjtBQ1dBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBRFRGO0FDWUE7RUFDRSxjQUFBO0FEVkY7QUNhQTtFQUNFLFlBQUE7QURYRjtBQ2NBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QURaRjtBQ2VBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBRGJGO0FDZ0JBO0dBQ0U7SUFDRSxTQUFBO0lBQ0EsaUJBQUE7RURkRjtBQUNGIiwiZmlsZSI6ImxpYnMvZWRpdG9yL3NyYy9saWIvZWRpdG9yLWFwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xuOmhvc3QgKiB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cbi5jdXJyZW50LXBhZ2UtbnVtYmVyIHtcbiAgbWFyZ2luOiAwcHggMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzk1OWRhNTtcbn1cbioge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBDaHJvbWUgYWxsIC8gU2FmYXJpIGFsbCAqL1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBGaXJlZm94IGFsbCAqL1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIElFIDEwKyAqL1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbn1cbi53cmFwcGVyIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmRvYy1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cbi5nZC1kb2N1bWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDkwcHgpO1xufVxuLnRvcC1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvb2xiYXItcGFuZWwge1xuICB3aWR0aDogMTAwJTtcbn1cbiAvZGVlcC8gLmdkLXdyYXBwZXIge1xuICBwYWRkaW5nOiA5NnB4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAvKiBDaHJvbWUgYWxsIC8gU2FmYXJpIGFsbCAqL1xuICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAvKiBGaXJlZm94IGFsbCAqL1xuICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC8qIElFIDEwKyAqL1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbiAvZGVlcC8gLmRyb3Bkb3duLW1lbnUge1xuICBtaW4td2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG4uZm9ybWF0LXNlbGVjdCB7XG4gIG1hcmdpbjogMHB4IDE1cHg7XG59XG4ucGFsZXR0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5MHB4O1xuICB6LWluZGV4OiAxMDA7XG59XG4uYmFja2dyb3VuZC1jb2xvci1waWNrZXIge1xuICBsZWZ0OiA3MDBweDtcbn1cbi5jb2xvci1waWNrZXIge1xuICBsZWZ0OiA3NTBweDtcbn1cbi5iZy1jb2xvci1waWMge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogOHB4O1xuICByaWdodDogNnB4O1xuICBib3R0b206IDZweDtcbn1cbiAvZGVlcC8gLmJ1dHRvbi5pbmFjdGl2ZSB7XG4gIGNvbG9yOiAjQ0NDICFpbXBvcnRhbnQ7XG59XG4gL2RlZXAvIC50YWItY29udGVudCAuYnV0dG9uIC50b29sdGlwIHtcbiAgbWFyZ2luLXRvcDogNDVweDtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xufVxuIC9kZWVwLyAuZ2QtZWRpdC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0U4OTkxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4gL2RlZXAvIC5nZC1lZGl0LmFjdGl2ZSBpIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4gL2RlZXAvIC5wYWdlIHtcbiAgd2lkdGg6IDgwMHB4O1xufVxuIC9kZWVwLyAuc2F2ZS1hcy1idXR0b24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGVmdDogMjJweCAhaW1wb3J0YW50O1xuICB0b3A6IDEzcHggIWltcG9ydGFudDtcbn1cbi5zYXZlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICBsZWZ0OiAyMXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzdweCkge1xuICAgL2RlZXAvIC5wYW56b29tIHtcbiAgICB6b29tOiAwLjQ7XG4gICAgbWFyZ2luLXRvcDogMTYwcHg7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9jb21tb24tY29tcG9uZW50cy9zcmMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCAoY3NzKSB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwJyk7XG46aG9zdCAqIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uY3VycmVudC1wYWdlLW51bWJlciB7XG4gIG1hcmdpbjogMHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5NTlkYTU7XG59XG4qe1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAgLyogQ2hyb21lIGFsbCAvIFNhZmFyaSBhbGwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgIC8qIEZpcmVmb3ggYWxsICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgICAgICAvKiBJRSAxMCsgKi9cbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG59XG4ud3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmRvYy1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cblxuLmdkLWRvY3VtZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogflwiY2FsYygxMDAlIC0gQHtlZGl0b3ItbmF2LWhlaWdodH0pXCI7XG59XG5cbi50b3AtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRvb2xiYXItcGFuZWwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuL2RlZXAvIC5nZC13cmFwcGVyIHtcbiAgcGFkZGluZzogOTZweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDsgIC8qIENocm9tZSBhbGwgLyBTYWZhcmkgYWxsICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7ICAgICAvKiBGaXJlZm94IGFsbCAqL1xuICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7ICAgICAgLyogSUUgMTArICovXG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vZGVlcC8gLmRyb3Bkb3duLW1lbnUge1xuICBtaW4td2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtYXQtc2VsZWN0IHtcbiAgbWFyZ2luOiAwcHggMTVweDtcbn1cblxuLnBhbGV0dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOTBweDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uYmFja2dyb3VuZC1jb2xvci1waWNrZXIge1xuICBsZWZ0OiA3MDBweDtcbn1cblxuLmNvbG9yLXBpY2tlciB7XG4gIGxlZnQ6IDc1MHB4O1xufVxuXG4uYmctY29sb3ItcGljIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDhweDtcbiAgd2lkdGg6IDhweDtcbiAgcmlnaHQ6IDZweDtcbiAgYm90dG9tOiA2cHg7XG59XG5cbi9kZWVwLyAuYnV0dG9uLmluYWN0aXZlIHtcbiAgY29sb3I6ICNDQ0MgIWltcG9ydGFudDtcbn1cblxuL2RlZXAvIC50YWItY29udGVudCAuYnV0dG9uIC50b29sdGlwIHtcbiAgbWFyZ2luLXRvcDogNDVweDtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xufVxuXG4vZGVlcC8gLmdkLWVkaXQuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdFODk5MTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4vZGVlcC8gLmdkLWVkaXQuYWN0aXZlIGkge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuL2RlZXAvIC5wYWdlIHtcbiAgd2lkdGg6IDgwMHB4O1xufVxuXG4vZGVlcC8gLnNhdmUtYXMtYnV0dG9uLWljb24ge1xuICBmb250LXNpemU6IDExcHg7XG4gIGxlZnQ6IDIycHggIWltcG9ydGFudDtcbiAgdG9wOiAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5zYXZlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICBsZWZ0OiAyMXB4O1xufVxuXG5AbWVkaWEgQHBob25lLWRvd24ge1xuICAvZGVlcC8gIC5wYW56b29te1xuICAgIHpvb206IDAuNDtcbiAgICBtYXJnaW4tdG9wOjE2MHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/editor/src/lib/editor-app.component.ts":
/*!**************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/editor/src/lib/editor-app.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: EditorAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorAppComponent", function() { return EditorAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.service */ "../../libs/editor/src/lib/editor.service.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _editor_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor-config.service */ "../../libs/editor/src/lib/editor-config.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);






var $ = jquery__WEBPACK_IMPORTED_MODULE_5__;
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
        this.browseFilesModal = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].BrowseFiles;
        this.formatting = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Formatting"].default();
        this.fontSizeOptions = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["FormattingService"].getFontSizeOptions();
        this.fontOptions = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["FormattingService"].getFontOptions();
        this.bgColorPickerShow = false;
        this.colorPickerShow = false;
        this.active = false;
        this.isIE = false;
        this.isIE = /*@cc_on!@*/  false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
        configService.updatedConfig.subscribe(function (editorConfig) {
            _this.editorConfig = editorConfig;
        });
        uploadFilesService.uploadsChange.subscribe(function (uploads) {
            if (uploads) {
                var i = void 0;
                for (i = 0; i < uploads.length; i++) {
                    _this._editorService.upload(uploads.item(i), '', _this.editorConfig.rewrite).subscribe(function (obj) {
                        _this.fileWasDropped ? _this.selectFile(obj.guid, '', '') : _this.selectDir('');
                    });
                }
            }
        });
        passwordService.passChange.subscribe(function (pass) {
            _this.selectFile(_this.credentials.guid, pass, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].PasswordRequired);
        });
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe(function (w) {
            _this.isDesktop = _windowService.isDesktop();
        });
        this._backFormattingService.formatBoldChange.subscribe(function (bold) {
            _this.formatting.bold = bold;
        });
        this._backFormattingService.formatItalicChange.subscribe(function (italic) {
            _this.formatting.italic = italic;
        });
        this._backFormattingService.formatUnderlineChange.subscribe(function (underline) {
            _this.formatting.underline = underline;
        });
        this._backFormattingService.formatColorChange.subscribe(function (color) {
            _this.formatting.color = color;
        });
        this._backFormattingService.formatBgColorChange.subscribe(function (bgcolor) {
            _this.formatting.bgColor = bgcolor;
        });
        this._backFormattingService.formatFontSizeChange.subscribe(function (fontSize) {
            _this.formatting.fontSize = fontSize;
        });
        this._backFormattingService.formatFontChange.subscribe(function (font) {
            _this.formatting.font = font;
        });
        this._backFormattingService.formatStrikeoutChange.subscribe(function (strikeout) {
            _this.formatting.strikeout = strikeout;
        });
        this._backFormattingService.formatAlignChange.subscribe(function (align) {
            _this.formatting.align = align;
        });
        this._backFormattingService.formatListChange.subscribe(function (list) {
            _this.formatting.list = list;
        });
        this._formattingService.formatBoldChange.subscribe(function (bold) {
            _this.formatting.bold = bold;
        });
        this._formattingService.formatItalicChange.subscribe(function (italic) {
            _this.formatting.italic = italic;
        });
        this._formattingService.formatUnderlineChange.subscribe(function (underline) {
            _this.formatting.underline = underline;
        });
        this._formattingService.formatColorChange.subscribe(function (color) {
            _this.formatting.color = color;
        });
        this._formattingService.formatBgColorChange.subscribe(function (bgcolor) {
            _this.formatting.bgColor = bgcolor;
        });
        this._formattingService.formatFontSizeChange.subscribe(function (fontSize) {
            _this.formatting.fontSize = fontSize;
        });
        this._formattingService.formatFontChange.subscribe(function (font) {
            _this.formatting.font = font;
        });
        this._formattingService.formatStrikeoutChange.subscribe(function (strikeout) {
            _this.formatting.strikeout = strikeout;
        });
        this._formattingService.formatAlignChange.subscribe(function (align) {
            _this.formatting.align = align;
        });
        this._formattingService.formatListChange.subscribe(function (list) {
            _this.formatting.list = list;
        });
        this._htmlService.htmlContent.subscribe(function (text) {
            if (_this.file && _this.file.pages) {
                _this.textBackup = text;
            }
        });
    }
    EditorAppComponent.prototype.ngOnInit = function () {
        if (this.editorConfig.defaultDocument !== "") {
            this.isLoading = true;
            this.selectFile(this.editorConfig.defaultDocument, "", "");
        }
    };
    EditorAppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._loadingMaskService
            .onLoadingChanged
            .subscribe(function (loading) { return _this.isLoading = loading; });
    };
    Object.defineProperty(EditorAppComponent.prototype, "rewriteConfig", {
        get: function () {
            return this.editorConfig ? this.editorConfig.rewrite : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorAppComponent.prototype, "downloadConfig", {
        get: function () {
            return this.editorConfig ? this.editorConfig.download : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorAppComponent.prototype, "uploadConfig", {
        get: function () {
            return this.editorConfig ? this.editorConfig.upload : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorAppComponent.prototype, "printConfig", {
        get: function () {
            return this.editorConfig ? this.editorConfig.print : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorAppComponent.prototype, "browseConfig", {
        get: function () {
            return this.editorConfig ? this.editorConfig.browse : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorAppComponent.prototype, "enableRightClickConfig", {
        get: function () {
            return this.editorConfig ? this.editorConfig.enableRightClick : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorAppComponent.prototype, "pageSelectorConfig", {
        get: function () {
            return this.editorConfig ? this.editorConfig.pageSelector : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorAppComponent.prototype, "createNewFileConfig", {
        get: function () {
            return this.editorConfig ? this.editorConfig.createNewFile : true;
        },
        enumerable: true,
        configurable: true
    });
    EditorAppComponent.prototype.openModal = function (id) {
        if (this.file) {
            this.file.pages[0].editable = false;
        }
        this._modalService.open(id);
    };
    EditorAppComponent.prototype.openSave = function () {
        if (!this.formatDisabled) {
            this.openModal(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].CreateDocument);
        }
    };
    EditorAppComponent.prototype.selectDir = function ($event) {
        var _this = this;
        this._editorService.loadFiles($event).subscribe(function (files) { return _this.files = files || []; });
    };
    EditorAppComponent.prototype.ptToPx = function (pt) {
        //pt * 96 / 72 = px.
        return pt * 96 / 72;
    };
    EditorAppComponent.prototype.onRightClick = function ($event) {
        return this.enableRightClickConfig;
    };
    EditorAppComponent.prototype.createFile = function () {
        this.file = new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["FileDescription"]();
        var page = new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["PageModel"];
        page.width = 595;
        page.height = 842;
        page.data = '<!DOCTYPE HTML><html><head><meta http-equiv="content-type" content="text/html; charset=utf-8"></head><body></body></html>';
        page.number = 1;
        page.editable = true;
        this.file.pages = [];
        this.file.pages.push(page);
        this.file.guid = "new document.docx";
        this.credentials = new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["FileCredentials"]("new document.docx", "");
        this.formatDisabled = false;
        this.downloadDisabled = true;
    };
    EditorAppComponent.prototype.selectFile = function ($event, password, modalId) {
        var _this = this;
        this.credentials = new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["FileCredentials"]($event, password);
        this._editorService.loadFile(this.credentials).subscribe(function (file) {
            _this.loadFile(file);
            var isIE = /*@cc_on!@*/  false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
            if (isIE) {
                var observer_1 = new MutationObserver(function (mutations) {
                    if ($(".documentMainContent").length > 0) {
                        $(".documentMainContent").attr("contentEditable", "true");
                        observer_1.disconnect();
                    }
                });
                observer_1.observe(document, { attributes: false, childList: true, characterData: false, subtree: true });
            }
        });
        this.clearData();
        this._modalService.close(modalId);
    };
    EditorAppComponent.prototype.fileDropped = function ($event) {
        this.fileWasDropped = $event;
    };
    EditorAppComponent.prototype.loadFile = function (file) {
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
    EditorAppComponent.prototype.clearData = function () {
        var e_1, _a;
        if (!this.file || !this.file.pages) {
            return;
        }
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    EditorAppComponent.prototype.upload = function ($event) {
        var _this = this;
        this._editorService.upload(null, $event, this.rewriteConfig).subscribe(function () {
            _this.selectDir('');
        });
    };
    EditorAppComponent.prototype.selectFontSize = function ($event) {
        if (this.formatDisabled)
            return;
        $(".gd-wrapper").off("keyup");
        if (this.isIE) {
            this._selectionService.restoreSelection();
            this._selectionService.captureSelection();
        }
        this._formattingService.changeFormatFontSize($event.value);
        $(".gd-wrapper").on("keyup", function () {
            var fontElements = document.getElementsByTagName("font");
            for (var i = 0, len = fontElements.length; i < len; ++i) {
                if (fontElements[i].getAttribute('size') === "7") {
                    fontElements[i].removeAttribute("size");
                    fontElements[i].style.fontSize = $event + "px";
                }
            }
        });
    };
    EditorAppComponent.prototype.selectFont = function ($event) {
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
    EditorAppComponent.prototype.toggleColorPicker = function (bg) {
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
    EditorAppComponent.prototype.selectColor = function ($event) {
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
    EditorAppComponent.prototype.toggleBold = function (event) {
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
    EditorAppComponent.prototype.toggleUndo = function () {
        if (this.formatDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        this._formattingService.Undo();
    };
    EditorAppComponent.prototype.toggleRedo = function () {
        if (this.formatDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        this._formattingService.Redo();
    };
    EditorAppComponent.prototype.toggleItalic = function (event) {
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
    EditorAppComponent.prototype.toggleUnderline = function (event) {
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
    EditorAppComponent.prototype.hideAll = function ($event) {
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
    EditorAppComponent.prototype.toggleStrikeout = function (event) {
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
    EditorAppComponent.prototype.toggleAlign = function (align) {
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
    EditorAppComponent.prototype.toggleList = function (list) {
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
    EditorAppComponent.prototype.downloadFile = function () {
        if (this.downloadDisabled)
            return;
        window.location.assign(this._editorService.getDownloadUrl(this.credentials));
    };
    EditorAppComponent.prototype.save = function () {
        if (this.formatDisabled)
            return;
        if (this.credentials) {
            if (this.file.guid === "new document.docx") {
                this.openModal(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].CreateDocument);
            }
            else {
                this.saveFile(this.credentials);
            }
        }
    };
    EditorAppComponent.prototype.saveFile = function (credentials) {
        var _this = this;
        if (!this.file || !this.file.pages)
            return;
        var saveFile = new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["SaveFile"](credentials.guid, credentials.password, this.textBackup);
        this._editorService.save(saveFile).subscribe(function (loadFile) {
            _this.loadFile(loadFile);
            _this.credentials = new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["FileCredentials"](loadFile.guid, credentials.password);
            _this._modalService.open(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].OperationSuccess);
        });
    };
    EditorAppComponent.prototype.printFile = function () {
        if (this.formatDisabled)
            return;
        if (this.file.pages) {
            var page = new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["PageModel"];
            page.width = 595;
            page.height = 842;
            // using of the replace is required to fix issue with padding for intire print content
            page.data = this.textBackup.replace('</style>', 'body { padding: 96px; } </style>');
            var printHtml = [page];
            this._renderPrintService.changePages(printHtml);
        }
    };
    EditorAppComponent.prototype.onCloseModal = function ($event) {
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
    EditorAppComponent.ctorParameters = function () { return [
        { type: _editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ModalService"] },
        { type: _editor_config_service__WEBPACK_IMPORTED_MODULE_4__["EditorConfigService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["UploadFilesService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["PasswordService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["WindowService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["FormattingService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["BackFormattingService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["OnCloseService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["SelectionService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["EditHtmlService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["RenderPrintService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["LoadingMaskService"] }
    ]; };
    EditorAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-editor-angular-root',
            template: __webpack_require__(/*! raw-loader!./editor-app.component.html */ "../../node_modules/raw-loader/index.js!../../libs/editor/src/lib/editor-app.component.html"),
            styles: [__webpack_require__(/*! ./editor-app.component.less */ "../../libs/editor/src/lib/editor-app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ModalService"],
            _editor_config_service__WEBPACK_IMPORTED_MODULE_4__["EditorConfigService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["UploadFilesService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["PasswordService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["WindowService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["FormattingService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["BackFormattingService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["OnCloseService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["SelectionService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["EditHtmlService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["RenderPrintService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["LoadingMaskService"]])
    ], EditorAppComponent);
    return EditorAppComponent;
}());



/***/ }),

/***/ "../../libs/editor/src/lib/editor-config.service.ts":
/*!***************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/editor/src/lib/editor-config.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: EditorConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorConfigService", function() { return EditorConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _editor_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor-config */ "../../libs/editor/src/lib/editor-config.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");






var EditorConfigService = /** @class */ (function () {
    function EditorConfigService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._editorConfig = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](new _editor_config__WEBPACK_IMPORTED_MODULE_2__["EditorConfig"]());
        this._updatedConfig = this._editorConfig.asObservable();
    }
    Object.defineProperty(EditorConfigService.prototype, "updatedConfig", {
        get: function () {
            return this._updatedConfig;
        },
        enumerable: true,
        configurable: true
    });
    EditorConfigService.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var configEndpoint = _this._config.getConfigEndpoint(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].EDITOR_APP);
            _this._http.get(configEndpoint, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson).toPromise().then(function (response) {
                var editorConfig = response;
                _this._editorConfig.next(editorConfig);
                resolve();
            }).catch(function (response) {
                reject("Could not load editor config: " + JSON.stringify(response));
            });
        });
    };
    EditorConfigService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    EditorConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], EditorConfigService);
    return EditorConfigService;
}());



/***/ }),

/***/ "../../libs/editor/src/lib/editor-config.ts":
/*!*******************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/editor/src/lib/editor-config.ts ***!
  \*******************************************************************************************/
/*! exports provided: EditorConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorConfig", function() { return EditorConfig; });
var EditorConfig = /** @class */ (function () {
    function EditorConfig() {
    }
    return EditorConfig;
}());



/***/ }),

/***/ "../../libs/editor/src/lib/editor.module.ts":
/*!*******************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/editor/src/lib/editor.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: initializeApp, setupLoadingInterceptor, EditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return initializeApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupLoadingInterceptor", function() { return setupLoadingInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return EditorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _editor_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor-app.component */ "../../libs/editor/src/lib/editor-app.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "../../node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "../../node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _create_document_modal_create_document_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create.document-modal/create.document-modal.component */ "../../libs/editor/src/lib/create.document-modal/create.document-modal.component.ts");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor.service */ "../../libs/editor/src/lib/editor.service.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _editor_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./editor-config.service */ "../../libs/editor/src/lib/editor-config.service.ts");













function initializeApp(editorConfigService) {
    var result = function () { return editorConfigService.load(); };
    return result;
}
// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
function setupLoadingInterceptor(service) {
    return new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_11__["LoadingMaskInterceptorService"](service);
}
var EditorModule = /** @class */ (function () {
    function EditorModule() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__["far"]);
    }
    EditorModule_1 = EditorModule;
    EditorModule.forRoot = function (apiEndpoint) {
        _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_11__["Api"].DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: EditorModule_1
        };
    };
    var EditorModule_1;
    EditorModule = EditorModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_editor_app_component__WEBPACK_IMPORTED_MODULE_4__["EditorAppComponent"], _create_document_modal_create_document_modal_component__WEBPACK_IMPORTED_MODULE_9__["CreateDocumentModalComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_11__["CommonComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]
            ],
            exports: [
                _create_document_modal_create_document_modal_component__WEBPACK_IMPORTED_MODULE_9__["CreateDocumentModalComponent"],
                _editor_app_component__WEBPACK_IMPORTED_MODULE_4__["EditorAppComponent"],
                _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_11__["CommonComponentsModule"]
            ],
            providers: [
                _editor_service__WEBPACK_IMPORTED_MODULE_10__["EditorService"],
                _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_11__["ConfigService"],
                _editor_config_service__WEBPACK_IMPORTED_MODULE_12__["EditorConfigService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                    useFactory: initializeApp,
                    deps: [_editor_config_service__WEBPACK_IMPORTED_MODULE_12__["EditorConfigService"]],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_11__["ErrorInterceptorService"],
                    multi: true
                },
                _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_11__["LoadingMaskService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useFactory: setupLoadingInterceptor,
                    multi: true,
                    deps: [_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_11__["LoadingMaskService"]]
                }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditorModule);
    return EditorModule;
}());



/***/ }),

/***/ "../../libs/editor/src/lib/editor.service.ts":
/*!********************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/editor/src/lib/editor.service.ts ***!
  \********************************************************************************************/
/*! exports provided: EditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorService", function() { return EditorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");




var EditorService = /** @class */ (function () {
    function EditorService(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    EditorService.prototype.loadFiles = function (path) {
        return this._http.post(this._config.getEditorApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_FILE_TREE, { 'path': path }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    EditorService.prototype.getFormats = function () {
        return this._http.get(this._config.getEditorApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_FORMATS, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    EditorService.prototype.loadFile = function (credentials) {
        return this._http.post(this._config.getEditorApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_DOCUMENT_DESCRIPTION, credentials, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    EditorService.prototype.upload = function (file, url, rewrite) {
        var formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getEditorApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].UPLOAD_DOCUMENTS, formData);
    };
    EditorService.prototype.save = function (file) {
        return this._http.post(this._config.getEditorApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].SAVE_FILE, file, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    EditorService.prototype.getDownloadUrl = function (credentials) {
        return this._config.getEditorApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
    };
    EditorService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    EditorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], EditorService);
    return EditorService;
}());



/***/ }),

/***/ "../../libs/signature/src/index.ts":
/*!**********************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/index.ts ***!
  \**********************************************************************************/
/*! exports provided: initializeApp, setupLoadingInterceptor, SignatureModule, SignatureAppComponent, SignatureService, SignatureConfigService, SignatureListPanelComponent, SelectSignatureService, RemoveSignatureService, CopySignatureService, ActiveSignatureService, ActiveCanvasService, SignaturesHolderService, SignatureTabActivatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_signature_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/signature.module */ "../../libs/signature/src/lib/signature.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return _lib_signature_module__WEBPACK_IMPORTED_MODULE_0__["initializeApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupLoadingInterceptor", function() { return _lib_signature_module__WEBPACK_IMPORTED_MODULE_0__["setupLoadingInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignatureModule", function() { return _lib_signature_module__WEBPACK_IMPORTED_MODULE_0__["SignatureModule"]; });

/* harmony import */ var _lib_signature_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/signature-app.component */ "../../libs/signature/src/lib/signature-app.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignatureAppComponent", function() { return _lib_signature_app_component__WEBPACK_IMPORTED_MODULE_1__["SignatureAppComponent"]; });

/* harmony import */ var _lib_signature_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/signature.service */ "../../libs/signature/src/lib/signature.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignatureService", function() { return _lib_signature_service__WEBPACK_IMPORTED_MODULE_2__["SignatureService"]; });

/* harmony import */ var _lib_signature_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/signature-config.service */ "../../libs/signature/src/lib/signature-config.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignatureConfigService", function() { return _lib_signature_config_service__WEBPACK_IMPORTED_MODULE_3__["SignatureConfigService"]; });

/* harmony import */ var _lib_signature_list_panel_signature_list_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/signature-list-panel/signature-list-panel.component */ "../../libs/signature/src/lib/signature-list-panel/signature-list-panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignatureListPanelComponent", function() { return _lib_signature_list_panel_signature_list_panel_component__WEBPACK_IMPORTED_MODULE_4__["SignatureListPanelComponent"]; });

/* harmony import */ var _lib_select_signature_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/select-signature.service */ "../../libs/signature/src/lib/select-signature.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectSignatureService", function() { return _lib_select_signature_service__WEBPACK_IMPORTED_MODULE_5__["SelectSignatureService"]; });

/* harmony import */ var _lib_remove_signature_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/remove-signature.service */ "../../libs/signature/src/lib/remove-signature.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveSignatureService", function() { return _lib_remove_signature_service__WEBPACK_IMPORTED_MODULE_6__["RemoveSignatureService"]; });

/* harmony import */ var _lib_copy_signature_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/copy-signature.service */ "../../libs/signature/src/lib/copy-signature.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CopySignatureService", function() { return _lib_copy_signature_service__WEBPACK_IMPORTED_MODULE_7__["CopySignatureService"]; });

/* harmony import */ var _lib_active_signature_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/active-signature.service */ "../../libs/signature/src/lib/active-signature.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActiveSignatureService", function() { return _lib_active_signature_service__WEBPACK_IMPORTED_MODULE_8__["ActiveSignatureService"]; });

/* harmony import */ var _lib_active_canvas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/active-canvas.service */ "../../libs/signature/src/lib/active-canvas.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActiveCanvasService", function() { return _lib_active_canvas_service__WEBPACK_IMPORTED_MODULE_9__["ActiveCanvasService"]; });

/* harmony import */ var _lib_signatures_holder_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/signatures-holder.service */ "../../libs/signature/src/lib/signatures-holder.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignaturesHolderService", function() { return _lib_signatures_holder_service__WEBPACK_IMPORTED_MODULE_10__["SignaturesHolderService"]; });

/* harmony import */ var _lib_signature_tab_activator_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/signature-tab-activator.service */ "../../libs/signature/src/lib/signature-tab-activator.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignatureTabActivatorService", function() { return _lib_signature_tab_activator_service__WEBPACK_IMPORTED_MODULE_11__["SignatureTabActivatorService"]; });















/***/ }),

/***/ "../../libs/signature/src/lib/active-canvas.service.ts":
/*!******************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/active-canvas.service.ts ***!
  \******************************************************************************************************/
/*! exports provided: ActiveCanvasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveCanvasService", function() { return ActiveCanvasService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");

var ActiveCanvasService = /** @class */ (function () {
    function ActiveCanvasService() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._activeChange = this._observer.asObservable();
    }
    Object.defineProperty(ActiveCanvasService.prototype, "activeChange", {
        get: function () {
            return this._activeChange;
        },
        enumerable: true,
        configurable: true
    });
    ActiveCanvasService.prototype.changeActive = function (signId) {
        this._observer.next(signId);
    };
    return ActiveCanvasService;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/active-signature.service.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/active-signature.service.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ActiveSignatureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveSignatureService", function() { return ActiveSignatureService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");

var ActiveSignatureService = /** @class */ (function () {
    function ActiveSignatureService() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._activeChange = this._observer.asObservable();
    }
    Object.defineProperty(ActiveSignatureService.prototype, "activeChange", {
        get: function () {
            return this._activeChange;
        },
        enumerable: true,
        configurable: true
    });
    ActiveSignatureService.prototype.changeActive = function (signId) {
        this._observer.next(signId);
    };
    return ActiveSignatureService;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/canvas/canvas.component.less":
/*!**********************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/canvas/canvas.component.less ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bc-paint-container {\n  width: 100%;\n  height: 100%;\n}\n.bc-paint-canvas-container {\n  width: 100%;\n  height: 100%;\n}\n@media (max-width: 1037px) {\n  .bc-paint-canvas-container > canvas {\n    width: 100%;\n    height: 100%;\n    border: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9zaWduYXR1cmUvc3JjL2xpYi9jYW52YXMvY2FudmFzLmNvbXBvbmVudC5sZXNzIiwibGlicy9zaWduYXR1cmUvc3JjL2xpYi9jYW52YXMvY2FudmFzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNERjtBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNGRjtBREtBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFNBQUE7RUNIRjtBQUNGIiwiZmlsZSI6ImxpYnMvc2lnbmF0dXJlL3NyYy9saWIvY2FudmFzL2NhbnZhcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21tb24tY29tcG9uZW50cy9zcmMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4uYmMtcGFpbnQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJjLXBhaW50LWNhbnZhcy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5AbWVkaWEgQHBob25lLWRvd24ge1xuICAuYmMtcGFpbnQtY2FudmFzLWNvbnRhaW5lciA+IGNhbnZhcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuIiwiLmJjLXBhaW50LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYmMtcGFpbnQtY2FudmFzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAzN3B4KSB7XG4gIC5iYy1wYWludC1jYW52YXMtY29udGFpbmVyID4gY2FudmFzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/signature/src/lib/canvas/canvas.component.ts":
/*!********************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/canvas/canvas.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/signature/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");



var CanvasComponent = /** @class */ (function () {
    function CanvasComponent(_windowService) {
        var _this = this;
        this._windowService = _windowService;
        this._isDragged = false;
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe(function (w) {
            _this.isDesktop = _windowService.isDesktop();
        });
    }
    CanvasComponent.prototype.ngOnInit = function () {
        this._ctx = this.canvas.nativeElement.getContext('2d');
    };
    CanvasComponent.prototype.onMouseDown = function (e) {
        var pos;
        if (this.isDesktop) {
            pos = { x: e.offsetX, y: e.offsetY };
        }
        else {
            var wEvent = window.event;
            pos = { x: wEvent.offsetX, y: wEvent.offsetY };
        }
        e.preventDefault();
        this._isDragged = true;
        this._ctx.beginPath();
        this._ctx.moveTo(pos.x, pos.y);
    };
    CanvasComponent.prototype.onMouseUp = function (e) {
        e.preventDefault();
        this._isDragged = false;
    };
    CanvasComponent.prototype.onMouseMove = function (e) {
        var pos;
        if (this.isDesktop) {
            pos = { x: e.offsetX, y: e.offsetY };
        }
        else {
            var wEvent = window.event;
            pos = { x: wEvent.offsetX, y: wEvent.offsetY };
        }
        e.preventDefault();
        if (this._isDragged) {
            this._ctx.lineTo(pos.x, pos.y);
            this._ctx.stroke();
        }
    };
    CanvasComponent.prototype.setColor = function (color) {
        if (this._ctx) {
            this._ctx.strokeStyle = color;
        }
    };
    CanvasComponent.prototype.getImage = function () {
        return this.canvas.nativeElement.toDataURL('image/png');
    };
    CanvasComponent.prototype.clear = function () {
        this.canvas.nativeElement.width = this.canvas.nativeElement.width;
    };
    CanvasComponent.prototype.ngOnChanges = function (changes) {
        this.setColor(this.color);
    };
    CanvasComponent.prototype.getWidth = function () {
        return this.isDesktop ? 1079 : this._windowService.getWidth();
    };
    CanvasComponent.prototype.getHeight = function () {
        return this.isDesktop ? 540 : this._windowService.getHeight();
    };
    CanvasComponent.ctorParameters = function () { return [
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["WindowService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CanvasComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CanvasComponent.prototype, "canvas", void 0);
    CanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-canvas',
            template: __webpack_require__(/*! raw-loader!./canvas.component.html */ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/canvas/canvas.component.html"),
            styles: [__webpack_require__(/*! ./canvas.component.less */ "../../libs/signature/src/lib/canvas/canvas.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["WindowService"]])
    ], CanvasComponent);
    return CanvasComponent;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/context-menu/context-menu.component.less":
/*!**********************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/context-menu/context-menu.component.less ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-context-menu-top {\n  top: -44px;\n}\n.gd-context-menu-bottom {\n  bottom: -40px;\n}\n.gd-context-menu {\n  box-shadow: rgba(0, 0, 0, 0.52) 0px 0px 5px;\n  background-color: #FFFFFF;\n  border-radius: 3px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  cursor: default;\n  width: max-content;\n  width: -moz-max-content;\n  width: -webkit-max-content;\n  display: flex;\n  flex-direction: row;\n  z-index: 999;\n}\n.gd-context-menu .arrows {\n  cursor: move;\n}\n.gd-context-menu ::ng-deep .active {\n  background-color: #e7e7e7;\n}\n@media (max-width: 1037px) {\n  .gd-context-menu ::ng-deep .active {\n    background-color: #959da5;\n  }\n  .gd-context-menu-top {\n    top: -34px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9zaWduYXR1cmUvc3JjL2xpYi9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51LmNvbXBvbmVudC5sZXNzIiwibGlicy9zaWduYXR1cmUvc3JjL2xpYi9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsVUFBQTtBQ0RGO0FESUE7RUFDRSxhQUFBO0FDRkY7QURLQTtFQUNFLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNIRjtBRFhBO0VBaUJJLFlBQUE7QUNISjtBRGRBO0VBcUJJLHlCQUFBO0FDSko7QURTQTtFQUNFO0lBRUkseUJBQUE7RUNSSjtFRFlBO0lBQ0UsVUFBQTtFQ1ZGO0FBQ0YiLCJmaWxlIjoibGlicy9zaWduYXR1cmUvc3JjL2xpYi9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbW1vbi1jb21wb25lbnRzL3NyYy9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi5nZC1jb250ZXh0LW1lbnUtdG9wIHtcbiAgdG9wOiAtNDRweDtcbn1cblxuLmdkLWNvbnRleHQtbWVudS1ib3R0b20ge1xuICBib3R0b206IC00MHB4O1xufVxuXG4uZ2QtY29udGV4dC1tZW51IHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjUyKSAwcHggMHB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICB3aWR0aDogLW1vei1tYXgtY29udGVudDtcbiAgd2lkdGg6IC13ZWJraXQtbWF4LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHotaW5kZXg6IDk5OTtcblxuICAuYXJyb3dzIHtcbiAgICBjdXJzb3I6IG1vdmU7XG4gIH1cblxuICA6Om5nLWRlZXAgLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcbiAgfVxuXG59XG5cbkBtZWRpYSBAcGhvbmUtZG93biB7XG4gIC5nZC1jb250ZXh0LW1lbnUge1xuICAgIDo6bmctZGVlcCAuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NTlkYTU7XG4gICAgfVxuICB9XG5cbiAgLmdkLWNvbnRleHQtbWVudS10b3Age1xuICAgIHRvcDogLTM0cHg7XG4gIH1cblxufVxuIiwiLmdkLWNvbnRleHQtbWVudS10b3Age1xuICB0b3A6IC00NHB4O1xufVxuLmdkLWNvbnRleHQtbWVudS1ib3R0b20ge1xuICBib3R0b206IC00MHB4O1xufVxuLmdkLWNvbnRleHQtbWVudSB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41MikgMHB4IDBweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgd2lkdGg6IC1tb3otbWF4LWNvbnRlbnQ7XG4gIHdpZHRoOiAtd2Via2l0LW1heC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB6LWluZGV4OiA5OTk7XG59XG4uZ2QtY29udGV4dC1tZW51IC5hcnJvd3Mge1xuICBjdXJzb3I6IG1vdmU7XG59XG4uZ2QtY29udGV4dC1tZW51IDo6bmctZGVlcCAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDM3cHgpIHtcbiAgLmdkLWNvbnRleHQtbWVudSA6Om5nLWRlZXAgLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk1OWRhNTtcbiAgfVxuICAuZ2QtY29udGV4dC1tZW51LXRvcCB7XG4gICAgdG9wOiAtMzRweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "../../libs/signature/src/lib/context-menu/context-menu.component.ts":
/*!********************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/context-menu/context-menu.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ContextMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuComponent", function() { return ContextMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/signature/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");



var ContextMenuComponent = /** @class */ (function () {
    function ContextMenuComponent(_windowService) {
        var _this = this;
        this._windowService = _windowService;
        this.formatting = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["Formatting"].default();
        this.lock = false;
        this.translation = 0;
        this.changeFormatting = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeSign = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.copySign = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lockOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isMobile = _windowService.isMobile();
        _windowService.onResize.subscribe(function (w) {
            _this.isMobile = _windowService.isMobile();
        });
    }
    ContextMenuComponent.prototype.ngOnInit = function () {
    };
    ContextMenuComponent.prototype.saveChanges = function () {
        this.changeFormatting.emit(this.formatting);
    };
    ContextMenuComponent.prototype.selectFontSize = function ($event) {
        this.formatting.fontSize = $event;
        this.saveChanges();
    };
    ContextMenuComponent.prototype.selectFont = function ($event) {
        this.formatting.font = $event;
        this.saveChanges();
    };
    ContextMenuComponent.prototype.selectColor = function ($event) {
        this.formatting.color = $event;
        this.saveChanges();
    };
    ContextMenuComponent.prototype.toggleBold = function ($event) {
        this.formatting.bold = $event;
        this.saveChanges();
    };
    ContextMenuComponent.prototype.toggleItalic = function ($event) {
        this.formatting.italic = $event;
        this.saveChanges();
    };
    ContextMenuComponent.prototype.toggleUnderline = function ($event) {
        this.formatting.underline = $event;
        this.saveChanges();
    };
    ContextMenuComponent.prototype.deleteSign = function () {
        this.removeSign.emit(true);
    };
    ContextMenuComponent.prototype.toggleLock = function () {
        this.lock = !this.lock;
        this.lockOut.emit(this.lock);
    };
    ContextMenuComponent.prototype.onCopySign = function () {
        this.copySign.emit(true);
    };
    ContextMenuComponent.ctorParameters = function () { return [
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["WindowService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["Formatting"])
    ], ContextMenuComponent.prototype, "formatting", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ContextMenuComponent.prototype, "textMenu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ContextMenuComponent.prototype, "topPosition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContextMenuComponent.prototype, "lock", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContextMenuComponent.prototype, "translation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContextMenuComponent.prototype, "changeFormatting", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContextMenuComponent.prototype, "removeSign", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContextMenuComponent.prototype, "copySign", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContextMenuComponent.prototype, "lockOut", void 0);
    ContextMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-context-menu',
            template: __webpack_require__(/*! raw-loader!./context-menu.component.html */ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/context-menu/context-menu.component.html"),
            styles: [__webpack_require__(/*! ./context-menu.component.less */ "../../libs/signature/src/lib/context-menu/context-menu.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["WindowService"]])
    ], ContextMenuComponent);
    return ContextMenuComponent;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/copy-signature.service.ts":
/*!*******************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/copy-signature.service.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CopySignatureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopySignatureService", function() { return CopySignatureService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");

var CopySignatureService = /** @class */ (function () {
    function CopySignatureService() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._copySignature = this._observer.asObservable();
        this._observerChanges = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._changesSignature = this._observerChanges.asObservable();
    }
    Object.defineProperty(CopySignatureService.prototype, "copySignature", {
        get: function () {
            return this._copySignature;
        },
        enumerable: true,
        configurable: true
    });
    CopySignatureService.prototype.copy = function (copySign) {
        this._observer.next(copySign);
    };
    Object.defineProperty(CopySignatureService.prototype, "changesSignature", {
        get: function () {
            return this._changesSignature;
        },
        enumerable: true,
        configurable: true
    });
    CopySignatureService.prototype.notifyChanges = function (changes) {
        this._observerChanges.next(changes);
    };
    return CopySignatureService;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/dnd-signature.directive.ts":
/*!********************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/dnd-signature.directive.ts ***!
  \********************************************************************************************************/
/*! exports provided: DndSignatureDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DndSignatureDirective", function() { return DndSignatureDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/signature/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");



var DndSignatureDirective = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DndSignatureDirective, _super);
    function DndSignatureDirective(_uploadFilesService) {
        var _this = _super.call(this, _uploadFilesService) || this;
        _this.files = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    DndSignatureDirective.prototype.onDrop = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.active = false;
            this.files.emit(files);
        }
    };
    DndSignatureDirective.ctorParameters = function () { return [
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["UploadFilesService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DndSignatureDirective.prototype, "files", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DndSignatureDirective.prototype, "onDrop", null);
    DndSignatureDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[gdDndSignature]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["UploadFilesService"]])
    ], DndSignatureDirective);
    return DndSignatureDirective;
}(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["DndDirective"]));



/***/ }),

/***/ "../../libs/signature/src/lib/drag-signature.service.ts":
/*!*******************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/drag-signature.service.ts ***!
  \*******************************************************************************************************/
/*! exports provided: DragSignatureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragSignatureService", function() { return DragSignatureService; });
var DragSignatureService = /** @class */ (function () {
    function DragSignatureService() {
    }
    return DragSignatureService;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/hand-modal/hand-modal.component.less":
/*!******************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/hand-modal/hand-modal.component.less ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".paint-body {\n  width: 1036px;\n  height: 561px;\n}\n.gd-draw-image {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA4UlEQVR4nO2WbQuDMAyE+///q0WhKiiacYFK7BeXK2OMJXC2SF8er2kwiTPO81St6yo5ZxmGQdsnYZwdi/6yLJICIAACIAAC4KcA6uYMgN34BmAX9QgA9atYuQGO47j6mMw4YDXPsyQ8PCqlaAsAuNAjdYC1DyDeY7MOQuoAY10L0CboO0KoAywA6NsFn26QBaUB6hFYAO8VrhEAAfC/APQ1tJXQC9CCXABsKQZAW1qpStgDwG7+kVL8dQBPAnYDQN4cwFgrvFOAfd/Fq23b9IdiHEeZpokWAF41ugKO5u7gN6EQAAAFZL5NAAAAAElFTkSuQmCC) !important;\n  position: absolute;\n  padding: 0 !important;\n  background-color: #fff;\n  overflow: hidden;\n  overflow-y: auto;\n  width: inherit;\n}\n.bc-paint-header {\n  height: 60px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.bg-color-pic {\n  border-radius: 100%;\n  border: 1px solid #CCC;\n  position: absolute;\n  height: 8px;\n  width: 8px;\n  right: 6px;\n  bottom: 6px;\n}\n::ng-deep .button {\n  font-size: unset !important;\n}\n::ng-deep .button ::ng-deep .text {\n  padding-left: 0px !important;\n}\n::ng-deep .bcPicker-palette {\n  position: absolute;\n}\n.bc-paint-export {\n  background-color: #25c2d4;\n  margin-right: 10px;\n  width: 68px;\n  height: 37px;\n  display: flex;\n  justify-content: space-between;\n  color: #FFF;\n  align-items: center;\n  cursor: pointer;\n}\n.bc-paint-export .icon {\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  flex: 0 0 27px;\n}\n.bc-paint-export .save-button {\n  font-size: 10px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  flex: 0 0 45px;\n}\n@media (max-width: 1037px) {\n  .paint-body {\n    width: inherit;\n    height: inherit;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9zaWduYXR1cmUvc3JjL2xpYi9oYW5kLW1vZGFsL2hhbmQtbW9kYWwuY29tcG9uZW50Lmxlc3MiLCJsaWJzL3NpZ25hdHVyZS9zcmMvbGliL2hhbmQtbW9kYWwvaGFuZC1tb2RhbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FDREY7QURJQTtFQUNFLDRjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNGRjtBREtBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0hGO0FETUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDSkY7QURPQTtFQUNFLDJCQUFBO0FDTEY7QURJQTtFQUlJLDRCQUFBO0FDTEo7QURTQTtFQUNFLGtCQUFBO0FDUEY7QURVQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNSRjtBRERBO0VBWUksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDUko7QURQQTtFQW1CSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDVEo7QURhQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGVBQUE7RUNYRjtBQUNGIiwiZmlsZSI6ImxpYnMvc2lnbmF0dXJlL3NyYy9saWIvaGFuZC1tb2RhbC9oYW5kLW1vZGFsLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbW1vbi1jb21wb25lbnRzL3NyYy9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi5wYWludC1ib2R5IHtcbiAgd2lkdGg6IDEwMzZweDtcbiAgaGVpZ2h0OiA1NjFweDtcbn1cblxuLmdkLWRyYXctaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFoQ0FZQUFBQzRKcWxSQUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQUE0VWxFUVZSNG5PMldiUXVETUF5RSsvLy9xMFdoS2lpYWNZRks3QmVYSzJPTUpYQzJTRjhlcjJrd2lUUE84MVN0NnlvNVp4bUdRZHNuWVp3ZGkvNnlMSklDSUFBQ0lBQUM0S2NBNnVZTWdOMzRCbUFYOVFnQTlhdFl1UUdPNDdqNm1NdzRZRFhQc3lROFBDcWxhQXNBdU5BamRZQzFEeURlWTdNT1F1b0FZMTBMMENib08wS29BeXdBNk5zRm4yNlFCYVVCNmhGWUFPOFZyaEVBQWZDL0FQUTF0SlhRQzlDQ1hBQnNLUVpBVzFxcFN0Z0R3Rzcra1ZMOGRRQlBBbllEUU40Y3dGZ3J2Rk9BZmQvRnEyM2I5SWRpSEVlWnBva1dBRjQxdWdLTzV1N2dONkVRQUFBRlpMNU5BQUFBQUVsRlRrU3VRbUNDKSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5iYy1wYWludC1oZWFkZXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iZy1jb2xvci1waWMge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogOHB4O1xuICByaWdodDogNnB4O1xuICBib3R0b206IDZweDtcbn1cblxuOjpuZy1kZWVwIC5idXR0b24ge1xuICBmb250LXNpemU6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cbiAgOjpuZy1kZWVwIC50ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbjo6bmctZGVlcCAuYmNQaWNrZXItcGFsZXR0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmJjLXBhaW50LWV4cG9ydCB7XG4gIGJhY2tncm91bmQtY29sb3I6IEBicmFuZDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogNjhweDtcbiAgaGVpZ2h0OiAzN3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiAjRkZGO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXg6IDAgMCAyN3B4O1xuICB9XG5cbiAgLnNhdmUtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleDogMCAwIDQ1cHg7XG4gIH1cbn1cblxuQG1lZGlhIEBwaG9uZS1kb3duIHtcbiAgLnBhaW50LWJvZHkge1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgfVxufVxuIiwiLnBhaW50LWJvZHkge1xuICB3aWR0aDogMTAzNnB4O1xuICBoZWlnaHQ6IDU2MXB4O1xufVxuLmdkLWRyYXctaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFoQ0FZQUFBQzRKcWxSQUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQUE0VWxFUVZSNG5PMldiUXVETUF5RSsvLy9xMFdoS2lpYWNZRks3QmVYSzJPTUpYQzJTRjhlcjJrd2lUUE84MVN0NnlvNVp4bUdRZHNuWVp3ZGkvNnlMSklDSUFBQ0lBQUM0S2NBNnVZTWdOMzRCbUFYOVFnQTlhdFl1UUdPNDdqNm1NdzRZRFhQc3lROFBDcWxhQXNBdU5BamRZQzFEeURlWTdNT1F1b0FZMTBMMENib08wS29BeXdBNk5zRm4yNlFCYVVCNmhGWUFPOFZyaEVBQWZDL0FQUTF0SlhRQzlDQ1hBQnNLUVpBVzFxcFN0Z0R3Rzcra1ZMOGRRQlBBbllEUU40Y3dGZ3J2Rk9BZmQvRnEyM2I5SWRpSEVlWnBva1dBRjQxdWdLTzV1N2dONkVRQUFBRlpMNU5BQUFBQUVsRlRrU3VRbUNDKSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG4uYmMtcGFpbnQtaGVhZGVyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJnLWNvbG9yLXBpYyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0M7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA4cHg7XG4gIHJpZ2h0OiA2cHg7XG4gIGJvdHRvbTogNnB4O1xufVxuOjpuZy1kZWVwIC5idXR0b24ge1xuICBmb250LXNpemU6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmJ1dHRvbiA6Om5nLWRlZXAgLnRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5iY1BpY2tlci1wYWxldHRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmJjLXBhaW50LWV4cG9ydCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNWMyZDQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDY4cHg7XG4gIGhlaWdodDogMzdweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2xvcjogI0ZGRjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJjLXBhaW50LWV4cG9ydCAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDAgMCAyN3B4O1xufVxuLmJjLXBhaW50LWV4cG9ydCAuc2F2ZS1idXR0b24ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDAgMCA0NXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzdweCkge1xuICAucGFpbnQtYm9keSB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/signature/src/lib/hand-modal/hand-modal.component.ts":
/*!****************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/hand-modal/hand-modal.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: HandModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandModalComponent", function() { return HandModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/signature/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signature_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signature.service */ "../../libs/signature/src/lib/signature.service.ts");
/* harmony import */ var _signature_tab_activator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signature-tab-activator.service */ "../../libs/signature/src/lib/signature-tab-activator.service.ts");
/* harmony import */ var _signature_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signature-models */ "../../libs/signature/src/lib/signature-models.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");






var HandModalComponent = /** @class */ (function () {
    function HandModalComponent(_signatureService, _tabActivationService, _modalService) {
        this._signatureService = _signatureService;
        this._tabActivationService = _tabActivationService;
        this._modalService = _modalService;
        this.defaultColor = '#000000';
        this.selectedColor = this.defaultColor;
        this.colorPickerShow = false;
    }
    HandModalComponent.prototype.ngOnInit = function () {
    };
    HandModalComponent.prototype.selectColor = function (color) {
        this.selectedColor = color;
        this.colorPickerShow = false;
    };
    HandModalComponent.prototype.saveSign = function (canvasComponent) {
        var _this = this;
        var img = canvasComponent.getImage();
        this._signatureService.saveImage(img).subscribe(function () {
            _this._tabActivationService.changeActiveTab(_signature_models__WEBPACK_IMPORTED_MODULE_4__["SignatureType"].HAND.id);
        });
        this.close();
    };
    HandModalComponent.prototype.close = function () {
        this._modalService.close(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["CommonModals"].DrawHandSignature);
    };
    HandModalComponent.prototype.toggleColorPicker = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.colorPickerShow = !this.colorPickerShow;
    };
    HandModalComponent.prototype.closePicker = function ($event) {
        this.colorPickerShow = !$event;
    };
    HandModalComponent.ctorParameters = function () { return [
        { type: _signature_service__WEBPACK_IMPORTED_MODULE_2__["SignatureService"] },
        { type: _signature_tab_activator_service__WEBPACK_IMPORTED_MODULE_3__["SignatureTabActivatorService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["ModalService"] }
    ]; };
    HandModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-hand-modal',
            template: __webpack_require__(/*! raw-loader!./hand-modal.component.html */ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/hand-modal/hand-modal.component.html"),
            styles: [__webpack_require__(/*! ./hand-modal.component.less */ "../../libs/signature/src/lib/hand-modal/hand-modal.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_signature_service__WEBPACK_IMPORTED_MODULE_2__["SignatureService"],
            _signature_tab_activator_service__WEBPACK_IMPORTED_MODULE_3__["SignatureTabActivatorService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["ModalService"]])
    ], HandModalComponent);
    return HandModalComponent;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/new-bar-qr-code/new-bar-qr-code.component.less":
/*!****************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/new-bar-qr-code/new-bar-qr-code.component.less ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-sign-digital.active {\n  background-color: #3787F5;\n}\n.gd-sign-digital {\n  height: 27px;\n  background-color: #969696;\n  margin: 9px 8px 7px 8px;\n  text-align: center;\n  color: #ffffff;\n  font-size: 13px;\n  box-shadow: 0 0 3px #ddd;\n  cursor: pointer;\n  padding-top: 5px;\n}\n.gd-qr-container {\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  background-color: #e7e7e7;\n}\n.gd-qr-container input:focus {\n  border: 2px solid #00c4d7;\n  transition: border-color 0.3s linear;\n}\n.gd-qr-preview-container {\n  text-align: center;\n  background-color: #FFF;\n  margin-bottom: 1px;\n}\n.gd-qr-preview-container .gd-empty-code {\n  color: #CCCCCC;\n  font-size: 60px;\n  width: 350px;\n  height: 350px;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n}\n.gd-qr-preview-container .gd-signature-thumbnail-image {\n  min-width: 41px;\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n}\n.new-signature-input-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 70px;\n  background-color: #FFF;\n  justify-content: center;\n}\n.gd-qr-property {\n  font-size: 12px;\n  width: 80%;\n  border: 2px solid #DDD;\n  padding: 5px;\n  outline: none;\n  color: #3a4e5b;\n  margin: 5px 0px 0px 0px;\n}\n.gd-add-optical {\n  display: block;\n  width: 32px;\n  height: 28px;\n  text-align: center;\n  background-color: #3787F5;\n  margin: 5px 0px 0px 0px;\n  cursor: pointer;\n}\n.gd-add-optical .icon {\n  color: white;\n  line-height: 28px;\n}\n.gd-add-optical.active {\n  background-color: #25c2d4;\n}\n.gd-add-optical.inactive {\n  background-color: #646464;\n}\n.gd-add-optical:hover {\n  box-shadow: rgba(0, 0, 0, 0) 0px 0px 3px;\n}\n@media (max-width: 1037px) {\n  .gd-qr-container {\n    margin: 0px 13px 0px 12px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9zaWduYXR1cmUvc3JjL2xpYi9uZXctYmFyLXFyLWNvZGUvbmV3LWJhci1xci1jb2RlLmNvbXBvbmVudC5sZXNzIiwibGlicy9zaWduYXR1cmUvc3JjL2xpYi9uZXctYmFyLXFyLWNvZGUvbmV3LWJhci1xci1jb2RlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJBQUE7QUNERjtBRElBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNGRjtBREtBO0VBQ0Usd0VBQUE7RUFDQSx5QkFBQTtBQ0hGO0FETUE7RUFDRSx5QkFBQTtFQUNBLG9DQUFBO0FDSkY7QURPQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FERUE7RUFNSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNMSjtBRFBBO0VBZ0JJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNOSjtBRFVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ1JGO0FEV0E7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUNURjtBRFlBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ1ZGO0FER0E7RUFVSSxZQUFBO0VBQ0EsaUJBQUE7QUNWSjtBRGFFO0VBQ0UseUJBQUE7QUNYSjtBRGNFO0VBQ0UseUJBQUE7QUNaSjtBRGdCQTtFQUNFLHdDQUFBO0FDZEY7QURpQkE7RUFDRTtJQUNFLHlCQUFBO0VDZkY7QUFDRiIsImZpbGUiOiJsaWJzL3NpZ25hdHVyZS9zcmMvbGliL25ldy1iYXItcXItY29kZS9uZXctYmFyLXFyLWNvZGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tbW9uLWNvbXBvbmVudHMvc3JjL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuLmdkLXNpZ24tZGlnaXRhbC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4N0Y1O1xufVxuXG4uZ2Qtc2lnbi1kaWdpdGFsIHtcbiAgaGVpZ2h0OiAyN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTY5Njk2O1xuICBtYXJnaW46IDlweCA4cHggN3B4IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3gtc2hhZG93OiAwIDAgM3B4ICNkZGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmdkLXFyLWNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XG59XG5cbi5nZC1xci1jb250YWluZXIgaW5wdXQ6Zm9jdXMge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDBjNGQ3O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBsaW5lYXI7XG59XG5cbi5nZC1xci1wcmV2aWV3LWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xuXG4gIC5nZC1lbXB0eS1jb2RlIHtcbiAgICBjb2xvcjogI0NDQ0NDQztcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmdkLXNpZ25hdHVyZS10aHVtYm5haWwtaW1hZ2Uge1xuICAgIG1pbi13aWR0aDogNDFweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbn1cblxuLm5ldy1zaWduYXR1cmUtaW5wdXQtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZ2QtcXItcHJvcGVydHkge1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNEREQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICMzYTRlNWI7XG4gIG1hcmdpbjogNXB4IDBweCAwcHggMHB4O1xufVxuXG4uZ2QtYWRkLW9wdGljYWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4N0Y1O1xuICBtYXJnaW46IDVweCAwcHggMHB4IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIC5pY29uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIH1cblxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQG5hdi1sb2dvLWJhY2tncm91bmQ7XG4gIH1cblxuICAmLmluYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ2NDY0O1xuICB9XG59XG5cbi5nZC1hZGQtb3B0aWNhbDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMCkgMHB4IDBweCAzcHg7XG59XG5cbkBtZWRpYSBAcGhvbmUtZG93biB7XG4gIC5nZC1xci1jb250YWluZXIge1xuICAgIG1hcmdpbjogMHB4IDEzcHggMHB4IDEycHg7XG4gIH1cblxufVxuIiwiLmdkLXNpZ24tZGlnaXRhbC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4N0Y1O1xufVxuLmdkLXNpZ24tZGlnaXRhbCB7XG4gIGhlaWdodDogMjdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk2OTY5NjtcbiAgbWFyZ2luOiA5cHggOHB4IDdweCA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm94LXNoYWRvdzogMCAwIDNweCAjZGRkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4uZ2QtcXItY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcbn1cbi5nZC1xci1jb250YWluZXIgaW5wdXQ6Zm9jdXMge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDBjNGQ3O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBsaW5lYXI7XG59XG4uZ2QtcXItcHJldmlldy1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cbi5nZC1xci1wcmV2aWV3LWNvbnRhaW5lciAuZ2QtZW1wdHktY29kZSB7XG4gIGNvbG9yOiAjQ0NDQ0NDO1xuICBmb250LXNpemU6IDYwcHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZ2QtcXItcHJldmlldy1jb250YWluZXIgLmdkLXNpZ25hdHVyZS10aHVtYm5haWwtaW1hZ2Uge1xuICBtaW4td2lkdGg6IDQxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xufVxuLm5ldy1zaWduYXR1cmUtaW5wdXQtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmdkLXFyLXByb3BlcnR5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogODAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjREREO1xuICBwYWRkaW5nOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjM2E0ZTViO1xuICBtYXJnaW46IDVweCAwcHggMHB4IDBweDtcbn1cbi5nZC1hZGQtb3B0aWNhbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzg3RjU7XG4gIG1hcmdpbjogNXB4IDBweCAwcHggMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZ2QtYWRkLW9wdGljYWwgLmljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLmdkLWFkZC1vcHRpY2FsLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNWMyZDQ7XG59XG4uZ2QtYWRkLW9wdGljYWwuaW5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ2NDY0O1xufVxuLmdkLWFkZC1vcHRpY2FsOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwKSAwcHggMHB4IDNweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDM3cHgpIHtcbiAgLmdkLXFyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwcHggMTNweCAwcHggMTJweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "../../libs/signature/src/lib/new-bar-qr-code/new-bar-qr-code.component.ts":
/*!**************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/new-bar-qr-code/new-bar-qr-code.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: NewBarQrCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBarQrCodeComponent", function() { return NewBarQrCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/signature/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signature_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signature.service */ "../../libs/signature/src/lib/signature.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");





var NewBarQrCodeComponent = /** @class */ (function () {
    function NewBarQrCodeComponent(_signatureService, _elementRef) {
        var _this = this;
        this._signatureService = _signatureService;
        this._elementRef = _elementRef;
        this.closePanel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(function (text) {
            _this.saveCode(text, true);
        });
    }
    NewBarQrCodeComponent.prototype.saveCode = function (text, temp) {
        var _this = this;
        if (text) {
            this._signatureService.getCode(text, temp, this.type).subscribe(function (data) {
                _this.encodedImage = data.encodedImage;
                if (!temp) {
                    _this.closePanel.emit(true);
                }
            });
        }
        else {
            this.clean();
        }
    };
    NewBarQrCodeComponent.prototype.clean = function () {
        this.encodedImage = null;
    };
    NewBarQrCodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clean();
        setTimeout(function () {
            var element = _this._elementRef.nativeElement.querySelector("#text-input");
            element.focus();
        }, 100);
    };
    NewBarQrCodeComponent.prototype.addSign = function (text) {
        this.saveCode(text, false);
    };
    NewBarQrCodeComponent.prototype.saveTemp = function (text) {
        this.subject.next(text);
    };
    NewBarQrCodeComponent.prototype.getData = function () {
        return 'data:image/png;base64,' + this.encodedImage;
    };
    NewBarQrCodeComponent.ctorParameters = function () { return [
        { type: _signature_service__WEBPACK_IMPORTED_MODULE_2__["SignatureService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NewBarQrCodeComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NewBarQrCodeComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NewBarQrCodeComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewBarQrCodeComponent.prototype, "closePanel", void 0);
    NewBarQrCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-new-bar-qr-code',
            template: __webpack_require__(/*! raw-loader!./new-bar-qr-code.component.html */ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/new-bar-qr-code/new-bar-qr-code.component.html"),
            styles: [__webpack_require__(/*! ./new-bar-qr-code.component.less */ "../../libs/signature/src/lib/new-bar-qr-code/new-bar-qr-code.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_signature_service__WEBPACK_IMPORTED_MODULE_2__["SignatureService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NewBarQrCodeComponent);
    return NewBarQrCodeComponent;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/remove-canvas.service.ts":
/*!******************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/remove-canvas.service.ts ***!
  \******************************************************************************************************/
/*! exports provided: RemoveCanvasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveCanvasService", function() { return RemoveCanvasService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");

var RemoveCanvasService = /** @class */ (function () {
    function RemoveCanvasService() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._removeCanvas = this._observer.asObservable();
    }
    Object.defineProperty(RemoveCanvasService.prototype, "removeCanvas", {
        get: function () {
            return this._removeCanvas;
        },
        enumerable: true,
        configurable: true
    });
    RemoveCanvasService.prototype.remove = function (id) {
        this._observer.next(id);
    };
    return RemoveCanvasService;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/remove-signature.service.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/remove-signature.service.ts ***!
  \*********************************************************************************************************/
/*! exports provided: RemoveSignatureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveSignatureService", function() { return RemoveSignatureService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");

var RemoveSignatureService = /** @class */ (function () {
    function RemoveSignatureService() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._removeSignature = this._observer.asObservable();
    }
    Object.defineProperty(RemoveSignatureService.prototype, "removeSignature", {
        get: function () {
            return this._removeSignature;
        },
        enumerable: true,
        configurable: true
    });
    RemoveSignatureService.prototype.remove = function (id) {
        this._observer.next(id);
    };
    return RemoveSignatureService;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/select-signature.service.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/select-signature.service.ts ***!
  \*********************************************************************************************************/
/*! exports provided: SelectSignatureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectSignatureService", function() { return SelectSignatureService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");

var SelectSignatureService = /** @class */ (function () {
    function SelectSignatureService() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._selectSignature = this._observer.asObservable();
    }
    Object.defineProperty(SelectSignatureService.prototype, "selectSignature", {
        get: function () {
            return this._selectSignature;
        },
        enumerable: true,
        configurable: true
    });
    SelectSignatureService.prototype.select = function (sign) {
        this._observer.next(sign);
    };
    return SelectSignatureService;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/signature-app.component.less":
/*!**********************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature-app.component.less ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');\n:host * {\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n}\n::ng-deep .page {\n  position: relative;\n}\n::ng-deep .gd-page-image {\n  width: unset;\n  height: unset;\n}\n::ng-deep .top-panel {\n  align-content: flex-start;\n}\n.wrapper {\n  align-items: stretch;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.doc-panel {\n  display: flex;\n  height: inherit;\n}\n.gd-document {\n  width: 100%;\n  height: calc(100% - 90px);\n}\n.toolbar-panel {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n::ng-deep .button {\n  color: #3E4E5A !important;\n}\n@media (max-width: 1037px) {\n  ::ng-deep .panzoom {\n    justify-content: unset !important;\n  }\n  ::ng-deep .left-panel {\n    width: 100% !important;\n    overflow: auto !important;\n  }\n  ::ng-deep .logo ::ng-deep .icon {\n    font-size: 24px !important;\n  }\n  ::ng-deep .top-panel {\n    height: 120px !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc2lnbmF0dXJlL3NyYy9saWIvc2lnbmF0dXJlLWFwcC5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9zaWduYXR1cmUvc3JjL2xpYi9zaWduYXR1cmUtYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQ0FrQjtBQUdsQjtFQUNFLHNEQUFBO0FEREY7QUNJQTtFQUNFLGtCQUFBO0FERkY7QUNLQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FESEY7QUNNQTtFQUNFLHlCQUFBO0FESkY7QUNPQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBRExGO0FDUUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBRE5GO0FDU0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QURQRjtBQ1VBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRFJGO0FDV0E7RUFDRSx5QkFBQTtBRFRGO0FDWUE7RUFDRTtJQUNFLGlDQUFBO0VEVkY7RUNhQTtJQUNFLHNCQUFBO0lBQ0EseUJBQUE7RURYRjtFQ2NBO0lBRUksMEJBQUE7RURiSjtFQ2lCQTtJQUNFLHdCQUFBO0VEZkY7QUFDRiIsImZpbGUiOiJsaWJzL3NpZ25hdHVyZS9zcmMvbGliL3NpZ25hdHVyZS1hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcbjpob3N0ICoge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG46Om5nLWRlZXAgLnBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46Om5nLWRlZXAgLmdkLXBhZ2UtaW1hZ2Uge1xuICB3aWR0aDogdW5zZXQ7XG4gIGhlaWdodDogdW5zZXQ7XG59XG46Om5nLWRlZXAgLnRvcC1wYW5lbCB7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ud3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5kb2MtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG4uZ2QtZG9jdW1lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA5MHB4KTtcbn1cbi50b29sYmFyLXBhbmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46Om5nLWRlZXAgLmJ1dHRvbiB7XG4gIGNvbG9yOiAjM0U0RTVBICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAzN3B4KSB7XG4gIDo6bmctZGVlcCAucGFuem9vbSB7XG4gICAganVzdGlmeS1jb250ZW50OiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCAubGVmdC1wYW5lbCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCAubG9nbyA6Om5nLWRlZXAgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCAudG9wLXBhbmVsIHtcbiAgICBoZWlnaHQ6IDEyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIkBpbXBvcnQgKGNzcykgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCBcIi4uLy4uLy4uL2NvbW1vbi1jb21wb25lbnRzL3NyYy9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbjpob3N0ICoge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbjo6bmctZGVlcCAucGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuOjpuZy1kZWVwIC5nZC1wYWdlLWltYWdlIHtcbiAgd2lkdGg6IHVuc2V0O1xuICBoZWlnaHQ6IHVuc2V0O1xufVxuXG46Om5nLWRlZXAgLnRvcC1wYW5lbCB7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi53cmFwcGVyIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uZG9jLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uZ2QtZG9jdW1lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiB+XCJjYWxjKDEwMCUgLSBAe2VkaXRvci1uYXYtaGVpZ2h0fSlcIjtcbn1cblxuLnRvb2xiYXItcGFuZWwge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5idXR0b24ge1xuICBjb2xvcjogQHByaW1hcnkgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIEBwaG9uZS1kb3duIHtcbiAgOjpuZy1kZWVwIC5wYW56b29tIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICA6Om5nLWRlZXAgLmxlZnQtcGFuZWwge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIDo6bmctZGVlcCAubG9nbyB7XG4gICAgOjpuZy1kZWVwIC5pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIDo6bmctZGVlcCAudG9wLXBhbmVsIHtcbiAgICBoZWlnaHQ6IDEyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuIl19 */"

/***/ }),

/***/ "../../libs/signature/src/lib/signature-app.component.ts":
/*!********************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature-app.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: SignatureAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureAppComponent", function() { return SignatureAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/signature/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signature_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signature.service */ "../../libs/signature/src/lib/signature.service.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _signature_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signature-config.service */ "../../libs/signature/src/lib/signature-config.service.ts");
/* harmony import */ var _signature_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signature-models */ "../../libs/signature/src/lib/signature-models.ts");
/* harmony import */ var _select_signature_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-signature.service */ "../../libs/signature/src/lib/select-signature.service.ts");
/* harmony import */ var _signature_signature_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signature/signature.component */ "../../libs/signature/src/lib/signature/signature.component.ts");
/* harmony import */ var _drag_signature_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drag-signature.service */ "../../libs/signature/src/lib/drag-signature.service.ts");
/* harmony import */ var _remove_signature_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./remove-signature.service */ "../../libs/signature/src/lib/remove-signature.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "../../libs/signature/node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _active_signature_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./active-signature.service */ "../../libs/signature/src/lib/active-signature.service.ts");
/* harmony import */ var _signatures_holder_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signatures-holder.service */ "../../libs/signature/src/lib/signatures-holder.service.ts");
/* harmony import */ var _signature_tab_activator_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./signature-tab-activator.service */ "../../libs/signature/src/lib/signature-tab-activator.service.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! hammerjs */ "../../libs/signature/node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _copy_signature_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./copy-signature.service */ "../../libs/signature/src/lib/copy-signature.service.ts");
















var $ = jquery__WEBPACK_IMPORTED_MODULE_10__;
var SignatureAppComponent = /** @class */ (function () {
    function SignatureAppComponent(_signatureService, _modalService, configService, uploadFilesService, _navigateService, _zoomService, pagePreloadService, _renderPrintService, passwordService, _windowService, _selectSignatureService, _signatureTabActivationService, _hostingComponentsService, _addDynamicComponentService, _dragSignatureService, _onCloseService, removeSignatureService, _activeSignatureService, _excMessageService, _signaturesHolderService, _tabActivatorService, copySignatureService) {
        var _this = this;
        this._signatureService = _signatureService;
        this._modalService = _modalService;
        this._navigateService = _navigateService;
        this._zoomService = _zoomService;
        this._renderPrintService = _renderPrintService;
        this._windowService = _windowService;
        this._selectSignatureService = _selectSignatureService;
        this._signatureTabActivationService = _signatureTabActivationService;
        this._hostingComponentsService = _hostingComponentsService;
        this._addDynamicComponentService = _addDynamicComponentService;
        this._dragSignatureService = _dragSignatureService;
        this._onCloseService = _onCloseService;
        this._activeSignatureService = _activeSignatureService;
        this._excMessageService = _excMessageService;
        this._signaturesHolderService = _signaturesHolderService;
        this._tabActivatorService = _tabActivatorService;
        this.title = 'signature';
        this.files = [];
        this.countPages = 0;
        this.formatDisabled = !this.file;
        this.browseFilesModal = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].BrowseFiles;
        this.signatureTypes = [
            _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].TEXT,
            _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].IMAGE,
            _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].DIGITAL,
            _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].QR_CODE,
            _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].BAR_CODE,
            _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].STAMP,
            _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].HAND,
        ];
        this.signatureTypeCodes = [
            _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].QR_CODE,
            _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].BAR_CODE,
        ];
        this.signatureComponents = new Map();
        this.fileWasDropped = false;
        this._tabActivatorService.activeTabChange.subscribe(function (tabId) {
            if (tabId === '1') {
                if (_this.activeSignatureTab) {
                    _this._signatureTabActivationService.changeActiveTab(_this.activeSignatureTab);
                }
                _this.activeSignatureTab = null;
            }
        });
        copySignatureService.copySignature.subscribe(function (copySign) {
            var e_1, _a;
            var componentRef = _this.signatureComponents.get(copySign.id);
            if (componentRef) {
                // @ts-ignore
                var comp = componentRef.instance;
                var compPage = comp.data.number;
                var sign = new _signature_models__WEBPACK_IMPORTED_MODULE_5__["DraggableSignature"]();
                sign.type = comp.signatureType;
                sign.guid = copySign.guid;
                sign.position = comp.position;
                var addedSignature = new _signature_models__WEBPACK_IMPORTED_MODULE_5__["AddedSignature"]();
                addedSignature.guid = copySign.guid;
                addedSignature.data = comp.data.data;
                if (comp.data.props) {
                    addedSignature.props = comp.data.props;
                }
                else {
                    addedSignature.width = comp.data.width;
                    addedSignature.height = comp.data.height;
                }
                try {
                    for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var page = _c.value;
                        if (page.number !== compPage) {
                            addedSignature.number = page.number;
                            sign.pageNumber = page.number;
                            var id = _this.addSignatureComponent(addedSignature, sign, page);
                            _this._signaturesHolderService.addId(sign.guid, id);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
        copySignatureService.changesSignature.subscribe(function (copyChanges) {
            var e_2, _a;
            var componentRef = _this.signatureComponents.get(copyChanges.id);
            if (componentRef) {
                var ids = _this._signaturesHolderService.get(copyChanges.guid);
                try {
                    for (var ids_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](ids), ids_1_1 = ids_1.next(); !ids_1_1.done; ids_1_1 = ids_1.next()) {
                        var id = ids_1_1.value;
                        var compRef = _this.signatureComponents.get(id);
                        if (compRef) {
                            // @ts-ignore
                            var comp = compRef.instance;
                            if (comp.id !== copyChanges.id) {
                                comp.data.width = copyChanges.width;
                                comp.data.height = copyChanges.height;
                                comp.data.position = copyChanges.position;
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (ids_1_1 && !ids_1_1.done && (_a = ids_1.return)) _a.call(ids_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        });
        removeSignatureService.removeSignature.subscribe(function (del) {
            var e_3, _a;
            var ids = _this._signaturesHolderService.get(del.guid);
            try {
                for (var ids_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](ids), ids_2_1 = ids_2.next(); !ids_2_1.done; ids_2_1 = ids_2.next()) {
                    var id = ids_2_1.value;
                    if (del.type === _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].DIGITAL.id || del.id === id) {
                        var componentRef = _this.signatureComponents.get(id);
                        if (componentRef) {
                            componentRef.destroy();
                        }
                        _this.signatureComponents.delete(id);
                        _this._signaturesHolderService.remove(del.guid, id);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (ids_2_1 && !ids_2_1.done && (_a = ids_2.return)) _a.call(ids_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
        });
        configService.updatedConfig.subscribe(function (signatureConfig) {
            _this.signatureConfig = signatureConfig;
        });
        uploadFilesService.uploadsChange.subscribe(function (uploads) {
            if (uploads) {
                var i = void 0;
                for (i = 0; i < uploads.length; i++) {
                    _this._signatureService.upload(uploads.item(i), '', _this.rewriteConfig, null).subscribe(function (obj) {
                        _this.fileWasDropped ? _this.selectFile(obj.guid, '', '') : _this.selectDir('');
                    });
                }
            }
        });
        pagePreloadService.checkPreload.subscribe(function (page) {
            if (_this.preloadPageCountConfig !== 0) {
                for (var i = page; i < page + 2; i++) {
                    if (i > 0 && i <= _this.countPages && !_this.file.pages[i - 1].data) {
                        _this.preloadPages(i, i);
                    }
                }
            }
        });
        passwordService.passChange.subscribe(function (pass) {
            _this.selectFile(_this.credentials.guid, pass, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].PasswordRequired);
        });
        _selectSignatureService.selectSignature.subscribe(function (sign) {
            _this.selectSignature(sign);
        });
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe(function (w) {
            _this.isDesktop = _windowService.isDesktop();
        });
    }
    SignatureAppComponent.prototype.ngOnInit = function () {
        if (this.defaultDocumentConfig()) {
            this.isLoading = true;
            this.selectFile(this.defaultDocumentConfig(), "", "");
        }
    };
    Object.defineProperty(SignatureAppComponent.prototype, "rewriteConfig", {
        get: function () {
            return this.signatureConfig ? this.signatureConfig.rewrite : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "zoomConfig", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "pageSelectorConfig", {
        get: function () {
            return this.signatureConfig ? this.signatureConfig.pageSelector : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "preloadPageCountConfig", {
        get: function () {
            return this.signatureConfig ? this.signatureConfig.preloadPageCount : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "downloadConfig", {
        get: function () {
            return this.signatureConfig ? this.signatureConfig.download : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "downloadOriginalConfig", {
        get: function () {
            return this.signatureConfig ? this.signatureConfig.downloadOriginal : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "downloadSingedConfig", {
        get: function () {
            return this.signatureConfig ? this.signatureConfig.downloadSigned : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "uploadConfig", {
        get: function () {
            return this.signatureConfig ? this.signatureConfig.upload : true;
        },
        enumerable: true,
        configurable: true
    });
    SignatureAppComponent.prototype.defaultDocumentConfig = function () {
        return this.signatureConfig ? this.signatureConfig.defaultDocument : "";
    };
    Object.defineProperty(SignatureAppComponent.prototype, "printConfig", {
        get: function () {
            return this.signatureConfig ? this.signatureConfig.print : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "browseConfig", {
        get: function () {
            return this.signatureConfig ? this.signatureConfig.browse : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "htmlModeConfig", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "enableRightClickConfig", {
        get: function () {
            return this.signatureConfig ? this.signatureConfig.enableRightClick : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "textSignatureConfig", {
        get: function () {
            return this.signatureConfig ? this.signatureConfig.textSignature : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "imageSignatureConfig", {
        get: function () {
            return this.signatureConfig ? this.signatureConfig.imageSignature : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "digitalSignatureConfig", {
        get: function () {
            return this.signatureConfig ? this.signatureConfig.digitalSignature : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "qrCodeSignatureConfig", {
        get: function () {
            return this.signatureConfig ? this.signatureConfig.qrCodeSignature : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "barCodeSignatureConfig", {
        get: function () {
            return this.signatureConfig ? this.signatureConfig.barCodeSignature : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "stampSignatureConfig", {
        get: function () {
            return this.signatureConfig ? this.signatureConfig.stampSignature : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "handSignatureConfig", {
        get: function () {
            return this.signatureConfig ? this.signatureConfig.handSignature : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "currentPage", {
        get: function () {
            return this._navigateService.currentPage;
        },
        enumerable: true,
        configurable: true
    });
    SignatureAppComponent.prototype.openModal = function (id) {
        this._modalService.open(id);
    };
    SignatureAppComponent.prototype.closeModal = function (id) {
        this._modalService.close(id);
    };
    SignatureAppComponent.prototype.selectDir = function ($event) {
        var _this = this;
        this._signatureService.loadFiles($event).subscribe(function (files) { return _this.files = files || []; });
    };
    SignatureAppComponent.prototype.selectFile = function ($event, password, modalId) {
        var _this = this;
        this.credentials = { guid: $event, password: password };
        this.file = null;
        this._signatureService.loadFile(this.credentials).subscribe(function (file) {
            _this.file = file;
            _this.formatDisabled = !_this.file;
            if (file) {
                var preloadPageCount = _this.preloadPageCountConfig;
                var countPages = file.pages ? file.pages.length : 0;
                if (preloadPageCount > 0) {
                    _this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                }
                _this._navigateService.countPages = countPages;
                _this._navigateService.currentPage = 1;
                _this.countPages = countPages;
                _this.cleanSignatures();
            }
        });
        if (modalId) {
            this._modalService.close(modalId);
        }
        this.clearData();
    };
    SignatureAppComponent.prototype.preloadPages = function (start, end) {
        var _this = this;
        var _loop_1 = function (i) {
            this_1._signatureService.loadPage(this_1.credentials, i).subscribe(function (page) {
                _this.file.pages[i - 1] = page;
            });
        };
        var this_1 = this;
        for (var i = start; i <= end; i++) {
            _loop_1(i);
        }
    };
    SignatureAppComponent.prototype.upload = function ($event) {
        var _this = this;
        this._signatureService.upload(null, $event, this.rewriteConfig, null).subscribe(function () {
            _this.selectDir('');
        });
    };
    SignatureAppComponent.prototype.downloadFile = function () {
        if (this.formatDisabled)
            return;
        window.location.assign(this._signatureService.getDownloadUrl(this.credentials));
    };
    SignatureAppComponent.prototype.clearData = function () {
        var e_4, _a;
        if (!this.file || !this.file.pages) {
            return;
        }
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                var page = _c.value;
                page.data = null;
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    SignatureAppComponent.prototype.onRightClick = function ($event) {
        return this.enableRightClickConfig;
    };
    SignatureAppComponent.prototype.getSignatureTypeConfig = function (id) {
        switch (id) {
            case _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].TEXT.id:
                return this.textSignatureConfig;
            case _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].IMAGE.id:
                return this.imageSignatureConfig;
            case _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].DIGITAL.id:
                return this.digitalSignatureConfig;
            case _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].QR_CODE.id:
                return this.qrCodeSignatureConfig;
            case _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].BAR_CODE.id:
                return this.barCodeSignatureConfig;
            case _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].STAMP.id:
                return this.stampSignatureConfig;
            case _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].HAND.id:
                return this.handSignatureConfig;
        }
    };
    SignatureAppComponent.prototype.dragOver = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
    };
    SignatureAppComponent.prototype.dropSignature = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        var position = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Utils"].getMousePosition($event);
        var currentPage = document.elementFromPoint(position.x, position.y);
        if (currentPage && $(currentPage).parent().parent() && $(currentPage).parent().parent().parent().hasClass("page")) {
            var documentPage = $(currentPage).parent().parent()[0];
            var left = position.x - $(documentPage).offset().left;
            var top_1 = position.y - $(documentPage).offset().top;
            var currentPosition = new _signature_models__WEBPACK_IMPORTED_MODULE_5__["Position"](left, top_1);
            var sign = this._dragSignatureService.sign;
            if (sign) {
                sign.position = currentPosition;
                this.selectSignature(sign);
                this._dragSignatureService.sign = null;
            }
        }
    };
    SignatureAppComponent.prototype.selectSignature = function (sign) {
        var _this = this;
        var e_5, _a;
        if (sign.type === _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].DIGITAL.id) {
            var addedSignature = new _signature_models__WEBPACK_IMPORTED_MODULE_5__["AddedSignature"]();
            addedSignature.digitalProps = sign.digitalProps;
            addedSignature.guid = sign.guid;
            addedSignature.number = sign.pageNumber;
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var page = _c.value;
                    var id = this.addSignatureComponent(addedSignature, sign, page);
                    this._signaturesHolderService.addId(sign.guid, id);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
            this.closeTab(sign.type);
        }
        else {
            this._signatureService.loadSignatureImage(sign).subscribe(function (signature) {
                signature.number = sign.pageNumber;
                var pageModel = _this.file.pages.find(function (p) {
                    return p.number === sign.pageNumber;
                });
                var id = _this.addSignatureComponent(signature, sign, pageModel);
                _this._signaturesHolderService.addId(sign.guid, id);
                _this.closeTab(sign.type);
            });
        }
    };
    SignatureAppComponent.prototype.addSignatureComponent = function (addedSignature, sign, page) {
        var dynamicDirective = this._hostingComponentsService.find(page.number);
        if (dynamicDirective) {
            var viewContainerRef = dynamicDirective.viewContainerRef;
            var selectSignature = this._addDynamicComponentService.addDynamicComponent(viewContainerRef, _signature_signature_component__WEBPACK_IMPORTED_MODULE_7__["Signature"]);
            var id = this.signatureComponents.size + 1;
            if (addedSignature.width >= page.width) {
                addedSignature.width = page.width / 2;
            }
            if (addedSignature.height >= page.height) {
                addedSignature.height = page.height / 2;
            }
            selectSignature.instance.id = id;
            selectSignature.instance.data = addedSignature;
            selectSignature.instance.position = sign.position;
            selectSignature.instance.type = sign.type;
            selectSignature.instance.pageWidth = page.width;
            selectSignature.instance.pageHeight = page.height;
            this.signatureComponents.set(id, selectSignature);
            this._activeSignatureService.changeActive(id);
            return id;
        }
        return null;
    };
    SignatureAppComponent.prototype.closeTab = function (type) {
        this._signatureTabActivationService.changeActiveTab(type);
    };
    SignatureAppComponent.prototype.hideAll = function ($event) {
        if (($event.target.parentElement && $event.target.parentElement.attributes['name'] &&
            $event.target.parentElement.attributes['name'].value === 'button') ||
            ($event.target.parentElement &&
                $event.target.parentElement.parentElement &&
                $event.target.parentElement.parentElement.attributes['name'] &&
                $event.target.parentElement.parentElement.attributes['name'].value === 'button') ||
            ($event.target.parentElement &&
                $event.target.parentElement.parentElement &&
                $event.target.parentElement.parentElement.parentElement &&
                $event.target.parentElement.parentElement.parentElement.parentElement &&
                $event.target.parentElement.parentElement.parentElement.parentElement.attributes['name'] &&
                $event.target.parentElement.parentElement.parentElement.parentElement.attributes['name'].value === 'button')) {
            return;
        }
        this._onCloseService.close(true);
    };
    SignatureAppComponent.prototype.newSign = function ($event) {
        if (_signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].HAND.id === $event) {
            this._modalService.open(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].DrawHandSignature);
            this._signatureTabActivationService.changeActiveTab(_signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].HAND.id);
        }
        else if (_signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].STAMP.id === $event) {
            this._modalService.open(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].DrawStampSignature);
            this._signatureTabActivationService.changeActiveTab(_signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].STAMP.id);
        }
        else if (_signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].TEXT.id === $event) {
            this.addTextSign();
            this._signatureTabActivationService.changeActiveTab(_signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].TEXT.id);
        }
    };
    SignatureAppComponent.prototype.addTextSign = function () {
        var signature = new _signature_models__WEBPACK_IMPORTED_MODULE_5__["AddedSignature"]();
        signature.props = _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureProps"].getDefault();
        signature.guid = _signature_models__WEBPACK_IMPORTED_MODULE_5__["DraggableSignature"].TEMP;
        var sign = new _signature_models__WEBPACK_IMPORTED_MODULE_5__["DraggableSignature"]();
        sign.guid = _signature_models__WEBPACK_IMPORTED_MODULE_5__["DraggableSignature"].TEMP;
        sign.position = new _signature_models__WEBPACK_IMPORTED_MODULE_5__["Position"](0, 0);
        sign.type = _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].TEXT.id;
        var pageNumber = this._navigateService.currentPage;
        signature.number = pageNumber;
        sign.pageNumber = pageNumber;
        var pageModel = this.file.pages.find(function (p) {
            return p.number === pageNumber;
        });
        var id = this.addSignatureComponent(signature, sign, pageModel);
        this._signaturesHolderService.addId(sign.guid, id);
    };
    SignatureAppComponent.prototype.ngOnDestroy = function () {
        this.cleanSignatures();
    };
    SignatureAppComponent.prototype.cleanSignatures = function () {
        var e_6, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.signatureComponents.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var componentRef = _c.value;
                componentRef.destroy();
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        this.signatureComponents = new Map();
        this._signaturesHolderService.clear();
    };
    SignatureAppComponent.prototype.sign = function () {
        var _this = this;
        var signatures = this.prepareSignaturesData();
        this._signatureService.sign(this.credentials, signatures).subscribe(function (ret) {
            _this._modalService.open(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].OperationSuccess);
            _this.selectFile(ret.guid, null, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].OperationSuccess);
        });
    };
    SignatureAppComponent.prototype.prepareSignaturesData = function () {
        var e_7, _a;
        var signatures = [];
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this._signaturesHolderService.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var ids = _c.value;
                var id = ids.pop();
                var componentRef = this.signatureComponents.get(id);
                // @ts-ignore
                var sign = componentRef.instance;
                var data = sign.data;
                var position = sign.position;
                var type = sign.type;
                if (_signature_models__WEBPACK_IMPORTED_MODULE_5__["DraggableSignature"].TEMP !== data.guid) {
                    signatures.push(_signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureData"].map(data, type, position));
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return signatures;
    };
    SignatureAppComponent.prototype.isPdf = function () {
        if (this.file) {
            if (_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["FileUtil"].find(this.file.guid, false).format === "Portable Document Format") {
                return true;
            }
        }
        return false;
    };
    SignatureAppComponent.prototype.codesConfig = function () {
        return this.getSignatureTypeConfig(_signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].BAR_CODE.id) || this.getSignatureTypeConfig(_signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].QR_CODE.id);
    };
    SignatureAppComponent.prototype.isVisible = function (id) {
        var notCode = id !== _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].BAR_CODE.id && id !== _signature_models__WEBPACK_IMPORTED_MODULE_5__["SignatureType"].QR_CODE.id;
        return this.getSignatureTypeConfig(id) && (this.isDesktop || notCode);
    };
    SignatureAppComponent.prototype.activeTab = function ($event) {
        this.activeSignatureTab = $event;
    };
    SignatureAppComponent.prototype.fileDropped = function ($event) {
        this.fileWasDropped = $event;
    };
    SignatureAppComponent.ctorParameters = function () { return [
        { type: _signature_service__WEBPACK_IMPORTED_MODULE_2__["SignatureService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ModalService"] },
        { type: _signature_config_service__WEBPACK_IMPORTED_MODULE_4__["SignatureConfigService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["UploadFilesService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["NavigateService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ZoomService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["PagePreloadService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["RenderPrintService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["PasswordService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["WindowService"] },
        { type: _select_signature_service__WEBPACK_IMPORTED_MODULE_6__["SelectSignatureService"] },
        { type: _signature_tab_activator_service__WEBPACK_IMPORTED_MODULE_13__["SignatureTabActivatorService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["HostingDynamicComponentService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["AddDynamicComponentService"] },
        { type: _drag_signature_service__WEBPACK_IMPORTED_MODULE_8__["DragSignatureService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["OnCloseService"] },
        { type: _remove_signature_service__WEBPACK_IMPORTED_MODULE_9__["RemoveSignatureService"] },
        { type: _active_signature_service__WEBPACK_IMPORTED_MODULE_11__["ActiveSignatureService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ExceptionMessageService"] },
        { type: _signatures_holder_service__WEBPACK_IMPORTED_MODULE_12__["SignaturesHolderService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["TabActivatorService"] },
        { type: _copy_signature_service__WEBPACK_IMPORTED_MODULE_15__["CopySignatureService"] }
    ]; };
    SignatureAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-signature',
            template: __webpack_require__(/*! raw-loader!./signature-app.component.html */ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/signature-app.component.html"),
            styles: [__webpack_require__(/*! ./signature-app.component.less */ "../../libs/signature/src/lib/signature-app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_signature_service__WEBPACK_IMPORTED_MODULE_2__["SignatureService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ModalService"],
            _signature_config_service__WEBPACK_IMPORTED_MODULE_4__["SignatureConfigService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["UploadFilesService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["NavigateService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ZoomService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["PagePreloadService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["RenderPrintService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["PasswordService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["WindowService"],
            _select_signature_service__WEBPACK_IMPORTED_MODULE_6__["SelectSignatureService"],
            _signature_tab_activator_service__WEBPACK_IMPORTED_MODULE_13__["SignatureTabActivatorService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["HostingDynamicComponentService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["AddDynamicComponentService"],
            _drag_signature_service__WEBPACK_IMPORTED_MODULE_8__["DragSignatureService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["OnCloseService"],
            _remove_signature_service__WEBPACK_IMPORTED_MODULE_9__["RemoveSignatureService"],
            _active_signature_service__WEBPACK_IMPORTED_MODULE_11__["ActiveSignatureService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ExceptionMessageService"],
            _signatures_holder_service__WEBPACK_IMPORTED_MODULE_12__["SignaturesHolderService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["TabActivatorService"],
            _copy_signature_service__WEBPACK_IMPORTED_MODULE_15__["CopySignatureService"]])
    ], SignatureAppComponent);
    return SignatureAppComponent;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/signature-config.service.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature-config.service.ts ***!
  \*********************************************************************************************************/
/*! exports provided: SignatureConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureConfigService", function() { return SignatureConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/signature/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _signature_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signature-config */ "../../libs/signature/src/lib/signature-config.ts");






var SignatureConfigService = /** @class */ (function () {
    function SignatureConfigService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._signatureConfig = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new _signature_config__WEBPACK_IMPORTED_MODULE_5__["SignatureConfig"]());
        this._updatedConfig = this._signatureConfig.asObservable();
    }
    Object.defineProperty(SignatureConfigService.prototype, "updatedConfig", {
        get: function () {
            return this._updatedConfig;
        },
        enumerable: true,
        configurable: true
    });
    SignatureConfigService.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var configEndpoint = _this._config.getConfigEndpoint(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_4__["Api"].SIGNATURE_APP);
            _this._http.get(configEndpoint, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_4__["Api"].httpOptionsJson).toPromise().then(function (response) {
                var signatureConfig = response;
                _this._signatureConfig.next(signatureConfig);
                resolve();
            }).catch(function (response) {
                reject("Could not load signature config: " + JSON.stringify(response));
            });
        });
    };
    SignatureConfigService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
    ]; };
    SignatureConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], SignatureConfigService);
    return SignatureConfigService;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/signature-config.ts":
/*!*************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature-config.ts ***!
  \*************************************************************************************************/
/*! exports provided: SignatureConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureConfig", function() { return SignatureConfig; });
var SignatureConfig = /** @class */ (function () {
    function SignatureConfig() {
    }
    return SignatureConfig;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/signature-left-panel/signature-left-panel.component.less":
/*!**************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature-left-panel/signature-left-panel.component.less ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .left-panel {\n  width: 350px;\n  height: calc(100% - 90px);\n}\n::ng-deep .gd-left-bar-fade {\n  width: 350px !important;\n}\n.gd-signatures-scroll {\n  height: calc(100% - 60px);\n}\n.tab-content {\n  height: calc(100% - 90px);\n  line-height: unset;\n  position: absolute;\n  background-color: #FFFFFF;\n}\n.gd-signature-context-panel {\n  background-color: #F3F3F3;\n  width: 350px;\n  height: 100%;\n  position: absolute;\n}\n.gd-signature-context-upload-title,\n.gd-signature-context-panel-title {\n  color: #AAAAAA;\n  font-size: 12px;\n  font-family: Helvetica;\n  font-weight: bold;\n  margin: 5px 12px 5px 12px;\n}\n.signature-title-block {\n  display: block;\n}\n.gd-signature-list-title {\n  display: flex;\n  flex-direction: row;\n  height: 70px;\n}\n.gd-signature-list-title .gd-signature-title-icon {\n  flex: 0 0 70px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.gd-signature-list-title .gd-signature-title-icon .icon {\n  color: #707070;\n  cursor: pointer;\n  font-size: 12px;\n}\n.gd-signature-list-title .gd-signature-title-icon .icon.disabled {\n  color: #959da5;\n}\n.gd-signature-list-title .gd-signature-context-panel-title {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.gd-signature-context-pane-wrapper {\n  display: flex;\n  flex-direction: column;\n  height: inherit;\n  overflow: auto;\n}\n@media (max-width: 1037px) {\n  .tab-content {\n    width: 100%;\n  }\n  .gd-signature-context-panel {\n    left: 0px;\n    right: 0px;\n    width: auto;\n  }\n  .gd-signature-context-panel-title {\n    font-size: 12px;\n    line-height: 18px;\n    margin: 16px 0 14px 12px;\n  }\n  .gd-signature-context-panel-title,\n  .gd-signature-context-upload-title {\n    width: unset;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9zaWduYXR1cmUvc3JjL2xpYi9zaWduYXR1cmUtbGVmdC1wYW5lbC9zaWduYXR1cmUtbGVmdC1wYW5lbC5jb21wb25lbnQubGVzcyIsImxpYnMvc2lnbmF0dXJlL3NyYy9saWIvc2lnbmF0dXJlLWxlZnQtcGFuZWwvc2lnbmF0dXJlLWxlZnQtcGFuZWwuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNERjtBRElBO0VBQ0UsdUJBQUE7QUNGRjtBREtBO0VBQ0UseUJBQUE7QUNIRjtBRE1BO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNKRjtBRE9BO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTEY7QURRQTs7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0xGO0FEUUE7RUFDRSxjQUFBO0FDTkY7QURTQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNQRjtBRElBO0VBTUksY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDUEo7QURGQTtFQVlNLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ1BOO0FEU007RUFDRSxjQUFBO0FDUFI7QURWQTtFQXVCSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUNWSjtBRGVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNiRjtBRGdCQTtFQUNFO0lBQ0UsV0FBQTtFQ2RGO0VEaUJBO0lBQ0UsU0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0VDZkY7RURrQkE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSx3QkFBQTtFQ2hCRjtFRG1CQTs7SUFDRSxZQUFBO0VDaEJGO0FBQ0YiLCJmaWxlIjoibGlicy9zaWduYXR1cmUvc3JjL2xpYi9zaWduYXR1cmUtbGVmdC1wYW5lbC9zaWduYXR1cmUtbGVmdC1wYW5lbC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21tb24tY29tcG9uZW50cy9zcmMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG46Om5nLWRlZXAgLmxlZnQtcGFuZWwge1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogflwiY2FsYygxMDAlIC0gQHtlZGl0b3ItbmF2LWhlaWdodH0pXCI7XG59XG5cbjo6bmctZGVlcCAuZ2QtbGVmdC1iYXItZmFkZSB7XG4gIHdpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xufVxuXG4uZ2Qtc2lnbmF0dXJlcy1zY3JvbGwge1xuICBoZWlnaHQ6IH5cImNhbGMoMTAwJSAtIDYwcHgpXCI7XG59XG5cbi50YWItY29udGVudCB7XG4gIGhlaWdodDogflwiY2FsYygxMDAlIC0gQHtlZGl0b3ItbmF2LWhlaWdodH0pXCI7XG4gIGxpbmUtaGVpZ2h0OiB1bnNldDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuXG4uZ2Qtc2lnbmF0dXJlLWNvbnRleHQtcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGM0YzO1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZ2Qtc2lnbmF0dXJlLWNvbnRleHQtdXBsb2FkLXRpdGxlLCAuZ2Qtc2lnbmF0dXJlLWNvbnRleHQtcGFuZWwtdGl0bGUge1xuICBjb2xvcjogI0FBQUFBQTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiA1cHggMTJweCA1cHggMTJweDtcbn1cblxuLnNpZ25hdHVyZS10aXRsZS1ibG9jayB7IC8vIGZvciBzYWZhcmlcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5nZC1zaWduYXR1cmUtbGlzdC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogNzBweDtcblxuICAuZ2Qtc2lnbmF0dXJlLXRpdGxlLWljb24ge1xuICAgIGZsZXg6IDAgMCA3MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC5pY29uIHtcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgY29sb3I6ICM5NTlkYTU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmdkLXNpZ25hdHVyZS1jb250ZXh0LXBhbmVsLXRpdGxlIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cblxufVxuXG4uZ2Qtc2lnbmF0dXJlLWNvbnRleHQtcGFuZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuQG1lZGlhIEBwaG9uZS1kb3duIHtcbiAgLnRhYi1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5nZC1zaWduYXR1cmUtY29udGV4dC1wYW5lbCB7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cblxuICAuZ2Qtc2lnbmF0dXJlLWNvbnRleHQtcGFuZWwtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBtYXJnaW46IDE2cHggMCAxNHB4IDEycHg7XG4gIH1cblxuICAuZ2Qtc2lnbmF0dXJlLWNvbnRleHQtcGFuZWwtdGl0bGUsIC5nZC1zaWduYXR1cmUtY29udGV4dC11cGxvYWQtdGl0bGUge1xuICAgIHdpZHRoOiB1bnNldDtcbiAgfVxufVxuIiwiOjpuZy1kZWVwIC5sZWZ0LXBhbmVsIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDkwcHgpO1xufVxuOjpuZy1kZWVwIC5nZC1sZWZ0LWJhci1mYWRlIHtcbiAgd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XG59XG4uZ2Qtc2lnbmF0dXJlcy1zY3JvbGwge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xufVxuLnRhYi1jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA5MHB4KTtcbiAgbGluZS1oZWlnaHQ6IHVuc2V0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG4uZ2Qtc2lnbmF0dXJlLWNvbnRleHQtcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGM0YzO1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmdkLXNpZ25hdHVyZS1jb250ZXh0LXVwbG9hZC10aXRsZSxcbi5nZC1zaWduYXR1cmUtY29udGV4dC1wYW5lbC10aXRsZSB7XG4gIGNvbG9yOiAjQUFBQUFBO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDVweCAxMnB4IDVweCAxMnB4O1xufVxuLnNpZ25hdHVyZS10aXRsZS1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmdkLXNpZ25hdHVyZS1saXN0LXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiA3MHB4O1xufVxuLmdkLXNpZ25hdHVyZS1saXN0LXRpdGxlIC5nZC1zaWduYXR1cmUtdGl0bGUtaWNvbiB7XG4gIGZsZXg6IDAgMCA3MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5nZC1zaWduYXR1cmUtbGlzdC10aXRsZSAuZ2Qtc2lnbmF0dXJlLXRpdGxlLWljb24gLmljb24ge1xuICBjb2xvcjogIzcwNzA3MDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uZ2Qtc2lnbmF0dXJlLWxpc3QtdGl0bGUgLmdkLXNpZ25hdHVyZS10aXRsZS1pY29uIC5pY29uLmRpc2FibGVkIHtcbiAgY29sb3I6ICM5NTlkYTU7XG59XG4uZ2Qtc2lnbmF0dXJlLWxpc3QtdGl0bGUgLmdkLXNpZ25hdHVyZS1jb250ZXh0LXBhbmVsLXRpdGxlIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLmdkLXNpZ25hdHVyZS1jb250ZXh0LXBhbmUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAzN3B4KSB7XG4gIC50YWItY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmdkLXNpZ25hdHVyZS1jb250ZXh0LXBhbmVsIHtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAuZ2Qtc2lnbmF0dXJlLWNvbnRleHQtcGFuZWwtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBtYXJnaW46IDE2cHggMCAxNHB4IDEycHg7XG4gIH1cbiAgLmdkLXNpZ25hdHVyZS1jb250ZXh0LXBhbmVsLXRpdGxlLFxuICAuZ2Qtc2lnbmF0dXJlLWNvbnRleHQtdXBsb2FkLXRpdGxlIHtcbiAgICB3aWR0aDogdW5zZXQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "../../libs/signature/src/lib/signature-left-panel/signature-left-panel.component.ts":
/*!************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature-left-panel/signature-left-panel.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: SignatureLeftPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureLeftPanelComponent", function() { return SignatureLeftPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/signature/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signature_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signature-models */ "../../libs/signature/src/lib/signature-models.ts");
/* harmony import */ var _signature_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signature.service */ "../../libs/signature/src/lib/signature.service.ts");




var SignatureLeftPanelComponent = /** @class */ (function () {
    function SignatureLeftPanelComponent(_signatureService) {
        this._signatureService = _signatureService;
        this.newSignatureEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showNewCode = false;
        this.showUpload = false;
        this.loading = true;
    }
    SignatureLeftPanelComponent.prototype.getSignatures = function (tabId) {
        var _this = this;
        this._signatureService.getSignatures('', tabId).subscribe(function (signatures) {
            _this.signatures = signatures || [];
            _this.loading = false;
        });
    };
    SignatureLeftPanelComponent.prototype.ngOnInit = function () {
        this.init();
    };
    SignatureLeftPanelComponent.prototype.init = function () {
        this.loading = true;
        this.signatures = [];
        this.getSignatures(this.id);
        this.showNewCode = false;
        this.showUpload = false;
    };
    SignatureLeftPanelComponent.prototype.getTitleIcon = function () {
        return this.showUpload || this.showNewCode ? 'times' : 'plus';
    };
    SignatureLeftPanelComponent.prototype.getTitle = function () {
        if (!this.id) {
            return "";
        }
        var signatureType = _signature_models__WEBPACK_IMPORTED_MODULE_2__["SignatureType"].getSignatureType(this.id);
        return (this.showUpload || this.showNewCode) ? signatureType.title : signatureType.name;
    };
    SignatureLeftPanelComponent.prototype.getName = function () {
        if (!this.id) {
            return "";
        }
        var signatureType = _signature_models__WEBPACK_IMPORTED_MODULE_2__["SignatureType"].getSignatureType(this.id);
        return signatureType.name;
    };
    SignatureLeftPanelComponent.prototype.removeSignature = function ($event, type) {
        var _this = this;
        this._signatureService.removeSignatures($event, type).subscribe(function () { return _this.getSignatures(type); });
    };
    SignatureLeftPanelComponent.prototype.closeUploadPanel = function ($event) {
        this.showUpload = !$event;
        this.getSignatures(this.id);
    };
    SignatureLeftPanelComponent.prototype.closeCodePanel = function ($event) {
        this.showNewCode = !$event;
        this.getSignatures(this.id);
    };
    SignatureLeftPanelComponent.prototype.getCodeName = function () {
        if (!this.id) {
            return "";
        }
        return _signature_models__WEBPACK_IMPORTED_MODULE_2__["SignatureType"].QR_CODE.id === this.id ? 'Qr Code' : (_signature_models__WEBPACK_IMPORTED_MODULE_2__["SignatureType"].BAR_CODE.id === this.id ? 'Bar Code' : '');
    };
    SignatureLeftPanelComponent.prototype.icon = function () {
        if (!this.id) {
            return "";
        }
        return _signature_models__WEBPACK_IMPORTED_MODULE_2__["SignatureType"].getSignatureType(this.id).icon;
    };
    SignatureLeftPanelComponent.prototype.ngOnChanges = function (changes) {
        this.init();
    };
    SignatureLeftPanelComponent.prototype.closeNewSignature = function () {
        if (_signature_models__WEBPACK_IMPORTED_MODULE_2__["SignatureType"].DIGITAL.id === this.id || _signature_models__WEBPACK_IMPORTED_MODULE_2__["SignatureType"].IMAGE.id === this.id) {
            this.showUpload = false;
        }
        else if (_signature_models__WEBPACK_IMPORTED_MODULE_2__["SignatureType"].BAR_CODE.id === this.id || _signature_models__WEBPACK_IMPORTED_MODULE_2__["SignatureType"].QR_CODE.id === this.id) {
            this.showNewCode = false;
        }
    };
    SignatureLeftPanelComponent.prototype.openNewSignature = function () {
        if (this.showUpload || this.showNewCode) {
            return;
        }
        if (_signature_models__WEBPACK_IMPORTED_MODULE_2__["SignatureType"].DIGITAL.id === this.id || _signature_models__WEBPACK_IMPORTED_MODULE_2__["SignatureType"].IMAGE.id === this.id) {
            this.showUpload = true;
        }
        else if (_signature_models__WEBPACK_IMPORTED_MODULE_2__["SignatureType"].BAR_CODE.id === this.id || _signature_models__WEBPACK_IMPORTED_MODULE_2__["SignatureType"].QR_CODE.id === this.id) {
            this.showNewCode = true;
        }
        else {
            this.newSignatureEvent.emit(this.id);
        }
    };
    SignatureLeftPanelComponent.ctorParameters = function () { return [
        { type: _signature_service__WEBPACK_IMPORTED_MODULE_3__["SignatureService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SignatureLeftPanelComponent.prototype, "rewrite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SignatureLeftPanelComponent.prototype, "isPdf", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SignatureLeftPanelComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignatureLeftPanelComponent.prototype, "newSignatureEvent", void 0);
    SignatureLeftPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-signature-left-panel',
            template: __webpack_require__(/*! raw-loader!./signature-left-panel.component.html */ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/signature-left-panel/signature-left-panel.component.html"),
            styles: [__webpack_require__(/*! ./signature-left-panel.component.less */ "../../libs/signature/src/lib/signature-left-panel/signature-left-panel.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_signature_service__WEBPACK_IMPORTED_MODULE_3__["SignatureService"]])
    ], SignatureLeftPanelComponent);
    return SignatureLeftPanelComponent;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/signature-list-panel/signature-list-panel.component.less":
/*!**************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature-list-panel/signature-list-panel.component.less ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-signature-list-wrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: auto;\n  height: 100%;\n}\n.gd-signature-list-scroll {\n  display: block;\n  overflow-x: hidden;\n  overflow-y: auto !important;\n}\n.gd-signature-item {\n  width: 100%;\n  cursor: pointer;\n  position: relative;\n  min-height: 68px;\n  display: flex;\n  flex-direction: row;\n  background-color: rgba(255, 255, 255);\n}\n.gd-signature-item .icon {\n  font-size: 15px;\n  color: #676767;\n  cursor: pointer;\n}\n.gd-signature-item .gd-signature-trash-icon {\n  flex: 0 0 70px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.gd-signature-item .gd-signature-name {\n  max-width: 130px;\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.36);\n  cursor: pointer;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n  overflow: hidden;\n}\n.gd-signature-item .gd-signature-thumbnail {\n  flex: 0 0 70px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n}\n.gd-signature-item .gd-signature-thumbnail .icon {\n  font-size: 30px;\n  padding: 0;\n  margin: 0px;\n  opacity: 0.25;\n}\n.gd-signature-item .gd-signature-title {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding-left: 7px;\n}\n.gd-signature-item .gd-signature-thumbnail-text,\n.gd-signature-item .gd-signature-thumbnail-image,\n.gd-signature-item .gd-signature-thumbnail-hand {\n  max-width: 70px;\n  height: 41px;\n}\n.gd-signature-item .gd-signature-thumbnail-image {\n  min-width: 41px;\n  max-width: 70px;\n}\n.gd-signature-item .gd-signature-thumbnail-image {\n  min-width: 41px;\n  max-width: 70px;\n}\n.gd-signature-item .gd-signature-thumbnail-qrCode,\n.gd-signature-item .gd-signature-thumbnail-barCode {\n  max-width: 70px;\n  height: 44px;\n}\n.gd-signature-item .gd-signature-thumbnail-stamp {\n  max-width: 70px;\n  height: 48px;\n}\n.gd-signature-item .gd-signature-title.text {\n  padding-left: 16px;\n}\n.gd-signature-list {\n  display: flex;\n  flex-direction: column;\n  width: inherit;\n  background-color: #e7e7e7;\n}\n.gd-signature {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.75);\n  margin-bottom: 2px;\n}\n.gd-signature-empty-list {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  color: #ACACAC;\n  justify-content: center;\n  width: 350px;\n  height: 250px;\n}\n.gd-signature-empty-list .icon {\n  font-size: 60px;\n}\n.gd-signature-empty-list i {\n  font-size: 60px;\n  padding: 87px 97px 0px;\n}\n.gd-empty-list-text {\n  padding: 18px 38px 0px;\n  font-size: 12px;\n}\n.gd-digital-input-wrapper {\n  margin: 9px 8px 7px 8px;\n  display: flex;\n  border: 5px #DDD;\n}\n.gd-sign-digital {\n  height: 27px;\n  background-color: #969696;\n  margin: 9px 8px 7px 8px;\n  display: flex;\n  color: #ffffff;\n  font-size: 13px;\n  box-shadow: 0 0 3px #ddd;\n  cursor: pointer;\n  padding-top: 5px;\n  padding-left: 10px;\n}\n.digital-apply {\n  padding-left: 10px;\n}\n.gd-sign-digital.active {\n  background-color: #25c2d4;\n}\n.gd-digital-inputs input {\n  width: 100%;\n  height: 27px;\n  padding-left: 28px;\n}\n.gd-digital-inputs .icon {\n  position: absolute;\n  font-size: 12px;\n  margin: 7px 0px 7px 7px;\n  color: #ccc !important;\n}\n@media (max-width: 1037px) {\n  .gd-signature-thumbnail-text,\n  .gd-signature-thumbnail-image,\n  .gd-signature-thumbnail-hand {\n    margin: 0;\n  }\n  .gd-signature-thumbnail-image {\n    width: 44px;\n    height: 44px;\n  }\n  .gd-signature-item .gd-signature-name {\n    font-size: 13px;\n  }\n  .gd-signature-item .icon {\n    font-size: 15px;\n  }\n  .gd-signature-thumbnail-text,\n  .gd-signature-thumbnail-image,\n  .gd-signature-thumbnail-hand {\n    margin: 0;\n  }\n  .gd-signature-thumbnail-image {\n    width: 44px;\n    height: 44px;\n  }\n  .gd-signature-thumbnail-digital .icon {\n    font-size: 30px !important;\n  }\n  .gd-signature-thumbnail-digital .icon {\n    font-size: 30px !important;\n  }\n  .gd-digital-inputs .icon {\n    font-size: 13px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9zaWduYXR1cmUvc3JjL2xpYi9zaWduYXR1cmUtbGlzdC1wYW5lbC9zaWduYXR1cmUtbGlzdC1wYW5lbC5jb21wb25lbnQubGVzcyIsImxpYnMvc2lnbmF0dXJlL3NyYy9saWIvc2lnbmF0dXJlLWxpc3QtcGFuZWwvc2lnbmF0dXJlLWxpc3QtcGFuZWwuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNERjtBRElBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNGRjtBREtBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUNIRjtBREpBO0VBVUksZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDSEo7QURUQTtFQWdCSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNKSjtBRGZBO0VBdUJJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNMSjtBRHpCQTtFQWtDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDTko7QURoQ0E7RUF5Q00sZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ05OO0FEdENBO0VBaURJLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDUko7QUQ3Q0E7OztFQXlESSxlQUFBO0VBQ0EsWUFBQTtBQ1BKO0FEbkRBO0VBOERJLGVBQUE7RUFDQSxlQUFBO0FDUko7QUR2REE7RUFtRUksZUFBQTtFQUNBLGVBQUE7QUNUSjtBRDNEQTs7RUF3RUksZUFBQTtFQUNBLFlBQUE7QUNUSjtBRGhFQTtFQTZFSSxlQUFBO0VBQ0EsWUFBQTtBQ1ZKO0FEcEVBO0VBa0ZJLGtCQUFBO0FDWEo7QURlQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ2JGO0FEZ0JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUNkRjtBRGlCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNmRjtBRFFBO0VBVUksZUFBQTtBQ2ZKO0FEbUJBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FDakJGO0FEb0JBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FDbEJGO0FEcUJBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNuQkY7QURzQkE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNwQkY7QUR1QkE7RUFDRSxrQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLHlCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ3ZCRjtBRDBCQTtFQUVJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUN6Qko7QUQ2QkE7RUFDRTs7O0lBQ0UsU0FBQTtFQ3pCRjtFRDRCQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDMUJGO0VENkJBO0lBQ0UsZUFBQTtFQzNCRjtFRDhCQTtJQUNFLGVBQUE7RUM1QkY7RUQrQkE7OztJQUNFLFNBQUE7RUMzQkY7RUQ4QkE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQzVCRjtFRCtCQTtJQUNFLDBCQUFBO0VDN0JGO0VEZ0NBO0lBRUksMEJBQUE7RUMvQko7RURtQ0E7SUFFSSxlQUFBO0VDbENKO0FBQ0YiLCJmaWxlIjoibGlicy9zaWduYXR1cmUvc3JjL2xpYi9zaWduYXR1cmUtbGlzdC1wYW5lbC9zaWduYXR1cmUtbGlzdC1wYW5lbC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21tb24tY29tcG9uZW50cy9zcmMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4uZ2Qtc2lnbmF0dXJlLWxpc3Qtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5nZC1zaWduYXR1cmUtbGlzdC1zY3JvbGwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5nZC1zaWduYXR1cmUtaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNjhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1KTtcblxuICAuaWNvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjNjc2NzY3O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5nZC1zaWduYXR1cmUtdHJhc2gtaWNvbiB7XG4gICAgZmxleDogMCAwIDcwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmdkLXNpZ25hdHVyZS1uYW1lIHtcbiAgICBtYXgtd2lkdGg6IDEzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM2KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmdkLXNpZ25hdHVyZS10aHVtYm5haWwge1xuICAgIGZsZXg6IDAgMCA3MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogYXV0bztcblxuICAgIC5pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIG9wYWNpdHk6IDAuMjU7XG4gICAgfVxuICB9XG5cbiAgLmdkLXNpZ25hdHVyZS10aXRsZSB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmctbGVmdDogN3B4O1xuICB9XG5cbiAgLmdkLXNpZ25hdHVyZS10aHVtYm5haWwtdGV4dCwgLmdkLXNpZ25hdHVyZS10aHVtYm5haWwtaW1hZ2UsIC5nZC1zaWduYXR1cmUtdGh1bWJuYWlsLWhhbmQge1xuICAgIG1heC13aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDQxcHg7XG4gIH1cblxuICAuZ2Qtc2lnbmF0dXJlLXRodW1ibmFpbC1pbWFnZSB7XG4gICAgbWluLXdpZHRoOiA0MXB4O1xuICAgIG1heC13aWR0aDogNzBweDtcbiAgfVxuXG4gIC5nZC1zaWduYXR1cmUtdGh1bWJuYWlsLWltYWdlIHtcbiAgICBtaW4td2lkdGg6IDQxcHg7XG4gICAgbWF4LXdpZHRoOiA3MHB4O1xuICB9XG5cbiAgLmdkLXNpZ25hdHVyZS10aHVtYm5haWwtcXJDb2RlLCAuZ2Qtc2lnbmF0dXJlLXRodW1ibmFpbC1iYXJDb2RlIHtcbiAgICBtYXgtd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICB9XG5cbiAgLmdkLXNpZ25hdHVyZS10aHVtYm5haWwtc3RhbXAge1xuICAgIG1heC13aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gIH1cblxuICAuZ2Qtc2lnbmF0dXJlLXRpdGxlLnRleHQge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgfVxufVxuXG4uZ2Qtc2lnbmF0dXJlLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcbn1cblxuLmdkLXNpZ25hdHVyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5nZC1zaWduYXR1cmUtZW1wdHktbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNBQ0FDQUM7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG5cbiAgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgfVxufVxuXG4uZ2Qtc2lnbmF0dXJlLWVtcHR5LWxpc3QgaSB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgcGFkZGluZzogODdweCA5N3B4IDBweDtcbn1cblxuLmdkLWVtcHR5LWxpc3QtdGV4dCB7XG4gIHBhZGRpbmc6IDE4cHggMzhweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmdkLWRpZ2l0YWwtaW5wdXQtd3JhcHBlciB7XG4gIG1hcmdpbjogOXB4IDhweCA3cHggOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDVweCAjREREO1xufVxuXG4uZ2Qtc2lnbi1kaWdpdGFsIHtcbiAgaGVpZ2h0OiAyN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTY5Njk2O1xuICBtYXJnaW46IDlweCA4cHggN3B4IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm94LXNoYWRvdzogMCAwIDNweCAjZGRkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmRpZ2l0YWwtYXBwbHkge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5nZC1zaWduLWRpZ2l0YWwuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogQG5hdi1sb2dvLWJhY2tncm91bmQ7XG59XG5cbi5nZC1kaWdpdGFsLWlucHV0cyBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI3cHg7XG4gIHBhZGRpbmctbGVmdDogMjhweDtcbn1cblxuLmdkLWRpZ2l0YWwtaW5wdXRzIHtcbiAgLmljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiA3cHggMHB4IDdweCA3cHg7XG4gICAgY29sb3I6ICNjY2MgIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgQHBob25lLWRvd24ge1xuICAuZ2Qtc2lnbmF0dXJlLXRodW1ibmFpbC10ZXh0LCAuZ2Qtc2lnbmF0dXJlLXRodW1ibmFpbC1pbWFnZSwgLmdkLXNpZ25hdHVyZS10aHVtYm5haWwtaGFuZCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmdkLXNpZ25hdHVyZS10aHVtYm5haWwtaW1hZ2Uge1xuICAgIHdpZHRoOiA0NHB4O1xuICAgIGhlaWdodDogNDRweDtcbiAgfVxuXG4gIC5nZC1zaWduYXR1cmUtaXRlbSAuZ2Qtc2lnbmF0dXJlLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIC5nZC1zaWduYXR1cmUtaXRlbSAuaWNvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG5cbiAgLmdkLXNpZ25hdHVyZS10aHVtYm5haWwtdGV4dCwgLmdkLXNpZ25hdHVyZS10aHVtYm5haWwtaW1hZ2UsIC5nZC1zaWduYXR1cmUtdGh1bWJuYWlsLWhhbmQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5nZC1zaWduYXR1cmUtdGh1bWJuYWlsLWltYWdlIHtcbiAgICB3aWR0aDogNDRweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gIH1cblxuICAuZ2Qtc2lnbmF0dXJlLXRodW1ibmFpbC1kaWdpdGFsIC5pY29uIHtcbiAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5nZC1zaWduYXR1cmUtdGh1bWJuYWlsLWRpZ2l0YWwge1xuICAgIC5pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5nZC1kaWdpdGFsLWlucHV0cyB7XG4gICAgLmljb24ge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgfVxuXG59XG4iLCIuZ2Qtc2lnbmF0dXJlLWxpc3Qtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZ2Qtc2lnbmF0dXJlLWxpc3Qtc2Nyb2xsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xufVxuLmdkLXNpZ25hdHVyZS1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiA2OHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUpO1xufVxuLmdkLXNpZ25hdHVyZS1pdGVtIC5pY29uIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzY3Njc2NztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmdkLXNpZ25hdHVyZS1pdGVtIC5nZC1zaWduYXR1cmUtdHJhc2gtaWNvbiB7XG4gIGZsZXg6IDAgMCA3MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5nZC1zaWduYXR1cmUtaXRlbSAuZ2Qtc2lnbmF0dXJlLW5hbWUge1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzYpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5nZC1zaWduYXR1cmUtaXRlbSAuZ2Qtc2lnbmF0dXJlLXRodW1ibmFpbCB7XG4gIGZsZXg6IDAgMCA3MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IGF1dG87XG59XG4uZ2Qtc2lnbmF0dXJlLWl0ZW0gLmdkLXNpZ25hdHVyZS10aHVtYm5haWwgLmljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMHB4O1xuICBvcGFjaXR5OiAwLjI1O1xufVxuLmdkLXNpZ25hdHVyZS1pdGVtIC5nZC1zaWduYXR1cmUtdGl0bGUge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xufVxuLmdkLXNpZ25hdHVyZS1pdGVtIC5nZC1zaWduYXR1cmUtdGh1bWJuYWlsLXRleHQsXG4uZ2Qtc2lnbmF0dXJlLWl0ZW0gLmdkLXNpZ25hdHVyZS10aHVtYm5haWwtaW1hZ2UsXG4uZ2Qtc2lnbmF0dXJlLWl0ZW0gLmdkLXNpZ25hdHVyZS10aHVtYm5haWwtaGFuZCB7XG4gIG1heC13aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA0MXB4O1xufVxuLmdkLXNpZ25hdHVyZS1pdGVtIC5nZC1zaWduYXR1cmUtdGh1bWJuYWlsLWltYWdlIHtcbiAgbWluLXdpZHRoOiA0MXB4O1xuICBtYXgtd2lkdGg6IDcwcHg7XG59XG4uZ2Qtc2lnbmF0dXJlLWl0ZW0gLmdkLXNpZ25hdHVyZS10aHVtYm5haWwtaW1hZ2Uge1xuICBtaW4td2lkdGg6IDQxcHg7XG4gIG1heC13aWR0aDogNzBweDtcbn1cbi5nZC1zaWduYXR1cmUtaXRlbSAuZ2Qtc2lnbmF0dXJlLXRodW1ibmFpbC1xckNvZGUsXG4uZ2Qtc2lnbmF0dXJlLWl0ZW0gLmdkLXNpZ25hdHVyZS10aHVtYm5haWwtYmFyQ29kZSB7XG4gIG1heC13aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuLmdkLXNpZ25hdHVyZS1pdGVtIC5nZC1zaWduYXR1cmUtdGh1bWJuYWlsLXN0YW1wIHtcbiAgbWF4LXdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4uZ2Qtc2lnbmF0dXJlLWl0ZW0gLmdkLXNpZ25hdHVyZS10aXRsZS50ZXh0IHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLmdkLXNpZ25hdHVyZS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XG59XG4uZ2Qtc2lnbmF0dXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbi5nZC1zaWduYXR1cmUtZW1wdHktbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNBQ0FDQUM7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG59XG4uZ2Qtc2lnbmF0dXJlLWVtcHR5LWxpc3QgLmljb24ge1xuICBmb250LXNpemU6IDYwcHg7XG59XG4uZ2Qtc2lnbmF0dXJlLWVtcHR5LWxpc3QgaSB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgcGFkZGluZzogODdweCA5N3B4IDBweDtcbn1cbi5nZC1lbXB0eS1saXN0LXRleHQge1xuICBwYWRkaW5nOiAxOHB4IDM4cHggMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uZ2QtZGlnaXRhbC1pbnB1dC13cmFwcGVyIHtcbiAgbWFyZ2luOiA5cHggOHB4IDdweCA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogNXB4ICNEREQ7XG59XG4uZ2Qtc2lnbi1kaWdpdGFsIHtcbiAgaGVpZ2h0OiAyN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTY5Njk2O1xuICBtYXJnaW46IDlweCA4cHggN3B4IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm94LXNoYWRvdzogMCAwIDNweCAjZGRkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5kaWdpdGFsLWFwcGx5IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmdkLXNpZ24tZGlnaXRhbC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjVjMmQ0O1xufVxuLmdkLWRpZ2l0YWwtaW5wdXRzIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjdweDtcbiAgcGFkZGluZy1sZWZ0OiAyOHB4O1xufVxuLmdkLWRpZ2l0YWwtaW5wdXRzIC5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogN3B4IDBweCA3cHggN3B4O1xuICBjb2xvcjogI2NjYyAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzdweCkge1xuICAuZ2Qtc2lnbmF0dXJlLXRodW1ibmFpbC10ZXh0LFxuICAuZ2Qtc2lnbmF0dXJlLXRodW1ibmFpbC1pbWFnZSxcbiAgLmdkLXNpZ25hdHVyZS10aHVtYm5haWwtaGFuZCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5nZC1zaWduYXR1cmUtdGh1bWJuYWlsLWltYWdlIHtcbiAgICB3aWR0aDogNDRweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gIH1cbiAgLmdkLXNpZ25hdHVyZS1pdGVtIC5nZC1zaWduYXR1cmUtbmFtZSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC5nZC1zaWduYXR1cmUtaXRlbSAuaWNvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5nZC1zaWduYXR1cmUtdGh1bWJuYWlsLXRleHQsXG4gIC5nZC1zaWduYXR1cmUtdGh1bWJuYWlsLWltYWdlLFxuICAuZ2Qtc2lnbmF0dXJlLXRodW1ibmFpbC1oYW5kIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmdkLXNpZ25hdHVyZS10aHVtYm5haWwtaW1hZ2Uge1xuICAgIHdpZHRoOiA0NHB4O1xuICAgIGhlaWdodDogNDRweDtcbiAgfVxuICAuZ2Qtc2lnbmF0dXJlLXRodW1ibmFpbC1kaWdpdGFsIC5pY29uIHtcbiAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbiAgfVxuICAuZ2Qtc2lnbmF0dXJlLXRodW1ibmFpbC1kaWdpdGFsIC5pY29uIHtcbiAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbiAgfVxuICAuZ2QtZGlnaXRhbC1pbnB1dHMgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "../../libs/signature/src/lib/signature-list-panel/signature-list-panel.component.ts":
/*!************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature-list-panel/signature-list-panel.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: SignatureListPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureListPanelComponent", function() { return SignatureListPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/signature/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signature_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signature-models */ "../../libs/signature/src/lib/signature-models.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _select_signature_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../select-signature.service */ "../../libs/signature/src/lib/select-signature.service.ts");
/* harmony import */ var _drag_signature_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../drag-signature.service */ "../../libs/signature/src/lib/drag-signature.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signatures_holder_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../signatures-holder.service */ "../../libs/signature/src/lib/signatures-holder.service.ts");








var SignatureListPanelComponent = /** @class */ (function () {
    function SignatureListPanelComponent(_navigateService, _selectSignatureService, _dragSignatureService, _datePipe, _signaturesHolderService) {
        this._navigateService = _navigateService;
        this._selectSignatureService = _selectSignatureService;
        this._dragSignatureService = _dragSignatureService;
        this._datePipe = _datePipe;
        this._signaturesHolderService = _signaturesHolderService;
        this.removeSignatureEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showDigitalInputs = false;
        this.digitalProps = new _signature_models__WEBPACK_IMPORTED_MODULE_2__["DigitalSign"]();
        this.digitalProps.date = this._datePipe.transform(new Date(), 'dd-MM-yyyy');
    }
    SignatureListPanelComponent.prototype.ngOnInit = function () {
    };
    SignatureListPanelComponent.prototype.getImage = function (data) {
        var dataImagePngBase64 = 'data:image/png;base64,';
        return dataImagePngBase64 + data;
    };
    SignatureListPanelComponent.prototype.deleteSign = function (guid) {
        this.removeSignatureEvent.emit(guid);
    };
    SignatureListPanelComponent.prototype.isDigital = function () {
        return _signature_models__WEBPACK_IMPORTED_MODULE_2__["SignatureType"].DIGITAL.id === this.signatureType;
    };
    SignatureListPanelComponent.prototype.selectSignature = function (sign) {
        this._selectSignatureService.select(sign);
    };
    SignatureListPanelComponent.prototype.getSign = function (guid) {
        var sign = new _signature_models__WEBPACK_IMPORTED_MODULE_2__["DraggableSignature"]();
        sign.type = this.signatureType;
        sign.guid = guid;
        sign.position = new _signature_models__WEBPACK_IMPORTED_MODULE_2__["Position"](0, 0);
        sign.pageNumber = this._navigateService.currentPage;
        return sign;
    };
    SignatureListPanelComponent.prototype.select = function (guid) {
        if (this.signatureType === _signature_models__WEBPACK_IMPORTED_MODULE_2__["SignatureType"].DIGITAL.id) {
            this.showDigitalInputs = this.digitalId !== guid;
            this.digitalId = this.digitalId === guid ? null : guid;
        }
        else {
            var sign = this.getSign(guid);
            this.selectSignature(sign);
        }
    };
    SignatureListPanelComponent.prototype.dragOver = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
    };
    SignatureListPanelComponent.prototype.dragLeave = function ($event, guid) {
        this._dragSignatureService.sign = this.getSign(guid);
    };
    SignatureListPanelComponent.prototype.selectDigital = function (guid) {
        if (!this.isActive(guid)) {
            return;
        }
        var sign = this.getSign(guid);
        sign.digitalProps = this.digitalProps;
        this.selectSignature(sign);
    };
    SignatureListPanelComponent.prototype.parseDate = function (value) {
        return this._datePipe.transform(value, 'dd-MM-yyyy');
    };
    SignatureListPanelComponent.prototype.isActive = function (guid) {
        return !this._signaturesHolderService.has(guid);
    };
    SignatureListPanelComponent.prototype.dragStart = function ($event) {
        $event.dataTransfer.setData('text', 'foo');
    };
    SignatureListPanelComponent.prototype.empty = function () {
        return !this.loading && (!this.signatures || this.signatures.length === 0);
    };
    SignatureListPanelComponent.prototype.ngOnChanges = function (changes) {
        if (this.showDigitalInputs) {
            this.showDigitalInputs = this.signatureType === _signature_models__WEBPACK_IMPORTED_MODULE_2__["SignatureType"].DIGITAL.id;
        }
    };
    SignatureListPanelComponent.ctorParameters = function () { return [
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["NavigateService"] },
        { type: _select_signature_service__WEBPACK_IMPORTED_MODULE_4__["SelectSignatureService"] },
        { type: _drag_signature_service__WEBPACK_IMPORTED_MODULE_5__["DragSignatureService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
        { type: _signatures_holder_service__WEBPACK_IMPORTED_MODULE_7__["SignaturesHolderService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SignatureListPanelComponent.prototype, "signatures", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SignatureListPanelComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SignatureListPanelComponent.prototype, "signatureType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SignatureListPanelComponent.prototype, "isPdf", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SignatureListPanelComponent.prototype, "loading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignatureListPanelComponent.prototype, "removeSignatureEvent", void 0);
    SignatureListPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-signature-list-panel',
            template: __webpack_require__(/*! raw-loader!./signature-list-panel.component.html */ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/signature-list-panel/signature-list-panel.component.html"),
            styles: [__webpack_require__(/*! ./signature-list-panel.component.less */ "../../libs/signature/src/lib/signature-list-panel/signature-list-panel.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["NavigateService"],
            _select_signature_service__WEBPACK_IMPORTED_MODULE_4__["SelectSignatureService"],
            _drag_signature_service__WEBPACK_IMPORTED_MODULE_5__["DragSignatureService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
            _signatures_holder_service__WEBPACK_IMPORTED_MODULE_7__["SignaturesHolderService"]])
    ], SignatureListPanelComponent);
    return SignatureListPanelComponent;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/signature-models.ts":
/*!*************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature-models.ts ***!
  \*************************************************************************************************/
/*! exports provided: Signature, SignatureType, FileListWithParams, OpticalCodeModel, DraggableSignature, Position, SignatureData, DigitalSign, AddedSignature, SignatureProps, RemoveSign, CopySign, CopyChanges, StampCanvasProps, Border, Downloads */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signature", function() { return Signature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureType", function() { return SignatureType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileListWithParams", function() { return FileListWithParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpticalCodeModel", function() { return OpticalCodeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableSignature", function() { return DraggableSignature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureData", function() { return SignatureData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalSign", function() { return DigitalSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddedSignature", function() { return AddedSignature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureProps", function() { return SignatureProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveSign", function() { return RemoveSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopySign", function() { return CopySign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyChanges", function() { return CopyChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StampCanvasProps", function() { return StampCanvasProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Border", function() { return Border; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Downloads", function() { return Downloads; });
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");

var Signature = /** @class */ (function () {
    function Signature() {
    }
    return Signature;
}());

var SignatureType = /** @class */ (function () {
    function SignatureType() {
    }
    SignatureType.getSignatureType = function (id) {
        switch (id) {
            case SignatureType.TEXT.id:
                return SignatureType.TEXT;
            case SignatureType.IMAGE.id:
                return SignatureType.IMAGE;
            case SignatureType.DIGITAL.id:
                return SignatureType.DIGITAL;
            case SignatureType.QR_CODE.id:
                return SignatureType.QR_CODE;
            case SignatureType.BAR_CODE.id:
                return SignatureType.BAR_CODE;
            case SignatureType.STAMP.id:
                return SignatureType.STAMP;
            case SignatureType.HAND.id:
                return SignatureType.HAND;
        }
    };
    SignatureType.TEXT = { id: 'text', name: 'Text signatures', icon: 'font', title: '' };
    SignatureType.IMAGE = { id: 'image', name: 'Uploaded Images', icon: 'image', title: 'Add image signature' };
    SignatureType.QR_CODE = { id: 'qrCode', name: 'QR codes', icon: 'qrcode', title: 'New QR code' };
    SignatureType.BAR_CODE = { id: 'barCode', name: 'Bar codes', icon: 'barcode', title: 'New Bar code' };
    SignatureType.DIGITAL = {
        id: 'digital',
        name: 'Digital signatures',
        icon: 'fingerprint',
        title: 'New digital signature'
    };
    SignatureType.STAMP = { id: 'stamp', name: 'Stamps', icon: 'stamp', title: '' };
    SignatureType.HAND = { id: 'hand', name: 'Signatures', icon: 'signature', title: '' };
    return SignatureType;
}());

var FileListWithParams = /** @class */ (function () {
    function FileListWithParams(fileList, signType) {
        this.fileList = fileList;
        this.signType = signType;
    }
    FileListWithParams.ctorParameters = function () { return [
        { type: FileList },
        { type: String }
    ]; };
    return FileListWithParams;
}());

var OpticalCodeModel = /** @class */ (function () {
    function OpticalCodeModel() {
    }
    return OpticalCodeModel;
}());

var DraggableSignature = /** @class */ (function () {
    function DraggableSignature() {
    }
    DraggableSignature.TEMP = "temp";
    return DraggableSignature;
}());

var Position = /** @class */ (function () {
    function Position(left, top) {
        this.left = left;
        this.top = top;
    }
    Position.ctorParameters = function () { return [
        { type: Number },
        { type: Number }
    ]; };
    return Position;
}());

var SignatureData = /** @class */ (function () {
    function SignatureData() {
    }
    SignatureData.map = function (data, type, position) {
        var ret = new SignatureData();
        ret.signatureType = type;
        ret.pageNumber = data.number;
        ret.left = position.left;
        ret.top = position.top;
        ret.signatureGuid = data.guid;
        if (data.props && data.props.width && data.props.height) {
            ret.imageWidth = data.props.width;
            ret.imageHeight = data.props.height;
        }
        else {
            ret.imageWidth = data.width;
            ret.imageHeight = data.height;
        }
        if (data.digitalProps) {
            ret.reason = data.digitalProps.reason;
            ret.contact = data.digitalProps.contact;
            ret.address = data.digitalProps.address;
            ret.signaturePassword = data.digitalProps.signaturePassword;
            ret.date = data.digitalProps.date;
        }
        return ret;
    };
    return SignatureData;
}());

var DigitalSign = /** @class */ (function () {
    function DigitalSign() {
    }
    return DigitalSign;
}());

var AddedSignature = /** @class */ (function () {
    function AddedSignature() {
        this.height = 0;
        this.width = 0;
    }
    return AddedSignature;
}());

var SignatureProps = /** @class */ (function () {
    function SignatureProps() {
    }
    SignatureProps.getDefault = function () {
        var props = new SignatureProps();
        props.text = "";
        var f = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_0__["Formatting"].default();
        props.fontColor = f.color;
        props.font = f.font;
        props.fontSize = f.fontSize;
        props.underline = f.underline;
        props.bold = f.bold;
        props.italic = f.italic;
        return props;
    };
    return SignatureProps;
}());

var RemoveSign = /** @class */ (function () {
    function RemoveSign() {
    }
    return RemoveSign;
}());

var CopySign = /** @class */ (function () {
    function CopySign() {
    }
    return CopySign;
}());

var CopyChanges = /** @class */ (function () {
    function CopyChanges() {
    }
    return CopyChanges;
}());

var StampCanvasProps = /** @class */ (function () {
    function StampCanvasProps() {
        this.textExpansion = 0.173;
        this.textRepeat = 1;
    }
    StampCanvasProps.prototype.init = function (isMobile) {
        this.text = "";
        this.width = isMobile ? 103 : 153;
        this.height = isMobile ? 103 : 153;
        this.zIndex = 10;
        this.backgroundColor = "rgb(255, 255, 255)";
        this.strokeColor = "rgb(51, 51, 51)";
        this.strokeWidth = 1;
        this.fontSize = 19;
        this.font = "Arial";
        this.textColor = "rgb(51, 51, 51)";
        this.radius = 76.5;
        this.bold = false;
        this.italic = false;
        this.underline = false;
        return this;
    };
    return StampCanvasProps;
}());

var Border = /** @class */ (function () {
    function Border() {
    }
    Border.widthOptions = function () {
        var ret = [];
        for (var i = 1; i <= 10; i++) {
            ret.push(this.widthOption(i));
        }
        return ret;
    };
    Border.widthOption = function (width) {
        return { value: width, name: width + 'px', separator: false };
    };
    return Border;
}());

var Downloads = /** @class */ (function () {
    function Downloads() {
    }
    Downloads.original = 'original';
    Downloads.signed = 'signed';
    return Downloads;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/signature-tab-activator.service.ts":
/*!****************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature-tab-activator.service.ts ***!
  \****************************************************************************************************************/
/*! exports provided: SignatureTabActivatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureTabActivatorService", function() { return SignatureTabActivatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/signature/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");


var SignatureTabActivatorService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SignatureTabActivatorService, _super);
    function SignatureTabActivatorService() {
        return _super.call(this) || this;
    }
    return SignatureTabActivatorService;
}(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_1__["TabActivatorService"]));



/***/ }),

/***/ "../../libs/signature/src/lib/signature-tab/signature-tab.component.less":
/*!************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature-tab/signature-tab.component.less ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-tab {\n  font-size: 14px;\n  color: #3E4E5A;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 36px;\n  height: 36px;\n  text-align: center;\n  position: relative;\n  white-space: nowrap;\n  padding: 0 !important;\n  margin: 0 10px;\n}\n.gd-tab.active {\n  background-color: #ACACAC;\n  color: #FFFFFF !important;\n  font-weight: bold;\n}\n.gd-tab ::ng-deep .tooltip {\n  font-size: 12px;\n  margin: 20px -57px;\n}\n.gd-tab .title {\n  margin: auto 23px;\n}\n@media (max-width: 1037px) {\n  .gd-tab {\n    font-size: 20px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9zaWduYXR1cmUvc3JjL2xpYi9zaWduYXR1cmUtdGFiL3NpZ25hdHVyZS10YWIuY29tcG9uZW50Lmxlc3MiLCJsaWJzL3NpZ25hdHVyZS9zcmMvbGliL3NpZ25hdHVyZS10YWIvc2lnbmF0dXJlLXRhYi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNERjtBREdFO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDREo7QURqQkE7RUFzQkksZUFBQTtFQUNBLGtCQUFBO0FDRko7QURyQkE7RUEyQkksaUJBQUE7QUNISjtBRE9BO0VBQ0U7SUFDRSxlQUFBO0VDTEY7QUFDRiIsImZpbGUiOiJsaWJzL3NpZ25hdHVyZS9zcmMvbGliL3NpZ25hdHVyZS10YWIvc2lnbmF0dXJlLXRhYi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21tb24tY29tcG9uZW50cy9zcmMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4uZ2QtdGFiIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogQHByaW1hcnk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgMTBweDtcblxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FDQUNBQztcbiAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgOjpuZy1kZWVwIC50b29sdGlwIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiAyMHB4IC01N3B4O1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBtYXJnaW46IGF1dG8gMjNweDtcbiAgfVxufVxuXG5AbWVkaWEgQHBob25lLWRvd24ge1xuICAuZ2QtdGFiIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbiIsIi5nZC10YWIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjM0U0RTVBO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4td2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uZ2QtdGFiLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQ0FDQUM7XG4gIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmdkLXRhYiA6Om5nLWRlZXAgLnRvb2x0aXAge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMjBweCAtNTdweDtcbn1cbi5nZC10YWIgLnRpdGxlIHtcbiAgbWFyZ2luOiBhdXRvIDIzcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAzN3B4KSB7XG4gIC5nZC10YWIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "../../libs/signature/src/lib/signature-tab/signature-tab.component.ts":
/*!**********************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature-tab/signature-tab.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: SignatureTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureTabComponent", function() { return SignatureTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/signature/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _signature_tab_activator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signature-tab-activator.service */ "../../libs/signature/src/lib/signature-tab-activator.service.ts");




var SignatureTabComponent = /** @class */ (function () {
    function SignatureTabComponent(_tabActivatorService, _modalService, _excMessageService) {
        var _this = this;
        this._tabActivatorService = _tabActivatorService;
        this._modalService = _modalService;
        this._excMessageService = _excMessageService;
        this.disabled = false;
        this.activeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.active = false;
        this.showToolTip = false;
        this._tabActivatorService.activeTabChange.subscribe(function (tabId) {
            _this.activation(tabId);
        });
    }
    SignatureTabComponent.prototype.activation = function (tabId) {
        if (this.id === tabId) {
            this.active = !this.active;
            if (this.active) {
                this.activeTab.emit(this.id);
            }
            else {
                this.activeTab.emit("");
            }
        }
        else {
            this.active = false;
        }
    };
    SignatureTabComponent.prototype.ngOnInit = function () {
    };
    SignatureTabComponent.prototype.toggleTab = function () {
        if (this.disabled) {
            this._modalService.open(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["CommonModals"].ErrorMessage);
            this._excMessageService.changeMessage("Please open document first");
            return;
        }
        this._tabActivatorService.changeActiveTab(this.id);
    };
    SignatureTabComponent.ctorParameters = function () { return [
        { type: _signature_tab_activator_service__WEBPACK_IMPORTED_MODULE_3__["SignatureTabActivatorService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ModalService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ExceptionMessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SignatureTabComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SignatureTabComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignatureTabComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SignatureTabComponent.prototype, "tooltip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignatureTabComponent.prototype, "activeTab", void 0);
    SignatureTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-signature-tab',
            template: __webpack_require__(/*! raw-loader!./signature-tab.component.html */ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/signature-tab/signature-tab.component.html"),
            styles: [__webpack_require__(/*! ./signature-tab.component.less */ "../../libs/signature/src/lib/signature-tab/signature-tab.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_signature_tab_activator_service__WEBPACK_IMPORTED_MODULE_3__["SignatureTabActivatorService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ModalService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ExceptionMessageService"]])
    ], SignatureTabComponent);
    return SignatureTabComponent;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/signature.module.ts":
/*!*************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: initializeApp, setupLoadingInterceptor, SignatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return initializeApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupLoadingInterceptor", function() { return setupLoadingInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureModule", function() { return SignatureModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/signature/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _signature_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signature.service */ "../../libs/signature/src/lib/signature.service.ts");
/* harmony import */ var _signature_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signature-config.service */ "../../libs/signature/src/lib/signature-config.service.ts");
/* harmony import */ var _signature_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signature-app.component */ "../../libs/signature/src/lib/signature-app.component.ts");
/* harmony import */ var _signature_list_panel_signature_list_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signature-list-panel/signature-list-panel.component */ "../../libs/signature/src/lib/signature-list-panel/signature-list-panel.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../libs/signature/node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "../../libs/signature/node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../libs/signature/node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "../../libs/signature/node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _signature_tab_signature_tab_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./signature-tab/signature-tab.component */ "../../libs/signature/src/lib/signature-tab/signature-tab.component.ts");
/* harmony import */ var _new_bar_qr_code_new_bar_qr_code_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./new-bar-qr-code/new-bar-qr-code.component */ "../../libs/signature/src/lib/new-bar-qr-code/new-bar-qr-code.component.ts");
/* harmony import */ var _upload_signature_upload_signature_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./upload-signature/upload-signature.component */ "../../libs/signature/src/lib/upload-signature/upload-signature.component.ts");
/* harmony import */ var _dnd_signature_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dnd-signature.directive */ "../../libs/signature/src/lib/dnd-signature.directive.ts");
/* harmony import */ var _signature_signature_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./signature/signature.component */ "../../libs/signature/src/lib/signature/signature.component.ts");
/* harmony import */ var _context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./context-menu/context-menu.component */ "../../libs/signature/src/lib/context-menu/context-menu.component.ts");
/* harmony import */ var _select_signature_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./select-signature.service */ "../../libs/signature/src/lib/select-signature.service.ts");
/* harmony import */ var _drag_signature_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./drag-signature.service */ "../../libs/signature/src/lib/drag-signature.service.ts");
/* harmony import */ var _remove_signature_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./remove-signature.service */ "../../libs/signature/src/lib/remove-signature.service.ts");
/* harmony import */ var _active_signature_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./active-signature.service */ "../../libs/signature/src/lib/active-signature.service.ts");
/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./canvas/canvas.component */ "../../libs/signature/src/lib/canvas/canvas.component.ts");
/* harmony import */ var _stamp_canvas_stamp_canvas_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./stamp-canvas/stamp-canvas.component */ "../../libs/signature/src/lib/stamp-canvas/stamp-canvas.component.ts");
/* harmony import */ var _active_canvas_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./active-canvas.service */ "../../libs/signature/src/lib/active-canvas.service.ts");
/* harmony import */ var _remove_canvas_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./remove-canvas.service */ "../../libs/signature/src/lib/remove-canvas.service.ts");
/* harmony import */ var _text_menu_text_menu_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./text-menu/text-menu.component */ "../../libs/signature/src/lib/text-menu/text-menu.component.ts");
/* harmony import */ var _signatures_holder_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./signatures-holder.service */ "../../libs/signature/src/lib/signatures-holder.service.ts");
/* harmony import */ var _signature_tab_activator_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./signature-tab-activator.service */ "../../libs/signature/src/lib/signature-tab-activator.service.ts");
/* harmony import */ var _signature_left_panel_signature_left_panel_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./signature-left-panel/signature-left-panel.component */ "../../libs/signature/src/lib/signature-left-panel/signature-left-panel.component.ts");
/* harmony import */ var _hand_modal_hand_modal_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./hand-modal/hand-modal.component */ "../../libs/signature/src/lib/hand-modal/hand-modal.component.ts");
/* harmony import */ var _stamp_modal_stamp_modal_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./stamp-modal/stamp-modal.component */ "../../libs/signature/src/lib/stamp-modal/stamp-modal.component.ts");
/* harmony import */ var _copy_signature_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./copy-signature.service */ "../../libs/signature/src/lib/copy-signature.service.ts");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-click-outside */ "../../libs/signature/node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_34__);



































function initializeApp(signatureConfigService) {
    var result = function () { return signatureConfigService.load(); };
    return result;
}
// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
function setupLoadingInterceptor(service) {
    return new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["LoadingMaskInterceptorService"](service);
}
var SignatureModule = /** @class */ (function () {
    function SignatureModule() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_12__["far"]);
    }
    SignatureModule_1 = SignatureModule;
    SignatureModule.forRoot = function (apiEndpoint) {
        _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: SignatureModule_1
        };
    };
    var SignatureModule_1;
    SignatureModule = SignatureModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_signature_app_component__WEBPACK_IMPORTED_MODULE_7__["SignatureAppComponent"],
                _signature_list_panel_signature_list_panel_component__WEBPACK_IMPORTED_MODULE_8__["SignatureListPanelComponent"],
                _signature_tab_signature_tab_component__WEBPACK_IMPORTED_MODULE_13__["SignatureTabComponent"],
                _new_bar_qr_code_new_bar_qr_code_component__WEBPACK_IMPORTED_MODULE_14__["NewBarQrCodeComponent"],
                _upload_signature_upload_signature_component__WEBPACK_IMPORTED_MODULE_15__["UploadSignatureComponent"],
                _dnd_signature_directive__WEBPACK_IMPORTED_MODULE_16__["DndSignatureDirective"],
                _signature_signature_component__WEBPACK_IMPORTED_MODULE_17__["Signature"],
                _context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_18__["ContextMenuComponent"],
                _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_23__["CanvasComponent"],
                _stamp_canvas_stamp_canvas_component__WEBPACK_IMPORTED_MODULE_24__["StampCanvasComponent"],
                _text_menu_text_menu_component__WEBPACK_IMPORTED_MODULE_27__["TextMenuComponent"],
                _signature_left_panel_signature_left_panel_component__WEBPACK_IMPORTED_MODULE_30__["SignatureLeftPanelComponent"],
                _hand_modal_hand_modal_component__WEBPACK_IMPORTED_MODULE_31__["HandModalComponent"],
                _stamp_modal_stamp_modal_component__WEBPACK_IMPORTED_MODULE_32__["StampModalComponent"]],
            exports: [_signature_app_component__WEBPACK_IMPORTED_MODULE_7__["SignatureAppComponent"],
                _signature_list_panel_signature_list_panel_component__WEBPACK_IMPORTED_MODULE_8__["SignatureListPanelComponent"],
                _signature_tab_signature_tab_component__WEBPACK_IMPORTED_MODULE_13__["SignatureTabComponent"],
                _new_bar_qr_code_new_bar_qr_code_component__WEBPACK_IMPORTED_MODULE_14__["NewBarQrCodeComponent"],
                _upload_signature_upload_signature_component__WEBPACK_IMPORTED_MODULE_15__["UploadSignatureComponent"],
                _dnd_signature_directive__WEBPACK_IMPORTED_MODULE_16__["DndSignatureDirective"],
                _signature_signature_component__WEBPACK_IMPORTED_MODULE_17__["Signature"],
                _context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_18__["ContextMenuComponent"],
                _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_23__["CanvasComponent"],
                _stamp_canvas_stamp_canvas_component__WEBPACK_IMPORTED_MODULE_24__["StampCanvasComponent"],
                _text_menu_text_menu_component__WEBPACK_IMPORTED_MODULE_27__["TextMenuComponent"],
                _signature_left_panel_signature_left_panel_component__WEBPACK_IMPORTED_MODULE_30__["SignatureLeftPanelComponent"],
                _hand_modal_hand_modal_component__WEBPACK_IMPORTED_MODULE_31__["HandModalComponent"],
                _stamp_modal_stamp_modal_component__WEBPACK_IMPORTED_MODULE_32__["StampModalComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_34__["ClickOutsideModule"]],
            providers: [
                _signature_service__WEBPACK_IMPORTED_MODULE_5__["SignatureService"],
                _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
                _signature_config_service__WEBPACK_IMPORTED_MODULE_6__["SignatureConfigService"],
                _select_signature_service__WEBPACK_IMPORTED_MODULE_19__["SelectSignatureService"],
                _drag_signature_service__WEBPACK_IMPORTED_MODULE_20__["DragSignatureService"],
                _remove_signature_service__WEBPACK_IMPORTED_MODULE_21__["RemoveSignatureService"],
                _active_signature_service__WEBPACK_IMPORTED_MODULE_22__["ActiveSignatureService"],
                _active_canvas_service__WEBPACK_IMPORTED_MODULE_25__["ActiveCanvasService"],
                _remove_canvas_service__WEBPACK_IMPORTED_MODULE_26__["RemoveCanvasService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
                _signatures_holder_service__WEBPACK_IMPORTED_MODULE_28__["SignaturesHolderService"],
                _signature_tab_activator_service__WEBPACK_IMPORTED_MODULE_29__["SignatureTabActivatorService"],
                _copy_signature_service__WEBPACK_IMPORTED_MODULE_33__["CopySignatureService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ErrorInterceptorService"],
                    multi: true
                },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    useFactory: initializeApp,
                    deps: [_signature_config_service__WEBPACK_IMPORTED_MODULE_6__["SignatureConfigService"]], multi: true
                },
                _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["LoadingMaskService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useFactory: setupLoadingInterceptor,
                    multi: true,
                    deps: [_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["LoadingMaskService"]]
                }
            ],
            entryComponents: [
                _signature_signature_component__WEBPACK_IMPORTED_MODULE_17__["Signature"],
                _stamp_canvas_stamp_canvas_component__WEBPACK_IMPORTED_MODULE_24__["StampCanvasComponent"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignatureModule);
    return SignatureModule;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/signature.service.ts":
/*!**************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: SignatureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureService", function() { return SignatureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/signature/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");





var SignatureService = /** @class */ (function () {
    function SignatureService(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    SignatureService.prototype.loadFiles = function (path) {
        return this._http.post(this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_FILE_TREE, { 'path': path }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    SignatureService.prototype.loadFile = function (credentials) {
        return this._http.post(this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_DOCUMENT_DESCRIPTION, credentials, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    SignatureService.prototype.upload = function (file, url, rewrite, signType) {
        var formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (signType) {
            formData.append("signatureType", signType);
        }
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].UPLOAD_DOCUMENTS, formData);
    };
    SignatureService.prototype.loadPage = function (credentials, page) {
        return this._http.post(this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'page': page
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    SignatureService.prototype.getDownloadUrl = function (credentials) {
        return this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
    };
    SignatureService.prototype.loadPrint = function (credentials) {
        return this._http.post(this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_PRINT, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    SignatureService.prototype.loadPrintPdf = function (credentials) {
        return this._http.post(this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_PRINT_PDF, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJsonResponseTypeBlob);
    };
    SignatureService.prototype.getSignatures = function (path, type) {
        return this._http.post(this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_FILE_TREE, {
            'path': path,
            'signatureType': type
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    SignatureService.prototype.removeSignatures = function (guid, type) {
        return this._http.post(this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].DELETE_SIGNATURE_FILE, {
            'guid': guid,
            'signatureType': type
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    SignatureService.prototype.uploadSignature = function (data, rewrite) {
        if (data.fileList.length > 1) {
            for (var i = 0; i < data.fileList.length - 1; i++) {
                this.upload(data.fileList.item(i), '', rewrite, data.signType);
            }
        }
        return this.upload(data.fileList.item(data.fileList.length - 1), '', rewrite, data.signType);
    };
    SignatureService.prototype.getCode = function (text, temp, type) {
        return this._http.post(this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].SAVE_OPTICAL_CODE, {
            'properties': { 'text': text, 'temp': temp },
            'signatureType': type
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    SignatureService.prototype.loadSignatureImage = function (sign) {
        return this._http.post(this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_SIGNATURE_IMAGE, {
            'guid': sign.guid,
            'page': sign.pageNumber,
            'signatureType': sign.type,
            'password': ''
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (props) {
            props.guid = sign.guid;
            return props;
        }));
    };
    SignatureService.prototype.saveTextSignature = function (data) {
        var _this = this;
        var properties = data.props;
        properties.fontColor = this.toRgb(properties.fontColor);
        return this._http.post(this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].SAVE_TEXT, {
            'properties': properties
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (props) {
            props.fontColor = _this.toHex(props.fontColor);
            return props;
        }));
    };
    SignatureService.prototype.toRgb = function (color) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
        if (result) {
            var r = parseInt(result[1], 16);
            var g = parseInt(result[2], 16);
            var b = parseInt(result[3], 16);
            return result ? 'rgb(' + r + ',' + g + ',' + b + ')' : '';
        }
        return color;
    };
    SignatureService.prototype.toHex = function (color) {
        // check if color is standard hex value
        if (color.match(/[0-9A-F]{6}|[0-9A-F]{3}$/i)) {
            return (color.charAt(0) === "#") ? color : ("#" + color);
            // check if color is RGB value -> convert to hex
        }
        else if (color.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/)) {
            var c = ([parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10), parseInt(RegExp.$3, 10)]), pad = function (str) {
                if (str.length < 2) {
                    for (var i = 0, len = 2 - str.length; i < len; i++) {
                        str = '0' + str;
                    }
                }
                return str;
            };
            if (c.length === 3) {
                var r = pad(c[0].toString(16)), g = pad(c[1].toString(16)), b = pad(c[2].toString(16));
                return '#' + r + g + b;
            }
            // else do nothing
        }
        else {
            return '';
        }
    };
    SignatureService.prototype.saveImage = function (img) {
        return this._http.post(this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].SAVE_IMAGE, {
            'image': img
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    SignatureService.prototype.saveStamp = function (img, props) {
        return this._http.post(this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].SAVE_STAMP, {
            'image': img,
            'stampData': props
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    SignatureService.prototype.sign = function (credentials, signatures) {
        var docType = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["FileUtil"].find(credentials.guid, false).format;
        return this._http.post(this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].SIGN, {
            guid: credentials.guid,
            password: credentials.password ? credentials.password : "",
            signaturesData: signatures,
            documentType: docType
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    SignatureService.prototype.downloadSigned = function (credentials, signatures) {
        var docType = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["FileUtil"].find(credentials.guid, false).format;
        return this._http.post(this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].DOWNLOAD_SIGNED, {
            guid: credentials.guid,
            password: credentials.password,
            signaturesData: signatures,
            documentType: docType
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJsonResponseTypeBlob);
    };
    SignatureService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    SignatureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], SignatureService);
    return SignatureService;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/signature/signature.component.less":
/*!****************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature/signature.component.less ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-signature {\n  position: absolute !important;\n}\n.gd-signature .gd-signature-wrapper {\n  height: inherit;\n  outline: 1px solid #679FFA;\n}\n.gd-signature-image {\n  width: 100% !important;\n  height: inherit;\n}\n.gd-text {\n  width: inherit;\n  height: inherit;\n  border: none;\n  resize: none;\n  outline: none;\n}\n.gd-digital-marker {\n  background-color: #3787F5;\n  height: 16px;\n  width: 100%;\n  text-align: left;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n}\n.gd-digital-marker .icon {\n  color: #FFFFFF;\n  font-size: 10px;\n  margin: 0px 5px 0px 3px;\n}\n.gd-digital-marker div {\n  flex-grow: 1;\n  font-size: 8px;\n  color: #FFFFFF;\n  margin-top: 1px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9zaWduYXR1cmUvc3JjL2xpYi9zaWduYXR1cmUvc2lnbmF0dXJlLmNvbXBvbmVudC5sZXNzIiwibGlicy9zaWduYXR1cmUvc3JjL2xpYi9zaWduYXR1cmUvc2lnbmF0dXJlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUNDRjtBREZBO0VBSUksZUFBQTtFQUNBLDBCQUFBO0FDQ0o7QURHQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBQ0RGO0FESUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0ZGO0FES0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDSEY7QURKQTtFQVVJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNISjtBRFRBO0VBZ0JJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNKSiIsImZpbGUiOiJsaWJzL3NpZ25hdHVyZS9zcmMvbGliL3NpZ25hdHVyZS9zaWduYXR1cmUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2Qtc2lnbmF0dXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG5cbiAgLmdkLXNpZ25hdHVyZS13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkICM2NzlGRkE7XG4gIH1cbn1cblxuLmdkLXNpZ25hdHVyZS1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cblxuLmdkLXRleHQge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBib3JkZXI6IG5vbmU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmdkLWRpZ2l0YWwtbWFya2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3ODdGNTtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG5cbiAgLmljb24ge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXJnaW46IDBweCA1cHggMHB4IDNweDtcbiAgfVxuXG4gIGRpdiB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIG1hcmdpbi10b3A6IDFweDtcbiAgfVxufVxuIiwiLmdkLXNpZ25hdHVyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xufVxuLmdkLXNpZ25hdHVyZSAuZ2Qtc2lnbmF0dXJlLXdyYXBwZXIge1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIG91dGxpbmU6IDFweCBzb2xpZCAjNjc5RkZBO1xufVxuLmdkLXNpZ25hdHVyZS1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cbi5nZC10ZXh0IHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgYm9yZGVyOiBub25lO1xuICByZXNpemU6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZ2QtZGlnaXRhbC1tYXJrZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4N0Y1O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn1cbi5nZC1kaWdpdGFsLW1hcmtlciAuaWNvbiB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbjogMHB4IDVweCAwcHggM3B4O1xufVxuLmdkLWRpZ2l0YWwtbWFya2VyIGRpdiB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/signature/src/lib/signature/signature.component.ts":
/*!**************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature/signature.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: Signature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signature", function() { return Signature; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/signature/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signature_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signature-models */ "../../libs/signature/src/lib/signature-models.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _signature_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signature.service */ "../../libs/signature/src/lib/signature.service.ts");
/* harmony import */ var _remove_signature_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../remove-signature.service */ "../../libs/signature/src/lib/remove-signature.service.ts");
/* harmony import */ var _active_signature_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../active-signature.service */ "../../libs/signature/src/lib/active-signature.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "../../libs/signature/node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _signatures_holder_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../signatures-holder.service */ "../../libs/signature/src/lib/signatures-holder.service.ts");
/* harmony import */ var _copy_signature_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../copy-signature.service */ "../../libs/signature/src/lib/copy-signature.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");












var $ = jquery__WEBPACK_IMPORTED_MODULE_7__;
var Signature = /** @class */ (function () {
    function Signature(_signatureService, _removeSignatureService, _copySignatureService, _activeSignatureService, _signaturesHolderService) {
        var _this = this;
        this._signatureService = _signatureService;
        this._removeSignatureService = _removeSignatureService;
        this._copySignatureService = _copySignatureService;
        this._activeSignatureService = _activeSignatureService;
        this._signaturesHolderService = _signaturesHolderService;
        this.active = true;
        this.unlock = true;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this._activeSignatureService.activeChange.subscribe(function (id) {
            if (_this.id === id) {
                _this.active = true;
            }
            else {
                _this.active = false;
            }
        });
        this.subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(300)).subscribe(function (text) {
            _this.sendSaveText();
        });
    }
    Signature.prototype.ngOnInit = function () {
    };
    Signature.prototype.getData = function () {
        return 'data:image/png;base64,' + this.data.data;
    };
    Signature.prototype.dragOver = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
    };
    Signature.prototype.dragStart = function ($event) {
        $event.preventDefault();
        this.oldPosition = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Utils"].getMousePosition($event);
        if ($event.dataTransfer) {
            $event.dataTransfer.setData('text', 'foo');
        }
    };
    Signature.prototype.dragging = function ($event) {
        $event.preventDefault();
        var position = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Utils"].getMousePosition($event);
        if (position.x && position.y && this.isOnPage(position)) {
            var left = position.x - this.oldPosition.x;
            var top_1 = position.y - this.oldPosition.y;
            this.position.left += left;
            this.position.top += top_1;
            this.correctPosition();
            this.oldPosition = position;
        }
    };
    Signature.prototype.isOnPage = function (position) {
        var currentPage = document.elementFromPoint(position.x, position.y);
        return currentPage && $(currentPage).parent().parent() &&
            ($(currentPage).parent().parent().parent().hasClass("page") ||
                $(currentPage).parent().parent().parent().parent().parent().hasClass("page"));
    };
    Signature.prototype.isText = function () {
        return _signature_models__WEBPACK_IMPORTED_MODULE_2__["SignatureType"].TEXT.id === this.type;
    };
    Signature.prototype.getFormatting = function () {
        var f = this.data.props;
        var formatting = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Formatting"].default();
        if (f) {
            formatting.fontSize = f.fontSize;
            formatting.font = f.font;
            formatting.color = f.fontColor;
            formatting.bold = f.bold;
            formatting.underline = f.underline;
            formatting.italic = f.italic;
        }
        return formatting;
    };
    Signature.prototype.saveTextSignature = function ($event) {
        if (this.data.props) {
            this.fillFormatting($event);
            this.sendSaveText();
        }
    };
    Signature.prototype.fillFormatting = function (formatting) {
        this.data.props.fontSize = formatting.fontSize;
        this.data.props.font = formatting.font;
        this.data.props.bold = formatting.bold;
        this.data.props.italic = formatting.italic;
        this.data.props.underline = formatting.underline;
        this.data.props.fontColor = formatting.color;
    };
    Signature.prototype.remove = function () {
        var del = new _signature_models__WEBPACK_IMPORTED_MODULE_2__["RemoveSign"]();
        del.guid = this.data.guid;
        del.id = this.id;
        del.type = this.type;
        this._removeSignatureService.remove(del);
    };
    Signature.prototype.activation = function () {
        this._activeSignatureService.changeActive(this.id);
    };
    Signature.prototype.isDigital = function () {
        return this.type === _signature_models__WEBPACK_IMPORTED_MODULE_2__["SignatureType"].DIGITAL.id;
    };
    Signature.prototype.width = function ($event) {
        this.data.width += $event;
        if (!this.unlock) {
            this.data.height += $event;
        }
        this.correctPosition();
        this.notifyChanges();
    };
    Signature.prototype.height = function ($event) {
        this.data.height += $event;
        if (!this.unlock) {
            this.data.width += $event;
        }
        this.correctPosition();
        this.notifyChanges();
    };
    Signature.prototype.left = function ($event) {
        if (this.unlock) {
            this.position.left += $event;
        }
        this.correctPosition();
        this.notifyChanges();
    };
    Signature.prototype.top = function ($event) {
        if (this.unlock) {
            this.position.top += $event;
        }
        this.correctPosition();
        this.notifyChanges();
    };
    Signature.prototype.notifyChanges = function () {
        var changes = new _signature_models__WEBPACK_IMPORTED_MODULE_2__["CopyChanges"]();
        changes.guid = this.data.guid;
        changes.id = this.id;
        changes.position = this.position;
        changes.width = this.data.width;
        changes.height = this.data.height;
        this._copySignatureService.notifyChanges(changes);
    };
    Signature.prototype.drop = function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
    };
    Signature.prototype.isInit = function () {
        return this.data.width === 0 && this.data.height === 0;
    };
    Signature.prototype.onCopySign = function () {
        var copy = new _signature_models__WEBPACK_IMPORTED_MODULE_2__["CopySign"]();
        copy.guid = this.data.guid;
        copy.id = this.id;
        copy.type = this.type;
        this._copySignatureService.copy(copy);
    };
    Signature.prototype.ngAfterViewInit = function () {
        if (this.type === _signature_models__WEBPACK_IMPORTED_MODULE_2__["SignatureType"].TEXT.id) {
            setTimeout(function () {
                var element = $("#text");
                if (element) {
                    element.focus();
                }
            }, 100);
        }
    };
    Signature.prototype.correctPosition = function () {
        if (this.position.left < 0) {
            this.position.left = 0;
        }
        if (this.position.top < 0) {
            this.position.top = 0;
        }
        if (this.position.top + this.data.height > this.pageHeight) {
            this.position.top = this.pageHeight - this.data.height;
        }
        if (this.position.left + this.data.width > this.pageWidth) {
            this.position.left = this.pageWidth - this.data.width;
        }
    };
    Signature.prototype.saveText = function (value) {
        this.data.props.text = value;
        this.subject.next(value);
    };
    Signature.prototype.sendSaveText = function () {
        var _this = this;
        this._signatureService.saveTextSignature(this.data).subscribe(function (p) {
            if (_signature_models__WEBPACK_IMPORTED_MODULE_2__["DraggableSignature"].TEMP === _this.data.guid) {
                _this._signaturesHolderService.changeTemp(p.imageGuid, _this.id);
                _this.data.guid = p.imageGuid;
            }
            _this.data.props = p;
        });
    };
    Signature.prototype.hideMenu = function ($event) {
        this._activeSignatureService.changeActive(null);
    };
    Signature.prototype.getMenuShift = function () {
        var menuWidth = this.type === _signature_models__WEBPACK_IMPORTED_MODULE_2__["SignatureType"].TEXT.id ? 616 : 228;
        return this.data.width > menuWidth ? 0 : (this.data.width - menuWidth) * 0.5;
    };
    Signature.ctorParameters = function () { return [
        { type: _signature_service__WEBPACK_IMPORTED_MODULE_4__["SignatureService"] },
        { type: _remove_signature_service__WEBPACK_IMPORTED_MODULE_5__["RemoveSignatureService"] },
        { type: _copy_signature_service__WEBPACK_IMPORTED_MODULE_9__["CopySignatureService"] },
        { type: _active_signature_service__WEBPACK_IMPORTED_MODULE_6__["ActiveSignatureService"] },
        { type: _signatures_holder_service__WEBPACK_IMPORTED_MODULE_8__["SignaturesHolderService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Signature.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _signature_models__WEBPACK_IMPORTED_MODULE_2__["AddedSignature"])
    ], Signature.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _signature_models__WEBPACK_IMPORTED_MODULE_2__["Position"])
    ], Signature.prototype, "position", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Signature.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Signature.prototype, "pageWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Signature.prototype, "pageHeight", void 0);
    Signature = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-signature-component',
            template: __webpack_require__(/*! raw-loader!./signature.component.html */ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/signature/signature.component.html"),
            styles: [__webpack_require__(/*! ./signature.component.less */ "../../libs/signature/src/lib/signature/signature.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_signature_service__WEBPACK_IMPORTED_MODULE_4__["SignatureService"],
            _remove_signature_service__WEBPACK_IMPORTED_MODULE_5__["RemoveSignatureService"],
            _copy_signature_service__WEBPACK_IMPORTED_MODULE_9__["CopySignatureService"],
            _active_signature_service__WEBPACK_IMPORTED_MODULE_6__["ActiveSignatureService"],
            _signatures_holder_service__WEBPACK_IMPORTED_MODULE_8__["SignaturesHolderService"]])
    ], Signature);
    return Signature;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/signatures-holder.service.ts":
/*!**********************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signatures-holder.service.ts ***!
  \**********************************************************************************************************/
/*! exports provided: SignaturesHolderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignaturesHolderService", function() { return SignaturesHolderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/signature/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _signature_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signature-models */ "../../libs/signature/src/lib/signature-models.ts");


var SignaturesHolderService = /** @class */ (function () {
    function SignaturesHolderService() {
        this.map = new Map();
    }
    SignaturesHolderService.prototype.add = function (key) {
        this.map.set(key, []);
    };
    SignaturesHolderService.prototype.addId = function (key, id) {
        if (!this.map.has(key)) {
            this.add(key);
        }
        var item = this.map.get(key);
        item.push(id);
    };
    SignaturesHolderService.prototype.delete = function (key) {
        this.map.delete(key);
    };
    SignaturesHolderService.prototype.has = function (key) {
        return this.map.has(key);
    };
    SignaturesHolderService.prototype.clear = function () {
        this.map.clear();
    };
    SignaturesHolderService.prototype.values = function () {
        return this.map.values();
    };
    SignaturesHolderService.prototype.get = function (key) {
        return this.map.get(key);
    };
    SignaturesHolderService.prototype.remove = function (key, id) {
        var e_1, _a;
        var items = this.map.get(key);
        this.delete(key);
        if (items.length !== 1) {
            this.add(key);
            try {
                for (var items_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                    var elem = items_1_1.value;
                    if (elem !== id) {
                        this.map.get(key).push(elem);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    SignaturesHolderService.prototype.changeTemp = function (imageGuid, id) {
        this.remove(_signature_models__WEBPACK_IMPORTED_MODULE_1__["DraggableSignature"].TEMP, id);
        this.addId(imageGuid, id);
    };
    return SignaturesHolderService;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/stamp-canvas/stamp-canvas.component.less":
/*!**********************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/stamp-canvas/stamp-canvas.component.less ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-context-menu {\n  display: flex;\n  height: 37px;\n  top: -40px;\n  padding: 0;\n  background-color: #FFFFFF;\n  cursor: default;\n  flex-direction: row;\n}\n.gd-context-menu .icon {\n  font-size: 14px;\n  cursor: pointer;\n  color: #3E4E5A !important;\n}\n.gd-context-menu ::ng-deep .dropdown-menu {\n  top: -120px !important;\n  height: 120px;\n  overflow-y: auto;\n}\n.gd-context-menu ::ng-deep .icon-button {\n  margin: 0px !important;\n}\n.gd-stamp-box {\n  position: absolute;\n}\n.palette {\n  position: absolute;\n  top: -190px;\n}\n.csg-preview {\n  width: 100%;\n  height: 100%;\n}\n.csg-bounding-box {\n  border: 1px solid #679FFA;\n  position: absolute;\n}\n.csg-border-width {\n  width: 37px !important;\n  height: 37px !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.bg-color-pic {\n  border-radius: 100%;\n  border: 1px solid #CCC;\n  position: absolute;\n  height: 8px;\n  width: 8px;\n  right: 6px;\n  bottom: 6px;\n}\n::ng-deep .select {\n  min-width: unset !important;\n}\n::ng-deep .selected-value {\n  font-size: 12px !important;\n}\n@media (max-width: 1037px) {\n  .gd-context-menu {\n    top: -37px;\n    margin: auto;\n  }\n  .csg-border-width {\n    width: 18px !important;\n    height: 16px !important;\n    margin-left: 8px;\n  }\n  .csg-border-width .select {\n    width: 21px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9zaWduYXR1cmUvc3JjL2xpYi9zdGFtcC1jYW52YXMvc3RhbXAtY2FudmFzLmNvbXBvbmVudC5sZXNzIiwibGlicy9zaWduYXR1cmUvc3JjL2xpYi9zdGFtcC1jYW52YXMvc3RhbXAtY2FudmFzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDREY7QUROQTtFQVVJLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNESjtBRFhBO0VBZ0JJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDRko7QURoQkE7RUFzQkksc0JBQUE7QUNISjtBRE9BO0VBQ0Usa0JBQUE7QUNMRjtBRFFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDTkY7QURTQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDUEY7QURVQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUNSRjtBRFdBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDVEY7QURZQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNWRjtBRGFBO0VBQ0UsMkJBQUE7QUNYRjtBRGNBO0VBQ0UsMEJBQUE7QUNaRjtBRGVBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsWUFBQTtFQ2JGO0VEZ0JBO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0VDZEY7RURXQTtJQU1JLFdBQUE7RUNkSjtBQUNGIiwiZmlsZSI6ImxpYnMvc2lnbmF0dXJlL3NyYy9saWIvc3RhbXAtY2FudmFzL3N0YW1wLWNhbnZhcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21tb24tY29tcG9uZW50cy9zcmMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4uZ2QtY29udGV4dC1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAzN3B4O1xuICB0b3A6IC00MHB4O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IEBwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICA6Om5nLWRlZXAgLmRyb3Bkb3duLW1lbnUge1xuICAgIHRvcDogLTEyMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG5cbiAgOjpuZy1kZWVwIC5pY29uLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4uZ2Qtc3RhbXAtYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucGFsZXR0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTkwcHg7XG59XG5cbi5jc2ctcHJldmlldyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jc2ctYm91bmRpbmctYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY3OUZGQTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY3NnLWJvcmRlci13aWR0aCB7XG4gIHdpZHRoOiAzN3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzdweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJnLWNvbG9yLXBpYyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0M7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA4cHg7XG4gIHJpZ2h0OiA2cHg7XG4gIGJvdHRvbTogNnB4O1xufVxuXG46Om5nLWRlZXAgLnNlbGVjdCB7XG4gIG1pbi13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5zZWxlY3RlZC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgQHBob25lLWRvd24ge1xuICAuZ2QtY29udGV4dC1tZW51IHtcbiAgICB0b3A6IC0zN3B4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gIC5jc2ctYm9yZGVyLXdpZHRoIHtcbiAgICB3aWR0aDogMThweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTZweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG5cbiAgICAuc2VsZWN0IHtcbiAgICAgIHdpZHRoOiAyMXB4O1xuICAgIH1cbiAgfVxuXG59XG4iLCIuZ2QtY29udGV4dC1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAzN3B4O1xuICB0b3A6IC00MHB4O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uZ2QtY29udGV4dC1tZW51IC5pY29uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjM0U0RTVBICFpbXBvcnRhbnQ7XG59XG4uZ2QtY29udGV4dC1tZW51IDo6bmctZGVlcCAuZHJvcGRvd24tbWVudSB7XG4gIHRvcDogLTEyMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTIwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uZ2QtY29udGV4dC1tZW51IDo6bmctZGVlcCAuaWNvbi1idXR0b24ge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuLmdkLXN0YW1wLWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5wYWxldHRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xOTBweDtcbn1cbi5jc2ctcHJldmlldyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY3NnLWJvdW5kaW5nLWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NzlGRkE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jc2ctYm9yZGVyLXdpZHRoIHtcbiAgd2lkdGg6IDM3cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzN3B4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJnLWNvbG9yLXBpYyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0M7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA4cHg7XG4gIHJpZ2h0OiA2cHg7XG4gIGJvdHRvbTogNnB4O1xufVxuOjpuZy1kZWVwIC5zZWxlY3Qge1xuICBtaW4td2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnNlbGVjdGVkLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAzN3B4KSB7XG4gIC5nZC1jb250ZXh0LW1lbnUge1xuICAgIHRvcDogLTM3cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIC5jc2ctYm9yZGVyLXdpZHRoIHtcbiAgICB3aWR0aDogMThweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTZweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIH1cbiAgLmNzZy1ib3JkZXItd2lkdGggLnNlbGVjdCB7XG4gICAgd2lkdGg6IDIxcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "../../libs/signature/src/lib/stamp-canvas/stamp-canvas.component.ts":
/*!********************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/stamp-canvas/stamp-canvas.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: StampCanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StampCanvasComponent", function() { return StampCanvasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/signature/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signature_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signature-models */ "../../libs/signature/src/lib/signature-models.ts");
/* harmony import */ var _active_canvas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../active-canvas.service */ "../../libs/signature/src/lib/active-canvas.service.ts");
/* harmony import */ var _remove_canvas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../remove-canvas.service */ "../../libs/signature/src/lib/remove-canvas.service.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");






var StampCanvasComponent = /** @class */ (function () {
    function StampCanvasComponent(_activeCanvasService, _removeCanvas, _onCloseService) {
        var _this = this;
        this._activeCanvasService = _activeCanvasService;
        this._removeCanvas = _removeCanvas;
        this._onCloseService = _onCloseService;
        this.colorPickerBG = false;
        this.colorPickerC = false;
        this.borderWidth = _signature_models__WEBPACK_IMPORTED_MODULE_2__["Border"].widthOptions();
        this._onCloseService.onClose.subscribe(function (c) {
            _this.colorPickerC = false;
            _this.colorPickerBG = false;
        });
        this._activeCanvasService.activeChange.subscribe(function (id) {
            if (_this.id === id) {
                _this.active = true;
            }
            else {
                _this.active = false;
            }
        });
    }
    Object.defineProperty(StampCanvasComponent.prototype, "ctx", {
        get: function () {
            return this._ctx;
        },
        enumerable: true,
        configurable: true
    });
    StampCanvasComponent.prototype.activation = function () {
        this._activeCanvasService.changeActive(this.id);
    };
    StampCanvasComponent.prototype.ngOnInit = function () {
    };
    StampCanvasComponent.prototype.ngAfterViewInit = function () {
        this._ctx = this.canvas.nativeElement.getContext('2d');
        this.redrawCanvas();
    };
    StampCanvasComponent.prototype.redrawCanvas = function () {
        this.refreshRadius();
        this.drawCircle();
        if (this.props.text) {
            if (this.theFirst) {
                this._ctx.fillStyle = this.props.textColor;
                this._ctx.font = this.fontDecoration() + " " + this.props.fontSize + 'px ' + this.props.font;
                this._ctx.textAlign = 'center';
                this._ctx.fillText(this.props.text, this.props.width / 2, this.props.height / 2 + this.props.fontSize / 2);
                if (this.props.underline) {
                    this.makeTextUnderline();
                }
            }
            else {
                this.drawTextCircle();
            }
        }
    };
    StampCanvasComponent.prototype.fontDecoration = function () {
        var bold = (this.props.bold) ? "bold" : "";
        var italic = (this.props.italic) ? "italic" : "";
        return bold + " " + italic;
    };
    StampCanvasComponent.prototype.makeTextUnderline = function () {
        var x = this.props.width / 2;
        var y = this.props.height / 2;
        var textWidth = this._ctx.measureText(this.props.text).width;
        var startY = y + this.props.fontSize;
        var endY = startY;
        var underlineHeight = this.props.fontSize / 15;
        if (underlineHeight < 1) {
            underlineHeight = 1;
        }
        this._ctx.beginPath();
        var startX = x - (textWidth / 2);
        var endX = x + (textWidth / 2);
        this._ctx.strokeStyle = this.props.textColor;
        this._ctx.lineWidth = underlineHeight;
        this._ctx.moveTo(startX, startY);
        this._ctx.lineTo(endX, endY);
        this._ctx.strokeStyle = 'blue';
        this._ctx.stroke();
    };
    StampCanvasComponent.prototype.drawCircle = function () {
        var backgroundColor = (this.props.backgroundColor === "") ? "rgb(255, 255, 255)" : this.props.backgroundColor;
        var x = this.props.width / 2;
        var y = this.props.height / 2;
        this._ctx.beginPath();
        this._ctx.arc(x, y, this.props.radius, 0, 2 * Math.PI);
        this._ctx.lineWidth = this.props.strokeWidth;
        this._ctx.strokeStyle = this.props.strokeColor;
        this._ctx.stroke();
        this._ctx.fillStyle = backgroundColor;
        this._ctx.fill();
        this._ctx.closePath();
    };
    ;
    StampCanvasComponent.prototype.drawTextCircle = function () {
        var x = this.props.width / 2;
        var y = this.props.height / 2;
        this._ctx.save();
        this._ctx.translate(x, y);
        this._ctx.rotate(Math.PI / 2);
        this._ctx.fillStyle = this.props.textColor;
        this._ctx.font = this.fontDecoration() + " " + this.props.fontSize + 'px ' + this.props.font;
        var num = this.props.textExpansion + (this.props.fontSize / 100);
        var rad = this.props.radius - (this.props.fontSize / 2);
        for (var i = 0; i < this.props.textRepeat; i++) {
            for (var j = 0; j < this.props.text.length; j++) {
                this._ctx.save();
                this._ctx.rotate(j * num + num * this.props.text.length * i);
                this._ctx.fillText(this.props.text[j], 0, -(rad));
                this._ctx.restore();
            }
        }
        this._ctx.restore();
    };
    ;
    StampCanvasComponent.prototype.refreshRadius = function () {
        if (this.props.strokeWidth > 1) {
            this.props.radius = (this.props.width / 2) - (this.props.strokeWidth / 2);
        }
        else {
            this.props.radius = (this.props.width / 2);
        }
    };
    StampCanvasComponent.prototype.toggleColorPicker = function ($event, bg) {
        $event.preventDefault();
        $event.stopPropagation();
        if (bg) {
            this.colorPickerBG = !this.colorPickerBG;
        }
        else {
            this.colorPickerC = !this.colorPickerC;
        }
    };
    StampCanvasComponent.prototype.selectColor = function (bg, $event) {
        if (bg) {
            this.props.backgroundColor = $event;
            this.colorPickerBG = false;
        }
        else {
            this.props.strokeColor = $event;
            this.colorPickerC = false;
        }
        this.redrawCanvas();
    };
    StampCanvasComponent.prototype.selectBorderWidth = function ($event) {
        this.props.strokeWidth = $event.value;
        this.redrawCanvas();
    };
    StampCanvasComponent.prototype.deleteCanvas = function () {
        this._removeCanvas.remove(this.id);
        this.redrawCanvas();
    };
    StampCanvasComponent.prototype.getLeft = function () {
        return (this.width - this.props.width) / 2;
    };
    StampCanvasComponent.prototype.getTop = function () {
        return ((this.height - this.props.height) / 2 - (this.active ? 34 : 0));
    };
    StampCanvasComponent.prototype.resize = function ($event) {
        this.props.width += $event;
        this.props.height += $event;
    };
    StampCanvasComponent.prototype.closeColorPickerBG = function ($event) {
        this.colorPickerBG = !$event;
    };
    StampCanvasComponent.prototype.closeColorPickerC = function ($event) {
        this.colorPickerC = !$event;
    };
    StampCanvasComponent.ctorParameters = function () { return [
        { type: _active_canvas_service__WEBPACK_IMPORTED_MODULE_3__["ActiveCanvasService"] },
        { type: _remove_canvas_service__WEBPACK_IMPORTED_MODULE_4__["RemoveCanvasService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["OnCloseService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], StampCanvasComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], StampCanvasComponent.prototype, "theFirst", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], StampCanvasComponent.prototype, "active", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _signature_models__WEBPACK_IMPORTED_MODULE_2__["StampCanvasProps"])
    ], StampCanvasComponent.prototype, "props", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], StampCanvasComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], StampCanvasComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StampCanvasComponent.prototype, "canvas", void 0);
    StampCanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-stamp-canvas',
            template: __webpack_require__(/*! raw-loader!./stamp-canvas.component.html */ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/stamp-canvas/stamp-canvas.component.html"),
            styles: [__webpack_require__(/*! ./stamp-canvas.component.less */ "../../libs/signature/src/lib/stamp-canvas/stamp-canvas.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_active_canvas_service__WEBPACK_IMPORTED_MODULE_3__["ActiveCanvasService"],
            _remove_canvas_service__WEBPACK_IMPORTED_MODULE_4__["RemoveCanvasService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["OnCloseService"]])
    ], StampCanvasComponent);
    return StampCanvasComponent;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/stamp-modal/stamp-modal.component.less":
/*!********************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/stamp-modal/stamp-modal.component.less ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stamp-body {\n  width: 1036px;\n  height: 561px;\n}\n.stamp-body .csg-text-input {\n  padding: 5px;\n  background-color: #e6e6e6;\n  position: absolute;\n  top: 120px;\n  left: 0px;\n  width: calc(100% - 10px);\n  flex-direction: row;\n  display: flex;\n  z-index: 99999;\n}\n.stamp-body .csg-text-input::after {\n  content: \" \";\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 4px 5px 4px;\n  border-color: transparent transparent #e6e6e6 transparent;\n  position: absolute;\n  top: -5px;\n  right: 110px;\n}\n.stamp-body .csg-text-input input {\n  height: 20px;\n  width: 100%;\n  padding: 0;\n  margin: 0px 10px 0px 0px;\n}\n.stamp-body .csg-insert-text {\n  width: 27px;\n  height: 27px;\n  background-color: #3787F5;\n  margin: 0px;\n}\n.stamp-body .csg-insert-text .icon {\n  padding: 5px;\n  color: white;\n}\n.stamp-header {\n  height: 60px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header-buttons {\n  display: flex;\n}\n.header-buttons .plus {\n  font-size: 8px;\n  position: absolute;\n  height: 5px;\n  width: 5px;\n  right: 10px;\n  bottom: 10px;\n}\n.stamp-export {\n  background-color: #25c2d4;\n  margin-right: 10px;\n  width: 68px;\n  height: 37px;\n  display: flex;\n  justify-content: space-between;\n  color: #FFF;\n  align-items: center;\n  cursor: pointer;\n}\n.stamp-export .icon {\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  flex: 0 0 27px;\n}\n.stamp-export .save-button {\n  font-size: 10px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  flex: 0 0 45px;\n}\n.gd-draw-stamp {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA4UlEQVR4nO2WbQuDMAyE+///q0WhKiiacYFK7BeXK2OMJXC2SF8er2kwiTPO81St6yo5ZxmGQdsnYZwdi/6yLJICIAACIAAC4KcA6uYMgN34BmAX9QgA9atYuQGO47j6mMw4YDXPsyQ8PCqlaAsAuNAjdYC1DyDeY7MOQuoAY10L0CboO0KoAywA6NsFn26QBaUB6hFYAO8VrhEAAfC/APQ1tJXQC9CCXABsKQZAW1qpStgDwG7+kVL8dQBPAnYDQN4cwFgrvFOAfd/Fq23b9IdiHEeZpokWAF41ugKO5u7gN6EQAAAFZL5NAAAAAElFTkSuQmCC) !important;\n  position: absolute;\n  padding: 0 !important;\n  background-color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.gd-draw-stamp input {\n  z-index: 1000;\n  width: 100px;\n  height: 30px;\n  outline: 2px solid #679FFA;\n}\n::ng-deep .gd-text-menu-context {\n  height: 37px;\n  top: 180px;\n  padding: 0;\n  background-color: #FFFFFF;\n  cursor: default;\n  position: absolute;\n  z-index: 99999;\n}\n::ng-deep .select {\n  color: #3E4E5A !important;\n}\n::ng-deep gd-drop-down {\n  z-index: 999999 !important;\n}\n@media (max-width: 1037px) {\n  .stamp-body {\n    width: inherit;\n    height: inherit;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9zaWduYXR1cmUvc3JjL2xpYi9zdGFtcC1tb2RhbC9zdGFtcC1tb2RhbC5jb21wb25lbnQubGVzcyIsImxpYnMvc2lnbmF0dXJlL3NyYy9saWIvc3RhbXAtbW9kYWwvc3RhbXAtbW9kYWwuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQ0RGO0FEREE7RUFNSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDRko7QURaQTtFQWtCSSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EseURBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDSEo7QUR2QkE7RUE4QkksWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7QUNKSjtBRDdCQTtFQXFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ0xKO0FEbkNBO0VBMkNNLFlBQUE7RUFDQSxZQUFBO0FDTE47QURVQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNSRjtBRFdBO0VBQ0UsYUFBQTtBQ1RGO0FEUUE7RUFJSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDVEo7QURhQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNYRjtBREVBO0VBWUksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDWEo7QURKQTtFQW1CSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDWko7QURnQkE7RUFDRSw0Y0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDZEY7QURPQTtFQVVJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDZEo7QURrQkE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNoQkY7QURvQkE7RUFDRSx5QkFBQTtBQ2xCRjtBRHFCQTtFQUNFLDBCQUFBO0FDbkJGO0FEc0JBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsZUFBQTtFQ3BCRjtBQUNGIiwiZmlsZSI6ImxpYnMvc2lnbmF0dXJlL3NyYy9saWIvc3RhbXAtbW9kYWwvc3RhbXAtbW9kYWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tbW9uLWNvbXBvbmVudHMvc3JjL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuLnN0YW1wLWJvZHkge1xuICB3aWR0aDogMTAzNnB4O1xuICBoZWlnaHQ6IDU2MXB4O1xuXG5cbiAgLmNzZy10ZXh0LWlucHV0IHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMjBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgd2lkdGg6IH5cImNhbGMoMTAwJSAtIDEwcHgpXCI7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHotaW5kZXg6IDk5OTk5O1xuICB9XG5cbiAgLmNzZy10ZXh0LWlucHV0OjphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDRweCA1cHggNHB4O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2U2ZTZlNiB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNXB4O1xuICAgIHJpZ2h0OiAxMTBweDtcbiAgfVxuXG4gIC5jc2ctdGV4dC1pbnB1dCBpbnB1dCB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xuICB9XG5cbiAgLmNzZy1pbnNlcnQtdGV4dCB7XG4gICAgd2lkdGg6IDI3cHg7XG4gICAgaGVpZ2h0OiAyN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzg3RjU7XG4gICAgbWFyZ2luOiAwcHg7XG5cbiAgICAuaWNvbiB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG59XG5cbi5zdGFtcC1oZWFkZXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLnBsdXMge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICB3aWR0aDogNXB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGJvdHRvbTogMTBweDtcbiAgfVxufVxuXG4uc3RhbXAtZXhwb3J0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJyYW5kO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiA2OHB4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6ICNGRkY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAuaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleDogMCAwIDI3cHg7XG4gIH1cblxuICAuc2F2ZS1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4OiAwIDAgNDVweDtcbiAgfVxufVxuXG4uZ2QtZHJhdy1zdGFtcCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWhDQVlBQUFDNEpxbFJBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBQTRVbEVRVlI0bk8yV2JRdURNQXlFKy8vL3EwV2hLaWlhY1lGSzdCZVhLMk9NSlhDMlNGOGVyMmt3aVRQTzgxU3Q2eW81WnhtR1Fkc25ZWndkaS82eUxKSUNJQUFDSUFBQzRLY0E2dVlNZ04zNEJtQVg5UWdBOWF0WXVRR080N2o2bU13NFlEWFBzeVE4UENxbGFBc0F1TkFqZFlDMUR5RGVZN01PUXVvQVkxMEwwQ2JvTzBLb0F5d0E2TnNGbjI2UUJhVUI2aEZZQU84VnJoRUFBZkMvQVBRMXRKWFFDOUNDWEFCc0tRWkFXMXFwU3RnRHdHNytrVkw4ZFFCUEFuWURRTjRjd0ZncnZGT0FmZC9GcTIzYjlJZGlIRWVacG9rV0FGNDF1Z0tPNXU3Z042RVFBQUFGWkw1TkFBQUFBRWxGVGtTdVFtQ0MpICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBpbnB1dCB7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCAjNjc5RkZBO1xuICB9XG59XG5cbjo6bmctZGVlcCAuZ2QtdGV4dC1tZW51LWNvbnRleHQge1xuICBoZWlnaHQ6IDM3cHg7XG4gIHRvcDogMTgwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTtcblxufVxuXG46Om5nLWRlZXAgLnNlbGVjdCB7XG4gIGNvbG9yOiBAcHJpbWFyeSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgZ2QtZHJvcC1kb3duIHtcbiAgei1pbmRleDogOTk5OTk5ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBAcGhvbmUtZG93biB7XG4gIC5zdGFtcC1ib2R5IHtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gIH1cbn1cbiIsIi5zdGFtcC1ib2R5IHtcbiAgd2lkdGg6IDEwMzZweDtcbiAgaGVpZ2h0OiA1NjFweDtcbn1cbi5zdGFtcC1ib2R5IC5jc2ctdGV4dC1pbnB1dCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEyMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogOTk5OTk7XG59XG4uc3RhbXAtYm9keSAuY3NnLXRleHQtaW5wdXQ6OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMCA0cHggNXB4IDRweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZTZlNmU2IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTVweDtcbiAgcmlnaHQ6IDExMHB4O1xufVxuLnN0YW1wLWJvZHkgLmNzZy10ZXh0LWlucHV0IGlucHV0IHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xufVxuLnN0YW1wLWJvZHkgLmNzZy1pbnNlcnQtdGV4dCB7XG4gIHdpZHRoOiAyN3B4O1xuICBoZWlnaHQ6IDI3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzg3RjU7XG4gIG1hcmdpbjogMHB4O1xufVxuLnN0YW1wLWJvZHkgLmNzZy1pbnNlcnQtdGV4dCAuaWNvbiB7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnN0YW1wLWhlYWRlciB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXItYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaGVhZGVyLWJ1dHRvbnMgLnBsdXMge1xuICBmb250LXNpemU6IDhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDVweDtcbiAgd2lkdGg6IDVweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMTBweDtcbn1cbi5zdGFtcC1leHBvcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjVjMmQ0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiA2OHB4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6ICNGRkY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zdGFtcC1leHBvcnQgLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAwIDAgMjdweDtcbn1cbi5zdGFtcC1leHBvcnQgLnNhdmUtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAwIDAgNDVweDtcbn1cbi5nZC1kcmF3LXN0YW1wIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBaENBWUFBQUM0SnFsUkFBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFBNFVsRVFWUjRuTzJXYlF1RE1BeUUrLy8vcTBXaEtpaWFjWUZLN0JlWEsyT01KWEMyU0Y4ZXIya3dpVFBPODFTdDZ5bzVaeG1HUWRzbllad2RpLzZ5TEpJQ0lBQUNJQUFDNEtjQTZ1WU1nTjM0Qm1BWDlRZ0E5YXRZdVFHTzQ3ajZtTXc0WURYUHN5UThQQ3FsYUFzQXVOQWpkWUMxRHlEZVk3TU9RdW9BWTEwTDBDYm9PMEtvQXl3QTZOc0ZuMjZRQmFVQjZoRllBTzhWcmhFQUFmQy9BUFExdEpYUUM5Q0NYQUJzS1FaQVcxcXBTdGdEd0c3K2tWTDhkUUJQQW5ZRFFONGN3RmdydkZPQWZkL0ZxMjNiOUlkaUhFZVpwb2tXQUY0MXVnS081dTdnTjZFUUFBQUZaTDVOQUFBQUFFbEZUa1N1UW1DQykgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmdkLWRyYXctc3RhbXAgaW5wdXQge1xuICB6LWluZGV4OiAxMDAwO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgb3V0bGluZTogMnB4IHNvbGlkICM2NzlGRkE7XG59XG46Om5nLWRlZXAgLmdkLXRleHQtbWVudS1jb250ZXh0IHtcbiAgaGVpZ2h0OiAzN3B4O1xuICB0b3A6IDE4MHB4O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTk7XG59XG46Om5nLWRlZXAgLnNlbGVjdCB7XG4gIGNvbG9yOiAjM0U0RTVBICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgZ2QtZHJvcC1kb3duIHtcbiAgei1pbmRleDogOTk5OTk5ICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAzN3B4KSB7XG4gIC5zdGFtcC1ib2R5IHtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "../../libs/signature/src/lib/stamp-modal/stamp-modal.component.ts":
/*!******************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/stamp-modal/stamp-modal.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: StampModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StampModalComponent", function() { return StampModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/signature/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signature_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signature-models */ "../../libs/signature/src/lib/signature-models.ts");
/* harmony import */ var _active_canvas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../active-canvas.service */ "../../libs/signature/src/lib/active-canvas.service.ts");
/* harmony import */ var _signature_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../signature.service */ "../../libs/signature/src/lib/signature.service.ts");
/* harmony import */ var _signature_tab_activator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../signature-tab-activator.service */ "../../libs/signature/src/lib/signature-tab-activator.service.ts");
/* harmony import */ var _remove_canvas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../remove-canvas.service */ "../../libs/signature/src/lib/remove-canvas.service.ts");
/* harmony import */ var _stamp_canvas_stamp_canvas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stamp-canvas/stamp-canvas.component */ "../../libs/signature/src/lib/stamp-canvas/stamp-canvas.component.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "../../libs/signature/node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);










var $ = jquery__WEBPACK_IMPORTED_MODULE_9__;
var StampModalComponent = /** @class */ (function () {
    function StampModalComponent(_addDynamicComponentService, _activeCanvasService, _windowService, _removeCanvas, _signatureService, _tabActivationService, _modalService) {
        var _this = this;
        this._addDynamicComponentService = _addDynamicComponentService;
        this._activeCanvasService = _activeCanvasService;
        this._windowService = _windowService;
        this._removeCanvas = _removeCanvas;
        this._signatureService = _signatureService;
        this._tabActivationService = _tabActivationService;
        this._modalService = _modalService;
        this.stampCircles = new Map();
        this.textString = '';
        this.showText = false;
        this.sizeMagnifier = 40;
        this.textProps = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_8__["Formatting"].default();
        this._removeCanvas.removeCanvas.subscribe(function (id) {
            var componentRef = _this.stampCircles.get(id);
            componentRef.destroy();
            _this.stampCircles.delete(id);
        });
        this.isMobile = _windowService.isMobile();
        _windowService.onResize.subscribe(function (w) {
            _this.isMobile = _windowService.isMobile();
        });
        this._activeCanvasService.activeChange.subscribe(function (id) {
            _this.activeId = id;
        });
    }
    StampModalComponent.prototype.ngOnInit = function () {
    };
    StampModalComponent.prototype.saveSign = function () {
        var _this = this;
        var componentRef = this.stampCircles.get(this.stampCircles.size);
        var canvasComponent = componentRef.instance;
        var lastProps = canvasComponent.props;
        var ctx = canvasComponent.ctx;
        var props = [];
        props.push(lastProps);
        for (var i = this.stampCircles.size - 1; i > 0; i--) {
            var comp = this.stampCircles.get(i).instance;
            var canvas = comp.canvas.nativeElement;
            var offset = lastProps.width - comp.props.width;
            if (offset !== 0) {
                offset = offset / 2;
            }
            ctx.drawImage(canvas, offset, offset);
            props.push(comp.props);
        }
        props.reverse();
        var img = canvasComponent.canvas.nativeElement.toDataURL("image/png");
        this._signatureService.saveStamp(img, props).subscribe(function () {
            _this._tabActivationService.changeActiveTab(_signature_models__WEBPACK_IMPORTED_MODULE_2__["SignatureType"].STAMP.id);
        });
        this.close();
    };
    StampModalComponent.prototype.close = function () {
        this._modalService.close(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_8__["CommonModals"].DrawStampSignature);
    };
    StampModalComponent.prototype.onCloseOpen = function ($event) {
        if ($event) {
            this.textString = '';
            var props = new _signature_models__WEBPACK_IMPORTED_MODULE_2__["StampCanvasProps"]().init(this.isMobile);
            props.id = this.stampCircles.size + 1;
            this.addCircle(props, true);
        }
        else {
            this.clear();
        }
    };
    StampModalComponent.prototype.clear = function () {
        var e_1, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.stampCircles.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var comp = _c.value;
                comp.destroy();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.stampCircles = new Map();
        this.showText = false;
    };
    StampModalComponent.prototype.addCircle = function (props, theFirst) {
        if (this.dynamicDirective) {
            var viewContainerRef = this.dynamicDirective.viewContainerRef;
            var stampCircle = this._addDynamicComponentService.addDynamicComponent(viewContainerRef, _stamp_canvas_stamp_canvas_component__WEBPACK_IMPORTED_MODULE_7__["StampCanvasComponent"]);
            stampCircle.instance.id = props.id;
            stampCircle.instance.theFirst = theFirst;
            stampCircle.instance.active = true;
            stampCircle.instance.props = props;
            stampCircle.instance.width = this.getWidth();
            stampCircle.instance.height = this.getHeight();
            this.stampCircles.set(props.id, stampCircle);
            this._activeCanvasService.changeActive(props.id);
        }
    };
    StampModalComponent.prototype.addCanvas = function () {
        var props = new _signature_models__WEBPACK_IMPORTED_MODULE_2__["StampCanvasProps"]();
        props.init(this.isMobile);
        props.id = this.stampCircles.size + 1;
        var componentRef = this.stampCircles.get(this.stampCircles.size);
        if (componentRef) {
            var lastProps = componentRef.instance.props;
            props.width = lastProps.width + this.sizeMagnifier;
            props.height = lastProps.height + this.sizeMagnifier;
            props.zIndex = lastProps.zIndex - 1;
        }
        this.addCircle(props, false);
        this.showText = false;
    };
    StampModalComponent.prototype.ngOnDestroy = function () {
        this.clear();
    };
    StampModalComponent.prototype.addText = function (value) {
        this.textString = value;
        var componentRef = this.stampCircles.get(1);
        if (componentRef) {
            var props = componentRef.instance.props;
            props.text = value;
            componentRef.instance.redrawCanvas();
            this.showText = false;
            this._activeCanvasService.changeActive(props.id);
        }
    };
    StampModalComponent.prototype.toggleText = function () {
        this.showText = !this.showText;
        if (this.showText) {
            this._activeCanvasService.changeActive(null);
        }
        if (this.showText) {
            setTimeout(function () {
                var element = $("#text-input");
                if (element) {
                    element.focus();
                }
            }, 100);
        }
    };
    StampModalComponent.prototype.toggleUnderline = function ($event) {
        this.textProps.underline = $event;
        var componentRef = this.stampCircles.get(1);
        if (componentRef) {
            var props = componentRef.instance.props;
            props.underline = $event;
            componentRef.instance.redrawCanvas();
        }
    };
    StampModalComponent.prototype.toggleBold = function ($event) {
        this.textProps.bold = $event;
        var componentRef = this.stampCircles.get(1);
        if (componentRef) {
            var props = componentRef.instance.props;
            props.bold = $event;
            componentRef.instance.redrawCanvas();
        }
    };
    StampModalComponent.prototype.toggleItalic = function ($event) {
        this.textProps.italic = $event;
        var componentRef = this.stampCircles.get(1);
        if (componentRef) {
            var props = componentRef.instance.props;
            props.italic = $event;
            componentRef.instance.redrawCanvas();
        }
    };
    StampModalComponent.prototype.selectTextColor = function ($event) {
        this.textProps.color = $event;
        var componentRef = this.stampCircles.get(1);
        if (componentRef) {
            var props = componentRef.instance.props;
            props.textColor = $event;
            componentRef.instance.redrawCanvas();
        }
    };
    StampModalComponent.prototype.selectFont = function ($event) {
        this.textProps.font = $event;
        var componentRef = this.stampCircles.get(1);
        if (componentRef) {
            var props = componentRef.instance.props;
            props.font = $event;
            componentRef.instance.redrawCanvas();
        }
    };
    StampModalComponent.prototype.selectFontSize = function ($event) {
        this.textProps.fontSize = $event;
        var componentRef = this.stampCircles.get(1);
        if (componentRef) {
            var props = componentRef.instance.props;
            props.fontSize = $event;
            componentRef.instance.redrawCanvas();
        }
    };
    StampModalComponent.prototype.getWidth = function () {
        return this.isMobile ? this._windowService.getWidth() : 1036;
    };
    StampModalComponent.prototype.getHeight = function () {
        return this.isMobile ? this._windowService.getHeight() : 501;
    };
    StampModalComponent.prototype.deleteText = function () {
        var componentRef = this.stampCircles.get(1);
        if (componentRef) {
            var props = componentRef.instance.props;
            props.text = "";
            componentRef.instance.redrawCanvas();
            this.showText = false;
            this._activeCanvasService.changeActive(props.id);
        }
    };
    StampModalComponent.ctorParameters = function () { return [
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_8__["AddDynamicComponentService"] },
        { type: _active_canvas_service__WEBPACK_IMPORTED_MODULE_3__["ActiveCanvasService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_8__["WindowService"] },
        { type: _remove_canvas_service__WEBPACK_IMPORTED_MODULE_6__["RemoveCanvasService"] },
        { type: _signature_service__WEBPACK_IMPORTED_MODULE_4__["SignatureService"] },
        { type: _signature_tab_activator_service__WEBPACK_IMPORTED_MODULE_5__["SignatureTabActivatorService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_8__["ModalService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_8__["HostDynamicDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_8__["HostDynamicDirective"])
    ], StampModalComponent.prototype, "dynamicDirective", void 0);
    StampModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-stamp-modal',
            template: __webpack_require__(/*! raw-loader!./stamp-modal.component.html */ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/stamp-modal/stamp-modal.component.html"),
            styles: [__webpack_require__(/*! ./stamp-modal.component.less */ "../../libs/signature/src/lib/stamp-modal/stamp-modal.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_8__["AddDynamicComponentService"],
            _active_canvas_service__WEBPACK_IMPORTED_MODULE_3__["ActiveCanvasService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_8__["WindowService"],
            _remove_canvas_service__WEBPACK_IMPORTED_MODULE_6__["RemoveCanvasService"],
            _signature_service__WEBPACK_IMPORTED_MODULE_4__["SignatureService"],
            _signature_tab_activator_service__WEBPACK_IMPORTED_MODULE_5__["SignatureTabActivatorService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_8__["ModalService"]])
    ], StampModalComponent);
    return StampModalComponent;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/text-menu/text-menu.component.less":
/*!****************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/text-menu/text-menu.component.less ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .active {\n  background-color: #e7e7e7;\n}\n.gd-text-menu {\n  display: flex;\n  flex-direction: row;\n}\n.gd-text-menu .format-select {\n  margin: 7px 15px;\n  max-width: 80px;\n}\n.gd-text-menu ::ng-deep .dropdown-menu {\n  top: 40px !important;\n  height: 120px;\n  overflow-y: auto;\n}\n.bg-color-pic {\n  border-radius: 100%;\n  border: 1px solid #CCC;\n  position: absolute;\n  height: 8px;\n  width: 8px;\n  right: 6px;\n  bottom: 6px;\n}\n.palette {\n  position: relative;\n  top: 40px;\n  left: -55px;\n  z-index: 100;\n}\n@media (max-width: 1037px) {\n  .gd-text-menu {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 60px;\n    align-items: center;\n    padding: 0px;\n    margin: 0px;\n    background-color: white;\n    border: 2px solid #707070;\n  }\n  .gd-text-menu ::ng-deep .selected-value {\n    white-space: normal !important;\n    word-wrap: break-word;\n  }\n  .gd-text-menu .icon {\n    color: white;\n    margin: 0 9px 0 9px;\n  }\n  .gd-text-menu ::ng-deep .bcPicker-palette {\n    width: 286px !important;\n    position: unset !important;\n  }\n  .gd-text-menu ::ng-deep .bcPicker-palette .bcPicker-color {\n    width: 42px !important;\n    height: 24px !important;\n  }\n  .gd-text-menu .palette {\n    top: unset;\n    bottom: 40px;\n    left: unset;\n    right: 5px;\n  }\n  .gd-text-menu ::ng-deep .dropdown-menu {\n    bottom: 40px;\n    top: unset;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9zaWduYXR1cmUvc3JjL2xpYi90ZXh0LW1lbnUvdGV4dC1tZW51LmNvbXBvbmVudC5sZXNzIiwibGlicy9zaWduYXR1cmUvc3JjL2xpYi90ZXh0LW1lbnUvdGV4dC1tZW51LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UseUJBQUE7QUNGRjtBREtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDSEY7QURDQTtFQUtJLGdCQUFBO0VBQ0EsZUFBQTtBQ0hKO0FESEE7RUFVSSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0pKO0FEUUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDTkY7QURTQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDUEY7QURXQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLHVCQUFBO0lBQ0EseUJBQUE7RUNURjtFREZBO0lBY0ksOEJBQUE7SUFDQSxxQkFBQTtFQ1RKO0VETkE7SUFtQkksWUFBQTtJQUNBLG1CQUFBO0VDVko7RURWQTtJQXdCSSx1QkFBQTtJQUNBLDBCQUFBO0VDWEo7RURkQTtJQTRCTSxzQkFBQTtJQUNBLHVCQUFBO0VDWE47RURsQkE7SUFrQ0ksVUFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtFQ2JKO0VEeEJBO0lBeUNJLFlBQUE7SUFDQSxVQUFBO0VDZEo7QUFDRiIsImZpbGUiOiJsaWJzL3NpZ25hdHVyZS9zcmMvbGliL3RleHQtbWVudS90ZXh0LW1lbnUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tbW9uLWNvbXBvbmVudHMvc3JjL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuXG46Om5nLWRlZXAgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XG59XG5cbi5nZC10ZXh0LW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gIC5mb3JtYXQtc2VsZWN0IHtcbiAgICBtYXJnaW46IDdweCAxNXB4O1xuICAgIG1heC13aWR0aDogODBweDtcbiAgfVxuXG4gIDo6bmctZGVlcCAuZHJvcGRvd24tbWVudSB7XG4gICAgdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG59XG5cbi5iZy1jb2xvci1waWMge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogOHB4O1xuICByaWdodDogNnB4O1xuICBib3R0b206IDZweDtcbn1cblxuLnBhbGV0dGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogLTU1cHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuXG5AbWVkaWEgQHBob25lLWRvd24ge1xuICAuZ2QtdGV4dC1tZW51IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3MDcwNzA7XG5cbiAgICA6Om5nLWRlZXAgLnNlbGVjdGVkLXZhbHVlIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBtYXJnaW46IDAgOXB4IDAgOXB4O1xuICAgIH1cblxuICAgIDo6bmctZGVlcCAuYmNQaWNrZXItcGFsZXR0ZSB7XG4gICAgICB3aWR0aDogMjg2cHggIWltcG9ydGFudDtcbiAgICAgIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xuXG4gICAgICAuYmNQaWNrZXItY29sb3Ige1xuICAgICAgICB3aWR0aDogNDJweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGFsZXR0ZSB7XG4gICAgICB0b3A6IHVuc2V0O1xuICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICByaWdodDogNXB4O1xuICAgIH1cblxuICAgIDo6bmctZGVlcCAuZHJvcGRvd24tbWVudSB7XG4gICAgICBib3R0b206IDQwcHg7XG4gICAgICB0b3A6IHVuc2V0O1xuICAgIH1cbiAgfVxuXG59XG4iLCI6Om5nLWRlZXAgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XG59XG4uZ2QtdGV4dC1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5nZC10ZXh0LW1lbnUgLmZvcm1hdC1zZWxlY3Qge1xuICBtYXJnaW46IDdweCAxNXB4O1xuICBtYXgtd2lkdGg6IDgwcHg7XG59XG4uZ2QtdGV4dC1tZW51IDo6bmctZGVlcCAuZHJvcGRvd24tbWVudSB7XG4gIHRvcDogNDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmJnLWNvbG9yLXBpYyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0M7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA4cHg7XG4gIHJpZ2h0OiA2cHg7XG4gIGJvdHRvbTogNnB4O1xufVxuLnBhbGV0dGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogLTU1cHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDM3cHgpIHtcbiAgLmdkLXRleHQtbWVudSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNzA3MDcwO1xuICB9XG4gIC5nZC10ZXh0LW1lbnUgOjpuZy1kZWVwIC5zZWxlY3RlZC12YWx1ZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgfVxuICAuZ2QtdGV4dC1tZW51IC5pY29uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAwIDlweCAwIDlweDtcbiAgfVxuICAuZ2QtdGV4dC1tZW51IDo6bmctZGVlcCAuYmNQaWNrZXItcGFsZXR0ZSB7XG4gICAgd2lkdGg6IDI4NnB4ICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmdkLXRleHQtbWVudSA6Om5nLWRlZXAgLmJjUGlja2VyLXBhbGV0dGUgLmJjUGlja2VyLWNvbG9yIHtcbiAgICB3aWR0aDogNDJweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjRweCAhaW1wb3J0YW50O1xuICB9XG4gIC5nZC10ZXh0LW1lbnUgLnBhbGV0dGUge1xuICAgIHRvcDogdW5zZXQ7XG4gICAgYm90dG9tOiA0MHB4O1xuICAgIGxlZnQ6IHVuc2V0O1xuICAgIHJpZ2h0OiA1cHg7XG4gIH1cbiAgLmdkLXRleHQtbWVudSA6Om5nLWRlZXAgLmRyb3Bkb3duLW1lbnUge1xuICAgIGJvdHRvbTogNDBweDtcbiAgICB0b3A6IHVuc2V0O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/signature/src/lib/text-menu/text-menu.component.ts":
/*!**************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/text-menu/text-menu.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: TextMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextMenuComponent", function() { return TextMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/signature/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "../../libs/signature/node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




var $ = jquery__WEBPACK_IMPORTED_MODULE_3__;
var TextMenuComponent = /** @class */ (function () {
    function TextMenuComponent(_onCloseService) {
        var _this = this;
        this._onCloseService = _onCloseService;
        this.decoration = true;
        this.outFontSize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.outFont = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.outBold = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.outItalic = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.outUnderline = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.outColor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fontSizeOptions = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["FormattingService"].getFontSizeOptions();
        this.fontOptions = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["FormattingService"].getFontOptions();
        this.colorPickerShow = false;
        _onCloseService.onClose.subscribe(function () {
            _this.colorPickerShow = false;
        });
    }
    TextMenuComponent.prototype.ngOnInit = function () {
    };
    TextMenuComponent.prototype.selectFontSize = function ($event) {
        $(".gd-wrapper").off("keyup");
        this.outFontSize.emit($event.value);
        $(".gd-wrapper").on("keyup", function () {
            var fontElements = document.getElementsByTagName("font");
            for (var i = 0, len = fontElements.length; i < len; ++i) {
                if (fontElements[i].getAttribute('size') === "7") {
                    fontElements[i].removeAttribute("size");
                    fontElements[i].style.fontSize = $event + "px";
                }
            }
        });
    };
    TextMenuComponent.prototype.selectFont = function ($event) {
        event.preventDefault();
        event.stopPropagation();
        this.outFont.emit($event.value);
    };
    TextMenuComponent.prototype.toggleColorPicker = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.colorPickerShow = !this.colorPickerShow;
    };
    TextMenuComponent.prototype.selectColor = function ($event) {
        this.colorPickerShow = false;
        this.outColor.emit($event);
    };
    TextMenuComponent.prototype.toggleBold = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.outBold.emit(!this.bold);
    };
    TextMenuComponent.prototype.toggleItalic = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.outItalic.emit(!this.italic);
    };
    TextMenuComponent.prototype.toggleUnderline = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.outUnderline.emit(!this.underline);
    };
    TextMenuComponent.prototype.closePicker = function ($event) {
        this.colorPickerShow = !$event;
    };
    TextMenuComponent.ctorParameters = function () { return [
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["OnCloseService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TextMenuComponent.prototype, "blur", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TextMenuComponent.prototype, "fontSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TextMenuComponent.prototype, "font", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TextMenuComponent.prototype, "bold", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TextMenuComponent.prototype, "italic", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TextMenuComponent.prototype, "underline", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TextMenuComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextMenuComponent.prototype, "decoration", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextMenuComponent.prototype, "outFontSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextMenuComponent.prototype, "outFont", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextMenuComponent.prototype, "outBold", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextMenuComponent.prototype, "outItalic", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextMenuComponent.prototype, "outUnderline", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextMenuComponent.prototype, "outColor", void 0);
    TextMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-text-menu',
            template: __webpack_require__(/*! raw-loader!./text-menu.component.html */ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/text-menu/text-menu.component.html"),
            styles: [__webpack_require__(/*! ./text-menu.component.less */ "../../libs/signature/src/lib/text-menu/text-menu.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["OnCloseService"]])
    ], TextMenuComponent);
    return TextMenuComponent;
}());



/***/ }),

/***/ "../../libs/signature/src/lib/upload-signature/upload-signature.component.less":
/*!******************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/upload-signature/upload-signature.component.less ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-upload-inputs {\n  height: 350px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  background-color: #FFF;\n}\n.gd-upload-inputs .icon {\n  font-size: 52px;\n  color: #959DA5;\n}\n.gd-upload-inputs input {\n  opacity: 0;\n  position: absolute;\n  cursor: pointer;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 203px;\n}\n.gd-upload-title {\n  color: #bababa;\n  font-size: 13px;\n  margin: 10px 0px 0px 0px;\n}\n.text {\n  font-size: 12px;\n  text-align: center;\n}\n@media (max-width: 1037px) {\n  .gd-upload-inputs {\n    width: -webkit-fill-available;\n  }\n  .gd-upload-inputs input {\n    width: -webkit-fill-available;\n    height: 201px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9zaWduYXR1cmUvc3JjL2xpYi91cGxvYWQtc2lnbmF0dXJlL3VwbG9hZC1zaWduYXR1cmUuY29tcG9uZW50Lmxlc3MiLCJsaWJzL3NpZ25hdHVyZS9zcmMvbGliL3VwbG9hZC1zaWduYXR1cmUvdXBsb2FkLXNpZ25hdHVyZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ0RGO0FETkE7RUFVSSxlQUFBO0VBQ0EsY0FBQTtBQ0RKO0FEVkE7RUFlSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsYUFBQTtBQ0ZKO0FETUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDSkY7QURPQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0xGO0FEUUE7RUFFRTtJQUNFLDZCQUFBO0VDUEY7RURVQTtJQUNFLDZCQUFBO0lBQ0EsYUFBQTtFQ1JGO0FBQ0YiLCJmaWxlIjoibGlicy9zaWduYXR1cmUvc3JjL2xpYi91cGxvYWQtc2lnbmF0dXJlL3VwbG9hZC1zaWduYXR1cmUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tbW9uLWNvbXBvbmVudHMvc3JjL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuLmdkLXVwbG9hZC1pbnB1dHMge1xuICBoZWlnaHQ6IDM1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG5cbiAgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogNTJweDtcbiAgICBjb2xvcjogIzk1OURBNTtcbiAgfVxuXG4gIGlucHV0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGhlaWdodDogMjAzcHg7XG4gIH1cbn1cblxuLmdkLXVwbG9hZC10aXRsZSB7XG4gIGNvbG9yOiAjYmFiYWJhO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIEBwaG9uZS1kb3duIHtcblxuICAuZ2QtdXBsb2FkLWlucHV0cyB7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIH1cblxuICAuZ2QtdXBsb2FkLWlucHV0cyBpbnB1dCB7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgaGVpZ2h0OiAyMDFweDtcbiAgfVxufVxuIiwiLmdkLXVwbG9hZC1pbnB1dHMge1xuICBoZWlnaHQ6IDM1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG59XG4uZ2QtdXBsb2FkLWlucHV0cyAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogNTJweDtcbiAgY29sb3I6ICM5NTlEQTU7XG59XG4uZ2QtdXBsb2FkLWlucHV0cyBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogMjAzcHg7XG59XG4uZ2QtdXBsb2FkLXRpdGxlIHtcbiAgY29sb3I6ICNiYWJhYmE7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xufVxuLnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDM3cHgpIHtcbiAgLmdkLXVwbG9hZC1pbnB1dHMge1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICB9XG4gIC5nZC11cGxvYWQtaW5wdXRzIGlucHV0IHtcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICBoZWlnaHQ6IDIwMXB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/signature/src/lib/upload-signature/upload-signature.component.ts":
/*!****************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/upload-signature/upload-signature.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: UploadSignatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadSignatureComponent", function() { return UploadSignatureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/signature/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signature_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signature-models */ "../../libs/signature/src/lib/signature-models.ts");
/* harmony import */ var _signature_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signature.service */ "../../libs/signature/src/lib/signature.service.ts");




var UploadSignatureComponent = /** @class */ (function () {
    function UploadSignatureComponent(_signatureService) {
        this._signatureService = _signatureService;
        this.closePanel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UploadSignatureComponent.prototype.ngOnInit = function () {
    };
    UploadSignatureComponent.prototype.handleFileInput = function (files) {
        this.addFiles(files);
    };
    UploadSignatureComponent.prototype.addFiles = function (files) {
        var _this = this;
        var data = new _signature_models__WEBPACK_IMPORTED_MODULE_2__["FileListWithParams"](files, this.signatureType);
        this._signatureService.uploadSignature(data, this.rewrite).subscribe(function () {
            _this.closePanel.emit(true);
        });
    };
    UploadSignatureComponent.prototype.uploadFiles = function ($event) {
        this.addFiles($event);
    };
    UploadSignatureComponent.ctorParameters = function () { return [
        { type: _signature_service__WEBPACK_IMPORTED_MODULE_3__["SignatureService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UploadSignatureComponent.prototype, "signatureType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], UploadSignatureComponent.prototype, "rewrite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UploadSignatureComponent.prototype, "closePanel", void 0);
    UploadSignatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-upload-signature',
            template: __webpack_require__(/*! raw-loader!./upload-signature.component.html */ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/upload-signature/upload-signature.component.html"),
            styles: [__webpack_require__(/*! ./upload-signature.component.less */ "../../libs/signature/src/lib/upload-signature/upload-signature.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_signature_service__WEBPACK_IMPORTED_MODULE_3__["SignatureService"]])
    ], UploadSignatureComponent);
    return UploadSignatureComponent;
}());



/***/ }),

/***/ "../../libs/viewer/src/index.ts":
/*!*******************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/viewer/src/index.ts ***!
  \*******************************************************************************/
/*! exports provided: initializeApp, ViewerModule, ViewerAppComponent, ViewerService, ViewerConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_viewer_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/viewer.module */ "../../libs/viewer/src/lib/viewer.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return _lib_viewer_module__WEBPACK_IMPORTED_MODULE_0__["initializeApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewerModule", function() { return _lib_viewer_module__WEBPACK_IMPORTED_MODULE_0__["ViewerModule"]; });

/* harmony import */ var _lib_viewer_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/viewer-app.component */ "../../libs/viewer/src/lib/viewer-app.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewerAppComponent", function() { return _lib_viewer_app_component__WEBPACK_IMPORTED_MODULE_1__["ViewerAppComponent"]; });

/* harmony import */ var _lib_viewer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/viewer.service */ "../../libs/viewer/src/lib/viewer.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewerService", function() { return _lib_viewer_service__WEBPACK_IMPORTED_MODULE_2__["ViewerService"]; });

/* harmony import */ var _lib_viewer_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/viewer-config.service */ "../../libs/viewer/src/lib/viewer-config.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewerConfigService", function() { return _lib_viewer_config_service__WEBPACK_IMPORTED_MODULE_3__["ViewerConfigService"]; });







/***/ }),

/***/ "../../libs/viewer/src/lib/thumbnails/thumbnails.component.less":
/*!***************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/viewer/src/lib/thumbnails/thumbnails.component.less ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex: 0 0 300px;\n  background: #f5f5f5;\n  color: #fff;\n  overflow-y: auto;\n  display: block;\n  transition: margin-left 0.2s;\n  height: 100%;\n}\n.gd-page {\n  width: 272px;\n  height: 272px;\n  transition: all 0.3s;\n  background-color: #e7e7e7;\n  cursor: pointer;\n  margin: 14px 14px 0px 14px;\n}\n.gd-page:hover {\n  background-color: #c0c0c0;\n}\n.gd-wrapper {\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n  position: relative;\n  background-color: #ffffff;\n  box-shadow: 0px 4px 12px -4px rgba(0, 0, 0, 0.38);\n}\n.gd-wrapper /deep/ img {\n  width: inherit;\n}\n/* Make thumbnails sidebar scroll not visible */\n.gd-thumbnails::-webkit-scrollbar {\n  width: 0px;\n  background-color: #F5F5F5;\n}\n.gd-thumbnails-panzoom > .gd-thumbnails-landscape {\n  margin: -134px 0px -1px 12px;\n}\n.gd-thumbnails .gd-page-image {\n  height: inherit;\n  margin-left: 153px !important;\n}\n.gd-thumbnails-landscape-image {\n  margin: -90px 0 -23px !important;\n}\n.gd-thumbnails-landscape-image-rotated {\n  margin: 126px 0 -3px -104px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy92aWV3ZXIvc3JjL2xpYi90aHVtYm5haWxzL3RodW1ibmFpbHMuY29tcG9uZW50Lmxlc3MiLCJsaWJzL3ZpZXdlci9zcmMvbGliL3RodW1ibmFpbHMvdGh1bWJuYWlscy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNGRjtBREtBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDSEY7QURLQTtFQUNFLHlCQUFBO0FDSEY7QURLQTtFQUNFLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBR0EsaURBQUE7QUNIRjtBRExBO0VBVUksY0FBQTtBQ0ZKO0FBQ0EsK0NBQStDO0FETS9DO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0FDSkY7QURPQTtFQUNFLDRCQUFBO0FDTEY7QURRQTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtBQ05GO0FEU0E7RUFDRSxnQ0FBQTtBQ1BGO0FEVUE7RUFDRSxzQ0FBQTtBQ1JGIiwiZmlsZSI6ImxpYnMvdmlld2VyL3NyYy9saWIvdGh1bWJuYWlscy90aHVtYm5haWxzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tbW9uLWNvbXBvbmVudHMvc3JjL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuOmhvc3Qge1xuICBmbGV4OiAwIDAgMzAwcHg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ2QtcGFnZSB7XG4gIHdpZHRoOiAyNzJweDtcbiAgaGVpZ2h0OiAyNzJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJhY2tncm91bmQtY29sb3I6IEBtZXJjdXJ5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMTRweCAxNHB4IDBweCAxNHB4O1xufVxuLmdkLXBhZ2U6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMGMwYzA7XG59XG4uZ2Qtd3JhcHBlcntcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGxlZnQ6NTAlO1xuICB0b3A6NTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IC00cHggcmdiYSgwLDAsMCwwLjM4KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNHB4IDEycHggLTRweCByZ2JhKDAsMCwwLDAuMzgpO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEycHggLTRweCByZ2JhKDAsMCwwLDAuMzgpO1xuICAvZGVlcC8gaW1nIHtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4vKiBNYWtlIHRodW1ibmFpbHMgc2lkZWJhciBzY3JvbGwgbm90IHZpc2libGUgKi9cbi5nZC10aHVtYm5haWxzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5nZC10aHVtYm5haWxzLXBhbnpvb20gPiAuZ2QtdGh1bWJuYWlscy1sYW5kc2NhcGUge1xuICBtYXJnaW46IC0xMzRweCAwcHggLTFweCAxMnB4O1xufVxuXG4uZ2QtdGh1bWJuYWlscyAuZ2QtcGFnZS1pbWFnZSB7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgbWFyZ2luLWxlZnQ6IDE1M3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5nZC10aHVtYm5haWxzLWxhbmRzY2FwZS1pbWFnZSB7XG4gIG1hcmdpbjogLTkwcHggMCAtMjNweCAhaW1wb3J0YW50O1xufVxuXG4uZ2QtdGh1bWJuYWlscy1sYW5kc2NhcGUtaW1hZ2Utcm90YXRlZCB7XG4gIG1hcmdpbjogMTI2cHggMCAtM3B4IC0xMDRweCAhaW1wb3J0YW50O1xufVxuIiwiOmhvc3Qge1xuICBmbGV4OiAwIDAgMzAwcHg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmdkLXBhZ2Uge1xuICB3aWR0aDogMjcycHg7XG4gIGhlaWdodDogMjcycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMTRweCAxNHB4IDBweCAxNHB4O1xufVxuLmdkLXBhZ2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwO1xufVxuLmdkLXdyYXBwZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMTJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjM4KTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cbi5nZC13cmFwcGVyIC9kZWVwLyBpbWcge1xuICB3aWR0aDogaW5oZXJpdDtcbn1cbi8qIE1ha2UgdGh1bWJuYWlscyBzaWRlYmFyIHNjcm9sbCBub3QgdmlzaWJsZSAqL1xuLmdkLXRodW1ibmFpbHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cbi5nZC10aHVtYm5haWxzLXBhbnpvb20gPiAuZ2QtdGh1bWJuYWlscy1sYW5kc2NhcGUge1xuICBtYXJnaW46IC0xMzRweCAwcHggLTFweCAxMnB4O1xufVxuLmdkLXRodW1ibmFpbHMgLmdkLXBhZ2UtaW1hZ2Uge1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIG1hcmdpbi1sZWZ0OiAxNTNweCAhaW1wb3J0YW50O1xufVxuLmdkLXRodW1ibmFpbHMtbGFuZHNjYXBlLWltYWdlIHtcbiAgbWFyZ2luOiAtOTBweCAwIC0yM3B4ICFpbXBvcnRhbnQ7XG59XG4uZ2QtdGh1bWJuYWlscy1sYW5kc2NhcGUtaW1hZ2Utcm90YXRlZCB7XG4gIG1hcmdpbjogMTI2cHggMCAtM3B4IC0xMDRweCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "../../libs/viewer/src/lib/thumbnails/thumbnails.component.ts":
/*!*************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/viewer/src/lib/thumbnails/thumbnails.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ThumbnailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailsComponent", function() { return ThumbnailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/viewer/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");



var ThumbnailsComponent = /** @class */ (function () {
    function ThumbnailsComponent(_navigateService, _zoomService) {
        this._navigateService = _navigateService;
        this._zoomService = _zoomService;
    }
    ThumbnailsComponent.prototype.ngOnInit = function () {
    };
    ThumbnailsComponent.prototype.ngOnChanges = function () {
        // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
        // which leads to undesired spaces on the top of the docs pages
        this.pages.forEach(function (page) {
            page.data = page.data.replace(/>\s+</g, '><').replace(/\uFEFF/g, "");
        });
    };
    ThumbnailsComponent.prototype.ngAfterViewInit = function () {
        this._zoomService.changeZoom(this._zoomService.zoom);
    };
    ThumbnailsComponent.prototype.ngOnDestroy = function () {
        this._zoomService.changeZoom(this._zoomService.zoom);
    };
    ThumbnailsComponent.prototype.imgData = function (data) {
        var dataImagePngBase64 = 'data:image/png;base64,';
        if (!this.isHtmlMode) {
            return dataImagePngBase64 + data;
        }
        return dataImagePngBase64;
    };
    ThumbnailsComponent.prototype.getScale = function (x, y) {
        return Math.min(190 / x, 190 / y);
    };
    ThumbnailsComponent.prototype.openPage = function (pageNumber) {
        this._navigateService.navigateTo(pageNumber);
    };
    ThumbnailsComponent.ctorParameters = function () { return [
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["NavigateService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ZoomService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ThumbnailsComponent.prototype, "pages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ThumbnailsComponent.prototype, "guid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ThumbnailsComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ThumbnailsComponent.prototype, "isHtmlMode", void 0);
    ThumbnailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-thumbnails',
            template: __webpack_require__(/*! raw-loader!./thumbnails.component.html */ "../../node_modules/raw-loader/index.js!../../libs/viewer/src/lib/thumbnails/thumbnails.component.html"),
            styles: [__webpack_require__(/*! ./thumbnails.component.less */ "../../libs/viewer/src/lib/thumbnails/thumbnails.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["NavigateService"], _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ZoomService"]])
    ], ThumbnailsComponent);
    return ThumbnailsComponent;
}());



/***/ }),

/***/ "../../libs/viewer/src/lib/viewer-app.component.less":
/*!****************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/viewer/src/lib/viewer-app.component.less ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');\n:host * {\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n}\n.gd-document,\n /deep/ .document {\n  -webkit-user-select: text !important;\n     -moz-user-select: text !important;\n      -ms-user-select: text !important;\n          user-select: text !important;\n}\n.current-page-number {\n  margin-left: 7px;\n  font-size: 14px;\n  color: #959da5;\n  width: 37px;\n  height: 37px;\n  line-height: 37px;\n  text-align: center;\n}\n.current-page-number.active {\n  color: #fff;\n}\n.wrapper {\n  align-items: stretch;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.doc-panel {\n  display: flex;\n  height: calc(100vh - 60px);\n  flex-direction: row;\n}\n.thumbnails-button {\n  position: absolute;\n  right: 3px;\n}\n.top-panel {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.toolbar-panel {\n  background-color: #3e4e5a;\n  width: 100%;\n}\n::ng-deep .tools .button,\n::ng-deep .tools .selected-value,\n::ng-deep .tools .nav-caret {\n  color: #fff !important;\n}\n::ng-deep .tools .button.inactive,\n::ng-deep .tools .selected-value.inactive,\n::ng-deep .tools .nav-caret.inactive {\n  color: #959da5 !important;\n}\n::ng-deep .tools .button {\n  flex-flow: column;\n}\n::ng-deep .tools .dropdown-menu .option {\n  color: #6e6e6e !important;\n}\n::ng-deep .tools .dropdown-menu .option:hover {\n  background-color: #4b566c !important;\n}\n::ng-deep .tools .icon-button {\n  margin: 0px 0px 0px 7px !important;\n}\n::ng-deep .tools .select {\n  width: 65px;\n  height: 37px;\n  margin-left: 7px;\n  line-height: 37px;\n  text-align: center;\n}\n@media (max-width: 1037px) {\n  .mobile-hide,\n  .current-page-number {\n    display: none;\n  }\n  ::ng-deep .tools gd-button:nth-child(1) > .icon-button {\n    margin: 0px 0px 0px 10px !important;\n  }\n  ::ng-deep .tools .icon-button {\n    height: 60px;\n    width: 60px;\n  }\n  ::ng-deep .tools .gd-nav-search-btn .icon-button {\n    height: 37px;\n    width: 37px;\n  }\n  ::ng-deep .tools .gd-nav-search-btn .button {\n    font-size: 14px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvdmlld2VyL3NyYy9saWIvdmlld2VyLWFwcC5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy92aWV3ZXIvc3JjL2xpYi92aWV3ZXItYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQ0FrQjtBQUVsQjtFQUNFLHNEQUFBO0FEQUY7QUNJQTs7RUFDRSxvQ0FBQTtLQUFBLGlDQUFBO01BQUEsZ0NBQUE7VUFBQSw0QkFBQTtBRERGO0FDSUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FERkY7QUNHRTtFQUNFLFdBQUE7QURESjtBQ0tBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FESEY7QUNNQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FESkY7QUNPQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBRExGO0FDUUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FETkY7QUNTQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBRFBGO0FDVUE7OztFQUVJLHNCQUFBO0FEUEo7QUNRSTs7O0VBQ0UseUJBQUE7QURKTjtBQ0FBO0VBUUksaUJBQUE7QURMSjtBQ0hBO0VBV0kseUJBQUE7QURMSjtBQ05BO0VBY0ksb0NBQUE7QURMSjtBQ1RBO0VBaUJJLGtDQUFBO0FETEo7QUNaQTtFQW9CSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRExKO0FDU0E7RUFDRTs7SUFDRSxhQUFBO0VETkY7RUNTQTtJQUVJLG1DQUFBO0VEUko7RUNNQTtJQUtJLFlBQUE7SUFDQSxXQUFBO0VEUko7RUNFQTtJQVVNLFlBQUE7SUFDQSxXQUFBO0VEVE47RUNGQTtJQWNNLGVBQUE7RURUTjtBQUNGIiwiZmlsZSI6ImxpYnMvdmlld2VyL3NyYy9saWIvdmlld2VyLWFwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xuOmhvc3QgKiB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cbi5nZC1kb2N1bWVudCxcbiAvZGVlcC8gLmRvY3VtZW50IHtcbiAgdXNlci1zZWxlY3Q6IHRleHQgIWltcG9ydGFudDtcbn1cbi5jdXJyZW50LXBhZ2UtbnVtYmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzk1OWRhNTtcbiAgd2lkdGg6IDM3cHg7XG4gIGhlaWdodDogMzdweDtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jdXJyZW50LXBhZ2UtbnVtYmVyLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLndyYXBwZXIge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4uZG9jLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4udGh1bWJuYWlscy1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzcHg7XG59XG4udG9wLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4udG9vbGJhci1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTRlNWE7XG4gIHdpZHRoOiAxMDAlO1xufVxuOjpuZy1kZWVwIC50b29scyAuYnV0dG9uLFxuOjpuZy1kZWVwIC50b29scyAuc2VsZWN0ZWQtdmFsdWUsXG46Om5nLWRlZXAgLnRvb2xzIC5uYXYtY2FyZXQge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC50b29scyAuYnV0dG9uLmluYWN0aXZlLFxuOjpuZy1kZWVwIC50b29scyAuc2VsZWN0ZWQtdmFsdWUuaW5hY3RpdmUsXG46Om5nLWRlZXAgLnRvb2xzIC5uYXYtY2FyZXQuaW5hY3RpdmUge1xuICBjb2xvcjogIzk1OWRhNSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC50b29scyAuYnV0dG9uIHtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG46Om5nLWRlZXAgLnRvb2xzIC5kcm9wZG93bi1tZW51IC5vcHRpb24ge1xuICBjb2xvcjogIzZlNmU2ZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC50b29scyAuZHJvcGRvd24tbWVudSAub3B0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNTY2YyAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC50b29scyAuaWNvbi1idXR0b24ge1xuICBtYXJnaW46IDBweCAwcHggMHB4IDdweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC50b29scyAuc2VsZWN0IHtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMzdweDtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDM3cHgpIHtcbiAgLm1vYmlsZS1oaWRlLFxuICAuY3VycmVudC1wYWdlLW51bWJlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICA6Om5nLWRlZXAgLnRvb2xzIGdkLWJ1dHRvbjpudGgtY2hpbGQoMSkgPiAuaWNvbi1idXR0b24ge1xuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMTBweCAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCAudG9vbHMgLmljb24tYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gIH1cbiAgOjpuZy1kZWVwIC50b29scyAuZ2QtbmF2LXNlYXJjaC1idG4gLmljb24tYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDM3cHg7XG4gICAgd2lkdGg6IDM3cHg7XG4gIH1cbiAgOjpuZy1kZWVwIC50b29scyAuZ2QtbmF2LXNlYXJjaC1idG4gLmJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4iLCJAaW1wb3J0IChjc3MpIHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgXCIuLi8uLi8uLi9jb21tb24tY29tcG9uZW50cy9zcmMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuOmhvc3QgKiB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLy8gVE9ETzogdGhpcyB3YXMgYWRkZWQgdG8gZ2V0IHJpZCBvZiBgdXNlci1zZWxlY3Q6IG5vbmVgIGFkZGVkIGJ5IGhhbW1lcmpzXG4uZ2QtZG9jdW1lbnQsIC9kZWVwLyAuZG9jdW1lbnQge1xuICB1c2VyLXNlbGVjdDogdGV4dCAhaW1wb3J0YW50O1xufVxuXG4uY3VycmVudC1wYWdlLW51bWJlciB7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IEByZWdlbnQtZ3JheTtcbiAgd2lkdGg6IDM3cHg7XG4gIGhlaWdodDogMzdweDtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgJi5hY3RpdmV7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLndyYXBwZXIge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5kb2MtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLnRodW1ibmFpbHMtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogM3B4O1xufVxuXG4udG9wLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b29sYmFyLXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogQG5hdi1tYWluLWJhY2tncm91bmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgLnRvb2xzIHtcbiAgLmJ1dHRvbiwgLnNlbGVjdGVkLXZhbHVlLCAubmF2LWNhcmV0IHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICYuaW5hY3RpdmV7XG4gICAgICBjb2xvcjogQHJlZ2VudC1ncmF5ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC5idXR0b24ge1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICB9XG4gIC5kcm9wZG93bi1tZW51IC5vcHRpb257XG4gICAgY29sb3I6IEBkb3ZlLWdyYXkgIWltcG9ydGFudDtcbiAgfVxuICAuZHJvcGRvd24tbWVudSAub3B0aW9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBmb2xkZXIgIWltcG9ydGFudDtcbiAgfVxuICAuaWNvbi1idXR0b257XG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCA3cHggIWltcG9ydGFudDtcbiAgfVxuICAuc2VsZWN0IHtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDM3cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICBsaW5lLWhlaWdodDogMzdweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzdweCkge1xuICAubW9iaWxlLWhpZGUsIC5jdXJyZW50LXBhZ2UtbnVtYmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgOjpuZy1kZWVwIC50b29scyB7XG4gICAgZ2QtYnV0dG9uOm50aC1jaGlsZCgxKSA+IC5pY29uLWJ1dHRvbntcbiAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuaWNvbi1idXR0b257XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICB9XG4gICAgLmdkLW5hdi1zZWFyY2gtYnRuIHtcbiAgICAgIC5pY29uLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMzdweDtcbiAgICAgICAgd2lkdGg6IDM3cHg7XG4gICAgICB9XG4gICAgICAuYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "../../libs/viewer/src/lib/viewer-app.component.ts":
/*!**************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/viewer/src/lib/viewer-app.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ViewerAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerAppComponent", function() { return ViewerAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/viewer/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _viewer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewer.service */ "../../libs/viewer/src/lib/viewer.service.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _viewer_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewer-config.service */ "../../libs/viewer/src/lib/viewer-config.service.ts");






//import * as Hammer from 'hammerjs';
var ViewerAppComponent = /** @class */ (function () {
    function ViewerAppComponent(_viewerService, _modalService, configService, uploadFilesService, _navigateService, _zoomService, pagePreloadService, _renderPrintService, passwordService, _windowService, _loadingMaskService) {
        var _this = this;
        this._viewerService = _viewerService;
        this._modalService = _modalService;
        this._navigateService = _navigateService;
        this._zoomService = _zoomService;
        this._renderPrintService = _renderPrintService;
        this._windowService = _windowService;
        this._loadingMaskService = _loadingMaskService;
        this.title = 'viewer';
        this.files = [];
        this.countPages = 0;
        this.formatDisabled = !this.file;
        this.showThumbnails = false;
        this.browseFilesModal = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].BrowseFiles;
        this.showSearch = false;
        this._zoom = 100;
        //@ViewChildren('docPanel') docPanelComponent: QueryList<ElementRef>;
        this.fileWasDropped = false;
        configService.updatedConfig.subscribe(function (viewerConfig) {
            _this.viewerConfig = viewerConfig;
        });
        uploadFilesService.uploadsChange.subscribe(function (uploads) {
            if (uploads) {
                var i = void 0;
                for (i = 0; i < uploads.length; i++) {
                    _this._viewerService.upload(uploads.item(i), '', _this.viewerConfig.rewrite).subscribe(function (obj) {
                        _this.fileWasDropped ? _this.selectFile(obj.guid, '', '') : _this.selectDir('');
                    });
                }
            }
        });
        pagePreloadService.checkPreload.subscribe(function (page) {
            if (_this.viewerConfig.preloadPageCount !== 0) {
                for (var i = page; i < page + 2; i++) {
                    if (i > 0 && i <= _this.countPages && !_this.file.pages[i - 1].data) {
                        _this.preloadPages(i, i);
                    }
                }
            }
        });
        passwordService.passChange.subscribe(function (pass) {
            _this.selectFile(_this.credentials.guid, pass, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].PasswordRequired);
        });
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe(function (w) {
            _this.isDesktop = _windowService.isDesktop();
            _this.refreshZoom();
        });
    }
    ViewerAppComponent.prototype.ngOnInit = function () {
        if (this.viewerConfig.defaultDocument !== "") {
            this.isLoading = true;
            this.selectFile(this.viewerConfig.defaultDocument, "", "");
        }
    };
    ViewerAppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._loadingMaskService
            .onLoadingChanged
            .subscribe(function (loading) { return _this.isLoading = loading; });
        this.refreshZoom();
        // this.docPanelComponent.changes.subscribe((comps: QueryList<ElementRef>) =>
        // {
        //   comps.toArray().forEach((item) => {
        //     const hammer = new Hammer(item.nativeElement);
        //     hammer.get('pinch').set({ enable: true });
        //   });
        // });
    };
    Object.defineProperty(ViewerAppComponent.prototype, "rewriteConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.rewrite : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "zoomConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.zoom : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "pageSelectorConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.pageSelector : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "searchConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.search : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "thumbnailsConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.thumbnails : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "rotateConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.rotate : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "downloadConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.download : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "uploadConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.upload : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "printConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.print : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "browseConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.browse : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "htmlModeConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.htmlMode : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "saveRotateStateConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.saveRotateState : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "enableRightClickConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.enableRightClick : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "currentPage", {
        get: function () {
            return this._navigateService.currentPage;
        },
        enumerable: true,
        configurable: true
    });
    ViewerAppComponent.prototype.openModal = function (id) {
        this._modalService.open(id);
    };
    ViewerAppComponent.prototype.closeModal = function (id) {
        this._modalService.close(id);
    };
    ViewerAppComponent.prototype.selectDir = function ($event) {
        var _this = this;
        this._viewerService.loadFiles($event).subscribe(function (files) { return _this.files = files || []; });
    };
    ViewerAppComponent.prototype.selectFile = function ($event, password, modalId) {
        var _this = this;
        this.credentials = { guid: $event, password: password };
        this._viewerService.loadFile(this.credentials).subscribe(function (file) {
            _this.file = file;
            _this.formatDisabled = !_this.file;
            if (file) {
                if (file.pages && file.pages[0]) {
                    _this._pageHeight = file.pages[0].height;
                    _this._pageWidth = file.pages[0].width;
                    _this.options = _this.zoomOptions();
                    _this.refreshZoom();
                }
                var preloadPageCount = _this.viewerConfig.preloadPageCount;
                var countPages = file.pages ? file.pages.length : 0;
                if (preloadPageCount > 0) {
                    _this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                }
                _this._navigateService.countPages = countPages;
                _this._navigateService.currentPage = 1;
                _this.countPages = countPages;
            }
        });
        if (modalId) {
            this._modalService.close(modalId);
        }
        this.clearData();
    };
    ViewerAppComponent.prototype.preloadPages = function (start, end) {
        var _this = this;
        var _loop_1 = function (i) {
            this_1._viewerService.loadPage(this_1.credentials, i).subscribe(function (page) {
                _this.file.pages[i - 1] = page;
            });
        };
        var this_1 = this;
        for (var i = start; i <= end; i++) {
            _loop_1(i);
        }
    };
    ViewerAppComponent.prototype.upload = function ($event) {
        var _this = this;
        this._viewerService.upload(null, $event, this.rewriteConfig).subscribe(function () {
            _this.selectDir('');
        });
    };
    ViewerAppComponent.prototype.nextPage = function () {
        if (this.formatDisabled)
            return;
        this._navigateService.nextPage();
    };
    ViewerAppComponent.prototype.prevPage = function () {
        if (this.formatDisabled)
            return;
        this._navigateService.prevPage();
    };
    ViewerAppComponent.prototype.toLastPage = function () {
        if (this.formatDisabled)
            return;
        this._navigateService.toLastPage();
    };
    ViewerAppComponent.prototype.toFirstPage = function () {
        if (this.formatDisabled)
            return;
        this._navigateService.toFirstPage();
    };
    ViewerAppComponent.prototype.navigateToPage = function (page) {
        if (this.formatDisabled)
            return;
        this._navigateService.navigateTo(page);
    };
    ViewerAppComponent.prototype.zoomIn = function () {
        if (this.formatDisabled)
            return;
        if (this._zoom < 490) {
            this.zoom = this._zoom + 10;
        }
    };
    ViewerAppComponent.prototype.zoomOut = function () {
        if (this.formatDisabled)
            return;
        if (this._zoom > 30) {
            this.zoom = this._zoom - 10;
        }
    };
    ViewerAppComponent.prototype.fileDropped = function ($event) {
        this.fileWasDropped = $event;
    };
    ViewerAppComponent.prototype.ptToPx = function (pt) {
        //pt * 96 / 72 = px.
        return pt * 96 / 72;
    };
    ViewerAppComponent.prototype.getFitToWidth = function () {
        // Images and Excel-related files receiving dimensions in px from server
        var pageWidth = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageWidth : this.ptToPx(this._pageWidth);
        var pageHeight = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageHeight : this.ptToPx(this._pageHeight);
        var offsetWidth = pageWidth ? pageWidth : window.innerWidth;
        return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / window.innerWidth) : Math.round(window.innerWidth * 100 / offsetWidth);
    };
    ViewerAppComponent.prototype.getFitToHeight = function () {
        var pageWidth = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageWidth : this.ptToPx(this._pageWidth);
        var pageHeight = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageHeight : this.ptToPx(this._pageHeight);
        var windowHeight = (pageHeight > pageWidth) ? window.innerHeight - 100 : window.innerHeight + 100;
        var offsetHeight = pageHeight ? pageHeight : windowHeight;
        return (pageHeight > pageWidth) ? Math.round(windowHeight * 100 / offsetHeight) : Math.round(offsetHeight * 100 / windowHeight);
    };
    ViewerAppComponent.prototype.zoomOptions = function () {
        var width = this.getFitToWidth();
        var height = this.getFitToHeight();
        return this._zoomService.zoomOptions(width, height);
    };
    Object.defineProperty(ViewerAppComponent.prototype, "zoom", {
        get: function () {
            return this._zoom;
        },
        set: function (zoom) {
            this._zoom = zoom;
            this._zoomService.changeZoom(this._zoom);
        },
        enumerable: true,
        configurable: true
    });
    ViewerAppComponent.prototype.selectZoom = function ($event) {
        this.zoom = $event.value;
    };
    ViewerAppComponent.prototype.rotate = function (deg) {
        var _this = this;
        if (this.formatDisabled)
            return;
        var pageNumber = this._navigateService.currentPage;
        if (this.saveRotateStateConfig && this.file) {
            this._viewerService.rotate(this.credentials, deg, pageNumber).subscribe(function (data) {
                var e_1, _a;
                try {
                    for (var data_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                        var page = data_1_1.value;
                        var pageModel = _this.file.pages[page.pageNumber - 1];
                        if (_this.file && _this.file.pages && pageModel) {
                            _this.changeAngle(pageModel, page.angle);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        }
        else {
            var pageModel = this.file.pages[pageNumber - 1];
            if (this.file && this.file.pages && pageModel) {
                var angle = pageModel.angle + deg;
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
        }
    };
    ViewerAppComponent.prototype.changeAngle = function (page, angle) {
        page.angle = angle;
    };
    ViewerAppComponent.prototype.downloadFile = function () {
        if (this.formatDisabled)
            return;
        window.location.assign(this._viewerService.getDownloadUrl(this.credentials));
    };
    ViewerAppComponent.prototype.printFile = function () {
        var _this = this;
        if (this.formatDisabled)
            return;
        if (this.viewerConfig.preloadPageCount !== 0) {
            if (_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["FileUtil"].find(this.file.guid, false).format === "Portable Document Format") {
                this._viewerService.loadPrintPdf(this.credentials).subscribe(function (blob) {
                    var file = new Blob([blob], { type: 'application/pdf' });
                    _this._renderPrintService.changeBlob(file);
                });
            }
            else {
                this._viewerService.loadPrint(this.credentials).subscribe(function (data) {
                    _this.file.pages = data.pages;
                    _this._renderPrintService.changePages(_this.file.pages);
                });
            }
        }
        else {
            this._renderPrintService.changePages(this.file.pages);
        }
    };
    ViewerAppComponent.prototype.openThumbnails = function () {
        var _this = this;
        if (this.formatDisabled)
            return;
        if (this.showThumbnails) {
            this.showThumbnails = false;
            return;
        }
        if (this.viewerConfig.preloadPageCount === 0) {
            this.showThumbnails = true;
        }
        else {
            this._viewerService.loadThumbnails(this.credentials).subscribe(function (data) {
                _this.file.pages = data.pages;
                _this.showThumbnails = true;
            });
        }
    };
    ViewerAppComponent.prototype.clearData = function () {
        var e_2, _a;
        if (!this.file || !this.file.pages) {
            return;
        }
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                var page = _c.value;
                page.data = null;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    ViewerAppComponent.prototype.onRightClick = function ($event) {
        return this.enableRightClickConfig;
    };
    ViewerAppComponent.prototype.openSearch = function () {
        if (this.formatDisabled)
            return;
        this.showSearch = !this.showSearch;
    };
    // onPinchIn($event){
    //   this.zoomOut();
    // }
    // onPinchOut($event){
    //   this.zoomIn();
    // }
    ViewerAppComponent.prototype.refreshZoom = function () {
        this.formatIcon = this.file ? _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["FileUtil"].find(this.file.guid, false).icon : null;
        this.zoom = this._windowService.isDesktop() ? 100 : this.getFitToWidth();
    };
    ViewerAppComponent.ctorParameters = function () { return [
        { type: _viewer_service__WEBPACK_IMPORTED_MODULE_2__["ViewerService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ModalService"] },
        { type: _viewer_config_service__WEBPACK_IMPORTED_MODULE_4__["ViewerConfigService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["UploadFilesService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["NavigateService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ZoomService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["PagePreloadService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["RenderPrintService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["PasswordService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["WindowService"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["LoadingMaskService"] }
    ]; };
    ViewerAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-viewer',
            template: __webpack_require__(/*! raw-loader!./viewer-app.component.html */ "../../node_modules/raw-loader/index.js!../../libs/viewer/src/lib/viewer-app.component.html"),
            styles: [__webpack_require__(/*! ./viewer-app.component.less */ "../../libs/viewer/src/lib/viewer-app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_viewer_service__WEBPACK_IMPORTED_MODULE_2__["ViewerService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ModalService"],
            _viewer_config_service__WEBPACK_IMPORTED_MODULE_4__["ViewerConfigService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["UploadFilesService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["NavigateService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ZoomService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["PagePreloadService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["RenderPrintService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["PasswordService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["WindowService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["LoadingMaskService"]])
    ], ViewerAppComponent);
    return ViewerAppComponent;
}());



/***/ }),

/***/ "../../libs/viewer/src/lib/viewer-config.service.ts":
/*!***************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/viewer/src/lib/viewer-config.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: ViewerConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerConfigService", function() { return ViewerConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/viewer/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _viewer_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewer-config */ "../../libs/viewer/src/lib/viewer-config.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");






var ViewerConfigService = /** @class */ (function () {
    function ViewerConfigService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._viewerConfig = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](new _viewer_config__WEBPACK_IMPORTED_MODULE_2__["ViewerConfig"]());
        this._updatedConfig = this._viewerConfig.asObservable();
    }
    Object.defineProperty(ViewerConfigService.prototype, "updatedConfig", {
        get: function () {
            return this._updatedConfig;
        },
        enumerable: true,
        configurable: true
    });
    ViewerConfigService.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var configEndpoint = _this._config.getConfigEndpoint(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].VIEWER_APP);
            _this._http.get(configEndpoint, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson).toPromise().then(function (response) {
                var viewerConfig = response;
                _this._viewerConfig.next(viewerConfig);
                resolve();
            }).catch(function (response) {
                reject("Could not load viewer config: " + JSON.stringify(response));
            });
        });
    };
    ViewerConfigService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    ViewerConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], ViewerConfigService);
    return ViewerConfigService;
}());



/***/ }),

/***/ "../../libs/viewer/src/lib/viewer-config.ts":
/*!*******************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/viewer/src/lib/viewer-config.ts ***!
  \*******************************************************************************************/
/*! exports provided: ViewerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerConfig", function() { return ViewerConfig; });
var ViewerConfig = /** @class */ (function () {
    function ViewerConfig() {
    }
    return ViewerConfig;
}());



/***/ }),

/***/ "../../libs/viewer/src/lib/viewer.module.ts":
/*!*******************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/viewer/src/lib/viewer.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: initializeApp, ViewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return initializeApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerModule", function() { return ViewerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/viewer/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _viewer_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewer-app.component */ "../../libs/viewer/src/lib/viewer-app.component.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _viewer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewer.service */ "../../libs/viewer/src/lib/viewer.service.ts");
/* harmony import */ var _viewer_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viewer-config.service */ "../../libs/viewer/src/lib/viewer-config.service.ts");
/* harmony import */ var _thumbnails_thumbnails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./thumbnails/thumbnails.component */ "../../libs/viewer/src/lib/thumbnails/thumbnails.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../libs/viewer/node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");











function initializeApp(viewerConfigService) {
    var result = function () { return viewerConfigService.load(); };
    return result;
}
var ViewerModule = /** @class */ (function () {
    function ViewerModule() {
    }
    ViewerModule_1 = ViewerModule;
    ViewerModule.forRoot = function (apiEndpoint) {
        _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["Api"].DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: ViewerModule_1
        };
    };
    var ViewerModule_1;
    ViewerModule = ViewerModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _viewer_app_component__WEBPACK_IMPORTED_MODULE_4__["ViewerAppComponent"],
                _thumbnails_thumbnails_component__WEBPACK_IMPORTED_MODULE_8__["ThumbnailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["CommonComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"]
            ],
            exports: [
                _viewer_app_component__WEBPACK_IMPORTED_MODULE_4__["ViewerAppComponent"],
                _thumbnails_thumbnails_component__WEBPACK_IMPORTED_MODULE_8__["ThumbnailsComponent"],
                _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["CommonComponentsModule"]
            ],
            providers: [
                _viewer_service__WEBPACK_IMPORTED_MODULE_6__["ViewerService"],
                _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
                _viewer_config_service__WEBPACK_IMPORTED_MODULE_7__["ViewerConfigService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptorService"],
                    multi: true
                },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                    useFactory: initializeApp,
                    deps: [_viewer_config_service__WEBPACK_IMPORTED_MODULE_7__["ViewerConfigService"]], multi: true
                }
            ]
        })
    ], ViewerModule);
    return ViewerModule;
}());



/***/ }),

/***/ "../../libs/viewer/src/lib/viewer.service.ts":
/*!********************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/viewer/src/lib/viewer.service.ts ***!
  \********************************************************************************************/
/*! exports provided: ViewerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerService", function() { return ViewerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../libs/viewer/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");




var ViewerService = /** @class */ (function () {
    function ViewerService(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    ViewerService.prototype.loadFiles = function (path) {
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_FILE_TREE, { 'path': path }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    ViewerService.prototype.loadFile = function (credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_DOCUMENT_DESCRIPTION, credentials, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    ViewerService.prototype.upload = function (file, url, rewrite) {
        var formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].UPLOAD_DOCUMENTS, formData);
    };
    ViewerService.prototype.loadPage = function (credentials, page) {
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'page': page
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    ViewerService.prototype.rotate = function (credentials, angle, page) {
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].ROTATE_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'pages': [page],
            'angle': angle
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    ViewerService.prototype.getDownloadUrl = function (credentials) {
        return this._config.getViewerApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
    };
    ViewerService.prototype.loadPrint = function (credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_PRINT, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    ViewerService.prototype.loadPrintPdf = function (credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_PRINT_PDF, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJsonResponseTypeBlob);
    };
    ViewerService.prototype.loadThumbnails = function (credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_THUMBNAILS, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    ViewerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    ViewerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], ViewerService);
    return ViewerService;
}());



/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/comparison/src/lib/add-file-panel/add-file-panel.component.html":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/add-file-panel/add-file-panel.component.html ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"upload-wrapper\" *ngIf=\"isEmpty()\">\n    <gd-button [icon]=\"'arrow-right'\" [tooltip]=\"'Upload file'\" (click)=\"uploadUrl(url.value)\" [disabled]=\"uploadDisabled\" ></gd-button>\n    <input class=\"url-input\" #url (keyup)=\"checkDisabled(url.value)\" (keyup.enter)=\"uploadUrl(url.value)\" placeholder=\"http://\">\n  </div>\n  <fa-icon *ngIf=\"!isEmpty()\" [icon]=\"['fas',getFormatIcon()]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon()\"></fa-icon>\n  <span *ngIf=\"!isEmpty()\" class=\"compare-file-name\">{{fileName}}</span>\n  <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Open file'\" (click)=\"openModal()\" *ngIf=\"isEmpty()\"></gd-button>\n  <gd-button [icon]=\"'times'\" [tooltip]=\"'Close file'\" (click)=\"cleanFile()\" *ngIf=\"!isEmpty()\"></gd-button>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/comparison/src/lib/comparison-app.component.html":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/comparison-app.component.html ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<gd-loading-mask></gd-loading-mask>-->\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"column\">\n      <div class=\"top-panel\">\n        <gd-logo [logo]=\"'comparison'\" icon=\"copy\"></gd-logo>\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'play'\" [tooltip]=\"'Compare'\" [disabled]=\"!file.get(first) || !file.get(second)\"\n                     (click)=\"compare()\"></gd-button>\n          <gd-button [icon]=\"'download'\" [tooltip]=\"'Download'\" [disabled]=\"!result\" (click)=\"download()\"></gd-button>\n          <div class=\"tabs-wrapper\">\n            <div class=\"tabs\">\n              <gd-tabs>\n                <gd-tab [id]=\"filesTab\" tabTitle=\"Documents\" [icon]=\"'copy'\" [active]=\"true\" [content]=\"false\">\n                </gd-tab>\n                <gd-tab [id]=\"resultTab\" tabTitle=\"Result\" [icon]=\"'poll'\" [disabled]=\"resultTabDisabled\" [content]=\"false\">\n                </gd-tab>\n              </gd-tabs>\n            </div>\n          </div>\n        </gd-top-toolbar>\n      </div>\n      <div class=\"files-panel\" *ngIf=\"activeTab === filesTab\">\n        <div class=\"upload-compare-file\">\n          <gd-add-file-panel class=\"compare-file\"\n                             [fileName]=\"firstFileName\"\n                             [panel]=\"first\"\n                             (active)=\"activePanel = $event\"\n                             (urlForUpload)=\"upload($event)\"\n                             (cleanPanel)=\"clearFile(first)\">\n          </gd-add-file-panel>\n          <gd-upload-file-panel\n                                [panel]=\"first\"\n                                (active)=\"activePanel = $event\"\n                                *ngIf=\"!firstFileName && !loadingFirstPanel\">\n          </gd-upload-file-panel>\n          <div *ngIf=\"loadingFirstPanel\" class=\"loader\">\n            <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n            <span>Loading... Please wait.</span>\n          </div>\n          <gd-document class=\"gd-document\"\n                       *ngIf=\"file.get(first)\"\n                       [file]=\"file.get(first)\"\n                       [mode]=\"false\"\n                       [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\" gdRenderPrint\n                       [htmlMode]=\"false\">\n          </gd-document>\n        </div>\n        <div class=\"upload-compare-file\">\n          <gd-add-file-panel class=\"compare-file\"\n                             [fileName]=\"secondFileName\"\n                             [panel]=\"second\"\n                             (active)=\"activePanel = $event\"\n                             (urlForUpload)=\"upload($event)\"\n                             (cleanPanel)=\"clearFile(second)\">\n          </gd-add-file-panel>\n          <gd-upload-file-panel [panel]=\"second\"\n                                (active)=\"activePanel = $event\"\n                                *ngIf=\"!secondFileName && !loadingSecondPanel\">\n          </gd-upload-file-panel>\n          <div *ngIf=\"loadingSecondPanel\" class=\"loader\">\n            <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n            <span>Loading... Please wait.</span>\n          </div>\n          <gd-document class=\"gd-document\"\n                       *ngIf=\"file.get(second)\"\n                       [file]=\"file.get(second)\"\n                       [mode]=\"false\"\n                       [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\" gdRenderPrint\n                       [htmlMode]=\"false\">\n          </gd-document>\n        </div>\n      </div>\n      <div class=\"result-panel\" *ngIf=\"activeTab === resultTab\">\n        <div  class=\"loader\" *ngIf=\"!result\">\n          <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n          <span>Loading... Please wait.</span>\n        </div>\n        <gd-result-document\n          class=\"gd-document\"\n          *ngIf=\"result\"\n          [file]=\"result\"\n          [mode]=\"false\"\n          [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\"\n          gdRenderPrint\n          [htmlMode]=\"false\"\n          gdScrollable>\n        </gd-result-document>\n      </div>\n    </div>\n    <gd-side-panel (hideSidePanel)=\"hideSidePanel($event)\"\n                   *ngIf=\"result && activeTab === resultTab\"\n                   [title]=\"'Differences'\"\n                   [icon]=\"'info-circle'\">\n      <gd-differences\n        [changes]=\"result.changes\">\n      </gd-differences>\n    </gd-side-panel>\n  </div>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\"\n                         [files]=\"files\"\n                         (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal, activePanel)\">\n  </gd-browse-files-modal>\n  <gd-error-modal></gd-error-modal>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/comparison/src/lib/difference-highlight/difference-highlight.component.html":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/difference-highlight/difference-highlight.component.html ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"gd-difference-{{change.type}} highlight-difference\"\n  (clickOutside)=\"close($event)\"\n  [clickOutsideEnabled]=\"active\"\n  (click)=\"highlight(change.id)\"\n  [ngClass]=\"{'active': active}\"\n  [ngStyle]=\"{\n    width: change.normalized.width + '%',\n    height: change.normalized.height + '%',\n    left: change.normalized.x + '%',\n    top: change.normalized.y + '%'\n  }\"\n  data-id=\"{{change.id}}\">\n\n</div>\n\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/comparison/src/lib/difference/difference.component.html":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/difference/difference.component.html ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"gd-difference\" [ngClass]=\"{'active': active}\">\n  <div [ngSwitch]=\"change.type\" class=\"gd-difference-title-wrapper\">\n    <ng-container *ngSwitchCase='1'>\n      <fa-icon class=\"fas fa-pencil-alt\" [icon]=\"['fas','pencil-alt']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text edited</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='2'>\n      <fa-icon class=\"fas fa-arrow-right\" [icon]=\"['fas','arrow-right']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text added</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='3'>\n      <fa-icon class=\"fas fa-times\" [icon]=\"['fas','trash']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text deleted</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='4'>\n      <fa-icon class=\"fas fa-arrow-right\" [icon]=\"['fas','arrow-right']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text added</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='6'>\n      <fa-icon class=\"fas fa-pencil-alt\" [icon]=\"['fas','pencil-alt']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Style changed</div>\n        <div class=\"gd-differentce-comment\">\n          <ng-container *ngFor=\"let style of change.styleChanges\" [ngSwitch]=\"style.changedProperty\">\n            <div *ngSwitchCase=\"'HighlightColor'\">\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.oldValue)\"></span>\n              &rarr;\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.newValue)\"></span>\n              <span class=\"property\">Highlight Color</span>\n            </div>\n            <div *ngSwitchCase=\"'Color'\">\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.oldValue)\"></span>\n              &rarr;\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.newValue)\"></span>\n              <span class=\"property\">Color</span>\n            </div>\n            <div *ngSwitchCase=\"'Size'\">\n              {{style.oldValue}} &rarr; {{style.newValue}}\n              <span class=\"property\">Font size</span>\n            </div>\n            <div *ngSwitchCase=\"'Bold'\">\n              <span [style.fontWeight]=\"style.oldValue ? 'bold' : ''\">{{change.text}}</span> &rarr; <span [style.fontWeight]=\"style.newValue ? 'bold' : ''\">{{change.text}}</span>\n              <span class=\"property\">Bold</span>\n            </div>\n            <div *ngSwitchCase=\"'Italic'\">\n              <span [style.fontStyle]=\"style.oldValue ? 'italic' : ''\">{{change.text}}</span> &rarr; <span [style.fontStyle]=\"style.newValue ? 'italic' : ''\">{{change.text}}</span>\n              <span class=\"property\">Italic</span>\n            </div>\n            <div *ngSwitchCase=\"'cS'\">\n              <span [style.textDecoration]=\"style.oldValue === 'SINGLE' ? 'underline' : ''\">{{change.text}}</span> &rarr; <span [style.textDecoration]=\"style.newValue === 'SINGLE' ? 'underline' : ''\">{{change.text}}</span>\n              <span class=\"property\">Underline</span>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </ng-container>\n    <div class=\"gd-difference-page\">Page {{change.pageInfo.id + 1}}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/comparison/src/lib/differences/differences.component.html":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/differences/differences.component.html ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let change of changes; let i = index\" data-id=\"{{i}}\" (click)=\"highlightDifference(change.id,change.pageInfo.id,$event)\">\n  <gd-comparison-difference [change]=\"change\"></gd-comparison-difference>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/comparison/src/lib/result-document/result-document.component.html":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/result-document/result-document.component.html ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\">\n  <div class=\"panzoom\">\n    <div [ngClass]=\"'page'\" *ngFor=\"let page of file?.pages\"\n         [style.height]=\"getDimensionWithUnit(page.height)\"\n         [style.width]=\"getDimensionWithUnit(page.width)\"\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\n      <div class=\"highlights\">\n        <gd-difference-highlight\n          *ngFor=\"let change of page?.changes\"\n          [change]=\"change\">\n        </gd-difference-highlight>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/comparison/src/lib/upload-file-panel/upload-file-panel.component.html":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/upload-file-panel/upload-file-panel.component.html ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gd-drag-n-drop-wrap\" id=\"gd-dropZone\" gdDnd (dropped)=\"dropped($event)\">\n  <div class=\"gd-drag-n-drop-icon\">\n    <fa-icon [icon]=\"['far','folder-open']\" size=\"5x\" (click)=\"openModal()\"></fa-icon>\n  </div>\n  <h2>Drop your document here or click to select a file</h2>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/conversion/src/lib/conversion-app.component.html":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/conversion/src/lib/conversion-app.component.html ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'conversion'\" [icon]=\"'exchange-alt'\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-button [icon]=\"'exchange-alt'\" [tooltip]=\"'Convert'\" [disabled]=\"convertAllUnavailable()\"\n      (click)=\"convertAll()\"></gd-button>\n\n    </gd-top-toolbar>\n  </div>\n\n  <gd-init-state [icon]=\"'exchange-alt'\" [text]=\"'Drop file here to upload'\" *ngIf=\"conversionItems.length == 0\" (fileDropped)=\"fileDropped($event)\">\n      Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n      Or drop file here\n  </gd-init-state>\n\n  <gd-conversion-queue [items]=\"conversionItems\" (selectedItemToConvert)=\"convertSingleItem($event)\"></gd-conversion-queue>\n\n  <gd-conversion-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                                    [uploadConfig]=\"uploadConfig\" (selectAll)=\"selectAllItems($event)\"></gd-conversion-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/conversion/src/lib/conversion-browse-files-modal/conversion-browse-files-modal.component.html":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/conversion/src/lib/conversion-browse-files-modal/conversion-browse-files-modal.component.html ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\n      <div class=\"gd-drag-n-drop-icon\">\n        <fa-icon [icon]=\"['fas','cloud-download-alt']\" size=\"5x\" aria-hidden=\"true\"></fa-icon>\n      </div>\n      <h2>Drag &amp; Drop your files here</h2>\n    </div>\n\n    <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\n             (change)=\"handleFileInput($event.target.files)\">\n\n      <div class=\"select-all\">\n        <input type=\"checkbox\" class=\"gd-select-all gd-checkbox\" [checked]=\"allItemsSelected()\"\n               (change)=\"selectAllItems($event.target.checked);\">\n      </div>\n      <div class=\"context\">\n        <div class=\"context-actions\">\n          <gd-drop-down>\n            <gd-drop-down-toggle>\n              <gd-button [icon]=\"'plus'\" [disabled]=\"!anyItemSelected()\" [intent]=\"'primary'\" [iconOnly]=\"false\">\n                {{getLabelString()}}\n              </gd-button>\n            </gd-drop-down-toggle>\n            <gd-drop-down-items>\n              <gd-drop-down-item (selected)=\"selectFormat(item, null)\" *ngFor=\"let item of dynamicOptions\">\n                <fa-icon [icon]=\"['far', item.icon]\"></fa-icon>\n                <div class=\"text\">{{item.name}}</div>\n                <div *ngIf=\"item.warning\" class=\"gd-type-warning\"\n                     title=\"1 selected file(s) can’t be converted to {{item.name}} format\">\n                  <fa-icon [icon]=\"['fas','exclamation-triangle']\"></fa-icon>\n                </div>\n              </gd-drop-down-item>\n            </gd-drop-down-items>\n          </gd-drop-down>\n\n          <gd-drop-down>\n            <gd-drop-down-toggle>\n              <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\n                Upload file\n              </gd-button>\n            </gd-drop-down-toggle>\n            <gd-drop-down-items>\n              <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\n                <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\n                <div class=\"text\">{{item.name}}</div>\n              </gd-drop-down-item>\n            </gd-drop-down-items>\n          </gd-drop-down>\n        </div>\n        <div class=\"context-panel\">\n          <div class=\"upload-url\" *ngIf=\"showUploadUrl\">\n            <input class=\"url-input\" placeholder=\"http://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n            <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n              <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-header\">\n        <div class=\"header-name\">Document</div>\n        <div class=\"header-size\">Size</div>\n      </div>\n      <div class=\"list-files-body\">\n        <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n            <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n          </div>\n          <div class=\"go-up-dots\">...</div>\n        </div>\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n          <div class=\"gd-file-checkbox\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\n            <input type=\"checkbox\" *ngIf=\"file && !file.isDirectory && !file.directory\" [checked]=\"file.selected\"\n                   (change)=\"selectSingleItem($event.target.checked, file);\" class=\"gd-checkbox gd-checkbox-single\">\n          </div>\n          <div class=\"file-description\">\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n            <div class=\"file-name-format\">\n              <div class=\"file-name\" [ngClass]=\"{'gd-folder-name' : file.isDirectory || file.directory}\">{{file?.name}}</div>\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\n            </div>\n          </div>\n          <div class=\"file-size\">{{getSize(file?.size)}}</div>\n          <div class=\"file-format-select\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\n            <gd-drop-down *ngIf=\"!(file.isDirectory || file.directory)\" [placement]=\"{h:'left',v:'center'}\">\n              <gd-drop-down-toggle>\n                <gd-button [icon]=\"'plus'\">\n                </gd-button>\n              </gd-drop-down-toggle>\n              <gd-drop-down-items>\n                <gd-drop-down-item (selected)=\"selectFormat(item, file)\" *ngFor=\"let item of formatOptions(file.conversionTypes)\">\n                  <fa-icon [icon]=\"['far', item.icon]\"></fa-icon>\n                  <div class=\"text\">{{item.name}}</div>\n                </gd-drop-down-item>\n              </gd-drop-down-items>\n            </gd-drop-down>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n      <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/conversion/src/lib/conversion-item/conversion-item.component.html":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/conversion/src/lib/conversion-item/conversion-item.component.html ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"item\" class=\"gd-convert-item\">\n  <div class=\"gd-convert-remove\" (click)=\"removeItemFromQueue($event, item)\">\n    <span>&times;</span>\n  </div>\n  <div class=\"gd-filequeue-name disabled\">\n    <fa-icon [icon]=\"['far', item.sourceIcon]\" [class]=\"'ng-fa-icon'\"></fa-icon>\n    <div class=\"gd-file-name gd-queue-name\">{{item.name}}\n      <div class=\"gd-file-format\">{{item.sourceFormatName}}</div>\n      <div class=\"gd-file-format mobile\">\n        <fa-icon [icon]=\"['fas','arrow-right']\"></fa-icon> \n        <fa-icon [icon]=\"['fas', item.destinationIcon]\" [class]=\"'ng-fa-icon'\" [ngClass]=\"['fa-' + item.destinationIcon]\"></fa-icon>{{item.destinationFileName}}\n      </div>\n    </div>\n  </div>\n  <div class=\"gd-file-size gd-queue-size\">{{item.sizeString}}</div>\n  <div class=\"gd-convert-status\">\n      <fa-icon class=\"gd-conversion-pending\" [icon]=\"['far','clock']\" [hidden]=\"item.converted || item.converting\"></fa-icon>\n      <fa-icon class=\"gd-conversion-progress\" [icon]=\"['fas','circle-notch']\" [spin]=\"true\" [hidden]=\"!item.converting\"></fa-icon>\n      <fa-icon class=\"gd-conversion-complete\" [icon]=\"['fas','check']\" [hidden]=\"!item.converted || item.converting\"></fa-icon>\n  </div>\n  <div class=\"gd-filequeue-name disabled gd-destination-file\">\n      <fa-icon [icon]=\"['far', item.destinationIcon]\" [class]=\"'ng-fa-icon'\" [ngClass]=\"[item.converted ? 'fa-' + item.destinationIcon : '']\"></fa-icon>\n    <div class=\"gd-file-name gd-queue-name\">{{item.destinationFileName}}<div class=\"gd-file-format\">{{item.destinationFormatName}}</div></div>\n  </div>\n  <div (click)=\"convert($event, item)\" class=\"gd-convert-single\" \n      [ngClass]=\"{'disabled': item.converting}\" [hidden]=\"item.converted\">\n      <fa-icon [icon]=\"['fas','exchange-alt']\"></fa-icon>\n  </div>\n  <div (click)=\"convert($event, item)\" class=\"gd-convert-single mobile\" \n    [ngClass]=\"{'disabled': item.converting}\" *ngIf=\"!item.converted && !item.converting\">\n    <fa-icon [icon]=\"['fas','exchange-alt']\"></fa-icon>\n  </div>\n  <fa-icon class=\"gd-conversion-progress mobile\" [icon]=\"['fas','circle-notch']\" [spin]=\"true\" *ngIf=\"item.converting\"></fa-icon>\n  <div (click)=\"downloadFile(item)\" class=\"gd-download-single\" [hidden]=\"!item.converted\">\n    <fa-icon [icon]=\"['fas','download']\"></fa-icon>\n  </div>\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/conversion/src/lib/conversion-queue/conversion-queue.component.html":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/conversion/src/lib/conversion-queue/conversion-queue.component.html ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"gd-convert-queue\">\n  <div class=\"gd-queue-header\">\n    <div class=\"gd-placeholder\"></div>\n    <div>Source</div>\n    <div>Size</div>\n    <div>State</div>\n    <div>Target</div>\n    <div class=\"gd-queue-last-placeholder\"></div>\n  </div>\n  <div *ngFor=\"let item of items\">\n      <gd-conversion-item [item]=\"item\"></gd-conversion-item>\n  </div>\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/editor/src/lib/create.document-modal/create.document-modal.component.html":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/editor/src/lib/create.document-modal/create.document-modal.component.html ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gd-modal id=\"gd-create-document\" [title]=\"'Save document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-create-document-section\" class=\"tab-slider-body\">\n    <div class=\"gd-create-wrap\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" [value]=\"!file ? '' : file.guid.replace(FILE_NAME_REGEX, '').split('.')[0]\" #name autofocus/>\n      <label for=\"format\">Format</label>\n      <gd-select id=\"format\" [disabled]=\"false\" [options]=\"formats\" (selected)=\"selectFormat($event)\" [showSelected]=\"{name : format, value : format}\" class=\"gd-select-format\"></gd-select>\n      <gd-button [icon]=\"'save'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"save(name.value)\">Save</gd-button>\n    </div>\n  </section>\n</gd-modal>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/editor/src/lib/editor-app.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/editor/src/lib/editor-app.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\" (click)=\"hideAll($event)\">\n  <gd-tabbed-toolbars [logo]=\"'editor'\" [icon]=\"'pen-square'\">\n    <gd-tabs>\n      <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'file'\" [tooltip]=\"'Create document'\" (click)=\"createFile()\"\n                     *ngIf=\"createNewFileConfig\"></gd-button>\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                     *ngIf=\"browseConfig\"></gd-button>\n          <gd-button [disabled]=\"downloadDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                     (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                     *ngIf=\"printConfig\" ></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save File'\" (click)=\"save()\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'pencil-alt'\" [iconClass]=\"'save-as-button-icon'\" [tooltip]=\"'Save File As'\" (click)=\"openSave()\">\n            <fa-icon [icon]=\"['fas','save']\" class=\"save-button\" size=\"xs\"></fa-icon>\n          </gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab [tabTitle]=\"'Formatting'\" [icon]=\"'edit'\" [id]=\"'2'\">\n        <gd-top-toolbar class=\"toolbar-panel\">\n\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Undo'\"\n                     (click)=\"toggleUndo()\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Redo'\"\n                     (click)=\"toggleRedo()\"></gd-button>\n          <gd-select class=\"format-select\" [disabled]=\"formatDisabled\" [options]=\"fontOptions\"\n                     (selected)=\"selectFont($event)\"\n                     [showSelected]=\"{name : formatting.font, value : formatting.font}\"></gd-select>\n          <gd-select class=\"format-select\" [disabled]=\"formatDisabled\" [options]=\"fontSizeOptions\"\n                     (selected)=\"selectFontSize($event)\"\n                     [showSelected]=\"{name : formatting.fontSize + 'px', value : formatting.fontSize}\"></gd-select>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'bold'\" [tooltip]=\"'Bold'\"\n                     (click)=\"toggleBold($event)\" [toggle]=\"formatting.bold\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'italic'\" [tooltip]=\"'Italic'\"\n                     (click)=\"toggleItalic($event)\" [toggle]=\"formatting.italic\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'underline'\" [tooltip]=\"'Underline'\"\n                     (click)=\"toggleUnderline($event)\" [toggle]=\"formatting.underline\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'strikethrough'\" [tooltip]=\"'Strike out'\"\n                     (click)=\"toggleStrikeout($event)\" [toggle]=\"formatting.strikeout\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-center'\" [tooltip]=\"'Align center'\"\n                     (click)=\"toggleAlign('center')\" [toggle]=\"formatting.align == 'center' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-justify'\" [tooltip]=\"'Align full'\"\n                     (click)=\"toggleAlign('full')\" [toggle]=\"formatting.align == 'full' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-right'\" [tooltip]=\"'Align right'\"\n                     (click)=\"toggleAlign('right')\" [toggle]=\"formatting.align == 'right' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-left'\" [tooltip]=\"'Align left'\"\n                     (click)=\"toggleAlign('left')\" [toggle]=\"formatting.align == 'left' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ul'\" [tooltip]=\"'Add Unordered List'\"\n                     (click)=\"toggleList('unordered')\" [toggle]=\"formatting.list == 'unordered' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ol'\" [tooltip]=\"'Add Ordered List'\"\n                     (click)=\"toggleList('ordered')\" [toggle]=\"formatting.list == 'ordered' ? true : false\"></gd-button>\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'fill'\" [tooltip]=\"'Background color'\"\n                     (click)=\"toggleColorPicker(true)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.bgColor\"></div>\n          </gd-button>\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'font'\" [tooltip]=\"'Color'\" (click)=\"toggleColorPicker(false)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.color\"></div>\n          </gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n    </gd-tabs>\n  </gd-tabbed-toolbars>\n  <gd-color-picker *ngIf=\"bgColorPickerShow || colorPickerShow\"\n                   [className]=\"'palette ' + (bgColorPickerShow ? 'background-color-picker' : 'color-picker')\"\n                   (selectedColor)=\"selectColor($event)\"></gd-color-picker>\n  <div class=\"doc-panel\" *ngIf=\"file\">\n    <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"true\" [htmlMode]=\"true\"\n                 [preloadPageCount]=\"0\" gdFormatting gdRenderPrint gdScrollable>\n    </gd-document>\n  </div>\n  <gd-init-state [icon]=\"'pen-square'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n      Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n      Or drop file here\n  </gd-init-state>\n  <gd-browse-files-modal\n    (closing)=\"onCloseModal($event)\"\n    (urlForUpload)=\"upload($event)\"\n    [files]=\"files\"\n    (selectedDirectory)=\"selectDir($event)\"\n    (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n    [uploadConfig]=\"uploadConfig\"\n  ></gd-browse-files-modal>\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-create-document-modal (closing)=\"onCloseModal($event)\" [file]=\"credentials\" (savingFile)=\"saveFile($event)\"></gd-create-document-modal>\n  <gd-success-modal></gd-success-modal>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/canvas/canvas.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/canvas/canvas.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bc-paint-container\">\n  <div class=\"bc-paint-canvas-container\">\n    <canvas #canvas (mousedown)=\"onMouseDown($event)\" (mousemove)=\"onMouseMove($event)\"\n            (mouseup)=\"onMouseUp($event)\" (mouseleave)=\"onMouseUp($event)\" [width]=\"getWidth()\"\n            [height]=\"getHeight()\" (panstart)=\"onMouseDown($event)\" (panmove)=\"onMouseMove($event)\"\n            (panend)=\"onMouseUp($event)\"></canvas>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/context-menu/context-menu.component.html":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/context-menu/context-menu.component.html ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gd-context-menu\" [ngStyle]=\"{transform: 'translateX(' + translation + 'px)'}\"\n     [ngClass]=\"topPosition > 10 ? 'gd-context-menu-top' : 'gd-context-menu-bottom'\">\n  <gd-button [icon]=\"'arrows-alt'\" [class]=\"'ng-fa-icon icon arrows'\" [iconSize]=\"'sm'\"></gd-button>\n  <gd-text-menu *ngIf=\"textMenu\" [blur]=\"isMobile\" [color]=\"formatting.color\" [bold]=\"formatting.bold\"\n                [font]=\"formatting.font\" [fontSize]=\"formatting.fontSize\" [italic]=\"formatting.italic\"\n                [underline]=\"formatting.underline\" (outBold)=\"toggleBold($event)\"\n                (outUnderline)=\"toggleUnderline($event)\" (outItalic)=\"toggleItalic($event)\"\n                (outColor)=\"selectColor($event)\" (outFont)=\"selectFont($event)\"\n                (outFontSize)=\"selectFontSize($event)\"></gd-text-menu>\n  <gd-button [icon]=\"lock ? 'lock' : 'unlock'\" [class]=\"'ng-fa-icon icon'\" (click)=\"toggleLock()\"></gd-button>\n  <gd-button [icon]=\"'copy'\" [class]=\"'ng-fa-icon icon'\" (click)=\"onCopySign()\"></gd-button>\n  <gd-button [icon]=\"'trash'\" [class]=\"'ng-fa-icon icon'\" [iconSize]=\"'sm'\" (click)=\"deleteSign()\"></gd-button>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/hand-modal/hand-modal.component.html":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/hand-modal/hand-modal.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gd-modal [id]=\"'gd-draw-hand-signature'\" [title]=\"'Draw signature'\">\n  <div class=\"paint-body\">\n    <div class=\"bc-paint-header\">\n      <div class=\"bc-paint-palette\">\n        <gd-button name=\"button\" [icon]=\"'fill'\" [tooltip]=\"'Pencil color'\"\n                   (click)=\"toggleColorPicker($event)\">\n          <div class=\"bg-color-pic\" [style.background-color]=\"selectedColor\"></div>\n        </gd-button>\n        <gd-color-picker [isOpen]=\"colorPickerShow\" (closeOutside)=\"closePicker($event)\"\n                         [className]=\"'palette'\"\n                         (selectedColor)=\"selectColor($event)\"></gd-color-picker>\n      </div>\n      <div class=\"bc-paint-export\" (click)=\"saveSign(canvasComponent)\">\n        <fa-icon [icon]=\"['fa','save']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n        <span class=\"save-button\">Save</span>\n      </div>\n    </div>\n    <div class=\"gd-draw-image\">\n      <gd-canvas #canvasComponent [color]=\"selectedColor\"></gd-canvas>\n    </div>\n  </div>\n</gd-modal>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/new-bar-qr-code/new-bar-qr-code.component.html":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/new-bar-qr-code/new-bar-qr-code.component.html ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gd-qr-container\">\n  <div class=\"gd-qr-preview-container\">\n    <img class=\"gd-signature-thumbnail-image\" [attr.src]=\"getData()\" alt *ngIf=\"encodedImage\">\n    <div class=\"gd-empty-code\" *ngIf=\"!encodedImage\">\n      <fa-icon [icon]=\"['fa',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    </div>\n  </div>\n  <div class=\"new-signature-input-group\">\n    <input type=\"text\" class=\"gd-qr-property\" #text (keyup)=\"saveTemp(text.value)\" (keyup.enter)=\"addSign(text.value)\"\n           placeholder=\"{{name}}\" id=\"text-input\"/>\n    <div class=\"gd-add-optical\" [ngClass]=\"text.value ? 'active' : 'inactive'\" (click)=\"addSign(text.value)\">\n      <fa-icon [icon]=\"['fa','plus']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/signature-app.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature-app.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\" (click)=\"hideAll($event)\">\n  <gd-tabbed-toolbars [logo]=\"'signature'\" [icon]=\"'pen-square'\">\n    <gd-tabs>\n      <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\n        <div class=\"toolbar-panel\">\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                     *ngIf=\"browseConfig\"></gd-button>\n\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                     (click)=\"downloadFile()\" *ngIf=\"downloadConfig\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"sign()\"></gd-button>\n\n        </div>\n      </gd-tab>\n      <gd-tab [tabTitle]=\"'Signatures'\" [icon]=\"'signature'\" [id]=\"'2'\">\n        <div class=\"toolbar-panel\">\n          <div *ngFor=\"let signatureType of signatureTypes\">\n            <gd-signature-tab [disabled]=\"!file\" *ngIf=\"isVisible(signatureType.id)\"\n                              [icon]=\"signatureType.icon\" (activeTab)=\"activeTab($event)\"\n                              [id]=\"signatureType.id\" [tooltip]=\"signatureType.name\">\n            </gd-signature-tab>\n          </div>\n        </div>\n      </gd-tab>\n      <gd-tab [tabTitle]=\"''\" [icon]=\"'qrcode'\" [id]=\"'3'\" *ngIf=\"!isDesktop && codesConfig()\">\n        <div class=\"toolbar-panel\">\n          <div *ngFor=\"let signatureType of signatureTypeCodes\">\n            <gd-signature-tab [disabled]=\"!file\" *ngIf=\"getSignatureTypeConfig(signatureType.id)\"\n                              [icon]=\"signatureType.icon\" (activeTab)=\"activeTab($event)\"\n                              [id]=\"signatureType.id\" [tooltip]=\"signatureType.name\">\n            </gd-signature-tab>\n          </div>\n        </div>\n      </gd-tab>\n    </gd-tabs>\n  </gd-tabbed-toolbars>\n  <gd-signature-left-panel *ngIf=\"activeSignatureTab\" [rewrite]=\"rewriteConfig\" (newSignatureEvent)=\"newSign($event)\"\n                           [isPdf]=\"isPdf()\" [id]=\"activeSignatureTab\">\n  </gd-signature-left-panel>\n  <div class=\"doc-panel\" *ngIf=\"file\">\n    <gd-document (drop)=\"dropSignature($event)\" (dragover)=\"dragOver($event)\" class=\"gd-document\" *ngIf=\"file\"\n                 [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"preloadPageCountConfig\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-document>\n  </div>\n\n  <gd-init-state [icon]=\"'signature'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n    Or drop file here\n  </gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-hand-modal></gd-hand-modal>\n  <gd-stamp-modal></gd-stamp-modal>\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/signature-left-panel/signature-left-panel.component.html":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature-left-panel/signature-left-panel.component.html ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gd-left-side-bar [showSpinner]=\"loading\">\n  <div class=\"tab-content\">\n    <div class=\"gd-signature-context-panel\">\n      <div class=\"gd-signature-context-pane-wrapper\">\n        <div class=\"signature-title-block\"> <!--for safari-->\n          <div class=\"gd-signature-list-title\" *ngIf=\"showNewCode || showUpload\">\n            <div class=\"gd-signature-context-panel-title\">{{getTitle()}}</div>\n            <div class=\"gd-signature-title-icon\">\n              <fa-icon [icon]=\"['fa','times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"closeNewSignature()\"></fa-icon>\n            </div>\n          </div>\n        </div>\n        <gd-upload-signature (closePanel)=\"closeUploadPanel($event)\" [rewrite]=\"rewrite\" [signatureType]=\"id\"\n                             *ngIf=\"showUpload\"></gd-upload-signature>\n        <gd-new-bar-qr-code (closePanel)=\"closeCodePanel($event)\" [type]=\"id\" [icon]=\"icon()\" [name]=\"getCodeName()\"\n                            *ngIf=\"showNewCode\"></gd-new-bar-qr-code>\n        <div class=\"signature-title-block\"> <!--for safari-->\n          <div class=\"gd-signature-list-title\">\n            <div class=\"gd-signature-context-panel-title\">{{getName()}}</div>\n            <div class=\"gd-signature-title-icon\">\n              <fa-icon [icon]=\"['fa','plus']\" [class]=\"'ng-fa-icon icon'\"\n                       [ngClass]=\"showNewCode || showUpload ? 'disabled' : ''\"\n                       (click)=\"openNewSignature()\"></fa-icon>\n            </div>\n          </div>\n        </div>\n        <gd-signature-list-panel class=\"gd-signatures-scroll\" [icon]=\"icon()\" [signatureType]=\"id\"\n                                 [signatures]=\"signatures\"\n                                 (removeSignatureEvent)=\"removeSignature($event, id)\"\n                                 [isPdf]=\"isPdf\" [loading]=\"loading\"></gd-signature-list-panel>\n      </div>\n    </div>\n  </div>\n</gd-left-side-bar>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/signature-list-panel/signature-list-panel.component.html":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature-list-panel/signature-list-panel.component.html ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gd-signature-list-wrapper\">\n  <div class=\"gd-signature-list-scroll\" *ngIf=\"signatures\">\n    <div class=\"gd-signature-list\" *ngIf=\"signatures\">\n      <div class=\"gd-signature\" *ngFor=\"let signature of signatures\">\n        <div class=\"gd-signature-item\" [draggable]=\"isDigital() ? false : true\"\n             (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\n             (dragleave)=\"dragLeave($event, signature.guid)\">\n          <div class=\"gd-signature-thumbnail\" *ngIf=\"isDigital()\" (click)=\"select(signature.guid)\">\n            <fa-icon [icon]=\"['fa','fingerprint']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n          </div>\n          <div class=\"gd-signature-thumbnail\" *ngIf=\"signature.image\">\n            <img [ngClass]=\"'gd-signature-thumbnail-' + signatureType\"\n                 [attr.src]=\"getImage(signature.image) | safeResourceHtml\"\n                 alt=\"\" [draggable]=\"false\" (click)=\"select(signature.guid)\">\n          </div>\n          <div class=\"gd-signature-title\" [ngClass]=\"signatureType\" (click)=\"select(signature.guid)\">\n            <label class=\"gd-signature-name\" [style.color]=\"signature.fontColor\">\n              {{signature.text ? signature.text : signature.name}}</label>\n          </div>\n          <div class=\"gd-signature-trash-icon\">\n            <fa-icon [icon]=\"['fas','trash']\" [class]=\"'ng-fa-icon icon'\"\n                     (click)=\"deleteSign(signature.guid)\"></fa-icon>\n          </div>\n        </div>\n        <div class=\"gd-digital-inputs\" *ngIf=\"showDigitalInputs && digitalId === signature.guid\">\n          <div class=\"gd-digital-input-wrapper\">\n            <fa-icon [icon]=\"['fas','comment']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input #reason (input)=\"digitalProps.reason = reason.value\" type=\"text\" placeholder=\"Reason\">\n          </div>\n          <div class=\"gd-digital-input-wrapper\" *ngIf=\"isPdf\">\n            <fa-icon [icon]=\"['fas','envelope']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input #contact (input)=\"digitalProps.contact = contact.value\" type=\"text\" placeholder=\"Contact\">\n          </div>\n          <div class=\"gd-digital-input-wrapper\" *ngIf=\"isPdf\">\n            <fa-icon [icon]=\"['fas','map-marker-alt']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input #address (input)=\"digitalProps.address = address.value\" type=\"text\" placeholder=\"Location\">\n          </div>\n          <div class=\"gd-digital-input-wrapper\">\n            <fa-icon [icon]=\"['fas','key']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input #password (input)=\"digitalProps.signaturePassword = password.value\" type=\"password\"\n                   placeholder=\"Password\">\n          </div>\n          <div class=\"gd-digital-input-wrapper\">\n            <fa-icon [icon]=\"['fas','calendar']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n            <input type=\"date\" #date (input)=\"digitalProps.date=parseDate(date.value)\" placeholder=\"Date\">\n          </div>\n          <div class=\"gd-sign-digital\" [ngClass]=\"isActive(signature.guid) ? 'active' : ''\"\n               (click)=\"selectDigital(signature.guid)\">\n            <fa-icon [icon]=\"['fas','save']\"></fa-icon>\n            <span class=\"digital-apply\">Apply</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"gd-signature-empty-list\" *ngIf=\"empty()\">\n    <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    <span class=\"gd-empty-list-text\">There is no entries yet</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/signature-tab/signature-tab.component.html":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature-tab/signature-tab.component.html ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gd-tab\" (mousedown)=\"toggleTab()\" gdTooltip\n     (showToolTip)=\"showToolTip = $event\" [ngClass]=\"(active) ? 'active' : ''\">\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\"\n              *ngIf=\"tooltip\"></gd-tooltip>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/signature/signature.component.html":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature/signature.component.html ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gd-signature\" *ngIf=\"!isDigital()\"\n     (clickOutside)=\"hideMenu($event)\"\n     [exclude]=\"'gd-context-menu,.ui-resizable-handle'\"\n     [excludeBeforeClick]=\"true\"\n     [clickOutsideEvents]=\"'mousedown'\"\n     [clickOutsideEnabled]=\"active\"\n     [style.left.px]=\"position.left\" [style.top.px]=\"position.top\"\n     [style.width.px]=\"data.width ? data.width : undefined\"\n     [style.height.px]=\"data.height ? data.height : undefined\" (click)=\"activation()\">\n  <div [draggable]=\"true\" (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\n       (drag)=\"dragging($event)\" (dragend)=\"dragging($event)\" (drop)=\"drop($event)\"\n       (panstart)=\"dragStart($event)\" (panmove)=\"dragging($event)\"\n       class=\"gd-signature-wrapper\">\n    <gd-context-menu *ngIf=\"active\" [topPosition]=\"position.top\" [textMenu]=\"isText()\" [formatting]=\"getFormatting()\"\n                     (changeFormatting)=\"saveTextSignature($event)\" (removeSign)=\"remove()\" (copySign)=\"onCopySign()\"\n                     [lock]=\"!unlock\" (lockOut)=\"unlock = !$event\" [translation]=\"getMenuShift()\"></gd-context-menu>\n    <img class=\"gd-signature-image\" *ngIf=\"!isText()\" [attr.src]=\"getData()\" alt>\n    <textarea class=\"gd-text\" *ngIf=\"isText()\" [value]=\"data.props?.text\"\n              id=\"text\" #text (keyup)=\"saveText(text.value)\"\n              [style.text-decoration]=\"data.props?.underline ? 'underline' : 'unset'\"\n              [style.font-style]=\"data.props?.italic ? 'italic' : 'unset'\"\n              [style.font-weight]=\"data.props?.bold ? 'bold' : 'unset'\"\n              [style.color]=\"data.props?.fontColor\"\n              [style.font-family]=\"data?.props.font\"\n              [style.font-size.px]=\"data?.props.fontSize\"\n              [style.width.px]=\"data.width ? data.width : undefined\"\n              [style.height.px]=\"data.height ? data.height : undefined\"></textarea>\n  </div>\n  <gd-resizing [id]=\"id\" *ngIf=\"active\" [init]=\"isInit()\"\n               (offsetX)=\"width($event)\" (offsetY)=\"height($event)\"\n               (offsetTop)=\"top($event)\" (offsetLeft)=\"left($event)\"\n               [se]=\"true\" [sw]=\"unlock\" [ne]=\"unlock\" [nw]=\"unlock\"\n               [pageHeight]=\"pageHeight\" [pageWidth]=\"pageWidth\"></gd-resizing>\n</div>\n<div class=\"gd-digital-marker\" *ngIf=\"isDigital()\">\n  <fa-icon [icon]=\"['fas','info-circle']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  <div>Digitally signed : {{data.digitalProps.contact ? data.digitalProps.contact : data.digitalProps.reason}}</div>\n  <fa-icon [icon]=\"['fas','times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"remove()\"></fa-icon>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/stamp-canvas/stamp-canvas.component.html":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/stamp-canvas/stamp-canvas.component.html ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"gd-stamp-box\" [style.left.px]=\"getLeft()\" [style.top.px]=\"getTop()\" [style.z-index]=\"props.zIndex\">\n    <div class=\"gd-context-menu\" *ngIf=\"active\">\n      <gd-button name=\"button\" [icon]=\"'fill-drip'\" [tooltip]=\"'Color'\" (click)=\"toggleColorPicker($event, true)\">\n        <div class=\"bg-color-pic\" [style.background-color]=\"props.backgroundColor\"></div>\n      </gd-button>\n      <gd-color-picker [isOpen]=\"colorPickerBG\" (closeOutside)=\"closeColorPickerBG($event)\"\n                       [className]=\"'palette'\"\n                       (selectedColor)=\"selectColor(true, $event)\"></gd-color-picker>\n      <gd-select class=\"csg-border-width\" [options]=\"borderWidth\" (selected)=\"selectBorderWidth($event)\"\n                 [showSelected]=\"{name: props.strokeWidth + 'px', value: props.strokeWidth}\"></gd-select>\n      <gd-button name=\"button\" [icon]=\"'square'\" [iconRegular]=\"true\" [tooltip]=\"'Color'\"\n                 (click)=\"toggleColorPicker($event, false)\">\n        <div class=\"bg-color-pic\" [style.background-color]=\"props.strokeColor\"></div>\n      </gd-button>\n      <gd-color-picker [isOpen]=\"colorPickerC\" (closeOutside)=\"closeColorPickerC($event)\"\n                       [className]=\"'palette'\"\n                       (selectedColor)=\"selectColor(false, $event)\"></gd-color-picker>\n      <gd-button name=\"button\" [icon]=\"'trash'\" [tooltip]=\"'Delete'\" [iconSize]=\"'sm'\" (click)=\"deleteCanvas()\">\n      </gd-button>\n    </div>\n    <div class=\"csg-bounding-box\" [style.width.px]=\"props.width\" [style.height.px]=\"props.height\">\n      <canvas #canvas (click)=\"activation()\" class=\"csg-preview\" [width]=\"props.width\" [height]=\"props.height\"></canvas>\n      <gd-resizing [init]=\"false\" [id]=\"999\" (offsetX)=\"resize($event)\" [se]=\"true\"\n                   (release)=\"redrawCanvas()\"></gd-resizing>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/stamp-modal/stamp-modal.component.html":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/stamp-modal/stamp-modal.component.html ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gd-modal [id]=\"'gd-draw-stamp-signature'\" [title]=\"'Compose stamp'\" (visible)=\"onCloseOpen($event)\">\n  <div class=\"stamp-body\">\n    <div class=\"stamp-header\">\n      <div class=\"header-buttons\">\n        <gd-button [icon]=\"'circle'\" (click)=\"addCanvas()\" [iconRegular]=\"true\">\n          <fa-icon class=\"plus\" [icon]=\"['fas','plus']\"></fa-icon>\n        </gd-button>\n        <gd-button [icon]=\"'font'\" (click)=\"toggleText()\">\n          <fa-icon class=\"plus\" [icon]=\"['fas','plus']\"></fa-icon>\n        </gd-button>\n      </div>\n      <div class=\"stamp-export\" (click)=\"saveSign()\">\n        <fa-icon [icon]=\"['fa','save']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n        <span class=\"save-button\">Save</span>\n      </div>\n    </div>\n    <div class=\"gd-draw-stamp\" [style.width.px]=\"getWidth()\" [style.height.px]=\"getHeight()\">\n      <div gdHostDynamic [ident]=\"999999\"></div>\n      <div class=\"gd-text-menu-context\">\n        <gd-text-menu *ngIf=\"showText\" [blur]=\"true\" [color]=\"textProps.color\" [bold]=\"textProps.bold\"\n                      [font]=\"textProps.font\" [fontSize]=\"textProps.fontSize\" [italic]=\"textProps.italic\"\n                      [underline]=\"textProps.underline\" (outBold)=\"toggleBold($event)\"\n                      (outUnderline)=\"toggleUnderline($event)\" (outItalic)=\"toggleItalic($event)\"\n                      (outColor)=\"selectTextColor($event)\" (outFont)=\"selectFont($event)\"\n                      (outFontSize)=\"selectFontSize($event)\" [decoration]=\"false\">\n          <gd-button [icon]=\"'trash'\" [class]=\"'ng-fa-icon icon'\" [iconSize]=\"'sm'\" (click)=\"deleteText()\"></gd-button>\n        </gd-text-menu>\n      </div>\n      <input *ngIf=\"showText\" placeholder=\"Type your text\" id=\"text-input\"\n             #text (keyup.enter)=\"addText(text.value)\"\n             [style.text-decoration]=\"textProps?.underline ? 'underline' : 'unset'\"\n             [style.font-style]=\"textProps?.italic ? 'italic' : 'unset'\"\n             [style.font-weight]=\"textProps?.bold ? 'bold' : 'unset'\"\n             [style.color]=\"textProps?.color\"\n             [style.font-family]=\"textProps.font\"\n             [style.font-size.px]=\"textProps.fontSize\"\n             [value]=\"textString\" type=\"text\">\n    </div>\n  </div>\n</gd-modal>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/text-menu/text-menu.component.html":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/text-menu/text-menu.component.html ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gd-text-menu\">\n  <gd-select class=\"format-select\" [options]=\"fontOptions\"\n             (selected)=\"selectFont($event)\"\n             [showSelected]=\"{name : font, value : font}\"></gd-select>\n  <gd-select class=\"format-select\" [options]=\"fontSizeOptions\"\n             (selected)=\"selectFontSize($event)\"\n             [showSelected]=\"{name : fontSize + 'px', value : fontSize}\"></gd-select>\n  <gd-button [icon]=\"'bold'\" [tooltip]=\"'Bold'\" *ngIf=\"decoration\"\n             (click)=\"toggleBold($event)\" [toggle]=\"bold\"></gd-button>\n  <gd-button [icon]=\"'italic'\" [tooltip]=\"'Italic'\" *ngIf=\"decoration\"\n             (click)=\"toggleItalic($event)\" [toggle]=\"italic\"></gd-button>\n  <gd-button [icon]=\"'underline'\" [tooltip]=\"'Underline'\" *ngIf=\"decoration\"\n             (click)=\"toggleUnderline($event)\" [toggle]=\"underline\"></gd-button>\n  <gd-button name=\"button\" [icon]=\"'font'\" [tooltip]=\"'Color'\" (click)=\"toggleColorPicker($event)\">\n    <div class=\"bg-color-pic\" [style.background-color]=\"color\"></div>\n  </gd-button>\n  <gd-color-picker [isOpen]=\"colorPickerShow\" (closeOutside)=\"closePicker($event)\"\n                   [className]=\"'palette'\"\n                   (selectedColor)=\"selectColor($event)\"></gd-color-picker>\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/upload-signature/upload-signature.component.html":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/upload-signature/upload-signature.component.html ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gd-upload-signature\" gdDndSignature (files)=\"uploadFiles($event)\">\n  <div class=\"gd-upload-inputs\">\n    <input type=\"file\" (change)=\"handleFileInput($event.target.files)\"/>\n    <fa-icon [icon]=\"['fas','folder-open']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    <div class=\"gd-upload-title\">\n      <p class=\"text\">Click\n        <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon>\n        to open file\n      </p>\n      <p class=\"text\">Or drop file here</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/viewer/src/lib/thumbnails/thumbnails.component.html":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/viewer/src/lib/thumbnails/thumbnails.component.html ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gd-thumbnails\">\n  <div class=\"gd-thumbnails-panzoom\">\n    <div *ngFor=\"let page of pages\" id=\"gd-thumbnails-page-{{page.number}}\" class=\"gd-page\"\n         (click)=\"openPage(page.number)\" gdRotation [withMargin]=\"false\"\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <div class=\"gd-wrapper\"\n           [style.width.pt]=\"page.width\"\n           [style.height.pt]=\"page.height\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && isHtmlMode\"\n           [innerHTML]=\"page.data | safeHtml\"></div>\n      <div class=\"gd-wrapper\" *ngIf=\"page.data && !isHtmlMode\">\n        <img style=\"width: inherit !important\" class=\"gd-page-image\" [attr.src]=\"imgData(page.data) | safeResourceHtml\"\n             alt/>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/viewer/src/lib/viewer-app.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/viewer/src/lib/viewer-app.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'viewer'\" icon=\"eye\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-select class=\"mobile-hide\" [disabled]=\"formatDisabled\" [options]=\"options\" (selected)=\"selectZoom($event)\"\n                 [showSelected]=\"{ name: zoom+'%', value : zoom}\" *ngIf=\"zoomConfig\" ></gd-select>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"\n                 *ngIf=\"zoomConfig\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\"\n                 (click)=\"zoomOut()\" *ngIf=\"zoomConfig\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-left'\" [tooltip]=\"'First Page'\"\n                 (click)=\"toFirstPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" [tooltip]=\"'Previous Page'\"\n                 (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <div class=\"current-page-number\" [ngClass]=\"{'active': !formatDisabled}\">{{currentPage}}/{{countPages}}</div>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" [tooltip]=\"'Next Page'\"\n                 (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-right'\" [tooltip]=\"'Last Page'\"\n                 (click)=\"toLastPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Rotate CCW'\" (click)=\"rotate(-90)\"\n                 *ngIf=\"rotateConfig\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Rotate CW'\" (click)=\"rotate(90)\"\n                 *ngIf=\"rotateConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                 (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                 *ngIf=\"printConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search'\" [tooltip]=\"'Search'\" (click)=\"openSearch()\"\n                 *ngIf=\"searchConfig\" ></gd-button>\n      <gd-search (hidePanel)=\"showSearch = !$event\" *ngIf=\"showSearch\" ></gd-search>\n\n      <gd-button class=\"thumbnails-button\" [disabled]=\"formatDisabled\" [icon]=\"'th-large'\" [tooltip]=\"'Thumbnails'\"\n                 (click)=\"openThumbnails()\" *ngIf=\"thumbnailsConfig && isDesktop\"></gd-button>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"doc-panel\" *ngIf=\"file\" #docPanel>\n    <gd-thumbnails *ngIf=\"showThumbnails\" [pages]=\"file.pages\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\"></gd-thumbnails>\n\n    <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-document>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n    Or drop file here\n  </gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!***********************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!./src/app/app.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <a class=\"back\" [routerLink]=\"['']\" *ngIf=\"!total\">Back</a>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/total-nav/total-nav.component.html":
/*!***************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!./src/app/total-nav/total-nav.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <ul>\n    <li>\n      <a [routerLink]=\"['/viewer']\"  >\n        <img src=\"assets/images/groupdocs-viewer.png\"/>\n        <div>\n          <h5>GroupDocs</h5>\n          <h6>Viewer</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a [routerLink]=\"['/signature']\">\n        <img src=\"assets/images/groupdocs-signature.png\"/>\n        <div>\n          <h5>GroupDocs</h5>\n          <h6>Signature</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-annotation-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Annotation</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a [routerLink]=\"['/comparison']\">\n        <img src=\"assets/images/groupdocs-comparison.png\"/>\n        <div>\n          <h5>GroupDocs</h5>\n          <h6>Comparison</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a [routerLink]=\"['/conversion']\">\n        <img src=\"assets/images/groupdocs-conversion.png\"/>\n        <div>\n          <h5>GroupDocs</h5>\n          <h6>Conversion</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-metadata-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Metadata</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-search-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Search</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-text-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Text</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-watermark-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Watermark</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a [routerLink]=\"['/editor']\" >\n        <img src=\"assets/images/groupdocs-editor.png\"/>\n        <div>\n          <h5>GroupDocs</h5>\n          <h6>Editor</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-assembly-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Assembly</h6>\n        </div>\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/total-view/total-view.component.html":
/*!*****************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!./src/app/total-view/total-view.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"header\">\n    <h2>GroupDocs.Total Angular Example</h2>\n    <h3>Manipulate documents within your desktop solutions and web apps without requiring any other commercial\n      application through GroupDocs APIs</h3>\n  </div>\n  <gd-total-nav></gd-total-nav>\n</div>\n"

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');\n:host * {\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n}\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvdG90YWwtYW5ndWxhci9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvYXBwcy90b3RhbC1hbmd1bGFyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQ0FrQjtBQUNsQjtFQUNFLHNEQUFBO0FEQ0Y7QUNDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBRENKIiwiZmlsZSI6ImFwcHMvdG90YWwtYW5ndWxhci9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcbjpob3N0ICoge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4iLCJAaW1wb3J0IChjc3MpIHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG46aG9zdCAqIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'total-angular';
        this.total = true;
    }
    AppComponent.prototype.OnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivationEnd"]); }))
            .subscribe(function (event) {
            _this.onNavigate("/" === _this.router.url);
        });
    };
    AppComponent.prototype.onNavigate = function (home) {
        this.total = home;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-total',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _total_nav_total_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./total-nav/total-nav.component */ "./src/app/total-nav/total-nav.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _total_view_total_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./total-view/total-view.component */ "./src/app/total-view/total-view.component.ts");
/* harmony import */ var _groupdocs_examples_angular_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @groupdocs.examples.angular/viewer */ "../../libs/viewer/src/index.ts");
/* harmony import */ var _groupdocs_examples_angular_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @groupdocs.examples.angular/editor */ "../../libs/editor/src/index.ts");
/* harmony import */ var _groupdocs_examples_angular_comparison__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @groupdocs.examples.angular/comparison */ "../../libs/comparison/src/index.ts");
/* harmony import */ var _groupdocs_examples_angular_signature__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @groupdocs.examples.angular/signature */ "../../libs/signature/src/index.ts");
/* harmony import */ var _groupdocs_examples_angular_conversion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @groupdocs.examples.angular/conversion */ "../../libs/conversion/src/index.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _total_nav_total_nav_component__WEBPACK_IMPORTED_MODULE_3__["TotalNavComponent"], _total_view_total_view_component__WEBPACK_IMPORTED_MODULE_6__["TotalViewComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _groupdocs_examples_angular_viewer__WEBPACK_IMPORTED_MODULE_7__["ViewerModule"].forRoot("http://localhost:8080"),
                _groupdocs_examples_angular_editor__WEBPACK_IMPORTED_MODULE_8__["EditorModule"].forRoot("http://localhost:8080"),
                _groupdocs_examples_angular_comparison__WEBPACK_IMPORTED_MODULE_9__["ComparisonModule"].forRoot("http://localhost:8080"),
                _groupdocs_examples_angular_conversion__WEBPACK_IMPORTED_MODULE_11__["ConversionModule"].forRoot("http://localhost:8080"),
                _groupdocs_examples_angular_signature__WEBPACK_IMPORTED_MODULE_10__["SignatureModule"].forRoot("http://localhost:8080"),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    { path: '', component: _total_view_total_view_component__WEBPACK_IMPORTED_MODULE_6__["TotalViewComponent"] },
                    { path: 'viewer', component: _groupdocs_examples_angular_viewer__WEBPACK_IMPORTED_MODULE_7__["ViewerAppComponent"] },
                    { path: 'editor', component: _groupdocs_examples_angular_editor__WEBPACK_IMPORTED_MODULE_8__["EditorAppComponent"] },
                    { path: 'comparison', component: _groupdocs_examples_angular_comparison__WEBPACK_IMPORTED_MODULE_9__["ComparisonAppComponent"] },
                    { path: 'conversion', component: _groupdocs_examples_angular_conversion__WEBPACK_IMPORTED_MODULE_11__["ConversionAppComponent"] },
                    { path: 'signature', component: _groupdocs_examples_angular_signature__WEBPACK_IMPORTED_MODULE_10__["SignatureAppComponent"] },
                ], { initialNavigation: 'enabled' })
            ],
            providers: [],
            exports: [
                _total_view_total_view_component__WEBPACK_IMPORTED_MODULE_6__["TotalViewComponent"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/total-nav/total-nav.component.css":
/*!***************************************************!*\
  !*** ./src/app/total-nav/total-nav.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  padding: 50px;\n  font-family: \"proxima-nova-soft\", \"Proxima Nova Soft\", Helvetica, Arial, sans-serif;\n  width: inherit;\n  height: 100%;\n}\n\n.wrapper > ul {\n  width: 100%;\n  height: 100%;\n}\n\n.wrapper > ul > li {\n  display: inline-block;\n  margin: 10px;\n  padding: 20px;\n}\n\n.wrapper > ul a {\n  color: #6f6f6f;\n  text-decoration: none;\n}\n\n.wrapper > ul img {\n  width: 48px;\n  height: 48px;\n  display: inline-block;\n}\n\n.wrapper > ul > li > a > div {\n  width: 120px;\n  padding-top: 12px;\n  padding-left: 10px;\n  vertical-align: top;\n  display: inline-block;\n}\n\n.wrapper > ul > li > a > .coming-soon {\n  color: #d2d2d2;\n}\n\n.wrapper > ul h5 {\n  font-weight: 600;\n  font-size: 14px;\n  text-transform: uppercase;\n  margin: 0px;\n}\n\n.wrapper > ul h6 {\n  font-weight: 300;\n  font-size: 12px;\n  text-transform: uppercase;\n  margin: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvdG90YWwtYW5ndWxhci9zcmMvYXBwL3RvdGFsLW5hdi90b3RhbC1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtRkFBbUY7RUFDbkYsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsV0FBVztBQUNiIiwiZmlsZSI6ImFwcHMvdG90YWwtYW5ndWxhci9zcmMvYXBwL3RvdGFsLW5hdi90b3RhbC1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgcGFkZGluZzogNTBweDtcbiAgZm9udC1mYW1pbHk6IFwicHJveGltYS1ub3ZhLXNvZnRcIiwgXCJQcm94aW1hIE5vdmEgU29mdFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ud3JhcHBlciA+IHVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLndyYXBwZXIgPiB1bCA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi53cmFwcGVyID4gdWwgYSB7XG4gIGNvbG9yOiAjNmY2ZjZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi53cmFwcGVyID4gdWwgaW1nIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ud3JhcHBlciA+IHVsID4gbGkgPiBhID4gZGl2IHtcbiAgd2lkdGg6IDEyMHB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi53cmFwcGVyID4gdWwgPiBsaSA+IGEgPiAuY29taW5nLXNvb24ge1xuICBjb2xvcjogI2QyZDJkMjtcbn1cblxuLndyYXBwZXIgPiB1bCBoNSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi53cmFwcGVyID4gdWwgaDYge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/total-nav/total-nav.component.ts":
/*!**************************************************!*\
  !*** ./src/app/total-nav/total-nav.component.ts ***!
  \**************************************************/
/*! exports provided: TotalNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalNavComponent", function() { return TotalNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var TotalNavComponent = /** @class */ (function () {
    function TotalNavComponent() {
    }
    TotalNavComponent.prototype.ngOnInit = function () {
    };
    TotalNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-total-nav',
            template: __webpack_require__(/*! raw-loader!./total-nav.component.html */ "../../node_modules/raw-loader/index.js!./src/app/total-nav/total-nav.component.html"),
            styles: [__webpack_require__(/*! ./total-nav.component.css */ "./src/app/total-nav/total-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TotalNavComponent);
    return TotalNavComponent;
}());



/***/ }),

/***/ "./src/app/total-view/total-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/total-view/total-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.header {\n  width: 100%;\n  height: 170px;\n  background-color: #eeeeee;\n  margin: 0;\n  padding: 0;\n}\n\n.header > h2 {\n  font-weight: 400;\n  font-size: 20px;\n  padding-top: 80px;\n  padding-left: 50px;\n  margin: 0;\n}\n\n.header > h3 {\n  font-weight: 300;\n  font-size: 14px;\n  padding: 5px 50px;\n  color: #6b6b6b;\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvdG90YWwtYW5ndWxhci9zcmMvYXBwL3RvdGFsLXZpZXcvdG90YWwtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFNBQVM7QUFDWCIsImZpbGUiOiJhcHBzL3RvdGFsLWFuZ3VsYXIvc3JjL2FwcC90b3RhbC12aWV3L3RvdGFsLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5oZWFkZXIgPiBoMiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaGVhZGVyID4gaDMge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCA1MHB4O1xuICBjb2xvcjogIzZiNmI2YjtcbiAgbWFyZ2luOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/total-view/total-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/total-view/total-view.component.ts ***!
  \****************************************************/
/*! exports provided: TotalViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalViewComponent", function() { return TotalViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var TotalViewComponent = /** @class */ (function () {
    function TotalViewComponent() {
    }
    TotalViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-total-view',
            template: __webpack_require__(/*! raw-loader!./total-view.component.html */ "../../node_modules/raw-loader/index.js!./src/app/total-view/total-view.component.html"),
            styles: [__webpack_require__(/*! ./total-view.component.css */ "./src/app/total-view/total-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TotalViewComponent);
    return TotalViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/elenko/projects/GroupDocs.Total-Angular/apps/total-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map