/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
     */
    constructor(_annotationService, _modalService, _navigateService, _tabActivatorService, _hostingComponentsService, _addDynamicComponentService, _activeAnnotationService, _removeAnnotationService, _commentAnnotationService, uploadFilesService, pagePreloadService, passwordService, _windowService) {
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
        this._annotationService.loadFile(this.credentials).subscribe((/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
            this.cleanAnnotations();
            this.file = file;
            this.formatDisabled = !this.file;
            if (file) {
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
                this.importAnnotations(page.annotations ? page.annotations : []);
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
        const annotationsData = [];
        for (const annotation of this.annotations.values()) {
            /** @type {?} */
            const annotationData = ((/** @type {?} */ (annotation.instance))).getAnnotationData();
            annotationData.comments = this.comments.get(annotationData.id);
            annotationsData.push(annotationData);
        }
        this._annotationService.annotate(this.credentials, annotationsData, false).subscribe((/**
         * @param {?} ret
         * @return {?}
         */
        (ret) => {
            this._modalService.open(CommonModals.OperationSuccess);
            this.selectFile(ret.guid, null, CommonModals.OperationSuccess);
        }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    isVisible(id) {
        /** @type {?} */
        const supported = !this.file || (this.file && this.file.supportedAnnotations.find((/**
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
        this.activeAnnotationTab = $event;
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
        $event.preventDefault();
        $event.stopPropagation();
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
                this._tabActivatorService.changeActiveTab(null);
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
            const id = this.annotations.size + 1;
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
        $event.preventDefault();
        $event.stopPropagation();
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
            else {
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
        const left = position.x - page.offset().left;
        /** @type {?} */
        const top = position.y - page.offset().top;
        return new Position(left, top);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    finishCreatingAnnotation($event) {
        this.creatingAnnotationId = null;
    }
    /**
     * @return {?}
     */
    closeComments() {
        this.commentOpenedId = null;
    }
}
AnnotationAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-annotation-app',
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\">\n  <div class=\"annotation-wrapper wrapper\">\n    <gd-tabbed-toolbars [logo]=\"'annotation'\" [icon]=\"'pen-square'\">\n      <gd-tabs>\n        <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\n          <div id=\"files-tools\" class=\"toolbar-panel\">\n            <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                       *ngIf=\"browseConfig\"></gd-button>\n\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                       (click)=\"downloadFile()\" *ngIf=\"downloadConfig\"></gd-button>\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"annotate()\"></gd-button>\n\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"'Annotations'\" [icon]=\"'highlighter'\" [id]=\"'2'\"\n                *ngIf=\"isDesktop || (!isDesktop && codesConfigFirst())\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let annotationType of (isDesktop ? annotationTypes : annotationTypeFirst)\">\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(annotationType.id)\"\n                          [icon]=\"annotationType.icon\" (activeTab)=\"activeTab($event)\"\n                          [id]=\"annotationType.id\" [tooltip]=\"annotationType.name\">\n              </gd-top-tab>\n            </div>\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"''\" [icon]=\"'vector-square'\" [id]=\"'3'\" *ngIf=\"!isDesktop && codesConfigSecond()\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let annotationType of annotationTypeSecond\">\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(annotationType.id)\"\n                          [icon]=\"annotationType.icon\" (activeTab)=\"activeTab($event)\"\n                          [id]=\"annotationType.id\" [tooltip]=\"annotationType.name\">\n              </gd-top-tab>\n            </div>\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"''\" [icon]=\"'i-cursor'\" [id]=\"'4'\" *ngIf=\"!isDesktop && codesConfigThird()\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let annotationType of annotationTypeThird\">\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(annotationType.id)\"\n                          [icon]=\"annotationType.icon\" (activeTab)=\"activeTab($event)\"\n                          [id]=\"annotationType.id\" [tooltip]=\"annotationType.name\">\n              </gd-top-tab>\n            </div>\n          </div>\n        </gd-tab>\n      </gd-tabs>\n    </gd-tabbed-toolbars>\n    <div class=\"doc-panel\" *ngIf=\"file\" (mousedown)=\"createAnnotation($event)\"\n         (mousemove)=\"resizingCreatingAnnotation($event)\" (mouseup)=\"finishCreatingAnnotation($event)\"\n         (touchstart)=\"createAnnotation($event)\" (touchmove)=\"resizingCreatingAnnotation($event)\"\n         (touchend)=\"finishCreatingAnnotation($event)\"\n         (panstart)=\"createAnnotation($event)\" (panmove)=\"resizingCreatingAnnotation($event)\"\n         (panend)=\"finishCreatingAnnotation($event)\">\n      <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                   [preloadPageCount]=\"preloadPageCountConfig\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-document>\n    </div>\n    <gd-comment-panel *ngIf=\"commentOpenedId\" [annotationId]=\"commentOpenedId\"\n                      [comments]=\"getComments()\" (closeComments)=\"closeComments()\">\n    </gd-comment-panel>\n\n    <gd-init-state [icon]=\"'highlighter'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\"\n                   (fileDropped)=\"fileDropped($event)\">\n      Click\n      <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon>\n      to open file<br>\n      Or drop file here\n    </gd-init-state>\n  </div>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n  <svg class=\"svg\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs xmlns=\"http://www.w3.org/2000/svg\">\n      <marker id=\"end\" orient='auto' markerWidth='20' markerHeight='20'\n              refX=\"10\" refY=\"10\" markerUnits=\"strokeWidth\">\n        <path d='M0,7 L0,13 L12,10 z' fill='#579AF0'></path>\n      </marker>\n      <marker id=\"start\" orient='auto' markerWidth='20' markerHeight='20'\n              refX=\"0\" refY=\"10\" markerUnits=\"strokeWidth\">\n        <path d='M12,7 L12,13 L0,10 z' fill='#579AF0'></path>\n      </marker>\n    </defs>\n  </svg>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .page{position:relative}::ng-deep .gd-page-image{width:unset;height:unset}::ng-deep .top-panel{align-content:flex-start}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:inherit}.gd-document{width:100%;height:calc(100% - 90px)}.toolbar-panel{width:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.annotation-wrapper ::ng-deep .button{color:#3e4e5a!important}.annotation-wrapper ::ng-deep .button .text{padding:0!important}.annotation-wrapper ::ng-deep .select{color:#3e4e5a!important}@media (max-width:1037px){::ng-deep .panzoom{-webkit-box-pack:unset!important;justify-content:unset!important}::ng-deep .logo ::ng-deep .icon{font-size:24px!important}::ng-deep .top-panel{height:120px!important}}"]
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
    { type: WindowService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2Fubm90YXRpb24vIiwic291cmNlcyI6WyJsaWIvYW5ub3RhdGlvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLFlBQVksRUFDWixlQUFlLEVBQ0osVUFBVSxFQUNyQiw4QkFBOEIsRUFDOUIsWUFBWSxFQUNaLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQ3BELHNCQUFzQixFQUFFLGtCQUFrQixFQUMxQyxLQUFLLEVBQ0wsYUFBYSxFQUNkLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUNMLGNBQWMsRUFFZCxRQUFRLEVBR3dELFNBQVMsRUFDMUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7TUFFaEUsQ0FBQyxHQUFHLE1BQU07QUFPaEIsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7Ozs7Ozs7Ozs7OztJQW9EakMsWUFBb0Isa0JBQXFDLEVBQ3JDLGFBQTJCLEVBQzNCLGdCQUFpQyxFQUNqQyxvQkFBNEMsRUFDNUMseUJBQXlELEVBQ3pELDJCQUF1RCxFQUN2RCx3QkFBaUQsRUFDakQsd0JBQWlELEVB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QW9CLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQzs7O1lBcmZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qix1Z0tBQThDOzthQUUvQzs7OztZQWpDTyxpQkFBaUI7WUFPdkIsWUFBWTtZQUNaLGVBQWU7WUFDZixzQkFBc0I7WUFIdEIsOEJBQThCO1lBSjlCLDBCQUEwQjtZQW9CcEIsdUJBQXVCO1lBRXZCLHVCQUF1QjtZQUN2Qix3QkFBd0I7WUFoQk4sa0JBQWtCO1lBRHpCLGtCQUFrQjtZQUFFLGVBQWU7WUFHcEQsYUFBYTs7OztJQXdCYix1Q0FBcUI7O0lBQ3JCLHVDQUF3Qjs7SUFDeEIsc0NBQWdDOztJQUNoQywyQ0FBbUI7O0lBQ25CLGtEQUFtQzs7SUFDbkMsa0RBQTRDOztJQUM1QyxnREFBNEI7O0lBQzVCLDZDQUE2Qjs7SUFDN0IsaURBYUU7O0lBQ0YsMkNBQW1COztJQUNuQixxREFNRTs7SUFDRixzREFNRTs7SUFDRixxREFHRTs7SUFDRiw0Q0FBZTs7SUFDZixpREFBd0I7O0lBQ3hCLDBDQUF3Qzs7Ozs7SUFFeEMscURBQW9DOzs7OztJQUNwQyxnREFBK0I7Ozs7O0lBQy9CLDZDQUEyRDs7Ozs7SUFDM0Qsc0RBQXFDOzs7OztJQUNyQyxvREFBbUM7Ozs7O0lBRXZCLG9EQUE2Qzs7Ozs7SUFDN0MsK0NBQW1DOzs7OztJQUNuQyxrREFBeUM7Ozs7O0lBQ3pDLHNEQUFvRDs7Ozs7SUFDcEQsMkRBQWlFOzs7OztJQUNqRSw2REFBK0Q7Ozs7O0lBQy9ELDBEQUF5RDs7Ozs7SUFDekQsMERBQXlEOzs7OztJQUN6RCwyREFBMkQ7Ozs7O0lBSTNELGdEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRSZWYsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Fubm90YXRpb25Db25maWd9IGZyb20gXCIuL2Fubm90YXRpb24tY29uZmlnXCI7XG5pbXBvcnQge0Fubm90YXRpb25TZXJ2aWNlfSBmcm9tIFwiLi9hbm5vdGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7XG4gIEFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICBDb21tb25Nb2RhbHMsXG4gIEZpbGVDcmVkZW50aWFscyxcbiAgRmlsZU1vZGVsLCBGb3JtYXR0aW5nLFxuICBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gIE1vZGFsU2VydmljZSxcbiAgTmF2aWdhdGVTZXJ2aWNlLCBQYWdlUHJlbG9hZFNlcnZpY2UsIFBhc3N3b3JkU2VydmljZSxcbiAgVG9wVGFiQWN0aXZhdG9yU2VydmljZSwgVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICBVdGlscyxcbiAgV2luZG93U2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge1xuICBBbm5vdGF0aW9uVHlwZSxcbiAgQ29tbWVudEFubm90YXRpb24sXG4gIFBvc2l0aW9uLFxuICBSZW1vdmVBbm5vdGF0aW9uLFxuICBDb21tZW50LFxuICBGaWxlQW5ub3RhdGlvbkRlc2NyaXB0aW9uLCBQYWdlQW5ub3RhdGlvbk1vZGVsLCBBbm5vdGF0aW9uRGF0YSwgRGltZW5zaW9uXG59IGZyb20gXCIuL2Fubm90YXRpb24tbW9kZWxzXCI7XG5pbXBvcnQge0Fubm90YXRpb25Db21wb25lbnR9IGZyb20gXCIuL2Fubm90YXRpb24vYW5ub3RhdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7QWN0aXZlQW5ub3RhdGlvblNlcnZpY2V9IGZyb20gXCIuL2FjdGl2ZS1hbm5vdGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHtSZW1vdmVBbm5vdGF0aW9uU2VydmljZX0gZnJvbSBcIi4vcmVtb3ZlLWFubm90YXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHtDb21tZW50QW5ub3RhdGlvblNlcnZpY2V9IGZyb20gXCIuL2NvbW1lbnQtYW5ub3RhdGlvbi5zZXJ2aWNlXCI7XG5cbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWFubm90YXRpb24tYXBwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fubm90YXRpb24tYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYW5ub3RhdGlvbi1hcHAuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGl0bGUgPSAnYW5ub3RhdGlvbic7XG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xuICBmaWxlOiBGaWxlQW5ub3RhdGlvbkRlc2NyaXB0aW9uO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIGFubm90YXRpb25Db25maWc6IEFubm90YXRpb25Db25maWc7XG4gIGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XG4gIGZvcm1hdERpc2FibGVkID0gIXRoaXMuZmlsZTtcbiAgY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscztcbiAgYW5ub3RhdGlvblR5cGVzID0gW1xuICAgIEFubm90YXRpb25UeXBlLlRFWFQsXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9TVFJJS0VPVVQsXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9VTkRFUkxJTkUsXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9SRVBMQUNFTUVOVCxcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhUX1JFREFDVElPTixcbiAgICBBbm5vdGF0aW9uVHlwZS5QT0xZTElORSxcbiAgICBBbm5vdGF0aW9uVHlwZS5BUlJPVyxcbiAgICBBbm5vdGF0aW9uVHlwZS5ESVNUQU5DRSxcbiAgICBBbm5vdGF0aW9uVHlwZS5BUkVBLFxuICAgIEFubm90YXRpb25UeXBlLlRFWFRfRklFTEQsXG4gICAgQW5ub3RhdGlvblR5cGUuV0FURVJNQVJLLFxuICAgIEFubm90YXRpb25UeXBlLlBPSU5ULFxuICBdO1xuICBpc0Rlc2t0b3A6IGJvb2xlYW47XG4gIGFubm90YXRpb25UeXBlRmlyc3QgPSBbXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVCxcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhUX1VOREVSTElORSxcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhUX1JFREFDVElPTixcbiAgICBBbm5vdGF0aW9uVHlwZS5URVhUX1JFUExBQ0VNRU5ULFxuICAgIEFubm90YXRpb25UeXBlLlRFWFRfU1RSSUtFT1VULFxuICBdO1xuICBhbm5vdGF0aW9uVHlwZVNlY29uZCA9IFtcbiAgICBBbm5vdGF0aW9uVHlwZS5QT0xZTElORSxcbiAgICBBbm5vdGF0aW9uVHlwZS5BUlJPVyxcbiAgICBBbm5vdGF0aW9uVHlwZS5ESVNUQU5DRSxcbiAgICBBbm5vdGF0aW9uVHlwZS5BUkVBLFxuICAgIEFubm90YXRpb25UeXBlLlBPSU5UXG4gIF07XG4gIGFubm90YXRpb25UeXBlVGhpcmQgPSBbXG4gICAgQW5ub3RhdGlvblR5cGUuVEVYVF9GSUVMRCxcbiAgICBBbm5vdGF0aW9uVHlwZS5XQVRFUk1BUkssXG4gIF07XG4gIGNvdW50UGFnZXMgPSAwO1xuICBjb21tZW50T3BlbmVkSWQ6IG51bWJlcjtcbiAgY29tbWVudHMgPSBuZXcgTWFwPG51bWJlciwgQ29tbWVudFtdPigpO1xuXG4gIHByaXZhdGUgYWN0aXZlQW5ub3RhdGlvblRhYjogc3RyaW5nO1xuICBwcml2YXRlIGZpbGVXYXNEcm9wcGVkID0gZmFsc2U7XG4gIHByaXZhdGUgYW5ub3RhdGlvbnMgPSBuZXcgTWFwPG51bWJlciwgQ29tcG9uZW50UmVmPGFueT4+KCk7XG4gIHByaXZhdGUgY3JlYXRpbmdBbm5vdGF0aW9uSWQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBhY3RpdmVBbm5vdGF0aW9uSWQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hbm5vdGF0aW9uU2VydmljZTogQW5ub3RhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdGFiQWN0aXZhdG9yU2VydmljZTogVG9wVGFiQWN0aXZhdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfaG9zdGluZ0NvbXBvbmVudHNTZXJ2aWNlOiBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2FkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlOiBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYWN0aXZlQW5ub3RhdGlvblNlcnZpY2U6IEFjdGl2ZUFubm90YXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW1vdmVBbm5vdGF0aW9uU2VydmljZTogUmVtb3ZlQW5ub3RhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NvbW1lbnRBbm5vdGF0aW9uU2VydmljZTogQ29tbWVudEFubm90YXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICB1cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcbiAgICAgICAgICAgICAgcGFnZVByZWxvYWRTZXJ2aWNlOiBQYWdlUHJlbG9hZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHBhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLl9hY3RpdmVBbm5vdGF0aW9uU2VydmljZS5hY3RpdmVDaGFuZ2Uuc3Vic2NyaWJlKChpZDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVBbm5vdGF0aW9uSWQgIT09IGlkKSB7XG4gICAgICAgIHRoaXMuY29tbWVudE9wZW5lZElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY3RpdmVBbm5vdGF0aW9uSWQgPSBpZDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX2NvbW1lbnRBbm5vdGF0aW9uU2VydmljZS5jb21tZW50QW5ub3RhdGlvbi5zdWJzY3JpYmUoKGNvbW1lbnRBbm5vdGF0aW9uOiBDb21tZW50QW5ub3RhdGlvbikgPT4ge1xuICAgICAgdGhpcy5jb21tZW50T3BlbmVkSWQgPSBjb21tZW50QW5ub3RhdGlvbi5pZDtcbiAgICAgIGlmICghdGhpcy5jb21tZW50cy5nZXQodGhpcy5jb21tZW50T3BlbmVkSWQpKSB7XG4gICAgICAgIHRoaXMuY29tbWVudHMuc2V0KHRoaXMuY29tbWVudE9wZW5lZElkLCBbXSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jb21tZW50QW5ub3RhdGlvblNlcnZpY2UuYWRkQ29tbWVudE9ic2VydmUuc3Vic2NyaWJlKChjb21tZW50OiBDb21tZW50KSA9PiB7XG4gICAgICB0aGlzLmNvbW1lbnRzLmdldCh0aGlzLmNvbW1lbnRPcGVuZWRJZCkucHVzaChjb21tZW50KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3JlbW92ZUFubm90YXRpb25TZXJ2aWNlLnJlbW92ZUFubm90YXRpb24uc3Vic2NyaWJlKChyZW1vdmVBbm5vdGF0aW9uOiBSZW1vdmVBbm5vdGF0aW9uKSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmFubm90YXRpb25zLmdldChyZW1vdmVBbm5vdGF0aW9uLmlkKTtcbiAgICAgIGlmIChjb21wb25lbnRSZWYpIHtcbiAgICAgICAgY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYW5ub3RhdGlvbnMuZGVsZXRlKHJlbW92ZUFubm90YXRpb24uaWQpO1xuICAgIH0pO1xuXG4gICAgdXBsb2FkRmlsZXNTZXJ2aWNlLnVwbG9hZHNDaGFuZ2Uuc3Vic2NyaWJlKCh1cGxvYWRzKSA9PiB7XG4gICAgICBpZiAodXBsb2Fkcykge1xuICAgICAgICBsZXQgaTogbnVtYmVyO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXBsb2Fkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuX2Fubm90YXRpb25TZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oaSksICcnLCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPyB0aGlzLnNlbGVjdEZpbGUob2JqLmd1aWQsICcnLCAnJykgOiB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhZ2VQcmVsb2FkU2VydmljZS5jaGVja1ByZWxvYWQuc3Vic2NyaWJlKChwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLnByZWxvYWRQYWdlQ291bnRDb25maWcgIT09IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHBhZ2U7IGkgPCBwYWdlICsgMjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGkgPiAwICYmIGkgPD0gdGhpcy5jb3VudFBhZ2VzICYmICF0aGlzLmZpbGUucGFnZXNbaSAtIDFdLmRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKGksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGFzc3dvcmRTZXJ2aWNlLnBhc3NDaGFuZ2Uuc3Vic2NyaWJlKChwYXNzOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLmNyZWRlbnRpYWxzLmd1aWQsIHBhc3MsIENvbW1vbk1vZGFscy5QYXNzd29yZFJlcXVpcmVkKTtcbiAgICB9KTtcblxuICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgX3dpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XG4gICAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q29tbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tbWVudHMuZ2V0KHRoaXMuY29tbWVudE9wZW5lZElkKTtcbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcucmV3cml0ZSA6IHRydWU7XG4gIH1cblxuICBnZXQgem9vbUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnpvb20gOiBmYWxzZTtcbiAgfVxuXG4gIGdldCBwYWdlU2VsZWN0b3JDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5wYWdlU2VsZWN0b3IgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHByZWxvYWRQYWdlQ291bnRDb25maWcoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgOiAwO1xuICB9XG5cbiAgZ2V0IGRvd25sb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcuZG93bmxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGRvd25sb2FkT3JpZ2luYWxDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5kb3dubG9hZE9yaWdpbmFsIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBkb3dubG9hZEFubm90YXRlZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLmRvd25sb2FkQW5ub3RhdGVkIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB1cGxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy51cGxvYWQgOiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWZhdWx0RG9jdW1lbnRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5kZWZhdWx0RG9jdW1lbnQgOiBcIlwiO1xuICB9XG5cbiAgZ2V0IHByaW50Q29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcucHJpbnQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLmJyb3dzZSA6IHRydWU7XG4gIH1cblxuICBnZXQgaHRtbE1vZGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0IGVuYWJsZVJpZ2h0Q2xpY2tDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5lbmFibGVSaWdodENsaWNrIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB0ZXh0QW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnRleHRBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBhcmVhQW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLmFyZWFBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBwb2ludEFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5wb2ludEFubm90YXRpb24gOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHRleHRTdHJpa2VvdXRBbm5vdGF0aW9uQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcudGV4dFN0cmlrZW91dEFubm90YXRpb24gOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHBvbHlsaW5lQW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnBvbHlsaW5lQW5ub3RhdGlvbiA6IHRydWU7XG4gIH1cblxuICBnZXQgdGV4dEZpZWxkQW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnRleHRGaWVsZEFubm90YXRpb24gOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHdhdGVybWFya0Fubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy53YXRlcm1hcmtBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB0ZXh0UmVwbGFjZW1lbnRBbm5vdGF0aW9uQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcudGV4dFJlcGxhY2VtZW50QW5ub3RhdGlvbiA6IHRydWU7XG4gIH1cblxuICBnZXQgYXJyb3dBbm5vdGF0aW9uQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFubm90YXRpb25Db25maWcgPyB0aGlzLmFubm90YXRpb25Db25maWcuYXJyb3dBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB0ZXh0UmVkYWN0aW9uQW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnRleHRSZWRhY3Rpb25Bbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB0ZXh0VW5kZXJsaW5lQW5ub3RhdGlvbkNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9uQ29uZmlnID8gdGhpcy5hbm5vdGF0aW9uQ29uZmlnLnRleHRVbmRlcmxpbmVBbm5vdGF0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBkaXN0YW5jZUFubm90YXRpb25Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbkNvbmZpZyA/IHRoaXMuYW5ub3RhdGlvbkNvbmZpZy5kaXN0YW5jZUFubm90YXRpb24gOiB0cnVlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKGlkKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShpZCk7XG4gIH1cblxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hbm5vdGF0aW9uU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBGaWxlTW9kZWxbXSkgPT4gdGhpcy5maWxlcyA9IGZpbGVzIHx8IFtdKTtcbiAgfVxuXG4gIHNlbGVjdEZpbGUoJGV2ZW50OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG1vZGFsSWQ6IHN0cmluZykge1xuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBuZXcgRmlsZUNyZWRlbnRpYWxzKCRldmVudCwgcGFzc3dvcmQpO1xuICAgIHRoaXMuZmlsZSA9IG51bGw7XG4gICAgdGhpcy5fYW5ub3RhdGlvblNlcnZpY2UubG9hZEZpbGUodGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKChmaWxlOiBGaWxlQW5ub3RhdGlvbkRlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuY2xlYW5Bbm5vdGF0aW9ucygpO1xuICAgICAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgICAgICB0aGlzLmZvcm1hdERpc2FibGVkID0gIXRoaXMuZmlsZTtcbiAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICBjb25zdCBwcmVsb2FkUGFnZUNvdW50ID0gdGhpcy5wcmVsb2FkUGFnZUNvdW50Q29uZmlnO1xuICAgICAgICAgIGNvbnN0IGNvdW50UGFnZXMgPSBmaWxlLnBhZ2VzID8gZmlsZS5wYWdlcy5sZW5ndGggOiAwO1xuICAgICAgICAgIGlmIChwcmVsb2FkUGFnZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5wcmVsb2FkUGFnZXMoMSwgcHJlbG9hZFBhZ2VDb3VudCA+IGNvdW50UGFnZXMgPyBjb3VudFBhZ2VzIDogcHJlbG9hZFBhZ2VDb3VudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbXBvcnRBbm5vdGF0aW9ucyhwYWdlLmFubm90YXRpb25zID8gcGFnZS5hbm5vdGF0aW9ucyA6IFtdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xuICAgICAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9IDE7XG4gICAgICAgICAgdGhpcy5jb3VudFBhZ2VzID0gY291bnRQYWdlcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gICAgaWYgKG1vZGFsSWQpIHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShtb2RhbElkKTtcbiAgICB9XG4gICAgdGhpcy5jbGVhckRhdGEoKTtcbiAgfVxuXG4gIHByZWxvYWRQYWdlcyhzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgdGhpcy5fYW5ub3RhdGlvblNlcnZpY2UubG9hZFBhZ2UodGhpcy5jcmVkZW50aWFscywgaSkuc3Vic2NyaWJlKChwYWdlOiBQYWdlQW5ub3RhdGlvbk1vZGVsKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZS5wYWdlc1tpIC0gMV0gPSBwYWdlO1xuICAgICAgICB0aGlzLmltcG9ydEFubm90YXRpb25zKHBhZ2UuYW5ub3RhdGlvbnMgPyBwYWdlLmFubm90YXRpb25zIDogW10pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbXBvcnRBbm5vdGF0aW9ucyhhbm5vdGF0aW9uczogQW5ub3RhdGlvbkRhdGFbXSkge1xuICAgIGZvciAoY29uc3QgYW5ub3RhdGlvbiBvZiBhbm5vdGF0aW9ucykge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24oYW5ub3RhdGlvbi5sZWZ0LCBhbm5vdGF0aW9uLnRvcCk7XG4gICAgICBjb25zdCBpZCA9IHRoaXMuYWRkQW5ub3RhdGlvbkNvbXBvbmVudChhbm5vdGF0aW9uLnBhZ2VOdW1iZXIsIHBvc2l0aW9uLCBhbm5vdGF0aW9uKTtcbiAgICAgIHRoaXMuY29tbWVudHMuc2V0KGlkLCBhbm5vdGF0aW9uLmNvbW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hbm5vdGF0aW9uU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgfSk7XG4gIH1cblxuICBvblJpZ2h0Q2xpY2soJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuZW5hYmxlUmlnaHRDbGlja0NvbmZpZztcbiAgfVxuXG4gIGRvd25sb2FkRmlsZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHRoaXMuX2Fubm90YXRpb25TZXJ2aWNlLmdldERvd25sb2FkVXJsKHRoaXMuY3JlZGVudGlhbHMpKTtcbiAgfVxuXG4gIGFubm90YXRlKCkge1xuICAgIGNvbnN0IGFubm90YXRpb25zRGF0YSA9IFtdO1xuICAgIGZvciAoY29uc3QgYW5ub3RhdGlvbiBvZiB0aGlzLmFubm90YXRpb25zLnZhbHVlcygpKSB7XG4gICAgICBjb25zdCBhbm5vdGF0aW9uRGF0YSA9ICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uLmluc3RhbmNlKS5nZXRBbm5vdGF0aW9uRGF0YSgpO1xuICAgICAgYW5ub3RhdGlvbkRhdGEuY29tbWVudHMgPSB0aGlzLmNvbW1lbnRzLmdldChhbm5vdGF0aW9uRGF0YS5pZCk7XG4gICAgICBhbm5vdGF0aW9uc0RhdGEucHVzaChhbm5vdGF0aW9uRGF0YSk7XG4gICAgfVxuICAgIHRoaXMuX2Fubm90YXRpb25TZXJ2aWNlLmFubm90YXRlKHRoaXMuY3JlZGVudGlhbHMsIGFubm90YXRpb25zRGF0YSwgZmFsc2UpLnN1YnNjcmliZSgocmV0OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5PcGVyYXRpb25TdWNjZXNzKTtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZShyZXQuZ3VpZCwgbnVsbCwgQ29tbW9uTW9kYWxzLk9wZXJhdGlvblN1Y2Nlc3MpO1xuICAgIH0pO1xuICB9XG5cbiAgaXNWaXNpYmxlKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdXBwb3J0ZWQgPSAhdGhpcy5maWxlIHx8ICh0aGlzLmZpbGUgJiYgdGhpcy5maWxlLnN1cHBvcnRlZEFubm90YXRpb25zLmZpbmQoZnVuY3Rpb24gKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiBpZCA9PT0gdmFsdWU7XG4gICAgfSkpO1xuICAgIHJldHVybiB0aGlzLmdldEFubm90YXRpb25UeXBlQ29uZmlnKGlkKSAmJiBzdXBwb3J0ZWQ7XG4gIH1cblxuICBhY3RpdmVUYWIoJGV2ZW50KSB7XG4gICAgdGhpcy5hY3RpdmVBbm5vdGF0aW9uVGFiID0gJGV2ZW50O1xuICB9XG5cbiAgY29kZXNDb25maWdGaXJzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja0NvbmZpZyh0aGlzLmFubm90YXRpb25UeXBlRmlyc3QpO1xuICB9XG5cbiAgY29kZXNDb25maWdTZWNvbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tDb25maWcodGhpcy5hbm5vdGF0aW9uVHlwZVNlY29uZCk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQ29uZmlnKGFubm90YXRpb25MaXN0KSB7XG4gICAgZm9yIChjb25zdCBhbm5vdGF0aW9uVHlwZSBvZiBhbm5vdGF0aW9uTGlzdCkge1xuICAgICAgaWYgKHRoaXMuZ2V0QW5ub3RhdGlvblR5cGVDb25maWcoYW5ub3RhdGlvblR5cGUuaWQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb2Rlc0NvbmZpZ1RoaXJkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEFubm90YXRpb25UeXBlQ29uZmlnKEFubm90YXRpb25UeXBlLlRFWFRfRklFTEQuaWQpICYmIHRoaXMuZ2V0QW5ub3RhdGlvblR5cGVDb25maWcoQW5ub3RhdGlvblR5cGUuV0FURVJNQVJLLmlkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QW5ub3RhdGlvblR5cGVDb25maWcoaWQ6IHN0cmluZykge1xuICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVC5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dEFubm90YXRpb25Db25maWc7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLkFSRUEuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLmFyZWFBbm5vdGF0aW9uQ29uZmlnO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5QT0lOVC5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRBbm5vdGF0aW9uQ29uZmlnO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1NUUklLRU9VVC5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFN0cmlrZW91dEFubm90YXRpb25Db25maWc7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlBPTFlMSU5FLmlkOlxuICAgICAgICByZXR1cm4gdGhpcy5wb2x5bGluZUFubm90YXRpb25Db25maWc7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfRklFTEQuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLnRleHRGaWVsZEFubm90YXRpb25Db25maWc7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLldBVEVSTUFSSy5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMud2F0ZXJtYXJrQW5ub3RhdGlvbkNvbmZpZztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9SRVBMQUNFTUVOVC5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFJlcGxhY2VtZW50QW5ub3RhdGlvbkNvbmZpZztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuQVJST1cuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLmFycm93QW5ub3RhdGlvbkNvbmZpZztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9SRURBQ1RJT04uaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLnRleHRSZWRhY3Rpb25Bbm5vdGF0aW9uQ29uZmlnO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1VOREVSTElORS5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFVuZGVybGluZUFubm90YXRpb25Db25maWc7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLkRJU1RBTkNFLmlkOlxuICAgICAgICByZXR1cm4gdGhpcy5kaXN0YW5jZUFubm90YXRpb25Db25maWc7XG4gICAgfVxuICB9XG5cbiAgZmlsZURyb3BwZWQoJGV2ZW50KSB7XG4gICAgdGhpcy5maWxlV2FzRHJvcHBlZCA9ICRldmVudDtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5Bbm5vdGF0aW9ucygpIHtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFJlZiBvZiB0aGlzLmFubm90YXRpb25zLnZhbHVlcygpKSB7XG4gICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmFubm90YXRpb25zID0gbmV3IE1hcDxudW1iZXIsIENvbXBvbmVudFJlZjxhbnk+PigpO1xuICAgIHRoaXMuY29tbWVudHMgPSBuZXcgTWFwPG51bWJlciwgQ29tbWVudFtdPigpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckRhdGEoKSB7XG4gICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICBwYWdlLmRhdGEgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUFubm90YXRpb24oJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlQW5ub3RhdGlvblRhYikge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG5cbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG4gICAgICBjb25zdCBjdXJyZW50UGFnZSA9IGVsZW1lbnRzLmZpbmQoeCA9PiB4LmlkICYmIHguaWQuc3RhcnRzV2l0aChcInBhZ2UtXCIpKTtcbiAgICAgIGlmIChjdXJyZW50UGFnZSkge1xuICAgICAgICBjb25zdCBkb2N1bWVudFBhZ2UgPSAkKGN1cnJlbnRQYWdlKS5wYXJlbnQoKS5wYXJlbnQoKVswXTtcbiAgICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gdGhpcy5nZXRDdXJyZW50UG9zaXRpb24ocG9zaXRpb24sICQoZG9jdW1lbnRQYWdlKSk7XG4gICAgICAgIGNvbnN0IHBhZ2VJZCA9IGN1cnJlbnRQYWdlLmlkO1xuICAgICAgICBsZXQgcGFnZU51bWJlciA9IDE7XG4gICAgICAgIGlmIChwYWdlSWQpIHtcbiAgICAgICAgICBjb25zdCBzcGxpdCA9IHBhZ2VJZC5zcGxpdCgnLScpO1xuICAgICAgICAgIHBhZ2VOdW1iZXIgPSBzcGxpdC5sZW5ndGggPT09IDIgPyBwYXJzZUludChzcGxpdFsxXSwgMTApIDogcGFnZU51bWJlcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IHRoaXMuYWRkQW5ub3RhdGlvbkNvbXBvbmVudChwYWdlTnVtYmVyLCBjdXJyZW50UG9zaXRpb24sIG51bGwpO1xuICAgICAgICB0aGlzLl9hY3RpdmVBbm5vdGF0aW9uU2VydmljZS5jaGFuZ2VBY3RpdmUoaWQpO1xuICAgICAgICB0aGlzLmNyZWF0aW5nQW5ub3RhdGlvbklkID0gaWQ7XG4gICAgICAgIHRoaXMuX3RhYkFjdGl2YXRvclNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkQW5ub3RhdGlvbkNvbXBvbmVudChwYWdlTnVtYmVyOiBudW1iZXIsIGN1cnJlbnRQb3NpdGlvbjogUG9zaXRpb24sIGRhdGE6IEFubm90YXRpb25EYXRhKSB7XG4gICAgY29uc3QgZHluYW1pY0RpcmVjdGl2ZSA9IHRoaXMuX2hvc3RpbmdDb21wb25lbnRzU2VydmljZS5maW5kKHBhZ2VOdW1iZXIpO1xuICAgIGlmIChkeW5hbWljRGlyZWN0aXZlKSB7XG4gICAgICBjb25zdCB2aWV3Q29udGFpbmVyUmVmID0gZHluYW1pY0RpcmVjdGl2ZS52aWV3Q29udGFpbmVyUmVmO1xuICAgICAgY29uc3QgYW5ub3RhdGlvbkNvbXBvbmVudCA9IHRoaXMuX2FkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLmFkZER5bmFtaWNDb21wb25lbnQodmlld0NvbnRhaW5lclJlZiwgQW5ub3RhdGlvbkNvbXBvbmVudCk7XG4gICAgICBjb25zdCBpZCA9IHRoaXMuYW5ub3RhdGlvbnMuc2l6ZSArIDE7XG4gICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkuaWQgPSBpZDtcbiAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS5wb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbjtcbiAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS5wYWdlTnVtYmVyID0gcGFnZU51bWJlcjtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IG5ldyBEaW1lbnNpb24oZGF0YS53aWR0aCwgZGF0YS5oZWlnaHQpO1xuICAgICAgICBjb25zdCB0eXBlID0gQW5ub3RhdGlvblR5cGUuZ2V0QW5ub3RhdGlvblR5cGUoZGF0YS50eXBlKTtcbiAgICAgICAgY29uc3QgZm9ybWF0dGluZyA9IEZvcm1hdHRpbmcuZGVmYXVsdCgpO1xuICAgICAgICBmb3JtYXR0aW5nLmZvbnRTaXplID0gZGF0YS5mb250U2l6ZTtcbiAgICAgICAgaWYgKGRhdGEuZm9udENvbG9yKSB7XG4gICAgICAgICAgZm9ybWF0dGluZy5jb2xvciA9IFwiI1wiICsgZGF0YS5mb250Q29sb3IudG9TdHJpbmcoMTYpO1xuICAgICAgICB9XG4gICAgICAgIGZvcm1hdHRpbmcuZm9udCA9IGRhdGEuZm9udDtcbiAgICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnR5cGUgPSB0eXBlID8gdHlwZS5pZCA6IGRhdGEudHlwZTtcbiAgICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLmRpbWVuc2lvbiA9IGRpbWVuc2lvbjtcbiAgICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnN2Z1BhdGggPSBkYXRhLnN2Z1BhdGg7XG4gICAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS50ZXh0VmFsdWUgPSBkYXRhLnRleHQ7XG4gICAgICAgIGlmIChmb3JtYXR0aW5nKSB7XG4gICAgICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnNhdmVGb3JtYXR0aW5nKGZvcm1hdHRpbmcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkudHlwZSA9IHRoaXMuYWN0aXZlQW5ub3RhdGlvblRhYjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBhZ2VNb2RlbCA9IHRoaXMuZmlsZS5wYWdlcy5maW5kKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIHJldHVybiBwLm51bWJlciA9PT0gcGFnZU51bWJlcjtcbiAgICAgIH0pO1xuICAgICAgKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnBhZ2VXaWR0aCA9IHBhZ2VNb2RlbC53aWR0aDtcbiAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS5wYWdlSGVpZ2h0ID0gcGFnZU1vZGVsLmhlaWdodDtcbiAgICAgIHRoaXMuYW5ub3RhdGlvbnMuc2V0KGlkLCBhbm5vdGF0aW9uQ29tcG9uZW50KTtcbiAgICAgIHJldHVybiBpZDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXNpemluZ0NyZWF0aW5nQW5ub3RhdGlvbigkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5jcmVhdGluZ0Fubm90YXRpb25JZCkge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG4gICAgICBjb25zdCBhbm5vdGF0aW9uQ29tcG9uZW50ID0gdGhpcy5hbm5vdGF0aW9ucy5nZXQodGhpcy5jcmVhdGluZ0Fubm90YXRpb25JZCk7XG4gICAgICBjb25zdCB0eXBlID0gKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnR5cGU7XG4gICAgICBjb25zdCBwYWdlTnVtYmVyID0gKDxBbm5vdGF0aW9uQ29tcG9uZW50PmFubm90YXRpb25Db21wb25lbnQuaW5zdGFuY2UpLnBhZ2VOdW1iZXI7XG4gICAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLmdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiwgJChcIiNwYWdlLVwiICsgcGFnZU51bWJlcikpO1xuICAgICAgaWYgKHR5cGUgPT09IEFubm90YXRpb25UeXBlLlBPTFlMSU5FLmlkIHx8IHR5cGUgPT09IEFubm90YXRpb25UeXBlLkRJU1RBTkNFLmlkIHx8IHR5cGUgPT09IEFubm90YXRpb25UeXBlLkFSUk9XLmlkKSB7XG4gICAgICAgICg8QW5ub3RhdGlvbkNvbXBvbmVudD5hbm5vdGF0aW9uQ29tcG9uZW50Lmluc3RhbmNlKS5kcmF3KGN1cnJlbnRQb3NpdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoPEFubm90YXRpb25Db21wb25lbnQ+YW5ub3RhdGlvbkNvbXBvbmVudC5pbnN0YW5jZSkuY2FsY0RpbWVuc2lvbnMoY3VycmVudFBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiwgcGFnZSkge1xuICAgIGNvbnN0IGxlZnQgPSBwb3NpdGlvbi54IC0gcGFnZS5vZmZzZXQoKS5sZWZ0O1xuICAgIGNvbnN0IHRvcCA9IHBvc2l0aW9uLnkgLSBwYWdlLm9mZnNldCgpLnRvcDtcbiAgICByZXR1cm4gbmV3IFBvc2l0aW9uKGxlZnQsIHRvcCk7XG4gIH1cblxuICBmaW5pc2hDcmVhdGluZ0Fubm90YXRpb24oJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5jcmVhdGluZ0Fubm90YXRpb25JZCA9IG51bGw7XG4gIH1cblxuICBjbG9zZUNvbW1lbnRzKCkge1xuICAgIHRoaXMuY29tbWVudE9wZW5lZElkID0gbnVsbDtcbiAgfVxufVxuIl19