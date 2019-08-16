(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: Api, BackFormattingService, BrowseFilesModalComponent, ButtonComponent, ChoiceButtonComponent, ColorPickerComponent, CommonComponentsModule, CommonModals, ConfigService, DisabledCursorDirective, DndDirective, DocumentComponent, EditHtmlService, EditorDirective, ErrorInterceptorService, ErrorModalComponent, ExceptionMessageService, FileCredentials, FileDescription, FileModel, FileService, FileUtil, Formatting, FormattingDirective, FormattingService, HighlightSearchPipe, HttpError, InitStateComponent, LeftSideBarComponent, LoadingMaskComponent, LoadingMaskInterceptorService, LoadingMaskService, LogoComponent, ModalComponent, ModalService, NavigateService, OnCloseService, OutsideDirective, PageComponent, PageModel, PagePreloadService, PasswordRequiredComponent, PasswordService, RenderPrintDirective, RenderPrintService, RotatedPage, RotationDirective, SanitizeHtmlPipe, SanitizeResourceHtmlPipe, SanitizeStylePipe, SaveFile, ScrollableDirective, SearchComponent, SearchService, SearchableDirective, SelectComponent, SelectionService, SidePanelComponent, SuccessModalComponent, TabActivatorService, TabComponent, TabbedToolbarsComponent, TooltipComponent, TopToolbarComponent, UploadFileZoneComponent, UploadFilesService, ViewportService, WindowService, ZoomDirective, ZoomService, ɵa */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSideBarComponent", function() { return LeftSideBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingMaskComponent", function() { return LoadingMaskComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingMaskInterceptorService", function() { return LoadingMaskInterceptorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingMaskService", function() { return LoadingMaskService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigateService", function() { return NavigateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnCloseService", function() { return OnCloseService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutsideDirective", function() { return OutsideDirective; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportService", function() { return ViewportService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomDirective", function() { return ZoomDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomService", function() { return ZoomService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "../../node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "../../node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");












/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const $ = jquery__WEBPACK_IMPORTED_MODULE_2__;
class ViewportService {
    constructor() {
    }
    /**
     * @param {?} el
     * @param {?=} zoom
     * @param {?=} leftOffset
     * @param {?=} deltaX
     * @return {?}
     */
    checkInViewport(el, zoom = 100, leftOffset = 0, deltaX = 0.5) {
        if (!el) {
            return false;
        }
        /** @type {?} */
        const x = deltaX;
        /** @type {?} */
        const y = 0.5;
        /** @type {?} */
        const win = $(window);
        /** @type {?} */
        const viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft() + leftOffset,
            right: win.scrollLeft() + win.width() - 10,
            bottom: win.scrollTop() + win.height()
        };
        if (isNaN(zoom)) {
            zoom = 100;
        }
        /** @type {?} */
        const zoomN = zoom / 100;
        /** @type {?} */
        const height = $(el).outerHeight() * (zoomN);
        /** @type {?} */
        const width = $(el).outerWidth() * (zoomN);
        if (!width || !height) {
            return false;
        }
        /** @type {?} */
        const bounds = $(el).offset();
        /** @type {?} */
        const right = (bounds.left * (zoomN)) + width;
        /** @type {?} */
        const bottom = (bounds.top * (zoomN)) + height;
        /** @type {?} */
        const visible = (!(viewport.right < (bounds.left * (zoomN)) || viewport.left > right || viewport.bottom < (bounds.top * (zoomN)) || viewport.top > bottom));
        if (!visible) {
            return false;
        }
        /** @type {?} */
        const deltas = {
            top: Math.min(1, (bottom - viewport.top) / height),
            bottom: Math.min(1, (viewport.bottom - (bounds.top * (zoomN))) / height),
            left: Math.min(1, (right - viewport.left) / width),
            right: Math.min(1, (viewport.right - (bounds.left * (zoomN))) / width)
        };
        return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;
    }
}
ViewportService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ViewportService.ctorParameters = () => [];
/** @nocollapse */ ViewportService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ViewportService_Factory() { return new ViewportService(); }, token: ViewportService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const $$1 = jquery__WEBPACK_IMPORTED_MODULE_2__;
class TopToolbarComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _viewportService
     * @param {?} _cdRef
     */
    constructor(_elementRef, _viewportService, _cdRef) {
        this._elementRef = _elementRef;
        this._viewportService = _viewportService;
        this._cdRef = _cdRef;
        this.leftOffset = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.refresh();
        /** @type {?} */
        const el = this.getToolsElem();
        /** @type {?} */
        const $this = this;
        el.addEventListener('scroll', (/**
         * @return {?}
         */
        function () {
            $this.refresh();
        }));
    }
    /**
     * @return {?}
     */
    moveLeft() {
        /** @type {?} */
        const el = this.getToolsElem();
        if (el) {
            /** @type {?} */
            const elem = this.canMoveTo(true);
            if (elem) {
                /** @type {?} */
                const options = {
                    left: $$1(elem).offset().left + el.scrollLeft - this.getLeftOffset(),
                    top: 0,
                };
                el.scrollTo(options);
            }
        }
    }
    /**
     * @return {?}
     */
    moveRight() {
        /** @type {?} */
        const el = this.getToolsElem();
        if (el) {
            /** @type {?} */
            const elem = this.canMoveTo(false);
            if (elem) {
                /** @type {?} */
                const options = {
                    left: $$1(elem).offset().left + el.scrollLeft - this.getLeftOffset(),
                    top: 0,
                };
                el.scrollTo(options);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    getToolsElem() {
        return this._elementRef ? this._elementRef.nativeElement.children[0].querySelector('#tools') : null;
    }
    /**
     * @private
     * @param {?} left
     * @return {?}
     */
    canMoveTo(left) {
        /** @type {?} */
        let elem;
        /** @type {?} */
        const children = this.getChildren();
        /** @type {?} */
        const countElem = children.length;
        for (elem = 0; elem < countElem; elem++) {
            /** @type {?} */
            const element = this.getElem(elem);
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
    }
    /**
     * @private
     * @param {?} num
     * @return {?}
     */
    getElem(num) {
        /** @type {?} */
        const elems = this.getChildren();
        return elems.item(num !== null ? num : elems.length - 1);
    }
    /**
     * @private
     * @return {?}
     */
    getChildren() {
        /** @type {?} */
        const el = this.getToolsElem();
        if (!el) {
            return;
        }
        return el.children;
    }
    /**
     * @private
     * @return {?}
     */
    getLeftOffset() {
        if (!this.leftOffset) {
            return 0;
        }
        /** @type {?} */
        const el = this._elementRef.nativeElement ? this._elementRef.nativeElement.parentElement.children[0] : null;
        if (!el) {
            return 0;
        }
        return el.clientWidth;
    }
    /**
     * @private
     * @return {?}
     */
    refresh() {
        this.showLeft = !this._viewportService.checkInViewport(this.getElem(0), 100, this.getLeftOffset(), 0.8);
        this.showRight = !this._viewportService.checkInViewport(this.getElem(null), 100, this.getLeftOffset(), 0.8);
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        /** @type {?} */
        const showLeft = !this._viewportService.checkInViewport(this.getElem(0), 100, this.getLeftOffset(), 0.8);
        /** @type {?} */
        const showRight = !this._viewportService.checkInViewport(this.getElem(null), 100, this.getLeftOffset(), 0.8);
        if (showLeft !== this.showLeft || showRight !== this.showRight) {
            this.showLeft = showLeft;
            this.showRight = showRight;
            this._cdRef.detectChanges();
        }
    }
}
TopToolbarComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-top-toolbar',
                template: "<div class=\"top-toolbar\">\n  <gd-button [className]=\"'arrow-button'\" class=\"arrow-left\" id=\"left\" [icon]=\"'caret-left'\" [tooltip]=\"'Scroll left'\"\n             (click)=\"moveLeft()\"\n             *ngIf=\"showLeft\"></gd-button>\n  <div id=\"tools\" class=\"tools\">\n    <ng-content></ng-content>\n  </div>\n  <gd-button [className]=\"'arrow-button'\" class=\"arrow-right\" id=\"right\" [icon]=\"'caret-right'\"\n             [tooltip]=\"'Scroll right'\" (click)=\"moveRight()\"\n             *ngIf=\"showRight\"></gd-button>\n</div>\n",
                styles: [".top-toolbar{width:100%;height:60px;z-index:999;display:flex;align-items:center}.tools{width:100%;height:100%;display:flex;align-items:center}@media (max-width:480px){.top-toolbar{height:60px}.arrow-right{position:absolute;right:0}.arrow-left{position:absolute;left:0}.tools{height:100%;overflow-x:auto;overflow-scrolling:touch;display:flex;align-items:center;transition:.3s ease-in-out;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.tools::-webkit-scrollbar{width:0;height:0;background-color:#3e4e5a}}"]
            }] }
];
/** @nocollapse */
TopToolbarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: ViewportService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
TopToolbarComponent.propDecorators = {
    leftOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidePanelComponent {
    constructor() {
        this.hideSidePanel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    openSidePanel() {
        this.hideSidePanel.emit(true);
    }
}
SidePanelComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-side-panel',
                template: "<div class=\"gd-side-panel-wrapper\">\n  <div class=\"gd-side-panel-header\">\n    <fa-icon class=\"fas fa-info-circle icon\" [icon]=\"['fas',icon]\"></fa-icon>\n    <div class=\"title\">{{title}}</div>\n    <div class=\"close\">\n      <gd-button class=\"fas fa-times\" [icon]=\"'times'\" [tooltip]=\"'Close'\" (click)=\"openSidePanel()\"></gd-button>\n    </div>\n  </div>\n  <div class=\"gd-side-panel-body\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                styles: [".gd-side-panel-wrapper{margin-right:0;width:334px;z-index:999;background-color:#fff;transition:margin-right .2s;display:flex;flex-flow:column;height:100vh}.gd-side-panel-wrapper .gd-side-panel-header{height:60px;background-color:#222e35;display:flex;flex-direction:row;flex-wrap:nowrap}.gd-side-panel-wrapper .gd-side-panel-header .icon{font-size:24px;color:#959da5;margin:12px 9px 18px 14px}.gd-side-panel-wrapper .gd-side-panel-header .title{font-size:14px;font-weight:700;color:rgba(237,240,242,.57);margin-top:20px;width:100%}.gd-side-panel-wrapper .gd-side-panel-header .close{font-size:24px!important;margin-top:12px}.gd-side-panel-wrapper .gd-side-panel-body{display:flex;flex-flow:column;overflow:visible;overflow-y:auto;overflow-x:hidden;height:100%}@media (max-width:480px){.gd-side-panel-wrapper{width:100%;position:absolute;left:0;right:0;top:0;bottom:0}}"]
            }] }
];
/** @nocollapse */
SidePanelComponent.ctorParameters = () => [];
SidePanelComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hideSidePanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
    constructor() {
        this.disabled = false;
        this.toggle = false;
        this.showToolTip = false;
    }
    /**
     * @return {?}
     */
    onHovering() {
        if (!this.disabled) {
            this.className += ' active';
        }
        this.showToolTip = true;
    }
    /**
     * @return {?}
     */
    onUnhovering() {
        if (!this.disabled) {
            this.className = this.className.replace(' active', '');
        }
        this.showToolTip = false;
    }
}
ButtonComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-button',
                template: "<div class=\"button\" [ngClass]=\"toggle ? className + ' gd-edit active' : className\" (mouseenter)=\"onHovering()\"\n     (mouseleave)=\"onUnhovering()\" gdDisabledCursor [dis]=\"disabled\">\n  <fa-icon [icon]=\"['fas',icon]\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\"></gd-tooltip>\n  <ng-content></ng-content>\n</div>\n",
                styles: [".button{margin:0 7px;font-size:14px;color:#959da5;cursor:pointer;display:flex;align-items:center;justify-content:center;width:37px;height:36px;text-align:center;position:relative}.button.inactive{cursor:not-allowed;opacity:.4}.button.active .ng-fa-icon{color:#ccd0d4}@media (max-width:1025px){.button{font-size:20px;margin:0 6px}.arrow-button{margin:5px}}"]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    iconClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    className: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LogoComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LogoComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-logo',
                template: "<div id=\"gd-header-logo\" class=\"logo\">\n  <span class=\"text\" [innerHTML]=\"logo\"></span>\n  <fa-icon [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n</div>\n\n",
                styles: [".logo{background-color:#25c2d4;height:60px;display:flex;align-items:center;justify-content:center}.text{color:#fff;font-size:15px;text-transform:uppercase;margin:0 14px}.icon{display:none;font-size:32px;color:rgba(255,255,255,.5);margin:14px}@media (max-width:480px){.logo{width:60px;height:60px}.logo .text{display:none}.logo .icon{display:block}}"]
            }] }
];
/** @nocollapse */
LogoComponent.ctorParameters = () => [];
LogoComponent.propDecorators = {
    logo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TooltipComponent {
    constructor() {
        this.visibility = 'hidden';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set show(value) {
        this.visibility = value ? 'shown' : 'hidden';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TooltipComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-tooltip',
                template: "<span class=\"tooltip\" [ngClass]=\"visibility\" [innerHTML]=\"text\"></span>\n",
                styles: [".tooltip{position:absolute;margin-top:37px;width:100px;background-color:#000;color:#fff;text-align:center;border-radius:0;padding:5px 0;z-index:1;margin-left:-66px;font-size:10px;height:11px;line-height:11px}.tooltip.hidden{visibility:hidden}.tooltip.shown{visibility:visible}.shown:after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border:5px solid transparent;border-bottom-color:#000}"]
            }] }
];
/** @nocollapse */
TooltipComponent.ctorParameters = () => [];
TooltipComponent.propDecorators = {
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Api {
}
Api.VIEWER_APP = '/viewer';
Api.SIGNATURE_APP = '/signature';
Api.EDITOR_APP = '/editor';
Api.COMPARISON_APP = '/comparison';
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
class ConfigService {
    constructor() {
        this._apiEndpoint = Api.DEFAULT_API_ENDPOINT;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    set apiEndpoint(url) {
        this._apiEndpoint = url && url.trim().endsWith('/') ? url.substring(0, url.length - 1) : url;
    }
    /**
     * @param {?} app
     * @return {?}
     */
    getConfigEndpoint(app) {
        return (this.apiEndpoint.endsWith(app) ? this.apiEndpoint : this.apiEndpoint + app) + Api.LOAD_CONFIG;
    }
    /**
     * @return {?}
     */
    getViewerApiEndpoint() {
        return this._apiEndpoint.endsWith(Api.VIEWER_APP) ? this._apiEndpoint : this._apiEndpoint + Api.VIEWER_APP;
    }
    /**
     * @return {?}
     */
    getEditorApiEndpoint() {
        return this._apiEndpoint.trim().endsWith(Api.EDITOR_APP) ? this._apiEndpoint : this._apiEndpoint + Api.EDITOR_APP;
    }
    /**
     * @return {?}
     */
    getComparisonApiEndpoint() {
        return this._apiEndpoint.trim().endsWith(Api.COMPARISON_APP) ? this._apiEndpoint : this._apiEndpoint + Api.COMPARISON_APP;
    }
    /**
     * @return {?}
     */
    get apiEndpoint() {
        return this._apiEndpoint;
    }
    /**
     * @return {?}
     */
    getSignatureApiEndpoint() {
        return this._apiEndpoint.endsWith(Api.SIGNATURE_APP) ? this._apiEndpoint : this._apiEndpoint + Api.SIGNATURE_APP;
    }
}
ConfigService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
ConfigService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommonModals {
}
CommonModals.PasswordRequired = "gd-password-required";
CommonModals.ErrorMessage = "gd-error-message";
CommonModals.BrowseFiles = "gd-browse-files";
CommonModals.CreateDocument = "gd-create-document";
CommonModals.OperationSuccess = "gd-success-modal";
class ModalService {
    constructor() {
        this.modals = [];
    }
    /**
     * @param {?} modal
     * @return {?}
     */
    add(modal) {
        this.modals.push(modal);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    remove(id) {
        this.modals = this.modals.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id !== id));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    open(id) {
        /** @type {?} */
        const modal = this.modals.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id === id))[0];
        if (modal) {
            modal.open();
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    close(id) {
        /** @type {?} */
        const modal = this.modals.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id === id))[0];
        if (modal) {
            modal.close();
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalComponent {
    /**
     * @param {?} modalService
     * @param {?} el
     */
    constructor(modalService, el) {
        this.modalService = modalService;
        this.visible = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visibility = false;
        this.element = el.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        document.body.appendChild(this.element);
        this.modalService.add(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    /**
     * @return {?}
     */
    open() {
        this.visibility = true;
        this.visible.emit(true);
    }
    /**
     * @return {?}
     */
    close() {
        event.preventDefault();
        event.stopPropagation();
        this.visibility = false;
        this.visible.emit(false);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onClose($event) {
        $event.stopPropagation();
        if ($event && $event.target && ((/** @type {?} */ ($event.target))).id === 'modalDialog') {
            this.close();
        }
    }
}
ModalComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-modal',
                template: "<div class=\"gd-modal fade\" id=\"modalDialog\" (click)=\"onClose($event);\" *ngIf=\"visibility\">\n  <div class=\"gd-modal-dialog\">\n    <div class=\"gd-modal-content\" id=\"gd-modal-content\"> \n\n      <div class=\"gd-modal-header\"> \n        <div class=\"gd-modal-close\" (click)=\"close();\"><span>&times;</span></div>\n        <h4 class=\"gd-modal-title\">{{title}}</h4>\n        </div> \n\n      <div class=\"gd-modal-body\">\n        <ng-content></ng-content>\n        </div> \n\n      <div class=\"gd-modal-footer\"> \n\n        </div> \n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog --> \n  </div>\n\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.gd-modal{overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0;background-color:rgba(0,0,0,.5)}.gd-modal-dialog{box-shadow:#0005 0 0 10px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.gd-modal-content{background-color:#fff;height:100%;display:flex;flex-direction:column}.gd-modal-header{padding:1px 20px;background-color:#3e4e5a}.gd-modal-close{position:absolute;right:20px;top:13px;font-size:21px;cursor:pointer;color:#959da5}.gd-modal-title{font-size:16px;font-weight:400;padding-top:16px;padding-bottom:16px;margin:0;color:#fff}.gd-modal-body{background-color:#fff;overflow:hidden;overflow-y:auto;height:calc(100% - 75px)}.gd-modal-footer{height:auto}.gd-modal-footer>.btn{float:right;margin:20px 15px;padding:10px 20px;cursor:pointer;font-size:12px}@media (max-width:1025px){.gd-modal-dialog{width:100%;height:100%}}"]
            }] }
];
/** @nocollapse */
ModalComponent.ctorParameters = () => [
    { type: ModalService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
ModalComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageModel {
}
class RotatedPage {
}
class FileCredentials {
    /**
     * @param {?} guid
     * @param {?} password
     */
    constructor(guid, password) {
        this.guid = guid;
        this.password = password;
    }
}
class SaveFile extends FileCredentials {
    /**
     * @param {?} guid
     * @param {?} password
     * @param {?} content
     */
    constructor(guid, password, content) {
        super(guid, password);
        this.content = content;
    }
}
class FileDescription {
    constructor() {
        this.printAllowed = true;
    }
}
class FileModel {
}
class HttpError {
}
HttpError.BadRequest = 400;
HttpError.Unauthorized = 401;
HttpError.Forbidden = 403;
HttpError.NotFound = 404;
HttpError.TimeOut = 408;
HttpError.Conflict = 409;
HttpError.InternalServerError = 500;
class FileUtil {
    /**
     * @param {?} filename
     * @param {?} isDirectory
     * @return {?}
     */
    static find(filename, isDirectory) {
        if (filename && !isDirectory) {
            /** @type {?} */
            const strings = filename.split('.');
            /** @type {?} */
            const name = strings.pop().toLowerCase();
            if (typeof FileUtil.map[name] === "undefined") {
                return strings.length > 1 ? FileUtil.map['unknown'] : FileUtil.map['folder'];
            }
            else {
                return FileUtil.map[name];
            }
        }
        else {
            return FileUtil.map['folder'];
        }
    }
}
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
    'mpp': { 'format': 'Microsoft Project', 'icon': 'file-alt' },
    'mpt': { 'format': 'Microsoft Project', 'icon': 'file-alt' },
    'msg': { 'format': 'Microsoft Outlook', 'icon': 'file-alt' },
    'eml': { 'format': 'Microsoft Outlook', 'icon': 'file-alt' },
    'emlx': { 'format': 'Microsoft Outlook', 'icon': 'file-alt' },
    'one': { 'format': 'Microsoft OneNote', 'icon': 'file-word' },
    'odt': { 'format': 'Open Document Text', 'icon': 'file-word' },
    'ott': { 'format': 'Open Document Text Template', 'icon': 'file-word' },
    'ods': { 'format': 'Open Document Spreadsheet', 'icon': 'file-excel' },
    'odp': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
    'otp': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
    'ots': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
    'rtf': { 'format': 'Rich Text Format', 'icon': 'file-alt' },
    'txt': { 'format': 'Plain Text File', 'icon': 'file-alt' },
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
    'djvu': { 'format': 'Multi-Layer Raster Image', 'icon': 'file-alt' },
    'unknown': { 'format': 'This format is not supported', 'icon': 'file' },
};
class FileService {
    constructor() {
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UploadFilesService {
    constructor() {
        this._uploadsChange = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        observer => this._observer = observer));
    }
    /**
     * @return {?}
     */
    get uploadsChange() {
        return this._uploadsChange;
    }
    /**
     * @param {?} filesList
     * @return {?}
     */
    changeFilesList(filesList) {
        this._observer.next(filesList);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const $$2 = jquery__WEBPACK_IMPORTED_MODULE_2__;
/** @type {?} */
const upload_disc = 'Disc';
/** @type {?} */
const upload_url = 'url';
/** @type {?} */
const uploads_choices = [{ name: upload_disc, icon: 'hdd' }, { name: upload_url, icon: 'link' }];
class BrowseFilesModalComponent {
    /**
     * @param {?} _uploadService
     */
    constructor(_uploadService) {
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
    ngOnInit() {
    }
    /**
     * @param {?} size
     * @return {?}
     */
    getSize(size) {
        /** @type {?} */
        const mb = size / 1024 / 1024;
        if (mb > 1) {
            return (Math.round(mb * 100) / 100) + ' MB';
        }
        else {
            /** @type {?} */
            const kb = size / 1024;
            if (kb > 1) {
                return (Math.round(kb * 100) / 100) + ' KB';
            }
        }
        return size + ' Bytes';
    }
    /**
     * @param {?} file
     * @return {?}
     */
    getFormatName(file) {
        return FileUtil.find(file.name, file.directory).format;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    getFormatIcon(file) {
        return FileUtil.find(file.name, file.directory).icon;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    choose(file) {
        this.selectedFile = file;
        if (file.directory) {
            this.selectedDirectory.emit(file.guid);
        }
        else {
            this.selectedFileGuid.emit(file.guid);
        }
    }
    /**
     * @return {?}
     */
    goUp() {
        if (this.selectedFile) {
            /** @type {?} */
            let guid = this.selectedFile.guid;
            if (guid.length > 0 && guid.indexOf('/') === -1) {
                guid = '';
            }
            else {
                guid = guid.replace(/\/[^\/]+\/?$/, '');
            }
            this.selectedDirectory.emit(guid);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectUpload($event) {
        if (upload_url === $event) {
            this.showUploadUrl = true;
        }
        else {
            this.showUploadUrl = false;
            $$2("#gd-upload-input").trigger('click');
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    refresh($event) {
        if ($event) {
            this.files = null;
            this.selectedDirectory.emit('');
            this.showUploadUrl = false;
            this.selectedFile = null;
        }
        else {
            this.closing.emit(true);
        }
    }
    /**
     * @return {?}
     */
    showSpinner() {
        return !this.files;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    uploadUrl(url) {
        if (url) {
            this.urlForUpload.emit(url);
            this.cleanUpload();
        }
    }
    /**
     * @param {?} files
     * @return {?}
     */
    handleFileInput(files) {
        this._uploadService.changeFilesList(files);
    }
    /**
     * @return {?}
     */
    cleanUpload() {
        this.showUploadFile = false;
        this.showUploadUrl = false;
    }
}
BrowseFilesModalComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-browse-files-modal',
                template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\n      <div class=\"gd-drag-n-drop-icon\">\n        <fa-icon [icon]=\"['fas','cloud-download-alt']\" size=\"5x\" aria-hidden=\"true\"></fa-icon>\n      </div>\n      <h2>Drag &amp; Drop your files here</h2>\n    </div>\n    <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n      <gd-choice-button [name]=\"'Upload file'\" [choices]=\"uploads\" [icon]=\"'upload'\"\n                        (selected)=\"selectUpload($event)\"></gd-choice-button>\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      <div class=\"upload-url\" *ngIf=\"showUploadUrl\">\n        <input class=\"url-input\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n        <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-header\">\n        <div class=\"header-name\">Document</div>\n        <div class=\"header-size\">Size</div>\n      </div>\n      <div class=\"list-files-body\">\n      <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n              <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n          </div>\n          <div class=\"go-up-dots\">...</div>\n      </div>\n      <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n        <div class=\"file-description\">\n          <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n          <div class=\"file-name-format\">\n            <div class=\"file-name\">{{file?.name}}</div>\n            <div class=\"file-format\">{{getFormatName(file)}}</div>\n          </div>\n        </div>\n        <div class=\"file-size\">\n          {{getSize(file?.size)}}\n        </div>\n      </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
                styles: [".gd-modal-table{width:100%;text-align:left;padding-top:20px}#gd-browse-section{width:1024px;height:628px}.list-files-header{color:#acacac;font-size:10px}.header-name,.header-size{padding:10px 20px;width:90%}.file-size,.header-size{width:10%;color:#777}.file-description,.file-size{font-size:14px;padding:10px 20px;width:10%}.list-files-header,.list-files-lines{display:flex;width:100%;justify-content:space-between}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{cursor:pointer;display:flex;font-size:16px}.upload-panel{display:flex;position:relative;padding:20px 20px 0}.file-description{cursor:pointer;overflow:hidden;display:flex;width:90%}.file-description .ng-fa-icon.fa-file-pdf{color:#e21717}.file-description .ng-fa-icon.fa-file-word{color:#6979b9}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29417}.file-description .ng-fa-icon.fa-file-excel{color:#3fa300}.file-description .ng-fa-icon.fa-file-image{color:#e217da}.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#5d6a75}.file-description .ng-fa-icon{font-size:32px}.go-up-dots{margin-left:10px;margin-top:8px;font-size:20px}.go-up-icon .ng-fa-icon{padding:8px;display:block}.go-up-icon{width:30px;height:30px;padding:10px 20px}.file-name{font-size:16px;color:#6e6e6e}.file-name-format{padding-left:10px}.file-format{font-size:10px}.url-input{width:358px;margin-left:8px;height:27px;border:1px solid #25c2d4}.url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.url-check .ng-fa-icon{display:block;padding:8px}.upload-url{display:flex}.list-files-lines{border-top:1px solid #ccc}.list-files-lines:hover{background-color:#e5e5e5}.gd-dnd-wrap{background-color:#fff;cursor:default;position:absolute;width:inherit;height:inherit;opacity:.9;z-index:1;display:flex;text-align:center;justify-content:center;align-content:center;flex-direction:column}.gd-dnd-wrap h2{color:#959da5;font-size:15px;font-weight:300}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}@media (max-width:1025px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}}"]
            }] }
];
/** @nocollapse */
BrowseFilesModalComponent.ctorParameters = () => [
    { type: UploadFilesService }
];
BrowseFilesModalComponent.propDecorators = {
    files: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    uploadConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedFileGuid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    selectedDirectory: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    urlForUpload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    closing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ZoomService {
    constructor() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._zoomChange = this._observer.asObservable();
    }
    /**
     * @return {?}
     */
    get zoom() {
        return this._zoom;
    }
    /**
     * @return {?}
     */
    get zoomChange() {
        return this._zoomChange;
    }
    /**
     * @param {?} zoom
     * @return {?}
     */
    changeZoom(zoom) {
        this._zoom = zoom;
        this._observer.next(zoom);
    }
    /**
     * @private
     * @param {?} val
     * @param {?} name
     * @param {?=} sep
     * @return {?}
     */
    createZoomOption(val, name, sep = false) {
        return { value: val, name: name, separator: sep };
    }
    /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    zoomOptions(width, height) {
        return [this.createZoomOption(25, '25%'),
            this.createZoomOption(50, '50%'),
            this.createZoomOption(100, '100%'),
            this.createZoomOption(150, '150%'),
            this.createZoomOption(200, '200%'),
            this.createZoomOption(300, '300%'),
            this.createZoomOption(0, '', true),
            this.createZoomOption(width, 'Fit Width'),
            this.createZoomOption(height, 'Fit Height')];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const $$3 = jquery__WEBPACK_IMPORTED_MODULE_2__;
class DocumentComponent {
    /**
     * @param {?} _elementRef
     * @param {?} zoomService
     */
    constructor(_elementRef, zoomService) {
        this._elementRef = _elementRef;
        this.wait = false;
        zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            this.zoom = val;
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ifPdf() {
        return FileUtil.find(this.file.guid, false).format === "Portable Document Format";
    }
    /**
     * @return {?}
     */
    ifImage() {
        return FileUtil.find(this.file.guid, false).format === "Joint Photographic Experts Group";
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.refreshView = !this.refreshView;
    }
    /**
     * @return {?}
     */
    ifChromeOrFirefox() {
        return navigator.userAgent.toLowerCase().indexOf('chrome') > -1 || this.ifFirefox();
    }
    /**
     * @return {?}
     */
    ifFirefox() {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        /** @type {?} */
        const elementNodeListOf = this._elementRef.nativeElement.querySelectorAll('.gd-wrapper');
        /** @type {?} */
        const element = elementNodeListOf.item(0);
        if (element) {
            $$3(element).trigger('focus');
        }
    }
}
DocumentComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-document',
                template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" gdScrollable [onRefresh]=\"refreshView\">\n  <div class=\"panzoom\" gdZoom [zoomActive]=\"ifFirefox()\" gdSearchable>\n    <div [ngClass]=\"(ifFirefox() && zoom > 110) ? 'page gd-zoomed' : 'page'\" *ngFor=\"let page of file?.pages\" gdZoom [zoomActive]=\"!ifFirefox()\"\n         [style.width.pt]=\"ifPdf() ? page.width : 'unset'\"\n         [style.height.pt]=\"(ifPdf() || ifImage()) && ifChromeOrFirefox() ? page.height : 'unset'\" gdRotation\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                styles: [".document{background-color:#e7e7e7;width:100%;height:100%;overflow-x:hidden;overflow-y:auto!important;transition:.4s;padding:0;margin:0;position:relative}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 4px 12px -4px rgba(0,0,0,.38);transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:50% 50% 0;display:flex;justify-content:center;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}@media (max-width:1025px){.document{overflow-x:auto!important}.panzoom{flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
            }] }
];
/** @nocollapse */
DocumentComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: ZoomService }
];
DocumentComponent.propDecorators = {
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    preloadPageCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const isIE = /*@cc_on!@*/  !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
        if (isIE && this.number === 0) {
            this.editable = false;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const dataImagePngBase64 = 'data:image/png;base64,';
        this.imgData = dataImagePngBase64;
        if (!this.isHtml) {
            this.imgData += this.data;
        }
    }
}
PageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-page',
                template: "<div id=\"page-{{number}}\">\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\" [contentEditable]=\"(editable) ? true : false\"\n      gdEditor [text]=\"data\"></div>\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\n       alt=\"\"\n       *ngIf=\"data && !isHtml\">\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n    &nbsp;Loading... Please wait.\n  </div>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper img{width:inherit}.gd-wrapper div{width:100%}.gd-highlight{background-color:#ff0}.gd-highlight-select{background-color:#ff9b00}.gd-page-image{height:100%!important;width:100%!important}"]
            }] }
];
/** @nocollapse */
PageComponent.ctorParameters = () => [];
PageComponent.propDecorators = {
    angle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    number: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isHtml: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SanitizeHtmlPipe {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    transform(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}
SanitizeHtmlPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'safeHtml' },] }
];
/** @nocollapse */
SanitizeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] }
];
class SanitizeResourceHtmlPipe {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    transform(html) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    }
}
SanitizeResourceHtmlPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'safeResourceHtml' },] }
];
/** @nocollapse */
SanitizeResourceHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] }
];
class SanitizeStylePipe {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    transform(html) {
        return this.sanitizer.bypassSecurityTrustStyle(html);
    }
}
SanitizeStylePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'safeStyle' },] }
];
/** @nocollapse */
SanitizeStylePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] }
];
class HighlightSearchPipe {
    /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    transform(value, args) {
        if (!args) {
            return value;
        }
        /** @type {?} */
        const re = new RegExp(args, 'gi');
        return value.replace(re, "<span class='gd-highlight'>$&</span>");
    }
}
HighlightSearchPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'highlight' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChoiceButtonComponent {
    constructor() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.open = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    openChoices() {
        this.open = !this.open;
    }
    /**
     * @param {?} choice
     * @return {?}
     */
    select(choice) {
        this.selected.emit(choice);
        this.open = false;
    }
}
ChoiceButtonComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-choice-button',
                template: "<div class=\"choice-button\">\n  <fa-icon [icon]=\"['fas',icon]\"></fa-icon>\n  <span class=\"button-name\">{{name}}</span>\n  <div class=\"down\">\n    <fa-icon [icon]=\"['fas','angle-down']\" (click)=\"openChoices()\"></fa-icon>\n  </div>\n  <div class=\"choices\" *ngIf=\"open\">\n    <div class=\"upload-from\">Upload from:</div>\n    <div class=\"choice\" *ngFor=\"let choice of choices\" (click)=\"select(choice.name)\">\n        <fa-icon [icon]=\"['fas',choice.icon]\"></fa-icon>\n      {{choice.name}}\n    </div>\n  </div>\n</div>\n",
                styles: [".choice-button{color:#fff;background-color:#25c2d4;display:flex}.choice-button .ng-fa-icon{padding:8px;font-size:15px}.down{cursor:pointer;background-color:#1fa5b4;width:31px;font-size:10px;display:flex;justify-content:center}.button-name{font-size:12px;padding-top:11px;padding-right:27px}.choices{color:#b2b8bd;top:33px;left:109px;position:absolute;padding:5px;margin:0;background-color:#fff;width:80px;border:0;border-radius:0;box-shadow:0 0 6px #ccc}.choice{cursor:pointer;font-size:12px;padding:3px}.choice i{color:#959da5}.upload-from{font-size:7px}"]
            }] }
];
/** @nocollapse */
ChoiceButtonComponent.ctorParameters = () => [];
ChoiceButtonComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    choices: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UploadFileZoneComponent {
    /**
     * @param {?} _uploadService
     */
    constructor(_uploadService) {
        this._uploadService = _uploadService;
        this.closeUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} files
     * @return {?}
     */
    handleFileInput(files) {
        this._uploadService.changeFilesList(files);
        this.onCloseUpload();
    }
    /**
     * @return {?}
     */
    onCloseUpload() {
        this.closeUpload.emit(true);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    close($event) {
        if ($event.target.id === 'gd-dropZone') {
            this.onCloseUpload();
        }
    }
}
UploadFileZoneComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-upload-file-zone',
                template: "<div class=\"gd-drag-n-drop-wrap\" id=\"gd-dropZone\" gdDnd (closing)=\"onCloseUpload()\" (click)=\"close($event)\">\n  <div class=\"gd-drag-n-drop-icon\">\n    <fa-icon [icon]=\"['fas','cloud-download-alt']\" size=\"5x\"></fa-icon>\n  </div>\n  <h2>Drag &amp; Drop your files here</h2>\n  <h4>OR</h4>\n  <div class=\"gd-drag-n-drop-buttons\">\n    <label class=\"btn btn-primary\"> \n      <fa-icon [icon]=\"['fas','file']\"></fa-icon>\n      SELECT FILE\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      </label>\n  </div>\n</div>\n",
                styles: [".gd-drag-n-drop-wrap{border:2px dashed #ccc;background-color:#f8f8f8;text-align:center;cursor:default;position:absolute;width:-webkit-fill-available;left:1px;display:flex;align-content:center;flex-direction:column;justify-content:center;opacity:.9;z-index:1}.gd-drag-n-drop-wrap h2{color:#959da5;margin:5px 0;font-size:15px;font-weight:300}.gd-drag-n-drop-wrap h4{color:#cacaca;font-weight:300;font-size:12px;margin:10px 0 15px}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-drag-n-drop-buttons i{margin-right:5px}.gd-drag-n-drop-buttons .btn{width:134px;height:35px;margin:0 10px;font-size:12px;font-weight:400}.gd-drag-n-drop-wrap.hover{background:#ddd;border-color:#aaa}"]
            }] }
];
/** @nocollapse */
UploadFileZoneComponent.ctorParameters = () => [
    { type: UploadFilesService }
];
UploadFileZoneComponent.propDecorators = {
    closeUpload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DndDirective {
    /**
     * @param {?} _uploadFilesService
     */
    constructor(_uploadFilesService) {
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
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.active = true;
        this.opening.emit(true);
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.active = false;
        this.closeArea();
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        /** @type {?} */
        const files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.active = false;
            this.dropped.emit(true);
            this._uploadFilesService.changeFilesList(files);
            this.closeArea();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.closeArea();
    }
    /**
     * @private
     * @return {?}
     */
    closeArea() {
        this.closing.emit(true);
        this.opening.emit(false);
    }
}
DndDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[gdDnd]'
            },] }
];
/** @nocollapse */
DndDirective.ctorParameters = () => [
    { type: UploadFilesService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagePreloadService {
    constructor() {
        this._checkPreload = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        observer => this._observer = observer));
    }
    /**
     * @return {?}
     */
    get checkPreload() {
        return this._checkPreload;
    }
    /**
     * @param {?} page
     * @return {?}
     */
    changeLastPageInView(page) {
        if (this._observer) {
            this._observer.next(page);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavigateService {
    /**
     * @param {?} _pagePreloadService
     */
    constructor(_pagePreloadService) {
        this._pagePreloadService = _pagePreloadService;
        this._currentPage = 0;
        this._countPages = 0;
        this._navigate = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        observer => this._observer = observer));
    }
    /**
     * @return {?}
     */
    get navigate() {
        return this._navigate;
    }
    /**
     * @return {?}
     */
    get countPages() {
        return this._countPages;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set countPages(value) {
        this._countPages = value;
    }
    /**
     * @return {?}
     */
    get currentPage() {
        return this._currentPage;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set currentPage(value) {
        this._currentPage = value;
    }
    /**
     * @return {?}
     */
    nextPage() {
        if (this._currentPage < this._countPages) {
            this._currentPage++;
            this.navigateTo(this._currentPage);
        }
    }
    /**
     * @return {?}
     */
    prevPage() {
        if (this._currentPage > 1) {
            this._currentPage--;
            this.navigateTo(this._currentPage);
        }
    }
    /**
     * @return {?}
     */
    toLastPage() {
        this._currentPage = this._countPages;
        this.navigateTo(this._currentPage);
    }
    /**
     * @return {?}
     */
    toFirstPage() {
        this._currentPage = 1;
        this.navigateTo(this._currentPage);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    navigateTo(page) {
        this.currentPage = page;
        this._pagePreloadService.changeLastPageInView(page);
        this._observer.next(page);
    }
}
NavigateService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NavigateService.ctorParameters = () => [
    { type: PagePreloadService }
];
/** @nocollapse */ NavigateService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NavigateService_Factory() { return new NavigateService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PagePreloadService)); }, token: NavigateService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MOBILE_MAX_WIDTH = 425;
/** @type {?} */
const TABLET_MAX_WIDTH = 1024;
class WindowService {
    constructor() {
        this.resizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this._resize$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(window, 'resize')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])({ target: { innerWidth: window.innerWidth, innerHeight: window.innerHeight } }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.resizeSubject.next((/** @type {?} */ (event.target)));
            this.width = ((/** @type {?} */ (event.target))).innerWidth;
            this.height = ((/** @type {?} */ (event.target))).innerHeight;
        })));
        this._resize$.subscribe();
    }
    /**
     * @return {?}
     */
    get onResize() {
        return this.resizeSubject.asObservable();
    }
    /**
     * @return {?}
     */
    isMobile() {
        return this.width <= MOBILE_MAX_WIDTH;
    }
    /**
     * @return {?}
     */
    isTablet() {
        return this.width <= TABLET_MAX_WIDTH;
    }
    /**
     * @return {?}
     */
    isDesktop() {
        return !this.isMobile() && !this.isTablet();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const $$4 = jquery__WEBPACK_IMPORTED_MODULE_2__;
class ScrollableDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _navigateService
     * @param {?} _pagePreloadService
     * @param {?} _zoomService
     * @param {?} _windowService
     * @param {?} _viewportService
     */
    constructor(_elementRef, _navigateService, _pagePreloadService, _zoomService, _windowService, _viewportService) {
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
        (val) => {
            this.zoom = val ? val : this.zoom;
            this.refresh();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.zoom = this._zoomService.zoom ? this._zoomService.zoom : this.zoom;
        this._navigateService.navigate.subscribe(((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.currentPage = value;
            this.scrollToPage(value);
        })));
        this.refresh();
    }
    /**
     * @return {?}
     */
    scrolling() {
        this.refresh();
    }
    /**
     * @return {?}
     */
    resizing() {
        this.refresh();
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    scrollToPage(pageNumber) {
        /** @type {?} */
        const el = this._elementRef.nativeElement;
        /** @type {?} */
        const page = this.getPage(pageNumber);
        /** @type {?} */
        const prev = pageNumber > 0 ? this.getPage(pageNumber - 1) : null;
        /** @type {?} */
        const isSameTop = (prev && $$4(prev).offset().top === $$4(page).offset().top);
        if (this._viewportService.checkInViewport(page, this.zoom) && isSameTop) {
            return;
        }
        /** @type {?} */
        const pagesHeight = this.calculateOffset(pageNumber);
        /** @type {?} */
        const options = {
            left: 0,
            top: pagesHeight
        };
        if (el) {
            el.scrollTo(options);
        }
    }
    /**
     * @private
     * @return {?}
     */
    getChildren() {
        /** @type {?} */
        const el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            return el.children.item(0).children;
        }
    }
    /**
     * @private
     * @param {?} pageNumber
     * @return {?}
     */
    getPage(pageNumber) {
        /** @type {?} */
        const el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            return el.children.item(0).children.item(pageNumber - 1);
        }
    }
    /**
     * @private
     * @param {?} pageNumber
     * @return {?}
     */
    calculateOffset(pageNumber) {
        /** @type {?} */
        const count = this.ifFirefox() ? 1 : this.countPagesOnWidth();
        /** @type {?} */
        const margin = this._windowService.isDesktop() ? 40 : 10;
        /** @type {?} */
        let pagesHeight = 0;
        for (let i = 1; i < pageNumber / count; i++) {
            /** @type {?} */
            const item = this.getPage(i);
            /** @type {?} */
            const clientHeight = item ? item.clientHeight : 0;
            pagesHeight += clientHeight > 0 ? clientHeight * this.getZoom() + margin : 0;
        }
        return pagesHeight;
    }
    /**
     * @private
     * @return {?}
     */
    countPagesOnWidth() {
        /** @type {?} */
        const pageEl = this.getPage(1);
        /** @type {?} */
        const offset = 150;
        /** @type {?} */
        const count = Math.floor((this.getWidth() - offset) / (pageEl.getBoundingClientRect().width * this.getZoom()));
        return count === 0 ? 1 : count;
    }
    /**
     * @return {?}
     */
    ifFirefox() {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    }
    /**
     * @return {?}
     */
    refresh() {
        /** @type {?} */
        let page;
        /** @type {?} */
        let currentPageSet = false;
        /** @type {?} */
        const pageElem = this.getPage(this.currentPage);
        /** @type {?} */
        const currentPageRect = this.currentPage && pageElem ? pageElem.getBoundingClientRect() : null;
        for (page = 1; page < this.getChildren().length + 1; page++) {
            /** @type {?} */
            const element = this.getPage(page);
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
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.refresh();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.zoom = this._zoomService.zoom ? this._zoomService.zoom : this.zoom;
    }
    /**
     * @private
     * @return {?}
     */
    getWidth() {
        return this._elementRef ? this._elementRef.nativeElement.offsetWidth : window.innerWidth;
    }
    /**
     * @private
     * @return {?}
     */
    getZoom() {
        return this.zoom / 100;
    }
}
ScrollableDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[gdScrollable]'
            },] }
];
/** @nocollapse */
ScrollableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: NavigateService },
    { type: PagePreloadService },
    { type: ZoomService },
    { type: WindowService },
    { type: ViewportService }
];
ScrollableDirective.propDecorators = {
    onRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrolling: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['scroll',] }],
    resizing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ZoomDirective {
    /**
     * @param {?} _zoomService
     * @param {?} _sanitizer
     */
    constructor(_zoomService, _sanitizer) {
        this._zoomService = _zoomService;
        this._sanitizer = _sanitizer;
        this.zoomActive = true;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.zoomActive) {
            return;
        }
        this.setStyles(this._zoomService.zoom);
        this._zoomService.zoomChange.subscribe((/**
         * @param {?} zoom
         * @return {?}
         */
        (zoom) => {
            this.setStyles(zoom);
        }));
    }
    /**
     * @private
     * @param {?} zoom
     * @return {?}
     */
    setStyles(zoom) {
        if (!this.zoomActive) {
            return;
        }
        this.zoomStr = Math.round(zoom) + '%';
        this.zoomInt = zoom === 100 ? 1 : zoom / 100;
        this.mozTransform = 'scale(' + this.zoomInt + ', ' + this.zoomInt + ')';
        this.mozTransformOrigin = 'top';
        /** @type {?} */
        const transform = this._sanitizer.bypassSecurityTrustStyle('(' + this.zoomInt + ', ' + this.zoomInt + ')');
        this.webkitTransform = transform;
        this.msTransform = transform;
        this.oTransform = transform;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setStyles(this._zoomService.zoom);
    }
}
ZoomDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[gdZoom]'
            },] }
];
/** @nocollapse */
ZoomDirective.ctorParameters = () => [
    { type: ZoomService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OnCloseService {
    constructor() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._onClose = this._observer.asObservable();
    }
    /**
     * @return {?}
     */
    get onClose() {
        return this._onClose;
    }
    /**
     * @param {?} close
     * @return {?}
     */
    close(close) {
        this._observer.next(close);
    }
}
OnCloseService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
OnCloseService.ctorParameters = () => [];
/** @nocollapse */ OnCloseService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function OnCloseService_Factory() { return new OnCloseService(); }, token: OnCloseService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectComponent {
    /**
     * @param {?} _onCloseService
     */
    constructor(_onCloseService) {
        this._onCloseService = _onCloseService;
        this.disabled = false;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isOpen = false;
        _onCloseService.onClose.subscribe((/**
         * @return {?}
         */
        () => {
            this.close();
        }));
    }
    /**
     * @return {?}
     */
    open() {
        if (!this.disabled) {
            this.isOpen = true;
        }
    }
    /**
     * @return {?}
     */
    close() {
        this.isOpen = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickOutside(event) {
        if (event && event['value'] === true) {
            this.close();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggle($event) {
        $event.preventDefault();
        $event.stopPropagation();
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
        }
    }
    /**
     * @param {?} $event
     * @param {?} value
     * @return {?}
     */
    select($event, value) {
        $event.preventDefault();
        $event.stopPropagation();
        this.selected.emit(value);
        this.close();
    }
}
SelectComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-select',
                template: "<div class=\"select\"\n     (click)=\"toggle($event)\"\n     gdOutside\n     [clickOutsideEnabled]=\"isOpen\"\n     (clickOutside)=\"onClickOutside($event)\">\n  <span class=\"selected-value\" gdDisabledCursor [dis]=\"disabled\">\n    {{showSelected?.name}}\n  </span>\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\"></span>\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\n    <div *ngFor=\"let option of options\">\n      <div *ngIf=\"!option.separator\" (click)=\"select($event, option)\" class=\"option\">{{option.name}}</div>\n      <div *ngIf=\"option.separator\" role=\"separator\" class=\"dropdown-menu-separator\"></div>\n    </div>\n  </div>\n</div>\n",
                styles: [".select{min-width:50px;color:#959da5}.selected-value{font-size:14px;cursor:pointer;white-space:nowrap}.selected-value.inactive{cursor:not-allowed;color:#ccc}.nav-caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent;cursor:pointer}.nav-caret.inactive{cursor:not-allowed;color:#ccc}.dropdown-menu{position:absolute;top:49px;z-index:1000;float:left;min-width:160px;padding:5px 0;list-style:none;font-size:13px;text-align:left;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box}.dropdown-menu .option{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;white-space:nowrap;cursor:pointer}.dropdown-menu .option:hover{background-color:#25c2d4;color:#fff}.dropdown-menu-separator{height:1px;margin:8px 0;overflow:hidden;background-color:#e5e5e5;padding:0!important}"]
            }] }
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [
    { type: OnCloseService }
];
SelectComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DisabledCursorDirective {
    constructor() {
    }
    /**
     * @private
     * @return {?}
     */
    updateCursor() {
        this.cursor = this.dis ? true : false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateCursor();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.updateCursor();
    }
}
DisabledCursorDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[gdDisabledCursor]'
            },] }
];
/** @nocollapse */
DisabledCursorDirective.ctorParameters = () => [];
DisabledCursorDirective.propDecorators = {
    dis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cursor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.inactive',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RotationDirective {
    constructor() {
        this.withMargin = true;
    }
    /**
     * @private
     * @return {?}
     */
    updateCursor() {
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
    }
    /**
     * @return {?}
     */
    isLandscape() {
        return this.width > this.height;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateCursor();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.updateCursor();
    }
}
RotationDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[gdRotation]'
            },] }
];
/** @nocollapse */
RotationDirective.ctorParameters = () => [];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitStateComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
InitStateComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-init-state',
                template: "<div class=\"wrapper\">\n  <fa-icon class=\"icon\" [icon]=\"['fas',icon]\"></fa-icon>\n  <span class=\"text\">{{text}}</span>\n  <span class=\"start\">Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file</span>\n</div>\n",
                styles: [".wrapper{color:#959da5;background-color:#e7e7e7;display:flex;flex-direction:column;justify-content:center;align-content:center;width:100%;height:100%}.icon{font-size:65px;text-align:center;margin-bottom:38px}.start,.text{font-size:15px;text-align:center}"]
            }] }
];
/** @nocollapse */
InitStateComponent.ctorParameters = () => [];
InitStateComponent.propDecorators = {
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RenderPrintService {
    constructor() {
        this._render = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        observer => this._observer = observer));
        this._renderBlob = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        observer => this._observerBlob = observer));
    }
    /**
     * @return {?}
     */
    get renderPrint() {
        return this._render;
    }
    /**
     * @param {?} pages
     * @return {?}
     */
    changePages(pages) {
        this._observer.next(pages);
    }
    /**
     * @return {?}
     */
    get renderPrintBlob() {
        return this._renderBlob;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    changeBlob(file) {
        this._observerBlob.next(file);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RenderPrintDirective {
    /**
     * @param {?} _renderService
     */
    constructor(_renderService) {
        this._renderService = _renderService;
        _renderService.renderPrint.subscribe((/**
         * @param {?} pages
         * @return {?}
         */
        pages => {
            this.renderPrint(pages);
        }));
        _renderService.renderPrintBlob.subscribe((/**
         * @param {?} file
         * @return {?}
         */
        file => {
            this.renderPrintBlob(file);
        }));
    }
    /**
     * @private
     * @param {?} pages
     * @return {?}
     */
    renderPrint(pages) {
        /** @type {?} */
        let pagesHtml = '';
        if (this.htmlMode) {
            for (const page of pages) {
                pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
                    '<div class="gd-wrapper">' + page.data + '</div>' +
                    '</div>';
            }
        }
        else {
            for (const page of pages) {
                pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
                    '<div class="gd-wrapper"><image style="width: inherit !important" class="gd-page-image" src="data:image/png;base64,' + page.data + '" alt></image></div>' +
                    '</div>';
            }
        }
        this.openWindow(pagesHtml, pages[0].width, pages[0].height);
    }
    /**
     * @private
     * @param {?} pagesHtml
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    openWindow(pagesHtml, width, height) {
        /** @type {?} */
        const a4Height = 842;
        /** @type {?} */
        const a4Width = 595;
        /** @type {?} */
        let imageA4Adjusted = '';
        if (width > a4Width && height > a4Height) {
            /** @type {?} */
            const zoom = Math.round(height / a4Height) / 100;
            imageA4Adjusted = '.gd-page img { width: 100%; margin: 0; padding: 0;}';
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                imageA4Adjusted = '.gd-page img { transform: scale(' + zoom + ');}';
            }
        }
        /** @type {?} */
        let cssPrint = '<style>' +
            '.gd-page { display: block; page-break-after:always; page-break-inside: avoid; }' +
            ' .gd-page:last-child {page-break-after: auto;}' + imageA4Adjusted;
        cssPrint = cssPrint + '</style>';
        /** @type {?} */
        const windowObject = window.open('', "PrintWindow", "width=750,height=650,top=50,left=50,toolbars=yes,scrollbars=yes,status=yes,resizable=yes");
        windowObject.focus();
        windowObject.document.writeln(cssPrint);
        windowObject.document.writeln(pagesHtml);
        windowObject.document.close();
        windowObject.focus();
        windowObject.print();
        windowObject.close();
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    renderPrintBlob(file) {
        /** @type {?} */
        const fileURL = URL.createObjectURL(file);
        /** @type {?} */
        const windowObject = window.open(fileURL, "PrintWindow", "width=750,height=650,top=50,left=50,toolbars=yes,scrollbars=yes,status=yes,resizable=yes");
        windowObject.focus();
        windowObject.print();
        windowObject.close();
    }
}
RenderPrintDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[gdRenderPrint]'
            },] }
];
/** @nocollapse */
RenderPrintDirective.ctorParameters = () => [
    { type: RenderPrintService }
];
RenderPrintDirective.propDecorators = {
    htmlMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExceptionMessageService {
    constructor() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('Server is not available');
        this._messageChange = this._observer.asObservable();
    }
    /**
     * @return {?}
     */
    get messageChange() {
        return this._messageChange;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    changeMessage(message) {
        this._observer.next(message);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ErrorModalComponent {
    /**
     * @param {?} messageService
     */
    constructor(messageService) {
        messageService.messageChange.subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => this.message = message));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ErrorModalComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-error-modal',
                template: "<gd-modal id=\"gd-error-message\" [title]=\"'Error message'\">\n  <div class=\"gd-modal-error\">{{message ? message : 'Server is not available'}}</div>\n</gd-modal>\n",
                styles: [".gd-modal-error{position:absolute;background-color:#fff;font-size:13px;padding:20px}"]
            }] }
];
/** @nocollapse */
ErrorModalComponent.ctorParameters = () => [
    { type: ExceptionMessageService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PasswordService {
    constructor() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._passChange = this._observer.asObservable();
    }
    /**
     * @return {?}
     */
    get passChange() {
        return this._passChange;
    }
    /**
     * @param {?} pass
     * @return {?}
     */
    setPassword(pass) {
        this._observer.next(pass);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PasswordRequiredComponent {
    /**
     * @param {?} messageService
     * @param {?} _passwordService
     */
    constructor(messageService, _passwordService) {
        this._passwordService = _passwordService;
        messageService.messageChange.subscribe((/**
         * @param {?} message
         * @return {?}
         */
        message => this.message = message));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setPassword(value) {
        this._passwordService.setPassword(value);
    }
}
PasswordRequiredComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-password-required',
                template: "<gd-modal id=\"gd-password-required\" [title]=\"'Password required'\">\n  <section id=\"gd-password-section\" class=\"tab-slider-body\">\n    <div class=\"inner-addon left-addon btn gd-password-wrap\" id=\"gd-password-wrap\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Enter password\" #pass\n             (keyup.enter)=\"setPassword(pass.value)\">\n      <button class=\"btn btn-primary gd-password-submit\" (click)=\"setPassword(pass.value)\">Submit</button>\n      <span class=\"gd-password-error\">{{message}}</span>\n    </div>\n  </section>\n</gd-modal>\n",
                styles: [".gd-password-wrap{position:relative}.gd-password-wrap>input{padding-left:12px;width:454px;height:32px;color:#585858;float:left}.gd-password-submit{color:#fff;background-color:#3e4d59;padding:7px 16px 6px;font-size:12px;cursor:pointer;float:left}.gd-password-error{color:red;padding-top:10px;float:left}@media (max-width:1025px){.gd-password-wrap>input{width:50%}}"]
            }] }
];
/** @nocollapse */
PasswordRequiredComponent.ctorParameters = () => [
    { type: ExceptionMessageService },
    { type: PasswordService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ErrorInterceptorService {
    /**
     * @param {?} _modalService
     * @param {?} _messageService
     */
    constructor(_modalService, _messageService) {
        this._modalService = _modalService;
        this._messageService = _messageService;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        /** @type {?} */
        const logFormat = 'background: maroon; color: white';
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            return data;
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])((/**
         * @param {?} exception
         * @return {?}
         */
        (exception) => {
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
                        this._messageService.changeMessage(exception.error.message);
                        this._modalService.open(CommonModals.ErrorMessage);
                        break;
                    case HttpError.Forbidden:
                        console.error('%c Forbidden 403', logFormat);
                        this._messageService.changeMessage(exception.error.message);
                        this._modalService.open(CommonModals.PasswordRequired);
                        break;
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])(exception);
        })));
    }
}
ErrorInterceptorService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ErrorInterceptorService.ctorParameters = () => [
    { type: ModalService },
    { type: ExceptionMessageService }
];
/** @nocollapse */ ErrorInterceptorService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ErrorInterceptorService_Factory() { return new ErrorInterceptorService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ModalService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ExceptionMessageService)); }, token: ErrorInterceptorService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchService {
    constructor() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._textChange = this._observer.asObservable();
        this._observerCurrent = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._currentChange = this._observerCurrent.asObservable();
        this._observerTotal = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._totalChange = this._observerTotal.asObservable();
    }
    /**
     * @return {?}
     */
    get textChange() {
        return this._textChange;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    setText(text) {
        this._observer.next(text);
    }
    /**
     * @return {?}
     */
    get currentChange() {
        return this._currentChange;
    }
    /**
     * @return {?}
     */
    get totalChange() {
        return this._totalChange;
    }
    /**
     * @param {?} current
     * @return {?}
     */
    setCurrent(current) {
        this._observerCurrent.next(current);
    }
    /**
     * @param {?} total
     * @return {?}
     */
    setTotal(total) {
        this._observerTotal.next(total);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchComponent {
    /**
     * @param {?} _searchService
     */
    constructor(_searchService) {
        this._searchService = _searchService;
        this.hidePanel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.current = 0;
        this.total = 0;
        _searchService.totalChange.subscribe((/**
         * @param {?} total
         * @return {?}
         */
        (total) => {
            this.total = total;
            if (total !== 0) {
                this.current = 1;
            }
            else {
                this.current = 0;
            }
            this._searchService.setCurrent(this.current);
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} text
     * @return {?}
     */
    setText(text) {
        this._searchService.setText(text);
    }
    /**
     * @return {?}
     */
    hide() {
        this.setText('');
        this.hidePanel.emit(true);
    }
    /**
     * @return {?}
     */
    prev() {
        if (this.current > 1) {
            this.current--;
            this._searchService.setCurrent(this.current);
        }
    }
    /**
     * @return {?}
     */
    next() {
        if (this.current < this.total) {
            this.current++;
            this._searchService.setCurrent(this.current);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.textElement.nativeElement.focus();
    }
}
SearchComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-search',
                template: "<div class=\"gd-nav-search-container\">\n  <input type=\"text\" class=\"gd-search-input\" #text (input)=\"setText(text.value)\"/>\n  <div class=\"gd-search-count\">{{current}} of {{total}}</div>\n  <div class=\"gd-nav-search-btn\" (click)=\"prev()\">\n    <fa-icon [icon]=\"['fas','chevron-left']\"></fa-icon>\n  </div>\n  <div class=\"gd-nav-search-btn\" (click)=\"next()\">\n    <fa-icon [icon]=\"['fas','chevron-right']\"></fa-icon>\n  </div>\n  <div class=\"gd-nav-search-btn gd-nav-search-cancel\" (click)=\"hide()\">\n    <fa-icon [icon]=\"['fas','times']\"></fa-icon>\n  </div>\n</div>\n",
                styles: [".gd-nav-search-btn{float:left;margin:0 10px;padding:3px 5px;cursor:pointer;color:#959da5}.gd-nav-search-cancel{font-size:15px;width:10px;margin-left:1px;margin-top:-2px}.gd-search-count{color:#959da5;font-size:11px;position:absolute;left:221px;top:13px;text-align:right;width:62px}.gd-nav-search-container{background-color:#3e4e5a;min-width:330px;padding:8px 0 7px 7px;position:absolute;left:328px;top:49px;z-index:1}.gd-search-input{float:left;height:11px;width:215px;padding:5px 65px 5px 5px}@media (max-width:1025px){.gd-nav-search-container{top:70px;left:45%}.gd-search-input{width:auto}.gd-search-count{left:48%}}@media (min-width:401px) and (max-width:700px){.gd-search-input{width:226px}.gd-search-count{left:55%}}@media (max-width:500px){.gd-nav-search-container{width:100%;left:0}}"]
            }] }
];
/** @nocollapse */
SearchComponent.ctorParameters = () => [
    { type: SearchService }
];
SearchComponent.propDecorators = {
    hidePanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    textElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['text', {
                    static: true
                },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const $$5 = jquery__WEBPACK_IMPORTED_MODULE_2__;
class SearchableDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _searchService
     * @param {?} _highlight
     * @param {?} _zoomService
     */
    constructor(_elementRef, _searchService, _highlight, _zoomService) {
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
        (current) => {
            this.current = current;
            if (this.current !== 0) {
                this.moveToCurrent();
            }
        }));
        _searchService.textChange.subscribe((/**
         * @param {?} text
         * @return {?}
         */
        (text) => {
            this.text = text;
            this.highlightSearch();
        }));
        this.zoom = _zoomService.zoom ? _zoomService.zoom : this.zoom;
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            this.zoom = val ? val : this.zoom;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    highlightSearch() {
        /** @type {?} */
        const el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            this.cleanHighlight(el);
            if (this.text) {
                this.highlightEl(el);
                /** @type {?} */
                const count = el.querySelectorAll('.gd-highlight').length;
                this.total = count;
            }
            else {
                this.total = 0;
            }
            this._searchService.setTotal(this.total);
        }
    }
    /**
     * @private
     * @return {?}
     */
    moveToCurrent() {
        if (this.current === 0) {
            return;
        }
        /** @type {?} */
        const currentZoom = this.getZoom();
        /** @type {?} */
        const el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            el.querySelectorAll('.gd-highlight-select').forEach((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                $$5(value).removeClass('gd-highlight-select');
            }));
            /** @type {?} */
            const currentEl = el.querySelectorAll('.gd-highlight')[this.current - 1];
            $$5(currentEl).addClass('gd-highlight-select');
            if (currentEl) {
                /** @type {?} */
                const options = {
                    left: 0,
                    top: ($$5(currentEl).offset().top * currentZoom) + el.parentElement.scrollTop - 150,
                };
                el.parentElement.scrollTo(options);
            }
        }
    }
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    highlightEl(el) {
        /** @type {?} */
        const textNodes = $$5(el).find('*').contents().filter((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            const nodeName = this.parentElement.nodeName.toLowerCase();
            /** @type {?} */
            const checkClass = ((/** @type {?} */ (this))).classList ? !((/** @type {?} */ (this))).classList.contains('gd-highlight') : true;
            return this.nodeType === 3 &&
                this.textContent.trim().length !== 0 &&
                nodeName !== 'style' &&
                nodeName !== 'title' &&
                nodeName !== 'body' &&
                nodeName !== 'script' &&
                checkClass;
        }));
        /** @type {?} */
        const text = this.text;
        /** @type {?} */
        const highlight = this._highlight;
        textNodes.each((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            const $this = $$5(this);
            /** @type {?} */
            let content = $this.text();
            content = highlight.transform(content, text);
            $this.replaceWith(content);
        }));
        el.normalize();
    }
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    cleanHighlight(el) {
        /** @type {?} */
        const nodeListOf = el.querySelectorAll('.gd-highlight');
        for (let i = 0; i < nodeListOf.length; i++) {
            /** @type {?} */
            const element = nodeListOf.item(i);
            element.replaceWith(((/** @type {?} */ (element))).innerText);
        }
        el.normalize();
    }
    /**
     * @private
     * @return {?}
     */
    getZoom() {
        return this.zoom / 100;
    }
}
SearchableDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[gdSearchable]'
            },] }
];
/** @nocollapse */
SearchableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: SearchService },
    { type: HighlightSearchPipe },
    { type: ZoomService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabbedToolbarsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TabbedToolbarsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-tabbed-toolbars',
                template: "<div class=\"top-panel\">\n  <gd-logo [logo]=\"'editor'\" [icon]=\"'pen-square'\"></gd-logo>\n  <ng-content></ng-content>\n</div>\n",
                styles: [".top-panel{background:#3e4e5a;display:flex;width:100%;height:90px}.top-panel ::ng-deep .logo{height:30px;font-size:16px}@media (max-width:480px){.top-panel{height:60px}.top-panel ::ng-deep .logo{height:60px}}"]
            }] }
];
/** @nocollapse */
TabbedToolbarsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabActivatorService {
    constructor() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._activeTabChange = this._observer.asObservable();
    }
    /**
     * @return {?}
     */
    get activeTabChange() {
        return this._activeTabChange;
    }
    /**
     * @param {?} tabId
     * @return {?}
     */
    changeActiveTab(tabId) {
        this._observer.next(tabId);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabComponent {
    /**
     * @param {?} _tabActivatorService
     */
    constructor(_tabActivatorService) {
        this._tabActivatorService = _tabActivatorService;
        this.disabled = false;
        this.active = false;
        this.content = true;
        this._tabActivatorService.activeTabChange.subscribe((/**
         * @param {?} tabId
         * @return {?}
         */
        (tabId) => {
            this.activation(tabId);
        }));
    }
    /**
     * @private
     * @param {?} tabId
     * @return {?}
     */
    activation(tabId) {
        if (this.id === tabId) {
            this.active = true;
        }
        else {
            this.active = false;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    selectTab() {
        if (this.disabled) {
            return;
        }
        this._tabActivatorService.changeActiveTab(this.id);
    }
}
TabComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-tab',
                template: "<div [ngClass]=\"(active) ? 'gd-tab active' : 'gd-tab'\" (mousedown)=\"selectTab()\">\n  <div class=\"title\" *ngIf=\"tabTitle\">{{tabTitle}}</div>\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  <span class=\"gd-popupdiv-hover gd-tool-tooltip gd-tool-tooltip-mobile\" *ngIf=\"tooltip\">{{tooltip}}</span>\n</div>\n<div *ngIf=\"content\" [ngClass]=\"(active) ? 'gd-editor-buttons active' : 'gd-editor-buttons'\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [".gd-editor-buttons{height:60px;position:absolute;background-color:#fff;width:100%;left:0;line-height:60px;display:none;z-index:9}.gd-editor-buttons ::ng-deep .toolbar-panel{height:60px}.gd-editor-buttons.active{display:flex}.gd-tab{text-align:center;font-size:11px;color:#e5e5e5;height:30px;line-height:30px;cursor:pointer;display:flex;align-items:center;justify-content:center}.gd-tab .icon{display:none;font-size:14px;margin:auto 23px}.gd-tab .title{margin:auto 23px}.gd-tab .gd-popupdiv-hover{display:inline}.gd-tab .gd-tool-tooltip{position:absolute;left:35px!important;top:10px;padding:3px .5em;background-color:#08090a;color:#fff!important;text-align:center;border-radius:2px;z-index:20;font-size:12px}.gd-tab .gd-tool-tooltip::after{right:100%;top:50%;content:\" \";height:0;width:0;position:absolute;pointer-events:none;border:5px solid transparent;border-right-color:#000;margin-top:-5px}.gd-tab.active{background-color:#fff;color:#3e4e5a;font-weight:700}@media (max-width:480px){.gd-tab{height:60px;line-height:60px}.gd-tab .title{display:none}.gd-tab .icon{display:block}.gd-tab .gd-tool-tooltip::after{display:none}.gd-tab .gd-tool-tooltip-mobile{color:rgba(0,0,0,.41)!important;background-color:#fff!important;font-size:14px;position:relative;left:0;padding:0;text-align:left;top:0}}"]
            }] }
];
/** @nocollapse */
TabComponent.ctorParameters = () => [
    { type: TabActivatorService }
];
TabComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tabTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabsComponent {
    constructor() {
    }
}
TabsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-tabs',
                template: "<div class=\"gd-tabs\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [".gd-tabs{display:flex}"]
            }] }
];
/** @nocollapse */
TabsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Formatting {
    /**
     * @param {?} fontSize
     * @param {?} color
     * @param {?} bgColor
     * @param {?} bold
     * @param {?} italic
     * @param {?} underline
     * @param {?} font
     * @param {?} strikeout
     * @param {?} align
     * @param {?} list
     */
    constructor(fontSize, color, bgColor, bold, italic, underline, font, strikeout, align, list) {
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
}
Formatting.DEFAULT = new Formatting(10, '#000000', '#FFFFFF', false, false, false, 'Arial', false, "", "");
class FormattingService {
    constructor() {
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
    /**
     * @return {?}
     */
    get formatBoldChange() {
        return this._formatBoldChange;
    }
    /**
     * @return {?}
     */
    get formatUnderlineChange() {
        return this._formatUnderlineChange;
    }
    /**
     * @return {?}
     */
    get formatColorChange() {
        return this._formatColorChange;
    }
    /**
     * @return {?}
     */
    get formatBgColorChange() {
        return this._formatBgColorChange;
    }
    /**
     * @return {?}
     */
    get formatFontSizeChange() {
        return this._formatFontSizeChange;
    }
    /**
     * @return {?}
     */
    get formatFontChange() {
        return this._formatFontChange;
    }
    /**
     * @return {?}
     */
    get undo() {
        return this._undo;
    }
    /**
     * @return {?}
     */
    get redo() {
        return this._redo;
    }
    /**
     * @return {?}
     */
    get formatItalicChange() {
        return this._formatItalicChange;
    }
    /**
     * @return {?}
     */
    get formatStrikeoutChange() {
        return this._formatStrikeoutChange;
    }
    /**
     * @return {?}
     */
    get formatAlignChange() {
        return this._formatAlignChange;
    }
    /**
     * @return {?}
     */
    get formatListChange() {
        return this._formatListChange;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static createFontSizeOption(val) {
        return { value: val, name: val + 'px', separator: false };
    }
    /**
     * @return {?}
     */
    static getFontSizeOptions() {
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
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static createFontOption(val) {
        return { value: val, name: val, separator: false };
    }
    /**
     * @return {?}
     */
    static getFontOptions() {
        /** @type {?} */
        const fonts = ["Arial", "Calibri", "Century Gothic", "Comic Sans", "Consolas", "Courier", "Dejavu Sans", "Dejavu Serif", "Georgia", "Gill Sans", "Helvetica", "Impact", "Lucida Sans",
            "Myriad Pro", "Open Sans", "Palatino", "Tahoma", "Times New Roman", "Trebuchet"];
        /** @type {?} */
        const fontOptions = [];
        fonts.forEach((/**
         * @param {?} font
         * @return {?}
         */
        font => {
            fontOptions.push(this.createFontOption(font));
        }));
        return fontOptions;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    changeFormatFontSize($event) {
        this._observerFontSize.next($event);
    }
    /**
     * @param {?} bold
     * @return {?}
     */
    changeFormatBold(bold) {
        this._observerBold.next(bold);
    }
    /**
     * @param {?} underline
     * @return {?}
     */
    changeFormatUnderline(underline) {
        this._observerUnderline.next(underline);
    }
    /**
     * @return {?}
     */
    Undo() {
        this._observerUndo.next();
    }
    /**
     * @return {?}
     */
    Redo() {
        this._observerRedo.next();
    }
    /**
     * @param {?} italic
     * @return {?}
     */
    changeFormatItalic(italic) {
        this._observerItalic.next(italic);
    }
    /**
     * @param {?} color
     * @return {?}
     */
    changeFormatColor(color) {
        this._observerColor.next(color);
    }
    /**
     * @param {?} bgcolor
     * @return {?}
     */
    changeFormatBgColor(bgcolor) {
        this._observerBgColor.next(bgcolor);
    }
    /**
     * @param {?} font
     * @return {?}
     */
    changeFormatFont(font) {
        this._observerFont.next(font);
    }
    /**
     * @param {?} strikeout
     * @return {?}
     */
    changeFormatStrikeout(strikeout) {
        this._observerStrikeout.next(strikeout);
    }
    /**
     * @param {?} align
     * @return {?}
     */
    changeFormatAlign(align) {
        this._observerAlign.next(align);
    }
    /**
     * @param {?} list
     * @return {?}
     */
    changeFormatList(list) {
        this._observerList.next(list);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_COLORS = ['#000000', '#993300', '#333300', '#000080', '#333399', '#333333',
    '#800000', '#FF6600', '#808000', '#008000', '#008080', '#0000FF',
    '#666699', '#808080', '#FF0000', '#FF9900', '#99CC00', '#339966',
    '#33CCCC', '#3366FF', '#800080', '#999999', '#FF00FF', '#FFCC00',
    '#FFFF00', '#00FF00', '#00FFFF', '#00CCFF', '#993366', '#C0C0C0',
    '#FF99CC', '#FFCC99', '#FFFF99', '#CCFFFF', '#99CCFF', '#FFFFFF'];
class ColorPickerComponent {
    constructor() {
        this.selectedColor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.colors = DEFAULT_COLORS;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} $event
     * @param {?} color
     * @return {?}
     */
    select($event, color) {
        $event.preventDefault();
        $event.stopPropagation();
        this.selectedColor.emit(color);
    }
}
ColorPickerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-color-picker',
                template: "<div class=\"bcPicker-picker\">\n  <div class=\"bcPicker-palette\">\n    <div class=\"bcPicker-color\" *ngFor=\"let color of colors\" [style.background-color]=\"color\" (click)=\"select($event, color)\"></div>\n  </div>\n</div>\n",
                styles: [".bcPicker-picker{border:1px;border-radius:100%}.bcPicker-palette{width:232px;padding:5px;border:1px solid #efefef;background-color:#fdfdfd;z-index:999}.bcPicker-palette>.bcPicker-color{width:14px;height:14px;margin:2px;display:inline-block;border:1px solid #efefef;background-color:#9da97b;cursor:pointer}"]
            }] }
];
/** @nocollapse */
ColorPickerComponent.ctorParameters = () => [];
ColorPickerComponent.propDecorators = {
    selectedColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BackFormattingService extends FormattingService {
    constructor() {
        super();
    }
}
BackFormattingService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
BackFormattingService.ctorParameters = () => [];
/** @nocollapse */ BackFormattingService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function BackFormattingService_Factory() { return new BackFormattingService(); }, token: BackFormattingService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectionService {
    constructor() {
        this.isIE =  !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    }
    /**
     * @return {?}
     */
    restoreSelection() {
        if (this.selection && !this.selection.collapsed || this.isIE) {
            this.putSelection(this.selection);
        }
    }
    /**
     * @return {?}
     */
    captureSelection() {
        this.selection = window.getSelection().getRangeAt(0);
    }
    /**
     * @private
     * @param {?} selection
     * @return {?}
     */
    putSelection(selection) {
        /** @type {?} */
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(selection.cloneRange());
    }
    /**
     * @return {?}
     */
    refreshSelection() {
        this.captureSelection();
        this.restoreSelection();
    }
}
SelectionService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ SelectionService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function SelectionService_Factory() { return new SelectionService(); }, token: SelectionService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const $$6 = jquery__WEBPACK_IMPORTED_MODULE_2__;
class FormattingDirective {
    /**
     * @param {?} _formattingService
     * @param {?} _backFormattingService
     * @param {?} _selectionService
     */
    constructor(_formattingService, _backFormattingService, _selectionService) {
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
    mouseup() {
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
    }
    /**
     * @private
     * @return {?}
     */
    checkJustify() {
        /** @type {?} */
        let align = "";
        align = document.queryCommandState("justifyCenter") ? "center" : align;
        align = document.queryCommandState("justifyFull") ? "full" : align;
        align = document.queryCommandState("justifyLeft") ? "left" : align;
        align = document.queryCommandState("justifyRight") ? "right" : align;
        return align;
    }
    /**
     * @private
     * @return {?}
     */
    checkList() {
        /** @type {?} */
        let list = "";
        list = document.queryCommandState("insertUnorderedList") ? "unordered" : list;
        list = document.queryCommandState("insertOrderedList") ? "ordered" : list;
        return list;
    }
    /**
     * @return {?}
     */
    reportFontSize() {
        /** @type {?} */
        let containerEl;
        /** @type {?} */
        let sel;
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
    }
    /**
     * @param {?} el
     * @param {?} propName
     * @return {?}
     */
    getComputedStyleProperty(el, propName) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(el, null)[propName];
        }
        else if (el.currentStyle) {
            return el.currentStyle[propName];
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._formattingService.undo.subscribe((/**
         * @return {?}
         */
        () => {
            this.toggleUndo();
        }));
        this._formattingService.redo.subscribe((/**
         * @return {?}
         */
        () => {
            this.toggleRedo();
        }));
        this._formattingService.formatBoldChange.subscribe((/**
         * @param {?} bold
         * @return {?}
         */
        (bold) => {
            this.bold = bold;
            this.toggleBold();
        }));
        this._formattingService.formatUnderlineChange.subscribe((/**
         * @param {?} underline
         * @return {?}
         */
        (underline) => {
            this.underline = underline;
            this.toggleUnderline();
        }));
        this._formattingService.formatItalicChange.subscribe((/**
         * @param {?} italic
         * @return {?}
         */
        (italic) => {
            this.italic = italic;
            this.toggleItalic();
        }));
        this._formattingService.formatColorChange.subscribe(((/**
         * @param {?} color
         * @return {?}
         */
        (color) => {
            this.color = color;
            this.setColor(color);
        })));
        this._formattingService.formatBgColorChange.subscribe(((/**
         * @param {?} bgcolor
         * @return {?}
         */
        (bgcolor) => {
            this.bgColor = bgcolor;
            this.setBgColor(bgcolor);
        })));
        this._formattingService.formatFontSizeChange.subscribe(((/**
         * @param {?} fontSize
         * @return {?}
         */
        (fontSize) => {
            this.setFontSize(fontSize);
        })));
        this._formattingService.formatFontChange.subscribe(((/**
         * @param {?} font
         * @return {?}
         */
        (font) => {
            this.font = font;
            this.setFont(font);
        })));
        this._formattingService.formatStrikeoutChange.subscribe((/**
         * @param {?} strikeout
         * @return {?}
         */
        (strikeout) => {
            this.strikeout = strikeout;
            this.toggleStrikeout();
        }));
        this._formattingService.formatAlignChange.subscribe((/**
         * @param {?} align
         * @return {?}
         */
        (align) => {
            this.align = align;
            this.toggleAlign(this.align);
        }));
        this._formattingService.formatListChange.subscribe((/**
         * @param {?} list
         * @return {?}
         */
        (list) => {
            this.list = list;
            this.toggleList(this.list);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    toggleBold() {
        document.execCommand("bold");
        this._selectionService.refreshSelection();
    }
    /**
     * @private
     * @return {?}
     */
    toggleUnderline() {
        document.execCommand("underline");
        this._selectionService.refreshSelection();
    }
    /**
     * @private
     * @return {?}
     */
    toggleItalic() {
        document.execCommand("italic");
        this._selectionService.refreshSelection();
    }
    /**
     * @private
     * @param {?} bgColor
     * @return {?}
     */
    setBgColor(bgColor) {
        document.execCommand("backColor", false, bgColor);
        this._selectionService.refreshSelection();
    }
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    setColor(color) {
        document.execCommand("foreColor", false, color);
        this._selectionService.refreshSelection();
    }
    /**
     * @private
     * @param {?} fontSize
     * @return {?}
     */
    setFontSize(fontSize) {
        if (document.getSelection().toString()) {
            /** @type {?} */
            let spanString = "<span style='font-size: " + fontSize + "px; color: " + this.color + "; background-color: " + this.bgColor + "; font-family: " + this.font + "'>" +
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
    }
    /**
     * @private
     * @return {?}
     */
    toggleUndo() {
        document.execCommand("undo");
    }
    /**
     * @private
     * @return {?}
     */
    toggleRedo() {
        document.execCommand("redo");
    }
    /**
     * @private
     * @param {?} font
     * @return {?}
     */
    setFont(font) {
        document.execCommand("fontName", false, font);
        this._selectionService.refreshSelection();
    }
    /**
     * @private
     * @return {?}
     */
    toggleStrikeout() {
        document.execCommand("strikeThrough");
        this._selectionService.refreshSelection();
    }
    /**
     * @private
     * @param {?} align
     * @return {?}
     */
    toggleAlign(align) {
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
    }
    /**
     * @private
     * @param {?} align
     * @return {?}
     */
    toggleAlignIE(align) {
        this._selectionService.restoreSelection();
        this._selectionService.captureSelection();
        /** @type {?} */
        const selection = window.getSelection().focusNode.parentNode.parentNode;
        if (align === "full") {
            align = "justify";
        }
        $$6(selection).css("text-align", align);
        this._selectionService.refreshSelection();
    }
    /**
     * @private
     * @param {?} list
     * @return {?}
     */
    toggleList(list) {
        switch (list) {
            case 'unordered':
                document.execCommand('insertUnorderedList');
                break;
            case 'ordered':
                document.execCommand('insertOrderedList');
                break;
        }
        this._selectionService.refreshSelection();
    }
}
FormattingDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[gdFormatting]'
            },] }
];
/** @nocollapse */
FormattingDirective.ctorParameters = () => [
    { type: FormattingService },
    { type: BackFormattingService },
    { type: SelectionService }
];
FormattingDirective.propDecorators = {
    mouseup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseup',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SuccessModalComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SuccessModalComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-success-modal',
                template: "<gd-modal id=\"gd-success-modal\" [title]=\"'Saved'\">\n<div id=\"gd-modal-success\"><div class=\"check_mark\">\n    <div class=\"sa-icon sa-success animate\">\n        <span class=\"sa-line sa-tip animateSuccessTip\"></span>\n        <span class=\"sa-line sa-long animateSuccessLong\"></span>\n        <div class=\"sa-placeholder\"></div>\n        <div class=\"sa-fix\"></div>\n      </div>\n  </div></div>\n  </gd-modal>\n",
                styles: [".check_mark{margin:0 auto}.sa-icon{width:80px;height:80px;border:4px solid gray;border-radius:50%;padding:0;position:relative;box-sizing:content-box}#gd-modal-success{display:flex;overflow:hidden;padding:20px}.sa-icon.sa-success{border-color:#4caf50}.sa-icon.sa-success::after,.sa-icon.sa-success::before{content:'';position:absolute;width:60px;height:120px;background:#fff}.sa-icon.sa-success::before{border-radius:120px 0 0 120px;top:-7px;left:-33px;transform:rotate(-45deg);transform-origin:60px 60px}.sa-icon.sa-success::after{border-radius:0 120px 120px 0;top:-11px;left:30px;transform:rotate(-45deg);transform-origin:0 60px}.sa-icon.sa-success .sa-placeholder{width:80px;height:80px;border:4px solid rgba(76,175,80,.5);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.sa-icon.sa-success .sa-fix{width:5px;height:90px;background-color:#fff;position:absolute;left:28px;top:8px;z-index:1;transform:rotate(-45deg)}.sa-icon.sa-success.animate::after{-webkit-animation:4.25s ease-in rotatePlaceholder;animation:4.25s ease-in rotatePlaceholder}.animateSuccessTip{-webkit-animation:.75s animateSuccessTip;animation:.75s animateSuccessTip}.animateSuccessLong{-webkit-animation:.75s animateSuccessLong;animation:.75s animateSuccessLong}@-webkit-keyframes animateSuccessLong{0%,65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}100%{width:47px;right:8px;top:38px}}@-webkit-keyframes animateSuccessTip{0%,54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}100%{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%,54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}100%{width:25px;left:14px;top:45px}}@keyframes animateSuccessLong{0%,65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}100%{width:47px;right:8px;top:38px}}.sa-icon.sa-success .sa-line{height:5px;background-color:#4caf50;display:block;border-radius:2px;position:absolute;z-index:2}.sa-icon.sa-success .sa-line.sa-tip{width:25px;left:14px;top:46px;transform:rotate(45deg)}.sa-icon.sa-success .sa-line.sa-long{width:47px;right:8px;top:38px;transform:rotate(-45deg)}@-webkit-keyframes rotatePlaceholder{0%,5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}100%,12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%,5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}100%,12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}@media (max-width:1025px){#gd-modal-success{left:50%;top:50%;position:relative;transform:translate(-50%,-50%)}}"]
            }] }
];
/** @nocollapse */
SuccessModalComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EditHtmlService {
    constructor() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._htmlContent = this._observer.asObservable();
    }
    /**
     * @return {?}
     */
    get observer() {
        return this._observer;
    }
    /**
     * @return {?}
     */
    get htmlContent() {
        return this._htmlContent;
    }
}
EditHtmlService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EditHtmlService.ctorParameters = () => [];
/** @nocollapse */ EditHtmlService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function EditHtmlService_Factory() { return new EditHtmlService(); }, token: EditHtmlService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EditorDirective {
    /**
     * @param {?} _selectionService
     * @param {?} _htmlService
     */
    constructor(_selectionService, _htmlService) {
        this._selectionService = _selectionService;
        this._htmlService = _htmlService;
        this.isIE =  !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onInput(event) {
        this.text = event.target;
        if (this.isIE) {
            if (this.text.innerHTML) {
                /** @type {?} */
                const html = this.text.innerHTML.toString();
                this._htmlService.observer.next(html);
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseleave(event) {
        this._selectionService.captureSelection();
        // this code is required to fix IE11 issue - it doesn't trigger blur event, since that we need to save updated HTML here
        if (this.isIE) {
            this._htmlService.observer.next(event.target.innerHTML.toString());
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        event.preventDefault();
        this._selectionService.restoreSelection();
        if (this.text.innerHTML) {
            /** @type {?} */
            const html = this.text.innerHTML.toString();
            this._htmlService.observer.next(html);
        }
        else {
            this._htmlService.observer.next(event.target.innerHTML.toString());
        }
    }
}
EditorDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[gdEditor]'
            },] }
];
/** @nocollapse */
EditorDirective.ctorParameters = () => [
    { type: SelectionService },
    { type: EditHtmlService }
];
EditorDirective.propDecorators = {
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup', ['$event'],] }],
    onMouseleave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave', ['$event'],] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingMaskService {
    constructor() {
        this.onLoadingChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.requests = [];
    }
    /**
     * @param {?} req
     * @return {?}
     */
    onRequestStart(req) {
        this.requests.push(req);
        this.notify();
    }
    /**
     * @param {?} req
     * @return {?}
     */
    onRequestFinish(req) {
        /** @type {?} */
        const index = this.requests.indexOf(req);
        if (index !== -1) {
            this.requests.splice(index, 1);
        }
        this.notify();
    }
    /**
     * @private
     * @return {?}
     */
    notify() {
        this.onLoadingChanged.emit(this.requests.length !== 0);
    }
}
LoadingMaskService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
LoadingMaskService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingMaskComponent {
    /**
     * @param {?} _loadingMaskService
     */
    constructor(_loadingMaskService) {
        this._loadingMaskService = _loadingMaskService;
        this.loadingMask = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
        (loading) => this.loadingMask = loading));
    }
}
LoadingMaskComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-loading-mask',
                template: "<div class=\"loading-wrapper\" *ngIf=\"loadingMask\">\n    <div class=\"loading-message\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;Loading... Please wait.\n    </div>\n</div>\n",
                styles: [".loading-wrapper{background:rgba(0,0,0,.5);width:100%;height:100%;font-size:14px;color:#fff;position:fixed;top:0;left:0;z-index:99999}.loading-message{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}"]
            }] }
];
/** @nocollapse */
LoadingMaskComponent.ctorParameters = () => [
    { type: LoadingMaskService }
];
LoadingMaskComponent.propDecorators = {
    loadingMask: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingMaskInterceptorService {
    /**
     * @param {?} _loadingMaskService
     */
    constructor(_loadingMaskService) {
        this._loadingMaskService = _loadingMaskService;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        this._loadingMaskService.onRequestStart(req);
        /** @type {?} */
        const callback = (/**
         * @return {?}
         */
        () => this._loadingMaskService.onRequestFinish(req));
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(callback));
    }
}
LoadingMaskInterceptorService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LoadingMaskInterceptorService.ctorParameters = () => [
    { type: LoadingMaskService }
];
/** @nocollapse */ LoadingMaskInterceptorService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function LoadingMaskInterceptorService_Factory() { return new LoadingMaskInterceptorService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LoadingMaskService)); }, token: LoadingMaskInterceptorService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OutsideDirective {
    /**
     * @param {?} _elRef
     */
    constructor(_elRef) {
        this._elRef = _elRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.globalClick = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(document, 'click');
        this.globalClick.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.onGlobalClick(event);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @param {?} event
     * @return {?}
     */
    onGlobalClick(event) {
        if (event instanceof MouseEvent && this.clickOutsideEnabled === true) {
            if (this.isDescendant(this._elRef.nativeElement, event.target) === true) {
                this.clickOutside.emit({
                    target: (event.target || null),
                    value: false
                });
            }
            else {
                this.clickOutside.emit({
                    target: (event.target || null),
                    value: true
                });
            }
        }
    }
    /**
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    isDescendant(parent, child) {
        /** @type {?} */
        let node = child;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            else {
                node = node.parentNode;
            }
        }
        return false;
    }
}
OutsideDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[gdOutside]'
            },] }
];
/** @nocollapse */
OutsideDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
OutsideDirective.propDecorators = {
    clickOutsideEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    clickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LeftSideBarComponent {
    constructor() {
        this.showSpinner = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LeftSideBarComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-left-side-bar',
                template: "<div class=\"left-panel\">\n  <div class=\"gd-left-bar-fade\" *ngIf=\"showSpinner\">\n    <div class=\"gd-left-bar-spinner\"><i class=\"fa fa-circle-o-notch fa-spin\"></i> &nbsp;Loading...\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                styles: [".left-panel{position:absolute;top:60px;left:0;bottom:0;z-index:99999}.gd-left-bar-fade{position:fixed;margin:auto;display:none;overflow:hidden;top:50px;width:315px;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0;background-color:rgba(255,255,255,.5)}.gd-left-bar-spinner{left:30%;top:50%;position:absolute}@media (max-width:480px){.gd-left-bar-fade{top:100px;right:0}.gd-left-bar-spinner{top:20%}}"]
            }] }
];
/** @nocollapse */
LeftSideBarComponent.ctorParameters = () => [];
LeftSideBarComponent.propDecorators = {
    showSpinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const providers = [ConfigService,
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
    LoadingMaskService,
    TabActivatorService];
class CommonComponentsModule {
    constructor() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["far"]);
    }
}
CommonComponentsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]],
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
                    LoadingMaskComponent,
                    OutsideDirective,
                    LeftSideBarComponent
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
                    LoadingMaskComponent,
                    DndDirective,
                    OutsideDirective,
                    LeftSideBarComponent
                ],
                providers: providers
            },] }
];
/** @nocollapse */
CommonComponentsModule.ctorParameters = () => [];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");



