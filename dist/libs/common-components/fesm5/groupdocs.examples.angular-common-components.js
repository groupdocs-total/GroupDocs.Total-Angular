import { Component, EventEmitter, Input, Output, Injectable, ElementRef, ɵɵdefineInjectable, ɵɵinject, Pipe, Directive, HostBinding, HostListener, ViewChild, ViewEncapsulation, Inject, forwardRef, ComponentFactoryResolver, ApplicationRef, ViewContainerRef, Renderer2, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, fromEvent, Observable, BehaviorSubject, throwError } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith, tap, map, catchError, finalize, throttleTime, delay } from 'rxjs/operators';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { __extends, __values, __assign } from 'tslib';
import * as jquery from 'jquery';
import * as Hammer from 'hammerjs';
import { DomSanitizer } from '@angular/platform-browser';
import { ClickOutsideModule } from 'ng-click-outside';
import { TranslateModule } from '@ngx-translate/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TopToolbarComponent = /** @class */ (function () {
    function TopToolbarComponent() {
    }
    TopToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-top-toolbar',
                    template: "<div class=\"top-toolbar\">\n  <div id=\"tools\" class=\"tools\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: [".top-toolbar{width:100%;height:60px;z-index:999;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.tools{width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}@media (max-width:1037px){.top-toolbar{height:60px}.tools{height:100%;overflow-x:auto;overflow-scrolling:touch;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.tools::-webkit-scrollbar{width:0;height:0;background-color:#3e4e5a}}"]
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
        this.closable = true;
        this.saveable = true;
        this.hideSidePanel = new EventEmitter();
        this.saveInSidePanel = new EventEmitter();
        this.onlyTitle = false;
    }
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.closeSidePanel = /**
     * @return {?}
     */
    function () {
        this.hideSidePanel.emit(true);
    };
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.saveBySidePanel = /**
     * @return {?}
     */
    function () {
        this.saveInSidePanel.emit(true);
    };
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.toggleTitleMode = /**
     * @return {?}
     */
    function () {
        if (this.closable && !this.saveable) {
            this.onlyTitle = !this.onlyTitle;
        }
    };
    SidePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-side-panel',
                    template: "<div [ngClass]=\"{'only-title': onlyTitle}\" class=\"gd-side-panel-wrapper\">\n  <div class=\"gd-side-panel-header\" (click)=\"toggleTitleMode()\">\n    <fa-icon class=\"fas fa-info-circle icon\" [icon]=\"['fas',icon]\"></fa-icon>\n    <div class=\"title\">{{title}}</div>\n    <div class=\"save\" *ngIf=\"saveable\">\n      <gd-button class=\"fas fa-times\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"saveBySidePanel()\"></gd-button>\n    </div>\n    <div class=\"close\" *ngIf=\"closable\">\n      <gd-button class=\"fas fa-times\" [icon]=\"'times'\" [tooltip]=\"'Close'\" (click)=\"closeSidePanel()\"></gd-button>\n    </div>\n  </div>\n  <div *ngIf=\"!onlyTitle\" class=\"gd-side-panel-body\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: [".gd-side-panel-wrapper{margin-right:0;width:334px;z-index:999;background-color:#fff;-webkit-transition:margin-right .2s;transition:margin-right .2s;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;height:100vh}.gd-side-panel-wrapper .gd-side-panel-header{height:60px;background-color:#222e35;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:nowrap}.gd-side-panel-wrapper .gd-side-panel-header .icon{font-size:24px;color:#959da5;margin:18px;line-height:24px}.gd-side-panel-wrapper .gd-side-panel-header .title{font-size:13px;font-weight:700;color:#edf0f2;opacity:.57;margin-top:20px;width:100%}.gd-side-panel-wrapper .gd-side-panel-header .close,.gd-side-panel-wrapper .gd-side-panel-header .save{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.gd-side-panel-wrapper .gd-side-panel-header ::ng-deep gd-button .text{padding:0}.gd-side-panel-wrapper .gd-side-panel-body{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;overflow:visible;overflow-y:auto;overflow-x:hidden;height:100%}@media (max-width:1037px){.gd-side-panel-wrapper{width:100%;position:absolute;left:0;right:0;top:0;bottom:0}.gd-side-panel-wrapper.only-title{height:60px!important}}"]
                }] }
    ];
    /** @nocollapse */
    SidePanelComponent.ctorParameters = function () { return []; };
    SidePanelComponent.propDecorators = {
        title: [{ type: Input }],
        icon: [{ type: Input }],
        closable: [{ type: Input }],
        saveable: [{ type: Input }],
        hideSidePanel: [{ type: Output }],
        saveInSidePanel: [{ type: Output }]
    };
    return SidePanelComponent;
}());
if (false) {
    /** @type {?} */
    SidePanelComponent.prototype.title;
    /** @type {?} */
    SidePanelComponent.prototype.icon;
    /** @type {?} */
    SidePanelComponent.prototype.closable;
    /** @type {?} */
    SidePanelComponent.prototype.saveable;
    /** @type {?} */
    SidePanelComponent.prototype.hideSidePanel;
    /** @type {?} */
    SidePanelComponent.prototype.saveInSidePanel;
    /** @type {?} */
    SidePanelComponent.prototype.onlyTitle;
}

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
        this.resizeSubject = new Subject();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this._resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(200), distinctUntilChanged(), startWith({ target: { innerWidth: window.innerWidth, innerHeight: window.innerHeight } }), tap((/**
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    WindowService.prototype.resizeSubject;
    /**
     * @type {?}
     * @private
     */
    WindowService.prototype._resize$;
    /**
     * @type {?}
     * @private
     */
    WindowService.prototype.width;
    /**
     * @type {?}
     * @private
     */
    WindowService.prototype.height;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(windowService) {
        var _this = this;
        this.iconOnly = true;
        this.intent = 'default';
        this.disabled = false;
        this.toggle = false;
        this.iconRegular = false;
        this.elementPosition = 0;
        this.showToolTip = false;
        this.isDesktop = windowService.isDesktop();
        windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            _this.isDesktop = windowService.isDesktop();
        }));
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
        if (this.isDesktop && !this.disabled) {
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
        if (this.isDesktop && !this.disabled) {
            this.className = this.cleanAll(this.className, ' active');
        }
    };
    /**
     * @private
     * @param {?} str
     * @param {?} val
     * @return {?}
     */
    ButtonComponent.prototype.cleanAll = /**
     * @private
     * @param {?} str
     * @param {?} val
     * @return {?}
     */
    function (str, val) {
        while (str && str.indexOf(val) !== -1) {
            str = str.replace(val, '');
        }
        return str;
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-button',
                    template: "<div class=\"button {{intent}} {{iconButtonClass()}}\" [ngClass]=\"toggle ? className + ' gd-edit active' : className\"\n     gdTooltip (showToolTip)=\"showToolTip = $event\" (mouseenter)=\"onHovering()\"\n     (mouseleave)=\"onUnhovering()\" gdDisabledCursor [dis]=\"disabled\">\n  <fa-icon *ngIf=\"icon\" [icon]=\"[iconRegular ? 'far' : 'fas',icon]\" [size]=\"iconSize\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\" [position]=\"elementPosition\" class=\"button-tooltip\"></gd-tooltip>\n  <div class=\"text\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: [".icon-button{padding:0!important;margin:0 7px}.button{padding:0 10px;font-size:14px;color:#959da5;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;align-content:center;-webkit-box-pack:center;justify-content:center;min-width:37px;height:37px;text-align:center;position:relative;white-space:nowrap}.button.inactive{cursor:not-allowed;opacity:.4}.button.active *{color:#ccd0d4}.button.primary{background-color:#3e4e5a;color:#fff}.button.primary.active{color:#fff;background-color:#688296}.button.brand{background-color:#25c2d4;color:#fff}.button.brand.active{color:#fff;background-color:#688296}.button .text{font-size:13px;padding-left:10px}.button .button-tooltip{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}@media (max-width:1037px){.button{font-size:22px}.arrow-button{margin:5px}}"]
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return [
        { type: WindowService }
    ]; };
    ButtonComponent.propDecorators = {
        iconOnly: [{ type: Input }],
        intent: [{ type: Input }],
        disabled: [{ type: Input }],
        icon: [{ type: Input }],
        iconClass: [{ type: Input }],
        tooltip: [{ type: Input }],
        className: [{ type: Input }],
        toggle: [{ type: Input }],
        iconSize: [{ type: Input }],
        iconRegular: [{ type: Input }],
        elementPosition: [{ type: Input }]
    };
    return ButtonComponent;
}());
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.iconOnly;
    /** @type {?} */
    ButtonComponent.prototype.intent;
    /** @type {?} */
    ButtonComponent.prototype.disabled;
    /** @type {?} */
    ButtonComponent.prototype.icon;
    /** @type {?} */
    ButtonComponent.prototype.iconClass;
    /** @type {?} */
    ButtonComponent.prototype.tooltip;
    /** @type {?} */
    ButtonComponent.prototype.className;
    /** @type {?} */
    ButtonComponent.prototype.toggle;
    /** @type {?} */
    ButtonComponent.prototype.iconSize;
    /** @type {?} */
    ButtonComponent.prototype.iconRegular;
    /** @type {?} */
    ButtonComponent.prototype.elementPosition;
    /** @type {?} */
    ButtonComponent.prototype.showToolTip;
    /**
     * @type {?}
     * @private
     */
    ButtonComponent.prototype.isDesktop;
}

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
        { type: Component, args: [{
                    selector: 'gd-logo',
                    template: "<div id=\"gd-header-logo\" class=\"logo\">\n  <span class=\"text\" [innerHTML]=\"logo\"></span>\n  <fa-icon [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n</div>\n\n",
                    styles: [".logo{background-color:#25c2d4;height:60px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.text{color:#fff;font-size:15px;text-transform:uppercase;margin:0 14px}.icon{display:none;font-size:32px;color:rgba(255,255,255,.5);margin:14px}@media (max-width:1037px){.logo{width:60px;height:60px}.logo .text{display:none}.logo .icon{display:block}}"]
                }] }
    ];
    /** @nocollapse */
    LogoComponent.ctorParameters = function () { return []; };
    LogoComponent.propDecorators = {
        logo: [{ type: Input }],
        icon: [{ type: Input }]
    };
    return LogoComponent;
}());
if (false) {
    /** @type {?} */
    LogoComponent.prototype.logo;
    /** @type {?} */
    LogoComponent.prototype.icon;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
        this.position = 0;
        this.visibility = 'hidden';
    }
    /**
     * @return {?}
     */
    TooltipComponent.prototype.getClass = /**
     * @return {?}
     */
    function () {
        if (this.position === 0) {
            return 'tooltip';
        }
        return 'tooltip ' + (this.position > 0 ? 'last-element' : 'first-element');
    };
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
        { type: Component, args: [{
                    selector: 'gd-tooltip',
                    template: "<span [class]=\"getClass()\" [ngClass]=\"visibility\" [innerHTML]=\"text\"></span>\n",
                    styles: [".tooltip{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;background-color:#000;color:#fff;text-align:center;border-radius:0;padding:5px;z-index:1;font-size:10px;height:11px;line-height:11px;-ms-grid-row-align:center;align-self:center;margin:8px!important}.first-element{margin-left:10px!important}.last-element{margin-left:-10px!important}.tooltip.hidden{visibility:hidden}.tooltip.shown{visibility:visible}.shown:after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border:5px solid transparent;border-bottom-color:#000}"]
                }] }
    ];
    /** @nocollapse */
    TooltipComponent.ctorParameters = function () { return []; };
    TooltipComponent.propDecorators = {
        text: [{ type: Input }],
        position: [{ type: Input }],
        show: [{ type: Input }]
    };
    return TooltipComponent;
}());
if (false) {
    /** @type {?} */
    TooltipComponent.prototype.text;
    /** @type {?} */
    TooltipComponent.prototype.position;
    /** @type {?} */
    TooltipComponent.prototype.visibility;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Api = /** @class */ (function () {
    function Api() {
    }
    Api.VIEWER_APP = '/viewer';
    Api.SIGNATURE_APP = '/signature';
    Api.ANNOTATION_APP = '/annotation';
    Api.SEARCH_APP = '/search';
    Api.EDITOR_APP = '/editor';
    Api.COMPARISON_APP = '/comparison';
    Api.CONVERSION_APP = '/conversion';
    Api.METADATA_APP = '/metadata';
    Api.PARSER_APP = '/parser';
    Api.DEFAULT_API_ENDPOINT = window.location.protocol + "//" + window.location.host + window.location.pathname;
    Api.LOAD_FILE_TREE = '/loadFileTree';
    Api.LOAD_CONFIG = '/loadConfig';
    Api.LOAD_DOCUMENT_DESCRIPTION = '/loadDocumentDescription';
    Api.LOAD_DOCUMENT_PAGE = '/loadDocumentPage';
    Api.LOAD_DOCUMENT_PROPERTIES = '/loadProperties';
    Api.LOAD_DOCUMENT_PROPERTIES_NAMES = '/loadPropertiesNames';
    Api.SAVE_PROPERTY = '/saveProperty';
    Api.REMOVE_PROPERTY = '/removeProperty';
    Api.ROTATE_DOCUMENT_PAGE = '/rotateDocumentPages';
    Api.UPLOAD_DOCUMENTS = '/uploadDocument';
    Api.DOWNLOAD_DOCUMENTS = '/downloadDocument';
    Api.DOWNLOAD_ANNOTATED = '/downloadAnnotated';
    Api.LOAD_PRINT = '/loadPrint';
    Api.LOAD_PRINT_PDF = '/printPdf';
    Api.LOAD_THUMBNAILS = '/loadThumbnails';
    Api.LOAD_FORMATS = '/loadFormats';
    Api.SAVE_FILE = '/saveFile';
    Api.CREATE_FILE = '/createFile';
    Api.COMPARE_FILES = '/compare';
    Api.CONVERT_FILE = '/convert';
    Api.DELETE_SIGNATURE_FILE = '/deleteSignatureFile';
    Api.REMOVE_FROM_INDEX = '/removeFromIndex';
    Api.GET_FILE_STATUS = '/getFileStatus';
    Api.SAVE_OPTICAL_CODE = '/saveOpticalCode';
    Api.SAVE_TEXT = '/saveText';
    Api.SAVE_IMAGE = '/saveImage';
    Api.SAVE_STAMP = '/saveStamp';
    Api.SIGN = '/sign';
    Api.DOWNLOAD_SIGNED = '/downloadSigned';
    Api.LOAD_SIGNATURE_IMAGE = '/loadSignatureImage';
    Api.ANNOTATE = '/annotate';
    Api.SEARCH = '/search';
    Api.PARSE = '/parse';
    Api.ADD_FILES_TO_INDEX = '/addFilesToIndex';
    Api.CLEAN_METADATA = '/clean';
    Api.EXPORT_METADATA = '/export';
    Api.httpOptionsJson = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };
    Api.httpOptionsJsonResponseTypeBlob = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
        responseType: (/** @type {?} */ ('blob'))
    };
    return Api;
}());
if (false) {
    /** @type {?} */
    Api.VIEWER_APP;
    /** @type {?} */
    Api.SIGNATURE_APP;
    /** @type {?} */
    Api.ANNOTATION_APP;
    /** @type {?} */
    Api.SEARCH_APP;
    /** @type {?} */
    Api.EDITOR_APP;
    /** @type {?} */
    Api.COMPARISON_APP;
    /** @type {?} */
    Api.CONVERSION_APP;
    /** @type {?} */
    Api.METADATA_APP;
    /** @type {?} */
    Api.PARSER_APP;
    /** @type {?} */
    Api.DEFAULT_API_ENDPOINT;
    /** @type {?} */
    Api.LOAD_FILE_TREE;
    /** @type {?} */
    Api.LOAD_CONFIG;
    /** @type {?} */
    Api.LOAD_DOCUMENT_DESCRIPTION;
    /** @type {?} */
    Api.LOAD_DOCUMENT_PAGE;
    /** @type {?} */
    Api.LOAD_DOCUMENT_PROPERTIES;
    /** @type {?} */
    Api.LOAD_DOCUMENT_PROPERTIES_NAMES;
    /** @type {?} */
    Api.SAVE_PROPERTY;
    /** @type {?} */
    Api.REMOVE_PROPERTY;
    /** @type {?} */
    Api.ROTATE_DOCUMENT_PAGE;
    /** @type {?} */
    Api.UPLOAD_DOCUMENTS;
    /** @type {?} */
    Api.DOWNLOAD_DOCUMENTS;
    /** @type {?} */
    Api.DOWNLOAD_ANNOTATED;
    /** @type {?} */
    Api.LOAD_PRINT;
    /** @type {?} */
    Api.LOAD_PRINT_PDF;
    /** @type {?} */
    Api.LOAD_THUMBNAILS;
    /** @type {?} */
    Api.LOAD_FORMATS;
    /** @type {?} */
    Api.SAVE_FILE;
    /** @type {?} */
    Api.CREATE_FILE;
    /** @type {?} */
    Api.COMPARE_FILES;
    /** @type {?} */
    Api.CONVERT_FILE;
    /** @type {?} */
    Api.DELETE_SIGNATURE_FILE;
    /** @type {?} */
    Api.REMOVE_FROM_INDEX;
    /** @type {?} */
    Api.GET_FILE_STATUS;
    /** @type {?} */
    Api.SAVE_OPTICAL_CODE;
    /** @type {?} */
    Api.SAVE_TEXT;
    /** @type {?} */
    Api.SAVE_IMAGE;
    /** @type {?} */
    Api.SAVE_STAMP;
    /** @type {?} */
    Api.SIGN;
    /** @type {?} */
    Api.DOWNLOAD_SIGNED;
    /** @type {?} */
    Api.LOAD_SIGNATURE_IMAGE;
    /** @type {?} */
    Api.ANNOTATE;
    /** @type {?} */
    Api.SEARCH;
    /** @type {?} */
    Api.PARSE;
    /** @type {?} */
    Api.ADD_FILES_TO_INDEX;
    /** @type {?} */
    Api.CLEAN_METADATA;
    /** @type {?} */
    Api.EXPORT_METADATA;
    /** @type {?} */
    Api.httpOptionsJson;
    /** @type {?} */
    Api.httpOptionsJsonResponseTypeBlob;
}
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
    ConfigService.prototype.getMetadataApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.trim().endsWith(Api.METADATA_APP) ? this._apiEndpoint : this._apiEndpoint + Api.METADATA_APP;
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
    /**
     * @return {?}
     */
    ConfigService.prototype.getAnnotationApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.endsWith(Api.ANNOTATION_APP) ? this._apiEndpoint : this._apiEndpoint + Api.ANNOTATION_APP;
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getSearchApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.endsWith(Api.SEARCH_APP) ? this._apiEndpoint : this._apiEndpoint + Api.SEARCH_APP;
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getParserApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.endsWith(Api.PARSER_APP) ? this._apiEndpoint : this._apiEndpoint + Api.PARSER_APP;
    };
    ConfigService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return []; };
    return ConfigService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype._apiEndpoint;
}

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
    CommonModals.InformationMessage = "gd-information-message";
    return CommonModals;
}());
if (false) {
    /** @type {?} */
    CommonModals.PasswordRequired;
    /** @type {?} */
    CommonModals.ErrorMessage;
    /** @type {?} */
    CommonModals.BrowseFiles;
    /** @type {?} */
    CommonModals.CreateDocument;
    /** @type {?} */
    CommonModals.OperationSuccess;
    /** @type {?} */
    CommonModals.DrawHandSignature;
    /** @type {?} */
    CommonModals.DrawStampSignature;
    /** @type {?} */
    CommonModals.InformationMessage;
}
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.modals;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.visible = new EventEmitter();
        this.cancel = new EventEmitter();
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
    /**
     * @return {?}
     */
    ModalComponent.prototype.cancelClose = /**
     * @return {?}
     */
    function () {
        this.cancel.emit(false);
        this.close();
    };
    ModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-modal',
                    template: "<div class=\"gd-modal fade\" id=\"modalDialog\" (click)=\"onClose($event);\" *ngIf=\"visibility\">\n</div>\n<div class=\"gd-modal-dialog\" *ngIf=\"visibility\">\n  <div class=\"gd-modal-content\" id=\"gd-modal-content\">\n\n    <div class=\"gd-modal-header\">\n      <div class=\"gd-modal-close\" (click)=\"cancelClose();\"><span>&times;</span></div>\n      <h4 class=\"gd-modal-title\">{{title}}</h4>\n    </div>\n\n    <div class=\"gd-modal-body\">\n      <ng-content></ng-content>\n    </div>\n\n    <div class=\"gd-modal-footer\">\n\n    </div>\n  </div>\n</div>\n\n\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.gd-modal{overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0;background-color:rgba(0,0,0,.5)}.gd-modal-dialog{box-shadow:#0005 0 0 10px;position:fixed;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-height:95%;overflow:scroll;z-index:1051}.gd-modal-dialog ::ng-deep .button{-webkit-box-orient:unset!important;-webkit-box-direction:unset!important;flex-direction:unset!important}.gd-modal-content{background-color:#fff;height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.gd-modal-header{height:60px;padding:0 12px 0 24px;background-color:#3e4e5a}.gd-modal-close{position:absolute;right:12px;top:12px;cursor:pointer;color:#fff;width:37px;height:37px;text-align:center}.gd-modal-close span{font-size:18px;font-weight:900;height:19px;width:10px;line-height:36px}.gd-modal-title{font-size:16px;font-weight:400;padding-top:17px;padding-bottom:22px;margin:0;color:#fff}.gd-modal-body{background-color:#fff;overflow:hidden;overflow-y:auto;height:calc(100% - 75px)}.gd-modal-footer{height:auto}.gd-modal-footer>.btn{float:right;margin:20px 15px;padding:10px 20px;cursor:pointer;font-size:12px}@media (max-width:1037px){.gd-modal-dialog{width:100%;height:100%}.gd-modal-body{height:100%}}"]
                }] }
    ];
    /** @nocollapse */
    ModalComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: ElementRef }
    ]; };
    ModalComponent.propDecorators = {
        id: [{ type: Input }],
        title: [{ type: Input }],
        visible: [{ type: Output }],
        cancel: [{ type: Output }]
    };
    return ModalComponent;
}());
if (false) {
    /** @type {?} */
    ModalComponent.prototype.id;
    /** @type {?} */
    ModalComponent.prototype.title;
    /** @type {?} */
    ModalComponent.prototype.visible;
    /** @type {?} */
    ModalComponent.prototype.cancel;
    /** @type {?} */
    ModalComponent.prototype.visibility;
    /**
     * @type {?}
     * @private
     */
    ModalComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    ModalComponent.prototype.modalService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageModel = /** @class */ (function () {
    function PageModel() {
    }
    return PageModel;
}());
if (false) {
    /** @type {?} */
    PageModel.prototype.data;
    /** @type {?} */
    PageModel.prototype.angle;
    /** @type {?} */
    PageModel.prototype.width;
    /** @type {?} */
    PageModel.prototype.height;
    /** @type {?} */
    PageModel.prototype.number;
    /** @type {?} */
    PageModel.prototype.editable;
}
var RotatedPage = /** @class */ (function () {
    function RotatedPage() {
    }
    return RotatedPage;
}());
if (false) {
    /** @type {?} */
    RotatedPage.prototype.pageNumber;
    /** @type {?} */
    RotatedPage.prototype.angle;
}
var FileCredentials = /** @class */ (function () {
    function FileCredentials(guid, password) {
        this.guid = guid;
        this.password = password;
    }
    return FileCredentials;
}());
if (false) {
    /** @type {?} */
    FileCredentials.prototype.guid;
    /** @type {?} */
    FileCredentials.prototype.password;
}
var TypedFileCredentials = /** @class */ (function () {
    function TypedFileCredentials(guid, fileType, password) {
        this.guid = guid;
        this.fileType = fileType;
        this.password = password;
    }
    return TypedFileCredentials;
}());
if (false) {
    /** @type {?} */
    TypedFileCredentials.prototype.guid;
    /** @type {?} */
    TypedFileCredentials.prototype.password;
    /** @type {?} */
    TypedFileCredentials.prototype.fileType;
}
var SaveFile = /** @class */ (function (_super) {
    __extends(SaveFile, _super);
    function SaveFile(guid, password, content, pageNumber) {
        var _this = _super.call(this, guid, password) || this;
        _this.content = content;
        _this.pageNumber = pageNumber;
        return _this;
    }
    return SaveFile;
}(FileCredentials));
if (false) {
    /** @type {?} */
    SaveFile.prototype.content;
    /** @type {?} */
    SaveFile.prototype.pageNumber;
}
var FileDescription = /** @class */ (function () {
    function FileDescription() {
        this.printAllowed = true;
    }
    return FileDescription;
}());
if (false) {
    /** @type {?} */
    FileDescription.prototype.guid;
    /** @type {?} */
    FileDescription.prototype.fileType;
    /** @type {?} */
    FileDescription.prototype.pages;
    /** @type {?} */
    FileDescription.prototype.printAllowed;
    /** @type {?} */
    FileDescription.prototype.showGridLines;
    /** @type {?} */
    FileDescription.prototype.thumbnails;
    /** @type {?} */
    FileDescription.prototype.searchTerm;
}
var FileModel = /** @class */ (function () {
    function FileModel() {
    }
    return FileModel;
}());
if (false) {
    /** @type {?} */
    FileModel.prototype.guid;
    /** @type {?} */
    FileModel.prototype.name;
    /** @type {?} */
    FileModel.prototype.directory;
    /** @type {?} */
    FileModel.prototype.size;
    /** @type {?} */
    FileModel.prototype.isDirectory;
}
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
if (false) {
    /** @type {?} */
    HttpError.BadRequest;
    /** @type {?} */
    HttpError.Unauthorized;
    /** @type {?} */
    HttpError.Forbidden;
    /** @type {?} */
    HttpError.NotFound;
    /** @type {?} */
    HttpError.TimeOut;
    /** @type {?} */
    HttpError.Conflict;
    /** @type {?} */
    HttpError.InternalServerError;
}
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
    /**
     * @param {?} color
     * @return {?}
     */
    Utils.toRgb = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        /** @type {?} */
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
        if (result) {
            /** @type {?} */
            var r = parseInt(result[1], 16);
            /** @type {?} */
            var g = parseInt(result[2], 16);
            /** @type {?} */
            var b = parseInt(result[3], 16);
            return result ? 'rgb(' + r + ',' + g + ',' + b + ')' : '';
        }
        return color;
    };
    /**
     * @param {?} color
     * @return {?}
     */
    Utils.toHex = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        // check if color is standard hex value
        if (color.match(/[0-9A-F]{6}|[0-9A-F]{3}$/i)) {
            return (color.charAt(0) === "#") ? color : ("#" + color);
            // check if color is RGB value -> convert to hex
        }
        else if (color.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/)) {
            /** @type {?} */
            var c = ([parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10), parseInt(RegExp.$3, 10)]);
            /** @type {?} */
            var pad = (/**
             * @param {?} str
             * @return {?}
             */
            function (str) {
                if (str.length < 2) {
                    for (var i = 0, len = 2 - str.length; i < len; i++) {
                        str = '0' + str;
                    }
                }
                return str;
            });
            if (c.length === 3) {
                /** @type {?} */
                var r = pad(c[0].toString(16));
                /** @type {?} */
                var g = pad(c[1].toString(16));
                /** @type {?} */
                var b = pad(c[2].toString(16));
                return '#' + r + g + b;
            }
            // else do nothing
        }
        else {
            return '';
        }
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
if (false) {
    /** @type {?} */
    FileUtil.map;
}
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
        this._uploadsChange = new Observable((/**
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    UploadFilesService.prototype._uploadsChange;
    /**
     * @type {?}
     * @private
     */
    UploadFilesService.prototype._observer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $ = jquery;
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
        this.selectedFileGuid = new EventEmitter();
        this.selectedDirectory = new EventEmitter();
        this.urlForUpload = new EventEmitter();
        this.closing = new EventEmitter();
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
        return this.getSizeValue(size) + ' ' + this.getSizeUnits(size);
    };
    /**
     * @param {?} size
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.getSizeValue = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        /** @type {?} */
        var mb = size / 1024 / 1024;
        if (mb > 1) {
            return (Math.round(mb * 100) / 100);
        }
        else {
            /** @type {?} */
            var kb = size / 1024;
            if (kb > 1) {
                return (Math.round(kb * 100) / 100);
            }
        }
        return size;
    };
    /**
     * @param {?} size
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.getSizeUnits = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        /** @type {?} */
        var mb = size / 1024 / 1024;
        if (mb > 1) {
            return 'MB';
        }
        else {
            /** @type {?} */
            var kb = size / 1024;
            if (kb > 1) {
                return 'KB';
            }
        }
        return 'Bytes';
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
            /** @type {?} */
            var prevDir = new FileModel();
            prevDir.name = guid;
            prevDir.guid = guid;
            prevDir.directory = true;
            prevDir.isDirectory = true;
            this.selectedFile = prevDir;
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
        { type: Component, args: [{
                    selector: 'gd-browse-files-modal',
                    template: "<gd-modal id=\"gd-browse-files\" title=\"{{'Open document' | translate }}\" (visible)=\"refresh($event)\">\n  <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\n    <div class=\"dnd-wrapper\">\n      <fa-icon class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\n      <span class=\"text\">{{'Drop file here to upload' | translate}}</span>\n    </div>\n  </div>\n  <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n    <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\n            (change)=\"handleFileInput($event.target.files)\">\n    <div class=\"context\">\n      <div class=\"context-actions\">\n        <gd-drop-down>\n          <gd-drop-down-toggle>\n            <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\n              {{'Upload file' | translate}}\n            </gd-button>\n          </gd-drop-down-toggle>\n          <gd-drop-down-items>\n            <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\n              <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\n              <div class=\"text\">{{item.name | translate}}</div>\n            </gd-drop-down-item>\n          </gd-drop-down-items>\n        </gd-drop-down>\n      </div>\n      <div class=\"context-panel\" *ngIf=\"showUploadUrl\">\n        <div class=\"upload-url\">\n          <input class=\"url-input\" placeholder=\"https://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n          <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"list-files-header\" [ngClass]=\"{'upload-url': showUploadUrl}\">\n    <div class=\"header-name\">{{'FILE' | translate }}</div>\n    <div class=\"header-size\">{{'SIZE' | translate }}</div>\n  </div>\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-body\">\n        <div class=\"go-up\" (click)=\"goUp()\">\n            <div class=\"go-up-icon\">\n                <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n            </div>\n            <div class=\"go-up-dots\">..</div>\n        </div>\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n          <div class=\"file-description\">\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n            <div class=\"file-name-format\">\n              <div class=\"file-name\">{{file?.name}}</div>\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\n            </div>\n          </div>\n          <div class=\"file-size\">\n            {{getSizeValue(file?.size)}} {{getSizeUnits(file?.size) | translate}}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;{{'Loading... Please wait.' | translate}}\n    </div>\n  </section>\n</gd-modal>\n",
                    styles: [".gd-modal-table{width:100%;text-align:left}#gd-browse-section{width:1036px;height:561px;overflow-y:auto}.list-files-header{height:60px;color:#6e6e6e;font-size:13px;font-weight:700;background-color:#f4f4f4;margin-top:24px}.list-files-header.upload-url{margin-top:20px}.header-name{padding-left:24px;width:90%;line-height:60px}.header-size{padding-right:27px;line-height:60px}.file-size,.header-size{width:10%;color:#777;text-align:right}.file-description{display:-webkit-box;display:flex;width:90%;padding:18px 0 18px 24px;font-size:14px;-webkit-box-flex:1;flex:1;cursor:pointer;overflow:hidden}.file-size{font-size:12px;padding:0 27px 0 0;width:10%;line-height:79px}.list-files-header,.list-files-lines{display:-webkit-box;display:flex;width:100%;-webkit-box-pack:justify;justify-content:space-between}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{display:-webkit-box;display:flex;font-size:26px;cursor:pointer;color:#4b566c;height:79px}.go-up-dots{margin-left:20px;margin-top:22px;font-size:16px}.go-up-icon{display:block;padding:18px 0 18px 24px}.upload-panel{display:-webkit-box;display:flex;position:relative;width:100%}.upload-panel .context{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;margin-left:24px;margin-top:24px;margin-right:24px}.upload-panel .context .context-actions{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-actions :last-child{margin-right:0}.upload-panel .context .context-actions ::ng-deep .button{height:37px;padding:0 10px;-webkit-box-pack:center;justify-content:center}.upload-panel .context .context-actions ::ng-deep .button ::ng-deep .text{font-size:10px}.upload-panel .context .context-panel{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%;margin-top:20px}.upload-panel .context .context-panel .upload-url{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-panel .upload-url .url-input{width:100%;height:27px;border:1px solid #25c2d4;font-size:14px;padding-left:6px}.upload-panel .context .context-panel .upload-url .url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.upload-panel .context .context-panel .upload-url .url-check .ng-fa-icon{display:block;padding:8px}.upload-panel gd-drop-down{margin-right:10px}.file-description .ng-fa-icon.fa-file-pdf{color:#e04e4e}.file-description .ng-fa-icon.fa-file-word{color:#539cf0}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29e1e}.file-description .ng-fa-icon.fa-file-excel{color:#7cbc46}.file-description .ng-fa-icon.fa-file-image{color:#c375ed}.file-description .ng-fa-icon.fa-file,.file-description .ng-fa-icon.fa-file-alt,.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#4b566c}.file-description .ng-fa-icon{font-size:32px}.file-name{font-size:16px;color:#6e6e6e;overflow:hidden;text-overflow:ellipsis}.file-name-format{padding-left:11px;overflow:hidden}.file-format{font-size:10px;padding-top:3px;color:#acacac}.go-up,.list-files-lines{border-bottom:1px solid #e7e7e7}.list-files-lines:hover{background-color:#e5e5e5}.gd-dnd-wrap{background-color:#fff;cursor:default;position:absolute;width:100%;height:calc(100% - 60px);background:rgba(255,255,255,.7);z-index:1;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.dnd-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;top:259px;position:absolute}.dnd-wrapper .text{color:#6e6e6e;font-size:14px}.dnd-wrapper .icon{display:-webkit-box;display:flex;width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}@media (max-width:1037px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}#gd-browse-section{width:100%;height:calc(100% - 146px)}}"]
                }] }
    ];
    /** @nocollapse */
    BrowseFilesModalComponent.ctorParameters = function () { return [
        { type: UploadFilesService }
    ]; };
    BrowseFilesModalComponent.propDecorators = {
        files: [{ type: Input }],
        uploadConfig: [{ type: Input }],
        selectedFileGuid: [{ type: Output }],
        selectedDirectory: [{ type: Output }],
        urlForUpload: [{ type: Output }],
        closing: [{ type: Output }]
    };
    return BrowseFilesModalComponent;
}());
if (false) {
    /** @type {?} */
    BrowseFilesModalComponent.prototype.uploads;
    /** @type {?} */
    BrowseFilesModalComponent.prototype.files;
    /** @type {?} */
    BrowseFilesModalComponent.prototype.uploadConfig;
    /** @type {?} */
    BrowseFilesModalComponent.prototype.selectedFileGuid;
    /** @type {?} */
    BrowseFilesModalComponent.prototype.selectedDirectory;
    /** @type {?} */
    BrowseFilesModalComponent.prototype.urlForUpload;
    /** @type {?} */
    BrowseFilesModalComponent.prototype.closing;
    /**
     * @type {?}
     * @private
     */
    BrowseFilesModalComponent.prototype.selectedFile;
    /** @type {?} */
    BrowseFilesModalComponent.prototype.showUploadUrl;
    /** @type {?} */
    BrowseFilesModalComponent.prototype.showUploadFile;
    /**
     * @type {?}
     * @private
     */
    BrowseFilesModalComponent.prototype._uploadService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ZoomService = /** @class */ (function () {
    function ZoomService() {
        this._observer = new Subject();
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    ZoomService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    ZoomService.prototype._zoomChange;
    /**
     * @type {?}
     * @private
     */
    ZoomService.prototype._zoom;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PagePreloadService = /** @class */ (function () {
    function PagePreloadService() {
        var _this = this;
        this._checkPreload = new Observable((/**
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagePreloadService.prototype._checkPreload;
    /**
     * @type {?}
     * @private
     */
    PagePreloadService.prototype._observer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavigateService = /** @class */ (function () {
    function NavigateService(_pagePreloadService) {
        this._pagePreloadService = _pagePreloadService;
        this._currentPage = 0;
        this._countPages = 0;
        this._observer = new Subject();
        this._navigate = this._observer;
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NavigateService.ctorParameters = function () { return [
        { type: PagePreloadService }
    ]; };
    /** @nocollapse */ NavigateService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NavigateService_Factory() { return new NavigateService(ɵɵinject(PagePreloadService)); }, token: NavigateService, providedIn: "root" });
    return NavigateService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NavigateService.prototype._currentPage;
    /**
     * @type {?}
     * @private
     */
    NavigateService.prototype._countPages;
    /**
     * @type {?}
     * @private
     */
    NavigateService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    NavigateService.prototype._navigate;
    /**
     * @type {?}
     * @private
     */
    NavigateService.prototype._pagePreloadService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $$1 = jquery;
var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(_elementRef, _zoomService, _windowService, _navigateService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this._navigateService = _navigateService;
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
        this._navigateService.navigate.subscribe((((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.selectedPage = value;
        }))));
    }
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.ifPresentation()) {
            this.selectedPage = this._navigateService.currentPage;
        }
    };
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
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
        var hammer = new Hammer(this.container);
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
     * @return {?}
     */
    DocumentComponent.prototype.ifPresentation = /**
     * @return {?}
     */
    function () {
        return FileUtil.find(this.file.guid, false).format === "Microsoft PowerPoint";
    };
    /**
     * @param {?} value
     * @param {?} pageNumber
     * @return {?}
     */
    DocumentComponent.prototype.getDimensionWithUnit = /**
     * @param {?} value
     * @param {?} pageNumber
     * @return {?}
     */
    function (value, pageNumber) {
        return this.ifPresentation() && this.showActiveSlide && !this.isVisible(pageNumber) ? 0 : value + (this.mode ? FileUtil.find(this.file.guid, false).unit : 'px');
    };
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ifEdge = /**
     * @return {?}
     */
    function () {
        return navigator.userAgent.toLowerCase().indexOf('edge') > -1;
    };
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        // for now we are not sure that need this action in current implementation
        // const elementNodeListOf = this._elementRef.nativeElement.querySelectorAll('.gd-wrapper');
        // const element = elementNodeListOf.item(0);
        // if (element) {
        //   $(element).trigger('focus');
        // }
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    DocumentComponent.prototype.isVisible = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        if (this.ifPresentation()) {
            return pageNumber === this.selectedPage ? true : false;
        }
        else {
            return true;
        }
    };
    DocumentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-document',
                    template: "<div class=\"wait\" *ngIf=\"wait\">{{'Please wait...' | translate}}</div>\n<div id=\"document\" class=\"document\">\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\n    <div [ngClass]=\"ifExcel() ? 'page excel' : ifPresentation() && showActiveSlide ? (isVisible(page.number) ? 'page presentation active' : 'page presentation') : 'page'\" \n      *ngFor=\"let page of file?.pages\"\n      [style.height]=\"getDimensionWithUnit(page.height, page.number)\" [style.width]=\"getDimensionWithUnit(page.width, page.number)\" gdRotation\n      [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page *ngIf=\"!showActiveSlide || isVisible(page.number)\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\" [width]=\"page.width\"\n        [height]=\"page.height\" [editable]=\"page.editable\" gdPageMarker></gd-page>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                    styles: [":host{-webkit-box-flex:1;flex:1;-webkit-transition:.4s;transition:.4s;background-color:#e7e7e7;height:100%;overflow:scroll;touch-action:auto!important}:host .document{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important;touch-action:auto!important}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);-webkit-transition:.3s;transition:.3s}.page.excel{overflow:auto}.page.presentation{margin:0;-webkit-transition:unset;transition:unset}.page.presentation.active{margin:20px}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:wrap;-webkit-box-pack:center;justify-content:center;align-content:flex-start}@media (max-width:1037px){.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
                }] }
    ];
    /** @nocollapse */
    DocumentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ZoomService },
        { type: WindowService },
        { type: NavigateService }
    ]; };
    DocumentComponent.propDecorators = {
        mode: [{ type: Input }],
        preloadPageCount: [{ type: Input }],
        file: [{ type: Input }],
        selectedPage: [{ type: Input }],
        showActiveSlide: [{ type: Input }]
    };
    return DocumentComponent;
}());
if (false) {
    /** @type {?} */
    DocumentComponent.prototype.mode;
    /** @type {?} */
    DocumentComponent.prototype.preloadPageCount;
    /** @type {?} */
    DocumentComponent.prototype.file;
    /** @type {?} */
    DocumentComponent.prototype.selectedPage;
    /** @type {?} */
    DocumentComponent.prototype.showActiveSlide;
    /** @type {?} */
    DocumentComponent.prototype.wait;
    /** @type {?} */
    DocumentComponent.prototype.zoom;
    /** @type {?} */
    DocumentComponent.prototype.docWidth;
    /** @type {?} */
    DocumentComponent.prototype.docHeight;
    /** @type {?} */
    DocumentComponent.prototype.viewportWidth;
    /** @type {?} */
    DocumentComponent.prototype.viewportHeight;
    /** @type {?} */
    DocumentComponent.prototype.scale;
    /** @type {?} */
    DocumentComponent.prototype.lastScale;
    /** @type {?} */
    DocumentComponent.prototype.container;
    /** @type {?} */
    DocumentComponent.prototype.doc;
    /** @type {?} */
    DocumentComponent.prototype.x;
    /** @type {?} */
    DocumentComponent.prototype.lastX;
    /** @type {?} */
    DocumentComponent.prototype.y;
    /** @type {?} */
    DocumentComponent.prototype.lastY;
    /** @type {?} */
    DocumentComponent.prototype.pinchCenter;
    /** @type {?} */
    DocumentComponent.prototype.pinchCenterOffset;
    /** @type {?} */
    DocumentComponent.prototype.curWidth;
    /** @type {?} */
    DocumentComponent.prototype.curHeight;
    /** @type {?} */
    DocumentComponent.prototype.isDesktop;
    /**
     * @type {?}
     * @protected
     */
    DocumentComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    DocumentComponent.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    DocumentComponent.prototype._windowService;
    /**
     * @type {?}
     * @private
     */
    DocumentComponent.prototype._navigateService;
}

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
        var isIE = /*@cc_on!@*/ false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
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
        if (this.isHtml) {
            // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
            // which leads to undesired spaces on the top of the docs pages
            this.data = this.data
                ? this.data.replace(/>\s+</g, '><')
                    .replace(/\uFEFF/g, "")
                : null;
        }
        else {
            if (this.data) {
                this.imgData = this.data.startsWith('data:image') ? this.data : 'data:image/png;base64,' + this.data;
            }
        }
    };
    PageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-page',
                    template: "<div id=\"page-{{number}}\" gdHostDynamic [ident]=\"number\">\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\" [contentEditable]=\"(editable) ? true : false\"\n      gdEditor [text]=\"data\"></div>\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\n       alt=\"\"\n       *ngIf=\"data && !isHtml\">\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n    &nbsp;{{'Loading... Please wait.' | translate}}\n  </div>\n</div>\n",
                    styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper div{width:100%}::ng-deep .gd-highlight{background-color:#ff0}::ng-deep .gd-highlight-select{background-color:#ff9b00}"]
                }] }
    ];
    /** @nocollapse */
    PageComponent.ctorParameters = function () { return []; };
    PageComponent.propDecorators = {
        angle: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        number: [{ type: Input }],
        data: [{ type: Input }],
        isHtml: [{ type: Input }],
        editable: [{ type: Input }]
    };
    return PageComponent;
}());
if (false) {
    /** @type {?} */
    PageComponent.prototype.angle;
    /** @type {?} */
    PageComponent.prototype.width;
    /** @type {?} */
    PageComponent.prototype.height;
    /** @type {?} */
    PageComponent.prototype.number;
    /** @type {?} */
    PageComponent.prototype.data;
    /** @type {?} */
    PageComponent.prototype.isHtml;
    /** @type {?} */
    PageComponent.prototype.editable;
    /** @type {?} */
    PageComponent.prototype.imgData;
}

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
        { type: Pipe, args: [{ name: 'safeHtml' },] }
    ];
    /** @nocollapse */
    SanitizeHtmlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return SanitizeHtmlPipe;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SanitizeHtmlPipe.prototype.sanitizer;
}
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
        { type: Pipe, args: [{ name: 'safeResourceHtml' },] }
    ];
    /** @nocollapse */
    SanitizeResourceHtmlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return SanitizeResourceHtmlPipe;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SanitizeResourceHtmlPipe.prototype.sanitizer;
}
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
        { type: Pipe, args: [{ name: 'safeStyle' },] }
    ];
    /** @nocollapse */
    SanitizeStylePipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return SanitizeStylePipe;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SanitizeStylePipe.prototype.sanitizer;
}
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
        { type: Pipe, args: [{ name: 'highlight' },] }
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
        this.closeUpload = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'gd-upload-file-zone',
                    template: "<div class=\"gd-drag-n-drop-wrap\" id=\"gd-dropZone\" gdDnd (closing)=\"onCloseUpload()\" (click)=\"close($event)\">\n  <div class=\"gd-drag-n-drop-icon\">\n    <fa-icon [icon]=\"['fas','cloud-download-alt']\" size=\"5x\"></fa-icon>\n  </div>\n  <h2>Drag &amp; Drop your files here</h2>\n  <h4>OR</h4>\n  <div class=\"gd-drag-n-drop-buttons\">\n    <label class=\"btn btn-primary\"> \n      <fa-icon [icon]=\"['fas','file']\"></fa-icon>\n      SELECT FILE\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      </label>\n  </div>\n</div>\n",
                    styles: [".gd-drag-n-drop-wrap{border:2px dashed #ccc;background-color:#f8f8f8;text-align:center;cursor:default;position:absolute;width:-webkit-fill-available;left:1px;display:-webkit-box;display:flex;align-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;opacity:.9;z-index:1}.gd-drag-n-drop-wrap h2{color:#959da5;margin:5px 0;font-size:15px;font-weight:300}.gd-drag-n-drop-wrap h4{color:#cacaca;font-weight:300;font-size:12px;margin:10px 0 15px}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-drag-n-drop-buttons i{margin-right:5px}.gd-drag-n-drop-buttons .btn{width:134px;height:35px;margin:0 10px;font-size:12px;font-weight:400}.gd-drag-n-drop-wrap.hover{background:#ddd;border-color:#aaa}"]
                }] }
    ];
    /** @nocollapse */
    UploadFileZoneComponent.ctorParameters = function () { return [
        { type: UploadFilesService }
    ]; };
    UploadFileZoneComponent.propDecorators = {
        closeUpload: [{ type: Output }]
    };
    return UploadFileZoneComponent;
}());
if (false) {
    /** @type {?} */
    UploadFileZoneComponent.prototype.closeUpload;
    /**
     * @type {?}
     * @private
     */
    UploadFileZoneComponent.prototype._uploadService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DndDirective = /** @class */ (function () {
    function DndDirective(_uploadFilesService) {
        this._uploadFilesService = _uploadFilesService;
        this.closing = new EventEmitter();
        this.opening = new EventEmitter();
        this.dropped = new EventEmitter();
        this.active = false;
        this.dragCounter = 0;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    DndDirective.prototype.onDragEnter = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.dragCounter++;
        this.active = true;
        this.opening.emit(true);
    };
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
        return false;
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
        this.dragCounter--;
        if (this.dragCounter === 0) {
            this.active = false;
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
        { type: Directive, args: [{
                    selector: '[gdDnd]'
                },] }
    ];
    /** @nocollapse */
    DndDirective.ctorParameters = function () { return [
        { type: UploadFilesService }
    ]; };
    DndDirective.propDecorators = {
        closing: [{ type: Output }],
        opening: [{ type: Output }],
        dropped: [{ type: Output }],
        active: [{ type: HostBinding, args: ['class.active',] }],
        onDragEnter: [{ type: HostListener, args: ['dragenter', ['$event'],] }],
        onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }],
        onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return DndDirective;
}());
if (false) {
    /** @type {?} */
    DndDirective.prototype.closing;
    /** @type {?} */
    DndDirective.prototype.opening;
    /** @type {?} */
    DndDirective.prototype.dropped;
    /** @type {?} */
    DndDirective.prototype.active;
    /**
     * @type {?}
     * @private
     */
    DndDirective.prototype.dragCounter;
    /**
     * @type {?}
     * @protected
     */
    DndDirective.prototype._uploadFilesService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $$2 = jquery;
var ViewportService = /** @class */ (function () {
    function ViewportService() {
    }
    /**
     * @param {?} elem
     * @param {?=} parent
     * @return {?}
     */
    ViewportService.prototype.isBelowCenterOfTheScreen = /**
     * @param {?} elem
     * @param {?=} parent
     * @return {?}
     */
    function (elem, parent) {
        /** @type {?} */
        var rect = elem.getBoundingClientRect();
        /** @type {?} */
        var parentRect = parent ? parent.getBoundingClientRect() : { top: 0 };
        /** @type {?} */
        var viewHeight = parent
            ? parent.offsetHeight - parseFloat(window.getComputedStyle(parent).paddingTop || '0')
            : Math.max(document.documentElement.clientHeight, window.innerHeight);
        /** @type {?} */
        var top = rect.top - parentRect.top;
        /** @type {?} */
        var bottom = rect.bottom - parentRect.top;
        /** @type {?} */
        var screenCenter = viewHeight / 2;
        /** @type {?} */
        var elemCenter = rect.height / 2;
        /** @type {?} */
        var isBelowCenterOfTheScreen = bottom > screenCenter && top - screenCenter < 0;
        /** @type {?} */
        var isMoreThanHalfVisible = (viewHeight - top) > elemCenter;
        return isBelowCenterOfTheScreen || isMoreThanHalfVisible;
    };
    ;
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ViewportService.ctorParameters = function () { return []; };
    /** @nocollapse */ ViewportService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ViewportService_Factory() { return new ViewportService(); }, token: ViewportService, providedIn: "root" });
    return ViewportService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $$3 = jquery;
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
        this.loadedPagesSet = new Set();
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
        if (pageEl) {
            /** @type {?} */
            var count = Math.floor((this.getWidth() - offset) / (pageEl.getBoundingClientRect().width * this.getZoom()));
            if (count !== 0) {
                return count;
            }
        }
        return 1;
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
                        if ((this.isPresentation && this._navigateService.currentPage === 0) || !this.isPresentation) {
                            this._navigateService.currentPage = page;
                        }
                    }
                    currentPageSet = true;
                }
                if (!this.loadedPagesSet.has(page)) {
                    this._pagePreloadService.changeLastPageInView(page);
                    this.loadedPagesSet.add(page);
                }
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
        { type: Directive, args: [{
                    selector: '[gdScrollable]'
                },] }
    ];
    /** @nocollapse */
    ScrollableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NavigateService },
        { type: PagePreloadService },
        { type: ZoomService },
        { type: WindowService },
        { type: ViewportService }
    ]; };
    ScrollableDirective.propDecorators = {
        isPresentation: [{ type: Input }],
        scrolling: [{ type: HostListener, args: ['scroll',] }],
        resizing: [{ type: HostListener, args: ['window:resize',] }]
    };
    return ScrollableDirective;
}());
if (false) {
    /** @type {?} */
    ScrollableDirective.prototype.isPresentation;
    /**
     * @type {?}
     * @private
     */
    ScrollableDirective.prototype.currentPage;
    /**
     * @type {?}
     * @private
     */
    ScrollableDirective.prototype.zoom;
    /**
     * @type {?}
     * @private
     */
    ScrollableDirective.prototype.loadedPagesSet;
    /**
     * @type {?}
     * @private
     */
    ScrollableDirective.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    ScrollableDirective.prototype._navigateService;
    /**
     * @type {?}
     * @private
     */
    ScrollableDirective.prototype._pagePreloadService;
    /**
     * @type {?}
     * @private
     */
    ScrollableDirective.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    ScrollableDirective.prototype._windowService;
    /**
     * @type {?}
     * @private
     */
    ScrollableDirective.prototype._viewportService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $$4 = jquery;
var MouseWheelDirective = /** @class */ (function () {
    function MouseWheelDirective() {
        this.mouseWheelUp = new EventEmitter();
        this.mouseWheelDown = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MouseWheelDirective.prototype.onMouseWheelChrome = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.mouseWheelFunc(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MouseWheelDirective.prototype.onMouseWheelFirefox = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.mouseWheelFunc(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MouseWheelDirective.prototype.onMouseWheelIE = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.mouseWheelFunc(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MouseWheelDirective.prototype.mouseWheelFunc = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event = window.event;
        /** @type {?} */
        var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        if (delta > 0) {
            this.mouseWheelUp.emit(event);
        }
        else if (delta < 0) {
            this.mouseWheelDown.emit(event);
        }
    };
    MouseWheelDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdMouseWheel]'
                },] }
    ];
    MouseWheelDirective.propDecorators = {
        mouseWheelUp: [{ type: Output }],
        mouseWheelDown: [{ type: Output }],
        onMouseWheelChrome: [{ type: HostListener, args: ['mousewheel', ['$event'],] }],
        onMouseWheelFirefox: [{ type: HostListener, args: ['DOMMouseScroll', ['$event'],] }],
        onMouseWheelIE: [{ type: HostListener, args: ['onmousewheel', ['$event'],] }]
    };
    return MouseWheelDirective;
}());
if (false) {
    /** @type {?} */
    MouseWheelDirective.prototype.mouseWheelUp;
    /** @type {?} */
    MouseWheelDirective.prototype.mouseWheelDown;
}

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
     * @param {?} elm
     * @return {?}
     */
    ZoomDirective.prototype.getScrollHeight = /**
     * @private
     * @param {?} elm
     * @return {?}
     */
    function (elm) {
        return elm.offsetHeight - elm.clientHeight;
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
        var viewPortHeight = this.el.nativeElement.parentElement.offsetHeight;
        /** @type {?} */
        var scrollWidth = this.getScrollWidth(this.el.nativeElement.parentElement);
        /** @type {?} */
        var scrollHeight = this.getScrollHeight(this.el.nativeElement.parentElement);
        this.width = (viewPortWidth / zoomInt - scrollWidth / zoomInt) + 'px';
        this.height = (viewPortHeight / zoomInt - scrollHeight / zoomInt) + 'px';
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
        { type: Directive, args: [{
                    selector: '[gdZoom]'
                },] }
    ];
    /** @nocollapse */
    ZoomDirective.ctorParameters = function () { return [
        { type: ZoomService },
        { type: WindowService },
        { type: ElementRef }
    ]; };
    ZoomDirective.propDecorators = {
        zoomActive: [{ type: Input }],
        file: [{ type: Input }],
        zoomInt: [{ type: HostBinding, args: ['style.zoom',] }],
        transform: [{ type: HostBinding, args: ['style.transform',] }],
        transformOrigin: [{ type: HostBinding, args: ['style.transform-origin',] }],
        width: [{ type: HostBinding, args: ['style.width',] }],
        height: [{ type: HostBinding, args: ['style.height',] }],
        minWidth: [{ type: HostBinding, args: ['style.min-width',] }]
    };
    return ZoomDirective;
}());
if (false) {
    /** @type {?} */
    ZoomDirective.prototype.zoomActive;
    /** @type {?} */
    ZoomDirective.prototype.file;
    /** @type {?} */
    ZoomDirective.prototype.zoomInt;
    /** @type {?} */
    ZoomDirective.prototype.transform;
    /** @type {?} */
    ZoomDirective.prototype.transformOrigin;
    /** @type {?} */
    ZoomDirective.prototype.width;
    /** @type {?} */
    ZoomDirective.prototype.height;
    /** @type {?} */
    ZoomDirective.prototype.minWidth;
    /** @type {?} */
    ZoomDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ZoomDirective.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    ZoomDirective.prototype._windowService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OnCloseService = /** @class */ (function () {
    function OnCloseService() {
        this._observer = new Subject();
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    OnCloseService.ctorParameters = function () { return []; };
    /** @nocollapse */ OnCloseService.ngInjectableDef = ɵɵdefineInjectable({ factory: function OnCloseService_Factory() { return new OnCloseService(); }, token: OnCloseService, providedIn: "root" });
    return OnCloseService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    OnCloseService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    OnCloseService.prototype._onClose;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Option() { }
if (false) {
    /** @type {?} */
    Option.prototype.name;
    /** @type {?} */
    Option.prototype.value;
    /** @type {?} */
    Option.prototype.separator;
}
var SelectComponent = /** @class */ (function () {
    function SelectComponent(_onCloseService) {
        var _this = this;
        this._onCloseService = _onCloseService;
        this.disabled = false;
        this.selected = new EventEmitter();
        this.opened = new EventEmitter();
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
        // TODO: following lines were uncommented due to needness in signature app
        $event.preventDefault();
        $event.stopPropagation();
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
            if (this.isOpen)
                this.opened.emit(true);
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
        { type: Component, args: [{
                    selector: 'gd-select',
                    template: "<div class=\"select\"\n     (click)=\"toggle($event)\"\n     (touchstart)=\"toggle($event)\"\n     (clickOutside)=\"onClickOutside($event)\"\n     [attachOutsideOnClick]=\"true\">\n  <div *ngIf=\"!icon\" class=\"selected-value\" gdDisabledCursor [dis]=\"disabled\">\n    {{showSelected?.name | translate}}\n  </div>\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\"></fa-icon>\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\"></span>\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\n    <div *ngFor=\"let option of options\">\n      <div *ngIf=\"!option.separator\" (click)=\"select($event, option)\" (touchstart)=\"select($event, option)\"\n           class=\"option\">{{option.name | translate}}</div>\n      <div *ngIf=\"option.separator\" role=\"separator\" class=\"dropdown-menu-separator\"></div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".select{min-width:50px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;color:#959da5}.selected-value{font-size:14px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:clip;max-width:70px}.selected-value.inactive{cursor:not-allowed;color:#ccc}.nav-caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent;cursor:pointer}.nav-caret.inactive{cursor:not-allowed;color:#ccc}.dropdown-menu{position:absolute;top:49px;z-index:1000;float:left;min-width:96px;list-style:none;font-size:13px;text-align:left;background-color:#fff;box-shadow:0 3px 6px rgba(0,0,0,.3);background-clip:padding-box}.dropdown-menu .option{display:block;padding:7px 0 7px 7px;clear:both;font-weight:400;line-height:1.42857143;white-space:nowrap;cursor:pointer;font-size:10px}.dropdown-menu .option:hover{background-color:#25c2d4;color:#fff!important}.dropdown-menu-separator{height:1px;overflow:hidden;background-color:#f4f4f4;padding:0!important}"]
                }] }
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: OnCloseService }
    ]; };
    SelectComponent.propDecorators = {
        options: [{ type: Input }],
        disabled: [{ type: Input }],
        showSelected: [{ type: Input }],
        selected: [{ type: Output }],
        opened: [{ type: Output }],
        isOpen: [{ type: Input }],
        icon: [{ type: Input }]
    };
    return SelectComponent;
}());
if (false) {
    /** @type {?} */
    SelectComponent.prototype.options;
    /** @type {?} */
    SelectComponent.prototype.disabled;
    /** @type {?} */
    SelectComponent.prototype.showSelected;
    /** @type {?} */
    SelectComponent.prototype.selected;
    /** @type {?} */
    SelectComponent.prototype.opened;
    /** @type {?} */
    SelectComponent.prototype.isOpen;
    /** @type {?} */
    SelectComponent.prototype.icon;
    /**
     * @type {?}
     * @protected
     */
    SelectComponent.prototype._onCloseService;
}

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
        { type: Directive, args: [{
                    selector: '[gdDisabledCursor]'
                },] }
    ];
    /** @nocollapse */
    DisabledCursorDirective.ctorParameters = function () { return []; };
    DisabledCursorDirective.propDecorators = {
        dis: [{ type: Input }],
        cursor: [{ type: HostBinding, args: ['class.inactive',] }]
    };
    return DisabledCursorDirective;
}());
if (false) {
    /** @type {?} */
    DisabledCursorDirective.prototype.dis;
    /** @type {?} */
    DisabledCursorDirective.prototype.cursor;
}

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
        { type: Directive, args: [{
                    selector: '[gdRotation]'
                },] }
    ];
    /** @nocollapse */
    RotationDirective.ctorParameters = function () { return []; };
    RotationDirective.propDecorators = {
        angle: [{ type: Input }],
        isHtmlMode: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        withMargin: [{ type: Input }],
        animation: [{ type: HostBinding, args: ['style.animation',] }],
        transition: [{ type: HostBinding, args: ['style.transition-property',] }],
        transform: [{ type: HostBinding, args: ['style.transform',] }],
        margin: [{ type: HostBinding, args: ['style.margin',] }]
    };
    return RotationDirective;
}());
if (false) {
    /** @type {?} */
    RotationDirective.prototype.angle;
    /** @type {?} */
    RotationDirective.prototype.isHtmlMode;
    /** @type {?} */
    RotationDirective.prototype.width;
    /** @type {?} */
    RotationDirective.prototype.height;
    /** @type {?} */
    RotationDirective.prototype.withMargin;
    /** @type {?} */
    RotationDirective.prototype.animation;
    /** @type {?} */
    RotationDirective.prototype.transition;
    /** @type {?} */
    RotationDirective.prototype.transform;
    /** @type {?} */
    RotationDirective.prototype.margin;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InitStateComponent = /** @class */ (function () {
    function InitStateComponent() {
        this.fileDropped = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'gd-init-state',
                    template: "<div class=\"wrapper gd-drag-n-drop-wrap\" gdDnd (dropped)=\"dropped($event)\" (opening)=\"showUploadFile=$event\">\n  <div class=\"init-state-wrapper\">\n    <fa-icon class=\"icon\" [icon]=\"['fas',icon]\"></fa-icon>\n    <span class=\"start\">\n      <ng-content></ng-content>\n    </span>\n  </div>\n  <div *ngIf=\"showUploadFile\" class=\"init-state-dnd-wrapper\">\n    <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\n    <span class=\"text\">{{text}}</span>\n  </div>\n</div>\n",
                    styles: [".wrapper{color:#959da5;background-color:#e7e7e7;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;width:100%;height:100%}.icon{font-size:65px;margin-bottom:43px;display:-webkit-box;display:flex;color:#959da5}.start{font-size:15px;text-align:center;color:#959da5}.gd-drag-n-drop-wrap.active{background-color:#fff;position:fixed;top:0;background:rgba(255,255,255,.8)}.gd-drag-n-drop-wrap.active .init-state-wrapper{position:absolute;opacity:.2;top:unset}.gd-drag-n-drop-wrap.active .init-state-dnd-wrapper{top:0;z-index:999}.gd-drag-n-drop-wrap.active .init-state-dnd-wrapper .icon{width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}.gd-drag-n-drop-wrap.active .text{color:#6e6e6e;font-size:14px}.init-state-dnd-wrapper,.init-state-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:250px;height:250px;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.init-state-wrapper{top:-60px;position:relative}"]
                }] }
    ];
    /** @nocollapse */
    InitStateComponent.ctorParameters = function () { return []; };
    InitStateComponent.propDecorators = {
        icon: [{ type: Input }],
        text: [{ type: Input }],
        fileDropped: [{ type: Output }]
    };
    return InitStateComponent;
}());
if (false) {
    /** @type {?} */
    InitStateComponent.prototype.icon;
    /** @type {?} */
    InitStateComponent.prototype.text;
    /** @type {?} */
    InitStateComponent.prototype.fileDropped;
    /** @type {?} */
    InitStateComponent.prototype.showUploadFile;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RenderPrintService = /** @class */ (function () {
    function RenderPrintService() {
        var _this = this;
        this._render = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            return _this._observer = observer;
        }));
        this._renderBlob = new Observable((/**
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    RenderPrintService.prototype._render;
    /**
     * @type {?}
     * @private
     */
    RenderPrintService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    RenderPrintService.prototype._renderBlob;
    /**
     * @type {?}
     * @private
     */
    RenderPrintService.prototype._observerBlob;
}

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
        var e_1, _a;
        /** @type {?} */
        var pagesHtml = '';
        try {
            for (var pages_1 = __values(pages), pages_1_1 = pages_1.next(); !pages_1_1.done; pages_1_1 = pages_1.next()) {
                var page = pages_1_1.value;
                /** @type {?} */
                var data = page.data.startsWith('data:image') ? page.data : 'data:image/png;base64,' + page.data;
                pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
                    '<div class="gd-wrapper"><image style="width: inherit !important" class="gd-page-image" src="' + data + '" alt></image></div>' +
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
        setTimeout((/**
         * @return {?}
         */
        function () {
            windowObject.focus();
            windowObject.print();
            windowObject.close();
        }), 100);
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
        var _this = this;
        /** @type {?} */
        var iframeId = 'print-window';
        /** @type {?} */
        var objectUrl = window.URL.createObjectURL(file)
        // Remove previous iframe if exists
        ;
        // Remove previous iframe if exists
        /** @type {?} */
        var iframe = document.getElementById(iframeId);
        if (iframe) {
            iframe.remove();
        }
        // Create new iframe
        iframe = document.createElement('iframe');
        iframe.setAttribute('style', 'visibility: hidden; height: 0; width: 0; position: absolute; border: 0');
        iframe.setAttribute('id', iframeId);
        iframe.setAttribute('src', objectUrl);
        // Append to the document
        document.getElementsByTagName('body')[0].appendChild(iframe);
        // Wait and print
        /** @type {?} */
        var iframeElement = (/** @type {?} */ (document.getElementById(iframeId)));
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.doPrint(iframeElement); }), 1000);
    };
    /**
     * @param {?} iframe
     * @return {?}
     */
    RenderPrintDirective.prototype.doPrint = /**
     * @param {?} iframe
     * @return {?}
     */
    function (iframe) {
        try {
            iframe.focus();
            iframe.contentWindow.document.execCommand('print', false);
        }
        catch (e) {
            iframe.contentWindow.print();
        }
        finally {
            // Hide iframe
            iframe.style.visibility = 'hidden';
            iframe.style.left = '-1px';
        }
    };
    RenderPrintDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdRenderPrint]'
                },] }
    ];
    /** @nocollapse */
    RenderPrintDirective.ctorParameters = function () { return [
        { type: RenderPrintService }
    ]; };
    RenderPrintDirective.propDecorators = {
        htmlMode: [{ type: Input }]
    };
    return RenderPrintDirective;
}());
if (false) {
    /** @type {?} */
    RenderPrintDirective.prototype.htmlMode;
    /**
     * @type {?}
     * @private
     */
    RenderPrintDirective.prototype._renderService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ExceptionMessageService = /** @class */ (function () {
    function ExceptionMessageService() {
        this._observer = new BehaviorSubject('Server is not available');
        this._messageChange = this._observer.asObservable();
        this._observerHttpEvent = new BehaviorSubject(null);
        this._httpEventChange = this._observerHttpEvent.asObservable();
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
    Object.defineProperty(ExceptionMessageService.prototype, "httpEventChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._httpEventChange;
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
    /**
     * @param {?} httpEvent
     * @return {?}
     */
    ExceptionMessageService.prototype.changeHttpEvent = /**
     * @param {?} httpEvent
     * @return {?}
     */
    function (httpEvent) {
        this._observerHttpEvent.next(httpEvent);
    };
    return ExceptionMessageService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExceptionMessageService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    ExceptionMessageService.prototype._messageChange;
    /**
     * @type {?}
     * @private
     */
    ExceptionMessageService.prototype._observerHttpEvent;
    /**
     * @type {?}
     * @private
     */
    ExceptionMessageService.prototype._httpEventChange;
}

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
        { type: Component, args: [{
                    selector: 'gd-error-modal',
                    template: "<gd-modal id=\"gd-error-message\" title=\"{{'Error' | translate}}\">\n  <section id=\"gd-error-section\">\n    <fa-icon [icon]=\"['fas', 'exclamation-triangle']\"></fa-icon>\n    <div class=\"gd-modal-error\">\n      <div class=\"gd-modal-error-title\">{{'Something went wrong' | translate}}</div>\n      <div class=\"gd-modal-error-message\">{{(message ? message : 'Server is not available') | translate}}</div>\n    </div>\n  </section>\n</gd-modal>\n",
                    styles: [".gd-modal-error{display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex:1}.gd-modal-error .gd-modal-error-message{font-size:12px;margin:0 24px 24px 0;word-break:break-word}.gd-modal-error .gd-modal-error-title{font-size:16px;font-weight:700;margin:14px 0 10px}#gd-error-section{max-width:468px;max-height:204px;display:-webkit-box;display:flex}#gd-error-section fa-icon{-webkit-box-flex:1;flex:1;color:#e04e4e;font-size:40px;margin:13px 23px 90px;text-align:center;max-width:46px}"]
                }] }
    ];
    /** @nocollapse */
    ErrorModalComponent.ctorParameters = function () { return [
        { type: ExceptionMessageService }
    ]; };
    return ErrorModalComponent;
}());
if (false) {
    /** @type {?} */
    ErrorModalComponent.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PasswordService = /** @class */ (function () {
    function PasswordService() {
        this._observer = new Subject();
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    PasswordService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    PasswordService.prototype._passChange;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $$5 = jquery;
var PasswordRequiredComponent = /** @class */ (function () {
    function PasswordRequiredComponent(messageService, _passwordService) {
        var _this = this;
        this._passwordService = _passwordService;
        this.cancelEvent = new EventEmitter();
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
    /**
     * @param {?} $event
     * @return {?}
     */
    PasswordRequiredComponent.prototype.onCloseOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var element = $$5("#password");
                if (element) {
                    element.focus();
                }
            }), 100);
        }
        else {
            $$5("#password").val("");
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    PasswordRequiredComponent.prototype.cancel = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $$5("#password").val("");
        this.cancelEvent.emit(true);
    };
    PasswordRequiredComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-password-required',
                    template: "<gd-modal id=\"gd-password-required\" title=\"{{'Password protected document' | translate}}\" (cancel)=\"cancel($event)\" (visible)=\"onCloseOpen($event)\">\n  <section id=\"gd-password-section\">\n    <div class=\"gd-password-wrap\">\n      <label for=\"password\">{{'Password' | translate}}</label>\n      <input type=\"password\" class=\"form-control\" [ngClass]=\"{'error': message}\" id=\"password\" #pass\n             (keyup.enter)=\"setPassword(pass.value)\">\n      <span class=\"gd-password-error\">{{message | translate}}</span>\n      <gd-button [icon]=\"'key'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"setPassword(pass.value)\">\n        {{'Open' | translate}}\n      </gd-button>\n    </div>\n  </section>\n</gd-modal>\n",
                    styles: ["#gd-password-section{width:375px;height:164px}.gd-password-wrap{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:24px}.gd-password-wrap label{font-size:14px;color:#acacac;padding-bottom:12px}.gd-password-wrap input{height:30px;border:1px solid #25c2d4}.gd-password-wrap input.error{border-color:#e04e4e}.gd-password-wrap gd-button{align-self:flex-end}.gd-password-wrap ::ng-deep .button{height:37px;padding:0 10px;-webkit-box-pack:center;justify-content:center}.gd-password-wrap ::ng-deep .button ::ng-deep .text{font-size:10px!important}.gd-password-error{color:#e04e4e;padding:10px 0 12px;height:12px;line-height:12px;font-size:12px}@media (max-width:1037px){#gd-password-section{min-width:375px}}"]
                }] }
    ];
    /** @nocollapse */
    PasswordRequiredComponent.ctorParameters = function () { return [
        { type: ExceptionMessageService },
        { type: PasswordService }
    ]; };
    PasswordRequiredComponent.propDecorators = {
        cancelEvent: [{ type: Output }]
    };
    return PasswordRequiredComponent;
}());
if (false) {
    /** @type {?} */
    PasswordRequiredComponent.prototype.message;
    /** @type {?} */
    PasswordRequiredComponent.prototype.cancelEvent;
    /**
     * @type {?}
     * @private
     */
    PasswordRequiredComponent.prototype._passwordService;
}

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
            .pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return data;
        })), catchError((/**
         * @param {?} exception
         * @return {?}
         */
        function (exception) {
            if (exception instanceof HttpErrorResponse) {
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
                        _this._messageService.changeHttpEvent(exception);
                        _this._modalService.open(ErrorInterceptorService.ErrorMessageWindowName);
                        break;
                    case HttpError.Forbidden:
                        console.error('%c Forbidden 403', logFormat);
                        _this._messageService.changeMessage(exception.error.message);
                        _this._modalService.open(CommonModals.PasswordRequired);
                        break;
                }
            }
            return throwError(exception);
        })));
    };
    ErrorInterceptorService.ErrorMessageWindowName = CommonModals.ErrorMessage;
    ErrorInterceptorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ErrorInterceptorService.ctorParameters = function () { return [
        { type: ModalService },
        { type: ExceptionMessageService }
    ]; };
    /** @nocollapse */ ErrorInterceptorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ErrorInterceptorService_Factory() { return new ErrorInterceptorService(ɵɵinject(ModalService), ɵɵinject(ExceptionMessageService)); }, token: ErrorInterceptorService, providedIn: "root" });
    return ErrorInterceptorService;
}());
if (false) {
    /** @type {?} */
    ErrorInterceptorService.ErrorMessageWindowName;
    /**
     * @type {?}
     * @private
     */
    ErrorInterceptorService.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    ErrorInterceptorService.prototype._messageService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchService = /** @class */ (function () {
    function SearchService() {
        this._observer = new Subject();
        this._textChange = this._observer.asObservable();
        this._observerCurrent = new Subject();
        this._currentChange = this._observerCurrent.asObservable();
        this._observerTotal = new Subject();
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype._textChange;
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype._observerCurrent;
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype._currentChange;
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype._observerTotal;
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype._totalChange;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchComponent = /** @class */ (function () {
    function SearchComponent(_searchService) {
        var _this = this;
        this._searchService = _searchService;
        this.hidePanel = new EventEmitter(false);
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
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._searchService.setText(text);
        }), 0);
        if (this.textElement.nativeElement.value !== text) {
            this.textElement.nativeElement.value = text;
        }
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
        { type: Component, args: [{
                    selector: 'gd-search',
                    template: "<div class=\"gd-nav-search-container\">\n  <input type=\"text\" class=\"gd-search-input\" (keydown.enter)=\"next()\" #text (input)=\"setText(text.value)\"/>\n  <div class=\"gd-search-count\">{{current}} {{'of' | translate}}  {{total}}</div>\n  <gd-button class=\"gd-nav-search-btn\" [icon]=\"'chevron-left'\" [disabled]=\"total == 0 || current == 1\" (click)=\"prev()\">\n  </gd-button>\n  <gd-button class=\"gd-nav-search-btn\" [icon]=\"'chevron-right'\" [disabled]=\"total == 0 || current == total\" (click)=\"next()\">\n  </gd-button>\n  <gd-button class=\"gd-nav-search-btn gd-nav-search-cancel\" [icon]=\"'times'\" (click)=\"hide()\">\n  </gd-button>\n</div>\n",
                    styles: [".gd-nav-search-btn{margin:3px 0 4px}.gd-nav-search-cancel{color:#fff;font-size:14px;width:37px}.gd-search-count{color:#959da5;font-size:12px;position:absolute;right:148px;top:14px}.gd-nav-search-container{background-color:#3e4e5a;width:410px;position:fixed;left:50%;top:60px;z-index:2;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);display:-webkit-box;display:flex}.gd-search-input{float:left;height:30px;width:267px;font-size:14px;color:#6e6e6e;border:1px solid #25c2d4;margin:7px 0 7px 7px;box-sizing:border-box;padding:6px 0 5px 9px}input[type=text]::-ms-clear{display:none}@media (max-width:1037px){.gd-search-input{width:231px;height:30px;margin:7px 0 7px 5px}.gd-search-count{position:absolute;left:193px;top:15px}.gd-nav-search-container{width:100%}}"]
                }] }
    ];
    /** @nocollapse */
    SearchComponent.ctorParameters = function () { return [
        { type: SearchService }
    ]; };
    SearchComponent.propDecorators = {
        hidePanel: [{ type: Output }],
        textElement: [{ type: ViewChild, args: ['text', {
                        static: true
                    },] }]
    };
    return SearchComponent;
}());
if (false) {
    /** @type {?} */
    SearchComponent.prototype.hidePanel;
    /** @type {?} */
    SearchComponent.prototype.current;
    /** @type {?} */
    SearchComponent.prototype.total;
    /** @type {?} */
    SearchComponent.prototype.textElement;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype._searchService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $$6 = jquery;
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
        this._searchingObserver = new Subject();
        this._searching = this._searchingObserver.asObservable();
        this._searchingFlag = false;
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
        _searchService.textChange
            .pipe(debounceTime(500))
            .pipe(distinctUntilChanged())
            .subscribe((/**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            _this.text = text;
            if (!_this._searchingFlag) {
                _this._searchingFlag = true;
                _this.setSearching(_this._searchingFlag);
            }
        }));
        this.zoom = _zoomService.zoom ? _zoomService.zoom : this.zoom;
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.zoom = val ? val : _this.zoom;
        }));
        this.searching.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this._searchingFlag = val;
            if (!val) {
                if (_this.text !== _this.prevText) {
                    _this._searchingFlag = true;
                    _this.highlightSearch();
                }
            }
            else {
                _this.highlightSearch();
            }
        }));
    }
    Object.defineProperty(SearchableDirective.prototype, "searching", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searching;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} searching
     * @return {?}
     */
    SearchableDirective.prototype.setSearching = /**
     * @param {?} searching
     * @return {?}
     */
    function (searching) {
        this._searchingObserver.next(searching);
    };
    /**
     * @private
     * @return {?}
     */
    SearchableDirective.prototype.highlightSearch = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._searchingFlag = true;
        /** @type {?} */
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.prevText = _this.text;
            if (el) {
                if (_this.prevText) {
                    _this.cleanHighlight(el);
                    _this.highlightEl(el);
                }
                else {
                    _this.cleanHighlight(el);
                }
            }
            if (_this.prevText) {
                /** @type {?} */
                var count = el.querySelectorAll('.gd-highlight').length;
                _this.total = count;
            }
            else {
                _this.total = 0;
            }
            _this._searchService.setTotal(_this.total);
            _this.setSearching(false);
        }), 0);
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
                $$6(value).removeClass('gd-highlight-select');
            }));
            /** @type {?} */
            var currentEl = el.querySelectorAll('.gd-highlight')[this.current - 1];
            $$6(currentEl).addClass('gd-highlight-select');
            if (currentEl) {
                /** @type {?} */
                var options = {
                    left: 0,
                    top: ($$6(currentEl).offset().top) + el.parentElement.parentElement.scrollTop - 150,
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
        var textNodes = $$6(el).find('*').contents().filter((/**
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
            var $this = $$6(this);
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
        //const lengthOfNodeList = nodeListOf.length;
        //for (let i = 0; i < lengthOfNodeList; i++)
        nodeListOf.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            //const element = nodeListOf.item(i);
            element.replaceWith(((/** @type {?} */ (element))).innerText);
        }));
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
        { type: Directive, args: [{
                    selector: '[gdSearchable]'
                },] }
    ];
    /** @nocollapse */
    SearchableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: SearchService },
        { type: HighlightSearchPipe },
        { type: ZoomService }
    ]; };
    return SearchableDirective;
}());
if (false) {
    /** @type {?} */
    SearchableDirective.prototype.text;
    /** @type {?} */
    SearchableDirective.prototype.prevText;
    /** @type {?} */
    SearchableDirective.prototype.current;
    /** @type {?} */
    SearchableDirective.prototype.total;
    /**
     * @type {?}
     * @private
     */
    SearchableDirective.prototype.zoom;
    /**
     * @type {?}
     * @private
     */
    SearchableDirective.prototype._searchingObserver;
    /**
     * @type {?}
     * @private
     */
    SearchableDirective.prototype._searching;
    /**
     * @type {?}
     * @private
     */
    SearchableDirective.prototype._searchingFlag;
    /**
     * @type {?}
     * @private
     */
    SearchableDirective.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    SearchableDirective.prototype._searchService;
    /**
     * @type {?}
     * @private
     */
    SearchableDirective.prototype._highlight;
    /**
     * @type {?}
     * @private
     */
    SearchableDirective.prototype._zoomService;
}

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
        { type: Component, args: [{
                    selector: 'gd-tabbed-toolbars',
                    template: "<div class=\"top-panel\">\n  <gd-logo [logo]=\"logo\" [icon]=\"icon\"></gd-logo>\n  <ng-content></ng-content>\n</div>\n",
                    styles: [".top-panel{background:#3e4e5a;display:-webkit-box;display:flex;width:100%;height:90px}.top-panel ::ng-deep .logo{height:30px;font-size:16px}@media (max-width:1037px){.top-panel{height:60px}.top-panel ::ng-deep .logo{height:60px}}"]
                }] }
    ];
    /** @nocollapse */
    TabbedToolbarsComponent.ctorParameters = function () { return []; };
    TabbedToolbarsComponent.propDecorators = {
        logo: [{ type: Input }],
        icon: [{ type: Input }]
    };
    return TabbedToolbarsComponent;
}());
if (false) {
    /** @type {?} */
    TabbedToolbarsComponent.prototype.logo;
    /** @type {?} */
    TabbedToolbarsComponent.prototype.icon;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabActivatorService = /** @class */ (function () {
    function TabActivatorService() {
        this._observer = new Subject();
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    TabActivatorService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    TabActivatorService.prototype._activeTabChange;
}

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
        { type: Component, args: [{
                    selector: 'gd-tab',
                    template: "<div [ngClass]=\"(active) ? 'gd-tab active' : 'gd-tab'\" (mousedown)=\"selectTab()\">\n  <div class=\"smp-tab-title\" *ngIf=\"tabTitle\">{{tabTitle}}</div>\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n</div>\n<div *ngIf=\"content\" [ngClass]=\"(active) ? 'tab-content active' : 'tab-content'\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: [".tab-content{height:60px;position:absolute;background-color:#fff;width:100%;left:0;line-height:60px;display:none;z-index:9}.tab-content ::ng-deep .toolbar-panel{height:60px}.tab-content.active{display:-webkit-box;display:flex}.gd-tab{text-align:center;font-size:11px;color:#e5e5e5;height:30px;line-height:30px;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.gd-tab .icon{display:none;font-size:14px}.gd-tab .smp-tab-title{margin:auto 23px}.gd-tab.active{background-color:#fff;color:#3e4e5a;font-weight:700}@media (max-width:1037px){.gd-tab{height:60px;line-height:60px;width:60px}.gd-tab .smp-tab-title{display:none}.gd-tab .icon{display:block;font-size:22px}}"]
                }] }
    ];
    /** @nocollapse */
    TabComponent.ctorParameters = function () { return [
        { type: TabActivatorService }
    ]; };
    TabComponent.propDecorators = {
        id: [{ type: Input }],
        tabTitle: [{ type: Input }],
        icon: [{ type: Input }],
        disabled: [{ type: Input }],
        active: [{ type: Input }],
        content: [{ type: Input }]
    };
    return TabComponent;
}());
if (false) {
    /** @type {?} */
    TabComponent.prototype.id;
    /** @type {?} */
    TabComponent.prototype.tabTitle;
    /** @type {?} */
    TabComponent.prototype.icon;
    /** @type {?} */
    TabComponent.prototype.disabled;
    /** @type {?} */
    TabComponent.prototype.active;
    /** @type {?} */
    TabComponent.prototype.content;
    /**
     * @type {?}
     * @private
     */
    TabComponent.prototype._tabActivatorService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-tabs',
                    template: "<div class=\"gd-tabs\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: [".gd-tabs{display:-webkit-box;display:flex}"]
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
if (false) {
    /** @type {?} */
    Formatting.prototype.bold;
    /** @type {?} */
    Formatting.prototype.italic;
    /** @type {?} */
    Formatting.prototype.underline;
    /** @type {?} */
    Formatting.prototype.fontSize;
    /** @type {?} */
    Formatting.prototype.color;
    /** @type {?} */
    Formatting.prototype.bgColor;
    /** @type {?} */
    Formatting.prototype.font;
    /** @type {?} */
    Formatting.prototype.strikeout;
    /** @type {?} */
    Formatting.prototype.align;
    /** @type {?} */
    Formatting.prototype.list;
}
var FormattingService = /** @class */ (function () {
    function FormattingService() {
        this._observerBold = new Subject();
        this._formatBoldChange = this._observerBold.asObservable();
        this._observerUnderline = new Subject();
        this._formatUnderlineChange = this._observerUnderline.asObservable();
        this._observerUndo = new Subject();
        this._undo = this._observerUndo.asObservable();
        this._observerRedo = new Subject();
        this._redo = this._observerRedo.asObservable();
        this._observerItalic = new Subject();
        this._formatItalicChange = this._observerItalic.asObservable();
        this._observerColor = new Subject();
        this._formatColorChange = this._observerColor.asObservable();
        this._observerBgColor = new Subject();
        this._formatBgColorChange = this._observerBgColor.asObservable();
        this._observerFontSize = new Subject();
        this._formatFontSizeChange = this._observerFontSize.asObservable();
        this._observerFont = new Subject();
        this._formatFontChange = this._observerFont.asObservable();
        this._observerStrikeout = new Subject();
        this._formatStrikeoutChange = this._observerStrikeout.asObservable();
        this._observerAlign = new Subject();
        this._formatAlignChange = this._observerAlign.asObservable();
        this._observerList = new Subject();
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerBold;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._formatBoldChange;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerUnderline;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._formatUnderlineChange;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerUndo;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._undo;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerRedo;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._redo;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerItalic;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._formatItalicChange;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerColor;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._formatColorChange;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerBgColor;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._formatBgColorChange;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerFontSize;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._formatFontSizeChange;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerFont;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._formatFontChange;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerStrikeout;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._formatStrikeoutChange;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerAlign;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._formatAlignChange;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerList;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._formatListChange;
}

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
        this.selectedColor = new EventEmitter();
        this.closeOutside = new EventEmitter();
        this.colors = DEFAULT_COLORS;
        this.white = '#FFFFFF';
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
        { type: Component, args: [{
                    selector: 'gd-color-picker',
                    template: "<div class=\"bcPicker-picker\" (clickOutside)=\"close()\" *ngIf=\"isOpen\" [clickOutsideEnabled]=\"isOpen\">\n  <div class=\"bcPicker-palette\">\n    <div class=\"bcPicker-color\" *ngFor=\"let color of colors\" [style.background-color]=\"color\"\n      (click)=\"select($event, color)\" [style.border]=\"'1px solid ' + (color === white ? '#707070' : color)\"\n      (touchstart)=\"select($event, color)\"></div>\n  </div>\n</div>\n",
                    styles: [".bcPicker-picker{border:1px;border-radius:100%}.bcPicker-palette{width:250px;background-color:#fdfdfd;z-index:999;box-shadow:0 0 5px #efefef;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-pack:center;justify-content:center}.bcPicker-palette>.bcPicker-color{width:18px;height:18px;margin:2px;cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    ColorPickerComponent.ctorParameters = function () { return []; };
    ColorPickerComponent.propDecorators = {
        isOpen: [{ type: Input }],
        selectedColor: [{ type: Output }],
        closeOutside: [{ type: Output }]
    };
    return ColorPickerComponent;
}());
if (false) {
    /** @type {?} */
    ColorPickerComponent.prototype.isOpen;
    /** @type {?} */
    ColorPickerComponent.prototype.selectedColor;
    /** @type {?} */
    ColorPickerComponent.prototype.closeOutside;
    /** @type {?} */
    ColorPickerComponent.prototype.colors;
    /** @type {?} */
    ColorPickerComponent.prototype.white;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BackFormattingService = /** @class */ (function (_super) {
    __extends(BackFormattingService, _super);
    function BackFormattingService() {
        return _super.call(this) || this;
    }
    BackFormattingService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BackFormattingService.ctorParameters = function () { return []; };
    /** @nocollapse */ BackFormattingService.ngInjectableDef = ɵɵdefineInjectable({ factory: function BackFormattingService_Factory() { return new BackFormattingService(); }, token: BackFormattingService, providedIn: "root" });
    return BackFormattingService;
}(FormattingService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectionService = /** @class */ (function () {
    function SelectionService() {
        this.isIE = false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ SelectionService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SelectionService_Factory() { return new SelectionService(); }, token: SelectionService, providedIn: "root" });
    return SelectionService;
}());
if (false) {
    /** @type {?} */
    SelectionService.prototype.selection;
    /** @type {?} */
    SelectionService.prototype.isIE;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $$7 = jquery;
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
        this.isIE = /*@cc_on!@*/ false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
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
            this.bgColor = $$7(window.getSelection().focusNode.parentNode).css('background-color').toString();
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
            /** @type {?} */
            var remove = _this.list === list;
            _this.list = list;
            _this.toggleList(_this.list, remove);
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
        $$7(selection).css("text-align", align);
        this._selectionService.refreshSelection();
    };
    /**
     * @private
     * @param {?} list
     * @param {?} remove
     * @return {?}
     */
    FormattingDirective.prototype.toggleList = /**
     * @private
     * @param {?} list
     * @param {?} remove
     * @return {?}
     */
    function (list, remove) {
        switch (list) {
            case 'unordered':
                document.execCommand('insertUnorderedList', remove);
                break;
            case 'ordered':
                document.execCommand('insertOrderedList', remove);
                break;
        }
        this._selectionService.refreshSelection();
    };
    FormattingDirective.decorators = [
        { type: Directive, args: [{
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
        mouseup: [{ type: HostListener, args: ['mouseup',] }]
    };
    return FormattingDirective;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype.bold;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype.italic;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype.underline;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype.color;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype.bgColor;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype.font;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype.strikeout;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype.align;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype.list;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype.isIE;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype._formattingService;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype._backFormattingService;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype._selectionService;
}

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
        { type: Component, args: [{
                    selector: 'gd-success-modal',
                    template: "<gd-modal id=\"gd-success-modal\" [title]=\"'Saved'\">\n<div id=\"gd-modal-success\"><div class=\"check_mark\">\n    <div class=\"sa-icon sa-success animate\">\n        <span class=\"sa-line sa-tip animateSuccessTip\"></span>\n        <span class=\"sa-line sa-long animateSuccessLong\"></span>\n        <div class=\"sa-placeholder\"></div>\n        <div class=\"sa-fix\"></div>\n      </div>\n  </div></div>\n  </gd-modal>\n",
                    styles: [".check_mark{margin:47px auto}.sa-icon{width:80px;height:80px;border:4px solid gray;border-radius:50%;padding:0;position:relative;box-sizing:content-box}#gd-modal-success{display:-webkit-box;display:flex;overflow:hidden;width:469px;height:183px}.sa-icon.sa-success{border-color:#4caf50;-webkit-transform:scale(1.18);transform:scale(1.18)}.sa-icon.sa-success::after,.sa-icon.sa-success::before{content:'';position:absolute;width:60px;height:120px;background:#fff}.sa-icon.sa-success::before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.sa-icon.sa-success::after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px}.sa-icon.sa-success .sa-placeholder{width:80px;height:80px;border:4px solid rgba(76,175,80,.5);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.sa-icon.sa-success .sa-fix{width:5px;height:90px;background-color:#fff;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.sa-icon.sa-success.animate::after{-webkit-animation:4.25s ease-in rotatePlaceholder;animation:4.25s ease-in rotatePlaceholder}.animateSuccessTip{-webkit-animation:.75s animateSuccessTip;animation:.75s animateSuccessTip}.animateSuccessLong{-webkit-animation:.75s animateSuccessLong;animation:.75s animateSuccessLong}@-webkit-keyframes animateSuccessLong{0%,65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}100%{width:47px;right:8px;top:38px}}@-webkit-keyframes animateSuccessTip{0%,54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}100%{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%,54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}100%{width:25px;left:14px;top:45px}}@keyframes animateSuccessLong{0%,65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}100%{width:47px;right:8px;top:38px}}.sa-icon.sa-success .sa-line{height:5px;background-color:#4caf50;display:block;border-radius:2px;position:absolute;z-index:2}.sa-icon.sa-success .sa-line.sa-tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.sa-icon.sa-success .sa-line.sa-long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}@-webkit-keyframes rotatePlaceholder{0%,5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}100%,12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%,5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}100%,12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}@media (max-width:1037px){#gd-modal-success{left:50%;top:50%;position:relative;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}}"]
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
        this._observer = new Subject();
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EditHtmlService.ctorParameters = function () { return []; };
    /** @nocollapse */ EditHtmlService.ngInjectableDef = ɵɵdefineInjectable({ factory: function EditHtmlService_Factory() { return new EditHtmlService(); }, token: EditHtmlService, providedIn: "root" });
    return EditHtmlService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    EditHtmlService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    EditHtmlService.prototype._htmlContent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EditorDirective = /** @class */ (function () {
    function EditorDirective(_selectionService, _htmlService) {
        this._selectionService = _selectionService;
        this._htmlService = _htmlService;
        this.isIE = false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
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
        { type: Directive, args: [{
                    selector: '[gdEditor]'
                },] }
    ];
    /** @nocollapse */
    EditorDirective.ctorParameters = function () { return [
        { type: SelectionService },
        { type: EditHtmlService }
    ]; };
    EditorDirective.propDecorators = {
        text: [{ type: Input }],
        onInput: [{ type: HostListener, args: ['keyup', ['$event'],] }],
        onMouseleave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }],
        onBlur: [{ type: HostListener, args: ['blur', ['$event'],] }]
    };
    return EditorDirective;
}());
if (false) {
    /** @type {?} */
    EditorDirective.prototype.text;
    /**
     * @type {?}
     * @private
     */
    EditorDirective.prototype.isIE;
    /**
     * @type {?}
     * @private
     */
    EditorDirective.prototype._selectionService;
    /**
     * @type {?}
     * @private
     */
    EditorDirective.prototype._htmlService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingMaskService = /** @class */ (function () {
    function LoadingMaskService() {
        this.onLoadingChanged = new EventEmitter();
        this.stopList = [];
        this.requests = [];
        this.stopList.push(Api.SAVE_TEXT);
        this.stopList.push(Api.SAVE_OPTICAL_CODE);
        this.stopList.push(Api.LOAD_DOCUMENT_PAGE);
        this.stopList.push(Api.LOAD_THUMBNAILS);
        this.stopList.push(Api.GET_FILE_STATUS);
        this.stopList.push(Api.LOAD_PRINT);
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
     * @param {?} url
     * @return {?}
     */
    LoadingMaskService.prototype.addStopUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.stopList.push(url);
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
        { type: Injectable }
    ];
    /** @nocollapse */
    LoadingMaskService.ctorParameters = function () { return []; };
    return LoadingMaskService;
}());
if (false) {
    /** @type {?} */
    LoadingMaskService.prototype.onLoadingChanged;
    /**
     * @type {?}
     * @private
     */
    LoadingMaskService.prototype.stopList;
    /**
     * @type {?}
     * @private
     */
    LoadingMaskService.prototype.requests;
}

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
        { type: Component, args: [{
                    selector: 'gd-loading-mask',
                    template: "<div class=\"loading-wrapper\" *ngIf=\"loadingMask\">\n    <div class=\"loading-message\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;{{'Loading... Please wait.' | translate}}\n    </div>\n</div>\n",
                    styles: [".loading-wrapper{background:rgba(0,0,0,.5);width:100%;height:100%;font-size:14px;color:#fff;position:fixed;top:0;left:0;z-index:99999}.loading-message{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]
                }] }
    ];
    /** @nocollapse */
    LoadingMaskComponent.ctorParameters = function () { return [
        { type: LoadingMaskService }
    ]; };
    LoadingMaskComponent.propDecorators = {
        loadingMask: [{ type: Input }]
    };
    return LoadingMaskComponent;
}());
if (false) {
    /** @type {?} */
    LoadingMaskComponent.prototype.loadingMask;
    /**
     * @type {?}
     * @private
     */
    LoadingMaskComponent.prototype._loadingMaskService;
}

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
        return next.handle(req).pipe(finalize(callback));
    };
    LoadingMaskInterceptorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LoadingMaskInterceptorService.ctorParameters = function () { return [
        { type: LoadingMaskService }
    ]; };
    /** @nocollapse */ LoadingMaskInterceptorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LoadingMaskInterceptorService_Factory() { return new LoadingMaskInterceptorService(ɵɵinject(LoadingMaskService)); }, token: LoadingMaskInterceptorService, providedIn: "root" });
    return LoadingMaskInterceptorService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoadingMaskInterceptorService.prototype._loadingMaskService;
}

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
        { type: Component, args: [{
                    selector: 'gd-drop-down-toggle',
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None,
                    styles: [".drop-down{position:relative}.show .drop-down-items{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
                }] }
    ];
    /** @nocollapse */
    DropDownToggleComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return DropDownComponent; })),] }] }
    ]; };
    DropDownToggleComponent.propDecorators = {
        click: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return DropDownToggleComponent;
}());
if (false) {
    /** @type {?} */
    DropDownToggleComponent.prototype.click;
    /** @type {?} */
    DropDownToggleComponent.prototype.dropdown;
}
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
        { type: Component, args: [{
                    selector: 'gd-drop-down-items',
                    template: '<div class="drop-down-items" (clickOutside)="onClickOutside($event)" [clickOutsideEnabled]="isOpen" [style.right]="horizontalAlign" [style.top]="verticalAlign"><ng-content></ng-content></div>',
                    encapsulation: ViewEncapsulation.None,
                    styles: [".drop-down{position:relative}.show .drop-down-items{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
                }] }
    ];
    /** @nocollapse */
    DropDownItemsComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return DropDownComponent; })),] }] }
    ]; };
    return DropDownItemsComponent;
}());
if (false) {
    /** @type {?} */
    DropDownItemsComponent.prototype.dropdown;
}
/**
 *  DropDownItemComponent
 */
