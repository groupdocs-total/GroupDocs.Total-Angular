import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as jquery from "jquery";
import {Utils} from "../file.service";

const $ = jquery;

@Component({
  selector: 'gd-resizing',
  templateUrl: './resizing.component.html',
  styleUrls: ['./resizing.component.less']
})
export class ResizingComponent implements OnInit, AfterViewInit {

  @Input() init: boolean;
  @Input() id: number;
  @Input() se = false;
  @Input() ne = false;
  @Input() sw = false;
  @Input() nw = false;
  @Input() pageWidth: number;
  @Input() pageHeight: number;
  SE = 'se';
  NE = 'ne';
  SW = 'sw';
  NW = 'nw';

  @Output() offsetX = new EventEmitter<number>();
  @Output() offsetY = new EventEmitter<number>();
  @Output() offsetTop = new EventEmitter<number>();
  @Output() offsetLeft = new EventEmitter<number>();
  @Output() release = new EventEmitter<boolean>();

  private grab = false;
  private oldPosition: { x: number, y: number };

  constructor() {
  }

  ngAfterViewInit(): void {
    const elSE = $(this.getElementId(this.SE));
    const elNW = $(this.getElementId(this.NW));
    if (this.init && elSE && elNW && elSE.offset() && elNW.offset()) {
      let width = elSE.offset().left - elNW.offset().left;
      let height = elSE.offset().top - elNW.offset().top;
      while (width >= this.pageWidth || height >= this.pageHeight) {
        width = width / 2;
        height = height / 2;
      }
      setTimeout(() => {
        this.offsetX.emit(width);
        this.offsetY.emit(height);
      }, 100);
    }
  }

  ngOnInit() {
  }

  catchUp($event: DragEvent) {
    // ff
    $event.preventDefault();
    if ($event.dataTransfer) { // ff
      $event.dataTransfer.setData('text', 'foo');
    }
    this.grab = true;
    this.oldPosition = Utils.getMousePosition($event);
  }

  resize($event: DragEvent, el: string) {
    if (!this.grab) {
      return;
    }
    const position = Utils.getMousePosition($event);
    if (position.x === 0 && position.y === 0) {
      return;
    }
    const notSW = this.NE === el || this.NW === el;
    const notNE = this.SW === el || this.NW === el;
    this.setOffsets(position, notNE, notSW);
    if (notSW) {
      this.offsetTop.emit(position.y - this.oldPosition.y);
    }
    if (notNE) {
      this.offsetLeft.emit(position.x - this.oldPosition.x);
    }
    this.oldPosition = position;
  }

  private setOffsets(position, x: boolean, y: boolean) {
    const offsetX = x ? this.oldPosition.x - position.x : position.x - this.oldPosition.x;
    const offsetY = y ? this.oldPosition.y - position.y : position.y - this.oldPosition.y;
    this.offsetX.emit(offsetX);
    this.offsetY.emit(offsetY);
  }

  end($event: DragEvent, el: string) {
    // ff
    this.resize($event, el);
    this.release.emit(true);
    this.grab = false;
  }

  start($event: DragEvent) {
    this.drop($event);
  }

  drop($event: DragEvent) {
    $event.stopPropagation();
    $event.preventDefault();
  }

  private getElementId(el: string) {
    return "#" + el + "-" + this.id;
  }
}