class States {
}
States.Empty = 'empty';
States.Opened = 'opened';
let AddFilePanelComponent = class AddFilePanelComponent {
    constructor(_modalService, _excMessageService) {
        this._modalService = _modalService;
        this._excMessageService = _excMessageService;
        this.active = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.urlForUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cleanPanel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.state = States.Empty;
        this.uploadDisabled = true;
    }
    ngOnInit() {
    }
    getFormatIcon() {
        return _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["FileUtil"].find(this.fileName, false).icon;
    }
    openModal() {
        this.active.emit(this.panel);
        this._modalService.open(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["CommonModals"].BrowseFiles);
    }
    isEmpty() {
        return this.state === States.Empty;
    }
    cleanFile() {
        this.active.emit(this.panel);
        this.cleanPanel.emit(true);
    }
    uploadUrl(url) {
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
    }
    checkDisabled(url) {
        this.uploadDisabled = url ? url.length === 0 : true;
    }
    ngOnChanges(changes) {
        if (this.fileName) {
            this.state = States.Opened;
        }
        else {
            this.state = States.Empty;
        }
    }
};
AddFilePanelComponent.ctorParameters = () => [
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ModalService"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ExceptionMessageService"] }
];
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



/***/ }),

/***/ "../../libs/comparison/src/lib/comparison-app.component.less":
/*!************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/comparison-app.component.less ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');\n:host * {\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n}\n.wrapper {\n  align-items: stretch;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.loader {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.upload-compare-file {\n  height: 100%;\n  width: 50%;\n  border-right: 1px solid #CCC;\n  display: flex;\n  align-content: center;\n  flex-direction: column;\n  text-align: center;\n  flex-grow: 0;\n}\n.open-file-panel {\n  display: flex;\n  width: 100%;\n}\n.files-panel {\n  background-color: #E7E7E7;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n}\n.result-panel {\n  background-color: #E7E7E7;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-content: center;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n.doc-panel {\n  display: flex;\n  height: inherit;\n}\n.gd-document {\n  width: 100%;\n  height: 100%;\n}\n.top-panel {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.toolbar-panel {\n  background-color: #3e4e5a;\n  width: 100%;\n}\n.row {\n  display: flex;\n  height: inherit;\n}\n.column {\n  width: 100%;\n}\n.tabs-wrapper {\n  display: flex;\n  justify-self: flex-end;\n  align-self: flex-end;\n  width: 100%;\n  justify-content: flex-end;\n}\n.tabs {\n  display: flex;\n  margin-right: 30px;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n@media (max-width: 480px) {\n  .files-panel {\n    flex-direction: column;\n  }\n  .files-panel .upload-compare-file {\n    width: 100%;\n    border-bottom: 1px solid #CCC;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY29tcGFyaXNvbi9zcmMvbGliL2NvbXBhcmlzb24tYXBwLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL2VsZW5rby9wcm9qZWN0cy9Hcm91cERvY3MuVG90YWwtQW5ndWxhci9saWJzL2NvbXBhcmlzb24vc3JjL2xpYi9jb21wYXJpc29uLWFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RUNDa0I7QUFFbEI7RUFDRSxzREFBQTtBRERGO0FDSUE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QURGRjtBQ0tBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QURIRjtBQ01BO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FESkY7QUNPQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FETEY7QUNRQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURORjtBQ1NBO0VBQ0UseUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBRFJGO0FDV0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBRFRGO0FDWUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRFZGO0FDYUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FEWEY7QUNjQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBRFpGO0FDZUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBRGJGO0FDZ0JBO0VBQ0UsV0FBQTtBRGRGO0FDaUJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QURmRjtBQ2tCQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QURoQkY7QUNvQkE7RUFDRTtJQUNFLHNCQUFBO0VEbEJGO0VDaUJBO0lBR0ksV0FBQTtJQUNBLDZCQUFBO0VEakJKO0FBQ0YiLCJmaWxlIjoibGlicy9jb21wYXJpc29uL3NyYy9saWIvY29tcGFyaXNvbi1hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcbjpob3N0ICoge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG4ud3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5sb2FkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnVwbG9hZC1jb21wYXJlLWZpbGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDQ0M7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWdyb3c6IDA7XG59XG4ub3Blbi1maWxlLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZmlsZXMtcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFN0U3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnJlc3VsdC1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFN0U3RTc7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kb2MtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG4uZ2QtZG9jdW1lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnRvcC1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvb2xiYXItcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U0ZTVhO1xuICB3aWR0aDogMTAwJTtcbn1cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG4uY29sdW1uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGFicy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnRhYnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuZmlsZXMtcGFuZWwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmZpbGVzLXBhbmVsIC51cGxvYWQtY29tcGFyZS1maWxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQztcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL2NvbW1vbi1jb21wb25lbnRzL3NyYy9zdHlsZXMvdmFyaWFibGVzXCI7XG5AaW1wb3J0IChjc3MpIHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcblxuOmhvc3QgKiB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLndyYXBwZXIge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5sb2FkZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi51cGxvYWQtY29tcGFyZS1maWxlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTAlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQ0NDO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxleC1ncm93OiAwO1xufVxuXG4ub3Blbi1maWxlLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5maWxlcy1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFN0U3RTc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yZXN1bHQtcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFN0U3O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kb2MtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5nZC1kb2N1bWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50b3AtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRvb2xiYXItcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U0ZTVhO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cblxuLmNvbHVtbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFicy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4udGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG5cbkBtZWRpYSBAcGhvbmUtZG93biB7XG4gIC5maWxlcy1wYW5lbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAudXBsb2FkLWNvbXBhcmUtZmlsZXtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XG4gICAgfVxuICB9XG59XG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _comparison_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comparison-config.service */ "../../libs/comparison/src/lib/comparison-config.service.ts");
/* harmony import */ var _comparison_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comparison.service */ "../../libs/comparison/src/lib/comparison.service.ts");






