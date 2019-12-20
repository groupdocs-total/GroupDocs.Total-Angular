import {AfterViewInit, Component, OnInit} from '@angular/core';
import {
  AnnotationData,
  AnnotationType,
  CommentAnnotation,
  Dimension,
  Position,
  RemoveAnnotation
} from "../annotation-models";
import {ActiveAnnotationService} from "../active-annotation.service";
import {Formatting, Utils, MenuType} from "@groupdocs.examples.angular/common-components";
import * as jquery from 'jquery';
import {RemoveAnnotationService} from "../remove-annotation.service";
import {CommentAnnotationService} from "../comment-annotation.service";

const $ = jquery;

@Component({
  selector: 'gd-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.less']
})
export class AnnotationComponent implements OnInit, AfterViewInit {

  id: number;
  position: Position;
  leftTop: Position;
  type: string;
  pageWidth: number;
  pageHeight: number;
  active = true;
  dimension = new Dimension(0, 0);
  pageNumber: number;
  data = new AnnotationData();
  pathValue: string;
  distanceValue = '0px';
  pointsValue = "";

  private oldPosition: { x: number; y: number };
  private points = [];
  private endPosition: Position;
  private formatting: Formatting;

  constructor(private _activeAnnotationService: ActiveAnnotationService,
              private _removeAnnotationService: RemoveAnnotationService,
              private _commentAnnotationService: CommentAnnotationService) {
    this._activeAnnotationService.activeChange.subscribe((id: number) => {
      this.active = this.id === id;
      if (this.active) {
        this.setTextFocus();
      }
    });
  }

  static isOnPage(position) {
    const currentPage = document.elementFromPoint(position.x, position.y);
    return currentPage && $(currentPage).parent().parent() &&
      ($(currentPage).parent().parent().parent().hasClass("page") ||
        $(currentPage).parent().parent().parent().parent().parent().hasClass("page"));
  }

  ngOnInit() {
    this.leftTop = this.position;
    this.addPoint(this.position);
    this.setEndPosition(this.position);
  }

  ngAfterViewInit(): void {
    this.setTextFocus();
  }

  activation() {
    this._activeAnnotationService.changeActive(this.id);
  }

  width($event) {
    this.dimension.width += $event;
    this.correctPosition();
  }

  height($event) {
    this.dimension.height += $event;
    this.correctPosition();
  }

  left($event) {
    this.position.left += $event;
    this.correctPosition();
  }

  top($event) {
    this.position.top += $event;
    this.correctPosition();
  }

