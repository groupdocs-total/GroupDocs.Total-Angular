import { Component, EventEmitter, Input, Output, Injectable, ElementRef, ɵɵdefineInjectable, ɵɵinject, Pipe, Directive, HostBinding, HostListener, ViewChild, ViewEncapsulation, Inject, forwardRef, ComponentFactoryResolver, ApplicationRef, ViewContainerRef, Renderer2, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, fromEvent, Observable, BehaviorSubject, throwError } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith, tap, map, catchError, finalize } from 'rxjs/operators';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import * as jquery from 'jquery';
import * as Hammer from 'hammerjs';
import { DomSanitizer } from '@angular/platform-browser';
import { ClickOutsideModule } from 'ng-click-outside';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TopToolbarComponent {
    constructor() {
    }
}
TopToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-top-toolbar',
                template: "<div class=\"top-toolbar\">\n  <div id=\"tools\" class=\"tools\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                styles: [".top-toolbar{width:100%;height:60px;z-index:999;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.tools{width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}@media (max-width:1037px){.top-toolbar{height:60px}.tools{height:100%;overflow-x:auto;overflow-scrolling:touch;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.tools::-webkit-scrollbar{width:0;height:0;background-color:#3e4e5a}}"]
            }] }
];
/** @nocollapse */
TopToolbarComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidePanelComponent {
    constructor() {
        this.closable = true;
        this.saveable = true;
        this.hideSidePanel = new EventEmitter();
        this.saveInSidePanel = new EventEmitter();
        this.onlyTitle = false;
    }
    /**
     * @return {?}
     */
    closeSidePanel() {
        this.hideSidePanel.emit(true);
    }
    /**
     * @return {?}
     */
    saveBySidePanel() {
        this.saveInSidePanel.emit(true);
    }
    /**
     * @return {?}
     */
    toggleTitleMode() {
        if (this.closable && !this.saveable) {
            this.onlyTitle = !this.onlyTitle;
        }
    }
}
SidePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-side-panel',
                template: "<div [ngClass]=\"{'only-title': onlyTitle}\" class=\"gd-side-panel-wrapper\">\n  <div class=\"gd-side-panel-header\" (click)=\"toggleTitleMode()\">\n    <fa-icon class=\"fas fa-info-circle icon\" [icon]=\"['fas',icon]\"></fa-icon>\n    <div class=\"title\">{{title}}</div>\n    <div class=\"save\" *ngIf=\"saveable\">\n      <gd-button class=\"fas fa-times\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"saveBySidePanel()\"></gd-button>\n    </div>\n    <div class=\"close\" *ngIf=\"closable\">\n      <gd-button class=\"fas fa-times\" [icon]=\"'times'\" [tooltip]=\"'Close'\" (click)=\"closeSidePanel()\"></gd-button>\n    </div>\n  </div>\n  <div *ngIf=\"!onlyTitle\" class=\"gd-side-panel-body\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                styles: [".gd-side-panel-wrapper{margin-right:0;width:334px;z-index:999;background-color:#fff;-webkit-transition:margin-right .2s;transition:margin-right .2s;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;height:100vh}.gd-side-panel-wrapper .gd-side-panel-header{height:60px;background-color:#222e35;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:nowrap}.gd-side-panel-wrapper .gd-side-panel-header .icon{font-size:24px;color:#959da5;margin:18px;line-height:24px}.gd-side-panel-wrapper .gd-side-panel-header .title{font-size:13px;font-weight:700;color:#edf0f2;opacity:.57;margin-top:20px;width:100%}.gd-side-panel-wrapper .gd-side-panel-header .close,.gd-side-panel-wrapper .gd-side-panel-header .save{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.gd-side-panel-wrapper .gd-side-panel-header ::ng-deep gd-button .text{padding:0}.gd-side-panel-wrapper .gd-side-panel-body{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;overflow:visible;overflow-y:auto;overflow-x:hidden;height:100%}@media (max-width:1037px){.gd-side-panel-wrapper{width:100%;position:absolute;left:0;right:0;top:0;bottom:0}.gd-side-panel-wrapper.only-title{height:60px!important}}"]
            }] }
];
/** @nocollapse */
SidePanelComponent.ctorParameters = () => [];
SidePanelComponent.propDecorators = {
    title: [{ type: Input }],
    icon: [{ type: Input }],
    closable: [{ type: Input }],
    saveable: [{ type: Input }],
    hideSidePanel: [{ type: Output }],
    saveInSidePanel: [{ type: Output }]
};
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
const MOBILE_MAX_WIDTH = 425;
/** @type {?} */
const TABLET_MAX_WIDTH = 1024;
class WindowService {
    constructor() {
        this.resizeSubject = new Subject();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this._resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(200), distinctUntilChanged(), startWith({ target: { innerWidth: window.innerWidth, innerHeight: window.innerHeight } }), tap((/**
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
    /**
     * @return {?}
     */
    getWidth() {
        return this.width;
    }
    /**
     * @return {?}
     */
    getHeight() {
        return this.height;
    }
    /**
     * @return {?}
     */
    isEdge() {
        return window.navigator.userAgent.toLowerCase().indexOf('edge') > -1;
    }
    /**
     * @return {?}
     */
    isFirefox() {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    }
}
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
class ButtonComponent {
    /**
     * @param {?} windowService
     */
    constructor(windowService) {
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
        (w) => {
            this.isDesktop = windowService.isDesktop();
        }));
    }
    /**
     * @return {?}
     */
    iconButtonClass() {
        return this.iconOnly ? 'icon-button' : '';
    }
    /**
     * @return {?}
     */
    onHovering() {
        if (this.isDesktop && !this.disabled) {
            this.className += ' active';
        }
    }
    /**
     * @return {?}
     */
    onUnhovering() {
        if (this.isDesktop && !this.disabled) {
            this.className = this.cleanAll(this.className, ' active');
        }
    }
    /**
     * @private
     * @param {?} str
     * @param {?} val
     * @return {?}
     */
    cleanAll(str, val) {
        while (str && str.indexOf(val) !== -1) {
            str = str.replace(val, '');
        }
        return str;
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-button',
                template: "<div class=\"button {{intent}} {{iconButtonClass()}}\" [ngClass]=\"toggle ? className + ' gd-edit active' : className\"\n     gdTooltip (showToolTip)=\"showToolTip = $event\" (mouseenter)=\"onHovering()\"\n     (mouseleave)=\"onUnhovering()\" gdDisabledCursor [dis]=\"disabled\">\n  <fa-icon *ngIf=\"icon\" [icon]=\"[iconRegular ? 'far' : 'fas',icon]\" [size]=\"iconSize\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\" [position]=\"elementPosition\" class=\"button-tooltip\"></gd-tooltip>\n  <div class=\"text\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                styles: [".icon-button{padding:0!important;margin:0 7px}.button{padding:0 10px;font-size:14px;color:#959da5;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;align-content:center;-webkit-box-pack:center;justify-content:center;min-width:37px;height:37px;text-align:center;position:relative;white-space:nowrap}.button.inactive{cursor:not-allowed;opacity:.4}.button.active *{color:#ccd0d4}.button.primary{background-color:#3e4e5a;color:#fff}.button.primary.active{color:#fff;background-color:#688296}.button.brand{background-color:#25c2d4;color:#fff}.button.brand.active{color:#fff;background-color:#688296}.button .text{font-size:13px;padding-left:10px}.button .button-tooltip{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}@media (max-width:1037px){.button{font-size:22px}.arrow-button{margin:5px}}"]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [
    { type: WindowService }
];
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
class LogoComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LogoComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-logo',
                template: "<div id=\"gd-header-logo\" class=\"logo\">\n  <span class=\"text\" [innerHTML]=\"logo\"></span>\n  <fa-icon [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n</div>\n\n",
                styles: [".logo{background-color:#25c2d4;height:60px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.text{color:#fff;font-size:15px;text-transform:uppercase;margin:0 14px}.icon{display:none;font-size:32px;color:rgba(255,255,255,.5);margin:14px}@media (max-width:1037px){.logo{width:60px;height:60px}.logo .text{display:none}.logo .icon{display:block}}"]
            }] }
];
/** @nocollapse */
LogoComponent.ctorParameters = () => [];
LogoComponent.propDecorators = {
    logo: [{ type: Input }],
    icon: [{ type: Input }]
};
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
class TooltipComponent {
    constructor() {
        this.position = 0;
        this.visibility = 'hidden';
    }
    /**
     * @return {?}
     */
    getClass() {
        if (this.position === 0) {
            return 'tooltip';
        }
        return 'tooltip ' + (this.position > 0 ? 'last-element' : 'first-element');
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
    { type: Component, args: [{
                selector: 'gd-tooltip',
                template: "<span [class]=\"getClass()\" [ngClass]=\"visibility\" [innerHTML]=\"text\"></span>\n",
                styles: [".tooltip{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;background-color:#000;color:#fff;text-align:center;border-radius:0;padding:5px;z-index:1;font-size:10px;height:11px;line-height:11px;-ms-grid-row-align:center;align-self:center;margin:0!important}.first-element{margin-left:10px!important}.last-element{margin-left:-10px!important}.tooltip.hidden{visibility:hidden}.tooltip.shown{visibility:visible}.shown:after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border:5px solid transparent;border-bottom-color:#000}"]
            }] }
];
/** @nocollapse */
TooltipComponent.ctorParameters = () => [];
TooltipComponent.propDecorators = {
    text: [{ type: Input }],
    position: [{ type: Input }],
    show: [{ type: Input }]
};
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
class Api {
}
Api.VIEWER_APP = '/viewer';
Api.SIGNATURE_APP = '/signature';
Api.ANNOTATION_APP = '/annotation';
Api.SEARCH_APP = '/search';
Api.EDITOR_APP = '/editor';
Api.COMPARISON_APP = '/comparison';
Api.CONVERSION_APP = '/conversion';
Api.METADATA_APP = '/metadata';
Api.DEFAULT_API_ENDPOINT = window.location.href;
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
Api.ADD_FILES_TO_INDEX = '/addFilesToIndex';
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
    Api.ADD_FILES_TO_INDEX;
    /** @type {?} */
    Api.httpOptionsJson;
    /** @type {?} */
    Api.httpOptionsJsonResponseTypeBlob;
}
class ConfigService {
    constructor() {
        this.apiEndpoint = Api.DEFAULT_API_ENDPOINT;
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
    getConversionApiEndpoint() {
        return this._apiEndpoint.trim().endsWith(Api.CONVERSION_APP) ? this._apiEndpoint : this._apiEndpoint + Api.CONVERSION_APP;
    }
    /**
     * @return {?}
     */
    getMetadataApiEndpoint() {
        return this._apiEndpoint.trim().endsWith(Api.METADATA_APP) ? this._apiEndpoint : this._apiEndpoint + Api.METADATA_APP;
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
    /**
     * @return {?}
     */
    getAnnotationApiEndpoint() {
        return this._apiEndpoint.endsWith(Api.ANNOTATION_APP) ? this._apiEndpoint : this._apiEndpoint + Api.ANNOTATION_APP;
    }
    /**
     * @return {?}
     */
    getSearchApiEndpoint() {
        return this._apiEndpoint.endsWith(Api.SEARCH_APP) ? this._apiEndpoint : this._apiEndpoint + Api.SEARCH_APP;
    }
}
ConfigService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigService.ctorParameters = () => [];
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
class CommonModals {
}
CommonModals.PasswordRequired = "gd-password-required";
CommonModals.ErrorMessage = "gd-error-message";
CommonModals.BrowseFiles = "gd-browse-files";
CommonModals.CreateDocument = "gd-create-document";
CommonModals.OperationSuccess = "gd-success-modal";
CommonModals.DrawHandSignature = "gd-draw-hand-signature";
CommonModals.DrawStampSignature = "gd-draw-stamp-signature";
CommonModals.InformationMessage = "gd-information-message";
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
class ModalComponent {
    /**
     * @param {?} modalService
     * @param {?} el
     */
    constructor(modalService, el) {
        this.modalService = modalService;
        this.visible = new EventEmitter();
        this.cancel = new EventEmitter();
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
    /**
     * @return {?}
     */
    cancelClose() {
        this.cancel.emit(false);
        this.close();
    }
}
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-modal',
                template: "<div class=\"gd-modal fade\" id=\"modalDialog\" (click)=\"onClose($event);\" *ngIf=\"visibility\">\n</div>\n<div class=\"gd-modal-dialog\" *ngIf=\"visibility\">\n  <div class=\"gd-modal-content\" id=\"gd-modal-content\">\n\n    <div class=\"gd-modal-header\">\n      <div class=\"gd-modal-close\" (click)=\"cancelClose();\"><span>&times;</span></div>\n      <h4 class=\"gd-modal-title\">{{title}}</h4>\n    </div>\n\n    <div class=\"gd-modal-body\">\n      <ng-content></ng-content>\n    </div>\n\n    <div class=\"gd-modal-footer\">\n\n    </div>\n  </div>\n</div>\n\n\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.gd-modal{overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0;background-color:rgba(0,0,0,.5)}.gd-modal-dialog{box-shadow:#0005 0 0 10px;position:fixed;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:1051}.gd-modal-dialog ::ng-deep .button{-webkit-box-orient:unset!important;-webkit-box-direction:unset!important;flex-direction:unset!important}.gd-modal-content{background-color:#fff;height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.gd-modal-header{height:60px;padding:0 12px 0 24px;background-color:#3e4e5a}.gd-modal-close{position:absolute;right:12px;top:12px;cursor:pointer;color:#fff;width:37px;height:37px;text-align:center}.gd-modal-close span{font-size:18px;font-weight:900;height:19px;width:10px;line-height:36px}.gd-modal-title{font-size:16px;font-weight:400;padding-top:17px;padding-bottom:22px;margin:0;color:#fff}.gd-modal-body{background-color:#fff;overflow:hidden;overflow-y:auto;height:calc(100% - 75px)}.gd-modal-footer{height:auto}.gd-modal-footer>.btn{float:right;margin:20px 15px;padding:10px 20px;cursor:pointer;font-size:12px}@media (max-width:1037px){.gd-modal-dialog{width:100%;height:100%}.gd-modal-body{height:100%}}"]
            }] }
];
/** @nocollapse */
ModalComponent.ctorParameters = () => [
    { type: ModalService },
    { type: ElementRef }
];
ModalComponent.propDecorators = {
    id: [{ type: Input }],
    title: [{ type: Input }],
    visible: [{ type: Output }],
    cancel: [{ type: Output }]
};
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
class PageModel {
}
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
class RotatedPage {
}
if (false) {
    /** @type {?} */
    RotatedPage.prototype.pageNumber;
    /** @type {?} */
    RotatedPage.prototype.angle;
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
if (false) {
    /** @type {?} */
    FileCredentials.prototype.guid;
    /** @type {?} */
    FileCredentials.prototype.password;
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
if (false) {
    /** @type {?} */
    SaveFile.prototype.content;
}
class FileDescription {
    constructor() {
        this.printAllowed = true;
    }
}
if (false) {
    /** @type {?} */
    FileDescription.prototype.guid;
    /** @type {?} */
    FileDescription.prototype.pages;
    /** @type {?} */
    FileDescription.prototype.printAllowed;
    /** @type {?} */
    FileDescription.prototype.showGridLines;
    /** @type {?} */
    FileDescription.prototype.thumbnails;
}
class FileModel {
}
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
class HttpError {
}
HttpError.BadRequest = 400;
HttpError.Unauthorized = 401;
HttpError.Forbidden = 403;
HttpError.NotFound = 404;
HttpError.TimeOut = 408;
HttpError.Conflict = 409;
HttpError.InternalServerError = 500;
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
class Utils {
    /**
     * @param {?} event
     * @return {?}
     */
    static getMousePosition(event) {
        /** @type {?} */
        const mouse = {
            x: 0,
            y: 0
        };
        /** @type {?} */
        const wEvent = (/** @type {?} */ (window.event));
        /** @type {?} */
        const ev = event || wEvent;
        if (ev.pageX || wEvent.pageX || wEvent.screenX || (ev.touches && ev.touches[0] && ev.touches[0].pageX)) { //Moz
            //Moz
            /** @type {?} */
            const pageX = typeof ev.pageX !== "undefined" && ev.pageX !== 0 ? ev.pageX : wEvent.pageX;
            /** @type {?} */
            const pageY = typeof ev.pageY !== "undefined" && ev.pageY !== 0 ? ev.pageY : wEvent.pageY;
            /** @type {?} */
            const screenX = typeof wEvent.screenX !== "undefined" && wEvent.screenY !== 0;
            /** @type {?} */
            const screenY = typeof wEvent.screenY !== "undefined" && wEvent.screenY !== 0;
            mouse.x = pageX ? pageX : (screenX ? wEvent.screenX : ev.touches[0].pageX);
            mouse.y = pageY ? pageY : (screenY ? wEvent.screenY : ev.touches[0].pageY);
        }
        else if (ev.clientX) { //IE
            mouse.x = ev.clientX + document.body.scrollLeft;
            mouse.y = ev.clientY + document.body.scrollTop;
        }
        return mouse;
    }
    /**
     * @param {?} color
     * @return {?}
     */
    static toRgb(color) {
        /** @type {?} */
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
        if (result) {
            /** @type {?} */
            const r = parseInt(result[1], 16);
            /** @type {?} */
            const g = parseInt(result[2], 16);
            /** @type {?} */
            const b = parseInt(result[3], 16);
            return result ? 'rgb(' + r + ',' + g + ',' + b + ')' : '';
        }
        return color;
    }
    /**
     * @param {?} color
     * @return {?}
     */
    static toHex(color) {
        // check if color is standard hex value
        if (color.match(/[0-9A-F]{6}|[0-9A-F]{3}$/i)) {
            return (color.charAt(0) === "#") ? color : ("#" + color);
            // check if color is RGB value -> convert to hex
        }
        else if (color.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/)) {
            /** @type {?} */
            const c = ([parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10), parseInt(RegExp.$3, 10)]);
            /** @type {?} */
            const pad = (/**
             * @param {?} str
             * @return {?}
             */
            function (str) {
                if (str.length < 2) {
                    for (let i = 0, len = 2 - str.length; i < len; i++) {
                        str = '0' + str;
                    }
                }
                return str;
            });
            if (c.length === 3) {
                /** @type {?} */
                const r = pad(c[0].toString(16));
                /** @type {?} */
                const g = pad(c[1].toString(16));
                /** @type {?} */
                const b = pad(c[2].toString(16));
                return '#' + r + g + b;
            }
            // else do nothing
        }
        else {
            return '';
        }
    }
}
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
                return strings.length > 0 ? FileUtil.map['unknown'] : FileUtil.map['folder'];
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
if (false) {
    /** @type {?} */
    FileUtil.map;
}
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
        this._uploadsChange = new Observable((/**
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
const $ = jquery;
/** @type {?} */
const upload_disc = 'Disc';
/** @type {?} */
const upload_url = 'URL';
/** @type {?} */
const uploads_choices = [{ name: upload_disc, icon: 'hdd' }, { name: upload_url, icon: 'link' }];
class BrowseFilesModalComponent {
    /**
     * @param {?} _uploadService
     */
    constructor(_uploadService) {
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
        if (file.directory || file.isDirectory) {
            this.selectedDirectory.emit(file.name);
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
            $("#gd-upload-input").trigger('click');
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
    { type: Component, args: [{
                selector: 'gd-browse-files-modal',
                template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\n    <div class=\"dnd-wrapper\">\n      <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\n      <span class=\"text\">Drop file here to upload</span>\n    </div>\n  </div>\n  <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n    <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\n            (change)=\"handleFileInput($event.target.files)\">\n    <div class=\"context\">\n      <div class=\"context-actions\">\n        <gd-drop-down>\n          <gd-drop-down-toggle>\n            <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\n              Upload file\n            </gd-button>\n          </gd-drop-down-toggle>\n          <gd-drop-down-items>\n            <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\n              <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\n              <div class=\"text\">{{item.name}}</div>\n            </gd-drop-down-item>\n          </gd-drop-down-items>\n        </gd-drop-down>\n      </div>\n      <div class=\"context-panel\" *ngIf=\"showUploadUrl\">\n        <div class=\"upload-url\">\n          <input class=\"url-input\" placeholder=\"https://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n          <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"list-files-header\" [ngClass]=\"{'upload-url': showUploadUrl}\">\n    <div class=\"header-name\">FILE</div>\n    <div class=\"header-size\">SIZE</div>\n  </div>\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-body\">\n        <div class=\"go-up\" (click)=\"goUp()\">\n            <div class=\"go-up-icon\">\n                <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n            </div>\n            <div class=\"go-up-dots\">..</div>\n        </div>\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n          <div class=\"file-description\">\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n            <div class=\"file-name-format\">\n              <div class=\"file-name\">{{file?.name}}</div>\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\n            </div>\n          </div>\n          <div class=\"file-size\">\n            {{getSize(file?.size)}}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
                styles: [".gd-modal-table{width:100%;text-align:left}#gd-browse-section{width:1036px;height:561px;overflow-y:auto}.list-files-header{height:60px;color:#6e6e6e;font-size:13px;font-weight:700;background-color:#f4f4f4;margin-top:24px}.list-files-header.upload-url{margin-top:20px}.header-name{padding-left:24px;width:90%;line-height:60px}.header-size{padding-right:27px;line-height:60px}.file-size,.header-size{width:10%;color:#777;text-align:right}.file-description{display:-webkit-box;display:flex;width:90%;padding:18px 0 18px 24px;font-size:14px;-webkit-box-flex:1;flex:1;cursor:pointer;overflow:hidden}.file-size{font-size:12px;padding:0 27px 0 0;width:10%;line-height:79px}.list-files-header,.list-files-lines{display:-webkit-box;display:flex;width:100%;-webkit-box-pack:justify;justify-content:space-between}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{display:-webkit-box;display:flex;font-size:26px;cursor:pointer;color:#4b566c;height:79px}.go-up-dots{margin-left:20px;margin-top:22px;font-size:16px}.go-up-icon{display:block;padding:18px 0 18px 24px}.upload-panel{display:-webkit-box;display:flex;position:relative;width:100%}.upload-panel .context{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;margin-left:24px;margin-top:24px;margin-right:24px}.upload-panel .context .context-actions{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-actions :last-child{margin-right:0}.upload-panel .context .context-actions ::ng-deep .button{height:37px;width:96px;padding:0;-webkit-box-pack:center;justify-content:center}.upload-panel .context .context-actions ::ng-deep .button ::ng-deep .text{font-size:10px}.upload-panel .context .context-panel{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%;margin-top:20px}.upload-panel .context .context-panel .upload-url{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-panel .upload-url .url-input{width:100%;height:27px;border:1px solid #25c2d4;font-size:14px;padding-left:6px}.upload-panel .context .context-panel .upload-url .url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.upload-panel .context .context-panel .upload-url .url-check .ng-fa-icon{display:block;padding:8px}.upload-panel gd-drop-down{margin-right:10px}.file-description .ng-fa-icon.fa-file-pdf{color:#e04e4e}.file-description .ng-fa-icon.fa-file-word{color:#539cf0}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29e1e}.file-description .ng-fa-icon.fa-file-excel{color:#7cbc46}.file-description .ng-fa-icon.fa-file-image{color:#c375ed}.file-description .ng-fa-icon.fa-file,.file-description .ng-fa-icon.fa-file-alt,.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#4b566c}.file-description .ng-fa-icon{font-size:32px}.file-name{font-size:16px;color:#6e6e6e;overflow:hidden;text-overflow:ellipsis}.file-name-format{padding-left:11px;overflow:hidden}.file-format{font-size:10px;padding-top:3px;color:#acacac}.go-up,.list-files-lines{border-bottom:1px solid #e7e7e7}.list-files-lines:hover{background-color:#e5e5e5}.gd-dnd-wrap{background-color:#fff;cursor:default;position:absolute;width:100%;height:calc(100% - 60px);background:rgba(255,255,255,.7);z-index:1;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.dnd-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;top:259px;position:absolute}.dnd-wrapper .text{color:#6e6e6e;font-size:14px}.dnd-wrapper .icon{display:-webkit-box;display:flex;width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}@media (max-width:1037px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}#gd-browse-section{width:100%;height:calc(100% - 146px)}}"]
            }] }
];
/** @nocollapse */
BrowseFilesModalComponent.ctorParameters = () => [
    { type: UploadFilesService }
];
BrowseFilesModalComponent.propDecorators = {
    files: [{ type: Input }],
    uploadConfig: [{ type: Input }],
    selectedFileGuid: [{ type: Output }],
    selectedDirectory: [{ type: Output }],
    urlForUpload: [{ type: Output }],
    closing: [{ type: Output }]
};
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
class ZoomService {
    constructor() {
        this._observer = new Subject();
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
class PagePreloadService {
    constructor() {
        this._checkPreload = new Observable((/**
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
class NavigateService {
    /**
     * @param {?} _pagePreloadService
     */
    constructor(_pagePreloadService) {
        this._pagePreloadService = _pagePreloadService;
        this._currentPage = 0;
        this._countPages = 0;
        this._navigate = new Observable((/**
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
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NavigateService.ctorParameters = () => [
    { type: PagePreloadService }
];
/** @nocollapse */ NavigateService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NavigateService_Factory() { return new NavigateService(ɵɵinject(PagePreloadService)); }, token: NavigateService, providedIn: "root" });
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
    NavigateService.prototype._navigate;
    /**
     * @type {?}
     * @private
     */
    NavigateService.prototype._observer;
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
const $$1 = jquery;
class DocumentComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _zoomService
     * @param {?} _windowService
     * @param {?} _navigateService
     */
    constructor(_elementRef, _zoomService, _windowService, _navigateService) {
        this._elementRef = _elementRef;
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this._navigateService = _navigateService;
        this.onpan = new EventEmitter();
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
        (val) => {
            this.zoom = val;
        }));
        this.isDesktop = _windowService.isDesktop();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.ifPresentation()) {
            this.selectedPage = 1;
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        /** @type {?} */
        const panzoom = this._elementRef.nativeElement.children.item(0).children.item(0);
        ((/** @type {?} */ (panzoom))).style.transform = '';
        // TODO: this intersects with zooming by zoom directive, but still needed
        // for flush previous settings before opening another file
        //this._zoomService.changeZoom(100);
        //this.scale = 1;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
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
        const hammer = new Hammer(this.container);
    }
    // TODO: this temporary crutch for Excel files should be documented
    /**
     * @return {?}
     */
    ifExcel() {
        return FileUtil.find(this.file.guid, false).format === "Microsoft Excel";
    }
    /**
     * @return {?}
     */
    ifPresentation() {
        return FileUtil.find(this.file.guid, false).format === "Microsoft PowerPoint";
    }
    /**
     * @param {?} value
     * @param {?} pageNumber
     * @return {?}
     */
    getDimensionWithUnit(value, pageNumber) {
        return this.ifPresentation() && !this.isVisible(pageNumber) ? 0 : value + (this.mode ? FileUtil.find(this.file.guid, false).unit : 'px');
    }
    /**
     * @return {?}
     */
    ifEdge() {
        return navigator.userAgent.toLowerCase().indexOf('edge') > -1;
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
            $$1(element).trigger('focus');
        }
    }
    /**
     * @param {?} el
     * @return {?}
     */
    absolutePosition(el) {
        /** @type {?} */
        let x = 0;
        /** @type {?} */
        let y = 0;
        while (el !== null) {
            x += el.offsetLeft;
            y += el.offsetTop;
            el = el.offsetParent;
        }
        return { x: x, y: y };
    }
    ;
    /**
     * @param {?} pos
     * @param {?} viewportDim
     * @param {?} docDim
     * @return {?}
     */
    restrictRawPos(pos, viewportDim, docDim) {
        if (pos < viewportDim / this.scale - docDim) { // too far left/up?
            pos = viewportDim / this.scale - docDim;
        }
        else if (pos > 0) { // too far right/down?
            pos = 0;
        }
        return pos;
    }
    ;
    /**
     * @return {?}
     */
    updateLastPos() {
        this.lastX = this.x;
        this.lastY = this.y;
    }
    ;
    /**
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    translate(deltaX, deltaY) {
        // We restrict to the min of the viewport width/height or current width/height as the
        // current width/height may be smaller than the viewport width/height
        /** @type {?} */
        const newX = this.restrictRawPos(this.lastX + deltaX / this.scale, Math.min(this.viewportWidth, this.curWidth), this.docWidth);
        this.x = newX;
        // TODO: value here and in the similar line below changes to positive to take any effect
        this.container.scrollLeft = -Math.ceil(newX * this.scale);
        /** @type {?} */
        const newY = this.restrictRawPos(this.lastY + deltaY / this.scale, Math.min(this.viewportHeight, this.curHeight), this.docHeight);
        this.y = newY;
        this.container.scrollTop = -Math.ceil(newY * this.scale);
        this.doc.style.transform = 'scale(' + this.scale + ')';
    }
    ;
    /**
     * @param {?} scaleBy
     * @return {?}
     */
    startZoom(scaleBy) {
        this.scale = this.lastScale * scaleBy;
        this.curWidth = this.docWidth * this.scale;
        this.curHeight = this.docHeight * this.scale;
        // Adjust margins to make sure that we aren't out of bounds
        this.translate(0, 0);
    }
    ;
    /**
     * @param {?} $event
     * @return {?}
     */
    rawCenter($event) {
        /** @type {?} */
        const pos = this.absolutePosition(this.container);
        // We need to account for the scroll position
        /** @type {?} */
        const scrollLeft = window.pageXOffset ? window.pageXOffset : document.body.scrollLeft;
        /** @type {?} */
        const scrollTop = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;
        /** @type {?} */
        const zoomX = -this.x + ($event.center.x - pos.x + scrollLeft) / this.scale;
        /** @type {?} */
        const zoomY = -this.y + ($event.center.y - pos.y + scrollTop) / this.scale;
        return { x: zoomX, y: zoomY };
    }
    ;
    /**
     * @return {?}
     */
    updateLastScale() {
        this.lastScale = this.scale;
    }
    ;
    /**
     * @param {?} scaleBy
     * @param {?} rawZoomX
     * @param {?} rawZoomY
     * @param {?} doNotUpdateLast
     * @return {?}
     */
    zoomAround(scaleBy, rawZoomX, rawZoomY, doNotUpdateLast) {
        // Zoom
        this.startZoom(scaleBy);
        // New raw center of viewport
        /** @type {?} */
        const rawCenterX = -this.x + Math.min(this.viewportWidth, this.curWidth) / 2 / this.scale;
        /** @type {?} */
        const rawCenterY = -this.y + Math.min(this.viewportHeight, this.curHeight) / 2 / this.scale;
        // Delta
        /** @type {?} */
        const deltaX = (rawCenterX - rawZoomX) * this.scale;
        /** @type {?} */
        const deltaY = (rawCenterY - rawZoomY) * this.scale;
        // Translate back to zoom center
        this.translate(deltaX, deltaY);
        if (!doNotUpdateLast) {
            this.updateLastScale();
            this.updateLastPos();
        }
    }
    ;
    /**
     * @param {?} $event
     * @return {?}
     */
    onPinch($event) {
        if (this.pinchCenter === null) {
            this.pinchCenter = this.rawCenter($event);
            /** @type {?} */
            const offsetX = this.pinchCenter.x * this.scale - (-this.x * this.scale + Math.min(this.viewportWidth, this.curWidth) / 2);
            /** @type {?} */
            const offsetY = this.pinchCenter.y * this.scale - (-this.y * this.scale + Math.min(this.viewportHeight, this.curHeight) / 2);
            this.pinchCenterOffset = { x: offsetX, y: offsetY };
        }
        /** @type {?} */
        const newScale = this.scale * $event.scale;
        /** @type {?} */
        const zoomX = this.pinchCenter.x * newScale - this.pinchCenterOffset.x;
        /** @type {?} */
        const zoomY = this.pinchCenter.y * newScale - this.pinchCenterOffset.y;
        /** @type {?} */
        const zoomCenter = { x: zoomX / newScale, y: zoomY / newScale };
        this.zoomAround($event.scale, zoomCenter.x, zoomCenter.y, true);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPinchEnd($event) {
        this.updateLastScale();
        this.updateLastPos();
        this.pinchCenter = null;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPan($event) {
        // TODO: looks like native pan works better
        // if (!this.isDesktop) {
        //   this.translate($event.deltaX, $event.deltaY);
        // }
        this.onpan.emit($event);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPanEnd($event) {
        // if (!this.isDesktop) {
        //   this.updateLastPos();
        // }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onDoubleTap($event) {
        if (!this.isDesktop) {
            if ($event.tapCount === 2) {
                /** @type {?} */
                const c = this.rawCenter($event);
                this.zoomAround(2, c.x, c.y, false);
            }
        }
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    isVisible(pageNumber) {
        if (this.ifPresentation()) {
            return pageNumber === this.selectedPage ? true : false;
        }
        else {
            return true;
        }
    }
}
DocumentComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-document',
                template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" (tap)=\"onDoubleTap($event)\" (pinch)=\"onPinch($event)\" \n  (pinchend)=\"onPinchEnd($event)\" (pan)=\"onPan($event)\" (panend)=\"onPanEnd($event)\">\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\n    <div [ngClass]=\"ifExcel() ? 'page excel' : ifPresentation() ? (isVisible(page.number) ? 'page presentation active' : 'page presentation') : 'page'\" *ngFor=\"let page of file?.pages\"\n      [style.height]=\"getDimensionWithUnit(page.height, page.number)\" [style.width]=\"getDimensionWithUnit(page.width, page.number)\" gdRotation\n      [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page *ngIf=\"isVisible(page.number)\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\" [width]=\"page.width\"\n        [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                styles: [":host{-webkit-box-flex:1;flex:1;-webkit-transition:.4s;transition:.4s;background-color:#e7e7e7;height:100%;overflow:scroll;touch-action:auto!important}:host .document{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important;touch-action:auto!important}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);-webkit-transition:.3s;transition:.3s}.page.excel{overflow:auto}.page.presentation{margin:0;-webkit-transition:unset;transition:unset}.page.presentation.active{margin:20px}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:wrap;-webkit-box-pack:center;justify-content:center;align-content:flex-start}@media (max-width:1037px){.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
            }] }
];
/** @nocollapse */
DocumentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ZoomService },
    { type: WindowService },
    { type: NavigateService }
];
DocumentComponent.propDecorators = {
    mode: [{ type: Input }],
    preloadPageCount: [{ type: Input }],
    file: [{ type: Input }],
    selectedPage: [{ type: Input }],
    onpan: [{ type: Output }]
};
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
    DocumentComponent.prototype.onpan;
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
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}

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
        const isIE = /*@cc_on!@*/ false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
        if (isIE && this.number === 0) {
            this.editable = false;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
        // which leads to undesired spaces on the top of the docs pages
        this.data = this.data !== null ? this.data.replace(/>\s+</g, '><')
            .replace(/\uFEFF/g, "")
            .replace(/href="\/viewer/g, 'href="http://localhost:8080/viewer')
            .replace(/src="\/viewer/g, 'src="http://localhost:8080/viewer')
            .replace(/data="\/viewer/g, 'data="http://localhost:8080/viewer')
            : null;
        /** @type {?} */
        const dataImagePngBase64 = 'data:image/png;base64,';
        this.imgData = dataImagePngBase64;
        if (!this.isHtml) {
            this.imgData += this.data;
        }
    }
}
PageComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-page',
                template: "<div id=\"page-{{number}}\" gdHostDynamic [ident]=\"number\">\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\" [contentEditable]=\"(editable) ? true : false\"\n      gdEditor [text]=\"data\"></div>\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\n       alt=\"\"\n       *ngIf=\"data && !isHtml\">\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n    &nbsp;Loading... Please wait.\n  </div>\n</div>\n",
                styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper div{width:100%}::ng-deep .gd-highlight{background-color:#ff0}::ng-deep .gd-highlight-select{background-color:#ff9b00}"]
            }] }
];
/** @nocollapse */
PageComponent.ctorParameters = () => [];
PageComponent.propDecorators = {
    angle: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    number: [{ type: Input }],
    data: [{ type: Input }],
    isHtml: [{ type: Input }],
    editable: [{ type: Input }]
};
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
    { type: Pipe, args: [{ name: 'safeHtml' },] }
];
/** @nocollapse */
SanitizeHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SanitizeHtmlPipe.prototype.sanitizer;
}
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
    { type: Pipe, args: [{ name: 'safeResourceHtml' },] }
];
/** @nocollapse */
SanitizeResourceHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SanitizeResourceHtmlPipe.prototype.sanitizer;
}
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
    { type: Pipe, args: [{ name: 'safeStyle' },] }
];
/** @nocollapse */
SanitizeStylePipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SanitizeStylePipe.prototype.sanitizer;
}
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
    { type: Pipe, args: [{ name: 'highlight' },] }
];

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
        this.closeUpload = new EventEmitter();
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
    { type: Component, args: [{
                selector: 'gd-upload-file-zone',
                template: "<div class=\"gd-drag-n-drop-wrap\" id=\"gd-dropZone\" gdDnd (closing)=\"onCloseUpload()\" (click)=\"close($event)\">\n  <div class=\"gd-drag-n-drop-icon\">\n    <fa-icon [icon]=\"['fas','cloud-download-alt']\" size=\"5x\"></fa-icon>\n  </div>\n  <h2>Drag &amp; Drop your files here</h2>\n  <h4>OR</h4>\n  <div class=\"gd-drag-n-drop-buttons\">\n    <label class=\"btn btn-primary\"> \n      <fa-icon [icon]=\"['fas','file']\"></fa-icon>\n      SELECT FILE\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      </label>\n  </div>\n</div>\n",
                styles: [".gd-drag-n-drop-wrap{border:2px dashed #ccc;background-color:#f8f8f8;text-align:center;cursor:default;position:absolute;width:-webkit-fill-available;left:1px;display:-webkit-box;display:flex;align-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;opacity:.9;z-index:1}.gd-drag-n-drop-wrap h2{color:#959da5;margin:5px 0;font-size:15px;font-weight:300}.gd-drag-n-drop-wrap h4{color:#cacaca;font-weight:300;font-size:12px;margin:10px 0 15px}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-drag-n-drop-buttons i{margin-right:5px}.gd-drag-n-drop-buttons .btn{width:134px;height:35px;margin:0 10px;font-size:12px;font-weight:400}.gd-drag-n-drop-wrap.hover{background:#ddd;border-color:#aaa}"]
            }] }
];
/** @nocollapse */
UploadFileZoneComponent.ctorParameters = () => [
    { type: UploadFilesService }
];
UploadFileZoneComponent.propDecorators = {
    closeUpload: [{ type: Output }]
};
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
class DndDirective {
    /**
     * @param {?} _uploadFilesService
     */
    constructor(_uploadFilesService) {
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
    onDragEnter(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.dragCounter++;
        this.active = true;
        this.opening.emit(true);
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        return false;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.dragCounter--;
        if (this.dragCounter === 0) {
            this.active = false;
            this.closeArea();
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
    { type: Directive, args: [{
                selector: '[gdDnd]'
            },] }
];
/** @nocollapse */
DndDirective.ctorParameters = () => [
    { type: UploadFilesService }
];
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
const $$2 = jquery;
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
        const win = $$2(window);
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
        const height = $$2(el).outerHeight() * (zoomN);
        /** @type {?} */
        const width = $$2(el).outerWidth() * (zoomN);
        if (!width || !height) {
            return false;
        }
        /** @type {?} */
        const bounds = $$2(el).offset();
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
            top: parseFloat(Math.min(1, (bottom - viewport.top) / height).toFixed(2)),
            bottom: parseFloat(Math.min(1, (viewport.bottom - (bounds.top * (zoomN))) / height).toFixed(2)),
            left: parseFloat(Math.min(1, (right - viewport.left) / width).toFixed(2)),
            right: parseFloat(Math.min(1, (viewport.right - (bounds.left * (zoomN))) / width).toFixed(2))
        };
        return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;
    }
}
ViewportService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ViewportService.ctorParameters = () => [];
/** @nocollapse */ ViewportService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ViewportService_Factory() { return new ViewportService(); }, token: ViewportService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const $$3 = jquery;
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
        this.loadedPagesSet = new Set();
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
            // using polyfill
            el.scroll(options);
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
            // here and in the similar line below we getting the document pages
            return el.children.item(0).children.item(0).children;
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
            return el.children.item(0).children.item(0).children.item(pageNumber - 1);
        }
    }
    /**
     * @private
     * @param {?} pageNumber
     * @return {?}
     */
    calculateOffset(pageNumber) {
        /** @type {?} */
        const count = this._windowService.isFirefox() ? 1 : this.countPagesOnWidth();
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
                if (!this.loadedPagesSet.has(page)) {
                    this._pagePreloadService.changeLastPageInView(page);
                    this.loadedPagesSet.add(page);
                }
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
    { type: Directive, args: [{
                selector: '[gdScrollable]'
            },] }
];
/** @nocollapse */
ScrollableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NavigateService },
    { type: PagePreloadService },
    { type: ZoomService },
    { type: WindowService },
    { type: ViewportService }
];
ScrollableDirective.propDecorators = {
    scrolling: [{ type: HostListener, args: ['scroll',] }],
    resizing: [{ type: HostListener, args: ['window:resize',] }]
};
if (false) {
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
const $$4 = jquery;
class MouseWheelDirective {
    constructor() {
        this.mouseWheelUp = new EventEmitter();
        this.mouseWheelDown = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseWheelChrome(event) {
        this.mouseWheelFunc(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseWheelFirefox(event) {
        this.mouseWheelFunc(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseWheelIE(event) {
        this.mouseWheelFunc(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    mouseWheelFunc(event) {
        event = window.event;
        /** @type {?} */
        const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        if (delta > 0) {
            this.mouseWheelUp.emit(event);
        }
        else if (delta < 0) {
            this.mouseWheelDown.emit(event);
        }
    }
}
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
class ZoomDirective {
    /**
     * @param {?} _zoomService
     * @param {?} _windowService
     * @param {?} el
     */
    constructor(_zoomService, _windowService, el) {
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this.zoomActive = true;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setStyles(this._zoomService.zoom);
        this.resizePages(this._zoomService.zoom);
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
            this.resizePages(zoom);
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
        /** @type {?} */
        const zoomInt = zoom === 100 ? 1 : zoom / 100;
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
        let maxWidth = 0;
        this.file.pages.forEach((/**
         * @param {?} page
         * @return {?}
         */
        page => {
            {
                if (page.width > maxWidth) {
                    maxWidth = page.width;
                }
            }
        }));
        // Images and Excel-related files receiving dimensions in px from server
        this.minWidth = maxWidth + FileUtil.find(this.file.guid, false).unit;
    }
    /**
     * @private
     * @param {?} elm
     * @return {?}
     */
    getScrollWidth(elm) {
        return elm.offsetWidth - elm.clientWidth;
    }
    /**
     * @private
     * @param {?} elm
     * @return {?}
     */
    getScrollHeight(elm) {
        return elm.offsetHeight - elm.clientHeight;
    }
    /**
     * @private
     * @param {?} zoom
     * @return {?}
     */
    resizePages(zoom) {
        /** @type {?} */
        const zoomInt = zoom === 100 ? 1 : zoom / 100;
        /** @type {?} */
        const viewPortWidth = this.el.nativeElement.parentElement.offsetWidth;
        /** @type {?} */
        const viewPortHeight = this.el.nativeElement.parentElement.offsetHeight;
        /** @type {?} */
        const scrollWidth = this.getScrollWidth(this.el.nativeElement.parentElement);
        /** @type {?} */
        const scrollHeight = this.getScrollHeight(this.el.nativeElement.parentElement);
        this.width = (viewPortWidth / zoomInt - scrollWidth / zoomInt) + 'px';
        this.height = (viewPortHeight / zoomInt - scrollHeight / zoomInt) + 'px';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setStyles(this._zoomService.zoom);
    }
}
ZoomDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gdZoom]'
            },] }
];
/** @nocollapse */
ZoomDirective.ctorParameters = () => [
    { type: ZoomService },
    { type: WindowService },
    { type: ElementRef }
];
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
class OnCloseService {
    constructor() {
        this._observer = new Subject();
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
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
OnCloseService.ctorParameters = () => [];
/** @nocollapse */ OnCloseService.ngInjectableDef = ɵɵdefineInjectable({ factory: function OnCloseService_Factory() { return new OnCloseService(); }, token: OnCloseService, providedIn: "root" });
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
class SelectComponent {
    /**
     * @param {?} _onCloseService
     */
    constructor(_onCloseService) {
        this._onCloseService = _onCloseService;
        this.disabled = false;
        this.selected = new EventEmitter();
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
        this.close();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggle($event) {
        // TODO: following lines were uncommented due to needness in signature app
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
    { type: Component, args: [{
                selector: 'gd-select',
                template: "<div class=\"select\"\n     (click)=\"toggle($event)\"\n     (touchstart)=\"toggle($event)\"\n     (clickOutside)=\"onClickOutside($event)\"\n     [clickOutsideEnabled]=\"isOpen\">\n  <div class=\"selected-value\" gdDisabledCursor [dis]=\"disabled\">\n    {{showSelected?.name}}\n  </div>\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\"></span>\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\n    <div *ngFor=\"let option of options\">\n      <div *ngIf=\"!option.separator\" (click)=\"select($event, option)\" (touchstart)=\"select($event, option)\"\n           class=\"option\">{{option.name}}</div>\n      <div *ngIf=\"option.separator\" role=\"separator\" class=\"dropdown-menu-separator\"></div>\n    </div>\n  </div>\n</div>\n",
                styles: [".select{min-width:50px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;color:#959da5}.selected-value{font-size:14px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:clip;max-width:70px}.selected-value.inactive{cursor:not-allowed;color:#ccc}.nav-caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent;cursor:pointer}.nav-caret.inactive{cursor:not-allowed;color:#ccc}.dropdown-menu{position:absolute;top:49px;z-index:1000;float:left;min-width:96px;list-style:none;font-size:13px;text-align:left;background-color:#fff;box-shadow:0 3px 6px rgba(0,0,0,.3);background-clip:padding-box}.dropdown-menu .option{display:block;padding:7px 0 7px 7px;clear:both;font-weight:400;line-height:1.42857143;white-space:nowrap;cursor:pointer;font-size:10px}.dropdown-menu .option:hover{background-color:#25c2d4;color:#fff!important}.dropdown-menu-separator{height:1px;overflow:hidden;background-color:#f4f4f4;padding:0!important}"]
            }] }
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [
    { type: OnCloseService }
];
SelectComponent.propDecorators = {
    options: [{ type: Input }],
    disabled: [{ type: Input }],
    showSelected: [{ type: Input }],
    selected: [{ type: Output }],
    isOpen: [{ type: Input }]
};
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
    SelectComponent.prototype.isOpen;
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
    { type: Directive, args: [{
                selector: '[gdDisabledCursor]'
            },] }
];
/** @nocollapse */
DisabledCursorDirective.ctorParameters = () => [];
DisabledCursorDirective.propDecorators = {
    dis: [{ type: Input }],
    cursor: [{ type: HostBinding, args: ['class.inactive',] }]
};
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
class RotationDirective {
    constructor() {
        this.withMargin = true;
    }
    /**
     * @private
     * @return {?}
     */
    updateCursor() {
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
    { type: Directive, args: [{
                selector: '[gdRotation]'
            },] }
];
/** @nocollapse */
RotationDirective.ctorParameters = () => [];
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
class InitStateComponent {
    constructor() {
        this.fileDropped = new EventEmitter();
        this.showUploadFile = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    dropped($event) {
        if ($event) {
            this.fileDropped.emit($event);
            this.showUploadFile = false;
        }
    }
}
InitStateComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-init-state',
                template: "<div class=\"wrapper gd-drag-n-drop-wrap\" gdDnd (dropped)=\"dropped($event)\" (opening)=\"showUploadFile=$event\">\n  <div class=\"init-state-wrapper\">\n    <fa-icon class=\"icon\" [icon]=\"['fas',icon]\"></fa-icon>\n    <span class=\"start\">\n      <ng-content></ng-content>\n    </span>\n  </div>\n  <div *ngIf=\"showUploadFile\" class=\"init-state-dnd-wrapper\">\n    <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\n    <span class=\"text\">{{text}}</span>\n  </div>\n</div>\n",
                styles: [".wrapper{color:#959da5;background-color:#e7e7e7;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;width:100%;height:100%}.icon{font-size:65px;margin-bottom:43px;display:-webkit-box;display:flex;color:#959da5}.start{font-size:15px;text-align:center;color:#959da5}.gd-drag-n-drop-wrap.active{background-color:#fff;position:fixed;top:0;background:rgba(255,255,255,.8)}.gd-drag-n-drop-wrap.active .init-state-wrapper{position:absolute;opacity:.2;top:unset}.gd-drag-n-drop-wrap.active .init-state-dnd-wrapper{top:0;z-index:999}.gd-drag-n-drop-wrap.active .init-state-dnd-wrapper .icon{width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}.gd-drag-n-drop-wrap.active .text{color:#6e6e6e;font-size:14px}.init-state-dnd-wrapper,.init-state-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:250px;height:250px;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.init-state-wrapper{top:-60px;position:relative}"]
            }] }
];
/** @nocollapse */
InitStateComponent.ctorParameters = () => [];
InitStateComponent.propDecorators = {
    icon: [{ type: Input }],
    text: [{ type: Input }],
    fileDropped: [{ type: Output }]
};
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
class RenderPrintService {
    constructor() {
        this._render = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => this._observer = observer));
        this._renderBlob = new Observable((/**
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
    { type: Directive, args: [{
                selector: '[gdRenderPrint]'
            },] }
];
/** @nocollapse */
RenderPrintDirective.ctorParameters = () => [
    { type: RenderPrintService }
];
RenderPrintDirective.propDecorators = {
    htmlMode: [{ type: Input }]
};
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
class ExceptionMessageService {
    constructor() {
        this._observer = new BehaviorSubject('Server is not available');
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
    { type: Component, args: [{
                selector: 'gd-error-modal',
                template: "<gd-modal id=\"gd-error-message\" [title]=\"'Error'\">\n  <section id=\"gd-error-section\">\n    <fa-icon [icon]=\"['fas', 'exclamation-triangle']\"></fa-icon>\n    <div class=\"gd-modal-error\">\n      <div class=\"gd-modal-error-title\">Something went wrong</div>\n      <div class=\"gd-modal-error-message\">{{message ? message : 'Server is not available'}}</div>\n    </div>\n  </section>\n</gd-modal>\n",
                styles: [".gd-modal-error{display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex:1}.gd-modal-error .gd-modal-error-message{font-size:12px;margin:0 24px 24px 0;word-break:break-word}.gd-modal-error .gd-modal-error-title{font-size:16px;font-weight:700;margin:14px 0 10px}#gd-error-section{max-width:468px;max-height:204px;display:-webkit-box;display:flex}#gd-error-section fa-icon{-webkit-box-flex:1;flex:1;color:#e04e4e;font-size:40px;margin:13px 23px 90px;text-align:center;max-width:46px}"]
            }] }
];
/** @nocollapse */
ErrorModalComponent.ctorParameters = () => [
    { type: ExceptionMessageService }
];
if (false) {
    /** @type {?} */
    ErrorModalComponent.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PasswordService {
    constructor() {
        this._observer = new Subject();
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
const $$5 = jquery;
class PasswordRequiredComponent {
    /**
     * @param {?} messageService
     * @param {?} _passwordService
     */
    constructor(messageService, _passwordService) {
        this._passwordService = _passwordService;
        this.cancelEvent = new EventEmitter();
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
    /**
     * @param {?} $event
     * @return {?}
     */
    onCloseOpen($event) {
        if ($event) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const element = $$5("#password");
                if (element) {
                    element.focus();
                }
            }), 100);
        }
        else {
            $$5("#password").val("");
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    cancel($event) {
        $$5("#password").val("");
        this.cancelEvent.emit(true);
    }
}
PasswordRequiredComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-password-required',
                template: "<gd-modal id=\"gd-password-required\" [title]=\"'Password protected document'\" (cancel)=\"cancel($event)\" (visible)=\"onCloseOpen($event)\">\n  <section id=\"gd-password-section\">\n    <div class=\"gd-password-wrap\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" [ngClass]=\"{'error': message}\" id=\"password\" #pass\n             (keyup.enter)=\"setPassword(pass.value)\">\n      <span class=\"gd-password-error\">{{message}}</span>\n      <gd-button [icon]=\"'key'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"setPassword(pass.value)\">\n          Open\n      </gd-button>\n    </div>\n  </section>\n</gd-modal>\n",
                styles: ["#gd-password-section{width:375px;height:164px}.gd-password-wrap{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:24px}.gd-password-wrap label{font-size:14px;color:#acacac;padding-bottom:12px}.gd-password-wrap input{height:30px;border:1px solid #25c2d4}.gd-password-wrap input.error{border-color:#e04e4e}.gd-password-wrap gd-button{align-self:flex-end}.gd-password-wrap ::ng-deep .button{height:37px;width:72px;padding:0;-webkit-box-pack:center;justify-content:center}.gd-password-wrap ::ng-deep .button ::ng-deep .text{font-size:10px!important}.gd-password-error{color:#e04e4e;padding:10px 0 12px;height:12px;line-height:12px;font-size:12px}@media (max-width:1037px){#gd-password-section{min-width:375px}}"]
            }] }
];
/** @nocollapse */
PasswordRequiredComponent.ctorParameters = () => [
    { type: ExceptionMessageService },
    { type: PasswordService }
];
PasswordRequiredComponent.propDecorators = {
    cancelEvent: [{ type: Output }]
};
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
            .pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            return data;
        })), catchError((/**
         * @param {?} exception
         * @return {?}
         */
        (exception) => {
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
            return throwError(exception);
        })));
    }
}
ErrorInterceptorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ErrorInterceptorService.ctorParameters = () => [
    { type: ModalService },
    { type: ExceptionMessageService }
];
/** @nocollapse */ ErrorInterceptorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ErrorInterceptorService_Factory() { return new ErrorInterceptorService(ɵɵinject(ModalService), ɵɵinject(ExceptionMessageService)); }, token: ErrorInterceptorService, providedIn: "root" });
if (false) {
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
class SearchService {
    constructor() {
        this._observer = new Subject();
        this._textChange = this._observer.asObservable();
        this._observerCurrent = new Subject();
        this._currentChange = this._observerCurrent.asObservable();
        this._observerTotal = new Subject();
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
class SearchComponent {
    /**
     * @param {?} _searchService
     */
    constructor(_searchService) {
        this._searchService = _searchService;
        this.hidePanel = new EventEmitter(false);
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
    { type: Component, args: [{
                selector: 'gd-search',
                template: "<div class=\"gd-nav-search-container\">\n  <input type=\"text\" class=\"gd-search-input\" (keydown.enter)=\"next()\" #text (input)=\"setText(text.value)\"/>\n  <div class=\"gd-search-count\">{{current}} of {{total}}</div>\n  <gd-button class=\"gd-nav-search-btn\" [icon]=\"'chevron-left'\" [disabled]=\"total == 0 || current == 1\" (click)=\"prev()\">\n  </gd-button>\n  <gd-button class=\"gd-nav-search-btn\" [icon]=\"'chevron-right'\" [disabled]=\"total == 0 || current == total\" (click)=\"next()\">\n  </gd-button>\n  <gd-button class=\"gd-nav-search-btn gd-nav-search-cancel\" [icon]=\"'times'\" (click)=\"hide()\">\n  </gd-button>\n</div>\n",
                styles: [".gd-nav-search-btn{margin:3px 0 4px}.gd-nav-search-cancel{color:#fff;font-size:14px;width:37px}.gd-search-count{color:#959da5;font-size:12px;position:absolute;right:148px;top:14px}.gd-nav-search-container{background-color:#3e4e5a;width:410px;position:fixed;left:50%;top:60px;z-index:2;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);display:-webkit-box;display:flex}.gd-search-input{float:left;height:30px;width:267px;font-size:14px;color:#6e6e6e;border:1px solid #25c2d4;margin:7px 0 7px 7px;box-sizing:border-box;padding:6px 0 5px 9px}input[type=text]::-ms-clear{display:none}@media (max-width:1037px){.gd-search-input{width:231px;height:30px;margin:7px 0 7px 5px}.gd-search-count{position:absolute;left:193px;top:15px}.gd-nav-search-container{width:100%}}"]
            }] }
];
/** @nocollapse */
SearchComponent.ctorParameters = () => [
    { type: SearchService }
];
SearchComponent.propDecorators = {
    hidePanel: [{ type: Output }],
    textElement: [{ type: ViewChild, args: ['text', {
                    static: true
                },] }]
};
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
const $$6 = jquery;
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
                $$6(value).removeClass('gd-highlight-select');
            }));
            /** @type {?} */
            const currentEl = el.querySelectorAll('.gd-highlight')[this.current - 1];
            $$6(currentEl).addClass('gd-highlight-select');
            if (currentEl) {
                /** @type {?} */
                const options = {
                    left: 0,
                    top: ($$6(currentEl).offset().top) + el.parentElement.parentElement.scrollTop - 150,
                };
                // using polyfill
                el.parentElement.parentElement.scroll(options);
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
        const textNodes = $$6(el).find('*').contents().filter((/**
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
            const $this = $$6(this);
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
    { type: Directive, args: [{
                selector: '[gdSearchable]'
            },] }
];
/** @nocollapse */
SearchableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: SearchService },
    { type: HighlightSearchPipe },
    { type: ZoomService }
];
if (false) {
    /** @type {?} */
    SearchableDirective.prototype.text;
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
class TabbedToolbarsComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TabbedToolbarsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-tabbed-toolbars',
                template: "<div class=\"top-panel\">\n  <gd-logo [logo]=\"logo\" [icon]=\"icon\"></gd-logo>\n  <ng-content></ng-content>\n</div>\n",
                styles: [".top-panel{background:#3e4e5a;display:-webkit-box;display:flex;width:100%;height:90px}.top-panel ::ng-deep .logo{height:30px;font-size:16px}@media (max-width:1037px){.top-panel{height:60px}.top-panel ::ng-deep .logo{height:60px}}"]
            }] }
];
/** @nocollapse */
TabbedToolbarsComponent.ctorParameters = () => [];
TabbedToolbarsComponent.propDecorators = {
    logo: [{ type: Input }],
    icon: [{ type: Input }]
};
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
class TabActivatorService {
    constructor() {
        this._observer = new Subject();
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
    { type: Component, args: [{
                selector: 'gd-tab',
                template: "<div [ngClass]=\"(active) ? 'gd-tab active' : 'gd-tab'\" (mousedown)=\"selectTab()\">\n  <div class=\"title\" *ngIf=\"tabTitle\">{{tabTitle}}</div>\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n</div>\n<div *ngIf=\"content\" [ngClass]=\"(active) ? 'tab-content active' : 'tab-content'\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [".tab-content{height:60px;position:absolute;background-color:#fff;width:100%;left:0;line-height:60px;display:none;z-index:9}.tab-content ::ng-deep .toolbar-panel{height:60px}.tab-content.active{display:-webkit-box;display:flex}.gd-tab{text-align:center;font-size:11px;color:#e5e5e5;height:30px;line-height:30px;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.gd-tab .icon{display:none;font-size:14px}.gd-tab .title{margin:auto 23px}.gd-tab.active{background-color:#fff;color:#3e4e5a;font-weight:700}@media (max-width:1037px){.gd-tab{height:60px;line-height:60px;width:60px}.gd-tab .title{display:none}.gd-tab .icon{display:block;font-size:22px}}"]
            }] }
];
/** @nocollapse */
TabComponent.ctorParameters = () => [
    { type: TabActivatorService }
];
TabComponent.propDecorators = {
    id: [{ type: Input }],
    tabTitle: [{ type: Input }],
    icon: [{ type: Input }],
    disabled: [{ type: Input }],
    active: [{ type: Input }],
    content: [{ type: Input }]
};
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
class TabsComponent {
    constructor() {
    }
}
TabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-tabs',
                template: "<div class=\"gd-tabs\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [".gd-tabs{display:-webkit-box;display:flex}"]
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
    /**
     * @return {?}
     */
    static default() {
        return new Formatting(10, '#000000', '#FFFFFF', false, false, false, 'Arial', false, "", "");
    }
}
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
class FormattingService {
    constructor() {
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
const DEFAULT_COLORS = [
    '#000000', '#434343', '#666666', '#999999', '#B7B7B7', '#CCCCCC', '#D9D9D9', '#EFEFEF', '#F3F3F3', '#FFFFFF',
    '#980000', '#FF0000', '#FF9900', '#FFFF00', '#00FF00', '#00FFFF', '#4986E8', '#0000FF', '#9900FF', '#FF00FF',
    '#E6B8AF', '#F4CCCC', '#FDE5CD', '#FFF2CC', '#D9EAD3', '#D0E0E2', '#C9DAF8', '#CFE2F3', '#D9D2E9', '#EAD1DC',
    '#DD7E6B', '#EA9899', '#F9CB9C', '#FFE59A', '#B7D7A8', '#A2C4C9', '#A4C2F4', '#9FC5E8', '#B4A7D7', '#D5A6BD',
    '#CC4125', '#E06666', '#F6B26B', '#FFD966', '#92C47D', '#75A5AF', '#6D9EEB', '#6FA9DB', '#8E7CC3', '#C27BA0',
    '#A61C00', '#CC0000', '#E69138', '#F2C131', '#6AA84F', '#45818E', '#3C78D8', '#3C85C6', '#674EA7', '#A64D79',
    '#85200B', '#990000', '#B45F05', '#BF9000', '#37761D', '#144F5C', '#1254CC', '#0A5394', '#351C75', '#741B47',
    '#5B0F00', '#660000', '#783F03', '#7F6000', '#284E13', '#0B343D', '#1B4586', '#063763', '#20124D', '#4C1030',
];
class ColorPickerComponent {
    constructor() {
        this.isOpen = false;
        this.selectedColor = new EventEmitter();
        this.closeOutside = new EventEmitter();
        this.colors = DEFAULT_COLORS;
        this.white = '#FFFFFF';
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
    /**
     * @return {?}
     */
    close() {
        this.isOpen = false;
        this.closeOutside.emit(true);
    }
}
ColorPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-color-picker',
                template: "<div class=\"bcPicker-picker\" (clickOutside)=\"close()\" *ngIf=\"isOpen\" [clickOutsideEnabled]=\"isOpen\">\n  <div class=\"bcPicker-palette\">\n    <div class=\"bcPicker-color\" *ngFor=\"let color of colors\" [style.background-color]=\"color\"\n      (click)=\"select($event, color)\" [style.border]=\"'1px solid ' + (color === white ? '#707070' : color)\"\n      (touchstart)=\"select($event, color)\"></div>\n  </div>\n</div>\n",
                styles: [".bcPicker-picker{border:1px;border-radius:100%}.bcPicker-palette{width:250px;background-color:#fdfdfd;z-index:999;box-shadow:0 0 5px #efefef;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-pack:center;justify-content:center}.bcPicker-palette>.bcPicker-color{width:18px;height:18px;margin:2px;cursor:pointer}"]
            }] }
];
/** @nocollapse */
ColorPickerComponent.ctorParameters = () => [];
ColorPickerComponent.propDecorators = {
    isOpen: [{ type: Input }],
    selectedColor: [{ type: Output }],
    closeOutside: [{ type: Output }]
};
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
class BackFormattingService extends FormattingService {
    constructor() {
        super();
    }
}
BackFormattingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
BackFormattingService.ctorParameters = () => [];
/** @nocollapse */ BackFormattingService.ngInjectableDef = ɵɵdefineInjectable({ factory: function BackFormattingService_Factory() { return new BackFormattingService(); }, token: BackFormattingService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectionService {
    constructor() {
        this.isIE = false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
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
        /** @type {?} */
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            this.selection = selection.getRangeAt(0);
        }
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
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ SelectionService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SelectionService_Factory() { return new SelectionService(); }, token: SelectionService, providedIn: "root" });
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
const $$7 = jquery;
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
        this.isIE = /*@cc_on!@*/ false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
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
            /** @type {?} */
            const remove = this.list === list;
            this.list = list;
            this.toggleList(this.list, remove);
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
        $$7(selection).css("text-align", align);
        this._selectionService.refreshSelection();
    }
    /**
     * @private
     * @param {?} list
     * @param {?} remove
     * @return {?}
     */
    toggleList(list, remove) {
        switch (list) {
            case 'unordered':
                document.execCommand('insertUnorderedList', remove);
                break;
            case 'ordered':
                document.execCommand('insertOrderedList', remove);
                break;
        }
        this._selectionService.refreshSelection();
    }
}
FormattingDirective.decorators = [
    { type: Directive, args: [{
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
    mouseup: [{ type: HostListener, args: ['mouseup',] }]
};
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
class SuccessModalComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SuccessModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-success-modal',
                template: "<gd-modal id=\"gd-success-modal\" [title]=\"'Saved'\">\n<div id=\"gd-modal-success\"><div class=\"check_mark\">\n    <div class=\"sa-icon sa-success animate\">\n        <span class=\"sa-line sa-tip animateSuccessTip\"></span>\n        <span class=\"sa-line sa-long animateSuccessLong\"></span>\n        <div class=\"sa-placeholder\"></div>\n        <div class=\"sa-fix\"></div>\n      </div>\n  </div></div>\n  </gd-modal>\n",
                styles: [".check_mark{margin:47px auto}.sa-icon{width:80px;height:80px;border:4px solid gray;border-radius:50%;padding:0;position:relative;box-sizing:content-box}#gd-modal-success{display:-webkit-box;display:flex;overflow:hidden;width:469px;height:183px}.sa-icon.sa-success{border-color:#4caf50;-webkit-transform:scale(1.18);transform:scale(1.18)}.sa-icon.sa-success::after,.sa-icon.sa-success::before{content:'';position:absolute;width:60px;height:120px;background:#fff}.sa-icon.sa-success::before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.sa-icon.sa-success::after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px}.sa-icon.sa-success .sa-placeholder{width:80px;height:80px;border:4px solid rgba(76,175,80,.5);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.sa-icon.sa-success .sa-fix{width:5px;height:90px;background-color:#fff;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.sa-icon.sa-success.animate::after{-webkit-animation:4.25s ease-in rotatePlaceholder;animation:4.25s ease-in rotatePlaceholder}.animateSuccessTip{-webkit-animation:.75s animateSuccessTip;animation:.75s animateSuccessTip}.animateSuccessLong{-webkit-animation:.75s animateSuccessLong;animation:.75s animateSuccessLong}@-webkit-keyframes animateSuccessLong{0%,65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}100%{width:47px;right:8px;top:38px}}@-webkit-keyframes animateSuccessTip{0%,54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}100%{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%,54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}100%{width:25px;left:14px;top:45px}}@keyframes animateSuccessLong{0%,65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}100%{width:47px;right:8px;top:38px}}.sa-icon.sa-success .sa-line{height:5px;background-color:#4caf50;display:block;border-radius:2px;position:absolute;z-index:2}.sa-icon.sa-success .sa-line.sa-tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.sa-icon.sa-success .sa-line.sa-long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}@-webkit-keyframes rotatePlaceholder{0%,5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}100%,12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%,5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}100%,12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}@media (max-width:1037px){#gd-modal-success{left:50%;top:50%;position:relative;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}}"]
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
        this._observer = new Subject();
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
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EditHtmlService.ctorParameters = () => [];
/** @nocollapse */ EditHtmlService.ngInjectableDef = ɵɵdefineInjectable({ factory: function EditHtmlService_Factory() { return new EditHtmlService(); }, token: EditHtmlService, providedIn: "root" });
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
class EditorDirective {
    /**
     * @param {?} _selectionService
     * @param {?} _htmlService
     */
    constructor(_selectionService, _htmlService) {
        this._selectionService = _selectionService;
        this._htmlService = _htmlService;
        this.isIE = false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
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
    { type: Directive, args: [{
                selector: '[gdEditor]'
            },] }
];
/** @nocollapse */
EditorDirective.ctorParameters = () => [
    { type: SelectionService },
    { type: EditHtmlService }
];
EditorDirective.propDecorators = {
    text: [{ type: Input }],
    onInput: [{ type: HostListener, args: ['keyup', ['$event'],] }],
    onMouseleave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }],
    onBlur: [{ type: HostListener, args: ['blur', ['$event'],] }]
};
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
class LoadingMaskService {
    constructor() {
        this.onLoadingChanged = new EventEmitter();
        this.stopList = [];
        this.requests = [];
        this.stopList.push(Api.SAVE_TEXT);
        this.stopList.push(Api.SAVE_OPTICAL_CODE);
        this.stopList.push(Api.LOAD_DOCUMENT_PAGE);
        this.stopList.push(Api.LOAD_THUMBNAILS);
        this.stopList.push(Api.GET_FILE_STATUS);
    }
    /**
     * @param {?} req
     * @return {?}
     */
    onRequestStart(req) {
        /** @type {?} */
        const stop = this.stopList.find((/**
         * @param {?} x
         * @return {?}
         */
        x => req.url.includes(x)));
        if (!stop) {
            this.requests.push(req);
            this.notify();
        }
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
    { type: Injectable }
];
/** @nocollapse */
LoadingMaskService.ctorParameters = () => [];
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
    { type: Component, args: [{
                selector: 'gd-loading-mask',
                template: "<div class=\"loading-wrapper\" *ngIf=\"loadingMask\">\n    <div class=\"loading-message\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;Loading... Please wait.\n    </div>\n</div>\n",
                styles: [".loading-wrapper{background:rgba(0,0,0,.5);width:100%;height:100%;font-size:14px;color:#fff;position:fixed;top:0;left:0;z-index:99999}.loading-message{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]
            }] }
];
/** @nocollapse */
LoadingMaskComponent.ctorParameters = () => [
    { type: LoadingMaskService }
];
LoadingMaskComponent.propDecorators = {
    loadingMask: [{ type: Input }]
};
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
        return next.handle(req).pipe(finalize(callback));
    }
}
LoadingMaskInterceptorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LoadingMaskInterceptorService.ctorParameters = () => [
    { type: LoadingMaskService }
];
/** @nocollapse */ LoadingMaskInterceptorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LoadingMaskInterceptorService_Factory() { return new LoadingMaskInterceptorService(ɵɵinject(LoadingMaskService)); }, token: LoadingMaskInterceptorService, providedIn: "root" });
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
const horizontalAlignment = {
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
const verticalAlignment = {
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
class DropDownToggleComponent {
    /**
     * @param {?} dropdown
     */
    constructor(dropdown) {
        this.dropdown = dropdown;
        this.click = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.dropdown.toggle(event));
    }
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
DropDownToggleComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => DropDownComponent)),] }] }
];
DropDownToggleComponent.propDecorators = {
    click: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    DropDownToggleComponent.prototype.click;
    /** @type {?} */
    DropDownToggleComponent.prototype.dropdown;
}
/**
 *  DropDownItemsComponent
 */
