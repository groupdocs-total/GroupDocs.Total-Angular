import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AnnotationData, AnnotationType, Dimension, Position} from "../annotation-models";
import {ActiveAnnotationService} from "../active-annotation.service";
import {Utils} from "@groupdocs.examples.angular/common-components";
import * as jquery from 'jquery';

const $ = jquery;

@Component({
  selector: 'gd-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.less']
})
export class AnnotationComponent implements OnInit, AfterViewInit {
  id: number;
  position: Position;
  type: string;
  pageWidth: number;
  pageHeight: number;
  active = true;
  dimension = new Dimension(0, 0);
  pageNumber: number;
  data = new AnnotationData();

  private oldPosition: { x: number; y: number };
  private points = [];
  private pointsValue = "";

  constructor(private _activeAnnotationService: ActiveAnnotationService) {
    this._activeAnnotationService.activeChange.subscribe((id: number) => {
      this.active = this.id === id;
    });
  }

  ngOnInit() {
    this.points.push(this.position);
    this.pointsValue += this.position.left + "," + this.position.top + " ";
  }

  ngAfterViewInit(): void {
    if (this.type === AnnotationType.TEXT_REPLACEMENT.id) {
      setTimeout(() => {
        const element = $("#text");
        if (element) {
          element.focus();
        }
      }, 100);
    }
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
    if (position.x && position.y && this.isOnPage(position)) {
      const left = position.x - this.oldPosition.x;
      const top = position.y - this.oldPosition.y;
      if (this.type === AnnotationType.POLYLINE.id) {
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
      this.position.left += left;
      this.position.top += top;
      this.correctPosition();
      this.oldPosition = position;
    }
  }

  isOnPage(position) {
    const currentPage = document.elementFromPoint(position.x, position.y);
    return currentPage && $(currentPage).parent().parent() &&
      ($(currentPage).parent().parent().parent().hasClass("page") ||
        $(currentPage).parent().parent().parent().parent().parent().hasClass("page"));
  }

  getAnnotationClass() {
    switch (this.type) {
      case AnnotationType.TEXT.id:
        return "gd-text-annotation";
      case AnnotationType.TEXT_STRIKEOUT.id:
        return "gd-text-annotation gd-text-strikeout-annotation";
      case AnnotationType.TEXT_UNDERLINE.id:
        return "gd-text-annotation gd-text-underline-annotation";
      case AnnotationType.TEXT_REDACTION.id:
        return "gd-text-redaction-annotation";
      case AnnotationType.TEXT_REPLACEMENT.id:
        return "gd-text-replacement-annotation";
      default:
        return "";
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
    this.points.push(position);
    this.pointsValue += position.left + "," + position.top + " ";
    this.calcPositionAndDimension(position);
  }

  setStyles() {
    return {
      'stroke': '#82abc7',
      'stroke-width': 2,
      'fill-opacity': 0,
      'id': 'gd-polyline-annotation-' + this.id,
      'class': 'gd-annotation annotation svg'
    };
  }

  isPolyline() {
    return this.type === AnnotationType.POLYLINE.id;
  }

  private calcPositionAndDimension(position: Position) {
    const leftTop = new Position(Number.MAX_VALUE, Number.MAX_VALUE);
    const rightBottom = new Position(Number.MIN_VALUE, Number.MIN_VALUE);
    for (const point of this.points) {
      leftTop.left = (point.left < leftTop.left) ? point.left : leftTop.left;
      leftTop.top = (point.top < leftTop.top) ? point.top : leftTop.top;
      rightBottom.left = (point.left >= rightBottom.left) ? point.left : rightBottom.left;
      rightBottom.top = (point.top >= rightBottom.top) ? point.top : rightBottom.top;
    }
    this.dimension.width = rightBottom.left - leftTop.left;
    this.dimension.height = rightBottom.top - leftTop.top;
    this.position = leftTop;
  }

  calcDimensions(currentPosition: Position) {
    this.dimension.width = currentPosition.left - this.position.left;
    this.dimension.height = currentPosition.top - this.position.top;
  }

  private checkDragging(left: number, top: number) {
    if (this.position.left + left < 0 || this.position.top + top < 0 ||
      this.position.top + top + this.dimension.height > this.pageHeight ||
      this.position.left + left + this.dimension.width > this.pageWidth) {
      return false;
    }
    return true;
  }
}
