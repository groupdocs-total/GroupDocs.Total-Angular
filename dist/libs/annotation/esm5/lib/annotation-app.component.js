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
        if (this.annotationConfig.defaultDocument !== "") {
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
                    template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\r\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\">\r\n  <div class=\"annotation-wrapper wrapper\">\r\n    <gd-tabbed-toolbars [logo]=\"'annotation'\" [icon]=\"'pen-square'\">\r\n      <gd-tabs>\r\n        <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\r\n          <div id=\"files-tools\" class=\"toolbar-panel\">\r\n            <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\r\n                       *ngIf=\"browseConfig\"></gd-button>\r\n\r\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\r\n                       (click)=\"downloadFile()\" *ngIf=\"downloadConfig\"></gd-button>\r\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"annotate()\"></gd-button>\r\n            <gd-button class=\"desktop-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\"\r\n              (click)=\"zoomIn()\" *ngIf=\"zoomConfig\"></gd-button>\r\n            <gd-button class=\"desktop-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\"\r\n              (click)=\"zoomOut()\" *ngIf=\"zoomConfig\"></gd-button>\r\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"annotationsHidden ? 'toggle-off' : 'toggle-on'\" [tooltip]=\"'Hide annotations'\" (click)=\"hideAnnotations()\"></gd-button>\r\n          </div>\r\n        </gd-tab>\r\n        <gd-tab [tabTitle]=\"'Annotations'\" [icon]=\"'highlighter'\" [id]=\"'2'\"\r\n                *ngIf=\"isDesktop || (!isDesktop && codesConfigFirst())\">\r\n          <div class=\"toolbar-panel\">\r\n            <div *ngFor=\"let annotationType of (isDesktop ? annotationTypes : annotationTypeFirst)\">\r\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(annotationType.id)\"\r\n                          [icon]=\"annotationType.icon\" (activeTab)=\"activeTab($event)\"\r\n                          [id]=\"annotationType.id\" [tooltip]=\"annotationType.name\">\r\n              </gd-top-tab>\r\n            </div>\r\n          </div>\r\n        </gd-tab>\r\n        <gd-tab [tabTitle]=\"''\" [icon]=\"'vector-square'\" [id]=\"'3'\" *ngIf=\"!isDesktop && codesConfigSecond()\">\r\n          <div class=\"toolbar-panel\">\r\n            <div *ngFor=\"let annotationType of annotationTypeSecond\">\r\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(annotationType.id)\"\r\n                          [icon]=\"annotationType.icon\" (activeTab)=\"activeTab($event)\"\r\n                          [id]=\"annotationType.id\" [tooltip]=\"annotationType.name\">\r\n              </gd-top-tab>\r\n            </div>\r\n          </div>\r\n        </gd-tab>\r\n        <gd-tab [tabTitle]=\"''\" [icon]=\"'i-cursor'\" [id]=\"'4'\" *ngIf=\"!isDesktop && codesConfigThird()\">\r\n          <div class=\"toolbar-panel\">\r\n            <div *ngFor=\"let annotationType of annotationTypeThird\">\r\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(annotationType.id)\"\r\n                          [icon]=\"annotationType.icon\" (activeTab)=\"activeTab($event)\"\r\n                          [id]=\"annotationType.id\" [tooltip]=\"annotationType.name\">\r\n              </gd-top-tab>\r\n            </div>\r\n          </div>\r\n        </gd-tab>\r\n      </gd-tabs>\r\n    </gd-tabbed-toolbars>\r\n    <div class=\"doc-panel\" *ngIf=\"file\" (mousedown)=\"createAnnotation($event)\"\r\n         (mousemove)=\"resizingCreatingAnnotation($event)\" (mouseup)=\"finishCreatingAnnotation($event)\"\r\n         (touchstart)=\"!isDesktop ? createAnnotation($event) : ''\" (touchmove)=\"resizingCreatingAnnotation($event)\"\r\n         (touchend)=\"finishCreatingAnnotation($event)\"\r\n         (panstart)=\"!isDesktop ? createAnnotation($event) : ''\" (panmove)=\"resizingCreatingAnnotation($event)\"\r\n         (panend)=\"finishCreatingAnnotation($event)\">\r\n      <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\r\n                   [preloadPageCount]=\"preloadPageCountConfig\" gdRenderPrint [htmlMode]=\"htmlModeConfig\" (onpan)=\"onPan($event)\"></gd-document>\r\n    </div>\r\n    <gd-comment-panel *ngIf=\"commentOpenedId\" [annotationId]=\"commentOpenedId\"\r\n                      [comments]=\"getComments()\" (closeComments)=\"closeComments()\">\r\n    </gd-comment-panel>\r\n\r\n    <gd-init-state [icon]=\"'highlighter'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\"\r\n                   (fileDropped)=\"fileDropped($event)\">\r\n      Click\r\n      <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon>\r\n      to open file<br>\r\n      Or drop file here\r\n    </gd-init-state>\r\n  </div>\r\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\r\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\r\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\r\n\r\n  <gd-error-modal></gd-error-modal>\r\n  <gd-password-required></gd-password-required>\r\n  <gd-success-modal></gd-success-modal>\r\n  <svg class=\"svg\" xmlns=\"http://www.w3.org/2000/svg\">\r\n    <defs xmlns=\"http://www.w3.org/2000/svg\">\r\n      <marker id=\"end\" orient='auto' markerWidth='20' markerHeight='20'\r\n              refX=\"10\" refY=\"10\" markerUnits=\"strokeWidth\">\r\n        <path d='M0,7 L0,13 L12,10 z' fill='#579AF0'></path>\r\n      </marker>\r\n      <marker id=\"start\" orient='auto' markerWidth='20' markerHeight='20'\r\n              refX=\"0\" refY=\"10\" markerUnits=\"strokeWidth\">\r\n        <path d='M12,7 L12,13 L0,10 z' fill='#579AF0'></path>\r\n      </marker>\r\n    </defs>\r\n  </svg>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2Fubm90YXRpb24vIiwic291cmNlcyI6WyJsaWIvYW5ub3RhdGlvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFFaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixZQUFZLEVBQ1osZUFBZSxFQUNKLFVBQVUsRUFDckIsOEJBQThCLEVBQzlCLFlBQVksRUFDWixlQUFlLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUNwRCxzQkFBc0IsRUFBRSxrQkFBa0IsRUFDMUMsS0FBSyxFQUNMLGFBQWEsRUFDYixXQUFXLEVBQ1osTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsY0FBYyxFQUVkLFFBQVEsRUFHd0QsU0FBUyxFQUMxRSxNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztJQUVoRSxDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQTZERSxnQ0FBb0Isa0JBQXFDLEVBQy9DLGFBQTJCLEVBQzNCLGdCQUFpQyxFQUNqQyxvQkFBNEMsRUFDNUMseUJBQXlELEVBQ3pELDJCQUF1RCxFQUN2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Ozs7OztJQUVwQixxREFBb0M7Ozs7O0lBQ3BDLGdEQUErQjs7SUFDL0IsNkNBQTBEOzs7OztJQUMxRCxzREFBcUM7Ozs7O0lBQ3JDLG9EQUFtQzs7SUFDbkMsbURBQTJCOzs7OztJQUVmLG9EQUE2Qzs7Ozs7SUFDdkQsK0NBQW1DOzs7OztJQUNuQyxrREFBeUM7Ozs7O0lBQ3pDLHNEQUFvRDs7Ozs7SUFDcEQsMkRBQWlFOzs7OztJQUNqRSw2REFBK0Q7Ozs7O0lBQy9ELDBEQUF5RDs7Ozs7SUFDekQsMERBQXlEOztJQUN6RCwyREFBMEQ7Ozs7O0lBSTFELGdEQUFxQzs7Ozs7SUFDckMsOENBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbm5vdGF0aW9uQ29uZmlnIH0gZnJvbSBcIi4vYW5ub3RhdGlvbi1jb25maWdcIjtcclxuaW1wb3J0IHsgQW5ub3RhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9hbm5vdGF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuICBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSxcclxuICBDb21tb25Nb2RhbHMsXHJcbiAgRmlsZUNyZWRlbnRpYWxzLFxyXG4gIEZpbGVNb2RlbCwgRm9ybWF0dGluZyxcclxuICBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXHJcbiAgTW9kYWxTZXJ2aWNlLFxyXG4gIE5hdmlnYXRlU2VydmljZSwgUGFnZVByZWxvYWRTZXJ2aWNlLCBQYXNzd29yZFNlcnZpY2UsXHJcbiAgVG9wVGFiQWN0aXZhdG9yU2VydmljZSwgVXBsb2FkRmlsZXNTZXJ2aWNlLFxyXG4gIFV0aWxzLFxyXG4gIFdpbmRvd1NlcnZpY2UsXHJcbiAgWm9vbVNlcnZpY2VcclxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgQW5ub3RhdGlvblR5cGUsXHJcbiAgQ29tbWVudEFubm90YXRpb24sXHJcbiAgUG9zaXRpb24sXHJcbiAgUmVtb3ZlQW5ub3RhdGlvbixcclxuICBDb21tZW50LFxyXG4gIEZpbGVBbm5vdGF0aW9uRGVzY3JpcHRpb24sIFBhZ2VBbm5vdGF0aW9uTW9kZWwsIEFubm90YXRpb25EYXRhLCBEaW1lbnNpb25cclxufSBmcm9tIFwiLi9hbm5vdGF0aW9uLW1vZGVsc1wiO1xyXG5pbXBvcnQgeyBBbm5vdGF0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vYW5ub3RhdGlvbi9hbm5vdGF0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBY3RpdmVBbm5vdGF0aW9uU2VydmljZSB9IGZyb20gXCIuL2FjdGl2ZS1hbm5vdGF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7IFJlbW92ZUFubm90YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vcmVtb3ZlLWFubm90YXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDb21tZW50QW5ub3RhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9jb21tZW50LWFubm90YXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBBbm5vdGF0aW9uQ29uZmlnU2VydmljZSB9IGZyb20gXCIuL2Fubm90YXRpb24tY29uZmlnLnNlcnZpY2VcIjtcclxuXHJcbmNvbnN0ICQgPSBqcXVlcnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWFubm90YXRpb24tYXBwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYW5ub3RhdGlvbi1hcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Fubm90YXRpb24tYXBwLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25BcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHRpdGxlID0gJ2Fubm90YXRpb24nO1xyXG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xyXG4gIGZpbGU6IEZpbGVBbm5vdGF0aW9uRGVzY3JpcHRpb247XHJcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG4gIGFubm90YXRpb25Db25maWc6IEFubm90YXRpb25Db25maWc7XHJcbiAgYnJvd3NlRmlsZXNNb2RhbCA9IENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcztcclxuICBmb3JtYXREaXNhYmxlZCA9ICF0aGlzLmZpbGU7XHJcbiAgcHVibGljIGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHM7XHJcbiAgYW5ub3RhdGlvblR5cGVzID0gW1xyXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVCxcclxuICAgIEFubm90YXRpb25UeXBlLlRFWFRfU1RSSUtFT1VULFxyXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9VTkRFUkxJTkUsXHJcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhUX1JFUExBQ0VNRU5ULFxyXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9SRURBQ1RJT04sXHJcbiAgICBBbm5vdGF0aW9uVHlwZS5QT0xZTElORSxcclxuICAgIEFubm90YXRpb25UeXBlLkFSUk9XLFxyXG4gICAgQW5ub3RhdGlvblR5cGUuRElTVEFOQ0UsXHJcbiAgICBBbm5vdGF0aW9uVHlwZS5BUkVBLFxyXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9GSUVMRCxcclxuICAgIEFubm90YXRpb25UeXBlLldBVEVSTUFSSyxcclxuICAgIEFubm90YXRpb25UeXBlLlBPSU5ULFxyXG4gIF07XHJcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xyXG4gIGFubm90YXRpb25UeXBlRmlyc3QgPSBbXHJcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhULFxyXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9VTkRFUkxJTkUsXHJcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhUX1JFREFDVElPTixcclxuICAgIEFubm90YXRpb25UeXBlLlRFWFRfUkVQTEFDRU1FTlQsXHJcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhUX1NUUklLRU9VVCxcclxuICBdO1xyXG4gIGFubm90YXRpb25UeXBlU2Vjb25kID0gW1xyXG4gICAgQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUsXHJcbiAgICBBbm5vdGF0aW9uVHlwZS5BUlJPVyxcclxuICAgIEFubm90YXRpb25UeXBlLkRJU1RBTkNFLFxyXG4gICAgQW5ub3RhdGlvblR5cGUuQVJFQSxcclxuICAgIEFubm90YXRpb25UeXBlLlBPSU5UXHJcbiAgXTtcclxuICBhbm5vdGF0aW9uVHlwZVRoaXJkID0gW1xyXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9GSUVMRCxcclxuICAgIEFubm90YXRpb25UeXBlLldBVEVSTUFSSyxcclxuICBdO1xyXG4gIGNvdW50UGFnZXMgPSAwO1xyXG4gIGNvbW1lbnRPcGVuZWRJZDogbnVtYmVyO1xyXG4gIGNvbW1lbnRzID0gbmV3IE1hcDxudW1iZXIsIENvbW1lbnRbXT4oKTtcclxuICBfem9vbSA9IDEwMDtcclxuICBfcGFnZVdpZHRoOiBudW1iZXI7XHJcbiAgX3BhZ2VIZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmVBbm5vdGF0aW9uVGFiOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBmaWxlV2FzRHJvcHBlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBhbm5vdGF0aW9ucyA9IG5ldyBNYXA8bnVtYmVyLCBDb21wb25lbnRSZWY8YW55Pj4oKTtcclxuICBwcml2YXRlIGNyZWF0aW5nQW5ub3RhdGlvbklkOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBhY3RpdmVBbm5vdGF0aW9uSWQ6IG51bWJlcjtcclxuICBhbm5vdGF0aW9uc0hpZGRlbjogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYW5ub3RhdGlvblNlcnZpY2U6IEFubm90YXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgX3RhYkFjdGl2YXRvclNlcnZpY2U6IFRvcFRhYkFjdGl2YXRvclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9ob3N0aW5nQ29tcG9uZW50c1NlcnZpY2U6IEhvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZSxcclxuICAgIHByaXZhdGUgX2FkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlOiBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSxcclxuICAgIHByaXZhdGUgX2FjdGl2ZUFubm90YXRpb25TZXJ2aWNlOiBBY3RpdmVBbm5vdGF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgX3JlbW92ZUFubm90YXRpb25TZXJ2aWNlOiBSZW1vdmVBbm5vdGF0aW9uU2VydmljZSxcclxuICAgIHB1YmxpYyBfY29tbWVudEFubm90YXRpb25TZXJ2aWNlOiBDb21tZW50QW5ub3RhdGlvblNlcnZpY2UsXHJcbiAgICB1cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcclxuICAgIHBhZ2VQcmVsb2FkU2VydmljZTogUGFnZVByZWxvYWRTZXJ2aWNlLFxyXG4gICAgcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxyXG4gICAgY29uZmlnU2VydmljZTogQW5ub3RhdGlvbkNvbmZpZ1NlcnZpY2UpIHtcclxuXHJcbiAgICBjb25maWdTZXJ2aWNlLnVwZGF0ZWRDb25maWcuc3Vic2NyaWJlKChhbm5vdGF0aW9uQ29uZmlnKSA9PiB7XHJcbiAgICAgIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA9IGFubm90YXRpb25Db25maWc7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xyXG4gICAgX3dpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XHJcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XHJcbiAgICAgIGlmICghdGhpcy5pc0Rlc2t0b3ApIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hab29tKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2FjdGl2ZUFubm90YXRpb25TZXJ2aWNlLmFjdGl2ZUNoYW5nZS5zdWJzY3JpYmUoKGlkOiBudW1iZXIpID0+IHtcclxuICAgICAgaWYgKHRoaXMuYWN0aXZlQW5ub3RhdGlvbklkICE9PSBpZCkge1xyXG4gICAgICAgIHRoaXMuY29tbWVudE9wZW5lZElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFjdGl2ZUFubm90YXRpb25JZCA9IGlkO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9jb21tZW50QW5ub3RhdGlvblNlcnZpY2UuY29tbWVudEFubm90YXRpb24uc3Vic2NyaWJlKChjb21tZW50QW5ub3RhdGlvbjogQ29tbWVudEFubm90YXRpb24pID0+IHtcclxuICAgICAgdGhpcy5jb21tZW50T3BlbmVkSWQgPSBjb21tZW50QW5ub3RhdGlvbi5pZDtcclxuICAgICAgaWYgKCF0aGlzLmNvbW1lbnRzLmdldCh0aGlzLmNvbW1lbnRPcGVuZWRJZCkpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzLnNldCh0aGlzLmNvbW1lbnRPcGVuZWRJZCwgW10pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9jb21tZW50QW5ub3RhdGlvblNlcnZpY2UuYWRkQ29tbWVudE9ic2VydmUuc3Vic2NyaWJlKChjb21tZW50OiBDb21tZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuY29tbWVudHMuZ2V0KHRoaXMuY29tbWVudE9wZW5lZElkKS5wdXNoKGNvbW1lbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fcmVtb3ZlQW5ub3RhdGlvblNlcnZpY2UucmVtb3ZlQW5ub3RhdGlvbi5zdWJzY3JpYmUoKHJlbW92ZUFubm90YXRpb246IFJlbW92ZUFubm90YXRpb24pID0+IHtcclxuICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5hbm5vdGF0aW9ucy5nZXQocmVtb3ZlQW5ub3RhdGlvbi5pZCk7XHJcbiAgICAgIGlmIChjb21wb25lbnRSZWYpIHtcclxuICAgICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYW5ub3RhdGlvbnMuZGVsZXRlKHJlbW92ZUFubm90YXRpb24uaWQpO1xyXG4gICAgICBpZiAodGhpcy5jb21tZW50T3BlbmVkSWQgPT09IHJlbW92ZUFubm90YXRpb24uaWQpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnRPcGVuZWRJZCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jb21tZW50cy5kZWxldGUocmVtb3ZlQW5ub3RhdGlvbi5pZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB1cGxvYWRGaWxlc1NlcnZpY2UudXBsb2Fkc0NoYW5nZS5zdWJzY3JpYmUoKHVwbG9hZHMpID0+IHtcclxuICAgICAgaWYgKHVwbG9hZHMpIHtcclxuICAgICAgICBsZXQgaTogbnVtYmVyO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB1cGxvYWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB0aGlzLl9hbm5vdGF0aW9uU2VydmljZS51cGxvYWQodXBsb2Fkcy5pdGVtKGkpLCAnJywgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPyB0aGlzLnNlbGVjdEZpbGUob2JqLmd1aWQsICcnLCAnJykgOiB0aGlzLnNlbGVjdERpcignJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHBhZ2VQcmVsb2FkU2VydmljZS5jaGVja1ByZWxvYWQuc3Vic2NyaWJlKChwYWdlOiBudW1iZXIpID0+IHtcclxuICAgICAgaWYgKHRoaXMucHJlbG9hZFBhZ2VDb3VudENvbmZpZyAhPT0gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBwYWdlOyBpIDwgcGFnZSArIDI7IGkrKykge1xyXG4gICAgICAgICAgaWYgKGkgPiAwICYmIGkgPD0gdGhpcy5jb3VudFBhZ2VzICYmICF0aGlzLmZpbGUucGFnZXNbaSAtIDFdLmRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmVsb2FkUGFnZXMoaSwgaSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwYXNzd29yZFNlcnZpY2UucGFzc0NoYW5nZS5zdWJzY3JpYmUoKHBhc3M6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5jcmVkZW50aWFscy5ndWlkLCBwYXNzLCBDb21tb25Nb2RhbHMuUGFzc3dvcmRSZXF1aXJlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xyXG4gICAgX3dpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XHJcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldENvbW1lbnRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tbWVudHMuZ2V0KHRoaXMuY29tbWVudE9wZW5lZElkKTtcclxuICB9XHJcblxyXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5yZXdyaXRlIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCB6b29tQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy56b29tIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXQgcGFnZVNlbGVjdG9yQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5wYWdlU2VsZWN0b3IgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByZWxvYWRQYWdlQ291bnRDb25maWcoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcucHJlbG9hZFBhZ2VDb3VudCA6IDA7XHJcbiAgfVxyXG5cclxuICBnZXQgZG93bmxvYWRDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLmRvd25sb2FkIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBkb3dubG9hZE9yaWdpbmFsQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5kb3dubG9hZE9yaWdpbmFsIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBkb3dubG9hZEFubm90YXRlZENvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcuZG93bmxvYWRBbm5vdGF0ZWQgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcudXBsb2FkIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVmYXVsdERvY3VtZW50Q29uZmlnKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5kZWZhdWx0RG9jdW1lbnQgOiBcIlwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByaW50Q29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5wcmludCA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgYnJvd3NlQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5icm93c2UgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGh0bWxNb2RlQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGVuYWJsZVJpZ2h0Q2xpY2tDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLmVuYWJsZVJpZ2h0Q2xpY2sgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRleHRBbm5vdGF0aW9uQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy50ZXh0QW5ub3RhdGlvbiA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgYXJlYUFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLmFyZWFBbm5vdGF0aW9uIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBwb2ludEFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnBvaW50QW5ub3RhdGlvbiA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgdGV4dFN0cmlrZW91dEFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnRleHRTdHJpa2VvdXRBbm5vdGF0aW9uIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBwb2x5bGluZUFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnBvbHlsaW5lQW5ub3RhdGlvbiA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgdGV4dEZpZWxkQW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcudGV4dEZpZWxkQW5ub3RhdGlvbiA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgd2F0ZXJtYXJrQW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcud2F0ZXJtYXJrQW5ub3RhdGlvbiA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgdGV4dFJlcGxhY2VtZW50QW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcudGV4dFJlcGxhY2VtZW50QW5ub3RhdGlvbiA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgYXJyb3dBbm5vdGF0aW9uQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5hcnJvd0Fubm90YXRpb24gOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRleHRSZWRhY3Rpb25Bbm5vdGF0aW9uQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy50ZXh0UmVkYWN0aW9uQW5ub3RhdGlvbiA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgdGV4dFVuZGVybGluZUFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnRleHRVbmRlcmxpbmVBbm5vdGF0aW9uIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBkaXN0YW5jZUFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLmRpc3RhbmNlQW5ub3RhdGlvbiA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmFubm90YXRpb25Db25maWcuZGVmYXVsdERvY3VtZW50ICE9PSBcIlwiKSB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5kZWZhdWx0RG9jdW1lbnQsIFwiXCIsIFwiXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwdFRvUHgocHQ6IG51bWJlcikge1xyXG4gICAgLy9wdCAqIDk2IC8gNzIgPSBweC5cclxuICAgIHJldHVybiBwdCAqIDk2IC8gNzI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpdFRvV2lkdGgoKSB7XHJcbiAgICAvLyBJbWFnZXMgYW5kIEV4Y2VsLXJlbGF0ZWQgZmlsZXMgcmVjZWl2aW5nIGRpbWVuc2lvbnMgaW4gcHggZnJvbSBzZXJ2ZXJcclxuICAgIGNvbnN0IHBhZ2VXaWR0aCA9IHRoaXMucHRUb1B4KHRoaXMuX3BhZ2VXaWR0aCk7XHJcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5wdFRvUHgodGhpcy5fcGFnZUhlaWdodCk7XHJcbiAgICBjb25zdCBvZmZzZXRXaWR0aCA9IHBhZ2VXaWR0aCA/IHBhZ2VXaWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgIHJldHVybiAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCAmJiBNYXRoLnJvdW5kKG9mZnNldFdpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpIDwgMikgPyAyMDAgLSBNYXRoLnJvdW5kKG9mZnNldFdpZHRoICogMTAwIC8gd2luZG93LmlubmVyV2lkdGgpIDogTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAqIDEwMCAvIG9mZnNldFdpZHRoKTtcclxuICB9XHJcblxyXG4gIHNldCB6b29tKHpvb20pIHtcclxuICAgIHRoaXMuX3pvb20gPSB6b29tO1xyXG4gICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLl96b29tKTtcclxuICB9XHJcblxyXG4gIGdldCB6b29tKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3pvb207XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZnJlc2hab29tKCkge1xyXG4gICAgdGhpcy56b29tID0gdGhpcy5fd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKSA/IDEwMCA6IHRoaXMuZ2V0Rml0VG9XaWR0aCgpO1xyXG4gIH1cclxuXHJcbiAgem9vbUluKCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGlmICh0aGlzLl96b29tIDwgNDkwKSB7XHJcbiAgICAgIHRoaXMuem9vbSA9IHRoaXMuX3pvb20gKyAxMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHpvb21PdXQoKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgaWYgKHRoaXMuX3pvb20gPiAzMCkge1xyXG4gICAgICB0aGlzLnpvb20gPSB0aGlzLl96b29tIC0gMTA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oaWQpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VNb2RhbChpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoaWQpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9hbm5vdGF0aW9uU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBGaWxlTW9kZWxbXSkgPT4gdGhpcy5maWxlcyA9IGZpbGVzIHx8IFtdKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEZpbGUoJGV2ZW50OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG1vZGFsSWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG5ldyBGaWxlQ3JlZGVudGlhbHMoJGV2ZW50LCBwYXNzd29yZCk7XHJcbiAgICB0aGlzLmZpbGUgPSBudWxsO1xyXG4gICAgdGhpcy5jb21tZW50T3BlbmVkSWQgPSBudWxsO1xyXG4gICAgdGhpcy5fYW5ub3RhdGlvblNlcnZpY2UubG9hZEZpbGUodGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKChmaWxlOiBGaWxlQW5ub3RhdGlvbkRlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xlYW5Bbm5vdGF0aW9ucygpO1xyXG4gICAgICB0aGlzLmZpbGUgPSBmaWxlO1xyXG4gICAgICB0aGlzLmZvcm1hdERpc2FibGVkID0gIXRoaXMuZmlsZTtcclxuICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNEZXNrdG9wICYmIGZpbGUucGFnZXMgJiYgZmlsZS5wYWdlc1swXSkge1xyXG4gICAgICAgICAgdGhpcy5fcGFnZUhlaWdodCA9IGZpbGUucGFnZXNbMF0uaGVpZ2h0O1xyXG4gICAgICAgICAgdGhpcy5fcGFnZVdpZHRoID0gZmlsZS5wYWdlc1swXS53aWR0aDtcclxuICAgICAgICAgIHRoaXMucmVmcmVzaFpvb20oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJlbG9hZFBhZ2VDb3VudCA9IHRoaXMucHJlbG9hZFBhZ2VDb3VudENvbmZpZztcclxuICAgICAgICBjb25zdCBjb3VudFBhZ2VzID0gZmlsZS5wYWdlcyA/IGZpbGUucGFnZXMubGVuZ3RoIDogMDtcclxuICAgICAgICBpZiAocHJlbG9hZFBhZ2VDb3VudCA+IDApIHtcclxuICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKDEsIHByZWxvYWRQYWdlQ291bnQgPiBjb3VudFBhZ2VzID8gY291bnRQYWdlcyA6IHByZWxvYWRQYWdlQ291bnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwYWdlIG9mIHRoaXMuZmlsZS5wYWdlcykge1xyXG4gICAgICAgICAgICAgIHRoaXMuaW1wb3J0QW5ub3RhdGlvbnMocGFnZS5hbm5vdGF0aW9ucyA/IHBhZ2UuYW5ub3RhdGlvbnMgOiBbXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jb3VudFBhZ2VzID0gY291bnRQYWdlcztcclxuICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgIHRoaXMuY291bnRQYWdlcyA9IGNvdW50UGFnZXM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICk7XHJcbiAgICBpZiAobW9kYWxJZCkge1xyXG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UobW9kYWxJZCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsZWFyRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgcHJlbG9hZFBhZ2VzKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XHJcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcclxuICAgICAgdGhpcy5fYW5ub3RhdGlvblNlcnZpY2UubG9hZFBhZ2UodGhpcy5jcmVkZW50aWFscywgaSkuc3Vic2NyaWJlKChwYWdlOiBQYWdlQW5ub3RhdGlvbk1vZGVsKSA9PiB7XHJcbiAgICAgICAgdGhpcy5maWxlLnBhZ2VzW2kgLSAxXSA9IHBhZ2U7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmltcG9ydEFubm90YXRpb25zKHBhZ2UuYW5ub3RhdGlvbnMgPyBwYWdlLmFubm90YXRpb25zIDogW10pO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbXBvcnRBbm5vdGF0aW9ucyhhbm5vdGF0aW9uczogQW5ub3RhdGlvbkRhdGFbXSkge1xyXG4gICAgZm9yIChjb25zdCBhbm5vdGF0aW9uIG9mIGFubm90YXRpb25zKSB7XHJcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKGFubm90YXRpb24ubGVmdCwgYW5ub3RhdGlvbi50b3ApO1xyXG4gICAgICBjb25zdCBpZCA9IHRoaXMuYWRkQW5ub3RhdGlvbkNvbXBvbmVudChhbm5vdGF0aW9uLnBhZ2VOdW1iZXIsIHBvc2l0aW9uLCBhbm5vdGF0aW9uKTtcclxuICAgICAgdGhpcy5jb21tZW50cy5zZXQoaWQsIGFubm90YXRpb24uY29tbWVudHMpO1xyXG4gICAgICB0aGlzLl9hY3RpdmVBbm5vdGF0aW9uU2VydmljZS5jaGFuZ2VBY3RpdmUoaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9hbm5vdGF0aW9uU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25SaWdodENsaWNrKCRldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZW5hYmxlUmlnaHRDbGlja0NvbmZpZztcclxuICB9XHJcblxyXG4gIGRvd25sb2FkRmlsZSgpIHtcclxuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHRoaXMuX2Fubm90YXRpb25TZXJ2aWNlLmdldERvd25sb2FkVXJsKHRoaXMuY3JlZGVudGlhbHMpKTtcclxuICB9XHJcblxyXG4gIGFubm90YXRlKCkge1xyXG4gICAgY29uc3QgYW5ub3RhdGlvbnNEYXRhID0gdGhpcy5wcmVwYXJlQW5ub3RhdGlvbnNEYXRhKCk7XHJcblxyXG4gICAgdGhpcy5fYW5ub3RhdGlvblNlcnZpY2UuYW5ub3RhdGUodGhpcy5jcmVkZW50aWFscywgYW5ub3RhdGlvbnNEYXRhLCBmYWxzZSkuc3Vic2NyaWJlKChyZXQ6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuT3BlcmF0aW9uU3VjY2Vzcyk7XHJcbiAgICAgIHRoaXMuc2VsZWN0RmlsZShyZXQuZ3VpZCwgdGhpcy5jcmVkZW50aWFscy5wYXNzd29yZCwgQ29tbW9uTW9kYWxzLk9wZXJhdGlvblN1Y2Nlc3MpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJlcGFyZUFubm90YXRpb25zRGF0YSgpIHtcclxuICAgIGNvbnN0IGFubm90YXRpb25zRGF0YSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBhbm5vdGF0aW9uIG9mIHRoaXMuYW5ub3RhdGlvbnMudmFsdWVzKCkpIHtcclxuICAgICAgY29uc3QgYW5ub3RhdGlvbkRhdGEgPSAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbi5pbnN0YW5jZSkuZ2V0QW5ub3RhdGlvbkRhdGEoKTtcclxuICAgICAgYW5ub3RhdGlvbkRhdGEuY29tbWVudHMgPSB0aGlzLmNvbW1lbnRzLmdldChhbm5vdGF0aW9uRGF0YS5pZCk7XHJcbiAgICAgIGFubm90YXRpb25zRGF0YS5wdXNoKGFubm90YXRpb25EYXRhKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhbm5vdGF0aW9uc0RhdGE7XHJcbiAgfVxyXG5cclxuICBpc1Zpc2libGUoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3VwcG9ydGVkID0gIXRoaXMuZmlsZSB8fCAodGhpcy5maWxlICYmIHRoaXMuZmlsZS5zdXBwb3J0ZWRBbm5vdGF0aW9ucyAmJlxyXG4gICAgICB0aGlzLmZpbGUuc3VwcG9ydGVkQW5ub3RhdGlvbnMuZmluZChmdW5jdGlvbiAodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBpZCA9PT0gdmFsdWU7XHJcbiAgICAgIH0pKTtcclxuICAgIHJldHVybiB0aGlzLmdldEFubm90YXRpb25UeXBlQ29uZmlnKGlkKSAmJiBzdXBwb3J0ZWQ7XHJcbiAgfVxyXG5cclxuICBhY3RpdmVUYWIoJGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5hY3RpdmVBbm5vdGF0aW9uVGFiICYmICRldmVudCA9PT0gdGhpcy5hY3RpdmVBbm5vdGF0aW9uVGFiKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlQW5ub3RhdGlvblRhYiA9IG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFjdGl2ZUFubm90YXRpb25UYWIgPSAkZXZlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb2Rlc0NvbmZpZ0ZpcnN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hlY2tDb25maWcodGhpcy5hbm5vdGF0aW9uVHlwZUZpcnN0KTtcclxuICB9XHJcblxyXG4gIGNvZGVzQ29uZmlnU2Vjb25kKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hlY2tDb25maWcodGhpcy5hbm5vdGF0aW9uVHlwZVNlY29uZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrQ29uZmlnKGFubm90YXRpb25MaXN0KSB7XHJcbiAgICBmb3IgKGNvbnN0IGFubm90YXRpb25UeXBlIG9mIGFubm90YXRpb25MaXN0KSB7XHJcbiAgICAgIGlmICh0aGlzLmdldEFubm90YXRpb25UeXBlQ29uZmlnKGFubm90YXRpb25UeXBlLmlkKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb2Rlc0NvbmZpZ1RoaXJkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QW5ub3RhdGlvblR5cGVDb25maWcoQW5ub3RhdGlvblR5cGUuVEVYVF9GSUVMRC5pZCkgJiYgdGhpcy5nZXRBbm5vdGF0aW9uVHlwZUNvbmZpZyhBbm5vdGF0aW9uVHlwZS5XQVRFUk1BUksuaWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRBbm5vdGF0aW9uVHlwZUNvbmZpZyhpZDogc3RyaW5nKSB7XHJcbiAgICBzd2l0Y2ggKGlkKSB7XHJcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVC5pZDpcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0QW5ub3RhdGlvbkNvbmZpZztcclxuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5BUkVBLmlkOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmFyZWFBbm5vdGF0aW9uQ29uZmlnO1xyXG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlBPSU5ULmlkOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnBvaW50QW5ub3RhdGlvbkNvbmZpZztcclxuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1NUUklLRU9VVC5pZDpcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0U3RyaWtlb3V0QW5ub3RhdGlvbkNvbmZpZztcclxuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5QT0xZTElORS5pZDpcclxuICAgICAgICByZXR1cm4gdGhpcy5wb2x5bGluZUFubm90YXRpb25Db25maWc7XHJcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9GSUVMRC5pZDpcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0RmllbGRBbm5vdGF0aW9uQ29uZmlnO1xyXG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLldBVEVSTUFSSy5pZDpcclxuICAgICAgICByZXR1cm4gdGhpcy53YXRlcm1hcmtBbm5vdGF0aW9uQ29uZmlnO1xyXG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfUkVQTEFDRU1FTlQuaWQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFJlcGxhY2VtZW50QW5ub3RhdGlvbkNvbmZpZztcclxuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5BUlJPVy5pZDpcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJvd0Fubm90YXRpb25Db25maWc7XHJcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9SRURBQ1RJT04uaWQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFJlZGFjdGlvbkFubm90YXRpb25Db25maWc7XHJcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9VTkRFUkxJTkUuaWQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFVuZGVybGluZUFubm90YXRpb25Db25maWc7XHJcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuRElTVEFOQ0UuaWQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzdGFuY2VBbm5vdGF0aW9uQ29uZmlnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmlsZURyb3BwZWQoJGV2ZW50KSB7XHJcbiAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID0gJGV2ZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhbkFubm90YXRpb25zKCkge1xyXG4gICAgZm9yIChjb25zdCBjb21wb25lbnRSZWYgb2YgdGhpcy5hbm5vdGF0aW9ucy52YWx1ZXMoKSkge1xyXG4gICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hbm5vdGF0aW9ucyA9IG5ldyBNYXA8bnVtYmVyLCBDb21wb25lbnRSZWY8YW55Pj4oKTtcclxuICAgIHRoaXMuY29tbWVudHMgPSBuZXcgTWFwPG51bWJlciwgQ29tbWVudFtdPigpO1xyXG4gIH1cclxuXHJcbiAgaGlkZUFubm90YXRpb25zKCkge1xyXG4gICAgZm9yIChjb25zdCBhbm5vdGF0aW9uQ29tcFJlZiBvZiB0aGlzLmFubm90YXRpb25zLnZhbHVlcygpKSB7XHJcbiAgICAgIHRoaXMuYW5ub3RhdGlvbnNIaWRkZW4gPSAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBSZWYuaW5zdGFuY2UpLmhpZGRlbiA9ICEoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBSZWYuaW5zdGFuY2UpLmhpZGRlbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJEYXRhKCkge1xyXG4gICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5wYWdlcykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgdGhpcy5maWxlLnBhZ2VzKSB7XHJcbiAgICAgIHBhZ2UuZGF0YSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVBbm5vdGF0aW9uKCRldmVudDogYW55KSB7XHJcbiAgICBpZiAoJGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMF0gPT09ICdzdmcnIHx8ICRldmVudC50YXJnZXQuY2xhc3NMaXN0WzBdID09PSAnZ2QtcGFnZS1pbWFnZScpIHtcclxuICAgICAgaWYgKHRoaXMuYWN0aXZlQW5ub3RhdGlvblRhYikge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5hY3RpdmVBbm5vdGF0aW9uVGFiKSB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2UgPSBlbGVtZW50cy5maW5kKHggPT4geC5pZCAmJiB4LmlkLnN0YXJ0c1dpdGgoXCJwYWdlLVwiKSk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgICBjb25zdCBkb2N1bWVudFBhZ2UgPSAkKGN1cnJlbnRQYWdlKS5wYXJlbnQoKS5wYXJlbnQoKVswXTtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuZ2V0Q3VycmVudFBvc2l0aW9uKHBvc2l0aW9uLCAkKGRvY3VtZW50UGFnZSkpO1xyXG4gICAgICAgICAgY29uc3QgcGFnZUlkID0gY3VycmVudFBhZ2UuaWQ7XHJcbiAgICAgICAgICBsZXQgcGFnZU51bWJlciA9IDE7XHJcbiAgICAgICAgICBpZiAocGFnZUlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0ID0gcGFnZUlkLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgIHBhZ2VOdW1iZXIgPSBzcGxpdC5sZW5ndGggPT09IDIgPyBwYXJzZUludChzcGxpdFsxXSwgMTApIDogcGFnZU51bWJlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5hZGRBbm5vdGF0aW9uQ29tcG9uZW50KHBhZ2VOdW1iZXIsIGN1cnJlbnRQb3NpdGlvbiwgbnVsbCk7XHJcbiAgICAgICAgICB0aGlzLl9hY3RpdmVBbm5vdGF0aW9uU2VydmljZS5jaGFuZ2VBY3RpdmUoaWQpO1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGluZ0Fubm90YXRpb25JZCA9IGlkO1xyXG4gICAgICAgICAgLy8gdGhpcy5fdGFiQWN0aXZhdG9yU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZEFubm90YXRpb25Db21wb25lbnQocGFnZU51bWJlcjogbnVtYmVyLCBjdXJyZW50UG9zaXRpb246IFBvc2l0aW9uLCBkYXRhOiBBbm5vdGF0aW9uRGF0YSkge1xyXG4gICAgY29uc3QgZHluYW1pY0RpcmVjdGl2ZSA9IHRoaXMuX2hvc3RpbmdDb21wb25lbnRzU2VydmljZS5maW5kKHBhZ2VOdW1iZXIpO1xyXG4gICAgaWYgKGR5bmFtaWNEaXJlY3RpdmUpIHtcclxuICAgICAgY29uc3Qgdmlld0NvbnRhaW5lclJlZiA9IGR5bmFtaWNEaXJlY3RpdmUudmlld0NvbnRhaW5lclJlZjtcclxuICAgICAgY29uc3QgYW5ub3RhdGlvbkNvbXBvbmVudCA9IHRoaXMuX2FkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLmFkZER5bmFtaWNDb21wb25lbnQodmlld0NvbnRhaW5lclJlZiwgQW5ub3RhdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXROZXh0SWQoKTtcclxuICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLmlkID0gaWQ7XHJcbiAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS5wb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbjtcclxuICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xyXG4gICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IG5ldyBEaW1lbnNpb24oZGF0YS53aWR0aCwgZGF0YS5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBBbm5vdGF0aW9uVHlwZS5nZXRBbm5vdGF0aW9uVHlwZShkYXRhLnR5cGUpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRpbmcgPSBGb3JtYXR0aW5nLmRlZmF1bHQoKTtcclxuICAgICAgICBmb3JtYXR0aW5nLmZvbnRTaXplID0gZGF0YS5mb250U2l6ZTtcclxuICAgICAgICBpZiAoZGF0YS5mb250Q29sb3IpIHtcclxuICAgICAgICAgIGZvcm1hdHRpbmcuY29sb3IgPSBcIiNcIiArIGRhdGEuZm9udENvbG9yLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ybWF0dGluZy5mb250ID0gZGF0YS5mb250O1xyXG4gICAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS50eXBlID0gdHlwZSA/IHR5cGUuaWQgOiBkYXRhLnR5cGU7XHJcbiAgICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLmRpbWVuc2lvbiA9IGRpbWVuc2lvbjtcclxuICAgICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkuc3ZnUGF0aCA9IGRhdGEuc3ZnUGF0aDtcclxuICAgICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkudGV4dFZhbHVlID0gZGF0YS50ZXh0O1xyXG4gICAgICAgIGlmIChmb3JtYXR0aW5nKSB7XHJcbiAgICAgICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkuc2F2ZUZvcm1hdHRpbmcoZm9ybWF0dGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS50eXBlID0gdGhpcy5hY3RpdmVBbm5vdGF0aW9uVGFiO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHBhZ2VNb2RlbCA9IHRoaXMuZmlsZS5wYWdlcy5maW5kKGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgcmV0dXJuIHAubnVtYmVyID09PSBwYWdlTnVtYmVyO1xyXG4gICAgICB9KTtcclxuICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnBhZ2VXaWR0aCA9IHBhZ2VNb2RlbC53aWR0aDtcclxuICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnBhZ2VIZWlnaHQgPSBwYWdlTW9kZWwuaGVpZ2h0O1xyXG4gICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkuaGlkZGVuID0gdGhpcy5hbm5vdGF0aW9uc0hpZGRlbjtcclxuICAgICAgdGhpcy5hbm5vdGF0aW9ucy5zZXQoaWQsIGFubm90YXRpb25Db21wb25lbnQpO1xyXG4gICAgICByZXR1cm4gaWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJlc2l6aW5nQ3JlYXRpbmdBbm5vdGF0aW9uKCRldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuYWN0aXZlQW5ub3RhdGlvblRhYikge1xyXG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jcmVhdGluZ0Fubm90YXRpb25JZCkge1xyXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcclxuICAgICAgY29uc3QgYW5ub3RhdGlvbkNvbXBvbmVudCA9IHRoaXMuYW5ub3RhdGlvbnMuZ2V0KHRoaXMuY3JlYXRpbmdBbm5vdGF0aW9uSWQpO1xyXG4gICAgICBjb25zdCB0eXBlID0gKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnR5cGU7XHJcbiAgICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkucGFnZU51bWJlcjtcclxuICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gdGhpcy5nZXRDdXJyZW50UG9zaXRpb24ocG9zaXRpb24sICQoXCIjcGFnZS1cIiArIHBhZ2VOdW1iZXIpKTtcclxuICAgICAgaWYgKHR5cGUgPT09IEFubm90YXRpb25UeXBlLlBPTFlMSU5FLmlkIHx8IHR5cGUgPT09IEFubm90YXRpb25UeXBlLkRJU1RBTkNFLmlkIHx8IHR5cGUgPT09IEFubm90YXRpb25UeXBlLkFSUk9XLmlkKSB7XHJcbiAgICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLmRyYXcoY3VycmVudFBvc2l0aW9uKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSBBbm5vdGF0aW9uVHlwZS5QT0lOVC5pZCkge1xyXG4gICAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS5jYWxjRGltZW5zaW9ucyhjdXJyZW50UG9zaXRpb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiwgcGFnZSkge1xyXG4gICAgY29uc3QgbGVmdCA9IChwb3NpdGlvbi54IC0gcGFnZS5vZmZzZXQoKS5sZWZ0KSAvICh0aGlzLnpvb20gLyAxMDApO1xyXG4gICAgY29uc3QgdG9wID0gKHBvc2l0aW9uLnkgLSBwYWdlLm9mZnNldCgpLnRvcCkgLyAodGhpcy56b29tIC8gMTAwKTtcclxuICAgIHJldHVybiBuZXcgUG9zaXRpb24obGVmdCwgdG9wKTtcclxuICB9XHJcblxyXG4gIGZpbmlzaENyZWF0aW5nQW5ub3RhdGlvbigkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmFjdGl2ZUFubm90YXRpb25UYWIpIHtcclxuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY3JlYXRpbmdBbm5vdGF0aW9uSWQpIHtcclxuICAgICAgdGhpcy5fYWN0aXZlQW5ub3RhdGlvblNlcnZpY2UuY2hhbmdlQWN0aXZlKHRoaXMuY3JlYXRpbmdBbm5vdGF0aW9uSWQpO1xyXG4gICAgICB0aGlzLmNyZWF0aW5nQW5ub3RhdGlvbklkID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlQ29tbWVudHMoKSB7XHJcbiAgICB0aGlzLmNvbW1lbnRPcGVuZWRJZCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBvblBhbigkZXZlbnQpIHtcclxuICAgIHRoaXMuX3pvb21TZXJ2aWNlLmNoYW5nZVpvb20odGhpcy5fem9vbSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE5leHRJZCgpIHtcclxuICAgIGxldCBtYXhJZCA9IDA7XHJcbiAgICBmb3IgKGNvbnN0IGFubklkIG9mIHRoaXMuYW5ub3RhdGlvbnMua2V5cygpKSB7XHJcbiAgICAgIGlmIChhbm5JZCA+IG1heElkKSB7XHJcbiAgICAgICAgbWF4SWQgPSBhbm5JZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaWQgPSBtYXhJZCArIDE7XHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==