const $ = jquery__WEBPACK_IMPORTED_MODULE_2__;
class Files {
}
Files.FIRST = 'first';
Files.SECOND = 'second';
class Highlight {
    constructor() {
        this.active = false;
    }
}
let ComparisonAppComponent = class ComparisonAppComponent {
    constructor(_comparisonService, configService, uploadFilesService, pagePreloadService, _modalService, _tabActivatorService, _elementRef) {
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
        configService.updatedConfig.subscribe((config) => {
            this.comparisonConfig = config;
        });
        pagePreloadService.checkPreload.subscribe((page) => {
            if (this.comparisonConfig.preloadResultPageCount !== 0) {
                this.checkPreload(this.first, page);
                this.checkPreload(this.second, page);
            }
        });
        uploadFilesService.uploadsChange.subscribe((uploads) => {
            const active = this.activePanel;
            this.setLoading(active, true);
            if (uploads) {
                let i;
                for (i = 0; i < uploads.length; i++) {
                    this._comparisonService.upload(uploads.item(i), '', this.rewriteConfig).subscribe((obj) => {
                        this.getFile(obj.guid, '', active);
                        this.selectDir('');
                    });
                }
            }
        });
        _tabActivatorService.activeTabChange.subscribe((tabId) => {
            this.activeTab = tabId;
        });
    }
    setLoading(panel, flag) {
        if (panel === this.first) {
            this.loadingFirstPanel = flag;
        }
        else {
            this.loadingSecondPanel = flag;
        }
    }
    get rewriteConfig() {
        return this.comparisonConfig ? this.comparisonConfig.rewrite : true;
    }
    selectDir($event) {
        this._comparisonService.loadFiles($event).subscribe((files) => {
            let nameExt;
            if (this.credentials.get(this.first)) {
                nameExt = this.credentials.get(this.first).guid.split('.').pop();
            }
            else if (this.credentials.get(this.second)) {
                nameExt = this.credentials.get(this.second).guid.split('.').pop();
            }
            if (nameExt) {
                files = files.filter(function (value) {
                    return value.directory || value.guid.split('.').pop() === nameExt;
                });
            }
            this.files = files || [];
        });
    }
    selectFile($event, password, modalId, param) {
        this.setLoading(param, true);
        this.getFile($event, password, param);
        this.selectDir('');
        this._modalService.close(modalId);
        this.clearData(param);
    }
    getFile($event, password, param) {
        const credentials = { guid: $event, password: password };
        this.credentials.set(param, credentials);
        this._comparisonService.loadFile(credentials).subscribe((file) => {
            this.file.set(param, file);
            if (file) {
                const preloadResultPageCount = this.comparisonConfig.preloadResultPageCount;
                this.countPages = file.pages ? file.pages.length : 0;
                if (preloadResultPageCount > 0) {
                    this.preloadPages(param, 1, preloadResultPageCount > this.countPages ? this.countPages : preloadResultPageCount);
                }
            }
            this.updateFileNames();
            this.setLoading(param, false);
        });
    }
    clearFile(param) {
        this.clearData(param);
        this.credentials.delete(param);
        this.result = null;
        this.resultTabDisabled = true;
        this._tabActivatorService.changeActiveTab(this.filesTab);
    }
    clearData(param) {
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
    }
    preloadPages(param, start, end) {
        for (let i = start; i <= end; i++) {
            this._comparisonService.loadPage(this.credentials.get(param), i).subscribe((page) => {
                this.file.get(param).pages[i - 1] = page;
            });
        }
    }
    upload($event) {
        const active = this.activePanel;
        this._comparisonService.upload(null, $event, this.rewriteConfig).subscribe((obj) => {
            this.getFile(obj.guid, '', active);
            this.selectDir('');
        });
    }
    updateFileNames() {
        this.firstFileName = this.getFirstFileName();
        this.secondFileName = this.getSecondFileName();
    }
    getSecondFileName() {
        const fileCredentials = this.credentials ? this.credentials.get(this.second) : undefined;
        return fileCredentials ? fileCredentials.guid.replace(/^.*[\\\/]/, '') : '';
    }
    getFirstFileName() {
        const fileCredentials = this.credentials ? this.credentials.get(this.first) : undefined;
        return fileCredentials ? fileCredentials.guid.replace(/^.*[\\\/]/, '') : '';
    }
    checkPreload(panel, page) {
        if (!this.file.get(panel)) {
            return;
        }
        for (let i = page; i < page + 2; i++) {
            if (i > 0 && i <= this.countPages && !this.file.get(panel).pages[i - 1].data) {
                this.preloadPages(panel, i, i);
            }
        }
    }
    compare() {
        if (this.credentials.size !== 2) {
            return;
        }
        this.resultTabDisabled = false;
        const arr = [];
        arr.push(this.credentials.get(this.first));
        arr.push(this.credentials.get(this.second));
        this._comparisonService.compare(arr).subscribe((result) => {
            this.result = result;
            this.result.changes.forEach((change) => {
                change.id = this.generateRandomInteger();
                const zeroBasedId = change.pageInfo.id;
                if (!this.result.pages[zeroBasedId].changes) {
                    this.result.pages[zeroBasedId].changes = [];
                }
                this.result.pages[zeroBasedId].changes.push(change);
                change.normalized = {
                    x: change.box.x * 100 / change.pageInfo.width,
                    y: change.box.y * 100 / change.pageInfo.height,
                    width: change.box.width * 100 / change.pageInfo.width,
                    height: change.box.height * 100 / change.pageInfo.height,
                };
            });
        }, (err => {
            this.resultTabDisabled = true;
            this._tabActivatorService.changeActiveTab(this.filesTab);
        }));
        this._tabActivatorService.changeActiveTab(this.resultTab);
    }
    generateRandomInteger() {
        function _p8(s) {
            const p = (Math.random().toString(16) + "000000000").substr(2, 8);
            return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
        }
        return _p8(null) + _p8(true) + _p8(true) + _p8(null);
    }
    download() {
        if (!this.result) {
            return;
        }
        const credentials = { 'guid': this.result.guid, 'password': '' };
        window.location.assign(this._comparisonService.getDownloadUrl(credentials));
    }
    hideSidePanel($event) {
        this.activeTab = $event ? this.filesTab : this.resultTab;
        this._tabActivatorService.changeActiveTab(this.filesTab);
    }
};
ComparisonAppComponent.ctorParameters = () => [
    { type: _comparison_service__WEBPACK_IMPORTED_MODULE_5__["ComparisonService"] },
    { type: _comparison_config_service__WEBPACK_IMPORTED_MODULE_4__["ComparisonConfigService"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["UploadFilesService"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["PagePreloadService"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ModalService"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["TabActivatorService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _comparison_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comparison-config */ "../../libs/comparison/src/lib/comparison-config.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");






let ComparisonConfigService = class ComparisonConfigService {
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._comparisonConfig = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](new _comparison_config__WEBPACK_IMPORTED_MODULE_2__["ComparisonConfig"]());
        this._updatedConfig = this._comparisonConfig.asObservable();
    }
    get updatedConfig() {
        return this._updatedConfig;
    }
    load() {
        return new Promise((resolve, reject) => {
            const configEndpoint = this._config.getConfigEndpoint(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].COMPARISON_APP);
            this._http.get(configEndpoint, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson).toPromise().then((response) => {
                const comparisonConfig = response;
                this._comparisonConfig.next(comparisonConfig);
                resolve();
            }).catch((response) => {
                reject(`Could not load comparison config: ${JSON.stringify(response)}`);
            });
        });
    }
};
ComparisonConfigService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
];
ComparisonConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
], ComparisonConfigService);



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
class ComparisonConfig {
}


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _comparison_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comparison-app.component */ "../../libs/comparison/src/lib/comparison-app.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "../../node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "../../node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _comparison_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comparison.service */ "../../libs/comparison/src/lib/comparison.service.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _comparison_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comparison-config.service */ "../../libs/comparison/src/lib/comparison-config.service.ts");
/* harmony import */ var _add_file_panel_add_file_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-file-panel/add-file-panel.component */ "../../libs/comparison/src/lib/add-file-panel/add-file-panel.component.ts");
/* harmony import */ var _upload_file_panel_upload_file_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./upload-file-panel/upload-file-panel.component */ "../../libs/comparison/src/lib/upload-file-panel/upload-file-panel.component.ts");
/* harmony import */ var _difference_difference_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./difference/difference.component */ "../../libs/comparison/src/lib/difference/difference.component.ts");
/* harmony import */ var _difference_highlight_difference_highlight_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./difference-highlight/difference-highlight.component */ "../../libs/comparison/src/lib/difference-highlight/difference-highlight.component.ts");
/* harmony import */ var _result_document_result_document_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./result-document/result-document.component */ "../../libs/comparison/src/lib/result-document/result-document.component.ts");
/* harmony import */ var _differences_differences_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./differences/differences.component */ "../../libs/comparison/src/lib/differences/differences.component.ts");
/* harmony import */ var _differences_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./differences.service */ "../../libs/comparison/src/lib/differences.service.ts");

