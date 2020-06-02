(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('@fortawesome/angular-fontawesome'), require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/free-regular-svg-icons'), require('@angular/common/http'), require('jquery'), require('hammerjs'), require('@angular/platform-browser'), require('ng-click-outside')) :
    typeof define === 'function' && define.amd ? define('@groupdocs.examples.angular/common-components', ['exports', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators', '@fortawesome/angular-fontawesome', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-regular-svg-icons', '@angular/common/http', 'jquery', 'hammerjs', '@angular/platform-browser', 'ng-click-outside'], factory) :
    (global = global || self, factory((global.groupdocs = global.groupdocs || {}, global.groupdocs.examples = global.groupdocs.examples || {}, global.groupdocs.examples.angular = global.groupdocs.examples.angular || {}, global.groupdocs.examples.angular['common-components'] = {}), global.ng.core, global.ng.common, global.rxjs, global.rxjs.operators, global.angularFontawesome, global.fontawesomeSvgCore, global.freeSolidSvgIcons, global.freeRegularSvgIcons, global.ng.common.http, global.jquery, global.Hammer, global.ng.platformBrowser, global.ngClickOutside));
}(this, function (exports, core, common, rxjs, operators, angularFontawesome, fontawesomeSvgCore, freeSolidSvgIcons, freeRegularSvgIcons, http, jquery, Hammer, platformBrowser, ngClickOutside) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TopToolbarComponent = /** @class */ (function () {
        function TopToolbarComponent() {
        }
        TopToolbarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-top-toolbar',
                        template: "<div class=\"top-toolbar\">\r\n  <div id=\"tools\" class=\"tools\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
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
            this.closable = true;
            this.saveable = true;
            this.hideSidePanel = new core.EventEmitter();
            this.saveInSidePanel = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'gd-side-panel',
                        template: "<div [ngClass]=\"{'only-title': onlyTitle}\" class=\"gd-side-panel-wrapper\">\r\n  <div class=\"gd-side-panel-header\" (click)=\"toggleTitleMode()\">\r\n    <fa-icon class=\"fas fa-info-circle icon\" [icon]=\"['fas',icon]\"></fa-icon>\r\n    <div class=\"title\">{{title}}</div>\r\n    <div class=\"save\" *ngIf=\"saveable\">\r\n      <gd-button class=\"fas fa-times\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"saveBySidePanel()\"></gd-button>\r\n    </div>\r\n    <div class=\"close\" *ngIf=\"closable\">\r\n      <gd-button class=\"fas fa-times\" [icon]=\"'times'\" [tooltip]=\"'Close'\" (click)=\"closeSidePanel()\"></gd-button>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!onlyTitle\" class=\"gd-side-panel-body\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
                        styles: [".gd-side-panel-wrapper{margin-right:0;width:334px;z-index:999;background-color:#fff;transition:margin-right .2s;display:flex;flex-flow:column;height:100vh}.gd-side-panel-wrapper .gd-side-panel-header{height:60px;background-color:#222e35;display:flex;flex-direction:row;flex-wrap:nowrap}.gd-side-panel-wrapper .gd-side-panel-header .icon{font-size:24px;color:#959da5;margin:18px;line-height:24px}.gd-side-panel-wrapper .gd-side-panel-header .title{font-size:13px;font-weight:700;color:#edf0f2;opacity:.57;margin-top:20px;width:100%}.gd-side-panel-wrapper .gd-side-panel-header .close,.gd-side-panel-wrapper .gd-side-panel-header .save{display:flex;align-items:center}.gd-side-panel-wrapper .gd-side-panel-header ::ng-deep gd-button .text{padding:0}.gd-side-panel-wrapper .gd-side-panel-body{display:flex;flex-flow:column;overflow:visible;overflow-y:auto;overflow-x:hidden;height:100%}@media (max-width:1037px){.gd-side-panel-wrapper{width:100%;position:absolute;left:0;right:0;top:0;bottom:0}.gd-side-panel-wrapper.only-title{height:60px!important}}"]
                    }] }
        ];
        /** @nocollapse */
        SidePanelComponent.ctorParameters = function () { return []; };
        SidePanelComponent.propDecorators = {
            title: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            closable: [{ type: core.Input }],
            saveable: [{ type: core.Input }],
            hideSidePanel: [{ type: core.Output }],
            saveInSidePanel: [{ type: core.Output }]
        };
        return SidePanelComponent;
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
            this.resizeSubject = new rxjs.Subject();
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this._resize$ = rxjs.fromEvent(window, 'resize')
                .pipe(operators.debounceTime(200), operators.distinctUntilChanged(), operators.startWith({ target: { innerWidth: window.innerWidth, innerHeight: window.innerHeight } }), operators.tap((/**
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
            { type: core.Component, args: [{
                        selector: 'gd-button',
                        template: "<div class=\"button {{intent}} {{iconButtonClass()}}\" [ngClass]=\"toggle ? className + ' gd-edit active' : className\"\r\n     gdTooltip (showToolTip)=\"showToolTip = $event\" (mouseenter)=\"onHovering()\"\r\n     (mouseleave)=\"onUnhovering()\" gdDisabledCursor [dis]=\"disabled\">\r\n  <fa-icon *ngIf=\"icon\" [icon]=\"[iconRegular ? 'far' : 'fas',icon]\" [size]=\"iconSize\"></fa-icon>\r\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\" [position]=\"elementPosition\" class=\"button-tooltip\"></gd-tooltip>\r\n  <div class=\"text\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
                        styles: [".icon-button{padding:0!important;margin:0 7px}.button{padding:0 10px;font-size:14px;color:#959da5;cursor:pointer;display:flex;flex-direction:column;align-items:center;align-content:center;justify-content:center;min-width:37px;height:37px;text-align:center;position:relative;white-space:nowrap}.button.inactive{cursor:not-allowed;opacity:.4}.button.active *{color:#ccd0d4}.button.primary{background-color:#3e4e5a;color:#fff}.button.primary.active{color:#fff;background-color:#688296}.button.brand{background-color:#25c2d4;color:#fff}.button.brand.active{color:#fff;background-color:#688296}.button .text{font-size:13px;padding-left:10px}.button .button-tooltip{display:flex;flex-direction:column}@media (max-width:1037px){.button{font-size:22px}.arrow-button{margin:5px}}"]
                    }] }
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () { return [
            { type: WindowService }
        ]; };
        ButtonComponent.propDecorators = {
            iconOnly: [{ type: core.Input }],
            intent: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            iconClass: [{ type: core.Input }],
            tooltip: [{ type: core.Input }],
            className: [{ type: core.Input }],
            toggle: [{ type: core.Input }],
            iconSize: [{ type: core.Input }],
            iconRegular: [{ type: core.Input }],
            elementPosition: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'gd-logo',
                        template: "<div id=\"gd-header-logo\" class=\"logo\">\r\n  <span class=\"text\" [innerHTML]=\"logo\"></span>\r\n  <fa-icon [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n</div>\r\n\r\n",
                        styles: [".logo{background-color:#25c2d4;height:60px;display:flex;align-items:center;justify-content:center}.text{color:#fff;font-size:15px;text-transform:uppercase;margin:0 14px}.icon{display:none;font-size:32px;color:rgba(255,255,255,.5);margin:14px}@media (max-width:1037px){.logo{width:60px;height:60px}.logo .text{display:none}.logo .icon{display:block}}"]
                    }] }
        ];
        /** @nocollapse */
        LogoComponent.ctorParameters = function () { return []; };
        LogoComponent.propDecorators = {
            logo: [{ type: core.Input }],
            icon: [{ type: core.Input }]
        };
        return LogoComponent;
    }());

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
            { type: core.Component, args: [{
                        selector: 'gd-tooltip',
                        template: "<span [class]=\"getClass()\" [ngClass]=\"visibility\" [innerHTML]=\"text\"></span>\r\n",
                        styles: [".tooltip{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;background-color:#000;color:#fff;text-align:center;border-radius:0;padding:5px;z-index:1;font-size:10px;height:11px;line-height:11px;-ms-grid-row-align:center;align-self:center;margin:0!important}.first-element{margin-left:10px!important}.last-element{margin-left:-10px!important}.tooltip.hidden{visibility:hidden}.tooltip.shown{visibility:visible}.shown:after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border:5px solid transparent;border-bottom-color:#000}"]
                    }] }
        ];
        /** @nocollapse */
        TooltipComponent.ctorParameters = function () { return []; };
        TooltipComponent.propDecorators = {
            text: [{ type: core.Input }],
            position: [{ type: core.Input }],
            show: [{ type: core.Input }]
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
        Api.ANNOTATION_APP = '/annotation';
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
        Api.ANNOTATE = '/annotate';
        Api.httpOptionsJson = {
            headers: new http.HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        Api.httpOptionsJsonResponseTypeBlob = {
            headers: new http.HttpHeaders({
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
        ConfigService.decorators = [
            { type: core.Injectable }
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
        CommonModals.InformationMessage = "gd-information-message";
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
            this.visible = new core.EventEmitter();
            this.cancel = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'gd-modal',
                        template: "<div class=\"gd-modal fade\" id=\"modalDialog\" (click)=\"onClose($event);\" *ngIf=\"visibility\">\r\n</div>\r\n<div class=\"gd-modal-dialog\" *ngIf=\"visibility\">\r\n  <div class=\"gd-modal-content\" id=\"gd-modal-content\">\r\n\r\n    <div class=\"gd-modal-header\">\r\n      <div class=\"gd-modal-close\" (click)=\"cancelClose();\"><span>&times;</span></div>\r\n      <h4 class=\"gd-modal-title\">{{title}}</h4>\r\n    </div>\r\n\r\n    <div class=\"gd-modal-body\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n\r\n    <div class=\"gd-modal-footer\">\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.gd-modal{overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0;background-color:rgba(0,0,0,.5)}.gd-modal-dialog{box-shadow:#0005 0 0 10px;position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:1051}.gd-modal-dialog ::ng-deep .button{flex-direction:unset!important}.gd-modal-content{background-color:#fff;height:100%;display:flex;flex-direction:column}.gd-modal-header{height:60px;padding:0 12px 0 24px;background-color:#3e4e5a}.gd-modal-close{position:absolute;right:12px;top:12px;cursor:pointer;color:#fff;width:37px;height:37px;text-align:center}.gd-modal-close span{font-size:18px;font-weight:900;height:19px;width:10px;line-height:36px}.gd-modal-title{font-size:16px;font-weight:400;padding-top:17px;padding-bottom:22px;margin:0;color:#fff}.gd-modal-body{background-color:#fff;overflow:hidden;overflow-y:auto;height:calc(100% - 75px)}.gd-modal-footer{height:auto}.gd-modal-footer>.btn{float:right;margin:20px 15px;padding:10px 20px;cursor:pointer;font-size:12px}@media (max-width:1037px){.gd-modal-dialog{width:100%;height:100%}.gd-modal-body{height:100%}}"]
                    }] }
        ];
        /** @nocollapse */
        ModalComponent.ctorParameters = function () { return [
            { type: ModalService },
            { type: core.ElementRef }
        ]; };
        ModalComponent.propDecorators = {
            id: [{ type: core.Input }],
            title: [{ type: core.Input }],
            visible: [{ type: core.Output }],
            cancel: [{ type: core.Output }]
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
        __extends(SaveFile, _super);
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
    /** @enum {number} */
    var FilePropertyCategory = {
        BuildIn: 0,
        Default: 1,
    };
    FilePropertyCategory[FilePropertyCategory.BuildIn] = 'BuildIn';
    FilePropertyCategory[FilePropertyCategory.Default] = 'Default';
    var FilePropertyModel = /** @class */ (function () {
        function FilePropertyModel() {
        }
        return FilePropertyModel;
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
            this._uploadsChange = new rxjs.Observable((/**
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
            this.selectedFileGuid = new core.EventEmitter();
            this.selectedDirectory = new core.EventEmitter();
            this.urlForUpload = new core.EventEmitter();
            this.closing = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'gd-browse-files-modal',
                        template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\r\n  <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\r\n    <div class=\"dnd-wrapper\">\r\n      <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\r\n      <span class=\"text\">Drop file here to upload</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\r\n    <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\r\n            (change)=\"handleFileInput($event.target.files)\">\r\n    <div class=\"context\">\r\n      <div class=\"context-actions\">\r\n        <gd-drop-down>\r\n          <gd-drop-down-toggle>\r\n            <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\r\n              Upload file\r\n            </gd-button>\r\n          </gd-drop-down-toggle>\r\n          <gd-drop-down-items>\r\n            <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\r\n              <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\r\n              <div class=\"text\">{{item.name}}</div>\r\n            </gd-drop-down-item>\r\n          </gd-drop-down-items>\r\n        </gd-drop-down>\r\n      </div>\r\n      <div class=\"context-panel\" *ngIf=\"showUploadUrl\">\r\n        <div class=\"upload-url\">\r\n          <input class=\"url-input\" placeholder=\"https://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\r\n          <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\r\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"list-files-header\" [ngClass]=\"{'upload-url': showUploadUrl}\">\r\n    <div class=\"header-name\">FILE</div>\r\n    <div class=\"header-size\">SIZE</div>\r\n  </div>\r\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\r\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\r\n      <div class=\"list-files-body\">\r\n        <div class=\"go-up\" (click)=\"goUp()\">\r\n            <div class=\"go-up-icon\">\r\n                <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\r\n            </div>\r\n            <div class=\"go-up-dots\">..</div>\r\n        </div>\r\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\r\n          <div class=\"file-description\">\r\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\r\n            <div class=\"file-name-format\">\r\n              <div class=\"file-name\">{{file?.name}}</div>\r\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"file-size\">\r\n            {{getSize(file?.size)}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\r\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\r\n      &nbsp;Loading... Please wait.\r\n    </div>\r\n  </section>\r\n</gd-modal>\r\n",
                        styles: [".gd-modal-table{width:100%;text-align:left}#gd-browse-section{width:1036px;height:561px;overflow-y:auto}.list-files-header{height:60px;color:#6e6e6e;font-size:13px;font-weight:700;background-color:#f4f4f4;margin-top:24px}.list-files-header.upload-url{margin-top:20px}.header-name{padding-left:24px;width:90%;line-height:60px}.header-size{padding-right:27px;line-height:60px}.file-size,.header-size{width:10%;color:#777;text-align:right}.file-description{display:flex;width:90%;padding:18px 0 18px 24px;font-size:14px;flex:1;cursor:pointer;overflow:hidden}.file-size{font-size:12px;padding:0 27px 0 0;width:10%;line-height:79px}.list-files-header,.list-files-lines{display:flex;width:100%;justify-content:space-between}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{display:flex;font-size:26px;cursor:pointer;color:#4b566c;height:79px}.go-up-dots{margin-left:20px;margin-top:22px;font-size:16px}.go-up-icon{display:block;padding:18px 0 18px 24px}.upload-panel{display:flex;position:relative;width:100%}.upload-panel .context{display:flex;flex-direction:column;width:100%;margin-left:24px;margin-top:24px;margin-right:24px}.upload-panel .context .context-actions{display:flex;flex-direction:row;width:100%}.upload-panel .context .context-actions :last-child{margin-right:0}.upload-panel .context .context-actions ::ng-deep .button{height:37px;width:96px;padding:0;justify-content:center}.upload-panel .context .context-actions ::ng-deep .button ::ng-deep .text{font-size:10px}.upload-panel .context .context-panel{display:flex;flex-direction:row;width:100%;margin-top:20px}.upload-panel .context .context-panel .upload-url{display:flex;flex-direction:row;width:100%}.upload-panel .context .context-panel .upload-url .url-input{width:100%;height:27px;border:1px solid #25c2d4;font-size:14px;padding-left:6px}.upload-panel .context .context-panel .upload-url .url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.upload-panel .context .context-panel .upload-url .url-check .ng-fa-icon{display:block;padding:8px}.upload-panel gd-drop-down{margin-right:10px}.file-description .ng-fa-icon.fa-file-pdf{color:#e04e4e}.file-description .ng-fa-icon.fa-file-word{color:#539cf0}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29e1e}.file-description .ng-fa-icon.fa-file-excel{color:#7cbc46}.file-description .ng-fa-icon.fa-file-image{color:#c375ed}.file-description .ng-fa-icon.fa-file,.file-description .ng-fa-icon.fa-file-alt,.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#4b566c}.file-description .ng-fa-icon{font-size:32px}.file-name{font-size:16px;color:#6e6e6e;overflow:hidden;text-overflow:ellipsis}.file-name-format{padding-left:11px;overflow:hidden}.file-format{font-size:10px;padding-top:3px;color:#acacac}.go-up,.list-files-lines{border-bottom:1px solid #e7e7e7}.list-files-lines:hover{background-color:#e5e5e5}.gd-dnd-wrap{background-color:#fff;cursor:default;position:absolute;width:100%;height:calc(100% - 60px);background:rgba(255,255,255,.7);z-index:1;display:flex;justify-content:center;align-items:center}.dnd-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;top:259px;position:absolute}.dnd-wrapper .text{color:#6e6e6e;font-size:14px}.dnd-wrapper .icon{display:flex;width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}@media (max-width:1037px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}#gd-browse-section{width:100%;height:calc(100% - 146px)}}"]
                    }] }
        ];
        /** @nocollapse */
        BrowseFilesModalComponent.ctorParameters = function () { return [
            { type: UploadFilesService }
        ]; };
        BrowseFilesModalComponent.propDecorators = {
            files: [{ type: core.Input }],
            uploadConfig: [{ type: core.Input }],
            selectedFileGuid: [{ type: core.Output }],
            selectedDirectory: [{ type: core.Output }],
            urlForUpload: [{ type: core.Output }],
            closing: [{ type: core.Output }]
        };
        return BrowseFilesModalComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ZoomService = /** @class */ (function () {
        function ZoomService() {
            this._observer = new rxjs.Subject();
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
    var $$1 = jquery;
    var DocumentComponent = /** @class */ (function () {
        function DocumentComponent(_elementRef, _zoomService, _windowService) {
            var _this = this;
            this._elementRef = _elementRef;
            this._zoomService = _zoomService;
            this._windowService = _windowService;
            this.onpan = new core.EventEmitter();
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
            this.onpan.emit($event);
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
            { type: core.Component, args: [{
                        selector: 'gd-document',
                        template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\r\n<div id=\"document\" class=\"document\" (tap)=\"onDoubleTap($event)\" (pinch)=\"onPinch($event)\" \r\n  (pinchend)=\"onPinchEnd($event)\" (pan)=\"onPan($event)\" (panend)=\"onPanEnd($event)\">\r\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\r\n    <div [ngClass]=\"ifExcel() ? 'page excel' : 'page'\" *ngFor=\"let page of file?.pages\"\r\n         [style.height]=\"getDimensionWithUnit(page.height)\"\r\n         [style.width]=\"getDimensionWithUnit(page.width)\"\r\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\r\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\r\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\r\n    </div>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                        styles: [":host{flex:1;transition:.4s;background-color:#e7e7e7;height:100%;overflow:scroll;touch-action:auto!important}:host .document{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important;touch-action:auto!important}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);transition:.3s}.page.excel{overflow:auto}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:flex-start}@media (max-width:1037px){.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
                    }] }
        ];
        /** @nocollapse */
        DocumentComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: ZoomService },
            { type: WindowService }
        ]; };
        DocumentComponent.propDecorators = {
            mode: [{ type: core.Input }],
            preloadPageCount: [{ type: core.Input }],
            file: [{ type: core.Input }],
            onpan: [{ type: core.Output }]
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
            { type: core.Component, args: [{
                        selector: 'gd-page',
                        template: "<div id=\"page-{{number}}\" gdHostDynamic [ident]=\"number\">\r\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\" [contentEditable]=\"(editable) ? true : false\"\r\n      gdEditor [text]=\"data\"></div>\r\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\r\n       alt=\"\"\r\n       *ngIf=\"data && !isHtml\">\r\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\r\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\r\n    &nbsp;Loading... Please wait.\r\n  </div>\r\n</div>\r\n",
                        styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper div{width:100%}::ng-deep .gd-highlight{background-color:#ff0}::ng-deep .gd-highlight-select{background-color:#ff9b00}"]
                    }] }
        ];
        /** @nocollapse */
        PageComponent.ctorParameters = function () { return []; };
        PageComponent.propDecorators = {
            angle: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            number: [{ type: core.Input }],
            data: [{ type: core.Input }],
            isHtml: [{ type: core.Input }],
            editable: [{ type: core.Input }]
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
            { type: core.Pipe, args: [{ name: 'safeHtml' },] }
        ];
        /** @nocollapse */
        SanitizeHtmlPipe.ctorParameters = function () { return [
            { type: platformBrowser.DomSanitizer }
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
            { type: core.Pipe, args: [{ name: 'safeResourceHtml' },] }
        ];
        /** @nocollapse */
        SanitizeResourceHtmlPipe.ctorParameters = function () { return [
            { type: platformBrowser.DomSanitizer }
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
            { type: core.Pipe, args: [{ name: 'safeStyle' },] }
        ];
        /** @nocollapse */
        SanitizeStylePipe.ctorParameters = function () { return [
            { type: platformBrowser.DomSanitizer }
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
            { type: core.Pipe, args: [{ name: 'highlight' },] }
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
            this.closeUpload = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'gd-upload-file-zone',
                        template: "<div class=\"gd-drag-n-drop-wrap\" id=\"gd-dropZone\" gdDnd (closing)=\"onCloseUpload()\" (click)=\"close($event)\">\r\n  <div class=\"gd-drag-n-drop-icon\">\r\n    <fa-icon [icon]=\"['fas','cloud-download-alt']\" size=\"5x\"></fa-icon>\r\n  </div>\r\n  <h2>Drag &amp; Drop your files here</h2>\r\n  <h4>OR</h4>\r\n  <div class=\"gd-drag-n-drop-buttons\">\r\n    <label class=\"btn btn-primary\"> \r\n      <fa-icon [icon]=\"['fas','file']\"></fa-icon>\r\n      SELECT FILE\r\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\r\n      </label>\r\n  </div>\r\n</div>\r\n",
                        styles: [".gd-drag-n-drop-wrap{border:2px dashed #ccc;background-color:#f8f8f8;text-align:center;cursor:default;position:absolute;width:-webkit-fill-available;left:1px;display:flex;align-content:center;flex-direction:column;justify-content:center;opacity:.9;z-index:1}.gd-drag-n-drop-wrap h2{color:#959da5;margin:5px 0;font-size:15px;font-weight:300}.gd-drag-n-drop-wrap h4{color:#cacaca;font-weight:300;font-size:12px;margin:10px 0 15px}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-drag-n-drop-buttons i{margin-right:5px}.gd-drag-n-drop-buttons .btn{width:134px;height:35px;margin:0 10px;font-size:12px;font-weight:400}.gd-drag-n-drop-wrap.hover{background:#ddd;border-color:#aaa}"]
                    }] }
        ];
        /** @nocollapse */
        UploadFileZoneComponent.ctorParameters = function () { return [
            { type: UploadFilesService }
        ]; };
        UploadFileZoneComponent.propDecorators = {
            closeUpload: [{ type: core.Output }]
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
            this.closing = new core.EventEmitter();
            this.opening = new core.EventEmitter();
            this.dropped = new core.EventEmitter();
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
            { type: core.Directive, args: [{
                        selector: '[gdDnd]'
                    },] }
        ];
        /** @nocollapse */
        DndDirective.ctorParameters = function () { return [
            { type: UploadFilesService }
        ]; };
        DndDirective.propDecorators = {
            closing: [{ type: core.Output }],
            opening: [{ type: core.Output }],
            dropped: [{ type: core.Output }],
            active: [{ type: core.HostBinding, args: ['class.active',] }],
            onDragEnter: [{ type: core.HostListener, args: ['dragenter', ['$event'],] }],
            onDragOver: [{ type: core.HostListener, args: ['dragover', ['$event'],] }],
            onDragLeave: [{ type: core.HostListener, args: ['dragleave', ['$event'],] }],
            onDrop: [{ type: core.HostListener, args: ['drop', ['$event'],] }],
            onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
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
            this._checkPreload = new rxjs.Observable((/**
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
            this._navigate = new rxjs.Observable((/**
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NavigateService.ctorParameters = function () { return [
            { type: PagePreloadService }
        ]; };
        /** @nocollapse */ NavigateService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NavigateService_Factory() { return new NavigateService(core.ɵɵinject(PagePreloadService)); }, token: NavigateService, providedIn: "root" });
        return NavigateService;
    }());

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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ViewportService.ctorParameters = function () { return []; };
        /** @nocollapse */ ViewportService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ViewportService_Factory() { return new ViewportService(); }, token: ViewportService, providedIn: "root" });
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
            { type: core.Directive, args: [{
                        selector: '[gdScrollable]'
                    },] }
        ];
        /** @nocollapse */
        ScrollableDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: NavigateService },
            { type: PagePreloadService },
            { type: ZoomService },
            { type: WindowService },
            { type: ViewportService }
        ]; };
        ScrollableDirective.propDecorators = {
            scrolling: [{ type: core.HostListener, args: ['scroll',] }],
            resizing: [{ type: core.HostListener, args: ['window:resize',] }]
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
            { type: core.Directive, args: [{
                        selector: '[gdZoom]'
                    },] }
        ];
        /** @nocollapse */
        ZoomDirective.ctorParameters = function () { return [
            { type: ZoomService },
            { type: WindowService },
            { type: core.ElementRef }
        ]; };
        ZoomDirective.propDecorators = {
            zoomActive: [{ type: core.Input }],
            file: [{ type: core.Input }],
            zoomInt: [{ type: core.HostBinding, args: ['style.zoom',] }],
            transform: [{ type: core.HostBinding, args: ['style.transform',] }],
            transformOrigin: [{ type: core.HostBinding, args: ['style.transform-origin',] }],
            width: [{ type: core.HostBinding, args: ['style.width',] }],
            height: [{ type: core.HostBinding, args: ['style.height',] }],
            minWidth: [{ type: core.HostBinding, args: ['style.min-width',] }]
        };
        return ZoomDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OnCloseService = /** @class */ (function () {
        function OnCloseService() {
            this._observer = new rxjs.Subject();
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        OnCloseService.ctorParameters = function () { return []; };
        /** @nocollapse */ OnCloseService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function OnCloseService_Factory() { return new OnCloseService(); }, token: OnCloseService, providedIn: "root" });
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
            this.selected = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'gd-select',
                        template: "<div class=\"select\"\r\n     (click)=\"toggle($event)\"\r\n     (touchstart)=\"toggle($event)\"\r\n     (clickOutside)=\"onClickOutside($event)\"\r\n     [clickOutsideEnabled]=\"isOpen\">\r\n  <div class=\"selected-value\" gdDisabledCursor [dis]=\"disabled\">\r\n    {{showSelected?.name}}\r\n  </div>\r\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\"></span>\r\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\r\n    <div *ngFor=\"let option of options\">\r\n      <div *ngIf=\"!option.separator\" (click)=\"select($event, option)\" (touchstart)=\"select($event, option)\"\r\n           class=\"option\">{{option.name}}</div>\r\n      <div *ngIf=\"option.separator\" role=\"separator\" class=\"dropdown-menu-separator\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                        styles: [".select{min-width:50px;display:flex;flex-direction:row;justify-content:center;align-items:center;color:#959da5}.selected-value{font-size:14px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:clip;max-width:70px}.selected-value.inactive{cursor:not-allowed;color:#ccc}.nav-caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent;cursor:pointer}.nav-caret.inactive{cursor:not-allowed;color:#ccc}.dropdown-menu{position:absolute;top:49px;z-index:1000;float:left;min-width:96px;list-style:none;font-size:13px;text-align:left;background-color:#fff;box-shadow:0 3px 6px rgba(0,0,0,.3);background-clip:padding-box}.dropdown-menu .option{display:block;padding:7px 0 7px 7px;clear:both;font-weight:400;line-height:1.42857143;white-space:nowrap;cursor:pointer;font-size:10px}.dropdown-menu .option:hover{background-color:#25c2d4;color:#fff!important}.dropdown-menu-separator{height:1px;overflow:hidden;background-color:#f4f4f4;padding:0!important}"]
                    }] }
        ];
        /** @nocollapse */
        SelectComponent.ctorParameters = function () { return [
            { type: OnCloseService }
        ]; };
        SelectComponent.propDecorators = {
            options: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            showSelected: [{ type: core.Input }],
            selected: [{ type: core.Output }],
            isOpen: [{ type: core.Input }]
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
            { type: core.Directive, args: [{
                        selector: '[gdDisabledCursor]'
                    },] }
        ];
        /** @nocollapse */
        DisabledCursorDirective.ctorParameters = function () { return []; };
        DisabledCursorDirective.propDecorators = {
            dis: [{ type: core.Input }],
            cursor: [{ type: core.HostBinding, args: ['class.inactive',] }]
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
            { type: core.Directive, args: [{
                        selector: '[gdRotation]'
                    },] }
        ];
        /** @nocollapse */
        RotationDirective.ctorParameters = function () { return []; };
        RotationDirective.propDecorators = {
            angle: [{ type: core.Input }],
            isHtmlMode: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            withMargin: [{ type: core.Input }],
            animation: [{ type: core.HostBinding, args: ['style.animation',] }],
            transition: [{ type: core.HostBinding, args: ['style.transition-property',] }],
            transform: [{ type: core.HostBinding, args: ['style.transform',] }],
            margin: [{ type: core.HostBinding, args: ['style.margin',] }]
        };
        return RotationDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InitStateComponent = /** @class */ (function () {
        function InitStateComponent() {
            this.fileDropped = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'gd-init-state',
                        template: "<div class=\"wrapper gd-drag-n-drop-wrap\" gdDnd (dropped)=\"dropped($event)\" (opening)=\"showUploadFile=$event\">\r\n  <div class=\"init-state-wrapper\">\r\n    <fa-icon class=\"icon\" [icon]=\"['fas',icon]\"></fa-icon>\r\n    <span class=\"start\">\r\n      <ng-content></ng-content>\r\n    </span>\r\n  </div>\r\n  <div *ngIf=\"showUploadFile\" class=\"init-state-dnd-wrapper\">\r\n    <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\r\n    <span class=\"text\">{{text}}</span>\r\n  </div>\r\n</div>\r\n",
                        styles: [".wrapper{color:#959da5;background-color:#e7e7e7;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%}.icon{font-size:65px;margin-bottom:43px;display:flex;color:#959da5}.start{font-size:15px;text-align:center;color:#959da5}.gd-drag-n-drop-wrap.active{background-color:#fff;position:fixed;top:0;background:rgba(255,255,255,.8)}.gd-drag-n-drop-wrap.active .init-state-wrapper{position:absolute;opacity:.2;top:unset}.gd-drag-n-drop-wrap.active .init-state-dnd-wrapper{top:0;z-index:999}.gd-drag-n-drop-wrap.active .init-state-dnd-wrapper .icon{width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}.gd-drag-n-drop-wrap.active .text{color:#6e6e6e;font-size:14px}.init-state-dnd-wrapper,.init-state-wrapper{display:flex;flex-direction:column;width:250px;height:250px;align-items:center;justify-content:center}.init-state-wrapper{top:-60px;position:relative}"]
                    }] }
        ];
        /** @nocollapse */
        InitStateComponent.ctorParameters = function () { return []; };
        InitStateComponent.propDecorators = {
            icon: [{ type: core.Input }],
            text: [{ type: core.Input }],
            fileDropped: [{ type: core.Output }]
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
            this._render = new rxjs.Observable((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                return _this._observer = observer;
            }));
            this._renderBlob = new rxjs.Observable((/**
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
                    for (var pages_1 = __values(pages), pages_1_1 = pages_1.next(); !pages_1_1.done; pages_1_1 = pages_1.next()) {
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
                    for (var pages_2 = __values(pages), pages_2_1 = pages_2.next(); !pages_2_1.done; pages_2_1 = pages_2.next()) {
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
            { type: core.Directive, args: [{
                        selector: '[gdRenderPrint]'
                    },] }
        ];
        /** @nocollapse */
        RenderPrintDirective.ctorParameters = function () { return [
            { type: RenderPrintService }
        ]; };
        RenderPrintDirective.propDecorators = {
            htmlMode: [{ type: core.Input }]
        };
        return RenderPrintDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExceptionMessageService = /** @class */ (function () {
        function ExceptionMessageService() {
            this._observer = new rxjs.BehaviorSubject('Server is not available');
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
            { type: core.Component, args: [{
                        selector: 'gd-error-modal',
                        template: "<gd-modal id=\"gd-error-message\" [title]=\"'Error'\">\r\n  <section id=\"gd-error-section\">\r\n    <fa-icon [icon]=\"['fas', 'exclamation-triangle']\"></fa-icon>\r\n    <div class=\"gd-modal-error\">\r\n      <div class=\"gd-modal-error-title\">Something went wrong</div>\r\n      <div class=\"gd-modal-error-message\">{{message ? message : 'Server is not available'}}</div>\r\n    </div>\r\n  </section>\r\n</gd-modal>\r\n",
                        styles: [".gd-modal-error{display:inline-flex;flex-direction:column;flex:1}.gd-modal-error .gd-modal-error-message{font-size:12px;margin:0 24px 24px 0;word-break:break-word}.gd-modal-error .gd-modal-error-title{font-size:16px;font-weight:700;margin:14px 0 10px}#gd-error-section{max-width:468px;max-height:204px;display:flex}#gd-error-section fa-icon{flex:1;color:#e04e4e;font-size:40px;margin:13px 23px 90px;text-align:center;max-width:46px}"]
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
            this._observer = new rxjs.Subject();
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
    /** @type {?} */
    var $$4 = jquery;
    var PasswordRequiredComponent = /** @class */ (function () {
        function PasswordRequiredComponent(messageService, _passwordService) {
            var _this = this;
            this._passwordService = _passwordService;
            this.cancelEvent = new core.EventEmitter();
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
                    var element = $$4("#password");
                    if (element) {
                        element.focus();
                    }
                }), 100);
            }
            else {
                $$4("#password").val("");
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
            $$4("#password").val("");
            this.cancelEvent.emit(true);
        };
        PasswordRequiredComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-password-required',
                        template: "<gd-modal id=\"gd-password-required\" [title]=\"'Password protected document'\" (cancel)=\"cancel($event)\" (visible)=\"onCloseOpen($event)\">\r\n  <section id=\"gd-password-section\">\r\n    <div class=\"gd-password-wrap\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" [ngClass]=\"{'error': message}\" id=\"password\" #pass\r\n             (keyup.enter)=\"setPassword(pass.value)\">\r\n      <span class=\"gd-password-error\">{{message}}</span>\r\n      <gd-button [icon]=\"'key'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"setPassword(pass.value)\">\r\n          Open\r\n      </gd-button>\r\n    </div>\r\n  </section>\r\n</gd-modal>\r\n",
                        styles: ["#gd-password-section{width:375px;height:164px}.gd-password-wrap{display:flex;flex-direction:column;margin:24px}.gd-password-wrap label{font-size:14px;color:#acacac;padding-bottom:12px}.gd-password-wrap input{height:30px;border:1px solid #25c2d4}.gd-password-wrap input.error{border-color:#e04e4e}.gd-password-wrap gd-button{align-self:flex-end}.gd-password-wrap ::ng-deep .button{height:37px;width:72px;padding:0;justify-content:center}.gd-password-wrap ::ng-deep .button ::ng-deep .text{font-size:10px!important}.gd-password-error{color:#e04e4e;padding:10px 0 12px;height:12px;line-height:12px;font-size:12px}@media (max-width:1037px){#gd-password-section{min-width:375px}}"]
                    }] }
        ];
        /** @nocollapse */
        PasswordRequiredComponent.ctorParameters = function () { return [
            { type: ExceptionMessageService },
            { type: PasswordService }
        ]; };
        PasswordRequiredComponent.propDecorators = {
            cancelEvent: [{ type: core.Output }]
        };
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
                .pipe(operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return data;
            })), operators.catchError((/**
             * @param {?} exception
             * @return {?}
             */
            function (exception) {
                if (exception instanceof http.HttpErrorResponse) {
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
                return rxjs.throwError(exception);
            })));
        };
        ErrorInterceptorService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ErrorInterceptorService.ctorParameters = function () { return [
            { type: ModalService },
            { type: ExceptionMessageService }
        ]; };
        /** @nocollapse */ ErrorInterceptorService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ErrorInterceptorService_Factory() { return new ErrorInterceptorService(core.ɵɵinject(ModalService), core.ɵɵinject(ExceptionMessageService)); }, token: ErrorInterceptorService, providedIn: "root" });
        return ErrorInterceptorService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchService = /** @class */ (function () {
        function SearchService() {
            this._observer = new rxjs.Subject();
            this._textChange = this._observer.asObservable();
            this._observerCurrent = new rxjs.Subject();
            this._currentChange = this._observerCurrent.asObservable();
            this._observerTotal = new rxjs.Subject();
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
            this.hidePanel = new core.EventEmitter(false);
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
            { type: core.Component, args: [{
                        selector: 'gd-search',
                        template: "<div class=\"gd-nav-search-container\">\r\n  <input type=\"text\" class=\"gd-search-input\" (keydown.enter)=\"next()\" #text (input)=\"setText(text.value)\"/>\r\n  <div class=\"gd-search-count\">{{current}} of {{total}}</div>\r\n  <gd-button class=\"gd-nav-search-btn\" [icon]=\"'chevron-left'\" [disabled]=\"total == 0 || current == 1\" (click)=\"prev()\">\r\n  </gd-button>\r\n  <gd-button class=\"gd-nav-search-btn\" [icon]=\"'chevron-right'\" [disabled]=\"total == 0 || current == total\" (click)=\"next()\">\r\n  </gd-button>\r\n  <gd-button class=\"gd-nav-search-btn gd-nav-search-cancel\" [icon]=\"'times'\" (click)=\"hide()\">\r\n  </gd-button>\r\n</div>\r\n",
                        styles: [".gd-nav-search-btn{margin:3px 0 4px}.gd-nav-search-cancel{color:#fff;font-size:14px;width:37px}.gd-search-count{color:#959da5;font-size:12px;position:absolute;right:148px;top:14px}.gd-nav-search-container{background-color:#3e4e5a;width:410px;position:fixed;left:50%;top:60px;z-index:2;transform:translate(-50%,0);display:flex}.gd-search-input{float:left;height:30px;width:267px;font-size:14px;color:#6e6e6e;border:1px solid #25c2d4;margin:7px 0 7px 7px;box-sizing:border-box;padding:6px 0 5px 9px}input[type=text]::-ms-clear{display:none}@media (max-width:1037px){.gd-search-input{width:231px;height:30px;margin:7px 0 7px 5px}.gd-search-count{position:absolute;left:193px;top:15px}.gd-nav-search-container{width:100%}}"]
                    }] }
        ];
        /** @nocollapse */
        SearchComponent.ctorParameters = function () { return [
            { type: SearchService }
        ]; };
        SearchComponent.propDecorators = {
            hidePanel: [{ type: core.Output }],
            textElement: [{ type: core.ViewChild, args: ['text', {
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
    var $$5 = jquery;
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
                        top: ($$5(currentEl).offset().top) + el.parentElement.parentElement.scrollTop - 150,
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
            { type: core.Directive, args: [{
                        selector: '[gdSearchable]'
                    },] }
        ];
        /** @nocollapse */
        SearchableDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
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
            { type: core.Component, args: [{
                        selector: 'gd-tabbed-toolbars',
                        template: "<div class=\"top-panel\">\r\n  <gd-logo [logo]=\"logo\" [icon]=\"icon\"></gd-logo>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                        styles: [".top-panel{background:#3e4e5a;display:flex;width:100%;height:90px}.top-panel ::ng-deep .logo{height:30px;font-size:16px}@media (max-width:1037px){.top-panel{height:60px}.top-panel ::ng-deep .logo{height:60px}}"]
                    }] }
        ];
        /** @nocollapse */
        TabbedToolbarsComponent.ctorParameters = function () { return []; };
        TabbedToolbarsComponent.propDecorators = {
            logo: [{ type: core.Input }],
            icon: [{ type: core.Input }]
        };
        return TabbedToolbarsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TabActivatorService = /** @class */ (function () {
        function TabActivatorService() {
            this._observer = new rxjs.Subject();
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
            { type: core.Component, args: [{
                        selector: 'gd-tab',
                        template: "<div [ngClass]=\"(active) ? 'gd-tab active' : 'gd-tab'\" (mousedown)=\"selectTab()\">\r\n  <div class=\"title\" *ngIf=\"tabTitle\">{{tabTitle}}</div>\r\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n</div>\r\n<div *ngIf=\"content\" [ngClass]=\"(active) ? 'tab-content active' : 'tab-content'\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                        styles: [".tab-content{height:60px;position:absolute;background-color:#fff;width:100%;left:0;line-height:60px;display:none;z-index:9}.tab-content ::ng-deep .toolbar-panel{height:60px}.tab-content.active{display:flex}.gd-tab{text-align:center;font-size:11px;color:#e5e5e5;height:30px;line-height:30px;cursor:pointer;display:flex;align-items:center;justify-content:center}.gd-tab .icon{display:none;font-size:14px;margin:auto 23px}.gd-tab .title{margin:auto 23px}.gd-tab.active{background-color:#fff;color:#3e4e5a;font-weight:700}@media (max-width:1037px){.gd-tab{height:60px;line-height:60px}.gd-tab .title{display:none}.gd-tab .icon{display:block}}"]
                    }] }
        ];
        /** @nocollapse */
        TabComponent.ctorParameters = function () { return [
            { type: TabActivatorService }
        ]; };
        TabComponent.propDecorators = {
            id: [{ type: core.Input }],
            tabTitle: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            active: [{ type: core.Input }],
            content: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'gd-tabs',
                        template: "<div class=\"gd-tabs\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
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
            this._observerBold = new rxjs.Subject();
            this._formatBoldChange = this._observerBold.asObservable();
            this._observerUnderline = new rxjs.Subject();
            this._formatUnderlineChange = this._observerUnderline.asObservable();
            this._observerUndo = new rxjs.Subject();
            this._undo = this._observerUndo.asObservable();
            this._observerRedo = new rxjs.Subject();
            this._redo = this._observerRedo.asObservable();
            this._observerItalic = new rxjs.Subject();
            this._formatItalicChange = this._observerItalic.asObservable();
            this._observerColor = new rxjs.Subject();
            this._formatColorChange = this._observerColor.asObservable();
            this._observerBgColor = new rxjs.Subject();
            this._formatBgColorChange = this._observerBgColor.asObservable();
            this._observerFontSize = new rxjs.Subject();
            this._formatFontSizeChange = this._observerFontSize.asObservable();
            this._observerFont = new rxjs.Subject();
            this._formatFontChange = this._observerFont.asObservable();
            this._observerStrikeout = new rxjs.Subject();
            this._formatStrikeoutChange = this._observerStrikeout.asObservable();
            this._observerAlign = new rxjs.Subject();
            this._formatAlignChange = this._observerAlign.asObservable();
            this._observerList = new rxjs.Subject();
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
            this.selectedColor = new core.EventEmitter();
            this.closeOutside = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'gd-color-picker',
                        template: "<div class=\"bcPicker-picker\" (clickOutside)=\"close()\" *ngIf=\"isOpen\" [clickOutsideEnabled]=\"isOpen\">\r\n  <div class=\"bcPicker-palette\">\r\n    <div class=\"bcPicker-color\" *ngFor=\"let color of colors\" [style.background-color]=\"color\"\r\n      (click)=\"select($event, color)\" [style.border]=\"'1px solid ' + (color === white ? '#707070' : color)\"\r\n      (touchstart)=\"select($event, color)\"></div>\r\n  </div>\r\n</div>\r\n",
                        styles: [".bcPicker-picker{border:1px;border-radius:100%}.bcPicker-palette{width:250px;background-color:#fdfdfd;z-index:999;box-shadow:0 0 5px #efefef;display:flex;flex-wrap:wrap;justify-content:center}.bcPicker-palette>.bcPicker-color{width:18px;height:18px;margin:2px;cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        ColorPickerComponent.ctorParameters = function () { return []; };
        ColorPickerComponent.propDecorators = {
            isOpen: [{ type: core.Input }],
            selectedColor: [{ type: core.Output }],
            closeOutside: [{ type: core.Output }]
        };
        return ColorPickerComponent;
    }());

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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        BackFormattingService.ctorParameters = function () { return []; };
        /** @nocollapse */ BackFormattingService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function BackFormattingService_Factory() { return new BackFormattingService(); }, token: BackFormattingService, providedIn: "root" });
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ SelectionService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SelectionService_Factory() { return new SelectionService(); }, token: SelectionService, providedIn: "root" });
        return SelectionService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var $$6 = jquery;
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
            $$6(selection).css("text-align", align);
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
            { type: core.Directive, args: [{
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
            mouseup: [{ type: core.HostListener, args: ['mouseup',] }]
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
            { type: core.Component, args: [{
                        selector: 'gd-success-modal',
                        template: "<gd-modal id=\"gd-success-modal\" [title]=\"'Saved'\">\r\n<div id=\"gd-modal-success\"><div class=\"check_mark\">\r\n    <div class=\"sa-icon sa-success animate\">\r\n        <span class=\"sa-line sa-tip animateSuccessTip\"></span>\r\n        <span class=\"sa-line sa-long animateSuccessLong\"></span>\r\n        <div class=\"sa-placeholder\"></div>\r\n        <div class=\"sa-fix\"></div>\r\n      </div>\r\n  </div></div>\r\n  </gd-modal>\r\n",
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
            this._observer = new rxjs.Subject();
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EditHtmlService.ctorParameters = function () { return []; };
        /** @nocollapse */ EditHtmlService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function EditHtmlService_Factory() { return new EditHtmlService(); }, token: EditHtmlService, providedIn: "root" });
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
            { type: core.Directive, args: [{
                        selector: '[gdEditor]'
                    },] }
        ];
        /** @nocollapse */
        EditorDirective.ctorParameters = function () { return [
            { type: SelectionService },
            { type: EditHtmlService }
        ]; };
        EditorDirective.propDecorators = {
            text: [{ type: core.Input }],
            onInput: [{ type: core.HostListener, args: ['keyup', ['$event'],] }],
            onMouseleave: [{ type: core.HostListener, args: ['mouseleave', ['$event'],] }],
            onBlur: [{ type: core.HostListener, args: ['blur', ['$event'],] }]
        };
        return EditorDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoadingMaskService = /** @class */ (function () {
        function LoadingMaskService() {
            this.onLoadingChanged = new core.EventEmitter();
            this.stopList = [];
            this.requests = [];
            this.stopList.push(Api.SAVE_TEXT);
            this.stopList.push(Api.SAVE_OPTICAL_CODE);
            this.stopList.push(Api.LOAD_DOCUMENT_PAGE);
            this.stopList.push(Api.LOAD_THUMBNAILS);
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
            { type: core.Injectable }
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
            { type: core.Component, args: [{
                        selector: 'gd-loading-mask',
                        template: "<div class=\"loading-wrapper\" *ngIf=\"loadingMask\">\r\n    <div class=\"loading-message\">\r\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;Loading... Please wait.\r\n    </div>\r\n</div>\r\n",
                        styles: [".loading-wrapper{background:rgba(0,0,0,.5);width:100%;height:100%;font-size:14px;color:#fff;position:fixed;top:0;left:0;z-index:99999}.loading-message{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}"]
                    }] }
        ];
        /** @nocollapse */
        LoadingMaskComponent.ctorParameters = function () { return [
            { type: LoadingMaskService }
        ]; };
        LoadingMaskComponent.propDecorators = {
            loadingMask: [{ type: core.Input }]
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
            return next.handle(req).pipe(operators.finalize(callback));
        };
        LoadingMaskInterceptorService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LoadingMaskInterceptorService.ctorParameters = function () { return [
            { type: LoadingMaskService }
        ]; };
        /** @nocollapse */ LoadingMaskInterceptorService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function LoadingMaskInterceptorService_Factory() { return new LoadingMaskInterceptorService(core.ɵɵinject(LoadingMaskService)); }, token: LoadingMaskInterceptorService, providedIn: "root" });
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
            { type: core.Component, args: [{
                        selector: 'gd-drop-down-toggle',
                        template: '<ng-content></ng-content>',
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        DropDownToggleComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [core.forwardRef((/**
                             * @return {?}
                             */
                            function () { return DropDownComponent; })),] }] }
        ]; };
        DropDownToggleComponent.propDecorators = {
            click: [{ type: core.HostListener, args: ['click', ['$event'],] }]
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
            { type: core.Component, args: [{
                        selector: 'gd-drop-down-items',
                        template: '<div class="drop-down-items" (clickOutside)="onClickOutside($event)" [clickOutsideEnabled]="isOpen" [style.right]="horizontalAlign" [style.top]="verticalAlign"><ng-content></ng-content></div>',
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        DropDownItemsComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [core.forwardRef((/**
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
            this.selected = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'gd-drop-down-item',
                        template: '<div class="drop-down-item"><ng-content></ng-content></div>',
                        styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        DropDownItemComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [core.forwardRef((/**
                             * @return {?}
                             */
                            function () { return DropDownComponent; })),] }] }
        ]; };
        DropDownItemComponent.propDecorators = {
            class: [{ type: core.HostBinding, args: ['class',] }],
            selected: [{ type: core.Output }],
            click: [{ type: core.HostListener, args: ['click',] }]
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
            { type: core.Component, args: [{
                        selector: 'gd-drop-down',
                        template: '<div class="drop-down"><ng-content></ng-content></div>',
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
                    }] }
        ];
        DropDownComponent.propDecorators = {
            placement: [{ type: core.Input }],
            open: [{ type: core.Input }, { type: core.HostBinding, args: ['class.show',] }],
            class: [{ type: core.HostBinding, args: ['class',] }]
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
            { type: core.Component, args: [{
                        selector: 'gd-left-side-bar',
                        template: "<div class=\"left-panel\">\r\n  <div class=\"gd-left-bar-fade\" *ngIf=\"showSpinner\">\r\n    <div class=\"gd-left-bar-spinner\"><i class=\"fa fa-circle-o-notch fa-spin\"></i> &nbsp;Loading...\r\n    </div>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                        styles: [".left-panel{border-radius:0;float:left}.gd-left-bar-fade{margin:auto;overflow:hidden;-webkit-overflow-scrolling:touch;transition:transform .3s ease-out;width:100%;height:100%;display:flex;justify-content:center;align-items:center;position:fixed;z-index:1000}@media (max-width:1037px){.gd-left-bar-fade{top:100px;right:0}.gd-left-bar-spinner{top:20%}}"]
                    }] }
        ];
        /** @nocollapse */
        LeftSideBarComponent.ctorParameters = function () { return []; };
        LeftSideBarComponent.propDecorators = {
            showSpinner: [{ type: core.Input }]
        };
        return LeftSideBarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TooltipDirective = /** @class */ (function () {
        function TooltipDirective() {
            this.showToolTip = new core.EventEmitter();
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
            { type: core.Directive, args: [{
                        selector: '[gdTooltip]'
                    },] }
        ];
        /** @nocollapse */
        TooltipDirective.ctorParameters = function () { return []; };
        TooltipDirective.propDecorators = {
            showToolTip: [{ type: core.Output }],
            onHovering: [{ type: core.HostListener, args: ['mouseenter',] }],
            onUnhovering: [{ type: core.HostListener, args: ['mouseleave',] }]
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AddDynamicComponentService.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core.ApplicationRef }
        ]; };
        /** @nocollapse */ AddDynamicComponentService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AddDynamicComponentService_Factory() { return new AddDynamicComponentService(core.ɵɵinject(core.ComponentFactoryResolver), core.ɵɵinject(core.ApplicationRef)); }, token: AddDynamicComponentService, providedIn: "root" });
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
            { type: core.Directive, args: [{
                        selector: '[gdHostDynamic]'
                    },] }
        ];
        /** @nocollapse */
        HostDynamicDirective.ctorParameters = function () { return [
            { type: core.ViewContainerRef },
            { type: HostingDynamicComponentService }
        ]; };
        HostDynamicDirective.propDecorators = {
            ident: [{ type: core.Input }]
        };
        return HostDynamicDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var $$7 = jquery;
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
            this.offsetX = new core.EventEmitter();
            this.offsetY = new core.EventEmitter();
            this.offsetTop = new core.EventEmitter();
            this.offsetLeft = new core.EventEmitter();
            this.release = new core.EventEmitter();
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
            var elSE = $$7(this.getElementId(this.SE));
            /** @type {?} */
            var elNW = $$7(this.getElementId(this.NW));
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
            { type: core.Component, args: [{
                        selector: 'gd-resizing',
                        template: "<div class=\"ui-resizable-handle se-resize\" id=\"se-{{id}}\" *ngIf=\"se\" [draggable]=\"true\" (dragover)=\"start($event)\"\r\n     (drag)=\"resize($event, SE)\" (dragend)=\"end($event, SE)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\r\n      (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, SE)\" (panend)=\"end($event, SE)\"></div>\r\n\r\n<div class=\"ui-resizable-handle ne-resize\" id=\"ne-{{id}}\" *ngIf=\"ne\" [draggable]=\"true\" (dragover)=\"start($event)\"\r\n     (drag)=\"resize($event, NE)\" (dragend)=\"end($event, NE)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\r\n     (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, NE)\" (panend)=\"end($event, NE)\"></div>\r\n\r\n<div class=\"ui-resizable-handle sw-resize\" id=\"sw-{{id}}\" *ngIf=\"sw\" [draggable]=\"true\" (dragover)=\"start($event)\"\r\n     (drag)=\"resize($event, SW)\" (dragend)=\"end($event, SW)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\r\n     (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, SW)\" (panend)=\"end($event, SW)\"></div>\r\n\r\n<div class=\"ui-resizable-handle nw-resize\" id=\"nw-{{id}}\" *ngIf=\"nw\" [draggable]=\"true\" (dragover)=\"start($event)\"\r\n     (drag)=\"resize($event, NW)\" (dragend)=\"end($event, NW)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\r\n     (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, NW)\" (panend)=\"end($event, NW)\"></div>\r\n",
                        styles: [".ui-resizable-handle{background-color:#679ffa;width:8px;height:8px;border-radius:100%;position:absolute;font-size:.1px;display:block}.se-resize{bottom:-5px;right:-5px;cursor:se-resize}.ne-resize{top:-5px;right:-5px;cursor:ne-resize}.sw-resize{bottom:-5px;left:-5px;cursor:sw-resize}.nw-resize{top:-5px;left:-5px;cursor:nw-resize}"]
                    }] }
        ];
        /** @nocollapse */
        ResizingComponent.ctorParameters = function () { return []; };
        ResizingComponent.propDecorators = {
            init: [{ type: core.Input }],
            id: [{ type: core.Input }],
            se: [{ type: core.Input }],
            ne: [{ type: core.Input }],
            sw: [{ type: core.Input }],
            nw: [{ type: core.Input }],
            pageWidth: [{ type: core.Input }],
            pageHeight: [{ type: core.Input }],
            offsetX: [{ type: core.Output }],
            offsetY: [{ type: core.Output }],
            offsetTop: [{ type: core.Output }],
            offsetLeft: [{ type: core.Output }],
            release: [{ type: core.Output }]
        };
        return ResizingComponent;
    }());

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
            this.activeTab = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'gd-top-tab',
                        template: "<div class=\"gd-tab\" (mousedown)=\"toggleTab()\" gdTooltip (showToolTip)=\"showToolTip = $event\"\r\n     [ngClass]=\"(active) ? ((disabled) ? 'active disabled' : 'active') : ((disabled) ? 'disabled' : '')\">\r\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" class=\"gd-tab-tooltip\"\r\n              *ngIf=\"tooltip\" [position]=\"elementPosition\"></gd-tooltip>\r\n</div>\r\n",
                        styles: [".gd-tab{font-size:14px;color:#3e4e5a;cursor:pointer;display:flex;flex-direction:column;align-items:center;align-content:center;justify-content:center;min-width:36px;height:36px;text-align:center;position:relative;white-space:nowrap;padding:0!important;margin:0 10px}.gd-tab .gd-tab-tooltip{display:flex;flex-direction:column;margin:0!important}.gd-tab.active{background-color:#acacac;color:#fff!important;font-weight:700}.gd-tab.disabled{cursor:not-allowed;opacity:.4}.gd-tab ::ng-deep .tooltip{font-size:12px;margin:20px -57px}.gd-tab .title{margin:auto 23px}@media (max-width:1037px){.gd-tab{font-size:20px}}"]
                    }] }
        ];
        /** @nocollapse */
        TopTabComponent.ctorParameters = function () { return [
            { type: TopTabActivatorService },
            { type: ModalService },
            { type: ExceptionMessageService }
        ]; };
        TopTabComponent.propDecorators = {
            id: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            tooltip: [{ type: core.Input }],
            activeTab: [{ type: core.Output }],
            elementPosition: [{ type: core.Input }]
        };
        return TopTabComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var $$8 = jquery;
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
            this.outFontSize = new core.EventEmitter();
            this.outFont = new core.EventEmitter();
            this.outBold = new core.EventEmitter();
            this.outItalic = new core.EventEmitter();
            this.outUnderline = new core.EventEmitter();
            this.outColor = new core.EventEmitter();
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
         * @param {?} val
         * @return {?}
         */
        TextMenuComponent.prototype.changePosition = /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var top = (window.innerHeight - 25 - this._elementRef.nativeElement.parentElement.getBoundingClientRect().top - this._elementRef.nativeElement.parentElement.getBoundingClientRect().height);
            /** @type {?} */
            var left = this._elementRef.nativeElement.parentElement.getBoundingClientRect().left;
            this.renderer.setStyle(this._elementRef.nativeElement.parentElement, 'transform', 'scale(' + 1 / (val / 100) + ')');
            this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-text-menu'), 'width', window.innerWidth + 'px');
            this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-text-menu'), 'top', top + 'px');
            this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-text-menu'), 'left', -left + 'px');
        };
        /**
         * @return {?}
         */
        TextMenuComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
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
            $$8(".gd-wrapper").off("keyup");
            this.outFontSize.emit($event.value);
            $$8(".gd-wrapper").on("keyup", (/**
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
            { type: core.Component, args: [{
                        selector: 'gd-text-menu',
                        template: "<div class=\"gd-text-menu\">\r\n  <gd-select class=\"format-select first-component\" [options]=\"fontOptions\"\r\n             (selected)=\"selectFont($event)\"\r\n             [showSelected]=\"{name : font, value : font}\"></gd-select>\r\n  <gd-select class=\"format-select\" [options]=\"fontSizeOptions\"\r\n             (selected)=\"selectFontSize($event)\"\r\n             [showSelected]=\"{name : fontSize + 'px', value : fontSize}\"></gd-select>\r\n  <gd-button [icon]=\"'bold'\" [tooltip]=\"showTooltips ? 'Bold' : null\" *ngIf=\"decoration\"\r\n             (click)=\"toggleBold($event)\" (touchstart)=\"toggleBold($event)\" [toggle]=\"bold\"></gd-button>\r\n  <gd-button [icon]=\"'italic'\" [tooltip]=\"showTooltips ? 'Italic' : null\" *ngIf=\"decoration\"\r\n             (click)=\"toggleItalic($event)\" (touchstart)=\"toggleItalic($event)\" [toggle]=\"italic\"></gd-button>\r\n  <gd-button [icon]=\"'underline'\" [tooltip]=\"showTooltips ? 'Underline' : null\" *ngIf=\"decoration\"\r\n             (click)=\"toggleUnderline($event)\" (touchstart)=\"toggleUnderline($event)\" [toggle]=\"underline\"></gd-button>\r\n  <gd-button name=\"button\" class=\"color-for-text\" [icon]=\"'font'\" [tooltip]=\"showTooltips ? 'Color' : null\"\r\n             (click)=\"toggleColorPicker($event)\" (touchstart)=\"toggleColorPicker($event)\">\r\n    <div class=\"bg-color-pic\" [style.background-color]=\"color\"></div>\r\n  </gd-button>\r\n  <gd-color-picker [isOpen]=\"colorPickerShow\" (closeOutside)=\"closePicker($event)\"\r\n                   [className]=\"'palette'\"\r\n                   (selectedColor)=\"selectColor($event)\"></gd-color-picker>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                        styles: ["::ng-deep .active{background-color:#e7e7e7}.gd-text-menu{display:flex;flex-direction:row}.gd-text-menu .format-select{height:37px;display:flex;justify-content:center;align-items:center;max-width:80px;margin:0 3px}.gd-text-menu .first-component{margin-left:8px}.gd-text-menu ::ng-deep .dropdown-menu{top:40px!important;height:120px;overflow-y:auto}.gd-text-menu ::ng-deep .icon-button{margin:0!important}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}.palette{position:relative;top:40px;left:-55px;z-index:100}@media (max-width:1037px){.gd-text-menu{position:fixed;left:0;right:0;width:inherit;height:60px;align-items:center;padding:0;margin:0;background-color:#fff;border-top:2px solid #707070;transform-origin:top left}.gd-text-menu ::ng-deep .selected-value{white-space:normal!important;word-wrap:break-word}.gd-text-menu .icon{color:#fff;margin:0 9px}.gd-text-menu ::ng-deep .bcPicker-palette{left:-200px;top:-200px}.gd-text-menu .palette{top:unset;bottom:40px;left:unset;right:5px}.gd-text-menu ::ng-deep .dropdown-menu{bottom:40px;top:unset!important}.gd-text-menu ::ng-deep .button{margin:3px!important}}"]
                    }] }
        ];
        /** @nocollapse */
        TextMenuComponent.ctorParameters = function () { return [
            { type: OnCloseService },
            { type: ZoomService },
            { type: WindowService },
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        TextMenuComponent.propDecorators = {
            blur: [{ type: core.Input }],
            fontSize: [{ type: core.Input }],
            font: [{ type: core.Input }],
            bold: [{ type: core.Input }],
            italic: [{ type: core.Input }],
            underline: [{ type: core.Input }],
            color: [{ type: core.Input }],
            decoration: [{ type: core.Input }],
            showTooltips: [{ type: core.Input }],
            outFontSize: [{ type: core.Output }],
            outFont: [{ type: core.Output }],
            outBold: [{ type: core.Output }],
            outItalic: [{ type: core.Output }],
            outUnderline: [{ type: core.Output }],
            outColor: [{ type: core.Output }]
        };
        return TextMenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MenuType = /** @class */ (function () {
        function MenuType() {
        }
        MenuType.FOR_SIGNATURE = "signature";
        MenuType.FOR_ANNOTATION = "annotation";
        return MenuType;
    }());
    var ContextMenuComponent = /** @class */ (function () {
        function ContextMenuComponent(_windowService) {
            var _this = this;
            this._windowService = _windowService;
            this.formatting = Formatting.default();
            this.lock = false;
            this.translation = 0;
            this.changeFormatting = new core.EventEmitter();
            this.removeItem = new core.EventEmitter();
            this.copySign = new core.EventEmitter();
            this.lockOut = new core.EventEmitter();
            this.comment = new core.EventEmitter();
            this.isMobile = _windowService.isMobile();
            _windowService.onResize.subscribe((/**
             * @param {?} w
             * @return {?}
             */
            function (w) {
                _this.isMobile = _windowService.isMobile();
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
            { type: core.Component, args: [{
                        selector: 'gd-context-menu',
                        template: "<div class=\"gd-context-menu\" [ngStyle]=\"isMobile ? null : {transform: 'translateX(' + translation + 'px)'}\"\r\n     [ngClass]=\"topPosition > 10 ? 'gd-context-menu-top' : 'gd-context-menu-bottom'\">\r\n  <gd-button [icon]=\"'arrows-alt'\" [class]=\"'ng-fa-icon icon arrows'\" [iconSize]=\"'sm'\"></gd-button>\r\n  <gd-text-menu *ngIf=\"textMenu\" [blur]=\"isMobile && isSignature()\" [color]=\"formatting.color\" [bold]=\"formatting.bold\"\r\n                [font]=\"formatting.font\" [fontSize]=\"formatting.fontSize\" [italic]=\"formatting.italic\"\r\n                [underline]=\"formatting.underline\" (outBold)=\"toggleBold($event)\"\r\n                (outUnderline)=\"toggleUnderline($event)\" (outItalic)=\"toggleItalic($event)\"\r\n                (outColor)=\"selectColor($event)\" (outFont)=\"selectFont($event)\"\r\n                (outFontSize)=\"selectFontSize($event)\" [decoration]=\"isSignature()\"></gd-text-menu>\r\n  <gd-button *ngIf=\"isSignature()\" [icon]=\"lock ? 'lock' : 'unlock'\" [class]=\"'ng-fa-icon icon'\"\r\n             (click)=\"toggleLock()\" (touchstart)=\"toggleLock()\"></gd-button>\r\n  <gd-button *ngIf=\"isSignature()\" [icon]=\"'copy'\" [class]=\"'ng-fa-icon icon'\" (click)=\"onCopySign()\"\r\n             (touchstart)=\"onCopySign()\"></gd-button>\r\n  <gd-button [icon]=\"'trash'\" [class]=\"'ng-fa-icon icon'\" (click)=\"deleteItem()\"\r\n             (touchstart)=\"deleteItem()\"></gd-button>\r\n  <gd-button *ngIf=\"isAnnotation()\" [icon]=\"'comment'\" [class]=\"'ng-fa-icon icon'\" (click)=\"addComment()\"\r\n             (touchstart)=\"addComment()\"></gd-button>\r\n</div>\r\n",
                        styles: [".gd-context-menu-top{top:-44px}.gd-context-menu-bottom{bottom:-40px}.gd-context-menu{box-shadow:rgba(0,0,0,.52) 0 0 5px;background-color:#fff;position:absolute;left:0;right:0;margin:auto;cursor:default;width:max-content;width:-moz-max-content;width:-webkit-max-content;display:flex;flex-direction:row;z-index:999}.gd-context-menu .arrows{cursor:move}.gd-context-menu ::ng-deep .active{background-color:#e7e7e7}.gd-context-menu ::ng-deep .icon-button{margin:0!important}@media (max-width:1037px){.gd-context-menu-top{top:-37px;transform-origin:bottom center}}"]
                    }] }
        ];
        /** @nocollapse */
        ContextMenuComponent.ctorParameters = function () { return [
            { type: WindowService }
        ]; };
        ContextMenuComponent.propDecorators = {
            formatting: [{ type: core.Input }],
            textMenu: [{ type: core.Input }],
            topPosition: [{ type: core.Input }],
            lock: [{ type: core.Input }],
            translation: [{ type: core.Input }],
            menuType: [{ type: core.Input }],
            changeFormatting: [{ type: core.Output }],
            removeItem: [{ type: core.Output }],
            copySign: [{ type: core.Output }],
            lockOut: [{ type: core.Output }],
            comment: [{ type: core.Output }]
        };
        return ContextMenuComponent;
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
        FilePropertyModel,
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
            fontawesomeSvgCore.library.add(freeSolidSvgIcons.fas, freeRegularSvgIcons.far);
        }
        CommonComponentsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, angularFontawesome.FontAwesomeModule, ngClickOutside.ClickOutsideModule],
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
        CommonComponentsModule.ctorParameters = function () { return []; };
        return CommonComponentsModule;
    }());

    exports.AddDynamicComponentService = AddDynamicComponentService;
    exports.Api = Api;
    exports.BackFormattingService = BackFormattingService;
    exports.BrowseFilesModalComponent = BrowseFilesModalComponent;
    exports.ButtonComponent = ButtonComponent;
    exports.ColorPickerComponent = ColorPickerComponent;
    exports.CommonComponentsModule = CommonComponentsModule;
    exports.CommonModals = CommonModals;
    exports.ConfigService = ConfigService;
    exports.ContextMenuComponent = ContextMenuComponent;
    exports.DisabledCursorDirective = DisabledCursorDirective;
    exports.DndDirective = DndDirective;
    exports.DocumentComponent = DocumentComponent;
    exports.DropDownComponent = DropDownComponent;
    exports.DropDownItemComponent = DropDownItemComponent;
    exports.DropDownItemsComponent = DropDownItemsComponent;
    exports.DropDownToggleComponent = DropDownToggleComponent;
    exports.EditHtmlService = EditHtmlService;
    exports.EditorDirective = EditorDirective;
    exports.ErrorInterceptorService = ErrorInterceptorService;
    exports.ErrorModalComponent = ErrorModalComponent;
    exports.ExceptionMessageService = ExceptionMessageService;
    exports.FileCredentials = FileCredentials;
    exports.FileDescription = FileDescription;
    exports.FileModel = FileModel;
    exports.FilePropertyCategory = FilePropertyCategory;
    exports.FilePropertyModel = FilePropertyModel;
    exports.FileService = FileService;
    exports.FileUtil = FileUtil;
    exports.Formatting = Formatting;
    exports.FormattingDirective = FormattingDirective;
    exports.FormattingService = FormattingService;
    exports.HighlightSearchPipe = HighlightSearchPipe;
    exports.HostDynamicDirective = HostDynamicDirective;
    exports.HostingDynamicComponentService = HostingDynamicComponentService;
    exports.HttpError = HttpError;
    exports.InitStateComponent = InitStateComponent;
    exports.LeftSideBarComponent = LeftSideBarComponent;
    exports.LoadingMaskComponent = LoadingMaskComponent;
    exports.LoadingMaskInterceptorService = LoadingMaskInterceptorService;
    exports.LoadingMaskService = LoadingMaskService;
    exports.LogoComponent = LogoComponent;
    exports.MenuType = MenuType;
    exports.ModalComponent = ModalComponent;
    exports.ModalService = ModalService;
    exports.NavigateService = NavigateService;
    exports.OnCloseService = OnCloseService;
    exports.PageComponent = PageComponent;
    exports.PageModel = PageModel;
    exports.PagePreloadService = PagePreloadService;
    exports.PasswordRequiredComponent = PasswordRequiredComponent;
    exports.PasswordService = PasswordService;
    exports.RenderPrintDirective = RenderPrintDirective;
    exports.RenderPrintService = RenderPrintService;
    exports.RotatedPage = RotatedPage;
    exports.RotationDirective = RotationDirective;
    exports.SanitizeHtmlPipe = SanitizeHtmlPipe;
    exports.SanitizeResourceHtmlPipe = SanitizeResourceHtmlPipe;
    exports.SanitizeStylePipe = SanitizeStylePipe;
    exports.SaveFile = SaveFile;
    exports.ScrollableDirective = ScrollableDirective;
    exports.SearchComponent = SearchComponent;
    exports.SearchService = SearchService;
    exports.SearchableDirective = SearchableDirective;
    exports.SelectComponent = SelectComponent;
    exports.SelectionService = SelectionService;
    exports.SidePanelComponent = SidePanelComponent;
    exports.SuccessModalComponent = SuccessModalComponent;
    exports.TabActivatorService = TabActivatorService;
    exports.TabComponent = TabComponent;
    exports.TabbedToolbarsComponent = TabbedToolbarsComponent;
    exports.TextMenuComponent = TextMenuComponent;
    exports.TooltipComponent = TooltipComponent;
    exports.TopTabActivatorService = TopTabActivatorService;
    exports.TopToolbarComponent = TopToolbarComponent;
    exports.UploadFileZoneComponent = UploadFileZoneComponent;
    exports.UploadFilesService = UploadFilesService;
    exports.Utils = Utils;
    exports.ViewportService = ViewportService;
    exports.WindowService = WindowService;
    exports.ZoomDirective = ZoomDirective;
    exports.ZoomService = ZoomService;
    exports.ɵa = TabsComponent;
    exports.ɵb = TooltipDirective;
    exports.ɵc = ResizingComponent;
    exports.ɵd = TopTabComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=groupdocs.examples.angular-common-components.umd.js.map
