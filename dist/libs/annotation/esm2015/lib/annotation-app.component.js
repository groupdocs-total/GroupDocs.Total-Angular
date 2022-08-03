/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const $ = jquery;
export class AnnotationAppComponent {
    /**
     * @param {?} _annotationService
     * @param {?} _modalService
     * @param {?} _navigateService
     * @param {?} _tabActivatorService
     * @param {?} _hostingComponentsService
     * @param {?} _addDynamicComponentService
     * @param {?} _activeAnnotationService
     * @param {?} _removeAnnotationService
     * @param {?} _commentAnnotationService
     * @param {?} uploadFilesService
     * @param {?} pagePreloadService
     * @param {?} passwordService
     * @param {?} _windowService
     * @param {?} _zoomService
     * @param {?} configService
     */
    constructor(_annotationService, _modalService, _navigateService, _tabActivatorService, _hostingComponentsService, _addDynamicComponentService, _activeAnnotationService, _removeAnnotationService, _commentAnnotationService, uploadFilesService, pagePreloadService, passwordService, _windowService, _zoomService, configService) {
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
        (annotationConfig) => {
            this.annotationConfig = annotationConfig;
        }));
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.isDesktop = _windowService.isDesktop();
            if (!this.isDesktop) {
                this.refreshZoom();
            }
        }));
        this._activeAnnotationService.activeChange.subscribe((/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            if (this.activeAnnotationId !== id) {
                this.commentOpenedId = null;
                this.activeAnnotationId = id;
            }
        }));
        this._commentAnnotationService.commentAnnotation.subscribe((/**
         * @param {?} commentAnnotation
         * @return {?}
         */
        (commentAnnotation) => {
            this.commentOpenedId = commentAnnotation.id;
            if (!this.comments.get(this.commentOpenedId)) {
                this.comments.set(this.commentOpenedId, []);
            }
        }));
        this._commentAnnotationService.addCommentObserve.subscribe((/**
         * @param {?} comment
         * @return {?}
         */
        (comment) => {
            this.comments.get(this.commentOpenedId).push(comment);
        }));
        this._removeAnnotationService.removeAnnotation.subscribe((/**
         * @param {?} removeAnnotation
         * @return {?}
         */
        (removeAnnotation) => {
            /** @type {?} */
            const componentRef = this.annotations.get(removeAnnotation.id);
            if (componentRef) {
                componentRef.destroy();
            }
            this.annotations.delete(removeAnnotation.id);
            if (this.commentOpenedId === removeAnnotation.id) {
                this.commentOpenedId = null;
            }
            this.comments.delete(removeAnnotation.id);
        }));
        uploadFilesService.uploadsChange.subscribe((/**
         * @param {?} uploads
         * @return {?}
         */
        (uploads) => {
            if (uploads) {
                /** @type {?} */
                let i;
                for (i = 0; i < uploads.length; i++) {
                    this._annotationService.upload(uploads.item(i), '', this.rewriteConfig).subscribe((/**
                     * @param {?} obj
                     * @return {?}
                     */
                    (obj) => {
                        this.fileWasDropped ? this.selectFile(obj.guid, '', '') : this.selectDir('');
                    }));
                }
            }
        }));
        pagePreloadService.checkPreload.subscribe((/**
         * @param {?} page
         * @return {?}
         */
        (page) => {
            if (this.preloadPageCountConfig !== 0) {
                for (let i = page; i < page + 2; i++) {
                    if (i > 0 && i <= this.countPages && !this.file.pages[i - 1].data) {
                        this.preloadPages(i, i);
                    }
                }
            }
        }));
        passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        (pass) => {
            this.selectFile(this.credentials.guid, pass, CommonModals.PasswordRequired);
        }));
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.isDesktop = _windowService.isDesktop();
        }));
    }
    /**
     * @return {?}
     */
    getComments() {
        return this.comments.get(this.commentOpenedId);
    }
    /**
     * @return {?}
     */
    get rewriteConfig() {
        return this.annotationConfig ? this.annotationConfig.rewrite : true;
    }
    /**
     * @return {?}
     */
    get zoomConfig() {
        return this.annotationConfig ? this.annotationConfig.zoom : false;
    }
    /**
     * @return {?}
     */
    get pageSelectorConfig() {
        return this.annotationConfig ? this.annotationConfig.pageSelector : true;
    }
    /**
     * @return {?}
     */
    get preloadPageCountConfig() {
        return this.annotationConfig ? this.annotationConfig.preloadPageCount : 0;
    }
    /**
     * @return {?}
     */
    get downloadConfig() {
        return this.annotationConfig ? this.annotationConfig.download : true;
    }
    /**
     * @return {?}
     */
    get downloadOriginalConfig() {
        return this.annotationConfig ? this.annotationConfig.downloadOriginal : true;
    }
    /**
     * @return {?}
     */
    get downloadAnnotatedConfig() {
        return this.annotationConfig ? this.annotationConfig.downloadAnnotated : true;
    }
    /**
     * @return {?}
     */
    get uploadConfig() {
        return this.annotationConfig ? this.annotationConfig.upload : true;
    }
    /**
     * @private
     * @return {?}
     */
    defaultDocumentConfig() {
        return this.annotationConfig ? this.annotationConfig.defaultDocument : "";
    }
    /**
     * @return {?}
     */
    get printConfig() {
        return this.annotationConfig ? this.annotationConfig.print : true;
    }
    /**
     * @return {?}
     */
    get browseConfig() {
        return this.annotationConfig ? this.annotationConfig.browse : true;
    }
    /**
     * @return {?}
     */
    get htmlModeConfig() {
        return false;
    }
    /**
     * @return {?}
     */
    get enableRightClickConfig() {
        return this.annotationConfig ? this.annotationConfig.enableRightClick : true;
    }
    /**
     * @return {?}
     */
    get textAnnotationConfig() {
        return this.annotationConfig ? this.annotationConfig.textAnnotation : true;
    }
    /**
     * @return {?}
     */
    get areaAnnotationConfig() {
        return this.annotationConfig ? this.annotationConfig.areaAnnotation : true;
    }
    /**
     * @return {?}
     */
    get pointAnnotationConfig() {
        return this.annotationConfig ? this.annotationConfig.pointAnnotation : true;
    }
    /**
     * @return {?}
     */
    get textStrikeoutAnnotationConfig() {
        return this.annotationConfig ? this.annotationConfig.textStrikeoutAnnotation : true;
    }
    /**
     * @return {?}
     */
    get polylineAnnotationConfig() {
        return this.annotationConfig ? this.annotationConfig.polylineAnnotation : true;
    }
    /**
     * @return {?}
     */
    get textFieldAnnotationConfig() {
        return this.annotationConfig ? this.annotationConfig.textFieldAnnotation : true;
    }
    /**
     * @return {?}
     */
    get watermarkAnnotationConfig() {
        return this.annotationConfig ? this.annotationConfig.watermarkAnnotation : true;
    }
    /**
     * @return {?}
     */
    get textReplacementAnnotationConfig() {
        return this.annotationConfig ? this.annotationConfig.textReplacementAnnotation : true;
    }
    /**
     * @return {?}
     */
    get arrowAnnotationConfig() {
        return this.annotationConfig ? this.annotationConfig.arrowAnnotation : true;
    }
    /**
     * @return {?}
     */
    get textRedactionAnnotationConfig() {
        return this.annotationConfig ? this.annotationConfig.textRedactionAnnotation : true;
    }
    /**
     * @return {?}
     */
    get textUnderlineAnnotationConfig() {
        return this.annotationConfig ? this.annotationConfig.textUnderlineAnnotation : true;
    }
    /**
     * @return {?}
     */
    get distanceAnnotationConfig() {
        return this.annotationConfig ? this.annotationConfig.distanceAnnotation : true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const queryString = window.location.search;
        if (queryString) {
            /** @type {?} */
            const urlParams = new URLSearchParams(queryString);
            /** @type {?} */
            const fileRoute = urlParams.get('file');
            if (fileRoute) {
                this.isLoading = true;
                this._annotationService
                    .upload(null, fileRoute, this.rewriteConfig)
                    .subscribe((/**
                 * @param {?} file
                 * @return {?}
                 */
                (file) => {
                    this.selectDir('');
                    this.selectFile(file.guid, '', '');
                }));
            }
        }
        if (this.annotationConfig.defaultDocument !== '') {
            this.isLoading = true;
            this.selectFile(this.annotationConfig.defaultDocument, "", "");
        }
    }
    /**
     * @private
     * @param {?} pt
     * @return {?}
     */
    ptToPx(pt) {
        //pt * 96 / 72 = px.
        return pt * 96 / 72;
    }
    /**
     * @private
     * @return {?}
     */
    getFitToWidth() {
        // Images and Excel-related files receiving dimensions in px from server
        /** @type {?} */
        const pageWidth = this.ptToPx(this._pageWidth);
        /** @type {?} */
        const pageHeight = this.ptToPx(this._pageHeight);
        /** @type {?} */
        const offsetWidth = pageWidth ? pageWidth : window.innerWidth;
        return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / window.innerWidth) : Math.round(window.innerWidth * 100 / offsetWidth);
    }
    /**
     * @param {?} zoom
     * @return {?}
     */
    set zoom(zoom) {
        this._zoom = zoom;
        this._zoomService.changeZoom(this._zoom);
    }
    /**
     * @return {?}
     */
    get zoom() {
        return this._zoom;
    }
    /**
     * @private
     * @return {?}
     */
    refreshZoom() {
        this.zoom = this._windowService.isDesktop() ? 100 : this.getFitToWidth();
    }
    /**
     * @return {?}
     */
    zoomIn() {
        if (this.formatDisabled)
            return;
        if (this._zoom < 490) {
            this.zoom = this._zoom + 10;
        }
    }
    /**
     * @return {?}
     */
    zoomOut() {
        if (this.formatDisabled)
            return;
        if (this._zoom > 30) {
            this.zoom = this._zoom - 10;
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    openModal(id) {
        this._modalService.open(id);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    closeModal(id) {
        this._modalService.close(id);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectDir($event) {
        this._annotationService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        (files) => this.files = files || []));
    }
    /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @return {?}
     */
    selectFile($event, password, modalId) {
        this.credentials = new FileCredentials($event, password);
        this.file = null;
        this.commentOpenedId = null;
        this._annotationService.loadFile(this.credentials).subscribe((/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
            this.cleanAnnotations();
            this.file = file;
            this.formatDisabled = !this.file;
            if (file) {
                if (!this.isDesktop && file.pages && file.pages[0]) {
                    this._pageHeight = file.pages[0].height;
                    this._pageWidth = file.pages[0].width;
                    this.refreshZoom();
                }
                /** @type {?} */
                const preloadPageCount = this.preloadPageCountConfig;
                /** @type {?} */
                const countPages = file.pages ? file.pages.length : 0;
                if (preloadPageCount > 0) {
                    this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                }
                else {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        for (const page of this.file.pages) {
                            this.importAnnotations(page.annotations ? page.annotations : []);
                        }
                    }), 100);
                }
                this._navigateService.countPages = countPages;
                this._navigateService.currentPage = 1;
                this.countPages = countPages;
            }
        }));
        if (modalId) {
            this._modalService.close(modalId);
        }
        this.clearData();
    }
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    preloadPages(start, end) {
        for (let i = start; i <= end; i++) {
            this._annotationService.loadPage(this.credentials, i).subscribe((/**
             * @param {?} page
             * @return {?}
             */
            (page) => {
                this.file.pages[i - 1] = page;
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.importAnnotations(page.annotations ? page.annotations : []);
                }), 100);
            }));
        }
    }
    /**
     * @private
     * @param {?} annotations
     * @return {?}
     */
    importAnnotations(annotations) {
        for (const annotation of annotations) {
            /** @type {?} */
            const position = new Position(annotation.left, annotation.top);
            /** @type {?} */
            const id = this.addAnnotationComponent(annotation.pageNumber, position, annotation);
            this.comments.set(id, annotation.comments);
            this._activeAnnotationService.changeActive(id);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    upload($event) {
        this._annotationService.upload(null, $event, this.rewriteConfig).subscribe((/**
         * @return {?}
         */
        () => {
            this.selectDir('');
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onRightClick($event) {
        return this.enableRightClickConfig;
    }
    /**
     * @return {?}
     */
    downloadFile() {
        if (this.formatDisabled)
            return;
        window.location.assign(this._annotationService.getDownloadUrl(this.credentials));
    }
    /**
     * @return {?}
     */
    annotate() {
        /** @type {?} */
        const annotationsData = this.prepareAnnotationsData();
        this._annotationService.annotate(this.credentials, annotationsData, false).subscribe((/**
         * @param {?} ret
         * @return {?}
         */
        (ret) => {
            this._modalService.open(CommonModals.OperationSuccess);
            this.selectFile(ret.guid, this.credentials.password, CommonModals.OperationSuccess);
        }));
    }
    /**
     * @return {?}
     */
    prepareAnnotationsData() {
        /** @type {?} */
        const annotationsData = [];
        for (const annotation of this.annotations.values()) {
            /** @type {?} */
            const annotationData = ((/** @type {?} */ (annotation.instance))).getAnnotationData();
            annotationData.comments = this.comments.get(annotationData.id);
            annotationsData.push(annotationData);
        }
        return annotationsData;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    isVisible(id) {
        /** @type {?} */
        const supported = !this.file || (this.file && this.file.supportedAnnotations &&
            this.file.supportedAnnotations.find((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                return id === value;
            })));
        return this.getAnnotationTypeConfig(id) && supported;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    activeTab($event) {
        if (this.activeAnnotationTab && $event === this.activeAnnotationTab) {
            this.activeAnnotationTab = null;
        }
        else {
            this.activeAnnotationTab = $event;
        }
    }
    /**
     * @return {?}
     */
    codesConfigFirst() {
        return this.checkConfig(this.annotationTypeFirst);
    }
    /**
     * @return {?}
     */
    codesConfigSecond() {
        return this.checkConfig(this.annotationTypeSecond);
    }
    /**
     * @private
     * @param {?} annotationList
     * @return {?}
     */
    checkConfig(annotationList) {
        for (const annotationType of annotationList) {
            if (this.getAnnotationTypeConfig(annotationType.id)) {
                return true;
            }
        }
        return false;
    }
    /**
     * @return {?}
     */
    codesConfigThird() {
        return this.getAnnotationTypeConfig(AnnotationType.TEXT_FIELD.id) && this.getAnnotationTypeConfig(AnnotationType.WATERMARK.id);
    }
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    getAnnotationTypeConfig(id) {
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
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    fileDropped($event) {
        this.fileWasDropped = $event;
    }
    /**
     * @private
     * @return {?}
     */
    cleanAnnotations() {
        for (const componentRef of this.annotations.values()) {
            componentRef.destroy();
        }
        this.annotations = new Map();
        this.comments = new Map();
    }
    /**
     * @return {?}
     */
    hideAnnotations() {
        for (const annotationCompRef of this.annotations.values()) {
            this.annotationsHidden = ((/** @type {?} */ (annotationCompRef.instance))).hidden = !((/** @type {?} */ (annotationCompRef.instance))).hidden;
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearData() {
        if (!this.file || !this.file.pages) {
            return;
        }
        for (const page of this.file.pages) {
            page.data = null;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    createAnnotation($event) {
        if ($event.target.classList[0] === 'svg' || $event.target.classList[0] === 'gd-page-image') {
            if (this.activeAnnotationTab) {
                $event.preventDefault();
            }
            if (this.activeAnnotationTab) {
                /** @type {?} */
                const position = Utils.getMousePosition($event);
                /** @type {?} */
                const elements = document.elementsFromPoint(position.x, position.y);
                /** @type {?} */
                const currentPage = elements.find((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.id && x.id.startsWith("page-")));
                if (currentPage) {
                    /** @type {?} */
                    const documentPage = $(currentPage).parent().parent()[0];
                    /** @type {?} */
                    const currentPosition = this.getCurrentPosition(position, $(documentPage));
                    /** @type {?} */
                    const pageId = currentPage.id;
                    /** @type {?} */
                    let pageNumber = 1;
                    if (pageId) {
                        /** @type {?} */
                        const split = pageId.split('-');
                        pageNumber = split.length === 2 ? parseInt(split[1], 10) : pageNumber;
                    }
                    /** @type {?} */
                    const id = this.addAnnotationComponent(pageNumber, currentPosition, null);
                    this._activeAnnotationService.changeActive(id);
                    this.creatingAnnotationId = id;
                    // this._tabActivatorService.changeActiveTab(null);
                }
            }
        }
    }
    /**
     * @private
     * @param {?} pageNumber
     * @param {?} currentPosition
     * @param {?} data
     * @return {?}
     */
    addAnnotationComponent(pageNumber, currentPosition, data) {
        /** @type {?} */
        const dynamicDirective = this._hostingComponentsService.find(pageNumber);
        if (dynamicDirective) {
            /** @type {?} */
            const viewContainerRef = dynamicDirective.viewContainerRef;
            /** @type {?} */
            const annotationComponent = this._addDynamicComponentService.addDynamicComponent(viewContainerRef, AnnotationComponent);
            /** @type {?} */
            const id = this.getNextId();
            ((/** @type {?} */ (annotationComponent.instance))).id = id;
            ((/** @type {?} */ (annotationComponent.instance))).position = currentPosition;
            ((/** @type {?} */ (annotationComponent.instance))).pageNumber = pageNumber;
            if (data) {
                /** @type {?} */
                const dimension = new Dimension(data.width, data.height);
                /** @type {?} */
                const type = AnnotationType.getAnnotationType(data.type);
                /** @type {?} */
                const formatting = Formatting.default();
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
            const pageModel = this.file.pages.find((/**
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
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    resizingCreatingAnnotation($event) {
        if (this.activeAnnotationTab) {
            $event.preventDefault();
        }
        if (this.creatingAnnotationId) {
            /** @type {?} */
            const position = Utils.getMousePosition($event);
            /** @type {?} */
            const annotationComponent = this.annotations.get(this.creatingAnnotationId);
            /** @type {?} */
            const type = ((/** @type {?} */ (annotationComponent.instance))).type;
            /** @type {?} */
            const pageNumber = ((/** @type {?} */ (annotationComponent.instance))).pageNumber;
            /** @type {?} */
            const currentPosition = this.getCurrentPosition(position, $("#page-" + pageNumber));
            if (type === AnnotationType.POLYLINE.id || type === AnnotationType.DISTANCE.id || type === AnnotationType.ARROW.id) {
                ((/** @type {?} */ (annotationComponent.instance))).draw(currentPosition);
            }
            else if (type !== AnnotationType.POINT.id) {
                ((/** @type {?} */ (annotationComponent.instance))).calcDimensions(currentPosition);
            }
        }
    }
    /**
     * @private
     * @param {?} position
     * @param {?} page
     * @return {?}
     */
    getCurrentPosition(position, page) {
        /** @type {?} */
        const left = (position.x - page.offset().left) / (this.zoom / 100);
        /** @type {?} */
        const top = (position.y - page.offset().top) / (this.zoom / 100);
        return new Position(left, top);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    finishCreatingAnnotation($event) {
        if (this.activeAnnotationTab) {
            $event.preventDefault();
        }
        if (this.creatingAnnotationId) {
            this._activeAnnotationService.changeActive(this.creatingAnnotationId);
            this.creatingAnnotationId = null;
        }
    }
    /**
     * @return {?}
     */
    closeComments() {
        this.commentOpenedId = null;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPan($event) {
        this._zoomService.changeZoom(this._zoom);
    }
    /**
     * @private
     * @return {?}
     */
    getNextId() {
        /** @type {?} */
        let maxId = 0;
        for (const annId of this.annotations.keys()) {
            if (annId > maxId) {
                maxId = annId;
            }
        }
        /** @type {?} */
        const id = maxId + 1;
        return id;
    }
}
AnnotationAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-annotation-app',
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\">\n  <div class=\"annotation-wrapper wrapper\">\n    <gd-tabbed-toolbars [logo]=\"'annotation'\" [icon]=\"'pen-square'\">\n      <gd-tabs>\n        <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\n          <div id=\"files-tools\" class=\"toolbar-panel\">\n            <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                       *ngIf=\"browseConfig\"></gd-button>\n\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                       (click)=\"downloadFile()\" *ngIf=\"downloadConfig\"></gd-button>\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"annotate()\"></gd-button>\n            <gd-button class=\"desktop-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\"\n              (click)=\"zoomIn()\" *ngIf=\"zoomConfig\"></gd-button>\n            <gd-button class=\"desktop-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\"\n              (click)=\"zoomOut()\" *ngIf=\"zoomConfig\"></gd-button>\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"annotationsHidden ? 'toggle-off' : 'toggle-on'\" [tooltip]=\"'Hide annotations'\" (click)=\"hideAnnotations()\"></gd-button>\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"'Annotations'\" [icon]=\"'highlighter'\" [id]=\"'2'\"\n                *ngIf=\"isDesktop || (!isDesktop && codesConfigFirst())\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let annotationType of (isDesktop ? annotationTypes : annotationTypeFirst)\">\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(annotationType.id)\"\n                          [icon]=\"annotationType.icon\" (activeTab)=\"activeTab($event)\"\n                          [id]=\"annotationType.id\" [tooltip]=\"annotationType.name\">\n              </gd-top-tab>\n            </div>\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"''\" [icon]=\"'vector-square'\" [id]=\"'3'\" *ngIf=\"!isDesktop && codesConfigSecond()\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let annotationType of annotationTypeSecond\">\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(annotationType.id)\"\n                          [icon]=\"annotationType.icon\" (activeTab)=\"activeTab($event)\"\n                          [id]=\"annotationType.id\" [tooltip]=\"annotationType.name\">\n              </gd-top-tab>\n            </div>\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"''\" [icon]=\"'i-cursor'\" [id]=\"'4'\" *ngIf=\"!isDesktop && codesConfigThird()\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let annotationType of annotationTypeThird\">\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(annotationType.id)\"\n                          [icon]=\"annotationType.icon\" (activeTab)=\"activeTab($event)\"\n                          [id]=\"annotationType.id\" [tooltip]=\"annotationType.name\">\n              </gd-top-tab>\n            </div>\n          </div>\n        </gd-tab>\n      </gd-tabs>\n    </gd-tabbed-toolbars>\n    <div class=\"doc-panel\" *ngIf=\"file\" (mousedown)=\"createAnnotation($event)\"\n         (mousemove)=\"resizingCreatingAnnotation($event)\" (mouseup)=\"finishCreatingAnnotation($event)\"\n         (touchstart)=\"!isDesktop ? createAnnotation($event) : ''\" (touchmove)=\"resizingCreatingAnnotation($event)\"\n         (touchend)=\"finishCreatingAnnotation($event)\"\n         (panstart)=\"!isDesktop ? createAnnotation($event) : ''\" (panmove)=\"resizingCreatingAnnotation($event)\"\n         (panend)=\"finishCreatingAnnotation($event)\">\n      <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                   [preloadPageCount]=\"preloadPageCountConfig\" gdRenderPrint [htmlMode]=\"htmlModeConfig\" (onpan)=\"onPan($event)\"></gd-document>\n    </div>\n    <gd-comment-panel *ngIf=\"commentOpenedId\" [annotationId]=\"commentOpenedId\"\n                      [comments]=\"getComments()\" (closeComments)=\"closeComments()\">\n    </gd-comment-panel>\n\n    <gd-init-state [icon]=\"'highlighter'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\"\n                   (fileDropped)=\"fileDropped($event)\">\n      Click\n      <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon>\n      to open file<br>\n      Or drop file here\n    </gd-init-state>\n  </div>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n  <svg class=\"svg\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs xmlns=\"http://www.w3.org/2000/svg\">\n      <marker id=\"end\" orient='auto' markerWidth='20' markerHeight='20'\n              refX=\"10\" refY=\"10\" markerUnits=\"strokeWidth\">\n        <path d='M0,7 L0,13 L12,10 z' fill='#579AF0'></path>\n      </marker>\n      <marker id=\"start\" orient='auto' markerWidth='20' markerHeight='20'\n              refX=\"0\" refY=\"10\" markerUnits=\"strokeWidth\">\n        <path d='M12,7 L12,13 L0,10 z' fill='#579AF0'></path>\n      </marker>\n    </defs>\n  </svg>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .page{position:relative}::ng-deep .gd-page-image{width:unset;height:unset}::ng-deep .top-panel{align-content:flex-start}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:inherit}.gd-document{width:100%;height:calc(100% - 90px)}.toolbar-panel{width:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.annotation-wrapper ::ng-deep .button{color:#3e4e5a!important}.annotation-wrapper ::ng-deep .button .text{padding:0!important}.annotation-wrapper ::ng-deep .select{color:#3e4e5a!important}.desktop-hide{display:none}@media (max-width:1037px){::ng-deep .logo ::ng-deep .icon{font-size:24px!important}::ng-deep .top-panel{height:120px!important}::ng-deep .toolbar-panel .gd-tab,::ng-deep .toolbar-panel ::ng-deep .button{height:60px;line-height:60px;width:60px;margin:0!important}.desktop-hide{display:block}.gd-document{height:calc(100% - 120px)}::ng-deep .bcPicker-palette{position:absolute;left:-80px!important;top:-170px!important}::ng-deep .gd-comments-panel .gd-comments-body{-webkit-box-pack:center;justify-content:center}::ng-deep .gd-comments-panel .gd-comments-body .gd-empty-comments-list{width:unset!important;margin-top:unset!important}}"]
            }] }
];
/** @nocollapse */
AnnotationAppComponent.ctorParameters = () => [
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
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2Fubm90YXRpb24vIiwic291cmNlcyI6WyJsaWIvYW5ub3RhdGlvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUVoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLFlBQVksRUFDWixlQUFlLEVBQ0osVUFBVSxFQUNyQiw4QkFBOEIsRUFDOUIsWUFBWSxFQUNaLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQ3BELHNCQUFzQixFQUFFLGtCQUFrQixFQUMxQyxLQUFLLEVBQ0wsYUFBYSxFQUNiLFdBQVcsRUFDWixNQUFNLCtDQUErQyxDQUFDO0FBQ3ZELE9BQU8sRUFDTCxjQUFjLEVBRWQsUUFBUSxFQUd3RCxTQUFTLEVBQzFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O01BRWhFLENBQUMsR0FBRyxNQUFNO0FBT2hCLE1BQU0sT0FBTyxzQkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdEakMsWUFBb0Isa0JBQXFDLEVBQy9DLGFBQTJCLEVBQzNCLGdCQUFpQyxFQUNqQyxvQkFB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Qix1QkFBdUI7WUFFdkIsdUJBQXVCO1lBQ3ZCLHdCQUF3QjtZQWpCUCxrQkFBa0I7WUFEekIsa0JBQWtCO1lBQUUsZUFBZTtZQUdwRCxhQUFhO1lBQ2IsV0FBVztZQWVKLHVCQUF1Qjs7OztJQVU5Qix1Q0FBcUI7O0lBQ3JCLHVDQUF3Qjs7SUFDeEIsc0NBQWdDOztJQUNoQywyQ0FBbUI7O0lBQ25CLGtEQUFtQzs7SUFDbkMsa0RBQTRDOztJQUM1QyxnREFBNEI7O0lBQzVCLDZDQUFvQzs7SUFDcEMsaURBYUU7O0lBQ0YsMkNBQW1COztJQUNuQixxREFNRTs7SUFDRixzREFNRTs7SUFDRixxREFHRTs7SUFDRiw0Q0FBZTs7SUFDZixpREFBd0I7O0lBQ3hCLDBDQUF3Qzs7SUFDeEMsdUNBQVk7O0lBQ1osNENBQW1COztJQUNuQiw2Q0FBb0I7Ozs7O0lBRXBCLHFEQUFvQzs7Ozs7SUFDcEMsZ0RBQStCOztJQUMvQiw2Q0FBMEQ7Ozs7O0lBQzFELHNEQUFxQzs7Ozs7SUFDckMsb0RBQW1DOztJQUNuQyxtREFBMkI7Ozs7O0lBRWYsb0RBQTZDOzs7OztJQUN2RCwrQ0FBbUM7Ozs7O0lBQ25DLGtEQUF5Qzs7Ozs7SUFDekMsc0RBQW9EOzs7OztJQUNwRCwyREFBaUU7Ozs7O0lBQ2pFLDZEQUErRDs7Ozs7SUFDL0QsMERBQXlEOzs7OztJQUN6RCwwREFBeUQ7O0lBQ3pELDJEQUEwRDs7Ozs7SUFJMUQsZ0RBQXFDOzs7OztJQUNyQyw4Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbm5vdGF0aW9uQ29uZmlnIH0gZnJvbSBcIi4vYW5ub3RhdGlvbi1jb25maWdcIjtcbmltcG9ydCB7IEFubm90YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vYW5ub3RhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuICBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgQ29tbW9uTW9kYWxzLFxuICBGaWxlQ3JlZGVudGlhbHMsXG4gIEZpbGVNb2RlbCwgRm9ybWF0dGluZyxcbiAgSG9zdGluZ0R5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICBNb2RhbFNlcnZpY2UsXG4gIE5hdmlnYXRlU2VydmljZSwgUGFnZVByZWxvYWRTZXJ2aWNlLCBQYXNzd29yZFNlcnZpY2UsXG4gIFRvcFRhYkFjdGl2YXRvclNlcnZpY2UsIFVwbG9hZEZpbGVzU2VydmljZSxcbiAgVXRpbHMsXG4gIFdpbmRvd1NlcnZpY2UsXG4gIFpvb21TZXJ2aWNlXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7XG4gIEFubm90YXRpb25UeXBlLFxuICBDb21tZW50QW5ub3RhdGlvbixcbiAgUG9zaXRpb24sXG4gIFJlbW92ZUFubm90YXRpb24sXG4gIENvbW1lbnQsXG4gIEZpbGVBbm5vdGF0aW9uRGVzY3JpcHRpb24sIFBhZ2VBbm5vdGF0aW9uTW9kZWwsIEFubm90YXRpb25EYXRhLCBEaW1lbnNpb25cbn0gZnJvbSBcIi4vYW5ub3RhdGlvbi1tb2RlbHNcIjtcbmltcG9ydCB7IEFubm90YXRpb25Db21wb25lbnQgfSBmcm9tIFwiLi9hbm5vdGF0aW9uL2Fubm90YXRpb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBY3RpdmVBbm5vdGF0aW9uU2VydmljZSB9IGZyb20gXCIuL2FjdGl2ZS1hbm5vdGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgUmVtb3ZlQW5ub3RhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9yZW1vdmUtYW5ub3RhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDb21tZW50QW5ub3RhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9jb21tZW50LWFubm90YXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgQW5ub3RhdGlvbkNvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi9hbm5vdGF0aW9uLWNvbmZpZy5zZXJ2aWNlXCI7XG5cbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWFubm90YXRpb24tYXBwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fubm90YXRpb24tYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYW5ub3RhdGlvbi1hcHAuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGl0bGUgPSAnYW5ub3RhdGlvbic7XG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xuICBmaWxlOiBGaWxlQW5ub3RhdGlvbkRlc2NyaXB0aW9uO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIGFubm90YXRpb25Db25maWc6IEFubm90YXRpb25Db25maWc7XG4gIGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XG4gIGZvcm1hdERpc2FibGVkID0gIXRoaXMuZmlsZTtcbiAgcHVibGljIGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHM7XG4gIGFubm90YXRpb25UeXBlcyA9IFtcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhULFxuICAgIEFubm90YXRpb25UeXBlLlRFWFRfU1RSSUtFT1VULFxuICAgIEFubm90YXRpb25UeXBlLlRFWFRfVU5ERVJMSU5FLFxuICAgIEFubm90YXRpb25UeXBlLlRFWFRfUkVQTEFDRU1FTlQsXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9SRURBQ1RJT04sXG4gICAgQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUsXG4gICAgQW5ub3RhdGlvblR5cGUuQVJST1csXG4gICAgQW5ub3RhdGlvblR5cGUuRElTVEFOQ0UsXG4gICAgQW5ub3RhdGlvblR5cGUuQVJFQSxcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhUX0ZJRUxELFxuICAgIEFubm90YXRpb25UeXBlLldBVEVSTUFSSyxcbiAgICBBbm5vdGF0aW9uVHlwZS5QT0lOVCxcbiAgXTtcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xuICBhbm5vdGF0aW9uVHlwZUZpcnN0ID0gW1xuICAgIEFubm90YXRpb25UeXBlLlRFWFQsXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9VTkRFUkxJTkUsXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9SRURBQ1RJT04sXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9SRVBMQUNFTUVOVCxcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhUX1NUUklLRU9VVCxcbiAgXTtcbiAgYW5ub3RhdGlvblR5cGVTZWNvbmQgPSBbXG4gICAgQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUsXG4gICAgQW5ub3RhdGlvblR5cGUuQVJST1csXG4gICAgQW5ub3RhdGlvblR5cGUuRElTVEFOQ0UsXG4gICAgQW5ub3RhdGlvblR5cGUuQVJFQSxcbiAgICBBbm5vdGF0aW9uVHlwZS5QT0lOVFxuICBdO1xuICBhbm5vdGF0aW9uVHlwZVRoaXJkID0gW1xuICAgIEFubm90YXRpb25UeXBlLlRFWFRfRklFTEQsXG4gICAgQW5ub3RhdGlvblR5cGUuV0FURVJNQVJLLFxuICBdO1xuICBjb3VudFBhZ2VzID0gMDtcbiAgY29tbWVudE9wZW5lZElkOiBudW1iZXI7XG4gIGNvbW1lbnRzID0gbmV3IE1hcDxudW1iZXIsIENvbW1lbnRbXT4oKTtcbiAgX3pvb20gPSAxMDA7XG4gIF9wYWdlV2lkdGg6IG51bWJlcjtcbiAgX3BhZ2VIZWlnaHQ6IG51bWJlcjtcblxuICBwcml2YXRlIGFjdGl2ZUFubm90YXRpb25UYWI6IHN0cmluZztcbiAgcHJpdmF0ZSBmaWxlV2FzRHJvcHBlZCA9IGZhbHNlO1xuICBwdWJsaWMgYW5ub3RhdGlvbnMgPSBuZXcgTWFwPG51bWJlciwgQ29tcG9uZW50UmVmPGFueT4+KCk7XG4gIHByaXZhdGUgY3JlYXRpbmdBbm5vdGF0aW9uSWQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBhY3RpdmVBbm5vdGF0aW9uSWQ6IG51bWJlcjtcbiAgYW5ub3RhdGlvbnNIaWRkZW46IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYW5ub3RhdGlvblNlcnZpY2U6IEFubm90YXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3RhYkFjdGl2YXRvclNlcnZpY2U6IFRvcFRhYkFjdGl2YXRvclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfaG9zdGluZ0NvbXBvbmVudHNTZXJ2aWNlOiBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfYWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2U6IEFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2FjdGl2ZUFubm90YXRpb25TZXJ2aWNlOiBBY3RpdmVBbm5vdGF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIF9yZW1vdmVBbm5vdGF0aW9uU2VydmljZTogUmVtb3ZlQW5ub3RhdGlvblNlcnZpY2UsXG4gICAgcHVibGljIF9jb21tZW50QW5ub3RhdGlvblNlcnZpY2U6IENvbW1lbnRBbm5vdGF0aW9uU2VydmljZSxcbiAgICB1cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcbiAgICBwYWdlUHJlbG9hZFNlcnZpY2U6IFBhZ2VQcmVsb2FkU2VydmljZSxcbiAgICBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcbiAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcbiAgICBjb25maWdTZXJ2aWNlOiBBbm5vdGF0aW9uQ29uZmlnU2VydmljZSkge1xuXG4gICAgY29uZmlnU2VydmljZS51cGRhdGVkQ29uZmlnLnN1YnNjcmliZSgoYW5ub3RhdGlvbkNvbmZpZykgPT4ge1xuICAgICAgdGhpcy5hbm5vdGF0aW9uQ29uZmlnID0gYW5ub3RhdGlvbkNvbmZpZztcbiAgICB9KTtcblxuICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgX3dpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XG4gICAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgICAgaWYgKCF0aGlzLmlzRGVza3RvcCkge1xuICAgICAgICB0aGlzLnJlZnJlc2hab29tKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9hY3RpdmVBbm5vdGF0aW9uU2VydmljZS5hY3RpdmVDaGFuZ2Uuc3Vic2NyaWJlKChpZDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVBbm5vdGF0aW9uSWQgIT09IGlkKSB7XG4gICAgICAgIHRoaXMuY29tbWVudE9wZW5lZElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY3RpdmVBbm5vdGF0aW9uSWQgPSBpZDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX2NvbW1lbnRBbm5vdGF0aW9uU2VydmljZS5jb21tZW50QW5ub3RhdGlvbi5zdWJzY3JpYmUoKGNvbW1lbnRBbm5vdGF0aW9uOiBDb21tZW50QW5ub3RhdGlvbikgPT4ge1xuICAgICAgdGhpcy5jb21tZW50T3BlbmVkSWQgPSBjb21tZW50QW5ub3RhdGlvbi5pZDtcbiAgICAgIGlmICghdGhpcy5jb21tZW50cy5nZXQodGhpcy5jb21tZW50T3BlbmVkSWQpKSB7XG4gICAgICAgIHRoaXMuY29tbWVudHMuc2V0KHRoaXMuY29tbWVudE9wZW5lZElkLCBbXSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jb21tZW50QW5ub3RhdGlvblNlcnZpY2UuYWRkQ29tbWVudE9ic2VydmUuc3Vic2NyaWJlKChjb21tZW50OiBDb21tZW50KSA9PiB7XG4gICAgICB0aGlzLmNvbW1lbnRzLmdldCh0aGlzLmNvbW1lbnRPcGVuZWRJZCkucHVzaChjb21tZW50KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3JlbW92ZUFubm90YXRpb25TZXJ2aWNlLnJlbW92ZUFubm90YXRpb24uc3Vic2NyaWJlKChyZW1vdmVBbm5vdGF0aW9uOiBSZW1vdmVBbm5vdGF0aW9uKSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmFubm90YXRpb25zLmdldChyZW1vdmVBbm5vdGF0aW9uLmlkKTtcbiAgICAgIGlmIChjb21wb25lbnRSZWYpIHtcbiAgICAgICAgY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYW5ub3RhdGlvbnMuZGVsZXRlKHJlbW92ZUFubm90YXRpb24uaWQpO1xuICAgICAgaWYgKHRoaXMuY29tbWVudE9wZW5lZElkID09PSByZW1vdmVBbm5vdGF0aW9uLmlkKSB7XG4gICAgICAgIHRoaXMuY29tbWVudE9wZW5lZElkID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29tbWVudHMuZGVsZXRlKHJlbW92ZUFubm90YXRpb24uaWQpO1xuICAgIH0pO1xuXG4gICAgdXBsb2FkRmlsZXNTZXJ2aWNlLnVwbG9hZHNDaGFuZ2Uuc3Vic2NyaWJlKCh1cGxvYWRzKSA9PiB7XG4gICAgICBpZiAodXBsb2Fkcykge1xuICAgICAgICBsZXQgaTogbnVtYmVyO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXBsb2Fkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuX2Fubm90YXRpb25TZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oaSksICcnLCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPyB0aGlzLnNlbGVjdEZpbGUob2JqLmd1aWQsICcnLCAnJykgOiB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhZ2VQcmVsb2FkU2VydmljZS5jaGVja1ByZWxvYWQuc3Vic2NyaWJlKChwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLnByZWxvYWRQYWdlQ291bnRDb25maWcgIT09IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHBhZ2U7IGkgPCBwYWdlICsgMjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGkgPiAwICYmIGkgPD0gdGhpcy5jb3VudFBhZ2VzICYmICF0aGlzLmZpbGUucGFnZXNbaSAtIDFdLmRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKGksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGFzc3dvcmRTZXJ2aWNlLnBhc3NDaGFuZ2Uuc3Vic2NyaWJlKChwYXNzOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLmNyZWRlbnRpYWxzLmd1aWQsIHBhc3MsIENvbW1vbk1vZGFscy5QYXNzd29yZFJlcXVpcmVkKTtcbiAgICB9KTtcblxuICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgX3dpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XG4gICAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q29tbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tbWVudHMuZ2V0KHRoaXMuY29tbWVudE9wZW5lZElkKTtcbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcucmV3cml0ZSA6IHRydWU7XG4gIH1cblxuICBnZXQgem9vbUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnpvb20gOiBmYWxzZTtcbiAgfVxuXG4gIGdldCBwYWdlU2VsZWN0b3JDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5wYWdlU2VsZWN0b3IgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHByZWxvYWRQYWdlQ291bnRDb25maWcoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgOiAwO1xuICB9XG5cbiAgZ2V0IGRvd25sb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcuZG93bmxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGRvd25sb2FkT3JpZ2luYWxDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5kb3dubG9hZE9yaWdpbmFsIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBkb3dubG9hZEFubm90YXRlZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLmRvd25sb2FkQW5ub3RhdGVkIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB1cGxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy51cGxvYWQgOiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWZhdWx0RG9jdW1lbnRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5kZWZhdWx0RG9jdW1lbnQgOiBcIlwiO1xuICB9XG5cbiAgZ2V0IHByaW50Q29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcucHJpbnQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLmJyb3dzZSA6IHRydWU7XG4gIH1cblxuICBnZXQgaHRtbE1vZGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0IGVuYWJsZVJpZ2h0Q2xpY2tDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5lbmFibGVSaWdodENsaWNrIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB0ZXh0QW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnRleHRBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBhcmVhQW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLmFyZWFBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBwb2ludEFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5wb2ludEFubm90YXRpb24gOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHRleHRTdHJpa2VvdXRBbm5vdGF0aW9uQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcudGV4dFN0cmlrZW91dEFubm90YXRpb24gOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHBvbHlsaW5lQW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnBvbHlsaW5lQW5ub3RhdGlvbiA6IHRydWU7XG4gIH1cblxuICBnZXQgdGV4dEZpZWxkQW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnRleHRGaWVsZEFubm90YXRpb24gOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHdhdGVybWFya0Fubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy53YXRlcm1hcmtBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB0ZXh0UmVwbGFjZW1lbnRBbm5vdGF0aW9uQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcudGV4dFJlcGxhY2VtZW50QW5ub3RhdGlvbiA6IHRydWU7XG4gIH1cblxuICBnZXQgYXJyb3dBbm5vdGF0aW9uQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcuYXJyb3dBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB0ZXh0UmVkYWN0aW9uQW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnRleHRSZWRhY3Rpb25Bbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB0ZXh0VW5kZXJsaW5lQW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnRleHRVbmRlcmxpbmVBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBkaXN0YW5jZUFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5kaXN0YW5jZUFubm90YXRpb24gOiB0cnVlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuXG4gICAgaWYgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcblxuICAgICAgY29uc3QgZmlsZVJvdXRlID0gdXJsUGFyYW1zLmdldCgnZmlsZScpO1xuICAgICAgaWYgKGZpbGVSb3V0ZSkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fYW5ub3RhdGlvblNlcnZpY2VcbiAgICAgICAgICAudXBsb2FkKG51bGwsIGZpbGVSb3V0ZSwgdGhpcy5yZXdyaXRlQ29uZmlnKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKGZpbGU6IEZpbGVDcmVkZW50aWFscykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RGaWxlKGZpbGUuZ3VpZCwgJycsICcnKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5hbm5vdGF0aW9uQ29uZmlnLmRlZmF1bHREb2N1bWVudCAhPT0gJycpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLmFubm90YXRpb25Db25maWcuZGVmYXVsdERvY3VtZW50LCBcIlwiLCBcIlwiKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHB0VG9QeChwdDogbnVtYmVyKSB7XG4gICAgLy9wdCAqIDk2IC8gNzIgPSBweC5cbiAgICByZXR1cm4gcHQgKiA5NiAvIDcyO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaXRUb1dpZHRoKCkge1xuICAgIC8vIEltYWdlcyBhbmQgRXhjZWwtcmVsYXRlZCBmaWxlcyByZWNlaXZpbmcgZGltZW5zaW9ucyBpbiBweCBmcm9tIHNlcnZlclxuICAgIGNvbnN0IHBhZ2VXaWR0aCA9IHRoaXMucHRUb1B4KHRoaXMuX3BhZ2VXaWR0aCk7XG4gICAgY29uc3QgcGFnZUhlaWdodCA9IHRoaXMucHRUb1B4KHRoaXMuX3BhZ2VIZWlnaHQpO1xuICAgIGNvbnN0IG9mZnNldFdpZHRoID0gcGFnZVdpZHRoID8gcGFnZVdpZHRoIDogd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICByZXR1cm4gKHBhZ2VIZWlnaHQgPiBwYWdlV2lkdGggJiYgTWF0aC5yb3VuZChvZmZzZXRXaWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSA8IDIpID8gMjAwIC0gTWF0aC5yb3VuZChvZmZzZXRXaWR0aCAqIDEwMCAvIHdpbmRvdy5pbm5lcldpZHRoKSA6IE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggKiAxMDAgLyBvZmZzZXRXaWR0aCk7XG4gIH1cblxuICBzZXQgem9vbSh6b29tKSB7XG4gICAgdGhpcy5fem9vbSA9IHpvb207XG4gICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLl96b29tKTtcbiAgfVxuXG4gIGdldCB6b29tKCkge1xuICAgIHJldHVybiB0aGlzLl96b29tO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoWm9vbSgpIHtcbiAgICB0aGlzLnpvb20gPSB0aGlzLl93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpID8gMTAwIDogdGhpcy5nZXRGaXRUb1dpZHRoKCk7XG4gIH1cblxuICB6b29tSW4oKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRoaXMuX3pvb20gPCA0OTApIHtcbiAgICAgIHRoaXMuem9vbSA9IHRoaXMuX3pvb20gKyAxMDtcbiAgICB9XG4gIH1cblxuICB6b29tT3V0KCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGlmICh0aGlzLl96b29tID4gMzApIHtcbiAgICAgIHRoaXMuem9vbSA9IHRoaXMuX3pvb20gLSAxMDtcbiAgICB9XG4gIH1cblxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKGlkKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShpZCk7XG4gIH1cblxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hbm5vdGF0aW9uU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBGaWxlTW9kZWxbXSkgPT4gdGhpcy5maWxlcyA9IGZpbGVzIHx8IFtdKTtcbiAgfVxuXG4gIHNlbGVjdEZpbGUoJGV2ZW50OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG1vZGFsSWQ6IHN0cmluZykge1xuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBuZXcgRmlsZUNyZWRlbnRpYWxzKCRldmVudCwgcGFzc3dvcmQpO1xuICAgIHRoaXMuZmlsZSA9IG51bGw7XG4gICAgdGhpcy5jb21tZW50T3BlbmVkSWQgPSBudWxsO1xuICAgIHRoaXMuX2Fubm90YXRpb25TZXJ2aWNlLmxvYWRGaWxlKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZmlsZTogRmlsZUFubm90YXRpb25EZXNjcmlwdGlvbikgPT4ge1xuICAgICAgdGhpcy5jbGVhbkFubm90YXRpb25zKCk7XG4gICAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgICAgdGhpcy5mb3JtYXREaXNhYmxlZCA9ICF0aGlzLmZpbGU7XG4gICAgICBpZiAoZmlsZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNEZXNrdG9wICYmIGZpbGUucGFnZXMgJiYgZmlsZS5wYWdlc1swXSkge1xuICAgICAgICAgIHRoaXMuX3BhZ2VIZWlnaHQgPSBmaWxlLnBhZ2VzWzBdLmhlaWdodDtcbiAgICAgICAgICB0aGlzLl9wYWdlV2lkdGggPSBmaWxlLnBhZ2VzWzBdLndpZHRoO1xuICAgICAgICAgIHRoaXMucmVmcmVzaFpvb20oKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmVsb2FkUGFnZUNvdW50ID0gdGhpcy5wcmVsb2FkUGFnZUNvdW50Q29uZmlnO1xuICAgICAgICBjb25zdCBjb3VudFBhZ2VzID0gZmlsZS5wYWdlcyA/IGZpbGUucGFnZXMubGVuZ3RoIDogMDtcbiAgICAgICAgaWYgKHByZWxvYWRQYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgdGhpcy5wcmVsb2FkUGFnZXMoMSwgcHJlbG9hZFBhZ2VDb3VudCA+IGNvdW50UGFnZXMgPyBjb3VudFBhZ2VzIDogcHJlbG9hZFBhZ2VDb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW1wb3J0QW5ub3RhdGlvbnMocGFnZS5hbm5vdGF0aW9ucyA/IHBhZ2UuYW5ub3RhdGlvbnMgOiBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY291bnRQYWdlcyA9IGNvdW50UGFnZXM7XG4gICAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9IDE7XG4gICAgICAgIHRoaXMuY291bnRQYWdlcyA9IGNvdW50UGFnZXM7XG4gICAgICB9XG4gICAgfVxuICAgICk7XG4gICAgaWYgKG1vZGFsSWQpIHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShtb2RhbElkKTtcbiAgICB9XG4gICAgdGhpcy5jbGVhckRhdGEoKTtcbiAgfVxuXG4gIHByZWxvYWRQYWdlcyhzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgdGhpcy5fYW5ub3RhdGlvblNlcnZpY2UubG9hZFBhZ2UodGhpcy5jcmVkZW50aWFscywgaSkuc3Vic2NyaWJlKChwYWdlOiBQYWdlQW5ub3RhdGlvbk1vZGVsKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZS5wYWdlc1tpIC0gMV0gPSBwYWdlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmltcG9ydEFubm90YXRpb25zKHBhZ2UuYW5ub3RhdGlvbnMgPyBwYWdlLmFubm90YXRpb25zIDogW10pO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbXBvcnRBbm5vdGF0aW9ucyhhbm5vdGF0aW9uczogQW5ub3RhdGlvbkRhdGFbXSkge1xuICAgIGZvciAoY29uc3QgYW5ub3RhdGlvbiBvZiBhbm5vdGF0aW9ucykge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24oYW5ub3RhdGlvbi5sZWZ0LCBhbm5vdGF0aW9uLnRvcCk7XG4gICAgICBjb25zdCBpZCA9IHRoaXMuYWRkQW5ub3RhdGlvbkNvbXBvbmVudChhbm5vdGF0aW9uLnBhZ2VOdW1iZXIsIHBvc2l0aW9uLCBhbm5vdGF0aW9uKTtcbiAgICAgIHRoaXMuY29tbWVudHMuc2V0KGlkLCBhbm5vdGF0aW9uLmNvbW1lbnRzKTtcbiAgICAgIHRoaXMuX2FjdGl2ZUFubm90YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZShpZCk7XG4gICAgfVxuICB9XG5cbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fYW5ub3RhdGlvblNlcnZpY2UudXBsb2FkKG51bGwsICRldmVudCwgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgIH0pO1xuICB9XG5cbiAgb25SaWdodENsaWNrKCRldmVudDogTW91c2VFdmVudCkge1xuICAgIHJldHVybiB0aGlzLmVuYWJsZVJpZ2h0Q2xpY2tDb25maWc7XG4gIH1cblxuICBkb3dubG9hZEZpbGUoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLl9hbm5vdGF0aW9uU2VydmljZS5nZXREb3dubG9hZFVybCh0aGlzLmNyZWRlbnRpYWxzKSk7XG4gIH1cblxuICBhbm5vdGF0ZSgpIHtcbiAgICBjb25zdCBhbm5vdGF0aW9uc0RhdGEgPSB0aGlzLnByZXBhcmVBbm5vdGF0aW9uc0RhdGEoKTtcblxuICAgIHRoaXMuX2Fubm90YXRpb25TZXJ2aWNlLmFubm90YXRlKHRoaXMuY3JlZGVudGlhbHMsIGFubm90YXRpb25zRGF0YSwgZmFsc2UpLnN1YnNjcmliZSgocmV0OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5PcGVyYXRpb25TdWNjZXNzKTtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZShyZXQuZ3VpZCwgdGhpcy5jcmVkZW50aWFscy5wYXNzd29yZCwgQ29tbW9uTW9kYWxzLk9wZXJhdGlvblN1Y2Nlc3MpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHByZXBhcmVBbm5vdGF0aW9uc0RhdGEoKSB7XG4gICAgY29uc3QgYW5ub3RhdGlvbnNEYXRhID0gW107XG4gICAgZm9yIChjb25zdCBhbm5vdGF0aW9uIG9mIHRoaXMuYW5ub3RhdGlvbnMudmFsdWVzKCkpIHtcbiAgICAgIGNvbnN0IGFubm90YXRpb25EYXRhID0gKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb24uaW5zdGFuY2UpLmdldEFubm90YXRpb25EYXRhKCk7XG4gICAgICBhbm5vdGF0aW9uRGF0YS5jb21tZW50cyA9IHRoaXMuY29tbWVudHMuZ2V0KGFubm90YXRpb25EYXRhLmlkKTtcbiAgICAgIGFubm90YXRpb25zRGF0YS5wdXNoKGFubm90YXRpb25EYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGFubm90YXRpb25zRGF0YTtcbiAgfVxuXG4gIGlzVmlzaWJsZShpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3VwcG9ydGVkID0gIXRoaXMuZmlsZSB8fCAodGhpcy5maWxlICYmIHRoaXMuZmlsZS5zdXBwb3J0ZWRBbm5vdGF0aW9ucyAmJlxuICAgICAgdGhpcy5maWxlLnN1cHBvcnRlZEFubm90YXRpb25zLmZpbmQoZnVuY3Rpb24gKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGlkID09PSB2YWx1ZTtcbiAgICAgIH0pKTtcbiAgICByZXR1cm4gdGhpcy5nZXRBbm5vdGF0aW9uVHlwZUNvbmZpZyhpZCkgJiYgc3VwcG9ydGVkO1xuICB9XG5cbiAgYWN0aXZlVGFiKCRldmVudCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZUFubm90YXRpb25UYWIgJiYgJGV2ZW50ID09PSB0aGlzLmFjdGl2ZUFubm90YXRpb25UYWIpIHtcbiAgICAgIHRoaXMuYWN0aXZlQW5ub3RhdGlvblRhYiA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlQW5ub3RhdGlvblRhYiA9ICRldmVudDtcbiAgICB9XG4gIH1cblxuICBjb2Rlc0NvbmZpZ0ZpcnN0KCkge1xuICAgIHJldHVybiB0aGlzLmNoZWNrQ29uZmlnKHRoaXMuYW5ub3RhdGlvblR5cGVGaXJzdCk7XG4gIH1cblxuICBjb2Rlc0NvbmZpZ1NlY29uZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja0NvbmZpZyh0aGlzLmFubm90YXRpb25UeXBlU2Vjb25kKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tDb25maWcoYW5ub3RhdGlvbkxpc3QpIHtcbiAgICBmb3IgKGNvbnN0IGFubm90YXRpb25UeXBlIG9mIGFubm90YXRpb25MaXN0KSB7XG4gICAgICBpZiAodGhpcy5nZXRBbm5vdGF0aW9uVHlwZUNvbmZpZyhhbm5vdGF0aW9uVHlwZS5pZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvZGVzQ29uZmlnVGhpcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QW5ub3RhdGlvblR5cGVDb25maWcoQW5ub3RhdGlvblR5cGUuVEVYVF9GSUVMRC5pZCkgJiYgdGhpcy5nZXRBbm5vdGF0aW9uVHlwZUNvbmZpZyhBbm5vdGF0aW9uVHlwZS5XQVRFUk1BUksuaWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBbm5vdGF0aW9uVHlwZUNvbmZpZyhpZDogc3RyaW5nKSB7XG4gICAgc3dpdGNoIChpZCkge1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhULmlkOlxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0QW5ub3RhdGlvbkNvbmZpZztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuQVJFQS5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJlYUFubm90YXRpb25Db25maWc7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlBPSU5ULmlkOlxuICAgICAgICByZXR1cm4gdGhpcy5wb2ludEFubm90YXRpb25Db25maWc7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfU1RSSUtFT1VULmlkOlxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0U3RyaWtlb3V0QW5ub3RhdGlvbkNvbmZpZztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlsaW5lQW5ub3RhdGlvbkNvbmZpZztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9GSUVMRC5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dEZpZWxkQW5ub3RhdGlvbkNvbmZpZztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuV0FURVJNQVJLLmlkOlxuICAgICAgICByZXR1cm4gdGhpcy53YXRlcm1hcmtBbm5vdGF0aW9uQ29uZmlnO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1JFUExBQ0VNRU5ULmlkOlxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0UmVwbGFjZW1lbnRBbm5vdGF0aW9uQ29uZmlnO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5BUlJPVy5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyb3dBbm5vdGF0aW9uQ29uZmlnO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1JFREFDVElPTi5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFJlZGFjdGlvbkFubm90YXRpb25Db25maWc7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfVU5ERVJMSU5FLmlkOlxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0VW5kZXJsaW5lQW5ub3RhdGlvbkNvbmZpZztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuRElTVEFOQ0UuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLmRpc3RhbmNlQW5ub3RhdGlvbkNvbmZpZztcbiAgICB9XG4gIH1cblxuICBmaWxlRHJvcHBlZCgkZXZlbnQpIHtcbiAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID0gJGV2ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhbkFubm90YXRpb25zKCkge1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50UmVmIG9mIHRoaXMuYW5ub3RhdGlvbnMudmFsdWVzKCkpIHtcbiAgICAgIGNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuYW5ub3RhdGlvbnMgPSBuZXcgTWFwPG51bWJlciwgQ29tcG9uZW50UmVmPGFueT4+KCk7XG4gICAgdGhpcy5jb21tZW50cyA9IG5ldyBNYXA8bnVtYmVyLCBDb21tZW50W10+KCk7XG4gIH1cblxuICBoaWRlQW5ub3RhdGlvbnMoKSB7XG4gICAgZm9yIChjb25zdCBhbm5vdGF0aW9uQ29tcFJlZiBvZiB0aGlzLmFubm90YXRpb25zLnZhbHVlcygpKSB7XG4gICAgICB0aGlzLmFubm90YXRpb25zSGlkZGVuID0gKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wUmVmLmluc3RhbmNlKS5oaWRkZW4gPSAhKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wUmVmLmluc3RhbmNlKS5oaWRkZW47XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckRhdGEoKSB7XG4gICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICBwYWdlLmRhdGEgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUFubm90YXRpb24oJGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoJGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMF0gPT09ICdzdmcnIHx8ICRldmVudC50YXJnZXQuY2xhc3NMaXN0WzBdID09PSAnZ2QtcGFnZS1pbWFnZScpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUFubm90YXRpb25UYWIpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmFjdGl2ZUFubm90YXRpb25UYWIpIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2UgPSBlbGVtZW50cy5maW5kKHggPT4geC5pZCAmJiB4LmlkLnN0YXJ0c1dpdGgoXCJwYWdlLVwiKSk7XG4gICAgICAgIGlmIChjdXJyZW50UGFnZSkge1xuICAgICAgICAgIGNvbnN0IGRvY3VtZW50UGFnZSA9ICQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpWzBdO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuZ2V0Q3VycmVudFBvc2l0aW9uKHBvc2l0aW9uLCAkKGRvY3VtZW50UGFnZSkpO1xuICAgICAgICAgIGNvbnN0IHBhZ2VJZCA9IGN1cnJlbnRQYWdlLmlkO1xuICAgICAgICAgIGxldCBwYWdlTnVtYmVyID0gMTtcbiAgICAgICAgICBpZiAocGFnZUlkKSB7XG4gICAgICAgICAgICBjb25zdCBzcGxpdCA9IHBhZ2VJZC5zcGxpdCgnLScpO1xuICAgICAgICAgICAgcGFnZU51bWJlciA9IHNwbGl0Lmxlbmd0aCA9PT0gMiA/IHBhcnNlSW50KHNwbGl0WzFdLCAxMCkgOiBwYWdlTnVtYmVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBpZCA9IHRoaXMuYWRkQW5ub3RhdGlvbkNvbXBvbmVudChwYWdlTnVtYmVyLCBjdXJyZW50UG9zaXRpb24sIG51bGwpO1xuICAgICAgICAgIHRoaXMuX2FjdGl2ZUFubm90YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZShpZCk7XG4gICAgICAgICAgdGhpcy5jcmVhdGluZ0Fubm90YXRpb25JZCA9IGlkO1xuICAgICAgICAgIC8vIHRoaXMuX3RhYkFjdGl2YXRvclNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRBbm5vdGF0aW9uQ29tcG9uZW50KHBhZ2VOdW1iZXI6IG51bWJlciwgY3VycmVudFBvc2l0aW9uOiBQb3NpdGlvbiwgZGF0YTogQW5ub3RhdGlvbkRhdGEpIHtcbiAgICBjb25zdCBkeW5hbWljRGlyZWN0aXZlID0gdGhpcy5faG9zdGluZ0NvbXBvbmVudHNTZXJ2aWNlLmZpbmQocGFnZU51bWJlcik7XG4gICAgaWYgKGR5bmFtaWNEaXJlY3RpdmUpIHtcbiAgICAgIGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSBkeW5hbWljRGlyZWN0aXZlLnZpZXdDb250YWluZXJSZWY7XG4gICAgICBjb25zdCBhbm5vdGF0aW9uQ29tcG9uZW50ID0gdGhpcy5fYWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UuYWRkRHluYW1pY0NvbXBvbmVudCh2aWV3Q29udGFpbmVyUmVmLCBBbm5vdGF0aW9uQ29tcG9uZW50KTtcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXROZXh0SWQoKTtcbiAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS5pZCA9IGlkO1xuICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uO1xuICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgY29uc3QgZGltZW5zaW9uID0gbmV3IERpbWVuc2lvbihkYXRhLndpZHRoLCBkYXRhLmhlaWdodCk7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBBbm5vdGF0aW9uVHlwZS5nZXRBbm5vdGF0aW9uVHlwZShkYXRhLnR5cGUpO1xuICAgICAgICBjb25zdCBmb3JtYXR0aW5nID0gRm9ybWF0dGluZy5kZWZhdWx0KCk7XG4gICAgICAgIGZvcm1hdHRpbmcuZm9udFNpemUgPSBkYXRhLmZvbnRTaXplO1xuICAgICAgICBpZiAoZGF0YS5mb250Q29sb3IpIHtcbiAgICAgICAgICBmb3JtYXR0aW5nLmNvbG9yID0gXCIjXCIgKyBkYXRhLmZvbnRDb2xvci50b1N0cmluZygxNik7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybWF0dGluZy5mb250ID0gZGF0YS5mb250O1xuICAgICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkudHlwZSA9IHR5cGUgPyB0eXBlLmlkIDogZGF0YS50eXBlO1xuICAgICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkuZGltZW5zaW9uID0gZGltZW5zaW9uO1xuICAgICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkuc3ZnUGF0aCA9IGRhdGEuc3ZnUGF0aDtcbiAgICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnRleHRWYWx1ZSA9IGRhdGEudGV4dDtcbiAgICAgICAgaWYgKGZvcm1hdHRpbmcpIHtcbiAgICAgICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkuc2F2ZUZvcm1hdHRpbmcoZm9ybWF0dGluZyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS50eXBlID0gdGhpcy5hY3RpdmVBbm5vdGF0aW9uVGFiO1xuICAgICAgfVxuICAgICAgY29uc3QgcGFnZU1vZGVsID0gdGhpcy5maWxlLnBhZ2VzLmZpbmQoZnVuY3Rpb24gKHApIHtcbiAgICAgICAgcmV0dXJuIHAubnVtYmVyID09PSBwYWdlTnVtYmVyO1xuICAgICAgfSk7XG4gICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkucGFnZVdpZHRoID0gcGFnZU1vZGVsLndpZHRoO1xuICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnBhZ2VIZWlnaHQgPSBwYWdlTW9kZWwuaGVpZ2h0O1xuICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLmhpZGRlbiA9IHRoaXMuYW5ub3RhdGlvbnNIaWRkZW47XG4gICAgICB0aGlzLmFubm90YXRpb25zLnNldChpZCwgYW5ub3RhdGlvbkNvbXBvbmVudCk7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVzaXppbmdDcmVhdGluZ0Fubm90YXRpb24oJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlQW5ub3RhdGlvblRhYikge1xuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY3JlYXRpbmdBbm5vdGF0aW9uSWQpIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xuICAgICAgY29uc3QgYW5ub3RhdGlvbkNvbXBvbmVudCA9IHRoaXMuYW5ub3RhdGlvbnMuZ2V0KHRoaXMuY3JlYXRpbmdBbm5vdGF0aW9uSWQpO1xuICAgICAgY29uc3QgdHlwZSA9ICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS50eXBlO1xuICAgICAgY29uc3QgcGFnZU51bWJlciA9ICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS5wYWdlTnVtYmVyO1xuICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gdGhpcy5nZXRDdXJyZW50UG9zaXRpb24ocG9zaXRpb24sICQoXCIjcGFnZS1cIiArIHBhZ2VOdW1iZXIpKTtcbiAgICAgIGlmICh0eXBlID09PSBBbm5vdGF0aW9uVHlwZS5QT0xZTElORS5pZCB8fCB0eXBlID09PSBBbm5vdGF0aW9uVHlwZS5ESVNUQU5DRS5pZCB8fCB0eXBlID09PSBBbm5vdGF0aW9uVHlwZS5BUlJPVy5pZCkge1xuICAgICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkuZHJhdyhjdXJyZW50UG9zaXRpb24pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSBBbm5vdGF0aW9uVHlwZS5QT0lOVC5pZCkge1xuICAgICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkuY2FsY0RpbWVuc2lvbnMoY3VycmVudFBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiwgcGFnZSkge1xuICAgIGNvbnN0IGxlZnQgPSAocG9zaXRpb24ueCAtIHBhZ2Uub2Zmc2V0KCkubGVmdCkgLyAodGhpcy56b29tIC8gMTAwKTtcbiAgICBjb25zdCB0b3AgPSAocG9zaXRpb24ueSAtIHBhZ2Uub2Zmc2V0KCkudG9wKSAvICh0aGlzLnpvb20gLyAxMDApO1xuICAgIHJldHVybiBuZXcgUG9zaXRpb24obGVmdCwgdG9wKTtcbiAgfVxuXG4gIGZpbmlzaENyZWF0aW5nQW5ub3RhdGlvbigkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVBbm5vdGF0aW9uVGFiKSB7XG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jcmVhdGluZ0Fubm90YXRpb25JZCkge1xuICAgICAgdGhpcy5fYWN0aXZlQW5ub3RhdGlvblNlcnZpY2UuY2hhbmdlQWN0aXZlKHRoaXMuY3JlYXRpbmdBbm5vdGF0aW9uSWQpO1xuICAgICAgdGhpcy5jcmVhdGluZ0Fubm90YXRpb25JZCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VDb21tZW50cygpIHtcbiAgICB0aGlzLmNvbW1lbnRPcGVuZWRJZCA9IG51bGw7XG4gIH1cblxuICBvblBhbigkZXZlbnQpIHtcbiAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHRoaXMuX3pvb20pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXh0SWQoKSB7XG4gICAgbGV0IG1heElkID0gMDtcbiAgICBmb3IgKGNvbnN0IGFubklkIG9mIHRoaXMuYW5ub3RhdGlvbnMua2V5cygpKSB7XG4gICAgICBpZiAoYW5uSWQgPiBtYXhJZCkge1xuICAgICAgICBtYXhJZCA9IGFubklkO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBpZCA9IG1heElkICsgMTtcbiAgICByZXR1cm4gaWQ7XG4gIH1cbn1cbiJdfQ==