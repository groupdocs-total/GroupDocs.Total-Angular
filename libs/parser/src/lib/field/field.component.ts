import { Component, HostListener, OnDestroy, OnInit, Input, Output } from '@angular/core';
import { Utils, ZoomService, ModalService } from '@groupdocs.examples.angular/common-components';
import { Point, Size, TemplateField, TemplateFieldTableSeparator, TemplateFieldTypes } from '../app-models';

import * as jquery from 'jquery';
import { FieldService } from '../field.service';
import { from, Subject, Subscription } from 'rxjs';
import { EventEmitter } from '@angular/core'
import { filter, takeUntil } from 'rxjs/operators';

const $ = jquery;

export class FieldContextMenuClick {
  constructor(public fieldName: string, public action: string) {

  }
}

@Component({
  selector: 'gd-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.less']
})
export class FieldComponent implements OnInit, OnDestroy {
  pageSize: Size;

  private _left: number;
  private _top: number;
  private _right: number;
  private _bottom: number;

  private _field: TemplateField
  private _destroy = new Subject();

  isActive: boolean;

  @Output() contextMenuClick = new EventEmitter<FieldContextMenuClick>()

  constructor(
    private _fieldService: FieldService,
    private _zoomService: ZoomService) {
    _fieldService.activeChanged.pipe(takeUntil(this._destroy))
      .subscribe(name => {
        this.isActive = this._field && this._field.name === name;
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.complete();
  }

  get isFixed() {
    return this.field.fieldType === TemplateFieldTypes.FIXED;
  }

  get isTable() {
    return this.field.fieldType === TemplateFieldTypes.TABLE;
  }

  get left(): number {
    return this._left;
  }

  set left(left: number) {
    if (!this.pageSize) {
      return;
    }

    this._left = Math.min(this.pageSize.width, Math.max(0, left));
  }

  get top(): number {
    return this._top;
  }

  set top(top: number) {
    if (!this.pageSize) {
      return;
    }

    this._top = Math.min(this.pageSize.height, Math.max(0, top));
  }

  get right(): number {
    return this._right;
  }

  set right(right: number) {
    if (!this.pageSize) {
      return;
    }

    this._right = Math.min(Math.max(0, right), this.pageSize.width);
  }

  get bottom(): number {
    return this._bottom;
  }

  set bottom(bottom: number) {
    if (!this.pageSize) {
      return;
    }

    this._bottom = Math.min(Math.max(0, bottom), this.pageSize.height);
  }

  get width() {
    const width = this.right - this.left;

    return width ? width : 0;
  }

  get height() {
    const height = this.bottom - this.top;

    return height ? height : 0;
  }

  get scale() {
    return this._zoomService.zoom / 100;
  }

  renameFieldClick() {
    this.contextMenuClick.emit(new FieldContextMenuClick(this.field.name, "rename"));
  }

  deleteFieldClick() {
    this.contextMenuClick.emit(new FieldContextMenuClick(this.field.name, "remove"));
  }

  addColumnLeft() {
    let pos = this.width * 0.05;
    while (this.getColumnAt(pos) !== null && pos < this.width * 0.95 - 15) {
      pos += 15;
    }

    this.field.addColumn(null, pos);
  }

  addColumnRight() {
    let pos = this.width * 0.95;
    while (this.getColumnAt(pos) !== null && pos > this.width * 0.05 + 15) {
      pos -= 15;
    }

    this.field.addColumn(null, pos);
  }

  removeColumn(column: TemplateFieldTableSeparator) {
    this.field.removeColumn(column);
  }

  private getColumnAt(pos: number): TemplateFieldTableSeparator {
    for (let i = 0; i < this.field.columns.length; i++) {
      if (Math.abs(this.field.columns[i].value - pos) < 0.1) {
        return this.field.columns[i];
      }
    }

    return null;
  }

  set field(field: TemplateField) {
    this._field = field;

    this.left = this.field.position.x;
    this.top = this.field.position.y;

    this.right = this.field.position.x + this.field.size.width;
    this.bottom = this.field.position.y + this.field.size.height;
  }

  get field() {
    return this._field;
  }

  mouseDown($event: MouseEvent, mode: string) {
    $event.preventDefault();

    this._fieldService.setActive(this.field.name);
    const startMousePos = this._fieldService.beginMove($event);

    const left = this.left;
    const top = this.top;
    const right = this.right;
    const bottom = this.bottom;

    const column = this.field.getColumnByName(mode);
    const columnInitialPos = column ? column.value : null;

    //  let ppa = mode.startsWith('TC:');

    const mouseUpSubscription = this._fieldService.mouseUp
      .subscribe(mousePos => {
        this._field.position = new Point(this.left, this.top);
        this._field.size = new Size(this.width, this.height);

        //    ppa = false;

        mouseUpSubscription.unsubscribe();
      });

    this._fieldService.mouseMove
      .pipe(takeUntil(this._fieldService.mouseUp))
      .subscribe(mousePos => {
        if (!mousePos || !this.pageSize) {
          return;
        }

        const minWidth = 40;
        const minHeight = 15;

        const width = this.width;
        const height = this.height;

        const delta = new Point(
          (mousePos.x - startMousePos.x) / this.scale,
          (mousePos.y - startMousePos.y) / this.scale
        );

        if (columnInitialPos) {
          const v = columnInitialPos + delta.x;
          column.value = Math.max(0, Math.min(this.width, v));

          return;
        }

        switch (mode) {
          case 'Move':
            this.left = Math.min(left + delta.x, this.pageSize.width - this.width);
            this.top = Math.min(top + delta.y, this.pageSize.height - this.height);
            this.right = this.left + width;
            this.bottom = this.top + height;
            break;

          // Edges

          case 'W':
            this.left = left + delta.x;

            if (this.width < minWidth) {
              this.left = this.right - minWidth;
            }

            break;

          case 'E':
            this.right = right + delta.x;

            if (this.width < minWidth) {
              this.right = this.left + minWidth;
            }

            break;

          case 'N':
            this.top = top + delta.y;

            if (this.height < minWidth) {
              this.top = this.bottom - minHeight;
            }

            break;

          case 'S':
            this.bottom = bottom + delta.y;

            if (this.height < minHeight) {
              this.bottom = this.top + minHeight;
            }

            break;

          // Corners

          case 'NW':
            this.left = left + delta.x;
            this.top = top + delta.y;

            if (this.width < minWidth) {
              this.left = this.right - minWidth;
            }

            if (this.height < minWidth) {
              this.top = this.bottom - minHeight;
            }

            break;

          case 'SW':
            this.left = left + delta.x;
            this.bottom = bottom + delta.y;

            if (this.width < minWidth) {
              this.left = this.right - minWidth;
            }

            if (this.height < minHeight) {
              this.bottom = this.top + minHeight;
            }

            break;

          case 'NE':
            this.right = right + delta.x;
            this.top = top + delta.y;

            if (this.width < minWidth) {
              this.right = this.left + minWidth;
            }

            if (this.height < minHeight) {
              this.top = this.bottom - minHeight;
            }

            break;

          case 'SE':
            this.right = right + delta.x;
            this.bottom = bottom + delta.y;

            if (this.width < minWidth) {
              this.right = this.left + minWidth;
            }

            if (this.height < minHeight) {
              this.bottom = this.top + minHeight;
            }

            break;
        }
      });
  }

  rightClick($event) {
    $event.preventDefault();
  }
}