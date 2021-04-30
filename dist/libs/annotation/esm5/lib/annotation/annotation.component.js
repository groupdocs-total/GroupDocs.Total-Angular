/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AnnotationData, AnnotationType, CommentAnnotation, Dimension, Position, RemoveAnnotation } from "../annotation-models";
import { ActiveAnnotationService } from "../active-annotation.service";
import { Formatting, Utils, MenuType, ZoomService } from "@groupdocs.examples.angular/common-components";
import { RemoveAnnotationService } from "../remove-annotation.service";
import { CommentAnnotationService } from "../comment-annotation.service";
import * as jquery from 'jquery';
/** @type {?} */
var $ = jquery;
var AnnotationComponent = /** @class */ (function () {
    function AnnotationComponent(_activeAnnotationService, _removeAnnotationService, _commentAnnotationService, _zoomService) {
        var _this = this;
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
    AnnotationComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this._zoomService.changeZoom(this._zoomService.zoom);
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
            case AnnotationType.TEXT_FIELD.id:
            case AnnotationType.WATERMARK.id:
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
                    template: "<div class=\"gd-annotation\"\n     (clickOutside)=\"hideMenu($event)\"\n     [exclude]=\"'gd-context-menu,.ui-resizable-handle,.gd-comments-panel'\"\n     [excludeBeforeClick]=\"true\"\n     [clickOutsideEvents]=\"'mousedown'\"\n     [clickOutsideEnabled]=\"active\"\n     [style.left.px]=\"leftTop.left\" [style.top.px]=\"leftTop.top\"\n     [style.width.px]=\"getWidth()\"\n     [style.height.px]=\"getHeight()\"\n     (click)=\"activation()\"\n     (touchstart)=\"activation()\">\n  <div [draggable]=\"true\" (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\n       (drag)=\"dragging($event)\" (dragend)=\"dragging($event)\" (drop)=\"dragOver($event)\"\n       (panstart)=\"dragStart($event)\" (panmove)=\"dragging($event)\"\n       class=\"gd-annotation-wrapper\" [ngClass]=\"getAnnotationClass()\">\n    <gd-context-menu *ngIf=\"active\" [topPosition]=\"position.top\" [textMenu]=\"isText()\" [formatting]=\"getFormatting()\"\n                     (changeFormatting)=\"saveFormatting($event)\" (removeItem)=\"remove()\"\n                     [translation]=\"getMenuShift()\" [menuType]=\"getMenuType()\"\n                     (comment)=\"addComment()\"></gd-context-menu>\n    <div class=\"gd-text-strikeout-line\" *ngIf=\"isStrikeoutOrUnderline()\"></div>\n    <textarea wrap=\"off\" class=\"gd-text\" *ngIf=\"isTextReplacement() || isText()\" [value]=\"textValue\"\n              id=\"{{'text-' + id}}\" #text (keyup)=\"saveText(text.value)\"\n              (keydown)=\"textAreaHeight($event.key, text)\"\n              [style.color]=\"formatting?.color\"\n              [style.font-family]=\"formatting?.font\"\n              [style.font-size.px]=\"formatting?.fontSize\"\n              [style.width.px]=\"getWidth()\"\n              [style.height.px]=\"getHeight()\">{{textValue}}</textarea>\n    <div *ngIf=\"isPoint()\" class=\"gd-point\">\n      <fa-icon class=\"icon\" [icon]=\"['fas','thumbtack']\" [size]=\"'lg'\"></fa-icon>\n    </div>\n  </div>\n\n  <gd-resizing [id]=\"id\" *ngIf=\"active && !isSVG() && !isPoint()\"\n               (offsetX)=\"width($event)\" (offsetY)=\"height($event)\"\n               (offsetTop)=\"top($event)\" (offsetLeft)=\"left($event)\"\n               [se]=\"true\" [sw]=\"true\" [ne]=\"true\" [nw]=\"true\"\n               [pageHeight]=\"pageHeight\" [pageWidth]=\"pageWidth\"></gd-resizing>\n</div>\n<svg *ngIf=\"isSVG()\" class=\"svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polyline *ngIf=\"isPolyline()\" [attr.id]=\"id\" [attr.points]=\"pointsValue\" [ngStyle]=\"setStyles()\">\n  </polyline>\n  <path id=\"{{'gd-path-' + id}}\" *ngIf=\"isPath()\" [attr.d]=\"pathValue\" [attr.marker-end]=\"bottom()\"\n        [attr.marker-start]=\"head()\" [ngStyle]=\"setStyles()\">\n    <title *ngIf=\"isDistance()\" [ngStyle]=\"distanceTextOptions()\">{{ distanceValue }}</title>\n  </path>\n  <text *ngIf=\"isDistance()\" [ngStyle]=\"distanceTextOptions()\" [attr.x]=\"getTextX()\"\n        [attr.y]=\"0\">\n    <textPath [attr.href]=\"'#gd-path-' + id\">\n      {{ distanceValue }}\n    </textPath>\n  </text>\n</svg>\n",
                    styles: [".gd-annotation{position:absolute!important;cursor:pointer;z-index:9}.gd-annotation .gd-annotation-wrapper-border{outline:#679ffa solid 1px;display:-webkit-box}.gd-annotation .gd-annotation-wrapper{height:inherit;z-index:9}.gd-annotation .gd-annotation-wrapper ::ng-deep .palette{width:0;height:37px}.gd-annotation .gd-annotation-wrapper .gd-text-strikeout-line{background-color:#e04e4e;height:2px;width:100%}.gd-annotation .gd-annotation-wrapper .gd-text{border:none;outline:0;margin:0;padding:0;overflow:hidden;background-color:transparent;min-width:1em;min-height:1em}.gd-annotation .gd-annotation-wrapper .gd-point{background-color:#7cbc46;width:41px;height:41px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;color:#fff;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;-khtml-border-radius:50%;box-shadow:0 1px 1px 1px #bbb;-moz-box-shadow:0 1px 1px 1px #bbb;-webkit-box-shadow:0 1px 1px 1px #bbb}.gd-annotation .gd-text-annotation{background-color:rgba(151,151,240,.51)}.gd-annotation .gd-text-strikeout-annotation{align-items:center;-webkit-box-align:center}.gd-annotation .gd-text-underline-annotation{align-items:end;-webkit-box-align:end}.gd-annotation .gd-text-redaction-annotation{background-color:#000}.gd-annotation .gd-text-replacement-annotation{background-color:#fff}.svg{z-index:1;position:absolute;top:0;left:0;width:100%;height:100%}.annotation-svg{position:absolute;cursor:pointer;z-index:2}"]
                }] }
    ];
    /** @nocollapse */
    AnnotationComponent.ctorParameters = function () { return [
        { type: ActiveAnnotationService },
        { type: RemoveAnnotationService },
        { type: CommentAnnotationService },
        { type: ZoomService }
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
    /**
     * @type {?}
     * @private
     */
    AnnotationComponent.prototype._zoomService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hbm5vdGF0aW9uL2Fubm90YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQTJCLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFDTCxjQUFjLEVBQ2QsY0FBYyxFQUNkLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsUUFBUSxFQUNSLGdCQUFnQixFQUNqQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7SUFFM0IsQ0FBQyxHQUFHLE1BQU07QUFFaEI7SUEyQkUsNkJBQW9CLHdCQUFpRCxFQUNqRCx3QkFBaUQsRUFDakQseUJBQW1ELEVBQ25ELFlBQXlCO1FBSDdDLGlCQVVDO1FBVm1CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBeUI7UUFDakQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUF5QjtRQUNqRCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBakI3QyxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsY0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVoQyxjQUFTLEdBQUcsRUFBRSxDQUFD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Ozs7O0lBQ3BCLDBDQUE4Qjs7Ozs7SUFFbEIsdURBQXlEOzs7OztJQUN6RCx1REFBeUQ7Ozs7O0lBQ3pELHdEQUEyRDs7Ozs7SUFDM0QsMkNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBbm5vdGF0aW9uRGF0YSxcbiAgQW5ub3RhdGlvblR5cGUsXG4gIENvbW1lbnRBbm5vdGF0aW9uLFxuICBEaW1lbnNpb24sXG4gIFBvc2l0aW9uLFxuICBSZW1vdmVBbm5vdGF0aW9uXG59IGZyb20gXCIuLi9hbm5vdGF0aW9uLW1vZGVsc1wiO1xuaW1wb3J0IHtBY3RpdmVBbm5vdGF0aW9uU2VydmljZX0gZnJvbSBcIi4uL2FjdGl2ZS1hbm5vdGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7Rm9ybWF0dGluZywgVXRpbHMsIE1lbnVUeXBlLCBab29tU2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtSZW1vdmVBbm5vdGF0aW9uU2VydmljZX0gZnJvbSBcIi4uL3JlbW92ZS1hbm5vdGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29tbWVudEFubm90YXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vY29tbWVudC1hbm5vdGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1hbm5vdGF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fubm90YXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hbm5vdGF0aW9uLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG5cbiAgaWQ6IG51bWJlcjtcbiAgcG9zaXRpb246IFBvc2l0aW9uO1xuICBsZWZ0VG9wOiBQb3NpdGlvbjtcbiAgdHlwZTogc3RyaW5nO1xuICBwYWdlV2lkdGg6IG51bWJlcjtcbiAgcGFnZUhlaWdodDogbnVtYmVyO1xuICBhY3RpdmUgPSB0cnVlO1xuICBkaW1lbnNpb24gPSBuZXcgRGltZW5zaW9uKDAsIDApO1xuICBwYWdlTnVtYmVyOiBudW1iZXI7XG4gIHRleHRWYWx1ZSA9IFwiXCI7XG4gIHBhdGhWYWx1ZTogc3RyaW5nO1xuICBkaXN0YW5jZVZhbHVlID0gJzBweCc7XG4gIHBvaW50c1ZhbHVlID0gXCJcIjtcbiAgc3ZnUGF0aCA9IFwiXCI7XG4gIGZvcm1hdHRpbmcgPSBGb3JtYXR0aW5nLmRlZmF1bHQoKTtcblxuICBwcml2YXRlIG9sZFBvc2l0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG4gIHByaXZhdGUgcG9pbnRzID0gW107XG4gIHByaXZhdGUgZW5kUG9zaXRpb246IFBvc2l0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FjdGl2ZUFubm90YXRpb25TZXJ2aWNlOiBBY3RpdmVBbm5vdGF0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVtb3ZlQW5ub3RhdGlvblNlcnZpY2U6IFJlbW92ZUFubm90YXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jb21tZW50QW5ub3RhdGlvblNlcnZpY2U6IENvbW1lbnRBbm5vdGF0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlKSB7XG4gICAgdGhpcy5fYWN0aXZlQW5ub3RhdGlvblNlcnZpY2UuYWN0aXZlQ2hhbmdlLnN1YnNjcmliZSgoaWQ6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLmlkID09PSBpZDtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnNldFRleHRGb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGlzT25QYWdlKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xuICAgIHJldHVybiBjdXJyZW50UGFnZSAmJiAkKGN1cnJlbnRQYWdlKS5wYXJlbnQoKS5wYXJlbnQoKSAmJlxuICAgICAgKCQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmhhc0NsYXNzKFwicGFnZVwiKSB8fFxuICAgICAgICAkKGN1cnJlbnRQYWdlKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5oYXNDbGFzcyhcInBhZ2VcIikpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sZWZ0VG9wID0gUG9zaXRpb24uY2xvbmUodGhpcy5wb3NpdGlvbik7XG4gICAgaWYgKHRoaXMuaXNQb2x5bGluZSgpKSB7XG4gICAgICBpZiAodGhpcy5zdmdQYXRoKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFBvaW50cyA9IHRoaXMuc3ZnUGF0aC5yZXBsYWNlKFwiTVwiLCBcIlwiKS5zcGxpdCgnTCcpO1xuICAgICAgICBsZXQgeCA9IHBhcnNlRmxvYXQocGFyc2VkUG9pbnRzWzBdLnNwbGl0KFwiLFwiKVswXSk7XG4gICAgICAgIGxldCB5ID0gcGFyc2VGbG9hdChwYXJzZWRQb2ludHNbMF0uc3BsaXQoXCIsXCIpWzFdKTtcbiAgICAgICAgY29uc3QgY29tcCA9IHRoaXM7XG4gICAgICAgIHBhcnNlZFBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChwb2ludCwgaW5kZXgpIHtcbiAgICAgICAgICBpZiAoaW5kZXggIT09IDApIHtcbiAgICAgICAgICAgIGlmIChwb2ludCAhPT0gXCJcIikge1xuICAgICAgICAgICAgICBjb21wLmFkZFBvaW50KG5ldyBQb3NpdGlvbih4LCB5KSk7XG4gICAgICAgICAgICAgIHggPSAoeCArIHBhcnNlRmxvYXQocG9pbnQuc3BsaXQoXCIsXCIpWzBdKSk7XG4gICAgICAgICAgICAgIHkgPSAoeSArIHBhcnNlRmxvYXQocG9pbnQuc3BsaXQoXCIsXCIpWzFdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkUG9pbnQodGhpcy5wb3NpdGlvbik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUGF0aCgpKSB7XG4gICAgICBpZiAodGhpcy5zdmdQYXRoIHx8ICh0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLkFSUk9XLmlkICYmICF0aGlzLmRpbWVuc2lvbi5pc05vbmUoKSkpIHtcbiAgICAgICAgY29uc3QgZW5kID0gbmV3IFBvc2l0aW9uKHRoaXMucG9zaXRpb24ubGVmdCArIHRoaXMuZGltZW5zaW9uLndpZHRoLCB0aGlzLnBvc2l0aW9uLnRvcCArIHRoaXMuZGltZW5zaW9uLmhlaWdodCk7XG4gICAgICAgIHRoaXMuc2V0RW5kUG9zaXRpb24oZW5kKTtcbiAgICAgICAgaWYgKHRoaXMuZGltZW5zaW9uLmhlaWdodCA8IDApIHtcbiAgICAgICAgICB0aGlzLmxlZnRUb3AudG9wICs9IHRoaXMuZGltZW5zaW9uLmhlaWdodDtcbiAgICAgICAgICB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgPSB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgKiAoLTEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRpbWVuc2lvbi53aWR0aCA8IDApIHtcbiAgICAgICAgICB0aGlzLmxlZnRUb3AubGVmdCArPSB0aGlzLmRpbWVuc2lvbi53aWR0aDtcbiAgICAgICAgICB0aGlzLmRpbWVuc2lvbi53aWR0aCA9IHRoaXMuZGltZW5zaW9uLndpZHRoICogKC0xKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRFbmRQb3NpdGlvbih0aGlzLnBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGlzdGFuY2VWYWx1ZSA9IHRoaXMuZ2V0RGlzdGFuY2UoKSArIFwicHhcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuUE9JTlQuaWQpIHtcbiAgICAgIHRoaXMuaW5pdFBvaW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0RW5kUG9zaXRpb24odGhpcy5wb3NpdGlvbik7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VGV4dEZvY3VzKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLl96b29tU2VydmljZS56b29tKTtcbiAgfVxuXG4gIGFjdGl2YXRpb24oKSB7XG4gICAgdGhpcy5fYWN0aXZlQW5ub3RhdGlvblNlcnZpY2UuY2hhbmdlQWN0aXZlKHRoaXMuaWQpO1xuICB9XG5cbiAgd2lkdGgoJGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY2hlY2tEcmFnZ2luZygkZXZlbnQsIDApKSB7XG4gICAgICB0aGlzLmRpbWVuc2lvbi53aWR0aCArPSAkZXZlbnQ7XG4gICAgfVxuICB9XG5cbiAgaGVpZ2h0KCRldmVudCkge1xuICAgIGlmICh0aGlzLmNoZWNrRHJhZ2dpbmcoMCwgJGV2ZW50KSkge1xuICAgICAgdGhpcy5kaW1lbnNpb24uaGVpZ2h0ICs9ICRldmVudDtcbiAgICB9XG4gIH1cblxuICBsZWZ0KCRldmVudCkge1xuICAgIHRoaXMucG9zaXRpb24ubGVmdCArPSAkZXZlbnQ7XG4gICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgICB0aGlzLnJlZnJlc2hMZWZ0VG9wKCk7XG4gIH1cblxuICB0b3AoJGV2ZW50KSB7XG4gICAgdGhpcy5wb3NpdGlvbi50b3AgKz0gJGV2ZW50O1xuICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XG4gICAgdGhpcy5yZWZyZXNoTGVmdFRvcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoTGVmdFRvcCgpIHtcbiAgICB0aGlzLmxlZnRUb3AubGVmdCA9IHRoaXMucG9zaXRpb24ubGVmdDtcbiAgICB0aGlzLmxlZnRUb3AudG9wID0gdGhpcy5wb3NpdGlvbi50b3A7XG4gIH1cblxuICBwcml2YXRlIGNvcnJlY3RQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbi5sZWZ0IDwgMCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi5sZWZ0ID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zaXRpb24udG9wIDwgMCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3NpdGlvbi50b3AgKyB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgPiB0aGlzLnBhZ2VIZWlnaHQpIHtcbiAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wYWdlSGVpZ2h0IC0gdGhpcy5kaW1lbnNpb24uaGVpZ2h0O1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3NpdGlvbi5sZWZ0ICsgdGhpcy5kaW1lbnNpb24ud2lkdGggPiB0aGlzLnBhZ2VXaWR0aCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi5sZWZ0ID0gdGhpcy5wYWdlV2lkdGggLSB0aGlzLmRpbWVuc2lvbi53aWR0aDtcbiAgICB9XG4gIH1cblxuICBkcmFnT3ZlcigkZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGRyYWdTdGFydCgkZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMub2xkUG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG4gICAgaWYgKCRldmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICRldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdmb28nKTtcbiAgICB9XG4gIH1cblxuICBpbml0UG9pbnQoKSB7XG4gICAgdGhpcy5kaW1lbnNpb24gPSBuZXcgRGltZW5zaW9uKDQwLCA0MCk7XG4gICAgdGhpcy5wb3NpdGlvbi5sZWZ0ID0gdGhpcy5wb3NpdGlvbi5sZWZ0IC0gMjA7XG4gICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcCAtIDIwO1xuICAgIHRoaXMubGVmdFRvcCA9IFBvc2l0aW9uLmNsb25lKHRoaXMucG9zaXRpb24pO1xuICB9XG5cbiAgZHJhZ2dpbmcoJGV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG4gICAgaWYgKHBvc2l0aW9uLnggJiYgcG9zaXRpb24ueSAmJiBBbm5vdGF0aW9uQ29tcG9uZW50LmlzT25QYWdlKHBvc2l0aW9uKSkge1xuICAgICAgY29uc3QgbGVmdCA9IHBvc2l0aW9uLnggLSB0aGlzLm9sZFBvc2l0aW9uLng7XG4gICAgICBjb25zdCB0b3AgPSBwb3NpdGlvbi55IC0gdGhpcy5vbGRQb3NpdGlvbi55O1xuICAgICAgaWYgKHRoaXMuaXNQb2x5bGluZSgpKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGVja0RyYWdnaW5nKGxlZnQsIHRvcCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb2ludHNWYWx1ZSA9IFwiXCI7XG4gICAgICAgIGZvciAoY29uc3QgcG9pbnQgb2YgdGhpcy5wb2ludHMpIHtcbiAgICAgICAgICBwb2ludC5sZWZ0ID0gcG9pbnQubGVmdCArIGxlZnQ7XG4gICAgICAgICAgcG9pbnQudG9wID0gcG9pbnQudG9wICsgdG9wO1xuICAgICAgICAgIHRoaXMucG9pbnRzVmFsdWUgKz0gcG9pbnQubGVmdCArIFwiLFwiICsgcG9pbnQudG9wICsgXCIgXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sZWZ0VG9wLmxlZnQgKz0gbGVmdDtcbiAgICAgICAgdGhpcy5sZWZ0VG9wLnRvcCArPSB0b3A7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNQYXRoKCkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrRHJhZ2dpbmcobGVmdCwgdG9wKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uLmxlZnQgKz0gbGVmdDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgKz0gdG9wO1xuICAgICAgICB0aGlzLmVuZFBvc2l0aW9uLmxlZnQgKz0gbGVmdDtcbiAgICAgICAgdGhpcy5lbmRQb3NpdGlvbi50b3AgKz0gdG9wO1xuICAgICAgICB0aGlzLnBhdGhWYWx1ZSA9IFwiTVwiICsgdGhpcy5wb3NpdGlvbi5sZWZ0ICsgXCIsXCIgKyB0aGlzLnBvc2l0aW9uLnRvcCArIFwiIExcIiArIHRoaXMuZW5kUG9zaXRpb24ubGVmdCArIFwiLFwiICsgdGhpcy5lbmRQb3NpdGlvbi50b3A7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VWYWx1ZSA9IHRoaXMuZ2V0RGlzdGFuY2UoKSArIFwicHhcIjtcbiAgICAgICAgdGhpcy5sZWZ0VG9wLmxlZnQgKz0gbGVmdDtcbiAgICAgICAgdGhpcy5sZWZ0VG9wLnRvcCArPSB0b3A7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmxlZnQgKz0gbGVmdDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgKz0gdG9wO1xuICAgICAgICB0aGlzLmNvcnJlY3RQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLnJlZnJlc2hMZWZ0VG9wKCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9sZFBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgZ2V0QW5ub3RhdGlvbkNsYXNzKCkge1xuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFQuaWQ6XG4gICAgICAgIHJldHVybiBcImdkLWFubm90YXRpb24td3JhcHBlci1ib3JkZXIgZ2QtdGV4dC1hbm5vdGF0aW9uXCI7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfU1RSSUtFT1VULmlkOlxuICAgICAgICByZXR1cm4gXCJnZC1hbm5vdGF0aW9uLXdyYXBwZXItYm9yZGVyIGdkLXRleHQtYW5ub3RhdGlvbiBnZC10ZXh0LXN0cmlrZW91dC1hbm5vdGF0aW9uXCI7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfVU5ERVJMSU5FLmlkOlxuICAgICAgICByZXR1cm4gXCJnZC1hbm5vdGF0aW9uLXdyYXBwZXItYm9yZGVyIGdkLXRleHQtYW5ub3RhdGlvbiBnZC10ZXh0LXVuZGVybGluZS1hbm5vdGF0aW9uXCI7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfUkVEQUNUSU9OLmlkOlxuICAgICAgICByZXR1cm4gXCJnZC1hbm5vdGF0aW9uLXdyYXBwZXItYm9yZGVyIGdkLXRleHQtcmVkYWN0aW9uLWFubm90YXRpb25cIjtcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9SRVBMQUNFTUVOVC5pZDpcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9GSUVMRC5pZDpcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuV0FURVJNQVJLLmlkOlxuICAgICAgICByZXR1cm4gXCJnZC1hbm5vdGF0aW9uLXdyYXBwZXItYm9yZGVyIGdkLXRleHQtcmVwbGFjZW1lbnQtYW5ub3RhdGlvblwiO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5QT0lOVC5pZDpcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJnZC1hbm5vdGF0aW9uLXdyYXBwZXItYm9yZGVyXCI7XG4gICAgfVxuICB9XG5cbiAgaXNTdHJpa2VvdXRPclVuZGVybGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5URVhUX1NUUklLRU9VVC5pZCB8fCB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLlRFWFRfVU5ERVJMSU5FLmlkO1xuICB9XG5cbiAgaXNUZXh0UmVwbGFjZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuVEVYVF9SRVBMQUNFTUVOVC5pZDtcbiAgfVxuXG4gIHNhdmVUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRleHRWYWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZHJhdyhwb3NpdGlvbjogUG9zaXRpb24pIHtcbiAgICBpZiAodGhpcy5vblBhZ2UocG9zaXRpb24pKSB7XG4gICAgICBpZiAodGhpcy5pc1BvbHlsaW5lKCkpIHtcbiAgICAgICAgdGhpcy5hZGRQb2ludChwb3NpdGlvbik7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNQYXRoKCkpIHtcbiAgICAgICAgdGhpcy5zZXRFbmRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VWYWx1ZSA9IHRoaXMuZ2V0RGlzdGFuY2UoKSArIFwicHhcIjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2FsY1Bvc2l0aW9uQW5kRGltZW5zaW9uKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0U3R5bGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnc3Ryb2tlJzogJyM1NzlBRjAnLFxuICAgICAgJ3N0cm9rZS13aWR0aCc6IDIsXG4gICAgICAnZmlsbC1vcGFjaXR5JzogMCxcbiAgICAgICdpZCc6ICh0aGlzLmlzUG9seWxpbmUoKSA/ICdnZC1wb2x5bGluZS1hbm5vdGF0aW9uLScgOiAodGhpcy5pc0Rpc3RhbmNlKCkgPyAnZ2QtZGlzdGFuY2UtYW5ub3RhdGlvbi0nIDogJ2dkLWFycm93LWFubm90YXRpb24tJykpICsgdGhpcy5pZCxcbiAgICAgICdjbGFzcyc6ICdhbm5vdGF0aW9uLXN2ZycsXG4gICAgfTtcbiAgfVxuXG4gIGlzUG9seWxpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUuaWQ7XG4gIH1cblxuICBwcml2YXRlIGNhbGNQb3NpdGlvbkFuZERpbWVuc2lvbigpIHtcbiAgICBjb25zdCBsZWZ0VG9wID0gbmV3IFBvc2l0aW9uKE51bWJlci5NQVhfVkFMVUUsIE51bWJlci5NQVhfVkFMVUUpO1xuICAgIGNvbnN0IHJpZ2h0Qm90dG9tID0gbmV3IFBvc2l0aW9uKE51bWJlci5NSU5fVkFMVUUsIE51bWJlci5NSU5fVkFMVUUpO1xuICAgIGlmICh0aGlzLmlzUG9seWxpbmUoKSkge1xuICAgICAgZm9yIChjb25zdCBwb2ludCBvZiB0aGlzLnBvaW50cykge1xuICAgICAgICBsZWZ0VG9wLmxlZnQgPSBNYXRoLm1pbihwb2ludC5sZWZ0LCBsZWZ0VG9wLmxlZnQpO1xuICAgICAgICBsZWZ0VG9wLnRvcCA9IE1hdGgubWluKHBvaW50LnRvcCwgbGVmdFRvcC50b3ApO1xuICAgICAgICByaWdodEJvdHRvbS5sZWZ0ID0gTWF0aC5tYXgocG9pbnQubGVmdCwgcmlnaHRCb3R0b20ubGVmdCk7XG4gICAgICAgIHJpZ2h0Qm90dG9tLnRvcCA9IE1hdGgubWF4KHBvaW50LnRvcCwgcmlnaHRCb3R0b20udG9wKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdFRvcC5sZWZ0ID0gTWF0aC5taW4odGhpcy5wb3NpdGlvbi5sZWZ0LCB0aGlzLmVuZFBvc2l0aW9uLmxlZnQpO1xuICAgICAgbGVmdFRvcC50b3AgPSBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnRvcCwgdGhpcy5lbmRQb3NpdGlvbi50b3ApO1xuICAgICAgcmlnaHRCb3R0b20ubGVmdCA9IE1hdGgubWF4KHRoaXMucG9zaXRpb24ubGVmdCwgdGhpcy5lbmRQb3NpdGlvbi5sZWZ0KTtcbiAgICAgIHJpZ2h0Qm90dG9tLnRvcCA9IE1hdGgubWF4KHRoaXMucG9zaXRpb24udG9wLCB0aGlzLmVuZFBvc2l0aW9uLnRvcCk7XG4gICAgfVxuICAgIHRoaXMuZGltZW5zaW9uLndpZHRoID0gcmlnaHRCb3R0b20ubGVmdCAtIGxlZnRUb3AubGVmdDtcbiAgICB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgPSByaWdodEJvdHRvbS50b3AgLSBsZWZ0VG9wLnRvcDtcbiAgICB0aGlzLmxlZnRUb3AgPSBsZWZ0VG9wO1xuICB9XG5cbiAgY2FsY0RpbWVuc2lvbnMoY3VycmVudFBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgIGlmIChjdXJyZW50UG9zaXRpb24ubGVmdCA8PSB0aGlzLnBhZ2VXaWR0aCAmJiBjdXJyZW50UG9zaXRpb24ubGVmdCA+PSAwKSB7XG4gICAgICB0aGlzLmRpbWVuc2lvbi53aWR0aCA9IGN1cnJlbnRQb3NpdGlvbi5sZWZ0IC0gdGhpcy5wb3NpdGlvbi5sZWZ0O1xuICAgIH1cbiAgICBpZiAoY3VycmVudFBvc2l0aW9uLnRvcCA8PSB0aGlzLnBhZ2VIZWlnaHQgJiYgY3VycmVudFBvc2l0aW9uLnRvcCA+PSAwKSB7XG4gICAgICB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgPSBjdXJyZW50UG9zaXRpb24udG9wIC0gdGhpcy5wb3NpdGlvbi50b3A7XG4gICAgfVxuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IE1hdGguYWJzKHRoaXMuZGltZW5zaW9uLmhlaWdodCk7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaW1lbnNpb24ud2lkdGggPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IE1hdGguYWJzKHRoaXMuZGltZW5zaW9uLndpZHRoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tEcmFnZ2luZyhsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyKSB7XG4gICAgcmV0dXJuICEodGhpcy5sZWZ0VG9wLmxlZnQgKyBsZWZ0IDwgMCB8fCB0aGlzLmxlZnRUb3AudG9wICsgdG9wIDwgMCB8fFxuICAgICAgdGhpcy5sZWZ0VG9wLnRvcCArIHRvcCArIHRoaXMuZGltZW5zaW9uLmhlaWdodCA+IHRoaXMucGFnZUhlaWdodCB8fFxuICAgICAgdGhpcy5sZWZ0VG9wLmxlZnQgKyBsZWZ0ICsgdGhpcy5kaW1lbnNpb24ud2lkdGggPiB0aGlzLnBhZ2VXaWR0aCk7XG4gIH1cblxuICBpc1BvaW50KCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLlBPSU5ULmlkO1xuICB9XG5cbiAgaXNTVkcoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUuaWQgfHxcbiAgICAgIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuRElTVEFOQ0UuaWQgfHxcbiAgICAgIHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuQVJST1cuaWQ7XG4gIH1cblxuICBpc0Rpc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLkRJU1RBTkNFLmlkO1xuICB9XG5cbiAgZGlzdGFuY2VUZXh0T3B0aW9ucygpIHtcbiAgICByZXR1cm4geydmb250LXNpemUnOiBcIjEycHhcIn1cbiAgfVxuXG4gIGlzUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5ESVNUQU5DRS5pZCB8fFxuICAgICAgdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5BUlJPVy5pZDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RW5kUG9zaXRpb24ocG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgdGhpcy5lbmRQb3NpdGlvbiA9IFBvc2l0aW9uLmNsb25lKHBvc2l0aW9uKTtcbiAgICB0aGlzLnBhdGhWYWx1ZSA9IFwiTVwiICsgdGhpcy5wb3NpdGlvbi5sZWZ0ICsgXCIsXCIgKyB0aGlzLnBvc2l0aW9uLnRvcCArIFwiIExcIiArIHRoaXMuZW5kUG9zaXRpb24ubGVmdCArIFwiLFwiICsgdGhpcy5lbmRQb3NpdGlvbi50b3A7XG4gIH1cblxuICBwcml2YXRlIGFkZFBvaW50KHBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgIHRoaXMucG9pbnRzLnB1c2gocG9zaXRpb24pO1xuICAgIHRoaXMucG9pbnRzVmFsdWUgKz0gcG9zaXRpb24ubGVmdCArIFwiLFwiICsgcG9zaXRpb24udG9wICsgXCIgXCI7XG4gIH1cblxuICBwcml2YXRlIGdldERpc3RhbmNlKCkge1xuICAgIGNvbnN0IHhzID0gdGhpcy5wb3NpdGlvbi5sZWZ0IC0gdGhpcy5lbmRQb3NpdGlvbi5sZWZ0O1xuICAgIGNvbnN0IHlzID0gdGhpcy5wb3NpdGlvbi50b3AgLSB0aGlzLmVuZFBvc2l0aW9uLnRvcDtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnNxcnQoeHMgKiB4cyArIHlzICogeXMpKTtcbiAgfVxuXG4gIGJvdHRvbSgpIHtcbiAgICByZXR1cm4gJ3VybCgnICsgd2luZG93LmxvY2F0aW9uICsgJyNlbmQpJztcbiAgfVxuXG4gIGhlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNEaXN0YW5jZSgpID8gJ3VybCgnICsgd2luZG93LmxvY2F0aW9uICsgJyNzdGFydCknIDogXCJcIjtcbiAgfVxuXG4gIGdldFRleHRYKCkge1xuICAgIHJldHVybiB0aGlzLmdldERpc3RhbmNlKCkgLyAyO1xuICB9XG5cbiAgaXNUZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IEFubm90YXRpb25UeXBlLlRFWFRfRklFTEQuaWQgfHwgdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5XQVRFUk1BUksuaWQ7XG4gIH1cblxuICBnZXRGb3JtYXR0aW5nKCkge1xuICAgIGNvbnN0IGYgPSB0aGlzLmZvcm1hdHRpbmc7XG4gICAgY29uc3QgZm9ybWF0dGluZyA9IEZvcm1hdHRpbmcuZGVmYXVsdCgpO1xuICAgIGlmIChmKSB7XG4gICAgICBmb3JtYXR0aW5nLmZvbnRTaXplID0gZi5mb250U2l6ZTtcbiAgICAgIGZvcm1hdHRpbmcuZm9udCA9IGYuZm9udDtcbiAgICAgIGZvcm1hdHRpbmcuY29sb3IgPSBmLmNvbG9yO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGluZztcbiAgfVxuXG4gIHNhdmVGb3JtYXR0aW5nKCRldmVudDogRm9ybWF0dGluZykge1xuICAgIHRoaXMuZm9ybWF0dGluZy5mb250U2l6ZSA9ICRldmVudC5mb250U2l6ZTtcbiAgICB0aGlzLmZvcm1hdHRpbmcuZm9udCA9ICRldmVudC5mb250O1xuICAgIHRoaXMuZm9ybWF0dGluZy5jb2xvciA9ICRldmVudC5jb2xvcjtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLl9yZW1vdmVBbm5vdGF0aW9uU2VydmljZS5yZW1vdmUobmV3IFJlbW92ZUFubm90YXRpb24odGhpcy5pZCkpO1xuICB9XG5cbiAgZ2V0TWVudVNoaWZ0KCkge1xuICAgIGNvbnN0IG1lbnVXaWR0aCA9IHRoaXMuaXNUZXh0KCkgPyAyNjUgOiAxMTE7XG4gICAgcmV0dXJuIHRoaXMuZGltZW5zaW9uLndpZHRoID4gbWVudVdpZHRoID8gMCA6ICh0aGlzLmRpbWVuc2lvbi53aWR0aCAtIG1lbnVXaWR0aCkgKiAwLjU7XG4gIH1cblxuICBnZXRNZW51VHlwZSgpIHtcbiAgICByZXR1cm4gTWVudVR5cGUuRk9SX0FOTk9UQVRJT047XG4gIH1cblxuICBhZGRDb21tZW50KCkge1xuICAgIHRoaXMuX2NvbW1lbnRBbm5vdGF0aW9uU2VydmljZS5jb21tZW50KG5ldyBDb21tZW50QW5ub3RhdGlvbih0aGlzLmlkKSk7XG4gIH1cblxuICBwcml2YXRlIHNldFRleHRGb2N1cygpIHtcbiAgICBpZiAodGhpcy5pc1RleHQoKSB8fCB0aGlzLmlzVGV4dFJlcGxhY2VtZW50KCkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gJChcIiN0ZXh0LVwiICsgdGhpcy5pZCk7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIHRleHRBcmVhSGVpZ2h0KGtleTogYW55LCB0ZXh0YXJlYTogYW55KSB7XG4gICAgdGhpcy5kaW1lbnNpb24uaGVpZ2h0ID0gXCJFbnRlclwiID09PSBrZXkgPyB0ZXh0YXJlYS5zY3JvbGxIZWlnaHQgKyB0aGlzLmZvcm1hdHRpbmcuZm9udFNpemUgOiB0ZXh0YXJlYS5zY3JvbGxIZWlnaHQ7XG4gICAgdGhpcy5kaW1lbnNpb24ud2lkdGggPSB0ZXh0YXJlYS5zY3JvbGxXaWR0aDtcbiAgfVxuXG4gIGhpZGVNZW51KCRldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLl9hY3RpdmVBbm5vdGF0aW9uU2VydmljZS5jaGFuZ2VBY3RpdmUobnVsbCk7XG4gIH1cblxuICBnZXRBbm5vdGF0aW9uRGF0YSgpOiBBbm5vdGF0aW9uRGF0YSB7XG4gICAgY29uc3QgYW5ub3RhdGlvbkRhdGEgPSBuZXcgQW5ub3RhdGlvbkRhdGEoKTtcbiAgICBhbm5vdGF0aW9uRGF0YS5pZCA9IHRoaXMuaWQ7XG4gICAgYW5ub3RhdGlvbkRhdGEudGV4dCA9IHRoaXMudGV4dFZhbHVlO1xuICAgIGFubm90YXRpb25EYXRhLmZvbnRDb2xvciA9IHBhcnNlSW50KFV0aWxzLnRvSGV4KHRoaXMuZm9ybWF0dGluZy5jb2xvcikucmVwbGFjZShcIiNcIiwgXCJcIiksIDE2KTtcbiAgICBhbm5vdGF0aW9uRGF0YS5mb250U2l6ZSA9IHRoaXMuZm9ybWF0dGluZy5mb250U2l6ZTtcbiAgICBhbm5vdGF0aW9uRGF0YS5mb250ID0gdGhpcy5mb3JtYXR0aW5nLmZvbnQ7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuUE9JTlQuaWQpIHtcbiAgICAgIGFubm90YXRpb25EYXRhLmxlZnQgPSB0aGlzLmxlZnRUb3AubGVmdCArIDIwO1xuICAgICAgYW5ub3RhdGlvbkRhdGEudG9wID0gdGhpcy5sZWZ0VG9wLnRvcCArIDIwO1xuICAgICAgYW5ub3RhdGlvbkRhdGEuaGVpZ2h0ID0gMDtcbiAgICAgIGFubm90YXRpb25EYXRhLndpZHRoID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgYW5ub3RhdGlvbkRhdGEubGVmdCA9IHRoaXMubGVmdFRvcC5sZWZ0O1xuICAgICAgYW5ub3RhdGlvbkRhdGEudG9wID0gdGhpcy5sZWZ0VG9wLnRvcDtcbiAgICAgIGFubm90YXRpb25EYXRhLmhlaWdodCA9IHRoaXMuZGltZW5zaW9uLmhlaWdodDtcbiAgICAgIGFubm90YXRpb25EYXRhLndpZHRoID0gdGhpcy5kaW1lbnNpb24ud2lkdGg7XG4gICAgfVxuICAgIGFubm90YXRpb25EYXRhLnBhZ2VOdW1iZXIgPSB0aGlzLnBhZ2VOdW1iZXI7XG4gICAgYW5ub3RhdGlvbkRhdGEudHlwZSA9IHRoaXMudHlwZTtcbiAgICBhbm5vdGF0aW9uRGF0YS5zdmdQYXRoID0gdGhpcy5nZXRTdmdQYXRoKCk7XG4gICAgcmV0dXJuIGFubm90YXRpb25EYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdmdQYXRoKCkge1xuICAgIGxldCBzdmdQYXRoID0gXCJNXCI7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUuaWQpIHtcbiAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICBsZXQgcHJldmlvdXNYID0gMCwgcHJldmlvdXNZID0gMDtcbiAgICAgIGZvciAoY29uc3QgcG9pbnQgb2YgdGhpcy5wb2ludHMpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgc3ZnUGF0aCArPSBwb2ludC5sZWZ0ICsgXCIsXCIgKyBwb2ludC50b3AgKyBcImxcIjtcbiAgICAgICAgICBpbmRleCA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldmlvdXNYID0gcG9pbnQubGVmdCAtIHByZXZpb3VzWDtcbiAgICAgICAgICBwcmV2aW91c1kgPSBwb2ludC50b3AgLSBwcmV2aW91c1k7XG4gICAgICAgICAgc3ZnUGF0aCArPSBwcmV2aW91c1ggKyBcIixcIiArIHByZXZpb3VzWSArIFwibFwiO1xuICAgICAgICB9XG4gICAgICAgIHByZXZpb3VzWCA9IHBvaW50LmxlZnQ7XG4gICAgICAgIHByZXZpb3VzWSA9IHBvaW50LnRvcDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuRElTVEFOQ0UuaWQgfHwgdGhpcy50eXBlID09PSBBbm5vdGF0aW9uVHlwZS5BUlJPVy5pZCkge1xuICAgICAgc3ZnUGF0aCArPSB0aGlzLnBvc2l0aW9uLmxlZnQgKyBcIixcIiArIHRoaXMucG9zaXRpb24udG9wICsgXCIgXCI7XG4gICAgICBzdmdQYXRoICs9IHRoaXMuZW5kUG9zaXRpb24ubGVmdCArIFwiLFwiICsgdGhpcy5lbmRQb3NpdGlvbi50b3AgKyBcIiBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ZnUGF0aCA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBzdmdQYXRoO1xuICB9XG5cbiAgcHJpdmF0ZSBvblBhZ2UocG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uLmxlZnQgPD0gdGhpcy5wYWdlV2lkdGggJiYgcG9zaXRpb24udG9wIDw9IHRoaXMucGFnZUhlaWdodCAmJlxuICAgICAgcG9zaXRpb24ubGVmdCA+PSAwICYmIHBvc2l0aW9uLnRvcCA+PSAwO1xuICB9XG59XG4iXX0=