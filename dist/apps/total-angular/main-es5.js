(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: Api, BackFormattingService, BrowseFilesModalComponent, ButtonComponent, ChoiceButtonComponent, ColorPickerComponent, CommonComponentsModule, CommonModals, ConfigService, DisabledCursorDirective, DndDirective, DocumentComponent, EditHtmlService, EditorDirective, ErrorInterceptorService, ErrorModalComponent, ExceptionMessageService, FileCredentials, FileDescription, FileModel, FileService, FileUtil, Formatting, FormattingDirective, FormattingService, HighlightSearchPipe, HttpError, InitStateComponent, LoadingMaskComponent, LoadingMaskInterceptorService, LoadingMaskService, LogoComponent, ModalComponent, ModalService, NavigateService, OnCloseService, PageComponent, PageModel, PagePreloadService, PasswordRequiredComponent, PasswordService, RenderPrintDirective, RenderPrintService, RotatedPage, RotationDirective, SanitizeHtmlPipe, SanitizeResourceHtmlPipe, SanitizeStylePipe, SaveFile, ScrollableDirective, SearchComponent, SearchService, SearchableDirective, SelectComponent, SelectionService, SuccessModalComponent, TabComponent, TabbedToolbarsComponent, TooltipComponent, TopToolbarComponent, UploadFileZoneComponent, UploadFilesService, ViewportService, WindowService, ZoomDirective, ZoomService, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackFormattingService", function() { return BackFormattingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseFilesModalComponent", function() { return BrowseFilesModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoiceButtonComponent", function() { return ChoiceButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return ColorPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponentsModule", function() { return CommonComponentsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonModals", function() { return CommonModals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabledCursorDirective", function() { return DisabledCursorDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DndDirective", function() { return DndDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return HttpError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitStateComponent", function() { return InitStateComponent; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessModalComponent", function() { return SuccessModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabbedToolbarsComponent", function() { return TabbedToolbarsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopToolbarComponent", function() { return TopToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileZoneComponent", function() { return UploadFileZoneComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFilesService", function() { return UploadFilesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportService", function() { return ViewportService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomDirective", function() { return ZoomDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomService", function() { return ZoomService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "../../node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "../../node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $ = jquery__WEBPACK_IMPORTED_MODULE_2__;
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
        var win = $(window);
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
        var height = $(el).outerHeight() * (zoomN);
        /** @type {?} */
        var width = $(el).outerWidth() * (zoomN);
        if (!width || !height) {
            return false;
        }
        /** @type {?} */
        var bounds = $(el).offset();
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
            top: Math.min(1, (bottom - viewport.top) / height),
            bottom: Math.min(1, (viewport.bottom - (bounds.top * (zoomN))) / height),
            left: Math.min(1, (right - viewport.left) / width),
            right: Math.min(1, (viewport.right - (bounds.left * (zoomN))) / width)
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
var $$1 = jquery__WEBPACK_IMPORTED_MODULE_2__;
var TopToolbarComponent = /** @class */ (function () {
    function TopToolbarComponent(_elementRef, _viewportService, _cdRef) {
        this._elementRef = _elementRef;
        this._viewportService = _viewportService;
        this._cdRef = _cdRef;
        this.leftOffset = true;
    }
    /**
     * @return {?}
     */
    TopToolbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.refresh();
        /** @type {?} */
        var el = this.getToolsElem();
        /** @type {?} */
        var $this = this;
        el.addEventListener('scroll', (/**
         * @return {?}
         */
        function () {
            $this.refresh();
        }));
    };
    /**
     * @return {?}
     */
    TopToolbarComponent.prototype.moveLeft = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this.getToolsElem();
        if (el) {
            /** @type {?} */
            var elem = this.canMoveTo(true);
            if (elem) {
                /** @type {?} */
                var options = {
                    left: $$1(elem).offset().left + el.scrollLeft - this.getLeftOffset(),
                    top: 0,
                };
                el.scrollTo(options);
            }
        }
    };
    /**
     * @return {?}
     */
    TopToolbarComponent.prototype.moveRight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this.getToolsElem();
        if (el) {
            /** @type {?} */
            var elem = this.canMoveTo(false);
            if (elem) {
                /** @type {?} */
                var options = {
                    left: $$1(elem).offset().left + el.scrollLeft - this.getLeftOffset(),
                    top: 0,
                };
                el.scrollTo(options);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    TopToolbarComponent.prototype.getToolsElem = /**
     * @private
     * @return {?}
     */
    function () {
        return this._elementRef ? this._elementRef.nativeElement.children[0].querySelector('#tools') : null;
    };
    /**
     * @private
     * @param {?} left
     * @return {?}
     */
    TopToolbarComponent.prototype.canMoveTo = /**
     * @private
     * @param {?} left
     * @return {?}
     */
    function (left) {
        /** @type {?} */
        var elem;
        /** @type {?} */
        var children = this.getChildren();
        /** @type {?} */
        var countElem = children.length;
        for (elem = 0; elem < countElem; elem++) {
            /** @type {?} */
            var element = this.getElem(elem);
            if (this._viewportService.checkInViewport(element, 100, this.getLeftOffset())) {
                if (left) {
                    return elem > 0 ? children.item(elem - 1) : null;
                }
                else {
                    return elem + 1 < countElem ? children.item(elem + 1) : null;
                }
            }
        }
        return;
    };
    /**
     * @private
     * @param {?} num
     * @return {?}
     */
    TopToolbarComponent.prototype.getElem = /**
     * @private
     * @param {?} num
     * @return {?}
     */
    function (num) {
        /** @type {?} */
        var elems = this.getChildren();
        return elems.item(num !== null ? num : elems.length - 1);
    };
    /**
     * @private
     * @return {?}
     */
    TopToolbarComponent.prototype.getChildren = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this.getToolsElem();
        if (!el) {
            return;
        }
        return el.children;
    };
    /**
     * @private
     * @return {?}
     */
    TopToolbarComponent.prototype.getLeftOffset = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.leftOffset) {
            return 0;
        }
        /** @type {?} */
        var el = this._elementRef.nativeElement ? this._elementRef.nativeElement.parentElement.children[0] : null;
        if (!el) {
            return 0;
        }
        return el.clientWidth;
    };
    /**
     * @private
     * @return {?}
     */
    TopToolbarComponent.prototype.refresh = /**
     * @private
     * @return {?}
     */
    function () {
        this.showLeft = !this._viewportService.checkInViewport(this.getElem(0), 100, this.getLeftOffset(), 0.8);
        this.showRight = !this._viewportService.checkInViewport(this.getElem(null), 100, this.getLeftOffset(), 0.8);
    };
    /**
     * @return {?}
     */
    TopToolbarComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var showLeft = !this._viewportService.checkInViewport(this.getElem(0), 100, this.getLeftOffset(), 0.8);
        /** @type {?} */
        var showRight = !this._viewportService.checkInViewport(this.getElem(null), 100, this.getLeftOffset(), 0.8);
        if (showLeft !== this.showLeft || showRight !== this.showRight) {
            this.showLeft = showLeft;
            this.showRight = showRight;
            this._cdRef.detectChanges();
        }
    };
    TopToolbarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-top-toolbar',
                    template: "<div class=\"top-toolbar\">\n  <gd-button [className]=\"'arrow-button'\" class=\"arrow-left\" id=\"left\" [icon]=\"'caret-left'\" [tooltip]=\"'Scroll left'\"\n             (click)=\"moveLeft()\"\n             *ngIf=\"showLeft\"></gd-button>\n  <div id=\"tools\" class=\"tools\">\n    <ng-content></ng-content>\n  </div>\n  <gd-button [className]=\"'arrow-button'\" class=\"arrow-right\" id=\"right\" [icon]=\"'caret-right'\"\n             [tooltip]=\"'Scroll right'\" (click)=\"moveRight()\"\n             *ngIf=\"showRight\"></gd-button>\n</div>\n",
                    styles: [".top-toolbar{width:100%;height:60px;z-index:999;display:flex;align-items:center}.tools{width:100%;height:100%;display:flex;align-items:center}@media (max-width:480px){.top-toolbar{height:60px}.arrow-right{position:absolute;right:0}.tools{width:calc(100% - 120px);height:100%;overflow-x:auto;overflow-scrolling:touch;display:flex;align-items:center;transition:.3s ease-in-out;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.tools::-webkit-scrollbar{width:0;height:0;background-color:#3e4e5a}}"]
                }] }
    ];
    /** @nocollapse */
    TopToolbarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: ViewportService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    TopToolbarComponent.propDecorators = {
        leftOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return TopToolbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.disabled = false;
        this.toggle = false;
        this.showToolTip = false;
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.onHovering = /**
     * @return {?}
     */
    function () {
        this.showToolTip = true;
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.onUnhovering = /**
     * @return {?}
     */
    function () {
        this.showToolTip = false;
    };
    ButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-button',
                    template: "<div class=\"button\" [ngClass]=\"toggle ? className + ' gd-edit active' : className\" (mouseenter)=\"onHovering()\" (mouseleave)=\"onUnhovering()\" gdDisabledCursor [dis]=\"disabled\">\n  <fa-icon [icon]=\"['fas',icon]\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\"></gd-tooltip>\n  <ng-content></ng-content>\n</div>\n",
                    styles: [".button{margin:0 7px;font-size:14px;color:#959da5;cursor:pointer;display:flex;align-items:center;justify-content:center;width:37px;height:36px;text-align:center;position:relative}.button.inactive{cursor:not-allowed;color:rgba(255,255,255,.3)}.button.active .ng-fa-icon{color:#fff}@media (max-width:1025px){.button{font-size:20px;margin:0 20px}.arrow-button{margin:5px}}"]
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        iconClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        className: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
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
                    styles: [".logo{background-color:#25c2d4;height:60px;display:flex;align-items:center;justify-content:center}.text{color:#fff;font-size:15px;text-transform:uppercase;margin:0 14px}.icon{display:none;font-size:32px;color:rgba(255,255,255,.5);margin:14px}@media (max-width:480px){.logo{width:60px;height:60px}.logo .text{display:none}.logo .icon{display:block}}"]
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
    Api.EDITOR_APP = '/editor';
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
    Api.httpOptionsJson = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
            'Content-Type': 'application/json',
        })
    };
    Api.httpOptionsJsonResponseTypeBlob = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
            'Content-Type': 'application/json',
        }),
        responseType: (/** @type {?} */ ('blob'))
    };
    return Api;
}());
var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this._apiEndpoint = Api.DEFAULT_API_ENDPOINT;
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
        modal.open();
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
        modal.close();
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
        $event.preventDefault();
        $event.stopPropagation();
        if ($event && $event.target && ((/** @type {?} */ ($event.target))).id === 'modalDialog') {
            this.close();
        }
    };
    ModalComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-modal',
                    template: "<div class=\"gd-modal fade\" id=\"modalDialog\" (click)=\"onClose($event);\" *ngIf=\"visibility\">\n  <div class=\"gd-modal-dialog\">\n    <div class=\"gd-modal-content\" id=\"gd-modal-content\"> \n\n      <div class=\"gd-modal-header\"> \n        <div class=\"gd-modal-close\" (click)=\"close();\"><span>&times;</span></div>\n        <h4 class=\"gd-modal-title\">{{title}}</h4>\n        </div> \n\n      <div class=\"gd-modal-body\">\n        <ng-content></ng-content>\n        </div> \n\n      <div class=\"gd-modal-footer\"> \n\n        </div> \n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog --> \n  </div>\n\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.gd-modal{overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0;background-color:rgba(0,0,0,.5)}.gd-modal-dialog{box-shadow:#0005 0 0 10px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.gd-modal-content{background-color:#fff;height:100%;display:flex;flex-direction:column}.gd-modal-header{padding:1px 20px;background-color:#3e4e5a}.gd-modal-close{position:absolute;right:20px;top:13px;font-size:21px;cursor:pointer;color:#959da5}.gd-modal-title{font-size:16px;font-weight:400;padding-top:16px;padding-bottom:16px;margin:0;color:#fff}.gd-modal-body{background-color:#fff;padding:20px;overflow:hidden;overflow-y:auto;height:calc(100% - 75px)}.gd-modal-footer{height:auto}.gd-modal-footer>.btn{float:right;margin:20px 15px;padding:10px 20px;cursor:pointer;font-size:12px}@media (max-width:1025px){.gd-modal-dialog{width:100%;height:100%}}"]
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__extends"])(SaveFile, _super);
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
                return strings.length > 1 ? FileUtil.map['unknown'] : FileUtil.map['folder'];
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
        'pdf': { 'format': 'Portable Document Format', 'icon': 'file-pdf' },
        'doc': { 'format': 'Microsoft Word', 'icon': 'file-word' },
        'docx': { 'format': 'Microsoft Word', 'icon': 'file-word' },
        'docm': { 'format': 'Microsoft Word', 'icon': 'file-word' },
        'dot': { 'format': 'Microsoft Word', 'icon': 'file-word' },
        'dotx': { 'format': 'Microsoft Word', 'icon': 'file-word' },
        'dotm': { 'format': 'Microsoft Word', 'icon': 'file-word' },
        'xls': { 'format': 'Microsoft Excel', 'icon': 'file-excel' },
        'xlsx': { 'format': 'Microsoft Excel', 'icon': 'file-excel' },
        'xlsm': { 'format': 'Microsoft Excel', 'icon': 'file-excel' },
        'xlsb': { 'format': 'Microsoft Excel', 'icon': 'file-excel' },
        'ppt': { 'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint' },
        'pptx': { 'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint' },
        'pps': { 'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint' },
        'ppsx': { 'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint' },
        'vsd': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
        'vdx': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
        'vss': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
        'vsx': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
        'vst': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
        'vtx': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
        'vsdx': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
        'vdw': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
        'vstx': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
        'vssx': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
        'mpp': { 'format': 'Microsoft Project', 'icon': 'file-text' },
        'mpt': { 'format': 'Microsoft Project', 'icon': 'file-text' },
        'msg': { 'format': 'Microsoft Outlook', 'icon': 'file-text' },
        'eml': { 'format': 'Microsoft Outlook', 'icon': 'file-text' },
        'emlx': { 'format': 'Microsoft Outlook', 'icon': 'file-text' },
        'one': { 'format': 'Microsoft OneNote', 'icon': 'file-word' },
        'odt': { 'format': 'Open Document Text', 'icon': 'file-word' },
        'ott': { 'format': 'Open Document Text Template', 'icon': 'file-word' },
        'ods': { 'format': 'Open Document Spreadsheet', 'icon': 'file-excel' },
        'odp': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
        'otp': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
        'ots': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
        'rtf': { 'format': 'Rich Text Format', 'icon': 'file-text' },
        'txt': { 'format': 'Plain Text File', 'icon': 'file-text' },
        'csv': { 'format': 'Comma-Separated Values', 'icon': 'file-excel' },
        'html': { 'format': 'HyperText Markup Language', 'icon': 'file-word' },
        'mht': { 'format': 'HyperText Markup Language', 'icon': 'file-word' },
        'mhtml': { 'format': 'HyperText Markup Language', 'icon': 'file-word' },
        'xml': { 'format': 'Extensible Markup Language', 'icon': 'file-word' },
        'xps': { 'format': 'XML Paper Specification', 'icon': 'file-word' },
        'dxf': { 'format': 'AutoCAD Drawing File Format', 'icon': 'file-image' },
        'dwg': { 'format': 'AutoCAD Drawing File Format', 'icon': 'file-image' },
        'bmp': { 'format': 'Bitmap Picture', 'icon': 'file-image' },
        'gif': { 'format': 'Graphics Interchange Format', 'icon': 'file-image' },
        'jpg': { 'format': 'Joint Photographic Experts Group', 'icon': 'file-image' },
        'jpe': { 'format': 'Joint Photographic Experts Group', 'icon': 'file-image' },
        'jpeg': { 'format': 'Joint Photographic Experts Group', 'icon': 'file-image' },
        'jfif': { 'format': 'Joint Photographic Experts Group', 'icon': 'file-image' },
        'png': { 'format': 'Portable Network Graphics', 'icon': 'file-image' },
        'tiff': { 'format': 'Tagged Image File Format', 'icon': 'file-photo' },
        'tif': { 'format': 'Tagged Image File Format', 'icon': 'file-photo' },
        'epub': { 'format': 'Electronic Publication', 'icon': 'file-pdf' },
        'ico': { 'format': 'Windows Icon', 'icon': 'file-image' },
        'webp': { 'format': 'Compressed Image', 'icon': 'file-image' },
        'mobi': { 'format': 'Mobipocket eBook', 'icon': 'file-pdf' },
        'tex': { 'format': 'LaTeX Source Document', 'icon': 'file-pdf' },
        'djvu': { 'format': 'Multi-Layer Raster Image', 'icon': 'file-text' },
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
        this._uploadsChange = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"]((/**
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
var $$2 = jquery__WEBPACK_IMPORTED_MODULE_2__;
/** @type {?} */
var upload_disc = 'Disc';
/** @type {?} */
var upload_url = 'url';
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
        if (file.directory) {
            this.selectedDirectory.emit(file.guid);
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
            $$2("#gd-upload-input").trigger('click');
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
                    template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd [isBackground]=\"false\" (opening)=\"showUploadFile=$event\">\n      <div class=\"gd-drag-n-drop-icon\">\n        <fa-icon [icon]=\"['fas','cloud-download-alt']\" size=\"5x\" aria-hidden=\"true\"></fa-icon>\n      </div>\n      <h2>Drag &amp; Drop your files here</h2>\n    </div>\n    <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n      <gd-choice-button [name]=\"'Upload file'\" [choices]=\"uploads\" [icon]=\"'upload'\"\n                        (selected)=\"selectUpload($event)\"></gd-choice-button>\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      <div class=\"upload-url\" *ngIf=\"showUploadUrl\">\n        <input class=\"url-input\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n        <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-header\">\n        <div class=\"header-name\">Document</div>\n        <div class=\"header-size\">Size</div>\n      </div>\n      <div class=\"list-files-body\">\n      <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n              <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n          </div>\n          <div class=\"go-up-dots\">...</div>\n      </div>\n      <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n        <div class=\"file-description\">\n          <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n          <div class=\"file-name-format\">\n            <div class=\"file-name\">{{file?.name}}</div>\n            <div class=\"file-format\">{{getFormatName(file)}}</div>\n          </div>\n        </div>\n        <div class=\"file-size\">\n          {{getSize(file?.size)}}\n        </div>\n      </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
                    styles: [".gd-modal-table{width:100%;text-align:left;padding-top:20px}#gd-browse-section{width:1024px;height:728px}.list-files-header{color:#acacac;font-size:10px}.header-name,.header-size{padding:0 6px;width:90%}.file-size,.header-size{width:10%;color:#777}.file-description,.file-size{font-size:14px;padding:10px 6px;width:10%}.list-files-header,.list-files-lines{display:flex;width:100%;justify-content:space-between}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{cursor:pointer;display:flex;font-size:16px}.upload-panel{display:flex;position:relative}.file-description{cursor:pointer;overflow:hidden;display:flex;width:90%}.file-description .ng-fa-icon.fa-file-pdf{color:#e21717}.file-description .ng-fa-icon.fa-file-word{color:#6979b9}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29417}.file-description .ng-fa-icon.fa-file-excel{color:#3fa300}.file-description .ng-fa-icon.fa-file-image{color:#e217da}.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#5d6a75}.file-description .ng-fa-icon{font-size:32px}.go-up-dots{margin-left:10px;margin-top:8px;font-size:20px}.go-up-icon .ng-fa-icon{padding:8px;display:block}.go-up-icon{width:30px;height:30px}.file-name{font-size:16px;color:#6e6e6e}.file-name-format{padding-left:10px}.file-format{font-size:10px}.url-input{width:358px;margin-left:8px;height:27px;border:1px solid #25c2d4}.url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.url-check .ng-fa-icon{display:block;padding:8px}.upload-url{display:flex}.list-files-lines{border-top:1px solid #ccc}.gd-dnd-wrap{border:2px dashed #ccc;background-color:#f8f8f8;cursor:default;position:absolute;width:983px;height:626px;opacity:.9;z-index:1;left:20px;display:flex;text-align:center;justify-content:center;align-content:center;flex-direction:column}.gd-dnd-wrap h2{color:#959da5;font-size:15px;font-weight:300}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}@media (max-width:1025px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}}"]
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
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
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
     * @param {?=} name
     * @param {?=} sep
     * @return {?}
     */
    ZoomService.prototype.createZoomOption = /**
     * @private
     * @param {?} val
     * @param {?=} name
     * @param {?=} sep
     * @return {?}
     */
    function (val, name, sep) {
        if (name === void 0) { name = val + '%'; }
        if (sep === void 0) { sep = false; }
        return { value: val, name: name, separator: sep, prefix: "%" };
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
        return [this.createZoomOption(25),
            this.createZoomOption(50),
            this.createZoomOption(100),
            this.createZoomOption(150),
            this.createZoomOption(200),
            this.createZoomOption(300),
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
var $$3 = jquery__WEBPACK_IMPORTED_MODULE_2__;
var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(_elementRef, zoomService) {
        var _this = this;
        this._elementRef = _elementRef;
        this.wait = false;
        zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.zoom = val;
        }));
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
    DocumentComponent.prototype.ifPdf = /**
     * @return {?}
     */
    function () {
        return FileUtil.find(this.file.guid, false).format === "Portable Document Format";
    };
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ifImage = /**
     * @return {?}
     */
    function () {
        return FileUtil.find(this.file.guid, false).format === "Joint Photographic Experts Group";
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DocumentComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.refreshView = !this.refreshView;
    };
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ifChromeOrFirefox = /**
     * @return {?}
     */
    function () {
        return navigator.userAgent.toLowerCase().indexOf('chrome') > -1 || this.ifFirefox();
    };
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ifFirefox = /**
     * @return {?}
     */
    function () {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
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
            $$3(element).trigger('focus');
        }
    };
    DocumentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-document',
                    template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" gdScrollable [onRefresh]=\"refreshView\">\n  <div class=\"panzoom\" gdZoom [zoomActive]=\"ifFirefox()\" gdSearchable>\n    <div [ngClass]=\"(ifFirefox() && zoom > 110) ? 'page gd-zoomed' : 'page'\" *ngFor=\"let page of file?.pages\" gdZoom [zoomActive]=\"!ifFirefox()\"\n         [style.width.pt]=\"ifPdf() ? page.width : 'unset'\"\n         [style.height.pt]=\"(ifPdf() || ifImage()) && ifChromeOrFirefox() ? page.height : 'unset'\" gdRotation\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\n    </div>\n  </div>\n</div>\n",
                    styles: [".document{background-color:#e7e7e7;width:100%;height:100%;overflow-x:hidden;overflow-y:auto!important;transition:.4s;padding:0;margin:0}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 4px 12px -4px rgba(0,0,0,.38);transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:50% 50% 0;display:flex;justify-content:center;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}@media (max-width:1025px){.document{overflow-x:auto!important}.panzoom{flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
                }] }
    ];
    /** @nocollapse */
    DocumentComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: ZoomService }
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
                    template: "<div id=\"page-{{number}}\"\n     [style.min-width.px]=\"width\" [style.min-height.px]=\"height\">\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\" [contentEditable]=\"(editable) ? true : false\"\n      gdEditor [text]=\"data\"></div>\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\n       alt=\"\"\n       *ngIf=\"data && !isHtml\">\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n    &nbsp;Loading... Please wait.\n  </div>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper img{width:inherit}.gd-wrapper div{width:100%}.gd-highlight{background-color:#ff0}.gd-highlight-select{background-color:#ff9b00}"]
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
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] }
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
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] }
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
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] }
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
var ChoiceButtonComponent = /** @class */ (function () {
    function ChoiceButtonComponent() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.open = false;
    }
    /**
     * @return {?}
     */
    ChoiceButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ChoiceButtonComponent.prototype.openChoices = /**
     * @return {?}
     */
    function () {
        this.open = !this.open;
    };
    /**
     * @param {?} choice
     * @return {?}
     */
    ChoiceButtonComponent.prototype.select = /**
     * @param {?} choice
     * @return {?}
     */
    function (choice) {
        this.selected.emit(choice);
        this.open = false;
    };
    ChoiceButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-choice-button',
                    template: "<div class=\"choice-button\">\n  <fa-icon [icon]=\"['fas',icon]\"></fa-icon>\n  <span class=\"button-name\">{{name}}</span>\n  <div class=\"down\">\n    <fa-icon [icon]=\"['fas','angle-down']\" (click)=\"openChoices()\"></fa-icon>\n  </div>\n  <div class=\"choices\" *ngIf=\"open\">\n    <div class=\"upload-from\">Upload from:</div>\n    <div class=\"choice\" *ngFor=\"let choice of choices\" (click)=\"select(choice.name)\">\n        <fa-icon [icon]=\"['fas',choice.icon]\"></fa-icon>\n      {{choice.name}}\n    </div>\n  </div>\n</div>\n",
                    styles: [".choice-button{width:137px;height:31px;color:#fff;background-color:#25c2d4;display:flex}.choice-button .ng-fa-icon{padding:8px;font-size:15px}.down{cursor:pointer;background-color:#1fa5b4;width:31px;font-size:10px;display:flex;justify-content:center}.button-name{font-size:10px;padding-top:11px;padding-right:27px}.choices{color:#b2b8bd;top:33px;left:109px;position:absolute;padding:5px;margin:0;background-color:#fff;width:80px;border:0;border-radius:0;box-shadow:0 0 6px #ccc}.choice{cursor:pointer;font-size:12px;padding:3px}.choice i{color:#959da5}.upload-from{font-size:7px}"]
                }] }
    ];
    /** @nocollapse */
    ChoiceButtonComponent.ctorParameters = function () { return []; };
    ChoiceButtonComponent.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        choices: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ChoiceButtonComponent;
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
                    template: "<div class=\"gd-drag-n-drop-wrap\" id=\"gd-dropZone\" gdDnd (closing)=\"onCloseUpload()\" (click)=\"close($event)\">\n  <div class=\"gd-drag-n-drop-icon\">\n    <fa-icon [icon]=\"['fas','cloud-download-alt']\" size=\"5x\"></fa-icon>\n  </div>\n  <h2>Drag &amp; Drop your files here</h2> \n  <h4>OR</h4> \n  <div class=\"gd-drag-n-drop-buttons\"> \n    <label class=\"btn btn-primary\"> \n      <fa-icon [icon]=\"['fas','file']\"></fa-icon>\n      SELECT FILE \n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      </label>\n  </div>\n</div>\n",
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
        this.isBackground = true;
        this.background = 'transparent';
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
        if (this.isBackground) {
            this.background = '#999';
        }
        else {
            this.opening.emit(true);
        }
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
        if (this.isBackground) {
            this.background = '#f8f8f8';
        }
        else {
            this.closeArea();
        }
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
            this.background = '#f8f8f8';
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
        isBackground: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.background',] }],
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
        this._checkPreload = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"]((/**
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
        this._navigate = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"]((/**
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
var MOBILE_MAX_WIDTH = 425;
/** @type {?} */
var TABLET_MAX_WIDTH = 1024;
var WindowService = /** @class */ (function () {
    function WindowService() {
        var _this = this;
        this.resizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this._resize$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(window, 'resize')
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
    return WindowService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $$4 = jquery__WEBPACK_IMPORTED_MODULE_2__;
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
        var isSameTop = (prev && $$4(prev).offset().top === $$4(page).offset().top);
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
            el.scrollTo(options);
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
            return el.children.item(0).children;
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
            return el.children.item(0).children.item(pageNumber - 1);
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
        var count = this.ifFirefox() ? 1 : this.countPagesOnWidth();
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
    ScrollableDirective.prototype.ifFirefox = /**
     * @return {?}
     */
    function () {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
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
        onRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
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
    function ZoomDirective(_zoomService, _sanitizer) {
        this._zoomService = _zoomService;
        this._sanitizer = _sanitizer;
        this.zoomActive = true;
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
        this.zoomStr = Math.round(zoom) + '%';
        this.zoomInt = zoom === 100 ? 1 : zoom / 100;
        this.mozTransform = 'scale(' + this.zoomInt + ', ' + this.zoomInt + ')';
        this.mozTransformOrigin = 'top';
        /** @type {?} */
        var transform = this._sanitizer.bypassSecurityTrustStyle('(' + this.zoomInt + ', ' + this.zoomInt + ')');
        this.webkitTransform = transform;
        this.msTransform = transform;
        this.oTransform = transform;
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
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] }
    ]; };
    ZoomDirective.propDecorators = {
        zoomActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        zoomStr: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.zoom',] }],
        zoomInt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.zoom',] }],
        mozTransform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.-moz-transform',] }],
        mozTransformOrigin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.-moz-transform-origin',] }],
        webkitTransform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.-webkit-transform',] }],
        msTransform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.-ms-transform',] }],
        oTransform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.-o-transform',] }]
    };
    return ZoomDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OnCloseService = /** @class */ (function () {
    function OnCloseService() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
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
     * @param {?} prefix
     * @return {?}
     */
    SelectComponent.prototype.select = /**
     * @param {?} $event
     * @param {?} value
     * @param {?} prefix
     * @return {?}
     */
    function ($event, value, prefix) {
        $event.preventDefault();
        $event.stopPropagation();
        this.showSelected = value + prefix;
        this.selected.emit(value);
        this.close();
    };
    SelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-select',
                    template: "<div class=\"select\">\n  <span class=\"selected-value\" gdDisabledCursor [dis]=\"disabled\" (click)=\"toggle($event)\">{{showSelected}}</span>\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\" (click)=\"toggle($event)\"></span>\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\n    <div *ngFor=\"let option of options\">\n      <div *ngIf=\"!option.separator\" (click)=\"select($event, option.value, option.prefix)\" class=\"option\">{{option.name}}</div>\n      <div *ngIf=\"option.separator\" role=\"separator\" class=\"dropdown-menu-separator\"></div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".select{min-width:50px;color:#959da5}.selected-value{font-size:14px;cursor:pointer}.selected-value.inactive{cursor:not-allowed;color:rgba(255,255,255,.3)}.nav-caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent;cursor:pointer}.nav-caret.inactive{cursor:not-allowed;color:rgba(255,255,255,.3)}.dropdown-menu{position:absolute;top:49px;z-index:1000;float:left;min-width:160px;padding:5px 0;list-style:none;font-size:13px;text-align:left;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box}.dropdown-menu .option{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;white-space:nowrap;cursor:pointer}.dropdown-menu .option:hover{background-color:#25c2d4;color:#fff}.dropdown-menu-separator{height:1px;margin:8px 0;overflow:hidden;background-color:#e5e5e5;padding:0!important}"]
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
    }
    /**
     * @return {?}
     */
    InitStateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    InitStateComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-init-state',
                    template: "<div class=\"wrapper\">\n  <fa-icon class=\"icon\" [icon]=\"['fas',icon]\"></fa-icon>\n  <span class=\"text\">{{text}}</span>\n  <span class=\"start\">Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file</span>\n</div>\n",
                    styles: [".wrapper{color:#959da5;background-color:#e7e7e7;display:flex;flex-direction:column;justify-content:center;align-content:center;width:100%;height:100%}.icon{font-size:65px;text-align:center;margin-bottom:38px}.start,.text{font-size:15px;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    InitStateComponent.ctorParameters = function () { return []; };
    InitStateComponent.propDecorators = {
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
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
        this._render = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            return _this._observer = observer;
        }));
        this._renderBlob = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"]((/**
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
                for (var pages_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__values"])(pages), pages_1_1 = pages_1.next(); !pages_1_1.done; pages_1_1 = pages_1.next()) {
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
                for (var pages_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__values"])(pages), pages_2_1 = pages_2.next(); !pages_2_1.done; pages_2_1 = pages_2.next()) {
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
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"]('Server is not available');
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
                    template: "<gd-modal id=\"gd-error-message\" [title]=\"'Error message'\">\n  <div class=\"gd-modal-error\">{{message ? message : 'Server is not available'}}</div>\n</gd-modal>\n",
                    styles: [".gd-modal-error{position:absolute;background-color:#fff;font-size:13px;padding:20px}"]
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
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
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
                    template: "<gd-modal id=\"gd-password-required\" [title]=\"'Password required'\">\n  <section id=\"gd-password-section\" class=\"tab-slider-body\">\n    <div class=\"inner-addon left-addon btn gd-password-wrap\" id=\"gd-password-wrap\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Enter password\" #pass\n             (keyup.enter)=\"setPassword(pass.value)\">\n      <button class=\"btn btn-primary gd-password-submit\" (click)=\"setPassword(pass.value)\">Submit</button>\n      <span class=\"gd-password-error\">{{message}}</span>\n    </div>\n  </section>\n</gd-modal>\n",
                    styles: [".gd-password-wrap{position:relative}.gd-password-wrap>input{padding-left:12px;width:454px;height:32px;color:#585858;float:left}.gd-password-submit{color:#fff;background-color:#3e4d59;padding:7px 16px 6px;font-size:12px;cursor:pointer;float:left}.gd-password-error{color:red;padding-top:10px;float:left}@media (max-width:1025px){.gd-password-wrap>input{width:50%}}"]
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
            if (exception instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpErrorResponse"]) {
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["throwError"])(exception);
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
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this._textChange = this._observer.asObservable();
        this._observerCurrent = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this._currentChange = this._observerCurrent.asObservable();
        this._observerTotal = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
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
                    template: "<div class=\"gd-nav-search-container\">\n  <input type=\"text\" class=\"gd-search-input\" #text (input)=\"setText(text.value)\"/>\n  <div class=\"gd-search-count\">{{current}} of {{total}}</div>\n  <div class=\"gd-nav-search-btn\" (click)=\"prev()\">\n    <fa-icon [icon]=\"['fas','chevron-left']\"></fa-icon>\n  </div>\n  <div class=\"gd-nav-search-btn\" (click)=\"next()\">\n    <fa-icon [icon]=\"['fas','chevron-right']\"></fa-icon>\n  </div>\n  <div class=\"gd-nav-search-btn gd-nav-search-cancel\" (click)=\"hide()\">\n    <fa-icon [icon]=\"['fas','times']\"></fa-icon>\n  </div>\n</div>\n",
                    styles: [".gd-nav-search-btn{float:left;margin:0 10px;padding:3px 5px;cursor:pointer;color:#959da5}.gd-nav-search-cancel{font-size:15px;width:10px;margin-left:1px;margin-top:-2px}.gd-search-count{color:#959da5;font-size:11px;position:absolute;left:221px;top:13px;text-align:right;width:62px}.gd-nav-search-container{background-color:#3e4e5a;min-width:330px;padding:8px 0 7px 7px;position:absolute;left:328px;top:49px;z-index:1}.gd-search-input{float:left;height:11px;width:215px;padding:5px 65px 5px 5px}@media (max-width:1025px){.gd-nav-search-container{top:70px;left:45%}.gd-search-input{width:auto}.gd-search-count{left:48%}}@media (min-width:401px) and (max-width:700px){.gd-search-input{width:226px}.gd-search-count{left:55%}}@media (max-width:500px){.gd-nav-search-container{width:100%;left:0}}"]
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
var $$5 = jquery__WEBPACK_IMPORTED_MODULE_2__;
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
                $$5(value).removeClass('gd-highlight-select');
            }));
            /** @type {?} */
            var currentEl = el.querySelectorAll('.gd-highlight')[this.current - 1];
            $$5(currentEl).addClass('gd-highlight-select');
            if (currentEl) {
                /** @type {?} */
                var options = {
                    left: 0,
                    top: ($$5(currentEl).offset().top * currentZoom) + el.parentElement.scrollTop - 150,
                };
                el.parentElement.scrollTo(options);
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
        var textNodes = $$5(el).find('*').contents().filter((/**
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
            var $this = $$5(this);
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
                    template: "<div class=\"top-panel\">\n  <gd-logo [logo]=\"'editor'\" [icon]=\"'pen-square'\"></gd-logo>\n  <ng-content></ng-content>\n</div>\n",
                    styles: [".top-panel{background:#3e4e5a;display:flex;width:100%;height:90px}.top-panel ::ng-deep .logo{height:30px;font-size:16px}@media (max-width:480px){.top-panel{height:60px}.top-panel ::ng-deep .logo{height:60px}}"]
                }] }
    ];
    /** @nocollapse */
    TabbedToolbarsComponent.ctorParameters = function () { return []; };
    return TabbedToolbarsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.tabs = [];
    }
    /**
     * @return {?}
     */
    TabsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsComponent.prototype.addTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    };
    /**
     * @param {?} tabComponent
     * @return {?}
     */
    TabsComponent.prototype.selectTab = /**
     * @param {?} tabComponent
     * @return {?}
     */
    function (tabComponent) {
        this.tabs.forEach((/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            tab.active = false;
        }));
        tabComponent.active = true;
    };
    TabsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-tabs',
                    template: "<div class=\"gd-tabs\">\n  <div [ngClass]=\"(tab.active) ? 'gd-tab active' : 'gd-tab'\" *ngFor=\"let tab of tabs\" (mousedown)=\"selectTab(tab)\">\n    <div class=\"title\">{{tab.tabTitle}}</div>\n    <fa-icon [icon]=\"['fas',tab.icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  </div>\n</div>\n<ng-content></ng-content>\n",
                    styles: [".gd-tabs{display:flex}.gd-tab{text-align:center;font-size:11px;color:#e5e5e5;height:30px;line-height:30px;cursor:pointer;display:flex;align-items:center;justify-content:center}.gd-tab .icon{display:none;font-size:14px;margin:auto 23px}.gd-tab .title{margin:auto 23px}.gd-tab.active{background-color:#fff;color:#3e4e5a;font-weight:700}@media (max-width:480px){.gd-tab{height:60px;line-height:60px}.gd-tab .title{display:none}.gd-tab .icon{display:block}}"]
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
var TabComponent = /** @class */ (function () {
    function TabComponent(tabs) {
        tabs.addTab(this);
    }
    /**
     * @return {?}
     */
    TabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TabComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-tab',
                    template: "<div [ngClass]=\"(active) ? 'gd-editor-buttons active' : 'gd-editor-buttons'\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: [".gd-editor-buttons{height:60px;position:absolute;background-color:#fff;width:100%;left:0;line-height:60px;display:none}.gd-editor-buttons ::ng-deep .toolbar-panel{height:60px}.gd-editor-buttons.active{display:flex}"]
                }] }
    ];
    /** @nocollapse */
    TabComponent.ctorParameters = function () { return [
        { type: TabsComponent }
    ]; };
    TabComponent.propDecorators = {
        tabTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return TabComponent;
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
    Formatting.DEFAULT = new Formatting(10, '#000000', '#FFFFFF', false, false, false, 'Arial', false, "", "");
    return Formatting;
}());
var FormattingService = /** @class */ (function () {
    function FormattingService() {
        this._observerBold = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this._formatBoldChange = this._observerBold.asObservable();
        this._observerUnderline = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this._formatUnderlineChange = this._observerUnderline.asObservable();
        this._observerUndo = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this._undo = this._observerUndo.asObservable();
        this._observerRedo = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this._redo = this._observerRedo.asObservable();
        this._observerItalic = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this._formatItalicChange = this._observerItalic.asObservable();
        this._observerColor = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this._formatColorChange = this._observerColor.asObservable();
        this._observerBgColor = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this._formatBgColorChange = this._observerBgColor.asObservable();
        this._observerFontSize = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this._formatFontSizeChange = this._observerFontSize.asObservable();
        this._observerFont = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this._formatFontChange = this._observerFont.asObservable();
        this._observerStrikeout = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this._formatStrikeoutChange = this._observerStrikeout.asObservable();
        this._observerAlign = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this._formatAlignChange = this._observerAlign.asObservable();
        this._observerList = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
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
        return { value: val, name: val + 'px', separator: false, prefix: "px" };
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
        return { value: val, name: val, separator: false, prefix: "" };
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
var DEFAULT_COLORS = ['#000000', '#993300', '#333300', '#000080', '#333399', '#333333',
    '#800000', '#FF6600', '#808000', '#008000', '#008080', '#0000FF',
    '#666699', '#808080', '#FF0000', '#FF9900', '#99CC00', '#339966',
    '#33CCCC', '#3366FF', '#800080', '#999999', '#FF00FF', '#FFCC00',
    '#FFFF00', '#00FF00', '#00FFFF', '#00CCFF', '#993366', '#C0C0C0',
    '#FF99CC', '#FFCC99', '#FFFF99', '#CCFFFF', '#99CCFF', '#FFFFFF'];
var ColorPickerComponent = /** @class */ (function () {
    function ColorPickerComponent() {
        this.selectedColor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
    ColorPickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-color-picker',
                    template: "<div class=\"bcPicker-picker\">\n  <div class=\"bcPicker-palette\">\n    <div class=\"bcPicker-color\" *ngFor=\"let color of colors\" [style.background-color]=\"color\" (click)=\"select($event, color)\"></div>\n  </div>\n</div>\n",
                    styles: [".bcPicker-picker{border:1px;border-radius:100%}.bcPicker-palette{width:232px;padding:5px;border:1px solid #efefef;background-color:#fdfdfd;z-index:999}.bcPicker-palette>.bcPicker-color{width:14px;height:14px;margin:2px;display:inline-block;border:1px solid #efefef;background-color:#9da97b;cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    ColorPickerComponent.ctorParameters = function () { return []; };
    ColorPickerComponent.propDecorators = {
        selectedColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ColorPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BackFormattingService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__extends"])(BackFormattingService, _super);
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
        this.selection = window.getSelection().getRangeAt(0);
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
var $$6 = jquery__WEBPACK_IMPORTED_MODULE_2__;
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
            this.bgColor = $$6(window.getSelection().focusNode.parentNode).css('background-color').toString();
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
        $$6(selection).css("text-align", align);
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
                    styles: [".check_mark{margin:0 auto}.sa-icon{width:80px;height:80px;border:4px solid gray;border-radius:50%;padding:0;position:relative;box-sizing:content-box}#gd-modal-success{display:flex;overflow:hidden}.sa-icon.sa-success{border-color:#4caf50}.sa-icon.sa-success::after,.sa-icon.sa-success::before{content:'';position:absolute;width:60px;height:120px;background:#fff}.sa-icon.sa-success::before{border-radius:120px 0 0 120px;top:-7px;left:-33px;transform:rotate(-45deg);transform-origin:60px 60px}.sa-icon.sa-success::after{border-radius:0 120px 120px 0;top:-11px;left:30px;transform:rotate(-45deg);transform-origin:0 60px}.sa-icon.sa-success .sa-placeholder{width:80px;height:80px;border:4px solid rgba(76,175,80,.5);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.sa-icon.sa-success .sa-fix{width:5px;height:90px;background-color:#fff;position:absolute;left:28px;top:8px;z-index:1;transform:rotate(-45deg)}.sa-icon.sa-success.animate::after{-webkit-animation:4.25s ease-in rotatePlaceholder;animation:4.25s ease-in rotatePlaceholder}.animateSuccessTip{-webkit-animation:.75s animateSuccessTip;animation:.75s animateSuccessTip}.animateSuccessLong{-webkit-animation:.75s animateSuccessLong;animation:.75s animateSuccessLong}@-webkit-keyframes animateSuccessLong{0%,65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}100%{width:47px;right:8px;top:38px}}@-webkit-keyframes animateSuccessTip{0%,54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}100%{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%,54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}100%{width:25px;left:14px;top:45px}}@keyframes animateSuccessLong{0%,65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}100%{width:47px;right:8px;top:38px}}.sa-icon.sa-success .sa-line{height:5px;background-color:#4caf50;display:block;border-radius:2px;position:absolute;z-index:2}.sa-icon.sa-success .sa-line.sa-tip{width:25px;left:14px;top:46px;transform:rotate(45deg)}.sa-icon.sa-success .sa-line.sa-long{width:47px;right:8px;top:38px;transform:rotate(-45deg)}@-webkit-keyframes rotatePlaceholder{0%,5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}100%,12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%,5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}100%,12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}@media (max-width:1025px){#gd-modal-success{left:50%;top:50%;position:relative;transform:translate(-50%,-50%)}}"]
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
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
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
var LoadingMaskComponent = /** @class */ (function () {
    function LoadingMaskComponent() {
        this.loadingMask = false;
    }
    /**
     * @return {?}
     */
    LoadingMaskComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    LoadingMaskComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gd-loading-mask',
                    template: "<div class=\"loading-wrapper\" *ngIf=\"loadingMask\">\n    <div class=\"loading-message\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;Loading... Please wait.\n    </div>\n</div>\n",
                    styles: [".loading-wrapper{background:rgba(0,0,0,.5);width:100%;height:100%;font-size:14px;color:#fff;position:fixed;top:0;left:0;z-index:99999}.loading-message{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}"]
                }] }
    ];
    /** @nocollapse */
    LoadingMaskComponent.ctorParameters = function () { return []; };
    LoadingMaskComponent.propDecorators = {
        loadingMask: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return LoadingMaskComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingMaskService = /** @class */ (function () {
    function LoadingMaskService() {
        this.onLoadingChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.requests = [];
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
        this.requests.push(req);
        this.notify();
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
        this._loadingMaskService.onRequestStart(req);
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])((/**
         * @return {?}
         */
        function () {
            this._loadingMaskService.onRequestFinish(req);
        })));
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
var providers = [ConfigService,
    Api,
    ModalService,
    FileService,
    FileModel,
    FileUtil,
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
    LoadingMaskService];
var CommonComponentsModule = /** @class */ (function () {
    function CommonComponentsModule() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["far"]);
    }
    CommonComponentsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]],
                    declarations: [
                        TopToolbarComponent,
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
                        ChoiceButtonComponent,
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
                        LoadingMaskComponent
                    ],
                    exports: [
                        TopToolbarComponent,
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
                        ChoiceButtonComponent,
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
                        LoadingMaskComponent
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

/***/ "../../libs/editor/src/environments/environment.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/libs/editor/src/environments/environment.ts ***!
  \*********************************************************************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    name: 'dev',
    apiUrl: 'http://localhost:8080',
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

/***/ "../../libs/editor/src/index.ts":
/*!**************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/libs/editor/src/index.ts ***!
  \**************************************************************************************/
/*! exports provided: initializeApp, setupLoadingInterceptor, EditorModule, EditorAppComponent, EditorConfigService, EditorConfig, EditorService */
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








/***/ }),

/***/ "../../libs/editor/src/lib/create.document-modal/create.document-modal.component.less":
/*!********************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/libs/editor/src/lib/create.document-modal/create.document-modal.component.less ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-create-wrap {\n  display: flex;\n}\n.gd-create-wrap div {\n  display: flex;\n}\n.gd-create-wrap input {\n  width: 204px;\n}\nspan {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n/deep/ .gd-select-format .dropdown-menu {\n  height: 150px;\n  overflow: hidden;\n  overflow-y: auto;\n  top: 89px !important;\n  left: 356px;\n  min-width: 0 !important;\n  width: 90px;\n}\n.gd-create-submit {\n  margin-left: 10px;\n  width: 49px;\n  height: 24px;\n  color: #FFF;\n  background-color: #25C2D4;\n  border: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvZWRpdG9yLWRldmVsb3BtZW50L2xpYnMvZWRpdG9yL3NyYy9saWIvY3JlYXRlLmRvY3VtZW50LW1vZGFsL2NyZWF0ZS5kb2N1bWVudC1tb2RhbC5jb21wb25lbnQubGVzcyIsImxpYnMvZWRpdG9yL3NyYy9saWIvY3JlYXRlLmRvY3VtZW50LW1vZGFsL2NyZWF0ZS5kb2N1bWVudC1tb2RhbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBRENBO0VBQ0UsYUFBQTtBQ0NGO0FEQ0E7RUFDRSxZQUFBO0FDQ0Y7QURFQTtFQUNHLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSDtBREVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNBRjtBREdBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUNERiIsImZpbGUiOiJsaWJzL2VkaXRvci9zcmMvbGliL2NyZWF0ZS5kb2N1bWVudC1tb2RhbC9jcmVhdGUuZG9jdW1lbnQtbW9kYWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2QtY3JlYXRlLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmdkLWNyZWF0ZS13cmFwIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZ2QtY3JlYXRlLXdyYXAgaW5wdXQge1xuICB3aWR0aDogMjA0cHg7XG59XG5cbnNwYW4ge1xuICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4vZGVlcC8gLmdkLXNlbGVjdC1mb3JtYXQgLmRyb3Bkb3duLW1lbnUge1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB0b3A6IDg5cHggIWltcG9ydGFudDtcbiAgbGVmdDogMzU2cHg7XG4gIG1pbi13aWR0aDogMCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTBweDtcbn1cblxuLmdkLWNyZWF0ZS1zdWJtaXQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDQ5cHg7XG4gIGhlaWdodDogMjRweDtcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNUMyRDQ7XG4gIGJvcmRlcjogMDtcbn1cbiIsIi5nZC1jcmVhdGUtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZ2QtY3JlYXRlLXdyYXAgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5nZC1jcmVhdGUtd3JhcCBpbnB1dCB7XG4gIHdpZHRoOiAyMDRweDtcbn1cbnNwYW4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuIC9kZWVwLyAuZ2Qtc2VsZWN0LWZvcm1hdCAuZHJvcGRvd24tbWVudSB7XG4gIGhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHRvcDogODlweCAhaW1wb3J0YW50O1xuICBsZWZ0OiAzNTZweDtcbiAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5MHB4O1xufVxuLmdkLWNyZWF0ZS1zdWJtaXQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDQ5cHg7XG4gIGhlaWdodDogMjRweDtcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNUMyRDQ7XG4gIGJvcmRlcjogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "../../libs/editor/src/lib/create.document-modal/create.document-modal.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/libs/editor/src/lib/create.document-modal/create.document-modal.component.ts ***!
  \******************************************************************************************************************************************/
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
        this._format = $event;
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
/*!***********************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/libs/editor/src/lib/editor-app.component.less ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".current-page-number {\n  margin: 0px 15px;\n  font-size: 14px;\n  color: #959da5;\n}\n* {\n  -webkit-user-select: none;\n  /* Chrome all / Safari all */\n  -moz-user-select: none;\n  /* Firefox all */\n  -ms-user-select: none;\n  /* IE 10+ */\n  user-select: text;\n}\n.wrapper {\n  align-items: stretch;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.doc-panel {\n  display: flex;\n  height: inherit;\n}\n.gd-document {\n  width: 100%;\n  height: calc(100% - 90px);\n}\n.top-panel {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.toolbar-panel {\n  width: 100%;\n}\n/deep/ .gd-wrapper {\n  padding: 96px;\n  -webkit-user-select: text;\n  /* Chrome all / Safari all */\n  -moz-user-select: text;\n  /* Firefox all */\n  -ms-user-select: text;\n  /* IE 10+ */\n  user-select: text;\n  outline: none;\n}\n/deep/ .dropdown-menu {\n  min-width: unset !important;\n}\n.format-select {\n  margin: 0px 15px;\n}\n.palette {\n  position: absolute;\n  top: 90px;\n  z-index: 100;\n}\n.background-color-picker {\n  left: 700px;\n}\n.color-picker {\n  left: 750px;\n}\n.bg-color-pic {\n  border-radius: 100%;\n  border: 1px solid #CCC;\n  position: absolute;\n  height: 8px;\n  width: 8px;\n  right: 6px;\n  bottom: 6px;\n}\n/deep/ .gd-editor-buttons .button .tooltip {\n  margin-top: 45px;\n  margin-left: -36px;\n}\n/deep/ .gd-edit.active {\n  background-color: #7E8991;\n  border-radius: 5px;\n}\n/deep/ .gd-edit.active i {\n  color: #FFFFFF;\n}\n/deep/ .page {\n  width: 800px;\n}\n/deep/ .save-as-button-icon {\n  font-size: 11px;\n  left: 22px !important;\n  top: 13px !important;\n}\n.save-button {\n  position: absolute;\n  top: -5px;\n  left: 21px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvZWRpdG9yLWRldmVsb3BtZW50L2xpYnMvZWRpdG9yL3NyYy9saWIvZWRpdG9yLWFwcC5jb21wb25lbnQubGVzcyIsImxpYnMvZWRpdG9yL3NyYy9saWIvZWRpdG9yLWFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNERjtBREdBO0VBQ0UseUJBQUE7RUNEQSw0QkFBNEI7RURFNUIsc0JBQUE7RUNBQSxnQkFBZ0I7RURDaEIscUJBQUE7RUNDQSxXQUFXO0VEQVgsaUJBQUE7QUNFRjtBREFBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDRUY7QURDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDQ0Y7QURFQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQ0FGO0FER0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDREY7QURJQTtFQUNFLFdBQUE7QUNGRjtBREtBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VDSEEsNEJBQTRCO0VESTVCLHNCQUFBO0VDRkEsZ0JBQWdCO0VER2hCLHFCQUFBO0VDREEsV0FBVztFREVYLGlCQUFBO0VBQ0EsYUFBQTtBQ0FGO0FER0E7RUFDRSwyQkFBQTtBQ0RGO0FESUE7RUFDRSxnQkFBQTtBQ0ZGO0FES0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDSEY7QURNQTtFQUNFLFdBQUE7QUNKRjtBRE9BO0VBQ0UsV0FBQTtBQ0xGO0FEUUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDTkY7QURTQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNQRjtBRFVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQ1JGO0FEV0E7RUFDRSxjQUFBO0FDVEY7QURZQTtFQUNFLFlBQUE7QUNWRjtBRGFBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNYRjtBRGNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ1pGIiwiZmlsZSI6ImxpYnMvZWRpdG9yL3NyYy9saWIvZWRpdG9yLWFwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjLy4uLy4uL2xpYnMvY29tbW9uLWNvbXBvbmVudHMvc3JjL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuLmN1cnJlbnQtcGFnZS1udW1iZXIge1xuICBtYXJnaW46IDBweCAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOTU5ZGE1O1xufVxuKntcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgIC8qIENocm9tZSBhbGwgLyBTYWZhcmkgYWxsICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAvKiBGaXJlZm94IGFsbCAqL1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgLyogSUUgMTArICovXG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xufVxuLndyYXBwZXIge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5kb2MtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5nZC1kb2N1bWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IH5cImNhbGMoMTAwJSAtIEB7ZWRpdG9yLW5hdi1oZWlnaHR9KVwiO1xufVxuXG4udG9wLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b29sYmFyLXBhbmVsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi9kZWVwLyAuZ2Qtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDk2cHg7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7ICAvKiBDaHJvbWUgYWxsIC8gU2FmYXJpIGFsbCAqL1xuICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0OyAgICAgLyogRmlyZWZveCBhbGwgKi9cbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0OyAgICAgIC8qIElFIDEwKyAqL1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuL2RlZXAvIC5kcm9wZG93bi1tZW51IHtcbiAgbWluLXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4uZm9ybWF0LXNlbGVjdCB7XG4gIG1hcmdpbjogMHB4IDE1cHg7XG59XG5cbi5wYWxldHRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDkwcHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmJhY2tncm91bmQtY29sb3ItcGlja2VyIHtcbiAgbGVmdDogNzAwcHg7XG59XG5cbi5jb2xvci1waWNrZXIge1xuICBsZWZ0OiA3NTBweDtcbn1cblxuLmJnLWNvbG9yLXBpYyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0M7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA4cHg7XG4gIHJpZ2h0OiA2cHg7XG4gIGJvdHRvbTogNnB4O1xufVxuXG4vZGVlcC8gLmdkLWVkaXRvci1idXR0b25zIC5idXR0b24gLnRvb2x0aXAge1xuICBtYXJnaW4tdG9wOiA0NXB4O1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG59XG5cbi9kZWVwLyAuZ2QtZWRpdC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0U4OTkxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi9kZWVwLyAuZ2QtZWRpdC5hY3RpdmUgaSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4vZGVlcC8gLnBhZ2Uge1xuICB3aWR0aDogODAwcHg7XG59XG5cbi9kZWVwLyAuc2F2ZS1hcy1idXR0b24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGVmdDogMjJweCAhaW1wb3J0YW50O1xuICB0b3A6IDEzcHggIWltcG9ydGFudDtcbn1cblxuLnNhdmUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01cHg7XG4gIGxlZnQ6IDIxcHg7XG59XG4iLCIuY3VycmVudC1wYWdlLW51bWJlciB7XG4gIG1hcmdpbjogMHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5NTlkYTU7XG59XG4qIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogQ2hyb21lIGFsbCAvIFNhZmFyaSBhbGwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogRmlyZWZveCBhbGwgKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBJRSAxMCsgKi9cbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG59XG4ud3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5kb2MtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG4uZ2QtZG9jdW1lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA5MHB4KTtcbn1cbi50b3AtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi50b29sYmFyLXBhbmVsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4gL2RlZXAvIC5nZC13cmFwcGVyIHtcbiAgcGFkZGluZzogOTZweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLyogQ2hyb21lIGFsbCAvIFNhZmFyaSBhbGwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgLyogRmlyZWZveCBhbGwgKi9cbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAvKiBJRSAxMCsgKi9cbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4gL2RlZXAvIC5kcm9wZG93bi1tZW51IHtcbiAgbWluLXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xufVxuLmZvcm1hdC1zZWxlY3Qge1xuICBtYXJnaW46IDBweCAxNXB4O1xufVxuLnBhbGV0dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOTBweDtcbiAgei1pbmRleDogMTAwO1xufVxuLmJhY2tncm91bmQtY29sb3ItcGlja2VyIHtcbiAgbGVmdDogNzAwcHg7XG59XG4uY29sb3ItcGlja2VyIHtcbiAgbGVmdDogNzUwcHg7XG59XG4uYmctY29sb3ItcGljIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDhweDtcbiAgd2lkdGg6IDhweDtcbiAgcmlnaHQ6IDZweDtcbiAgYm90dG9tOiA2cHg7XG59XG4gL2RlZXAvIC5nZC1lZGl0b3ItYnV0dG9ucyAuYnV0dG9uIC50b29sdGlwIHtcbiAgbWFyZ2luLXRvcDogNDVweDtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xufVxuIC9kZWVwLyAuZ2QtZWRpdC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0U4OTkxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4gL2RlZXAvIC5nZC1lZGl0LmFjdGl2ZSBpIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4gL2RlZXAvIC5wYWdlIHtcbiAgd2lkdGg6IDgwMHB4O1xufVxuIC9kZWVwLyAuc2F2ZS1hcy1idXR0b24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGVmdDogMjJweCAhaW1wb3J0YW50O1xuICB0b3A6IDEzcHggIWltcG9ydGFudDtcbn1cbi5zYXZlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICBsZWZ0OiAyMXB4O1xufVxuIl19 */"

/***/ }),

/***/ "../../libs/editor/src/lib/editor-app.component.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/libs/editor/src/lib/editor-app.component.ts ***!
  \*********************************************************************************************************/
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
        this.formatting = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Formatting"].DEFAULT;
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
                    _this._editorService.upload(uploads.item(i), '', _this.editorConfig.rewrite).subscribe(function () {
                        _this.selectDir('');
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
        if (!this.file || !this.file.pages) {
            return;
        }
        for (var _i = 0, _a = this.file.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            page.data = null;
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
        this._formattingService.changeFormatFontSize($event);
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
        this._formattingService.changeFormatFont($event);
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
/*!**********************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/libs/editor/src/lib/editor-config.service.ts ***!
  \**********************************************************************************************************/
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "../../libs/editor/src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");







var EditorConfigService = /** @class */ (function () {
    function EditorConfigService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._editorConfig = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](new _editor_config__WEBPACK_IMPORTED_MODULE_2__["EditorConfig"]());
        this._updatedConfig = this._editorConfig.asObservable();
        _config.apiEndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
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
/*!**************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/libs/editor/src/lib/editor-config.ts ***!
  \**************************************************************************************************/
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
/*!**************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/libs/editor/src/lib/editor.module.ts ***!
  \**************************************************************************************************/
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
function setupLoadingInterceptor(service) {
    var result = function () { return new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_11__["LoadingMaskInterceptorService"](service); };
    return result;
}
var EditorModule = /** @class */ (function () {
    function EditorModule() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__["far"]);
    }
    EditorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_editor_app_component__WEBPACK_IMPORTED_MODULE_4__["EditorAppComponent"], _create_document_modal_create_document_modal_component__WEBPACK_IMPORTED_MODULE_9__["CreateDocumentModalComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_11__["CommonComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]
            ],
            providers: [
                _editor_service__WEBPACK_IMPORTED_MODULE_10__["EditorService"],
                _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_11__["ConfigService"],
                _editor_config_service__WEBPACK_IMPORTED_MODULE_12__["EditorConfigService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                    useFactory: initializeApp,
                    deps: [_editor_config_service__WEBPACK_IMPORTED_MODULE_12__["EditorConfigService"]], multi: true
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
/*!***************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/libs/editor/src/lib/editor.service.ts ***!
  \***************************************************************************************************/
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

/***/ "../../libs/viewer/src/environments/environment.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/libs/viewer/src/environments/environment.ts ***!
  \*********************************************************************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    name: 'dev',
    apiUrl: 'http://localhost:8080/',
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

/***/ "../../libs/viewer/src/index.ts":
/*!**************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/libs/viewer/src/index.ts ***!
  \**************************************************************************************/
/*! exports provided: initializeApp, setupLoadingInterceptor, ViewerModule, ViewerAppComponent, ViewerService, ViewerConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_viewer_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/viewer.module */ "../../libs/viewer/src/lib/viewer.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return _lib_viewer_module__WEBPACK_IMPORTED_MODULE_0__["initializeApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupLoadingInterceptor", function() { return _lib_viewer_module__WEBPACK_IMPORTED_MODULE_0__["setupLoadingInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewerModule", function() { return _lib_viewer_module__WEBPACK_IMPORTED_MODULE_0__["ViewerModule"]; });

/* harmony import */ var _lib_viewer_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/viewer-app.component */ "../../libs/viewer/src/lib/viewer-app.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewerAppComponent", function() { return _lib_viewer_app_component__WEBPACK_IMPORTED_MODULE_1__["ViewerAppComponent"]; });

/* harmony import */ var _lib_viewer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/viewer.service */ "../../libs/viewer/src/lib/viewer.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewerService", function() { return _lib_viewer_service__WEBPACK_IMPORTED_MODULE_2__["ViewerService"]; });

/* harmony import */ var _lib_viewer_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/viewer-config.service */ "../../libs/viewer/src/lib/viewer-config.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewerConfigService", function() { return _lib_viewer_config_service__WEBPACK_IMPORTED_MODULE_3__["ViewerConfigService"]; });







/***/ }),

/***/ "../../libs/viewer/src/lib/thumbnails/thumbnails.component.less":
/*!**********************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/libs/viewer/src/lib/thumbnails/thumbnails.component.less ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-thumbnails {\n  z-index: 9;\n  padding: 10pt;\n  width: 200pt;\n  background: #f5f5f5;\n  color: #ffffff;\n  overflow-y: auto;\n  display: block;\n  transition: margin-left 0.2s;\n  height: 100%;\n}\n.gd-page {\n  width: 190pt;\n  height: 190pt;\n  transition: all 0.3s;\n  padding: 5pt;\n  background-color: #efefef;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.gd-page:hover {\n  background-color: #c0c0c0;\n}\n.gd-wrapper {\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n  position: relative;\n  background-color: #ffffff;\n  box-shadow: 0px 4px 12px -4px rgba(0, 0, 0, 0.38);\n}\n/* Make thumbnails sidebar scroll not visible */\n.gd-thumbnails::-webkit-scrollbar {\n  width: 0px;\n  background-color: #F5F5F5;\n}\n.gd-thumbnails-panzoom > .gd-thumbnails-landscape {\n  margin: -134px 0px -1px 12px;\n}\n.gd-thumbnails-panzoom .gd-wrapper > div > div > img {\n  width: inherit;\n}\n.gd-thumbnails .gd-wrapper > img {\n  width: -webkit-fill-available !important;\n  margin: 0 20px 0 0 !important;\n}\n.gd-thumbnails .gd-page-image {\n  height: inherit;\n  margin-left: 153px !important;\n}\n.gd-thumbnails-landscape-image {\n  margin: -90px 0 -23px !important;\n}\n.gd-thumbnails-landscape-image-rotated {\n  margin: 126px 0 -3px -104px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvZWRpdG9yLWRldmVsb3BtZW50L2xpYnMvdmlld2VyL3NyYy9saWIvdGh1bWJuYWlscy90aHVtYm5haWxzLmNvbXBvbmVudC5sZXNzIiwibGlicy92aWV3ZXIvc3JjL2xpYi90aHVtYm5haWxzL3RodW1ibmFpbHMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNDRjtBREVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0FGO0FERUE7RUFDRSx5QkFBQTtBQ0FGO0FERUE7RUFDRSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUdBLGlEQUFBO0FDQUY7QUFDQSwrQ0FBK0M7QURHL0M7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUNERjtBRElBO0VBQ0UsNEJBQUE7QUNGRjtBREtBO0VBQ0UsY0FBQTtBQ0hGO0FETUE7RUFDRSx3Q0FBQTtFQUNBLDZCQUFBO0FDSkY7QURPQTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtBQ0xGO0FEUUE7RUFDRSxnQ0FBQTtBQ05GO0FEU0E7RUFDRSxzQ0FBQTtBQ1BGIiwiZmlsZSI6ImxpYnMvdmlld2VyL3NyYy9saWIvdGh1bWJuYWlscy90aHVtYm5haWxzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmdkLXRodW1ibmFpbHMge1xuICB6LWluZGV4OiA5O1xuICBwYWRkaW5nOiAxMHB0O1xuICB3aWR0aDogMjAwcHQ7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ2QtcGFnZSB7XG4gIHdpZHRoOiAxOTBwdDtcbiAgaGVpZ2h0OiAxOTBwdDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHBhZGRpbmc6IDVwdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZ2QtcGFnZTpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwYzBjMDtcbn1cbi5nZC13cmFwcGVye1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbGVmdDo1MCU7XG4gIHRvcDo1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDEycHggLTRweCByZ2JhKDAsMCwwLDAuMzgpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA0cHggMTJweCAtNHB4IHJnYmEoMCwwLDAsMC4zOCk7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTJweCAtNHB4IHJnYmEoMCwwLDAsMC4zOCk7XG59XG5cbi8qIE1ha2UgdGh1bWJuYWlscyBzaWRlYmFyIHNjcm9sbCBub3QgdmlzaWJsZSAqL1xuLmdkLXRodW1ibmFpbHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLmdkLXRodW1ibmFpbHMtcGFuem9vbSA+IC5nZC10aHVtYm5haWxzLWxhbmRzY2FwZSB7XG4gIG1hcmdpbjogLTEzNHB4IDBweCAtMXB4IDEycHg7XG59XG5cbi5nZC10aHVtYm5haWxzLXBhbnpvb20gLmdkLXdyYXBwZXIgPiBkaXYgPiBkaXYgPiBpbWcge1xuICB3aWR0aDogaW5oZXJpdDtcbn1cblxuLmdkLXRodW1ibmFpbHMgLmdkLXdyYXBwZXIgPiBpbWcge1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgMjBweCAwIDAgIWltcG9ydGFudDtcbn1cblxuLmdkLXRodW1ibmFpbHMgLmdkLXBhZ2UtaW1hZ2Uge1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIG1hcmdpbi1sZWZ0OiAxNTNweCAhaW1wb3J0YW50O1xufVxuXG4uZ2QtdGh1bWJuYWlscy1sYW5kc2NhcGUtaW1hZ2Uge1xuICBtYXJnaW46IC05MHB4IDAgLTIzcHggIWltcG9ydGFudDtcbn1cblxuLmdkLXRodW1ibmFpbHMtbGFuZHNjYXBlLWltYWdlLXJvdGF0ZWQge1xuICBtYXJnaW46IDEyNnB4IDAgLTNweCAtMTA0cHggIWltcG9ydGFudDtcbn1cbiIsIi5nZC10aHVtYm5haWxzIHtcbiAgei1pbmRleDogOTtcbiAgcGFkZGluZzogMTBwdDtcbiAgd2lkdGg6IDIwMHB0O1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnM7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5nZC1wYWdlIHtcbiAgd2lkdGg6IDE5MHB0O1xuICBoZWlnaHQ6IDE5MHB0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgcGFkZGluZzogNXB0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5nZC1wYWdlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwYzBjMDtcbn1cbi5nZC13cmFwcGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDEycHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA0cHggMTJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG4vKiBNYWtlIHRodW1ibmFpbHMgc2lkZWJhciBzY3JvbGwgbm90IHZpc2libGUgKi9cbi5nZC10aHVtYm5haWxzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG4uZ2QtdGh1bWJuYWlscy1wYW56b29tID4gLmdkLXRodW1ibmFpbHMtbGFuZHNjYXBlIHtcbiAgbWFyZ2luOiAtMTM0cHggMHB4IC0xcHggMTJweDtcbn1cbi5nZC10aHVtYm5haWxzLXBhbnpvb20gLmdkLXdyYXBwZXIgPiBkaXYgPiBkaXYgPiBpbWcge1xuICB3aWR0aDogaW5oZXJpdDtcbn1cbi5nZC10aHVtYm5haWxzIC5nZC13cmFwcGVyID4gaW1nIHtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIDIwcHggMCAwICFpbXBvcnRhbnQ7XG59XG4uZ2QtdGh1bWJuYWlscyAuZ2QtcGFnZS1pbWFnZSB7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgbWFyZ2luLWxlZnQ6IDE1M3B4ICFpbXBvcnRhbnQ7XG59XG4uZ2QtdGh1bWJuYWlscy1sYW5kc2NhcGUtaW1hZ2Uge1xuICBtYXJnaW46IC05MHB4IDAgLTIzcHggIWltcG9ydGFudDtcbn1cbi5nZC10aHVtYm5haWxzLWxhbmRzY2FwZS1pbWFnZS1yb3RhdGVkIHtcbiAgbWFyZ2luOiAxMjZweCAwIC0zcHggLTEwNHB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/viewer/src/lib/thumbnails/thumbnails.component.ts":
/*!********************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/libs/viewer/src/lib/thumbnails/thumbnails.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ThumbnailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailsComponent", function() { return ThumbnailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");



var ThumbnailsComponent = /** @class */ (function () {
    function ThumbnailsComponent(_navigateService) {
        this._navigateService = _navigateService;
    }
    ThumbnailsComponent.prototype.ngOnInit = function () {
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
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["NavigateService"] }
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["NavigateService"]])
    ], ThumbnailsComponent);
    return ThumbnailsComponent;
}());



