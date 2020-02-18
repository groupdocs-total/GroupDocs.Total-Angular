/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AnnotationService } from "./annotation.service";
import { AddDynamicComponentService, CommonModals, FileCredentials, Formatting, HostingDynamicComponentService, ModalService, NavigateService, PagePreloadService, PasswordService, TopTabActivatorService, UploadFilesService, Utils, WindowService } from "@groupdocs.examples.angular/common-components";
import { AnnotationType, Position, Dimension } from "./annotation-models";
import { AnnotationComponent } from "./annotation/annotation.component";
import { ActiveAnnotationService } from "./active-annotation.service";
import * as jquery from 'jquery';
import { RemoveAnnotationService } from "./remove-annotation.service";
import { CommentAnnotationService } from "./comment-annotation.service";
/** @type {?} */
var $ = jquery;
var AnnotationAppComponent = /** @class */ (function () {
    function AnnotationAppComponent(_annotationService, _modalService, _navigateService, _tabActivatorService, _hostingComponentsService, _addDynamicComponentService, _activeAnnotationService, _removeAnnotationService, _commentAnnotationService, uploadFilesService, pagePreloadService, passwordService, _windowService) {
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
        this.fileWasDropped = false;
        this.annotations = new Map();
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
                _this.importAnnotations(page.annotations ? page.annotations : []);
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
        this._annotationService.annotate(this.credentials, annotationsData, false).subscribe((/**
         * @param {?} ret
         * @return {?}
         */
        function (ret) {
            _this._modalService.open(CommonModals.OperationSuccess);
            _this.selectFile(ret.guid, null, CommonModals.OperationSuccess);
        }));
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
        this.activeAnnotationTab = $event;
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
     * @private
     * @return {?}
     */
    AnnotationAppComponent.prototype.clearData = /**
     * @private
     * @return {?}
     */
    function () {
        var e_6, _a;
        if (!this.file || !this.file.pages) {
            return;
        }
        try {
            for (var _b = tslib_1.__values(this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                var page = _c.value;
                page.data = null;
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
     * @param {?} $event
     * @return {?}
     */
    AnnotationAppComponent.prototype.createAnnotation = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
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
                this._tabActivatorService.changeActiveTab(null);
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
        $event.preventDefault();
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
        var left = position.x - page.offset().left;
        /** @type {?} */
        var top = position.y - page.offset().top;
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
     * @private
     * @return {?}
     */
    AnnotationAppComponent.prototype.getNextId = /**
     * @private
     * @return {?}
     */
    function () {
        var e_7, _a;
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
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        /** @type {?} */
        var id = maxId + 1;
        return id;
    };
    AnnotationAppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-annotation-app',
                    template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\">\n  <div class=\"annotation-wrapper wrapper\">\n    <gd-tabbed-toolbars [logo]=\"'annotation'\" [icon]=\"'pen-square'\">\n      <gd-tabs>\n        <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\n          <div id=\"files-tools\" class=\"toolbar-panel\">\n            <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                       *ngIf=\"browseConfig\"></gd-button>\n\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                       (click)=\"downloadFile()\" *ngIf=\"downloadConfig\"></gd-button>\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"annotate()\"></gd-button>\n\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"'Annotations'\" [icon]=\"'highlighter'\" [id]=\"'2'\"\n                *ngIf=\"isDesktop || (!isDesktop && codesConfigFirst())\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let annotationType of (isDesktop ? annotationTypes : annotationTypeFirst)\">\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(annotationType.id)\"\n                          [icon]=\"annotationType.icon\" (activeTab)=\"activeTab($event)\"\n                          [id]=\"annotationType.id\" [tooltip]=\"annotationType.name\">\n              </gd-top-tab>\n            </div>\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"''\" [icon]=\"'vector-square'\" [id]=\"'3'\" *ngIf=\"!isDesktop && codesConfigSecond()\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let annotationType of annotationTypeSecond\">\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(annotationType.id)\"\n                          [icon]=\"annotationType.icon\" (activeTab)=\"activeTab($event)\"\n                          [id]=\"annotationType.id\" [tooltip]=\"annotationType.name\">\n              </gd-top-tab>\n            </div>\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"''\" [icon]=\"'i-cursor'\" [id]=\"'4'\" *ngIf=\"!isDesktop && codesConfigThird()\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let annotationType of annotationTypeThird\">\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(annotationType.id)\"\n                          [icon]=\"annotationType.icon\" (activeTab)=\"activeTab($event)\"\n                          [id]=\"annotationType.id\" [tooltip]=\"annotationType.name\">\n              </gd-top-tab>\n            </div>\n          </div>\n        </gd-tab>\n      </gd-tabs>\n    </gd-tabbed-toolbars>\n    <div class=\"doc-panel\" *ngIf=\"file\" (mousedown)=\"createAnnotation($event)\"\n         (mousemove)=\"resizingCreatingAnnotation($event)\" (mouseup)=\"finishCreatingAnnotation($event)\"\n         (touchstart)=\"createAnnotation($event)\" (touchmove)=\"resizingCreatingAnnotation($event)\"\n         (touchend)=\"finishCreatingAnnotation($event)\"\n         (panstart)=\"createAnnotation($event)\" (panmove)=\"resizingCreatingAnnotation($event)\"\n         (panend)=\"finishCreatingAnnotation($event)\">\n      <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                   [preloadPageCount]=\"preloadPageCountConfig\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-document>\n    </div>\n    <gd-comment-panel *ngIf=\"commentOpenedId\" [annotationId]=\"commentOpenedId\"\n                      [comments]=\"getComments()\" (closeComments)=\"closeComments()\">\n    </gd-comment-panel>\n\n    <gd-init-state [icon]=\"'highlighter'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\"\n                   (fileDropped)=\"fileDropped($event)\">\n      Click\n      <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon>\n      to open file<br>\n      Or drop file here\n    </gd-init-state>\n  </div>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n  <svg class=\"svg\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs xmlns=\"http://www.w3.org/2000/svg\">\n      <marker id=\"end\" orient='auto' markerWidth='20' markerHeight='20'\n              refX=\"10\" refY=\"10\" markerUnits=\"strokeWidth\">\n        <path d='M0,7 L0,13 L12,10 z' fill='#579AF0'></path>\n      </marker>\n      <marker id=\"start\" orient='auto' markerWidth='20' markerHeight='20'\n              refX=\"0\" refY=\"10\" markerUnits=\"strokeWidth\">\n        <path d='M12,7 L12,13 L0,10 z' fill='#579AF0'></path>\n      </marker>\n    </defs>\n  </svg>\n</div>\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .page{position:relative}::ng-deep .gd-page-image{width:unset;height:unset}::ng-deep .top-panel{align-content:flex-start}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:inherit}.gd-document{width:100%;height:calc(100% - 90px)}.toolbar-panel{width:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.annotation-wrapper ::ng-deep .button{color:#3e4e5a!important}.annotation-wrapper ::ng-deep .button .text{padding:0!important}.annotation-wrapper ::ng-deep .select{color:#3e4e5a!important}@media (max-width:1037px){::ng-deep .panzoom{-webkit-box-pack:unset!important;justify-content:unset!important}::ng-deep .logo ::ng-deep .icon{font-size:24px!important}::ng-deep .top-panel{height:120px!important}}"]
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
        { type: WindowService }
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
    /**
     * @type {?}
     * @private
     */
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
    /**
     * @type {?}
     * @private
     */
    AnnotationAppComponent.prototype._commentAnnotationService;
    /**
     * @type {?}
     * @private
     */
    AnnotationAppComponent.prototype._windowService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2Fubm90YXRpb24vIiwic291cmNlcyI6WyJsaWIvYW5ub3RhdGlvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixZQUFZLEVBQ1osZUFBZSxFQUNKLFVBQVUsRUFDckIsOEJBQThCLEVBQzlCLFlBQVksRUFDWixlQUFlLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUNwRCxzQkFBc0IsRUFBRSxrQkFBa0IsRUFDMUMsS0FBSyxFQUNMLGFBQWEsRUFDZCxNQUFNLCtDQUErQyxDQUFDO0FBQ3ZELE9BQU8sRUFDTCxjQUFjLEVBRWQsUUFBUSxFQUd3RCxTQUFTLEVBQzFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sOEJBQThCLENBQUM7O0lBRWhFLENBQUMsR0FBRyxNQUFNO0FBRWhCO0lBeURFLGdDQUFvQixrQkFBcUMsRUFDckMsYUFBMkIsRUFDM0IsZ0JBQWlDLEVBQ2pDLG9CQUE0QyxFQUM1Qyx5QkFBeUQsRUFDekQsMkJBQXVELEVBQ3ZELHdCQUFpRCxFQUNqRCx3QkFBaUQsRUFDakQseUJBQW1ELEVBQzNELGtCQUFzQyxFQUN0Qyxr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LElBeWdCQztTQXBnQlksc0JBQXNCOzs7SUFDakMsdUNBQXFCOztJQUNyQix1Q0FBd0I7O0lBQ3hCLHNDQUFnQzs7SUFDaEMsMkNBQW1COztJQUNuQixrREFBbUM7O0lBQ25DLGtEQUE0Qzs7SUFDNUMsZ0RBQTRCOztJQUM1Qiw2Q0FBNkI7O0lBQzdCLGlEQWFFOztJQUNGLDJDQUFtQjs7SUFDbkIscURBTUU7O0lBQ0Ysc0RBTUU7O0lBQ0YscURBR0U7O0lBQ0YsNENBQWU7O0lBQ2YsaURBQXdCOztJQUN4QiwwQ0FBd0M7Ozs7O0lBRXhDLHFEQUFvQzs7Ozs7SUFDcEMsZ0RBQStCOzs7OztJQUMvQiw2Q0FBMkQ7Ozs7O0lBQzNELHNEQUFxQzs7Ozs7SUFDckMsb0RBQW1DOzs7OztJQUV2QixvREFBNkM7Ozs7O0lBQzdDLCtDQUFtQzs7Ozs7SUFDbkMsa0RBQXlDOzs7OztJQUN6QyxzREFBb0Q7Ozs7O0lBQ3BELDJEQUFpRTs7Ozs7SUFDakUsNkRBQStEOzs7OztJQUMvRCwwREFBeUQ7Ozs7O0lBQ3pELDBEQUF5RDs7Ozs7SUFDekQsMkRBQTJEOzs7OztJQUkzRCxnREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UmVmLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBbm5vdGF0aW9uQ29uZmlnfSBmcm9tIFwiLi9hbm5vdGF0aW9uLWNvbmZpZ1wiO1xuaW1wb3J0IHtBbm5vdGF0aW9uU2VydmljZX0gZnJvbSBcIi4vYW5ub3RhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuICBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgQ29tbW9uTW9kYWxzLFxuICBGaWxlQ3JlZGVudGlhbHMsXG4gIEZpbGVNb2RlbCwgRm9ybWF0dGluZyxcbiAgSG9zdGluZ0R5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICBNb2RhbFNlcnZpY2UsXG4gIE5hdmlnYXRlU2VydmljZSwgUGFnZVByZWxvYWRTZXJ2aWNlLCBQYXNzd29yZFNlcnZpY2UsXG4gIFRvcFRhYkFjdGl2YXRvclNlcnZpY2UsIFVwbG9hZEZpbGVzU2VydmljZSxcbiAgVXRpbHMsXG4gIFdpbmRvd1NlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtcbiAgQW5ub3RhdGlvblR5cGUsXG4gIENvbW1lbnRBbm5vdGF0aW9uLFxuICBQb3NpdGlvbixcbiAgUmVtb3ZlQW5ub3RhdGlvbixcbiAgQ29tbWVudCxcbiAgRmlsZUFubm90YXRpb25EZXNjcmlwdGlvbiwgUGFnZUFubm90YXRpb25Nb2RlbCwgQW5ub3RhdGlvbkRhdGEsIERpbWVuc2lvblxufSBmcm9tIFwiLi9hbm5vdGF0aW9uLW1vZGVsc1wiO1xuaW1wb3J0IHtBbm5vdGF0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9hbm5vdGF0aW9uL2Fubm90YXRpb24uY29tcG9uZW50XCI7XG5pbXBvcnQge0FjdGl2ZUFubm90YXRpb25TZXJ2aWNlfSBmcm9tIFwiLi9hY3RpdmUtYW5ub3RhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7UmVtb3ZlQW5ub3RhdGlvblNlcnZpY2V9IGZyb20gXCIuL3JlbW92ZS1hbm5vdGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29tbWVudEFubm90YXRpb25TZXJ2aWNlfSBmcm9tIFwiLi9jb21tZW50LWFubm90YXRpb24uc2VydmljZVwiO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1hbm5vdGF0aW9uLWFwcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbm5vdGF0aW9uLWFwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Fubm90YXRpb24tYXBwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbkFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRpdGxlID0gJ2Fubm90YXRpb24nO1xuICBmaWxlczogRmlsZU1vZGVsW10gPSBbXTtcbiAgZmlsZTogRmlsZUFubm90YXRpb25EZXNjcmlwdGlvbjtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBhbm5vdGF0aW9uQ29uZmlnOiBBbm5vdGF0aW9uQ29uZmlnO1xuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xuICBmb3JtYXREaXNhYmxlZCA9ICF0aGlzLmZpbGU7XG4gIGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHM7XG4gIGFubm90YXRpb25UeXBlcyA9IFtcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhULFxuICAgIEFubm90YXRpb25UeXBlLlRFWFRfU1RSSUtFT1VULFxuICAgIEFubm90YXRpb25UeXBlLlRFWFRfVU5ERVJMSU5FLFxuICAgIEFubm90YXRpb25UeXBlLlRFWFRfUkVQTEFDRU1FTlQsXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9SRURBQ1RJT04sXG4gICAgQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUsXG4gICAgQW5ub3RhdGlvblR5cGUuQVJST1csXG4gICAgQW5ub3RhdGlvblR5cGUuRElTVEFOQ0UsXG4gICAgQW5ub3RhdGlvblR5cGUuQVJFQSxcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhUX0ZJRUxELFxuICAgIEFubm90YXRpb25UeXBlLldBVEVSTUFSSyxcbiAgICBBbm5vdGF0aW9uVHlwZS5QT0lOVCxcbiAgXTtcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xuICBhbm5vdGF0aW9uVHlwZUZpcnN0ID0gW1xuICAgIEFubm90YXRpb25UeXBlLlRFWFQsXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9VTkRFUkxJTkUsXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9SRURBQ1RJT04sXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9SRVBMQUNFTUVOVCxcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhUX1NUUklLRU9VVCxcbiAgXTtcbiAgYW5ub3RhdGlvblR5cGVTZWNvbmQgPSBbXG4gICAgQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUsXG4gICAgQW5ub3RhdGlvblR5cGUuQVJST1csXG4gICAgQW5ub3RhdGlvblR5cGUuRElTVEFOQ0UsXG4gICAgQW5ub3RhdGlvblR5cGUuQVJFQSxcbiAgICBBbm5vdGF0aW9uVHlwZS5QT0lOVFxuICBdO1xuICBhbm5vdGF0aW9uVHlwZVRoaXJkID0gW1xuICAgIEFubm90YXRpb25UeXBlLlRFWFRfRklFTEQsXG4gICAgQW5ub3RhdGlvblR5cGUuV0FURVJNQVJLLFxuICBdO1xuICBjb3VudFBhZ2VzID0gMDtcbiAgY29tbWVudE9wZW5lZElkOiBudW1iZXI7XG4gIGNvbW1lbnRzID0gbmV3IE1hcDxudW1iZXIsIENvbW1lbnRbXT4oKTtcblxuICBwcml2YXRlIGFjdGl2ZUFubm90YXRpb25UYWI6IHN0cmluZztcbiAgcHJpdmF0ZSBmaWxlV2FzRHJvcHBlZCA9IGZhbHNlO1xuICBwcml2YXRlIGFubm90YXRpb25zID0gbmV3IE1hcDxudW1iZXIsIENvbXBvbmVudFJlZjxhbnk+PigpO1xuICBwcml2YXRlIGNyZWF0aW5nQW5ub3RhdGlvbklkOiBudW1iZXI7XG4gIHByaXZhdGUgYWN0aXZlQW5ub3RhdGlvbklkOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYW5ub3RhdGlvblNlcnZpY2U6IEFubm90YXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3RhYkFjdGl2YXRvclNlcnZpY2U6IFRvcFRhYkFjdGl2YXRvclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2hvc3RpbmdDb21wb25lbnRzU2VydmljZTogSG9zdGluZ0R5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hZGREeW5hbWljQ29tcG9uZW50U2VydmljZTogQWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2FjdGl2ZUFubm90YXRpb25TZXJ2aWNlOiBBY3RpdmVBbm5vdGF0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVtb3ZlQW5ub3RhdGlvblNlcnZpY2U6IFJlbW92ZUFubm90YXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jb21tZW50QW5ub3RhdGlvblNlcnZpY2U6IENvbW1lbnRBbm5vdGF0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHBhZ2VQcmVsb2FkU2VydmljZTogUGFnZVByZWxvYWRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSkge1xuXG4gICAgdGhpcy5fYWN0aXZlQW5ub3RhdGlvblNlcnZpY2UuYWN0aXZlQ2hhbmdlLnN1YnNjcmliZSgoaWQ6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlQW5ub3RhdGlvbklkICE9PSBpZCkge1xuICAgICAgICB0aGlzLmNvbW1lbnRPcGVuZWRJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aXZlQW5ub3RhdGlvbklkID0gaWQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jb21tZW50QW5ub3RhdGlvblNlcnZpY2UuY29tbWVudEFubm90YXRpb24uc3Vic2NyaWJlKChjb21tZW50QW5ub3RhdGlvbjogQ29tbWVudEFubm90YXRpb24pID0+IHtcbiAgICAgIHRoaXMuY29tbWVudE9wZW5lZElkID0gY29tbWVudEFubm90YXRpb24uaWQ7XG4gICAgICBpZiAoIXRoaXMuY29tbWVudHMuZ2V0KHRoaXMuY29tbWVudE9wZW5lZElkKSkge1xuICAgICAgICB0aGlzLmNvbW1lbnRzLnNldCh0aGlzLmNvbW1lbnRPcGVuZWRJZCwgW10pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fY29tbWVudEFubm90YXRpb25TZXJ2aWNlLmFkZENvbW1lbnRPYnNlcnZlLnN1YnNjcmliZSgoY29tbWVudDogQ29tbWVudCkgPT4ge1xuICAgICAgdGhpcy5jb21tZW50cy5nZXQodGhpcy5jb21tZW50T3BlbmVkSWQpLnB1c2goY29tbWVudCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9yZW1vdmVBbm5vdGF0aW9uU2VydmljZS5yZW1vdmVBbm5vdGF0aW9uLnN1YnNjcmliZSgocmVtb3ZlQW5ub3RhdGlvbjogUmVtb3ZlQW5ub3RhdGlvbikgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5hbm5vdGF0aW9ucy5nZXQocmVtb3ZlQW5ub3RhdGlvbi5pZCk7XG4gICAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICAgIGNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgICB0aGlzLmFubm90YXRpb25zLmRlbGV0ZShyZW1vdmVBbm5vdGF0aW9uLmlkKTtcbiAgICAgIGlmICh0aGlzLmNvbW1lbnRPcGVuZWRJZCA9PT0gcmVtb3ZlQW5ub3RhdGlvbi5pZCkge1xuICAgICAgICB0aGlzLmNvbW1lbnRPcGVuZWRJZCA9IG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbW1lbnRzLmRlbGV0ZShyZW1vdmVBbm5vdGF0aW9uLmlkKTtcbiAgICB9KTtcblxuICAgIHVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xuICAgICAgaWYgKHVwbG9hZHMpIHtcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHVwbG9hZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLl9hbm5vdGF0aW9uU2VydmljZS51cGxvYWQodXBsb2Fkcy5pdGVtKGkpLCAnJywgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID8gdGhpcy5zZWxlY3RGaWxlKG9iai5ndWlkLCAnJywgJycpIDogdGhpcy5zZWxlY3REaXIoJycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYWdlUHJlbG9hZFNlcnZpY2UuY2hlY2tQcmVsb2FkLnN1YnNjcmliZSgocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy5wcmVsb2FkUGFnZUNvdW50Q29uZmlnICE9PSAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBwYWdlOyBpIDwgcGFnZSArIDI7IGkrKykge1xuICAgICAgICAgIGlmIChpID4gMCAmJiBpIDw9IHRoaXMuY291bnRQYWdlcyAmJiAhdGhpcy5maWxlLnBhZ2VzW2kgLSAxXS5kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnByZWxvYWRQYWdlcyhpLCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhc3N3b3JkU2VydmljZS5wYXNzQ2hhbmdlLnN1YnNjcmliZSgocGFzczogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5jcmVkZW50aWFscy5ndWlkLCBwYXNzLCBDb21tb25Nb2RhbHMuUGFzc3dvcmRSZXF1aXJlZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xuICAgICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldENvbW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbW1lbnRzLmdldCh0aGlzLmNvbW1lbnRPcGVuZWRJZCk7XG4gIH1cblxuICBnZXQgcmV3cml0ZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHpvb21Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy56b29tIDogZmFsc2U7XG4gIH1cblxuICBnZXQgcGFnZVNlbGVjdG9yQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcucGFnZVNlbGVjdG9yIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBwcmVsb2FkUGFnZUNvdW50Q29uZmlnKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5wcmVsb2FkUGFnZUNvdW50IDogMDtcbiAgfVxuXG4gIGdldCBkb3dubG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLmRvd25sb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBkb3dubG9hZE9yaWdpbmFsQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcuZG93bmxvYWRPcmlnaW5hbCA6IHRydWU7XG4gIH1cblxuICBnZXQgZG93bmxvYWRBbm5vdGF0ZWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5kb3dubG9hZEFubm90YXRlZCA6IHRydWU7XG4gIH1cblxuICBnZXQgdXBsb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcudXBsb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZGVmYXVsdERvY3VtZW50Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcuZGVmYXVsdERvY3VtZW50IDogXCJcIjtcbiAgfVxuXG4gIGdldCBwcmludENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnByaW50IDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBicm93c2VDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5icm93c2UgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGh0bWxNb2RlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldCBlbmFibGVSaWdodENsaWNrQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcuZW5hYmxlUmlnaHRDbGljayA6IHRydWU7XG4gIH1cblxuICBnZXQgdGV4dEFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy50ZXh0QW5ub3RhdGlvbiA6IHRydWU7XG4gIH1cblxuICBnZXQgYXJlYUFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5hcmVhQW5ub3RhdGlvbiA6IHRydWU7XG4gIH1cblxuICBnZXQgcG9pbnRBbm5vdGF0aW9uQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcucG9pbnRBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB0ZXh0U3RyaWtlb3V0QW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnRleHRTdHJpa2VvdXRBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBwb2x5bGluZUFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5wb2x5bGluZUFubm90YXRpb24gOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHRleHRGaWVsZEFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy50ZXh0RmllbGRBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB3YXRlcm1hcmtBbm5vdGF0aW9uQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcud2F0ZXJtYXJrQW5ub3RhdGlvbiA6IHRydWU7XG4gIH1cblxuICBnZXQgdGV4dFJlcGxhY2VtZW50QW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnRleHRSZXBsYWNlbWVudEFubm90YXRpb24gOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGFycm93QW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLmFycm93QW5ub3RhdGlvbiA6IHRydWU7XG4gIH1cblxuICBnZXQgdGV4dFJlZGFjdGlvbkFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy50ZXh0UmVkYWN0aW9uQW5ub3RhdGlvbiA6IHRydWU7XG4gIH1cblxuICBnZXQgdGV4dFVuZGVybGluZUFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy50ZXh0VW5kZXJsaW5lQW5ub3RhdGlvbiA6IHRydWU7XG4gIH1cblxuICBnZXQgZGlzdGFuY2VBbm5vdGF0aW9uQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcuZGlzdGFuY2VBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb3Blbk1vZGFsKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihpZCk7XG4gIH1cblxuICBjbG9zZU1vZGFsKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoaWQpO1xuICB9XG5cbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fYW5ub3RhdGlvblNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRmlsZU1vZGVsW10pID0+IHRoaXMuZmlsZXMgPSBmaWxlcyB8fCBbXSk7XG4gIH1cblxuICBzZWxlY3RGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBtb2RhbElkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gbmV3IEZpbGVDcmVkZW50aWFscygkZXZlbnQsIHBhc3N3b3JkKTtcbiAgICB0aGlzLmZpbGUgPSBudWxsO1xuICAgIHRoaXMuY29tbWVudE9wZW5lZElkID0gbnVsbDtcbiAgICB0aGlzLl9hbm5vdGF0aW9uU2VydmljZS5sb2FkRmlsZSh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGZpbGU6IEZpbGVBbm5vdGF0aW9uRGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgdGhpcy5jbGVhbkFubm90YXRpb25zKCk7XG4gICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgICAgIHRoaXMuZm9ybWF0RGlzYWJsZWQgPSAhdGhpcy5maWxlO1xuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgIGNvbnN0IHByZWxvYWRQYWdlQ291bnQgPSB0aGlzLnByZWxvYWRQYWdlQ291bnRDb25maWc7XG4gICAgICAgICAgY29uc3QgY291bnRQYWdlcyA9IGZpbGUucGFnZXMgPyBmaWxlLnBhZ2VzLmxlbmd0aCA6IDA7XG4gICAgICAgICAgaWYgKHByZWxvYWRQYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnByZWxvYWRQYWdlcygxLCBwcmVsb2FkUGFnZUNvdW50ID4gY291bnRQYWdlcyA/IGNvdW50UGFnZXMgOiBwcmVsb2FkUGFnZUNvdW50KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgcGFnZSBvZiB0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltcG9ydEFubm90YXRpb25zKHBhZ2UuYW5ub3RhdGlvbnMgPyBwYWdlLmFubm90YXRpb25zIDogW10pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY291bnRQYWdlcyA9IGNvdW50UGFnZXM7XG4gICAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgICAgICB0aGlzLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgICBpZiAobW9kYWxJZCkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKG1vZGFsSWQpO1xuICAgIH1cbiAgICB0aGlzLmNsZWFyRGF0YSgpO1xuICB9XG5cbiAgcHJlbG9hZFBhZ2VzKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzLl9hbm5vdGF0aW9uU2VydmljZS5sb2FkUGFnZSh0aGlzLmNyZWRlbnRpYWxzLCBpKS5zdWJzY3JpYmUoKHBhZ2U6IFBhZ2VBbm5vdGF0aW9uTW9kZWwpID0+IHtcbiAgICAgICAgdGhpcy5maWxlLnBhZ2VzW2kgLSAxXSA9IHBhZ2U7XG4gICAgICAgIHRoaXMuaW1wb3J0QW5ub3RhdGlvbnMocGFnZS5hbm5vdGF0aW9ucyA/IHBhZ2UuYW5ub3RhdGlvbnMgOiBbXSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGltcG9ydEFubm90YXRpb25zKGFubm90YXRpb25zOiBBbm5vdGF0aW9uRGF0YVtdKSB7XG4gICAgZm9yIChjb25zdCBhbm5vdGF0aW9uIG9mIGFubm90YXRpb25zKSB7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbihhbm5vdGF0aW9uLmxlZnQsIGFubm90YXRpb24udG9wKTtcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5hZGRBbm5vdGF0aW9uQ29tcG9uZW50KGFubm90YXRpb24ucGFnZU51bWJlciwgcG9zaXRpb24sIGFubm90YXRpb24pO1xuICAgICAgdGhpcy5jb21tZW50cy5zZXQoaWQsIGFubm90YXRpb24uY29tbWVudHMpO1xuICAgICAgdGhpcy5fYWN0aXZlQW5ub3RhdGlvblNlcnZpY2UuY2hhbmdlQWN0aXZlKGlkKTtcbiAgICB9XG4gIH1cblxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hbm5vdGF0aW9uU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgfSk7XG4gIH1cblxuICBvblJpZ2h0Q2xpY2soJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuZW5hYmxlUmlnaHRDbGlja0NvbmZpZztcbiAgfVxuXG4gIGRvd25sb2FkRmlsZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHRoaXMuX2Fubm90YXRpb25TZXJ2aWNlLmdldERvd25sb2FkVXJsKHRoaXMuY3JlZGVudGlhbHMpKTtcbiAgfVxuXG4gIGFubm90YXRlKCkge1xuICAgIGNvbnN0IGFubm90YXRpb25zRGF0YSA9IFtdO1xuICAgIGZvciAoY29uc3QgYW5ub3RhdGlvbiBvZiB0aGlzLmFubm90YXRpb25zLnZhbHVlcygpKSB7XG4gICAgICBjb25zdCBhbm5vdGF0aW9uRGF0YSA9ICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uLmluc3RhbmNlKS5nZXRBbm5vdGF0aW9uRGF0YSgpO1xuICAgICAgYW5ub3RhdGlvbkRhdGEuY29tbWVudHMgPSB0aGlzLmNvbW1lbnRzLmdldChhbm5vdGF0aW9uRGF0YS5pZCk7XG4gICAgICBhbm5vdGF0aW9uc0RhdGEucHVzaChhbm5vdGF0aW9uRGF0YSk7XG4gICAgfVxuICAgIHRoaXMuX2Fubm90YXRpb25TZXJ2aWNlLmFubm90YXRlKHRoaXMuY3JlZGVudGlhbHMsIGFubm90YXRpb25zRGF0YSwgZmFsc2UpLnN1YnNjcmliZSgocmV0OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5PcGVyYXRpb25TdWNjZXNzKTtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZShyZXQuZ3VpZCwgbnVsbCwgQ29tbW9uTW9kYWxzLk9wZXJhdGlvblN1Y2Nlc3MpO1xuICAgIH0pO1xuICB9XG5cbiAgaXNWaXNpYmxlKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdXBwb3J0ZWQgPSAhdGhpcy5maWxlIHx8ICh0aGlzLmZpbGUgJiYgdGhpcy5maWxlLnN1cHBvcnRlZEFubm90YXRpb25zICYmXG4gICAgICB0aGlzLmZpbGUuc3VwcG9ydGVkQW5ub3RhdGlvbnMuZmluZChmdW5jdGlvbiAodmFsdWU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIGlkID09PSB2YWx1ZTtcbiAgICB9KSk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QW5ub3RhdGlvblR5cGVDb25maWcoaWQpICYmIHN1cHBvcnRlZDtcbiAgfVxuXG4gIGFjdGl2ZVRhYigkZXZlbnQpIHtcbiAgICB0aGlzLmFjdGl2ZUFubm90YXRpb25UYWIgPSAkZXZlbnQ7XG4gIH1cblxuICBjb2Rlc0NvbmZpZ0ZpcnN0KCkge1xuICAgIHJldHVybiB0aGlzLmNoZWNrQ29uZmlnKHRoaXMuYW5ub3RhdGlvblR5cGVGaXJzdCk7XG4gIH1cblxuICBjb2Rlc0NvbmZpZ1NlY29uZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja0NvbmZpZyh0aGlzLmFubm90YXRpb25UeXBlU2Vjb25kKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tDb25maWcoYW5ub3RhdGlvbkxpc3QpIHtcbiAgICBmb3IgKGNvbnN0IGFubm90YXRpb25UeXBlIG9mIGFubm90YXRpb25MaXN0KSB7XG4gICAgICBpZiAodGhpcy5nZXRBbm5vdGF0aW9uVHlwZUNvbmZpZyhhbm5vdGF0aW9uVHlwZS5pZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvZGVzQ29uZmlnVGhpcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QW5ub3RhdGlvblR5cGVDb25maWcoQW5ub3RhdGlvblR5cGUuVEVYVF9GSUVMRC5pZCkgJiYgdGhpcy5nZXRBbm5vdGF0aW9uVHlwZUNvbmZpZyhBbm5vdGF0aW9uVHlwZS5XQVRFUk1BUksuaWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBbm5vdGF0aW9uVHlwZUNvbmZpZyhpZDogc3RyaW5nKSB7XG4gICAgc3dpdGNoIChpZCkge1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhULmlkOlxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0QW5ub3RhdGlvbkNvbmZpZztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuQVJFQS5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJlYUFubm90YXRpb25Db25maWc7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlBPSU5ULmlkOlxuICAgICAgICByZXR1cm4gdGhpcy5wb2ludEFubm90YXRpb25Db25maWc7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfU1RSSUtFT1VULmlkOlxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0U3RyaWtlb3V0QW5ub3RhdGlvbkNvbmZpZztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlsaW5lQW5ub3RhdGlvbkNvbmZpZztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9GSUVMRC5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dEZpZWxkQW5ub3RhdGlvbkNvbmZpZztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuV0FURVJNQVJLLmlkOlxuICAgICAgICByZXR1cm4gdGhpcy53YXRlcm1hcmtBbm5vdGF0aW9uQ29uZmlnO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1JFUExBQ0VNRU5ULmlkOlxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0UmVwbGFjZW1lbnRBbm5vdGF0aW9uQ29uZmlnO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5BUlJPVy5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyb3dBbm5vdGF0aW9uQ29uZmlnO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1JFREFDVElPTi5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFJlZGFjdGlvbkFubm90YXRpb25Db25maWc7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfVU5ERVJMSU5FLmlkOlxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0VW5kZXJsaW5lQW5ub3RhdGlvbkNvbmZpZztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuRElTVEFOQ0UuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLmRpc3RhbmNlQW5ub3RhdGlvbkNvbmZpZztcbiAgICB9XG4gIH1cblxuICBmaWxlRHJvcHBlZCgkZXZlbnQpIHtcbiAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID0gJGV2ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhbkFubm90YXRpb25zKCkge1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50UmVmIG9mIHRoaXMuYW5ub3RhdGlvbnMudmFsdWVzKCkpIHtcbiAgICAgIGNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuYW5ub3RhdGlvbnMgPSBuZXcgTWFwPG51bWJlciwgQ29tcG9uZW50UmVmPGFueT4+KCk7XG4gICAgdGhpcy5jb21tZW50cyA9IG5ldyBNYXA8bnVtYmVyLCBDb21tZW50W10+KCk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRGF0YSgpIHtcbiAgICBpZiAoIXRoaXMuZmlsZSB8fCAhdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGFnZSBvZiB0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgIHBhZ2UuZGF0YSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQW5ub3RhdGlvbigkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICh0aGlzLmFjdGl2ZUFubm90YXRpb25UYWIpIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xuXG4gICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xuICAgICAgY29uc3QgY3VycmVudFBhZ2UgPSBlbGVtZW50cy5maW5kKHggPT4geC5pZCAmJiB4LmlkLnN0YXJ0c1dpdGgoXCJwYWdlLVwiKSk7XG4gICAgICBpZiAoY3VycmVudFBhZ2UpIHtcbiAgICAgICAgY29uc3QgZG9jdW1lbnRQYWdlID0gJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KClbMF07XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuZ2V0Q3VycmVudFBvc2l0aW9uKHBvc2l0aW9uLCAkKGRvY3VtZW50UGFnZSkpO1xuICAgICAgICBjb25zdCBwYWdlSWQgPSBjdXJyZW50UGFnZS5pZDtcbiAgICAgICAgbGV0IHBhZ2VOdW1iZXIgPSAxO1xuICAgICAgICBpZiAocGFnZUlkKSB7XG4gICAgICAgICAgY29uc3Qgc3BsaXQgPSBwYWdlSWQuc3BsaXQoJy0nKTtcbiAgICAgICAgICBwYWdlTnVtYmVyID0gc3BsaXQubGVuZ3RoID09PSAyID8gcGFyc2VJbnQoc3BsaXRbMV0sIDEwKSA6IHBhZ2VOdW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmFkZEFubm90YXRpb25Db21wb25lbnQocGFnZU51bWJlciwgY3VycmVudFBvc2l0aW9uLCBudWxsKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlQW5ub3RhdGlvblNlcnZpY2UuY2hhbmdlQWN0aXZlKGlkKTtcbiAgICAgICAgdGhpcy5jcmVhdGluZ0Fubm90YXRpb25JZCA9IGlkO1xuICAgICAgICB0aGlzLl90YWJBY3RpdmF0b3JTZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYihudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZEFubm90YXRpb25Db21wb25lbnQocGFnZU51bWJlcjogbnVtYmVyLCBjdXJyZW50UG9zaXRpb246IFBvc2l0aW9uLCBkYXRhOiBBbm5vdGF0aW9uRGF0YSkge1xuICAgIGNvbnN0IGR5bmFtaWNEaXJlY3RpdmUgPSB0aGlzLl9ob3N0aW5nQ29tcG9uZW50c1NlcnZpY2UuZmluZChwYWdlTnVtYmVyKTtcbiAgICBpZiAoZHluYW1pY0RpcmVjdGl2ZSkge1xuICAgICAgY29uc3Qgdmlld0NvbnRhaW5lclJlZiA9IGR5bmFtaWNEaXJlY3RpdmUudmlld0NvbnRhaW5lclJlZjtcbiAgICAgIGNvbnN0IGFubm90YXRpb25Db21wb25lbnQgPSB0aGlzLl9hZGREeW5hbWljQ29tcG9uZW50U2VydmljZS5hZGREeW5hbWljQ29tcG9uZW50KHZpZXdDb250YWluZXJSZWYsIEFubm90YXRpb25Db21wb25lbnQpO1xuICAgICAgY29uc3QgaWQgPSB0aGlzLmdldE5leHRJZCgpO1xuICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLmlkID0gaWQ7XG4gICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkucG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb247XG4gICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkucGFnZU51bWJlciA9IHBhZ2VOdW1iZXI7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBjb25zdCBkaW1lbnNpb24gPSBuZXcgRGltZW5zaW9uKGRhdGEud2lkdGgsIGRhdGEuaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgdHlwZSA9IEFubm90YXRpb25UeXBlLmdldEFubm90YXRpb25UeXBlKGRhdGEudHlwZSk7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRpbmcgPSBGb3JtYXR0aW5nLmRlZmF1bHQoKTtcbiAgICAgICAgZm9ybWF0dGluZy5mb250U2l6ZSA9IGRhdGEuZm9udFNpemU7XG4gICAgICAgIGlmIChkYXRhLmZvbnRDb2xvcikge1xuICAgICAgICAgIGZvcm1hdHRpbmcuY29sb3IgPSBcIiNcIiArIGRhdGEuZm9udENvbG9yLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtYXR0aW5nLmZvbnQgPSBkYXRhLmZvbnQ7XG4gICAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS50eXBlID0gdHlwZSA/IHR5cGUuaWQgOiBkYXRhLnR5cGU7XG4gICAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS5kaW1lbnNpb24gPSBkaW1lbnNpb247XG4gICAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS5zdmdQYXRoID0gZGF0YS5zdmdQYXRoO1xuICAgICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkudGV4dFZhbHVlID0gZGF0YS50ZXh0O1xuICAgICAgICBpZiAoZm9ybWF0dGluZykge1xuICAgICAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS5zYXZlRm9ybWF0dGluZyhmb3JtYXR0aW5nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnR5cGUgPSB0aGlzLmFjdGl2ZUFubm90YXRpb25UYWI7XG4gICAgICB9XG4gICAgICBjb25zdCBwYWdlTW9kZWwgPSB0aGlzLmZpbGUucGFnZXMuZmluZChmdW5jdGlvbiAocCkge1xuICAgICAgICByZXR1cm4gcC5udW1iZXIgPT09IHBhZ2VOdW1iZXI7XG4gICAgICB9KTtcbiAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS5wYWdlV2lkdGggPSBwYWdlTW9kZWwud2lkdGg7XG4gICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkucGFnZUhlaWdodCA9IHBhZ2VNb2RlbC5oZWlnaHQ7XG4gICAgICB0aGlzLmFubm90YXRpb25zLnNldChpZCwgYW5ub3RhdGlvbkNvbXBvbmVudCk7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVzaXppbmdDcmVhdGluZ0Fubm90YXRpb24oJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5jcmVhdGluZ0Fubm90YXRpb25JZCkge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG4gICAgICBjb25zdCBhbm5vdGF0aW9uQ29tcG9uZW50ID0gdGhpcy5hbm5vdGF0aW9ucy5nZXQodGhpcy5jcmVhdGluZ0Fubm90YXRpb25JZCk7XG4gICAgICBjb25zdCB0eXBlID0gKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnR5cGU7XG4gICAgICBjb25zdCBwYWdlTnVtYmVyID0gKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnBhZ2VOdW1iZXI7XG4gICAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLmdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiwgJChcIiNwYWdlLVwiICsgcGFnZU51bWJlcikpO1xuICAgICAgaWYgKHR5cGUgPT09IEFubm90YXRpb25UeXBlLlBPTFlMSU5FLmlkIHx8IHR5cGUgPT09IEFubm90YXRpb25UeXBlLkRJU1RBTkNFLmlkIHx8IHR5cGUgPT09IEFubm90YXRpb25UeXBlLkFSUk9XLmlkKSB7XG4gICAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS5kcmF3KGN1cnJlbnRQb3NpdGlvbik7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IEFubm90YXRpb25UeXBlLlBPSU5ULmlkKSB7XG4gICAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS5jYWxjRGltZW5zaW9ucyhjdXJyZW50UG9zaXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q3VycmVudFBvc2l0aW9uKHBvc2l0aW9uLCBwYWdlKSB7XG4gICAgY29uc3QgbGVmdCA9IHBvc2l0aW9uLnggLSBwYWdlLm9mZnNldCgpLmxlZnQ7XG4gICAgY29uc3QgdG9wID0gcG9zaXRpb24ueSAtIHBhZ2Uub2Zmc2V0KCkudG9wO1xuICAgIHJldHVybiBuZXcgUG9zaXRpb24obGVmdCwgdG9wKTtcbiAgfVxuXG4gIGZpbmlzaENyZWF0aW5nQW5ub3RhdGlvbigkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAodGhpcy5jcmVhdGluZ0Fubm90YXRpb25JZCkge1xuICAgICAgdGhpcy5fYWN0aXZlQW5ub3RhdGlvblNlcnZpY2UuY2hhbmdlQWN0aXZlKHRoaXMuY3JlYXRpbmdBbm5vdGF0aW9uSWQpO1xuICAgICAgdGhpcy5jcmVhdGluZ0Fubm90YXRpb25JZCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VDb21tZW50cygpIHtcbiAgICB0aGlzLmNvbW1lbnRPcGVuZWRJZCA9IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldE5leHRJZCgpIHtcbiAgICBsZXQgbWF4SWQgPSAwO1xuICAgIGZvciAoY29uc3QgYW5uSWQgb2YgdGhpcy5hbm5vdGF0aW9ucy5rZXlzKCkpIHtcbiAgICAgIGlmIChhbm5JZCA+IG1heElkKXtcbiAgICAgICAgbWF4SWQgPSBhbm5JZDtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaWQgPSBtYXhJZCArIDE7XG4gICAgcmV0dXJuIGlkO1xuICB9XG59XG4iXX0=