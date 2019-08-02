(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('@angular/common/http'), require('@groupdocs.examples.angular/common-components'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@groupdocs.examples.angular/viewer', ['exports', '@angular/platform-browser', '@angular/core', '@angular/common/http', '@groupdocs.examples.angular/common-components', 'rxjs'], factory) :
    (global = global || self, factory((global.groupdocs = global.groupdocs || {}, global.groupdocs.examples = global.groupdocs.examples || {}, global.groupdocs.examples.angular = global.groupdocs.examples.angular || {}, global.groupdocs.examples.angular.viewer = {}), global.ng.platformBrowser, global.ng.core, global.ng.common.http, global.commonComponents, global.rxjs));
}(this, function (exports, platformBrowser, core, http, commonComponents, rxjs) { 'use strict';

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
            this.browseFilesModal = commonComponents.CommonModals.BrowseFiles;
            this.showSearch = false;
            this._zoom = 100;
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
                         * @return {?}
                         */
                        function () {
                            _this.selectDir('');
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
            this._modalService.close(modalId);
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
            /** @type {?} */
            var pageWidth = this.ptToPx(this._pageWidth);
            /** @type {?} */
            var pageHeight = this.ptToPx(this._pageHeight);
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
            var pageWidth = this.ptToPx(this._pageWidth);
            /** @type {?} */
            var pageHeight = this.ptToPx(this._pageHeight);
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
            this.zoom = $event;
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
        /**
         * @return {?}
         */
        ViewerAppComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.refreshZoom();
        };
        /**
         * @private
         * @return {?}
         */
        ViewerAppComponent.prototype.refreshZoom = /**
         * @private
         * @return {?}
         */
        function () {
            this.zoom = this._windowService.isDesktop() ? 100 : this.getFitToWidth();
        };
        ViewerAppComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gd-viewer',
                        template: "<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'viewer'\" icon=\"eye\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-select [disabled]=\"formatDisabled\" [options]=\"options\" (selected)=\"selectZoom($event)\"\n                 [showSelected]=\"zoom\" *ngIf=\"zoomConfig\" ></gd-select>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"\n                 *ngIf=\"zoomConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\"\n                 (click)=\"zoomOut()\" *ngIf=\"zoomConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-double-left'\" [tooltip]=\"'First Page'\"\n                 (click)=\"toFirstPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" [tooltip]=\"'Previous Page'\"\n                 (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <div class=\"current-page-number\">{{currentPage}}/{{countPages}}</div>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" [tooltip]=\"'Next Page'\"\n                 (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-double-right'\" [tooltip]=\"'Last Page'\"\n                 (click)=\"toLastPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Rotate CCW'\" (click)=\"rotate(-90)\"\n                 *ngIf=\"rotateConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Rotate CW'\" (click)=\"rotate(90)\"\n                 *ngIf=\"rotateConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                 (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                 *ngIf=\"printConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search'\" [tooltip]=\"'Search'\" (click)=\"openSearch()\"\n                 *ngIf=\"searchConfig\" ></gd-button>\n      <gd-search (hidePanel)=\"showSearch = !$event\" *ngIf=\"showSearch\" ></gd-search>\n\n      <gd-button class=\"thumbnails-button\" [disabled]=\"formatDisabled\" [icon]=\"'th-large'\" [tooltip]=\"'Thumbnails'\"\n                 (click)=\"openThumbnails()\" *ngIf=\"thumbnailsConfig && isDesktop\"></gd-button>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"doc-panel\" *ngIf=\"file\">\n    <gd-thumbnails *ngIf=\"showThumbnails\" [pages]=\"file.pages\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\"></gd-thumbnails>\n\n    <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"htmlModeConfig\"\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-document>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"''\" *ngIf=\"!file\"></gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.current-page-number{margin:0 15px;font-size:14px;color:#959da5}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:flex;height:inherit}.thumbnails-button{position:absolute;right:3px}.gd-document{width:100%;height:100%}.top-panel{display:flex;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}"]
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
            { type: commonComponents.WindowService }
        ]; };
        return ViewerAppComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ThumbnailsComponent = /** @class */ (function () {
        function ThumbnailsComponent(_navigateService) {
            this._navigateService = _navigateService;
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
                        styles: [".gd-thumbnails{z-index:9;padding:10pt;width:200pt;background:#f5f5f5;color:#fff;overflow-y:auto;display:block;transition:margin-left .2s;height:100%}.gd-page{width:190pt;height:190pt;transition:.3s;padding:5pt;background-color:#efefef;border-radius:5px;cursor:pointer}.gd-page:hover{background-color:silver}.gd-wrapper{transform:translate(-50%,-50%);left:50%;top:50%;position:relative;background-color:#fff;box-shadow:0 4px 12px -4px rgba(0,0,0,.38)}.gd-thumbnails::-webkit-scrollbar{width:0;background-color:#f5f5f5}.gd-thumbnails-panzoom>.gd-thumbnails-landscape{margin:-134px 0 -1px 12px}.gd-thumbnails-panzoom .gd-wrapper>div>div>img{width:inherit}.gd-thumbnails .gd-wrapper>img{width:-webkit-fill-available!important;margin:0 20px 0 0!important}.gd-thumbnails .gd-page-image{height:inherit;margin-left:153px!important}.gd-thumbnails-landscape-image{margin:-90px 0 -23px!important}.gd-thumbnails-landscape-image-rotated{margin:126px 0 -3px -104px!important}"]
                    }] }
        ];
        /** @nocollapse */
        ThumbnailsComponent.ctorParameters = function () { return [
            { type: commonComponents.NavigateService }
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
                            ThumbnailsComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
                            commonComponents.CommonComponentsModule,
                            http.HttpClientModule
                        ],
                        exports: [
                            ViewerAppComponent,
                            ThumbnailsComponent,
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

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=groupdocs.examples.angular-viewer.umd.js.map