var DropDownItemComponent = /** @class */ (function () {
    function DropDownItemComponent(dropdown) {
        var _this = this;
        this.dropdown = dropdown;
        this.class = 'drop-down-item';
        this.selected = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'gd-drop-down-item',
                    template: '<div class="drop-down-item"><ng-content></ng-content></div>',
                    styles: [".drop-down{position:relative}.show .drop-down-items{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
                }] }
    ];
    /** @nocollapse */
    DropDownItemComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return DropDownComponent; })),] }] }
    ]; };
    DropDownItemComponent.propDecorators = {
        class: [{ type: HostBinding, args: ['class',] }],
        selected: [{ type: Output }],
        click: [{ type: HostListener, args: ['click',] }]
    };
    return DropDownItemComponent;
}());
if (false) {
    /** @type {?} */
    DropDownItemComponent.prototype.class;
    /** @type {?} */
    DropDownItemComponent.prototype.selected;
    /** @type {?} */
    DropDownItemComponent.prototype.click;
    /** @type {?} */
    DropDownItemComponent.prototype.dropdown;
}
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
        { type: Component, args: [{
                    selector: 'gd-drop-down',
                    template: '<div class="drop-down"><ng-content></ng-content></div>',
                    encapsulation: ViewEncapsulation.None,
                    styles: [".drop-down{position:relative}.show .drop-down-items{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
                }] }
    ];
    DropDownComponent.propDecorators = {
        placement: [{ type: Input }],
        open: [{ type: Input }, { type: HostBinding, args: ['class.show',] }],
        class: [{ type: HostBinding, args: ['class',] }]
    };
    return DropDownComponent;
}());
if (false) {
    /** @type {?} */
    DropDownComponent.prototype.placement;
    /** @type {?} */
    DropDownComponent.prototype.open;
    /** @type {?} */
    DropDownComponent.prototype.class;
}

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
        { type: Component, args: [{
                    selector: 'gd-left-side-bar',
                    template: "<div class=\"left-panel\">\n  <div class=\"gd-left-bar-fade\" *ngIf=\"showSpinner\">\n    <div class=\"gd-left-bar-spinner\"><i class=\"fa fa-circle-o-notch fa-spin\"></i> &nbsp;Loading...\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                    styles: [".left-panel{border-radius:0;float:left}.gd-left-bar-fade{margin:auto;overflow:hidden;-webkit-overflow-scrolling:touch;-webkit-transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;position:fixed;z-index:1000}@media (max-width:1037px){.gd-left-bar-fade{top:100px;right:0}.gd-left-bar-spinner{top:20%}}"]
                }] }
    ];
    /** @nocollapse */
    LeftSideBarComponent.ctorParameters = function () { return []; };
    LeftSideBarComponent.propDecorators = {
        showSpinner: [{ type: Input }]
    };
    return LeftSideBarComponent;
}());
if (false) {
    /** @type {?} */
    LeftSideBarComponent.prototype.showSpinner;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective() {
        this.showToolTip = new EventEmitter();
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
        { type: Directive, args: [{
                    selector: '[gdTooltip]'
                },] }
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return []; };
    TooltipDirective.propDecorators = {
        showToolTip: [{ type: Output }],
        onHovering: [{ type: HostListener, args: ['mouseenter',] }],
        onUnhovering: [{ type: HostListener, args: ['mouseleave',] }]
    };
    return TooltipDirective;
}());
if (false) {
    /** @type {?} */
    TooltipDirective.prototype.showToolTip;
}

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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AddDynamicComponentService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef }
    ]; };
    /** @nocollapse */ AddDynamicComponentService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AddDynamicComponentService_Factory() { return new AddDynamicComponentService(ɵɵinject(ComponentFactoryResolver), ɵɵinject(ApplicationRef)); }, token: AddDynamicComponentService, providedIn: "root" });
    return AddDynamicComponentService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    AddDynamicComponentService.prototype._factoryResolver;
    /**
     * @type {?}
     * @private
     */
    AddDynamicComponentService.prototype._appRef;
}

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
if (false) {
    /**
     * @type {?}
     * @private
     */
    HostingDynamicComponentService.prototype.hosts;
}

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
        { type: Directive, args: [{
                    selector: '[gdHostDynamic]'
                },] }
    ];
    /** @nocollapse */
    HostDynamicDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: HostingDynamicComponentService }
    ]; };
    HostDynamicDirective.propDecorators = {
        ident: [{ type: Input }]
    };
    return HostDynamicDirective;
}());
if (false) {
    /** @type {?} */
    HostDynamicDirective.prototype.ident;
    /** @type {?} */
    HostDynamicDirective.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    HostDynamicDirective.prototype._hostingService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $$8 = jquery;
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
        this.offsetX = new EventEmitter();
        this.offsetY = new EventEmitter();
        this.offsetTop = new EventEmitter();
        this.offsetLeft = new EventEmitter();
        this.release = new EventEmitter();
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
        var elSE = $$8(this.getElementId(this.SE));
        /** @type {?} */
        var elNW = $$8(this.getElementId(this.NW));
        if (this.init && elSE && elNW && elSE.offset() && elNW.offset()) {
            /** @type {?} */
            var width_1 = elSE.offset().left - elNW.offset().left;
            /** @type {?} */
            var height_1 = elSE.offset().top - elNW.offset().top;
            while (width_1 >= this.pageWidth || height_1 >= this.pageHeight) {
                width_1 = width_1 / 2;
                height_1 = height_1 / 2;
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
        { type: Component, args: [{
                    selector: 'gd-resizing',
                    template: "<div class=\"ui-resizable-handle se-resize\" id=\"se-{{id}}\" *ngIf=\"se\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, SE)\" (dragend)=\"end($event, SE)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\n      (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, SE)\" (panend)=\"end($event, SE)\"></div>\n\n<div class=\"ui-resizable-handle ne-resize\" id=\"ne-{{id}}\" *ngIf=\"ne\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, NE)\" (dragend)=\"end($event, NE)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\n     (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, NE)\" (panend)=\"end($event, NE)\"></div>\n\n<div class=\"ui-resizable-handle sw-resize\" id=\"sw-{{id}}\" *ngIf=\"sw\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, SW)\" (dragend)=\"end($event, SW)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\n     (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, SW)\" (panend)=\"end($event, SW)\"></div>\n\n<div class=\"ui-resizable-handle nw-resize\" id=\"nw-{{id}}\" *ngIf=\"nw\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, NW)\" (dragend)=\"end($event, NW)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\n     (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, NW)\" (panend)=\"end($event, NW)\"></div>\n",
                    styles: [".ui-resizable-handle{background-color:#679ffa;width:8px;height:8px;border-radius:100%;position:absolute;font-size:.1px;display:block}.se-resize{bottom:-5px;right:-5px;cursor:se-resize}.ne-resize{top:-5px;right:-5px;cursor:ne-resize}.sw-resize{bottom:-5px;left:-5px;cursor:sw-resize}.nw-resize{top:-5px;left:-5px;cursor:nw-resize}"]
                }] }
    ];
    /** @nocollapse */
    ResizingComponent.ctorParameters = function () { return []; };
    ResizingComponent.propDecorators = {
        init: [{ type: Input }],
        id: [{ type: Input }],
        se: [{ type: Input }],
        ne: [{ type: Input }],
        sw: [{ type: Input }],
        nw: [{ type: Input }],
        pageWidth: [{ type: Input }],
        pageHeight: [{ type: Input }],
        offsetX: [{ type: Output }],
        offsetY: [{ type: Output }],
        offsetTop: [{ type: Output }],
        offsetLeft: [{ type: Output }],
        release: [{ type: Output }]
    };
    return ResizingComponent;
}());
if (false) {
    /** @type {?} */
    ResizingComponent.prototype.init;
    /** @type {?} */
    ResizingComponent.prototype.id;
    /** @type {?} */
    ResizingComponent.prototype.se;
    /** @type {?} */
    ResizingComponent.prototype.ne;
    /** @type {?} */
    ResizingComponent.prototype.sw;
    /** @type {?} */
    ResizingComponent.prototype.nw;
    /** @type {?} */
    ResizingComponent.prototype.pageWidth;
    /** @type {?} */
    ResizingComponent.prototype.pageHeight;
    /** @type {?} */
    ResizingComponent.prototype.SE;
    /** @type {?} */
    ResizingComponent.prototype.NE;
    /** @type {?} */
    ResizingComponent.prototype.SW;
    /** @type {?} */
    ResizingComponent.prototype.NW;
    /** @type {?} */
    ResizingComponent.prototype.offsetX;
    /** @type {?} */
    ResizingComponent.prototype.offsetY;
    /** @type {?} */
    ResizingComponent.prototype.offsetTop;
    /** @type {?} */
    ResizingComponent.prototype.offsetLeft;
    /** @type {?} */
    ResizingComponent.prototype.release;
    /**
     * @type {?}
     * @private
     */
    ResizingComponent.prototype.grab;
    /**
     * @type {?}
     * @private
     */
    ResizingComponent.prototype.oldPosition;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TopTabActivatorService = /** @class */ (function (_super) {
    __extends(TopTabActivatorService, _super);
    function TopTabActivatorService() {
        return _super.call(this) || this;
    }
    return TopTabActivatorService;
}(TabActivatorService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TopTabComponent = /** @class */ (function () {
    function TopTabComponent(_tabActivatorService, _modalService, _excMessageService) {
        var _this = this;
        this._tabActivatorService = _tabActivatorService;
        this._modalService = _modalService;
        this._excMessageService = _excMessageService;
        this.disabled = false;
        this.activeTab = new EventEmitter();
        this.elementPosition = 0;
        this.active = false;
        this.showToolTip = false;
        this._tabActivatorService.activeTabChange.subscribe((/**
         * @param {?} tabId
         * @return {?}
         */
        function (tabId) {
            _this.activation(tabId);
            if (tabId === null) {
                _this.activeTab.emit("");
            }
        }));
    }
    /**
     * @private
     * @param {?} tabId
     * @return {?}
     */
    TopTabComponent.prototype.activation = /**
     * @private
     * @param {?} tabId
     * @return {?}
     */
    function (tabId) {
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
    /**
     * @return {?}
     */
    TopTabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    TopTabComponent.prototype.toggleTab = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            this._modalService.open(CommonModals.ErrorMessage);
            this._excMessageService.changeMessage("Please open document first");
            return;
        }
        this._tabActivatorService.changeActiveTab(this.id);
    };
    TopTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-top-tab',
                    template: "<div class=\"gd-tab\" (mousedown)=\"toggleTab()\" gdTooltip (showToolTip)=\"showToolTip = $event\"\n     [ngClass]=\"(active) ? ((disabled) ? 'active disabled' : 'active') : ((disabled) ? 'disabled' : '')\">\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" class=\"gd-tab-tooltip\"\n              *ngIf=\"tooltip\" [position]=\"elementPosition\"></gd-tooltip>\n</div>\n",
                    styles: [".gd-tab{font-size:14px;color:#3e4e5a;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;align-content:center;-webkit-box-pack:center;justify-content:center;min-width:36px;height:36px;text-align:center;position:relative;white-space:nowrap;padding:0!important;margin:0 10px}.gd-tab .gd-tab-tooltip{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:0!important}.gd-tab.active{background-color:#acacac;color:#fff!important;font-weight:700}.gd-tab.disabled{cursor:not-allowed;opacity:.4}.gd-tab ::ng-deep .tooltip{font-size:12px;margin:20px -57px}.gd-tab .title{margin:auto 23px}@media (max-width:1037px){.gd-tab{font-size:20px}}"]
                }] }
    ];
    /** @nocollapse */
    TopTabComponent.ctorParameters = function () { return [
        { type: TopTabActivatorService },
        { type: ModalService },
        { type: ExceptionMessageService }
    ]; };
    TopTabComponent.propDecorators = {
        id: [{ type: Input }],
        icon: [{ type: Input }],
        disabled: [{ type: Input }],
        tooltip: [{ type: Input }],
        activeTab: [{ type: Output }],
        elementPosition: [{ type: Input }]
    };
    return TopTabComponent;
}());
if (false) {
    /** @type {?} */
    TopTabComponent.prototype.id;
    /** @type {?} */
    TopTabComponent.prototype.icon;
    /** @type {?} */
    TopTabComponent.prototype.disabled;
    /** @type {?} */
    TopTabComponent.prototype.tooltip;
    /** @type {?} */
    TopTabComponent.prototype.activeTab;
    /** @type {?} */
    TopTabComponent.prototype.elementPosition;
    /** @type {?} */
    TopTabComponent.prototype.active;
    /** @type {?} */
    TopTabComponent.prototype.showToolTip;
    /**
     * @type {?}
     * @private
     */
    TopTabComponent.prototype._tabActivatorService;
    /**
     * @type {?}
     * @private
     */
    TopTabComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    TopTabComponent.prototype._excMessageService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $$9 = jquery;
var TextMenuComponent = /** @class */ (function () {
    function TextMenuComponent(_onCloseService, _zoomService, _windowService, _elementRef, renderer) {
        var _this = this;
        this._onCloseService = _onCloseService;
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this._elementRef = _elementRef;
        this.renderer = renderer;
        this.decoration = true;
        this.showTooltips = true;
        this.outFontSize = new EventEmitter();
        this.outFont = new EventEmitter();
        this.outBold = new EventEmitter();
        this.outItalic = new EventEmitter();
        this.outUnderline = new EventEmitter();
        this.outColor = new EventEmitter();
        this.fontSizeOptions = FormattingService.getFontSizeOptions();
        this.fontOptions = FormattingService.getFontOptions();
        this.colorPickerShow = false;
        _onCloseService.onClose.subscribe((/**
         * @return {?}
         */
        function () {
            _this.colorPickerShow = false;
        }));
        this.isMobile = _windowService.isMobile();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            _this.isMobile = _windowService.isMobile();
        }));
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (_this.isMobile) {
                _this.changePosition(val);
            }
        }));
    }
    /**
     * @return {?}
     */
    TextMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} val
     * @return {?}
     */
    TextMenuComponent.prototype.changePosition = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var top = (window.innerHeight - 24 - this._elementRef.nativeElement.parentElement.getBoundingClientRect().top - this._elementRef.nativeElement.parentElement.getBoundingClientRect().height);
        /** @type {?} */
        var left = this._elementRef.nativeElement.parentElement.getBoundingClientRect().left;
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-text-menu'), 'width', window.innerWidth + 'px');
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-text-menu'), 'top', top + 'px');
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-text-menu'), 'left', -left + 'px');
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TextMenuComponent.prototype.selectFontSize = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $$9(".gd-wrapper").off("keyup");
        this.outFontSize.emit($event.value);
        $$9(".gd-wrapper").on("keyup", (/**
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
    TextMenuComponent.prototype.selectFont = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        event.preventDefault();
        event.stopPropagation();
        this.outFont.emit($event.value);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TextMenuComponent.prototype.toggleColorPicker = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.colorPickerShow = !this.colorPickerShow;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TextMenuComponent.prototype.selectColor = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.colorPickerShow = false;
        this.outColor.emit($event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TextMenuComponent.prototype.toggleBold = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.outBold.emit(!this.bold);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TextMenuComponent.prototype.toggleItalic = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.outItalic.emit(!this.italic);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TextMenuComponent.prototype.toggleUnderline = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.outUnderline.emit(!this.underline);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TextMenuComponent.prototype.closePicker = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.colorPickerShow = !$event;
    };
    TextMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-text-menu',
                    template: "<div class=\"gd-text-menu\">\n  <gd-select class=\"format-select first-component\" [options]=\"fontOptions\"\n             (selected)=\"selectFont($event)\"\n             [showSelected]=\"{name : font, value : font}\"></gd-select>\n  <gd-select class=\"format-select\" [options]=\"fontSizeOptions\"\n             (selected)=\"selectFontSize($event)\"\n             [showSelected]=\"{name : fontSize + 'px', value : fontSize}\"></gd-select>\n  <gd-button [icon]=\"'bold'\" [tooltip]=\"showTooltips ? 'Bold' : null\" *ngIf=\"decoration\"\n             (click)=\"toggleBold($event)\" (touchstart)=\"toggleBold($event)\" [toggle]=\"bold\"></gd-button>\n  <gd-button [icon]=\"'italic'\" [tooltip]=\"showTooltips ? 'Italic' : null\" *ngIf=\"decoration\"\n             (click)=\"toggleItalic($event)\" (touchstart)=\"toggleItalic($event)\" [toggle]=\"italic\"></gd-button>\n  <gd-button [icon]=\"'underline'\" [tooltip]=\"showTooltips ? 'Underline' : null\" *ngIf=\"decoration\"\n             (click)=\"toggleUnderline($event)\" (touchstart)=\"toggleUnderline($event)\" [toggle]=\"underline\"></gd-button>\n  <gd-button name=\"button\" class=\"color-for-text\" [icon]=\"'font'\" [tooltip]=\"showTooltips ? 'Color' : null\"\n             (click)=\"toggleColorPicker($event)\" (touchstart)=\"toggleColorPicker($event)\">\n    <div class=\"bg-color-pic\" [style.background-color]=\"color\"></div>\n  </gd-button>\n  <gd-color-picker [isOpen]=\"colorPickerShow\" (closeOutside)=\"closePicker($event)\"\n                   [className]=\"'palette'\"\n                   (selectedColor)=\"selectColor($event)\"></gd-color-picker>\n  <ng-content></ng-content>\n</div>\n",
                    styles: ["::ng-deep .active{background-color:#e7e7e7}.gd-text-menu{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.gd-text-menu .format-select{height:37px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;max-width:80px;margin:0 3px}.gd-text-menu .first-component{margin-left:8px}.gd-text-menu ::ng-deep .dropdown-menu{top:40px!important;height:120px;overflow-y:auto}.gd-text-menu ::ng-deep .icon-button{margin:0!important}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}.palette{position:relative;top:40px;left:-55px;z-index:100}@media (max-width:1037px){.gd-text-menu{position:fixed;left:0;right:0;width:inherit;height:60px;-webkit-box-align:center;align-items:center;padding:0;margin:0;background-color:#fff;border-top:2px solid #707070;-webkit-transform-origin:top left;transform-origin:top left;z-index:1000}.gd-text-menu ::ng-deep .selected-value{white-space:normal!important;word-wrap:break-word}.gd-text-menu .icon{color:#fff;margin:0 9px}.gd-text-menu ::ng-deep .bcPicker-palette{left:-200px;top:-185px}.gd-text-menu .palette{top:unset;bottom:40px;left:unset;right:5px}.gd-text-menu ::ng-deep .dropdown-menu{bottom:40px;top:unset!important}.gd-text-menu ::ng-deep .first-component ::ng-deep .dropdown-menu{left:0}.gd-text-menu ::ng-deep .button{margin:3px!important;font-size:16px}}"]
                }] }
    ];
    /** @nocollapse */
    TextMenuComponent.ctorParameters = function () { return [
        { type: OnCloseService },
        { type: ZoomService },
        { type: WindowService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    TextMenuComponent.propDecorators = {
        blur: [{ type: Input }],
        fontSize: [{ type: Input }],
        font: [{ type: Input }],
        bold: [{ type: Input }],
        italic: [{ type: Input }],
        underline: [{ type: Input }],
        color: [{ type: Input }],
        decoration: [{ type: Input }],
        showTooltips: [{ type: Input }],
        outFontSize: [{ type: Output }],
        outFont: [{ type: Output }],
        outBold: [{ type: Output }],
        outItalic: [{ type: Output }],
        outUnderline: [{ type: Output }],
        outColor: [{ type: Output }]
    };
    return TextMenuComponent;
}());
if (false) {
    /** @type {?} */
    TextMenuComponent.prototype.blur;
    /** @type {?} */
    TextMenuComponent.prototype.fontSize;
    /** @type {?} */
    TextMenuComponent.prototype.font;
    /** @type {?} */
    TextMenuComponent.prototype.bold;
    /** @type {?} */
    TextMenuComponent.prototype.italic;
    /** @type {?} */
    TextMenuComponent.prototype.underline;
    /** @type {?} */
    TextMenuComponent.prototype.color;
    /** @type {?} */
    TextMenuComponent.prototype.decoration;
    /** @type {?} */
    TextMenuComponent.prototype.showTooltips;
    /** @type {?} */
    TextMenuComponent.prototype.outFontSize;
    /** @type {?} */
    TextMenuComponent.prototype.outFont;
    /** @type {?} */
    TextMenuComponent.prototype.outBold;
    /** @type {?} */
    TextMenuComponent.prototype.outItalic;
    /** @type {?} */
    TextMenuComponent.prototype.outUnderline;
    /** @type {?} */
    TextMenuComponent.prototype.outColor;
    /** @type {?} */
    TextMenuComponent.prototype.fontSizeOptions;
    /** @type {?} */
    TextMenuComponent.prototype.fontOptions;
    /** @type {?} */
    TextMenuComponent.prototype.colorPickerShow;
    /** @type {?} */
    TextMenuComponent.prototype.isMobile;
    /**
     * @type {?}
     * @private
     */
    TextMenuComponent.prototype._onCloseService;
    /**
     * @type {?}
     * @private
     */
    TextMenuComponent.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    TextMenuComponent.prototype._windowService;
    /**
     * @type {?}
     * @protected
     */
    TextMenuComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TextMenuComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MenuType = /** @class */ (function () {
    function MenuType() {
    }
    MenuType.FOR_SIGNATURE = "signature";
    MenuType.FOR_TEXT_SIGNATURE = "text_signature";
    MenuType.FOR_ANNOTATION = "annotation";
    return MenuType;
}());
if (false) {
    /** @type {?} */
    MenuType.FOR_SIGNATURE;
    /** @type {?} */
    MenuType.FOR_TEXT_SIGNATURE;
    /** @type {?} */
    MenuType.FOR_ANNOTATION;
}
var ContextMenuComponent = /** @class */ (function () {
    function ContextMenuComponent(_windowService, _zoomService, _elementRef, renderer) {
        var _this = this;
        this._windowService = _windowService;
        this._zoomService = _zoomService;
        this._elementRef = _elementRef;
        this.renderer = renderer;
        this.formatting = Formatting.default();
        this.lock = false;
        this.translation = 0;
        this.changeFormatting = new EventEmitter();
        this.removeItem = new EventEmitter();
        this.saveItemEmitter = new EventEmitter();
        this.copySign = new EventEmitter();
        this.lockOut = new EventEmitter();
        this.comment = new EventEmitter();
        this.isMobile = _windowService.isMobile();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            _this.isMobile = _windowService.isMobile();
        }));
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (_this.isMobile) {
                _this.changeScale(val);
            }
        }));
    }
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ContextMenuComponent.prototype.changeScale = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-context-menu'), 'transform', 'scale(' + 1 / (val / 100) + ')');
    };
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.saveChanges = /**
     * @return {?}
     */
    function () {
        this.changeFormatting.emit(this.formatting);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ContextMenuComponent.prototype.selectFontSize = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.formatting.fontSize = $event;
        this.saveChanges();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ContextMenuComponent.prototype.selectFont = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.formatting.font = $event;
        this.saveChanges();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ContextMenuComponent.prototype.selectColor = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.formatting.color = $event;
        this.saveChanges();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ContextMenuComponent.prototype.toggleBold = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.formatting.bold = $event;
        this.saveChanges();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ContextMenuComponent.prototype.toggleItalic = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.formatting.italic = $event;
        this.saveChanges();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ContextMenuComponent.prototype.toggleUnderline = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.formatting.underline = $event;
        this.saveChanges();
    };
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.deleteItem = /**
     * @return {?}
     */
    function () {
        this.removeItem.emit(true);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ContextMenuComponent.prototype.saveItem = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.saveItemEmitter.emit(true);
        $event.preventDefault();
        $event.stopPropagation();
    };
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.toggleLock = /**
     * @return {?}
     */
    function () {
        this.lock = !this.lock;
        this.lockOut.emit(this.lock);
    };
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.onCopySign = /**
     * @return {?}
     */
    function () {
        this.copySign.emit(true);
    };
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.isSignature = /**
     * @return {?}
     */
    function () {
        return this.menuType === MenuType.FOR_SIGNATURE;
    };
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.isTextSignature = /**
     * @return {?}
     */
    function () {
        return this.menuType === MenuType.FOR_TEXT_SIGNATURE;
    };
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.isAnnotation = /**
     * @return {?}
     */
    function () {
        return this.menuType === MenuType.FOR_ANNOTATION;
    };
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.addComment = /**
     * @return {?}
     */
    function () {
        this.comment.emit(true);
    };
    ContextMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-context-menu',
                    template: "<div class=\"gd-context-menu\" [ngStyle]=\"isMobile ? null : {transform: 'translateX(' + translation + 'px)'}\"\n     [ngClass]=\"topPosition > 10 ? 'gd-context-menu-top' : 'gd-context-menu-bottom'\">\n  <gd-button [icon]=\"'arrows-alt'\" [class]=\"'ng-fa-icon icon arrows'\" [iconSize]=\"'sm'\"></gd-button>\n  <gd-text-menu *ngIf=\"textMenu\" [blur]=\"isMobile && (isSignature() || isTextSignature())\" [color]=\"formatting.color\" [bold]=\"formatting.bold\"\n                [font]=\"formatting.font\" [fontSize]=\"formatting.fontSize\" [italic]=\"formatting.italic\"\n                [underline]=\"formatting.underline\" (outBold)=\"toggleBold($event)\"\n                (outUnderline)=\"toggleUnderline($event)\" (outItalic)=\"toggleItalic($event)\"\n                (outColor)=\"selectColor($event)\" (outFont)=\"selectFont($event)\"\n                (outFontSize)=\"selectFontSize($event)\" [decoration]=\"isSignature() || isTextSignature()\"></gd-text-menu>\n  <gd-button *ngIf=\"isSignature() || isTextSignature()\" [icon]=\"lock ? 'lock' : 'unlock'\" [class]=\"'ng-fa-icon icon'\"\n             (click)=\"toggleLock()\"></gd-button>\n  <gd-button *ngIf=\"isSignature() || isTextSignature()\" [icon]=\"'copy'\" [class]=\"'ng-fa-icon icon'\" (click)=\"onCopySign()\"\n             (touchstart)=\"onCopySign()\"></gd-button>\n  <gd-button [icon]=\"'trash'\" [class]=\"'ng-fa-icon icon remove'\" (click)=\"deleteItem()\"\n             (touchstart)=\"deleteItem()\"></gd-button>\n  <gd-button *ngIf=\"isTextSignature()\" [icon]=\"'check'\" [class]=\"'ng-fa-icon icon save'\" (click)=\"saveItem($event)\"\n             (touchstart)=\"saveItem($event)\"></gd-button>\n  <gd-button *ngIf=\"isAnnotation()\" [icon]=\"'comment'\" [class]=\"'ng-fa-icon icon'\" (click)=\"addComment()\"\n             (touchstart)=\"addComment()\"></gd-button>\n</div>\n",
                    styles: [".gd-context-menu-top{top:-44px}.gd-context-menu-bottom{bottom:-40px}.gd-context-menu{box-shadow:rgba(0,0,0,.52) 0 0 5px;background-color:#fff;position:absolute;left:0;right:0;margin:auto;cursor:default;width:max-content;width:-moz-max-content;width:-webkit-max-content;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;z-index:999}.gd-context-menu .arrows{cursor:move}.gd-context-menu ::ng-deep .active{background-color:#e7e7e7}.gd-context-menu ::ng-deep .icon-button{margin:0!important}@media (max-width:1037px){.gd-context-menu-top{top:-42px;-webkit-transform-origin:bottom center;transform-origin:bottom center}}"]
                }] }
    ];
    /** @nocollapse */
    ContextMenuComponent.ctorParameters = function () { return [
        { type: WindowService },
        { type: ZoomService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    ContextMenuComponent.propDecorators = {
        formatting: [{ type: Input }],
        textMenu: [{ type: Input }],
        topPosition: [{ type: Input }],
        lock: [{ type: Input }],
        translation: [{ type: Input }],
        menuType: [{ type: Input }],
        changeFormatting: [{ type: Output }],
        removeItem: [{ type: Output }],
        saveItemEmitter: [{ type: Output }],
        copySign: [{ type: Output }],
        lockOut: [{ type: Output }],
        comment: [{ type: Output }]
    };
    return ContextMenuComponent;
}());
if (false) {
    /** @type {?} */
    ContextMenuComponent.prototype.formatting;
    /** @type {?} */
    ContextMenuComponent.prototype.textMenu;
    /** @type {?} */
    ContextMenuComponent.prototype.topPosition;
    /** @type {?} */
    ContextMenuComponent.prototype.lock;
    /** @type {?} */
    ContextMenuComponent.prototype.translation;
    /** @type {?} */
    ContextMenuComponent.prototype.menuType;
    /** @type {?} */
    ContextMenuComponent.prototype.changeFormatting;
    /** @type {?} */
    ContextMenuComponent.prototype.removeItem;
    /** @type {?} */
    ContextMenuComponent.prototype.saveItemEmitter;
    /** @type {?} */
    ContextMenuComponent.prototype.copySign;
    /** @type {?} */
    ContextMenuComponent.prototype.lockOut;
    /** @type {?} */
    ContextMenuComponent.prototype.comment;
    /** @type {?} */
    ContextMenuComponent.prototype.isMobile;
    /**
     * @type {?}
     * @private
     */
    ContextMenuComponent.prototype._windowService;
    /**
     * @type {?}
     * @private
     */
    ContextMenuComponent.prototype._zoomService;
    /**
     * @type {?}
     * @protected
     */
    ContextMenuComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    ContextMenuComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageMarkerDirective = /** @class */ (function () {
    function PageMarkerDirective(_zoomService, _windowService, el) {
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this.naming = {
            sectionSelector: "section.section",
            markerSelector: "span.page8marker",
            headerSelector: "header.header",
            contentSelector: "article.content",
            footerSelector: "footer.footer"
        };
        // observing configurations.
        this.config = {
            attributes: true,
            attributeOldValue: true,
            childList: true,
            subtree: true,
            characterData: true,
            characterDataOldValue: true,
            attributeFilter: ["style", "class"]
        };
        this.el = el;
    }
    /**
     * @return {?}
     */
    PageMarkerDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sections = document.querySelectorAll(this.naming.sectionSelector);
        for (var index = 0; index < sections.length; index++) {
            // get section
            /** @type {?} */
            var section = sections[index];
            // process section. add markers to this one.
            this.processSection(section);
            // Create an observer instance linked to the callback function.
            /** @type {?} */
            var observer = new MutationObserver(this.callback.bind(this));
            // Start observing the target sections for configured mutations.
            observer.observe(section, this.config);
        }
    };
    // Callback function to execute when mutations are observed.
    // Callback function to execute when mutations are observed.
    /**
     * @param {?} mutationsList
     * @param {?} observer
     * @return {?}
     */
    PageMarkerDirective.prototype.callback = 
    // Callback function to execute when mutations are observed.
    /**
     * @param {?} mutationsList
     * @param {?} observer
     * @return {?}
     */
    function (mutationsList, observer) {
        // get first MutationRecord from list.
        /** @type {?} */
        var mutationFirst = mutationsList[0];
        // get parent section.
        /** @type {?} */
        var parentNode = mutationFirst.target.parentNode;
        if (parentNode) {
            /** @type {?} */
            var target = mutationFirst.target.parentNode.closest(this.naming.sectionSelector);
            if (target === null || target === "undefined") {
                return;
            }
            // remove all markers in the current section.
            target.querySelectorAll(this.naming.markerSelector).forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                element.remove();
            }));
            // add marker to target sections.
            this.processSection(target);
            // a list of all matching DOM changes that have been detected but not yet processed by the observer's callback function, leaving the mutation queue empty.
            // MAIN REASON - leaving the mutation queue empty. 
            /** @type {?} */
            var lest = observer.takeRecords();
        }
    };
    ;
    /**
     * @param {?} section
     * @return {?}
     */
    PageMarkerDirective.prototype.processSection = /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        /** @type {?} */
        var headerHeight = this.processHeader(section);
        /** @type {?} */
        var footerHeight = this.processFooter(section);
        // get max page height - from css 'paginal.css'
        /** @type {?} */
        var styling = getComputedStyle(section, null);
        /** @type {?} */
        var minHeight = styling.getPropertyValue('min-height');
        /** @type {?} */
        var minHeightNumber = parseFloat(minHeight);
        /** @type {?} */
        var contentHeight = minHeightNumber - headerHeight - footerHeight;
        /** @type {?} */
        var realHeight = this.processContent(section);
        /** @type {?} */
        var endPageCoordinate = contentHeight;
        while (endPageCoordinate < realHeight) {
            /** @type {?} */
            var marker = this.htmlToElements("<span class='page8marker' style='top:" + Math.ceil(endPageCoordinate) +
                "px;'></span>");
            marker.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                section.appendChild(item);
            }));
            endPageCoordinate += contentHeight;
        }
    };
    // calculate header's height.
    // calculate header's height.
    /**
     * @param {?} section
     * @return {?}
     */
    PageMarkerDirective.prototype.processHeader = 
    // calculate header's height.
    /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        /** @type {?} */
        var header = section.querySelector(this.naming.headerSelector);
        return header.getBoundingClientRect().height;
    };
    ;
    // calculate real height of the content. without padding.
    // calculate real height of the content. without padding.
    /**
     * @param {?} section
     * @return {?}
     */
    PageMarkerDirective.prototype.processContent = 
    // calculate real height of the content. without padding.
    /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        /** @type {?} */
        var content = section.querySelector(this.naming.contentSelector);
        /** @type {?} */
        var height = content.getBoundingClientRect().height;
        /** @type {?} */
        var styling = getComputedStyle(content, null);
        /** @type {?} */
        var paddingBottom = styling.getPropertyValue('padding-bottom');
        /** @type {?} */
        var paddingTop = styling.getPropertyValue('padding-top');
        return height - parseFloat(paddingBottom) - parseFloat(paddingTop);
    };
    ;
    // calculate footer's height.
    // calculate footer's height.
    /**
     * @param {?} section
     * @return {?}
     */
    PageMarkerDirective.prototype.processFooter = 
    // calculate footer's height.
    /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        /** @type {?} */
        var footer = section.querySelector(this.naming.footerSelector);
        return footer.getBoundingClientRect().height;
    };
    ;
    // create dom element from string.
    // create dom element from string.
    /**
     * @param {?} html
     * @return {?}
     */
    PageMarkerDirective.prototype.htmlToElements = 
    // create dom element from string.
    /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        /** @type {?} */
        var template = document.createElement('template');
        template.innerHTML = html;
        return template.content.childNodes;
    };
    PageMarkerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdPageMarker]'
                },] }
    ];
    /** @nocollapse */
    PageMarkerDirective.ctorParameters = function () { return [
        { type: ZoomService },
        { type: WindowService },
        { type: ElementRef }
    ]; };
    return PageMarkerDirective;
}());
if (false) {
    /** @type {?} */
    PageMarkerDirective.prototype.naming;
    /** @type {?} */
    PageMarkerDirective.prototype.config;
    /** @type {?} */
    PageMarkerDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    PageMarkerDirective.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    PageMarkerDirective.prototype._windowService;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ThumbnailsComponent = /** @class */ (function () {
    function ThumbnailsComponent(_navigateService, _zoomService) {
        this._navigateService = _navigateService;
        this._zoomService = _zoomService;
        this.selectedPage = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ThumbnailsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ThumbnailsComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
        // which leads to undesired spaces on the top of the docs pages
        if (this.pages) {
            this.pages.forEach((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                if (page.data) {
                    page.data = page.data.replace(/>\s+</g, '><')
                        .replace(/\uFEFF/g, "");
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    ThumbnailsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._zoomService.changeZoom(this._zoomService.zoom);
    };
    /**
     * @return {?}
     */
    ThumbnailsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._zoomService.changeZoom(_this._zoomService.zoom);
        }), 100);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ThumbnailsComponent.prototype.imgData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (data) {
            return data.startsWith('data:image')
                ? data
                : 'data:image/png;base64,' + data;
        }
        return null;
    };
    /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    ThumbnailsComponent.prototype.getScale = /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (x, y) {
        return Math.min(190 / x, 190 / y);
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    ThumbnailsComponent.prototype.openPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        this.selectedPage.emit(pageNumber);
        this._navigateService.navigateTo(pageNumber);
    };
    // TODO: consider placing in one service
    // TODO: consider placing in one service
    /**
     * @param {?} value
     * @return {?}
     */
    ThumbnailsComponent.prototype.getDimensionWithUnit = 
    // TODO: consider placing in one service
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value + FileUtil.find(this.guid, false).unit;
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    ThumbnailsComponent.prototype.emptyThumbData = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        return "<div style=\"height:100%;display:grid;color:#bfbfbf\"><div style=\"font-size:10vw;margin:auto;text-align:center;\">" + pageNumber + "</div></div>";
    };
    ThumbnailsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-thumbnails',
                    template: "<div class=\"gd-thumbnails\">\n  <div class=\"gd-thumbnails-panzoom\">\n    <div *ngFor=\"let page of pages\" id=\"gd-thumbnails-page-{{page.number}}\" class=\"gd-page\"\n         (click)=\"openPage(page.number)\" gdRotation [withMargin]=\"false\"\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <div class=\"gd-wrapper\"\n           [style.height]=\"getDimensionWithUnit(page.height)\"\n           [style.width]=\"getDimensionWithUnit(page.width)\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && isHtmlMode\"\n           [innerHTML]=\"page.data | safeHtml\"></div>\n      <div class=\"gd-wrapper\" \n           [style.height]=\"getDimensionWithUnit(page.height)\"\n           [style.width]=\"getDimensionWithUnit(page.width)\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && !isHtmlMode\">\n           <img style=\"width: inherit !important\" class=\"gd-page-image\" [attr.src]=\"imgData(page.data) | safeResourceHtml\"\n             alt/>\n      </div>\n      <div class=\"gd-wrapper\"\n           [style.height]=\"getDimensionWithUnit(800)\"\n           [style.width]=\"getDimensionWithUnit(800)\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(800, 800)+')'}\"\n           *ngIf=\"!page.data\"\n           [innerHTML]=\"emptyThumbData(page.number) | safeHtml\">\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: [":host{-webkit-box-flex:0;flex:0 0 300px;background:#f5f5f5;color:#fff;overflow-y:auto;display:block;-webkit-transition:margin-left .2s;transition:margin-left .2s;height:100%}.gd-page{width:272px;height:272px;-webkit-transition:.3s;transition:.3s;background-color:#e7e7e7;cursor:pointer;margin:14px 14px 0}.gd-page:hover{background-color:silver}.gd-wrapper{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);left:50%;top:50%;position:relative;background-color:#fff;box-shadow:0 4px 12px -4px rgba(0,0,0,.38);pointer-events:none}.gd-wrapper ::ng-deep img{width:inherit}.gd-thumbnails::-webkit-scrollbar{width:0;background-color:#f5f5f5}.gd-thumbnails-panzoom>.gd-thumbnails-landscape{margin:-134px 0 -1px 12px}.gd-thumbnails .gd-page-image{height:inherit}.gd-thumbnails-landscape-image{margin:-90px 0 -23px!important}.gd-thumbnails-landscape-image-rotated{margin:126px 0 -3px -104px!important}"]
                }] }
    ];
    /** @nocollapse */
    ThumbnailsComponent.ctorParameters = function () { return [
        { type: NavigateService },
        { type: ZoomService }
    ]; };
    ThumbnailsComponent.propDecorators = {
        pages: [{ type: Input }],
        guid: [{ type: Input }],
        mode: [{ type: Input }],
        isHtmlMode: [{ type: Input }],
        selectedPage: [{ type: Output }]
    };
    return ThumbnailsComponent;
}());
if (false) {
    /** @type {?} */
    ThumbnailsComponent.prototype.pages;
    /** @type {?} */
    ThumbnailsComponent.prototype.guid;
    /** @type {?} */
    ThumbnailsComponent.prototype.mode;
    /** @type {?} */
    ThumbnailsComponent.prototype.isHtmlMode;
    /** @type {?} */
    ThumbnailsComponent.prototype.selectedPage;
    /**
     * @type {?}
     * @private
     */
    ThumbnailsComponent.prototype._navigateService;
    /**
     * @type {?}
     * @private
     */
    ThumbnailsComponent.prototype._zoomService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollableEditedDirective = /** @class */ (function () {
    function ScrollableEditedDirective(_elementRef, _navigateService, _pagePreloadService, _zoomService, _windowService, _viewportService) {
        this._elementRef = _elementRef;
        this._navigateService = _navigateService;
        this._pagePreloadService = _pagePreloadService;
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this._viewportService = _viewportService;
        this.loadedPagesSet = new Set();
    }
    /**
     * @return {?}
     */
    ScrollableEditedDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.refresh();
        fromEvent(window, 'resize')
            .pipe(throttleTime(100, undefined, { trailing: true })).subscribe((/**
         * @return {?}
         */
        function () { return _this.refresh(); }));
        fromEvent(this._elementRef.nativeElement, 'scroll')
            .pipe(throttleTime(100, undefined, { trailing: true }))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.refresh(); }));
        this._zoomService.zoomChange
            .pipe(delay(300))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.refresh(); }));
        this._navigateService.navigate.subscribe(((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.currentPage = value;
            _this.scrollToPage(value);
        })));
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    ScrollableEditedDirective.prototype.scrollToPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        /** @type {?} */
        var el = this._elementRef.nativeElement;
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
    ScrollableEditedDirective.prototype.getChildren = /**
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
    ScrollableEditedDirective.prototype.calculateOffset = /**
     * @private
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        /** @type {?} */
        var pages = this.getChildren();
        if (!pages.length) {
            return;
        }
        return ((/** @type {?} */ (pages.item(pageNumber - 1).getBoundingClientRect()))).y + this._elementRef.nativeElement.scrollTop - 70;
    };
    /**
     * @return {?}
     */
    ScrollableEditedDirective.prototype.refresh = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pages = this.getChildren();
        /** @type {?} */
        var pageNum = 0;
        /** @type {?} */
        var counter = 0;
        while (counter < pages.length) {
            if (this._viewportService.isBelowCenterOfTheScreen((/** @type {?} */ (pages.item(counter))), this._elementRef.nativeElement)) {
                pageNum = counter + 1;
            }
            else if (pageNum) {
                counter = pages.length;
            }
            counter++;
            if (!this.loadedPagesSet.has(counter)) {
                this._pagePreloadService.changeLastPageInView(counter);
                this.loadedPagesSet.add(counter);
            }
        }
        if ((this.isPresentation && this._navigateService.currentPage === 0) || !this.isPresentation) {
            this._navigateService.currentPage = pageNum;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ScrollableEditedDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.refresh();
    };
    ScrollableEditedDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdScrollableEdited]'
                },] }
    ];
    /** @nocollapse */
    ScrollableEditedDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NavigateService },
        { type: PagePreloadService },
        { type: ZoomService },
        { type: WindowService },
        { type: ViewportService }
    ]; };
    ScrollableEditedDirective.propDecorators = {
        isPresentation: [{ type: Input }]
    };
    return ScrollableEditedDirective;
}());
if (false) {
    /** @type {?} */
    ScrollableEditedDirective.prototype.isPresentation;
    /**
     * @type {?}
     * @private
     */
    ScrollableEditedDirective.prototype.currentPage;
    /**
     * @type {?}
     * @private
     */
    ScrollableEditedDirective.prototype.loadedPagesSet;
    /**
     * @type {?}
     * @private
     */
    ScrollableEditedDirective.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    ScrollableEditedDirective.prototype._navigateService;
    /**
     * @type {?}
     * @private
     */
    ScrollableEditedDirective.prototype._pagePreloadService;
    /**
     * @type {?}
     * @private
     */
    ScrollableEditedDirective.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    ScrollableEditedDirective.prototype._windowService;
    /**
     * @type {?}
     * @private
     */
    ScrollableEditedDirective.prototype._viewportService;
}

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
    HostingDynamicComponentService,
    TopTabActivatorService];
