/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AnnotationData, AnnotationType, CommentAnnotation, Dimension, Position, RemoveAnnotation } from "../annotation-models";
import { ActiveAnnotationService } from "../active-annotation.service";
import { Formatting, Utils, MenuType } from "@groupdocs.examples.angular/common-components";
import { RemoveAnnotationService } from "../remove-annotation.service";
import { CommentAnnotationService } from "../comment-annotation.service";
import * as jquery from 'jquery';
/** @type {?} */
var $ = jquery;
var AnnotationComponent = /** @class */ (function () {
    function AnnotationComponent(_activeAnnotationService, _removeAnnotationService, _commentAnnotationService) {
        var _this = this;
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
        function (id) {
            _this.active = _this.id === id;
            if (_this.active) {
                _this.setTextFocus();
            }
        }));
    }
    /**
     * @param {?} position
     * @return {?}
     */
    AnnotationComponent.isOnPage = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        /** @type {?} */
        var currentPage = document.elementFromPoint(position.x, position.y);
        return currentPage && $(currentPage).parent().parent() &&
            ($(currentPage).parent().parent().parent().hasClass("page") ||
                $(currentPage).parent().parent().parent().parent().parent().hasClass("page"));
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.leftTop = Position.clone(this.position);
        if (this.isPolyline()) {
            if (this.svgPath) {
                /** @type {?} */
                var parsedPoints = this.svgPath.replace("M", "").split('L');
                /** @type {?} */
                var x_1 = parseFloat(parsedPoints[0].split(",")[0]);
                /** @type {?} */
                var y_1 = parseFloat(parsedPoints[0].split(",")[1]);
                /** @type {?} */
                var comp_1 = this;
                parsedPoints.forEach((/**
                 * @param {?} point
                 * @param {?} index
                 * @return {?}
                 */
                function (point, index) {
                    if (index !== 0) {
                        if (point !== "") {
                            comp_1.addPoint(new Position(x_1, y_1));
                            x_1 = (x_1 + parseFloat(point.split(",")[0]));
                            y_1 = (y_1 + parseFloat(point.split(",")[1]));
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
                var end = new Position(this.position.left + this.dimension.width, this.position.top + this.dimension.height);
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
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.setTextFocus();
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.activation = /**
     * @return {?}
     */
    function () {
        this._activeAnnotationService.changeActive(this.id);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AnnotationComponent.prototype.width = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.dimension.width += $event;
        this.correctPosition();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AnnotationComponent.prototype.height = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.dimension.height += $event;
        this.correctPosition();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AnnotationComponent.prototype.left = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.position.left += $event;
        this.correctPosition();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AnnotationComponent.prototype.top = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.position.top += $event;
        this.correctPosition();
    };
    /**
     * @private
     * @return {?}
     */
    AnnotationComponent.prototype.correctPosition = /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AnnotationComponent.prototype.dragOver = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AnnotationComponent.prototype.dragStart = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        this.oldPosition = Utils.getMousePosition($event);
        if ($event.dataTransfer) {
            $event.dataTransfer.setData('text', 'foo');
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AnnotationComponent.prototype.dragging = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var e_1, _a;
        $event.preventDefault();
        /** @type {?} */
        var position = Utils.getMousePosition($event);
        if (position.x && position.y && AnnotationComponent.isOnPage(position)) {
            /** @type {?} */
            var left = position.x - this.oldPosition.x;
            /** @type {?} */
            var top_1 = position.y - this.oldPosition.y;
            if (this.isPolyline()) {
                if (!this.checkDragging(left, top_1)) {
                    return;
                }
                this.pointsValue = "";
                try {
                    for (var _b = tslib_1.__values(this.points), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var point = _c.value;
                        point.left = point.left + left;
                        point.top = point.top + top_1;
                        this.pointsValue += point.left + "," + point.top + " ";
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else if (this.isPath()) {
                if (!this.checkDragging(left, top_1)) {
                    return;
                }
                this.position.left += left;
                this.position.top += top_1;
                this.endPosition.left += left;
                this.endPosition.top += top_1;
                this.pathValue = "M" + this.position.left + "," + this.position.top + " L" + this.endPosition.left + "," + this.endPosition.top;
                this.distanceValue = this.getDistance() + "px";
            }
            else {
                this.position.left += left;
                this.position.top += top_1;
                this.correctPosition();
            }
            this.leftTop.left += left;
            this.leftTop.top += top_1;
            this.oldPosition = position;
        }
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.getAnnotationClass = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.isStrikeoutOrUnderline = /**
     * @return {?}
     */
    function () {
        return this.type === AnnotationType.TEXT_STRIKEOUT.id || this.type === AnnotationType.TEXT_UNDERLINE.id;
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.isTextReplacement = /**
     * @return {?}
     */
    function () {
        return this.type === AnnotationType.TEXT_REPLACEMENT.id;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AnnotationComponent.prototype.saveText = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.textValue = value;
    };
    /**
     * @param {?} position
     * @return {?}
     */
    AnnotationComponent.prototype.draw = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        if (this.isPolyline()) {
            this.addPoint(position);
        }
        else if (this.isPath()) {
            this.setEndPosition(position);
            this.distanceValue = this.getDistance() + "px";
        }
        this.calcPositionAndDimension();
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.setStyles = /**
     * @return {?}
     */
    function () {
        return {
            'stroke': '#579AF0',
            'stroke-width': 2,
            'fill-opacity': 0,
            'id': (this.isPolyline() ? 'gd-polyline-annotation-' : (this.isDistance() ? 'gd-distance-annotation-' : 'gd-arrow-annotation-')) + this.id,
            'class': 'annotation-svg',
        };
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.isPolyline = /**
     * @return {?}
     */
    function () {
        return this.type === AnnotationType.POLYLINE.id;
    };
    /**
     * @private
     * @return {?}
     */
    AnnotationComponent.prototype.calcPositionAndDimension = /**
     * @private
     * @return {?}
     */
    function () {
        var e_2, _a;
        /** @type {?} */
        var leftTop = new Position(Number.MAX_VALUE, Number.MAX_VALUE);
        /** @type {?} */
        var rightBottom = new Position(Number.MIN_VALUE, Number.MIN_VALUE);
        if (this.isPolyline()) {
            try {
                for (var _b = tslib_1.__values(this.points), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var point = _c.value;
                    leftTop.left = Math.min(point.left, leftTop.left);
                    leftTop.top = Math.min(point.top, leftTop.top);
                    rightBottom.left = Math.max(point.left, rightBottom.left);
                    rightBottom.top = Math.max(point.top, rightBottom.top);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
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
    };
    /**
     * @param {?} currentPosition
     * @return {?}
     */
    AnnotationComponent.prototype.calcDimensions = /**
     * @param {?} currentPosition
     * @return {?}
     */
    function (currentPosition) {
        this.dimension.width = currentPosition.left - this.position.left;
        this.dimension.height = currentPosition.top - this.position.top;
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.getHeight = /**
     * @return {?}
     */
    function () {
        return this.dimension.height === undefined ? undefined : Math.abs(this.dimension.height);
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        return this.dimension.width === undefined ? undefined : Math.abs(this.dimension.width);
    };
    /**
     * @private
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    AnnotationComponent.prototype.checkDragging = /**
     * @private
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    function (left, top) {
        return !(this.leftTop.left + left < 0 || this.leftTop.top + top < 0 ||
            this.leftTop.top + top + this.dimension.height > this.pageHeight ||
            this.leftTop.left + left + this.dimension.width > this.pageWidth);
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.isPoint = /**
     * @return {?}
     */
    function () {
        return this.type === AnnotationType.POINT.id;
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.isSVG = /**
     * @return {?}
     */
    function () {
        return this.type === AnnotationType.POLYLINE.id ||
            this.type === AnnotationType.DISTANCE.id ||
            this.type === AnnotationType.ARROW.id;
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.isDistance = /**
     * @return {?}
     */
    function () {
        return this.type === AnnotationType.DISTANCE.id;
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.distanceTextOptions = /**
     * @return {?}
     */
    function () {
        return { 'font-size': "12px" };
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.isPath = /**
     * @return {?}
     */
    function () {
        return this.type === AnnotationType.DISTANCE.id ||
            this.type === AnnotationType.ARROW.id;
    };
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    AnnotationComponent.prototype.setEndPosition = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.endPosition = Position.clone(position);
        this.pathValue = "M" + this.position.left + "," + this.position.top + " L" + this.endPosition.left + "," + this.endPosition.top;
    };
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    AnnotationComponent.prototype.addPoint = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.points.push(position);
        this.pointsValue += position.left + "," + position.top + " ";
    };
    /**
     * @private
     * @return {?}
     */
    AnnotationComponent.prototype.getDistance = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var xs = this.position.left - this.endPosition.left;
        /** @type {?} */
        var ys = this.position.top - this.endPosition.top;
        return Math.round(Math.sqrt(xs * xs + ys * ys));
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.bottom = /**
     * @return {?}
     */
    function () {
        return 'url(' + window.location + '#end)';
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.head = /**
     * @return {?}
     */
    function () {
        return this.isDistance() ? 'url(' + window.location + '#start)' : "";
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.getTextX = /**
     * @return {?}
     */
    function () {
        return this.getDistance() / 2;
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.isText = /**
     * @return {?}
     */
    function () {
        return this.type === AnnotationType.TEXT_FIELD.id || this.type === AnnotationType.WATERMARK.id;
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.getFormatting = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var f = this.formatting;
        /** @type {?} */
        var formatting = Formatting.default();
        if (f) {
            formatting.fontSize = f.fontSize;
            formatting.font = f.font;
            formatting.color = f.color;
        }
        return formatting;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AnnotationComponent.prototype.saveFormatting = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.formatting.fontSize = $event.fontSize;
        this.formatting.font = $event.font;
        this.formatting.color = $event.color;
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.remove = /**
     * @return {?}
     */
    function () {
        this._removeAnnotationService.remove(new RemoveAnnotation(this.id));
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.getMenuShift = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var menuWidth = this.isText() ? 265 : 148;
        return this.dimension.width > menuWidth ? 0 : (this.dimension.width - menuWidth) * 0.5;
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.getMenuType = /**
     * @return {?}
     */
    function () {
        return MenuType.FOR_ANNOTATION;
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.addComment = /**
     * @return {?}
     */
    function () {
        this._commentAnnotationService.comment(new CommentAnnotation(this.id));
    };
    /**
     * @private
     * @return {?}
     */
    AnnotationComponent.prototype.setTextFocus = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.isText() || this.isTextReplacement()) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var element = $("#text");
                if (element) {
                    element.focus();
                }
            }), 100);
        }
    };
    /**
     * @param {?} key
     * @param {?} textarea
     * @return {?}
     */
    AnnotationComponent.prototype.textAreaHeight = /**
     * @param {?} key
     * @param {?} textarea
     * @return {?}
     */
    function (key, textarea) {
        this.dimension.height = "Enter" === key ? textarea.scrollHeight + this.formatting.fontSize : textarea.scrollHeight;
        this.dimension.width = textarea.scrollWidth;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AnnotationComponent.prototype.hideMenu = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this._activeAnnotationService.changeActive(null);
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.getAnnotationData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var annotationData = new AnnotationData();
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
    };
    /**
     * @private
     * @return {?}
     */
    AnnotationComponent.prototype.getSvgPath = /**
     * @private
     * @return {?}
     */
    function () {
        var e_3, _a;
        /** @type {?} */
        var svgPath = "M";
        if (this.type === AnnotationType.POLYLINE.id) {
            /** @type {?} */
            var index = 0;
            /** @type {?} */
            var previousX = 0;
            /** @type {?} */
            var previousY = 0;
            try {
                for (var _b = tslib_1.__values(this.points), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var point = _c.value;
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
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
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
    };
    AnnotationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-annotation',
                    template: "<div class=\"gd-annotation\"\n     (clickOutside)=\"hideMenu($event)\"\n     [exclude]=\"'gd-context-menu,.ui-resizable-handle,.gd-comments-panel'\"\n     [excludeBeforeClick]=\"true\"\n     [clickOutsideEvents]=\"'mousedown'\"\n     [clickOutsideEnabled]=\"active\"\n     [style.left.px]=\"leftTop.left\" [style.top.px]=\"leftTop.top\"\n     [style.width.px]=\"getWidth()\"\n     [style.height.px]=\"getHeight()\"\n     (click)=\"activation()\"\n     (touchstart)=\"activation()\">\n  <div [draggable]=\"true\" (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\n       (drag)=\"dragging($event)\" (dragend)=\"dragging($event)\" (drop)=\"dragOver($event)\"\n       (panstart)=\"dragStart($event)\" (panmove)=\"dragging($event)\"\n       class=\"gd-annotation-wrapper\" [ngClass]=\"getAnnotationClass()\">\n    <gd-context-menu *ngIf=\"active\" [topPosition]=\"position.top\" [textMenu]=\"isText()\" [formatting]=\"getFormatting()\"\n                     (changeFormatting)=\"saveFormatting($event)\" (removeItem)=\"remove()\"\n                     [translation]=\"getMenuShift()\" [menuType]=\"getMenuType()\"\n                     (comment)=\"addComment()\"></gd-context-menu>\n    <div class=\"gd-text-strikeout-line\" *ngIf=\"isStrikeoutOrUnderline()\"></div>\n    <textarea wrap=\"off\" class=\"gd-text\" *ngIf=\"isTextReplacement() || isText()\" [value]=\"textValue\"\n              id=\"text\" #text (keyup)=\"saveText(text.value)\"\n              (keydown)=\"textAreaHeight($event.key, text)\"\n              [style.color]=\"formatting?.color\"\n              [style.font-family]=\"formatting?.font\"\n              [style.font-size.px]=\"formatting?.fontSize\"\n              [style.width.px]=\"getWidth()\"\n              [style.height.px]=\"getHeight()\"></textarea>\n    <div *ngIf=\"isPoint()\" class=\"gd-point\">\n      <fa-icon class=\"icon\" [icon]=\"['fas','thumbtack']\" [size]=\"'lg'\"></fa-icon>\n    </div>\n  </div>\n\n  <gd-resizing [id]=\"id\" *ngIf=\"active && !isSVG() && !isPoint()\"\n               (offsetX)=\"width($event)\" (offsetY)=\"height($event)\"\n               (offsetTop)=\"top($event)\" (offsetLeft)=\"left($event)\"\n               [se]=\"true\" [sw]=\"true\" [ne]=\"true\" [nw]=\"true\"\n               [pageHeight]=\"pageHeight\" [pageWidth]=\"pageWidth\"></gd-resizing>\n</div>\n<svg *ngIf=\"isSVG()\" class=\"svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polyline *ngIf=\"isPolyline()\" [attr.id]=\"id\" [attr.points]=\"pointsValue\" [ngStyle]=\"setStyles()\">\n  </polyline>\n  <path id=\"{{'gd-path-' + id}}\" *ngIf=\"isPath()\" [attr.d]=\"pathValue\" [attr.marker-end]=\"bottom()\"\n        [attr.marker-start]=\"head()\" [ngStyle]=\"setStyles()\">\n    <title *ngIf=\"isDistance()\" [ngStyle]=\"distanceTextOptions()\">{{ distanceValue }}</title>\n  </path>\n  <text *ngIf=\"isDistance()\" [ngStyle]=\"distanceTextOptions()\" [attr.x]=\"getTextX()\"\n        [attr.y]=\"0\">\n    <textPath [attr.href]=\"'#gd-path-' + id\">\n      {{ distanceValue }}\n    </textPath>\n  </text>\n</svg>\n",
                    styles: [".gd-annotation{position:absolute!important;cursor:pointer;z-index:9}.gd-annotation .gd-annotation-wrapper-border{outline:#679ffa solid 1px;display:-webkit-box;display:flex}.gd-annotation .gd-annotation-wrapper{height:inherit;z-index:9}.gd-annotation .gd-annotation-wrapper ::ng-deep .palette{width:0;height:37px}.gd-annotation .gd-annotation-wrapper .gd-text-strikeout-line{background-color:#e04e4e;height:2px;width:100%}.gd-annotation .gd-annotation-wrapper .gd-text{border:none;outline:0;margin:0;padding:0;overflow:hidden;background-color:transparent;min-width:1em;min-height:1em}.gd-annotation .gd-annotation-wrapper .gd-point{background-color:#7cbc46;width:41px;height:41px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;color:#fff;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;-khtml-border-radius:50%;box-shadow:0 1px 1px 1px #bbb;-moz-box-shadow:0 1px 1px 1px #bbb;-webkit-box-shadow:0 1px 1px 1px #bbb}.gd-annotation .gd-text-annotation{background-color:rgba(151,151,240,.51)}.gd-annotation .gd-text-strikeout-annotation{-webkit-box-align:center;align-items:center}.gd-annotation .gd-text-underline-annotation{-webkit-box-align:end;align-items:end}.gd-annotation .gd-text-redaction-annotation{background-color:#000}.gd-annotation .gd-text-replacement-annotation{background-color:#fff}.svg{z-index:1;position:absolute;top:0;left:0;width:100%;height:100%}.annotation-svg{position:absolute;cursor:pointer;z-index:2}"]
                }] }
    ];
    /** @nocollapse */
    AnnotationComponent.ctorParameters = function () { return [
        { type: ActiveAnnotationService },
        { type: RemoveAnnotationService },
        { type: CommentAnnotationService }
    ]; };
    return AnnotationComponent;
}());
export { AnnotationComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hbm5vdGF0aW9uL2Fubm90YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUNMLGNBQWMsRUFDZCxjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxRQUFRLEVBQ1IsZ0JBQWdCLEVBQ2pCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDMUYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDdkUsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O0lBRTNCLENBQUMsR0FBRyxNQUFNO0FBRWhCO0lBMkJFLDZCQUFvQix3QkFBaUQsRUFDakQsd0JBQWlELEVBQ2pELHlCQUFtRDtRQUZ2RSxpQkFTQztRQVRtQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO1FBQ2pELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBeUI7UUFDakQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQWhCdkUsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLGNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFaEMsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsRUFBRSxD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Ozs7O0lBRWxCLHVEQUF5RDs7Ozs7SUFDekQsdURBQXlEOzs7OztJQUN6RCx3REFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFubm90YXRpb25EYXRhLFxuICBBbm5vdGF0aW9uVHlwZSxcbiAgQ29tbWVudEFubm90YXRpb24sXG4gIERpbWVuc2lvbixcbiAgUG9zaXRpb24sXG4gIFJlbW92ZUFubm90YXRpb25cbn0gZnJvbSBcIi4uL2Fubm90YXRpb24tbW9kZWxzXCI7XG5pbXBvcnQge0FjdGl2ZUFubm90YXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vYWN0aXZlLWFubm90YXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHtGb3JtYXR0aW5nLCBVdGlscywgTWVudVR5cGV9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7UmVtb3ZlQW5ub3RhdGlvblNlcnZpY2V9IGZyb20gXCIuLi9yZW1vdmUtYW5ub3RhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbW1lbnRBbm5vdGF0aW9uU2VydmljZX0gZnJvbSBcIi4uL2NvbW1lbnQtYW5ub3RhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgJCA9IGpxdWVyeTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtYW5ub3RhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbm5vdGF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYW5ub3RhdGlvbi5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIGlkOiBudW1iZXI7XG4gIHBvc2l0aW9uOiBQb3NpdGlvbjtcbiAgbGVmdFRvcDogUG9zaXRpb247XG4gIHR5cGU6IHN0cmluZztcbiAgcGFnZVdpZHRoOiBudW1iZXI7XG4gIHBhZ2VIZWlnaHQ6IG51bWJlcjtcbiAgYWN0aXZlID0gdHJ1ZTtcbiAgZGltZW5zaW9uID0gbmV3IERpbWVuc2lvbigwLCAwKTtcbiAgcGFnZU51bWJlcjogbnVtYmVyO1xuICB0ZXh0VmFsdWUgPSBcIlwiO1xuICBwYXRoVmFsdWU6IHN0cmluZztcbiAgZGlzdGFuY2VWYWx1ZSA9ICcwcHgnO1xuICBwb2ludHNWYWx1ZSA9IFwiXCI7XG4gIHN2Z1BhdGggPSBcIlwiO1xuICBmb3JtYXR0aW5nID0gRm9ybWF0dGluZy5kZWZhdWx0KCk7XG5cbiAgcHJpdmF0ZSBvbGRQb3NpdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xuICBwcml2YXRlIHBvaW50cyA9IFtdO1xuICBwcml2YXRlIGVuZFBvc2l0aW9uOiBQb3NpdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY3RpdmVBbm5vdGF0aW9uU2VydmljZTogQWN0aXZlQW5ub3RhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbW92ZUFubm90YXRpb25TZXJ2aWNlOiBSZW1vdmVBbm5vdGF0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY29tbWVudEFubm90YXRpb25TZXJ2aWNlOiBDb21tZW50QW5ub3RhdGlvblNlcnZpY2UpIHtcbiAgICB0aGlzLl9hY3RpdmVBbm5vdGF0aW9uU2VydmljZS5hY3RpdmVDaGFuZ2Uuc3Vic2NyaWJlKChpZDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMuaWQgPT09IGlkO1xuICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc2V0VGV4dEZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaXNPblBhZ2UocG9zaXRpb24pIHtcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG4gICAgcmV0dXJuIGN1cnJlbnRQYWdlICYmICQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpICYmXG4gICAgICAoJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuaGFzQ2xhc3MoXCJwYWdlXCIpIHx8XG4gICAgICAgICQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmhhc0NsYXNzKFwicGFnZVwiKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxlZnRUb3AgPSBQb3NpdGlvbi5jbG9uZSh0aGlzLnBvc2l0aW9uKTtcbiAgICBpZiAodGhpcy5pc1BvbHlsaW5lKCkpIHtcbiAgICAgIGlmICh0aGlzLnN2Z1BhdGgpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkUG9pbnRzID0gdGhpcy5zdmdQYXRoLnJlcGxhY2UoXCJNXCIsIFwiXCIpLnNwbGl0KCdMJyk7XG4gICAgICAgIGxldCB4ID0gcGFyc2VGbG9hdChwYXJzZWRQb2ludHNbMF0uc3BsaXQoXCIsXCIpWzBdKTtcbiAgICAgICAgbGV0IHkgPSBwYXJzZUZsb2F0KHBhcnNlZFBvaW50c1swXS5zcGxpdChcIixcIilbMV0pO1xuICAgICAgICBjb25zdCBjb21wID0gdGhpcztcbiAgICAgICAgcGFyc2VkUG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKHBvaW50LCBpbmRleCkge1xuICAgICAgICAgIGlmIChpbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgaWYgKHBvaW50ICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgIGNvbXAuYWRkUG9pbnQobmV3IFBvc2l0aW9uKHgsIHkpKTtcbiAgICAgICAgICAgICAgeCA9ICh4ICsgcGFyc2VGbG9hdChwb2ludC5zcGxpdChcIixcIilbMF0pKTtcbiAgICAgICAgICAgICAgeSA9ICh5ICsgcGFyc2VGbG9hdChwb2ludC5zcGxpdChcIixcIilbMV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRQb2ludCh0aGlzLnBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNQYXRoKCkpIHtcbiAgICAgIGlmICh0aGlzLnN2Z1BhdGggfHwgKHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuQVJST1cuaWQgJiYgIXRoaXMuZGltZW5zaW9uLmlzTm9uZSgpKSkge1xuICAgICAgICBjb25zdCBlbmQgPSBuZXcgUG9zaXRpb24odGhpcy5wb3NpdGlvbi5sZWZ0ICsgdGhpcy5kaW1lbnNpb24ud2lkdGgsIHRoaXMucG9zaXRpb24udG9wICsgdGhpcy5kaW1lbnNpb24uaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5zZXRFbmRQb3NpdGlvbihlbmQpO1xuICAgICAgICBpZiAodGhpcy5kaW1lbnNpb24uaGVpZ2h0IDwgMCkge1xuICAgICAgICAgIHRoaXMubGVmdFRvcC50b3AgKz0gdGhpcy5kaW1lbnNpb24uaGVpZ2h0O1xuICAgICAgICAgIHRoaXMuZGltZW5zaW9uLmhlaWdodCA9IHRoaXMuZGltZW5zaW9uLmhlaWdodCAqICgtMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGltZW5zaW9uLndpZHRoIDwgMCkge1xuICAgICAgICAgIHRoaXMubGVmdFRvcC5sZWZ0ICs9IHRoaXMuZGltZW5zaW9uLndpZHRoO1xuICAgICAgICAgIHRoaXMuZGltZW5zaW9uLndpZHRoID0gdGhpcy5kaW1lbnNpb24ud2lkdGggKiAoLTEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEVuZFBvc2l0aW9uKHRoaXMucG9zaXRpb24pO1xuICAgICAgfVxuICAgICAgdGhpcy5kaXN0YW5jZVZhbHVlID0gdGhpcy5nZXREaXN0YW5jZSgpICsgXCJweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldEVuZFBvc2l0aW9uKHRoaXMucG9zaXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFRleHRGb2N1cygpO1xuICB9XG5cbiAgYWN0aXZhdGlvbigpIHtcbiAgICB0aGlzLl9hY3RpdmVBbm5vdGF0aW9uU2VydmljZS5jaGFuZ2VBY3RpdmUodGhpcy5pZCk7XG4gIH1cblxuICB3aWR0aCgkZXZlbnQpIHtcbiAgICB0aGlzLmRpbWVuc2lvbi53aWR0aCArPSAkZXZlbnQ7XG4gICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgfVxuXG4gIGhlaWdodCgkZXZlbnQpIHtcbiAgICB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgKz0gJGV2ZW50O1xuICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XG4gIH1cblxuICBsZWZ0KCRldmVudCkge1xuICAgIHRoaXMucG9zaXRpb24ubGVmdCArPSAkZXZlbnQ7XG4gICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgfVxuXG4gIHRvcCgkZXZlbnQpIHtcbiAgICB0aGlzLnBvc2l0aW9uLnRvcCArPSAkZXZlbnQ7XG4gICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgY29ycmVjdFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLmxlZnQgPCAwKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLmxlZnQgPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3NpdGlvbi50b3AgPCAwKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnRvcCArIHRoaXMuZGltZW5zaW9uLmhlaWdodCA+IHRoaXMucGFnZUhlaWdodCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBhZ2VIZWlnaHQgLSB0aGlzLmRpbWVuc2lvbi5oZWlnaHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc2l0aW9uLmxlZnQgKyB0aGlzLmRpbWVuc2lvbi53aWR0aCA+IHRoaXMucGFnZVdpZHRoKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLmxlZnQgPSB0aGlzLnBhZ2VXaWR0aCAtIHRoaXMuZGltZW5zaW9uLndpZHRoO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdPdmVyKCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgZHJhZ1N0YXJ0KCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5vbGRQb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcbiAgICBpZiAoJGV2ZW50LmRhdGFUcmFuc2Zlcikge1xuICAgICAgJGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ2ZvbycpO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdnaW5nKCRldmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xuICAgIGlmIChwb3NpdGlvbi54ICYmIHBvc2l0aW9uLnkgJiYgQW5ub3RhdGlvbkNvbXBvbmVudC5pc09uUGFnZShwb3NpdGlvbikpIHtcbiAgICAgIGNvbnN0IGxlZnQgPSBwb3NpdGlvbi54IC0gdGhpcy5vbGRQb3NpdGlvbi54O1xuICAgICAgY29uc3QgdG9wID0gcG9zaXRpb24ueSAtIHRoaXMub2xkUG9zaXRpb24ueTtcbiAgICAgIGlmICh0aGlzLmlzUG9seWxpbmUoKSkge1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tEcmFnZ2luZyhsZWZ0LCB0b3ApKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9pbnRzVmFsdWUgPSBcIlwiO1xuICAgICAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHRoaXMucG9pbnRzKSB7XG4gICAgICAgICAgcG9pbnQubGVmdCA9IHBvaW50LmxlZnQgKyBsZWZ0O1xuICAgICAgICAgIHBvaW50LnRvcCA9IHBvaW50LnRvcCArIHRvcDtcbiAgICAgICAgICB0aGlzLnBvaW50c1ZhbHVlICs9IHBvaW50LmxlZnQgKyBcIixcIiArIHBvaW50LnRvcCArIFwiIFwiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNQYXRoKCkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrRHJhZ2dpbmcobGVmdCwgdG9wKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uLmxlZnQgKz0gbGVmdDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgKz0gdG9wO1xuICAgICAgICB0aGlzLmVuZFBvc2l0aW9uLmxlZnQgKz0gbGVmdDtcbiAgICAgICAgdGhpcy5lbmRQb3NpdGlvbi50b3AgKz0gdG9wO1xuICAgICAgICB0aGlzLnBhdGhWYWx1ZSA9IFwiTVwiICsgdGhpcy5wb3NpdGlvbi5sZWZ0ICsgXCIsXCIgKyB0aGlzLnBvc2l0aW9uLnRvcCArIFwiIExcIiArIHRoaXMuZW5kUG9zaXRpb24ubGVmdCArIFwiLFwiICsgdGhpcy5lbmRQb3NpdGlvbi50b3A7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VWYWx1ZSA9IHRoaXMuZ2V0RGlzdGFuY2UoKSArIFwicHhcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ubGVmdCArPSBsZWZ0O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCArPSB0b3A7XG4gICAgICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmxlZnRUb3AubGVmdCArPSBsZWZ0O1xuICAgICAgdGhpcy5sZWZ0VG9wLnRvcCArPSB0b3A7XG4gICAgICB0aGlzLm9sZFBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgZ2V0QW5ub3RhdGlvbkNsYXNzKCkge1xuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFQuaWQ6XG4gICAgICAgIHJldHVybiBcImdkLWFubm90YXRpb24td3JhcHBlci1ib3JkZXIgZ2QtdGV4dC1hbm5vdGF0aW9uXCI7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfU1RSSUtFT1VULmlkOlxuICAgICAgICByZXR1cm4gXCJnZC1hbm5vdGF0aW9uLXdyYXBwZXItYm9yZGVyIGdkLXRleHQtYW5ub3RhdGlvbiBnZC10ZXh0LXN0cmlrZW91dC1hbm5vdGF0aW9uXCI7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfVU5ERVJMSU5FLmlkOlxuICAgICAgICByZXR1cm4gXCJnZC1hbm5vdGF0aW9uLXdyYXBwZXItYm9yZGVyIGdkLXRleHQtYW5ub3RhdGlvbiBnZC10ZXh0LXVuZGVybGluZS1hbm5vdGF0aW9uXCI7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfUkVEQUNUSU9OLmlkOlxuICAgICAgICByZXR1cm4gXCJnZC1hbm5vdGF0aW9uLXdyYXBwZXItYm9yZGVyIGdkLXRleHQtcmVkYWN0aW9uLWFubm90YXRpb25cIjtcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9SRVBMQUNFTUVOVC5pZDpcbiAgICAgICAgcmV0dXJuIFwiZ2QtYW5ub3RhdGlvbi13cmFwcGVyLWJvcmRlciBnZC10ZXh0LXJlcGxhY2VtZW50LWFubm90YXRpb25cIjtcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuUE9JTlQuaWQ6XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiZ2QtYW5ub3RhdGlvbi13cmFwcGVyLWJvcmRlclwiO1xuICAgIH1cbiAgfVxuXG4gIGlzU3RyaWtlb3V0T3JVbmRlcmxpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuVEVYVF9TVFJJS0VPVVQuaWQgfHwgdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5URVhUX1VOREVSTElORS5pZDtcbiAgfVxuXG4gIGlzVGV4dFJlcGxhY2VtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLlRFWFRfUkVQTEFDRU1FTlQuaWQ7XG4gIH1cblxuICBzYXZlVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy50ZXh0VmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGRyYXcocG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgaWYgKHRoaXMuaXNQb2x5bGluZSgpKSB7XG4gICAgICB0aGlzLmFkZFBvaW50KHBvc2l0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNQYXRoKCkpIHtcbiAgICAgIHRoaXMuc2V0RW5kUG9zaXRpb24ocG9zaXRpb24pO1xuICAgICAgdGhpcy5kaXN0YW5jZVZhbHVlID0gdGhpcy5nZXREaXN0YW5jZSgpICsgXCJweFwiO1xuICAgIH1cbiAgICB0aGlzLmNhbGNQb3NpdGlvbkFuZERpbWVuc2lvbigpO1xuICB9XG5cbiAgc2V0U3R5bGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnc3Ryb2tlJzogJyM1NzlBRjAnLFxuICAgICAgJ3N0cm9rZS13aWR0aCc6IDIsXG4gICAgICAnZmlsbC1vcGFjaXR5JzogMCxcbiAgICAgICdpZCc6ICh0aGlzLmlzUG9seWxpbmUoKSA/ICdnZC1wb2x5bGluZS1hbm5vdGF0aW9uLScgOiAodGhpcy5pc0Rpc3RhbmNlKCkgPyAnZ2QtZGlzdGFuY2UtYW5ub3RhdGlvbi0nIDogJ2dkLWFycm93LWFubm90YXRpb24tJykpICsgdGhpcy5pZCxcbiAgICAgICdjbGFzcyc6ICdhbm5vdGF0aW9uLXN2ZycsXG4gICAgfTtcbiAgfVxuXG4gIGlzUG9seWxpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUuaWQ7XG4gIH1cblxuICBwcml2YXRlIGNhbGNQb3NpdGlvbkFuZERpbWVuc2lvbigpIHtcbiAgICBjb25zdCBsZWZ0VG9wID0gbmV3IFBvc2l0aW9uKE51bWJlci5NQVhfVkFMVUUsIE51bWJlci5NQVhfVkFMVUUpO1xuICAgIGNvbnN0IHJpZ2h0Qm90dG9tID0gbmV3IFBvc2l0aW9uKE51bWJlci5NSU5fVkFMVUUsIE51bWJlci5NSU5fVkFMVUUpO1xuICAgIGlmICh0aGlzLmlzUG9seWxpbmUoKSkge1xuICAgICAgZm9yIChjb25zdCBwb2ludCBvZiB0aGlzLnBvaW50cykge1xuICAgICAgICBsZWZ0VG9wLmxlZnQgPSBNYXRoLm1pbihwb2ludC5sZWZ0LCBsZWZ0VG9wLmxlZnQpO1xuICAgICAgICBsZWZ0VG9wLnRvcCA9IE1hdGgubWluKHBvaW50LnRvcCwgbGVmdFRvcC50b3ApO1xuICAgICAgICByaWdodEJvdHRvbS5sZWZ0ID0gTWF0aC5tYXgocG9pbnQubGVmdCwgcmlnaHRCb3R0b20ubGVmdCk7XG4gICAgICAgIHJpZ2h0Qm90dG9tLnRvcCA9IE1hdGgubWF4KHBvaW50LnRvcCwgcmlnaHRCb3R0b20udG9wKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdFRvcC5sZWZ0ID0gTWF0aC5taW4odGhpcy5wb3NpdGlvbi5sZWZ0LCB0aGlzLmVuZFBvc2l0aW9uLmxlZnQpO1xuICAgICAgbGVmdFRvcC50b3AgPSBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnRvcCwgdGhpcy5lbmRQb3NpdGlvbi50b3ApO1xuICAgICAgcmlnaHRCb3R0b20ubGVmdCA9IE1hdGgubWF4KHRoaXMucG9zaXRpb24ubGVmdCwgdGhpcy5lbmRQb3NpdGlvbi5sZWZ0KTtcbiAgICAgIHJpZ2h0Qm90dG9tLnRvcCA9IE1hdGgubWF4KHRoaXMucG9zaXRpb24udG9wLCB0aGlzLmVuZFBvc2l0aW9uLnRvcCk7XG4gICAgfVxuICAgIHRoaXMuZGltZW5zaW9uLndpZHRoID0gcmlnaHRCb3R0b20ubGVmdCAtIGxlZnRUb3AubGVmdDtcbiAgICB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgPSByaWdodEJvdHRvbS50b3AgLSBsZWZ0VG9wLnRvcDtcbiAgICB0aGlzLmxlZnRUb3AgPSBsZWZ0VG9wO1xuICB9XG5cbiAgY2FsY0RpbWVuc2lvbnMoY3VycmVudFBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgIHRoaXMuZGltZW5zaW9uLndpZHRoID0gY3VycmVudFBvc2l0aW9uLmxlZnQgLSB0aGlzLnBvc2l0aW9uLmxlZnQ7XG4gICAgdGhpcy5kaW1lbnNpb24uaGVpZ2h0ID0gY3VycmVudFBvc2l0aW9uLnRvcCAtIHRoaXMucG9zaXRpb24udG9wO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IE1hdGguYWJzKHRoaXMuZGltZW5zaW9uLmhlaWdodCk7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaW1lbnNpb24ud2lkdGggPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IE1hdGguYWJzKHRoaXMuZGltZW5zaW9uLndpZHRoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tEcmFnZ2luZyhsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyKSB7XG4gICAgcmV0dXJuICEodGhpcy5sZWZ0VG9wLmxlZnQgKyBsZWZ0IDwgMCB8fCB0aGlzLmxlZnRUb3AudG9wICsgdG9wIDwgMCB8fFxuICAgICAgdGhpcy5sZWZ0VG9wLnRvcCArIHRvcCArIHRoaXMuZGltZW5zaW9uLmhlaWdodCA+IHRoaXMucGFnZUhlaWdodCB8fFxuICAgICAgdGhpcy5sZWZ0VG9wLmxlZnQgKyBsZWZ0ICsgdGhpcy5kaW1lbnNpb24ud2lkdGggPiB0aGlzLnBhZ2VXaWR0aCk7XG4gIH1cblxuICBpc1BvaW50KCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLlBPSU5ULmlkO1xuICB9XG5cbiAgaXNTVkcoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUuaWQgfHxcbiAgICAgIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuRElTVEFOQ0UuaWQgfHxcbiAgICAgIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuQVJST1cuaWQ7XG4gIH1cblxuICBpc0Rpc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLkRJU1RBTkNFLmlkO1xuICB9XG5cbiAgZGlzdGFuY2VUZXh0T3B0aW9ucygpIHtcbiAgICByZXR1cm4geydmb250LXNpemUnOiBcIjEycHhcIn1cbiAgfVxuXG4gIGlzUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5ESVNUQU5DRS5pZCB8fFxuICAgICAgdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5BUlJPVy5pZDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RW5kUG9zaXRpb24ocG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgdGhpcy5lbmRQb3NpdGlvbiA9IFBvc2l0aW9uLmNsb25lKHBvc2l0aW9uKTtcbiAgICB0aGlzLnBhdGhWYWx1ZSA9IFwiTVwiICsgdGhpcy5wb3NpdGlvbi5sZWZ0ICsgXCIsXCIgKyB0aGlzLnBvc2l0aW9uLnRvcCArIFwiIExcIiArIHRoaXMuZW5kUG9zaXRpb24ubGVmdCArIFwiLFwiICsgdGhpcy5lbmRQb3NpdGlvbi50b3A7XG4gIH1cblxuICBwcml2YXRlIGFkZFBvaW50KHBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgIHRoaXMucG9pbnRzLnB1c2gocG9zaXRpb24pO1xuICAgIHRoaXMucG9pbnRzVmFsdWUgKz0gcG9zaXRpb24ubGVmdCArIFwiLFwiICsgcG9zaXRpb24udG9wICsgXCIgXCI7XG4gIH1cblxuICBwcml2YXRlIGdldERpc3RhbmNlKCkge1xuICAgIGNvbnN0IHhzID0gdGhpcy5wb3NpdGlvbi5sZWZ0IC0gdGhpcy5lbmRQb3NpdGlvbi5sZWZ0O1xuICAgIGNvbnN0IHlzID0gdGhpcy5wb3NpdGlvbi50b3AgLSB0aGlzLmVuZFBvc2l0aW9uLnRvcDtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnNxcnQoeHMgKiB4cyArIHlzICogeXMpKTtcbiAgfVxuXG4gIGJvdHRvbSgpIHtcbiAgICByZXR1cm4gJ3VybCgnICsgd2luZG93LmxvY2F0aW9uICsgJyNlbmQpJztcbiAgfVxuXG4gIGhlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNEaXN0YW5jZSgpID8gJ3VybCgnICsgd2luZG93LmxvY2F0aW9uICsgJyNzdGFydCknIDogXCJcIjtcbiAgfVxuXG4gIGdldFRleHRYKCkge1xuICAgIHJldHVybiB0aGlzLmdldERpc3RhbmNlKCkgLyAyO1xuICB9XG5cbiAgaXNUZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLlRFWFRfRklFTEQuaWQgfHwgdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5XQVRFUk1BUksuaWQ7XG4gIH1cblxuICBnZXRGb3JtYXR0aW5nKCkge1xuICAgIGNvbnN0IGYgPSB0aGlzLmZvcm1hdHRpbmc7XG4gICAgY29uc3QgZm9ybWF0dGluZyA9IEZvcm1hdHRpbmcuZGVmYXVsdCgpO1xuICAgIGlmIChmKSB7XG4gICAgICBmb3JtYXR0aW5nLmZvbnRTaXplID0gZi5mb250U2l6ZTtcbiAgICAgIGZvcm1hdHRpbmcuZm9udCA9IGYuZm9udDtcbiAgICAgIGZvcm1hdHRpbmcuY29sb3IgPSBmLmNvbG9yO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGluZztcbiAgfVxuXG4gIHNhdmVGb3JtYXR0aW5nKCRldmVudDogRm9ybWF0dGluZykge1xuICAgIHRoaXMuZm9ybWF0dGluZy5mb250U2l6ZSA9ICRldmVudC5mb250U2l6ZTtcbiAgICB0aGlzLmZvcm1hdHRpbmcuZm9udCA9ICRldmVudC5mb250O1xuICAgIHRoaXMuZm9ybWF0dGluZy5jb2xvciA9ICRldmVudC5jb2xvcjtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLl9yZW1vdmVBbm5vdGF0aW9uU2VydmljZS5yZW1vdmUobmV3IFJlbW92ZUFubm90YXRpb24odGhpcy5pZCkpO1xuICB9XG5cbiAgZ2V0TWVudVNoaWZ0KCkge1xuICAgIGNvbnN0IG1lbnVXaWR0aCA9IHRoaXMuaXNUZXh0KCkgPyAyNjUgOiAxNDg7XG4gICAgcmV0dXJuIHRoaXMuZGltZW5zaW9uLndpZHRoID4gbWVudVdpZHRoID8gMCA6ICh0aGlzLmRpbWVuc2lvbi53aWR0aCAtIG1lbnVXaWR0aCkgKiAwLjU7XG4gIH1cblxuICBnZXRNZW51VHlwZSgpIHtcbiAgICByZXR1cm4gTWVudVR5cGUuRk9SX0FOTk9UQVRJT047XG4gIH1cblxuICBhZGRDb21tZW50KCkge1xuICAgIHRoaXMuX2NvbW1lbnRBbm5vdGF0aW9uU2VydmljZS5jb21tZW50KG5ldyBDb21tZW50QW5ub3RhdGlvbih0aGlzLmlkKSk7XG4gIH1cblxuICBwcml2YXRlIHNldFRleHRGb2N1cygpIHtcbiAgICBpZiAodGhpcy5pc1RleHQoKSB8fCB0aGlzLmlzVGV4dFJlcGxhY2VtZW50KCkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gJChcIiN0ZXh0XCIpO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICB0ZXh0QXJlYUhlaWdodChrZXk6IGFueSwgdGV4dGFyZWE6IGFueSkge1xuICAgIHRoaXMuZGltZW5zaW9uLmhlaWdodCA9IFwiRW50ZXJcIiA9PT0ga2V5ID8gdGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ICsgdGhpcy5mb3JtYXR0aW5nLmZvbnRTaXplIDogdGV4dGFyZWEuc2Nyb2xsSGVpZ2h0O1xuICAgIHRoaXMuZGltZW5zaW9uLndpZHRoID0gdGV4dGFyZWEuc2Nyb2xsV2lkdGg7XG4gIH1cblxuICBoaWRlTWVudSgkZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5fYWN0aXZlQW5ub3RhdGlvblNlcnZpY2UuY2hhbmdlQWN0aXZlKG51bGwpO1xuICB9XG5cbiAgZ2V0QW5ub3RhdGlvbkRhdGEoKTogQW5ub3RhdGlvbkRhdGEge1xuICAgIGNvbnN0IGFubm90YXRpb25EYXRhID0gbmV3IEFubm90YXRpb25EYXRhKCk7XG4gICAgYW5ub3RhdGlvbkRhdGEuaWQgPSB0aGlzLmlkO1xuICAgIGFubm90YXRpb25EYXRhLnRleHQgPSB0aGlzLnRleHRWYWx1ZTtcbiAgICBhbm5vdGF0aW9uRGF0YS5mb250Q29sb3IgPSBwYXJzZUludChVdGlscy50b0hleCh0aGlzLmZvcm1hdHRpbmcuY29sb3IpLnJlcGxhY2UoXCIjXCIsIFwiXCIpLCAxNik7XG4gICAgYW5ub3RhdGlvbkRhdGEuZm9udFNpemUgPSB0aGlzLmZvcm1hdHRpbmcuZm9udFNpemU7XG4gICAgYW5ub3RhdGlvbkRhdGEuZm9udCA9IHRoaXMuZm9ybWF0dGluZy5mb250O1xuICAgIGFubm90YXRpb25EYXRhLmxlZnQgPSB0aGlzLmxlZnRUb3AubGVmdDtcbiAgICBhbm5vdGF0aW9uRGF0YS50b3AgPSB0aGlzLmxlZnRUb3AudG9wO1xuICAgIGFubm90YXRpb25EYXRhLmhlaWdodCA9IHRoaXMuZGltZW5zaW9uLmhlaWdodDtcbiAgICBhbm5vdGF0aW9uRGF0YS53aWR0aCA9IHRoaXMuZGltZW5zaW9uLndpZHRoO1xuICAgIGFubm90YXRpb25EYXRhLnBhZ2VOdW1iZXIgPSB0aGlzLnBhZ2VOdW1iZXI7XG4gICAgYW5ub3RhdGlvbkRhdGEudHlwZSA9IHRoaXMudHlwZTtcbiAgICBhbm5vdGF0aW9uRGF0YS5zdmdQYXRoID0gdGhpcy5nZXRTdmdQYXRoKCk7XG4gICAgcmV0dXJuIGFubm90YXRpb25EYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdmdQYXRoKCkge1xuICAgIGxldCBzdmdQYXRoID0gXCJNXCI7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUuaWQpIHtcbiAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICBsZXQgcHJldmlvdXNYID0gMCwgcHJldmlvdXNZID0gMDtcbiAgICAgIGZvciAoY29uc3QgcG9pbnQgb2YgdGhpcy5wb2ludHMpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgc3ZnUGF0aCArPSBwb2ludC5sZWZ0ICsgXCIsXCIgKyBwb2ludC50b3AgKyBcImxcIjtcbiAgICAgICAgICBpbmRleCA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldmlvdXNYID0gcG9pbnQubGVmdCAtIHByZXZpb3VzWDtcbiAgICAgICAgICBwcmV2aW91c1kgPSBwb2ludC50b3AgLSBwcmV2aW91c1k7XG4gICAgICAgICAgc3ZnUGF0aCArPSBwcmV2aW91c1ggKyBcIixcIiArIHByZXZpb3VzWSArIFwibFwiO1xuICAgICAgICB9XG4gICAgICAgIHByZXZpb3VzWCA9IHBvaW50LmxlZnQ7XG4gICAgICAgIHByZXZpb3VzWSA9IHBvaW50LnRvcDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuRElTVEFOQ0UuaWQgfHwgdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5BUlJPVy5pZCkge1xuICAgICAgc3ZnUGF0aCArPSB0aGlzLnBvc2l0aW9uLmxlZnQgKyBcIixcIiArIHRoaXMucG9zaXRpb24udG9wICsgXCIgXCI7XG4gICAgICBzdmdQYXRoICs9IHRoaXMuZW5kUG9zaXRpb24ubGVmdCArIFwiLFwiICsgdGhpcy5lbmRQb3NpdGlvbi50b3AgKyBcIiBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ZnUGF0aCA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBzdmdQYXRoO1xuICB9XG59XG4iXX0=