var ComparisonModule_1;


















function initializeApp(comparisonConfigService) {
    const result = () => comparisonConfigService.load();
    return result;
}
// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
function setupLoadingInterceptor(service) {
    return new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_10__["LoadingMaskInterceptorService"](service);
}
let ComparisonModule = ComparisonModule_1 = class ComparisonModule {
    constructor() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__["far"]);
    }
    static forRoot(apiEndpoint) {
        _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_10__["Api"].DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: ComparisonModule_1
        };
    }
};
ComparisonModule = ComparisonModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_comparison_app_component__WEBPACK_IMPORTED_MODULE_4__["ComparisonAppComponent"], _add_file_panel_add_file_panel_component__WEBPACK_IMPORTED_MODULE_12__["AddFilePanelComponent"], _upload_file_panel_upload_file_panel_component__WEBPACK_IMPORTED_MODULE_13__["UploadFilePanelComponent"], _difference_difference_component__WEBPACK_IMPORTED_MODULE_14__["DifferenceComponent"], _difference_highlight_difference_highlight_component__WEBPACK_IMPORTED_MODULE_15__["DifferenceHighlightComponent"], _result_document_result_document_component__WEBPACK_IMPORTED_MODULE_16__["ResultDocumentComponent"], _differences_differences_component__WEBPACK_IMPORTED_MODULE_17__["DifferencesComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_10__["CommonComponentsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");




let ComparisonService = class ComparisonService {
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    loadFiles(path) {
        return this._http.post(this._config.getComparisonApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_FILE_TREE, { 'path': path }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    }
    getFormats() {
        return this._http.get(this._config.getComparisonApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_FORMATS, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    }
    loadFile(credentials) {
        return this._http.post(this._config.getComparisonApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_DOCUMENT_DESCRIPTION, credentials, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    }
    upload(file, url, rewrite) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getComparisonApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].UPLOAD_DOCUMENTS, formData);
    }
    save(file) {
        return this._http.post(this._config.getComparisonApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].SAVE_FILE, file, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    }
    getDownloadUrl(credentials) {
        return this._config.getComparisonApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].DOWNLOAD_DOCUMENTS + '/?guid=' + credentials.guid;
    }
    loadPage(credentials, page) {
        return this._http.post(this._config.getComparisonApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'page': page
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    }
    compare(arr) {
        return this._http.post(this._config.getComparisonApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].COMPARE_FILES, { 'guids': arr }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    }
};
ComparisonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
];
ComparisonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
], ComparisonService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "../../libs/comparison/src/lib/models.ts");
/* harmony import */ var _differences_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differences.service */ "../../libs/comparison/src/lib/differences.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