class DropDownItemsComponent {
    /**
     * @param {?} dropdown
     */
    constructor(dropdown) {
        this.dropdown = dropdown;
    }
    /**
     * @return {?}
     */
    get horizontalAlign() {
        return horizontalAlignment[this.dropdown.getPlacement().h].right;
    }
    /**
     * @return {?}
     */
    get verticalAlign() {
        return verticalAlignment[this.dropdown.getPlacement().v].top;
    }
    /**
     * @return {?}
     */
    get isOpen() {
        return this.dropdown.open;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickOutside(event) {
        this.dropdown.close();
    }
}
DropDownItemsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-drop-down-items',
                template: '<div class="drop-down-items" (clickOutside)="onClickOutside($event)" [clickOutsideEnabled]="isOpen" [style.right]="horizontalAlign" [style.top]="verticalAlign"><ng-content></ng-content></div>',
                encapsulation: ViewEncapsulation.None,
                styles: [".drop-down{position:relative}.show .drop-down-items{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
            }] }
];
/** @nocollapse */
DropDownItemsComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => DropDownComponent)),] }] }
];
if (false) {
    /** @type {?} */
    DropDownItemsComponent.prototype.dropdown;
}
/**
 *  DropDownItemComponent
 */
class DropDownItemComponent {
    /**
     * @param {?} dropdown
     */
    constructor(dropdown) {
        this.dropdown = dropdown;
        this.class = 'drop-down-item';
        this.selected = new EventEmitter();
        this.click = (/**
         * @return {?}
         */
        () => this.selectEntry());
    }
    /**
     * @return {?}
     */
    selectEntry() {
        this.selected.next();
        this.dropdown.close();
    }
}
DropDownItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-drop-down-item',
                template: '<div class="drop-down-item"><ng-content></ng-content></div>',
                styles: [".drop-down{position:relative}.show .drop-down-items{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
            }] }
];
/** @nocollapse */
DropDownItemComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => DropDownComponent)),] }] }
];
DropDownItemComponent.propDecorators = {
    class: [{ type: HostBinding, args: ['class',] }],
    selected: [{ type: Output }],
    click: [{ type: HostListener, args: ['click',] }]
};
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
class DropDownComponent {
    constructor() {
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
    close() {
        this.open = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggle(event) {
        event.stopPropagation();
        this.open = !this.open;
        document.body.click();
    }
    /**
     * @return {?}
     */
    getPlacement() {
        return this.placement;
    }
}
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
    { type: Component, args: [{
                selector: 'gd-left-side-bar',
                template: "<div class=\"left-panel\">\n  <div class=\"gd-left-bar-fade\" *ngIf=\"showSpinner\">\n    <div class=\"gd-left-bar-spinner\"><i class=\"fa fa-circle-o-notch fa-spin\"></i> &nbsp;Loading...\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                styles: [".left-panel{border-radius:0;float:left}.gd-left-bar-fade{margin:auto;overflow:hidden;-webkit-overflow-scrolling:touch;-webkit-transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;position:fixed;z-index:1000}@media (max-width:1037px){.gd-left-bar-fade{top:100px;right:0}.gd-left-bar-spinner{top:20%}}"]
            }] }
];
/** @nocollapse */
LeftSideBarComponent.ctorParameters = () => [];
LeftSideBarComponent.propDecorators = {
    showSpinner: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LeftSideBarComponent.prototype.showSpinner;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TooltipDirective {
    constructor() {
        this.showToolTip = new EventEmitter();
    }
    /**
     * @return {?}
     */
    onHovering() {
        this.showToolTip.emit(true);
    }
    /**
     * @return {?}
     */
    onUnhovering() {
        this.showToolTip.emit(false);
    }
}
TooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gdTooltip]'
            },] }
];
/** @nocollapse */
TooltipDirective.ctorParameters = () => [];
TooltipDirective.propDecorators = {
    showToolTip: [{ type: Output }],
    onHovering: [{ type: HostListener, args: ['mouseenter',] }],
    onUnhovering: [{ type: HostListener, args: ['mouseleave',] }]
};
if (false) {
    /** @type {?} */
    TooltipDirective.prototype.showToolTip;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddDynamicComponentService {
    /**
     * @param {?} _factoryResolver
     * @param {?} _appRef
     */
    constructor(_factoryResolver, _appRef) {
        this._factoryResolver = _factoryResolver;
        this._appRef = _appRef;
    }
    /**
     * @param {?} viewContainerRef
     * @param {?} component
     * @return {?}
     */
    addDynamicComponent(viewContainerRef, component) {
        /** @type {?} */
        const factory = this._factoryResolver.resolveComponentFactory(component);
        /** @type {?} */
        const componentRef = viewContainerRef.createComponent(factory);
        componentRef.onDestroy((/**
         * @return {?}
         */
        () => {
            this._appRef.detachView(componentRef.hostView);
        }));
        return componentRef;
    }
}
AddDynamicComponentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AddDynamicComponentService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef }
];
/** @nocollapse */ AddDynamicComponentService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AddDynamicComponentService_Factory() { return new AddDynamicComponentService(ɵɵinject(ComponentFactoryResolver), ɵɵinject(ApplicationRef)); }, token: AddDynamicComponentService, providedIn: "root" });
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
class HostingDynamicComponentService {
    constructor() {
        this.hosts = [];
    }
    /**
     * @param {?} host
     * @return {?}
     */
    add(host) {
        this.hosts = this.hosts.filter((/**
         * @param {?} h
         * @return {?}
         */
        function (h) {
            return h.ident !== host.ident;
        }));
        this.hosts.push(host);
    }
    /**
     * @param {?} host
     * @return {?}
     */
    remove(host) {
        this.hosts = this.hosts.filter((/**
         * @param {?} h
         * @return {?}
         */
        function (h) {
            return h.ident !== host.ident;
        }));
    }
    /**
     * @param {?} ident
     * @return {?}
     */
    find(ident) {
        return this.hosts.find((/**
         * @param {?} h
         * @return {?}
         */
        function (h) {
            return h.ident === ident;
        }));
    }
}
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
class HostDynamicDirective {
    /**
     * @param {?} viewContainerRef
     * @param {?} _hostingService
     */
    constructor(viewContainerRef, _hostingService) {
        this.viewContainerRef = viewContainerRef;
        this._hostingService = _hostingService;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._hostingService.add(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._hostingService.remove(this);
        this.viewContainerRef.clear();
    }
}
HostDynamicDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gdHostDynamic]'
            },] }
];
/** @nocollapse */
HostDynamicDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: HostingDynamicComponentService }
];
HostDynamicDirective.propDecorators = {
    ident: [{ type: Input }]
};
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
const $$8 = jquery;
class ResizingComponent {
    constructor() {
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
    ngAfterViewInit() {
        /** @type {?} */
        const elSE = $$8(this.getElementId(this.SE));
        /** @type {?} */
        const elNW = $$8(this.getElementId(this.NW));
        if (this.init && elSE && elNW && elSE.offset() && elNW.offset()) {
            /** @type {?} */
            let width = elSE.offset().left - elNW.offset().left;
            /** @type {?} */
            let height = elSE.offset().top - elNW.offset().top;
            while (width >= this.pageWidth || height >= this.pageHeight) {
                width = width / 2;
                height = height / 2;
            }
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.offsetX.emit(width);
                this.offsetY.emit(height);
            }), 100);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    catchUp($event) {
        // ff
        $event.preventDefault();
        if ($event.dataTransfer) { // ff
            $event.dataTransfer.setData('text', 'foo');
        }
        this.grab = true;
        this.oldPosition = Utils.getMousePosition($event);
    }
    /**
     * @param {?} $event
     * @param {?} el
     * @return {?}
     */
    resize($event, el) {
        if (!this.grab) {
            return;
        }
        /** @type {?} */
        const position = Utils.getMousePosition($event);
        if (position.x === 0 && position.y === 0) {
            return;
        }
        /** @type {?} */
        const notSW = this.NE === el || this.NW === el;
        /** @type {?} */
        const notNE = this.SW === el || this.NW === el;
        this.setOffsets(position, notNE, notSW);
        if (notSW) {
            this.offsetTop.emit(position.y - this.oldPosition.y);
        }
        if (notNE) {
            this.offsetLeft.emit(position.x - this.oldPosition.x);
        }
        this.oldPosition = position;
    }
    /**
     * @private
     * @param {?} position
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    setOffsets(position, x, y) {
        /** @type {?} */
        const offsetX = x ? this.oldPosition.x - position.x : position.x - this.oldPosition.x;
        /** @type {?} */
        const offsetY = y ? this.oldPosition.y - position.y : position.y - this.oldPosition.y;
        this.offsetX.emit(offsetX);
        this.offsetY.emit(offsetY);
    }
    /**
     * @param {?} $event
     * @param {?} el
     * @return {?}
     */
    end($event, el) {
        // ff
        this.resize($event, el);
        this.release.emit(true);
        this.grab = false;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    start($event) {
        this.drop($event);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    drop($event) {
        $event.stopPropagation();
        $event.preventDefault();
    }
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    getElementId(el) {
        return "#" + el + "-" + this.id;
    }
}
ResizingComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-resizing',
                template: "<div class=\"ui-resizable-handle se-resize\" id=\"se-{{id}}\" *ngIf=\"se\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, SE)\" (dragend)=\"end($event, SE)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\n      (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, SE)\" (panend)=\"end($event, SE)\"></div>\n\n<div class=\"ui-resizable-handle ne-resize\" id=\"ne-{{id}}\" *ngIf=\"ne\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, NE)\" (dragend)=\"end($event, NE)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\n     (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, NE)\" (panend)=\"end($event, NE)\"></div>\n\n<div class=\"ui-resizable-handle sw-resize\" id=\"sw-{{id}}\" *ngIf=\"sw\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, SW)\" (dragend)=\"end($event, SW)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\n     (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, SW)\" (panend)=\"end($event, SW)\"></div>\n\n<div class=\"ui-resizable-handle nw-resize\" id=\"nw-{{id}}\" *ngIf=\"nw\" [draggable]=\"true\" (dragover)=\"start($event)\"\n     (drag)=\"resize($event, NW)\" (dragend)=\"end($event, NW)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\n     (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, NW)\" (panend)=\"end($event, NW)\"></div>\n",
                styles: [".ui-resizable-handle{background-color:#679ffa;width:8px;height:8px;border-radius:100%;position:absolute;font-size:.1px;display:block}.se-resize{bottom:-5px;right:-5px;cursor:se-resize}.ne-resize{top:-5px;right:-5px;cursor:ne-resize}.sw-resize{bottom:-5px;left:-5px;cursor:sw-resize}.nw-resize{top:-5px;left:-5px;cursor:nw-resize}"]
            }] }
];
/** @nocollapse */
ResizingComponent.ctorParameters = () => [];
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
class TopTabActivatorService extends TabActivatorService {
    constructor() {
        super();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TopTabComponent {
    /**
     * @param {?} _tabActivatorService
     * @param {?} _modalService
     * @param {?} _excMessageService
     */
    constructor(_tabActivatorService, _modalService, _excMessageService) {
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
        (tabId) => {
            this.activation(tabId);
            if (tabId === null) {
                this.activeTab.emit("");
            }
        }));
    }
    /**
     * @private
     * @param {?} tabId
     * @return {?}
     */
    activation(tabId) {
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    toggleTab() {
        if (this.disabled) {
            this._modalService.open(CommonModals.ErrorMessage);
            this._excMessageService.changeMessage("Please open document first");
            return;
        }
        this._tabActivatorService.changeActiveTab(this.id);
    }
}
TopTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-top-tab',
                template: "<div class=\"gd-tab\" (mousedown)=\"toggleTab()\" gdTooltip (showToolTip)=\"showToolTip = $event\"\n     [ngClass]=\"(active) ? ((disabled) ? 'active disabled' : 'active') : ((disabled) ? 'disabled' : '')\">\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" class=\"gd-tab-tooltip\"\n              *ngIf=\"tooltip\" [position]=\"elementPosition\"></gd-tooltip>\n</div>\n",
                styles: [".gd-tab{font-size:14px;color:#3e4e5a;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;align-content:center;-webkit-box-pack:center;justify-content:center;min-width:36px;height:36px;text-align:center;position:relative;white-space:nowrap;padding:0!important;margin:0 10px}.gd-tab .gd-tab-tooltip{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:0!important}.gd-tab.active{background-color:#acacac;color:#fff!important;font-weight:700}.gd-tab.disabled{cursor:not-allowed;opacity:.4}.gd-tab ::ng-deep .tooltip{font-size:12px;margin:20px -57px}.gd-tab .title{margin:auto 23px}@media (max-width:1037px){.gd-tab{font-size:20px}}"]
            }] }
];
/** @nocollapse */
TopTabComponent.ctorParameters = () => [
    { type: TopTabActivatorService },
    { type: ModalService },
    { type: ExceptionMessageService }
];
TopTabComponent.propDecorators = {
    id: [{ type: Input }],
    icon: [{ type: Input }],
    disabled: [{ type: Input }],
    tooltip: [{ type: Input }],
    activeTab: [{ type: Output }],
    elementPosition: [{ type: Input }]
};
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
const $$9 = jquery;
class TextMenuComponent {
    /**
     * @param {?} _onCloseService
     * @param {?} _zoomService
     * @param {?} _windowService
     * @param {?} _elementRef
     * @param {?} renderer
     */
    constructor(_onCloseService, _zoomService, _windowService, _elementRef, renderer) {
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
        () => {
            this.colorPickerShow = false;
        }));
        this.isMobile = _windowService.isMobile();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.isMobile = _windowService.isMobile();
        }));
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            if (this.isMobile) {
                this.changePosition(val);
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    changePosition(val) {
        /** @type {?} */
        const top = (window.innerHeight - 24 - this._elementRef.nativeElement.parentElement.getBoundingClientRect().top - this._elementRef.nativeElement.parentElement.getBoundingClientRect().height);
        /** @type {?} */
        const left = this._elementRef.nativeElement.parentElement.getBoundingClientRect().left;
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-text-menu'), 'width', window.innerWidth + 'px');
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-text-menu'), 'top', top + 'px');
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-text-menu'), 'left', -left + 'px');
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectFontSize($event) {
        $$9(".gd-wrapper").off("keyup");
        this.outFontSize.emit($event.value);
        $$9(".gd-wrapper").on("keyup", (/**
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
        event.preventDefault();
        event.stopPropagation();
        this.outFont.emit($event.value);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleColorPicker($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.colorPickerShow = !this.colorPickerShow;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectColor($event) {
        this.colorPickerShow = false;
        this.outColor.emit($event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleBold(event) {
        event.preventDefault();
        event.stopPropagation();
        this.outBold.emit(!this.bold);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleItalic(event) {
        event.preventDefault();
        event.stopPropagation();
        this.outItalic.emit(!this.italic);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleUnderline(event) {
        event.preventDefault();
        event.stopPropagation();
        this.outUnderline.emit(!this.underline);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    closePicker($event) {
        this.colorPickerShow = !$event;
    }
}
TextMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-text-menu',
                template: "<div class=\"gd-text-menu\">\n  <gd-select class=\"format-select first-component\" [options]=\"fontOptions\"\n             (selected)=\"selectFont($event)\"\n             [showSelected]=\"{name : font, value : font}\"></gd-select>\n  <gd-select class=\"format-select\" [options]=\"fontSizeOptions\"\n             (selected)=\"selectFontSize($event)\"\n             [showSelected]=\"{name : fontSize + 'px', value : fontSize}\"></gd-select>\n  <gd-button [icon]=\"'bold'\" [tooltip]=\"showTooltips ? 'Bold' : null\" *ngIf=\"decoration\"\n             (click)=\"toggleBold($event)\" (touchstart)=\"toggleBold($event)\" [toggle]=\"bold\"></gd-button>\n  <gd-button [icon]=\"'italic'\" [tooltip]=\"showTooltips ? 'Italic' : null\" *ngIf=\"decoration\"\n             (click)=\"toggleItalic($event)\" (touchstart)=\"toggleItalic($event)\" [toggle]=\"italic\"></gd-button>\n  <gd-button [icon]=\"'underline'\" [tooltip]=\"showTooltips ? 'Underline' : null\" *ngIf=\"decoration\"\n             (click)=\"toggleUnderline($event)\" (touchstart)=\"toggleUnderline($event)\" [toggle]=\"underline\"></gd-button>\n  <gd-button name=\"button\" class=\"color-for-text\" [icon]=\"'font'\" [tooltip]=\"showTooltips ? 'Color' : null\"\n             (click)=\"toggleColorPicker($event)\" (touchstart)=\"toggleColorPicker($event)\">\n    <div class=\"bg-color-pic\" [style.background-color]=\"color\"></div>\n  </gd-button>\n  <gd-color-picker [isOpen]=\"colorPickerShow\" (closeOutside)=\"closePicker($event)\"\n                   [className]=\"'palette'\"\n                   (selectedColor)=\"selectColor($event)\"></gd-color-picker>\n  <ng-content></ng-content>\n</div>\n",
                styles: ["::ng-deep .active{background-color:#e7e7e7}.gd-text-menu{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.gd-text-menu .format-select{height:37px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;max-width:80px;margin:0 3px}.gd-text-menu .first-component{margin-left:8px}.gd-text-menu ::ng-deep .dropdown-menu{top:40px!important;height:120px;overflow-y:auto}.gd-text-menu ::ng-deep .icon-button{margin:0!important}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}.palette{position:relative;top:40px;left:-55px;z-index:100}@media (max-width:1037px){.gd-text-menu{position:fixed;left:0;right:0;width:inherit;height:60px;-webkit-box-align:center;align-items:center;padding:0;margin:0;background-color:#fff;border-top:2px solid #707070;-webkit-transform-origin:top left;transform-origin:top left;z-index:1000}.gd-text-menu ::ng-deep .selected-value{white-space:normal!important;word-wrap:break-word}.gd-text-menu .icon{color:#fff;margin:0 9px}.gd-text-menu ::ng-deep .bcPicker-palette{left:-200px;top:-185px}.gd-text-menu .palette{top:unset;bottom:40px;left:unset;right:5px}.gd-text-menu ::ng-deep .dropdown-menu{bottom:40px;top:unset!important}.gd-text-menu ::ng-deep .first-component ::ng-deep .dropdown-menu{left:0}.gd-text-menu ::ng-deep .button{margin:3px!important}}"]
            }] }
];
/** @nocollapse */
TextMenuComponent.ctorParameters = () => [
    { type: OnCloseService },
    { type: ZoomService },
    { type: WindowService },
    { type: ElementRef },
    { type: Renderer2 }
];
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
class MenuType {
}
MenuType.FOR_SIGNATURE = "signature";
MenuType.FOR_ANNOTATION = "annotation";
if (false) {
    /** @type {?} */
    MenuType.FOR_SIGNATURE;
    /** @type {?} */
    MenuType.FOR_ANNOTATION;
}
class ContextMenuComponent {
    /**
     * @param {?} _windowService
     * @param {?} _zoomService
     * @param {?} _elementRef
     * @param {?} renderer
     */
    constructor(_windowService, _zoomService, _elementRef, renderer) {
        this._windowService = _windowService;
        this._zoomService = _zoomService;
        this._elementRef = _elementRef;
        this.renderer = renderer;
        this.formatting = Formatting.default();
        this.lock = false;
        this.translation = 0;
        this.changeFormatting = new EventEmitter();
        this.removeItem = new EventEmitter();
        this.copySign = new EventEmitter();
        this.lockOut = new EventEmitter();
        this.comment = new EventEmitter();
        this.isMobile = _windowService.isMobile();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.isMobile = _windowService.isMobile();
        }));
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            if (this.isMobile) {
                this.changeScale(val);
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    changeScale(val) {
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-context-menu'), 'transform', 'scale(' + 1 / (val / 100) + ')');
    }
    /**
     * @return {?}
     */
    saveChanges() {
        this.changeFormatting.emit(this.formatting);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectFontSize($event) {
        this.formatting.fontSize = $event;
        this.saveChanges();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectFont($event) {
        this.formatting.font = $event;
        this.saveChanges();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectColor($event) {
        this.formatting.color = $event;
        this.saveChanges();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleBold($event) {
        this.formatting.bold = $event;
        this.saveChanges();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleItalic($event) {
        this.formatting.italic = $event;
        this.saveChanges();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleUnderline($event) {
        this.formatting.underline = $event;
        this.saveChanges();
    }
    /**
     * @return {?}
     */
    deleteItem() {
        this.removeItem.emit(true);
    }
    /**
     * @return {?}
     */
    toggleLock() {
        this.lock = !this.lock;
        this.lockOut.emit(this.lock);
    }
    /**
     * @return {?}
     */
    onCopySign() {
        this.copySign.emit(true);
    }
    /**
     * @return {?}
     */
    isSignature() {
        return this.menuType === MenuType.FOR_SIGNATURE;
    }
    /**
     * @return {?}
     */
    isAnnotation() {
        return this.menuType === MenuType.FOR_ANNOTATION;
    }
    /**
     * @return {?}
     */
    addComment() {
        this.comment.emit(true);
    }
}
ContextMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-context-menu',
                template: "<div class=\"gd-context-menu\" [ngStyle]=\"isMobile ? null : {transform: 'translateX(' + translation + 'px)'}\"\n     [ngClass]=\"topPosition > 10 ? 'gd-context-menu-top' : 'gd-context-menu-bottom'\">\n  <gd-button [icon]=\"'arrows-alt'\" [class]=\"'ng-fa-icon icon arrows'\" [iconSize]=\"'sm'\"></gd-button>\n  <gd-text-menu *ngIf=\"textMenu\" [blur]=\"isMobile && isSignature()\" [color]=\"formatting.color\" [bold]=\"formatting.bold\"\n                [font]=\"formatting.font\" [fontSize]=\"formatting.fontSize\" [italic]=\"formatting.italic\"\n                [underline]=\"formatting.underline\" (outBold)=\"toggleBold($event)\"\n                (outUnderline)=\"toggleUnderline($event)\" (outItalic)=\"toggleItalic($event)\"\n                (outColor)=\"selectColor($event)\" (outFont)=\"selectFont($event)\"\n                (outFontSize)=\"selectFontSize($event)\" [decoration]=\"isSignature()\"></gd-text-menu>\n  <gd-button *ngIf=\"isSignature()\" [icon]=\"lock ? 'lock' : 'unlock'\" [class]=\"'ng-fa-icon icon'\"\n             (click)=\"toggleLock()\" (touchstart)=\"toggleLock()\"></gd-button>\n  <gd-button *ngIf=\"isSignature()\" [icon]=\"'copy'\" [class]=\"'ng-fa-icon icon'\" (click)=\"onCopySign()\"\n             (touchstart)=\"onCopySign()\"></gd-button>\n  <gd-button [icon]=\"'trash'\" [class]=\"'ng-fa-icon icon'\" (click)=\"deleteItem()\"\n             (touchstart)=\"deleteItem()\"></gd-button>\n  <gd-button *ngIf=\"isAnnotation()\" [icon]=\"'comment'\" [class]=\"'ng-fa-icon icon'\" (click)=\"addComment()\"\n             (touchstart)=\"addComment()\"></gd-button>\n</div>\n",
                styles: [".gd-context-menu-top{top:-44px}.gd-context-menu-bottom{bottom:-40px}.gd-context-menu{box-shadow:rgba(0,0,0,.52) 0 0 5px;background-color:#fff;position:absolute;left:0;right:0;margin:auto;cursor:default;width:max-content;width:-moz-max-content;width:-webkit-max-content;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;z-index:999}.gd-context-menu .arrows{cursor:move}.gd-context-menu ::ng-deep .active{background-color:#e7e7e7}.gd-context-menu ::ng-deep .icon-button{margin:0!important}@media (max-width:1037px){.gd-context-menu-top{top:-42px;-webkit-transform-origin:bottom center;transform-origin:bottom center}}"]
            }] }
];
/** @nocollapse */
ContextMenuComponent.ctorParameters = () => [
    { type: WindowService },
    { type: ZoomService },
    { type: ElementRef },
    { type: Renderer2 }
];
ContextMenuComponent.propDecorators = {
    formatting: [{ type: Input }],
    textMenu: [{ type: Input }],
    topPosition: [{ type: Input }],
    lock: [{ type: Input }],
    translation: [{ type: Input }],
    menuType: [{ type: Input }],
    changeFormatting: [{ type: Output }],
    removeItem: [{ type: Output }],
    copySign: [{ type: Output }],
    lockOut: [{ type: Output }],
    comment: [{ type: Output }]
};
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
/** @type {?} */
const providers = [ConfigService,
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
class CommonComponentsModule {
    constructor() {
        library.add(fas, far);
    }
}
CommonComponentsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FontAwesomeModule, ClickOutsideModule],
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
                    ContextMenuComponent
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
                    ContextMenuComponent
                ],
                providers: providers
            },] }
];
/** @nocollapse */
CommonComponentsModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AddDynamicComponentService, Api, BackFormattingService, BrowseFilesModalComponent, ButtonComponent, ColorPickerComponent, CommonComponentsModule, CommonModals, ConfigService, ContextMenuComponent, DisabledCursorDirective, DndDirective, DocumentComponent, DropDownComponent, DropDownItemComponent, DropDownItemsComponent, DropDownToggleComponent, EditHtmlService, EditorDirective, ErrorInterceptorService, ErrorModalComponent, ExceptionMessageService, FileCredentials, FileDescription, FileModel, FileService, FileUtil, Formatting, FormattingDirective, FormattingService, HighlightSearchPipe, HostDynamicDirective, HostingDynamicComponentService, HttpError, InitStateComponent, LeftSideBarComponent, LoadingMaskComponent, LoadingMaskInterceptorService, LoadingMaskService, LogoComponent, MenuType, ModalComponent, ModalService, MouseWheelDirective, NavigateService, OnCloseService, PageComponent, PageModel, PagePreloadService, PasswordRequiredComponent, PasswordService, RenderPrintDirective, RenderPrintService, RotatedPage, RotationDirective, SanitizeHtmlPipe, SanitizeResourceHtmlPipe, SanitizeStylePipe, SaveFile, ScrollableDirective, SearchComponent, SearchService, SearchableDirective, SelectComponent, SelectionService, SidePanelComponent, SuccessModalComponent, TabActivatorService, TabComponent, TabbedToolbarsComponent, TextMenuComponent, TooltipComponent, TopTabActivatorService, TopToolbarComponent, UploadFileZoneComponent, UploadFilesService, Utils, ViewportService, WindowService, ZoomDirective, ZoomService, TabsComponent as ɵa, TooltipDirective as ɵb, ResizingComponent as ɵc, TopTabComponent as ɵd };
//# sourceMappingURL=groupdocs.examples.angular-common-components.js.map
