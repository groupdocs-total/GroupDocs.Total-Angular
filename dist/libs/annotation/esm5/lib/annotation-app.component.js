/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AnnotationService } from "./annotation.service";
import { AddDynamicComponentService, CommonModals, FileCredentials, Formatting, HostingDynamicComponentService, ModalService, NavigateService, PagePreloadService, PasswordService, TopTabActivatorService, UploadFilesService, Utils, WindowService, ZoomService } from "@groupdocs.examples.angular/common-components";
import { AnnotationType, Position, Dimension } from "./annotation-models";
import { AnnotationComponent } from "./annotation/annotation.component";
import { ActiveAnnotationService } from "./active-annotation.service";
import * as jquery from 'jquery';
import { RemoveAnnotationService } from "./remove-annotation.service";
import { CommentAnnotationService } from "./comment-annotation.service";
import { AnnotationConfigService } from "./annotation-config.service";
/** @type {?} */
var $ = jquery;
var AnnotationAppComponent = /** @class */ (function () {
    function AnnotationAppComponent(_annotationService, _modalService, _navigateService, _tabActivatorService, _hostingComponentsService, _addDynamicComponentService, _activeAnnotationService, _removeAnnotationService, _commentAnnotationService, uploadFilesService, pagePreloadService, passwordService, _windowService, _zoomService, configService) {
        var _this = this;
        this._annotationService = _annotationService;
        this._modalService = _modalService;
        this._navigateService = _navigateService;
        this._tabActivatorService = _tabActivatorService;
        this._hostingComponentsService = _hostingComponentsService;
        this._addDynamicComponentService = _addDynamicComponentService;
        this._activeAnnotationService = _activeAnnotationService;
        this._removeAnnotationService = _removeAnnotationService;
        this._commentAnnotationService = _commentAnnotationService;
        this._windowService = _windowService;
        this._zoomService = _zoomService;
        this.title = 'annotation';
        this.files = [];
        this.browseFilesModal = CommonModals.BrowseFiles;
        this.formatDisabled = !this.file;
        this.annotationTypes = [
            AnnotationType.TEXT,
            AnnotationType.TEXT_STRIKEOUT,
            AnnotationType.TEXT_UNDERLINE,
            AnnotationType.TEXT_REPLACEMENT,
            AnnotationType.TEXT_REDACTION,
            AnnotationType.POLYLINE,
            AnnotationType.ARROW,
            AnnotationType.DISTANCE,
            AnnotationType.AREA,
            AnnotationType.TEXT_FIELD,
            AnnotationType.WATERMARK,
            AnnotationType.POINT,
        ];
        this.annotationTypeFirst = [
            AnnotationType.TEXT,
            AnnotationType.TEXT_UNDERLINE,
            AnnotationType.TEXT_REDACTION,
            AnnotationType.TEXT_REPLACEMENT,
            AnnotationType.TEXT_STRIKEOUT,
        ];
        this.annotationTypeSecond = [
            AnnotationType.POLYLINE,
            AnnotationType.ARROW,
            AnnotationType.DISTANCE,
            AnnotationType.AREA,
            AnnotationType.POINT
        ];
        this.annotationTypeThird = [
            AnnotationType.TEXT_FIELD,
            AnnotationType.WATERMARK,
        ];
        this.countPages = 0;
        this.comments = new Map();
        this._zoom = 100;
        this.fileWasDropped = false;
        this.annotations = new Map();
        configService.updatedConfig.subscribe((/**
         * @param {?} annotationConfig
         * @return {?}
         */
        function (annotationConfig) {
            _this.annotationConfig = annotationConfig;
        }));
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            _this.isDesktop = _windowService.isDesktop();
            if (!_this.isDesktop) {
                _this.refreshZoom();
            }
        }));
        this._activeAnnotationService.activeChange.subscribe((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            if (_this.activeAnnotationId !== id) {
                _this.commentOpenedId = null;
                _this.activeAnnotationId = id;
            }
        }));
        this._commentAnnotationService.commentAnnotation.subscribe((/**
         * @param {?} commentAnnotation
         * @return {?}
         */
        function (commentAnnotation) {
            _this.commentOpenedId = commentAnnotation.id;
            if (!_this.comments.get(_this.commentOpenedId)) {
                _this.comments.set(_this.commentOpenedId, []);
            }
        }));
        this._commentAnnotationService.addCommentObserve.subscribe((/**
         * @param {?} comment
         * @return {?}
         */
        function (comment) {
            _this.comments.get(_this.commentOpenedId).push(comment);
        }));
        this._removeAnnotationService.removeAnnotation.subscribe((/**
         * @param {?} removeAnnotation
         * @return {?}
         */
        function (removeAnnotation) {
            /** @type {?} */
            var componentRef = _this.annotations.get(removeAnnotation.id);
            if (componentRef) {
                componentRef.destroy();
            }
            _this.annotations.delete(removeAnnotation.id);
            if (_this.commentOpenedId === removeAnnotation.id) {
                _this.commentOpenedId = null;
            }
            _this.comments.delete(removeAnnotation.id);
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
                    _this._annotationService.upload(uploads.item(i), '', _this.rewriteConfig).subscribe((/**
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
            if (_this.preloadPageCountConfig !== 0) {
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
            _this.selectFile(_this.credentials.guid, pass, CommonModals.PasswordRequired);
        }));
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            _this.isDesktop = _windowService.isDesktop();
        }));
    }
    /**
     * @return {?}
     */
    AnnotationAppComponent.prototype.getComments = /**
     * @return {?}
     */
    function () {
        return this.comments.get(this.commentOpenedId);
    };
    Object.defineProperty(AnnotationAppComponent.prototype, "rewriteConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.rewrite : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "zoomConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.zoom : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "pageSelectorConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.pageSelector : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "preloadPageCountConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.preloadPageCount : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "downloadConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.download : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "downloadOriginalConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.downloadOriginal : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "downloadAnnotatedConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.downloadAnnotated : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "uploadConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.upload : true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    AnnotationAppComponent.prototype.defaultDocumentConfig = /**
     * @private
     * @return {?}
     */
    function () {
        return this.annotationConfig ? this.annotationConfig.defaultDocument : "";
    };
    Object.defineProperty(AnnotationAppComponent.prototype, "printConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.print : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "browseConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.browse : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "defaultCommentator", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.defaultCommentator : "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "htmlModeConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "enableRightClickConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.enableRightClick : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "textAnnotationConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.textAnnotation : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "areaAnnotationConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.areaAnnotation : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "pointAnnotationConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.pointAnnotation : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "textStrikeoutAnnotationConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.textStrikeoutAnnotation : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "polylineAnnotationConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.polylineAnnotation : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "textFieldAnnotationConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.textFieldAnnotation : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "watermarkAnnotationConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.watermarkAnnotation : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "textReplacementAnnotationConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.textReplacementAnnotation : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "arrowAnnotationConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.arrowAnnotation : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "textRedactionAnnotationConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.textRedactionAnnotation : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "textUnderlineAnnotationConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.textUnderlineAnnotation : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnnotationAppComponent.prototype, "distanceAnnotationConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.annotationConfig ? this.annotationConfig.distanceAnnotation : true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AnnotationAppComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var queryString = window.location.search;
        if (queryString) {
            /** @type {?} */
            var urlParams = new URLSearchParams(queryString);
            /** @type {?} */
            var fileRoute = urlParams.get('file');
            if (fileRoute) {
                this.isLoading = true;
                this._annotationService
                    .upload(null, fileRoute, this.rewriteConfig)
                    .subscribe((/**
                 * @param {?} file
                 * @return {?}
                 */
                function (file) {
                    _this.selectDir('');
                    _this.selectFile(file.guid, '', '');
                }));
            }
        }
        if (this.annotationConfig.defaultDocument !== '') {
            this.isLoading = true;
            this.selectFile(this.annotationConfig.defaultDocument, "", "");
        }
    };
    /**
     * @private
     * @param {?} pt
     * @return {?}
     */
    AnnotationAppComponent.prototype.ptToPx = /**
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
    AnnotationAppComponent.prototype.getFitToWidth = /**
     * @private
     * @return {?}
     */
    function () {
        // Images and Excel-related files receiving dimensions in px from server
        /** @type {?} */
        var pageWidth = this.ptToPx(this._pageWidth);
        /** @type {?} */
        var pageHeight = this.ptToPx(this._pageHeight);
        /** @type {?} */
        var offsetWidth = pageWidth ? pageWidth : window.innerWidth;
        return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / window.innerWidth) : Math.round(window.innerWidth * 100 / offsetWidth);
    };
    Object.defineProperty(AnnotationAppComponent.prototype, "zoom", {
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
     * @private
     * @return {?}
     */
    AnnotationAppComponent.prototype.refreshZoom = /**
     * @private
     * @return {?}
     */
    function () {
        this.zoom = this._windowService.isDesktop() ? 100 : this.getFitToWidth();
    };
    /**
     * @return {?}
     */
    AnnotationAppComponent.prototype.zoomIn = /**
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
    AnnotationAppComponent.prototype.zoomOut = /**
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
     * @param {?} id
     * @return {?}
     */
    AnnotationAppComponent.prototype.openModal = /**
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
    AnnotationAppComponent.prototype.closeModal = /**
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
    AnnotationAppComponent.prototype.selectDir = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        this._annotationService.loadFiles($event).subscribe((/**
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
    AnnotationAppComponent.prototype.selectFile = /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @return {?}
     */
    function ($event, password, modalId) {
        var _this = this;
        this.credentials = new FileCredentials($event, password);
        this.file = null;
        this.commentOpenedId = null;
        this._annotationService.loadFile(this.credentials).subscribe((/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            _this.cleanAnnotations();
            _this.file = file;
            _this.formatDisabled = !_this.file;
            if (file) {
                if (!_this.isDesktop && file.pages && file.pages[0]) {
                    _this._pageHeight = file.pages[0].height;
                    _this._pageWidth = file.pages[0].width;
                    _this.refreshZoom();
                }
                /** @type {?} */
                var preloadPageCount = _this.preloadPageCountConfig;
                /** @type {?} */
                var countPages = file.pages ? file.pages.length : 0;
                if (preloadPageCount > 0) {
                    _this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                }
                else {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        var e_1, _a;
                        try {
                            for (var _b = tslib_1.__values(_this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var page = _c.value;
                                _this.importAnnotations(page.annotations ? page.annotations : []);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                    }), 100);
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
    AnnotationAppComponent.prototype.preloadPages = /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (start, end) {
        var _this = this;
        var _loop_1 = function (i) {
            this_1._annotationService.loadPage(this_1.credentials, i).subscribe((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                _this.file.pages[i - 1] = page;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.importAnnotations(page.annotations ? page.annotations : []);
                }), 100);
            }));
        };
        var this_1 = this;
        for (var i = start; i <= end; i++) {
            _loop_1(i);
        }
    };
    /**
     * @private
     * @param {?} annotations
     * @return {?}
     */
    AnnotationAppComponent.prototype.importAnnotations = /**
     * @private
     * @param {?} annotations
     * @return {?}
     */
    function (annotations) {
        var e_2, _a;
        try {
            for (var annotations_1 = tslib_1.__values(annotations), annotations_1_1 = annotations_1.next(); !annotations_1_1.done; annotations_1_1 = annotations_1.next()) {
                var annotation = annotations_1_1.value;
                /** @type {?} */
                var position = new Position(annotation.left, annotation.top);
                /** @type {?} */
                var id = this.addAnnotationComponent(annotation.pageNumber, position, annotation);
                this.comments.set(id, annotation.comments);
                this._activeAnnotationService.changeActive(id);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (annotations_1_1 && !annotations_1_1.done && (_a = annotations_1.return)) _a.call(annotations_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AnnotationAppComponent.prototype.upload = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        this._annotationService.upload(null, $event, this.rewriteConfig).subscribe((/**
         * @return {?}
         */
        function () {
            _this.selectDir('');
        }));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AnnotationAppComponent.prototype.onRightClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        return this.enableRightClickConfig;
    };
    /**
     * @return {?}
     */
    AnnotationAppComponent.prototype.downloadFile = /**
     * @return {?}
     */
    function () {
        if (this.formatDisabled)
            return;
        window.location.assign(this._annotationService.getDownloadUrl(this.credentials));
    };
    /**
     * @return {?}
     */
    AnnotationAppComponent.prototype.annotate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var annotationsData = this.prepareAnnotationsData();
        this._annotationService.annotate(this.credentials, annotationsData, false).subscribe((/**
         * @param {?} ret
         * @return {?}
         */
        function (ret) {
            _this._modalService.open(CommonModals.OperationSuccess);
            _this.selectFile(ret.guid, _this.credentials.password, CommonModals.OperationSuccess);
        }));
    };
    /**
     * @return {?}
     */
    AnnotationAppComponent.prototype.prepareAnnotationsData = /**
     * @return {?}
     */
    function () {
        var e_3, _a;
        /** @type {?} */
        var annotationsData = [];
        try {
            for (var _b = tslib_1.__values(this.annotations.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var annotation = _c.value;
                /** @type {?} */
                var annotationData = ((/** @type {?} */ (annotation.instance))).getAnnotationData();
                annotationData.comments = this.comments.get(annotationData.id);
                annotationsData.push(annotationData);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return annotationsData;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    AnnotationAppComponent.prototype.isVisible = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var supported = !this.file || (this.file && this.file.supportedAnnotations &&
            this.file.supportedAnnotations.find((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                return id === value;
            })));
        return this.getAnnotationTypeConfig(id) && supported;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AnnotationAppComponent.prototype.activeTab = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.activeAnnotationTab && $event === this.activeAnnotationTab) {
            this.activeAnnotationTab = null;
        }
        else {
            this.activeAnnotationTab = $event;
        }
    };
    /**
     * @return {?}
     */
    AnnotationAppComponent.prototype.codesConfigFirst = /**
     * @return {?}
     */
    function () {
        return this.checkConfig(this.annotationTypeFirst);
    };
    /**
     * @return {?}
     */
    AnnotationAppComponent.prototype.codesConfigSecond = /**
     * @return {?}
     */
    function () {
        return this.checkConfig(this.annotationTypeSecond);
    };
    /**
     * @private
     * @param {?} annotationList
     * @return {?}
     */
    AnnotationAppComponent.prototype.checkConfig = /**
     * @private
     * @param {?} annotationList
     * @return {?}
     */
    function (annotationList) {
        var e_4, _a;
        try {
            for (var annotationList_1 = tslib_1.__values(annotationList), annotationList_1_1 = annotationList_1.next(); !annotationList_1_1.done; annotationList_1_1 = annotationList_1.next()) {
                var annotationType = annotationList_1_1.value;
                if (this.getAnnotationTypeConfig(annotationType.id)) {
                    return true;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (annotationList_1_1 && !annotationList_1_1.done && (_a = annotationList_1.return)) _a.call(annotationList_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return false;
    };
    /**
     * @return {?}
     */
    AnnotationAppComponent.prototype.codesConfigThird = /**
     * @return {?}
     */
    function () {
        return this.getAnnotationTypeConfig(AnnotationType.TEXT_FIELD.id) && this.getAnnotationTypeConfig(AnnotationType.WATERMARK.id);
    };
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    AnnotationAppComponent.prototype.getAnnotationTypeConfig = /**
     * @private
     * @param {?} id
     * @return {?}
     */
    function (id) {
        switch (id) {
            case AnnotationType.TEXT.id:
                return this.textAnnotationConfig;
            case AnnotationType.AREA.id:
                return this.areaAnnotationConfig;
            case AnnotationType.POINT.id:
                return this.pointAnnotationConfig;
            case AnnotationType.TEXT_STRIKEOUT.id:
                return this.textStrikeoutAnnotationConfig;
            case AnnotationType.POLYLINE.id:
                return this.polylineAnnotationConfig;
            case AnnotationType.TEXT_FIELD.id:
                return this.textFieldAnnotationConfig;
            case AnnotationType.WATERMARK.id:
                return this.watermarkAnnotationConfig;
            case AnnotationType.TEXT_REPLACEMENT.id:
                return this.textReplacementAnnotationConfig;
            case AnnotationType.ARROW.id:
                return this.arrowAnnotationConfig;
            case AnnotationType.TEXT_REDACTION.id:
                return this.textRedactionAnnotationConfig;
            case AnnotationType.TEXT_UNDERLINE.id:
                return this.textUnderlineAnnotationConfig;
            case AnnotationType.DISTANCE.id:
                return this.distanceAnnotationConfig;
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AnnotationAppComponent.prototype.fileDropped = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.fileWasDropped = $event;
    };
    /**
     * @private
     * @return {?}
     */
    AnnotationAppComponent.prototype.cleanAnnotations = /**
     * @private
     * @return {?}
     */
    function () {
        var e_5, _a;
        try {
            for (var _b = tslib_1.__values(this.annotations.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var componentRef = _c.value;
                componentRef.destroy();
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        this.annotations = new Map();
        this.comments = new Map();
    };
    /**
     * @return {?}
     */
    AnnotationAppComponent.prototype.hideAnnotations = /**
     * @return {?}
     */
    function () {
        var e_6, _a;
        try {
            for (var _b = tslib_1.__values(this.annotations.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var annotationCompRef = _c.value;
                this.annotationsHidden = ((/** @type {?} */ (annotationCompRef.instance))).hidden = !((/** @type {?} */ (annotationCompRef.instance))).hidden;
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
    };
    /**
     * @private
     * @return {?}
     */
    AnnotationAppComponent.prototype.clearData = /**
     * @private
     * @return {?}
     */
    function () {
        var e_7, _a;
        if (!this.file || !this.file.pages) {
            return;
        }
        try {
            for (var _b = tslib_1.__values(this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                var page = _c.value;
                page.data = null;
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AnnotationAppComponent.prototype.createAnnotation = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event.target.classList[0] === 'svg' || $event.target.classList[0] === 'gd-page-image') {
            if (this.activeAnnotationTab) {
                $event.preventDefault();
            }
            if (this.activeAnnotationTab) {
                /** @type {?} */
                var position = Utils.getMousePosition($event);
                /** @type {?} */
                var elements = document.elementsFromPoint(position.x, position.y);
                /** @type {?} */
                var currentPage = elements.find((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.id && x.id.startsWith("page-"); }));
                if (currentPage) {
                    /** @type {?} */
                    var documentPage = $(currentPage).parent().parent()[0];
                    /** @type {?} */
                    var currentPosition = this.getCurrentPosition(position, $(documentPage));
                    /** @type {?} */
                    var pageId = currentPage.id;
                    /** @type {?} */
                    var pageNumber = 1;
                    if (pageId) {
                        /** @type {?} */
                        var split = pageId.split('-');
                        pageNumber = split.length === 2 ? parseInt(split[1], 10) : pageNumber;
                    }
                    /** @type {?} */
                    var id = this.addAnnotationComponent(pageNumber, currentPosition, null);
                    this._activeAnnotationService.changeActive(id);
                    this.creatingAnnotationId = id;
                    // this._tabActivatorService.changeActiveTab(null);
                }
            }
        }
    };
    /**
     * @private
     * @param {?} pageNumber
     * @param {?} currentPosition
     * @param {?} data
     * @return {?}
     */
    AnnotationAppComponent.prototype.addAnnotationComponent = /**
     * @private
     * @param {?} pageNumber
     * @param {?} currentPosition
     * @param {?} data
     * @return {?}
     */
    function (pageNumber, currentPosition, data) {
        /** @type {?} */
        var dynamicDirective = this._hostingComponentsService.find(pageNumber);
        if (dynamicDirective) {
            /** @type {?} */
            var viewContainerRef = dynamicDirective.viewContainerRef;
            /** @type {?} */
            var annotationComponent = this._addDynamicComponentService.addDynamicComponent(viewContainerRef, AnnotationComponent);
            /** @type {?} */
            var id = this.getNextId();
            ((/** @type {?} */ (annotationComponent.instance))).id = id;
            ((/** @type {?} */ (annotationComponent.instance))).position = currentPosition;
            ((/** @type {?} */ (annotationComponent.instance))).pageNumber = pageNumber;
            if (data) {
                /** @type {?} */
                var dimension = new Dimension(data.width, data.height);
                /** @type {?} */
                var type = AnnotationType.getAnnotationType(data.type);
                /** @type {?} */
                var formatting = Formatting.default();
                formatting.fontSize = data.fontSize;
                if (data.fontColor) {
                    formatting.color = "#" + data.fontColor.toString(16);
                }
                formatting.font = data.font;
                ((/** @type {?} */ (annotationComponent.instance))).type = type ? type.id : data.type;
                ((/** @type {?} */ (annotationComponent.instance))).dimension = dimension;
                ((/** @type {?} */ (annotationComponent.instance))).svgPath = data.svgPath;
                ((/** @type {?} */ (annotationComponent.instance))).textValue = data.text;
                if (formatting) {
                    ((/** @type {?} */ (annotationComponent.instance))).saveFormatting(formatting);
                }
            }
            else {
                ((/** @type {?} */ (annotationComponent.instance))).type = this.activeAnnotationTab;
            }
            /** @type {?} */
            var pageModel = this.file.pages.find((/**
             * @param {?} p
             * @return {?}
             */
            function (p) {
                return p.number === pageNumber;
            }));
            ((/** @type {?} */ (annotationComponent.instance))).pageWidth = pageModel.width;
            ((/** @type {?} */ (annotationComponent.instance))).pageHeight = pageModel.height;
            ((/** @type {?} */ (annotationComponent.instance))).hidden = this.annotationsHidden;
            this.annotations.set(id, annotationComponent);
            return id;
        }
        return null;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AnnotationAppComponent.prototype.resizingCreatingAnnotation = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.activeAnnotationTab) {
            $event.preventDefault();
        }
        if (this.creatingAnnotationId) {
            /** @type {?} */
            var position = Utils.getMousePosition($event);
            /** @type {?} */
            var annotationComponent = this.annotations.get(this.creatingAnnotationId);
            /** @type {?} */
            var type = ((/** @type {?} */ (annotationComponent.instance))).type;
            /** @type {?} */
            var pageNumber = ((/** @type {?} */ (annotationComponent.instance))).pageNumber;
            /** @type {?} */
            var currentPosition = this.getCurrentPosition(position, $("#page-" + pageNumber));
            if (type === AnnotationType.POLYLINE.id || type === AnnotationType.DISTANCE.id || type === AnnotationType.ARROW.id) {
                ((/** @type {?} */ (annotationComponent.instance))).draw(currentPosition);
            }
            else if (type !== AnnotationType.POINT.id) {
                ((/** @type {?} */ (annotationComponent.instance))).calcDimensions(currentPosition);
            }
        }
    };
    /**
     * @private
     * @param {?} position
     * @param {?} page
     * @return {?}
     */
    AnnotationAppComponent.prototype.getCurrentPosition = /**
     * @private
     * @param {?} position
     * @param {?} page
     * @return {?}
     */
    function (position, page) {
        /** @type {?} */
        var left = (position.x - page.offset().left) / (this.zoom / 100);
        /** @type {?} */
        var top = (position.y - page.offset().top) / (this.zoom / 100);
        return new Position(left, top);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AnnotationAppComponent.prototype.finishCreatingAnnotation = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.activeAnnotationTab) {
            $event.preventDefault();
        }
        if (this.creatingAnnotationId) {
            this._activeAnnotationService.changeActive(this.creatingAnnotationId);
            this.creatingAnnotationId = null;
        }
    };
    /**
     * @return {?}
     */
    AnnotationAppComponent.prototype.closeComments = /**
     * @return {?}
     */
    function () {
        this.commentOpenedId = null;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AnnotationAppComponent.prototype.onPan = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this._zoomService.changeZoom(this._zoom);
    };
    /**
     * @private
     * @return {?}
     */
    AnnotationAppComponent.prototype.getNextId = /**
     * @private
     * @return {?}
     */
    function () {
        var e_8, _a;
        /** @type {?} */
        var maxId = 0;
        try {
            for (var _b = tslib_1.__values(this.annotations.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var annId = _c.value;
                if (annId > maxId) {
                    maxId = annId;
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_8) throw e_8.error; }
        }
        /** @type {?} */
        var id = maxId + 1;
        return id;
    };
    AnnotationAppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-annotation-app',
                    template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\">\n  <div class=\"annotation-wrapper wrapper\">\n    <gd-tabbed-toolbars [logo]=\"'annotation'\" [icon]=\"'pen-square'\">\n      <gd-tabs>\n        <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\n          <div id=\"files-tools\" class=\"toolbar-panel\">\n            <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                       *ngIf=\"browseConfig\"></gd-button>\n\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                       (click)=\"downloadFile()\" *ngIf=\"downloadConfig\"></gd-button>\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"annotate()\"></gd-button>\n            <gd-button class=\"desktop-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\"\n              (click)=\"zoomIn()\" *ngIf=\"zoomConfig\"></gd-button>\n            <gd-button class=\"desktop-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\"\n              (click)=\"zoomOut()\" *ngIf=\"zoomConfig\"></gd-button>\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"annotationsHidden ? 'toggle-off' : 'toggle-on'\" [tooltip]=\"'Hide annotations'\" (click)=\"hideAnnotations()\"></gd-button>\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"'Annotations'\" [icon]=\"'highlighter'\" [id]=\"'2'\"\n                *ngIf=\"isDesktop || (!isDesktop && codesConfigFirst())\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let annotationType of (isDesktop ? annotationTypes : annotationTypeFirst)\">\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(annotationType.id)\"\n                          [icon]=\"annotationType.icon\" (activeTab)=\"activeTab($event)\"\n                          [id]=\"annotationType.id\" [tooltip]=\"annotationType.name\">\n              </gd-top-tab>\n            </div>\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"''\" [icon]=\"'vector-square'\" [id]=\"'3'\" *ngIf=\"!isDesktop && codesConfigSecond()\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let annotationType of annotationTypeSecond\">\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(annotationType.id)\"\n                          [icon]=\"annotationType.icon\" (activeTab)=\"activeTab($event)\"\n                          [id]=\"annotationType.id\" [tooltip]=\"annotationType.name\">\n              </gd-top-tab>\n            </div>\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"''\" [icon]=\"'i-cursor'\" [id]=\"'4'\" *ngIf=\"!isDesktop && codesConfigThird()\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let annotationType of annotationTypeThird\">\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(annotationType.id)\"\n                          [icon]=\"annotationType.icon\" (activeTab)=\"activeTab($event)\"\n                          [id]=\"annotationType.id\" [tooltip]=\"annotationType.name\">\n              </gd-top-tab>\n            </div>\n          </div>\n        </gd-tab>\n      </gd-tabs>\n    </gd-tabbed-toolbars>\n    <div class=\"doc-panel\" *ngIf=\"file\" (mousedown)=\"createAnnotation($event)\"\n         (mousemove)=\"resizingCreatingAnnotation($event)\" (mouseup)=\"finishCreatingAnnotation($event)\"\n         (touchstart)=\"!isDesktop ? createAnnotation($event) : ''\" (touchmove)=\"resizingCreatingAnnotation($event)\"\n         (touchend)=\"finishCreatingAnnotation($event)\"\n         (panstart)=\"!isDesktop ? createAnnotation($event) : ''\" (panmove)=\"resizingCreatingAnnotation($event)\"\n         (panend)=\"finishCreatingAnnotation($event)\">\n      <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                   [preloadPageCount]=\"preloadPageCountConfig\" gdRenderPrint [htmlMode]=\"htmlModeConfig\" (onpan)=\"onPan($event)\"></gd-document>\n    </div>\n    <gd-comment-panel *ngIf=\"commentOpenedId\" [annotationId]=\"commentOpenedId\" [commentator]=\"defaultCommentator\"\n                      [comments]=\"getComments()\" (closeComments)=\"closeComments()\">\n    </gd-comment-panel>\n\n    <gd-init-state [icon]=\"'highlighter'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\"\n                   (fileDropped)=\"fileDropped($event)\">\n      Click\n      <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon>\n      to open file<br>\n      Or drop file here\n    </gd-init-state>\n  </div>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n  <svg class=\"svg\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs xmlns=\"http://www.w3.org/2000/svg\">\n      <marker id=\"end\" orient='auto' markerWidth='20' markerHeight='20'\n              refX=\"10\" refY=\"10\" markerUnits=\"strokeWidth\">\n        <path d='M0,7 L0,13 L12,10 z' fill='#579AF0'></path>\n      </marker>\n      <marker id=\"start\" orient='auto' markerWidth='20' markerHeight='20'\n              refX=\"0\" refY=\"10\" markerUnits=\"strokeWidth\">\n        <path d='M12,7 L12,13 L0,10 z' fill='#579AF0'></path>\n      </marker>\n    </defs>\n  </svg>\n</div>\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .page{position:relative}::ng-deep .gd-page-image{width:unset;height:unset}::ng-deep .top-panel{align-content:flex-start}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:inherit}.gd-document{width:100%;height:calc(100% - 90px)}.toolbar-panel{width:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.annotation-wrapper ::ng-deep .button{color:#3e4e5a!important}.annotation-wrapper ::ng-deep .button .text{padding:0!important}.annotation-wrapper ::ng-deep .select{color:#3e4e5a!important}.desktop-hide{display:none}@media (max-width:1037px){::ng-deep .logo ::ng-deep .icon{font-size:24px!important}::ng-deep .top-panel{height:120px!important}::ng-deep .toolbar-panel .gd-tab,::ng-deep .toolbar-panel ::ng-deep .button{height:60px;line-height:60px;width:60px;margin:0!important}.desktop-hide{display:block}.gd-document{height:calc(100% - 120px)}::ng-deep .bcPicker-palette{position:absolute;left:-80px!important;top:-170px!important}::ng-deep .gd-comments-panel .gd-comments-body{-webkit-box-pack:center;justify-content:center}::ng-deep .gd-comments-panel .gd-comments-body .gd-empty-comments-list{width:unset!important;margin-top:unset!important}}"]
                }] }
    ];
    /** @nocollapse */
    AnnotationAppComponent.ctorParameters = function () { return [
        { type: AnnotationService },
        { type: ModalService },
        { type: NavigateService },
        { type: TopTabActivatorService },
        { type: HostingDynamicComponentService },
        { type: AddDynamicComponentService },
        { type: ActiveAnnotationService },
        { type: RemoveAnnotationService },
        { type: CommentAnnotationService },
        { type: UploadFilesService },
        { type: PagePreloadService },
        { type: PasswordService },
        { type: WindowService },
        { type: ZoomService },
        { type: AnnotationConfigService }
    ]; };
    return AnnotationAppComponent;
}());
export { AnnotationAppComponent };
if (false) {
    /** @type {?} */
    AnnotationAppComponent.prototype.title;
    /** @type {?} */
    AnnotationAppComponent.prototype.files;
    /** @type {?} */
    AnnotationAppComponent.prototype.file;
    /** @type {?} */
    AnnotationAppComponent.prototype.isLoading;
    /** @type {?} */
    AnnotationAppComponent.prototype.annotationConfig;
    /** @type {?} */
    AnnotationAppComponent.prototype.browseFilesModal;
    /** @type {?} */
    AnnotationAppComponent.prototype.formatDisabled;
    /** @type {?} */
    AnnotationAppComponent.prototype.credentials;
    /** @type {?} */
    AnnotationAppComponent.prototype.annotationTypes;
    /** @type {?} */
    AnnotationAppComponent.prototype.isDesktop;
    /** @type {?} */
    AnnotationAppComponent.prototype.annotationTypeFirst;
    /** @type {?} */
    AnnotationAppComponent.prototype.annotationTypeSecond;
    /** @type {?} */
    AnnotationAppComponent.prototype.annotationTypeThird;
    /** @type {?} */
    AnnotationAppComponent.prototype.countPages;
    /** @type {?} */
    AnnotationAppComponent.prototype.commentOpenedId;
    /** @type {?} */
    AnnotationAppComponent.prototype.comments;
    /** @type {?} */
    AnnotationAppComponent.prototype._zoom;
    /** @type {?} */
    AnnotationAppComponent.prototype._pageWidth;
    /** @type {?} */
    AnnotationAppComponent.prototype._pageHeight;
    /**
     * @type {?}
     * @private
     */
    AnnotationAppComponent.prototype.activeAnnotationTab;
    /**
     * @type {?}
     * @private
     */
    AnnotationAppComponent.prototype.fileWasDropped;
    /** @type {?} */
    AnnotationAppComponent.prototype.annotations;
    /**
     * @type {?}
     * @private
     */
    AnnotationAppComponent.prototype.creatingAnnotationId;
    /**
     * @type {?}
     * @private
     */
    AnnotationAppComponent.prototype.activeAnnotationId;
    /** @type {?} */
    AnnotationAppComponent.prototype.annotationsHidden;
    /**
     * @type {?}
     * @private
     */
    AnnotationAppComponent.prototype._annotationService;
    /**
     * @type {?}
     * @private
     */
    AnnotationAppComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    AnnotationAppComponent.prototype._navigateService;
    /**
     * @type {?}
     * @private
     */
    AnnotationAppComponent.prototype._tabActivatorService;
    /**
     * @type {?}
     * @private
     */
    AnnotationAppComponent.prototype._hostingComponentsService;
    /**
     * @type {?}
     * @private
     */
    AnnotationAppComponent.prototype._addDynamicComponentService;
    /**
     * @type {?}
     * @private
     */
    AnnotationAppComponent.prototype._activeAnnotationService;
    /**
     * @type {?}
     * @private
     */
    AnnotationAppComponent.prototype._removeAnnotationService;
    /** @type {?} */
    AnnotationAppComponent.prototype._commentAnnotationService;
    /**
     * @type {?}
     * @private
     */
    AnnotationAppComponent.prototype._windowService;
    /**
     * @type {?}
     * @private
     */
    AnnotationAppComponent.prototype._zoomService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2Fubm90YXRpb24vIiwic291cmNlcyI6WyJsaWIvYW5ub3RhdGlvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFFaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixZQUFZLEVBQ1osZUFBZSxFQUNKLFVBQVUsRUFDckIsOEJBQThCLEVBQzlCLFlBQVksRUFDWixlQUFlLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUNwRCxzQkFBc0IsRUFBRSxrQkFBa0IsRUFDMUMsS0FBSyxFQUNMLGFBQWEsRUFDYixXQUFXLEVBQ1osTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsY0FBYyxFQUVkLFFBQVEsRUFHd0QsU0FBUyxFQUMxRSxNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztJQUVoRSxDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQTZERSxnQ0FBb0Isa0JBQXFDLEVBQy9DLGFBQTJCLEVBQzNCLGdCQUFpQyxFQUNqQyxvQkFBNEMsRUFDNUMseUJBQXlELEVBQ3pELDJCQUF1RCxFQUN2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QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFubm90YXRpb25Db25maWcgfSBmcm9tIFwiLi9hbm5vdGF0aW9uLWNvbmZpZ1wiO1xuaW1wb3J0IHsgQW5ub3RhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9hbm5vdGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7XG4gIEFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICBDb21tb25Nb2RhbHMsXG4gIEZpbGVDcmVkZW50aWFscyxcbiAgRmlsZU1vZGVsLCBGb3JtYXR0aW5nLFxuICBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gIE1vZGFsU2VydmljZSxcbiAgTmF2aWdhdGVTZXJ2aWNlLCBQYWdlUHJlbG9hZFNlcnZpY2UsIFBhc3N3b3JkU2VydmljZSxcbiAgVG9wVGFiQWN0aXZhdG9yU2VydmljZSwgVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICBVdGlscyxcbiAgV2luZG93U2VydmljZSxcbiAgWm9vbVNlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtcbiAgQW5ub3RhdGlvblR5cGUsXG4gIENvbW1lbnRBbm5vdGF0aW9uLFxuICBQb3NpdGlvbixcbiAgUmVtb3ZlQW5ub3RhdGlvbixcbiAgQ29tbWVudCxcbiAgRmlsZUFubm90YXRpb25EZXNjcmlwdGlvbiwgUGFnZUFubm90YXRpb25Nb2RlbCwgQW5ub3RhdGlvbkRhdGEsIERpbWVuc2lvblxufSBmcm9tIFwiLi9hbm5vdGF0aW9uLW1vZGVsc1wiO1xuaW1wb3J0IHsgQW5ub3RhdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuL2Fubm90YXRpb24vYW5ub3RhdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFjdGl2ZUFubm90YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vYWN0aXZlLWFubm90YXRpb24uc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBSZW1vdmVBbm5vdGF0aW9uU2VydmljZSB9IGZyb20gXCIuL3JlbW92ZS1hbm5vdGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IENvbW1lbnRBbm5vdGF0aW9uU2VydmljZSB9IGZyb20gXCIuL2NvbW1lbnQtYW5ub3RhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBbm5vdGF0aW9uQ29uZmlnU2VydmljZSB9IGZyb20gXCIuL2Fubm90YXRpb24tY29uZmlnLnNlcnZpY2VcIjtcblxuY29uc3QgJCA9IGpxdWVyeTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtYW5ub3RhdGlvbi1hcHAnLFxuICB0ZW1wbGF0ZVVybDogJy4vYW5ub3RhdGlvbi1hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hbm5vdGF0aW9uLWFwcC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25BcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0aXRsZSA9ICdhbm5vdGF0aW9uJztcbiAgZmlsZXM6IEZpbGVNb2RlbFtdID0gW107XG4gIGZpbGU6IEZpbGVBbm5vdGF0aW9uRGVzY3JpcHRpb247XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgYW5ub3RhdGlvbkNvbmZpZzogQW5ub3RhdGlvbkNvbmZpZztcbiAgYnJvd3NlRmlsZXNNb2RhbCA9IENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcztcbiAgZm9ybWF0RGlzYWJsZWQgPSAhdGhpcy5maWxlO1xuICBwdWJsaWMgY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscztcbiAgYW5ub3RhdGlvblR5cGVzID0gW1xuICAgIEFubm90YXRpb25UeXBlLlRFWFQsXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9TVFJJS0VPVVQsXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9VTkRFUkxJTkUsXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9SRVBMQUNFTUVOVCxcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhUX1JFREFDVElPTixcbiAgICBBbm5vdGF0aW9uVHlwZS5QT0xZTElORSxcbiAgICBBbm5vdGF0aW9uVHlwZS5BUlJPVyxcbiAgICBBbm5vdGF0aW9uVHlwZS5ESVNUQU5DRSxcbiAgICBBbm5vdGF0aW9uVHlwZS5BUkVBLFxuICAgIEFubm90YXRpb25UeXBlLlRFWFRfRklFTEQsXG4gICAgQW5ub3RhdGlvblR5cGUuV0FURVJNQVJLLFxuICAgIEFubm90YXRpb25UeXBlLlBPSU5ULFxuICBdO1xuICBpc0Rlc2t0b3A6IGJvb2xlYW47XG4gIGFubm90YXRpb25UeXBlRmlyc3QgPSBbXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVCxcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhUX1VOREVSTElORSxcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhUX1JFREFDVElPTixcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhUX1JFUExBQ0VNRU5ULFxuICAgIEFubm90YXRpb25UeXBlLlRFWFRfU1RSSUtFT1VULFxuICBdO1xuICBhbm5vdGF0aW9uVHlwZVNlY29uZCA9IFtcbiAgICBBbm5vdGF0aW9uVHlwZS5QT0xZTElORSxcbiAgICBBbm5vdGF0aW9uVHlwZS5BUlJPVyxcbiAgICBBbm5vdGF0aW9uVHlwZS5ESVNUQU5DRSxcbiAgICBBbm5vdGF0aW9uVHlwZS5BUkVBLFxuICAgIEFubm90YXRpb25UeXBlLlBPSU5UXG4gIF07XG4gIGFubm90YXRpb25UeXBlVGhpcmQgPSBbXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9GSUVMRCxcbiAgICBBbm5vdGF0aW9uVHlwZS5XQVRFUk1BUkssXG4gIF07XG4gIGNvdW50UGFnZXMgPSAwO1xuICBjb21tZW50T3BlbmVkSWQ6IG51bWJlcjtcbiAgY29tbWVudHMgPSBuZXcgTWFwPG51bWJlciwgQ29tbWVudFtdPigpO1xuICBfem9vbSA9IDEwMDtcbiAgX3BhZ2VXaWR0aDogbnVtYmVyO1xuICBfcGFnZUhlaWdodDogbnVtYmVyO1xuXG4gIHByaXZhdGUgYWN0aXZlQW5ub3RhdGlvblRhYjogc3RyaW5nO1xuICBwcml2YXRlIGZpbGVXYXNEcm9wcGVkID0gZmFsc2U7XG4gIHB1YmxpYyBhbm5vdGF0aW9ucyA9IG5ldyBNYXA8bnVtYmVyLCBDb21wb25lbnRSZWY8YW55Pj4oKTtcbiAgcHJpdmF0ZSBjcmVhdGluZ0Fubm90YXRpb25JZDogbnVtYmVyO1xuICBwcml2YXRlIGFjdGl2ZUFubm90YXRpb25JZDogbnVtYmVyO1xuICBhbm5vdGF0aW9uc0hpZGRlbjogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hbm5vdGF0aW9uU2VydmljZTogQW5ub3RhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfdGFiQWN0aXZhdG9yU2VydmljZTogVG9wVGFiQWN0aXZhdG9yU2VydmljZSxcbiAgICBwcml2YXRlIF9ob3N0aW5nQ29tcG9uZW50c1NlcnZpY2U6IEhvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgICBwcml2YXRlIF9hZGREeW5hbWljQ29tcG9uZW50U2VydmljZTogQWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfYWN0aXZlQW5ub3RhdGlvblNlcnZpY2U6IEFjdGl2ZUFubm90YXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX3JlbW92ZUFubm90YXRpb25TZXJ2aWNlOiBSZW1vdmVBbm5vdGF0aW9uU2VydmljZSxcbiAgICBwdWJsaWMgX2NvbW1lbnRBbm5vdGF0aW9uU2VydmljZTogQ29tbWVudEFubm90YXRpb25TZXJ2aWNlLFxuICAgIHVwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICAgIHBhZ2VQcmVsb2FkU2VydmljZTogUGFnZVByZWxvYWRTZXJ2aWNlLFxuICAgIHBhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxuICAgIGNvbmZpZ1NlcnZpY2U6IEFubm90YXRpb25Db25maWdTZXJ2aWNlKSB7XG5cbiAgICBjb25maWdTZXJ2aWNlLnVwZGF0ZWRDb25maWcuc3Vic2NyaWJlKChhbm5vdGF0aW9uQ29uZmlnKSA9PiB7XG4gICAgICB0aGlzLmFubm90YXRpb25Db25maWcgPSBhbm5vdGF0aW9uQ29uZmlnO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgICBpZiAoIXRoaXMuaXNEZXNrdG9wKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaFpvb20oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX2FjdGl2ZUFubm90YXRpb25TZXJ2aWNlLmFjdGl2ZUNoYW5nZS5zdWJzY3JpYmUoKGlkOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUFubm90YXRpb25JZCAhPT0gaWQpIHtcbiAgICAgICAgdGhpcy5jb21tZW50T3BlbmVkSWQgPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGl2ZUFubm90YXRpb25JZCA9IGlkO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fY29tbWVudEFubm90YXRpb25TZXJ2aWNlLmNvbW1lbnRBbm5vdGF0aW9uLnN1YnNjcmliZSgoY29tbWVudEFubm90YXRpb246IENvbW1lbnRBbm5vdGF0aW9uKSA9PiB7XG4gICAgICB0aGlzLmNvbW1lbnRPcGVuZWRJZCA9IGNvbW1lbnRBbm5vdGF0aW9uLmlkO1xuICAgICAgaWYgKCF0aGlzLmNvbW1lbnRzLmdldCh0aGlzLmNvbW1lbnRPcGVuZWRJZCkpIHtcbiAgICAgICAgdGhpcy5jb21tZW50cy5zZXQodGhpcy5jb21tZW50T3BlbmVkSWQsIFtdKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX2NvbW1lbnRBbm5vdGF0aW9uU2VydmljZS5hZGRDb21tZW50T2JzZXJ2ZS5zdWJzY3JpYmUoKGNvbW1lbnQ6IENvbW1lbnQpID0+IHtcbiAgICAgIHRoaXMuY29tbWVudHMuZ2V0KHRoaXMuY29tbWVudE9wZW5lZElkKS5wdXNoKGNvbW1lbnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fcmVtb3ZlQW5ub3RhdGlvblNlcnZpY2UucmVtb3ZlQW5ub3RhdGlvbi5zdWJzY3JpYmUoKHJlbW92ZUFubm90YXRpb246IFJlbW92ZUFubm90YXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuYW5ub3RhdGlvbnMuZ2V0KHJlbW92ZUFubm90YXRpb24uaWQpO1xuICAgICAgaWYgKGNvbXBvbmVudFJlZikge1xuICAgICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5hbm5vdGF0aW9ucy5kZWxldGUocmVtb3ZlQW5ub3RhdGlvbi5pZCk7XG4gICAgICBpZiAodGhpcy5jb21tZW50T3BlbmVkSWQgPT09IHJlbW92ZUFubm90YXRpb24uaWQpIHtcbiAgICAgICAgdGhpcy5jb21tZW50T3BlbmVkSWQgPSBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5jb21tZW50cy5kZWxldGUocmVtb3ZlQW5ub3RhdGlvbi5pZCk7XG4gICAgfSk7XG5cbiAgICB1cGxvYWRGaWxlc1NlcnZpY2UudXBsb2Fkc0NoYW5nZS5zdWJzY3JpYmUoKHVwbG9hZHMpID0+IHtcbiAgICAgIGlmICh1cGxvYWRzKSB7XG4gICAgICAgIGxldCBpOiBudW1iZXI7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB1cGxvYWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5fYW5ub3RhdGlvblNlcnZpY2UudXBsb2FkKHVwbG9hZHMuaXRlbShpKSwgJycsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKChvYmo6IEZpbGVDcmVkZW50aWFscykgPT4ge1xuICAgICAgICAgICAgdGhpcy5maWxlV2FzRHJvcHBlZCA/IHRoaXMuc2VsZWN0RmlsZShvYmouZ3VpZCwgJycsICcnKSA6IHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGFnZVByZWxvYWRTZXJ2aWNlLmNoZWNrUHJlbG9hZC5zdWJzY3JpYmUoKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRoaXMucHJlbG9hZFBhZ2VDb3VudENvbmZpZyAhPT0gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gcGFnZTsgaSA8IHBhZ2UgKyAyOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSA+IDAgJiYgaSA8PSB0aGlzLmNvdW50UGFnZXMgJiYgIXRoaXMuZmlsZS5wYWdlc1tpIC0gMV0uZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5wcmVsb2FkUGFnZXMoaSwgaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYXNzd29yZFNlcnZpY2UucGFzc0NoYW5nZS5zdWJzY3JpYmUoKHBhc3M6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuY3JlZGVudGlhbHMuZ3VpZCwgcGFzcywgQ29tbW9uTW9kYWxzLlBhc3N3b3JkUmVxdWlyZWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDb21tZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5jb21tZW50cy5nZXQodGhpcy5jb21tZW50T3BlbmVkSWQpO1xuICB9XG5cbiAgZ2V0IHJld3JpdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5yZXdyaXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB6b29tQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcuem9vbSA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0IHBhZ2VTZWxlY3RvckNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnBhZ2VTZWxlY3RvciA6IHRydWU7XG4gIH1cblxuICBnZXQgcHJlbG9hZFBhZ2VDb3VudENvbmZpZygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcucHJlbG9hZFBhZ2VDb3VudCA6IDA7XG4gIH1cblxuICBnZXQgZG93bmxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5kb3dubG9hZCA6IHRydWU7XG4gIH1cblxuICBnZXQgZG93bmxvYWRPcmlnaW5hbENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLmRvd25sb2FkT3JpZ2luYWwgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGRvd25sb2FkQW5ub3RhdGVkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcuZG93bmxvYWRBbm5vdGF0ZWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnVwbG9hZCA6IHRydWU7XG4gIH1cblxuICBwcml2YXRlIGRlZmF1bHREb2N1bWVudENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLmRlZmF1bHREb2N1bWVudCA6IFwiXCI7XG4gIH1cblxuICBnZXQgcHJpbnRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5wcmludCA6IHRydWU7XG4gIH1cblxuICBnZXQgYnJvd3NlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcuYnJvd3NlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0Q29tbWVudGF0b3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLmRlZmF1bHRDb21tZW50YXRvciA6IFwiXCI7XG4gIH1cblxuICBnZXQgaHRtbE1vZGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0IGVuYWJsZVJpZ2h0Q2xpY2tDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5lbmFibGVSaWdodENsaWNrIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB0ZXh0QW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnRleHRBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBhcmVhQW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLmFyZWFBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBwb2ludEFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5wb2ludEFubm90YXRpb24gOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHRleHRTdHJpa2VvdXRBbm5vdGF0aW9uQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcudGV4dFN0cmlrZW91dEFubm90YXRpb24gOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHBvbHlsaW5lQW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnBvbHlsaW5lQW5ub3RhdGlvbiA6IHRydWU7XG4gIH1cblxuICBnZXQgdGV4dEZpZWxkQW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnRleHRGaWVsZEFubm90YXRpb24gOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHdhdGVybWFya0Fubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy53YXRlcm1hcmtBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB0ZXh0UmVwbGFjZW1lbnRBbm5vdGF0aW9uQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcudGV4dFJlcGxhY2VtZW50QW5ub3RhdGlvbiA6IHRydWU7XG4gIH1cblxuICBnZXQgYXJyb3dBbm5vdGF0aW9uQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcuYXJyb3dBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB0ZXh0UmVkYWN0aW9uQW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnRleHRSZWRhY3Rpb25Bbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB0ZXh0VW5kZXJsaW5lQW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnRleHRVbmRlcmxpbmVBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBkaXN0YW5jZUFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5kaXN0YW5jZUFubm90YXRpb24gOiB0cnVlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuXG4gICAgaWYgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcblxuICAgICAgY29uc3QgZmlsZVJvdXRlID0gdXJsUGFyYW1zLmdldCgnZmlsZScpO1xuICAgICAgaWYgKGZpbGVSb3V0ZSkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fYW5ub3RhdGlvblNlcnZpY2VcbiAgICAgICAgICAudXBsb2FkKG51bGwsIGZpbGVSb3V0ZSwgdGhpcy5yZXdyaXRlQ29uZmlnKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKGZpbGU6IEZpbGVDcmVkZW50aWFscykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RGaWxlKGZpbGUuZ3VpZCwgJycsICcnKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5hbm5vdGF0aW9uQ29uZmlnLmRlZmF1bHREb2N1bWVudCAhPT0gJycpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLmFubm90YXRpb25Db25maWcuZGVmYXVsdERvY3VtZW50LCBcIlwiLCBcIlwiKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHB0VG9QeChwdDogbnVtYmVyKSB7XG4gICAgLy9wdCAqIDk2IC8gNzIgPSBweC5cbiAgICByZXR1cm4gcHQgKiA5NiAvIDcyO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaXRUb1dpZHRoKCkge1xuICAgIC8vIEltYWdlcyBhbmQgRXhjZWwtcmVsYXRlZCBmaWxlcyByZWNlaXZpbmcgZGltZW5zaW9ucyBpbiBweCBmcm9tIHNlcnZlclxuICAgIGNvbnN0IHBhZ2VXaWR0aCA9IHRoaXMucHRUb1B4KHRoaXMuX3BhZ2VXaWR0aCk7XG4gICAgY29uc3QgcGFnZUhlaWdodCA9IHRoaXMucHRUb1B4KHRoaXMuX3BhZ2VIZWlnaHQpO1xuICAgIGNvbnN0IG9mZnNldFdpZHRoID0gcGFnZVdpZHRoID8gcGFnZVdpZHRoIDogd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICByZXR1cm4gKHBhZ2VIZWlnaHQgPiBwYWdlV2lkdGggJiYgTWF0aC5yb3VuZChvZmZzZXRXaWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSA8IDIpID8gMjAwIC0gTWF0aC5yb3VuZChvZmZzZXRXaWR0aCAqIDEwMCAvIHdpbmRvdy5pbm5lcldpZHRoKSA6IE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggKiAxMDAgLyBvZmZzZXRXaWR0aCk7XG4gIH1cblxuICBzZXQgem9vbSh6b29tKSB7XG4gICAgdGhpcy5fem9vbSA9IHpvb207XG4gICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLl96b29tKTtcbiAgfVxuXG4gIGdldCB6b29tKCkge1xuICAgIHJldHVybiB0aGlzLl96b29tO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoWm9vbSgpIHtcbiAgICB0aGlzLnpvb20gPSB0aGlzLl93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpID8gMTAwIDogdGhpcy5nZXRGaXRUb1dpZHRoKCk7XG4gIH1cblxuICB6b29tSW4oKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRoaXMuX3pvb20gPCA0OTApIHtcbiAgICAgIHRoaXMuem9vbSA9IHRoaXMuX3pvb20gKyAxMDtcbiAgICB9XG4gIH1cblxuICB6b29tT3V0KCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGlmICh0aGlzLl96b29tID4gMzApIHtcbiAgICAgIHRoaXMuem9vbSA9IHRoaXMuX3pvb20gLSAxMDtcbiAgICB9XG4gIH1cblxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKGlkKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShpZCk7XG4gIH1cblxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hbm5vdGF0aW9uU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBGaWxlTW9kZWxbXSkgPT4gdGhpcy5maWxlcyA9IGZpbGVzIHx8IFtdKTtcbiAgfVxuXG4gIHNlbGVjdEZpbGUoJGV2ZW50OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG1vZGFsSWQ6IHN0cmluZykge1xuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBuZXcgRmlsZUNyZWRlbnRpYWxzKCRldmVudCwgcGFzc3dvcmQpO1xuICAgIHRoaXMuZmlsZSA9IG51bGw7XG4gICAgdGhpcy5jb21tZW50T3BlbmVkSWQgPSBudWxsO1xuICAgIHRoaXMuX2Fubm90YXRpb25TZXJ2aWNlLmxvYWRGaWxlKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZmlsZTogRmlsZUFubm90YXRpb25EZXNjcmlwdGlvbikgPT4ge1xuICAgICAgdGhpcy5jbGVhbkFubm90YXRpb25zKCk7XG4gICAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgICAgdGhpcy5mb3JtYXREaXNhYmxlZCA9ICF0aGlzLmZpbGU7XG4gICAgICBpZiAoZmlsZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNEZXNrdG9wICYmIGZpbGUucGFnZXMgJiYgZmlsZS5wYWdlc1swXSkge1xuICAgICAgICAgIHRoaXMuX3BhZ2VIZWlnaHQgPSBmaWxlLnBhZ2VzWzBdLmhlaWdodDtcbiAgICAgICAgICB0aGlzLl9wYWdlV2lkdGggPSBmaWxlLnBhZ2VzWzBdLndpZHRoO1xuICAgICAgICAgIHRoaXMucmVmcmVzaFpvb20oKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmVsb2FkUGFnZUNvdW50ID0gdGhpcy5wcmVsb2FkUGFnZUNvdW50Q29uZmlnO1xuICAgICAgICBjb25zdCBjb3VudFBhZ2VzID0gZmlsZS5wYWdlcyA/IGZpbGUucGFnZXMubGVuZ3RoIDogMDtcbiAgICAgICAgaWYgKHByZWxvYWRQYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgdGhpcy5wcmVsb2FkUGFnZXMoMSwgcHJlbG9hZFBhZ2VDb3VudCA+IGNvdW50UGFnZXMgPyBjb3VudFBhZ2VzIDogcHJlbG9hZFBhZ2VDb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW1wb3J0QW5ub3RhdGlvbnMocGFnZS5hbm5vdGF0aW9ucyA/IHBhZ2UuYW5ub3RhdGlvbnMgOiBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY291bnRQYWdlcyA9IGNvdW50UGFnZXM7XG4gICAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9IDE7XG4gICAgICAgIHRoaXMuY291bnRQYWdlcyA9IGNvdW50UGFnZXM7XG4gICAgICB9XG4gICAgfVxuICAgICk7XG4gICAgaWYgKG1vZGFsSWQpIHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShtb2RhbElkKTtcbiAgICB9XG4gICAgdGhpcy5jbGVhckRhdGEoKTtcbiAgfVxuXG4gIHByZWxvYWRQYWdlcyhzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgdGhpcy5fYW5ub3RhdGlvblNlcnZpY2UubG9hZFBhZ2UodGhpcy5jcmVkZW50aWFscywgaSkuc3Vic2NyaWJlKChwYWdlOiBQYWdlQW5ub3RhdGlvbk1vZGVsKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZS5wYWdlc1tpIC0gMV0gPSBwYWdlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmltcG9ydEFubm90YXRpb25zKHBhZ2UuYW5ub3RhdGlvbnMgPyBwYWdlLmFubm90YXRpb25zIDogW10pO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbXBvcnRBbm5vdGF0aW9ucyhhbm5vdGF0aW9uczogQW5ub3RhdGlvbkRhdGFbXSkge1xuICAgIGZvciAoY29uc3QgYW5ub3RhdGlvbiBvZiBhbm5vdGF0aW9ucykge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24oYW5ub3RhdGlvbi5sZWZ0LCBhbm5vdGF0aW9uLnRvcCk7XG4gICAgICBjb25zdCBpZCA9IHRoaXMuYWRkQW5ub3RhdGlvbkNvbXBvbmVudChhbm5vdGF0aW9uLnBhZ2VOdW1iZXIsIHBvc2l0aW9uLCBhbm5vdGF0aW9uKTtcbiAgICAgIHRoaXMuY29tbWVudHMuc2V0KGlkLCBhbm5vdGF0aW9uLmNvbW1lbnRzKTtcbiAgICAgIHRoaXMuX2FjdGl2ZUFubm90YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZShpZCk7XG4gICAgfVxuICB9XG5cbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fYW5ub3RhdGlvblNlcnZpY2UudXBsb2FkKG51bGwsICRldmVudCwgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgIH0pO1xuICB9XG5cbiAgb25SaWdodENsaWNrKCRldmVudDogTW91c2VFdmVudCkge1xuICAgIHJldHVybiB0aGlzLmVuYWJsZVJpZ2h0Q2xpY2tDb25maWc7XG4gIH1cblxuICBkb3dubG9hZEZpbGUoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLl9hbm5vdGF0aW9uU2VydmljZS5nZXREb3dubG9hZFVybCh0aGlzLmNyZWRlbnRpYWxzKSk7XG4gIH1cblxuICBhbm5vdGF0ZSgpIHtcbiAgICBjb25zdCBhbm5vdGF0aW9uc0RhdGEgPSB0aGlzLnByZXBhcmVBbm5vdGF0aW9uc0RhdGEoKTtcblxuICAgIHRoaXMuX2Fubm90YXRpb25TZXJ2aWNlLmFubm90YXRlKHRoaXMuY3JlZGVudGlhbHMsIGFubm90YXRpb25zRGF0YSwgZmFsc2UpLnN1YnNjcmliZSgocmV0OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5PcGVyYXRpb25TdWNjZXNzKTtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZShyZXQuZ3VpZCwgdGhpcy5jcmVkZW50aWFscy5wYXNzd29yZCwgQ29tbW9uTW9kYWxzLk9wZXJhdGlvblN1Y2Nlc3MpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHByZXBhcmVBbm5vdGF0aW9uc0RhdGEoKSB7XG4gICAgY29uc3QgYW5ub3RhdGlvbnNEYXRhID0gW107XG4gICAgZm9yIChjb25zdCBhbm5vdGF0aW9uIG9mIHRoaXMuYW5ub3RhdGlvbnMudmFsdWVzKCkpIHtcbiAgICAgIGNvbnN0IGFubm90YXRpb25EYXRhID0gKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb24uaW5zdGFuY2UpLmdldEFubm90YXRpb25EYXRhKCk7XG4gICAgICBhbm5vdGF0aW9uRGF0YS5jb21tZW50cyA9IHRoaXMuY29tbWVudHMuZ2V0KGFubm90YXRpb25EYXRhLmlkKTtcbiAgICAgIGFubm90YXRpb25zRGF0YS5wdXNoKGFubm90YXRpb25EYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGFubm90YXRpb25zRGF0YTtcbiAgfVxuXG4gIGlzVmlzaWJsZShpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3VwcG9ydGVkID0gIXRoaXMuZmlsZSB8fCAodGhpcy5maWxlICYmIHRoaXMuZmlsZS5zdXBwb3J0ZWRBbm5vdGF0aW9ucyAmJlxuICAgICAgdGhpcy5maWxlLnN1cHBvcnRlZEFubm90YXRpb25zLmZpbmQoZnVuY3Rpb24gKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGlkID09PSB2YWx1ZTtcbiAgICAgIH0pKTtcbiAgICByZXR1cm4gdGhpcy5nZXRBbm5vdGF0aW9uVHlwZUNvbmZpZyhpZCkgJiYgc3VwcG9ydGVkO1xuICB9XG5cbiAgYWN0aXZlVGFiKCRldmVudCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZUFubm90YXRpb25UYWIgJiYgJGV2ZW50ID09PSB0aGlzLmFjdGl2ZUFubm90YXRpb25UYWIpIHtcbiAgICAgIHRoaXMuYWN0aXZlQW5ub3RhdGlvblRhYiA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlQW5ub3RhdGlvblRhYiA9ICRldmVudDtcbiAgICB9XG4gIH1cblxuICBjb2Rlc0NvbmZpZ0ZpcnN0KCkge1xuICAgIHJldHVybiB0aGlzLmNoZWNrQ29uZmlnKHRoaXMuYW5ub3RhdGlvblR5cGVGaXJzdCk7XG4gIH1cblxuICBjb2Rlc0NvbmZpZ1NlY29uZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja0NvbmZpZyh0aGlzLmFubm90YXRpb25UeXBlU2Vjb25kKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tDb25maWcoYW5ub3RhdGlvbkxpc3QpIHtcbiAgICBmb3IgKGNvbnN0IGFubm90YXRpb25UeXBlIG9mIGFubm90YXRpb25MaXN0KSB7XG4gICAgICBpZiAodGhpcy5nZXRBbm5vdGF0aW9uVHlwZUNvbmZpZyhhbm5vdGF0aW9uVHlwZS5pZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvZGVzQ29uZmlnVGhpcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QW5ub3RhdGlvblR5cGVDb25maWcoQW5ub3RhdGlvblR5cGUuVEVYVF9GSUVMRC5pZCkgJiYgdGhpcy5nZXRBbm5vdGF0aW9uVHlwZUNvbmZpZyhBbm5vdGF0aW9uVHlwZS5XQVRFUk1BUksuaWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBbm5vdGF0aW9uVHlwZUNvbmZpZyhpZDogc3RyaW5nKSB7XG4gICAgc3dpdGNoIChpZCkge1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhULmlkOlxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0QW5ub3RhdGlvbkNvbmZpZztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuQVJFQS5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJlYUFubm90YXRpb25Db25maWc7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlBPSU5ULmlkOlxuICAgICAgICByZXR1cm4gdGhpcy5wb2ludEFubm90YXRpb25Db25maWc7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfU1RSSUtFT1VULmlkOlxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0U3RyaWtlb3V0QW5ub3RhdGlvbkNvbmZpZztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlsaW5lQW5ub3RhdGlvbkNvbmZpZztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9GSUVMRC5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dEZpZWxkQW5ub3RhdGlvbkNvbmZpZztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuV0FURVJNQVJLLmlkOlxuICAgICAgICByZXR1cm4gdGhpcy53YXRlcm1hcmtBbm5vdGF0aW9uQ29uZmlnO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1JFUExBQ0VNRU5ULmlkOlxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0UmVwbGFjZW1lbnRBbm5vdGF0aW9uQ29uZmlnO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5BUlJPVy5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyb3dBbm5vdGF0aW9uQ29uZmlnO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1JFREFDVElPTi5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFJlZGFjdGlvbkFubm90YXRpb25Db25maWc7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfVU5ERVJMSU5FLmlkOlxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0VW5kZXJsaW5lQW5ub3RhdGlvbkNvbmZpZztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuRElTVEFOQ0UuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLmRpc3RhbmNlQW5ub3RhdGlvbkNvbmZpZztcbiAgICB9XG4gIH1cblxuICBmaWxlRHJvcHBlZCgkZXZlbnQpIHtcbiAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID0gJGV2ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhbkFubm90YXRpb25zKCkge1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50UmVmIG9mIHRoaXMuYW5ub3RhdGlvbnMudmFsdWVzKCkpIHtcbiAgICAgIGNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuYW5ub3RhdGlvbnMgPSBuZXcgTWFwPG51bWJlciwgQ29tcG9uZW50UmVmPGFueT4+KCk7XG4gICAgdGhpcy5jb21tZW50cyA9IG5ldyBNYXA8bnVtYmVyLCBDb21tZW50W10+KCk7XG4gIH1cblxuICBoaWRlQW5ub3RhdGlvbnMoKSB7XG4gICAgZm9yIChjb25zdCBhbm5vdGF0aW9uQ29tcFJlZiBvZiB0aGlzLmFubm90YXRpb25zLnZhbHVlcygpKSB7XG4gICAgICB0aGlzLmFubm90YXRpb25zSGlkZGVuID0gKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wUmVmLmluc3RhbmNlKS5oaWRkZW4gPSAhKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wUmVmLmluc3RhbmNlKS5oaWRkZW47XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckRhdGEoKSB7XG4gICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICBwYWdlLmRhdGEgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUFubm90YXRpb24oJGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoJGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMF0gPT09ICdzdmcnIHx8ICRldmVudC50YXJnZXQuY2xhc3NMaXN0WzBdID09PSAnZ2QtcGFnZS1pbWFnZScpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUFubm90YXRpb25UYWIpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmFjdGl2ZUFubm90YXRpb25UYWIpIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2UgPSBlbGVtZW50cy5maW5kKHggPT4geC5pZCAmJiB4LmlkLnN0YXJ0c1dpdGgoXCJwYWdlLVwiKSk7XG4gICAgICAgIGlmIChjdXJyZW50UGFnZSkge1xuICAgICAgICAgIGNvbnN0IGRvY3VtZW50UGFnZSA9ICQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpWzBdO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuZ2V0Q3VycmVudFBvc2l0aW9uKHBvc2l0aW9uLCAkKGRvY3VtZW50UGFnZSkpO1xuICAgICAgICAgIGNvbnN0IHBhZ2VJZCA9IGN1cnJlbnRQYWdlLmlkO1xuICAgICAgICAgIGxldCBwYWdlTnVtYmVyID0gMTtcbiAgICAgICAgICBpZiAocGFnZUlkKSB7XG4gICAgICAgICAgICBjb25zdCBzcGxpdCA9IHBhZ2VJZC5zcGxpdCgnLScpO1xuICAgICAgICAgICAgcGFnZU51bWJlciA9IHNwbGl0Lmxlbmd0aCA9PT0gMiA/IHBhcnNlSW50KHNwbGl0WzFdLCAxMCkgOiBwYWdlTnVtYmVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBpZCA9IHRoaXMuYWRkQW5ub3RhdGlvbkNvbXBvbmVudChwYWdlTnVtYmVyLCBjdXJyZW50UG9zaXRpb24sIG51bGwpO1xuICAgICAgICAgIHRoaXMuX2FjdGl2ZUFubm90YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZShpZCk7XG4gICAgICAgICAgdGhpcy5jcmVhdGluZ0Fubm90YXRpb25JZCA9IGlkO1xuICAgICAgICAgIC8vIHRoaXMuX3RhYkFjdGl2YXRvclNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRBbm5vdGF0aW9uQ29tcG9uZW50KHBhZ2VOdW1iZXI6IG51bWJlciwgY3VycmVudFBvc2l0aW9uOiBQb3NpdGlvbiwgZGF0YTogQW5ub3RhdGlvbkRhdGEpIHtcbiAgICBjb25zdCBkeW5hbWljRGlyZWN0aXZlID0gdGhpcy5faG9zdGluZ0NvbXBvbmVudHNTZXJ2aWNlLmZpbmQocGFnZU51bWJlcik7XG4gICAgaWYgKGR5bmFtaWNEaXJlY3RpdmUpIHtcbiAgICAgIGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSBkeW5hbWljRGlyZWN0aXZlLnZpZXdDb250YWluZXJSZWY7XG4gICAgICBjb25zdCBhbm5vdGF0aW9uQ29tcG9uZW50ID0gdGhpcy5fYWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UuYWRkRHluYW1pY0NvbXBvbmVudCh2aWV3Q29udGFpbmVyUmVmLCBBbm5vdGF0aW9uQ29tcG9uZW50KTtcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXROZXh0SWQoKTtcbiAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS5pZCA9IGlkO1xuICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uO1xuICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgY29uc3QgZGltZW5zaW9uID0gbmV3IERpbWVuc2lvbihkYXRhLndpZHRoLCBkYXRhLmhlaWdodCk7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBBbm5vdGF0aW9uVHlwZS5nZXRBbm5vdGF0aW9uVHlwZShkYXRhLnR5cGUpO1xuICAgICAgICBjb25zdCBmb3JtYXR0aW5nID0gRm9ybWF0dGluZy5kZWZhdWx0KCk7XG4gICAgICAgIGZvcm1hdHRpbmcuZm9udFNpemUgPSBkYXRhLmZvbnRTaXplO1xuICAgICAgICBpZiAoZGF0YS5mb250Q29sb3IpIHtcbiAgICAgICAgICBmb3JtYXR0aW5nLmNvbG9yID0gXCIjXCIgKyBkYXRhLmZvbnRDb2xvci50b1N0cmluZygxNik7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybWF0dGluZy5mb250ID0gZGF0YS5mb250O1xuICAgICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkudHlwZSA9IHR5cGUgPyB0eXBlLmlkIDogZGF0YS50eXBlO1xuICAgICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkuZGltZW5zaW9uID0gZGltZW5zaW9uO1xuICAgICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkuc3ZnUGF0aCA9IGRhdGEuc3ZnUGF0aDtcbiAgICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnRleHRWYWx1ZSA9IGRhdGEudGV4dDtcbiAgICAgICAgaWYgKGZvcm1hdHRpbmcpIHtcbiAgICAgICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkuc2F2ZUZvcm1hdHRpbmcoZm9ybWF0dGluZyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS50eXBlID0gdGhpcy5hY3RpdmVBbm5vdGF0aW9uVGFiO1xuICAgICAgfVxuICAgICAgY29uc3QgcGFnZU1vZGVsID0gdGhpcy5maWxlLnBhZ2VzLmZpbmQoZnVuY3Rpb24gKHApIHtcbiAgICAgICAgcmV0dXJuIHAubnVtYmVyID09PSBwYWdlTnVtYmVyO1xuICAgICAgfSk7XG4gICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkucGFnZVdpZHRoID0gcGFnZU1vZGVsLndpZHRoO1xuICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnBhZ2VIZWlnaHQgPSBwYWdlTW9kZWwuaGVpZ2h0O1xuICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLmhpZGRlbiA9IHRoaXMuYW5ub3RhdGlvbnNIaWRkZW47XG4gICAgICB0aGlzLmFubm90YXRpb25zLnNldChpZCwgYW5ub3RhdGlvbkNvbXBvbmVudCk7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVzaXppbmdDcmVhdGluZ0Fubm90YXRpb24oJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlQW5ub3RhdGlvblRhYikge1xuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY3JlYXRpbmdBbm5vdGF0aW9uSWQpIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xuICAgICAgY29uc3QgYW5ub3RhdGlvbkNvbXBvbmVudCA9IHRoaXMuYW5ub3RhdGlvbnMuZ2V0KHRoaXMuY3JlYXRpbmdBbm5vdGF0aW9uSWQpO1xuICAgICAgY29uc3QgdHlwZSA9ICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS50eXBlO1xuICAgICAgY29uc3QgcGFnZU51bWJlciA9ICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS5wYWdlTnVtYmVyO1xuICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gdGhpcy5nZXRDdXJyZW50UG9zaXRpb24ocG9zaXRpb24sICQoXCIjcGFnZS1cIiArIHBhZ2VOdW1iZXIpKTtcbiAgICAgIGlmICh0eXBlID09PSBBbm5vdGF0aW9uVHlwZS5QT0xZTElORS5pZCB8fCB0eXBlID09PSBBbm5vdGF0aW9uVHlwZS5ESVNUQU5DRS5pZCB8fCB0eXBlID09PSBBbm5vdGF0aW9uVHlwZS5BUlJPVy5pZCkge1xuICAgICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkuZHJhdyhjdXJyZW50UG9zaXRpb24pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSBBbm5vdGF0aW9uVHlwZS5QT0lOVC5pZCkge1xuICAgICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkuY2FsY0RpbWVuc2lvbnMoY3VycmVudFBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiwgcGFnZSkge1xuICAgIGNvbnN0IGxlZnQgPSAocG9zaXRpb24ueCAtIHBhZ2Uub2Zmc2V0KCkubGVmdCkgLyAodGhpcy56b29tIC8gMTAwKTtcbiAgICBjb25zdCB0b3AgPSAocG9zaXRpb24ueSAtIHBhZ2Uub2Zmc2V0KCkudG9wKSAvICh0aGlzLnpvb20gLyAxMDApO1xuICAgIHJldHVybiBuZXcgUG9zaXRpb24obGVmdCwgdG9wKTtcbiAgfVxuXG4gIGZpbmlzaENyZWF0aW5nQW5ub3RhdGlvbigkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVBbm5vdGF0aW9uVGFiKSB7XG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jcmVhdGluZ0Fubm90YXRpb25JZCkge1xuICAgICAgdGhpcy5fYWN0aXZlQW5ub3RhdGlvblNlcnZpY2UuY2hhbmdlQWN0aXZlKHRoaXMuY3JlYXRpbmdBbm5vdGF0aW9uSWQpO1xuICAgICAgdGhpcy5jcmVhdGluZ0Fubm90YXRpb25JZCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VDb21tZW50cygpIHtcbiAgICB0aGlzLmNvbW1lbnRPcGVuZWRJZCA9IG51bGw7XG4gIH1cblxuICBvblBhbigkZXZlbnQpIHtcbiAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHRoaXMuX3pvb20pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXh0SWQoKSB7XG4gICAgbGV0IG1heElkID0gMDtcbiAgICBmb3IgKGNvbnN0IGFubklkIG9mIHRoaXMuYW5ub3RhdGlvbnMua2V5cygpKSB7XG4gICAgICBpZiAoYW5uSWQgPiBtYXhJZCkge1xuICAgICAgICBtYXhJZCA9IGFubklkO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBpZCA9IG1heElkICsgMTtcbiAgICByZXR1cm4gaWQ7XG4gIH1cbn1cbiJdfQ==