const $ = jquery__WEBPACK_IMPORTED_MODULE_4__;
let DifferenceHighlightComponent = class DifferenceHighlightComponent {
    constructor(changeService) {
        this.changesService = changeService;
    }
    ngOnInit() {
        this.changesService.activeChange.subscribe(activeID => this.active = this.change.id === activeID);
    }
    close(id, event) {
        if (event && event['value'] === true) {
            this.changesService.setActiveChange(null);
        }
    }
    highlight(id) {
        this.changesService.setActiveChange(id);
    }
};
DifferenceHighlightComponent.ctorParameters = () => [
    { type: _differences_service__WEBPACK_IMPORTED_MODULE_3__["DifferencesService"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "../../libs/comparison/src/lib/models.ts");
/* harmony import */ var _differences_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differences.service */ "../../libs/comparison/src/lib/differences.service.ts");




let DifferenceComponent = class DifferenceComponent {
    constructor(changeService) {
        this.changesService = changeService;
    }
    ngOnInit() {
        this.changesService.activeChange.subscribe(activeID => this.active = this.change.id === activeID);
    }
    getRgbaColor(value) {
        return `rgba(${value.red},${value.green},${value.blue},${value.alpha})`;
    }
};
DifferenceComponent.ctorParameters = () => [
    { type: _differences_service__WEBPACK_IMPORTED_MODULE_3__["DifferencesService"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");



let DifferencesService = class DifferencesService {
    constructor() {
        this._activeChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.activeChange = this._activeChange.asObservable();
    }
    setActiveChange(id) {
        this._activeChange.next(id);
    }
};
DifferencesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DifferencesService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _differences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../differences.service */ "../../libs/comparison/src/lib/differences.service.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");




let DifferencesComponent = class DifferencesComponent {
    constructor(changeService, navigateService) {
        this.changes = [];
        this.changesService = changeService;
        this.navigateService = navigateService;
    }
    ngOnInit() { }
    highlightDifference(id, page, event) {
        event.stopPropagation();
        this.changesService.setActiveChange(id);
        this.navigateService.navigateTo(page + 1);
    }
};
DifferencesComponent.ctorParameters = () => [
    { type: _differences_service__WEBPACK_IMPORTED_MODULE_2__["DifferencesService"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["NavigateService"] }
];
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
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");

class ComparedPageModel extends _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_0__["PageModel"] {
}
class CompareResult {
}
class ChangeInfo {
}
class StyleChange {
}
class Rectangle {
}
class PageInfo {
}


/***/ }),

/***/ "../../libs/comparison/src/lib/result-document/result-document.component.less":
/*!*****************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/result-document/result-document.component.less ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".document {\n  background-color: #e7e7e7;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto !important;\n  transition: all 0.4s;\n  padding: 0px;\n  margin: 0px;\n  position: relative;\n}\n.page {\n  position: relative;\n  display: inline-block;\n  background-color: #ffffff;\n  margin: 20px;\n  box-shadow: 0px 4px 12px -4px rgba(0, 0, 0, 0.38);\n  transition: all 0.3s;\n}\n.wait {\n  position: absolute;\n  top: 55px;\n  left: Calc(30%);\n}\n.panzoom {\n  transform: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform-origin: 50% 50% 0px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.gd-zoomed {\n  margin: 10px 98px;\n}\n.highlights {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px;\n}\n@media (max-width: 1025px) {\n  .document {\n    overflow-x: auto !important;\n  }\n  .panzoom {\n    flex-direction: column;\n  }\n  .page {\n    min-width: unset !important;\n    min-height: unset !important;\n    margin: 5px 0px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb21wYXJpc29uL3NyYy9saWIvcmVzdWx0LWRvY3VtZW50L3Jlc3VsdC1kb2N1bWVudC5jb21wb25lbnQubGVzcyIsImxpYnMvY29tcGFyaXNvbi9zcmMvbGliL3Jlc3VsdC1kb2N1bWVudC9yZXN1bHQtZG9jdW1lbnQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBR0EsaURBQUE7RUFDQSxvQkFBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDREY7QURJQTtFQUNFLGVBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDRkY7QURLQTtFQUNFLGlCQUFBO0FDSEY7QURNQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0pGO0FET0E7RUFDRTtJQUNFLDJCQUFBO0VDTEY7RURRQTtJQUNFLHNCQUFBO0VDTkY7RURTQTtJQUNFLDJCQUFBO0lBQ0EsNEJBQUE7SUFDQSxlQUFBO0VDUEY7QUFDRiIsImZpbGUiOiJsaWJzL2NvbXBhcmlzb24vc3JjL2xpYi9yZXN1bHQtZG9jdW1lbnQvcmVzdWx0LWRvY3VtZW50LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3VtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogMjBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDEycHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA0cHggMTJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ud2FpdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NXB4O1xuICBsZWZ0OiBDYWxjKDUwJSAtIDIwcHgpO1xufVxuXG4ucGFuem9vbSB7XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlIDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmdkLXpvb21lZCB7XG4gIG1hcmdpbjogMTBweCA5OHB4O1xufVxuXG4uaGlnaGxpZ2h0c3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjVweCkge1xuICAuZG9jdW1lbnQge1xuICAgIG92ZXJmbG93LXg6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYW56b29tIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnBhZ2Uge1xuICAgIG1pbi13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNXB4IDBweDtcbiAgfVxufVxuIiwiLmRvY3VtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDIwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjM4KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNHB4IDEycHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEycHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi53YWl0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU1cHg7XG4gIGxlZnQ6IENhbGMoMzAlKTtcbn1cbi5wYW56b29tIHtcbiAgdHJhbnNmb3JtOiBub25lO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCUgMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmdkLXpvb21lZCB7XG4gIG1hcmdpbjogMTBweCA5OHB4O1xufVxuLmhpZ2hsaWdodHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjVweCkge1xuICAuZG9jdW1lbnQge1xuICAgIG92ZXJmbG93LXg6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAucGFuem9vbSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAucGFnZSB7XG4gICAgbWluLXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xuICB9XG59XG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _differences_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../differences.service */ "../../libs/comparison/src/lib/differences.service.ts");






const $ = jquery__WEBPACK_IMPORTED_MODULE_3__;
let ResultDocumentComponent = class ResultDocumentComponent extends _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["DocumentComponent"] {
    constructor(_elementRef, zoomService, changeService) {
        super(_elementRef, zoomService);
        this.changesService = changeService;
    }
    close() {
        this.changesService.setActiveChange(null);
    }
    ngOnInit() {
    }
};
ResultDocumentComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ZoomService"] },
    { type: _differences_service__WEBPACK_IMPORTED_MODULE_4__["DifferencesService"] }
];
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
        _differences_service__WEBPACK_IMPORTED_MODULE_4__["DifferencesService"]])
], ResultDocumentComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");



let UploadFilePanelComponent = class UploadFilePanelComponent {
    constructor(_uploadService, _modalService) {
        this._uploadService = _uploadService;
        this._modalService = _modalService;
        this.active = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    openModal() {
        this.active.emit(this.panel);
        this._modalService.open(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["CommonModals"].BrowseFiles);
    }
    dropped($event) {
        if ($event) {
            this.active.emit(this.panel);
        }
    }
};
UploadFilePanelComponent.ctorParameters = () => [
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["UploadFilesService"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }
];
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

module.exports = ".gd-create-wrap {\n  display: flex;\n  padding: 20px;\n}\n.gd-create-wrap div {\n  display: flex;\n}\n.gd-create-wrap input {\n  width: 204px;\n}\nspan {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n/deep/ .gd-select-format .dropdown-menu {\n  height: 150px;\n  overflow: hidden;\n  overflow-y: auto;\n  top: 89px !important;\n  left: 356px;\n  min-width: 0 !important;\n  width: 90px;\n}\n.gd-create-submit {\n  margin-left: 10px;\n  width: 49px;\n  height: 24px;\n  color: #FFF;\n  background-color: #25C2D4;\n  border: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9lZGl0b3Ivc3JjL2xpYi9jcmVhdGUuZG9jdW1lbnQtbW9kYWwvY3JlYXRlLmRvY3VtZW50LW1vZGFsLmNvbXBvbmVudC5sZXNzIiwibGlicy9lZGl0b3Ivc3JjL2xpYi9jcmVhdGUuZG9jdW1lbnQtbW9kYWwvY3JlYXRlLmRvY3VtZW50LW1vZGFsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUNDRjtBRENBO0VBQ0UsYUFBQTtBQ0NGO0FEQ0E7RUFDRSxZQUFBO0FDQ0Y7QURFQTtFQUNHLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSDtBREVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNBRjtBREdBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUNERiIsImZpbGUiOiJsaWJzL2VkaXRvci9zcmMvbGliL2NyZWF0ZS5kb2N1bWVudC1tb2RhbC9jcmVhdGUuZG9jdW1lbnQtbW9kYWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2QtY3JlYXRlLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmdkLWNyZWF0ZS13cmFwIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZ2QtY3JlYXRlLXdyYXAgaW5wdXQge1xuICB3aWR0aDogMjA0cHg7XG59XG5cbnNwYW4ge1xuICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4vZGVlcC8gLmdkLXNlbGVjdC1mb3JtYXQgLmRyb3Bkb3duLW1lbnUge1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB0b3A6IDg5cHggIWltcG9ydGFudDtcbiAgbGVmdDogMzU2cHg7XG4gIG1pbi13aWR0aDogMCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTBweDtcbn1cblxuLmdkLWNyZWF0ZS1zdWJtaXQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDQ5cHg7XG4gIGhlaWdodDogMjRweDtcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNUMyRDQ7XG4gIGJvcmRlcjogMDtcbn1cbiIsIi5nZC1jcmVhdGUtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uZ2QtY3JlYXRlLXdyYXAgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5nZC1jcmVhdGUtd3JhcCBpbnB1dCB7XG4gIHdpZHRoOiAyMDRweDtcbn1cbnNwYW4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuIC9kZWVwLyAuZ2Qtc2VsZWN0LWZvcm1hdCAuZHJvcGRvd24tbWVudSB7XG4gIGhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHRvcDogODlweCAhaW1wb3J0YW50O1xuICBsZWZ0OiAzNTZweDtcbiAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5MHB4O1xufVxuLmdkLWNyZWF0ZS1zdWJtaXQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDQ5cHg7XG4gIGhlaWdodDogMjRweDtcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNUMyRDQ7XG4gIGJvcmRlcjogMDtcbn1cbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editor.service */ "../../libs/editor/src/lib/editor.service.ts");




let CreateDocumentModalComponent = class CreateDocumentModalComponent {
    constructor(_editorService, _modalService, _excMessageService) {
        this._editorService = _editorService;
        this._modalService = _modalService;
        this._excMessageService = _excMessageService;
        this.savingFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.FILE_NAME_REGEX = /^.*[\\\/]/;
    }
    get format() {
        return this._format;
    }
    ngOnInit() {
        this.loadFormats();
    }
    loadFormats() {
        this._editorService.getFormats().subscribe((formats) => {
            this.formats = this.formatOptions(formats);
            this._format = "Docx";
        });
    }
    selectFormat($event) {
        this._format = $event.value;
    }
    createFormatOption(val) {
        return { value: val, name: val };
    }
    formatOptions(formats) {
        const allTypes = new Array();
        for (let i = 0; i < formats.length; i++) {
            allTypes.push(this.createFormatOption(formats[i]));
        }
        return allTypes;
    }
    save(name) {
        let fileName = "";
        if (name && name !== "") {
            fileName = name + "." + this._format;
        }
        else if (!this.file) {
            this._modalService.open(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["CommonModals"].ErrorMessage);
            this._excMessageService.changeMessage("File name is empty");
        }
        this._modalService.close(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["CommonModals"].CreateDocument);
        const guid = fileName !== "" ? fileName : this.file.guid;
        const password = this.file ? this.file.password : '';
        this.savingFile.emit(new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["FileCredentials"](guid, password));
    }
    refresh($event) {
        if (!$event) {
            this.closing.emit(true);
        }
    }
};
CreateDocumentModalComponent.ctorParameters = () => [
    { type: _editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ModalService"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["ExceptionMessageService"] }
];
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



/***/ }),

/***/ "../../libs/editor/src/lib/editor-app.component.less":
/*!****************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/editor/src/lib/editor-app.component.less ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');\n:host * {\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n}\n.current-page-number {\n  margin: 0px 15px;\n  font-size: 14px;\n  color: #959da5;\n}\n* {\n  -webkit-user-select: none;\n  /* Chrome all / Safari all */\n  -moz-user-select: none;\n  /* Firefox all */\n  -ms-user-select: none;\n  /* IE 10+ */\n  user-select: text;\n}\n.wrapper {\n  align-items: stretch;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.doc-panel {\n  display: flex;\n  height: inherit;\n}\n.gd-document {\n  width: 100%;\n  height: calc(100% - 90px);\n}\n.top-panel {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.toolbar-panel {\n  width: 100%;\n}\n/deep/ .gd-wrapper {\n  padding: 96px;\n  -webkit-user-select: text;\n  /* Chrome all / Safari all */\n  -moz-user-select: text;\n  /* Firefox all */\n  -ms-user-select: text;\n  /* IE 10+ */\n  user-select: text;\n  outline: none;\n}\n/deep/ .dropdown-menu {\n  min-width: unset !important;\n}\n.format-select {\n  margin: 0px 15px;\n}\n.palette {\n  position: absolute;\n  top: 90px;\n  z-index: 100;\n}\n.background-color-picker {\n  left: 700px;\n}\n.color-picker {\n  left: 750px;\n}\n.bg-color-pic {\n  border-radius: 100%;\n  border: 1px solid #CCC;\n  position: absolute;\n  height: 8px;\n  width: 8px;\n  right: 6px;\n  bottom: 6px;\n}\n/deep/ .button.inactive {\n  color: #CCC !important;\n}\n/deep/ .gd-editor-buttons .button .tooltip {\n  margin-top: 45px;\n  margin-left: -36px;\n}\n/deep/ .gd-edit.active {\n  background-color: #7E8991;\n  border-radius: 5px;\n}\n/deep/ .gd-edit.active i {\n  color: #FFFFFF;\n}\n/deep/ .page {\n  width: 800px;\n}\n/deep/ .save-as-button-icon {\n  font-size: 11px;\n  left: 22px !important;\n  top: 13px !important;\n}\n.save-button {\n  position: absolute;\n  top: -5px;\n  left: 21px;\n}\n@media (max-width: 480px) {\n   /deep/ .panzoom {\n    zoom: 0.4;\n    margin-top: 160px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvZWRpdG9yL3NyYy9saWIvZWRpdG9yLWFwcC5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9lZGl0b3Ivc3JjL2xpYi9lZGl0b3ItYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQ0NrQjtBQUNsQjtFQUNFLHNEQUFBO0FEQUY7QUNHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURERjtBQ0dBO0VBQ0UseUJBQUE7RUREQSw0QkFBNEI7RUNFNUIsc0JBQUE7RURBQSxnQkFBZ0I7RUNDaEIscUJBQUE7RURDQSxXQUFXO0VDQVgsaUJBQUE7QURFRjtBQ0FBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FERUY7QUNDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FEQ0Y7QUNFQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBREFGO0FDR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FEREY7QUNJQTtFQUNFLFdBQUE7QURGRjtBQ0tBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VESEEsNEJBQTRCO0VDSTVCLHNCQUFBO0VERkEsZ0JBQWdCO0VDR2hCLHFCQUFBO0VEREEsV0FBVztFQ0VYLGlCQUFBO0VBQ0EsYUFBQTtBREFGO0FDR0E7RUFDRSwyQkFBQTtBRERGO0FDSUE7RUFDRSxnQkFBQTtBREZGO0FDS0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FESEY7QUNNQTtFQUNFLFdBQUE7QURKRjtBQ09BO0VBQ0UsV0FBQTtBRExGO0FDUUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FETkY7QUNTQTtFQUNFLHNCQUFBO0FEUEY7QUNVQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QURSRjtBQ1dBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBRFRGO0FDWUE7RUFDRSxjQUFBO0FEVkY7QUNhQTtFQUNFLFlBQUE7QURYRjtBQ2NBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QURaRjtBQ2VBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBRGJGO0FDZ0JBO0dBQ0U7SUFDRSxTQUFBO0lBQ0EsaUJBQUE7RURkRjtBQUNGIiwiZmlsZSI6ImxpYnMvZWRpdG9yL3NyYy9saWIvZWRpdG9yLWFwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xuOmhvc3QgKiB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cbi5jdXJyZW50LXBhZ2UtbnVtYmVyIHtcbiAgbWFyZ2luOiAwcHggMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzk1OWRhNTtcbn1cbioge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBDaHJvbWUgYWxsIC8gU2FmYXJpIGFsbCAqL1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBGaXJlZm94IGFsbCAqL1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIElFIDEwKyAqL1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbn1cbi53cmFwcGVyIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmRvYy1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cbi5nZC1kb2N1bWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDkwcHgpO1xufVxuLnRvcC1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvb2xiYXItcGFuZWwge1xuICB3aWR0aDogMTAwJTtcbn1cbiAvZGVlcC8gLmdkLXdyYXBwZXIge1xuICBwYWRkaW5nOiA5NnB4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAvKiBDaHJvbWUgYWxsIC8gU2FmYXJpIGFsbCAqL1xuICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAvKiBGaXJlZm94IGFsbCAqL1xuICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC8qIElFIDEwKyAqL1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbiAvZGVlcC8gLmRyb3Bkb3duLW1lbnUge1xuICBtaW4td2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG4uZm9ybWF0LXNlbGVjdCB7XG4gIG1hcmdpbjogMHB4IDE1cHg7XG59XG4ucGFsZXR0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5MHB4O1xuICB6LWluZGV4OiAxMDA7XG59XG4uYmFja2dyb3VuZC1jb2xvci1waWNrZXIge1xuICBsZWZ0OiA3MDBweDtcbn1cbi5jb2xvci1waWNrZXIge1xuICBsZWZ0OiA3NTBweDtcbn1cbi5iZy1jb2xvci1waWMge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogOHB4O1xuICByaWdodDogNnB4O1xuICBib3R0b206IDZweDtcbn1cbiAvZGVlcC8gLmJ1dHRvbi5pbmFjdGl2ZSB7XG4gIGNvbG9yOiAjQ0NDICFpbXBvcnRhbnQ7XG59XG4gL2RlZXAvIC5nZC1lZGl0b3ItYnV0dG9ucyAuYnV0dG9uIC50b29sdGlwIHtcbiAgbWFyZ2luLXRvcDogNDVweDtcbiAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xufVxuIC9kZWVwLyAuZ2QtZWRpdC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0U4OTkxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4gL2RlZXAvIC5nZC1lZGl0LmFjdGl2ZSBpIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4gL2RlZXAvIC5wYWdlIHtcbiAgd2lkdGg6IDgwMHB4O1xufVxuIC9kZWVwLyAuc2F2ZS1hcy1idXR0b24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGVmdDogMjJweCAhaW1wb3J0YW50O1xuICB0b3A6IDEzcHggIWltcG9ydGFudDtcbn1cbi5zYXZlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICBsZWZ0OiAyMXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAvZGVlcC8gLnBhbnpvb20ge1xuICAgIHpvb206IDAuNDtcbiAgICBtYXJnaW4tdG9wOiAxNjBweDtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL2NvbW1vbi1jb21wb25lbnRzL3NyYy9zdHlsZXMvdmFyaWFibGVzXCI7XG5AaW1wb3J0IChjc3MpIHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcbjpob3N0ICoge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5jdXJyZW50LXBhZ2UtbnVtYmVyIHtcbiAgbWFyZ2luOiAwcHggMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzk1OWRhNTtcbn1cbip7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAvKiBDaHJvbWUgYWxsIC8gU2FmYXJpIGFsbCAqL1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogRmlyZWZveCBhbGwgKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgIC8qIElFIDEwKyAqL1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbn1cbi53cmFwcGVyIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uZG9jLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uZ2QtZG9jdW1lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiB+XCJjYWxjKDEwMCUgLSBAe2VkaXRvci1uYXYtaGVpZ2h0fSlcIjtcbn1cblxuLnRvcC1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9vbGJhci1wYW5lbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vZGVlcC8gLmdkLXdyYXBwZXIge1xuICBwYWRkaW5nOiA5NnB4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0OyAgLyogQ2hyb21lIGFsbCAvIFNhZmFyaSBhbGwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDsgICAgIC8qIEZpcmVmb3ggYWxsICovXG4gIC1tcy11c2VyLXNlbGVjdDogdGV4dDsgICAgICAvKiBJRSAxMCsgKi9cbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi9kZWVwLyAuZHJvcGRvd24tbWVudSB7XG4gIG1pbi13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLmZvcm1hdC1zZWxlY3Qge1xuICBtYXJnaW46IDBweCAxNXB4O1xufVxuXG4ucGFsZXR0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5MHB4O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5iYWNrZ3JvdW5kLWNvbG9yLXBpY2tlciB7XG4gIGxlZnQ6IDcwMHB4O1xufVxuXG4uY29sb3ItcGlja2VyIHtcbiAgbGVmdDogNzUwcHg7XG59XG5cbi5iZy1jb2xvci1waWMge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogOHB4O1xuICByaWdodDogNnB4O1xuICBib3R0b206IDZweDtcbn1cblxuL2RlZXAvIC5idXR0b24uaW5hY3RpdmUge1xuICBjb2xvcjogI0NDQyAhaW1wb3J0YW50O1xufVxuXG4vZGVlcC8gLmdkLWVkaXRvci1idXR0b25zIC5idXR0b24gLnRvb2x0aXAge1xuICBtYXJnaW4tdG9wOiA0NXB4O1xuICBtYXJnaW4tbGVmdDogLTM2cHg7XG59XG5cbi9kZWVwLyAuZ2QtZWRpdC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0U4OTkxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi9kZWVwLyAuZ2QtZWRpdC5hY3RpdmUgaSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4vZGVlcC8gLnBhZ2Uge1xuICB3aWR0aDogODAwcHg7XG59XG5cbi9kZWVwLyAuc2F2ZS1hcy1idXR0b24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGVmdDogMjJweCAhaW1wb3J0YW50O1xuICB0b3A6IDEzcHggIWltcG9ydGFudDtcbn1cblxuLnNhdmUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01cHg7XG4gIGxlZnQ6IDIxcHg7XG59XG5cbkBtZWRpYSBAcGhvbmUtZG93biB7XG4gIC9kZWVwLyAgLnBhbnpvb217XG4gICAgem9vbTogMC40O1xuICAgIG1hcmdpbi10b3A6MTYwcHg7XG4gIH1cbn1cbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.service */ "../../libs/editor/src/lib/editor.service.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _editor_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor-config.service */ "../../libs/editor/src/lib/editor-config.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);






const $ = jquery__WEBPACK_IMPORTED_MODULE_5__;
let EditorAppComponent = class EditorAppComponent {
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
        this.browseFilesModal = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].BrowseFiles;
        this.formatting = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Formatting"].DEFAULT;
        this.fontSizeOptions = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["FormattingService"].getFontSizeOptions();
        this.fontOptions = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["FormattingService"].getFontOptions();
        this.bgColorPickerShow = false;
        this.colorPickerShow = false;
        this.active = false;
        this.isIE = false;
        this.isIE = /*@cc_on!@*/  false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
        configService.updatedConfig.subscribe((editorConfig) => {
            this.editorConfig = editorConfig;
        });
        uploadFilesService.uploadsChange.subscribe((uploads) => {
            if (uploads) {
                let i;
                for (i = 0; i < uploads.length; i++) {
                    this._editorService.upload(uploads.item(i), '', this.editorConfig.rewrite).subscribe(() => {
                        this.selectDir('');
                    });
                }
            }
        });
        passwordService.passChange.subscribe((pass) => {
            this.selectFile(this.credentials.guid, pass, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].PasswordRequired);
        });
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((w) => {
            this.isDesktop = _windowService.isDesktop();
        });
        this._backFormattingService.formatBoldChange.subscribe((bold) => {
            this.formatting.bold = bold;
        });
        this._backFormattingService.formatItalicChange.subscribe((italic) => {
            this.formatting.italic = italic;
        });
        this._backFormattingService.formatUnderlineChange.subscribe((underline) => {
            this.formatting.underline = underline;
        });
        this._backFormattingService.formatColorChange.subscribe((color) => {
            this.formatting.color = color;
        });
        this._backFormattingService.formatBgColorChange.subscribe((bgcolor) => {
            this.formatting.bgColor = bgcolor;
        });
        this._backFormattingService.formatFontSizeChange.subscribe((fontSize) => {
            this.formatting.fontSize = fontSize;
        });
        this._backFormattingService.formatFontChange.subscribe((font) => {
            this.formatting.font = font;
        });
        this._backFormattingService.formatStrikeoutChange.subscribe((strikeout) => {
            this.formatting.strikeout = strikeout;
        });
        this._backFormattingService.formatAlignChange.subscribe((align) => {
            this.formatting.align = align;
        });
        this._backFormattingService.formatListChange.subscribe((list) => {
            this.formatting.list = list;
        });
        this._formattingService.formatBoldChange.subscribe((bold) => {
            this.formatting.bold = bold;
        });
        this._formattingService.formatItalicChange.subscribe((italic) => {
            this.formatting.italic = italic;
        });
        this._formattingService.formatUnderlineChange.subscribe((underline) => {
            this.formatting.underline = underline;
        });
        this._formattingService.formatColorChange.subscribe((color) => {
            this.formatting.color = color;
        });
        this._formattingService.formatBgColorChange.subscribe((bgcolor) => {
            this.formatting.bgColor = bgcolor;
        });
        this._formattingService.formatFontSizeChange.subscribe((fontSize) => {
            this.formatting.fontSize = fontSize;
        });
        this._formattingService.formatFontChange.subscribe((font) => {
            this.formatting.font = font;
        });
        this._formattingService.formatStrikeoutChange.subscribe((strikeout) => {
            this.formatting.strikeout = strikeout;
        });
        this._formattingService.formatAlignChange.subscribe((align) => {
            this.formatting.align = align;
        });
        this._formattingService.formatListChange.subscribe((list) => {
            this.formatting.list = list;
        });
        this._htmlService.htmlContent.subscribe((text) => {
            if (this.file && this.file.pages) {
                this.textBackup = text;
            }
        });
    }
    ngAfterViewInit() {
        this._loadingMaskService
            .onLoadingChanged
            .subscribe((loading) => this.isLoading = loading);
    }
    get rewriteConfig() {
        return this.editorConfig ? this.editorConfig.rewrite : true;
    }
    get downloadConfig() {
        return this.editorConfig ? this.editorConfig.download : true;
    }
    get uploadConfig() {
        return this.editorConfig ? this.editorConfig.upload : true;
    }
    get printConfig() {
        return this.editorConfig ? this.editorConfig.print : true;
    }
    get browseConfig() {
        return this.editorConfig ? this.editorConfig.browse : true;
    }
    get enableRightClickConfig() {
        return this.editorConfig ? this.editorConfig.enableRightClick : true;
    }
    get pageSelectorConfig() {
        return this.editorConfig ? this.editorConfig.pageSelector : true;
    }
    get createNewFileConfig() {
        return this.editorConfig ? this.editorConfig.createNewFile : true;
    }
    openModal(id) {
        if (this.file) {
            this.file.pages[0].editable = false;
        }
        this._modalService.open(id);
    }
    openSave() {
        if (!this.formatDisabled) {
            this.openModal(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].CreateDocument);
        }
    }
    selectDir($event) {
        this._editorService.loadFiles($event).subscribe((files) => this.files = files || []);
    }
    ptToPx(pt) {
        //pt * 96 / 72 = px.
        return pt * 96 / 72;
    }
    onRightClick($event) {
        return this.enableRightClickConfig;
    }
    createFile() {
        this.file = new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["FileDescription"]();
        const page = new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["PageModel"];
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
    }
    selectFile($event, password, modalId) {
        this.credentials = new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["FileCredentials"]($event, password);
        this._editorService.loadFile(this.credentials).subscribe((file) => {
            this.loadFile(file);
            const isIE = /*@cc_on!@*/  false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
            if (isIE) {
                const observer = new MutationObserver(function (mutations) {
                    if ($(".documentMainContent").length > 0) {
                        $(".documentMainContent").attr("contentEditable", "true");
                        observer.disconnect();
                    }
                });
                observer.observe(document, { attributes: false, childList: true, characterData: false, subtree: true });
            }
        });
        this.clearData();
        this._modalService.close(modalId);
    }
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
    clearData() {
        if (!this.file || !this.file.pages) {
            return;
        }
        for (const page of this.file.pages) {
            page.data = null;
        }
    }
    upload($event) {
        this._editorService.upload(null, $event, this.rewriteConfig).subscribe(() => {
            this.selectDir('');
        });
    }
    selectFontSize($event) {
        if (this.formatDisabled)
            return;
        $(".gd-wrapper").off("keyup");
        if (this.isIE) {
            this._selectionService.restoreSelection();
            this._selectionService.captureSelection();
        }
        this._formattingService.changeFormatFontSize($event.value);
        $(".gd-wrapper").on("keyup", () => {
            const fontElements = document.getElementsByTagName("font");
            for (let i = 0, len = fontElements.length; i < len; ++i) {
                if (fontElements[i].getAttribute('size') === "7") {
                    fontElements[i].removeAttribute("size");
                    fontElements[i].style.fontSize = $event + "px";
                }
            }
        });
    }
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
    toggleUndo() {
        if (this.formatDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        this._formattingService.Undo();
    }
    toggleRedo() {
        if (this.formatDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        this._formattingService.Redo();
    }
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
    downloadFile() {
        if (this.downloadDisabled)
            return;
        window.location.assign(this._editorService.getDownloadUrl(this.credentials));
    }
    save() {
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
    }
    saveFile(credentials) {
        if (!this.file || !this.file.pages)
            return;
        const saveFile = new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["SaveFile"](credentials.guid, credentials.password, this.textBackup);
        this._editorService.save(saveFile).subscribe((loadFile) => {
            this.loadFile(loadFile);
            this.credentials = new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["FileCredentials"](loadFile.guid, credentials.password);
            this._modalService.open(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].OperationSuccess);
        });
    }
    printFile() {
        if (this.formatDisabled)
            return;
        if (this.file.pages) {
            const page = new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["PageModel"];
            page.width = 595;
            page.height = 842;
            // using of the replace is required to fix issue with padding for intire print content
            page.data = this.textBackup.replace('</style>', 'body { padding: 96px; } </style>');
            const printHtml = [page];
            this._renderPrintService.changePages(printHtml);
        }
    }
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
};
EditorAppComponent.ctorParameters = () => [
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
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _editor_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor-config */ "../../libs/editor/src/lib/editor-config.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");






