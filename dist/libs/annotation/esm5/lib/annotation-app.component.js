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
                    template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\">\n  <div class=\"annotation-wrapper wrapper\">\n    <gd-tabbed-toolbars [logo]=\"'annotation'\" [icon]=\"'pen-square'\">\n      <gd-tabs>\n        <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\n          <div id=\"files-tools\" class=\"toolbar-panel\">\n            <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                       *ngIf=\"browseConfig\"></gd-button>\n\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                       (click)=\"downloadFile()\" *ngIf=\"downloadConfig\"></gd-button>\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"annotate()\"></gd-button>\n            <gd-button class=\"desktop-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\"\n              (click)=\"zoomIn()\" *ngIf=\"zoomConfig\"></gd-button>\n            <gd-button class=\"desktop-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\"\n              (click)=\"zoomOut()\" *ngIf=\"zoomConfig\"></gd-button>\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"annotationsHidden ? 'toggle-off' : 'toggle-on'\" [tooltip]=\"'Hide annotations'\" (click)=\"hideAnnotations()\"></gd-button>\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"'Annotations'\" [icon]=\"'highlighter'\" [id]=\"'2'\"\n                *ngIf=\"isDesktop || (!isDesktop && codesConfigFirst())\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let annotationType of (isDesktop ? annotationTypes : annotationTypeFirst)\">\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(annotationType.id)\"\n                          [icon]=\"annotationType.icon\" (activeTab)=\"activeTab($event)\"\n                          [id]=\"annotationType.id\" [tooltip]=\"annotationType.name\">\n              </gd-top-tab>\n            </div>\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"''\" [icon]=\"'vector-square'\" [id]=\"'3'\" *ngIf=\"!isDesktop && codesConfigSecond()\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let annotationType of annotationTypeSecond\">\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(annotationType.id)\"\n                          [icon]=\"annotationType.icon\" (activeTab)=\"activeTab($event)\"\n                          [id]=\"annotationType.id\" [tooltip]=\"annotationType.name\">\n              </gd-top-tab>\n            </div>\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"''\" [icon]=\"'i-cursor'\" [id]=\"'4'\" *ngIf=\"!isDesktop && codesConfigThird()\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let annotationType of annotationTypeThird\">\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(annotationType.id)\"\n                          [icon]=\"annotationType.icon\" (activeTab)=\"activeTab($event)\"\n                          [id]=\"annotationType.id\" [tooltip]=\"annotationType.name\">\n              </gd-top-tab>\n            </div>\n          </div>\n        </gd-tab>\n      </gd-tabs>\n    </gd-tabbed-toolbars>\n    <div class=\"doc-panel\" *ngIf=\"file\" (mousedown)=\"createAnnotation($event)\"\n         (mousemove)=\"resizingCreatingAnnotation($event)\" (mouseup)=\"finishCreatingAnnotation($event)\"\n         (touchstart)=\"!isDesktop ? createAnnotation($event) : ''\" (touchmove)=\"resizingCreatingAnnotation($event)\"\n         (touchend)=\"finishCreatingAnnotation($event)\"\n         (panstart)=\"!isDesktop ? createAnnotation($event) : ''\" (panmove)=\"resizingCreatingAnnotation($event)\"\n         (panend)=\"finishCreatingAnnotation($event)\">\n      <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                   [preloadPageCount]=\"preloadPageCountConfig\" gdRenderPrint [htmlMode]=\"htmlModeConfig\" (onpan)=\"onPan($event)\"></gd-document>\n    </div>\n    <gd-comment-panel *ngIf=\"commentOpenedId\" [annotationId]=\"commentOpenedId\"\n                      [comments]=\"getComments()\" (closeComments)=\"closeComments()\">\n    </gd-comment-panel>\n\n    <gd-init-state [icon]=\"'highlighter'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\"\n                   (fileDropped)=\"fileDropped($event)\">\n      Click\n      <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon>\n      to open file<br>\n      Or drop file here\n    </gd-init-state>\n  </div>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n  <svg class=\"svg\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs xmlns=\"http://www.w3.org/2000/svg\">\n      <marker id=\"end\" orient='auto' markerWidth='20' markerHeight='20'\n              refX=\"10\" refY=\"10\" markerUnits=\"strokeWidth\">\n        <path d='M0,7 L0,13 L12,10 z' fill='#579AF0'></path>\n      </marker>\n      <marker id=\"start\" orient='auto' markerWidth='20' markerHeight='20'\n              refX=\"0\" refY=\"10\" markerUnits=\"strokeWidth\">\n        <path d='M12,7 L12,13 L0,10 z' fill='#579AF0'></path>\n      </marker>\n    </defs>\n  </svg>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2Fubm90YXRpb24vIiwic291cmNlcyI6WyJsaWIvYW5ub3RhdGlvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFFaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixZQUFZLEVBQ1osZUFBZSxFQUNKLFVBQVUsRUFDckIsOEJBQThCLEVBQzlCLFlBQVksRUFDWixlQUFlLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUNwRCxzQkFBc0IsRUFBRSxrQkFBa0IsRUFDMUMsS0FBSyxFQUNMLGFBQWEsRUFDYixXQUFXLEVBQ1osTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsY0FBYyxFQUVkLFFBQVEsRUFHd0QsU0FBUyxFQUMxRSxNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztJQUVoRSxDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQTZERSxnQ0FBb0Isa0JBQXFDLEVBQy9DLGFBQTJCLEVBQzNCLGdCQUFpQyxFQUNqQyxvQkFBNEMsRUFDNUMseUJBQXlELEVBQ3pELDJCQUF1RCxFQUN2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Ozs7OztJQUVwQixxREFBb0M7Ozs7O0lBQ3BDLGdEQUErQjs7SUFDL0IsNkNBQTBEOzs7OztJQUMxRCxzREFBcUM7Ozs7O0lBQ3JDLG9EQUFtQzs7SUFDbkMsbURBQTJCOzs7OztJQUVmLG9EQUE2Qzs7Ozs7SUFDdkQsK0NBQW1DOzs7OztJQUNuQyxrREFBeUM7Ozs7O0lBQ3pDLHNEQUFvRDs7Ozs7SUFDcEQsMkRBQWlFOzs7OztJQUNqRSw2REFBK0Q7Ozs7O0lBQy9ELDBEQUF5RDs7Ozs7SUFDekQsMERBQXlEOztJQUN6RCwyREFBMEQ7Ozs7O0lBSTFELGdEQUFxQzs7Ozs7SUFDckMsOENBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ub3RhdGlvbkNvbmZpZyB9IGZyb20gXCIuL2Fubm90YXRpb24tY29uZmlnXCI7XG5pbXBvcnQgeyBBbm5vdGF0aW9uU2VydmljZSB9IGZyb20gXCIuL2Fubm90YXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHtcbiAgQWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gIENvbW1vbk1vZGFscyxcbiAgRmlsZUNyZWRlbnRpYWxzLFxuICBGaWxlTW9kZWwsIEZvcm1hdHRpbmcsXG4gIEhvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgTW9kYWxTZXJ2aWNlLFxuICBOYXZpZ2F0ZVNlcnZpY2UsIFBhZ2VQcmVsb2FkU2VydmljZSwgUGFzc3dvcmRTZXJ2aWNlLFxuICBUb3BUYWJBY3RpdmF0b3JTZXJ2aWNlLCBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gIFV0aWxzLFxuICBXaW5kb3dTZXJ2aWNlLFxuICBab29tU2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge1xuICBBbm5vdGF0aW9uVHlwZSxcbiAgQ29tbWVudEFubm90YXRpb24sXG4gIFBvc2l0aW9uLFxuICBSZW1vdmVBbm5vdGF0aW9uLFxuICBDb21tZW50LFxuICBGaWxlQW5ub3RhdGlvbkRlc2NyaXB0aW9uLCBQYWdlQW5ub3RhdGlvbk1vZGVsLCBBbm5vdGF0aW9uRGF0YSwgRGltZW5zaW9uXG59IGZyb20gXCIuL2Fubm90YXRpb24tbW9kZWxzXCI7XG5pbXBvcnQgeyBBbm5vdGF0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vYW5ub3RhdGlvbi9hbm5vdGF0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWN0aXZlQW5ub3RhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9hY3RpdmUtYW5ub3RhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IFJlbW92ZUFubm90YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vcmVtb3ZlLWFubm90YXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgQ29tbWVudEFubm90YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vY29tbWVudC1hbm5vdGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IEFubm90YXRpb25Db25maWdTZXJ2aWNlIH0gZnJvbSBcIi4vYW5ub3RhdGlvbi1jb25maWcuc2VydmljZVwiO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1hbm5vdGF0aW9uLWFwcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbm5vdGF0aW9uLWFwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Fubm90YXRpb24tYXBwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbkFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRpdGxlID0gJ2Fubm90YXRpb24nO1xuICBmaWxlczogRmlsZU1vZGVsW10gPSBbXTtcbiAgZmlsZTogRmlsZUFubm90YXRpb25EZXNjcmlwdGlvbjtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBhbm5vdGF0aW9uQ29uZmlnOiBBbm5vdGF0aW9uQ29uZmlnO1xuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xuICBmb3JtYXREaXNhYmxlZCA9ICF0aGlzLmZpbGU7XG4gIHB1YmxpYyBjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzO1xuICBhbm5vdGF0aW9uVHlwZXMgPSBbXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVCxcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhUX1NUUklLRU9VVCxcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhUX1VOREVSTElORSxcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhUX1JFUExBQ0VNRU5ULFxuICAgIEFubm90YXRpb25UeXBlLlRFWFRfUkVEQUNUSU9OLFxuICAgIEFubm90YXRpb25UeXBlLlBPTFlMSU5FLFxuICAgIEFubm90YXRpb25UeXBlLkFSUk9XLFxuICAgIEFubm90YXRpb25UeXBlLkRJU1RBTkNFLFxuICAgIEFubm90YXRpb25UeXBlLkFSRUEsXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9GSUVMRCxcbiAgICBBbm5vdGF0aW9uVHlwZS5XQVRFUk1BUkssXG4gICAgQW5ub3RhdGlvblR5cGUuUE9JTlQsXG4gIF07XG4gIGlzRGVza3RvcDogYm9vbGVhbjtcbiAgYW5ub3RhdGlvblR5cGVGaXJzdCA9IFtcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhULFxuICAgIEFubm90YXRpb25UeXBlLlRFWFRfVU5ERVJMSU5FLFxuICAgIEFubm90YXRpb25UeXBlLlRFWFRfUkVEQUNUSU9OLFxuICAgIEFubm90YXRpb25UeXBlLlRFWFRfUkVQTEFDRU1FTlQsXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9TVFJJS0VPVVQsXG4gIF07XG4gIGFubm90YXRpb25UeXBlU2Vjb25kID0gW1xuICAgIEFubm90YXRpb25UeXBlLlBPTFlMSU5FLFxuICAgIEFubm90YXRpb25UeXBlLkFSUk9XLFxuICAgIEFubm90YXRpb25UeXBlLkRJU1RBTkNFLFxuICAgIEFubm90YXRpb25UeXBlLkFSRUEsXG4gICAgQW5ub3RhdGlvblR5cGUuUE9JTlRcbiAgXTtcbiAgYW5ub3RhdGlvblR5cGVUaGlyZCA9IFtcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhUX0ZJRUxELFxuICAgIEFubm90YXRpb25UeXBlLldBVEVSTUFSSyxcbiAgXTtcbiAgY291bnRQYWdlcyA9IDA7XG4gIGNvbW1lbnRPcGVuZWRJZDogbnVtYmVyO1xuICBjb21tZW50cyA9IG5ldyBNYXA8bnVtYmVyLCBDb21tZW50W10+KCk7XG4gIF96b29tID0gMTAwO1xuICBfcGFnZVdpZHRoOiBudW1iZXI7XG4gIF9wYWdlSGVpZ2h0OiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBhY3RpdmVBbm5vdGF0aW9uVGFiOiBzdHJpbmc7XG4gIHByaXZhdGUgZmlsZVdhc0Ryb3BwZWQgPSBmYWxzZTtcbiAgcHVibGljIGFubm90YXRpb25zID0gbmV3IE1hcDxudW1iZXIsIENvbXBvbmVudFJlZjxhbnk+PigpO1xuICBwcml2YXRlIGNyZWF0aW5nQW5ub3RhdGlvbklkOiBudW1iZXI7XG4gIHByaXZhdGUgYWN0aXZlQW5ub3RhdGlvbklkOiBudW1iZXI7XG4gIGFubm90YXRpb25zSGlkZGVuOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Fubm90YXRpb25TZXJ2aWNlOiBBbm5vdGF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcbiAgICBwcml2YXRlIF90YWJBY3RpdmF0b3JTZXJ2aWNlOiBUb3BUYWJBY3RpdmF0b3JTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2hvc3RpbmdDb21wb25lbnRzU2VydmljZTogSG9zdGluZ0R5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2FkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlOiBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgICBwcml2YXRlIF9hY3RpdmVBbm5vdGF0aW9uU2VydmljZTogQWN0aXZlQW5ub3RhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfcmVtb3ZlQW5ub3RhdGlvblNlcnZpY2U6IFJlbW92ZUFubm90YXRpb25TZXJ2aWNlLFxuICAgIHB1YmxpYyBfY29tbWVudEFubm90YXRpb25TZXJ2aWNlOiBDb21tZW50QW5ub3RhdGlvblNlcnZpY2UsXG4gICAgdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gICAgcGFnZVByZWxvYWRTZXJ2aWNlOiBQYWdlUHJlbG9hZFNlcnZpY2UsXG4gICAgcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcbiAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXG4gICAgY29uZmlnU2VydmljZTogQW5ub3RhdGlvbkNvbmZpZ1NlcnZpY2UpIHtcblxuICAgIGNvbmZpZ1NlcnZpY2UudXBkYXRlZENvbmZpZy5zdWJzY3JpYmUoKGFubm90YXRpb25Db25maWcpID0+IHtcbiAgICAgIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA9IGFubm90YXRpb25Db25maWc7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xuICAgICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICAgIGlmICghdGhpcy5pc0Rlc2t0b3ApIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fYWN0aXZlQW5ub3RhdGlvblNlcnZpY2UuYWN0aXZlQ2hhbmdlLnN1YnNjcmliZSgoaWQ6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlQW5ub3RhdGlvbklkICE9PSBpZCkge1xuICAgICAgICB0aGlzLmNvbW1lbnRPcGVuZWRJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aXZlQW5ub3RhdGlvbklkID0gaWQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jb21tZW50QW5ub3RhdGlvblNlcnZpY2UuY29tbWVudEFubm90YXRpb24uc3Vic2NyaWJlKChjb21tZW50QW5ub3RhdGlvbjogQ29tbWVudEFubm90YXRpb24pID0+IHtcbiAgICAgIHRoaXMuY29tbWVudE9wZW5lZElkID0gY29tbWVudEFubm90YXRpb24uaWQ7XG4gICAgICBpZiAoIXRoaXMuY29tbWVudHMuZ2V0KHRoaXMuY29tbWVudE9wZW5lZElkKSkge1xuICAgICAgICB0aGlzLmNvbW1lbnRzLnNldCh0aGlzLmNvbW1lbnRPcGVuZWRJZCwgW10pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fY29tbWVudEFubm90YXRpb25TZXJ2aWNlLmFkZENvbW1lbnRPYnNlcnZlLnN1YnNjcmliZSgoY29tbWVudDogQ29tbWVudCkgPT4ge1xuICAgICAgdGhpcy5jb21tZW50cy5nZXQodGhpcy5jb21tZW50T3BlbmVkSWQpLnB1c2goY29tbWVudCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9yZW1vdmVBbm5vdGF0aW9uU2VydmljZS5yZW1vdmVBbm5vdGF0aW9uLnN1YnNjcmliZSgocmVtb3ZlQW5ub3RhdGlvbjogUmVtb3ZlQW5ub3RhdGlvbikgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5hbm5vdGF0aW9ucy5nZXQocmVtb3ZlQW5ub3RhdGlvbi5pZCk7XG4gICAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICAgIGNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgICB0aGlzLmFubm90YXRpb25zLmRlbGV0ZShyZW1vdmVBbm5vdGF0aW9uLmlkKTtcbiAgICAgIGlmICh0aGlzLmNvbW1lbnRPcGVuZWRJZCA9PT0gcmVtb3ZlQW5ub3RhdGlvbi5pZCkge1xuICAgICAgICB0aGlzLmNvbW1lbnRPcGVuZWRJZCA9IG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbW1lbnRzLmRlbGV0ZShyZW1vdmVBbm5vdGF0aW9uLmlkKTtcbiAgICB9KTtcblxuICAgIHVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xuICAgICAgaWYgKHVwbG9hZHMpIHtcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHVwbG9hZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLl9hbm5vdGF0aW9uU2VydmljZS51cGxvYWQodXBsb2Fkcy5pdGVtKGkpLCAnJywgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID8gdGhpcy5zZWxlY3RGaWxlKG9iai5ndWlkLCAnJywgJycpIDogdGhpcy5zZWxlY3REaXIoJycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYWdlUHJlbG9hZFNlcnZpY2UuY2hlY2tQcmVsb2FkLnN1YnNjcmliZSgocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy5wcmVsb2FkUGFnZUNvdW50Q29uZmlnICE9PSAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBwYWdlOyBpIDwgcGFnZSArIDI7IGkrKykge1xuICAgICAgICAgIGlmIChpID4gMCAmJiBpIDw9IHRoaXMuY291bnRQYWdlcyAmJiAhdGhpcy5maWxlLnBhZ2VzW2kgLSAxXS5kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnByZWxvYWRQYWdlcyhpLCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhc3N3b3JkU2VydmljZS5wYXNzQ2hhbmdlLnN1YnNjcmliZSgocGFzczogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5jcmVkZW50aWFscy5ndWlkLCBwYXNzLCBDb21tb25Nb2RhbHMuUGFzc3dvcmRSZXF1aXJlZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xuICAgICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldENvbW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbW1lbnRzLmdldCh0aGlzLmNvbW1lbnRPcGVuZWRJZCk7XG4gIH1cblxuICBnZXQgcmV3cml0ZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHpvb21Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy56b29tIDogZmFsc2U7XG4gIH1cblxuICBnZXQgcGFnZVNlbGVjdG9yQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcucGFnZVNlbGVjdG9yIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBwcmVsb2FkUGFnZUNvdW50Q29uZmlnKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5wcmVsb2FkUGFnZUNvdW50IDogMDtcbiAgfVxuXG4gIGdldCBkb3dubG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLmRvd25sb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBkb3dubG9hZE9yaWdpbmFsQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcuZG93bmxvYWRPcmlnaW5hbCA6IHRydWU7XG4gIH1cblxuICBnZXQgZG93bmxvYWRBbm5vdGF0ZWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5kb3dubG9hZEFubm90YXRlZCA6IHRydWU7XG4gIH1cblxuICBnZXQgdXBsb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcudXBsb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZGVmYXVsdERvY3VtZW50Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcuZGVmYXVsdERvY3VtZW50IDogXCJcIjtcbiAgfVxuXG4gIGdldCBwcmludENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnByaW50IDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBicm93c2VDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5icm93c2UgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGh0bWxNb2RlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldCBlbmFibGVSaWdodENsaWNrQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcuZW5hYmxlUmlnaHRDbGljayA6IHRydWU7XG4gIH1cblxuICBnZXQgdGV4dEFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy50ZXh0QW5ub3RhdGlvbiA6IHRydWU7XG4gIH1cblxuICBnZXQgYXJlYUFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5hcmVhQW5ub3RhdGlvbiA6IHRydWU7XG4gIH1cblxuICBnZXQgcG9pbnRBbm5vdGF0aW9uQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcucG9pbnRBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB0ZXh0U3RyaWtlb3V0QW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnRleHRTdHJpa2VvdXRBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBwb2x5bGluZUFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5wb2x5bGluZUFubm90YXRpb24gOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHRleHRGaWVsZEFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy50ZXh0RmllbGRBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB3YXRlcm1hcmtBbm5vdGF0aW9uQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcud2F0ZXJtYXJrQW5ub3RhdGlvbiA6IHRydWU7XG4gIH1cblxuICBnZXQgdGV4dFJlcGxhY2VtZW50QW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnRleHRSZXBsYWNlbWVudEFubm90YXRpb24gOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGFycm93QW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLmFycm93QW5ub3RhdGlvbiA6IHRydWU7XG4gIH1cblxuICBnZXQgdGV4dFJlZGFjdGlvbkFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy50ZXh0UmVkYWN0aW9uQW5ub3RhdGlvbiA6IHRydWU7XG4gIH1cblxuICBnZXQgdGV4dFVuZGVybGluZUFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy50ZXh0VW5kZXJsaW5lQW5ub3RhdGlvbiA6IHRydWU7XG4gIH1cblxuICBnZXQgZGlzdGFuY2VBbm5vdGF0aW9uQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcuZGlzdGFuY2VBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmFubm90YXRpb25Db25maWcuZGVmYXVsdERvY3VtZW50ICE9PSBcIlwiKSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5hbm5vdGF0aW9uQ29uZmlnLmRlZmF1bHREb2N1bWVudCwgXCJcIiwgXCJcIik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwdFRvUHgocHQ6IG51bWJlcikge1xuICAgIC8vcHQgKiA5NiAvIDcyID0gcHguXG4gICAgcmV0dXJuIHB0ICogOTYgLyA3MjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rml0VG9XaWR0aCgpIHtcbiAgICAvLyBJbWFnZXMgYW5kIEV4Y2VsLXJlbGF0ZWQgZmlsZXMgcmVjZWl2aW5nIGRpbWVuc2lvbnMgaW4gcHggZnJvbSBzZXJ2ZXJcbiAgICBjb25zdCBwYWdlV2lkdGggPSB0aGlzLnB0VG9QeCh0aGlzLl9wYWdlV2lkdGgpO1xuICAgIGNvbnN0IHBhZ2VIZWlnaHQgPSB0aGlzLnB0VG9QeCh0aGlzLl9wYWdlSGVpZ2h0KTtcbiAgICBjb25zdCBvZmZzZXRXaWR0aCA9IHBhZ2VXaWR0aCA/IHBhZ2VXaWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgcmV0dXJuIChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoICYmIE1hdGgucm91bmQob2Zmc2V0V2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgPCAyKSA/IDIwMCAtIE1hdGgucm91bmQob2Zmc2V0V2lkdGggKiAxMDAgLyB3aW5kb3cuaW5uZXJXaWR0aCkgOiBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lcldpZHRoICogMTAwIC8gb2Zmc2V0V2lkdGgpO1xuICB9XG5cbiAgc2V0IHpvb20oem9vbSkge1xuICAgIHRoaXMuX3pvb20gPSB6b29tO1xuICAgIHRoaXMuX3pvb21TZXJ2aWNlLmNoYW5nZVpvb20odGhpcy5fem9vbSk7XG4gIH1cblxuICBnZXQgem9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fem9vbTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaFpvb20oKSB7XG4gICAgdGhpcy56b29tID0gdGhpcy5fd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKSA/IDEwMCA6IHRoaXMuZ2V0Rml0VG9XaWR0aCgpO1xuICB9XG5cbiAgem9vbUluKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGlmICh0aGlzLl96b29tIDwgNDkwKSB7XG4gICAgICB0aGlzLnpvb20gPSB0aGlzLl96b29tICsgMTA7XG4gICAgfVxuICB9XG5cbiAgem9vbU91dCgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBpZiAodGhpcy5fem9vbSA+IDMwKSB7XG4gICAgICB0aGlzLnpvb20gPSB0aGlzLl96b29tIC0gMTA7XG4gICAgfVxuICB9XG5cbiAgb3Blbk1vZGFsKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihpZCk7XG4gIH1cblxuICBjbG9zZU1vZGFsKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoaWQpO1xuICB9XG5cbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fYW5ub3RhdGlvblNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRmlsZU1vZGVsW10pID0+IHRoaXMuZmlsZXMgPSBmaWxlcyB8fCBbXSk7XG4gIH1cblxuICBzZWxlY3RGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBtb2RhbElkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gbmV3IEZpbGVDcmVkZW50aWFscygkZXZlbnQsIHBhc3N3b3JkKTtcbiAgICB0aGlzLmZpbGUgPSBudWxsO1xuICAgIHRoaXMuY29tbWVudE9wZW5lZElkID0gbnVsbDtcbiAgICB0aGlzLl9hbm5vdGF0aW9uU2VydmljZS5sb2FkRmlsZSh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGZpbGU6IEZpbGVBbm5vdGF0aW9uRGVzY3JpcHRpb24pID0+IHtcbiAgICAgIHRoaXMuY2xlYW5Bbm5vdGF0aW9ucygpO1xuICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICAgIHRoaXMuZm9ybWF0RGlzYWJsZWQgPSAhdGhpcy5maWxlO1xuICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGVza3RvcCAmJiBmaWxlLnBhZ2VzICYmIGZpbGUucGFnZXNbMF0pIHtcbiAgICAgICAgICB0aGlzLl9wYWdlSGVpZ2h0ID0gZmlsZS5wYWdlc1swXS5oZWlnaHQ7XG4gICAgICAgICAgdGhpcy5fcGFnZVdpZHRoID0gZmlsZS5wYWdlc1swXS53aWR0aDtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hab29tKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJlbG9hZFBhZ2VDb3VudCA9IHRoaXMucHJlbG9hZFBhZ2VDb3VudENvbmZpZztcbiAgICAgICAgY29uc3QgY291bnRQYWdlcyA9IGZpbGUucGFnZXMgPyBmaWxlLnBhZ2VzLmxlbmd0aCA6IDA7XG4gICAgICAgIGlmIChwcmVsb2FkUGFnZUNvdW50ID4gMCkge1xuICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKDEsIHByZWxvYWRQYWdlQ291bnQgPiBjb3VudFBhZ2VzID8gY291bnRQYWdlcyA6IHByZWxvYWRQYWdlQ291bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBwYWdlIG9mIHRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgICAgICAgICB0aGlzLmltcG9ydEFubm90YXRpb25zKHBhZ2UuYW5ub3RhdGlvbnMgPyBwYWdlLmFubm90YXRpb25zIDogW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xuICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgPSAxO1xuICAgICAgICB0aGlzLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xuICAgICAgfVxuICAgIH1cbiAgICApO1xuICAgIGlmIChtb2RhbElkKSB7XG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UobW9kYWxJZCk7XG4gICAgfVxuICAgIHRoaXMuY2xlYXJEYXRhKCk7XG4gIH1cblxuICBwcmVsb2FkUGFnZXMoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICAgIHRoaXMuX2Fubm90YXRpb25TZXJ2aWNlLmxvYWRQYWdlKHRoaXMuY3JlZGVudGlhbHMsIGkpLnN1YnNjcmliZSgocGFnZTogUGFnZUFubm90YXRpb25Nb2RlbCkgPT4ge1xuICAgICAgICB0aGlzLmZpbGUucGFnZXNbaSAtIDFdID0gcGFnZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbXBvcnRBbm5vdGF0aW9ucyhwYWdlLmFubm90YXRpb25zID8gcGFnZS5hbm5vdGF0aW9ucyA6IFtdKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW1wb3J0QW5ub3RhdGlvbnMoYW5ub3RhdGlvbnM6IEFubm90YXRpb25EYXRhW10pIHtcbiAgICBmb3IgKGNvbnN0IGFubm90YXRpb24gb2YgYW5ub3RhdGlvbnMpIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKGFubm90YXRpb24ubGVmdCwgYW5ub3RhdGlvbi50b3ApO1xuICAgICAgY29uc3QgaWQgPSB0aGlzLmFkZEFubm90YXRpb25Db21wb25lbnQoYW5ub3RhdGlvbi5wYWdlTnVtYmVyLCBwb3NpdGlvbiwgYW5ub3RhdGlvbik7XG4gICAgICB0aGlzLmNvbW1lbnRzLnNldChpZCwgYW5ub3RhdGlvbi5jb21tZW50cyk7XG4gICAgICB0aGlzLl9hY3RpdmVBbm5vdGF0aW9uU2VydmljZS5jaGFuZ2VBY3RpdmUoaWQpO1xuICAgIH1cbiAgfVxuXG4gIHVwbG9hZCgkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX2Fubm90YXRpb25TZXJ2aWNlLnVwbG9hZChudWxsLCAkZXZlbnQsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uUmlnaHRDbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5lbmFibGVSaWdodENsaWNrQ29uZmlnO1xuICB9XG5cbiAgZG93bmxvYWRGaWxlKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odGhpcy5fYW5ub3RhdGlvblNlcnZpY2UuZ2V0RG93bmxvYWRVcmwodGhpcy5jcmVkZW50aWFscykpO1xuICB9XG5cbiAgYW5ub3RhdGUoKSB7XG4gICAgY29uc3QgYW5ub3RhdGlvbnNEYXRhID0gdGhpcy5wcmVwYXJlQW5ub3RhdGlvbnNEYXRhKCk7XG5cbiAgICB0aGlzLl9hbm5vdGF0aW9uU2VydmljZS5hbm5vdGF0ZSh0aGlzLmNyZWRlbnRpYWxzLCBhbm5vdGF0aW9uc0RhdGEsIGZhbHNlKS5zdWJzY3JpYmUoKHJldDogYW55KSA9PiB7XG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuT3BlcmF0aW9uU3VjY2Vzcyk7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUocmV0Lmd1aWQsIHRoaXMuY3JlZGVudGlhbHMucGFzc3dvcmQsIENvbW1vbk1vZGFscy5PcGVyYXRpb25TdWNjZXNzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBwcmVwYXJlQW5ub3RhdGlvbnNEYXRhKCkge1xuICAgIGNvbnN0IGFubm90YXRpb25zRGF0YSA9IFtdO1xuICAgIGZvciAoY29uc3QgYW5ub3RhdGlvbiBvZiB0aGlzLmFubm90YXRpb25zLnZhbHVlcygpKSB7XG4gICAgICBjb25zdCBhbm5vdGF0aW9uRGF0YSA9ICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uLmluc3RhbmNlKS5nZXRBbm5vdGF0aW9uRGF0YSgpO1xuICAgICAgYW5ub3RhdGlvbkRhdGEuY29tbWVudHMgPSB0aGlzLmNvbW1lbnRzLmdldChhbm5vdGF0aW9uRGF0YS5pZCk7XG4gICAgICBhbm5vdGF0aW9uc0RhdGEucHVzaChhbm5vdGF0aW9uRGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBhbm5vdGF0aW9uc0RhdGE7XG4gIH1cblxuICBpc1Zpc2libGUoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHN1cHBvcnRlZCA9ICF0aGlzLmZpbGUgfHwgKHRoaXMuZmlsZSAmJiB0aGlzLmZpbGUuc3VwcG9ydGVkQW5ub3RhdGlvbnMgJiZcbiAgICAgIHRoaXMuZmlsZS5zdXBwb3J0ZWRBbm5vdGF0aW9ucy5maW5kKGZ1bmN0aW9uICh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBpZCA9PT0gdmFsdWU7XG4gICAgICB9KSk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QW5ub3RhdGlvblR5cGVDb25maWcoaWQpICYmIHN1cHBvcnRlZDtcbiAgfVxuXG4gIGFjdGl2ZVRhYigkZXZlbnQpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVBbm5vdGF0aW9uVGFiICYmICRldmVudCA9PT0gdGhpcy5hY3RpdmVBbm5vdGF0aW9uVGFiKSB7XG4gICAgICB0aGlzLmFjdGl2ZUFubm90YXRpb25UYWIgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZUFubm90YXRpb25UYWIgPSAkZXZlbnQ7XG4gICAgfVxuICB9XG5cbiAgY29kZXNDb25maWdGaXJzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja0NvbmZpZyh0aGlzLmFubm90YXRpb25UeXBlRmlyc3QpO1xuICB9XG5cbiAgY29kZXNDb25maWdTZWNvbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tDb25maWcodGhpcy5hbm5vdGF0aW9uVHlwZVNlY29uZCk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQ29uZmlnKGFubm90YXRpb25MaXN0KSB7XG4gICAgZm9yIChjb25zdCBhbm5vdGF0aW9uVHlwZSBvZiBhbm5vdGF0aW9uTGlzdCkge1xuICAgICAgaWYgKHRoaXMuZ2V0QW5ub3RhdGlvblR5cGVDb25maWcoYW5ub3RhdGlvblR5cGUuaWQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb2Rlc0NvbmZpZ1RoaXJkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEFubm90YXRpb25UeXBlQ29uZmlnKEFubm90YXRpb25UeXBlLlRFWFRfRklFTEQuaWQpICYmIHRoaXMuZ2V0QW5ub3RhdGlvblR5cGVDb25maWcoQW5ub3RhdGlvblR5cGUuV0FURVJNQVJLLmlkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QW5ub3RhdGlvblR5cGVDb25maWcoaWQ6IHN0cmluZykge1xuICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVC5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dEFubm90YXRpb25Db25maWc7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLkFSRUEuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLmFyZWFBbm5vdGF0aW9uQ29uZmlnO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5QT0lOVC5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRBbm5vdGF0aW9uQ29uZmlnO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1NUUklLRU9VVC5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFN0cmlrZW91dEFubm90YXRpb25Db25maWc7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlBPTFlMSU5FLmlkOlxuICAgICAgICByZXR1cm4gdGhpcy5wb2x5bGluZUFubm90YXRpb25Db25maWc7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfRklFTEQuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLnRleHRGaWVsZEFubm90YXRpb25Db25maWc7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLldBVEVSTUFSSy5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMud2F0ZXJtYXJrQW5ub3RhdGlvbkNvbmZpZztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9SRVBMQUNFTUVOVC5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFJlcGxhY2VtZW50QW5ub3RhdGlvbkNvbmZpZztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuQVJST1cuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLmFycm93QW5ub3RhdGlvbkNvbmZpZztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9SRURBQ1RJT04uaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLnRleHRSZWRhY3Rpb25Bbm5vdGF0aW9uQ29uZmlnO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1VOREVSTElORS5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFVuZGVybGluZUFubm90YXRpb25Db25maWc7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLkRJU1RBTkNFLmlkOlxuICAgICAgICByZXR1cm4gdGhpcy5kaXN0YW5jZUFubm90YXRpb25Db25maWc7XG4gICAgfVxuICB9XG5cbiAgZmlsZURyb3BwZWQoJGV2ZW50KSB7XG4gICAgdGhpcy5maWxlV2FzRHJvcHBlZCA9ICRldmVudDtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5Bbm5vdGF0aW9ucygpIHtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFJlZiBvZiB0aGlzLmFubm90YXRpb25zLnZhbHVlcygpKSB7XG4gICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmFubm90YXRpb25zID0gbmV3IE1hcDxudW1iZXIsIENvbXBvbmVudFJlZjxhbnk+PigpO1xuICAgIHRoaXMuY29tbWVudHMgPSBuZXcgTWFwPG51bWJlciwgQ29tbWVudFtdPigpO1xuICB9XG5cbiAgaGlkZUFubm90YXRpb25zKCkge1xuICAgIGZvciAoY29uc3QgYW5ub3RhdGlvbkNvbXBSZWYgb2YgdGhpcy5hbm5vdGF0aW9ucy52YWx1ZXMoKSkge1xuICAgICAgdGhpcy5hbm5vdGF0aW9uc0hpZGRlbiA9ICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcFJlZi5pbnN0YW5jZSkuaGlkZGVuID0gISg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcFJlZi5pbnN0YW5jZSkuaGlkZGVuO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJEYXRhKCkge1xuICAgIGlmICghdGhpcy5maWxlIHx8ICF0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwYWdlIG9mIHRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgcGFnZS5kYXRhID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVBbm5vdGF0aW9uKCRldmVudDogYW55KSB7XG4gICAgaWYgKCRldmVudC50YXJnZXQuY2xhc3NMaXN0WzBdID09PSAnc3ZnJyB8fCAkZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFswXSA9PT0gJ2dkLXBhZ2UtaW1hZ2UnKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVBbm5vdGF0aW9uVGFiKSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5hY3RpdmVBbm5vdGF0aW9uVGFiKSB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gZWxlbWVudHMuZmluZCh4ID0+IHguaWQgJiYgeC5pZC5zdGFydHNXaXRoKFwicGFnZS1cIikpO1xuICAgICAgICBpZiAoY3VycmVudFBhZ2UpIHtcbiAgICAgICAgICBjb25zdCBkb2N1bWVudFBhZ2UgPSAkKGN1cnJlbnRQYWdlKS5wYXJlbnQoKS5wYXJlbnQoKVswXTtcbiAgICAgICAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLmdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiwgJChkb2N1bWVudFBhZ2UpKTtcbiAgICAgICAgICBjb25zdCBwYWdlSWQgPSBjdXJyZW50UGFnZS5pZDtcbiAgICAgICAgICBsZXQgcGFnZU51bWJlciA9IDE7XG4gICAgICAgICAgaWYgKHBhZ2VJZCkge1xuICAgICAgICAgICAgY29uc3Qgc3BsaXQgPSBwYWdlSWQuc3BsaXQoJy0nKTtcbiAgICAgICAgICAgIHBhZ2VOdW1iZXIgPSBzcGxpdC5sZW5ndGggPT09IDIgPyBwYXJzZUludChzcGxpdFsxXSwgMTApIDogcGFnZU51bWJlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgaWQgPSB0aGlzLmFkZEFubm90YXRpb25Db21wb25lbnQocGFnZU51bWJlciwgY3VycmVudFBvc2l0aW9uLCBudWxsKTtcbiAgICAgICAgICB0aGlzLl9hY3RpdmVBbm5vdGF0aW9uU2VydmljZS5jaGFuZ2VBY3RpdmUoaWQpO1xuICAgICAgICAgIHRoaXMuY3JlYXRpbmdBbm5vdGF0aW9uSWQgPSBpZDtcbiAgICAgICAgICAvLyB0aGlzLl90YWJBY3RpdmF0b3JTZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYihudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkQW5ub3RhdGlvbkNvbXBvbmVudChwYWdlTnVtYmVyOiBudW1iZXIsIGN1cnJlbnRQb3NpdGlvbjogUG9zaXRpb24sIGRhdGE6IEFubm90YXRpb25EYXRhKSB7XG4gICAgY29uc3QgZHluYW1pY0RpcmVjdGl2ZSA9IHRoaXMuX2hvc3RpbmdDb21wb25lbnRzU2VydmljZS5maW5kKHBhZ2VOdW1iZXIpO1xuICAgIGlmIChkeW5hbWljRGlyZWN0aXZlKSB7XG4gICAgICBjb25zdCB2aWV3Q29udGFpbmVyUmVmID0gZHluYW1pY0RpcmVjdGl2ZS52aWV3Q29udGFpbmVyUmVmO1xuICAgICAgY29uc3QgYW5ub3RhdGlvbkNvbXBvbmVudCA9IHRoaXMuX2FkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLmFkZER5bmFtaWNDb21wb25lbnQodmlld0NvbnRhaW5lclJlZiwgQW5ub3RhdGlvbkNvbXBvbmVudCk7XG4gICAgICBjb25zdCBpZCA9IHRoaXMuZ2V0TmV4dElkKCk7XG4gICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkuaWQgPSBpZDtcbiAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS5wb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbjtcbiAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS5wYWdlTnVtYmVyID0gcGFnZU51bWJlcjtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IG5ldyBEaW1lbnNpb24oZGF0YS53aWR0aCwgZGF0YS5oZWlnaHQpO1xuICAgICAgICBjb25zdCB0eXBlID0gQW5ub3RhdGlvblR5cGUuZ2V0QW5ub3RhdGlvblR5cGUoZGF0YS50eXBlKTtcbiAgICAgICAgY29uc3QgZm9ybWF0dGluZyA9IEZvcm1hdHRpbmcuZGVmYXVsdCgpO1xuICAgICAgICBmb3JtYXR0aW5nLmZvbnRTaXplID0gZGF0YS5mb250U2l6ZTtcbiAgICAgICAgaWYgKGRhdGEuZm9udENvbG9yKSB7XG4gICAgICAgICAgZm9ybWF0dGluZy5jb2xvciA9IFwiI1wiICsgZGF0YS5mb250Q29sb3IudG9TdHJpbmcoMTYpO1xuICAgICAgICB9XG4gICAgICAgIGZvcm1hdHRpbmcuZm9udCA9IGRhdGEuZm9udDtcbiAgICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnR5cGUgPSB0eXBlID8gdHlwZS5pZCA6IGRhdGEudHlwZTtcbiAgICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLmRpbWVuc2lvbiA9IGRpbWVuc2lvbjtcbiAgICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnN2Z1BhdGggPSBkYXRhLnN2Z1BhdGg7XG4gICAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS50ZXh0VmFsdWUgPSBkYXRhLnRleHQ7XG4gICAgICAgIGlmIChmb3JtYXR0aW5nKSB7XG4gICAgICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnNhdmVGb3JtYXR0aW5nKGZvcm1hdHRpbmcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkudHlwZSA9IHRoaXMuYWN0aXZlQW5ub3RhdGlvblRhYjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBhZ2VNb2RlbCA9IHRoaXMuZmlsZS5wYWdlcy5maW5kKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIHJldHVybiBwLm51bWJlciA9PT0gcGFnZU51bWJlcjtcbiAgICAgIH0pO1xuICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnBhZ2VXaWR0aCA9IHBhZ2VNb2RlbC53aWR0aDtcbiAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS5wYWdlSGVpZ2h0ID0gcGFnZU1vZGVsLmhlaWdodDtcbiAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS5oaWRkZW4gPSB0aGlzLmFubm90YXRpb25zSGlkZGVuO1xuICAgICAgdGhpcy5hbm5vdGF0aW9ucy5zZXQoaWQsIGFubm90YXRpb25Db21wb25lbnQpO1xuICAgICAgcmV0dXJuIGlkO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJlc2l6aW5nQ3JlYXRpbmdBbm5vdGF0aW9uKCRldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZUFubm90YXRpb25UYWIpIHtcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNyZWF0aW5nQW5ub3RhdGlvbklkKSB7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcbiAgICAgIGNvbnN0IGFubm90YXRpb25Db21wb25lbnQgPSB0aGlzLmFubm90YXRpb25zLmdldCh0aGlzLmNyZWF0aW5nQW5ub3RhdGlvbklkKTtcbiAgICAgIGNvbnN0IHR5cGUgPSAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkudHlwZTtcbiAgICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkucGFnZU51bWJlcjtcbiAgICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuZ2V0Q3VycmVudFBvc2l0aW9uKHBvc2l0aW9uLCAkKFwiI3BhZ2UtXCIgKyBwYWdlTnVtYmVyKSk7XG4gICAgICBpZiAodHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUuaWQgfHwgdHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuRElTVEFOQ0UuaWQgfHwgdHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuQVJST1cuaWQpIHtcbiAgICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLmRyYXcoY3VycmVudFBvc2l0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gQW5ub3RhdGlvblR5cGUuUE9JTlQuaWQpIHtcbiAgICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLmNhbGNEaW1lbnNpb25zKGN1cnJlbnRQb3NpdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDdXJyZW50UG9zaXRpb24ocG9zaXRpb24sIHBhZ2UpIHtcbiAgICBjb25zdCBsZWZ0ID0gKHBvc2l0aW9uLnggLSBwYWdlLm9mZnNldCgpLmxlZnQpIC8gKHRoaXMuem9vbSAvIDEwMCk7XG4gICAgY29uc3QgdG9wID0gKHBvc2l0aW9uLnkgLSBwYWdlLm9mZnNldCgpLnRvcCkgLyAodGhpcy56b29tIC8gMTAwKTtcbiAgICByZXR1cm4gbmV3IFBvc2l0aW9uKGxlZnQsIHRvcCk7XG4gIH1cblxuICBmaW5pc2hDcmVhdGluZ0Fubm90YXRpb24oJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlQW5ub3RhdGlvblRhYikge1xuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY3JlYXRpbmdBbm5vdGF0aW9uSWQpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZUFubm90YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZSh0aGlzLmNyZWF0aW5nQW5ub3RhdGlvbklkKTtcbiAgICAgIHRoaXMuY3JlYXRpbmdBbm5vdGF0aW9uSWQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlQ29tbWVudHMoKSB7XG4gICAgdGhpcy5jb21tZW50T3BlbmVkSWQgPSBudWxsO1xuICB9XG5cbiAgb25QYW4oJGV2ZW50KSB7XG4gICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLl96b29tKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV4dElkKCkge1xuICAgIGxldCBtYXhJZCA9IDA7XG4gICAgZm9yIChjb25zdCBhbm5JZCBvZiB0aGlzLmFubm90YXRpb25zLmtleXMoKSkge1xuICAgICAgaWYgKGFubklkID4gbWF4SWQpIHtcbiAgICAgICAgbWF4SWQgPSBhbm5JZDtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaWQgPSBtYXhJZCArIDE7XG4gICAgcmV0dXJuIGlkO1xuICB9XG59XG4iXX0=