/***/ }),

/***/ "../../libs/viewer/src/lib/viewer-app.component.less":
/*!***********************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/libs/viewer/src/lib/viewer-app.component.less ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');\n:host * {\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n}\n.current-page-number {\n  margin: 0px 15px;\n  font-size: 14px;\n  color: #959da5;\n}\n.wrapper {\n  align-items: stretch;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.doc-panel {\n  display: flex;\n  height: inherit;\n}\n.thumbnails-button {\n  position: absolute;\n  right: 3px;\n}\n.gd-document {\n  width: 100%;\n  height: 100%;\n}\n.top-panel {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.toolbar-panel {\n  background-color: #3e4e5a;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvdmlld2VyL3NyYy9saWIvdmlld2VyLWFwcC5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvZWRpdG9yLWRldmVsb3BtZW50L2xpYnMvdmlld2VyL3NyYy9saWIvdmlld2VyLWFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUNBa0I7QUFDbEI7RUFDRSxzREFBQTtBRENGO0FDQ0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FEQ0Y7QUNFQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBREFGO0FDR0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBRERGO0FDSUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QURGRjtBQ0tBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QURIRjtBQ01BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBREpGO0FDT0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QURMRiIsImZpbGUiOiJsaWJzL3ZpZXdlci9zcmMvbGliL3ZpZXdlci1hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG46aG9zdCAqIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuLmN1cnJlbnQtcGFnZS1udW1iZXIge1xuICBtYXJnaW46IDBweCAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOTU5ZGE1O1xufVxuLndyYXBwZXIge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4uZG9jLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuLnRodW1ibmFpbHMtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogM3B4O1xufVxuLmdkLWRvY3VtZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi50b3AtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi50b29sYmFyLXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlNGU1YTtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCJAaW1wb3J0IChjc3MpIHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG46aG9zdCAqIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuLmN1cnJlbnQtcGFnZS1udW1iZXIge1xuICBtYXJnaW46IDBweCAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOTU5ZGE1O1xufVxuXG4ud3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmRvYy1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cblxuLnRodW1ibmFpbHMtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogM3B4O1xufVxuXG4uZ2QtZG9jdW1lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udG9wLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b29sYmFyLXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlNGU1YTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "../../libs/viewer/src/lib/viewer-app.component.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/libs/viewer/src/lib/viewer-app.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ViewerAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerAppComponent", function() { return ViewerAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _viewer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewer.service */ "../../libs/viewer/src/lib/viewer.service.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _viewer_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewer-config.service */ "../../libs/viewer/src/lib/viewer-config.service.ts");






