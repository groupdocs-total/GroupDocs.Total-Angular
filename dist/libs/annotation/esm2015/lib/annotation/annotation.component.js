/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AnnotationData, AnnotationType, CommentAnnotation, Dimension, Position, RemoveAnnotation } from "../annotation-models";
import { ActiveAnnotationService } from "../active-annotation.service";
import { Formatting, Utils, MenuType, ZoomService } from "@groupdocs.examples.angular/common-components";
import { RemoveAnnotationService } from "../remove-annotation.service";
import { CommentAnnotationService } from "../comment-annotation.service";
import * as jquery from 'jquery';
/** @type {?} */
const $ = jquery;
export class AnnotationComponent {
    /**
     * @param {?} _activeAnnotationService
     * @param {?} _removeAnnotationService
     * @param {?} _commentAnnotationService
     * @param {?} _zoomService
     */
    constructor(_activeAnnotationService, _removeAnnotationService, _commentAnnotationService, _zoomService) {
        this._activeAnnotationService = _activeAnnotationService;
        this._removeAnnotationService = _removeAnnotationService;
        this._commentAnnotationService = _commentAnnotationService;
        this._zoomService = _zoomService;
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
    ngAfterViewChecked() {
        this._zoomService.changeZoom(this._zoomService.zoom);
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
            case AnnotationType.TEXT_FIELD.id:
            case AnnotationType.WATERMARK.id:
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
                template: "<div [hidden]=\"hidden\" class=\"gd-annotation\"\n     (clickOutside)=\"hideMenu($event)\"\n     [exclude]=\"'gd-context-menu,.ui-resizable-handle,.gd-comments-panel'\"\n     [excludeBeforeClick]=\"true\"\n     [clickOutsideEvents]=\"'mousedown'\"\n     [clickOutsideEnabled]=\"active\"\n     [style.left.px]=\"leftTop.left\" [style.top.px]=\"leftTop.top\"\n     [style.width.px]=\"getWidth()\"\n     [style.height.px]=\"getHeight()\"\n     (click)=\"activation()\"\n     (touchstart)=\"activation()\">\n  <div [draggable]=\"true\" (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\n       (drag)=\"dragging($event)\" (dragend)=\"dragging($event)\" (drop)=\"dragOver($event)\"\n       (panstart)=\"dragStart($event)\" (panmove)=\"dragging($event)\"\n       class=\"gd-annotation-wrapper\" [ngClass]=\"getAnnotationClass()\">\n    <gd-context-menu *ngIf=\"active\" [topPosition]=\"position.top\" [textMenu]=\"isText()\" [formatting]=\"getFormatting()\"\n                     (changeFormatting)=\"saveFormatting($event)\" (removeItem)=\"remove()\"\n                     [translation]=\"getMenuShift()\" [menuType]=\"getMenuType()\"\n                     (comment)=\"addComment()\"></gd-context-menu>\n    <div class=\"gd-text-strikeout-line\" *ngIf=\"isStrikeoutOrUnderline()\"></div>\n    <textarea wrap=\"off\" class=\"gd-text\" *ngIf=\"isTextReplacement() || isText()\" [value]=\"textValue\"\n              id=\"{{'text-' + id}}\" #text (keyup)=\"saveText(text.value)\"\n              (keydown)=\"textAreaHeight($event.key, text)\"\n              [style.color]=\"formatting?.color\"\n              [style.font-family]=\"formatting?.font\"\n              [style.font-size.px]=\"formatting?.fontSize\"\n              [style.width.px]=\"getWidth()\"\n              [style.height.px]=\"getHeight()\">{{textValue}}</textarea>\n    <div *ngIf=\"isPoint()\" class=\"gd-point\">\n      <fa-icon class=\"icon\" [icon]=\"['fas','thumbtack']\" [size]=\"'lg'\"></fa-icon>\n    </div>\n  </div>\n\n  <gd-resizing [id]=\"id\" *ngIf=\"active && !isSVG() && !isPoint()\"\n               (offsetX)=\"width($event)\" (offsetY)=\"height($event)\"\n               (offsetTop)=\"top($event)\" (offsetLeft)=\"left($event)\"\n               [se]=\"true\" [sw]=\"true\" [ne]=\"true\" [nw]=\"true\"\n               [pageHeight]=\"pageHeight\" [pageWidth]=\"pageWidth\"></gd-resizing>\n</div>\n<svg *ngIf=\"isSVG() && !hidden\" class=\"svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polyline *ngIf=\"isPolyline()\" [attr.id]=\"id\" [attr.points]=\"pointsValue\" [ngStyle]=\"setStyles()\">\n  </polyline>\n  <path id=\"{{'gd-path-' + id}}\" *ngIf=\"isPath()\" [attr.d]=\"pathValue\" [attr.marker-end]=\"bottom()\"\n        [attr.marker-start]=\"head()\" [ngStyle]=\"setStyles()\">\n    <title *ngIf=\"isDistance()\" [ngStyle]=\"distanceTextOptions()\">{{ distanceValue }}</title>\n  </path>\n  <text *ngIf=\"isDistance()\" [ngStyle]=\"distanceTextOptions()\" [attr.x]=\"getTextX()\"\n        [attr.y]=\"0\">\n    <textPath [attr.href]=\"'#gd-path-' + id\">\n      {{ distanceValue }}\n    </textPath>\n  </text>\n</svg>\n",
                styles: [".gd-annotation{position:absolute!important;cursor:pointer;z-index:9}.gd-annotation .gd-annotation-wrapper-border{outline:#679ffa solid 1px;display:-webkit-box}.gd-annotation .gd-annotation-wrapper{height:inherit;z-index:9}.gd-annotation .gd-annotation-wrapper ::ng-deep .palette{width:0;height:37px}.gd-annotation .gd-annotation-wrapper .gd-text-strikeout-line{background-color:#e04e4e;height:2px;width:100%}.gd-annotation .gd-annotation-wrapper .gd-text{border:none;outline:0;margin:0;padding:0;overflow:hidden;background-color:transparent;min-width:1em;min-height:1em}.gd-annotation .gd-annotation-wrapper .gd-point{background-color:#7cbc46;width:41px;height:41px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;color:#fff;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;-khtml-border-radius:50%;box-shadow:0 1px 1px 1px #bbb;-moz-box-shadow:0 1px 1px 1px #bbb;-webkit-box-shadow:0 1px 1px 1px #bbb}.gd-annotation .gd-text-annotation{background-color:rgba(151,151,240,.51)}.gd-annotation .gd-text-strikeout-annotation{align-items:center;-webkit-box-align:center}.gd-annotation .gd-text-underline-annotation{align-items:end;-webkit-box-align:end}.gd-annotation .gd-text-redaction-annotation{background-color:#000}.gd-annotation .gd-text-replacement-annotation{background-color:#fff}.svg{z-index:1;position:absolute;top:0;left:0;width:100%;height:100%}.annotation-svg{position:absolute;cursor:pointer;z-index:2}"]
            }] }
];
/** @nocollapse */
AnnotationComponent.ctorParameters = () => [
    { type: ActiveAnnotationService },
    { type: RemoveAnnotationService },
    { type: CommentAnnotationService },
    { type: ZoomService }
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
    /** @type {?} */
    AnnotationComponent.prototype.hidden;
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
    /**
     * @type {?}
     * @private
     */
    AnnotationComponent.prototype._zoomService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hbm5vdGF0aW9uL2Fubm90YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUNMLGNBQWMsRUFDZCxjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxRQUFRLEVBQ1IsZ0JBQWdCLEVBQ2pCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3ZHLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ3ZFLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztNQUUzQixDQUFDLEdBQUcsTUFBTTtBQU9oQixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7O0lBdUI5QixZQUFvQix3QkFBaUQsRUFDakQsd0JBQWlELEVBQ2pELHlCQUFtRCxFQUNuRCxZQUF5QjtRQUh6Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO1FBQ2pELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBeUI7UUFDakQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQUNuRCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQWxCN0MsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLGNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFaEMsY0FBUyxHQUFH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R0FBMEM7O2FBRTNDOzs7O1lBWk8sdUJBQXVCO1lBRXZCLHVCQUF1QjtZQUN2Qix3QkFBd0I7WUFGSyxXQUFXOzs7O0lBYzlDLGlDQUFXOztJQUNYLHVDQUFtQjs7SUFDbkIsc0NBQWtCOztJQUNsQixtQ0FBYTs7SUFDYix3Q0FBa0I7O0lBQ2xCLHlDQUFtQjs7SUFDbkIscUNBQWM7O0lBQ2Qsd0NBQWdDOztJQUNoQyx5Q0FBbUI7O0lBQ25CLHdDQUFlOztJQUNmLHdDQUFrQjs7SUFDbEIsNENBQXNCOztJQUN0QiwwQ0FBaUI7O0lBQ2pCLHNDQUFhOztJQUNiLHlDQUFrQzs7SUFDbEMscUNBQWdCOzs7OztJQUVoQiwwQ0FBOEM7Ozs7O0lBQzlDLHFDQUFvQjs7Ozs7SUFDcEIsMENBQThCOzs7OztJQUVsQix1REFBeUQ7Ozs7O0lBQ3pELHVEQUF5RDs7Ozs7SUFDekQsd0RBQTJEOzs7OztJQUMzRCwyQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFubm90YXRpb25EYXRhLFxuICBBbm5vdGF0aW9uVHlwZSxcbiAgQ29tbWVudEFubm90YXRpb24sXG4gIERpbWVuc2lvbixcbiAgUG9zaXRpb24sXG4gIFJlbW92ZUFubm90YXRpb25cbn0gZnJvbSBcIi4uL2Fubm90YXRpb24tbW9kZWxzXCI7XG5pbXBvcnQge0FjdGl2ZUFubm90YXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vYWN0aXZlLWFubm90YXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHtGb3JtYXR0aW5nLCBVdGlscywgTWVudVR5cGUsIFpvb21TZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge1JlbW92ZUFubm90YXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vcmVtb3ZlLWFubm90YXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHtDb21tZW50QW5ub3RhdGlvblNlcnZpY2V9IGZyb20gXCIuLi9jb21tZW50LWFubm90YXRpb24uc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWFubm90YXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYW5ub3RhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Fubm90YXRpb24uY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkIHtcblxuICBpZDogbnVtYmVyO1xuICBwb3NpdGlvbjogUG9zaXRpb247XG4gIGxlZnRUb3A6IFBvc2l0aW9uO1xuICB0eXBlOiBzdHJpbmc7XG4gIHBhZ2VXaWR0aDogbnVtYmVyO1xuICBwYWdlSGVpZ2h0OiBudW1iZXI7XG4gIGFjdGl2ZSA9IHRydWU7XG4gIGRpbWVuc2lvbiA9IG5ldyBEaW1lbnNpb24oMCwgMCk7XG4gIHBhZ2VOdW1iZXI6IG51bWJlcjtcbiAgdGV4dFZhbHVlID0gXCJcIjtcbiAgcGF0aFZhbHVlOiBzdHJpbmc7XG4gIGRpc3RhbmNlVmFsdWUgPSAnMHB4JztcbiAgcG9pbnRzVmFsdWUgPSBcIlwiO1xuICBzdmdQYXRoID0gXCJcIjtcbiAgZm9ybWF0dGluZyA9IEZvcm1hdHRpbmcuZGVmYXVsdCgpO1xuICBoaWRkZW46IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBvbGRQb3NpdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xuICBwcml2YXRlIHBvaW50cyA9IFtdO1xuICBwcml2YXRlIGVuZFBvc2l0aW9uOiBQb3NpdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY3RpdmVBbm5vdGF0aW9uU2VydmljZTogQWN0aXZlQW5ub3RhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbW92ZUFubm90YXRpb25TZXJ2aWNlOiBSZW1vdmVBbm5vdGF0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY29tbWVudEFubm90YXRpb25TZXJ2aWNlOiBDb21tZW50QW5ub3RhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSkge1xuICAgIHRoaXMuX2FjdGl2ZUFubm90YXRpb25TZXJ2aWNlLmFjdGl2ZUNoYW5nZS5zdWJzY3JpYmUoKGlkOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy5pZCA9PT0gaWQ7XG4gICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zZXRUZXh0Rm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpc09uUGFnZShwb3NpdGlvbikge1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbiAgICByZXR1cm4gY3VycmVudFBhZ2UgJiYgJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KCkgJiZcbiAgICAgICgkKGN1cnJlbnRQYWdlKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5oYXNDbGFzcyhcInBhZ2VcIikgfHxcbiAgICAgICAgJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuaGFzQ2xhc3MoXCJwYWdlXCIpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGVmdFRvcCA9IFBvc2l0aW9uLmNsb25lKHRoaXMucG9zaXRpb24pO1xuICAgIGlmICh0aGlzLmlzUG9seWxpbmUoKSkge1xuICAgICAgaWYgKHRoaXMuc3ZnUGF0aCkge1xuICAgICAgICBjb25zdCBwYXJzZWRQb2ludHMgPSB0aGlzLnN2Z1BhdGgucmVwbGFjZShcIk1cIiwgXCJcIikuc3BsaXQoJ0wnKTtcbiAgICAgICAgbGV0IHggPSBwYXJzZUZsb2F0KHBhcnNlZFBvaW50c1swXS5zcGxpdChcIixcIilbMF0pO1xuICAgICAgICBsZXQgeSA9IHBhcnNlRmxvYXQocGFyc2VkUG9pbnRzWzBdLnNwbGl0KFwiLFwiKVsxXSk7XG4gICAgICAgIGNvbnN0IGNvbXAgPSB0aGlzO1xuICAgICAgICBwYXJzZWRQb2ludHMuZm9yRWFjaChmdW5jdGlvbiAocG9pbnQsIGluZGV4KSB7XG4gICAgICAgICAgaWYgKGluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICBpZiAocG9pbnQgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgY29tcC5hZGRQb2ludChuZXcgUG9zaXRpb24oeCwgeSkpO1xuICAgICAgICAgICAgICB4ID0gKHggKyBwYXJzZUZsb2F0KHBvaW50LnNwbGl0KFwiLFwiKVswXSkpO1xuICAgICAgICAgICAgICB5ID0gKHkgKyBwYXJzZUZsb2F0KHBvaW50LnNwbGl0KFwiLFwiKVsxXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZFBvaW50KHRoaXMucG9zaXRpb24pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5pc1BhdGgoKSkge1xuICAgICAgaWYgKHRoaXMuc3ZnUGF0aCB8fCAodGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5BUlJPVy5pZCAmJiAhdGhpcy5kaW1lbnNpb24uaXNOb25lKCkpKSB7XG4gICAgICAgIGNvbnN0IGVuZCA9IG5ldyBQb3NpdGlvbih0aGlzLnBvc2l0aW9uLmxlZnQgKyB0aGlzLmRpbWVuc2lvbi53aWR0aCwgdGhpcy5wb3NpdGlvbi50b3AgKyB0aGlzLmRpbWVuc2lvbi5oZWlnaHQpO1xuICAgICAgICB0aGlzLnNldEVuZFBvc2l0aW9uKGVuZCk7XG4gICAgICAgIGlmICh0aGlzLmRpbWVuc2lvbi5oZWlnaHQgPCAwKSB7XG4gICAgICAgICAgdGhpcy5sZWZ0VG9wLnRvcCArPSB0aGlzLmRpbWVuc2lvbi5oZWlnaHQ7XG4gICAgICAgICAgdGhpcy5kaW1lbnNpb24uaGVpZ2h0ID0gdGhpcy5kaW1lbnNpb24uaGVpZ2h0ICogKC0xKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaW1lbnNpb24ud2lkdGggPCAwKSB7XG4gICAgICAgICAgdGhpcy5sZWZ0VG9wLmxlZnQgKz0gdGhpcy5kaW1lbnNpb24ud2lkdGg7XG4gICAgICAgICAgdGhpcy5kaW1lbnNpb24ud2lkdGggPSB0aGlzLmRpbWVuc2lvbi53aWR0aCAqICgtMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0RW5kUG9zaXRpb24odGhpcy5wb3NpdGlvbik7XG4gICAgICB9XG4gICAgICB0aGlzLmRpc3RhbmNlVmFsdWUgPSB0aGlzLmdldERpc3RhbmNlKCkgKyBcInB4XCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLlBPSU5ULmlkKSB7XG4gICAgICB0aGlzLmluaXRQb2ludCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldEVuZFBvc2l0aW9uKHRoaXMucG9zaXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFRleHRGb2N1cygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIHRoaXMuX3pvb21TZXJ2aWNlLmNoYW5nZVpvb20odGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XG4gIH1cblxuICBhY3RpdmF0aW9uKCkge1xuICAgIHRoaXMuX2FjdGl2ZUFubm90YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZSh0aGlzLmlkKTtcbiAgfVxuXG4gIHdpZHRoKCRldmVudCkge1xuICAgIGlmICh0aGlzLmNoZWNrRHJhZ2dpbmcoJGV2ZW50LCAwKSkge1xuICAgICAgdGhpcy5kaW1lbnNpb24ud2lkdGggKz0gJGV2ZW50O1xuICAgIH1cbiAgfVxuXG4gIGhlaWdodCgkZXZlbnQpIHtcbiAgICBpZiAodGhpcy5jaGVja0RyYWdnaW5nKDAsICRldmVudCkpIHtcbiAgICAgIHRoaXMuZGltZW5zaW9uLmhlaWdodCArPSAkZXZlbnQ7XG4gICAgfVxuICB9XG5cbiAgbGVmdCgkZXZlbnQpIHtcbiAgICB0aGlzLnBvc2l0aW9uLmxlZnQgKz0gJGV2ZW50O1xuICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XG4gICAgdGhpcy5yZWZyZXNoTGVmdFRvcCgpO1xuICB9XG5cbiAgdG9wKCRldmVudCkge1xuICAgIHRoaXMucG9zaXRpb24udG9wICs9ICRldmVudDtcbiAgICB0aGlzLmNvcnJlY3RQb3NpdGlvbigpO1xuICAgIHRoaXMucmVmcmVzaExlZnRUb3AoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaExlZnRUb3AoKSB7XG4gICAgdGhpcy5sZWZ0VG9wLmxlZnQgPSB0aGlzLnBvc2l0aW9uLmxlZnQ7XG4gICAgdGhpcy5sZWZ0VG9wLnRvcCA9IHRoaXMucG9zaXRpb24udG9wO1xuICB9XG5cbiAgcHJpdmF0ZSBjb3JyZWN0UG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMucG9zaXRpb24ubGVmdCA8IDApIHtcbiAgICAgIHRoaXMucG9zaXRpb24ubGVmdCA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnRvcCA8IDApIHtcbiAgICAgIHRoaXMucG9zaXRpb24udG9wID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zaXRpb24udG9wICsgdGhpcy5kaW1lbnNpb24uaGVpZ2h0ID4gdGhpcy5wYWdlSGVpZ2h0KSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucGFnZUhlaWdodCAtIHRoaXMuZGltZW5zaW9uLmhlaWdodDtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zaXRpb24ubGVmdCArIHRoaXMuZGltZW5zaW9uLndpZHRoID4gdGhpcy5wYWdlV2lkdGgpIHtcbiAgICAgIHRoaXMucG9zaXRpb24ubGVmdCA9IHRoaXMucGFnZVdpZHRoIC0gdGhpcy5kaW1lbnNpb24ud2lkdGg7XG4gICAgfVxuICB9XG5cbiAgZHJhZ092ZXIoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBkcmFnU3RhcnQoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLm9sZFBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xuICAgIGlmICgkZXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgICAkZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnZm9vJyk7XG4gICAgfVxuICB9XG5cbiAgaW5pdFBvaW50KCkge1xuICAgIHRoaXMuZGltZW5zaW9uID0gbmV3IERpbWVuc2lvbig0MCwgNDApO1xuICAgIHRoaXMucG9zaXRpb24ubGVmdCA9IHRoaXMucG9zaXRpb24ubGVmdCAtIDIwO1xuICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AgLSAyMDtcbiAgICB0aGlzLmxlZnRUb3AgPSBQb3NpdGlvbi5jbG9uZSh0aGlzLnBvc2l0aW9uKTtcbiAgfVxuXG4gIGRyYWdnaW5nKCRldmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xuICAgIGlmIChwb3NpdGlvbi54ICYmIHBvc2l0aW9uLnkgJiYgQW5ub3RhdGlvbkNvbXBvbmVudC5pc09uUGFnZShwb3NpdGlvbikpIHtcbiAgICAgIGNvbnN0IGxlZnQgPSBwb3NpdGlvbi54IC0gdGhpcy5vbGRQb3NpdGlvbi54O1xuICAgICAgY29uc3QgdG9wID0gcG9zaXRpb24ueSAtIHRoaXMub2xkUG9zaXRpb24ueTtcbiAgICAgIGlmICh0aGlzLmlzUG9seWxpbmUoKSkge1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tEcmFnZ2luZyhsZWZ0LCB0b3ApKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9pbnRzVmFsdWUgPSBcIlwiO1xuICAgICAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHRoaXMucG9pbnRzKSB7XG4gICAgICAgICAgcG9pbnQubGVmdCA9IHBvaW50LmxlZnQgKyBsZWZ0O1xuICAgICAgICAgIHBvaW50LnRvcCA9IHBvaW50LnRvcCArIHRvcDtcbiAgICAgICAgICB0aGlzLnBvaW50c1ZhbHVlICs9IHBvaW50LmxlZnQgKyBcIixcIiArIHBvaW50LnRvcCArIFwiIFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGVmdFRvcC5sZWZ0ICs9IGxlZnQ7XG4gICAgICAgIHRoaXMubGVmdFRvcC50b3AgKz0gdG9wO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUGF0aCgpKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGVja0RyYWdnaW5nKGxlZnQsIHRvcCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbi5sZWZ0ICs9IGxlZnQ7XG4gICAgICAgIHRoaXMucG9zaXRpb24udG9wICs9IHRvcDtcbiAgICAgICAgdGhpcy5lbmRQb3NpdGlvbi5sZWZ0ICs9IGxlZnQ7XG4gICAgICAgIHRoaXMuZW5kUG9zaXRpb24udG9wICs9IHRvcDtcbiAgICAgICAgdGhpcy5wYXRoVmFsdWUgPSBcIk1cIiArIHRoaXMucG9zaXRpb24ubGVmdCArIFwiLFwiICsgdGhpcy5wb3NpdGlvbi50b3AgKyBcIiBMXCIgKyB0aGlzLmVuZFBvc2l0aW9uLmxlZnQgKyBcIixcIiArIHRoaXMuZW5kUG9zaXRpb24udG9wO1xuICAgICAgICB0aGlzLmRpc3RhbmNlVmFsdWUgPSB0aGlzLmdldERpc3RhbmNlKCkgKyBcInB4XCI7XG4gICAgICAgIHRoaXMubGVmdFRvcC5sZWZ0ICs9IGxlZnQ7XG4gICAgICAgIHRoaXMubGVmdFRvcC50b3AgKz0gdG9wO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5sZWZ0ICs9IGxlZnQ7XG4gICAgICAgIHRoaXMucG9zaXRpb24udG9wICs9IHRvcDtcbiAgICAgICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoTGVmdFRvcCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5vbGRQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIGdldEFubm90YXRpb25DbGFzcygpIHtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhULmlkOlxuICAgICAgICByZXR1cm4gXCJnZC1hbm5vdGF0aW9uLXdyYXBwZXItYm9yZGVyIGdkLXRleHQtYW5ub3RhdGlvblwiO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1NUUklLRU9VVC5pZDpcbiAgICAgICAgcmV0dXJuIFwiZ2QtYW5ub3RhdGlvbi13cmFwcGVyLWJvcmRlciBnZC10ZXh0LWFubm90YXRpb24gZ2QtdGV4dC1zdHJpa2VvdXQtYW5ub3RhdGlvblwiO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1VOREVSTElORS5pZDpcbiAgICAgICAgcmV0dXJuIFwiZ2QtYW5ub3RhdGlvbi13cmFwcGVyLWJvcmRlciBnZC10ZXh0LWFubm90YXRpb24gZ2QtdGV4dC11bmRlcmxpbmUtYW5ub3RhdGlvblwiO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1JFREFDVElPTi5pZDpcbiAgICAgICAgcmV0dXJuIFwiZ2QtYW5ub3RhdGlvbi13cmFwcGVyLWJvcmRlciBnZC10ZXh0LXJlZGFjdGlvbi1hbm5vdGF0aW9uXCI7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfUkVQTEFDRU1FTlQuaWQ6XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfRklFTEQuaWQ6XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLldBVEVSTUFSSy5pZDpcbiAgICAgICAgcmV0dXJuIFwiZ2QtYW5ub3RhdGlvbi13cmFwcGVyLWJvcmRlciBnZC10ZXh0LXJlcGxhY2VtZW50LWFubm90YXRpb25cIjtcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuUE9JTlQuaWQ6XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiZ2QtYW5ub3RhdGlvbi13cmFwcGVyLWJvcmRlclwiO1xuICAgIH1cbiAgfVxuXG4gIGlzU3RyaWtlb3V0T3JVbmRlcmxpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuVEVYVF9TVFJJS0VPVVQuaWQgfHwgdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5URVhUX1VOREVSTElORS5pZDtcbiAgfVxuXG4gIGlzVGV4dFJlcGxhY2VtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLlRFWFRfUkVQTEFDRU1FTlQuaWQ7XG4gIH1cblxuICBzYXZlVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy50ZXh0VmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGRyYXcocG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgaWYgKHRoaXMub25QYWdlKHBvc2l0aW9uKSkge1xuICAgICAgaWYgKHRoaXMuaXNQb2x5bGluZSgpKSB7XG4gICAgICAgIHRoaXMuYWRkUG9pbnQocG9zaXRpb24pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUGF0aCgpKSB7XG4gICAgICAgIHRoaXMuc2V0RW5kUG9zaXRpb24ocG9zaXRpb24pO1xuICAgICAgICB0aGlzLmRpc3RhbmNlVmFsdWUgPSB0aGlzLmdldERpc3RhbmNlKCkgKyBcInB4XCI7XG4gICAgICB9XG4gICAgICB0aGlzLmNhbGNQb3NpdGlvbkFuZERpbWVuc2lvbigpO1xuICAgIH1cbiAgfVxuXG4gIHNldFN0eWxlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ3N0cm9rZSc6ICcjNTc5QUYwJyxcbiAgICAgICdzdHJva2Utd2lkdGgnOiAyLFxuICAgICAgJ2ZpbGwtb3BhY2l0eSc6IDAsXG4gICAgICAnaWQnOiAodGhpcy5pc1BvbHlsaW5lKCkgPyAnZ2QtcG9seWxpbmUtYW5ub3RhdGlvbi0nIDogKHRoaXMuaXNEaXN0YW5jZSgpID8gJ2dkLWRpc3RhbmNlLWFubm90YXRpb24tJyA6ICdnZC1hcnJvdy1hbm5vdGF0aW9uLScpKSArIHRoaXMuaWQsXG4gICAgICAnY2xhc3MnOiAnYW5ub3RhdGlvbi1zdmcnLFxuICAgIH07XG4gIH1cblxuICBpc1BvbHlsaW5lKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLlBPTFlMSU5FLmlkO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjUG9zaXRpb25BbmREaW1lbnNpb24oKSB7XG4gICAgY29uc3QgbGVmdFRvcCA9IG5ldyBQb3NpdGlvbihOdW1iZXIuTUFYX1ZBTFVFLCBOdW1iZXIuTUFYX1ZBTFVFKTtcbiAgICBjb25zdCByaWdodEJvdHRvbSA9IG5ldyBQb3NpdGlvbihOdW1iZXIuTUlOX1ZBTFVFLCBOdW1iZXIuTUlOX1ZBTFVFKTtcbiAgICBpZiAodGhpcy5pc1BvbHlsaW5lKCkpIHtcbiAgICAgIGZvciAoY29uc3QgcG9pbnQgb2YgdGhpcy5wb2ludHMpIHtcbiAgICAgICAgbGVmdFRvcC5sZWZ0ID0gTWF0aC5taW4ocG9pbnQubGVmdCwgbGVmdFRvcC5sZWZ0KTtcbiAgICAgICAgbGVmdFRvcC50b3AgPSBNYXRoLm1pbihwb2ludC50b3AsIGxlZnRUb3AudG9wKTtcbiAgICAgICAgcmlnaHRCb3R0b20ubGVmdCA9IE1hdGgubWF4KHBvaW50LmxlZnQsIHJpZ2h0Qm90dG9tLmxlZnQpO1xuICAgICAgICByaWdodEJvdHRvbS50b3AgPSBNYXRoLm1heChwb2ludC50b3AsIHJpZ2h0Qm90dG9tLnRvcCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnRUb3AubGVmdCA9IE1hdGgubWluKHRoaXMucG9zaXRpb24ubGVmdCwgdGhpcy5lbmRQb3NpdGlvbi5sZWZ0KTtcbiAgICAgIGxlZnRUb3AudG9wID0gTWF0aC5taW4odGhpcy5wb3NpdGlvbi50b3AsIHRoaXMuZW5kUG9zaXRpb24udG9wKTtcbiAgICAgIHJpZ2h0Qm90dG9tLmxlZnQgPSBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLmxlZnQsIHRoaXMuZW5kUG9zaXRpb24ubGVmdCk7XG4gICAgICByaWdodEJvdHRvbS50b3AgPSBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnRvcCwgdGhpcy5lbmRQb3NpdGlvbi50b3ApO1xuICAgIH1cbiAgICB0aGlzLmRpbWVuc2lvbi53aWR0aCA9IHJpZ2h0Qm90dG9tLmxlZnQgLSBsZWZ0VG9wLmxlZnQ7XG4gICAgdGhpcy5kaW1lbnNpb24uaGVpZ2h0ID0gcmlnaHRCb3R0b20udG9wIC0gbGVmdFRvcC50b3A7XG4gICAgdGhpcy5sZWZ0VG9wID0gbGVmdFRvcDtcbiAgfVxuXG4gIGNhbGNEaW1lbnNpb25zKGN1cnJlbnRQb3NpdGlvbjogUG9zaXRpb24pIHtcbiAgICBpZiAoY3VycmVudFBvc2l0aW9uLmxlZnQgPD0gdGhpcy5wYWdlV2lkdGggJiYgY3VycmVudFBvc2l0aW9uLmxlZnQgPj0gMCkge1xuICAgICAgdGhpcy5kaW1lbnNpb24ud2lkdGggPSBjdXJyZW50UG9zaXRpb24ubGVmdCAtIHRoaXMucG9zaXRpb24ubGVmdDtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRQb3NpdGlvbi50b3AgPD0gdGhpcy5wYWdlSGVpZ2h0ICYmIGN1cnJlbnRQb3NpdGlvbi50b3AgPj0gMCkge1xuICAgICAgdGhpcy5kaW1lbnNpb24uaGVpZ2h0ID0gY3VycmVudFBvc2l0aW9uLnRvcCAtIHRoaXMucG9zaXRpb24udG9wO1xuICAgIH1cbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaW1lbnNpb24uaGVpZ2h0ID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBNYXRoLmFicyh0aGlzLmRpbWVuc2lvbi5oZWlnaHQpO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGltZW5zaW9uLndpZHRoID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBNYXRoLmFicyh0aGlzLmRpbWVuc2lvbi53aWR0aCk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrRHJhZ2dpbmcobGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcikge1xuICAgIHJldHVybiAhKHRoaXMubGVmdFRvcC5sZWZ0ICsgbGVmdCA8IDAgfHwgdGhpcy5sZWZ0VG9wLnRvcCArIHRvcCA8IDAgfHxcbiAgICAgIHRoaXMubGVmdFRvcC50b3AgKyB0b3AgKyB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgPiB0aGlzLnBhZ2VIZWlnaHQgfHxcbiAgICAgIHRoaXMubGVmdFRvcC5sZWZ0ICsgbGVmdCArIHRoaXMuZGltZW5zaW9uLndpZHRoID4gdGhpcy5wYWdlV2lkdGgpO1xuICB9XG5cbiAgaXNQb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5QT0lOVC5pZDtcbiAgfVxuXG4gIGlzU1ZHKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLlBPTFlMSU5FLmlkIHx8XG4gICAgICB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLkRJU1RBTkNFLmlkIHx8XG4gICAgICB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLkFSUk9XLmlkO1xuICB9XG5cbiAgaXNEaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5ESVNUQU5DRS5pZDtcbiAgfVxuXG4gIGRpc3RhbmNlVGV4dE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHsnZm9udC1zaXplJzogXCIxMnB4XCJ9XG4gIH1cblxuICBpc1BhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuRElTVEFOQ0UuaWQgfHxcbiAgICAgIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuQVJST1cuaWQ7XG4gIH1cblxuICBwcml2YXRlIHNldEVuZFBvc2l0aW9uKHBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgIHRoaXMuZW5kUG9zaXRpb24gPSBQb3NpdGlvbi5jbG9uZShwb3NpdGlvbik7XG4gICAgdGhpcy5wYXRoVmFsdWUgPSBcIk1cIiArIHRoaXMucG9zaXRpb24ubGVmdCArIFwiLFwiICsgdGhpcy5wb3NpdGlvbi50b3AgKyBcIiBMXCIgKyB0aGlzLmVuZFBvc2l0aW9uLmxlZnQgKyBcIixcIiArIHRoaXMuZW5kUG9zaXRpb24udG9wO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRQb2ludChwb3NpdGlvbjogUG9zaXRpb24pIHtcbiAgICB0aGlzLnBvaW50cy5wdXNoKHBvc2l0aW9uKTtcbiAgICB0aGlzLnBvaW50c1ZhbHVlICs9IHBvc2l0aW9uLmxlZnQgKyBcIixcIiArIHBvc2l0aW9uLnRvcCArIFwiIFwiO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREaXN0YW5jZSgpIHtcbiAgICBjb25zdCB4cyA9IHRoaXMucG9zaXRpb24ubGVmdCAtIHRoaXMuZW5kUG9zaXRpb24ubGVmdDtcbiAgICBjb25zdCB5cyA9IHRoaXMucG9zaXRpb24udG9wIC0gdGhpcy5lbmRQb3NpdGlvbi50b3A7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5zcXJ0KHhzICogeHMgKyB5cyAqIHlzKSk7XG4gIH1cblxuICBib3R0b20oKSB7XG4gICAgcmV0dXJuICd1cmwoJyArIHdpbmRvdy5sb2NhdGlvbiArICcjZW5kKSc7XG4gIH1cblxuICBoZWFkKCkge1xuICAgIHJldHVybiB0aGlzLmlzRGlzdGFuY2UoKSA/ICd1cmwoJyArIHdpbmRvdy5sb2NhdGlvbiArICcjc3RhcnQpJyA6IFwiXCI7XG4gIH1cblxuICBnZXRUZXh0WCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXREaXN0YW5jZSgpIC8gMjtcbiAgfVxuXG4gIGlzVGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5URVhUX0ZJRUxELmlkIHx8IHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuV0FURVJNQVJLLmlkO1xuICB9XG5cbiAgZ2V0Rm9ybWF0dGluZygpIHtcbiAgICBjb25zdCBmID0gdGhpcy5mb3JtYXR0aW5nO1xuICAgIGNvbnN0IGZvcm1hdHRpbmcgPSBGb3JtYXR0aW5nLmRlZmF1bHQoKTtcbiAgICBpZiAoZikge1xuICAgICAgZm9ybWF0dGluZy5mb250U2l6ZSA9IGYuZm9udFNpemU7XG4gICAgICBmb3JtYXR0aW5nLmZvbnQgPSBmLmZvbnQ7XG4gICAgICBmb3JtYXR0aW5nLmNvbG9yID0gZi5jb2xvcjtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm1hdHRpbmc7XG4gIH1cblxuICBzYXZlRm9ybWF0dGluZygkZXZlbnQ6IEZvcm1hdHRpbmcpIHtcbiAgICB0aGlzLmZvcm1hdHRpbmcuZm9udFNpemUgPSAkZXZlbnQuZm9udFNpemU7XG4gICAgdGhpcy5mb3JtYXR0aW5nLmZvbnQgPSAkZXZlbnQuZm9udDtcbiAgICB0aGlzLmZvcm1hdHRpbmcuY29sb3IgPSAkZXZlbnQuY29sb3I7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5fcmVtb3ZlQW5ub3RhdGlvblNlcnZpY2UucmVtb3ZlKG5ldyBSZW1vdmVBbm5vdGF0aW9uKHRoaXMuaWQpKTtcbiAgfVxuXG4gIGdldE1lbnVTaGlmdCgpIHtcbiAgICBjb25zdCBtZW51V2lkdGggPSB0aGlzLmlzVGV4dCgpID8gMjY1IDogMTExO1xuICAgIHJldHVybiB0aGlzLmRpbWVuc2lvbi53aWR0aCA+IG1lbnVXaWR0aCA/IDAgOiAodGhpcy5kaW1lbnNpb24ud2lkdGggLSBtZW51V2lkdGgpICogMC41O1xuICB9XG5cbiAgZ2V0TWVudVR5cGUoKSB7XG4gICAgcmV0dXJuIE1lbnVUeXBlLkZPUl9BTk5PVEFUSU9OO1xuICB9XG5cbiAgYWRkQ29tbWVudCgpIHtcbiAgICB0aGlzLl9jb21tZW50QW5ub3RhdGlvblNlcnZpY2UuY29tbWVudChuZXcgQ29tbWVudEFubm90YXRpb24odGhpcy5pZCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUZXh0Rm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuaXNUZXh0KCkgfHwgdGhpcy5pc1RleHRSZXBsYWNlbWVudCgpKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9ICQoXCIjdGV4dC1cIiArIHRoaXMuaWQpO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICB0ZXh0QXJlYUhlaWdodChrZXk6IGFueSwgdGV4dGFyZWE6IGFueSkge1xuICAgIHRoaXMuZGltZW5zaW9uLmhlaWdodCA9IFwiRW50ZXJcIiA9PT0ga2V5ID8gdGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ICsgdGhpcy5mb3JtYXR0aW5nLmZvbnRTaXplIDogdGV4dGFyZWEuc2Nyb2xsSGVpZ2h0O1xuICAgIHRoaXMuZGltZW5zaW9uLndpZHRoID0gdGV4dGFyZWEuc2Nyb2xsV2lkdGg7XG4gIH1cblxuICBoaWRlTWVudSgkZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5fYWN0aXZlQW5ub3RhdGlvblNlcnZpY2UuY2hhbmdlQWN0aXZlKG51bGwpO1xuICB9XG5cbiAgZ2V0QW5ub3RhdGlvbkRhdGEoKTogQW5ub3RhdGlvbkRhdGEge1xuICAgIGNvbnN0IGFubm90YXRpb25EYXRhID0gbmV3IEFubm90YXRpb25EYXRhKCk7XG4gICAgYW5ub3RhdGlvbkRhdGEuaWQgPSB0aGlzLmlkO1xuICAgIGFubm90YXRpb25EYXRhLnRleHQgPSB0aGlzLnRleHRWYWx1ZTtcbiAgICBhbm5vdGF0aW9uRGF0YS5mb250Q29sb3IgPSBwYXJzZUludChVdGlscy50b0hleCh0aGlzLmZvcm1hdHRpbmcuY29sb3IpLnJlcGxhY2UoXCIjXCIsIFwiXCIpLCAxNik7XG4gICAgYW5ub3RhdGlvbkRhdGEuZm9udFNpemUgPSB0aGlzLmZvcm1hdHRpbmcuZm9udFNpemU7XG4gICAgYW5ub3RhdGlvbkRhdGEuZm9udCA9IHRoaXMuZm9ybWF0dGluZy5mb250O1xuICAgIGlmICh0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLlBPSU5ULmlkKSB7XG4gICAgICBhbm5vdGF0aW9uRGF0YS5sZWZ0ID0gdGhpcy5sZWZ0VG9wLmxlZnQgKyAyMDtcbiAgICAgIGFubm90YXRpb25EYXRhLnRvcCA9IHRoaXMubGVmdFRvcC50b3AgKyAyMDtcbiAgICAgIGFubm90YXRpb25EYXRhLmhlaWdodCA9IDA7XG4gICAgICBhbm5vdGF0aW9uRGF0YS53aWR0aCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFubm90YXRpb25EYXRhLmxlZnQgPSB0aGlzLmxlZnRUb3AubGVmdDtcbiAgICAgIGFubm90YXRpb25EYXRhLnRvcCA9IHRoaXMubGVmdFRvcC50b3A7XG4gICAgICBhbm5vdGF0aW9uRGF0YS5oZWlnaHQgPSB0aGlzLmRpbWVuc2lvbi5oZWlnaHQ7XG4gICAgICBhbm5vdGF0aW9uRGF0YS53aWR0aCA9IHRoaXMuZGltZW5zaW9uLndpZHRoO1xuICAgIH1cbiAgICBhbm5vdGF0aW9uRGF0YS5wYWdlTnVtYmVyID0gdGhpcy5wYWdlTnVtYmVyO1xuICAgIGFubm90YXRpb25EYXRhLnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgYW5ub3RhdGlvbkRhdGEuc3ZnUGF0aCA9IHRoaXMuZ2V0U3ZnUGF0aCgpO1xuICAgIHJldHVybiBhbm5vdGF0aW9uRGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3ZnUGF0aCgpIHtcbiAgICBsZXQgc3ZnUGF0aCA9IFwiTVwiO1xuICAgIGlmICh0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLlBPTFlMSU5FLmlkKSB7XG4gICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgbGV0IHByZXZpb3VzWCA9IDAsIHByZXZpb3VzWSA9IDA7XG4gICAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHRoaXMucG9pbnRzKSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIHN2Z1BhdGggKz0gcG9pbnQubGVmdCArIFwiLFwiICsgcG9pbnQudG9wICsgXCJsXCI7XG4gICAgICAgICAgaW5kZXggPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZpb3VzWCA9IHBvaW50LmxlZnQgLSBwcmV2aW91c1g7XG4gICAgICAgICAgcHJldmlvdXNZID0gcG9pbnQudG9wIC0gcHJldmlvdXNZO1xuICAgICAgICAgIHN2Z1BhdGggKz0gcHJldmlvdXNYICsgXCIsXCIgKyBwcmV2aW91c1kgKyBcImxcIjtcbiAgICAgICAgfVxuICAgICAgICBwcmV2aW91c1ggPSBwb2ludC5sZWZ0O1xuICAgICAgICBwcmV2aW91c1kgPSBwb2ludC50b3A7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLkRJU1RBTkNFLmlkIHx8IHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuQVJST1cuaWQpIHtcbiAgICAgIHN2Z1BhdGggKz0gdGhpcy5wb3NpdGlvbi5sZWZ0ICsgXCIsXCIgKyB0aGlzLnBvc2l0aW9uLnRvcCArIFwiIFwiO1xuICAgICAgc3ZnUGF0aCArPSB0aGlzLmVuZFBvc2l0aW9uLmxlZnQgKyBcIixcIiArIHRoaXMuZW5kUG9zaXRpb24udG9wICsgXCIgXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN2Z1BhdGggPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnUGF0aDtcbiAgfVxuXG4gIHByaXZhdGUgb25QYWdlKHBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgIHJldHVybiBwb3NpdGlvbi5sZWZ0IDw9IHRoaXMucGFnZVdpZHRoICYmIHBvc2l0aW9uLnRvcCA8PSB0aGlzLnBhZ2VIZWlnaHQgJiZcbiAgICAgIHBvc2l0aW9uLmxlZnQgPj0gMCAmJiBwb3NpdGlvbi50b3AgPj0gMDtcbiAgfVxufVxuIl19