let EditorConfigService = class EditorConfigService {
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._editorConfig = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](new _editor_config__WEBPACK_IMPORTED_MODULE_2__["EditorConfig"]());
        this._updatedConfig = this._editorConfig.asObservable();
    }
    get updatedConfig() {
        return this._updatedConfig;
    }
    load() {
        return new Promise((resolve, reject) => {
            const configEndpoint = this._config.getConfigEndpoint(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].EDITOR_APP);
            this._http.get(configEndpoint, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson).toPromise().then((response) => {
                const editorConfig = response;
                this._editorConfig.next(editorConfig);
                resolve();
            }).catch((response) => {
                reject(`Could not load editor config: ${JSON.stringify(response)}`);
            });
        });
    }
};
EditorConfigService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
];
EditorConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
], EditorConfigService);



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
class EditorConfig {
}


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _editor_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor-app.component */ "../../libs/editor/src/lib/editor-app.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "../../node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "../../node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _create_document_modal_create_document_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create.document-modal/create.document-modal.component */ "../../libs/editor/src/lib/create.document-modal/create.document-modal.component.ts");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor.service */ "../../libs/editor/src/lib/editor.service.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _editor_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./editor-config.service */ "../../libs/editor/src/lib/editor-config.service.ts");

var EditorModule_1;












function initializeApp(editorConfigService) {
    const result = () => editorConfigService.load();
    return result;
}
// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
function setupLoadingInterceptor(service) {
    return new _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_11__["LoadingMaskInterceptorService"](service);
}
let EditorModule = EditorModule_1 = class EditorModule {
    constructor() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__["far"]);
    }
    static forRoot(apiEndpoint) {
        _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_11__["Api"].DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: EditorModule_1
        };
    }
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");




let EditorService = class EditorService {
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    loadFiles(path) {
        return this._http.post(this._config.getEditorApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_FILE_TREE, { 'path': path }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    }
    getFormats() {
        return this._http.get(this._config.getEditorApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_FORMATS, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    }
    loadFile(credentials) {
        return this._http.post(this._config.getEditorApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_DOCUMENT_DESCRIPTION, credentials, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    }
    upload(file, url, rewrite) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getEditorApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].UPLOAD_DOCUMENTS, formData);
    }
    save(file) {
        return this._http.post(this._config.getEditorApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].SAVE_FILE, file, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    }
    getDownloadUrl(credentials) {
        return this._config.getEditorApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
    }
};
EditorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
];
EditorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
], EditorService);



/***/ }),

/***/ "../../libs/signature/src/index.ts":
/*!**********************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/index.ts ***!
  \**********************************************************************************/
/*! exports provided: initializeApp, SignatureModule, SignatureAppComponent, SignatureService, SignatureConfigService, SignatureListPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_signature_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/signature.module */ "../../libs/signature/src/lib/signature.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return _lib_signature_module__WEBPACK_IMPORTED_MODULE_0__["initializeApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignatureModule", function() { return _lib_signature_module__WEBPACK_IMPORTED_MODULE_0__["SignatureModule"]; });

/* harmony import */ var _lib_signature_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/signature-app.component */ "../../libs/signature/src/lib/signature-app.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignatureAppComponent", function() { return _lib_signature_app_component__WEBPACK_IMPORTED_MODULE_1__["SignatureAppComponent"]; });

/* harmony import */ var _lib_signature_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/signature.service */ "../../libs/signature/src/lib/signature.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignatureService", function() { return _lib_signature_service__WEBPACK_IMPORTED_MODULE_2__["SignatureService"]; });

/* harmony import */ var _lib_signature_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/signature-config.service */ "../../libs/signature/src/lib/signature-config.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignatureConfigService", function() { return _lib_signature_config_service__WEBPACK_IMPORTED_MODULE_3__["SignatureConfigService"]; });

/* harmony import */ var _lib_signature_list_panel_signature_list_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/signature-list-panel/signature-list-panel.component */ "../../libs/signature/src/lib/signature-list-panel/signature-list-panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignatureListPanelComponent", function() { return _lib_signature_list_panel_signature_list_panel_component__WEBPACK_IMPORTED_MODULE_4__["SignatureListPanelComponent"]; });








/***/ }),

/***/ "../../libs/signature/src/lib/signature-app.component.less":
/*!**********************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature-app.component.less ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');\n:host * {\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n}\n.current-page-number {\n  margin: 0px 15px;\n  font-size: 14px;\n  color: #959da5;\n}\n.wrapper {\n  align-items: stretch;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.doc-panel {\n  display: flex;\n  height: inherit;\n}\n.gd-document {\n  width: 100%;\n  height: 100%;\n}\n.top-panel {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.toolbar-panel {\n  background-color: #3e4e5a;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc2lnbmF0dXJlL3NyYy9saWIvc2lnbmF0dXJlLWFwcC5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9zaWduYXR1cmUvc3JjL2xpYi9zaWduYXR1cmUtYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQ0FrQjtBQUVsQjtFQUNFLHNEQUFBO0FEQUY7QUNHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURERjtBQ0lBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FERkY7QUNLQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FESEY7QUNNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FESkY7QUNPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QURMRjtBQ1FBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FETkYiLCJmaWxlIjoibGlicy9zaWduYXR1cmUvc3JjL2xpYi9zaWduYXR1cmUtYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwJyk7XG46aG9zdCAqIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuLmN1cnJlbnQtcGFnZS1udW1iZXIge1xuICBtYXJnaW46IDBweCAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOTU5ZGE1O1xufVxuLndyYXBwZXIge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4uZG9jLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuLmdkLWRvY3VtZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi50b3AtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi50b29sYmFyLXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlNGU1YTtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCJAaW1wb3J0IChjc3MpIHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcblxuOmhvc3QgKiB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLmN1cnJlbnQtcGFnZS1udW1iZXIge1xuICBtYXJnaW46IDBweCAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOTU5ZGE1O1xufVxuXG4ud3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmRvYy1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cblxuLmdkLWRvY3VtZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRvcC1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9vbGJhci1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTRlNWE7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _signature_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signature.service */ "../../libs/signature/src/lib/signature.service.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _signature_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signature-config.service */ "../../libs/signature/src/lib/signature-config.service.ts");






let SignatureAppComponent = class SignatureAppComponent {
    constructor(_signatureService, _modalService, configService, uploadFilesService, _navigateService, _zoomService, pagePreloadService, _renderPrintService, passwordService, _windowService) {
        this._signatureService = _signatureService;
        this._modalService = _modalService;
        this._navigateService = _navigateService;
        this._zoomService = _zoomService;
        this._renderPrintService = _renderPrintService;
        this._windowService = _windowService;
        this.title = 'signature';
        this.files = [];
        this.countPages = 0;
        this.formatDisabled = !this.file;
        this.browseFilesModal = _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].BrowseFiles;
        this.leftBarOpen = false;
        configService.updatedConfig.subscribe((signatureConfig) => {
            this.signatureConfig = signatureConfig;
        });
        uploadFilesService.uploadsChange.subscribe((uploads) => {
            if (uploads) {
                let i;
                for (i = 0; i < uploads.length; i++) {
                    this._signatureService.upload(uploads.item(i), '', this.signatureConfig.rewrite).subscribe(() => {
                        this.selectDir('');
                    });
                }
            }
        });
        pagePreloadService.checkPreload.subscribe((page) => {
            if (this.signatureConfig.preloadPageCount !== 0) {
                for (let i = page; i < page + 2; i++) {
                    if (i > 0 && i <= this.countPages && !this.file.pages[i - 1].data) {
                        this.preloadPages(i, i);
                    }
                }
            }
        });
        passwordService.passChange.subscribe((pass) => {
            this.selectFile(this.credentials.guid, pass, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].PasswordRequired);
        });
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((w) => {
            this.isDesktop = _windowService.isDesktop();
        });
    }
    get rewriteConfig() {
        return this.signatureConfig ? this.signatureConfig.rewrite : true;
    }
    get zoomConfig() {
        return false;
    }
    get pageSelectorConfig() {
        return this.signatureConfig ? this.signatureConfig.pageSelector : true;
    }
    get preloadPageCountConfig() {
        return this.signatureConfig ? this.signatureConfig.preloadPageCount : 0;
    }
    get downloadConfig() {
        return this.signatureConfig ? this.signatureConfig.download : true;
    }
    get uploadConfig() {
        return this.signatureConfig ? this.signatureConfig.upload : true;
    }
    get printConfig() {
        return this.signatureConfig ? this.signatureConfig.print : true;
    }
    get browseConfig() {
        return this.signatureConfig ? this.signatureConfig.browse : true;
    }
    get htmlModeConfig() {
        return false;
    }
    get enableRightClickConfig() {
        return this.signatureConfig ? this.signatureConfig.enableRightClick : true;
    }
    get textSignatureConfig() {
        return this.signatureConfig ? this.signatureConfig.textSignature : true;
    }
    get imageSignatureConfig() {
        return this.signatureConfig ? this.signatureConfig.imageSignature : true;
    }
    get digitalSignatureConfig() {
        return this.signatureConfig ? this.signatureConfig.digitalSignature : true;
    }
    get qrCodeSignatureConfig() {
        return this.signatureConfig ? this.signatureConfig.qrCodeSignature : true;
    }
    get barCodeSignatureConfig() {
        return this.signatureConfig ? this.signatureConfig.barCodeSignature : true;
    }
    get stampSignatureConfig() {
        return this.signatureConfig ? this.signatureConfig.stampSignature : true;
    }
    get handSignatureConfig() {
        return this.signatureConfig ? this.signatureConfig.handSignature : true;
    }
    get currentPage() {
        return this._navigateService.currentPage;
    }
    nextPage() {
        if (this.formatDisabled)
            return;
        this._navigateService.nextPage();
    }
    prevPage() {
        if (this.formatDisabled)
            return;
        this._navigateService.prevPage();
    }
    toLastPage() {
        if (this.formatDisabled)
            return;
        this._navigateService.toLastPage();
    }
    toFirstPage() {
        if (this.formatDisabled)
            return;
        this._navigateService.toFirstPage();
    }
    navigateToPage(page) {
        if (this.formatDisabled)
            return;
        this._navigateService.navigateTo(page);
    }
    openModal(id) {
        this._modalService.open(id);
    }
    closeModal(id) {
        this._modalService.close(id);
    }
    selectDir($event) {
        this._signatureService.loadFiles($event).subscribe((files) => this.files = files || []);
    }
    selectFile($event, password, modalId) {
        this.credentials = { guid: $event, password: password };
        this._signatureService.loadFile(this.credentials).subscribe((file) => {
            this.file = file;
            this.formatDisabled = !this.file;
            if (file) {
                const preloadPageCount = this.signatureConfig.preloadPageCount;
                const countPages = file.pages ? file.pages.length : 0;
                if (preloadPageCount > 0) {
                    this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                }
                this._navigateService.countPages = countPages;
                this._navigateService.currentPage = 1;
                this.countPages = countPages;
            }
        });
        if (modalId) {
            this._modalService.close(modalId);
        }
        this.clearData();
    }
    preloadPages(start, end) {
        for (let i = start; i <= end; i++) {
            this._signatureService.loadPage(this.credentials, i).subscribe((page) => {
                this.file.pages[i - 1] = page;
            });
        }
    }
    upload($event) {
        this._signatureService.upload(null, $event, this.rewriteConfig).subscribe(() => {
            this.selectDir('');
        });
    }
    downloadFile() {
        if (this.formatDisabled)
            return;
        window.location.assign(this._signatureService.getDownloadUrl(this.credentials));
    }
    printFile() {
        if (this.formatDisabled)
            return;
        if (this.signatureConfig.preloadPageCount !== 0) {
            if (_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["FileUtil"].find(this.file.guid, false).format === "Portable Document Format") {
                this._signatureService.loadPrintPdf(this.credentials).subscribe(blob => {
                    const file = new Blob([blob], { type: 'application/pdf' });
                    this._renderPrintService.changeBlob(file);
                });
            }
            else {
                this._signatureService.loadPrint(this.credentials).subscribe((data) => {
                    this.file.pages = data.pages;
                    this._renderPrintService.changePages(this.file.pages);
                });
            }
        }
        else {
            this._renderPrintService.changePages(this.file.pages);
        }
    }
    clearData() {
        if (!this.file || !this.file.pages) {
            return;
        }
        for (const page of this.file.pages) {
            page.data = null;
        }
    }
    onRightClick($event) {
        return this.enableRightClickConfig;
    }
    ngAfterViewInit() {
    }
    isLeftBarOpen() {
        return this.isDesktop ? true : this.leftBarOpen;
    }
};
SignatureAppComponent.ctorParameters = () => [
    { type: _signature_service__WEBPACK_IMPORTED_MODULE_2__["SignatureService"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ModalService"] },
    { type: _signature_config_service__WEBPACK_IMPORTED_MODULE_4__["SignatureConfigService"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["UploadFilesService"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["NavigateService"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ZoomService"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["PagePreloadService"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["RenderPrintService"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["PasswordService"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["WindowService"] }
];
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
        _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["WindowService"]])
], SignatureAppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _signature_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signature-config */ "../../libs/signature/src/lib/signature-config.ts");






let SignatureConfigService = class SignatureConfigService {
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._signatureConfig = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new _signature_config__WEBPACK_IMPORTED_MODULE_5__["SignatureConfig"]());
        this._updatedConfig = this._signatureConfig.asObservable();
    }
    get updatedConfig() {
        return this._updatedConfig;
    }
    load() {
        return new Promise((resolve, reject) => {
            const configEndpoint = this._config.getConfigEndpoint(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_4__["Api"].SIGNATURE_APP);
            this._http.get(configEndpoint, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_4__["Api"].httpOptionsJson).toPromise().then((response) => {
                const signatureConfig = response;
                this._signatureConfig.next(signatureConfig);
                resolve();
            }).catch((response) => {
                reject(`Could not load signature config: ${JSON.stringify(response)}`);
            });
        });
    }
};
SignatureConfigService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
SignatureConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
], SignatureConfigService);



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
class SignatureConfig {
}


/***/ }),

/***/ "../../libs/signature/src/lib/signature-list-panel/signature-list-panel.component.less":
/*!**************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature-list-panel/signature-list-panel.component.less ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-signature-context-panel {\n  display: none;\n  background-color: #F3F3F3;\n  left: 53px;\n  width: 300px;\n  height: 100%;\n  position: absolute;\n}\n.gd-signature-context-panel-title {\n  font-size: 12px;\n  line-height: 18px;\n  margin: 16px 0 14px 12px;\n}\n.gd-signature-context-pane-wrapper {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: stretch;\n  height: 95vh;\n}\n.gd-signature-list-title {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n}\n.gd-signature-list-title > i {\n  padding: 15px 25px 0px 15px;\n  color: #676767;\n  cursor: pointer;\n  width: 12px;\n  height: 20px;\n  font-size: 15px;\n}\n.gd-signature-context-upload-title,\n.gd-signature-context-panel-title {\n  color: #AAAAAA;\n  font-size: 12px;\n  font-family: Helvetica;\n  font-weight: bold;\n  margin: 16px 12px 12px 12px;\n}\n.gd-signature-list-wrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: auto;\n}\n.gd-signature-list-scroll {\n  overflow-x: hidden;\n  overflow-y: auto !important;\n}\n.gd-signature-list {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0px 11px 12px 12px;\n}\n.gd-signature-empty-list {\n  flex-direction: column;\n  display: flex;\n  text-align: center;\n  color: #0000001a;\n}\n.gd-signature-empty-list i {\n  font-size: 60px;\n  padding: 87px 97px 0px;\n}\n.gd-empty-list-text {\n  padding: 18px 38px 0px;\n  font-size: 12px;\n}\n.gd-signature-thumbnail-text,\n.gd-signature-thumbnail-image,\n.gd-signature-thumbnail-hand {\n  min-width: 74px;\n  height: 41px;\n  margin: 8px 15px 8px 11px;\n}\n.gd-signature-thumbnail-image {\n  min-width: 41px;\n}\n@media (max-width: 480px) {\n  .gd-signature-context-panel {\n    left: 60px;\n    right: 0px;\n    width: auto;\n  }\n  .gd-signature-context-panel-title {\n    font-size: 12px;\n    line-height: 18px;\n    margin: 16px 0 14px 12px;\n  }\n  .gd-signature-context-panel-title,\n  .gd-signature-context-upload-title {\n    width: unset;\n  }\n  .gd-signature-thumbnail-text,\n  .gd-signature-thumbnail-image,\n  .gd-signature-thumbnail-hand {\n    margin: 0;\n  }\n  .gd-signature-thumbnail-image {\n    width: 44px;\n    height: 44px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9zaWduYXR1cmUvc3JjL2xpYi9zaWduYXR1cmUtbGlzdC1wYW5lbC9zaWduYXR1cmUtbGlzdC1wYW5lbC5jb21wb25lbnQubGVzcyIsImxpYnMvc2lnbmF0dXJlL3NyYy9saWIvc2lnbmF0dXJlLWxpc3QtcGFuZWwvc2lnbmF0dXJlLWxpc3QtcGFuZWwuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0RGO0FESUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQ0ZGO0FES0E7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDSEY7QURNQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDSkY7QURPQTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNMRjtBRFFBOztFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDTEY7QURRQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0FDTkY7QURTQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7QUNQRjtBRFVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FDUkY7QURXQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNURjtBRFlBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FDVkY7QURhQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBQ1hGO0FEY0E7OztFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNWRjtBRGFBO0VBQ0UsZUFBQTtBQ1hGO0FEY0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtFQ1pGO0VEZUE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSx3QkFBQTtFQ2JGO0VEZ0JBOztJQUNFLFlBQUE7RUNiRjtFRGdCQTs7O0lBQ0UsU0FBQTtFQ1pGO0VEZUE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQ2JGO0FBQ0YiLCJmaWxlIjoibGlicy9zaWduYXR1cmUvc3JjL2xpYi9zaWduYXR1cmUtbGlzdC1wYW5lbC9zaWduYXR1cmUtbGlzdC1wYW5lbC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21tb24tY29tcG9uZW50cy9zcmMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4uZ2Qtc2lnbmF0dXJlLWNvbnRleHQtcGFuZWwge1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGM0YzO1xuICBsZWZ0OiA1M3B4O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZ2Qtc2lnbmF0dXJlLWNvbnRleHQtcGFuZWwtdGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW46IDE2cHggMCAxNHB4IDEycHg7XG59XG5cbi5nZC1zaWduYXR1cmUtY29udGV4dC1wYW5lLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgaGVpZ2h0OiA5NXZoO1xufVxuXG4uZ2Qtc2lnbmF0dXJlLWxpc3QtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmdkLXNpZ25hdHVyZS1saXN0LXRpdGxlID4gaSB7XG4gIHBhZGRpbmc6IDE1cHggMjVweCAwcHggMTVweDtcbiAgY29sb3I6ICM2NzY3Njc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uZ2Qtc2lnbmF0dXJlLWNvbnRleHQtdXBsb2FkLXRpdGxlLCAuZ2Qtc2lnbmF0dXJlLWNvbnRleHQtcGFuZWwtdGl0bGUge1xuICBjb2xvcjogI0FBQUFBQTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAxNnB4IDEycHggMTJweCAxMnB4O1xufVxuXG4uZ2Qtc2lnbmF0dXJlLWxpc3Qtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZ2Qtc2lnbmF0dXJlLWxpc3Qtc2Nyb2xsIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5nZC1zaWduYXR1cmUtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHggMTFweCAxMnB4IDEycHg7XG59XG5cbi5nZC1zaWduYXR1cmUtZW1wdHktbGlzdCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAwMDAxYTtcbn1cblxuLmdkLXNpZ25hdHVyZS1lbXB0eS1saXN0IGkge1xuICBmb250LXNpemU6IDYwcHg7XG4gIHBhZGRpbmc6IDg3cHggOTdweCAwcHg7XG59XG5cbi5nZC1lbXB0eS1saXN0LXRleHQge1xuICBwYWRkaW5nOiAxOHB4IDM4cHggMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5nZC1zaWduYXR1cmUtdGh1bWJuYWlsLXRleHQsIC5nZC1zaWduYXR1cmUtdGh1bWJuYWlsLWltYWdlLCAuZ2Qtc2lnbmF0dXJlLXRodW1ibmFpbC1oYW5kIHtcbiAgbWluLXdpZHRoOiA3NHB4O1xuICBoZWlnaHQ6IDQxcHg7XG4gIG1hcmdpbjogOHB4IDE1cHggOHB4IDExcHg7XG59XG5cbi5nZC1zaWduYXR1cmUtdGh1bWJuYWlsLWltYWdlIHtcbiAgbWluLXdpZHRoOiA0MXB4O1xufVxuXG5AbWVkaWEgQHBob25lLWRvd24ge1xuICAuZ2Qtc2lnbmF0dXJlLWNvbnRleHQtcGFuZWwge1xuICAgIGxlZnQ6IDYwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gIC5nZC1zaWduYXR1cmUtY29udGV4dC1wYW5lbC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIG1hcmdpbjogMTZweCAwIDE0cHggMTJweDtcbiAgfVxuXG4gIC5nZC1zaWduYXR1cmUtY29udGV4dC1wYW5lbC10aXRsZSwgLmdkLXNpZ25hdHVyZS1jb250ZXh0LXVwbG9hZC10aXRsZSB7XG4gICAgd2lkdGg6IHVuc2V0O1xuICB9XG5cbiAgLmdkLXNpZ25hdHVyZS10aHVtYm5haWwtdGV4dCwgLmdkLXNpZ25hdHVyZS10aHVtYm5haWwtaW1hZ2UsIC5nZC1zaWduYXR1cmUtdGh1bWJuYWlsLWhhbmQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5nZC1zaWduYXR1cmUtdGh1bWJuYWlsLWltYWdlIHtcbiAgICB3aWR0aDogNDRweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gIH1cbn1cbiIsIi5nZC1zaWduYXR1cmUtY29udGV4dC1wYW5lbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0YzRjM7XG4gIGxlZnQ6IDUzcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uZ2Qtc2lnbmF0dXJlLWNvbnRleHQtcGFuZWwtdGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW46IDE2cHggMCAxNHB4IDEycHg7XG59XG4uZ2Qtc2lnbmF0dXJlLWNvbnRleHQtcGFuZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGhlaWdodDogOTV2aDtcbn1cbi5nZC1zaWduYXR1cmUtbGlzdC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmdkLXNpZ25hdHVyZS1saXN0LXRpdGxlID4gaSB7XG4gIHBhZGRpbmc6IDE1cHggMjVweCAwcHggMTVweDtcbiAgY29sb3I6ICM2NzY3Njc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmdkLXNpZ25hdHVyZS1jb250ZXh0LXVwbG9hZC10aXRsZSxcbi5nZC1zaWduYXR1cmUtY29udGV4dC1wYW5lbC10aXRsZSB7XG4gIGNvbG9yOiAjQUFBQUFBO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDE2cHggMTJweCAxMnB4IDEycHg7XG59XG4uZ2Qtc2lnbmF0dXJlLWxpc3Qtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmdkLXNpZ25hdHVyZS1saXN0LXNjcm9sbCB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xufVxuLmdkLXNpZ25hdHVyZS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCAxMXB4IDEycHggMTJweDtcbn1cbi5nZC1zaWduYXR1cmUtZW1wdHktbGlzdCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAwMDAxYTtcbn1cbi5nZC1zaWduYXR1cmUtZW1wdHktbGlzdCBpIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBwYWRkaW5nOiA4N3B4IDk3cHggMHB4O1xufVxuLmdkLWVtcHR5LWxpc3QtdGV4dCB7XG4gIHBhZGRpbmc6IDE4cHggMzhweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5nZC1zaWduYXR1cmUtdGh1bWJuYWlsLXRleHQsXG4uZ2Qtc2lnbmF0dXJlLXRodW1ibmFpbC1pbWFnZSxcbi5nZC1zaWduYXR1cmUtdGh1bWJuYWlsLWhhbmQge1xuICBtaW4td2lkdGg6IDc0cHg7XG4gIGhlaWdodDogNDFweDtcbiAgbWFyZ2luOiA4cHggMTVweCA4cHggMTFweDtcbn1cbi5nZC1zaWduYXR1cmUtdGh1bWJuYWlsLWltYWdlIHtcbiAgbWluLXdpZHRoOiA0MXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5nZC1zaWduYXR1cmUtY29udGV4dC1wYW5lbCB7XG4gICAgbGVmdDogNjBweDtcbiAgICByaWdodDogMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5nZC1zaWduYXR1cmUtY29udGV4dC1wYW5lbC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIG1hcmdpbjogMTZweCAwIDE0cHggMTJweDtcbiAgfVxuICAuZ2Qtc2lnbmF0dXJlLWNvbnRleHQtcGFuZWwtdGl0bGUsXG4gIC5nZC1zaWduYXR1cmUtY29udGV4dC11cGxvYWQtdGl0bGUge1xuICAgIHdpZHRoOiB1bnNldDtcbiAgfVxuICAuZ2Qtc2lnbmF0dXJlLXRodW1ibmFpbC10ZXh0LFxuICAuZ2Qtc2lnbmF0dXJlLXRodW1ibmFpbC1pbWFnZSxcbiAgLmdkLXNpZ25hdHVyZS10aHVtYm5haWwtaGFuZCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5nZC1zaWduYXR1cmUtdGh1bWJuYWlsLWltYWdlIHtcbiAgICB3aWR0aDogNDRweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gIH1cbn1cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let SignatureListPanelComponent = class SignatureListPanelComponent {
    constructor() {
        this.newSignatureEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    newSignature() {
        this.newSignatureEvent.emit(this.signatureType);
    }
    getImage(data) {
        const dataImagePngBase64 = 'data:image/png;base64,';
        return dataImagePngBase64 + data;
    }
};
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
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SignatureListPanelComponent.prototype, "newSignatureEvent", void 0);
SignatureListPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gd-signature-list-panel',
        template: __webpack_require__(/*! raw-loader!./signature-list-panel.component.html */ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/signature-list-panel/signature-list-panel.component.html"),
        styles: [__webpack_require__(/*! ./signature-list-panel.component.less */ "../../libs/signature/src/lib/signature-list-panel/signature-list-panel.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SignatureListPanelComponent);



/***/ }),

