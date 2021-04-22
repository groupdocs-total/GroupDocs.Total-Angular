import {AfterViewInit, Component, OnInit, AfterViewChecked} from '@angular/core';
import {
  AnnotationData,
  AnnotationType,
  CommentAnnotation,
  Dimension,
  Position,
  RemoveAnnotation
} from "../annotation-models";
import {ActiveAnnotationService} from "../active-annotation.service";
import {Formatting, Utils, MenuType, ZoomService} from "@groupdocs.examples.angular/common-components";
import {RemoveAnnotationService} from "../remove-annotation.service";
import {CommentAnnotationService} from "../comment-annotation.service";
import * as jquery from 'jquery';

const $ = jquery;

@Component({
  selector: 'gd-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.less']
})
export class AnnotationComponent implements OnInit, AfterViewInit, AfterViewChecked {

  id: number;
  position: Position;
  leftTop: Position;
  type: string;
  pageWidth: number;
  pageHeight: number;
  active = true;
  dimension = new Dimension(0, 0);
  pageNumber: number;
  textValue = "";
  pathValue: string;
  distanceValue = '0px';
  pointsValue = "";
  svgPath = "";
  formatting = Formatting.default();
  hidden: boolean;

  private oldPosition: { x: number; y: number };
  private points = [];
  private endPosition: Position;

  constructor(private _activeAnnotationService: ActiveAnnotationService,
              private _removeAnnotationService: RemoveAnnotationService,
              private _commentAnnotationService: CommentAnnotationService,
              private _zoomService: ZoomService) {
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
    this.leftTop = Position.clone(this.position);
    if (this.isPolyline()) {
      if (this.svgPath) {
        const parsedPoints = this.svgPath.replace("M", "").split('L');
        let x = parseFloat(parsedPoints[0].split(",")[0]);
        let y = parseFloat(parsedPoints[0].split(",")[1]);
        const comp = this;
        parsedPoints.forEach(function (point, index) {
          if (index !== 0) {
            if (point !== "") {
              comp.addPoint(new Position(x, y));
              x = (x + parseFloat(point.split(",")[0]));
              y = (y + parseFloat(point.split(",")[1]));
            }
          }
        });
      } else {
        this.addPoint(this.position);
      }
    } else if (this.isPath()) {
      if (this.svgPath || (this.type === AnnotationType.ARROW.id && !this.dimension.isNone())) {
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
      } else {
        this.setEndPosition(this.position);
      }
      this.distanceValue = this.getDistance() + "px";
    } else if (this.type === AnnotationType.POINT.id) {
      this.initPoint();
    } else {
      this.setEndPosition(this.position);
    }
  }

  ngAfterViewInit(): void {
    this.setTextFocus();
  }

  ngAfterViewChecked() {
    this._zoomService.changeZoom(this._zoomService.zoom);
  }

  activation() {
    this._activeAnnotationService.changeActive(this.id);
  }

  width($event) {
    if (this.checkDragging($event, 0)) {
      this.dimension.width += $event;
    }
  }

  height($event) {
    if (this.checkDragging(0, $event)) {
      this.dimension.height += $event;
    }
  }

  left($event) {
    this.position.left += $event;
    this.correctPosition();
    this.refreshLeftTop();
  }

  top($event) {
    this.position.top += $event;
    this.correctPosition();
    this.refreshLeftTop();
  }

  private refreshLeftTop() {
    this.leftTop.left = this.position.left;
    this.leftTop.top = this.position.top;
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

  initPoint() {
    this.dimension = new Dimension(40, 40);
    this.position.left = this.position.left - 20;
    this.position.top = this.position.top - 20;
    this.leftTop = Position.clone(this.position);
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
        this.leftTop.left += left;
        this.leftTop.top += top;
      } else if (this.isPath()) {
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
      } else {
        this.position.left += left;
        this.position.top += top;
        this.correctPosition();
        this.refreshLeftTop();
      }
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
      case AnnotationType.TEXT_FIELD.id:
      case AnnotationType.WATERMARK.id:
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
    this.textValue = value;
  }

  draw(position: Position) {
    if (this.onPage(position)) {
      if (this.isPolyline()) {
        this.addPoint(position);
      } else if (this.isPath()) {
        this.setEndPosition(position);
        this.distanceValue = this.getDistance() + "px";
      }
      this.calcPositionAndDimension();
    }
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
    if (currentPosition.left <= this.pageWidth && currentPosition.left >= 0) {
      this.dimension.width = currentPosition.left - this.position.left;
    }
    if (currentPosition.top <= this.pageHeight && currentPosition.top >= 0) {
      this.dimension.height = currentPosition.top - this.position.top;
    }
  }

  getHeight() {
    return this.dimension.height === undefined ? undefined : Math.abs(this.dimension.height);
  }

  getWidth() {
    return this.dimension.width === undefined ? undefined : Math.abs(this.dimension.width);
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
    this.endPosition = Position.clone(position);
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
    const menuWidth = this.isText() ? 265 : 111;
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
        const element = $("#text-" + this.id);
        if (element) {
          element.focus();
        }
      }, 100);
    }
  }

  textAreaHeight(key: any, textarea: any) {
    this.dimension.height = "Enter" === key ? textarea.scrollHeight + this.formatting.fontSize : textarea.scrollHeight;
    this.dimension.width = textarea.scrollWidth;
  }

  hideMenu($event: Event) {
    this._activeAnnotationService.changeActive(null);
  }

  getAnnotationData(): AnnotationData {
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
    } else {
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

  private getSvgPath() {
    let svgPath = "M";
    if (this.type === AnnotationType.POLYLINE.id) {
      let index = 0;
      let previousX = 0, previousY = 0;
      for (const point of this.points) {
        if (index === 0) {
          svgPath += point.left + "," + point.top + "l";
          index = 1;
        } else {
          previousX = point.left - previousX;
          previousY = point.top - previousY;
          svgPath += previousX + "," + previousY + "l";
        }
        previousX = point.left;
        previousY = point.top;
      }
    } else if (this.type === AnnotationType.DISTANCE.id || this.type === AnnotationType.ARROW.id) {
      svgPath += this.position.left + "," + this.position.top + " ";
      svgPath += this.endPosition.left + "," + this.endPosition.top + " ";
    } else {
      svgPath = "";
    }
    return svgPath;
  }

  private onPage(position: Position) {
    return position.left <= this.pageWidth && position.top <= this.pageHeight &&
      position.left >= 0 && position.top >= 0;
  }
}
