import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {WindowService} from "../window.service";

@Component({
  selector: 'gd-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.less']
})
export class TopToolbarComponent implements OnInit, AfterViewInit {
  @Output() startOut: EventEmitter<number> = new EventEmitter();
  @Output() endOut: EventEmitter<number> = new EventEmitter();
  _start: number = 0;
  _end: number = 0;
  private _countElem: number;
  private _showScroll = false;
  private _width: number;
  showLeft: boolean;
  showRight: boolean;
  private _mostBigElemWidth: number = 0;

  constructor(private _elementRef: ElementRef<HTMLElement>,
              private _windowService: WindowService) {
    _windowService.onResize.subscribe((w) => {
      this._width = this.calcWidth(w.innerWidth);
      this.refresh();
    });
    this.startOut.emit(0);
    this.endOut.emit(0);
  }

  calcWidth(width: number) {
    const el = this._elementRef.nativeElement ? this._elementRef.nativeElement.parentElement : null;
    if (!el) {
      return width;
    }
    return width - el.children[0].clientWidth;
  }

  ngOnInit() {
  }

  set start(start: number) {
    this._start = start;
    this.startOut.emit(start);
  }

  set end(end: number) {
    this._end = end;
    this.endOut.emit(end);
  }

  moveLeft() {
    if (this._start > 1) {
      this.start = this._start - 1;
      this.end = this._end - 1;
      this.updateShowLeftRight();
    }
  }

  moveRight() {
    if (this._end < this._countElem + 2) {
      this.start = this._start + 1;
      this.end = this._end + 1;
      this.updateShowLeftRight();
    }
  }

  get showScroll() {
    return this._showScroll;
  }

  ngAfterViewInit(): void {
    let $this = this;
    setTimeout(function () {
      $this._width = $this.calcWidth(window.innerWidth);
      $this.refresh();
    }, 500);
  }

  private refresh() {
    const el = this._elementRef.nativeElement ? this._elementRef.nativeElement.children[0] : null;
    if (!el) {
      return;
    }
    const elems = el.children;
    this._countElem = this.showScroll ? elems.length - 2 : elems.length;

    let widthOfElems = 0;
    let count = elems.length;
    for (let i = this._start; i < (this.showScroll ? elems.length - 1 : elems.length); i++) {
      const clientWidth = elems.item(i).clientWidth;
      if (this._mostBigElemWidth < clientWidth) {
        this._mostBigElemWidth = clientWidth;
      }
      widthOfElems += clientWidth == 0 ? this._mostBigElemWidth : clientWidth;
      if (widthOfElems > this._width) {
        count = i - 1;
        break;
      }
    }

    if (count == elems.length) {
      this._showScroll = false;
      this.start = 0;
      this.end = elems.length;
    } else {
      this.start = this.showScroll ? this._start : 1;
      this.end = count - (count < this._countElem ? 1 : 0) - (this._start > 1 ? 1 : 0);
      this._showScroll = true;
    }
    this.updateShowLeftRight();
  }

  updateShowLeftRight() {
    this.showLeft = this._start > 1;
    this.showRight = this._end < this._countElem;
  }

}