/***/ "../../libs/signature/src/lib/signature.module.ts":
/*!*************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: initializeApp, SignatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return initializeApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureModule", function() { return SignatureModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _signature_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signature.service */ "../../libs/signature/src/lib/signature.service.ts");
/* harmony import */ var _signature_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signature-config.service */ "../../libs/signature/src/lib/signature-config.service.ts");
/* harmony import */ var _signature_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signature-app.component */ "../../libs/signature/src/lib/signature-app.component.ts");
/* harmony import */ var _signature_list_panel_signature_list_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signature-list-panel/signature-list-panel.component */ "../../libs/signature/src/lib/signature-list-panel/signature-list-panel.component.ts");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "../../node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "../../node_modules/@fortawesome/free-regular-svg-icons/index.es.js");

var SignatureModule_1;











function initializeApp(signatureConfigService) {
    const result = () => signatureConfigService.load();
    return result;
}
let SignatureModule = SignatureModule_1 = class SignatureModule {
    constructor() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_11__["far"]);
    }
    static forRoot(apiEndpoint) {
        _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: SignatureModule_1
        };
    }
};
SignatureModule = SignatureModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_signature_app_component__WEBPACK_IMPORTED_MODULE_7__["SignatureAppComponent"],
            _signature_list_panel_signature_list_panel_component__WEBPACK_IMPORTED_MODULE_8__["SignatureListPanelComponent"]],
        exports: [_signature_app_component__WEBPACK_IMPORTED_MODULE_7__["SignatureAppComponent"],
            _signature_list_panel_signature_list_panel_component__WEBPACK_IMPORTED_MODULE_8__["SignatureListPanelComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonComponentsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
        providers: [
            _signature_service__WEBPACK_IMPORTED_MODULE_5__["SignatureService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _signature_config_service__WEBPACK_IMPORTED_MODULE_6__["SignatureConfigService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ErrorInterceptorService"],
                multi: true
            },
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                useFactory: initializeApp,
                deps: [_signature_config_service__WEBPACK_IMPORTED_MODULE_6__["SignatureConfigService"]], multi: true
            }
        ]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SignatureModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");




let SignatureService = class SignatureService {
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    loadFiles(path) {
        return this._http.post(this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_FILE_TREE, { 'path': path }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    }
    loadFile(credentials) {
        return this._http.post(this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_DOCUMENT_DESCRIPTION, credentials, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    }
    upload(file, url, rewrite) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].UPLOAD_DOCUMENTS, formData);
    }
    loadPage(credentials, page) {
        return this._http.post(this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'page': page
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    }
    getDownloadUrl(credentials) {
        return this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
    }
    loadPrint(credentials) {
        return this._http.post(this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_PRINT, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    }
    loadPrintPdf(credentials) {
        return this._http.post(this._config.getSignatureApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_PRINT_PDF, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJsonResponseTypeBlob);
    }
};
SignatureService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
];
SignatureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
], SignatureService);



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

module.exports = ".gd-thumbnails {\n  z-index: 9;\n  padding: 10pt;\n  width: 200pt;\n  background: #f5f5f5;\n  color: #ffffff;\n  overflow-y: auto;\n  display: block;\n  transition: margin-left 0.2s;\n  height: 100%;\n}\n.gd-page {\n  width: 190pt;\n  height: 190pt;\n  transition: all 0.3s;\n  padding: 5pt;\n  background-color: #efefef;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.gd-page:hover {\n  background-color: #c0c0c0;\n}\n.gd-wrapper {\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n  position: relative;\n  background-color: #ffffff;\n  box-shadow: 0px 4px 12px -4px rgba(0, 0, 0, 0.38);\n}\n/* Make thumbnails sidebar scroll not visible */\n.gd-thumbnails::-webkit-scrollbar {\n  width: 0px;\n  background-color: #F5F5F5;\n}\n.gd-thumbnails-panzoom > .gd-thumbnails-landscape {\n  margin: -134px 0px -1px 12px;\n}\n.gd-thumbnails-panzoom .gd-wrapper > div > div > img {\n  width: inherit;\n}\n.gd-thumbnails .gd-wrapper > img {\n  width: -webkit-fill-available !important;\n  margin: 0 20px 0 0 !important;\n}\n.gd-thumbnails .gd-page-image {\n  height: inherit;\n  margin-left: 153px !important;\n}\n.gd-thumbnails-landscape-image {\n  margin: -90px 0 -23px !important;\n}\n.gd-thumbnails-landscape-image-rotated {\n  margin: 126px 0 -3px -104px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy92aWV3ZXIvc3JjL2xpYi90aHVtYm5haWxzL3RodW1ibmFpbHMuY29tcG9uZW50Lmxlc3MiLCJsaWJzL3ZpZXdlci9zcmMvbGliL3RodW1ibmFpbHMvdGh1bWJuYWlscy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQUY7QURFQTtFQUNFLHlCQUFBO0FDQUY7QURFQTtFQUNFLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBR0EsaURBQUE7QUNBRjtBQUNBLCtDQUErQztBREcvQztFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQ0RGO0FESUE7RUFDRSw0QkFBQTtBQ0ZGO0FES0E7RUFDRSxjQUFBO0FDSEY7QURNQTtFQUNFLHdDQUFBO0VBQ0EsNkJBQUE7QUNKRjtBRE9BO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0FDTEY7QURRQTtFQUNFLGdDQUFBO0FDTkY7QURTQTtFQUNFLHNDQUFBO0FDUEYiLCJmaWxlIjoibGlicy92aWV3ZXIvc3JjL2xpYi90aHVtYm5haWxzL3RodW1ibmFpbHMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2QtdGh1bWJuYWlscyB7XG4gIHotaW5kZXg6IDk7XG4gIHBhZGRpbmc6IDEwcHQ7XG4gIHdpZHRoOiAyMDBwdDtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5nZC1wYWdlIHtcbiAgd2lkdGg6IDE5MHB0O1xuICBoZWlnaHQ6IDE5MHB0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgcGFkZGluZzogNXB0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5nZC1wYWdlOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwO1xufVxuLmdkLXdyYXBwZXJ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBsZWZ0OjUwJTtcbiAgdG9wOjUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMTJweCAtNHB4IHJnYmEoMCwwLDAsMC4zOCk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IC00cHggcmdiYSgwLDAsMCwwLjM4KTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IC00cHggcmdiYSgwLDAsMCwwLjM4KTtcbn1cblxuLyogTWFrZSB0aHVtYm5haWxzIHNpZGViYXIgc2Nyb2xsIG5vdCB2aXNpYmxlICovXG4uZ2QtdGh1bWJuYWlsczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG4uZ2QtdGh1bWJuYWlscy1wYW56b29tID4gLmdkLXRodW1ibmFpbHMtbGFuZHNjYXBlIHtcbiAgbWFyZ2luOiAtMTM0cHggMHB4IC0xcHggMTJweDtcbn1cblxuLmdkLXRodW1ibmFpbHMtcGFuem9vbSAuZ2Qtd3JhcHBlciA+IGRpdiA+IGRpdiA+IGltZyB7XG4gIHdpZHRoOiBpbmhlcml0O1xufVxuXG4uZ2QtdGh1bWJuYWlscyAuZ2Qtd3JhcHBlciA+IGltZyB7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAyMHB4IDAgMCAhaW1wb3J0YW50O1xufVxuXG4uZ2QtdGh1bWJuYWlscyAuZ2QtcGFnZS1pbWFnZSB7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgbWFyZ2luLWxlZnQ6IDE1M3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5nZC10aHVtYm5haWxzLWxhbmRzY2FwZS1pbWFnZSB7XG4gIG1hcmdpbjogLTkwcHggMCAtMjNweCAhaW1wb3J0YW50O1xufVxuXG4uZ2QtdGh1bWJuYWlscy1sYW5kc2NhcGUtaW1hZ2Utcm90YXRlZCB7XG4gIG1hcmdpbjogMTI2cHggMCAtM3B4IC0xMDRweCAhaW1wb3J0YW50O1xufVxuIiwiLmdkLXRodW1ibmFpbHMge1xuICB6LWluZGV4OiA5O1xuICBwYWRkaW5nOiAxMHB0O1xuICB3aWR0aDogMjAwcHQ7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmdkLXBhZ2Uge1xuICB3aWR0aDogMTkwcHQ7XG4gIGhlaWdodDogMTkwcHQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBwYWRkaW5nOiA1cHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmdkLXBhZ2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwO1xufVxuLmdkLXdyYXBwZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMTJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjM4KTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cbi8qIE1ha2UgdGh1bWJuYWlscyBzaWRlYmFyIHNjcm9sbCBub3QgdmlzaWJsZSAqL1xuLmdkLXRodW1ibmFpbHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cbi5nZC10aHVtYm5haWxzLXBhbnpvb20gPiAuZ2QtdGh1bWJuYWlscy1sYW5kc2NhcGUge1xuICBtYXJnaW46IC0xMzRweCAwcHggLTFweCAxMnB4O1xufVxuLmdkLXRodW1ibmFpbHMtcGFuem9vbSAuZ2Qtd3JhcHBlciA+IGRpdiA+IGRpdiA+IGltZyB7XG4gIHdpZHRoOiBpbmhlcml0O1xufVxuLmdkLXRodW1ibmFpbHMgLmdkLXdyYXBwZXIgPiBpbWcge1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgMjBweCAwIDAgIWltcG9ydGFudDtcbn1cbi5nZC10aHVtYm5haWxzIC5nZC1wYWdlLWltYWdlIHtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBtYXJnaW4tbGVmdDogMTUzcHggIWltcG9ydGFudDtcbn1cbi5nZC10aHVtYm5haWxzLWxhbmRzY2FwZS1pbWFnZSB7XG4gIG1hcmdpbjogLTkwcHggMCAtMjNweCAhaW1wb3J0YW50O1xufVxuLmdkLXRodW1ibmFpbHMtbGFuZHNjYXBlLWltYWdlLXJvdGF0ZWQge1xuICBtYXJnaW46IDEyNnB4IDAgLTNweCAtMTA0cHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");



let ThumbnailsComponent = class ThumbnailsComponent {
    constructor(_navigateService) {
        this._navigateService = _navigateService;
    }
    ngOnInit() {
    }
    imgData(data) {
        const dataImagePngBase64 = 'data:image/png;base64,';
        if (!this.isHtmlMode) {
            return dataImagePngBase64 + data;
        }
        return dataImagePngBase64;
    }
    getScale(x, y) {
        return Math.min(190 / x, 190 / y);
    }
    openPage(pageNumber) {
        this._navigateService.navigateTo(pageNumber);
    }
};
ThumbnailsComponent.ctorParameters = () => [
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["NavigateService"] }
];
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



/***/ }),

/***/ "../../libs/viewer/src/lib/viewer-app.component.less":
/*!****************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/libs/viewer/src/lib/viewer-app.component.less ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');\n:host * {\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n}\n.current-page-number {\n  margin: 0px 15px;\n  font-size: 14px;\n  color: #959da5;\n}\n.wrapper {\n  align-items: stretch;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.doc-panel {\n  display: flex;\n  height: inherit;\n}\n.thumbnails-button {\n  position: absolute;\n  right: 3px;\n}\n.gd-document {\n  width: 100%;\n  height: 100%;\n}\n.top-panel {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.toolbar-panel {\n  background-color: #3e4e5a;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvdmlld2VyL3NyYy9saWIvdmlld2VyLWFwcC5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9lbGVua28vcHJvamVjdHMvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy92aWV3ZXIvc3JjL2xpYi92aWV3ZXItYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQ0FrQjtBQUNsQjtFQUNFLHNEQUFBO0FEQ0Y7QUNDQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURDRjtBQ0VBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FEQUY7QUNHQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FEREY7QUNJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBREZGO0FDS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBREhGO0FDTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FESkY7QUNPQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBRExGIiwiZmlsZSI6ImxpYnMvdmlld2VyL3NyYy9saWIvdmlld2VyLWFwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xuOmhvc3QgKiB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cbi5jdXJyZW50LXBhZ2UtbnVtYmVyIHtcbiAgbWFyZ2luOiAwcHggMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzk1OWRhNTtcbn1cbi53cmFwcGVyIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmRvYy1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cbi50aHVtYm5haWxzLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDNweDtcbn1cbi5nZC1kb2N1bWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udG9wLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4udG9vbGJhci1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTRlNWE7XG4gIHdpZHRoOiAxMDAlO1xufVxuIiwiQGltcG9ydCAoY3NzKSB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwJyk7XG46aG9zdCAqIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuLmN1cnJlbnQtcGFnZS1udW1iZXIge1xuICBtYXJnaW46IDBweCAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOTU5ZGE1O1xufVxuXG4ud3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmRvYy1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cblxuLnRodW1ibmFpbHMtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogM3B4O1xufVxuXG4uZ2QtZG9jdW1lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udG9wLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b29sYmFyLXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlNGU1YTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _viewer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewer.service */ "../../libs/viewer/src/lib/viewer.service.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _viewer_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewer-config.service */ "../../libs/viewer/src/lib/viewer-config.service.ts");






let ViewerAppComponent = class ViewerAppComponent {
    constructor(_viewerService, _modalService, configService, uploadFilesService, _navigateService, _zoomService, pagePreloadService, _renderPrintService, passwordService, _windowService) {
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
        configService.updatedConfig.subscribe((viewerConfig) => {
            this.viewerConfig = viewerConfig;
        });
        uploadFilesService.uploadsChange.subscribe((uploads) => {
            if (uploads) {
                let i;
                for (i = 0; i < uploads.length; i++) {
                    this._viewerService.upload(uploads.item(i), '', this.viewerConfig.rewrite).subscribe(() => {
                        this.selectDir('');
                    });
                }
            }
        });
        pagePreloadService.checkPreload.subscribe((page) => {
            if (this.viewerConfig.preloadPageCount !== 0) {
                for (let i = page; i < page + 2; i++) {
                    if (i > 0 && i <= this.countPages && !this.file.pages[i - 1].data) {
                        this.preloadPages(i, i);
                    }
                }
            }
        });
        passwordService.passChange.subscribe((pass) => {
            this.selectFile(this.credentials.guid, pass, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].PasswordRequired);
        });
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((w) => {
            this.isDesktop = _windowService.isDesktop();
            this.refreshZoom();
        });
    }
    get rewriteConfig() {
        return this.viewerConfig ? this.viewerConfig.rewrite : true;
    }
    get zoomConfig() {
        return this.viewerConfig ? this.viewerConfig.zoom : true;
    }
    get pageSelectorConfig() {
        return this.viewerConfig ? this.viewerConfig.pageSelector : true;
    }
    get searchConfig() {
        return this.viewerConfig ? this.viewerConfig.search : true;
    }
    get thumbnailsConfig() {
        return this.viewerConfig ? this.viewerConfig.thumbnails : true;
    }
    get rotateConfig() {
        return this.viewerConfig ? this.viewerConfig.rotate : true;
    }
    get downloadConfig() {
        return this.viewerConfig ? this.viewerConfig.download : true;
    }
    get uploadConfig() {
        return this.viewerConfig ? this.viewerConfig.upload : true;
    }
    get printConfig() {
        return this.viewerConfig ? this.viewerConfig.print : true;
    }
    get browseConfig() {
        return this.viewerConfig ? this.viewerConfig.browse : true;
    }
    get htmlModeConfig() {
        return this.viewerConfig ? this.viewerConfig.htmlMode : true;
    }
    get saveRotateStateConfig() {
        return this.viewerConfig ? this.viewerConfig.saveRotateState : true;
    }
    get enableRightClickConfig() {
        return this.viewerConfig ? this.viewerConfig.enableRightClick : true;
    }
    get currentPage() {
        return this._navigateService.currentPage;
    }
    openModal(id) {
        this._modalService.open(id);
    }
    closeModal(id) {
        this._modalService.close(id);
    }
    selectDir($event) {
        this._viewerService.loadFiles($event).subscribe((files) => this.files = files || []);
    }
    selectFile($event, password, modalId) {
        this.credentials = { guid: $event, password: password };
        this._viewerService.loadFile(this.credentials).subscribe((file) => {
            this.file = file;
            this.formatDisabled = !this.file;
            if (file) {
                if (file.pages && file.pages[0]) {
                    this._pageHeight = file.pages[0].height;
                    this._pageWidth = file.pages[0].width;
                    this.options = this.zoomOptions();
                    this.refreshZoom();
                }
                const preloadPageCount = this.viewerConfig.preloadPageCount;
                const countPages = file.pages ? file.pages.length : 0;
                if (preloadPageCount > 0) {
                    this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                }
                this._navigateService.countPages = countPages;
                this._navigateService.currentPage = 1;
                this.countPages = countPages;
            }
        });
        if (modalId) {
            this._modalService.close(modalId);
        }
        this.clearData();
    }
    preloadPages(start, end) {
        for (let i = start; i <= end; i++) {
            this._viewerService.loadPage(this.credentials, i).subscribe((page) => {
                this.file.pages[i - 1] = page;
            });
        }
    }
    upload($event) {
        this._viewerService.upload(null, $event, this.rewriteConfig).subscribe(() => {
            this.selectDir('');
        });
    }
    nextPage() {
        if (this.formatDisabled)
            return;
        this._navigateService.nextPage();
    }
    prevPage() {
        if (this.formatDisabled)
            return;
        this._navigateService.prevPage();
    }
    toLastPage() {
        if (this.formatDisabled)
            return;
        this._navigateService.toLastPage();
    }
    toFirstPage() {
        if (this.formatDisabled)
            return;
        this._navigateService.toFirstPage();
    }
    navigateToPage(page) {
        if (this.formatDisabled)
            return;
        this._navigateService.navigateTo(page);
    }
    zoomIn() {
        if (this.formatDisabled)
            return;
        if (this._zoom < 490) {
            this.zoom = this._zoom + 10;
        }
    }
    zoomOut() {
        if (this.formatDisabled)
            return;
        if (this._zoom > 30) {
            this.zoom = this._zoom - 10;
        }
    }
    ptToPx(pt) {
        //pt * 96 / 72 = px.
        return pt * 96 / 72;
    }
    getFitToWidth() {
        const pageWidth = this.ptToPx(this._pageWidth);
        const pageHeight = this.ptToPx(this._pageHeight);
        const offsetWidth = pageWidth ? pageWidth : window.innerWidth;
        return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / window.innerWidth) : Math.round(window.innerWidth * 100 / offsetWidth);
    }
    getFitToHeight() {
        const pageWidth = this.ptToPx(this._pageWidth);
        const pageHeight = this.ptToPx(this._pageHeight);
        const windowHeight = (pageHeight > pageWidth) ? window.innerHeight - 100 : window.innerHeight + 100;
        const offsetHeight = pageHeight ? pageHeight : windowHeight;
        return (pageHeight > pageWidth) ? Math.round(windowHeight * 100 / offsetHeight) : Math.round(offsetHeight * 100 / windowHeight);
    }
    zoomOptions() {
        const width = this.getFitToWidth();
        const height = this.getFitToHeight();
        return this._zoomService.zoomOptions(width, height);
    }
    set zoom(zoom) {
        this._zoom = zoom;
        this._zoomService.changeZoom(this._zoom);
    }
    get zoom() {
        return this._zoom;
    }
    selectZoom($event) {
        this.zoom = $event.value;
    }
    rotate(deg) {
        if (this.formatDisabled)
            return;
        const pageNumber = this._navigateService.currentPage;
        if (this.saveRotateStateConfig && this.file) {
            this._viewerService.rotate(this.credentials, deg, pageNumber).subscribe((data) => {
                for (const page of data) {
                    const pageModel = this.file.pages[page.pageNumber - 1];
                    if (this.file && this.file.pages && pageModel) {
                        this.changeAngle(pageModel, page.angle);
                    }
                }
            });
        }
        else {
            const pageModel = this.file.pages[pageNumber - 1];
            if (this.file && this.file.pages && pageModel) {
                const angle = pageModel.angle + deg;
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
    }
    changeAngle(page, angle) {
        page.angle = angle;
    }
    downloadFile() {
        if (this.formatDisabled)
            return;
        window.location.assign(this._viewerService.getDownloadUrl(this.credentials));
    }
    printFile() {
        if (this.formatDisabled)
            return;
        if (this.viewerConfig.preloadPageCount !== 0) {
            if (_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["FileUtil"].find(this.file.guid, false).format === "Portable Document Format") {
                this._viewerService.loadPrintPdf(this.credentials).subscribe(blob => {
                    const file = new Blob([blob], { type: 'application/pdf' });
                    this._renderPrintService.changeBlob(file);
                });
            }
            else {
                this._viewerService.loadPrint(this.credentials).subscribe((data) => {
                    this.file.pages = data.pages;
                    this._renderPrintService.changePages(this.file.pages);
                });
            }
        }
        else {
            this._renderPrintService.changePages(this.file.pages);
        }
    }
    openThumbnails() {
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
            this._viewerService.loadThumbnails(this.credentials).subscribe((data) => {
                this.file.pages = data.pages;
                this.showThumbnails = true;
            });
        }
    }
    clearData() {
        if (!this.file || !this.file.pages) {
            return;
        }
        for (const page of this.file.pages) {
            page.data = null;
        }
    }
    onRightClick($event) {
        return this.enableRightClickConfig;
    }
    openSearch() {
        if (this.formatDisabled)
            return;
        this.showSearch = !this.showSearch;
    }
    ngAfterViewInit() {
        this.refreshZoom();
    }
    refreshZoom() {
        this.zoom = this._windowService.isDesktop() ? 100 : this.getFitToWidth();
    }
};
ViewerAppComponent.ctorParameters = () => [
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
];
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _viewer_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewer-config */ "../../libs/viewer/src/lib/viewer-config.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");






