/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AnnotationData, AnnotationType, CommentAnnotation, Dimension, Position, RemoveAnnotation } from "../annotation-models";
import { ActiveAnnotationService } from "../active-annotation.service";
import { Formatting, Utils, MenuType } from "@groupdocs.examples.angular/common-components";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hbm5vdGF0aW9uL2Fubm90YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQ0wsY0FBYyxFQUNkLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFFBQVEsRUFDUixnQkFBZ0IsRUFDakIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUMxRixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7TUFFM0IsQ0FBQyxHQUFHLE1BQU07QUFPaEIsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBc0I5QixZQUFvQix3QkFBaUQsRUFDakQsd0JBQWlELEVBQ2pELHlCQUFtRDtRQUZuRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO1FBQ2pELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBeUI7UUFDakQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQWhCdkUsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLGNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFaEMsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGdCQUFXLEdB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O0lBQ2pCLHNDQUFhOztJQUNiLHlDQUFrQzs7Ozs7SUFFbEMsMENBQThDOzs7OztJQUM5QyxxQ0FBb0I7Ozs7O0lBQ3BCLDBDQUE4Qjs7Ozs7SUFFbEIsdURBQXlEOzs7OztJQUN6RCx1REFBeUQ7Ozs7O0lBQ3pELHdEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQW5ub3RhdGlvbkRhdGEsXG4gIEFubm90YXRpb25UeXBlLFxuICBDb21tZW50QW5ub3RhdGlvbixcbiAgRGltZW5zaW9uLFxuICBQb3NpdGlvbixcbiAgUmVtb3ZlQW5ub3RhdGlvblxufSBmcm9tIFwiLi4vYW5ub3RhdGlvbi1tb2RlbHNcIjtcbmltcG9ydCB7QWN0aXZlQW5ub3RhdGlvblNlcnZpY2V9IGZyb20gXCIuLi9hY3RpdmUtYW5ub3RhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0Zvcm1hdHRpbmcsIFV0aWxzLCBNZW51VHlwZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtSZW1vdmVBbm5vdGF0aW9uU2VydmljZX0gZnJvbSBcIi4uL3JlbW92ZS1hbm5vdGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29tbWVudEFubm90YXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vY29tbWVudC1hbm5vdGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1hbm5vdGF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fubm90YXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hbm5vdGF0aW9uLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgaWQ6IG51bWJlcjtcbiAgcG9zaXRpb246IFBvc2l0aW9uO1xuICBsZWZ0VG9wOiBQb3NpdGlvbjtcbiAgdHlwZTogc3RyaW5nO1xuICBwYWdlV2lkdGg6IG51bWJlcjtcbiAgcGFnZUhlaWdodDogbnVtYmVyO1xuICBhY3RpdmUgPSB0cnVlO1xuICBkaW1lbnNpb24gPSBuZXcgRGltZW5zaW9uKDAsIDApO1xuICBwYWdlTnVtYmVyOiBudW1iZXI7XG4gIHRleHRWYWx1ZSA9IFwiXCI7XG4gIHBhdGhWYWx1ZTogc3RyaW5nO1xuICBkaXN0YW5jZVZhbHVlID0gJzBweCc7XG4gIHBvaW50c1ZhbHVlID0gXCJcIjtcbiAgc3ZnUGF0aCA9IFwiXCI7XG4gIGZvcm1hdHRpbmcgPSBGb3JtYXR0aW5nLmRlZmF1bHQoKTtcblxuICBwcml2YXRlIG9sZFBvc2l0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG4gIHByaXZhdGUgcG9pbnRzID0gW107XG4gIHByaXZhdGUgZW5kUG9zaXRpb246IFBvc2l0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FjdGl2ZUFubm90YXRpb25TZXJ2aWNlOiBBY3RpdmVBbm5vdGF0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVtb3ZlQW5ub3RhdGlvblNlcnZpY2U6IFJlbW92ZUFubm90YXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jb21tZW50QW5ub3RhdGlvblNlcnZpY2U6IENvbW1lbnRBbm5vdGF0aW9uU2VydmljZSkge1xuICAgIHRoaXMuX2FjdGl2ZUFubm90YXRpb25TZXJ2aWNlLmFjdGl2ZUNoYW5nZS5zdWJzY3JpYmUoKGlkOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy5pZCA9PT0gaWQ7XG4gICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zZXRUZXh0Rm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpc09uUGFnZShwb3NpdGlvbikge1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbiAgICByZXR1cm4gY3VycmVudFBhZ2UgJiYgJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KCkgJiZcbiAgICAgICgkKGN1cnJlbnRQYWdlKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5oYXNDbGFzcyhcInBhZ2VcIikgfHxcbiAgICAgICAgJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuaGFzQ2xhc3MoXCJwYWdlXCIpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGVmdFRvcCA9IFBvc2l0aW9uLmNsb25lKHRoaXMucG9zaXRpb24pO1xuICAgIGlmICh0aGlzLmlzUG9seWxpbmUoKSkge1xuICAgICAgaWYgKHRoaXMuc3ZnUGF0aCkge1xuICAgICAgICBjb25zdCBwYXJzZWRQb2ludHMgPSB0aGlzLnN2Z1BhdGgucmVwbGFjZShcIk1cIiwgXCJcIikuc3BsaXQoJ0wnKTtcbiAgICAgICAgbGV0IHggPSBwYXJzZUZsb2F0KHBhcnNlZFBvaW50c1swXS5zcGxpdChcIixcIilbMF0pO1xuICAgICAgICBsZXQgeSA9IHBhcnNlRmxvYXQocGFyc2VkUG9pbnRzWzBdLnNwbGl0KFwiLFwiKVsxXSk7XG4gICAgICAgIGNvbnN0IGNvbXAgPSB0aGlzO1xuICAgICAgICBwYXJzZWRQb2ludHMuZm9yRWFjaChmdW5jdGlvbiAocG9pbnQsIGluZGV4KSB7XG4gICAgICAgICAgaWYgKGluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICBpZiAocG9pbnQgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgY29tcC5hZGRQb2ludChuZXcgUG9zaXRpb24oeCwgeSkpO1xuICAgICAgICAgICAgICB4ID0gKHggKyBwYXJzZUZsb2F0KHBvaW50LnNwbGl0KFwiLFwiKVswXSkpO1xuICAgICAgICAgICAgICB5ID0gKHkgKyBwYXJzZUZsb2F0KHBvaW50LnNwbGl0KFwiLFwiKVsxXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZFBvaW50KHRoaXMucG9zaXRpb24pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5pc1BhdGgoKSkge1xuICAgICAgaWYgKHRoaXMuc3ZnUGF0aCB8fCAodGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5BUlJPVy5pZCAmJiAhdGhpcy5kaW1lbnNpb24uaXNOb25lKCkpKSB7XG4gICAgICAgIGNvbnN0IGVuZCA9IG5ldyBQb3NpdGlvbih0aGlzLnBvc2l0aW9uLmxlZnQgKyB0aGlzLmRpbWVuc2lvbi53aWR0aCwgdGhpcy5wb3NpdGlvbi50b3AgKyB0aGlzLmRpbWVuc2lvbi5oZWlnaHQpO1xuICAgICAgICB0aGlzLnNldEVuZFBvc2l0aW9uKGVuZCk7XG4gICAgICAgIGlmICh0aGlzLmRpbWVuc2lvbi5oZWlnaHQgPCAwKSB7XG4gICAgICAgICAgdGhpcy5sZWZ0VG9wLnRvcCArPSB0aGlzLmRpbWVuc2lvbi5oZWlnaHQ7XG4gICAgICAgICAgdGhpcy5kaW1lbnNpb24uaGVpZ2h0ID0gdGhpcy5kaW1lbnNpb24uaGVpZ2h0ICogKC0xKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaW1lbnNpb24ud2lkdGggPCAwKSB7XG4gICAgICAgICAgdGhpcy5sZWZ0VG9wLmxlZnQgKz0gdGhpcy5kaW1lbnNpb24ud2lkdGg7XG4gICAgICAgICAgdGhpcy5kaW1lbnNpb24ud2lkdGggPSB0aGlzLmRpbWVuc2lvbi53aWR0aCAqICgtMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0RW5kUG9zaXRpb24odGhpcy5wb3NpdGlvbik7XG4gICAgICB9XG4gICAgICB0aGlzLmRpc3RhbmNlVmFsdWUgPSB0aGlzLmdldERpc3RhbmNlKCkgKyBcInB4XCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLlBPSU5ULmlkKSB7XG4gICAgICB0aGlzLmluaXRQb2ludCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldEVuZFBvc2l0aW9uKHRoaXMucG9zaXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFRleHRGb2N1cygpO1xuICB9XG5cbiAgYWN0aXZhdGlvbigpIHtcbiAgICB0aGlzLl9hY3RpdmVBbm5vdGF0aW9uU2VydmljZS5jaGFuZ2VBY3RpdmUodGhpcy5pZCk7XG4gIH1cblxuICB3aWR0aCgkZXZlbnQpIHtcbiAgICBpZiAodGhpcy5jaGVja0RyYWdnaW5nKCRldmVudCwgMCkpIHtcbiAgICAgIHRoaXMuZGltZW5zaW9uLndpZHRoICs9ICRldmVudDtcbiAgICB9XG4gIH1cblxuICBoZWlnaHQoJGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY2hlY2tEcmFnZ2luZygwLCAkZXZlbnQpKSB7XG4gICAgICB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgKz0gJGV2ZW50O1xuICAgIH1cbiAgfVxuXG4gIGxlZnQoJGV2ZW50KSB7XG4gICAgdGhpcy5wb3NpdGlvbi5sZWZ0ICs9ICRldmVudDtcbiAgICB0aGlzLmNvcnJlY3RQb3NpdGlvbigpO1xuICAgIHRoaXMucmVmcmVzaExlZnRUb3AoKTtcbiAgfVxuXG4gIHRvcCgkZXZlbnQpIHtcbiAgICB0aGlzLnBvc2l0aW9uLnRvcCArPSAkZXZlbnQ7XG4gICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgICB0aGlzLnJlZnJlc2hMZWZ0VG9wKCk7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hMZWZ0VG9wKCkge1xuICAgIHRoaXMubGVmdFRvcC5sZWZ0ID0gdGhpcy5wb3NpdGlvbi5sZWZ0O1xuICAgIHRoaXMubGVmdFRvcC50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcDtcbiAgfVxuXG4gIHByaXZhdGUgY29ycmVjdFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLmxlZnQgPCAwKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLmxlZnQgPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3NpdGlvbi50b3AgPCAwKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnRvcCArIHRoaXMuZGltZW5zaW9uLmhlaWdodCA+IHRoaXMucGFnZUhlaWdodCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBhZ2VIZWlnaHQgLSB0aGlzLmRpbWVuc2lvbi5oZWlnaHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc2l0aW9uLmxlZnQgKyB0aGlzLmRpbWVuc2lvbi53aWR0aCA+IHRoaXMucGFnZVdpZHRoKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLmxlZnQgPSB0aGlzLnBhZ2VXaWR0aCAtIHRoaXMuZGltZW5zaW9uLndpZHRoO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdPdmVyKCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgZHJhZ1N0YXJ0KCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5vbGRQb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcbiAgICBpZiAoJGV2ZW50LmRhdGFUcmFuc2Zlcikge1xuICAgICAgJGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ2ZvbycpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRQb2ludCgpIHtcbiAgICB0aGlzLmRpbWVuc2lvbiA9IG5ldyBEaW1lbnNpb24oNDAsIDQwKTtcbiAgICB0aGlzLnBvc2l0aW9uLmxlZnQgPSB0aGlzLnBvc2l0aW9uLmxlZnQgLSAyMDtcbiAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wIC0gMjA7XG4gICAgdGhpcy5sZWZ0VG9wID0gUG9zaXRpb24uY2xvbmUodGhpcy5wb3NpdGlvbik7XG4gIH1cblxuICBkcmFnZ2luZygkZXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcbiAgICBpZiAocG9zaXRpb24ueCAmJiBwb3NpdGlvbi55ICYmIEFubm90YXRpb25Db21wb25lbnQuaXNPblBhZ2UocG9zaXRpb24pKSB7XG4gICAgICBjb25zdCBsZWZ0ID0gcG9zaXRpb24ueCAtIHRoaXMub2xkUG9zaXRpb24ueDtcbiAgICAgIGNvbnN0IHRvcCA9IHBvc2l0aW9uLnkgLSB0aGlzLm9sZFBvc2l0aW9uLnk7XG4gICAgICBpZiAodGhpcy5pc1BvbHlsaW5lKCkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrRHJhZ2dpbmcobGVmdCwgdG9wKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvaW50c1ZhbHVlID0gXCJcIjtcbiAgICAgICAgZm9yIChjb25zdCBwb2ludCBvZiB0aGlzLnBvaW50cykge1xuICAgICAgICAgIHBvaW50LmxlZnQgPSBwb2ludC5sZWZ0ICsgbGVmdDtcbiAgICAgICAgICBwb2ludC50b3AgPSBwb2ludC50b3AgKyB0b3A7XG4gICAgICAgICAgdGhpcy5wb2ludHNWYWx1ZSArPSBwb2ludC5sZWZ0ICsgXCIsXCIgKyBwb2ludC50b3AgKyBcIiBcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxlZnRUb3AubGVmdCArPSBsZWZ0O1xuICAgICAgICB0aGlzLmxlZnRUb3AudG9wICs9IHRvcDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1BhdGgoKSkge1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tEcmFnZ2luZyhsZWZ0LCB0b3ApKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zaXRpb24ubGVmdCArPSBsZWZ0O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCArPSB0b3A7XG4gICAgICAgIHRoaXMuZW5kUG9zaXRpb24ubGVmdCArPSBsZWZ0O1xuICAgICAgICB0aGlzLmVuZFBvc2l0aW9uLnRvcCArPSB0b3A7XG4gICAgICAgIHRoaXMucGF0aFZhbHVlID0gXCJNXCIgKyB0aGlzLnBvc2l0aW9uLmxlZnQgKyBcIixcIiArIHRoaXMucG9zaXRpb24udG9wICsgXCIgTFwiICsgdGhpcy5lbmRQb3NpdGlvbi5sZWZ0ICsgXCIsXCIgKyB0aGlzLmVuZFBvc2l0aW9uLnRvcDtcbiAgICAgICAgdGhpcy5kaXN0YW5jZVZhbHVlID0gdGhpcy5nZXREaXN0YW5jZSgpICsgXCJweFwiO1xuICAgICAgICB0aGlzLmxlZnRUb3AubGVmdCArPSBsZWZ0O1xuICAgICAgICB0aGlzLmxlZnRUb3AudG9wICs9IHRvcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ubGVmdCArPSBsZWZ0O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCArPSB0b3A7XG4gICAgICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XG4gICAgICAgIHRoaXMucmVmcmVzaExlZnRUb3AoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub2xkUG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICBnZXRBbm5vdGF0aW9uQ2xhc3MoKSB7XG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVC5pZDpcbiAgICAgICAgcmV0dXJuIFwiZ2QtYW5ub3RhdGlvbi13cmFwcGVyLWJvcmRlciBnZC10ZXh0LWFubm90YXRpb25cIjtcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9TVFJJS0VPVVQuaWQ6XG4gICAgICAgIHJldHVybiBcImdkLWFubm90YXRpb24td3JhcHBlci1ib3JkZXIgZ2QtdGV4dC1hbm5vdGF0aW9uIGdkLXRleHQtc3RyaWtlb3V0LWFubm90YXRpb25cIjtcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9VTkRFUkxJTkUuaWQ6XG4gICAgICAgIHJldHVybiBcImdkLWFubm90YXRpb24td3JhcHBlci1ib3JkZXIgZ2QtdGV4dC1hbm5vdGF0aW9uIGdkLXRleHQtdW5kZXJsaW5lLWFubm90YXRpb25cIjtcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9SRURBQ1RJT04uaWQ6XG4gICAgICAgIHJldHVybiBcImdkLWFubm90YXRpb24td3JhcHBlci1ib3JkZXIgZ2QtdGV4dC1yZWRhY3Rpb24tYW5ub3RhdGlvblwiO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1JFUExBQ0VNRU5ULmlkOlxuICAgICAgICByZXR1cm4gXCJnZC1hbm5vdGF0aW9uLXdyYXBwZXItYm9yZGVyIGdkLXRleHQtcmVwbGFjZW1lbnQtYW5ub3RhdGlvblwiO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5QT0lOVC5pZDpcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJnZC1hbm5vdGF0aW9uLXdyYXBwZXItYm9yZGVyXCI7XG4gICAgfVxuICB9XG5cbiAgaXNTdHJpa2VvdXRPclVuZGVybGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5URVhUX1NUUklLRU9VVC5pZCB8fCB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLlRFWFRfVU5ERVJMSU5FLmlkO1xuICB9XG5cbiAgaXNUZXh0UmVwbGFjZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuVEVYVF9SRVBMQUNFTUVOVC5pZDtcbiAgfVxuXG4gIHNhdmVUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRleHRWYWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZHJhdyhwb3NpdGlvbjogUG9zaXRpb24pIHtcbiAgICBpZiAodGhpcy5vblBhZ2UocG9zaXRpb24pKSB7XG4gICAgICBpZiAodGhpcy5pc1BvbHlsaW5lKCkpIHtcbiAgICAgICAgdGhpcy5hZGRQb2ludChwb3NpdGlvbik7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNQYXRoKCkpIHtcbiAgICAgICAgdGhpcy5zZXRFbmRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VWYWx1ZSA9IHRoaXMuZ2V0RGlzdGFuY2UoKSArIFwicHhcIjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2FsY1Bvc2l0aW9uQW5kRGltZW5zaW9uKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0U3R5bGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnc3Ryb2tlJzogJyM1NzlBRjAnLFxuICAgICAgJ3N0cm9rZS13aWR0aCc6IDIsXG4gICAgICAnZmlsbC1vcGFjaXR5JzogMCxcbiAgICAgICdpZCc6ICh0aGlzLmlzUG9seWxpbmUoKSA/ICdnZC1wb2x5bGluZS1hbm5vdGF0aW9uLScgOiAodGhpcy5pc0Rpc3RhbmNlKCkgPyAnZ2QtZGlzdGFuY2UtYW5ub3RhdGlvbi0nIDogJ2dkLWFycm93LWFubm90YXRpb24tJykpICsgdGhpcy5pZCxcbiAgICAgICdjbGFzcyc6ICdhbm5vdGF0aW9uLXN2ZycsXG4gICAgfTtcbiAgfVxuXG4gIGlzUG9seWxpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUuaWQ7XG4gIH1cblxuICBwcml2YXRlIGNhbGNQb3NpdGlvbkFuZERpbWVuc2lvbigpIHtcbiAgICBjb25zdCBsZWZ0VG9wID0gbmV3IFBvc2l0aW9uKE51bWJlci5NQVhfVkFMVUUsIE51bWJlci5NQVhfVkFMVUUpO1xuICAgIGNvbnN0IHJpZ2h0Qm90dG9tID0gbmV3IFBvc2l0aW9uKE51bWJlci5NSU5fVkFMVUUsIE51bWJlci5NSU5fVkFMVUUpO1xuICAgIGlmICh0aGlzLmlzUG9seWxpbmUoKSkge1xuICAgICAgZm9yIChjb25zdCBwb2ludCBvZiB0aGlzLnBvaW50cykge1xuICAgICAgICBsZWZ0VG9wLmxlZnQgPSBNYXRoLm1pbihwb2ludC5sZWZ0LCBsZWZ0VG9wLmxlZnQpO1xuICAgICAgICBsZWZ0VG9wLnRvcCA9IE1hdGgubWluKHBvaW50LnRvcCwgbGVmdFRvcC50b3ApO1xuICAgICAgICByaWdodEJvdHRvbS5sZWZ0ID0gTWF0aC5tYXgocG9pbnQubGVmdCwgcmlnaHRCb3R0b20ubGVmdCk7XG4gICAgICAgIHJpZ2h0Qm90dG9tLnRvcCA9IE1hdGgubWF4KHBvaW50LnRvcCwgcmlnaHRCb3R0b20udG9wKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdFRvcC5sZWZ0ID0gTWF0aC5taW4odGhpcy5wb3NpdGlvbi5sZWZ0LCB0aGlzLmVuZFBvc2l0aW9uLmxlZnQpO1xuICAgICAgbGVmdFRvcC50b3AgPSBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnRvcCwgdGhpcy5lbmRQb3NpdGlvbi50b3ApO1xuICAgICAgcmlnaHRCb3R0b20ubGVmdCA9IE1hdGgubWF4KHRoaXMucG9zaXRpb24ubGVmdCwgdGhpcy5lbmRQb3NpdGlvbi5sZWZ0KTtcbiAgICAgIHJpZ2h0Qm90dG9tLnRvcCA9IE1hdGgubWF4KHRoaXMucG9zaXRpb24udG9wLCB0aGlzLmVuZFBvc2l0aW9uLnRvcCk7XG4gICAgfVxuICAgIHRoaXMuZGltZW5zaW9uLndpZHRoID0gcmlnaHRCb3R0b20ubGVmdCAtIGxlZnRUb3AubGVmdDtcbiAgICB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgPSByaWdodEJvdHRvbS50b3AgLSBsZWZ0VG9wLnRvcDtcbiAgICB0aGlzLmxlZnRUb3AgPSBsZWZ0VG9wO1xuICB9XG5cbiAgY2FsY0RpbWVuc2lvbnMoY3VycmVudFBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgIGlmIChjdXJyZW50UG9zaXRpb24ubGVmdCA8PSB0aGlzLnBhZ2VXaWR0aCAmJiBjdXJyZW50UG9zaXRpb24ubGVmdCA+PSAwKSB7XG4gICAgICB0aGlzLmRpbWVuc2lvbi53aWR0aCA9IGN1cnJlbnRQb3NpdGlvbi5sZWZ0IC0gdGhpcy5wb3NpdGlvbi5sZWZ0O1xuICAgIH1cbiAgICBpZiAoY3VycmVudFBvc2l0aW9uLnRvcCA8PSB0aGlzLnBhZ2VIZWlnaHQgJiYgY3VycmVudFBvc2l0aW9uLnRvcCA+PSAwKSB7XG4gICAgICB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgPSBjdXJyZW50UG9zaXRpb24udG9wIC0gdGhpcy5wb3NpdGlvbi50b3A7XG4gICAgfVxuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IE1hdGguYWJzKHRoaXMuZGltZW5zaW9uLmhlaWdodCk7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaW1lbnNpb24ud2lkdGggPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IE1hdGguYWJzKHRoaXMuZGltZW5zaW9uLndpZHRoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tEcmFnZ2luZyhsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyKSB7XG4gICAgcmV0dXJuICEodGhpcy5sZWZ0VG9wLmxlZnQgKyBsZWZ0IDwgMCB8fCB0aGlzLmxlZnRUb3AudG9wICsgdG9wIDwgMCB8fFxuICAgICAgdGhpcy5sZWZ0VG9wLnRvcCArIHRvcCArIHRoaXMuZGltZW5zaW9uLmhlaWdodCA+IHRoaXMucGFnZUhlaWdodCB8fFxuICAgICAgdGhpcy5sZWZ0VG9wLmxlZnQgKyBsZWZ0ICsgdGhpcy5kaW1lbnNpb24ud2lkdGggPiB0aGlzLnBhZ2VXaWR0aCk7XG4gIH1cblxuICBpc1BvaW50KCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLlBPSU5ULmlkO1xuICB9XG5cbiAgaXNTVkcoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUuaWQgfHxcbiAgICAgIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuRElTVEFOQ0UuaWQgfHxcbiAgICAgIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuQVJST1cuaWQ7XG4gIH1cblxuICBpc0Rpc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLkRJU1RBTkNFLmlkO1xuICB9XG5cbiAgZGlzdGFuY2VUZXh0T3B0aW9ucygpIHtcbiAgICByZXR1cm4geydmb250LXNpemUnOiBcIjEycHhcIn1cbiAgfVxuXG4gIGlzUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5ESVNUQU5DRS5pZCB8fFxuICAgICAgdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5BUlJPVy5pZDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RW5kUG9zaXRpb24ocG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgdGhpcy5lbmRQb3NpdGlvbiA9IFBvc2l0aW9uLmNsb25lKHBvc2l0aW9uKTtcbiAgICB0aGlzLnBhdGhWYWx1ZSA9IFwiTVwiICsgdGhpcy5wb3NpdGlvbi5sZWZ0ICsgXCIsXCIgKyB0aGlzLnBvc2l0aW9uLnRvcCArIFwiIExcIiArIHRoaXMuZW5kUG9zaXRpb24ubGVmdCArIFwiLFwiICsgdGhpcy5lbmRQb3NpdGlvbi50b3A7XG4gIH1cblxuICBwcml2YXRlIGFkZFBvaW50KHBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgIHRoaXMucG9pbnRzLnB1c2gocG9zaXRpb24pO1xuICAgIHRoaXMucG9pbnRzVmFsdWUgKz0gcG9zaXRpb24ubGVmdCArIFwiLFwiICsgcG9zaXRpb24udG9wICsgXCIgXCI7XG4gIH1cblxuICBwcml2YXRlIGdldERpc3RhbmNlKCkge1xuICAgIGNvbnN0IHhzID0gdGhpcy5wb3NpdGlvbi5sZWZ0IC0gdGhpcy5lbmRQb3NpdGlvbi5sZWZ0O1xuICAgIGNvbnN0IHlzID0gdGhpcy5wb3NpdGlvbi50b3AgLSB0aGlzLmVuZFBvc2l0aW9uLnRvcDtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnNxcnQoeHMgKiB4cyArIHlzICogeXMpKTtcbiAgfVxuXG4gIGJvdHRvbSgpIHtcbiAgICByZXR1cm4gJ3VybCgnICsgd2luZG93LmxvY2F0aW9uICsgJyNlbmQpJztcbiAgfVxuXG4gIGhlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNEaXN0YW5jZSgpID8gJ3VybCgnICsgd2luZG93LmxvY2F0aW9uICsgJyNzdGFydCknIDogXCJcIjtcbiAgfVxuXG4gIGdldFRleHRYKCkge1xuICAgIHJldHVybiB0aGlzLmdldERpc3RhbmNlKCkgLyAyO1xuICB9XG5cbiAgaXNUZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLlRFWFRfRklFTEQuaWQgfHwgdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5XQVRFUk1BUksuaWQ7XG4gIH1cblxuICBnZXRGb3JtYXR0aW5nKCkge1xuICAgIGNvbnN0IGYgPSB0aGlzLmZvcm1hdHRpbmc7XG4gICAgY29uc3QgZm9ybWF0dGluZyA9IEZvcm1hdHRpbmcuZGVmYXVsdCgpO1xuICAgIGlmIChmKSB7XG4gICAgICBmb3JtYXR0aW5nLmZvbnRTaXplID0gZi5mb250U2l6ZTtcbiAgICAgIGZvcm1hdHRpbmcuZm9udCA9IGYuZm9udDtcbiAgICAgIGZvcm1hdHRpbmcuY29sb3IgPSBmLmNvbG9yO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGluZztcbiAgfVxuXG4gIHNhdmVGb3JtYXR0aW5nKCRldmVudDogRm9ybWF0dGluZykge1xuICAgIHRoaXMuZm9ybWF0dGluZy5mb250U2l6ZSA9ICRldmVudC5mb250U2l6ZTtcbiAgICB0aGlzLmZvcm1hdHRpbmcuZm9udCA9ICRldmVudC5mb250O1xuICAgIHRoaXMuZm9ybWF0dGluZy5jb2xvciA9ICRldmVudC5jb2xvcjtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLl9yZW1vdmVBbm5vdGF0aW9uU2VydmljZS5yZW1vdmUobmV3IFJlbW92ZUFubm90YXRpb24odGhpcy5pZCkpO1xuICB9XG5cbiAgZ2V0TWVudVNoaWZ0KCkge1xuICAgIGNvbnN0IG1lbnVXaWR0aCA9IHRoaXMuaXNUZXh0KCkgPyAyNjUgOiAxMTE7XG4gICAgcmV0dXJuIHRoaXMuZGltZW5zaW9uLndpZHRoID4gbWVudVdpZHRoID8gMCA6ICh0aGlzLmRpbWVuc2lvbi53aWR0aCAtIG1lbnVXaWR0aCkgKiAwLjU7XG4gIH1cblxuICBnZXRNZW51VHlwZSgpIHtcbiAgICByZXR1cm4gTWVudVR5cGUuRk9SX0FOTk9UQVRJT047XG4gIH1cblxuICBhZGRDb21tZW50KCkge1xuICAgIHRoaXMuX2NvbW1lbnRBbm5vdGF0aW9uU2VydmljZS5jb21tZW50KG5ldyBDb21tZW50QW5ub3RhdGlvbih0aGlzLmlkKSk7XG4gIH1cblxuICBwcml2YXRlIHNldFRleHRGb2N1cygpIHtcbiAgICBpZiAodGhpcy5pc1RleHQoKSB8fCB0aGlzLmlzVGV4dFJlcGxhY2VtZW50KCkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gJChcIiN0ZXh0LVwiICsgdGhpcy5pZCk7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIHRleHRBcmVhSGVpZ2h0KGtleTogYW55LCB0ZXh0YXJlYTogYW55KSB7XG4gICAgdGhpcy5kaW1lbnNpb24uaGVpZ2h0ID0gXCJFbnRlclwiID09PSBrZXkgPyB0ZXh0YXJlYS5zY3JvbGxIZWlnaHQgKyB0aGlzLmZvcm1hdHRpbmcuZm9udFNpemUgOiB0ZXh0YXJlYS5zY3JvbGxIZWlnaHQ7XG4gICAgdGhpcy5kaW1lbnNpb24ud2lkdGggPSB0ZXh0YXJlYS5zY3JvbGxXaWR0aDtcbiAgfVxuXG4gIGhpZGVNZW51KCRldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLl9hY3RpdmVBbm5vdGF0aW9uU2VydmljZS5jaGFuZ2VBY3RpdmUobnVsbCk7XG4gIH1cblxuICBnZXRBbm5vdGF0aW9uRGF0YSgpOiBBbm5vdGF0aW9uRGF0YSB7XG4gICAgY29uc3QgYW5ub3RhdGlvbkRhdGEgPSBuZXcgQW5ub3RhdGlvbkRhdGEoKTtcbiAgICBhbm5vdGF0aW9uRGF0YS5pZCA9IHRoaXMuaWQ7XG4gICAgYW5ub3RhdGlvbkRhdGEudGV4dCA9IHRoaXMudGV4dFZhbHVlO1xuICAgIGFubm90YXRpb25EYXRhLmZvbnRDb2xvciA9IHBhcnNlSW50KFV0aWxzLnRvSGV4KHRoaXMuZm9ybWF0dGluZy5jb2xvcikucmVwbGFjZShcIiNcIiwgXCJcIiksIDE2KTtcbiAgICBhbm5vdGF0aW9uRGF0YS5mb250U2l6ZSA9IHRoaXMuZm9ybWF0dGluZy5mb250U2l6ZTtcbiAgICBhbm5vdGF0aW9uRGF0YS5mb250ID0gdGhpcy5mb3JtYXR0aW5nLmZvbnQ7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuUE9JTlQuaWQpIHtcbiAgICAgIGFubm90YXRpb25EYXRhLmxlZnQgPSB0aGlzLmxlZnRUb3AubGVmdCArIDIwO1xuICAgICAgYW5ub3RhdGlvbkRhdGEudG9wID0gdGhpcy5sZWZ0VG9wLnRvcCArIDIwO1xuICAgICAgYW5ub3RhdGlvbkRhdGEuaGVpZ2h0ID0gMDtcbiAgICAgIGFubm90YXRpb25EYXRhLndpZHRoID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgYW5ub3RhdGlvbkRhdGEubGVmdCA9IHRoaXMubGVmdFRvcC5sZWZ0O1xuICAgICAgYW5ub3RhdGlvbkRhdGEudG9wID0gdGhpcy5sZWZ0VG9wLnRvcDtcbiAgICAgIGFubm90YXRpb25EYXRhLmhlaWdodCA9IHRoaXMuZGltZW5zaW9uLmhlaWdodDtcbiAgICAgIGFubm90YXRpb25EYXRhLndpZHRoID0gdGhpcy5kaW1lbnNpb24ud2lkdGg7XG4gICAgfVxuICAgIGFubm90YXRpb25EYXRhLnBhZ2VOdW1iZXIgPSB0aGlzLnBhZ2VOdW1iZXI7XG4gICAgYW5ub3RhdGlvbkRhdGEudHlwZSA9IHRoaXMudHlwZTtcbiAgICBhbm5vdGF0aW9uRGF0YS5zdmdQYXRoID0gdGhpcy5nZXRTdmdQYXRoKCk7XG4gICAgcmV0dXJuIGFubm90YXRpb25EYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdmdQYXRoKCkge1xuICAgIGxldCBzdmdQYXRoID0gXCJNXCI7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUuaWQpIHtcbiAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICBsZXQgcHJldmlvdXNYID0gMCwgcHJldmlvdXNZID0gMDtcbiAgICAgIGZvciAoY29uc3QgcG9pbnQgb2YgdGhpcy5wb2ludHMpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgc3ZnUGF0aCArPSBwb2ludC5sZWZ0ICsgXCIsXCIgKyBwb2ludC50b3AgKyBcImxcIjtcbiAgICAgICAgICBpbmRleCA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldmlvdXNYID0gcG9pbnQubGVmdCAtIHByZXZpb3VzWDtcbiAgICAgICAgICBwcmV2aW91c1kgPSBwb2ludC50b3AgLSBwcmV2aW91c1k7XG4gICAgICAgICAgc3ZnUGF0aCArPSBwcmV2aW91c1ggKyBcIixcIiArIHByZXZpb3VzWSArIFwibFwiO1xuICAgICAgICB9XG4gICAgICAgIHByZXZpb3VzWCA9IHBvaW50LmxlZnQ7XG4gICAgICAgIHByZXZpb3VzWSA9IHBvaW50LnRvcDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuRElTVEFOQ0UuaWQgfHwgdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5BUlJPVy5pZCkge1xuICAgICAgc3ZnUGF0aCArPSB0aGlzLnBvc2l0aW9uLmxlZnQgKyBcIixcIiArIHRoaXMucG9zaXRpb24udG9wICsgXCIgXCI7XG4gICAgICBzdmdQYXRoICs9IHRoaXMuZW5kUG9zaXRpb24ubGVmdCArIFwiLFwiICsgdGhpcy5lbmRQb3NpdGlvbi50b3AgKyBcIiBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ZnUGF0aCA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBzdmdQYXRoO1xuICB9XG5cbiAgcHJpdmF0ZSBvblBhZ2UocG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uLmxlZnQgPD0gdGhpcy5wYWdlV2lkdGggJiYgcG9zaXRpb24udG9wIDw9IHRoaXMucGFnZUhlaWdodCAmJlxuICAgICAgcG9zaXRpb24ubGVmdCA+PSAwICYmIHBvc2l0aW9uLnRvcCA+PSAwO1xuICB9XG59XG4iXX0=