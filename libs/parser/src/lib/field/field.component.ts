import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Utils, ZoomService } from '@groupdocs.examples.angular/common-components';
import { Point, Size, TemplateField } from '../app-models';

import * as jquery from 'jquery';
import { ActiveFieldService } from '../active-field.service';
import { Subscription } from 'rxjs';
const $ = jquery;

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.less']
})
export class FieldComponent implements OnInit, OnDestroy {
  id: number;
  pageSize: Size;

  private _field: TemplateField

  private _left: number;
  private _top: number;
  private _right: number;
  private _bottom: number;
  private _active = false;
  private _editMode = false;

  private _mouseMoveParameters: MouseMoveParameters = null;

  private _activeFieldSubscription: Subscription;
  private _zoomSubscription: Subscription;
  private _zoom: number;

  constructor(
    private _activeFieldService: ActiveFieldService,
    private _zoomService: ZoomService) {
    this._activeFieldSubscription = _activeFieldService.changed.subscribe(id => {
      const isActive = this.id == id;
      if (!isActive && this._active) {
        this.deactivate();
      }

      this._active = isActive;
    });

    this._zoom = _zoomService.zoom;
    this._zoomSubscription = _zoomService.zoomChange.subscribe((zoom: number) => {
      this._zoom = zoom;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this._activeFieldSubscription) {
      this._activeFieldSubscription.unsubscribe();
    }

    if (this._zoomSubscription) {
      this._zoomSubscription.unsubscribe();
    }
  }

  set field(field: TemplateField) {
    this._field = field;

    this.left = this.field.position.x ;
    this.top = this.field.position.y;

    this.right = (this.field.position.x + this.field.size.width);
    this.bottom = (this.field.position.y + this.field.size.height);
  }

  get field() {
    return this._field;
  }

  get left() {
    return this._left;
  }

  set left(left: number) {
    this._left = left;
  }

  get top() {
    return this._top;
  }

  set top(top: number) {
    this._top = top;
  }

  get right() {
    return this._right;
  }

  set right(right: number) {
    this._right = right;
  }

  get bottom() {
    return this._bottom;
  }

  set bottom(bottom: number) {
    this._bottom = bottom;
  }

  get height() {
    return this.bottom - this.top;
  }

  get width() {
    return this.right - this.left;
  }

  isActive() {
    return this._active;
  }

  isEditMode() {
    return this._editMode;
  }

  deactivate() {
    this._active = false;
    this._editMode = false;
    this._field.update();

    this.hideContextMenu();
  }

  deactivateEditMode() {
    this._editMode = false;
    this._field.update();
  }

  activateEditMode() {
    this._editMode = true;
  }

  get scale() {
    return this._zoom / 100;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove($event: MouseEvent) {
    this.mouseMove($event);
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp($event: MouseEvent) {
    this.mouseUp($event);
  }

  @HostListener("document:keyup", ['$event'])
  onKey($event: KeyboardEvent) {
    if (!this.isActive()) {
      return;
    }

    if ($event.key == "Enter" && this.isEditMode()) {
      this.deactivateEditMode();
    }

    if ($event.key == "Delete" && !this.isEditMode()) {
      this.remove();
    }
  }

  mouseDown($event: MouseEvent, mode: string) {
    let mouseMoveMode = MouseMoveMode[mode];
    if (mouseMoveMode === undefined) {
      return;
    }

    let position: Point;
    switch (mouseMoveMode) {
      case MouseMoveMode.Move:
        position = this.field.position;
        break;

      case MouseMoveMode.NW:
        position = this.field.position;
        break;

      case MouseMoveMode.NE:
        position = new Point(this.right, this.top);
        break;

      case MouseMoveMode.SE:
        position = new Point(this.right, this.bottom);
        break;

      case MouseMoveMode.SW:
        position = new Point(this.left, this.bottom);
        break;

      default:
        return;
    }

    $event.preventDefault();

    this._activeFieldService.changeActive(this.id);
    this._mouseMoveParameters = new MouseMoveParameters(
      Utils.getMousePosition($event),
      position,
      mouseMoveMode,
      this.scale
    );
  }

  mouseUp($event: MouseEvent) {
    if (!this._mouseMoveParameters) {
      return;
    }

    $event.preventDefault();
    this._mouseMoveParameters = null;

    this.field.position = new Point(this.left, this.top);
    this.field.size = new Size(this.width, this.height);

    this.field.update();
  }

  mouseMove($event: MouseEvent) {
    if (!this._mouseMoveParameters) {
      return;
    }

    const minWidth = 40;
    const minHeight = 10;

    const newMousePosition = Utils.getMousePosition($event);
    const newFieldPosition = this._mouseMoveParameters.getNewPosition(newMousePosition);

    const pageWidth = this.pageSize.width;
    const pageHeight = this.pageSize.height;
    const fieldWidth = this.field.size.width;
    const fieldHeight = this.field.size.height;

    switch (this._mouseMoveParameters.mode) {
      case MouseMoveMode.Move:
        this.left = Math.min(pageWidth - fieldWidth, Math.max(0, newFieldPosition.x));
        this.top = Math.min(pageHeight - fieldHeight, Math.max(0, newFieldPosition.y));
        this.right = this.left + fieldWidth;
        this.bottom = this.top + fieldHeight;
        break;

      case MouseMoveMode.NW:
        this.left = Math.min(this.right - minWidth, Math.max(0, newFieldPosition.x));
        this.top = Math.min(this.bottom - minHeight, Math.max(0, newFieldPosition.y));
        break;

      case MouseMoveMode.NE:
        this.right = Math.max(this.left + minWidth, Math.min(pageWidth, newFieldPosition.x));
        this.top = Math.min(this.bottom - minHeight, Math.max(0, newFieldPosition.y));
        break;

      case MouseMoveMode.SE:
        this.right = Math.max(this.left + minWidth, Math.min(pageWidth, newFieldPosition.x));
        this.bottom = Math.max(this.top + minHeight, Math.min(pageHeight, newFieldPosition.y));
        break;

      case MouseMoveMode.SW:
        this.left = Math.min(this.right - minWidth, Math.max(0, newFieldPosition.x));
        this.bottom = Math.max(this.top + minHeight, Math.min(pageHeight, newFieldPosition.y));
        break;
    }
  }

  remove() {
    this.field.remove();
  }

  // Context menu
  isContextMenuVisible = false;

  rightClick($event) {
    $event.preventDefault();
    this.showContextMenu();
  }

  showContextMenu() {
    this.isContextMenuVisible = true;
  }

  hideContextMenu() {
    this.isContextMenuVisible = false;
  }
}

class MouseMoveParameters {
  private deltaX: number;
  private deltaY: number;
  readonly position: Point;
  readonly mode: MouseMoveMode;
  readonly scale: number;

  constructor(mousePosition: Point, position: Point, mode: MouseMoveMode, scale: number) {
    this.position = position;
    this.mode = mode;
    this.scale = scale;

    this.deltaX = mousePosition.x / scale - position.x;
    this.deltaY = mousePosition.y / scale - position.y;
  }

  getNewPosition(newMousePosition: Point): Point {
    return new Point(
      newMousePosition.x / this.scale - this.deltaX,
      newMousePosition.y / this.scale - this.deltaY
    );
  }
}

enum MouseMoveMode {
  Move,
  NE,
  NW,
  SW,
  SE
}