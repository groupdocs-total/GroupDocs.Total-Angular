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
        else if (this.type === AnnotationType.POINT.id) {
            this.initPoint();
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
        if (this.checkDragging($event, 0)) {
            this.dimension.width += $event;
        }
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
        if (this.checkDragging(0, $event)) {
            this.dimension.height += $event;
        }
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
        this.refreshLeftTop();
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
        this.refreshLeftTop();
    };
    /**
     * @private
     * @return {?}
     */
    AnnotationComponent.prototype.refreshLeftTop = /**
     * @private
     * @return {?}
     */
    function () {
        this.leftTop.left = this.position.left;
        this.leftTop.top = this.position.top;
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
     * @return {?}
     */
    AnnotationComponent.prototype.initPoint = /**
     * @return {?}
     */
    function () {
        this.dimension = new Dimension(40, 40);
        this.position.left = this.position.left - 20;
        this.position.top = this.position.top - 20;
        this.leftTop = Position.clone(this.position);
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
                this.leftTop.left += left;
                this.leftTop.top += top_1;
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
                this.leftTop.left += left;
                this.leftTop.top += top_1;
            }
            else {
                this.position.left += left;
                this.position.top += top_1;
                this.correctPosition();
                this.refreshLeftTop();
            }
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
        if (currentPosition.left <= this.pageWidth && currentPosition.left >= 0) {
            this.dimension.width = currentPosition.left - this.position.left;
        }
        if (currentPosition.top <= this.pageHeight && currentPosition.top >= 0) {
            this.dimension.height = currentPosition.top - this.position.top;
        }
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
        var menuWidth = this.isText() ? 265 : 111;
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
        var _this = this;
        if (this.isText() || this.isTextReplacement()) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var element = $("#text-" + _this.id);
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
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    AnnotationComponent.prototype.onPage = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        return position.left <= this.pageWidth && position.top <= this.pageHeight &&
            position.left >= 0 && position.top >= 0;
    };
    AnnotationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-annotation',
                    template: "<div class=\"gd-annotation\"\n     (clickOutside)=\"hideMenu($event)\"\n     [exclude]=\"'gd-context-menu,.ui-resizable-handle,.gd-comments-panel'\"\n     [excludeBeforeClick]=\"true\"\n     [clickOutsideEvents]=\"'mousedown'\"\n     [clickOutsideEnabled]=\"active\"\n     [style.left.px]=\"leftTop.left\" [style.top.px]=\"leftTop.top\"\n     [style.width.px]=\"getWidth()\"\n     [style.height.px]=\"getHeight()\"\n     (click)=\"activation()\"\n     (touchstart)=\"activation()\">\n  <div [draggable]=\"true\" (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\n       (drag)=\"dragging($event)\" (dragend)=\"dragging($event)\" (drop)=\"dragOver($event)\"\n       (panstart)=\"dragStart($event)\" (panmove)=\"dragging($event)\"\n       class=\"gd-annotation-wrapper\" [ngClass]=\"getAnnotationClass()\">\n    <gd-context-menu *ngIf=\"active\" [topPosition]=\"position.top\" [textMenu]=\"isText()\" [formatting]=\"getFormatting()\"\n                     (changeFormatting)=\"saveFormatting($event)\" (removeItem)=\"remove()\"\n                     [translation]=\"getMenuShift()\" [menuType]=\"getMenuType()\"\n                     (comment)=\"addComment()\"></gd-context-menu>\n    <div class=\"gd-text-strikeout-line\" *ngIf=\"isStrikeoutOrUnderline()\"></div>\n    <textarea wrap=\"off\" class=\"gd-text\" *ngIf=\"isTextReplacement() || isText()\" [value]=\"textValue\"\n              id=\"{{'text-' + id}}\" #text (keyup)=\"saveText(text.value)\"\n              (keydown)=\"textAreaHeight($event.key, text)\"\n              [style.color]=\"formatting?.color\"\n              [style.font-family]=\"formatting?.font\"\n              [style.font-size.px]=\"formatting?.fontSize\"\n              [style.width.px]=\"getWidth()\"\n              [style.height.px]=\"getHeight()\"></textarea>\n    <div *ngIf=\"isPoint()\" class=\"gd-point\">\n      <fa-icon class=\"icon\" [icon]=\"['fas','thumbtack']\" [size]=\"'lg'\"></fa-icon>\n    </div>\n  </div>\n\n  <gd-resizing [id]=\"id\" *ngIf=\"active && !isSVG() && !isPoint()\"\n               (offsetX)=\"width($event)\" (offsetY)=\"height($event)\"\n               (offsetTop)=\"top($event)\" (offsetLeft)=\"left($event)\"\n               [se]=\"true\" [sw]=\"true\" [ne]=\"true\" [nw]=\"true\"\n               [pageHeight]=\"pageHeight\" [pageWidth]=\"pageWidth\"></gd-resizing>\n</div>\n<svg *ngIf=\"isSVG()\" class=\"svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polyline *ngIf=\"isPolyline()\" [attr.id]=\"id\" [attr.points]=\"pointsValue\" [ngStyle]=\"setStyles()\">\n  </polyline>\n  <path id=\"{{'gd-path-' + id}}\" *ngIf=\"isPath()\" [attr.d]=\"pathValue\" [attr.marker-end]=\"bottom()\"\n        [attr.marker-start]=\"head()\" [ngStyle]=\"setStyles()\">\n    <title *ngIf=\"isDistance()\" [ngStyle]=\"distanceTextOptions()\">{{ distanceValue }}</title>\n  </path>\n  <text *ngIf=\"isDistance()\" [ngStyle]=\"distanceTextOptions()\" [attr.x]=\"getTextX()\"\n        [attr.y]=\"0\">\n    <textPath [attr.href]=\"'#gd-path-' + id\">\n      {{ distanceValue }}\n    </textPath>\n  </text>\n</svg>\n",
                    styles: [".gd-annotation{position:absolute!important;cursor:pointer;z-index:9}.gd-annotation .gd-annotation-wrapper-border{outline:#679ffa solid 1px;display:-webkit-box}.gd-annotation .gd-annotation-wrapper{height:inherit;z-index:9}.gd-annotation .gd-annotation-wrapper ::ng-deep .palette{width:0;height:37px}.gd-annotation .gd-annotation-wrapper .gd-text-strikeout-line{background-color:#e04e4e;height:2px;width:100%}.gd-annotation .gd-annotation-wrapper .gd-text{border:none;outline:0;margin:0;padding:0;overflow:hidden;background-color:transparent;min-width:1em;min-height:1em}.gd-annotation .gd-annotation-wrapper .gd-point{background-color:#7cbc46;width:41px;height:41px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;color:#fff;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;-khtml-border-radius:50%;box-shadow:0 1px 1px 1px #bbb;-moz-box-shadow:0 1px 1px 1px #bbb;-webkit-box-shadow:0 1px 1px 1px #bbb}.gd-annotation .gd-text-annotation{background-color:rgba(151,151,240,.51)}.gd-annotation .gd-text-strikeout-annotation{align-items:center;-webkit-box-align:center}.gd-annotation .gd-text-underline-annotation{align-items:end;-webkit-box-align:end}.gd-annotation .gd-text-redaction-annotation{background-color:#000}.gd-annotation .gd-text-replacement-annotation{background-color:#fff}.svg{z-index:1;position:absolute;top:0;left:0;width:100%;height:100%}.annotation-svg{position:absolute;cursor:pointer;z-index:2}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hbm5vdGF0aW9uL2Fubm90YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUNMLGNBQWMsRUFDZCxjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxRQUFRLEVBQ1IsZ0JBQWdCLEVBQ2pCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDMUYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDdkUsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O0lBRTNCLENBQUMsR0FBRyxNQUFNO0FBRWhCO0lBMkJFLDZCQUFvQix3QkFBaUQsRUFDakQsd0JBQWlELEVBQ2pELHlCQUFtRDtRQUZ2RSxpQkFTQztRQVRtQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO1FBQ2pELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBeUI7UUFDakQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQWhCdkUsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLGNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFaEMsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsRUFBRSxD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ckU7YUFBTTtZQUNMLE9BQU8sR0FBRyxFQUFFLENBQUM7U0FDZDtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7OztJQUVPLG9DQUFNOzs7OztJQUFkLFVBQWUsUUFBa0I7UUFDL0IsT0FBTyxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVTtZQUN2RSxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDOztnQkEvY0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qix3Z0dBQTBDOztpQkFFM0M7Ozs7Z0JBWk8sdUJBQXVCO2dCQUV2Qix1QkFBdUI7Z0JBQ3ZCLHdCQUF3Qjs7SUFxZGhDLDBCQUFDO0NBQUEsQUFoZEQsSUFnZEM7U0EzY1ksbUJBQW1COzs7SUFFOUIsaUNBQVc7O0lBQ1gsdUNBQW1COztJQUNuQixzQ0FBa0I7O0lBQ2xCLG1DQUFhOztJQUNiLHdDQUFrQjs7SUFDbEIseUNBQW1COztJQUNuQixxQ0FBYzs7SUFDZCx3Q0FBZ0M7O0lBQ2hDLHlDQUFtQjs7SUFDbkIsd0NBQWU7O0lBQ2Ysd0NBQWtCOztJQUNsQiw0Q0FBc0I7O0lBQ3RCLDBDQUFpQjs7SUFDakIsc0NBQWE7O0lBQ2IseUNBQWtDOzs7OztJQUVsQywwQ0FBOEM7Ozs7O0lBQzlDLHFDQUFvQjs7Ozs7SUFDcEIsMENBQThCOzs7OztJQUVsQix1REFBeUQ7Ozs7O0lBQ3pELHVEQUF5RDs7Ozs7SUFDekQsd0RBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBbm5vdGF0aW9uRGF0YSxcbiAgQW5ub3RhdGlvblR5cGUsXG4gIENvbW1lbnRBbm5vdGF0aW9uLFxuICBEaW1lbnNpb24sXG4gIFBvc2l0aW9uLFxuICBSZW1vdmVBbm5vdGF0aW9uXG59IGZyb20gXCIuLi9hbm5vdGF0aW9uLW1vZGVsc1wiO1xuaW1wb3J0IHtBY3RpdmVBbm5vdGF0aW9uU2VydmljZX0gZnJvbSBcIi4uL2FjdGl2ZS1hbm5vdGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7Rm9ybWF0dGluZywgVXRpbHMsIE1lbnVUeXBlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge1JlbW92ZUFubm90YXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vcmVtb3ZlLWFubm90YXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHtDb21tZW50QW5ub3RhdGlvblNlcnZpY2V9IGZyb20gXCIuLi9jb21tZW50LWFubm90YXRpb24uc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWFubm90YXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYW5ub3RhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Fubm90YXRpb24uY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBpZDogbnVtYmVyO1xuICBwb3NpdGlvbjogUG9zaXRpb247XG4gIGxlZnRUb3A6IFBvc2l0aW9uO1xuICB0eXBlOiBzdHJpbmc7XG4gIHBhZ2VXaWR0aDogbnVtYmVyO1xuICBwYWdlSGVpZ2h0OiBudW1iZXI7XG4gIGFjdGl2ZSA9IHRydWU7XG4gIGRpbWVuc2lvbiA9IG5ldyBEaW1lbnNpb24oMCwgMCk7XG4gIHBhZ2VOdW1iZXI6IG51bWJlcjtcbiAgdGV4dFZhbHVlID0gXCJcIjtcbiAgcGF0aFZhbHVlOiBzdHJpbmc7XG4gIGRpc3RhbmNlVmFsdWUgPSAnMHB4JztcbiAgcG9pbnRzVmFsdWUgPSBcIlwiO1xuICBzdmdQYXRoID0gXCJcIjtcbiAgZm9ybWF0dGluZyA9IEZvcm1hdHRpbmcuZGVmYXVsdCgpO1xuXG4gIHByaXZhdGUgb2xkUG9zaXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcbiAgcHJpdmF0ZSBwb2ludHMgPSBbXTtcbiAgcHJpdmF0ZSBlbmRQb3NpdGlvbjogUG9zaXRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aXZlQW5ub3RhdGlvblNlcnZpY2U6IEFjdGl2ZUFubm90YXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW1vdmVBbm5vdGF0aW9uU2VydmljZTogUmVtb3ZlQW5ub3RhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NvbW1lbnRBbm5vdGF0aW9uU2VydmljZTogQ29tbWVudEFubm90YXRpb25TZXJ2aWNlKSB7XG4gICAgdGhpcy5fYWN0aXZlQW5ub3RhdGlvblNlcnZpY2UuYWN0aXZlQ2hhbmdlLnN1YnNjcmliZSgoaWQ6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLmlkID09PSBpZDtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnNldFRleHRGb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGlzT25QYWdlKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xuICAgIHJldHVybiBjdXJyZW50UGFnZSAmJiAkKGN1cnJlbnRQYWdlKS5wYXJlbnQoKS5wYXJlbnQoKSAmJlxuICAgICAgKCQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmhhc0NsYXNzKFwicGFnZVwiKSB8fFxuICAgICAgICAkKGN1cnJlbnRQYWdlKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5oYXNDbGFzcyhcInBhZ2VcIikpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sZWZ0VG9wID0gUG9zaXRpb24uY2xvbmUodGhpcy5wb3NpdGlvbik7XG4gICAgaWYgKHRoaXMuaXNQb2x5bGluZSgpKSB7XG4gICAgICBpZiAodGhpcy5zdmdQYXRoKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFBvaW50cyA9IHRoaXMuc3ZnUGF0aC5yZXBsYWNlKFwiTVwiLCBcIlwiKS5zcGxpdCgnTCcpO1xuICAgICAgICBsZXQgeCA9IHBhcnNlRmxvYXQocGFyc2VkUG9pbnRzWzBdLnNwbGl0KFwiLFwiKVswXSk7XG4gICAgICAgIGxldCB5ID0gcGFyc2VGbG9hdChwYXJzZWRQb2ludHNbMF0uc3BsaXQoXCIsXCIpWzFdKTtcbiAgICAgICAgY29uc3QgY29tcCA9IHRoaXM7XG4gICAgICAgIHBhcnNlZFBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChwb2ludCwgaW5kZXgpIHtcbiAgICAgICAgICBpZiAoaW5kZXggIT09IDApIHtcbiAgICAgICAgICAgIGlmIChwb2ludCAhPT0gXCJcIikge1xuICAgICAgICAgICAgICBjb21wLmFkZFBvaW50KG5ldyBQb3NpdGlvbih4LCB5KSk7XG4gICAgICAgICAgICAgIHggPSAoeCArIHBhcnNlRmxvYXQocG9pbnQuc3BsaXQoXCIsXCIpWzBdKSk7XG4gICAgICAgICAgICAgIHkgPSAoeSArIHBhcnNlRmxvYXQocG9pbnQuc3BsaXQoXCIsXCIpWzFdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkUG9pbnQodGhpcy5wb3NpdGlvbik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUGF0aCgpKSB7XG4gICAgICBpZiAodGhpcy5zdmdQYXRoIHx8ICh0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLkFSUk9XLmlkICYmICF0aGlzLmRpbWVuc2lvbi5pc05vbmUoKSkpIHtcbiAgICAgICAgY29uc3QgZW5kID0gbmV3IFBvc2l0aW9uKHRoaXMucG9zaXRpb24ubGVmdCArIHRoaXMuZGltZW5zaW9uLndpZHRoLCB0aGlzLnBvc2l0aW9uLnRvcCArIHRoaXMuZGltZW5zaW9uLmhlaWdodCk7XG4gICAgICAgIHRoaXMuc2V0RW5kUG9zaXRpb24oZW5kKTtcbiAgICAgICAgaWYgKHRoaXMuZGltZW5zaW9uLmhlaWdodCA8IDApIHtcbiAgICAgICAgICB0aGlzLmxlZnRUb3AudG9wICs9IHRoaXMuZGltZW5zaW9uLmhlaWdodDtcbiAgICAgICAgICB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgPSB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgKiAoLTEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRpbWVuc2lvbi53aWR0aCA8IDApIHtcbiAgICAgICAgICB0aGlzLmxlZnRUb3AubGVmdCArPSB0aGlzLmRpbWVuc2lvbi53aWR0aDtcbiAgICAgICAgICB0aGlzLmRpbWVuc2lvbi53aWR0aCA9IHRoaXMuZGltZW5zaW9uLndpZHRoICogKC0xKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRFbmRQb3NpdGlvbih0aGlzLnBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGlzdGFuY2VWYWx1ZSA9IHRoaXMuZ2V0RGlzdGFuY2UoKSArIFwicHhcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuUE9JTlQuaWQpIHtcbiAgICAgIHRoaXMuaW5pdFBvaW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0RW5kUG9zaXRpb24odGhpcy5wb3NpdGlvbik7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VGV4dEZvY3VzKCk7XG4gIH1cblxuICBhY3RpdmF0aW9uKCkge1xuICAgIHRoaXMuX2FjdGl2ZUFubm90YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZSh0aGlzLmlkKTtcbiAgfVxuXG4gIHdpZHRoKCRldmVudCkge1xuICAgIGlmICh0aGlzLmNoZWNrRHJhZ2dpbmcoJGV2ZW50LCAwKSkge1xuICAgICAgdGhpcy5kaW1lbnNpb24ud2lkdGggKz0gJGV2ZW50O1xuICAgIH1cbiAgfVxuXG4gIGhlaWdodCgkZXZlbnQpIHtcbiAgICBpZiAodGhpcy5jaGVja0RyYWdnaW5nKDAsICRldmVudCkpIHtcbiAgICAgIHRoaXMuZGltZW5zaW9uLmhlaWdodCArPSAkZXZlbnQ7XG4gICAgfVxuICB9XG5cbiAgbGVmdCgkZXZlbnQpIHtcbiAgICB0aGlzLnBvc2l0aW9uLmxlZnQgKz0gJGV2ZW50O1xuICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XG4gICAgdGhpcy5yZWZyZXNoTGVmdFRvcCgpO1xuICB9XG5cbiAgdG9wKCRldmVudCkge1xuICAgIHRoaXMucG9zaXRpb24udG9wICs9ICRldmVudDtcbiAgICB0aGlzLmNvcnJlY3RQb3NpdGlvbigpO1xuICAgIHRoaXMucmVmcmVzaExlZnRUb3AoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaExlZnRUb3AoKSB7XG4gICAgdGhpcy5sZWZ0VG9wLmxlZnQgPSB0aGlzLnBvc2l0aW9uLmxlZnQ7XG4gICAgdGhpcy5sZWZ0VG9wLnRvcCA9IHRoaXMucG9zaXRpb24udG9wO1xuICB9XG5cbiAgcHJpdmF0ZSBjb3JyZWN0UG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMucG9zaXRpb24ubGVmdCA8IDApIHtcbiAgICAgIHRoaXMucG9zaXRpb24ubGVmdCA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnRvcCA8IDApIHtcbiAgICAgIHRoaXMucG9zaXRpb24udG9wID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zaXRpb24udG9wICsgdGhpcy5kaW1lbnNpb24uaGVpZ2h0ID4gdGhpcy5wYWdlSGVpZ2h0KSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucGFnZUhlaWdodCAtIHRoaXMuZGltZW5zaW9uLmhlaWdodDtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zaXRpb24ubGVmdCArIHRoaXMuZGltZW5zaW9uLndpZHRoID4gdGhpcy5wYWdlV2lkdGgpIHtcbiAgICAgIHRoaXMucG9zaXRpb24ubGVmdCA9IHRoaXMucGFnZVdpZHRoIC0gdGhpcy5kaW1lbnNpb24ud2lkdGg7XG4gICAgfVxuICB9XG5cbiAgZHJhZ092ZXIoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBkcmFnU3RhcnQoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLm9sZFBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xuICAgIGlmICgkZXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgICAkZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnZm9vJyk7XG4gICAgfVxuICB9XG5cbiAgaW5pdFBvaW50KCkge1xuICAgIHRoaXMuZGltZW5zaW9uID0gbmV3IERpbWVuc2lvbig0MCwgNDApO1xuICAgIHRoaXMucG9zaXRpb24ubGVmdCA9IHRoaXMucG9zaXRpb24ubGVmdCAtIDIwO1xuICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AgLSAyMDtcbiAgICB0aGlzLmxlZnRUb3AgPSBQb3NpdGlvbi5jbG9uZSh0aGlzLnBvc2l0aW9uKTtcbiAgfVxuXG4gIGRyYWdnaW5nKCRldmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xuICAgIGlmIChwb3NpdGlvbi54ICYmIHBvc2l0aW9uLnkgJiYgQW5ub3RhdGlvbkNvbXBvbmVudC5pc09uUGFnZShwb3NpdGlvbikpIHtcbiAgICAgIGNvbnN0IGxlZnQgPSBwb3NpdGlvbi54IC0gdGhpcy5vbGRQb3NpdGlvbi54O1xuICAgICAgY29uc3QgdG9wID0gcG9zaXRpb24ueSAtIHRoaXMub2xkUG9zaXRpb24ueTtcbiAgICAgIGlmICh0aGlzLmlzUG9seWxpbmUoKSkge1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tEcmFnZ2luZyhsZWZ0LCB0b3ApKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9pbnRzVmFsdWUgPSBcIlwiO1xuICAgICAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHRoaXMucG9pbnRzKSB7XG4gICAgICAgICAgcG9pbnQubGVmdCA9IHBvaW50LmxlZnQgKyBsZWZ0O1xuICAgICAgICAgIHBvaW50LnRvcCA9IHBvaW50LnRvcCArIHRvcDtcbiAgICAgICAgICB0aGlzLnBvaW50c1ZhbHVlICs9IHBvaW50LmxlZnQgKyBcIixcIiArIHBvaW50LnRvcCArIFwiIFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGVmdFRvcC5sZWZ0ICs9IGxlZnQ7XG4gICAgICAgIHRoaXMubGVmdFRvcC50b3AgKz0gdG9wO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUGF0aCgpKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGVja0RyYWdnaW5nKGxlZnQsIHRvcCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbi5sZWZ0ICs9IGxlZnQ7XG4gICAgICAgIHRoaXMucG9zaXRpb24udG9wICs9IHRvcDtcbiAgICAgICAgdGhpcy5lbmRQb3NpdGlvbi5sZWZ0ICs9IGxlZnQ7XG4gICAgICAgIHRoaXMuZW5kUG9zaXRpb24udG9wICs9IHRvcDtcbiAgICAgICAgdGhpcy5wYXRoVmFsdWUgPSBcIk1cIiArIHRoaXMucG9zaXRpb24ubGVmdCArIFwiLFwiICsgdGhpcy5wb3NpdGlvbi50b3AgKyBcIiBMXCIgKyB0aGlzLmVuZFBvc2l0aW9uLmxlZnQgKyBcIixcIiArIHRoaXMuZW5kUG9zaXRpb24udG9wO1xuICAgICAgICB0aGlzLmRpc3RhbmNlVmFsdWUgPSB0aGlzLmdldERpc3RhbmNlKCkgKyBcInB4XCI7XG4gICAgICAgIHRoaXMubGVmdFRvcC5sZWZ0ICs9IGxlZnQ7XG4gICAgICAgIHRoaXMubGVmdFRvcC50b3AgKz0gdG9wO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5sZWZ0ICs9IGxlZnQ7XG4gICAgICAgIHRoaXMucG9zaXRpb24udG9wICs9IHRvcDtcbiAgICAgICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoTGVmdFRvcCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5vbGRQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIGdldEFubm90YXRpb25DbGFzcygpIHtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhULmlkOlxuICAgICAgICByZXR1cm4gXCJnZC1hbm5vdGF0aW9uLXdyYXBwZXItYm9yZGVyIGdkLXRleHQtYW5ub3RhdGlvblwiO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1NUUklLRU9VVC5pZDpcbiAgICAgICAgcmV0dXJuIFwiZ2QtYW5ub3RhdGlvbi13cmFwcGVyLWJvcmRlciBnZC10ZXh0LWFubm90YXRpb24gZ2QtdGV4dC1zdHJpa2VvdXQtYW5ub3RhdGlvblwiO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1VOREVSTElORS5pZDpcbiAgICAgICAgcmV0dXJuIFwiZ2QtYW5ub3RhdGlvbi13cmFwcGVyLWJvcmRlciBnZC10ZXh0LWFubm90YXRpb24gZ2QtdGV4dC11bmRlcmxpbmUtYW5ub3RhdGlvblwiO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1JFREFDVElPTi5pZDpcbiAgICAgICAgcmV0dXJuIFwiZ2QtYW5ub3RhdGlvbi13cmFwcGVyLWJvcmRlciBnZC10ZXh0LXJlZGFjdGlvbi1hbm5vdGF0aW9uXCI7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfUkVQTEFDRU1FTlQuaWQ6XG4gICAgICAgIHJldHVybiBcImdkLWFubm90YXRpb24td3JhcHBlci1ib3JkZXIgZ2QtdGV4dC1yZXBsYWNlbWVudC1hbm5vdGF0aW9uXCI7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlBPSU5ULmlkOlxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcImdkLWFubm90YXRpb24td3JhcHBlci1ib3JkZXJcIjtcbiAgICB9XG4gIH1cblxuICBpc1N0cmlrZW91dE9yVW5kZXJsaW5lKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLlRFWFRfU1RSSUtFT1VULmlkIHx8IHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuVEVYVF9VTkRFUkxJTkUuaWQ7XG4gIH1cblxuICBpc1RleHRSZXBsYWNlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5URVhUX1JFUExBQ0VNRU5ULmlkO1xuICB9XG5cbiAgc2F2ZVRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudGV4dFZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBkcmF3KHBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgIGlmICh0aGlzLm9uUGFnZShwb3NpdGlvbikpIHtcbiAgICAgIGlmICh0aGlzLmlzUG9seWxpbmUoKSkge1xuICAgICAgICB0aGlzLmFkZFBvaW50KHBvc2l0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1BhdGgoKSkge1xuICAgICAgICB0aGlzLnNldEVuZFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5kaXN0YW5jZVZhbHVlID0gdGhpcy5nZXREaXN0YW5jZSgpICsgXCJweFwiO1xuICAgICAgfVxuICAgICAgdGhpcy5jYWxjUG9zaXRpb25BbmREaW1lbnNpb24oKTtcbiAgICB9XG4gIH1cblxuICBzZXRTdHlsZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdzdHJva2UnOiAnIzU3OUFGMCcsXG4gICAgICAnc3Ryb2tlLXdpZHRoJzogMixcbiAgICAgICdmaWxsLW9wYWNpdHknOiAwLFxuICAgICAgJ2lkJzogKHRoaXMuaXNQb2x5bGluZSgpID8gJ2dkLXBvbHlsaW5lLWFubm90YXRpb24tJyA6ICh0aGlzLmlzRGlzdGFuY2UoKSA/ICdnZC1kaXN0YW5jZS1hbm5vdGF0aW9uLScgOiAnZ2QtYXJyb3ctYW5ub3RhdGlvbi0nKSkgKyB0aGlzLmlkLFxuICAgICAgJ2NsYXNzJzogJ2Fubm90YXRpb24tc3ZnJyxcbiAgICB9O1xuICB9XG5cbiAgaXNQb2x5bGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5QT0xZTElORS5pZDtcbiAgfVxuXG4gIHByaXZhdGUgY2FsY1Bvc2l0aW9uQW5kRGltZW5zaW9uKCkge1xuICAgIGNvbnN0IGxlZnRUb3AgPSBuZXcgUG9zaXRpb24oTnVtYmVyLk1BWF9WQUxVRSwgTnVtYmVyLk1BWF9WQUxVRSk7XG4gICAgY29uc3QgcmlnaHRCb3R0b20gPSBuZXcgUG9zaXRpb24oTnVtYmVyLk1JTl9WQUxVRSwgTnVtYmVyLk1JTl9WQUxVRSk7XG4gICAgaWYgKHRoaXMuaXNQb2x5bGluZSgpKSB7XG4gICAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHRoaXMucG9pbnRzKSB7XG4gICAgICAgIGxlZnRUb3AubGVmdCA9IE1hdGgubWluKHBvaW50LmxlZnQsIGxlZnRUb3AubGVmdCk7XG4gICAgICAgIGxlZnRUb3AudG9wID0gTWF0aC5taW4ocG9pbnQudG9wLCBsZWZ0VG9wLnRvcCk7XG4gICAgICAgIHJpZ2h0Qm90dG9tLmxlZnQgPSBNYXRoLm1heChwb2ludC5sZWZ0LCByaWdodEJvdHRvbS5sZWZ0KTtcbiAgICAgICAgcmlnaHRCb3R0b20udG9wID0gTWF0aC5tYXgocG9pbnQudG9wLCByaWdodEJvdHRvbS50b3ApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0VG9wLmxlZnQgPSBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLmxlZnQsIHRoaXMuZW5kUG9zaXRpb24ubGVmdCk7XG4gICAgICBsZWZ0VG9wLnRvcCA9IE1hdGgubWluKHRoaXMucG9zaXRpb24udG9wLCB0aGlzLmVuZFBvc2l0aW9uLnRvcCk7XG4gICAgICByaWdodEJvdHRvbS5sZWZ0ID0gTWF0aC5tYXgodGhpcy5wb3NpdGlvbi5sZWZ0LCB0aGlzLmVuZFBvc2l0aW9uLmxlZnQpO1xuICAgICAgcmlnaHRCb3R0b20udG9wID0gTWF0aC5tYXgodGhpcy5wb3NpdGlvbi50b3AsIHRoaXMuZW5kUG9zaXRpb24udG9wKTtcbiAgICB9XG4gICAgdGhpcy5kaW1lbnNpb24ud2lkdGggPSByaWdodEJvdHRvbS5sZWZ0IC0gbGVmdFRvcC5sZWZ0O1xuICAgIHRoaXMuZGltZW5zaW9uLmhlaWdodCA9IHJpZ2h0Qm90dG9tLnRvcCAtIGxlZnRUb3AudG9wO1xuICAgIHRoaXMubGVmdFRvcCA9IGxlZnRUb3A7XG4gIH1cblxuICBjYWxjRGltZW5zaW9ucyhjdXJyZW50UG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgaWYgKGN1cnJlbnRQb3NpdGlvbi5sZWZ0IDw9IHRoaXMucGFnZVdpZHRoICYmIGN1cnJlbnRQb3NpdGlvbi5sZWZ0ID49IDApIHtcbiAgICAgIHRoaXMuZGltZW5zaW9uLndpZHRoID0gY3VycmVudFBvc2l0aW9uLmxlZnQgLSB0aGlzLnBvc2l0aW9uLmxlZnQ7XG4gICAgfVxuICAgIGlmIChjdXJyZW50UG9zaXRpb24udG9wIDw9IHRoaXMucGFnZUhlaWdodCAmJiBjdXJyZW50UG9zaXRpb24udG9wID49IDApIHtcbiAgICAgIHRoaXMuZGltZW5zaW9uLmhlaWdodCA9IGN1cnJlbnRQb3NpdGlvbi50b3AgLSB0aGlzLnBvc2l0aW9uLnRvcDtcbiAgICB9XG4gIH1cblxuICBnZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGltZW5zaW9uLmhlaWdodCA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogTWF0aC5hYnModGhpcy5kaW1lbnNpb24uaGVpZ2h0KTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmRpbWVuc2lvbi53aWR0aCA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogTWF0aC5hYnModGhpcy5kaW1lbnNpb24ud2lkdGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0RyYWdnaW5nKGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIpIHtcbiAgICByZXR1cm4gISh0aGlzLmxlZnRUb3AubGVmdCArIGxlZnQgPCAwIHx8IHRoaXMubGVmdFRvcC50b3AgKyB0b3AgPCAwIHx8XG4gICAgICB0aGlzLmxlZnRUb3AudG9wICsgdG9wICsgdGhpcy5kaW1lbnNpb24uaGVpZ2h0ID4gdGhpcy5wYWdlSGVpZ2h0IHx8XG4gICAgICB0aGlzLmxlZnRUb3AubGVmdCArIGxlZnQgKyB0aGlzLmRpbWVuc2lvbi53aWR0aCA+IHRoaXMucGFnZVdpZHRoKTtcbiAgfVxuXG4gIGlzUG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuUE9JTlQuaWQ7XG4gIH1cblxuICBpc1NWRygpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5QT0xZTElORS5pZCB8fFxuICAgICAgdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5ESVNUQU5DRS5pZCB8fFxuICAgICAgdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5BUlJPVy5pZDtcbiAgfVxuXG4gIGlzRGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuRElTVEFOQ0UuaWQ7XG4gIH1cblxuICBkaXN0YW5jZVRleHRPcHRpb25zKCkge1xuICAgIHJldHVybiB7J2ZvbnQtc2l6ZSc6IFwiMTJweFwifVxuICB9XG5cbiAgaXNQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLkRJU1RBTkNFLmlkIHx8XG4gICAgICB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLkFSUk9XLmlkO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFbmRQb3NpdGlvbihwb3NpdGlvbjogUG9zaXRpb24pIHtcbiAgICB0aGlzLmVuZFBvc2l0aW9uID0gUG9zaXRpb24uY2xvbmUocG9zaXRpb24pO1xuICAgIHRoaXMucGF0aFZhbHVlID0gXCJNXCIgKyB0aGlzLnBvc2l0aW9uLmxlZnQgKyBcIixcIiArIHRoaXMucG9zaXRpb24udG9wICsgXCIgTFwiICsgdGhpcy5lbmRQb3NpdGlvbi5sZWZ0ICsgXCIsXCIgKyB0aGlzLmVuZFBvc2l0aW9uLnRvcDtcbiAgfVxuXG4gIHByaXZhdGUgYWRkUG9pbnQocG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgdGhpcy5wb2ludHMucHVzaChwb3NpdGlvbik7XG4gICAgdGhpcy5wb2ludHNWYWx1ZSArPSBwb3NpdGlvbi5sZWZ0ICsgXCIsXCIgKyBwb3NpdGlvbi50b3AgKyBcIiBcIjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGlzdGFuY2UoKSB7XG4gICAgY29uc3QgeHMgPSB0aGlzLnBvc2l0aW9uLmxlZnQgLSB0aGlzLmVuZFBvc2l0aW9uLmxlZnQ7XG4gICAgY29uc3QgeXMgPSB0aGlzLnBvc2l0aW9uLnRvcCAtIHRoaXMuZW5kUG9zaXRpb24udG9wO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGguc3FydCh4cyAqIHhzICsgeXMgKiB5cykpO1xuICB9XG5cbiAgYm90dG9tKCkge1xuICAgIHJldHVybiAndXJsKCcgKyB3aW5kb3cubG9jYXRpb24gKyAnI2VuZCknO1xuICB9XG5cbiAgaGVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0Rpc3RhbmNlKCkgPyAndXJsKCcgKyB3aW5kb3cubG9jYXRpb24gKyAnI3N0YXJ0KScgOiBcIlwiO1xuICB9XG5cbiAgZ2V0VGV4dFgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGlzdGFuY2UoKSAvIDI7XG4gIH1cblxuICBpc1RleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuVEVYVF9GSUVMRC5pZCB8fCB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLldBVEVSTUFSSy5pZDtcbiAgfVxuXG4gIGdldEZvcm1hdHRpbmcoKSB7XG4gICAgY29uc3QgZiA9IHRoaXMuZm9ybWF0dGluZztcbiAgICBjb25zdCBmb3JtYXR0aW5nID0gRm9ybWF0dGluZy5kZWZhdWx0KCk7XG4gICAgaWYgKGYpIHtcbiAgICAgIGZvcm1hdHRpbmcuZm9udFNpemUgPSBmLmZvbnRTaXplO1xuICAgICAgZm9ybWF0dGluZy5mb250ID0gZi5mb250O1xuICAgICAgZm9ybWF0dGluZy5jb2xvciA9IGYuY29sb3I7XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXR0aW5nO1xuICB9XG5cbiAgc2F2ZUZvcm1hdHRpbmcoJGV2ZW50OiBGb3JtYXR0aW5nKSB7XG4gICAgdGhpcy5mb3JtYXR0aW5nLmZvbnRTaXplID0gJGV2ZW50LmZvbnRTaXplO1xuICAgIHRoaXMuZm9ybWF0dGluZy5mb250ID0gJGV2ZW50LmZvbnQ7XG4gICAgdGhpcy5mb3JtYXR0aW5nLmNvbG9yID0gJGV2ZW50LmNvbG9yO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuX3JlbW92ZUFubm90YXRpb25TZXJ2aWNlLnJlbW92ZShuZXcgUmVtb3ZlQW5ub3RhdGlvbih0aGlzLmlkKSk7XG4gIH1cblxuICBnZXRNZW51U2hpZnQoKSB7XG4gICAgY29uc3QgbWVudVdpZHRoID0gdGhpcy5pc1RleHQoKSA/IDI2NSA6IDExMTtcbiAgICByZXR1cm4gdGhpcy5kaW1lbnNpb24ud2lkdGggPiBtZW51V2lkdGggPyAwIDogKHRoaXMuZGltZW5zaW9uLndpZHRoIC0gbWVudVdpZHRoKSAqIDAuNTtcbiAgfVxuXG4gIGdldE1lbnVUeXBlKCkge1xuICAgIHJldHVybiBNZW51VHlwZS5GT1JfQU5OT1RBVElPTjtcbiAgfVxuXG4gIGFkZENvbW1lbnQoKSB7XG4gICAgdGhpcy5fY29tbWVudEFubm90YXRpb25TZXJ2aWNlLmNvbW1lbnQobmV3IENvbW1lbnRBbm5vdGF0aW9uKHRoaXMuaWQpKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VGV4dEZvY3VzKCkge1xuICAgIGlmICh0aGlzLmlzVGV4dCgpIHx8IHRoaXMuaXNUZXh0UmVwbGFjZW1lbnQoKSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSAkKFwiI3RleHQtXCIgKyB0aGlzLmlkKTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgdGV4dEFyZWFIZWlnaHQoa2V5OiBhbnksIHRleHRhcmVhOiBhbnkpIHtcbiAgICB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgPSBcIkVudGVyXCIgPT09IGtleSA/IHRleHRhcmVhLnNjcm9sbEhlaWdodCArIHRoaXMuZm9ybWF0dGluZy5mb250U2l6ZSA6IHRleHRhcmVhLnNjcm9sbEhlaWdodDtcbiAgICB0aGlzLmRpbWVuc2lvbi53aWR0aCA9IHRleHRhcmVhLnNjcm9sbFdpZHRoO1xuICB9XG5cbiAgaGlkZU1lbnUoJGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMuX2FjdGl2ZUFubm90YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZShudWxsKTtcbiAgfVxuXG4gIGdldEFubm90YXRpb25EYXRhKCk6IEFubm90YXRpb25EYXRhIHtcbiAgICBjb25zdCBhbm5vdGF0aW9uRGF0YSA9IG5ldyBBbm5vdGF0aW9uRGF0YSgpO1xuICAgIGFubm90YXRpb25EYXRhLmlkID0gdGhpcy5pZDtcbiAgICBhbm5vdGF0aW9uRGF0YS50ZXh0ID0gdGhpcy50ZXh0VmFsdWU7XG4gICAgYW5ub3RhdGlvbkRhdGEuZm9udENvbG9yID0gcGFyc2VJbnQoVXRpbHMudG9IZXgodGhpcy5mb3JtYXR0aW5nLmNvbG9yKS5yZXBsYWNlKFwiI1wiLCBcIlwiKSwgMTYpO1xuICAgIGFubm90YXRpb25EYXRhLmZvbnRTaXplID0gdGhpcy5mb3JtYXR0aW5nLmZvbnRTaXplO1xuICAgIGFubm90YXRpb25EYXRhLmZvbnQgPSB0aGlzLmZvcm1hdHRpbmcuZm9udDtcbiAgICBpZiAodGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5QT0lOVC5pZCkge1xuICAgICAgYW5ub3RhdGlvbkRhdGEubGVmdCA9IHRoaXMubGVmdFRvcC5sZWZ0ICsgMjA7XG4gICAgICBhbm5vdGF0aW9uRGF0YS50b3AgPSB0aGlzLmxlZnRUb3AudG9wICsgMjA7XG4gICAgICBhbm5vdGF0aW9uRGF0YS5oZWlnaHQgPSAwO1xuICAgICAgYW5ub3RhdGlvbkRhdGEud2lkdGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbm5vdGF0aW9uRGF0YS5sZWZ0ID0gdGhpcy5sZWZ0VG9wLmxlZnQ7XG4gICAgICBhbm5vdGF0aW9uRGF0YS50b3AgPSB0aGlzLmxlZnRUb3AudG9wO1xuICAgICAgYW5ub3RhdGlvbkRhdGEuaGVpZ2h0ID0gdGhpcy5kaW1lbnNpb24uaGVpZ2h0O1xuICAgICAgYW5ub3RhdGlvbkRhdGEud2lkdGggPSB0aGlzLmRpbWVuc2lvbi53aWR0aDtcbiAgICB9XG4gICAgYW5ub3RhdGlvbkRhdGEucGFnZU51bWJlciA9IHRoaXMucGFnZU51bWJlcjtcbiAgICBhbm5vdGF0aW9uRGF0YS50eXBlID0gdGhpcy50eXBlO1xuICAgIGFubm90YXRpb25EYXRhLnN2Z1BhdGggPSB0aGlzLmdldFN2Z1BhdGgoKTtcbiAgICByZXR1cm4gYW5ub3RhdGlvbkRhdGE7XG4gIH1cblxuICBwcml2YXRlIGdldFN2Z1BhdGgoKSB7XG4gICAgbGV0IHN2Z1BhdGggPSBcIk1cIjtcbiAgICBpZiAodGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5QT0xZTElORS5pZCkge1xuICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgIGxldCBwcmV2aW91c1ggPSAwLCBwcmV2aW91c1kgPSAwO1xuICAgICAgZm9yIChjb25zdCBwb2ludCBvZiB0aGlzLnBvaW50cykge1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBzdmdQYXRoICs9IHBvaW50LmxlZnQgKyBcIixcIiArIHBvaW50LnRvcCArIFwibFwiO1xuICAgICAgICAgIGluZGV4ID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2aW91c1ggPSBwb2ludC5sZWZ0IC0gcHJldmlvdXNYO1xuICAgICAgICAgIHByZXZpb3VzWSA9IHBvaW50LnRvcCAtIHByZXZpb3VzWTtcbiAgICAgICAgICBzdmdQYXRoICs9IHByZXZpb3VzWCArIFwiLFwiICsgcHJldmlvdXNZICsgXCJsXCI7XG4gICAgICAgIH1cbiAgICAgICAgcHJldmlvdXNYID0gcG9pbnQubGVmdDtcbiAgICAgICAgcHJldmlvdXNZID0gcG9pbnQudG9wO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5ESVNUQU5DRS5pZCB8fCB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLkFSUk9XLmlkKSB7XG4gICAgICBzdmdQYXRoICs9IHRoaXMucG9zaXRpb24ubGVmdCArIFwiLFwiICsgdGhpcy5wb3NpdGlvbi50b3AgKyBcIiBcIjtcbiAgICAgIHN2Z1BhdGggKz0gdGhpcy5lbmRQb3NpdGlvbi5sZWZ0ICsgXCIsXCIgKyB0aGlzLmVuZFBvc2l0aW9uLnRvcCArIFwiIFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdmdQYXRoID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIHN2Z1BhdGg7XG4gIH1cblxuICBwcml2YXRlIG9uUGFnZShwb3NpdGlvbjogUG9zaXRpb24pIHtcbiAgICByZXR1cm4gcG9zaXRpb24ubGVmdCA8PSB0aGlzLnBhZ2VXaWR0aCAmJiBwb3NpdGlvbi50b3AgPD0gdGhpcy5wYWdlSGVpZ2h0ICYmXG4gICAgICBwb3NpdGlvbi5sZWZ0ID49IDAgJiYgcG9zaXRpb24udG9wID49IDA7XG4gIH1cbn1cbiJdfQ==