(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/dist/libs/common-components/fesm2015/groupdocs.examples.angular-common-components.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: Api, BrowseFilesModalComponent, ButtonComponent, ChoiceButtonComponent, CommonComponentsModule, CommonModals, ConfigService, DisabledCursorDirective, DndDirective, DocumentComponent, ErrorInterceptorService, ErrorModalComponent, ExceptionMessageService, FileCredentials, FileDescription, FileModel, FileService, FileUtil, HighlightSearchPipe, HttpError, InitStateComponent, LogoComponent, ModalComponent, ModalService, NavigateService, PageComponent, PageModel, PagePreloadService, PasswordRequiredComponent, PasswordService, RenderPrintDirective, RenderPrintService, RotatedPage, RotationDirective, SanitizeHtmlPipe, SanitizeResourceHtmlPipe, SanitizeStylePipe, ScrollableDirective, SearchComponent, SearchService, SearchableDirective, SelectComponent, TooltipComponent, TopToolbarComponent, UploadFileZoneComponent, UploadFilesService, ViewportService, WindowService, ZoomDirective, ZoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseFilesModalComponent", function() { return BrowseFilesModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoiceButtonComponent", function() { return ChoiceButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponentsModule", function() { return CommonComponentsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonModals", function() { return CommonModals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabledCursorDirective", function() { return DisabledCursorDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DndDirective", function() { return DndDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorService", function() { return ErrorInterceptorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModalComponent", function() { return ErrorModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionMessageService", function() { return ExceptionMessageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileCredentials", function() { return FileCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDescription", function() { return FileDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileModel", function() { return FileModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUtil", function() { return FileUtil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightSearchPipe", function() { return HighlightSearchPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return HttpError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitStateComponent", function() { return InitStateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigateService", function() { return NavigateService; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollableDirective", function() { return ScrollableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchableDirective", function() { return SearchableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopToolbarComponent", function() { return TopToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileZoneComponent", function() { return UploadFileZoneComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFilesService", function() { return UploadFilesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportService", function() { return ViewportService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomDirective", function() { return ZoomDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomService", function() { return ZoomService; });
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
                styles: [".top-toolbar{width:100%;height:50px;z-index:999;display:flex;align-items:center}.tools{width:100%;height:100%;display:flex;align-items:center}@media (max-width:1025px){.top-toolbar{height:70px}.arrow-right{position:absolute;right:0}.tools{width:calc(100% - 120px);height:100%;overflow-x:auto;overflow-scrolling:touch;display:flex;align-items:center;transition:.3s ease-in-out;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.tools::-webkit-scrollbar{width:0;height:0;background-color:#3e4e5a}}"]
            }] }
];
/** @nocollapse */
TopToolbarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: ViewportService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
    constructor() {
        this.disabled = false;
        this.showToolTip = false;
    }
    /**
     * @return {?}
     */
    onHovering() {
        this.showToolTip = true;
    }
    /**
     * @return {?}
     */
    onUnhovering() {
        this.showToolTip = false;
    }
}
ButtonComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-button',
                template: "<div class=\"button\" [ngClass]=\"className\" (mouseenter)=\"onHovering()\" (mouseleave)=\"onUnhovering()\" gdDisabledCursor [dis]=\"disabled\">\n  <fa-icon [icon]=\"['fas',icon]\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\"></gd-tooltip>\n</div>\n",
                styles: [".button{margin:0 15px;font-size:14px;color:#959da5;cursor:pointer}@media (max-width:1025px){.button{font-size:20px;margin:0 20px}.arrow-button{margin:5px}}"]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    className: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
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
                template: "<div id=\"gd-header-logo\" class=\"logo\">\n  <span class=\"logo-text\" [innerHTML]=\"logo\"></span>\n</div>\n\n",
                styles: [".logo{background-color:#25c2d4;height:50px;display:flex;align-items:center}.logo-text{color:#fff;font-size:15px;text-transform:uppercase;margin:0 14px}@media (max-width:1025px){.logo{height:70px}}"]
            }] }
];
/** @nocollapse */
LogoComponent.ctorParameters = () => [];
LogoComponent.propDecorators = {
    logo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
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
                styles: [".tooltip{position:absolute;margin-top:37px;width:120px;background-color:#000;color:#fff;text-align:center;border-radius:0;padding:5px 0;z-index:1;margin-left:-66px;font-size:10px}.tooltip.hidden{visibility:hidden}.tooltip.shown{visibility:visible}.shown:after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border:5px solid transparent;border-bottom-color:#000}"]
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
    get apiEndpoint() {
        return this._apiEndpoint;
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
        modal.open();
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
        modal.close();
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
        this.visibility = false;
        this.visible.emit(false);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onClose($event) {
        if ($event && $event.target && ((/** @type {?} */ ($event.target))).id === 'modalDialog') {
            this.close();
        }
    }
}
ModalComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-modal',
                template: "<div class=\"gd-modal fade\" id=\"modalDialog\" (click)=\"onClose($event);\" *ngIf=\"visibility\">\n  <div class=\"gd-modal-dialog\">\n    <div class=\"gd-modal-content\" id=\"gd-modal-content\"> \n\n      <div class=\"gd-modal-header\"> \n        <div class=\"gd-modal-close\" (click)=\"close();\"><span>&times;</span></div>\n        <h4 class=\"gd-modal-title\">{{title}}</h4>\n        </div> \n\n      <div class=\"gd-modal-body\">\n        <ng-content></ng-content>\n        </div> \n\n      <div class=\"gd-modal-footer\"> \n\n        </div> \n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog --> \n  </div>\n\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.gd-modal{overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0;background-color:rgba(0,0,0,.5)}.gd-modal-dialog{box-shadow:#0005 0 0 10px;position:absolute;width:1024px;height:728px;top:calc(50% - 364px);left:calc(50% - 512px)}.gd-modal-content{background-color:#fff;height:100%;display:flex;flex-direction:column}.gd-modal-header{padding:1px 20px;background-color:#3e4e5a}.gd-modal-close{position:absolute;right:20px;top:13px;font-size:21px;cursor:pointer;color:#959da5}.gd-modal-title{font-size:16px;font-weight:400;padding-top:16px;padding-bottom:16px;margin:0;color:#fff}.gd-modal-body{background-color:#fff;padding:20px 0;overflow:hidden;overflow-y:auto;height:calc(100% - 75px)}.gd-modal-footer{height:25px}.gd-modal-footer>.btn{float:right;margin:20px 15px;padding:10px 20px;cursor:pointer;font-size:12px}@media (max-width:1025px){.gd-modal-dialog{width:100%;height:100%;top:0;left:0}}"]
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
                template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-browse-section\" gdDnd [isBackground]=\"false\" (open)=\"showUploadFile=$event\">\n    <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\">\n      <h2>Drag &amp; Drop your files here</h2>\n    </div>\n    <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n      <gd-choice-button [name]=\"'Upload file'\" [choices]=\"uploads\" [icon]=\"'upload'\"\n                        (selected)=\"selectUpload($event)\"></gd-choice-button>\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      <div class=\"upload-url\" *ngIf=\"showUploadUrl\">\n        <input class=\"url-input\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n        <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-header\">\n        <div class=\"header-name\">Document</div>\n        <div class=\"header-size\">Size</div>\n      </div>\n      <div class=\"list-files-body\">\n      <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n              <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n          </div>\n          <div class=\"go-up-dots\">...</div>\n      </div>\n      <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n        <div class=\"file-description\">\n          <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n          <div class=\"file-name-format\">\n            <div class=\"file-name\">{{file?.name}}</div>\n            <div class=\"file-format\">{{getFormatName(file)}}</div>\n          </div>\n        </div>\n        <div class=\"file-size\">\n          {{getSize(file?.size)}}\n        </div>\n      </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
                styles: [".gd-modal-table{width:100%;text-align:left;padding-top:20px}.list-files-header{color:#acacac;font-size:10px;padding-left:21px}.header-size{position:relative;left:-24px}.file-size,.header-size{width:10%;color:#777}.file-description,.file-size{font-size:14px;padding:10px 6px;margin-left:12px}.file-description{cursor:pointer;overflow:hidden;display:flex}.list-files-header,.list-files-lines{display:flex;width:100%;justify-content:space-between}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{cursor:pointer;display:flex;font-size:16px}.upload-panel{display:flex;position:relative;left:20px}.file-description .ng-fa-icon.fa-file-pdf{color:#e21717}.file-description .ng-fa-icon.fa-file-word{color:#6979b9}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29417}.file-description .ng-fa-icon.fa-file-excel{color:#3fa300}.file-description .ng-fa-icon.fa-file-image{color:#e217da}.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#5d6a75}.file-description .ng-fa-icon{font-size:32px}.go-up-dots{margin-left:10px;margin-top:8px;font-size:20px}.go-up-icon .ng-fa-icon{padding:8px;display:block}.go-up-icon{width:30px;height:30px;margin-left:12px}.file-name{font-size:16px;color:#6e6e6e}.file-name-format{padding-left:10px}.file-format{font-size:10px}.url-input{width:358px;margin-left:8px;height:27px;border:1px solid #25c2d4}.url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.url-check .ng-fa-icon{display:block;padding:8px}.upload-url{display:flex}.list-files-lines{border-top:1px solid #ccc}.gd-dnd-wrap{border:2px dashed #ccc;background-color:#f8f8f8;cursor:default;position:absolute;width:983px;height:626px;opacity:.9;z-index:1;left:20px;display:flex;text-align:center;justify-content:center}.gd-dnd-wrap h2{color:#959da5;font-size:15px;font-weight:300;margin-top:50%}@media (max-width:1025px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}}"]
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
    urlForUpload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
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
        return [
            this.createZoomOption(25, '25%'),
            this.createZoomOption(50, '50%'),
            this.createZoomOption(100, '100%'),
            this.createZoomOption(150, '150%'),
            this.createZoomOption(200, '200%'),
            this.createZoomOption(300, '300%'),
            this.createZoomOption(0, '', true),
            this.createZoomOption(width, 'Fit Width'),
            this.createZoomOption(height, 'Fit Height')
        ];
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DocumentComponent {
    /**
     * @param {?} zoomService
     */
    constructor(zoomService) {
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
}
DocumentComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-document',
                template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" gdScrollable [onRefresh]=\"refreshView\">\n  <div class=\"panzoom\" gdZoom [zoomActive]=\"ifFirefox()\" gdSearchable>\n    <div [ngClass]=\"(ifFirefox() && zoom > 110) ? 'page gd-zoomed' : 'page'\" *ngFor=\"let page of file?.pages\" gdZoom [zoomActive]=\"!ifFirefox()\"\n         [style.width.pt]=\"ifPdf() ? page.width : 'unset'\"\n         [style.height.pt]=\"(ifPdf() || ifImage()) && ifChromeOrFirefox() ? page.height : 'unset'\" gdRotation\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\"></gd-page>\n    </div>\n  </div>\n</div>\n",
                styles: [".document{background-color:#e7e7e7;width:100%;height:100%;overflow-x:hidden;overflow-y:auto!important;transition:.4s;padding:0;margin:0}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 4px 12px -4px rgba(0,0,0,.38);transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:50% 50% 0;display:flex;justify-content:center;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}@media (max-width:1025px){.document{overflow-x:auto!important}.panzoom{flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
            }] }
];
/** @nocollapse */
DocumentComponent.ctorParameters = () => [
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
                template: "<div id=\"page-{{number}}\"\n     [style.min-width.px]=\"width\" [style.min-height.px]=\"height\">\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\"></div>\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\n       alt=\"\"\n       *ngIf=\"data && !isHtml\">\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n    &nbsp;Loading... Please wait.\n  </div>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper img{width:inherit}.gd-wrapper div{width:100%}.gd-highlight{background-color:#ff0}.gd-highlight-select{background-color:#ff9b00}"]
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
    isHtml: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
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
                styles: [".choice-button{width:137px;height:31px;color:#fff;background-color:#25c2d4;display:flex}.choice-button .ng-fa-icon{padding:8px;font-size:15px}.down{cursor:pointer;background-color:#1fa5b4;width:31px;font-size:10px;display:flex;justify-content:center}.button-name{font-size:10px;padding-top:11px;padding-right:27px}.choices{color:#b2b8bd;top:33px;left:109px;position:absolute;padding:5px;margin:0;background-color:#fff;width:80px;border:0;border-radius:0;box-shadow:0 0 6px #ccc}.choice{cursor:pointer;font-size:12px;padding:3px}.choice i{color:#959da5}.upload-from{font-size:7px}"]
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
                template: "<div class=\"gd-drag-n-drop-wrap\" id=\"gd-dropZone\" gdDnd (close)=\"onCloseUpload()\" (click)=\"close($event)\">\n  <div class=\"gd-drag-n-drop-icon\">\n    <fa-icon [icon]=\"['fas','cloud-download-alt']\" size=\"5x\"></fa-icon>\n  </div>\n  <h2>Drag &amp; Drop your files here</h2> \n  <h4>OR</h4> \n  <div class=\"gd-drag-n-drop-buttons\"> \n    <label class=\"btn btn-primary\"> \n      <fa-icon [icon]=\"['fas','file']\"></fa-icon>\n      SELECT FILE \n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      </label>\n  </div>\n</div>\n",
                styles: [".gd-drag-n-drop-wrap{border:2px dashed #ccc;background-color:#f8f8f8;text-align:center;cursor:default;position:absolute;width:983px;height:626px;left:2px;display:flex;align-content:center;flex-direction:column;justify-content:center;opacity:.9;z-index:1}.gd-drag-n-drop-wrap h2{color:#959da5;margin:5px 0;font-size:15px;font-weight:300}.gd-drag-n-drop-wrap h4{color:#cacaca;font-weight:300;font-size:12px;margin:10px 0 15px}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-drag-n-drop-buttons i{margin-right:5px}.gd-drag-n-drop-buttons .btn{width:134px;height:35px;margin:0 10px;font-size:12px;font-weight:400}.gd-drag-n-drop-wrap.hover{background:#ddd;border-color:#aaa}"]
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
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isBackground = true;
        this.background = 'transparent';
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.isBackground) {
            this.background = '#999';
        }
        else {
            this.open.emit(true);
        }
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.isBackground) {
            this.background = '#f8f8f8';
        }
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
            this.background = '#f8f8f8';
            this._uploadFilesService.changeFilesList(files);
            this.close.emit(true);
            this.open.emit(false);
        }
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
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    isBackground: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.background',] }],
    onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragleave', ['$event'],] }],
    onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }]
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
        this._observer.next(page);
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
const $$3 = jquery__WEBPACK_IMPORTED_MODULE_2__;
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
        const isSameTop = (prev && $$3(prev).offset().top === $$3(page).offset().top);
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
class SelectComponent {
    constructor() {
        this.disabled = false;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isOpen = false;
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
     * @return {?}
     */
    toggle() {
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    select(value) {
        this.selected.emit(value);
        this.close();
    }
}
SelectComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'gd-select',
                template: "<div class=\"select\">\n  <span class=\"selected-value\" gdDisabledCursor [dis]=\"disabled\" (click)=\"toggle()\">{{showSelected}}%</span>\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\" (click)=\"toggle()\"></span>\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\n    <div *ngFor=\"let option of options\">\n      <div *ngIf=\"!option.separator\" (click)=\"select(option.value)\" class=\"option\">{{option.name}}</div>\n      <div *ngIf=\"option.separator\" role=\"separator\" class=\"dropdown-menu-separator\"></div>\n    </div>\n  </div>\n</div>\n",
                styles: [".select{min-width:50px;color:#959da5}.selected-value{font-size:14px;cursor:pointer}.nav-caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent;cursor:pointer}.dropdown-menu{position:absolute;top:49px;z-index:1000;float:left;min-width:160px;padding:5px 0;list-style:none;font-size:13px;text-align:left;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box}.dropdown-menu .option{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;white-space:nowrap;cursor:pointer}.dropdown-menu-separator{height:1px;margin:8px 0;overflow:hidden;background-color:#e5e5e5;padding:0!important}"]
            }] }
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [];
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
        this.cursor = this.dis ? 'not-allowed' : 'pointer';
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
    cursor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.cursor',] }]
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
        //windowObject.document.close();
        windowObject.focus();
        windowObject.print();
        // windowObject.close();
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
                styles: [".gd-password-wrap{position:relative;margin-left:-18px;margin-top:118px}.gd-password-wrap>input{padding-left:12px;margin-left:35px;width:454px;height:32px;color:#585858}.gd-password-submit{position:absolute;top:0;color:#fff;background-color:#3e4d59;padding:7px 16px 6px;font-size:12px;cursor:pointer}.gd-password-error{position:absolute;top:38px;left:35px;color:red}@media (max-width:1025px){.gd-password-wrap>input{width:50%}}"]
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
const $$4 = jquery__WEBPACK_IMPORTED_MODULE_2__;
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
                $$4(value).removeClass('gd-highlight-select');
            }));
            /** @type {?} */
            const currentEl = el.querySelectorAll('.gd-highlight')[this.current - 1];
            $$4(currentEl).addClass('gd-highlight-select');
            if (currentEl) {
                /** @type {?} */
                const options = {
                    left: 0,
                    top: ($$4(currentEl).offset().top * currentZoom) + el.parentElement.scrollTop - 150,
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
        const textNodes = $$4(el).find('*').contents().filter((/**
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
            const $this = $$4(this);
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
    ViewportService];
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
                ],
                providers: providers
            },] }
];
/** @nocollapse */
CommonComponentsModule.ctorParameters = () => [];


//# sourceMappingURL=groupdocs.examples.angular-common-components.js.map


/***/ }),

/***/ "../../libs/viewer/src/environments/environment.ts":
/*!**************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/viewer/src/environments/environment.ts ***!
  \**************************************************************************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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
/*!*******************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/viewer/src/index.ts ***!
  \*******************************************************************************************/
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
/*!***************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/viewer/src/lib/thumbnails/thumbnails.component.less ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-thumbnails {\n  z-index: 9;\n  padding: 10pt;\n  width: 200pt;\n  background: #f5f5f5;\n  color: #ffffff;\n  overflow-y: auto;\n  display: block;\n  transition: margin-left 0.2s;\n  height: 100%;\n}\n.gd-page {\n  width: 190pt;\n  height: 190pt;\n  transition: all 0.3s;\n  padding: 5pt;\n  background-color: #efefef;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.gd-page:hover {\n  background-color: #c0c0c0;\n}\n.gd-wrapper {\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n  position: relative;\n  background-color: #ffffff;\n  box-shadow: 0px 4px 12px -4px rgba(0, 0, 0, 0.38);\n}\n/* Make thumbnails sidebar scroll not visible */\n.gd-thumbnails::-webkit-scrollbar {\n  width: 0px;\n  background-color: #F5F5F5;\n}\n.gd-thumbnails-panzoom > .gd-thumbnails-landscape {\n  margin: -134px 0px -1px 12px;\n}\n.gd-thumbnails-panzoom .gd-wrapper > div > div > img {\n  width: inherit;\n}\n.gd-thumbnails .gd-wrapper > img {\n  width: -webkit-fill-available !important;\n  margin: 0 20px 0 0 !important;\n}\n.gd-thumbnails .gd-page-image {\n  height: inherit;\n  margin-left: 153px !important;\n}\n.gd-thumbnails-landscape-image {\n  margin: -90px 0 -23px !important;\n}\n.gd-thumbnails-landscape-image-rotated {\n  margin: 126px 0 -3px -104px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy92aWV3ZXIvc3JjL2xpYi90aHVtYm5haWxzL3RodW1ibmFpbHMuY29tcG9uZW50Lmxlc3MiLCJsaWJzL3ZpZXdlci9zcmMvbGliL3RodW1ibmFpbHMvdGh1bWJuYWlscy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQUY7QURFQTtFQUNFLHlCQUFBO0FDQUY7QURFQTtFQUNFLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBR0EsaURBQUE7QUNBRjtBQUNBLCtDQUErQztBREcvQztFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQ0RGO0FESUE7RUFDRSw0QkFBQTtBQ0ZGO0FES0E7RUFDRSxjQUFBO0FDSEY7QURNQTtFQUNFLHdDQUFBO0VBQ0EsNkJBQUE7QUNKRjtBRE9BO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0FDTEY7QURRQTtFQUNFLGdDQUFBO0FDTkY7QURTQTtFQUNFLHNDQUFBO0FDUEYiLCJmaWxlIjoibGlicy92aWV3ZXIvc3JjL2xpYi90aHVtYm5haWxzL3RodW1ibmFpbHMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2QtdGh1bWJuYWlscyB7XG4gIHotaW5kZXg6IDk7XG4gIHBhZGRpbmc6IDEwcHQ7XG4gIHdpZHRoOiAyMDBwdDtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5nZC1wYWdlIHtcbiAgd2lkdGg6IDE5MHB0O1xuICBoZWlnaHQ6IDE5MHB0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgcGFkZGluZzogNXB0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5nZC1wYWdlOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwO1xufVxuLmdkLXdyYXBwZXJ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBsZWZ0OjUwJTtcbiAgdG9wOjUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMTJweCAtNHB4IHJnYmEoMCwwLDAsMC4zOCk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IC00cHggcmdiYSgwLDAsMCwwLjM4KTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IC00cHggcmdiYSgwLDAsMCwwLjM4KTtcbn1cblxuLyogTWFrZSB0aHVtYm5haWxzIHNpZGViYXIgc2Nyb2xsIG5vdCB2aXNpYmxlICovXG4uZ2QtdGh1bWJuYWlsczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG4uZ2QtdGh1bWJuYWlscy1wYW56b29tID4gLmdkLXRodW1ibmFpbHMtbGFuZHNjYXBlIHtcbiAgbWFyZ2luOiAtMTM0cHggMHB4IC0xcHggMTJweDtcbn1cblxuLmdkLXRodW1ibmFpbHMtcGFuem9vbSAuZ2Qtd3JhcHBlciA+IGRpdiA+IGRpdiA+IGltZyB7XG4gIHdpZHRoOiBpbmhlcml0O1xufVxuXG4uZ2QtdGh1bWJuYWlscyAuZ2Qtd3JhcHBlciA+IGltZyB7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAyMHB4IDAgMCAhaW1wb3J0YW50O1xufVxuXG4uZ2QtdGh1bWJuYWlscyAuZ2QtcGFnZS1pbWFnZSB7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgbWFyZ2luLWxlZnQ6IDE1M3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5nZC10aHVtYm5haWxzLWxhbmRzY2FwZS1pbWFnZSB7XG4gIG1hcmdpbjogLTkwcHggMCAtMjNweCAhaW1wb3J0YW50O1xufVxuXG4uZ2QtdGh1bWJuYWlscy1sYW5kc2NhcGUtaW1hZ2Utcm90YXRlZCB7XG4gIG1hcmdpbjogMTI2cHggMCAtM3B4IC0xMDRweCAhaW1wb3J0YW50O1xufVxuIiwiLmdkLXRodW1ibmFpbHMge1xuICB6LWluZGV4OiA5O1xuICBwYWRkaW5nOiAxMHB0O1xuICB3aWR0aDogMjAwcHQ7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmdkLXBhZ2Uge1xuICB3aWR0aDogMTkwcHQ7XG4gIGhlaWdodDogMTkwcHQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBwYWRkaW5nOiA1cHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmdkLXBhZ2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwO1xufVxuLmdkLXdyYXBwZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMTJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjM4KTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cbi8qIE1ha2UgdGh1bWJuYWlscyBzaWRlYmFyIHNjcm9sbCBub3QgdmlzaWJsZSAqL1xuLmdkLXRodW1ibmFpbHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cbi5nZC10aHVtYm5haWxzLXBhbnpvb20gPiAuZ2QtdGh1bWJuYWlscy1sYW5kc2NhcGUge1xuICBtYXJnaW46IC0xMzRweCAwcHggLTFweCAxMnB4O1xufVxuLmdkLXRodW1ibmFpbHMtcGFuem9vbSAuZ2Qtd3JhcHBlciA+IGRpdiA+IGRpdiA+IGltZyB7XG4gIHdpZHRoOiBpbmhlcml0O1xufVxuLmdkLXRodW1ibmFpbHMgLmdkLXdyYXBwZXIgPiBpbWcge1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgMjBweCAwIDAgIWltcG9ydGFudDtcbn1cbi5nZC10aHVtYm5haWxzIC5nZC1wYWdlLWltYWdlIHtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBtYXJnaW4tbGVmdDogMTUzcHggIWltcG9ydGFudDtcbn1cbi5nZC10aHVtYm5haWxzLWxhbmRzY2FwZS1pbWFnZSB7XG4gIG1hcmdpbjogLTkwcHggMCAtMjNweCAhaW1wb3J0YW50O1xufVxuLmdkLXRodW1ibmFpbHMtbGFuZHNjYXBlLWltYWdlLXJvdGF0ZWQge1xuICBtYXJnaW46IDEyNnB4IDAgLTNweCAtMTA0cHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "../../libs/viewer/src/lib/thumbnails/thumbnails.component.ts":
/*!*************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/viewer/src/lib/thumbnails/thumbnails.component.ts ***!
  \*************************************************************************************************************************/
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
/*!****************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/viewer/src/lib/viewer-app.component.less ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');\n:host * {\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n}\n.current-page-number {\n  margin: 0px 15px;\n  font-size: 14px;\n  color: #959da5;\n}\n.wrapper {\n  align-items: stretch;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.doc-panel {\n  display: flex;\n  height: inherit;\n}\n.thumbnails-button {\n  position: absolute;\n  right: 3px;\n}\n.gd-document {\n  width: 100%;\n  height: 100%;\n}\n.top-panel {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.toolbar-panel {\n  background-color: #3e4e5a;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvdmlld2VyL3NyYy9saWIvdmlld2VyLWFwcC5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy92aWV3ZXIvc3JjL2xpYi92aWV3ZXItYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQ0FrQjtBQUNsQjtFQUNFLHNEQUFBO0FEQ0Y7QUNDQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURDRjtBQ0VBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FEQUY7QUNHQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FEREY7QUNJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBREZGO0FDS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBREhGO0FDTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FESkY7QUNPQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBRExGIiwiZmlsZSI6ImxpYnMvdmlld2VyL3NyYy9saWIvdmlld2VyLWFwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcbjpob3N0ICoge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG4uY3VycmVudC1wYWdlLW51bWJlciB7XG4gIG1hcmdpbjogMHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5NTlkYTU7XG59XG4ud3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5kb2MtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG4udGh1bWJuYWlscy1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzcHg7XG59XG4uZ2QtZG9jdW1lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnRvcC1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvb2xiYXItcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U0ZTVhO1xuICB3aWR0aDogMTAwJTtcbn1cbiIsIkBpbXBvcnQgKGNzcykgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcbjpob3N0ICoge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG4uY3VycmVudC1wYWdlLW51bWJlciB7XG4gIG1hcmdpbjogMHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5NTlkYTU7XG59XG5cbi53cmFwcGVyIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uZG9jLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4udGh1bWJuYWlscy1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzcHg7XG59XG5cbi5nZC1kb2N1bWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50b3AtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRvb2xiYXItcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U0ZTVhO1xuICB3aWR0aDogMTAwJTtcbn1cblxuIl19 */"

/***/ }),

/***/ "../../libs/viewer/src/lib/viewer-app.component.ts":
/*!**************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/viewer/src/lib/viewer-app.component.ts ***!
  \**************************************************************************************************************/
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
        this._modalService.close(modalId);
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
        this.zoom = $event;
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
/*!***************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/viewer/src/lib/viewer-config.service.ts ***!
  \***************************************************************************************************************/
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "../../libs/viewer/src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");







