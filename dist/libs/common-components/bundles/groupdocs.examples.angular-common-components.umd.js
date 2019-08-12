(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('jquery'), require('@fortawesome/angular-fontawesome'), require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/free-regular-svg-icons'), require('@angular/common/http'), require('rxjs'), require('@angular/platform-browser'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@groupdocs.examples.angular/common-components', ['exports', '@angular/core', '@angular/common', 'jquery', '@fortawesome/angular-fontawesome', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-regular-svg-icons', '@angular/common/http', 'rxjs', '@angular/platform-browser', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.groupdocs = global.groupdocs || {}, global.groupdocs.examples = global.groupdocs.examples || {}, global.groupdocs.examples.angular = global.groupdocs.examples.angular || {}, global.groupdocs.examples.angular['common-components'] = {}), global.ng.core, global.ng.common, global.jquery, global.angularFontawesome, global.fontawesomeSvgCore, global.freeSolidSvgIcons, global.freeRegularSvgIcons, global.ng.common.http, global.rxjs, global.ng.platformBrowser, global.rxjs.operators));
}(this, function (exports, core, common, jquery, angularFontawesome, fontawesomeSvgCore, freeSolidSvgIcons, freeRegularSvgIcons, http, rxjs, platformBrowser, operators) { 'use strict';

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
    /** @type {?} */
    var $ = jquery;
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
    var $$1 = jquery;
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
            { type: core.Component, args: [{
                        selector: 'gd-top-toolbar',
                        template: "<div class=\"top-toolbar\">\n  <gd-button [className]=\"'arrow-button'\" class=\"arrow-left\" id=\"left\" [icon]=\"'caret-left'\" [tooltip]=\"'Scroll left'\"\n             (click)=\"moveLeft()\"\n             *ngIf=\"showLeft\"></gd-button>\n  <div id=\"tools\" class=\"tools\">\n    <ng-content></ng-content>\n  </div>\n  <gd-button [className]=\"'arrow-button'\" class=\"arrow-right\" id=\"right\" [icon]=\"'caret-right'\"\n             [tooltip]=\"'Scroll right'\" (click)=\"moveRight()\"\n             *ngIf=\"showRight\"></gd-button>\n</div>\n",
                        styles: [".top-toolbar{width:100%;height:60px;z-index:999;display:flex;align-items:center}.tools{width:100%;height:100%;display:flex;align-items:center}@media (max-width:480px){.top-toolbar{height:60px}.arrow-right{position:absolute;right:0}.arrow-left{position:absolute;left:0}.tools{height:100%;overflow-x:auto;overflow-scrolling:touch;display:flex;align-items:center;transition:.3s ease-in-out;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.tools::-webkit-scrollbar{width:0;height:0;background-color:#3e4e5a}}"]
                    }] }
        ];
        /** @nocollapse */
        TopToolbarComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: ViewportService },
            { type: core.ChangeDetectorRef }
        ]; };
        TopToolbarComponent.propDecorators = {
            leftOffset: [{ type: core.Input }]
        };
        return TopToolbarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SidePanelComponent = /** @class */ (function () {
        function SidePanelComponent() {
            this.hideSidePanel = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'gd-side-panel',
                        template: "<div class=\"gd-side-panel-wrapper\">\n  <div class=\"gd-side-panel-header\">\n    <fa-icon class=\"fas fa-info-circle icon\" [icon]=\"['fas',icon]\"></fa-icon>\n    <div class=\"title\">{{title}}</div>\n    <div class=\"close\">\n      <gd-button class=\"fas fa-times\" [icon]=\"'times'\" [tooltip]=\"'Close'\" (click)=\"openSidePanel()\"></gd-button>\n    </div>\n  </div>\n  <div class=\"gd-side-panel-body\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                        styles: [".gd-side-panel-wrapper{margin-right:0;width:334px;z-index:999;background-color:#fff;transition:margin-right .2s;display:flex;flex-flow:column;height:100vh}.gd-side-panel-wrapper .gd-side-panel-header{height:60px;background-color:#222e35;display:flex;flex-direction:row;flex-wrap:nowrap}.gd-side-panel-wrapper .gd-side-panel-header .icon{font-size:24px;color:#959da5;margin:12px 9px 18px 14px}.gd-side-panel-wrapper .gd-side-panel-header .title{font-size:14px;font-weight:700;color:rgba(237,240,242,.57);margin-top:20px;width:100%}.gd-side-panel-wrapper .gd-side-panel-header .close{font-size:24px!important;margin-top:12px}.gd-side-panel-wrapper .gd-side-panel-body{display:flex;flex-flow:column;overflow:visible;overflow-y:auto;overflow-x:hidden;height:100%}@media (max-width:480px){.gd-side-panel-wrapper{width:100%;position:absolute;left:0;right:0;top:0;bottom:0}}"]
                    }] }
        ];
        /** @nocollapse */
        SidePanelComponent.ctorParameters = function () { return []; };
        SidePanelComponent.propDecorators = {
            title: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            hideSidePanel: [{ type: core.Output }]
        };
        return SidePanelComponent;
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
            if (!this.disabled) {
                this.className += ' active';
            }
            this.showToolTip = true;
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
            this.showToolTip = false;
        };
        ButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-button',
                        template: "<div class=\"button\" [ngClass]=\"toggle ? className + ' gd-edit active' : className\" (mouseenter)=\"onHovering()\"\n     (mouseleave)=\"onUnhovering()\" gdDisabledCursor [dis]=\"disabled\">\n  <fa-icon [icon]=\"['fas',icon]\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\"></gd-tooltip>\n  <ng-content></ng-content>\n</div>\n",
                        styles: [".button{margin:0 7px;font-size:14px;color:#959da5;cursor:pointer;display:flex;align-items:center;justify-content:center;width:37px;height:36px;text-align:center;position:relative}.button.inactive{cursor:not-allowed;opacity:.4}.button.active .ng-fa-icon{color:#ccd0d4}@media (max-width:1025px){.button{font-size:20px;margin:0 6px}.arrow-button{margin:5px}}"]
                    }] }
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () { return []; };
        ButtonComponent.propDecorators = {
            disabled: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            iconClass: [{ type: core.Input }],
            tooltip: [{ type: core.Input }],
            className: [{ type: core.Input }],
            toggle: [{ type: core.Input }]
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
                        template: "<div id=\"gd-header-logo\" class=\"logo\">\n  <span class=\"text\" [innerHTML]=\"logo\"></span>\n  <fa-icon [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n</div>\n\n",
                        styles: [".logo{background-color:#25c2d4;height:60px;display:flex;align-items:center;justify-content:center}.text{color:#fff;font-size:15px;text-transform:uppercase;margin:0 14px}.icon{display:none;font-size:32px;color:rgba(255,255,255,.5);margin:14px}@media (max-width:480px){.logo{width:60px;height:60px}.logo .text{display:none}.logo .icon{display:block}}"]
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
            { type: core.Component, args: [{
                        selector: 'gd-tooltip',
                        template: "<span class=\"tooltip\" [ngClass]=\"visibility\" [innerHTML]=\"text\"></span>\n",
                        styles: [".tooltip{position:absolute;margin-top:37px;width:100px;background-color:#000;color:#fff;text-align:center;border-radius:0;padding:5px 0;z-index:1;margin-left:-66px;font-size:10px;height:11px;line-height:11px}.tooltip.hidden{visibility:hidden}.tooltip.shown{visibility:visible}.shown:after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border:5px solid transparent;border-bottom-color:#000}"]
                    }] }
        ];
        /** @nocollapse */
        TooltipComponent.ctorParameters = function () { return []; };
        TooltipComponent.propDecorators = {
            text: [{ type: core.Input }],
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
        /**
         * @return {?}
         */
        ConfigService.prototype.getComparisonApiEndpoint = /**
         * @return {?}
         */
        function () {
            return this._apiEndpoint.trim().endsWith(Api.COMPARISON_APP) ? this._apiEndpoint : this._apiEndpoint + Api.COMPARISON_APP;
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
            { type: core.Component, args: [{
                        selector: 'gd-modal',
                        template: "<div class=\"gd-modal fade\" id=\"modalDialog\" (click)=\"onClose($event);\" *ngIf=\"visibility\">\n  <div class=\"gd-modal-dialog\">\n    <div class=\"gd-modal-content\" id=\"gd-modal-content\"> \n\n      <div class=\"gd-modal-header\"> \n        <div class=\"gd-modal-close\" (click)=\"close();\"><span>&times;</span></div>\n        <h4 class=\"gd-modal-title\">{{title}}</h4>\n        </div> \n\n      <div class=\"gd-modal-body\">\n        <ng-content></ng-content>\n        </div> \n\n      <div class=\"gd-modal-footer\"> \n\n        </div> \n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog --> \n  </div>\n\n",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.gd-modal{overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0;background-color:rgba(0,0,0,.5)}.gd-modal-dialog{box-shadow:#0005 0 0 10px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.gd-modal-content{background-color:#fff;height:100%;display:flex;flex-direction:column}.gd-modal-header{padding:1px 20px;background-color:#3e4e5a}.gd-modal-close{position:absolute;right:20px;top:13px;font-size:21px;cursor:pointer;color:#959da5}.gd-modal-title{font-size:16px;font-weight:400;padding-top:16px;padding-bottom:16px;margin:0;color:#fff}.gd-modal-body{background-color:#fff;overflow:hidden;overflow-y:auto;height:calc(100% - 75px)}.gd-modal-footer{height:auto}.gd-modal-footer>.btn{float:right;margin:20px 15px;padding:10px 20px;cursor:pointer;font-size:12px}@media (max-width:1025px){.gd-modal-dialog{width:100%;height:100%}}"]
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
            visible: [{ type: core.Output }]
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
    var $$2 = jquery;
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
            { type: core.Component, args: [{
                        selector: 'gd-browse-files-modal',
                        template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\n      <div class=\"gd-drag-n-drop-icon\">\n        <fa-icon [icon]=\"['fas','cloud-download-alt']\" size=\"5x\" aria-hidden=\"true\"></fa-icon>\n      </div>\n      <h2>Drag &amp; Drop your files here</h2>\n    </div>\n    <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n      <gd-choice-button [name]=\"'Upload file'\" [choices]=\"uploads\" [icon]=\"'upload'\"\n                        (selected)=\"selectUpload($event)\"></gd-choice-button>\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      <div class=\"upload-url\" *ngIf=\"showUploadUrl\">\n        <input class=\"url-input\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n        <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-header\">\n        <div class=\"header-name\">Document</div>\n        <div class=\"header-size\">Size</div>\n      </div>\n      <div class=\"list-files-body\">\n      <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n              <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n          </div>\n          <div class=\"go-up-dots\">...</div>\n      </div>\n      <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n        <div class=\"file-description\">\n          <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n          <div class=\"file-name-format\">\n            <div class=\"file-name\">{{file?.name}}</div>\n            <div class=\"file-format\">{{getFormatName(file)}}</div>\n          </div>\n        </div>\n        <div class=\"file-size\">\n          {{getSize(file?.size)}}\n        </div>\n      </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
                        styles: [".gd-modal-table{width:100%;text-align:left;padding-top:20px}#gd-browse-section{width:1024px;height:628px}.list-files-header{color:#acacac;font-size:10px}.header-name,.header-size{padding:10px 20px;width:90%}.file-size,.header-size{width:10%;color:#777}.file-description,.file-size{font-size:14px;padding:10px 20px;width:10%}.list-files-header,.list-files-lines{display:flex;width:100%;justify-content:space-between}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{cursor:pointer;display:flex;font-size:16px}.upload-panel{display:flex;position:relative;padding:20px 20px 0}.file-description{cursor:pointer;overflow:hidden;display:flex;width:90%}.file-description .ng-fa-icon.fa-file-pdf{color:#e21717}.file-description .ng-fa-icon.fa-file-word{color:#6979b9}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29417}.file-description .ng-fa-icon.fa-file-excel{color:#3fa300}.file-description .ng-fa-icon.fa-file-image{color:#e217da}.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#5d6a75}.file-description .ng-fa-icon{font-size:32px}.go-up-dots{margin-left:10px;margin-top:8px;font-size:20px}.go-up-icon .ng-fa-icon{padding:8px;display:block}.go-up-icon{width:30px;height:30px;padding:10px 20px}.file-name{font-size:16px;color:#6e6e6e}.file-name-format{padding-left:10px}.file-format{font-size:10px}.url-input{width:358px;margin-left:8px;height:27px;border:1px solid #25c2d4}.url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.url-check .ng-fa-icon{display:block;padding:8px}.upload-url{display:flex}.list-files-lines{border-top:1px solid #ccc}.list-files-lines:hover{background-color:#e5e5e5}.gd-dnd-wrap{background-color:#fff;cursor:default;position:absolute;width:inherit;height:inherit;opacity:.9;z-index:1;display:flex;text-align:center;justify-content:center;align-content:center;flex-direction:column}.gd-dnd-wrap h2{color:#959da5;font-size:15px;font-weight:300}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}@media (max-width:1025px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}}"]
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
    var $$3 = jquery;
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
            { type: core.Component, args: [{
                        selector: 'gd-document',
                        template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" gdScrollable [onRefresh]=\"refreshView\">\n  <div class=\"panzoom\" gdZoom [zoomActive]=\"ifFirefox()\" gdSearchable>\n    <div [ngClass]=\"(ifFirefox() && zoom > 110) ? 'page gd-zoomed' : 'page'\" *ngFor=\"let page of file?.pages\" gdZoom [zoomActive]=\"!ifFirefox()\"\n         [style.width.pt]=\"ifPdf() ? page.width : 'unset'\"\n         [style.height.pt]=\"(ifPdf() || ifImage()) && ifChromeOrFirefox() ? page.height : 'unset'\" gdRotation\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                        styles: [".document{background-color:#e7e7e7;width:100%;height:100%;overflow-x:hidden;overflow-y:auto!important;transition:.4s;padding:0;margin:0;position:relative}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 4px 12px -4px rgba(0,0,0,.38);transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:50% 50% 0;display:flex;justify-content:center;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}@media (max-width:1025px){.document{overflow-x:auto!important}.panzoom{flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
                    }] }
        ];
        /** @nocollapse */
        DocumentComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: ZoomService }
        ]; };
        DocumentComponent.propDecorators = {
            mode: [{ type: core.Input }],
            preloadPageCount: [{ type: core.Input }],
            file: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'gd-page',
                        template: "<div id=\"page-{{number}}\">\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\" [contentEditable]=\"(editable) ? true : false\"\n      gdEditor [text]=\"data\"></div>\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\n       alt=\"\"\n       *ngIf=\"data && !isHtml\">\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n    &nbsp;Loading... Please wait.\n  </div>\n</div>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper img{width:inherit}.gd-wrapper div{width:100%}.gd-highlight{background-color:#ff0}.gd-highlight-select{background-color:#ff9b00}.gd-page-image{height:100%!important;width:100%!important}"]
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
    var ChoiceButtonComponent = /** @class */ (function () {
        function ChoiceButtonComponent() {
            this.selected = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'gd-choice-button',
                        template: "<div class=\"choice-button\">\n  <fa-icon [icon]=\"['fas',icon]\"></fa-icon>\n  <span class=\"button-name\">{{name}}</span>\n  <div class=\"down\">\n    <fa-icon [icon]=\"['fas','angle-down']\" (click)=\"openChoices()\"></fa-icon>\n  </div>\n  <div class=\"choices\" *ngIf=\"open\">\n    <div class=\"upload-from\">Upload from:</div>\n    <div class=\"choice\" *ngFor=\"let choice of choices\" (click)=\"select(choice.name)\">\n        <fa-icon [icon]=\"['fas',choice.icon]\"></fa-icon>\n      {{choice.name}}\n    </div>\n  </div>\n</div>\n",
                        styles: [".choice-button{color:#fff;background-color:#25c2d4;display:flex}.choice-button .ng-fa-icon{padding:8px;font-size:15px}.down{cursor:pointer;background-color:#1fa5b4;width:31px;font-size:10px;display:flex;justify-content:center}.button-name{font-size:12px;padding-top:11px;padding-right:27px}.choices{color:#b2b8bd;top:33px;left:109px;position:absolute;padding:5px;margin:0;background-color:#fff;width:80px;border:0;border-radius:0;box-shadow:0 0 6px #ccc}.choice{cursor:pointer;font-size:12px;padding:3px}.choice i{color:#959da5}.upload-from{font-size:7px}"]
                    }] }
        ];
        /** @nocollapse */
        ChoiceButtonComponent.ctorParameters = function () { return []; };
        ChoiceButtonComponent.propDecorators = {
            name: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            choices: [{ type: core.Input }],
            selected: [{ type: core.Output }]
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
                        template: "<div class=\"gd-drag-n-drop-wrap\" id=\"gd-dropZone\" gdDnd (closing)=\"onCloseUpload()\" (click)=\"close($event)\">\n  <div class=\"gd-drag-n-drop-icon\">\n    <fa-icon [icon]=\"['fas','cloud-download-alt']\" size=\"5x\"></fa-icon>\n  </div>\n  <h2>Drag &amp; Drop your files here</h2>\n  <h4>OR</h4>\n  <div class=\"gd-drag-n-drop-buttons\">\n    <label class=\"btn btn-primary\"> \n      <fa-icon [icon]=\"['fas','file']\"></fa-icon>\n      SELECT FILE\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      </label>\n  </div>\n</div>\n",
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
        return WindowService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var $$4 = jquery;
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
            onRefresh: [{ type: core.Input }],
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
            { type: core.Directive, args: [{
                        selector: '[gdZoom]'
                    },] }
        ];
        /** @nocollapse */
        ZoomDirective.ctorParameters = function () { return [
            { type: ZoomService },
            { type: platformBrowser.DomSanitizer }
        ]; };
        ZoomDirective.propDecorators = {
            zoomActive: [{ type: core.Input }],
            zoomStr: [{ type: core.HostBinding, args: ['style.zoom',] }],
            zoomInt: [{ type: core.HostBinding, args: ['style.zoom',] }],
            mozTransform: [{ type: core.HostBinding, args: ['style.-moz-transform',] }],
            mozTransformOrigin: [{ type: core.HostBinding, args: ['style.-moz-transform-origin',] }],
            webkitTransform: [{ type: core.HostBinding, args: ['style.-webkit-transform',] }],
            msTransform: [{ type: core.HostBinding, args: ['style.-ms-transform',] }],
            oTransform: [{ type: core.HostBinding, args: ['style.-o-transform',] }]
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
            if (event && event['value'] === true) {
                this.close();
            }
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
            { type: core.Component, args: [{
                        selector: 'gd-select',
                        template: "<div class=\"select\"\n     (click)=\"toggle($event)\"\n     gdOutside\n     [clickOutsideEnabled]=\"isOpen\"\n     (clickOutside)=\"onClickOutside($event)\">\n  <span class=\"selected-value\" gdDisabledCursor [dis]=\"disabled\">\n    {{showSelected?.name}}\n  </span>\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\"></span>\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\n    <div *ngFor=\"let option of options\">\n      <div *ngIf=\"!option.separator\" (click)=\"select($event, option)\" class=\"option\">{{option.name}}</div>\n      <div *ngIf=\"option.separator\" role=\"separator\" class=\"dropdown-menu-separator\"></div>\n    </div>\n  </div>\n</div>\n",
                        styles: [".select{min-width:50px;color:#959da5}.selected-value{font-size:14px;cursor:pointer;white-space:nowrap}.selected-value.inactive{cursor:not-allowed;color:#ccc}.nav-caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent;cursor:pointer}.nav-caret.inactive{cursor:not-allowed;color:#ccc}.dropdown-menu{position:absolute;top:49px;z-index:1000;float:left;min-width:160px;padding:5px 0;list-style:none;font-size:13px;text-align:left;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box}.dropdown-menu .option{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;white-space:nowrap;cursor:pointer}.dropdown-menu .option:hover{background-color:#25c2d4;color:#fff}.dropdown-menu-separator{height:1px;margin:8px 0;overflow:hidden;background-color:#e5e5e5;padding:0!important}"]
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
            selected: [{ type: core.Output }]
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
            { type: core.Component, args: [{
                        selector: 'gd-init-state',
                        template: "<div class=\"wrapper\">\n  <fa-icon class=\"icon\" [icon]=\"['fas',icon]\"></fa-icon>\n  <span class=\"text\">{{text}}</span>\n  <span class=\"start\">Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file</span>\n</div>\n",
                        styles: [".wrapper{color:#959da5;background-color:#e7e7e7;display:flex;flex-direction:column;justify-content:center;align-content:center;width:100%;height:100%}.icon{font-size:65px;text-align:center;margin-bottom:38px}.start,.text{font-size:15px;text-align:center}"]
                    }] }
        ];
        /** @nocollapse */
        InitStateComponent.ctorParameters = function () { return []; };
        InitStateComponent.propDecorators = {
            icon: [{ type: core.Input }],
            text: [{ type: core.Input }]
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
            { type: core.Component, args: [{
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
                        template: "<div class=\"gd-nav-search-container\">\n  <input type=\"text\" class=\"gd-search-input\" #text (input)=\"setText(text.value)\"/>\n  <div class=\"gd-search-count\">{{current}} of {{total}}</div>\n  <div class=\"gd-nav-search-btn\" (click)=\"prev()\">\n    <fa-icon [icon]=\"['fas','chevron-left']\"></fa-icon>\n  </div>\n  <div class=\"gd-nav-search-btn\" (click)=\"next()\">\n    <fa-icon [icon]=\"['fas','chevron-right']\"></fa-icon>\n  </div>\n  <div class=\"gd-nav-search-btn gd-nav-search-cancel\" (click)=\"hide()\">\n    <fa-icon [icon]=\"['fas','times']\"></fa-icon>\n  </div>\n</div>\n",
                        styles: [".gd-nav-search-btn{float:left;margin:0 10px;padding:3px 5px;cursor:pointer;color:#959da5}.gd-nav-search-cancel{font-size:15px;width:10px;margin-left:1px;margin-top:-2px}.gd-search-count{color:#959da5;font-size:11px;position:absolute;left:221px;top:13px;text-align:right;width:62px}.gd-nav-search-container{background-color:#3e4e5a;min-width:330px;padding:8px 0 7px 7px;position:absolute;left:328px;top:49px;z-index:1}.gd-search-input{float:left;height:11px;width:215px;padding:5px 65px 5px 5px}@media (max-width:1025px){.gd-nav-search-container{top:70px;left:45%}.gd-search-input{width:auto}.gd-search-count{left:48%}}@media (min-width:401px) and (max-width:700px){.gd-search-input{width:226px}.gd-search-count{left:55%}}@media (max-width:500px){.gd-nav-search-container{width:100%;left:0}}"]
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
                        template: "<div [ngClass]=\"(active) ? 'gd-tab active' : 'gd-tab'\" (mousedown)=\"selectTab()\">\n  <div class=\"title\">{{tabTitle}}</div>\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n</div>\n<div *ngIf=\"content\" [ngClass]=\"(active) ? 'gd-editor-buttons active' : 'gd-editor-buttons'\">\n  <ng-content></ng-content>\n</div>\n",
                        styles: [".gd-editor-buttons{height:60px;position:absolute;background-color:#fff;width:100%;left:0;line-height:60px;display:none;z-index:9}.gd-editor-buttons ::ng-deep .toolbar-panel{height:60px}.gd-editor-buttons.active{display:flex}.gd-tab{text-align:center;font-size:11px;color:#e5e5e5;height:30px;line-height:30px;cursor:pointer;display:flex;align-items:center;justify-content:center}.gd-tab .icon{display:none;font-size:14px;margin:auto 23px}.gd-tab .title{margin:auto 23px}.gd-tab.active{background-color:#fff;color:#3e4e5a;font-weight:700}@media (max-width:480px){.gd-tab{height:60px;line-height:60px}.gd-tab .title{display:none}.gd-tab .icon{display:block}}"]
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
        Formatting.DEFAULT = new Formatting(10, '#000000', '#FFFFFF', false, false, false, 'Arial', false, "", "");
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
    var DEFAULT_COLORS = ['#000000', '#993300', '#333300', '#000080', '#333399', '#333333',
        '#800000', '#FF6600', '#808000', '#008000', '#008080', '#0000FF',
        '#666699', '#808080', '#FF0000', '#FF9900', '#99CC00', '#339966',
        '#33CCCC', '#3366FF', '#800080', '#999999', '#FF00FF', '#FFCC00',
        '#FFFF00', '#00FF00', '#00FFFF', '#00CCFF', '#993366', '#C0C0C0',
        '#FF99CC', '#FFCC99', '#FFFF99', '#CCFFFF', '#99CCFF', '#FFFFFF'];
    var ColorPickerComponent = /** @class */ (function () {
        function ColorPickerComponent() {
            this.selectedColor = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'gd-color-picker',
                        template: "<div class=\"bcPicker-picker\">\n  <div class=\"bcPicker-palette\">\n    <div class=\"bcPicker-color\" *ngFor=\"let color of colors\" [style.background-color]=\"color\" (click)=\"select($event, color)\"></div>\n  </div>\n</div>\n",
                        styles: [".bcPicker-picker{border:1px;border-radius:100%}.bcPicker-palette{width:232px;padding:5px;border:1px solid #efefef;background-color:#fdfdfd;z-index:999}.bcPicker-palette>.bcPicker-color{width:14px;height:14px;margin:2px;display:inline-block;border:1px solid #efefef;background-color:#9da97b;cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        ColorPickerComponent.ctorParameters = function () { return []; };
        ColorPickerComponent.propDecorators = {
            selectedColor: [{ type: core.Output }]
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
                        template: "<gd-modal id=\"gd-success-modal\" [title]=\"'Saved'\">\n<div id=\"gd-modal-success\"><div class=\"check_mark\">\n    <div class=\"sa-icon sa-success animate\">\n        <span class=\"sa-line sa-tip animateSuccessTip\"></span>\n        <span class=\"sa-line sa-long animateSuccessLong\"></span>\n        <div class=\"sa-placeholder\"></div>\n        <div class=\"sa-fix\"></div>\n      </div>\n  </div></div>\n  </gd-modal>\n",
                        styles: [".check_mark{margin:0 auto}.sa-icon{width:80px;height:80px;border:4px solid gray;border-radius:50%;padding:0;position:relative;box-sizing:content-box}#gd-modal-success{display:flex;overflow:hidden;padding:20px}.sa-icon.sa-success{border-color:#4caf50}.sa-icon.sa-success::after,.sa-icon.sa-success::before{content:'';position:absolute;width:60px;height:120px;background:#fff}.sa-icon.sa-success::before{border-radius:120px 0 0 120px;top:-7px;left:-33px;transform:rotate(-45deg);transform-origin:60px 60px}.sa-icon.sa-success::after{border-radius:0 120px 120px 0;top:-11px;left:30px;transform:rotate(-45deg);transform-origin:0 60px}.sa-icon.sa-success .sa-placeholder{width:80px;height:80px;border:4px solid rgba(76,175,80,.5);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.sa-icon.sa-success .sa-fix{width:5px;height:90px;background-color:#fff;position:absolute;left:28px;top:8px;z-index:1;transform:rotate(-45deg)}.sa-icon.sa-success.animate::after{-webkit-animation:4.25s ease-in rotatePlaceholder;animation:4.25s ease-in rotatePlaceholder}.animateSuccessTip{-webkit-animation:.75s animateSuccessTip;animation:.75s animateSuccessTip}.animateSuccessLong{-webkit-animation:.75s animateSuccessLong;animation:.75s animateSuccessLong}@-webkit-keyframes animateSuccessLong{0%,65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}100%{width:47px;right:8px;top:38px}}@-webkit-keyframes animateSuccessTip{0%,54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}100%{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%,54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}100%{width:25px;left:14px;top:45px}}@keyframes animateSuccessLong{0%,65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}100%{width:47px;right:8px;top:38px}}.sa-icon.sa-success .sa-line{height:5px;background-color:#4caf50;display:block;border-radius:2px;position:absolute;z-index:2}.sa-icon.sa-success .sa-line.sa-tip{width:25px;left:14px;top:46px;transform:rotate(45deg)}.sa-icon.sa-success .sa-line.sa-long{width:47px;right:8px;top:38px;transform:rotate(-45deg)}@-webkit-keyframes rotatePlaceholder{0%,5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}100%,12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%,5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}100%,12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}@media (max-width:1025px){#gd-modal-success{left:50%;top:50%;position:relative;transform:translate(-50%,-50%)}}"]
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
                        template: "<div class=\"loading-wrapper\" *ngIf=\"loadingMask\">\n    <div class=\"loading-message\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;Loading... Please wait.\n    </div>\n</div>\n",
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
    var OutsideDirective = /** @class */ (function () {
        function OutsideDirective(_elRef) {
            this._elRef = _elRef;
            this.clickOutside = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        OutsideDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.globalClick = rxjs.fromEvent(document, 'click');
            this.globalClick.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                _this.onGlobalClick(event);
            }));
        };
        /**
         * @return {?}
         */
        OutsideDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} event
         * @return {?}
         */
        OutsideDirective.prototype.onGlobalClick = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
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
        };
        /**
         * @param {?} parent
         * @param {?} child
         * @return {?}
         */
        OutsideDirective.prototype.isDescendant = /**
         * @param {?} parent
         * @param {?} child
         * @return {?}
         */
        function (parent, child) {
            /** @type {?} */
            var node = child;
            while (node !== null) {
                if (node === parent) {
                    return true;
                }
                else {
                    node = node.parentNode;
                }
            }
            return false;
        };
        OutsideDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[gdOutside]'
                    },] }
        ];
        /** @nocollapse */
        OutsideDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        OutsideDirective.propDecorators = {
            clickOutsideEnabled: [{ type: core.Input }],
            clickOutside: [{ type: core.Output }]
        };
        return OutsideDirective;
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
        LoadingMaskService,
        TabActivatorService];
    var CommonComponentsModule = /** @class */ (function () {
        function CommonComponentsModule() {
            fontawesomeSvgCore.library.add(freeSolidSvgIcons.fas, freeRegularSvgIcons.far);
        }
        CommonComponentsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, angularFontawesome.FontAwesomeModule],
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
                            OutsideDirective
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
                            OutsideDirective
                        ],
                        providers: providers
                    },] }
        ];
        /** @nocollapse */
        CommonComponentsModule.ctorParameters = function () { return []; };
        return CommonComponentsModule;
    }());

    exports.Api = Api;
    exports.BackFormattingService = BackFormattingService;
    exports.BrowseFilesModalComponent = BrowseFilesModalComponent;
    exports.ButtonComponent = ButtonComponent;
    exports.ChoiceButtonComponent = ChoiceButtonComponent;
    exports.ColorPickerComponent = ColorPickerComponent;
    exports.CommonComponentsModule = CommonComponentsModule;
    exports.CommonModals = CommonModals;
    exports.ConfigService = ConfigService;
    exports.DisabledCursorDirective = DisabledCursorDirective;
    exports.DndDirective = DndDirective;
    exports.DocumentComponent = DocumentComponent;
    exports.EditHtmlService = EditHtmlService;
    exports.EditorDirective = EditorDirective;
    exports.ErrorInterceptorService = ErrorInterceptorService;
    exports.ErrorModalComponent = ErrorModalComponent;
    exports.ExceptionMessageService = ExceptionMessageService;
    exports.FileCredentials = FileCredentials;
    exports.FileDescription = FileDescription;
    exports.FileModel = FileModel;
    exports.FileService = FileService;
    exports.FileUtil = FileUtil;
    exports.Formatting = Formatting;
    exports.FormattingDirective = FormattingDirective;
    exports.FormattingService = FormattingService;
    exports.HighlightSearchPipe = HighlightSearchPipe;
    exports.HttpError = HttpError;
    exports.InitStateComponent = InitStateComponent;
    exports.LoadingMaskComponent = LoadingMaskComponent;
    exports.LoadingMaskInterceptorService = LoadingMaskInterceptorService;
    exports.LoadingMaskService = LoadingMaskService;
    exports.LogoComponent = LogoComponent;
    exports.ModalComponent = ModalComponent;
    exports.ModalService = ModalService;
    exports.NavigateService = NavigateService;
    exports.OnCloseService = OnCloseService;
    exports.OutsideDirective = OutsideDirective;
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
    exports.TooltipComponent = TooltipComponent;
    exports.TopToolbarComponent = TopToolbarComponent;
    exports.UploadFileZoneComponent = UploadFileZoneComponent;
    exports.UploadFilesService = UploadFilesService;
    exports.ViewportService = ViewportService;
    exports.WindowService = WindowService;
    exports.ZoomDirective = ZoomDirective;
    exports.ZoomService = ZoomService;
    exports.ɵa = TabsComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=groupdocs.examples.angular-common-components.umd.js.map
