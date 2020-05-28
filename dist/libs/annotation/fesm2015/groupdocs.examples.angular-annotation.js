import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, EventEmitter, Input, Output, NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api, ConfigService, FileUtil, PageModel, Formatting, Utils, MenuType, CommonModals, FileCredentials, ModalService, NavigateService, TopTabActivatorService, HostingDynamicComponentService, AddDynamicComponentService, UploadFilesService, PagePreloadService, PasswordService, WindowService, LoadingMaskInterceptorService, CommonComponentsModule, ErrorInterceptorService, LoadingMaskService } from '@groupdocs.examples.angular/common-components';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClickOutsideModule } from 'ng-click-outside';
import * as jquery from 'jquery';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AnnotationConfig {
}
if (false) {
    /** @type {?} */
    AnnotationConfig.prototype.rewrite;
    /** @type {?} */
    AnnotationConfig.prototype.pageSelector;
    /** @type {?} */
    AnnotationConfig.prototype.download;
    /** @type {?} */
    AnnotationConfig.prototype.upload;
    /** @type {?} */
    AnnotationConfig.prototype.print;
    /** @type {?} */
    AnnotationConfig.prototype.browse;
    /** @type {?} */
    AnnotationConfig.prototype.enableRightClick;
    /** @type {?} */
    AnnotationConfig.prototype.filesDirectory;
    /** @type {?} */
    AnnotationConfig.prototype.fontsDirectory;
    /** @type {?} */
    AnnotationConfig.prototype.defaultDocument;
    /** @type {?} */
    AnnotationConfig.prototype.preloadPageCount;
    /** @type {?} */
    AnnotationConfig.prototype.textAnnotation;
    /** @type {?} */
    AnnotationConfig.prototype.areaAnnotation;
    /** @type {?} */
    AnnotationConfig.prototype.pointAnnotation;
    /** @type {?} */
    AnnotationConfig.prototype.textStrikeoutAnnotation;
    /** @type {?} */
    AnnotationConfig.prototype.polylineAnnotation;
    /** @type {?} */
    AnnotationConfig.prototype.textFieldAnnotation;
    /** @type {?} */
    AnnotationConfig.prototype.watermarkAnnotation;
    /** @type {?} */
    AnnotationConfig.prototype.textReplacementAnnotation;
    /** @type {?} */
    AnnotationConfig.prototype.arrowAnnotation;
    /** @type {?} */
    AnnotationConfig.prototype.textRedactionAnnotation;
    /** @type {?} */
    AnnotationConfig.prototype.textUnderlineAnnotation;
    /** @type {?} */
    AnnotationConfig.prototype.distanceAnnotation;
    /** @type {?} */
    AnnotationConfig.prototype.downloadOriginal;
    /** @type {?} */
    AnnotationConfig.prototype.downloadAnnotated;
    /** @type {?} */
    AnnotationConfig.prototype.zoom;
    /** @type {?} */
    AnnotationConfig.prototype.fitWidth;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AnnotationConfigService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._annotationConfig = new BehaviorSubject(new AnnotationConfig());
        this._updatedConfig = this._annotationConfig.asObservable();
    }
    /**
     * @return {?}
     */
    get updatedConfig() {
        return this._updatedConfig;
    }
    /**
     * @return {?}
     */
    load() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const configEndpoint = this._config.getConfigEndpoint(Api.ANNOTATION_APP);
            this._http.get(configEndpoint, Api.httpOptionsJson).toPromise().then((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                /** @type {?} */
                const annotationConfig = (/** @type {?} */ (response));
                this._annotationConfig.next(annotationConfig);
                resolve();
            })).catch((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                reject(`Could not load annotation config: ${JSON.stringify(response)}`);
            }));
        }));
    }
}
AnnotationConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AnnotationConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ AnnotationConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AnnotationConfigService_Factory() { return new AnnotationConfigService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: AnnotationConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AnnotationConfigService.prototype._annotationConfig;
    /**
     * @type {?}
     * @private
     */
    AnnotationConfigService.prototype._updatedConfig;
    /**
     * @type {?}
     * @private
     */
    AnnotationConfigService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    AnnotationConfigService.prototype._config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AnnotationService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    loadFiles(path) {
        return this._http.post(this._config.getAnnotationApiEndpoint() + Api.LOAD_FILE_TREE, { 'path': path }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    loadFile(credentials) {
        return this._http.post(this._config.getAnnotationApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
    }
    /**
     * @param {?} file
     * @param {?} url
     * @param {?} rewrite
     * @return {?}
     */
    upload(file, url, rewrite) {
        /** @type {?} */
        const formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getAnnotationApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
    }
    /**
     * @param {?} credentials
     * @param {?} page
     * @return {?}
     */
    loadPage(credentials, page) {
        return this._http.post(this._config.getAnnotationApiEndpoint() + Api.LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'page': page
        }, Api.httpOptionsJson);
    }
    /**
     * @param {?} credentials
     * @return {?}
     */
    getDownloadUrl(credentials) {
        return this._config.getAnnotationApiEndpoint() + Api.DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
    }
    /**
     * @param {?} credentials
     * @param {?} annotationsData
     * @param {?} print
     * @return {?}
     */
    annotate(credentials, annotationsData, print) {
        /** @type {?} */
        const data = {
            'guid': credentials.guid,
            'password': credentials.password,
            'annotationsData': annotationsData,
            'documentType': FileUtil.find(credentials.guid, false).format,
            'print': print
        };
        return this._http.post(this._config.getAnnotationApiEndpoint() + Api.ANNOTATE, data, Api.httpOptionsJson);
    }
}
AnnotationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AnnotationService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ AnnotationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AnnotationService_Factory() { return new AnnotationService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: AnnotationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AnnotationService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    AnnotationService.prototype._config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AnnotationType {
    /**
     * @param {?} id
     * @return {?}
     */
    static getAnnotationType(id) {
        switch (id) {
            case AnnotationType.TEXT.id:
                return AnnotationType.TEXT;
            case AnnotationType.AREA.id:
                return AnnotationType.AREA;
            case AnnotationType.POINT.id:
                return AnnotationType.POINT;
            case AnnotationType.TEXT_STRIKEOUT.id:
                return AnnotationType.TEXT_STRIKEOUT;
            case AnnotationType.POLYLINE.id:
                return AnnotationType.POLYLINE;
            case AnnotationType.TEXT_FIELD.id:
                return AnnotationType.TEXT_FIELD;
            case AnnotationType.WATERMARK.id:
                return AnnotationType.WATERMARK;
            case AnnotationType.TEXT_REPLACEMENT.id:
                return AnnotationType.TEXT_REPLACEMENT;
            case AnnotationType.ARROW.id:
                return AnnotationType.ARROW;
            case AnnotationType.TEXT_REDACTION.id:
                return AnnotationType.TEXT_REDACTION;
            case AnnotationType.TEXT_UNDERLINE.id:
                return AnnotationType.TEXT_UNDERLINE;
            case AnnotationType.DISTANCE.id:
                return AnnotationType.DISTANCE;
        }
    }
}
AnnotationType.TEXT = { id: 'text', name: 'Text', icon: 'highlighter' };
AnnotationType.AREA = { id: 'area', name: 'Area', icon: 'vector-square' };
AnnotationType.POINT = { id: 'point', name: 'Point', icon: 'thumbtack' };
AnnotationType.TEXT_STRIKEOUT = { id: 'textStrikeout', name: 'Text strikeout', icon: 'strikethrough', };
AnnotationType.POLYLINE = { id: 'polyline', name: 'Polyline', icon: 'signature' };
AnnotationType.TEXT_FIELD = { id: 'textField', name: 'Text field', icon: 'i-cursor' };
AnnotationType.WATERMARK = { id: 'watermark', name: 'Watermark', icon: 'tint' };
AnnotationType.TEXT_REPLACEMENT = { id: 'textReplacement', name: 'Text replacement', icon: 'edit' };
AnnotationType.ARROW = { id: 'arrow', name: 'Arrow', icon: 'mouse-pointer' };
AnnotationType.TEXT_REDACTION = { id: 'textRedaction', name: 'Text redaction', icon: 'brush' };
AnnotationType.TEXT_UNDERLINE = { id: 'textUnderline', name: 'Text underline', icon: 'underline' };
AnnotationType.DISTANCE = { id: 'distance', name: 'Distance', icon: 'ruler' };
if (false) {
    /** @type {?} */
    AnnotationType.TEXT;
    /** @type {?} */
    AnnotationType.AREA;
    /** @type {?} */
    AnnotationType.POINT;
    /** @type {?} */
    AnnotationType.TEXT_STRIKEOUT;
    /** @type {?} */
    AnnotationType.POLYLINE;
    /** @type {?} */
    AnnotationType.TEXT_FIELD;
    /** @type {?} */
    AnnotationType.WATERMARK;
    /** @type {?} */
    AnnotationType.TEXT_REPLACEMENT;
    /** @type {?} */
    AnnotationType.ARROW;
    /** @type {?} */
    AnnotationType.TEXT_REDACTION;
    /** @type {?} */
    AnnotationType.TEXT_UNDERLINE;
    /** @type {?} */
    AnnotationType.DISTANCE;
}
class FileAnnotationDescription {
}
if (false) {
    /** @type {?} */
    FileAnnotationDescription.prototype.guid;
    /** @type {?} */
    FileAnnotationDescription.prototype.pages;
    /** @type {?} */
    FileAnnotationDescription.prototype.supportedAnnotations;
}
class PageAnnotationModel extends PageModel {
}
if (false) {
    /** @type {?} */
    PageAnnotationModel.prototype.annotations;
}
class Position {
    /**
     * @param {?} left
     * @param {?} top
     */
    constructor(left, top) {
        this.left = left;
        this.top = top;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    static clone(position) {
        return new Position(position.left, position.top);
    }
}
if (false) {
    /** @type {?} */
    Position.prototype.left;
    /** @type {?} */
    Position.prototype.top;
}
class Dimension {
    /**
     * @param {?} width
     * @param {?} height
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    /**
     * @return {?}
     */
    isNone() {
        return this.width === 0 && this.height === 0;
    }
}
if (false) {
    /** @type {?} */
    Dimension.prototype.width;
    /** @type {?} */
    Dimension.prototype.height;
}
class AnnotationData {
    constructor() {
        this.text = "";
        this.fontColor = 8421375;
    }
}
if (false) {
    /** @type {?} */
    AnnotationData.prototype.id;
    /** @type {?} */
    AnnotationData.prototype.comments;
    /** @type {?} */
    AnnotationData.prototype.text;
    /** @type {?} */
    AnnotationData.prototype.font;
    /** @type {?} */
    AnnotationData.prototype.fontSize;
    /** @type {?} */
    AnnotationData.prototype.fontColor;
    /** @type {?} */
    AnnotationData.prototype.height;
    /** @type {?} */
    AnnotationData.prototype.width;
    /** @type {?} */
    AnnotationData.prototype.left;
    /** @type {?} */
    AnnotationData.prototype.top;
    /** @type {?} */
    AnnotationData.prototype.pageNumber;
    /** @type {?} */
    AnnotationData.prototype.svgPath;
    /** @type {?} */
    AnnotationData.prototype.type;
}
class CommentAnnotation {
    /**
     * @param {?} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    CommentAnnotation.prototype.id;
}
class Comment {
    /**
     * @param {?} id
     */
    constructor(id) {
        this.id = id;
        this.time = Date.now();
        this.text = "";
        this.userName = "";
    }
    /**
     * @param {?} comment
     * @return {?}
     */
    static create(comment) {
        /** @type {?} */
        const ret = new Comment(comment.id);
        ret.text = comment.text;
        ret.userName = comment.userName;
        ret.time = comment.time;
        return ret;
    }
}
if (false) {
    /** @type {?} */
    Comment.prototype.id;
    /** @type {?} */
    Comment.prototype.text;
    /** @type {?} */
    Comment.prototype.userName;
    /** @type {?} */
    Comment.prototype.time;
}
class RemoveAnnotation {
    /**
     * @param {?} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    RemoveAnnotation.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ActiveAnnotationService {
    constructor() {
        this._observer = new Subject();
        this._activeChange = this._observer.asObservable();
    }
    /**
     * @return {?}
     */
    get activeChange() {
        return this._activeChange;
    }
    /**
     * @param {?} annId
     * @return {?}
     */
    changeActive(annId) {
        this._observer.next(annId);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActiveAnnotationService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    ActiveAnnotationService.prototype._activeChange;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RemoveAnnotationService {
    constructor() {
        this._observer = new Subject();
        this._removeAnnotation = this._observer.asObservable();
    }
    /**
     * @return {?}
     */
    get removeAnnotation() {
        return this._removeAnnotation;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    remove(id) {
        this._observer.next(id);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    RemoveAnnotationService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    RemoveAnnotationService.prototype._removeAnnotation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommentAnnotationService {
    constructor() {
        this._observer = new Subject();
        this._commentAnnotation = this._observer.asObservable();
        this._observerAddComment = new Subject();
        this._addCommentObserve = this._observerAddComment.asObservable();
    }
    /**
     * @return {?}
     */
    get commentAnnotation() {
        return this._commentAnnotation;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    comment(id) {
        this._observer.next(id);
    }
    /**
     * @return {?}
     */
    get addCommentObserve() {
        return this._addCommentObserve;
    }
    /**
     * @param {?} comment
     * @return {?}
     */
    addComment(comment) {
        this._observerAddComment.next(comment);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CommentAnnotationService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    CommentAnnotationService.prototype._commentAnnotation;
    /**
     * @type {?}
     * @private
     */
    CommentAnnotationService.prototype._observerAddComment;
    /**
     * @type {?}
     * @private
     */
    CommentAnnotationService.prototype._addCommentObserve;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const $ = jquery;
class AnnotationComponent {
    /**
     * @param {?} _activeAnnotationService
     * @param {?} _removeAnnotationService
     * @param {?} _commentAnnotationService
     */
    constructor(_activeAnnotationService, _removeAnnotationService, _commentAnnotationService) {
        this._activeAnnotationService = _activeAnnotationService;
        this._removeAnnotationService = _removeAnnotationService;
        this._commentAnnotationService = _commentAnnotationService;
        this.active = true;
        this.dimension = new Dimension(0, 0);
        this.textValue = "";
        this.distanceValue = '0px';
        this.pointsValue = "";
        this.svgPath = "";
        this.formatting = Formatting.default();
        this.points = [];
        this._activeAnnotationService.activeChange.subscribe((/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            this.active = this.id === id;
            if (this.active) {
                this.setTextFocus();
            }
        }));
    }
    /**
     * @param {?} position
     * @return {?}
     */
    static isOnPage(position) {
        /** @type {?} */
        const currentPage = document.elementFromPoint(position.x, position.y);
        return currentPage && $(currentPage).parent().parent() &&
            ($(currentPage).parent().parent().parent().hasClass("page") ||
                $(currentPage).parent().parent().parent().parent().parent().hasClass("page"));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.leftTop = Position.clone(this.position);
        if (this.isPolyline()) {
            if (this.svgPath) {
                /** @type {?} */
                const parsedPoints = this.svgPath.replace("M", "").split('L');
                /** @type {?} */
                let x = parseFloat(parsedPoints[0].split(",")[0]);
                /** @type {?} */
                let y = parseFloat(parsedPoints[0].split(",")[1]);
                /** @type {?} */
                const comp = this;
                parsedPoints.forEach((/**
                 * @param {?} point
                 * @param {?} index
                 * @return {?}
                 */
                function (point, index) {
                    if (index !== 0) {
                        if (point !== "") {
                            comp.addPoint(new Position(x, y));
                            x = (x + parseFloat(point.split(",")[0]));
                            y = (y + parseFloat(point.split(",")[1]));
                        }
                    }
                }));
            }
            else {
                this.addPoint(this.position);
            }
        }
        else if (this.isPath()) {
            if (this.svgPath || (this.type === AnnotationType.ARROW.id && !this.dimension.isNone())) {
                /** @type {?} */
                const end = new Position(this.position.left + this.dimension.width, this.position.top + this.dimension.height);
                this.setEndPosition(end);
                if (this.dimension.height < 0) {
                    this.leftTop.top += this.dimension.height;
                    this.dimension.height = this.dimension.height * (-1);
                }
                if (this.dimension.width < 0) {
                    this.leftTop.left += this.dimension.width;
                    this.dimension.width = this.dimension.width * (-1);
                }
            }
            else {
                this.setEndPosition(this.position);
            }
            this.distanceValue = this.getDistance() + "px";
        }
        else if (this.type === AnnotationType.POINT.id) {
            this.initPoint();
        }
        else {
            this.setEndPosition(this.position);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setTextFocus();
    }
    /**
     * @return {?}
     */
    activation() {
        this._activeAnnotationService.changeActive(this.id);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    width($event) {
        if (this.checkDragging($event, 0)) {
            this.dimension.width += $event;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    height($event) {
        if (this.checkDragging(0, $event)) {
            this.dimension.height += $event;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    left($event) {
        this.position.left += $event;
        this.correctPosition();
        this.refreshLeftTop();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    top($event) {
        this.position.top += $event;
        this.correctPosition();
        this.refreshLeftTop();
    }
    /**
     * @private
     * @return {?}
     */
    refreshLeftTop() {
        this.leftTop.left = this.position.left;
        this.leftTop.top = this.position.top;
    }
    /**
     * @private
     * @return {?}
     */
    correctPosition() {
        if (this.position.left < 0) {
            this.position.left = 0;
        }
        if (this.position.top < 0) {
            this.position.top = 0;
        }
        if (this.position.top + this.dimension.height > this.pageHeight) {
            this.position.top = this.pageHeight - this.dimension.height;
        }
        if (this.position.left + this.dimension.width > this.pageWidth) {
            this.position.left = this.pageWidth - this.dimension.width;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    dragOver($event) {
        $event.preventDefault();
        $event.stopPropagation();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    dragStart($event) {
        $event.preventDefault();
        this.oldPosition = Utils.getMousePosition($event);
        if ($event.dataTransfer) {
            $event.dataTransfer.setData('text', 'foo');
        }
    }
    /**
     * @return {?}
     */
    initPoint() {
        this.dimension = new Dimension(40, 40);
        this.position.left = this.position.left - 20;
        this.position.top = this.position.top - 20;
        this.leftTop = Position.clone(this.position);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    dragging($event) {
        $event.preventDefault();
        /** @type {?} */
        const position = Utils.getMousePosition($event);
        if (position.x && position.y && AnnotationComponent.isOnPage(position)) {
            /** @type {?} */
            const left = position.x - this.oldPosition.x;
            /** @type {?} */
            const top = position.y - this.oldPosition.y;
            if (this.isPolyline()) {
                if (!this.checkDragging(left, top)) {
                    return;
                }
                this.pointsValue = "";
                for (const point of this.points) {
                    point.left = point.left + left;
                    point.top = point.top + top;
                    this.pointsValue += point.left + "," + point.top + " ";
                }
                this.leftTop.left += left;
                this.leftTop.top += top;
            }
            else if (this.isPath()) {
                if (!this.checkDragging(left, top)) {
                    return;
                }
                this.position.left += left;
                this.position.top += top;
                this.endPosition.left += left;
                this.endPosition.top += top;
                this.pathValue = "M" + this.position.left + "," + this.position.top + " L" + this.endPosition.left + "," + this.endPosition.top;
                this.distanceValue = this.getDistance() + "px";
                this.leftTop.left += left;
                this.leftTop.top += top;
            }
            else {
                this.position.left += left;
                this.position.top += top;
                this.correctPosition();
                this.refreshLeftTop();
            }
            this.oldPosition = position;
        }
    }
    /**
     * @return {?}
     */
    getAnnotationClass() {
        switch (this.type) {
            case AnnotationType.TEXT.id:
                return "gd-annotation-wrapper-border gd-text-annotation";
            case AnnotationType.TEXT_STRIKEOUT.id:
                return "gd-annotation-wrapper-border gd-text-annotation gd-text-strikeout-annotation";
            case AnnotationType.TEXT_UNDERLINE.id:
                return "gd-annotation-wrapper-border gd-text-annotation gd-text-underline-annotation";
            case AnnotationType.TEXT_REDACTION.id:
                return "gd-annotation-wrapper-border gd-text-redaction-annotation";
            case AnnotationType.TEXT_REPLACEMENT.id:
                return "gd-annotation-wrapper-border gd-text-replacement-annotation";
            case AnnotationType.POINT.id:
                return "";
            default:
                return "gd-annotation-wrapper-border";
        }
    }
    /**
     * @return {?}
     */
    isStrikeoutOrUnderline() {
        return this.type === AnnotationType.TEXT_STRIKEOUT.id || this.type === AnnotationType.TEXT_UNDERLINE.id;
    }
    /**
     * @return {?}
     */
    isTextReplacement() {
        return this.type === AnnotationType.TEXT_REPLACEMENT.id;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    saveText(value) {
        this.textValue = value;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    draw(position) {
        if (this.onPage(position)) {
            if (this.isPolyline()) {
                this.addPoint(position);
            }
            else if (this.isPath()) {
                this.setEndPosition(position);
                this.distanceValue = this.getDistance() + "px";
            }
            this.calcPositionAndDimension();
        }
    }
    /**
     * @return {?}
     */
    setStyles() {
        return {
            'stroke': '#579AF0',
            'stroke-width': 2,
            'fill-opacity': 0,
            'id': (this.isPolyline() ? 'gd-polyline-annotation-' : (this.isDistance() ? 'gd-distance-annotation-' : 'gd-arrow-annotation-')) + this.id,
            'class': 'annotation-svg',
        };
    }
    /**
     * @return {?}
     */
    isPolyline() {
        return this.type === AnnotationType.POLYLINE.id;
    }
    /**
     * @private
     * @return {?}
     */
    calcPositionAndDimension() {
        /** @type {?} */
        const leftTop = new Position(Number.MAX_VALUE, Number.MAX_VALUE);
        /** @type {?} */
        const rightBottom = new Position(Number.MIN_VALUE, Number.MIN_VALUE);
        if (this.isPolyline()) {
            for (const point of this.points) {
                leftTop.left = Math.min(point.left, leftTop.left);
                leftTop.top = Math.min(point.top, leftTop.top);
                rightBottom.left = Math.max(point.left, rightBottom.left);
                rightBottom.top = Math.max(point.top, rightBottom.top);
            }
        }
        else {
            leftTop.left = Math.min(this.position.left, this.endPosition.left);
            leftTop.top = Math.min(this.position.top, this.endPosition.top);
            rightBottom.left = Math.max(this.position.left, this.endPosition.left);
            rightBottom.top = Math.max(this.position.top, this.endPosition.top);
        }
        this.dimension.width = rightBottom.left - leftTop.left;
        this.dimension.height = rightBottom.top - leftTop.top;
        this.leftTop = leftTop;
    }
    /**
     * @param {?} currentPosition
     * @return {?}
     */
    calcDimensions(currentPosition) {
        if (currentPosition.left <= this.pageWidth && currentPosition.left >= 0) {
            this.dimension.width = currentPosition.left - this.position.left;
        }
        if (currentPosition.top <= this.pageHeight && currentPosition.top >= 0) {
            this.dimension.height = currentPosition.top - this.position.top;
        }
    }
    /**
     * @return {?}
     */
    getHeight() {
        return this.dimension.height === undefined ? undefined : Math.abs(this.dimension.height);
    }
    /**
     * @return {?}
     */
    getWidth() {
        return this.dimension.width === undefined ? undefined : Math.abs(this.dimension.width);
    }
    /**
     * @private
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    checkDragging(left, top) {
        return !(this.leftTop.left + left < 0 || this.leftTop.top + top < 0 ||
            this.leftTop.top + top + this.dimension.height > this.pageHeight ||
            this.leftTop.left + left + this.dimension.width > this.pageWidth);
    }
    /**
     * @return {?}
     */
    isPoint() {
        return this.type === AnnotationType.POINT.id;
    }
    /**
     * @return {?}
     */
    isSVG() {
        return this.type === AnnotationType.POLYLINE.id ||
            this.type === AnnotationType.DISTANCE.id ||
            this.type === AnnotationType.ARROW.id;
    }
    /**
     * @return {?}
     */
    isDistance() {
        return this.type === AnnotationType.DISTANCE.id;
    }
    /**
     * @return {?}
     */
    distanceTextOptions() {
        return { 'font-size': "12px" };
    }
    /**
     * @return {?}
     */
    isPath() {
        return this.type === AnnotationType.DISTANCE.id ||
            this.type === AnnotationType.ARROW.id;
    }
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    setEndPosition(position) {
        this.endPosition = Position.clone(position);
        this.pathValue = "M" + this.position.left + "," + this.position.top + " L" + this.endPosition.left + "," + this.endPosition.top;
    }
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    addPoint(position) {
        this.points.push(position);
        this.pointsValue += position.left + "," + position.top + " ";
    }
    /**
     * @private
     * @return {?}
     */
    getDistance() {
        /** @type {?} */
        const xs = this.position.left - this.endPosition.left;
        /** @type {?} */
        const ys = this.position.top - this.endPosition.top;
        return Math.round(Math.sqrt(xs * xs + ys * ys));
    }
    /**
     * @return {?}
     */
    bottom() {
        return 'url(' + window.location + '#end)';
    }
    /**
     * @return {?}
     */
    head() {
        return this.isDistance() ? 'url(' + window.location + '#start)' : "";
    }
    /**
     * @return {?}
     */
    getTextX() {
        return this.getDistance() / 2;
    }
    /**
     * @return {?}
     */
    isText() {
        return this.type === AnnotationType.TEXT_FIELD.id || this.type === AnnotationType.WATERMARK.id;
    }
    /**
     * @return {?}
     */
    getFormatting() {
        /** @type {?} */
        const f = this.formatting;
        /** @type {?} */
        const formatting = Formatting.default();
        if (f) {
            formatting.fontSize = f.fontSize;
            formatting.font = f.font;
            formatting.color = f.color;
        }
        return formatting;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    saveFormatting($event) {
        this.formatting.fontSize = $event.fontSize;
        this.formatting.font = $event.font;
        this.formatting.color = $event.color;
    }
    /**
     * @return {?}
     */
    remove() {
        this._removeAnnotationService.remove(new RemoveAnnotation(this.id));
    }
    /**
     * @return {?}
     */
    getMenuShift() {
        /** @type {?} */
        const menuWidth = this.isText() ? 265 : 111;
        return this.dimension.width > menuWidth ? 0 : (this.dimension.width - menuWidth) * 0.5;
    }
    /**
     * @return {?}
     */
    getMenuType() {
        return MenuType.FOR_ANNOTATION;
    }
    /**
     * @return {?}
     */
    addComment() {
        this._commentAnnotationService.comment(new CommentAnnotation(this.id));
    }
    /**
     * @private
     * @return {?}
     */
    setTextFocus() {
        if (this.isText() || this.isTextReplacement()) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const element = $("#text-" + this.id);
                if (element) {
                    element.focus();
                }
            }), 100);
        }
    }
    /**
     * @param {?} key
     * @param {?} textarea
     * @return {?}
     */
    textAreaHeight(key, textarea) {
        this.dimension.height = "Enter" === key ? textarea.scrollHeight + this.formatting.fontSize : textarea.scrollHeight;
        this.dimension.width = textarea.scrollWidth;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    hideMenu($event) {
        this._activeAnnotationService.changeActive(null);
    }
    /**
     * @return {?}
     */
    getAnnotationData() {
        /** @type {?} */
        const annotationData = new AnnotationData();
        annotationData.id = this.id;
        annotationData.text = this.textValue;
        annotationData.fontColor = parseInt(Utils.toHex(this.formatting.color).replace("#", ""), 16);
        annotationData.fontSize = this.formatting.fontSize;
        annotationData.font = this.formatting.font;
        if (this.type === AnnotationType.POINT.id) {
            annotationData.left = this.leftTop.left + 20;
            annotationData.top = this.leftTop.top + 20;
            annotationData.height = 0;
            annotationData.width = 0;
        }
        else {
            annotationData.left = this.leftTop.left;
            annotationData.top = this.leftTop.top;
            annotationData.height = this.dimension.height;
            annotationData.width = this.dimension.width;
        }
        annotationData.pageNumber = this.pageNumber;
        annotationData.type = this.type;
        annotationData.svgPath = this.getSvgPath();
        return annotationData;
    }
    /**
     * @private
     * @return {?}
     */
    getSvgPath() {
        /** @type {?} */
        let svgPath = "M";
        if (this.type === AnnotationType.POLYLINE.id) {
            /** @type {?} */
            let index = 0;
            /** @type {?} */
            let previousX = 0;
            /** @type {?} */
            let previousY = 0;
            for (const point of this.points) {
                if (index === 0) {
                    svgPath += point.left + "," + point.top + "l";
                    index = 1;
                }
                else {
                    previousX = point.left - previousX;
                    previousY = point.top - previousY;
                    svgPath += previousX + "," + previousY + "l";
                }
                previousX = point.left;
                previousY = point.top;
            }
        }
        else if (this.type === AnnotationType.DISTANCE.id || this.type === AnnotationType.ARROW.id) {
            svgPath += this.position.left + "," + this.position.top + " ";
            svgPath += this.endPosition.left + "," + this.endPosition.top + " ";
        }
        else {
            svgPath = "";
        }
        return svgPath;
    }
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    onPage(position) {
        return position.left <= this.pageWidth && position.top <= this.pageHeight &&
            position.left >= 0 && position.top >= 0;
    }
}
AnnotationComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-annotation',
                template: "<div class=\"gd-annotation\"\n     (clickOutside)=\"hideMenu($event)\"\n     [exclude]=\"'gd-context-menu,.ui-resizable-handle,.gd-comments-panel'\"\n     [excludeBeforeClick]=\"true\"\n     [clickOutsideEvents]=\"'mousedown'\"\n     [clickOutsideEnabled]=\"active\"\n     [style.left.px]=\"leftTop.left\" [style.top.px]=\"leftTop.top\"\n     [style.width.px]=\"getWidth()\"\n     [style.height.px]=\"getHeight()\"\n     (click)=\"activation()\"\n     (touchstart)=\"activation()\">\n  <div [draggable]=\"true\" (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\n       (drag)=\"dragging($event)\" (dragend)=\"dragging($event)\" (drop)=\"dragOver($event)\"\n       (panstart)=\"dragStart($event)\" (panmove)=\"dragging($event)\"\n       class=\"gd-annotation-wrapper\" [ngClass]=\"getAnnotationClass()\">\n    <gd-context-menu *ngIf=\"active\" [topPosition]=\"position.top\" [textMenu]=\"isText()\" [formatting]=\"getFormatting()\"\n                     (changeFormatting)=\"saveFormatting($event)\" (removeItem)=\"remove()\"\n                     [translation]=\"getMenuShift()\" [menuType]=\"getMenuType()\"\n                     (comment)=\"addComment()\"></gd-context-menu>\n    <div class=\"gd-text-strikeout-line\" *ngIf=\"isStrikeoutOrUnderline()\"></div>\n    <textarea wrap=\"off\" class=\"gd-text\" *ngIf=\"isTextReplacement() || isText()\" [value]=\"textValue\"\n              id=\"{{'text-' + id}}\" #text (keyup)=\"saveText(text.value)\"\n              (keydown)=\"textAreaHeight($event.key, text)\"\n              [style.color]=\"formatting?.color\"\n              [style.font-family]=\"formatting?.font\"\n              [style.font-size.px]=\"formatting?.fontSize\"\n              [style.width.px]=\"getWidth()\"\n              [style.height.px]=\"getHeight()\"></textarea>\n    <div *ngIf=\"isPoint()\" class=\"gd-point\">\n      <fa-icon class=\"icon\" [icon]=\"['fas','thumbtack']\" [size]=\"'lg'\"></fa-icon>\n    </div>\n  </div>\n\n  <gd-resizing [id]=\"id\" *ngIf=\"active && !isSVG() && !isPoint()\"\n               (offsetX)=\"width($event)\" (offsetY)=\"height($event)\"\n               (offsetTop)=\"top($event)\" (offsetLeft)=\"left($event)\"\n               [se]=\"true\" [sw]=\"true\" [ne]=\"true\" [nw]=\"true\"\n               [pageHeight]=\"pageHeight\" [pageWidth]=\"pageWidth\"></gd-resizing>\n</div>\n<svg *ngIf=\"isSVG()\" class=\"svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polyline *ngIf=\"isPolyline()\" [attr.id]=\"id\" [attr.points]=\"pointsValue\" [ngStyle]=\"setStyles()\">\n  </polyline>\n  <path id=\"{{'gd-path-' + id}}\" *ngIf=\"isPath()\" [attr.d]=\"pathValue\" [attr.marker-end]=\"bottom()\"\n        [attr.marker-start]=\"head()\" [ngStyle]=\"setStyles()\">\n    <title *ngIf=\"isDistance()\" [ngStyle]=\"distanceTextOptions()\">{{ distanceValue }}</title>\n  </path>\n  <text *ngIf=\"isDistance()\" [ngStyle]=\"distanceTextOptions()\" [attr.x]=\"getTextX()\"\n        [attr.y]=\"0\">\n    <textPath [attr.href]=\"'#gd-path-' + id\">\n      {{ distanceValue }}\n    </textPath>\n  </text>\n</svg>\n",
                styles: [".gd-annotation{position:absolute!important;cursor:pointer;z-index:9}.gd-annotation .gd-annotation-wrapper-border{outline:#679ffa solid 1px;display:-webkit-box}.gd-annotation .gd-annotation-wrapper{height:inherit;z-index:9}.gd-annotation .gd-annotation-wrapper ::ng-deep .palette{width:0;height:37px}.gd-annotation .gd-annotation-wrapper .gd-text-strikeout-line{background-color:#e04e4e;height:2px;width:100%}.gd-annotation .gd-annotation-wrapper .gd-text{border:none;outline:0;margin:0;padding:0;overflow:hidden;background-color:transparent;min-width:1em;min-height:1em}.gd-annotation .gd-annotation-wrapper .gd-point{background-color:#7cbc46;width:41px;height:41px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;color:#fff;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;-khtml-border-radius:50%;box-shadow:0 1px 1px 1px #bbb;-moz-box-shadow:0 1px 1px 1px #bbb;-webkit-box-shadow:0 1px 1px 1px #bbb}.gd-annotation .gd-text-annotation{background-color:rgba(151,151,240,.51)}.gd-annotation .gd-text-strikeout-annotation{align-items:center;-webkit-box-align:center}.gd-annotation .gd-text-underline-annotation{align-items:end;-webkit-box-align:end}.gd-annotation .gd-text-redaction-annotation{background-color:#000}.gd-annotation .gd-text-replacement-annotation{background-color:#fff}.svg{z-index:1;position:absolute;top:0;left:0;width:100%;height:100%}.annotation-svg{position:absolute;cursor:pointer;z-index:2}"]
            }] }
];
/** @nocollapse */
AnnotationComponent.ctorParameters = () => [
    { type: ActiveAnnotationService },
    { type: RemoveAnnotationService },
    { type: CommentAnnotationService }
];
if (false) {
    /** @type {?} */
    AnnotationComponent.prototype.id;
    /** @type {?} */
    AnnotationComponent.prototype.position;
    /** @type {?} */
    AnnotationComponent.prototype.leftTop;
    /** @type {?} */
    AnnotationComponent.prototype.type;
    /** @type {?} */
    AnnotationComponent.prototype.pageWidth;
    /** @type {?} */
    AnnotationComponent.prototype.pageHeight;
    /** @type {?} */
    AnnotationComponent.prototype.active;
    /** @type {?} */
    AnnotationComponent.prototype.dimension;
    /** @type {?} */
    AnnotationComponent.prototype.pageNumber;
    /** @type {?} */
    AnnotationComponent.prototype.textValue;
    /** @type {?} */
    AnnotationComponent.prototype.pathValue;
    /** @type {?} */
    AnnotationComponent.prototype.distanceValue;
    /** @type {?} */
    AnnotationComponent.prototype.pointsValue;
    /** @type {?} */
    AnnotationComponent.prototype.svgPath;
    /** @type {?} */
    AnnotationComponent.prototype.formatting;
    /**
     * @type {?}
     * @private
     */
    AnnotationComponent.prototype.oldPosition;
    /**
     * @type {?}
     * @private
     */
    AnnotationComponent.prototype.points;
    /**
     * @type {?}
     * @private
     */
    AnnotationComponent.prototype.endPosition;
    /**
     * @type {?}
     * @private
     */
    AnnotationComponent.prototype._activeAnnotationService;
    /**
     * @type {?}
     * @private
     */
    AnnotationComponent.prototype._removeAnnotationService;
    /**
     * @type {?}
     * @private
     */
    AnnotationComponent.prototype._commentAnnotationService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const $$1 = jquery;
class AnnotationAppComponent {
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
            this.selectFile(ret.guid, null, CommonModals.OperationSuccess);
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
                const documentPage = $$1(currentPage).parent().parent()[0];
                /** @type {?} */
                const currentPosition = this.getCurrentPosition(position, $$1(documentPage));
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
            const currentPosition = this.getCurrentPosition(position, $$1("#page-" + pageNumber));
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommentPanelComponent {
    /**
     * @param {?} _commentAnnotationService
     */
    constructor(_commentAnnotationService) {
        this._commentAnnotationService = _commentAnnotationService;
        this.closeComments = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    closePanel() {
        this.closeComments.emit(true);
    }
    /**
     * @return {?}
     */
    newComment() {
        this.currentComment = new Comment(this.annotationId);
    }
    /**
     * @return {?}
     */
    clearComment() {
        this.currentComment = null;
    }
    /**
     * @return {?}
     */
    addComment() {
        this._commentAnnotationService.addComment(Comment.create(this.currentComment));
        this.currentComment = null;
    }
}
CommentPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-comment-panel',
                template: "<div class=\"gd-comments-panel\">\n  <div class=\"gd-comments-head\">\n    <fa-icon [icon]=\"['fas', 'plus']\" [class]=\"'ng-fa-icon icon'\" (click)=\"newComment()\"></fa-icon>\n    <span class=\"gd-comments-title\">Comments</span>\n    <fa-icon [icon]=\"['fas', 'times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"closePanel()\"></fa-icon>\n  </div>\n  <div class=\"gd-comments-body\">\n    <div *ngIf=\"comments.length != 0\">\n      <div *ngFor=\"let comment of comments\">\n        <gd-comment [comment]=\"comment\"></gd-comment>\n      </div>\n    </div>\n    <gd-create-comment *ngIf=\"currentComment\" [comment]=\"currentComment\" (addComment)=\"addComment()\"\n                       (removeComment)=\"clearComment()\"></gd-create-comment>\n    <div class=\"gd-empty-comments-list\" *ngIf=\"comments.length == 0 && !currentComment\">\n      <fa-icon [icon]=\"['fas','comments']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n      <span class=\"gd-empty-text\">No comments yet. Be the first one, <br/>\n        </span>\n      <span class=\"gd-empty-text gd-empty-bold-text\">add comment.</span>\n    </div>\n  </div>\n</div>\n",
                styles: [".gd-comments-panel{position:absolute;right:0;top:30px;overflow:auto!important;width:334px;display:-webkit-box;display:flex;height:100%;z-index:9;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.gd-comments-panel .gd-comments-head{height:60px;width:334px;display:-webkit-box;display:flex;background-color:#222e35;color:#959da5;-webkit-box-align:center;align-items:center}.gd-comments-panel .gd-comments-head .icon{-webkit-box-flex:0;flex:0 0 40px;margin-left:20px;cursor:pointer}.gd-comments-panel .gd-comments-head .gd-comments-title{-webkit-box-flex:1;flex:1;font-size:13px;font-weight:700}.gd-comments-panel .gd-comments-body{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;background-color:#f4f4f4;height:calc(100% - 90px)}.gd-comments-panel .gd-comments-body .gd-empty-comments-list{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;color:#959da5;width:250px;height:250px;margin-top:40px}.gd-comments-panel .gd-comments-body .gd-empty-comments-list .icon{font-size:65px;margin-bottom:40px}.gd-comments-panel .gd-comments-body .gd-empty-comments-list .gd-empty-text{font-size:15px}.gd-comments-panel .gd-comments-body .gd-empty-comments-list .gd-empty-bold-text{font-weight:700}"]
            }] }
];
/** @nocollapse */
CommentPanelComponent.ctorParameters = () => [
    { type: CommentAnnotationService }
];
CommentPanelComponent.propDecorators = {
    comments: [{ type: Input }],
    annotationId: [{ type: Input }],
    closeComments: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CommentPanelComponent.prototype.comments;
    /** @type {?} */
    CommentPanelComponent.prototype.annotationId;
    /** @type {?} */
    CommentPanelComponent.prototype.closeComments;
    /** @type {?} */
    CommentPanelComponent.prototype.currentComment;
    /**
     * @type {?}
     * @private
     */
    CommentPanelComponent.prototype._commentAnnotationService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommentComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    getTime() {
        /** @type {?} */
        const time = Date.now() - this.comment.time;
        /** @type {?} */
        const hours = Math.round(time / (60 * 60 * 1000));
        if (hours > 1) {
            return 'about ' + hours + ' hours ago';
        }
        /** @type {?} */
        const min = Math.round(time / (60 * 1000));
        if (min > 1) {
            return 'about ' + min + ' minutes ago';
        }
        /** @type {?} */
        const sec = Math.round(time / 1000);
        if (sec > 1) {
            return 'about ' + sec + ' seconds ago';
        }
        return this.comment.time;
    }
}
CommentComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-comment',
                template: "<div class=\"gd-comment\">\n  <div class=\"gd-comment-head\">\n    <fa-icon [icon]=\"['fas', 'user-circle']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    <span class=\"gd-name\">{{comment.userName}}</span>\n  </div>\n  <span class=\"gd-message\">{{comment.text}}</span>\n  <span class=\"gd-time\">{{getTime()}}</span>\n</div>\n",
                styles: [".gd-comment{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:294px;font-size:13px;color:#3e4e5a;padding-top:20px}.gd-comment .gd-comment-head{display:-webkit-box;display:flex}.gd-comment .gd-comment-head .icon{-webkit-box-flex:0;flex:0 0 30px}.gd-comment .gd-comment-head .gd-name{font-weight:700}.gd-comment .gd-message{padding-top:5px}.gd-comment .gd-time{color:#acacac;padding-top:5px}"]
            }] }
];
/** @nocollapse */
CommentComponent.ctorParameters = () => [];
CommentComponent.propDecorators = {
    comment: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CommentComponent.prototype.comment;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const $$2 = jquery;
class CreateCommentComponent {
    constructor() {
        this.addComment = new EventEmitter();
        this.removeComment = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const element = $$2("#name");
            if (element) {
                element.focus();
            }
        }), 100);
    }
    /**
     * @return {?}
     */
    onAddComment() {
        this.addComment.emit(this.comment);
    }
    /**
     * @return {?}
     */
    clearComment() {
        this.removeComment.emit(true);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    saveText(value) {
        this.comment.text = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    saveName(value) {
        this.comment.userName = value;
    }
}
CreateCommentComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-create-comment',
                template: "<div class=\"gd-new-comment\">\n  <input type=\"text\" class=\"gd-name\" id=\"name\" [value]=\"comment.userName\" #name autofocus (keyup)=\"saveName(name.value)\" placeholder=\"Name\"/>\n  <textarea class=\"gd-text\" [value]=\"comment.text\" #text (keyup)=\"saveText(text.value)\" placeholder=\"Message\"></textarea>\n  <div class=\"gd-buttons\">\n    <gd-button (click)=\"clearComment()\" [iconOnly]=\"false\" class=\"gd-cancel-comment\">\n      Cancel\n    </gd-button>\n    <gd-button (click)=\"onAddComment()\" [icon]=\"'share'\" class=\"gd-add-comment\" [iconOnly]=\"false\">\n      Reply\n    </gd-button>\n  </div>\n</div>\n",
                styles: [".gd-new-comment{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;padding-top:20px;width:294px;font-size:14px}.gd-new-comment .gd-buttons{display:-webkit-box;display:flex;margin-top:20px;width:294px;-webkit-box-pack:end;justify-content:flex-end}.gd-new-comment .gd-buttons .gd-add-comment{background-color:#4b566c!important;margin-left:10px;border:1px solid #707070}.gd-new-comment .gd-buttons .gd-add-comment ::ng-deep .button{color:#fff!important}.gd-new-comment .gd-buttons .gd-cancel-comment{background-color:transparent;border:1px solid #707070}.gd-new-comment .gd-buttons .gd-cancel-comment ::ng-deep .button{color:#acacac!important}.gd-new-comment .gd-name{width:100%;height:37px;border:1px solid #6e6e6e}.gd-new-comment .gd-text{width:100%;height:100px;border:1px solid #6e6e6e;margin-top:20px}"]
            }] }
];
/** @nocollapse */
CreateCommentComponent.ctorParameters = () => [];
CreateCommentComponent.propDecorators = {
    comment: [{ type: Input }],
    addComment: [{ type: Output }],
    removeComment: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CreateCommentComponent.prototype.comment;
    /** @type {?} */
    CreateCommentComponent.prototype.addComment;
    /** @type {?} */
    CreateCommentComponent.prototype.removeComment;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} annotationConfigService
 * @return {?}
 */
function initializeApp(annotationConfigService) {
    /** @type {?} */
    const result = (/**
     * @return {?}
     */
    () => annotationConfigService.load());
    return result;
}
// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
/**
 * @param {?} service
 * @return {?}
 */
function setupLoadingInterceptor(service) {
    return new LoadingMaskInterceptorService(service);
}
class AnnotationModule {
    constructor() {
        library.add(fas, far);
    }
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    static forRoot(apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: AnnotationModule
        };
    }
}
AnnotationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AnnotationAppComponent, AnnotationComponent, CommentPanelComponent, CommentComponent, CreateCommentComponent,
                ],
                exports: [CommonComponentsModule, AnnotationAppComponent, AnnotationComponent, CommentPanelComponent, CommentComponent, CreateCommentComponent],
                imports: [CommonModule,
                    CommonComponentsModule,
                    HttpClientModule,
                    FontAwesomeModule,
                    ClickOutsideModule],
                providers: [
                    ConfigService,
                    AnnotationConfigService,
                    ActiveAnnotationService,
                    RemoveAnnotationService,
                    CommentAnnotationService,
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: ErrorInterceptorService,
                        multi: true
                    },
                    {
                        provide: APP_INITIALIZER,
                        useFactory: initializeApp,
                        deps: [AnnotationConfigService], multi: true
                    },
                    LoadingMaskService,
                    {
                        provide: HTTP_INTERCEPTORS,
                        useFactory: setupLoadingInterceptor,
                        multi: true,
                        deps: [LoadingMaskService]
                    }
                ],
                entryComponents: [AnnotationComponent],
            },] }
];
/** @nocollapse */
AnnotationModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ActiveAnnotationService, AnnotationAppComponent, AnnotationConfigService, AnnotationModule, AnnotationService, CommentAnnotationService, RemoveAnnotationService, initializeApp, setupLoadingInterceptor, AnnotationComponent as ɵa, CommentPanelComponent as ɵb, CommentComponent as ɵc, CreateCommentComponent as ɵd };
//# sourceMappingURL=groupdocs.examples.angular-annotation.js.map