var ViewerAppComponent = /** @class */ (function () {
    function ViewerAppComponent(_viewerService, _modalService, configService, uploadFilesService, _navigateService, _zoomService, pagePreloadService, _renderPrintService, passwordService, _windowService) {
        var _this = this;
        this._viewerService = _viewerService;
        this._modalService = _modalService;
        this._navigateService = _navigateService;
        this._zoomService = _zoomService;
        this._renderPrintService = _renderPrintService;
        this._windowService = _windowService;
        this.title = 'viewer';
        this.files = [];
        this.countPages = 0;
        this.formatDisabled = !this.file;
        this.showThumbnails = false;
        this.browseFilesModal = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].BrowseFiles;
        this.showSearch = false;
        this._zoom = 100;
        configService.updatedConfig.subscribe(function (viewerConfig) {
            _this.viewerConfig = viewerConfig;
        });
        uploadFilesService.uploadsChange.subscribe(function (uploads) {
            if (uploads) {
                var i = void 0;
                for (i = 0; i < uploads.length; i++) {
                    _this._viewerService.upload(uploads.item(i), '', _this.viewerConfig.rewrite).subscribe(function () {
                        _this.selectDir('');
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
        this._modalService.close(modalId);
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
    ViewerAppComponent.prototype.ptToPx = function (pt) {
        //pt * 96 / 72 = px.
        return pt * 96 / 72;
    };
    ViewerAppComponent.prototype.getFitToWidth = function () {
        var pageWidth = this.ptToPx(this._pageWidth);
        var pageHeight = this.ptToPx(this._pageHeight);
        var offsetWidth = pageWidth ? pageWidth : window.innerWidth;
        return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / window.innerWidth) : Math.round(window.innerWidth * 100 / offsetWidth);
    };
    ViewerAppComponent.prototype.getFitToHeight = function () {
        var pageWidth = this.ptToPx(this._pageWidth);
        var pageHeight = this.ptToPx(this._pageHeight);
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
        this.zoom = $event;
    };
    ViewerAppComponent.prototype.rotate = function (deg) {
        var _this = this;
        if (this.formatDisabled)
            return;
        var pageNumber = this._navigateService.currentPage;
        if (this.saveRotateStateConfig && this.file) {
            this._viewerService.rotate(this.credentials, deg, pageNumber).subscribe(function (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var page = data_1[_i];
                    var pageModel = _this.file.pages[page.pageNumber - 1];
                    if (_this.file && _this.file.pages && pageModel) {
                        _this.changeAngle(pageModel, page.angle);
                    }
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
        if (!this.file || !this.file.pages) {
            return;
        }
        for (var _i = 0, _a = this.file.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            page.data = null;
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
    ViewerAppComponent.prototype.ngAfterViewInit = function () {
        this.refreshZoom();
    };
    ViewerAppComponent.prototype.refreshZoom = function () {
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
        { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["WindowService"] }
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
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["WindowService"]])
    ], ViewerAppComponent);
    return ViewerAppComponent;
}());



/***/ }),

/***/ "../../libs/viewer/src/lib/viewer-config.service.ts":
/*!**********************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/libs/viewer/src/lib/viewer-config.service.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ViewerConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerConfigService", function() { return ViewerConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _viewer_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewer-config */ "../../libs/viewer/src/lib/viewer-config.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "../../libs/viewer/src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");







var ViewerConfigService = /** @class */ (function () {
    function ViewerConfigService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._viewerConfig = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](new _viewer_config__WEBPACK_IMPORTED_MODULE_2__["ViewerConfig"]());
        this._updatedConfig = this._viewerConfig.asObservable();
        _config.apiEndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
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
/*!**************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/libs/viewer/src/lib/viewer-config.ts ***!
  \**************************************************************************************************/
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
/*!**************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/libs/viewer/src/lib/viewer.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: initializeApp, setupLoadingInterceptor, ViewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return initializeApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupLoadingInterceptor", function() { return setupLoadingInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerModule", function() { return ViewerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _viewer_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewer-app.component */ "../../libs/viewer/src/lib/viewer-app.component.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm5/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _viewer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewer.service */ "../../libs/viewer/src/lib/viewer.service.ts");
/* harmony import */ var _viewer_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viewer-config.service */ "../../libs/viewer/src/lib/viewer-config.service.ts");
/* harmony import */ var _thumbnails_thumbnails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./thumbnails/thumbnails.component */ "../../libs/viewer/src/lib/thumbnails/thumbnails.component.ts");










function initializeApp(viewerConfigService) {
    var result = function () { return viewerConfigService.load(); };
    return result;
}
function setupLoadingInterceptor(service) {
    var result = function () { return new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["LoadingMaskInterceptorService"](service); };
    return result;
}
var ViewerModule = /** @class */ (function () {
    function ViewerModule() {
    }
    ViewerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_viewer_app_component__WEBPACK_IMPORTED_MODULE_4__["ViewerAppComponent"], _thumbnails_thumbnails_component__WEBPACK_IMPORTED_MODULE_8__["ThumbnailsComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["CommonComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
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
                },
                _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["LoadingMaskService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useFactory: setupLoadingInterceptor,
                    multi: true,
                    deps: [_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["LoadingMaskService"]]
                }
            ]
        })
    ], ViewerModule);
    return ViewerModule;
}());



