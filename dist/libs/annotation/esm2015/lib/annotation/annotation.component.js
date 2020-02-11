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
        this.dimension.width += $event;
        this.correctPosition();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    height($event) {
        this.dimension.height += $event;
        this.correctPosition();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    left($event) {
        this.position.left += $event;
        this.correctPosition();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    top($event) {
        this.position.top += $event;
        this.correctPosition();
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
            }
            else {
                this.position.left += left;
                this.position.top += top;
                this.correctPosition();
            }
            this.leftTop.left += left;
            this.leftTop.top += top;
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
        if (this.isPolyline()) {
            this.addPoint(position);
        }
        else if (this.isPath()) {
            this.setEndPosition(position);
            this.distanceValue = this.getDistance() + "px";
        }
        this.calcPositionAndDimension();
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
        this.dimension.width = currentPosition.left - this.position.left;
        this.dimension.height = currentPosition.top - this.position.top;
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
        const menuWidth = this.isText() ? 265 : 148;
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
                const element = $("#text");
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
        annotationData.left = this.leftTop.left;
        annotationData.top = this.leftTop.top;
        annotationData.height = this.dimension.height;
        annotationData.width = this.dimension.width;
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
}
AnnotationComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-annotation',
                template: "<div class=\"gd-annotation\"\n     (clickOutside)=\"hideMenu($event)\"\n     [exclude]=\"'gd-context-menu,.ui-resizable-handle,.gd-comments-panel'\"\n     [excludeBeforeClick]=\"true\"\n     [clickOutsideEvents]=\"'mousedown'\"\n     [clickOutsideEnabled]=\"active\"\n     [style.left.px]=\"leftTop.left\" [style.top.px]=\"leftTop.top\"\n     [style.width.px]=\"getWidth()\"\n     [style.height.px]=\"getHeight()\"\n     (click)=\"activation()\"\n     (touchstart)=\"activation()\">\n  <div [draggable]=\"true\" (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\n       (drag)=\"dragging($event)\" (dragend)=\"dragging($event)\" (drop)=\"dragOver($event)\"\n       (panstart)=\"dragStart($event)\" (panmove)=\"dragging($event)\"\n       class=\"gd-annotation-wrapper\" [ngClass]=\"getAnnotationClass()\">\n    <gd-context-menu *ngIf=\"active\" [topPosition]=\"position.top\" [textMenu]=\"isText()\" [formatting]=\"getFormatting()\"\n                     (changeFormatting)=\"saveFormatting($event)\" (removeItem)=\"remove()\"\n                     [translation]=\"getMenuShift()\" [menuType]=\"getMenuType()\"\n                     (comment)=\"addComment()\"></gd-context-menu>\n    <div class=\"gd-text-strikeout-line\" *ngIf=\"isStrikeoutOrUnderline()\"></div>\n    <textarea wrap=\"off\" class=\"gd-text\" *ngIf=\"isTextReplacement() || isText()\" [value]=\"textValue\"\n              id=\"text\" #text (keyup)=\"saveText(text.value)\"\n              (keydown)=\"textAreaHeight($event.key, text)\"\n              [style.color]=\"formatting?.color\"\n              [style.font-family]=\"formatting?.font\"\n              [style.font-size.px]=\"formatting?.fontSize\"\n              [style.width.px]=\"getWidth()\"\n              [style.height.px]=\"getHeight()\"></textarea>\n    <div *ngIf=\"isPoint()\" class=\"gd-point\">\n      <fa-icon class=\"icon\" [icon]=\"['fas','thumbtack']\" [size]=\"'lg'\"></fa-icon>\n    </div>\n  </div>\n\n  <gd-resizing [id]=\"id\" *ngIf=\"active && !isSVG() && !isPoint()\"\n               (offsetX)=\"width($event)\" (offsetY)=\"height($event)\"\n               (offsetTop)=\"top($event)\" (offsetLeft)=\"left($event)\"\n               [se]=\"true\" [sw]=\"true\" [ne]=\"true\" [nw]=\"true\"\n               [pageHeight]=\"pageHeight\" [pageWidth]=\"pageWidth\"></gd-resizing>\n</div>\n<svg *ngIf=\"isSVG()\" class=\"svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polyline *ngIf=\"isPolyline()\" [attr.id]=\"id\" [attr.points]=\"pointsValue\" [ngStyle]=\"setStyles()\">\n  </polyline>\n  <path id=\"{{'gd-path-' + id}}\" *ngIf=\"isPath()\" [attr.d]=\"pathValue\" [attr.marker-end]=\"bottom()\"\n        [attr.marker-start]=\"head()\" [ngStyle]=\"setStyles()\">\n    <title *ngIf=\"isDistance()\" [ngStyle]=\"distanceTextOptions()\">{{ distanceValue }}</title>\n  </path>\n  <text *ngIf=\"isDistance()\" [ngStyle]=\"distanceTextOptions()\" [attr.x]=\"getTextX()\"\n        [attr.y]=\"0\">\n    <textPath [attr.href]=\"'#gd-path-' + id\">\n      {{ distanceValue }}\n    </textPath>\n  </text>\n</svg>\n",
                styles: [".gd-annotation{position:absolute!important;cursor:pointer;z-index:9}.gd-annotation .gd-annotation-wrapper-border{outline:#679ffa solid 1px;display:-webkit-box;display:flex}.gd-annotation .gd-annotation-wrapper{height:inherit;z-index:9}.gd-annotation .gd-annotation-wrapper ::ng-deep .palette{width:0;height:37px}.gd-annotation .gd-annotation-wrapper .gd-text-strikeout-line{background-color:#e04e4e;height:2px;width:100%}.gd-annotation .gd-annotation-wrapper .gd-text{border:none;outline:0;margin:0;padding:0;overflow:hidden;background-color:transparent;min-width:1em;min-height:1em}.gd-annotation .gd-annotation-wrapper .gd-point{background-color:#7cbc46;width:41px;height:41px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;color:#fff;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;-khtml-border-radius:50%;box-shadow:0 1px 1px 1px #bbb;-moz-box-shadow:0 1px 1px 1px #bbb;-webkit-box-shadow:0 1px 1px 1px #bbb}.gd-annotation .gd-text-annotation{background-color:rgba(151,151,240,.51)}.gd-annotation .gd-text-strikeout-annotation{-webkit-box-align:center;align-items:center}.gd-annotation .gd-text-underline-annotation{-webkit-box-align:end;align-items:end}.gd-annotation .gd-text-redaction-annotation{background-color:#000}.gd-annotation .gd-text-replacement-annotation{background-color:#fff}.svg{z-index:1;position:absolute;top:0;left:0;width:100%;height:100%}.annotation-svg{position:absolute;cursor:pointer;z-index:2}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hbm5vdGF0aW9uL2Fubm90YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQ0wsY0FBYyxFQUNkLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFFBQVEsRUFDUixnQkFBZ0IsRUFDakIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUMxRixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7TUFFM0IsQ0FBQyxHQUFHLE1BQU07QUFPaEIsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBc0I5QixZQUFvQix3QkFBaUQsRUFDakQsd0JBQWlELEVBQ2pELHlCQUFtRDtRQUZuRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO1FBQ2pELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBeUI7UUFDakQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQWhCdkUsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLGNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFaEMsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGdCQUFXLEdB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QVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsNC9GQUEwQzs7YUFFM0M7Ozs7WUFaTyx1QkFBdUI7WUFFdkIsdUJBQXVCO1lBQ3ZCLHdCQUF3Qjs7OztJQVk5QixpQ0FBVzs7SUFDWCx1Q0FBbUI7O0lBQ25CLHNDQUFrQjs7SUFDbEIsbUNBQWE7O0lBQ2Isd0NBQWtCOztJQUNsQix5Q0FBbUI7O0lBQ25CLHFDQUFjOztJQUNkLHdDQUFnQzs7SUFDaEMseUNBQW1COztJQUNuQix3Q0FBZTs7SUFDZix3Q0FBa0I7O0lBQ2xCLDRDQUFzQjs7SUFDdEIsMENBQWlCOztJQUNqQixzQ0FBYTs7SUFDYix5Q0FBa0M7Ozs7O0lBRWxDLDBDQUE4Qzs7Ozs7SUFDOUMscUNBQW9COzs7OztJQUNwQiwwQ0FBOEI7Ozs7O0lBRWxCLHVEQUF5RDs7Ozs7SUFDekQsdURBQXlEOzs7OztJQUN6RCx3REFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFubm90YXRpb25EYXRhLFxuICBBbm5vdGF0aW9uVHlwZSxcbiAgQ29tbWVudEFubm90YXRpb24sXG4gIERpbWVuc2lvbixcbiAgUG9zaXRpb24sXG4gIFJlbW92ZUFubm90YXRpb25cbn0gZnJvbSBcIi4uL2Fubm90YXRpb24tbW9kZWxzXCI7XG5pbXBvcnQge0FjdGl2ZUFubm90YXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vYWN0aXZlLWFubm90YXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHtGb3JtYXR0aW5nLCBVdGlscywgTWVudVR5cGV9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7UmVtb3ZlQW5ub3RhdGlvblNlcnZpY2V9IGZyb20gXCIuLi9yZW1vdmUtYW5ub3RhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbW1lbnRBbm5vdGF0aW9uU2VydmljZX0gZnJvbSBcIi4uL2NvbW1lbnQtYW5ub3RhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgJCA9IGpxdWVyeTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtYW5ub3RhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbm5vdGF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYW5ub3RhdGlvbi5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIGlkOiBudW1iZXI7XG4gIHBvc2l0aW9uOiBQb3NpdGlvbjtcbiAgbGVmdFRvcDogUG9zaXRpb247XG4gIHR5cGU6IHN0cmluZztcbiAgcGFnZVdpZHRoOiBudW1iZXI7XG4gIHBhZ2VIZWlnaHQ6IG51bWJlcjtcbiAgYWN0aXZlID0gdHJ1ZTtcbiAgZGltZW5zaW9uID0gbmV3IERpbWVuc2lvbigwLCAwKTtcbiAgcGFnZU51bWJlcjogbnVtYmVyO1xuICB0ZXh0VmFsdWUgPSBcIlwiO1xuICBwYXRoVmFsdWU6IHN0cmluZztcbiAgZGlzdGFuY2VWYWx1ZSA9ICcwcHgnO1xuICBwb2ludHNWYWx1ZSA9IFwiXCI7XG4gIHN2Z1BhdGggPSBcIlwiO1xuICBmb3JtYXR0aW5nID0gRm9ybWF0dGluZy5kZWZhdWx0KCk7XG5cbiAgcHJpdmF0ZSBvbGRQb3NpdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xuICBwcml2YXRlIHBvaW50cyA9IFtdO1xuICBwcml2YXRlIGVuZFBvc2l0aW9uOiBQb3NpdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY3RpdmVBbm5vdGF0aW9uU2VydmljZTogQWN0aXZlQW5ub3RhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbW92ZUFubm90YXRpb25TZXJ2aWNlOiBSZW1vdmVBbm5vdGF0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY29tbWVudEFubm90YXRpb25TZXJ2aWNlOiBDb21tZW50QW5ub3RhdGlvblNlcnZpY2UpIHtcbiAgICB0aGlzLl9hY3RpdmVBbm5vdGF0aW9uU2VydmljZS5hY3RpdmVDaGFuZ2Uuc3Vic2NyaWJlKChpZDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMuaWQgPT09IGlkO1xuICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc2V0VGV4dEZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaXNPblBhZ2UocG9zaXRpb24pIHtcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG4gICAgcmV0dXJuIGN1cnJlbnRQYWdlICYmICQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpICYmXG4gICAgICAoJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuaGFzQ2xhc3MoXCJwYWdlXCIpIHx8XG4gICAgICAgICQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmhhc0NsYXNzKFwicGFnZVwiKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxlZnRUb3AgPSBQb3NpdGlvbi5jbG9uZSh0aGlzLnBvc2l0aW9uKTtcbiAgICBpZiAodGhpcy5pc1BvbHlsaW5lKCkpIHtcbiAgICAgIGlmICh0aGlzLnN2Z1BhdGgpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkUG9pbnRzID0gdGhpcy5zdmdQYXRoLnJlcGxhY2UoXCJNXCIsIFwiXCIpLnNwbGl0KCdMJyk7XG4gICAgICAgIGxldCB4ID0gcGFyc2VGbG9hdChwYXJzZWRQb2ludHNbMF0uc3BsaXQoXCIsXCIpWzBdKTtcbiAgICAgICAgbGV0IHkgPSBwYXJzZUZsb2F0KHBhcnNlZFBvaW50c1swXS5zcGxpdChcIixcIilbMV0pO1xuICAgICAgICBjb25zdCBjb21wID0gdGhpcztcbiAgICAgICAgcGFyc2VkUG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKHBvaW50LCBpbmRleCkge1xuICAgICAgICAgIGlmIChpbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgaWYgKHBvaW50ICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgIGNvbXAuYWRkUG9pbnQobmV3IFBvc2l0aW9uKHgsIHkpKTtcbiAgICAgICAgICAgICAgeCA9ICh4ICsgcGFyc2VGbG9hdChwb2ludC5zcGxpdChcIixcIilbMF0pKTtcbiAgICAgICAgICAgICAgeSA9ICh5ICsgcGFyc2VGbG9hdChwb2ludC5zcGxpdChcIixcIilbMV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRQb2ludCh0aGlzLnBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNQYXRoKCkpIHtcbiAgICAgIGlmICh0aGlzLnN2Z1BhdGggfHwgKHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuQVJST1cuaWQgJiYgIXRoaXMuZGltZW5zaW9uLmlzTm9uZSgpKSkge1xuICAgICAgICBjb25zdCBlbmQgPSBuZXcgUG9zaXRpb24odGhpcy5wb3NpdGlvbi5sZWZ0ICsgdGhpcy5kaW1lbnNpb24ud2lkdGgsIHRoaXMucG9zaXRpb24udG9wICsgdGhpcy5kaW1lbnNpb24uaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5zZXRFbmRQb3NpdGlvbihlbmQpO1xuICAgICAgICBpZiAodGhpcy5kaW1lbnNpb24uaGVpZ2h0IDwgMCkge1xuICAgICAgICAgIHRoaXMubGVmdFRvcC50b3AgKz0gdGhpcy5kaW1lbnNpb24uaGVpZ2h0O1xuICAgICAgICAgIHRoaXMuZGltZW5zaW9uLmhlaWdodCA9IHRoaXMuZGltZW5zaW9uLmhlaWdodCAqICgtMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGltZW5zaW9uLndpZHRoIDwgMCkge1xuICAgICAgICAgIHRoaXMubGVmdFRvcC5sZWZ0ICs9IHRoaXMuZGltZW5zaW9uLndpZHRoO1xuICAgICAgICAgIHRoaXMuZGltZW5zaW9uLndpZHRoID0gdGhpcy5kaW1lbnNpb24ud2lkdGggKiAoLTEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEVuZFBvc2l0aW9uKHRoaXMucG9zaXRpb24pO1xuICAgICAgfVxuICAgICAgdGhpcy5kaXN0YW5jZVZhbHVlID0gdGhpcy5nZXREaXN0YW5jZSgpICsgXCJweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldEVuZFBvc2l0aW9uKHRoaXMucG9zaXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFRleHRGb2N1cygpO1xuICB9XG5cbiAgYWN0aXZhdGlvbigpIHtcbiAgICB0aGlzLl9hY3RpdmVBbm5vdGF0aW9uU2VydmljZS5jaGFuZ2VBY3RpdmUodGhpcy5pZCk7XG4gIH1cblxuICB3aWR0aCgkZXZlbnQpIHtcbiAgICB0aGlzLmRpbWVuc2lvbi53aWR0aCArPSAkZXZlbnQ7XG4gICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgfVxuXG4gIGhlaWdodCgkZXZlbnQpIHtcbiAgICB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgKz0gJGV2ZW50O1xuICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XG4gIH1cblxuICBsZWZ0KCRldmVudCkge1xuICAgIHRoaXMucG9zaXRpb24ubGVmdCArPSAkZXZlbnQ7XG4gICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgfVxuXG4gIHRvcCgkZXZlbnQpIHtcbiAgICB0aGlzLnBvc2l0aW9uLnRvcCArPSAkZXZlbnQ7XG4gICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgY29ycmVjdFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLmxlZnQgPCAwKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLmxlZnQgPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3NpdGlvbi50b3AgPCAwKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnRvcCArIHRoaXMuZGltZW5zaW9uLmhlaWdodCA+IHRoaXMucGFnZUhlaWdodCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBhZ2VIZWlnaHQgLSB0aGlzLmRpbWVuc2lvbi5oZWlnaHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc2l0aW9uLmxlZnQgKyB0aGlzLmRpbWVuc2lvbi53aWR0aCA+IHRoaXMucGFnZVdpZHRoKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLmxlZnQgPSB0aGlzLnBhZ2VXaWR0aCAtIHRoaXMuZGltZW5zaW9uLndpZHRoO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdPdmVyKCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgZHJhZ1N0YXJ0KCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5vbGRQb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcbiAgICBpZiAoJGV2ZW50LmRhdGFUcmFuc2Zlcikge1xuICAgICAgJGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ2ZvbycpO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdnaW5nKCRldmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xuICAgIGlmIChwb3NpdGlvbi54ICYmIHBvc2l0aW9uLnkgJiYgQW5ub3RhdGlvbkNvbXBvbmVudC5pc09uUGFnZShwb3NpdGlvbikpIHtcbiAgICAgIGNvbnN0IGxlZnQgPSBwb3NpdGlvbi54IC0gdGhpcy5vbGRQb3NpdGlvbi54O1xuICAgICAgY29uc3QgdG9wID0gcG9zaXRpb24ueSAtIHRoaXMub2xkUG9zaXRpb24ueTtcbiAgICAgIGlmICh0aGlzLmlzUG9seWxpbmUoKSkge1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tEcmFnZ2luZyhsZWZ0LCB0b3ApKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9pbnRzVmFsdWUgPSBcIlwiO1xuICAgICAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHRoaXMucG9pbnRzKSB7XG4gICAgICAgICAgcG9pbnQubGVmdCA9IHBvaW50LmxlZnQgKyBsZWZ0O1xuICAgICAgICAgIHBvaW50LnRvcCA9IHBvaW50LnRvcCArIHRvcDtcbiAgICAgICAgICB0aGlzLnBvaW50c1ZhbHVlICs9IHBvaW50LmxlZnQgKyBcIixcIiArIHBvaW50LnRvcCArIFwiIFwiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNQYXRoKCkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrRHJhZ2dpbmcobGVmdCwgdG9wKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uLmxlZnQgKz0gbGVmdDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgKz0gdG9wO1xuICAgICAgICB0aGlzLmVuZFBvc2l0aW9uLmxlZnQgKz0gbGVmdDtcbiAgICAgICAgdGhpcy5lbmRQb3NpdGlvbi50b3AgKz0gdG9wO1xuICAgICAgICB0aGlzLnBhdGhWYWx1ZSA9IFwiTVwiICsgdGhpcy5wb3NpdGlvbi5sZWZ0ICsgXCIsXCIgKyB0aGlzLnBvc2l0aW9uLnRvcCArIFwiIExcIiArIHRoaXMuZW5kUG9zaXRpb24ubGVmdCArIFwiLFwiICsgdGhpcy5lbmRQb3NpdGlvbi50b3A7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VWYWx1ZSA9IHRoaXMuZ2V0RGlzdGFuY2UoKSArIFwicHhcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ubGVmdCArPSBsZWZ0O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCArPSB0b3A7XG4gICAgICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmxlZnRUb3AubGVmdCArPSBsZWZ0O1xuICAgICAgdGhpcy5sZWZ0VG9wLnRvcCArPSB0b3A7XG4gICAgICB0aGlzLm9sZFBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgZ2V0QW5ub3RhdGlvbkNsYXNzKCkge1xuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFQuaWQ6XG4gICAgICAgIHJldHVybiBcImdkLWFubm90YXRpb24td3JhcHBlci1ib3JkZXIgZ2QtdGV4dC1hbm5vdGF0aW9uXCI7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfU1RSSUtFT1VULmlkOlxuICAgICAgICByZXR1cm4gXCJnZC1hbm5vdGF0aW9uLXdyYXBwZXItYm9yZGVyIGdkLXRleHQtYW5ub3RhdGlvbiBnZC10ZXh0LXN0cmlrZW91dC1hbm5vdGF0aW9uXCI7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfVU5ERVJMSU5FLmlkOlxuICAgICAgICByZXR1cm4gXCJnZC1hbm5vdGF0aW9uLXdyYXBwZXItYm9yZGVyIGdkLXRleHQtYW5ub3RhdGlvbiBnZC10ZXh0LXVuZGVybGluZS1hbm5vdGF0aW9uXCI7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfUkVEQUNUSU9OLmlkOlxuICAgICAgICByZXR1cm4gXCJnZC1hbm5vdGF0aW9uLXdyYXBwZXItYm9yZGVyIGdkLXRleHQtcmVkYWN0aW9uLWFubm90YXRpb25cIjtcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9SRVBMQUNFTUVOVC5pZDpcbiAgICAgICAgcmV0dXJuIFwiZ2QtYW5ub3RhdGlvbi13cmFwcGVyLWJvcmRlciBnZC10ZXh0LXJlcGxhY2VtZW50LWFubm90YXRpb25cIjtcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuUE9JTlQuaWQ6XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiZ2QtYW5ub3RhdGlvbi13cmFwcGVyLWJvcmRlclwiO1xuICAgIH1cbiAgfVxuXG4gIGlzU3RyaWtlb3V0T3JVbmRlcmxpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuVEVYVF9TVFJJS0VPVVQuaWQgfHwgdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5URVhUX1VOREVSTElORS5pZDtcbiAgfVxuXG4gIGlzVGV4dFJlcGxhY2VtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLlRFWFRfUkVQTEFDRU1FTlQuaWQ7XG4gIH1cblxuICBzYXZlVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy50ZXh0VmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGRyYXcocG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgaWYgKHRoaXMuaXNQb2x5bGluZSgpKSB7XG4gICAgICB0aGlzLmFkZFBvaW50KHBvc2l0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNQYXRoKCkpIHtcbiAgICAgIHRoaXMuc2V0RW5kUG9zaXRpb24ocG9zaXRpb24pO1xuICAgICAgdGhpcy5kaXN0YW5jZVZhbHVlID0gdGhpcy5nZXREaXN0YW5jZSgpICsgXCJweFwiO1xuICAgIH1cbiAgICB0aGlzLmNhbGNQb3NpdGlvbkFuZERpbWVuc2lvbigpO1xuICB9XG5cbiAgc2V0U3R5bGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnc3Ryb2tlJzogJyM1NzlBRjAnLFxuICAgICAgJ3N0cm9rZS13aWR0aCc6IDIsXG4gICAgICAnZmlsbC1vcGFjaXR5JzogMCxcbiAgICAgICdpZCc6ICh0aGlzLmlzUG9seWxpbmUoKSA/ICdnZC1wb2x5bGluZS1hbm5vdGF0aW9uLScgOiAodGhpcy5pc0Rpc3RhbmNlKCkgPyAnZ2QtZGlzdGFuY2UtYW5ub3RhdGlvbi0nIDogJ2dkLWFycm93LWFubm90YXRpb24tJykpICsgdGhpcy5pZCxcbiAgICAgICdjbGFzcyc6ICdhbm5vdGF0aW9uLXN2ZycsXG4gICAgfTtcbiAgfVxuXG4gIGlzUG9seWxpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUuaWQ7XG4gIH1cblxuICBwcml2YXRlIGNhbGNQb3NpdGlvbkFuZERpbWVuc2lvbigpIHtcbiAgICBjb25zdCBsZWZ0VG9wID0gbmV3IFBvc2l0aW9uKE51bWJlci5NQVhfVkFMVUUsIE51bWJlci5NQVhfVkFMVUUpO1xuICAgIGNvbnN0IHJpZ2h0Qm90dG9tID0gbmV3IFBvc2l0aW9uKE51bWJlci5NSU5fVkFMVUUsIE51bWJlci5NSU5fVkFMVUUpO1xuICAgIGlmICh0aGlzLmlzUG9seWxpbmUoKSkge1xuICAgICAgZm9yIChjb25zdCBwb2ludCBvZiB0aGlzLnBvaW50cykge1xuICAgICAgICBsZWZ0VG9wLmxlZnQgPSBNYXRoLm1pbihwb2ludC5sZWZ0LCBsZWZ0VG9wLmxlZnQpO1xuICAgICAgICBsZWZ0VG9wLnRvcCA9IE1hdGgubWluKHBvaW50LnRvcCwgbGVmdFRvcC50b3ApO1xuICAgICAgICByaWdodEJvdHRvbS5sZWZ0ID0gTWF0aC5tYXgocG9pbnQubGVmdCwgcmlnaHRCb3R0b20ubGVmdCk7XG4gICAgICAgIHJpZ2h0Qm90dG9tLnRvcCA9IE1hdGgubWF4KHBvaW50LnRvcCwgcmlnaHRCb3R0b20udG9wKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdFRvcC5sZWZ0ID0gTWF0aC5taW4odGhpcy5wb3NpdGlvbi5sZWZ0LCB0aGlzLmVuZFBvc2l0aW9uLmxlZnQpO1xuICAgICAgbGVmdFRvcC50b3AgPSBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnRvcCwgdGhpcy5lbmRQb3NpdGlvbi50b3ApO1xuICAgICAgcmlnaHRCb3R0b20ubGVmdCA9IE1hdGgubWF4KHRoaXMucG9zaXRpb24ubGVmdCwgdGhpcy5lbmRQb3NpdGlvbi5sZWZ0KTtcbiAgICAgIHJpZ2h0Qm90dG9tLnRvcCA9IE1hdGgubWF4KHRoaXMucG9zaXRpb24udG9wLCB0aGlzLmVuZFBvc2l0aW9uLnRvcCk7XG4gICAgfVxuICAgIHRoaXMuZGltZW5zaW9uLndpZHRoID0gcmlnaHRCb3R0b20ubGVmdCAtIGxlZnRUb3AubGVmdDtcbiAgICB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgPSByaWdodEJvdHRvbS50b3AgLSBsZWZ0VG9wLnRvcDtcbiAgICB0aGlzLmxlZnRUb3AgPSBsZWZ0VG9wO1xuICB9XG5cbiAgY2FsY0RpbWVuc2lvbnMoY3VycmVudFBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgIHRoaXMuZGltZW5zaW9uLndpZHRoID0gY3VycmVudFBvc2l0aW9uLmxlZnQgLSB0aGlzLnBvc2l0aW9uLmxlZnQ7XG4gICAgdGhpcy5kaW1lbnNpb24uaGVpZ2h0ID0gY3VycmVudFBvc2l0aW9uLnRvcCAtIHRoaXMucG9zaXRpb24udG9wO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IE1hdGguYWJzKHRoaXMuZGltZW5zaW9uLmhlaWdodCk7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaW1lbnNpb24ud2lkdGggPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IE1hdGguYWJzKHRoaXMuZGltZW5zaW9uLndpZHRoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tEcmFnZ2luZyhsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyKSB7XG4gICAgcmV0dXJuICEodGhpcy5sZWZ0VG9wLmxlZnQgKyBsZWZ0IDwgMCB8fCB0aGlzLmxlZnRUb3AudG9wICsgdG9wIDwgMCB8fFxuICAgICAgdGhpcy5sZWZ0VG9wLnRvcCArIHRvcCArIHRoaXMuZGltZW5zaW9uLmhlaWdodCA+IHRoaXMucGFnZUhlaWdodCB8fFxuICAgICAgdGhpcy5sZWZ0VG9wLmxlZnQgKyBsZWZ0ICsgdGhpcy5kaW1lbnNpb24ud2lkdGggPiB0aGlzLnBhZ2VXaWR0aCk7XG4gIH1cblxuICBpc1BvaW50KCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLlBPSU5ULmlkO1xuICB9XG5cbiAgaXNTVkcoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUuaWQgfHxcbiAgICAgIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuRElTVEFOQ0UuaWQgfHxcbiAgICAgIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuQVJST1cuaWQ7XG4gIH1cblxuICBpc0Rpc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLkRJU1RBTkNFLmlkO1xuICB9XG5cbiAgZGlzdGFuY2VUZXh0T3B0aW9ucygpIHtcbiAgICByZXR1cm4geydmb250LXNpemUnOiBcIjEycHhcIn1cbiAgfVxuXG4gIGlzUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5ESVNUQU5DRS5pZCB8fFxuICAgICAgdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5BUlJPVy5pZDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RW5kUG9zaXRpb24ocG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgdGhpcy5lbmRQb3NpdGlvbiA9IFBvc2l0aW9uLmNsb25lKHBvc2l0aW9uKTtcbiAgICB0aGlzLnBhdGhWYWx1ZSA9IFwiTVwiICsgdGhpcy5wb3NpdGlvbi5sZWZ0ICsgXCIsXCIgKyB0aGlzLnBvc2l0aW9uLnRvcCArIFwiIExcIiArIHRoaXMuZW5kUG9zaXRpb24ubGVmdCArIFwiLFwiICsgdGhpcy5lbmRQb3NpdGlvbi50b3A7XG4gIH1cblxuICBwcml2YXRlIGFkZFBvaW50KHBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgIHRoaXMucG9pbnRzLnB1c2gocG9zaXRpb24pO1xuICAgIHRoaXMucG9pbnRzVmFsdWUgKz0gcG9zaXRpb24ubGVmdCArIFwiLFwiICsgcG9zaXRpb24udG9wICsgXCIgXCI7XG4gIH1cblxuICBwcml2YXRlIGdldERpc3RhbmNlKCkge1xuICAgIGNvbnN0IHhzID0gdGhpcy5wb3NpdGlvbi5sZWZ0IC0gdGhpcy5lbmRQb3NpdGlvbi5sZWZ0O1xuICAgIGNvbnN0IHlzID0gdGhpcy5wb3NpdGlvbi50b3AgLSB0aGlzLmVuZFBvc2l0aW9uLnRvcDtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnNxcnQoeHMgKiB4cyArIHlzICogeXMpKTtcbiAgfVxuXG4gIGJvdHRvbSgpIHtcbiAgICByZXR1cm4gJ3VybCgnICsgd2luZG93LmxvY2F0aW9uICsgJyNlbmQpJztcbiAgfVxuXG4gIGhlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNEaXN0YW5jZSgpID8gJ3VybCgnICsgd2luZG93LmxvY2F0aW9uICsgJyNzdGFydCknIDogXCJcIjtcbiAgfVxuXG4gIGdldFRleHRYKCkge1xuICAgIHJldHVybiB0aGlzLmdldERpc3RhbmNlKCkgLyAyO1xuICB9XG5cbiAgaXNUZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLlRFWFRfRklFTEQuaWQgfHwgdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5XQVRFUk1BUksuaWQ7XG4gIH1cblxuICBnZXRGb3JtYXR0aW5nKCkge1xuICAgIGNvbnN0IGYgPSB0aGlzLmZvcm1hdHRpbmc7XG4gICAgY29uc3QgZm9ybWF0dGluZyA9IEZvcm1hdHRpbmcuZGVmYXVsdCgpO1xuICAgIGlmIChmKSB7XG4gICAgICBmb3JtYXR0aW5nLmZvbnRTaXplID0gZi5mb250U2l6ZTtcbiAgICAgIGZvcm1hdHRpbmcuZm9udCA9IGYuZm9udDtcbiAgICAgIGZvcm1hdHRpbmcuY29sb3IgPSBmLmNvbG9yO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGluZztcbiAgfVxuXG4gIHNhdmVGb3JtYXR0aW5nKCRldmVudDogRm9ybWF0dGluZykge1xuICAgIHRoaXMuZm9ybWF0dGluZy5mb250U2l6ZSA9ICRldmVudC5mb250U2l6ZTtcbiAgICB0aGlzLmZvcm1hdHRpbmcuZm9udCA9ICRldmVudC5mb250O1xuICAgIHRoaXMuZm9ybWF0dGluZy5jb2xvciA9ICRldmVudC5jb2xvcjtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLl9yZW1vdmVBbm5vdGF0aW9uU2VydmljZS5yZW1vdmUobmV3IFJlbW92ZUFubm90YXRpb24odGhpcy5pZCkpO1xuICB9XG5cbiAgZ2V0TWVudVNoaWZ0KCkge1xuICAgIGNvbnN0IG1lbnVXaWR0aCA9IHRoaXMuaXNUZXh0KCkgPyAyNjUgOiAxNDg7XG4gICAgcmV0dXJuIHRoaXMuZGltZW5zaW9uLndpZHRoID4gbWVudVdpZHRoID8gMCA6ICh0aGlzLmRpbWVuc2lvbi53aWR0aCAtIG1lbnVXaWR0aCkgKiAwLjU7XG4gIH1cblxuICBnZXRNZW51VHlwZSgpIHtcbiAgICByZXR1cm4gTWVudVR5cGUuRk9SX0FOTk9UQVRJT047XG4gIH1cblxuICBhZGRDb21tZW50KCkge1xuICAgIHRoaXMuX2NvbW1lbnRBbm5vdGF0aW9uU2VydmljZS5jb21tZW50KG5ldyBDb21tZW50QW5ub3RhdGlvbih0aGlzLmlkKSk7XG4gIH1cblxuICBwcml2YXRlIHNldFRleHRGb2N1cygpIHtcbiAgICBpZiAodGhpcy5pc1RleHQoKSB8fCB0aGlzLmlzVGV4dFJlcGxhY2VtZW50KCkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gJChcIiN0ZXh0XCIpO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICB0ZXh0QXJlYUhlaWdodChrZXk6IGFueSwgdGV4dGFyZWE6IGFueSkge1xuICAgIHRoaXMuZGltZW5zaW9uLmhlaWdodCA9IFwiRW50ZXJcIiA9PT0ga2V5ID8gdGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ICsgdGhpcy5mb3JtYXR0aW5nLmZvbnRTaXplIDogdGV4dGFyZWEuc2Nyb2xsSGVpZ2h0O1xuICAgIHRoaXMuZGltZW5zaW9uLndpZHRoID0gdGV4dGFyZWEuc2Nyb2xsV2lkdGg7XG4gIH1cblxuICBoaWRlTWVudSgkZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5fYWN0aXZlQW5ub3RhdGlvblNlcnZpY2UuY2hhbmdlQWN0aXZlKG51bGwpO1xuICB9XG5cbiAgZ2V0QW5ub3RhdGlvbkRhdGEoKTogQW5ub3RhdGlvbkRhdGEge1xuICAgIGNvbnN0IGFubm90YXRpb25EYXRhID0gbmV3IEFubm90YXRpb25EYXRhKCk7XG4gICAgYW5ub3RhdGlvbkRhdGEuaWQgPSB0aGlzLmlkO1xuICAgIGFubm90YXRpb25EYXRhLnRleHQgPSB0aGlzLnRleHRWYWx1ZTtcbiAgICBhbm5vdGF0aW9uRGF0YS5mb250Q29sb3IgPSBwYXJzZUludChVdGlscy50b0hleCh0aGlzLmZvcm1hdHRpbmcuY29sb3IpLnJlcGxhY2UoXCIjXCIsIFwiXCIpLCAxNik7XG4gICAgYW5ub3RhdGlvbkRhdGEuZm9udFNpemUgPSB0aGlzLmZvcm1hdHRpbmcuZm9udFNpemU7XG4gICAgYW5ub3RhdGlvbkRhdGEuZm9udCA9IHRoaXMuZm9ybWF0dGluZy5mb250O1xuICAgIGFubm90YXRpb25EYXRhLmxlZnQgPSB0aGlzLmxlZnRUb3AubGVmdDtcbiAgICBhbm5vdGF0aW9uRGF0YS50b3AgPSB0aGlzLmxlZnRUb3AudG9wO1xuICAgIGFubm90YXRpb25EYXRhLmhlaWdodCA9IHRoaXMuZGltZW5zaW9uLmhlaWdodDtcbiAgICBhbm5vdGF0aW9uRGF0YS53aWR0aCA9IHRoaXMuZGltZW5zaW9uLndpZHRoO1xuICAgIGFubm90YXRpb25EYXRhLnBhZ2VOdW1iZXIgPSB0aGlzLnBhZ2VOdW1iZXI7XG4gICAgYW5ub3RhdGlvbkRhdGEudHlwZSA9IHRoaXMudHlwZTtcbiAgICBhbm5vdGF0aW9uRGF0YS5zdmdQYXRoID0gdGhpcy5nZXRTdmdQYXRoKCk7XG4gICAgcmV0dXJuIGFubm90YXRpb25EYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdmdQYXRoKCkge1xuICAgIGxldCBzdmdQYXRoID0gXCJNXCI7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUuaWQpIHtcbiAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICBsZXQgcHJldmlvdXNYID0gMCwgcHJldmlvdXNZID0gMDtcbiAgICAgIGZvciAoY29uc3QgcG9pbnQgb2YgdGhpcy5wb2ludHMpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgc3ZnUGF0aCArPSBwb2ludC5sZWZ0ICsgXCIsXCIgKyBwb2ludC50b3AgKyBcImxcIjtcbiAgICAgICAgICBpbmRleCA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldmlvdXNYID0gcG9pbnQubGVmdCAtIHByZXZpb3VzWDtcbiAgICAgICAgICBwcmV2aW91c1kgPSBwb2ludC50b3AgLSBwcmV2aW91c1k7XG4gICAgICAgICAgc3ZnUGF0aCArPSBwcmV2aW91c1ggKyBcIixcIiArIHByZXZpb3VzWSArIFwibFwiO1xuICAgICAgICB9XG4gICAgICAgIHByZXZpb3VzWCA9IHBvaW50LmxlZnQ7XG4gICAgICAgIHByZXZpb3VzWSA9IHBvaW50LnRvcDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuRElTVEFOQ0UuaWQgfHwgdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5BUlJPVy5pZCkge1xuICAgICAgc3ZnUGF0aCArPSB0aGlzLnBvc2l0aW9uLmxlZnQgKyBcIixcIiArIHRoaXMucG9zaXRpb24udG9wICsgXCIgXCI7XG4gICAgICBzdmdQYXRoICs9IHRoaXMuZW5kUG9zaXRpb24ubGVmdCArIFwiLFwiICsgdGhpcy5lbmRQb3NpdGlvbi50b3AgKyBcIiBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ZnUGF0aCA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBzdmdQYXRoO1xuICB9XG59XG4iXX0=