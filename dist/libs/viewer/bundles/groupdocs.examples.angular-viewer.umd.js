(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('@angular/common/http'), require('@groupdocs.examples.angular/common-components'), require('rxjs'), require('@fortawesome/angular-fontawesome')) :
    typeof define === 'function' && define.amd ? define('@groupdocs.examples.angular/viewer', ['exports', '@angular/platform-browser', '@angular/core', '@angular/common/http', '@groupdocs.examples.angular/common-components', 'rxjs', '@fortawesome/angular-fontawesome'], factory) :
    (global = global || self, factory((global.groupdocs = global.groupdocs || {}, global.groupdocs.examples = global.groupdocs.examples || {}, global.groupdocs.examples.angular = global.groupdocs.examples.angular || {}, global.groupdocs.examples.angular.viewer = {}), global.ng.platformBrowser, global.ng.core, global.ng.common.http, global.commonComponents, global.rxjs, global.angularFontawesome));
}(this, function (exports, platformBrowser, core, http, commonComponents, rxjs, angularFontawesome) { 'use strict';

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
    var ViewerService = /** @class */ (function () {
        function ViewerService(_http, _config) {
            this._http = _http;
            this._config = _config;
        }
        /**
         * @param {?} path
         * @return {?}
         */
        ViewerService.prototype.loadFiles = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.LOAD_FILE_TREE, { 'path': path }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        ViewerService.prototype.loadFile = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.LOAD_DOCUMENT_DESCRIPTION, credentials, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} file
         * @param {?} url
         * @param {?} rewrite
         * @return {?}
         */
        ViewerService.prototype.upload = /**
         * @param {?} file
         * @param {?} url
         * @param {?} rewrite
         * @return {?}
         */
        function (file, url, rewrite) {
            /** @type {?} */
            var formData = new FormData();
            formData.append("file", file);
            formData.append('rewrite', String(rewrite));
            if (url) {
                formData.append("url", url);
            }
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.UPLOAD_DOCUMENTS, formData);
        };
        /**
         * @param {?} credentials
         * @param {?} page
         * @return {?}
         */
        ViewerService.prototype.loadPage = /**
         * @param {?} credentials
         * @param {?} page
         * @return {?}
         */
        function (credentials, page) {
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.LOAD_DOCUMENT_PAGE, {
                'guid': credentials.guid,
                'password': credentials.password,
                'page': page
            }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @param {?} angle
         * @param {?} page
         * @return {?}
         */
        ViewerService.prototype.rotate = /**
         * @param {?} credentials
         * @param {?} angle
         * @param {?} page
         * @return {?}
         */
        function (credentials, angle, page) {
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.ROTATE_DOCUMENT_PAGE, {
                'guid': credentials.guid,
                'password': credentials.password,
                'pages': [page],
                'angle': angle
            }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        ViewerService.prototype.getDownloadUrl = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._config.getViewerApiEndpoint() + commonComponents.Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        ViewerService.prototype.loadPrint = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.LOAD_PRINT, {
                'guid': credentials.guid,
                'password': credentials.password,
            }, commonComponents.Api.httpOptionsJson);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        ViewerService.prototype.loadPrintPdf = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.LOAD_PRINT_PDF, {
                'guid': credentials.guid,
                'password': credentials.password,
            }, commonComponents.Api.httpOptionsJsonResponseTypeBlob);
        };
        /**
         * @param {?} credentials
         * @return {?}
         */
        ViewerService.prototype.loadThumbnails = /**
         * @param {?} credentials
         * @return {?}
         */
        function (credentials) {
            return this._http.post(this._config.getViewerApiEndpoint() + commonComponents.Api.LOAD_THUMBNAILS, {
                'guid': credentials.guid,
                'password': credentials.password,
            }, commonComponents.Api.httpOptionsJson);
        };
        ViewerService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ViewerService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ ViewerService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ViewerService_Factory() { return new ViewerService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: ViewerService, providedIn: "root" });
        return ViewerService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ViewerConfig = /** @class */ (function () {
        function ViewerConfig() {
        }
        return ViewerConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ViewerConfigService = /** @class */ (function () {
        function ViewerConfigService(_http, _config) {
            this._http = _http;
            this._config = _config;
            this._viewerConfig = new rxjs.BehaviorSubject(new ViewerConfig());
            this._updatedConfig = this._viewerConfig.asObservable();
        }
        Object.defineProperty(ViewerConfigService.prototype, "updatedConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this._updatedConfig;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ViewerConfigService.prototype.load = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                /** @type {?} */
                var configEndpoint = _this._config.getConfigEndpoint(commonComponents.Api.VIEWER_APP);
                _this._http.get(configEndpoint, commonComponents.Api.httpOptionsJson).toPromise().then((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    /** @type {?} */
                    var viewerConfig = (/** @type {?} */ (response));
                    _this._viewerConfig.next(viewerConfig);
                    resolve();
                })).catch((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    reject("Could not load viewer config: " + JSON.stringify(response));
                }));
            }));
        };
        ViewerConfigService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ViewerConfigService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: commonComponents.ConfigService }
        ]; };
        /** @nocollapse */ ViewerConfigService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ViewerConfigService_Factory() { return new ViewerConfigService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(commonComponents.ConfigService)); }, token: ViewerConfigService, providedIn: "root" });
        return ViewerConfigService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            this.browseFilesModal = commonComponents.CommonModals.BrowseFiles;
            this.showSearch = false;
            this._zoom = 100;
            //@ViewChildren('docPanel') docPanelComponent: QueryList<ElementRef>;
            this.fileWasDropped = false;
            configService.updatedConfig.subscribe((/**
             * @param {?} viewerConfig
             * @return {?}
             */
            function (viewerConfig) {
                _this.viewerConfig = viewerConfig;
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
                        _this._viewerService.upload(uploads.item(i), '', _this.viewerConfig.rewrite).subscribe((/**
                         * @param {?} obj
                         * @return {?}
                         */
                        function (obj) {
                            _this.fileWasDropped ? _this.selectFile(obj.guid, '', '') : _this.selectDir('');
                        }));
                    }
                }
            }));
            pagePreloadService.checkPreload.subscribe((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                if (_this.viewerConfig.preloadPageCount !== 0) {
                    for (var i = page; i < page + 2; i++) {
                        if (i > 0 && i <= _this.countPages && !_this.file.pages[i - 1].data) {
                            _this.preloadPages(i, i);
                        }
                    }
                }
            }));
            passwordService.passChange.subscribe((/**
             * @param {?} pass
             * @return {?}
             */
            function (pass) {
                _this.selectFile(_this.credentials.guid, pass, commonComponents.CommonModals.PasswordRequired);
            }));
            this.isDesktop = _windowService.isDesktop();
            _windowService.onResize.subscribe((/**
             * @param {?} w
             * @return {?}
             */
            function (w) {
                _this.isDesktop = _windowService.isDesktop();
                _this.refreshZoom();
            }));
        }
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (this.viewerConfig.defaultDocument !== "") {
                this.isLoading = true;
                this.selectFile(this.viewerConfig.defaultDocument, "", "");
            }
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.ngAfterViewInit = /**
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
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.rewrite : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "zoomConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.zoom : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "pageSelectorConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.pageSelector : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "searchConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.search : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "thumbnailsConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.thumbnails : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "rotateConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.rotate : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "downloadConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.download : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "uploadConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.upload : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "printConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.print : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "browseConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.browse : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "htmlModeConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.htmlMode : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "saveRotateStateConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.saveRotateState : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "enableRightClickConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this.viewerConfig ? this.viewerConfig.enableRightClick : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewerAppComponent.prototype, "currentPage", {
            get: /**
             * @return {?}
             */
            function () {
                return this._navigateService.currentPage;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} id
         * @return {?}
         */
        ViewerAppComponent.prototype.openModal = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this._modalService.open(id);
        };
        /**
         * @param {?} id
         * @return {?}
         */
        ViewerAppComponent.prototype.closeModal = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this._modalService.close(id);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        ViewerAppComponent.prototype.selectDir = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this._viewerService.loadFiles($event).subscribe((/**
             * @param {?} files
             * @return {?}
             */
            function (files) { return _this.files = files || []; }));
        };
        /**
         * @param {?} $event
         * @param {?} password
         * @param {?} modalId
         * @return {?}
         */
        ViewerAppComponent.prototype.selectFile = /**
         * @param {?} $event
         * @param {?} password
         * @param {?} modalId
         * @return {?}
         */
        function ($event, password, modalId) {
            var _this = this;
            this.credentials = { guid: $event, password: password };
            this._viewerService.loadFile(this.credentials).subscribe((/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                _this.file = file;
                _this.formatDisabled = !_this.file;
                if (file) {
                    if (file.pages && file.pages[0]) {
                        _this._pageHeight = file.pages[0].height;
                        _this._pageWidth = file.pages[0].width;
                        _this.options = _this.zoomOptions();
                        _this.refreshZoom();
                    }
                    /** @type {?} */
                    var preloadPageCount = _this.viewerConfig.preloadPageCount;
                    /** @type {?} */
                    var countPages = file.pages ? file.pages.length : 0;
                    if (preloadPageCount > 0) {
                        _this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                    }
                    _this._navigateService.countPages = countPages;
                    _this._navigateService.currentPage = 1;
                    _this.countPages = countPages;
                }
            }));
            if (modalId) {
                this._modalService.close(modalId);
            }
            this.clearData();
        };
        /**
         * @param {?} start
         * @param {?} end
         * @return {?}
         */
        ViewerAppComponent.prototype.preloadPages = /**
         * @param {?} start
         * @param {?} end
         * @return {?}
         */
        function (start, end) {
            var _this = this;
            var _loop_1 = function (i) {
                this_1._viewerService.loadPage(this_1.credentials, i).subscribe((/**
                 * @param {?} page
                 * @return {?}
                 */
                function (page) {
                    _this.file.pages[i - 1] = page;
                }));
            };
            var this_1 = this;
            for (var i = start; i <= end; i++) {
                _loop_1(i);
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        ViewerAppComponent.prototype.upload = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            this._viewerService.upload(null, $event, this.rewriteConfig).subscribe((/**
             * @return {?}
             */
            function () {
                _this.selectDir('');
            }));
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.nextPage = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            this._navigateService.nextPage();
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.prevPage = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            this._navigateService.prevPage();
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.toLastPage = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            this._navigateService.toLastPage();
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.toFirstPage = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            this._navigateService.toFirstPage();
        };
        /**
         * @param {?} page
         * @return {?}
         */
        ViewerAppComponent.prototype.navigateToPage = /**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            if (this.formatDisabled)
                return;
            this._navigateService.navigateTo(page);
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.zoomIn = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            if (this._zoom < 490) {
                this.zoom = this._zoom + 10;
            }
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.zoomOut = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            if (this._zoom > 30) {
                this.zoom = this._zoom - 10;
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        ViewerAppComponent.prototype.fileDropped = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.fileWasDropped = $event;
        };
        /**
         * @private
         * @param {?} pt
         * @return {?}
         */
        ViewerAppComponent.prototype.ptToPx = /**
         * @private
         * @param {?} pt
         * @return {?}
         */
        function (pt) {
            //pt * 96 / 72 = px.
            return pt * 96 / 72;
        };
        /**
         * @private
         * @return {?}
         */
        ViewerAppComponent.prototype.getFitToWidth = /**
         * @private
         * @return {?}
         */
        function () {
            // Images and Excel-related files receiving dimensions in px from server
            /** @type {?} */
            var pageWidth = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageWidth : this.ptToPx(this._pageWidth);
            /** @type {?} */
            var pageHeight = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageHeight : this.ptToPx(this._pageHeight);
            /** @type {?} */
            var offsetWidth = pageWidth ? pageWidth : window.innerWidth;
            return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / window.innerWidth) : Math.round(window.innerWidth * 100 / offsetWidth);
        };
        /**
         * @private
         * @return {?}
         */
        ViewerAppComponent.prototype.getFitToHeight = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var pageWidth = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageWidth : this.ptToPx(this._pageWidth);
            /** @type {?} */
            var pageHeight = this.formatIcon && (this.formatIcon === "file-excel" || this.formatIcon === "file-image") ? this._pageHeight : this.ptToPx(this._pageHeight);
            /** @type {?} */
            var windowHeight = (pageHeight > pageWidth) ? window.innerHeight - 100 : window.innerHeight + 100;
            /** @type {?} */
            var offsetHeight = pageHeight ? pageHeight : windowHeight;
            return (pageHeight > pageWidth) ? Math.round(windowHeight * 100 / offsetHeight) : Math.round(offsetHeight * 100 / windowHeight);
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.zoomOptions = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var width = this.getFitToWidth();
            /** @type {?} */
            var height = this.getFitToHeight();
            return this._zoomService.zoomOptions(width, height);
        };
        Object.defineProperty(ViewerAppComponent.prototype, "zoom", {
            get: /**
             * @return {?}
             */
            function () {
                return this._zoom;
            },
            set: /**
             * @param {?} zoom
             * @return {?}
             */
            function (zoom) {
                this._zoom = zoom;
                this._zoomService.changeZoom(this._zoom);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} $event
         * @return {?}
         */
        ViewerAppComponent.prototype.selectZoom = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.zoom = $event.value;
        };
        /**
         * @param {?} deg
         * @return {?}
         */
        ViewerAppComponent.prototype.rotate = /**
         * @param {?} deg
         * @return {?}
         */
        function (deg) {
            var _this = this;
            if (this.formatDisabled)
                return;
            /** @type {?} */
            var pageNumber = this._navigateService.currentPage;
            if (this.saveRotateStateConfig && this.file) {
                this._viewerService.rotate(this.credentials, deg, pageNumber).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    var e_1, _a;
                    try {
                        for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                            var page = data_1_1.value;
                            /** @type {?} */
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
                }));
            }
            else {
                /** @type {?} */
                var pageModel = this.file.pages[pageNumber - 1];
                if (this.file && this.file.pages && pageModel) {
                    /** @type {?} */
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
        /**
         * @private
         * @param {?} page
         * @param {?} angle
         * @return {?}
         */
        ViewerAppComponent.prototype.changeAngle = /**
         * @private
         * @param {?} page
         * @param {?} angle
         * @return {?}
         */
        function (page, angle) {
            page.angle = angle;
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.downloadFile = /**
         * @return {?}
         */
        function () {
            if (this.formatDisabled)
                return;
            window.location.assign(this._viewerService.getDownloadUrl(this.credentials));
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.printFile = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.formatDisabled)
                return;
            if (this.viewerConfig.preloadPageCount !== 0) {
                if (commonComponents.FileUtil.find(this.file.guid, false).format === "Portable Document Format") {
                    this._viewerService.loadPrintPdf(this.credentials).subscribe((/**
                     * @param {?} blob
                     * @return {?}
                     */
                    function (blob) {
                        /** @type {?} */
                        var file = new Blob([blob], { type: 'application/pdf' });
                        _this._renderPrintService.changeBlob(file);
                    }));
                }
                else {
                    this._viewerService.loadPrint(this.credentials).subscribe((/**
                     * @param {?} data
                     * @return {?}
                     */
                    function (data) {
                        _this.file.pages = data.pages;
                        _this._renderPrintService.changePages(_this.file.pages);
                    }));
                }
            }
            else {
                this._renderPrintService.changePages(this.file.pages);
            }
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.openThumbnails = /**
         * @return {?}
         */
        function () {
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
                this._viewerService.loadThumbnails(this.credentials).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    _this.file.pages = data.pages;
                    _this.showThumbnails = true;
                }));
            }
        };
        /**
         * @private
         * @return {?}
         */
        ViewerAppComponent.prototype.clearData = /**
         * @private
         * @return {?}
         */
        function () {
            var e_2, _a;
            if (!this.file || !this.file.pages) {
                return;
            }
            try {
                for (var _b = __values(this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
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
        /**
         * @param {?} $event
         * @return {?}
         */
        ViewerAppComponent.prototype.onRightClick = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            return this.enableRightClickConfig;
        };
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.openSearch = /**
         * @return {?}
         */
        function () {
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
        // onPinchIn($event){
        //   this.zoomOut();
        // }
        // onPinchOut($event){
        //   this.zoomIn();
        // }
        /**
         * @private
         * @return {?}
         */
        ViewerAppComponent.prototype.refreshZoom = 
        // onPinchIn($event){
        //   this.zoomOut();
        // }
        // onPinchOut($event){
        //   this.zoomIn();
        // }
        /**
         * @private
         * @return {?}
         */
        function () {
            this.formatIcon = this.file ? commonComponents.FileUtil.find(this.file.guid, false).icon : null;
            this.zoom = this._windowService.isDesktop() ? 100 : this.getFitToWidth();
        };
        ViewerAppComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-viewer',
                        template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'viewer'\" icon=\"eye\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-select class=\"mobile-hide\" [disabled]=\"formatDisabled\" [options]=\"options\" (selected)=\"selectZoom($event)\"\n                 [showSelected]=\"{ name: zoom+'%', value : zoom}\" *ngIf=\"zoomConfig\" ></gd-select>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"\n                 *ngIf=\"zoomConfig\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\"\n                 (click)=\"zoomOut()\" *ngIf=\"zoomConfig\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-left'\" [tooltip]=\"'First Page'\"\n                 (click)=\"toFirstPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" [tooltip]=\"'Previous Page'\"\n                 (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <div class=\"current-page-number\" [ngClass]=\"{'active': !formatDisabled}\">{{currentPage}}/{{countPages}}</div>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" [tooltip]=\"'Next Page'\"\n                 (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'angle-double-right'\" [tooltip]=\"'Last Page'\"\n                 (click)=\"toLastPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Rotate CCW'\" (click)=\"rotate(-90)\"\n                 *ngIf=\"rotateConfig\" ></gd-button>\n      <gd-button class=\"mobile-hide\" [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Rotate CW'\" (click)=\"rotate(90)\"\n                 *ngIf=\"rotateConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                 (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                 *ngIf=\"printConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search'\" [tooltip]=\"'Search'\" (click)=\"openSearch()\"\n                 *ngIf=\"searchConfig\" ></gd-button>\n      <gd-search (hidePanel)=\"showSearch = !$event\" *ngIf=\"showSearch\" ></gd-search>\n\n      <gd-button class=\"thumbnails-button\" [disabled]=\"formatDisabled\" [icon]=\"'th-large'\" [tooltip]=\"'Thumbnails'\"\n                 (click)=\"openThumbnails()\" *ngIf=\"thumbnailsConfig && isDesktop\"></gd-button>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"doc-panel\" *ngIf=\"file\" #docPanel>\n    <gd-thumbnails *ngIf=\"showThumbnails\" [pages]=\"file.pages\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\"></gd-thumbnails>\n\n    <gd-document class=\"gd-document\" *ngIf=\"file && formatIcon !== 'file-excel'\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-document>\n    <gd-excel-document class=\"gd-document\" *ngIf=\"file && formatIcon === 'file-excel'\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-excel-document>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n    Or drop file here\n  </gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.gd-document,/deep/ .document{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important}.current-page-number{margin-left:7px;font-size:14px;color:#959da5;width:37px;height:37px;line-height:37px;text-align:center}.current-page-number.active{color:#fff}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:flex;height:calc(100vh - 60px);flex-direction:row}.thumbnails-button{position:absolute;right:3px}.top-panel{display:flex;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}::ng-deep .tools .button,::ng-deep .tools .nav-caret,::ng-deep .tools .selected-value{color:#fff!important}::ng-deep .tools .button.inactive,::ng-deep .tools .nav-caret.inactive,::ng-deep .tools .selected-value.inactive{color:#959da5!important}::ng-deep .tools .button{flex-flow:column}::ng-deep .tools .dropdown-menu .option{color:#6e6e6e!important}::ng-deep .tools .dropdown-menu .option:hover{background-color:#4b566c!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}::ng-deep .tools .select{width:65px;height:37px;margin-left:7px;line-height:37px;text-align:center}@media (max-width:1037px){.current-page-number,.mobile-hide{display:none}::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .tools .gd-nav-search-btn .icon-button{height:37px;width:37px}::ng-deep .tools .gd-nav-search-btn .button{font-size:14px}}"]
                    }] }
        ];
        /** @nocollapse */
        ViewerAppComponent.ctorParameters = function () { return [
            { type: ViewerService },
            { type: commonComponents.ModalService },
            { type: ViewerConfigService },
            { type: commonComponents.UploadFilesService },
            { type: commonComponents.NavigateService },
            { type: commonComponents.ZoomService },
            { type: commonComponents.PagePreloadService },
            { type: commonComponents.RenderPrintService },
            { type: commonComponents.PasswordService },
            { type: commonComponents.WindowService },
            { type: commonComponents.LoadingMaskService }
        ]; };
        return ViewerAppComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ThumbnailsComponent = /** @class */ (function () {
        function ThumbnailsComponent(_navigateService, _zoomService) {
            this._navigateService = _navigateService;
            this._zoomService = _zoomService;
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
            this.pages.forEach((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                page.data = page.data.replace(/>\s+</g, '><').replace(/\uFEFF/g, "");
            }));
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
            this._zoomService.changeZoom(this._zoomService.zoom);
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
            /** @type {?} */
            var dataImagePngBase64 = 'data:image/png;base64,';
            if (!this.isHtmlMode) {
                return dataImagePngBase64 + data;
            }
            return dataImagePngBase64;
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
            this._navigateService.navigateTo(pageNumber);
        };
        ThumbnailsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-thumbnails',
                        template: "<div class=\"gd-thumbnails\">\n  <div class=\"gd-thumbnails-panzoom\">\n    <div *ngFor=\"let page of pages\" id=\"gd-thumbnails-page-{{page.number}}\" class=\"gd-page\"\n         (click)=\"openPage(page.number)\" gdRotation [withMargin]=\"false\"\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <div class=\"gd-wrapper\"\n           [style.width.pt]=\"page.width\"\n           [style.height.pt]=\"page.height\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && isHtmlMode\"\n           [innerHTML]=\"page.data | safeHtml\"></div>\n      <div class=\"gd-wrapper\" *ngIf=\"page.data && !isHtmlMode\">\n        <img style=\"width: inherit !important\" class=\"gd-page-image\" [attr.src]=\"imgData(page.data) | safeResourceHtml\"\n             alt/>\n      </div>\n    </div>\n  </div>\n</div>\n",
                        styles: [":host{flex:0 0 300px;background:#f5f5f5;color:#fff;overflow-y:auto;display:block;transition:margin-left .2s;height:100%}.gd-page{width:272px;height:272px;transition:.3s;background-color:#e7e7e7;cursor:pointer;margin:14px 14px 0}.gd-page:hover{background-color:silver}.gd-wrapper{transform:translate(-50%,-50%);left:50%;top:50%;position:relative;background-color:#fff;box-shadow:0 4px 12px -4px rgba(0,0,0,.38)}.gd-wrapper /deep/ img{width:inherit}.gd-thumbnails::-webkit-scrollbar{width:0;background-color:#f5f5f5}.gd-thumbnails-panzoom>.gd-thumbnails-landscape{margin:-134px 0 -1px 12px}.gd-thumbnails .gd-page-image{height:inherit;margin-left:153px!important}.gd-thumbnails-landscape-image{margin:-90px 0 -23px!important}.gd-thumbnails-landscape-image-rotated{margin:126px 0 -3px -104px!important}"]
                    }] }
        ];
        /** @nocollapse */
        ThumbnailsComponent.ctorParameters = function () { return [
            { type: commonComponents.NavigateService },
            { type: commonComponents.ZoomService }
        ]; };
        ThumbnailsComponent.propDecorators = {
            pages: [{ type: core.Input }],
            guid: [{ type: core.Input }],
            mode: [{ type: core.Input }],
            isHtmlMode: [{ type: core.Input }]
        };
        return ThumbnailsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExcelDocumentComponent = /** @class */ (function (_super) {
        __extends(ExcelDocumentComponent, _super);
        function ExcelDocumentComponent(_elementRef, zoomService, windowService) {
            return _super.call(this, _elementRef, zoomService, windowService) || this;
        }
        /**
         * @return {?}
         */
        ExcelDocumentComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.currentPageNo = 1;
        };
        /**
         * @param {?} number
         * @return {?}
         */
        ExcelDocumentComponent.prototype.selectSheet = /**
         * @param {?} number
         * @return {?}
         */
        function (number) {
            this.currentPageNo = number;
        };
        ExcelDocumentComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-excel-document',
                        template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\">\n  <div class=\"panzoom\">\n    <div [ngClass]=\"'page'\" *ngFor=\"let page of file?.pages\"\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\">\n      <gd-excel-page *ngIf=\"currentPageNo == page.number\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-excel-page>\n    </div>\n  </div>\n</div>\n<div class=\"sheets\">\n  <div *ngFor=\"let page of file?.pages\">\n    <gd-button [icon]=\"'eye'\" [ngClass]=\"{'active': currentPageNo == page.number }\" (click)=\"selectSheet(page.number)\">Sheet {{page.number}}</gd-button>\n  </div>\n</div>\n",
                        // @TODO: this is replicated from base component until styles inheritance supported added to angular
                        providers: [commonComponents.ZoomService],
                        viewProviders: [commonComponents.ZoomDirective],
                        styles: [":host{overflow:scroll;width:100%}.document{width:100%;height:calc(100% - 40px);transition:.4s;padding:0;margin:0;position:relative}.sheets{padding-left:12px;display:flex;border-top:1px solid #e7e7e7}.sheets /deep/ gd-button.active .text{background-color:#272727;border-radius:10px;color:#eee}.sheets /deep/ gd-button .text{padding:1px 12px}.sheets /deep/ gd-button fa-icon{display:none}.page{position:relative;display:inline-block;background-color:#fff;transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:50% 50% 0;display:flex;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}@media (max-width:1037px){.document{overflow-x:auto!important}.panzoom{flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
                    }] }
        ];
        /** @nocollapse */
        ExcelDocumentComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: commonComponents.ZoomService },
            { type: commonComponents.WindowService }
        ]; };
        return ExcelDocumentComponent;
    }(commonComponents.DocumentComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExcelPageService = /** @class */ (function () {
        function ExcelPageService() {
        }
        /**
         * @param {?} data
         * @return {?}
         */
        ExcelPageService.prototype.getUpdatedPage = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var doc = new DOMParser().parseFromString(data, "text/html");
            /** @type {?} */
            var table = doc.querySelector('table');
            /** @type {?} */
            var numCellsInFirstRow = 0;
            /** @type {?} */
            var cellsFromFirstRow = doc.querySelectorAll('table > tbody > tr:first-child td');
            cellsFromFirstRow.forEach((/**
             * @param {?} elm
             * @return {?}
             */
            function (elm) {
                numCellsInFirstRow += elm.attributes['colspan'] ? parseInt(elm.attributes['colspan'].value, 10) : 1;
            }));
            /** @type {?} */
            var newTable = this.createHeader(numCellsInFirstRow, table);
            doc.querySelector('table').replaceWith(newTable);
            return new XMLSerializer().serializeToString(doc);
        };
        /**
         * @param {?} numCols
         * @param {?} table
         * @return {?}
         */
        ExcelPageService.prototype.createHeader = /**
         * @param {?} numCols
         * @param {?} table
         * @return {?}
         */
        function (numCols, table) {
            /** @type {?} */
            var header = document.createElement('thead');
            header.append(document.createElement('tr'));
            for (var i = 0; i < numCols; ++i) {
                /** @type {?} */
                var th = document.createElement('th');
                th.innerText = this.colName(i);
                header.querySelector("tr").append(th);
            }
            table.prepend(header);
            /** @type {?} */
            var cnt = 0;
            table.querySelectorAll('tr').forEach((/**
             * @param {?} row
             * @return {?}
             */
            function (row) {
                /** @type {?} */
                var td = document.createElement('td');
                if (cnt !== 0) {
                    td.innerText = cnt.toString();
                    row.prepend(td);
                }
                else {
                    row.prepend(td);
                }
                cnt++;
            }));
            return table;
        };
        /**
         * @param {?} n
         * @return {?}
         */
        ExcelPageService.prototype.colName = /**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            /** @type {?} */
            var ordA = 'a'.charCodeAt(0);
            /** @type {?} */
            var ordZ = 'z'.charCodeAt(0);
            /** @type {?} */
            var len = ordZ - ordA + 1;
            /** @type {?} */
            var s = "";
            while (n >= 0) {
                s = String.fromCharCode(n % len + ordA) + s;
                n = Math.floor(n / len) - 1;
            }
            return s;
        };
        ExcelPageService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ExcelPageService.ctorParameters = function () { return []; };
        /** @nocollapse */ ExcelPageService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ExcelPageService_Factory() { return new ExcelPageService(); }, token: ExcelPageService, providedIn: "root" });
        return ExcelPageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExcelPageComponent = /** @class */ (function () {
        function ExcelPageComponent(_excelPageService) {
            this._excelPageService = _excelPageService;
        }
        /**
         * @return {?}
         */
        ExcelPageComponent.prototype.ngOnInit = /**
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
        ExcelPageComponent.prototype.ngOnChanges = /**
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
            this.data = this._excelPageService.getUpdatedPage(this.data);
        };
        ExcelPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-excel-page',
                        template: "<div id=\"page-{{number}}\">\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\" [contentEditable]=\"(editable) ? true : false\"></div>\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\n       alt=\"\"\n       *ngIf=\"data && !isHtml\">\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\">\n    <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n    &nbsp;Loading... Please wait.\n  </div>\n</div>\n",
                        styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper div{width:100%}/deep/ .gd-highlight{background-color:#ff0}/deep/ .gd-highlight-select{background-color:#ff9b00}/deep/ th{color:#959da5;background-color:#e7e7e7;font-weight:unset;border:1px solid #c4c4c4!important;text-transform:uppercase}/deep/ td{border:1px solid #c4c4c4!important;vertical-align:middle!important}/deep/ table{table-layout:auto!important}/deep/ tr td:first-child{color:#959da5;background-color:#e7e7e7;font-weight:unset;width:4%;text-align:center}.gd-page-image{height:100%!important;width:100%!important}"]
                    }] }
        ];
        /** @nocollapse */
        ExcelPageComponent.ctorParameters = function () { return [
            { type: ExcelPageService }
        ]; };
        ExcelPageComponent.propDecorators = {
            angle: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            number: [{ type: core.Input }],
            data: [{ type: core.Input }],
            isHtml: [{ type: core.Input }],
            editable: [{ type: core.Input }]
        };
        return ExcelPageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} viewerConfigService
     * @return {?}
     */
    function initializeApp(viewerConfigService) {
        /** @type {?} */
        var result = (/**
         * @return {?}
         */
        function () { return viewerConfigService.load(); });
        return result;
    }
    var ViewerModule = /** @class */ (function () {
        function ViewerModule() {
        }
        /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        ViewerModule.forRoot = /**
         * @param {?} apiEndpoint
         * @return {?}
         */
        function (apiEndpoint) {
            commonComponents.Api.DEFAULT_API_ENDPOINT = apiEndpoint;
            return {
                ngModule: ViewerModule
            };
        };
        ViewerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            ViewerAppComponent,
                            ThumbnailsComponent,
                            ExcelDocumentComponent,
                            ExcelPageComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
                            commonComponents.CommonComponentsModule,
                            http.HttpClientModule,
                            angularFontawesome.FontAwesomeModule
                        ],
                        exports: [
                            ViewerAppComponent,
                            ThumbnailsComponent,
                            ExcelDocumentComponent,
                            ExcelPageComponent,
                            commonComponents.CommonComponentsModule
                        ],
                        providers: [
                            ViewerService,
                            commonComponents.ConfigService,
                            ViewerConfigService,
                            {
                                provide: http.HTTP_INTERCEPTORS,
                                useClass: commonComponents.ErrorInterceptorService,
                                multi: true
                            },
                            {
                                provide: core.APP_INITIALIZER,
                                useFactory: initializeApp,
                                deps: [ViewerConfigService], multi: true
                            }
                        ]
                    },] }
        ];
        return ViewerModule;
    }());

    exports.ViewerAppComponent = ViewerAppComponent;
    exports.ViewerConfigService = ViewerConfigService;
    exports.ViewerModule = ViewerModule;
    exports.ViewerService = ViewerService;
    exports.initializeApp = initializeApp;
    exports.ɵa = ThumbnailsComponent;
    exports.ɵb = ExcelDocumentComponent;
    exports.ɵc = ExcelPageComponent;
    exports.ɵd = ExcelPageService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=groupdocs.examples.angular-viewer.umd.js.map