let ViewerConfigService = class ViewerConfigService {
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._viewerConfig = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](new _viewer_config__WEBPACK_IMPORTED_MODULE_2__["ViewerConfig"]());
        this._updatedConfig = this._viewerConfig.asObservable();
        _config.apiEndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
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
/*!*******************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/viewer/src/lib/viewer-config.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ViewerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerConfig", function() { return ViewerConfig; });
class ViewerConfig {
}


/***/ }),

/***/ "../../libs/viewer/src/lib/viewer.module.ts":
/*!*******************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/viewer/src/lib/viewer.module.ts ***!
  \*******************************************************************************************************/
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
/* harmony import */ var angular2_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-fontawesome */ "../../node_modules/angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var angular2_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _viewer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viewer.service */ "../../libs/viewer/src/lib/viewer.service.ts");
/* harmony import */ var _viewer_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./viewer-config.service */ "../../libs/viewer/src/lib/viewer-config.service.ts");
/* harmony import */ var _thumbnails_thumbnails_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./thumbnails/thumbnails.component */ "../../libs/viewer/src/lib/thumbnails/thumbnails.component.ts");











function initializeApp(viewerConfigService) {
    const result = () => viewerConfigService.load();
    return result;
}
let ViewerModule = class ViewerModule {
};
ViewerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_viewer_app_component__WEBPACK_IMPORTED_MODULE_4__["ViewerAppComponent"], _thumbnails_thumbnails_component__WEBPACK_IMPORTED_MODULE_9__["ThumbnailsComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["CommonComponentsModule"],
            angular2_fontawesome__WEBPACK_IMPORTED_MODULE_6__["Angular2FontawesomeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ],
        providers: [
            _viewer_service__WEBPACK_IMPORTED_MODULE_7__["ViewerService"],
            _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _viewer_config_service__WEBPACK_IMPORTED_MODULE_8__["ViewerConfigService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _groupdocs_examples_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptorService"],
                multi: true
            },
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                useFactory: initializeApp,
                deps: [_viewer_config_service__WEBPACK_IMPORTED_MODULE_8__["ViewerConfigService"]], multi: true
            }
        ]
    })
], ViewerModule);