var CommonComponentsModule = /** @class */ (function () {
    function CommonComponentsModule() {
        library.add(fas, far);
    }
    CommonComponentsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FontAwesomeModule,
                        ClickOutsideModule,
                        TranslateModule
                    ],
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
                        ScrollableEditedDirective,
                        MouseWheelDirective,
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
                        ResizingComponent,
                        TopTabComponent,
                        TextMenuComponent,
                        ContextMenuComponent,
                        PageMarkerDirective,
                        ThumbnailsComponent
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
                        ScrollableEditedDirective,
                        MouseWheelDirective,
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
                        ZoomDirective,
                        DropDownToggleComponent,
                        LeftSideBarComponent,
                        TooltipDirective,
                        HostDynamicDirective,
                        ResizingComponent,
                        TopTabComponent,
                        TextMenuComponent,
                        ContextMenuComponent,
                        PageMarkerDirective,
                        ThumbnailsComponent
                    ],
                    providers: providers
                },] }
    ];
    /** @nocollapse */
    CommonComponentsModule.ctorParameters = function () { return []; };
    return CommonComponentsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var AR = {
    "Open document": "افتح المستند",
    "Upload file": "رفع ملف",
    "Drop file here to upload": "قم بإسقاط الملف هنا للتحميل",
    "Disc": "قرص",
    "URL": "URL",
    "FILE": "ملف",
    "SIZE": "بحجم",
    "MB": "ميغا بايت",
    "KB": "كيلو بايت",
    "Bytes": "بايت",
    "Loading... Please wait.": "جاري التحميل انتظر من فضلك.",
    "Fit Width": "العرض المناسب",
    "Fit Height": "ارتفاع ملائم",
    "Password protected document": "وثيقة محمية بكلمة مرور",
    "Password": "كلمه السر",
    "Open": "افتح",
    "Password Required": "كلمة المرور مطلوبة",
    "Incorrect password": "كلمة سر خاطئة",
    "Error": "خطأ",
    "Something went wrong": "هناك خطأ ما",
    "Server is not available": "الخادم غير متاح",
    "of": "من",
    "Please wait...": "ارجوك انتظر..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CA = {
    "Open document": "Obre el document",
    "Upload file": "Penja el document",
    "Drop file here to upload": "Deixa anar el fitxer aquí per penjar-lo",
    "Disc": "Disc",
    "URL": "URL",
    "FILE": "DOSSIER",
    "SIZE": "TALLA",
    "MB": "MB",
    "KB": "KB",
    "Bytes": "Bytes",
    "Loading... Please wait.": "Carregant, esperi, si us plau.",
    "Fit Width": "Amplada d’ajust",
    "Fit Height": "Ajust de l'alçada",
    "Password protected document": "Document protegit amb contrasenya",
    "Password": "Contrasenya",
    "Open": "Obert",
    "Password Required": "Es requereix una contrasenya",
    "Incorrect password": "contrasenya incorrecta",
    "Error": "Error",
    "Something went wrong": "Alguna cosa ha anat malament",
    "Server is not available": "El servidor no està disponible",
    "of": "de",
    "Please wait...": "Si us plau, espereu ..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CS = {
    "Open document": "Otevřít dokument",
    "Upload file": "Nahrát soubor",
    "Drop file here to upload": "Přetáhněte soubor sem a nahrajte jej",
    "Disc": "Disk",
    "URL": "URL",
    "FILE": "SOUBOR",
    "SIZE": "VELIKOST",
    "MB": "MB",
    "KB": "KB",
    "Bytes": "Bajty",
    "Loading... Please wait.": "Načítání prosím čekejte.",
    "Fit Width": "Přizpůsobit šířce",
    "Fit Height": "Přizpůsobit výšce",
    "Password protected document": "Dokument chráněný heslem",
    "Password": "Heslo",
    "Open": "Otevřeno",
    "Password Required": "Vyžadováno heslo",
    "Incorrect password": "Nesprávné heslo",
    "Error": "Chyba",
    "Something went wrong": "Něco se pokazilo",
    "Server is not available": "Server není k dispozici",
    "of": "z",
    "Please wait...": "Prosím, čekejte..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DA = {
    "Open document": "Åbn dokument",
    "Upload file": "Upload fil",
    "Drop file here to upload": "Drop filen her for at uploade",
    "Disc": "Disk",
    "URL": "URL",
    "FILE": "FIL",
    "SIZE": "STØRRELSE",
    "MB": "MB",
    "KB": "KB",
    "Bytes": "Bytes",
    "Loading... Please wait.": "Indlæser vent venligst.",
    "Fit Width": "Tilpas bredde",
    "Fit Height": "Tilpas højde",
    "Password protected document": "Adgangskodebeskyttet dokument",
    "Password": "Adgangskode",
    "Open": "Åben",
    "Password Required": "Adgangskode påkrævet",
    "Incorrect password": "forkert kodeord",
    "Error": "Fejl",
    "Something went wrong": "Noget gik galt",
    "Server is not available": "Serveren er ikke tilgængelig",
    "of": "af",
    "Please wait...": "Vent venligst..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DE = {
    "Open document": "Dokument öffnen",
    "Upload file": "Datei hochladen",
    "Drop file here to upload": "Datei zum Hochladen hier ablegen",
    "Disc": "Rabatt",
    "URL": "URL",
    "FILE": "DATEI",
    "SIZE": "GRÖSSE",
    "MB": "MB",
    "KB": "KB",
    "Bytes": "Bytes",
    "Loading... Please wait.": "Laden, bitte warten.",
    "Fit Width": "Breite anpassen",
    "Fit Height": "Passende Höhe",
    "Password protected document": "Passwortgeschütztes Dokument",
    "Password": "Passwort",
    "Open": "Offen",
    "Password Required": "Passwort erforderlich",
    "Incorrect password": "Falsches Passwort",
    "Error": "Fehler",
    "Something went wrong": "Etwas ist schief gelaufen",
    "Server is not available": "Server nicht verfügbar",
    "of": "von",
    "Please wait...": "Warten Sie mal..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var EL = {
    "Open document": "Άνοιγμα εγγράφου",
    "Upload file": "Ανέβασμα αρχείου",
    "Drop file here to upload": "Αφήστε το αρχείο εδώ για μεταφόρτωση",
    "Disc": "Δίσκος",
    "URL": "URL",
    "FILE": "ΑΡΧΕΙΟ",
    "SIZE": "ΜΕΓΕΘΟΣ",
    "MB": "MB",
    "KB": "KB",
    "Bytes": "Bytes",
    "Loading... Please wait.": "Φορτώνει παρακαλώ περιμένετε.",
    "Fit Width": "Fit Width",
    "Fit Height": "Fit Height",
    "Password protected document": "Έγγραφο προστατευμένο με κωδικό πρόσβασης",
    "Password": "Κωδικός πρόσβασης",
    "Open": "Ανοιξε",
    "Password Required": "Απαιτείται κωδικός πρόσβασης",
    "Incorrect password": "Λάθος κωδικός",
    "Error": "Λάθος",
    "Something went wrong": "Κάτι πήγε στραβά",
    "Server is not available": "Ο διακομιστής δεν είναι διαθέσιμος",
    "of": "του",
    "Please wait...": "Παρακαλώ περιμένετε..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var EN = {
    "Open document": "Open document",
    "Upload file": "Upload file",
    "Drop file here to upload": "Drop file here to upload",
    "Disc": "Disc",
    "URL": "URL",
    "FILE": "FILE",
    "SIZE": "SIZE",
    "MB": "MB",
    "KB": "KB",
    "Bytes": "Bytes",
    "Loading... Please wait.": "Loading... Please wait.",
    "Fit Width": "Fit Width",
    "Fit Height": "Fit Height",
    "Password protected document": "Password protected document",
    "Password": "Password",
    "Open": "Open",
    "Password Required": "Password Required",
    "Incorrect password": "Incorrect password",
    "Error": "Error",
    "Something went wrong": "Something went wrong",
    "Server is not available": "Server is not available",
    "of": "of",
    "Please wait...": "Please wait..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ES = {
    "Open document": "Abrir documento",
    "Upload file": "Subir archivo",
    "Drop file here to upload": "Suelta el archivo aquí para subirlo",
    "Disc": "Desct",
    "URL": "URL",
    "FILE": "EXPEDIENTE",
    "SIZE": "TALLA",
    "MB": "MEGABYTE",
    "KB": "KB",
    "Bytes": "Bytes",
    "Loading... Please wait.": "Cargando por favor espere.",
    "Fit Width": "Ajuste ancho",
    "Fit Height": "Altura de ajuste",
    "Password protected document": "Documento protegido con contraseña",
    "Password": "Contraseña",
    "Open": "Abierto",
    "Password Required": "Se requiere contraseña",
    "Incorrect password": "Contraseña incorrecta",
    "Error": "Error",
    "Something went wrong": "Algo salió mal",
    "Server is not available": "El servidor no esta disponible",
    "of": "de",
    "Please wait...": "Espere por favor..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var FIL = {
    "Open document": "Buksan ang dokumento",
    "Upload file": "Mag-upload ng file",
    "Drop file here to upload": "I-drop ang file dito upang mai-upload",
    "Disc": "Disc",
    "URL": "URL",
    "FILE": "FILE",
    "SIZE": "SIZE",
    "MB": "MB",
    "KB": "KB",
    "Bytes": "Mga byte",
    "Loading... Please wait.": "Naglo-load ... Mangyaring maghintay.",
    "Fit Width": "Pagkasyahin ang Lapad",
    "Fit Height": "Pagkasyahin sa Taas",
    "Password protected document": "Dokumentong protektado ng password",
    "Password": "Password",
    "Open": "Buksan",
    "Password Required": "Kailangan ng password",
    "Incorrect password": "Maling password",
    "Error": "Error",
    "Something went wrong": "May nangyaring mali",
    "Server is not available": "Hindi magagamit ang server",
    "of": "ng",
    "Please wait...": "Mangyaring maghintay ..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var FR = {
    "Open document": "Ouvrir le document",
    "Upload file": "Téléverser un fichier",
    "Drop file here to upload": "Déposez le fichier ici pour le télécharger",
    "Disc": "Disque",
    "URL": "URL",
    "FILE": "DÉPOSER",
    "SIZE": "TAILLE",
    "MB": "Mo",
    "KB": "Ko",
    "Bytes": "Octets",
    "Loading... Please wait.": "Chargement, veuillez patienter.",
    "Fit Width": "Ajuster la largeur",
    "Fit Height": "Hauteur d'ajustement",
    "Password protected document": "Document protégé par mot de passe",
    "Password": "Mot de passe",
    "Open": "Ouvert",
    "Password Required": "Mot de passe requis",
    "Incorrect password": "Mot de passe incorrect",
    "Error": "Erreur",
    "Something went wrong": "Quelque chose s'est mal passé",
    "Server is not available": "Le serveur n'est pas disponible",
    "of": "de",
    "Please wait...": "S'il vous plaît, attendez..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var HE = {
    "Open document": "מסמך פתוח",
    "Upload file": "העלה קובץ",
    "Drop file here to upload": "זרוק את הקובץ כאן להעלאה",
    "Disc": "דיסק",
    "URL": "כתובת URL",
    "FILE": "קוֹבֶץ",
    "SIZE": "גודל",
    "MB": "MB",
    "KB": "KB",
    "Bytes": "בתים",
    "Loading... Please wait.": "טוען אנא המתן.",
    "Fit Width": "רוחב התאמה",
    "Fit Height": "התאמת גובה",
    "Password protected document": "מסמך המוגן באמצעות סיסמה",
    "Password": "סיסמה",
    "Open": "לִפְתוֹחַ",
    "Password Required": "נדרשת סיסמה",
    "Incorrect password": "סיסמא לא נכונה",
    "Error": "שְׁגִיאָה",
    "Something went wrong": "משהו השתבש",
    "Server is not available": "השרת אינו זמין",
    "of": "שֶׁל",
    "Please wait...": "המתן בבקשה..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var HI = {
    "Open document": "दस्तावेज़ खोलें",
    "Upload file": "फ़ाइल अपलोड करें",
    "Drop file here to upload": "अपलोड करने के लिए फ़ाइल यहाँ छोड़ें",
    "Disc": "डिस्क",
    "URL": "यूआरएल",
    "FILE": "फ़ाइल",
    "SIZE": "आकार",
    "MB": "एमबी",
    "KB": "केबी",
    "Bytes": "बाइट्स",
    "Loading... Please wait.": "लोड हो रहा है कृपया प्रतीक्षा करें।",
    "Fit Width": "चौड़ाई पर फ़िट",
    "Fit Height": "ठीक ऊंचाई",
    "Password protected document": "पासवर्ड से सुरक्षित दस्तावेज़",
    "Password": "पासवर्ड",
    "Open": "खोलना",
    "Password Required": "पासवर्ड आवश्यक",
    "Incorrect password": "गलत पासवर्ड",
    "Error": "त्रुटि",
    "Something went wrong": "कुछ गलत हो गया",
    "Server is not available": "सर्वर उपलब्ध नहीं है",
    "of": "का",
    "Please wait...": "कृपया प्रतीक्षा करें..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ID = {
    "Open document": "Buka dokumen",
    "Upload file": "Unggah data",
    "Drop file here to upload": "Jatuhkan file di sini untuk mengunggah",
    "Disc": "Cakram",
    "URL": "URL",
    "FILE": "MENGAJUKAN",
    "SIZE": "UKURAN",
    "MB": "MB",
    "KB": "KB",
    "Bytes": "Byte",
    "Loading... Please wait.": "Sedang memuat... Harap tunggu.",
    "Fit Width": "Cocok Lebar",
    "Fit Height": "Cocok Tinggi",
    "Password protected document": "Dokumen yang dilindungi kata sandi",
    "Password": "Kata sandi",
    "Open": "Membuka",
    "Password Required": "Diperlukan Kata Sandi",
    "Incorrect password": "kata kunci Salah",
    "Error": "Kesalahan",
    "Something went wrong": "Ada yang salah",
    "Server is not available": "Server tidak tersedia",
    "of": "dari",
    "Please wait...": "Mohon tunggu..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var IT = {
    "Open document": "Apri documento",
    "Upload file": "Caricare un file",
    "Drop file here to upload": "Trascina qui il file da caricare",
    "Disc": "Disco",
    "URL": "URL",
    "FILE": "FILE",
    "SIZE": "DIMENSIONE",
    "MB": "MB",
    "KB": "KB",
    "Bytes": "Byte",
    "Loading... Please wait.": "Attendere il caricamento prego.",
    "Fit Width": "Larghezza adatta",
    "Fit Height": "Altezza giusta",
    "Password protected document": "Documento protetto da password",
    "Password": "Parola d'ordine",
    "Open": "Aprire",
    "Password Required": "Password richiesta",
    "Incorrect password": "password errata",
    "Error": "Errore",
    "Something went wrong": "Qualcosa è andato storto",
    "Server is not available": "Il server non è disponibile",
    "of": "di",
    "Please wait...": "Attendere prego..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var JA = {
    "Open document": "ドキュメントを開く",
    "Upload file": "ファイルをアップロードする",
    "Drop file here to upload": "ここにファイルをドロップしてアップロードします",
    "Disc": "ディスク",
    "URL": "URL",
    "FILE": "ファイル",
    "SIZE": "サイズ",
    "MB": "MB",
    "KB": "KB",
    "Bytes": "バイト",
    "Loading... Please wait.": "読み込み中。。。待って下さい。",
    "Fit Width": "フィット幅",
    "Fit Height": "フィットの高さ",
    "Password protected document": "パスワードで保護されたドキュメント",
    "Password": "パスワード",
    "Open": "開ける",
    "Password Required": "パスワードが必要",
    "Incorrect password": "パスワードが正しくありません",
    "Error": "エラー",
    "Something went wrong": "何かがうまくいかなかった",
    "Server is not available": "サーバーは利用できません",
    "of": "の",
    "Please wait...": "お待ちください..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var KK = {
    "Open document": "Құжатты ашу",
    "Upload file": "Файлды жүктеу",
    "Drop file here to upload": "Файлды жүктеу үшін осы жерге қойыңыз",
    "Disc": "Диск",
    "URL": "URL",
    "FILE": "ФАЙЛ",
    "SIZE": "SIZE",
    "MB": "МБ",
    "KB": "КБ",
    "Bytes": "Байт",
    "Loading... Please wait.": "Жүктелуде ... Күте тұрыңыз.",
    "Fit Width": "Ені сәйкес",
    "Fit Height": "Сәйкес биіктік",
    "Password protected document": "Құпия сөзбен қорғалған құжат",
    "Password": "Құпия сөз",
    "Open": "Ашық",
    "Password Required": "Құпия сөз қажет",
    "Incorrect password": "Қате құпиясөз",
    "Error": "Қате",
    "Something went wrong": "Бірдеңе дұрыс болмады",
    "Server is not available": "Сервер қол жетімді емес",
    "of": "ның",
    "Please wait...": "Өтінемін күте тұрыңыз..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var KO = {
    "Open document": "문서 열기",
    "Upload file": "파일 업로드",
    "Drop file here to upload": "업로드하려면 여기에 파일을 드롭하세요.",
    "Disc": "디스크",
    "URL": "URL",
    "FILE": "파일",
    "SIZE": "크기",
    "MB": "메가바이트",
    "KB": "KB",
    "Bytes": "바이트",
    "Loading... Please wait.": "로딩 중 기다려주세요.",
    "Fit Width": "너비 맞추기",
    "Fit Height": "맞는 높이",
    "Password protected document": "암호로 보호된 문서",
    "Password": "비밀번호",
    "Open": "열려있는",
    "Password Required": "비밀번호가 필요합니다",
    "Incorrect password": "잘못된 비밀번호",
    "Error": "오류",
    "Something went wrong": "문제가 발생했습니다.",
    "Server is not available": "서버를 사용할 수 없습니다",
    "of": "NS",
    "Please wait...": "기다리세요..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MS = {
    "Open document": "Buka dokumen",
    "Upload file": "Muat naik fail",
    "Drop file here to upload": "Jatuhkan fail di sini untuk dimuat naik",
    "Disc": "Cakera",
    "URL": "URL",
    "FILE": "FILE",
    "SIZE": "SAIZ",
    "MB": "MB",
    "KB": "KB",
    "Bytes": "Bait",
    "Loading... Please wait.": "Muat turun sila tunggu.",
    "Fit Width": "Lebar Fit",
    "Fit Height": "Tinggi Ketepatan",
    "Password protected document": "Dokumen dilindungi kata laluan",
    "Password": "Kata Laluan",
    "Open": "Buka",
    "Password Required": "Kata laluan diperlukan",
    "Incorrect password": "kata laluan salah",
    "Error": "Ralat",
    "Something went wrong": "Ada yang tidak kena",
    "Server is not available": "Pelayan tidak tersedia",
    "of": "daripada",
    "Please wait...": "Sila tunggu..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NL = {
    "Open document": "Document openen",
    "Upload file": "Upload bestand",
    "Drop file here to upload": "Zet het bestand hier neer om te uploaden",
    "Disc": "Schijf",
    "URL": "URL",
    "FILE": "HET DOSSIER",
    "SIZE": "MAAT",
    "MB": "MB",
    "KB": "KB",
    "Bytes": "Bytes",
    "Loading... Please wait.": "Laden even geduld aub.",
    "Fit Width": "Fit Breedte",
    "Fit Height": "Past de hoogte",
    "Password protected document": "Met wachtwoord beveiligd document",
    "Password": "Wachtwoord",
    "Open": "Open",
    "Password Required": "Wachtwoord benodigd",
    "Incorrect password": "Incorrect wachtwoord",
    "Error": "Fout",
    "Something went wrong": "Er is iets fout gegaan",
    "Server is not available": "Server is niet beschikbaar",
    "of": "van",
    "Please wait...": "Even geduld aub..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PL = {
    "Open document": "Otwórz dokument",
    "Upload file": "Przesyłanie pliku",
    "Drop file here to upload": "Upuść plik tutaj, aby go przesłać",
    "Disc": "Dysk",
    "URL": "URL",
    "FILE": "PLIK",
    "SIZE": "ROZMIAR",
    "MB": "MB",
    "KB": "KB",
    "Bytes": "Bajty",
    "Loading... Please wait.": "Ładowanie proszę czekać.",
    "Fit Width": "Dopasuj szerokość",
    "Fit Height": "Dopasuj wysokość",
    "Password protected document": "Dokument chroniony hasłem",
    "Password": "Hasło",
    "Open": "otwarty",
    "Password Required": "Wymagane hasło",
    "Incorrect password": "niepoprawne hasło",
    "Error": "Błąd",
    "Something went wrong": "Coś poszło nie tak",
    "Server is not available": "Serwer jest niedostępny",
    "of": "z",
    "Please wait...": "Proszę czekać..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PT = {
    "Open document": "Abrir documento",
    "Upload file": "Subir arquivo",
    "Drop file here to upload": "Solte o arquivo aqui para fazer o upload",
    "Disc": "Disco",
    "URL": "URL",
    "FILE": "ARQUIVO",
    "SIZE": "TAMANHO",
    "MB": "MB",
    "KB": "KB",
    "Bytes": "Bytes",
    "Loading... Please wait.": "Carregando, por favor espere.",
    "Fit Width": "Largura de ajuste",
    "Fit Height": "Altura de ajuste",
    "Password protected document": "Documento protegido por senha",
    "Password": "Senha",
    "Open": "Abrir",
    "Password Required": "Senha requerida",
    "Incorrect password": "Senha incorreta",
    "Error": "Erro",
    "Something went wrong": "Algo deu errado",
    "Server is not available": "Servidor não disponível",
    "of": "do",
    "Please wait...": "Por favor, espere..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var RO = {
    "Open document": "Deschideți documentul",
    "Upload file": "Incarca fisier",
    "Drop file here to upload": "Plasați fișierul aici pentru încărcare",
    "Disc": "Disc",
    "URL": "URL",
    "FILE": "FIŞIER",
    "SIZE": "MĂRIMEA",
    "MB": "MB",
    "KB": "KB",
    "Bytes": "Octet",
    "Loading... Please wait.": "Încărcare va rugam asteptati.",
    "Fit Width": "Lățime potrivită",
    "Fit Height": "Înălțime potrivită",
    "Password protected document": "Document protejat prin parolă",
    "Password": "Parola",
    "Open": "Deschis",
    "Password Required": "Parolă obligatorie",
    "Incorrect password": "Parola incorecta",
    "Error": "Eroare",
    "Something went wrong": "Ceva n-a mers bine",
    "Server is not available": "Serverul nu este disponibil",
    "of": "de",
    "Please wait...": "Va rugam asteptati..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var RU = {
    "Open document": "Открыть документ",
    "Upload file": "Загрузить файл",
    "Drop file here to upload": "Перетащите файл сюда, чтобы загрузить",
    "Disc": "Диск",
    "URL": "URL",
    "FILE": "ФАЙЛ",
    "SIZE": "РАЗМЕР",
    "MB": "МБ",
    "KB": "КБ",
    "Bytes": "Байтов",
    "Loading... Please wait.": "Загрузка, пожалуйста подождите.",
    "Fit Width": "По ширине",
    "Fit Height": "По высоте",
    "Password protected document": "Документ, защищенный паролем",
    "Password": "Пароль",
    "Open": "Открытым",
    "Password Required": "Требуется пароль",
    "Incorrect password": "Неверный пароль",
    "Error": "Ошибка",
    "Something went wrong": "Что-то пошло не так",
    "Server is not available": "Сервер недоступен",
    "of": "из",
    "Please wait...": "Подождите пожалуйста..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SV = {
    "Open document": "Öppna dokument",
    "Upload file": "Ladda upp fil",
    "Drop file here to upload": "Släpp filen här för att ladda upp",
    "Disc": "Skiva",
    "URL": "URL",
    "FILE": "FIL",
    "SIZE": "STORLEK",
    "MB": "MB",
    "KB": "KB",
    "Bytes": "Bytes",
    "Loading... Please wait.": "Laddar ... Vänta.",
    "Fit Width": "Passformsbredd",
    "Fit Height": "Passformshöjd",
    "Password protected document": "Lösenordsskyddat dokument",
    "Password": "Lösenord",
    "Open": "Öppen",
    "Password Required": "Lösenord krävs",
    "Incorrect password": "fel lösenord",
    "Error": "Fel",
    "Something went wrong": "Något gick fel",
    "Server is not available": "Servern är inte tillgänglig",
    "of": "av",
    "Please wait...": "Vänta..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TH = {
    "Open document": "เปิดเอกสาร",
    "Upload file": "อัพโหลดไฟล์",
    "Drop file here to upload": "วางไฟล์ที่นี่เพื่ออัพโหลด",
    "Disc": "ดิสก์",
    "URL": "URL",
    "FILE": "ไฟล์",
    "SIZE": "ขนาด",
    "MB": "MB",
    "KB": "KB",
    "Bytes": "ไบต์",
    "Loading... Please wait.": "กำลังโหลด... กรุณารอสักครู่",
    "Fit Width": "พอดีความกว้าง",
    "Fit Height": "พอดีกับความสูง",
    "Password protected document": "เอกสารป้องกันด้วยรหัสผ่าน",
    "Password": "รหัสผ่าน",
    "Open": "เปิด",
    "Password Required": "ต้องใช้รหัสผ่าน",
    "Incorrect password": "รหัสผ่านผิดพลาด",
    "Error": "ข้อผิดพลาด",
    "Something went wrong": "อะไรบางอย่างผิดปกติ",
    "Server is not available": "เซิร์ฟเวอร์ไม่พร้อมใช้งาน",
    "of": "ของ",
    "Please wait...": "โปรดรอ..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TR = {
    "Open document": "Belgeyi aç",
    "Upload file": "Dosya yükleme",
    "Drop file here to upload": "Yüklemek için dosyayı buraya bırakın",
    "Disc": "Disk",
    "URL": "URL",
    "FILE": "DOSYA",
    "SIZE": "BOY",
    "MB": "MB",
    "KB": "KB",
    "Bytes": "bayt",
    "Loading... Please wait.": "Yükleniyor lütfen bekleyin.",
    "Fit Width": "Sığdır Genişliği",
    "Fit Height": "Uygun Yükseklik",
    "Password protected document": "Parola korumalı belge",
    "Password": "Parola",
    "Open": "Açık",
    "Password Required": "Şifre gerekli",
    "Incorrect password": "yanlış parola",
    "Error": "Hata",
    "Something went wrong": "Bir şeyler yanlış gitti",
    "Server is not available": "Sunucu kullanılamıyor",
    "of": "ile ilgili",
    "Please wait...": "Lütfen bekle..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var UK = {
    "Open document": "Відкрити документ",
    "Upload file": "Завантажити файл",
    "Drop file here to upload": "Перетягніть файл у цю область для завантаження",
    "Disc": "Пристрій",
    "URL": "Посилання",
    "FILE": "Файл",
    "SIZE": "Розмір",
    "MB": "МБ",
    "KB": "КБ",
    "Bytes": "Байт",
    "Loading... Please wait.": "Завантаження... Зачекайте, будь ласка.",
    "Fit Width": "По ширині",
    "Fit Height": "По висоті",
    "Password protected document": "Документ захищено паролем",
    "Password": "Пароль",
    "Open": "Відкрити",
    "Password Required": "Необхідно ввести пароль",
    "Incorrect password": "Неправильний пароль",
    "Error": "Помилка",
    "Something went wrong": "Щось пішло не так",
    "Server is not available": "Сервер недоступний",
    "of": "з",
    "Please wait...": "Зачекайте, будь ласка..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var VI = {
    "Open document": "Mở tài liệu",
    "Upload file": "Cập nhật dử liệu",
    "Drop file here to upload": "Thả tệp vào đây để tải lên",
    "Disc": "Đĩa",
    "URL": "URL",
    "FILE": "TẬP TIN",
    "SIZE": "KÍCH THƯỚC",
    "MB": "MB",
    "KB": "KB",
    "Bytes": "Byte",
    "Loading... Please wait.": "Tải vui lòng đợi.",
    "Fit Width": "Vừa chiều rộng",
    "Fit Height": "Chiều cao phù hợp",
    "Password protected document": "Tài liệu được bảo vệ bằng mật khẩu",
    "Password": "Mật khẩu",
    "Open": "Mở ra",
    "Password Required": "Mật khẩu được yêu câu",
    "Incorrect password": "mật khẩu không đúng",
    "Error": "Lỗi",
    "Something went wrong": "Đã xảy ra sự cố",
    "Server is not available": "Máy chủ không có sẵn",
    "of": "của",
    "Please wait...": "Vui lòng chờ..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ZHHANS = {
    "Open document": "打开文档",
    "Upload file": "上传文件",
    "Drop file here to upload": "将文件拖放到此处以上传",
    "Disc": "光盘",
    "URL": "网址",
    "FILE": "文件",
    "SIZE": "尺寸",
    "MB": "MB",
    "KB": "知识库",
    "Bytes": "字节",
    "Loading... Please wait.": "加载请稍候。",
    "Fit Width": "适合宽度",
    "Fit Height": "适合高度",
    "Password protected document": "受密码保护的文件",
    "Password": "密码",
    "Open": "打开",
    "Password Required": "需要密码",
    "Incorrect password": "密码错误",
    "Error": "错误",
    "Something went wrong": "出了些问题",
    "Server is not available": "服务器不可用",
    "of": "的",
    "Please wait...": "请稍等..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ZHHANT = {
    "Open document": "打開文檔",
    "Upload file": "上傳文件",
    "Drop file here to upload": "將文件拖放到此處以上傳",
    "Disc": "光盤",
    "URL": "網址",
    "FILE": "文件",
    "SIZE": "尺寸",
    "MB": "MB",
    "KB": "知識庫",
    "Bytes": "字節",
    "Loading... Please wait.": "加載請稍候。",
    "Fit Width": "適合寬度",
    "Fit Height": "適合高度",
    "Password protected document": "受密碼保護的文件",
    "Password": "密碼",
    "Open": "打開",
    "Password Required": "需要密碼",
    "Incorrect password": "密碼錯誤",
    "Error": "錯誤",
    "Something went wrong": "出了些問題",
    "Server is not available": "服務器不可用",
    "of": "的",
    "Please wait...": "請稍等..."
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CommonTranslateLoader = /** @class */ (function () {
    function CommonTranslateLoader(translations) {
        if (translations === void 0) { translations = {}; }
        this.translations = {
            'ar': AR,
            'ca': CA,
            'cs': CS,
            'da': DA,
            'de': DE,
            'el': EL,
            'en': EN,
            'es': ES,
            'fil': FIL,
            'fr': FR,
            'he': HE,
            'hi': HI,
            'id': ID,
            'it': IT,
            'ja': JA,
            'kk': KK,
            'ko': KO,
            'ms': MS,
            'nl': NL,
            'pl': PL,
            'pt': PT,
            'ro': RO,
            'ru': RU,
            'sv': SV,
            'th': TH,
            'tr': TR,
            'uk': UK,
            'vi': VI,
            'zh-hans': ZHHANS,
            'zh-hant': ZHHANT,
        };
        for (var key in translations) {
            if (this.translations[key]) {
                this.translations[key] = __assign({}, this.translations[key], translations[key]);
            }
        }
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    CommonTranslateLoader.prototype.getTranslation = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        /** @type {?} */
        var translation = this.translations[lang]
            ? this.translations[lang]
            : this.translations[this.defaultLanguage];
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        function (subscriber) {
            subscriber.next(translation);
        }));
    };
    return CommonTranslateLoader;
}());
if (false) {
    /** @type {?} */
    CommonTranslateLoader.prototype.translations;
    /** @type {?} */
    CommonTranslateLoader.prototype.defaultLanguage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AddDynamicComponentService, Api, BackFormattingService, BrowseFilesModalComponent, ButtonComponent, ColorPickerComponent, CommonComponentsModule, CommonModals, CommonTranslateLoader, ConfigService, ContextMenuComponent, DisabledCursorDirective, DndDirective, DocumentComponent, DropDownComponent, DropDownItemComponent, DropDownItemsComponent, DropDownToggleComponent, EditHtmlService, EditorDirective, ErrorInterceptorService, ErrorModalComponent, ExceptionMessageService, FileCredentials, FileDescription, FileModel, FileService, FileUtil, Formatting, FormattingDirective, FormattingService, HighlightSearchPipe, HostDynamicDirective, HostingDynamicComponentService, HttpError, InitStateComponent, LeftSideBarComponent, LoadingMaskComponent, LoadingMaskInterceptorService, LoadingMaskService, LogoComponent, MenuType, ModalComponent, ModalService, MouseWheelDirective, NavigateService, OnCloseService, PageComponent, PageMarkerDirective, PageModel, PagePreloadService, PasswordRequiredComponent, PasswordService, RenderPrintDirective, RenderPrintService, RotatedPage, RotationDirective, SanitizeHtmlPipe, SanitizeResourceHtmlPipe, SanitizeStylePipe, SaveFile, ScrollableDirective, ScrollableEditedDirective, SearchComponent, SearchService, SearchableDirective, SelectComponent, SelectionService, SidePanelComponent, SuccessModalComponent, TabActivatorService, TabComponent, TabbedToolbarsComponent, TextMenuComponent, TooltipComponent, TopTabActivatorService, TopToolbarComponent, TypedFileCredentials, UploadFileZoneComponent, UploadFilesService, Utils, ViewportService, WindowService, ZoomDirective, ZoomService, TabsComponent as ɵa, TooltipDirective as ɵb, ResizingComponent as ɵc, TopTabComponent as ɵd, ThumbnailsComponent as ɵe };
//# sourceMappingURL=groupdocs.examples.angular-common-components.js.map
