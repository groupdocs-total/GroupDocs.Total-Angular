import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Utils } from '@groupdocs.examples.angular/common-components';
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

  private left: number;
  private top: number;
  private right: number;
  private bottom: number;
  private active = false;
  private editMode = false;

  private mouseMoveParameters: MouseMoveParameters = null;

  private activeFieldSubscribtion: Subscription;

  constructor(private activeFieldService: ActiveFieldService) {
    this.activeFieldSubscribtion = activeFieldService.changed.subscribe(id => {
      const isActive = this.id == id;
      if (!isActive && this.active) {
        this.deactivate();
      }

      this.active = isActive;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.activeFieldSubscribtion) {
      this.activeFieldSubscribtion.unsubscribe();
    }
  }

  set field(field: TemplateField) {
    this._field = field;

    this.left = this._field.position.x;
    this.top = this._field.position.y;

    this.right = this.left + this._field.size.width;
    this.bottom = this.top + this._field.size.height;
  }

  get field() {
    return this._field;
  }

  getLeft() {
    return this.left;
  }

  getTop() {
    return this.top;
  }

  getHeight() {
    return this.bottom - this.top;
  }

  getWidth() {
    return this.right - this.left;
  }

  isActive() {
    return this.active;
  }

  isEditMode() {
    return this.editMode;
  }

  deactivate() {
    this.active = false;
    this.editMode = false;
    this.field.update();
  }

  deactivateEditMode() {
    this.editMode = false;
    this.field.update();
  }

  activateEditMode() {
    this.editMode = true;    
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

    this.activeFieldService.changeActive(this.id);
    this.mouseMoveParameters = new MouseMoveParameters(
      Utils.getMousePosition($event),
      position,
      mouseMoveMode,
    );
  }

  mouseUp($event: MouseEvent) {
    if (!this.mouseMoveParameters) {
      return;
    }

    $event.preventDefault();
    this.mouseMoveParameters = null;
    this.field.position = new Point(this.left, this.top);
    this.field.size = new Size(this.getWidth(), this.getHeight());

    this.field.update();
  }

  mouseMove($event: MouseEvent) {
    if (!this.mouseMoveParameters) {
      return;
    }

    const minWidth = 40;
    const minHeight = 10;

    const newMousePosition = Utils.getMousePosition($event);
    const newFieldPosition = this.mouseMoveParameters.getNewPosition(newMousePosition);

    switch (this.mouseMoveParameters.mode) {
      case MouseMoveMode.Move:
        this.left = Math.min(this.pageSize.width - this.field.size.width, Math.max(0, newFieldPosition.x));
        this.top = Math.min(this.pageSize.height - this.field.size.height, Math.max(0, newFieldPosition.y));
        this.right = this.left + this.field.size.width;
        this.bottom = this.top + this.field.size.height;
        break;

      case MouseMoveMode.NW:
        this.left = Math.min(this.right - minWidth, Math.max(0, newFieldPosition.x));
        this.top = Math.min(this.bottom - minHeight, Math.max(0, newFieldPosition.y));
        break;

      case MouseMoveMode.NE:
        this.right = Math.max(this.left + minWidth, Math.min(this.pageSize.width, newFieldPosition.x));
        this.top = Math.min(this.bottom - minHeight, Math.max(0, newFieldPosition.y));
        break;

      case MouseMoveMode.SE:
        this.right = Math.max(this.left + minWidth, Math.min(this.pageSize.width, newFieldPosition.x));
        this.bottom = Math.max(this.top + minHeight, Math.min(this.pageSize.height, newFieldPosition.y));
        break;

      case MouseMoveMode.SW:
        this.left = Math.min(this.right - minWidth, Math.max(0, newFieldPosition.x));
        this.bottom = Math.max(this.top + minHeight, Math.min(this.pageSize.height, newFieldPosition.y));
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

  constructor(mousePosition: Point, position: Point, mode: MouseMoveMode) {
    this.position = position;
    this.mode = mode;

    this.deltaX = mousePosition.x - position.x;
    this.deltaY = mousePosition.y - position.y;
  }

  getNewPosition(newMousePosition: Point): Point {
    return new Point(
      newMousePosition.x - this.deltaX,
      newMousePosition.y - this.deltaY
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