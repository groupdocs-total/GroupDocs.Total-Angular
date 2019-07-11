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
                        styles: [".top-toolbar{width:100%;height:50px;z-index:999;display:flex;align-items:center}.tools{width:100%;height:100%;display:flex;align-items:center}@media (max-width:1025px){.top-toolbar{height:70px}.arrow-right{position:absolute;right:0}.tools{width:calc(100% - 120px);height:100%;overflow-x:auto;overflow-scrolling:touch;display:flex;align-items:center;transition:.3s ease-in-out;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.tools::-webkit-scrollbar{width:0;height:0;background-color:#3e4e5a}}"]
                    }] }
        ];
        /** @nocollapse */
        TopToolbarComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: ViewportService },
            { type: core.ChangeDetectorRef }
        ]; };
        return TopToolbarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
            this.disabled = false;
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
            { type: core.Component, args: [{
                        selector: 'gd-button',
                        template: "<div class=\"button\" [ngClass]=\"className\" (mouseenter)=\"onHovering()\" (mouseleave)=\"onUnhovering()\" gdDisabledCursor [dis]=\"disabled\">\n  <fa-icon [icon]=\"['fas',icon]\"></fa-icon>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\"></gd-tooltip>\n</div>\n",
                        styles: [".button{margin:0 15px;font-size:14px;color:#959da5;cursor:pointer}@media (max-width:1025px){.button{font-size:20px;margin:0 20px}.arrow-button{margin:5px}}"]
                    }] }
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () { return []; };
        ButtonComponent.propDecorators = {
            disabled: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            tooltip: [{ type: core.Input }],
            className: [{ type: core.Input }]
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
                        template: "<div id=\"gd-header-logo\" class=\"logo\">\n  <span class=\"logo-text\" [innerHTML]=\"logo\"></span>\n</div>\n\n",
                        styles: [".logo{background-color:#25c2d4;height:50px;display:flex;align-items:center}.logo-text{color:#fff;font-size:15px;text-transform:uppercase;margin:0 14px}@media (max-width:1025px){.logo{height:70px}}"]
                    }] }
        ];
        /** @nocollapse */
        LogoComponent.ctorParameters = function () { return []; };
        LogoComponent.propDecorators = {
            logo: [{ type: core.Input }]
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
                        styles: [".tooltip{position:absolute;margin-top:37px;width:120px;background-color:#000;color:#fff;text-align:center;border-radius:0;padding:5px 0;z-index:1;margin-left:-66px;font-size:10px}.tooltip.hidden{visibility:hidden}.tooltip.shown{visibility:visible}.shown:after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border:5px solid transparent;border-bottom-color:#000}"]
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
            if ($event && $event.target && ((/** @type {?} */ ($event.target))).id === 'modalDialog') {
                this.close();
            }
        };
        ModalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-modal',
                        template: "<div class=\"gd-modal fade\" id=\"modalDialog\" (click)=\"onClose($event);\" *ngIf=\"visibility\">\n  <div class=\"gd-modal-dialog\">\n    <div class=\"gd-modal-content\" id=\"gd-modal-content\"> \n\n      <div class=\"gd-modal-header\"> \n        <div class=\"gd-modal-close\" (click)=\"close();\"><span>&times;</span></div>\n        <h4 class=\"gd-modal-title\">{{title}}</h4>\n        </div> \n\n      <div class=\"gd-modal-body\">\n        <ng-content></ng-content>\n        </div> \n\n      <div class=\"gd-modal-footer\"> \n\n        </div> \n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog --> \n  </div>\n\n",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.gd-modal{overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0;background-color:rgba(0,0,0,.5)}.gd-modal-dialog{box-shadow:#0005 0 0 10px;position:absolute;width:1024px;height:728px;top:calc(50% - 364px);left:calc(50% - 512px)}.gd-modal-content{background-color:#fff;height:100%;display:flex;flex-direction:column}.gd-modal-header{padding:1px 20px;background-color:#3e4e5a}.gd-modal-close{position:absolute;right:20px;top:13px;font-size:21px;cursor:pointer;color:#959da5}.gd-modal-title{font-size:16px;font-weight:400;padding-top:16px;padding-bottom:16px;margin:0;color:#fff}.gd-modal-body{background-color:#fff;padding:20px 0;overflow:hidden;overflow-y:auto;height:calc(100% - 75px)}.gd-modal-footer{height:25px}.gd-modal-footer>.btn{float:right;margin:20px 15px;padding:10px 20px;cursor:pointer;font-size:12px}@media (max-width:1025px){.gd-modal-dialog{width:100%;height:100%;top:0;left:0}}"]
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
        function FileCredentials() {
        }
        return FileCredentials;
    }());
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
                        template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-browse-section\" gdDnd [isBackground]=\"false\" (open)=\"showUploadFile=$event\">\n    <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\">\n      <h2>Drag &amp; Drop your files here</h2>\n    </div>\n    <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n      <gd-choice-button [name]=\"'Upload file'\" [choices]=\"uploads\" [icon]=\"'upload'\"\n                        (selected)=\"selectUpload($event)\"></gd-choice-button>\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      <div class=\"upload-url\" *ngIf=\"showUploadUrl\">\n        <input class=\"url-input\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n        <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-header\">\n        <div class=\"header-name\">Document</div>\n        <div class=\"header-size\">Size</div>\n      </div>\n      <div class=\"list-files-body\">\n      <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n              <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n          </div>\n          <div class=\"go-up-dots\">...</div>\n      </div>\n      <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n        <div class=\"file-description\">\n          <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n          <div class=\"file-name-format\">\n            <div class=\"file-name\">{{file?.name}}</div>\n            <div class=\"file-format\">{{getFormatName(file)}}</div>\n          </div>\n        </div>\n        <div class=\"file-size\">\n          {{getSize(file?.size)}}\n        </div>\n      </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
                        styles: [".gd-modal-table{width:100%;text-align:left;padding-top:20px}.list-files-header{color:#acacac;font-size:10px;padding-left:21px}.header-size{position:relative;left:-24px}.file-size,.header-size{width:10%;color:#777}.file-description,.file-size{font-size:14px;padding:10px 6px;margin-left:12px}.file-description{cursor:pointer;overflow:hidden;display:flex}.list-files-header,.list-files-lines{display:flex;width:100%;justify-content:space-between}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{cursor:pointer;display:flex;font-size:16px}.upload-panel{display:flex;position:relative;left:20px}.file-description .ng-fa-icon.fa-file-pdf{color:#e21717}.file-description .ng-fa-icon.fa-file-word{color:#6979b9}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29417}.file-description .ng-fa-icon.fa-file-excel{color:#3fa300}.file-description .ng-fa-icon.fa-file-image{color:#e217da}.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#5d6a75}.file-description .ng-fa-icon{font-size:32px}.go-up-dots{margin-left:10px;margin-top:8px;font-size:20px}.go-up-icon .ng-fa-icon{padding:8px;display:block}.go-up-icon{width:30px;height:30px;margin-left:12px}.file-name{font-size:16px;color:#6e6e6e}.file-name-format{padding-left:10px}.file-format{font-size:10px}.url-input{width:358px;margin-left:8px;height:27px;border:1px solid #25c2d4}.url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.url-check .ng-fa-icon{display:block;padding:8px}.upload-url{display:flex}.list-files-lines{border-top:1px solid #ccc}.gd-dnd-wrap{border:2px dashed #ccc;background-color:#f8f8f8;cursor:default;position:absolute;width:983px;height:626px;opacity:.9;z-index:1;left:20px;display:flex;text-align:center;justify-content:center}.gd-dnd-wrap h2{color:#959da5;font-size:15px;font-weight:300;margin-top:50%}@media (max-width:1025px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}}"]
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
            urlForUpload: [{ type: core.Output }]
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
        /**
         * @param {?} val
         * @param {?} name
         * @param {?=} sep
         * @return {?}
         */
        ZoomService.prototype.createZoomOption = /**
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
        };
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
        return ZoomService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DocumentComponent = /** @class */ (function () {
        function DocumentComponent(zoomService) {
            var _this = this;
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
        DocumentComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-document',
                        template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" gdScrollable [onRefresh]=\"refreshView\">\n  <div class=\"panzoom\" gdZoom [zoomActive]=\"ifFirefox()\" gdSearchable>\n    <div [ngClass]=\"(ifFirefox() && zoom > 110) ? 'page gd-zoomed' : 'page'\" *ngFor=\"let page of file?.pages\" gdZoom [zoomActive]=\"!ifFirefox()\"\n         [style.width.pt]=\"ifPdf() ? page.width : 'unset'\"\n         [style.height.pt]=\"(ifPdf() || ifImage()) && ifChromeOrFirefox() ? page.height : 'unset'\" gdRotation\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\"></gd-page>\n    </div>\n  </div>\n</div>\n",
                        styles: [".document{background-color:#e7e7e7;width:100%;height:100%;overflow-x:hidden;overflow-y:auto!important;transition:.4s;padding:0;margin:0}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 4px 12px -4px rgba(0,0,0,.38);transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:50% 50% 0;display:flex;justify-content:center;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}@media (max-width:1025px){.document{overflow-x:auto!important}.panzoom{flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
                    }] }
        ];
        /** @nocollapse */
        DocumentComponent.ctorParameters = function () { return [
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
                        template: "<div id=\"page-{{number}}\"\n     [style.min-width.px]=\"width\" [style.min-height.px]=\"height\">\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\"></div>\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\n       alt=\"\"\n       *ngIf=\"data && !isHtml\">\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n    &nbsp;Loading... Please wait.\n  </div>\n</div>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper img{width:inherit}.gd-wrapper div{width:100%}.gd-highlight{background-color:#ff0}.gd-highlight-select{background-color:#ff9b00}"]
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
            isHtml: [{ type: core.Input }]
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
                        styles: [".choice-button{width:137px;height:31px;color:#fff;background-color:#25c2d4;display:flex}.choice-button .ng-fa-icon{padding:8px;font-size:15px}.down{cursor:pointer;background-color:#1fa5b4;width:31px;font-size:10px;display:flex;justify-content:center}.button-name{font-size:10px;padding-top:11px;padding-right:27px}.choices{color:#b2b8bd;top:33px;left:109px;position:absolute;padding:5px;margin:0;background-color:#fff;width:80px;border:0;border-radius:0;box-shadow:0 0 6px #ccc}.choice{cursor:pointer;font-size:12px;padding:3px}.choice i{color:#959da5}.upload-from{font-size:7px}"]
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
                        template: "<div class=\"gd-drag-n-drop-wrap\" id=\"gd-dropZone\" gdDnd (close)=\"onCloseUpload()\" (click)=\"close($event)\">\n  <div class=\"gd-drag-n-drop-icon\">\n    <fa-icon [icon]=\"['fas','cloud-download-alt']\" size=\"5x\"></fa-icon>\n  </div>\n  <h2>Drag &amp; Drop your files here</h2> \n  <h4>OR</h4> \n  <div class=\"gd-drag-n-drop-buttons\"> \n    <label class=\"btn btn-primary\"> \n      <fa-icon [icon]=\"['fas','file']\"></fa-icon>\n      SELECT FILE \n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      </label>\n  </div>\n</div>\n",
                        styles: [".gd-drag-n-drop-wrap{border:2px dashed #ccc;background-color:#f8f8f8;text-align:center;cursor:default;position:absolute;width:983px;height:626px;left:2px;display:flex;align-content:center;flex-direction:column;justify-content:center;opacity:.9;z-index:1}.gd-drag-n-drop-wrap h2{color:#959da5;margin:5px 0;font-size:15px;font-weight:300}.gd-drag-n-drop-wrap h4{color:#cacaca;font-weight:300;font-size:12px;margin:10px 0 15px}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-drag-n-drop-buttons i{margin-right:5px}.gd-drag-n-drop-buttons .btn{width:134px;height:35px;margin:0 10px;font-size:12px;font-weight:400}.gd-drag-n-drop-wrap.hover{background:#ddd;border-color:#aaa}"]
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
            this.close = new core.EventEmitter();
            this.open = new core.EventEmitter();
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
                this.open.emit(true);
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
                this.close.emit(true);
                this.open.emit(false);
            }
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
            close: [{ type: core.Output }],
            open: [{ type: core.Output }],
            isBackground: [{ type: core.Input }],
            background: [{ type: core.HostBinding, args: ['style.background',] }],
            onDragOver: [{ type: core.HostListener, args: ['dragover', ['$event'],] }],
            onDragLeave: [{ type: core.HostListener, args: ['dragleave', ['$event'],] }],
            onDrop: [{ type: core.HostListener, args: ['drop', ['$event'],] }]
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
            this._observer.next(page);
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
    var SelectComponent = /** @class */ (function () {
        function SelectComponent() {
            this.disabled = false;
            this.selected = new core.EventEmitter();
            this.isOpen = false;
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
         * @return {?}
         */
        SelectComponent.prototype.toggle = /**
         * @return {?}
         */
        function () {
            if (!this.disabled) {
                this.isOpen = !this.isOpen;
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        SelectComponent.prototype.select = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.selected.emit(value);
            this.close();
        };
        SelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-select',
                        template: "<div class=\"select\">\n  <span class=\"selected-value\" gdDisabledCursor [dis]=\"disabled\" (click)=\"toggle()\">{{showSelected}}%</span>\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\" (click)=\"toggle()\"></span>\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\n    <div *ngFor=\"let option of options\">\n      <div *ngIf=\"!option.separator\" (click)=\"select(option.value)\" class=\"option\">{{option.name}}</div>\n      <div *ngIf=\"option.separator\" role=\"separator\" class=\"dropdown-menu-separator\"></div>\n    </div>\n  </div>\n</div>\n",
                        styles: [".select{min-width:50px;color:#959da5}.selected-value{font-size:14px;cursor:pointer}.nav-caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent;cursor:pointer}.dropdown-menu{position:absolute;top:49px;z-index:1000;float:left;min-width:160px;padding:5px 0;list-style:none;font-size:13px;text-align:left;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box}.dropdown-menu .option{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;white-space:nowrap;cursor:pointer}.dropdown-menu-separator{height:1px;margin:8px 0;overflow:hidden;background-color:#e5e5e5;padding:0!important}"]
                    }] }
        ];
        /** @nocollapse */
        SelectComponent.ctorParameters = function () { return []; };
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
            this.cursor = this.dis ? 'not-allowed' : 'pointer';
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
            cursor: [{ type: core.HostBinding, args: ['style.cursor',] }]
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
            //windowObject.document.close();
            windowObject.focus();
            windowObject.print();
            // windowObject.close();
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
                        styles: [".gd-password-wrap{position:relative;margin-left:-18px;margin-top:118px}.gd-password-wrap>input{padding-left:12px;margin-left:35px;width:454px;height:32px;color:#585858}.gd-password-submit{position:absolute;top:0;color:#fff;background-color:#3e4d59;padding:7px 16px 6px;font-size:12px;cursor:pointer}.gd-password-error{position:absolute;top:38px;left:35px;color:red}@media (max-width:1025px){.gd-password-wrap>input{width:50%}}"]
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
    var $$4 = jquery;
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
        ViewportService];
    var CommonComponentsModule = /** @class */ (function () {
        function CommonComponentsModule() {
            fontawesomeSvgCore.library.add(freeSolidSvgIcons.fas, freeRegularSvgIcons.far);
        }
        CommonComponentsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, angularFontawesome.FontAwesomeModule],
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
        CommonComponentsModule.ctorParameters = function () { return []; };
        return CommonComponentsModule;
    }());

    exports.Api = Api;
    exports.BrowseFilesModalComponent = BrowseFilesModalComponent;
    exports.ButtonComponent = ButtonComponent;
    exports.ChoiceButtonComponent = ChoiceButtonComponent;
    exports.CommonComponentsModule = CommonComponentsModule;
    exports.CommonModals = CommonModals;
    exports.ConfigService = ConfigService;
    exports.DisabledCursorDirective = DisabledCursorDirective;
    exports.DndDirective = DndDirective;
    exports.DocumentComponent = DocumentComponent;
    exports.ErrorInterceptorService = ErrorInterceptorService;
    exports.ErrorModalComponent = ErrorModalComponent;
    exports.ExceptionMessageService = ExceptionMessageService;
    exports.FileCredentials = FileCredentials;
    exports.FileDescription = FileDescription;
    exports.FileModel = FileModel;
    exports.FileService = FileService;
    exports.FileUtil = FileUtil;
    exports.HighlightSearchPipe = HighlightSearchPipe;
    exports.HttpError = HttpError;
    exports.InitStateComponent = InitStateComponent;
    exports.LogoComponent = LogoComponent;
    exports.ModalComponent = ModalComponent;
    exports.ModalService = ModalService;
    exports.NavigateService = NavigateService;
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
    exports.ScrollableDirective = ScrollableDirective;
    exports.SearchComponent = SearchComponent;
    exports.SearchService = SearchService;
    exports.SearchableDirective = SearchableDirective;
    exports.SelectComponent = SelectComponent;
    exports.TooltipComponent = TooltipComponent;
    exports.TopToolbarComponent = TopToolbarComponent;
    exports.UploadFileZoneComponent = UploadFileZoneComponent;
    exports.UploadFilesService = UploadFilesService;
    exports.ViewportService = ViewportService;
    exports.WindowService = WindowService;
    exports.ZoomDirective = ZoomDirective;
    exports.ZoomService = ZoomService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=groupdocs.examples.angular-common-components.umd.js.map