/***/ }),

/***/ "../../libs/viewer/src/lib/viewer.service.ts":
/*!********************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/viewer/src/lib/viewer.service.ts ***!
  \********************************************************************************************************/
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

/***/ "../../node_modules/raw-loader/index.js!../../libs/viewer/src/lib/thumbnails/thumbnails.component.html":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/viewer/src/lib/thumbnails/thumbnails.component.html ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gd-thumbnails\">\n  <div class=\"gd-thumbnails-panzoom\">\n    <div *ngFor=\"let page of pages\" id=\"gd-thumbnails-page-{{page.number}}\" class=\"gd-page\"\n         (click)=\"openPage(page.number)\" gdRotation [withMargin]=\"false\"\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <div class=\"gd-wrapper\"\n           [style.width.pt]=\"page.width\"\n           [style.height.pt]=\"page.height\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && isHtmlMode\"\n           [innerHTML]=\"page.data | safeHtml\"></div>\n      <div class=\"gd-wrapper\" *ngIf=\"page.data && !isHtmlMode\">\n        <img style=\"width: inherit !important\" class=\"gd-page-image\" [attr.src]=\"imgData(page.data) | safeResourceHtml\"\n             alt/>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/viewer/src/lib/viewer-app.component.html":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/node_modules/raw-loader!/Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/viewer/src/lib/viewer-app.component.html ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'viewer'\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-select [disabled]=\"formatDisabled\" [options]=\"options\" (selected)=\"selectZoom($event)\"\n                 [showSelected]=\"zoom\" *ngIf=\"zoomConfig\" ></gd-select>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"\n                 *ngIf=\"zoomConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\"\n                 (click)=\"zoomOut()\" *ngIf=\"zoomConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-double-left'\" [tooltip]=\"'First Page'\"\n                 (click)=\"toFirstPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" [tooltip]=\"'Previous Page'\"\n                 (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <div class=\"current-page-number\">{{currentPage}}/{{countPages}}</div>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" [tooltip]=\"'Next Page'\"\n                 (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-double-right'\" [tooltip]=\"'Last Page'\"\n                 (click)=\"toLastPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Rotate CCW'\" (click)=\"rotate(-90)\"\n                 *ngIf=\"rotateConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Rotate CW'\" (click)=\"rotate(90)\"\n                 *ngIf=\"rotateConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                 (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                 *ngIf=\"printConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search'\" [tooltip]=\"'Search'\" (click)=\"openSearch()\"\n                 *ngIf=\"searchConfig\" ></gd-button>\n      <gd-search (hidePanel)=\"showSearch = !$event\" *ngIf=\"showSearch\" ></gd-search>\n\n      <gd-button class=\"thumbnails-button\" [disabled]=\"formatDisabled\" [icon]=\"'th-large'\" [tooltip]=\"'Thumbnails'\"\n                 (click)=\"openThumbnails()\" *ngIf=\"thumbnailsConfig && isDesktop\"></gd-button>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"doc-panel\" *ngIf=\"file\">\n    <gd-thumbnails *ngIf=\"showThumbnails\" [pages]=\"file.pages\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\"></gd-thumbnails>\n\n    <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"htmlModeConfig\"\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-document>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"''\" *ngIf=\"!file\"></gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!***********************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/node_modules/raw-loader!./src/app/app.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <a class=\"back\" [routerLink]=\"['']\" *ngIf=\"!total\">Back</a>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/total-nav/total-nav.component.html":
/*!***************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/node_modules/raw-loader!./src/app/total-nav/total-nav.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <ul>\n    <li>\n      <a [routerLink]=\"['/viewer']\"  >\n        <img src=\"assets/images/groupdocs-viewer.png\"/>\n        <div>\n          <h5>GroupDocs</h5>\n          <h6>Viewer</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a [routerLink]=\"['/signature']\" >\n        <img src=\"assets/images/groupdocs-signature.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Signature</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a [routerLink]=\"['/annotation']\" >\n        <img src=\"assets/images/groupdocs-annotation.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Annotation</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a [routerLink]=\"['/comparison']\" >\n        <img src=\"assets/images/groupdocs-comparison.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Comparison</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-conversion-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Conversion</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-metadata-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Metadata</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-search-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Search</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-text-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Text</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-watermark-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Watermark</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-editor-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Editor</h6>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"\">\n        <img src=\"assets/images/groupdocs-assembly-d.png\"/>\n        <div class=\"coming-soon\">\n          <h5>GroupDocs</h5>\n          <h6>Assembly</h6>\n        </div>\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/total-view/total-view.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/node_modules/raw-loader!./src/app/total-view/total-view.component.html ***!
  \*****************************************************************************************************************************************/
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

module.exports = "@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');\n:host * {\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n}\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvdG90YWwtYW5ndWxhci9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvYXBwcy90b3RhbC1hbmd1bGFyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQ0FrQjtBQUNsQjtFQUNFLHNEQUFBO0FEQ0Y7QUNDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBRENKIiwiZmlsZSI6ImFwcHMvdG90YWwtYW5ndWxhci9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcbjpob3N0ICoge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4iLCJAaW1wb3J0IChjc3MpIHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG46aG9zdCAqIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuIl19 */"

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
        selector: 'total-angular-root',
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








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _total_nav_total_nav_component__WEBPACK_IMPORTED_MODULE_3__["TotalNavComponent"], _total_view_total_view_component__WEBPACK_IMPORTED_MODULE_6__["TotalViewComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _groupdocs_examples_angular_viewer__WEBPACK_IMPORTED_MODULE_7__["ViewerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                { path: '', component: _total_view_total_view_component__WEBPACK_IMPORTED_MODULE_6__["TotalViewComponent"] },
                { path: 'viewer', component: _groupdocs_examples_angular_viewer__WEBPACK_IMPORTED_MODULE_7__["ViewerAppComponent"] },
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

module.exports = __webpack_require__(/*! /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/apps/total-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map