/***/ }),

/***/ "../../libs/viewer/src/lib/viewer.service.ts":
/*!***************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/libs/viewer/src/lib/viewer.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: ViewerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerService", function() { return ViewerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
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

/***/ "../../node_modules/raw-loader/index.js!../../libs/editor/src/lib/create.document-modal/create.document-modal.component.html":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/node_modules/raw-loader!/Users/pavelegorov/Documents/repos/editor-development/libs/editor/src/lib/create.document-modal/create.document-modal.component.html ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gd-modal id=\"gd-create-document\" [title]=\"'Save document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-create-document-section\" class=\"tab-slider-body\">\n    <div class=\"inner-addon left-addon btn gd-create-wrap\" id=\"gd-create-wrap\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter file name without extension\" [value]=\"!file ? '' : file.guid.replace(FILE_NAME_REGEX, '').split('.')[0]\" #name autofocus/>\n      <span>\n        Select file type\n      </span>\n      <gd-select [disabled]=\"false\" [options]=\"formats\" (selected)=\"selectFormat($event)\" [showSelected]=\"format\" class=\"gd-select-format\"></gd-select>\n      <button class=\"btn btn-primary gd-create-submit\" (click)=\"save(name.value)\">Save</button>\n    </div>\n  </section>\n</gd-modal>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/editor/src/lib/editor-app.component.html":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/node_modules/raw-loader!/Users/pavelegorov/Documents/repos/editor-development/libs/editor/src/lib/editor-app.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\" (click)=\"hideAll($event)\">\n  <gd-tabbed-toolbars>\n    <gd-tabs>\n      <gd-tab tabTitle=\"File\" [icon]=\"'folder-open'\">\n        <gd-top-toolbar class=\"toolbar-panel\" [leftOffset]=\"false\">\n          <gd-button [icon]=\"'file'\" [tooltip]=\"'Create document'\" (click)=\"createFile()\"\n                     *ngIf=\"createNewFileConfig\"></gd-button>\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                     *ngIf=\"browseConfig\"></gd-button>\n          <gd-button [disabled]=\"downloadDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                     (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                     *ngIf=\"printConfig\" ></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save File'\" (click)=\"save()\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'pencil-alt'\" [iconClass]=\"'save-as-button-icon'\" [tooltip]=\"'Save File As'\" (click)=\"openSave()\">\n            <fa-icon [icon]=\"['fas','save']\" class=\"save-button\" size=\"xs\"></fa-icon>\n          </gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab tabTitle=\"Formatting\" [icon]=\"'edit'\">\n        <gd-top-toolbar class=\"toolbar-panel\" [leftOffset]=\"false\">\n\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Undo'\"\n                     (click)=\"toggleUndo()\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Redo'\"\n                     (click)=\"toggleRedo()\"></gd-button>\n          <gd-select class=\"format-select\" [disabled]=\"formatDisabled\" [options]=\"fontOptions\"\n                     (selected)=\"selectFont($event)\"\n                     [showSelected]=\"formatting.font\"></gd-select>\n          <gd-select class=\"format-select\" [disabled]=\"formatDisabled\" [options]=\"fontSizeOptions\"\n                     (selected)=\"selectFontSize($event)\"\n                     [showSelected]=\"formatting.fontSize + 'px'\"></gd-select>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'bold'\" [tooltip]=\"'Bold'\"\n                     (click)=\"toggleBold($event)\" [toggle]=\"formatting.bold\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'italic'\" [tooltip]=\"'Italic'\"\n                     (click)=\"toggleItalic($event)\" [toggle]=\"formatting.italic\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'underline'\" [tooltip]=\"'Underline'\"\n                     (click)=\"toggleUnderline($event)\" [toggle]=\"formatting.underline\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'strikethrough'\" [tooltip]=\"'Strike out'\"\n                     (click)=\"toggleStrikeout($event)\" [toggle]=\"formatting.strikeout\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-center'\" [tooltip]=\"'Align center'\"\n                     (click)=\"toggleAlign('center')\" [toggle]=\"formatting.align == 'center' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-justify'\" [tooltip]=\"'Align full'\"\n                     (click)=\"toggleAlign('full')\" [toggle]=\"formatting.align == 'full' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-right'\" [tooltip]=\"'Align right'\"\n                     (click)=\"toggleAlign('right')\" [toggle]=\"formatting.align == 'right' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-left'\" [tooltip]=\"'Align left'\"\n                     (click)=\"toggleAlign('left')\" [toggle]=\"formatting.align == 'left' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ul'\" [tooltip]=\"'Add Unordered List'\"\n                     (click)=\"toggleList('unordered')\" [toggle]=\"formatting.list == 'unordered' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ol'\" [tooltip]=\"'Add Ordered List'\"\n                     (click)=\"toggleList('ordered')\" [toggle]=\"formatting.list == 'ordered' ? true : false\"></gd-button>\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'fill'\" [tooltip]=\"'Background color'\"\n                     (click)=\"toggleColorPicker(true)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.bgColor\"></div>\n          </gd-button>\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'font'\" [tooltip]=\"'Color'\" (click)=\"toggleColorPicker(false)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.color\"></div>\n          </gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n    </gd-tabs>\n  </gd-tabbed-toolbars>\n  <gd-color-picker *ngIf=\"bgColorPickerShow || colorPickerShow\"\n                   [className]=\"'palette ' + (bgColorPickerShow ? 'background-color-picker' : 'color-picker')\"\n                   (selectedColor)=\"selectColor($event)\"></gd-color-picker>\n  <div class=\"doc-panel\" *ngIf=\"file\">\n\n    <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"true\" [htmlMode]=\"true\"\n                 [preloadPageCount]=\"0\" gdFormatting gdRenderPrint>\n\n    </gd-document>\n\n  </div>\n  <gd-init-state [icon]=\"'pen'\" [text]=\"''\" *ngIf=\"!file\"></gd-init-state>\n  <gd-browse-files-modal\n    (closing)=\"onCloseModal($event)\"\n    (urlForUpload)=\"upload($event)\"\n    [files]=\"files\"\n    (selectedDirectory)=\"selectDir($event)\"\n    (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n    [uploadConfig]=\"uploadConfig\"\n  ></gd-browse-files-modal>\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-create-document-modal (closing)=\"onCloseModal($event)\" [file]=\"credentials\" (savingFile)=\"saveFile($event)\"></gd-create-document-modal>\n  <gd-success-modal></gd-success-modal>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/viewer/src/lib/thumbnails/thumbnails.component.html":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/node_modules/raw-loader!/Users/pavelegorov/Documents/repos/editor-development/libs/viewer/src/lib/thumbnails/thumbnails.component.html ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gd-thumbnails\">\n  <div class=\"gd-thumbnails-panzoom\">\n    <div *ngFor=\"let page of pages\" id=\"gd-thumbnails-page-{{page.number}}\" class=\"gd-page\"\n         (click)=\"openPage(page.number)\" gdRotation [withMargin]=\"false\"\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <div class=\"gd-wrapper\"\n           [style.width.pt]=\"page.width\"\n           [style.height.pt]=\"page.height\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && isHtmlMode\"\n           [innerHTML]=\"page.data | safeHtml\"></div>\n      <div class=\"gd-wrapper\" *ngIf=\"page.data && !isHtmlMode\">\n        <img style=\"width: inherit !important\" class=\"gd-page-image\" [attr.src]=\"imgData(page.data) | safeResourceHtml\"\n             alt/>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/viewer/src/lib/viewer-app.component.html":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/node_modules/raw-loader!/Users/pavelegorov/Documents/repos/editor-development/libs/viewer/src/lib/viewer-app.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'viewer'\" icon=\"eye\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-select [disabled]=\"formatDisabled\" [options]=\"options\" (selected)=\"selectZoom($event)\"\n                 [showSelected]=\"zoom\" *ngIf=\"zoomConfig\" ></gd-select>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"\n                 *ngIf=\"zoomConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\"\n                 (click)=\"zoomOut()\" *ngIf=\"zoomConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-double-left'\" [tooltip]=\"'First Page'\"\n                 (click)=\"toFirstPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" [tooltip]=\"'Previous Page'\"\n                 (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <div class=\"current-page-number\">{{currentPage}}/{{countPages}}</div>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" [tooltip]=\"'Next Page'\"\n                 (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-double-right'\" [tooltip]=\"'Last Page'\"\n                 (click)=\"toLastPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Rotate CCW'\" (click)=\"rotate(-90)\"\n                 *ngIf=\"rotateConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Rotate CW'\" (click)=\"rotate(90)\"\n                 *ngIf=\"rotateConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                 (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                 *ngIf=\"printConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search'\" [tooltip]=\"'Search'\" (click)=\"openSearch()\"\n                 *ngIf=\"searchConfig\" ></gd-button>\n      <gd-search (hidePanel)=\"showSearch = !$event\" *ngIf=\"showSearch\" ></gd-search>\n\n      <gd-button class=\"thumbnails-button\" [disabled]=\"formatDisabled\" [icon]=\"'th-large'\" [tooltip]=\"'Thumbnails'\"\n                 (click)=\"openThumbnails()\" *ngIf=\"thumbnailsConfig && isDesktop\"></gd-button>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"doc-panel\" *ngIf=\"file\">\n    <gd-thumbnails *ngIf=\"showThumbnails\" [pages]=\"file.pages\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\"></gd-thumbnails>\n\n    <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"htmlModeConfig\"\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-document>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"''\" *ngIf=\"!file\"></gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!******************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/node_modules/raw-loader!./src/app/app.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <a class=\"back\" [routerLink]=\"['']\" *ngIf=\"!total\">Back</a>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/total-nav/total-nav.component.html":
/*!**********************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/node_modules/raw-loader!./src/app/total-nav/total-nav.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <ul>\n    <li>\n      <a [routerLink]=\"['/viewer']\"  >\n        <img src=\"assets/images/groupdocs-viewer.png\"/>\n        <div>\n          <h5>GroupDocs</h5>\n          <h6>Viewer</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-signature-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Signature</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-annotation-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Annotation</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-comparison-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Comparison</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-conversion-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Conversion</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-metadata-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Metadata</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-search-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Search</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-text-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Text</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-watermark-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Watermark</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a [routerLink]=\"['/editor']\" >\n        <img src=\"assets/images/groupdocs-editor.png\"/>\n        <div>\n          <h5>GroupDocs</h5>\n          <h6>Editor</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-assembly-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Assembly</h6>\n        </div>\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/total-view/total-view.component.html":
/*!************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/editor-development/node_modules/raw-loader!./src/app/total-view/total-view.component.html ***!
  \************************************************************************************************************************************/
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