let ViewerConfigService = class ViewerConfigService {
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._viewerConfig = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](new _viewer_config__WEBPACK_IMPORTED_MODULE_2__["ViewerConfig"]());
        this._updatedConfig = this._viewerConfig.asObservable();
    }
    get updatedConfig() {
        return this._updatedConfig;
    }
    load() {
        return new Promise((resolve, reject) => {
            const configEndpoint = this._config.getConfigEndpoint(_groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].VIEWER_APP);
            this._http.get(configEndpoint, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson).toPromise().then((response) => {
                const viewerConfig = response;
                this._viewerConfig.next(viewerConfig);
                resolve();
            }).catch((response) => {
                reject(`Could not load viewer config: ${JSON.stringify(response)}`);
            });
        });
    }
};
ViewerConfigService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
];
ViewerConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
], ViewerConfigService);



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
class ViewerConfig {
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _viewer_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewer-app.component */ "../../libs/viewer/src/lib/viewer-app.component.ts");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");
/* harmony import */ var _viewer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewer.service */ "../../libs/viewer/src/lib/viewer.service.ts");
/* harmony import */ var _viewer_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viewer-config.service */ "../../libs/viewer/src/lib/viewer-config.service.ts");
/* harmony import */ var _thumbnails_thumbnails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./thumbnails/thumbnails.component */ "../../libs/viewer/src/lib/thumbnails/thumbnails.component.ts");

var ViewerModule_1;









function initializeApp(viewerConfigService) {
    const result = () => viewerConfigService.load();
    return result;
}
let ViewerModule = ViewerModule_1 = class ViewerModule {
    static forRoot(apiEndpoint) {
        _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["Api"].DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: ViewerModule_1
        };
    }
};
ViewerModule = ViewerModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _viewer_app_component__WEBPACK_IMPORTED_MODULE_4__["ViewerAppComponent"],
            _thumbnails_thumbnails_component__WEBPACK_IMPORTED_MODULE_8__["ThumbnailsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["CommonComponentsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs.examples.angular/common-components */ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js");




let ViewerService = class ViewerService {
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    loadFiles(path) {
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_FILE_TREE, { 'path': path }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    }
    loadFile(credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_DOCUMENT_DESCRIPTION, credentials, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    }
    upload(file, url, rewrite) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].UPLOAD_DOCUMENTS, formData);
    }
    loadPage(credentials, page) {
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'page': page
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    }
    rotate(credentials, angle, page) {
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].ROTATE_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'pages': [page],
            'angle': angle
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    }
    getDownloadUrl(credentials) {
        return this._config.getViewerApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
    }
    loadPrint(credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_PRINT, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    }
    loadPrintPdf(credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_PRINT_PDF, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJsonResponseTypeBlob);
    }
    loadThumbnails(credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_THUMBNAILS, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    }
};
ViewerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
];
ViewerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
], ViewerService);



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

module.exports = "<!--<gd-loading-mask></gd-loading-mask>-->\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"column\">\n      <div class=\"top-panel\">\n        <gd-logo [logo]=\"'comparison'\" icon=\"copy\"></gd-logo>\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'play'\" [tooltip]=\"'Compare'\" [disabled]=\"!file.get(first) || !file.get(second)\"\n                     (click)=\"compare()\"></gd-button>\n          <gd-button [icon]=\"'download'\" [tooltip]=\"'Download'\" [disabled]=\"!result\" (click)=\"download()\"></gd-button>\n          <div class=\"tabs-wrapper\">\n            <div class=\"tabs\">\n              <gd-tabs>\n                <gd-tab [id]=\"filesTab\" tabTitle=\"Documents\" [icon]=\"'copy'\" [active]=\"true\" [content]=\"false\">\n                </gd-tab>\n                <gd-tab [id]=\"resultTab\" tabTitle=\"Result\" [icon]=\"'poll'\" [disabled]=\"resultTabDisabled\" [content]=\"false\">\n                </gd-tab>\n              </gd-tabs>\n            </div>\n          </div>\n        </gd-top-toolbar>\n      </div>\n      <div class=\"files-panel\" *ngIf=\"activeTab === filesTab\">\n        <div class=\"upload-compare-file\">\n          <gd-add-file-panel class=\"compare-file\"\n                             [fileName]=\"firstFileName\"\n                             [panel]=\"first\"\n                             (active)=\"activePanel = $event\"\n                             (urlForUpload)=\"upload($event)\"\n                             (cleanPanel)=\"clearFile(first)\">\n          </gd-add-file-panel>\n          <gd-upload-file-panel\n                                [panel]=\"first\"\n                                (active)=\"activePanel = $event\"\n                                *ngIf=\"!firstFileName && !loadingFirstPanel\">\n          </gd-upload-file-panel>\n          <div *ngIf=\"loadingFirstPanel\" class=\"loader\">\n            <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n            <span>Loading... Please wait.</span>\n          </div>\n          <gd-document class=\"gd-document\"\n                       *ngIf=\"file.get(first)\"\n                       [file]=\"file.get(first)\"\n                       [mode]=\"false\"\n                       [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\" gdRenderPrint\n                       [htmlMode]=\"false\">\n          </gd-document>\n        </div>\n        <div class=\"upload-compare-file\">\n          <gd-add-file-panel class=\"compare-file\"\n                             [fileName]=\"secondFileName\"\n                             [panel]=\"second\"\n                             (active)=\"activePanel = $event\"\n                             (urlForUpload)=\"upload($event)\"\n                             (cleanPanel)=\"clearFile(second)\">\n          </gd-add-file-panel>\n          <gd-upload-file-panel [panel]=\"second\"\n                                (active)=\"activePanel = $event\"\n                                *ngIf=\"!secondFileName && !loadingSecondPanel\">\n          </gd-upload-file-panel>\n          <div *ngIf=\"loadingSecondPanel\" class=\"loader\">\n            <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n            <span>Loading... Please wait.</span>\n          </div>\n          <gd-document class=\"gd-document\"\n                       *ngIf=\"file.get(second)\"\n                       [file]=\"file.get(second)\"\n                       [mode]=\"false\"\n                       [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\" gdRenderPrint\n                       [htmlMode]=\"false\">\n          </gd-document>\n        </div>\n      </div>\n      <div class=\"result-panel\" *ngIf=\"activeTab === resultTab\">\n        <div  class=\"loader\" *ngIf=\"!result\">\n          <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;\n          <span>Loading... Please wait.</span>\n        </div>\n        <gd-result-document\n          class=\"gd-document\"\n          *ngIf=\"result\"\n          [file]=\"result\"\n          [mode]=\"false\"\n          [preloadPageCount]=\"comparisonConfig?.preloadResultPageCount\"\n          gdRenderPrint\n          [htmlMode]=\"false\">\n        </gd-result-document>\n      </div>\n    </div>\n    <gd-side-panel (hideSidePanel)=\"hideSidePanel($event)\"\n                   *ngIf=\"result && activeTab === resultTab\"\n                   [title]=\"'Differences'\"\n                   [icon]=\"'info-circle'\">\n      <gd-differences\n        [changes]=\"result.changes\">\n      </gd-differences>\n    </gd-side-panel>\n  </div>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\"\n                         [files]=\"files\"\n                         (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal, activePanel)\">\n  </gd-browse-files-modal>\n  <gd-error-modal></gd-error-modal>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/comparison/src/lib/difference-highlight/difference-highlight.component.html":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/difference-highlight/difference-highlight.component.html ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"gd-difference-{{change.type}} highlight-difference\"\n  gdOutside\n  [clickOutsideEnabled]=\"active\"\n  (clickOutside)=\"close(change.id,$event)\"\n  (click)=\"highlight(change.id)\"\n  [ngClass]=\"{'active': active}\"\n  [ngStyle]=\"{\n    width: change.normalized.width + '%',\n    height: change.normalized.height + '%',\n    left: change.normalized.x + '%',\n    top: change.normalized.y + '%'\n  }\"\n  data-id=\"{{change.id}}\">\n\n</div>\n\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/comparison/src/lib/difference/difference.component.html":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/difference/difference.component.html ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"gd-difference\" [ngClass]=\"{'active': active}\">\n  <div [ngSwitch]=\"change.type\" class=\"gd-difference-title-wrapper\">\n    <ng-container *ngSwitchCase='1'>\n      <fa-icon class=\"fas fa-pencil-alt\" [icon]=\"['fas','pencil-alt']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text edited</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='2'>\n      <fa-icon class=\"fas fa-arrow-right\" [icon]=\"['fas','arrow-right']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text added</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='3'>\n      <fa-icon class=\"fas fa-times\" [icon]=\"['fas','trash']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text deleted</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='4'>\n      <fa-icon class=\"fas fa-arrow-right\" [icon]=\"['fas','arrow-right']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text added</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='6'>\n      <fa-icon class=\"fas fa-pencil-alt\" [icon]=\"['fas','pencil-alt']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Style changed</div>\n        <div class=\"gd-differentce-comment\">\n          <ng-container *ngFor=\"let style of change.styleChanges\" [ngSwitch]=\"style.changedProperty\">\n            <div *ngSwitchCase=\"'HighlightColor'\">\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.oldValue)\"></span>\n              &rarr;\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.newValue)\"></span>\n              <span class=\"property\">Highlight Color</span>\n            </div>\n            <div *ngSwitchCase=\"'Color'\">\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.oldValue)\"></span>\n              &rarr;\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.newValue)\"></span>\n              <span class=\"property\">Color</span>\n            </div>\n            <div *ngSwitchCase=\"'Size'\">\n              {{style.oldValue}} &rarr; {{style.newValue}}\n              <span class=\"property\">Font size</span>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </ng-container>\n    <div class=\"gd-difference-page\">Page {{change.pageInfo.id + 1}}</div>\n  </div>\n</div>\n"

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

module.exports = "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" gdScrollable [onRefresh]=\"refreshView\">\n  <div class=\"panzoom\">\n    <div [ngClass]=\"(ifFirefox() && zoom > 110) ? 'page gd-zoomed' : 'page'\" *ngFor=\"let page of file?.pages\"\n         [style.width.pt]=\"ifPdf() ? page.width : 'unset'\"\n         [style.height.pt]=\"(ifPdf() || ifImage()) && ifChromeOrFirefox() ? page.height : 'unset'\" gdRotation\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\n      <div class=\"highlights\">\n        <gd-difference-highlight\n          *ngFor=\"let change of page?.changes\"\n          [change]=\"change\">\n        </gd-difference-highlight>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/comparison/src/lib/upload-file-panel/upload-file-panel.component.html":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/comparison/src/lib/upload-file-panel/upload-file-panel.component.html ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gd-drag-n-drop-wrap\" id=\"gd-dropZone\" gdDnd (dropped)=\"dropped($event)\">\n  <div class=\"gd-drag-n-drop-icon\">\n    <fa-icon [icon]=\"['far','folder-open']\" size=\"5x\" (click)=\"openModal()\"></fa-icon>\n  </div>\n  <h2>Drop your document here or click to select a file</h2>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/editor/src/lib/create.document-modal/create.document-modal.component.html":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/editor/src/lib/create.document-modal/create.document-modal.component.html ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gd-modal id=\"gd-create-document\" [title]=\"'Save document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-create-document-section\" class=\"tab-slider-body\">\n    <div class=\"inner-addon left-addon btn gd-create-wrap\" id=\"gd-create-wrap\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter file name without extension\" [value]=\"!file ? '' : file.guid.replace(FILE_NAME_REGEX, '').split('.')[0]\" #name autofocus/>\n      <span>\n        Select file type\n      </span>\n      <gd-select [disabled]=\"false\" [options]=\"formats\" (selected)=\"selectFormat($event)\" [showSelected]=\"{name : format, value : format}\" class=\"gd-select-format\"></gd-select>\n      <button class=\"btn btn-primary gd-create-submit\" (click)=\"save(name.value)\">Save</button>\n    </div>\n  </section>\n</gd-modal>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/editor/src/lib/editor-app.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/editor/src/lib/editor-app.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\" (click)=\"hideAll($event)\">\n  <gd-tabbed-toolbars>\n    <gd-tabs>\n      <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\n        <gd-top-toolbar class=\"toolbar-panel\" [leftOffset]=\"false\">\n          <gd-button [icon]=\"'file'\" [tooltip]=\"'Create document'\" (click)=\"createFile()\"\n                     *ngIf=\"createNewFileConfig\"></gd-button>\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                     *ngIf=\"browseConfig\"></gd-button>\n          <gd-button [disabled]=\"downloadDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                     (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                     *ngIf=\"printConfig\" ></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save File'\" (click)=\"save()\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'pencil-alt'\" [iconClass]=\"'save-as-button-icon'\" [tooltip]=\"'Save File As'\" (click)=\"openSave()\">\n            <fa-icon [icon]=\"['fas','save']\" class=\"save-button\" size=\"xs\"></fa-icon>\n          </gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n      <gd-tab [tabTitle]=\"'Formatting'\" [icon]=\"'edit'\" [id]=\"'2'\">\n        <gd-top-toolbar class=\"toolbar-panel\" [leftOffset]=\"false\">\n\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Undo'\"\n                     (click)=\"toggleUndo()\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Redo'\"\n                     (click)=\"toggleRedo()\"></gd-button>\n          <gd-select class=\"format-select\" [disabled]=\"formatDisabled\" [options]=\"fontOptions\"\n                     (selected)=\"selectFont($event)\"\n                     [showSelected]=\"{name : formatting.font, value : formatting.font}\"></gd-select>\n          <gd-select class=\"format-select\" [disabled]=\"formatDisabled\" [options]=\"fontSizeOptions\"\n                     (selected)=\"selectFontSize($event)\"\n                     [showSelected]=\"{name : formatting.fontSize + 'px', value : formatting.fontSize}\"></gd-select>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'bold'\" [tooltip]=\"'Bold'\"\n                     (click)=\"toggleBold($event)\" [toggle]=\"formatting.bold\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'italic'\" [tooltip]=\"'Italic'\"\n                     (click)=\"toggleItalic($event)\" [toggle]=\"formatting.italic\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'underline'\" [tooltip]=\"'Underline'\"\n                     (click)=\"toggleUnderline($event)\" [toggle]=\"formatting.underline\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'strikethrough'\" [tooltip]=\"'Strike out'\"\n                     (click)=\"toggleStrikeout($event)\" [toggle]=\"formatting.strikeout\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-center'\" [tooltip]=\"'Align center'\"\n                     (click)=\"toggleAlign('center')\" [toggle]=\"formatting.align == 'center' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-justify'\" [tooltip]=\"'Align full'\"\n                     (click)=\"toggleAlign('full')\" [toggle]=\"formatting.align == 'full' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-right'\" [tooltip]=\"'Align right'\"\n                     (click)=\"toggleAlign('right')\" [toggle]=\"formatting.align == 'right' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'align-left'\" [tooltip]=\"'Align left'\"\n                     (click)=\"toggleAlign('left')\" [toggle]=\"formatting.align == 'left' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ul'\" [tooltip]=\"'Add Unordered List'\"\n                     (click)=\"toggleList('unordered')\" [toggle]=\"formatting.list == 'unordered' ? true : false\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'list-ol'\" [tooltip]=\"'Add Ordered List'\"\n                     (click)=\"toggleList('ordered')\" [toggle]=\"formatting.list == 'ordered' ? true : false\"></gd-button>\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'fill'\" [tooltip]=\"'Background color'\"\n                     (click)=\"toggleColorPicker(true)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.bgColor\"></div>\n          </gd-button>\n          <gd-button name=\"button\" [disabled]=\"formatDisabled\" [icon]=\"'font'\" [tooltip]=\"'Color'\" (click)=\"toggleColorPicker(false)\">\n            <div class=\"bg-color-pic\" [style.background-color]=\"formatting.color\"></div>\n          </gd-button>\n        </gd-top-toolbar>\n      </gd-tab>\n    </gd-tabs>\n  </gd-tabbed-toolbars>\n  <gd-color-picker *ngIf=\"bgColorPickerShow || colorPickerShow\"\n                   [className]=\"'palette ' + (bgColorPickerShow ? 'background-color-picker' : 'color-picker')\"\n                   (selectedColor)=\"selectColor($event)\"></gd-color-picker>\n  <div class=\"doc-panel\" *ngIf=\"file\">\n\n    <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"true\" [htmlMode]=\"true\"\n                 [preloadPageCount]=\"0\" gdFormatting gdRenderPrint>\n\n    </gd-document>\n\n  </div>\n  <gd-init-state [icon]=\"'pen'\" [text]=\"''\" *ngIf=\"!file\"></gd-init-state>\n  <gd-browse-files-modal\n    (closing)=\"onCloseModal($event)\"\n    (urlForUpload)=\"upload($event)\"\n    [files]=\"files\"\n    (selectedDirectory)=\"selectDir($event)\"\n    (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n    [uploadConfig]=\"uploadConfig\"\n  ></gd-browse-files-modal>\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-create-document-modal (closing)=\"onCloseModal($event)\" [file]=\"credentials\" (savingFile)=\"saveFile($event)\"></gd-create-document-modal>\n  <gd-success-modal></gd-success-modal>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/signature-app.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature-app.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'signature'\" icon=\"{{isLeftBarOpen() ? 'bars' : 'times'}}\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-double-left'\" [tooltip]=\"'First Page'\"\n                 (click)=\"toFirstPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" [tooltip]=\"'Previous Page'\"\n                 (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <div class=\"current-page-number\">{{currentPage}}/{{countPages}}</div>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" [tooltip]=\"'Next Page'\"\n                 (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-double-right'\" [tooltip]=\"'Last Page'\"\n                 (click)=\"toLastPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                 (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                 *ngIf=\"printConfig\" ></gd-button>\n\n    </gd-top-toolbar>\n  </div>\n  <gd-left-side-bar>\n    <gd-tab *ngIf=\"textSignatureConfig\" [icon]=\"'font'\" [id]=\"'font'\" [tooltip]=\"'Texts'\">\n\n    </gd-tab>\n    <gd-tab *ngIf=\"imageSignatureConfig\" [icon]=\"'image'\" [id]=\"'image'\"  [tooltip]=\"'Uploaded Images'\">\n\n    </gd-tab>\n    <gd-tab *ngIf=\"digitalSignatureConfig\" [icon]=\"'fingerprint'\" [id]=\"'fingetprint'\" [tooltip]=\"'Digital signatures'\">\n\n    </gd-tab>\n    <gd-tab *ngIf=\"qrCodeSignatureConfig\" [icon]=\"'qrcode'\" [id]=\"'qrcode'\" [tooltip]=\"'QR codes'\">\n\n    </gd-tab>\n    <gd-tab *ngIf=\"barCodeSignatureConfig\" [icon]=\"'barcode'\" [id]=\"'barcode'\" [tooltip]=\"'Bar codes'\">\n\n    </gd-tab>\n    <gd-tab *ngIf=\"stampSignatureConfig\" [icon]=\"'stamp'\" [id]=\"'stamp'\" [tooltip]=\"'Stamps'\">\n\n    </gd-tab>\n    <gd-tab *ngIf=\"handSignatureConfig\" [icon]=\"'signature'\" [id]=\"'signature'\" [tooltip]=\"'Signatures'\">\n\n    </gd-tab>\n  </gd-left-side-bar>\n  <div class=\"doc-panel\" *ngIf=\"file\">\n    <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"htmlModeConfig\"\n                 [preloadPageCount]=\"preloadPageCountConfig\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-document>\n  </div>\n\n  <gd-init-state [icon]=\"'signature'\" [text]=\"''\" *ngIf=\"!file\"></gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/signature/src/lib/signature-list-panel/signature-list-panel.component.html":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /Users/elenko/projects/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/elenko/projects/GroupDocs.Total-Angular/libs/signature/src/lib/signature-list-panel/signature-list-panel.component.html ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gd-signature-context-panel\">\n  <div class=\"gd-signature-context-pane-wrapper\">\n    <ng-content></ng-content>\n    <div class=\"gd-signature-list-title\">\n      <fa-icon [icon]=\"['fa','plus']\" [class]=\"'ng-fa-icon icon'\" (click)=\"newSignature()\"></fa-icon>\n      <div class=\"gd-signature-context-panel-title\">{{signatureType}}\n      </div>\n    </div>\n    <div class=\"gd-signature-list-wrapper\">\n      <div class=\"gd-signature-list gd-signature-list-scroll\">\n        <div *ngFor=\"let signature of signatures\">\n          <img [ngClass]=\"'gd-signature-thumbnail-' + signature.signatureType\"\n               [attr.src]=\"getImage(signature.data) | safeResourceHtml\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"gd-signature-empty-list\">\n        <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n        <span class=\"gd-empty-list-text\">There is no {{signatureType}}} signatures yet.</span>\n      </div>\n    </div>\n  </div>\n</div>\n"

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

module.exports = "<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'viewer'\" icon=\"eye\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-select [disabled]=\"formatDisabled\" [options]=\"options\" (selected)=\"selectZoom($event)\"\n                 [showSelected]=\"{ name: zoom+'%', value : zoom}\" *ngIf=\"zoomConfig\" ></gd-select>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"\n                 *ngIf=\"zoomConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\"\n                 (click)=\"zoomOut()\" *ngIf=\"zoomConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-double-left'\" [tooltip]=\"'First Page'\"\n                 (click)=\"toFirstPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" [tooltip]=\"'Previous Page'\"\n                 (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <div class=\"current-page-number\">{{currentPage}}/{{countPages}}</div>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" [tooltip]=\"'Next Page'\"\n                 (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-double-right'\" [tooltip]=\"'Last Page'\"\n                 (click)=\"toLastPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Rotate CCW'\" (click)=\"rotate(-90)\"\n                 *ngIf=\"rotateConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Rotate CW'\" (click)=\"rotate(90)\"\n                 *ngIf=\"rotateConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                 (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                 *ngIf=\"printConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search'\" [tooltip]=\"'Search'\" (click)=\"openSearch()\"\n                 *ngIf=\"searchConfig\" ></gd-button>\n      <gd-search (hidePanel)=\"showSearch = !$event\" *ngIf=\"showSearch\" ></gd-search>\n\n      <gd-button class=\"thumbnails-button\" [disabled]=\"formatDisabled\" [icon]=\"'th-large'\" [tooltip]=\"'Thumbnails'\"\n                 (click)=\"openThumbnails()\" *ngIf=\"thumbnailsConfig && isDesktop\"></gd-button>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"doc-panel\" *ngIf=\"file\">\n    <gd-thumbnails *ngIf=\"showThumbnails\" [pages]=\"file.pages\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\"></gd-thumbnails>\n\n    <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"htmlModeConfig\"\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-document>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"''\" *ngIf=\"!file\"></gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n"

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

module.exports = "<div class=\"wrapper\">\n  <ul>\n    <li>\n      <a [routerLink]=\"['/viewer']\"  >\n        <img src=\"assets/images/groupdocs-viewer.png\"/>\n        <div>\n          <h5>GroupDocs</h5>\n          <h6>Viewer</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a [routerLink]=\"['/signature']\">\n        <img src=\"assets/images/groupdocs-signature.png\"/>\n        <div>\n          <h5>GroupDocs</h5>\n          <h6>Signature</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-annotation-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Annotation</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a [routerLink]=\"['/comparison']\">\n        <img src=\"assets/images/groupdocs-comparison.png\"/>\n        <div>\n          <h5>GroupDocs</h5>\n          <h6>Comparison</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-conversion-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Conversion</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-metadata-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Metadata</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-search-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Search</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-text-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Text</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-watermark-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Watermark</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a [routerLink]=\"['/editor']\" >\n        <img src=\"assets/images/groupdocs-editor.png\"/>\n        <div>\n          <h5>GroupDocs</h5>\n          <h6>Editor</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-assembly-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Assembly</h6>\n        </div>\n      </a>\n    </li>\n  </ul>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");




let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'total-angular';
        this.total = true;
    }
    OnInit() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((event) => (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivationEnd"])))
            .subscribe(event => {
            this.onNavigate("/" === this.router.url);
        });
    }
    onNavigate(home) {
        this.total = home;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gd-total',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _total_nav_total_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./total-nav/total-nav.component */ "./src/app/total-nav/total-nav.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _total_view_total_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./total-view/total-view.component */ "./src/app/total-view/total-view.component.ts");
/* harmony import */ var _groupdocs_examples_angular_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @groupdocs.examples.angular/viewer */ "../../libs/viewer/src/index.ts");
/* harmony import */ var _groupdocs_examples_angular_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @groupdocs.examples.angular/editor */ "../../libs/editor/src/index.ts");
/* harmony import */ var _groupdocs_examples_angular_comparison__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @groupdocs.examples.angular/comparison */ "../../libs/comparison/src/index.ts");
/* harmony import */ var _groupdocs_examples_angular_signature__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @groupdocs.examples.angular/signature */ "../../libs/signature/src/index.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _total_nav_total_nav_component__WEBPACK_IMPORTED_MODULE_3__["TotalNavComponent"], _total_view_total_view_component__WEBPACK_IMPORTED_MODULE_6__["TotalViewComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _groupdocs_examples_angular_viewer__WEBPACK_IMPORTED_MODULE_7__["ViewerModule"].forRoot("http://localhost:8080"),
            _groupdocs_examples_angular_editor__WEBPACK_IMPORTED_MODULE_8__["EditorModule"].forRoot("http://localhost:8080"),
            _groupdocs_examples_angular_comparison__WEBPACK_IMPORTED_MODULE_9__["ComparisonModule"].forRoot("http://localhost:8080"),
            _groupdocs_examples_angular_signature__WEBPACK_IMPORTED_MODULE_10__["SignatureModule"].forRoot("http://localhost:8080"),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                { path: '', component: _total_view_total_view_component__WEBPACK_IMPORTED_MODULE_6__["TotalViewComponent"] },
                { path: 'viewer', component: _groupdocs_examples_angular_viewer__WEBPACK_IMPORTED_MODULE_7__["ViewerAppComponent"] },
                { path: 'editor', component: _groupdocs_examples_angular_editor__WEBPACK_IMPORTED_MODULE_8__["EditorAppComponent"] },
                { path: 'comparison', component: _groupdocs_examples_angular_comparison__WEBPACK_IMPORTED_MODULE_9__["ComparisonAppComponent"] },
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let TotalNavComponent = class TotalNavComponent {
    constructor() { }
    ngOnInit() {
    }
};
TotalNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gd-total-nav',
        template: __webpack_require__(/*! raw-loader!./total-nav.component.html */ "../../node_modules/raw-loader/index.js!./src/app/total-nav/total-nav.component.html"),
        styles: [__webpack_require__(/*! ./total-nav.component.css */ "./src/app/total-nav/total-nav.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TotalNavComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let TotalViewComponent = class TotalViewComponent {
    constructor() {
    }
};
TotalViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gd-total-view',
        template: __webpack_require__(/*! raw-loader!./total-view.component.html */ "../../node_modules/raw-loader/index.js!./src/app/total-view/total-view.component.html"),
        styles: [__webpack_require__(/*! ./total-view.component.css */ "./src/app/total-view/total-view.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TotalViewComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map