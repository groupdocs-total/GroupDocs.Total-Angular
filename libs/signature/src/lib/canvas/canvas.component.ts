import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {WindowService} from "@groupdocs.examples.angular/common-components";

@Component({
  selector: 'gd-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.less']
})
export class CanvasComponent implements OnInit, OnChanges {

  @Input() color: string;

  _ctx: CanvasRenderingContext2D;
  _isDragged = false;
  private isDesktop: boolean;

  @ViewChild('canvas', {static: true}) canvas: ElementRef;

  constructor(private _windowService: WindowService) {
    this.isDesktop = _windowService.isDesktop();
    _windowService.onResize.subscribe((w) => {
      this.isDesktop = _windowService.isDesktop();
    });
  }

  ngOnInit() {
    this._ctx = this.canvas.nativeElement.getContext('2d');
  }

  onMouseDown(e) {
    let pos;
    if (this.isDesktop) {
      pos = {x: e.offsetX, y: e.offsetY};
    } else {
      const wEvent: DragEvent = <DragEvent>window.event;
      pos = {x: wEvent.offsetX, y: wEvent.offsetY};
    }
    e.preventDefault();
    this._isDragged = true;
    this._ctx.beginPath();
    this._ctx.moveTo(pos.x, pos.y);
  }

  onMouseUp(e) {
    e.preventDefault();
    this._isDragged = false;
  }

  onMouseMove(e) {
    let pos;
    if (this.isDesktop) {
      pos = {x: e.offsetX, y: e.offsetY};
    } else {
      const wEvent: DragEvent = <DragEvent>window.event;
      pos = {x: wEvent.offsetX, y: wEvent.offsetY};
    }
    e.preventDefault();
    if (this._isDragged) {
      this._ctx.lineTo(pos.x, pos.y);
      this._ctx.stroke();
    }
  }

  setColor(color) {
    if (this._ctx) {
      this._ctx.strokeStyle = color;
    }
  }

  getImage(): string {
    return this.canvas.nativeElement.toDataURL('image/png');
  }

  clear() {
    this.canvas.nativeElement.width = this.canvas.nativeElement.width;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setColor(this.color);
  }

  getWidth() {
    return this.isDesktop ? 1079 : this._windowService.getWidth();
  }

  getHeight() {
    return this.isDesktop ? 540 : this._windowService.getHeight();
  }
}