module.exports = "@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');\n:host * {\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n}\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvdG90YWwtYW5ndWxhci9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvZWRpdG9yLWRldmVsb3BtZW50L2FwcHMvdG90YWwtYW5ndWxhci9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUNBa0I7QUFDbEI7RUFDRSxzREFBQTtBRENGO0FDQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QURDSiIsImZpbGUiOiJhcHBzL3RvdGFsLWFuZ3VsYXIvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG46aG9zdCAqIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuIiwiQGltcG9ydCAoY3NzKSB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xuOmhvc3QgKiB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiJdfQ== */"

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









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _total_nav_total_nav_component__WEBPACK_IMPORTED_MODULE_3__["TotalNavComponent"], _total_view_total_view_component__WEBPACK_IMPORTED_MODULE_6__["TotalViewComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _groupdocs_examples_angular_viewer__WEBPACK_IMPORTED_MODULE_7__["ViewerModule"],
                _groupdocs_examples_angular_editor__WEBPACK_IMPORTED_MODULE_8__["EditorModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    { path: '', component: _total_view_total_view_component__WEBPACK_IMPORTED_MODULE_6__["TotalViewComponent"] },
                    { path: 'viewer', component: _groupdocs_examples_angular_viewer__WEBPACK_IMPORTED_MODULE_7__["ViewerAppComponent"] },
                    { path: 'editor', component: _groupdocs_examples_angular_editor__WEBPACK_IMPORTED_MODULE_8__["EditorAppComponent"] },
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

module.exports = __webpack_require__(/*! /Users/pavelegorov/Documents/repos/editor-development/apps/total-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map