  private correctPosition() {
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

  dragOver($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  dragStart($event: DragEvent) {
    $event.preventDefault();
    this.oldPosition = Utils.getMousePosition($event);
    if ($event.dataTransfer) {
      $event.dataTransfer.setData('text', 'foo');
    }
  }

  dragging($event) {
    $event.preventDefault();
    const position = Utils.getMousePosition($event);
    if (position.x && position.y && AnnotationComponent.isOnPage(position)) {
      const left = position.x - this.oldPosition.x;
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
      } else if (this.isPath()) {
        if (!this.checkDragging(left, top)) {
          return;
        }
        this.endPosition.left += left;
        this.endPosition.top += top;
        this.position.left += left;
        this.position.top += top;
        this.pathValue = "M" + this.position.left + "," + this.position.top + " L" + this.endPosition.left + "," + this.endPosition.top;
      } else {
        this.position.left += left;
        this.position.top += top;
      }
      this.leftTop.left += left;
      this.leftTop.top += top;
      this.correctPosition();
      this.oldPosition = position;
    }
  }

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

  isStrikeoutOrUnderline() {
    return this.type === AnnotationType.TEXT_STRIKEOUT.id || this.type === AnnotationType.TEXT_UNDERLINE.id;
  }

  isTextReplacement() {
    return this.type === AnnotationType.TEXT_REPLACEMENT.id;
  }

  saveText(value: string) {
    this.data.text = value;
  }

  draw(position: Position) {
    if (this.isPolyline()) {
      this.addPoint(position);
    } else if (this.isPath()) {
      this.setEndPosition(position);
      this.distanceValue = this.getDistance() + "px";
    }
    this.calcPositionAndDimension();
  }

  setStyles() {
    return {
      'stroke': '#579AF0',
      'stroke-width': 2,
      'fill-opacity': 0,
      'id': (this.isPolyline() ? 'gd-polyline-annotation-' : (this.isDistance() ? 'gd-distance-annotation-' : 'gd-arrow-annotation-')) + this.id,
      'class': 'annotation-svg',
    };
  }

  isPolyline() {
    return this.type === AnnotationType.POLYLINE.id;
  }

  private calcPositionAndDimension() {
    const leftTop = new Position(Number.MAX_VALUE, Number.MAX_VALUE);
    const rightBottom = new Position(Number.MIN_VALUE, Number.MIN_VALUE);
    if (this.isPolyline()) {
      for (const point of this.points) {
        leftTop.left = Math.min(point.left, leftTop.left);
        leftTop.top = Math.min(point.top, leftTop.top);
        rightBottom.left = Math.max(point.left, rightBottom.left);
        rightBottom.top = Math.max(point.top, rightBottom.top);
      }
    } else {
      leftTop.left = Math.min(this.position.left, this.endPosition.left);
      leftTop.top = Math.min(this.position.top, this.endPosition.top);
      rightBottom.left = Math.max(this.position.left, this.endPosition.left);
      rightBottom.top = Math.max(this.position.top, this.endPosition.top);
    }
    this.dimension.width = rightBottom.left - leftTop.left;
    this.dimension.height = rightBottom.top - leftTop.top;
    this.leftTop = leftTop;
  }

  calcDimensions(currentPosition: Position) {
    this.dimension.width = currentPosition.left - this.position.left;
    this.dimension.height = currentPosition.top - this.position.top;
  }

  private checkDragging(left: number, top: number) {
    return !(this.leftTop.left + left < 0 || this.leftTop.top + top < 0 ||
      this.leftTop.top + top + this.dimension.height > this.pageHeight ||
      this.leftTop.left + left + this.dimension.width > this.pageWidth);
  }

  isPoint() {
    return this.type === AnnotationType.POINT.id;
  }

  isSVG() {
    return this.type === AnnotationType.POLYLINE.id ||
      this.type === AnnotationType.DISTANCE.id ||
      this.type === AnnotationType.ARROW.id;
  }

  isDistance() {
    return this.type === AnnotationType.DISTANCE.id;
  }

  distanceTextOptions() {
    return {'font-size': "12px"}
  }

  isPath() {
    return this.type === AnnotationType.DISTANCE.id ||
      this.type === AnnotationType.ARROW.id;
  }

  private setEndPosition(position: Position) {
    this.endPosition = position;
    this.pathValue = "M" + this.position.left + "," + this.position.top + " L" + this.endPosition.left + "," + this.endPosition.top;
  }

  private addPoint(position: Position) {
    this.points.push(position);
    this.pointsValue += position.left + "," + position.top + " ";
  }

  private getDistance() {
    const xs = this.position.left - this.endPosition.left;
    const ys = this.position.top - this.endPosition.top;
    return Math.round(Math.sqrt(xs * xs + ys * ys));
  }

  bottom() {
    return 'url(' + window.location + '#end)';
  }

  head() {
    return this.isDistance() ? 'url(' + window.location + '#start)' : "";
  }

  getTextX() {
    return this.getDistance() / 2;
  }

  isText() {
    return this.type === AnnotationType.TEXT_FIELD.id || this.type === AnnotationType.WATERMARK.id;
  }

  getFormatting() {
    const f = this.formatting;
    const formatting = Formatting.default();
    if (f) {
      formatting.fontSize = f.fontSize;
      formatting.font = f.font;
      formatting.color = f.color;
    }
    return formatting;
  }

  saveFormatting($event: Formatting) {
    this.formatting.fontSize = $event.fontSize;
    this.formatting.font = $event.font;
    this.formatting.color = $event.color;
  }

  remove() {
    this._removeAnnotationService.remove(new RemoveAnnotation(this.id));
  }

  getMenuShift() {
    const menuWidth = this.isText() ? 265 : 148;
    return this.dimension.width > menuWidth ? 0 : (this.dimension.width - menuWidth) * 0.5;
  }

  getMenuType() {
    return MenuType.FOR_ANNOTATION;
  }

  addComment() {
    this._commentAnnotationService.comment(new CommentAnnotation(this.id));
  }

  private setTextFocus() {
    if (this.isText() || this.isTextReplacement()) {
      setTimeout(() => {
        const element = $("#text");
        if (element) {
          element.focus();
        }
      }, 100);
    }
  }
}
