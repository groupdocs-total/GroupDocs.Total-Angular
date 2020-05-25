import {AfterViewInit, Component, OnInit} from '@angular/core';
import {
  WatermarkData,
  WatermarkType,
  CommentWatermark,
  Dimension,
  Position,
  RemoveWatermark
} from "../watermark-models";
import {ActiveWatermarkService} from "../active-watermark.service";
import {Formatting, Utils, MenuType} from "@groupdocs.examples.angular/common-components";
import {RemoveWatermarkService} from "../remove-watermark.service";
import * as jquery from 'jquery';

const $ = jquery;

@Component({
  selector: 'gd-watermark',
  templateUrl: './watermark.component.html',
  styleUrls: ['./watermark.component.less']
})
export class WatermarkComponent implements OnInit, AfterViewInit {

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

  private oldPosition: { x: number; y: number };
  private points = [];
  private endPosition: Position;

  constructor(private _activeWatermarkService: ActiveWatermarkService,
              private _removeWatermarkService: RemoveWatermarkService) {
    this._activeWatermarkService.activeChange.subscribe((id: number) => {
      this.active = this.id === id;
      if (this.active) {
        this.setTextFocus();
      }
    });
  }

  static isOnPage(position) {
    const currentPage = document.elementFromPoint(position.x, position.y);
    return currentPage && $(currentPage).parent().parent() &&
      this.hasSomeParentTheClass(currentPage, "page");
  }

  static hasSomeParentTheClass(element, classname) {
    if (element && element.getRootNode() != element && element.getAttribute("class") && element.className.split(' ').indexOf(classname)>=0) return true;
    return element.parentNode && this.hasSomeParentTheClass(element.parentNode, classname);
}

  ngOnInit() {
    this.leftTop = Position.clone(this.position);
    this.setEndPosition(this.position);
  }

  ngAfterViewInit(): void {
    this.setTextFocus();
  }

  activation() {
    this._activeWatermarkService.changeActive(this.id);
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

  getMenuType() {
    return MenuType.FOR_SIGNATURE;
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
    if (position.x && position.y && WatermarkComponent.isOnPage(position)) {
      const left = position.x - this.oldPosition.x;
      const top = position.y - this.oldPosition.y;

      this.position.left += left;
      this.position.top += top;
      this.correctPosition();
      this.refreshLeftTop();

      this.oldPosition = position;
    }
  }

  getWatermarkClass() {
    switch (this.type) {
      case WatermarkType.TEXT.id:
        return "gd-watermark-wrapper-border gd-text-watermark";
      default:
        return "gd-watermark-wrapper-border";
    }
  }

  saveText(value: string) {
    this.textValue = value;
  }

  draw(position: Position) {
    if (this.onPage(position)) {
      this.calcPositionAndDimension();
    }
  }

  setStyles() {
    return {
      'stroke': '#579AF0',
      'stroke-width': 2,
      'fill-opacity': 0,
      'id': this.id,
      'class': 'watermark-svg',
    };
  }

  private calcPositionAndDimension() {
    const leftTop = new Position(Number.MAX_VALUE, Number.MAX_VALUE);
    const rightBottom = new Position(Number.MIN_VALUE, Number.MIN_VALUE);

    leftTop.left = Math.min(this.position.left, this.endPosition.left);
    leftTop.top = Math.min(this.position.top, this.endPosition.top);
    rightBottom.left = Math.max(this.position.left, this.endPosition.left);
    rightBottom.top = Math.max(this.position.top, this.endPosition.top);
    
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

  distanceTextOptions() {
    return {'font-size': "12px"}
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

  getTextX() {
    return this.getDistance() / 2;
  }

  isText() {
    return this.type === WatermarkType.TEXT.id;
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
    this._removeWatermarkService.remove(new RemoveWatermark(this.id));
  }

  getMenuShift() {
    const menuWidth = this.isText() ? 265 : 111;
    return this.dimension.width > menuWidth ? 0 : (this.dimension.width - menuWidth) * 0.5;
  }

  private setTextFocus() {
    if (this.isText()) {
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
    this._activeWatermarkService.changeActive(null);
  }

  getWatermarkData(): WatermarkData {
    const watermarkData = new WatermarkData();
    watermarkData.id = this.id;
    watermarkData.text = this.textValue;
    watermarkData.fontColor = parseInt(Utils.toHex(this.formatting.color).replace("#", ""), 16);
    watermarkData.fontSize = this.formatting.fontSize;
    watermarkData.font = this.formatting.font;

    watermarkData.left = this.leftTop.left;
    watermarkData.top = this.leftTop.top;
    watermarkData.height = this.dimension.height;
    watermarkData.width = this.dimension.width;
  
    watermarkData.pageNumber = this.pageNumber;
    watermarkData.type = this.type;
    return watermarkData;
  }

  private onPage(position: Position) {
    return position.left <= this.pageWidth && position.top <= this.pageHeight &&
      position.left >= 0 && position.top >= 0;
  }
}
